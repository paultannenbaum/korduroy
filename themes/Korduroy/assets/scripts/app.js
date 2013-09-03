(function(e, t) {
    var n, r, i = typeof t, o = e.document, a = e.location, s = e.jQuery, u = e.$, l = {}, c = [], p = "1.9.1", f = c.concat, d = c.push, h = c.slice, g = c.indexOf, m = l.toString, y = l.hasOwnProperty, v = p.trim, b = function(e, t) {
        return new b.fn.init(e, t, r);
    }, x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, w = /\S+/g, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, k = /^[\],:{}\s]*$/, E = /(?:^|:|,)(?:\s*\[)+/g, S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, j = /^-ms-/, D = /-([\da-z])/gi, L = function(e, t) {
        return t.toUpperCase();
    }, H = function(e) {
        (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (q(), 
        b.ready());
    }, q = function() {
        o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)) : (o.detachEvent("onreadystatechange", H), 
        e.detachEvent("onload", H));
    };
    b.fn = b.prototype = {
        jquery: p,
        constructor: b,
        init: function(e, n, r) {
            var i, a;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [ null, e, null ] : N.exec(e), 
                !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)), 
                    C.test(i[1]) && b.isPlainObject(n)) for (i in n) b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this;
                }
                if (a = o.getElementById(i[2]), a && a.parentNode) {
                    if (a.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = a;
                }
                return this.context = o, this.selector = e, this;
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, 
            this.context = e.context), b.makeArray(e, this));
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length;
        },
        toArray: function() {
            return h.call(this);
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
        },
        pushStack: function(e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t;
        },
        each: function(e, t) {
            return b.each(this, e, t);
        },
        ready: function(e) {
            return b.ready.promise().done(e), this;
        },
        slice: function() {
            return this.pushStack(h.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [ this[n] ] : []);
        },
        map: function(e) {
            return this.pushStack(b.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: d,
        sort: [].sort,
        splice: [].splice
    }, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {}, u = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || b.isFunction(s) || (s = {}), 
        l === u && (s = this, --u); l > u; u++) if (null != (o = arguments[u])) for (i in o) e = s[i], 
        r = o[i], s !== r && (c && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, 
        a = e && b.isArray(e) ? e : []) : a = e && b.isPlainObject(e) ? e : {}, s[i] = b.extend(c, a, r)) : r !== t && (s[i] = r));
        return s;
    }, b.extend({
        noConflict: function(t) {
            return e.$ === b && (e.$ = u), t && e.jQuery === b && (e.jQuery = s), b;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? b.readyWait++ : b.ready(!0);
        },
        ready: function(e) {
            if (e === !0 ? !--b.readyWait : !b.isReady) {
                if (!o.body) return setTimeout(b.ready);
                b.isReady = !0, e !== !0 && --b.readyWait > 0 || (n.resolveWith(o, [ b ]), b.fn.trigger && b(o).trigger("ready").off("ready"));
            }
        },
        isFunction: function(e) {
            return "function" === b.type(e);
        },
        isArray: Array.isArray || function(e) {
            return "array" === b.type(e);
        },
        isWindow: function(e) {
            return null != e && e == e.window;
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e;
        },
        isPlainObject: function(e) {
            if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) return !1;
            try {
                if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (n) {
                return !1;
            }
            var r;
            for (r in e) ;
            return r === t || y.call(e, r);
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        error: function(e) {
            throw Error(e);
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || o;
            var r = C.exec(e), i = !n && [];
            return r ? [ t.createElement(r[1]) ] : (r = b.buildFragment([ e ], t, i), i && b(i).remove(), 
            b.merge([], r.childNodes));
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = b.trim(n), 
            n && k.test(n.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n), 
            t);
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser(), r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), 
                r.async = "false", r.loadXML(n));
            } catch (o) {
                r = t;
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n), 
            r;
        },
        noop: function() {},
        globalEval: function(t) {
            t && b.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t);
            })(t);
        },
        camelCase: function(e) {
            return e.replace(j, "ms-").replace(D, L);
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, t, n) {
            var r, i = 0, o = e.length, a = M(e);
            if (n) {
                if (a) {
                    for (;o > i; i++) if (r = t.apply(e[i], n), r === !1) break;
                } else for (i in e) if (r = t.apply(e[i], n), r === !1) break;
            } else if (a) {
                for (;o > i; i++) if (r = t.call(e[i], i, e[i]), r === !1) break;
            } else for (i in e) if (r = t.call(e[i], i, e[i]), r === !1) break;
            return e;
        },
        trim: v && !v.call("﻿ ") ? function(e) {
            return null == e ? "" : v.call(e);
        } : function(e) {
            return null == e ? "" : (e + "").replace(T, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [ e ] : e) : d.call(n, e)), 
            n;
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (g) return g.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n;
            }
            return -1;
        },
        merge: function(e, n) {
            var r = n.length, i = e.length, o = 0;
            if ("number" == typeof r) for (;r > o; o++) e[i++] = n[o]; else while (n[o] !== t) e[i++] = n[o++];
            return e.length = i, e;
        },
        grep: function(e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i;
        },
        map: function(e, t, n) {
            var r, i = 0, o = e.length, a = M(e), s = [];
            if (a) for (;o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r); else for (i in e) r = t(e[i], i, n), 
            null != r && (s[s.length] = r);
            return f.apply([], s);
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), b.isFunction(e) ? (r = h.call(arguments, 2), 
            i = function() {
                return e.apply(n || this, r.concat(h.call(arguments)));
            }, i.guid = e.guid = e.guid || b.guid++, i) : t;
        },
        access: function(e, n, r, i, o, a, s) {
            var u = 0, l = e.length, c = null == r;
            if ("object" === b.type(r)) {
                o = !0;
                for (u in r) b.access(e, n, u, r[u], !0, a, s);
            } else if (i !== t && (o = !0, b.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), 
            n = null) : (c = n, n = function(e, t, n) {
                return c.call(b(e), n);
            })), n)) for (;l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
            return o ? e : c ? n.call(e) : l ? n(e[0], r) : a;
        },
        now: function() {
            return new Date().getTime();
        }
    }), b.ready.promise = function(t) {
        if (!n) if (n = b.Deferred(), "complete" === o.readyState) setTimeout(b.ready); else if (o.addEventListener) o.addEventListener("DOMContentLoaded", H, !1), 
        e.addEventListener("load", H, !1); else {
            o.attachEvent("onreadystatechange", H), e.attachEvent("onload", H);
            var r = !1;
            try {
                r = null == e.frameElement && o.documentElement;
            } catch (i) {}
            r && r.doScroll && function a() {
                if (!b.isReady) {
                    try {
                        r.doScroll("left");
                    } catch (e) {
                        return setTimeout(a, 50);
                    }
                    q(), b.ready();
                }
            }();
        }
        return n.promise(t);
    }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
    });
    function M(e) {
        var t = e.length, n = b.type(e);
        return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }
    r = b(o);
    var _ = {};
    function F(e) {
        var t = _[e] = {};
        return b.each(e.match(w) || [], function(e, n) {
            t[n] = !0;
        }), t;
    }
    b.Callbacks = function(e) {
        e = "string" == typeof e ? _[e] || F(e) : b.extend({}, e);
        var n, r, i, o, a, s, u = [], l = !e.once && [], c = function(t) {
            for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = u.length, n = !0; u && o > a; a++) if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                r = !1;
                break;
            }
            n = !1, u && (l ? l.length && c(l.shift()) : r ? u = [] : p.disable());
        }, p = {
            add: function() {
                if (u) {
                    var t = u.length;
                    (function i(t) {
                        b.each(t, function(t, n) {
                            var r = b.type(n);
                            "function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n);
                        });
                    })(arguments), n ? o = u.length : r && (s = t, c(r));
                }
                return this;
            },
            remove: function() {
                return u && b.each(arguments, function(e, t) {
                    var r;
                    while ((r = b.inArray(t, u, r)) > -1) u.splice(r, 1), n && (o >= r && o--, a >= r && a--);
                }), this;
            },
            has: function(e) {
                return e ? b.inArray(e, u) > -1 : !(!u || !u.length);
            },
            empty: function() {
                return u = [], this;
            },
            disable: function() {
                return u = l = r = t, this;
            },
            disabled: function() {
                return !u;
            },
            lock: function() {
                return l = t, r || p.disable(), this;
            },
            locked: function() {
                return !l;
            },
            fireWith: function(e, t) {
                return t = t || [], t = [ e, t.slice ? t.slice() : t ], !u || i && !l || (n ? l.push(t) : c(t)), 
                this;
            },
            fire: function() {
                return p.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!i;
            }
        };
        return p;
    }, b.extend({
        Deferred: function(e) {
            var t = [ [ "resolve", "done", b.Callbacks("once memory"), "resolved" ], [ "reject", "fail", b.Callbacks("once memory"), "rejected" ], [ "notify", "progress", b.Callbacks("memory") ] ], n = "pending", r = {
                state: function() {
                    return n;
                },
                always: function() {
                    return i.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var e = arguments;
                    return b.Deferred(function(n) {
                        b.each(t, function(t, o) {
                            var a = o[0], s = b.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [ e ] : arguments);
                            });
                        }), e = null;
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? b.extend(e, r) : r;
                }
            }, i = {};
            return r.pipe = r.then, b.each(t, function(e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s;
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this;
                }, i[o[0] + "With"] = a.fireWith;
            }), r.promise(i), e && e.call(i, i), i;
        },
        when: function(e) {
            var t = 0, n = h.call(arguments), r = n.length, i = 1 !== r || e && b.isFunction(e.promise) ? r : 0, o = 1 === i ? e : b.Deferred(), a = function(e, t, n) {
                return function(r) {
                    t[e] = this, n[e] = arguments.length > 1 ? h.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
                };
            }, s, u, l;
            if (r > 1) for (s = Array(r), u = Array(r), l = Array(r); r > t; t++) n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i;
            return i || o.resolveWith(l, n), o.promise();
        }
    }), b.support = function() {
        var t, n, r, a, s, u, l, c, p, f, d = o.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
        s = o.createElement("select"), l = s.appendChild(o.createElement("option")), a = d.getElementsByTagName("input")[0], 
        r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            getSetAttribute: "t" !== d.className,
            leadingWhitespace: 3 === d.firstChild.nodeType,
            tbody: !d.getElementsByTagName("tbody").length,
            htmlSerialize: !!d.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: !!a.value,
            optSelected: l.selected,
            enctype: !!o.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === o.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, s.disabled = !0, 
        t.optDisabled = !l.disabled;
        try {
            delete d.test;
        } catch (h) {
            t.deleteExpando = !1;
        }
        a = o.createElement("input"), a.setAttribute("value", ""), t.input = "" === a.getAttribute("value"), 
        a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, 
        a.setAttribute("checked", "t"), a.setAttribute("name", "t"), u = o.createDocumentFragment(), 
        u.appendChild(a), t.appendChecked = a.checked, t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1;
        }), d.cloneNode(!0).click());
        for (f in {
            submit: !0,
            change: !0,
            focusin: !0
        }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", 
        t.clearCloneStyle = "content-box" === d.style.backgroundClip, b(function() {
            var n, r, a, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", u = o.getElementsByTagName("body")[0];
            u && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
            u.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
            a = d.getElementsByTagName("td"), a[0].style.cssText = "padding:0;margin:0;border:0;display:none", 
            p = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", 
            t.reliableHiddenOffsets = p && 0 === a[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", 
            t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop, 
            e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, 
            t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, r = d.appendChild(o.createElement("div")), r.style.cssText = d.style.cssText = s, 
            r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), 
            typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", 
            t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", 
            d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (u.style.zoom = 1)), 
            u.removeChild(n), n = d = a = r = null);
        }), n = s = u = l = r = a = null, t;
    }();
    var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, B = /([A-Z])/g;
    function P(e, n, r, i) {
        if (b.acceptData(e)) {
            var o, a, s = b.expando, u = "string" == typeof n, l = e.nodeType, p = l ? b.cache : e, f = l ? e[s] : e[s] && s;
            if (f && p[f] && (i || p[f].data) || !u || r !== t) return f || (l ? e[s] = f = c.pop() || b.guid++ : f = s), 
            p[f] || (p[f] = {}, l || (p[f].toJSON = b.noop)), ("object" == typeof n || "function" == typeof n) && (i ? p[f] = b.extend(p[f], n) : p[f].data = b.extend(p[f].data, n)), 
            o = p[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[b.camelCase(n)] = r), 
            u ? (a = o[n], null == a && (a = o[b.camelCase(n)])) : a = o, a;
        }
    }
    function R(e, t, n) {
        if (b.acceptData(e)) {
            var r, i, o, a = e.nodeType, s = a ? b.cache : e, u = a ? e[b.expando] : b.expando;
            if (s[u]) {
                if (t && (o = n ? s[u] : s[u].data)) {
                    b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in o ? t = [ t ] : (t = b.camelCase(t), 
                    t = t in o ? [ t ] : t.split(" "));
                    for (r = 0, i = t.length; i > r; r++) delete o[t[r]];
                    if (!(n ? $ : b.isEmptyObject)(o)) return;
                }
                (n || (delete s[u].data, $(s[u]))) && (a ? b.cleanData([ e ], !0) : b.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null);
            }
        }
    }
    b.extend({
        cache: {},
        expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !!e && !$(e);
        },
        data: function(e, t, n) {
            return P(e, t, n);
        },
        removeData: function(e, t) {
            return R(e, t);
        },
        _data: function(e, t, n) {
            return P(e, t, n, !0);
        },
        _removeData: function(e, t) {
            return R(e, t, !0);
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t;
        }
    }), b.fn.extend({
        data: function(e, n) {
            var r, i, o = this[0], a = 0, s = null;
            if (e === t) {
                if (this.length && (s = b.data(o), 1 === o.nodeType && !b._data(o, "parsedAttrs"))) {
                    for (r = o.attributes; r.length > a; a++) i = r[a].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), 
                    W(o, i, s[i]));
                    b._data(o, "parsedAttrs", !0);
                }
                return s;
            }
            return "object" == typeof e ? this.each(function() {
                b.data(this, e);
            }) : b.access(this, function(n) {
                return n === t ? o ? W(o, e, b.data(o, e)) : null : (this.each(function() {
                    b.data(this, e, n);
                }), t);
            }, null, n, arguments.length > 1, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                b.removeData(this, e);
            });
        }
    });
    function W(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(B, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : O.test(r) ? b.parseJSON(r) : r;
                } catch (o) {}
                b.data(e, n, r);
            } else r = t;
        }
        return r;
    }
    function $(e) {
        var t;
        for (t in e) if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0;
    }
    b.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = b._data(e, n), r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)), 
            i || []) : t;
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = b.queue(e, t), r = n.length, i = n.shift(), o = b._queueHooks(e, t), a = function() {
                b.dequeue(e, t);
            };
            "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), 
            delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return b._data(e, n) || b._data(e, n, {
                empty: b.Callbacks("once memory").add(function() {
                    b._removeData(e, t + "queue"), b._removeData(e, n);
                })
            });
        }
    }), b.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = b.queue(this, e, n);
                b._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                b.dequeue(this, e);
            });
        },
        delay: function(e, t) {
            return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r);
                };
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, n) {
            var r, i = 1, o = b.Deferred(), a = this, s = this.length, u = function() {
                --i || o.resolveWith(a, [ a ]);
            };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (s--) r = b._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
            return u(), o.promise(n);
        }
    });
    var I, z, X = /[\t\r\n]/g, U = /\r/g, V = /^(?:input|select|textarea|button|object)$/i, Y = /^(?:a|area)$/i, J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, G = /^(?:checked|selected)$/i, Q = b.support.getSetAttribute, K = b.support.input;
    b.fn.extend({
        attr: function(e, t) {
            return b.access(this, b.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                b.removeAttr(this, e);
            });
        },
        prop: function(e, t) {
            return b.access(this, b.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return e = b.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e];
                } catch (n) {}
            });
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, u = "string" == typeof e && e;
            if (b.isFunction(e)) return this.each(function(t) {
                b(this).addClass(e.call(this, t, this.className));
            });
            if (u) for (t = (e || "").match(w) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) {
                o = 0;
                while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                n.className = b.trim(r);
            }
            return this;
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, u = 0 === arguments.length || "string" == typeof e && e;
            if (b.isFunction(e)) return this.each(function(t) {
                b(this).removeClass(e.call(this, t, this.className));
            });
            if (u) for (t = (e || "").match(w) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) {
                o = 0;
                while (i = t[o++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                n.className = e ? b.trim(r) : "";
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = typeof e, r = "boolean" == typeof t;
            return b.isFunction(e) ? this.each(function(n) {
                b(this).toggleClass(e.call(this, n, this.className, t), t);
            }) : this.each(function() {
                if ("string" === n) {
                    var o, a = 0, s = b(this), u = t, l = e.match(w) || [];
                    while (o = l[a++]) u = r ? u : !s.hasClass(o), s[u ? "addClass" : "removeClass"](o);
                } else (n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className), 
                this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "");
            });
        },
        hasClass: function(e) {
            var t = " " + e + " ", n = 0, r = this.length;
            for (;r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return !0;
            return !1;
        },
        val: function(e) {
            var n, r, i, o = this[0];
            {
                if (arguments.length) return i = b.isFunction(e), this.each(function(n) {
                    var o, a = b(this);
                    1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : b.isArray(o) && (o = b.map(o, function(e) {
                        return null == e ? "" : e + "";
                    })), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o));
                });
                if (o) return r = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, 
                "string" == typeof n ? n.replace(U, "") : null == n ? "" : n);
            }
        }
    }), b.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text;
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0;
                    for (;s > u; u++) if (n = r[u], !(!n.selected && u !== i || (b.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) {
                        if (t = b(n).val(), o) return t;
                        a.push(t);
                    }
                    return a;
                },
                set: function(e, t) {
                    var n = b.makeArray(t);
                    return b(e).find("option").each(function() {
                        this.selected = b.inArray(b(this).val(), n) >= 0;
                    }), n.length || (e.selectedIndex = -1), n;
                }
            }
        },
        attr: function(e, n, r) {
            var o, a, s, u = e.nodeType;
            if (e && 3 !== u && 8 !== u && 2 !== u) return typeof e.getAttribute === i ? b.prop(e, n, r) : (a = 1 !== u || !b.isXMLDoc(e), 
            a && (n = n.toLowerCase(), o = b.attrHooks[n] || (J.test(n) ? z : I)), r === t ? o && a && "get" in o && null !== (s = o.get(e, n)) ? s : (typeof e.getAttribute !== i && (s = e.getAttribute(n)), 
            null == s ? t : s) : null !== r ? o && a && "set" in o && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), 
            r) : (b.removeAttr(e, n), t));
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(w);
            if (o && 1 === e.nodeType) while (n = o[i++]) r = b.propFix[n] || n, J.test(n) ? !Q && G.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), 
            e.removeAttribute(Q ? n : r);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !b.isXMLDoc(e), a && (n = b.propFix[n] || n, 
            o = b.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t;
                }
            }
        }
    }), z = {
        get: function(e, n) {
            var r = b.prop(e, n), i = "boolean" == typeof r && e.getAttribute(n), o = "boolean" == typeof r ? K && Q ? null != i : G.test(n) ? e[b.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
            return o && o.value !== !1 ? n.toLowerCase() : t;
        },
        set: function(e, t, n) {
            return t === !1 ? b.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, 
            n;
        }
    }, K && Q || (b.attrHooks.value = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t;
        },
        set: function(e, n, r) {
            return b.nodeName(e, "input") ? (e.defaultValue = n, t) : I && I.set(e, n, r);
        }
    }), Q || (I = b.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t;
        },
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", 
            "value" === r || n === e.getAttribute(r) ? n : t;
        }
    }, b.attrHooks.contenteditable = {
        get: I.get,
        set: function(e, t, n) {
            I.set(e, "" === t ? !1 : t, n);
        }
    }, b.each([ "width", "height" ], function(e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t;
            }
        });
    })), b.support.hrefNormalized || (b.each([ "href", "src", "width", "height" ], function(e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t : r;
            }
        });
    }), b.each([ "href", "src" ], function(e, t) {
        b.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4);
            }
        };
    })), b.support.style || (b.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t;
        },
        set: function(e, t) {
            return e.style.cssText = t + "";
        }
    }), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
        }
    })), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each([ "radio", "checkbox" ], function() {
        b.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value;
            }
        };
    }), b.each([ "radio", "checkbox" ], function() {
        b.valHooks[this] = b.extend(b.valHooks[this], {
            set: function(e, n) {
                return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t;
            }
        });
    });
    var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/;
    function it() {
        return !0;
    }
    function ot() {
        return !1;
    }
    b.event = {
        global: {},
        add: function(e, n, r, o, a) {
            var s, u, l, c, p, f, d, h, g, m, y, v = b._data(e);
            if (v) {
                r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = b.guid++), 
                (u = v.events) || (u = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
                    return typeof b === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(f.elem, arguments);
                }, f.elem = e), n = (n || "").match(w) || [ "" ], l = n.length;
                while (l--) s = rt.exec(n[l]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), 
                p = b.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = b.event.special[g] || {}, 
                d = b.extend({
                    type: g,
                    origType: y,
                    data: o,
                    handler: r,
                    guid: r.guid,
                    selector: a,
                    needsContext: a && b.expr.match.needsContext.test(a),
                    namespace: m.join(".")
                }, c), (h = u[g]) || (h = u[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), 
                p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), 
                b.event.global[g] = !0;
                e = null;
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, p, f, d, h, g, m = b.hasData(e) && b._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(w) || [ "" ], l = t.length;
                while (l--) if (s = rt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), 
                d) {
                    p = b.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], 
                    s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length;
                    while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), 
                    a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                    u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || b.removeEvent(e, d, m.handle), 
                    delete c[d]);
                } else for (d in c) b.event.remove(e, d + t[l], n, r, !0);
                b.isEmptyObject(c) && (delete m.handle, b._removeData(e, "events"));
            }
        },
        trigger: function(n, r, i, a) {
            var s, u, l, c, p, f, d, h = [ i || o ], g = y.call(n, "type") ? n.type : n, m = y.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = f = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + b.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), 
            g = m.shift(), m.sort()), u = 0 > g.indexOf(":") && "on" + g, n = n[b.expando] ? n : new b.Event(g, "object" == typeof n && n), 
            n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            n.result = t, n.target || (n.target = i), r = null == r ? [ n ] : b.makeArray(r, [ n ]), 
            p = b.event.special[g] || {}, a || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!a && !p.noBubble && !b.isWindow(i)) {
                    for (c = p.delegateType || g, nt.test(c + g) || (l = l.parentNode); l; l = l.parentNode) h.push(l), 
                    f = l;
                    f === (i.ownerDocument || o) && h.push(f.defaultView || f.parentWindow || e);
                }
                d = 0;
                while ((l = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, 
                s = (b._data(l, "events") || {})[n.type] && b._data(l, "handle"), s && s.apply(l, r), 
                s = u && l[u], s && b.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault();
                if (n.type = g, !(a || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && b.nodeName(i, "a") || !b.acceptData(i) || !u || !i[g] || b.isWindow(i))) {
                    f = i[u], f && (i[u] = null), b.event.triggered = g;
                    try {
                        i[g]();
                    } catch (v) {}
                    b.event.triggered = t, f && (i[u] = f);
                }
                return n.result;
            }
        },
        dispatch: function(e) {
            e = b.event.fix(e);
            var n, r, i, o, a, s = [], u = h.call(arguments), l = (b._data(this, "events") || {})[e.type] || [], c = b.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = b.event.handlers.call(this, e, l), n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem, a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, 
                    e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), 
                    r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [], u = n.delegateCount, l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type)) for (;l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                for (o = [], a = 0; u > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? b(r, this).index(l) >= 0 : b.find(r, this, null, [ l ]).length), 
                o[r] && o.push(i);
                o.length && s.push({
                    elem: l,
                    handlers: o
                });
            }
            return n.length > u && s.push({
                elem: this,
                handlers: n.slice(u)
            }), s;
        },
        fix: function(e) {
            if (e[b.expando]) return e;
            var t, n, r, i = e.type, a = e, s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), 
            r = s.props ? this.props.concat(s.props) : this.props, e = new b.Event(a), t = r.length;
            while (t--) n = r[t], e[n] = a[n];
            return e.target || (e.target = a.srcElement || o), 3 === e.target.nodeType && (e.target = e.target.parentNode), 
            e.metaKey = !!e.metaKey, s.filter ? s.filter(e, a) : e;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), 
                e;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, a, s = n.button, u = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o, 
                a = i.documentElement, r = i.body, e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), 
                e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)), 
                !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), 
                e;
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function() {
                    return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), 
                    !1) : t;
                }
            },
            focus: {
                trigger: function() {
                    if (this !== o.activeElement && this.focus) try {
                        return this.focus(), !1;
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === o.activeElement && this.blur ? (this.blur(), !1) : t;
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result);
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = b.extend(new b.Event(), n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
        }
    }, b.removeEvent = o.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n));
    }, b.Event = function(e, n) {
        return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, 
        this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, 
        n && b.extend(this, n), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0, 
        t) : new b.Event(e, n);
    }, b.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), 
            e.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it, this.stopPropagation();
        }
    }, b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        b.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !b.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), 
                e.type = t), n;
            }
        };
    }), b.support.submitBubbles || (b.event.special.submit = {
        setup: function() {
            return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target, r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
                r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0;
                }), b._data(r, "submitBubbles", !0));
            }), t);
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown: function() {
            return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"), t);
        }
    }), b.support.changeBubbles || (b.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
            }), b.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0);
            })), !1) : (b.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0);
                }), b._data(t, "changeBubbles", !0));
            }), t);
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t;
        },
        teardown: function() {
            return b.event.remove(this, "._change"), !Z.test(this.nodeName);
        }
    }), b.support.focusinBubbles || b.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0, r = function(e) {
            b.event.simulate(t, e.target, b.event.fix(e), !0);
        };
        b.event.special[t] = {
            setup: function() {
                0 === n++ && o.addEventListener(e, r, !0);
            },
            teardown: function() {
                0 === --n && o.removeEventListener(e, r, !0);
            }
        };
    }), b.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this;
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, 
            r = t) : (i = r, r = n, n = t)), i === !1) i = ot; else if (!i) return this;
            return 1 === o && (s = i, i = function(e) {
                return b().off(e), s.apply(this, arguments);
            }, i.guid = s.guid || (s.guid = b.guid++)), this.each(function() {
                b.event.add(this, e, i, r, n);
            });
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1);
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), 
            this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this;
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), 
            this.each(function() {
                b.event.remove(this, e, r, n);
            });
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        },
        trigger: function(e, t) {
            return this.each(function() {
                b.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? b.event.trigger(e, n, r, !0) : t;
        }
    }), function(e, t) {
        var n, r, i, o, a, s, u, l, c, p, f, d, h, g, m, y, v, x = "sizzle" + -new Date(), w = e.document, T = {}, N = 0, C = 0, k = it(), E = it(), S = it(), A = typeof t, j = 1 << 31, D = [], L = D.pop, H = D.push, q = D.slice, M = D.indexOf || function(e) {
            var t = 0, n = this.length;
            for (;n > t; t++) if (this[t] === e) return t;
            return -1;
        }, _ = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = F.replace("w", "w#"), B = "([*^$|!~]?=)", P = "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]", R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)", W = RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"), $ = RegExp("^" + _ + "*," + _ + "*"), I = RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"), z = RegExp(R), X = RegExp("^" + O + "$"), U = {
            ID: RegExp("^#(" + F + ")"),
            CLASS: RegExp("^\\.(" + F + ")"),
            NAME: RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
            TAG: RegExp("^(" + F.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + P),
            PSEUDO: RegExp("^" + R),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
            needsContext: RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
        }, V = /[\x20\t\r\n\f]*[+~]/, Y = /^[^{]+\{\s*\[native code/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, G = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, K = /'|\\/g, Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, tt = function(e, t) {
            var n = "0x" + t - 65536;
            return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n);
        };
        try {
            q.call(w.documentElement.childNodes, 0)[0].nodeType;
        } catch (nt) {
            q = function(e) {
                var t, n = [];
                while (t = this[e++]) n.push(t);
                return n;
            };
        }
        function rt(e) {
            return Y.test(e + "");
        }
        function it() {
            var e, t = [];
            return e = function(n, r) {
                return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r;
            };
        }
        function ot(e) {
            return e[x] = !0, e;
        }
        function at(e) {
            var t = p.createElement("div");
            try {
                return e(t);
            } catch (n) {
                return !1;
            } finally {
                t = null;
            }
        }
        function st(e, t, n, r) {
            var i, o, a, s, u, l, f, g, m, v;
            if ((t ? t.ownerDocument || t : w) !== p && c(t), t = t || p, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (!d && !r) {
                if (i = J.exec(e)) if (a = i[1]) {
                    if (9 === s) {
                        if (o = t.getElementById(a), !o || !o.parentNode) return n;
                        if (o.id === a) return n.push(o), n;
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && y(t, o) && o.id === a) return n.push(o), 
                    n;
                } else {
                    if (i[2]) return H.apply(n, q.call(t.getElementsByTagName(e), 0)), n;
                    if ((a = i[3]) && T.getByClassName && t.getElementsByClassName) return H.apply(n, q.call(t.getElementsByClassName(a), 0)), 
                    n;
                }
                if (T.qsa && !h.test(e)) {
                    if (f = !0, g = x, m = t, v = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        l = ft(e), (f = t.getAttribute("id")) ? g = f.replace(K, "\\$&") : t.setAttribute("id", g), 
                        g = "[id='" + g + "'] ", u = l.length;
                        while (u--) l[u] = g + dt(l[u]);
                        m = V.test(e) && t.parentNode || t, v = l.join(",");
                    }
                    if (v) try {
                        return H.apply(n, q.call(m.querySelectorAll(v), 0)), n;
                    } catch (b) {} finally {
                        f || t.removeAttribute("id");
                    }
                }
            }
            return wt(e.replace(W, "$1"), t, n, r);
        }
        a = st.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1;
        }, c = st.setDocument = function(e) {
            var n = e ? e.ownerDocument || e : w;
            return n !== p && 9 === n.nodeType && n.documentElement ? (p = n, f = n.documentElement, 
            d = a(n), T.tagNameNoComments = at(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length;
            }), T.attributes = at(function(e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t;
            }), T.getByClassName = at(function(e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 
                2 === e.getElementsByClassName("e").length) : !1;
            }), T.getByName = at(function(e) {
                e.id = x + 0, e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>", 
                f.insertBefore(e, f.firstChild);
                var t = n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length;
                return T.getIdNotName = !n.getElementById(x), f.removeChild(e), t;
            }), i.attrHandle = at(function(e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href");
            }) ? {} : {
                href: function(e) {
                    return e.getAttribute("href", 2);
                },
                type: function(e) {
                    return e.getAttribute("type");
                }
            }, T.getIdNotName ? (i.find.ID = function(e, t) {
                if (typeof t.getElementById !== A && !d) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [ n ] : [];
                }
            }, i.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }) : (i.find.ID = function(e, n) {
                if (typeof n.getElementById !== A && !d) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== A && r.getAttributeNode("id").value === e ? [ r ] : t : [];
                }
            }, i.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }), i.find.TAG = T.tagNameNoComments ? function(e, n) {
                return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t;
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r;
                }
                return o;
            }, i.find.NAME = T.getByName && function(e, n) {
                return typeof n.getElementsByName !== A ? n.getElementsByName(name) : t;
            }, i.find.CLASS = T.getByClassName && function(e, n) {
                return typeof n.getElementsByClassName === A || d ? t : n.getElementsByClassName(e);
            }, g = [], h = [ ":focus" ], (T.qsa = rt(n.querySelectorAll)) && (at(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), 
                e.querySelectorAll(":checked").length || h.push(":checked");
            }), at(function(e) {
                e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + _ + "*(?:\"\"|'')"), 
                e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
                h.push(",.*:");
            })), (T.matchesSelector = rt(m = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function(e) {
                T.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", R);
            }), h = RegExp(h.join("|")), g = RegExp(g.join("|")), y = rt(f.contains) || f.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function(e, t) {
                if (t) while (t = t.parentNode) if (t === e) return !0;
                return !1;
            }, v = f.compareDocumentPosition ? function(e, t) {
                var r;
                return e === t ? (u = !0, 0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || y(w, e) ? -1 : t === n || y(w, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
            } : function(e, t) {
                var r, i = 0, o = e.parentNode, a = t.parentNode, s = [ e ], l = [ t ];
                if (e === t) return u = !0, 0;
                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : 0;
                if (o === a) return ut(e, t);
                r = e;
                while (r = r.parentNode) s.unshift(r);
                r = t;
                while (r = r.parentNode) l.unshift(r);
                while (s[i] === l[i]) i++;
                return i ? ut(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0;
            }, u = !1, [ 0, 0 ].sort(v), T.detectDuplicates = u, p) : p;
        }, st.matches = function(e, t) {
            return st(e, null, null, t);
        }, st.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Z, "='$1']"), !(!T.matchesSelector || d || g && g.test(t) || h.test(t))) try {
                var n = m.call(e, t);
                if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
            } catch (r) {}
            return st(t, p, null, [ e ]).length > 0;
        }, st.contains = function(e, t) {
            return (e.ownerDocument || e) !== p && c(e), y(e, t);
        }, st.attr = function(e, t) {
            var n;
            return (e.ownerDocument || e) !== p && c(e), d || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : d || T.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null;
        }, st.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e);
        }, st.uniqueSort = function(e) {
            var t, n = [], r = 1, i = 0;
            if (u = !T.detectDuplicates, e.sort(v), u) {
                for (;t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                while (i--) e.splice(n[i], 1);
            }
            return e;
        };
        function ut(e, t) {
            var n = t && e, r = n && (~t.sourceIndex || j) - (~e.sourceIndex || j);
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function lt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e;
            };
        }
        function ct(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function pt(e) {
            return ot(function(t) {
                return t = +t, ot(function(n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                });
            });
        }
        o = st.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else for (;t = e[r]; r++) n += o(t);
            return n;
        }, i = st.selectors = {
            cacheLength: 50,
            createPseudo: ot,
            match: U,
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || st.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && st.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return U.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && z.test(n) && (t = ft(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    return "*" === e ? function() {
                        return !0;
                    } : (e = e.replace(et, tt).toLowerCase(), function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                    });
                },
                CLASS: function(e) {
                    var t = k[e + " "];
                    return t || (t = RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && k(e, function(e) {
                        return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = st.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0;
                    };
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, u) {
                        var l, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s;
                        if (m) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g]) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                            }
                            if (h = [ a ? m.firstChild : m.lastChild ], a && v) {
                                c = m[x] || (m[x] = {}), l = c[e] || [], d = l[0] === N && l[1], f = l[0] === N && l[2], 
                                p = d && m.childNodes[d];
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if (1 === p.nodeType && ++f && p === t) {
                                    c[e] = [ N, d, f ];
                                    break;
                                }
                            } else if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N) f = l[1]; else while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[x] || (p[x] = {}))[e] = [ N, f ]), 
                            p === t)) break;
                            return f -= i, f === r || 0 === f % r && f / r >= 0;
                        }
                    };
                },
                PSEUDO: function(e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
                    return r[x] ? r(t) : r.length > 1 ? (n = [ e, e, "", t ], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function(e, n) {
                        var i, o = r(e, t), a = o.length;
                        while (a--) i = M.call(e, o[a]), e[i] = !(n[i] = o[a]);
                    }) : function(e) {
                        return r(e, 0, n);
                    }) : r;
                }
            },
            pseudos: {
                not: ot(function(e) {
                    var t = [], n = [], r = s(e.replace(W, "$1"));
                    return r[x] ? ot(function(e, t, n, i) {
                        var o, a = r(e, null, i, []), s = e.length;
                        while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop();
                    };
                }),
                has: ot(function(e) {
                    return function(t) {
                        return st(e, t).length > 0;
                    };
                }),
                contains: ot(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || o(t)).indexOf(e) > -1;
                    };
                }),
                lang: ot(function(e) {
                    return X.test(e || "") || st.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(), 
                    function(t) {
                        var n;
                        do if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), 
                        n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function(e) {
                    return e === f;
                },
                focus: function(e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: function(e) {
                    return e.disabled === !1;
                },
                disabled: function(e) {
                    return e.disabled === !0;
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !i.pseudos.empty(e);
                },
                header: function(e) {
                    return Q.test(e.nodeName);
                },
                input: function(e) {
                    return G.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
                },
                first: pt(function() {
                    return [ 0 ];
                }),
                last: pt(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: pt(function(e, t, n) {
                    return [ 0 > n ? n + t : n ];
                }),
                even: pt(function(e, t) {
                    var n = 0;
                    for (;t > n; n += 2) e.push(n);
                    return e;
                }),
                odd: pt(function(e, t) {
                    var n = 1;
                    for (;t > n; n += 2) e.push(n);
                    return e;
                }),
                lt: pt(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (;--r >= 0; ) e.push(r);
                    return e;
                }),
                gt: pt(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (;t > ++r; ) e.push(r);
                    return e;
                })
            }
        };
        for (n in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) i.pseudos[n] = lt(n);
        for (n in {
            submit: !0,
            reset: !0
        }) i.pseudos[n] = ct(n);
        function ft(e, t) {
            var n, r, o, a, s, u, l, c = E[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e, u = [], l = i.preFilter;
            while (s) {
                (!n || (r = $.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(o = [])), 
                n = !1, (r = I.exec(s)) && (n = r.shift(), o.push({
                    value: n,
                    type: r[0].replace(W, " ")
                }), s = s.slice(n.length));
                for (a in i.filter) !(r = U[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(), 
                o.push({
                    value: n,
                    type: a,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break;
            }
            return t ? s.length : s ? st.error(e) : E(e, u).slice(0);
        }
        function dt(e) {
            var t = 0, n = e.length, r = "";
            for (;n > t; t++) r += e[t].value;
            return r;
        }
        function ht(e, t, n) {
            var i = t.dir, o = n && "parentNode" === i, a = C++;
            return t.first ? function(t, n, r) {
                while (t = t[i]) if (1 === t.nodeType || o) return e(t, n, r);
            } : function(t, n, s) {
                var u, l, c, p = N + " " + a;
                if (s) {
                    while (t = t[i]) if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
                } else while (t = t[i]) if (1 === t.nodeType || o) if (c = t[x] || (t[x] = {}), 
                (l = c[i]) && l[0] === p) {
                    if ((u = l[1]) === !0 || u === r) return u === !0;
                } else if (l = c[i] = [ p ], l[1] = e(t, n, s) || r, l[1] === !0) return !0;
            };
        }
        function gt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--) if (!e[i](t, n, r)) return !1;
                return !0;
            } : e[0];
        }
        function mt(e, t, n, r, i) {
            var o, a = [], s = 0, u = e.length, l = null != t;
            for (;u > s; s++) (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a;
        }
        function yt(e, t, n, r, i, o) {
            return r && !r[x] && (r = yt(r)), i && !i[x] && (i = yt(i, o)), ot(function(o, a, s, u) {
                var l, c, p, f = [], d = [], h = a.length, g = o || xt(t || "*", s.nodeType ? [ s ] : s, []), m = !e || !o && t ? g : mt(g, f, e, s, u), y = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, u), r) {
                    l = mt(y, d), r(l, [], s, u), c = l.length;
                    while (c--) (p = l[c]) && (y[d[c]] = !(m[d[c]] = p));
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = y.length;
                            while (c--) (p = y[c]) && l.push(m[c] = p);
                            i(null, y = [], l, u);
                        }
                        c = y.length;
                        while (c--) (p = y[c]) && (l = i ? M.call(o, p) : f[c]) > -1 && (o[l] = !(a[l] = p));
                    }
                } else y = mt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y);
            });
        }
        function vt(e) {
            var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], u = a ? 1 : 0, c = ht(function(e) {
                return e === t;
            }, s, !0), p = ht(function(e) {
                return M.call(t, e) > -1;
            }, s, !0), f = [ function(e, n, r) {
                return !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r));
            } ];
            for (;o > u; u++) if (n = i.relative[e[u].type]) f = [ ht(gt(f), n) ]; else {
                if (n = i.filter[e[u].type].apply(null, e[u].matches), n[x]) {
                    for (r = ++u; o > r; r++) if (i.relative[e[r].type]) break;
                    return yt(u > 1 && gt(f), u > 1 && dt(e.slice(0, u - 1)).replace(W, "$1"), n, r > u && vt(e.slice(u, r)), o > r && vt(e = e.slice(r)), o > r && dt(e));
                }
                f.push(n);
            }
            return gt(f);
        }
        function bt(e, t) {
            var n = 0, o = t.length > 0, a = e.length > 0, s = function(s, u, c, f, d) {
                var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, T = l, C = s || a && i.find.TAG("*", d && u.parentNode || u), k = N += null == T ? 1 : Math.random() || .1;
                for (w && (l = u !== p && u, r = n); null != (h = C[b]); b++) {
                    if (a && h) {
                        g = 0;
                        while (m = e[g++]) if (m(h, u, c)) {
                            f.push(h);
                            break;
                        }
                        w && (N = k, r = ++n);
                    }
                    o && ((h = !m && h) && v--, s && x.push(h));
                }
                if (v += b, o && b !== v) {
                    g = 0;
                    while (m = t[g++]) m(x, y, u, c);
                    if (s) {
                        if (v > 0) while (b--) x[b] || y[b] || (y[b] = L.call(f));
                        y = mt(y);
                    }
                    H.apply(f, y), w && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(f);
                }
                return w && (N = k, l = T), x;
            };
            return o ? ot(s) : s;
        }
        s = st.compile = function(e, t) {
            var n, r = [], i = [], o = S[e + " "];
            if (!o) {
                t || (t = ft(e)), n = t.length;
                while (n--) o = vt(t[n]), o[x] ? r.push(o) : i.push(o);
                o = S(e, bt(i, r));
            }
            return o;
        };
        function xt(e, t, n) {
            var r = 0, i = t.length;
            for (;i > r; r++) st(e, t[r], n);
            return n;
        }
        function wt(e, t, n, r) {
            var o, a, u, l, c, p = ft(e);
            if (!r && 1 === p.length) {
                if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !d && i.relative[a[1].type]) {
                    if (t = i.find.ID(u.matches[0].replace(et, tt), t)[0], !t) return n;
                    e = e.slice(a.shift().value.length);
                }
                o = U.needsContext.test(e) ? 0 : a.length;
                while (o--) {
                    if (u = a[o], i.relative[l = u.type]) break;
                    if ((c = i.find[l]) && (r = c(u.matches[0].replace(et, tt), V.test(a[0].type) && t.parentNode || t))) {
                        if (a.splice(o, 1), e = r.length && dt(a), !e) return H.apply(n, q.call(r, 0)), 
                        n;
                        break;
                    }
                }
            }
            return s(e, p)(r, t, d, n, V.test(e)), n;
        }
        i.pseudos.nth = i.pseudos.eq;
        function Tt() {}
        i.filters = Tt.prototype = i.pseudos, i.setFilters = new Tt(), c(), st.attr = b.attr, 
        b.find = st, b.expr = st.selectors, b.expr[":"] = b.expr.pseudos, b.unique = st.uniqueSort, 
        b.text = st.getText, b.isXMLDoc = st.isXML, b.contains = st.contains;
    }(e);
    var at = /Until$/, st = /^(?:parents|prev(?:Until|All))/, ut = /^.[^:#\[\.,]*$/, lt = b.expr.match.needsContext, ct = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    b.fn.extend({
        find: function(e) {
            var t, n, r, i = this.length;
            if ("string" != typeof e) return r = this, this.pushStack(b(e).filter(function() {
                for (t = 0; i > t; t++) if (b.contains(r[t], this)) return !0;
            }));
            for (n = [], t = 0; i > t; t++) b.find(e, this[t], n);
            return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, 
            n;
        },
        has: function(e) {
            var t, n = b(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) if (b.contains(this, n[t])) return !0;
            });
        },
        not: function(e) {
            return this.pushStack(ft(this, e, !1));
        },
        filter: function(e) {
            return this.pushStack(ft(this, e, !0));
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? lt.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0);
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = lt.test(e) || "string" != typeof e ? b(e, t || this.context) : 0;
            for (;i > r; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) {
                    if (a ? a.index(n) > -1 : b.find.matchesSelector(n, e)) {
                        o.push(n);
                        break;
                    }
                    n = n.parentNode;
                }
            }
            return this.pushStack(o.length > 1 ? b.unique(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [ e ] : e), r = b.merge(this.get(), n);
            return this.pushStack(b.unique(r));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), b.fn.andSelf = b.fn.addBack;
    function pt(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e;
    }
    b.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return b.dir(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return b.dir(e, "parentNode", n);
        },
        next: function(e) {
            return pt(e, "nextSibling");
        },
        prev: function(e) {
            return pt(e, "previousSibling");
        },
        nextAll: function(e) {
            return b.dir(e, "nextSibling");
        },
        prevAll: function(e) {
            return b.dir(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return b.dir(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return b.dir(e, "previousSibling", n);
        },
        siblings: function(e) {
            return b.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return b.sibling(e.firstChild);
        },
        contents: function(e) {
            return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes);
        }
    }, function(e, t) {
        b.fn[e] = function(n, r) {
            var i = b.map(this, t, n);
            return at.test(e) || (r = n), r && "string" == typeof r && (i = b.filter(r, i)), 
            i = this.length > 1 && !ct[e] ? b.unique(i) : i, this.length > 1 && st.test(e) && (i = i.reverse()), 
            this.pushStack(i);
        };
    }), b.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? b.find.matchesSelector(t[0], e) ? [ t[0] ] : [] : b.find.matches(e, t);
        },
        dir: function(e, n, r) {
            var i = [], o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !b(o).is(r))) 1 === o.nodeType && i.push(o), 
            o = o[n];
            return i;
        },
        sibling: function(e, t) {
            var n = [];
            for (;e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        }
    });
    function ft(e, t, n) {
        if (t = t || 0, b.isFunction(t)) return b.grep(e, function(e, r) {
            var i = !!t.call(e, r, e);
            return i === n;
        });
        if (t.nodeType) return b.grep(e, function(e) {
            return e === t === n;
        });
        if ("string" == typeof t) {
            var r = b.grep(e, function(e) {
                return 1 === e.nodeType;
            });
            if (ut.test(t)) return b.filter(t, r, !n);
            t = b.filter(t, r);
        }
        return b.grep(e, function(e) {
            return b.inArray(e, t) >= 0 === n;
        });
    }
    function dt(e) {
        var t = ht.split("|"), n = e.createDocumentFragment();
        if (n.createElement) while (t.length) n.createElement(t.pop());
        return n;
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gt = / jQuery\d+="(?:null|\d+)"/g, mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"), yt = /^\s+/, vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, xt = /<tbody/i, wt = /<|&#?\w+;/, Tt = /<(?:script|style|link)/i, Nt = /^(?:checkbox|radio)$/i, Ct = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /^$|\/(?:java|ecma)script/i, Et = /^true\/(.*)/, St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: b.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, jt = dt(o), Dt = jt.appendChild(o.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, 
    At.th = At.td, b.fn.extend({
        text: function(e) {
            return b.access(this, function(e) {
                return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e));
            }, null, e, arguments.length);
        },
        wrapAll: function(e) {
            if (b.isFunction(e)) return this.each(function(t) {
                b(this).wrapAll(e.call(this, t));
            });
            if (this[0]) {
                var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(e) {
            return b.isFunction(e) ? this.each(function(t) {
                b(this).wrapInner(e.call(this, t));
            }) : this.each(function() {
                var t = b(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = b.isFunction(e);
            return this.each(function(n) {
                b(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                b.nodeName(this, "body") || b(this).replaceWith(this.childNodes);
            }).end();
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e);
            });
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild);
            });
        },
        before: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        remove: function(e, t) {
            var n, r = 0;
            for (;null != (n = this[r]); r++) (!e || b.filter(e, [ n ]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(Ot(n)), 
            n.parentNode && (t && b.contains(n.ownerDocument, n) && Mt(Ot(n, "script")), n.parentNode.removeChild(n)));
            return this;
        },
        empty: function() {
            var e, t = 0;
            for (;null != (e = this[t]); t++) {
                1 === e.nodeType && b.cleanData(Ot(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && b.nodeName(e, "select") && (e.options.length = 0);
            }
            return this;
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return b.clone(this, e, t);
            });
        },
        html: function(e) {
            return b.access(this, function(e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                if (!("string" != typeof e || Tt.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || [ "", "" ])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (;i > r; r++) n = this[r] || {}, 1 === n.nodeType && (b.cleanData(Ot(n, !1)), 
                        n.innerHTML = e);
                        n = 0;
                    } catch (o) {}
                }
                n && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function(e) {
            var t = b.isFunction(e);
            return t || "string" == typeof e || (e = b(e).not(this).detach()), this.domManip([ e ], !0, function(e) {
                var t = this.nextSibling, n = this.parentNode;
                n && (b(this).remove(), n.insertBefore(e, t));
            });
        },
        detach: function(e) {
            return this.remove(e, !0);
        },
        domManip: function(e, n, r) {
            e = f.apply([], e);
            var i, o, a, s, u, l, c = 0, p = this.length, d = this, h = p - 1, g = e[0], m = b.isFunction(g);
            if (m || !(1 >= p || "string" != typeof g || b.support.checkClone) && Ct.test(g)) return this.each(function(i) {
                var o = d.eq(i);
                m && (e[0] = g.call(this, i, n ? o.html() : t)), o.domManip(e, n, r);
            });
            if (p && (l = b.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 
            1 === l.childNodes.length && (l = i), i)) {
                for (n = n && b.nodeName(i, "tr"), s = b.map(Ot(l, "script"), Ht), a = s.length; p > c; c++) o = l, 
                c !== h && (o = b.clone(o, !0, !0), a && b.merge(s, Ot(o, "script"))), r.call(n && b.nodeName(this[c], "table") ? Lt(this[c], "tbody") : this[c], o, c);
                if (a) for (u = s[s.length - 1].ownerDocument, b.map(s, qt), c = 0; a > c; c++) o = s[c], 
                kt.test(o.type || "") && !b._data(o, "globalEval") && b.contains(u, o) && (o.src ? b.ajax({
                    url: o.src,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                }) : b.globalEval((o.text || o.textContent || o.innerHTML || "").replace(St, "")));
                l = i = null;
            }
            return this;
        }
    });
    function Lt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t));
    }
    function Ht(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e;
    }
    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function Mt(e, t) {
        var n, r = 0;
        for (;null != (n = e[r]); r++) b._data(n, "globalEval", !t || b._data(t[r], "globalEval"));
    }
    function _t(e, t) {
        if (1 === t.nodeType && b.hasData(e)) {
            var n, r, i, o = b._data(e), a = b._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s) for (r = 0, i = s[n].length; i > r; r++) b.event.add(t, n, s[n][r]);
            }
            a.data && (a.data = b.extend({}, a.data));
        }
    }
    function Ft(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) {
                i = b._data(t);
                for (r in i.events) b.removeEvent(t, r, i.handle);
                t.removeAttribute(b.expando);
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), 
            b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, 
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
        }
    }
    b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        b.fn[e] = function(e) {
            var n, r = 0, i = [], o = b(e), a = o.length - 1;
            for (;a >= r; r++) n = r === a ? this : this.clone(!0), b(o[r])[t](n), d.apply(i, n.get());
            return this.pushStack(i);
        };
    });
    function Ot(e, n) {
        var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s) for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || b.nodeName(o, n) ? s.push(o) : b.merge(s, Ot(o, n));
        return n === t || n && b.nodeName(e, n) ? b.merge([ e ], s) : s;
    }
    function Bt(e) {
        Nt.test(e.type) && (e.defaultChecked = e.checked);
    }
    b.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, u = b.contains(e.ownerDocument, e);
            if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, 
            Dt.removeChild(o = Dt.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e))) for (r = Ot(o), 
            s = Ot(e), a = 0; null != (i = s[a]); ++a) r[a] && Ft(i, r[a]);
            if (t) if (n) for (s = s || Ot(e), r = r || Ot(o), a = 0; null != (i = s[a]); a++) _t(i, r[a]); else _t(e, o);
            return r = Ot(o, "script"), r.length > 0 && Mt(r, !u && Ot(e, "script")), r = s = i = null, 
            o;
        },
        buildFragment: function(e, t, n, r) {
            var i, o, a, s, u, l, c, p = e.length, f = dt(t), d = [], h = 0;
            for (;p > h; h++) if (o = e[h], o || 0 === o) if ("object" === b.type(o)) b.merge(d, o.nodeType ? [ o ] : o); else if (wt.test(o)) {
                s = s || f.appendChild(t.createElement("div")), u = (bt.exec(o) || [ "", "" ])[1].toLowerCase(), 
                c = At[u] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], 
                i = c[0];
                while (i--) s = s.lastChild;
                if (!b.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), 
                !b.support.tbody) {
                    o = "table" !== u || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, 
                    i = o && o.childNodes.length;
                    while (i--) b.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                }
                b.merge(d, s.childNodes), s.textContent = "";
                while (s.firstChild) s.removeChild(s.firstChild);
                s = f.lastChild;
            } else d.push(t.createTextNode(o));
            s && f.removeChild(s), b.support.appendChecked || b.grep(Ot(d, "input"), Bt), h = 0;
            while (o = d[h++]) if ((!r || -1 === b.inArray(o, r)) && (a = b.contains(o.ownerDocument, o), 
            s = Ot(f.appendChild(o), "script"), a && Mt(s), n)) {
                i = 0;
                while (o = s[i++]) kt.test(o.type || "") && n.push(o);
            }
            return s = null, f;
        },
        cleanData: function(e, t) {
            var n, r, o, a, s = 0, u = b.expando, l = b.cache, p = b.support.deleteExpando, f = b.event.special;
            for (;null != (n = e[s]); s++) if ((t || b.acceptData(n)) && (o = n[u], a = o && l[o])) {
                if (a.events) for (r in a.events) f[r] ? b.event.remove(n, r) : b.removeEvent(n, r, a.handle);
                l[o] && (delete l[o], p ? delete n[u] : typeof n.removeAttribute !== i ? n.removeAttribute(u) : n[u] = null, 
                c.push(o));
            }
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + x + ")(.*)$", "i"), Yt = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + x + ")", "i"), Gt = {
        BODY: "block"
    }, Qt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Kt = {
        letterSpacing: 0,
        fontWeight: 400
    }, Zt = [ "Top", "Right", "Bottom", "Left" ], en = [ "Webkit", "O", "Moz", "ms" ];
    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length;
        while (i--) if (t = en[i] + n, t in e) return t;
        return r;
    }
    function nn(e, t) {
        return e = t || e, "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e);
    }
    function rn(e, t) {
        var n, r, i, o = [], a = 0, s = e.length;
        for (;s > a; a++) r = e[a], r.style && (o[a] = b._data(r, "olddisplay"), n = r.style.display, 
        t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = b._data(r, "olddisplay", un(r.nodeName)))) : o[a] || (i = nn(r), 
        (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e;
    }
    b.fn.extend({
        css: function(e, n) {
            return b.access(this, function(e, n, r) {
                var i, o, a = {}, s = 0;
                if (b.isArray(n)) {
                    for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = b.css(e, n[s], !1, o);
                    return a;
                }
                return r !== t ? b.style(e, n, r) : b.css(e, n);
            }, e, n, arguments.length > 1);
        },
        show: function() {
            return rn(this, !0);
        },
        hide: function() {
            return rn(this);
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : nn(this)) ? b(this).show() : b(this).hide();
            });
        }
    }), b.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = b.camelCase(n), l = e.style;
                if (n = b.cssProps[u] || (b.cssProps[u] = tn(l, u)), s = b.cssHooks[n] || b.cssHooks[u], 
                r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(b.css(e, n)), 
                a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || b.cssNumber[u] || (r += "px"), 
                b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), 
                s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    l[n] = r;
                } catch (c) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, u = b.camelCase(n);
            return n = b.cssProps[u] || (b.cssProps[u] = tn(e.style, u)), s = b.cssHooks[n] || b.cssHooks[u], 
            s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), 
            "" === r || r ? (o = parseFloat(a), r === !0 || b.isNumeric(o) ? o || 0 : a) : a;
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i;
        }
    }), e.getComputedStyle ? (Rt = function(t) {
        return e.getComputedStyle(t, null);
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e), u = s ? s.getPropertyValue(n) || s[n] : t, l = e.style;
        return s && ("" !== u || b.contains(e.ownerDocument, e) || (u = b.style(e, n)), 
        Yt.test(u) && Ut.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, 
        u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u;
    }) : o.documentElement.currentStyle && (Rt = function(e) {
        return e.currentStyle;
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e), u = s ? s[n] : t, l = e.style;
        return null == u && l && l[n] && (u = l[n]), Yt.test(u) && !zt.test(n) && (i = l.left, 
        o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, 
        u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u;
    });
    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }
    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0;
        for (;4 > o; o += 2) "margin" === n && (a += b.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= b.css(e, "padding" + Zt[o], !0, i)), 
        "margin" !== n && (a -= b.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += b.css(e, "padding" + Zt[o], !0, i), 
        "padding" !== n && (a += b.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a;
    }
    function sn(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Rt(e), a = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
            r = a && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px";
    }
    function un(e) {
        var t = o, n = Gt[e];
        return n || (n = ln(e, t), "none" !== n && n || (Pt = (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), 
        t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), 
        t.close(), n = ln(e, t), Pt.detach()), Gt[e] = n), n;
    }
    function ln(e, t) {
        var n = b(t.createElement(e)).appendTo(t.body), r = b.css(n[0], "display");
        return n.remove(), r;
    }
    b.each([ "height", "width" ], function(e, n) {
        b.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Qt, function() {
                    return sn(e, n, i);
                }) : sn(e, n, i) : t;
            },
            set: function(e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0);
            }
        };
    }), b.support.opacity || (b.cssHooks.opacity = {
        get: function(e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
        },
        set: function(e, t) {
            var n = e.style, r = e.currentStyle, i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === b.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), 
            "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i);
        }
    }), b(function() {
        b.support.reliableMarginRight || (b.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? b.swap(e, {
                    display: "inline-block"
                }, Wt, [ e, "marginRight" ]) : t;
            }
        }), !b.support.pixelPosition && b.fn.position && b.each([ "top", "left" ], function(e, n) {
            b.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Wt(e, n), Yt.test(r) ? b(e).position()[n] + "px" : r) : t;
                }
            };
        });
    }), b.expr && b.expr.filters && (b.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"));
    }, b.expr.filters.visible = function(e) {
        return !b.expr.filters.hidden(e);
    }), b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        b.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [ n ];
                for (;4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                return i;
            }
        }, Ut.test(e) || (b.cssHooks[e + t].set = on);
    });
    var cn = /%20/g, pn = /\[\]$/, fn = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i, hn = /^(?:input|select|textarea|keygen)/i;
    b.fn.extend({
        serialize: function() {
            return b.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Nt.test(e));
            }).map(function(e, t) {
                var n = b(this).val();
                return null == n ? null : b.isArray(n) ? b.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                };
            }).get();
        }
    }), b.param = function(e, n) {
        var r, i = [], o = function(e, t) {
            t = b.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function() {
            o(this.name, this.value);
        }); else for (r in e) gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+");
    };
    function gn(e, t, n, r) {
        var i;
        if (b.isArray(t)) b.each(t, function(t, i) {
            n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
        }); else if (n || "object" !== b.type(t)) r(e, t); else for (i in t) gn(e + "[" + i + "]", t[i], n, r);
    }
    b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        b.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), b.fn.hover = function(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
    };
    var mn, yn, vn = b.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Cn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = b.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
    try {
        yn = a.href;
    } catch (Ln) {
        yn = o.createElement("a"), yn.href = "", yn = yn.href;
    }
    mn = En.exec(yn.toLowerCase()) || [];
    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(w) || [];
            if (b.isFunction(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function qn(e, n, r, i) {
        var o = {}, a = e === jn;
        function s(u) {
            var l;
            return o[u] = !0, b.each(e[u] || [], function(e, u) {
                var c = u(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : t : (n.dataTypes.unshift(c), 
                s(c), !1);
            }), l;
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*");
    }
    function Mn(e, n) {
        var r, i, o = b.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && b.extend(!0, e, r), e;
    }
    b.fn.load = function(e, n, r) {
        if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
        var i, o, a, s = this, u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), b.isFunction(n) ? (r = n, 
        n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && b.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments, s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e);
        }).complete(r && function(e, t) {
            s.each(r, o || [ e.responseText, t, e ]);
        }), this;
    }, b.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        b.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), b.each([ "get", "post" ], function(e, n) {
        b[n] = function(e, r, i, o) {
            return b.isFunction(r) && (o = o || i, i = r, r = t), b.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            });
        };
    }), b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Nn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": b.parseJSON,
                "text xml": b.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Mn(Mn(e, b.ajaxSettings), t) : Mn(b.ajaxSettings, e);
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function(e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, u, l, c, p = b.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? b(f) : b.event, h = b.Deferred(), g = b.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, x = 0, T = "canceled", N = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!c) {
                            c = {};
                            while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2];
                        }
                        t = c[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? a : null;
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = v[n] = v[n] || e, y[e] = t), this;
                },
                overrideMimeType: function(e) {
                    return x || (p.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > x) for (t in e) m[t] = [ m[t], e[t] ]; else N.always(e[N.status]);
                    return this;
                },
                abort: function(e) {
                    var t = e || T;
                    return l && l.abort(t), k(0, t), this;
                }
            };
            if (h.promise(N).complete = g.add, N.success = N.done, N.error = N.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), 
            p.type = n.method || n.type || p.method || p.type, p.dataTypes = b.trim(p.dataType || "*").toLowerCase().match(w) || [ "" ], 
            null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))), 
            p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), 
            qn(An, p, n, N), 2 === x) return N;
            u = p.global, u && 0 === b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), 
            p.hasContent = !Cn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, 
            delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), 
            p.ifModified && (b.lastModified[o] && N.setRequestHeader("If-Modified-Since", b.lastModified[o]), 
            b.etag[o] && N.setRequestHeader("If-None-Match", b.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType), 
            N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) N.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === x)) return N.abort();
            T = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) N[i](p[i]);
            if (l = qn(jn, p, n, N)) {
                N.readyState = 1, u && d.trigger("ajaxSend", [ N, p ]), p.async && p.timeout > 0 && (s = setTimeout(function() {
                    N.abort("timeout");
                }, p.timeout));
                try {
                    x = 1, l.send(y, k);
                } catch (C) {
                    if (!(2 > x)) throw C;
                    k(-1, C);
                }
            } else k(-1, "No Transport");
            function k(e, n, r, i) {
                var c, y, v, w, T, C = n;
                2 !== x && (x = 2, s && clearTimeout(s), l = t, a = i || "", N.readyState = e > 0 ? 4 : 0, 
                r && (w = _n(p, N, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = N.getResponseHeader("Last-Modified"), 
                T && (b.lastModified[o] = T), T = N.getResponseHeader("etag"), T && (b.etag[o] = T)), 
                204 === e ? (c = !0, C = "nocontent") : 304 === e ? (c = !0, C = "notmodified") : (c = Fn(p, w), 
                C = c.state, y = c.data, v = c.error, c = !v)) : (v = C, (e || !C) && (C = "error", 
                0 > e && (e = 0))), N.status = e, N.statusText = (n || C) + "", c ? h.resolveWith(f, [ y, C, N ]) : h.rejectWith(f, [ N, C, v ]), 
                N.statusCode(m), m = t, u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [ N, p, c ? y : v ]), 
                g.fireWith(f, [ N, C ]), u && (d.trigger("ajaxComplete", [ N, p ]), --b.active || b.event.trigger("ajaxStop")));
            }
            return N;
        },
        getScript: function(e, n) {
            return b.get(e, t, n, "script");
        },
        getJSON: function(e, t, n) {
            return b.get(e, t, n, "json");
        }
    });
    function _n(e, n, r) {
        var i, o, a, s, u = e.contents, l = e.dataTypes, c = e.responseFields;
        for (s in c) s in r && (n[c[s]] = r[s]);
        while ("*" === l[0]) l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o) for (s in u) if (u[s] && u[s].test(o)) {
            l.unshift(s);
            break;
        }
        if (l[0] in r) a = l[0]; else {
            for (s in r) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    a = s;
                    break;
                }
                i || (i = s);
            }
            a = a || i;
        }
        return a ? (a !== l[0] && l.unshift(a), r[a]) : t;
    }
    function Fn(e, t) {
        var n, r, i, o, a = {}, s = 0, u = e.dataTypes.slice(), l = u[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1]) for (i in e.converters) a[i.toLowerCase()] = e.converters[i];
        for (;r = u[++s]; ) if ("*" !== r) {
            if ("*" !== l && l !== r) {
                if (i = a[l + " " + r] || a["* " + r], !i) for (n in a) if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
                    i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
                    break;
                }
                if (i !== !0) if (i && e["throws"]) t = i(t); else try {
                    t = i(t);
                } catch (c) {
                    return {
                        state: "parsererror",
                        error: i ? c : "No conversion from " + l + " to " + r
                    };
                }
            }
            l = r;
        }
        return {
            state: "success",
            data: t
        };
    }
    b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return b.globalEval(e), e;
            }
        }
    }), b.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
    }), b.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = o.head || b("head")[0] || o.documentElement;
            return {
                send: function(t, i) {
                    n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), 
                    n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, 
                        n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"));
                    }, r.insertBefore(n, r.firstChild);
                },
                abort: function() {
                    n && n.onload(t, !0);
                }
            };
        }
    });
    var On = [], Bn = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = On.pop() || b.expando + "_" + vn++;
            return this[e] = !0, e;
        }
    }), b.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, u = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, 
        u ? n[u] = n[u].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), 
        n.converters["script json"] = function() {
            return s || b.error(o + " was not called"), s[0];
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments;
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, On.push(o)), s && b.isFunction(a) && a(s[0]), 
            s = a = t;
        }), "script") : t;
    });
    var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function() {
        var e;
        for (e in Pn) Pn[e](t, !0);
    };
    function In() {
        try {
            return new e.XMLHttpRequest();
        } catch (t) {}
    }
    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {}
    }
    b.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && In() || zn();
    } : In, Rn = b.ajaxSettings.xhr(), b.support.cors = !!Rn && "withCredentials" in Rn, 
    Rn = b.support.ajax = !!Rn, Rn && b.ajaxTransport(function(n) {
        if (!n.crossDomain || b.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), 
                    n.xhrFields) for (s in n.xhrFields) u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) u.setRequestHeader(s, i[s]);
                    } catch (l) {}
                    u.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, l, c, p;
                        try {
                            if (r && (i || 4 === u.readyState)) if (r = t, a && (u.onreadystatechange = b.noop, 
                            $n && delete Pn[a]), i) 4 !== u.readyState && u.abort(); else {
                                p = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (p.text = u.responseText);
                                try {
                                    c = u.statusText;
                                } catch (f) {
                                    c = "";
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404;
                            }
                        } catch (d) {
                            i || o(-1, d);
                        }
                        p && o(s, c, p, l);
                    }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, 
                    b(e).unload($n)), Pn[a] = r), u.onreadystatechange = r) : r();
                },
                abort: function() {
                    r && r(t, !0);
                }
            };
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [ nr ], Qn = {
        "*": [ function(e, t) {
            var n, r, i = this.createTween(e, t), o = Yn.exec(t), a = i.cur(), s = +a || 0, u = 1, l = 20;
            if (o) {
                if (n = +o[2], r = o[3] || (b.cssNumber[e] ? "" : "px"), "px" !== r && s) {
                    s = b.css(i.elem, e, !0) || n || 1;
                    do u = u || ".5", s /= u, b.style(i.elem, e, s + r); while (u !== (u = i.cur() / a) && 1 !== u && --l);
                }
                i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n;
            }
            return i;
        } ]
    };
    function Kn() {
        return setTimeout(function() {
            Xn = t;
        }), Xn = b.now();
    }
    function Zn(e, t) {
        b.each(t, function(t, n) {
            var r = (Qn[t] || []).concat(Qn["*"]), i = 0, o = r.length;
            for (;o > i; i++) if (r[i].call(e, t, n)) return;
        });
    }
    function er(e, t, n) {
        var r, i, o = 0, a = Gn.length, s = b.Deferred().always(function() {
            delete u.elem;
        }), u = function() {
            if (i) return !1;
            var t = Xn || Kn(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length;
            for (;u > a; a++) l.tweens[a].run(o);
            return s.notifyWith(e, [ l, o, n ]), 1 > o && u ? n : (s.resolveWith(e, [ l ]), 
            !1);
        }, l = s.promise({
            elem: e,
            props: b.extend({}, t),
            opts: b.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Xn || Kn(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r;
            },
            stop: function(t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; r > n; n++) l.tweens[n].run(1);
                return t ? s.resolveWith(e, [ l, t ]) : s.rejectWith(e, [ l, t ]), this;
            }
        }), c = l.props;
        for (tr(c, l.opts.specialEasing); a > o; o++) if (r = Gn[o].call(l, e, c, l.opts)) return r;
        return Zn(l, c), b.isFunction(l.opts.start) && l.opts.start.call(e, l), b.fx.timer(b.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
    }
    function tr(e, t) {
        var n, r, i, o, a;
        for (i in e) if (r = b.camelCase(i), o = t[r], n = e[i], b.isArray(n) && (o = n[1], 
        n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = b.cssHooks[r], a && "expand" in a) {
            n = a.expand(n), delete e[r];
            for (i in n) i in e || (e[i] = n[i], t[i] = o);
        } else t[r] = o;
    }
    b.Animation = b.extend(er, {
        tweener: function(e, t) {
            b.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (;i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t);
        },
        prefilter: function(e, t) {
            t ? Gn.unshift(e) : Gn.push(e);
        }
    });
    function nr(e, t, n) {
        var r, i, o, a, s, u, l, c, p, f = this, d = e.style, h = {}, g = [], m = e.nodeType && nn(e);
        n.queue || (c = b._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, p = c.empty.fire, 
        c.empty.fire = function() {
            c.unqueued || p();
        }), c.unqueued++, f.always(function() {
            f.always(function() {
                c.unqueued--, b.queue(e, "fx").length || c.empty.fire();
            });
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [ d.overflow, d.overflowX, d.overflowY ], 
        "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), 
        n.overflow && (d.overflow = "hidden", b.support.shrinkWrapBlocks || f.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2];
        }));
        for (i in t) if (a = t[i], Vn.exec(a)) {
            if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show")) continue;
            g.push(i);
        }
        if (o = g.length) {
            s = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), 
            u && (s.hidden = !m), m ? b(e).show() : f.done(function() {
                b(e).hide();
            }), f.done(function() {
                var t;
                b._removeData(e, "fxshow");
                for (t in h) b.style(e, t, h[t]);
            });
            for (i = 0; o > i; i++) r = g[i], l = f.createTween(r, m ? s[r] : 0), h[r] = s[r] || b.style(e, r), 
            r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0));
        }
    }
    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i);
    }
    b.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), 
            this.end = r, this.unit = o || (b.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : rr.propHooks._default.set(this), this;
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""), 
                t && "auto" !== t ? t : 0) : e.elem[e.prop];
            },
            set: function(e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, b.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = b.fn[t];
        b.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i);
        };
    }), b.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(e, t, n, r) {
            var i = b.isEmptyObject(e), o = b.speed(t, n, r), a = function() {
                var t = er(this, b.extend({}, e), o);
                a.finish = function() {
                    t.stop(!0);
                }, (i || b._data(this, "finish")) && t.stop(!0);
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r);
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), 
            this.each(function() {
                var t = !0, n = null != e && e + "queueHooks", o = b.timers, a = b._data(this);
                if (n) a[n] && a[n].stop && i(a[n]); else for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                for (n = o.length; n--; ) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), 
                t = !1, o.splice(n, 1));
                (t || !r) && b.dequeue(this, e);
            });
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = b._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = b.timers, a = r ? r.length : 0;
                for (n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), 
                t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
                o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
            });
        }
    });
    function ir(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    b.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        b.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), b.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? b.extend({}, e) : {
            complete: n || !n && t || b.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !b.isFunction(t) && t
        };
        return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default, 
        (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue);
        }, r;
    }, b.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }
    }, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function() {
        var e, n = b.timers, r = 0;
        for (Xn = b.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || b.fx.stop(), Xn = t;
    }, b.fx.timer = function(e) {
        e() && b.timers.push(e) && b.fx.start();
    }, b.fx.interval = 13, b.fx.start = function() {
        Un || (Un = setInterval(b.fx.tick, b.fx.interval));
    }, b.fx.stop = function() {
        clearInterval(Un), Un = null;
    }, b.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function(e) {
        return b.grep(b.timers, function(t) {
            return e === t.elem;
        }).length;
    }), b.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            b.offset.setOffset(this, e, t);
        });
        var n, r, o = {
            top: 0,
            left: 0
        }, a = this[0], s = a && a.ownerDocument;
        if (s) return n = s.documentElement, b.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), 
        r = or(s), {
            top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o;
    }, b.offset = {
        setOffset: function(e, t, n) {
            var r = b.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = b(e), o = i.offset(), a = b.css(e, "top"), s = b.css(e, "left"), u = ("absolute" === r || "fixed" === r) && b.inArray("auto", [ a, s ]) > -1, l = {}, c = {}, p, f;
            u ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), 
            b.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (l.top = t.top - o.top + p), 
            null != t.left && (l.left = t.left - o.left + f), "using" in t ? t.using.call(e, l) : i.css(l);
        }
    }, b.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
                return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), 
                n.left += b.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - b.css(r, "marginTop", !0),
                    left: t.left - n.left - b.css(r, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || o.documentElement;
                while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) e = e.offsetParent;
                return e || o.documentElement;
            });
        }
    }), b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        b.fn[e] = function(i) {
            return b.access(this, function(e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? b(a).scrollLeft() : o, r ? o : b(a).scrollTop()) : e[i] = o, 
                t);
            }, e, i, arguments.length, null);
        };
    });
    function or(e) {
        return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1;
    }
    b.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        b.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            b.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border");
                return b.access(this, function(n, r, i) {
                    var o;
                    return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, 
                    Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? b.css(n, r, s) : b.style(n, r, i, s);
                }, n, a ? i : t, a, null);
            };
        });
    }), e.jQuery = e.$ = b, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return b;
    });
})(window);

