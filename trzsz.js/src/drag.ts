/**
 * trzsz: https://github.com/trzsz/trzsz.js
 * Copyright(c) 2023 Lonny Wong <lonnywong@qq.com>
 * @license MIT
 */

import { BrowserFileReader } from "./browser";

/* eslint-disable require-jsdoc */

async function parseFileSystemEntry(
  pathId: number,
  item: FileSystemEntry,
  fileList: BrowserFileReader[],
  relPath: string[]
) {
  if (item.isFile) {
    await new Promise<void>((resolve) => {
      (item as FileSystemFileEntry).file((file) => {
        fileList.push(new BrowserFileReader(pathId, relPath, file, false));
        resolve();
      });
    });
  } else if (item.isDirectory) {
    fileList.push(new BrowserFileReader(pathId, relPath, null, true));
    await new Promise<void>((resolve) => {
      const dirReader = (item as FileSystemDirectoryEntry).createReader();
      dirReader.readEntries(async (entries) => {
        for (const entry of entries) {
          await parseFileSystemEntry(pathId, entry, fileList, [...relPath, entry.name]);
        }
        resolve();
      });
    });
  }
}

export async function parseDataTransferItemList(items: DataTransferItemList | FileList) {
  const fileList: BrowserFileReader[] = [];
  const entries: FileSystemEntry[] = [];

  if (items instanceof FileList) {
    // Convert FileList to simulated FileSystemEntry items
    for (const file of items) {
      entries.push({
        isFile: true,
        isDirectory: false,
        name: file.name,
        fullPath: "/" + file.name,
        file: (callback) => callback(file),
      } as unknown as FileSystemEntry);
    }
  } else {
    // Original handling for DataTransferItemList
    for (const item of items) {
      const entry = item.webkitGetAsEntry();
      if (entry) entries.push(entry);
    }
  }

  // Process each entry as before
  for (let i = 0; i < entries.length; i++) {
    const item = entries[i];
    if (item) {
      await parseFileSystemEntry(i, item, fileList, [item.name]);
    }
  }

  return fileList;
}
