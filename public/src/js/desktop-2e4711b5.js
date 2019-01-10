!function(e, t) {
  'object' == typeof module && 'object' == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
    if (!e.document) throw new Error('jQuery requires a window with a document');
    return t(e);
  } : t(e);
}('undefined' != typeof window ? window : this, function(e, t) {
  function i(e) {
    var t = !!e && 'length' in e && e.length, i = ne.type(e);
    return 'function' !== i && !ne.isWindow(e) && ('array' === i || 0 === t || 'number' == typeof t && t > 0 && t - 1 in e);
  }

  function n(e, t, i) {
    if (ne.isFunction(t)) return ne.grep(e, function(e, n) {return !!t.call(e, n, e) !== i;});
    if (t.nodeType) return ne.grep(e, function(e) {return e === t !== i;});
    if ('string' == typeof t) {
      if (he.test(t)) return ne.filter(t, e, i);
      t = ne.filter(t, e);
    }
    return ne.grep(e, function(e) {return Z.call(t, e) > -1 !== i;});
  }

  function r(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) ;
    return e;
  }

  function o(e) {
    var t = {};
    return ne.each(e.match(ye) || [], function(e, i) {t[i] = !0;}), t;
  }

  function s() {Y.removeEventListener('DOMContentLoaded', s), e.removeEventListener('load', s), ne.ready();}

  function a() {this.expando = ne.expando + a.uid++;}

  function l(e, t, i) {
    var n;
    if (void 0 === i && 1 === e.nodeType) if (n = 'data-' + t.replace(_e, '-$&').toLowerCase(), 'string' == typeof (i = e.getAttribute(n))) {
      try {i = 'true' === i || 'false' !== i && ('null' === i ? null : +i + '' === i ? +i : ke.test(i) ? ne.parseJSON(i) : i);} catch (e) {}
      Te.set(e, t, i);
    } else i = void 0;
    return i;
  }

  function c(e, t, i, n) {
    var r, o = 1, s = 20, a = n ? function() {return n.cur();} : function() {return ne.css(e, t, '');}, l = a(), c = i && i[3] || (ne.cssNumber[t] ? '' : 'px'),
        d = (ne.cssNumber[t] || 'px' !== c && +l) && Ee.exec(ne.css(e, t));
    if (d && d[3] !== c) {
      c = c || d[3], i = i || [], d = +l || 1;
      do {d /= o = o || '.5', ne.style(e, t, d + c);} while (o !== (o = a() / l) && 1 !== o && --s);
    }
    return i && (d = +d || +l || 0, r = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = d, n.end = r)), r;
  }

  function d(e, t) {
    var i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || '*') : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || '*') : [];
    return void 0 === t || t && ne.nodeName(e, t) ? ne.merge([e], i) : i;
  }

  function u(e, t) {for (var i = 0, n = e.length; i < n; i++) Ce.set(e[i], 'globalEval', !t || Ce.get(t[i], 'globalEval'));}

  function p(e, t, i, n, r) {
    for (var o, s, a, l, c, p, h = t.createDocumentFragment(), f = [], m = 0, g = e.length; m < g; m++) if ((o = e[m]) || 0 === o) if ('object' === ne.type(o)) ne.merge(f, o.nodeType ? [o] : o); else if (Le.test(o)) {
      for (s = s || h.appendChild(t.createElement('div')), a = ($e.exec(o) || ['', ''])[1].toLowerCase(), l = Me[a] || Me._default, s.innerHTML = l[1] + ne.htmlPrefilter(o) + l[2], p = l[0]; p--;) s = s.lastChild;
      ne.merge(f, s.childNodes), (s = h.firstChild).textContent = '';
    } else f.push(t.createTextNode(o));
    for (h.textContent = '', m = 0; o = f[m++];) if (n && ne.inArray(o, n) > -1) r && r.push(o); else if (c = ne.contains(o.ownerDocument, o), s = d(h.appendChild(o), 'script'), c && u(s), i) for (p = 0; o = s[p++];) Pe.test(o.type || '') && i.push(o);
    return h;
  }

  function h() {return !0;}

  function f() {return !1;}

  function m() {try {return Y.activeElement;} catch (e) {}}

  function g(e, t, i, n, r, o) {
    var s, a;
    if ('object' == typeof t) {
      'string' != typeof i && (n = n || i, i = void 0);
      for (a in t) g(e, a, i, n, t[a], o);
      return e;
    }
    if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ('string' == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = f; else if (!r) return e;
    return 1 === o && (s = r, (r = function(e) {return ne().off(e), s.apply(this, arguments);}).guid = s.guid || (s.guid = ne.guid++)), e.each(function() {ne.event.add(this, t, r, n, i);});
  }

  function v(e, t) {return ne.nodeName(e, 'table') && ne.nodeName(11 !== t.nodeType ? t : t.firstChild, 'tr') ? e.getElementsByTagName('tbody')[0] || e.appendChild(e.ownerDocument.createElement('tbody')) : e;}

  function y(e) {return e.type = (null !== e.getAttribute('type')) + '/' + e.type, e;}

  function b(e) {
    var t = ze.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute('type'), e;
  }

  function w(e, t) {
    var i, n, r, o, s, a, l, c;
    if (1 === t.nodeType) {
      if (Ce.hasData(e) && (o = Ce.access(e), s = Ce.set(t, o), c = o.events)) {
        delete s.handle, s.events = {};
        for (r in c) for (i = 0, n = c[r].length; i < n; i++) ne.event.add(t, r, c[r][i]);
      }
      Te.hasData(e) && (a = Te.access(e), l = ne.extend({}, a), Te.set(t, l));
    }
  }

  function x(e, t) {
    var i = t.nodeName.toLowerCase();
    'input' === i && De.test(e.type) ? t.checked = e.checked : 'input' !== i && 'textarea' !== i || (t.defaultValue = e.defaultValue);
  }

  function C(e, t, i, n) {
    t = Q.apply([], t);
    var r, o, s, a, l, c, u = 0, h = e.length, f = h - 1, m = t[0], g = ne.isFunction(m);
    if (g || h > 1 && 'string' == typeof m && !ie.checkClone && Re.test(m)) return e.each(function(r) {
      var o = e.eq(r);
      g && (t[0] = m.call(this, r, o.html())), C(o, t, i, n);
    });
    if (h && (r = p(t, e[0].ownerDocument, !1, e, n), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || n)) {
      for (a = (s = ne.map(d(r, 'script'), y)).length; u < h; u++) l = r, u !== f && (l = ne.clone(l, !0, !0), a && ne.merge(s, d(l, 'script'))), i.call(e[u], l, u);
      if (a) for (c = s[s.length - 1].ownerDocument, ne.map(s, b), u = 0; u < a; u++) l = s[u], Pe.test(l.type || '') && !Ce.access(l, 'globalEval') && ne.contains(c, l) && (l.src ? ne._evalUrl && ne._evalUrl(l.src) : ne.globalEval(l.textContent.replace(qe, '')));
    }
    return e;
  }

  function T(e, t, i) {
    for (var n, r = t ? ne.filter(t, e) : e, o = 0; null != (n = r[o]); o++) i || 1 !== n.nodeType || ne.cleanData(d(n)), n.parentNode && (i && ne.contains(n.ownerDocument, n) && u(d(n, 'script')), n.parentNode.removeChild(n));
    return e;
  }

  function k(e, t) {
    var i = ne(t.createElement(e)).appendTo(t.body), n = ne.css(i[0], 'display');
    return i.detach(), n;
  }

  function _(e) {
    var t = Y, i = Be[e];
    return i || ('none' !== (i = k(e, t)) && i || ((t = (We = (We || ne('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>')).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), i = k(e, t), We.detach()), Be[e] = i), i;
  }

  function S(e, t, i) {
    var n, r, o, s, a = e.style;
    return i = i || Xe(e), '' !== (s = i ? i.getPropertyValue(t) || i[t] : void 0) && void 0 !== s || ne.contains(e.ownerDocument, e) || (s = ne.style(e, t)), i && !ie.pixelMarginRight() && Ue.test(s) && Ge.test(t) && (n = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = r, a.maxWidth = o), void 0 !== s ? s + '' : s;
  }

  function E(e, t) {
    return {
      get: function() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  function I(e) {
    if (e in et) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), i = Je.length; i--;) if ((e = Je[i] + t) in et) return e;
  }

  function A(e, t, i) {
    var n = Ee.exec(t);
    return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || 'px') : t;
  }

  function D(e, t, i, n, r) {
    for (var o = i === (n ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0, s = 0; o < 4; o += 2) 'margin' === i && (s += ne.css(e, i + Ie[o], !0, r)), n ? ('content' === i && (s -= ne.css(e, 'padding' + Ie[o], !0, r)), 'margin' !== i && (s -= ne.css(e, 'border' + Ie[o] + 'Width', !0, r))) : (s += ne.css(e, 'padding' + Ie[o], !0, r), 'padding' !== i && (s += ne.css(e, 'border' + Ie[o] + 'Width', !0, r)));
    return s;
  }

  function $(e, t, i) {
    var n = !0, r = 'width' === t ? e.offsetWidth : e.offsetHeight, o = Xe(e), s = 'border-box' === ne.css(e, 'boxSizing', !1, o);
    if (r <= 0 || null == r) {
      if (((r = S(e, t, o)) < 0 || null == r) && (r = e.style[t]), Ue.test(r)) return r;
      n = s && (ie.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0;
    }
    return r + D(e, t, i || (s ? 'border' : 'content'), n, o) + 'px';
  }

  function P(e, t) {
    for (var i, n, r, o = [], s = 0, a = e.length; s < a; s++) (n = e[s]).style && (o[s] = Ce.get(n, 'olddisplay'), i = n.style.display, t ? (o[s] || 'none' !== i || (n.style.display = ''), '' === n.style.display && Ae(n) && (o[s] = Ce.access(n, 'olddisplay', _(n.nodeName)))) : (r = Ae(n), 'none' === i && r || Ce.set(n, 'olddisplay', r ? i : ne.css(n, 'display'))));
    for (s = 0; s < a; s++) (n = e[s]).style && (t && 'none' !== n.style.display && '' !== n.style.display || (n.style.display = t ? o[s] || '' : 'none'));
    return e;
  }

  function M(e, t, i, n, r) {return new M.prototype.init(e, t, i, n, r);}

  function L() {return e.setTimeout(function() {tt = void 0;}), tt = ne.now();}

  function O(e, t) {
    var i, n = 0, r = { height: e };
    for (t = t ? 1 : 0; n < 4; n += 2 - t) r['margin' + (i = Ie[n])] = r['padding' + i] = e;
    return t && (r.opacity = r.width = e), r;
  }

  function N(e, t, i) {for (var n, r = (F.tweeners[t] || []).concat(F.tweeners['*']), o = 0, s = r.length; o < s; o++) if (n = r[o].call(i, t, e)) return n;}

  function j(e, t) {
    var i, n, r, o, s;
    for (i in e) if (n = ne.camelCase(i), r = t[n], o = e[i], ne.isArray(o) && (r = o[1], o = e[i] = o[0]), i !== n && (e[n] = o, delete e[i]), (s = ne.cssHooks[n]) && 'expand' in s) {
      o = s.expand(o), delete e[n];
      for (i in o) i in e || (e[i] = o[i], t[i] = r);
    } else t[n] = r;
  }

  function F(e, t, i) {
    var n, r, o = 0, s = F.prefilters.length, a = ne.Deferred().always(function() {delete l.elem;}), l = function() {
      if (r) return !1;
      for (var t = tt || L(), i = Math.max(0, c.startTime + c.duration - t), n = 1 - (i / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(n);
      return a.notifyWith(e, [c, n, i]), n < 1 && s ? i : (a.resolveWith(e, [c]), !1);
    }, c = a.promise({
      elem: e,
      props: ne.extend({}, t),
      opts: ne.extend(!0, { specialEasing: {}, easing: ne.easing._default }, i),
      originalProperties: t,
      originalOptions: i,
      startTime: tt || L(),
      duration: i.duration,
      tweens: [],
      createTween: function(t, i) {
        var n = ne.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
        return c.tweens.push(n), n;
      },
      stop: function(t) {
        var i = 0, n = t ? c.tweens.length : 0;
        if (r) return this;
        for (r = !0; i < n; i++) c.tweens[i].run(1);
        return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
      }
    }), d = c.props;
    for (j(d, c.opts.specialEasing); o < s; o++) if (n = F.prefilters[o].call(c, e, d, c.opts)) return ne.isFunction(n.stop) && (ne._queueHooks(c.elem, c.opts.queue).stop = ne.proxy(n.stop, n)), n;
    return ne.map(d, N, c), ne.isFunction(c.opts.start) && c.opts.start.call(e, c), ne.fx.timer(ne.extend(l, {
      elem: e,
      anim: c,
      queue: c.opts.queue
    })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always);
  }

  function H(e) {return e.getAttribute && e.getAttribute('class') || '';}

  function R(e) {
    return function(t, i) {
      'string' != typeof t && (i = t, t = '*');
      var n, r = 0, o = t.toLowerCase().match(ye) || [];
      if (ne.isFunction(i)) for (; n = o[r++];) '+' === n[0] ? (n = n.slice(1) || '*', (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i);
    };
  }

  function z(e, t, i, n) {
    function r(a) {
      var l;
      return o[a] = !0, ne.each(e[a] || [], function(e, a) {
        var c = a(t, i, n);
        return 'string' != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1);
      }), l;
    }

    var o = {}, s = e === Tt;
    return r(t.dataTypes[0]) || !o['*'] && r('*');
  }

  function q(e, t) {
    var i, n, r = ne.ajaxSettings.flatOptions || {};
    for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
    return n && ne.extend(!0, e, n), e;
  }

  function W(e, t, i) {
    for (var n, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader('Content-Type'));
    if (n) for (r in a) if (a[r] && a[r].test(n)) {
      l.unshift(r);
      break;
    }
    if (l[0] in i) o = l[0]; else {
      for (r in i) {
        if (!l[0] || e.converters[r + ' ' + l[0]]) {
          o = r;
          break;
        }
        s || (s = r);
      }
      o = o || s;
    }
    if (o) return o !== l[0] && l.unshift(o), i[o];
  }

  function B(e, t, i, n) {
    var r, o, s, a, l, c = {}, d = e.dataTypes.slice();
    if (d[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
    for (o = d.shift(); o;) if (e.responseFields[o] && (i[e.responseFields[o]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = d.shift()) if ('*' === o) o = l; else if ('*' !== l && l !== o) {
      if (!(s = c[l + ' ' + o] || c['* ' + o])) for (r in c) if ((a = r.split(' '))[1] === o && (s = c[l + ' ' + a[0]] || c['* ' + a[0]])) {
        !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], d.unshift(a[1]));
        break;
      }
      if (!0 !== s) if (s && e.throws) t = s(t); else try {t = s(t);} catch (e) {return { state: 'parsererror', error: s ? e : 'No conversion from ' + l + ' to ' + o };}
    }
    return { state: 'success', data: t };
  }

  function G(e, t, i, n) {
    var r;
    if (ne.isArray(t)) ne.each(t, function(t, r) {i || Et.test(e) ? n(e, r) : G(e + '[' + ('object' == typeof r && null != r ? t : '') + ']', r, i, n);}); else if (i || 'object' !== ne.type(t)) n(e, t); else for (r in t) G(e + '[' + r + ']', t[r], i, n);
  }

  function U(e) {return ne.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;}

  var X = [], Y = e.document, V = X.slice, Q = X.concat, K = X.push, Z = X.indexOf, J = {}, ee = J.toString, te = J.hasOwnProperty, ie = {}, ne = function(e, t) {return new ne.fn.init(e, t);},
      re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, oe = /^-ms-/, se = /-([\da-z])/gi, ae = function(e, t) {return t.toUpperCase();};
  ne.fn = ne.prototype = {
    jquery: '2.2.4',
    constructor: ne,
    selector: '',
    length: 0,
    toArray: function() {return V.call(this);},
    get: function(e) {return null != e ? e < 0 ? this[e + this.length] : this[e] : V.call(this);},
    pushStack: function(e) {
      var t = ne.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t;
    },
    each: function(e) {return ne.each(this, e);},
    map: function(e) {return this.pushStack(ne.map(this, function(t, i) {return e.call(t, i, t);}));},
    slice: function() {return this.pushStack(V.apply(this, arguments));},
    first: function() {return this.eq(0);},
    last: function() {return this.eq(-1);},
    eq: function(e) {
      var t = this.length, i = +e + (e < 0 ? t : 0);
      return this.pushStack(i >= 0 && i < t ? [this[i]] : []);
    },
    end: function() {return this.prevObject || this.constructor();},
    push: K,
    sort: X.sort,
    splice: X.splice
  }, ne.extend = ne.fn.extend = function() {
    var e, t, i, n, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
    for ('boolean' == typeof s && (c = s, s = arguments[a] || {}, a++), 'object' == typeof s || ne.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++) if (null != (e = arguments[a])) for (t in e) i = s[t], s !== (n = e[t]) && (c && n && (ne.isPlainObject(n) || (r = ne.isArray(n))) ? (r ? (r = !1, o = i && ne.isArray(i) ? i : []) : o = i && ne.isPlainObject(i) ? i : {}, s[t] = ne.extend(c, o, n)) : void 0 !== n && (s[t] = n));
    return s;
  }, ne.extend({
    expando: 'jQuery' + ('2.2.4' + Math.random()).replace(/\D/g, ''),
    isReady: !0,
    error: function(e) {throw new Error(e);},
    noop: function() {},
    isFunction: function(e) {return 'function' === ne.type(e);},
    isArray: Array.isArray,
    isWindow: function(e) {return null != e && e === e.window;},
    isNumeric: function(e) {
      var t = e && e.toString();
      return !ne.isArray(e) && t - parseFloat(t) + 1 >= 0;
    },
    isPlainObject: function(e) {
      var t;
      if ('object' !== ne.type(e) || e.nodeType || ne.isWindow(e)) return !1;
      if (e.constructor && !te.call(e, 'constructor') && !te.call(e.constructor.prototype || {}, 'isPrototypeOf')) return !1;
      for (t in e) ;
      return void 0 === t || te.call(e, t);
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) return !1;
      return !0;
    },
    type: function(e) {return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? J[ee.call(e)] || 'object' : typeof e;},
    globalEval: function(e) {
      var t, i = eval;
      (e = ne.trim(e)) && (1 === e.indexOf('use strict') ? ((t = Y.createElement('script')).text = e, Y.head.appendChild(t).parentNode.removeChild(t)) : i(e));
    },
    camelCase: function(e) {return e.replace(oe, 'ms-').replace(se, ae);},
    nodeName: function(e, t) {return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();},
    each: function(e, t) {
      var n, r = 0;
      if (i(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
      return e;
    },
    trim: function(e) {return null == e ? '' : (e + '').replace(re, '');},
    makeArray: function(e, t) {
      var n = t || [];
      return null != e && (i(Object(e)) ? ne.merge(n, 'string' == typeof e ? [e] : e) : K.call(n, e)), n;
    },
    inArray: function(e, t, i) {return null == t ? -1 : Z.call(t, e, i);},
    merge: function(e, t) {
      for (var i = +t.length, n = 0, r = e.length; n < i; n++) e[r++] = t[n];
      return e.length = r, e;
    },
    grep: function(e, t, i) {
      for (var n = [], r = 0, o = e.length, s = !i; r < o; r++) !t(e[r], r) !== s && n.push(e[r]);
      return n;
    },
    map: function(e, t, n) {
      var r, o, s = 0, a = [];
      if (i(e)) for (r = e.length; s < r; s++) null != (o = t(e[s], s, n)) && a.push(o); else for (s in e) null != (o = t(e[s], s, n)) && a.push(o);
      return Q.apply([], a);
    },
    guid: 1,
    proxy: function(e, t) {
      var i, n, r;
      if ('string' == typeof t && (i = e[t], t = e, e = i), ne.isFunction(e)) return n = V.call(arguments, 2), r = function() {return e.apply(t || this, n.concat(V.call(arguments)));}, r.guid = e.guid = e.guid || ne.guid++, r;
    },
    now: Date.now,
    support: ie
  }), 'function' == typeof Symbol && (ne.fn[Symbol.iterator] = X[Symbol.iterator]), ne.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function(e, t) {J['[object ' + t + ']'] = t.toLowerCase();});
  var le = function(e) {
    function t(e, t, i, n) {
      var r, o, s, a, c, u, p, h, f = t && t.ownerDocument, m = t ? t.nodeType : 9;
      if (i = i || [], 'string' != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return i;
      if (!n && ((t ? t.ownerDocument || t : F) !== D && A(t), t = t || D, P)) {
        if (11 !== m && (u = me.exec(e))) if (r = u[1]) {
          if (9 === m) {
            if (!(s = t.getElementById(r))) return i;
            if (s.id === r) return i.push(s), i;
          } else if (f && (s = f.getElementById(r)) && N(t, s) && s.id === r) return i.push(s), i;
        } else {
          if (u[2]) return Q.apply(i, t.getElementsByTagName(e)), i;
          if ((r = u[3]) && b.getElementsByClassName && t.getElementsByClassName) return Q.apply(i, t.getElementsByClassName(r)), i;
        }
        if (b.qsa && !W[e + ' '] && (!M || !M.test(e))) {
          if (1 !== m) f = t, h = e; else if ('object' !== t.nodeName.toLowerCase()) {
            for ((a = t.getAttribute('id')) ? a = a.replace(ve, '\\$&') : t.setAttribute('id', a = j), o = (p = T(e)).length, c = de.test(a) ? '#' + a : '[id=\'' + a + '\']'; o--;) p[o] = c + ' ' + d(p[o]);
            h = p.join(','), f = ge.test(e) && l(t.parentNode) || t;
          }
          if (h) try {return Q.apply(i, f.querySelectorAll(h)), i;} catch (e) {} finally {a === j && t.removeAttribute('id');}
        }
      }
      return _(e.replace(oe, '$1'), t, i, n);
    }

    function i() {
      function e(i, n) {return t.push(i + ' ') > w.cacheLength && delete e[t.shift()], e[i + ' '] = n;}

      var t = [];
      return e;
    }

    function n(e) {return e[j] = !0, e;}

    function r(e) {
      var t = D.createElement('div');
      try {return !!e(t);} catch (e) {return !1;} finally {t.parentNode && t.parentNode.removeChild(t), t = null;}
    }

    function o(e, t) {for (var i = e.split('|'), n = i.length; n--;) w.attrHandle[i[n]] = t;}

    function s(e, t) {
      var i = t && e, n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
      if (n) return n;
      if (i) for (; i = i.nextSibling;) if (i === t) return -1;
      return e ? 1 : -1;
    }

    function a(e) {return n(function(t) {return t = +t, n(function(i, n) {for (var r, o = e([], i.length, t), s = o.length; s--;) i[r = o[s]] && (i[r] = !(n[r] = i[r]));});});}

    function l(e) {return e && void 0 !== e.getElementsByTagName && e;}

    function c() {}

    function d(e) {
      for (var t = 0, i = e.length, n = ''; t < i; t++) n += e[t].value;
      return n;
    }

    function u(e, t, i) {
      var n = t.dir, r = i && 'parentNode' === n, o = R++;
      return t.first ? function(t, i, o) {for (; t = t[n];) if (1 === t.nodeType || r) return e(t, i, o);} : function(t, i, s) {
        var a, l, c, d = [H, o];
        if (s) {for (; t = t[n];) if ((1 === t.nodeType || r) && e(t, i, s)) return !0;} else for (; t = t[n];) if (1 === t.nodeType || r) {
          if (c = t[j] || (t[j] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (a = l[n]) && a[0] === H && a[1] === o) return d[2] = a[2];
          if (l[n] = d, d[2] = e(t, i, s)) return !0;
        }
      };
    }

    function p(e) {
      return e.length > 1 ? function(t, i, n) {
        for (var r = e.length; r--;) if (!e[r](t, i, n)) return !1;
        return !0;
      } : e[0];
    }

    function h(e, i, n) {
      for (var r = 0, o = i.length; r < o; r++) t(e, i[r], n);
      return n;
    }

    function f(e, t, i, n, r) {
      for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++) (o = e[a]) && (i && !i(o, n, r) || (s.push(o), c && t.push(a)));
      return s;
    }

    function m(e, t, i, r, o, s) {
      return r && !r[j] && (r = m(r)), o && !o[j] && (o = m(o, s)), n(function(n, s, a, l) {
        var c, d, u, p = [], m = [], g = s.length, v = n || h(t || '*', a.nodeType ? [a] : a, []), y = !e || !n && t ? v : f(v, p, e, a, l), b = i ? o || (n ? e : g || r) ? [] : s : y;
        if (i && i(y, b, a, l), r) for (c = f(b, m), r(c, [], a, l), d = c.length; d--;) (u = c[d]) && (b[m[d]] = !(y[m[d]] = u));
        if (n) {
          if (o || e) {
            if (o) {
              for (c = [], d = b.length; d--;) (u = b[d]) && c.push(y[d] = u);
              o(null, b = [], c, l);
            }
            for (d = b.length; d--;) (u = b[d]) && (c = o ? Z(n, u) : p[d]) > -1 && (n[c] = !(s[c] = u));
          }
        } else b = f(b === s ? b.splice(g, b.length) : b), o ? o(null, s, b, l) : Q.apply(s, b);
      });
    }

    function g(e) {
      for (var t, i, n, r = e.length, o = w.relative[e[0].type], s = o || w.relative[' '], a = o ? 1 : 0, l = u(function(e) {return e === t;}, s, !0), c = u(function(e) {return Z(t, e) > -1;}, s, !0), h = [function(e, i, n) {
        var r = !o && (n || i !== S) || ((t = i).nodeType ? l(e, i, n) : c(e, i, n));
        return t = null, r;
      }]; a < r; a++) if (i = w.relative[e[a].type]) h = [u(p(h), i)]; else {
        if ((i = w.filter[e[a].type].apply(null, e[a].matches))[j]) {
          for (n = ++a; n < r && !w.relative[e[n].type]; n++) ;
          return m(a > 1 && p(h), a > 1 && d(e.slice(0, a - 1).concat({ value: ' ' === e[a - 2].type ? '*' : '' })).replace(oe, '$1'), i, a < n && g(e.slice(a, n)), n < r && g(e = e.slice(n)), n < r && d(e));
        }
        h.push(i);
      }
      return p(h);
    }

    function v(e, i) {
      var r = i.length > 0, o = e.length > 0, s = function(n, s, a, l, c) {
        var d, u, p, h = 0, m = '0', g = n && [], v = [], y = S, b = n || o && w.find.TAG('*', c), x = H += null == y ? 1 : Math.random() || .1, C = b.length;
        for (c && (S = s === D || s || c); m !== C && null != (d = b[m]); m++) {
          if (o && d) {
            for (u = 0, s || d.ownerDocument === D || (A(d), a = !P); p = e[u++];) if (p(d, s || D, a)) {
              l.push(d);
              break;
            }
            c && (H = x);
          }
          r && ((d = !p && d) && h--, n && g.push(d));
        }
        if (h += m, r && m !== h) {
          for (u = 0; p = i[u++];) p(g, v, s, a);
          if (n) {
            if (h > 0) for (; m--;) g[m] || v[m] || (v[m] = Y.call(l));
            v = f(v);
          }
          Q.apply(l, v), c && !n && v.length > 0 && h + i.length > 1 && t.uniqueSort(l);
        }
        return c && (H = x, S = y), g;
      };
      return r ? n(s) : s;
    }

    var y, b, w, x, C, T, k, _, S, E, I, A, D, $, P, M, L, O, N, j = 'sizzle' + 1 * new Date, F = e.document, H = 0, R = 0, z = i(), q = i(), W = i(),
        B = function(e, t) {return e === t && (I = !0), 0;}, G = 1 << 31, U = {}.hasOwnProperty, X = [], Y = X.pop, V = X.push, Q = X.push, K = X.slice, Z = function(e, t) {
          for (var i = 0, n = e.length; i < n; i++) if (e[i] === t) return i;
          return -1;
        }, J = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', ee = '[\\x20\\t\\r\\n\\f]',
        te = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
        ie = '\\[' + ee + '*(' + te + ')(?:' + ee + '*([*^$|!~]?=)' + ee + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + te + '))|)' + ee + '*\\]',
        ne = ':(' + te + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + ie + ')*)|.*)\\)|)', re = new RegExp(ee + '+', 'g'),
        oe = new RegExp('^' + ee + '+|((?:^|[^\\\\])(?:\\\\.)*)' + ee + '+$', 'g'), se = new RegExp('^' + ee + '*,' + ee + '*'), ae = new RegExp('^' + ee + '*([>+~]|' + ee + ')' + ee + '*'),
        le = new RegExp('=' + ee + '*([^\\]\'"]*?)' + ee + '*\\]', 'g'), ce = new RegExp(ne), de = new RegExp('^' + te + '$'), ue = {
          ID: new RegExp('^#(' + te + ')'),
          CLASS: new RegExp('^\\.(' + te + ')'),
          TAG: new RegExp('^(' + te + '|[*])'),
          ATTR: new RegExp('^' + ie),
          PSEUDO: new RegExp('^' + ne),
          CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + ee + '*(even|odd|(([+-]|)(\\d*)n|)' + ee + '*(?:([+-]|)' + ee + '*(\\d+)|))' + ee + '*\\)|)', 'i'),
          bool: new RegExp('^(?:' + J + ')$', 'i'),
          needsContext: new RegExp('^' + ee + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + ee + '*((?:-\\d)?\\d*)' + ee + '*\\)|)(?=[^-]|$)', 'i')
        }, pe = /^(?:input|select|textarea|button)$/i, he = /^h\d$/i, fe = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/, ve = /'|\\/g,
        ye = new RegExp('\\\\([\\da-f]{1,6}' + ee + '?|(' + ee + ')|.)', 'ig'), be = function(e, t, i) {
          var n = '0x' + t - 65536;
          return n !== n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320);
        }, we = function() {A();};
    try {Q.apply(X = K.call(F.childNodes), F.childNodes), X[F.childNodes.length].nodeType;} catch (e) {
      Q = {
        apply: X.length ? function(e, t) {V.apply(e, K.call(t));} : function(e, t) {
          for (var i = e.length, n = 0; e[i++] = t[n++];) ;
          e.length = i - 1;
        }
      };
    }
    b = t.support = {}, C = t.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && 'HTML' !== t.nodeName;
    }, A = t.setDocument = function(e) {
      var t, i, n = e ? e.ownerDocument || e : F;
      return n !== D && 9 === n.nodeType && n.documentElement ? (D = n, $ = D.documentElement, P = !C(D), (i = D.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener('unload', we, !1) : i.attachEvent && i.attachEvent('onunload', we)), b.attributes = r(function(e) {return e.className = 'i', !e.getAttribute('className');}), b.getElementsByTagName = r(function(e) {return e.appendChild(D.createComment('')), !e.getElementsByTagName('*').length;}), b.getElementsByClassName = fe.test(D.getElementsByClassName), b.getById = r(function(e) {return $.appendChild(e).id = j, !D.getElementsByName || !D.getElementsByName(j).length;}), b.getById ? (w.find.ID = function(e, t) {
        if (void 0 !== t.getElementById && P) {
          var i = t.getElementById(e);
          return i ? [i] : [];
        }
      }, w.filter.ID = function(e) {
        var t = e.replace(ye, be);
        return function(e) {return e.getAttribute('id') === t;};
      }) : (delete w.find.ID, w.filter.ID = function(e) {
        var t = e.replace(ye, be);
        return function(e) {
          var i = void 0 !== e.getAttributeNode && e.getAttributeNode('id');
          return i && i.value === t;
        };
      }), w.find.TAG = b.getElementsByTagName ? function(e, t) {return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0;} : function(e, t) {
        var i, n = [], r = 0, o = t.getElementsByTagName(e);
        if ('*' === e) {
          for (; i = o[r++];) 1 === i.nodeType && n.push(i);
          return n;
        }
        return o;
      }, w.find.CLASS = b.getElementsByClassName && function(e, t) {if (void 0 !== t.getElementsByClassName && P) return t.getElementsByClassName(e);}, L = [], M = [], (b.qsa = fe.test(D.querySelectorAll)) && (r(function(e) {$.appendChild(e).innerHTML = '<a id=\'' + j + '\'></a><select id=\'' + j + '-\r\\\' msallowcapture=\'\'><option selected=\'\'></option></select>', e.querySelectorAll('[msallowcapture^=\'\']').length && M.push('[*^$]=' + ee + '*(?:\'\'|"")'), e.querySelectorAll('[selected]').length || M.push('\\[' + ee + '*(?:value|' + J + ')'), e.querySelectorAll('[id~=' + j + '-]').length || M.push('~='), e.querySelectorAll(':checked').length || M.push(':checked'), e.querySelectorAll('a#' + j + '+*').length || M.push('.#.+[+~]');}), r(function(e) {
        var t = D.createElement('input');
        t.setAttribute('type', 'hidden'), e.appendChild(t).setAttribute('name', 'D'), e.querySelectorAll('[name=d]').length && M.push('name' + ee + '*[*^$|!~]?='), e.querySelectorAll(':enabled').length || M.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), M.push(',.*:');
      })), (b.matchesSelector = fe.test(O = $.matches || $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && r(function(e) {b.disconnectedMatch = O.call(e, 'div'), O.call(e, '[s!=\'\']:x'), L.push('!=', ne);}), M = M.length && new RegExp(M.join('|')), L = L.length && new RegExp(L.join('|')), t = fe.test($.compareDocumentPosition), N = t || fe.test($.contains) ? function(e, t) {
        var i = 9 === e.nodeType ? e.documentElement : e, n = t && t.parentNode;
        return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
      } : function(e, t) {
        if (t) for (; t = t.parentNode;) if (t === e) return !0;
        return !1;
      }, B = t ? function(e, t) {
        if (e === t) return I = !0, 0;
        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !b.sortDetached && t.compareDocumentPosition(e) === i ? e === D || e.ownerDocument === F && N(F, e) ? -1 : t === D || t.ownerDocument === F && N(F, t) ? 1 : E ? Z(E, e) - Z(E, t) : 0 : 4 & i ? -1 : 1);
      } : function(e, t) {
        if (e === t) return I = !0, 0;
        var i, n = 0, r = e.parentNode, o = t.parentNode, a = [e], l = [t];
        if (!r || !o) return e === D ? -1 : t === D ? 1 : r ? -1 : o ? 1 : E ? Z(E, e) - Z(E, t) : 0;
        if (r === o) return s(e, t);
        for (i = e; i = i.parentNode;) a.unshift(i);
        for (i = t; i = i.parentNode;) l.unshift(i);
        for (; a[n] === l[n];) n++;
        return n ? s(a[n], l[n]) : a[n] === F ? -1 : l[n] === F ? 1 : 0;
      }, D) : D;
    }, t.matches = function(e, i) {return t(e, null, null, i);}, t.matchesSelector = function(e, i) {
      if ((e.ownerDocument || e) !== D && A(e), i = i.replace(le, '=\'$1\']'), b.matchesSelector && P && !W[i + ' '] && (!L || !L.test(i)) && (!M || !M.test(i))) try {
        var n = O.call(e, i);
        if (n || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {}
      return t(i, D, null, [e]).length > 0;
    }, t.contains = function(e, t) {return (e.ownerDocument || e) !== D && A(e), N(e, t);}, t.attr = function(e, t) {
      (e.ownerDocument || e) !== D && A(e);
      var i = w.attrHandle[t.toLowerCase()], n = i && U.call(w.attrHandle, t.toLowerCase()) ? i(e, t, !P) : void 0;
      return void 0 !== n ? n : b.attributes || !P ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
    }, t.error = function(e) {throw new Error('Syntax error, unrecognized expression: ' + e);}, t.uniqueSort = function(e) {
      var t, i = [], n = 0, r = 0;
      if (I = !b.detectDuplicates, E = !b.sortStable && e.slice(0), e.sort(B), I) {
        for (; t = e[r++];) t === e[r] && (n = i.push(r));
        for (; n--;) e.splice(i[n], 1);
      }
      return E = null, e;
    }, x = t.getText = function(e) {
      var t, i = '', n = 0, r = e.nodeType;
      if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ('string' == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) i += x(e);
        } else if (3 === r || 4 === r) return e.nodeValue;
      } else for (; t = e[n++];) i += x(t);
      return i;
    }, (w = t.selectors = {
      cacheLength: 50,
      createPseudo: n,
      match: ue,
      attrHandle: {},
      find: {},
      relative: { '>': { dir: 'parentNode', first: !0 }, ' ': { dir: 'parentNode' }, '+': { dir: 'previousSibling', first: !0 }, '~': { dir: 'previousSibling' } },
      preFilter: {
        ATTR: function(e) {return e[1] = e[1].replace(ye, be), e[3] = (e[3] || e[4] || e[5] || '').replace(ye, be), '~=' === e[2] && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4);},
        CHILD: function(e) {return e[1] = e[1].toLowerCase(), 'nth' === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3])), e[5] = +(e[7] + e[8] || 'odd' === e[3])) : e[3] && t.error(e[0]), e;},
        PSEUDO: function(e) {
          var t, i = !e[6] && e[2];
          return ue.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || '' : i && ce.test(i) && (t = T(i, !0)) && (t = i.indexOf(')', i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function(e) {
          var t = e.replace(ye, be).toLowerCase();
          return '*' === e ? function() {return !0;} : function(e) {return e.nodeName && e.nodeName.toLowerCase() === t;};
        }, CLASS: function(e) {
          var t = z[e + ' '];
          return t || (t = new RegExp('(^|' + ee + ')' + e + '(' + ee + '|$)')) && z(e, function(e) {return t.test('string' == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute('class') || '');});
        }, ATTR: function(e, i, n) {
          return function(r) {
            var o = t.attr(r, e);
            return null == o ? '!=' === i : !i || (o += '', '=' === i ? o === n : '!=' === i ? o !== n : '^=' === i ? n && 0 === o.indexOf(n) : '*=' === i ? n && o.indexOf(n) > -1 : '$=' === i ? n && o.slice(-n.length) === n : '~=' === i ? (' ' + o.replace(re, ' ') + ' ').indexOf(n) > -1 : '|=' === i && (o === n || o.slice(0, n.length + 1) === n + '-'));
          };
        }, CHILD: function(e, t, i, n, r) {
          var o = 'nth' !== e.slice(0, 3), s = 'last' !== e.slice(-4), a = 'of-type' === t;
          return 1 === n && 0 === r ? function(e) {return !!e.parentNode;} : function(t, i, l) {
            var c, d, u, p, h, f, m = o !== s ? 'nextSibling' : 'previousSibling', g = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
            if (g) {
              if (o) {
                for (; m;) {
                  for (p = t; p = p[m];) if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                  f = m = 'only' === e && !f && 'nextSibling';
                }
                return !0;
              }
              if (f = [s ? g.firstChild : g.lastChild], s && y) {
                for (b = (h = (c = (d = (u = (p = g)[j] || (p[j] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === H && c[1]) && c[2], p = h && g.childNodes[h]; p = ++h && p && p[m] || (b = h = 0) || f.pop();) if (1 === p.nodeType && ++b && p === t) {
                  d[e] = [H, h, b];
                  break;
                }
              } else if (y && (b = h = (c = (d = (u = (p = t)[j] || (p[j] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === H && c[1]), !1 === b) for (; (p = ++h && p && p[m] || (b = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((d = (u = p[j] || (p[j] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] = [H, b]), p !== t));) ;
              return (b -= r) === n || b % n == 0 && b / n >= 0;
            }
          };
        }, PSEUDO: function(e, i) {
          var r, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error('unsupported pseudo: ' + e);
          return o[j] ? o(i) : o.length > 1 ? (r = [e, e, '', i], w.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {for (var n, r = o(e, i), s = r.length; s--;) e[n = Z(e, r[s])] = !(t[n] = r[s]);}) : function(e) {return o(e, 0, r);}) : o;
        }
      },
      pseudos: {
        not: n(function(e) {
          var t = [], i = [], r = k(e.replace(oe, '$1'));
          return r[j] ? n(function(e, t, i, n) {for (var o, s = r(e, null, n, []), a = e.length; a--;) (o = s[a]) && (e[a] = !(t[a] = o));}) : function(e, n, o) {return t[0] = e, r(t, null, o, i), t[0] = null, !i.pop();};
        }),
        has: n(function(e) {return function(i) {return t(e, i).length > 0;};}),
        contains: n(function(e) {return e = e.replace(ye, be), function(t) {return (t.textContent || t.innerText || x(t)).indexOf(e) > -1;};}),
        lang: n(function(e) {
          return de.test(e || '') || t.error('unsupported lang: ' + e), e = e.replace(ye, be).toLowerCase(), function(t) {
            var i;
            do {if (i = P ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang')) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + '-');} while ((t = t.parentNode) && 1 === t.nodeType);
            return !1;
          };
        }),
        target: function(t) {
          var i = e.location && e.location.hash;
          return i && i.slice(1) === t.id;
        },
        root: function(e) {return e === $;},
        focus: function(e) {return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);},
        enabled: function(e) {return !1 === e.disabled;},
        disabled: function(e) {return !0 === e.disabled;},
        checked: function(e) {
          var t = e.nodeName.toLowerCase();
          return 'input' === t && !!e.checked || 'option' === t && !!e.selected;
        },
        selected: function(e) {return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;},
        empty: function(e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function(e) {return !w.pseudos.empty(e);},
        header: function(e) {return he.test(e.nodeName);},
        input: function(e) {return pe.test(e.nodeName);},
        button: function(e) {
          var t = e.nodeName.toLowerCase();
          return 'input' === t && 'button' === e.type || 'button' === t;
        },
        text: function(e) {
          var t;
          return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase());
        },
        first: a(function() {return [0];}),
        last: a(function(e, t) {return [t - 1];}),
        eq: a(function(e, t, i) {return [i < 0 ? i + t : i];}),
        even: a(function(e, t) {
          for (var i = 0; i < t; i += 2) e.push(i);
          return e;
        }),
        odd: a(function(e, t) {
          for (var i = 1; i < t; i += 2) e.push(i);
          return e;
        }),
        lt: a(function(e, t, i) {
          for (var n = i < 0 ? i + t : i; --n >= 0;) e.push(n);
          return e;
        }),
        gt: a(function(e, t, i) {
          for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
          return e;
        })
      }
    }).pseudos.nth = w.pseudos.eq;
    for (y in{ radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) w.pseudos[y] = function(e) {return function(t) {return 'input' === t.nodeName.toLowerCase() && t.type === e;};}(y);
    for (y in{ submit: !0, reset: !0 }) w.pseudos[y] = function(e) {
      return function(t) {
        var i = t.nodeName.toLowerCase();
        return ('input' === i || 'button' === i) && t.type === e;
      };
    }(y);
    return c.prototype = w.filters = w.pseudos, w.setFilters = new c, T = t.tokenize = function(e, i) {
      var n, r, o, s, a, l, c, d = q[e + ' '];
      if (d) return i ? 0 : d.slice(0);
      for (a = e, l = [], c = w.preFilter; a;) {
        n && !(r = se.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = ae.exec(a)) && (n = r.shift(), o.push({
          value: n,
          type: r[0].replace(oe, ' ')
        }), a = a.slice(n.length));
        for (s in w.filter) !(r = ue[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), o.push({ value: n, type: s, matches: r }), a = a.slice(n.length));
        if (!n) break;
      }
      return i ? a.length : a ? t.error(e) : q(e, l).slice(0);
    }, k = t.compile = function(e, t) {
      var i, n = [], r = [], o = W[e + ' '];
      if (!o) {
        for (t || (t = T(e)), i = t.length; i--;) (o = g(t[i]))[j] ? n.push(o) : r.push(o);
        (o = W(e, v(r, n))).selector = e;
      }
      return o;
    }, _ = t.select = function(e, t, i, n) {
      var r, o, s, a, c, u = 'function' == typeof e && e, p = !n && T(e = u.selector || e);
      if (i = i || [], 1 === p.length) {
        if ((o = p[0] = p[0].slice(0)).length > 2 && 'ID' === (s = o[0]).type && b.getById && 9 === t.nodeType && P && w.relative[o[1].type]) {
          if (!(t = (w.find.ID(s.matches[0].replace(ye, be), t) || [])[0])) return i;
          u && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }
        for (r = ue.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !w.relative[a = s.type]);) if ((c = w.find[a]) && (n = c(s.matches[0].replace(ye, be), ge.test(o[0].type) && l(t.parentNode) || t))) {
          if (o.splice(r, 1), !(e = n.length && d(o))) return Q.apply(i, n), i;
          break;
        }
      }
      return (u || k(e, p))(n, t, !P, i, !t || ge.test(e) && l(t.parentNode) || t), i;
    }, b.sortStable = j.split('').sort(B).join('') === j, b.detectDuplicates = !!I, A(), b.sortDetached = r(function(e) {return 1 & e.compareDocumentPosition(D.createElement('div'));}), r(function(e) {return e.innerHTML = '<a href=\'#\'></a>', '#' === e.firstChild.getAttribute('href');}) || o('type|href|height|width', function(e, t, i) {if (!i) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);}), b.attributes && r(function(e) {return e.innerHTML = '<input/>', e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value');}) || o('value', function(e, t, i) {if (!i && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;}), r(function(e) {return null == e.getAttribute('disabled');}) || o(J, function(e, t, i) {
      var n;
      if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
    }), t;
  }(e);
  ne.find = le, ne.expr = le.selectors, ne.expr[':'] = ne.expr.pseudos, ne.uniqueSort = ne.unique = le.uniqueSort, ne.text = le.getText, ne.isXMLDoc = le.isXML, ne.contains = le.contains;
  var ce = function(e, t, i) {
    for (var n = [], r = void 0 !== i; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
      if (r && ne(e).is(i)) break;
      n.push(e);
    }
    return n;
  }, de = function(e, t) {
    for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
    return i;
  }, ue = ne.expr.match.needsContext, pe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, he = /^.[^:#\[\.,]*$/;
  ne.filter = function(e, t, i) {
    var n = t[0];
    return i && (e = ':not(' + e + ')'), 1 === t.length && 1 === n.nodeType ? ne.find.matchesSelector(n, e) ? [n] : [] : ne.find.matches(e, ne.grep(t, function(e) {return 1 === e.nodeType;}));
  }, ne.fn.extend({
    find: function(e) {
      var t, i = this.length, n = [], r = this;
      if ('string' != typeof e) return this.pushStack(ne(e).filter(function() {for (t = 0; t < i; t++) if (ne.contains(r[t], this)) return !0;}));
      for (t = 0; t < i; t++) ne.find(e, r[t], n);
      return n = this.pushStack(i > 1 ? ne.unique(n) : n), n.selector = this.selector ? this.selector + ' ' + e : e, n;
    },
    filter: function(e) {return this.pushStack(n(this, e || [], !1));},
    not: function(e) {return this.pushStack(n(this, e || [], !0));},
    is: function(e) {return !!n(this, 'string' == typeof e && ue.test(e) ? ne(e) : e || [], !1).length;}
  });
  var fe, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  (ne.fn.init = function(e, t, i) {
    var n, r;
    if (!e) return this;
    if (i = i || fe, 'string' == typeof e) {
      if (!(n = '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3 ? [null, e, null] : me.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
      if (n[1]) {
        if (t = t instanceof ne ? t[0] : t, ne.merge(this, ne.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Y, !0)), pe.test(n[1]) && ne.isPlainObject(t)) for (n in t) ne.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
        return this;
      }
      return (r = Y.getElementById(n[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = Y, this.selector = e, this;
    }
    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ne.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(ne) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ne.makeArray(e, this));
  }).prototype = ne.fn, fe = ne(Y);
  var ge = /^(?:parents|prev(?:Until|All))/, ve = { children: !0, contents: !0, next: !0, prev: !0 };
  ne.fn.extend({
    has: function(e) {
      var t = ne(e, this), i = t.length;
      return this.filter(function() {for (var e = 0; e < i; e++) if (ne.contains(this, t[e])) return !0;});
    },
    closest: function(e, t) {
      for (var i, n = 0, r = this.length, o = [], s = ue.test(e) || 'string' != typeof e ? ne(e, t || this.context) : 0; n < r; n++) for (i = this[n]; i && i !== t; i = i.parentNode) if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && ne.find.matchesSelector(i, e))) {
        o.push(i);
        break;
      }
      return this.pushStack(o.length > 1 ? ne.uniqueSort(o) : o);
    },
    index: function(e) {return e ? 'string' == typeof e ? Z.call(ne(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;},
    add: function(e, t) {return this.pushStack(ne.uniqueSort(ne.merge(this.get(), ne(e, t))));},
    addBack: function(e) {return this.add(null == e ? this.prevObject : this.prevObject.filter(e));}
  }), ne.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function(e) {return ce(e, 'parentNode');},
    parentsUntil: function(e, t, i) {return ce(e, 'parentNode', i);},
    next: function(e) {return r(e, 'nextSibling');},
    prev: function(e) {return r(e, 'previousSibling');},
    nextAll: function(e) {return ce(e, 'nextSibling');},
    prevAll: function(e) {return ce(e, 'previousSibling');},
    nextUntil: function(e, t, i) {return ce(e, 'nextSibling', i);},
    prevUntil: function(e, t, i) {return ce(e, 'previousSibling', i);},
    siblings: function(e) {return de((e.parentNode || {}).firstChild, e);},
    children: function(e) {return de(e.firstChild);},
    contents: function(e) {return e.contentDocument || ne.merge([], e.childNodes);}
  }, function(e, t) {
    ne.fn[e] = function(i, n) {
      var r = ne.map(this, t, i);
      return 'Until' !== e.slice(-5) && (n = i), n && 'string' == typeof n && (r = ne.filter(n, r)), this.length > 1 && (ve[e] || ne.uniqueSort(r), ge.test(e) && r.reverse()), this.pushStack(r);
    };
  });
  var ye = /\S+/g;
  ne.Callbacks = function(e) {
    e = 'string' == typeof e ? o(e) : ne.extend({}, e);
    var t, i, n, r, s = [], a = [], l = -1, c = function() {
      for (r = e.once, n = t = !0; a.length; l = -1) for (i = a.shift(); ++l < s.length;) !1 === s[l].apply(i[0], i[1]) && e.stopOnFalse && (l = s.length, i = !1);
      e.memory || (i = !1), t = !1, r && (s = i ? [] : '');
    }, d = {
      add: function() {return s && (i && !t && (l = s.length - 1, a.push(i)), function t(i) {ne.each(i, function(i, n) {ne.isFunction(n) ? e.unique && d.has(n) || s.push(n) : n && n.length && 'string' !== ne.type(n) && t(n);});}(arguments), i && !t && c()), this;},
      remove: function() {return ne.each(arguments, function(e, t) {for (var i; (i = ne.inArray(t, s, i)) > -1;) s.splice(i, 1), i <= l && l--;}), this;},
      has: function(e) {return e ? ne.inArray(e, s) > -1 : s.length > 0;},
      empty: function() {return s && (s = []), this;},
      disable: function() {return r = a = [], s = i = '', this;},
      disabled: function() {return !s;},
      lock: function() {return r = a = [], i || (s = i = ''), this;},
      locked: function() {return !!r;},
      fireWith: function(e, i) {return r || (i = [e, (i = i || []).slice ? i.slice() : i], a.push(i), t || c()), this;},
      fire: function() {return d.fireWith(this, arguments), this;},
      fired: function() {return !!n;}
    };
    return d;
  }, ne.extend({
    Deferred: function(e) {
      var t = [['resolve', 'done', ne.Callbacks('once memory'), 'resolved'], ['reject', 'fail', ne.Callbacks('once memory'), 'rejected'], ['notify', 'progress', ne.Callbacks('memory')]],
          i = 'pending', n = {
            state: function() {return i;}, always: function() {return r.done(arguments).fail(arguments), this;}, then: function() {
              var e = arguments;
              return ne.Deferred(function(i) {
                ne.each(t, function(t, o) {
                  var s = ne.isFunction(e[t]) && e[t];
                  r[o[1]](function() {
                    var e = s && s.apply(this, arguments);
                    e && ne.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[o[0] + 'With'](this === n ? i.promise() : this, s ? [e] : arguments);
                  });
                }), e = null;
              }).promise();
            }, promise: function(e) {return null != e ? ne.extend(e, n) : n;}
          }, r = {};
      return n.pipe = n.then, ne.each(t, function(e, o) {
        var s = o[2], a = o[3];
        n[o[1]] = s.add, a && s.add(function() {i = a;}, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {return r[o[0] + 'With'](this === r ? n : this, arguments), this;}, r[o[0] + 'With'] = s.fireWith;
      }), n.promise(r), e && e.call(r, r), r;
    },
    when: function(e) {
      var t, i, n, r = 0, o = V.call(arguments), s = o.length, a = 1 !== s || e && ne.isFunction(e.promise) ? s : 0, l = 1 === a ? e : ne.Deferred(),
          c = function(e, i, n) {return function(r) {i[e] = this, n[e] = arguments.length > 1 ? V.call(arguments) : r, n === t ? l.notifyWith(i, n) : --a || l.resolveWith(i, n);};};
      if (s > 1) for (t = new Array(s), i = new Array(s), n = new Array(s); r < s; r++) o[r] && ne.isFunction(o[r].promise) ? o[r].promise().progress(c(r, i, t)).done(c(r, n, o)).fail(l.reject) : --a;
      return a || l.resolveWith(n, o), l.promise();
    }
  });
  var be;
  ne.fn.ready = function(e) {return ne.ready.promise().done(e), this;}, ne.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {e ? ne.readyWait++ : ne.ready(!0);},
    ready: function(e) {(!0 === e ? --ne.readyWait : ne.isReady) || (ne.isReady = !0, !0 !== e && --ne.readyWait > 0 || (be.resolveWith(Y, [ne]), ne.fn.triggerHandler && (ne(Y).triggerHandler('ready'), ne(Y).off('ready'))));}
  }), ne.ready.promise = function(t) {return be || (be = ne.Deferred(), 'complete' === Y.readyState || 'loading' !== Y.readyState && !Y.documentElement.doScroll ? e.setTimeout(ne.ready) : (Y.addEventListener('DOMContentLoaded', s), e.addEventListener('load', s))), be.promise(t);}, ne.ready.promise();
  var we = function(e, t, i, n, r, o, s) {
    var a = 0, l = e.length, c = null == i;
    if ('object' === ne.type(i)) {
      r = !0;
      for (a in i) we(e, t, a, i[a], !0, o, s);
    } else if (void 0 !== n && (r = !0, ne.isFunction(n) || (s = !0), c && (s ? (t.call(e, n), t = null) : (c = t, t = function(e, t, i) {return c.call(ne(e), i);})), t)) for (; a < l; a++) t(e[a], i, s ? n : n.call(e[a], a, t(e[a], i)));
    return r ? e : c ? t.call(e) : l ? t(e[0], i) : o;
  }, xe = function(e) {return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;};
  a.uid = 1, a.prototype = {
    register: function(e, t) {
      var i = t || {};
      return e.nodeType ? e[this.expando] = i : Object.defineProperty(e, this.expando, { value: i, writable: !0, configurable: !0 }), e[this.expando];
    }, cache: function(e) {
      if (!xe(e)) return {};
      var t = e[this.expando];
      return t || (t = {}, xe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function(e, t, i) {
      var n, r = this.cache(e);
      if ('string' == typeof t) r[t] = i; else for (n in t) r[n] = t[n];
      return r;
    }, get: function(e, t) {return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t];}, access: function(e, t, i) {
      var n;
      return void 0 === t || t && 'string' == typeof t && void 0 === i ? void 0 !== (n = this.get(e, t)) ? n : this.get(e, ne.camelCase(t)) : (this.set(e, t, i), void 0 !== i ? i : t);
    }, remove: function(e, t) {
      var i, n, r, o = e[this.expando];
      if (void 0 !== o) {
        if (void 0 === t) this.register(e); else {
          ne.isArray(t) ? n = t.concat(t.map(ne.camelCase)) : (r = ne.camelCase(t), n = t in o ? [t, r] : (n = r) in o ? [n] : n.match(ye) || []), i = n.length;
          for (; i--;) delete o[n[i]];
        }
        (void 0 === t || ne.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    }, hasData: function(e) {
      var t = e[this.expando];
      return void 0 !== t && !ne.isEmptyObject(t);
    }
  };
  var Ce = new a, Te = new a, ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, _e = /[A-Z]/g;
  ne.extend({
    hasData: function(e) {return Te.hasData(e) || Ce.hasData(e);},
    data: function(e, t, i) {return Te.access(e, t, i);},
    removeData: function(e, t) {Te.remove(e, t);},
    _data: function(e, t, i) {return Ce.access(e, t, i);},
    _removeData: function(e, t) {Ce.remove(e, t);}
  }), ne.fn.extend({
    data: function(e, t) {
      var i, n, r, o = this[0], s = o && o.attributes;
      if (void 0 === e) {
        if (this.length && (r = Te.get(o), 1 === o.nodeType && !Ce.get(o, 'hasDataAttrs'))) {
          for (i = s.length; i--;) s[i] && 0 === (n = s[i].name).indexOf('data-') && (n = ne.camelCase(n.slice(5)), l(o, n, r[n]));
          Ce.set(o, 'hasDataAttrs', !0);
        }
        return r;
      }
      return 'object' == typeof e ? this.each(function() {Te.set(this, e);}) : we(this, function(t) {
        var i, n;
        if (o && void 0 === t) {
          if (void 0 !== (i = Te.get(o, e) || Te.get(o, e.replace(_e, '-$&').toLowerCase()))) return i;
          if (n = ne.camelCase(e), void 0 !== (i = Te.get(o, n))) return i;
          if (void 0 !== (i = l(o, n, void 0))) return i;
        } else n = ne.camelCase(e), this.each(function() {
          var i = Te.get(this, n);
          Te.set(this, n, t), e.indexOf('-') > -1 && void 0 !== i && Te.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    }, removeData: function(e) {return this.each(function() {Te.remove(this, e);});}
  }), ne.extend({
    queue: function(e, t, i) {
      var n;
      if (e) return t = (t || 'fx') + 'queue', n = Ce.get(e, t), i && (!n || ne.isArray(i) ? n = Ce.access(e, t, ne.makeArray(i)) : n.push(i)), n || [];
    }, dequeue: function(e, t) {
      t = t || 'fx';
      var i = ne.queue(e, t), n = i.length, r = i.shift(), o = ne._queueHooks(e, t);
      'inprogress' === r && (r = i.shift(), n--), r && ('fx' === t && i.unshift('inprogress'), delete o.stop, r.call(e, function() {ne.dequeue(e, t);}, o)), !n && o && o.empty.fire();
    }, _queueHooks: function(e, t) {
      var i = t + 'queueHooks';
      return Ce.get(e, i) || Ce.access(e, i, { empty: ne.Callbacks('once memory').add(function() {Ce.remove(e, [t + 'queue', i]);}) });
    }
  }), ne.fn.extend({
    queue: function(e, t) {
      var i = 2;
      return 'string' != typeof e && (t = e, e = 'fx', i--), arguments.length < i ? ne.queue(this[0], e) : void 0 === t ? this : this.each(function() {
        var i = ne.queue(this, e, t);
        ne._queueHooks(this, e), 'fx' === e && 'inprogress' !== i[0] && ne.dequeue(this, e);
      });
    },
    dequeue: function(e) {return this.each(function() {ne.dequeue(this, e);});},
    clearQueue: function(e) {return this.queue(e || 'fx', []);},
    promise: function(e, t) {
      var i, n = 1, r = ne.Deferred(), o = this, s = this.length, a = function() {--n || r.resolveWith(o, [o]);};
      for ('string' != typeof e && (t = e, e = void 0), e = e || 'fx'; s--;) (i = Ce.get(o[s], e + 'queueHooks')) && i.empty && (n++, i.empty.add(a));
      return a(), r.promise(t);
    }
  });
  var Se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ee = new RegExp('^(?:([+-])=|)(' + Se + ')([a-z%]*)$', 'i'), Ie = ['Top', 'Right', 'Bottom', 'Left'],
      Ae = function(e, t) {return e = t || e, 'none' === ne.css(e, 'display') || !ne.contains(e.ownerDocument, e);}, De = /^(?:checkbox|radio)$/i, $e = /<([\w:-]+)/, Pe = /^$|\/(?:java|ecma)script/i,
      Me = {
        option: [1, '<select multiple=\'multiple\'>', '</select>'],
        thead: [1, '<table>', '</table>'],
        col: [2, '<table><colgroup>', '</colgroup></table>'],
        tr: [2, '<table><tbody>', '</tbody></table>'],
        td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
        _default: [0, '', '']
      };
  Me.optgroup = Me.option, Me.tbody = Me.tfoot = Me.colgroup = Me.caption = Me.thead, Me.th = Me.td;
  var Le = /<|&#?\w+;/;
  !function() {
    var e = Y.createDocumentFragment().appendChild(Y.createElement('div')), t = Y.createElement('input');
    t.setAttribute('type', 'radio'), t.setAttribute('checked', 'checked'), t.setAttribute('name', 't'), e.appendChild(t), ie.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = '<textarea>x</textarea>', ie.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
  }();
  var Oe = /^key/, Ne = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, je = /^([^.]*)(?:\.(.+)|)/;
  ne.event = {
    global: {},
    add: function(e, t, i, n, r) {
      var o, s, a, l, c, d, u, p, h, f, m, g = Ce.get(e);
      if (g) for (i.handler && (i = (o = i).handler, r = o.selector), i.guid || (i.guid = ne.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {return void 0 !== ne && ne.event.triggered !== t.type ? ne.event.dispatch.apply(e, arguments) : void 0;}), c = (t = (t || '').match(ye) || ['']).length; c--;) h = m = (a = je.exec(t[c]) || [])[1], f = (a[2] || '').split('.').sort(), h && (u = ne.event.special[h] || {}, h = (r ? u.delegateType : u.bindType) || h, u = ne.event.special[h] || {}, d = ne.extend({
        type: h,
        origType: m,
        data: n,
        handler: i,
        guid: i.guid,
        selector: r,
        needsContext: r && ne.expr.match.needsContext.test(r),
        namespace: f.join('.')
      }, o), (p = l[h]) || ((p = l[h] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, n, f, s) || e.addEventListener && e.addEventListener(h, s)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)), r ? p.splice(p.delegateCount++, 0, d) : p.push(d), ne.event.global[h] = !0);
    },
    remove: function(e, t, i, n, r) {
      var o, s, a, l, c, d, u, p, h, f, m, g = Ce.hasData(e) && Ce.get(e);
      if (g && (l = g.events)) {
        for (c = (t = (t || '').match(ye) || ['']).length; c--;) if (a = je.exec(t[c]) || [], h = m = a[1], f = (a[2] || '').split('.').sort(), h) {
          for (u = ne.event.special[h] || {}, p = l[h = (n ? u.delegateType : u.bindType) || h] || [], a = a[2] && new RegExp('(^|\\.)' + f.join('\\.(?:.*\\.|)') + '(\\.|$)'), s = o = p.length; o--;) d = p[o], !r && m !== d.origType || i && i.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ('**' !== n || !d.selector) || (p.splice(o, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
          s && !p.length && (u.teardown && !1 !== u.teardown.call(e, f, g.handle) || ne.removeEvent(e, h, g.handle), delete l[h]);
        } else for (h in l) ne.event.remove(e, h + t[c], i, n, !0);
        ne.isEmptyObject(l) && Ce.remove(e, 'handle events');
      }
    },
    dispatch: function(e) {
      e = ne.event.fix(e);
      var t, i, n, r, o, s = [], a = V.call(arguments), l = (Ce.get(this, 'events') || {})[e.type] || [], c = ne.event.special[e.type] || {};
      if (a[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
        for (s = ne.event.handlers.call(this, e, l), t = 0; (r = s[t++]) && !e.isPropagationStopped();) for (e.currentTarget = r.elem, i = 0; (o = r.handlers[i++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (n = ((ne.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function(e, t) {
      var i, n, r, o, s = [], a = t.delegateCount, l = e.target;
      if (a && l.nodeType && ('click' !== e.type || isNaN(e.button) || e.button < 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || 'click' !== e.type)) {
        for (n = [], i = 0; i < a; i++) void 0 === n[r = (o = t[i]).selector + ' '] && (n[r] = o.needsContext ? ne(r, this).index(l) > -1 : ne.find(r, this, null, [l]).length), n[r] && n.push(o);
        n.length && s.push({ elem: l, handlers: n });
      }
      return a < t.length && s.push({ elem: this, handlers: t.slice(a) }), s;
    },
    props: 'altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
    fixHooks: {},
    keyHooks: { props: 'char charCode key keyCode'.split(' '), filter: function(e, t) {return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;} },
    mouseHooks: {
      props: 'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(' '), filter: function(e, t) {
        var i, n, r, o = t.button;
        return null == e.pageX && null != t.clientX && (n = (i = e.target.ownerDocument || Y).documentElement, r = i.body, e.pageX = t.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e;
      }
    },
    fix: function(e) {
      if (e[ne.expando]) return e;
      var t, i, n, r = e.type, o = e, s = this.fixHooks[r];
      for (s || (this.fixHooks[r] = s = Ne.test(r) ? this.mouseHooks : Oe.test(r) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, e = new ne.Event(o), t = n.length; t--;) e[i = n[t]] = o[i];
      return e.target || (e.target = Y), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e;
    },
    special: {
      load: { noBubble: !0 },
      focus: { trigger: function() {if (this !== m() && this.focus) return this.focus(), !1;}, delegateType: 'focusin' },
      blur: { trigger: function() {if (this === m() && this.blur) return this.blur(), !1;}, delegateType: 'focusout' },
      click: { trigger: function() {if ('checkbox' === this.type && this.click && ne.nodeName(this, 'input')) return this.click(), !1;}, _default: function(e) {return ne.nodeName(e.target, 'a');} },
      beforeunload: { postDispatch: function(e) {void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);} }
    }
  }, ne.removeEvent = function(e, t, i) {e.removeEventListener && e.removeEventListener(t, i);}, ne.Event = function(e, t) {
    if (!(this instanceof ne.Event)) return new ne.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? h : f) : this.type = e, t && ne.extend(this, t), this.timeStamp = e && e.timeStamp || ne.now(), this[ne.expando] = !0;
  }, ne.Event.prototype = {
    constructor: ne.Event,
    isDefaultPrevented: f,
    isPropagationStopped: f,
    isImmediatePropagationStopped: f,
    isSimulated: !1,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = h, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = h, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = h, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, ne.each({ mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' }, function(e, t) {
    ne.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function(e) {
        var i, n = this, r = e.relatedTarget, o = e.handleObj;
        return r && (r === n || ne.contains(n, r)) || (e.type = o.origType, i = o.handler.apply(this, arguments), e.type = t), i;
      }
    };
  }), ne.fn.extend({
    on: function(e, t, i, n) {return g(this, e, t, i, n);}, one: function(e, t, i, n) {return g(this, e, t, i, n, 1);}, off: function(e, t, i) {
      var n, r;
      if (e && e.preventDefault && e.handleObj) return n = e.handleObj, ne(e.delegateTarget).off(n.namespace ? n.origType + '.' + n.namespace : n.origType, n.selector, n.handler), this;
      if ('object' == typeof e) {
        for (r in e) this.off(r, t, e[r]);
        return this;
      }
      return !1 !== t && 'function' != typeof t || (i = t, t = void 0), !1 === i && (i = f), this.each(function() {ne.event.remove(this, e, i, t);});
    }
  });
  var Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, He = /<script|<style|<link/i, Re = /checked\s*(?:[^=]|=\s*.checked.)/i, ze = /^true\/(.*)/,
      qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  ne.extend({
    htmlPrefilter: function(e) {return e.replace(Fe, '<$1></$2>');},
    clone: function(e, t, i) {
      var n, r, o, s, a = e.cloneNode(!0), l = ne.contains(e.ownerDocument, e);
      if (!(ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ne.isXMLDoc(e))) for (s = d(a), n = 0, r = (o = d(e)).length; n < r; n++) x(o[n], s[n]);
      if (t) if (i) for (o = o || d(e), s = s || d(a), n = 0, r = o.length; n < r; n++) w(o[n], s[n]); else w(e, a);
      return (s = d(a, 'script')).length > 0 && u(s, !l && d(e, 'script')), a;
    },
    cleanData: function(e) {
      for (var t, i, n, r = ne.event.special, o = 0; void 0 !== (i = e[o]); o++) if (xe(i)) {
        if (t = i[Ce.expando]) {
          if (t.events) for (n in t.events) r[n] ? ne.event.remove(i, n) : ne.removeEvent(i, n, t.handle);
          i[Ce.expando] = void 0;
        }
        i[Te.expando] && (i[Te.expando] = void 0);
      }
    }
  }), ne.fn.extend({
    domManip: C,
    detach: function(e) {return T(this, e, !0);},
    remove: function(e) {return T(this, e);},
    text: function(e) {return we(this, function(e) {return void 0 === e ? ne.text(this) : this.empty().each(function() {1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);});}, null, e, arguments.length);},
    append: function() {return C(this, arguments, function(e) {1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || v(this, e).appendChild(e);});},
    prepend: function() {
      return C(this, arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = v(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function() {return C(this, arguments, function(e) {this.parentNode && this.parentNode.insertBefore(e, this);});},
    after: function() {return C(this, arguments, function(e) {this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);});},
    empty: function() {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ne.cleanData(d(e, !1)), e.textContent = '');
      return this;
    },
    clone: function(e, t) {return e = null != e && e, t = null == t ? e : t, this.map(function() {return ne.clone(this, e, t);});},
    html: function(e) {
      return we(this, function(e) {
        var t = this[0] || {}, i = 0, n = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ('string' == typeof e && !He.test(e) && !Me[($e.exec(e) || ['', ''])[1].toLowerCase()]) {
          e = ne.htmlPrefilter(e);
          try {
            for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (ne.cleanData(d(t, !1)), t.innerHTML = e);
            t = 0;
          } catch (e) {}
        }
        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function() {
      var e = [];
      return C(this, arguments, function(t) {
        var i = this.parentNode;
        ne.inArray(this, e) < 0 && (ne.cleanData(d(this)), i && i.replaceChild(t, this));
      }, e);
    }
  }), ne.each({
    appendTo: 'append',
    prependTo: 'prepend',
    insertBefore: 'before',
    insertAfter: 'after',
    replaceAll: 'replaceWith'
  }, function(e, t) {
    ne.fn[e] = function(e) {
      for (var i, n = [], r = ne(e), o = r.length - 1, s = 0; s <= o; s++) i = s === o ? this : this.clone(!0), ne(r[s])[t](i), K.apply(n, i.get());
      return this.pushStack(n);
    };
  });
  var We, Be = { HTML: 'block', BODY: 'block' }, Ge = /^margin/, Ue = new RegExp('^(' + Se + ')(?!px)[a-z%]+$', 'i'), Xe = function(t) {
    var i = t.ownerDocument.defaultView;
    return i && i.opener || (i = e), i.getComputedStyle(t);
  }, Ye = function(e, t, i, n) {
    var r, o, s = {};
    for (o in t) s[o] = e.style[o], e.style[o] = t[o];
    r = i.apply(e, n || []);
    for (o in t) e.style[o] = s[o];
    return r;
  }, Ve = Y.documentElement;
  !function() {
    function t() {
      a.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%', a.innerHTML = '', Ve.appendChild(s);
      var t = e.getComputedStyle(a);
      i = '1%' !== t.top, o = '2px' === t.marginLeft, n = '4px' === t.width, a.style.marginRight = '50%', r = '4px' === t.marginRight, Ve.removeChild(s);
    }

    var i, n, r, o, s = Y.createElement('div'), a = Y.createElement('div');
    a.style && (a.style.backgroundClip = 'content-box', a.cloneNode(!0).style.backgroundClip = '', ie.clearCloneStyle = 'content-box' === a.style.backgroundClip, s.style.cssText = 'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute', s.appendChild(a), ne.extend(ie, {
      pixelPosition: function() {return t(), i;},
      boxSizingReliable: function() {return null == n && t(), n;},
      pixelMarginRight: function() {return null == n && t(), r;},
      reliableMarginLeft: function() {return null == n && t(), o;},
      reliableMarginRight: function() {
        var t, i = a.appendChild(Y.createElement('div'));
        return i.style.cssText = a.style.cssText = '-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0', i.style.marginRight = i.style.width = '0', a.style.width = '1px', Ve.appendChild(s), t = !parseFloat(e.getComputedStyle(i).marginRight), Ve.removeChild(s), a.removeChild(i), t;
      }
    }));
  }();
  var Qe = /^(none|table(?!-c[ea]).+)/, Ke = { position: 'absolute', visibility: 'hidden', display: 'block' }, Ze = { letterSpacing: '0', fontWeight: '400' }, Je = ['Webkit', 'O', 'Moz', 'ms'],
      et = Y.createElement('div').style;
  ne.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var i = S(e, 'opacity');
            return '' === i ? '1' : i;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { float: 'cssFloat' },
    style: function(e, t, i, n) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r, o, s, a = ne.camelCase(t), l = e.style;
        if (t = ne.cssProps[a] || (ne.cssProps[a] = I(a) || a), s = ne.cssHooks[t] || ne.cssHooks[a], void 0 === i) return s && 'get' in s && void 0 !== (r = s.get(e, !1, n)) ? r : l[t];
        'string' == (o = typeof i) && (r = Ee.exec(i)) && r[1] && (i = c(e, t, r), o = 'number'), null != i && i === i && ('number' === o && (i += r && r[3] || (ne.cssNumber[a] ? '' : 'px')), ie.clearCloneStyle || '' !== i || 0 !== t.indexOf('background') || (l[t] = 'inherit'), s && 'set' in s && void 0 === (i = s.set(e, i, n)) || (l[t] = i));
      }
    },
    css: function(e, t, i, n) {
      var r, o, s, a = ne.camelCase(t);
      return t = ne.cssProps[a] || (ne.cssProps[a] = I(a) || a), (s = ne.cssHooks[t] || ne.cssHooks[a]) && 'get' in s && (r = s.get(e, !0, i)), void 0 === r && (r = S(e, t, n)), 'normal' === r && t in Ze && (r = Ze[t]), '' === i || i ? (o = parseFloat(r), !0 === i || isFinite(o) ? o || 0 : r) : r;
    }
  }), ne.each(['height', 'width'], function(e, t) {
    ne.cssHooks[t] = {
      get: function(e, i, n) {if (i) return Qe.test(ne.css(e, 'display')) && 0 === e.offsetWidth ? Ye(e, Ke, function() {return $(e, t, n);}) : $(e, t, n);},
      set: function(e, i, n) {
        var r, o = n && Xe(e), s = n && D(e, t, n, 'border-box' === ne.css(e, 'boxSizing', !1, o), o);
        return s && (r = Ee.exec(i)) && 'px' !== (r[3] || 'px') && (e.style[t] = i, i = ne.css(e, t)), A(0, i, s);
      }
    };
  }), ne.cssHooks.marginLeft = E(ie.reliableMarginLeft, function(e, t) {if (t) return (parseFloat(S(e, 'marginLeft')) || e.getBoundingClientRect().left - Ye(e, { marginLeft: 0 }, function() {return e.getBoundingClientRect().left;})) + 'px';}), ne.cssHooks.marginRight = E(ie.reliableMarginRight, function(e, t) {if (t) return Ye(e, { display: 'inline-block' }, S, [e, 'marginRight']);}), ne.each({
    margin: '',
    padding: '',
    border: 'Width'
  }, function(e, t) {
    ne.cssHooks[e + t] = {
      expand: function(i) {
        for (var n = 0, r = {}, o = 'string' == typeof i ? i.split(' ') : [i]; n < 4; n++) r[e + Ie[n] + t] = o[n] || o[n - 2] || o[0];
        return r;
      }
    }, Ge.test(e) || (ne.cssHooks[e + t].set = A);
  }), ne.fn.extend({
    css: function(e, t) {
      return we(this, function(e, t, i) {
        var n, r, o = {}, s = 0;
        if (ne.isArray(t)) {
          for (n = Xe(e), r = t.length; s < r; s++) o[t[s]] = ne.css(e, t[s], !1, n);
          return o;
        }
        return void 0 !== i ? ne.style(e, t, i) : ne.css(e, t);
      }, e, t, arguments.length > 1);
    },
    show: function() {return P(this, !0);},
    hide: function() {return P(this);},
    toggle: function(e) {return 'boolean' == typeof e ? e ? this.show() : this.hide() : this.each(function() {Ae(this) ? ne(this).show() : ne(this).hide();});}
  }), ne.Tween = M, M.prototype = {
    constructor: M,
    init: function(e, t, i, n, r, o) {this.elem = e, this.prop = i, this.easing = r || ne.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = o || (ne.cssNumber[i] ? '' : 'px');},
    cur: function() {
      var e = M.propHooks[this.prop];
      return e && e.get ? e.get(this) : M.propHooks._default.get(this);
    },
    run: function(e) {
      var t, i = M.propHooks[this.prop];
      return this.options.duration ? this.pos = t = ne.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : M.propHooks._default.set(this), this;
    }
  }, M.prototype.init.prototype = M.prototype, M.propHooks = {
    _default: {
      get: function(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ne.css(e.elem, e.prop, '')) && 'auto' !== t ? t : 0;
      },
      set: function(e) {ne.fx.step[e.prop] ? ne.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ne.cssProps[e.prop]] && !ne.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ne.style(e.elem, e.prop, e.now + e.unit);}
    }
  }, M.propHooks.scrollTop = M.propHooks.scrollLeft = { set: function(e) {e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);} }, ne.easing = {
    linear: function(e) {return e;},
    swing: function(e) {return .5 - Math.cos(e * Math.PI) / 2;},
    _default: 'swing'
  }, ne.fx = M.prototype.init, ne.fx.step = {};
  var tt, it, nt = /^(?:toggle|show|hide)$/, rt = /queueHooks$/;
  ne.Animation = ne.extend(F, {
    tweeners: {
      '*': [function(e, t) {
        var i = this.createTween(e, t);
        return c(i.elem, e, Ee.exec(t), i), i;
      }]
    }, tweener: function(e, t) {
      ne.isFunction(e) ? (t = e, e = ['*']) : e = e.match(ye);
      for (var i, n = 0, r = e.length; n < r; n++) i = e[n], F.tweeners[i] = F.tweeners[i] || [], F.tweeners[i].unshift(t);
    }, prefilters: [function(e, t, i) {
      var n, r, o, s, a, l, c, d = this, u = {}, p = e.style, h = e.nodeType && Ae(e), f = Ce.get(e, 'fxshow');
      i.queue || (null == (a = ne._queueHooks(e, 'fx')).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {a.unqueued || l();}), a.unqueued++, d.always(function() {d.always(function() {a.unqueued--, ne.queue(e, 'fx').length || a.empty.fire();});})), 1 === e.nodeType && ('height' in t || 'width' in t) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], 'inline' === ('none' === (c = ne.css(e, 'display')) ? Ce.get(e, 'olddisplay') || _(e.nodeName) : c) && 'none' === ne.css(e, 'float') && (p.display = 'inline-block')), i.overflow && (p.overflow = 'hidden', d.always(function() {p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2];}));
      for (n in t) if (r = t[n], nt.exec(r)) {
        if (delete t[n], o = o || 'toggle' === r, r === (h ? 'hide' : 'show')) {
          if ('show' !== r || !f || void 0 === f[n]) continue;
          h = !0;
        }
        u[n] = f && f[n] || ne.style(e, n);
      } else c = void 0;
      if (ne.isEmptyObject(u)) 'inline' === ('none' === c ? _(e.nodeName) : c) && (p.display = c); else {
        f ? 'hidden' in f && (h = f.hidden) : f = Ce.access(e, 'fxshow', {}), o && (f.hidden = !h), h ? ne(e).show() : d.done(function() {ne(e).hide();}), d.done(function() {
          var t;
          Ce.remove(e, 'fxshow');
          for (t in u) ne.style(e, t, u[t]);
        });
        for (n in u) s = N(h ? f[n] : 0, n, d), n in f || (f[n] = s.start, h && (s.end = s.start, s.start = 'width' === n || 'height' === n ? 1 : 0));
      }
    }], prefilter: function(e, t) {t ? F.prefilters.unshift(e) : F.prefilters.push(e);}
  }), ne.speed = function(e, t, i) {
    var n = e && 'object' == typeof e ? ne.extend({}, e) : {
      complete: i || !i && t || ne.isFunction(e) && e,
      duration: e,
      easing: i && t || t && !ne.isFunction(t) && t
    };
    return n.duration = ne.fx.off ? 0 : 'number' == typeof n.duration ? n.duration : n.duration in ne.fx.speeds ? ne.fx.speeds[n.duration] : ne.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = 'fx'), n.old = n.complete, n.complete = function() {ne.isFunction(n.old) && n.old.call(this), n.queue && ne.dequeue(this, n.queue);}, n;
  }, ne.fn.extend({
    fadeTo: function(e, t, i, n) {return this.filter(Ae).css('opacity', 0).show().end().animate({ opacity: t }, e, i, n);},
    animate: function(e, t, i, n) {
      var r = ne.isEmptyObject(e), o = ne.speed(t, i, n), s = function() {
        var t = F(this, ne.extend({}, e), o);
        (r || Ce.get(this, 'finish')) && t.stop(!0);
      };
      return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
    },
    stop: function(e, t, i) {
      var n = function(e) {
        var t = e.stop;
        delete e.stop, t(i);
      };
      return 'string' != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || 'fx', []), this.each(function() {
        var t = !0, r = null != e && e + 'queueHooks', o = ne.timers, s = Ce.get(this);
        if (r) s[r] && s[r].stop && n(s[r]); else for (r in s) s[r] && s[r].stop && rt.test(r) && n(s[r]);
        for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(i), t = !1, o.splice(r, 1));
        !t && i || ne.dequeue(this, e);
      });
    },
    finish: function(e) {
      return !1 !== e && (e = e || 'fx'), this.each(function() {
        var t, i = Ce.get(this), n = i[e + 'queue'], r = i[e + 'queueHooks'], o = ne.timers, s = n ? n.length : 0;
        for (i.finish = !0, ne.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = 0; t < s; t++) n[t] && n[t].finish && n[t].finish.call(this);
        delete i.finish;
      });
    }
  }), ne.each(['toggle', 'show', 'hide'], function(e, t) {
    var i = ne.fn[t];
    ne.fn[t] = function(e, n, r) {return null == e || 'boolean' == typeof e ? i.apply(this, arguments) : this.animate(O(t, !0), e, n, r);};
  }), ne.each({
    slideDown: O('show'),
    slideUp: O('hide'),
    slideToggle: O('toggle'),
    fadeIn: { opacity: 'show' },
    fadeOut: { opacity: 'hide' },
    fadeToggle: { opacity: 'toggle' }
  }, function(e, t) {ne.fn[e] = function(e, i, n) {return this.animate(t, e, i, n);};}), ne.timers = [], ne.fx.tick = function() {
    var e, t = 0, i = ne.timers;
    for (tt = ne.now(); t < i.length; t++) (e = i[t])() || i[t] !== e || i.splice(t--, 1);
    i.length || ne.fx.stop(), tt = void 0;
  }, ne.fx.timer = function(e) {ne.timers.push(e), e() ? ne.fx.start() : ne.timers.pop();}, ne.fx.interval = 13, ne.fx.start = function() {it || (it = e.setInterval(ne.fx.tick, ne.fx.interval));}, ne.fx.stop = function() {e.clearInterval(it), it = null;}, ne.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, ne.fn.delay = function(t, i) {
    return t = ne.fx ? ne.fx.speeds[t] || t : t, i = i || 'fx', this.queue(i, function(i, n) {
      var r = e.setTimeout(i, t);
      n.stop = function() {e.clearTimeout(r);};
    });
  }, function() {
    var e = Y.createElement('input'), t = Y.createElement('select'), i = t.appendChild(Y.createElement('option'));
    e.type = 'checkbox', ie.checkOn = '' !== e.value, ie.optSelected = i.selected, t.disabled = !0, ie.optDisabled = !i.disabled, (e = Y.createElement('input')).value = 't', e.type = 'radio', ie.radioValue = 't' === e.value;
  }();
  var ot, st = ne.expr.attrHandle;
  ne.fn.extend({
    attr: function(e, t) {return we(this, ne.attr, e, t, arguments.length > 1);},
    removeAttr: function(e) {return this.each(function() {ne.removeAttr(this, e);});}
  }), ne.extend({
    attr: function(e, t, i) {
      var n, r, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? ne.prop(e, t, i) : (1 === o && ne.isXMLDoc(e) || (t = t.toLowerCase(), r = ne.attrHooks[t] || (ne.expr.match.bool.test(t) ? ot : void 0)), void 0 !== i ? null === i ? void ne.removeAttr(e, t) : r && 'set' in r && void 0 !== (n = r.set(e, i, t)) ? n : (e.setAttribute(t, i + ''), i) : r && 'get' in r && null !== (n = r.get(e, t)) ? n : null == (n = ne.find.attr(e, t)) ? void 0 : n);
    }, attrHooks: {
      type: {
        set: function(e, t) {
          if (!ie.radioValue && 'radio' === t && ne.nodeName(e, 'input')) {
            var i = e.value;
            return e.setAttribute('type', t), i && (e.value = i), t;
          }
        }
      }
    }, removeAttr: function(e, t) {
      var i, n, r = 0, o = t && t.match(ye);
      if (o && 1 === e.nodeType) for (; i = o[r++];) n = ne.propFix[i] || i, ne.expr.match.bool.test(i) && (e[n] = !1), e.removeAttribute(i);
    }
  }), ot = { set: function(e, t, i) {return !1 === t ? ne.removeAttr(e, i) : e.setAttribute(i, i), i;} }, ne.each(ne.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var i = st[t] || ne.find.attr;
    st[t] = function(e, t, n) {
      var r, o;
      return n || (o = st[t], st[t] = r, r = null != i(e, t, n) ? t.toLowerCase() : null, st[t] = o), r;
    };
  });
  var at = /^(?:input|select|textarea|button)$/i, lt = /^(?:a|area)$/i;
  ne.fn.extend({
    prop: function(e, t) {return we(this, ne.prop, e, t, arguments.length > 1);},
    removeProp: function(e) {return this.each(function() {delete this[ne.propFix[e] || e];});}
  }), ne.extend({
    prop: function(e, t, i) {
      var n, r, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ne.isXMLDoc(e) || (t = ne.propFix[t] || t, r = ne.propHooks[t]), void 0 !== i ? r && 'set' in r && void 0 !== (n = r.set(e, i, t)) ? n : e[t] = i : r && 'get' in r && null !== (n = r.get(e, t)) ? n : e[t];
    }, propHooks: {
      tabIndex: {
        get: function(e) {
          var t = ne.find.attr(e, 'tabindex');
          return t ? parseInt(t, 10) : at.test(e.nodeName) || lt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    }, propFix: { for: 'htmlFor', class: 'className' }
  }), ie.optSelected || (ne.propHooks.selected = {
    get: function(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    }, set: function(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), ne.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function() {ne.propFix[this.toLowerCase()] = this;});
  var ct = /[\t\r\n\f]/g;
  ne.fn.extend({
    addClass: function(e) {
      var t, i, n, r, o, s, a, l = 0;
      if (ne.isFunction(e)) return this.each(function(t) {ne(this).addClass(e.call(this, t, H(this)));});
      if ('string' == typeof e && e) for (t = e.match(ye) || []; i = this[l++];) if (r = H(i), n = 1 === i.nodeType && (' ' + r + ' ').replace(ct, ' ')) {
        for (s = 0; o = t[s++];) n.indexOf(' ' + o + ' ') < 0 && (n += o + ' ');
        r !== (a = ne.trim(n)) && i.setAttribute('class', a);
      }
      return this;
    }, removeClass: function(e) {
      var t, i, n, r, o, s, a, l = 0;
      if (ne.isFunction(e)) return this.each(function(t) {ne(this).removeClass(e.call(this, t, H(this)));});
      if (!arguments.length) return this.attr('class', '');
      if ('string' == typeof e && e) for (t = e.match(ye) || []; i = this[l++];) if (r = H(i), n = 1 === i.nodeType && (' ' + r + ' ').replace(ct, ' ')) {
        for (s = 0; o = t[s++];) for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(' ' + o + ' ', ' ');
        r !== (a = ne.trim(n)) && i.setAttribute('class', a);
      }
      return this;
    }, toggleClass: function(e, t) {
      var i = typeof e;
      return 'boolean' == typeof t && 'string' === i ? t ? this.addClass(e) : this.removeClass(e) : ne.isFunction(e) ? this.each(function(i) {ne(this).toggleClass(e.call(this, i, H(this), t), t);}) : this.each(function() {
        var t, n, r, o;
        if ('string' === i) for (n = 0, r = ne(this), o = e.match(ye) || []; t = o[n++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t); else void 0 !== e && 'boolean' !== i || ((t = H(this)) && Ce.set(this, '__className__', t), this.setAttribute && this.setAttribute('class', t || !1 === e ? '' : Ce.get(this, '__className__') || ''));
      });
    }, hasClass: function(e) {
      var t, i, n = 0;
      for (t = ' ' + e + ' '; i = this[n++];) if (1 === i.nodeType && (' ' + H(i) + ' ').replace(ct, ' ').indexOf(t) > -1) return !0;
      return !1;
    }
  });
  var dt = /\r/g, ut = /[\x20\t\r\n\f]+/g;
  ne.fn.extend({
    val: function(e) {
      var t, i, n, r = this[0];
      {
        if (arguments.length) return n = ne.isFunction(e), this.each(function(i) {
          var r;
          1 === this.nodeType && (null == (r = n ? e.call(this, i, ne(this).val()) : e) ? r = '' : 'number' == typeof r ? r += '' : ne.isArray(r) && (r = ne.map(r, function(e) {return null == e ? '' : e + '';})), (t = ne.valHooks[this.type] || ne.valHooks[this.nodeName.toLowerCase()]) && 'set' in t && void 0 !== t.set(this, r, 'value') || (this.value = r));
        });
        if (r) return (t = ne.valHooks[r.type] || ne.valHooks[r.nodeName.toLowerCase()]) && 'get' in t && void 0 !== (i = t.get(r, 'value')) ? i : 'string' == typeof (i = r.value) ? i.replace(dt, '') : null == i ? '' : i;
      }
    }
  }), ne.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = ne.find.attr(e, 'value');
          return null != t ? t : ne.trim(ne.text(e)).replace(ut, ' ');
        }
      },
      select: {
        get: function(e) {
          for (var t, i, n = e.options, r = e.selectedIndex, o = 'select-one' === e.type || r < 0, s = o ? null : [], a = o ? r + 1 : n.length, l = r < 0 ? a : o ? r : 0; l < a; l++) if (((i = n[l]).selected || l === r) && (ie.optDisabled ? !i.disabled : null === i.getAttribute('disabled')) && (!i.parentNode.disabled || !ne.nodeName(i.parentNode, 'optgroup'))) {
            if (t = ne(i).val(), o) return t;
            s.push(t);
          }
          return s;
        }, set: function(e, t) {
          for (var i, n, r = e.options, o = ne.makeArray(t), s = r.length; s--;) ((n = r[s]).selected = ne.inArray(ne.valHooks.option.get(n), o) > -1) && (i = !0);
          return i || (e.selectedIndex = -1), o;
        }
      }
    }
  }), ne.each(['radio', 'checkbox'], function() {ne.valHooks[this] = { set: function(e, t) {if (ne.isArray(t)) return e.checked = ne.inArray(ne(e).val(), t) > -1;} }, ie.checkOn || (ne.valHooks[this].get = function(e) {return null === e.getAttribute('value') ? 'on' : e.value;});});
  var pt = /^(?:focusinfocus|focusoutblur)$/;
  ne.extend(ne.event, {
    trigger: function(t, i, n, r) {
      var o, s, a, l, c, d, u, p = [n || Y], h = te.call(t, 'type') ? t.type : t, f = te.call(t, 'namespace') ? t.namespace.split('.') : [];
      if (s = a = n = n || Y, 3 !== n.nodeType && 8 !== n.nodeType && !pt.test(h + ne.event.triggered) && (h.indexOf('.') > -1 && (h = (f = h.split('.')).shift(), f.sort()), c = h.indexOf(':') < 0 && 'on' + h, t = t[ne.expando] ? t : new ne.Event(h, 'object' == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = f.join('.'), t.rnamespace = t.namespace ? new RegExp('(^|\\.)' + f.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : ne.makeArray(i, [t]), u = ne.event.special[h] || {}, r || !u.trigger || !1 !== u.trigger.apply(n, i))) {
        if (!r && !u.noBubble && !ne.isWindow(n)) {
          for (l = u.delegateType || h, pt.test(l + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
          a === (n.ownerDocument || Y) && p.push(a.defaultView || a.parentWindow || e);
        }
        for (o = 0; (s = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : u.bindType || h, (d = (Ce.get(s, 'events') || {})[t.type] && Ce.get(s, 'handle')) && d.apply(s, i), (d = c && s[c]) && d.apply && xe(s) && (t.result = d.apply(s, i), !1 === t.result && t.preventDefault());
        return t.type = h, r || t.isDefaultPrevented() || u._default && !1 !== u._default.apply(p.pop(), i) || !xe(n) || c && ne.isFunction(n[h]) && !ne.isWindow(n) && ((a = n[c]) && (n[c] = null), ne.event.triggered = h, n[h](), ne.event.triggered = void 0, a && (n[c] = a)), t.result;
      }
    }, simulate: function(e, t, i) {
      var n = ne.extend(new ne.Event, i, { type: e, isSimulated: !0 });
      ne.event.trigger(n, null, t);
    }
  }), ne.fn.extend({
    trigger: function(e, t) {return this.each(function() {ne.event.trigger(e, t, this);});}, triggerHandler: function(e, t) {
      var i = this[0];
      if (i) return ne.event.trigger(e, t, i, !0);
    }
  }), ne.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function(e, t) {ne.fn[t] = function(e, i) {return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t);};}), ne.fn.extend({ hover: function(e, t) {return this.mouseenter(e).mouseleave(t || e);} }), ie.focusin = 'onfocusin' in e, ie.focusin || ne.each({
    focus: 'focusin',
    blur: 'focusout'
  }, function(e, t) {
    var i = function(e) {ne.event.simulate(t, e.target, ne.event.fix(e));};
    ne.event.special[t] = {
      setup: function() {
        var n = this.ownerDocument || this, r = Ce.access(n, t);
        r || n.addEventListener(e, i, !0), Ce.access(n, t, (r || 0) + 1);
      }, teardown: function() {
        var n = this.ownerDocument || this, r = Ce.access(n, t) - 1;
        r ? Ce.access(n, t, r) : (n.removeEventListener(e, i, !0), Ce.remove(n, t));
      }
    };
  });
  var ht = e.location, ft = ne.now(), mt = /\?/;
  ne.parseJSON = function(e) {return JSON.parse(e + '');}, ne.parseXML = function(t) {
    var i;
    if (!t || 'string' != typeof t) return null;
    try {i = (new e.DOMParser).parseFromString(t, 'text/xml');} catch (e) {i = void 0;}
    return i && !i.getElementsByTagName('parsererror').length || ne.error('Invalid XML: ' + t), i;
  };
  var gt = /#.*$/, vt = /([?&])_=[^&]*/, yt = /^(.*?):[ \t]*([^\r\n]*)$/gm, bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, wt = /^(?:GET|HEAD)$/, xt = /^\/\//, Ct = {}, Tt = {},
      kt = '*/'.concat('*'), _t = Y.createElement('a');
  _t.href = ht.href, ne.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ht.href,
      type: 'GET',
      isLocal: bt.test(ht.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: { '*': kt, text: 'text/plain', html: 'text/html', xml: 'application/xml, text/xml', json: 'application/json, text/javascript' },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
      converters: { '* text': String, 'text html': !0, 'text json': ne.parseJSON, 'text xml': ne.parseXML },
      flatOptions: { url: !0, context: !0 }
    },
    ajaxSetup: function(e, t) {return t ? q(q(e, ne.ajaxSettings), t) : q(ne.ajaxSettings, e);},
    ajaxPrefilter: R(Ct),
    ajaxTransport: R(Tt),
    ajax: function(t, i) {
      function n(t, i, n, a) {
        var c, u, y, b, x, T = i;
        2 !== w && (w = 2, l && e.clearTimeout(l), r = void 0, s = a || '', C.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, n && (b = W(p, C, n)), b = B(p, b, C, c), c ? (p.ifModified && ((x = C.getResponseHeader('Last-Modified')) && (ne.lastModified[o] = x), (x = C.getResponseHeader('etag')) && (ne.etag[o] = x)), 204 === t || 'HEAD' === p.type ? T = 'nocontent' : 304 === t ? T = 'notmodified' : (T = b.state, u = b.data, c = !(y = b.error))) : (y = T, !t && T || (T = 'error', t < 0 && (t = 0))), C.status = t, C.statusText = (i || T) + '', c ? m.resolveWith(h, [u, T, C]) : m.rejectWith(h, [C, T, y]), C.statusCode(v), v = void 0, d && f.trigger(c ? 'ajaxSuccess' : 'ajaxError', [C, p, c ? u : y]), g.fireWith(h, [C, T]), d && (f.trigger('ajaxComplete', [C, p]), --ne.active || ne.event.trigger('ajaxStop')));
      }

      'object' == typeof t && (i = t, t = void 0), i = i || {};
      var r, o, s, a, l, c, d, u, p = ne.ajaxSetup({}, i), h = p.context || p, f = p.context && (h.nodeType || h.jquery) ? ne(h) : ne.event, m = ne.Deferred(), g = ne.Callbacks('once memory'),
          v = p.statusCode || {}, y = {}, b = {}, w = 0, x = 'canceled', C = {
            readyState: 0, getResponseHeader: function(e) {
              var t;
              if (2 === w) {
                if (!a) for (a = {}; t = yt.exec(s);) a[t[1].toLowerCase()] = t[2];
                t = a[e.toLowerCase()];
              }
              return null == t ? null : t;
            }, getAllResponseHeaders: function() {return 2 === w ? s : null;}, setRequestHeader: function(e, t) {
              var i = e.toLowerCase();
              return w || (e = b[i] = b[i] || e, y[e] = t), this;
            }, overrideMimeType: function(e) {return w || (p.mimeType = e), this;}, statusCode: function(e) {
              var t;
              if (e) if (w < 2) for (t in e) v[t] = [v[t], e[t]]; else C.always(e[C.status]);
              return this;
            }, abort: function(e) {
              var t = e || x;
              return r && r.abort(t), n(0, t), this;
            }
          };
      if (m.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((t || p.url || ht.href) + '').replace(gt, '').replace(xt, ht.protocol + '//'), p.type = i.method || i.type || p.method || p.type, p.dataTypes = ne.trim(p.dataType || '*').toLowerCase().match(ye) || [''], null == p.crossDomain) {
        c = Y.createElement('a');
        try {c.href = p.url, c.href = c.href, p.crossDomain = _t.protocol + '//' + _t.host != c.protocol + '//' + c.host;} catch (e) {p.crossDomain = !0;}
      }
      if (p.data && p.processData && 'string' != typeof p.data && (p.data = ne.param(p.data, p.traditional)), z(Ct, p, i, C), 2 === w) return C;
      (d = ne.event && p.global) && 0 == ne.active++ && ne.event.trigger('ajaxStart'), p.type = p.type.toUpperCase(), p.hasContent = !wt.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (mt.test(o) ? '&' : '?') + p.data, delete p.data), !1 === p.cache && (p.url = vt.test(o) ? o.replace(vt, '$1_=' + ft++) : o + (mt.test(o) ? '&' : '?') + '_=' + ft++)), p.ifModified && (ne.lastModified[o] && C.setRequestHeader('If-Modified-Since', ne.lastModified[o]), ne.etag[o] && C.setRequestHeader('If-None-Match', ne.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || i.contentType) && C.setRequestHeader('Content-Type', p.contentType), C.setRequestHeader('Accept', p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ('*' !== p.dataTypes[0] ? ', ' + kt + '; q=0.01' : '') : p.accepts['*']);
      for (u in p.headers) C.setRequestHeader(u, p.headers[u]);
      if (p.beforeSend && (!1 === p.beforeSend.call(h, C, p) || 2 === w)) return C.abort();
      x = 'abort';
      for (u in{ success: 1, error: 1, complete: 1 }) C[u](p[u]);
      if (r = z(Tt, p, i, C)) {
        if (C.readyState = 1, d && f.trigger('ajaxSend', [C, p]), 2 === w) return C;
        p.async && p.timeout > 0 && (l = e.setTimeout(function() {C.abort('timeout');}, p.timeout));
        try {w = 1, r.send(y, n);} catch (e) {
          if (!(w < 2)) throw e;
          n(-1, e);
        }
      } else n(-1, 'No Transport');
      return C;
    },
    getJSON: function(e, t, i) {return ne.get(e, t, i, 'json');},
    getScript: function(e, t) {return ne.get(e, void 0, t, 'script');}
  }), ne.each(['get', 'post'], function(e, t) {
    ne[t] = function(e, i, n, r) {
      return ne.isFunction(i) && (r = r || n, n = i, i = void 0), ne.ajax(ne.extend({
        url: e,
        type: t,
        dataType: r,
        data: i,
        success: n
      }, ne.isPlainObject(e) && e));
    };
  }), ne._evalUrl = function(e) {return ne.ajax({ url: e, type: 'GET', dataType: 'script', async: !1, global: !1, throws: !0 });}, ne.fn.extend({
    wrapAll: function(e) {
      var t;
      return ne.isFunction(e) ? this.each(function(t) {ne(this).wrapAll(e.call(this, t));}) : (this[0] && (t = ne(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
        return e;
      }).append(this)), this);
    }, wrapInner: function(e) {
      return ne.isFunction(e) ? this.each(function(t) {ne(this).wrapInner(e.call(this, t));}) : this.each(function() {
        var t = ne(this), i = t.contents();
        i.length ? i.wrapAll(e) : t.append(e);
      });
    }, wrap: function(e) {
      var t = ne.isFunction(e);
      return this.each(function(i) {ne(this).wrapAll(t ? e.call(this, i) : e);});
    }, unwrap: function() {return this.parent().each(function() {ne.nodeName(this, 'body') || ne(this).replaceWith(this.childNodes);}).end();}
  }), ne.expr.filters.hidden = function(e) {return !ne.expr.filters.visible(e);}, ne.expr.filters.visible = function(e) {return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0;};
  var St = /%20/g, Et = /\[\]$/, It = /\r?\n/g, At = /^(?:submit|button|image|reset|file)$/i, Dt = /^(?:input|select|textarea|keygen)/i;
  ne.param = function(e, t) {
    var i, n = [], r = function(e, t) {t = ne.isFunction(t) ? t() : null == t ? '' : t, n[n.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t);};
    if (void 0 === t && (t = ne.ajaxSettings && ne.ajaxSettings.traditional), ne.isArray(e) || e.jquery && !ne.isPlainObject(e)) ne.each(e, function() {r(this.name, this.value);}); else for (i in e) G(i, e[i], t, r);
    return n.join('&').replace(St, '+');
  }, ne.fn.extend({
    serialize: function() {return ne.param(this.serializeArray());}, serializeArray: function() {
      return this.map(function() {
        var e = ne.prop(this, 'elements');
        return e ? ne.makeArray(e) : this;
      }).filter(function() {
        var e = this.type;
        return this.name && !ne(this).is(':disabled') && Dt.test(this.nodeName) && !At.test(e) && (this.checked || !De.test(e));
      }).map(function(e, t) {
        var i = ne(this).val();
        return null == i ? null : ne.isArray(i) ? ne.map(i, function(e) {return { name: t.name, value: e.replace(It, '\r\n') };}) : { name: t.name, value: i.replace(It, '\r\n') };
      }).get();
    }
  }), ne.ajaxSettings.xhr = function() {try {return new e.XMLHttpRequest;} catch (e) {}};
  var $t = { 0: 200, 1223: 204 }, Pt = ne.ajaxSettings.xhr();
  ie.cors = !!Pt && 'withCredentials' in Pt, ie.ajax = Pt = !!Pt, ne.ajaxTransport(function(t) {
    var i, n;
    if (ie.cors || Pt && !t.crossDomain) return {
      send: function(r, o) {
        var s, a = t.xhr();
        if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) a[s] = t.xhrFields[s];
        t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r['X-Requested-With'] || (r['X-Requested-With'] = 'XMLHttpRequest');
        for (s in r) a.setRequestHeader(s, r[s]);
        i = function(e) {return function() {i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, 'abort' === e ? a.abort() : 'error' === e ? 'number' != typeof a.status ? o(0, 'error') : o(a.status, a.statusText) : o($t[a.status] || a.status, a.statusText, 'text' !== (a.responseType || 'text') || 'string' != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));};}, a.onload = i(), n = a.onerror = i('error'), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {4 === a.readyState && e.setTimeout(function() {i && n();});}, i = i('abort');
        try {a.send(t.hasContent && t.data || null);} catch (e) {if (i) throw e;}
      }, abort: function() {i && i();}
    };
  }), ne.ajaxSetup({
    accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
    contents: { script: /\b(?:java|ecma)script\b/ },
    converters: { 'text script': function(e) {return ne.globalEval(e), e;} }
  }), ne.ajaxPrefilter('script', function(e) {void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');}), ne.ajaxTransport('script', function(e) {
    if (e.crossDomain) {
      var t, i;
      return {
        send: function(n, r) {
          t = ne('<script>').prop({
            charset: e.scriptCharset,
            src: e.url
          }).on('load error', i = function(e) {t.remove(), i = null, e && r('error' === e.type ? 404 : 200, e.type);}), Y.head.appendChild(t[0]);
        }, abort: function() {i && i();}
      };
    }
  });
  var Mt = [], Lt = /(=)\?(?=&|$)|\?\?/;
  ne.ajaxSetup({
    jsonp: 'callback', jsonpCallback: function() {
      var e = Mt.pop() || ne.expando + '_' + ft++;
      return this[e] = !0, e;
    }
  }), ne.ajaxPrefilter('json jsonp', function(t, i, n) {
    var r, o, s, a = !1 !== t.jsonp && (Lt.test(t.url) ? 'url' : 'string' == typeof t.data && 0 === (t.contentType || '').indexOf('application/x-www-form-urlencoded') && Lt.test(t.data) && 'data');
    if (a || 'jsonp' === t.dataTypes[0]) return r = t.jsonpCallback = ne.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Lt, '$1' + r) : !1 !== t.jsonp && (t.url += (mt.test(t.url) ? '&' : '?') + t.jsonp + '=' + r), t.converters['script json'] = function() {return s || ne.error(r + ' was not called'), s[0];}, t.dataTypes[0] = 'json', o = e[r], e[r] = function() {s = arguments;}, n.always(function() {void 0 === o ? ne(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = i.jsonpCallback, Mt.push(r)), s && ne.isFunction(o) && o(s[0]), s = o = void 0;}), 'script';
  }), ne.parseHTML = function(e, t, i) {
    if (!e || 'string' != typeof e) return null;
    'boolean' == typeof t && (i = t, t = !1), t = t || Y;
    var n = pe.exec(e), r = !i && [];
    return n ? [t.createElement(n[1])] : (n = p([e], t, r), r && r.length && ne(r).remove(), ne.merge([], n.childNodes));
  };
  var Ot = ne.fn.load;
  ne.fn.load = function(e, t, i) {
    if ('string' != typeof e && Ot) return Ot.apply(this, arguments);
    var n, r, o, s = this, a = e.indexOf(' ');
    return a > -1 && (n = ne.trim(e.slice(a)), e = e.slice(0, a)), ne.isFunction(t) ? (i = t, t = void 0) : t && 'object' == typeof t && (r = 'POST'), s.length > 0 && ne.ajax({
      url: e,
      type: r || 'GET',
      dataType: 'html',
      data: t
    }).done(function(e) {o = arguments, s.html(n ? ne('<div>').append(ne.parseHTML(e)).find(n) : e);}).always(i && function(e, t) {s.each(function() {i.apply(this, o || [e.responseText, t, e]);});}), this;
  }, ne.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function(e, t) {ne.fn[t] = function(e) {return this.on(t, e);};}), ne.expr.filters.animated = function(e) {return ne.grep(ne.timers, function(t) {return e === t.elem;}).length;}, ne.offset = {
    setOffset: function(e, t, i) {
      var n, r, o, s, a, l, c = ne.css(e, 'position'), d = ne(e), u = {};
      'static' === c && (e.style.position = 'relative'), a = d.offset(), o = ne.css(e, 'top'), l = ne.css(e, 'left'), ('absolute' === c || 'fixed' === c) && (o + l).indexOf('auto') > -1 ? (s = (n = d.position()).top, r = n.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), ne.isFunction(t) && (t = t.call(e, i, ne.extend({}, a))), null != t.top && (u.top = t.top - a.top + s), null != t.left && (u.left = t.left - a.left + r), 'using' in t ? t.using.call(e, u) : d.css(u);
    }
  }, ne.fn.extend({
    offset: function(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function(t) {ne.offset.setOffset(this, e, t);});
      var t, i, n = this[0], r = { top: 0, left: 0 }, o = n && n.ownerDocument;
      if (o) return t = o.documentElement, ne.contains(t, n) ? (r = n.getBoundingClientRect(), i = U(o), { top: r.top + i.pageYOffset - t.clientTop, left: r.left + i.pageXOffset - t.clientLeft }) : r;
    }, position: function() {
      if (this[0]) {
        var e, t, i = this[0], n = { top: 0, left: 0 };
        return 'fixed' === ne.css(i, 'position') ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ne.nodeName(e[0], 'html') || (n = e.offset()), n.top += ne.css(e[0], 'borderTopWidth', !0), n.left += ne.css(e[0], 'borderLeftWidth', !0)), {
          top: t.top - n.top - ne.css(i, 'marginTop', !0),
          left: t.left - n.left - ne.css(i, 'marginLeft', !0)
        };
      }
    }, offsetParent: function() {
      return this.map(function() {
        for (var e = this.offsetParent; e && "static" === ne.css(e, "position");) e = e.offsetParent;
        return e || Ve;
      });
    }
  }), ne.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function(e, t) {
    var i = 'pageYOffset' === t;
    ne.fn[e] = function(n) {
      return we(this, function(e, n, r) {
        var o = U(e);
        if (void 0 === r) return o ? o[t] : e[n];
        o ? o.scrollTo(i ? o.pageXOffset : r, i ? r : o.pageYOffset) : e[n] = r;
      }, e, n, arguments.length);
    };
  }), ne.each(['top', 'left'], function(e, t) {ne.cssHooks[t] = E(ie.pixelPosition, function(e, i) {if (i) return i = S(e, t), Ue.test(i) ? ne(e).position()[t] + 'px' : i;});}), ne.each({
    Height: 'height',
    Width: 'width'
  }, function(e, t) {
    ne.each({ padding: 'inner' + e, content: t, '': 'outer' + e }, function(i, n) {
      ne.fn[n] = function(n, r) {
        var o = arguments.length && (i || 'boolean' != typeof n), s = i || (!0 === n || !0 === r ? 'margin' : 'border');
        return we(this, function(t, i, n) {
          var r;
          return ne.isWindow(t) ? t.document.documentElement['client' + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body['scroll' + e], r['scroll' + e], t.body['offset' + e], r['offset' + e], r['client' + e])) : void 0 === n ? ne.css(t, i, s) : ne.style(t, i, n, s);
        }, t, o ? n : void 0, o, null);
      };
    });
  }), ne.fn.extend({
    bind: function(e, t, i) {return this.on(e, null, t, i);},
    unbind: function(e, t) {return this.off(e, null, t);},
    delegate: function(e, t, i, n) {return this.on(t, e, i, n);},
    undelegate: function(e, t, i) {return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', i);},
    size: function() {return this.length;}
  }), ne.fn.andSelf = ne.fn.addBack, 'function' == typeof define && define.amd && define('jquery', [], function() {return ne;});
  var Nt = e.jQuery, jt = e.$;
  return ne.noConflict = function(t) {return e.$ === ne && (e.$ = jt), t && e.jQuery === ne && (e.jQuery = Nt), ne;}, t || (e.jQuery = e.$ = ne), ne;
}), jQuery.expr[':'].Contains = function(e, t, i) {return jQuery(e).text().toUpperCase().indexOf(i[3].toUpperCase()) >= 0;}, function(e) {
  'use strict';

  function t() {}

  function i(e) {
    if (!e || 'object' != typeof e) return !1;
    var t = k(e) || ge;
    return /object|function/.test(typeof t.Element) ? e instanceof t.Element : 1 === e.nodeType && 'string' == typeof e.nodeName;
  }

  function n(e) {return e === ge || !(!e || !e.Window) && e instanceof e.Window;}

  function r(e) {return !!e && e instanceof ye;}

  function o(e) {return s(e) && void 0 !== typeof e.length && a(e.splice);}

  function s(e) {return !!e && 'object' == typeof e;}

  function a(e) {return 'function' == typeof e;}

  function l(e) {return 'number' == typeof e;}

  function c(e) {return 'boolean' == typeof e;}

  function d(e) {return 'string' == typeof e;}

  function u(e) {return !!d(e) && (ve.querySelector(e), !0);}

  function p(e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  }

  function h(e, t) {
    for (var i in t) {
      var n = !1;
      for (var r in Qe) if (0 === i.indexOf(r) && Qe[r].test(i)) {
        n = !0;
        break;
      }
      n || (e[i] = t[i]);
    }
    return e;
  }

  function f(e, t) {e.page = e.page || {}, e.page.x = t.page.x, e.page.y = t.page.y, e.client = e.client || {}, e.client.x = t.client.x, e.client.y = t.client.y, e.timeStamp = t.timeStamp;}

  function m(e, t, i) {
    var n = t.length > 1 ? I(t) : t[0];
    b(n, _e), e.page.x = _e.x, e.page.y = _e.y, w(n, _e), e.client.x = _e.x, e.client.y = _e.y, e.timeStamp = (new Date).getTime();
  }

  function g(e, t, i) {
    e.page.x = i.page.x - t.page.x, e.page.y = i.page.y - t.page.y, e.client.x = i.client.x - t.client.x, e.client.y = i.client.y - t.client.y, e.timeStamp = (new Date).getTime() - t.timeStamp;
    var n = Math.max(e.timeStamp / 1e3, .001);
    e.page.speed = ke(e.page.x, e.page.y) / n, e.page.vx = e.page.x / n, e.page.vy = e.page.y / n, e.client.speed = ke(e.client.x, e.page.y) / n, e.client.vx = e.client.x / n, e.client.vy = e.client.y / n;
  }

  function v(e) {return e instanceof ge.Event || Me && ge.Touch && e instanceof ge.Touch;}

  function y(e, t, i) {return i = i || {}, e = e || 'page', i.x = t[e + 'X'], i.y = t[e + 'Y'], i;}

  function b(e, t) {return t = t || {}, Be && v(e) ? (y('screen', e, t), t.x += ge.scrollX, t.y += ge.scrollY) : y('page', e, t), t;}

  function w(e, t) {return t = t || {}, Be && v(e) ? y('screen', e, t) : y('client', e, t), t;}

  function x(e) {return e = e || ge, { x: e.scrollX || e.document.documentElement.scrollLeft, y: e.scrollY || e.document.documentElement.scrollTop };}

  function C(e) {return l(e.pointerId) ? e.pointerId : e.identifier;}

  function T(e) {return e instanceof xe ? e.correspondingUseElement : e;}

  function k(e) {
    if (n(e)) return e;
    var t = e.ownerDocument || e;
    return t.defaultView || t.parentWindow || ge;
  }

  function _(e) {
    var t = e instanceof be ? e.getBoundingClientRect() : e.getClientRects()[0];
    return t && { left: t.left, right: t.right, top: t.top, bottom: t.bottom, width: t.width || t.right - t.left, height: t.height || t.bottom - t.top };
  }

  function S(e) {
    var t = _(e);
    if (!Ge && t) {
      var i = x(k(e));
      t.left += i.x, t.right += i.x, t.top += i.y, t.bottom += i.y;
    }
    return t;
  }

  function E(e) {
    var t = [];
    return o(e) ? (t[0] = e[0], t[1] = e[1]) : 'touchend' === e.type ? 1 === e.touches.length ? (t[0] = e.touches[0], t[1] = e.changedTouches[0]) : 0 === e.touches.length && (t[0] = e.changedTouches[0], t[1] = e.changedTouches[1]) : (t[0] = e.touches[0], t[1] = e.touches[1]), t;
  }

  function I(e) {
    for (var t, i = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, n = 0; n < e.length; n++) for (t in i) i[t] += e[n][t];
    for (t in i) i[t] /= e.length;
    return i;
  }

  function A(e) {
    if (e.length || e.touches && e.touches.length > 1) {
      var t = E(e), i = Math.min(t[0].pageX, t[1].pageX), n = Math.min(t[0].pageY, t[1].pageY);
      return { x: i, y: n, left: i, top: n, width: Math.max(t[0].pageX, t[1].pageX) - i, height: Math.max(t[0].pageY, t[1].pageY) - n };
    }
  }

  function D(e, t) {
    var i = (t = t || $e.deltaSource) + 'X', n = t + 'Y', r = E(e), o = r[0][i] - r[1][i], s = r[0][n] - r[1][n];
    return ke(o, s);
  }

  function $(e, t, i) {
    var n = (i = i || $e.deltaSource) + 'X', r = i + 'Y', o = E(e), s = o[0][n] - o[1][n], a = o[0][r] - o[1][r], c = 180 * Math.atan(a / s) / Math.PI;
    if (l(t)) {
      var d = (c - t) % 360;
      d > 315 ? c -= 360 + c / 360 | 0 : d > 135 ? c -= 180 + c / 360 | 0 : d < -315 ? c += 360 + c / 360 | 0 : d < -135 && (c += 180 + c / 360 | 0);
    }
    return c;
  }

  function P(e, t) {
    var n = e ? e.options.origin : $e.origin;
    return 'parent' === n ? n = F(t) : 'self' === n ? n = e.getRect(t) : u(n) && (n = j(t, n) || {
      x: 0,
      y: 0
    }), a(n) && (n = n(e && t)), i(n) && (n = S(n)), n.x = 'x' in n ? n.x : n.left, n.y = 'y' in n ? n.y : n.top, n;
  }

  function M(e, t, i, n) {
    var r = 1 - e;
    return r * r * t + 2 * r * e * i + e * e * n;
  }

  function L(e, t, i, n, r, o, s) {return { x: M(s, e, i, r), y: M(s, t, n, o) };}

  function O(e, t, i, n) {return e /= n, -i * e * (e - 2) + t;}

  function N(e, t) {
    for (; t;) {
      if (t === e) return !0;
      t = t.parentNode;
    }
    return !1;
  }

  function j(e, t) {
    for (var n = F(e); i(n);) {
      if (pe(n, t)) return n;
      n = F(n);
    }
    return null;
  }

  function F(e) {
    var t = e.parentNode;
    if (r(t)) {
      for (; (t = t.host) && r(t);) ;
      return t;
    }
    return t;
  }

  function H(e, t) {return e._context === t.ownerDocument || N(e._context, t);}

  function R(e, t, n) {
    var r = e.options.ignoreFrom;
    return !(!r || !i(n)) && (d(r) ? he(n, r, t) : !!i(r) && N(r, n));
  }

  function z(e, t, n) {
    var r = e.options.allowFrom;
    return !r || !!i(n) && (d(r) ? he(n, r, t) : !!i(r) && N(r, n));
  }

  function q(e, t) {
    if (!t) return !1;
    var i = t.options.drag.axis;
    return 'xy' === e || 'xy' === i || i === e;
  }

  function W(e, t) {
    var i = e.options;
    return /^resize/.test(t) && (t = 'resize'), i[t].snap && i[t].snap.enabled;
  }

  function B(e, t) {
    var i = e.options;
    return /^resize/.test(t) && (t = 'resize'), i[t].restrict && i[t].restrict.enabled;
  }

  function G(e, t) {
    var i = e.options;
    return /^resize/.test(t) && (t = 'resize'), i[t].autoScroll && i[t].autoScroll.enabled;
  }

  function U(e, t, i) {
    for (var n = e.options, r = n[i.name].max, o = n[i.name].maxPerElement, s = 0, a = 0, l = 0, c = 0, d = Ie.length; c < d; c++) {
      var u = Ie[c], p = u.prepared.name;
      if (u.interacting()) {
        if (++s >= Fe) return !1;
        if (u.target === e) {
          if ((a += p === i.name | 0) >= r) return !1;
          if (u.element === t && (l++, p !== i.name || l >= o)) return !1;
        }
      }
    }
    return Fe > 0;
  }

  function X(e) {
    var t, i, n, r, o, s = e[0], a = s ? 0 : -1, l = [], c = [];
    for (r = 1; r < e.length; r++) if ((t = e[r]) && t !== s) if (s) {
      if (t.parentNode !== t.ownerDocument) if (s.parentNode !== t.ownerDocument) {
        if (!l.length) for (i = s; i.parentNode && i.parentNode !== i.ownerDocument;) l.unshift(i), i = i.parentNode;
        if (s instanceof Ce && t instanceof be && !(t instanceof we)) {
          if (t === s.parentNode) continue;
          i = t.ownerSVGElement;
        } else i = t;
        for (c = []; i.parentNode !== i.ownerDocument;) c.unshift(i), i = i.parentNode;
        for (o = 0; c[o] && c[o] === l[o];) o++;
        var d = [c[o - 1], c[o], l[o]];
        for (n = d[0].lastChild; n;) {
          if (n === d[1]) {
            s = t, a = r, l = [];
            break;
          }
          if (n === d[2]) break;
          n = n.previousSibling;
        }
      } else s = t, a = r;
    } else s = t, a = r;
    return a;
  }

  function Y() {
    if (this.target = null, this.element = null, this.dropTarget = null, this.dropElement = null, this.prevDropTarget = null, this.prevDropElement = null, this.prepared = {
      name: null,
      axis: null,
      edges: null
    }, this.matches = [], this.matchElements = [], this.inertiaStatus = {
      active: !1,
      smoothEnd: !1,
      ending: !1,
      startEvent: null,
      upCoords: {},
      xe: 0,
      ye: 0,
      sx: 0,
      sy: 0,
      t0: 0,
      vx0: 0,
      vys: 0,
      duration: 0,
      resumeDx: 0,
      resumeDy: 0,
      lambda_v0: 0,
      one_ve_v0: 0,
      i: null
    }, a(Function.prototype.bind)) this.boundInertiaFrame = this.inertiaFrame.bind(this), this.boundSmoothEndFrame = this.smoothEndFrame.bind(this); else {
      var e = this;
      this.boundInertiaFrame = function() {return e.inertiaFrame();}, this.boundSmoothEndFrame = function() {return e.smoothEndFrame();};
    }
    this.activeDrops = {
      dropzones: [],
      elements: [],
      rects: []
    }, this.pointers = [], this.pointerIds = [], this.downTargets = [], this.downTimes = [], this.holdTimers = [], this.prevCoords = {
      page: { x: 0, y: 0 },
      client: { x: 0, y: 0 },
      timeStamp: 0
    }, this.curCoords = { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, this.startCoords = {
      page: { x: 0, y: 0 },
      client: { x: 0, y: 0 },
      timeStamp: 0
    }, this.pointerDelta = {
      page: { x: 0, y: 0, vx: 0, vy: 0, speed: 0 },
      client: { x: 0, y: 0, vx: 0, vy: 0, speed: 0 },
      timeStamp: 0
    }, this.downEvent = null, this.downPointer = {}, this._eventTarget = null, this._curEventTarget = null, this.prevEvent = null, this.tapTime = 0, this.prevTap = null, this.startOffset = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.restrictOffset = { left: 0, right: 0, top: 0, bottom: 0 }, this.snapOffsets = [], this.gesture = {
      start: { x: 0, y: 0 },
      startDistance: 0,
      prevDistance: 0,
      distance: 0,
      scale: 1,
      startAngle: 0,
      prevAngle: 0
    }, this.snapStatus = { x: 0, y: 0, dx: 0, dy: 0, realX: 0, realY: 0, snappedX: 0, snappedY: 0, targets: [], locked: !1, changed: !1 }, this.restrictStatus = {
      dx: 0,
      dy: 0,
      restrictedX: 0,
      restrictedY: 0,
      snap: null,
      restricted: !1,
      changed: !1
    }, this.restrictStatus.snap = this.snapStatus, this.pointerIsDown = !1, this.pointerWasMoved = !1, this.gesturing = !1, this.dragging = !1, this.resizing = !1, this.resizeAxes = 'xy', this.mouse = !1, Ie.push(this);
  }

  function V(e, t, i) {
    var n, r = 0, o = Ie.length, s = /mouse/i.test(e.pointerType || t) || 4 === e.pointerType, a = C(e);
    if (/down|start/i.test(t)) for (r = 0; r < o; r++) {
      var l = i;
      if ((n = Ie[r]).inertiaStatus.active && n.target.options[n.prepared.name].inertia.allowResume && n.mouse === s) for (; l;) {
        if (l === n.element) return n;
        l = F(l);
      }
    }
    if (s || !Me && !Le) {
      for (r = 0; r < o; r++) if (Ie[r].mouse && !Ie[r].inertiaStatus.active) return Ie[r];
      for (r = 0; r < o; r++) if (Ie[r].mouse && (!/down/.test(t) || !Ie[r].inertiaStatus.active)) return n;
      return n = new Y, n.mouse = !0, n;
    }
    for (r = 0; r < o; r++) if (ue(Ie[r].pointerIds, a)) return Ie[r];
    if (/up|end|out/i.test(t)) return null;
    for (r = 0; r < o; r++) if ((!(n = Ie[r]).prepared.name || n.target.options.gesture.enabled) && !n.interacting() && (s || !n.mouse)) return n;
    return new Y;
  }

  function Q(e) {
    return function(t) {
      var i, n, r = T(t.path ? t.path[0] : t.target), o = T(t.currentTarget);
      if (Me && /touch/.test(t.type)) for (je = (new Date).getTime(), n = 0; n < t.changedTouches.length; n++) {
        var s = t.changedTouches[n];
        (i = V(s, t.type, r)) && (i._updateEventTargets(r, o), i[e](s, t, r, o));
      } else {
        if (!Le && /mouse/.test(t.type)) {
          for (n = 0; n < Ie.length; n++) if (!Ie[n].mouse && Ie[n].pointerIsDown) return;
          if ((new Date).getTime() - je < 500) return;
        }
        if (!(i = V(t, t.type, r))) return;
        i._updateEventTargets(r, o), i[e](t, t, r, o);
      }
    };
  }

  function K(e, t, i, n, r, o) {
    var s, a, l = e.target, c = e.snapStatus, d = e.restrictStatus, u = e.pointers, h = (l && l.options || $e).deltaSource, f = h + 'X', m = h + 'Y', g = l ? l.options : $e, v = P(l, r),
        y = 'start' === n, b = 'end' === n, w = y ? e.startCoords : e.curCoords;
    r = r || e.element, a = p({}, w.page), s = p({}, w.client), a.x -= v.x, a.y -= v.y, s.x -= v.x, s.y -= v.y;
    var x = g[i].snap && g[i].snap.relativePoints;
    !W(l, i) || y && x && x.length || (this.snap = {
      range: c.range,
      locked: c.locked,
      x: c.snappedX,
      y: c.snappedY,
      realX: c.realX,
      realY: c.realY,
      dx: c.dx,
      dy: c.dy
    }, c.locked && (a.x += c.dx, a.y += c.dy, s.x += c.dx, s.y += c.dy)), !B(l, i) || y && g[i].restrict.elementRect || !d.restricted || (a.x += d.dx, a.y += d.dy, s.x += d.dx, s.y += d.dy, this.restrict = {
      dx: d.dx,
      dy: d.dy
    }), this.pageX = a.x, this.pageY = a.y, this.clientX = s.x, this.clientY = s.y, this.x0 = e.startCoords.page.x - v.x, this.y0 = e.startCoords.page.y - v.y, this.clientX0 = e.startCoords.client.x - v.x, this.clientY0 = e.startCoords.client.y - v.y, this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.button = t.button, this.buttons = t.buttons, this.target = r, this.t0 = e.downTimes[0], this.type = i + (n || ''), this.interaction = e, this.interactable = l;
    var C = e.inertiaStatus;
    if (C.active && (this.detail = 'inertia'), o && (this.relatedTarget = o), b ? 'client' === h ? (this.dx = s.x - e.startCoords.client.x, this.dy = s.y - e.startCoords.client.y) : (this.dx = a.x - e.startCoords.page.x, this.dy = a.y - e.startCoords.page.y) : y ? (this.dx = 0, this.dy = 0) : 'inertiastart' === n ? (this.dx = e.prevEvent.dx, this.dy = e.prevEvent.dy) : 'client' === h ? (this.dx = s.x - e.prevEvent.clientX, this.dy = s.y - e.prevEvent.clientY) : (this.dx = a.x - e.prevEvent.pageX, this.dy = a.y - e.prevEvent.pageY), e.prevEvent && 'inertia' === e.prevEvent.detail && !C.active && g[i].inertia && g[i].inertia.zeroResumeDelta && (C.resumeDx += this.dx, C.resumeDy += this.dy, this.dx = this.dy = 0), 'resize' === i && e.resizeAxes ? g.resize.square ? ('y' === e.resizeAxes ? this.dx = this.dy : this.dy = this.dx, this.axes = 'xy') : (this.axes = e.resizeAxes, 'x' === e.resizeAxes ? this.dy = 0 : 'y' === e.resizeAxes && (this.dx = 0)) : 'gesture' === i && (this.touches = [u[0], u[1]], y ? (this.distance = D(u, h), this.box = A(u), this.scale = 1, this.ds = 0, this.angle = $(u, void 0, h), this.da = 0) : b || t instanceof K ? (this.distance = e.prevEvent.distance, this.box = e.prevEvent.box, this.scale = e.prevEvent.scale, this.ds = this.scale - 1, this.angle = e.prevEvent.angle, this.da = this.angle - e.gesture.startAngle) : (this.distance = D(u, h), this.box = A(u), this.scale = this.distance / e.gesture.startDistance, this.angle = $(u, e.gesture.prevAngle, h), this.ds = this.scale - e.gesture.prevScale, this.da = this.angle - e.gesture.prevAngle)), y) this.timeStamp = e.downTimes[0], this.dt = 0, this.duration = 0, this.speed = 0, this.velocityX = 0, this.velocityY = 0; else if ('inertiastart' === n) this.timeStamp = e.prevEvent.timeStamp, this.dt = e.prevEvent.dt, this.duration = e.prevEvent.duration, this.speed = e.prevEvent.speed, this.velocityX = e.prevEvent.velocityX, this.velocityY = e.prevEvent.velocityY; else if (this.timeStamp = (new Date).getTime(), this.dt = this.timeStamp - e.prevEvent.timeStamp, this.duration = this.timeStamp - e.downTimes[0], t instanceof K) {
      var T = this[f] - e.prevEvent[f], k = this[m] - e.prevEvent[m], _ = this.dt / 1e3;
      this.speed = ke(T, k) / _, this.velocityX = T / _, this.velocityY = k / _;
    } else this.speed = e.pointerDelta[h].speed, this.velocityX = e.pointerDelta[h].vx, this.velocityY = e.pointerDelta[h].vy;
    if ((b || 'inertiastart' === n) && e.prevEvent.speed > 600 && this.timeStamp - e.prevEvent.timeStamp < 150) {
      var S = 180 * Math.atan2(e.prevEvent.velocityY, e.prevEvent.velocityX) / Math.PI;
      S < 0 && (S += 360);
      var E = 112.5 <= S && S < 247.5, I = 202.5 <= S && S < 337.5, M = !E && (292.5 <= S || S < 67.5), L = !I && 22.5 <= S && S < 157.5;
      this.swipe = { up: I, down: L, left: E, right: M, angle: S, speed: e.prevEvent.speed, velocity: { x: e.prevEvent.velocityX, y: e.prevEvent.velocityY } };
    }
  }

  function Z() {this.originalEvent.preventDefault();}

  function J(e) {
    var t = '';
    if ('drag' === e.name && (t = He.drag), 'resize' === e.name) if (e.axis) t = He[e.name + e.axis]; else if (e.edges) {
      for (var i = 'resize', n = ['top', 'bottom', 'left', 'right'], r = 0; r < 4; r++) e.edges[n[r]] && (i += n[r]);
      t = He[i];
    }
    return t;
  }

  function ee(e, t, n, r, o, s, a) {
    if (!t) return !1;
    if (!0 === t) {
      var c = l(s.width) ? s.width : s.right - s.left, d = l(s.height) ? s.height : s.bottom - s.top;
      if (c < 0 && ('left' === e ? e = 'right' : 'right' === e && (e = 'left')), d < 0 && ('top' === e ? e = 'bottom' : 'bottom' === e && (e = 'top')), 'left' === e) return n.x < (c >= 0 ? s.left : s.right) + a;
      if ('top' === e) return n.y < (d >= 0 ? s.top : s.bottom) + a;
      if ('right' === e) return n.x > (c >= 0 ? s.right : s.left) - a;
      if ('bottom' === e) return n.y > (d >= 0 ? s.bottom : s.top) - a;
    }
    return !!i(r) && (i(t) ? t === r : he(r, t, o));
  }

  function te(e, t, i) {
    var n, r = this.getRect(i), o = !1, a = null, l = null, c = p({}, t.curCoords.page), d = this.options;
    if (!r) return null;
    if (Re.resize && d.resize.enabled) {
      var u = d.resize;
      if (n = { left: !1, right: !1, top: !1, bottom: !1 }, s(u.edges)) {
        for (var h in n) n[h] = ee(h, u.edges[h], c, t._eventTarget, i, r, u.margin || Oe);
        n.left = n.left && !n.right, n.top = n.top && !n.bottom, o = n.left || n.right || n.top || n.bottom;
      } else {
        var f = 'y' !== d.resize.axis && c.x > r.right - Oe, m = 'x' !== d.resize.axis && c.y > r.bottom - Oe;
        o = f || m, l = (f ? 'x' : '') + (m ? 'y' : '');
      }
    }
    return a = o ? 'resize' : Re.drag && d.drag.enabled ? 'drag' : null, Re.gesture && t.pointerIds.length >= 2 && !t.dragging && !t.resizing && (a = 'gesture'), a ? {
      name: a,
      axis: l,
      edges: n
    } : null;
  }

  function ie(e, t) {
    if (!s(e)) return null;
    var i = e.name, n = t.options;
    return ('resize' === i && n.resize.enabled || 'drag' === i && n.drag.enabled || 'gesture' === i && n.gesture.enabled) && Re[i] ? ('resize' !== i && 'resizeyx' !== i || (i = 'resizexy'), e) : null;
  }

  function ne(e, t) {
    var n = {}, r = De[e.type], o = T(e.path ? e.path[0] : e.target), s = o;
    t = !!t;
    for (var a in e) n[a] = e[a];
    for (n.originalEvent = e, n.preventDefault = Z; i(s);) {
      for (var l = 0; l < r.selectors.length; l++) {
        var c = r.selectors[l], d = r.contexts[l];
        if (pe(s, c) && N(d, o) && N(d, s)) {
          var u = r.listeners[l];
          n.currentTarget = s;
          for (var p = 0; p < u.length; p++) u[p][1] === t && u[p][0](n);
        }
      }
      s = F(s);
    }
  }

  function re(e) {return ne.call(this, e, !0);}

  function oe(e, t) {return Ee.get(e, t) || new se(e, t);}

  function se(e, t) {
    this._element = e, this._iEvents = this._iEvents || {};
    var n;
    if (u(e)) {
      this.selector = e;
      var r = t && t.context;
      n = r ? k(r) : ge, r && (n.Node ? r instanceof n.Node : i(r) || r === n.document) && (this._context = r);
    } else i(e, n = k(e)) && (Le ? (Ve.add(this._element, fe.down, Ke.pointerDown), Ve.add(this._element, fe.move, Ke.pointerHover)) : (Ve.add(this._element, 'mousedown', Ke.pointerDown), Ve.add(this._element, 'mousemove', Ke.pointerHover), Ve.add(this._element, 'touchstart', Ke.pointerDown), Ve.add(this._element, 'touchmove', Ke.pointerHover)));
    this._doc = n.document, ue(Se, this._doc) || ce(this._doc), Ee.push(this), this.set(t);
  }

  function ae(e, t) {
    var i = !1;
    return function() {return i || (ge.console.warn(t), i = !0), e.apply(this, arguments);};
  }

  function le(e) {for (var t = 0; t < Ie.length; t++) Ie[t].pointerEnd(e, e);}

  function ce(e) {
    if (!ue(Se, e)) {
      var t = e.defaultView || e.parentWindow;
      for (var i in De) Ve.add(e, i, ne), Ve.add(e, i, re, !0);
      Le ? (fe = Te === t.MSPointerEvent ? { up: 'MSPointerUp', down: 'MSPointerDown', over: 'mouseover', out: 'mouseout', move: 'MSPointerMove', cancel: 'MSPointerCancel' } : {
        up: 'pointerup',
        down: 'pointerdown',
        over: 'pointerover',
        out: 'pointerout',
        move: 'pointermove',
        cancel: 'pointercancel'
      }, Ve.add(e, fe.down, Ke.selectorDown), Ve.add(e, fe.move, Ke.pointerMove), Ve.add(e, fe.over, Ke.pointerOver), Ve.add(e, fe.out, Ke.pointerOut), Ve.add(e, fe.up, Ke.pointerUp), Ve.add(e, fe.cancel, Ke.pointerCancel), Ve.add(e, fe.move, Ke.autoScrollMove)) : (Ve.add(e, 'mousedown', Ke.selectorDown), Ve.add(e, 'mousemove', Ke.pointerMove), Ve.add(e, 'mouseup', Ke.pointerUp), Ve.add(e, 'mouseover', Ke.pointerOver), Ve.add(e, 'mouseout', Ke.pointerOut), Ve.add(e, 'touchstart', Ke.selectorDown), Ve.add(e, 'touchmove', Ke.pointerMove), Ve.add(e, 'touchend', Ke.pointerUp), Ve.add(e, 'touchcancel', Ke.pointerCancel), Ve.add(e, 'mousemove', Ke.autoScrollMove), Ve.add(e, 'touchmove', Ke.autoScrollMove)), Ve.add(t, 'blur', le);
      try {
        if (t.frameElement) {
          var n = t.frameElement.ownerDocument, r = n.defaultView;
          Ve.add(n, 'mouseup', Ke.pointerEnd), Ve.add(n, 'touchend', Ke.pointerEnd), Ve.add(n, 'touchcancel', Ke.pointerEnd), Ve.add(n, 'pointerup', Ke.pointerEnd), Ve.add(n, 'MSPointerUp', Ke.pointerEnd), Ve.add(r, 'blur', le);
        }
      } catch (e) {oe.windowParentError = e;}
      Ve.add(e, 'dragstart', function(e) {
        for (var t = 0; t < Ie.length; t++) {
          var i = Ie[t];
          if (i.element && (i.element === e.target || N(i.element, e.target))) return void i.checkAndPreventDefault(e, i.target, i.element);
        }
      }), Ve.useAttachEvent && (Ve.add(e, 'selectstart', function(e) {
        var t = Ie[0];
        t.currentAction() && t.checkAndPreventDefault(e);
      }), Ve.add(e, 'dblclick', Q('ie8Dblclick'))), Se.push(e);
    }
  }

  function de(e, t) {
    for (var i = 0, n = e.length; i < n; i++) if (e[i] === t) return i;
    return -1;
  }

  function ue(e, t) {return -1 !== de(e, t);}

  function pe(t, i, n) {return me ? me(t, i, n) : (ge !== e && (i = i.replace(/\/deep\//g, ' ')), t[Ue](i));}

  function he(e, t, n) {
    for (; i(e);) {
      if (pe(e, t)) return !0;
      if ((e = F(e)) === n) return pe(e, t);
    }
    return !1;
  }

  if (e) {
    var fe, me, ge = function() {
          var t = e.document.createTextNode('');
          return t.ownerDocument !== e.document && 'function' == typeof e.wrap && e.wrap(t) === t ? e.wrap(e) : e;
        }(), ve = ge.document, ye = ge.DocumentFragment || t, be = ge.SVGElement || t, we = ge.SVGSVGElement || t, xe = ge.SVGElementInstance || t, Ce = ge.HTMLElement || ge.Element,
        Te = ge.PointerEvent || ge.MSPointerEvent, ke = Math.hypot || function(e, t) {return Math.sqrt(e * e + t * t);}, _e = {}, Se = [], Ee = [], Ie = [], Ae = !1, De = {}, $e = {
          base: {
            accept: null,
            actionChecker: null,
            styleCursor: !0,
            preventDefault: 'auto',
            origin: { x: 0, y: 0 },
            deltaSource: 'page',
            allowFrom: null,
            ignoreFrom: null,
            _context: ve,
            dropChecker: null
          },
          drag: { enabled: !1, manualStart: !0, max: 1 / 0, maxPerElement: 1, snap: null, restrict: null, inertia: null, autoScroll: null, axis: 'xy' },
          drop: { enabled: !1, accept: null, overlap: 'pointer' },
          resize: {
            enabled: !1,
            manualStart: !1,
            max: 1 / 0,
            maxPerElement: 1,
            snap: null,
            restrict: null,
            inertia: null,
            autoScroll: null,
            square: !1,
            preserveAspectRatio: !1,
            axis: 'xy',
            margin: NaN,
            edges: null,
            invert: 'none'
          },
          gesture: { manualStart: !1, enabled: !1, max: 1 / 0, maxPerElement: 1, restrict: null },
          perAction: {
            manualStart: !1,
            max: 1 / 0,
            maxPerElement: 1,
            snap: { enabled: !1, endOnly: !1, range: 1 / 0, targets: null, offsets: null, relativePoints: null },
            restrict: { enabled: !1, endOnly: !1 },
            autoScroll: { enabled: !1, container: null, margin: 60, speed: 300 },
            inertia: { enabled: !1, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: !0, zeroResumeDelta: !0, smoothEndDuration: 300 }
          },
          _holdDuration: 600
        }, Pe = {
          interaction: null,
          i: null,
          x: 0,
          y: 0,
          scroll: function() {
            var e, t, i, r, o = Pe.interaction.target.options[Pe.interaction.prepared.name].autoScroll, s = o.container || k(Pe.interaction.element), a = (new Date).getTime(),
                l = (a - Pe.prevTimeX) / 1e3, c = (a - Pe.prevTimeY) / 1e3;
            o.velocity ? (e = o.velocity.x, t = o.velocity.y) : e = t = o.speed, r = t * c, ((i = e * l) >= 1 || r >= 1) && (n(s) ? s.scrollBy(Pe.x * i, Pe.y * r) : s && (s.scrollLeft += Pe.x * i, s.scrollTop += Pe.y * r), i >= 1 && (Pe.prevTimeX = a), r >= 1 && (Pe.prevTimeY = a)), Pe.isScrolling && (Ye(Pe.i), Pe.i = Xe(Pe.scroll));
          },
          isScrolling: !1,
          prevTimeX: 0,
          prevTimeY: 0,
          start: function(e) {Pe.isScrolling = !0, Ye(Pe.i), Pe.interaction = e, Pe.prevTimeX = (new Date).getTime(), Pe.prevTimeY = (new Date).getTime(), Pe.i = Xe(Pe.scroll);},
          stop: function() {Pe.isScrolling = !1, Ye(Pe.i);}
        }, Me = 'ontouchstart' in ge || ge.DocumentTouch && ve instanceof ge.DocumentTouch, Le = Te && !/Chrome/.test(navigator.userAgent), Oe = Me || Le ? 20 : 10, Ne = 1, je = 0, Fe = 1 / 0,
        He = ve.all && !ge.atob ? {
          drag: 'move',
          resizex: 'e-resize',
          resizey: 's-resize',
          resizexy: 'se-resize',
          resizetop: 'n-resize',
          resizeleft: 'w-resize',
          resizebottom: 's-resize',
          resizeright: 'e-resize',
          resizetopleft: 'se-resize',
          resizebottomright: 'se-resize',
          resizetopright: 'ne-resize',
          resizebottomleft: 'ne-resize',
          gesture: ''
        } : {
          drag: 'move',
          resizex: 'ew-resize',
          resizey: 'ns-resize',
          resizexy: 'nwse-resize',
          resizetop: 'ns-resize',
          resizeleft: 'ew-resize',
          resizebottom: 'ns-resize',
          resizeright: 'ew-resize',
          resizetopleft: 'nwse-resize',
          resizebottomright: 'nwse-resize',
          resizetopright: 'nesw-resize',
          resizebottomleft: 'nesw-resize',
          gesture: ''
        }, Re = { drag: !0, resize: !0, gesture: !0 }, ze = 'onmousewheel' in ve ? 'mousewheel' : 'wheel',
        qe = ['dragstart', 'dragmove', 'draginertiastart', 'dragend', 'dragenter', 'dragleave', 'dropactivate', 'dropdeactivate', 'dropmove', 'drop', 'resizestart', 'resizemove', 'resizeinertiastart', 'resizeend', 'gesturestart', 'gesturemove', 'gestureinertiastart', 'gestureend', 'down', 'move', 'up', 'cancel', 'tap', 'doubletap', 'hold'],
        We = {}, Be = 'Opera' == navigator.appName && Me && navigator.userAgent.match('Presto'), Ge = /iP(hone|od|ad)/.test(navigator.platform) && /OS 7[^\d]/.test(navigator.appVersion),
        Ue = 'matches' in Element.prototype ? 'matches' : 'webkitMatchesSelector' in Element.prototype ? 'webkitMatchesSelector' : 'mozMatchesSelector' in Element.prototype ? 'mozMatchesSelector' : 'oMatchesSelector' in Element.prototype ? 'oMatchesSelector' : 'msMatchesSelector',
        Xe = e.requestAnimationFrame, Ye = e.cancelAnimationFrame, Ve = function() {
          function e(t, i, n, o) {
            var u, p, h, f = de(l, t), m = c[f], g = n;
            if (m && m.events) if (r && (h = de((p = d[f]).supplied, n), g = p.wrapped[h]), 'all' !== i) {
              if (m.events[i]) {
                var v = m.events[i].length;
                if ('all' === n) {
                  for (u = 0; u < v; u++) e(t, i, m.events[i][u], Boolean(o));
                  return;
                }
                for (u = 0; u < v; u++) if (m.events[i][u] === n) {
                  t[s](a + i, g, o || !1), m.events[i].splice(u, 1), r && p && (p.useCount[h]--, 0 === p.useCount[h] && (p.supplied.splice(h, 1), p.wrapped.splice(h, 1), p.useCount.splice(h, 1)));
                  break;
                }
                m.events[i] && 0 === m.events[i].length && (m.events[i] = null, m.typeCount--);
              }
              m.typeCount || (c.splice(f, 1), l.splice(f, 1), d.splice(f, 1));
            } else for (i in m.events) m.events.hasOwnProperty(i) && e(t, i, 'all');
          }

          function t() {this.returnValue = !1;}

          function i() {this.cancelBubble = !0;}

          function n() {this.cancelBubble = !0, this.immediatePropagationStopped = !0;}

          var r = 'attachEvent' in ge && !('addEventListener' in ge), o = r ? 'attachEvent' : 'addEventListener', s = r ? 'detachEvent' : 'removeEventListener', a = r ? 'on' : '', l = [], c = [], d = [];
          return {
            add: function(e, s, u, p) {
              var h = de(l, e), f = c[h];
              if (f || (f = { events: {}, typeCount: 0 }, h = l.push(e) - 1, c.push(f), d.push(r ? {
                supplied: [],
                wrapped: [],
                useCount: []
              } : null)), f.events[s] || (f.events[s] = [], f.typeCount++), !ue(f.events[s], u)) {
                var m;
                if (r) {
                  var g = d[h], v = de(g.supplied, u),
                      y = g.wrapped[v] || function(r) {r.immediatePropagationStopped || (r.target = r.srcElement, r.currentTarget = e, r.preventDefault = r.preventDefault || t, r.stopPropagation = r.stopPropagation || i, r.stopImmediatePropagation = r.stopImmediatePropagation || n, /mouse|click/.test(r.type) && (r.pageX = r.clientX + k(e).document.documentElement.scrollLeft, r.pageY = r.clientY + k(e).document.documentElement.scrollTop), u(r));};
                  m = e[o](a + s, y, Boolean(p)), -1 === v ? (g.supplied.push(u), g.wrapped.push(y), g.useCount.push(1)) : g.useCount[v]++;
                } else m = e[o](s, u, p || !1);
                return f.events[s].push(u), m;
              }
            }, remove: e, useAttachEvent: r, _elements: l, _targets: c, _attachedListeners: d
          };
        }(), Qe = { webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/ };
    Y.prototype = {
      getPageXY: function(e, t) {return b(e, t);},
      getClientXY: function(e, t) {return w(e, t);},
      setEventXY: function(e, t) {return m(e, t);},
      pointerOver: function(e, t, i) {
        if (!this.prepared.name && this.mouse) {
          var n = [], r = [], o = this.element;
          this.addPointer(e), !this.target || !R(this.target, this.element, i) && z(this.target, this.element, i) || (this.target = null, this.element = null, this.matches = [], this.matchElements = []);
          var s = Ee.get(i), a = s && !R(s, i, i) && z(s, i, i) && ie(s.getAction(e, t, this, i), s);
          a && !U(s, i, a) && (a = null), a ? (this.target = s, this.element = i, this.matches = [], this.matchElements = []) : (Ee.forEachSelector(function(e, t) {e && H(e, i) && !R(e, i, i) && z(e, i, i) && pe(i, t) && (n.push(e), r.push(i));}), this.validateSelector(e, t, n, r) ? (this.matches = n, this.matchElements = r, this.pointerHover(e, t, this.matches, this.matchElements), Ve.add(i, Le ? fe.move : 'mousemove', Ke.pointerHover)) : this.target && (N(o, i) ? (this.pointerHover(e, t, this.matches, this.matchElements), Ve.add(this.element, Le ? fe.move : 'mousemove', Ke.pointerHover)) : (this.target = null, this.element = null, this.matches = [], this.matchElements = [])));
        }
      },
      pointerHover: function(e, t, i, n, r, o) {
        var s = this.target;
        if (!this.prepared.name && this.mouse) {
          var a;
          this.setEventXY(this.curCoords, [e]), r ? a = this.validateSelector(e, t, r, o) : s && (a = ie(s.getAction(this.pointers[0], t, this, this.element), this.target)), s && s.options.styleCursor && (s._doc.documentElement.style.cursor = a ? J(a) : '');
        } else this.prepared.name && this.checkAndPreventDefault(t, s, this.element);
      },
      pointerOut: function(e, t, i) {this.prepared.name || (Ee.get(i) || Ve.remove(i, Le ? fe.move : 'mousemove', Ke.pointerHover), this.target && this.target.options.styleCursor && !this.interacting() && (this.target._doc.documentElement.style.cursor = ''));},
      selectorDown: function(e, t, n, r) {
        var o, s = this, a = Ve.useAttachEvent ? p({}, t) : t, l = n, c = this.addPointer(e);
        if (this.holdTimers[c] = setTimeout(function() {s.pointerHold(Ve.useAttachEvent ? a : e, a, n, r);}, $e._holdDuration), this.pointerIsDown = !0, this.inertiaStatus.active && this.target.selector) for (; i(l);) {
          if (l === this.element && ie(this.target.getAction(e, t, this, this.element), this.target).name === this.prepared.name) return Ye(this.inertiaStatus.i), this.inertiaStatus.active = !1, void this.collectEventTargets(e, t, n, 'down');
          l = F(l);
        }
        if (this.interacting()) this.collectEventTargets(e, t, n, 'down'); else {
          for (this.setEventXY(this.curCoords, [e]), this.downEvent = t; i(l) && !o;) this.matches = [], this.matchElements = [], Ee.forEachSelector(function(e, t, i) {
            var r = me ? i.querySelectorAll(t) : void 0;
            H(e, l) && !R(e, l, n) && z(e, l, n) && pe(l, t, r) && (s.matches.push(e), s.matchElements.push(l));
          }), o = this.validateSelector(e, t, this.matches, this.matchElements), l = F(l);
          if (o) return this.prepared.name = o.name, this.prepared.axis = o.axis, this.prepared.edges = o.edges, this.collectEventTargets(e, t, n, 'down'), this.pointerDown(e, t, n, r, o);
          this.downTimes[c] = (new Date).getTime(), this.downTargets[c] = n, h(this.downPointer, e), f(this.prevCoords, this.curCoords), this.pointerWasMoved = !1, this.collectEventTargets(e, t, n, 'down');
        }
      },
      pointerDown: function(e, t, i, n, r) {
        if (r || this.inertiaStatus.active || !this.pointerWasMoved || !this.prepared.name) {
          this.pointerIsDown = !0, this.downEvent = t;
          var o, s = this.addPointer(e);
          if (this.pointerIds.length > 1 && this.target._element === this.element) {
            var a = ie(r || this.target.getAction(e, t, this, this.element), this.target);
            U(this.target, this.element, a) && (o = a), this.prepared.name = null;
          } else if (!this.prepared.name) {
            var l = Ee.get(n);
            l && !R(l, n, i) && z(l, n, i) && (o = ie(r || l.getAction(e, t, this, n), l)) && U(l, n, o) && (this.target = l, this.element = n);
          }
          var c = this.target, d = c && c.options;
          if (!c || !r && this.prepared.name) this.inertiaStatus.active && n === this.element && ie(c.getAction(e, t, this, this.element), c).name === this.prepared.name && (Ye(this.inertiaStatus.i), this.inertiaStatus.active = !1, this.checkAndPreventDefault(t, c, this.element)); else {
            if (o = o || ie(r || c.getAction(e, t, this, n), c, this.element), this.setEventXY(this.startCoords, this.pointers), !o) return;
            d.styleCursor && (c._doc.documentElement.style.cursor = J(o)), this.resizeAxes = 'resize' === o.name ? o.axis : null, 'gesture' === o && this.pointerIds.length < 2 && (o = null), this.prepared.name = o.name, this.prepared.axis = o.axis, this.prepared.edges = o.edges, this.snapStatus.snappedX = this.snapStatus.snappedY = this.restrictStatus.restrictedX = this.restrictStatus.restrictedY = NaN, this.downTimes[s] = (new Date).getTime(), this.downTargets[s] = i, h(this.downPointer, e), f(this.prevCoords, this.startCoords), this.pointerWasMoved = !1, this.checkAndPreventDefault(t, c, this.element);
          }
        } else this.checkAndPreventDefault(t, this.target, this.element);
      },
      setModifications: function(e, t) {
        var i = this.target, n = !0, r = W(i, this.prepared.name) && (!i.options[this.prepared.name].snap.endOnly || t),
            o = B(i, this.prepared.name) && (!i.options[this.prepared.name].restrict.endOnly || t);
        return r ? this.setSnapping(e) : this.snapStatus.locked = !1, o ? this.setRestriction(e) : this.restrictStatus.restricted = !1, r && this.snapStatus.locked && !this.snapStatus.changed ? n = o && this.restrictStatus.restricted && this.restrictStatus.changed : o && this.restrictStatus.restricted && !this.restrictStatus.changed && (n = !1), n;
      },
      setStartOffsets: function(e, t, i) {
        var n, r, o = t.getRect(i), s = P(t, i), a = t.options[this.prepared.name].snap, l = t.options[this.prepared.name].restrict;
        o ? (this.startOffset.left = this.startCoords.page.x - o.left, this.startOffset.top = this.startCoords.page.y - o.top, this.startOffset.right = o.right - this.startCoords.page.x, this.startOffset.bottom = o.bottom - this.startCoords.page.y, n = 'width' in o ? o.width : o.right - o.left, r = 'height' in o ? o.height : o.bottom - o.top) : this.startOffset.left = this.startOffset.top = this.startOffset.right = this.startOffset.bottom = 0, this.snapOffsets.splice(0);
        var c = a && 'startCoords' === a.offset ? { x: this.startCoords.page.x - s.x, y: this.startCoords.page.y - s.y } : a && a.offset || { x: 0, y: 0 };
        if (o && a && a.relativePoints && a.relativePoints.length) for (var d = 0; d < a.relativePoints.length; d++) this.snapOffsets.push({
          x: this.startOffset.left - n * a.relativePoints[d].x + c.x,
          y: this.startOffset.top - r * a.relativePoints[d].y + c.y
        }); else this.snapOffsets.push(c);
        o && l.elementRect ? (this.restrictOffset.left = this.startOffset.left - n * l.elementRect.left, this.restrictOffset.top = this.startOffset.top - r * l.elementRect.top, this.restrictOffset.right = this.startOffset.right - n * (1 - l.elementRect.right), this.restrictOffset.bottom = this.startOffset.bottom - r * (1 - l.elementRect.bottom)) : this.restrictOffset.left = this.restrictOffset.top = this.restrictOffset.right = this.restrictOffset.bottom = 0;
      },
      start: function(e, t, i) {this.interacting() || !this.pointerIsDown || this.pointerIds.length < ('gesture' === e.name ? 2 : 1) || (-1 === de(Ie, this) && Ie.push(this), this.prepared.name || this.setEventXY(this.startCoords, this.pointers), this.prepared.name = e.name, this.prepared.axis = e.axis, this.prepared.edges = e.edges, this.target = t, this.element = i, this.setStartOffsets(e.name, t, i), this.setModifications(this.startCoords.page), this.prevEvent = this[this.prepared.name + 'Start'](this.downEvent));},
      pointerMove: function(e, t, n, r, o) {
        if (this.inertiaStatus.active) {
          var s = this.inertiaStatus.upCoords.page, a = this.inertiaStatus.upCoords.client,
              l = { pageX: s.x + this.inertiaStatus.sx, pageY: s.y + this.inertiaStatus.sy, clientX: a.x + this.inertiaStatus.sx, clientY: a.y + this.inertiaStatus.sy };
          this.setEventXY(this.curCoords, [l]);
        } else this.recordPointer(e), this.setEventXY(this.curCoords, this.pointers);
        var c, d,
            u = this.curCoords.page.x === this.prevCoords.page.x && this.curCoords.page.y === this.prevCoords.page.y && this.curCoords.client.x === this.prevCoords.client.x && this.curCoords.client.y === this.prevCoords.client.y,
            p = this.mouse ? 0 : de(this.pointerIds, C(e));
        if (this.pointerIsDown && !this.pointerWasMoved && (c = this.curCoords.client.x - this.startCoords.client.x, d = this.curCoords.client.y - this.startCoords.client.y, this.pointerWasMoved = ke(c, d) > Ne), u || this.pointerIsDown && !this.pointerWasMoved || (this.pointerIsDown && clearTimeout(this.holdTimers[p]), this.collectEventTargets(e, t, n, 'move')), this.pointerIsDown) if (u && this.pointerWasMoved && !o) this.checkAndPreventDefault(t, this.target, this.element); else if (g(this.pointerDelta, this.prevCoords, this.curCoords), this.prepared.name) {
          if (this.pointerWasMoved && (!this.inertiaStatus.active || e instanceof K && /inertiastart/.test(e.type))) {
            if (!this.interacting() && (g(this.pointerDelta, this.prevCoords, this.curCoords), 'drag' === this.prepared.name)) {
              var h = Math.abs(c), m = Math.abs(d), v = this.target.options.drag.axis, y = h > m ? 'x' : h < m ? 'y' : 'xy';
              if ('xy' !== y && 'xy' !== v && v !== y) {
                this.prepared.name = null;
                for (var b = n; i(b);) {
                  var w = Ee.get(b);
                  if (w && w !== this.target && !w.options.drag.manualStart && 'drag' === w.getAction(this.downPointer, this.downEvent, this, b).name && q(y, w)) {
                    this.prepared.name = 'drag', this.target = w, this.element = b;
                    break;
                  }
                  b = F(b);
                }
                if (!this.prepared.name) {
                  var x = this;
                  for (b = n; i(b);) {
                    var T = Ee.forEachSelector(function(e, t, i) {
                      var r = me ? i.querySelectorAll(t) : void 0;
                      if (e !== x.target) return H(e, n) && !e.options.drag.manualStart && !R(e, b, n) && z(e, b, n) && pe(b, t, r) && 'drag' === e.getAction(x.downPointer, x.downEvent, x, b).name && q(y, e) && U(e, b, 'drag') ? e : void 0;
                    });
                    if (T) {
                      this.prepared.name = 'drag', this.target = T, this.element = b;
                      break;
                    }
                    b = F(b);
                  }
                }
              }
            }
            var k = !!this.prepared.name && !this.interacting();
            if (k && (this.target.options[this.prepared.name].manualStart || !U(this.target, this.element, this.prepared))) return void this.stop(t);
            this.prepared.name && this.target && (k && this.start(this.prepared, this.target, this.element), (this.setModifications(this.curCoords.page, o) || k) && (this.prevEvent = this[this.prepared.name + 'Move'](t)), this.checkAndPreventDefault(t, this.target, this.element));
          }
          f(this.prevCoords, this.curCoords), (this.dragging || this.resizing) && this.autoScrollMove(e);
        }
      },
      dragStart: function(e) {
        var t = new K(this, e, 'drag', 'start', this.element);
        this.dragging = !0, this.target.fire(t), this.activeDrops.dropzones = [], this.activeDrops.elements = [], this.activeDrops.rects = [], this.dynamicDrop || this.setActiveDrops(this.element);
        var i = this.getDropEvents(e, t);
        return i.activate && this.fireActiveDrops(i.activate), t;
      },
      dragMove: function(e) {
        var t = this.target, i = new K(this, e, 'drag', 'move', this.element), n = this.element, r = this.getDrop(i, e, n);
        this.dropTarget = r.dropzone, this.dropElement = r.element;
        var o = this.getDropEvents(e, i);
        return t.fire(i), o.leave && this.prevDropTarget.fire(o.leave), o.enter && this.dropTarget.fire(o.enter), o.move && this.dropTarget.fire(o.move), this.prevDropTarget = this.dropTarget, this.prevDropElement = this.dropElement, i;
      },
      resizeStart: function(e) {
        var t = new K(this, e, 'resize', 'start', this.element);
        if (this.prepared.edges) {
          var i = this.target.getRect(this.element);
          if (this.target.options.resize.square || this.target.options.resize.preserveAspectRatio) {
            var n = p({}, this.prepared.edges);
            n.top = n.top || n.left && !n.bottom, n.left = n.left || n.top && !n.right, n.bottom = n.bottom || n.right && !n.top, n.right = n.right || n.bottom && !n.left, this.prepared._linkedEdges = n;
          } else this.prepared._linkedEdges = null;
          this.target.options.resize.preserveAspectRatio && (this.resizeStartAspectRatio = i.width / i.height), this.resizeRects = {
            start: i,
            current: p({}, i),
            restricted: p({}, i),
            previous: p({}, i),
            delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 }
          }, t.rect = this.resizeRects.restricted, t.deltaRect = this.resizeRects.delta;
        }
        return this.target.fire(t), this.resizing = !0, t;
      },
      resizeMove: function(e) {
        var t = new K(this, e, 'resize', 'move', this.element), i = this.prepared.edges, n = this.target.options.resize.invert, r = 'reposition' === n || 'negate' === n;
        if (i) {
          var o = t.dx, s = t.dy, a = this.resizeRects.start, l = this.resizeRects.current, c = this.resizeRects.restricted, d = this.resizeRects.delta, u = p(this.resizeRects.previous, c), h = i;
          if (this.target.options.resize.preserveAspectRatio) {
            var f = this.resizeStartAspectRatio;
            i = this.prepared._linkedEdges, h.left && h.bottom || h.right && h.top ? s = -o / f : h.left || h.right ? s = o / f : (h.top || h.bottom) && (o = s * f);
          } else this.target.options.resize.square && (i = this.prepared._linkedEdges, h.left && h.bottom || h.right && h.top ? s = -o : h.left || h.right ? s = o : (h.top || h.bottom) && (o = s));
          if (i.top && (l.top += s), i.bottom && (l.bottom += s), i.left && (l.left += o), i.right && (l.right += o), r) {
            if (p(c, l), 'reposition' === n) {
              var m;
              c.top > c.bottom && (m = c.top, c.top = c.bottom, c.bottom = m), c.left > c.right && (m = c.left, c.left = c.right, c.right = m);
            }
          } else c.top = Math.min(l.top, a.bottom), c.bottom = Math.max(l.bottom, a.top), c.left = Math.min(l.left, a.right), c.right = Math.max(l.right, a.left);
          c.width = c.right - c.left, c.height = c.bottom - c.top;
          for (var g in c) d[g] = c[g] - u[g];
          t.edges = this.prepared.edges, t.rect = c, t.deltaRect = d;
        }
        return this.target.fire(t), t;
      },
      gestureStart: function(e) {
        var t = new K(this, e, 'gesture', 'start', this.element);
        return t.ds = 0, this.gesture.startDistance = this.gesture.prevDistance = t.distance, this.gesture.startAngle = this.gesture.prevAngle = t.angle, this.gesture.scale = 1, this.gesturing = !0, this.target.fire(t), t;
      },
      gestureMove: function(e) {
        if (!this.pointerIds.length) return this.prevEvent;
        var t;
        return t = new K(this, e, 'gesture', 'move', this.element), t.ds = t.scale - this.gesture.scale, this.target.fire(t), this.gesture.prevAngle = t.angle, this.gesture.prevDistance = t.distance, t.scale === 1 / 0 || null === t.scale || void 0 === t.scale || isNaN(t.scale) || (this.gesture.scale = t.scale), t;
      },
      pointerHold: function(e, t, i) {this.collectEventTargets(e, t, i, 'hold');},
      pointerUp: function(e, t, i, n) {
        var r = this.mouse ? 0 : de(this.pointerIds, C(e));
        clearTimeout(this.holdTimers[r]), this.collectEventTargets(e, t, i, 'up'), this.collectEventTargets(e, t, i, 'tap'), this.pointerEnd(e, t, i, n), this.removePointer(e);
      },
      pointerCancel: function(e, t, i, n) {
        var r = this.mouse ? 0 : de(this.pointerIds, C(e));
        clearTimeout(this.holdTimers[r]), this.collectEventTargets(e, t, i, 'cancel'), this.pointerEnd(e, t, i, n), this.removePointer(e);
      },
      ie8Dblclick: function(e, t, i) {this.prevTap && t.clientX === this.prevTap.clientX && t.clientY === this.prevTap.clientY && i === this.prevTap.target && (this.downTargets[0] = i, this.downTimes[0] = (new Date).getTime(), this.collectEventTargets(e, t, i, 'tap'));},
      pointerEnd: function(e, t, i, n) {
        var r, o = this.target, s = o && o.options, a = s && this.prepared.name && s[this.prepared.name].inertia, l = this.inertiaStatus;
        if (this.interacting()) {
          if (l.active && !l.ending) return;
          var c, d = (new Date).getTime(), u = !1, h = !1, m = !1, g = W(o, this.prepared.name) && s[this.prepared.name].snap.endOnly,
              v = B(o, this.prepared.name) && s[this.prepared.name].restrict.endOnly, y = 0, b = 0;
          if (c = this.dragging ? 'x' === s.drag.axis ? Math.abs(this.pointerDelta.client.vx) : 'y' === s.drag.axis ? Math.abs(this.pointerDelta.client.vy) : this.pointerDelta.client.speed : this.pointerDelta.client.speed, u = a && a.enabled && 'gesture' !== this.prepared.name && t !== l.startEvent, h = u && d - this.curCoords.timeStamp < 50 && c > a.minSpeed && c > a.endSpeed, u && !h && (g || v)) {
            var w = {};
            w.snap = w.restrict = w, g && (this.setSnapping(this.curCoords.page, w), w.locked && (y += w.dx, b += w.dy)), v && (this.setRestriction(this.curCoords.page, w), w.restricted && (y += w.dx, b += w.dy)), (y || b) && (m = !0);
          }
          if (h || m) {
            if (f(l.upCoords, this.curCoords), this.pointers[0] = l.startEvent = new K(this, t, this.prepared.name, 'inertiastart', this.element), l.t0 = d, o.fire(l.startEvent), h) {
              l.vx0 = this.pointerDelta.client.vx, l.vy0 = this.pointerDelta.client.vy, l.v0 = c, this.calcInertia(l);
              var x, C = p({}, this.curCoords.page), T = P(o, this.element);
              if (C.x = C.x + l.xe - T.x, C.y = C.y + l.ye - T.y, x = {
                useStatusXY: !0,
                x: C.x,
                y: C.y,
                dx: 0,
                dy: 0,
                snap: null
              }, x.snap = x, y = b = 0, g) {
                var k = this.setSnapping(this.curCoords.page, x);
                k.locked && (y += k.dx, b += k.dy);
              }
              if (v) {
                var _ = this.setRestriction(this.curCoords.page, x);
                _.restricted && (y += _.dx, b += _.dy);
              }
              l.modifiedXe += y, l.modifiedYe += b, l.i = Xe(this.boundInertiaFrame);
            } else l.smoothEnd = !0, l.xe = y, l.ye = b, l.sx = l.sy = 0, l.i = Xe(this.boundSmoothEndFrame);
            return void (l.active = !0);
          }
          (g || v) && this.pointerMove(e, t, i, n, !0);
        }
        if (this.dragging) {
          r = new K(this, t, 'drag', 'end', this.element);
          var S = this.element, E = this.getDrop(r, t, S);
          this.dropTarget = E.dropzone, this.dropElement = E.element;
          var I = this.getDropEvents(t, r);
          I.leave && this.prevDropTarget.fire(I.leave), I.enter && this.dropTarget.fire(I.enter), I.drop && this.dropTarget.fire(I.drop), I.deactivate && this.fireActiveDrops(I.deactivate), o.fire(r);
        } else this.resizing ? (r = new K(this, t, 'resize', 'end', this.element), o.fire(r)) : this.gesturing && (r = new K(this, t, 'gesture', 'end', this.element), o.fire(r));
        this.stop(t);
      },
      collectDrops: function(e) {
        var t, n = [], r = [];
        for (e = e || this.element, t = 0; t < Ee.length; t++) if (Ee[t].options.drop.enabled) {
          var o = Ee[t], s = o.options.drop.accept;
          if (!(i(s) && s !== e || d(s) && !pe(e, s))) for (var a = o.selector ? o._context.querySelectorAll(o.selector) : [o._element], l = 0, c = a.length; l < c; l++) {
            var u = a[l];
            u !== e && (n.push(o), r.push(u));
          }
        }
        return { dropzones: n, elements: r };
      },
      fireActiveDrops: function(e) {
        var t, i, n, r;
        for (t = 0; t < this.activeDrops.dropzones.length; t++) i = this.activeDrops.dropzones[t], (n = this.activeDrops.elements[t]) !== r && (e.target = n, i.fire(e)), r = n;
      },
      setActiveDrops: function(e) {
        var t = this.collectDrops(e, !0);
        this.activeDrops.dropzones = t.dropzones, this.activeDrops.elements = t.elements, this.activeDrops.rects = [];
        for (var i = 0; i < this.activeDrops.dropzones.length; i++) this.activeDrops.rects[i] = this.activeDrops.dropzones[i].getRect(this.activeDrops.elements[i]);
      },
      getDrop: function(e, t, i) {
        var n = [];
        Ae && this.setActiveDrops(i);
        for (var r = 0; r < this.activeDrops.dropzones.length; r++) {
          var o = this.activeDrops.dropzones[r], s = this.activeDrops.elements[r], a = this.activeDrops.rects[r];
          n.push(o.dropCheck(e, t, this.target, i, s, a) ? s : null);
        }
        var l = X(n);
        return { dropzone: this.activeDrops.dropzones[l] || null, element: this.activeDrops.elements[l] || null };
      },
      getDropEvents: function(e, t) {
        var i = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
        return this.dropElement !== this.prevDropElement && (this.prevDropTarget && (i.leave = {
          target: this.prevDropElement,
          dropzone: this.prevDropTarget,
          relatedTarget: t.target,
          draggable: t.interactable,
          dragEvent: t,
          interaction: this,
          timeStamp: t.timeStamp,
          type: 'dragleave'
        }, t.dragLeave = this.prevDropElement, t.prevDropzone = this.prevDropTarget), this.dropTarget && (i.enter = {
          target: this.dropElement,
          dropzone: this.dropTarget,
          relatedTarget: t.target,
          draggable: t.interactable,
          dragEvent: t,
          interaction: this,
          timeStamp: t.timeStamp,
          type: 'dragenter'
        }, t.dragEnter = this.dropElement, t.dropzone = this.dropTarget)), 'dragend' === t.type && this.dropTarget && (i.drop = {
          target: this.dropElement,
          dropzone: this.dropTarget,
          relatedTarget: t.target,
          draggable: t.interactable,
          dragEvent: t,
          interaction: this,
          timeStamp: t.timeStamp,
          type: 'drop'
        }, t.dropzone = this.dropTarget), 'dragstart' === t.type && (i.activate = {
          target: null,
          dropzone: null,
          relatedTarget: t.target,
          draggable: t.interactable,
          dragEvent: t,
          interaction: this,
          timeStamp: t.timeStamp,
          type: 'dropactivate'
        }), 'dragend' === t.type && (i.deactivate = {
          target: null,
          dropzone: null,
          relatedTarget: t.target,
          draggable: t.interactable,
          dragEvent: t,
          interaction: this,
          timeStamp: t.timeStamp,
          type: 'dropdeactivate'
        }), 'dragmove' === t.type && this.dropTarget && (i.move = {
          target: this.dropElement,
          dropzone: this.dropTarget,
          relatedTarget: t.target,
          draggable: t.interactable,
          dragEvent: t,
          interaction: this,
          dragmove: t,
          timeStamp: t.timeStamp,
          type: 'dropmove'
        }, t.dropzone = this.dropTarget), i;
      },
      currentAction: function() {return this.dragging && 'drag' || this.resizing && 'resize' || this.gesturing && 'gesture' || null;},
      interacting: function() {return this.dragging || this.resizing || this.gesturing;},
      clearTargets: function() {this.target = this.element = null, this.dropTarget = this.dropElement = this.prevDropTarget = this.prevDropElement = null;},
      stop: function(e) {
        if (this.interacting()) {
          Pe.stop(), this.matches = [], this.matchElements = [];
          var t = this.target;
          t.options.styleCursor && (t._doc.documentElement.style.cursor = ''), e && a(e.preventDefault) && this.checkAndPreventDefault(e, t, this.element), this.dragging && (this.activeDrops.dropzones = this.activeDrops.elements = this.activeDrops.rects = null);
        }
        this.clearTargets(), this.pointerIsDown = this.snapStatus.locked = this.dragging = this.resizing = this.gesturing = !1, this.prepared.name = this.prevEvent = null, this.inertiaStatus.resumeDx = this.inertiaStatus.resumeDy = 0;
        for (var i = 0; i < this.pointers.length; i++) -1 === de(this.pointerIds, C(this.pointers[i])) && this.pointers.splice(i, 1);
      },
      inertiaFrame: function() {
        var e = this.inertiaStatus, t = this.target.options[this.prepared.name].inertia.resistance, i = (new Date).getTime() / 1e3 - e.t0;
        if (i < e.te) {
          var n = 1 - (Math.exp(-t * i) - e.lambda_v0) / e.one_ve_v0;
          if (e.modifiedXe === e.xe && e.modifiedYe === e.ye) e.sx = e.xe * n, e.sy = e.ye * n; else {
            var r = L(0, 0, e.xe, e.ye, e.modifiedXe, e.modifiedYe, n);
            e.sx = r.x, e.sy = r.y;
          }
          this.pointerMove(e.startEvent, e.startEvent), e.i = Xe(this.boundInertiaFrame);
        } else e.ending = !0, e.sx = e.modifiedXe, e.sy = e.modifiedYe, this.pointerMove(e.startEvent, e.startEvent), this.pointerEnd(e.startEvent, e.startEvent), e.active = e.ending = !1;
      },
      smoothEndFrame: function() {
        var e = this.inertiaStatus, t = (new Date).getTime() - e.t0, i = this.target.options[this.prepared.name].inertia.smoothEndDuration;
        t < i ? (e.sx = O(t, 0, e.xe, i), e.sy = O(t, 0, e.ye, i), this.pointerMove(e.startEvent, e.startEvent), e.i = Xe(this.boundSmoothEndFrame)) : (e.ending = !0, e.sx = e.xe, e.sy = e.ye, this.pointerMove(e.startEvent, e.startEvent), this.pointerEnd(e.startEvent, e.startEvent), e.smoothEnd = e.active = e.ending = !1);
      },
      addPointer: function(e) {
        var t = C(e), i = this.mouse ? 0 : de(this.pointerIds, t);
        return -1 === i && (i = this.pointerIds.length), this.pointerIds[i] = t, this.pointers[i] = e, i;
      },
      removePointer: function(e) {
        var t = C(e), i = this.mouse ? 0 : de(this.pointerIds, t);
        -1 !== i && (this.pointers.splice(i, 1), this.pointerIds.splice(i, 1), this.downTargets.splice(i, 1), this.downTimes.splice(i, 1), this.holdTimers.splice(i, 1));
      },
      recordPointer: function(e) {
        var t = this.mouse ? 0 : de(this.pointerIds, C(e));
        -1 !== t && (this.pointers[t] = e);
      },
      collectEventTargets: function(e, t, n, r) {
        var o = this.mouse ? 0 : de(this.pointerIds, C(e));
        if ('tap' !== r || !this.pointerWasMoved && this.downTargets[o] && this.downTargets[o] === n) {
          for (var s = [], a = [], l = n; l;) oe.isSet(l) && oe(l)._iEvents[r] && (s.push(oe(l)), a.push(l)), Ee.forEachSelector(function(e, t, o) {
            var c = me ? o.querySelectorAll(t) : void 0;
            e._iEvents[r] && i(l) && H(e, l) && !R(e, l, n) && z(e, l, n) && pe(l, t, c) && (s.push(e), a.push(l));
          }), l = F(l);
          (s.length || 'tap' === r) && this.firePointers(e, t, n, s, a, r);
        }
      },
      firePointers: function(e, t, i, n, r, o) {
        var s, a, l, c = this.mouse ? 0 : de(this.pointerIds, C(e)), u = {};
        for ('doubletap' === o ? u = e : (h(u, t), t !== e && h(u, e), u.preventDefault = Z, u.stopPropagation = K.prototype.stopPropagation, u.stopImmediatePropagation = K.prototype.stopImmediatePropagation, u.interaction = this, u.timeStamp = (new Date).getTime(), u.originalEvent = t, u.originalPointer = e, u.type = o, u.pointerId = C(e), u.pointerType = this.mouse ? 'mouse' : Le ? d(e.pointerType) ? e.pointerType : [, , 'touch', 'pen', 'mouse'][e.pointerType] : 'touch'), 'tap' === o && (u.dt = u.timeStamp - this.downTimes[c], a = u.timeStamp - this.tapTime, l = !!(this.prevTap && 'doubletap' !== this.prevTap.type && this.prevTap.target === u.target && a < 500), u.double = l, this.tapTime = u.timeStamp), s = 0; s < n.length && (u.currentTarget = r[s], u.interactable = n[s], n[s].fire(u), !(u.immediatePropagationStopped || u.propagationStopped && r[s + 1] !== u.currentTarget)); s++) ;
        if (l) {
          var f = {};
          p(f, u), f.dt = a, f.type = 'doubletap', this.collectEventTargets(f, t, i, 'doubletap'), this.prevTap = f;
        } else 'tap' === o && (this.prevTap = u);
      },
      validateSelector: function(e, t, i, n) {
        for (var r = 0, o = i.length; r < o; r++) {
          var s = i[r], a = n[r], l = ie(s.getAction(e, t, this, a), s);
          if (l && U(s, a, l)) return this.target = s, this.element = a, l;
        }
      },
      setSnapping: function(e, t) {
        var i, n, r, o = this.target.options[this.prepared.name].snap, s = [];
        if ((t = t || this.snapStatus).useStatusXY) n = { x: t.x, y: t.y }; else {
          var c = P(this.target, this.element);
          (n = p({}, e)).x -= c.x, n.y -= c.y;
        }
        t.realX = n.x, t.realY = n.y, n.x = n.x - this.inertiaStatus.resumeDx, n.y = n.y - this.inertiaStatus.resumeDy;
        for (var d = o.targets ? o.targets.length : 0, u = 0; u < this.snapOffsets.length; u++) {
          var h = { x: n.x - this.snapOffsets[u].x, y: n.y - this.snapOffsets[u].y };
          for (r = 0; r < d; r++) (i = a(o.targets[r]) ? o.targets[r](h.x, h.y, this) : o.targets[r]) && s.push({
            x: l(i.x) ? i.x + this.snapOffsets[u].x : h.x,
            y: l(i.y) ? i.y + this.snapOffsets[u].y : h.y,
            range: l(i.range) ? i.range : o.range
          });
        }
        var f = { target: null, inRange: !1, distance: 0, range: 0, dx: 0, dy: 0 };
        for (r = 0, d = s.length; r < d; r++) {
          var m = (i = s[r]).range, g = i.x - n.x, v = i.y - n.y, y = ke(g, v), b = y <= m;
          m === 1 / 0 && f.inRange && f.range !== 1 / 0 && (b = !1), f.target && !(b ? f.inRange && m !== 1 / 0 ? y / m < f.distance / f.range : m === 1 / 0 && f.range !== 1 / 0 || y < f.distance : !f.inRange && y < f.distance) || (m === 1 / 0 && (b = !0), f.target = i, f.distance = y, f.range = m, f.inRange = b, f.dx = g, f.dy = v, t.range = m);
        }
        var w;
        return f.target ? (w = t.snappedX !== f.target.x || t.snappedY !== f.target.y, t.snappedX = f.target.x, t.snappedY = f.target.y) : (w = !0, t.snappedX = NaN, t.snappedY = NaN), t.dx = f.dx, t.dy = f.dy, t.changed = w || f.inRange && !t.locked, t.locked = f.inRange, t;
      },
      setRestriction: function(e, t) {
        var n, r = this.target, o = r && r.options[this.prepared.name].restrict, s = o && o.restriction;
        if (!s) return t;
        n = n = (t = t || this.restrictStatus).useStatusXY ? {
          x: t.x,
          y: t.y
        } : p({}, e), t.snap && t.snap.locked && (n.x += t.snap.dx || 0, n.y += t.snap.dy || 0), n.x -= this.inertiaStatus.resumeDx, n.y -= this.inertiaStatus.resumeDy, t.dx = 0, t.dy = 0, t.restricted = !1;
        var l, c, u;
        return d(s) && !(s = 'parent' === s ? F(this.element) : 'self' === s ? r.getRect(this.element) : j(this.element, s)) ? t : (a(s) && (s = s(n.x, n.y, this.element)), i(s) && (s = S(s)), l = s, s ? 'x' in s && 'y' in s ? (c = Math.max(Math.min(l.x + l.width - this.restrictOffset.right, n.x), l.x + this.restrictOffset.left), u = Math.max(Math.min(l.y + l.height - this.restrictOffset.bottom, n.y), l.y + this.restrictOffset.top)) : (c = Math.max(Math.min(l.right - this.restrictOffset.right, n.x), l.left + this.restrictOffset.left), u = Math.max(Math.min(l.bottom - this.restrictOffset.bottom, n.y), l.top + this.restrictOffset.top)) : (c = n.x, u = n.y), t.dx = c - n.x, t.dy = u - n.y, t.changed = t.restrictedX !== c || t.restrictedY !== u, t.restricted = !(!t.dx && !t.dy), t.restrictedX = c, t.restrictedY = u, t);
      },
      checkAndPreventDefault: function(e, t, i) {
        if (t = t || this.target) {
          var n = t.options, r = n.preventDefault;
          if ('auto' !== r || !i || /^(input|select|textarea)$/i.test(e.target.nodeName)) 'always' !== r || e.preventDefault(); else {
            if (/down|start/i.test(e.type) && 'drag' === this.prepared.name && 'xy' !== n.drag.axis) return;
            if (n[this.prepared.name] && n[this.prepared.name].manualStart && !this.interacting()) return;
            e.preventDefault();
          }
        }
      },
      calcInertia: function(e) {
        var t = this.target.options[this.prepared.name].inertia, i = t.resistance, n = -Math.log(t.endSpeed / e.v0) / i;
        e.x0 = this.prevEvent.pageX, e.y0 = this.prevEvent.pageY, e.t0 = e.startEvent.timeStamp / 1e3, e.sx = e.sy = 0, e.modifiedXe = e.xe = (e.vx0 - n) / i, e.modifiedYe = e.ye = (e.vy0 - n) / i, e.te = n, e.lambda_v0 = i / e.v0, e.one_ve_v0 = 1 - t.endSpeed / e.v0;
      },
      autoScrollMove: function(e) {
        if (this.interacting() && G(this.target, this.prepared.name)) if (this.inertiaStatus.active) Pe.x = Pe.y = 0; else {
          var t, i, r, o, s = this.target.options[this.prepared.name].autoScroll, a = s.container || k(this.element);
          if (n(a)) o = e.clientX < Pe.margin, t = e.clientY < Pe.margin, i = e.clientX > a.innerWidth - Pe.margin, r = e.clientY > a.innerHeight - Pe.margin; else {
            var l = _(a);
            o = e.clientX < l.left + Pe.margin, t = e.clientY < l.top + Pe.margin, i = e.clientX > l.right - Pe.margin, r = e.clientY > l.bottom - Pe.margin;
          }
          Pe.x = i ? 1 : o ? -1 : 0, Pe.y = r ? 1 : t ? -1 : 0, Pe.isScrolling || (Pe.margin = s.margin, Pe.speed = s.speed, Pe.start(this));
        }
      },
      _updateEventTargets: function(e, t) {this._eventTarget = e, this._curEventTarget = t;}
    }, K.prototype = {
      preventDefault: t,
      stopImmediatePropagation: function() {this.immediatePropagationStopped = this.propagationStopped = !0;},
      stopPropagation: function() {this.propagationStopped = !0;}
    };
    for (var Ke = {}, Ze = ['dragStart', 'dragMove', 'resizeStart', 'resizeMove', 'gestureStart', 'gestureMove', 'pointerOver', 'pointerOut', 'pointerHover', 'selectorDown', 'pointerDown', 'pointerMove', 'pointerUp', 'pointerCancel', 'pointerEnd', 'addPointer', 'removePointer', 'recordPointer', 'autoScrollMove'], Je = 0, et = Ze.length; Je < et; Je++) {
      var tt = Ze[Je];
      Ke[tt] = Q(tt);
    }
    Ee.indexOfElement = function(e, t) {
      t = t || ve;
      for (var i = 0; i < this.length; i++) {
        var n = this[i];
        if (n.selector === e && n._context === t || !n.selector && n._element === e) return i;
      }
      return -1;
    }, Ee.get = function(e, t) {return this[this.indexOfElement(e, t && t.context)];}, Ee.forEachSelector = function(e) {
      for (var t = 0; t < this.length; t++) {
        var i = this[t];
        if (i.selector) {
          var n = e(i, i.selector, i._context, t, this);
          if (void 0 !== n) return n;
        }
      }
    }, (se.prototype = {
      setOnEvents: function(e, t) {return 'drop' === e ? (a(t.ondrop) && (this.ondrop = t.ondrop), a(t.ondropactivate) && (this.ondropactivate = t.ondropactivate), a(t.ondropdeactivate) && (this.ondropdeactivate = t.ondropdeactivate), a(t.ondragenter) && (this.ondragenter = t.ondragenter), a(t.ondragleave) && (this.ondragleave = t.ondragleave), a(t.ondropmove) && (this.ondropmove = t.ondropmove)) : (e = 'on' + e, a(t.onstart) && (this[e + 'start'] = t.onstart), a(t.onmove) && (this[e + 'move'] = t.onmove), a(t.onend) && (this[e + 'end'] = t.onend), a(t.oninertiastart) && (this[e + 'inertiastart'] = t.oninertiastart)), this;},
      draggable: function(e) {return s(e) ? (this.options.drag.enabled = !1 !== e.enabled, this.setPerAction('drag', e), this.setOnEvents('drag', e), /^x$|^y$|^xy$/.test(e.axis) ? this.options.drag.axis = e.axis : null === e.axis && delete this.options.drag.axis, this) : c(e) ? (this.options.drag.enabled = e, this) : this.options.drag;},
      setPerAction: function(e, t) {for (var i in t) i in $e[e] && (s(t[i]) ? (this.options[e][i] = p(this.options[e][i] || {}, t[i]), s($e.perAction[i]) && 'enabled' in $e.perAction[i] && (this.options[e][i].enabled = !1 !== t[i].enabled)) : c(t[i]) && s($e.perAction[i]) ? this.options[e][i].enabled = t[i] : void 0 !== t[i] && (this.options[e][i] = t[i]));},
      dropzone: function(e) {return s(e) ? (this.options.drop.enabled = !1 !== e.enabled, this.setOnEvents('drop', e), /^(pointer|center)$/.test(e.overlap) ? this.options.drop.overlap = e.overlap : l(e.overlap) && (this.options.drop.overlap = Math.max(Math.min(1, e.overlap), 0)), 'accept' in e && (this.options.drop.accept = e.accept), 'checker' in e && (this.options.drop.checker = e.checker), this) : c(e) ? (this.options.drop.enabled = e, this) : this.options.drop;},
      dropCheck: function(e, t, i, n, r, o) {
        var s = !1;
        if (!(o = o || this.getRect(r))) return !!this.options.drop.checker && this.options.drop.checker(e, t, s, this, r, i, n);
        var a = this.options.drop.overlap;
        if ('pointer' === a) {
          var c, d, u = b(e), p = P(i, n);
          u.x += p.x, u.y += p.y, c = u.x > o.left && u.x < o.right, d = u.y > o.top && u.y < o.bottom, s = c && d;
        }
        var h = i.getRect(n);
        if ('center' === a) {
          var f = h.left + h.width / 2, m = h.top + h.height / 2;
          s = f >= o.left && f <= o.right && m >= o.top && m <= o.bottom;
        }
        return l(a) && (s = Math.max(0, Math.min(o.right, h.right) - Math.max(o.left, h.left)) * Math.max(0, Math.min(o.bottom, h.bottom) - Math.max(o.top, h.top)) / (h.width * h.height) >= a), this.options.drop.checker && (s = this.options.drop.checker(e, t, s, this, r, i, n)), s;
      },
      dropChecker: function(e) {return a(e) ? (this.options.drop.checker = e, this) : null === e ? (delete this.options.getRect, this) : this.options.drop.checker;},
      accept: function(e) {return i(e) ? (this.options.drop.accept = e, this) : u(e) ? (this.options.drop.accept = e, this) : null === e ? (delete this.options.drop.accept, this) : this.options.drop.accept;},
      resizable: function(e) {return s(e) ? (this.options.resize.enabled = !1 !== e.enabled, this.setPerAction('resize', e), this.setOnEvents('resize', e), /^x$|^y$|^xy$/.test(e.axis) ? this.options.resize.axis = e.axis : null === e.axis && (this.options.resize.axis = $e.resize.axis), c(e.preserveAspectRatio) ? this.options.resize.preserveAspectRatio = e.preserveAspectRatio : c(e.square) && (this.options.resize.square = e.square), this) : c(e) ? (this.options.resize.enabled = e, this) : this.options.resize;},
      squareResize: function(e) {return c(e) ? (this.options.resize.square = e, this) : null === e ? (delete this.options.resize.square, this) : this.options.resize.square;},
      gesturable: function(e) {return s(e) ? (this.options.gesture.enabled = !1 !== e.enabled, this.setPerAction('gesture', e), this.setOnEvents('gesture', e), this) : c(e) ? (this.options.gesture.enabled = e, this) : this.options.gesture;},
      autoScroll: function(e) {return s(e) ? e = p({ actions: ['drag', 'resize'] }, e) : c(e) && (e = { actions: ['drag', 'resize'], enabled: e }), this.setOptions('autoScroll', e);},
      snap: function(e) {
        var t = this.setOptions('snap', e);
        return t === this ? this : t.drag;
      },
      setOptions: function(e, t) {
        var i, n = t && o(t.actions) ? t.actions : ['drag'];
        if (s(t) || c(t)) {
          for (i = 0; i < n.length; i++) {
            var r = /resize/.test(n[i]) ? 'resize' : n[i];
            if (s(this.options[r])) {
              var a = this.options[r][e];
              s(t) ? (p(a, t), a.enabled = !1 !== t.enabled, 'snap' === e && ('grid' === a.mode ? a.targets = [oe.createSnapGrid(p({
                offset: a.gridOffset || {
                  x: 0,
                  y: 0
                }
              }, a.grid || {}))] : 'anchor' === a.mode ? a.targets = a.anchors : 'path' === a.mode && (a.targets = a.paths), 'elementOrigin' in t && (a.relativePoints = [t.elementOrigin]))) : c(t) && (a.enabled = t);
            }
          }
          return this;
        }
        var l = {}, d = ['drag', 'resize', 'gesture'];
        for (i = 0; i < d.length; i++) e in $e[d[i]] && (l[d[i]] = this.options[d[i]][e]);
        return l;
      },
      inertia: function(e) {
        var t = this.setOptions('inertia', e);
        return t === this ? this : t.drag;
      },
      getAction: function(e, t, i, n) {
        var r = this.defaultActionChecker(e, i, n);
        return this.options.actionChecker ? this.options.actionChecker(e, t, r, this, n, i) : r;
      },
      defaultActionChecker: te,
      actionChecker: function(e) {return a(e) ? (this.options.actionChecker = e, this) : null === e ? (delete this.options.actionChecker, this) : this.options.actionChecker;},
      getRect: function(e) {return e = e || this._element, this.selector && !i(e) && (e = this._context.querySelector(this.selector)), S(e);},
      rectChecker: function(e) {return a(e) ? (this.getRect = e, this) : null === e ? (delete this.options.getRect, this) : this.getRect;},
      styleCursor: function(e) {return c(e) ? (this.options.styleCursor = e, this) : null === e ? (delete this.options.styleCursor, this) : this.options.styleCursor;},
      preventDefault: function(e) {return /^(always|never|auto)$/.test(e) ? (this.options.preventDefault = e, this) : c(e) ? (this.options.preventDefault = e ? 'always' : 'never', this) : this.options.preventDefault;},
      origin: function(e) {return u(e) ? (this.options.origin = e, this) : s(e) ? (this.options.origin = e, this) : this.options.origin;},
      deltaSource: function(e) {return 'page' === e || 'client' === e ? (this.options.deltaSource = e, this) : this.options.deltaSource;},
      restrict: function(e) {
        if (!s(e)) return this.setOptions('restrict', e);
        for (var t, i = ['drag', 'resize', 'gesture'], n = 0; n < i.length; n++) {
          var r = i[n];
          if (r in e) {
            var o = p({ actions: [r], restriction: e[r] }, e);
            t = this.setOptions('restrict', o);
          }
        }
        return t;
      },
      context: function() {return this._context;},
      _context: ve,
      ignoreFrom: function(e) {return u(e) ? (this.options.ignoreFrom = e, this) : i(e) ? (this.options.ignoreFrom = e, this) : this.options.ignoreFrom;},
      allowFrom: function(e) {return u(e) ? (this.options.allowFrom = e, this) : i(e) ? (this.options.allowFrom = e, this) : this.options.allowFrom;},
      element: function() {return this._element;},
      fire: function(e) {
        if (!e || !e.type || !ue(qe, e.type)) return this;
        var t, i, n, r = 'on' + e.type;
        if (e.type in this._iEvents) for (i = 0, n = (t = this._iEvents[e.type]).length; i < n && !e.immediatePropagationStopped; i++) t[i].name, t[i](e);
        if (a(this[r]) && (this[r].name, this[r](e)), e.type in We && (t = We[e.type])) for (i = 0, n = t.length; i < n && !e.immediatePropagationStopped; i++) t[i].name, t[i](e);
        return this;
      },
      on: function(e, t, i) {
        var n;
        if (d(e) && -1 !== e.search(' ') && (e = e.trim().split(/ +/)), o(e)) {
          for (n = 0; n < e.length; n++) this.on(e[n], t, i);
          return this;
        }
        if (s(e)) {
          for (var r in e) this.on(r, e[r], t);
          return this;
        }
        if ('wheel' === e && (e = ze), i = !!i, ue(qe, e)) e in this._iEvents ? this._iEvents[e].push(t) : this._iEvents[e] = [t]; else if (this.selector) {
          if (!De[e]) for (De[e] = {
            selectors: [],
            contexts: [],
            listeners: []
          }, n = 0; n < Se.length; n++) Ve.add(Se[n], e, ne), Ve.add(Se[n], e, re, !0);
          var a, l = De[e];
          for (a = l.selectors.length - 1; a >= 0 && (l.selectors[a] !== this.selector || l.contexts[a] !== this._context); a--) ;
          -1 === a && (a = l.selectors.length, l.selectors.push(this.selector), l.contexts.push(this._context), l.listeners.push([])), l.listeners[a].push([t, i]);
        } else Ve.add(this._element, e, t, i);
        return this;
      },
      off: function(e, t, i) {
        var n;
        if (d(e) && -1 !== e.search(' ') && (e = e.trim().split(/ +/)), o(e)) {
          for (n = 0; n < e.length; n++) this.off(e[n], t, i);
          return this;
        }
        if (s(e)) {
          for (var r in e) this.off(r, e[r], t);
          return this;
        }
        var a, l = -1;
        if (i = !!i, 'wheel' === e && (e = ze), ue(qe, e)) (a = this._iEvents[e]) && -1 !== (l = de(a, t)) && this._iEvents[e].splice(l, 1); else if (this.selector) {
          var c = De[e], u = !1;
          if (!c) return this;
          for (l = c.selectors.length - 1; l >= 0; l--) if (c.selectors[l] === this.selector && c.contexts[l] === this._context) {
            var p = c.listeners[l];
            for (n = p.length - 1; n >= 0; n--) {
              var h = p[n][0], f = p[n][1];
              if (h === t && f === i) {
                p.splice(n, 1), p.length || (c.selectors.splice(l, 1), c.contexts.splice(l, 1), c.listeners.splice(l, 1), Ve.remove(this._context, e, ne), Ve.remove(this._context, e, re, !0), c.selectors.length || (De[e] = null)), u = !0;
                break;
              }
            }
            if (u) break;
          }
        } else Ve.remove(this._element, e, t, i);
        return this;
      },
      set: function(e) {
        s(e) || (e = {}), this.options = p({}, $e.base);
        var t, i = ['drag', 'drop', 'resize', 'gesture'], n = ['draggable', 'dropzone', 'resizable', 'gesturable'], r = p(p({}, $e.perAction), e[o] || {});
        for (t = 0; t < i.length; t++) {
          var o = i[t];
          this.options[o] = p({}, $e[o]), this.setPerAction(o, r), this[n[t]](e[o]);
        }
        var a = ['accept', 'actionChecker', 'allowFrom', 'deltaSource', 'dropChecker', 'ignoreFrom', 'origin', 'preventDefault', 'rectChecker', 'styleCursor'];
        for (t = 0, et = a.length; t < et; t++) {
          var l = a[t];
          this.options[l] = $e.base[l], l in e && this[l](e[l]);
        }
        return this;
      },
      unset: function() {
        if (Ve.remove(this._element, 'all'), d(this.selector)) for (var e in De) for (var t = De[e], i = 0; i < t.selectors.length; i++) {
          t.selectors[i] === this.selector && t.contexts[i] === this._context && (t.selectors.splice(i, 1), t.contexts.splice(i, 1), t.listeners.splice(i, 1), t.selectors.length || (De[e] = null)), Ve.remove(this._context, e, ne), Ve.remove(this._context, e, re, !0);
          break;
        } else Ve.remove(this, 'all'), this.options.styleCursor && (this._element.style.cursor = '');
        return this.dropzone(!1), Ee.splice(de(Ee, this), 1), oe;
      }
    }).snap = ae(se.prototype.snap, 'Interactable#snap is deprecated. See the new documentation for snapping at http://interactjs.io/docs/snapping'), se.prototype.restrict = ae(se.prototype.restrict, 'Interactable#restrict is deprecated. See the new documentation for resticting at http://interactjs.io/docs/restriction'), se.prototype.inertia = ae(se.prototype.inertia, 'Interactable#inertia is deprecated. See the new documentation for inertia at http://interactjs.io/docs/inertia'), se.prototype.autoScroll = ae(se.prototype.autoScroll, 'Interactable#autoScroll is deprecated. See the new documentation for autoScroll at http://interactjs.io/docs/#autoscroll'), se.prototype.squareResize = ae(se.prototype.squareResize, 'Interactable#squareResize is deprecated. See http://interactjs.io/docs/#resize-square'), se.prototype.accept = ae(se.prototype.accept, 'Interactable#accept is deprecated. use Interactable#dropzone({ accept: target }) instead'), se.prototype.dropChecker = ae(se.prototype.dropChecker, 'Interactable#dropChecker is deprecated. use Interactable#dropzone({ dropChecker: checkerFunction }) instead'), se.prototype.context = ae(se.prototype.context, 'Interactable#context as a method is deprecated. It will soon be a DOM Node instead'), oe.isSet = function(e, t) {return -1 !== Ee.indexOfElement(e, t && t.context);}, oe.on = function(e, t, i) {
      if (d(e) && -1 !== e.search(' ') && (e = e.trim().split(/ +/)), o(e)) {
        for (var n = 0; n < e.length; n++) oe.on(e[n], t, i);
        return oe;
      }
      if (s(e)) {
        for (var r in e) oe.on(r, e[r], t);
        return oe;
      }
      return ue(qe, e) ? We[e] ? We[e].push(t) : We[e] = [t] : Ve.add(ve, e, t, i), oe;
    }, oe.off = function(e, t, i) {
      if (d(e) && -1 !== e.search(' ') && (e = e.trim().split(/ +/)), o(e)) {
        for (var n = 0; n < e.length; n++) oe.off(e[n], t, i);
        return oe;
      }
      if (s(e)) {
        for (var r in e) oe.off(r, e[r], t);
        return oe;
      }
      if (ue(qe, e)) {
        var a;
        e in We && -1 !== (a = de(We[e], t)) && We[e].splice(a, 1);
      } else Ve.remove(ve, e, t, i);
      return oe;
    }, oe.enableDragging = ae(function(e) {return null !== e && void 0 !== e ? (Re.drag = e, oe) : Re.drag;}, 'interact.enableDragging is deprecated and will soon be removed.'), oe.enableResizing = ae(function(e) {return null !== e && void 0 !== e ? (Re.resize = e, oe) : Re.resize;}, 'interact.enableResizing is deprecated and will soon be removed.'), oe.enableGesturing = ae(function(e) {return null !== e && void 0 !== e ? (Re.gesture = e, oe) : Re.gesture;}, 'interact.enableGesturing is deprecated and will soon be removed.'), oe.eventTypes = qe, oe.debug = function() {
      var e = Ie[0] || new Y;
      return {
        interactions: Ie,
        target: e.target,
        dragging: e.dragging,
        resizing: e.resizing,
        gesturing: e.gesturing,
        prepared: e.prepared,
        matches: e.matches,
        matchElements: e.matchElements,
        prevCoords: e.prevCoords,
        startCoords: e.startCoords,
        pointerIds: e.pointerIds,
        pointers: e.pointers,
        addPointer: Ke.addPointer,
        removePointer: Ke.removePointer,
        recordPointer: Ke.recordPointer,
        snap: e.snapStatus,
        restrict: e.restrictStatus,
        inertia: e.inertiaStatus,
        downTime: e.downTimes[0],
        downEvent: e.downEvent,
        downPointer: e.downPointer,
        prevEvent: e.prevEvent,
        Interactable: se,
        interactables: Ee,
        pointerIsDown: e.pointerIsDown,
        defaultOptions: $e,
        defaultActionChecker: te,
        actionCursors: He,
        dragMove: Ke.dragMove,
        resizeMove: Ke.resizeMove,
        gestureMove: Ke.gestureMove,
        pointerUp: Ke.pointerUp,
        pointerDown: Ke.pointerDown,
        pointerMove: Ke.pointerMove,
        pointerHover: Ke.pointerHover,
        eventTypes: qe,
        events: Ve,
        globalEvents: We,
        delegatedEvents: De,
        prefixedPropREs: Qe
      };
    }, oe.getPointerAverage = I, oe.getTouchBBox = A, oe.getTouchDistance = D, oe.getTouchAngle = $, oe.getElementRect = S, oe.getElementClientRect = _, oe.matchesSelector = pe, oe.closest = j, oe.margin = ae(function(e) {return l(e) ? (Oe = e, oe) : Oe;}, 'interact.margin is deprecated. Use interact(target).resizable({ margin: number }); instead.'), oe.supportsTouch = function() {return Me;}, oe.supportsPointerEvent = function() {return Le;}, oe.stop = function(e) {
      for (var t = Ie.length - 1; t >= 0; t--) Ie[t].stop(e);
      return oe;
    }, oe.dynamicDrop = function(e) {return c(e) ? (Ae = e, oe) : Ae;}, oe.pointerMoveTolerance = function(e) {return l(e) ? (Ne = e, this) : Ne;}, oe.maxInteractions = function(e) {return l(e) ? (Fe = e, this) : Fe;}, oe.createSnapGrid = function(e) {
      return function(t, i) {
        var n = 0, r = 0;
        s(e.offset) && (n = e.offset.x, r = e.offset.y);
        var o = Math.round((t - n) / e.x), a = Math.round((i - r) / e.y);
        return { x: o * e.x + n, y: a * e.y + r, range: e.range };
      };
    }, ce(ve), Ue in Element.prototype && a(Element.prototype[Ue]) || (me = function(e, t, i) {
      for (var n = 0, r = (i = i || e.parentNode.querySelectorAll(t)).length; n < r; n++) if (i[n] === e) return !0;
      return !1;
    }), function() {
      for (var t = 0, i = ['ms', 'moz', 'webkit', 'o'], n = 0; n < i.length && !e.requestAnimationFrame; ++n) Xe = e[i[n] + 'RequestAnimationFrame'], Ye = e[i[n] + 'CancelAnimationFrame'] || e[i[n] + 'CancelRequestAnimationFrame'];
      Xe || (Xe = function(e) {
        var i = (new Date).getTime(), n = Math.max(0, 16 - (i - t)), r = setTimeout(function() {e(i + n);}, n);
        return t = i + n, r;
      }), Ye || (Ye = function(e) {clearTimeout(e);});
    }(), 'undefined' != typeof exports ? ('undefined' != typeof module && module.exports && (exports = module.exports = oe), exports.interact = oe) : 'function' == typeof define && define.amd ? define('interact', function() {return oe;}) : e.interact = oe;
  }
}('undefined' == typeof window ? void 0 : window), function(e) {
  'use strict';
  'function' == typeof define && define.amd ? define(['jquery'], e) : 'undefined' != typeof module && module.exports ? module.exports = e(require('jquery')) : e(jQuery);
}(function(e) {
  'use strict';

  function t(t) {return !t.nodeName || -1 !== e.inArray(t.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']);}

  function i(t) {return e.isFunction(t) || e.isPlainObject(t) ? t : { top: t, left: t };}

  var n = e.scrollTo = function(t, i, n) {return e(window).scrollTo(t, i, n);};
  return n.defaults = { axis: 'xy', duration: 0, limit: !0 }, e.fn.scrollTo = function(r, o, s) {
    'object' == typeof o && (s = o, o = 0), 'function' == typeof s && (s = { onAfter: s }), 'max' === r && (r = 9e9), s = e.extend({}, n.defaults, s), o = o || s.duration;
    var a = s.queue && s.axis.length > 1;
    return a && (o /= 2), s.offset = i(s.offset), s.over = i(s.over), this.each(function() {
      function l(t) {
        var i = e.extend({}, s, {
          queue: !0,
          duration: o,
          complete: t && function() {t.call(u, h, s);}
        });
        p.animate(f, i);
      }

      if (null !== r) {
        var c, d = t(this), u = d ? this.contentWindow || window : this, p = e(u), h = r, f = {};
        switch (typeof h) {
          case'number':
          case'string':
            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(h)) {
              h = i(h);
              break;
            }
            h = d ? e(h) : e(h, u);
          case'object':
            if (0 === h.length) return;
            (h.is || h.style) && (c = (h = e(h)).offset());
        }
        var m = e.isFunction(s.offset) && s.offset(u, h) || s.offset;
        e.each(s.axis.split(''), function(e, t) {
          var i = 'x' === t ? 'Left' : 'Top', r = i.toLowerCase(), o = 'scroll' + i, g = p[o](), v = n.max(u, t);
          if (c) f[o] = c[r] + (d ? 0 : g - p.offset()[r]), s.margin && (f[o] -= parseInt(h.css('margin' + i), 10) || 0, f[o] -= parseInt(h.css('border' + i + 'Width'), 10) || 0), f[o] += m[r] || 0, s.over[r] && (f[o] += h['x' === t ? 'width' : 'height']() * s.over[r]); else {
            var y = h[r];
            f[o] = y.slice && '%' === y.slice(-1) ? parseFloat(y) / 100 * v : y;
          }
          s.limit && /^\d+$/.test(f[o]) && (f[o] = f[o] <= 0 ? 0 : Math.min(f[o], v)), !e && s.axis.length > 1 && (g === f[o] ? f = {} : a && (l(s.onAfterFirst), f = {}));
        }), l(s.onAfter);
      }
    });
  }, n.max = function(i, n) {
    var r = 'x' === n ? 'Width' : 'Height', o = 'scroll' + r;
    if (!t(i)) return i[o] - e(i)[r.toLowerCase()]();
    var s = 'client' + r, a = i.ownerDocument || i.document, l = a.documentElement, c = a.body;
    return Math.max(l[o], c[o]) - Math.min(l[s], c[s]);
  }, e.Tween.propHooks.scrollLeft = e.Tween.propHooks.scrollTop = {
    get: function(t) {return e(t.elem)[t.prop]();}, set: function(t) {
      var i = this.get(t);
      if (t.options.interrupt && t._last && t._last !== i) return e(t.elem).stop();
      var n = Math.round(t.now);
      i !== n && (e(t.elem)[t.prop](n), t._last = this.get(t));
    }
  }, n;
}), function(e, t) {'object' == typeof exports && 'object' == typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define([], t) : 'object' == typeof exports ? exports.inView = t() : e.inView = t();}(this, function() {
  return function(e) {
    function t(n) {
      if (i[n]) return i[n].exports;
      var r = i[n] = { exports: {}, id: n, loaded: !1 };
      return e[n].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports;
    }

    var i = {};
    return t.m = e, t.c = i, t.p = '', t(0);
  }([function(e, t, i) {
    'use strict';
    var n = function(e) {return e && e.__esModule ? e : { default: e };}(i(2));
    e.exports = n.default;
  }, function(e, t) {
    e.exports = function(e) {
      var t = typeof e;
      return null != e && ('object' == t || 'function' == t);
    };
  }, function(e, t, i) {
    'use strict';

    function n(e) {return e && e.__esModule ? e : { default: e };}

    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = n(i(9)), o = n(i(3)), s = i(4);
    t.default = function() {
      if ('undefined' != typeof window) {
        var e = ['scroll', 'resize', 'load'], t = { history: [] }, i = { offset: {}, threshold: 0, test: s.inViewport },
            n = (0, r.default)(function() {t.history.forEach(function(e) {t[e].check();});}, 100);
        e.forEach(function(e) {return addEventListener(e, n);}), window.MutationObserver && addEventListener('DOMContentLoaded', function() {
          new MutationObserver(n).observe(document.body, {
            attributes: !0,
            childList: !0,
            subtree: !0
          });
        });
        var a = function(e) {
          if ('string' == typeof e) {
            var n = [].slice.call(document.querySelectorAll(e));
            return t.history.indexOf(e) > -1 ? t[e].elements = n : (t[e] = (0, o.default)(n, i), t.history.push(e)), t[e];
          }
        };
        return a.offset = function(e) {
          if (void 0 === e) return i.offset;
          var t = function(e) {return 'number' == typeof e;};
          return ['top', 'right', 'bottom', 'left'].forEach(t(e) ? function(t) {return i.offset[t] = e;} : function(n) {return t(e[n]) ? i.offset[n] = e[n] : null;}), i.offset;
        }, a.threshold = function(e) {return 'number' == typeof e && e >= 0 && e <= 1 ? i.threshold = e : i.threshold;}, a.test = function(e) {return 'function' == typeof e ? i.test = e : i.test;}, a.is = function(e) {return i.test(e, i);}, a.offset(0), a;
      }
    }();
  }, function(e, t) {
    'use strict';

    function i(e, t) {if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');}

    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = function() {
      function e(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }

      return function(t, i, n) {return i && e(t.prototype, i), n && e(t, n), t;};
    }(), r = function() {
      function e(t, n) {i(this, e), this.options = n, this.elements = t, this.current = [], this.handlers = { enter: [], exit: [] }, this.singles = { enter: [], exit: [] };}

      return n(e, [{
        key: 'check', value: function() {
          var e = this;
          return this.elements.forEach(function(t) {
            var i = e.options.test(t, e.options), n = e.current.indexOf(t), r = n > -1, o = i && !r, s = !i && r;
            o && (e.current.push(t), e.emit('enter', t)), s && (e.current.splice(n, 1), e.emit('exit', t));
          }), this;
        }
      }, { key: 'on', value: function(e, t) {return this.handlers[e].push(t), this;} }, { key: 'once', value: function(e, t) {return this.singles[e].unshift(t), this;} }, {
        key: 'emit',
        value: function(e, t) {
          for (; this.singles[e].length;) this.singles[e].pop()(t);
          for (var i = this.handlers[e].length; --i > -1;) this.handlers[e][i](t);
          return this;
        }
      }]), e;
    }();
    t.default = function(e, t) {return new r(e, t);};
  }, function(e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }), t.inViewport = function(e, t) {
      var i = e.getBoundingClientRect(), n = i.top, r = i.right, o = i.bottom, s = i.left, a = i.width, l = i.height, c = { t: o, r: window.innerWidth - s, b: window.innerHeight - n, l: r },
          d = { x: t.threshold * a, y: t.threshold * l };
      return c.t > t.offset.top + d.y && c.r > t.offset.right + d.x && c.b > t.offset.bottom + d.y && c.l > t.offset.left + d.x;
    };
  }, function(e, t) {
    (function(t) {
      var i = 'object' == typeof t && t && t.Object === Object && t;
      e.exports = i;
    }).call(t, function() {return this;}());
  }, function(e, t, i) {
    var n = i(5), r = 'object' == typeof self && self && self.Object === Object && self, o = n || r || Function('return this')();
    e.exports = o;
  }, function(e, t, i) {
    var n = i(1), r = i(8), o = i(10), s = 'Expected a function', a = Math.max, l = Math.min;
    e.exports = function(e, t, i) {
      function c(t) {
        var i = g, n = v;
        return g = v = void 0, C = t, b = e.apply(n, i);
      }

      function d(e) {return C = e, w = setTimeout(h, t), T ? c(e) : b;}

      function u(e) {
        var i = e - C, n = t - (e - x);
        return k ? l(n, y - i) : n;
      }

      function p(e) {
        var i = e - x, n = e - C;
        return void 0 === x || i >= t || i < 0 || k && n >= y;
      }

      function h() {
        var e = r();
        return p(e) ? f(e) : void (w = setTimeout(h, u(e)));
      }

      function f(e) {return w = void 0, _ && g ? c(e) : (g = v = void 0, b);}

      function m() {
        var e = r(), i = p(e);
        if (g = arguments, v = this, x = e, i) {
          if (void 0 === w) return d(x);
          if (k) return w = setTimeout(h, t), c(x);
        }
        return void 0 === w && (w = setTimeout(h, t)), b;
      }

      var g, v, y, b, w, x, C = 0, T = !1, k = !1, _ = !0;
      if ('function' != typeof e) throw new TypeError(s);
      return t = o(t) || 0, n(i) && (T = !!i.leading, k = 'maxWait' in i, y = k ? a(o(i.maxWait) || 0, t) : y, _ = 'trailing' in i ? !!i.trailing : _), m.cancel = function() {void 0 !== w && clearTimeout(w), C = 0, g = x = v = w = void 0;}, m.flush = function() {return void 0 === w ? b : f(r());}, m;
    };
  }, function(e, t, i) {
    var n = i(6);
    e.exports = function() {return n.Date.now();};
  }, function(e, t, i) {
    var n = i(7), r = i(1), o = 'Expected a function';
    e.exports = function(e, t, i) {
      var s = !0, a = !0;
      if ('function' != typeof e) throw new TypeError(o);
      return r(i) && (s = 'leading' in i ? !!i.leading : s, a = 'trailing' in i ? !!i.trailing : a), n(e, t, { leading: s, maxWait: t, trailing: a });
    };
  }, function(e, t) {e.exports = function(e) {return e;};}]);
}), function() {
  function e(e) {
    function t(t, i, n, r, o, s) {
      for (; o >= 0 && o < s; o += e) {
        var a = r ? r[o] : o;
        n = i(n, t[a], a, t);
      }
      return n;
    }

    return function(i, n, r, o) {
      n = b(n, o, 4);
      var s = !S(i) && y.keys(i), a = (s || i).length, l = e > 0 ? 0 : a - 1;
      return arguments.length < 3 && (r = i[s ? s[l] : l], l += e), t(i, n, r, s, l, a);
    };
  }

  function t(e) {
    return function(t, i, n) {
      i = w(i, n);
      for (var r = _(t), o = e > 0 ? 0 : r - 1; o >= 0 && o < r; o += e) if (i(t[o], o, t)) return o;
      return -1;
    };
  }

  function i(e, t, i) {
    return function(n, r, o) {
      var s = 0, a = _(n);
      if ('number' == typeof o) e > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1; else if (i && o && a) return o = i(n, r), n[o] === r ? o : -1;
      if (r !== r) return (o = t(d.call(n, s, a), y.isNaN)) >= 0 ? o + s : -1;
      for (o = e > 0 ? s : a - 1; o >= 0 && o < a; o += e) if (n[o] === r) return o;
      return -1;
    };
  }

  function n(e, t) {
    var i = $.length, n = e.constructor, r = y.isFunction(n) && n.prototype || a, o = 'constructor';
    for (y.has(e, o) && !y.contains(t, o) && t.push(o); i--;) (o = $[i]) in e && e[o] !== r[o] && !y.contains(t, o) && t.push(o);
  }

  var r = this, o = r._, s = Array.prototype, a = Object.prototype, l = Function.prototype, c = s.push, d = s.slice, u = a.toString, p = a.hasOwnProperty, h = Array.isArray, f = Object.keys,
      m = l.bind, g = Object.create, v = function() {}, y = function(e) {return e instanceof y ? e : this instanceof y ? void (this._wrapped = e) : new y(e);};
  'undefined' != typeof exports ? ('undefined' != typeof module && module.exports && (exports = module.exports = y), exports._ = y) : r._ = y, y.VERSION = '1.8.3';
  var b = function(e, t, i) {
    if (void 0 === t) return e;
    switch (null == i ? 3 : i) {
      case 1:
        return function(i) {return e.call(t, i);};
      case 2:
        return function(i, n) {return e.call(t, i, n);};
      case 3:
        return function(i, n, r) {return e.call(t, i, n, r);};
      case 4:
        return function(i, n, r, o) {return e.call(t, i, n, r, o);};
    }
    return function() {return e.apply(t, arguments);};
  }, w = function(e, t, i) {return null == e ? y.identity : y.isFunction(e) ? b(e, t, i) : y.isObject(e) ? y.matcher(e) : y.property(e);};
  y.iteratee = function(e, t) {return w(e, t, 1 / 0);};
  var x = function(e, t) {
    return function(i) {
      var n = arguments.length;
      if (n < 2 || null == i) return i;
      for (var r = 1; r < n; r++) for (var o = arguments[r], s = e(o), a = s.length, l = 0; l < a; l++) {
        var c = s[l];
        t && void 0 !== i[c] || (i[c] = o[c]);
      }
      return i;
    };
  }, C = function(e) {
    if (!y.isObject(e)) return {};
    if (g) return g(e);
    v.prototype = e;
    var t = new v;
    return v.prototype = null, t;
  }, T = function(e) {return function(t) {return null == t ? void 0 : t[e];};}, k = Math.pow(2, 53) - 1, _ = T('length'), S = function(e) {
    var t = _(e);
    return 'number' == typeof t && t >= 0 && t <= k;
  };
  y.each = y.forEach = function(e, t, i) {
    t = b(t, i);
    var n, r;
    if (S(e)) for (n = 0, r = e.length; n < r; n++) t(e[n], n, e); else {
      var o = y.keys(e);
      for (n = 0, r = o.length; n < r; n++) t(e[o[n]], o[n], e);
    }
    return e;
  }, y.map = y.collect = function(e, t, i) {
    t = w(t, i);
    for (var n = !S(e) && y.keys(e), r = (n || e).length, o = Array(r), s = 0; s < r; s++) {
      var a = n ? n[s] : s;
      o[s] = t(e[a], a, e);
    }
    return o;
  }, y.reduce = y.foldl = y.inject = e(1), y.reduceRight = y.foldr = e(-1), y.find = y.detect = function(e, t, i) {
    var n;
    if (void 0 !== (n = S(e) ? y.findIndex(e, t, i) : y.findKey(e, t, i)) && -1 !== n) return e[n];
  }, y.filter = y.select = function(e, t, i) {
    var n = [];
    return t = w(t, i), y.each(e, function(e, i, r) {t(e, i, r) && n.push(e);}), n;
  }, y.reject = function(e, t, i) {return y.filter(e, y.negate(w(t)), i);}, y.every = y.all = function(e, t, i) {
    t = w(t, i);
    for (var n = !S(e) && y.keys(e), r = (n || e).length, o = 0; o < r; o++) {
      var s = n ? n[o] : o;
      if (!t(e[s], s, e)) return !1;
    }
    return !0;
  }, y.some = y.any = function(e, t, i) {
    t = w(t, i);
    for (var n = !S(e) && y.keys(e), r = (n || e).length, o = 0; o < r; o++) {
      var s = n ? n[o] : o;
      if (t(e[s], s, e)) return !0;
    }
    return !1;
  }, y.contains = y.includes = y.include = function(e, t, i, n) {return S(e) || (e = y.values(e)), ('number' != typeof i || n) && (i = 0), y.indexOf(e, t, i) >= 0;}, y.invoke = function(e, t) {
    var i = d.call(arguments, 2), n = y.isFunction(t);
    return y.map(e, function(e) {
      var r = n ? t : e[t];
      return null == r ? r : r.apply(e, i);
    });
  }, y.pluck = function(e, t) {return y.map(e, y.property(t));}, y.where = function(e, t) {return y.filter(e, y.matcher(t));}, y.findWhere = function(e, t) {return y.find(e, y.matcher(t));}, y.max = function(e, t, i) {
    var n, r, o = -1 / 0, s = -1 / 0;
    if (null == t && null != e) for (var a = 0, l = (e = S(e) ? e : y.values(e)).length; a < l; a++) (n = e[a]) > o && (o = n); else t = w(t, i), y.each(e, function(e, i, n) {((r = t(e, i, n)) > s || r === -1 / 0 && o === -1 / 0) && (o = e, s = r);});
    return o;
  }, y.min = function(e, t, i) {
    var n, r, o = 1 / 0, s = 1 / 0;
    if (null == t && null != e) for (var a = 0, l = (e = S(e) ? e : y.values(e)).length; a < l; a++) (n = e[a]) < o && (o = n); else t = w(t, i), y.each(e, function(e, i, n) {((r = t(e, i, n)) < s || r === 1 / 0 && o === 1 / 0) && (o = e, s = r);});
    return o;
  }, y.shuffle = function(e) {
    for (var t, i = S(e) ? e : y.values(e), n = i.length, r = Array(n), o = 0; o < n; o++) (t = y.random(0, o)) !== o && (r[o] = r[t]), r[t] = i[o];
    return r;
  }, y.sample = function(e, t, i) {return null == t || i ? (S(e) || (e = y.values(e)), e[y.random(e.length - 1)]) : y.shuffle(e).slice(0, Math.max(0, t));}, y.sortBy = function(e, t, i) {
    return t = w(t, i), y.pluck(y.map(e, function(e, i, n) {
      return {
        value: e,
        index: i,
        criteria: t(e, i, n)
      };
    }).sort(function(e, t) {
      var i = e.criteria, n = t.criteria;
      if (i !== n) {
        if (i > n || void 0 === i) return 1;
        if (i < n || void 0 === n) return -1;
      }
      return e.index - t.index;
    }), 'value');
  };
  var E = function(e) {
    return function(t, i, n) {
      var r = {};
      return i = w(i, n), y.each(t, function(n, o) {
        var s = i(n, o, t);
        e(r, n, s);
      }), r;
    };
  };
  y.groupBy = E(function(e, t, i) {y.has(e, i) ? e[i].push(t) : e[i] = [t];}), y.indexBy = E(function(e, t, i) {e[i] = t;}), y.countBy = E(function(e, t, i) {y.has(e, i) ? e[i]++ : e[i] = 1;}), y.toArray = function(e) {return e ? y.isArray(e) ? d.call(e) : S(e) ? y.map(e, y.identity) : y.values(e) : [];}, y.size = function(e) {return null == e ? 0 : S(e) ? e.length : y.keys(e).length;}, y.partition = function(e, t, i) {
    t = w(t, i);
    var n = [], r = [];
    return y.each(e, function(e, i, o) {(t(e, i, o) ? n : r).push(e);}), [n, r];
  }, y.first = y.head = y.take = function(e, t, i) {if (null != e) return null == t || i ? e[0] : y.initial(e, e.length - t);}, y.initial = function(e, t, i) {return d.call(e, 0, Math.max(0, e.length - (null == t || i ? 1 : t)));}, y.last = function(e, t, i) {if (null != e) return null == t || i ? e[e.length - 1] : y.rest(e, Math.max(0, e.length - t));}, y.rest = y.tail = y.drop = function(e, t, i) {return d.call(e, null == t || i ? 1 : t);}, y.compact = function(e) {return y.filter(e, y.identity);};
  var I = function(e, t, i, n) {
    for (var r = [], o = 0, s = n || 0, a = _(e); s < a; s++) {
      var l = e[s];
      if (S(l) && (y.isArray(l) || y.isArguments(l))) {
        t || (l = I(l, t, i));
        var c = 0, d = l.length;
        for (r.length += d; c < d;) r[o++] = l[c++];
      } else i || (r[o++] = l);
    }
    return r;
  };
  y.flatten = function(e, t) {return I(e, t, !1);}, y.without = function(e) {return y.difference(e, d.call(arguments, 1));}, y.uniq = y.unique = function(e, t, i, n) {
    y.isBoolean(t) || (n = i, i = t, t = !1), null != i && (i = w(i, n));
    for (var r = [], o = [], s = 0, a = _(e); s < a; s++) {
      var l = e[s], c = i ? i(l, s, e) : l;
      t ? (s && o === c || r.push(l), o = c) : i ? y.contains(o, c) || (o.push(c), r.push(l)) : y.contains(r, l) || r.push(l);
    }
    return r;
  }, y.union = function() {return y.uniq(I(arguments, !0, !0));}, y.intersection = function(e) {
    for (var t = [], i = arguments.length, n = 0, r = _(e); n < r; n++) {
      var o = e[n];
      if (!y.contains(t, o)) {
        for (var s = 1; s < i && y.contains(arguments[s], o); s++) ;
        s === i && t.push(o);
      }
    }
    return t;
  }, y.difference = function(e) {
    var t = I(arguments, !0, !0, 1);
    return y.filter(e, function(e) {return !y.contains(t, e);});
  }, y.zip = function() {return y.unzip(arguments);}, y.unzip = function(e) {
    for (var t = e && y.max(e, _).length || 0, i = Array(t), n = 0; n < t; n++) i[n] = y.pluck(e, n);
    return i;
  }, y.object = function(e, t) {
    for (var i = {}, n = 0, r = _(e); n < r; n++) t ? i[e[n]] = t[n] : i[e[n][0]] = e[n][1];
    return i;
  }, y.findIndex = t(1), y.findLastIndex = t(-1), y.sortedIndex = function(e, t, i, n) {
    for (var r = (i = w(i, n, 1))(t), o = 0, s = _(e); o < s;) {
      var a = Math.floor((o + s) / 2);
      i(e[a]) < r ? o = a + 1 : s = a;
    }
    return o;
  }, y.indexOf = i(1, y.findIndex, y.sortedIndex), y.lastIndexOf = i(-1, y.findLastIndex), y.range = function(e, t, i) {
    null == t && (t = e || 0, e = 0), i = i || 1;
    for (var n = Math.max(Math.ceil((t - e) / i), 0), r = Array(n), o = 0; o < n; o++, e += i) r[o] = e;
    return r;
  };
  var A = function(e, t, i, n, r) {
    if (!(n instanceof t)) return e.apply(i, r);
    var o = C(e.prototype), s = e.apply(o, r);
    return y.isObject(s) ? s : o;
  };
  y.bind = function(e, t) {
    if (m && e.bind === m) return m.apply(e, d.call(arguments, 1));
    if (!y.isFunction(e)) throw new TypeError('Bind must be called on a function');
    var i = d.call(arguments, 2), n = function() {return A(e, n, t, this, i.concat(d.call(arguments)));};
    return n;
  }, y.partial = function(e) {
    var t = d.call(arguments, 1), i = function() {
      for (var n = 0, r = t.length, o = Array(r), s = 0; s < r; s++) o[s] = t[s] === y ? arguments[n++] : t[s];
      for (; n < arguments.length;) o.push(arguments[n++]);
      return A(e, i, this, this, o);
    };
    return i;
  }, y.bindAll = function(e) {
    var t, i, n = arguments.length;
    if (n <= 1) throw new Error('bindAll must be passed function names');
    for (t = 1; t < n; t++) e[i = arguments[t]] = y.bind(e[i], e);
    return e;
  }, y.memoize = function(e, t) {
    var i = function(n) {
      var r = i.cache, o = '' + (t ? t.apply(this, arguments) : n);
      return y.has(r, o) || (r[o] = e.apply(this, arguments)), r[o];
    };
    return i.cache = {}, i;
  }, y.delay = function(e, t) {
    var i = d.call(arguments, 2);
    return setTimeout(function() {return e.apply(null, i);}, t);
  }, y.defer = y.partial(y.delay, y, 1), y.throttle = function(e, t, i) {
    var n, r, o, s = null, a = 0;
    i || (i = {});
    var l = function() {a = !1 === i.leading ? 0 : y.now(), s = null, o = e.apply(n, r), s || (n = r = null);};
    return function() {
      var c = y.now();
      a || !1 !== i.leading || (a = c);
      var d = t - (c - a);
      return n = this, r = arguments, d <= 0 || d > t ? (s && (clearTimeout(s), s = null), a = c, o = e.apply(n, r), s || (n = r = null)) : s || !1 === i.trailing || (s = setTimeout(l, d)), o;
    };
  }, y.debounce = function(e, t, i) {
    var n, r, o, s, a, l = function() {
      var c = y.now() - s;
      c < t && c >= 0 ? n = setTimeout(l, t - c) : (n = null, i || (a = e.apply(o, r), n || (o = r = null)));
    };
    return function() {
      o = this, r = arguments, s = y.now();
      var c = i && !n;
      return n || (n = setTimeout(l, t)), c && (a = e.apply(o, r), o = r = null), a;
    };
  }, y.wrap = function(e, t) {return y.partial(t, e);}, y.negate = function(e) {return function() {return !e.apply(this, arguments);};}, y.compose = function() {
    var e = arguments, t = e.length - 1;
    return function() {
      for (var i = t, n = e[t].apply(this, arguments); i--;) n = e[i].call(this, n);
      return n;
    };
  }, y.after = function(e, t) {return function() {if (--e < 1) return t.apply(this, arguments);};}, y.before = function(e, t) {
    var i;
    return function() {return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = null), i;};
  }, y.once = y.partial(y.before, 2);
  var D = !{ toString: null }.propertyIsEnumerable('toString'), $ = ['valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
  y.keys = function(e) {
    if (!y.isObject(e)) return [];
    if (f) return f(e);
    var t = [];
    for (var i in e) y.has(e, i) && t.push(i);
    return D && n(e, t), t;
  }, y.allKeys = function(e) {
    if (!y.isObject(e)) return [];
    var t = [];
    for (var i in e) t.push(i);
    return D && n(e, t), t;
  }, y.values = function(e) {
    for (var t = y.keys(e), i = t.length, n = Array(i), r = 0; r < i; r++) n[r] = e[t[r]];
    return n;
  }, y.mapObject = function(e, t, i) {
    t = w(t, i);
    for (var n, r = y.keys(e), o = r.length, s = {}, a = 0; a < o; a++) s[n = r[a]] = t(e[n], n, e);
    return s;
  }, y.pairs = function(e) {
    for (var t = y.keys(e), i = t.length, n = Array(i), r = 0; r < i; r++) n[r] = [t[r], e[t[r]]];
    return n;
  }, y.invert = function(e) {
    for (var t = {}, i = y.keys(e), n = 0, r = i.length; n < r; n++) t[e[i[n]]] = i[n];
    return t;
  }, y.functions = y.methods = function(e) {
    var t = [];
    for (var i in e) y.isFunction(e[i]) && t.push(i);
    return t.sort();
  }, y.extend = x(y.allKeys), y.extendOwn = y.assign = x(y.keys), y.findKey = function(e, t, i) {
    t = w(t, i);
    for (var n, r = y.keys(e), o = 0, s = r.length; o < s; o++) if (n = r[o], t(e[n], n, e)) return n;
  }, y.pick = function(e, t, i) {
    var n, r, o = {}, s = e;
    if (null == s) return o;
    y.isFunction(t) ? (r = y.allKeys(s), n = b(t, i)) : (r = I(arguments, !1, !1, 1), n = function(e, t, i) {return t in i;}, s = Object(s));
    for (var a = 0, l = r.length; a < l; a++) {
      var c = r[a], d = s[c];
      n(d, c, s) && (o[c] = d);
    }
    return o;
  }, y.omit = function(e, t, i) {
    if (y.isFunction(t)) t = y.negate(t); else {
      var n = y.map(I(arguments, !1, !1, 1), String);
      t = function(e, t) {return !y.contains(n, t);};
    }
    return y.pick(e, t, i);
  }, y.defaults = x(y.allKeys, !0), y.create = function(e, t) {
    var i = C(e);
    return t && y.extendOwn(i, t), i;
  }, y.clone = function(e) {return y.isObject(e) ? y.isArray(e) ? e.slice() : y.extend({}, e) : e;}, y.tap = function(e, t) {return t(e), e;}, y.isMatch = function(e, t) {
    var i = y.keys(t), n = i.length;
    if (null == e) return !n;
    for (var r = Object(e), o = 0; o < n; o++) {
      var s = i[o];
      if (t[s] !== r[s] || !(s in r)) return !1;
    }
    return !0;
  };
  var P = function(e, t, i, n) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return e === t;
    e instanceof y && (e = e._wrapped), t instanceof y && (t = t._wrapped);
    var r = u.call(e);
    if (r !== u.call(t)) return !1;
    switch (r) {
      case'[object RegExp]':
      case'[object String]':
        return '' + e == '' + t;
      case'[object Number]':
        return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
      case'[object Date]':
      case'[object Boolean]':
        return +e == +t;
    }
    var o = '[object Array]' === r;
    if (!o) {
      if ('object' != typeof e || 'object' != typeof t) return !1;
      var s = e.constructor, a = t.constructor;
      if (s !== a && !(y.isFunction(s) && s instanceof s && y.isFunction(a) && a instanceof a) && 'constructor' in e && 'constructor' in t) return !1;
    }
    i = i || [], n = n || [];
    for (var l = i.length; l--;) if (i[l] === e) return n[l] === t;
    if (i.push(e), n.push(t), o) {
      if ((l = e.length) !== t.length) return !1;
      for (; l--;) if (!P(e[l], t[l], i, n)) return !1;
    } else {
      var c, d = y.keys(e);
      if (l = d.length, y.keys(t).length !== l) return !1;
      for (; l--;) if (c = d[l], !y.has(t, c) || !P(e[c], t[c], i, n)) return !1;
    }
    return i.pop(), n.pop(), !0;
  };
  y.isEqual = function(e, t) {return P(e, t);}, y.isEmpty = function(e) {return null == e || (S(e) && (y.isArray(e) || y.isString(e) || y.isArguments(e)) ? 0 === e.length : 0 === y.keys(e).length);}, y.isElement = function(e) {return !(!e || 1 !== e.nodeType);}, y.isArray = h || function(e) {return '[object Array]' === u.call(e);}, y.isObject = function(e) {
    var t = typeof e;
    return 'function' === t || 'object' === t && !!e;
  }, y.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(e) {y['is' + e] = function(t) {return u.call(t) === '[object ' + e + ']';};}), y.isArguments(arguments) || (y.isArguments = function(e) {return y.has(e, 'callee');}), 'function' != typeof /./ && 'object' != typeof Int8Array && (y.isFunction = function(e) {return 'function' == typeof e || !1;}), y.isFinite = function(e) {return isFinite(e) && !isNaN(parseFloat(e));}, y.isNaN = function(e) {return y.isNumber(e) && e !== +e;}, y.isBoolean = function(e) {return !0 === e || !1 === e || '[object Boolean]' === u.call(e);}, y.isNull = function(e) {return null === e;}, y.isUndefined = function(e) {return void 0 === e;}, y.has = function(e, t) {return null != e && p.call(e, t);}, y.noConflict = function() {return r._ = o, this;}, y.identity = function(e) {return e;}, y.constant = function(e) {return function() {return e;};}, y.noop = function() {}, y.property = T, y.propertyOf = function(e) {return null == e ? function() {} : function(t) {return e[t];};}, y.matcher = y.matches = function(e) {return e = y.extendOwn({}, e), function(t) {return y.isMatch(t, e);};}, y.times = function(e, t, i) {
    var n = Array(Math.max(0, e));
    t = b(t, i, 1);
    for (var r = 0; r < e; r++) n[r] = t(r);
    return n;
  }, y.random = function(e, t) {return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1));}, y.now = Date.now || function() {return (new Date).getTime();};
  var M = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&#x27;', '`': '&#x60;' }, L = y.invert(M), O = function(e) {
    var t = function(t) {return e[t];}, i = '(?:' + y.keys(e).join('|') + ')', n = RegExp(i), r = RegExp(i, 'g');
    return function(e) {return e = null == e ? '' : '' + e, n.test(e) ? e.replace(r, t) : e;};
  };
  y.escape = O(M), y.unescape = O(L), y.result = function(e, t, i) {
    var n = null == e ? void 0 : e[t];
    return void 0 === n && (n = i), y.isFunction(n) ? n.call(e) : n;
  };
  var N = 0;
  y.uniqueId = function(e) {
    var t = ++N + '';
    return e ? e + t : t;
  }, y.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g };
  var j = /(.)^/, F = { '\'': '\'', '\\': '\\', '\r': 'r', '\n': 'n', '\u2028': 'u2028', '\u2029': 'u2029' }, H = /\\|'|\r|\n|\u2028|\u2029/g, R = function(e) {return '\\' + F[e];};
  y.template = function(e, t, i) {
    !t && i && (t = i), t = y.defaults({}, t, y.templateSettings);
    var n = RegExp([(t.escape || j).source, (t.interpolate || j).source, (t.evaluate || j).source].join('|') + '|$', 'g'), r = 0, o = '__p+=\'';
    e.replace(n, function(t, i, n, s, a) {return o += e.slice(r, a).replace(H, R), r = a + t.length, i ? o += '\'+\n((__t=(' + i + '))==null?\'\':_.escape(__t))+\n\'' : n ? o += '\'+\n((__t=(' + n + '))==null?\'\':__t)+\n\'' : s && (o += '\';\n' + s + '\n__p+=\''), t;}), o += '\';\n', t.variable || (o = 'with(obj||{}){\n' + o + '}\n'), o = 'var __t,__p=\'\',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,\'\');};\n' + o + 'return __p;\n';
    try {var s = new Function(t.variable || 'obj', '_', o);} catch (e) {throw e.source = o, e;}
    var a = function(e) {return s.call(this, e, y);}, l = t.variable || 'obj';
    return a.source = 'function(' + l + '){\n' + o + '}', a;
  }, y.chain = function(e) {
    var t = y(e);
    return t._chain = !0, t;
  };
  var z = function(e, t) {return e._chain ? y(t).chain() : t;};
  y.mixin = function(e) {
    y.each(y.functions(e), function(t) {
      var i = y[t] = e[t];
      y.prototype[t] = function() {
        var e = [this._wrapped];
        return c.apply(e, arguments), z(this, i.apply(y, e));
      };
    });
  }, y.mixin(y), y.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(e) {
    var t = s[e];
    y.prototype[e] = function() {
      var i = this._wrapped;
      return t.apply(i, arguments), 'shift' !== e && 'splice' !== e || 0 !== i.length || delete i[0], z(this, i);
    };
  }), y.each(['concat', 'join', 'slice'], function(e) {
    var t = s[e];
    y.prototype[e] = function() {return z(this, t.apply(this._wrapped, arguments));};
  }), y.prototype.value = function() {return this._wrapped;}, y.prototype.valueOf = y.prototype.toJSON = y.prototype.value, y.prototype.toString = function() {return '' + this._wrapped;}, 'function' == typeof define && define.amd && define('underscore', [], function() {return y;});
}.call(this), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
  def: 'easeOutQuad',
  swing: function(e, t, i, n, r) {return jQuery.easing[jQuery.easing.def](e, t, i, n, r);},
  easeInQuad: function(e, t, i, n, r) {return n * (t /= r) * t + i;},
  easeOutQuad: function(e, t, i, n, r) {return -n * (t /= r) * (t - 2) + i;},
  easeInOutQuad: function(e, t, i, n, r) {return (t /= r / 2) < 1 ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i;},
  easeInCubic: function(e, t, i, n, r) {return n * (t /= r) * t * t + i;},
  easeOutCubic: function(e, t, i, n, r) {return n * ((t = t / r - 1) * t * t + 1) + i;},
  easeInOutCubic: function(e, t, i, n, r) {return (t /= r / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i;},
  easeInQuart: function(e, t, i, n, r) {return n * (t /= r) * t * t * t + i;},
  easeOutQuart: function(e, t, i, n, r) {return -n * ((t = t / r - 1) * t * t * t - 1) + i;},
  easeInOutQuart: function(e, t, i, n, r) {return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + i : -n / 2 * ((t -= 2) * t * t * t - 2) + i;},
  easeInQuint: function(e, t, i, n, r) {return n * (t /= r) * t * t * t * t + i;},
  easeOutQuint: function(e, t, i, n, r) {return n * ((t = t / r - 1) * t * t * t * t + 1) + i;},
  easeInOutQuint: function(e, t, i, n, r) {return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + i : n / 2 * ((t -= 2) * t * t * t * t + 2) + i;},
  easeInSine: function(e, t, i, n, r) {return -n * Math.cos(t / r * (Math.PI / 2)) + n + i;},
  easeOutSine: function(e, t, i, n, r) {return n * Math.sin(t / r * (Math.PI / 2)) + i;},
  easeInOutSine: function(e, t, i, n, r) {return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + i;},
  easeInExpo: function(e, t, i, n, r) {return 0 == t ? i : n * Math.pow(2, 10 * (t / r - 1)) + i;},
  easeOutExpo: function(e, t, i, n, r) {return t == r ? i + n : n * (1 - Math.pow(2, -10 * t / r)) + i;},
  easeInOutExpo: function(e, t, i, n, r) {return 0 == t ? i : t == r ? i + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + i : n / 2 * (2 - Math.pow(2, -10 * --t)) + i;},
  easeInCirc: function(e, t, i, n, r) {return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + i;},
  easeOutCirc: function(e, t, i, n, r) {return n * Math.sqrt(1 - (t = t / r - 1) * t) + i;},
  easeInOutCirc: function(e, t, i, n, r) {return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + i : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i;},
  easeInElastic: function(e, t, i, n, r) {
    var o = 1.70158, s = 0, a = n;
    if (0 == t) return i;
    if (1 == (t /= r)) return i + n;
    if (s || (s = .3 * r), a < Math.abs(n)) {
      a = n;
      o = s / 4;
    } else o = s / (2 * Math.PI) * Math.asin(n / a);
    return -a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / s) + i;
  },
  easeOutElastic: function(e, t, i, n, r) {
    var o = 1.70158, s = 0, a = n;
    if (0 == t) return i;
    if (1 == (t /= r)) return i + n;
    if (s || (s = .3 * r), a < Math.abs(n)) {
      a = n;
      o = s / 4;
    } else o = s / (2 * Math.PI) * Math.asin(n / a);
    return a * Math.pow(2, -10 * t) * Math.sin((t * r - o) * (2 * Math.PI) / s) + n + i;
  },
  easeInOutElastic: function(e, t, i, n, r) {
    var o = 1.70158, s = 0, a = n;
    if (0 == t) return i;
    if (2 == (t /= r / 2)) return i + n;
    if (s || (s = r * (.3 * 1.5)), a < Math.abs(n)) {
      a = n;
      o = s / 4;
    } else o = s / (2 * Math.PI) * Math.asin(n / a);
    return t < 1 ? a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / s) * -.5 + i : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / s) * .5 + n + i;
  },
  easeInBack: function(e, t, i, n, r, o) {return void 0 == o && (o = 1.70158), n * (t /= r) * t * ((o + 1) * t - o) + i;},
  easeOutBack: function(e, t, i, n, r, o) {return void 0 == o && (o = 1.70158), n * ((t = t / r - 1) * t * ((o + 1) * t + o) + 1) + i;},
  easeInOutBack: function(e, t, i, n, r, o) {return void 0 == o && (o = 1.70158), (t /= r / 2) < 1 ? n / 2 * (t * t * ((1 + (o *= 1.525)) * t - o)) + i : n / 2 * ((t -= 2) * t * ((1 + (o *= 1.525)) * t + o) + 2) + i;},
  easeInBounce: function(e, t, i, n, r) {return n - jQuery.easing.easeOutBounce(e, r - t, 0, n, r) + i;},
  easeOutBounce: function(e, t, i, n, r) {return (t /= r) < 1 / 2.75 ? n * (7.5625 * t * t) + i : t < 2 / 2.75 ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : t < 2.5 / 2.75 ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i;},
  easeInOutBounce: function(e, t, i, n, r) {return t < r / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, n, r) + i : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, n, r) + .5 * n + i;}
}), function(e) {
  var t = {
    setup: function() {
      var t = e.$window, i = e.$html,
          n = function() {t.scrollTop() >= 31 ? i.hasClass('freeze') || i.addClass('freeze') : i.hasClass('freeze') && !i.hasClass('fixifyHeader') && i.removeClass('freeze');};
      i.find('.Header.sticky').length > 0 && (n(), t.on('scroll.header', _.throttle(function() {n();}, 30, { leading: !0, trailing: !0 }))), this.addListeners();
    }, addListeners: function() {
      var t = e.$header;
      t.on('click', '.dropdownTrigger', function(i) {
        var n = $(this), r = n.attr('data-type') + 'Dropdown';
        return t.find('.navItem .btn').removeClass('active'), n.addClass('active'), e.page.setDropdown(t.find('.dropdown.' + r), n), !1;
      }), t.on('click', '.loginTrigger', function(t) {
        var i = $(this);
        return e.component.load({ component: 'login', modal: 'loginModal', trigger: i }), !1;
      }), t.on('click', '.signupTrigger', function(t) {
        var i = $(this);
        return e.component.load({ component: 'signup', modal: 'signupModal', trigger: i }), !1;
      }), t.on('click', '.logoutTrigger', function() {return e.user.logout('user_logout'), e.analytics.trackGAEvent('user_logout', 'clicked'), !1;}), t.on('click', '.createCollectionTrigger', function() {
        return e.component.load({
          component: 'create-collection',
          modal: 'createCollectionModal'
        }), !1;
      }), t.on('click', '.saveFromWebsiteTrigger', function() {return e.component.load({ component: 'save-from-website', modal: 'saveFromWebsiteModal' }), !1;});
    }
  };
  e.header = t;
  var i = {
    setup: function() {
      var t = e.$window, i = e.$html, n = function() {t.scrollTop() >= 88 ? i.hasClass('icy') || i.addClass('icy') : i.hasClass('icy') && i.removeClass('icy');};
      i.find('.CollectionHeader.sticky').length > 0 && (n(), t.on('scroll.collectionHeader', _.throttle(function() {n();}, 35)));
    }
  };
  e.collectionHeader = i;
}(App),
    function(e) {

      var t = {
        isYScroll: !1,
        init: function() {
          var t = e.config.lastAccessUI;
          this.accessUI = { component: t, modal: t + 'Modal' }, e.header.setup(), this.buildDropdowns();
        },
        createCookie: function(e, t, i) {
          var n = '';
          if (i) {
            var r = new Date;
            r.setTime(r.getTime() + 1e3 * i), n = '; expires=' + r.toGMTString();
          } else n = '';
          document.cookie = e + '=' + t + n + '; path=/';
        },
        getCookie: function(e) {
          for (var t = e + '=', i = document.cookie.split(';'), n = 0; n < i.length; n++) {
            for (var r = i[n]; " " == r.charAt(0);) r = r.substring(1, r.length);
            if (0 == r.indexOf(t)) return r.substring(t.length, r.length);
          }
          return !1;
        },
        removeCookie: function(e) {this.createCookie(e, '', -1);},
        setUI: function(e, t) {this.createCookie(e, t, 2592e3);},
        setPageElements: function() {e.$window = $(window), e.$document = $(document), e.$html = $('html'), e.$body = $('body'), e.$modal = e.$body.find('.ComponentManager'), e.$app = e.$html.find('.App'), e.$header = e.$app.find('.Header');},
        buildDropdowns: function() {
          var t = e.$window;
          e.$document.on('keyup.header', function(e) {27 === e.keyCode && t.trigger('onDropdownClosed');}), t.on('onDropdownClosed', function() {$('.dropdown, .menuButton').removeClass('active'), $('html').removeClass('isActiveMenu'), $('.navItem .btn').removeClass('active');}), e.$app.on('click', '.moduleOverlay.canClose', function(e) {return t.trigger('onDropdownClosed'), !1;}), e.$app.find('.dropdown').on('click', '.dropNavItem', function(e) {t.trigger('onDropdownClosed');});
        },
        setDropdown: function(e, t) {$('.dropdown').removeClass('active'), $('html').removeClass('isActiveMenu'), e.addClass('active');},
        scrollMoreHelper: function() {
          // var t = e.browser.getScrollPosition(), i = e.$body, n = i.find('.scrollMore');
          // this.getCookie('dspn_ui_scrollmore') || (0 == t ? (n.length ? n.addClass('active') : i.append('<div class="scrollMore active">Scroll to See More</div>'), e.$window.on('scroll.page_ui', _.throttle(function() {e.browser.showScrollMore(n, e.browser.getScrollPosition());}, 380)), i.on('click.page_ui', '.scrollMore', function(t) {return $(this).remove(), e.page.createCookie('dspn_ui_scrollmore', 'hide', 31536e3), !1;})) : (e.$window.off('scroll.page_ui'), n.remove(), this.removeCookie('dspn_ui_scrollmore')));
        }
      };
      e.page = t;
    }(App),
    function(e) {
      var t = {
        onReady: function() {
          var t = e.$window;
          e.browser.cacheDimensions(), t.on('onBrowserDimensionsChanged', function() {e.browser.cacheDimensions(), e.columnManager.updateNumColumns();}), t.on('resize.page', _.debounce(function() {t.trigger('onBrowserDimensionsChanged');}, 50));
        },
        cacheDimensions: function() {
          var t = e.browser;
          t.height = this.getWindowHeight(), t.width = t.pageWidth = this.getWindowWidth(), t.pageHeight = this.getPageHeight();
        },
        getScrollPosition: function() {return e.isIE ? document.documentElement.scrollTop : window.pageYOffset;},
        scrollToTop: function(e) {e.animate({ scrollTop: 0 }, 300, 'easeOutQuart');},
        showScrollTop: function(t, i, n) {
          var r = i.find('.scrollTopTrigger');
          r.length || (i.append('<div class="scrollTopTrigger"></div>'), i.on('click.page', '.scrollTopTrigger', function() {e.browser.scrollToTop(t);})), n > 400 ? r.addClass('active') : r.removeClass('active');
        },
        showScrollMore: function(t, i) {i > 70 && (e.$body.find('.scrollMore').removeClass('active'), e.$window.off('scroll.page_ui'), e.page.createCookie('dspn_ui_scrollmore', 'hide', 365));},
        setPageLock: function() {$.scrollLock(!0);},
        releasePageLock: function() {$.scrollLock(!1), e.$html.removeClass('fixifyHeader');}
      };
      $.scrollLock = function() {
        'use strict';

        function e() {
          var e = n.attr('style'), t = [], i = {};
          e && (t = e.split(/;\s/), $.each(t, function(e) {
            if (e) {
              var t = e.split(/\s:\s/);
              t.length < 2 || (i[t[0]] = t[1]);
            }
          }), $.extend(s, i));
        }

        function t() {
          var t = {};
          r || (o = { scrollTop: $(window).scrollTop() }, e(), $.extend(t, a, { top: -o.scrollTop + 'px' }), n.css(t), $(window).scrollTop(0), r = !0);
        }

        function i() {r && (n.attr('style', $('<x>').css(s).attr('style') || ''), $(window).scrollTop(o.scrollTop), r = !1);}

        var n = $('html'), r = !1, o = { scrollTop: $(window).scrollTop() }, s = {}, a = { position: 'fixed' };
        return e(), function(e) {arguments.length ? e ? t() : i() : r ? i() : t();};
      }();
      e.viewport = function() {this.top = e.$window.scrollTop(), this.height = e.$window.height(), this.bottom = this.top + this.height, this.width = e.$window.width();}, $.extend(e.browser, t);
    }(App),
    function(e) {
      var t = e.config.gaAccountNumber, i = { VISITOR: 1, SESSION: 2, PAGE: 3 }, n = function() {
        var e = document.createElement('script');
        window._gaq = window._gaq || [], e.type = 'text/javascript', e.async = !0, e.src = '', (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(e);
      }, r = function(i) {
        var n = e.config.BASE_URL.replace('https://', '');
        window._gaq.push(['_setAccount', t]), !0 === e.config.DEBUG && (n = 'none'), window._gaq.push(['_setDomainName', n]), window._gaq.push(i);
      }, o = function(e) {return; e = e ? 'logged in' : 'logged out', window._gaq.push(['_setCustomVar', 1, 'is_logged_in', e, i.SESSION]);}, s = function() {
        var t = window.innerWidth || document.body.clientWidth, i = window.innerHeight || document.body.clientHeight;
        t = 100 * Math.round(t / 100), i = 100 * Math.round(i / 100), e.analytics.trackGAEvent('Viewport', 'Size', t + 'x' + i), e.analytics.trackGAEvent('Viewport', 'Width', t + 'x' + i, t), e.analytics.trackGAEvent('Viewport', 'Height', t + 'x' + i, i);
      }, a = function() {
        var t = document.documentElement;
        if (t) {
          var i = t.getAttribute('data-an');
          e.analytics.group = l(i);
        }
      }, l = function(e) {return e = e.split('|'), { SUBGROUP: e[0], PAGE: e[1], INDEX: e[2] };};
      e.analytics = {
        group: !1, setup: function() {n(), a(), o(e.config.isLoggedIn), s();}, getQueryStringParams: function(e) {
          '?' === (e = e || window.location.search)[0] && (e = e.substring(1));
          for (var t, i = /\+/g, n = /([^&=]+)=?([^&]*)/g, r = function(e) {return decodeURIComponent(e.replace(i, ' '));}, o = {}; t = n.exec(e);) o[r(t[1])] = r(t[2]);
          return o;
        }, getTrackGAPageviewUrl: function(t, i) {
          var n = e.analytics.getQueryStringParams(i).q;
          return n && (t += '?' + $.param({ q: n })), t;
        }, trackGAPageview: function(t, n) {
          var o = window.location.pathname, s = e.analytics.group.SUBGROUP, a = e.analytics.group.PAGE, c = e.analytics.group.INDEX;
          t && (s = (t = l(t)).SUBGROUP, a = t.PAGE, c = t.INDEX), n && (o += n), r(['_setCustomVar', 2, 'page_name', a, i.PAGE]), r(['_setPageGroup', c, s]), r(['_trackPageview', e.analytics.getTrackGAPageviewUrl(o, window.location.search)]);
        }, trackGAEvent: function(e, t, i, n) { return; r(['_trackEvent', e, t, i, n]);}, setReferringModal: function() {return Modal.primaryModal ? Modal.primaryModal.toLowerCase() + '_modal' : 'page';}
      };
    }(App),
    function(e) {
      jQuery.expr[':'].Contains = function(e, t, i) {return (e.textContent || e.innerText || '').toUpperCase().indexOf(i[3].toUpperCase()) >= 0;}, e.search = function() {
        var t, i, n, o, s, a = e.$header, l = e.$window, c = a.find('.searchForm'), d = a.find('.field'), u = 0, p = [], h = [], f = !1, m = a.find('.searchSuggestions'), v = 'saves', y = !1,
            w = !1,
            x = [], C = [], T = function(t, i) {
              var n = i && i.specialCode ? i.specialCode : t.which, r = 1 === n, o = 91 === n || t.ctrlKey || t.metaKey, s = n >= 65 && n <= 90 || n >= 48 && n <= 57 || r;
              (r || 13 === n || !e.component.activeComponent && !e.$app.find('input, textarea').not(d).is(':visible')) && (y && !w || o || s && (d.focus(), y = !0, j(r), w ? a.addClass('fieldHasFocus') : a.removeClass('fieldHasFocus')), y && (13 === n ? (t.preventDefault(), k(), d.trigger('onSearchSubmit')) : 27 === n ? w ? Z() : d.trigger('blur') : 8 === n ? z(n) : 37 === n || (38 === n ? E() : 39 === n ? k() : 40 === n ? S() : 9 === n || 51 === n || w || z(n))));
            }, k = function() {m.find('.selected').length && d.val(m.find('.selected a').text());}, S = function() {
              m.find('.suggestedTerm');
              var e, t = m.find('.suggestedTerm').first(), i = m.find('.selected');
              e = i.next('.suggestedTerm').length ? i.next('.suggestedTerm') : t, i.removeClass('selected'), e.addClass('selected');
            }, E = function() {
              m.find('.suggestedTerm'), m.find('.suggestedTerm').first();
              var e, t = m.find('.selected');
              e = t.prev('.suggestedTerm').length ? t.prev('.suggestedTerm') : e, t.removeClass('selected'), e.addClass('selected');
            }, I = function(e, t) {t && e.push(t), u = (p = e).length;}, A = function() {
              var e = c.width(), t = 0;
              a.find('.searchTokenWrapper').each(function() {t += Math.ceil($(this)[0].getBoundingClientRect().width || $(this).outerWidth(!0));}), u > 0 && d.parents('.background').addClass('hasTokens'), d.css('width', e - t + 'px');
            }, D = function() {d.prop('placeholder', '');}, P = function() {0 === u && d.prop('placeholder', d.attr('data-text'));}, M = function(e, t, i, n) {
              var r = 'word';
              return '' !== $.trim(e) && ('#' === e[0] && /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e) && (r = 'color', e = N(e)), e = e.toLowerCase(), e = {
                term: e,
                type: t,
                filter: r,
                index: i,
                id: n
              });
            }, L = function(e) {
              var t = he(e.replace('#', ''));
              return (Math.round(299 * t[0]) + Math.round(587 * t[1]) + Math.round(114 * t[2])) / 1e3 >= 128 ? 'dark' : '';
            }, O = function(e, t, i, n, r) {
              var o = 'searchTokenItem searchTokenWrapper ' + t;
              return 'color' === t && L(e), r = ' data-id="' + r + '"', '<li class="' + o + '"' + r + ' data-position="' + n + '" data-type="' + i + '"><div class="searchToken"' + ('color' === t ? ' style="background-color:' + e + '"' : '') + '><span class="tokenName">' + e + '</span><span class="removeToken"><em></em></span></div></li>';
            }, N = function(e) {return 3 === (e = e.replace('#', '')).length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), '#' + e;}, j = function(e) {
              if (u > 0) {
                for (var i = d.val(), n = [], r = 0; r < u; r += 1) {
                  var o = p[r];
                  if (o) {
                    var s;
                    s = w && o.term_updated ? o.term_updated : o.term, n.push(s);
                  }
                }
                a.find('.searchTokenWrapper').remove(), '' === i && (i = n.join(' ') + (e ? '' : ' '), d.val(i)), t = i, A(), D();
              }
            }, F = function() {a.find('.searchSuggestions').removeClass('active');}, H = function(e) {
              var t = a.find('.searchSuggestions');
              t.find('.suggestionTray').html(''), t.removeClass('showSuggestions');
            }, R = function(e) {
              if (null === e || '' === e) return !1;
              var t = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&#039;' };
              return (e = e.toString()).replace(/[&<>"']/g, function(e) {return t[e];});
            }, z = function(t) {
              var i = m.find('.suggestionTray'), n = 'search_autocomplete';
              m.addClass('active'), 1 !== t && setTimeout(function() {
                var r = d.val();
                '' !== r ? r.length > 0 && (clearTimeout(f), m.addClass('showSuggestions'), f = setTimeout(function() {
                  $.ajax({
                    cache: !0,
                    url: '/resource/',
                    type: 'POST',
                    data: { search_suggestions: 1, query: encodeURIComponent(r), request_token: e.config.requestToken },
                    dataType: 'json',
                    error: function(t) { e.analytics.trackGAEvent(n, 'error', t.responseText);},
                    success: function(t) {
                      if (1 === t.status) {
                        for (var o = t.suggestions, s = o.length, a = '', l = r, c = r.length, d = 0; d < s; d += 1) {
                          var u = o[d], p = '<b>' + u.substr(0, c) + '</b>' + u.substr(c);
                          if (u.indexOf(l) !== 0) continue;
                          a += '<li class="suggestedTerm"><a><span class="suggestedTermName" data-query="' + R(JSON.stringify({
                            entered_query: l,
                            selected_query: u,
                            filter_type: 'autocomplete'
                          })) + '">' + p + '</span></a></li>';
                        }
                        i.html(a), totalSuggestions = i.find('li').length || 0, i.css('height', 30 * totalSuggestions + 'px'), e.analytics.trackGAEvent(n, 'success');
                      } else e.analytics.trackGAEvent(n, 'failed', t.error);
                    }
                  });
                }, 200)) : H(t);
              }, 1);
            }, q = function() {
              var e = 'saves', t = window.location.href;
              return -1 !== t.indexOf('/search/saves/') ? e = 'saves' : -1 !== t.indexOf('/search/collections/') ? e = 'collections' : -1 !== t.indexOf('/search/people/') && (e = 'people'), e;
            }, W = function() {
              var e = p;
              if (w) {
                var t = [], i = X($.trim(d.val()));
                for (var n in e) t.push(e[n].term);
                if ('' !== i.join('') && !_.isEqual(t, i)) {
                  var r = [];
                  e = [];
                  for (var o = 0; o < i.length; o += 1) {
                    var s = i[o];
                    if (s && '' !== s) {
                      var a = _.filter(p, function(e) {return e.term === s;});
                      if (a.length > 0) l = a[0]; else {
                        var l = M(s, 'typed', o, B());
                        l.submitted = 0;
                      }
                      s = l.term, 'color' === l.filter && -1 !== r.indexOf(s) || (e.push(l), r.push(s));
                    }
                  }
                }
              } else e = _.filter(p, function(e) {return e && 1 === e.submitted;});
              U(e), w && (J(), te(h));
            }, B = function() {
              for (var e = function() {return Math.floor(900 * Math.random() + 100);}, t = e(); C.indexOf(t) > -1;) t = e();
              return C.push(t), t;
            }, G = function(e) {
              var t = '';
              if (e) {
                for (var i = e.term_meta, n = i.length, r = 0; r < n; r += 1) {
                  var o = i[r];
                  t += O(o.term, o.filter, o.type, r, o.id);
                }
                I(i);
              }
              d.val(''), '' !== t && (c.find('.searchTokenWrapper').remove(), c.find('.searchTray').prepend(t), e.q), A();
            }, U = function(e) {
              var t = '', i = e.length;
              if (i > 0) for (var n = 0; n < i; n += 1) {
                var r = e[n];
                r && (t += O(r.term, r.filter, r.type, r.index, r.id));
              }
              d.val(''), '' !== t && (c.find('.searchTokenWrapper').remove(), c.find('.searchTray').prepend(t)), I(e), A();
            }, X = function(e) {
              var t,
                  i = ['and', 'that', 'but', 'or', 'as', 'if', 'when', 'than', 'because', 'while', 'where', 'after', 'so', 'though', 'since', 'until', 'whether', 'before', 'although', 'nor', 'like', 'once', 'unless', 'now', 'except', 'the', 'a', 'an', 'san', 'for', 'in', 'with'],
                  n = [], r = [];
              (t = (e = $.trim(decodeURIComponent(e))).split(/\s+/)).find(function(e) {return $.inArray(e.toLowerCase(), i) > -1;}) && (t = [e]);
              for (var o = 0; o < t.length; o += 1) {
                var s = t[o];
                '#' === s[0] && /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(s) ? r.push(s) : n.push(s);
              }
              return t = n.concat(r);
            }, Y = function(e) {
              var t = '';
              return 'typed' === e.type ? t += e.term + '|' + e.type + '|' + e.filter + '|' + e.index : 'tag' === e.type ? t += e.term + '|' + e.type + '|' + e.filter + '|' + e.index : 'autocomplete' === e.type ? t += e.term + '|' + e.type + '|' + e.filter + '|' + e.index : 'guide' === e.type ? t += e.term + '|' + e.type + '|' + e.filter + '|' + e.index : 'spectrum' === e.type && (t += e.term + '|' + e.type + '|' + e.filter + '|' + e.index), t;
            }, V = function(e, t) {
              var i = [];
              for (var n in e) if (e.hasOwnProperty(n)) {
                var r = 'term_meta' === t ? t + '[]' : t, o = e[n];
                i.push('object' == typeof o ? V(o, r) : encodeURIComponent(r) + '=' + encodeURIComponent(o));
              }
              return i.join('&');
            }, Q = function(e) {
              if ('' === (e = decodeURI(e))) return !1;
              for (var t = [], i = e.replace('?', '').split('&'), n = function(e, t) {
                if (-1 !== e.indexOf('|')) {
                  if (e = e.split('|'), 'term_meta' === a) return {
                    term: e[0],
                    type: e[1],
                    filter: e[2],
                    index: e[3],
                    submitted: 1,
                    id: B()
                  };
                  if ('add_refine' === a) return { action: 'add_refine', term: e[0], type: 'guide', filter: e[2], index: e[3], submitted: 1 };
                  if ('remove_refine' === a) return { action: 'remove_refine', term: e[0], type: 'guide', filter: e[2], index: e[3], submitted: 1 };
                }
                return e;
              }, r = i.length, o = 0; o < r; o += 1) {
                var s = i[o].split('='), a = decodeURIComponent(s[0]), l = $.trim(decodeURIComponent(s[1]));
                if ('term_meta[]' === a) {
                  a = a.substring(0, a.length - 2);
                  var c = n(l);
                  '' !== c && (void 0 === t[a] ? t[a] = new Array(c) : t[a].push(c));
                } else 'add_refine' === a || 'remove_refine' === a ? t.action = n(l) : t[a] = n(l);
              }
              if (t.qa || (t.qa = 'tag'), !t.term_meta && t.q) {
                var d = [];
                for (e = t.q.split(' '), o = 0; o < e.length; o += 1) {
                  var u = M(e[o], 'tag', o, e[o].id);
                  u.submitted = 1, u.id = B(), d.push(u);
                }
                t.term_meta = d;
              }
              return t;
            }, K = function() {
              if (!w) {
                var t = a.find('.headerContainer');
                y = !0, w = !0, l.trigger('onHeaderDropdownClosed'), a.find('.colorSearchTrigger').addClass('active'), e.$html.addClass('fixifyHeader'), e.browser.setPageLock(), e.$body.addClass('noScroll'), n = e.browser.getWindowWidth(), o = e.browser.height - (e.$html.hasClass('freeze') ? 107 : 138), 0 === a.find('.colorSearch').length && t.append('<div class="colorSearch"><div class="controls"><div class="instructions">Select up to five colors</div><button type="button" class="submitTrigger"><span>Search</span></button><button type="button" class="closeTrigger canClose grey"><em></em></button></div><div class="colorSearchContainer"><div class="closeable"></div><div class="spectrumRestriction"></div><canvas class="colorSpectrum"></canvas></div></div>'), s = t.find('.colorSearchContainer'), ee(), t.find('.colorSearch').addClass('active');
              }
            },
            Z = function() {e.$body.removeClass('noScroll'), e.$html.removeClass('fixifyHeader'), e.browser.releasePageLock(), a.find('.colorSearchTrigger').removeClass('active'), a.find('.colorSearch').removeClass('active'), l.off('.color'), a.off('.color'), interact('.colorDrop').unset(), J(), y = !1, w = !1, W();},
            J = function() {s.find('.colorDrop').remove();}, ee = function() {
              var e = a.find('.colorSpectrum'), t = e[0], r = t.getContext('2d'), s = Math.ceil(.5 * o), l = o - s, c = o, d = r.createLinearGradient(0, 0, 0, s), u = r.createLinearGradient(0, l, 0, c),
                  p = new Image;
              this.SaturationDict = { startY: 0, endY: s, stops: [0, .08, .2, .38, .63, .78, .91, 1], opacity: [1, .89, .69, .35, .18, .06, 0] }, this.BrightnessDict = {
                startY: l,
                endY: c,
                stops: [0, .088, .184, .28, .405, .683, .897],
                opacity: [0, .012, .039, .102, .239, .69, 1]
              }, i = e, t.width = n, t.height = o, p.onload = function() {
                r.drawImage(this, 0, 0, n, o);
                var e = r.getImageData(0, 0, n, o).data, t = Math.round(n / 210 * 5);
                h = [];
                for (var i = 0; i < n; ++i) {
                  var a = 4 * (n + i), c = fe(e[a], e[a + 1], e[a + 2]);
                  h.push(c[0]);
                }
                h.slice(t, h.length - t), d.addColorStop(0, 'hsla(0,0%,100%,1)'), d.addColorStop(.08, 'hsla(0,0%,100%,1)'), d.addColorStop(.2, 'hsla(0,0%,100%,0.89)'), d.addColorStop(.38, 'hsla(0,0%,100%,0.69)'), d.addColorStop(.63, 'hsla(0,0%,100%,0.35)'), d.addColorStop(.78, 'hsla(0,0%,100%,0.18)'), d.addColorStop(.91, 'hsla(0,0%,100%,0.06)'), d.addColorStop(1, 'hsla(0,0%,100%,0)'), r.fillStyle = d, r.fillRect(0, 0, n, s), u.addColorStop(0, 'rgba(0, 0, 0, 0.000)'), u.addColorStop(.088, 'rgba(0, 0, 0, 0.012)'), u.addColorStop(.184, 'rgba(0, 0, 0, 0.039)'), u.addColorStop(.28, 'rgba(0, 0, 0, 0.102)'), u.addColorStop(.405, 'rgba(0, 0, 0, 0.239)'), u.addColorStop(.683, 'rgba(0, 0, 0, 0.690)'), u.addColorStop(.897, 'rgba(0, 0, 0, 1.000)'), r.fillStyle = u, r.fillRect(0, l, n, s), ie(h), le();
              }, p.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAABCAIAAAAkUWeUAAAAxElEQVR4AXWRB64rQQjAzNZ//5u+9EzjAwpS6siyvH3RiO68rwFLssKWNnbCyb9nZ7z7iXxJvjZYkhkmOjSkQY0oEeZE7vCEuJXbkPvg3t3eHlJG2HuyrmadqoXObUxNjbkzwSI5bbIlbzNn5OGzk/WJmEoX2kybHq5BMYu7CHcL3N4e7sKTk2pIGBrakC42wzJYh3szCN636BdPuyQ5hjzGWJQlvGpZ9CZ6ZVzQC+MUHNGj2zm49ZDnzee484rekIXX9R83Jo4RLxbUQgAAAABJRU5ErkJggg==';
            }, te = function(e) {
              for (var t = 0; t < u; t += 1) {
                var i = p[t];
                if ('color' === i.filter) {
                  var n = i.term, r = he(n.replace('#', '')), o = fe(r[0], r[1], r[2]), s = ne(e, o[0]), a = re(e, o[1], o[2]), l = se(s, a);
                  ge(l.x, l.y, n, i.id);
                }
              }
            }, ie = function(e) {
              c.find('.searchTokenItem.color .tokenName').each(function(t, i) {
                var n = $(i), r = n.text(), o = he(r.replace('#', '')), s = fe(o[0], o[1], o[2]), a = ne(e, s[0]), l = re(e, s[1], s[2]), c = se(a, l), d = n.parents('.searchTokenItem').attr('data-id');
                ge(c.x, c.y, r, d);
              });
            }, ne = function(e, t) {
              var i, n = 0, r = 5, o = 0, s = 0;
              for (n in e) {
                var a = Math.abs(t - e[n]);
                a < r && (r = a, o = parseInt(n));
              }
              for (i = e[o]; i === e[o + s];) s += 1;
              return o += Math.floor(.5 * s), parseInt(o);
            }, re = function(e, t, i) {
              var n, r, o, s = this.SaturationDict, a = s.opacity, l = a.length, c = function(e) {return 100 * e;};
              t = 100 - t;
              for (var d = 0; d < l; d += 1) if (t >= c(a[d])) {
                r = Math.max(0, d - 1), o = Math.min(d, l), n = c(a[r]);
                break;
              }
              var u = s.stops[r], p = s.stops[o] - u, h = c(u) + n * p, f = s.endY * (h / 100);
              return parseInt(f);
            }, oe = function(e, t) {(t += 47) > n ? e.addClass('left') : e.removeClass('left');},
            se = function(e, t) {return t - 23 - 4 < 4 ? t = 27 : t + 23 + 4 > o && (t = o - 27), e - 23 - 4 < 4 ? e = 27 : e + 23 + 4 > n && (e = n - 27), { x: e, y: t };}, ae = function(e) {
              var t = 0;
              for (e = parseInt(e), t; t < u; t += 1) if (p[t] && p[t].id === e) return t;
              return !1;
            }, le = function() {
              a.on('click.color', '.colorSpectrum', function(e) {
                var t = me(e.offsetX, e.offsetY), i = ye(t.hex, 'spectrum'), n = se(t.x, t.y), r = i.id;
                we() && (ge(n.x, n.y, t.hex, r), be(r, i));
              }), l.on('resize.color', _.debounce(function() {}, 200)), a.on('click.color', '.removeColorDrop', function(e) {
                var t = $(this).parents('.colorDrop'), i = t.attr('data-id');
                c.find('.color[data-id="' + i + '"]').remove(), t.remove(), p.splice(ae(i), 1);
              }), a.on('mouseenter.color', '.colorDropBg', function(e) {$(this).parent().addClass('hover');}).on('mouseleave.color', '.colorDropBg', function() {$(this).parent().removeClass('hover');}), interact('.colorDrop', { context: a.find('.colorSpectrum') }).draggable({
                inertia: {
                  resistance: 30,
                  minSpeed: 200,
                  endSpeed: 100
                },
                restrict: { restriction: a.find('.spectrumRestriction')[0], endOnly: !0, autoScroll: !1 },
                autoScroll: !1,
                onmove: function(e) {
                  var t = e.target, i = Math.round(parseFloat(t.getAttribute('data-x')) + e.dx), r = Math.round(parseFloat(t.getAttribute('data-y')) + e.dy), s = t.getAttribute('data-id');
                  if (t.style.webkitTransform = t.style.transform = 'translate(' + i + 'px, ' + r + 'px)', t.setAttribute('data-x', i), t.setAttribute('data-y', r), (t = $(t)).addClass('moving'), r >= 0 && r < o - 0 && i >= 0 && i < n - 0) {
                    var a = c.find('.searchTray').find('.color[data-id="' + s + '"]'), l = me(i, r).hex;
                    t.find('.colorDropBg').css('background-color', l), a.length > 0 && de(a, l, 'color', 'spectrum', 0, s), ce(s, l);
                  }
                },
                onend: function(e) {
                  var t = $(e.target), i = e.pageX;
                  t.removeClass('moving'), oe(t, i);
                }
              });
            }, ce = function(e, t) {
              var i = 0;
              for (e = parseInt(e), i; i < u; i += 1) p[i] && p[i].id === e && (p[i].term = t);
            }, de = function(e, t, i, n, r, o) {
              var s = O(t, i, n, r, o);
              '' !== s && (e.replaceWith(s), ue(o, t, n));
            }, ue = function(e, t, i) {
              var n = ae(e);
              p[n].term_updated = t, p[n].type_updated = i;
            }, pe = function(e, t, i) {return '#' + ((1 << 24) + (e << 16) + (t << 8) + i).toString(16).slice(1);},
            he = function(e) {return r = parseInt(e.substring(0, 2), 16), g = parseInt(e.substring(2, 4), 16), b = parseInt(e.substring(4, 6), 16), [r, g, b];}, fe = function() {
              var e, t, i, n, r, o = arguments[0] / 255, s = arguments[1] / 255, a = arguments[2] / 255, l = Math.max(o, s, a), c = l - Math.min(o, s, a), d = function(e) {return (l - e) / 6 / c + .5;};
              return 0 == c ? n = r = 0 : (r = c / l, e = d(o), t = d(s), i = d(a), o === l ? n = i - t : s === l ? n = 1 / 3 + e - i : a === l && (n = 2 / 3 + t - e), n < 0 ? n += 1 : n > 1 && (n -= 1)), [Math.round(360 * n), Math.round(100 * r), Math.round(100 * l)];
            }, me = function(e, t) {
              var n = i[0].getContext('2d').getImageData(e, t, 1, 1).data, r = pe(n[0], n[1], n[2]), o = ve(e, t);
              return { x: o.x, y: o.y, hex: r };
            }, ge = function(t, n, r, o) {
              var s = '<div class="colorDrop" data-id="' + o + '" style="transform:translate(' + t + 'px,' + n + 'px);"><div class="colorDropBg" style="background:' + r + ';"><div class="removeColorDrop"><div></div></div></div></div>',
                  a = $(s);
              return a.attr('data-x', t), a.attr('data-y', n), a[0].xp = t / e.browser.width, a[0].yp = n / e.browser.height, i.parent().append(a), oe(a, t), o;
            }, ve = function(e, t) {return t < 4 ? t = 4 : t > o - 4 && (t = o - 4), e < 4 ? e = 4 : e > n - 4 && (e = n - 4), { x: e, y: t };}, ye = function(e, t) {
              var i = M(e, t, u + 1, B());
              return i.submitted = 0, i;
            }, be = function(e, t) {
              if (we()) {
                var i = O(t.term, t.filter, t.type, t.index, e);
                '' !== i && (D(), c.find('.tokenInput').before(i), I(p, t), A()), x.push(e);
              } else alert('You can only select up to 5 colors.');
            }, we = function() {return _.filter(p, function(e) {return e && 'color' === e.filter;}).length < 5;};
        e.json && !e.json.page.disable_global_search_tokens && function() {
          var e = Q(window.location.search);
          if (v = q(), e && e.q) {
            X(e.q);
            var i = e.qa || 'tag';
            y = !1, t = !1, _currentState = { q: e.q, qa: i, term_meta: e.term_meta }, I(e.term_meta), G(_currentState);
          } else _currentState = { q: !1, qa: !1, term_meta: !1 };
        }(), A(), e.json && !e.json.page.disable_global_search && function() {
          var i = e.$app;
          e.$document.on('keydown.search', function(e, t) {T(e, t);}), c.on('blur.search', '.field', function(e, t) {y = !1, a.removeClass('fieldHasFocus'), W(), F(), H();}), c.on('click.search', '.field, .tokenName', function(e, t) {T(e, t);}), a.on('click.search', '.removeToken', function() {
            var e = $(this).parents('.searchTokenItem'), t = (e.attr('data-position'), e.attr('data-id'));
            e.remove(), P(), l.trigger('onSearchTokenRemoved', [t]);
          }), a.on('click.search', '.submitTrigger', function(t) {e.analytics.trackGAEvent('Color Search', 'submit ', 'clicked'), d.trigger('onSearchSubmit');}), a.on('click.search', '.closeTrigger', function(e) {Z();}), a.on('click.search', '.colorSearchTrigger', function(t) {$(this).hasClass('active') ? Z() : (e.analytics.trackGAEvent('Color Search', 'search bar icon', 'opened'), K());}), e.$app.find('.featured').on('click.search', '.colorSearchTrigger', function(t) {e.analytics.trackGAEvent('Color Search', 'featured banner', 'opened'), K();}), d.on('onSearchSubmit', function() {
            var i = w ? p : X(d.val()), n = e.config.BASE_URL, r = [], o = [];
            y = !1, t = !1;
            for (var s = 0; s < i.length; s += 1) {
              var a = w ? i[s] : M(i[s], 'typed', s, B());
              o.push(a.term), r.push(Y(a));
            }
            n += '/search/' + v + '/?q=' + encodeURIComponent(o.join(' ')), n += '&qa=typed&' + V(r, 'term_meta'), e.redirect(n);
          }), l.on('onSearchTokenRemoved', function(i, n) {
            var r = e.config.BASE_URL, o = ae(n);
            if (y = !1, t = !1, p.length > 1 && 'object' == typeof p[o]) {
              X(_currentState.q);
              var a, l = [], c = [], d = p[o], u = 'color' === d.filter && w;
              p.splice(o, 1), a = p.length, u && s.find('.colorDrop[data-id="' + n + '"]').remove();
              for (var h = 0; h < a; h += 1) {
                var f = p[h];
                if (f) {
                  var m = M(f.term, f.type, h, f.id);
                  c.push(m.term), l.push(Y(m));
                }
              }
              u || (r += '/search/' + v + '/?q=' + encodeURIComponent(c.join(' ')), r += '&qa=remove&' + V(l, 'term_meta'), r += '&remove_refine=' + Y(d), e.redirect(r));
            } else e.redirect(r);
          }), e.$header.on('mousedown.search', '.suggestedTermName', function() {
            $(this);
            for (var t = e.config.BASE_URL, i = [], n = [], r = JSON.parse($(this).attr('data-query')), o = X(r.selected_query), s = 0; s < o.length; s += 1) {
              var a = M(o[s], 'autocomplete', s, B());
              n.push(a.term), i.push(Y(a));
            }
            return t += '/search/' + v + '/?q=' + encodeURIComponent(n.join(' ')), t += '&qa=autocomplete&entered_query=' + r.entered_query + '&selected_query=' + r.selected_query, t += '&' + V(i, 'term_meta'), e.redirect(t), !1;
          }), i.on('click.search', '.searchableTerm', function() {
            for (var t = $(this), i = e.config.BASE_URL, n = [], r = [], o = X(t.data('query')), s = 0; s < o.length; s += 1) {
              var a = M(o[s], 'tag', s, B());
              r.push(a.term), n.push(Y(a));
            }
            return i += '/search/' + v + '/?q=' + encodeURIComponent(r.join(' ')), i += '&qa=tag&' + V(n, 'term_meta'), e.redirect(i), !1;
          }), i.on('click.search', '.guide', function() {
            var t = $(this), i = e.config.BASE_URL, n = [], r = [], o = t.data('token'), s = M(o.label, 'guide', o.position, B()), a = X(_currentState.q);
            a.splice(o.position, 0, o.label);
            for (var l = 0; l < a.length; l += 1) {
              var c = M(a[l], 'guide', l, B());
              r.push(c.term), n.push(Y(c));
            }
            return i += '/search/' + v + '/?q=' + encodeURIComponent(r.join(' ')), i += '&qa=guide&' + V(n, 'term_meta'), i += '&add_refine=' + Y(s), e.redirect(i), !1;
          }), l.on('onBodyColumnsChanged.search', function() {A();});
        }();
      }, e.guides = function() {
        var t = e.$app.find('.guides'), i = t.find('.guidesContainer'), n = t.find('.guidesScroller'), r = t.width(), o = i.children(), s = o.first().width(), a = o.length, l = t.find('.shiftRight'),
            c = t.find('.shiftLeft'), d = 0, u = (i.width(), !1), p = function(e) {d <= Math.abs(e) + t.width() ? l.hide() : l.show(), 0 !== e ? c.show() : c.hide(), u = !1;};
        d = s * a, i.css('width', d + 'px'), p(0);
        l.on('click', function(e) {
          return u || (u = !0, n.scrollTo('+=' + .5 * r + 'px', 280, {
            axis: 'x',
            onAfter: function() {p(i.position().left);}
          })), !1;
        }), c.on('click', function(e) {return u || (u = !0, n.scrollTo('-=' + .5 * r + 'px', 280, { axis: 'x', onAfter: function() {p(i.position().left);} })), !1;}), i.css('width', a * s);
      };
    }(App),
    function(e) {
      var t = {
        clicksToBackground: 0,
        backClick: !1,
        rewindHistory: !1,
        forceDefaultImageLink: !1,
        ignoreDoubleStateChange: !1,
        setDocumentTitle: function(e) {window.document.title = e;},
        saveState: function(t, i, n, r) {
          var o, s = null;
          null !== t && (o = e.browser.getScrollPosition() - $('.activeSave').offset().top, s = {
            id: t,
            type: i,
            scrollOffset: e.pagination.settings.totalOffset,
            scrollDifference: o,
            currentPage: e.pagination.settings.currentPage
          }), window.history.replaceState(s, n, r);
        }
      };
      e.historyManager = t;
    }(App),
    function(e) {
      function t(t) {
        $.holdReady(!0), $.getScript('https://apis.google.com/js/api:client.js', function() {
          $.holdReady(!1), gapi.load('auth2', function() {
            auth2 = gapi.auth2.init({
              client_id: e.config.g_auth_client_id,
              cookiepolicy: 'single_host_origin'
            }), i(document.getElementById(t + 'WithGoogle'), t);
          });
        });
      }

      function i(t, i) {
        auth2.attachClickHandler(t, {}, function(t) {
          var r = t.getAuthResponse().id_token;
          t.disconnect();
          var o = { token: r, request_token: e.config.requestToken };
          o['google_' + i] = 1, n(o);
        }, function(e) {});
      }

      function n(t) {
        $.ajax({
          url: '/resource/',
          type: 'POST',
          data: t,
          success: function(t) {t.error ? e.$body.find('.socialAuthError').addClass('active').html(t.error) : (e.$body.find('.socialAuthError').removeClass('active'), e.redirect(t.location, 100));}
        });
      }

      function r(t) {
        $.holdReady(!0), $.getScript('https://connect.facebook.net/en_US/sdk.js', function() {
          $.holdReady(!1), e[t + 'WithFacebook'] = function() {
            return FB.login(function(i) {
              if (i.authResponse) {
                var r = { request_token: e.config.requestToken };
                r['facebook_' + t] = 1, n(r);
              }
            }, { scope: 'email,public_profile', return_scopes: !0 }), !1;
          }, window.fbAsyncInit = function() {FB.init({ appId: e.config.fb_auth_app_id, cookie: !0, version: e.config.fb_graph_version });};
        });
      }

      e.loadSocialLogin = function() {t('login'), r('login');}, e.loadSocialSignup = function() {t('signup'), r('signup');};
    }(App),
    App.storage = function() {
      var e = function() {try {return 'localStorage' in window && null !== window.localStorage;} catch (e) {return !1;}}();
      return {
        set: function(t, i, n) {
          if (e) {
            var r = !!n && $.now() + 1e3 * n;
            i.timestamp = r, localStorage.setItem(t, JSON.stringify(i));
          }
        }, get: function(t) {
          if (e) {
            var i = localStorage.getItem(t);
            return !!((i = JSON.parse(i)) && i.timestamp >= $.now()) && i;
          }
        }, remove: function(t) {e && localStorage.removeItem(t);}
      };
    }(),
    function(e) {
      function t(e, t, i, n, r) {
        var o;
        return 'twitter' === r ? o = function(r) {return r = 'https://twitter.com/intent/tweet?original_referer=' + encodeURIComponent(document.location.href), r += '&related=' + t, r += '&source=tweetbutton&text=' + i, r += '&url=' + e, r += '&via=' + n;}() : 'facebook' === r ? o = 'http://www.facebook.com/share.php?u=' + e + '&t=' + t : 'linkedin' === r && (o = 'http://www.linkedin.com/shareArticle?mini=true&url=' + e + '&title=' + i + '&summary=See many more awesome job opportunities on Designspiration Jobs.&source=Designspiration Jobs'), o;
      }

      e.socialShare = {
        init: function(i) {
          if (i = i || !1) {
            var n = e.config.SHORT_URL, r = .5 * window.screen.width - 320, o = .3 * window.screen.height - 353 * .3;
            i.each(function() {
              var e = $(this),
                  i = t(encodeURIComponent(e.attr('data-url') || n), encodeURIComponent(e.attr('data-related')) || '', encodeURIComponent(e.attr('data-text')), e.attr('data-via') || '', e.attr('data-type'));
              e.attr({ href: i, target: '_blank' });
            }), i.on('click.sharing', function() {
              var t = $(this), i = t.attr('href'), n = 'toolbar=0, status=0, width=640, height=353, top=' + o + ', left=' + r;
              return 'twitter' === t.attr('data-type') ? 'undefined' == typeof twttr && window.open(i, 'sharer', n) : window.open(i, 'sharer', n), e.analytics.trackGAEvent('social_share', 'clicked', t.attr('data-type'), i), !1;
            });
          }
        }
      };
    }(App),
    function(e) {
      function t(t, i) {
        this.lastScrollTop = 0, this.url = location.href, this.container = i.parent().find('.Pagination'), this.loader = null, this.hasLoader = !1, this.loading = !1, this.settings = {
          distance: 400,
          current: 1,
          totalPages: 1
        }, this.request = {}, t && $.extend(this.settings, t), this.initLoader = function() {
          var t = this.container;
          this.loader = new e.loader(t, 3), t.addClass('isLoader');
        }, this.showLoader = function(e) {
          var t = this;
          t.loading = e, $('.isLoader').removeClass('loading'), e ? t.loading && t.loader.container.addClass('loading') : t.loader.container.removeClass('loading');
        }, this.initLoader();
      }

      t.prototype = {
        isLoading: function() {return !this.loading && (!(this.settings.totalOffset <= this.settings.current) && void 0);},
        showPagination: function() {this.hasMoreItems() ? this.container.addClass('active') : this.container.removeClass('active');},
        handleScrollImpression: function() {this.settings.current > 1 && ('related-saves' == this.settings.page ? (e.analytics.trackGAPageview('User Profiles|Save Closeup|1', 'scroll/'), e.analytics.trackGAEvent('Scroll Pageviews', 'scroll/')) : e.analytics.trackGAPageview(!1, 'scroll/'));},
        isScrollingDown: function() {
          var t = e.browser.getScrollPosition(), i = t > this.lastScrollTop;
          return this.lastScrollTop = t, i;
        },
        hasMoreItems: function() {return this.settings.has_more || 1 === this.settings.has_more;},
        stopListening: function() {this.layoutManager.scroller.off('.scrollmonitor');}
      }, e.pagination = t;
    }(App),
    function(e) {
      var t = { EDIT_BTN: { classes: 'action editTrigger', text: 'Edit' }, SAVE_BTN: { classes: 'action saveTrigger', text: 'Save' }, SIGNUP_BTN: { classes: 'action signupTrigger', text: 'Save' } };
      e.save = {
        relatedAjaxPending: !1,
        current: {},
        hasRelatedFeed: !1,
        validateForm: {
          add: function() {
            var t = e.component.activeComponent.find('.description'), i = e.component.activeComponent.find('.active.item'), n = $.trim(t.val()), r = i.attr('data-id');
            return '' === n ? (e.validate.form(t, { description: 'Please describe what you\'re saving' }), !1) : (e.validate.form(t), !!r);
          }, edit: function() {return !0;}
        },
        init: function() {this.addListeners();},
        addListeners: function() {
          var t = e.$body, i = this;
          t.on('click', 'a[rel="external"]', e.trackLink), t.on('click', '.save .saveTrigger', function(t) {
            var n = $(this), r = n.parents('.gridItem'), o = (r.find('.gridItemImage'), !1), s = !1;
            e.save.hasRelatedFeed && (s = !0), o = s ? e.json.related.data : e.json.data;
            var a = r.attr('data-id'), l = i.getSaveDataByID(a, o), c = {
              component: 'save-to-collection',
              modal: 'saveModal',
              id: a,
              description: l.description,
              image: l.images['2x'].url,
              height: r.height(),
              width: r.width(),
              gridItem: r,
              trigger: n,
              isRelatedClick: s
            };
            if (n.attr('data-web')) c.link = r.find('.gridItemLink').prop('href'), c.isUpload = !0; else {
              var d = r.parents('.mediaSimilar').length;
              c.link = n.prop('href'), c.count = parseInt(r.find('.gridItemCount').text()), c.bg = r.find('.gridItemLink').css('background-color'), c.isRelated = d, c.isUpload = !1;
            }
            return e.component.load(c), !1;
          }), t.on('click', '.save .editTrigger', function(t) {
            var n = $(this), r = n.parents('.gridItem'), o = r.parents('.mediaSimilar').length, s = !1, a = !1;
            e.save.hasRelatedFeed && (a = !0), s = a ? e.json.related.data : e.json.data;
            var l = r.attr('data-id'), c = i.getSaveDataByID(l, s);
            return e.component.load({
              component: 'edit-save',
              modal: 'editSaveModal',
              id: l,
              description: c.description,
              link: n.prop('href'),
              count: c.resaves,
              bg: c.background,
              image: c.images['2x'].url,
              height: r.height(),
              width: r.width(),
              gridItem: r,
              trigger: n,
              isRelated: o,
              isRelatedClick: a
            }), !1;
          }), t.on('click', '.save .signupTrigger', function(t) {
            var i = $(this);
            return e.component.load({ component: e.page.accessUI.component, modal: e.page.accessUI.modal, trigger: i }), !1;
          });
        },
        addGridItemListeners: function(t) {
          var i = t.order.length, n = e.$html.hasClass('freeze') ? 48 : 0, r = t.container.offset().top, o = e.browser.getScrollPosition() + n, s = e.browser.height - n,
              a = { top: e.browser.getScrollPosition() + n, bottom: o + s, height: s, offset: r, headerOffset: n }, l = i;
          for (l; l-- > 0;) {
            var c = t.order[l], d = t.childrenItemInfo[c];
            if (t.inViewport(d, a)) {
              if (d.promoted && 'object' == typeof d.promoted && (d.hasSentImpression || (e.ads.sendEvent('impression', d.promoted), d.hasSentImpression = !0)), !d.hasListeners) {
                p = (u = d.itemWrapper.find('.gridItemInnerWrap')).find('.gridItemLink');
                d.hasListeners = !0, d.promoted ? p.on('click.gridItemLink', function(t) {
                  var i = $(this).parents('.gridItem').attr('data-id'), n = e.save.hasRelatedFeed ? e.json.related.data : e.json.data, r = e.save.getSaveDataByID(i, n);
                  e.ads.sendEvent('click', r.promoted);
                }) : (e.isMobile || u.on('mouseenter.gridItemInnerWrap', function() {e.save.buildGridActions($(this));}).on('mouseleave.gridItemInnerWrap', function() {$(this).find('.gridItemActions,.gridItemGradient').remove();}), p.on('click.gridItemLink', function(t) {
                  if (!e.usingkeyModifiers(t) && e.useHistory) {
                    var i = $(this), n = !1, r = i.parents('.gridItem'), o = r.attr('data-id'), s = !1, a = !1;
                    return e.save.current.id = parseInt(o), n && e.save.grid.cancelPreviousRequest(), 'page' === i.parents('.mediaSimilar.active').attr('data-rel') || r.hasClass('promoted') ? !0 : (e.save.hasRelatedFeed && (n = !0), s = n ? e.json.related.data : e.json.data, a = e.save.getSaveDataByID(o, s), e.json.related = !1, e.save.closeupLoader(a, !0, n), !1);
                  }
                }));
              }
            } else if ('hasListeners' in d && d.hasListeners) {
              var u = d.itemWrapper.find('.gridItemInnerWrap'), p = u.find('.gridItemLink');
              d.hasListeners = !1, u.off('mouseenter.gridItemInnerWrap'), u.off('mouseleave.gridItemInnerWrap').find('.gridItemActions,.gridItemGradient').remove(), p.off('click.gridItemLink');
            }
          }
        },
        buildGridActions: function(i) {
          var n = i.parents('.gridItem');
          if (i.find('.gridItemActions').length < 1 && !n.hasClass('promoted')) {
            var r, o, s = n.attr('data-id'), a = e.save.hasRelatedFeed ? e.json.related.data : e.json.data, l = _.filter(a, function(e) {return e.id === parseInt(s);})[0], c = '';
            e.json.page.user.isLoggedIn ? (r = t.SAVE_BTN.classes, o = t.SAVE_BTN.text, l.has_saved && (c = '<button type="button" class="' + t.EDIT_BTN.classes + '"><span>' + t.EDIT_BTN.text + '</span></button>')) : (r = t.SIGNUP_BTN.classes, o = t.SAVE_BTN.text), c += '<button type="button" class="' + r + '"><span>' + o + '</span></button>', l.resaves > 0 && (c += '<div class="gridItemCount">' + l.resaves + '</div>'), c = '<div class="gridItemActions">' + c + '</div>', i.append(c), i.find('.gridImageHeight').prepend('<div class="gridItemGradient"></div>');
          }
        },
        buildCloseupActions: function(t, i) {
          var n = '';
          e.json.page.user.isLoggedIn ? t.has_saved ? (n = '<button type="button" class="action editTrigger isCloseup"><span>Edit</span></button>', n += '<button type="button" class="action saveTrigger isCloseup"><span>Save</span></button>') : n += '<button type="button" class="action saveTrigger isCloseup"><span>Save</span></button>' : n = '<button type="button" class="action signupTrigger isCloseup"><span>Save</span></button>', t.resaves > 0 && (n += '<div class="action gridItemCount">' + t.resaves + '</div>'), i.prepend(n);
        },
        getSaveDataByID: function(e, t) {
          for (var i in t) if (t[i].id == e) return t[i];
          return !1;
        },
        hashtagifyText: function(e) {return e.replace(/(\#)([^\s]+)/gi, ' <a href="/search/saves/?q=$2&qa=tag" data-type="tag" data-query="$2" class="descriptionTag searchableTerm" title="Explore $2 inspiration">#$2</a> ');},
        showCloseupSavedBy: function(t) {
          $.ajax({
            url: '/resource/',
            type: 'POST',
            dataType: 'json',
            data: { closeup_promoted: 1, request_token: e.config.requestToken },
            error: function(e) {},
            success: function(t) {t.data && e.ads.buildCloseupSidebar(t.data, e.$body.find('.mediaMeta'));},
            complete: function() {}
          });
        },
        buildCloseupTemplate: function(t, i) {
          var n, r, o = e.component.activeComponent.find('.modalScroller'), s = o.find('.mediaWrapper'), a = o.find('.mediaActionWiper'), l = o.find('.mediaMeta'), c = e.config.gridItemWidth,
              d = (e.config.gridItemHeight, t.images['3x']), u = c * (d.h / d.w) / c, p = { 'background-color': t.background, 'max-width': Math.min(600, t.images['2x'].w) }, h = parseInt(t.id),
              f = o.find('.mediaImage');
          o.find('.mediaLink').css(p), o.animate({ scrollTop: 0 }, 1), r = u * Math.min(600, t.images['2x'].w) + 68, n = o.find('.mediaMeta').outerHeight(), n = Math.max(r, n), o.find('.mediaImage').attr({
            src: t.images['2x'].url,
            width: d.w,
            height: d.h,
            alt: t.description,
            'data-mw': 0,
            'data-mh': 0
          });
          var m = new Image;
          $(m).load(function(e) {f.attr('src', e.target.src);}), m.src = d.url, o.find('.mediaSimilar').removeClass('active').find('.gridItems').html('').css('height', ''), o.find('.mediaSimilar .gridItems').attr('data-id', h), s.attr('data-id', h), a.html(''), l.find('.closeupSidebar').remove(), o.find('.mediaLink').attr('href', t.source_url), o.find('.mediaSourceDomain').html(t.source_domain), o.find('.visitTrigger').attr('href', t.source_url), o.find('.mediaDescription').html(e.save.hashtagifyText(t.description)), e.analytics.trackGAPageview('User Profiles|Save Closeup|1'), this.showCloseupSavedBy(h), l.find('.authorPictureContainer').attr('href', t.user_permalink).css('background', t.user_background).find('.authorPicture').attr('src', t.user_picture['1x']), r < n ? s.addClass('isVertSmall') : s.removeClass('isVertSmall'), e.isMobile || s.css('height', n + 'px'), o.find('.mediaHeight').css('padding-bottom', 100 * u + '%'), l.find('.authorName').attr('href', t.user_permalink).html(t.user_display_name), this.buildCloseupActions(t, a), e.component.isActiveComponentRequest = !1, this.showRelatedSaves(h, !0);
        },
        closeupLoader: function(t, i, n) {
          if (t && !e.component.isActiveComponentRequest) {
            var r = this, o = function(t, n) {
              e.component.activeComponent;
              if (e.useHistory) if (i) {
                var o = e.historyManager.clicksToBackground + 1, s = 'Designspiration - ' + t.description, a = t, l = e.config.BASE_URL + '/save/' + a.id + '/';
                a.clicksToBackground = o, a.isRelatedSaveClick = n, e.historyManager.clicksToBackground = o, e.historyManager.ignoreDoubleStateChange = !0, window.history.pushState(a, s, l);
              } else e.historyManager.clicksToBackground = Math.max(0, e.historyManager.clicksToBackground - 1);
              r.buildCloseupTemplate(t, n);
            };
            r.hasRelatedFeed = !0, n ? (e.save.grid.layoutManager.scroller.off(), o(t, n)) : e.component.load({
              component: 'save-closeup',
              modal: 'closeupModal',
              id: t.id,
              data: '',
              isRelatedClick: n,
              callback: function(e) {o(t, n);}
            });
          }
        },
        initCloseup: function(t) {
          if (this.addCloseupListeners(t), !t) {
            var i = e.$app.find('.mediaWrapper'), n = e.$app.find('.mediaSimilar');
            if (this.hasRelatedFeed = !0, n.length > 0) {
              var r = n.find('.gridItems'), o = (e.$window, i.attr('data-id'));
              e.save.current.id = parseInt(o), e.json.related = e.json, n.addClass('active'), e.save.grid = new e.gridLayout({
                feed: !0,
                variable: !0,
                isRelated: !0,
                widthScale: e.isMobile,
                container: r,
                pagination: { save_id: o, currentPage: 1, has_more: !0, page: 'related-saves' },
                isModal: t,
                hasContainer: !1,
                data: e.json.data,
                type: 'save'
              });
            }
          }
        },
        showRelatedSaves: function(t, i) {
          var n = i ? e.component.activeComponent : e.$app;
          i ? e.component.activeComponent.find('.gridItemsScroller') : e.$window;
          (n = n.find('.mediaSimilar')).length > 0 && function(t) {
            if (t) {
              var r = i ? e.$modal.find('.Pagination') : e.$app.find('.Pagination'), o = setTimeout(function() {new e.loader(r, 3), r.addClass('isLoader loading');}, e.component.loadDelay);
              this.relatedAjaxPending = $.ajax({
                url: '/resource/',
                type: 'POST',
                dataType: 'json',
                data: { page: 'related-saves', page_number: 1, save_id: t, request_token: e.config.requestToken },
                error: function(e) {},
                success: function(r) {
                  if (r && r.data.length > 0) {
                    var o = !!i;
                    e.json.related = r;
                    var s = n.find('.gridItems[data-id="' + t + '"]');
                    n.addClass('active'), e.save.grid = new e.gridLayout({
                      id: t,
                      feed: !0,
                      variable: !0,
                      isRelated: !0,
                      widthScale: e.isMobile,
                      container: s,
                      pagination: { save_id: t, currentPage: 1, has_more: !0, page: 'related-saves' },
                      isModal: i,
                      hasContainer: o,
                      data: r.data,
                      type: 'save'
                    });
                  }
                },
                complete: function() {r.removeClass('loading'), clearTimeout(o);}
              });
            }
          }(t);
        },
        addCloseupListeners: function(t) {
          var i = t ? e.component.activeComponent : e.$app;
          t ? i.find('.modalScroller') : e.$window, i.find('.mediaWrapper');
          new e.tags, i.on('click.modal', '.saveTrigger.isCloseup', function(t) {
            var i = $(this), n = i.parents('.mediaWrapper'), r = n.find('.mediaImage'), o = e.save.scaleByWidth(r.height(), r.width(), e.config.gridItemWidth);
            return e.component.load({
              component: 'save-to-collection',
              modal: 'saveModal',
              id: n.attr('data-id'),
              isCloseup: !0,
              description: r.attr('alt'),
              count: parseInt(n.find('.gridItemCount').text()),
              bg: n.find('.gridItemLink').css('background-color'),
              image: r.attr('src'),
              height: o[0],
              width: o[1],
              gridItem: n,
              trigger: i
            }), !1;
          }), i.on('click.modal', '.editTrigger.isCloseup', function(t) {
            var i = $(this), n = i.parents('.mediaWrapper'), r = n.find('.mediaImage'), o = e.save.scaleByWidth(r.height(), r.width(), e.config.gridItemWidth);
            return e.component.load({
              component: 'edit-save',
              modal: 'editSaveModal',
              id: n.attr('data-id'),
              link: i.prop('href'),
              isCloseup: !0,
              description: r.attr('alt'),
              count: parseInt(n.find('.gridItemCount').text()),
              bg: n.find('.gridItemLink').css('background-color'),
              image: r.attr('src'),
              height: o[0],
              width: o[1],
              gridItem: n,
              trigger: i,
              isRelatedClick: !1
            }), !1;
          }), i.on('click', '.signupTrigger', function(t) {
            var i = $(this);
            return e.component.load({ component: e.page.accessUI.component, modal: e.page.accessUI.modal, trigger: i }), !1;
          }), i.on('click.modal', '.shareTrigger', function() {
            var t = $(this);
            return e.component.load({ component: 'share', modal: 'shareModal', id: t.parents('.mediaWrapper').attr('data-id'), trigger: t }), !1;
          }), i.on('click.modal', '.reportTrigger', function() {
            var i = $(this), n = i.parents('.mediaWrapper'), r = n.attr('data-id');
            return e.component.load({
              component: 'report', modal: 'reportModal', id: n.attr('data-id'), trigger: i, callback: function() {
                var i = $(this);
                if (!i.hasClass('disabled') && e.component.activeComponent.find('input[name=reason]').is(':checked')) {
                  var n = t ? 'modal' : 'page', o = { report_save: 1, save_id: r, request_token: e.config.requestToken };
                  i.addClass('disabled'), e.curate.report(o, 'save', n);
                }
                return !1;
              }
            }), !1;
          });
        },
        resave: function(t) {
          var i = e.component.activeComponent, n = setTimeout(function() {
                var t = i.find('.modalStep.processing');
                new e.loader(t), t.addClass('active loading');
              }, e.component.loadDelay), r = i.find('.description').val(), o = t.attr('data-id'), s = t.attr('data-privacy'), a = e.component.params, l = a.id, c = a.isCloseup,
              d = { collection_id: o, save_id: l, description: r, privacy: s, user: 1, resave: 1, request_token: e.config.requestToken };
          t.addClass('active'), c && (d.closeup = !0), $.ajax({
            url: '/resource/',
            type: 'POST',
            dataType: 'json',
            data: d,
            error: function(t) {clearTimeout(n), e.analytics.trackGAEvent('re_save', 'error', t.responseText), i.find('.modalStep').removeClass('active loading');},
            success: function(r) {
              if (clearTimeout(n), 1 === r.status) {
                if (i.find('.modalStep.complete').addClass('active'), i.find('.modalStep').removeClass('loading'), c) {
                  var o = a.gridItem, s = a.count + 1, l = r.button, u = r.id;
                  a.isRelated ? (e.save.updateItemAction(d, r, e.component.params.isRelatedClick, 'save'), a.gridItem.attr('data-id', r.save_id)) : (o.find('.mediaWrapper').attr('data-id', u), o.find('.gridItemCount').html(s), o.find('.editTrigger').length < 1 && o.find('.mediaActions').prepend(l)), a.gridItem.attr('data-id', r.save_id);
                } else e.save.updateItemAction(d, r, e.component.params.isRelatedClick, 'save'), a.gridItem.attr('data-id', r.save_id);
                e.component.hide(1200), e.analytics.trackGAEvent('re_save', 'success', 'save_modal');
              } else i.find('.modalStep').removeClass('active loading'), e.setButtonRateLimit(function() {t.removeClass('disabled');}), e.analytics.trackGAEvent('re_save', 'failed', r.error);
            }
          });
        },
        updateItemAction: function(t, i, n, r) {
          var o = t.save_id, s = (i.save_id, n ? e.json.related.data : e.json.data);
          for (var a in s) if (s[a].id == o) {
            s[a].description = t.description, 'save' === r && (s[a].has_saved || (s[a].resaves += 1), s[a].has_saved = !0, s[a].id = parseInt(i.save_id));
            break;
          }
        },
        websave: function(t) {
          var i = e.component.activeComponent, n = 'save_from_website', r = setTimeout(function() {
                var t = i.find('.modalStep.processing');
                new e.loader(t), t.addClass('active loading');
              }, e.component.loadDelay), o = i.find('.description').val(), s = e.component.params.link, a = e.component.params.image, l = t.attr('data-id'),
              c = (t.attr('data-privacy'), e.component.params),
              d = c.id;
          t.addClass('active'), $.ajax({
            url: '/resource/',
            type: 'POST',
            dataType: 'json',
            data: { collection_id: l, save_id: d, description: o, media_url: a, page_url: s, user: 1, websave: 1, request_token: e.config.requestToken },
            error: function(t) {clearTimeout(r), e.analytics.trackGAEvent(n, 'error', t.responseText), i.find('.modalStep').removeClass('active loading');},
            success: function(o) {
              if (clearTimeout(r), 1 === o.status) {
                var s = !0 === c.isCloseup ? 'Closeup' : '';
                i.find('.modalStep.complete').addClass('active'), i.find('.modalStep').removeClass('loading'), c.gridItem.attr('data-id', o.save_id), c.trigger.next('.gridItemCount').html(c.count + 1), c.trigger.removeClass('saveTrigger' + s + ' blue').addClass('editTrigger' + s + ' grey').text('Edit'), e.component.hide(1200), e.analytics.trackGAEvent(n, 'success', 'save_modal');
              } else i.find('.modalStep').removeClass('active loading'), e.setButtonRateLimit(function() {t.removeClass('disabled');}), e.analytics.trackGAEvent(n, 'failed', o.error);
            }
          });
        },
        bookmarkletSave: function(t) {
          var i = e.component.activeComponent, n = 'save_from_bookmarklet', r = setTimeout(function() {
            var t = i.find('.modalStep.processing');
            new e.loader(t), t.addClass('active loading');
          }, e.component.loadDelay), o = i.find('.description').val(), s = e.data, a = s.url, l = s.media, c = t.attr('data-id'), d = (t.attr('data-privacy'), s.id);
          t.addClass('active'), $.ajax({
            url: '/resource/',
            type: 'POST',
            dataType: 'json',
            data: {
              user: 1,
              bookmarklet_save: 1,
              save_id: d,
              collection_id: c,
              description: o,
              source_image: encodeURIComponent(l),
              source_url: encodeURIComponent(a),
              request_token: e.config.requestToken
            },
            error: function(t) {clearTimeout(r), e.analytics.trackGAEvent(n, 'error', t.responseText), i.find('.modalStep').removeClass('active loading');},
            success: function(o) {clearTimeout(r), 1 === o.status ? (i.find('.modalStep.complete').addClass('active'), i.find('.modalStep').removeClass('loading'), window.opener.postMessage(d + '_' + o.save_id, a), setTimeout(function() {window.close();}, 1200), e.analytics.trackGAEvent(n, 'success', 'save_modal')) : (i.find('.modalStep').removeClass('active loading'), e.setButtonRateLimit(function() {t.removeClass('disabled');}), e.analytics.trackGAEvent(n, 'failed', o.error));}
          });
        },
        edit: function(t) {
          var i = e.component.activeComponent, n = setTimeout(function() {
                var t = i.find('.modalStep.processing');
                new e.loader(t), t.addClass('active loading');
              }, e.component.loadDelay), r = e.component.params.id, o = i.find('.description').val(), s = i.find('.website').val(), a = i.find('.item.active'), l = a.attr('data-id'),
              c = (a.attr('data-privacy'), { save_id: r, collection_id: l, description: o, website: s, user: 1, edit_save: 1, request_token: e.config.requestToken });
          t.addClass('active'), $.ajax({
            url: '/resource/',
            type: 'POST',
            dataType: 'json',
            data: c,
            error: function(t) {clearTimeout(n), e.analytics.trackGAEvent('edit_save', 'error', t.responseText), i.find('.modalStep').removeClass('active loading');},
            success: function(r) {clearTimeout(n), 1 === r.status ? (e.save.updateItemAction(c, r, e.component.params.isRelatedClick), i.find('.modalStep.complete').addClass('active'), i.find('.modalStep').removeClass('loading'), e.component.hide(1200), e.analytics.trackGAEvent('edit_save', 'success', 'save_modal')) : (e.validate.form(i.find('.meta.column'), r.error), i.find('.modalStep').removeClass('active loading'), e.setButtonRateLimit(function() {t.removeClass('disabled');}), e.analytics.trackGAEvent('edit_save', 'failed', r.error)), e.component.setPosition();}
          });
        },
        _delete: function(t) {
          var i = e.component.activeComponent, n = setTimeout(function() {
            var t = i.find('.modalStep.processing');
            new e.loader(t), t.addClass('active loading');
          }, e.component.loadDelay);
          t.addClass('active'), $.ajax({
            url: '/resource/',
            type: 'POST',
            dataType: 'json',
            data: { save_id: e.component.params.id, user: 1, delete_save: 1, request_token: e.config.requestToken },
            error: function(t) {clearTimeout(n), e.analytics.trackGAEvent('delete_save', 'error', t.responseText), i.find('.modalStep').removeClass('active loading');},
            success: function(r) {
              if (clearTimeout(n), 1 === r.status) {
                var o = i.find('.modalStep.complete');
                i.find('.modalStep').removeClass('loading'), o.find('.completeMessage').html(e.component.messages.DELETED), o.addClass('active'), e.analytics.trackGAEvent('delete_save', 'success', 'save_modal'), e.component.hide(1200), e.redirect(r.redirect, 50);
              } else i.find('.modalStep').removeClass('active loading'), e.setButtonRateLimit(function() {t.removeClass('disabled');}), e.analytics.trackGAEvent('delete_save', 'failed', r.error);
            }
          });
        },
        loadModal: function(t) {
          var i = e.component.params, n = i.id;
          if (!n) return !1;
          var r = e.component.activeComponent, o = r.find('.collectionsContainer'), s = setTimeout(function() {o.addClass('isLoader loading'), new e.loader(o, 2);}, e.component.loadDelay),
              a = { user: 1, request_token: e.config.requestToken }, l = r.find('.display').outerHeight(), c = Math.max(20, .5 * (l - i.height)), d = Math.min(i.height, l - 40),
              u = r.find('.displayItem');
          u.css({ 'background-color': i.bg, 'background-image': 'url(' + i.image + ')', height: d + 'px', top: c + 'px' }), u.prev('.displayBackground').css({
            'background-color': i.bg,
            'background-image': 'url(' + i.image + ')'
          }), a.save_id = n, t ? a.edit_save_details = 1 : (a.user = 1, a.resave_details = 1, r.find('.description').val(i.description)), $.ajax({
            url: '/resource/',
            type: 'POST',
            dataType: 'json',
            data: a,
            error: function(t) {clearTimeout(s), o.removeClass('loading'), e.analytics.trackGAEvent('load_save', 'error', t.responseText);},
            success: function(n) {
              if (clearTimeout(s), 1 === n.status) {
                if (r.find('.collections').html(n.collections), t) {
                  var a = r.find('.website');
                  r.find('.description').val(n.description), n.website ? a.val(n.website) : (a.parents('.meta').addClass('noWebsite'), a.parent().remove()), r.find('.deleteTrigger').parent().addClass('isEdit');
                } else r.find('.mediaDescription').val(i.description), n.has_saved && r.find('.descriptionContainer').before(n.has_saved);
                e.component.setPosition(), e.analytics.trackGAEvent('load_save', 'success', 'save_modal');
              } else e.analytics.trackGAEvent('load_save', 'failed', n.error);
              o.removeClass('loading');
            }
          });
        },
        loadModalBookmarklet: function(t) {
          var i = e.data, n = e.save.activeComponent, r = n.find('.collectionsContainer'), o = setTimeout(function() {r.addClass('isLoader loading'), new e.loader(r, 2);}, e.component.loadDelay),
              s = { user: 1, request_token: e.config.requestToken }, a = n.find('.display').outerHeight(), l = this.scaleByWidth(i.height, i.width, 236)[0], l = Math.min(l, a - 40),
              c = Math.max(20, .5 * (a - l)), d = n.find('.displayItem');
          l > a - 40 && d.find('.expandItemWrapper').addClass('collapsed'), d.css({
            'background-color': i.bg,
            'background-image': 'url(' + i.media + ')',
            height: l + 'px',
            top: c + 'px'
          }), d.prev('.displayBackground').css({
            'background-color': i.bg,
            'background-image': 'url(' + i.media + ')'
          }), s.user = 1, s.collections = 1, n.find('.description').val(i.description), $.ajax({
            url: '/resource/',
            type: 'POST',
            dataType: 'json',
            data: s,
            error: function(t) {clearTimeout(o), r.removeClass('loading'), e.analytics.trackGAEvent('load_save', 'error', t.responseText);},
            success: function(t) {clearTimeout(o), 1 === t.status ? (n.find('.collections').html(t.collections), e.analytics.trackGAEvent('load_save', 'success', 'save_modal')) : e.analytics.trackGAEvent('load_save', 'failed', t.error), r.removeClass('loading');}
          });
        },
        scaleByWidth: function(e, t, i) {
          e = parseInt(e);
          var n = i / (t = parseInt(t)), r = e, o = t;
          return t > i && (r = Math.round(e * n), o = i), [r, o];
        }
      };
    }(App),
    function(e) {
      function t(t, i, n, r) {
        var o, s = e.config.gridItemWidth, a = .4, l = i.gutter;
        if (this.id = 9999999 * Math.random(), this.type = i.type, this.options = i, this.container = t, this.hasContainer = i.hasOwnProperty('hasContainer') && !0 === i.hasContainer, this.scroller = this.hasContainer ? t.parents('.gridItemsScroller') : e.$window, this.eventNamespace = i.isRelated ? '.related' : '.grid', this.order = [], this.childrenItemInfo = {}, this.columnLengths = [], this.columns = i.minCols, this.minCols = i.minCols, this.containerWidth = 0, this.pendingRequest = !1, this.request = !1, e.save.relatedAjaxPending) return !1;
        if (r.feed) {
          var c = !1;
          r.hasOwnProperty('pagination') ? c = r.pagination : 'undefined' != typeof PaginationParams && (c = PaginationParams), this.pagination = new e.pagination(c, t);
        }
        this.pagination.loading = !0, i.isRelated && i.isModal && this.buildGridChildren(n), this.children = t.children(), this.hasItems() && (e.isMobile && (s -= 20), i.isFixedItem && (s = i.isFixedItem.width, a = i.isFixedItem.scale, l = i.isFixedItem.gutter), o = s, i.widthScale && (o = s + 5 * Math.round(s * a / 5)), this.widthScale = i.widthScale, this.gutter = l, this.minItemWidth = s + l, this.maxItemWidth = o + l, this.setDimensions(), this.prepareGridChildren(!0), this.addListeners(), this.onGridItemsLayoutComplete('initialize grid'));
      }

      var i = {
        getNumColumnsInContainer: function(t) {
          var i = e.config.gridItemWidth + this.gutter, n = t.parents('.singleColumn').outerWidth();
          return Math.min(Math.max(Math.floor(n / i), this.minCols), e.config.gridMaxColumns);
        }, updateNumColumns: function() {e.$window.trigger('onBodyColumnsChanged');}
      };
      $.extend(e.columnManager, i);
      var n = function() {this.top = null, this.bottom = null, this.height = null, this.scale = null, this.columnIndex = null, this.promoted = !1, this.hasListeners = !1, this.hasSentImpression = !1;};
      n.prototype = {
        setScale: function(e, t, i) {this.scale = Math.min(e.gridItemWidth * (t / i), e.gridItemMaxHeight) / e.gridItemWidth;},
        calculateHeight: function() {this.height = this.itemWrapper.height();},
        setHeight: function(e, t) {t && (e += 23), this.height = e;},
        build: function(t, i) {
          if ('save' === t.type) {
            var n = 'undefined' !== t.promoted && t.promoted, r = (E = t.images)['1x'], o = [r.url + ' 1x', E['2x'].url + ' 2x'];
            n || o.push(E['3x'].url + ' 3x'), o = o.join(', '), n && (t.promoted = n, t.token = t.token), this.setScale(e.config, r.h, r.w);
            var s;
            s = e.isMobile ? this.scale * i : this.scale * e.config.gridItemWidth, this.setHeight(Math.floor(s), n);
            I = e.create({ DIV: { className: 'gridItem save' + (n ? ' promoted' : '') } });
            e.set(I, 'data-id', t.id), e.set(I, 'data-s', this.scale);
            var a = e.create({ DIV: { className: 'gridItemWrapper' } }), l = e.create({ DIV: { className: 'gridItemInnerWrap' } }),
                c = e.create({ DIV: { className: 'gridImageHeight', style: 'padding-bottom:' + 100 * this.scale + '%;' } });
            gridItemUrl = n ? t.click_url : '/save/' + t.id + '/';
            var d = e.create({ DIV: { className: 'gridItemCover' } }), u = e.create({ IMG: { alt: t.description, className: 'gridItemImage', src: r.url, srcset: o } }),
                p = { className: 'gridItemLink', href: gridItemUrl, style: 'background-color:' + t.background + ';' };
            if (n) {
              var h = e.create({ DIV: { className: 'promotedBy', innerHTML: 'Promoted by <span>' + t.promoted.advertiser + '</span>' } });
              p.target = '_blank', p.rel = 'nofollow';
            }
            return p = e.create({ A: p }), n || c.appendChild(d), c.appendChild(u), p.appendChild(c), l.appendChild(p), n && l.appendChild(h), a.appendChild(l), I.appendChild(a), I;
          }
          if ('collection' === t.type) {
            I = e.create({ DIV: { className: 'gridItem collection' } });
            e.set(I, 'data-id', t.id);
            var a = e.create({ DIV: { className: 'gridItemWrapper' } }), l = e.create({ DIV: { className: 'gridItemInnerWrap' } }),
                f = e.create({ DIV: { className: 'gridItemDisplay', style: 'background-color:' + t.background + ';' } }), p = e.create({ A: { className: 'gridItemLink', href: t.url } }),
                m = e.create({ DIV: { className: 'detail' + (t.is_search ? ' search' : '') } }),
                g = (e.create({ A: { className: 'name', href: t.url, innerHTML: t.name } }), e.create({ SPAN: { className: 'icons' } })), v = e.create({ DIV: { className: 'thumbs' } }),
                y = e.create({ DIV: { className: 'cover', innerHTML: '<div class="dim"></div>' } });
            e.hasOwnProperty(t.cover, '1x') && (y.style = 'background-image:url(' + t.cover['2x'] + ');');
            for (var b = 0; b < 2; b += 1) {
              var w = e.create({ DIV: { className: 'thumb', innerHTML: '<div class="dim"></div>' } }), x = t.thumbs[b];
              x && e.hasOwnProperty(x, '2x') && (e.isMobile ? w.style = 'background-image:url(' + x['1x'] + ');' : w.style = 'background-image:url(' + x['2x'] + ');'), v.appendChild(w);
            }
            if (p.appendChild(y), p.appendChild(v), f.appendChild(p), e.json.page.user.is_my_profile) {
              var C = e.create({ SPAN: { className: 'rearrange', innerHTML: 'Drag to Arrange' } });
              f.appendChild(C);
            }
            l.appendChild(f), a.appendChild(l), t.is_private && g.appendChild(e.create({ SPAN: { className: 'private' } })), t.is_collab && g.appendChild(e.create({ SPAN: { className: 'collab' } }));
            $ = e.create({ A: { className: 'name', href: t.url, innerHTML: t.name } });
            if (t.is_search) {
              var T = e.create({ DIV: { className: 'owner' } }), k = e.create({ DIV: { className: 'ownerImageContainer' } }),
                  _ = e.create({ IMG: { alt: 'Explore ' + t.description + ' &rsquo;s Profile', className: 'ownerImage', src: t.owner_image['1x'] } }),
                  S = e.create({ A: { className: 'ownerName', href: t.owner_url, innerHTML: t.owner_name } });
              k.appendChild(_), T.appendChild(k), T.appendChild($), T.appendChild(S), m.appendChild(T);
            } else m.appendChild($), m.appendChild(g);
            return a.appendChild(m), I.appendChild(a), I;
          }
          if ('people' === t.type) {
            var E = t.images, o = [E['1x'] + ' 1x', E['2x'] + ' 2x'].join(', '), I = e.create({ DIV: { className: 'gridItem people' } });
            e.set(I, 'data-id', t.id);
            var a = e.create({ DIV: { className: 'gridItemWrapper' } }), f = e.create({ DIV: { className: 'gridItemDisplay' } }),
                A = e.create({ A: { className: 'imageContainer', href: t.url, style: 'background-color:' + t.background + ';' } }),
                D = e.create({ IMG: { alt: 'Explore ' + t.display_name + '&rsquo;s Profile', className: 'image', src: E['1x'], srcset: o } }),
                $ = e.create({ A: { className: 'name', href: t.url, innerHTML: t.display_name } }), P = e.json.page.user;
            if (A.appendChild(D), f.appendChild(A), f.appendChild($), !t.is_my_profile) {
              var M = e.create({ DIV: { className: 'gridItemActions' } }), L = e.create({ BUTTON: { className: 'profileSignup button blue', innerHTML: '<span>Follow</span>' } });
              if (P.isLoggedIn) {
                var O;
                t.is_following ? (O = 'profileUnfollow button grey', L.innerHTML = '<span>Unfollow</span>') : O = 'profileFollow button blue', L.className = O;
              }
              e.set(L, 'data-url', t.url), M.appendChild(L), f.appendChild(M);
            }
            return a.appendChild(f), I.appendChild(a), I;
          }
          if ('interest' === t.type) {
            I = e.create({ DIV: { className: 'gridItem interest' + (t.is_following ? ' active' : '') } });
            e.set(I, 'data-id', t.id);
            var a = e.create({ DIV: { className: 'gridItemWrapper' } }), f = e.create({ DIV: { className: 'gridItemDisplay' } }),
                N = e.create({ DIV: { className: 'interestName', innerHTML: t.name } });
            return f.appendChild(N), a.appendChild(f), I.appendChild(a), I;
          }
        }
      }, t.prototype = {
        addListeners: function() {
          var t = this;
          e.hasOwnProperty(e[t.type], 'addGridItemListeners') && e[t.type].addGridItemListeners(t), this.scroller.on('scroll.inviewport', _.throttle(function() {e.hasOwnProperty(e[t.type], 'addGridItemListeners') && e[t.type].addGridItemListeners(t);}, 200)), e.$window.on('onBodyColumnsChanged' + t.eventNamespace, _.debounce(function() {t.repositionGridChildren();}, 200)), this.addScrollListeners(), e.isMobile || e.$window.on('scroll.scrolltop', _.throttle(function() {e.browser.showScrollTop($('body,html'), e.$body, e.browser.getScrollPosition());}, 500));
        },
        addScrollListeners: function() {
          var e = this;
          e.scroller.off('scroll.scrollmonitor'), e.scroller.on('scroll.scrollmonitor', _.throttle(function() {e.onScrollLoadGrid();}, 300));
        },
        onScrollLoadGrid: function() {
          if (this.pagination.isLoading()) return !1;
          this.askMoreGridItems();
        },
        onBeforeGridItemsLoad: function(e, t) {this.pagination.showLoader(!1);},
        onGridItemsLayoutComplete: function(t) {
          var i = this.type;
          e.hasOwnProperty(e[i], 'addGridItemListeners') && e[i].addGridItemListeners(this), this.pagination.loading = !1, this.askMoreGridItems();
        },
        needsMoreGridItemsInViewport: function() {return this.getYOffset() + this.getFilledHeight() < e.browser.getScrollPosition() + e.browser.height;},
        askMoreGridItems: function() {
          if (!this.pagination.loading) if (this.pagination.hasMoreItems()) if (this.needsMoreGridItemsInViewport()) this.getMoreGridItems(!0); else {
            var t, i, n, r, o;
            this.hasContainer ? (i = (t = this.scroller.scrollTop()) > this.pagination.lastScrollTop, n = this.scroller.height(), r = this.container.parents('.content').height()) : (i = (t = e.browser.getScrollPosition()) > this.pagination.lastScrollTop, n = e.browser.height, r = this.getYOffset() + this.getFilledHeight()), o = Math.max(r - n - t, 0), this.pagination.lastScrollTop = t, o < this.pagination.settings.distance && i && this.getMoreGridItems(!0);
          } else this.pagination.showPagination();
        },
        cancelPreviousRequest: function() {this.pendingRequest && (this.pendingRequest.onreadystatechange = function() {}, this.pendingRequest.abort());},
        getMoreGridItems: function() {
          var t = this;
          if (t.pagination.loading) return !1;
          if (t.pagination.hasMoreItems()) {
            var i = t.pagination.settings.hasOwnProperty('page') ? t.pagination.settings.page : e.pageName;
            t.pagination.loading = !0, t.pagination.showLoader(!0), t.pagination.settings.current++, t.request = {
              page: i,
              url: window.location.pathname,
              uri: window.location.href,
              page_number: t.pagination.settings.current,
              request_token: e.config.requestToken,
              show_promoted: !1
            }, e.ads && (t.request.show_promoted = e.ads.active), t.options.isRelated && (t.request.save_id = t.pagination.settings.save_id), $.ajax({
              url: '/resource/',
              type: 'POST',
              dataType: 'json',
              data: t.request,
              error: function(e) {t.pendingRequest = !1, t.handleNewGridItems(!1);},
              success: function(i, n) {void 0 !== i && (t.options.isRelated ? parseInt(i.save_id) === e.save.current.id && (t.pendingRequest = !1, t.handleNewGridItems(i.data)) : (t.pendingRequest = !1, t.handleNewGridItems(i.data)));}
            });
          }
        },
        setDimensions: function() {this.resetContainerWidth(), this.setContainerWidth(), this.columns = this.calculateNumColumns(), this.setItemOuterWidth(), this.setItemInnerWidth();},
        resetContainerWidth: function() {this.container.css('width', '');},
        setContainerWidth: function() {
          var t;
          t = e.isMobile ? this.container.innerWidth() : e.browser.width, this.options.hasContainer && (t = e.isMobile ? this.container.innerWidth() : this.container.width()), this.containerWidth = Math.max(this.minCols * this.minItemWidth, t);
        },
        setItemOuterWidth: function() {this.itemOuterWidth = Math.min(Math.floor(this.containerWidth / this.columns), this.maxItemWidth);},
        setItemInnerWidth: function() {e.isMobile ? this.itemInnerWidth = this.itemOuterWidth - this.gutter : this.itemInnerWidth = this.itemOuterWidth;},
        setScaleRatio: function() {return e.isMobile ? this.minItemWidth / this.itemInnerWidth : this.minItemWidth / this.itemOuterWidth;},
        buildGridChildren: function(e) {
          if (e) for (var t = 0; t < e.length; t += 1) {
            var i = e[t], r = new n, o = $(r.build(i));
            r.itemWrapper = o, this.container.append(o);
          }
        },
        arrayToObject: function(e) {
          var t = {}, i = e.length, n = 0;
          for (n; n < i; n += 1) void 0 !== e[n] && (t[e[n].id] = e[n]);
          return t;
        },
        prepareGridChildren: function(t) {
          var i, r;
          i = this.options.isRelated ? e.json.related.data : e.json.data, r = this.arrayToObject(i);
          for (var o = 0; o < this.children.length; o += 1) {
            var s = this.children[o], a = new n, l = s.getAttribute('data-id'), c = r[l], d = !1;
            if (a.id = l, a.itemWrapper = $(s), c) {
              if (a.promoted = c.promoted, d = c.promoted, a.promoted && !e.ads.active) continue;
              c.promoted && (a.token = c.token);
            }
            this.options.isVariable ? (a.scale = parseFloat(s.getAttribute('data-s')), e.isMobile ? a.setHeight(Math.floor(a.scale * this.itemInnerWidth), c.promoted) : a.setHeight(Math.floor(a.scale * e.config.gridItemWidth), c.promoted)) : (this.itemHeight || (this.itemHeight = a.itemWrapper.find('.gridItemWrapper').innerHeight()), a.setHeight(this.itemHeight, d)), this.childrenItemInfo[l] = a, this.positionItem(a), this.order.push(l);
          }
          this.updateContainerDimension();
        },
        buildItems: function(t) {
          for (var i = 0; i < t.length; i += 1) {
            var r, o = t[i], s = new n;
            r = e.isMobile ? $(s.build(o, this.itemInnerWidth)) : $(s.build(o)), s.id = o.id, s.itemWrapper = r, s.promoted = o.promoted, s.promoted && !e.ads.active || (o.promoted && (s.token = o.token), 'collection' !== o.type && 'people' !== o.type && 'interest' !== o.type || s.setHeight(this.itemHeight), s = this.positionItem(s), this.childrenItemInfo[o.id] = s, this.order.push(o.id), this.container.append(r));
          }
          this.updateContainerDimension();
        },
        positionItem: function(e) {
          if (0 === this.columnLengths.length) {
            if (this.itemWidth !== this.itemOuterWidth) {
              var t = e.itemWrapper.find('.gridItemWrapper'), i = t.css('margin-top'), n = t.css('padding-top'), r = t.css('margin-bottom'), o = t.css('padding-bottom');
              this.topItemMargin = parseInt(i, 10) + parseInt(n, 10), this.bottomItemMargin = parseInt(r, 10) + parseInt(o, 10), this.itemWidth = this.itemOuterWidth;
            }
            this.columnLengths = new Array(this.columns), this.setShortestColumnIndex();
          }
          return this.positionItemInColumn(e, this.shortestColumnIndex);
        },
        positionItemInColumn: function(t, i) {
          i = Math.max(0, i), i = Math.min(this.columnLengths.length - 1, i);
          var n = this.columnLengths[i], r = t.height + this.topItemMargin + this.bottomItemMargin + n, o = { visibility: 'visible' };
          return this.options.isVariable && (o.width = e.isMobile ? this.itemOuterWidth : this.itemInnerWidth, o.top = n + 'px', o.left = i * this.itemWidth + 'px'), t.itemWrapper.css(o), t.top = n, t.bottom = r, t.columnIndex = i, this.columnLengths[i] = r, this.setShortestColumnIndex(), t;
        },
        updateGridChildren: function() {this.children = this.container.children(), this.numItemsOnLastPage = this.children.length;},
        setShortestColumnIndex: function() {
          this.shortestColumnIndex = 0;
          for (var e = 0; e < this.columnLengths.length; e += 1) this.columnLengths[e] = this.columnLengths[e] || 0, this.columnLengths[e] < this.columnLengths[this.shortestColumnIndex] && (this.shortestColumnIndex = e);
        },
        updateContainerDimension: function() {this.container.css({ height: Math.max.apply(Math, this.columnLengths) + 'px' }), e.browser.cacheDimensions();},
        hasItems: function() {return this.children.length && this.children.length > 0 && 'DIV' === this.children[0].nodeName;},
        updateJson: function(t) {this.options.isRelated ? e.json.related.data = e.json.related.data.concat(t) : e.json.data = e.json.data.concat(t);},
        handleNewGridItems: function(t) {
          if (this.pendingRequest) return !1;
          this.onBeforeGridItemsLoad('handleNewGridItems'), t && t.length > 0 ? (this.pagination.settings.has_more = !0, this.updateJson(t), e.isMobile ? this.buildItems(t, this.itemInnerWidth) : this.buildItems(t), this.pagination.handleScrollImpression()) : this.pagination.settings.has_more = !1, this.updateGridChildren(t.length), this.onGridItemsLayoutComplete('handleNewGridItems');
        },
        positionGridChildren: function() {
          for (var e = 0; e < this.children.length; e += 1) {
            var t = this.children[e].getAttribute('data-id');
            this.positionItem(this.childrenItemInfo[t]);
          }
          this.updateContainerDimension();
        },
        repositionGridChildren: function() {
          this.columns;
          this.setDimensions(), this.columnLengths = [];
          for (var t = 0; t < this.order.length; t += 1) {
            var i = this.childrenItemInfo[this.order[t]];
            e.isMobile && i.setHeight(Math.floor(i.scale * this.itemInnerWidth), i.promoted), this.positionItem(i);
          }
          this.updateContainerDimension(), this.onGridItemsLayoutComplete('repositionGridChildren');
        },
        repositionItemsInColumn: function(e) {
          this.columnLengths[e] = 0;
          var t = _.filter(this.childrenItemInfo, function(t) {return t.columnIndex === e;});
          t = _.sortBy(t, function(e) {return e.top;}), _.each(t, function(t) {this.positionItemInColumn(t, e);}.bind(this)), this.updateContainerDimension();
        },
        calculateNumColumns: function() {
          var t;
          return t = this.widthScale && !e.isMobile ? Math.max(Math.round(this.containerWidth / this.minItemWidth), Math.floor(this.containerWidth / this.maxItemWidth)) : Math.max(Math.floor(this.containerWidth / this.minItemWidth), Math.floor(this.containerWidth / this.maxItemWidth)), Math.max(this.minCols, t);
        },
        inViewport: function(e, t) {
          var i = e.height, n = t.offset + e.top, r = n + i, o = t.top, s = t.bottom;
          if (e.promoted) {
            var a;
            t.height;
            return r <= s && n >= o || (a = .2 * i, s - a >= n && r - a > o);
          }
          return r > o && n < s;
        },
        updateGridItemHeight: function(e) {this.childrenItemInfo[e].calculateHeight();},
        getGridItemColumn: function(e) {return this.childrenItemInfo[e] ? this.childrenItemInfo[e].columnIndex : 0;},
        getFilledHeight: function() {return this.options.isVariable ? this.columnLengths[this.shortestColumnIndex] : Math.max.apply(Math, this.columnLengths);},
        getYOffset: function() {return this.yOffset ? this.yOffset : this.yOffset = this.container.offset().top || 0;}
      }, e.gridLayout = function(i) {
        var n = i.container || e.$app.find('.gridItems'), r = {
          minCols: e.isMobile ? 1 : e.config.gridMinColumns,
          maxCols: e.config.gridMaxColumns,
          hasContainer: i.hasContainer || !1,
          widthScale: i.widthScale || !1,
          isRelated: i.isRelated || !1,
          isVariable: i.variable,
          isModal: i.isModal || !1,
          isFixedItem: i.isFixedItem,
          gutter: i.isFixedItem ? i.isFixedItem.gutter : e.config.gridItemGutter,
          type: i.type
        }, o = !!i.isRelated && i.data;
        this.id = i.id, this.layoutManager = new t(n, r, o, i);
      };
    }(App),
    function(e) {

      var t = {
        EDIT_BTN: { classes: 'editTrigger', text: 'Edit' },
        FOLLOWING_BTN: { classes: 'collectionUnfollow', text: 'Unfollow' },
        FOLLOW_BTN: { classes: 'collectionFollow', text: 'Follow' },
        SIGNUP_BTN: { classes: 'signupTrigger', text: 'Follow' }
      };
      e.collection = {
        current: {},
        validateForm: {
          create: function(t) {
            var i = t.find('.collectionName').val(), n = t.find('.createTrigger');
            return '' !== $.trim(i) ? (e.validate.form(t), n.removeClass('disabled'), !0) : (e.validate.form(t, { name: 'Name required' }), n.addClass('disabled'), !1);
          }, edit: function() {return !0;}
        },
        init: function() {this.addListeners(), this.starterFunctions();},
        addListeners: function() {
          var t = e.$app;
          e.config.isLoggedIn ? (t.on('click', '.createTrigger', function() {
            $(this).parent();
            return e.component.load({ component: 'create-collection', modal: 'createCollectionModal' }), !1;
          }), t.find('.CollectionHeader').on('click', '.editTrigger', function() {
            var t = $(this), i = t.parent();
            return e.component.load({ component: 'edit-collection', modal: 'editCollectionModal', id: i.attr('data-id'), link: t.attr('data-url') }), !1;
          }), t.on('click', '.collectionFollow', function() {
            var t = $(this);
            return t.hasClass('disabled') || e.collection.follow(t), !1;
          }), t.on('click', '.collectionUnfollow', function() {
            var t = $(this);
            return t.hasClass('disabled') || e.collection.unfollow(t), !1;
          })) : (t.on('click', '.signupTrigger', function(t) {
            return e.component.load({
              component: e.page.accessUI.component,
              modal: e.page.accessUI.modal,
              trigger: $(this)
            }), !1;
          }), t.on('click', '.profileSignup', function(t) {return e.component.load({ component: e.page.accessUI.component, modal: e.page.accessUI.modal, trigger: $(this) }), !1;}));
        },
        addGridItemListeners: function(t) {
          if (e.isMobile) return !1;
          var i = t.order.length, n = 0;
          for (n; n < i; n += 1) {
            var r = t.order[n], o = t.childrenItemInfo[r], s = o.itemWrapper, a = s.find('.gridItemInnerWrap');
            a.find('.gridItemLink');
            t.inViewport(o, t.container.offset().top) ? (a.on('mouseenter.gridItemInnerWrap', function() {e.collection.buildGridActions($(this));}).on('mouseleave.gridItemInnerWrap', function() {$(this).find('.gridItemActions,.gridItemGradient').remove();}), s.addClass('inView')) : (s.removeClass('inView'), a.off('mouseenter.gridItemInnerWrap'), a.off('mouseleave.gridItemInnerWrap').find('.gridItemActions,.gridItemGradient').remove());
          }
        },
        buildGridActions: function(i) {
          var n = e.json, r = n.data, o = i.parents('.gridItem');
          if (i.find('.gridItemActions').length < 1) {
            var s = o.attr('data-id'), a = i.find('.gridItemLink').attr('href');
            if (!s) return;
            var l, c, d = _.filter(r, function(e) {return e.id === parseInt(s);})[0];
            n.page.user.isLoggedIn ? d.is_collaborator ? (l = t.EDIT_BTN.classes, c = t.EDIT_BTN.text) : d.is_following ? (l = t.FOLLOWING_BTN.classes, c = t.FOLLOWING_BTN.text) : d.is_following || (l = t.FOLLOW_BTN.classes, c = t.FOLLOW_BTN.text) : (l = t.SIGNUP_BTN.classes, c = t.SIGNUP_BTN.text), html = '<button type="button" data-url="' + a + '" class="' + l + '"><span>' + c + '</span></button>', html = '<div class="gridItemActions">' + html + '</div>', i.find('.gridItemDisplay').prepend(html);
          }
        },
        updateAllGridActions: function(t) {
          var i = e.json.data;
          for (var n in i) 'follow' === t ? i[n].is_following = !0 : 'unfollow' === t && (i[n].is_following = !1);
        },
        updateItemAction: function(t, i) {
          var n = t.parents('.gridItem').attr('data-id'), r = e.json.data;
          for (var o in r) if (r[o].id == n) {
            'follow' === i ? r[o].is_following = !0 : 'unfollow' === i && (r[o].is_following = !1);
            break;
          }
        },
        starterFunctions: function() {e.$app.hasClass('ownsProfile') && !e.isMobile && this.organizer();},
        organizer: function() {
          var t = e.$app.find('.sort');
          if (!(t.length < 1)) {
            var i = !1, n = 0, r = function() {
              var e = [];
              return t.find('.collection').each(function(t) {
                var i = $(this).attr('data-id');
                void 0 !== i && e.push(i);
              }), e;
            };
            t.sortable({
              cursor: 'move',
              placeholder: 'gridItem collection placeholder',
              items: '.collection:not(.newGridContent)',
              revert: 180,
              tolerance: 'pointer',
              helper: 'clone',
              start: function(e, t) {
                var o = $(t.item), s = (o.width(), o.attr('data-id'));
                t.placeholder.html('<div class="gridItemWrapper"><div class="gridItemDisplay"><div class="gridItemLink"></div></div><div class="detail"><div class="name"></div></div></div></div>'), i = r(), n = $.inArray(s, i);
              },
              stop: function(e, t) {
                var s = $(t.item), a = s.attr('data-id'), l = s.prev('.gridItem').attr('data-id'), c = s.next('.gridItem').attr('data-id'), d = r();
                $.inArray(a, d) !== n && d.length > 0 && i.toString() !== d.toString() && o(a, l, c, d), n = 0, i = !1;
              }
            });
            var o = function(t, i, n, r) {
              $.ajax({
                url: '/resource/',
                type: 'POST',
                dataType: 'json',
                data: { user: 1, arrange: 1, collection_id: t, before_collection_id: i || !1, after_collection_id: n || !1, request_token: e.config.requestToken },
                error: function(t) {e.analytics.trackGAEvent('arrange_collections', 'error', t.responseText);},
                success: function(t) {1 === t.status ? e.analytics.trackGAEvent('arrange_collections', 'success') : e.analytics.trackGAEvent('arrange_collections', 'failed', t.msg);}
              });
            };
          }
        },
        create: function(t) {
          var i = e.component.activeComponent, n = 'create_collection', r = setTimeout(function() {
            var t = i.find('.modalStep.processing');
            new e.loader(t), t.addClass('active loading');
          }, e.component.loadDelay), o = {
            collection: 1,
            create: 1,
            name: i.find('.name').val(),
            description: i.find('.description').val(),
            category: i.find('.collectionCategory option:selected').val(),
            privacy: !!i.find('.privacy:checked').prop('checked'),
            request_token: e.config.requestToken
          };
          t.addClass('active'), $.ajax({
            url: '/resource/',
            type: 'POST',
            dataType: 'json',
            data: o,
            error: function(t) {clearTimeout(r), e.analytics.trackGAEvent(n, 'error', t.responseText), i.find('.modalStep').removeClass('active loading');},
            success: function(o) {clearTimeout(r), 1 === o.status ? (i.find('.modalStep.complete').addClass('active'), i.find('.modalStep').removeClass('loading'), 'profile-collections' === e.pageName ? e.redirect('/' + e.json.page.user.username + '/', 50) : e.component.hide(1200), e.analytics.trackGAEvent(n, 'success', 'page')) : (e.validate.form(i.find('.meta.column'), o.errors), i.find('.modalStep').removeClass('active loading'), e.setButtonRateLimit(function() {t.removeClass('disabled');}), e.analytics.trackGAEvent(n, 'failed', o.error)), e.component.setPosition();}
          });
        },
        loadModal: function() {
          var t = e.component.params, i = e.component.activeComponent, n = 'load_collection', r = i.find('.collectionsContainer'),
              o = setTimeout(function() {r.addClass('isLoader loading'), new e.loader(r, 2);}, e.component.loadDelay),
              s = { collection: 1, modal: 1, url: t.link, request_token: e.config.requestToken },
              a = i.find('.display').outerHeight(), l = Math.max(20, .5 * (a - t.height)), c = Math.min(t.height, a - 40), d = i.find('.displayItem');
          t.height > a - 40 && d.find('.expandItemWrapper').addClass('collapsed'), d.css({
            'background-color': t.bg,
            'background-image': 'url(' + t.image + ')',
            height: c + 'px',
            top: l + 'px'
          }), d.prev('.displayBackground').css({ 'background-color': t.bg, 'background-image': 'url(' + t.image + ')' }), $.ajax({
            url: '/resource/',
            type: 'POST',
            dataType: 'json',
            data: s,
            error: function(t) {clearTimeout(o), r.removeClass('loading'), e.analytics.trackGAEvent(n, 'error', t.responseText);},
            success: function(t) {
              if (clearTimeout(o), 1 === t.status) {
                var s = i.find('.privacy'), a = s.prev('.toggleSwitch');
                i.find('.name').val(t.name), i.find('.description').val(t.description), i.find('.collectionCategory').val(t.category), i.find('.collaborators').html(t.collaborators), s.prop('checked') ? 0 == t.is_private && (a.removeClass('on').addClass('off'), s.prop('checked', !1)) : 1 == t.is_private && (a.removeClass('off').addClass('on'), s.prop('checked', !0)), e.analytics.trackGAEvent(n, 'success', 'collection_modal');
              } else e.analytics.trackGAEvent(n, 'failed', t.error);
              r.removeClass('loading');
            }
          });
        },
        quickCreate: function() {
          var t = e.component.activeComponent, i = t.find('.collectionForm'), n = t.find('.createTrigger'), r = 'create_collection', o = (t.find('.privacy').prop('checked'), setTimeout(function() {
            var i = t.find('.modalStep.processing');
            new e.loader(i), i.addClass('active loading');
          }, e.component.loadDelay)), s = {
            collection: 1,
            create: 1,
            name: t.find('.collectionName').val(),
            description: '',
            category: '',
            privacy: !!t.find('.privacy:checked').prop('checked'),
            request_token: e.config.requestToken
          };
          $.ajax({
            url: '/resource/',
            type: 'POST',
            dataType: 'json',
            data: s,
            error: function(t) {e.analytics.trackGAEvent(r, 'error', t.responseText);},
            success: function(o) {
              if (e.validate.form(i, o.errors), 1 === o.status) {
                var s = t.find('.collections'), a = s.find('.item.active'), l = e.component.params && 'edit-save' === e.component.params.component ? '.saveTrigger' : '.item.active';
                s.find('.title.savedIn').after(o.html), a.length > 0 && (s.find('.title.all').after(a), a.removeClass('active')), t.find(l).trigger('click'), e.analytics.trackGAEvent(r, 'success', 'save_modal');
              } else e.validate.form(i, o.errors), e.setButtonRateLimit(function() {n.removeClass('disabled');}), e.analytics.trackGAEvent(r, 'failed', o.errors.message);
            },
            complete: function() {clearTimeout(o), t.find('.modalStep').removeClass('loading');}
          });
        },
        _delete: function(t) {
          var i = e.component.activeComponent, n = 'delete_collection', r = setTimeout(function() {
            var t = i.find('.modalStep.processing');
            new e.loader(t), t.addClass('active loading');
          }, e.component.loadDelay);
          t.addClass('active'), $.ajax({
            url: '/resource/',
            type: 'POST',
            dataType: 'json',
            data: { url: e.component.params.link, collection: 1, delete: 1, request_token: e.config.requestToken },
            error: function(t) {clearTimeout(r), e.analytics.trackGAEvent(n, 'error', t.responseText), i.find('.modalStep').removeClass('active loading');},
            success: function(o) {
              if (clearTimeout(r), 1 === o.status) {
                var s = i.find('.modalStep.complete');
                i.find('.modalStep').removeClass('loading'), e.$window.trigger('onBodyColumnsChanged'), s.find('.completeMessage').html(e.component.messages.DELETED), s.addClass('active'), 'collection' === e.pageName ? e.redirect('/' + e.json.page.user.username + '/', 50) : e.component.hide(1200), e.analytics.trackGAEvent(n, 'success', 'collection_modal');
              } else i.find('.modalStep').removeClass('active loading'), e.setButtonRateLimit(function() {t.removeClass('disabled');}), e.analytics.trackGAEvent(n, 'failed', o.errors);
            }
          });
        },
        follow: function(i) {
          var n = 'follow_collection', r = {
            button: i, data: { collection: 1, follow: 1, url: i.attr('data-url'), request_token: e.config.requestToken }, GAEventType: n, successCallback: function(r) {
              var o, s, a;
              1 === r.status ? (o = t.FOLLOWING_BTN.text, s = t.FOLLOWING_BTN.classes, a = 'success', e.collection.updateItemAction(i, 'follow')) : (o = t.FOLLOW_BTN.text, s = t.FOLLOW_BTN.classes, a = 'failed'), i.removeClass().addClass(s).html(o), e.analytics.trackGAEvent(n, a);
            }
          };
          e.analytics.trackGAEvent(n, 'clicked'), e.collection.autoLoadAjax(r);
        },
        unfollow: function(i) {
          var n = 'unfollow_collection', r = {
            button: i, data: { collection: 1, unfollow: 1, url: i.attr('data-url'), request_token: e.config.requestToken }, GAEventType: n, successCallback: function(r) {
              var o, s, a;
              1 === r.status ? (o = t.FOLLOW_BTN.text, s = t.FOLLOW_BTN.classes, a = 'success', e.collection.updateItemAction(i, 'unfollow')) : (o = t.FOLLOWING_BTN.text, s = t.FOLLOWING_BTN.classes, a = 'failed'), i.removeClass().addClass(s).html(o), e.analytics.trackGAEvent(n, a);
            }
          };
          e.analytics.trackGAEvent(n, 'clicked'), e.collection.autoLoadAjax(r);
        },
        autoLoadAjax: function(t) {
          var i;
          $.ajax({
            url: '/resource/',
            type: 'POST',
            dataType: 'json',
            data: t.data,
            error: function(n) {clearTimeout(i), e.setButtonRateLimit(function() {t.button.removeClass('disabled');}), e.analytics.trackGAEvent(t.GAEventType, 'error', n.responseText);},
            beforeSend: function() {i = setTimeout(function() {t.button.text('').addClass('disabled isLoader loading'), new e.loader(t.button, 2);}, e.component.loadDelay), e.analytics.trackGAEvent(t.GAEventType, 'clicked');},
            success: t.successCallback,
            complete: function() {clearTimeout(i), e.setButtonRateLimit(function() {t.button.removeClass('disabled');});}
          });
        },
        edit: function(t) {
          var i = e.component.activeComponent, n = 'edit_collection', r = setTimeout(function() {
                var t = i.find('.modalStep.processing');
                new e.loader(t), t.addClass('active loading');
              }, e.component.loadDelay), o = i.find('.name').val(), s = i.find('.description').val(), a = i.find('.collectionCategory option:selected').val(),
              l = !!i.find('.privacy:checked').prop('checked'),
              c = { collection: 1, edit: 1, url: e.component.params.link, name: o, description: s, category: a, privacy: l, request_token: e.config.requestToken };
          t.addClass('active'), $.ajax({
            url: '/resource/',
            type: 'POST',
            dataType: 'json',
            data: c,
            error: function(t) {clearTimeout(r), i.find('.modalStep').removeClass('active loading'), e.analytics.trackGAEvent(n, 'error', t.responseText);},
            success: function(o) {
              if (clearTimeout(r), 1 === o.status) i.find('.modalStep.complete').addClass('active'), i.find('.modalStep').removeClass('loading'), 'collection' === e.pageName && o.location ? e.redirect(o.location, 50) : e.component.hide(1200), e.analytics.trackGAEvent(n, 'success', 'save_modal'); else {
                var s = o.errors;
                e.validate.form(i.find('.meta.column'), s), i.find('.modalStep').removeClass('active loading'), e.setButtonRateLimit(function() {t.removeClass('disabled');}), e.analytics.trackGAEvent(n, 'failed', s);
              }
              e.component.setPosition();
            }
          });
        },
        inviteCollaborator: function(t) {
          var i = e.component.activeComponent, n = 'invite_collaborator', r = setTimeout(function() {
            var t = i.find('.inviteLoader.processing');
            new e.loader(t), t.addClass('active loading');
          }, e.component.loadDelay), o = i.find('.collaboratorEmail').val(), s = { collaborator: 1, invite: 1, url: e.component.params.link, collaborator: o };
          t.addClass('active'), $.ajax({
            url: '/resource/',
            type: 'POST',
            dataType: 'json',
            data: s,
            error: function(t) {e.analytics.trackGAEvent(n, 'error', t.responseText);},
            success: function(t) {e.validate.form(i.find('.collaboratorContainer'), t.errors), 1 === t.status ? (i.find('.collaborators').append(t.html), e.analytics.trackGAEvent(n, 'success', 'collection_modal')) : e.analytics.trackGAEvent(n, 'failed', t.errors);},
            complete: function() {clearTimeout(r), e.setButtonRateLimit(function() {t.removeClass('active');}), i.find('.inviteLoader').removeClass('loading');}
          });
        },
        removeCollaborator: function(t) {
          var i = e.component.activeComponent, n = 'remove_collaborator', r = setTimeout(function() {
            var t = i.find('.inviteLoader.processing');
            new e.loader(t), t.addClass('active loading');
          }, e.component.loadDelay), o = t.parents('.item').attr('data-url'), s = { collaborator: 1, remove: 1, url: e.component.params.link, collaborator: o };
          $.ajax({
            url: '/resource/',
            type: 'POST',
            dataType: 'json',
            data: s,
            error: function(t) {e.analytics.trackGAEvent(n, 'error', t.responseText);},
            success: function(r) {e.validate.form(i.find('.collaboratorContainer'), r.errors), 1 === r.status ? (t.parents('.item').remove(), e.analytics.trackGAEvent(n, 'success', 'collection_modal')) : (e.validate.form(i.find('.collaboratorContainer'), r.errors), e.analytics.trackGAEvent(n, 'failed', r.errors));},
            complete: function() {clearTimeout(r), e.setButtonRateLimit(function() {t.removeClass('active');}), i.find('.inviteLoader').removeClass('loading');}
          });
        },
        getCollectionByID: function(e) {return $('.collection.gridItem').find('[data-id="' + e + '"]').parents('.collection');},
        destroy: function(e) {this.getCollectionByID(e).remove();},
        update: function(e) {}
      }, e.collection.HTML = t;
    }(App),
    function(e) {'function' == typeof define && define.amd ? define(['jquery'], e) : e(jQuery);}(function(e) {
      'use strict';

      function t(t, i) {
        e.extend(this, {
          _input: null,
          _items: null,
          _container: e(t),
          items: 'li',
          value: '',
          cache: [],
          queryCharLimit: 1,
          queryTimer: null,
          queryDelay: 100,
          highlight: !1,
          highlightClass: 'lfitem_match',
          highlightColor: '#ffde00',
          hiddenListClass: 'lflist_hidden',
          hiddenItemAttr: 'data-lfhidden',
          hiddenCount: 0,
          onFound: null
        }, i || {}), this._items = e(this.items, t), this._input = e(this.input), this._items.length && (this._input.length && this._input.on('keyup change', this._debounce(function() {
          var t = (this._input.val() || '').toLowerCase();
          (t = e.trim(t)) !== this.value && (this.value = t, t.length >= this.queryCharLimit ? this.query() : this.showAll());
        }, this.queryDelay, this)), this.addStyles(), this.indexing());
      }

      e.fn.lookingfor = function(e) {return this.each(function() {new t(this, e);});}, t.prototype = {
        addStyles: function() {
          var t, i = e('head'), n = e('<style>').get(0),
              r = [['.' + this.hiddenListClass + ' [' + this.hiddenItemAttr + ']', 'display: none'], ['.' + this.highlightClass, 'background: ' + this.highlightColor]];
          i.append(n), t = n.sheet || document.styleSheets[0];
          for (var o, s, a = 0; a < r.length; a++) o = r[a][0], s = r[a][1], t.insertRule ? t.insertRule(o + '{' + s + '}', 0) : t.addRule && t.addRule(o, s, 0);
        },
        indexing: function() {
          var t = this;
          this._items.each(function() {
            var i = e(this);
            t.cache.push({ node: this, html: this.innerHTML, text: (i.text() || '').toLowerCase(), hidden: !1 });
          });
        },
        query: function(t) {
          t = t || this.value, this.hiddenCount = 0;
          for (var i, n = new RegExp(t, 'ig'), r = e.proxy(this._paint, this), o = 0, s = this.cache.length; o < s; o++) -1 === (i = this.cache[o]).text.indexOf(t) ? (i.hidden || (i.hidden = !0, i.node.setAttribute(this.hiddenItemAttr, '')), this.hiddenCount += 1) : i.hidden && (i.hidden = !1, i.node.removeAttribute(this.hiddenItemAttr)), this.highlight && (i.matched && (i.matched = !1, i.node.innerHTML = i.html), i.hidden || (i.matched = !0, i.node.innerHTML = i.html.replace(n, r))), this.onFound && !i.hidden && this.onFound(i.node, t);
          this._container.addClass(this.hiddenListClass);
        },
        showAll: function() {
          if (this.hiddenCount) {
            for (var e, t = 0, i = this.cache.length; t < i; t++) (e = this.cache[t]).hidden = !1, e.node.removeAttribute(this.hiddenItemAttr), e.matched && (e.matched = !1, e.node.innerHTML = e.html);
            this._container.removeClass(this.hiddenListClass), this.hiddenCount = 0;
          }
        },
        _paint: function(e) {return '<span class="' + this.highlightClass + '">' + e + '</span>';},
        _debounce: function(e, t, i) {
          var n = null, r = this;
          return function() {
            var o = arguments;
            clearTimeout(n), n = setTimeout(function() {e.apply(i || r, o);}, t);
          };
        }
      };
    }),
    function(e) {

      e.useCanvas = !!document.createElement('canvas').getContext, e.useHistory = !!(window.history && window.history.pushState && window.history.replaceState), e.useLazyLoad = !window.navigator.userAgent.match(/ipad\.*OS 4_/gi), e.isIE = /msie/gi.test(navigator.userAgent), e.useRetina = window.devicePixelRatio > 1 || !(!window.matchMedia || !window.matchMedia('(-webkit-min-device-pixel-ratio: 1.5),\t\t\t(min--moz-device-pixel-ratio: 1.5),\t\t\t(-o-min-device-pixel-ratio: 3/2),\t\t\t(min-resolution: 1.5dppx)').matches), e.usingkeyModifiers = function(e) {return e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;};
      e.eventType = null !== document.ontouchstart ? 'click' : 'touchstart', e.log = function() {e.config.DEBUG && window.console && (Function.prototype.bind ? log = Function.prototype.bind.call(console.log, console) : log = function() {Function.prototype.apply.call(console.log, console, arguments);}, log.apply(this, arguments));}, e.now = Date.now || function() {return (new Date).getTime();}, e.set = function(e, t, i) {'string' == typeof e[t] ? e[t] = i : e.setAttribute(t, i);}, e.create = function(e) {
        var t, i, n = !1;
        for (t in e) if (e[t].hasOwnProperty) {
          n = document.createElement(t);
          for (i in e[t]) e[t][i].hasOwnProperty && 'string' == typeof e[t][i] && this.set(n, i, e[t][i]);
          break;
        }
        return n;
      }, e.setButtonRateLimit = function(e) {setTimeout(function() {e();}, 1e3);}, e.trackLink = function(t) {
        var i = $(this), n = i.attr('href'), r = i.attr('target'), o = t.metaKey || t.ctrlKey;
        return e.analytics.trackGAEvent('Outbound Links', t.currentTarget.host, n, 0), o || (t.preventDefault(), r ? window.open(n, r) : setTimeout('document.location.href = "' + href + '"', 100)), !0;
      }, e.getUrlParams = function(e) {
        var t = {};
        return decodeURIComponent(window.location.href.slice(window.location.href.indexOf('?') + 1)).split('&').forEach(function(e, i) {
          var n = e.split('=', 2);
          t[n[0]] = n[1];
        }), e && e in t ? t[e] : t;
      }, e.getUrlParameter = function(e) {
        for (var t = window.location.search.substring(1).split('&'), i = 0; i < t.length; i++) {
          var n = t[i].split('=');
          if (n[0] == e) return n[1];
        }
        return !1;
      }, e.redirect = function(e, t) {t = t || 0, setTimeout(function() {window.location.href = e;}, t);}, e.redirectTarget = function(e, t, i) {i = i || 0, setTimeout(function() {window.open(e, t);}, i);}, Number.prototype.between = function(e, t, i) {
        var n = Math.min.apply(Math, [e, t]), r = Math.max.apply(Math, [e, t]);
        return i ? this >= n && this <= r : this > n && this < r;
      }, e.prefixer = function() {
        var e = window.getComputedStyle(document.documentElement, ''), t = (Array.prototype.slice.call(e).join('').match(/-(moz|webkit|ms)-/) || '' === e.OLink && ['', 'o'])[1];
        return { dom: 'WebKit|Moz|MS|O'.match(new RegExp('(' + t + ')', 'i'))[1], lowercase: t, css: '-' + t + '-', js: t[0].toUpperCase() + t.substr(1) };
      }(), Object.prototype.hasOwnProperty ? e.hasOwnProperty = function(e, t) {return e.hasOwnProperty(t);} : e.hasOwnProperty = function(e, t) {
        var i = e.__proto__ || e.constructor.prototype;
        return t in e && (!(t in i) || i[t] !== e[t]);
      };
    }(App),
    function(e) {
      'use strict';
      'function' == typeof define && define.amd ? define(['jquery'], e) : e('undefined' != typeof jQuery ? jQuery : window.Zepto);
    }(function(e) {
      'use strict';

      function t(t) {
        var i = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(i));
      }

      function i(t) {
        var i = t.target, n = e(i);
        if (!n.is('[type=submit],[type=image]')) {
          var r = n.closest('[type=submit]');
          if (0 === r.length) return;
          i = r[0];
        }
        var o = this;
        if (o.clk = i, 'image' == i.type) if (void 0 !== t.offsetX) o.clk_x = t.offsetX, o.clk_y = t.offsetY; else if ('function' == typeof e.fn.offset) {
          var s = n.offset();
          o.clk_x = t.pageX - s.left, o.clk_y = t.pageY - s.top;
        } else o.clk_x = t.pageX - i.offsetLeft, o.clk_y = t.pageY - i.offsetTop;
        setTimeout(function() {o.clk = o.clk_x = o.clk_y = null;}, 100);
      }

      function n() {
        if (e.fn.ajaxSubmit.debug) {
          var t = '[jquery.form] ' + Array.prototype.join.call(arguments, '');
          window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t);
        }
      }

      var r = {};
      r.fileapi = void 0 !== e('<input type=\'file\'/>').get(0).files, r.formdata = void 0 !== window.FormData;
      var o = !!e.fn.prop;
      e.fn.attr2 = function() {
        if (!o) return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || 'string' == typeof e ? e : this.attr.apply(this, arguments);
      }, e.fn.ajaxSubmit = function(t) {
        function i(i) {
          var n, r, o = e.param(i, t.traditional).split('&'), s = o.length, a = [];
          for (n = 0; n < s; n++) o[n] = o[n].replace(/\+/g, ' '), r = o[n].split('='), a.push([decodeURIComponent(r[0]), decodeURIComponent(r[1])]);
          return a;
        }

        function s(i) {
          function r(e) {
            var t = null;
            try {e.contentWindow && (t = e.contentWindow.document);} catch (e) {n('cannot get iframe.contentWindow document: ' + e);}
            if (t) return t;
            try {t = e.contentDocument ? e.contentDocument : e.document;} catch (i) {n('cannot get iframe.contentDocument: ' + i), t = e.document;}
            return t;
          }

          function s() {
            function t() {
              try {
                var e = r(v).readyState;
                n('state = ' + e), e && 'uninitialized' == e.toLowerCase() && setTimeout(t, 50);
              } catch (e) {n('Server abort: ', e, ' (', e.name, ')'), l(S), C && clearTimeout(C), C = void 0;}
            }

            var i = d.attr2('target'), o = d.attr2('action'), s = d.attr('enctype') || d.attr('encoding') || 'multipart/form-data';
            T.setAttribute('target', m), a && !/post/i.test(a) || T.setAttribute('method', 'POST'), o != p.url && T.setAttribute('action', p.url), p.skipEncodingOverride || a && !/post/i.test(a) || d.attr({
              encoding: 'multipart/form-data',
              enctype: 'multipart/form-data'
            }), p.timeout && (C = setTimeout(function() {x = !0, l(_);}, p.timeout));
            var c = [];
            try {
              if (p.extraData) for (var u in p.extraData) p.extraData.hasOwnProperty(u) && (e.isPlainObject(p.extraData[u]) && p.extraData[u].hasOwnProperty('name') && p.extraData[u].hasOwnProperty('value') ? c.push(e('<input type="hidden" name="' + p.extraData[u].name + '">').val(p.extraData[u].value).appendTo(T)[0]) : c.push(e('<input type="hidden" name="' + u + '">').val(p.extraData[u]).appendTo(T)[0]));
              p.iframeTarget || g.appendTo('body'), v.attachEvent ? v.attachEvent('onload', l) : v.addEventListener('load', l, !1), setTimeout(t, 15);
              try {T.submit();} catch (e) {document.createElement('form').submit.apply(T);}
            } finally {T.setAttribute('action', o), T.setAttribute('enctype', s), i ? T.setAttribute('target', i) : d.removeAttr('target'), e(c).remove();}
          }

          function l(t) {
            if (!y.aborted && !$) {
              if ((D = r(v)) || (n('cannot access response document'), t = S), t === _ && y) return y.abort('timeout'), void k.reject(y, 'timeout');
              if (t == S && y) return y.abort('server abort'), void k.reject(y, 'error', 'server abort');
              if (D && D.location.href != p.iframeSrc || x) {
                v.detachEvent ? v.detachEvent('onload', l) : v.removeEventListener('load', l, !1);
                var i, o = 'success';
                try {
                  if (x) throw'timeout';
                  var s = 'xml' == p.dataType || D.XMLDocument || e.isXMLDoc(D);
                  if (n('isXml=' + s), !s && window.opera && (null === D.body || !D.body.innerHTML) && --P) return n('requeing onLoad callback, DOM not available'), void setTimeout(l, 250);
                  var a = D.body ? D.body : D.documentElement;
                  y.responseText = a ? a.innerHTML : null, y.responseXML = D.XMLDocument ? D.XMLDocument : D, s && (p.dataType = 'xml'), y.getResponseHeader = function(e) {return { 'content-type': p.dataType }[e.toLowerCase()];}, a && (y.status = Number(a.getAttribute('status')) || y.status, y.statusText = a.getAttribute('statusText') || y.statusText);
                  var c = (p.dataType || '').toLowerCase(), d = /(json|script|text)/.test(c);
                  if (d || p.textarea) {
                    var u = D.getElementsByTagName('textarea')[0];
                    if (u) y.responseText = u.value, y.status = Number(u.getAttribute('status')) || y.status, y.statusText = u.getAttribute('statusText') || y.statusText; else if (d) {
                      var f = D.getElementsByTagName('pre')[0], m = D.getElementsByTagName('body')[0];
                      f ? y.responseText = f.textContent ? f.textContent : f.innerText : m && (y.responseText = m.textContent ? m.textContent : m.innerText);
                    }
                  } else 'xml' == c && !y.responseXML && y.responseText && (y.responseXML = M(y.responseText));
                  try {A = O(y, c, p);} catch (e) {o = 'parsererror', y.error = i = e || o;}
                } catch (e) {n('error caught: ', e), o = 'error', y.error = i = e || o;}
                y.aborted && (n('upload aborted'), o = null), y.status && (o = y.status >= 200 && y.status < 300 || 304 === y.status ? 'success' : 'error'), 'success' === o ? (p.success && p.success.call(p.context, A, 'success', y), k.resolve(y.responseText, 'success', y), h && e.event.trigger('ajaxSuccess', [y, p])) : o && (void 0 === i && (i = y.statusText), p.error && p.error.call(p.context, y, o, i), k.reject(y, 'error', i), h && e.event.trigger('ajaxError', [y, p, i])), h && e.event.trigger('ajaxComplete', [y, p]), h && !--e.active && e.event.trigger('ajaxStop'), p.complete && p.complete.call(p.context, y, o), $ = !0, p.timeout && clearTimeout(C), setTimeout(function() {p.iframeTarget ? g.attr('src', p.iframeSrc) : g.remove(), y.responseXML = null;}, 100);
              }
            }
          }

          var c, u, p, h, m, g, v, y, b, w, x, C, T = d[0], k = e.Deferred();
          if (k.abort = function(e) {y.abort(e);}, i) for (u = 0; u < f.length; u++) c = e(f[u]), o ? c.prop('disabled', !1) : c.removeAttr('disabled');
          if (p = e.extend(!0, {}, e.ajaxSettings, t), p.context = p.context || p, m = 'jqFormIO' + (new Date).getTime(), p.iframeTarget ? (w = (g = e(p.iframeTarget)).attr2('name')) ? m = w : g.attr2('name', m) : (g = e('<iframe name="' + m + '" src="' + p.iframeSrc + '" />')).css({
            position: 'absolute',
            top: '-1000px',
            left: '-1000px'
          }), v = g[0], y = {
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {},
            abort: function(t) {
              var i = 'timeout' === t ? 'timeout' : 'aborted';
              n('aborting upload... ' + i), this.aborted = 1;
              try {v.contentWindow.document.execCommand && v.contentWindow.document.execCommand('Stop');} catch (e) {}
              g.attr('src', p.iframeSrc), y.error = i, p.error && p.error.call(p.context, y, i, t), h && e.event.trigger('ajaxError', [y, p, i]), p.complete && p.complete.call(p.context, y, i);
            }
          }, (h = p.global) && 0 == e.active++ && e.event.trigger('ajaxStart'), h && e.event.trigger('ajaxSend', [y, p]), p.beforeSend && !1 === p.beforeSend.call(p.context, y, p)) return p.global && e.active--, k.reject(), k;
          if (y.aborted) return k.reject(), k;
          (b = T.clk) && (w = b.name) && !b.disabled && (p.extraData = p.extraData || {}, p.extraData[w] = b.value, 'image' == b.type && (p.extraData[w + '.x'] = T.clk_x, p.extraData[w + '.y'] = T.clk_y));
          var _ = 1, S = 2, E = e('meta[name=csrf-token]').attr('content'), I = e('meta[name=csrf-param]').attr('content');
          I && E && (p.extraData = p.extraData || {}, p.extraData[I] = E), p.forceSync ? s() : setTimeout(s, 10);
          var A, D, $, P = 50,
              M = e.parseXML || function(e, t) {return window.ActiveXObject ? ((t = new ActiveXObject('Microsoft.XMLDOM')).async = 'false', t.loadXML(e)) : t = (new DOMParser).parseFromString(e, 'text/xml'), t && t.documentElement && 'parsererror' != t.documentElement.nodeName ? t : null;},
              L = e.parseJSON || function(e) {return window.eval('(' + e + ')');}, O = function(t, i, n) {
                var r = t.getResponseHeader('content-type') || '', o = 'xml' === i || !i && r.indexOf('xml') >= 0, s = o ? t.responseXML : t.responseText;
                return o && 'parsererror' === s.documentElement.nodeName && e.error && e.error('parsererror'), n && n.dataFilter && (s = n.dataFilter(s, i)), 'string' == typeof s && ('json' === i || !i && r.indexOf('json') >= 0 ? s = L(s) : ('script' === i || !i && r.indexOf('javascript') >= 0) && e.globalEval(s)), s;
              };
          return k;
        }

        if (!this.length) return n('ajaxSubmit: skipping submit process - no element selected'), this;
        var a, l, c, d = this;
        'function' == typeof t ? t = { success: t } : void 0 === t && (t = {}), a = t.type || this.attr2('method'), (c = (c = 'string' == typeof (l = t.url || this.attr2('action')) ? e.trim(l) : '') || window.location.href || '') && (c = (c.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
          url: c,
          success: e.ajaxSettings.success,
          type: a || e.ajaxSettings.type,
          iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
        }, t);
        var u = {};
        if (this.trigger('form-pre-serialize', [this, t, u]), u.veto) return n('ajaxSubmit: submit vetoed via form-pre-serialize trigger'), this;
        if (t.beforeSerialize && !1 === t.beforeSerialize(this, t)) return n('ajaxSubmit: submit aborted via beforeSerialize callback'), this;
        var p = t.traditional;
        void 0 === p && (p = e.ajaxSettings.traditional);
        var h, f = [], m = this.formToArray(t.semantic, f);
        if (t.data && (t.extraData = t.data, h = e.param(t.data, p)), t.beforeSubmit && !1 === t.beforeSubmit(m, this, t)) return n('ajaxSubmit: submit aborted via beforeSubmit callback'), this;
        if (this.trigger('form-submit-validate', [m, this, t, u]), u.veto) return n('ajaxSubmit: submit vetoed via form-submit-validate trigger'), this;
        var g = e.param(m, p);
        h && (g = g ? g + '&' + h : h), 'GET' == t.type.toUpperCase() ? (t.url += (t.url.indexOf('?') >= 0 ? '&' : '?') + g, t.data = null) : t.data = g;
        var v = [];
        if (t.resetForm && v.push(function() {d.resetForm();}), t.clearForm && v.push(function() {d.clearForm(t.includeHidden);}), !t.dataType && t.target) {
          var y = t.success || function() {};
          v.push(function(i) {
            var n = t.replaceTarget ? 'replaceWith' : 'html';
            e(t.target)[n](i).each(y, arguments);
          });
        } else t.success && v.push(t.success);
        if (t.success = function(e, i, n) {for (var r = t.context || this, o = 0, s = v.length; o < s; o++) v[o].apply(r, [e, i, n || d, d]);}, t.error) {
          var b = t.error;
          t.error = function(e, i, n) {
            var r = t.context || this;
            b.apply(r, [e, i, n, d]);
          };
        }
        if (t.complete) {
          var w = t.complete;
          t.complete = function(e, i) {
            var n = t.context || this;
            w.apply(n, [e, i, d]);
          };
        }
        var x = e('input[type=file]:enabled', this).filter(function() {return '' !== e(this).val();}).length > 0, C = 'multipart/form-data', T = d.attr('enctype') == C || d.attr('encoding') == C,
            k = r.fileapi && r.formdata;
        n('fileAPI :' + k);
        var _, S = (x || T) && !k;
        !1 !== t.iframe && (t.iframe || S) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() {_ = s(m);}) : _ = s(m) : _ = (x || T) && k ? function(n) {
          for (var r = new FormData, o = 0; o < n.length; o++) r.append(n[o].name, n[o].value);
          if (t.extraData) {
            var s = i(t.extraData);
            for (o = 0; o < s.length; o++) s[o] && r.append(s[o][0], s[o][1]);
          }
          t.data = null;
          var l = e.extend(!0, {}, e.ajaxSettings, t, { contentType: !1, processData: !1, cache: !1, type: a || 'POST' });
          t.uploadProgress && (l.xhr = function() {
            var i = e.ajaxSettings.xhr();
            return i.upload && i.upload.addEventListener('progress', function(e) {
              var i = 0, n = e.loaded || e.position, r = e.total;
              e.lengthComputable && (i = Math.ceil(n / r * 100)), t.uploadProgress(e, n, r, i);
            }, !1), i;
          }), l.data = null;
          var c = l.beforeSend;
          return l.beforeSend = function(e, i) {t.formData ? i.data = t.formData : i.data = r, c && c.call(this, e, i);}, e.ajax(l);
        }(m) : e.ajax(t), d.removeData('jqxhr').data('jqxhr', _);
        for (var E = 0; E < f.length; E++) f[E] = null;
        return this.trigger('form-submit-notify', [this, t]), this;
      }, e.fn.ajaxForm = function(r) {
        if (r = r || {}, r.delegation = r.delegation && e.isFunction(e.fn.on), !r.delegation && 0 === this.length) {
          var o = { s: this.selector, c: this.context };
          return !e.isReady && o.s ? (n('DOM not ready, queuing ajaxForm'), e(function() {e(o.s, o.c).ajaxForm(r);}), this) : (n('terminating; zero elements found by selector' + (e.isReady ? '' : ' (DOM not ready)')), this);
        }
        return r.delegation ? (e(document).off('submit.form-plugin', this.selector, t).off('click.form-plugin', this.selector, i).on('submit.form-plugin', this.selector, r, t).on('click.form-plugin', this.selector, r, i), this) : this.ajaxFormUnbind().bind('submit.form-plugin', r, t).bind('click.form-plugin', r, i);
      }, e.fn.ajaxFormUnbind = function() {return this.unbind('submit.form-plugin click.form-plugin');}, e.fn.formToArray = function(t, i) {
        var n = [];
        if (0 === this.length) return n;
        var o, s = this[0], a = this.attr('id'), l = t ? s.getElementsByTagName('*') : s.elements;
        if (l && !/MSIE [678]/.test(navigator.userAgent) && (l = e(l).get()), a && (o = e(':input[form=' + a + ']').get()).length && (l = (l || []).concat(o)), !l || !l.length) return n;
        var c, d, u, p, h, f, m;
        for (c = 0, f = l.length; c < f; c++) if (h = l[c], (u = h.name) && !h.disabled) if (t && s.clk && 'image' == h.type) s.clk == h && (n.push({
          name: u,
          value: e(h).val(),
          type: h.type
        }), n.push({ name: u + '.x', value: s.clk_x }, {
          name: u + '.y',
          value: s.clk_y
        })); else if ((p = e.fieldValue(h, !0)) && p.constructor == Array) for (i && i.push(h), d = 0, m = p.length; d < m; d++) n.push({
          name: u,
          value: p[d]
        }); else if (r.fileapi && 'file' == h.type) {
          i && i.push(h);
          var g = h.files;
          if (g.length) for (d = 0; d < g.length; d++) n.push({ name: u, value: g[d], type: h.type }); else n.push({ name: u, value: '', type: h.type });
        } else null !== p && void 0 !== p && (i && i.push(h), n.push({ name: u, value: p, type: h.type, required: h.required }));
        if (!t && s.clk) {
          var v = e(s.clk), y = v[0];
          (u = y.name) && !y.disabled && 'image' == y.type && (n.push({ name: u, value: v.val() }), n.push({ name: u + '.x', value: s.clk_x }, { name: u + '.y', value: s.clk_y }));
        }
        return n;
      }, e.fn.formSerialize = function(t) {return e.param(this.formToArray(t));}, e.fn.fieldSerialize = function(t) {
        var i = [];
        return this.each(function() {
          var n = this.name;
          if (n) {
            var r = e.fieldValue(this, t);
            if (r && r.constructor == Array) for (var o = 0, s = r.length; o < s; o++) i.push({ name: n, value: r[o] }); else null !== r && void 0 !== r && i.push({ name: this.name, value: r });
          }
        }), e.param(i);
      }, e.fn.fieldValue = function(t) {
        for (var i = [], n = 0, r = this.length; n < r; n++) {
          var o = this[n], s = e.fieldValue(o, t);
          null === s || void 0 === s || s.constructor == Array && !s.length || (s.constructor == Array ? e.merge(i, s) : i.push(s));
        }
        return i;
      }, e.fieldValue = function(t, i) {
        var n = t.name, r = t.type, o = t.tagName.toLowerCase();
        if (void 0 === i && (i = !0), i && (!n || t.disabled || 'reset' == r || 'button' == r || ('checkbox' == r || 'radio' == r) && !t.checked || ('submit' == r || 'image' == r) && t.form && t.form.clk != t || 'select' == o && -1 == t.selectedIndex)) return null;
        if ('select' == o) {
          var s = t.selectedIndex;
          if (s < 0) return null;
          for (var a = [], l = t.options, c = 'select-one' == r, d = c ? s + 1 : l.length, u = c ? s : 0; u < d; u++) {
            var p = l[u];
            if (p.selected) {
              var h = p.value;
              if (h || (h = p.attributes && p.attributes.value && !p.attributes.value.specified ? p.text : p.value), c) return h;
              a.push(h);
            }
          }
          return a;
        }
        return e(t).val();
      }, e.fn.clearForm = function(t) {return this.each(function() {e('input,select,textarea', this).clearFields(t);});}, e.fn.clearFields = e.fn.clearInputs = function(t) {
        var i = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
          var n = this.type, r = this.tagName.toLowerCase();
          i.test(n) || 'textarea' == r ? this.value = '' : 'checkbox' == n || 'radio' == n ? this.checked = !1 : 'select' == r ? this.selectedIndex = -1 : 'file' == n ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val('') : t && (!0 === t && /hidden/.test(n) || 'string' == typeof t && e(this).is(t)) && (this.value = '');
        });
      }, e.fn.resetForm = function() {return this.each(function() {('function' == typeof this.reset || 'object' == typeof this.reset && !this.reset.nodeType) && this.reset();});}, e.fn.enable = function(e) {return void 0 === e && (e = !0), this.each(function() {this.disabled = !e;});}, e.fn.selected = function(t) {
        return void 0 === t && (t = !0), this.each(function() {
          var i = this.type;
          if ('checkbox' == i || 'radio' == i) this.checked = t; else if ('option' == this.tagName.toLowerCase()) {
            var n = e(this).parent('select');
            t && n[0] && 'select-one' == n[0].type && n.find('option').selected(!1), this.selected = t;
          }
        });
      }, e.fn.ajaxSubmit.debug = !1;
    }), function(e) {
  e.component = {
    cache: [],
    cachedLoaders: [],
    isActiveComponent: !1,
    isActiveComponentRequest: !1,
    isCloseupOpen: !1,
    activeComponent: !1,
    activeComponentName: !1,
    numComponentsOpen: 0,
    loadDelay: 230,
    manager: !1,
    messages: { SAVED: 'Saved', CREATED: 'Created', REPORTED: 'Reported', DELETED: 'Deleted', ERROR: 'Error' },
    init: function() {this.addListeners();},
    addListeners: function() {e.$window.on('onComponentLoaded', function(t, i) {e.component.show(i), i.callback && i.callback.call(this, i);}), e.$window.on('onModalDimensionChanged', function(t) {e.component.setPosition();});},
    setManager: function(e) {this.manager = $(e);},
    setActiveComponent: function(t) {e.component.activeComponent = t;},
    setActiveComponentName: function(t) {e.component.activeComponentName = t;},
    setCacheKey: function(t) {this.cacheKey = 'component_' + t + '_' + e.config.COMPONENTS[t];},
    inCache: function(t) {return this.setCacheKey(t), e.storage.get(this.cacheKey);},
    stache: function(t, i) {i = this.clean(i), e.storage.set(this.cacheKey, { name: t, component: i }, 43200);},
    clean: function(e) {return e.replace(/>\s+</g, '><');},
    load: function(t) {e.$window.trigger('onHeaderDropdownClosed'), e.component.setManager('.ComponentManager'), e.component.setActiveComponentName(t.component), t.component && e.component.get(t);},
    get: function(t) {
      if (!this.isActiveComponentRequest && t.component) {
        var i = this.inCache(t.component);
        if (i) 0 === e.component.manager.find('.' + t.modal).length && e.component.manager.append(i.component), setTimeout(function() {e.$window.trigger('onComponentLoaded', t);}, 1); else {
          var n = 'component_' + t.component;
          this.isActiveComponentRequest = !0, $.ajax({
            cache: !0,
            url: '/resource/component/' + t.component + '/',
            type: 'GET',
            error: function(t) {e.analytics.trackGAEvent(n, 'error', t.responseText);},
            success: function(i) {e.component.stache(t.component, i), 0 === e.component.manager.find('.' + t.modal).length && e.component.manager.append(i), setTimeout(function() {e.$window.trigger('onComponentLoaded', t);}, 1);},
            complete: function() {e.component.isActiveComponentRequest = !1;}
          });
        }
      }
    },
    closeSaveCloseup: function(t) {
      if (e.save.hasRelatedFeed = !1, e.json.related = !1, e.$window.trigger('onHeaderDropdownClosed'), e.useHistory && e.historyManager.rewindHistory) {
        var i = window.history.state;
        i && i.clicksToBackground > 0 && window.history.go(-i.clicksToBackground), e.historyManager.clicksToBackground = 0;
      }
    },
    loadComponentListeners: function(i) {
      var n = this;
      n.activeComponent.on('click.modal', '.canClose', function(t) {'save-closeup' === n.activeComponentName ? (e.historyManager.rewindHistory = !0, n.closeSaveCloseup('canclose click')) : n.hide();}), n.activeComponent.on('click.modal', function(e) {
        var t = $(e.target);
        0 === t.parents('.modalContent').length && 0 === t.parents('.modalContainer').length && 'save-closeup' !== n.activeComponentName && n.hide();
      }), this.isCloseupOpen || (e.$document.on('keydown.modal', function(t, i) {
        var r = t.which;
        27 === r ? n.activeComponent.find('.modalStep.confirmation').hasClass('active') ? n.closeConfirmation() : 'save-closeup' === n.activeComponentName ? (e.historyManager.rewindHistory = !0, n.closeSaveCloseup('Escape Key Pressed')) : n.hide() : 8 === r && n.closeConfirmation();
      }), e.$window.on('resize.modal', _.debounce(n.resize, 200))), t[i] && t[i].call(n, n.activeComponent);
    },
    show: function(e) {this.setAdditionalData(e), this.activeComponent = this.manager.find('.' + e.modal), this.freeze(), this.unloadLoaders(), this.activeComponent.hasClass('active') || (this.loadComponentListeners(e.modal), this.activeComponent.addClass('active')), 'closeupModal' === e.modal ? this.isCloseupOpen = !0 : this.setPosition();},
    setCloseupAsActive: function() {this.activeComponent = this.manager.find('.closeupModal'), this.setActiveComponentName('save-closeup'), this.activeComponent.addClass('active');},
    isPendingClose: !1,
    hide: function(t) {
      var i = this;
      if (!i.isPendingClose) {
        i.isPendingClose = !0;
        setTimeout(function() {'save-closeup' === i.activeComponentName && (e.historyManager.clicksToBackground = 0, i.isCloseupOpen = !1, e.save.hasRelatedFeed = !1), e.component.activeComponent.removeClass('active'), setTimeout(function() {e.component.reset(), e.component.reloadLoaders();}, 100), i.isPendingClose = !1;}, t || 100);
      }
    },
    closeConfirmation: function() {e.component.activeComponent.find('.modalStep.confirmation').removeClass('active');},
    reset: function() {
      var t = this;
      t.params = !1, t.activeComponent.trigger('ON_MODAL_CLOSED'), t.activeComponent.find('.completeMessage').html(t.messages.DELETED), t.activeComponent.off(), t.activeComponent.remove(), t.activeComponent = !1, t.isPendingClose = !1, t.isCloseupOpen ? t.setCloseupAsActive() : (e.$document.off('.modal'), e.$window.off('.modal'), t.unfreeze());
    },
    setAdditionalData: function(e) {this.params = e;},
    resize: function() {e.component.setPosition();},
    setPosition: function() {
      var t = e.component.activeComponent, i = t.find('.verticalCenter');
      if (i.length > 0) {
        var n = .5 * e.browser.getViewportHeight(), r = .5 * t.find('.modalContent').outerHeight(!0), o = Math.max(0, n - r);
        i.css({ top: o });
      }
    },
    unloadLoaders: function() {
      var t = this;
      e.$app.find('.Pagination').each(function() {
        var e = $(this);
        t.cachedLoaders.push(e), e.removeClass('loading');
      });
    },
    reloadLoaders: function() {
      for (var e = 0; e < this.cachedLoaders.length; e += 1) this.cachedLoaders[e].addClass('loading');
      this.cachedLoaders = [];
    },
    freeze: function() {e.$body.addClass('noScroll');},
    unfreeze: function() {$('.App,.headerContainer').css('width', ''), e.$body.removeClass('noScroll');}
  };
  var t = {
    closeupModal: function(t) {e.save.initCloseup(!0), t.on('click.modal', '.similiarCanClose', function(t) {e.historyManager.rewindHistory = !0, e.component.closeSaveCloseup('side bar clicked');});},
    saveFromWebsiteModal: function(t) {
      t.on('click.modal', '.nextButton', function() {
        var t = $(this).parent().find('.siteSearch').val();
        (t = e.validate.simpleValidateURL(t)).length > 3 && (t = e.config.BASE_URL + '/search/website/?url=' + encodeURIComponent($.trim(t.toLowerCase())), e.redirect(t));
      }), t.on('keydown.modal', '.siteSearch', function(i) {
        var n = $(this).val(), r = t.find('.nextButton');
        if (n.length > 3) if (e.validate.simpleValidateURL(n)) {if (r.removeClass('disabled'), 13 === i.keyCode) return r.trigger('click'), !1;} else r.addClass('disabled'); else r.addClass('disabled');
      }), setTimeout(function() {t.find('.siteSearch').focus();}, 50);
    },
    accountVerificationModal: function(t) {
      t.on('click', '.confirmEmailTrigger', function() {
        var t = $(this);
        if (!t.hasClass('disabled') && !t.hasClass('complete')) {t.addClass('disabled'), e.user.resendConfirmEmail(t, 'user_confirm'), e.analytics.trackGAEvent('user_confirm', 'clicked');}
        return !1;
      });
    },
    saveModal: function(i) {e.save.loadModal(), t.saveAndEditListeners(i), i.find('.collections').on('click.modal', '.item', function() {return e.component.params.isUpload ? e.save.websave($(this)) : e.save.resave($(this)), !1;});},
    editSaveModal: function(i) {
      e.save.loadModal(!0), t.saveAndEditListeners(i), i.find('.collections').on('click.modal', '.item', function() {
        var e = $(this);
        return i.find('.item').removeClass('active'), e.addClass('active'), !1;
      }), i.on('click.modal', '.saveTrigger', function() {
        var t = $(this);
        return e.save.resave(t), !1;
      }), i.on('click.modal', '.editTrigger', function() {
        var t = $(this);
        return e.save.edit(t), !1;
      }), i.on('click.modal', '.deleteTrigger', function() {return e.config.isLoggedIn && i.find('.modalStep.confirmation').addClass('active'), !1;}), i.on('click.modal', '.cancelDelete', function() {return e.component.closeConfirmation(), !1;}), i.on('click.modal', '.confirmDelete', function() {return e.save._delete($(this)), !1;});
    },
    saveAndEditListeners: function(t) {
      var i = t.find('.collectionForm'), n = !1, r = t.find('.collectionFinder');
      t.find('input').attr('autocomplete', 'off'), e.$window.on('keydown.modal', function(e) {
        var i = e.which, o = 1 === i, s = 91 === i || e.ctrlKey || e.metaKey, a = i >= 65 && i <= 90 || i >= 48 && i <= 57 || o, l = t.find('.description,.website,.collectionName').is(':focus');
        n || l || s || a && (r.focus(), n = !0);
      }), r.on('change.modal', function(e) {
        var i = $(this).val().toLowerCase(), n = t.find('.collections');
        return i ? (n.find('.hideable').hide(), n.find('.item span:not(:contains(' + i + '))').parent().hide(), n.find('.item span:Contains(' + i + ')').parent().show()) : (n.find('.hideable').show(), n.find('li').show()), !1;
      }), r.on('keyup.modal', function(e) {$(this).change();}), t.on('click.modal', '.quickCreateCollection', function() {
        var e = $(this);
        return e.hasClass('active') || (e.addClass('active'), t.find('.collectionNameContainer input').focus()), !1;
      }), t.on('click.modal', '.collectionPrivacyToggle', function() {
        var e = $(this);
        return e.hasClass('active') ? (e.removeClass('active'), e.children('.privacy').attr('checked', !1)) : (e.addClass('active'), e.children('.privacy').attr('checked', !0)), !1;
      }), t.on('click.modal', '.createTrigger', function() {return e.collection.quickCreate(), !1;}), t.on('keyup.modal select.modal', '.validateField', function() {e.collection.validateForm.create.call(this, i);}), t.on('ON_MODAL_CLOSED', function() {t.find('li.item').remove(), t.find('.quickCreateCollection').removeClass('active'), t.find('.collectionPrivacyToggle').removeClass('active'), t.find('.collectionPrivacyToggle').children('.privacy').prop('checked', !1);});
    },
    createCollectionModal: function(t) {
      e.collection.loadModal(), new e.toggleSwitch(t.find('.toggleSwitch')[0]), t.on('click.modal', '.createTrigger', function() {
        var t = $(this);
        return e.collection.create(t), !1;
      });
    },
    editCollectionModal: function(t) {
      e.collection.loadModal(), new e.toggleSwitch(t.find('.toggleSwitch')[0]), t.on('click.modal', '.editTrigger', function() {
        var t = $(this);
        return e.collection.edit(t), !1;
      }), t.on('click.modal', '.deleteTrigger', function() {return e.config.isLoggedIn && t.find('.modalStep.confirmation').addClass('active'), !1;}), t.on('click.modal', '.cancelDelete', function() {return e.component.closeConfirmation(), !1;}), t.on('click.modal', '.confirmDelete', function() {return e.collection._delete($(this)), !1;}), t.on('click.modal', '.addContributor', function() {
        var e = $(this);
        return e.hasClass('active') || (e.addClass('active'), e.find('input').focus()), !1;
      }), t.on('click.modal', '.inviteTrigger', function() {
        var t = $(this);
        return e.collection.inviteCollaborator(t), !1;
      }), t.on('click.modal', '.leaveTrigger', function() {
        var t = $(this);
        return e.collection.removeCollaborator(t), !1;
      });
    },
    reportModal: function(t) {t.on('click.modal', '.reportTrigger', e.component.params.callback), t.on('click.modal', 'input[name=reason]', function() {t.find('.reportTrigger').removeClass('disabled');}), t.on('ON_MODAL_CLOSED', function() {t.find('input[type=radio]').prop('checked', !1), t.find('.reportTrigger').addClass('disabled');});},
    shareModal: function(t) {t.find('.shareButton').attr('data-url', e.config.BASE_URL + '/save/' + e.component.params.id + '/'), t.find('.twitterShareTrigger').attr('data-text', $('meta[name="twitter:description"]').attr('content')), e.socialShare.init(t.find('.shareButton')), t.on('ON_MODAL_CLOSED', function() {t.find('input[type=radio]').prop('checked', !1), t.find('.reportTrigger').addClass('disabled');});},
    removeAccountModal: function(t) {
      t.on('click.modal', '.confirmTrigger', function() {
        var t = $(this);
        if (!t.hasClass('disabled')) {
          var i = 'delete_account';
          setTimeout(function() {t.text('').addClass('disabled isLoader loading'), new e.loader(t, 2);}, e.component.loadDelay);
          $.ajax({
            url: '/resource/',
            type: 'POST',
            dataType: 'json',
            data: { user: 1, delete_account: 1, request_token: e.config.requestToken },
            error: function(t) {e.analytics.trackGAEvent(i, 'error', t.responseText);},
            success: function(t) {1 === t.status ? (e.analytics.trackGAEvent(i, 'success'), e.redirect(t.location)) : ($(this).removeClass('disabled'), e.analytics.trackGAEvent(i, 'failed'));}
          });
        }
        return !1;
      });
    },
    changePasswordModal: function(t) {
      t.on('click.modal', '.confirmTrigger', function(i) {
        var n = $(this);
        if (!n.hasClass('disabled')) {
          var r = t.find('.changePasswordForm'), o = 'change_password', s = setTimeout(function() {
            var i = t.find('.modalStep.processing');
            new e.loader(i), i.addClass('active loading');
          }, e.component.loadDelay);
          n.addClass('disabled'), $.ajax({
            url: '/resource/',
            type: 'POST',
            dataType: 'json',
            data: r.serialize(),
            error: function(i) {clearTimeout(s), e.analytics.trackGAEvent(o, 'error', i.responseText), t.find('.modalStep').removeClass('active loading');},
            success: function(i) {clearTimeout(s), 1 === i.status ? (t.find('.modalStep.complete').addClass('active'), t.find('.modalStep').removeClass('loading'), e.component.hide(1200), e.analytics.trackGAEvent(o, 'success', 'change_password_modal')) : (e.validate.form(r, i.errors), t.find('.modalStep').removeClass('active loading'), e.setButtonRateLimit(function() {n.removeClass('disabled');}), e.analytics.trackGAEvent(o, 'failed', i.errors));}
          });
        }
        return !1;
      });
    },
    changePlanModal: function(t) {
      var i = t.find('.billingCycle[value=' + e.component.params.billing + ']');
      t.find('.billingCycle').attr('checked', !1), i.prop('checked', !0), t.on('click.modal', '.confirmTrigger', function(i) {
        var n = $(this);
        if (!n.hasClass('disabled')) {
          var r = t.find('.changePlanForm'), o = setTimeout(function() {
            var i = t.find('.modalStep.processing');
            new e.loader(i), i.addClass('active loading');
          }, e.component.loadDelay), s = t.find('.billingCycle:checked').val();
          n.addClass('disabled'), $.ajax({
            url: '/resource/',
            type: 'POST',
            dataType: 'json',
            data: { change_plan: 1, billing: s, request_token: e.config.requestToken },
            error: function(i) {clearTimeout(o), e.analytics.trackGAEvent('change_plan', 'error', i.responseText), t.find('.modalStep').removeClass('active loading');},
            success: function(i) {clearTimeout(o), 1 === i.status ? (t.find('.modalStep.complete').addClass('active'), t.find('.modalStep').removeClass('loading'), e.component.hide(1200), e.analytics.trackGAEvent('change_plan', 'success', s)) : (e.validate.form(r, i.errors), t.find('.modalStep').removeClass('active loading'), e.setButtonRateLimit(function() {n.removeClass('disabled');}), e.analytics.trackGAEvent('change_plan', 'failed', i.errors));}
          });
        }
        return !1;
      });
    },
    cancelSubscriptionModal: function(t) {
      t.on('click.modal', '.confirmTrigger', function(i) {
        var n = $(this);
        if (!n.hasClass('disabled')) {
          var r = setTimeout(function() {
            var i = t.find('.modalStep.processing');
            new e.loader(i), i.addClass('active loading');
          }, e.component.loadDelay);
          n.addClass('disabled'), $.ajax({
            url: '/resource/',
            type: 'POST',
            dataType: 'json',
            data: { cancel_plan: 1, request_token: e.config.requestToken },
            error: function(i) {clearTimeout(r), e.analytics.trackGAEvent('cancel_plan', 'error', i.responseText), t.find('.modalStep').removeClass('active loading');},
            success: function(i) {clearTimeout(r), 1 === i.status ? (t.find('.modalStep.complete').addClass('active'), t.find('.modalStep').removeClass('loading'), setTimeout(function() {e.redirect('/settings/');}, 1200), e.analytics.trackGAEvent('cancel_plan', 'success')) : (t.find('.modalStep').removeClass('active loading'), e.setButtonRateLimit(function() {n.removeClass('disabled');}), e.analytics.trackGAEvent('cancel_plan', 'failed', i.errors));}
          });
        }
        return !1;
      });
    },
    updateCardModal: function(t) {e.stripeHandler.init('.updateCardForm'), e.$modal.find('.updateCardForm').on('click', '.confirmTrigger', function() {return e.stripeHandler.updateCard($(this), t), !1;});},
    loginModal: function(t) {
      e.$window;
      var i = t.find('.modalForm'), n = i.find('.trigger');
      e.$html.find('head');
      e.loadSocialLogin(), t.find('.modalContent').addClass('active'), i.on('keyup.page', 'input', function(t) {
        var r = $(this);
        if (e.user.validateForm.login.call(void 0, i, n, r), 13 === t.keyCode) return n.trigger('click'), !1;
      }), n.on('click', function() {
        var t = $(this);
        if (i.find('.password').attr('type', 'password'), e.user.validateForm.login.call(void 0, i, t), !t.hasClass('disabled')) {t.addClass('disabled'), e.user.login(i, t, 'user_login'), e.analytics.trackGAEvent('user_login', 'clicked');}
        return !1;
      });
    },
    signupModal: function(t) {
      e.$window;
      var i = t.find('.step1'), n = i.find('.trigger'), r = t.find('.step2'), o = r.find('.trigger');
      e.loadSocialSignup(), i.on('keyup.page', 'input', function(t) {
        var r = $(this);
        if (e.user.validateForm.signup.call(void 0, i, n, r), 13 === t.keyCode) return n.trigger('click'), !1;
      }), n.on('click', function() {
        var n = $(this);
        if (i.find('.password').attr('type', 'password'), e.user.validateForm.signup.call(void 0, i, n), !n.hasClass('disabled')) {n.addClass('disabled'), e.user.signupStep1(t, i, n, 'user_signup'), e.analytics.trackGAEvent('user_signup', 'clicked');}
        return !1;
      }), r.on('keyup.page', 'input', function(e) {if (13 === e.keyCode) return o.trigger('click'), !1;}), o.on('click', function() {
        var t = $(this);
        return t.addClass('disabled'), e.user.signupStep2(r, t, 'user_signup'), e.analytics.trackGAEvent('user_signup', 'clicked'), !1;
      }), t.on('click', '.back', function() {return t.find('.signupSteps').removeClass('active'), t.find('.signupSteps.step1').addClass('active'), e.component.setPosition(), e.analytics.trackGAEvent('user_signup', 'back_clicked'), !1;});
    }
  };
}(App), function(e) {
  function t(e, t) {this.cache = [], this.size = t, this.container = e, this.loaderColors = ['#1d8ffb', '#ffffff'], this.init();}

  var i = t.prototype;
  i.init = function() {this.container.find('.loaderContainer').length < 1 && (loader = this.build(), this.container.append(loader));}, i.build = function() {
    var e = this.checkContrast(this.container.css('backgroundColor')), t = Math.floor((new Date).getTime() / 1e3);
    return '<div class="loaderContainer"><svg viewBox="0 0 66 66"><circle class="path" fill="transparent" stroke-width="4" cx="33" cy="33" r="30" stroke="url(#loader' + t + ')"/><linearGradient id="loader' + t + '"><stop offset="50%" stop-color="' + e + '" stop-opacity="1"/><stop offset="65%" stop-color="' + e + '" stop-opacity=".5"/><stop offset="100%" stop-color="' + e + '" stop-opacity="0"/></linearGradient></circle></svg></div>';
  }, i.rgbToHex = function(e) {
    var t = 'ffffff';
    if (e) {
      var i = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      if (i) {
        var n = parseInt(i[1]), r = parseInt(i[2]), o = parseInt(i[3]);
        t = (n.toString(16) + r.toString(16) + o.toString(16)).toUpperCase();
      }
    }
    return t;
  }, i.checkContrast = function(e) {
    var t = this.rgbToHex(e);
    return parseInt(t, 16) > 8388607.5 ? this.loaderColors[0] : this.loaderColors[1];
  }, e.loader = t;
}(App), function(e) {
  function t(e) {
    if ('checkbox' !== e.type) return !1;
    var t = this;
    this.input = e, this.input.style.display = 'none', this.el = document.createElement('div'), this.el.className = 'toggleSwitch', this._prepareDOM(), this.input.parentElement.insertBefore(this.el, this.input), this.el.addEventListener('click', function(e) {e.preventDefault(), t.toggle();}, !1), this.input.checked && this.turnOn();
  }

  var i = t.prototype;
  i.toggle = function() {this.el.classList.contains('on') ? this.turnOff() : this.turnOn();}, i.turnOn = function() {this.el.classList.add('on'), this.el.classList.remove('off'), this.input.checked = !0;}, i.turnOff = function() {this.el.classList.remove('on'), this.el.classList.add('off'), this.input.checked = !1;}, i.triggerChange = function() {
    if ('fireEvent' in this.input) this.input.fireEvent('onchange'); else {
      var e = document.createEvent('HTMLEvents');
      e.initEvent('change', !1, !0), this.input.dispatchEvent(e);
    }
  }, i._prepareDOM = function() {
    var e = document.createElement('div'), t = document.createElement('div'), i = document.createElement('div');
    e.className = 'onBg bgFill', t.className = 'stateBg bgFill', i.className = 'handle', this.el.appendChild(e), this.el.appendChild(t), this.el.appendChild(i);
  }, e.toggleSwitch = t;
}(App), function(e) {
  e.validate = {
    verifyURL: function(e) {return /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/.test(e);},
    email: function(e) {return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e);},
    form: function(t, i) {
      if (t.find('.validationError').removeClass('validationError'), t.find('.error').remove(), !i) return !1;
      if ('validation' in i) for (var n in i.validation) if (i.validation.hasOwnProperty(n)) {
        var r = t.find('[name="' + n + '"]'), o = r.parents('.validateContainer').length ? r.parents('.validateContainer') : r.parent(), s = o.find('.error');
        o.addClass('validationError'), s.length ? s.html(i.validation[n]) : o.append('<span class="error">' + i.validation[n] + '</span>');
      }
      e.$window.trigger('onFormValidationComplete');
    }
  };
}(App), function(e) {
  e.interest = {
    current: {},
    validateForm: {},
    init: function() {this.addListeners();},
    addListeners: function() {
      var t = e.$app;
      e.config.isLoggedIn && (t.on('click.page', '.interestFollow', function(t) {
        var i = $(this);
        return i.hasClass('disabled') || e.interest.follow(i), !1;
      }), t.on('click.page', '.interestUnfollow', function(t) {
        var i = $(this);
        return i.hasClass('disabled') || e.interest.unfollow(i), !1;
      }));
    },
    follow: function(t) {
      var i = 'follow_interest', n = {
        button: t, data: { interest: 1, follow: 1, interest_id: t.attr('data-id'), request_token: e.config.requestToken }, GAEventType: i, successCallback: function(t) {
          var n;
          n = 1 === t.status ? 'success' : 'failed', e.analytics.trackGAEvent(i, n);
        }
      };
      e.analytics.trackGAEvent(i, 'clicked'), e.interest.autoLoadAjax(n);
    },
    unfollow: function(t) {
      var i = {
        button: t,
        data: { interest: 1, unfollow: 1, interest_id: t.attr('data-id'), request_token: e.config.requestToken },
        GAEventType: 'unfollow_interest',
        successCallback: function(t) {
          var i;
          i = 1 === t.status ? 'success' : 'failed', e.analytics.trackGAEvent('unfollow_interest', i);
        }
      };
      e.interest.autoLoadAjax(i);
    },
    autoLoadAjax: function(t) {
      var i;
      $.ajax({
        url: '/resource/',
        type: 'POST',
        dataType: 'json',
        data: t.data,
        error: function(n) {clearTimeout(i), e.setButtonRateLimit(function() {t.button.removeClass('disabled');}), e.analytics.trackGAEvent(t.GAEventType, 'error', n.responseText);},
        beforeSend: function() {i = setTimeout(function() {t.button.addClass('disabled');}, e.component.loadDelay), e.analytics.trackGAEvent(t.GAEventType, 'clicked');},
        success: t.successCallback,
        complete: function() {clearTimeout(i), e.setButtonRateLimit(function() {t.button.removeClass('disabled');});}
      });
    },
    addGridItemListeners: function(t) {
      var i = e.$app.find('.gridItem.interest.active').length || 0;
      e.$window.trigger('onOnboardingInterestLoaded', { num_selected: i });
    }
  };
}(App), function(e) {
  e.curate = {
    report: function(t, i, n) {
      var r = e.component.activeComponent, o = r.find('.reportTrigger'), s = 'report_' + i, a = r.find('input[name=reason]:checked').val(), l = setTimeout(function() {
        var t = r.find('.modalStep.processing');
        new e.loader(t), t.addClass('active loading');
      }, e.component.loadDelay);
      t.reason = a, e.analytics.trackGAEvent(s, 'clicked'), $.ajax({
        url: '/resource/',
        type: 'POST',
        dataType: 'json',
        data: t,
        error: function(t) {clearTimeout(l), e.setButtonRateLimit(function() {o.removeClass('disabled');}), r.find('.modalStep').removeClass('active loading'), e.analytics.trackGAEvent(s, 'error', t.responseText);},
        success: function(t) {clearTimeout(l), r.find('.modalStep').removeClass('active loading'), 1 === t.status ? (r.find('.modalStep.complete').addClass('active'), e.component.hide(1200), e.analytics.trackGAEvent(s, 'success', n)) : (e.setButtonRateLimit(function() {o.removeClass('disabled');}), e.analytics.trackGAEvent(s, 'failed', t.errors));}
      });
    }
  };
}(App), function(e) {
  'use strict';
  'function' == typeof define && define.amd ? define(['jquery'], e) : 'undefined' != typeof exports ? module.exports = e(require('jquery')) : e(jQuery);
}(function(e) {
  'use strict';
  var t = window.Slick || {};
  (t = function() {
    var t = 0;
    return function(i, n) {
      var r, o = this;
      o.defaults = {
        accessibility: !1,
        adaptiveHeight: !1,
        appendArrows: e(i),
        appendDots: e(i),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><em></em></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><em></em></button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !0,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function(t, i) {return e('<button type="button" />').text(i + 1);},
        dots: !1,
        dotsClass: 'slick-dots',
        draggable: !1,
        easing: 'linear',
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: !1,
        pauseOnHover: !1,
        pauseOnFocus: !1,
        pauseOnDotsHover: !1,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !1,
        swipeToSlide: !1,
        touchMove: !1,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, o.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, e.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = 'hidden', o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = e(i), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = 'visibilitychange', o.windowWidth = 0, o.windowTimer = null, r = e(i).data('slick') || {}, o.options = e.extend({}, o.defaults, n, r), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, void 0 !== document.mozHidden ? (o.hidden = 'mozHidden', o.visibilityChange = 'mozvisibilitychange') : void 0 !== document.webkitHidden && (o.hidden = 'webkitHidden', o.visibilityChange = 'webkitvisibilitychange'), o.autoPlay = e.proxy(o.autoPlay, o), o.autoPlayClear = e.proxy(o.autoPlayClear, o), o.autoPlayIterator = e.proxy(o.autoPlayIterator, o), o.changeSlide = e.proxy(o.changeSlide, o), o.clickHandler = e.proxy(o.clickHandler, o), o.selectHandler = e.proxy(o.selectHandler, o), o.setPosition = e.proxy(o.setPosition, o), o.keyHandler = e.proxy(o.keyHandler, o), o.instanceUid = t++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0);
    };
  }()).prototype.activateADA = function() {this.$slideTrack.find('.slick-active').attr({ 'aria-hidden': 'false' }).find('a, input, button, select').attr({ tabindex: '0' });}, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
    var r = this;
    if ('boolean' == typeof i) n = i, i = null; else if (i < 0 || i >= r.slideCount) return !1;
    r.unload(), 'number' == typeof i ? 0 === i && 0 === r.$slides.length ? e(t).appendTo(r.$slideTrack) : n ? e(t).insertBefore(r.$slides.eq(i)) : e(t).insertAfter(r.$slides.eq(i)) : !0 === n ? e(t).prependTo(r.$slideTrack) : e(t).appendTo(r.$slideTrack), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slides.each(function(t, i) {e(i).attr('data-slick-index', t);}), r.$slidesCache = r.$slides, r.reinit();
  }, t.prototype.animateHeight = function() {
    var e = this;
    if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
      var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
      e.$list.animate({ height: t }, e.options.speed);
    }
  }, t.prototype.animateSlide = function(t, i) {
    var n = {}, r = this;
    r.animateHeight(), !0 === r.options.rtl && !1 === r.options.vertical && (t = -t), !1 === r.transformsEnabled ? !1 === r.options.vertical ? r.$slideTrack.animate({ left: t }, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({ top: t }, r.options.speed, r.options.easing, i) : !1 === r.cssTransitions ? (!0 === r.options.rtl && (r.currentLeft = -r.currentLeft), e({ animStart: r.currentLeft }).animate({ animStart: t }, {
      duration: r.options.speed,
      easing: r.options.easing,
      step: function(e) {e = Math.ceil(e), !1 === r.options.vertical ? (n[r.animType] = 'translate(' + e + 'px, 0px)', r.$slideTrack.css(n)) : (n[r.animType] = 'translate(0px,' + e + 'px)', r.$slideTrack.css(n));},
      complete: function() {i && i.call();}
    })) : (r.applyTransition(), t = Math.ceil(t), !1 === r.options.vertical ? n[r.animType] = 'translate3d(' + t + 'px, 0px, 0px)' : n[r.animType] = 'translate3d(0px,' + t + 'px, 0px)', r.$slideTrack.css(n), i && setTimeout(function() {r.disableTransition(), i.call();}, r.options.speed));
  }, t.prototype.getNavTarget = function() {
    var t = this, i = t.options.asNavFor;
    return i && null !== i && (i = e(i).not(t.$slider)), i;
  }, t.prototype.asNavFor = function(t) {
    var i = this.getNavTarget();
    null !== i && 'object' == typeof i && i.each(function() {
      var i = e(this).slick('getSlick');
      i.unslicked || i.slideHandler(t, !0);
    });
  }, t.prototype.applyTransition = function(e) {
    var t = this, i = {};
    !1 === t.options.fade ? i[t.transitionType] = t.transformType + ' ' + t.options.speed + 'ms ' + t.options.cssEase : i[t.transitionType] = 'opacity ' + t.options.speed + 'ms ' + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i);
  }, t.prototype.autoPlay = function() {
    var e = this;
    e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed));
  }, t.prototype.autoPlayClear = function() {
    var e = this;
    e.autoPlayTimer && clearInterval(e.autoPlayTimer);
  }, t.prototype.autoPlayIterator = function() {
    var e = this, t = e.currentSlide + e.options.slidesToScroll;
    e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t));
  }, t.prototype.buildArrows = function() {
    var t = this;
    !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass('slick-arrow'), t.$nextArrow = e(t.options.nextArrow).addClass('slick-arrow'), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex'), t.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex'), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.appendTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true')) : t.$prevArrow.add(t.$nextArrow).addClass('slick-hidden').attr({
      'aria-disabled': 'true',
      tabindex: '-1'
    }));
  }, t.prototype.buildDots = function() {
    var t, i, n = this;
    if (!0 === n.options.dots) {
      for (n.$slider.addClass('slick-dotted'), i = e('<ul />').addClass(n.options.dotsClass), t = 0; t <= n.getDotCount(); t += 1) i.append(e('<li />').append(n.options.customPaging.call(this, n, t)));
      n.$dots = i.appendTo(n.options.appendDots), n.$dots.find('li').first().addClass('slick-active');
    }
  }, t.prototype.buildOut = function() {
    var t = this;
    t.$slides = t.$slider.children(t.options.slide + ':not(.slick-cloned)').addClass('slick-slide'), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {e(i).attr('data-slick-index', t).data('originalStyling', e(i).attr('style') || '');}), t.$slider.addClass('slick-slider'), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css('opacity', 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e('img[data-lazy]', t.$slider).not('[src]').addClass('slick-loading'), t.setupInfinite(), t.buildArrows(), t.setSlideClasses('number' == typeof t.currentSlide ? t.currentSlide : 0);
  }, t.prototype.buildRows = function() {
    var e, t, i, n, r, o, s, a = this;
    if (n = document.createDocumentFragment(), o = a.$slider.children(), a.options.rows > 1) {
      for (s = a.options.slidesPerRow * a.options.rows, r = Math.ceil(o.length / s), e = 0; e < r; e++) {
        var l = document.createElement('div');
        for (t = 0; t < a.options.rows; t++) {
          var c = document.createElement('div');
          for (i = 0; i < a.options.slidesPerRow; i++) {
            var d = e * s + (t * a.options.slidesPerRow + i);
            o.get(d) && c.appendChild(o.get(d));
          }
          l.appendChild(c);
        }
        n.appendChild(l);
      }
      a.$slider.empty().append(n), a.$slider.children().children().children().css({ width: 100 / a.options.slidesPerRow + '%', display: 'inline-block' });
    }
  }, t.prototype.checkResponsive = function(t, i) {
    var n, r, o, s = this, a = !1, l = s.$slider.width(), c = window.innerWidth || e(window).width();
    if ('window' === s.respondTo ? o = c : 'slider' === s.respondTo ? o = l : 'min' === s.respondTo && (o = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
      r = null;
      for (n in s.breakpoints) s.breakpoints.hasOwnProperty(n) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[n] && (r = s.breakpoints[n]) : o > s.breakpoints[n] && (r = s.breakpoints[n]));
      null !== r ? null !== s.activeBreakpoint ? (r !== s.activeBreakpoint || i) && (s.activeBreakpoint = r, 'unslick' === s.breakpointSettings[r] ? s.unslick(r) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[r]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = r) : (s.activeBreakpoint = r, 'unslick' === s.breakpointSettings[r] ? s.unslick(r) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[r]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = r) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = r), t || !1 === a || s.$slider.trigger('breakpoint', [s, a]);
    }
  }, t.prototype.changeSlide = function(t, i) {
    var n, r, o, s = this, a = e(t.currentTarget);
    switch (a.is('a') && t.preventDefault(), a.is('li') || (a = a.closest('li')), o = s.slideCount % s.options.slidesToScroll != 0, n = o ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
      case'previous':
        r = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - r, !1, i);
        break;
      case'next':
        r = 0 === n ? s.options.slidesToScroll : n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + r, !1, i);
        break;
      case'index':
        var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
        s.slideHandler(s.checkNavigable(l), !1, i), a.children().trigger('focus');
        break;
      default:
        return;
    }
  }, t.prototype.checkNavigable = function(e) {
    var t, i;
    if (t = this.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1]; else for (var n in t) {
      if (e < t[n]) {
        e = i;
        break;
      }
      i = t[n];
    }
    return e;
  }, t.prototype.cleanUpEvents = function() {
    var t = this;
    t.options.dots && null !== t.$dots && !0 === t.options.accessibility && t.$dots.off('keydown.slick', t.keyHandler), t.$slider.off('focus.slick blur.slick'), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off('click.slick', t.changeSlide), t.$nextArrow && t.$nextArrow.off('click.slick', t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off('keydown.slick', t.keyHandler), t.$nextArrow && t.$nextArrow.off('keydown.slick', t.keyHandler))), t.$list.off('click.slick', t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off('keydown.slick', t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off('click.slick', t.selectHandler), e(window).off('orientationchange.slick.slick-' + t.instanceUid, t.orientationChange), e(window).off('resize.slick.slick-' + t.instanceUid, t.resize), e('[draggable!=true]', t.$slideTrack).off('dragstart', t.preventDefault), e(window).off('load.slick.slick-' + t.instanceUid, t.setPosition);
  }, t.prototype.cleanUpSlideEvents = function() {
    var t = this;
    t.$list.off('mouseenter.slick', e.proxy(t.interrupt, t, !0)), t.$list.off('mouseleave.slick', e.proxy(t.interrupt, t, !1));
  }, t.prototype.cleanUpRows = function() {
    var e, t = this;
    t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr('style'), t.$slider.empty().append(e));
  }, t.prototype.clickHandler = function(e) {!1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());}, t.prototype.destroy = function(t) {
    var i = this;
    i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e('.slick-cloned', i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', ''), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', ''), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function() {e(this).attr('style', e(this).data('originalStyling'));}), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass('slick-slider'), i.$slider.parents('.featuredDisplayContainer').removeClass('isReady'), i.$slider.removeClass('slick-dotted'), i.unslicked = !0, t || i.$slider.trigger('destroy', [i]);
  }, t.prototype.disableTransition = function(e) {
    var t = this, i = {};
    i[t.transitionType] = '', !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i);
  }, t.prototype.fadeSlide = function(e, t) {
    var i = this;
    !1 === i.cssTransitions ? (i.$slides.eq(e).css({ zIndex: i.options.zIndex }), i.$slides.eq(e).animate({ opacity: 1 }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
      opacity: 1,
      zIndex: i.options.zIndex
    }), t && setTimeout(function() {i.disableTransition(e), t.call();}, i.options.speed));
  }, t.prototype.fadeSlideOut = function(e) {
    var t = this;
    !1 === t.cssTransitions ? t.$slides.eq(e).animate({ opacity: 0, zIndex: t.options.zIndex - 2 }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
      opacity: 0,
      zIndex: t.options.zIndex - 2
    }));
  }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
    var t = this;
    null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit());
  }, t.prototype.focusHandler = function() {
    var t = this;
    t.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*', function(i) {
      i.stopImmediatePropagation();
      var n = e(this);
      setTimeout(function() {t.options.pauseOnFocus && (t.focussed = n.is(':focus'), t.autoPlay());}, 0);
    });
  }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {return this.currentSlide;}, t.prototype.getDotCount = function() {
    var e = this, t = 0, i = 0, n = 0;
    if (!0 === e.options.infinite) if (e.slideCount <= e.options.slidesToShow) ++n; else for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else if (!0 === e.options.centerMode) n = e.slideCount; else if (e.options.asNavFor) for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
    return n - 1;
  }, t.prototype.getLeft = function(e) {
    var t, i, n, r, o = this, s = 0;
    return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = -1, !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? r = -1.5 : 1 === o.options.slidesToShow && (r = -2)), s = i * o.options.slidesToShow * r), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, s = (o.options.slidesToShow - (e - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, s = o.slideCount % o.options.slidesToScroll * i * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (e + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, s = 0), !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * i * -1 + s, !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children('.slick-slide').eq(e) : o.$slideTrack.children('.slick-slide').eq(e + o.options.slidesToShow), t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children('.slick-slide').eq(e) : o.$slideTrack.children('.slick-slide').eq(e + o.options.slidesToShow + 1), t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (o.$list.width() - n.outerWidth()) / 2)), t;
  }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {return this.options[e];}, t.prototype.getNavigableIndexes = function() {
    var e, t = this, i = 0, n = 0, r = [];
    for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) r.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
    return r;
  }, t.prototype.getSlick = function() {return this;}, t.prototype.getSlideCount = function() {
    var e = this;
    return !0 === e.options.centerMode ? e.slideWidth * Math.floor(e.options.slidesToShow / 2) : 0, e.options.slidesToScroll;
  }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {this.changeSlide({ data: { message: 'index', index: parseInt(e) } }, t);}, t.prototype.init = function(t) {
    var i = this;
    e(i.$slider).parents('.featuredDisplayContainer').hasClass('isReady') || (e(i.$slider).parents('.featuredDisplayContainer').addClass('isReady'), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.focusHandler()), t && i.$slider.trigger('init', [i]), !0 === i.options.accessibility && i.initADA();
  }, t.prototype.initADA = function() {
    var t = this, i = Math.ceil(t.slideCount / t.options.slidesToShow), n = t.getNavigableIndexes().filter(function(e) {return e >= 0 && e < t.slideCount;});
    t.$slides.add(t.$slideTrack.find('.slick-cloned')).attr({
      'aria-hidden': 'true',
      tabindex: '-1'
    }).find('a, input, button, select').attr({ tabindex: '-1' }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find('.slick-cloned')).each(function(i) {
      var r = n.indexOf(i);
      e(this).attr({ role: 'tabpanel', id: 'slick-slide' + t.instanceUid + i, tabindex: -1 }), -1 !== r && e(this).attr({ 'aria-describedby': 'slick-slide-control' + t.instanceUid + r });
    }), t.$dots.attr('role', 'tablist').find('li').each(function(r) {
      var o = n[r];
      e(this).attr({ role: 'presentation' }), e(this).find('button').first().attr({
        role: 'tab',
        id: 'slick-slide-control' + t.instanceUid + r,
        'aria-controls': 'slick-slide' + t.instanceUid + o,
        'aria-label': r + 1 + ' of ' + i,
        'aria-selected': null,
        tabindex: '-1'
      });
    }).eq(t.currentSlide).find('button').attr({ 'aria-selected': 'true', tabindex: '0' }).end());
    for (var r = t.currentSlide, o = r + t.options.slidesToShow; r < o; r++) t.$slides.eq(r).attr('tabindex', 0);
    t.activateADA();
  }, t.prototype.initArrowEvents = function() {
    var e = this;
    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off('click.slick').on('click.slick', { message: 'previous' }, e.changeSlide), e.$nextArrow.off('click.slick').on('click.slick', { message: 'next' }, e.changeSlide));
  }, t.prototype.initDotEvents = function() {
    var t = this;
    !0 === t.options.dots && (e('li', t.$dots).on('click.slick', { message: 'index' }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on('keydown.slick', t.keyHandler));
  }, t.prototype.initSlideEvents = function() {}, t.prototype.initializeEvents = function() {
    var t = this;
    t.initArrowEvents(), t.initSlideEvents(), t.$list.on('click.slick', t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on('keydown.slick', t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on('click.slick', t.selectHandler), e(window).on('load.slick.slick-' + t.instanceUid, t.setPosition), e(t.setPosition);
  }, t.prototype.initUI = function() {
    var e = this;
    !0 === e.options.arrows && (e.slideCount, e.options.slidesToShow), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show();
  }, t.prototype.keyHandler = function(e) {
    var t = this;
    e.target.tagName.match('TEXTAREA|INPUT|SELECT') || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({ data: { message: !0 === t.options.rtl ? 'next' : 'previous' } }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({ data: { message: !0 === t.options.rtl ? 'previous' : 'next' } }));
  }, t.prototype.lazyLoad = function() {
    function t(t) {
      e('img[data-lazy]', t).each(function() {
        var t = e(this), i = e(this).attr('data-lazy'), n = e(this).attr('data-srcset'), r = e(this).attr('data-sizes') || o.$slider.attr('data-sizes'), s = document.createElement('img');
        s.onload = function() {t.animate({ opacity: 0 }, 100, function() {n && (t.attr('srcset', n), r && t.attr('sizes', r)), t.attr('src', i).animate({ opacity: 1 }, 200, function() {t.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');}), o.$slider.trigger('lazyLoaded', [o, t, i]);});}, s.onerror = function() {t.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error'), o.$slider.trigger('lazyLoadError', [o, t, i]);}, s.src = i;
      });
    }

    var i, n, r, o = this;
    if (!0 === o.options.centerMode ? !0 === o.options.infinite ? r = (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), r = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, r = Math.ceil(n + o.options.slidesToShow), !0 === o.options.fade && (n > 0 && n--, r <= o.slideCount && r++)), i = o.$slider.find('.slick-slide').slice(n, r), 'anticipated' === o.options.lazyLoad) for (var s = n - 1, a = r, l = o.$slider.find('.slick-slide'), c = 0; c < o.options.slidesToScroll; c++) s < 0 && (s = o.slideCount - 1), i = (i = i.add(l.eq(s))).add(l.eq(a)), s--, a++;
    t(i), o.slideCount <= o.options.slidesToShow ? t(o.$slider.find('.slick-slide')) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? t(o.$slider.find('.slick-cloned').slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && t(o.$slider.find('.slick-cloned').slice(-1 * o.options.slidesToShow));
  }, t.prototype.loadSlider = function() {
    var e = this;
    e.setPosition(), e.$slideTrack.css({ opacity: 1 }), e.$slider.removeClass('slick-loading'), e.initUI(), 'progressive' === e.options.lazyLoad && e.progressiveLazyLoad();
  }, t.prototype.next = t.prototype.slickNext = function() {this.changeSlide({ data: { message: 'next' } });}, t.prototype.orientationChange = function() {this.setPosition();}, t.prototype.pause = t.prototype.slickPause = function() {
    var e = this;
    e.autoPlayClear(), e.paused = !0;
  }, t.prototype.play = t.prototype.slickPlay = function() {
    var e = this;
    e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1;
  }, t.prototype.postSlide = function(t) {
    var i = this;
    i.unslicked || (i.$slider.trigger('afterChange', [i, t]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && e(i.$slides.get(i.currentSlide)).attr('tabindex', 0).focus()));
  }, t.prototype.prev = t.prototype.slickPrev = function() {this.changeSlide({ data: { message: 'previous' } });}, t.prototype.preventDefault = function(e) {e.preventDefault();}, t.prototype.progressiveLazyLoad = function(t) {
    t = t || 1;
    var i, n, r, o, s, a = this, l = e('img[data-lazy]', a.$slider);
    l.length ? (i = l.first(), n = i.attr('data-lazy'), r = i.attr('data-srcset'), o = i.attr('data-sizes') || a.$slider.attr('data-sizes'), (s = document.createElement('img')).onload = function() {r && (i.attr('srcset', r), o && i.attr('sizes', o)), i.attr('src', n).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading'), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger('lazyLoaded', [a, i, n]), a.progressiveLazyLoad();}, s.onerror = function() {t < 3 ? setTimeout(function() {a.progressiveLazyLoad(t + 1);}, 500) : (i.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error'), a.$slider.trigger('lazyLoadError', [a, i, n]), a.progressiveLazyLoad());}, s.src = n) : a.$slider.trigger('allImagesLoaded', [a]);
  }, t.prototype.refresh = function(t) {
    var i, n, r = this;
    n = r.slideCount - r.options.slidesToShow, !r.options.infinite && r.currentSlide > n && (r.currentSlide = n), r.slideCount <= r.options.slidesToShow && (r.currentSlide = 0), i = r.currentSlide, r.destroy(!0), e.extend(r, r.initials, { currentSlide: i }), r.init(), t || r.changeSlide({
      data: {
        message: 'index',
        index: i
      }
    }, !1);
  }, t.prototype.registerBreakpoints = function() {
    var t, i, n, r = this, o = r.options.responsive || null;
    if ('array' === e.type(o) && o.length) {
      r.respondTo = r.options.respondTo || 'window';
      for (t in o) if (n = r.breakpoints.length - 1, o.hasOwnProperty(t)) {
        for (i = o[t].breakpoint; n >= 0;) r.breakpoints[n] && r.breakpoints[n] === i && r.breakpoints.splice(n, 1), n--;
        r.breakpoints.push(i), r.breakpointSettings[i] = o[t].settings;
      }
      r.breakpoints.sort(function(e, t) {return r.options.mobileFirst ? e - t : t - e;});
    }
  }, t.prototype.reinit = function() {
    var t = this;
    t.$slides = t.$slideTrack.children(t.options.slide).addClass('slick-slide'), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on('click.slick', t.selectHandler), t.setSlideClasses('number' == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.$slider.trigger('reInit', [t]);
  }, t.prototype.resize = function() {
    var t = this;
    e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {t.windowWidth = e(window).width(), t.unslicked || t.setPosition();}, 50));
  }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
    var n = this;
    if (e = 'boolean' == typeof e ? !0 === (t = e) ? 0 : n.slideCount - 1 : !0 === t ? --e : e, n.slideCount < 1 || e < 0 || e > n.slideCount - 1) return !1;
    n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit();
  }, t.prototype.setCSS = function(e) {
    var t, i, n = this, r = {};
    !0 === n.options.rtl && (e = -e), t = 'left' == n.positionProp ? Math.ceil(e) + 'px' : '0px', i = 'top' == n.positionProp ? Math.ceil(e) + 'px' : '0px', r[n.positionProp] = e, !1 === n.transformsEnabled ? n.$slideTrack.css(r) : (r = {}, !1 === n.cssTransitions ? (r[n.animType] = 'translate(' + t + ', ' + i + ')', n.$slideTrack.css(r)) : (r[n.animType] = 'translate3d(' + t + ', ' + i + ', 0px)', n.$slideTrack.css(r)));
  }, t.prototype.setDimensions = function() {
    var e = this;
    !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({ padding: '0px ' + e.options.centerPadding }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({ padding: e.options.centerPadding + ' 0px' })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children('.slick-slide').length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children('.slick-slide').length)));
    var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
    !1 === e.options.variableWidth && e.$slideTrack.children('.slick-slide').width(e.slideWidth - t);
  }, t.prototype.setFade = function() {
    var t, i = this;
    i.$slides.each(function(n, r) {
      t = i.slideWidth * n * -1, !0 === i.options.rtl ? e(r).css({
        position: 'relative',
        right: t,
        top: 0,
        zIndex: i.options.zIndex - 2,
        opacity: 0
      }) : e(r).css({ position: 'relative', left: t, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 });
    }), i.$slides.eq(i.currentSlide).css({ zIndex: i.options.zIndex - 1, opacity: 1 });
  }, t.prototype.setHeight = function() {
    var e = this;
    if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
      var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
      e.$list.css('height', t);
    }
  }, t.prototype.setOption = t.prototype.slickSetOption = function() {
    var t, i, n, r, o, s = this, a = !1;
    if ('object' === e.type(arguments[0]) ? (n = arguments[0], a = arguments[1], o = 'multiple') : 'string' === e.type(arguments[0]) && (n = arguments[0], r = arguments[1], a = arguments[2], 'responsive' === arguments[0] && 'array' === e.type(arguments[1]) ? o = 'responsive' : void 0 !== arguments[1] && (o = 'single')), 'single' === o) s.options[n] = r; else if ('multiple' === o) e.each(n, function(e, t) {s.options[e] = t;}); else if ('responsive' === o) for (i in r) if ('array' !== e.type(s.options.responsive)) s.options.responsive = [r[i]]; else {
      for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === r[i].breakpoint && s.options.responsive.splice(t, 1), t--;
      s.options.responsive.push(r[i]);
    }
    a && (s.unload(), s.reinit());
  }, t.prototype.setPosition = function() {
    var e = this;
    e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger('setPosition', [e]);
  }, t.prototype.setProps = function() {
    var e = this, t = document.body.style;
    e.positionProp = !0 === e.options.vertical ? 'top' : 'left', 'top' === e.positionProp ? e.$slider.addClass('slick-vertical') : e.$slider.removeClass('slick-vertical'), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ('number' == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = 'OTransform', e.transformType = '-o-transform', e.transitionType = 'OTransition', void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = 'MozTransform', e.transformType = '-moz-transform', e.transitionType = 'MozTransition', void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = 'webkitTransform', e.transformType = '-webkit-transform', e.transitionType = 'webkitTransition', void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = 'msTransform', e.transformType = '-ms-transform', e.transitionType = 'msTransition', void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = 'transform', e.transformType = 'transform', e.transitionType = 'transition'), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType;
  }, t.prototype.setSlideClasses = function(e) {
    var t, i, n, r, o = this;
    if (i = o.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true'), o.$slides.eq(e).addClass('slick-current'), !0 === o.options.centerMode) {
      var s = o.options.slidesToShow % 2 == 0 ? 1 : 0;
      t = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (e >= t && e <= o.slideCount - 1 - t ? o.$slides.slice(e - t + s, e + t + 1).addClass('slick-active').attr('aria-hidden', 'false') : (n = o.options.slidesToShow + e, i.slice(n - t + 1 + s, n + t + 2).addClass('slick-active').attr('aria-hidden', 'false')), 0 === e ? i.eq(i.length - 1 - o.options.slidesToShow).addClass('slick-center') : e === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass('slick-center')), o.$slides.eq(e).addClass('slick-center');
    } else e >= 0 && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false') : i.length <= o.options.slidesToShow ? i.addClass('slick-active').attr('aria-hidden', 'false') : (r = o.slideCount % o.options.slidesToShow, n = !0 === o.options.infinite ? o.options.slidesToShow + e : e, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? i.slice(n - (o.options.slidesToShow - r), n + r).addClass('slick-active').attr('aria-hidden', 'false') : i.slice(n, n + o.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false'));
    'ondemand' !== o.options.lazyLoad && 'anticipated' !== o.options.lazyLoad || o.lazyLoad();
  }, t.prototype.setupInfinite = function() {
    var t, i, n, r = this;
    if (!0 === r.options.fade && (r.options.centerMode = !1), !0 === r.options.infinite && !1 === r.options.fade && (i = null, r.slideCount > r.options.slidesToShow)) {
      for (n = !0 === r.options.centerMode ? r.options.slidesToShow + 1 : r.options.slidesToShow, t = r.slideCount; t > r.slideCount - n; t -= 1) i = t - 1, e(r.$slides[i]).clone(!0).attr('id', '').attr('data-slick-index', i - r.slideCount).prependTo(r.$slideTrack).addClass('slick-cloned');
      for (t = 0; t < n + r.slideCount; t += 1) i = t, e(r.$slides[i]).clone(!0).attr('id', '').attr('data-slick-index', i + r.slideCount).appendTo(r.$slideTrack).addClass('slick-cloned');
      r.$slideTrack.find('.slick-cloned').find('[id]').each(function() {e(this).attr('id', '');});
    }
  }, t.prototype.interrupt = function(e) {
    var t = this;
    e || t.autoPlay(), t.interrupted = e;
  }, t.prototype.selectHandler = function(t) {
    var i = this, n = e(t.target).is('.slick-slide') ? e(t.target) : e(t.target).parents('.slick-slide'), r = parseInt(n.attr('data-slick-index'));
    r || (r = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(r, !1, !0) : i.slideHandler(r);
  }, t.prototype.slideHandler = function(e, t, i) {
    var n, r, o, s, a, l = null, c = this;
    if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e)) if (!1 === t && c.asNavFor(e), n = e, l = c.getLeft(n), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(s, function() {c.postSlide(n);}) : c.postSlide(n)); else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(s, function() {c.postSlide(n);}) : c.postSlide(n)); else {
      if (c.options.autoplay && clearInterval(c.autoPlayTimer), r = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger('beforeChange', [c, c.currentSlide, r]), o = c.currentSlide, c.currentSlide = r, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick('getSlick')).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(o), c.fadeSlide(r, function() {c.postSlide(r);})) : c.postSlide(r), void c.animateHeight();
      !0 !== i ? c.animateSlide(l, function() {c.postSlide(r);}) : c.postSlide(r);
    }
  }, t.prototype.startLoad = function() {
    var e = this;
    !0 === e.options.arrows && (e.slideCount, e.options.slidesToShow), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass('slick-loading');
  }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
    var e = this;
    null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit());
  }, t.prototype.unload = function() {
    var t = this;
    e('.slick-cloned', t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
  }, t.prototype.unslick = function(e) {
    var t = this;
    t.$slider.trigger('unslick', [t, e]), t.destroy();
  }, t.prototype.updateArrows = function() {
    var e = this;
    Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'), e.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'), 0 === e.currentSlide ? (e.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true'), e.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false')) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true'), e.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false')) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true'), e.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false')));
  }, t.prototype.updateDots = function() {
    var e = this;
    null !== e.$dots && (e.$dots.find('li').removeClass('slick-active').end(), e.$dots.find('li').eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass('slick-active'));
  }, t.prototype.visibility = function() {
    var e = this;
    e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1);
  }, e.fn.slick = function() {
    var e, i, n = this, r = arguments[0], o = Array.prototype.slice.call(arguments, 1), s = n.length;
    for (e = 0; e < s; e++) if ('object' == typeof r || void 0 === r ? n[e].slick = new t(n[e], r) : i = n[e].slick[r].apply(n[e].slick, o), void 0 !== i) return i;
    return n;
  };
}), function(e) {
  e.tags = function() {
    var t = e.$app.find('.mediaTags'), i = t.find('.mediaTagsInnerScroller'), n = !1;
    !function() {
      var e = i.parent(), r = e.find('.nextShift'), o = e.find('.prevShift');
      i.on('scroll', _.throttle(function(e) {
        var t = $(e.currentTarget), i = t[0].scrollWidth, n = t.scrollLeft();
        i - n - 10 <= t.outerWidth() ? (o.addClass('active'), r.removeClass('active')) : n <= 10 ? (o.removeClass('active'), r.addClass('active')) : (o.addClass('active'), r.addClass('active'));
      }, 20)), r.on('click', function(e) {
        return n || (n = !0, i.scrollTo('+=' + .5 * t.width() + 'px', 280, {
          axis: 'x',
          onAfter: function() {n = !1;}
        })), !1;
      }), o.on('click', function(e) {return n || (n = !0, i.scrollTo('-=' + .5 * t.width() + 'px', 280, { axis: 'x', onAfter: function() {n = !1;} })), !1;});
    }();
  };
}(App), function(e) {
  var t = function() {
    if (this.active = !1, e.json && e.json.page.user.showPromoted) {
      if (this.data = e.json.page.ads, !this.data) return this.active = !1, !1;
      this.url = this.data.track_url + '/_a_dspn.gif', this.duration = 86400, this.active = !0, !1 === e.page.getCookie('duid') && e.page.createCookie('duid', this.generateUniqueId(), 31536e3), this.init();
    }
  };
  t.prototype = {
    display: function(t, i) {return !(!e.hasOwnProperty(t, i) || !t[i]);},
    init: function() {
      var t = this;
      t.checkBlocking(function() {
        if (t.active) {
          var i = t.data;
          t.display(i, 'homepage_banner') && (t.sendEvent('impression', i.homepage_banner), e.$app.on('click', '.homepageBanner a', function(e) {t.sendEvent('click', i.homepage_banner);})), t.display(i, 'closeup_sidebar') && ($('.Static .closeupSidebar').length > 0 && t.sendEvent('impression', i.closeup_sidebar), e.$body.on('click', '.closeupSidebar a', function(e) {t.sendEvent('click', i.closeup_sidebar);}));
        }
      });
    },
    generateUniqueId: function() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(e) {
        var t = 16 * Math.random() | 0;
        return ('x' == e ? t : 3 & t | 8).toString(16);
      });
    },
    canBeDisplayed: function() {
      if (!this.active) {
        var t = e.$app.find('.featuredDisplay .homepageBanner'), i = e.$app.find('.closeupSidebar');
        t.length > 0 && t.parent().remove(), i.length > 0 && i.remove();
      }
    },
    checkBlocking: function(t) {
      var i = this, n = !1, r = e.page.getCookie('has_ab');
      if (r) 'active' === r && (n = !0); else {
        var o = document.createElement('div');
        o.innerHTML = '&nbsp;', o.className = 'adsbox', document.body.appendChild(o);
        var s;
        0 === o.offsetHeight ? (n = !1, s = 'active') : (n = !0, s = 'inactive'), i.hasAdBlocker = n, e.page.createCookie('has_ab', s, i.duration), document.body.removeChild(o);
      }
      t();
    },
    serialize: function(e) {
      var t = [];
      for (var i in e) e.hasOwnProperty(i) && ('[object Object]' != Object.prototype.toString.call(e[i]) ? t.push(i + '=' + encodeURIComponent(e[i])) : t.push(this.serialize(e[i])));
      return t.join('&');
    },
    sendEvent: function(t, i) {
      if (this.active) {
        var n = this.objectize({ id: i.id, type: t, cache: (new Date).getTime() }), r = this.url + '?' + this.serialize(n), o = function(n, s, a) {
          if (!n || '' === n) return !1;
          var l = new Image;
          l.addEventListener('load', function() {}), l.addEventListener('error', function() {a || o(r.replace('pn.g', 'pn_e.g'), s, !0);}), l.src = n, e.analytics.trackGAEvent('Ads', t, i.ad_type);
        };
        if (o(r, t, !0), i && !e.config.DEVELOPMENT) if ('impression' === t) {if (i.impression_urls.length > 0) for (var s = 0; s < i.impression_urls.length; s += 1) o(i.impression_urls[s], t);} else 'click' === t && i.click_tracking_url && o(i.click_tracking_url, t);
      }
    },
    getScreen: function() {return screen.width + 'x' + screen.height;},
    getScreenHeight: function() {return screen.height;},
    getScreenWidth: function() {return screen.width;},
    getColorDepth: function() {return screen.colorDepth;},
    dnt: function() {return '1' == window.navigator.doNotTrack || 'yes' == window.navigator.doNotTrack;},
    hash: function(e) {
      for (var t = 0, i = 0; i < e.length; ++i) t += e.charCodeAt(i), t += t << 10, t ^= t >> 6;
      return t += t << 3, t ^= t >> 11, t += t << 15, (t = Math.abs(t & t)).toString(36);
    },
    objectize: function(t) {
      var i = {
        v: 1,
        app: this.data.app_id,
        duid: e.page.getCookie('duid'),
        fp: this.getFingerprint(),
        ab: e.page.getCookie('has_ab'),
        sw: this.getScreenWidth(),
        sh: this.getScreenHeight(),
        sc: this.getColorDepth(),
        l: App.json.page.user.isLoggedIn,
        e: t,
        ts: e.now()
      };
      return App.json.page.user.isLoggedIn && (i.uid = App.json.page.user.user_id), i;
    },
    getFingerprint: function() {
      var e = window.navigator, t = e.userAgent;
      if (t += this.getScreen(), e.plugins.length > 0) for (i = 0; i < e.plugins.length; i++) t += e.plugins[i].filename + e.plugins[i].version + e.plugins[i].description;
      if (e.mimeTypes.length > 0) for (var i = 0; i < e.mimeTypes.length; i++) t += e.mimeTypes[i].type;
      if (/MSIE (\d+\.\d+);/.test(e.userAgent)) try {t += activeXDetect();} catch (e) {}
      return this.hash(t);
    },
    buildCloseupSidebar: function(t, i) {
      if (this.active && (t = t.closeup_sidebar)) {
        var n = e.create({ DIV: { className: 'closeupSidebar', style: 'background-color:' + t.background + ';' } });
        e.set(n, 'data-id', t.id);
        var r = t.images, o = r['1x'], s = [o.url + ' 1x', r['2x'].url + ' 2x'], a = e.create({ IMG: { alt: '', className: 'gridItemImage', src: o.url, srcset: s.join(', ') } }),
            l = e.create({ A: { href: t.click_url, target: '_blank', rel: 'nofollow' } });
        l.appendChild(a), n.appendChild(l), i.find('.mediaAuthor').after(n), this.sendEvent('impression', t);
      }
    }
  }, e.AdManager = t;
}(App), function(e) {
  var t = {
    EDIT_BTN: { classes: 'profileEdit grey', text: 'Edit' },
    FOLLOWING_BTN: { classes: 'profileUnfollow grey', text: 'Unfollow' },
    FOLLOW_BTN: { classes: 'profileFollow blue', text: 'Follow All' },
    SIGNUP_BTN: { classes: 'profileSignup blue', text: 'Follow All' }
  };
  e.user = {
    current: {},
    validateForm: {
      settings: function(t, i, n) {
        var r = $.trim(t.find('.email').val()), o = $.trim(t.find('.username').val()), s = $.trim(t.find('.firstName').val());
        if ('' !== r && '' !== o && '' !== s) return e.validate.form(t), i.removeClass('disabled'), !0;
        var a = { validation: {} };
        return r || (a.validation.email = 'Please enter your email'), o || (a.validation.username = 'Please enter a username'), s || (a.validation.first_name = 'Please enter your first name'), e.validate.form(t, a), i.addClass('disabled'), !1;
      }, login: function(t, i, n) {
        var r = $.trim(t.find('.username').val()), o = $.trim(t.find('.password').val()), s = !1;
        if ('' !== r && '' !== o) e.validate.form(t), i.removeClass('disabled'), s = !0; else {
          var a = { validation: {} };
          r || (a.validation.username = 'Please enter your username'), o || (a.validation.password = 'Please enter your password'), e.validate.form(t, a), i.addClass('disabled');
        }
        return s;
      }, passwordForgot: function(t, i, n) {
        var r = $.trim(t.find('.email').val()), o = !1;
        if ('' !== r) e.validate.form(t), i.removeClass('disabled'), o = !0; else {
          var s = { validation: {} };
          r || (s.validation.email = 'Please enter your email'), e.validate.form(t, s), i.addClass('disabled');
        }
        return o;
      }, passwordReset: function(t, i, n) {
        var r = $.trim(t.find('.newPassword').val()), o = $.trim(t.find('.confirmPassword').val()), s = !1;
        if ('' !== r && '' !== o) e.validate.form(t), i.removeClass('disabled'), s = !0; else {
          var a = { validation: {} };
          r || (a.validation.new_password = 'Please create a new password'), o || (a.validation.confirm_password = 'Please re-type your new password'), e.validate.form(t, a), i.addClass('disabled');
        }
        return s;
      }, signup: function(t, i, n) {
        var r = $.trim(t.find('.email').val()), o = $.trim(t.find('.password').val()), s = !1;
        return '' !== r && '' !== o && (e.validate.form(t), i.removeClass('disabled'), s = !0), s;
      }
    },
    init: function() {this.addListeners();},
    addListeners: function() {
      var t = e.$app;
      e.config.isLoggedIn ? (t.on('click.page', '.profileFollow', function(t) {
        var i = $(this);
        return i.hasClass('disabled') || e.user.follow(i), !1;
      }), t.on('click.page', '.profileUnfollow', function(t) {
        var i = $(this);
        return i.hasClass('disabled') || e.user.unfollow(i), !1;
      })) : t.on('click', '.profileSignup', function(t) {return e.component.load({ component: e.page.accessUI.component, modal: e.page.accessUI.modal, trigger: $(this) }), !1;});
    },
    login: function(t, i, n) {
      var r = setTimeout(function() {i.text('').addClass('disabled isLoader loading'), new e.loader(i, 2);}, e.component.loadDelay);
      t.removeClass('hasSuccess hasError'), $.ajax({
        url: '/resource/',
        type: 'POST',
        dataType: 'json',
        data: t.serialize(),
        error: function(t) {clearTimeout(r), i.html('Log in'), e.setButtonRateLimit(function() {i.removeClass('disabled');}), e.analytics.trackGAEvent(n, 'error', t.responseText);},
        success: function(o) {1 === o.status ? (e.analytics.trackGAEvent(n, 'success'), e.page.setUI('ui_last_access', 'login'), e.redirect(o.location, 100)) : (clearTimeout(r), i.html('Log in'), e.setButtonRateLimit(function() {i.removeClass('disabled');}), e.validate.form(t, o.errors), e.analytics.trackGAEvent(n, 'failed', o.errors));}
      });
    },
    signupStep1: function(t, i, n, r) {
      var o = setTimeout(function() {n.text('').addClass('disabled isLoader loading'), new e.loader(n, 2);}, e.component.loadDelay);
      i.removeClass('hasSuccess hasError'), $.ajax({
        url: '/resource/',
        type: 'POST',
        dataType: 'json',
        data: i.find(':input').serialize(),
        error: function(t) {e.setButtonRateLimit(function() {n.removeClass('disabled');}), e.analytics.trackGAEvent(r, 'step_1_error', t.responseText);},
        success: function(t) {1 === t.status ? (e.analytics.trackGAEvent(r, 'step_1_success'), e.redirect(t.location, 100)) : (e.validate.form(i, t.errors), e.analytics.trackGAEvent(r, 'step_1_failed', t.errors));},
        complete: function() {e.$window.trigger('onModalDimensionChanged'), clearTimeout(o), n.html('Sign up'), e.setButtonRateLimit(function() {n.removeClass('disabled');});}
      });
    },
    signupStep2: function(t, i, n) {
      var r = setTimeout(function() {i.text('').addClass('disabled isLoader loading'), new e.loader(i, 2);}, e.component.loadDelay), o = t.parents('.modalForm');
      t.removeClass('hasSuccess hasError'), $.ajax({
        url: '/resource/',
        type: 'POST',
        dataType: 'json',
        data: o.find('.email, .password, .step2 :input').serialize(),
        error: function(t) {e.setButtonRateLimit(function() {i.removeClass('disabled');}), e.analytics.trackGAEvent(n, 'step_2_error', t.responseText);},
        success: function(i) {1 === i.status ? (e.analytics.trackGAEvent(n, 'step_2_success'), e.redirect(i.location, 100)) : (e.validate.form(t, i.errors), e.analytics.trackGAEvent(n, 'step_2_failed', i.errors));},
        complete: function() {e.$window.trigger('onModalDimensionChanged'), clearTimeout(r), i.html('Continue'), e.setButtonRateLimit(function() {i.removeClass('disabled');});}
      });
    },
    passwordForgot: function(t, i, n) {
      var r = setTimeout(function() {i.text('').addClass('disabled isLoader loading'), new e.loader(i, 2);}, e.component.loadDelay);
      $.ajax({
        url: '/resource/',
        type: 'POST',
        dataType: 'json',
        data: t.serialize(),
        error: function(t) {e.analytics.trackGAEvent(n, 'error', t.responseText);},
        success: function(o) {clearTimeout(r), 1 === o.status ? (e.$app.find('.formTitle').html(o.message), i.removeClass('isLoader loading').html('Email Sent'), t.addClass('hasSuccess'), e.analytics.trackGAEvent(n, 'success')) : (e.validate.form(t, o.errors), e.setButtonRateLimit(function() {i.removeClass('disabled');}), e.analytics.trackGAEvent(n, 'failed', o.errors));},
        complete: function() {clearTimeout(r), e.$window.trigger('onModalDimensionChanged'), i.removeClass('isLoader loading').html('Email Me Instructions');}
      });
    },
    passwordReset: function(t, i, n) {
      var r = setTimeout(function() {i.text('').addClass('disabled isLoader loading'), new e.loader(i, 2);}, e.component.loadDelay);
      $.ajax({
        url: '/resource/',
        type: 'POST',
        dataType: 'json',
        data: t.serialize(),
        error: function(t) {e.analytics.trackGAEvent(n, 'error', t.responseText);},
        success: function(o) {clearTimeout(r), 1 === o.status ? (e.analytics.trackGAEvent(n, 'success'), i.removeClass('isLoader loading'), t.parents('.passwordFormContainer').addClass('hasSuccess')) : (e.validate.form(t, o.errors), e.setButtonRateLimit(function() {i.removeClass('disabled');}), e.analytics.trackGAEvent(n, 'failed', o.errors));},
        complete: function() {clearTimeout(r), i.removeClass('isLoader loading').html('Save Password');}
      });
    },
    resendConfirmEmail: function(t, i) {
      var n = setTimeout(function() {t.text('').addClass('disabled isLoader loading'), new e.loader(t, 2);}, e.component.loadDelay);
      $.ajax({
        url: '/resource/',
        type: 'POST',
        dataType: 'json',
        data: { user: 1, resend_email: 1, request_token: e.config.requestToken },
        error: function(t) {e.analytics.trackGAEvent(i, 'error', t.responseText);},
        success: function(r) {
          var o = t.parents('.confirmParent').find('p');
          clearTimeout(n), 1 === r.status ? (e.analytics.trackGAEvent(i, 'success'), o.html(r.message), t.hide()) : (e.analytics.trackGAEvent(i, 'failed', r.errors), r.errors.application && (o.html(r.errors.application), t.hide()));
        },
        complete: function() {e.setButtonRateLimit(function() {t.removeClass('disabled');});}
      });
    },
    logout: function(t) {
      $.ajax({
        url: '/resource/',
        type: 'POST',
        dataType: 'json',
        data: { user: 1, logout: 1, request_token: e.config.requestToken },
        error: function(i) {e.analytics.trackGAEvent(t, 'error', i.responseText);},
        success: function(i) {1 === i.status ? (e.analytics.trackGAEvent(t, 'success'), e.redirect(i.location, 200)) : e.analytics.trackGAEvent(t, 'failed');}
      });
    },
    interests: function(t, i, n) {
      var r = setTimeout(function() {i.text('').addClass('disabled isLoader loading'), new e.loader(i, 2);}, e.component.loadDelay), o = [];
      t.find('.selectedInterest:checked').each(function() {o.push($(this).val());}), $.ajax({
        url: '/resource/',
        type: 'POST',
        dataType: 'json',
        data: { user: 1, signup_interests: 1, request_token: e.config.requestToken, interests: o.join(',') },
        error: function(t) {e.setButtonRateLimit(function() {i.removeClass('disabled');}), e.analytics.trackGAEvent(n, 'step_3_error', t.responseText);},
        success: function(i) {1 === i.status ? (e.analytics.trackGAEvent(n, 'step_3_success'), e.redirect(i.location, 100)) : (e.validate.form(t, i.errors), e.analytics.trackGAEvent(n, 'step_3_failed', i.errors));},
        complete: function() {clearTimeout(r), i.html('Build my feed'), e.setButtonRateLimit(function() {i.removeClass('disabled');});}
      });
    },
    settings: function(t, i, n) {
      var r = {
        button: i,
        data: e.$app.find('.settingsForm').serialize(),
        GAEventType: n,
        successCallback: function(r) {
          if (1 === r.status) {
            var o = '/' + t.find('.username').val() + '/';
            t.find('.cancelTrigger').attr('href', o).html('Done'), e.$app.find('.settingProfileNav,.headerNavProfileLink').attr('href', o), t.find('.settingsFormNotifer').html(r.message), t.addClass('hasSuccess'), e.analytics.trackGAEvent(n, 'success'), setTimeout(function() {e.redirect('/settings/');}, 2e3);
          } else e.validate.form(t, r.errors), t.addClass('hasError'), e.analytics.trackGAEvent(n, 'failed');
          i.addClass('saveSettingsTrigger blue').html('Save');
        }
      };
      t.removeClass('hasSuccess hasError'), e.user.autoLoadAjax(r);
    },
    follow: function(i) {
      var n = {
        button: i,
        data: { user: 1, follow: 1, url: i.attr('data-url'), request_token: e.config.requestToken },
        GAEventType: 'follow_user',
        successCallback: function(n) {
          var r, o, s;
          if (1 === n.status) {
            var a = e.collection.HTML;
            r = t.FOLLOWING_BTN.text, o = t.FOLLOWING_BTN.classes, s = 'success', 1 === parseInt(i.attr('data-element-type')) && e.collection.updateAllGridActions('follow'), e.$app.find('.collectionFollow').removeClass().addClass(a.FOLLOWING_BTN.classes).html(a.FOLLOWING_BTN.text), i.removeClass().addClass(o).html(r);
          } else r = t.FOLLOWING_BTN.text, o = t.FOLLOW_BTN.classes, s = 'failed', i.removeClass().addClass(o).html(r);
          e.analytics.trackGAEvent('follow_user', s);
        }
      };
      e.analytics.trackGAEvent('follow_user', 'clicked'), e.user.autoLoadAjax(n);
    },
    unfollow: function(i) {
      var n = {
        button: i,
        data: { user: 1, unfollow: 1, url: i.attr('data-url'), request_token: e.config.requestToken },
        GAEventType: 'unfollow_user',
        successCallback: function(n) {
          var r, o, s;
          if (1 === n.status) {
            var a = e.collection.HTML;
            r = t.FOLLOW_BTN.text, o = t.FOLLOW_BTN.classes, s = 'success', 1 === parseInt(i.attr('data-element-type')) && e.collection.updateAllGridActions('unfollow'), i.removeClass().addClass(o).html(r), e.$app.find('.collectionUnfollow').removeClass().addClass(a.FOLLOW_BTN.classes).html(a.FOLLOW_BTN.text);
          } else r = t.FOLLOWING_BTN.text, o = t.FOLLOWING_BTN.classes, s = 'failed', i.removeClass().addClass(o).html(r);
          e.analytics.trackGAEvent('unfollow_user', s);
        }
      };
      e.user.autoLoadAjax(n);
    },
    autoLoadAjax: function(t) {
      var i;
      $.ajax({
        url: '/resource/',
        type: 'POST',
        dataType: 'json',
        data: t.data,
        error: function(n) {clearTimeout(i), e.setButtonRateLimit(function() {t.button.removeClass('disabled');}), e.analytics.trackGAEvent(t.GAEventType, 'error', n.responseText);},
        beforeSend: function() {i = setTimeout(function() {t.button.text('').addClass('disabled isLoader loading'), new e.loader(t.button, 2);}, e.component.loadDelay), e.analytics.trackGAEvent(t.GAEventType, 'clicked');},
        success: t.successCallback,
        complete: function() {clearTimeout(i), e.setButtonRateLimit(function() {t.button.removeClass('disabled');});}
      });
    },
    loadCollections: function() {
      var t = e.modal.activeModal, i = { user: 1, collections: 1, request_token: e.config.requestToken }, n = setTimeout(function() {
        var i = t.find('.modalStep.processing');
        new e.loader(i);
        i.addClass('active loading');
      }, e.component.loadDelay);
      $.ajax({
        url: '/resource/user/get/',
        type: 'POST',
        dataType: 'json',
        data: i,
        error: function(e) {clearTimeout(n);},
        success: function(i) {1 === i.status && (t.find('.collections').append(i.data.collections), e.modal.setPosition());},
        complete: function() {t.find('.modalStep').removeClass('active loading'), clearTimeout(n);}
      });
    },
    resendConfirmEmail: function(t, i) {
      var n = setTimeout(function() {t.text('').addClass('disabled isLoader loading'), new e.loader(t, 2);}, e.component.loadDelay);
      $.ajax({
        url: '/resource/',
        type: 'POST',
        dataType: 'json',
        data: { user: 1, resend_email: 1, request_token: e.config.requestToken },
        error: function(t) {e.analytics.trackGAEvent(i, 'error', t.responseText);},
        success: function(r) {
          var o = t.parents('.confirmParent').find('p');
          clearTimeout(n), 1 === r.status ? (e.analytics.trackGAEvent(i, 'success'), o.html(r.message), t.hide()) : (e.analytics.trackGAEvent(i, 'failed', r.errors), r.errors.application && (o.html(r.errors.application), t.hide()));
        },
        complete: function() {e.setButtonRateLimit(function() {t.removeClass('disabled');});}
      });
    }
  };
}(App), function(e, t) {
  function i(t, i) {
    var r, o, s, a = t.nodeName.toLowerCase();
    return 'area' === a ? (r = t.parentNode, o = r.name, !(!t.href || !o || 'map' !== r.nodeName.toLowerCase()) && (!!(s = e('img[usemap=#' + o + ']')[0]) && n(s))) : (/input|select|textarea|button|object/.test(a) ? !t.disabled : 'a' === a ? t.href || i : i) && n(t);
  }

  function n(t) {return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {return 'hidden' === e.css(this, 'visibility');}).length;}

  var r = 0, o = /^ui-id-\d+$/;
  e.ui = e.ui || {}, e.extend(e.ui, {
    version: '1.10.4',
    keyCode: {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      NUMPAD_ADD: 107,
      NUMPAD_DECIMAL: 110,
      NUMPAD_DIVIDE: 111,
      NUMPAD_ENTER: 108,
      NUMPAD_MULTIPLY: 106,
      NUMPAD_SUBTRACT: 109,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
    }
  }), e.fn.extend({
    focus: function(t) {
      return function(i, n) {
        return 'number' == typeof i ? this.each(function() {
          var t = this;
          setTimeout(function() {e(t).focus(), n && n.call(t);}, i);
        }) : t.apply(this, arguments);
      };
    }(e.fn.focus),
    scrollParent: function() {
      var t;
      return t = e.ui.ie && /(static|relative)/.test(this.css('position')) || /absolute/.test(this.css('position')) ? this.parents().filter(function() {return /(relative|absolute|fixed)/.test(e.css(this, 'position')) && /(auto|scroll)/.test(e.css(this, 'overflow') + e.css(this, 'overflow-y') + e.css(this, 'overflow-x'));}).eq(0) : this.parents().filter(function() {return /(auto|scroll)/.test(e.css(this, 'overflow') + e.css(this, 'overflow-y') + e.css(this, 'overflow-x'));}).eq(0), /fixed/.test(this.css('position')) || !t.length ? e(document) : t;
    },
    zIndex: function(t) {
      if (void 0 !== t) return this.css('zIndex', t);
      if (this.length) for (var i, n, r = e(this[0]); r.length && r[0] !== document;) {
        if (('absolute' === (i = r.css('position')) || 'relative' === i || 'fixed' === i) && (n = parseInt(r.css('zIndex'), 10), !isNaN(n) && 0 !== n)) return n;
        r = r.parent();
      }
      return 0;
    },
    uniqueId: function() {return this.each(function() {this.id || (this.id = 'ui-id-' + ++r);});},
    removeUniqueId: function() {return this.each(function() {o.test(this.id) && e(this).removeAttr('id');});}
  }), e.extend(e.expr[':'], {
    data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {return function(i) {return !!e.data(i, t);};}) : function(t, i, n) {return !!e.data(t, n[3]);},
    focusable: function(t) {return i(t, !isNaN(e.attr(t, 'tabindex')));},
    tabbable: function(t) {
      var n = e.attr(t, 'tabindex'), r = isNaN(n);
      return (r || n >= 0) && i(t, !r);
    }
  }), e('<a>').outerWidth(1).jquery || e.each(['Width', 'Height'], function(t, i) {
    function n(t, i, n, o) {return e.each(r, function() {i -= parseFloat(e.css(t, 'padding' + this)) || 0, n && (i -= parseFloat(e.css(t, 'border' + this + 'Width')) || 0), o && (i -= parseFloat(e.css(t, 'margin' + this)) || 0);}), i;}

    var r = 'Width' === i ? ['Left', 'Right'] : ['Top', 'Bottom'], o = i.toLowerCase(),
        s = { innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight };
    e.fn['inner' + i] = function(t) {return void 0 === t ? s['inner' + i].call(this) : this.each(function() {e(this).css(o, n(this, t) + 'px');});}, e.fn['outer' + i] = function(t, r) {return 'number' != typeof t ? s['outer' + i].call(this, t) : this.each(function() {e(this).css(o, n(this, t, !0, r) + 'px');});};
  }), e.fn.addBack || (e.fn.addBack = function(e) {return this.add(null == e ? this.prevObject : this.prevObject.filter(e));}), e('<a>').data('a-b', 'a').removeData('a-b').data('a-b') && (e.fn.removeData = function(t) {return function(i) {return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this);};}(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = 'onselectstart' in document.createElement('div'), e.fn.extend({
    disableSelection: function() {return this.bind((e.support.selectstart ? 'selectstart' : 'mousedown') + '.ui-disableSelection', function(e) {e.preventDefault();});},
    enableSelection: function() {return this.unbind('.ui-disableSelection');}
  }), e.extend(e.ui, {
    plugin: {
      add: function(t, i, n) {
        var r, o = e.ui[t].prototype;
        for (r in n) o.plugins[r] = o.plugins[r] || [], o.plugins[r].push([i, n[r]]);
      }, call: function(e, t, i) {
        var n, r = e.plugins[t];
        if (r && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType) for (n = 0; n < r.length; n++) e.options[r[n][0]] && r[n][1].apply(e.element, i);
      }
    }, hasScroll: function(t, i) {
      if ('hidden' === e(t).css('overflow')) return !1;
      var n = i && 'left' === i ? 'scrollLeft' : 'scrollTop', r = !1;
      return t[n] > 0 || (t[n] = 1, r = t[n] > 0, t[n] = 0, r);
    }
  });
}(jQuery), function(e, t) {
  var i = 0, n = Array.prototype.slice, r = e.cleanData;
  e.cleanData = function(t) {
    for (var i, n = 0; null != (i = t[n]); n++) try {e(i).triggerHandler('remove');} catch (e) {}
    r(t);
  }, e.widget = function(t, i, n) {
    var r, o, s, a, l = {}, c = t.split('.')[0];
    t = t.split('.')[1], r = c + '-' + t, n || (n = i, i = e.Widget), e.expr[':'][r.toLowerCase()] = function(t) {return !!e.data(t, r);}, e[c] = e[c] || {}, o = e[c][t], s = e[c][t] = function(e, t) {
      if (!this._createWidget) return new s(e, t);
      arguments.length && this._createWidget(e, t);
    }, e.extend(s, o, {
      version: n.version,
      _proto: e.extend({}, n),
      _childConstructors: []
    }), (a = new i).options = e.widget.extend({}, a.options), e.each(n, function(t, n) {
      e.isFunction(n) ? l[t] = function() {
        var e = function() {return i.prototype[t].apply(this, arguments);}, r = function(e) {return i.prototype[t].apply(this, e);};
        return function() {
          var t, i = this._super, o = this._superApply;
          return this._super = e, this._superApply = r, t = n.apply(this, arguments), this._super = i, this._superApply = o, t;
        };
      }() : l[t] = n;
    }), s.prototype = e.widget.extend(a, { widgetEventPrefix: o ? a.widgetEventPrefix || t : t }, l, {
      constructor: s,
      namespace: c,
      widgetName: t,
      widgetFullName: r
    }), o ? (e.each(o._childConstructors, function(t, i) {
      var n = i.prototype;
      e.widget(n.namespace + '.' + n.widgetName, s, i._proto);
    }), delete o._childConstructors) : i._childConstructors.push(s), e.widget.bridge(t, s);
  }, e.widget.extend = function(t) {
    for (var i, r, o = n.call(arguments, 1), s = 0, a = o.length; s < a; s++) for (i in o[s]) r = o[s][i], o[s].hasOwnProperty(i) && void 0 !== r && (e.isPlainObject(r) ? t[i] = e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], r) : e.widget.extend({}, r) : t[i] = r);
    return t;
  }, e.widget.bridge = function(t, i) {
    var r = i.prototype.widgetFullName || t;
    e.fn[t] = function(o) {
      var s = 'string' == typeof o, a = n.call(arguments, 1), l = this;
      return o = !s && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o, s ? this.each(function() {
        var i, n = e.data(this, r);
        return n ? e.isFunction(n[o]) && '_' !== o.charAt(0) ? (i = n[o].apply(n, a)) !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0 : e.error('no such method \'' + o + '\' for ' + t + ' widget instance') : e.error('cannot call methods on ' + t + ' prior to initialization; attempted to call method \'' + o + '\'');
      }) : this.each(function() {
        var t = e.data(this, r);
        t ? t.option(o || {})._init() : e.data(this, r, new i(o, this));
      }), l;
    };
  }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
    widgetName: 'widget',
    widgetEventPrefix: '',
    defaultElement: '<div>',
    options: { disabled: !1, create: null },
    _createWidget: function(t, n) {n = e(n || this.defaultElement || this)[0], this.element = e(n), this.uuid = i++, this.eventNamespace = '.' + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), n !== this && (e.data(n, this.widgetFullName, this), this._on(!0, this.element, { remove: function(e) {e.target === n && this.destroy();} }), this.document = e(n.style ? n.ownerDocument : n.document || n), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger('create', null, this._getCreateEventData()), this._init();},
    _getCreateOptions: e.noop,
    _getCreateEventData: e.noop,
    _create: e.noop,
    _init: e.noop,
    destroy: function() {this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr('aria-disabled').removeClass(this.widgetFullName + '-disabled ui-state-disabled'), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass('ui-state-hover'), this.focusable.removeClass('ui-state-focus');},
    _destroy: e.noop,
    widget: function() {return this.element;},
    option: function(t, i) {
      var n, r, o, s = t;
      if (0 === arguments.length) return e.widget.extend({}, this.options);
      if ('string' == typeof t) if (s = {}, n = t.split('.'), t = n.shift(), n.length) {
        for (r = s[t] = e.widget.extend({}, this.options[t]), o = 0; o < n.length - 1; o++) r[n[o]] = r[n[o]] || {}, r = r[n[o]];
        if (t = n.pop(), 1 === arguments.length) return void 0 === r[t] ? null : r[t];
        r[t] = i;
      } else {
        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
        s[t] = i;
      }
      return this._setOptions(s), this;
    },
    _setOptions: function(e) {
      var t;
      for (t in e) this._setOption(t, e[t]);
      return this;
    },
    _setOption: function(e, t) {return this.options[e] = t, 'disabled' === e && (this.widget().toggleClass(this.widgetFullName + '-disabled ui-state-disabled', !!t).attr('aria-disabled', t), this.hoverable.removeClass('ui-state-hover'), this.focusable.removeClass('ui-state-focus')), this;},
    enable: function() {return this._setOption('disabled', !1);},
    disable: function() {return this._setOption('disabled', !0);},
    _on: function(t, i, n) {
      var r, o = this;
      'boolean' != typeof t && (n = i, i = t, t = !1), n ? (i = r = e(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, r = this.widget()), e.each(n, function(n, s) {
        function a() {if (t || !0 !== o.options.disabled && !e(this).hasClass('ui-state-disabled')) return ('string' == typeof s ? o[s] : s).apply(o, arguments);}

        'string' != typeof s && (a.guid = s.guid = s.guid || a.guid || e.guid++);
        var l = n.match(/^(\w+)\s*(.*)$/), c = l[1] + o.eventNamespace, d = l[2];
        d ? r.delegate(d, c, a) : i.bind(c, a);
      });
    },
    _off: function(e, t) {t = (t || '').split(' ').join(this.eventNamespace + ' ') + this.eventNamespace, e.unbind(t).undelegate(t);},
    _delay: function(e, t) {
      var i = this;
      return setTimeout(function() {return ('string' == typeof e ? i[e] : e).apply(i, arguments);}, t || 0);
    },
    _hoverable: function(t) {
      this.hoverable = this.hoverable.add(t), this._on(t, {
        mouseenter: function(t) {e(t.currentTarget).addClass('ui-state-hover');},
        mouseleave: function(t) {e(t.currentTarget).removeClass('ui-state-hover');}
      });
    },
    _focusable: function(t) {
      this.focusable = this.focusable.add(t), this._on(t, {
        focusin: function(t) {e(t.currentTarget).addClass('ui-state-focus');},
        focusout: function(t) {e(t.currentTarget).removeClass('ui-state-focus');}
      });
    },
    _trigger: function(t, i, n) {
      var r, o, s = this.options[t];
      if (n = n || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (r in o) r in i || (i[r] = o[r]);
      return this.element.trigger(i, n), !(e.isFunction(s) && !1 === s.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented());
    }
  }, e.each({ show: 'fadeIn', hide: 'fadeOut' }, function(t, i) {
    e.Widget.prototype['_' + t] = function(n, r, o) {
      'string' == typeof r && (r = { effect: r });
      var s, a = r ? !0 === r || 'number' == typeof r ? i : r.effect || i : t;
      'number' == typeof (r = r || {}) && (r = { duration: r }), s = !e.isEmptyObject(r), r.complete = o, r.delay && n.delay(r.delay), s && e.effects && e.effects.effect[a] ? n[t](r) : a !== t && n[a] ? n[a](r.duration, r.easing, o) : n.queue(function(i) {e(this)[t](), o && o.call(n[0]), i();});
    };
  });
}(jQuery), function(e, t) {
  var i = !1;
  e(document).mouseup(function() {i = !1;}), e.widget('ui.mouse', {
    version: '1.10.4',
    options: { cancel: 'input,textarea,button,select,option', distance: 1, delay: 0 },
    _mouseInit: function() {
      var t = this;
      this.element.bind('mousedown.' + this.widgetName, function(e) {return t._mouseDown(e);}).bind('click.' + this.widgetName, function(i) {if (!0 === e.data(i.target, t.widgetName + '.preventClickEvent')) return e.removeData(i.target, t.widgetName + '.preventClickEvent'), i.stopImmediatePropagation(), !1;}), this.started = !1;
    },
    _mouseDestroy: function() {this.element.unbind('.' + this.widgetName), this._mouseMoveDelegate && e(document).unbind('mousemove.' + this.widgetName, this._mouseMoveDelegate).unbind('mouseup.' + this.widgetName, this._mouseUpDelegate);},
    _mouseDown: function(t) {
      if (!i) {
        this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
        var n = this, r = 1 === t.which, o = !('string' != typeof this.options.cancel || !t.target.nodeName) && e(t.target).closest(this.options.cancel).length;
        return !(r && !o && this._mouseCapture(t)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {n.mouseDelayMet = !0;}, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t), !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + '.preventClickEvent') && e.removeData(t.target, this.widgetName + '.preventClickEvent'), this._mouseMoveDelegate = function(e) {return n._mouseMove(e);}, this._mouseUpDelegate = function(e) {return n._mouseUp(e);}, e(document).bind('mousemove.' + this.widgetName, this._mouseMoveDelegate).bind('mouseup.' + this.widgetName, this._mouseUpDelegate), t.preventDefault(), i = !0, !0));
      }
    },
    _mouseMove: function(t) {return e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted);},
    _mouseUp: function(t) {return e(document).unbind('mousemove.' + this.widgetName, this._mouseMoveDelegate).unbind('mouseup.' + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + '.preventClickEvent', !0), this._mouseStop(t)), !1;},
    _mouseDistanceMet: function(e) {return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;},
    _mouseDelayMet: function() {return this.mouseDelayMet;},
    _mouseStart: function() {},
    _mouseDrag: function() {},
    _mouseStop: function() {},
    _mouseCapture: function() {return !0;}
  });
}(jQuery), function(e, t) {
  function i(e, t, i) {return e > t && e < t + i;}

  function n(e) {return /left|right/.test(e.css('float')) || /inline|table-cell/.test(e.css('display'));}

  e.widget('ui.sortable', e.ui.mouse, {
    version: '1.10.4',
    widgetEventPrefix: 'sort',
    ready: !1,
    options: {
      appendTo: 'parent',
      axis: !1,
      connectWith: !1,
      containment: !1,
      cursor: 'auto',
      cursorAt: !1,
      dropOnEmpty: !0,
      forcePlaceholderSize: !1,
      forceHelperSize: !1,
      grid: !1,
      handle: !1,
      helper: 'original',
      items: '> *',
      opacity: !1,
      placeholder: !1,
      revert: !1,
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: 'default',
      tolerance: 'intersect',
      zIndex: 1e3,
      activate: null,
      beforeStop: null,
      change: null,
      deactivate: null,
      out: null,
      over: null,
      receive: null,
      remove: null,
      sort: null,
      start: null,
      stop: null,
      update: null
    },
    _create: function() {
      var e = this.options;
      this.containerCache = {}, this.element.addClass('ui-sortable'), this.refresh(), this.floating = !!this.items.length && ('x' === e.axis || n(this.items[0].item)), this.offset = this.element.offset(), this._mouseInit(), this.ready = !0;
    },
    _destroy: function() {
      this.element.removeClass('ui-sortable ui-sortable-disabled'), this._mouseDestroy();
      for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + '-item');
      return this;
    },
    _setOption: function(t, i) {'disabled' === t ? (this.options[t] = i, this.widget().toggleClass('ui-sortable-disabled', !!i)) : e.Widget.prototype._setOption.apply(this, arguments);},
    _mouseCapture: function(t, i) {
      var n = null, r = !1, o = this;
      return !this.reverting && (!this.options.disabled && 'static' !== this.options.type && (this._refreshItems(t), e(t.target).parents().each(function() {if (e.data(this, o.widgetName + '-item') === o) return n = e(this), !1;}), e.data(t.target, o.widgetName + '-item') === o && (n = e(t.target)), !!n && (!(this.options.handle && !i && (e(this.options.handle, n).find('*').addBack().each(function() {this === t.target && (r = !0);}), !r)) && (this.currentItem = n, this._removeCurrentsFromItems(), !0))));
    },
    _mouseStart: function(t, i, n) {
      var r, o, s = this.options;
      if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left
      }, e.extend(this.offset, {
        click: { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top },
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }), this.helper.css('position', 'absolute'), this.cssPosition = this.helper.css('position'), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), this.domPosition = {
        prev: this.currentItem.prev()[0],
        parent: this.currentItem.parent()[0]
      }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), s.containment && this._setContainment(), s.cursor && 'auto' !== s.cursor && (o = this.document.find('body'), this.storedCursor = o.css('cursor'), o.css('cursor', s.cursor), this.storedStylesheet = e('<style>*{ cursor: ' + s.cursor + ' !important; }</style>').appendTo(o)), s.opacity && (this.helper.css('opacity') && (this._storedOpacity = this.helper.css('opacity')), this.helper.css('opacity', s.opacity)), s.zIndex && (this.helper.css('zIndex') && (this._storedZIndex = this.helper.css('zIndex')), this.helper.css('zIndex', s.zIndex)), this.scrollParent[0] !== document && 'HTML' !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger('start', t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n) for (r = this.containers.length - 1; r >= 0; r--) this.containers[r]._trigger('activate', t, this._uiHash(this));
      return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass('ui-sortable-helper'), this._mouseDrag(t), !0;
    },
    _mouseDrag: function(t) {
      var i, n, r, o, s = this.options, a = !1;
      for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo('absolute'), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && 'HTML' !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < s.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + s.scrollSpeed : t.pageY - this.overflowOffset.top < s.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - s.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < s.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + s.scrollSpeed : t.pageX - this.overflowOffset.left < s.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - s.scrollSpeed)) : (t.pageY - e(document).scrollTop() < s.scrollSensitivity ? a = e(document).scrollTop(e(document).scrollTop() - s.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < s.scrollSensitivity && (a = e(document).scrollTop(e(document).scrollTop() + s.scrollSpeed)), t.pageX - e(document).scrollLeft() < s.scrollSensitivity ? a = e(document).scrollLeft(e(document).scrollLeft() - s.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < s.scrollSensitivity && (a = e(document).scrollLeft(e(document).scrollLeft() + s.scrollSpeed))), !1 !== a && e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo('absolute'), this.options.axis && 'y' === this.options.axis || (this.helper[0].style.left = this.position.left + 'px'), this.options.axis && 'x' === this.options.axis || (this.helper[0].style.top = this.position.top + 'px'), i = this.items.length - 1; i >= 0; i--) if (n = this.items[i], r = n.item[0], (o = this._intersectsWithPointer(n)) && n.instance === this.currentContainer && !(r === this.currentItem[0] || this.placeholder[1 === o ? 'next' : 'prev']()[0] === r || e.contains(this.placeholder[0], r) || 'semi-dynamic' === this.options.type && e.contains(this.element[0], r))) {
        if (this.direction = 1 === o ? 'down' : 'up', 'pointer' !== this.options.tolerance && !this._intersectsWithSides(n)) break;
        this._rearrange(t, n), this._trigger('change', t, this._uiHash());
        break;
      }
      return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger('sort', t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1;
    },
    _mouseStop: function(t, i) {
      if (t) {
        if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
          var n = this, r = this.placeholder.offset(), o = this.options.axis, s = {};
          o && 'x' !== o || (s.left = r.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), o && 'y' !== o || (s.top = r.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(s, parseInt(this.options.revert, 10) || 500, function() {n._clear(t);});
        } else this._clear(t, i);
        return !1;
      }
    },
    cancel: function() {
      if (this.dragging) {
        this._mouseUp({ target: null }), 'original' === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass('ui-sortable-helper') : this.currentItem.show();
        for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger('deactivate', null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger('out', null, this._uiHash(this)), this.containers[t].containerCache.over = 0);
      }
      return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 'original' !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
        helper: null,
        dragging: !1,
        reverting: !1,
        _noFinalSort: null
      }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this;
    },
    serialize: function(t) {
      var i = this._getItemsAsjQuery(t && t.connected), n = [];
      return t = t || {}, e(i).each(function() {
        var i = (e(t.item || this).attr(t.attribute || 'id') || '').match(t.expression || /(.+)[\-=_](.+)/);
        i && n.push((t.key || i[1] + '[]') + '=' + (t.key && t.expression ? i[1] : i[2]));
      }), !n.length && t.key && n.push(t.key + '='), n.join('&');
    },
    toArray: function(t) {
      var i = this._getItemsAsjQuery(t && t.connected), n = [];
      return t = t || {}, i.each(function() {n.push(e(t.item || this).attr(t.attribute || 'id') || '');}), n;
    },
    _intersectsWith: function(e) {
      var t = this.positionAbs.left, i = t + this.helperProportions.width, n = this.positionAbs.top, r = n + this.helperProportions.height, o = e.left, s = o + e.width, a = e.top, l = a + e.height,
          c = this.offset.click.top, d = this.offset.click.left, u = 'x' === this.options.axis || n + c > a && n + c < l, p = 'y' === this.options.axis || t + d > o && t + d < s, h = u && p;
      return 'pointer' === this.options.tolerance || this.options.forcePointerForContainers || 'pointer' !== this.options.tolerance && this.helperProportions[this.floating ? 'width' : 'height'] > e[this.floating ? 'width' : 'height'] ? h : o < t + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < s && a < n + this.helperProportions.height / 2 && r - this.helperProportions.height / 2 < l;
    },
    _intersectsWithPointer: function(e) {
      var t = 'x' === this.options.axis || i(this.positionAbs.top + this.offset.click.top, e.top, e.height),
          n = 'y' === this.options.axis || i(this.positionAbs.left + this.offset.click.left, e.left, e.width), r = t && n, o = this._getDragVerticalDirection(), s = this._getDragHorizontalDirection();
      return !!r && (this.floating ? s && 'right' === s || 'down' === o ? 2 : 1 : o && ('down' === o ? 2 : 1));
    },
    _intersectsWithSides: function(e) {
      var t = i(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height), n = i(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
          r = this._getDragVerticalDirection(), o = this._getDragHorizontalDirection();
      return this.floating && o ? 'right' === o && n || 'left' === o && !n : r && ('down' === r && t || 'up' === r && !t);
    },
    _getDragVerticalDirection: function() {
      var e = this.positionAbs.top - this.lastPositionAbs.top;
      return 0 !== e && (e > 0 ? 'down' : 'up');
    },
    _getDragHorizontalDirection: function() {
      var e = this.positionAbs.left - this.lastPositionAbs.left;
      return 0 !== e && (e > 0 ? 'right' : 'left');
    },
    refresh: function(e) {return this._refreshItems(e), this.refreshPositions(), this;},
    _connectWith: function() {
      var e = this.options;
      return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith;
    },
    _getItemsAsjQuery: function(t) {
      var i, n, r, o, s = [], a = [], l = this._connectWith();
      if (l && t) for (i = l.length - 1; i >= 0; i--) for (n = (r = e(l[i])).length - 1; n >= 0; n--) (o = e.data(r[n], this.widgetFullName)) && o !== this && !o.options.disabled && a.push([e.isFunction(o.options.items) ? o.options.items.call(o.element) : e(o.options.items, o.element).not('.ui-sortable-helper').not('.ui-sortable-placeholder'), o]);
      for (a.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
        options: this.options,
        item: this.currentItem
      }) : e(this.options.items, this.element).not('.ui-sortable-helper').not('.ui-sortable-placeholder'), this]), i = a.length - 1; i >= 0; i--) a[i][0].each(function() {s.push(this);});
      return e(s);
    },
    _removeCurrentsFromItems: function() {
      var t = this.currentItem.find(':data(' + this.widgetName + '-item)');
      this.items = e.grep(this.items, function(e) {
        for (var i = 0; i < t.length; i++) if (t[i] === e.item[0]) return !1;
        return !0;
      });
    },
    _refreshItems: function(t) {
      this.items = [], this.containers = [this];
      var i, n, r, o, s, a, l, c, d = this.items,
          u = [[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, { item: this.currentItem }) : e(this.options.items, this.element), this]], p = this._connectWith();
      if (p && this.ready) for (i = p.length - 1; i >= 0; i--) for (n = (r = e(p[i])).length - 1; n >= 0; n--) (o = e.data(r[n], this.widgetFullName)) && o !== this && !o.options.disabled && (u.push([e.isFunction(o.options.items) ? o.options.items.call(o.element[0], t, { item: this.currentItem }) : e(o.options.items, o.element), o]), this.containers.push(o));
      for (i = u.length - 1; i >= 0; i--) for (s = u[i][1], n = 0, c = (a = u[i][0]).length; n < c; n++) (l = e(a[n])).data(this.widgetName + '-item', s), d.push({
        item: l,
        instance: s,
        width: 0,
        height: 0,
        left: 0,
        top: 0
      });
    },
    refreshPositions: function(t) {
      this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
      var i, n, r, o;
      for (i = this.items.length - 1; i >= 0; i--) (n = this.items[i]).instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (r = this.options.toleranceElement ? e(this.options.toleranceElement, n.item) : n.item, t || (n.width = r.outerWidth(), n.height = r.outerHeight()), o = r.offset(), n.left = o.left, n.top = o.top);
      if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
      return this;
    },
    _createPlaceholder: function(t) {
      var i, n = (t = t || this).options;
      n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
        element: function() {
          var n = t.currentItem[0].nodeName.toLowerCase(), r = e('<' + n + '>', t.document[0]).addClass(i || t.currentItem[0].className + ' ui-sortable-placeholder').removeClass('ui-sortable-helper');
          return 'tr' === n ? t.currentItem.children().each(function() {e('<td>&#160;</td>', t.document[0]).attr('colspan', e(this).attr('colspan') || 1).appendTo(r);}) : 'img' === n && r.attr('src', t.currentItem.attr('src')), i || r.css('visibility', 'hidden'), r;
        },
        update: function(e, r) {i && !n.forcePlaceholderSize || (r.height() || r.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css('paddingTop') || 0, 10) - parseInt(t.currentItem.css('paddingBottom') || 0, 10)), r.width() || r.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css('paddingLeft') || 0, 10) - parseInt(t.currentItem.css('paddingRight') || 0, 10)));}
      }), t.placeholder = e(n.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), n.placeholder.update(t, t.placeholder);
    },
    _contactContainers: function(t) {
      var r, o, s, a, l, c, d, u, p, h, f = null, m = null;
      for (r = this.containers.length - 1; r >= 0; r--) if (!e.contains(this.currentItem[0], this.containers[r].element[0])) if (this._intersectsWith(this.containers[r].containerCache)) {
        if (f && e.contains(this.containers[r].element[0], f.element[0])) continue;
        f = this.containers[r], m = r;
      } else this.containers[r].containerCache.over && (this.containers[r]._trigger('out', t, this._uiHash(this)), this.containers[r].containerCache.over = 0);
      if (f) if (1 === this.containers.length) this.containers[m].containerCache.over || (this.containers[m]._trigger('over', t, this._uiHash(this)), this.containers[m].containerCache.over = 1); else {
        for (s = 1e4, a = null, l = (h = f.floating || n(this.currentItem)) ? 'left' : 'top', c = h ? 'width' : 'height', d = this.positionAbs[l] + this.offset.click[l], o = this.items.length - 1; o >= 0; o--) e.contains(this.containers[m].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (h && !i(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height) || (u = this.items[o].item.offset()[l], p = !1, Math.abs(u - d) > Math.abs(u + this.items[o][c] - d) && (p = !0, u += this.items[o][c]), Math.abs(u - d) < s && (s = Math.abs(u - d), a = this.items[o], this.direction = p ? 'up' : 'down')));
        if (!a && !this.options.dropOnEmpty) return;
        if (this.currentContainer === this.containers[m]) return;
        a ? this._rearrange(t, a, null, !0) : this._rearrange(t, null, this.containers[m].element, !0), this._trigger('change', t, this._uiHash()), this.containers[m]._trigger('change', t, this._uiHash(this)), this.currentContainer = this.containers[m], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[m]._trigger('over', t, this._uiHash(this)), this.containers[m].containerCache.over = 1;
      }
    },
    _createHelper: function(t) {
      var i = this.options, n = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : 'clone' === i.helper ? this.currentItem.clone() : this.currentItem;
      return n.parents('body').length || e('parent' !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = {
        width: this.currentItem[0].style.width,
        height: this.currentItem[0].style.height,
        position: this.currentItem.css('position'),
        top: this.currentItem.css('top'),
        left: this.currentItem.css('left')
      }), n[0].style.width && !i.forceHelperSize || n.width(this.currentItem.width()), n[0].style.height && !i.forceHelperSize || n.height(this.currentItem.height()), n;
    },
    _adjustOffsetFromHelper: function(t) {
      'string' == typeof t && (t = t.split(' ')), e.isArray(t) && (t = {
        left: +t[0],
        top: +t[1] || 0
      }), 'left' in t && (this.offset.click.left = t.left + this.margins.left), 'right' in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), 'top' in t && (this.offset.click.top = t.top + this.margins.top), 'bottom' in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
    },
    _getParentOffset: function() {
      this.offsetParent = this.helper.offsetParent();
      var t = this.offsetParent.offset();
      return 'absolute' === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && 'html' === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
        top: 0,
        left: 0
      }), { top: t.top + (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0), left: t.left + (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0) };
    },
    _getRelativeOffset: function() {
      if ('relative' === this.cssPosition) {
        var e = this.currentItem.position();
        return {
          top: e.top - (parseInt(this.helper.css('top'), 10) || 0) + this.scrollParent.scrollTop(),
          left: e.left - (parseInt(this.helper.css('left'), 10) || 0) + this.scrollParent.scrollLeft()
        };
      }
      return { top: 0, left: 0 };
    },
    _cacheMargins: function() {this.margins = { left: parseInt(this.currentItem.css('marginLeft'), 10) || 0, top: parseInt(this.currentItem.css('marginTop'), 10) || 0 };},
    _cacheHelperProportions: function() {this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };},
    _setContainment: function() {
      var t, i, n, r = this.options;
      'parent' === r.containment && (r.containment = this.helper[0].parentNode), 'document' !== r.containment && 'window' !== r.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e('document' === r.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (e('document' === r.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(r.containment) || (t = e(r.containment)[0], i = e(r.containment).offset(), n = 'hidden' !== e(t).css('overflow'), this.containment = [i.left + (parseInt(e(t).css('borderLeftWidth'), 10) || 0) + (parseInt(e(t).css('paddingLeft'), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css('borderTopWidth'), 10) || 0) + (parseInt(e(t).css('paddingTop'), 10) || 0) - this.margins.top, i.left + (n ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css('borderLeftWidth'), 10) || 0) - (parseInt(e(t).css('paddingRight'), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css('borderTopWidth'), 10) || 0) - (parseInt(e(t).css('paddingBottom'), 10) || 0) - this.helperProportions.height - this.margins.top]);
    },
    _convertPositionTo: function(t, i) {
      i || (i = this.position);
      var n = 'absolute' === t ? 1 : -1,
          r = 'absolute' !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          o = /(html|body)/i.test(r[0].tagName);
      return {
        top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ('fixed' === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : r.scrollTop()) * n,
        left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ('fixed' === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : r.scrollLeft()) * n
      };
    },
    _generatePosition: function(t) {
      var i, n, r = this.options, o = t.pageX, s = t.pageY,
          a = 'absolute' !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          l = /(html|body)/i.test(a[0].tagName);
      return 'relative' !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (s = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (s = this.containment[3] + this.offset.click.top)), r.grid && (i = this.originalPageY + Math.round((s - this.originalPageY) / r.grid[1]) * r.grid[1], s = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - r.grid[1] : i + r.grid[1] : i, n = this.originalPageX + Math.round((o - this.originalPageX) / r.grid[0]) * r.grid[0], o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - r.grid[0] : n + r.grid[0] : n)), {
        top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ('fixed' === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
        left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ('fixed' === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
      };
    },
    _rearrange: function(e, t, i, n) {
      i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], 'down' === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
      var r = this.counter;
      this._delay(function() {r === this.counter && this.refreshPositions(!n);});
    },
    _clear: function(e, t) {
      function i(e, t, i) {return function(n) {i._trigger(e, n, t._uiHash(t));};}

      this.reverting = !1;
      var n, r = [];
      if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
        for (n in this._storedCSS) 'auto' !== this._storedCSS[n] && 'static' !== this._storedCSS[n] || (this._storedCSS[n] = '');
        this.currentItem.css(this._storedCSS).removeClass('ui-sortable-helper');
      } else this.currentItem.show();
      for (this.fromOutside && !t && r.push(function(e) {this._trigger('receive', e, this._uiHash(this.fromOutside));}), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not('.ui-sortable-helper')[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || r.push(function(e) {this._trigger('update', e, this._uiHash());}), this !== this.currentContainer && (t || (r.push(function(e) {this._trigger('remove', e, this._uiHash());}), r.push(function(e) {return function(t) {e._trigger('receive', t, this._uiHash(this));};}.call(this, this.currentContainer)), r.push(function(e) {return function(t) {e._trigger('update', t, this._uiHash(this));};}.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) t || r.push(i('deactivate', this, this.containers[n])), this.containers[n].containerCache.over && (r.push(i('out', this, this.containers[n])), this.containers[n].containerCache.over = 0);
      if (this.storedCursor && (this.document.find('body').css('cursor', this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css('opacity', this._storedOpacity), this._storedZIndex && this.helper.css('zIndex', 'auto' === this._storedZIndex ? '' : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
        if (!t) {
          for (this._trigger('beforeStop', e, this._uiHash()), n = 0; n < r.length; n++) r[n].call(this, e);
          this._trigger('stop', e, this._uiHash());
        }
        return this.fromOutside = !1, !1;
      }
      if (t || this._trigger('beforeStop', e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !t) {
        for (n = 0; n < r.length; n++) r[n].call(this, e);
        this._trigger('stop', e, this._uiHash());
      }
      return this.fromOutside = !1, !0;
    },
    _trigger: function() {!1 === e.Widget.prototype._trigger.apply(this, arguments) && this.cancel();},
    _uiHash: function(t) {
      var i = t || this;
      return {
        helper: i.helper,
        placeholder: i.placeholder || e([]),
        position: i.position,
        originalPosition: i.originalPosition,
        offset: i.positionAbs,
        item: i.currentItem,
        sender: t ? t.element : null
      };
    }
  });
}(jQuery), function(e) {
  function t(t, i, n) {
    var r = e.$app, o = t.find('.imagesContainer');
    this.saveButton = r.find('.saveSettingsTrigger'), this.uploadForm = r.find('.uploadProfilePicture'), this.container = t, this.imagesContainer = o, this.maxNumImages = n, this.fieldName = i, this.maxFileSize = 6e7, this.acceptFileTypes = /(\.|\/)(gif|jpe?g|png)$/i, this.setNumImagesUploaded(), this.setNumImagesRemaining(), this.init();
  }

  var i = t.prototype;
  i.init = function() {
    var t = this;
    t.uploadForm.fileupload({
      url: '/resource/',
      dataType: 'json',
      options: { acceptFileTypes: t.acceptFileTypes, maxFileSize: t.maxFileSize, maxNumberOfFiles: 1 },
      submitButton: t.saveButton,
      uploadForm: t.uploadForm,
      filesContainer: t.uploadForm,
      fileInput: t.uploadForm.find('.profilePictureInput'),
      dropZone: t.uploadForm,
      formData: { user: 1, picture: 1, name: t.fieldName, request_token: e.config.requestToken },
      numUploadedFiles: 0,
      autoUpload: !0,
      sequentialUploads: !1,
      disableValidation: !1,
      add: function(i, n) {
        n.files[0];
        t.container.removeClass('validationError'), e.$app.find('.settingsForm').prop('disabled', !0), e.$app.find('.saveSettingsTrigger').addClass('disabled'), t.increaseCount(), loadingTimeout = setTimeout(function() {t.uploadForm.addClass('disabled isLoader loading'), new e.loader(e.$app.find('.profilePicture'), 2);}, e.component.loadDelay);
        n.submit().success(function(i, n, r) {clearTimeout(loadingTimeout), t.uploadForm.find('.loaderContainer').remove(), 1 === i.status ? (e.$app.find('.uploadProfilePicture').addClass('hasImage'), e.$app.find('.profilePicture,.settingProfileAccount,.account').css('background-image', 'url(' + i.media + ')'), t.container.find('.profilePictureHash').val(i.hash)) : e.validate.form(t.container, i.errors);}).error(function(e, i, n) {clearTimeout(loadingTimeout), t.decreaseCount();});
      },
      done: function() {t.uploadForm.removeClass('disabled isLoader loading'), e.$app.find('.settingsForm').prop('disabled', !0), e.$app.find('.saveSettingsTrigger').addClass('disabled');},
      progress: function(e, t) {},
      fail: function(e, i) {t.decreaseCount();}
    }), $('.removePicture').on('click', function() {return e.$app.find('.profilePicture,.settingProfileAccount,.account').css('background-image', 'url(' + e.config.IMG_URL + '/avatars/100x/default.jpg)'), e.$app.find('.profilePictureHash').val(''), e.$app.find('.uploadProfilePicture').removeClass('active'), !1;});
  }, i.setNumImagesRemaining = function() {this.numImagesRemaining = this.maxNumImages - this.numImagesUploaded;}, i.setNumImagesUploaded = function() {this.numImagesUploaded = this.imagesContainer.find('.hasUploadedImage').length, this.setNumImagesRemaining();}, i.increaseCount = function() {this.numUploadedFiles += 1;}, i.decreaseCount = function() {this.numUploadedFiles > 0 && (this.numUploadedFiles -= 1);}, e.uploader = t;
}(App), function(e) {'function' == typeof define && define.amd ? define(['jquery'], e) : e(jQuery);}(function(e, t) {
  var i = 0, n = Array.prototype.slice, r = e.cleanData;
  e.cleanData = function(t) {
    for (var i, n = 0; null != (i = t[n]); n++) try {e(i).triggerHandler('remove');} catch (e) {}
    r(t);
  }, e.widget = function(t, i, n) {
    var r, o, s, a, l = {}, c = t.split('.')[0];
    t = t.split('.')[1], r = c + '-' + t, n || (n = i, i = e.Widget), e.expr[':'][r.toLowerCase()] = function(t) {return !!e.data(t, r);}, e[c] = e[c] || {}, o = e[c][t], s = e[c][t] = function(e, t) {
      if (!this._createWidget) return new s(e, t);
      arguments.length && this._createWidget(e, t);
    }, e.extend(s, o, {
      version: n.version,
      _proto: e.extend({}, n),
      _childConstructors: []
    }), (a = new i).options = e.widget.extend({}, a.options), e.each(n, function(t, n) {
      e.isFunction(n) ? l[t] = function() {
        var e = function() {return i.prototype[t].apply(this, arguments);}, r = function(e) {return i.prototype[t].apply(this, e);};
        return function() {
          var t, i = this._super, o = this._superApply;
          return this._super = e, this._superApply = r, t = n.apply(this, arguments), this._super = i, this._superApply = o, t;
        };
      }() : l[t] = n;
    }), s.prototype = e.widget.extend(a, { widgetEventPrefix: o ? a.widgetEventPrefix : t }, l, {
      constructor: s,
      namespace: c,
      widgetName: t,
      widgetFullName: r
    }), o ? (e.each(o._childConstructors, function(t, i) {
      var n = i.prototype;
      e.widget(n.namespace + '.' + n.widgetName, s, i._proto);
    }), delete o._childConstructors) : i._childConstructors.push(s), e.widget.bridge(t, s);
  }, e.widget.extend = function(i) {
    for (var r, o, s = n.call(arguments, 1), a = 0, l = s.length; a < l; a++) for (r in s[a]) o = s[a][r], s[a].hasOwnProperty(r) && o !== t && (e.isPlainObject(o) ? i[r] = e.isPlainObject(i[r]) ? e.widget.extend({}, i[r], o) : e.widget.extend({}, o) : i[r] = o);
    return i;
  }, e.widget.bridge = function(i, r) {
    var o = r.prototype.widgetFullName || i;
    e.fn[i] = function(s) {
      var a = 'string' == typeof s, l = n.call(arguments, 1), c = this;
      return s = !a && l.length ? e.widget.extend.apply(null, [s].concat(l)) : s, a ? this.each(function() {
        var n, r = e.data(this, o);
        return r ? e.isFunction(r[s]) && '_' !== s.charAt(0) ? (n = r[s].apply(r, l)) !== r && n !== t ? (c = n && n.jquery ? c.pushStack(n.get()) : n, !1) : void 0 : e.error('no such method \'' + s + '\' for ' + i + ' widget instance') : e.error('cannot call methods on ' + i + ' prior to initialization; attempted to call method \'' + s + '\'');
      }) : this.each(function() {
        var t = e.data(this, o);
        t ? t.option(s || {})._init() : e.data(this, o, new r(s, this));
      }), c;
    };
  }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
    widgetName: 'widget',
    widgetEventPrefix: '',
    defaultElement: '<div>',
    options: { disabled: !1, create: null },
    _createWidget: function(t, n) {n = e(n || this.defaultElement || this)[0], this.element = e(n), this.uuid = i++, this.eventNamespace = '.' + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), n !== this && (e.data(n, this.widgetFullName, this), this._on(!0, this.element, { remove: function(e) {e.target === n && this.destroy();} }), this.document = e(n.style ? n.ownerDocument : n.document || n), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger('create', null, this._getCreateEventData()), this._init();},
    _getCreateOptions: e.noop,
    _getCreateEventData: e.noop,
    _create: e.noop,
    _init: e.noop,
    destroy: function() {this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr('aria-disabled').removeClass(this.widgetFullName + '-disabled ui-state-disabled'), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass('ui-state-hover'), this.focusable.removeClass('ui-state-focus');},
    _destroy: e.noop,
    widget: function() {return this.element;},
    option: function(i, n) {
      var r, o, s, a = i;
      if (0 === arguments.length) return e.widget.extend({}, this.options);
      if ('string' == typeof i) if (a = {}, r = i.split('.'), i = r.shift(), r.length) {
        for (o = a[i] = e.widget.extend({}, this.options[i]), s = 0; s < r.length - 1; s++) o[r[s]] = o[r[s]] || {}, o = o[r[s]];
        if (i = r.pop(), n === t) return o[i] === t ? null : o[i];
        o[i] = n;
      } else {
        if (n === t) return this.options[i] === t ? null : this.options[i];
        a[i] = n;
      }
      return this._setOptions(a), this;
    },
    _setOptions: function(e) {
      var t;
      for (t in e) this._setOption(t, e[t]);
      return this;
    },
    _setOption: function(e, t) {return this.options[e] = t, 'disabled' === e && (this.widget().toggleClass(this.widgetFullName + '-disabled ui-state-disabled', !!t).attr('aria-disabled', t), this.hoverable.removeClass('ui-state-hover'), this.focusable.removeClass('ui-state-focus')), this;},
    enable: function() {return this._setOption('disabled', !1);},
    disable: function() {return this._setOption('disabled', !0);},
    _on: function(t, i, n) {
      var r, o = this;
      'boolean' != typeof t && (n = i, i = t, t = !1), n ? (i = r = e(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, r = this.widget()), e.each(n, function(n, s) {
        function a() {if (t || !0 !== o.options.disabled && !e(this).hasClass('ui-state-disabled')) return ('string' == typeof s ? o[s] : s).apply(o, arguments);}

        'string' != typeof s && (a.guid = s.guid = s.guid || a.guid || e.guid++);
        var l = n.match(/^(\w+)\s*(.*)$/), c = l[1] + o.eventNamespace, d = l[2];
        d ? r.delegate(d, c, a) : i.bind(c, a);
      });
    },
    _off: function(e, t) {t = (t || '').split(' ').join(this.eventNamespace + ' ') + this.eventNamespace, e.unbind(t).undelegate(t);},
    _delay: function(e, t) {
      var i = this;
      return setTimeout(function() {return ('string' == typeof e ? i[e] : e).apply(i, arguments);}, t || 0);
    },
    _hoverable: function(t) {
      this.hoverable = this.hoverable.add(t), this._on(t, {
        mouseenter: function(t) {e(t.currentTarget).addClass('ui-state-hover');},
        mouseleave: function(t) {e(t.currentTarget).removeClass('ui-state-hover');}
      });
    },
    _focusable: function(t) {
      this.focusable = this.focusable.add(t), this._on(t, {
        focusin: function(t) {e(t.currentTarget).addClass('ui-state-focus');},
        focusout: function(t) {e(t.currentTarget).removeClass('ui-state-focus');}
      });
    },
    _trigger: function(t, i, n) {
      var r, o, s = this.options[t];
      if (n = n || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (r in o) r in i || (i[r] = o[r]);
      return this.element.trigger(i, n), !(e.isFunction(s) && !1 === s.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented());
    }
  }, e.each({ show: 'fadeIn', hide: 'fadeOut' }, function(t, i) {
    e.Widget.prototype['_' + t] = function(n, r, o) {
      'string' == typeof r && (r = { effect: r });
      var s, a = r ? !0 === r || 'number' == typeof r ? i : r.effect || i : t;
      'number' == typeof (r = r || {}) && (r = { duration: r }), s = !e.isEmptyObject(r), r.complete = o, r.delay && n.delay(r.delay), s && e.effects && e.effects.effect[a] ? n[t](r) : a !== t && n[a] ? n[a](r.duration, r.easing, o) : n.queue(function(i) {e(this)[t](), o && o.call(n[0]), i();});
    };
  });
}), function(e) {
  'use strict';
  'function' == typeof define && define.amd ? define(['jquery'], e) : e(window.jQuery);
}(function(e) {
  'use strict';
  var t = 0;
  e.ajaxTransport('iframe', function(i) {
    if (i.async) {
      var n, r, o, s = i.initialIframeSrc || 'javascript:false;';
      return {
        send: function(a, l) {
          (n = e('<form style="display:none;"></form>')).attr('accept-charset', i.formAcceptCharset), o = /\?/.test(i.url) ? '&' : '?', 'DELETE' === i.type ? (i.url = i.url + o + '_method=DELETE', i.type = 'POST') : 'PUT' === i.type ? (i.url = i.url + o + '_method=PUT', i.type = 'POST') : 'PATCH' === i.type && (i.url = i.url + o + '_method=PATCH', i.type = 'POST'), r = e('<iframe src="' + s + '" name="iframe-transport-' + (t += 1) + '"></iframe>').bind('load', function() {
            var t, o = e.isArray(i.paramName) ? i.paramName : [i.paramName];
            r.unbind('load').bind('load', function() {
              var t;
              try {if (!(t = r.contents()).length || !t[0].firstChild) throw new Error;} catch (e) {t = void 0;}
              l(200, 1, { iframe: t }), e('<iframe src="' + s + '"></iframe>').appendTo(n), window.setTimeout(function() {n.remove();}, 0);
            }), n.prop('target', r.prop('name')).prop('action', i.url).prop('method', i.type), i.formData && e.each(i.formData, function(t, i) {e('<input type="hidden"/>').prop('name', i.name).val(i.value).appendTo(n);}), i.fileInput && i.fileInput.length && 'POST' === i.type && (t = i.fileInput.clone(), i.fileInput.after(function(e) {return t[e];}), i.paramName && i.fileInput.each(function(t) {e(this).prop('name', o[t] || i.paramName);}), n.append(i.fileInput).prop('enctype', 'multipart/form-data').prop('encoding', 'multipart/form-data'), i.fileInput.removeAttr('form')), n.submit(), t && t.length && i.fileInput.each(function(i, n) {
              var r = e(t[i]);
              e(n).prop('name', r.prop('name')).attr('form', r.attr('form')), r.replaceWith(n);
            });
          }), n.append(r).appendTo(document.body);
        }, abort: function() {r && r.unbind('load').prop('src', s), n && n.remove();}
      };
    }
  }), e.ajaxSetup({
    converters: {
      'iframe text': function(t) {return t && e(t[0].body).text();},
      'iframe json': function(t) {return t && e.parseJSON(e(t[0].body).text());},
      'iframe html': function(t) {return t && e(t[0].body).html();},
      'iframe xml': function(t) {
        var i = t && t[0];
        return i && e.isXMLDoc(i) ? i : e.parseXML(i.XMLDocument && i.XMLDocument.xml || e(i.body).html());
      },
      'iframe script': function(t) {return t && e.globalEval(e(t[0].body).text());}
    }
  });
}), function(e) {
  'use strict';
  'function' == typeof define && define.amd ? define(['jquery', 'jquery.ui.widget'], e) : e(window.jQuery);
}(function(e) {
  'use strict';

  function t(t) {
    var i = 'dragover' === t;
    return function(n) {
      n.dataTransfer = n.originalEvent && n.originalEvent.dataTransfer;
      var r = n.dataTransfer;
      r && -1 !== e.inArray('Files', r.types) && !1 !== this._trigger(t, e.Event(t, { delegatedEvent: n })) && (n.preventDefault(), i && (r.dropEffect = 'copy'));
    };
  }

  e.support.fileInput = !(new RegExp('(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))').test(window.navigator.userAgent) || e('<input type="file">').prop('disabled')), e.support.xhrFileUpload = !(!window.ProgressEvent || !window.FileReader), e.support.xhrFormDataFileUpload = !!window.FormData, e.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice), e.widget('blueimp.fileupload', {
    options: {
      dropZone: e(document),
      pasteZone: e(document),
      fileInput: void 0,
      replaceFileInput: !0,
      paramName: void 0,
      singleFileUploads: !0,
      limitMultiFileUploads: void 0,
      limitMultiFileUploadSize: void 0,
      limitMultiFileUploadSizeOverhead: 512,
      sequentialUploads: !1,
      limitConcurrentUploads: void 0,
      forceIframeTransport: !1,
      redirect: void 0,
      redirectParamName: void 0,
      postMessage: void 0,
      multipart: !0,
      maxChunkSize: void 0,
      uploadedBytes: void 0,
      recalculateProgress: !0,
      progressInterval: 100,
      bitrateInterval: 500,
      autoUpload: !0,
      messages: { uploadedBytes: 'Uploaded bytes exceed file size' },
      i18n: function(t, i) {return t = this.messages[t] || t.toString(), i && e.each(i, function(e, i) {t = t.replace('{' + e + '}', i);}), t;},
      formData: function(e) {return e.serializeArray();},
      add: function(t, i) {
        if (t.isDefaultPrevented()) return !1;
        (i.autoUpload || !1 !== i.autoUpload && e(this).fileupload('option', 'autoUpload')) && i.process().done(function() {i.submit();});
      },
      processData: !1,
      contentType: !1,
      cache: !1
    },
    _specialOptions: ['fileInput', 'dropZone', 'pasteZone', 'multipart', 'forceIframeTransport'],
    _blobSlice: e.support.blobSlice && function() {return (this.slice || this.webkitSlice || this.mozSlice).apply(this, arguments);},
    _BitrateTimer: function() {
      this.timestamp = Date.now ? Date.now() : (new Date).getTime(), this.loaded = 0, this.bitrate = 0, this.getBitrate = function(e, t, i) {
        var n = e - this.timestamp;
        return (!this.bitrate || !i || n > i) && (this.bitrate = (t - this.loaded) * (1e3 / n) * 8, this.loaded = t, this.timestamp = e), this.bitrate;
      };
    },
    _isXHRUpload: function(t) {return !t.forceIframeTransport && (!t.multipart && e.support.xhrFileUpload || e.support.xhrFormDataFileUpload);},
    _getFormData: function(t) {
      var i;
      return 'function' === e.type(t.formData) ? t.formData(t.form) : e.isArray(t.formData) ? t.formData : 'object' === e.type(t.formData) ? (i = [], e.each(t.formData, function(e, t) {
        i.push({
          name: e,
          value: t
        });
      }), i) : [];
    },
    _getTotal: function(t) {
      var i = 0;
      return e.each(t, function(e, t) {i += t.size || 1;}), i;
    },
    _initProgressObject: function(t) {
      var i = { loaded: 0, total: 0, bitrate: 0 };
      t._progress ? e.extend(t._progress, i) : t._progress = i;
    },
    _initResponseObject: function(e) {
      var t;
      if (e._response) for (t in e._response) e._response.hasOwnProperty(t) && delete e._response[t]; else e._response = {};
    },
    _onProgress: function(t, i) {
      if (t.lengthComputable) {
        var n, r = Date.now ? Date.now() : (new Date).getTime();
        if (i._time && i.progressInterval && r - i._time < i.progressInterval && t.loaded !== t.total) return;
        i._time = r, n = Math.floor(t.loaded / t.total * (i.chunkSize || i._progress.total)) + (i.uploadedBytes || 0), this._progress.loaded += n - i._progress.loaded, this._progress.bitrate = this._bitrateTimer.getBitrate(r, this._progress.loaded, i.bitrateInterval), i._progress.loaded = i.loaded = n, i._progress.bitrate = i.bitrate = i._bitrateTimer.getBitrate(r, n, i.bitrateInterval), this._trigger('progress', e.Event('progress', { delegatedEvent: t }), i), this._trigger('progressall', e.Event('progressall', { delegatedEvent: t }), this._progress);
      }
    },
    _initProgressListener: function(t) {
      var i = this, n = t.xhr ? t.xhr() : e.ajaxSettings.xhr();
      n.upload && (e(n.upload).bind('progress', function(e) {
        var n = e.originalEvent;
        e.lengthComputable = n.lengthComputable, e.loaded = n.loaded, e.total = n.total, i._onProgress(e, t);
      }), t.xhr = function() {return n;});
    },
    _isInstanceOf: function(e, t) {return Object.prototype.toString.call(t) === '[object ' + e + ']';},
    _initXHRData: function(t) {
      var i, n = this, r = t.files[0], o = t.multipart || !e.support.xhrFileUpload, s = 'array' === e.type(t.paramName) ? t.paramName[0] : t.paramName;
      t.headers = e.extend({}, t.headers), t.contentRange && (t.headers['Content-Range'] = t.contentRange), o && !t.blob && this._isInstanceOf('File', r) || (t.headers['Content-Disposition'] = 'attachment; filename="' + encodeURI(r.name) + '"'), o ? e.support.xhrFormDataFileUpload && (t.postMessage ? (i = this._getFormData(t), t.blob ? i.push({
        name: s,
        value: t.blob
      }) : e.each(t.files, function(n, r) {
        i.push({
          name: 'array' === e.type(t.paramName) && t.paramName[n] || s,
          value: r
        });
      })) : (n._isInstanceOf('FormData', t.formData) ? i = t.formData : (i = new FormData, e.each(this._getFormData(t), function(e, t) {i.append(t.name, t.value);})), t.blob ? i.append(s, t.blob, r.name) : e.each(t.files, function(r, o) {(n._isInstanceOf('File', o) || n._isInstanceOf('Blob', o)) && i.append('array' === e.type(t.paramName) && t.paramName[r] || s, o, o.uploadName || o.name);})), t.data = i) : (t.contentType = r.type || 'application/octet-stream', t.data = t.blob || r), t.blob = null;
    },
    _initIframeSettings: function(t) {
      var i = e('<a></a>').prop('href', t.url).prop('host');
      t.dataType = 'iframe ' + (t.dataType || ''), t.formData = this._getFormData(t), t.redirect && i && i !== location.host && t.formData.push({
        name: t.redirectParamName || 'redirect',
        value: t.redirect
      });
    },
    _initDataSettings: function(e) {this._isXHRUpload(e) ? (this._chunkedUpload(e, !0) || (e.data || this._initXHRData(e), this._initProgressListener(e)), e.postMessage && (e.dataType = 'postmessage ' + (e.dataType || ''))) : this._initIframeSettings(e);},
    _getParamName: function(t) {
      var i = e(t.fileInput), n = t.paramName;
      return n ? e.isArray(n) || (n = [n]) : (n = [], i.each(function() {for (var t = e(this), i = t.prop('name') || 'files[]', r = (t.prop('files') || [1]).length; r;) n.push(i), r -= 1;}), n.length || (n = [i.prop('name') || 'files[]'])), n;
    },
    _initFormSettings: function(t) {t.form && t.form.length || (t.form = e(t.fileInput.prop('form')), t.form.length || (t.form = e(this.options.fileInput.prop('form')))), t.paramName = this._getParamName(t), t.url || (t.url = t.form.prop('action') || location.href), t.type = (t.type || 'string' === e.type(t.form.prop('method')) && t.form.prop('method') || '').toUpperCase(), 'POST' !== t.type && 'PUT' !== t.type && 'PATCH' !== t.type && (t.type = 'POST'), t.formAcceptCharset || (t.formAcceptCharset = t.form.attr('accept-charset'));},
    _getAJAXSettings: function(t) {
      var i = e.extend({}, this.options, t);
      return this._initFormSettings(i), this._initDataSettings(i), i;
    },
    _getDeferredState: function(e) {return e.state ? e.state() : e.isResolved() ? 'resolved' : e.isRejected() ? 'rejected' : 'pending';},
    _enhancePromise: function(e) {return e.success = e.done, e.error = e.fail, e.complete = e.always, e;},
    _getXHRPromise: function(t, i, n) {
      var r = e.Deferred(), o = r.promise();
      return i = i || this.options.context || o, !0 === t ? r.resolveWith(i, n) : !1 === t && r.rejectWith(i, n), o.abort = r.promise, this._enhancePromise(o);
    },
    _addConvenienceMethods: function(t, i) {
      var n = this, r = function(t) {return e.Deferred().resolveWith(n, t).promise();};
      i.process = function(t, o) {return (t || o) && (i._processQueue = this._processQueue = (this._processQueue || r([this])).pipe(function() {return i.errorThrown ? e.Deferred().rejectWith(n, [i]).promise() : r(arguments);}).pipe(t, o)), this._processQueue || r([this]);}, i.submit = function() {return 'pending' !== this.state() && (i.jqXHR = this.jqXHR = !1 !== n._trigger('submit', e.Event('submit', { delegatedEvent: t }), this) && n._onSend(t, this)), this.jqXHR || n._getXHRPromise();}, i.abort = function() {return this.jqXHR ? this.jqXHR.abort() : (this.errorThrown = 'abort', n._trigger('fail', null, this), n._getXHRPromise(!1));}, i.state = function() {return this.jqXHR ? n._getDeferredState(this.jqXHR) : this._processQueue ? n._getDeferredState(this._processQueue) : void 0;}, i.processing = function() {return !this.jqXHR && this._processQueue && 'pending' === n._getDeferredState(this._processQueue);}, i.progress = function() {return this._progress;}, i.response = function() {return this._response;};
    },
    _getUploadedBytes: function(e) {
      var t = e.getResponseHeader('Range'), i = t && t.split('-'), n = i && i.length > 1 && parseInt(i[1], 10);
      return n && n + 1;
    },
    _chunkedUpload: function(t, i) {
      t.uploadedBytes = t.uploadedBytes || 0;
      var n, r, o = this, s = t.files[0], a = s.size, l = t.uploadedBytes, c = t.maxChunkSize || a, d = this._blobSlice, u = e.Deferred(), p = u.promise();
      return !(!(this._isXHRUpload(t) && d && (l || c < a)) || t.data) && (!!i || (l >= a ? (s.error = t.i18n('uploadedBytes'), this._getXHRPromise(!1, t.context, [null, 'error', s.error])) : (r = function() {
        var i = e.extend({}, t), p = i._progress.loaded;
        i.blob = d.call(s, l, l + c, s.type), i.chunkSize = i.blob.size, i.contentRange = 'bytes ' + l + '-' + (l + i.chunkSize - 1) + '/' + a, o._initXHRData(i), o._initProgressListener(i), n = (!1 !== o._trigger('chunksend', null, i) && e.ajax(i) || o._getXHRPromise(!1, i.context)).done(function(n, s, c) {
          l = o._getUploadedBytes(c) || l + i.chunkSize, p + i.chunkSize - i._progress.loaded && o._onProgress(e.Event('progress', {
            lengthComputable: !0,
            loaded: l - i.uploadedBytes,
            total: l - i.uploadedBytes
          }), i), t.uploadedBytes = i.uploadedBytes = l, i.result = n, i.textStatus = s, i.jqXHR = c, o._trigger('chunkdone', null, i), o._trigger('chunkalways', null, i), l < a ? r() : u.resolveWith(i.context, [n, s, c]);
        }).fail(function(e, t, n) {i.jqXHR = e, i.textStatus = t, i.errorThrown = n, o._trigger('chunkfail', null, i), o._trigger('chunkalways', null, i), u.rejectWith(i.context, [e, t, n]);});
      }, this._enhancePromise(p), p.abort = function() {return n.abort();}, r(), p)));
    },
    _beforeSend: function(e, t) {0 === this._active && (this._trigger('start'), this._bitrateTimer = new this._BitrateTimer, this._progress.loaded = this._progress.total = 0, this._progress.bitrate = 0), this._initResponseObject(t), this._initProgressObject(t), t._progress.loaded = t.loaded = t.uploadedBytes || 0, t._progress.total = t.total = this._getTotal(t.files) || 1, t._progress.bitrate = t.bitrate = 0, this._active += 1, this._progress.loaded += t.loaded, this._progress.total += t.total;},
    _onDone: function(t, i, n, r) {
      var o = r._progress.total, s = r._response;
      r._progress.loaded < o && this._onProgress(e.Event('progress', {
        lengthComputable: !0,
        loaded: o,
        total: o
      }), r), s.result = r.result = t, s.textStatus = r.textStatus = i, s.jqXHR = r.jqXHR = n, this._trigger('done', null, r);
    },
    _onFail: function(e, t, i, n) {
      var r = n._response;
      n.recalculateProgress && (this._progress.loaded -= n._progress.loaded, this._progress.total -= n._progress.total), r.jqXHR = n.jqXHR = e, r.textStatus = n.textStatus = t, r.errorThrown = n.errorThrown = i, this._trigger('fail', null, n);
    },
    _onAlways: function(e, t, i, n) {this._trigger('always', null, n);},
    _onSend: function(t, i) {
      i.submit || this._addConvenienceMethods(t, i);
      var n, r, o, s, a = this, l = a._getAJAXSettings(i), c = function() {
        return a._sending += 1, l._bitrateTimer = new a._BitrateTimer, n = n || ((r || !1 === a._trigger('send', e.Event('send', { delegatedEvent: t }), l)) && a._getXHRPromise(!1, l.context, r) || a._chunkedUpload(l) || e.ajax(l)).done(function(e, t, i) {a._onDone(e, t, i, l);}).fail(function(e, t, i) {a._onFail(e, t, i, l);}).always(function(e, t, i) {
          if (a._onAlways(e, t, i, l), a._sending -= 1, a._active -= 1, l.limitConcurrentUploads && l.limitConcurrentUploads > a._sending) for (var n = a._slots.shift(); n;) {
            if ('pending' === a._getDeferredState(n)) {
              n.resolve();
              break;
            }
            n = a._slots.shift();
          }
          0 === a._active && a._trigger('stop');
        });
      };
      return this._beforeSend(t, l), this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ? (this.options.limitConcurrentUploads > 1 ? (o = e.Deferred(), this._slots.push(o), s = o.pipe(c)) : (this._sequence = this._sequence.pipe(c, c), s = this._sequence), s.abort = function() {return r = [void 0, 'abort', 'abort'], n ? n.abort() : (o && o.rejectWith(l.context, r), c());}, this._enhancePromise(s)) : c();
    },
    _onAdd: function(t, i) {
      var n, r, o, s, a = this, l = !0, c = e.extend({}, this.options, i), d = i.files, u = d.length, p = c.limitMultiFileUploads, h = c.limitMultiFileUploadSize,
          f = c.limitMultiFileUploadSizeOverhead, m = 0, g = this._getParamName(c), v = 0;
      if (!h || u && void 0 !== d[0].size || (h = void 0), (c.singleFileUploads || p || h) && this._isXHRUpload(c)) if (c.singleFileUploads || h || !p) if (!c.singleFileUploads && h) for (o = [], n = [], s = 0; s < u; s += 1) m += d[s].size + f, (s + 1 === u || m + d[s + 1].size + f > h || p && s + 1 - v >= p) && (o.push(d.slice(v, s + 1)), (r = g.slice(v, s + 1)).length || (r = g), n.push(r), v = s + 1, m = 0); else n = g; else for (o = [], n = [], s = 0; s < u; s += p) o.push(d.slice(s, s + p)), (r = g.slice(s, s + p)).length || (r = g), n.push(r); else o = [d], n = [g];
      return i.originalFiles = d, e.each(o || d, function(r, s) {
        var c = e.extend({}, i);
        return c.files = o ? s : [s], c.paramName = n[r], a._initResponseObject(c), a._initProgressObject(c), a._addConvenienceMethods(t, c), l = a._trigger('add', e.Event('add', { delegatedEvent: t }), c);
      }), l;
    },
    _replaceFileInput: function(t) {
      var i = t.fileInput, n = i.clone(!0);
      t.fileInputClone = n, e('<form></form>').append(n)[0].reset(), i.after(n).detach(), e.cleanData(i.unbind('remove')), this.options.fileInput = this.options.fileInput.map(function(e, t) {return t === i[0] ? n[0] : t;}), i[0] === this.element[0] && (this.element = n);
    },
    _handleFileTreeEntry: function(t, i) {
      var n, r = this, o = e.Deferred(), s = function(e) {e && !e.entry && (e.entry = t), o.resolve([e]);},
          a = function(e) {r._handleFileTreeEntries(e, i + t.name + '/').done(function(e) {o.resolve(e);}).fail(s);},
          l = function() {n.readEntries(function(e) {e.length ? (c = c.concat(e), l()) : a(c);}, s);}, c = [];
      return i = i || '', t.isFile ? t._file ? (t._file.relativePath = i, o.resolve(t._file)) : t.file(function(e) {e.relativePath = i, o.resolve(e);}, s) : t.isDirectory ? (n = t.createReader(), l()) : o.resolve([]), o.promise();
    },
    _handleFileTreeEntries: function(t, i) {
      var n = this;
      return e.when.apply(e, e.map(t, function(e) {return n._handleFileTreeEntry(e, i);})).pipe(function() {return Array.prototype.concat.apply([], arguments);});
    },
    _getDroppedFiles: function(t) {
      var i = (t = t || {}).items;
      return i && i.length && (i[0].webkitGetAsEntry || i[0].getAsEntry) ? this._handleFileTreeEntries(e.map(i, function(e) {
        var t;
        return e.webkitGetAsEntry ? ((t = e.webkitGetAsEntry()) && (t._file = e.getAsFile()), t) : e.getAsEntry();
      })) : e.Deferred().resolve(e.makeArray(t.files)).promise();
    },
    _getSingleFileInputFiles: function(t) {
      var i, n, r = (t = e(t)).prop('webkitEntries') || t.prop('entries');
      if (r && r.length) return this._handleFileTreeEntries(r);
      if ((i = e.makeArray(t.prop('files'))).length) void 0 === i[0].name && i[0].fileName && e.each(i, function(e, t) {t.name = t.fileName, t.size = t.fileSize;}); else {
        if (!(n = t.prop('value'))) return e.Deferred().resolve([]).promise();
        i = [{ name: n.replace(/^.*\\/, '') }];
      }
      return e.Deferred().resolve(i).promise();
    },
    _getFileInputFiles: function(t) {return t instanceof e && 1 !== t.length ? e.when.apply(e, e.map(t, this._getSingleFileInputFiles)).pipe(function() {return Array.prototype.concat.apply([], arguments);}) : this._getSingleFileInputFiles(t);},
    _onChange: function(t) {
      var i = this, n = { fileInput: e(t.target), form: e(t.target.form) };
      this._getFileInputFiles(n.fileInput).always(function(r) {n.files = r, i.options.replaceFileInput && i._replaceFileInput(n), !1 !== i._trigger('change', e.Event('change', { delegatedEvent: t }), n) && i._onAdd(t, n);});
    },
    _onPaste: function(t) {
      var i = t.originalEvent && t.originalEvent.clipboardData && t.originalEvent.clipboardData.items, n = { files: [] };
      i && i.length && (e.each(i, function(e, t) {
        var i = t.getAsFile && t.getAsFile();
        i && n.files.push(i);
      }), !1 !== this._trigger('paste', e.Event('paste', { delegatedEvent: t }), n) && this._onAdd(t, n));
    },
    _onDrop: function(t) {
      t.dataTransfer = t.originalEvent && t.originalEvent.dataTransfer;
      var i = this, n = t.dataTransfer, r = {};
      n && n.files && n.files.length && (t.preventDefault(), this._getDroppedFiles(n).always(function(n) {r.files = n, !1 !== i._trigger('drop', e.Event('drop', { delegatedEvent: t }), r) && i._onAdd(t, r);}));
    },
    _onDragOver: t('dragover'),
    _onDragEnter: t('dragenter'),
    _onDragLeave: t('dragleave'),
    _initEventHandlers: function() {
      this._isXHRUpload(this.options) && (this._on(this.options.dropZone, {
        dragover: this._onDragOver,
        drop: this._onDrop,
        dragenter: this._onDragEnter,
        dragleave: this._onDragLeave
      }), this._on(this.options.pasteZone, { paste: this._onPaste })), e.support.fileInput && this._on(this.options.fileInput, { change: this._onChange });
    },
    _destroyEventHandlers: function() {this._off(this.options.dropZone, 'dragenter dragleave dragover drop'), this._off(this.options.pasteZone, 'paste'), this._off(this.options.fileInput, 'change');},
    _setOption: function(t, i) {
      var n = -1 !== e.inArray(t, this._specialOptions);
      n && this._destroyEventHandlers(), this._super(t, i), n && (this._initSpecialOptions(), this._initEventHandlers());
    },
    _initSpecialOptions: function() {
      var t = this.options;
      void 0 === t.fileInput ? t.fileInput = this.element.is('input[type="file"]:enabled') ? this.element : this.element.find('input[type="file"]:enabled') : t.fileInput instanceof e || (t.fileInput = e(t.fileInput)), t.dropZone instanceof e || (t.dropZone = e(t.dropZone)), t.pasteZone instanceof e || (t.pasteZone = e(t.pasteZone));
    },
    _getRegExp: function(e) {
      var t = e.split('/'), i = t.pop();
      return t.shift(), new RegExp(t.join('/'), i);
    },
    _isRegExpOption: function(t, i) {return 'url' !== t && 'string' === e.type(i) && /^\/.*\/[igm]{0,3}$/.test(i);},
    _initDataAttributes: function() {
      var t = this, i = this.options, n = e(this.element[0].cloneNode(!1));
      e.each(n.data(), function(e, r) {
        var o = 'data-' + e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        n.attr(o) && (t._isRegExpOption(e, r) && (r = t._getRegExp(r)), i[e] = r);
      });
    },
    _create: function() {this._initDataAttributes(), this._initSpecialOptions(), this._slots = [], this._sequence = this._getXHRPromise(!0), this._sending = this._active = 0, this._initProgressObject(this), this._initEventHandlers();},
    active: function() {return this._active;},
    progress: function() {return this._progress;},
    add: function(t) {
      var i = this;
      t && !this.options.disabled && (t.fileInput && !t.files ? this._getFileInputFiles(t.fileInput).always(function(e) {t.files = e, i._onAdd(null, t);}) : (t.files = e.makeArray(t.files), this._onAdd(null, t)));
    },
    send: function(t) {
      if (t && !this.options.disabled) {
        if (t.fileInput && !t.files) {
          var i, n, r = this, o = e.Deferred(), s = o.promise();
          return s.abort = function() {return n = !0, i ? i.abort() : (o.reject(null, 'abort', 'abort'), s);}, this._getFileInputFiles(t.fileInput).always(function(e) {n || (e.length ? (t.files = e, (i = r._onSend(null, t)).then(function(e, t, i) {o.resolve(e, t, i);}, function(e, t, i) {o.reject(e, t, i);})) : o.reject());}), this._enhancePromise(s);
        }
        if (t.files = e.makeArray(t.files), t.files.length) return this._onSend(null, t);
      }
      return this._getXHRPromise(!1, t && t.context);
    }
  });
}), function(e) {
  'use strict';
  'function' == typeof define && define.amd ? define(['jquery', 'tmpl', './jquery.fileupload-image', './jquery.fileupload-audio', './jquery.fileupload-video', './jquery.fileupload-validate'], e) : e(window.jQuery, window.tmpl);
}(function(e, t) {
  'use strict';
  e.blueimp.fileupload.prototype._specialOptions.push('filesContainer', 'uploadTemplateId', 'downloadTemplateId'), e.widget('blueimp.fileupload', e.blueimp.fileupload, {
    options: {
      autoUpload: !1,
      uploadTemplateId: 'template-upload',
      downloadTemplateId: 'template-download',
      filesContainer: void 0,
      prependFiles: !1,
      dataType: 'json',
      messages: { unknownError: 'Unknown error' },
      getNumberOfFiles: function() {return this.filesContainer.children().not('.processing').length;},
      getFilesFromResponse: function(t) {return t.result && e.isArray(t.result.files) ? t.result.files : [];},
      add: function(t, i) {
        if (t.isDefaultPrevented()) return !1;
        var n = e(this), r = n.data('blueimp-fileupload') || n.data('fileupload'), o = r.options;
        i.context = r._renderUpload(i.files).data('data', i).addClass('processing'), o.filesContainer[o.prependFiles ? 'prepend' : 'append'](i.context), r._forceReflow(i.context), r._transition(i.context), i.process(function() {return n.fileupload('process', i);}).always(function() {i.context.each(function(t) {e(this).find('.size').text(r._formatFileSize(i.files[t].size));}).removeClass('processing'), r._renderPreviews(i);}).done(function() {i.context.find('.start').prop('disabled', !1), !1 !== r._trigger('added', t, i) && (o.autoUpload || i.autoUpload) && !1 !== i.autoUpload && i.submit();}).fail(function() {
          i.files.error && i.context.each(function(t) {
            var n = i.files[t].error;
            n && e(this).find('.error').text(n);
          });
        });
      },
      send: function(t, i) {
        if (t.isDefaultPrevented()) return !1;
        var n = e(this).data('blueimp-fileupload') || e(this).data('fileupload');
        return i.context && i.dataType && 'iframe' === i.dataType.substr(0, 6) && i.context.find('.progress').addClass(!e.support.transition && 'progress-animated').attr('aria-valuenow', 100).children().first().css('width', '100%'), n._trigger('sent', t, i);
      },
      done: function(t, i) {
        if (t.isDefaultPrevented()) return !1;
        var n, r, o = e(this).data('blueimp-fileupload') || e(this).data('fileupload'), s = (i.getFilesFromResponse || o.options.getFilesFromResponse)(i);
        i.context ? i.context.each(function(a) {
          var l = s[a] || { error: 'Empty file upload result' };
          r = o._addFinishedDeferreds(), o._transition(e(this)).done(function() {
            var s = e(this);
            n = o._renderDownload([l]).replaceAll(s), o._forceReflow(n), o._transition(n).done(function() {i.context = e(this), o._trigger('completed', t, i), o._trigger('finished', t, i), r.resolve();});
          });
        }) : (n = o._renderDownload(s)[o.options.prependFiles ? 'prependTo' : 'appendTo'](o.options.filesContainer), o._forceReflow(n), r = o._addFinishedDeferreds(), o._transition(n).done(function() {i.context = e(this), o._trigger('completed', t, i), o._trigger('finished', t, i), r.resolve();}));
      },
      fail: function(t, i) {
        if (t.isDefaultPrevented()) return !1;
        var n, r, o = e(this).data('blueimp-fileupload') || e(this).data('fileupload');
        i.context ? i.context.each(function(s) {
          if ('abort' !== i.errorThrown) {
            var a = i.files[s];
            a.error = a.error || i.errorThrown || i.i18n('unknownError'), r = o._addFinishedDeferreds(), o._transition(e(this)).done(function() {
              var s = e(this);
              n = o._renderDownload([a]).replaceAll(s), o._forceReflow(n), o._transition(n).done(function() {i.context = e(this), o._trigger('failed', t, i), o._trigger('finished', t, i), r.resolve();});
            });
          } else r = o._addFinishedDeferreds(), o._transition(e(this)).done(function() {e(this).remove(), o._trigger('failed', t, i), o._trigger('finished', t, i), r.resolve();});
        }) : 'abort' !== i.errorThrown ? (i.context = o._renderUpload(i.files)[o.options.prependFiles ? 'prependTo' : 'appendTo'](o.options.filesContainer).data('data', i), o._forceReflow(i.context), r = o._addFinishedDeferreds(), o._transition(i.context).done(function() {i.context = e(this), o._trigger('failed', t, i), o._trigger('finished', t, i), r.resolve();})) : (o._trigger('failed', t, i), o._trigger('finished', t, i), o._addFinishedDeferreds().resolve());
      },
      progress: function(t, i) {
        if (t.isDefaultPrevented()) return !1;
        var n = Math.floor(i.loaded / i.total * 100);
        i.context && i.context.each(function() {e(this).find('.progress').attr('aria-valuenow', n).children().first().css('width', n + '%');});
      },
      progressall: function(t, i) {
        if (t.isDefaultPrevented()) return !1;
        var n = e(this), r = Math.floor(i.loaded / i.total * 100), o = n.find('.fileupload-progress'), s = o.find('.progress-extended');
        s.length && s.html((n.data('blueimp-fileupload') || n.data('fileupload'))._renderExtendedProgress(i)), o.find('.progress').attr('aria-valuenow', r).children().first().css('width', r + '%');
      },
      start: function(t) {
        if (t.isDefaultPrevented()) return !1;
        var i = e(this).data('blueimp-fileupload') || e(this).data('fileupload');
        i._resetFinishedDeferreds(), i._transition(e(this).find('.fileupload-progress')).done(function() {i._trigger('started', t);});
      },
      stop: function(t) {
        if (t.isDefaultPrevented()) return !1;
        var i = e(this).data('blueimp-fileupload') || e(this).data('fileupload'), n = i._addFinishedDeferreds();
        e.when.apply(e, i._getFinishedDeferreds()).done(function() {i._trigger('stopped', t);}), i._transition(e(this).find('.fileupload-progress')).done(function() {e(this).find('.progress').attr('aria-valuenow', '0').children().first().css('width', '0%'), e(this).find('.progress-extended').html('&nbsp;'), n.resolve();});
      },
      processstart: function(t) {
        if (t.isDefaultPrevented()) return !1;
        e(this).addClass('fileupload-processing');
      },
      processstop: function(t) {
        if (t.isDefaultPrevented()) return !1;
        e(this).removeClass('fileupload-processing');
      },
      destroy: function(t, i) {
        if (t.isDefaultPrevented()) return !1;
        var n = e(this).data('blueimp-fileupload') || e(this).data('fileupload'), r = function() {n._transition(i.context).done(function() {e(this).remove(), n._trigger('destroyed', t, i);});};
        i.url ? (i.dataType = i.dataType || n.options.dataType, e.ajax(i).done(r).fail(function() {n._trigger('destroyfailed', t, i);})) : r();
      }
    },
    _resetFinishedDeferreds: function() {this._finishedUploads = [];},
    _addFinishedDeferreds: function(t) {return t || (t = e.Deferred()), this._finishedUploads.push(t), t;},
    _getFinishedDeferreds: function() {return this._finishedUploads;},
    _enableDragToDesktop: function() {
      var t = e(this), i = t.prop('href'), n = t.prop('download');
      t.bind('dragstart', function(e) {try {e.originalEvent.dataTransfer.setData('DownloadURL', ['application/octet-stream', n, i].join(':'));} catch (e) {}});
    },
    _formatFileSize: function(e) {return 'number' != typeof e ? '' : e >= 1e9 ? (e / 1e9).toFixed(2) + ' GB' : e >= 1e6 ? (e / 1e6).toFixed(2) + ' MB' : (e / 1e3).toFixed(2) + ' KB';},
    _formatBitrate: function(e) {return 'number' != typeof e ? '' : e >= 1e9 ? (e / 1e9).toFixed(2) + ' Gbit/s' : e >= 1e6 ? (e / 1e6).toFixed(2) + ' Mbit/s' : e >= 1e3 ? (e / 1e3).toFixed(2) + ' kbit/s' : e.toFixed(2) + ' bit/s';},
    _formatTime: function(e) {
      var t = new Date(1e3 * e), i = Math.floor(e / 86400);
      return (i = i ? i + 'd ' : '') + ('0' + t.getUTCHours()).slice(-2) + ':' + ('0' + t.getUTCMinutes()).slice(-2) + ':' + ('0' + t.getUTCSeconds()).slice(-2);
    },
    _formatPercentage: function(e) {return (100 * e).toFixed(2) + ' %';},
    _renderExtendedProgress: function(e) {return this._formatBitrate(e.bitrate) + ' | ' + this._formatTime(8 * (e.total - e.loaded) / e.bitrate) + ' | ' + this._formatPercentage(e.loaded / e.total) + ' | ' + this._formatFileSize(e.loaded) + ' / ' + this._formatFileSize(e.total);},
    _renderTemplate: function(t, i) {
      if (!t) return e();
      var n = t({ files: i, formatFileSize: this._formatFileSize, options: this.options });
      return n instanceof e ? n : e(this.options.templatesContainer).html(n).children();
    },
    _renderPreviews: function(t) {t.context.find('.preview').each(function(i, n) {e(n).append(t.files[i].preview);});},
    _renderUpload: function(e) {return this._renderTemplate(this.options.uploadTemplate, e);},
    _renderDownload: function(e) {return this._renderTemplate(this.options.downloadTemplate, e).find('a[download]').each(this._enableDragToDesktop).end();},
    _startHandler: function(t) {
      t.preventDefault();
      var i = e(t.currentTarget), n = i.closest('.template-upload').data('data');
      i.prop('disabled', !0), n && n.submit && n.submit();
    },
    _cancelHandler: function(t) {
      t.preventDefault();
      var i = e(t.currentTarget).closest('.template-upload,.template-download'), n = i.data('data') || {};
      n.context = n.context || i, n.abort ? n.abort() : (n.errorThrown = 'abort', this._trigger('fail', t, n));
    },
    _deleteHandler: function(t) {
      t.preventDefault();
      var i = e(t.currentTarget);
      this._trigger('destroy', t, e.extend({ context: i.closest('.template-download'), type: 'DELETE' }, i.data()));
    },
    _forceReflow: function(t) {return e.support.transition && t.length && t[0].offsetWidth;},
    _transition: function(t) {
      var i = e.Deferred();
      return e.support.transition && t.hasClass('fade') && t.is(':visible') ? t.bind(e.support.transition.end, function(n) {n.target === t[0] && (t.unbind(e.support.transition.end), i.resolveWith(t));}).toggleClass('in') : (t.toggleClass('in'), i.resolveWith(t)), i;
    },
    _initButtonBarEventHandlers: function() {
      var t = this.element.find('.fileupload-buttonbar'), i = this.options.filesContainer;
      this._on(t.find('.start'), { click: function(e) {e.preventDefault(), i.find('.start').click();} }), this._on(t.find('.cancel'), { click: function(e) {e.preventDefault(), i.find('.cancel').click();} }), this._on(t.find('.delete'), { click: function(e) {e.preventDefault(), i.find('.toggle:checked').closest('.template-download').find('.delete').click(), t.find('.toggle').prop('checked', !1);} }), this._on(t.find('.toggle'), { change: function(t) {i.find('.toggle').prop('checked', e(t.currentTarget).is(':checked'));} });
    },
    _destroyButtonBarEventHandlers: function() {this._off(this.element.find('.fileupload-buttonbar').find('.start, .cancel, .delete'), 'click'), this._off(this.element.find('.fileupload-buttonbar .toggle'), 'change.');},
    _initEventHandlers: function() {
      this._super(), this._on(this.options.filesContainer, {
        'click .start': this._startHandler,
        'click .cancel': this._cancelHandler,
        'click .delete': this._deleteHandler
      }), this._initButtonBarEventHandlers();
    },
    _destroyEventHandlers: function() {this._destroyButtonBarEventHandlers(), this._off(this.options.filesContainer, 'click'), this._super();},
    _enableFileInputButton: function() {this.element.find('.fileinput-button input').prop('disabled', !1).parent().removeClass('disabled');},
    _disableFileInputButton: function() {this.element.find('.fileinput-button input').prop('disabled', !0).parent().addClass('disabled');},
    _initTemplates: function() {
      var e = this.options;
      e.templatesContainer = this.document[0].createElement(e.filesContainer.prop('nodeName')), t && (e.uploadTemplateId && (e.uploadTemplate = t(e.uploadTemplateId)), e.downloadTemplateId && (e.downloadTemplate = t(e.downloadTemplateId)));
    },
    _initFilesContainer: function() {
      var t = this.options;
      void 0 === t.filesContainer ? t.filesContainer = this.element.find('.files') : t.filesContainer instanceof e || (t.filesContainer = e(t.filesContainer));
    },
    _initSpecialOptions: function() {this._super(), this._initFilesContainer(), this._initTemplates();},
    _create: function() {this._super(), this._resetFinishedDeferreds(), e.support.fileInput || this._disableFileInputButton();},
    enable: function() {
      var e = !1;
      this.options.disabled && (e = !0), this._super(), e && (this.element.find('input, button').prop('disabled', !1), this._enableFileInputButton());
    },
    disable: function() {this.options.disabled || (this.element.find('input, button').prop('disabled', !0), this._disableFileInputButton()), this._super();}
  });
}), function(e) {
  'use strict';
  var t = {}, i = Math.max, n = Math.min;
  t.c = {}, t.c.d = e(document), t.c.t = function(e) {return e.originalEvent.touches.length - 1;}, t.o = function() {
    var i = this;
    this.o = null, this.$ = null, this.i = null, this.g = null, this.v = null, this.cv = null, this.x = 0, this.y = 0, this.$c = null, this.c = null, this.t = 0, this.isInit = !1, this.fgColor = null, this.pColor = null, this.dH = null, this.cH = null, this.eH = null, this.rH = null, this.run = function() {
      var t = function(e, t) {
        var n;
        for (n in t) i.o[n] = t[n];
        i.init(), i._configure()._draw();
      };
      if (!this.$.data('kontroled')) return this.$.data('kontroled', !0), this.extend(), this.o = e.extend({
        min: this.$.data('min') || 0,
        max: this.$.data('max') || 100,
        stopper: !0,
        readOnly: this.$.data('readonly'),
        cursor: !0 === this.$.data('cursor') && 30 || this.$.data('cursor') || 0,
        thickness: this.$.data('thickness') || .35,
        lineCap: this.$.data('linecap') || 'butt',
        width: this.$.data('width') || 200,
        height: this.$.data('height') || 200,
        displayInput: null == this.$.data('displayinput') || this.$.data('displayinput'),
        displayPrevious: this.$.data('displayprevious'),
        fgColor: this.$.data('fgcolor') || '#87CEEB',
        inputColor: this.$.data('inputcolor') || this.$.data('fgcolor') || '#87CEEB',
        inline: !1,
        step: this.$.data('step') || 1,
        draw: null,
        change: null,
        cancel: null,
        release: null
      }, this.o), this.$.is('fieldset') ? (this.v = {}, this.i = this.$.find('input'), this.i.each(function(t) {
        var n = e(this);
        i.i[t] = n, i.v[t] = n.val(), n.bind('change', function() {
          var e = {};
          e[t] = n.val(), i.val(e);
        });
      }), this.$.find('legend').remove()) : (this.i = this.$, this.v = this.$.val(), '' == this.v && (this.v = this.o.min), this.$.bind('change', function() {i.val(i._validate(i.$.val()));})), !this.o.displayInput && this.$.hide(), this.$c = e('<canvas width="' + this.o.width + 'px" height="' + this.o.height + 'px"></canvas>'), this.c = this.$c[0].getContext('2d'), this.$.wrap(e('<div style="width:' + this.o.width + 'px;height:' + this.o.height + 'px;"></div>')).before(this.$c), this.v instanceof Object ? (this.cv = {}, this.copy(this.v, this.cv)) : this.cv = this.v, this.$.bind('configure', t).parent().bind('configure', t), this._listen()._configure()._xy().init(), this.isInit = !0, this._draw(), this;
    }, this._draw = function() {
      var e = !0, t = document.createElement('canvas');
      t.width = i.o.width, t.height = i.o.height, i.g = t.getContext('2d'), i.clear(), i.dH && (e = i.dH()), !1 !== e && i.draw(), i.c.drawImage(t, 0, 0), t = null;
    }, this._touch = function(e) {
      var n = function(e) {
        var t = i.xy2val(e.originalEvent.touches[i.t].pageX, e.originalEvent.touches[i.t].pageY);
        t != i.cv && (i.cH && !1 === i.cH(t) || (i.change(i._validate(t)), i._draw()));
      };
      return this.t = t.c.t(e), n(e), t.c.d.bind('touchmove.k', n).bind('touchend.k', function() {t.c.d.unbind('touchmove.k touchend.k'), i.rH && !1 === i.rH(i.cv) || i.val(i.cv);}), this;
    }, this._mouse = function(e) {
      var n = function(e) {
        var t = i.xy2val(e.pageX, e.pageY);
        t != i.cv && (i.cH && !1 === i.cH(t) || (i.change(i._validate(t)), i._draw()));
      };
      return n(e), t.c.d.bind('mousemove.k', n).bind('keyup.k', function(e) {
        if (27 === e.keyCode) {
          if (t.c.d.unbind('mouseup.k mousemove.k keyup.k'), i.eH && !1 === i.eH()) return;
          i.cancel();
        }
      }).bind('mouseup.k', function(e) {t.c.d.unbind('mousemove.k mouseup.k keyup.k'), i.rH && !1 === i.rH(i.cv) || i.val(i.cv);}), this;
    }, this._xy = function() {
      var e = this.$c.offset();
      return this.x = e.left, this.y = e.top, this;
    }, this._listen = function() {return this.o.readOnly ? this.$.attr('readonly', 'readonly') : (this.$c.bind('mousedown', function(e) {e.preventDefault(), i._xy()._mouse(e);}).bind('touchstart', function(e) {e.preventDefault(), i._xy()._touch(e);}), this.listen()), this;}, this._configure = function() {return this.o.draw && (this.dH = this.o.draw), this.o.change && (this.cH = this.o.change), this.o.cancel && (this.eH = this.o.cancel), this.o.release && (this.rH = this.o.release), this.o.displayPrevious ? (this.pColor = this.h2rgba(this.o.fgColor, '0.4'), this.fgColor = this.h2rgba(this.o.fgColor, '0.6')) : this.fgColor = this.o.fgColor, this;}, this._clear = function() {this.$c[0].width = this.$c[0].width;}, this._validate = function(e) {return ~~((e < 0 ? -.5 : .5) + e / this.o.step) * this.o.step;}, this.listen = function() {}, this.extend = function() {}, this.init = function() {}, this.change = function(e) {}, this.val = function(e) {}, this.xy2val = function(e, t) {}, this.draw = function() {}, this.clear = function() {this._clear();}, this.h2rgba = function(e, t) {
      var i;
      return e = e.substring(1, 7), 'rgba(' + (i = [parseInt(e.substring(0, 2), 16), parseInt(e.substring(2, 4), 16), parseInt(e.substring(4, 6), 16)])[0] + ',' + i[1] + ',' + i[2] + ',' + t + ')';
    }, this.copy = function(e, t) {for (var i in e) t[i] = e[i];};
  }, t.Dial = function() {
    t.o.call(this), this.startAngle = null, this.xy = null, this.radius = null, this.lineWidth = null, this.cursorExt = null, this.w2 = null, this.PI2 = 2 * Math.PI, this.extend = function() {
      this.o = e.extend({
        bgColor: this.$.data('bgcolor') || '#EEEEEE',
        angleOffset: this.$.data('angleoffset') || 0,
        angleArc: this.$.data('anglearc') || 360,
        inline: !0
      }, this.o);
    }, this.val = function(e) {
      if (null == e) return this.v;
      this.cv = this.o.stopper ? i(n(e, this.o.max), this.o.min) : e, this.v = this.cv, this.$.val(this.v), this._draw();
    }, this.xy2val = function(e, t) {
      var r, o;
      return r = Math.atan2(e - (this.x + this.w2), -(t - this.y - this.w2)) - this.angleOffset, this.angleArc != this.PI2 && r < 0 && r > -.5 ? r = 0 : r < 0 && (r += this.PI2), o = ~~(.5 + r * (this.o.max - this.o.min) / this.angleArc) + this.o.min, this.o.stopper && (o = i(n(o, this.o.max), this.o.min)), o;
    }, this.listen = function() {
      var t, r, o = this, s = function(e) {
        e.preventDefault();
        var t = e.originalEvent, i = t.detail || t.wheelDeltaX, n = t.detail || t.wheelDeltaY, r = parseInt(o.$.val()) + (i > 0 || n > 0 ? o.o.step : i < 0 || n < 0 ? -o.o.step : 0);
        o.cH && !1 === o.cH(r) || o.val(r);
      }, a = 1, l = { 37: -o.o.step, 38: o.o.step, 39: o.o.step, 40: -o.o.step };
      this.$.bind('keydown', function(s) {
        var c = s.keyCode;
        if (c >= 96 && c <= 105 && (c = s.keyCode = c - 48), t = parseInt(String.fromCharCode(c)), isNaN(t) && (13 !== c && 8 !== c && 9 !== c && 189 !== c && s.preventDefault(), e.inArray(c, [37, 38, 39, 40]) > -1)) {
          s.preventDefault();
          var d = parseInt(o.$.val()) + l[c] * a;
          o.o.stopper && (d = i(n(d, o.o.max), o.o.min)), o.change(d), o._draw(), r = window.setTimeout(function() {a *= 2;}, 30);
        }
      }).bind('keyup', function(e) {isNaN(t) ? r && (window.clearTimeout(r), r = null, a = 1, o.val(o.$.val())) : o.$.val() > o.o.max && o.$.val(o.o.max) || o.$.val() < o.o.min && o.$.val(o.o.min);}), this.$c.bind('mousewheel DOMMouseScroll', s), this.$.bind('mousewheel DOMMouseScroll', s);
    }, this.init = function() {
      (this.v < this.o.min || this.v > this.o.max) && (this.v = this.o.min), this.$.val(this.v), this.w2 = this.o.width / 2, this.cursorExt = this.o.cursor / 100, this.xy = this.w2, this.lineWidth = this.xy * this.o.thickness, this.lineCap = this.o.lineCap, this.radius = this.xy - this.lineWidth / 2, this.o.angleOffset && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset), this.o.angleArc && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc), this.angleOffset = this.o.angleOffset * Math.PI / 180, this.angleArc = this.o.angleArc * Math.PI / 180, this.startAngle = 1.5 * Math.PI + this.angleOffset, this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;
      var e = i(String(Math.abs(this.o.max)).length, String(Math.abs(this.o.min)).length, 2) + 2;
      this.o.displayInput && this.i.css({
        width: (this.o.width / 2 + 4 >> 0) + 'px',
        height: (this.o.width / 3 >> 0) + 'px',
        position: 'absolute',
        'vertical-align': 'middle',
        'margin-top': (this.o.width / 3 >> 0) + 'px',
        'margin-left': '-' + (3 * this.o.width / 4 + 2 >> 0) + 'px',
        border: 0,
        background: 'none',
        font: 'bold ' + (this.o.width / e >> 0) + 'px Arial',
        'text-align': 'center',
        color: this.o.inputColor || this.o.fgColor,
        padding: '0px',
        '-webkit-appearance': 'none'
      }) || this.i.css({ width: '0px', visibility: 'hidden' });
    }, this.change = function(e) {this.cv = e, this.$.val(e);}, this.angle = function(e) {return (e - this.o.min) * this.angleArc / (this.o.max - this.o.min);}, this.draw = function() {
      var e, t, i = this.g, n = this.angle(this.cv), r = this.startAngle, o = r + n, s = 1;
      i.lineWidth = this.lineWidth, i.lineCap = this.lineCap, this.o.cursor && (r = o - this.cursorExt) && (o += this.cursorExt), i.beginPath(), i.strokeStyle = this.o.bgColor, i.arc(this.xy, this.xy, this.radius, this.endAngle, this.startAngle, !0), i.stroke(), this.o.displayPrevious && (t = this.startAngle + this.angle(this.v), e = this.startAngle, this.o.cursor && (e = t - this.cursorExt) && (t += this.cursorExt), i.beginPath(), i.strokeStyle = this.pColor, i.arc(this.xy, this.xy, this.radius, e, t, !1), i.stroke(), s = this.cv == this.v), i.beginPath(), i.strokeStyle = s ? this.o.fgColor : this.fgColor, i.arc(this.xy, this.xy, this.radius, r, o, !1), i.stroke();
    }, this.cancel = function() {this.val(this.v);};
  }, e.fn.dial = e.fn.knob = function(i) {
    return this.each(function() {
      var n = new t.Dial;
      n.o = i, n.$ = e(this), n.run();
    }).parent();
  };
}(jQuery), function(e) {
  var t = {
    paymentForm: null, StripeInstance: null, card: null, init: function(t) {
      try {this.StripeInstance = Stripe(e.config.stripe);} catch (e) {return;}
      this.paymentForm = t;
      var i = this.StripeInstance.elements(), n = { base: { lineHeight: '44px', fontSize: '14px', color: '#333333', '::placeholder': { color: '#999999' } } },
          r = i.create('cardNumber', { placeholder: '', style: n }), o = i.create('cardCvc', { placeholder: '', style: n }), s = i.create('cardExpiry', { placeholder: 'MM / YY', style: n });
      r.mount('#cardNumber'), o.mount('#cardCvc'), s.mount('#cardExp'), this.card = r;
    }, subscribe: function(i) {
      var n = $(this.paymentForm), r = n.find('.paymentErrorContainer');
      r.find('.error').html(''), r.removeClass('active');
      var o = n.find('.cardHolderName').val();
      if ('' === o) return r.find('.error').html('Please enter the name on your credit card.'), void r.addClass('active');
      var s = n.find('.billingCycle:checked').val(), a = n.find('.promoCode').val(),
          l = setTimeout(function() {i.text('').addClass('disabled isLoader loading'), new e.loader(i, 2);}, e.component.loadDelay), c = { name: $('#cardHolderName').val() };
      t.StripeInstance.createToken(this.card, c).then(function(t) {
        if (t.error) {'incomplete_number' === t.error.code && 'cardNumber', r.find('.error').html(t.error.message), r.addClass('active'), clearTimeout(l);} else {
          var n = {
            upgrade_pro_account: 1,
            card_token: t.token.id,
            cardholder_name: o,
            billing: s,
            promo_code: a,
            request_token: e.config.requestToken
          };
          $.ajax({
            url: '/resource/',
            type: 'POST',
            data: n,
            dataType: 'json',
            error: function(t) {r.find('.error').html('There was a problem upgrading your account.'), r.addClass('active'), e.analytics.trackGAEvent('pro_account', 'error', t.responseText);},
            success: function(t) {
              if (1 === t.status) {
                var i = e.$app.find('.settingsForm');
                i.find('.settingsFormNotifer').html(t.message), i.addClass('hasSuccess'), e.analytics.trackGAEvent('pro_account', 'success'), setTimeout(function() {e.redirect('/settings/');}, 2e3);
              } else r.find('.error').html(t.message), r.addClass('active'), e.analytics.trackGAEvent('pro_account', 'failed', t.message);
            },
            complete: function() {clearTimeout(l), e.setButtonRateLimit(function() {i.removeClass('disabled'), i.html('Upgrade Account');});}
          });
        }
      });
    }, updateCard: function(i, n) {
      var r = $(this.paymentForm), o = r.find('.paymentErrorContainer');
      o.find('.error').html(''), o.removeClass('active');
      var s = r.find('.cardHolderName').val();
      if ('' === s) return o.find('.error').html('Please enter the name on your credit card.'), void o.addClass('active');
      var a = setTimeout(function() {
        var t = n.find('.modalStep.processing');
        new e.loader(t), t.addClass('active loading');
      }, e.component.loadDelay);
      i.addClass('disabled');
      var l = { name: $('#cardHolderName').val() };
      t.StripeInstance.createToken(this.card, l).then(function(t) {
        if (t.error) {'incomplete_number' === t.error.code && 'cardNumber', o.find('.error').html(t.error.message), o.addClass('active'), clearTimeout(a);} else {
          var r = {
            update_card: 1,
            card_token: t.token.id,
            cardholder_name: s,
            request_token: e.config.requestToken
          };
          $.ajax({
            url: '/resource/',
            type: 'POST',
            data: r,
            dataType: 'json',
            error: function(t) {o.find('.error').html('There was a problem updating your card.'), o.addClass('active'), n.find('.modalStep').removeClass('active loading'), e.analytics.trackGAEvent('update_card', 'error', t.responseText);},
            success: function(t) {1 === t.status ? (n.find('.modalStep.complete').addClass('active'), n.find('.modalStep').removeClass('loading'), e.analytics.trackGAEvent('update_card', 'success'), setTimeout(function() {e.redirect('/settings/');}, 1200)) : (o.find('.error').html(t.message), o.addClass('active'), n.find('.modalStep').removeClass('active loading'), e.analytics.trackGAEvent('update_card', 'failed', t.message));},
            complete: function() {clearTimeout(a), e.setButtonRateLimit(function() {i.removeClass('disabled');});}
          });
        }
      });
    }
  };
  e.stripeHandler = t;
}(App), function(e) {
  e.webDiscover = {
    minHW: 200,
    init: function() {this.container = e.$app.find('.gridItems'), this.searchWebsiteSaves(), this.addListeners();},
    addListeners: function() {},
    searchWebsiteSaves: function() {
      var t = this.container, i = setTimeout(function() {new e.loader(t), t.addClass('isLoader loading');}, e.component.loadDelay);
      t.css('height', e.browser.height - t.offset().top), $.ajax({
        url: '/resource/',
        type: 'POST',
        dataType: 'json',
        data: { search_website: 1, saves: 1, url: e.json.page.website, request_token: e.config.requestToken },
        error: function(n) {clearTimeout(i), t.removeClass('active loading'), e.analytics.trackGAEvent('save_finder', 'error', n.responseText);},
        success: function(n) {clearTimeout(i), t.removeClass('active loading'), 1 === n.status ? (t.html(n.data), e.webDiscover.analyzeMedia()) : t.append('<h1 class="notFound">No Saves Found</h1>');}
      });
    },
    analyzeMedia: function() {
      var t = this, i = t.container.find('.gridItemImage'), n = !1, r = i.length, o = function() {0 === r && (new e.gridLayout({ feed: !1, variable: !0, isRelated: !1 }), n = !0);},
          s = function(e) {r -= 1, t.getDimensionsSetMedia(e), o();};
      i.load(function() {s($(this));}).error(function() {s($(this));});
    },
    getDimensionsSetMedia: function(t) {
      if (t[0].naturalHeight >= this.minHW && t[0].naturalWidth >= this.minHW) {
        var i = Math.floor(t[0].naturalHeight * e.config.gridItemWidth / t[0].naturalWidth);
        t.parent().css('height', i);
      } else t.parents('.gridItem').remove();
    }
  };
}(App), function(e) {
  function t() {
    e.page.setPageElements();
    var t = e.$html.attr('data-controller');
    if (i.root(), t && (t = t && t.split(' ')).length > 0) {
      var n = 0, r = t.length;
      for (n; n < r; n += 1) {
        var o = t[n];
        i[o] && 'function' == typeof i[o] && i[o]();
      }
    }
  }

  var i = {};
  i.root = function() {
    var t, i = document.getElementById('PJSD');
    if (i && (e.json = JSON.parse(i.textContent), i.innerHTML = ''), e.page.init(), e.isMobile = !1, e.browser.onReady(), e.pageName = e.$html.attr('data-page'), e.analytics.setup(), e.analytics.trackGAPageview(e.analytics.pageGroup), e.component.init(), new e.search, e.ads = new e.AdManager, 'ontouchstart' in document && e.$html.addClass('isMobile'), (t = e.$app.find('form')).length > 0 && t.attr('autocomplete', 'off'), t.on('submit', function() {return !1;}), e.useHistory) {
      var n = !0;
      e.$window.bind('popstate', function(t) {
        var i = window.history.state, r = window.location.pathname, o = -1 !== r.indexOf('/save/') && r.replace('/save/', '').replace('/', '');
        if (n && null === i && o) return n = !1, !1;
        if (o) {
          var s = !1;
          null !== i && !e.historyManager.rewindHistory && e.historyManager.forceDefaultImageLink ? e.redirect(window.location.href) : s = !0, s && e.save.closeupLoader(i, !1, i.isRelatedSaveClick);
        } else !e.historyManager.rewindHistory && e.historyManager.forceDefaultImageLink ? e.redirect(window.location.href) : e.component.activeComponent ? e.component.hide() : e.redirect(window.location.href);
        e.historyManager.ignoreDoubleStateChange = !1;
      });
    }
  }, i.home = function() {}, i.feed = function() {
    var t = e.$app.find('.featuredDisplay');
    e.ads.canBeDisplayed(), t.find('.featuredDisplayScroller').slick({
      centerPadding: 0,
      infinite: !0,
      speed: 300,
      slidesToShow: 1,
      centerMode: !0,
      appendArrows: t
    }), e.Grid = new e.gridLayout({ feed: !0, variable: !0, isRelated: !1, widthScale: !1, type: 'save' }), e.save.init(), t.on('click', '.signupTrigger', function(t) {
      var i = $(this);
      return e.component.load({ component: 'signup', modal: 'signupModal', trigger: i }), !1;
    });
  }, i.profile = function() {
    var t = e.$app.find('.profileHeader');
    e.user.init(), t.on('click', '.dropdownTrigger', function(i) {
      var n = $(this), r = n.attr('data-type') + 'Dropdown';
      return t.find('.navItem .btn').removeClass('active'), n.addClass('active'), e.page.setDropdown(t.find('.dropdown.' + r), n), !1;
    }), t.on('click', '.shareTrigger', function() {
      return e.component.load({
        component: 'share',
        modal: 'shareModal',
        trigger: $(this)
      }), !1;
    }), t.on('click', '.reportTrigger', function() {
      var t = $(this), i = t.parents('.profileMoreContainer');
      return e.component.load({
        component: 'report', modal: 'reportModal', id: i.attr('data-id'), trigger: t, callback: function() {
          var i = $(this);
          if (!i.hasClass('disabled') && e.component.activeComponent.find('input[name=reason]').is(':checked')) {
            var n = {
              user: 1,
              report: 1,
              url: t.attr('data-url'),
              request_token: e.config.requestToken
            };
            i.addClass('disabled'), e.curate.report(n, 'user', 'user');
          }
          return !1;
        }
      }), !1;
    });
  }, i.profileCollections = function() {
    new e.gridLayout({
      feed: !0,
      variable: !1,
      isRelated: !1,
      widthScale: !0,
      type: 'collection',
      isFixedItem: { width: 300, scale: .1, gutter: 32 }
    }), e.collection.init();
  }, i.profileSaves = function() {e.$app.on('click', '.saveFromWebsiteTrigger', function() {e.component.show('saveFromWebsiteModal');});}, i.profileFollow = function() {
    new e.gridLayout({
      feed: !0,
      variable: !1,
      isRelated: !1,
      widthScale: !0,
      type: 'user',
      isFixedItem: { width: 300, scale: .1, gutter: 32 }
    });
  }, i.collection = function() {
    var t = e.$app.find('.CollectionHeader');
    e.collectionHeader.setup(), e.collection.init(), t.on('click', '.dropdownTrigger', function(i) {
      var n = $(this), r = n.attr('data-type') + 'Dropdown';
      return e.$app.find('.navItem .btn').removeClass('active'), n.addClass('active'), e.page.setDropdown(t.find('.dropdown.' + r), n), !1;
    }), t.on('click', '.shareTrigger', function() {
      return e.component.load({
        component: 'share',
        modal: 'shareModal',
        trigger: $(this)
      }), !1;
    }), t.on('click', '.reportTrigger', function() {
      var t = $(this), i = t.parents('.collectionActions');
      return e.component.load({
        component: 'report', modal: 'reportModal', id: i.attr('data-id'), trigger: t, callback: function() {
          var i = $(this);
          if (!i.hasClass('disabled') && e.component.activeComponent.find('input[name=reason]').is(':checked')) {
            var n = {
              collection: 1,
              report: 1,
              url: t.attr('data-url'),
              request_token: e.config.requestToken
            };
            i.addClass('disabled'), e.curate.report(n, 'collection', 'collection');
          }
          return !1;
        }
      }), !1;
    });
  }, i.save = function() {e.ads.canBeDisplayed(), e.save.init(), e.save.initCloseup();}, i.searchWebsite = function() {e.webDiscover.init();}, i.settings = function() {
    var t = e.$app, i = e.$window, n = t.find('.settingsForm'), r = function(e) {
      var t = /[^a-z0-9A-Z]+/gi;
      return (e = e.replace(t, '')).toLowerCase();
    };
    t.find('.saveSettingsButtons');
    e.json.page.user.is_subscriber || (e.stripeHandler.init('.paymentForm'), e.$app.find('.paymentForm').on('click', '.upgradeAccount', function() {return e.stripeHandler.subscribe($(this)), !1;})), updateSettingsController = function() {
      var t = i.scrollTop();
      if (t > 0) {
        if (!s) {
          for (var n = null, r = 0, o = $('.settingPageTitle'), l = o.length, c = .4 * e.browser.height, d = $('.settingControllerNav'), u = !1, p = 0; p < l; p++) {
            var h = o[p], f = $(h).position().top;
            t >= f - c && (!n || f > r) && (n = h, r = f);
          }
          u = $(n).attr('data-id'), d.find('li').removeClass('active'), d.find('a[href="#' + u + '"]').parent('li').addClass('active');
        }
        a();
      }
    };
    var o = 0, s = !1, a = function() {
      if (0 === o) {
        var t = $('.settingsPageContent'), i = $('.settingsForm .last').position().top - (e.browser.pageHeight - e.browser.height);
        if (i > 0) {
          var n = t.height();
          t.height(n + i), o = i;
        }
      }
    };
    0 === e.json.page.user.email_confirmed && e.component.load({
      component: 'account-verification',
      modal: 'accountVerificationModal'
    }), updateSettingsController(), $('.toggleSwitch').each(function() {new e.toggleSwitch($(this)[0]);}), t.on('keyup', '.username', function(e) {
      var i = r($(this).val());
      t.find('.usernameAutoPlace').html(i);
    }), t.on('click', '.updatePrivileges', function() {
      var t = $(this);
      return t.hasClass('disabled') || (t.addClass('disabled'), e.user.upgradePrivileges(t)), !1;
    }), t.on('click', '.billingCycleWrapper .checkContainer', function() {
      var e, i = $(this), n = t.find('.billingCycleText');
      i.hasClass('billedYearly') ? e = 'yearly' : i.hasClass('billedMonthly') && (e = 'monthly'), n.find('p').removeClass('active'), n.find('.' + e).addClass('active');
    }), n.on('click', '.saveSettingsTrigger', function() {
      var t = $(this);
      if (e.user.validateForm.settings.call(void 0, n, t), !t.hasClass('disabled')) {t.addClass('disabled'), e.user.settings(n, t, 'user_settings'), e.analytics.trackGAEvent('user_settings', 'clicked');}
      return !1;
    }), n.on('click', '.confirmEmailTrigger', function() {
      var t = $(this);
      if (!t.hasClass('disabled')) if (t.hasClass('complete')) e.redirect('/'); else {t.addClass('disabled'), e.user.resendConfirmEmail(t, 'user_confirm'), e.analytics.trackGAEvent('user_confirm', 'clicked');}
      return !1;
    }), n.on('click', '.promocodeTrigger', function() {
      var e = $(this);
      e.removeClass('active'), e.parent().find('.promocodeInput').addClass('active');
    }), n.on('click', '.profilePicture', function() {$('.profilePictureInput').trigger('click');}), n.on('click', '.removeAccount', function() {
      var t = $(this);
      return e.component.load({ component: 'remove-account', modal: 'removeAccountModal', trigger: t }), !1;
    }), n.on('click', '.changePlan', function() {
      var t = $(this);
      return e.component.load({ component: 'change-plan', modal: 'changePlanModal', billing: t.attr('data-type').toLowerCase(), trigger: t }), !1;
    }), n.on('click', '.cancelSubscription', function() {
      var t = $(this);
      return e.component.load({ component: 'cancel-subscription', modal: 'cancelSubscriptionModal', trigger: t }), !1;
    }), n.on('click', '.updateCard', function() {
      var t = $(this);
      return e.component.load({ component: 'update-card', modal: 'updateCardModal', trigger: t }), !1;
    }), n.on('click', '.changePassword', function() {
      var t = $(this);
      return e.component.load({ component: 'change-password', modal: 'changePasswordModal', trigger: t }), !1;
    }), $('.settingControllerNav').on('click', 'a', function(e) {
      e.preventDefault();
      var t = $(this), i = t.attr('href').replace('#', ''), n = $('.settingPageTitle[data-id="' + i + '"').position().top;
      return s = !0, $('.settingControllerNav li').removeClass('active'), t.parents('li').addClass('active'), $('body, html').animate({ scrollTop: n }, 500, function() {s = !1;}), !1;
    }), i.on('scroll.settingsControl', _.throttle(updateSettingsController, 50)), new e.uploader(e.$app.find('.uploadProfilePicture'), 'media_file', 1);
  }, i.login = function() {
    var t = e.$app, i = e.$window, n = t.find('.modalForm'), r = n.find('.trigger'), o = t.find('.modal');
    e.component.setActiveComponent(o), e.component.setPosition(), e.loadSocialLogin(), o.addClass('active'), t.find('.modalContent').addClass('active'), i.on('resize', _.debounce(e.component.setPosition, 200)), n.on('keyup.page', 'input', function(t) {
      var i = $(this);
      if (e.user.validateForm.login.call(void 0, n, r, i), 13 === t.keyCode) return r.trigger('click'), !1;
    }), r.on('click', function() {
      var t = $(this);
      if (n.find('.password').attr('type', 'password'), e.user.validateForm.login.call(void 0, n, t), !t.hasClass('disabled')) {t.addClass('disabled'), e.user.login(n, t, 'user_login'), e.analytics.trackGAEvent('user_login', 'clicked');}
      return i.trigger('onModalDimensionChanged'), !1;
    });
  }, i.signup = function() {
    var t = e.$app, i = e.$window, n = t.find('.step1'), r = n.find('.trigger'), o = t.find('.step2'), s = o.find('.trigger'), a = t.find('.modal');
    e.component.setActiveComponent(a), e.loadSocialSignup(), a.addClass('active'), a.find('.modalContent').addClass('active'), i.trigger('onModalDimensionChanged'), n.on('keyup.page', 'input', function(t) {
      var i = $(this);
      if (e.user.validateForm.signup.call(void 0, n, r, i), 13 === t.keyCode) return r.trigger('click'), !1;
    }), r.on('click', function() {
      var t = $(this);
      if (n.find('.password').attr('type', 'password'), e.user.validateForm.signup.call(void 0, n, t), !t.hasClass('disabled')) {t.addClass('disabled'), e.user.signupStep1(e.$app, n, t, 'user_signup'), e.analytics.trackGAEvent('user_signup', 'clicked');}
      return i.trigger('onModalDimensionChanged'), !1;
    }), o.on('keyup.page', 'input', function(e) {if (13 === e.keyCode) return s.trigger('click'), !1;}), s.on('click', function() {
      var t = $(this);
      return t.addClass('disabled'), e.user.signupStep2(o, t, 'user_signup'), i.trigger('onModalDimensionChanged'), e.analytics.trackGAEvent('user_signup', 'clicked'), !1;
    }), t.on('click', '.back', function() {return t.find('.signupSteps').removeClass('active'), t.find('.signupSteps.step1').addClass('active'), i.trigger('onModalDimensionChanged'), e.analytics.trackGAEvent('user_signup', 'back_clicked'), !1;}), i.on('resize', _.debounce(function() {i.trigger('onModalDimensionChanged');}, 200));
  }, i.signupInterests = function() {
    var t = e.$app, i = e.$window, n = e.$app.find('.modalForm'), r = n.find('.buildFeedTrigger'), o = 0, s = function() {
      var i = .5 * e.browser.getViewportHeight(), n = .5 * e.$app.find('.modalContent').outerHeight(!0), r = Math.max(0, i - n);
      t.find('.verticalCenter').css({ top: r });
    }, a = r.html(), l = function() {
      var e = 5 - o;
      e > 0 ? (r.addClass('disabled'), r.html(a), r.find('span').text(e)) : (r.removeClass('disabled'), r.html('Build my feed'));
    }, c = e.$app.find('.modalContent');
    s(), e.interest.init(), c.addClass('active'), i.on('resize', _.debounce(s, 200)), new e.gridLayout({
      hasContainer: !0,
      container: c.find('.gridItems'),
      feed: !0,
      variable: !1,
      isRelated: !1,
      widthScale: !0,
      type: 'interest',
      isFixedItem: { width: 170, scale: .1, gutter: 20 }
    }), e.$window.on('onOnboardingInterestLoaded', function(e, t) {o = t.num_selected, l();}), o = n.find('.selectedInterest:selected').length || 0, n.on('click.page', '.interest', function() {
      var t = $(this);
      return t.addClass('bounce'), t.hasClass('active') ? (t.removeClass('active'), o -= 1, e.interest.unfollow(t)) : (t.addClass('active'), o += 1, e.interest.follow(t)), l(), !1;
    }), n.on('click.page', '.skip', function() {return e.analytics.trackGAEvent('user_signup', 'step_3_skipped'), e.redirect('/'), !1;}), r.on('click', function() {return $(this).hasClass('disabled') || e.redirect('/'), !1;});
  }, i.passwordForgot = function() {
    var t = e.$app, i = e.$window, n = t.find('.modalForm'), r = n.find('.trigger'), o = t.find('.modal');
    e.component.setActiveComponent(o), o.addClass('active'), o.find('.modalContent').addClass('active'), i.trigger('onModalDimensionChanged'), n.on('keyup.page', 'input', function(t) {
      var i = $(this);
      if (e.user.validateForm.passwordForgot.call(void 0, n, r, i), 13 === t.keyCode) return r.trigger('click'), !1;
    }), r.on('click', function() {
      var t = $(this);
      if (e.user.validateForm.passwordForgot.call(void 0, n, t), !t.hasClass('disabled')) {t.addClass('disabled'), e.user.passwordForgot(n, t, 'password_forgot'), e.analytics.trackGAEvent('password_forgot', 'clicked');}
      return i.trigger('onModalDimensionChanged'), !1;
    }), i.on('resize', _.debounce(function() {i.trigger('onModalDimensionChanged');}, 200));
  }, i.passwordReset = function() {
    var t = e.$app.find('.passwordForm');
    t.on('click.page', '.passwordTrigger', function() {
      var i = $(this);
      if (e.user.validateForm.passwordReset.call(void 0, t, i), !i.hasClass('disabled')) {i.addClass('disabled'), e.user.passwordReset(t, i, 'password_reset'), e.analytics.trackGAEvent('password_reset', 'clicked');}
      return !1;
    });
  }, i.modal = function() {
    var t = e.component;
    t.activeComponent = e.$app.find('.modal'), t.setActiveComponentName('universal'), t.activeComponent.addClass('active'), e.component.setPosition(e.$app.find('.modal')), e.$window.on('resize.modal', _.debounce(e.component.resize, 200));
  }, i.searchSaves = function() {}, i.searchCollections = function() {
    new e.gridLayout({
      feed: !0,
      variable: !1,
      isRelated: !1,
      widthScale: !0,
      type: 'collection',
      isFixedItem: { width: 300, scale: .1, gutter: 32 }
    }), e.collection.init();
  }, i.searchPeople = function() {new e.gridLayout({ feed: !0, variable: !1, isRelated: !1, widthScale: !0, type: 'user', isFixedItem: { width: 300, scale: .1, gutter: 32 } });}, $(function() {t();});
}(App);