window.Modernizr = function(a, b, c) {
    function D(a) {
        j.cssText = a;
    }
    function E(a, b) {
        return D(n.join(a + ";") + (b || ""));
    }
    function F(a, b) {
        return typeof a === b;
    }
    function G(a, b) {
        return !!~("" + a).indexOf(b);
    }
    function H(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!G(e, "-") && j[e] !== c) return b == "pfx" ? e : !0;
        }
        return !1;
    }
    function I(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c) return d === !1 ? a[e] : F(f, "function") ? f.bind(d || b) : f;
        }
        return !1;
    }
    function J(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + p.join(d + " ") + d).split(" ");
        return F(b, "string") || F(b, "undefined") ? H(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), 
        I(e, b, c));
    }
    function K() {
        e.input = function(c) {
            for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k;
            return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), 
            u;
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), 
        e.inputtypes = function(a) {
            for (var d = 0, e, f, h, i = a.length; d < i; d++) k.setAttribute("type", f = a[d]), 
            e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", 
            /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, 
            e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, 
            g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), 
            t[a[d]] = !!e;
            return t;
        }("search tel url email datetime date month week time datetime-local number range color".split(" "));
    }
    var d = "2.6.2", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k = b.createElement("input"), l = ":)", m = {}.toString, n = " -webkit- -moz- -o- -ms- ".split(" "), o = "Webkit Moz O ms", p = o.split(" "), q = o.toLowerCase().split(" "), r = {
        svg: "http://www.w3.org/2000/svg"
    }, s = {}, t = {}, u = {}, v = [], w = v.slice, x, y = function(a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
        if (parseInt(d, 10)) while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), 
        l.appendChild(j);
        return f = [ "&#173;", '<style id="s', h, '">', a, "</style>" ].join(""), l.id = h, 
        (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", 
        k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), 
        m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), 
        !!i;
    }, z = function(b) {
        var c = a.matchMedia || a.msMatchMedia;
        if (c) return c(b).matches;
        var d;
        return y("@media " + b + " { #" + h + " { position: absolute; } }", function(b) {
            d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute";
        }), d;
    }, A = function() {
        function d(d, e) {
            e = e || b.createElement(a[d] || "div"), d = "on" + d;
            var f = d in e;
            return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), 
            f = F(e[d], "function"), F(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), 
            e = null, f;
        }
        var a = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return d;
    }(), B = {}.hasOwnProperty, C;
    !F(B, "undefined") && !F(B.call, "undefined") ? C = function(a, b) {
        return B.call(a, b);
    } : C = function(a, b) {
        return b in a && F(a.constructor.prototype[b], "undefined");
    }, Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if (typeof c != "function") throw new TypeError();
        var d = w.call(arguments, 1), e = function() {
            if (this instanceof e) {
                var a = function() {};
                a.prototype = c.prototype;
                var f = new a(), g = c.apply(f, d.concat(w.call(arguments)));
                return Object(g) === g ? g : f;
            }
            return c.apply(b, d.concat(w.call(arguments)));
        };
        return e;
    }), s.flexbox = function() {
        return J("flexWrap");
    }, s.canvas = function() {
        var a = b.createElement("canvas");
        return !!a.getContext && !!a.getContext("2d");
    }, s.canvastext = function() {
        return !!e.canvas && !!F(b.createElement("canvas").getContext("2d").fillText, "function");
    }, s.webgl = function() {
        return !!a.WebGLRenderingContext;
    }, s.touch = function() {
        var c;
        return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y([ "@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}" ].join(""), function(a) {
            c = a.offsetTop === 9;
        }), c;
    }, s.geolocation = function() {
        return "geolocation" in navigator;
    }, s.postmessage = function() {
        return !!a.postMessage;
    }, s.websqldatabase = function() {
        return !!a.openDatabase;
    }, s.indexedDB = function() {
        return !!J("indexedDB", a);
    }, s.hashchange = function() {
        return A("hashchange", a) && (b.documentMode === c || b.documentMode > 7);
    }, s.history = function() {
        return !!a.history && !!history.pushState;
    }, s.draganddrop = function() {
        var a = b.createElement("div");
        return "draggable" in a || "ondragstart" in a && "ondrop" in a;
    }, s.websockets = function() {
        return "WebSocket" in a || "MozWebSocket" in a;
    }, s.rgba = function() {
        return D("background-color:rgba(150,255,150,.5)"), G(j.backgroundColor, "rgba");
    }, s.hsla = function() {
        return D("background-color:hsla(120,40%,100%,.5)"), G(j.backgroundColor, "rgba") || G(j.backgroundColor, "hsla");
    }, s.multiplebgs = function() {
        return D("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background);
    }, s.backgroundsize = function() {
        return J("backgroundSize");
    }, s.borderimage = function() {
        return J("borderImage");
    }, s.borderradius = function() {
        return J("borderRadius");
    }, s.boxshadow = function() {
        return J("boxShadow");
    }, s.textshadow = function() {
        return b.createElement("div").style.textShadow === "";
    }, s.opacity = function() {
        return E("opacity:.55"), /^0.55$/.test(j.opacity);
    }, s.cssanimations = function() {
        return J("animationName");
    }, s.csscolumns = function() {
        return J("columnCount");
    }, s.cssgradients = function() {
        var a = "background-image:", b = "gradient(linear,left top,right bottom,from(#9f9),to(white));", c = "linear-gradient(left top,#9f9, white);";
        return D((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), 
        G(j.backgroundImage, "gradient");
    }, s.cssreflections = function() {
        return J("boxReflect");
    }, s.csstransforms = function() {
        return !!J("transform");
    }, s.csstransforms3d = function() {
        var a = !!J("perspective");
        return a && "webkitPerspective" in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
            a = b.offsetLeft === 9 && b.offsetHeight === 3;
        }), a;
    }, s.csstransitions = function() {
        return J("transition");
    }, s.fontface = function() {
        var a;
        return y('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
            var e = b.getElementById("smodernizr"), f = e.sheet || e.styleSheet, g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
            a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0;
        }), a;
    }, s.generatedcontent = function() {
        var a;
        return y([ "#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}' ].join(""), function(b) {
            a = b.offsetHeight >= 3;
        }), a;
    }, s.video = function() {
        var a = b.createElement("video"), c = !1;
        try {
            if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), 
            c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "");
        } catch (d) {}
        return c;
    }, s.audio = function() {
        var a = b.createElement("audio"), c = !1;
        try {
            if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), 
            c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), 
            c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "");
        } catch (d) {}
        return c;
    }, s.localstorage = function() {
        try {
            return localStorage.setItem(h, h), localStorage.removeItem(h), !0;
        } catch (a) {
            return !1;
        }
    }, s.sessionstorage = function() {
        try {
            return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0;
        } catch (a) {
            return !1;
        }
    }, s.webworkers = function() {
        return !!a.Worker;
    }, s.applicationcache = function() {
        return !!a.applicationCache;
    }, s.svg = function() {
        return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect;
    }, s.inlinesvg = function() {
        var a = b.createElement("div");
        return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg;
    }, s.smil = function() {
        return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")));
    }, s.svgclippaths = function() {
        return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")));
    };
    for (var L in s) C(s, L) && (x = L.toLowerCase(), e[x] = s[L](), v.push((e[x] ? "" : "no-") + x));
    return e.input || K(), e.addTest = function(a, b) {
        if (typeof a == "object") for (var d in a) C(a, d) && e.addTest(d, a[d]); else {
            a = a.toLowerCase();
            if (e[a] !== c) return e;
            b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), 
            e[a] = b;
        }
        return e;
    }, D(""), i = k = null, function(a, b) {
        function k(a, b) {
            var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild);
        }
        function l() {
            var a = r.elements;
            return typeof a == "string" ? a.split(" ") : a;
        }
        function m(a) {
            var b = i[a[g]];
            return b || (b = {}, h++, a[g] = h, i[h] = b), b;
        }
        function n(a, c, f) {
            c || (c = b);
            if (j) return c.createElement(a);
            f || (f = m(c));
            var g;
            return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), 
            g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g;
        }
        function o(a, c) {
            a || (a = b);
            if (j) return a.createDocumentFragment();
            c = c || m(a);
            var d = c.frag.cloneNode(), e = 0, f = l(), g = f.length;
            for (;e < g; e++) d.createElement(f[e]);
            return d;
        }
        function p(a, b) {
            b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, 
            b.frag = b.createFrag()), a.createElement = function(c) {
                return r.shivMethods ? n(c, a, b) : b.createElem(c);
            }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
            }) + ");return n}")(r, b.frag);
        }
        function q(a) {
            a || (a = b);
            var c = m(a);
            return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), 
            j || p(a, c), a;
        }
        var c = a.html5 || {}, d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, f, g = "_html5shiv", h = 0, i = {}, j;
        (function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined";
                }();
            } catch (c) {
                f = !0, j = !0;
            }
        })();
        var r = {
            elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: c.shivCSS !== !1,
            supportsUnknownElements: j,
            shivMethods: c.shivMethods !== !1,
            type: "default",
            shivDocument: q,
            createElement: n,
            createDocumentFragment: o
        };
        a.html5 = r, q(b);
    }(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, 
    e.mq = z, e.hasEvent = A, e.testProp = function(a) {
        return H([ a ]);
    }, e.testAllProps = J, e.testStyles = y, e.prefixed = function(a, b, c) {
        return b ? J(a, b, c) : J(a, "pfx");
    }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), 
    e;
}(this, this.document), function(a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a);
    }
    function e(a) {
        return "string" == typeof a;
    }
    function f() {}
    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a;
    }
    function h() {
        var a = p.shift();
        q = 1, a ? a.t ? m(function() {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
        }, 0) : (a(), h()) : q = 0;
    }
    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, 
            b)) {
                "img" != a && m(function() {
                    t.removeChild(l);
                }, 50);
                for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload();
            }
        }
        var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = {
            t: d,
            s: c,
            e: f,
            a: i,
            x: j
        };
        1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), 
        l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, r);
        }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), 
        m(k, j)) : y[c].push(l));
    }
    function j(a, b, c, d, f) {
        return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 
        1 == p.length && h()), this;
    }
    function k() {
        var a = B;
        return a.loader = {
            load: j,
            i: 0
        }, a;
    }
    var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance" in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function(a) {
        return "[object Array]" == o.call(a);
    }, x = [], y = {}, z = {
        timeout: function(a, b) {
            return b.length && (a.timeout = b[0]), a;
        }
    }, A, B;
    B = function(a) {
        function b(a) {
            var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {
                url: c,
                origUrl: c,
                prefixes: a
            }, e, f, g;
            for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++) c = x[f](c);
            return c;
        }
        function g(a, e, f, g, h) {
            var i = b(a), j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), 
            i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, 
            f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), 
            (d(e) || d(j)) && f.load(function() {
                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;
            })));
        }
        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a)) c || (j = function() {
                        var a = [].slice.call(arguments);
                        k.apply(this, a), l();
                    }), g(a, j, b, 0, h); else if (Object(a) === a) for (n in m = function() {
                        var b = 0, c;
                        for (c in a) a.hasOwnProperty(c) && b++;
                        return b;
                    }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                        var a = [].slice.call(arguments);
                        k.apply(this, a), l();
                    } : j[n] = function(a) {
                        return function() {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b), l();
                        };
                    }(k[n])), g(a[n], j, b, n, h));
                } else !c && l();
            }
            var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
            c(h ? a.yep : a.nope, !!i), i && c(i);
        }
        var i, j, l = this.yepnope.loader;
        if (e(a)) g(a, 0, l, 0); else if (w(a)) for (i = 0; i < a.length; i++) j = a[i], 
        e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l);
    }, B.addPrefix = function(a, b) {
        z[a] = b;
    }, B.addFilter = function(a) {
        x.push(a);
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", 
    b.addEventListener("DOMContentLoaded", A = function() {
        b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete";
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
        k.src = a;
        for (o in d) k.setAttribute(o, d[o]);
        c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
            !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);
        }, m(function() {
            l || (l = 1, c(1));
        }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);
    }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var e = b.createElement("link"), j, c = i ? h : c || f;
        e.href = a, e.rel = "stylesheet", e.type = "text/css";
        for (j in d) e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0));
    };
}(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0));
};

