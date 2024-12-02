// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"eOy60":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "75048fc274598e8c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"5YAoe":[function(require,module,exports) {
var process = require("7dcaf95826f938bd");
var Buffer = require("30c65e3a353a620d").Buffer;
!function(t, e) {
    e(exports);
}(this, function(t) {
    "use strict";
    function e(t, e, i, n) {
        return new (i || (i = Promise))(function(r, s) {
            function a(t) {
                try {
                    l(n.next(t));
                } catch (t) {
                    s(t);
                }
            }
            function o(t) {
                try {
                    l(n.throw(t));
                } catch (t) {
                    s(t);
                }
            }
            function l(t) {
                var e;
                t.done ? r(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
                    t(e);
                })).then(a, o);
            }
            l((n = n.apply(t, e || [])).next());
        });
    }
    function i(t) {
        var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], n = 0;
        if (i) return i.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && n >= t.length && (t = void 0), {
                    value: t && t[n++],
                    done: !t
                };
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function n(t) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var e, n = t[Symbol.asyncIterator];
        return n ? n.call(t) : (t = i(t), e = {}, r("next"), r("throw"), r("return"), e[Symbol.asyncIterator] = function() {
            return this;
        }, e);
        function r(i) {
            e[i] = t[i] && function(e) {
                return new Promise(function(n, r) {
                    (function(t, e, i, n) {
                        Promise.resolve(n).then(function(e) {
                            t({
                                value: e,
                                done: i
                            });
                        }, e);
                    })(n, r, (e = t[i](e)).done, e.value);
                });
            };
        }
    }
    "function" == typeof SuppressedError && SuppressedError;
    function r(t) {
        let e = t.length;
        for(; --e >= 0;)t[e] = 0;
    }
    const s = 256, a = 286, o = 30, l = 15, h = new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        3,
        3,
        3,
        3,
        4,
        4,
        4,
        4,
        5,
        5,
        5,
        5,
        0
    ]), d = new Uint8Array([
        0,
        0,
        0,
        0,
        1,
        1,
        2,
        2,
        3,
        3,
        4,
        4,
        5,
        5,
        6,
        6,
        7,
        7,
        8,
        8,
        9,
        9,
        10,
        10,
        11,
        11,
        12,
        12,
        13,
        13
    ]), u = new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        3,
        7
    ]), f = new Uint8Array([
        16,
        17,
        18,
        0,
        8,
        7,
        9,
        6,
        10,
        5,
        11,
        4,
        12,
        3,
        13,
        2,
        14,
        1,
        15
    ]), c = new Array(576);
    r(c);
    const _ = new Array(60);
    r(_);
    const p = new Array(512);
    r(p);
    const w = new Array(256);
    r(w);
    const m = new Array(29);
    r(m);
    const g = new Array(o);
    function y(t, e, i, n, r) {
        this.static_tree = t, this.extra_bits = e, this.extra_base = i, this.elems = n, this.max_length = r, this.has_stree = t && t.length;
    }
    let b, v, k;
    function x(t, e) {
        this.dyn_tree = t, this.max_code = 0, this.stat_desc = e;
    }
    r(g);
    const z = (t)=>t < 256 ? p[t] : p[256 + (t >>> 7)], A = (t, e)=>{
        t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255;
    }, S = (t, e, i)=>{
        t.bi_valid > 16 - i ? (t.bi_buf |= e << t.bi_valid & 65535, A(t, t.bi_buf), t.bi_buf = e >> 16 - t.bi_valid, t.bi_valid += i - 16) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += i);
    }, T = (t, e, i)=>{
        S(t, i[2 * e], i[2 * e + 1]);
    }, F = (t, e)=>{
        let i = 0;
        do i |= 1 & t, t >>>= 1, i <<= 1;
        while (--e > 0);
        return i >>> 1;
    }, I = (t, e, i)=>{
        const n = new Array(16);
        let r, s, a = 0;
        for(r = 1; r <= l; r++)a = a + i[r - 1] << 1, n[r] = a;
        for(s = 0; s <= e; s++){
            let e = t[2 * s + 1];
            0 !== e && (t[2 * s] = F(n[e]++, e));
        }
    }, E = (t)=>{
        let e;
        for(e = 0; e < a; e++)t.dyn_ltree[2 * e] = 0;
        for(e = 0; e < o; e++)t.dyn_dtree[2 * e] = 0;
        for(e = 0; e < 19; e++)t.bl_tree[2 * e] = 0;
        t.dyn_ltree[512] = 1, t.opt_len = t.static_len = 0, t.sym_next = t.matches = 0;
    }, C = (t)=>{
        t.bi_valid > 8 ? A(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0;
    }, B = (t, e, i, n)=>{
        const r = 2 * e, s = 2 * i;
        return t[r] < t[s] || t[r] === t[s] && n[e] <= n[i];
    }, D = (t, e, i)=>{
        const n = t.heap[i];
        let r = i << 1;
        for(; r <= t.heap_len && (r < t.heap_len && B(e, t.heap[r + 1], t.heap[r], t.depth) && r++, !B(e, n, t.heap[r], t.depth));)t.heap[i] = t.heap[r], i = r, r <<= 1;
        t.heap[i] = n;
    }, R = (t, e, i)=>{
        let n, r, a, o, l = 0;
        if (0 !== t.sym_next) do n = 255 & t.pending_buf[t.sym_buf + l++], n += (255 & t.pending_buf[t.sym_buf + l++]) << 8, r = t.pending_buf[t.sym_buf + l++], 0 === n ? T(t, r, e) : (a = w[r], T(t, a + s + 1, e), o = h[a], 0 !== o && (r -= m[a], S(t, r, o)), n--, a = z(n), T(t, a, i), o = d[a], 0 !== o && (n -= g[a], S(t, n, o)));
        while (l < t.sym_next);
        T(t, 256, e);
    }, U = (t, e)=>{
        const i = e.dyn_tree, n = e.stat_desc.static_tree, r = e.stat_desc.has_stree, s = e.stat_desc.elems;
        let a, o, h, d = -1;
        for(t.heap_len = 0, t.heap_max = 573, a = 0; a < s; a++)0 !== i[2 * a] ? (t.heap[++t.heap_len] = d = a, t.depth[a] = 0) : i[2 * a + 1] = 0;
        for(; t.heap_len < 2;)h = t.heap[++t.heap_len] = d < 2 ? ++d : 0, i[2 * h] = 1, t.depth[h] = 0, t.opt_len--, r && (t.static_len -= n[2 * h + 1]);
        for(e.max_code = d, a = t.heap_len >> 1; a >= 1; a--)D(t, i, a);
        h = s;
        do a = t.heap[1], t.heap[1] = t.heap[t.heap_len--], D(t, i, 1), o = t.heap[1], t.heap[--t.heap_max] = a, t.heap[--t.heap_max] = o, i[2 * h] = i[2 * a] + i[2 * o], t.depth[h] = (t.depth[a] >= t.depth[o] ? t.depth[a] : t.depth[o]) + 1, i[2 * a + 1] = i[2 * o + 1] = h, t.heap[1] = h++, D(t, i, 1);
        while (t.heap_len >= 2);
        t.heap[--t.heap_max] = t.heap[1], ((t, e)=>{
            const i = e.dyn_tree, n = e.max_code, r = e.stat_desc.static_tree, s = e.stat_desc.has_stree, a = e.stat_desc.extra_bits, o = e.stat_desc.extra_base, h = e.stat_desc.max_length;
            let d, u, f, c, _, p, w = 0;
            for(c = 0; c <= l; c++)t.bl_count[c] = 0;
            for(i[2 * t.heap[t.heap_max] + 1] = 0, d = t.heap_max + 1; d < 573; d++)u = t.heap[d], c = i[2 * i[2 * u + 1] + 1] + 1, c > h && (c = h, w++), i[2 * u + 1] = c, u > n || (t.bl_count[c]++, _ = 0, u >= o && (_ = a[u - o]), p = i[2 * u], t.opt_len += p * (c + _), s && (t.static_len += p * (r[2 * u + 1] + _)));
            if (0 !== w) {
                do {
                    for(c = h - 1; 0 === t.bl_count[c];)c--;
                    t.bl_count[c]--, t.bl_count[c + 1] += 2, t.bl_count[h]--, w -= 2;
                }while (w > 0);
                for(c = h; 0 !== c; c--)for(u = t.bl_count[c]; 0 !== u;)f = t.heap[--d], f > n || (i[2 * f + 1] !== c && (t.opt_len += (c - i[2 * f + 1]) * i[2 * f], i[2 * f + 1] = c), u--);
            }
        })(t, e), I(i, d, t.bl_count);
    }, L = (t, e, i)=>{
        let n, r, s = -1, a = e[1], o = 0, l = 7, h = 4;
        for(0 === a && (l = 138, h = 3), e[2 * (i + 1) + 1] = 65535, n = 0; n <= i; n++)r = a, a = e[2 * (n + 1) + 1], ++o < l && r === a || (o < h ? t.bl_tree[2 * r] += o : 0 !== r ? (r !== s && t.bl_tree[2 * r]++, t.bl_tree[32]++) : o <= 10 ? t.bl_tree[34]++ : t.bl_tree[36]++, o = 0, s = r, 0 === a ? (l = 138, h = 3) : r === a ? (l = 6, h = 3) : (l = 7, h = 4));
    }, N = (t, e, i)=>{
        let n, r, s = -1, a = e[1], o = 0, l = 7, h = 4;
        for(0 === a && (l = 138, h = 3), n = 0; n <= i; n++)if (r = a, a = e[2 * (n + 1) + 1], !(++o < l && r === a)) {
            if (o < h) do T(t, r, t.bl_tree);
            while (0 != --o);
            else 0 !== r ? (r !== s && (T(t, r, t.bl_tree), o--), T(t, 16, t.bl_tree), S(t, o - 3, 2)) : o <= 10 ? (T(t, 17, t.bl_tree), S(t, o - 3, 3)) : (T(t, 18, t.bl_tree), S(t, o - 11, 7));
            o = 0, s = r, 0 === a ? (l = 138, h = 3) : r === a ? (l = 6, h = 3) : (l = 7, h = 4);
        }
    };
    let P = !1;
    const O = (t, e, i, n)=>{
        S(t, 0 + (n ? 1 : 0), 3), C(t), A(t, i), A(t, ~i), i && t.pending_buf.set(t.window.subarray(e, e + i), t.pending), t.pending += i;
    };
    var Z = (t)=>{
        P || ((()=>{
            let t, e, i, n, r;
            const s = new Array(16);
            for(i = 0, n = 0; n < 28; n++)for(m[n] = i, t = 0; t < 1 << h[n]; t++)w[i++] = n;
            for(w[i - 1] = n, r = 0, n = 0; n < 16; n++)for(g[n] = r, t = 0; t < 1 << d[n]; t++)p[r++] = n;
            for(r >>= 7; n < o; n++)for(g[n] = r << 7, t = 0; t < 1 << d[n] - 7; t++)p[256 + r++] = n;
            for(e = 0; e <= l; e++)s[e] = 0;
            for(t = 0; t <= 143;)c[2 * t + 1] = 8, t++, s[8]++;
            for(; t <= 255;)c[2 * t + 1] = 9, t++, s[9]++;
            for(; t <= 279;)c[2 * t + 1] = 7, t++, s[7]++;
            for(; t <= 287;)c[2 * t + 1] = 8, t++, s[8]++;
            for(I(c, 287, s), t = 0; t < o; t++)_[2 * t + 1] = 5, _[2 * t] = F(t, 5);
            b = new y(c, h, 257, a, l), v = new y(_, d, 0, o, l), k = new y(new Array(0), u, 0, 19, 7);
        })(), P = !0), t.l_desc = new x(t.dyn_ltree, b), t.d_desc = new x(t.dyn_dtree, v), t.bl_desc = new x(t.bl_tree, k), t.bi_buf = 0, t.bi_valid = 0, E(t);
    }, M = (t, e, i, n)=>{
        let r, a, o = 0;
        t.level > 0 ? (2 === t.strm.data_type && (t.strm.data_type = ((t)=>{
            let e, i = 4093624447;
            for(e = 0; e <= 31; e++, i >>>= 1)if (1 & i && 0 !== t.dyn_ltree[2 * e]) return 0;
            if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return 1;
            for(e = 32; e < s; e++)if (0 !== t.dyn_ltree[2 * e]) return 1;
            return 0;
        })(t)), U(t, t.l_desc), U(t, t.d_desc), o = ((t)=>{
            let e;
            for(L(t, t.dyn_ltree, t.l_desc.max_code), L(t, t.dyn_dtree, t.d_desc.max_code), U(t, t.bl_desc), e = 18; e >= 3 && 0 === t.bl_tree[2 * f[e] + 1]; e--);
            return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e;
        })(t), r = t.opt_len + 3 + 7 >>> 3, a = t.static_len + 3 + 7 >>> 3, a <= r && (r = a)) : r = a = i + 5, i + 4 <= r && -1 !== e ? O(t, e, i, n) : 4 === t.strategy || a === r ? (S(t, 2 + (n ? 1 : 0), 3), R(t, c, _)) : (S(t, 4 + (n ? 1 : 0), 3), ((t, e, i, n)=>{
            let r;
            for(S(t, e - 257, 5), S(t, i - 1, 5), S(t, n - 4, 4), r = 0; r < n; r++)S(t, t.bl_tree[2 * f[r] + 1], 3);
            N(t, t.dyn_ltree, e - 1), N(t, t.dyn_dtree, i - 1);
        })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, o + 1), R(t, t.dyn_ltree, t.dyn_dtree)), E(t), n && C(t);
    }, $ = {
        _tr_init: Z,
        _tr_stored_block: O,
        _tr_flush_block: M,
        _tr_tally: (t, e, i)=>(t.pending_buf[t.sym_buf + t.sym_next++] = e, t.pending_buf[t.sym_buf + t.sym_next++] = e >> 8, t.pending_buf[t.sym_buf + t.sym_next++] = i, 0 === e ? t.dyn_ltree[2 * i]++ : (t.matches++, e--, t.dyn_ltree[2 * (w[i] + s + 1)]++, t.dyn_dtree[2 * z(e)]++), t.sym_next === t.sym_end),
        _tr_align: (t)=>{
            S(t, 2, 3), T(t, 256, c), ((t)=>{
                16 === t.bi_valid ? (A(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8);
            })(t);
        }
    };
    var j = (t, e, i, n)=>{
        let r = 65535 & t | 0, s = t >>> 16 & 65535 | 0, a = 0;
        for(; 0 !== i;){
            a = i > 2e3 ? 2e3 : i, i -= a;
            do r = r + e[n++] | 0, s = s + r | 0;
            while (--a);
            r %= 65521, s %= 65521;
        }
        return r | s << 16 | 0;
    };
    const H = new Uint32Array((()=>{
        let t, e = [];
        for(var i = 0; i < 256; i++){
            t = i;
            for(var n = 0; n < 8; n++)t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
            e[i] = t;
        }
        return e;
    })());
    var W = (t, e, i, n)=>{
        const r = H, s = n + i;
        t ^= -1;
        for(let i = n; i < s; i++)t = t >>> 8 ^ r[255 & (t ^ e[i])];
        return -1 ^ t;
    }, q = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version"
    }, K = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_MEM_ERROR: -4,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8
    };
    const { _tr_init: J, _tr_stored_block: G, _tr_flush_block: X, _tr_tally: Y, _tr_align: Q } = $, { Z_NO_FLUSH: V, Z_PARTIAL_FLUSH: tt, Z_FULL_FLUSH: et, Z_FINISH: it, Z_BLOCK: nt, Z_OK: rt, Z_STREAM_END: st, Z_STREAM_ERROR: at, Z_DATA_ERROR: ot, Z_BUF_ERROR: lt, Z_DEFAULT_COMPRESSION: ht, Z_FILTERED: dt, Z_HUFFMAN_ONLY: ut, Z_RLE: ft, Z_FIXED: ct, Z_DEFAULT_STRATEGY: _t, Z_UNKNOWN: pt, Z_DEFLATED: wt } = K, mt = 258, gt = 262, yt = 42, bt = 113, vt = 666, kt = (t, e)=>(t.msg = q[e], e), xt = (t)=>2 * t - (t > 4 ? 9 : 0), zt = (t)=>{
        let e = t.length;
        for(; --e >= 0;)t[e] = 0;
    }, At = (t)=>{
        let e, i, n, r = t.w_size;
        e = t.hash_size, n = e;
        do i = t.head[--n], t.head[n] = i >= r ? i - r : 0;
        while (--e);
        e = r, n = e;
        do i = t.prev[--n], t.prev[n] = i >= r ? i - r : 0;
        while (--e);
    };
    let St = (t, e, i)=>(e << t.hash_shift ^ i) & t.hash_mask;
    const Tt = (t)=>{
        const e = t.state;
        let i = e.pending;
        i > t.avail_out && (i = t.avail_out), 0 !== i && (t.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + i), t.next_out), t.next_out += i, e.pending_out += i, t.total_out += i, t.avail_out -= i, e.pending -= i, 0 === e.pending && (e.pending_out = 0));
    }, Ft = (t, e)=>{
        X(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, Tt(t.strm);
    }, It = (t, e)=>{
        t.pending_buf[t.pending++] = e;
    }, Et = (t, e)=>{
        t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = 255 & e;
    }, Ct = (t, e, i, n)=>{
        let r = t.avail_in;
        return r > n && (r = n), 0 === r ? 0 : (t.avail_in -= r, e.set(t.input.subarray(t.next_in, t.next_in + r), i), 1 === t.state.wrap ? t.adler = j(t.adler, e, r, i) : 2 === t.state.wrap && (t.adler = W(t.adler, e, r, i)), t.next_in += r, t.total_in += r, r);
    }, Bt = (t, e)=>{
        let i, n, r = t.max_chain_length, s = t.strstart, a = t.prev_length, o = t.nice_match;
        const l = t.strstart > t.w_size - gt ? t.strstart - (t.w_size - gt) : 0, h = t.window, d = t.w_mask, u = t.prev, f = t.strstart + mt;
        let c = h[s + a - 1], _ = h[s + a];
        t.prev_length >= t.good_match && (r >>= 2), o > t.lookahead && (o = t.lookahead);
        do if (i = e, h[i + a] === _ && h[i + a - 1] === c && h[i] === h[s] && h[++i] === h[s + 1]) {
            s += 2, i++;
            do ;
            while (h[++s] === h[++i] && h[++s] === h[++i] && h[++s] === h[++i] && h[++s] === h[++i] && h[++s] === h[++i] && h[++s] === h[++i] && h[++s] === h[++i] && h[++s] === h[++i] && s < f);
            if (n = mt - (f - s), s = f - mt, n > a) {
                if (t.match_start = e, a = n, n >= o) break;
                c = h[s + a - 1], _ = h[s + a];
            }
        }
        while ((e = u[e & d]) > l && 0 != --r);
        return a <= t.lookahead ? a : t.lookahead;
    }, Dt = (t)=>{
        const e = t.w_size;
        let i, n, r;
        do {
            if (n = t.window_size - t.lookahead - t.strstart, t.strstart >= e + (e - gt) && (t.window.set(t.window.subarray(e, e + e - n), 0), t.match_start -= e, t.strstart -= e, t.block_start -= e, t.insert > t.strstart && (t.insert = t.strstart), At(t), n += e), 0 === t.strm.avail_in) break;
            if (i = Ct(t.strm, t.window, t.strstart + t.lookahead, n), t.lookahead += i, t.lookahead + t.insert >= 3) for(r = t.strstart - t.insert, t.ins_h = t.window[r], t.ins_h = St(t, t.ins_h, t.window[r + 1]); t.insert && (t.ins_h = St(t, t.ins_h, t.window[r + 3 - 1]), t.prev[r & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = r, r++, t.insert--, !(t.lookahead + t.insert < 3)););
        }while (t.lookahead < gt && 0 !== t.strm.avail_in);
    }, Rt = (t, e)=>{
        let i, n, r, s = t.pending_buf_size - 5 > t.w_size ? t.w_size : t.pending_buf_size - 5, a = 0, o = t.strm.avail_in;
        do {
            if (i = 65535, r = t.bi_valid + 42 >> 3, t.strm.avail_out < r) break;
            if (r = t.strm.avail_out - r, n = t.strstart - t.block_start, i > n + t.strm.avail_in && (i = n + t.strm.avail_in), i > r && (i = r), i < s && (0 === i && e !== it || e === V || i !== n + t.strm.avail_in)) break;
            a = e === it && i === n + t.strm.avail_in ? 1 : 0, G(t, 0, 0, a), t.pending_buf[t.pending - 4] = i, t.pending_buf[t.pending - 3] = i >> 8, t.pending_buf[t.pending - 2] = ~i, t.pending_buf[t.pending - 1] = ~i >> 8, Tt(t.strm), n && (n > i && (n = i), t.strm.output.set(t.window.subarray(t.block_start, t.block_start + n), t.strm.next_out), t.strm.next_out += n, t.strm.avail_out -= n, t.strm.total_out += n, t.block_start += n, i -= n), i && (Ct(t.strm, t.strm.output, t.strm.next_out, i), t.strm.next_out += i, t.strm.avail_out -= i, t.strm.total_out += i);
        }while (0 === a);
        return o -= t.strm.avail_in, o && (o >= t.w_size ? (t.matches = 2, t.window.set(t.strm.input.subarray(t.strm.next_in - t.w_size, t.strm.next_in), 0), t.strstart = t.w_size, t.insert = t.strstart) : (t.window_size - t.strstart <= o && (t.strstart -= t.w_size, t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0), t.matches < 2 && t.matches++, t.insert > t.strstart && (t.insert = t.strstart)), t.window.set(t.strm.input.subarray(t.strm.next_in - o, t.strm.next_in), t.strstart), t.strstart += o, t.insert += o > t.w_size - t.insert ? t.w_size - t.insert : o), t.block_start = t.strstart), t.high_water < t.strstart && (t.high_water = t.strstart), a ? 4 : e !== V && e !== it && 0 === t.strm.avail_in && t.strstart === t.block_start ? 2 : (r = t.window_size - t.strstart, t.strm.avail_in > r && t.block_start >= t.w_size && (t.block_start -= t.w_size, t.strstart -= t.w_size, t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0), t.matches < 2 && t.matches++, r += t.w_size, t.insert > t.strstart && (t.insert = t.strstart)), r > t.strm.avail_in && (r = t.strm.avail_in), r && (Ct(t.strm, t.window, t.strstart, r), t.strstart += r, t.insert += r > t.w_size - t.insert ? t.w_size - t.insert : r), t.high_water < t.strstart && (t.high_water = t.strstart), r = t.bi_valid + 42 >> 3, r = t.pending_buf_size - r > 65535 ? 65535 : t.pending_buf_size - r, s = r > t.w_size ? t.w_size : r, n = t.strstart - t.block_start, (n >= s || (n || e === it) && e !== V && 0 === t.strm.avail_in && n <= r) && (i = n > r ? r : n, a = e === it && 0 === t.strm.avail_in && i === n ? 1 : 0, G(t, t.block_start, i, a), t.block_start += i, Tt(t.strm)), a ? 3 : 1);
    }, Ut = (t, e)=>{
        let i, n;
        for(;;){
            if (t.lookahead < gt) {
                if (Dt(t), t.lookahead < gt && e === V) return 1;
                if (0 === t.lookahead) break;
            }
            if (i = 0, t.lookahead >= 3 && (t.ins_h = St(t, t.ins_h, t.window[t.strstart + 3 - 1]), i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== i && t.strstart - i <= t.w_size - gt && (t.match_length = Bt(t, i)), t.match_length >= 3) {
                if (n = Y(t, t.strstart - t.match_start, t.match_length - 3), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= 3) {
                    t.match_length--;
                    do t.strstart++, t.ins_h = St(t, t.ins_h, t.window[t.strstart + 3 - 1]), i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart;
                    while (0 != --t.match_length);
                    t.strstart++;
                } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = St(t, t.ins_h, t.window[t.strstart + 1]);
            } else n = Y(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
            if (n && (Ft(t, !1), 0 === t.strm.avail_out)) return 1;
        }
        return t.insert = t.strstart < 2 ? t.strstart : 2, e === it ? (Ft(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (Ft(t, !1), 0 === t.strm.avail_out) ? 1 : 2;
    }, Lt = (t, e)=>{
        let i, n, r;
        for(;;){
            if (t.lookahead < gt) {
                if (Dt(t), t.lookahead < gt && e === V) return 1;
                if (0 === t.lookahead) break;
            }
            if (i = 0, t.lookahead >= 3 && (t.ins_h = St(t, t.ins_h, t.window[t.strstart + 3 - 1]), i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = 2, 0 !== i && t.prev_length < t.max_lazy_match && t.strstart - i <= t.w_size - gt && (t.match_length = Bt(t, i), t.match_length <= 5 && (t.strategy === dt || 3 === t.match_length && t.strstart - t.match_start > 4096) && (t.match_length = 2)), t.prev_length >= 3 && t.match_length <= t.prev_length) {
                r = t.strstart + t.lookahead - 3, n = Y(t, t.strstart - 1 - t.prev_match, t.prev_length - 3), t.lookahead -= t.prev_length - 1, t.prev_length -= 2;
                do ++t.strstart <= r && (t.ins_h = St(t, t.ins_h, t.window[t.strstart + 3 - 1]), i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart);
                while (0 != --t.prev_length);
                if (t.match_available = 0, t.match_length = 2, t.strstart++, n && (Ft(t, !1), 0 === t.strm.avail_out)) return 1;
            } else if (t.match_available) {
                if (n = Y(t, 0, t.window[t.strstart - 1]), n && Ft(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) return 1;
            } else t.match_available = 1, t.strstart++, t.lookahead--;
        }
        return t.match_available && (n = Y(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < 2 ? t.strstart : 2, e === it ? (Ft(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (Ft(t, !1), 0 === t.strm.avail_out) ? 1 : 2;
    };
    function Nt(t, e, i, n, r) {
        this.good_length = t, this.max_lazy = e, this.nice_length = i, this.max_chain = n, this.func = r;
    }
    const Pt = [
        new Nt(0, 0, 0, 0, Rt),
        new Nt(4, 4, 8, 4, Ut),
        new Nt(4, 5, 16, 8, Ut),
        new Nt(4, 6, 32, 32, Ut),
        new Nt(4, 4, 16, 16, Lt),
        new Nt(8, 16, 32, 32, Lt),
        new Nt(8, 16, 128, 128, Lt),
        new Nt(8, 32, 128, 256, Lt),
        new Nt(32, 128, 258, 1024, Lt),
        new Nt(32, 258, 258, 4096, Lt)
    ];
    function Ot() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = wt, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(1146), this.dyn_dtree = new Uint16Array(122), this.bl_tree = new Uint16Array(78), zt(this.dyn_ltree), zt(this.dyn_dtree), zt(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(16), this.heap = new Uint16Array(573), zt(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(573), zt(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
    }
    const Zt = (t)=>{
        if (!t) return 1;
        const e = t.state;
        return !e || e.strm !== t || e.status !== yt && 57 !== e.status && 69 !== e.status && 73 !== e.status && 91 !== e.status && 103 !== e.status && e.status !== bt && e.status !== vt ? 1 : 0;
    }, Mt = (t)=>{
        if (Zt(t)) return kt(t, at);
        t.total_in = t.total_out = 0, t.data_type = pt;
        const e = t.state;
        return e.pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = 2 === e.wrap ? 57 : e.wrap ? yt : bt, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = -2, J(e), rt;
    }, $t = (t)=>{
        const e = Mt(t);
        var i;
        return e === rt && ((i = t.state).window_size = 2 * i.w_size, zt(i.head), i.max_lazy_match = Pt[i.level].max_lazy, i.good_match = Pt[i.level].good_length, i.nice_match = Pt[i.level].nice_length, i.max_chain_length = Pt[i.level].max_chain, i.strstart = 0, i.block_start = 0, i.lookahead = 0, i.insert = 0, i.match_length = i.prev_length = 2, i.match_available = 0, i.ins_h = 0), e;
    }, jt = (t, e, i, n, r, s)=>{
        if (!t) return at;
        let a = 1;
        if (e === ht && (e = 6), n < 0 ? (a = 0, n = -n) : n > 15 && (a = 2, n -= 16), r < 1 || r > 9 || i !== wt || n < 8 || n > 15 || e < 0 || e > 9 || s < 0 || s > ct || 8 === n && 1 !== a) return kt(t, at);
        8 === n && (n = 9);
        const o = new Ot;
        return t.state = o, o.strm = t, o.status = yt, o.wrap = a, o.gzhead = null, o.w_bits = n, o.w_size = 1 << o.w_bits, o.w_mask = o.w_size - 1, o.hash_bits = r + 7, o.hash_size = 1 << o.hash_bits, o.hash_mask = o.hash_size - 1, o.hash_shift = ~~((o.hash_bits + 3 - 1) / 3), o.window = new Uint8Array(2 * o.w_size), o.head = new Uint16Array(o.hash_size), o.prev = new Uint16Array(o.w_size), o.lit_bufsize = 1 << r + 6, o.pending_buf_size = 4 * o.lit_bufsize, o.pending_buf = new Uint8Array(o.pending_buf_size), o.sym_buf = o.lit_bufsize, o.sym_end = 3 * (o.lit_bufsize - 1), o.level = e, o.strategy = s, o.method = i, $t(t);
    };
    var Ht = {
        deflateInit: (t, e)=>jt(t, e, wt, 15, 8, _t),
        deflateInit2: jt,
        deflateReset: $t,
        deflateResetKeep: Mt,
        deflateSetHeader: (t, e)=>Zt(t) || 2 !== t.state.wrap ? at : (t.state.gzhead = e, rt),
        deflate: (t, e)=>{
            if (Zt(t) || e > nt || e < 0) return t ? kt(t, at) : at;
            const i = t.state;
            if (!t.output || 0 !== t.avail_in && !t.input || i.status === vt && e !== it) return kt(t, 0 === t.avail_out ? lt : at);
            const n = i.last_flush;
            if (i.last_flush = e, 0 !== i.pending) {
                if (Tt(t), 0 === t.avail_out) return i.last_flush = -1, rt;
            } else if (0 === t.avail_in && xt(e) <= xt(n) && e !== it) return kt(t, lt);
            if (i.status === vt && 0 !== t.avail_in) return kt(t, lt);
            if (i.status === yt && 0 === i.wrap && (i.status = bt), i.status === yt) {
                let e = wt + (i.w_bits - 8 << 4) << 8, n = -1;
                if (n = i.strategy >= ut || i.level < 2 ? 0 : i.level < 6 ? 1 : 6 === i.level ? 2 : 3, e |= n << 6, 0 !== i.strstart && (e |= 32), e += 31 - e % 31, Et(i, e), 0 !== i.strstart && (Et(i, t.adler >>> 16), Et(i, 65535 & t.adler)), t.adler = 1, i.status = bt, Tt(t), 0 !== i.pending) return i.last_flush = -1, rt;
            }
            if (57 === i.status) {
                if (t.adler = 0, It(i, 31), It(i, 139), It(i, 8), i.gzhead) It(i, (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0)), It(i, 255 & i.gzhead.time), It(i, i.gzhead.time >> 8 & 255), It(i, i.gzhead.time >> 16 & 255), It(i, i.gzhead.time >> 24 & 255), It(i, 9 === i.level ? 2 : i.strategy >= ut || i.level < 2 ? 4 : 0), It(i, 255 & i.gzhead.os), i.gzhead.extra && i.gzhead.extra.length && (It(i, 255 & i.gzhead.extra.length), It(i, i.gzhead.extra.length >> 8 & 255)), i.gzhead.hcrc && (t.adler = W(t.adler, i.pending_buf, i.pending, 0)), i.gzindex = 0, i.status = 69;
                else if (It(i, 0), It(i, 0), It(i, 0), It(i, 0), It(i, 0), It(i, 9 === i.level ? 2 : i.strategy >= ut || i.level < 2 ? 4 : 0), It(i, 3), i.status = bt, Tt(t), 0 !== i.pending) return i.last_flush = -1, rt;
            }
            if (69 === i.status) {
                if (i.gzhead.extra) {
                    let e = i.pending, n = (65535 & i.gzhead.extra.length) - i.gzindex;
                    for(; i.pending + n > i.pending_buf_size;){
                        let r = i.pending_buf_size - i.pending;
                        if (i.pending_buf.set(i.gzhead.extra.subarray(i.gzindex, i.gzindex + r), i.pending), i.pending = i.pending_buf_size, i.gzhead.hcrc && i.pending > e && (t.adler = W(t.adler, i.pending_buf, i.pending - e, e)), i.gzindex += r, Tt(t), 0 !== i.pending) return i.last_flush = -1, rt;
                        e = 0, n -= r;
                    }
                    let r = new Uint8Array(i.gzhead.extra);
                    i.pending_buf.set(r.subarray(i.gzindex, i.gzindex + n), i.pending), i.pending += n, i.gzhead.hcrc && i.pending > e && (t.adler = W(t.adler, i.pending_buf, i.pending - e, e)), i.gzindex = 0;
                }
                i.status = 73;
            }
            if (73 === i.status) {
                if (i.gzhead.name) {
                    let e, n = i.pending;
                    do {
                        if (i.pending === i.pending_buf_size) {
                            if (i.gzhead.hcrc && i.pending > n && (t.adler = W(t.adler, i.pending_buf, i.pending - n, n)), Tt(t), 0 !== i.pending) return i.last_flush = -1, rt;
                            n = 0;
                        }
                        e = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0, It(i, e);
                    }while (0 !== e);
                    i.gzhead.hcrc && i.pending > n && (t.adler = W(t.adler, i.pending_buf, i.pending - n, n)), i.gzindex = 0;
                }
                i.status = 91;
            }
            if (91 === i.status) {
                if (i.gzhead.comment) {
                    let e, n = i.pending;
                    do {
                        if (i.pending === i.pending_buf_size) {
                            if (i.gzhead.hcrc && i.pending > n && (t.adler = W(t.adler, i.pending_buf, i.pending - n, n)), Tt(t), 0 !== i.pending) return i.last_flush = -1, rt;
                            n = 0;
                        }
                        e = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0, It(i, e);
                    }while (0 !== e);
                    i.gzhead.hcrc && i.pending > n && (t.adler = W(t.adler, i.pending_buf, i.pending - n, n));
                }
                i.status = 103;
            }
            if (103 === i.status) {
                if (i.gzhead.hcrc) {
                    if (i.pending + 2 > i.pending_buf_size && (Tt(t), 0 !== i.pending)) return i.last_flush = -1, rt;
                    It(i, 255 & t.adler), It(i, t.adler >> 8 & 255), t.adler = 0;
                }
                if (i.status = bt, Tt(t), 0 !== i.pending) return i.last_flush = -1, rt;
            }
            if (0 !== t.avail_in || 0 !== i.lookahead || e !== V && i.status !== vt) {
                let n = 0 === i.level ? Rt(i, e) : i.strategy === ut ? ((t, e)=>{
                    let i;
                    for(;;){
                        if (0 === t.lookahead && (Dt(t), 0 === t.lookahead)) {
                            if (e === V) return 1;
                            break;
                        }
                        if (t.match_length = 0, i = Y(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, i && (Ft(t, !1), 0 === t.strm.avail_out)) return 1;
                    }
                    return t.insert = 0, e === it ? (Ft(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (Ft(t, !1), 0 === t.strm.avail_out) ? 1 : 2;
                })(i, e) : i.strategy === ft ? ((t, e)=>{
                    let i, n, r, s;
                    const a = t.window;
                    for(;;){
                        if (t.lookahead <= mt) {
                            if (Dt(t), t.lookahead <= mt && e === V) return 1;
                            if (0 === t.lookahead) break;
                        }
                        if (t.match_length = 0, t.lookahead >= 3 && t.strstart > 0 && (r = t.strstart - 1, n = a[r], n === a[++r] && n === a[++r] && n === a[++r])) {
                            s = t.strstart + mt;
                            do ;
                            while (n === a[++r] && n === a[++r] && n === a[++r] && n === a[++r] && n === a[++r] && n === a[++r] && n === a[++r] && n === a[++r] && r < s);
                            t.match_length = mt - (s - r), t.match_length > t.lookahead && (t.match_length = t.lookahead);
                        }
                        if (t.match_length >= 3 ? (i = Y(t, 1, t.match_length - 3), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (i = Y(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), i && (Ft(t, !1), 0 === t.strm.avail_out)) return 1;
                    }
                    return t.insert = 0, e === it ? (Ft(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (Ft(t, !1), 0 === t.strm.avail_out) ? 1 : 2;
                })(i, e) : Pt[i.level].func(i, e);
                if (3 !== n && 4 !== n || (i.status = vt), 1 === n || 3 === n) return 0 === t.avail_out && (i.last_flush = -1), rt;
                if (2 === n && (e === tt ? Q(i) : e !== nt && (G(i, 0, 0, !1), e === et && (zt(i.head), 0 === i.lookahead && (i.strstart = 0, i.block_start = 0, i.insert = 0))), Tt(t), 0 === t.avail_out)) return i.last_flush = -1, rt;
            }
            return e !== it ? rt : i.wrap <= 0 ? st : (2 === i.wrap ? (It(i, 255 & t.adler), It(i, t.adler >> 8 & 255), It(i, t.adler >> 16 & 255), It(i, t.adler >> 24 & 255), It(i, 255 & t.total_in), It(i, t.total_in >> 8 & 255), It(i, t.total_in >> 16 & 255), It(i, t.total_in >> 24 & 255)) : (Et(i, t.adler >>> 16), Et(i, 65535 & t.adler)), Tt(t), i.wrap > 0 && (i.wrap = -i.wrap), 0 !== i.pending ? rt : st);
        },
        deflateEnd: (t)=>{
            if (Zt(t)) return at;
            const e = t.state.status;
            return t.state = null, e === bt ? kt(t, ot) : rt;
        },
        deflateSetDictionary: (t, e)=>{
            let i = e.length;
            if (Zt(t)) return at;
            const n = t.state, r = n.wrap;
            if (2 === r || 1 === r && n.status !== yt || n.lookahead) return at;
            if (1 === r && (t.adler = j(t.adler, e, i, 0)), n.wrap = 0, i >= n.w_size) {
                0 === r && (zt(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0);
                let t = new Uint8Array(n.w_size);
                t.set(e.subarray(i - n.w_size, i), 0), e = t, i = n.w_size;
            }
            const s = t.avail_in, a = t.next_in, o = t.input;
            for(t.avail_in = i, t.next_in = 0, t.input = e, Dt(n); n.lookahead >= 3;){
                let t = n.strstart, e = n.lookahead - 2;
                do n.ins_h = St(n, n.ins_h, n.window[t + 3 - 1]), n.prev[t & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = t, t++;
                while (--e);
                n.strstart = t, n.lookahead = 2, Dt(n);
            }
            return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = 2, n.match_available = 0, t.next_in = a, t.input = o, t.avail_in = s, n.wrap = r, rt;
        },
        deflateInfo: "pako deflate (from Nodeca project)"
    };
    const Wt = (t, e)=>Object.prototype.hasOwnProperty.call(t, e);
    var qt = {
        assign: function(t) {
            const e = Array.prototype.slice.call(arguments, 1);
            for(; e.length;){
                const i = e.shift();
                if (i) {
                    if ("object" != typeof i) throw new TypeError(i + "must be non-object");
                    for(const e in i)Wt(i, e) && (t[e] = i[e]);
                }
            }
            return t;
        },
        flattenChunks: (t)=>{
            let e = 0;
            for(let i = 0, n = t.length; i < n; i++)e += t[i].length;
            const i = new Uint8Array(e);
            for(let e = 0, n = 0, r = t.length; e < r; e++){
                let r = t[e];
                i.set(r, n), n += r.length;
            }
            return i;
        }
    };
    let Kt = !0;
    try {
        String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (t) {
        Kt = !1;
    }
    const Jt = new Uint8Array(256);
    for(let t = 0; t < 256; t++)Jt[t] = t >= 252 ? 6 : t >= 248 ? 5 : t >= 240 ? 4 : t >= 224 ? 3 : t >= 192 ? 2 : 1;
    Jt[254] = Jt[254] = 1;
    var Gt = {
        string2buf: (t)=>{
            if ("function" == typeof TextEncoder && TextEncoder.prototype.encode) return (new TextEncoder).encode(t);
            let e, i, n, r, s, a = t.length, o = 0;
            for(r = 0; r < a; r++)i = t.charCodeAt(r), 55296 == (64512 & i) && r + 1 < a && (n = t.charCodeAt(r + 1), 56320 == (64512 & n) && (i = 65536 + (i - 55296 << 10) + (n - 56320), r++)), o += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4;
            for(e = new Uint8Array(o), s = 0, r = 0; s < o; r++)i = t.charCodeAt(r), 55296 == (64512 & i) && r + 1 < a && (n = t.charCodeAt(r + 1), 56320 == (64512 & n) && (i = 65536 + (i - 55296 << 10) + (n - 56320), r++)), i < 128 ? e[s++] = i : i < 2048 ? (e[s++] = 192 | i >>> 6, e[s++] = 128 | 63 & i) : i < 65536 ? (e[s++] = 224 | i >>> 12, e[s++] = 128 | i >>> 6 & 63, e[s++] = 128 | 63 & i) : (e[s++] = 240 | i >>> 18, e[s++] = 128 | i >>> 12 & 63, e[s++] = 128 | i >>> 6 & 63, e[s++] = 128 | 63 & i);
            return e;
        },
        buf2string: (t, e)=>{
            const i = e || t.length;
            if ("function" == typeof TextDecoder && TextDecoder.prototype.decode) return (new TextDecoder).decode(t.subarray(0, e));
            let n, r;
            const s = new Array(2 * i);
            for(r = 0, n = 0; n < i;){
                let e = t[n++];
                if (e < 128) {
                    s[r++] = e;
                    continue;
                }
                let a = Jt[e];
                if (a > 4) s[r++] = 65533, n += a - 1;
                else {
                    for(e &= 2 === a ? 31 : 3 === a ? 15 : 7; a > 1 && n < i;)e = e << 6 | 63 & t[n++], a--;
                    a > 1 ? s[r++] = 65533 : e < 65536 ? s[r++] = e : (e -= 65536, s[r++] = 55296 | e >> 10 & 1023, s[r++] = 56320 | 1023 & e);
                }
            }
            return ((t, e)=>{
                if (e < 65534 && t.subarray && Kt) return String.fromCharCode.apply(null, t.length === e ? t : t.subarray(0, e));
                let i = "";
                for(let n = 0; n < e; n++)i += String.fromCharCode(t[n]);
                return i;
            })(s, r);
        },
        utf8border: (t, e)=>{
            (e = e || t.length) > t.length && (e = t.length);
            let i = e - 1;
            for(; i >= 0 && 128 == (192 & t[i]);)i--;
            return i < 0 || 0 === i ? e : i + Jt[t[i]] > e ? i : e;
        }
    };
    var Xt = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
    };
    const Yt = Object.prototype.toString, { Z_NO_FLUSH: Qt, Z_SYNC_FLUSH: Vt, Z_FULL_FLUSH: te, Z_FINISH: ee, Z_OK: ie, Z_STREAM_END: ne, Z_DEFAULT_COMPRESSION: re, Z_DEFAULT_STRATEGY: se, Z_DEFLATED: ae } = K;
    function oe(t) {
        this.options = qt.assign({
            level: re,
            method: ae,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: se
        }, t || {});
        let e = this.options;
        e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Xt, this.strm.avail_out = 0;
        let i = Ht.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
        if (i !== ie) throw new Error(q[i]);
        if (e.header && Ht.deflateSetHeader(this.strm, e.header), e.dictionary) {
            let t;
            if (t = "string" == typeof e.dictionary ? Gt.string2buf(e.dictionary) : "[object ArrayBuffer]" === Yt.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary, i = Ht.deflateSetDictionary(this.strm, t), i !== ie) throw new Error(q[i]);
            this._dict_set = !0;
        }
    }
    function le(t, e) {
        const i = new oe(e);
        if (i.push(t, !0), i.err) throw i.msg || q[i.err];
        return i.result;
    }
    oe.prototype.push = function(t, e) {
        const i = this.strm, n = this.options.chunkSize;
        let r, s;
        if (this.ended) return !1;
        for(s = e === ~~e ? e : !0 === e ? ee : Qt, "string" == typeof t ? i.input = Gt.string2buf(t) : "[object ArrayBuffer]" === Yt.call(t) ? i.input = new Uint8Array(t) : i.input = t, i.next_in = 0, i.avail_in = i.input.length;;)if (0 === i.avail_out && (i.output = new Uint8Array(n), i.next_out = 0, i.avail_out = n), (s === Vt || s === te) && i.avail_out <= 6) this.onData(i.output.subarray(0, i.next_out)), i.avail_out = 0;
        else {
            if (r = Ht.deflate(i, s), r === ne) return i.next_out > 0 && this.onData(i.output.subarray(0, i.next_out)), r = Ht.deflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === ie;
            if (0 !== i.avail_out) {
                if (s > 0 && i.next_out > 0) this.onData(i.output.subarray(0, i.next_out)), i.avail_out = 0;
                else if (0 === i.avail_in) break;
            } else this.onData(i.output);
        }
        return !0;
    }, oe.prototype.onData = function(t) {
        this.chunks.push(t);
    }, oe.prototype.onEnd = function(t) {
        t === ie && (this.result = qt.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg;
    };
    var he = {
        Deflate: oe,
        deflate: le,
        deflateRaw: function(t, e) {
            return (e = e || {}).raw = !0, le(t, e);
        },
        gzip: function(t, e) {
            return (e = e || {}).gzip = !0, le(t, e);
        },
        constants: K
    };
    const de = 16209;
    var ue = function(t, e) {
        let i, n, r, s, a, o, l, h, d, u, f, c, _, p, w, m, g, y, b, v, k, x, z, A;
        const S = t.state;
        i = t.next_in, z = t.input, n = i + (t.avail_in - 5), r = t.next_out, A = t.output, s = r - (e - t.avail_out), a = r + (t.avail_out - 257), o = S.dmax, l = S.wsize, h = S.whave, d = S.wnext, u = S.window, f = S.hold, c = S.bits, _ = S.lencode, p = S.distcode, w = (1 << S.lenbits) - 1, m = (1 << S.distbits) - 1;
        t: do {
            c < 15 && (f += z[i++] << c, c += 8, f += z[i++] << c, c += 8), g = _[f & w];
            e: for(;;){
                if (y = g >>> 24, f >>>= y, c -= y, y = g >>> 16 & 255, 0 === y) A[r++] = 65535 & g;
                else {
                    if (!(16 & y)) {
                        if (0 == (64 & y)) {
                            g = _[(65535 & g) + (f & (1 << y) - 1)];
                            continue e;
                        }
                        if (32 & y) {
                            S.mode = 16191;
                            break t;
                        }
                        t.msg = "invalid literal/length code", S.mode = de;
                        break t;
                    }
                    b = 65535 & g, y &= 15, y && (c < y && (f += z[i++] << c, c += 8), b += f & (1 << y) - 1, f >>>= y, c -= y), c < 15 && (f += z[i++] << c, c += 8, f += z[i++] << c, c += 8), g = p[f & m];
                    i: for(;;){
                        if (y = g >>> 24, f >>>= y, c -= y, y = g >>> 16 & 255, !(16 & y)) {
                            if (0 == (64 & y)) {
                                g = p[(65535 & g) + (f & (1 << y) - 1)];
                                continue i;
                            }
                            t.msg = "invalid distance code", S.mode = de;
                            break t;
                        }
                        if (v = 65535 & g, y &= 15, c < y && (f += z[i++] << c, c += 8, c < y && (f += z[i++] << c, c += 8)), v += f & (1 << y) - 1, v > o) {
                            t.msg = "invalid distance too far back", S.mode = de;
                            break t;
                        }
                        if (f >>>= y, c -= y, y = r - s, v > y) {
                            if (y = v - y, y > h && S.sane) {
                                t.msg = "invalid distance too far back", S.mode = de;
                                break t;
                            }
                            if (k = 0, x = u, 0 === d) {
                                if (k += l - y, y < b) {
                                    b -= y;
                                    do A[r++] = u[k++];
                                    while (--y);
                                    k = r - v, x = A;
                                }
                            } else if (d < y) {
                                if (k += l + d - y, y -= d, y < b) {
                                    b -= y;
                                    do A[r++] = u[k++];
                                    while (--y);
                                    if (k = 0, d < b) {
                                        y = d, b -= y;
                                        do A[r++] = u[k++];
                                        while (--y);
                                        k = r - v, x = A;
                                    }
                                }
                            } else if (k += d - y, y < b) {
                                b -= y;
                                do A[r++] = u[k++];
                                while (--y);
                                k = r - v, x = A;
                            }
                            for(; b > 2;)A[r++] = x[k++], A[r++] = x[k++], A[r++] = x[k++], b -= 3;
                            b && (A[r++] = x[k++], b > 1 && (A[r++] = x[k++]));
                        } else {
                            k = r - v;
                            do A[r++] = A[k++], A[r++] = A[k++], A[r++] = A[k++], b -= 3;
                            while (b > 2);
                            b && (A[r++] = A[k++], b > 1 && (A[r++] = A[k++]));
                        }
                        break;
                    }
                }
                break;
            }
        }while (i < n && r < a);
        b = c >> 3, i -= b, c -= b << 3, f &= (1 << c) - 1, t.next_in = i, t.next_out = r, t.avail_in = i < n ? n - i + 5 : 5 - (i - n), t.avail_out = r < a ? a - r + 257 : 257 - (r - a), S.hold = f, S.bits = c;
    };
    const fe = 15, ce = new Uint16Array([
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        13,
        15,
        17,
        19,
        23,
        27,
        31,
        35,
        43,
        51,
        59,
        67,
        83,
        99,
        115,
        131,
        163,
        195,
        227,
        258,
        0,
        0
    ]), _e = new Uint8Array([
        16,
        16,
        16,
        16,
        16,
        16,
        16,
        16,
        17,
        17,
        17,
        17,
        18,
        18,
        18,
        18,
        19,
        19,
        19,
        19,
        20,
        20,
        20,
        20,
        21,
        21,
        21,
        21,
        16,
        72,
        78
    ]), pe = new Uint16Array([
        1,
        2,
        3,
        4,
        5,
        7,
        9,
        13,
        17,
        25,
        33,
        49,
        65,
        97,
        129,
        193,
        257,
        385,
        513,
        769,
        1025,
        1537,
        2049,
        3073,
        4097,
        6145,
        8193,
        12289,
        16385,
        24577,
        0,
        0
    ]), we = new Uint8Array([
        16,
        16,
        16,
        16,
        17,
        17,
        18,
        18,
        19,
        19,
        20,
        20,
        21,
        21,
        22,
        22,
        23,
        23,
        24,
        24,
        25,
        25,
        26,
        26,
        27,
        27,
        28,
        28,
        29,
        29,
        64,
        64
    ]);
    var me = (t, e, i, n, r, s, a, o)=>{
        const l = o.bits;
        let h, d, u, f, c, _, p = 0, w = 0, m = 0, g = 0, y = 0, b = 0, v = 0, k = 0, x = 0, z = 0, A = null;
        const S = new Uint16Array(16), T = new Uint16Array(16);
        let F, I, E, C = null;
        for(p = 0; p <= fe; p++)S[p] = 0;
        for(w = 0; w < n; w++)S[e[i + w]]++;
        for(y = l, g = fe; g >= 1 && 0 === S[g]; g--);
        if (y > g && (y = g), 0 === g) return r[s++] = 20971520, r[s++] = 20971520, o.bits = 1, 0;
        for(m = 1; m < g && 0 === S[m]; m++);
        for(y < m && (y = m), k = 1, p = 1; p <= fe; p++)if (k <<= 1, k -= S[p], k < 0) return -1;
        if (k > 0 && (0 === t || 1 !== g)) return -1;
        for(T[1] = 0, p = 1; p < fe; p++)T[p + 1] = T[p] + S[p];
        for(w = 0; w < n; w++)0 !== e[i + w] && (a[T[e[i + w]]++] = w);
        if (0 === t ? (A = C = a, _ = 20) : 1 === t ? (A = ce, C = _e, _ = 257) : (A = pe, C = we, _ = 0), z = 0, w = 0, p = m, c = s, b = y, v = 0, u = -1, x = 1 << y, f = x - 1, 1 === t && x > 852 || 2 === t && x > 592) return 1;
        for(;;){
            F = p - v, a[w] + 1 < _ ? (I = 0, E = a[w]) : a[w] >= _ ? (I = C[a[w] - _], E = A[a[w] - _]) : (I = 96, E = 0), h = 1 << p - v, d = 1 << b, m = d;
            do d -= h, r[c + (z >> v) + d] = F << 24 | I << 16 | E | 0;
            while (0 !== d);
            for(h = 1 << p - 1; z & h;)h >>= 1;
            if (0 !== h ? (z &= h - 1, z += h) : z = 0, w++, 0 == --S[p]) {
                if (p === g) break;
                p = e[i + a[w]];
            }
            if (p > y && (z & f) !== u) {
                for(0 === v && (v = y), c += m, b = p - v, k = 1 << b; b + v < g && (k -= S[b + v], !(k <= 0));)b++, k <<= 1;
                if (x += 1 << b, 1 === t && x > 852 || 2 === t && x > 592) return 1;
                u = z & f, r[u] = y << 24 | b << 16 | c - s | 0;
            }
        }
        return 0 !== z && (r[c + z] = p - v << 24 | 4194304), o.bits = y, 0;
    };
    const { Z_FINISH: ge, Z_BLOCK: ye, Z_TREES: be, Z_OK: ve, Z_STREAM_END: ke, Z_NEED_DICT: xe, Z_STREAM_ERROR: ze, Z_DATA_ERROR: Ae, Z_MEM_ERROR: Se, Z_BUF_ERROR: Te, Z_DEFLATED: Fe } = K, Ie = 16180, Ee = 16190, Ce = 16191, Be = 16192, De = 16194, Re = 16199, Ue = 16200, Le = 16206, Ne = 16209, Pe = (t)=>(t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24);
    function Oe() {
        this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
    }
    const Ze = (t)=>{
        if (!t) return 1;
        const e = t.state;
        return !e || e.strm !== t || e.mode < Ie || e.mode > 16211 ? 1 : 0;
    }, Me = (t)=>{
        if (Ze(t)) return ze;
        const e = t.state;
        return t.total_in = t.total_out = e.total = 0, t.msg = "", e.wrap && (t.adler = 1 & e.wrap), e.mode = Ie, e.last = 0, e.havedict = 0, e.flags = -1, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new Int32Array(852), e.distcode = e.distdyn = new Int32Array(592), e.sane = 1, e.back = -1, ve;
    }, $e = (t)=>{
        if (Ze(t)) return ze;
        const e = t.state;
        return e.wsize = 0, e.whave = 0, e.wnext = 0, Me(t);
    }, je = (t, e)=>{
        let i;
        if (Ze(t)) return ze;
        const n = t.state;
        return e < 0 ? (i = 0, e = -e) : (i = 5 + (e >> 4), e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? ze : (null !== n.window && n.wbits !== e && (n.window = null), n.wrap = i, n.wbits = e, $e(t));
    }, He = (t, e)=>{
        if (!t) return ze;
        const i = new Oe;
        t.state = i, i.strm = t, i.window = null, i.mode = Ie;
        const n = je(t, e);
        return n !== ve && (t.state = null), n;
    };
    let We, qe, Ke = !0;
    const Je = (t)=>{
        if (Ke) {
            We = new Int32Array(512), qe = new Int32Array(32);
            let e = 0;
            for(; e < 144;)t.lens[e++] = 8;
            for(; e < 256;)t.lens[e++] = 9;
            for(; e < 280;)t.lens[e++] = 7;
            for(; e < 288;)t.lens[e++] = 8;
            for(me(1, t.lens, 0, 288, We, 0, t.work, {
                bits: 9
            }), e = 0; e < 32;)t.lens[e++] = 5;
            me(2, t.lens, 0, 32, qe, 0, t.work, {
                bits: 5
            }), Ke = !1;
        }
        t.lencode = We, t.lenbits = 9, t.distcode = qe, t.distbits = 5;
    }, Ge = (t, e, i, n)=>{
        let r;
        const s = t.state;
        return null === s.window && (s.wsize = 1 << s.wbits, s.wnext = 0, s.whave = 0, s.window = new Uint8Array(s.wsize)), n >= s.wsize ? (s.window.set(e.subarray(i - s.wsize, i), 0), s.wnext = 0, s.whave = s.wsize) : (r = s.wsize - s.wnext, r > n && (r = n), s.window.set(e.subarray(i - n, i - n + r), s.wnext), (n -= r) ? (s.window.set(e.subarray(i - n, i), 0), s.wnext = n, s.whave = s.wsize) : (s.wnext += r, s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += r))), 0;
    };
    var Xe = (t, e)=>{
        let i, n, r, s, a, o, l, h, d, u, f, c, _, p, w, m, g, y, b, v, k, x, z = 0;
        const A = new Uint8Array(4);
        let S, T;
        const F = new Uint8Array([
            16,
            17,
            18,
            0,
            8,
            7,
            9,
            6,
            10,
            5,
            11,
            4,
            12,
            3,
            13,
            2,
            14,
            1,
            15
        ]);
        if (Ze(t) || !t.output || !t.input && 0 !== t.avail_in) return ze;
        i = t.state, i.mode === Ce && (i.mode = Be), a = t.next_out, r = t.output, l = t.avail_out, s = t.next_in, n = t.input, o = t.avail_in, h = i.hold, d = i.bits, u = o, f = l, x = ve;
        t: for(;;)switch(i.mode){
            case Ie:
                if (0 === i.wrap) {
                    i.mode = Be;
                    break;
                }
                for(; d < 16;){
                    if (0 === o) break t;
                    o--, h += n[s++] << d, d += 8;
                }
                if (2 & i.wrap && 35615 === h) {
                    0 === i.wbits && (i.wbits = 15), i.check = 0, A[0] = 255 & h, A[1] = h >>> 8 & 255, i.check = W(i.check, A, 2, 0), h = 0, d = 0, i.mode = 16181;
                    break;
                }
                if (i.head && (i.head.done = !1), !(1 & i.wrap) || (((255 & h) << 8) + (h >> 8)) % 31) {
                    t.msg = "incorrect header check", i.mode = Ne;
                    break;
                }
                if ((15 & h) !== Fe) {
                    t.msg = "unknown compression method", i.mode = Ne;
                    break;
                }
                if (h >>>= 4, d -= 4, k = 8 + (15 & h), 0 === i.wbits && (i.wbits = k), k > 15 || k > i.wbits) {
                    t.msg = "invalid window size", i.mode = Ne;
                    break;
                }
                i.dmax = 1 << i.wbits, i.flags = 0, t.adler = i.check = 1, i.mode = 512 & h ? 16189 : Ce, h = 0, d = 0;
                break;
            case 16181:
                for(; d < 16;){
                    if (0 === o) break t;
                    o--, h += n[s++] << d, d += 8;
                }
                if (i.flags = h, (255 & i.flags) !== Fe) {
                    t.msg = "unknown compression method", i.mode = Ne;
                    break;
                }
                if (57344 & i.flags) {
                    t.msg = "unknown header flags set", i.mode = Ne;
                    break;
                }
                i.head && (i.head.text = h >> 8 & 1), 512 & i.flags && 4 & i.wrap && (A[0] = 255 & h, A[1] = h >>> 8 & 255, i.check = W(i.check, A, 2, 0)), h = 0, d = 0, i.mode = 16182;
            case 16182:
                for(; d < 32;){
                    if (0 === o) break t;
                    o--, h += n[s++] << d, d += 8;
                }
                i.head && (i.head.time = h), 512 & i.flags && 4 & i.wrap && (A[0] = 255 & h, A[1] = h >>> 8 & 255, A[2] = h >>> 16 & 255, A[3] = h >>> 24 & 255, i.check = W(i.check, A, 4, 0)), h = 0, d = 0, i.mode = 16183;
            case 16183:
                for(; d < 16;){
                    if (0 === o) break t;
                    o--, h += n[s++] << d, d += 8;
                }
                i.head && (i.head.xflags = 255 & h, i.head.os = h >> 8), 512 & i.flags && 4 & i.wrap && (A[0] = 255 & h, A[1] = h >>> 8 & 255, i.check = W(i.check, A, 2, 0)), h = 0, d = 0, i.mode = 16184;
            case 16184:
                if (1024 & i.flags) {
                    for(; d < 16;){
                        if (0 === o) break t;
                        o--, h += n[s++] << d, d += 8;
                    }
                    i.length = h, i.head && (i.head.extra_len = h), 512 & i.flags && 4 & i.wrap && (A[0] = 255 & h, A[1] = h >>> 8 & 255, i.check = W(i.check, A, 2, 0)), h = 0, d = 0;
                } else i.head && (i.head.extra = null);
                i.mode = 16185;
            case 16185:
                if (1024 & i.flags && (c = i.length, c > o && (c = o), c && (i.head && (k = i.head.extra_len - i.length, i.head.extra || (i.head.extra = new Uint8Array(i.head.extra_len)), i.head.extra.set(n.subarray(s, s + c), k)), 512 & i.flags && 4 & i.wrap && (i.check = W(i.check, n, c, s)), o -= c, s += c, i.length -= c), i.length)) break t;
                i.length = 0, i.mode = 16186;
            case 16186:
                if (2048 & i.flags) {
                    if (0 === o) break t;
                    c = 0;
                    do k = n[s + c++], i.head && k && i.length < 65536 && (i.head.name += String.fromCharCode(k));
                    while (k && c < o);
                    if (512 & i.flags && 4 & i.wrap && (i.check = W(i.check, n, c, s)), o -= c, s += c, k) break t;
                } else i.head && (i.head.name = null);
                i.length = 0, i.mode = 16187;
            case 16187:
                if (4096 & i.flags) {
                    if (0 === o) break t;
                    c = 0;
                    do k = n[s + c++], i.head && k && i.length < 65536 && (i.head.comment += String.fromCharCode(k));
                    while (k && c < o);
                    if (512 & i.flags && 4 & i.wrap && (i.check = W(i.check, n, c, s)), o -= c, s += c, k) break t;
                } else i.head && (i.head.comment = null);
                i.mode = 16188;
            case 16188:
                if (512 & i.flags) {
                    for(; d < 16;){
                        if (0 === o) break t;
                        o--, h += n[s++] << d, d += 8;
                    }
                    if (4 & i.wrap && h !== (65535 & i.check)) {
                        t.msg = "header crc mismatch", i.mode = Ne;
                        break;
                    }
                    h = 0, d = 0;
                }
                i.head && (i.head.hcrc = i.flags >> 9 & 1, i.head.done = !0), t.adler = i.check = 0, i.mode = Ce;
                break;
            case 16189:
                for(; d < 32;){
                    if (0 === o) break t;
                    o--, h += n[s++] << d, d += 8;
                }
                t.adler = i.check = Pe(h), h = 0, d = 0, i.mode = Ee;
            case Ee:
                if (0 === i.havedict) return t.next_out = a, t.avail_out = l, t.next_in = s, t.avail_in = o, i.hold = h, i.bits = d, xe;
                t.adler = i.check = 1, i.mode = Ce;
            case Ce:
                if (e === ye || e === be) break t;
            case Be:
                if (i.last) {
                    h >>>= 7 & d, d -= 7 & d, i.mode = Le;
                    break;
                }
                for(; d < 3;){
                    if (0 === o) break t;
                    o--, h += n[s++] << d, d += 8;
                }
                switch(i.last = 1 & h, h >>>= 1, d -= 1, 3 & h){
                    case 0:
                        i.mode = 16193;
                        break;
                    case 1:
                        if (Je(i), i.mode = Re, e === be) {
                            h >>>= 2, d -= 2;
                            break t;
                        }
                        break;
                    case 2:
                        i.mode = 16196;
                        break;
                    case 3:
                        t.msg = "invalid block type", i.mode = Ne;
                }
                h >>>= 2, d -= 2;
                break;
            case 16193:
                for(h >>>= 7 & d, d -= 7 & d; d < 32;){
                    if (0 === o) break t;
                    o--, h += n[s++] << d, d += 8;
                }
                if ((65535 & h) != (h >>> 16 ^ 65535)) {
                    t.msg = "invalid stored block lengths", i.mode = Ne;
                    break;
                }
                if (i.length = 65535 & h, h = 0, d = 0, i.mode = De, e === be) break t;
            case De:
                i.mode = 16195;
            case 16195:
                if (c = i.length, c) {
                    if (c > o && (c = o), c > l && (c = l), 0 === c) break t;
                    r.set(n.subarray(s, s + c), a), o -= c, s += c, l -= c, a += c, i.length -= c;
                    break;
                }
                i.mode = Ce;
                break;
            case 16196:
                for(; d < 14;){
                    if (0 === o) break t;
                    o--, h += n[s++] << d, d += 8;
                }
                if (i.nlen = 257 + (31 & h), h >>>= 5, d -= 5, i.ndist = 1 + (31 & h), h >>>= 5, d -= 5, i.ncode = 4 + (15 & h), h >>>= 4, d -= 4, i.nlen > 286 || i.ndist > 30) {
                    t.msg = "too many length or distance symbols", i.mode = Ne;
                    break;
                }
                i.have = 0, i.mode = 16197;
            case 16197:
                for(; i.have < i.ncode;){
                    for(; d < 3;){
                        if (0 === o) break t;
                        o--, h += n[s++] << d, d += 8;
                    }
                    i.lens[F[i.have++]] = 7 & h, h >>>= 3, d -= 3;
                }
                for(; i.have < 19;)i.lens[F[i.have++]] = 0;
                if (i.lencode = i.lendyn, i.lenbits = 7, S = {
                    bits: i.lenbits
                }, x = me(0, i.lens, 0, 19, i.lencode, 0, i.work, S), i.lenbits = S.bits, x) {
                    t.msg = "invalid code lengths set", i.mode = Ne;
                    break;
                }
                i.have = 0, i.mode = 16198;
            case 16198:
                for(; i.have < i.nlen + i.ndist;){
                    for(; z = i.lencode[h & (1 << i.lenbits) - 1], w = z >>> 24, m = z >>> 16 & 255, g = 65535 & z, !(w <= d);){
                        if (0 === o) break t;
                        o--, h += n[s++] << d, d += 8;
                    }
                    if (g < 16) h >>>= w, d -= w, i.lens[i.have++] = g;
                    else {
                        if (16 === g) {
                            for(T = w + 2; d < T;){
                                if (0 === o) break t;
                                o--, h += n[s++] << d, d += 8;
                            }
                            if (h >>>= w, d -= w, 0 === i.have) {
                                t.msg = "invalid bit length repeat", i.mode = Ne;
                                break;
                            }
                            k = i.lens[i.have - 1], c = 3 + (3 & h), h >>>= 2, d -= 2;
                        } else if (17 === g) {
                            for(T = w + 3; d < T;){
                                if (0 === o) break t;
                                o--, h += n[s++] << d, d += 8;
                            }
                            h >>>= w, d -= w, k = 0, c = 3 + (7 & h), h >>>= 3, d -= 3;
                        } else {
                            for(T = w + 7; d < T;){
                                if (0 === o) break t;
                                o--, h += n[s++] << d, d += 8;
                            }
                            h >>>= w, d -= w, k = 0, c = 11 + (127 & h), h >>>= 7, d -= 7;
                        }
                        if (i.have + c > i.nlen + i.ndist) {
                            t.msg = "invalid bit length repeat", i.mode = Ne;
                            break;
                        }
                        for(; c--;)i.lens[i.have++] = k;
                    }
                }
                if (i.mode === Ne) break;
                if (0 === i.lens[256]) {
                    t.msg = "invalid code -- missing end-of-block", i.mode = Ne;
                    break;
                }
                if (i.lenbits = 9, S = {
                    bits: i.lenbits
                }, x = me(1, i.lens, 0, i.nlen, i.lencode, 0, i.work, S), i.lenbits = S.bits, x) {
                    t.msg = "invalid literal/lengths set", i.mode = Ne;
                    break;
                }
                if (i.distbits = 6, i.distcode = i.distdyn, S = {
                    bits: i.distbits
                }, x = me(2, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, S), i.distbits = S.bits, x) {
                    t.msg = "invalid distances set", i.mode = Ne;
                    break;
                }
                if (i.mode = Re, e === be) break t;
            case Re:
                i.mode = Ue;
            case Ue:
                if (o >= 6 && l >= 258) {
                    t.next_out = a, t.avail_out = l, t.next_in = s, t.avail_in = o, i.hold = h, i.bits = d, ue(t, f), a = t.next_out, r = t.output, l = t.avail_out, s = t.next_in, n = t.input, o = t.avail_in, h = i.hold, d = i.bits, i.mode === Ce && (i.back = -1);
                    break;
                }
                for(i.back = 0; z = i.lencode[h & (1 << i.lenbits) - 1], w = z >>> 24, m = z >>> 16 & 255, g = 65535 & z, !(w <= d);){
                    if (0 === o) break t;
                    o--, h += n[s++] << d, d += 8;
                }
                if (m && 0 == (240 & m)) {
                    for(y = w, b = m, v = g; z = i.lencode[v + ((h & (1 << y + b) - 1) >> y)], w = z >>> 24, m = z >>> 16 & 255, g = 65535 & z, !(y + w <= d);){
                        if (0 === o) break t;
                        o--, h += n[s++] << d, d += 8;
                    }
                    h >>>= y, d -= y, i.back += y;
                }
                if (h >>>= w, d -= w, i.back += w, i.length = g, 0 === m) {
                    i.mode = 16205;
                    break;
                }
                if (32 & m) {
                    i.back = -1, i.mode = Ce;
                    break;
                }
                if (64 & m) {
                    t.msg = "invalid literal/length code", i.mode = Ne;
                    break;
                }
                i.extra = 15 & m, i.mode = 16201;
            case 16201:
                if (i.extra) {
                    for(T = i.extra; d < T;){
                        if (0 === o) break t;
                        o--, h += n[s++] << d, d += 8;
                    }
                    i.length += h & (1 << i.extra) - 1, h >>>= i.extra, d -= i.extra, i.back += i.extra;
                }
                i.was = i.length, i.mode = 16202;
            case 16202:
                for(; z = i.distcode[h & (1 << i.distbits) - 1], w = z >>> 24, m = z >>> 16 & 255, g = 65535 & z, !(w <= d);){
                    if (0 === o) break t;
                    o--, h += n[s++] << d, d += 8;
                }
                if (0 == (240 & m)) {
                    for(y = w, b = m, v = g; z = i.distcode[v + ((h & (1 << y + b) - 1) >> y)], w = z >>> 24, m = z >>> 16 & 255, g = 65535 & z, !(y + w <= d);){
                        if (0 === o) break t;
                        o--, h += n[s++] << d, d += 8;
                    }
                    h >>>= y, d -= y, i.back += y;
                }
                if (h >>>= w, d -= w, i.back += w, 64 & m) {
                    t.msg = "invalid distance code", i.mode = Ne;
                    break;
                }
                i.offset = g, i.extra = 15 & m, i.mode = 16203;
            case 16203:
                if (i.extra) {
                    for(T = i.extra; d < T;){
                        if (0 === o) break t;
                        o--, h += n[s++] << d, d += 8;
                    }
                    i.offset += h & (1 << i.extra) - 1, h >>>= i.extra, d -= i.extra, i.back += i.extra;
                }
                if (i.offset > i.dmax) {
                    t.msg = "invalid distance too far back", i.mode = Ne;
                    break;
                }
                i.mode = 16204;
            case 16204:
                if (0 === l) break t;
                if (c = f - l, i.offset > c) {
                    if (c = i.offset - c, c > i.whave && i.sane) {
                        t.msg = "invalid distance too far back", i.mode = Ne;
                        break;
                    }
                    c > i.wnext ? (c -= i.wnext, _ = i.wsize - c) : _ = i.wnext - c, c > i.length && (c = i.length), p = i.window;
                } else p = r, _ = a - i.offset, c = i.length;
                c > l && (c = l), l -= c, i.length -= c;
                do r[a++] = p[_++];
                while (--c);
                0 === i.length && (i.mode = Ue);
                break;
            case 16205:
                if (0 === l) break t;
                r[a++] = i.length, l--, i.mode = Ue;
                break;
            case Le:
                if (i.wrap) {
                    for(; d < 32;){
                        if (0 === o) break t;
                        o--, h |= n[s++] << d, d += 8;
                    }
                    if (f -= l, t.total_out += f, i.total += f, 4 & i.wrap && f && (t.adler = i.check = i.flags ? W(i.check, r, f, a - f) : j(i.check, r, f, a - f)), f = l, 4 & i.wrap && (i.flags ? h : Pe(h)) !== i.check) {
                        t.msg = "incorrect data check", i.mode = Ne;
                        break;
                    }
                    h = 0, d = 0;
                }
                i.mode = 16207;
            case 16207:
                if (i.wrap && i.flags) {
                    for(; d < 32;){
                        if (0 === o) break t;
                        o--, h += n[s++] << d, d += 8;
                    }
                    if (4 & i.wrap && h !== (4294967295 & i.total)) {
                        t.msg = "incorrect length check", i.mode = Ne;
                        break;
                    }
                    h = 0, d = 0;
                }
                i.mode = 16208;
            case 16208:
                x = ke;
                break t;
            case Ne:
                x = Ae;
                break t;
            case 16210:
                return Se;
            default:
                return ze;
        }
        return t.next_out = a, t.avail_out = l, t.next_in = s, t.avail_in = o, i.hold = h, i.bits = d, (i.wsize || f !== t.avail_out && i.mode < Ne && (i.mode < Le || e !== ge)) && Ge(t, t.output, t.next_out, f - t.avail_out), u -= t.avail_in, f -= t.avail_out, t.total_in += u, t.total_out += f, i.total += f, 4 & i.wrap && f && (t.adler = i.check = i.flags ? W(i.check, r, f, t.next_out - f) : j(i.check, r, f, t.next_out - f)), t.data_type = i.bits + (i.last ? 64 : 0) + (i.mode === Ce ? 128 : 0) + (i.mode === Re || i.mode === De ? 256 : 0), (0 === u && 0 === f || e === ge) && x === ve && (x = Te), x;
    }, Ye = {
        inflateReset: $e,
        inflateReset2: je,
        inflateResetKeep: Me,
        inflateInit: (t)=>He(t, 15),
        inflateInit2: He,
        inflate: Xe,
        inflateEnd: (t)=>{
            if (Ze(t)) return ze;
            let e = t.state;
            return e.window && (e.window = null), t.state = null, ve;
        },
        inflateGetHeader: (t, e)=>{
            if (Ze(t)) return ze;
            const i = t.state;
            return 0 == (2 & i.wrap) ? ze : (i.head = e, e.done = !1, ve);
        },
        inflateSetDictionary: (t, e)=>{
            const i = e.length;
            let n, r, s;
            return Ze(t) ? ze : (n = t.state, 0 !== n.wrap && n.mode !== Ee ? ze : n.mode === Ee && (r = 1, r = j(r, e, i, 0), r !== n.check) ? Ae : (s = Ge(t, e, i, i), s ? (n.mode = 16210, Se) : (n.havedict = 1, ve)));
        },
        inflateInfo: "pako inflate (from Nodeca project)"
    };
    var Qe = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
    };
    const Ve = Object.prototype.toString, { Z_NO_FLUSH: ti, Z_FINISH: ei, Z_OK: ii, Z_STREAM_END: ni, Z_NEED_DICT: ri, Z_STREAM_ERROR: si, Z_DATA_ERROR: ai, Z_MEM_ERROR: oi } = K;
    function li(t) {
        this.options = qt.assign({
            chunkSize: 65536,
            windowBits: 15,
            to: ""
        }, t || {});
        const e = this.options;
        e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, 0 === e.windowBits && (e.windowBits = -15)), !(e.windowBits >= 0 && e.windowBits < 16) || t && t.windowBits || (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Xt, this.strm.avail_out = 0;
        let i = Ye.inflateInit2(this.strm, e.windowBits);
        if (i !== ii) throw new Error(q[i]);
        if (this.header = new Qe, Ye.inflateGetHeader(this.strm, this.header), e.dictionary && ("string" == typeof e.dictionary ? e.dictionary = Gt.string2buf(e.dictionary) : "[object ArrayBuffer]" === Ve.call(e.dictionary) && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (i = Ye.inflateSetDictionary(this.strm, e.dictionary), i !== ii))) throw new Error(q[i]);
    }
    function hi(t, e) {
        const i = new li(e);
        if (i.push(t), i.err) throw i.msg || q[i.err];
        return i.result;
    }
    li.prototype.push = function(t, e) {
        const i = this.strm, n = this.options.chunkSize, r = this.options.dictionary;
        let s, a, o;
        if (this.ended) return !1;
        for(a = e === ~~e ? e : !0 === e ? ei : ti, "[object ArrayBuffer]" === Ve.call(t) ? i.input = new Uint8Array(t) : i.input = t, i.next_in = 0, i.avail_in = i.input.length;;){
            for(0 === i.avail_out && (i.output = new Uint8Array(n), i.next_out = 0, i.avail_out = n), s = Ye.inflate(i, a), s === ri && r && (s = Ye.inflateSetDictionary(i, r), s === ii ? s = Ye.inflate(i, a) : s === ai && (s = ri)); i.avail_in > 0 && s === ni && i.state.wrap > 0 && 0 !== t[i.next_in];)Ye.inflateReset(i), s = Ye.inflate(i, a);
            switch(s){
                case si:
                case ai:
                case ri:
                case oi:
                    return this.onEnd(s), this.ended = !0, !1;
            }
            if (o = i.avail_out, i.next_out && (0 === i.avail_out || s === ni)) {
                if ("string" === this.options.to) {
                    let t = Gt.utf8border(i.output, i.next_out), e = i.next_out - t, r = Gt.buf2string(i.output, t);
                    i.next_out = e, i.avail_out = n - e, e && i.output.set(i.output.subarray(t, t + e), 0), this.onData(r);
                } else this.onData(i.output.length === i.next_out ? i.output : i.output.subarray(0, i.next_out));
            }
            if (s !== ii || 0 !== o) {
                if (s === ni) return s = Ye.inflateEnd(this.strm), this.onEnd(s), this.ended = !0, !0;
                if (0 === i.avail_in) break;
            }
        }
        return !0;
    }, li.prototype.onData = function(t) {
        this.chunks.push(t);
    }, li.prototype.onEnd = function(t) {
        t === ii && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = qt.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg;
    };
    var di = {
        Inflate: li,
        inflate: hi,
        inflateRaw: function(t, e) {
            return (e = e || {}).raw = !0, hi(t, e);
        },
        ungzip: hi,
        constants: K
    };
    const { Deflate: ui, deflate: fi, deflateRaw: ci, gzip: _i } = he, { Inflate: pi, inflate: wi, inflateRaw: mi, ungzip: gi } = di;
    for(var yi = {
        Deflate: ui,
        deflate: fi,
        deflateRaw: ci,
        gzip: _i,
        Inflate: pi,
        inflate: wi,
        inflateRaw: mi,
        ungzip: gi,
        constants: K
    }, bi = function(t) {
        var e, i, n = function(t) {
            var e = t.length;
            if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var i = t.indexOf("=");
            -1 === i && (i = e);
            var n = i === e ? 0 : 4 - i % 4;
            return [
                i,
                n
            ];
        }(t), r = n[0], s = n[1], a = new zi(function(t, e, i) {
            return 3 * (e + i) / 4 - i;
        }(0, r, s)), o = 0, l = s > 0 ? r - 4 : r;
        for(i = 0; i < l; i += 4)e = xi[t.charCodeAt(i)] << 18 | xi[t.charCodeAt(i + 1)] << 12 | xi[t.charCodeAt(i + 2)] << 6 | xi[t.charCodeAt(i + 3)], a[o++] = e >> 16 & 255, a[o++] = e >> 8 & 255, a[o++] = 255 & e;
        2 === s && (e = xi[t.charCodeAt(i)] << 2 | xi[t.charCodeAt(i + 1)] >> 4, a[o++] = 255 & e);
        1 === s && (e = xi[t.charCodeAt(i)] << 10 | xi[t.charCodeAt(i + 1)] << 4 | xi[t.charCodeAt(i + 2)] >> 2, a[o++] = e >> 8 & 255, a[o++] = 255 & e);
        return a;
    }, vi = function(t) {
        for(var e, i = t.length, n = i % 3, r = [], s = 16383, a = 0, o = i - n; a < o; a += s)r.push(Ti(t, a, a + s > o ? o : a + s));
        1 === n ? (e = t[i - 1], r.push(ki[e >> 2] + ki[e << 4 & 63] + "==")) : 2 === n && (e = (t[i - 2] << 8) + t[i - 1], r.push(ki[e >> 10] + ki[e >> 4 & 63] + ki[e << 2 & 63] + "="));
        return r.join("");
    }, ki = [], xi = [], zi = "undefined" != typeof Uint8Array ? Uint8Array : Array, Ai = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Si = 0; Si < 64; ++Si)ki[Si] = Ai[Si], xi[Ai.charCodeAt(Si)] = Si;
    function Ti(t, e, i) {
        for(var n, r, s = [], a = e; a < i; a += 3)n = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(ki[(r = n) >> 18 & 63] + ki[r >> 12 & 63] + ki[r >> 6 & 63] + ki[63 & r]);
        return s.join("");
    }
    xi["-".charCodeAt(0)] = 62, xi["_".charCodeAt(0)] = 63;
    !function() {
        try {
            return "win32" === process.platform;
        } catch (t) {
            return !1;
        }
    }();
    const Fi = function() {
        try {
            if ("fs" === undefined("fs")) return require("44ea3c71a976e77a"), !1;
        } catch (t) {}
        return !0;
    }();
    function Ii(t) {
        return Uint8Array.from(t, (t)=>t.charCodeAt(0));
    }
    function Ei(t, i = "binary") {
        return e(this, void 0, void 0, function*() {
            return "function" == typeof Buffer ? Buffer.from(t).toString(i) : new Promise((e)=>{
                const n = new FileReader;
                n.onloadend = ()=>e(n.result), "binary" == i ? n.readAsBinaryString(new Blob([
                    t
                ])) : n.readAsText(new Blob([
                    t
                ]), i);
            });
        });
    }
    const Ci = "function" == typeof Buffer;
    function Bi(t) {
        const e = yi.deflate(t);
        return Ci ? Buffer.from(e).toString("base64") : vi(e);
    }
    function Di(t) {
        let e;
        return e = Ci ? Buffer.from(t, "base64") : bi(t), yi.inflate(e);
    }
    class Ri extends Error {
        constructor(t, e = null, i = !1){
            if ("fail" === e || "FAIL" === e || "EXIT" === e) try {
                t = (new TextDecoder).decode(Di(t));
            } catch (e) {
                t = `decode [${t}] error: ${e}`;
            }
            else e && (t = `[TrzszError] ${e}: ${t}`);
            super(t), Object.setPrototypeOf(this, Ri.prototype), Error.captureStackTrace && Error.captureStackTrace(this, Ri), this.name = "TrzszError", this.type = e, this.trace = i;
        }
        isTraceBack() {
            return "fail" !== this.type && "EXIT" !== this.type && this.trace;
        }
        isRemoteExit() {
            return "EXIT" === this.type;
        }
        isRemoteFail() {
            return "fail" === this.type || "FAIL" === this.type;
        }
        isStopAndDelete() {
            return "fail" === this.type && "Stopped and deleted" === this.message;
        }
        static getErrorMessage(t) {
            return t instanceof Ri && !t.isTraceBack() ? t.message : t.stack ? t.stack.replace("TrzszError: ", "") : t.toString();
        }
    }
    function Ui(t) {
        return 97 <= t && t <= 122 || 65 <= t && t <= 90;
    }
    const Li = 1;
    function Ni(t, e) {
        let i = `Saved ${t.length} ${t.length > 1 ? "files/directories" : "file/directory"}`;
        return e.length > 0 && (i += ` to ${e}`), [
            i
        ].concat(t).join("\r\n- ");
    }
    const Pi = Zi("fs"), Oi = Zi("path");
    function Zi(t) {
        try {
            return require(t);
        } catch (t) {
            return {};
        }
    }
    !function(t, e) {
        for (const i of e)t[i + "Async"] = (...e)=>new Promise((n)=>{
                t[i](...e, (t)=>n(!t));
            });
    }(Pi, [
        "rm",
        "rmdir",
        "unlink",
        "access"
    ]), function(t, e) {
        for (const i of e)t[i + "Async"] = (...e)=>new Promise((n, r)=>{
                t[i](...e, (t, e)=>{
                    t ? r(t) : n(e);
                });
            });
    }(Pi, [
        "stat",
        "mkdir",
        "readdir",
        "close",
        "open",
        "realpath",
        "write"
    ]);
    class Mi {
        constructor(t, e, i, n, r){
            this.closed = !1, this.fd = null, this.pathId = t, this.absPath = e, this.relPath = i, this.dir = n, this.size = r;
        }
        getPathId() {
            return this.pathId;
        }
        getRelPath() {
            return this.relPath;
        }
        isDir() {
            return this.dir;
        }
        getSize() {
            return this.size;
        }
        readFile(t) {
            return e(this, void 0, void 0, function*() {
                if (this.closed) throw new Ri(`File closed: ${this.absPath}`, null, !0);
                null === this.fd && (this.fd = yield Pi.openAsync(this.absPath, "r"));
                const i = new Uint8Array(t);
                return function(t, i, n, r, s) {
                    return e(this, void 0, void 0, function*() {
                        return new Promise((e, a)=>Pi.read(t, i, n, r, s, (t, i, n)=>{
                                t ? a(t) : e(n.subarray(0, i));
                            }));
                    });
                }(this.fd, i, 0, i.length, null);
            });
        }
        closeFile() {
            return e(this, void 0, void 0, function*() {
                this.closed || (this.closed = !0, null !== this.fd && (yield Pi.closeAsync(this.fd), this.fd = null));
            });
        }
    }
    function $i(t, i, n, r, s, a) {
        return e(this, void 0, void 0, function*() {
            if (!n.isDirectory()) {
                if (!n.isFile()) throw new Ri(`Not a regular file: ${i}`);
                if (!(yield Pi.accessAsync(i, Pi.constants.R_OK))) throw new Ri(`No permission to read: ${i}`);
                return void r.push(new Mi(t, i, s, !1, n.size));
            }
            const e = yield Pi.realpathAsync(i);
            if (a.has(e)) throw new Ri(`Duplicate link: ${i}`);
            a.add(e), r.push(new Mi(t, i, s, !0, 0));
            const o = yield Pi.readdirAsync(i);
            for (const e of o){
                const n = Oi.join(i, e), o = yield Pi.statAsync(n);
                yield $i(t, n, o, r, [
                    ...s,
                    e
                ], a);
            }
        });
    }
    function ji(t, i = !1) {
        return e(this, void 0, void 0, function*() {
            if (!t || !t.length) return;
            const e = [], n = t.entries();
            for (const [t, r] of n){
                const n = Oi.resolve(r);
                if (!(yield Pi.accessAsync(n))) throw new Ri(`No such file: ${n}`);
                const s = yield Pi.statAsync(n);
                if (!i && s.isDirectory()) throw new Ri(`Is a directory: ${n}`);
                const a = new Set;
                yield $i(t, n, s, e, [
                    Oi.basename(n)
                ], a);
            }
            return e;
        });
    }
    class Hi {
        constructor(t, e, i, n, r = !1){
            this.closed = !1, this.absPath = t, this.fileName = e, this.localName = i, this.fd = n, this.dir = r;
        }
        getFileName() {
            return this.fileName;
        }
        getLocalName() {
            return this.localName;
        }
        isDir() {
            return this.dir;
        }
        writeFile(t) {
            return e(this, void 0, void 0, function*() {
                yield Pi.writeAsync(this.fd, t);
            });
        }
        closeFile() {
            return e(this, void 0, void 0, function*() {
                this.closed || (this.closed = !0, null !== this.fd && (yield Pi.closeAsync(this.fd), this.fd = null));
            });
        }
        deleteFile() {
            return e(this, void 0, void 0, function*() {
                if (!this.absPath || !(yield Pi.accessAsync(this.absPath))) return "";
                try {
                    if (yield this.closeFile(), "function" == typeof Pi.rm) {
                        if (yield Pi.rmAsync(this.absPath, {
                            recursive: !0
                        })) return this.absPath;
                    } else if (this.isDir) {
                        if (yield Pi.rmdirAsync(this.absPath, {
                            recursive: !0
                        })) return this.absPath;
                    } else if (yield Pi.unlinkAsync(this.absPath)) return this.absPath;
                } catch (t) {
                    console.log(`delete [${this.absPath}] failed`, t);
                }
                return "";
            });
        }
    }
    function Wi(t, i) {
        return e(this, void 0, void 0, function*() {
            if (!(yield Pi.accessAsync(Oi.join(t, i)))) return i;
            for(let e = 0; e < 1e3; e++){
                const n = `${i}.${e}`;
                if (!(yield Pi.accessAsync(Oi.join(t, n)))) return n;
            }
            throw new Ri("Fail to assign new file name");
        });
    }
    function qi(t) {
        return e(this, void 0, void 0, function*() {
            try {
                return yield Pi.openAsync(t, "w");
            } catch (e) {
                if (-13 === e.errno || -4048 === e.errno) throw new Ri(`No permission to write: ${t}`);
                if (-21 === e.errno || -4068 === e.errno) throw new Ri(`Is a directory: ${t}`);
                throw e;
            }
        });
    }
    function Ki(t) {
        return e(this, void 0, void 0, function*() {
            if (!(yield Pi.accessAsync(t))) return yield Pi.mkdirAsync(t, {
                recursive: !0,
                mode: 493
            }), !0;
            if (!(yield Pi.statAsync(t)).isDirectory()) throw new Ri(`Not a directory: ${t}`);
            return !1;
        });
    }
    function Ji(t, i, n, r) {
        return e(this, void 0, void 0, function*() {
            if (!n) return function(t, i, n) {
                return e(this, void 0, void 0, function*() {
                    const e = n ? i : yield Wi(t, i), r = Oi.join(t, e), s = yield qi(r);
                    return new Hi(r, i, e, s);
                });
            }(t.path, i, r);
            const s = JSON.parse(i);
            if (!s.hasOwnProperty("path_name") || !s.hasOwnProperty("path_id") || !s.hasOwnProperty("is_dir") || s.path_name.length < 1) throw new Ri(`Invalid name: ${i}`);
            let a, o;
            if (i = s.path_name[s.path_name.length - 1], r ? a = s.path_name[0] : t.maps.has(s.path_id) ? a = t.maps.get(s.path_id) : (a = yield Wi(t.path, s.path_name[0]), t.maps.set(s.path_id, a)), s.path_name.length > 1) {
                const e = Oi.join(t.path, a, ...s.path_name.slice(1, s.path_name.length - 1));
                yield Ki(e), o = Oi.join(e, i);
            } else o = Oi.join(t.path, a);
            if (!0 === s.is_dir) {
                let t = "";
                return (yield Ki(o)) && (t = o), new Hi(t, i, a, null, !0);
            }
            const l = yield qi(o);
            return new Hi(o, i, a, l);
        });
    }
    class Gi {
        constructor(t, e, i, n){
            this.closed = !1, this.pos = 0, this.pathId = t, this.relPath = e, this.file = i, this.dir = n;
        }
        getPathId() {
            return this.pathId;
        }
        getRelPath() {
            return this.relPath;
        }
        isDir() {
            return this.dir;
        }
        getSize() {
            return this.file.size;
        }
        readFile(t) {
            return e(this, void 0, void 0, function*() {
                if (this.pos >= this.file.size) return new Uint8Array(0);
                try {
                    const e = Math.min(t.byteLength, this.file.size - this.pos), i = this.file.slice(this.pos, this.pos + e);
                    return this.pos += e, new Uint8Array((yield i.arrayBuffer()));
                } catch (t) {
                    if ("NotReadableError" === t.name) throw new Ri(`No permission to read: ${this.relPath.join("/")}`);
                    throw new Ri(`Read ${this.relPath.join("/")} error: ${t.toString()}`);
                }
            });
        }
        closeFile() {
            this.closed || (this.file = null, this.closed = !0);
        }
    }
    function Xi(t, i, r, s) {
        var a, o, l, h;
        return e(this, void 0, void 0, function*() {
            if ("file" === i.kind) {
                const e = yield i.getFile();
                r.push(new Gi(t, s, e, !1));
            } else if ("directory" === i.kind) {
                r.push(new Gi(t, s, null, !0));
                const f = i;
                try {
                    for(var e, d = !0, u = n(f.values()); e = yield u.next(), !(a = e.done); d = !0){
                        h = e.value, d = !1;
                        const i = h, n = i.name;
                        "file" === i.kind ? yield Xi(t, (yield f.getFileHandle(n)), r, [
                            ...s,
                            n
                        ]) : "directory" === i.kind && (yield Xi(t, (yield f.getDirectoryHandle(n)), r, [
                            ...s,
                            n
                        ]));
                    }
                } catch (t) {
                    o = {
                        error: t
                    };
                } finally{
                    try {
                        d || a || !(l = u.return) || (yield l.call(u));
                    } finally{
                        if (o) throw o.error;
                    }
                }
            }
        });
    }
    function Yi() {
        return "https:" === window.location.protocol || [
            "localhost",
            "127.0.0.1",
            "[::1]"
        ].includes(window.location.hostname) ? new Ri("The browser doesn't support the File System Access API") : new Ri("The File System Access API requires HTTPS except localhost");
    }
    function Qi() {
        return e(this, void 0, void 0, function*() {
            if ("function" != typeof window.showDirectoryPicker) throw Yi();
            let t;
            try {
                t = yield window.showDirectoryPicker({
                    id: "trzsz_upload",
                    startIn: "documents"
                });
            } catch (t) {
                if ("AbortError" === t.name) return;
                throw t;
            }
            const e = [];
            return yield Xi(0, t, e, [
                t.name
            ]), e;
        });
    }
    class Vi {
        constructor(t, e, i, n = !1){
            this.closed = !1, this.fileName = t, this.localName = e, this.writer = i, this.dir = n;
        }
        getFileName() {
            return this.fileName;
        }
        getLocalName() {
            return this.localName;
        }
        isDir() {
            return this.dir;
        }
        writeFile(t) {
            return e(this, void 0, void 0, function*() {
                yield this.writer.write(t);
            });
        }
        closeFile() {
            this.closed || (this.writer.close(), this.writer = null, this.closed = !0);
        }
        deleteFile() {
            return e(this, void 0, void 0, function*() {
                return "";
            });
        }
    }
    function tn(t, i) {
        var r, s, a, o;
        return e(this, void 0, void 0, function*() {
            const e = new Set;
            try {
                for(var l, h = !0, d = n(t.values()); l = yield d.next(), !(r = l.done); h = !0){
                    o = l.value, h = !1;
                    const t = o;
                    e.add(t.name);
                }
            } catch (t) {
                s = {
                    error: t
                };
            } finally{
                try {
                    h || r || !(a = d.return) || (yield a.call(d));
                } finally{
                    if (s) throw s.error;
                }
            }
            if (!e.has(i)) return i;
            for(let t = 0; t < 1e3; t++){
                const n = `${i}.${t}`;
                if (!e.has(n)) return n;
            }
        });
    }
    function en(t, i) {
        return e(this, void 0, void 0, function*() {
            try {
                const e = yield t.getFileHandle(i[i.length - 1], {
                    create: !0
                });
                return yield e.createWritable();
            } catch (t) {
                if ("NoModificationAllowedError" === t.name) throw new Ri(`No permission to write: ${i.join("/")}`);
                if ("TypeMismatchError" === t.name) throw new Ri(`Is a directory: ${i.join("/")}`);
                throw new Ri(`Write ${i.join("/")} error: ${t.toString()}`);
            }
        });
    }
    function nn(t, i) {
        return e(this, void 0, void 0, function*() {
            try {
                return yield t.getDirectoryHandle(i[i.length - 1], {
                    create: !0
                });
            } catch (t) {
                if ("InvalidStateError" === t.name) throw new Ri(`No permission to create: ${i.join("/")}`);
                if ("TypeMismatchError" === t.name) throw new Ri(`Not a directory: ${i.join("/")}`);
                throw new Ri(`Create ${i.join("/")} error: ${t.toString()}`);
            }
        });
    }
    function rn(t, i, n, r) {
        return e(this, void 0, void 0, function*() {
            const s = t.handle;
            if (!n) return yield function(t, i, n) {
                return e(this, void 0, void 0, function*() {
                    const e = n ? i : yield tn(t, i), r = yield en(t, [
                        t.name,
                        e
                    ]);
                    return new Vi(i, e, r);
                });
            }(s, i, r);
            const a = JSON.parse(i);
            if (!a.hasOwnProperty("path_name") || !a.hasOwnProperty("path_id") || !a.hasOwnProperty("is_dir") || a.path_name.length < 1) throw new Ri(`Invalid name: ${i}`);
            let o;
            i = a.path_name[a.path_name.length - 1], r ? o = a.path_name[0] : t.maps.has(a.path_id) ? o = t.maps.get(a.path_id) : (o = yield tn(s, a.path_name[0]), t.maps.set(a.path_id, o));
            let l = s;
            const h = [
                s.name,
                o
            ];
            if (a.path_name.length > 1) {
                l = yield nn(l, h);
                for(let t = 1; t < a.path_name.length - 1; t++)h.push(a.path_name[t]), l = yield nn(l, h);
                h.push(i);
            }
            if (!0 === a.is_dir) return yield nn(l, h), new Vi(i, o, null, !0);
            const d = yield a.readAsBuffer(), u = new Blob([
                d
            ], {
                type: "application/octet-stream"
            }), f = document.createElement("a");
            f.href = URL.createObjectURL(u), f.download = a.name, document.body.appendChild(f), f.click(), document.body.removeChild(f);
            const c = yield en(l, h);
            return new Vi(i, o, c);
        });
    }
    class sn {
        constructor(){
            this._dataLength = 0, this._bufferLength = 0, this._state = new Int32Array(4), this._buffer = new ArrayBuffer(68), this._buffer8 = new Uint8Array(this._buffer, 0, 68), this._buffer32 = new Uint32Array(this._buffer, 0, 17), this.start();
        }
        static hashStr(t, e = !1) {
            return this.onePassHasher.start().appendStr(t).end(e);
        }
        static hashAsciiStr(t, e = !1) {
            return this.onePassHasher.start().appendAsciiStr(t).end(e);
        }
        static _hex(t) {
            const e = sn.hexChars, i = sn.hexOut;
            let n, r, s, a;
            for(a = 0; a < 4; a += 1)for(r = 8 * a, n = t[a], s = 0; s < 8; s += 2)i[r + 1 + s] = e.charAt(15 & n), n >>>= 4, i[r + 0 + s] = e.charAt(15 & n), n >>>= 4;
            return i.join("");
        }
        static _md5cycle(t, e) {
            let i = t[0], n = t[1], r = t[2], s = t[3];
            i += (n & r | ~n & s) + e[0] - 680876936 | 0, i = (i << 7 | i >>> 25) + n | 0, s += (i & n | ~i & r) + e[1] - 389564586 | 0, s = (s << 12 | s >>> 20) + i | 0, r += (s & i | ~s & n) + e[2] + 606105819 | 0, r = (r << 17 | r >>> 15) + s | 0, n += (r & s | ~r & i) + e[3] - 1044525330 | 0, n = (n << 22 | n >>> 10) + r | 0, i += (n & r | ~n & s) + e[4] - 176418897 | 0, i = (i << 7 | i >>> 25) + n | 0, s += (i & n | ~i & r) + e[5] + 1200080426 | 0, s = (s << 12 | s >>> 20) + i | 0, r += (s & i | ~s & n) + e[6] - 1473231341 | 0, r = (r << 17 | r >>> 15) + s | 0, n += (r & s | ~r & i) + e[7] - 45705983 | 0, n = (n << 22 | n >>> 10) + r | 0, i += (n & r | ~n & s) + e[8] + 1770035416 | 0, i = (i << 7 | i >>> 25) + n | 0, s += (i & n | ~i & r) + e[9] - 1958414417 | 0, s = (s << 12 | s >>> 20) + i | 0, r += (s & i | ~s & n) + e[10] - 42063 | 0, r = (r << 17 | r >>> 15) + s | 0, n += (r & s | ~r & i) + e[11] - 1990404162 | 0, n = (n << 22 | n >>> 10) + r | 0, i += (n & r | ~n & s) + e[12] + 1804603682 | 0, i = (i << 7 | i >>> 25) + n | 0, s += (i & n | ~i & r) + e[13] - 40341101 | 0, s = (s << 12 | s >>> 20) + i | 0, r += (s & i | ~s & n) + e[14] - 1502002290 | 0, r = (r << 17 | r >>> 15) + s | 0, n += (r & s | ~r & i) + e[15] + 1236535329 | 0, n = (n << 22 | n >>> 10) + r | 0, i += (n & s | r & ~s) + e[1] - 165796510 | 0, i = (i << 5 | i >>> 27) + n | 0, s += (i & r | n & ~r) + e[6] - 1069501632 | 0, s = (s << 9 | s >>> 23) + i | 0, r += (s & n | i & ~n) + e[11] + 643717713 | 0, r = (r << 14 | r >>> 18) + s | 0, n += (r & i | s & ~i) + e[0] - 373897302 | 0, n = (n << 20 | n >>> 12) + r | 0, i += (n & s | r & ~s) + e[5] - 701558691 | 0, i = (i << 5 | i >>> 27) + n | 0, s += (i & r | n & ~r) + e[10] + 38016083 | 0, s = (s << 9 | s >>> 23) + i | 0, r += (s & n | i & ~n) + e[15] - 660478335 | 0, r = (r << 14 | r >>> 18) + s | 0, n += (r & i | s & ~i) + e[4] - 405537848 | 0, n = (n << 20 | n >>> 12) + r | 0, i += (n & s | r & ~s) + e[9] + 568446438 | 0, i = (i << 5 | i >>> 27) + n | 0, s += (i & r | n & ~r) + e[14] - 1019803690 | 0, s = (s << 9 | s >>> 23) + i | 0, r += (s & n | i & ~n) + e[3] - 187363961 | 0, r = (r << 14 | r >>> 18) + s | 0, n += (r & i | s & ~i) + e[8] + 1163531501 | 0, n = (n << 20 | n >>> 12) + r | 0, i += (n & s | r & ~s) + e[13] - 1444681467 | 0, i = (i << 5 | i >>> 27) + n | 0, s += (i & r | n & ~r) + e[2] - 51403784 | 0, s = (s << 9 | s >>> 23) + i | 0, r += (s & n | i & ~n) + e[7] + 1735328473 | 0, r = (r << 14 | r >>> 18) + s | 0, n += (r & i | s & ~i) + e[12] - 1926607734 | 0, n = (n << 20 | n >>> 12) + r | 0, i += (n ^ r ^ s) + e[5] - 378558 | 0, i = (i << 4 | i >>> 28) + n | 0, s += (i ^ n ^ r) + e[8] - 2022574463 | 0, s = (s << 11 | s >>> 21) + i | 0, r += (s ^ i ^ n) + e[11] + 1839030562 | 0, r = (r << 16 | r >>> 16) + s | 0, n += (r ^ s ^ i) + e[14] - 35309556 | 0, n = (n << 23 | n >>> 9) + r | 0, i += (n ^ r ^ s) + e[1] - 1530992060 | 0, i = (i << 4 | i >>> 28) + n | 0, s += (i ^ n ^ r) + e[4] + 1272893353 | 0, s = (s << 11 | s >>> 21) + i | 0, r += (s ^ i ^ n) + e[7] - 155497632 | 0, r = (r << 16 | r >>> 16) + s | 0, n += (r ^ s ^ i) + e[10] - 1094730640 | 0, n = (n << 23 | n >>> 9) + r | 0, i += (n ^ r ^ s) + e[13] + 681279174 | 0, i = (i << 4 | i >>> 28) + n | 0, s += (i ^ n ^ r) + e[0] - 358537222 | 0, s = (s << 11 | s >>> 21) + i | 0, r += (s ^ i ^ n) + e[3] - 722521979 | 0, r = (r << 16 | r >>> 16) + s | 0, n += (r ^ s ^ i) + e[6] + 76029189 | 0, n = (n << 23 | n >>> 9) + r | 0, i += (n ^ r ^ s) + e[9] - 640364487 | 0, i = (i << 4 | i >>> 28) + n | 0, s += (i ^ n ^ r) + e[12] - 421815835 | 0, s = (s << 11 | s >>> 21) + i | 0, r += (s ^ i ^ n) + e[15] + 530742520 | 0, r = (r << 16 | r >>> 16) + s | 0, n += (r ^ s ^ i) + e[2] - 995338651 | 0, n = (n << 23 | n >>> 9) + r | 0, i += (r ^ (n | ~s)) + e[0] - 198630844 | 0, i = (i << 6 | i >>> 26) + n | 0, s += (n ^ (i | ~r)) + e[7] + 1126891415 | 0, s = (s << 10 | s >>> 22) + i | 0, r += (i ^ (s | ~n)) + e[14] - 1416354905 | 0, r = (r << 15 | r >>> 17) + s | 0, n += (s ^ (r | ~i)) + e[5] - 57434055 | 0, n = (n << 21 | n >>> 11) + r | 0, i += (r ^ (n | ~s)) + e[12] + 1700485571 | 0, i = (i << 6 | i >>> 26) + n | 0, s += (n ^ (i | ~r)) + e[3] - 1894986606 | 0, s = (s << 10 | s >>> 22) + i | 0, r += (i ^ (s | ~n)) + e[10] - 1051523 | 0, r = (r << 15 | r >>> 17) + s | 0, n += (s ^ (r | ~i)) + e[1] - 2054922799 | 0, n = (n << 21 | n >>> 11) + r | 0, i += (r ^ (n | ~s)) + e[8] + 1873313359 | 0, i = (i << 6 | i >>> 26) + n | 0, s += (n ^ (i | ~r)) + e[15] - 30611744 | 0, s = (s << 10 | s >>> 22) + i | 0, r += (i ^ (s | ~n)) + e[6] - 1560198380 | 0, r = (r << 15 | r >>> 17) + s | 0, n += (s ^ (r | ~i)) + e[13] + 1309151649 | 0, n = (n << 21 | n >>> 11) + r | 0, i += (r ^ (n | ~s)) + e[4] - 145523070 | 0, i = (i << 6 | i >>> 26) + n | 0, s += (n ^ (i | ~r)) + e[11] - 1120210379 | 0, s = (s << 10 | s >>> 22) + i | 0, r += (i ^ (s | ~n)) + e[2] + 718787259 | 0, r = (r << 15 | r >>> 17) + s | 0, n += (s ^ (r | ~i)) + e[9] - 343485551 | 0, n = (n << 21 | n >>> 11) + r | 0, t[0] = i + t[0] | 0, t[1] = n + t[1] | 0, t[2] = r + t[2] | 0, t[3] = s + t[3] | 0;
        }
        start() {
            return this._dataLength = 0, this._bufferLength = 0, this._state.set(sn.stateIdentity), this;
        }
        appendStr(t) {
            const e = this._buffer8, i = this._buffer32;
            let n, r, s = this._bufferLength;
            for(r = 0; r < t.length; r += 1){
                if (n = t.charCodeAt(r), n < 128) e[s++] = n;
                else if (n < 2048) e[s++] = 192 + (n >>> 6), e[s++] = 63 & n | 128;
                else if (n < 55296 || n > 56319) e[s++] = 224 + (n >>> 12), e[s++] = n >>> 6 & 63 | 128, e[s++] = 63 & n | 128;
                else {
                    if (n = 1024 * (n - 55296) + (t.charCodeAt(++r) - 56320) + 65536, n > 1114111) throw new Error("Unicode standard supports code points up to U+10FFFF");
                    e[s++] = 240 + (n >>> 18), e[s++] = n >>> 12 & 63 | 128, e[s++] = n >>> 6 & 63 | 128, e[s++] = 63 & n | 128;
                }
                s >= 64 && (this._dataLength += 64, sn._md5cycle(this._state, i), s -= 64, i[0] = i[16]);
            }
            return this._bufferLength = s, this;
        }
        appendAsciiStr(t) {
            const e = this._buffer8, i = this._buffer32;
            let n, r = this._bufferLength, s = 0;
            for(;;){
                for(n = Math.min(t.length - s, 64 - r); n--;)e[r++] = t.charCodeAt(s++);
                if (r < 64) break;
                this._dataLength += 64, sn._md5cycle(this._state, i), r = 0;
            }
            return this._bufferLength = r, this;
        }
        appendByteArray(t) {
            const e = this._buffer8, i = this._buffer32;
            let n, r = this._bufferLength, s = 0;
            for(;;){
                for(n = Math.min(t.length - s, 64 - r); n--;)e[r++] = t[s++];
                if (r < 64) break;
                this._dataLength += 64, sn._md5cycle(this._state, i), r = 0;
            }
            return this._bufferLength = r, this;
        }
        getState() {
            const t = this._state;
            return {
                buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
                buflen: this._bufferLength,
                length: this._dataLength,
                state: [
                    t[0],
                    t[1],
                    t[2],
                    t[3]
                ]
            };
        }
        setState(t) {
            const e = t.buffer, i = t.state, n = this._state;
            let r;
            for(this._dataLength = t.length, this._bufferLength = t.buflen, n[0] = i[0], n[1] = i[1], n[2] = i[2], n[3] = i[3], r = 0; r < e.length; r += 1)this._buffer8[r] = e.charCodeAt(r);
        }
        end(t = !1) {
            const e = this._bufferLength, i = this._buffer8, n = this._buffer32, r = 1 + (e >> 2);
            this._dataLength += e;
            const s = 8 * this._dataLength;
            if (i[e] = 128, i[e + 1] = i[e + 2] = i[e + 3] = 0, n.set(sn.buffer32Identity.subarray(r), r), e > 55 && (sn._md5cycle(this._state, n), n.set(sn.buffer32Identity)), s <= 4294967295) n[14] = s;
            else {
                const t = s.toString(16).match(/(.*?)(.{0,8})$/);
                if (null === t) return;
                const e = parseInt(t[2], 16), i = parseInt(t[1], 16) || 0;
                n[14] = e, n[15] = i;
            }
            return sn._md5cycle(this._state, n), t ? this._state : sn._hex(this._state);
        }
    }
    if (sn.stateIdentity = new Int32Array([
        1732584193,
        -271733879,
        -1732584194,
        271733878
    ]), sn.buffer32Identity = new Int32Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ]), sn.hexChars = "0123456789abcdef", sn.hexOut = [], sn.onePassHasher = new sn, "5d41402abc4b2a76b9719d911017c592" !== sn.hashStr("hello")) throw new Error("Md5 self test failed.");
    function an(t) {
        return 97 <= t && t <= 122 || 65 <= t && t <= 90 || 48 <= t && t <= 57 || 35 == t || 58 == t || 43 == t || 47 == t || 61 == t;
    }
    class on {
        constructor(){
            this.bufArray = [], this.resolve = null, this.reject = null, this.bufHead = 0, this.bufTail = 0, this.nextIdx = 0, this.nextBuf = null, this.arrBuf = new ArrayBuffer(128);
        }
        addBuffer(t) {
            this.bufArray[this.bufTail++] = t, this.resolve && (this.resolve(), this.resolve = null, this.reject = null);
        }
        stopBuffer() {
            this.reject && (this.reject(new Ri("Stopped")), this.reject = null, this.resolve = null);
        }
        drainBuffer() {
            this.bufArray = [], this.bufHead = 0, this.bufTail = 0;
        }
        toUint8Array(t) {
            return e(this, void 0, void 0, function*() {
                if ("string" == typeof t) return Ii(t);
                if (t instanceof ArrayBuffer) return new Uint8Array(t);
                if (t instanceof Uint8Array) return t;
                if (t instanceof Blob) {
                    const e = yield t.arrayBuffer();
                    return new Uint8Array(e);
                }
                throw new Ri("The buffer type is not supported", null, !0);
            });
        }
        nextBuffer() {
            return e(this, void 0, void 0, function*() {
                if (this.nextBuf && this.nextIdx < this.nextBuf.length) return this.nextBuf.subarray(this.nextIdx);
                this.bufHead === this.bufTail && (0 !== this.bufHead && (this.bufHead = 0, this.bufTail = 0), yield new Promise((t, e)=>{
                    this.resolve = t, this.reject = e;
                }));
                const t = this.bufArray[this.bufHead];
                return this.bufArray[this.bufHead] = null, this.bufHead++, this.nextBuf = yield this.toUint8Array(t), this.nextIdx = 0, this.nextBuf;
            });
        }
        growBuffer(t, e, i) {
            const n = Math.max(2 * t.length, e + i);
            this.arrBuf = new ArrayBuffer(n);
            const r = new Uint8Array(this.arrBuf);
            return r.set(t.subarray(0, e)), r;
        }
        appendBuffer(t, e, i) {
            const n = t.length >= e + i.length ? t : this.growBuffer(t, e, i.length);
            return n.set(i, e), n;
        }
        readLine() {
            return e(this, void 0, void 0, function*() {
                let t = new Uint8Array(this.arrBuf), e = 0;
                for(;;){
                    let i = yield this.nextBuffer();
                    const n = i.indexOf(10);
                    if (n >= 0 ? (this.nextIdx += n + 1, i = i.subarray(0, n)) : this.nextIdx += i.length, i.includes(3)) throw new Ri("Interrupted");
                    if (t = this.appendBuffer(t, e, i), e += i.length, n >= 0) return Ei(t.subarray(0, e));
                }
            });
        }
        readBinary(t) {
            return e(this, void 0, void 0, function*() {
                this.arrBuf.byteLength < t && (this.arrBuf = new ArrayBuffer(t));
                const e = new Uint8Array(this.arrBuf, 0, t);
                let i = 0;
                for(; i < t;){
                    const n = t - i;
                    let r = yield this.nextBuffer();
                    r.length > n ? (this.nextIdx += n, r = r.subarray(0, n)) : this.nextIdx += r.length, e.set(r, i), i += r.length;
                }
                return e;
            });
        }
        readLineOnWindows() {
            return e(this, void 0, void 0, function*() {
                let t = new Uint8Array(this.arrBuf), e = 27, i = !1, n = !1, r = !1, s = !1, a = !1, o = 0;
                for(;;){
                    let l = yield this.nextBuffer();
                    const h = l.indexOf(33);
                    h >= 0 ? (this.nextIdx += h + 1, l = l.subarray(0, h)) : this.nextIdx += l.length;
                    for(let h = 0; h < l.length; h++){
                        const d = l[h];
                        if (3 == d) throw new Ri("Interrupted");
                        if (10 == d && (n = !0), i) Ui(d) && (i = !1, 72 == d && e >= 48 && e <= 57 && (r = !0)), 91 == e && 72 == d && (s = !0), e = d;
                        else if (27 == d) i = !0, e = d;
                        else if (an(d)) {
                            if (r && (r = !1, n && o > 0 && (d == t[o - 1] || a))) {
                                t[o - 1] = d;
                                continue;
                            }
                            o >= t.length && (t = this.growBuffer(t, o, l.length)), t[o++] = d, a = s, s = !1, n = !1;
                        }
                    }
                    if (h >= 0 && o > 0 && !i) return Ei(t.subarray(0, o));
                }
            });
        }
    }
    function ln(t) {
        const e = [];
        for(let i = 0; i < t.length; i++)e.push([
            t[i][0].charCodeAt(0),
            t[i][1].charCodeAt(0),
            t[i][1].charCodeAt(1)
        ]);
        return e;
    }
    class hn {
        constructor(t, e = !1){
            this.buffer = new on, this.remoteIsWindows = !1, this.lastInputTime = 0, this.openedFiles = [], this.createdFiles = [], this.tmuxOutputJunk = !1, this.cleanTimeoutInMilliseconds = 100, this.transferConfig = {}, this.stopped = !1, this.maxChunkTimeInMilliseconds = 0, this.protocolNewline = "\n", this.writer = t, this.isWindowsShell = e;
        }
        cleanup() {
            for (const t of this.openedFiles)t.closeFile();
        }
        addReceivedData(t) {
            this.stopped || this.buffer.addBuffer(t), this.lastInputTime = Date.now();
        }
        stopTransferring() {
            return e(this, void 0, void 0, function*() {
                this.cleanTimeoutInMilliseconds = Math.max(2 * this.maxChunkTimeInMilliseconds, 500), this.stopped = !0, this.buffer.stopBuffer();
            });
        }
        cleanInput(t) {
            return e(this, void 0, void 0, function*() {
                for(this.stopped = !0, this.buffer.drainBuffer(), this.lastInputTime = Date.now();;){
                    const e = t - (Date.now() - this.lastInputTime);
                    if (e <= 0) return;
                    yield new Promise((t)=>setTimeout(t, e));
                }
            });
        }
        sendLine(t, i) {
            return e(this, void 0, void 0, function*() {
                this.writer(`#${t}:${i}${this.protocolNewline}`);
            });
        }
        recvLine(t, i = !1) {
            return e(this, void 0, void 0, function*() {
                if (this.stopped) throw new Ri("Stopped");
                if (this.isWindowsShell || this.remoteIsWindows) {
                    let e = yield this.buffer.readLineOnWindows();
                    const i = e.lastIndexOf("#" + t + ":");
                    if (i >= 0) e = e.substring(i);
                    else {
                        const t = e.lastIndexOf("#");
                        t > 0 && (e = e.substring(t));
                    }
                    return e;
                }
                let e = yield this.buffer.readLine();
                if (this.tmuxOutputJunk || i) {
                    if (e.length > 0) for(; "\r" === e[e.length - 1];)e = e.substring(0, e.length - 1) + (yield this.buffer.readLine());
                    const i = e.lastIndexOf("#" + t + ":");
                    if (i >= 0) e = e.substring(i);
                    else {
                        const t = e.lastIndexOf("#");
                        t > 0 && (e = e.substring(t));
                    }
                    e = function(t) {
                        for(;;){
                            const e = t.indexOf("\x1bP=");
                            if (e < 0) return t;
                            let i = e + 3;
                            const n = t.substring(i).indexOf("\x1bP=");
                            if (n < 0) return t.substring(0, e);
                            i += n + 3;
                            const r = t.substring(i).indexOf("\x1b\\");
                            if (r < 0) return t.substring(0, e);
                            i += r + 2, t = t.substring(0, e) + t.substring(i);
                        }
                    }(e);
                }
                return e;
            });
        }
        recvCheck(t, i = !1) {
            return e(this, void 0, void 0, function*() {
                const e = yield this.recvLine(t, i), n = e.indexOf(":");
                if (n < 1) throw new Ri(Bi(e), "colon", !0);
                const r = e.substring(1, n), s = e.substring(n + 1);
                if (r != t) throw new Ri(s, r, !0);
                return s;
            });
        }
        sendInteger(t, i) {
            return e(this, void 0, void 0, function*() {
                yield this.sendLine(t, i.toString());
            });
        }
        recvInteger(t, i = !1) {
            return e(this, void 0, void 0, function*() {
                const e = yield this.recvCheck(t, i);
                return Number(e);
            });
        }
        checkInteger(t) {
            return e(this, void 0, void 0, function*() {
                const e = yield this.recvInteger("SUCC");
                if (e !== t) throw new Ri(`Integer check [${e}] <> [${t}]`, null, !0);
            });
        }
        sendString(t, i) {
            return e(this, void 0, void 0, function*() {
                yield this.sendLine(t, Bi(i));
            });
        }
        recvString(t, i = !1) {
            return e(this, void 0, void 0, function*() {
                return Ei(Di((yield this.recvCheck(t, i))), "utf8");
            });
        }
        checkString(t) {
            return e(this, void 0, void 0, function*() {
                const e = yield this.recvString("SUCC");
                if (e !== t) throw new Ri(`String check [${e}] <> [${t}]`, null, !0);
            });
        }
        sendBinary(t, i) {
            return e(this, void 0, void 0, function*() {
                yield this.sendLine(t, Bi(i));
            });
        }
        recvBinary(t, i = !1) {
            return e(this, void 0, void 0, function*() {
                return Di((yield this.recvCheck(t, i)));
            });
        }
        checkBinary(t) {
            return e(this, void 0, void 0, function*() {
                const e = yield this.recvBinary("SUCC");
                if (e.length != t.length) throw new Ri(`Binary length check [${e.length}] <> [${t.length}]`, null, !0);
                for(let i = 0; i < e.length; i++)if (e[i] != t[i]) throw new Ri(`Binary check [${e[i]}] <> [${t[i]}]`, null, !0);
            });
        }
        sendData(t, i, n) {
            return e(this, void 0, void 0, function*() {
                if (!i) return void (yield this.sendBinary("DATA", t));
                const e = function(t, e) {
                    if (!e.length) return t;
                    const i = new Uint8Array(2 * t.length);
                    let n = 0;
                    for(let r = 0; r < t.length; r++){
                        let s = -1;
                        for(let i = 0; i < e.length; i++)if (t[r] == e[i][0]) {
                            s = i;
                            break;
                        }
                        s < 0 ? i[n++] = t[r] : (i[n++] = e[s][1], i[n++] = e[s][2]);
                    }
                    return i.subarray(0, n);
                }(t, n);
                this.writer(`#DATA:${e.length}\n`), this.writer(e);
            });
        }
        recvData(t, i, n) {
            return e(this, void 0, void 0, function*() {
                return yield Promise.race([
                    new Promise((t, e)=>setTimeout(()=>{
                            this.cleanTimeoutInMilliseconds = 3e3, e(new Ri("Receive data timeout"));
                        }, n)),
                    (()=>e(this, void 0, void 0, function*() {
                            if (!t) return yield this.recvBinary("DATA");
                            const e = yield this.recvInteger("DATA");
                            return function(t, e) {
                                if (!e.length) return t;
                                const i = new Uint8Array(t.length);
                                let n = 0;
                                for(let r = 0; r < t.length; r++){
                                    let s = -1;
                                    if (r < t.length - 1) {
                                        for(let i = 0; i < e.length; i++)if (t[r] == e[i][1] && t[r + 1] == e[i][2]) {
                                            s = i;
                                            break;
                                        }
                                    }
                                    s < 0 ? i[n++] = t[r] : (i[n++] = e[s][0], r++);
                                }
                                return i.subarray(0, n);
                            }((yield this.buffer.readBinary(e)), i);
                        }))()
                ]);
            });
        }
        sendAction(t, i) {
            return e(this, void 0, void 0, function*() {
                const e = {
                    lang: "js",
                    confirm: t,
                    version: "1.1.5",
                    support_dir: !0
                };
                (this.isWindowsShell || i) && (e.binary = !1, e.newline = "!\n"), i && (this.remoteIsWindows = !0, this.protocolNewline = "!\n"), yield this.sendString("ACT", JSON.stringify(e));
            });
        }
        recvAction() {
            return e(this, void 0, void 0, function*() {
                const t = yield this.recvString("ACT", !0), e = JSON.parse(t);
                return e.newline && (this.protocolNewline = e.newline), e;
            });
        }
        sendConfig(t, i, n, r) {
            return e(this, void 0, void 0, function*() {
                const e = {
                    lang: "js"
                };
                t.quiet && (e.quiet = !0), t.binary && (e.binary = !0, e.escape_chars = i), t.directory && (e.directory = !0), t.bufsize && (e.bufsize = t.bufsize), t.timeout && (e.timeout = t.timeout), t.overwrite && (e.overwrite = !0), n == Li && (e.tmux_output_junk = !0), r > 0 && (e.tmux_pane_width = r);
                let s = JSON.stringify(e);
                s = s.replace(/[\u007F-\uFFFF]/g, function(t) {
                    return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
                }), this.transferConfig = e, yield this.sendString("CFG", s);
            });
        }
        recvConfig() {
            return e(this, void 0, void 0, function*() {
                const t = yield this.recvString("CFG", !0);
                return this.transferConfig = JSON.parse(t), this.tmuxOutputJunk = !0 === this.transferConfig.tmux_output_junk, this.transferConfig;
            });
        }
        clientExit(t) {
            return e(this, void 0, void 0, function*() {
                yield this.sendString("EXIT", t);
            });
        }
        recvExit() {
            return e(this, void 0, void 0, function*() {
                return this.recvString("EXIT");
            });
        }
        serverExit(t) {
            return e(this, void 0, void 0, function*() {
                yield this.cleanInput(500), yield function() {
                    return e(this, void 0, void 0, function*() {});
                }(), this.isWindowsShell ? (t = t.replace(/\n/g, "\r\n"), process.stdout.write("\x1b[H\x1b[2J\x1b[?1049l")) : process.stdout.write("\x1b8\x1b[0J"), process.stdout.write(t), process.stdout.write("\r\n"), process.stdout.write("\x1b[?25h"), this.transferConfig.tmux_output_junk && (yield function() {
                    return e(this, void 0, void 0, function*() {
                        const t = require("5f05814a9817363f").promisify(require("94f4f1d9b57909b2").exec);
                        yield t("tmux refresh-client");
                    });
                }());
            });
        }
        deleteCreatedFiles() {
            return e(this, void 0, void 0, function*() {
                const t = [];
                for (const e of this.createdFiles){
                    const i = yield e.deleteFile();
                    i && t.push(i);
                }
                return t;
            });
        }
        clientError(t) {
            return e(this, void 0, void 0, function*() {
                yield this.cleanInput(this.cleanTimeoutInMilliseconds);
                const e = Ri.getErrorMessage(t);
                let i = !0;
                if (t instanceof Ri) {
                    if (i = t.isTraceBack(), t.isRemoteExit()) return;
                    if (t.isRemoteFail()) return void (i && console.log(e));
                }
                yield this.sendString(i ? "FAIL" : "fail", e), i && console.log(e);
            });
        }
        serverError(t) {
            return e(this, void 0, void 0, function*() {
                yield this.cleanInput(this.cleanTimeoutInMilliseconds);
                const e = Ri.getErrorMessage(t);
                let i = !0;
                if (t instanceof Ri) {
                    if (t.isStopAndDelete()) {
                        const e = yield this.deleteCreatedFiles();
                        if (e && e.length) return void (yield this.serverExit([
                            t.message + ":"
                        ].concat(e).join("\r\n- ")));
                    }
                    if (i = t.isTraceBack(), t.isRemoteExit() || t.isRemoteFail()) return void (yield this.serverExit(e));
                }
                yield this.sendString(i ? "FAIL" : "fail", e), yield this.serverExit(e);
            });
        }
        sendFileNum(t, i) {
            return e(this, void 0, void 0, function*() {
                yield this.sendInteger("NUM", t), yield this.checkInteger(t), i && i.onNum(t);
            });
        }
        sendFileName(t, i, n) {
            return e(this, void 0, void 0, function*() {
                const e = t.getRelPath(), r = e[e.length - 1];
                if (i) {
                    const i = {
                        path_id: t.getPathId(),
                        path_name: e,
                        is_dir: t.isDir()
                    };
                    yield this.sendString("NAME", JSON.stringify(i));
                } else yield this.sendString("NAME", r);
                const s = yield this.recvString("SUCC");
                return n && n.onName(r), s;
            });
        }
        sendFileSize(t, i) {
            return e(this, void 0, void 0, function*() {
                yield this.sendInteger("SIZE", t), yield this.checkInteger(t), i && i.onSize(t);
            });
        }
        sendFileData(t, i, n, r, s, a) {
            return e(this, void 0, void 0, function*() {
                let e = 0;
                a && a.onStep(e);
                let o = 1024, l = new ArrayBuffer(o);
                const h = new sn;
                for(; e < i;){
                    const i = Date.now(), d = yield t.readFile(l);
                    yield this.sendData(d, n, r), h.appendByteArray(d), yield this.checkInteger(d.length), e += d.length, a && a.onStep(e);
                    const u = Date.now() - i;
                    d.length == o && u < 500 && o < s ? (o = Math.min(2 * o, s), l = new ArrayBuffer(o)) : u >= 2e3 && o > 1024 && (o = 1024, l = new ArrayBuffer(o)), u > this.maxChunkTimeInMilliseconds && (this.maxChunkTimeInMilliseconds = u);
                }
                return new Uint8Array(h.end(!0).buffer);
            });
        }
        sendFileMD5(t, i) {
            return e(this, void 0, void 0, function*() {
                yield this.sendBinary("MD5", t), yield this.checkBinary(t), i && i.onDone();
            });
        }
        sendFiles(t, i) {
            return e(this, void 0, void 0, function*() {
                this.openedFiles.push(...t);
                const e = !0 === this.transferConfig.binary, n = !0 === this.transferConfig.directory, r = this.transferConfig.bufsize || 10485760, s = this.transferConfig.escape_chars ? ln(this.transferConfig.escape_chars) : [];
                yield this.sendFileNum(t.length, i);
                const a = [];
                for (const o of t){
                    const t = yield this.sendFileName(o, n, i);
                    if (a.includes(t) || a.push(t), o.isDir()) continue;
                    const l = o.getSize();
                    yield this.sendFileSize(l, i);
                    const h = yield this.sendFileData(o, l, e, s, r, i);
                    o.closeFile(), yield this.sendFileMD5(h, i);
                }
                return a;
            });
        }
        recvFileNum(t) {
            return e(this, void 0, void 0, function*() {
                const e = yield this.recvInteger("NUM");
                return yield this.sendInteger("SUCC", e), t && t.onNum(e), e;
            });
        }
        recvFileName(t, i, n, r, s) {
            return e(this, void 0, void 0, function*() {
                const e = yield this.recvString("NAME"), a = yield i(t, e, n, r);
                return this.createdFiles.push(a), yield this.sendString("SUCC", a.getLocalName()), s && s.onName(a.getFileName()), a;
            });
        }
        recvFileSize(t) {
            return e(this, void 0, void 0, function*() {
                const e = yield this.recvInteger("SIZE");
                return yield this.sendInteger("SUCC", e), t && t.onSize(e), e;
            });
        }
        recvFileData(t, i, n, r, s, a) {
            return e(this, void 0, void 0, function*() {
                let e = 0;
                a && a.onStep(e);
                const o = new sn;
                for(; e < i;){
                    const i = Date.now(), l = yield this.recvData(n, r, s);
                    yield t.writeFile(l), e += l.length, a && a.onStep(e), yield this.sendInteger("SUCC", l.length), o.appendByteArray(l);
                    const h = Date.now() - i;
                    h > this.maxChunkTimeInMilliseconds && (this.maxChunkTimeInMilliseconds = h);
                }
                return new Uint8Array(o.end(!0).buffer);
            });
        }
        recvFileMD5(t, i) {
            return e(this, void 0, void 0, function*() {
                const e = yield this.recvBinary("MD5");
                if (t.length != e.length) throw new Ri("Check MD5 failed");
                for(let i = 0; i < t.length; i++)if (t[i] != e[i]) throw new Ri("Check MD5 failed");
                yield this.sendBinary("SUCC", t), i && i.onDone();
            });
        }
        recvFiles(t, i, n) {
            return e(this, void 0, void 0, function*() {
                const e = !0 === this.transferConfig.binary, r = !0 === this.transferConfig.directory, s = !0 === this.transferConfig.overwrite, a = this.transferConfig.timeout ? 1e3 * this.transferConfig.timeout : 1e5, o = this.transferConfig.escape_chars ? ln(this.transferConfig.escape_chars) : [], l = yield this.recvFileNum(n), h = [];
                for(let d = 0; d < l; d++){
                    const l = yield this.recvFileName(t, i, r, s, n);
                    if (h.includes(l.getLocalName()) || h.push(l.getLocalName()), l.isDir()) continue;
                    this.openedFiles.push(l);
                    const d = yield this.recvFileSize(n), u = yield this.recvFileData(l, d, e, o, a, n);
                    l.closeFile(), yield this.recvFileMD5(u, n);
                }
                return h;
            });
        }
    }
    function dn(t, e) {
        e -= 3;
        let i = 0, n = "";
        for(let r = 0; r < t.length; r++){
            if (t.charCodeAt(r) >= 19968 && t.charCodeAt(r) <= 40869) {
                if (i + 2 > e) return {
                    sub: n + "...",
                    len: i + 3
                };
                i += 2;
            } else {
                if (i + 1 > e) return {
                    sub: n + "...",
                    len: i + 3
                };
                i += 1;
            }
            n += t[r];
        }
        return {
            sub: n + "...",
            len: i + 3
        };
    }
    function un(t) {
        let e = "B";
        do {
            if (t < 1024) break;
            if (e = "KB", (t /= 1024) < 1024) break;
            if (e = "MB", (t /= 1024) < 1024) break;
            if (e = "GB", (t /= 1024) < 1024) break;
            t /= 1024, e = "TB";
        }while (0);
        return t >= 100 ? `${t.toFixed(0)} ${e}` : t >= 10 ? `${t.toFixed(1)} ${e}` : `${t.toFixed(2)} ${e}`;
    }
    class fn {
        constructor(t, e, i){
            this.lastUpdateTime = 0, this.firstWrite = !0, this.speedCnt = 0, this.speedIdx = 0, this.timeArray = new Array(30), this.stepArray = new Array(30), this.writer = t, this.tmuxPaneColumns = i || 0, this.columns = this.tmuxPaneColumns > 1 ? this.tmuxPaneColumns - 1 : e;
        }
        setTerminalColumns(t) {
            this.columns = t, this.tmuxPaneColumns > 0 && (this.tmuxPaneColumns = 0);
        }
        onNum(t) {
            this.fileCount = t, this.fileIdx = 0;
        }
        onName(t) {
            this.fileName = t, this.fileIdx += 1, this.startTime = Date.now(), this.timeArray[0] = this.startTime, this.stepArray[0] = 0, this.speedCnt = 1, this.speedIdx = 1, this.fileStep = -1;
        }
        onSize(t) {
            this.fileSize = t;
        }
        onStep(t) {
            t <= this.fileStep || (this.fileStep = t, this.showProgress());
        }
        hideCursor() {
            this.writer("\x1b[?25l");
        }
        showCursor() {
            this.writer("\x1b[?25h");
        }
        showProgress() {
            const t = Date.now();
            if (t - this.lastUpdateTime < 200) return;
            this.lastUpdateTime = t;
            let e = "100%";
            0 != this.fileSize && (e = Math.round(100 * this.fileStep / this.fileSize).toString() + "%");
            const i = un(this.fileStep), n = this.getSpeed(t);
            let r = "--- B/s", s = "--- ETA";
            n > 0 && (r = un(n) + "/s", s = function(t) {
                let e = "";
                t >= 3600 && (e += Math.floor(t / 3600).toString() + ":", t %= 3600);
                const i = Math.floor(t / 60);
                e += i >= 10 ? i.toString() : "0" + i.toString(), e += ":";
                const n = Math.round(t % 60);
                return e += n >= 10 ? n.toString() : "0" + n.toString(), e;
            }(Math.round((this.fileSize - this.fileStep) / n)) + " ETA");
            const a = this.getProgressText(e, i, r, s);
            if (this.firstWrite) return this.firstWrite = !1, void this.writer(a);
            this.tmuxPaneColumns > 0 ? this.writer(`[${this.columns}D${a}`) : this.writer(`\r${a}`);
        }
        getSpeed(t) {
            let e;
            return this.speedCnt <= 30 ? (this.speedCnt++, e = 1e3 * (this.fileStep - this.stepArray[0]) / (t - this.timeArray[0])) : e = 1e3 * (this.fileStep - this.stepArray[this.speedIdx]) / (t - this.timeArray[this.speedIdx]), this.timeArray[this.speedIdx] = t, this.stepArray[this.speedIdx] = this.fileStep, this.speedIdx++, this.speedIdx >= 30 && (this.speedIdx %= 30), isFinite(e) ? e : -1;
        }
        getProgressText(t, e, i, n) {
            const r = 24;
            let s = this.fileCount > 1 ? `(${this.fileIdx}/${this.fileCount}) ${this.fileName}` : this.fileName, a = s.replace(/[\u4e00-\u9fa5]/g, "**").length;
            let o = ` ${t} | ${e} | ${i} | ${n}`;
            do {
                if (this.columns - a - o.length >= r) break;
                if (a > 50 && ({ sub: s, len: a } = dn(s, 50)), this.columns - a - o.length >= r) break;
                if (a > 40 && ({ sub: s, len: a } = dn(s, 40)), this.columns - a - o.length >= r) break;
                if (o = ` ${t} | ${i} | ${n}`, this.columns - a - o.length >= r) break;
                if (a > 30 && ({ sub: s, len: a } = dn(s, 30)), this.columns - a - o.length >= r) break;
                if (o = ` ${t} | ${n}`, this.columns - a - o.length >= r) break;
                if (o = ` ${t}`, this.columns - a - o.length >= r) break;
                if (a > 20 && ({ sub: s, len: a } = dn(s, 20)), this.columns - a - o.length >= r) break;
                s = "", a = 0;
            }while (0);
            let l = this.columns - o.length;
            a > 0 && (l -= a + 1, s += " ");
            return (s + this.getProgressBar(l) + o).trim();
        }
        getProgressBar(t) {
            if (t < 12) return "";
            const e = t - 2;
            let i = e;
            return 0 != this.fileSize && (i = Math.round(e * this.fileStep / this.fileSize)), "[\x1b[36m" + "\u2588".repeat(i) + "\u2591".repeat(e - i) + "\x1b[0m]";
        }
        onDone() {
            0 != this.fileSize && (this.fileStep = this.fileSize, this.lastUpdateTime = 0, this.showProgress());
        }
    }
    function cn(t, i, n, r) {
        return e(this, void 0, void 0, function*() {
            i.isFile ? yield new Promise((e)=>{
                i.file((i)=>{
                    n.push(new Gi(t, r, i, !1)), e();
                });
            }) : i.isDirectory && (n.push(new Gi(t, r, null, !0)), yield new Promise((s)=>{
                i.createReader().readEntries((i)=>e(this, void 0, void 0, function*() {
                        for (const e of i)yield cn(t, e, n, [
                            ...r,
                            e.name
                        ]);
                        s();
                    }));
            }));
        });
    }
    const _n = "::TRZSZ:TRANSFER:", pn = new RegExp(/::TRZSZ:TRANSFER:([SRD]):(\d+\.\d+\.\d+)(:\d+)?/), wn = new Float64Array(Ii(_n).buffer, 0, 2);
    class mn {
        constructor(t){
            if (this.trzszTransfer = null, this.textProgressBar = null, this.uniqueIdMaps = new Map, this.uploadFilesList = null, this.uploadFilesResolve = null, this.uploadFilesReject = null, this.uploadInterrupting = !1, this.uploadSkipTrzCommand = !1, !t) throw new Ri("TrzszOptions is required");
            if (!t.writeToTerminal) throw new Ri("TrzszOptions.writeToTerminal is required");
            if (this.writeToTerminal = t.writeToTerminal, !t.sendToServer) throw new Ri("TrzszOptions.sendToServer is required");
            if (this.sendToServer = t.sendToServer, !Fi && !t.chooseSendFiles) throw new Ri("TrzszOptions.chooseSendFiles is required when having a node runtime environment");
            if (this.chooseSendFiles = t.chooseSendFiles, !Fi && !t.chooseSaveDirectory) throw new Ri("TrzszOptions.chooseSaveDirectory is required when having a node runtime environment");
            this.chooseSaveDirectory = t.chooseSaveDirectory, this.terminalColumns = t.terminalColumns || 80, this.isWindowsShell = !!t.isWindowsShell, this.dragInitTimeout = t.dragInitTimeout || 3e3;
        }
        processServerOutput(t) {
            if (this.isTransferringFiles()) this.trzszTransfer.addReceivedData(t);
            else if (!this.uploadInterrupting) {
                if (this.uploadSkipTrzCommand) {
                    this.uploadSkipTrzCommand = !1;
                    const e = function(t) {
                        let e;
                        if ("string" == typeof t) e = Ii(t);
                        else if (t instanceof ArrayBuffer) e = new Uint8Array(t);
                        else {
                            if (!(t instanceof Uint8Array)) return t;
                            e = t;
                        }
                        const i = new Uint8Array(e.length);
                        let n = !1, r = 0;
                        for(let t = 0; t < e.length; t++){
                            const s = e[t];
                            n ? Ui(s) && (n = !1) : 27 == s ? n = !0 : i[r++] = s;
                        }
                        for(; r > 0;){
                            const t = i[r - 1];
                            if (13 != t && 10 != t) break;
                            r--;
                        }
                        const s = i.subarray(0, r);
                        return s.length > 100 ? t : String.fromCharCode.apply(null, s);
                    }(t);
                    if ("trz" === e || "trz -d" === e) return void this.writeToTerminal("\r\n");
                }
                setTimeout(()=>this.detectAndHandleTrzsz(t), 10), this.writeToTerminal(t);
            }
        }
        processTerminalInput(t) {
            this.isTransferringFiles() ? "\x03" === t && this.stopTransferringFiles() : this.sendToServer(t);
        }
        processBinaryInput(t) {
            this.isTransferringFiles() || this.sendToServer(Ii(t));
        }
        setTerminalColumns(t) {
            this.terminalColumns = t, null != this.textProgressBar && this.textProgressBar.setTerminalColumns(t);
        }
        isTransferringFiles() {
            return null != this.trzszTransfer;
        }
        stopTransferringFiles() {
            this.isTransferringFiles() && this.trzszTransfer.stopTransferring();
        }
        uploadFiles(t) {
            return e(this, void 0, void 0, function*() {
                if (this.uploadFilesList || this.isTransferringFiles()) throw new Error("The previous upload has not been completed yet");
                if (t instanceof DataTransferItemList || t instanceof FileList) this.uploadFilesList = yield function(t) {
                    return e(this, void 0, void 0, function*() {
                        const e = [], i = [];
                        if (t instanceof FileList) for (const e of t)i.push({
                            isFile: !0,
                            isDirectory: !1,
                            name: e.name,
                            fullPath: "/" + e.name,
                            file: (t)=>t(e)
                        });
                        else for (const e of t){
                            const t = e.webkitGetAsEntry();
                            t && i.push(t);
                        }
                        for(let t = 0; t < i.length; t++){
                            const n = i[t];
                            n && (yield cn(t, n, e, [
                                n.name
                            ]));
                        }
                        return e;
                    });
                }(t);
                else {
                    if (!function(t, e) {
                        if (!Array.isArray(t)) return !1;
                        for (const i of t)if (typeof i !== e) return !1;
                        return !0;
                    }(t, "string") || Fi) throw new Error("The upload items type is not supported");
                    this.uploadFilesList = yield ji(t, !0);
                }
                if (!this.uploadFilesList || !this.uploadFilesList.length) throw this.uploadFilesList = null, new Error("No files to upload");
                let i = !1;
                for (const t of this.uploadFilesList)if (t.isDir() || t.getRelPath().length > 1) {
                    i = !0;
                    break;
                }
                return this.uploadInterrupting = !0, this.sendToServer("\x03"), yield new Promise((t)=>setTimeout(t, 200)), this.uploadInterrupting = !1, this.uploadSkipTrzCommand = !0, this.sendToServer(i ? "trz -d\r" : "trz\r"), setTimeout(()=>{
                    this.uploadFilesList && (this.uploadFilesList = null, this.uploadFilesResolve = null, this.uploadFilesReject && (this.uploadFilesReject("Upload does not start"), this.uploadFilesReject = null));
                }, this.dragInitTimeout), new Promise((t, e)=>{
                    this.uploadFilesResolve = t, this.uploadFilesReject = e;
                });
            });
        }
        uniqueIdExists(t) {
            if (t.length < 8) return !1;
            if (!this.isWindowsShell && 14 == t.length && t.endsWith("00")) return !1;
            if (this.uniqueIdMaps.has(t)) return !0;
            if (this.uniqueIdMaps.size >= 100) {
                const t = new Map;
                for (const [e, i] of this.uniqueIdMaps)i >= 50 && t.set(e, i - 50);
                this.uniqueIdMaps = t;
            }
            return this.uniqueIdMaps.set(t, this.uniqueIdMaps.size), !1;
        }
        detectAndHandleTrzsz(t) {
            return e(this, void 0, void 0, function*() {
                const i = yield function(t) {
                    return e(this, void 0, void 0, function*() {
                        if ("string" == typeof t) {
                            const e = t.lastIndexOf(_n);
                            return e < 0 ? null : t.substring(e);
                        }
                        let e;
                        if (t instanceof ArrayBuffer) e = new Uint8Array(t);
                        else if (t instanceof Uint8Array) e = t;
                        else {
                            if (!(t instanceof Blob)) return null;
                            e = new Uint8Array((yield t.arrayBuffer()));
                        }
                        if (e.length < 26) return null;
                        let i = -1, n = -1;
                        for(;;){
                            if (i = e.indexOf(58, i + 1), i < 0 || e.length - i < 26) return n >= 0 ? Ei(e.subarray(n)) : null;
                            const t = new Float64Array(e.buffer.slice(e.byteOffset + i, e.byteOffset + i + 16));
                            t[0] == wn[0] && t[1] == wn[1] && (n = i, i += 25);
                        }
                    });
                }(t);
                if (!i) return;
                const n = i.match(pn);
                if (!n) return;
                const r = n.length > 3 ? n[3] : "";
                if (this.uniqueIdExists(r)) return;
                const s = n[1], a = n[2];
                let o = !1;
                (":1" == r || 14 == r.length && r.endsWith("10")) && (o = !0);
                try {
                    this.trzszTransfer = new hn(this.sendToServer, this.isWindowsShell), "S" === s ? yield this.handleTrzszDownloadFiles(a, o) : "R" === s ? yield this.handleTrzszUploadFiles(a, !1, o) : "D" === s && (yield this.handleTrzszUploadFiles(a, !0, o)), this.uploadFilesResolve && this.uploadFilesResolve();
                } catch (t) {
                    yield this.trzszTransfer.clientError(t), this.uploadFilesReject && this.uploadFilesReject(t);
                } finally{
                    this.uploadFilesResolve = null, this.uploadFilesReject = null, this.trzszTransfer.cleanup(), this.textProgressBar && this.textProgressBar.showCursor(), this.textProgressBar = null, this.trzszTransfer = null;
                }
            });
        }
        createProgressBar(t, e) {
            !0 !== t ? (this.textProgressBar = new fn(this.writeToTerminal, this.terminalColumns, e), this.textProgressBar.hideCursor()) : this.textProgressBar = null;
        }
        handleTrzszDownloadFiles(t, i) {
            return e(this, void 0, void 0, function*() {
                let t, n, r;
                if (Fi) {
                    const s = yield function() {
                        return e(this, void 0, void 0, function*() {
                            if ("function" != typeof window.showDirectoryPicker) throw Yi();
                            try {
                                return yield window.showDirectoryPicker({
                                    id: "trzsz_download",
                                    startIn: "downloads",
                                    mode: "readwrite"
                                });
                            } catch (t) {
                                if ("AbortError" === t.name) return;
                                throw t;
                            }
                        });
                    }();
                    if (!s) return void (yield this.trzszTransfer.sendAction(!1, i));
                    t = s.name, n = {
                        handle: s,
                        maps: new Map
                    }, r = rn;
                } else {
                    if (t = yield this.chooseSaveDirectory(), !t) return void (yield this.trzszTransfer.sendAction(!1, i));
                    yield function(t) {
                        return e(this, void 0, void 0, function*() {
                            if (!t) return !1;
                            if (!(yield Pi.accessAsync(t))) throw new Ri(`No such directory: ${t}`);
                            if (!(yield Pi.statAsync(t)).isDirectory()) throw new Ri(`Not a directory: ${t}`);
                            if (!(yield Pi.accessAsync(t, Pi.constants.W_OK))) throw new Ri(`No permission to write: ${t}`);
                            return !0;
                        });
                    }(t), n = {
                        path: t,
                        maps: new Map
                    }, r = Ji;
                }
                yield this.trzszTransfer.sendAction(!0, i);
                const s = yield this.trzszTransfer.recvConfig();
                this.createProgressBar(s.quiet, s.tmux_pane_width);
                const a = yield this.trzszTransfer.recvFiles(n, r, this.textProgressBar);
                yield this.trzszTransfer.clientExit(Ni(a, t));
            });
        }
        handleTrzszUploadFiles(t, i, n) {
            return e(this, void 0, void 0, function*() {
                let t;
                if (this.uploadFilesList) t = this.uploadFilesList, this.uploadFilesList = null;
                else if (Fi) t = i ? yield Qi() : yield function() {
                    return e(this, void 0, void 0, function*() {
                        if ("function" != typeof window.showOpenFilePicker) throw Yi();
                        let t;
                        try {
                            t = yield window.showOpenFilePicker({
                                id: "trzsz_upload",
                                startIn: "documents",
                                multiple: !0
                            });
                        } catch (t) {
                            if ("AbortError" === t.name) return;
                            throw t;
                        }
                        if (!t || !t.length) return;
                        const e = [];
                        for (const [i, n] of t.entries()){
                            const t = yield n.getFile();
                            e.push(new Gi(i, [
                                t.name
                            ], t, !1));
                        }
                        return e;
                    });
                }();
                else {
                    const e = yield this.chooseSendFiles(i);
                    t = yield ji(e, i);
                }
                if (!t || !t.length) return void (yield this.trzszTransfer.sendAction(!1, n));
                yield this.trzszTransfer.sendAction(!0, n);
                const r = yield this.trzszTransfer.recvConfig();
                !0 === r.overwrite && function(t) {
                    const e = new Set;
                    for (const i of t){
                        const t = i.getRelPath().join("/");
                        if (e.has(t)) throw new Ri(`Duplicate name: ${t}`);
                        e.add(t);
                    }
                }(t), this.createProgressBar(r.quiet, r.tmux_pane_width);
                const s = yield this.trzszTransfer.sendFiles(t, this.textProgressBar);
                yield this.trzszTransfer.clientExit(Ni(s, ""));
            });
        }
    }
    t.TrzszAddon = class {
        constructor(t, e){
            this.disposables = [], this.trzsz = null, this.socket = t, this.options = e || {}, this.socket.binaryType = "arraybuffer";
        }
        activate(t) {
            this.trzsz = new mn({
                writeToTerminal: this.options.writeToTerminal || ((e)=>{
                    t.write("string" == typeof e ? e : new Uint8Array(e));
                }),
                sendToServer: this.options.sendToServer || ((t)=>{
                    1 === this.socket.readyState && this.socket.send(t);
                }),
                chooseSendFiles: this.options.chooseSendFiles,
                chooseSaveDirectory: this.options.chooseSaveDirectory,
                terminalColumns: t.cols,
                isWindowsShell: this.options.isWindowsShell,
                dragInitTimeout: this.options.dragInitTimeout
            }), this.disposables.push(this.addSocketListener(this.socket, "message", (t)=>this.trzsz.processServerOutput(t.data))), this.disposables.push(t.onData((t)=>this.trzsz.processTerminalInput(t))), this.disposables.push(t.onBinary((t)=>this.trzsz.processBinaryInput(t))), this.disposables.push(t.onResize((t)=>this.trzsz.setTerminalColumns(t.cols))), this.disposables.push(this.addSocketListener(this.socket, "close", ()=>this.dispose())), this.disposables.push(this.addSocketListener(this.socket, "error", ()=>this.dispose()));
        }
        dispose() {
            for (const t of this.disposables)t.dispose();
            this.trzsz = null;
        }
        uploadFiles(t) {
            return e(this, void 0, void 0, function*() {
                if (this.trzsz) return this.trzsz.uploadFiles(t);
                throw new Error("Addon has not been activated");
            });
        }
        addSocketListener(t, e, i) {
            return t.addEventListener(e, i), {
                dispose: ()=>{
                    i && t.removeEventListener(e, i);
                }
            };
        }
    }, t.TrzszFilter = mn;
});

},{"7dcaf95826f938bd":"d5jf4","30c65e3a353a620d":"fCgem","44ea3c71a976e77a":"jhUEF","5f05814a9817363f":"cxohQ","94f4f1d9b57909b2":"jhUEF"}]},["eOy60","5YAoe"], "5YAoe", "parcelRequiref158")

//# sourceMappingURL=index.74598e8c.js.map
