!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.WebLinksAddon = t() : e.WebLinksAddon = t();
}(self, ()=>(()=>{
        "use strict";
        var e = {
            6: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.LinkComputer = t.WebLinkProvider = void 0, t.WebLinkProvider = class {
                    constructor(e, t, n, i = {}){
                        this._terminal = e, this._regex = t, this._handler = n, this._options = i;
                    }
                    provideLinks(e, t) {
                        const i = n.computeLink(e, this._regex, this._terminal, this._handler);
                        t(this._addCallbacks(i));
                    }
                    _addCallbacks(e) {
                        return e.map((e)=>(e.leave = this._options.leave, e.hover = (t, n)=>{
                                if (this._options.hover) {
                                    const { range: i } = e;
                                    this._options.hover(t, n, i);
                                }
                            }, e));
                    }
                };
                class n {
                    static computeLink(e, t, i, r) {
                        const o = new RegExp(t.source, (t.flags || "") + "g"), [s, a] = n._getWindowedLineStrings(e - 1, i), c = s.join("");
                        let d;
                        const l = [];
                        for(; d = o.exec(c);){
                            const e = d[0];
                            try {
                                const t = new URL(e), n = decodeURI(t.toString());
                                if (e !== n && e + "/" !== n) continue;
                            } catch (e) {
                                continue;
                            }
                            const [t, o] = n._mapStrIdx(i, a, 0, d.index), [s, c] = n._mapStrIdx(i, t, o, e.length);
                            if (-1 === t || -1 === o || -1 === s || -1 === c) continue;
                            const p = {
                                start: {
                                    x: o + 1,
                                    y: t + 1
                                },
                                end: {
                                    x: c,
                                    y: s + 1
                                }
                            };
                            l.push({
                                range: p,
                                text: e,
                                activate: r
                            });
                        }
                        return l;
                    }
                    static _getWindowedLineStrings(e, t) {
                        let n, i = e, r = e, o = 0, s = "";
                        const a = [];
                        if (n = t.buffer.active.getLine(e)) {
                            const e = n.translateToString(!0);
                            if (n.isWrapped && " " !== e[0]) {
                                for(o = 0; (n = t.buffer.active.getLine(--i)) && o < 2048 && (s = n.translateToString(!0), o += s.length, a.push(s), n.isWrapped && -1 === s.indexOf(" ")););
                                a.reverse();
                            }
                            for(a.push(e), o = 0; (n = t.buffer.active.getLine(++r)) && n.isWrapped && o < 2048 && (s = n.translateToString(!0), o += s.length, a.push(s), -1 === s.indexOf(" ")););
                        }
                        return [
                            a,
                            i
                        ];
                    }
                    static _mapStrIdx(e, t, n, i) {
                        const r = e.buffer.active, o = r.getNullCell();
                        let s = n;
                        for(; i;){
                            const e = r.getLine(t);
                            if (!e) return [
                                -1,
                                -1
                            ];
                            for(let n = s; n < e.length; ++n){
                                e.getCell(n, o);
                                const s = o.getChars();
                                if (o.getWidth() && (i -= s.length || 1, n === e.length - 1 && "" === s)) {
                                    const e = r.getLine(t + 1);
                                    e && e.isWrapped && (e.getCell(0, o), 2 === o.getWidth() && (i += 1));
                                }
                                if (i < 0) return [
                                    t,
                                    n
                                ];
                            }
                            t++, s = 0;
                        }
                        return [
                            t,
                            s
                        ];
                    }
                }
                t.LinkComputer = n;
            }
        }, t = {};
        function n(i) {
            var r = t[i];
            if (void 0 !== r) return r.exports;
            var o = t[i] = {
                exports: {}
            };
            return e[i](o, o.exports, n), o.exports;
        }
        var i = {};
        return (()=>{
            var e = i;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.WebLinksAddon = void 0;
            const t = n(6), r = /https?:[/]{2}[^\s"'!*(){}|\\\^<>`]*[^\s"':,.!?{}|\\\^~\[\]`()<>]/;
            function o(e, t) {
                const n = window.open();
                if (n) {
                    try {
                        n.opener = null;
                    } catch (e) {}
                    n.location.href = t;
                } else console.warn("Opening link blocked as opener could not be cleared");
            }
            e.WebLinksAddon = class {
                constructor(e = o, t = {}){
                    this._handler = e, this._options = t;
                }
                activate(e) {
                    this._terminal = e;
                    const n = this._options, i = n.urlRegex || r;
                    this._linkProvider = this._terminal.registerLinkProvider(new t.WebLinkProvider(this._terminal, i, this._handler, n));
                }
                dispose() {
                    var e;
                    null === (e = this._linkProvider) || void 0 === e || e.dispose();
                }
            };
        })(), i;
    })());

//# sourceMappingURL=index.2803947f.js.map