(function(global, undefined) {
    "use strict";
    var document = global.document, Alertify;
    Alertify = function() {
        var _alertify = {}, dialogs = {}, isopen = false, keys = {
            ENTER: 13,
            ESC: 27,
            SPACE: 32
        }, queue = [], $, btnCancel, btnOK, btnReset, btnFocus, elCallee, elCover, elDialog, elLog, form, input, getTransitionEvent;
        dialogs = {
            buttons: {
                holder: '<nav class="alertify-buttons">{{buttons}}</nav>',
                submit: '<button type="submit" class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>',
                ok: '<button class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>',
                cancel: '<button class="alertify-button alertify-button-cancel" id="alertify-cancel">{{cancel}}</button>'
            },
            input: '<div class="alertify-text-wrapper"><input type="text" class="alertify-text" id="alertify-text"></div>',
            message: '<p class="alertify-message">{{message}}</p>',
            log: '<article class="alertify-log{{class}}">{{message}}</article>'
        };
        getTransitionEvent = function() {
            var t, type, supported = false, el = document.createElement("fakeelement"), transitions = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            };
            for (t in transitions) {
                if (el.style[t] !== undefined) {
                    type = transitions[t];
                    supported = true;
                    break;
                }
            }
            return {
                type: type,
                supported: supported
            };
        };
        $ = function(id) {
            return document.getElementById(id);
        };
        _alertify = {
            labels: {
                ok: "OK",
                cancel: "Cancel"
            },
            delay: 5e3,
            buttonReverse: false,
            buttonFocus: "ok",
            transition: undefined,
            addListeners: function(fn) {
                var hasOK = typeof btnOK !== "undefined", hasCancel = typeof btnCancel !== "undefined", hasInput = typeof input !== "undefined", val = "", self = this, ok, cancel, common, key, reset;
                ok = function(event) {
                    if (typeof event.preventDefault !== "undefined") event.preventDefault();
                    common(event);
                    if (typeof input !== "undefined") val = input.value;
                    if (typeof fn === "function") {
                        if (typeof input !== "undefined") {
                            fn(true, val);
                        } else fn(true);
                    }
                    return false;
                };
                cancel = function(event) {
                    if (typeof event.preventDefault !== "undefined") event.preventDefault();
                    common(event);
                    if (typeof fn === "function") fn(false);
                    return false;
                };
                common = function(event) {
                    self.hide();
                    self.unbind(document.body, "keyup", key);
                    self.unbind(btnReset, "focus", reset);
                    if (hasInput) self.unbind(form, "submit", ok);
                    if (hasOK) self.unbind(btnOK, "click", ok);
                    if (hasCancel) self.unbind(btnCancel, "click", cancel);
                };
                key = function(event) {
                    var keyCode = event.keyCode;
                    if (keyCode === keys.SPACE && !hasInput) ok(event);
                    if (keyCode === keys.ESC && hasCancel) cancel(event);
                };
                reset = function(event) {
                    if (hasInput) input.focus(); else if (!hasCancel || self.buttonReverse) btnOK.focus(); else btnCancel.focus();
                };
                this.bind(btnReset, "focus", reset);
                if (hasOK) this.bind(btnOK, "click", ok);
                if (hasCancel) this.bind(btnCancel, "click", cancel);
                this.bind(document.body, "keyup", key);
                if (hasInput) this.bind(form, "submit", ok);
                if (!this.transition.supported) {
                    this.setFocus();
                }
            },
            bind: function(el, event, fn) {
                if (typeof el.addEventListener === "function") {
                    el.addEventListener(event, fn, false);
                } else if (el.attachEvent) {
                    el.attachEvent("on" + event, fn);
                }
            },
            handleErrors: function() {
                if (typeof global.onerror !== "undefined") {
                    var self = this;
                    global.onerror = function(msg, url, line) {
                        self.error("[" + msg + " on line " + line + " of " + url + "]", 0);
                    };
                    return true;
                } else {
                    return false;
                }
            },
            appendButtons: function(secondary, primary) {
                return this.buttonReverse ? primary + secondary : secondary + primary;
            },
            build: function(item) {
                var html = "", type = item.type, message = item.message, css = item.cssClass || "";
                html += '<div class="alertify-dialog">';
                if (_alertify.buttonFocus === "none") html += '<a href="#" id="alertify-noneFocus" class="alertify-hidden"></a>';
                if (type === "prompt") html += '<form id="alertify-form">';
                html += '<article class="alertify-inner">';
                html += dialogs.message.replace("{{message}}", message);
                if (type === "prompt") html += dialogs.input;
                html += dialogs.buttons.holder;
                html += "</article>";
                if (type === "prompt") html += "</form>";
                html += '<a id="alertify-resetFocus" class="alertify-resetFocus" href="#">Reset Focus</a>';
                html += "</div>";
                switch (type) {
                  case "confirm":
                    html = html.replace("{{buttons}}", this.appendButtons(dialogs.buttons.cancel, dialogs.buttons.ok));
                    html = html.replace("{{ok}}", this.labels.ok).replace("{{cancel}}", this.labels.cancel);
                    break;

                  case "prompt":
                    html = html.replace("{{buttons}}", this.appendButtons(dialogs.buttons.cancel, dialogs.buttons.submit));
                    html = html.replace("{{ok}}", this.labels.ok).replace("{{cancel}}", this.labels.cancel);
                    break;

                  case "alert":
                    html = html.replace("{{buttons}}", dialogs.buttons.ok);
                    html = html.replace("{{ok}}", this.labels.ok);
                    break;

                  default:
                    break;
                }
                elDialog.className = "alertify alertify-" + type + " " + css;
                elCover.className = "alertify-cover";
                return html;
            },
            close: function(elem, wait) {
                var timer = wait && !isNaN(wait) ? +wait : this.delay, self = this, hideElement, transitionDone;
                this.bind(elem, "click", function() {
                    hideElement(elem);
                });
                transitionDone = function(event) {
                    event.stopPropagation();
                    self.unbind(this, self.transition.type, transitionDone);
                    elLog.removeChild(this);
                    if (!elLog.hasChildNodes()) elLog.className += " alertify-logs-hidden";
                };
                hideElement = function(el) {
                    if (typeof el !== "undefined" && el.parentNode === elLog) {
                        if (self.transition.supported) {
                            self.bind(el, self.transition.type, transitionDone);
                            el.className += " alertify-log-hide";
                        } else {
                            elLog.removeChild(el);
                            if (!elLog.hasChildNodes()) elLog.className += " alertify-logs-hidden";
                        }
                    }
                };
                if (wait === 0) return;
                setTimeout(function() {
                    hideElement(elem);
                }, timer);
            },
            dialog: function(message, type, fn, placeholder, cssClass) {
                elCallee = document.activeElement;
                var check = function() {
                    if (elLog && elLog.scrollTop !== null && elCover && elCover.scrollTop !== null) return; else check();
                };
                if (typeof message !== "string") throw new Error("message must be a string");
                if (typeof type !== "string") throw new Error("type must be a string");
                if (typeof fn !== "undefined" && typeof fn !== "function") throw new Error("fn must be a function");
                if (typeof this.init === "function") {
                    this.init();
                    check();
                }
                queue.push({
                    type: type,
                    message: message,
                    callback: fn,
                    placeholder: placeholder,
                    cssClass: cssClass
                });
                if (!isopen) this.setup();
                return this;
            },
            extend: function(type) {
                if (typeof type !== "string") throw new Error("extend method must have exactly one paramter");
                return function(message, wait) {
                    this.log(message, type, wait);
                    return this;
                };
            },
            hide: function() {
                var transitionDone, self = this;
                queue.splice(0, 1);
                if (queue.length > 0) this.setup(true); else {
                    isopen = false;
                    transitionDone = function(event) {
                        event.stopPropagation();
                        elDialog.className += " alertify-isHidden";
                        self.unbind(elDialog, self.transition.type, transitionDone);
                    };
                    if (this.transition.supported) {
                        this.bind(elDialog, this.transition.type, transitionDone);
                        elDialog.className = "alertify alertify-hide alertify-hidden";
                    } else {
                        elDialog.className = "alertify alertify-hide alertify-hidden alertify-isHidden";
                    }
                    elCover.className = "alertify-cover alertify-cover-hidden";
                    elCallee.focus();
                }
            },
            init: function() {
                document.createElement("nav");
                document.createElement("article");
                document.createElement("section");
                elCover = document.createElement("div");
                elCover.setAttribute("id", "alertify-cover");
                elCover.className = "alertify-cover alertify-cover-hidden";
                document.body.appendChild(elCover);
                elDialog = document.createElement("section");
                elDialog.setAttribute("id", "alertify");
                elDialog.className = "alertify alertify-hidden";
                document.body.appendChild(elDialog);
                elLog = document.createElement("section");
                elLog.setAttribute("id", "alertify-logs");
                elLog.className = "alertify-logs alertify-logs-hidden";
                document.body.appendChild(elLog);
                document.body.setAttribute("tabindex", "0");
                this.transition = getTransitionEvent();
                delete this.init;
            },
            log: function(message, type, wait) {
                var check = function() {
                    if (elLog && elLog.scrollTop !== null) return; else check();
                };
                if (typeof this.init === "function") {
                    this.init();
                    check();
                }
                elLog.className = "alertify-logs";
                this.notify(message, type, wait);
                return this;
            },
            notify: function(message, type, wait) {
                var log = document.createElement("article");
                log.className = "alertify-log" + (typeof type === "string" && type !== "" ? " alertify-log-" + type : "");
                log.innerHTML = message;
                elLog.appendChild(log);
                setTimeout(function() {
                    log.className = log.className + " alertify-log-show";
                }, 50);
                this.close(log, wait);
            },
            set: function(args) {
                var k;
                if (typeof args !== "object" && args instanceof Array) throw new Error("args must be an object");
                for (k in args) {
                    if (args.hasOwnProperty(k)) {
                        this[k] = args[k];
                    }
                }
            },
            setFocus: function() {
                if (input) {
                    input.focus();
                    input.select();
                } else btnFocus.focus();
            },
            setup: function(fromQueue) {
                var item = queue[0], self = this, transitionDone;
                isopen = true;
                transitionDone = function(event) {
                    event.stopPropagation();
                    self.setFocus();
                    self.unbind(elDialog, self.transition.type, transitionDone);
                };
                if (this.transition.supported && !fromQueue) {
                    this.bind(elDialog, this.transition.type, transitionDone);
                }
                elDialog.innerHTML = this.build(item);
                btnReset = $("alertify-resetFocus");
                btnOK = $("alertify-ok") || undefined;
                btnCancel = $("alertify-cancel") || undefined;
                btnFocus = _alertify.buttonFocus === "cancel" ? btnCancel : _alertify.buttonFocus === "none" ? $("alertify-noneFocus") : btnOK, 
                input = $("alertify-text") || undefined;
                form = $("alertify-form") || undefined;
                if (typeof item.placeholder === "string" && item.placeholder !== "") input.value = item.placeholder;
                if (fromQueue) this.setFocus();
                this.addListeners(item.callback);
            },
            unbind: function(el, event, fn) {
                if (typeof el.removeEventListener === "function") {
                    el.removeEventListener(event, fn, false);
                } else if (el.detachEvent) {
                    el.detachEvent("on" + event, fn);
                }
            }
        };
        return {
            alert: function(message, fn, cssClass) {
                _alertify.dialog(message, "alert", fn, "", cssClass);
                return this;
            },
            confirm: function(message, fn, cssClass) {
                _alertify.dialog(message, "confirm", fn, "", cssClass);
                return this;
            },
            extend: _alertify.extend,
            init: _alertify.init,
            log: function(message, type, wait) {
                _alertify.log(message, type, wait);
                return this;
            },
            prompt: function(message, fn, placeholder, cssClass) {
                _alertify.dialog(message, "prompt", fn, placeholder, cssClass);
                return this;
            },
            success: function(message, wait) {
                _alertify.log(message, "success", wait);
                return this;
            },
            error: function(message, wait) {
                _alertify.log(message, "error", wait);
                return this;
            },
            set: function(args) {
                _alertify.set(args);
            },
            labels: _alertify.labels,
            debug: _alertify.handleErrors
        };
    };
    if (typeof define === "function") {
        define([], function() {
            return new Alertify();
        });
    } else if (typeof global.alertify === "undefined") {
        global.alertify = new Alertify();
    }
})(this);

(function(l) {
    function t(b, f) {
        var c, g, a = this, e = navigator.userAgent.toLowerCase();
        a.uid = l.rsModules.uid++;
        a.ns = ".rs" + a.uid;
        var d = document.createElement("div").style, j = [ "webkit", "Moz", "ms", "O" ], h = "", k = 0;
        for (c = 0; c < j.length; c++) g = j[c], !h && g + "Transform" in d && (h = g), 
        g = g.toLowerCase(), window.requestAnimationFrame || (window.requestAnimationFrame = window[g + "RequestAnimationFrame"], 
        window.cancelAnimationFrame = window[g + "CancelAnimationFrame"] || window[g + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame || (window.requestAnimationFrame = function(a) {
            var b = new Date().getTime(), c = Math.max(0, 16 - (b - k)), d = window.setTimeout(function() {
                a(b + c);
            }, c);
            k = b + c;
            return d;
        });
        window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
            clearTimeout(a);
        });
        a.isIPAD = e.match(/(ipad)/);
        j = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
        c = j[1] || "";
        g = j[2] || "0";
        j = {};
        c && (j[c] = !0, j.version = g);
        j.chrome && (j.webkit = !0);
        a._a = j;
        a.isAndroid = -1 < e.indexOf("android");
        a.slider = l(b);
        a.ev = l(a);
        a._b = l(document);
        a.st = l.extend({}, l.fn.royalSlider.defaults, f);
        a._c = a.st.transitionSpeed;
        a._d = 0;
        if (a.st.allowCSS3 && (!j.webkit || a.st.allowCSS3OnWebkit)) e = h + (h ? "T" : "t"), 
        a._e = e + "ransform" in d && e + "ransition" in d, a._e && (a._f = h + (h ? "P" : "p") + "erspective" in d);
        h = h.toLowerCase();
        a._g = "-" + h + "-";
        a._h = "vertical" === a.st.slidesOrientation ? !1 : !0;
        a._i = a._h ? "left" : "top";
        a._j = a._h ? "width" : "height";
        a._k = -1;
        a._l = "fade" === a.st.transitionType ? !1 : !0;
        a._l || (a.st.sliderDrag = !1, a._m = 10);
        a._n = "z-index:0; display:none; opacity:0;";
        a._o = 0;
        a._p = 0;
        a._q = 0;
        l.each(l.rsModules, function(b, c) {
            "uid" !== b && c.call(a);
        });
        a.slides = [];
        a._r = 0;
        (a.st.slides ? l(a.st.slides) : a.slider.children().detach()).each(function() {
            a._s(this, !0);
        });
        a.st.randomizeSlides && a.slides.sort(function() {
            return .5 - Math.random();
        });
        a.numSlides = a.slides.length;
        a._t();
        a.st.startSlideId ? a.st.startSlideId > a.numSlides - 1 && (a.st.startSlideId = a.numSlides - 1) : a.st.startSlideId = 0;
        a._o = a.staticSlideId = a.currSlideId = a._u = a.st.startSlideId;
        a.currSlide = a.slides[a.currSlideId];
        a._v = 0;
        a.msTouch = !1;
        a.slider.addClass((a._h ? "rsHor" : "rsVer") + (a._l ? "" : " rsFade"));
        d = '<div class="rsOverflow"><div class="rsContainer">';
        a.slidesSpacing = a.st.slidesSpacing;
        a._w = (a._h ? a.slider.width() : a.slider.height()) + a.st.slidesSpacing;
        a._x = Boolean(0 < a._y);
        1 >= a.numSlides && (a._z = !1);
        a._a1 = a._z && a._l ? 2 === a.numSlides ? 1 : 2 : 0;
        a._b1 = 6 > a.numSlides ? a.numSlides : 6;
        a._c1 = 0;
        a._d1 = 0;
        a.slidesJQ = [];
        for (c = 0; c < a.numSlides; c++) a.slidesJQ.push(l('<div style="' + (a._l ? "" : c !== a.currSlideId ? a._n : "z-index:0;") + '" class="rsSlide "></div>'));
        a._e1 = d = l(d + "</div></div>");
        h = a.ns;
        a.msEnabled = window.navigator.msPointerEnabled;
        a.msEnabled ? (a.msTouch = Boolean(1 < window.navigator.msMaxTouchPoints), a.hasTouch = !1, 
        a._n1 = .2, a._j1 = "MSPointerDown" + h, a._k1 = "MSPointerMove" + h, a._l1 = "MSPointerUp" + h, 
        a._m1 = "MSPointerCancel" + h) : (a._j1 = "mousedown" + h, a._k1 = "mousemove" + h, 
        a._l1 = "mouseup" + h, a._m1 = "mouseup" + h, "ontouchstart" in window || "createTouch" in document ? (a.hasTouch = !0, 
        a._j1 += " touchstart" + h, a._k1 += " touchmove" + h, a._l1 += " touchend" + h, 
        a._m1 += " touchcancel" + h, a._n1 = .5, a.st.sliderTouch && (a._f1 = !0)) : (a.hasTouch = !1, 
        a._n1 = .2));
        a.st.sliderDrag && (a._f1 = !0, j.msie || j.opera ? a._g1 = a._h1 = "move" : j.mozilla ? (a._g1 = "-moz-grab", 
        a._h1 = "-moz-grabbing") : j.webkit && -1 != navigator.platform.indexOf("Mac") && (a._g1 = "-webkit-grab", 
        a._h1 = "-webkit-grabbing"), a._i1());
        a.slider.html(d);
        a._o1 = a.st.controlsInside ? a._e1 : a.slider;
        a._p1 = a._e1.children(".rsContainer");
        a.msEnabled && a._p1.css("-ms-touch-action", a._h ? "pan-y" : "pan-x");
        a._q1 = l('<div class="rsPreloader"></div>');
        d = a._p1.children(".rsSlide");
        a._r1 = a.slidesJQ[a.currSlideId];
        a._s1 = 0;
        a._e ? (a._t1 = "transition-property", a._u1 = "transition-duration", a._v1 = "transition-timing-function", 
        a._w1 = a._x1 = a._g + "transform", a._f ? (j.webkit && !j.chrome && a.slider.addClass("rsWebkit3d"), 
        /iphone|ipad|ipod/gi.test(navigator.appVersion), a._y1 = "translate3d(", a._z1 = "px, ", 
        a._a2 = "px, 0px)") : (a._y1 = "translate(", a._z1 = "px, ", a._a2 = "px)"), a._l ? a._p1[a._g + a._t1] = a._g + "transform" : (h = {}, 
        h[a._g + a._t1] = "opacity", h[a._g + a._u1] = a.st.transitionSpeed + "ms", h[a._g + a._v1] = a.st.css3easeInOut, 
        d.css(h))) : (a._x1 = "left", a._w1 = "top");
        var n;
        l(window).on("resize" + a.ns, function() {
            n && clearTimeout(n);
            n = setTimeout(function() {
                a.updateSliderSize();
            }, 50);
        });
        a.ev.trigger("rsAfterPropsSetup");
        a.updateSliderSize();
        a.st.keyboardNavEnabled && a._b2();
        if (a.st.arrowsNavHideOnTouch && (a.hasTouch || a.msTouch)) a.st.arrowsNav = !1;
        a.st.arrowsNav && (d = a._o1, l('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(d), 
        a._c2 = d.children(".rsArrowLeft").click(function(b) {
            b.preventDefault();
            a.prev();
        }), a._d2 = d.children(".rsArrowRight").click(function(b) {
            b.preventDefault();
            a.next();
        }), a.st.arrowsNavAutoHide && !a.hasTouch && (a._c2.addClass("rsHidden"), a._d2.addClass("rsHidden"), 
        d.one("mousemove.arrowshover", function() {
            a._c2.removeClass("rsHidden");
            a._d2.removeClass("rsHidden");
        }), d.hover(function() {
            a._e2 || (a._c2.removeClass("rsHidden"), a._d2.removeClass("rsHidden"));
        }, function() {
            a._e2 || (a._c2.addClass("rsHidden"), a._d2.addClass("rsHidden"));
        })), a.ev.on("rsOnUpdateNav", function() {
            a._f2();
        }), a._f2());
        if (a._f1) a._p1.on(a._j1, function(b) {
            a._g2(b);
        }); else a.dragSuccess = !1;
        var m = [ "rsPlayBtnIcon", "rsPlayBtn", "rsCloseVideoBtn", "rsCloseVideoIcn" ];
        a._p1.click(function(b) {
            if (!a.dragSuccess) {
                var c = l(b.target).attr("class");
                if (-1 !== l.inArray(c, m) && a.toggleVideo()) return !1;
                if (a.st.navigateByClick && !a._h2) {
                    if (l(b.target).closest(".rsNoDrag", a._r1).length) return !0;
                    a._i2(b);
                }
                a.ev.trigger("rsSlideClick");
            }
        }).on("click.rs", "a", function() {
            if (a.dragSuccess) return !1;
            a._h2 = !0;
            setTimeout(function() {
                a._h2 = !1;
            }, 3);
        });
        a.ev.trigger("rsAfterInit");
    }
    l.rsModules || (l.rsModules = {
        uid: 0
    });
    t.prototype = {
        constructor: t,
        _i2: function(b) {
            b = b[this._h ? "pageX" : "pageY"] - this._j2;
            b >= this._q ? this.next() : 0 > b && this.prev();
        },
        _t: function() {
            var b;
            b = this.st.numImagesToPreload;
            if (this._z = this.st.loop) 2 === this.numSlides ? (this._z = !1, this.st.loopRewind = !0) : 2 > this.numSlides && (this.st.loopRewind = this._z = !1);
            this._z && 0 < b && (4 >= this.numSlides ? b = 1 : this.st.numImagesToPreload > (this.numSlides - 1) / 2 && (b = Math.floor((this.numSlides - 1) / 2)));
            this._y = b;
        },
        _s: function(b, f) {
            function c(a, b) {
                b ? e.images.push(a.attr(b)) : e.images.push(a.text());
                if (j) {
                    j = !1;
                    e.caption = "src" === b ? a.attr("alt") : a.contents();
                    e.image = e.images[0];
                    e.videoURL = a.attr("data-rsVideo");
                    var c = a.attr("data-rsw"), d = a.attr("data-rsh");
                    "undefined" !== typeof c && !1 !== c && "undefined" !== typeof d && !1 !== d ? (e.iW = parseInt(c, 10), 
                    e.iH = parseInt(d, 10)) : g.st.imgWidth && g.st.imgHeight && (e.iW = g.st.imgWidth, 
                    e.iH = g.st.imgHeight);
                }
            }
            var g = this, a, e = {}, d, j = !0;
            b = l(b);
            g._k2 = b;
            g.ev.trigger("rsBeforeParseNode", [ b, e ]);
            if (!e.stopParsing) return b = g._k2, e.id = g._r, e.contentAdded = !1, g._r++, 
            e.images = [], e.isBig = !1, e.hasCover || (b.hasClass("rsImg") ? (d = b, a = !0) : (d = b.find(".rsImg"), 
            d.length && (a = !0)), a ? (e.bigImage = d.eq(0).attr("data-rsBigImg"), d.each(function() {
                var a = l(this);
                a.is("a") ? c(a, "href") : a.is("img") ? c(a, "src") : c(a);
            })) : b.is("img") && (b.addClass("rsImg rsMainSlideImage"), c(b, "src"))), d = b.find(".rsCaption"), 
            d.length && (e.caption = d.remove()), e.content = b, g.ev.trigger("rsAfterParseNode", [ b, e ]), 
            f && g.slides.push(e), 0 === e.images.length && (e.isLoaded = !0, e.isRendered = !1, 
            e.isLoading = !1, e.images = null), e;
        },
        _b2: function() {
            var b = this, f, c, g = function(a) {
                37 === a ? b.prev() : 39 === a && b.next();
            };
            b._b.on("keydown" + b.ns, function(a) {
                if (!b._l2 && (c = a.keyCode, (37 === c || 39 === c) && !f)) g(c), f = setInterval(function() {
                    g(c);
                }, 700);
            }).on("keyup" + b.ns, function() {
                f && (clearInterval(f), f = null);
            });
        },
        goTo: function(b, f) {
            b !== this.currSlideId && this._m2(b, this.st.transitionSpeed, !0, !f);
        },
        destroy: function(b) {
            this.ev.trigger("rsBeforeDestroy");
            this._b.off("keydown" + this.ns + " keyup" + this.ns + " " + this._k1 + " " + this._l1);
            this._p1.off(this._j1 + " click");
            this.slider.data("royalSlider", null);
            l.removeData(this.slider, "royalSlider");
            l(window).off("resize" + this.ns);
            b && this.slider.remove();
            this.ev = this.slider = this.slides = null;
        },
        _n2: function(b, f) {
            function c(c, e, f) {
                c.isAdded ? (g(e, c), a(e, c)) : (f || (f = d.slidesJQ[e]), c.holder ? f = c.holder : (f = d.slidesJQ[e] = l(f), 
                c.holder = f), c.appendOnLoaded = !1, a(e, c, f), g(e, c), d._p2(c, f, b), c.isAdded = !0);
            }
            function g(a, c) {
                c.contentAdded || (d.setItemHtml(c, b), b || (c.contentAdded = !0));
            }
            function a(a, b, c) {
                d._l && (c || (c = d.slidesJQ[a]), c.css(d._i, (a + d._d1 + p) * d._w));
            }
            function e(a) {
                if (k) {
                    if (a > n - 1) return e(a - n);
                    if (0 > a) return e(n + a);
                }
                return a;
            }
            var d = this, j, h, k = d._z, n = d.numSlides;
            if (!isNaN(f)) return e(f);
            var m = d.currSlideId, p, q = b ? Math.abs(d._o2 - d.currSlideId) >= d.numSlides - 1 ? 0 : 1 : d._y, r = Math.min(2, q), u = !1, t = !1, s;
            for (h = m; h < m + 1 + r; h++) if (s = e(h), (j = d.slides[s]) && (!j.isAdded || !j.positionSet)) {
                u = !0;
                break;
            }
            for (h = m - 1; h > m - 1 - r; h--) if (s = e(h), (j = d.slides[s]) && (!j.isAdded || !j.positionSet)) {
                t = !0;
                break;
            }
            if (u) for (h = m; h < m + q + 1; h++) s = e(h), p = Math.floor((d._u - (m - h)) / d.numSlides) * d.numSlides, 
            (j = d.slides[s]) && c(j, s);
            if (t) for (h = m - 1; h > m - 1 - q; h--) s = e(h), p = Math.floor((d._u - (m - h)) / n) * n, 
            (j = d.slides[s]) && c(j, s);
            if (!b) {
                r = e(m - q);
                m = e(m + q);
                q = r > m ? 0 : r;
                for (h = 0; h < n; h++) if (!(r > m && h > r - 1) && (h < q || h > m)) if ((j = d.slides[h]) && j.holder) j.holder.detach(), 
                j.isAdded = !1;
            }
        },
        setItemHtml: function(b, f) {
            var c = this, g = function() {
                if (b.images) {
                    if (!b.isLoading) {
                        var e, f;
                        b.content.hasClass("rsImg") ? (e = b.content, f = !0) : e = b.content.find(".rsImg:not(img)");
                        e && !e.is("img") && e.each(function() {
                            var a = l(this), c = '<img class="rsImg" src="' + (a.is("a") ? a.attr("href") : a.text()) + '" />';
                            f ? b.content = l(c) : a.replaceWith(c);
                        });
                        e = f ? b.content : b.content.find("img.rsImg");
                        h();
                        e.eq(0).addClass("rsMainSlideImage");
                        b.iW && b.iH && (b.isLoaded || c._q2(b), d());
                        b.isLoading = !0;
                        if (b.isBig) l("<img />").on("load.rs error.rs", function() {
                            l(this).off("load.rs error.rs");
                            a([ this ], !0);
                        }).attr("src", b.image); else {
                            b.loaded = [];
                            b.numStartedLoad = 0;
                            e = function() {
                                l(this).off("load.rs error.rs");
                                b.loaded.push(this);
                                b.loaded.length === b.numStartedLoad && a(b.loaded, !1);
                            };
                            for (var g = 0; g < b.images.length; g++) {
                                var j = l("<img />");
                                b.numStartedLoad++;
                                j.on("load.rs error.rs", e).attr("src", b.images[g]);
                            }
                        }
                    }
                } else b.isRendered = !0, b.isLoaded = !0, b.isLoading = !1, d(!0);
            }, a = function(a, c) {
                if (a.length) {
                    var d = a[0];
                    if (c !== b.isBig) (d = b.holder.children()) && 1 < d.length && k(); else if (b.iW && b.iH) e(); else if (b.iW = d.width, 
                    b.iH = d.height, b.iW && b.iH) e(); else {
                        var f = new Image();
                        f.onload = function() {
                            f.width ? (b.iW = f.width, b.iH = f.height, e()) : setTimeout(function() {
                                f.width && (b.iW = f.width, b.iH = f.height);
                                e();
                            }, 1e3);
                        };
                        f.src = d.src;
                    }
                } else e();
            }, e = function() {
                b.isLoaded = !0;
                b.isLoading = !1;
                d();
                k();
                j();
            }, d = function() {
                if (!b.isAppended && c.ev) {
                    var a = c.st.visibleNearby, d = b.id - c._o;
                    if (!f && !b.appendOnLoaded && c.st.fadeinLoadedSlide && (0 === d || (a || c._r2 || c._l2) && (-1 === d || 1 === d))) a = {
                        visibility: "visible",
                        opacity: 0
                    }, a[c._g + "transition"] = "opacity 400ms ease-in-out", b.content.css(a), setTimeout(function() {
                        b.content.css("opacity", 1);
                    }, 16);
                    b.holder.find(".rsPreloader").length ? b.holder.append(b.content) : b.holder.html(b.content);
                    b.isAppended = !0;
                    b.isLoaded && (c._q2(b), j());
                    b.sizeReady || (b.sizeReady = !0, setTimeout(function() {
                        c.ev.trigger("rsMaybeSizeReady", b);
                    }, 100));
                }
            }, j = function() {
                !b.loadedTriggered && c.ev && (b.isLoaded = b.loadedTriggered = !0, b.holder.trigger("rsAfterContentSet"), 
                c.ev.trigger("rsAfterContentSet", b));
            }, h = function() {
                c.st.usePreloader && b.holder.html(c._q1.clone());
            }, k = function() {
                if (c.st.usePreloader) {
                    var a = b.holder.find(".rsPreloader");
                    a.length && a.remove();
                }
            };
            b.isLoaded ? d() : f ? !c._l && b.images && b.iW && b.iH ? g() : (b.holder.isWaiting = !0, 
            h(), b.holder.slideId = -99) : g();
        },
        _p2: function(b) {
            this._p1.append(b.holder);
            b.appendOnLoaded = !1;
        },
        _g2: function(b, f) {
            var c = this, g, a = "touchstart" === b.type;
            c._s2 = a;
            c.ev.trigger("rsDragStart");
            if (l(b.target).closest(".rsNoDrag", c._r1).length) return c.dragSuccess = !1, !0;
            !f && c._r2 && (c._t2 = !0, c._u2());
            c.dragSuccess = !1;
            if (c._l2) a && (c._v2 = !0); else {
                a && (c._v2 = !1);
                c._w2();
                if (a) {
                    var e = b.originalEvent.touches;
                    if (e && 0 < e.length) g = e[0], 1 < e.length && (c._v2 = !0); else return;
                } else b.preventDefault(), g = b, c.msEnabled && (g = g.originalEvent);
                c._l2 = !0;
                c._b.on(c._k1, function(a) {
                    c._x2(a, f);
                }).on(c._l1, function(a) {
                    c._y2(a, f);
                });
                c._z2 = "";
                c._a3 = !1;
                c._b3 = g.pageX;
                c._c3 = g.pageY;
                c._d3 = c._v = (!f ? c._h : c._e3) ? g.pageX : g.pageY;
                c._f3 = 0;
                c._g3 = 0;
                c._h3 = !f ? c._p : c._i3;
                c._j3 = new Date().getTime();
                if (a) c._e1.on(c._m1, function(a) {
                    c._y2(a, f);
                });
            }
        },
        _k3: function(b, f) {
            if (this._l3) {
                var c = this._m3, g = b.pageX - this._b3, a = b.pageY - this._c3, e = this._h3 + g, d = this._h3 + a, j = !f ? this._h : this._e3, e = j ? e : d, d = this._z2;
                this._a3 = !0;
                this._b3 = b.pageX;
                this._c3 = b.pageY;
                "x" === d && 0 !== g ? this._f3 = 0 < g ? 1 : -1 : "y" === d && 0 !== a && (this._g3 = 0 < a ? 1 : -1);
                d = j ? this._b3 : this._c3;
                g = j ? g : a;
                f ? e > this._n3 ? e = this._h3 + g * this._n1 : e < this._o3 && (e = this._h3 + g * this._n1) : this._z || (0 >= this.currSlideId && 0 < d - this._d3 && (e = this._h3 + g * this._n1), 
                this.currSlideId >= this.numSlides - 1 && 0 > d - this._d3 && (e = this._h3 + g * this._n1));
                this._h3 = e;
                200 < c - this._j3 && (this._j3 = c, this._v = d);
                f ? this._q3(this._h3) : this._l && this._p3(this._h3);
            }
        },
        _x2: function(b, f) {
            var c = this, g, a = "touchmove" === b.type;
            if (!c._s2 || a) {
                if (a) {
                    if (c._r3) return;
                    var e = b.originalEvent.touches;
                    if (e) {
                        if (1 < e.length) return;
                        g = e[0];
                    } else return;
                } else g = b, c.msEnabled && (g = g.originalEvent);
                c._a3 || (c._e && (!f ? c._p1 : c._s3).css(c._g + c._u1, "0s"), function j() {
                    c._l2 && (c._t3 = requestAnimationFrame(j), c._u3 && c._k3(c._u3, f));
                }());
                if (c._l3) b.preventDefault(), c._m3 = new Date().getTime(), c._u3 = g; else if (e = !f ? c._h : c._e3, 
                g = Math.abs(g.pageX - c._b3) - Math.abs(g.pageY - c._c3) - (e ? -7 : 7), 7 < g) {
                    if (e) b.preventDefault(), c._z2 = "x"; else if (a) {
                        c._v3();
                        return;
                    }
                    c._l3 = !0;
                } else if (-7 > g) {
                    if (e) {
                        if (a) {
                            c._v3();
                            return;
                        }
                    } else b.preventDefault(), c._z2 = "y";
                    c._l3 = !0;
                }
            }
        },
        _v3: function() {
            this._r3 = !0;
            this._a3 = this._l2 = !1;
            this._y2();
        },
        _y2: function(b, f) {
            function c(a) {
                return 100 > a ? 100 : 500 < a ? 500 : a;
            }
            function g(b, d) {
                if (a._l || f) j = (-a._u - a._d1) * a._w, h = Math.abs(a._p - j), a._c = h / d, 
                b && (a._c += 250), a._c = c(a._c), a._x3(j, !1);
            }
            var a = this, e, d, j, h;
            d = "touchend" === b.type || "touchcancel" === b.type;
            if (!a._s2 || d) if (a._s2 = !1, a.ev.trigger("rsDragRelease"), a._u3 = null, a._l2 = !1, 
            a._r3 = !1, a._l3 = !1, a._m3 = 0, cancelAnimationFrame(a._t3), a._a3 && (f ? a._q3(a._h3) : a._l && a._p3(a._h3)), 
            a._b.off(a._k1).off(a._l1), d && a._e1.off(a._m1), a._i1(), !a._a3 && !a._v2 && f && a._w3) {
                var k = l(b.target).closest(".rsNavItem");
                k.length && a.goTo(k.index());
            } else {
                e = !f ? a._h : a._e3;
                if (!a._a3 || "y" === a._z2 && e || "x" === a._z2 && !e) if (!f && a._t2) {
                    a._t2 = !1;
                    if (a.st.navigateByClick) {
                        a._i2(a.msEnabled ? b.originalEvent : b);
                        a.dragSuccess = !0;
                        return;
                    }
                    a.dragSuccess = !0;
                } else {
                    a._t2 = !1;
                    a.dragSuccess = !1;
                    return;
                } else a.dragSuccess = !0;
                a._t2 = !1;
                a._z2 = "";
                var n = a.st.minSlideOffset;
                d = d ? b.originalEvent.changedTouches[0] : a.msEnabled ? b.originalEvent : b;
                var m = e ? d.pageX : d.pageY, p = a._d3;
                d = a._v;
                var q = a.currSlideId, r = a.numSlides, u = e ? a._f3 : a._g3, t = a._z;
                Math.abs(m - p);
                e = m - d;
                d = new Date().getTime() - a._j3;
                d = Math.abs(e) / d;
                if (0 === u || 1 >= r) g(!0, d); else {
                    if (!t && !f) if (0 >= q) {
                        if (0 < u) {
                            g(!0, d);
                            return;
                        }
                    } else if (q >= r - 1 && 0 > u) {
                        g(!0, d);
                        return;
                    }
                    if (f) {
                        j = a._i3;
                        if (j > a._n3) j = a._n3; else if (j < a._o3) j = a._o3; else {
                            n = d * d / .006;
                            k = -a._i3;
                            m = a._y3 - a._z3 + a._i3;
                            0 < e && n > k ? (k += a._z3 / (15 / (.003 * (n / d))), d = d * k / n, n = k) : 0 > e && n > m && (m += a._z3 / (15 / (.003 * (n / d))), 
                            d = d * m / n, n = m);
                            k = Math.max(Math.round(d / .003), 50);
                            j += n * (0 > e ? -1 : 1);
                            if (j > a._n3) {
                                a._a4(j, k, !0, a._n3, 200);
                                return;
                            }
                            if (j < a._o3) {
                                a._a4(j, k, !0, a._o3, 200);
                                return;
                            }
                        }
                        a._a4(j, k, !0);
                    } else p + n < m ? 0 > u ? g(!1, d) : a._m2("prev", c(Math.abs(a._p - (-a._u - a._d1 + 1) * a._w) / d), !1, !0, !0) : p - n > m ? 0 < u ? g(!1, d) : a._m2("next", c(Math.abs(a._p - (-a._u - a._d1 - 1) * a._w) / d), !1, !0, !0) : g(!1, d);
                }
            }
        },
        _p3: function(b) {
            b = this._p = b;
            this._e ? this._p1.css(this._x1, this._y1 + (this._h ? b + this._z1 + 0 : 0 + this._z1 + b) + this._a2) : this._p1.css(this._h ? this._x1 : this._w1, b);
        },
        updateSliderSize: function(b) {
            var f, c;
            if (this.st.autoScaleSlider) {
                var g = this.st.autoScaleSliderWidth, a = this.st.autoScaleSliderHeight;
                this.st.autoScaleHeight ? (f = this.slider.width(), f != this.width && (this.slider.css("height", f * (a / g)), 
                f = this.slider.width()), c = this.slider.height()) : (c = this.slider.height(), 
                c != this.height && (this.slider.css("width", c * (g / a)), c = this.slider.height()), 
                f = this.slider.width());
            } else f = this.slider.width(), c = this.slider.height();
            if (b || f != this.width || c != this.height) {
                this.width = f;
                this.height = c;
                this._b4 = f;
                this._c4 = c;
                this.ev.trigger("rsBeforeSizeSet");
                this.ev.trigger("rsAfterSizePropSet");
                this._e1.css({
                    width: this._b4,
                    height: this._c4
                });
                this._w = (this._h ? this._b4 : this._c4) + this.st.slidesSpacing;
                this._d4 = this.st.imageScalePadding;
                for (f = 0; f < this.slides.length; f++) b = this.slides[f], b.positionSet = !1, 
                b && b.images && b.isLoaded && (b.isRendered = !1, this._q2(b));
                if (this._e4) for (f = 0; f < this._e4.length; f++) b = this._e4[f], b.holder.css(this._i, (b.id + this._d1) * this._w);
                this._n2();
                this._l && (this._e && this._p1.css(this._g + "transition-duration", "0s"), this._p3((-this._u - this._d1) * this._w));
                this.ev.trigger("rsOnUpdateNav");
            }
            this._j2 = this._e1.offset();
            this._j2 = this._j2[this._i];
        },
        appendSlide: function(b, f) {
            var c = this._s(b);
            if (isNaN(f) || f > this.numSlides) f = this.numSlides;
            this.slides.splice(f, 0, c);
            this.slidesJQ.splice(f, 0, '<div style="' + (this._l ? "position:absolute;" : this._n) + '" class="rsSlide"></div>');
            f < this.currSlideId && this.currSlideId++;
            this.ev.trigger("rsOnAppendSlide", [ c, f ]);
            this._f4(f);
            f === this.currSlideId && this.ev.trigger("rsAfterSlideChange");
        },
        removeSlide: function(b) {
            var f = this.slides[b];
            f && (f.holder && f.holder.remove(), b < this.currSlideId && this.currSlideId--, 
            this.slides.splice(b, 1), this.slidesJQ.splice(b, 1), this.ev.trigger("rsOnRemoveSlide", [ b ]), 
            this._f4(b), b === this.currSlideId && this.ev.trigger("rsAfterSlideChange"));
        },
        _f4: function() {
            var b = this, f = b.numSlides, f = 0 >= b._u ? 0 : Math.floor(b._u / f);
            b.numSlides = b.slides.length;
            0 === b.numSlides ? (b.currSlideId = b._d1 = b._u = 0, b.currSlide = b._g4 = null) : b._u = f * b.numSlides + b.currSlideId;
            for (f = 0; f < b.numSlides; f++) b.slides[f].id = f;
            b.currSlide = b.slides[b.currSlideId];
            b._r1 = b.slidesJQ[b.currSlideId];
            b.currSlideId >= b.numSlides ? b.goTo(b.numSlides - 1) : 0 > b.currSlideId && b.goTo(0);
            b._t();
            b._l && b._z && b._p1.css(b._g + b._u1, "0ms");
            b._h4 && clearTimeout(b._h4);
            b._h4 = setTimeout(function() {
                b._l && b._p3((-b._u - b._d1) * b._w);
                b._n2();
                b._l || b._r1.css({
                    display: "block",
                    opacity: 1
                });
            }, 14);
            b.ev.trigger("rsOnUpdateNav");
        },
        _i1: function() {
            this._f1 && this._l && (this._g1 ? this._e1.css("cursor", this._g1) : (this._e1.removeClass("grabbing-cursor"), 
            this._e1.addClass("grab-cursor")));
        },
        _w2: function() {
            this._f1 && this._l && (this._h1 ? this._e1.css("cursor", this._h1) : (this._e1.removeClass("grab-cursor"), 
            this._e1.addClass("grabbing-cursor")));
        },
        next: function(b) {
            this._m2("next", this.st.transitionSpeed, !0, !b);
        },
        prev: function(b) {
            this._m2("prev", this.st.transitionSpeed, !0, !b);
        },
        _m2: function(b, f, c, g, a) {
            var e = this, d, j, h;
            e.ev.trigger("rsBeforeMove", [ b, g ]);
            h = "next" === b ? e.currSlideId + 1 : "prev" === b ? e.currSlideId - 1 : b = parseInt(b, 10);
            if (!e._z) {
                if (0 > h) {
                    e._i4("left", !g);
                    return;
                }
                if (h >= e.numSlides) {
                    e._i4("right", !g);
                    return;
                }
            }
            e._r2 && (e._u2(!0), c = !1);
            j = h - e.currSlideId;
            h = e._o2 = e.currSlideId;
            var k = e.currSlideId + j;
            g = e._u;
            var l;
            e._z ? (k = e._n2(!1, k), g += j) : g = k;
            e._o = k;
            e._g4 = e.slidesJQ[e.currSlideId];
            e._u = g;
            e.currSlideId = e._o;
            e.currSlide = e.slides[e.currSlideId];
            e._r1 = e.slidesJQ[e.currSlideId];
            var k = e.st.slidesDiff, m = Boolean(0 < j);
            j = Math.abs(j);
            var p = Math.floor(h / e._y), q = Math.floor((h + (m ? k : -k)) / e._y), p = (m ? Math.max(p, q) : Math.min(p, q)) * e._y + (m ? e._y - 1 : 0);
            p > e.numSlides - 1 ? p = e.numSlides - 1 : 0 > p && (p = 0);
            h = m ? p - h : h - p;
            h > e._y && (h = e._y);
            if (j > h + k) {
                e._d1 += (j - (h + k)) * (m ? -1 : 1);
                f *= 1.4;
                for (h = 0; h < e.numSlides; h++) e.slides[h].positionSet = !1;
            }
            e._c = f;
            e._n2(!0);
            a || (l = !0);
            d = (-g - e._d1) * e._w;
            l ? setTimeout(function() {
                e._j4 = !1;
                e._x3(d, b, !1, c);
                e.ev.trigger("rsOnUpdateNav");
            }, 0) : (e._x3(d, b, !1, c), e.ev.trigger("rsOnUpdateNav"));
        },
        _f2: function() {
            this.st.arrowsNav && (1 >= this.numSlides ? (this._c2.css("display", "none"), this._d2.css("display", "none")) : (this._c2.css("display", "block"), 
            this._d2.css("display", "block"), !this._z && !this.st.loopRewind && (0 === this.currSlideId ? this._c2.addClass("rsArrowDisabled") : this._c2.removeClass("rsArrowDisabled"), 
            this.currSlideId === this.numSlides - 1 ? this._d2.addClass("rsArrowDisabled") : this._d2.removeClass("rsArrowDisabled"))));
        },
        _x3: function(b, f, c, g, a) {
            function e() {
                var a;
                if (j && (a = j.data("rsTimeout"))) j !== h && j.css({
                    opacity: 0,
                    display: "none",
                    zIndex: 0
                }), clearTimeout(a), j.data("rsTimeout", "");
                if (a = h.data("rsTimeout")) clearTimeout(a), h.data("rsTimeout", "");
            }
            var d = this, j, h, k = {};
            isNaN(d._c) && (d._c = 400);
            d._p = d._h3 = b;
            d.ev.trigger("rsBeforeAnimStart");
            d._e ? d._l ? (d._c = parseInt(d._c, 10), c = d._g + d._v1, k[d._g + d._u1] = d._c + "ms", 
            k[c] = g ? l.rsCSS3Easing[d.st.easeInOut] : l.rsCSS3Easing[d.st.easeOut], d._p1.css(k), 
            g || !d.hasTouch ? setTimeout(function() {
                d._p3(b);
            }, 5) : d._p3(b)) : (d._c = d.st.transitionSpeed, j = d._g4, h = d._r1, h.data("rsTimeout") && h.css("opacity", 0), 
            e(), j && j.data("rsTimeout", setTimeout(function() {
                k[d._g + d._u1] = "0ms";
                k.zIndex = 0;
                k.display = "none";
                j.data("rsTimeout", "");
                j.css(k);
                setTimeout(function() {
                    j.css("opacity", 0);
                }, 16);
            }, d._c + 60)), k.display = "block", k.zIndex = d._m, k.opacity = 0, k[d._g + d._u1] = "0ms", 
            k[d._g + d._v1] = l.rsCSS3Easing[d.st.easeInOut], h.css(k), h.data("rsTimeout", setTimeout(function() {
                h.css(d._g + d._u1, d._c + "ms");
                h.data("rsTimeout", setTimeout(function() {
                    h.css("opacity", 1);
                    h.data("rsTimeout", "");
                }, 20));
            }, 20))) : d._l ? (k[d._h ? d._x1 : d._w1] = b + "px", d._p1.animate(k, d._c, g ? d.st.easeInOut : d.st.easeOut)) : (j = d._g4, 
            h = d._r1, h.stop(!0, !0).css({
                opacity: 0,
                display: "block",
                zIndex: d._m
            }), d._c = d.st.transitionSpeed, h.animate({
                opacity: 1
            }, d._c, d.st.easeInOut), e(), j && j.data("rsTimeout", setTimeout(function() {
                j.stop(!0, !0).css({
                    opacity: 0,
                    display: "none",
                    zIndex: 0
                });
            }, d._c + 60)));
            d._r2 = !0;
            d.loadingTimeout && clearTimeout(d.loadingTimeout);
            d.loadingTimeout = a ? setTimeout(function() {
                d.loadingTimeout = null;
                a.call();
            }, d._c + 60) : setTimeout(function() {
                d.loadingTimeout = null;
                d._k4(f);
            }, d._c + 60);
        },
        _u2: function(b) {
            this._r2 = !1;
            clearTimeout(this.loadingTimeout);
            if (this._l) if (this._e) {
                if (!b) {
                    b = this._p;
                    var f = this._h3 = this._l4();
                    this._p1.css(this._g + this._u1, "0ms");
                    b !== f && this._p3(f);
                }
            } else this._p1.stop(!0), this._p = parseInt(this._p1.css(this._x1), 10); else 20 < this._m ? this._m = 10 : this._m++;
        },
        _l4: function() {
            var b = window.getComputedStyle(this._p1.get(0), null).getPropertyValue(this._g + "transform").replace(/^matrix\(/i, "").split(/, |\)$/g), f = 0 === b[0].indexOf("matrix3d");
            return parseInt(b[this._h ? f ? 12 : 4 : f ? 13 : 5], 10);
        },
        _m4: function(b, f) {
            return this._e ? this._y1 + (f ? b + this._z1 + 0 : 0 + this._z1 + b) + this._a2 : b;
        },
        _k4: function() {
            this._l || (this._r1.css("z-index", 0), this._m = 10);
            this._r2 = !1;
            this.staticSlideId = this.currSlideId;
            this._n2();
            this._n4 = !1;
            this.ev.trigger("rsAfterSlideChange");
        },
        _i4: function(b, f) {
            var c = this, g = (-c._u - c._d1) * c._w;
            if (!(0 === c.numSlides || c._r2)) if (c.st.loopRewind) c.goTo("left" === b ? c.numSlides - 1 : 0, f); else if (c._l) {
                c._c = 200;
                var a = function() {
                    c._r2 = !1;
                };
                c._x3(g + ("left" === b ? 30 : -30), "", !1, !0, function() {
                    c._r2 = !1;
                    c._x3(g, "", !1, !0, a);
                });
            }
        },
        _q2: function(b) {
            if (!b.isRendered) {
                var f = b.content, c = "rsMainSlideImage", g, a = this.st.imageAlignCenter, e = this.st.imageScaleMode, d;
                b.videoURL && (c = "rsVideoContainer", "fill" !== e ? g = !0 : (d = f, d.hasClass(c) || (d = d.find("." + c)), 
                d.css({
                    width: "100%",
                    height: "100%"
                }), c = "rsMainSlideImage"));
                f.hasClass(c) || (f = f.find("." + c));
                if (f) {
                    var j = b.iW, c = b.iH;
                    b.isRendered = !0;
                    if ("none" !== e || a) {
                        b = "fill" !== e ? this._d4 : 0;
                        d = this._b4 - 2 * b;
                        var h = this._c4 - 2 * b, k, l, m = {};
                        if ("fit-if-smaller" === e && (j > d || c > h)) e = "fit";
                        if ("fill" === e || "fit" === e) k = d / j, l = h / c, k = "fill" == e ? k > l ? k : l : "fit" == e ? k < l ? k : l : 1, 
                        j = Math.ceil(j * k, 10), c = Math.ceil(c * k, 10);
                        "none" !== e && (m.width = j, m.height = c, g && f.find(".rsImg").css({
                            width: "100%",
                            height: "100%"
                        }));
                        a && (m.marginLeft = Math.floor((d - j) / 2) + b, m.marginTop = Math.floor((h - c) / 2) + b);
                        f.css(m);
                    }
                }
            }
        }
    };
    l.rsProto = t.prototype;
    l.fn.royalSlider = function(b) {
        var f = arguments;
        return this.each(function() {
            var c = l(this);
            if ("object" === typeof b || !b) c.data("royalSlider") || c.data("royalSlider", new t(c, b)); else if ((c = c.data("royalSlider")) && c[b]) return c[b].apply(c, Array.prototype.slice.call(f, 1));
        });
    };
    l.fn.royalSlider.defaults = {
        slidesSpacing: 8,
        startSlideId: 0,
        loop: !1,
        loopRewind: !1,
        numImagesToPreload: 4,
        fadeinLoadedSlide: !0,
        slidesOrientation: "horizontal",
        transitionType: "move",
        transitionSpeed: 600,
        controlNavigation: "bullets",
        controlsInside: !0,
        arrowsNav: !0,
        arrowsNavAutoHide: !0,
        navigateByClick: !0,
        randomizeSlides: !1,
        sliderDrag: !0,
        sliderTouch: !0,
        keyboardNavEnabled: !1,
        fadeInAfterLoaded: !0,
        allowCSS3: !0,
        allowCSS3OnWebkit: !0,
        addActiveClass: !1,
        autoHeight: !1,
        easeOut: "easeOutSine",
        easeInOut: "easeInOutSine",
        minSlideOffset: 10,
        imageScaleMode: "fit-if-smaller",
        imageAlignCenter: !0,
        imageScalePadding: 4,
        usePreloader: !0,
        autoScaleSlider: !1,
        autoScaleSliderWidth: 800,
        autoScaleSliderHeight: 400,
        autoScaleHeight: !0,
        arrowsNavHideOnTouch: !1,
        globalCaption: !1,
        slidesDiff: 2
    };
    l.rsCSS3Easing = {
        easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
        easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)"
    };
    l.extend(jQuery.easing, {
        easeInOutSine: function(b, f, c, g, a) {
            return -g / 2 * (Math.cos(Math.PI * f / a) - 1) + c;
        },
        easeOutSine: function(b, f, c, g, a) {
            return g * Math.sin(f / a * (Math.PI / 2)) + c;
        },
        easeOutCubic: function(b, f, c, g, a) {
            return g * ((f = f / a - 1) * f * f + 1) + c;
        }
    });
})(jQuery, window);

(function(c) {
    c.rsProto._o4 = function() {
        var b, a = this;
        if (a.st.addActiveClass) a.ev.on("rsOnUpdateNav", function() {
            b && clearTimeout(b);
            b = setTimeout(function() {
                a._g4 && a._g4.removeClass("rsActiveSlide");
                a._r1 && a._r1.addClass("rsActiveSlide");
                b = null;
            }, 50);
        });
    };
    c.rsModules.activeClass = c.rsProto._o4;
})(jQuery);

(function(j) {
    j.extend(j.rsProto, {
        _p4: function() {
            function l() {
                var g = a.currSlide;
                if (a.currSlide && a.currSlide.isLoaded && a._t4 !== g) {
                    if (0 < a._s4.length) {
                        for (b = 0; b < a._s4.length; b++) clearTimeout(a._s4[b]);
                        a._s4 = [];
                    }
                    if (0 < a._r4.length) {
                        var f;
                        for (b = 0; b < a._r4.length; b++) if (f = a._r4[b]) a._e ? (f.block.css(a._g + a._u1, "0s"), 
                        f.block.css(f.css)) : f.block.stop(!0).css(f.css), a._t4 = null, g.animBlocksDisplayed = !1;
                        a._r4 = [];
                    }
                    g.animBlocks && (g.animBlocksDisplayed = !0, a._t4 = g, a._u4(g.animBlocks));
                }
            }
            var a = this, b;
            a._q4 = {
                fadeEffect: !0,
                moveEffect: "top",
                moveOffset: 20,
                speed: 400,
                easing: "easeOutSine",
                delay: 200
            };
            a.st.block = j.extend({}, a._q4, a.st.block);
            a._r4 = [];
            a._s4 = [];
            a.ev.on("rsAfterInit", function() {
                l();
            });
            a.ev.on("rsBeforeParseNode", function(a, b, d) {
                b = j(b);
                d.animBlocks = b.find(".rsABlock").css("display", "none");
                d.animBlocks.length || (d.animBlocks = b.hasClass("rsABlock") ? b.css("display", "none") : !1);
            });
            a.ev.on("rsAfterContentSet", function(b, f) {
                f.id === a.slides[a.currSlideId].id && setTimeout(function() {
                    l();
                }, a.st.fadeinLoadedSlide ? 300 : 0);
            });
            a.ev.on("rsAfterSlideChange", function() {
                l();
            });
        },
        _v4: function(j, a) {
            setTimeout(function() {
                j.css(a);
            }, 6);
        },
        _u4: function(l) {
            var a = this, b, g, f, d, h, e, m;
            a._s4 = [];
            l.each(function(l) {
                b = j(this);
                g = {};
                f = {};
                d = null;
                var c = b.attr("data-move-offset"), c = c ? parseInt(c, 10) : a.st.block.moveOffset;
                if (0 < c && ((e = b.data("move-effect")) ? (e = e.toLowerCase(), "none" === e ? e = !1 : "left" !== e && "top" !== e && "bottom" !== e && "right" !== e && (e = a.st.block.moveEffect, 
                "none" === e && (e = !1))) : e = a.st.block.moveEffect, e && "none" !== e)) {
                    var n;
                    n = "right" === e || "left" === e ? !0 : !1;
                    var k;
                    m = !1;
                    a._e ? (k = 0, h = a._x1) : (n ? isNaN(parseInt(b.css("right"), 10)) ? h = "left" : (h = "right", 
                    m = !0) : isNaN(parseInt(b.css("bottom"), 10)) ? h = "top" : (h = "bottom", m = !0), 
                    h = "margin-" + h, m && (c = -c), a._e ? k = parseInt(b.css(h), 10) : (k = b.data("rs-start-move-prop"), 
                    void 0 === k && (k = parseInt(b.css(h), 10), b.data("rs-start-move-prop", k))));
                    f[h] = a._m4("top" === e || "left" === e ? k - c : k + c, n);
                    g[h] = a._m4(k, n);
                }
                if (c = b.attr("data-fade-effect")) {
                    if ("none" === c.toLowerCase() || "false" === c.toLowerCase()) c = !1;
                } else c = a.st.block.fadeEffect;
                c && (f.opacity = 0, g.opacity = 1);
                if (c || e) d = {}, d.hasFade = Boolean(c), Boolean(e) && (d.moveProp = h, d.hasMove = !0), 
                d.speed = b.data("speed"), isNaN(d.speed) && (d.speed = a.st.block.speed), d.easing = b.data("easing"), 
                d.easing || (d.easing = a.st.block.easing), d.css3Easing = j.rsCSS3Easing[d.easing], 
                d.delay = b.data("delay"), isNaN(d.delay) && (d.delay = a.st.block.delay * l);
                c = {};
                a._e && (c[a._g + a._u1] = "0ms");
                c.moveProp = g.moveProp;
                c.opacity = g.opacity;
                c.display = "none";
                a._r4.push({
                    block: b,
                    css: c
                });
                a._v4(b, f);
                a._s4.push(setTimeout(function(b, d, c, e) {
                    return function() {
                        b.css("display", "block");
                        if (c) {
                            var g = {};
                            if (a._e) {
                                var f = "";
                                c.hasMove && (f += c.moveProp);
                                c.hasFade && (c.hasMove && (f += ", "), f += "opacity");
                                g[a._g + a._t1] = f;
                                g[a._g + a._u1] = c.speed + "ms";
                                g[a._g + a._v1] = c.css3Easing;
                                b.css(g);
                                setTimeout(function() {
                                    b.css(d);
                                }, 24);
                            } else setTimeout(function() {
                                b.animate(d, c.speed, c.easing);
                            }, 16);
                        }
                        delete a._s4[e];
                    };
                }(b, g, d, l), 6 >= d.delay ? 12 : d.delay));
            });
        }
    });
    j.rsModules.animatedBlocks = j.rsProto._p4;
})(jQuery);

(function(b) {
    b.extend(b.rsProto, {
        _w4: function() {
            var a = this;
            if (a.st.autoHeight) {
                var b, d, e, c = function(c) {
                    e = a.slides[a.currSlideId];
                    if (b = e.holder) if ((d = b.height()) && void 0 !== d) a._c4 = d, a._e || !c ? a._e1.css("height", d) : a._e1.stop(!0, !0).animate({
                        height: d
                    }, a.st.transitionSpeed);
                };
                a.ev.on("rsMaybeSizeReady.rsAutoHeight", function(a, b) {
                    e === b && c();
                });
                a.ev.on("rsAfterContentSet.rsAutoHeight", function(a, b) {
                    e === b && c();
                });
                a.slider.addClass("rsAutoHeight");
                a.ev.one("rsAfterInit", function() {
                    setTimeout(function() {
                        c(!1);
                        setTimeout(function() {
                            a.slider.append('<div style="clear:both; float: none;"></div>');
                            a._e && a._e1.css(a._g + "transition", "height " + a.st.transitionSpeed + "ms ease-in-out");
                        }, 16);
                    }, 16);
                });
                a.ev.on("rsBeforeAnimStart", function() {
                    c(!0);
                });
                a.ev.on("rsBeforeSizeSet", function() {
                    setTimeout(function() {
                        c(!1);
                    }, 16);
                });
            }
        }
    });
    b.rsModules.autoHeight = b.rsProto._w4;
})(jQuery);

(function(b) {
    b.extend(b.rsProto, {
        _x4: function() {
            var a = this, d;
            a._y4 = {
                enabled: !1,
                stopAtAction: !0,
                pauseOnHover: !0,
                delay: 2e3
            };
            !a.st.autoPlay && a.st.autoplay && (a.st.autoPlay = a.st.autoplay);
            a.st.autoPlay = b.extend({}, a._y4, a.st.autoPlay);
            a.st.autoPlay.enabled && (a.ev.on("rsBeforeParseNode", function(a, c, f) {
                c = b(c);
                if (d = c.attr("data-rsDelay")) f.customDelay = parseInt(d, 10);
            }), a.ev.one("rsAfterInit", function() {
                a._z4();
            }), a.ev.on("rsBeforeDestroy", function() {
                a.stopAutoPlay();
                a.slider.off("mouseenter mouseleave");
                b(window).off("blur" + a.ns + " focus" + a.ns);
            }));
        },
        _z4: function() {
            var a = this;
            a.startAutoPlay();
            a.ev.on("rsAfterContentSet", function(b, e) {
                !a._l2 && !a._r2 && a._a5 && e === a.currSlide && a._b5();
            });
            a.ev.on("rsDragRelease", function() {
                a._a5 && a._c5 && (a._c5 = !1, a._b5());
            });
            a.ev.on("rsAfterSlideChange", function() {
                a._a5 && a._c5 && (a._c5 = !1, a.currSlide.isLoaded && a._b5());
            });
            a.ev.on("rsDragStart", function() {
                a._a5 && (a.st.autoPlay.stopAtAction ? a.stopAutoPlay() : (a._c5 = !0, a._d5()));
            });
            a.ev.on("rsBeforeMove", function(b, e, c) {
                a._a5 && (c && a.st.autoPlay.stopAtAction ? a.stopAutoPlay() : (a._c5 = !0, a._d5()));
            });
            a._e5 = !1;
            a.ev.on("rsVideoStop", function() {
                a._a5 && (a._e5 = !1, a._b5());
            });
            a.ev.on("rsVideoPlay", function() {
                a._a5 && (a._c5 = !1, a._d5(), a._e5 = !0);
            });
            b(window).on("blur" + a.ns, function() {
                a._a5 && (a._c5 = !0, a._d5());
            }).on("focus" + a.ns, function() {
                a._a5 && a._c5 && (a._c5 = !1, a._b5());
            });
            a.st.autoPlay.pauseOnHover && (a._f5 = !1, a.slider.hover(function() {
                a._a5 && (a._c5 = !1, a._d5(), a._f5 = !0);
            }, function() {
                a._a5 && (a._f5 = !1, a._b5());
            }));
        },
        toggleAutoPlay: function() {
            this._a5 ? this.stopAutoPlay() : this.startAutoPlay();
        },
        startAutoPlay: function() {
            this._a5 = !0;
            this.currSlide.isLoaded && this._b5();
        },
        stopAutoPlay: function() {
            this._e5 = this._f5 = this._c5 = this._a5 = !1;
            this._d5();
        },
        _b5: function() {
            var a = this;
            !a._f5 && !a._e5 && (a._g5 = !0, a._h5 && clearTimeout(a._h5), a._h5 = setTimeout(function() {
                var b;
                !a._z && !a.st.loopRewind && (b = !0, a.st.loopRewind = !0);
                a.next(!0);
                b && (a.st.loopRewind = !1);
            }, !a.currSlide.customDelay ? a.st.autoPlay.delay : a.currSlide.customDelay));
        },
        _d5: function() {
            !this._f5 && !this._e5 && (this._g5 = !1, this._h5 && (clearTimeout(this._h5), this._h5 = null));
        }
    });
    b.rsModules.autoplay = b.rsProto._x4;
})(jQuery);

(function(c) {
    c.extend(c.rsProto, {
        _i5: function() {
            var a = this;
            "bullets" === a.st.controlNavigation && (a.ev.one("rsAfterPropsSetup", function() {
                a._j5 = !0;
                a.slider.addClass("rsWithBullets");
                for (var b = '<div class="rsNav rsBullets">', e = 0; e < a.numSlides; e++) b += '<div class="rsNavItem rsBullet"><span></span></div>';
                a._k5 = b = c(b + "</div>");
                a._l5 = b.appendTo(a.slider).children();
                a._k5.on("click.rs", ".rsNavItem", function() {
                    a._m5 || a.goTo(c(this).index());
                });
            }), a.ev.on("rsOnAppendSlide", function(b, c, d) {
                d >= a.numSlides ? a._k5.append('<div class="rsNavItem rsBullet"><span></span></div>') : a._l5.eq(d).before('<div class="rsNavItem rsBullet"><span></span></div>');
                a._l5 = a._k5.children();
            }), a.ev.on("rsOnRemoveSlide", function(b, c) {
                var d = a._l5.eq(c);
                d && d.length && (d.remove(), a._l5 = a._k5.children());
            }), a.ev.on("rsOnUpdateNav", function() {
                var b = a.currSlideId;
                a._n5 && a._n5.removeClass("rsNavSelected");
                b = a._l5.eq(b);
                b.addClass("rsNavSelected");
                a._n5 = b;
            }));
        }
    });
    c.rsModules.bullets = c.rsProto._i5;
})(jQuery);

(function(b) {
    b.extend(b.rsProto, {
        _o5: function() {
            var a = this, g, c, e;
            a._p5 = {
                enabled: !1,
                change: !1,
                prefix: ""
            };
            a.st.deeplinking = b.extend({}, a._p5, a.st.deeplinking);
            if (a.st.deeplinking.enabled) {
                var h = a.st.deeplinking.change, d = "#" + a.st.deeplinking.prefix, f = function() {
                    var a = window.location.hash;
                    return a && (a = parseInt(a.substring(d.length), 10), 0 <= a) ? a - 1 : -1;
                }, j = f();
                -1 !== j && (a.st.startSlideId = j);
                h && (b(window).on("hashchange" + a.ns, function() {
                    if (!g) {
                        var b = f();
                        0 > b || (b > a.numSlides - 1 && (b = a.numSlides - 1), a.goTo(b));
                    }
                }), a.ev.on("rsBeforeAnimStart", function() {
                    c && clearTimeout(c);
                    e && clearTimeout(e);
                }), a.ev.on("rsAfterSlideChange", function() {
                    c && clearTimeout(c);
                    e && clearTimeout(e);
                    e = setTimeout(function() {
                        g = !0;
                        window.location.replace(("" + window.location).split("#")[0] + d + (a.currSlideId + 1));
                        c = setTimeout(function() {
                            g = !1;
                            c = null;
                        }, 60);
                    }, 400);
                }));
                a.ev.on("rsBeforeDestroy", function() {
                    c = e = null;
                    h && b(window).off("hashchange" + a.ns);
                });
            }
        }
    });
    b.rsModules.deeplinking = b.rsProto._o5;
})(jQuery);

(function(b, a, g) {
    function c(a) {
        a = a || location.href;
        return "#" + a.replace(/^[^#]*#?(.*)$/, "$1");
    }
    "$:nomunge";
    var e = document, h, d = b.event.special, f = e.documentMode, j = "onhashchange" in a && (f === g || 7 < f);
    b.fn.hashchange = function(a) {
        return a ? this.bind("hashchange", a) : this.trigger("hashchange");
    };
    b.fn.hashchange.delay = 50;
    d.hashchange = b.extend(d.hashchange, {
        setup: function() {
            if (j) return !1;
            b(h.start);
        },
        teardown: function() {
            if (j) return !1;
            b(h.stop);
        }
    });
    var p = function() {
        var e = c(), d = r(n);
        e !== n ? (q(n = e, d), b(a).trigger("hashchange")) : d !== n && (location.href = location.href.replace(/#.*/, "") + d);
        l = setTimeout(p, b.fn.hashchange.delay);
    }, d = {}, l, n = c(), q = f = function(a) {
        return a;
    }, r = f;
    d.start = function() {
        l || p();
    };
    d.stop = function() {
        l && clearTimeout(l);
        l = g;
    };
    if (a.attachEvent && !a.addEventListener && !j) {
        var k, m;
        d.start = function() {
            k || (m = (m = b.fn.hashchange.src) && m + c(), k = b('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                m || q(c());
                p();
            }).attr("src", m || "javascript:0").insertAfter("body")[0].contentWindow, e.onpropertychange = function() {
                try {
                    "title" === event.propertyName && (k.document.title = e.title);
                } catch (a) {}
            });
        };
        d.stop = f;
        r = function() {
            return c(k.location.href);
        };
        q = function(a, d) {
            var c = k.document, f = b.fn.hashchange.domain;
            a !== d && (c.title = e.title, c.open(), f && c.write('<script>document.domain="' + f + '"</script>'), 
            c.close(), k.location.hash = a);
        };
    }
    h = d;
})(jQuery, this);

(function(c) {
    c.extend(c.rsProto, {
        _q5: function() {
            var a = this;
            a._r5 = {
                enabled: !1,
                keyboardNav: !0,
                buttonFS: !0,
                nativeFS: !1,
                doubleTap: !0
            };
            a.st.fullscreen = c.extend({}, a._r5, a.st.fullscreen);
            if (a.st.fullscreen.enabled) a.ev.one("rsBeforeSizeSet", function() {
                a._s5();
            });
        },
        _s5: function() {
            var a = this;
            a._t5 = !a.st.keyboardNavEnabled && a.st.fullscreen.keyboardNav;
            if (a.st.fullscreen.nativeFS) {
                a._u5 = {
                    supportsFullScreen: !1,
                    isFullScreen: function() {
                        return !1;
                    },
                    requestFullScreen: function() {},
                    cancelFullScreen: function() {},
                    fullScreenEventName: "",
                    prefix: ""
                };
                var b = [ "webkit", "moz", "o", "ms", "khtml" ];
                if (!a.isAndroid) if ("undefined" != typeof document.cancelFullScreen) a._u5.supportsFullScreen = !0; else for (var d = 0; d < b.length; d++) if (a._u5.prefix = b[d], 
                "undefined" != typeof document[a._u5.prefix + "CancelFullScreen"]) {
                    a._u5.supportsFullScreen = !0;
                    break;
                }
                a._u5.supportsFullScreen ? (a.nativeFS = !0, a._u5.fullScreenEventName = a._u5.prefix + "fullscreenchange" + a.ns, 
                a._u5.isFullScreen = function() {
                    switch (this.prefix) {
                      case "":
                        return document.fullScreen;

                      case "webkit":
                        return document.webkitIsFullScreen;

                      default:
                        return document[this.prefix + "FullScreen"];
                    }
                }, a._u5.requestFullScreen = function(a) {
                    return "" === this.prefix ? a.requestFullScreen() : a[this.prefix + "RequestFullScreen"]();
                }, a._u5.cancelFullScreen = function() {
                    return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]();
                }) : a._u5 = !1;
            }
            a.st.fullscreen.buttonFS && (a._v5 = c('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(a._o1).on("click.rs", function() {
                a.isFullscreen ? a.exitFullscreen() : a.enterFullscreen();
            }));
        },
        enterFullscreen: function(a) {
            var b = this;
            if (b._u5) if (a) b._u5.requestFullScreen(c("html")[0]); else {
                b._b.on(b._u5.fullScreenEventName, function() {
                    b._u5.isFullScreen() ? b.enterFullscreen(!0) : b.exitFullscreen(!0);
                });
                b._u5.requestFullScreen(c("html")[0]);
                return;
            }
            if (!b._w5) {
                b._w5 = !0;
                b._b.on("keyup" + b.ns + "fullscreen", function(a) {
                    27 === a.keyCode && b.exitFullscreen();
                });
                b._t5 && b._b2();
                a = c(window);
                b._x5 = a.scrollTop();
                b._y5 = a.scrollLeft();
                b._z5 = c("html").attr("style");
                b._a6 = c("body").attr("style");
                b._b6 = b.slider.attr("style");
                c("body, html").css({
                    overflow: "hidden",
                    height: "100%",
                    width: "100%",
                    margin: "0",
                    padding: "0"
                });
                b.slider.addClass("rsFullscreen");
                var d;
                for (d = 0; d < b.numSlides; d++) a = b.slides[d], a.isRendered = !1, a.bigImage && (a.isBig = !0, 
                a.isMedLoaded = a.isLoaded, a.isMedLoading = a.isLoading, a.medImage = a.image, 
                a.medIW = a.iW, a.medIH = a.iH, a.slideId = -99, a.bigImage !== a.medImage && (a.sizeType = "big"), 
                a.isLoaded = a.isBigLoaded, a.isLoading = !1, a.image = a.bigImage, a.images[0] = a.bigImage, 
                a.iW = a.bigIW, a.iH = a.bigIH, a.isAppended = a.contentAdded = !1, b._c6(a));
                b.isFullscreen = !0;
                b._w5 = !1;
                b.updateSliderSize();
                b.ev.trigger("rsEnterFullscreen");
            }
        },
        exitFullscreen: function(a) {
            var b = this;
            if (b._u5) {
                if (!a) {
                    b._u5.cancelFullScreen(c("html")[0]);
                    return;
                }
                b._b.off(b._u5.fullScreenEventName);
            }
            if (!b._w5) {
                b._w5 = !0;
                b._b.off("keyup" + b.ns + "fullscreen");
                b._t5 && b._b.off("keydown" + b.ns);
                c("html").attr("style", b._z5 || "");
                c("body").attr("style", b._a6 || "");
                var d;
                for (d = 0; d < b.numSlides; d++) a = b.slides[d], a.isRendered = !1, a.bigImage && (a.isBig = !1, 
                a.slideId = -99, a.isBigLoaded = a.isLoaded, a.isBigLoading = a.isLoading, a.bigImage = a.image, 
                a.bigIW = a.iW, a.bigIH = a.iH, a.isLoaded = a.isMedLoaded, a.isLoading = !1, a.image = a.medImage, 
                a.images[0] = a.medImage, a.iW = a.medIW, a.iH = a.medIH, a.isAppended = a.contentAdded = !1, 
                b._c6(a, !0), a.bigImage !== a.medImage && (a.sizeType = "med"));
                b.isFullscreen = !1;
                a = c(window);
                a.scrollTop(b._x5);
                a.scrollLeft(b._y5);
                b._w5 = !1;
                b.slider.removeClass("rsFullscreen");
                b.updateSliderSize();
                setTimeout(function() {
                    b.updateSliderSize();
                }, 1);
                b.ev.trigger("rsExitFullscreen");
            }
        },
        _c6: function(a) {
            var b = !a.isLoaded && !a.isLoading ? '<a class="rsImg rsMainSlideImage" href="' + a.image + '"></a>' : '<img class="rsImg rsMainSlideImage" src="' + a.image + '"/>';
            a.content.hasClass("rsImg") ? a.content = c(b) : a.content.find(".rsImg").eq(0).replaceWith(b);
            !a.isLoaded && !a.isLoading && a.holder && a.holder.html(a.content);
        }
    });
    c.rsModules.fullscreen = c.rsProto._q5;
})(jQuery);

(function(b) {
    b.extend(b.rsProto, {
        _d6: function() {
            var a = this;
            a.st.globalCaption && (a.ev.on("rsAfterInit", function() {
                a.globalCaption = b('<div class="rsGCaption"></div>').appendTo(!a.st.globalCaptionInside ? a.slider : a._e1);
                a.globalCaption.html(a.currSlide.caption);
            }), a.ev.on("rsBeforeAnimStart", function() {
                a.globalCaption.html(a.currSlide.caption);
            }));
        }
    });
    b.rsModules.globalCaption = b.rsProto._d6;
})(jQuery);

(function(b) {
    b.extend(b.rsProto, {
        _e6: function() {
            var a = this;
            if (a.st.navAutoHide && !a.hasTouch) a.ev.one("rsAfterInit", function() {
                if (a._k5) {
                    a._k5.addClass("rsHidden");
                    var b = a.slider;
                    b.one("mousemove.controlnav", function() {
                        a._k5.removeClass("rsHidden");
                    });
                    b.hover(function() {
                        a._k5.removeClass("rsHidden");
                    }, function() {
                        a._k5.addClass("rsHidden");
                    });
                }
            });
        }
    });
    b.rsModules.autoHideNav = b.rsProto._e6;
})(jQuery);

(function(e) {
    e.extend(e.rsProto, {
        _f6: function() {
            var a = this;
            "tabs" === a.st.controlNavigation && (a.ev.on("rsBeforeParseNode", function(a, d, b) {
                d = e(d);
                b.thumbnail = d.find(".rsTmb").remove();
                b.thumbnail.length ? b.thumbnail = e(document.createElement("div")).append(b.thumbnail).html() : (b.thumbnail = d.attr("data-rsTmb"), 
                b.thumbnail || (b.thumbnail = d.find(".rsImg").attr("data-rsTmb")), b.thumbnail = b.thumbnail ? '<img src="' + b.thumbnail + '"/>' : "");
            }), a.ev.one("rsAfterPropsSetup", function() {
                a._g6();
            }), a.ev.on("rsOnAppendSlide", function(c, d, b) {
                b >= a.numSlides ? a._k5.append('<div class="rsNavItem rsTab">' + d.thumbnail + "</div>") : a._l5.eq(b).before('<div class="rsNavItem rsTab">' + item.thumbnail + "</div>");
                a._l5 = a._k5.children();
            }), a.ev.on("rsOnRemoveSlide", function(c, d) {
                var b = a._l5.eq(d);
                b && (b.remove(), a._l5 = a._k5.children());
            }), a.ev.on("rsOnUpdateNav", function() {
                var c = a.currSlideId;
                a._n5 && a._n5.removeClass("rsNavSelected");
                c = a._l5.eq(c);
                c.addClass("rsNavSelected");
                a._n5 = c;
            }));
        },
        _g6: function() {
            var a = this, c;
            a._j5 = !0;
            c = '<div class="rsNav rsTabs">';
            for (var d = 0; d < a.numSlides; d++) c += '<div class="rsNavItem rsTab">' + a.slides[d].thumbnail + "</div>";
            c = e(c + "</div>");
            a._k5 = c;
            a._l5 = c.children(".rsNavItem");
            a.slider.append(c);
            a._k5.click(function(b) {
                b = e(b.target).closest(".rsNavItem");
                b.length && a.goTo(b.index());
            });
        }
    });
    e.rsModules.tabs = e.rsProto._f6;
})(jQuery);

(function(f) {
    f.extend(f.rsProto, {
        _h6: function() {
            var a = this;
            "thumbnails" === a.st.controlNavigation && (a._i6 = {
                drag: !0,
                touch: !0,
                orientation: "horizontal",
                navigation: !0,
                arrows: !0,
                arrowLeft: null,
                arrowRight: null,
                spacing: 4,
                arrowsAutoHide: !1,
                appendSpan: !1,
                transitionSpeed: 600,
                autoCenter: !0,
                fitInViewport: !0,
                firstMargin: !0,
                paddingTop: 0,
                paddingBottom: 0
            }, a.st.thumbs = f.extend({}, a._i6, a.st.thumbs), a._j6 = !0, !1 === a.st.thumbs.firstMargin ? a.st.thumbs.firstMargin = 0 : !0 === a.st.thumbs.firstMargin && (a.st.thumbs.firstMargin = a.st.thumbs.spacing), 
            a.ev.on("rsBeforeParseNode", function(a, c, b) {
                c = f(c);
                b.thumbnail = c.find(".rsTmb").remove();
                b.thumbnail.length ? b.thumbnail = f(document.createElement("div")).append(b.thumbnail).html() : (b.thumbnail = c.attr("data-rsTmb"), 
                b.thumbnail || (b.thumbnail = c.find(".rsImg").attr("data-rsTmb")), b.thumbnail = b.thumbnail ? '<img src="' + b.thumbnail + '"/>' : "");
            }), a.ev.one("rsAfterPropsSetup", function() {
                a._k6();
            }), a._n5 = null, a.ev.on("rsOnUpdateNav", function() {
                var e = f(a._l5[a.currSlideId]);
                e !== a._n5 && (a._n5 && (a._n5.removeClass("rsNavSelected"), a._n5 = null), a._l6 && a._m6(a.currSlideId), 
                a._n5 = e.addClass("rsNavSelected"));
            }), a.ev.on("rsOnAppendSlide", function(e, c, b) {
                e = "<div" + a._n6 + ' class="rsNavItem rsThumb">' + a._o6 + c.thumbnail + "</div>";
                b >= a.numSlides ? a._s3.append(e) : a._l5.eq(b).before(e);
                a._l5 = a._s3.children();
                a.updateThumbsSize();
            }), a.ev.on("rsOnRemoveSlide", function(e, c) {
                var b = a._l5.eq(c);
                b && (b.remove(), a._l5 = a._s3.children(), a.updateThumbsSize());
            }));
        },
        _k6: function() {
            var a = this, e = "rsThumbs", c = a.st.thumbs, b = "", g, d, h = c.spacing;
            a._j5 = !0;
            a._e3 = "vertical" === c.orientation ? !1 : !0;
            a._n6 = g = h ? ' style="margin-' + (a._e3 ? "right" : "bottom") + ":" + h + 'px;"' : "";
            a._i3 = 0;
            a._p6 = !1;
            a._m5 = !1;
            a._l6 = !1;
            a._q6 = c.arrows && c.navigation;
            d = a._e3 ? "Hor" : "Ver";
            a.slider.addClass("rsWithThumbs rsWithThumbs" + d);
            b += '<div class="rsNav rsThumbs rsThumbs' + d + '"><div class="' + e + 'Container">';
            a._o6 = c.appendSpan ? '<span class="thumbIco"></span>' : "";
            for (var j = 0; j < a.numSlides; j++) d = a.slides[j], b += "<div" + g + ' class="rsNavItem rsThumb">' + d.thumbnail + a._o6 + "</div>";
            b = f(b + "</div></div>");
            g = {};
            c.paddingTop && (g[a._e3 ? "paddingTop" : "paddingLeft"] = c.paddingTop);
            c.paddingBottom && (g[a._e3 ? "paddingBottom" : "paddingRight"] = c.paddingBottom);
            b.css(g);
            a._s3 = f(b).find("." + e + "Container");
            a._q6 && (e += "Arrow", c.arrowLeft ? a._r6 = c.arrowLeft : (a._r6 = f('<div class="' + e + " " + e + 'Left"><div class="' + e + 'Icn"></div></div>'), 
            b.append(a._r6)), c.arrowRight ? a._s6 = c.arrowRight : (a._s6 = f('<div class="' + e + " " + e + 'Right"><div class="' + e + 'Icn"></div></div>'), 
            b.append(a._s6)), a._r6.click(function() {
                var b = (Math.floor(a._i3 / a._t6) + a._u6) * a._t6;
                a._a4(b > a._n3 ? a._n3 : b);
            }), a._s6.click(function() {
                var b = (Math.floor(a._i3 / a._t6) - a._u6) * a._t6;
                a._a4(b < a._o3 ? a._o3 : b);
            }), c.arrowsAutoHide && !a.hasTouch && (a._r6.css("opacity", 0), a._s6.css("opacity", 0), 
            b.one("mousemove.rsarrowshover", function() {
                a._l6 && (a._r6.css("opacity", 1), a._s6.css("opacity", 1));
            }), b.hover(function() {
                a._l6 && (a._r6.css("opacity", 1), a._s6.css("opacity", 1));
            }, function() {
                a._l6 && (a._r6.css("opacity", 0), a._s6.css("opacity", 0));
            })));
            a._k5 = b;
            a._l5 = a._s3.children();
            a.msEnabled && a.st.thumbs.navigation && a._s3.css("-ms-touch-action", a._e3 ? "pan-y" : "pan-x");
            a.slider.append(b);
            a._w3 = !0;
            a._v6 = h;
            c.navigation && a._e && a._s3.css(a._g + "transition-property", a._g + "transform");
            a._k5.on("click.rs", ".rsNavItem", function() {
                a._m5 || a.goTo(f(this).index());
            });
            a.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs", function() {
                a._w6 = a._e3 ? a._c4 : a._b4;
                a.updateThumbsSize(!0);
            });
        },
        updateThumbsSize: function() {
            var a = this, e = a._l5.first(), c = {}, b = a._l5.length;
            a._t6 = (a._e3 ? e.outerWidth() : e.outerHeight()) + a._v6;
            a._y3 = b * a._t6 - a._v6;
            c[a._e3 ? "width" : "height"] = a._y3 + a._v6;
            a._z3 = a._e3 ? a._k5.width() : a._k5.height();
            a._o3 = -(a._y3 - a._z3) - a.st.thumbs.firstMargin;
            a._n3 = a.st.thumbs.firstMargin;
            a._u6 = Math.floor(a._z3 / a._t6);
            if (a._y3 < a._z3) a.st.thumbs.autoCenter && a._q3((a._z3 - a._y3) / 2), a.st.thumbs.arrows && a._r6 && (a._r6.addClass("rsThumbsArrowDisabled"), 
            a._s6.addClass("rsThumbsArrowDisabled")), a._l6 = !1, a._m5 = !1, a._k5.off(a._j1); else if (a.st.thumbs.navigation && !a._l6 && (a._l6 = !0, 
            !a.hasTouch && a.st.thumbs.drag || a.hasTouch && a.st.thumbs.touch)) a._m5 = !0, 
            a._k5.on(a._j1, function(b) {
                a._g2(b, !0);
            });
            a._e && (c[a._g + "transition-duration"] = "0ms");
            a._s3.css(c);
            if (a._w3 && (a.isFullscreen || a.st.thumbs.fitInViewport)) a._e3 ? a._c4 = a._w6 - a._k5.outerHeight() : a._b4 = a._w6 - a._k5.outerWidth();
        },
        setThumbsOrientation: function(a, e) {
            this._w3 && (this.st.thumbs.orientation = a, this._k5.remove(), this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"), 
            this._k6(), this._k5.off(this._j1), e || this.updateSliderSize(!0));
        },
        _q3: function(a) {
            this._i3 = a;
            this._e ? this._s3.css(this._x1, this._y1 + (this._e3 ? a + this._z1 + 0 : 0 + this._z1 + a) + this._a2) : this._s3.css(this._e3 ? this._x1 : this._w1, a);
        },
        _a4: function(a, e, c, b, g) {
            var d = this;
            if (d._l6) {
                e || (e = d.st.thumbs.transitionSpeed);
                d._i3 = a;
                d._x6 && clearTimeout(d._x6);
                d._p6 && (d._e || d._s3.stop(), c = !0);
                var h = {};
                d._p6 = !0;
                d._e ? (h[d._g + "transition-duration"] = e + "ms", h[d._g + "transition-timing-function"] = c ? f.rsCSS3Easing[d.st.easeOut] : f.rsCSS3Easing[d.st.easeInOut], 
                d._s3.css(h), d._q3(a)) : (h[d._e3 ? d._x1 : d._w1] = a + "px", d._s3.animate(h, e, c ? "easeOutCubic" : d.st.easeInOut));
                b && (d._i3 = b);
                d._y6();
                d._x6 = setTimeout(function() {
                    d._p6 = !1;
                    g && (d._a4(b, g, !0), g = null);
                }, e);
            }
        },
        _y6: function() {
            this._q6 && (this._i3 === this._n3 ? this._r6.addClass("rsThumbsArrowDisabled") : this._r6.removeClass("rsThumbsArrowDisabled"), 
            this._i3 === this._o3 ? this._s6.addClass("rsThumbsArrowDisabled") : this._s6.removeClass("rsThumbsArrowDisabled"));
        },
        _m6: function(a, e) {
            var c = 0, b, f = a * this._t6 + 2 * this._t6 - this._v6 + this._n3, d = Math.floor(this._i3 / this._t6);
            this._l6 && (this._j6 && (e = !0, this._j6 = !1), f + this._i3 > this._z3 ? (a === this.numSlides - 1 && (c = 1), 
            d = -a + this._u6 - 2 + c, b = d * this._t6 + this._z3 % this._t6 + this._v6 - this._n3) : 0 !== a ? (a - 1) * this._t6 <= -this._i3 + this._n3 && a - 1 <= this.numSlides - this._u6 && (b = (-a + 1) * this._t6 + this._n3) : b = this._n3, 
            b !== this._i3 && (c = void 0 === b ? this._i3 : b, c > this._n3 ? this._q3(this._n3) : c < this._o3 ? this._q3(this._o3) : void 0 !== b && (e ? this._q3(b) : this._a4(b))), 
            this._y6());
        }
    });
    f.rsModules.thumbnails = f.rsProto._h6;
})(jQuery);

(function(f) {
    f.extend(f.rsProto, {
        _z6: function() {
            var a = this;
            a._a7 = {
                autoHideArrows: !0,
                autoHideControlNav: !1,
                autoHideBlocks: !1,
                autoHideCaption: !1,
                disableCSS3inFF: !0,
                youTubeCode: '<iframe src="http://www.youtube.com/embed/%id%?rel=1&autoplay=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>',
                vimeoCode: '<iframe src="http://player.vimeo.com/video/%id%?byline=0&amp;portrait=0&amp;autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
            };
            a.st.video = f.extend({}, a._a7, a.st.video);
            a.ev.on("rsBeforeSizeSet", function() {
                a._b7 && setTimeout(function() {
                    var b = a._r1, b = b.hasClass("rsVideoContainer") ? b : b.find(".rsVideoContainer");
                    a._c7 && a._c7.css({
                        width: b.width(),
                        height: b.height()
                    });
                }, 32);
            });
            var c = a._a.mozilla;
            a.ev.on("rsAfterParseNode", function(b, e, d) {
                b = f(e);
                if (d.videoURL) {
                    a.st.video.disableCSS3inFF && c && (a._e = a._f = !1);
                    e = f('<div class="rsVideoContainer"></div>');
                    var g = f('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');
                    b.hasClass("rsImg") ? d.content = e.append(b).append(g) : d.content.find(".rsImg").wrap(e).after(g);
                }
            });
            a.ev.on("rsAfterSlideChange", function() {
                a.stopVideo();
            });
        },
        toggleVideo: function() {
            return this._b7 ? this.stopVideo() : this.playVideo();
        },
        playVideo: function() {
            var a = this;
            if (!a._b7) {
                var c = a.currSlide;
                if (!c.videoURL) return !1;
                var b = a._d7 = c.content, c = c.videoURL, e, d;
                c.match(/youtu\.be/i) || c.match(/youtube\.com/i) ? (d = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/, 
                (d = c.match(d)) && 11 == d[7].length && (e = d[7]), void 0 !== e && (a._c7 = a.st.video.youTubeCode.replace("%id%", e))) : c.match(/vimeo\.com/i) && (d = /(www\.)?vimeo.com\/(\d+)($|\/)/, 
                (d = c.match(d)) && (e = d[2]), void 0 !== e && (a._c7 = a.st.video.vimeoCode.replace("%id%", e)));
                a.videoObj = f(a._c7);
                a.ev.trigger("rsOnCreateVideoElement", [ c ]);
                a.videoObj.length && (a._c7 = f('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'), 
                a._c7.find(".rsPreloader").after(a.videoObj), b = b.hasClass("rsVideoContainer") ? b : b.find(".rsVideoContainer"), 
                a._c7.css({
                    width: b.width(),
                    height: b.height()
                }).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv", function(b) {
                    a.stopVideo();
                    b.preventDefault();
                    b.stopPropagation();
                    return !1;
                }), b.append(a._c7), a.isIPAD && b.addClass("rsIOSVideo"), a._e7(!1), setTimeout(function() {
                    a._c7.addClass("rsVideoActive");
                }, 10), a.ev.trigger("rsVideoPlay"), a._b7 = !0);
                return !0;
            }
            return !1;
        },
        stopVideo: function() {
            var a = this;
            return a._b7 ? (a.isIPAD && a.slider.find(".rsCloseVideoBtn").remove(), a._e7(!0), 
            setTimeout(function() {
                a.ev.trigger("rsOnDestroyVideoElement", [ a.videoObj ]);
                var c = a._c7.find("iframe");
                if (c.length) try {
                    c.attr("src", "");
                } catch (b) {}
                a._c7.remove();
                a._c7 = null;
            }, 16), a.ev.trigger("rsVideoStop"), a._b7 = !1, !0) : !1;
        },
        _e7: function(a) {
            var c = [], b = this.st.video;
            b.autoHideArrows && (this._c2 && (c.push(this._c2, this._d2), this._e2 = !a), this._v5 && c.push(this._v5));
            b.autoHideControlNav && this._k5 && c.push(this._k5);
            b.autoHideBlocks && this.currSlide.animBlocks && c.push(this.currSlide.animBlocks);
            b.autoHideCaption && this.globalCaption && c.push(this.globalCaption);
            if (c.length) for (b = 0; b < c.length; b++) a ? c[b].removeClass("rsHidden") : c[b].addClass("rsHidden");
        }
    });
    f.rsModules.video = f.rsProto._z6;
})(jQuery);

(function(d) {
    d.rsProto._f7 = function() {
        var a = this;
        a.st.visibleNearby && a.st.visibleNearby.enabled && (a._g7 = {
            enabled: !0,
            centerArea: .6,
            center: !0,
            breakpoint: 0,
            breakpointCenterArea: .8,
            hiddenOverflow: !0,
            navigateByCenterClick: !1
        }, a.st.visibleNearby = d.extend({}, a._g7, a.st.visibleNearby), a.ev.one("rsAfterPropsSetup", function() {
            a._h7 = a._e1.css("overflow", "visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent();
            a.st.visibleNearby.hiddenOverflow || a._h7.css("overflow", "visible");
            a._o1 = a.st.controlsInside ? a._h7 : a.slider;
        }), a.ev.on("rsAfterSizePropSet", function() {
            var b, c = a.st.visibleNearby;
            b = c.breakpoint && a.width < c.breakpoint ? c.breakpointCenterArea : c.centerArea;
            a._h ? (a._b4 *= b, a._h7.css({
                height: a._c4,
                width: a._b4 / b
            }), a._d = a._b4 * (1 - b) / 2 / b) : (a._c4 *= b, a._h7.css({
                height: a._c4 / b,
                width: a._b4
            }), a._d = a._c4 * (1 - b) / 2 / b);
            c.navigateByCenterClick || (a._q = a._h ? a._b4 : a._c4);
            c.center && a._e1.css("margin-" + (a._h ? "left" : "top"), a._d);
        }));
    };
    d.rsModules.visibleNearby = d.rsProto._f7;
})(jQuery);

console.log("royal-slider-loaded!");

(function() {
    var method;
    var noop = function noop() {};
    var methods = [ "assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn" ];
    var length = methods.length;
    var console = window.console = window.console || {};
    while (length--) {
        method = methods[length];
        if (!console[method]) {
            console[method] = noop;
        }
    }
})();

(function($) {
    var CLOSE_EVENT = "Close", BEFORE_CLOSE_EVENT = "BeforeClose", AFTER_CLOSE_EVENT = "AfterClose", BEFORE_APPEND_EVENT = "BeforeAppend", MARKUP_PARSE_EVENT = "MarkupParse", OPEN_EVENT = "Open", CHANGE_EVENT = "Change", NS = "mfp", EVENT_NS = "." + NS, READY_CLASS = "mfp-ready", REMOVING_CLASS = "mfp-removing", PREVENT_CLOSE_CLASS = "mfp-prevent-close";
    var mfp, MagnificPopup = function() {}, _isJQ = !!window.jQuery, _prevStatus, _window = $(window), _body, _document, _prevContentType, _wrapClasses, _currPopupType;
    var _mfpOn = function(name, f) {
        mfp.ev.on(NS + name + EVENT_NS, f);
    }, _getEl = function(className, appendTo, html, raw) {
        var el = document.createElement("div");
        el.className = "mfp-" + className;
        if (html) {
            el.innerHTML = html;
        }
        if (!raw) {
            el = $(el);
            if (appendTo) {
                el.appendTo(appendTo);
            }
        } else if (appendTo) {
            appendTo.appendChild(el);
        }
        return el;
    }, _mfpTrigger = function(e, data) {
        mfp.ev.triggerHandler(NS + e, data);
        if (mfp.st.callbacks) {
            e = e.charAt(0).toLowerCase() + e.slice(1);
            if (mfp.st.callbacks[e]) {
                mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [ data ]);
            }
        }
    }, _setFocus = function() {
        (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
    }, _getCloseBtn = function(type) {
        if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
            mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace("%title%", mfp.st.tClose));
            _currPopupType = type;
        }
        return mfp.currTemplate.closeBtn;
    }, _checkInstance = function() {
        if (!$.magnificPopup.instance) {
            mfp = new MagnificPopup();
            mfp.init();
            $.magnificPopup.instance = mfp;
        }
    }, _checkIfClose = function(target) {
        if ($(target).hasClass(PREVENT_CLOSE_CLASS)) {
            return;
        }
        var closeOnContent = mfp.st.closeOnContentClick;
        var closeOnBg = mfp.st.closeOnBgClick;
        if (closeOnContent && closeOnBg) {
            return true;
        } else {
            if (!mfp.content || $(target).hasClass("mfp-close") || mfp.preloader && target === mfp.preloader[0]) {
                return true;
            }
            if (target !== mfp.content[0] && !$.contains(mfp.content[0], target)) {
                if (closeOnBg) {
                    if ($.contains(document, target)) {
                        return true;
                    }
                }
            } else if (closeOnContent) {
                return true;
            }
        }
        return false;
    }, supportsTransitions = function() {
        var s = document.createElement("p").style, v = [ "ms", "O", "Moz", "Webkit" ];
        if (s["transition"] !== undefined) {
            return true;
        }
        while (v.length) {
            if (v.pop() + "Transition" in s) {
                return true;
            }
        }
        return false;
    };
    MagnificPopup.prototype = {
        constructor: MagnificPopup,
        init: function() {
            var appVersion = navigator.appVersion;
            mfp.isIE7 = appVersion.indexOf("MSIE 7.") !== -1;
            mfp.isIE8 = appVersion.indexOf("MSIE 8.") !== -1;
            mfp.isLowIE = mfp.isIE7 || mfp.isIE8;
            mfp.isAndroid = /android/gi.test(appVersion);
            mfp.isIOS = /iphone|ipad|ipod/gi.test(appVersion);
            mfp.supportsTransition = supportsTransitions();
            mfp.probablyMobile = mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);
            _body = $(document.body);
            _document = $(document);
            mfp.popupsCache = {};
        },
        open: function(data) {
            var i;
            if (data.isObj === false) {
                mfp.items = data.items.toArray();
                mfp.index = 0;
                var items = data.items, item;
                for (i = 0; i < items.length; i++) {
                    item = items[i];
                    if (item.parsed) {
                        item = item.el[0];
                    }
                    if (item === data.el[0]) {
                        mfp.index = i;
                        break;
                    }
                }
            } else {
                mfp.items = $.isArray(data.items) ? data.items : [ data.items ];
                mfp.index = data.index || 0;
            }
            if (mfp.isOpen) {
                mfp.updateItemHTML();
                return;
            }
            mfp.types = [];
            _wrapClasses = "";
            if (data.mainEl && data.mainEl.length) {
                mfp.ev = data.mainEl.eq(0);
            } else {
                mfp.ev = _document;
            }
            if (data.key) {
                if (!mfp.popupsCache[data.key]) {
                    mfp.popupsCache[data.key] = {};
                }
                mfp.currTemplate = mfp.popupsCache[data.key];
            } else {
                mfp.currTemplate = {};
            }
            mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
            mfp.fixedContentPos = mfp.st.fixedContentPos === "auto" ? !mfp.probablyMobile : mfp.st.fixedContentPos;
            if (mfp.st.modal) {
                mfp.st.closeOnContentClick = false;
                mfp.st.closeOnBgClick = false;
                mfp.st.showCloseBtn = false;
                mfp.st.enableEscapeKey = false;
            }
            if (!mfp.bgOverlay) {
                mfp.bgOverlay = _getEl("bg").on("click" + EVENT_NS, function() {
                    mfp.close();
                });
                mfp.wrap = _getEl("wrap").attr("tabindex", -1).on("click" + EVENT_NS, function(e) {
                    if (_checkIfClose(e.target)) {
                        mfp.close();
                    }
                });
                mfp.container = _getEl("container", mfp.wrap);
            }
            mfp.contentContainer = _getEl("content");
            if (mfp.st.preloader) {
                mfp.preloader = _getEl("preloader", mfp.container, mfp.st.tLoading);
            }
            var modules = $.magnificPopup.modules;
            for (i = 0; i < modules.length; i++) {
                var n = modules[i];
                n = n.charAt(0).toUpperCase() + n.slice(1);
                mfp["init" + n].call(mfp);
            }
            _mfpTrigger("BeforeOpen");
            if (mfp.st.showCloseBtn) {
                if (!mfp.st.closeBtnInside) {
                    mfp.wrap.append(_getCloseBtn());
                } else {
                    _mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
                        values.close_replaceWith = _getCloseBtn(item.type);
                    });
                    _wrapClasses += " mfp-close-btn-in";
                }
            }
            if (mfp.st.alignTop) {
                _wrapClasses += " mfp-align-top";
            }
            if (mfp.fixedContentPos) {
                mfp.wrap.css({
                    overflow: mfp.st.overflowY,
                    overflowX: "hidden",
                    overflowY: mfp.st.overflowY
                });
            } else {
                mfp.wrap.css({
                    top: _window.scrollTop(),
                    position: "absolute"
                });
            }
            if (mfp.st.fixedBgPos === false || mfp.st.fixedBgPos === "auto" && !mfp.fixedContentPos) {
                mfp.bgOverlay.css({
                    height: _document.height(),
                    position: "absolute"
                });
            }
            if (mfp.st.enableEscapeKey) {
                _document.on("keyup" + EVENT_NS, function(e) {
                    if (e.keyCode === 27) {
                        mfp.close();
                    }
                });
            }
            _window.on("resize" + EVENT_NS, function() {
                mfp.updateSize();
            });
            if (!mfp.st.closeOnContentClick) {
                _wrapClasses += " mfp-auto-cursor";
            }
            if (_wrapClasses) mfp.wrap.addClass(_wrapClasses);
            var windowHeight = mfp.wH = _window.height();
            var windowStyles = {};
            if (mfp.fixedContentPos) {
                if (mfp._hasScrollBar(windowHeight)) {
                    var s = mfp._getScrollbarSize();
                    if (s) {
                        windowStyles.paddingRight = s;
                    }
                }
            }
            if (mfp.fixedContentPos) {
                if (!mfp.isIE7) {
                    windowStyles.overflow = "hidden";
                } else {
                    $("body, html").css("overflow", "hidden");
                }
            }
            var classesToadd = mfp.st.mainClass;
            if (mfp.isIE7) {
                classesToadd += " mfp-ie7";
            }
            if (classesToadd) {
                mfp._addClassToMFP(classesToadd);
            }
            mfp.updateItemHTML();
            _mfpTrigger("BuildControls");
            $("html").css(windowStyles);
            mfp.bgOverlay.add(mfp.wrap).prependTo(document.body);
            mfp._lastFocusedEl = document.activeElement;
            setTimeout(function() {
                if (mfp.content) {
                    mfp._addClassToMFP(READY_CLASS);
                    _setFocus();
                } else {
                    mfp.bgOverlay.addClass(READY_CLASS);
                }
                _document.on("focusin" + EVENT_NS, function(e) {
                    if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) {
                        _setFocus();
                        return false;
                    }
                });
            }, 16);
            mfp.isOpen = true;
            mfp.updateSize(windowHeight);
            _mfpTrigger(OPEN_EVENT);
        },
        close: function() {
            if (!mfp.isOpen) return;
            _mfpTrigger(BEFORE_CLOSE_EVENT);
            mfp.isOpen = false;
            if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
                mfp._addClassToMFP(REMOVING_CLASS);
                setTimeout(function() {
                    mfp._close();
                }, mfp.st.removalDelay);
            } else {
                mfp._close();
            }
        },
        _close: function() {
            _mfpTrigger(CLOSE_EVENT);
            var classesToRemove = REMOVING_CLASS + " " + READY_CLASS + " ";
            mfp.bgOverlay.detach();
            mfp.wrap.detach();
            mfp.container.empty();
            if (mfp.st.mainClass) {
                classesToRemove += mfp.st.mainClass + " ";
            }
            mfp._removeClassFromMFP(classesToRemove);
            if (mfp.fixedContentPos) {
                var windowStyles = {
                    paddingRight: ""
                };
                if (mfp.isIE7) {
                    $("body, html").css("overflow", "");
                } else {
                    windowStyles.overflow = "";
                }
                $("html").css(windowStyles);
            }
            _document.off("keyup" + EVENT_NS + " focusin" + EVENT_NS);
            mfp.ev.off(EVENT_NS);
            mfp.wrap.attr("class", "mfp-wrap").removeAttr("style");
            mfp.bgOverlay.attr("class", "mfp-bg");
            mfp.container.attr("class", "mfp-container");
            if (mfp.st.showCloseBtn && (!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
                if (mfp.currTemplate.closeBtn) mfp.currTemplate.closeBtn.detach();
            }
            if (mfp._lastFocusedEl) {
                $(mfp._lastFocusedEl).focus();
            }
            mfp.currItem = null;
            mfp.content = null;
            mfp.currTemplate = null;
            mfp.prevHeight = 0;
            _mfpTrigger(AFTER_CLOSE_EVENT);
        },
        updateSize: function(winHeight) {
            if (mfp.isIOS) {
                var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
                var height = window.innerHeight * zoomLevel;
                mfp.wrap.css("height", height);
                mfp.wH = height;
            } else {
                mfp.wH = winHeight || _window.height();
            }
            if (!mfp.fixedContentPos) {
                mfp.wrap.css("height", mfp.wH);
            }
            _mfpTrigger("Resize");
        },
        updateItemHTML: function() {
            var item = mfp.items[mfp.index];
            mfp.contentContainer.detach();
            if (mfp.content) mfp.content.detach();
            if (!item.parsed) {
                item = mfp.parseEl(mfp.index);
            }
            var type = item.type;
            _mfpTrigger("BeforeChange", [ mfp.currItem ? mfp.currItem.type : "", type ]);
            mfp.currItem = item;
            if (!mfp.currTemplate[type]) {
                var markup = mfp.st[type] ? mfp.st[type].markup : false;
                _mfpTrigger("FirstMarkupParse", markup);
                if (markup) {
                    mfp.currTemplate[type] = $(markup);
                } else {
                    mfp.currTemplate[type] = true;
                }
            }
            if (_prevContentType && _prevContentType !== item.type) {
                mfp.container.removeClass("mfp-" + _prevContentType + "-holder");
            }
            var newContent = mfp["get" + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
            mfp.appendContent(newContent, type);
            item.preloaded = true;
            _mfpTrigger(CHANGE_EVENT, item);
            _prevContentType = item.type;
            mfp.container.prepend(mfp.contentContainer);
            _mfpTrigger("AfterChange");
        },
        appendContent: function(newContent, type) {
            mfp.content = newContent;
            if (newContent) {
                if (mfp.st.showCloseBtn && mfp.st.closeBtnInside && mfp.currTemplate[type] === true) {
                    if (!mfp.content.find(".mfp-close").length) {
                        mfp.content.append(_getCloseBtn());
                    }
                } else {
                    mfp.content = newContent;
                }
            } else {
                mfp.content = "";
            }
            _mfpTrigger(BEFORE_APPEND_EVENT);
            mfp.container.addClass("mfp-" + type + "-holder");
            mfp.contentContainer.append(mfp.content);
        },
        parseEl: function(index) {
            var item = mfp.items[index], type = item.type;
            if (item.tagName) {
                item = {
                    el: $(item)
                };
            } else {
                item = {
                    data: item,
                    src: item.src
                };
            }
            if (item.el) {
                var types = mfp.types;
                for (var i = 0; i < types.length; i++) {
                    if (item.el.hasClass("mfp-" + types[i])) {
                        type = types[i];
                        break;
                    }
                }
                item.src = item.el.attr("data-mfp-src");
                if (!item.src) {
                    item.src = item.el.attr("href");
                }
            }
            item.type = type || mfp.st.type || "inline";
            item.index = index;
            item.parsed = true;
            mfp.items[index] = item;
            _mfpTrigger("ElementParse", item);
            return mfp.items[index];
        },
        addGroup: function(el, options) {
            var eHandler = function(e) {
                e.mfpEl = this;
                mfp._openClick(e, el, options);
            };
            if (!options) {
                options = {};
            }
            var eName = "click.magnificPopup";
            options.mainEl = el;
            if (options.items) {
                options.isObj = true;
                el.off(eName).on(eName, eHandler);
            } else {
                options.isObj = false;
                if (options.delegate) {
                    el.off(eName).on(eName, options.delegate, eHandler);
                } else {
                    options.items = el;
                    el.off(eName).on(eName, eHandler);
                }
            }
        },
        _openClick: function(e, el, options) {
            var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;
            if (!midClick && (e.which === 2 || e.ctrlKey || e.metaKey)) {
                return;
            }
            var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;
            if (disableOn) {
                if ($.isFunction(disableOn)) {
                    if (!disableOn.call(mfp)) {
                        return true;
                    }
                } else {
                    if (_window.width() < disableOn) {
                        return true;
                    }
                }
            }
            if (e.type) {
                e.preventDefault();
                if (mfp.isOpen) {
                    e.stopPropagation();
                }
            }
            options.el = $(e.mfpEl);
            if (options.delegate) {
                options.items = el.find(options.delegate);
            }
            mfp.open(options);
        },
        updateStatus: function(status, text) {
            if (mfp.preloader) {
                if (_prevStatus !== status) {
                    mfp.container.removeClass("mfp-s-" + _prevStatus);
                }
                if (!text && status === "loading") {
                    text = mfp.st.tLoading;
                }
                var data = {
                    status: status,
                    text: text
                };
                _mfpTrigger("UpdateStatus", data);
                status = data.status;
                text = data.text;
                mfp.preloader.html(text);
                mfp.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation();
                });
                mfp.container.addClass("mfp-s-" + status);
                _prevStatus = status;
            }
        },
        _addClassToMFP: function(cName) {
            mfp.bgOverlay.addClass(cName);
            mfp.wrap.addClass(cName);
        },
        _removeClassFromMFP: function(cName) {
            this.bgOverlay.removeClass(cName);
            mfp.wrap.removeClass(cName);
        },
        _hasScrollBar: function(winHeight) {
            return (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height());
        },
        _parseMarkup: function(template, values, item) {
            var arr;
            if (item.data) {
                values = $.extend(item.data, values);
            }
            _mfpTrigger(MARKUP_PARSE_EVENT, [ template, values, item ]);
            $.each(values, function(key, value) {
                if (value === undefined || value === false) {
                    return true;
                }
                arr = key.split("_");
                if (arr.length > 1) {
                    var el = template.find(EVENT_NS + "-" + arr[0]);
                    if (el.length > 0) {
                        var attr = arr[1];
                        if (attr === "replaceWith") {
                            if (el[0] !== value[0]) {
                                el.replaceWith(value);
                            }
                        } else if (attr === "img") {
                            if (el.is("img")) {
                                el.attr("src", value);
                            } else {
                                el.replaceWith('<img src="' + value + '" class="' + el.attr("class") + '" />');
                            }
                        } else {
                            el.attr(arr[1], value);
                        }
                    }
                } else {
                    template.find(EVENT_NS + "-" + key).html(value);
                }
            });
        },
        _getScrollbarSize: function() {
            if (mfp.scrollbarSize === undefined) {
                var scrollDiv = document.createElement("div");
                scrollDiv.id = "mfp-sbm";
                scrollDiv.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
                document.body.appendChild(scrollDiv);
                mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
            }
            return mfp.scrollbarSize;
        }
    };
    $.magnificPopup = {
        instance: null,
        proto: MagnificPopup.prototype,
        modules: [],
        open: function(options, index) {
            _checkInstance();
            if (!options) options = {};
            options.isObj = true;
            options.index = index || 0;
            return this.instance.open(options);
        },
        close: function() {
            return $.magnificPopup.instance.close();
        },
        registerModule: function(name, module) {
            if (module.options) {
                $.magnificPopup.defaults[name] = module.options;
            }
            $.extend(this.proto, module.proto);
            this.modules.push(name);
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: false,
            mainClass: "",
            preloader: true,
            focus: "",
            closeOnContentClick: false,
            closeOnBgClick: true,
            closeBtnInside: true,
            showCloseBtn: true,
            enableEscapeKey: true,
            modal: false,
            alignTop: false,
            removalDelay: 0,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    };
    $.fn.magnificPopup = function(options) {
        _checkInstance();
        var jqEl = $(this);
        if (typeof options === "string") {
            if (options === "open") {
                var items, itemOpts = _isJQ ? jqEl.data("magnificPopup") : jqEl[0].magnificPopup, index = parseInt(arguments[1], 10) || 0;
                if (itemOpts.items) {
                    items = itemOpts.items[index];
                } else {
                    items = jqEl;
                    if (itemOpts.delegate) {
                        items = items.find(itemOpts.delegate);
                    }
                    items = items.eq(index);
                }
                mfp._openClick({
                    mfpEl: items
                }, jqEl, itemOpts);
            } else {
                if (mfp.isOpen) mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
            }
        } else {
            if (_isJQ) {
                jqEl.data("magnificPopup", options);
            } else {
                jqEl[0].magnificPopup = options;
            }
            mfp.addGroup(jqEl, options);
        }
        return jqEl;
    };
    var INLINE_NS = "inline", _hiddenClass, _inlinePlaceholder, _lastInlineElement, _putInlineElementsBack = function() {
        if (_lastInlineElement) {
            _inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();
            _lastInlineElement = null;
        }
    };
    $.magnificPopup.registerModule(INLINE_NS, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                mfp.types.push(INLINE_NS);
                _mfpOn(CLOSE_EVENT + "." + INLINE_NS, function() {
                    _putInlineElementsBack();
                });
            },
            getInline: function(item, template) {
                _putInlineElementsBack();
                if (item.src) {
                    var inlineSt = mfp.st.inline, el = $(item.src);
                    if (el.length) {
                        var parent = el[0].parentNode;
                        if (parent && parent.tagName) {
                            if (!_inlinePlaceholder) {
                                _hiddenClass = inlineSt.hiddenClass;
                                _inlinePlaceholder = _getEl(_hiddenClass);
                                _hiddenClass = "mfp-" + _hiddenClass;
                            }
                            _lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
                        }
                        mfp.updateStatus("ready");
                    } else {
                        mfp.updateStatus("error", inlineSt.tNotFound);
                        el = $("<div>");
                    }
                    item.inlineElement = el;
                    return el;
                }
                mfp.updateStatus("ready");
                mfp._parseMarkup(template, {}, item);
                return template;
            }
        }
    });
    var _imgInterval, _getTitle = function(item) {
        if (item.data && item.data.title !== undefined) return item.data.title;
        var src = mfp.st.image.titleSrc;
        if (src) {
            if ($.isFunction(src)) {
                return src.call(mfp, item);
            } else if (item.el) {
                return item.el.attr(src) || "";
            }
        }
        return "";
    };
    $.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<div class="mfp-img"></div>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + "</div>" + "</div>",
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: true,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var imgSt = mfp.st.image, ns = ".image";
                mfp.types.push("image");
                _mfpOn(OPEN_EVENT + ns, function() {
                    if (mfp.currItem.type === "image" && imgSt.cursor) {
                        _body.addClass(imgSt.cursor);
                    }
                });
                _mfpOn(CLOSE_EVENT + ns, function() {
                    if (imgSt.cursor) {
                        _body.removeClass(imgSt.cursor);
                    }
                    _window.off("resize" + EVENT_NS);
                });
                _mfpOn("Resize" + ns, mfp.resizeImage);
                if (mfp.isLowIE) {
                    _mfpOn("AfterChange", mfp.resizeImage);
                }
            },
            resizeImage: function() {
                var item = mfp.currItem;
                if (!item || !item.img) return;
                if (mfp.st.image.verticalFit) {
                    var decr = 0;
                    if (mfp.isLowIE) {
                        decr = parseInt(item.img.css("padding-top"), 10) + parseInt(item.img.css("padding-bottom"), 10);
                    }
                    item.img.css("max-height", mfp.wH - decr);
                }
            },
            _onImageHasSize: function(item) {
                if (item.img) {
                    item.hasSize = true;
                    if (_imgInterval) {
                        clearInterval(_imgInterval);
                    }
                    item.isCheckingImgSize = false;
                    _mfpTrigger("ImageHasSize", item);
                    if (item.imgHidden) {
                        if (mfp.content) mfp.content.removeClass("mfp-loading");
                        item.imgHidden = false;
                    }
                }
            },
            findImageSize: function(item) {
                var counter = 0, img = item.img[0], mfpSetInterval = function(delay) {
                    if (_imgInterval) {
                        clearInterval(_imgInterval);
                    }
                    _imgInterval = setInterval(function() {
                        if (img.naturalWidth > 0) {
                            mfp._onImageHasSize(item);
                            return;
                        }
                        if (counter > 200) {
                            clearInterval(_imgInterval);
                        }
                        counter++;
                        if (counter === 3) {
                            mfpSetInterval(10);
                        } else if (counter === 40) {
                            mfpSetInterval(50);
                        } else if (counter === 100) {
                            mfpSetInterval(500);
                        }
                    }, delay);
                };
                mfpSetInterval(1);
            },
            getImage: function(item, template) {
                var guard = 0, onLoadComplete = function() {
                    if (item) {
                        if (item.img[0].complete) {
                            item.img.off(".mfploader");
                            if (item === mfp.currItem) {
                                mfp._onImageHasSize(item);
                                mfp.updateStatus("ready");
                            }
                            item.hasSize = true;
                            item.loaded = true;
                            _mfpTrigger("ImageLoadComplete");
                        } else {
                            guard++;
                            if (guard < 200) {
                                setTimeout(onLoadComplete, 100);
                            } else {
                                onLoadError();
                            }
                        }
                    }
                }, onLoadError = function() {
                    if (item) {
                        item.img.off(".mfploader");
                        if (item === mfp.currItem) {
                            mfp._onImageHasSize(item);
                            mfp.updateStatus("error", imgSt.tError.replace("%url%", item.src));
                        }
                        item.hasSize = true;
                        item.loaded = true;
                        item.loadError = true;
                    }
                }, imgSt = mfp.st.image;
                var el = template.find(".mfp-img");
                if (el.length) {
                    var img = document.createElement("img");
                    img.className = "mfp-img";
                    item.img = $(img).on("load.mfploader", onLoadComplete).on("error.mfploader", onLoadError);
                    img.src = item.src;
                    if (el.is("img")) {
                        item.img = item.img.clone();
                    }
                    if (item.img[0].naturalWidth > 0) {
                        item.hasSize = true;
                    }
                }
                mfp._parseMarkup(template, {
                    title: _getTitle(item),
                    img_replaceWith: item.img
                }, item);
                mfp.resizeImage();
                if (item.hasSize) {
                    if (_imgInterval) clearInterval(_imgInterval);
                    if (item.loadError) {
                        template.addClass("mfp-loading");
                        mfp.updateStatus("error", imgSt.tError.replace("%url%", item.src));
                    } else {
                        template.removeClass("mfp-loading");
                        mfp.updateStatus("ready");
                    }
                    return template;
                }
                mfp.updateStatus("loading");
                item.loading = true;
                if (!item.hasSize) {
                    item.imgHidden = true;
                    template.addClass("mfp-loading");
                    mfp.findImageSize(item);
                }
                return template;
            }
        }
    });
    var hasMozTransform, getHasMozTransform = function() {
        if (hasMozTransform === undefined) {
            hasMozTransform = document.createElement("p").style.MozTransform !== undefined;
        }
        return hasMozTransform;
    };
    $.magnificPopup.registerModule("zoom", {
        options: {
            enabled: false,
            easing: "ease-in-out",
            duration: 300,
            opener: function(element) {
                return element.is("img") ? element : element.find("img");
            }
        },
        proto: {
            initZoom: function() {
                var zoomSt = mfp.st.zoom, ns = ".zoom";
                if (!zoomSt.enabled || !mfp.supportsTransition) {
                    return;
                }
                var duration = zoomSt.duration, getElToAnimate = function(image) {
                    var newImg = image.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), transition = "all " + zoomSt.duration / 1e3 + "s " + zoomSt.easing, cssObj = {
                        position: "fixed",
                        zIndex: 9999,
                        left: 0,
                        top: 0,
                        "-webkit-backface-visibility": "hidden"
                    }, t = "transition";
                    cssObj["-webkit-" + t] = cssObj["-moz-" + t] = cssObj["-o-" + t] = cssObj[t] = transition;
                    newImg.css(cssObj);
                    return newImg;
                }, showMainContent = function() {
                    mfp.content.css("visibility", "visible");
                }, openTimeout, animatedImg;
                _mfpOn("BuildControls" + ns, function() {
                    if (mfp._allowZoom()) {
                        clearTimeout(openTimeout);
                        mfp.content.css("visibility", "hidden");
                        image = mfp._getItemToZoom();
                        if (!image) {
                            showMainContent();
                            return;
                        }
                        animatedImg = getElToAnimate(image);
                        animatedImg.css(mfp._getOffset());
                        mfp.wrap.append(animatedImg);
                        openTimeout = setTimeout(function() {
                            animatedImg.css(mfp._getOffset(true));
                            openTimeout = setTimeout(function() {
                                showMainContent();
                                setTimeout(function() {
                                    animatedImg.remove();
                                    image = animatedImg = null;
                                    _mfpTrigger("ZoomAnimationEnded");
                                }, 16);
                            }, duration);
                        }, 16);
                    }
                });
                _mfpOn(BEFORE_CLOSE_EVENT + ns, function() {
                    if (mfp._allowZoom()) {
                        clearTimeout(openTimeout);
                        mfp.st.removalDelay = duration;
                        if (!image) {
                            image = mfp._getItemToZoom();
                            if (!image) {
                                return;
                            }
                            animatedImg = getElToAnimate(image);
                        }
                        animatedImg.css(mfp._getOffset(true));
                        mfp.wrap.append(animatedImg);
                        mfp.content.css("visibility", "hidden");
                        setTimeout(function() {
                            animatedImg.css(mfp._getOffset());
                        }, 16);
                    }
                });
                _mfpOn(CLOSE_EVENT + ns, function() {
                    if (mfp._allowZoom()) {
                        showMainContent();
                        if (animatedImg) {
                            animatedImg.remove();
                        }
                    }
                });
            },
            _allowZoom: function() {
                return mfp.currItem.type === "image";
            },
            _getItemToZoom: function() {
                if (mfp.currItem.hasSize) {
                    return mfp.currItem.img;
                } else {
                    return false;
                }
            },
            _getOffset: function(isLarge) {
                var el;
                if (isLarge) {
                    el = mfp.currItem.img;
                } else {
                    el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
                }
                var offset = el.offset();
                var paddingTop = parseInt(el.css("padding-top"), 10);
                var paddingBottom = parseInt(el.css("padding-bottom"), 10);
                offset.top -= $(window).scrollTop() - paddingTop;
                var obj = {
                    width: el.width(),
                    height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
                };
                if (getHasMozTransform()) {
                    obj["-moz-transform"] = obj["transform"] = "translate(" + offset.left + "px," + offset.top + "px)";
                } else {
                    obj.left = offset.left;
                    obj.top = offset.top;
                }
                return obj;
            }
        }
    });
    var RETINA_NS = "retina";
    $.magnificPopup.registerModule(RETINA_NS, {
        options: {
            replaceSrc: function(item) {
                return item.src.replace(/\.\w+$/, function(m) {
                    return "@2x" + m;
                });
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var st = mfp.st.retina, ratio = st.ratio;
                    ratio = !isNaN(ratio) ? ratio : ratio();
                    if (ratio > 1) {
                        _mfpOn("ImageHasSize" + "." + RETINA_NS, function(e, item) {
                            item.img.css({
                                "max-width": item.img[0].naturalWidth / ratio,
                                width: "100%"
                            });
                        });
                        _mfpOn("ElementParse" + "." + RETINA_NS, function(e, item) {
                            item.src = st.replaceSrc(item, ratio);
                        });
                    }
                }
            }
        }
    });
})(window.jQuery || window.Zepto);

(function(root, factory) {
    if (typeof exports == "object") module.exports = factory(); else if (typeof define == "function" && define.amd) define(factory); else root.Spinner = factory();
})(this, function() {
    "use strict";
    var prefixes = [ "webkit", "Moz", "ms", "O" ], animations = {}, useCssAnimations;
    function createEl(tag, prop) {
        var el = document.createElement(tag || "div"), n;
        for (n in prop) el[n] = prop[n];
        return el;
    }
    function ins(parent) {
        for (var i = 1, n = arguments.length; i < n; i++) parent.appendChild(arguments[i]);
        return parent;
    }
    var sheet = function() {
        var el = createEl("style", {
            type: "text/css"
        });
        ins(document.getElementsByTagName("head")[0], el);
        return el.sheet || el.styleSheet;
    }();
    function addAnimation(alpha, trail, i, lines) {
        var name = [ "opacity", trail, ~~(alpha * 100), i, lines ].join("-"), start = .01 + i / lines * 100, z = Math.max(1 - (1 - alpha) / trail * (100 - start), alpha), prefix = useCssAnimations.substring(0, useCssAnimations.indexOf("Animation")).toLowerCase(), pre = prefix && "-" + prefix + "-" || "";
        if (!animations[name]) {
            sheet.insertRule("@" + pre + "keyframes " + name + "{" + "0%{opacity:" + z + "}" + start + "%{opacity:" + alpha + "}" + (start + .01) + "%{opacity:1}" + (start + trail) % 100 + "%{opacity:" + alpha + "}" + "100%{opacity:" + z + "}" + "}", sheet.cssRules.length);
            animations[name] = 1;
        }
        return name;
    }
    function vendor(el, prop) {
        var s = el.style, pp, i;
        prop = prop.charAt(0).toUpperCase() + prop.slice(1);
        for (i = 0; i < prefixes.length; i++) {
            pp = prefixes[i] + prop;
            if (s[pp] !== undefined) return pp;
        }
        if (s[prop] !== undefined) return prop;
    }
    function css(el, prop) {
        for (var n in prop) el.style[vendor(el, n) || n] = prop[n];
        return el;
    }
    function merge(obj) {
        for (var i = 1; i < arguments.length; i++) {
            var def = arguments[i];
            for (var n in def) if (obj[n] === undefined) obj[n] = def[n];
        }
        return obj;
    }
    function pos(el) {
        var o = {
            x: el.offsetLeft,
            y: el.offsetTop
        };
        while (el = el.offsetParent) o.x += el.offsetLeft, o.y += el.offsetTop;
        return o;
    }
    function getColor(color, idx) {
        return typeof color == "string" ? color : color[idx % color.length];
    }
    var defaults = {
        lines: 12,
        length: 7,
        width: 5,
        radius: 10,
        rotate: 0,
        corners: 1,
        color: "#000",
        direction: 1,
        speed: 1,
        trail: 100,
        opacity: 1 / 4,
        fps: 20,
        zIndex: 2e9,
        className: "spinner",
        top: "auto",
        left: "auto",
        position: "relative"
    };
    function Spinner(o) {
        if (typeof this == "undefined") return new Spinner(o);
        this.opts = merge(o || {}, Spinner.defaults, defaults);
    }
    Spinner.defaults = {};
    merge(Spinner.prototype, {
        spin: function(target) {
            this.stop();
            var self = this, o = self.opts, el = self.el = css(createEl(0, {
                className: o.className
            }), {
                position: o.position,
                width: 0,
                zIndex: o.zIndex
            }), mid = o.radius + o.length + o.width, ep, tp;
            if (target) {
                target.insertBefore(el, target.firstChild || null);
                tp = pos(target);
                ep = pos(el);
                css(el, {
                    left: (o.left == "auto" ? tp.x - ep.x + (target.offsetWidth >> 1) : parseInt(o.left, 10) + mid) + "px",
                    top: (o.top == "auto" ? tp.y - ep.y + (target.offsetHeight >> 1) : parseInt(o.top, 10) + mid) + "px"
                });
            }
            el.setAttribute("role", "progressbar");
            self.lines(el, self.opts);
            if (!useCssAnimations) {
                var i = 0, start = (o.lines - 1) * (1 - o.direction) / 2, alpha, fps = o.fps, f = fps / o.speed, ostep = (1 - o.opacity) / (f * o.trail / 100), astep = f / o.lines;
                (function anim() {
                    i++;
                    for (var j = 0; j < o.lines; j++) {
                        alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity);
                        self.opacity(el, j * o.direction + start, alpha, o);
                    }
                    self.timeout = self.el && setTimeout(anim, ~~(1e3 / fps));
                })();
            }
            return self;
        },
        stop: function() {
            var el = this.el;
            if (el) {
                clearTimeout(this.timeout);
                if (el.parentNode) el.parentNode.removeChild(el);
                this.el = undefined;
            }
            return this;
        },
        lines: function(el, o) {
            var i = 0, start = (o.lines - 1) * (1 - o.direction) / 2, seg;
            function fill(color, shadow) {
                return css(createEl(), {
                    position: "absolute",
                    width: o.length + o.width + "px",
                    height: o.width + "px",
                    background: color,
                    boxShadow: shadow,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / o.lines * i + o.rotate) + "deg) translate(" + o.radius + "px" + ",0)",
                    borderRadius: (o.corners * o.width >> 1) + "px"
                });
            }
            for (;i < o.lines; i++) {
                seg = css(createEl(), {
                    position: "absolute",
                    top: 1 + ~(o.width / 2) + "px",
                    transform: o.hwaccel ? "translate3d(0,0,0)" : "",
                    opacity: o.opacity,
                    animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + " " + 1 / o.speed + "s linear infinite"
                });
                if (o.shadow) ins(seg, css(fill("#000", "0 0 4px " + "#000"), {
                    top: 2 + "px"
                }));
                ins(el, ins(seg, fill(getColor(o.color, i), "0 0 1px rgba(0,0,0,.1)")));
            }
            return el;
        },
        opacity: function(el, i, val) {
            if (i < el.childNodes.length) el.childNodes[i].style.opacity = val;
        }
    });
    function initVML() {
        function vml(tag, attr) {
            return createEl("<" + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr);
        }
        sheet.addRule(".spin-vml", "behavior:url(#default#VML)");
        Spinner.prototype.lines = function(el, o) {
            var r = o.length + o.width, s = 2 * r;
            function grp() {
                return css(vml("group", {
                    coordsize: s + " " + s,
                    coordorigin: -r + " " + -r
                }), {
                    width: s,
                    height: s
                });
            }
            var margin = -(o.width + o.length) * 2 + "px", g = css(grp(), {
                position: "absolute",
                top: margin,
                left: margin
            }), i;
            function seg(i, dx, filter) {
                ins(g, ins(css(grp(), {
                    rotation: 360 / o.lines * i + "deg",
                    left: ~~dx
                }), ins(css(vml("roundrect", {
                    arcsize: o.corners
                }), {
                    width: r,
                    height: o.width,
                    left: o.radius,
                    top: -o.width >> 1,
                    filter: filter
                }), vml("fill", {
                    color: getColor(o.color, i),
                    opacity: o.opacity
                }), vml("stroke", {
                    opacity: 0
                }))));
            }
            if (o.shadow) for (i = 1; i <= o.lines; i++) seg(i, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (i = 1; i <= o.lines; i++) seg(i);
            return ins(el, g);
        };
        Spinner.prototype.opacity = function(el, i, val, o) {
            var c = el.firstChild;
            o = o.shadow && o.lines || 0;
            if (c && i + o < c.childNodes.length) {
                c = c.childNodes[i + o];
                c = c && c.firstChild;
                c = c && c.firstChild;
                if (c) c.opacity = val;
            }
        };
    }
    var probe = css(createEl("group"), {
        behavior: "url(#default#VML)"
    });
    if (!vendor(probe, "transform") && probe.adj) initVML(); else useCssAnimations = vendor(probe, "animation");
    return Spinner;
});

(function() {
    var KTV;
    KTV = KTV || {};
    KTV.newsletterSignup = function() {
        var ajaxSubmit, module, setScope;
        module = this;
        setScope = function() {
            module.el = $("#newsletter-signup");
        };
        ajaxSubmit = function(e) {
            e.preventDefault();
            return $.ajax({
                type: "POST",
                data: {
                    mc_submit_type: "js",
                    mcsf_action: "mc_submit_signup_form",
                    _mc_submit_signup_form_nonce: module.el.find("#_mc_submit_signup_form_nonce").val(),
                    mc_mv_EMAIL: module.el.find(".email").val(),
                    mc_signup_submit: "Sign Up"
                },
                beforeSend: function() {
                    module.spinner = new Spinner().spin(module.el[0]);
                },
                error: function() {
                    module.spinner.stop();
                    return alertify.error("Bummer, our servers are having issues right now. Try again later.");
                },
                success: function(data) {
                    var errorText, result;
                    module.spinner.stop();
                    result = $(data);
                    if (result.hasClass("mc_success_msg")) {
                        module.el.find(".email").val("");
                        return alertify.success("Your all signed up. Yeeeew!");
                    } else {
                        errorText = result.html();
                        alertify.set({
                            delay: 1e4
                        });
                        return alertify.error(errorText);
                    }
                }
            });
        };
        return {
            init: function() {
                setScope();
                return module.el.on("submit", ajaxSubmit);
            }
        };
    }();
    jQuery(function() {
        return KTV.newsletterSignup.init();
    });
}).call(this);