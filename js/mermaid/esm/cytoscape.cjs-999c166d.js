import { M as qt } from "./config-0b7a4e7d.js";
function Cu(r, e) {
  for (var t = 0; t < e.length; t++) {
    const a = e[t];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const n in a)
        if (n !== "default" && !(n in r)) {
          const i = Object.getOwnPropertyDescriptor(a, n);
          i && Object.defineProperty(r, n, i.get ? i : {
            enumerable: !0,
            get: () => a[n]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
function Su(r) {
  var e = typeof r;
  return r != null && (e == "object" || e == "function");
}
var na = Su, Tu = typeof qt == "object" && qt && qt.Object === Object && qt, Du = Tu, ku = Du, Pu = typeof self == "object" && self && self.Object === Object && self, Bu = ku || Pu || Function("return this")(), Ya = Bu, Lu = Ya, Mu = function() {
  return Lu.Date.now();
}, Au = Mu, Ru = /\s/;
function Ou(r) {
  for (var e = r.length; e-- && Ru.test(r.charAt(e)); )
    ;
  return e;
}
var Iu = Ou, zu = Iu, Nu = /^\s+/;
function Fu(r) {
  return r && r.slice(0, zu(r) + 1).replace(Nu, "");
}
var $u = Fu, Vu = Ya, qu = Vu.Symbol, qn = qu, gi = qn, Ro = Object.prototype, Hu = Ro.hasOwnProperty, Gu = Ro.toString, zt = gi ? gi.toStringTag : void 0;
function Ku(r) {
  var e = Hu.call(r, zt), t = r[zt];
  try {
    r[zt] = void 0;
    var a = !0;
  } catch {
  }
  var n = Gu.call(r);
  return a && (e ? r[zt] = t : delete r[zt]), n;
}
var Wu = Ku, Yu = Object.prototype, Xu = Yu.toString;
function Uu(r) {
  return Xu.call(r);
}
var Zu = Uu, pi = qn, Qu = Wu, _u = Zu, Ju = "[object Null]", ju = "[object Undefined]", mi = pi ? pi.toStringTag : void 0;
function el(r) {
  return r == null ? r === void 0 ? ju : Ju : mi && mi in Object(r) ? Qu(r) : _u(r);
}
var Oo = el;
function rl(r) {
  return r != null && typeof r == "object";
}
var tl = rl, al = Oo, nl = tl, il = "[object Symbol]";
function ol(r) {
  return typeof r == "symbol" || nl(r) && al(r) == il;
}
var ia = ol, sl = $u, yi = na, ul = ia, bi = 0 / 0, ll = /^[-+]0x[0-9a-f]+$/i, vl = /^0b[01]+$/i, fl = /^0o[0-7]+$/i, cl = parseInt;
function dl(r) {
  if (typeof r == "number")
    return r;
  if (ul(r))
    return bi;
  if (yi(r)) {
    var e = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = yi(e) ? e + "" : e;
  }
  if (typeof r != "string")
    return r === 0 ? r : +r;
  r = sl(r);
  var t = vl.test(r);
  return t || fl.test(r) ? cl(r.slice(2), t ? 2 : 8) : ll.test(r) ? bi : +r;
}
var hl = dl, gl = na, hn = Au, wi = hl, pl = "Expected a function", ml = Math.max, yl = Math.min;
function bl(r, e, t) {
  var a, n, i, o, s, l, u = 0, v = !1, f = !1, c = !0;
  if (typeof r != "function")
    throw new TypeError(pl);
  e = wi(e) || 0, gl(t) && (v = !!t.leading, f = "maxWait" in t, i = f ? ml(wi(t.maxWait) || 0, e) : i, c = "trailing" in t ? !!t.trailing : c);
  function d(C) {
    var x = a, D = n;
    return a = n = void 0, u = C, o = r.apply(D, x), o;
  }
  function h(C) {
    return u = C, s = setTimeout(p, e), v ? d(C) : o;
  }
  function g(C) {
    var x = C - l, D = C - u, E = e - x;
    return f ? yl(E, i - D) : E;
  }
  function m(C) {
    var x = C - l, D = C - u;
    return l === void 0 || x >= e || x < 0 || f && D >= i;
  }
  function p() {
    var C = hn();
    if (m(C))
      return y(C);
    s = setTimeout(p, g(C));
  }
  function y(C) {
    return s = void 0, c && a ? d(C) : (a = n = void 0, o);
  }
  function b() {
    s !== void 0 && clearTimeout(s), u = 0, a = l = n = s = void 0;
  }
  function w() {
    return s === void 0 ? o : y(hn());
  }
  function T() {
    var C = hn(), x = m(C);
    if (a = arguments, n = this, l = C, x) {
      if (s === void 0)
        return h(l);
      if (f)
        return clearTimeout(s), s = setTimeout(p, e), d(l);
    }
    return s === void 0 && (s = setTimeout(p, e)), o;
  }
  return T.cancel = b, T.flush = w, T;
}
var wl = bl, kn = {}, xl = {
  get exports() {
    return kn;
  },
  set exports(r) {
    kn = r;
  }
}, Pn = {}, El = {
  get exports() {
    return Pn;
  },
  set exports(r) {
    Pn = r;
  }
};
(function(r, e) {
  (function() {
    var t, a, n, i, o, s, l, u, v, f, c, d, h, g, m;
    n = Math.floor, f = Math.min, a = function(p, y) {
      return p < y ? -1 : p > y ? 1 : 0;
    }, v = function(p, y, b, w, T) {
      var C;
      if (b == null && (b = 0), T == null && (T = a), b < 0)
        throw new Error("lo must be non-negative");
      for (w == null && (w = p.length); b < w; )
        C = n((b + w) / 2), T(y, p[C]) < 0 ? w = C : b = C + 1;
      return [].splice.apply(p, [b, b - b].concat(y)), y;
    }, s = function(p, y, b) {
      return b == null && (b = a), p.push(y), g(p, 0, p.length - 1, b);
    }, o = function(p, y) {
      var b, w;
      return y == null && (y = a), b = p.pop(), p.length ? (w = p[0], p[0] = b, m(p, 0, y)) : w = b, w;
    }, u = function(p, y, b) {
      var w;
      return b == null && (b = a), w = p[0], p[0] = y, m(p, 0, b), w;
    }, l = function(p, y, b) {
      var w;
      return b == null && (b = a), p.length && b(p[0], y) < 0 && (w = [p[0], y], y = w[0], p[0] = w[1], m(p, 0, b)), y;
    }, i = function(p, y) {
      var b, w, T, C, x, D;
      for (y == null && (y = a), C = function() {
        D = [];
        for (var E = 0, P = n(p.length / 2); 0 <= P ? E < P : E > P; 0 <= P ? E++ : E--)
          D.push(E);
        return D;
      }.apply(this).reverse(), x = [], w = 0, T = C.length; w < T; w++)
        b = C[w], x.push(m(p, b, y));
      return x;
    }, h = function(p, y, b) {
      var w;
      if (b == null && (b = a), w = p.indexOf(y), w !== -1)
        return g(p, 0, w, b), m(p, w, b);
    }, c = function(p, y, b) {
      var w, T, C, x, D;
      if (b == null && (b = a), T = p.slice(0, y), !T.length)
        return T;
      for (i(T, b), D = p.slice(y), C = 0, x = D.length; C < x; C++)
        w = D[C], l(T, w, b);
      return T.sort(b).reverse();
    }, d = function(p, y, b) {
      var w, T, C, x, D, E, P, B, k;
      if (b == null && (b = a), y * 10 <= p.length) {
        if (C = p.slice(0, y).sort(b), !C.length)
          return C;
        for (T = C[C.length - 1], P = p.slice(y), x = 0, E = P.length; x < E; x++)
          w = P[x], b(w, T) < 0 && (v(C, w, 0, null, b), C.pop(), T = C[C.length - 1]);
        return C;
      }
      for (i(p, b), k = [], D = 0, B = f(y, p.length); 0 <= B ? D < B : D > B; 0 <= B ? ++D : --D)
        k.push(o(p, b));
      return k;
    }, g = function(p, y, b, w) {
      var T, C, x;
      for (w == null && (w = a), T = p[b]; b > y; ) {
        if (x = b - 1 >> 1, C = p[x], w(T, C) < 0) {
          p[b] = C, b = x;
          continue;
        }
        break;
      }
      return p[b] = T;
    }, m = function(p, y, b) {
      var w, T, C, x, D;
      for (b == null && (b = a), T = p.length, D = y, C = p[y], w = 2 * y + 1; w < T; )
        x = w + 1, x < T && !(b(p[w], p[x]) < 0) && (w = x), p[y] = p[w], y = w, w = 2 * y + 1;
      return p[y] = C, g(p, D, y, b);
    }, t = function() {
      p.push = s, p.pop = o, p.replace = u, p.pushpop = l, p.heapify = i, p.updateItem = h, p.nlargest = c, p.nsmallest = d;
      function p(y) {
        this.cmp = y ?? a, this.nodes = [];
      }
      return p.prototype.push = function(y) {
        return s(this.nodes, y, this.cmp);
      }, p.prototype.pop = function() {
        return o(this.nodes, this.cmp);
      }, p.prototype.peek = function() {
        return this.nodes[0];
      }, p.prototype.contains = function(y) {
        return this.nodes.indexOf(y) !== -1;
      }, p.prototype.replace = function(y) {
        return u(this.nodes, y, this.cmp);
      }, p.prototype.pushpop = function(y) {
        return l(this.nodes, y, this.cmp);
      }, p.prototype.heapify = function() {
        return i(this.nodes, this.cmp);
      }, p.prototype.updateItem = function(y) {
        return h(this.nodes, y, this.cmp);
      }, p.prototype.clear = function() {
        return this.nodes = [];
      }, p.prototype.empty = function() {
        return this.nodes.length === 0;
      }, p.prototype.size = function() {
        return this.nodes.length;
      }, p.prototype.clone = function() {
        var y;
        return y = new p(), y.nodes = this.nodes.slice(0), y;
      }, p.prototype.toArray = function() {
        return this.nodes.slice(0);
      }, p.prototype.insert = p.prototype.push, p.prototype.top = p.prototype.peek, p.prototype.front = p.prototype.peek, p.prototype.has = p.prototype.contains, p.prototype.copy = p.prototype.clone, p;
    }(), function(p, y) {
      return r.exports = y();
    }(this, function() {
      return t;
    });
  }).call(qt);
})(El);
(function(r) {
  r.exports = Pn;
})(xl);
var Cl = Array.isArray, Xa = Cl, Sl = Xa, Tl = ia, Dl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, kl = /^\w*$/;
function Pl(r, e) {
  if (Sl(r))
    return !1;
  var t = typeof r;
  return t == "number" || t == "symbol" || t == "boolean" || r == null || Tl(r) ? !0 : kl.test(r) || !Dl.test(r) || e != null && r in Object(e);
}
var Bl = Pl, Ll = Oo, Ml = na, Al = "[object AsyncFunction]", Rl = "[object Function]", Ol = "[object GeneratorFunction]", Il = "[object Proxy]";
function zl(r) {
  if (!Ml(r))
    return !1;
  var e = Ll(r);
  return e == Rl || e == Ol || e == Al || e == Il;
}
var Nl = zl, Fl = Ya, $l = Fl["__core-js_shared__"], Vl = $l, gn = Vl, xi = function() {
  var r = /[^.]+$/.exec(gn && gn.keys && gn.keys.IE_PROTO || "");
  return r ? "Symbol(src)_1." + r : "";
}();
function ql(r) {
  return !!xi && xi in r;
}
var Hl = ql, Gl = Function.prototype, Kl = Gl.toString;
function Wl(r) {
  if (r != null) {
    try {
      return Kl.call(r);
    } catch {
    }
    try {
      return r + "";
    } catch {
    }
  }
  return "";
}
var Yl = Wl, Xl = Nl, Ul = Hl, Zl = na, Ql = Yl, _l = /[\\^$.*+?()[\]{}|]/g, Jl = /^\[object .+?Constructor\]$/, jl = Function.prototype, ev = Object.prototype, rv = jl.toString, tv = ev.hasOwnProperty, av = RegExp(
  "^" + rv.call(tv).replace(_l, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function nv(r) {
  if (!Zl(r) || Ul(r))
    return !1;
  var e = Xl(r) ? av : Jl;
  return e.test(Ql(r));
}
var iv = nv;
function ov(r, e) {
  return r == null ? void 0 : r[e];
}
var sv = ov, uv = iv, lv = sv;
function vv(r, e) {
  var t = lv(r, e);
  return uv(t) ? t : void 0;
}
var Hn = vv, fv = Hn, cv = fv(Object, "create"), Ua = cv, Ei = Ua;
function dv() {
  this.__data__ = Ei ? Ei(null) : {}, this.size = 0;
}
var hv = dv;
function gv(r) {
  var e = this.has(r) && delete this.__data__[r];
  return this.size -= e ? 1 : 0, e;
}
var pv = gv, mv = Ua, yv = "__lodash_hash_undefined__", bv = Object.prototype, wv = bv.hasOwnProperty;
function xv(r) {
  var e = this.__data__;
  if (mv) {
    var t = e[r];
    return t === yv ? void 0 : t;
  }
  return wv.call(e, r) ? e[r] : void 0;
}
var Ev = xv, Cv = Ua, Sv = Object.prototype, Tv = Sv.hasOwnProperty;
function Dv(r) {
  var e = this.__data__;
  return Cv ? e[r] !== void 0 : Tv.call(e, r);
}
var kv = Dv, Pv = Ua, Bv = "__lodash_hash_undefined__";
function Lv(r, e) {
  var t = this.__data__;
  return this.size += this.has(r) ? 0 : 1, t[r] = Pv && e === void 0 ? Bv : e, this;
}
var Mv = Lv, Av = hv, Rv = pv, Ov = Ev, Iv = kv, zv = Mv;
function St(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var a = r[e];
    this.set(a[0], a[1]);
  }
}
St.prototype.clear = Av;
St.prototype.delete = Rv;
St.prototype.get = Ov;
St.prototype.has = Iv;
St.prototype.set = zv;
var Nv = St;
function Fv() {
  this.__data__ = [], this.size = 0;
}
var $v = Fv;
function Vv(r, e) {
  return r === e || r !== r && e !== e;
}
var Io = Vv, qv = Io;
function Hv(r, e) {
  for (var t = r.length; t--; )
    if (qv(r[t][0], e))
      return t;
  return -1;
}
var Za = Hv, Gv = Za, Kv = Array.prototype, Wv = Kv.splice;
function Yv(r) {
  var e = this.__data__, t = Gv(e, r);
  if (t < 0)
    return !1;
  var a = e.length - 1;
  return t == a ? e.pop() : Wv.call(e, t, 1), --this.size, !0;
}
var Xv = Yv, Uv = Za;
function Zv(r) {
  var e = this.__data__, t = Uv(e, r);
  return t < 0 ? void 0 : e[t][1];
}
var Qv = Zv, _v = Za;
function Jv(r) {
  return _v(this.__data__, r) > -1;
}
var jv = Jv, ef = Za;
function rf(r, e) {
  var t = this.__data__, a = ef(t, r);
  return a < 0 ? (++this.size, t.push([r, e])) : t[a][1] = e, this;
}
var tf = rf, af = $v, nf = Xv, of = Qv, sf = jv, uf = tf;
function Tt(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var a = r[e];
    this.set(a[0], a[1]);
  }
}
Tt.prototype.clear = af;
Tt.prototype.delete = nf;
Tt.prototype.get = of;
Tt.prototype.has = sf;
Tt.prototype.set = uf;
var lf = Tt, vf = Hn, ff = Ya, cf = vf(ff, "Map"), df = cf, Ci = Nv, hf = lf, gf = df;
function pf() {
  this.size = 0, this.__data__ = {
    hash: new Ci(),
    map: new (gf || hf)(),
    string: new Ci()
  };
}
var mf = pf;
function yf(r) {
  var e = typeof r;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? r !== "__proto__" : r === null;
}
var bf = yf, wf = bf;
function xf(r, e) {
  var t = r.__data__;
  return wf(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
}
var Qa = xf, Ef = Qa;
function Cf(r) {
  var e = Ef(this, r).delete(r);
  return this.size -= e ? 1 : 0, e;
}
var Sf = Cf, Tf = Qa;
function Df(r) {
  return Tf(this, r).get(r);
}
var kf = Df, Pf = Qa;
function Bf(r) {
  return Pf(this, r).has(r);
}
var Lf = Bf, Mf = Qa;
function Af(r, e) {
  var t = Mf(this, r), a = t.size;
  return t.set(r, e), this.size += t.size == a ? 0 : 1, this;
}
var Rf = Af, Of = mf, If = Sf, zf = kf, Nf = Lf, Ff = Rf;
function Dt(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var a = r[e];
    this.set(a[0], a[1]);
  }
}
Dt.prototype.clear = Of;
Dt.prototype.delete = If;
Dt.prototype.get = zf;
Dt.prototype.has = Nf;
Dt.prototype.set = Ff;
var $f = Dt, zo = $f, Vf = "Expected a function";
function Gn(r, e) {
  if (typeof r != "function" || e != null && typeof e != "function")
    throw new TypeError(Vf);
  var t = function() {
    var a = arguments, n = e ? e.apply(this, a) : a[0], i = t.cache;
    if (i.has(n))
      return i.get(n);
    var o = r.apply(this, a);
    return t.cache = i.set(n, o) || i, o;
  };
  return t.cache = new (Gn.Cache || zo)(), t;
}
Gn.Cache = zo;
var qf = Gn, Hf = qf, Gf = 500;
function Kf(r) {
  var e = Hf(r, function(a) {
    return t.size === Gf && t.clear(), a;
  }), t = e.cache;
  return e;
}
var Wf = Kf, Yf = Wf, Xf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Uf = /\\(\\)?/g, Zf = Yf(function(r) {
  var e = [];
  return r.charCodeAt(0) === 46 && e.push(""), r.replace(Xf, function(t, a, n, i) {
    e.push(n ? i.replace(Uf, "$1") : a || t);
  }), e;
}), No = Zf;
function Qf(r, e) {
  for (var t = -1, a = r == null ? 0 : r.length, n = Array(a); ++t < a; )
    n[t] = e(r[t], t, r);
  return n;
}
var Fo = Qf, Si = qn, _f = Fo, Jf = Xa, jf = ia, ec = 1 / 0, Ti = Si ? Si.prototype : void 0, Di = Ti ? Ti.toString : void 0;
function $o(r) {
  if (typeof r == "string")
    return r;
  if (Jf(r))
    return _f(r, $o) + "";
  if (jf(r))
    return Di ? Di.call(r) : "";
  var e = r + "";
  return e == "0" && 1 / r == -ec ? "-0" : e;
}
var rc = $o, tc = rc;
function ac(r) {
  return r == null ? "" : tc(r);
}
var Vo = ac, nc = Xa, ic = Bl, oc = No, sc = Vo;
function uc(r, e) {
  return nc(r) ? r : ic(r, e) ? [r] : oc(sc(r));
}
var qo = uc, lc = ia, vc = 1 / 0;
function fc(r) {
  if (typeof r == "string" || lc(r))
    return r;
  var e = r + "";
  return e == "0" && 1 / r == -vc ? "-0" : e;
}
var Kn = fc, cc = qo, dc = Kn;
function hc(r, e) {
  e = cc(e, r);
  for (var t = 0, a = e.length; r != null && t < a; )
    r = r[dc(e[t++])];
  return t && t == a ? r : void 0;
}
var gc = hc, pc = gc;
function mc(r, e, t) {
  var a = r == null ? void 0 : pc(r, e);
  return a === void 0 ? t : a;
}
var yc = mc, bc = Hn, wc = function() {
  try {
    var r = bc(Object, "defineProperty");
    return r({}, "", {}), r;
  } catch {
  }
}(), xc = wc, ki = xc;
function Ec(r, e, t) {
  e == "__proto__" && ki ? ki(r, e, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : r[e] = t;
}
var Cc = Ec, Sc = Cc, Tc = Io, Dc = Object.prototype, kc = Dc.hasOwnProperty;
function Pc(r, e, t) {
  var a = r[e];
  (!(kc.call(r, e) && Tc(a, t)) || t === void 0 && !(e in r)) && Sc(r, e, t);
}
var Bc = Pc, Lc = 9007199254740991, Mc = /^(?:0|[1-9]\d*)$/;
function Ac(r, e) {
  var t = typeof r;
  return e = e ?? Lc, !!e && (t == "number" || t != "symbol" && Mc.test(r)) && r > -1 && r % 1 == 0 && r < e;
}
var Rc = Ac, Oc = Bc, Ic = qo, zc = Rc, Pi = na, Nc = Kn;
function Fc(r, e, t, a) {
  if (!Pi(r))
    return r;
  e = Ic(e, r);
  for (var n = -1, i = e.length, o = i - 1, s = r; s != null && ++n < i; ) {
    var l = Nc(e[n]), u = t;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return r;
    if (n != o) {
      var v = s[l];
      u = a ? a(v, l, s) : void 0, u === void 0 && (u = Pi(v) ? v : zc(e[n + 1]) ? [] : {});
    }
    Oc(s, l, u), s = s[l];
  }
  return r;
}
var $c = Fc, Vc = $c;
function qc(r, e, t) {
  return r == null ? r : Vc(r, e, t);
}
var Hc = qc;
function Gc(r, e) {
  var t = -1, a = r.length;
  for (e || (e = Array(a)); ++t < a; )
    e[t] = r[t];
  return e;
}
var Kc = Gc, Wc = Fo, Yc = Kc, Xc = Xa, Uc = ia, Zc = No, Qc = Kn, _c = Vo;
function Jc(r) {
  return Xc(r) ? Wc(r, Qc) : Uc(r) ? [r] : Yc(Zc(_c(r)));
}
var jc = Jc, ed = wl, rd = kn, td = yc, ad = Hc, nd = jc;
function oa(r) {
  return r && typeof r == "object" && "default" in r ? r : { default: r };
}
var _a = /* @__PURE__ */ oa(ed), sa = /* @__PURE__ */ oa(rd), id = /* @__PURE__ */ oa(td), od = /* @__PURE__ */ oa(ad), sd = /* @__PURE__ */ oa(nd);
function qe(r) {
  return qe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, qe(r);
}
function Wn(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Bi(r, e) {
  for (var t = 0; t < e.length; t++) {
    var a = e[t];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(r, a.key, a);
  }
}
function Yn(r, e, t) {
  return e && Bi(r.prototype, e), t && Bi(r, t), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function Ho(r, e, t) {
  return e in r ? Object.defineProperty(r, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = t, r;
}
function Pr(r, e) {
  return ud(r) || ld(r, e) || vd(r, e) || fd();
}
function ud(r) {
  if (Array.isArray(r))
    return r;
}
function ld(r, e) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var a = [], n = !0, i = !1, o, s;
    try {
      for (t = t.call(r); !(n = (o = t.next()).done) && (a.push(o.value), !(e && a.length === e)); n = !0)
        ;
    } catch (l) {
      i = !0, s = l;
    } finally {
      try {
        !n && t.return != null && t.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return a;
  }
}
function vd(r, e) {
  if (r) {
    if (typeof r == "string")
      return Li(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set")
      return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Li(r, e);
  }
}
function Li(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, a = new Array(e); t < e; t++)
    a[t] = r[t];
  return a;
}
function fd() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ie = typeof window > "u" ? null : window, Mi = Ie ? Ie.navigator : null;
Ie && Ie.document;
var cd = qe(""), Go = qe({}), dd = qe(function() {
}), hd = typeof HTMLElement > "u" ? "undefined" : qe(HTMLElement), ua = function(e) {
  return e && e.instanceString && ze(e.instanceString) ? e.instanceString() : null;
}, le = function(e) {
  return e != null && qe(e) == cd;
}, ze = function(e) {
  return e != null && qe(e) === dd;
}, Me = function(e) {
  return !lr(e) && (Array.isArray ? Array.isArray(e) : e != null && e instanceof Array);
}, Ce = function(e) {
  return e != null && qe(e) === Go && !Me(e) && e.constructor === Object;
}, gd = function(e) {
  return e != null && qe(e) === Go;
}, ae = function(e) {
  return e != null && qe(e) === qe(1) && !isNaN(e);
}, pd = function(e) {
  return ae(e) && Math.floor(e) === e;
}, Na = function(e) {
  if (hd !== "undefined")
    return e != null && e instanceof HTMLElement;
}, lr = function(e) {
  return la(e) || Ko(e);
}, la = function(e) {
  return ua(e) === "collection" && e._private.single;
}, Ko = function(e) {
  return ua(e) === "collection" && !e._private.single;
}, Xn = function(e) {
  return ua(e) === "core";
}, Wo = function(e) {
  return ua(e) === "stylesheet";
}, md = function(e) {
  return ua(e) === "event";
}, qr = function(e) {
  return e == null ? !0 : !!(e === "" || e.match(/^\s+$/));
}, yd = function(e) {
  return typeof HTMLElement > "u" ? !1 : e instanceof HTMLElement;
}, bd = function(e) {
  return Ce(e) && ae(e.x1) && ae(e.x2) && ae(e.y1) && ae(e.y2);
}, wd = function(e) {
  return gd(e) && ze(e.then);
}, xd = function() {
  return Mi && Mi.userAgent.match(/msie|trident|edge/i);
}, Ut = function(e, t) {
  t || (t = function() {
    if (arguments.length === 1)
      return arguments[0];
    if (arguments.length === 0)
      return "undefined";
    for (var i = [], o = 0; o < arguments.length; o++)
      i.push(arguments[o]);
    return i.join("$");
  });
  var a = function n() {
    var i = this, o = arguments, s, l = t.apply(i, o), u = n.cache;
    return (s = u[l]) || (s = u[l] = e.apply(i, o)), s;
  };
  return a.cache = {}, a;
}, Un = Ut(function(r) {
  return r.replace(/([A-Z])/g, function(e) {
    return "-" + e.toLowerCase();
  });
}), Ja = Ut(function(r) {
  return r.replace(/(-\w)/g, function(e) {
    return e[1].toUpperCase();
  });
}), Yo = Ut(function(r, e) {
  return r + e[0].toUpperCase() + e.substring(1);
}, function(r, e) {
  return r + "$" + e;
}), Ai = function(e) {
  return qr(e) ? e : e.charAt(0).toUpperCase() + e.substring(1);
}, Ve = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))", Ed = "rgb[a]?\\((" + Ve + "[%]?)\\s*,\\s*(" + Ve + "[%]?)\\s*,\\s*(" + Ve + "[%]?)(?:\\s*,\\s*(" + Ve + "))?\\)", Cd = "rgb[a]?\\((?:" + Ve + "[%]?)\\s*,\\s*(?:" + Ve + "[%]?)\\s*,\\s*(?:" + Ve + "[%]?)(?:\\s*,\\s*(?:" + Ve + "))?\\)", Sd = "hsl[a]?\\((" + Ve + ")\\s*,\\s*(" + Ve + "[%])\\s*,\\s*(" + Ve + "[%])(?:\\s*,\\s*(" + Ve + "))?\\)", Td = "hsl[a]?\\((?:" + Ve + ")\\s*,\\s*(?:" + Ve + "[%])\\s*,\\s*(?:" + Ve + "[%])(?:\\s*,\\s*(?:" + Ve + "))?\\)", Dd = "\\#[0-9a-fA-F]{3}", kd = "\\#[0-9a-fA-F]{6}", Xo = function(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}, Pd = function(e, t) {
  return -1 * Xo(e, t);
}, ce = Object.assign != null ? Object.assign.bind(Object) : function(r) {
  for (var e = arguments, t = 1; t < e.length; t++) {
    var a = e[t];
    if (a != null)
      for (var n = Object.keys(a), i = 0; i < n.length; i++) {
        var o = n[i];
        r[o] = a[o];
      }
  }
  return r;
}, Bd = function(e) {
  if (!(!(e.length === 4 || e.length === 7) || e[0] !== "#")) {
    var t = e.length === 4, a, n, i, o = 16;
    return t ? (a = parseInt(e[1] + e[1], o), n = parseInt(e[2] + e[2], o), i = parseInt(e[3] + e[3], o)) : (a = parseInt(e[1] + e[2], o), n = parseInt(e[3] + e[4], o), i = parseInt(e[5] + e[6], o)), [a, n, i];
  }
}, Ld = function(e) {
  var t, a, n, i, o, s, l, u;
  function v(h, g, m) {
    return m < 0 && (m += 1), m > 1 && (m -= 1), m < 1 / 6 ? h + (g - h) * 6 * m : m < 1 / 2 ? g : m < 2 / 3 ? h + (g - h) * (2 / 3 - m) * 6 : h;
  }
  var f = new RegExp("^" + Sd + "$").exec(e);
  if (f) {
    if (a = parseInt(f[1]), a < 0 ? a = (360 - -1 * a % 360) % 360 : a > 360 && (a = a % 360), a /= 360, n = parseFloat(f[2]), n < 0 || n > 100 || (n = n / 100, i = parseFloat(f[3]), i < 0 || i > 100) || (i = i / 100, o = f[4], o !== void 0 && (o = parseFloat(o), o < 0 || o > 1)))
      return;
    if (n === 0)
      s = l = u = Math.round(i * 255);
    else {
      var c = i < 0.5 ? i * (1 + n) : i + n - i * n, d = 2 * i - c;
      s = Math.round(255 * v(d, c, a + 1 / 3)), l = Math.round(255 * v(d, c, a)), u = Math.round(255 * v(d, c, a - 1 / 3));
    }
    t = [s, l, u, o];
  }
  return t;
}, Md = function(e) {
  var t, a = new RegExp("^" + Ed + "$").exec(e);
  if (a) {
    t = [];
    for (var n = [], i = 1; i <= 3; i++) {
      var o = a[i];
      if (o[o.length - 1] === "%" && (n[i] = !0), o = parseFloat(o), n[i] && (o = o / 100 * 255), o < 0 || o > 255)
        return;
      t.push(Math.floor(o));
    }
    var s = n[1] || n[2] || n[3], l = n[1] && n[2] && n[3];
    if (s && !l)
      return;
    var u = a[4];
    if (u !== void 0) {
      if (u = parseFloat(u), u < 0 || u > 1)
        return;
      t.push(u);
    }
  }
  return t;
}, Ad = function(e) {
  return Od[e.toLowerCase()];
}, Rd = function(e) {
  return (Me(e) ? e : null) || Ad(e) || Bd(e) || Md(e) || Ld(e);
}, Od = {
  // special colour names
  transparent: [0, 0, 0, 0],
  // NB alpha === 0
  // regular colours
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  grey: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
}, Uo = function(e) {
  for (var t = e.map, a = e.keys, n = a.length, i = 0; i < n; i++) {
    var o = a[i];
    if (Ce(o))
      throw Error("Tried to set map with object key");
    i < a.length - 1 ? (t[o] == null && (t[o] = {}), t = t[o]) : t[o] = e.value;
  }
}, Zo = function(e) {
  for (var t = e.map, a = e.keys, n = a.length, i = 0; i < n; i++) {
    var o = a[i];
    if (Ce(o))
      throw Error("Tried to get map with object key");
    if (t = t[o], t == null)
      return t;
  }
  return t;
}, pn = Ie ? Ie.performance : null, Qo = pn && pn.now ? function() {
  return pn.now();
} : function() {
  return Date.now();
}, Id = function() {
  if (Ie) {
    if (Ie.requestAnimationFrame)
      return function(r) {
        Ie.requestAnimationFrame(r);
      };
    if (Ie.mozRequestAnimationFrame)
      return function(r) {
        Ie.mozRequestAnimationFrame(r);
      };
    if (Ie.webkitRequestAnimationFrame)
      return function(r) {
        Ie.webkitRequestAnimationFrame(r);
      };
    if (Ie.msRequestAnimationFrame)
      return function(r) {
        Ie.msRequestAnimationFrame(r);
      };
  }
  return function(r) {
    r && setTimeout(function() {
      r(Qo());
    }, 1e3 / 60);
  };
}(), Fa = function(e) {
  return Id(e);
}, Br = Qo, ht = 9261, _o = 65599, Ht = 5381, Jo = function(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ht, a = t, n; n = e.next(), !n.done; )
    a = a * _o + n.value | 0;
  return a;
}, Zt = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ht;
  return t * _o + e | 0;
}, Qt = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ht;
  return (t << 5) + t + e | 0;
}, zd = function(e, t) {
  return e * 2097152 + t;
}, Ir = function(e) {
  return e[0] * 2097152 + e[1];
}, ba = function(e, t) {
  return [Zt(e[0], t[0]), Qt(e[1], t[1])];
}, Nd = function(e, t) {
  var a = {
    value: 0,
    done: !1
  }, n = 0, i = e.length, o = {
    next: function() {
      return n < i ? a.value = e[n++] : a.done = !0, a;
    }
  };
  return Jo(o, t);
}, jr = function(e, t) {
  var a = {
    value: 0,
    done: !1
  }, n = 0, i = e.length, o = {
    next: function() {
      return n < i ? a.value = e.charCodeAt(n++) : a.done = !0, a;
    }
  };
  return Jo(o, t);
}, jo = function() {
  return Fd(arguments);
}, Fd = function(e) {
  for (var t, a = 0; a < e.length; a++) {
    var n = e[a];
    a === 0 ? t = jr(n) : t = jr(n, t);
  }
  return t;
}, Ri = !0, $d = console.warn != null, Vd = console.trace != null, Zn = Number.MAX_SAFE_INTEGER || 9007199254740991, es = function() {
  return !0;
}, $a = function() {
  return !1;
}, Oi = function() {
  return 0;
}, Qn = function() {
}, Fe = function(e) {
  throw new Error(e);
}, rs = function(e) {
  if (e !== void 0)
    Ri = !!e;
  else
    return Ri;
}, Pe = function(e) {
  rs() && ($d ? console.warn(e) : (console.log(e), Vd && console.trace()));
}, qd = function(e) {
  return ce({}, e);
}, Er = function(e) {
  return e == null ? e : Me(e) ? e.slice() : Ce(e) ? qd(e) : e;
}, Hd = function(e) {
  return e.slice();
}, ts = function(e, t) {
  for (
    // loop :)
    t = e = "";
    // b - result , a - numeric letiable
    e++ < 36;
    //
    t += e * 51 & 52 ? (
      //  return a random number or 4
      (e ^ 15 ? (
        // generate a random number from 0 to 15
        8 ^ Math.random() * (e ^ 20 ? 16 : 4)
      ) : 4).toString(16)
    ) : "-"
  )
    ;
  return t;
}, Gd = {}, as = function() {
  return Gd;
}, Ze = function(e) {
  var t = Object.keys(e);
  return function(a) {
    for (var n = {}, i = 0; i < t.length; i++) {
      var o = t[i], s = a == null ? void 0 : a[o];
      n[o] = s === void 0 ? e[o] : s;
    }
    return n;
  };
}, Hr = function(e, t, a) {
  for (var n = e.length - 1; n >= 0 && !(e[n] === t && (e.splice(n, 1), a)); n--)
    ;
}, _n = function(e) {
  e.splice(0, e.length);
}, Kd = function(e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    e.push(n);
  }
}, br = function(e, t, a) {
  return a && (t = Yo(a, t)), e[t];
}, Nr = function(e, t, a, n) {
  a && (t = Yo(a, t)), e[t] = n;
}, Wd = /* @__PURE__ */ function() {
  function r() {
    Wn(this, r), this._obj = {};
  }
  return Yn(r, [{
    key: "set",
    value: function(t, a) {
      return this._obj[t] = a, this;
    }
  }, {
    key: "delete",
    value: function(t) {
      return this._obj[t] = void 0, this;
    }
  }, {
    key: "clear",
    value: function() {
      this._obj = {};
    }
  }, {
    key: "has",
    value: function(t) {
      return this._obj[t] !== void 0;
    }
  }, {
    key: "get",
    value: function(t) {
      return this._obj[t];
    }
  }]), r;
}(), Cr = typeof Map < "u" ? Map : Wd, Yd = "undefined", Xd = /* @__PURE__ */ function() {
  function r(e) {
    if (Wn(this, r), this._obj = /* @__PURE__ */ Object.create(null), this.size = 0, e != null) {
      var t;
      e.instanceString != null && e.instanceString() === this.instanceString() ? t = e.toArray() : t = e;
      for (var a = 0; a < t.length; a++)
        this.add(t[a]);
    }
  }
  return Yn(r, [{
    key: "instanceString",
    value: function() {
      return "set";
    }
  }, {
    key: "add",
    value: function(t) {
      var a = this._obj;
      a[t] !== 1 && (a[t] = 1, this.size++);
    }
  }, {
    key: "delete",
    value: function(t) {
      var a = this._obj;
      a[t] === 1 && (a[t] = 0, this.size--);
    }
  }, {
    key: "clear",
    value: function() {
      this._obj = /* @__PURE__ */ Object.create(null);
    }
  }, {
    key: "has",
    value: function(t) {
      return this._obj[t] === 1;
    }
  }, {
    key: "toArray",
    value: function() {
      var t = this;
      return Object.keys(this._obj).filter(function(a) {
        return t.has(a);
      });
    }
  }, {
    key: "forEach",
    value: function(t, a) {
      return this.toArray().forEach(t, a);
    }
  }]), r;
}(), kt = (typeof Set > "u" ? "undefined" : qe(Set)) !== Yd ? Set : Xd, ja = function(e, t) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (e === void 0 || t === void 0 || !Xn(e)) {
    Fe("An element must have a core reference and parameters set");
    return;
  }
  var n = t.group;
  if (n == null && (t.data && t.data.source != null && t.data.target != null ? n = "edges" : n = "nodes"), n !== "nodes" && n !== "edges") {
    Fe("An element must be of type `nodes` or `edges`; you specified `" + n + "`");
    return;
  }
  this.length = 1, this[0] = this;
  var i = this._private = {
    cy: e,
    single: !0,
    // indicates this is an element
    data: t.data || {},
    // data object
    position: t.position || {
      x: 0,
      y: 0
    },
    // (x, y) position pair
    autoWidth: void 0,
    // width and height of nodes calculated by the renderer when set to special 'auto' value
    autoHeight: void 0,
    autoPadding: void 0,
    compoundBoundsClean: !1,
    // whether the compound dimensions need to be recalculated the next time dimensions are read
    listeners: [],
    // array of bound listeners
    group: n,
    // string; 'nodes' or 'edges'
    style: {},
    // properties as set by the style
    rstyle: {},
    // properties for style sent from the renderer to the core
    styleCxts: [],
    // applied style contexts from the styler
    styleKeys: {},
    // per-group keys of style property values
    removed: !0,
    // whether it's inside the vis; true if removed (set true here since we call restore)
    selected: !!t.selected,
    // whether it's selected
    selectable: t.selectable === void 0 ? !0 : !!t.selectable,
    // whether it's selectable
    locked: !!t.locked,
    // whether the element is locked (cannot be moved)
    grabbed: !1,
    // whether the element is grabbed by the mouse; renderer sets this privately
    grabbable: t.grabbable === void 0 ? !0 : !!t.grabbable,
    // whether the element can be grabbed
    pannable: t.pannable === void 0 ? n === "edges" : !!t.pannable,
    // whether the element has passthrough panning enabled
    active: !1,
    // whether the element is active from user interaction
    classes: new kt(),
    // map ( className => true )
    animation: {
      // object for currently-running animations
      current: [],
      queue: []
    },
    rscratch: {},
    // object in which the renderer can store information
    scratch: t.scratch || {},
    // scratch objects
    edges: [],
    // array of connected edges
    children: [],
    // array of children
    parent: t.parent && t.parent.isNode() ? t.parent : null,
    // parent ref
    traversalCache: {},
    // cache of output of traversal functions
    backgrounding: !1,
    // whether background images are loading
    bbCache: null,
    // cache of the current bounding box
    bbCacheShift: {
      x: 0,
      y: 0
    },
    // shift applied to cached bb to be applied on next get
    bodyBounds: null,
    // bounds cache of element body, w/o overlay
    overlayBounds: null,
    // bounds cache of element body, including overlay
    labelBounds: {
      // bounds cache of labels
      all: null,
      source: null,
      target: null,
      main: null
    },
    arrowBounds: {
      // bounds cache of edge arrows
      source: null,
      target: null,
      "mid-source": null,
      "mid-target": null
    }
  };
  if (i.position.x == null && (i.position.x = 0), i.position.y == null && (i.position.y = 0), t.renderedPosition) {
    var o = t.renderedPosition, s = e.pan(), l = e.zoom();
    i.position = {
      x: (o.x - s.x) / l,
      y: (o.y - s.y) / l
    };
  }
  var u = [];
  Me(t.classes) ? u = t.classes : le(t.classes) && (u = t.classes.split(/\s+/));
  for (var v = 0, f = u.length; v < f; v++) {
    var c = u[v];
    !c || c === "" || i.classes.add(c);
  }
  this.createEmitter();
  var d = t.style || t.css;
  d && (Pe("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead."), this.style(d)), (a === void 0 || a) && this.restore();
}, Ii = function(e) {
  return e = {
    bfs: e.bfs || !e.dfs,
    dfs: e.dfs || !e.bfs
  }, function(a, n, i) {
    var o;
    Ce(a) && !lr(a) && (o = a, a = o.roots || o.root, n = o.visit, i = o.directed), i = arguments.length === 2 && !ze(n) ? n : i, n = ze(n) ? n : function() {
    };
    for (var s = this._private.cy, l = a = le(a) ? this.filter(a) : a, u = [], v = [], f = {}, c = {}, d = {}, h = 0, g, m = this.byGroup(), p = m.nodes, y = m.edges, b = 0; b < l.length; b++) {
      var w = l[b], T = w.id();
      w.isNode() && (u.unshift(w), e.bfs && (d[T] = !0, v.push(w)), c[T] = 0);
    }
    for (var C = function() {
      var M = e.bfs ? u.shift() : u.pop(), L = M.id();
      if (e.dfs) {
        if (d[L])
          return "continue";
        d[L] = !0, v.push(M);
      }
      var O = c[L], A = f[L], R = A != null ? A.source() : null, z = A != null ? A.target() : null, F = A == null ? void 0 : M.same(R) ? z[0] : R[0], q = void 0;
      if (q = n(M, A, F, h++, O), q === !0)
        return g = M, "break";
      if (q === !1)
        return "break";
      for (var N = M.connectedEdges().filter(function(H) {
        return (!i || H.source().same(M)) && y.has(H);
      }), V = 0; V < N.length; V++) {
        var Y = N[V], U = Y.connectedNodes().filter(function(H) {
          return !H.same(M) && p.has(H);
        }), W = U.id();
        U.length !== 0 && !d[W] && (U = U[0], u.push(U), e.bfs && (d[W] = !0, v.push(U)), f[W] = Y, c[W] = c[L] + 1);
      }
    }; u.length !== 0; ) {
      var x = C();
      if (x !== "continue" && x === "break")
        break;
    }
    for (var D = s.collection(), E = 0; E < v.length; E++) {
      var P = v[E], B = f[P.id()];
      B != null && D.push(B), D.push(P);
    }
    return {
      path: s.collection(D),
      found: s.collection(g)
    };
  };
}, _t = {
  breadthFirstSearch: Ii({
    bfs: !0
  }),
  depthFirstSearch: Ii({
    dfs: !0
  })
};
_t.bfs = _t.breadthFirstSearch;
_t.dfs = _t.depthFirstSearch;
var Ud = Ze({
  root: null,
  weight: function(e) {
    return 1;
  },
  directed: !1
}), Zd = {
  dijkstra: function(e) {
    if (!Ce(e)) {
      var t = arguments;
      e = {
        root: t[0],
        weight: t[1],
        directed: t[2]
      };
    }
    var a = Ud(e), n = a.root, i = a.weight, o = a.directed, s = this, l = i, u = le(n) ? this.filter(n)[0] : n[0], v = {}, f = {}, c = {}, d = this.byGroup(), h = d.nodes, g = d.edges;
    g.unmergeBy(function(O) {
      return O.isLoop();
    });
    for (var m = function(A) {
      return v[A.id()];
    }, p = function(A, R) {
      v[A.id()] = R, y.updateItem(A);
    }, y = new sa.default(function(O, A) {
      return m(O) - m(A);
    }), b = 0; b < h.length; b++) {
      var w = h[b];
      v[w.id()] = w.same(u) ? 0 : 1 / 0, y.push(w);
    }
    for (var T = function(A, R) {
      for (var z = (o ? A.edgesTo(R) : A.edgesWith(R)).intersect(g), F = 1 / 0, q, N = 0; N < z.length; N++) {
        var V = z[N], Y = l(V);
        (Y < F || !q) && (F = Y, q = V);
      }
      return {
        edge: q,
        dist: F
      };
    }; y.size() > 0; ) {
      var C = y.pop(), x = m(C), D = C.id();
      if (c[D] = x, x !== 1 / 0)
        for (var E = C.neighborhood().intersect(h), P = 0; P < E.length; P++) {
          var B = E[P], k = B.id(), M = T(C, B), L = x + M.dist;
          L < m(B) && (p(B, L), f[k] = {
            node: C,
            edge: M.edge
          });
        }
    }
    return {
      distanceTo: function(A) {
        var R = le(A) ? h.filter(A)[0] : A[0];
        return c[R.id()];
      },
      pathTo: function(A) {
        var R = le(A) ? h.filter(A)[0] : A[0], z = [], F = R, q = F.id();
        if (R.length > 0)
          for (z.unshift(R); f[q]; ) {
            var N = f[q];
            z.unshift(N.edge), z.unshift(N.node), F = N.node, q = F.id();
          }
        return s.spawn(z);
      }
    };
  }
}, Qd = {
  // kruskal's algorithm (finds min spanning tree, assuming undirected graph)
  // implemented from pseudocode from wikipedia
  kruskal: function(e) {
    e = e || function(b) {
      return 1;
    };
    for (var t = this.byGroup(), a = t.nodes, n = t.edges, i = a.length, o = new Array(i), s = a, l = function(w) {
      for (var T = 0; T < o.length; T++) {
        var C = o[T];
        if (C.has(w))
          return T;
      }
    }, u = 0; u < i; u++)
      o[u] = this.spawn(a[u]);
    for (var v = n.sort(function(b, w) {
      return e(b) - e(w);
    }), f = 0; f < v.length; f++) {
      var c = v[f], d = c.source()[0], h = c.target()[0], g = l(d), m = l(h), p = o[g], y = o[m];
      g !== m && (s.merge(c), p.merge(y), o.splice(m, 1));
    }
    return s;
  }
}, _d = Ze({
  root: null,
  goal: null,
  weight: function(e) {
    return 1;
  },
  heuristic: function(e) {
    return 0;
  },
  directed: !1
}), Jd = {
  // Implemented from pseudocode from wikipedia
  aStar: function(e) {
    var t = this.cy(), a = _d(e), n = a.root, i = a.goal, o = a.heuristic, s = a.directed, l = a.weight;
    n = t.collection(n)[0], i = t.collection(i)[0];
    var u = n.id(), v = i.id(), f = {}, c = {}, d = {}, h = new sa.default(function(q, N) {
      return c[q.id()] - c[N.id()];
    }), g = new kt(), m = {}, p = {}, y = function(N, V) {
      h.push(N), g.add(V);
    }, b, w, T = function() {
      b = h.pop(), w = b.id(), g.delete(w);
    }, C = function(N) {
      return g.has(N);
    };
    y(n, u), f[u] = 0, c[u] = o(n);
    for (var x = 0; h.size() > 0; ) {
      if (T(), x++, w === v) {
        for (var D = [], E = i, P = v, B = p[P]; D.unshift(E), B != null && D.unshift(B), E = m[P], E != null; )
          P = E.id(), B = p[P];
        return {
          found: !0,
          distance: f[w],
          path: this.spawn(D),
          steps: x
        };
      }
      d[w] = !0;
      for (var k = b._private.edges, M = 0; M < k.length; M++) {
        var L = k[M];
        if (this.hasElementWithId(L.id()) && !(s && L.data("source") !== w)) {
          var O = L.source(), A = L.target(), R = O.id() !== w ? O : A, z = R.id();
          if (this.hasElementWithId(z) && !d[z]) {
            var F = f[w] + l(L);
            if (!C(z)) {
              f[z] = F, c[z] = F + o(R), y(R, z), m[z] = b, p[z] = L;
              continue;
            }
            F < f[z] && (f[z] = F, c[z] = F + o(R), m[z] = b, p[z] = L);
          }
        }
      }
    }
    return {
      found: !1,
      distance: void 0,
      path: void 0,
      steps: x
    };
  }
}, jd = Ze({
  weight: function(e) {
    return 1;
  },
  directed: !1
}), eh = {
  // Implemented from pseudocode from wikipedia
  floydWarshall: function(e) {
    for (var t = this.cy(), a = jd(e), n = a.weight, i = a.directed, o = n, s = this.byGroup(), l = s.nodes, u = s.edges, v = l.length, f = v * v, c = function(Y) {
      return l.indexOf(Y);
    }, d = function(Y) {
      return l[Y];
    }, h = new Array(f), g = 0; g < f; g++) {
      var m = g % v, p = (g - m) / v;
      p === m ? h[g] = 0 : h[g] = 1 / 0;
    }
    for (var y = new Array(f), b = new Array(f), w = 0; w < u.length; w++) {
      var T = u[w], C = T.source()[0], x = T.target()[0];
      if (C !== x) {
        var D = c(C), E = c(x), P = D * v + E, B = o(T);
        if (h[P] > B && (h[P] = B, y[P] = E, b[P] = T), !i) {
          var k = E * v + D;
          !i && h[k] > B && (h[k] = B, y[k] = D, b[k] = T);
        }
      }
    }
    for (var M = 0; M < v; M++)
      for (var L = 0; L < v; L++)
        for (var O = L * v + M, A = 0; A < v; A++) {
          var R = L * v + A, z = M * v + A;
          h[O] + h[z] < h[R] && (h[R] = h[O] + h[z], y[R] = y[O]);
        }
    var F = function(Y) {
      return (le(Y) ? t.filter(Y) : Y)[0];
    }, q = function(Y) {
      return c(F(Y));
    }, N = {
      distance: function(Y, U) {
        var W = q(Y), H = q(U);
        return h[W * v + H];
      },
      path: function(Y, U) {
        var W = q(Y), H = q(U), I = d(W);
        if (W === H)
          return I.collection();
        if (y[W * v + H] == null)
          return t.collection();
        var X = t.collection(), Z = W, j;
        for (X.merge(I); W !== H; )
          Z = W, W = y[W * v + H], j = b[Z * v + W], X.merge(j), X.merge(d(W));
        return X;
      }
    };
    return N;
  }
  // floydWarshall
}, rh = Ze({
  weight: function(e) {
    return 1;
  },
  directed: !1,
  root: null
}), th = {
  // Implemented from pseudocode from wikipedia
  bellmanFord: function(e) {
    var t = this, a = rh(e), n = a.weight, i = a.directed, o = a.root, s = n, l = this, u = this.cy(), v = this.byGroup(), f = v.edges, c = v.nodes, d = c.length, h = new Cr(), g = !1, m = [];
    o = u.collection(o)[0], f.unmergeBy(function(oe) {
      return oe.isLoop();
    });
    for (var p = f.length, y = function(ne) {
      var ue = h.get(ne.id());
      return ue || (ue = {}, h.set(ne.id(), ue)), ue;
    }, b = function(ne) {
      return (le(ne) ? u.$(ne) : ne)[0];
    }, w = function(ne) {
      return y(b(ne)).dist;
    }, T = function(ne) {
      for (var ue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : o, we = b(ne), ge = [], fe = we; ; ) {
        if (fe == null)
          return t.spawn();
        var _ = y(fe), S = _.edge, $ = _.pred;
        if (ge.unshift(fe[0]), fe.same(ue) && ge.length > 0)
          break;
        S != null && ge.unshift(S), fe = $;
      }
      return l.spawn(ge);
    }, C = 0; C < d; C++) {
      var x = c[C], D = y(x);
      x.same(o) ? D.dist = 0 : D.dist = 1 / 0, D.pred = null, D.edge = null;
    }
    for (var E = !1, P = function(ne, ue, we, ge, fe, _) {
      var S = ge.dist + _;
      S < fe.dist && !we.same(ge.edge) && (fe.dist = S, fe.pred = ne, fe.edge = we, E = !0);
    }, B = 1; B < d; B++) {
      E = !1;
      for (var k = 0; k < p; k++) {
        var M = f[k], L = M.source(), O = M.target(), A = s(M), R = y(L), z = y(O);
        P(L, O, M, R, z, A), i || P(O, L, M, z, R, A);
      }
      if (!E)
        break;
    }
    if (E)
      for (var F = [], q = 0; q < p; q++) {
        var N = f[q], V = N.source(), Y = N.target(), U = s(N), W = y(V).dist, H = y(Y).dist;
        if (W + U < H || !i && H + U < W)
          if (g || (Pe("Graph contains a negative weight cycle for Bellman-Ford"), g = !0), e.findNegativeWeightCycles !== !1) {
            var I = [];
            W + U < H && I.push(V), !i && H + U < W && I.push(Y);
            for (var X = I.length, Z = 0; Z < X; Z++) {
              var j = I[Z], re = [j];
              re.push(y(j).edge);
              for (var de = y(j).pred; re.indexOf(de) === -1; )
                re.push(de), re.push(y(de).edge), de = y(de).pred;
              re = re.slice(re.indexOf(de));
              for (var he = re[0].id(), te = 0, ee = 2; ee < re.length; ee += 2)
                re[ee].id() < he && (he = re[ee].id(), te = ee);
              re = re.slice(te).concat(re.slice(0, te)), re.push(re[0]);
              var ve = re.map(function(oe) {
                return oe.id();
              }).join(",");
              F.indexOf(ve) === -1 && (m.push(l.spawn(re)), F.push(ve));
            }
          } else
            break;
      }
    return {
      distanceTo: w,
      pathTo: T,
      hasNegativeWeightCycle: g,
      negativeWeightCycles: m
    };
  }
  // bellmanFord
}, ah = Math.sqrt(2), nh = function(e, t, a) {
  a.length === 0 && Fe("Karger-Stein must be run on a connected (sub)graph");
  for (var n = a[e], i = n[1], o = n[2], s = t[i], l = t[o], u = a, v = u.length - 1; v >= 0; v--) {
    var f = u[v], c = f[1], d = f[2];
    (t[c] === s && t[d] === l || t[c] === l && t[d] === s) && u.splice(v, 1);
  }
  for (var h = 0; h < u.length; h++) {
    var g = u[h];
    g[1] === l ? (u[h] = g.slice(), u[h][1] = s) : g[2] === l && (u[h] = g.slice(), u[h][2] = s);
  }
  for (var m = 0; m < t.length; m++)
    t[m] === l && (t[m] = s);
  return u;
}, mn = function(e, t, a, n) {
  for (; a > n; ) {
    var i = Math.floor(Math.random() * t.length);
    t = nh(i, e, t), a--;
  }
  return t;
}, ih = {
  // Computes the minimum cut of an undirected graph
  // Returns the correct answer with high probability
  kargerStein: function() {
    var e = this, t = this.byGroup(), a = t.nodes, n = t.edges;
    n.unmergeBy(function(z) {
      return z.isLoop();
    });
    var i = a.length, o = n.length, s = Math.ceil(Math.pow(Math.log(i) / Math.LN2, 2)), l = Math.floor(i / ah);
    if (i < 2) {
      Fe("At least 2 nodes are required for Karger-Stein algorithm");
      return;
    }
    for (var u = [], v = 0; v < o; v++) {
      var f = n[v];
      u.push([v, a.indexOf(f.source()), a.indexOf(f.target())]);
    }
    for (var c = 1 / 0, d = [], h = new Array(i), g = new Array(i), m = new Array(i), p = function(F, q) {
      for (var N = 0; N < i; N++)
        q[N] = F[N];
    }, y = 0; y <= s; y++) {
      for (var b = 0; b < i; b++)
        g[b] = b;
      var w = mn(g, u.slice(), i, l), T = w.slice();
      p(g, m);
      var C = mn(g, w, l, 2), x = mn(m, T, l, 2);
      C.length <= x.length && C.length < c ? (c = C.length, d = C, p(g, h)) : x.length <= C.length && x.length < c && (c = x.length, d = x, p(m, h));
    }
    for (var D = this.spawn(d.map(function(z) {
      return n[z[0]];
    })), E = this.spawn(), P = this.spawn(), B = h[0], k = 0; k < h.length; k++) {
      var M = h[k], L = a[k];
      M === B ? E.merge(L) : P.merge(L);
    }
    var O = function(F) {
      var q = e.spawn();
      return F.forEach(function(N) {
        q.merge(N), N.connectedEdges().forEach(function(V) {
          e.contains(V) && !D.contains(V) && q.merge(V);
        });
      }), q;
    }, A = [O(E), O(P)], R = {
      cut: D,
      components: A,
      // n.b. partitions are included to be compatible with the old api spec
      // (could be removed in a future major version)
      partition1: E,
      partition2: P
    };
    return R;
  }
}, oh = function(e) {
  return {
    x: e.x,
    y: e.y
  };
}, en = function(e, t, a) {
  return {
    x: e.x * t + a.x,
    y: e.y * t + a.y
  };
}, ns = function(e, t, a) {
  return {
    x: (e.x - a.x) / t,
    y: (e.y - a.y) / t
  };
}, gt = function(e) {
  return {
    x: e[0],
    y: e[1]
  };
}, sh = function(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 1 / 0, i = t; i < a; i++) {
    var o = e[i];
    isFinite(o) && (n = Math.min(o, n));
  }
  return n;
}, uh = function(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = -1 / 0, i = t; i < a; i++) {
    var o = e[i];
    isFinite(o) && (n = Math.max(o, n));
  }
  return n;
}, lh = function(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 0, i = 0, o = t; o < a; o++) {
    var s = e[o];
    isFinite(s) && (n += s, i++);
  }
  return n / i;
}, vh = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0;
  n ? e = e.slice(t, a) : (a < e.length && e.splice(a, e.length - a), t > 0 && e.splice(0, t));
  for (var s = 0, l = e.length - 1; l >= 0; l--) {
    var u = e[l];
    o ? isFinite(u) || (e[l] = -1 / 0, s++) : e.splice(l, 1);
  }
  i && e.sort(function(c, d) {
    return c - d;
  });
  var v = e.length, f = Math.floor(v / 2);
  return v % 2 !== 0 ? e[f + 1 + s] : (e[f - 1 + s] + e[f + s]) / 2;
}, fh = function(e) {
  return Math.PI * e / 180;
}, wa = function(e, t) {
  return Math.atan2(t, e) - Math.PI / 2;
}, Jn = Math.log2 || function(r) {
  return Math.log(r) / Math.log(2);
}, is = function(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}, et = function(e, t) {
  return Math.sqrt(Qr(e, t));
}, Qr = function(e, t) {
  var a = t.x - e.x, n = t.y - e.y;
  return a * a + n * n;
}, ch = function(e) {
  for (var t = e.length, a = 0, n = 0; n < t; n++)
    a += e[n];
  for (var i = 0; i < t; i++)
    e[i] = e[i] / a;
  return e;
}, Ge = function(e, t, a, n) {
  return (1 - n) * (1 - n) * e + 2 * (1 - n) * n * t + n * n * a;
}, mt = function(e, t, a, n) {
  return {
    x: Ge(e.x, t.x, a.x, n),
    y: Ge(e.y, t.y, a.y, n)
  };
}, dh = function(e, t, a, n) {
  var i = {
    x: t.x - e.x,
    y: t.y - e.y
  }, o = et(e, t), s = {
    x: i.x / o,
    y: i.y / o
  };
  return a = a ?? 0, n = n ?? a * o, {
    x: e.x + s.x * n,
    y: e.y + s.y * n
  };
}, Jt = function(e, t, a) {
  return Math.max(e, Math.min(a, t));
}, ur = function(e) {
  if (e == null)
    return {
      x1: 1 / 0,
      y1: 1 / 0,
      x2: -1 / 0,
      y2: -1 / 0,
      w: 0,
      h: 0
    };
  if (e.x1 != null && e.y1 != null) {
    if (e.x2 != null && e.y2 != null && e.x2 >= e.x1 && e.y2 >= e.y1)
      return {
        x1: e.x1,
        y1: e.y1,
        x2: e.x2,
        y2: e.y2,
        w: e.x2 - e.x1,
        h: e.y2 - e.y1
      };
    if (e.w != null && e.h != null && e.w >= 0 && e.h >= 0)
      return {
        x1: e.x1,
        y1: e.y1,
        x2: e.x1 + e.w,
        y2: e.y1 + e.h,
        w: e.w,
        h: e.h
      };
  }
}, hh = function(e) {
  return {
    x1: e.x1,
    x2: e.x2,
    w: e.w,
    y1: e.y1,
    y2: e.y2,
    h: e.h
  };
}, gh = function(e) {
  e.x1 = 1 / 0, e.y1 = 1 / 0, e.x2 = -1 / 0, e.y2 = -1 / 0, e.w = 0, e.h = 0;
}, ph = function(e, t) {
  e.x1 = Math.min(e.x1, t.x1), e.x2 = Math.max(e.x2, t.x2), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, t.y1), e.y2 = Math.max(e.y2, t.y2), e.h = e.y2 - e.y1;
}, mh = function(e, t, a) {
  e.x1 = Math.min(e.x1, t), e.x2 = Math.max(e.x2, t), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, a), e.y2 = Math.max(e.y2, a), e.h = e.y2 - e.y1;
}, La = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.x1 -= t, e.x2 += t, e.y1 -= t, e.y2 += t, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
}, yn = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [0], a, n, i, o;
  if (t.length === 1)
    a = n = i = o = t[0];
  else if (t.length === 2)
    a = i = t[0], o = n = t[1];
  else if (t.length === 4) {
    var s = Pr(t, 4);
    a = s[0], n = s[1], i = s[2], o = s[3];
  }
  return e.x1 -= o, e.x2 += n, e.y1 -= a, e.y2 += i, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
}, zi = function(e, t) {
  e.x1 = t.x1, e.y1 = t.y1, e.x2 = t.x2, e.y2 = t.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1;
}, jn = function(e, t) {
  return !(e.x1 > t.x2 || t.x1 > e.x2 || e.x2 < t.x1 || t.x2 < e.x1 || e.y2 < t.y1 || t.y2 < e.y1 || e.y1 > t.y2 || t.y1 > e.y2);
}, xt = function(e, t, a) {
  return e.x1 <= t && t <= e.x2 && e.y1 <= a && a <= e.y2;
}, yh = function(e, t) {
  return xt(e, t.x, t.y);
}, os = function(e, t) {
  return xt(e, t.x1, t.y1) && xt(e, t.x2, t.y2);
}, ss = function(e, t, a, n, i, o, s) {
  var l = va(i, o), u = i / 2, v = o / 2, f;
  {
    var c = a - u + l - s, d = n - v - s, h = a + u - l + s, g = d;
    if (f = Fr(e, t, a, n, c, d, h, g, !1), f.length > 0)
      return f;
  }
  {
    var m = a + u + s, p = n - v + l - s, y = m, b = n + v - l + s;
    if (f = Fr(e, t, a, n, m, p, y, b, !1), f.length > 0)
      return f;
  }
  {
    var w = a - u + l - s, T = n + v + s, C = a + u - l + s, x = T;
    if (f = Fr(e, t, a, n, w, T, C, x, !1), f.length > 0)
      return f;
  }
  {
    var D = a - u - s, E = n - v + l - s, P = D, B = n + v - l + s;
    if (f = Fr(e, t, a, n, D, E, P, B, !1), f.length > 0)
      return f;
  }
  var k;
  {
    var M = a - u + l, L = n - v + l;
    if (k = Gt(e, t, a, n, M, L, l + s), k.length > 0 && k[0] <= M && k[1] <= L)
      return [k[0], k[1]];
  }
  {
    var O = a + u - l, A = n - v + l;
    if (k = Gt(e, t, a, n, O, A, l + s), k.length > 0 && k[0] >= O && k[1] <= A)
      return [k[0], k[1]];
  }
  {
    var R = a + u - l, z = n + v - l;
    if (k = Gt(e, t, a, n, R, z, l + s), k.length > 0 && k[0] >= R && k[1] >= z)
      return [k[0], k[1]];
  }
  {
    var F = a - u + l, q = n + v - l;
    if (k = Gt(e, t, a, n, F, q, l + s), k.length > 0 && k[0] <= F && k[1] >= q)
      return [k[0], k[1]];
  }
  return [];
}, bh = function(e, t, a, n, i, o, s) {
  var l = s, u = Math.min(a, i), v = Math.max(a, i), f = Math.min(n, o), c = Math.max(n, o);
  return u - l <= e && e <= v + l && f - l <= t && t <= c + l;
}, wh = function(e, t, a, n, i, o, s, l, u) {
  var v = {
    x1: Math.min(a, s, i) - u,
    x2: Math.max(a, s, i) + u,
    y1: Math.min(n, l, o) - u,
    y2: Math.max(n, l, o) + u
  };
  return !(e < v.x1 || e > v.x2 || t < v.y1 || t > v.y2);
}, xh = function(e, t, a, n) {
  a -= n;
  var i = t * t - 4 * e * a;
  if (i < 0)
    return [];
  var o = Math.sqrt(i), s = 2 * e, l = (-t + o) / s, u = (-t - o) / s;
  return [l, u];
}, Eh = function(e, t, a, n, i) {
  var o = 1e-5;
  e === 0 && (e = o), t /= e, a /= e, n /= e;
  var s, l, u, v, f, c, d, h;
  if (l = (3 * a - t * t) / 9, u = -(27 * n) + t * (9 * a - 2 * (t * t)), u /= 54, s = l * l * l + u * u, i[1] = 0, d = t / 3, s > 0) {
    f = u + Math.sqrt(s), f = f < 0 ? -Math.pow(-f, 1 / 3) : Math.pow(f, 1 / 3), c = u - Math.sqrt(s), c = c < 0 ? -Math.pow(-c, 1 / 3) : Math.pow(c, 1 / 3), i[0] = -d + f + c, d += (f + c) / 2, i[4] = i[2] = -d, d = Math.sqrt(3) * (-c + f) / 2, i[3] = d, i[5] = -d;
    return;
  }
  if (i[5] = i[3] = 0, s === 0) {
    h = u < 0 ? -Math.pow(-u, 1 / 3) : Math.pow(u, 1 / 3), i[0] = -d + 2 * h, i[4] = i[2] = -(h + d);
    return;
  }
  l = -l, v = l * l * l, v = Math.acos(u / Math.sqrt(v)), h = 2 * Math.sqrt(l), i[0] = -d + h * Math.cos(v / 3), i[2] = -d + h * Math.cos((v + 2 * Math.PI) / 3), i[4] = -d + h * Math.cos((v + 4 * Math.PI) / 3);
}, Ch = function(e, t, a, n, i, o, s, l) {
  var u = 1 * a * a - 4 * a * i + 2 * a * s + 4 * i * i - 4 * i * s + s * s + n * n - 4 * n * o + 2 * n * l + 4 * o * o - 4 * o * l + l * l, v = 1 * 9 * a * i - 3 * a * a - 3 * a * s - 6 * i * i + 3 * i * s + 9 * n * o - 3 * n * n - 3 * n * l - 6 * o * o + 3 * o * l, f = 1 * 3 * a * a - 6 * a * i + a * s - a * e + 2 * i * i + 2 * i * e - s * e + 3 * n * n - 6 * n * o + n * l - n * t + 2 * o * o + 2 * o * t - l * t, c = 1 * a * i - a * a + a * e - i * e + n * o - n * n + n * t - o * t, d = [];
  Eh(u, v, f, c, d);
  for (var h = 1e-7, g = [], m = 0; m < 6; m += 2)
    Math.abs(d[m + 1]) < h && d[m] >= 0 && d[m] <= 1 && g.push(d[m]);
  g.push(1), g.push(0);
  for (var p = -1, y, b, w, T = 0; T < g.length; T++)
    y = Math.pow(1 - g[T], 2) * a + 2 * (1 - g[T]) * g[T] * i + g[T] * g[T] * s, b = Math.pow(1 - g[T], 2) * n + 2 * (1 - g[T]) * g[T] * o + g[T] * g[T] * l, w = Math.pow(y - e, 2) + Math.pow(b - t, 2), p >= 0 ? w < p && (p = w) : p = w;
  return p;
}, Sh = function(e, t, a, n, i, o) {
  var s = [e - a, t - n], l = [i - a, o - n], u = l[0] * l[0] + l[1] * l[1], v = s[0] * s[0] + s[1] * s[1], f = s[0] * l[0] + s[1] * l[1], c = f * f / u;
  return f < 0 ? v : c > u ? (e - i) * (e - i) + (t - o) * (t - o) : v - c;
}, sr = function(e, t, a) {
  for (var n, i, o, s, l, u = 0, v = 0; v < a.length / 2; v++)
    if (n = a[v * 2], i = a[v * 2 + 1], v + 1 < a.length / 2 ? (o = a[(v + 1) * 2], s = a[(v + 1) * 2 + 1]) : (o = a[(v + 1 - a.length / 2) * 2], s = a[(v + 1 - a.length / 2) * 2 + 1]), !(n == e && o == e))
      if (n >= e && e >= o || n <= e && e <= o)
        l = (e - n) / (o - n) * (s - i) + i, l > t && u++;
      else
        continue;
  return u % 2 !== 0;
}, Lr = function(e, t, a, n, i, o, s, l, u) {
  var v = new Array(a.length), f;
  l[0] != null ? (f = Math.atan(l[1] / l[0]), l[0] < 0 ? f = f + Math.PI / 2 : f = -f - Math.PI / 2) : f = l;
  for (var c = Math.cos(-f), d = Math.sin(-f), h = 0; h < v.length / 2; h++)
    v[h * 2] = o / 2 * (a[h * 2] * c - a[h * 2 + 1] * d), v[h * 2 + 1] = s / 2 * (a[h * 2 + 1] * c + a[h * 2] * d), v[h * 2] += n, v[h * 2 + 1] += i;
  var g;
  if (u > 0) {
    var m = ls(v, -u);
    g = us(m);
  } else
    g = v;
  return sr(e, t, g);
}, Th = function(e, t, a, n, i, o, s) {
  for (var l = new Array(a.length), u = o / 2, v = s / 2, f = ei(o, s), c = f * f, d = 0; d < a.length / 4; d++) {
    var h = void 0, g = void 0;
    d === 0 ? h = a.length - 2 : h = d * 4 - 2, g = d * 4 + 2;
    var m = n + u * a[d * 4], p = i + v * a[d * 4 + 1], y = -a[h] * a[g] - a[h + 1] * a[g + 1], b = f / Math.tan(Math.acos(y) / 2), w = m - b * a[h], T = p - b * a[h + 1], C = m + b * a[g], x = p + b * a[g + 1];
    l[d * 4] = w, l[d * 4 + 1] = T, l[d * 4 + 2] = C, l[d * 4 + 3] = x;
    var D = a[h + 1], E = -a[h], P = D * a[g] + E * a[g + 1];
    P < 0 && (D *= -1, E *= -1);
    var B = w + D * f, k = T + E * f, M = Math.pow(B - e, 2) + Math.pow(k - t, 2);
    if (M <= c)
      return !0;
  }
  return sr(e, t, l);
}, us = function(e) {
  for (var t = new Array(e.length / 2), a, n, i, o, s, l, u, v, f = 0; f < e.length / 4; f++) {
    a = e[f * 4], n = e[f * 4 + 1], i = e[f * 4 + 2], o = e[f * 4 + 3], f < e.length / 4 - 1 ? (s = e[(f + 1) * 4], l = e[(f + 1) * 4 + 1], u = e[(f + 1) * 4 + 2], v = e[(f + 1) * 4 + 3]) : (s = e[0], l = e[1], u = e[2], v = e[3]);
    var c = Fr(a, n, i, o, s, l, u, v, !0);
    t[f * 2] = c[0], t[f * 2 + 1] = c[1];
  }
  return t;
}, ls = function(e, t) {
  for (var a = new Array(e.length * 2), n, i, o, s, l = 0; l < e.length / 2; l++) {
    n = e[l * 2], i = e[l * 2 + 1], l < e.length / 2 - 1 ? (o = e[(l + 1) * 2], s = e[(l + 1) * 2 + 1]) : (o = e[0], s = e[1]);
    var u = s - i, v = -(o - n), f = Math.sqrt(u * u + v * v), c = u / f, d = v / f;
    a[l * 4] = n + c * t, a[l * 4 + 1] = i + d * t, a[l * 4 + 2] = o + c * t, a[l * 4 + 3] = s + d * t;
  }
  return a;
}, Dh = function(e, t, a, n, i, o) {
  var s = a - e, l = n - t;
  s /= i, l /= o;
  var u = Math.sqrt(s * s + l * l), v = u - 1;
  if (v < 0)
    return [];
  var f = v / u;
  return [(a - e) * f + e, (n - t) * f + t];
}, Jr = function(e, t, a, n, i, o, s) {
  return e -= i, t -= o, e /= a / 2 + s, t /= n / 2 + s, e * e + t * t <= 1;
}, Gt = function(e, t, a, n, i, o, s) {
  var l = [a - e, n - t], u = [e - i, t - o], v = l[0] * l[0] + l[1] * l[1], f = 2 * (u[0] * l[0] + u[1] * l[1]), c = u[0] * u[0] + u[1] * u[1] - s * s, d = f * f - 4 * v * c;
  if (d < 0)
    return [];
  var h = (-f + Math.sqrt(d)) / (2 * v), g = (-f - Math.sqrt(d)) / (2 * v), m = Math.min(h, g), p = Math.max(h, g), y = [];
  if (m >= 0 && m <= 1 && y.push(m), p >= 0 && p <= 1 && y.push(p), y.length === 0)
    return [];
  var b = y[0] * l[0] + e, w = y[0] * l[1] + t;
  if (y.length > 1) {
    if (y[0] == y[1])
      return [b, w];
    var T = y[1] * l[0] + e, C = y[1] * l[1] + t;
    return [b, w, T, C];
  } else
    return [b, w];
}, bn = function(e, t, a) {
  return t <= e && e <= a || a <= e && e <= t ? e : e <= t && t <= a || a <= t && t <= e ? t : a;
}, Fr = function(e, t, a, n, i, o, s, l, u) {
  var v = e - i, f = a - e, c = s - i, d = t - o, h = n - t, g = l - o, m = c * d - g * v, p = f * d - h * v, y = g * f - c * h;
  if (y !== 0) {
    var b = m / y, w = p / y, T = 1e-3, C = 0 - T, x = 1 + T;
    return C <= b && b <= x && C <= w && w <= x ? [e + b * f, t + b * h] : u ? [e + b * f, t + b * h] : [];
  } else
    return m === 0 || p === 0 ? bn(e, a, s) === s ? [s, l] : bn(e, a, i) === i ? [i, o] : bn(i, s, a) === a ? [a, n] : [] : [];
}, jt = function(e, t, a, n, i, o, s, l) {
  var u = [], v, f = new Array(a.length), c = !0;
  o == null && (c = !1);
  var d;
  if (c) {
    for (var h = 0; h < f.length / 2; h++)
      f[h * 2] = a[h * 2] * o + n, f[h * 2 + 1] = a[h * 2 + 1] * s + i;
    if (l > 0) {
      var g = ls(f, -l);
      d = us(g);
    } else
      d = f;
  } else
    d = a;
  for (var m, p, y, b, w = 0; w < d.length / 2; w++)
    m = d[w * 2], p = d[w * 2 + 1], w < d.length / 2 - 1 ? (y = d[(w + 1) * 2], b = d[(w + 1) * 2 + 1]) : (y = d[0], b = d[1]), v = Fr(e, t, n, i, m, p, y, b), v.length !== 0 && u.push(v[0], v[1]);
  return u;
}, kh = function(e, t, a, n, i, o, s, l) {
  for (var u = [], v, f = new Array(a.length), c = o / 2, d = s / 2, h = ei(o, s), g = 0; g < a.length / 4; g++) {
    var m = void 0, p = void 0;
    g === 0 ? m = a.length - 2 : m = g * 4 - 2, p = g * 4 + 2;
    var y = n + c * a[g * 4], b = i + d * a[g * 4 + 1], w = -a[m] * a[p] - a[m + 1] * a[p + 1], T = h / Math.tan(Math.acos(w) / 2), C = y - T * a[m], x = b - T * a[m + 1], D = y + T * a[p], E = b + T * a[p + 1];
    g === 0 ? (f[a.length - 2] = C, f[a.length - 1] = x) : (f[g * 4 - 2] = C, f[g * 4 - 1] = x), f[g * 4] = D, f[g * 4 + 1] = E;
    var P = a[m + 1], B = -a[m], k = P * a[p] + B * a[p + 1];
    k < 0 && (P *= -1, B *= -1);
    var M = C + P * h, L = x + B * h;
    v = Gt(e, t, n, i, M, L, h), v.length !== 0 && u.push(v[0], v[1]);
  }
  for (var O = 0; O < f.length / 4; O++)
    v = Fr(e, t, n, i, f[O * 4], f[O * 4 + 1], f[O * 4 + 2], f[O * 4 + 3], !1), v.length !== 0 && u.push(v[0], v[1]);
  if (u.length > 2) {
    for (var A = [u[0], u[1]], R = Math.pow(A[0] - e, 2) + Math.pow(A[1] - t, 2), z = 1; z < u.length / 2; z++) {
      var F = Math.pow(u[z * 2] - e, 2) + Math.pow(u[z * 2 + 1] - t, 2);
      F <= R && (A[0] = u[z * 2], A[1] = u[z * 2 + 1], R = F);
    }
    return A;
  }
  return u;
}, xa = function(e, t, a) {
  var n = [e[0] - t[0], e[1] - t[1]], i = Math.sqrt(n[0] * n[0] + n[1] * n[1]), o = (i - a) / i;
  return o < 0 && (o = 1e-5), [t[0] + o * n[0], t[1] + o * n[1]];
}, ar = function(e, t) {
  var a = Bn(e, t);
  return a = vs(a), a;
}, vs = function(e) {
  for (var t, a, n = e.length / 2, i = 1 / 0, o = 1 / 0, s = -1 / 0, l = -1 / 0, u = 0; u < n; u++)
    t = e[2 * u], a = e[2 * u + 1], i = Math.min(i, t), s = Math.max(s, t), o = Math.min(o, a), l = Math.max(l, a);
  for (var v = 2 / (s - i), f = 2 / (l - o), c = 0; c < n; c++)
    t = e[2 * c] = e[2 * c] * v, a = e[2 * c + 1] = e[2 * c + 1] * f, i = Math.min(i, t), s = Math.max(s, t), o = Math.min(o, a), l = Math.max(l, a);
  if (o < -1)
    for (var d = 0; d < n; d++)
      a = e[2 * d + 1] = e[2 * d + 1] + (-1 - o);
  return e;
}, Bn = function(e, t) {
  var a = 1 / e * 2 * Math.PI, n = e % 2 === 0 ? Math.PI / 2 + a / 2 : Math.PI / 2;
  n += t;
  for (var i = new Array(e * 2), o, s = 0; s < e; s++)
    o = s * a + n, i[2 * s] = Math.cos(o), i[2 * s + 1] = Math.sin(-o);
  return i;
}, va = function(e, t) {
  return Math.min(e / 4, t / 4, 8);
}, ei = function(e, t) {
  return Math.min(e / 10, t / 10, 8);
}, fs = function() {
  return 8;
}, Ph = function(e, t, a) {
  return [e - 2 * t + a, 2 * (t - e), e];
}, Ln = function(e, t) {
  return {
    heightOffset: Math.min(15, 0.05 * t),
    widthOffset: Math.min(100, 0.25 * e),
    ctrlPtOffsetPct: 0.05
  };
}, Bh = Ze({
  dampingFactor: 0.8,
  precision: 1e-6,
  iterations: 200,
  weight: function(e) {
    return 1;
  }
}), Lh = {
  pageRank: function(e) {
    for (var t = Bh(e), a = t.dampingFactor, n = t.precision, i = t.iterations, o = t.weight, s = this._private.cy, l = this.byGroup(), u = l.nodes, v = l.edges, f = u.length, c = f * f, d = v.length, h = new Array(c), g = new Array(f), m = (1 - a) / f, p = 0; p < f; p++) {
      for (var y = 0; y < f; y++) {
        var b = p * f + y;
        h[b] = 0;
      }
      g[p] = 0;
    }
    for (var w = 0; w < d; w++) {
      var T = v[w], C = T.data("source"), x = T.data("target");
      if (C !== x) {
        var D = u.indexOfId(C), E = u.indexOfId(x), P = o(T), B = E * f + D;
        h[B] += P, g[D] += P;
      }
    }
    for (var k = 1 / f + m, M = 0; M < f; M++)
      if (g[M] === 0)
        for (var L = 0; L < f; L++) {
          var O = L * f + M;
          h[O] = k;
        }
      else
        for (var A = 0; A < f; A++) {
          var R = A * f + M;
          h[R] = h[R] / g[M] + m;
        }
    for (var z = new Array(f), F = new Array(f), q, N = 0; N < f; N++)
      z[N] = 1;
    for (var V = 0; V < i; V++) {
      for (var Y = 0; Y < f; Y++)
        F[Y] = 0;
      for (var U = 0; U < f; U++)
        for (var W = 0; W < f; W++) {
          var H = U * f + W;
          F[U] += h[H] * z[W];
        }
      ch(F), q = z, z = F, F = q;
      for (var I = 0, X = 0; X < f; X++) {
        var Z = q[X] - z[X];
        I += Z * Z;
      }
      if (I < n)
        break;
    }
    var j = {
      rank: function(de) {
        return de = s.collection(de)[0], z[u.indexOf(de)];
      }
    };
    return j;
  }
  // pageRank
}, Ni = Ze({
  root: null,
  weight: function(e) {
    return 1;
  },
  directed: !1,
  alpha: 0
}), yt = {
  degreeCentralityNormalized: function(e) {
    e = Ni(e);
    var t = this.cy(), a = this.nodes(), n = a.length;
    if (e.directed) {
      for (var v = {}, f = {}, c = 0, d = 0, h = 0; h < n; h++) {
        var g = a[h], m = g.id();
        e.root = g;
        var p = this.degreeCentrality(e);
        c < p.indegree && (c = p.indegree), d < p.outdegree && (d = p.outdegree), v[m] = p.indegree, f[m] = p.outdegree;
      }
      return {
        indegree: function(b) {
          return c == 0 ? 0 : (le(b) && (b = t.filter(b)), v[b.id()] / c);
        },
        outdegree: function(b) {
          return d === 0 ? 0 : (le(b) && (b = t.filter(b)), f[b.id()] / d);
        }
      };
    } else {
      for (var i = {}, o = 0, s = 0; s < n; s++) {
        var l = a[s];
        e.root = l;
        var u = this.degreeCentrality(e);
        o < u.degree && (o = u.degree), i[l.id()] = u.degree;
      }
      return {
        degree: function(b) {
          return o === 0 ? 0 : (le(b) && (b = t.filter(b)), i[b.id()] / o);
        }
      };
    }
  },
  // degreeCentralityNormalized
  // Implemented from the algorithm in Opsahl's paper
  // "Node centrality in weighted networks: Generalizing degree and shortest paths"
  // check the heading 2 "Degree"
  degreeCentrality: function(e) {
    e = Ni(e);
    var t = this.cy(), a = this, n = e, i = n.root, o = n.weight, s = n.directed, l = n.alpha;
    if (i = t.collection(i)[0], s) {
      for (var d = i.connectedEdges(), h = d.filter(function(C) {
        return C.target().same(i) && a.has(C);
      }), g = d.filter(function(C) {
        return C.source().same(i) && a.has(C);
      }), m = h.length, p = g.length, y = 0, b = 0, w = 0; w < h.length; w++)
        y += o(h[w]);
      for (var T = 0; T < g.length; T++)
        b += o(g[T]);
      return {
        indegree: Math.pow(m, 1 - l) * Math.pow(y, l),
        outdegree: Math.pow(p, 1 - l) * Math.pow(b, l)
      };
    } else {
      for (var u = i.connectedEdges().intersection(a), v = u.length, f = 0, c = 0; c < u.length; c++)
        f += o(u[c]);
      return {
        degree: Math.pow(v, 1 - l) * Math.pow(f, l)
      };
    }
  }
  // degreeCentrality
};
yt.dc = yt.degreeCentrality;
yt.dcn = yt.degreeCentralityNormalised = yt.degreeCentralityNormalized;
var Fi = Ze({
  harmonic: !0,
  weight: function() {
    return 1;
  },
  directed: !1,
  root: null
}), bt = {
  closenessCentralityNormalized: function(e) {
    for (var t = Fi(e), a = t.harmonic, n = t.weight, i = t.directed, o = this.cy(), s = {}, l = 0, u = this.nodes(), v = this.floydWarshall({
      weight: n,
      directed: i
    }), f = 0; f < u.length; f++) {
      for (var c = 0, d = u[f], h = 0; h < u.length; h++)
        if (f !== h) {
          var g = v.distance(d, u[h]);
          a ? c += 1 / g : c += g;
        }
      a || (c = 1 / c), l < c && (l = c), s[d.id()] = c;
    }
    return {
      closeness: function(p) {
        return l == 0 ? 0 : (le(p) ? p = o.filter(p)[0].id() : p = p.id(), s[p] / l);
      }
    };
  },
  // Implemented from pseudocode from wikipedia
  closenessCentrality: function(e) {
    var t = Fi(e), a = t.root, n = t.weight, i = t.directed, o = t.harmonic;
    a = this.filter(a)[0];
    for (var s = this.dijkstra({
      root: a,
      weight: n,
      directed: i
    }), l = 0, u = this.nodes(), v = 0; v < u.length; v++) {
      var f = u[v];
      if (!f.same(a)) {
        var c = s.distanceTo(f);
        o ? l += 1 / c : l += c;
      }
    }
    return o ? l : 1 / l;
  }
  // closenessCentrality
};
bt.cc = bt.closenessCentrality;
bt.ccn = bt.closenessCentralityNormalised = bt.closenessCentralityNormalized;
var Mh = Ze({
  weight: null,
  directed: !1
}), Mn = {
  // Implemented from the algorithm in the paper "On Variants of Shortest-Path Betweenness Centrality and their Generic Computation" by Ulrik Brandes
  betweennessCentrality: function(e) {
    for (var t = Mh(e), a = t.directed, n = t.weight, i = n != null, o = this.cy(), s = this.nodes(), l = {}, u = {}, v = 0, f = {
      set: function(b, w) {
        u[b] = w, w > v && (v = w);
      },
      get: function(b) {
        return u[b];
      }
    }, c = 0; c < s.length; c++) {
      var d = s[c], h = d.id();
      a ? l[h] = d.outgoers().nodes() : l[h] = d.openNeighborhood().nodes(), f.set(h, 0);
    }
    for (var g = function(b) {
      for (var w = s[b].id(), T = [], C = {}, x = {}, D = {}, E = new sa.default(function(W, H) {
        return D[W] - D[H];
      }), P = 0; P < s.length; P++) {
        var B = s[P].id();
        C[B] = [], x[B] = 0, D[B] = 1 / 0;
      }
      for (x[w] = 1, D[w] = 0, E.push(w); !E.empty(); ) {
        var k = E.pop();
        if (T.push(k), i)
          for (var M = 0; M < l[k].length; M++) {
            var L = l[k][M], O = o.getElementById(k), A = void 0;
            O.edgesTo(L).length > 0 ? A = O.edgesTo(L)[0] : A = L.edgesTo(O)[0];
            var R = n(A);
            L = L.id(), D[L] > D[k] + R && (D[L] = D[k] + R, E.nodes.indexOf(L) < 0 ? E.push(L) : E.updateItem(L), x[L] = 0, C[L] = []), D[L] == D[k] + R && (x[L] = x[L] + x[k], C[L].push(k));
          }
        else
          for (var z = 0; z < l[k].length; z++) {
            var F = l[k][z].id();
            D[F] == 1 / 0 && (E.push(F), D[F] = D[k] + 1), D[F] == D[k] + 1 && (x[F] = x[F] + x[k], C[F].push(k));
          }
      }
      for (var q = {}, N = 0; N < s.length; N++)
        q[s[N].id()] = 0;
      for (; T.length > 0; ) {
        for (var V = T.pop(), Y = 0; Y < C[V].length; Y++) {
          var U = C[V][Y];
          q[U] = q[U] + x[U] / x[V] * (1 + q[V]);
        }
        V != s[b].id() && f.set(V, f.get(V) + q[V]);
      }
    }, m = 0; m < s.length; m++)
      g(m);
    var p = {
      betweenness: function(b) {
        var w = o.collection(b).id();
        return f.get(w);
      },
      betweennessNormalized: function(b) {
        if (v == 0)
          return 0;
        var w = o.collection(b).id();
        return f.get(w) / v;
      }
    };
    return p.betweennessNormalised = p.betweennessNormalized, p;
  }
  // betweennessCentrality
};
Mn.bc = Mn.betweennessCentrality;
var Ah = Ze({
  expandFactor: 2,
  // affects time of computation and cluster granularity to some extent: M * M
  inflateFactor: 2,
  // affects cluster granularity (the greater the value, the more clusters): M(i,j) / E(j)
  multFactor: 1,
  // optional self loops for each node. Use a neutral value to improve cluster computations.
  maxIterations: 20,
  // maximum number of iterations of the MCL algorithm in a single run
  attributes: [
    // attributes/features used to group nodes, ie. similarity values between nodes
    function(r) {
      return 1;
    }
  ]
}), Rh = function(e) {
  return Ah(e);
}, Oh = function(e, t) {
  for (var a = 0, n = 0; n < t.length; n++)
    a += t[n](e);
  return a;
}, Ih = function(e, t, a) {
  for (var n = 0; n < t; n++)
    e[n * t + n] = a;
}, cs = function(e, t) {
  for (var a, n = 0; n < t; n++) {
    a = 0;
    for (var i = 0; i < t; i++)
      a += e[i * t + n];
    for (var o = 0; o < t; o++)
      e[o * t + n] = e[o * t + n] / a;
  }
}, zh = function(e, t, a) {
  for (var n = new Array(a * a), i = 0; i < a; i++) {
    for (var o = 0; o < a; o++)
      n[i * a + o] = 0;
    for (var s = 0; s < a; s++)
      for (var l = 0; l < a; l++)
        n[i * a + l] += e[i * a + s] * t[s * a + l];
  }
  return n;
}, Nh = function(e, t, a) {
  for (var n = e.slice(0), i = 1; i < a; i++)
    e = zh(e, n, t);
  return e;
}, Fh = function(e, t, a) {
  for (var n = new Array(t * t), i = 0; i < t * t; i++)
    n[i] = Math.pow(e[i], a);
  return cs(n, t), n;
}, $h = function(e, t, a, n) {
  for (var i = 0; i < a; i++) {
    var o = Math.round(e[i] * Math.pow(10, n)) / Math.pow(10, n), s = Math.round(t[i] * Math.pow(10, n)) / Math.pow(10, n);
    if (o !== s)
      return !1;
  }
  return !0;
}, Vh = function(e, t, a, n) {
  for (var i = [], o = 0; o < t; o++) {
    for (var s = [], l = 0; l < t; l++)
      Math.round(e[o * t + l] * 1e3) / 1e3 > 0 && s.push(a[l]);
    s.length !== 0 && i.push(n.collection(s));
  }
  return i;
}, qh = function(e, t) {
  for (var a = 0; a < e.length; a++)
    if (!t[a] || e[a].id() !== t[a].id())
      return !1;
  return !0;
}, Hh = function(e) {
  for (var t = 0; t < e.length; t++)
    for (var a = 0; a < e.length; a++)
      t != a && qh(e[t], e[a]) && e.splice(a, 1);
  return e;
}, $i = function(e) {
  for (var t = this.nodes(), a = this.edges(), n = this.cy(), i = Rh(e), o = {}, s = 0; s < t.length; s++)
    o[t[s].id()] = s;
  for (var l = t.length, u = l * l, v = new Array(u), f, c = 0; c < u; c++)
    v[c] = 0;
  for (var d = 0; d < a.length; d++) {
    var h = a[d], g = o[h.source().id()], m = o[h.target().id()], p = Oh(h, i.attributes);
    v[g * l + m] += p, v[m * l + g] += p;
  }
  Ih(v, l, i.multFactor), cs(v, l);
  for (var y = !0, b = 0; y && b < i.maxIterations; )
    y = !1, f = Nh(v, l, i.expandFactor), v = Fh(f, l, i.inflateFactor), $h(v, f, u, 4) || (y = !0), b++;
  var w = Vh(v, l, t, n);
  return w = Hh(w), w;
}, Gh = {
  markovClustering: $i,
  mcl: $i
}, Kh = function(e) {
  return e;
}, ds = function(e, t) {
  return Math.abs(t - e);
}, Vi = function(e, t, a) {
  return e + ds(t, a);
}, qi = function(e, t, a) {
  return e + Math.pow(a - t, 2);
}, Wh = function(e) {
  return Math.sqrt(e);
}, Yh = function(e, t, a) {
  return Math.max(e, ds(t, a));
}, Nt = function(e, t, a, n, i) {
  for (var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : Kh, s = n, l, u, v = 0; v < e; v++)
    l = t(v), u = a(v), s = i(s, l, u);
  return o(s);
}, Et = {
  euclidean: function(e, t, a) {
    return e >= 2 ? Nt(e, t, a, 0, qi, Wh) : Nt(e, t, a, 0, Vi);
  },
  squaredEuclidean: function(e, t, a) {
    return Nt(e, t, a, 0, qi);
  },
  manhattan: function(e, t, a) {
    return Nt(e, t, a, 0, Vi);
  },
  max: function(e, t, a) {
    return Nt(e, t, a, -1 / 0, Yh);
  }
};
Et["squared-euclidean"] = Et.squaredEuclidean;
Et.squaredeuclidean = Et.squaredEuclidean;
function rn(r, e, t, a, n, i) {
  var o;
  return ze(r) ? o = r : o = Et[r] || Et.euclidean, e === 0 && ze(r) ? o(n, i) : o(e, t, a, n, i);
}
var Xh = Ze({
  k: 2,
  m: 2,
  sensitivityThreshold: 1e-4,
  distance: "euclidean",
  maxIterations: 10,
  attributes: [],
  testMode: !1,
  testCentroids: null
}), ri = function(e) {
  return Xh(e);
}, Va = function(e, t, a, n, i) {
  var o = i !== "kMedoids", s = o ? function(f) {
    return a[f];
  } : function(f) {
    return n[f](a);
  }, l = function(c) {
    return n[c](t);
  }, u = a, v = t;
  return rn(e, n.length, s, l, u, v);
}, wn = function(e, t, a) {
  for (var n = a.length, i = new Array(n), o = new Array(n), s = new Array(t), l = null, u = 0; u < n; u++)
    i[u] = e.min(a[u]).value, o[u] = e.max(a[u]).value;
  for (var v = 0; v < t; v++) {
    l = [];
    for (var f = 0; f < n; f++)
      l[f] = Math.random() * (o[f] - i[f]) + i[f];
    s[v] = l;
  }
  return s;
}, hs = function(e, t, a, n, i) {
  for (var o = 1 / 0, s = 0, l = 0; l < t.length; l++) {
    var u = Va(a, e, t[l], n, i);
    u < o && (o = u, s = l);
  }
  return s;
}, gs = function(e, t, a) {
  for (var n = [], i = null, o = 0; o < t.length; o++)
    i = t[o], a[i.id()] === e && n.push(i);
  return n;
}, Uh = function(e, t, a) {
  return Math.abs(t - e) <= a;
}, Zh = function(e, t, a) {
  for (var n = 0; n < e.length; n++)
    for (var i = 0; i < e[n].length; i++) {
      var o = Math.abs(e[n][i] - t[n][i]);
      if (o > a)
        return !1;
    }
  return !0;
}, Qh = function(e, t, a) {
  for (var n = 0; n < a; n++)
    if (e === t[n])
      return !0;
  return !1;
}, Hi = function(e, t) {
  var a = new Array(t);
  if (e.length < 50)
    for (var n = 0; n < t; n++) {
      for (var i = e[Math.floor(Math.random() * e.length)]; Qh(i, a, n); )
        i = e[Math.floor(Math.random() * e.length)];
      a[n] = i;
    }
  else
    for (var o = 0; o < t; o++)
      a[o] = e[Math.floor(Math.random() * e.length)];
  return a;
}, Gi = function(e, t, a) {
  for (var n = 0, i = 0; i < t.length; i++)
    n += Va("manhattan", t[i], e, a, "kMedoids");
  return n;
}, _h = function(e) {
  var t = this.cy(), a = this.nodes(), n = null, i = ri(e), o = new Array(i.k), s = {}, l;
  i.testMode ? typeof i.testCentroids == "number" ? (i.testCentroids, l = wn(a, i.k, i.attributes)) : qe(i.testCentroids) === "object" ? l = i.testCentroids : l = wn(a, i.k, i.attributes) : l = wn(a, i.k, i.attributes);
  for (var u = !0, v = 0; u && v < i.maxIterations; ) {
    for (var f = 0; f < a.length; f++)
      n = a[f], s[n.id()] = hs(n, l, i.distance, i.attributes, "kMeans");
    u = !1;
    for (var c = 0; c < i.k; c++) {
      var d = gs(c, a, s);
      if (d.length !== 0) {
        for (var h = i.attributes.length, g = l[c], m = new Array(h), p = new Array(h), y = 0; y < h; y++) {
          p[y] = 0;
          for (var b = 0; b < d.length; b++)
            n = d[b], p[y] += i.attributes[y](n);
          m[y] = p[y] / d.length, Uh(m[y], g[y], i.sensitivityThreshold) || (u = !0);
        }
        l[c] = m, o[c] = t.collection(d);
      }
    }
    v++;
  }
  return o;
}, Jh = function(e) {
  var t = this.cy(), a = this.nodes(), n = null, i = ri(e), o = new Array(i.k), s, l = {}, u, v = new Array(i.k);
  i.testMode ? typeof i.testCentroids == "number" || (qe(i.testCentroids) === "object" ? s = i.testCentroids : s = Hi(a, i.k)) : s = Hi(a, i.k);
  for (var f = !0, c = 0; f && c < i.maxIterations; ) {
    for (var d = 0; d < a.length; d++)
      n = a[d], l[n.id()] = hs(n, s, i.distance, i.attributes, "kMedoids");
    f = !1;
    for (var h = 0; h < s.length; h++) {
      var g = gs(h, a, l);
      if (g.length !== 0) {
        v[h] = Gi(s[h], g, i.attributes);
        for (var m = 0; m < g.length; m++)
          u = Gi(g[m], g, i.attributes), u < v[h] && (v[h] = u, s[h] = g[m], f = !0);
        o[h] = t.collection(g);
      }
    }
    c++;
  }
  return o;
}, jh = function(e, t, a, n, i) {
  for (var o, s, l = 0; l < t.length; l++)
    for (var u = 0; u < e.length; u++)
      n[l][u] = Math.pow(a[l][u], i.m);
  for (var v = 0; v < e.length; v++)
    for (var f = 0; f < i.attributes.length; f++) {
      o = 0, s = 0;
      for (var c = 0; c < t.length; c++)
        o += n[c][v] * i.attributes[f](t[c]), s += n[c][v];
      e[v][f] = o / s;
    }
}, eg = function(e, t, a, n, i) {
  for (var o = 0; o < e.length; o++)
    t[o] = e[o].slice();
  for (var s, l, u, v = 2 / (i.m - 1), f = 0; f < a.length; f++)
    for (var c = 0; c < n.length; c++) {
      s = 0;
      for (var d = 0; d < a.length; d++)
        l = Va(i.distance, n[c], a[f], i.attributes, "cmeans"), u = Va(i.distance, n[c], a[d], i.attributes, "cmeans"), s += Math.pow(l / u, v);
      e[c][f] = 1 / s;
    }
}, rg = function(e, t, a, n) {
  for (var i = new Array(a.k), o = 0; o < i.length; o++)
    i[o] = [];
  for (var s, l, u = 0; u < t.length; u++) {
    s = -1 / 0, l = -1;
    for (var v = 0; v < t[0].length; v++)
      t[u][v] > s && (s = t[u][v], l = v);
    i[l].push(e[u]);
  }
  for (var f = 0; f < i.length; f++)
    i[f] = n.collection(i[f]);
  return i;
}, Ki = function(e) {
  var t = this.cy(), a = this.nodes(), n = ri(e), i, o, s, l, u;
  l = new Array(a.length);
  for (var v = 0; v < a.length; v++)
    l[v] = new Array(n.k);
  s = new Array(a.length);
  for (var f = 0; f < a.length; f++)
    s[f] = new Array(n.k);
  for (var c = 0; c < a.length; c++) {
    for (var d = 0, h = 0; h < n.k; h++)
      s[c][h] = Math.random(), d += s[c][h];
    for (var g = 0; g < n.k; g++)
      s[c][g] = s[c][g] / d;
  }
  o = new Array(n.k);
  for (var m = 0; m < n.k; m++)
    o[m] = new Array(n.attributes.length);
  u = new Array(a.length);
  for (var p = 0; p < a.length; p++)
    u[p] = new Array(n.k);
  for (var y = !0, b = 0; y && b < n.maxIterations; )
    y = !1, jh(o, a, s, u, n), eg(s, l, o, a, n), Zh(s, l, n.sensitivityThreshold) || (y = !0), b++;
  return i = rg(a, s, n, t), {
    clusters: i,
    degreeOfMembership: s
  };
}, tg = {
  kMeans: _h,
  kMedoids: Jh,
  fuzzyCMeans: Ki,
  fcm: Ki
}, ag = Ze({
  distance: "euclidean",
  // distance metric to compare nodes
  linkage: "min",
  // linkage criterion : how to determine the distance between clusters of nodes
  mode: "threshold",
  // mode:'threshold' => clusters must be threshold distance apart
  threshold: 1 / 0,
  // the distance threshold
  // mode:'dendrogram' => the nodes are organised as leaves in a tree (siblings are close), merging makes clusters
  addDendrogram: !1,
  // whether to add the dendrogram to the graph for viz
  dendrogramDepth: 0,
  // depth at which dendrogram branches are merged into the returned clusters
  attributes: []
  // array of attr functions
}), ng = {
  single: "min",
  complete: "max"
}, ig = function(e) {
  var t = ag(e), a = ng[t.linkage];
  return a != null && (t.linkage = a), t;
}, Wi = function(e, t, a, n, i) {
  for (var o = 0, s = 1 / 0, l, u = i.attributes, v = function(E, P) {
    return rn(i.distance, u.length, function(B) {
      return u[B](E);
    }, function(B) {
      return u[B](P);
    }, E, P);
  }, f = 0; f < e.length; f++) {
    var c = e[f].key, d = a[c][n[c]];
    d < s && (o = c, s = d);
  }
  if (i.mode === "threshold" && s >= i.threshold || i.mode === "dendrogram" && e.length === 1)
    return !1;
  var h = t[o], g = t[n[o]], m;
  i.mode === "dendrogram" ? m = {
    left: h,
    right: g,
    key: h.key
  } : m = {
    value: h.value.concat(g.value),
    key: h.key
  }, e[h.index] = m, e.splice(g.index, 1), t[h.key] = m;
  for (var p = 0; p < e.length; p++) {
    var y = e[p];
    h.key === y.key ? l = 1 / 0 : i.linkage === "min" ? (l = a[h.key][y.key], a[h.key][y.key] > a[g.key][y.key] && (l = a[g.key][y.key])) : i.linkage === "max" ? (l = a[h.key][y.key], a[h.key][y.key] < a[g.key][y.key] && (l = a[g.key][y.key])) : i.linkage === "mean" ? l = (a[h.key][y.key] * h.size + a[g.key][y.key] * g.size) / (h.size + g.size) : i.mode === "dendrogram" ? l = v(y.value, h.value) : l = v(y.value[0], h.value[0]), a[h.key][y.key] = a[y.key][h.key] = l;
  }
  for (var b = 0; b < e.length; b++) {
    var w = e[b].key;
    if (n[w] === h.key || n[w] === g.key) {
      for (var T = w, C = 0; C < e.length; C++) {
        var x = e[C].key;
        a[w][x] < a[w][T] && (T = x);
      }
      n[w] = T;
    }
    e[b].index = b;
  }
  return h.key = g.key = h.index = g.index = null, !0;
}, Ea = function r(e, t, a) {
  e && (e.value ? t.push(e.value) : (e.left && r(e.left, t), e.right && r(e.right, t)));
}, og = function r(e, t) {
  if (!e)
    return "";
  if (e.left && e.right) {
    var a = r(e.left, t), n = r(e.right, t), i = t.add({
      group: "nodes",
      data: {
        id: a + "," + n
      }
    });
    return t.add({
      group: "edges",
      data: {
        source: a,
        target: i.id()
      }
    }), t.add({
      group: "edges",
      data: {
        source: n,
        target: i.id()
      }
    }), i.id();
  } else if (e.value)
    return e.value.id();
}, sg = function r(e, t, a) {
  if (!e)
    return [];
  var n = [], i = [], o = [];
  return t === 0 ? (e.left && Ea(e.left, n), e.right && Ea(e.right, i), o = n.concat(i), [a.collection(o)]) : t === 1 ? e.value ? [a.collection(e.value)] : (e.left && Ea(e.left, n), e.right && Ea(e.right, i), [a.collection(n), a.collection(i)]) : e.value ? [a.collection(e.value)] : (e.left && (n = r(e.left, t - 1, a)), e.right && (i = r(e.right, t - 1, a)), n.concat(i));
}, Yi = function(e) {
  for (var t = this.cy(), a = this.nodes(), n = ig(e), i = n.attributes, o = function(b, w) {
    return rn(n.distance, i.length, function(T) {
      return i[T](b);
    }, function(T) {
      return i[T](w);
    }, b, w);
  }, s = [], l = [], u = [], v = [], f = 0; f < a.length; f++) {
    var c = {
      value: n.mode === "dendrogram" ? a[f] : [a[f]],
      key: f,
      index: f
    };
    s[f] = c, v[f] = c, l[f] = [], u[f] = 0;
  }
  for (var d = 0; d < s.length; d++)
    for (var h = 0; h <= d; h++) {
      var g = void 0;
      n.mode === "dendrogram" ? g = d === h ? 1 / 0 : o(s[d].value, s[h].value) : g = d === h ? 1 / 0 : o(s[d].value[0], s[h].value[0]), l[d][h] = g, l[h][d] = g, g < l[d][u[d]] && (u[d] = h);
    }
  for (var m = Wi(s, v, l, u, n); m; )
    m = Wi(s, v, l, u, n);
  var p;
  return n.mode === "dendrogram" ? (p = sg(s[0], n.dendrogramDepth, t), n.addDendrogram && og(s[0], t)) : (p = new Array(s.length), s.forEach(function(y, b) {
    y.key = y.index = null, p[b] = t.collection(y.value);
  })), p;
}, ug = {
  hierarchicalClustering: Yi,
  hca: Yi
}, lg = Ze({
  distance: "euclidean",
  // distance metric to compare attributes between two nodes
  preference: "median",
  // suitability of a data point to serve as an exemplar
  damping: 0.8,
  // damping factor between [0.5, 1)
  maxIterations: 1e3,
  // max number of iterations to run
  minIterations: 100,
  // min number of iterations to run in order for clustering to stop
  attributes: [
    // functions to quantify the similarity between any two points
    // e.g. node => node.data('weight')
  ]
}), vg = function(e) {
  var t = e.damping, a = e.preference;
  0.5 <= t && t < 1 || Fe("Damping must range on [0.5, 1).  Got: ".concat(t));
  var n = ["median", "mean", "min", "max"];
  return n.some(function(i) {
    return i === a;
  }) || ae(a) || Fe("Preference must be one of [".concat(n.map(function(i) {
    return "'".concat(i, "'");
  }).join(", "), "] or a number.  Got: ").concat(a)), lg(e);
}, fg = function(e, t, a, n) {
  var i = function(s, l) {
    return n[l](s);
  };
  return -rn(e, n.length, function(o) {
    return i(t, o);
  }, function(o) {
    return i(a, o);
  }, t, a);
}, cg = function(e, t) {
  var a = null;
  return t === "median" ? a = vh(e) : t === "mean" ? a = lh(e) : t === "min" ? a = sh(e) : t === "max" ? a = uh(e) : a = t, a;
}, dg = function(e, t, a) {
  for (var n = [], i = 0; i < e; i++)
    t[i * e + i] + a[i * e + i] > 0 && n.push(i);
  return n;
}, Xi = function(e, t, a) {
  for (var n = [], i = 0; i < e; i++) {
    for (var o = -1, s = -1 / 0, l = 0; l < a.length; l++) {
      var u = a[l];
      t[i * e + u] > s && (o = u, s = t[i * e + u]);
    }
    o > 0 && n.push(o);
  }
  for (var v = 0; v < a.length; v++)
    n[a[v]] = a[v];
  return n;
}, hg = function(e, t, a) {
  for (var n = Xi(e, t, a), i = 0; i < a.length; i++) {
    for (var o = [], s = 0; s < n.length; s++)
      n[s] === a[i] && o.push(s);
    for (var l = -1, u = -1 / 0, v = 0; v < o.length; v++) {
      for (var f = 0, c = 0; c < o.length; c++)
        f += t[o[c] * e + o[v]];
      f > u && (l = v, u = f);
    }
    a[i] = o[l];
  }
  return n = Xi(e, t, a), n;
}, Ui = function(e) {
  for (var t = this.cy(), a = this.nodes(), n = vg(e), i = {}, o = 0; o < a.length; o++)
    i[a[o].id()] = o;
  var s, l, u, v, f, c;
  s = a.length, l = s * s, u = new Array(l);
  for (var d = 0; d < l; d++)
    u[d] = -1 / 0;
  for (var h = 0; h < s; h++)
    for (var g = 0; g < s; g++)
      h !== g && (u[h * s + g] = fg(n.distance, a[h], a[g], n.attributes));
  v = cg(u, n.preference);
  for (var m = 0; m < s; m++)
    u[m * s + m] = v;
  f = new Array(l);
  for (var p = 0; p < l; p++)
    f[p] = 0;
  c = new Array(l);
  for (var y = 0; y < l; y++)
    c[y] = 0;
  for (var b = new Array(s), w = new Array(s), T = new Array(s), C = 0; C < s; C++)
    b[C] = 0, w[C] = 0, T[C] = 0;
  for (var x = new Array(s * n.minIterations), D = 0; D < x.length; D++)
    x[D] = 0;
  var E;
  for (E = 0; E < n.maxIterations; E++) {
    for (var P = 0; P < s; P++) {
      for (var B = -1 / 0, k = -1 / 0, M = -1, L = 0, O = 0; O < s; O++)
        b[O] = f[P * s + O], L = c[P * s + O] + u[P * s + O], L >= B ? (k = B, B = L, M = O) : L > k && (k = L);
      for (var A = 0; A < s; A++)
        f[P * s + A] = (1 - n.damping) * (u[P * s + A] - B) + n.damping * b[A];
      f[P * s + M] = (1 - n.damping) * (u[P * s + M] - k) + n.damping * b[M];
    }
    for (var R = 0; R < s; R++) {
      for (var z = 0, F = 0; F < s; F++)
        b[F] = c[F * s + R], w[F] = Math.max(0, f[F * s + R]), z += w[F];
      z -= w[R], w[R] = f[R * s + R], z += w[R];
      for (var q = 0; q < s; q++)
        c[q * s + R] = (1 - n.damping) * Math.min(0, z - w[q]) + n.damping * b[q];
      c[R * s + R] = (1 - n.damping) * (z - w[R]) + n.damping * b[R];
    }
    for (var N = 0, V = 0; V < s; V++) {
      var Y = c[V * s + V] + f[V * s + V] > 0 ? 1 : 0;
      x[E % n.minIterations * s + V] = Y, N += Y;
    }
    if (N > 0 && (E >= n.minIterations - 1 || E == n.maxIterations - 1)) {
      for (var U = 0, W = 0; W < s; W++) {
        T[W] = 0;
        for (var H = 0; H < n.minIterations; H++)
          T[W] += x[H * s + W];
        (T[W] === 0 || T[W] === n.minIterations) && U++;
      }
      if (U === s)
        break;
    }
  }
  for (var I = dg(s, f, c), X = hg(s, u, I), Z = {}, j = 0; j < I.length; j++)
    Z[I[j]] = [];
  for (var re = 0; re < a.length; re++) {
    var de = i[a[re].id()], he = X[de];
    he != null && Z[he].push(a[re]);
  }
  for (var te = new Array(I.length), ee = 0; ee < I.length; ee++)
    te[ee] = t.collection(Z[I[ee]]);
  return te;
}, gg = {
  affinityPropagation: Ui,
  ap: Ui
}, pg = Ze({
  root: void 0,
  directed: !1
}), mg = {
  hierholzer: function(e) {
    if (!Ce(e)) {
      var t = arguments;
      e = {
        root: t[0],
        directed: t[1]
      };
    }
    var a = pg(e), n = a.root, i = a.directed, o = this, s = !1, l, u, v;
    n && (v = le(n) ? this.filter(n)[0].id() : n[0].id());
    var f = {}, c = {};
    i ? o.forEach(function(y) {
      var b = y.id();
      if (y.isNode()) {
        var w = y.indegree(!0), T = y.outdegree(!0), C = w - T, x = T - w;
        C == 1 ? l ? s = !0 : l = b : x == 1 ? u ? s = !0 : u = b : (x > 1 || C > 1) && (s = !0), f[b] = [], y.outgoers().forEach(function(D) {
          D.isEdge() && f[b].push(D.id());
        });
      } else
        c[b] = [void 0, y.target().id()];
    }) : o.forEach(function(y) {
      var b = y.id();
      if (y.isNode()) {
        var w = y.degree(!0);
        w % 2 && (l ? u ? s = !0 : u = b : l = b), f[b] = [], y.connectedEdges().forEach(function(T) {
          return f[b].push(T.id());
        });
      } else
        c[b] = [y.source().id(), y.target().id()];
    });
    var d = {
      found: !1,
      trail: void 0
    };
    if (s)
      return d;
    if (u && l)
      if (i) {
        if (v && u != v)
          return d;
        v = u;
      } else {
        if (v && u != v && l != v)
          return d;
        v || (v = u);
      }
    else
      v || (v = o[0].id());
    var h = function(b) {
      for (var w = b, T = [b], C, x, D; f[w].length; )
        C = f[w].shift(), x = c[C][0], D = c[C][1], w != D ? (f[D] = f[D].filter(function(E) {
          return E != C;
        }), w = D) : !i && w != x && (f[x] = f[x].filter(function(E) {
          return E != C;
        }), w = x), T.unshift(C), T.unshift(w);
      return T;
    }, g = [], m = [];
    for (m = h(v); m.length != 1; )
      f[m[0]].length == 0 ? (g.unshift(o.getElementById(m.shift())), g.unshift(o.getElementById(m.shift()))) : m = h(m.shift()).concat(m);
    g.unshift(o.getElementById(m.shift()));
    for (var p in f)
      if (f[p].length)
        return d;
    return d.found = !0, d.trail = this.spawn(g, !0), d;
  }
}, Ca = function() {
  var e = this, t = {}, a = 0, n = 0, i = [], o = [], s = {}, l = function(c, d) {
    for (var h = o.length - 1, g = [], m = e.spawn(); o[h].x != c || o[h].y != d; )
      g.push(o.pop().edge), h--;
    g.push(o.pop().edge), g.forEach(function(p) {
      var y = p.connectedNodes().intersection(e);
      m.merge(p), y.forEach(function(b) {
        var w = b.id(), T = b.connectedEdges().intersection(e);
        m.merge(b), t[w].cutVertex ? m.merge(T.filter(function(C) {
          return C.isLoop();
        })) : m.merge(T);
      });
    }), i.push(m);
  }, u = function f(c, d, h) {
    c === h && (n += 1), t[d] = {
      id: a,
      low: a++,
      cutVertex: !1
    };
    var g = e.getElementById(d).connectedEdges().intersection(e);
    if (g.size() === 0)
      i.push(e.spawn(e.getElementById(d)));
    else {
      var m, p, y, b;
      g.forEach(function(w) {
        m = w.source().id(), p = w.target().id(), y = m === d ? p : m, y !== h && (b = w.id(), s[b] || (s[b] = !0, o.push({
          x: d,
          y,
          edge: w
        })), y in t ? t[d].low = Math.min(t[d].low, t[y].id) : (f(c, y, d), t[d].low = Math.min(t[d].low, t[y].low), t[d].id <= t[y].low && (t[d].cutVertex = !0, l(d, y))));
      });
    }
  };
  e.forEach(function(f) {
    if (f.isNode()) {
      var c = f.id();
      c in t || (n = 0, u(c, c), t[c].cutVertex = n > 1);
    }
  });
  var v = Object.keys(t).filter(function(f) {
    return t[f].cutVertex;
  }).map(function(f) {
    return e.getElementById(f);
  });
  return {
    cut: e.spawn(v),
    components: i
  };
}, yg = {
  hopcroftTarjanBiconnected: Ca,
  htbc: Ca,
  htb: Ca,
  hopcroftTarjanBiconnectedComponents: Ca
}, Sa = function() {
  var e = this, t = {}, a = 0, n = [], i = [], o = e.spawn(e), s = function l(u) {
    i.push(u), t[u] = {
      index: a,
      low: a++,
      explored: !1
    };
    var v = e.getElementById(u).connectedEdges().intersection(e);
    if (v.forEach(function(g) {
      var m = g.target().id();
      m !== u && (m in t || l(m), t[m].explored || (t[u].low = Math.min(t[u].low, t[m].low)));
    }), t[u].index === t[u].low) {
      for (var f = e.spawn(); ; ) {
        var c = i.pop();
        if (f.merge(e.getElementById(c)), t[c].low = t[u].index, t[c].explored = !0, c === u)
          break;
      }
      var d = f.edgesWith(f), h = f.merge(d);
      n.push(h), o = o.difference(h);
    }
  };
  return e.forEach(function(l) {
    if (l.isNode()) {
      var u = l.id();
      u in t || s(u);
    }
  }), {
    cut: o,
    components: n
  };
}, bg = {
  tarjanStronglyConnected: Sa,
  tsc: Sa,
  tscc: Sa,
  tarjanStronglyConnectedComponents: Sa
}, ps = {};
[_t, Zd, Qd, Jd, eh, th, ih, Lh, yt, bt, Mn, Gh, tg, ug, gg, mg, yg, bg].forEach(function(r) {
  ce(ps, r);
});
/*!
Embeddable Minimum Strictly-Compliant Promises/A+ 1.1.1 Thenable
Copyright (c) 2013-2014 Ralf S. Engelschall (http://engelschall.com)
Licensed under The MIT License (http://opensource.org/licenses/MIT)
*/
var ms = 0, ys = 1, bs = 2, Mr = function r(e) {
  if (!(this instanceof r))
    return new r(e);
  this.id = "Thenable/1.0.7", this.state = ms, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], this.proxy = {
    then: this.then.bind(this)
  }, typeof e == "function" && e.call(this, this.fulfill.bind(this), this.reject.bind(this));
};
Mr.prototype = {
  /*  promise resolving methods  */
  fulfill: function(e) {
    return Zi(this, ys, "fulfillValue", e);
  },
  reject: function(e) {
    return Zi(this, bs, "rejectReason", e);
  },
  /*  "The then Method" [Promises/A+ 1.1, 1.2, 2.2]  */
  then: function(e, t) {
    var a = this, n = new Mr();
    return a.onFulfilled.push(_i(e, n, "fulfill")), a.onRejected.push(_i(t, n, "reject")), ws(a), n.proxy;
  }
};
var Zi = function(e, t, a, n) {
  return e.state === ms && (e.state = t, e[a] = n, ws(e)), e;
}, ws = function(e) {
  e.state === ys ? Qi(e, "onFulfilled", e.fulfillValue) : e.state === bs && Qi(e, "onRejected", e.rejectReason);
}, Qi = function(e, t, a) {
  if (e[t].length !== 0) {
    var n = e[t];
    e[t] = [];
    var i = function() {
      for (var s = 0; s < n.length; s++)
        n[s](a);
    };
    typeof setImmediate == "function" ? setImmediate(i) : setTimeout(i, 0);
  }
}, _i = function(e, t, a) {
  return function(n) {
    if (typeof e != "function")
      t[a].call(t, n);
    else {
      var i;
      try {
        i = e(n);
      } catch (o) {
        t.reject(o);
        return;
      }
      wg(t, i);
    }
  };
}, wg = function r(e, t) {
  if (e === t || e.proxy === t) {
    e.reject(new TypeError("cannot resolve promise with itself"));
    return;
  }
  var a;
  if (qe(t) === "object" && t !== null || typeof t == "function")
    try {
      a = t.then;
    } catch (i) {
      e.reject(i);
      return;
    }
  if (typeof a == "function") {
    var n = !1;
    try {
      a.call(
        t,
        /*  resolvePromise  */
        /*  [Promises/A+ 2.3.3.3.1]  */
        function(i) {
          n || (n = !0, i === t ? e.reject(new TypeError("circular thenable chain")) : r(e, i));
        },
        /*  rejectPromise  */
        /*  [Promises/A+ 2.3.3.3.2]  */
        function(i) {
          n || (n = !0, e.reject(i));
        }
      );
    } catch (i) {
      n || e.reject(i);
    }
    return;
  }
  e.fulfill(t);
};
Mr.all = function(r) {
  return new Mr(function(e, t) {
    for (var a = new Array(r.length), n = 0, i = function(l, u) {
      a[l] = u, n++, n === r.length && e(a);
    }, o = 0; o < r.length; o++)
      (function(s) {
        var l = r[s], u = l != null && l.then != null;
        if (u)
          l.then(function(f) {
            i(s, f);
          }, function(f) {
            t(f);
          });
        else {
          var v = l;
          i(s, v);
        }
      })(o);
  });
};
Mr.resolve = function(r) {
  return new Mr(function(e, t) {
    e(r);
  });
};
Mr.reject = function(r) {
  return new Mr(function(e, t) {
    t(r);
  });
};
var Pt = typeof Promise < "u" ? Promise : Mr, An = function(e, t, a) {
  var n = Xn(e), i = !n, o = this._private = ce({
    duration: 1e3
  }, t, a);
  if (o.target = e, o.style = o.style || o.css, o.started = !1, o.playing = !1, o.hooked = !1, o.applying = !1, o.progress = 0, o.completes = [], o.frames = [], o.complete && ze(o.complete) && o.completes.push(o.complete), i) {
    var s = e.position();
    o.startPosition = o.startPosition || {
      x: s.x,
      y: s.y
    }, o.startStyle = o.startStyle || e.cy().style().getAnimationStartStyle(e, o.style);
  }
  if (n) {
    var l = e.pan();
    o.startPan = {
      x: l.x,
      y: l.y
    }, o.startZoom = e.zoom();
  }
  this.length = 1, this[0] = this;
}, rt = An.prototype;
ce(rt, {
  instanceString: function() {
    return "animation";
  },
  hook: function() {
    var e = this._private;
    if (!e.hooked) {
      var t, a = e.target._private.animation;
      e.queue ? t = a.queue : t = a.current, t.push(this), lr(e.target) && e.target.cy().addToAnimationPool(e.target), e.hooked = !0;
    }
    return this;
  },
  play: function() {
    var e = this._private;
    return e.progress === 1 && (e.progress = 0), e.playing = !0, e.started = !1, e.stopped = !1, this.hook(), this;
  },
  playing: function() {
    return this._private.playing;
  },
  apply: function() {
    var e = this._private;
    return e.applying = !0, e.started = !1, e.stopped = !1, this.hook(), this;
  },
  applying: function() {
    return this._private.applying;
  },
  pause: function() {
    var e = this._private;
    return e.playing = !1, e.started = !1, this;
  },
  stop: function() {
    var e = this._private;
    return e.playing = !1, e.started = !1, e.stopped = !0, this;
  },
  rewind: function() {
    return this.progress(0);
  },
  fastforward: function() {
    return this.progress(1);
  },
  time: function(e) {
    var t = this._private;
    return e === void 0 ? t.progress * t.duration : this.progress(e / t.duration);
  },
  progress: function(e) {
    var t = this._private, a = t.playing;
    return e === void 0 ? t.progress : (a && this.pause(), t.progress = e, t.started = !1, a && this.play(), this);
  },
  completed: function() {
    return this._private.progress === 1;
  },
  reverse: function() {
    var e = this._private, t = e.playing;
    t && this.pause(), e.progress = 1 - e.progress, e.started = !1;
    var a = function(u, v) {
      var f = e[u];
      f != null && (e[u] = e[v], e[v] = f);
    };
    if (a("zoom", "startZoom"), a("pan", "startPan"), a("position", "startPosition"), e.style)
      for (var n = 0; n < e.style.length; n++) {
        var i = e.style[n], o = i.name, s = e.startStyle[o];
        e.startStyle[o] = i, e.style[n] = s;
      }
    return t && this.play(), this;
  },
  promise: function(e) {
    var t = this._private, a;
    switch (e) {
      case "frame":
        a = t.frames;
        break;
      default:
      case "complete":
      case "completed":
        a = t.completes;
    }
    return new Pt(function(n, i) {
      a.push(function() {
        n();
      });
    });
  }
});
rt.complete = rt.completed;
rt.run = rt.play;
rt.running = rt.playing;
var xg = {
  animated: function() {
    return function() {
      var t = this, a = t.length !== void 0, n = a ? t : [t], i = this._private.cy || this;
      if (!i.styleEnabled())
        return !1;
      var o = n[0];
      if (o)
        return o._private.animation.current.length > 0;
    };
  },
  // animated
  clearQueue: function() {
    return function() {
      var t = this, a = t.length !== void 0, n = a ? t : [t], i = this._private.cy || this;
      if (!i.styleEnabled())
        return this;
      for (var o = 0; o < n.length; o++) {
        var s = n[o];
        s._private.animation.queue = [];
      }
      return this;
    };
  },
  // clearQueue
  delay: function() {
    return function(t, a) {
      var n = this._private.cy || this;
      return n.styleEnabled() ? this.animate({
        delay: t,
        duration: t,
        complete: a
      }) : this;
    };
  },
  // delay
  delayAnimation: function() {
    return function(t, a) {
      var n = this._private.cy || this;
      return n.styleEnabled() ? this.animation({
        delay: t,
        duration: t,
        complete: a
      }) : this;
    };
  },
  // delay
  animation: function() {
    return function(t, a) {
      var n = this, i = n.length !== void 0, o = i ? n : [n], s = this._private.cy || this, l = !i, u = !l;
      if (!s.styleEnabled())
        return this;
      var v = s.style();
      t = ce({}, t, a);
      var f = Object.keys(t).length === 0;
      if (f)
        return new An(o[0], t);
      switch (t.duration === void 0 && (t.duration = 400), t.duration) {
        case "slow":
          t.duration = 600;
          break;
        case "fast":
          t.duration = 200;
          break;
      }
      if (u && (t.style = v.getPropsList(t.style || t.css), t.css = void 0), u && t.renderedPosition != null) {
        var c = t.renderedPosition, d = s.pan(), h = s.zoom();
        t.position = ns(c, h, d);
      }
      if (l && t.panBy != null) {
        var g = t.panBy, m = s.pan();
        t.pan = {
          x: m.x + g.x,
          y: m.y + g.y
        };
      }
      var p = t.center || t.centre;
      if (l && p != null) {
        var y = s.getCenterPan(p.eles, t.zoom);
        y != null && (t.pan = y);
      }
      if (l && t.fit != null) {
        var b = t.fit, w = s.getFitViewport(b.eles || b.boundingBox, b.padding);
        w != null && (t.pan = w.pan, t.zoom = w.zoom);
      }
      if (l && Ce(t.zoom)) {
        var T = s.getZoomedViewport(t.zoom);
        T != null ? (T.zoomed && (t.zoom = T.zoom), T.panned && (t.pan = T.pan)) : t.zoom = null;
      }
      return new An(o[0], t);
    };
  },
  // animate
  animate: function() {
    return function(t, a) {
      var n = this, i = n.length !== void 0, o = i ? n : [n], s = this._private.cy || this;
      if (!s.styleEnabled())
        return this;
      a && (t = ce({}, t, a));
      for (var l = 0; l < o.length; l++) {
        var u = o[l], v = u.animated() && (t.queue === void 0 || t.queue), f = u.animation(t, v ? {
          queue: !0
        } : void 0);
        f.play();
      }
      return this;
    };
  },
  // animate
  stop: function() {
    return function(t, a) {
      var n = this, i = n.length !== void 0, o = i ? n : [n], s = this._private.cy || this;
      if (!s.styleEnabled())
        return this;
      for (var l = 0; l < o.length; l++) {
        for (var u = o[l], v = u._private, f = v.animation.current, c = 0; c < f.length; c++) {
          var d = f[c], h = d._private;
          a && (h.duration = 0);
        }
        t && (v.animation.queue = []), a || (v.animation.current = []);
      }
      return s.notify("draw"), this;
    };
  }
  // stop
}, Eg = {
  // access data field
  data: function(e) {
    var t = {
      field: "data",
      bindingEvent: "data",
      allowBinding: !1,
      allowSetting: !1,
      allowGetting: !1,
      settingEvent: "data",
      settingTriggersEvent: !1,
      triggerFnName: "trigger",
      immutableKeys: {},
      // key => true if immutable
      updateStyle: !1,
      beforeGet: function(n) {
      },
      beforeSet: function(n, i) {
      },
      onSet: function(n) {
      },
      canSet: function(n) {
        return !0;
      }
    };
    return e = ce({}, t, e), function(n, i) {
      var o = e, s = this, l = s.length !== void 0, u = l ? s : [s], v = l ? s[0] : s;
      if (le(n)) {
        var f = n.indexOf(".") !== -1, c = f && sd.default(n);
        if (o.allowGetting && i === void 0) {
          var d;
          return v && (o.beforeGet(v), c && v._private[o.field][n] === void 0 ? d = id.default(v._private[o.field], c) : d = v._private[o.field][n]), d;
        } else if (o.allowSetting && i !== void 0) {
          var h = !o.immutableKeys[n];
          if (h) {
            var g = Ho({}, n, i);
            o.beforeSet(s, g);
            for (var m = 0, p = u.length; m < p; m++) {
              var y = u[m];
              o.canSet(y) && (c && v._private[o.field][n] === void 0 ? od.default(y._private[o.field], c, i) : y._private[o.field][n] = i);
            }
            o.updateStyle && s.updateStyle(), o.onSet(s), o.settingTriggersEvent && s[o.triggerFnName](o.settingEvent);
          }
        }
      } else if (o.allowSetting && Ce(n)) {
        var b = n, w, T, C = Object.keys(b);
        o.beforeSet(s, b);
        for (var x = 0; x < C.length; x++) {
          w = C[x], T = b[w];
          var D = !o.immutableKeys[w];
          if (D)
            for (var E = 0; E < u.length; E++) {
              var P = u[E];
              o.canSet(P) && (P._private[o.field][w] = T);
            }
        }
        o.updateStyle && s.updateStyle(), o.onSet(s), o.settingTriggersEvent && s[o.triggerFnName](o.settingEvent);
      } else if (o.allowBinding && ze(n)) {
        var B = n;
        s.on(o.bindingEvent, B);
      } else if (o.allowGetting && n === void 0) {
        var k;
        return v && (o.beforeGet(v), k = v._private[o.field]), k;
      }
      return s;
    };
  },
  // data
  // remove data field
  removeData: function(e) {
    var t = {
      field: "data",
      event: "data",
      triggerFnName: "trigger",
      triggerEvent: !1,
      immutableKeys: {}
      // key => true if immutable
    };
    return e = ce({}, t, e), function(n) {
      var i = e, o = this, s = o.length !== void 0, l = s ? o : [o];
      if (le(n)) {
        for (var u = n.split(/\s+/), v = u.length, f = 0; f < v; f++) {
          var c = u[f];
          if (!qr(c)) {
            var d = !i.immutableKeys[c];
            if (d)
              for (var h = 0, g = l.length; h < g; h++)
                l[h]._private[i.field][c] = void 0;
          }
        }
        i.triggerEvent && o[i.triggerFnName](i.event);
      } else if (n === void 0) {
        for (var m = 0, p = l.length; m < p; m++)
          for (var y = l[m]._private[i.field], b = Object.keys(y), w = 0; w < b.length; w++) {
            var T = b[w], C = !i.immutableKeys[T];
            C && (y[T] = void 0);
          }
        i.triggerEvent && o[i.triggerFnName](i.event);
      }
      return o;
    };
  }
  // removeData
}, Cg = {
  eventAliasesOn: function(e) {
    var t = e;
    t.addListener = t.listen = t.bind = t.on, t.unlisten = t.unbind = t.off = t.removeListener, t.trigger = t.emit, t.pon = t.promiseOn = function(a, n) {
      var i = this, o = Array.prototype.slice.call(arguments, 0);
      return new Pt(function(s, l) {
        var u = function(d) {
          i.off.apply(i, f), s(d);
        }, v = o.concat([u]), f = v.concat([]);
        i.on.apply(i, v);
      });
    };
  }
}, ke = {};
[xg, Eg, Cg].forEach(function(r) {
  ce(ke, r);
});
var Sg = {
  animate: ke.animate(),
  animation: ke.animation(),
  animated: ke.animated(),
  clearQueue: ke.clearQueue(),
  delay: ke.delay(),
  delayAnimation: ke.delayAnimation(),
  stop: ke.stop()
}, Ma = {
  classes: function(e) {
    var t = this;
    if (e === void 0) {
      var a = [];
      return t[0]._private.classes.forEach(function(h) {
        return a.push(h);
      }), a;
    } else
      Me(e) || (e = (e || "").match(/\S+/g) || []);
    for (var n = [], i = new kt(e), o = 0; o < t.length; o++) {
      for (var s = t[o], l = s._private, u = l.classes, v = !1, f = 0; f < e.length; f++) {
        var c = e[f], d = u.has(c);
        if (!d) {
          v = !0;
          break;
        }
      }
      v || (v = u.size !== e.length), v && (l.classes = i, n.push(s));
    }
    return n.length > 0 && this.spawn(n).updateStyle().emit("class"), t;
  },
  addClass: function(e) {
    return this.toggleClass(e, !0);
  },
  hasClass: function(e) {
    var t = this[0];
    return t != null && t._private.classes.has(e);
  },
  toggleClass: function(e, t) {
    Me(e) || (e = e.match(/\S+/g) || []);
    for (var a = this, n = t === void 0, i = [], o = 0, s = a.length; o < s; o++)
      for (var l = a[o], u = l._private.classes, v = !1, f = 0; f < e.length; f++) {
        var c = e[f], d = u.has(c), h = !1;
        t || n && !d ? (u.add(c), h = !0) : (!t || n && d) && (u.delete(c), h = !0), !v && h && (i.push(l), v = !0);
      }
    return i.length > 0 && this.spawn(i).updateStyle().emit("class"), a;
  },
  removeClass: function(e) {
    return this.toggleClass(e, !1);
  },
  flashClass: function(e, t) {
    var a = this;
    if (t == null)
      t = 250;
    else if (t === 0)
      return a;
    return a.addClass(e), setTimeout(function() {
      a.removeClass(e);
    }, t), a;
  }
};
Ma.className = Ma.classNames = Ma.classes;
var Ee = {
  metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
  // chars we need to escape in let names, etc
  comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
  // binary comparison op (used in data selectors)
  boolOp: "\\?|\\!|\\^",
  // boolean (unary) operators (used in data selectors)
  string: `"(?:\\\\"|[^"])*"|'(?:\\\\'|[^'])*'`,
  // string literals (used in data selectors) -- doublequotes | singlequotes
  number: Ve,
  // number literal (used in data selectors) --- e.g. 0.1234, 1234, 12e123
  meta: "degree|indegree|outdegree",
  // allowed metadata fields (i.e. allowed functions to use from Collection)
  separator: "\\s*,\\s*",
  // queries are separated by commas, e.g. edge[foo = 'bar'], node.someClass
  descendant: "\\s+",
  child: "\\s+>\\s+",
  subject: "\\$",
  group: "node|edge|\\*",
  directedEdge: "\\s+->\\s+",
  undirectedEdge: "\\s+<->\\s+"
};
Ee.variable = "(?:[\\w-.]|(?:\\\\" + Ee.metaChar + "))+";
Ee.className = "(?:[\\w-]|(?:\\\\" + Ee.metaChar + "))+";
Ee.value = Ee.string + "|" + Ee.number;
Ee.id = Ee.variable;
(function() {
  var r, e, t;
  for (r = Ee.comparatorOp.split("|"), t = 0; t < r.length; t++)
    e = r[t], Ee.comparatorOp += "|@" + e;
  for (r = Ee.comparatorOp.split("|"), t = 0; t < r.length; t++)
    e = r[t], !(e.indexOf("!") >= 0) && e !== "=" && (Ee.comparatorOp += "|\\!" + e);
})();
var Le = function() {
  return {
    checks: []
  };
}, ie = {
  /** E.g. node */
  GROUP: 0,
  /** A collection of elements */
  COLLECTION: 1,
  /** A filter(ele) function */
  FILTER: 2,
  /** E.g. [foo > 1] */
  DATA_COMPARE: 3,
  /** E.g. [foo] */
  DATA_EXIST: 4,
  /** E.g. [?foo] */
  DATA_BOOL: 5,
  /** E.g. [[degree > 2]] */
  META_COMPARE: 6,
  /** E.g. :selected */
  STATE: 7,
  /** E.g. #foo */
  ID: 8,
  /** E.g. .foo */
  CLASS: 9,
  /** E.g. #foo <-> #bar */
  UNDIRECTED_EDGE: 10,
  /** E.g. #foo -> #bar */
  DIRECTED_EDGE: 11,
  /** E.g. $#foo -> #bar */
  NODE_SOURCE: 12,
  /** E.g. #foo -> $#bar */
  NODE_TARGET: 13,
  /** E.g. $#foo <-> #bar */
  NODE_NEIGHBOR: 14,
  /** E.g. #foo > #bar */
  CHILD: 15,
  /** E.g. #foo #bar */
  DESCENDANT: 16,
  /** E.g. $#foo > #bar */
  PARENT: 17,
  /** E.g. $#foo #bar */
  ANCESTOR: 18,
  /** E.g. #foo > $bar > #baz */
  COMPOUND_SPLIT: 19,
  /** Always matches, useful placeholder for subject in `COMPOUND_SPLIT` */
  TRUE: 20
}, Rn = [{
  selector: ":selected",
  matches: function(e) {
    return e.selected();
  }
}, {
  selector: ":unselected",
  matches: function(e) {
    return !e.selected();
  }
}, {
  selector: ":selectable",
  matches: function(e) {
    return e.selectable();
  }
}, {
  selector: ":unselectable",
  matches: function(e) {
    return !e.selectable();
  }
}, {
  selector: ":locked",
  matches: function(e) {
    return e.locked();
  }
}, {
  selector: ":unlocked",
  matches: function(e) {
    return !e.locked();
  }
}, {
  selector: ":visible",
  matches: function(e) {
    return e.visible();
  }
}, {
  selector: ":hidden",
  matches: function(e) {
    return !e.visible();
  }
}, {
  selector: ":transparent",
  matches: function(e) {
    return e.transparent();
  }
}, {
  selector: ":grabbed",
  matches: function(e) {
    return e.grabbed();
  }
}, {
  selector: ":free",
  matches: function(e) {
    return !e.grabbed();
  }
}, {
  selector: ":removed",
  matches: function(e) {
    return e.removed();
  }
}, {
  selector: ":inside",
  matches: function(e) {
    return !e.removed();
  }
}, {
  selector: ":grabbable",
  matches: function(e) {
    return e.grabbable();
  }
}, {
  selector: ":ungrabbable",
  matches: function(e) {
    return !e.grabbable();
  }
}, {
  selector: ":animated",
  matches: function(e) {
    return e.animated();
  }
}, {
  selector: ":unanimated",
  matches: function(e) {
    return !e.animated();
  }
}, {
  selector: ":parent",
  matches: function(e) {
    return e.isParent();
  }
}, {
  selector: ":childless",
  matches: function(e) {
    return e.isChildless();
  }
}, {
  selector: ":child",
  matches: function(e) {
    return e.isChild();
  }
}, {
  selector: ":orphan",
  matches: function(e) {
    return e.isOrphan();
  }
}, {
  selector: ":nonorphan",
  matches: function(e) {
    return e.isChild();
  }
}, {
  selector: ":compound",
  matches: function(e) {
    return e.isNode() ? e.isParent() : e.source().isParent() || e.target().isParent();
  }
}, {
  selector: ":loop",
  matches: function(e) {
    return e.isLoop();
  }
}, {
  selector: ":simple",
  matches: function(e) {
    return e.isSimple();
  }
}, {
  selector: ":active",
  matches: function(e) {
    return e.active();
  }
}, {
  selector: ":inactive",
  matches: function(e) {
    return !e.active();
  }
}, {
  selector: ":backgrounding",
  matches: function(e) {
    return e.backgrounding();
  }
}, {
  selector: ":nonbackgrounding",
  matches: function(e) {
    return !e.backgrounding();
  }
}].sort(function(r, e) {
  return Pd(r.selector, e.selector);
}), Tg = function() {
  for (var r = {}, e, t = 0; t < Rn.length; t++)
    e = Rn[t], r[e.selector] = e.matches;
  return r;
}(), Dg = function(e, t) {
  return Tg[e](t);
}, kg = "(" + Rn.map(function(r) {
  return r.selector;
}).join("|") + ")", lt = function(e) {
  return e.replace(new RegExp("\\\\(" + Ee.metaChar + ")", "g"), function(t, a) {
    return a;
  });
}, zr = function(e, t, a) {
  e[e.length - 1] = a;
}, On = [{
  name: "group",
  // just used for identifying when debugging
  query: !0,
  regex: "(" + Ee.group + ")",
  populate: function(e, t, a) {
    var n = Pr(a, 1), i = n[0];
    t.checks.push({
      type: ie.GROUP,
      value: i === "*" ? i : i + "s"
    });
  }
}, {
  name: "state",
  query: !0,
  regex: kg,
  populate: function(e, t, a) {
    var n = Pr(a, 1), i = n[0];
    t.checks.push({
      type: ie.STATE,
      value: i
    });
  }
}, {
  name: "id",
  query: !0,
  regex: "\\#(" + Ee.id + ")",
  populate: function(e, t, a) {
    var n = Pr(a, 1), i = n[0];
    t.checks.push({
      type: ie.ID,
      value: lt(i)
    });
  }
}, {
  name: "className",
  query: !0,
  regex: "\\.(" + Ee.className + ")",
  populate: function(e, t, a) {
    var n = Pr(a, 1), i = n[0];
    t.checks.push({
      type: ie.CLASS,
      value: lt(i)
    });
  }
}, {
  name: "dataExists",
  query: !0,
  regex: "\\[\\s*(" + Ee.variable + ")\\s*\\]",
  populate: function(e, t, a) {
    var n = Pr(a, 1), i = n[0];
    t.checks.push({
      type: ie.DATA_EXIST,
      field: lt(i)
    });
  }
}, {
  name: "dataCompare",
  query: !0,
  regex: "\\[\\s*(" + Ee.variable + ")\\s*(" + Ee.comparatorOp + ")\\s*(" + Ee.value + ")\\s*\\]",
  populate: function(e, t, a) {
    var n = Pr(a, 3), i = n[0], o = n[1], s = n[2], l = new RegExp("^" + Ee.string + "$").exec(s) != null;
    l ? s = s.substring(1, s.length - 1) : s = parseFloat(s), t.checks.push({
      type: ie.DATA_COMPARE,
      field: lt(i),
      operator: o,
      value: s
    });
  }
}, {
  name: "dataBool",
  query: !0,
  regex: "\\[\\s*(" + Ee.boolOp + ")\\s*(" + Ee.variable + ")\\s*\\]",
  populate: function(e, t, a) {
    var n = Pr(a, 2), i = n[0], o = n[1];
    t.checks.push({
      type: ie.DATA_BOOL,
      field: lt(o),
      operator: i
    });
  }
}, {
  name: "metaCompare",
  query: !0,
  regex: "\\[\\[\\s*(" + Ee.meta + ")\\s*(" + Ee.comparatorOp + ")\\s*(" + Ee.number + ")\\s*\\]\\]",
  populate: function(e, t, a) {
    var n = Pr(a, 3), i = n[0], o = n[1], s = n[2];
    t.checks.push({
      type: ie.META_COMPARE,
      field: lt(i),
      operator: o,
      value: parseFloat(s)
    });
  }
}, {
  name: "nextQuery",
  separator: !0,
  regex: Ee.separator,
  populate: function(e, t) {
    var a = e.currentSubject, n = e.edgeCount, i = e.compoundCount, o = e[e.length - 1];
    a != null && (o.subject = a, e.currentSubject = null), o.edgeCount = n, o.compoundCount = i, e.edgeCount = 0, e.compoundCount = 0;
    var s = e[e.length++] = Le();
    return s;
  }
}, {
  name: "directedEdge",
  separator: !0,
  regex: Ee.directedEdge,
  populate: function(e, t) {
    if (e.currentSubject == null) {
      var a = Le(), n = t, i = Le();
      return a.checks.push({
        type: ie.DIRECTED_EDGE,
        source: n,
        target: i
      }), zr(e, t, a), e.edgeCount++, i;
    } else {
      var o = Le(), s = t, l = Le();
      return o.checks.push({
        type: ie.NODE_SOURCE,
        source: s,
        target: l
      }), zr(e, t, o), e.edgeCount++, l;
    }
  }
}, {
  name: "undirectedEdge",
  separator: !0,
  regex: Ee.undirectedEdge,
  populate: function(e, t) {
    if (e.currentSubject == null) {
      var a = Le(), n = t, i = Le();
      return a.checks.push({
        type: ie.UNDIRECTED_EDGE,
        nodes: [n, i]
      }), zr(e, t, a), e.edgeCount++, i;
    } else {
      var o = Le(), s = t, l = Le();
      return o.checks.push({
        type: ie.NODE_NEIGHBOR,
        node: s,
        neighbor: l
      }), zr(e, t, o), l;
    }
  }
}, {
  name: "child",
  separator: !0,
  regex: Ee.child,
  populate: function(e, t) {
    if (e.currentSubject == null) {
      var a = Le(), n = Le(), i = e[e.length - 1];
      return a.checks.push({
        type: ie.CHILD,
        parent: i,
        child: n
      }), zr(e, t, a), e.compoundCount++, n;
    } else if (e.currentSubject === t) {
      var o = Le(), s = e[e.length - 1], l = Le(), u = Le(), v = Le(), f = Le();
      return o.checks.push({
        type: ie.COMPOUND_SPLIT,
        left: s,
        right: l,
        subject: u
      }), u.checks = t.checks, t.checks = [{
        type: ie.TRUE
      }], f.checks.push({
        type: ie.TRUE
      }), l.checks.push({
        type: ie.PARENT,
        // type is swapped on right side queries
        parent: f,
        child: v
        // empty for now
      }), zr(e, s, o), e.currentSubject = u, e.compoundCount++, v;
    } else {
      var c = Le(), d = Le(), h = [{
        type: ie.PARENT,
        parent: c,
        child: d
      }];
      return c.checks = t.checks, t.checks = h, e.compoundCount++, d;
    }
  }
}, {
  name: "descendant",
  separator: !0,
  regex: Ee.descendant,
  populate: function(e, t) {
    if (e.currentSubject == null) {
      var a = Le(), n = Le(), i = e[e.length - 1];
      return a.checks.push({
        type: ie.DESCENDANT,
        ancestor: i,
        descendant: n
      }), zr(e, t, a), e.compoundCount++, n;
    } else if (e.currentSubject === t) {
      var o = Le(), s = e[e.length - 1], l = Le(), u = Le(), v = Le(), f = Le();
      return o.checks.push({
        type: ie.COMPOUND_SPLIT,
        left: s,
        right: l,
        subject: u
      }), u.checks = t.checks, t.checks = [{
        type: ie.TRUE
      }], f.checks.push({
        type: ie.TRUE
      }), l.checks.push({
        type: ie.ANCESTOR,
        // type is swapped on right side queries
        ancestor: f,
        descendant: v
        // empty for now
      }), zr(e, s, o), e.currentSubject = u, e.compoundCount++, v;
    } else {
      var c = Le(), d = Le(), h = [{
        type: ie.ANCESTOR,
        ancestor: c,
        descendant: d
      }];
      return c.checks = t.checks, t.checks = h, e.compoundCount++, d;
    }
  }
}, {
  name: "subject",
  modifier: !0,
  regex: Ee.subject,
  populate: function(e, t) {
    if (e.currentSubject != null && e.currentSubject !== t)
      return Pe("Redefinition of subject in selector `" + e.toString() + "`"), !1;
    e.currentSubject = t;
    var a = e[e.length - 1], n = a.checks[0], i = n == null ? null : n.type;
    i === ie.DIRECTED_EDGE ? n.type = ie.NODE_TARGET : i === ie.UNDIRECTED_EDGE && (n.type = ie.NODE_NEIGHBOR, n.node = n.nodes[1], n.neighbor = n.nodes[0], n.nodes = null);
  }
}];
On.forEach(function(r) {
  return r.regexObj = new RegExp("^" + r.regex);
});
var Pg = function(e) {
  for (var t, a, n, i = 0; i < On.length; i++) {
    var o = On[i], s = o.name, l = e.match(o.regexObj);
    if (l != null) {
      a = l, t = o, n = s;
      var u = l[0];
      e = e.substring(u.length);
      break;
    }
  }
  return {
    expr: t,
    match: a,
    name: n,
    remaining: e
  };
}, Bg = function(e) {
  var t = e.match(/^\s+/);
  if (t) {
    var a = t[0];
    e = e.substring(a.length);
  }
  return e;
}, Lg = function(e) {
  var t = this, a = t.inputText = e, n = t[0] = Le();
  for (t.length = 1, a = Bg(a); ; ) {
    var i = Pg(a);
    if (i.expr == null)
      return Pe("The selector `" + e + "`is invalid"), !1;
    var o = i.match.slice(1), s = i.expr.populate(t, n, o);
    if (s === !1)
      return !1;
    if (s != null && (n = s), a = i.remaining, a.match(/^\s*$/))
      break;
  }
  var l = t[t.length - 1];
  t.currentSubject != null && (l.subject = t.currentSubject), l.edgeCount = t.edgeCount, l.compoundCount = t.compoundCount;
  for (var u = 0; u < t.length; u++) {
    var v = t[u];
    if (v.compoundCount > 0 && v.edgeCount > 0)
      return Pe("The selector `" + e + "` is invalid because it uses both a compound selector and an edge selector"), !1;
    if (v.edgeCount > 1)
      return Pe("The selector `" + e + "` is invalid because it uses multiple edge selectors"), !1;
    v.edgeCount === 1 && Pe("The selector `" + e + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
  }
  return !0;
}, Mg = function() {
  if (this.toStringCache != null)
    return this.toStringCache;
  for (var e = function(v) {
    return v ?? "";
  }, t = function(v) {
    return le(v) ? '"' + v + '"' : e(v);
  }, a = function(v) {
    return " " + v + " ";
  }, n = function(v, f) {
    var c = v.type, d = v.value;
    switch (c) {
      case ie.GROUP: {
        var h = e(d);
        return h.substring(0, h.length - 1);
      }
      case ie.DATA_COMPARE: {
        var g = v.field, m = v.operator;
        return "[" + g + a(e(m)) + t(d) + "]";
      }
      case ie.DATA_BOOL: {
        var p = v.operator, y = v.field;
        return "[" + e(p) + y + "]";
      }
      case ie.DATA_EXIST: {
        var b = v.field;
        return "[" + b + "]";
      }
      case ie.META_COMPARE: {
        var w = v.operator, T = v.field;
        return "[[" + T + a(e(w)) + t(d) + "]]";
      }
      case ie.STATE:
        return d;
      case ie.ID:
        return "#" + d;
      case ie.CLASS:
        return "." + d;
      case ie.PARENT:
      case ie.CHILD:
        return i(v.parent, f) + a(">") + i(v.child, f);
      case ie.ANCESTOR:
      case ie.DESCENDANT:
        return i(v.ancestor, f) + " " + i(v.descendant, f);
      case ie.COMPOUND_SPLIT: {
        var C = i(v.left, f), x = i(v.subject, f), D = i(v.right, f);
        return C + (C.length > 0 ? " " : "") + x + D;
      }
      case ie.TRUE:
        return "";
    }
  }, i = function(v, f) {
    return v.checks.reduce(function(c, d, h) {
      return c + (f === v && h === 0 ? "$" : "") + n(d, f);
    }, "");
  }, o = "", s = 0; s < this.length; s++) {
    var l = this[s];
    o += i(l, l.subject), this.length > 1 && s < this.length - 1 && (o += ", ");
  }
  return this.toStringCache = o, o;
}, Ag = {
  parse: Lg,
  toString: Mg
}, xs = function(e, t, a) {
  var n, i = le(e), o = ae(e), s = le(a), l, u, v = !1, f = !1, c = !1;
  switch (t.indexOf("!") >= 0 && (t = t.replace("!", ""), f = !0), t.indexOf("@") >= 0 && (t = t.replace("@", ""), v = !0), (i || s || v) && (l = !i && !o ? "" : "" + e, u = "" + a), v && (e = l = l.toLowerCase(), a = u = u.toLowerCase()), t) {
    case "*=":
      n = l.indexOf(u) >= 0;
      break;
    case "$=":
      n = l.indexOf(u, l.length - u.length) >= 0;
      break;
    case "^=":
      n = l.indexOf(u) === 0;
      break;
    case "=":
      n = e === a;
      break;
    case ">":
      c = !0, n = e > a;
      break;
    case ">=":
      c = !0, n = e >= a;
      break;
    case "<":
      c = !0, n = e < a;
      break;
    case "<=":
      c = !0, n = e <= a;
      break;
    default:
      n = !1;
      break;
  }
  return f && (e != null || !c) && (n = !n), n;
}, Rg = function(e, t) {
  switch (t) {
    case "?":
      return !!e;
    case "!":
      return !e;
    case "^":
      return e === void 0;
  }
}, Og = function(e) {
  return e !== void 0;
}, ti = function(e, t) {
  return e.data(t);
}, Ig = function(e, t) {
  return e[t]();
}, $e = [], Oe = function(e, t) {
  return e.checks.every(function(a) {
    return $e[a.type](a, t);
  });
};
$e[ie.GROUP] = function(r, e) {
  var t = r.value;
  return t === "*" || t === e.group();
};
$e[ie.STATE] = function(r, e) {
  var t = r.value;
  return Dg(t, e);
};
$e[ie.ID] = function(r, e) {
  var t = r.value;
  return e.id() === t;
};
$e[ie.CLASS] = function(r, e) {
  var t = r.value;
  return e.hasClass(t);
};
$e[ie.META_COMPARE] = function(r, e) {
  var t = r.field, a = r.operator, n = r.value;
  return xs(Ig(e, t), a, n);
};
$e[ie.DATA_COMPARE] = function(r, e) {
  var t = r.field, a = r.operator, n = r.value;
  return xs(ti(e, t), a, n);
};
$e[ie.DATA_BOOL] = function(r, e) {
  var t = r.field, a = r.operator;
  return Rg(ti(e, t), a);
};
$e[ie.DATA_EXIST] = function(r, e) {
  var t = r.field;
  return r.operator, Og(ti(e, t));
};
$e[ie.UNDIRECTED_EDGE] = function(r, e) {
  var t = r.nodes[0], a = r.nodes[1], n = e.source(), i = e.target();
  return Oe(t, n) && Oe(a, i) || Oe(a, n) && Oe(t, i);
};
$e[ie.NODE_NEIGHBOR] = function(r, e) {
  return Oe(r.node, e) && e.neighborhood().some(function(t) {
    return t.isNode() && Oe(r.neighbor, t);
  });
};
$e[ie.DIRECTED_EDGE] = function(r, e) {
  return Oe(r.source, e.source()) && Oe(r.target, e.target());
};
$e[ie.NODE_SOURCE] = function(r, e) {
  return Oe(r.source, e) && e.outgoers().some(function(t) {
    return t.isNode() && Oe(r.target, t);
  });
};
$e[ie.NODE_TARGET] = function(r, e) {
  return Oe(r.target, e) && e.incomers().some(function(t) {
    return t.isNode() && Oe(r.source, t);
  });
};
$e[ie.CHILD] = function(r, e) {
  return Oe(r.child, e) && Oe(r.parent, e.parent());
};
$e[ie.PARENT] = function(r, e) {
  return Oe(r.parent, e) && e.children().some(function(t) {
    return Oe(r.child, t);
  });
};
$e[ie.DESCENDANT] = function(r, e) {
  return Oe(r.descendant, e) && e.ancestors().some(function(t) {
    return Oe(r.ancestor, t);
  });
};
$e[ie.ANCESTOR] = function(r, e) {
  return Oe(r.ancestor, e) && e.descendants().some(function(t) {
    return Oe(r.descendant, t);
  });
};
$e[ie.COMPOUND_SPLIT] = function(r, e) {
  return Oe(r.subject, e) && Oe(r.left, e) && Oe(r.right, e);
};
$e[ie.TRUE] = function() {
  return !0;
};
$e[ie.COLLECTION] = function(r, e) {
  var t = r.value;
  return t.has(e);
};
$e[ie.FILTER] = function(r, e) {
  var t = r.value;
  return t(e);
};
var zg = function(e) {
  var t = this;
  if (t.length === 1 && t[0].checks.length === 1 && t[0].checks[0].type === ie.ID)
    return e.getElementById(t[0].checks[0].value).collection();
  var a = function(i) {
    for (var o = 0; o < t.length; o++) {
      var s = t[o];
      if (Oe(s, i))
        return !0;
    }
    return !1;
  };
  return t.text() == null && (a = function() {
    return !0;
  }), e.filter(a);
}, Ng = function(e) {
  for (var t = this, a = 0; a < t.length; a++) {
    var n = t[a];
    if (Oe(n, e))
      return !0;
  }
  return !1;
}, Fg = {
  matches: Ng,
  filter: zg
}, Gr = function(e) {
  this.inputText = e, this.currentSubject = null, this.compoundCount = 0, this.edgeCount = 0, this.length = 0, e == null || le(e) && e.match(/^\s*$/) || (lr(e) ? this.addQuery({
    checks: [{
      type: ie.COLLECTION,
      value: e.collection()
    }]
  }) : ze(e) ? this.addQuery({
    checks: [{
      type: ie.FILTER,
      value: e
    }]
  }) : le(e) ? this.parse(e) || (this.invalid = !0) : Fe("A selector must be created from a string; found "));
}, Kr = Gr.prototype;
[Ag, Fg].forEach(function(r) {
  return ce(Kr, r);
});
Kr.text = function() {
  return this.inputText;
};
Kr.size = function() {
  return this.length;
};
Kr.eq = function(r) {
  return this[r];
};
Kr.sameText = function(r) {
  return !this.invalid && !r.invalid && this.text() === r.text();
};
Kr.addQuery = function(r) {
  this[this.length++] = r;
};
Kr.selector = Kr.toString;
var $r = {
  allAre: function(e) {
    var t = new Gr(e);
    return this.every(function(a) {
      return t.matches(a);
    });
  },
  is: function(e) {
    var t = new Gr(e);
    return this.some(function(a) {
      return t.matches(a);
    });
  },
  some: function(e, t) {
    for (var a = 0; a < this.length; a++) {
      var n = t ? e.apply(t, [this[a], a, this]) : e(this[a], a, this);
      if (n)
        return !0;
    }
    return !1;
  },
  every: function(e, t) {
    for (var a = 0; a < this.length; a++) {
      var n = t ? e.apply(t, [this[a], a, this]) : e(this[a], a, this);
      if (!n)
        return !1;
    }
    return !0;
  },
  same: function(e) {
    if (this === e)
      return !0;
    e = this.cy().collection(e);
    var t = this.length, a = e.length;
    return t !== a ? !1 : t === 1 ? this[0] === e[0] : this.every(function(n) {
      return e.hasElementWithId(n.id());
    });
  },
  anySame: function(e) {
    return e = this.cy().collection(e), this.some(function(t) {
      return e.hasElementWithId(t.id());
    });
  },
  allAreNeighbors: function(e) {
    e = this.cy().collection(e);
    var t = this.neighborhood();
    return e.every(function(a) {
      return t.hasElementWithId(a.id());
    });
  },
  contains: function(e) {
    e = this.cy().collection(e);
    var t = this;
    return e.every(function(a) {
      return t.hasElementWithId(a.id());
    });
  }
};
$r.allAreNeighbours = $r.allAreNeighbors;
$r.has = $r.contains;
$r.equal = $r.equals = $r.same;
var dr = function(e, t) {
  return function(n, i, o, s) {
    var l = n, u = this, v;
    if (l == null ? v = "" : lr(l) && l.length === 1 && (v = l.id()), u.length === 1 && v) {
      var f = u[0]._private, c = f.traversalCache = f.traversalCache || {}, d = c[t] = c[t] || [], h = jr(v), g = d[h];
      return g || (d[h] = e.call(u, n, i, o, s));
    } else
      return e.call(u, n, i, o, s);
  };
}, Ct = {
  parent: function(e) {
    var t = [];
    if (this.length === 1) {
      var a = this[0]._private.parent;
      if (a)
        return a;
    }
    for (var n = 0; n < this.length; n++) {
      var i = this[n], o = i._private.parent;
      o && t.push(o);
    }
    return this.spawn(t, !0).filter(e);
  },
  parents: function(e) {
    for (var t = [], a = this.parent(); a.nonempty(); ) {
      for (var n = 0; n < a.length; n++) {
        var i = a[n];
        t.push(i);
      }
      a = a.parent();
    }
    return this.spawn(t, !0).filter(e);
  },
  commonAncestors: function(e) {
    for (var t, a = 0; a < this.length; a++) {
      var n = this[a], i = n.parents();
      t = t || i, t = t.intersect(i);
    }
    return t.filter(e);
  },
  orphans: function(e) {
    return this.stdFilter(function(t) {
      return t.isOrphan();
    }).filter(e);
  },
  nonorphans: function(e) {
    return this.stdFilter(function(t) {
      return t.isChild();
    }).filter(e);
  },
  children: dr(function(r) {
    for (var e = [], t = 0; t < this.length; t++)
      for (var a = this[t], n = a._private.children, i = 0; i < n.length; i++)
        e.push(n[i]);
    return this.spawn(e, !0).filter(r);
  }, "children"),
  siblings: function(e) {
    return this.parent().children().not(this).filter(e);
  },
  isParent: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.children.length !== 0;
  },
  isChildless: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.children.length === 0;
  },
  isChild: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.parent != null;
  },
  isOrphan: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.parent == null;
  },
  descendants: function(e) {
    var t = [];
    function a(n) {
      for (var i = 0; i < n.length; i++) {
        var o = n[i];
        t.push(o), o.children().nonempty() && a(o.children());
      }
    }
    return a(this.children()), this.spawn(t, !0).filter(e);
  }
};
function ai(r, e, t, a) {
  for (var n = [], i = new kt(), o = r.cy(), s = o.hasCompoundNodes(), l = 0; l < r.length; l++) {
    var u = r[l];
    t ? n.push(u) : s && a(n, i, u);
  }
  for (; n.length > 0; ) {
    var v = n.shift();
    e(v), i.add(v.id()), s && a(n, i, v);
  }
  return r;
}
function Es(r, e, t) {
  if (t.isParent())
    for (var a = t._private.children, n = 0; n < a.length; n++) {
      var i = a[n];
      e.has(i.id()) || r.push(i);
    }
}
Ct.forEachDown = function(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return ai(this, r, e, Es);
};
function Cs(r, e, t) {
  if (t.isChild()) {
    var a = t._private.parent;
    e.has(a.id()) || r.push(a);
  }
}
Ct.forEachUp = function(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return ai(this, r, e, Cs);
};
function $g(r, e, t) {
  Cs(r, e, t), Es(r, e, t);
}
Ct.forEachUpAndDown = function(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return ai(this, r, e, $g);
};
Ct.ancestors = Ct.parents;
var ea, Ss;
ea = Ss = {
  data: ke.data({
    field: "data",
    bindingEvent: "data",
    allowBinding: !0,
    allowSetting: !0,
    settingEvent: "data",
    settingTriggersEvent: !0,
    triggerFnName: "trigger",
    allowGetting: !0,
    immutableKeys: {
      id: !0,
      source: !0,
      target: !0,
      parent: !0
    },
    updateStyle: !0
  }),
  removeData: ke.removeData({
    field: "data",
    event: "data",
    triggerFnName: "trigger",
    triggerEvent: !0,
    immutableKeys: {
      id: !0,
      source: !0,
      target: !0,
      parent: !0
    },
    updateStyle: !0
  }),
  scratch: ke.data({
    field: "scratch",
    bindingEvent: "scratch",
    allowBinding: !0,
    allowSetting: !0,
    settingEvent: "scratch",
    settingTriggersEvent: !0,
    triggerFnName: "trigger",
    allowGetting: !0,
    updateStyle: !0
  }),
  removeScratch: ke.removeData({
    field: "scratch",
    event: "scratch",
    triggerFnName: "trigger",
    triggerEvent: !0,
    updateStyle: !0
  }),
  rscratch: ke.data({
    field: "rscratch",
    allowBinding: !1,
    allowSetting: !0,
    settingTriggersEvent: !1,
    allowGetting: !0
  }),
  removeRscratch: ke.removeData({
    field: "rscratch",
    triggerEvent: !1
  }),
  id: function() {
    var e = this[0];
    if (e)
      return e._private.data.id;
  }
};
ea.attr = ea.data;
ea.removeAttr = ea.removeData;
var Vg = Ss, tn = {};
function xn(r) {
  return function(e) {
    var t = this;
    if (e === void 0 && (e = !0), t.length !== 0)
      if (t.isNode() && !t.removed()) {
        for (var a = 0, n = t[0], i = n._private.edges, o = 0; o < i.length; o++) {
          var s = i[o];
          !e && s.isLoop() || (a += r(n, s));
        }
        return a;
      } else
        return;
  };
}
ce(tn, {
  degree: xn(function(r, e) {
    return e.source().same(e.target()) ? 2 : 1;
  }),
  indegree: xn(function(r, e) {
    return e.target().same(r) ? 1 : 0;
  }),
  outdegree: xn(function(r, e) {
    return e.source().same(r) ? 1 : 0;
  })
});
function vt(r, e) {
  return function(t) {
    for (var a, n = this.nodes(), i = 0; i < n.length; i++) {
      var o = n[i], s = o[r](t);
      s !== void 0 && (a === void 0 || e(s, a)) && (a = s);
    }
    return a;
  };
}
ce(tn, {
  minDegree: vt("degree", function(r, e) {
    return r < e;
  }),
  maxDegree: vt("degree", function(r, e) {
    return r > e;
  }),
  minIndegree: vt("indegree", function(r, e) {
    return r < e;
  }),
  maxIndegree: vt("indegree", function(r, e) {
    return r > e;
  }),
  minOutdegree: vt("outdegree", function(r, e) {
    return r < e;
  }),
  maxOutdegree: vt("outdegree", function(r, e) {
    return r > e;
  })
});
ce(tn, {
  totalDegree: function(e) {
    for (var t = 0, a = this.nodes(), n = 0; n < a.length; n++)
      t += a[n].degree(e);
    return t;
  }
});
var wr, Ts, Ds = function(e, t, a) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    if (!i.locked()) {
      var o = i._private.position, s = {
        x: t.x != null ? t.x - o.x : 0,
        y: t.y != null ? t.y - o.y : 0
      };
      i.isParent() && !(s.x === 0 && s.y === 0) && i.children().shift(s, a), i.dirtyBoundingBoxCache();
    }
  }
}, Ji = {
  field: "position",
  bindingEvent: "position",
  allowBinding: !0,
  allowSetting: !0,
  settingEvent: "position",
  settingTriggersEvent: !0,
  triggerFnName: "emitAndNotify",
  allowGetting: !0,
  validKeys: ["x", "y"],
  beforeGet: function(e) {
    e.updateCompoundBounds();
  },
  beforeSet: function(e, t) {
    Ds(e, t, !1);
  },
  onSet: function(e) {
    e.dirtyCompoundBoundsCache();
  },
  canSet: function(e) {
    return !e.locked();
  }
};
wr = Ts = {
  position: ke.data(Ji),
  // position but no notification to renderer
  silentPosition: ke.data(ce({}, Ji, {
    allowBinding: !1,
    allowSetting: !0,
    settingTriggersEvent: !1,
    allowGetting: !1,
    beforeSet: function(e, t) {
      Ds(e, t, !0);
    },
    onSet: function(e) {
      e.dirtyCompoundBoundsCache();
    }
  })),
  positions: function(e, t) {
    if (Ce(e))
      t ? this.silentPosition(e) : this.position(e);
    else if (ze(e)) {
      var a = e, n = this.cy();
      n.startBatch();
      for (var i = 0; i < this.length; i++) {
        var o = this[i], s = void 0;
        (s = a(o, i)) && (t ? o.silentPosition(s) : o.position(s));
      }
      n.endBatch();
    }
    return this;
  },
  silentPositions: function(e) {
    return this.positions(e, !0);
  },
  shift: function(e, t, a) {
    var n;
    if (Ce(e) ? (n = {
      x: ae(e.x) ? e.x : 0,
      y: ae(e.y) ? e.y : 0
    }, a = t) : le(e) && ae(t) && (n = {
      x: 0,
      y: 0
    }, n[e] = t), n != null) {
      var i = this.cy();
      i.startBatch();
      for (var o = 0; o < this.length; o++) {
        var s = this[o];
        if (!(i.hasCompoundNodes() && s.isChild() && s.ancestors().anySame(this))) {
          var l = s.position(), u = {
            x: l.x + n.x,
            y: l.y + n.y
          };
          a ? s.silentPosition(u) : s.position(u);
        }
      }
      i.endBatch();
    }
    return this;
  },
  silentShift: function(e, t) {
    return Ce(e) ? this.shift(e, !0) : le(e) && ae(t) && this.shift(e, t, !0), this;
  },
  // get/set the rendered (i.e. on screen) positon of the element
  renderedPosition: function(e, t) {
    var a = this[0], n = this.cy(), i = n.zoom(), o = n.pan(), s = Ce(e) ? e : void 0, l = s !== void 0 || t !== void 0 && le(e);
    if (a && a.isNode())
      if (l)
        for (var u = 0; u < this.length; u++) {
          var v = this[u];
          t !== void 0 ? v.position(e, (t - o[e]) / i) : s !== void 0 && v.position(ns(s, i, o));
        }
      else {
        var f = a.position();
        return s = en(f, i, o), e === void 0 ? s : s[e];
      }
    else if (!l)
      return;
    return this;
  },
  // get/set the position relative to the parent
  relativePosition: function(e, t) {
    var a = this[0], n = this.cy(), i = Ce(e) ? e : void 0, o = i !== void 0 || t !== void 0 && le(e), s = n.hasCompoundNodes();
    if (a && a.isNode())
      if (o)
        for (var l = 0; l < this.length; l++) {
          var u = this[l], v = s ? u.parent() : null, f = v && v.length > 0, c = f;
          f && (v = v[0]);
          var d = c ? v.position() : {
            x: 0,
            y: 0
          };
          t !== void 0 ? u.position(e, t + d[e]) : i !== void 0 && u.position({
            x: i.x + d.x,
            y: i.y + d.y
          });
        }
      else {
        var h = a.position(), g = s ? a.parent() : null, m = g && g.length > 0, p = m;
        m && (g = g[0]);
        var y = p ? g.position() : {
          x: 0,
          y: 0
        };
        return i = {
          x: h.x - y.x,
          y: h.y - y.y
        }, e === void 0 ? i : i[e];
      }
    else if (!o)
      return;
    return this;
  }
};
wr.modelPosition = wr.point = wr.position;
wr.modelPositions = wr.points = wr.positions;
wr.renderedPoint = wr.renderedPosition;
wr.relativePoint = wr.relativePosition;
var qg = Ts, wt, Yr;
wt = Yr = {};
Yr.renderedBoundingBox = function(r) {
  var e = this.boundingBox(r), t = this.cy(), a = t.zoom(), n = t.pan(), i = e.x1 * a + n.x, o = e.x2 * a + n.x, s = e.y1 * a + n.y, l = e.y2 * a + n.y;
  return {
    x1: i,
    x2: o,
    y1: s,
    y2: l,
    w: o - i,
    h: l - s
  };
};
Yr.dirtyCompoundBoundsCache = function() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = this.cy();
  return !e.styleEnabled() || !e.hasCompoundNodes() ? this : (this.forEachUp(function(t) {
    if (t.isParent()) {
      var a = t._private;
      a.compoundBoundsClean = !1, a.bbCache = null, r || t.emitAndNotify("bounds");
    }
  }), this);
};
Yr.updateCompoundBounds = function() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = this.cy();
  if (!e.styleEnabled() || !e.hasCompoundNodes())
    return this;
  if (!r && e.batching())
    return this;
  function t(o) {
    if (!o.isParent())
      return;
    var s = o._private, l = o.children(), u = o.pstyle("compound-sizing-wrt-labels").value === "include", v = {
      width: {
        val: o.pstyle("min-width").pfValue,
        left: o.pstyle("min-width-bias-left"),
        right: o.pstyle("min-width-bias-right")
      },
      height: {
        val: o.pstyle("min-height").pfValue,
        top: o.pstyle("min-height-bias-top"),
        bottom: o.pstyle("min-height-bias-bottom")
      }
    }, f = l.boundingBox({
      includeLabels: u,
      includeOverlays: !1,
      // updating the compound bounds happens outside of the regular
      // cache cycle (i.e. before fired events)
      useCache: !1
    }), c = s.position;
    (f.w === 0 || f.h === 0) && (f = {
      w: o.pstyle("width").pfValue,
      h: o.pstyle("height").pfValue
    }, f.x1 = c.x - f.w / 2, f.x2 = c.x + f.w / 2, f.y1 = c.y - f.h / 2, f.y2 = c.y + f.h / 2);
    function d(E, P, B) {
      var k = 0, M = 0, L = P + B;
      return E > 0 && L > 0 && (k = P / L * E, M = B / L * E), {
        biasDiff: k,
        biasComplementDiff: M
      };
    }
    function h(E, P, B, k) {
      if (B.units === "%")
        switch (k) {
          case "width":
            return E > 0 ? B.pfValue * E : 0;
          case "height":
            return P > 0 ? B.pfValue * P : 0;
          case "average":
            return E > 0 && P > 0 ? B.pfValue * (E + P) / 2 : 0;
          case "min":
            return E > 0 && P > 0 ? E > P ? B.pfValue * P : B.pfValue * E : 0;
          case "max":
            return E > 0 && P > 0 ? E > P ? B.pfValue * E : B.pfValue * P : 0;
          default:
            return 0;
        }
      else
        return B.units === "px" ? B.pfValue : 0;
    }
    var g = v.width.left.value;
    v.width.left.units === "px" && v.width.val > 0 && (g = g * 100 / v.width.val);
    var m = v.width.right.value;
    v.width.right.units === "px" && v.width.val > 0 && (m = m * 100 / v.width.val);
    var p = v.height.top.value;
    v.height.top.units === "px" && v.height.val > 0 && (p = p * 100 / v.height.val);
    var y = v.height.bottom.value;
    v.height.bottom.units === "px" && v.height.val > 0 && (y = y * 100 / v.height.val);
    var b = d(v.width.val - f.w, g, m), w = b.biasDiff, T = b.biasComplementDiff, C = d(v.height.val - f.h, p, y), x = C.biasDiff, D = C.biasComplementDiff;
    s.autoPadding = h(f.w, f.h, o.pstyle("padding"), o.pstyle("padding-relative-to").value), s.autoWidth = Math.max(f.w, v.width.val), c.x = (-w + f.x1 + f.x2 + T) / 2, s.autoHeight = Math.max(f.h, v.height.val), c.y = (-x + f.y1 + f.y2 + D) / 2;
  }
  for (var a = 0; a < this.length; a++) {
    var n = this[a], i = n._private;
    (!i.compoundBoundsClean || r) && (t(n), e.batching() || (i.compoundBoundsClean = !0));
  }
  return this;
};
var cr = function(e) {
  return e === 1 / 0 || e === -1 / 0 ? 0 : e;
}, yr = function(e, t, a, n, i) {
  n - t === 0 || i - a === 0 || t == null || a == null || n == null || i == null || (e.x1 = t < e.x1 ? t : e.x1, e.x2 = n > e.x2 ? n : e.x2, e.y1 = a < e.y1 ? a : e.y1, e.y2 = i > e.y2 ? i : e.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1);
}, _r = function(e, t) {
  return t == null ? e : yr(e, t.x1, t.y1, t.x2, t.y2);
}, Ft = function(e, t, a) {
  return br(e, t, a);
}, Ta = function(e, t, a) {
  if (!t.cy().headless()) {
    var n = t._private, i = n.rstyle, o = i.arrowWidth / 2, s = t.pstyle(a + "-arrow-shape").value, l, u;
    if (s !== "none") {
      a === "source" ? (l = i.srcX, u = i.srcY) : a === "target" ? (l = i.tgtX, u = i.tgtY) : (l = i.midX, u = i.midY);
      var v = n.arrowBounds = n.arrowBounds || {}, f = v[a] = v[a] || {};
      f.x1 = l - o, f.y1 = u - o, f.x2 = l + o, f.y2 = u + o, f.w = f.x2 - f.x1, f.h = f.y2 - f.y1, La(f, 1), yr(e, f.x1, f.y1, f.x2, f.y2);
    }
  }
}, En = function(e, t, a) {
  if (!t.cy().headless()) {
    var n;
    a ? n = a + "-" : n = "";
    var i = t._private, o = i.rstyle, s = t.pstyle(n + "label").strValue;
    if (s) {
      var l = t.pstyle("text-halign"), u = t.pstyle("text-valign"), v = Ft(o, "labelWidth", a), f = Ft(o, "labelHeight", a), c = Ft(o, "labelX", a), d = Ft(o, "labelY", a), h = t.pstyle(n + "text-margin-x").pfValue, g = t.pstyle(n + "text-margin-y").pfValue, m = t.isEdge(), p = t.pstyle(n + "text-rotation"), y = t.pstyle("text-outline-width").pfValue, b = t.pstyle("text-border-width").pfValue, w = b / 2, T = t.pstyle("text-background-padding").pfValue, C = 2, x = f, D = v, E = D / 2, P = x / 2, B, k, M, L;
      if (m)
        B = c - E, k = c + E, M = d - P, L = d + P;
      else {
        switch (l.value) {
          case "left":
            B = c - D, k = c;
            break;
          case "center":
            B = c - E, k = c + E;
            break;
          case "right":
            B = c, k = c + D;
            break;
        }
        switch (u.value) {
          case "top":
            M = d - x, L = d;
            break;
          case "center":
            M = d - P, L = d + P;
            break;
          case "bottom":
            M = d, L = d + x;
            break;
        }
      }
      B += h - Math.max(y, w) - T - C, k += h + Math.max(y, w) + T + C, M += g - Math.max(y, w) - T - C, L += g + Math.max(y, w) + T + C;
      var O = a || "main", A = i.labelBounds, R = A[O] = A[O] || {};
      R.x1 = B, R.y1 = M, R.x2 = k, R.y2 = L, R.w = k - B, R.h = L - M;
      var z = m && p.strValue === "autorotate", F = p.pfValue != null && p.pfValue !== 0;
      if (z || F) {
        var q = z ? Ft(i.rstyle, "labelAngle", a) : p.pfValue, N = Math.cos(q), V = Math.sin(q), Y = (B + k) / 2, U = (M + L) / 2;
        if (!m) {
          switch (l.value) {
            case "left":
              Y = k;
              break;
            case "right":
              Y = B;
              break;
          }
          switch (u.value) {
            case "top":
              U = L;
              break;
            case "bottom":
              U = M;
              break;
          }
        }
        var W = function(he, te) {
          return he = he - Y, te = te - U, {
            x: he * N - te * V + Y,
            y: he * V + te * N + U
          };
        }, H = W(B, M), I = W(B, L), X = W(k, M), Z = W(k, L);
        B = Math.min(H.x, I.x, X.x, Z.x), k = Math.max(H.x, I.x, X.x, Z.x), M = Math.min(H.y, I.y, X.y, Z.y), L = Math.max(H.y, I.y, X.y, Z.y);
      }
      var j = O + "Rot", re = A[j] = A[j] || {};
      re.x1 = B, re.y1 = M, re.x2 = k, re.y2 = L, re.w = k - B, re.h = L - M, yr(e, B, M, k, L), yr(i.labelBounds.all, B, M, k, L);
    }
    return e;
  }
}, Hg = function(e, t) {
  var a = e._private.cy, n = a.styleEnabled(), i = a.headless(), o = ur(), s = e._private, l = e.isNode(), u = e.isEdge(), v, f, c, d, h, g, m = s.rstyle, p = l && n ? e.pstyle("bounds-expansion").pfValue : [0], y = function(ve) {
    return ve.pstyle("display").value !== "none";
  }, b = !n || y(e) && (!u || y(e.source()) && y(e.target()));
  if (b) {
    var w = 0, T = 0;
    n && t.includeOverlays && (w = e.pstyle("overlay-opacity").value, w !== 0 && (T = e.pstyle("overlay-padding").value));
    var C = 0, x = 0;
    n && t.includeUnderlays && (C = e.pstyle("underlay-opacity").value, C !== 0 && (x = e.pstyle("underlay-padding").value));
    var D = Math.max(T, x), E = 0, P = 0;
    if (n && (E = e.pstyle("width").pfValue, P = E / 2), l && t.includeNodes) {
      var B = e.position();
      h = B.x, g = B.y;
      var k = e.outerWidth(), M = k / 2, L = e.outerHeight(), O = L / 2;
      v = h - M, f = h + M, c = g - O, d = g + O, yr(o, v, c, f, d);
    } else if (u && t.includeEdges)
      if (n && !i) {
        var A = e.pstyle("curve-style").strValue;
        if (v = Math.min(m.srcX, m.midX, m.tgtX), f = Math.max(m.srcX, m.midX, m.tgtX), c = Math.min(m.srcY, m.midY, m.tgtY), d = Math.max(m.srcY, m.midY, m.tgtY), v -= P, f += P, c -= P, d += P, yr(o, v, c, f, d), A === "haystack") {
          var R = m.haystackPts;
          if (R && R.length === 2) {
            if (v = R[0].x, c = R[0].y, f = R[1].x, d = R[1].y, v > f) {
              var z = v;
              v = f, f = z;
            }
            if (c > d) {
              var F = c;
              c = d, d = F;
            }
            yr(o, v - P, c - P, f + P, d + P);
          }
        } else if (A === "bezier" || A === "unbundled-bezier" || A === "segments" || A === "taxi") {
          var q;
          switch (A) {
            case "bezier":
            case "unbundled-bezier":
              q = m.bezierPts;
              break;
            case "segments":
            case "taxi":
              q = m.linePts;
              break;
          }
          if (q != null)
            for (var N = 0; N < q.length; N++) {
              var V = q[N];
              v = V.x - P, f = V.x + P, c = V.y - P, d = V.y + P, yr(o, v, c, f, d);
            }
        }
      } else {
        var Y = e.source(), U = Y.position(), W = e.target(), H = W.position();
        if (v = U.x, f = H.x, c = U.y, d = H.y, v > f) {
          var I = v;
          v = f, f = I;
        }
        if (c > d) {
          var X = c;
          c = d, d = X;
        }
        v -= P, f += P, c -= P, d += P, yr(o, v, c, f, d);
      }
    if (n && t.includeEdges && u && (Ta(o, e, "mid-source"), Ta(o, e, "mid-target"), Ta(o, e, "source"), Ta(o, e, "target")), n) {
      var Z = e.pstyle("ghost").value === "yes";
      if (Z) {
        var j = e.pstyle("ghost-offset-x").pfValue, re = e.pstyle("ghost-offset-y").pfValue;
        yr(o, o.x1 + j, o.y1 + re, o.x2 + j, o.y2 + re);
      }
    }
    var de = s.bodyBounds = s.bodyBounds || {};
    zi(de, o), yn(de, p), La(de, 1), n && (v = o.x1, f = o.x2, c = o.y1, d = o.y2, yr(o, v - D, c - D, f + D, d + D));
    var he = s.overlayBounds = s.overlayBounds || {};
    zi(he, o), yn(he, p), La(he, 1);
    var te = s.labelBounds = s.labelBounds || {};
    te.all != null ? gh(te.all) : te.all = ur(), n && t.includeLabels && (t.includeMainLabels && En(o, e, null), u && (t.includeSourceLabels && En(o, e, "source"), t.includeTargetLabels && En(o, e, "target")));
  }
  return o.x1 = cr(o.x1), o.y1 = cr(o.y1), o.x2 = cr(o.x2), o.y2 = cr(o.y2), o.w = cr(o.x2 - o.x1), o.h = cr(o.y2 - o.y1), o.w > 0 && o.h > 0 && b && (yn(o, p), La(o, 1)), o;
}, ks = function(e) {
  var t = 0, a = function(o) {
    return (o ? 1 : 0) << t++;
  }, n = 0;
  return n += a(e.incudeNodes), n += a(e.includeEdges), n += a(e.includeLabels), n += a(e.includeMainLabels), n += a(e.includeSourceLabels), n += a(e.includeTargetLabels), n += a(e.includeOverlays), n;
}, Ps = function(e) {
  if (e.isEdge()) {
    var t = e.source().position(), a = e.target().position(), n = function(o) {
      return Math.round(o);
    };
    return Nd([n(t.x), n(t.y), n(a.x), n(a.y)]);
  } else
    return 0;
}, ji = function(e, t) {
  var a = e._private, n, i = e.isEdge(), o = t == null ? eo : ks(t), s = o === eo, l = Ps(e), u = a.bbCachePosKey === l, v = t.useCache && u, f = function(g) {
    return g._private.bbCache == null || g._private.styleDirty;
  }, c = !v || f(e) || i && f(e.source()) || f(e.target());
  if (c ? (u || e.recalculateRenderedStyle(v), n = Hg(e, ra), a.bbCache = n, a.bbCachePosKey = l) : n = a.bbCache, !s) {
    var d = e.isNode();
    n = ur(), (t.includeNodes && d || t.includeEdges && !d) && (t.includeOverlays ? _r(n, a.overlayBounds) : _r(n, a.bodyBounds)), t.includeLabels && (t.includeMainLabels && (!i || t.includeSourceLabels && t.includeTargetLabels) ? _r(n, a.labelBounds.all) : (t.includeMainLabels && _r(n, a.labelBounds.mainRot), t.includeSourceLabels && _r(n, a.labelBounds.sourceRot), t.includeTargetLabels && _r(n, a.labelBounds.targetRot))), n.w = n.x2 - n.x1, n.h = n.y2 - n.y1;
  }
  return n;
}, ra = {
  includeNodes: !0,
  includeEdges: !0,
  includeLabels: !0,
  includeMainLabels: !0,
  includeSourceLabels: !0,
  includeTargetLabels: !0,
  includeOverlays: !0,
  includeUnderlays: !0,
  useCache: !0
}, eo = ks(ra), ro = Ze(ra);
Yr.boundingBox = function(r) {
  var e;
  if (this.length === 1 && this[0]._private.bbCache != null && !this[0]._private.styleDirty && (r === void 0 || r.useCache === void 0 || r.useCache === !0))
    r === void 0 ? r = ra : r = ro(r), e = ji(this[0], r);
  else {
    e = ur(), r = r || ra;
    var t = ro(r), a = this, n = a.cy(), i = n.styleEnabled();
    if (i)
      for (var o = 0; o < a.length; o++) {
        var s = a[o], l = s._private, u = Ps(s), v = l.bbCachePosKey === u, f = t.useCache && v && !l.styleDirty;
        s.recalculateRenderedStyle(f);
      }
    this.updateCompoundBounds(!r.useCache);
    for (var c = 0; c < a.length; c++) {
      var d = a[c];
      _r(e, ji(d, t));
    }
  }
  return e.x1 = cr(e.x1), e.y1 = cr(e.y1), e.x2 = cr(e.x2), e.y2 = cr(e.y2), e.w = cr(e.x2 - e.x1), e.h = cr(e.y2 - e.y1), e;
};
Yr.dirtyBoundingBoxCache = function() {
  for (var r = 0; r < this.length; r++) {
    var e = this[r]._private;
    e.bbCache = null, e.bbCachePosKey = null, e.bodyBounds = null, e.overlayBounds = null, e.labelBounds.all = null, e.labelBounds.source = null, e.labelBounds.target = null, e.labelBounds.main = null, e.labelBounds.sourceRot = null, e.labelBounds.targetRot = null, e.labelBounds.mainRot = null, e.arrowBounds.source = null, e.arrowBounds.target = null, e.arrowBounds["mid-source"] = null, e.arrowBounds["mid-target"] = null;
  }
  return this.emitAndNotify("bounds"), this;
};
Yr.boundingBoxAt = function(r) {
  var e = this.nodes(), t = this.cy(), a = t.hasCompoundNodes(), n = t.collection();
  if (a && (n = e.filter(function(u) {
    return u.isParent();
  }), e = e.not(n)), Ce(r)) {
    var i = r;
    r = function() {
      return i;
    };
  }
  var o = function(v, f) {
    return v._private.bbAtOldPos = r(v, f);
  }, s = function(v) {
    return v._private.bbAtOldPos;
  };
  t.startBatch(), e.forEach(o).silentPositions(r), a && (n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), n.updateCompoundBounds(!0));
  var l = hh(this.boundingBox({
    useCache: !1
  }));
  return e.silentPositions(s), a && (n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), n.updateCompoundBounds(!0)), t.endBatch(), l;
};
wt.boundingbox = wt.bb = wt.boundingBox;
wt.renderedBoundingbox = wt.renderedBoundingBox;
var Gg = Yr, Kt, fa;
Kt = fa = {};
var Bs = function(e) {
  e.uppercaseName = Ai(e.name), e.autoName = "auto" + e.uppercaseName, e.labelName = "label" + e.uppercaseName, e.outerName = "outer" + e.uppercaseName, e.uppercaseOuterName = Ai(e.outerName), Kt[e.name] = function() {
    var a = this[0], n = a._private, i = n.cy, o = i._private.styleEnabled;
    if (a)
      if (o) {
        if (a.isParent())
          return a.updateCompoundBounds(), n[e.autoName] || 0;
        var s = a.pstyle(e.name);
        switch (s.strValue) {
          case "label":
            return a.recalculateRenderedStyle(), n.rstyle[e.labelName] || 0;
          default:
            return s.pfValue;
        }
      } else
        return 1;
  }, Kt["outer" + e.uppercaseName] = function() {
    var a = this[0], n = a._private, i = n.cy, o = i._private.styleEnabled;
    if (a)
      if (o) {
        var s = a[e.name](), l = a.pstyle("border-width").pfValue, u = 2 * a.padding();
        return s + l + u;
      } else
        return 1;
  }, Kt["rendered" + e.uppercaseName] = function() {
    var a = this[0];
    if (a) {
      var n = a[e.name]();
      return n * this.cy().zoom();
    }
  }, Kt["rendered" + e.uppercaseOuterName] = function() {
    var a = this[0];
    if (a) {
      var n = a[e.outerName]();
      return n * this.cy().zoom();
    }
  };
};
Bs({
  name: "width"
});
Bs({
  name: "height"
});
fa.padding = function() {
  var r = this[0], e = r._private;
  return r.isParent() ? (r.updateCompoundBounds(), e.autoPadding !== void 0 ? e.autoPadding : r.pstyle("padding").pfValue) : r.pstyle("padding").pfValue;
};
fa.paddedHeight = function() {
  var r = this[0];
  return r.height() + 2 * r.padding();
};
fa.paddedWidth = function() {
  var r = this[0];
  return r.width() + 2 * r.padding();
};
var Kg = fa, Wg = function(e, t) {
  if (e.isEdge())
    return t(e);
}, Yg = function(e, t) {
  if (e.isEdge()) {
    var a = e.cy();
    return en(t(e), a.zoom(), a.pan());
  }
}, Xg = function(e, t) {
  if (e.isEdge()) {
    var a = e.cy(), n = a.pan(), i = a.zoom();
    return t(e).map(function(o) {
      return en(o, i, n);
    });
  }
}, Ug = function(e) {
  return e.renderer().getControlPoints(e);
}, Zg = function(e) {
  return e.renderer().getSegmentPoints(e);
}, Qg = function(e) {
  return e.renderer().getSourceEndpoint(e);
}, _g = function(e) {
  return e.renderer().getTargetEndpoint(e);
}, Jg = function(e) {
  return e.renderer().getEdgeMidpoint(e);
}, to = {
  controlPoints: {
    get: Ug,
    mult: !0
  },
  segmentPoints: {
    get: Zg,
    mult: !0
  },
  sourceEndpoint: {
    get: Qg
  },
  targetEndpoint: {
    get: _g
  },
  midpoint: {
    get: Jg
  }
}, jg = function(e) {
  return "rendered" + e[0].toUpperCase() + e.substr(1);
}, ep = Object.keys(to).reduce(function(r, e) {
  var t = to[e], a = jg(e);
  return r[e] = function() {
    return Wg(this, t.get);
  }, t.mult ? r[a] = function() {
    return Xg(this, t.get);
  } : r[a] = function() {
    return Yg(this, t.get);
  }, r;
}, {}), rp = ce({}, qg, Gg, Kg, ep);
/*!
Event object based on jQuery events, MIT license

https://jquery.org/license/
https://tldrlegal.com/license/mit-license
https://github.com/jquery/jquery/blob/master/src/event.js
*/
var Ls = function(e, t) {
  this.recycle(e, t);
};
function $t() {
  return !1;
}
function Da() {
  return !0;
}
Ls.prototype = {
  instanceString: function() {
    return "event";
  },
  recycle: function(e, t) {
    if (this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = $t, e != null && e.preventDefault ? (this.type = e.type, this.isDefaultPrevented = e.defaultPrevented ? Da : $t) : e != null && e.type ? t = e : this.type = e, t != null && (this.originalEvent = t.originalEvent, this.type = t.type != null ? t.type : this.type, this.cy = t.cy, this.target = t.target, this.position = t.position, this.renderedPosition = t.renderedPosition, this.namespace = t.namespace, this.layout = t.layout), this.cy != null && this.position != null && this.renderedPosition == null) {
      var a = this.position, n = this.cy.zoom(), i = this.cy.pan();
      this.renderedPosition = {
        x: a.x * n + i.x,
        y: a.y * n + i.y
      };
    }
    this.timeStamp = e && e.timeStamp || Date.now();
  },
  preventDefault: function() {
    this.isDefaultPrevented = Da;
    var e = this.originalEvent;
    e && e.preventDefault && e.preventDefault();
  },
  stopPropagation: function() {
    this.isPropagationStopped = Da;
    var e = this.originalEvent;
    e && e.stopPropagation && e.stopPropagation();
  },
  stopImmediatePropagation: function() {
    this.isImmediatePropagationStopped = Da, this.stopPropagation();
  },
  isDefaultPrevented: $t,
  isPropagationStopped: $t,
  isImmediatePropagationStopped: $t
};
var Ms = /^([^.]+)(\.(?:[^.]+))?$/, tp = ".*", As = {
  qualifierCompare: function(e, t) {
    return e === t;
  },
  eventMatches: function() {
    return !0;
  },
  addEventFields: function() {
  },
  callbackContext: function(e) {
    return e;
  },
  beforeEmit: function() {
  },
  afterEmit: function() {
  },
  bubble: function() {
    return !1;
  },
  parent: function() {
    return null;
  },
  context: null
}, ao = Object.keys(As), ap = {};
function an() {
  for (var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ap, e = arguments.length > 1 ? arguments[1] : void 0, t = 0; t < ao.length; t++) {
    var a = ao[t];
    this[a] = r[a] || As[a];
  }
  this.context = e || this.context, this.listeners = [], this.emitting = 0;
}
var Wr = an.prototype, Rs = function(e, t, a, n, i, o, s) {
  ze(n) && (i = n, n = null), s && (o == null ? o = s : o = ce({}, o, s));
  for (var l = Me(a) ? a : a.split(/\s+/), u = 0; u < l.length; u++) {
    var v = l[u];
    if (!qr(v)) {
      var f = v.match(Ms);
      if (f) {
        var c = f[1], d = f[2] ? f[2] : null, h = t(e, v, c, d, n, i, o);
        if (h === !1)
          break;
      }
    }
  }
}, no = function(e, t) {
  return e.addEventFields(e.context, t), new Ls(t.type, t);
}, np = function(e, t, a) {
  if (md(a)) {
    t(e, a);
    return;
  } else if (Ce(a)) {
    t(e, no(e, a));
    return;
  }
  for (var n = Me(a) ? a : a.split(/\s+/), i = 0; i < n.length; i++) {
    var o = n[i];
    if (!qr(o)) {
      var s = o.match(Ms);
      if (s) {
        var l = s[1], u = s[2] ? s[2] : null, v = no(e, {
          type: l,
          namespace: u,
          target: e.context
        });
        t(e, v);
      }
    }
  }
};
Wr.on = Wr.addListener = function(r, e, t, a, n) {
  return Rs(this, function(i, o, s, l, u, v, f) {
    ze(v) && i.listeners.push({
      event: o,
      // full event string
      callback: v,
      // callback to run
      type: s,
      // the event type (e.g. 'click')
      namespace: l,
      // the event namespace (e.g. ".foo")
      qualifier: u,
      // a restriction on whether to match this emitter
      conf: f
      // additional configuration
    });
  }, r, e, t, a, n), this;
};
Wr.one = function(r, e, t, a) {
  return this.on(r, e, t, a, {
    one: !0
  });
};
Wr.removeListener = Wr.off = function(r, e, t, a) {
  var n = this;
  this.emitting !== 0 && (this.listeners = Hd(this.listeners));
  for (var i = this.listeners, o = function(u) {
    var v = i[u];
    Rs(n, function(f, c, d, h, g, m) {
      if ((v.type === d || r === "*") && (!h && v.namespace !== ".*" || v.namespace === h) && (!g || f.qualifierCompare(v.qualifier, g)) && (!m || v.callback === m))
        return i.splice(u, 1), !1;
    }, r, e, t, a);
  }, s = i.length - 1; s >= 0; s--)
    o(s);
  return this;
};
Wr.removeAllListeners = function() {
  return this.removeListener("*");
};
Wr.emit = Wr.trigger = function(r, e, t) {
  var a = this.listeners, n = a.length;
  return this.emitting++, Me(e) || (e = [e]), np(this, function(i, o) {
    t != null && (a = [{
      event: o.event,
      type: o.type,
      namespace: o.namespace,
      callback: t
    }], n = a.length);
    for (var s = function(v) {
      var f = a[v];
      if (f.type === o.type && (!f.namespace || f.namespace === o.namespace || f.namespace === tp) && i.eventMatches(i.context, f, o)) {
        var c = [o];
        e != null && Kd(c, e), i.beforeEmit(i.context, f, o), f.conf && f.conf.one && (i.listeners = i.listeners.filter(function(g) {
          return g !== f;
        }));
        var d = i.callbackContext(i.context, f, o), h = f.callback.apply(d, c);
        i.afterEmit(i.context, f, o), h === !1 && (o.stopPropagation(), o.preventDefault());
      }
    }, l = 0; l < n; l++)
      s(l);
    i.bubble(i.context) && !o.isPropagationStopped() && i.parent(i.context).emit(o, e);
  }, r), this.emitting--, this;
};
var ip = {
  qualifierCompare: function(e, t) {
    return e == null || t == null ? e == null && t == null : e.sameText(t);
  },
  eventMatches: function(e, t, a) {
    var n = t.qualifier;
    return n != null ? e !== a.target && la(a.target) && n.matches(a.target) : !0;
  },
  addEventFields: function(e, t) {
    t.cy = e.cy(), t.target = e;
  },
  callbackContext: function(e, t, a) {
    return t.qualifier != null ? a.target : e;
  },
  beforeEmit: function(e, t) {
    t.conf && t.conf.once && t.conf.onceCollection.removeListener(t.event, t.qualifier, t.callback);
  },
  bubble: function() {
    return !0;
  },
  parent: function(e) {
    return e.isChild() ? e.parent() : e.cy();
  }
}, ka = function(e) {
  return le(e) ? new Gr(e) : e;
}, Os = {
  createEmitter: function() {
    for (var e = 0; e < this.length; e++) {
      var t = this[e], a = t._private;
      a.emitter || (a.emitter = new an(ip, t));
    }
    return this;
  },
  emitter: function() {
    return this._private.emitter;
  },
  on: function(e, t, a) {
    for (var n = ka(t), i = 0; i < this.length; i++) {
      var o = this[i];
      o.emitter().on(e, n, a);
    }
    return this;
  },
  removeListener: function(e, t, a) {
    for (var n = ka(t), i = 0; i < this.length; i++) {
      var o = this[i];
      o.emitter().removeListener(e, n, a);
    }
    return this;
  },
  removeAllListeners: function() {
    for (var e = 0; e < this.length; e++) {
      var t = this[e];
      t.emitter().removeAllListeners();
    }
    return this;
  },
  one: function(e, t, a) {
    for (var n = ka(t), i = 0; i < this.length; i++) {
      var o = this[i];
      o.emitter().one(e, n, a);
    }
    return this;
  },
  once: function(e, t, a) {
    for (var n = ka(t), i = 0; i < this.length; i++) {
      var o = this[i];
      o.emitter().on(e, n, a, {
        once: !0,
        onceCollection: this
      });
    }
  },
  emit: function(e, t) {
    for (var a = 0; a < this.length; a++) {
      var n = this[a];
      n.emitter().emit(e, t);
    }
    return this;
  },
  emitAndNotify: function(e, t) {
    if (this.length !== 0)
      return this.cy().notify(e, this), this.emit(e, t), this;
  }
};
ke.eventAliasesOn(Os);
var Is = {
  nodes: function(e) {
    return this.filter(function(t) {
      return t.isNode();
    }).filter(e);
  },
  edges: function(e) {
    return this.filter(function(t) {
      return t.isEdge();
    }).filter(e);
  },
  // internal helper to get nodes and edges as separate collections with single iteration over elements
  byGroup: function() {
    for (var e = this.spawn(), t = this.spawn(), a = 0; a < this.length; a++) {
      var n = this[a];
      n.isNode() ? e.push(n) : t.push(n);
    }
    return {
      nodes: e,
      edges: t
    };
  },
  filter: function(e, t) {
    if (e === void 0)
      return this;
    if (le(e) || lr(e))
      return new Gr(e).filter(this);
    if (ze(e)) {
      for (var a = this.spawn(), n = this, i = 0; i < n.length; i++) {
        var o = n[i], s = t ? e.apply(t, [o, i, n]) : e(o, i, n);
        s && a.push(o);
      }
      return a;
    }
    return this.spawn();
  },
  not: function(e) {
    if (e) {
      le(e) && (e = this.filter(e));
      for (var t = this.spawn(), a = 0; a < this.length; a++) {
        var n = this[a], i = e.has(n);
        i || t.push(n);
      }
      return t;
    } else
      return this;
  },
  absoluteComplement: function() {
    var e = this.cy();
    return e.mutableElements().not(this);
  },
  intersect: function(e) {
    if (le(e)) {
      var t = e;
      return this.filter(t);
    }
    for (var a = this.spawn(), n = this, i = e, o = this.length < e.length, s = o ? n : i, l = o ? i : n, u = 0; u < s.length; u++) {
      var v = s[u];
      l.has(v) && a.push(v);
    }
    return a;
  },
  xor: function(e) {
    var t = this._private.cy;
    le(e) && (e = t.$(e));
    var a = this.spawn(), n = this, i = e, o = function(l, u) {
      for (var v = 0; v < l.length; v++) {
        var f = l[v], c = f._private.data.id, d = u.hasElementWithId(c);
        d || a.push(f);
      }
    };
    return o(n, i), o(i, n), a;
  },
  diff: function(e) {
    var t = this._private.cy;
    le(e) && (e = t.$(e));
    var a = this.spawn(), n = this.spawn(), i = this.spawn(), o = this, s = e, l = function(v, f, c) {
      for (var d = 0; d < v.length; d++) {
        var h = v[d], g = h._private.data.id, m = f.hasElementWithId(g);
        m ? i.merge(h) : c.push(h);
      }
    };
    return l(o, s, a), l(s, o, n), {
      left: a,
      right: n,
      both: i
    };
  },
  add: function(e) {
    var t = this._private.cy;
    if (!e)
      return this;
    if (le(e)) {
      var a = e;
      e = t.mutableElements().filter(a);
    }
    for (var n = this.spawnSelf(), i = 0; i < e.length; i++) {
      var o = e[i], s = !this.has(o);
      s && n.push(o);
    }
    return n;
  },
  // in place merge on calling collection
  merge: function(e) {
    var t = this._private, a = t.cy;
    if (!e)
      return this;
    if (e && le(e)) {
      var n = e;
      e = a.mutableElements().filter(n);
    }
    for (var i = t.map, o = 0; o < e.length; o++) {
      var s = e[o], l = s._private.data.id, u = !i.has(l);
      if (u) {
        var v = this.length++;
        this[v] = s, i.set(l, {
          ele: s,
          index: v
        });
      }
    }
    return this;
  },
  unmergeAt: function(e) {
    var t = this[e], a = t.id(), n = this._private, i = n.map;
    this[e] = void 0, i.delete(a);
    var o = e === this.length - 1;
    if (this.length > 1 && !o) {
      var s = this.length - 1, l = this[s], u = l._private.data.id;
      this[s] = void 0, this[e] = l, i.set(u, {
        ele: l,
        index: e
      });
    }
    return this.length--, this;
  },
  // remove single ele in place in calling collection
  unmergeOne: function(e) {
    e = e[0];
    var t = this._private, a = e._private.data.id, n = t.map, i = n.get(a);
    if (!i)
      return this;
    var o = i.index;
    return this.unmergeAt(o), this;
  },
  // remove eles in place on calling collection
  unmerge: function(e) {
    var t = this._private.cy;
    if (!e)
      return this;
    if (e && le(e)) {
      var a = e;
      e = t.mutableElements().filter(a);
    }
    for (var n = 0; n < e.length; n++)
      this.unmergeOne(e[n]);
    return this;
  },
  unmergeBy: function(e) {
    for (var t = this.length - 1; t >= 0; t--) {
      var a = this[t];
      e(a) && this.unmergeAt(t);
    }
    return this;
  },
  map: function(e, t) {
    for (var a = [], n = this, i = 0; i < n.length; i++) {
      var o = n[i], s = t ? e.apply(t, [o, i, n]) : e(o, i, n);
      a.push(s);
    }
    return a;
  },
  reduce: function(e, t) {
    for (var a = t, n = this, i = 0; i < n.length; i++)
      a = e(a, n[i], i, n);
    return a;
  },
  max: function(e, t) {
    for (var a = -1 / 0, n, i = this, o = 0; o < i.length; o++) {
      var s = i[o], l = t ? e.apply(t, [s, o, i]) : e(s, o, i);
      l > a && (a = l, n = s);
    }
    return {
      value: a,
      ele: n
    };
  },
  min: function(e, t) {
    for (var a = 1 / 0, n, i = this, o = 0; o < i.length; o++) {
      var s = i[o], l = t ? e.apply(t, [s, o, i]) : e(s, o, i);
      l < a && (a = l, n = s);
    }
    return {
      value: a,
      ele: n
    };
  }
}, Te = Is;
Te.u = Te["|"] = Te["+"] = Te.union = Te.or = Te.add;
Te["\\"] = Te["!"] = Te["-"] = Te.difference = Te.relativeComplement = Te.subtract = Te.not;
Te.n = Te["&"] = Te["."] = Te.and = Te.intersection = Te.intersect;
Te["^"] = Te["(+)"] = Te["(-)"] = Te.symmetricDifference = Te.symdiff = Te.xor;
Te.fnFilter = Te.filterFn = Te.stdFilter = Te.filter;
Te.complement = Te.abscomp = Te.absoluteComplement;
var op = {
  isNode: function() {
    return this.group() === "nodes";
  },
  isEdge: function() {
    return this.group() === "edges";
  },
  isLoop: function() {
    return this.isEdge() && this.source()[0] === this.target()[0];
  },
  isSimple: function() {
    return this.isEdge() && this.source()[0] !== this.target()[0];
  },
  group: function() {
    var e = this[0];
    if (e)
      return e._private.group;
  }
}, zs = function(e, t) {
  var a = e.cy(), n = a.hasCompoundNodes();
  function i(v) {
    var f = v.pstyle("z-compound-depth");
    return f.value === "auto" ? n ? v.zDepth() : 0 : f.value === "bottom" ? -1 : f.value === "top" ? Zn : 0;
  }
  var o = i(e) - i(t);
  if (o !== 0)
    return o;
  function s(v) {
    var f = v.pstyle("z-index-compare");
    return f.value === "auto" && v.isNode() ? 1 : 0;
  }
  var l = s(e) - s(t);
  if (l !== 0)
    return l;
  var u = e.pstyle("z-index").value - t.pstyle("z-index").value;
  return u !== 0 ? u : e.poolIndex() - t.poolIndex();
}, qa = {
  forEach: function(e, t) {
    if (ze(e))
      for (var a = this.length, n = 0; n < a; n++) {
        var i = this[n], o = t ? e.apply(t, [i, n, this]) : e(i, n, this);
        if (o === !1)
          break;
      }
    return this;
  },
  toArray: function() {
    for (var e = [], t = 0; t < this.length; t++)
      e.push(this[t]);
    return e;
  },
  slice: function(e, t) {
    var a = [], n = this.length;
    t == null && (t = n), e == null && (e = 0), e < 0 && (e = n + e), t < 0 && (t = n + t);
    for (var i = e; i >= 0 && i < t && i < n; i++)
      a.push(this[i]);
    return this.spawn(a);
  },
  size: function() {
    return this.length;
  },
  eq: function(e) {
    return this[e] || this.spawn();
  },
  first: function() {
    return this[0] || this.spawn();
  },
  last: function() {
    return this[this.length - 1] || this.spawn();
  },
  empty: function() {
    return this.length === 0;
  },
  nonempty: function() {
    return !this.empty();
  },
  sort: function(e) {
    if (!ze(e))
      return this;
    var t = this.toArray().sort(e);
    return this.spawn(t);
  },
  sortByZIndex: function() {
    return this.sort(zs);
  },
  zDepth: function() {
    var e = this[0];
    if (e) {
      var t = e._private, a = t.group;
      if (a === "nodes") {
        var n = t.data.parent ? e.parents().size() : 0;
        return e.isParent() ? n : Zn - 1;
      } else {
        var i = t.source, o = t.target, s = i.zDepth(), l = o.zDepth();
        return Math.max(s, l, 0);
      }
    }
  }
};
qa.each = qa.forEach;
var sp = function() {
  var e = "undefined", t = (typeof Symbol > "u" ? "undefined" : qe(Symbol)) != e && qe(Symbol.iterator) != e;
  t && (qa[Symbol.iterator] = function() {
    var a = this, n = {
      value: void 0,
      done: !1
    }, i = 0, o = this.length;
    return Ho({
      next: function() {
        return i < o ? n.value = a[i++] : (n.value = void 0, n.done = !0), n;
      }
    }, Symbol.iterator, function() {
      return this;
    });
  });
};
sp();
var up = Ze({
  nodeDimensionsIncludeLabels: !1
}), Aa = {
  // Calculates and returns node dimensions { x, y } based on options given
  layoutDimensions: function(e) {
    e = up(e);
    var t;
    if (!this.takesUpSpace())
      t = {
        w: 0,
        h: 0
      };
    else if (e.nodeDimensionsIncludeLabels) {
      var a = this.boundingBox();
      t = {
        w: a.w,
        h: a.h
      };
    } else
      t = {
        w: this.outerWidth(),
        h: this.outerHeight()
      };
    return (t.w === 0 || t.h === 0) && (t.w = t.h = 1), t;
  },
  // using standard layout options, apply position function (w/ or w/o animation)
  layoutPositions: function(e, t, a) {
    var n = this.nodes().filter(function(T) {
      return !T.isParent();
    }), i = this.cy(), o = t.eles, s = function(C) {
      return C.id();
    }, l = Ut(a, s);
    e.emit({
      type: "layoutstart",
      layout: e
    }), e.animations = [];
    var u = function(C, x, D) {
      var E = {
        x: x.x1 + x.w / 2,
        y: x.y1 + x.h / 2
      }, P = {
        // scale from center of bounding box (not necessarily 0,0)
        x: (D.x - E.x) * C,
        y: (D.y - E.y) * C
      };
      return {
        x: E.x + P.x,
        y: E.y + P.y
      };
    }, v = t.spacingFactor && t.spacingFactor !== 1, f = function() {
      if (!v)
        return null;
      for (var C = ur(), x = 0; x < n.length; x++) {
        var D = n[x], E = l(D, x);
        mh(C, E.x, E.y);
      }
      return C;
    }, c = f(), d = Ut(function(T, C) {
      var x = l(T, C);
      if (v) {
        var D = Math.abs(t.spacingFactor);
        x = u(D, c, x);
      }
      return t.transform != null && (x = t.transform(T, x)), x;
    }, s);
    if (t.animate) {
      for (var h = 0; h < n.length; h++) {
        var g = n[h], m = d(g, h), p = t.animateFilter == null || t.animateFilter(g, h);
        if (p) {
          var y = g.animation({
            position: m,
            duration: t.animationDuration,
            easing: t.animationEasing
          });
          e.animations.push(y);
        } else
          g.position(m);
      }
      if (t.fit) {
        var b = i.animation({
          fit: {
            boundingBox: o.boundingBoxAt(d),
            padding: t.padding
          },
          duration: t.animationDuration,
          easing: t.animationEasing
        });
        e.animations.push(b);
      } else if (t.zoom !== void 0 && t.pan !== void 0) {
        var w = i.animation({
          zoom: t.zoom,
          pan: t.pan,
          duration: t.animationDuration,
          easing: t.animationEasing
        });
        e.animations.push(w);
      }
      e.animations.forEach(function(T) {
        return T.play();
      }), e.one("layoutready", t.ready), e.emit({
        type: "layoutready",
        layout: e
      }), Pt.all(e.animations.map(function(T) {
        return T.promise();
      })).then(function() {
        e.one("layoutstop", t.stop), e.emit({
          type: "layoutstop",
          layout: e
        });
      });
    } else
      n.positions(d), t.fit && i.fit(t.eles, t.padding), t.zoom != null && i.zoom(t.zoom), t.pan && i.pan(t.pan), e.one("layoutready", t.ready), e.emit({
        type: "layoutready",
        layout: e
      }), e.one("layoutstop", t.stop), e.emit({
        type: "layoutstop",
        layout: e
      });
    return this;
  },
  layout: function(e) {
    var t = this.cy();
    return t.makeLayout(ce({}, e, {
      eles: this
    }));
  }
};
Aa.createLayout = Aa.makeLayout = Aa.layout;
function Ns(r, e, t) {
  var a = t._private, n = a.styleCache = a.styleCache || [], i;
  return (i = n[r]) != null || (i = n[r] = e(t)), i;
}
function nn(r, e) {
  return r = jr(r), function(a) {
    return Ns(r, e, a);
  };
}
function on(r, e) {
  r = jr(r);
  var t = function(n) {
    return e.call(n);
  };
  return function() {
    var n = this[0];
    if (n)
      return Ns(r, t, n);
  };
}
var Xe = {
  recalculateRenderedStyle: function(e) {
    var t = this.cy(), a = t.renderer(), n = t.styleEnabled();
    return a && n && a.recalculateRenderedStyle(this, e), this;
  },
  dirtyStyleCache: function() {
    var e = this.cy(), t = function(i) {
      return i._private.styleCache = null;
    };
    if (e.hasCompoundNodes()) {
      var a;
      a = this.spawnSelf().merge(this.descendants()).merge(this.parents()), a.merge(a.connectedEdges()), a.forEach(t);
    } else
      this.forEach(function(n) {
        t(n), n.connectedEdges().forEach(t);
      });
    return this;
  },
  // fully updates (recalculates) the style for the elements
  updateStyle: function(e) {
    var t = this._private.cy;
    if (!t.styleEnabled())
      return this;
    if (t.batching()) {
      var a = t._private.batchStyleEles;
      return a.merge(this), this;
    }
    var n = t.hasCompoundNodes(), i = this;
    e = !!(e || e === void 0), n && (i = this.spawnSelf().merge(this.descendants()).merge(this.parents()));
    var o = i;
    return e ? o.emitAndNotify("style") : o.emit("style"), i.forEach(function(s) {
      return s._private.styleDirty = !0;
    }), this;
  },
  // private: clears dirty flag and recalculates style
  cleanStyle: function() {
    var e = this.cy();
    if (e.styleEnabled())
      for (var t = 0; t < this.length; t++) {
        var a = this[t];
        a._private.styleDirty && (a._private.styleDirty = !1, e.style().apply(a));
      }
  },
  // get the internal parsed style object for the specified property
  parsedStyle: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, a = this[0], n = a.cy();
    if (n.styleEnabled() && a) {
      this.cleanStyle();
      var i = a._private.style[e];
      return i ?? (t ? n.style().getDefaultProperty(e) : null);
    }
  },
  numericStyle: function(e) {
    var t = this[0];
    if (t.cy().styleEnabled() && t) {
      var a = t.pstyle(e);
      return a.pfValue !== void 0 ? a.pfValue : a.value;
    }
  },
  numericStyleUnits: function(e) {
    var t = this[0];
    if (t.cy().styleEnabled() && t)
      return t.pstyle(e).units;
  },
  // get the specified css property as a rendered value (i.e. on-screen value)
  // or get the whole rendered style if no property specified (NB doesn't allow setting)
  renderedStyle: function(e) {
    var t = this.cy();
    if (!t.styleEnabled())
      return this;
    var a = this[0];
    if (a)
      return t.style().getRenderedStyle(a, e);
  },
  // read the calculated css style of the element or override the style (via a bypass)
  style: function(e, t) {
    var a = this.cy();
    if (!a.styleEnabled())
      return this;
    var n = !1, i = a.style();
    if (Ce(e)) {
      var o = e;
      i.applyBypass(this, o, n), this.emitAndNotify("style");
    } else if (le(e))
      if (t === void 0) {
        var s = this[0];
        return s ? i.getStylePropertyValue(s, e) : void 0;
      } else
        i.applyBypass(this, e, t, n), this.emitAndNotify("style");
    else if (e === void 0) {
      var l = this[0];
      return l ? i.getRawStyle(l) : void 0;
    }
    return this;
  },
  removeStyle: function(e) {
    var t = this.cy();
    if (!t.styleEnabled())
      return this;
    var a = !1, n = t.style(), i = this;
    if (e === void 0)
      for (var o = 0; o < i.length; o++) {
        var s = i[o];
        n.removeAllBypasses(s, a);
      }
    else {
      e = e.split(/\s+/);
      for (var l = 0; l < i.length; l++) {
        var u = i[l];
        n.removeBypasses(u, e, a);
      }
    }
    return this.emitAndNotify("style"), this;
  },
  show: function() {
    return this.css("display", "element"), this;
  },
  hide: function() {
    return this.css("display", "none"), this;
  },
  effectiveOpacity: function() {
    var e = this.cy();
    if (!e.styleEnabled())
      return 1;
    var t = e.hasCompoundNodes(), a = this[0];
    if (a) {
      var n = a._private, i = a.pstyle("opacity").value;
      if (!t)
        return i;
      var o = n.data.parent ? a.parents() : null;
      if (o)
        for (var s = 0; s < o.length; s++) {
          var l = o[s], u = l.pstyle("opacity").value;
          i = u * i;
        }
      return i;
    }
  },
  transparent: function() {
    var e = this.cy();
    if (!e.styleEnabled())
      return !1;
    var t = this[0], a = t.cy().hasCompoundNodes();
    if (t)
      return a ? t.effectiveOpacity() === 0 : t.pstyle("opacity").value === 0;
  },
  backgrounding: function() {
    var e = this.cy();
    if (!e.styleEnabled())
      return !1;
    var t = this[0];
    return !!t._private.backgrounding;
  }
};
function Cn(r, e) {
  var t = r._private, a = t.data.parent ? r.parents() : null;
  if (a)
    for (var n = 0; n < a.length; n++) {
      var i = a[n];
      if (!e(i))
        return !1;
    }
  return !0;
}
function ni(r) {
  var e = r.ok, t = r.edgeOkViaNode || r.ok, a = r.parentOk || r.ok;
  return function() {
    var n = this.cy();
    if (!n.styleEnabled())
      return !0;
    var i = this[0], o = n.hasCompoundNodes();
    if (i) {
      var s = i._private;
      if (!e(i))
        return !1;
      if (i.isNode())
        return !o || Cn(i, a);
      var l = s.source, u = s.target;
      return t(l) && (!o || Cn(l, t)) && (l === u || t(u) && (!o || Cn(u, t)));
    }
  };
}
var Bt = nn("eleTakesUpSpace", function(r) {
  return r.pstyle("display").value === "element" && r.width() !== 0 && (r.isNode() ? r.height() !== 0 : !0);
});
Xe.takesUpSpace = on("takesUpSpace", ni({
  ok: Bt
}));
var lp = nn("eleInteractive", function(r) {
  return r.pstyle("events").value === "yes" && r.pstyle("visibility").value === "visible" && Bt(r);
}), vp = nn("parentInteractive", function(r) {
  return r.pstyle("visibility").value === "visible" && Bt(r);
});
Xe.interactive = on("interactive", ni({
  ok: lp,
  parentOk: vp,
  edgeOkViaNode: Bt
}));
Xe.noninteractive = function() {
  var r = this[0];
  if (r)
    return !r.interactive();
};
var fp = nn("eleVisible", function(r) {
  return r.pstyle("visibility").value === "visible" && r.pstyle("opacity").pfValue !== 0 && Bt(r);
}), cp = Bt;
Xe.visible = on("visible", ni({
  ok: fp,
  edgeOkViaNode: cp
}));
Xe.hidden = function() {
  var r = this[0];
  if (r)
    return !r.visible();
};
Xe.isBundledBezier = on("isBundledBezier", function() {
  return this.cy().styleEnabled() ? !this.removed() && this.pstyle("curve-style").value === "bezier" && this.takesUpSpace() : !1;
});
Xe.bypass = Xe.css = Xe.style;
Xe.renderedCss = Xe.renderedStyle;
Xe.removeBypass = Xe.removeCss = Xe.removeStyle;
Xe.pstyle = Xe.parsedStyle;
var Vr = {};
function io(r) {
  return function() {
    var e = arguments, t = [];
    if (e.length === 2) {
      var a = e[0], n = e[1];
      this.on(r.event, a, n);
    } else if (e.length === 1 && ze(e[0])) {
      var i = e[0];
      this.on(r.event, i);
    } else if (e.length === 0 || e.length === 1 && Me(e[0])) {
      for (var o = e.length === 1 ? e[0] : null, s = 0; s < this.length; s++) {
        var l = this[s], u = !r.ableField || l._private[r.ableField], v = l._private[r.field] != r.value;
        if (r.overrideAble) {
          var f = r.overrideAble(l);
          if (f !== void 0 && (u = f, !f))
            return this;
        }
        u && (l._private[r.field] = r.value, v && t.push(l));
      }
      var c = this.spawn(t);
      c.updateStyle(), c.emit(r.event), o && c.emit(o);
    }
    return this;
  };
}
function Lt(r) {
  Vr[r.field] = function() {
    var e = this[0];
    if (e) {
      if (r.overrideField) {
        var t = r.overrideField(e);
        if (t !== void 0)
          return t;
      }
      return e._private[r.field];
    }
  }, Vr[r.on] = io({
    event: r.on,
    field: r.field,
    ableField: r.ableField,
    overrideAble: r.overrideAble,
    value: !0
  }), Vr[r.off] = io({
    event: r.off,
    field: r.field,
    ableField: r.ableField,
    overrideAble: r.overrideAble,
    value: !1
  });
}
Lt({
  field: "locked",
  overrideField: function(e) {
    return e.cy().autolock() ? !0 : void 0;
  },
  on: "lock",
  off: "unlock"
});
Lt({
  field: "grabbable",
  overrideField: function(e) {
    return e.cy().autoungrabify() || e.pannable() ? !1 : void 0;
  },
  on: "grabify",
  off: "ungrabify"
});
Lt({
  field: "selected",
  ableField: "selectable",
  overrideAble: function(e) {
    return e.cy().autounselectify() ? !1 : void 0;
  },
  on: "select",
  off: "unselect"
});
Lt({
  field: "selectable",
  overrideField: function(e) {
    return e.cy().autounselectify() ? !1 : void 0;
  },
  on: "selectify",
  off: "unselectify"
});
Vr.deselect = Vr.unselect;
Vr.grabbed = function() {
  var r = this[0];
  if (r)
    return r._private.grabbed;
};
Lt({
  field: "active",
  on: "activate",
  off: "unactivate"
});
Lt({
  field: "pannable",
  on: "panify",
  off: "unpanify"
});
Vr.inactive = function() {
  var r = this[0];
  if (r)
    return !r._private.active;
};
var je = {}, oo = function(e) {
  return function(a) {
    for (var n = this, i = [], o = 0; o < n.length; o++) {
      var s = n[o];
      if (s.isNode()) {
        for (var l = !1, u = s.connectedEdges(), v = 0; v < u.length; v++) {
          var f = u[v], c = f.source(), d = f.target();
          if (e.noIncomingEdges && d === s && c !== s || e.noOutgoingEdges && c === s && d !== s) {
            l = !0;
            break;
          }
        }
        l || i.push(s);
      }
    }
    return this.spawn(i, !0).filter(a);
  };
}, so = function(e) {
  return function(t) {
    for (var a = this, n = [], i = 0; i < a.length; i++) {
      var o = a[i];
      if (o.isNode())
        for (var s = o.connectedEdges(), l = 0; l < s.length; l++) {
          var u = s[l], v = u.source(), f = u.target();
          e.outgoing && v === o ? (n.push(u), n.push(f)) : e.incoming && f === o && (n.push(u), n.push(v));
        }
    }
    return this.spawn(n, !0).filter(t);
  };
}, uo = function(e) {
  return function(t) {
    for (var a = this, n = [], i = {}; ; ) {
      var o = e.outgoing ? a.outgoers() : a.incomers();
      if (o.length === 0)
        break;
      for (var s = !1, l = 0; l < o.length; l++) {
        var u = o[l], v = u.id();
        i[v] || (i[v] = !0, n.push(u), s = !0);
      }
      if (!s)
        break;
      a = o;
    }
    return this.spawn(n, !0).filter(t);
  };
};
je.clearTraversalCache = function() {
  for (var r = 0; r < this.length; r++)
    this[r]._private.traversalCache = null;
};
ce(je, {
  // get the root nodes in the DAG
  roots: oo({
    noIncomingEdges: !0
  }),
  // get the leaf nodes in the DAG
  leaves: oo({
    noOutgoingEdges: !0
  }),
  // normally called children in graph theory
  // these nodes =edges=> outgoing nodes
  outgoers: dr(so({
    outgoing: !0
  }), "outgoers"),
  // aka DAG descendants
  successors: uo({
    outgoing: !0
  }),
  // normally called parents in graph theory
  // these nodes <=edges= incoming nodes
  incomers: dr(so({
    incoming: !0
  }), "incomers"),
  // aka DAG ancestors
  predecessors: uo({
    incoming: !0
  })
});
ce(je, {
  neighborhood: dr(function(r) {
    for (var e = [], t = this.nodes(), a = 0; a < t.length; a++)
      for (var n = t[a], i = n.connectedEdges(), o = 0; o < i.length; o++) {
        var s = i[o], l = s.source(), u = s.target(), v = n === l ? u : l;
        v.length > 0 && e.push(v[0]), e.push(s[0]);
      }
    return this.spawn(e, !0).filter(r);
  }, "neighborhood"),
  closedNeighborhood: function(e) {
    return this.neighborhood().add(this).filter(e);
  },
  openNeighborhood: function(e) {
    return this.neighborhood(e);
  }
});
je.neighbourhood = je.neighborhood;
je.closedNeighbourhood = je.closedNeighborhood;
je.openNeighbourhood = je.openNeighborhood;
ce(je, {
  source: dr(function(e) {
    var t = this[0], a;
    return t && (a = t._private.source || t.cy().collection()), a && e ? a.filter(e) : a;
  }, "source"),
  target: dr(function(e) {
    var t = this[0], a;
    return t && (a = t._private.target || t.cy().collection()), a && e ? a.filter(e) : a;
  }, "target"),
  sources: lo({
    attr: "source"
  }),
  targets: lo({
    attr: "target"
  })
});
function lo(r) {
  return function(t) {
    for (var a = [], n = 0; n < this.length; n++) {
      var i = this[n], o = i._private[r.attr];
      o && a.push(o);
    }
    return this.spawn(a, !0).filter(t);
  };
}
ce(je, {
  edgesWith: dr(vo(), "edgesWith"),
  edgesTo: dr(vo({
    thisIsSrc: !0
  }), "edgesTo")
});
function vo(r) {
  return function(t) {
    var a = [], n = this._private.cy, i = r || {};
    le(t) && (t = n.$(t));
    for (var o = 0; o < t.length; o++)
      for (var s = t[o]._private.edges, l = 0; l < s.length; l++) {
        var u = s[l], v = u._private.data, f = this.hasElementWithId(v.source) && t.hasElementWithId(v.target), c = t.hasElementWithId(v.source) && this.hasElementWithId(v.target), d = f || c;
        d && ((i.thisIsSrc || i.thisIsTgt) && (i.thisIsSrc && !f || i.thisIsTgt && !c) || a.push(u));
      }
    return this.spawn(a, !0);
  };
}
ce(je, {
  connectedEdges: dr(function(r) {
    for (var e = [], t = this, a = 0; a < t.length; a++) {
      var n = t[a];
      if (n.isNode())
        for (var i = n._private.edges, o = 0; o < i.length; o++) {
          var s = i[o];
          e.push(s);
        }
    }
    return this.spawn(e, !0).filter(r);
  }, "connectedEdges"),
  connectedNodes: dr(function(r) {
    for (var e = [], t = this, a = 0; a < t.length; a++) {
      var n = t[a];
      n.isEdge() && (e.push(n.source()[0]), e.push(n.target()[0]));
    }
    return this.spawn(e, !0).filter(r);
  }, "connectedNodes"),
  parallelEdges: dr(fo(), "parallelEdges"),
  codirectedEdges: dr(fo({
    codirected: !0
  }), "codirectedEdges")
});
function fo(r) {
  var e = {
    codirected: !1
  };
  return r = ce({}, e, r), function(a) {
    for (var n = [], i = this.edges(), o = r, s = 0; s < i.length; s++)
      for (var l = i[s], u = l._private, v = u.source, f = v._private.data.id, c = u.data.target, d = v._private.edges, h = 0; h < d.length; h++) {
        var g = d[h], m = g._private.data, p = m.target, y = m.source, b = p === c && y === f, w = f === p && c === y;
        (o.codirected && b || !o.codirected && (b || w)) && n.push(g);
      }
    return this.spawn(n, !0).filter(a);
  };
}
ce(je, {
  components: function(e) {
    var t = this, a = t.cy(), n = a.collection(), i = e == null ? t.nodes() : e.nodes(), o = [];
    e != null && i.empty() && (i = e.sources());
    var s = function(v, f) {
      n.merge(v), i.unmerge(v), f.merge(v);
    };
    if (i.empty())
      return t.spawn();
    var l = function() {
      var v = a.collection();
      o.push(v);
      var f = i[0];
      s(f, v), t.bfs({
        directed: !1,
        roots: f,
        visit: function(d) {
          return s(d, v);
        }
      }), v.forEach(function(c) {
        c.connectedEdges().forEach(function(d) {
          t.has(d) && v.has(d.source()) && v.has(d.target()) && v.merge(d);
        });
      });
    };
    do
      l();
    while (i.length > 0);
    return o;
  },
  component: function() {
    var e = this[0];
    return e.cy().mutableElements().components(e)[0];
  }
});
je.componentsOf = je.components;
var Ue = function(e, t) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (e === void 0) {
    Fe("A collection must have a reference to the core");
    return;
  }
  var i = new Cr(), o = !1;
  if (!t)
    t = [];
  else if (t.length > 0 && Ce(t[0]) && !la(t[0])) {
    o = !0;
    for (var s = [], l = new kt(), u = 0, v = t.length; u < v; u++) {
      var f = t[u];
      f.data == null && (f.data = {});
      var c = f.data;
      if (c.id == null)
        c.id = ts();
      else if (e.hasElementWithId(c.id) || l.has(c.id))
        continue;
      var d = new ja(e, f, !1);
      s.push(d), l.add(c.id);
    }
    t = s;
  }
  this.length = 0;
  for (var h = 0, g = t.length; h < g; h++) {
    var m = t[h][0];
    if (m != null) {
      var p = m._private.data.id;
      (!a || !i.has(p)) && (a && i.set(p, {
        index: this.length,
        ele: m
      }), this[this.length] = m, this.length++);
    }
  }
  this._private = {
    eles: this,
    cy: e,
    get map() {
      return this.lazyMap == null && this.rebuildMap(), this.lazyMap;
    },
    set map(y) {
      this.lazyMap = y;
    },
    rebuildMap: function() {
      for (var b = this.lazyMap = new Cr(), w = this.eles, T = 0; T < w.length; T++) {
        var C = w[T];
        b.set(C.id(), {
          index: T,
          ele: C
        });
      }
    }
  }, a && (this._private.map = i), o && !n && this.restore();
}, Re = ja.prototype = Ue.prototype = Object.create(Array.prototype);
Re.instanceString = function() {
  return "collection";
};
Re.spawn = function(r, e) {
  return new Ue(this.cy(), r, e);
};
Re.spawnSelf = function() {
  return this.spawn(this);
};
Re.cy = function() {
  return this._private.cy;
};
Re.renderer = function() {
  return this._private.cy.renderer();
};
Re.element = function() {
  return this[0];
};
Re.collection = function() {
  return Ko(this) ? this : new Ue(this._private.cy, [this]);
};
Re.unique = function() {
  return new Ue(this._private.cy, this, !0);
};
Re.hasElementWithId = function(r) {
  return r = "" + r, this._private.map.has(r);
};
Re.getElementById = function(r) {
  r = "" + r;
  var e = this._private.cy, t = this._private.map.get(r);
  return t ? t.ele : new Ue(e);
};
Re.$id = Re.getElementById;
Re.poolIndex = function() {
  var r = this._private.cy, e = r._private.elements, t = this[0]._private.data.id;
  return e._private.map.get(t).index;
};
Re.indexOf = function(r) {
  var e = r[0]._private.data.id;
  return this._private.map.get(e).index;
};
Re.indexOfId = function(r) {
  return r = "" + r, this._private.map.get(r).index;
};
Re.json = function(r) {
  var e = this.element(), t = this.cy();
  if (e == null && r)
    return this;
  if (e != null) {
    var a = e._private;
    if (Ce(r)) {
      if (t.startBatch(), r.data) {
        e.data(r.data);
        var n = a.data;
        if (e.isEdge()) {
          var i = !1, o = {}, s = r.data.source, l = r.data.target;
          s != null && s != n.source && (o.source = "" + s, i = !0), l != null && l != n.target && (o.target = "" + l, i = !0), i && (e = e.move(o));
        } else {
          var u = "parent" in r.data, v = r.data.parent;
          u && (v != null || n.parent != null) && v != n.parent && (v === void 0 && (v = null), v != null && (v = "" + v), e = e.move({
            parent: v
          }));
        }
      }
      r.position && e.position(r.position);
      var f = function(g, m, p) {
        var y = r[g];
        y != null && y !== a[g] && (y ? e[m]() : e[p]());
      };
      return f("removed", "remove", "restore"), f("selected", "select", "unselect"), f("selectable", "selectify", "unselectify"), f("locked", "lock", "unlock"), f("grabbable", "grabify", "ungrabify"), f("pannable", "panify", "unpanify"), r.classes != null && e.classes(r.classes), t.endBatch(), this;
    } else if (r === void 0) {
      var c = {
        data: Er(a.data),
        position: Er(a.position),
        group: a.group,
        removed: a.removed,
        selected: a.selected,
        selectable: a.selectable,
        locked: a.locked,
        grabbable: a.grabbable,
        pannable: a.pannable,
        classes: null
      };
      c.classes = "";
      var d = 0;
      return a.classes.forEach(function(h) {
        return c.classes += d++ === 0 ? h : " " + h;
      }), c;
    }
  }
};
Re.jsons = function() {
  for (var r = [], e = 0; e < this.length; e++) {
    var t = this[e], a = t.json();
    r.push(a);
  }
  return r;
};
Re.clone = function() {
  for (var r = this.cy(), e = [], t = 0; t < this.length; t++) {
    var a = this[t], n = a.json(), i = new ja(r, n, !1);
    e.push(i);
  }
  return new Ue(r, e);
};
Re.copy = Re.clone;
Re.restore = function() {
  for (var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, t = this, a = t.cy(), n = a._private, i = [], o = [], s, l = 0, u = t.length; l < u; l++) {
    var v = t[l];
    e && !v.removed() || (v.isNode() ? i.push(v) : o.push(v));
  }
  s = i.concat(o);
  var f, c = function() {
    s.splice(f, 1), f--;
  };
  for (f = 0; f < s.length; f++) {
    var d = s[f], h = d._private, g = h.data;
    if (d.clearTraversalCache(), !(!e && !h.removed)) {
      if (g.id === void 0)
        g.id = ts();
      else if (ae(g.id))
        g.id = "" + g.id;
      else if (qr(g.id) || !le(g.id)) {
        Fe("Can not create element with invalid string ID `" + g.id + "`"), c();
        continue;
      } else if (a.hasElementWithId(g.id)) {
        Fe("Can not create second element with ID `" + g.id + "`"), c();
        continue;
      }
    }
    var m = g.id;
    if (d.isNode()) {
      var p = h.position;
      p.x == null && (p.x = 0), p.y == null && (p.y = 0);
    }
    if (d.isEdge()) {
      for (var y = d, b = ["source", "target"], w = b.length, T = !1, C = 0; C < w; C++) {
        var x = b[C], D = g[x];
        ae(D) && (D = g[x] = "" + g[x]), D == null || D === "" ? (Fe("Can not create edge `" + m + "` with unspecified " + x), T = !0) : a.hasElementWithId(D) || (Fe("Can not create edge `" + m + "` with nonexistant " + x + " `" + D + "`"), T = !0);
      }
      if (T) {
        c();
        continue;
      }
      var E = a.getElementById(g.source), P = a.getElementById(g.target);
      E.same(P) ? E._private.edges.push(y) : (E._private.edges.push(y), P._private.edges.push(y)), y._private.source = E, y._private.target = P;
    }
    h.map = new Cr(), h.map.set(m, {
      ele: d,
      index: 0
    }), h.removed = !1, e && a.addToPool(d);
  }
  for (var B = 0; B < i.length; B++) {
    var k = i[B], M = k._private.data;
    ae(M.parent) && (M.parent = "" + M.parent);
    var L = M.parent, O = L != null;
    if (O || k._private.parent) {
      var A = k._private.parent ? a.collection().merge(k._private.parent) : a.getElementById(L);
      if (A.empty())
        M.parent = void 0;
      else if (A[0].removed())
        Pe("Node added with missing parent, reference to parent removed"), M.parent = void 0, k._private.parent = null;
      else {
        for (var R = !1, z = A; !z.empty(); ) {
          if (k.same(z)) {
            R = !0, M.parent = void 0;
            break;
          }
          z = z.parent();
        }
        R || (A[0]._private.children.push(k), k._private.parent = A[0], n.hasCompoundNodes = !0);
      }
    }
  }
  if (s.length > 0) {
    for (var F = s.length === t.length ? t : new Ue(a, s), q = 0; q < F.length; q++) {
      var N = F[q];
      N.isNode() || (N.parallelEdges().clearTraversalCache(), N.source().clearTraversalCache(), N.target().clearTraversalCache());
    }
    var V;
    n.hasCompoundNodes ? V = a.collection().merge(F).merge(F.connectedNodes()).merge(F.parent()) : V = F, V.dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(r), r ? F.emitAndNotify("add") : e && F.emit("add");
  }
  return t;
};
Re.removed = function() {
  var r = this[0];
  return r && r._private.removed;
};
Re.inside = function() {
  var r = this[0];
  return r && !r._private.removed;
};
Re.remove = function() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, t = this, a = [], n = {}, i = t._private.cy;
  function o(L) {
    for (var O = L._private.edges, A = 0; A < O.length; A++)
      l(O[A]);
  }
  function s(L) {
    for (var O = L._private.children, A = 0; A < O.length; A++)
      l(O[A]);
  }
  function l(L) {
    var O = n[L.id()];
    e && L.removed() || O || (n[L.id()] = !0, L.isNode() ? (a.push(L), o(L), s(L)) : a.unshift(L));
  }
  for (var u = 0, v = t.length; u < v; u++) {
    var f = t[u];
    l(f);
  }
  function c(L, O) {
    var A = L._private.edges;
    Hr(A, O), L.clearTraversalCache();
  }
  function d(L) {
    L.clearTraversalCache();
  }
  var h = [];
  h.ids = {};
  function g(L, O) {
    O = O[0], L = L[0];
    var A = L._private.children, R = L.id();
    Hr(A, O), O._private.parent = null, h.ids[R] || (h.ids[R] = !0, h.push(L));
  }
  t.dirtyCompoundBoundsCache(), e && i.removeFromPool(a);
  for (var m = 0; m < a.length; m++) {
    var p = a[m];
    if (p.isEdge()) {
      var y = p.source()[0], b = p.target()[0];
      c(y, p), c(b, p);
      for (var w = p.parallelEdges(), T = 0; T < w.length; T++) {
        var C = w[T];
        d(C), C.isBundledBezier() && C.dirtyBoundingBoxCache();
      }
    } else {
      var x = p.parent();
      x.length !== 0 && g(x, p);
    }
    e && (p._private.removed = !0);
  }
  var D = i._private.elements;
  i._private.hasCompoundNodes = !1;
  for (var E = 0; E < D.length; E++) {
    var P = D[E];
    if (P.isParent()) {
      i._private.hasCompoundNodes = !0;
      break;
    }
  }
  var B = new Ue(this.cy(), a);
  B.size() > 0 && (r ? B.emitAndNotify("remove") : e && B.emit("remove"));
  for (var k = 0; k < h.length; k++) {
    var M = h[k];
    (!e || !M.removed()) && M.updateStyle();
  }
  return B;
};
Re.move = function(r) {
  var e = this._private.cy, t = this, a = !1, n = !1, i = function(h) {
    return h == null ? h : "" + h;
  };
  if (r.source !== void 0 || r.target !== void 0) {
    var o = i(r.source), s = i(r.target), l = o != null && e.hasElementWithId(o), u = s != null && e.hasElementWithId(s);
    (l || u) && (e.batch(function() {
      t.remove(a, n), t.emitAndNotify("moveout");
      for (var d = 0; d < t.length; d++) {
        var h = t[d], g = h._private.data;
        h.isEdge() && (l && (g.source = o), u && (g.target = s));
      }
      t.restore(a, n);
    }), t.emitAndNotify("move"));
  } else if (r.parent !== void 0) {
    var v = i(r.parent), f = v === null || e.hasElementWithId(v);
    if (f) {
      var c = v === null ? void 0 : v;
      e.batch(function() {
        var d = t.remove(a, n);
        d.emitAndNotify("moveout");
        for (var h = 0; h < t.length; h++) {
          var g = t[h], m = g._private.data;
          g.isNode() && (m.parent = c);
        }
        d.restore(a, n);
      }), t.emitAndNotify("move");
    }
  }
  return this;
};
[ps, Sg, Ma, $r, Ct, Vg, tn, rp, Os, Is, op, qa, Aa, Xe, Vr, je].forEach(function(r) {
  ce(Re, r);
});
var dp = {
  add: function(e) {
    var t, a = this;
    if (lr(e)) {
      var n = e;
      if (n._private.cy === a)
        t = n.restore();
      else {
        for (var i = [], o = 0; o < n.length; o++) {
          var s = n[o];
          i.push(s.json());
        }
        t = new Ue(a, i);
      }
    } else if (Me(e)) {
      var l = e;
      t = new Ue(a, l);
    } else if (Ce(e) && (Me(e.nodes) || Me(e.edges))) {
      for (var u = e, v = [], f = ["nodes", "edges"], c = 0, d = f.length; c < d; c++) {
        var h = f[c], g = u[h];
        if (Me(g))
          for (var m = 0, p = g.length; m < p; m++) {
            var y = ce({
              group: h
            }, g[m]);
            v.push(y);
          }
      }
      t = new Ue(a, v);
    } else {
      var b = e;
      t = new ja(a, b).collection();
    }
    return t;
  },
  remove: function(e) {
    if (!lr(e)) {
      if (le(e)) {
        var t = e;
        e = this.$(t);
      }
    }
    return e.remove();
  }
};
/*! Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
function hp(r, e, t, a) {
  var n = 4, i = 1e-3, o = 1e-7, s = 10, l = 11, u = 1 / (l - 1), v = typeof Float32Array < "u";
  if (arguments.length !== 4)
    return !1;
  for (var f = 0; f < 4; ++f)
    if (typeof arguments[f] != "number" || isNaN(arguments[f]) || !isFinite(arguments[f]))
      return !1;
  r = Math.min(r, 1), t = Math.min(t, 1), r = Math.max(r, 0), t = Math.max(t, 0);
  var c = v ? new Float32Array(l) : new Array(l);
  function d(P, B) {
    return 1 - 3 * B + 3 * P;
  }
  function h(P, B) {
    return 3 * B - 6 * P;
  }
  function g(P) {
    return 3 * P;
  }
  function m(P, B, k) {
    return ((d(B, k) * P + h(B, k)) * P + g(B)) * P;
  }
  function p(P, B, k) {
    return 3 * d(B, k) * P * P + 2 * h(B, k) * P + g(B);
  }
  function y(P, B) {
    for (var k = 0; k < n; ++k) {
      var M = p(B, r, t);
      if (M === 0)
        return B;
      var L = m(B, r, t) - P;
      B -= L / M;
    }
    return B;
  }
  function b() {
    for (var P = 0; P < l; ++P)
      c[P] = m(P * u, r, t);
  }
  function w(P, B, k) {
    var M, L, O = 0;
    do
      L = B + (k - B) / 2, M = m(L, r, t) - P, M > 0 ? k = L : B = L;
    while (Math.abs(M) > o && ++O < s);
    return L;
  }
  function T(P) {
    for (var B = 0, k = 1, M = l - 1; k !== M && c[k] <= P; ++k)
      B += u;
    --k;
    var L = (P - c[k]) / (c[k + 1] - c[k]), O = B + L * u, A = p(O, r, t);
    return A >= i ? y(P, O) : A === 0 ? O : w(P, B, B + u);
  }
  var C = !1;
  function x() {
    C = !0, (r !== e || t !== a) && b();
  }
  var D = function(B) {
    return C || x(), r === e && t === a ? B : B === 0 ? 0 : B === 1 ? 1 : m(T(B), e, a);
  };
  D.getControlPoints = function() {
    return [{
      x: r,
      y: e
    }, {
      x: t,
      y: a
    }];
  };
  var E = "generateBezier(" + [r, e, t, a] + ")";
  return D.toString = function() {
    return E;
  }, D;
}
/*! Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
var gp = function() {
  function r(a) {
    return -a.tension * a.x - a.friction * a.v;
  }
  function e(a, n, i) {
    var o = {
      x: a.x + i.dx * n,
      v: a.v + i.dv * n,
      tension: a.tension,
      friction: a.friction
    };
    return {
      dx: o.v,
      dv: r(o)
    };
  }
  function t(a, n) {
    var i = {
      dx: a.v,
      dv: r(a)
    }, o = e(a, n * 0.5, i), s = e(a, n * 0.5, o), l = e(a, n, s), u = 1 / 6 * (i.dx + 2 * (o.dx + s.dx) + l.dx), v = 1 / 6 * (i.dv + 2 * (o.dv + s.dv) + l.dv);
    return a.x = a.x + u * n, a.v = a.v + v * n, a;
  }
  return function a(n, i, o) {
    var s = {
      x: -1,
      v: 0,
      tension: null,
      friction: null
    }, l = [0], u = 0, v = 1 / 1e4, f = 16 / 1e3, c, d, h;
    for (n = parseFloat(n) || 500, i = parseFloat(i) || 20, o = o || null, s.tension = n, s.friction = i, c = o !== null, c ? (u = a(n, i), d = u / o * f) : d = f; h = t(h || s, d), l.push(1 + h.x), u += 16, Math.abs(h.x) > v && Math.abs(h.v) > v; )
      ;
    return c ? function(g) {
      return l[g * (l.length - 1) | 0];
    } : u;
  };
}(), Ae = function(e, t, a, n) {
  var i = hp(e, t, a, n);
  return function(o, s, l) {
    return o + (s - o) * i(l);
  };
}, Ra = {
  linear: function(e, t, a) {
    return e + (t - e) * a;
  },
  // default easings
  ease: Ae(0.25, 0.1, 0.25, 1),
  "ease-in": Ae(0.42, 0, 1, 1),
  "ease-out": Ae(0, 0, 0.58, 1),
  "ease-in-out": Ae(0.42, 0, 0.58, 1),
  // sine
  "ease-in-sine": Ae(0.47, 0, 0.745, 0.715),
  "ease-out-sine": Ae(0.39, 0.575, 0.565, 1),
  "ease-in-out-sine": Ae(0.445, 0.05, 0.55, 0.95),
  // quad
  "ease-in-quad": Ae(0.55, 0.085, 0.68, 0.53),
  "ease-out-quad": Ae(0.25, 0.46, 0.45, 0.94),
  "ease-in-out-quad": Ae(0.455, 0.03, 0.515, 0.955),
  // cubic
  "ease-in-cubic": Ae(0.55, 0.055, 0.675, 0.19),
  "ease-out-cubic": Ae(0.215, 0.61, 0.355, 1),
  "ease-in-out-cubic": Ae(0.645, 0.045, 0.355, 1),
  // quart
  "ease-in-quart": Ae(0.895, 0.03, 0.685, 0.22),
  "ease-out-quart": Ae(0.165, 0.84, 0.44, 1),
  "ease-in-out-quart": Ae(0.77, 0, 0.175, 1),
  // quint
  "ease-in-quint": Ae(0.755, 0.05, 0.855, 0.06),
  "ease-out-quint": Ae(0.23, 1, 0.32, 1),
  "ease-in-out-quint": Ae(0.86, 0, 0.07, 1),
  // expo
  "ease-in-expo": Ae(0.95, 0.05, 0.795, 0.035),
  "ease-out-expo": Ae(0.19, 1, 0.22, 1),
  "ease-in-out-expo": Ae(1, 0, 0, 1),
  // circ
  "ease-in-circ": Ae(0.6, 0.04, 0.98, 0.335),
  "ease-out-circ": Ae(0.075, 0.82, 0.165, 1),
  "ease-in-out-circ": Ae(0.785, 0.135, 0.15, 0.86),
  // user param easings...
  spring: function(e, t, a) {
    if (a === 0)
      return Ra.linear;
    var n = gp(e, t, a);
    return function(i, o, s) {
      return i + (o - i) * n(s);
    };
  },
  "cubic-bezier": Ae
};
function co(r, e, t, a, n) {
  if (a === 1 || e === t)
    return t;
  var i = n(e, t, a);
  return r == null || ((r.roundValue || r.color) && (i = Math.round(i)), r.min !== void 0 && (i = Math.max(i, r.min)), r.max !== void 0 && (i = Math.min(i, r.max))), i;
}
function ho(r, e) {
  return r.pfValue != null || r.value != null ? r.pfValue != null && (e == null || e.type.units !== "%") ? r.pfValue : r.value : r;
}
function ft(r, e, t, a, n) {
  var i = n != null ? n.type : null;
  t < 0 ? t = 0 : t > 1 && (t = 1);
  var o = ho(r, n), s = ho(e, n);
  if (ae(o) && ae(s))
    return co(i, o, s, t, a);
  if (Me(o) && Me(s)) {
    for (var l = [], u = 0; u < s.length; u++) {
      var v = o[u], f = s[u];
      if (v != null && f != null) {
        var c = co(i, v, f, t, a);
        l.push(c);
      } else
        l.push(f);
    }
    return l;
  }
}
function pp(r, e, t, a) {
  var n = !a, i = r._private, o = e._private, s = o.easing, l = o.startTime, u = a ? r : r.cy(), v = u.style();
  if (!o.easingImpl)
    if (s == null)
      o.easingImpl = Ra.linear;
    else {
      var f;
      if (le(s)) {
        var c = v.parse("transition-timing-function", s);
        f = c.value;
      } else
        f = s;
      var d, h;
      le(f) ? (d = f, h = []) : (d = f[1], h = f.slice(2).map(function(F) {
        return +F;
      })), h.length > 0 ? (d === "spring" && h.push(o.duration), o.easingImpl = Ra[d].apply(null, h)) : o.easingImpl = Ra[d];
    }
  var g = o.easingImpl, m;
  if (o.duration === 0 ? m = 1 : m = (t - l) / o.duration, o.applying && (m = o.progress), m < 0 ? m = 0 : m > 1 && (m = 1), o.delay == null) {
    var p = o.startPosition, y = o.position;
    if (y && n && !r.locked()) {
      var b = {};
      Vt(p.x, y.x) && (b.x = ft(p.x, y.x, m, g)), Vt(p.y, y.y) && (b.y = ft(p.y, y.y, m, g)), r.position(b);
    }
    var w = o.startPan, T = o.pan, C = i.pan, x = T != null && a;
    x && (Vt(w.x, T.x) && (C.x = ft(w.x, T.x, m, g)), Vt(w.y, T.y) && (C.y = ft(w.y, T.y, m, g)), r.emit("pan"));
    var D = o.startZoom, E = o.zoom, P = E != null && a;
    P && (Vt(D, E) && (i.zoom = Jt(i.minZoom, ft(D, E, m, g), i.maxZoom)), r.emit("zoom")), (x || P) && r.emit("viewport");
    var B = o.style;
    if (B && B.length > 0 && n) {
      for (var k = 0; k < B.length; k++) {
        var M = B[k], L = M.name, O = M, A = o.startStyle[L], R = v.properties[A.name], z = ft(A, O, m, g, R);
        v.overrideBypass(r, L, z);
      }
      r.emit("style");
    }
  }
  return o.progress = m, m;
}
function Vt(r, e) {
  return r == null || e == null ? !1 : ae(r) && ae(e) ? !0 : !!(r && e);
}
function mp(r, e, t, a) {
  var n = e._private;
  n.started = !0, n.startTime = t - n.progress * n.duration;
}
function go(r, e) {
  var t = e._private.aniEles, a = [];
  function n(v, f) {
    var c = v._private, d = c.animation.current, h = c.animation.queue, g = !1;
    if (d.length === 0) {
      var m = h.shift();
      m && d.push(m);
    }
    for (var p = function(C) {
      for (var x = C.length - 1; x >= 0; x--) {
        var D = C[x];
        D();
      }
      C.splice(0, C.length);
    }, y = d.length - 1; y >= 0; y--) {
      var b = d[y], w = b._private;
      if (w.stopped) {
        d.splice(y, 1), w.hooked = !1, w.playing = !1, w.started = !1, p(w.frames);
        continue;
      }
      !w.playing && !w.applying || (w.playing && w.applying && (w.applying = !1), w.started || mp(v, b, r), pp(v, b, r, f), w.applying && (w.applying = !1), p(w.frames), w.step != null && w.step(r), b.completed() && (d.splice(y, 1), w.hooked = !1, w.playing = !1, w.started = !1, p(w.completes)), g = !0);
    }
    return !f && d.length === 0 && h.length === 0 && a.push(v), g;
  }
  for (var i = !1, o = 0; o < t.length; o++) {
    var s = t[o], l = n(s);
    i = i || l;
  }
  var u = n(e, !0);
  (i || u) && (t.length > 0 ? e.notify("draw", t) : e.notify("draw")), t.unmerge(a), e.emit("step");
}
var yp = {
  // pull in animation functions
  animate: ke.animate(),
  animation: ke.animation(),
  animated: ke.animated(),
  clearQueue: ke.clearQueue(),
  delay: ke.delay(),
  delayAnimation: ke.delayAnimation(),
  stop: ke.stop(),
  addToAnimationPool: function(e) {
    var t = this;
    t.styleEnabled() && t._private.aniEles.merge(e);
  },
  stopAnimationLoop: function() {
    this._private.animationsRunning = !1;
  },
  startAnimationLoop: function() {
    var e = this;
    if (e._private.animationsRunning = !0, !e.styleEnabled())
      return;
    function t() {
      e._private.animationsRunning && Fa(function(i) {
        go(i, e), t();
      });
    }
    var a = e.renderer();
    a && a.beforeRender ? a.beforeRender(function(i, o) {
      go(o, e);
    }, a.beforeRenderPriorities.animations) : t();
  }
}, bp = {
  qualifierCompare: function(e, t) {
    return e == null || t == null ? e == null && t == null : e.sameText(t);
  },
  eventMatches: function(e, t, a) {
    var n = t.qualifier;
    return n != null ? e !== a.target && la(a.target) && n.matches(a.target) : !0;
  },
  addEventFields: function(e, t) {
    t.cy = e, t.target = e;
  },
  callbackContext: function(e, t, a) {
    return t.qualifier != null ? a.target : e;
  }
}, Pa = function(e) {
  return le(e) ? new Gr(e) : e;
}, Fs = {
  createEmitter: function() {
    var e = this._private;
    return e.emitter || (e.emitter = new an(bp, this)), this;
  },
  emitter: function() {
    return this._private.emitter;
  },
  on: function(e, t, a) {
    return this.emitter().on(e, Pa(t), a), this;
  },
  removeListener: function(e, t, a) {
    return this.emitter().removeListener(e, Pa(t), a), this;
  },
  removeAllListeners: function() {
    return this.emitter().removeAllListeners(), this;
  },
  one: function(e, t, a) {
    return this.emitter().one(e, Pa(t), a), this;
  },
  once: function(e, t, a) {
    return this.emitter().one(e, Pa(t), a), this;
  },
  emit: function(e, t) {
    return this.emitter().emit(e, t), this;
  },
  emitAndNotify: function(e, t) {
    return this.emit(e), this.notify(e, t), this;
  }
};
ke.eventAliasesOn(Fs);
var In = {
  png: function(e) {
    var t = this._private.renderer;
    return e = e || {}, t.png(e);
  },
  jpg: function(e) {
    var t = this._private.renderer;
    return e = e || {}, e.bg = e.bg || "#fff", t.jpg(e);
  }
};
In.jpeg = In.jpg;
var Oa = {
  layout: function(e) {
    var t = this;
    if (e == null) {
      Fe("Layout options must be specified to make a layout");
      return;
    }
    if (e.name == null) {
      Fe("A `name` must be specified to make a layout");
      return;
    }
    var a = e.name, n = t.extension("layout", a);
    if (n == null) {
      Fe("No such layout `" + a + "` found.  Did you forget to import it and `cytoscape.use()` it?");
      return;
    }
    var i;
    le(e.eles) ? i = t.$(e.eles) : i = e.eles != null ? e.eles : t.$();
    var o = new n(ce({}, e, {
      cy: t,
      eles: i
    }));
    return o;
  }
};
Oa.createLayout = Oa.makeLayout = Oa.layout;
var wp = {
  notify: function(e, t) {
    var a = this._private;
    if (this.batching()) {
      a.batchNotifications = a.batchNotifications || {};
      var n = a.batchNotifications[e] = a.batchNotifications[e] || this.collection();
      t != null && n.merge(t);
      return;
    }
    if (a.notificationsEnabled) {
      var i = this.renderer();
      this.destroyed() || !i || i.notify(e, t);
    }
  },
  notifications: function(e) {
    var t = this._private;
    return e === void 0 ? t.notificationsEnabled : (t.notificationsEnabled = !!e, this);
  },
  noNotifications: function(e) {
    this.notifications(!1), e(), this.notifications(!0);
  },
  batching: function() {
    return this._private.batchCount > 0;
  },
  startBatch: function() {
    var e = this._private;
    return e.batchCount == null && (e.batchCount = 0), e.batchCount === 0 && (e.batchStyleEles = this.collection(), e.batchNotifications = {}), e.batchCount++, this;
  },
  endBatch: function() {
    var e = this._private;
    if (e.batchCount === 0)
      return this;
    if (e.batchCount--, e.batchCount === 0) {
      e.batchStyleEles.updateStyle();
      var t = this.renderer();
      Object.keys(e.batchNotifications).forEach(function(a) {
        var n = e.batchNotifications[a];
        n.empty() ? t.notify(a) : t.notify(a, n);
      });
    }
    return this;
  },
  batch: function(e) {
    return this.startBatch(), e(), this.endBatch(), this;
  },
  // for backwards compatibility
  batchData: function(e) {
    var t = this;
    return this.batch(function() {
      for (var a = Object.keys(e), n = 0; n < a.length; n++) {
        var i = a[n], o = e[i], s = t.getElementById(i);
        s.data(o);
      }
    });
  }
}, xp = Ze({
  hideEdgesOnViewport: !1,
  textureOnViewport: !1,
  motionBlur: !1,
  motionBlurOpacity: 0.05,
  pixelRatio: void 0,
  desktopTapThreshold: 4,
  touchTapThreshold: 8,
  wheelSensitivity: 1,
  debug: !1,
  showFps: !1
}), zn = {
  renderTo: function(e, t, a, n) {
    var i = this._private.renderer;
    return i.renderTo(e, t, a, n), this;
  },
  renderer: function() {
    return this._private.renderer;
  },
  forceRender: function() {
    return this.notify("draw"), this;
  },
  resize: function() {
    return this.invalidateSize(), this.emitAndNotify("resize"), this;
  },
  initRenderer: function(e) {
    var t = this, a = t.extension("renderer", e.name);
    if (a == null) {
      Fe("Can not initialise: No such renderer `".concat(e.name, "` found. Did you forget to import it and `cytoscape.use()` it?"));
      return;
    }
    e.wheelSensitivity !== void 0 && Pe("You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.");
    var n = xp(e);
    n.cy = t, t._private.renderer = new a(n), this.notify("init");
  },
  destroyRenderer: function() {
    var e = this;
    e.notify("destroy");
    var t = e.container();
    if (t)
      for (t._cyreg = null; t.childNodes.length > 0; )
        t.removeChild(t.childNodes[0]);
    e._private.renderer = null, e.mutableElements().forEach(function(a) {
      var n = a._private;
      n.rscratch = {}, n.rstyle = {}, n.animation.current = [], n.animation.queue = [];
    });
  },
  onRender: function(e) {
    return this.on("render", e);
  },
  offRender: function(e) {
    return this.off("render", e);
  }
};
zn.invalidateDimensions = zn.resize;
var Ia = {
  // get a collection
  // - empty collection on no args
  // - collection of elements in the graph on selector arg
  // - guarantee a returned collection when elements or collection specified
  collection: function(e, t) {
    return le(e) ? this.$(e) : lr(e) ? e.collection() : Me(e) ? (t || (t = {}), new Ue(this, e, t.unique, t.removed)) : new Ue(this);
  },
  nodes: function(e) {
    var t = this.$(function(a) {
      return a.isNode();
    });
    return e ? t.filter(e) : t;
  },
  edges: function(e) {
    var t = this.$(function(a) {
      return a.isEdge();
    });
    return e ? t.filter(e) : t;
  },
  // search the graph like jQuery
  $: function(e) {
    var t = this._private.elements;
    return e ? t.filter(e) : t.spawnSelf();
  },
  mutableElements: function() {
    return this._private.elements;
  }
};
Ia.elements = Ia.filter = Ia.$;
var rr = {}, Yt = "t", Ep = "f";
rr.apply = function(r) {
  for (var e = this, t = e._private, a = t.cy, n = a.collection(), i = 0; i < r.length; i++) {
    var o = r[i], s = e.getContextMeta(o);
    if (!s.empty) {
      var l = e.getContextStyle(s), u = e.applyContextStyle(s, l, o);
      o._private.appliedInitStyle ? e.updateTransitions(o, u.diffProps) : o._private.appliedInitStyle = !0;
      var v = e.updateStyleHints(o);
      v && n.push(o);
    }
  }
  return n;
};
rr.getPropertiesDiff = function(r, e) {
  var t = this, a = t._private.propDiffs = t._private.propDiffs || {}, n = r + "-" + e, i = a[n];
  if (i)
    return i;
  for (var o = [], s = {}, l = 0; l < t.length; l++) {
    var u = t[l], v = r[l] === Yt, f = e[l] === Yt, c = v !== f, d = u.mappedProperties.length > 0;
    if (c || f && d) {
      var h = void 0;
      c && d || c ? h = u.properties : d && (h = u.mappedProperties);
      for (var g = 0; g < h.length; g++) {
        for (var m = h[g], p = m.name, y = !1, b = l + 1; b < t.length; b++) {
          var w = t[b], T = e[b] === Yt;
          if (T && (y = w.properties[m.name] != null, y))
            break;
        }
        !s[p] && !y && (s[p] = !0, o.push(p));
      }
    }
  }
  return a[n] = o, o;
};
rr.getContextMeta = function(r) {
  for (var e = this, t = "", a, n = r._private.styleCxtKey || "", i = 0; i < e.length; i++) {
    var o = e[i], s = o.selector && o.selector.matches(r);
    s ? t += Yt : t += Ep;
  }
  return a = e.getPropertiesDiff(n, t), r._private.styleCxtKey = t, {
    key: t,
    diffPropNames: a,
    empty: a.length === 0
  };
};
rr.getContextStyle = function(r) {
  var e = r.key, t = this, a = this._private.contextStyles = this._private.contextStyles || {};
  if (a[e])
    return a[e];
  for (var n = {
    _private: {
      key: e
    }
  }, i = 0; i < t.length; i++) {
    var o = t[i], s = e[i] === Yt;
    if (s)
      for (var l = 0; l < o.properties.length; l++) {
        var u = o.properties[l];
        n[u.name] = u;
      }
  }
  return a[e] = n, n;
};
rr.applyContextStyle = function(r, e, t) {
  for (var a = this, n = r.diffPropNames, i = {}, o = a.types, s = 0; s < n.length; s++) {
    var l = n[s], u = e[l], v = t.pstyle(l);
    if (!u)
      if (v)
        v.bypass ? u = {
          name: l,
          deleteBypassed: !0
        } : u = {
          name: l,
          delete: !0
        };
      else
        continue;
    if (v !== u) {
      if (u.mapped === o.fn && v != null && v.mapping != null && v.mapping.value === u.value) {
        var f = v.mapping, c = f.fnValue = u.value(t);
        if (c === f.prevFnValue)
          continue;
      }
      var d = i[l] = {
        prev: v
      };
      a.applyParsedProperty(t, u), d.next = t.pstyle(l), d.next && d.next.bypass && (d.next = d.next.bypassed);
    }
  }
  return {
    diffProps: i
  };
};
rr.updateStyleHints = function(r) {
  var e = r._private, t = this, a = t.propertyGroupNames, n = t.propertyGroupKeys, i = function(j, re, de) {
    return t.getPropertiesHash(j, re, de);
  }, o = e.styleKey;
  if (r.removed())
    return !1;
  var s = e.group === "nodes", l = r._private.style;
  a = Object.keys(l);
  for (var u = 0; u < n.length; u++) {
    var v = n[u];
    e.styleKeys[v] = [ht, Ht];
  }
  for (var f = function(j, re) {
    return e.styleKeys[re][0] = Zt(j, e.styleKeys[re][0]);
  }, c = function(j, re) {
    return e.styleKeys[re][1] = Qt(j, e.styleKeys[re][1]);
  }, d = function(j, re) {
    f(j, re), c(j, re);
  }, h = function(j, re) {
    for (var de = 0; de < j.length; de++) {
      var he = j.charCodeAt(de);
      f(he, re), c(he, re);
    }
  }, g = 2e9, m = function(j) {
    return -128 < j && j < 128 && Math.floor(j) !== j ? g - (j * 1024 | 0) : j;
  }, p = 0; p < a.length; p++) {
    var y = a[p], b = l[y];
    if (b != null) {
      var w = this.properties[y], T = w.type, C = w.groupKey, x = void 0;
      w.hashOverride != null ? x = w.hashOverride(r, b) : b.pfValue != null && (x = b.pfValue);
      var D = w.enums == null ? b.value : null, E = x != null, P = D != null, B = E || P, k = b.units;
      if (T.number && B && !T.multiple) {
        var M = E ? x : D;
        d(m(M), C), !E && k != null && h(k, C);
      } else
        h(b.strValue, C);
    }
  }
  for (var L = [ht, Ht], O = 0; O < n.length; O++) {
    var A = n[O], R = e.styleKeys[A];
    L[0] = Zt(R[0], L[0]), L[1] = Qt(R[1], L[1]);
  }
  e.styleKey = zd(L[0], L[1]);
  var z = e.styleKeys;
  e.labelDimsKey = Ir(z.labelDimensions);
  var F = i(r, ["label"], z.labelDimensions);
  if (e.labelKey = Ir(F), e.labelStyleKey = Ir(ba(z.commonLabel, F)), !s) {
    var q = i(r, ["source-label"], z.labelDimensions);
    e.sourceLabelKey = Ir(q), e.sourceLabelStyleKey = Ir(ba(z.commonLabel, q));
    var N = i(r, ["target-label"], z.labelDimensions);
    e.targetLabelKey = Ir(N), e.targetLabelStyleKey = Ir(ba(z.commonLabel, N));
  }
  if (s) {
    var V = e.styleKeys, Y = V.nodeBody, U = V.nodeBorder, W = V.backgroundImage, H = V.compound, I = V.pie, X = [Y, U, W, H, I].filter(function(Z) {
      return Z != null;
    }).reduce(ba, [ht, Ht]);
    e.nodeKey = Ir(X), e.hasPie = I != null && I[0] !== ht && I[1] !== Ht;
  }
  return o !== e.styleKey;
};
rr.clearStyleHints = function(r) {
  var e = r._private;
  e.styleCxtKey = "", e.styleKeys = {}, e.styleKey = null, e.labelKey = null, e.labelStyleKey = null, e.sourceLabelKey = null, e.sourceLabelStyleKey = null, e.targetLabelKey = null, e.targetLabelStyleKey = null, e.nodeKey = null, e.hasPie = null;
};
rr.applyParsedProperty = function(r, e) {
  var t = this, a = e, n = r._private.style, i, o = t.types, s = t.properties[a.name].type, l = a.bypass, u = n[a.name], v = u && u.bypass, f = r._private, c = "mapping", d = function(Y) {
    return Y == null ? null : Y.pfValue != null ? Y.pfValue : Y.value;
  }, h = function() {
    var Y = d(u), U = d(a);
    t.checkTriggers(r, a.name, Y, U);
  };
  if (a && a.name.substr(0, 3) === "pie" && Pe("The pie style properties are deprecated.  Create charts using background images instead."), e.name === "curve-style" && r.isEdge() && // loops must be bundled beziers
  (e.value !== "bezier" && r.isLoop() || // edges connected to compound nodes can not be haystacks
  e.value === "haystack" && (r.source().isParent() || r.target().isParent())) && (a = e = this.parse(e.name, "bezier", l)), a.delete)
    return n[a.name] = void 0, h(), !0;
  if (a.deleteBypassed)
    return u ? u.bypass ? (u.bypassed = void 0, h(), !0) : !1 : (h(), !0);
  if (a.deleteBypass)
    return u ? u.bypass ? (n[a.name] = u.bypassed, h(), !0) : !1 : (h(), !0);
  var g = function() {
    Pe("Do not assign mappings to elements without corresponding data (i.e. ele `" + r.id() + "` has no mapping for property `" + a.name + "` with data field `" + a.field + "`); try a `[" + a.field + "]` selector to limit scope to elements with `" + a.field + "` defined");
  };
  switch (a.mapped) {
    case o.mapData: {
      for (var m = a.field.split("."), p = f.data, y = 0; y < m.length && p; y++) {
        var b = m[y];
        p = p[b];
      }
      if (p == null)
        return g(), !1;
      var w;
      if (ae(p)) {
        var T = a.fieldMax - a.fieldMin;
        T === 0 ? w = 0 : w = (p - a.fieldMin) / T;
      } else
        return Pe("Do not use continuous mappers without specifying numeric data (i.e. `" + a.field + ": " + p + "` for `" + r.id() + "` is non-numeric)"), !1;
      if (w < 0 ? w = 0 : w > 1 && (w = 1), s.color) {
        var C = a.valueMin[0], x = a.valueMax[0], D = a.valueMin[1], E = a.valueMax[1], P = a.valueMin[2], B = a.valueMax[2], k = a.valueMin[3] == null ? 1 : a.valueMin[3], M = a.valueMax[3] == null ? 1 : a.valueMax[3], L = [Math.round(C + (x - C) * w), Math.round(D + (E - D) * w), Math.round(P + (B - P) * w), Math.round(k + (M - k) * w)];
        i = {
          // colours are simple, so just create the flat property instead of expensive string parsing
          bypass: a.bypass,
          // we're a bypass if the mapping property is a bypass
          name: a.name,
          value: L,
          strValue: "rgb(" + L[0] + ", " + L[1] + ", " + L[2] + ")"
        };
      } else if (s.number) {
        var O = a.valueMin + (a.valueMax - a.valueMin) * w;
        i = this.parse(a.name, O, a.bypass, c);
      } else
        return !1;
      if (!i)
        return g(), !1;
      i.mapping = a, a = i;
      break;
    }
    case o.data: {
      for (var A = a.field.split("."), R = f.data, z = 0; z < A.length && R; z++) {
        var F = A[z];
        R = R[F];
      }
      if (R != null && (i = this.parse(a.name, R, a.bypass, c)), !i)
        return g(), !1;
      i.mapping = a, a = i;
      break;
    }
    case o.fn: {
      var q = a.value, N = a.fnValue != null ? a.fnValue : q(r);
      if (a.prevFnValue = N, N == null)
        return Pe("Custom function mappers may not return null (i.e. `" + a.name + "` for ele `" + r.id() + "` is null)"), !1;
      if (i = this.parse(a.name, N, a.bypass, c), !i)
        return Pe("Custom function mappers may not return invalid values for the property type (i.e. `" + a.name + "` for ele `" + r.id() + "` is invalid)"), !1;
      i.mapping = Er(a), a = i;
      break;
    }
    case void 0:
      break;
    default:
      return !1;
  }
  return l ? (v ? a.bypassed = u.bypassed : a.bypassed = u, n[a.name] = a) : v ? u.bypassed = a : n[a.name] = a, h(), !0;
};
rr.cleanElements = function(r, e) {
  for (var t = 0; t < r.length; t++) {
    var a = r[t];
    if (this.clearStyleHints(a), a.dirtyCompoundBoundsCache(), a.dirtyBoundingBoxCache(), !e)
      a._private.style = {};
    else
      for (var n = a._private.style, i = Object.keys(n), o = 0; o < i.length; o++) {
        var s = i[o], l = n[s];
        l != null && (l.bypass ? l.bypassed = null : n[s] = null);
      }
  }
};
rr.update = function() {
  var r = this._private.cy, e = r.mutableElements();
  e.updateStyle();
};
rr.updateTransitions = function(r, e) {
  var t = this, a = r._private, n = r.pstyle("transition-property").value, i = r.pstyle("transition-duration").pfValue, o = r.pstyle("transition-delay").pfValue;
  if (n.length > 0 && i > 0) {
    for (var s = {}, l = !1, u = 0; u < n.length; u++) {
      var v = n[u], f = r.pstyle(v), c = e[v];
      if (c) {
        var d = c.prev, h = d, g = c.next != null ? c.next : f, m = !1, p = void 0, y = 1e-6;
        h && (ae(h.pfValue) && ae(g.pfValue) ? (m = g.pfValue - h.pfValue, p = h.pfValue + y * m) : ae(h.value) && ae(g.value) ? (m = g.value - h.value, p = h.value + y * m) : Me(h.value) && Me(g.value) && (m = h.value[0] !== g.value[0] || h.value[1] !== g.value[1] || h.value[2] !== g.value[2], p = h.strValue), m && (s[v] = g.strValue, this.applyBypass(r, v, p), l = !0));
      }
    }
    if (!l)
      return;
    a.transitioning = !0, new Pt(function(b) {
      o > 0 ? r.delayAnimation(o).play().promise().then(b) : b();
    }).then(function() {
      return r.animation({
        style: s,
        duration: i,
        easing: r.pstyle("transition-timing-function").value,
        queue: !1
      }).play().promise();
    }).then(function() {
      t.removeBypasses(r, n), r.emitAndNotify("style"), a.transitioning = !1;
    });
  } else
    a.transitioning && (this.removeBypasses(r, n), r.emitAndNotify("style"), a.transitioning = !1);
};
rr.checkTrigger = function(r, e, t, a, n, i) {
  var o = this.properties[e], s = n(o);
  s != null && s(t, a) && i(o);
};
rr.checkZOrderTrigger = function(r, e, t, a) {
  var n = this;
  this.checkTrigger(r, e, t, a, function(i) {
    return i.triggersZOrder;
  }, function() {
    n._private.cy.notify("zorder", r);
  });
};
rr.checkBoundsTrigger = function(r, e, t, a) {
  this.checkTrigger(r, e, t, a, function(n) {
    return n.triggersBounds;
  }, function(n) {
    r.dirtyCompoundBoundsCache(), r.dirtyBoundingBoxCache(), // only for beziers -- so performance of other edges isn't affected
    n.triggersBoundsOfParallelBeziers && (e === "curve-style" && (t === "bezier" || a === "bezier") || e === "display" && (t === "none" || a === "none")) && r.parallelEdges().forEach(function(i) {
      i.isBundledBezier() && i.dirtyBoundingBoxCache();
    });
  });
};
rr.checkTriggers = function(r, e, t, a) {
  r.dirtyStyleCache(), this.checkZOrderTrigger(r, e, t, a), this.checkBoundsTrigger(r, e, t, a);
};
var ca = {};
ca.applyBypass = function(r, e, t, a) {
  var n = this, i = [], o = !0;
  if (e === "*" || e === "**") {
    if (t !== void 0)
      for (var s = 0; s < n.properties.length; s++) {
        var l = n.properties[s], u = l.name, v = this.parse(u, t, !0);
        v && i.push(v);
      }
  } else if (le(e)) {
    var f = this.parse(e, t, !0);
    f && i.push(f);
  } else if (Ce(e)) {
    var c = e;
    a = t;
    for (var d = Object.keys(c), h = 0; h < d.length; h++) {
      var g = d[h], m = c[g];
      if (m === void 0 && (m = c[Ja(g)]), m !== void 0) {
        var p = this.parse(g, m, !0);
        p && i.push(p);
      }
    }
  } else
    return !1;
  if (i.length === 0)
    return !1;
  for (var y = !1, b = 0; b < r.length; b++) {
    for (var w = r[b], T = {}, C = void 0, x = 0; x < i.length; x++) {
      var D = i[x];
      if (a) {
        var E = w.pstyle(D.name);
        C = T[D.name] = {
          prev: E
        };
      }
      y = this.applyParsedProperty(w, Er(D)) || y, a && (C.next = w.pstyle(D.name));
    }
    y && this.updateStyleHints(w), a && this.updateTransitions(w, T, o);
  }
  return y;
};
ca.overrideBypass = function(r, e, t) {
  e = Un(e);
  for (var a = 0; a < r.length; a++) {
    var n = r[a], i = n._private.style[e], o = this.properties[e].type, s = o.color, l = o.mutiple, u = i ? i.pfValue != null ? i.pfValue : i.value : null;
    !i || !i.bypass ? this.applyBypass(n, e, t) : (i.value = t, i.pfValue != null && (i.pfValue = t), s ? i.strValue = "rgb(" + t.join(",") + ")" : l ? i.strValue = t.join(" ") : i.strValue = "" + t, this.updateStyleHints(n)), this.checkTriggers(n, e, u, t);
  }
};
ca.removeAllBypasses = function(r, e) {
  return this.removeBypasses(r, this.propertyNames, e);
};
ca.removeBypasses = function(r, e, t) {
  for (var a = !0, n = 0; n < r.length; n++) {
    for (var i = r[n], o = {}, s = 0; s < e.length; s++) {
      var l = e[s], u = this.properties[l], v = i.pstyle(u.name);
      if (!(!v || !v.bypass)) {
        var f = "", c = this.parse(l, f, !0), d = o[u.name] = {
          prev: v
        };
        this.applyParsedProperty(i, c), d.next = i.pstyle(u.name);
      }
    }
    this.updateStyleHints(i), t && this.updateTransitions(i, o, a);
  }
};
var ii = {};
ii.getEmSizeInPixels = function() {
  var r = this.containerCss("font-size");
  return r != null ? parseFloat(r) : 1;
};
ii.containerCss = function(r) {
  var e = this._private.cy, t = e.container();
  if (Ie && t && Ie.getComputedStyle)
    return Ie.getComputedStyle(t).getPropertyValue(r);
};
var Sr = {};
Sr.getRenderedStyle = function(r, e) {
  return e ? this.getStylePropertyValue(r, e, !0) : this.getRawStyle(r, !0);
};
Sr.getRawStyle = function(r, e) {
  var t = this;
  if (r = r[0], r) {
    for (var a = {}, n = 0; n < t.properties.length; n++) {
      var i = t.properties[n], o = t.getStylePropertyValue(r, i.name, e);
      o != null && (a[i.name] = o, a[Ja(i.name)] = o);
    }
    return a;
  }
};
Sr.getIndexedStyle = function(r, e, t, a) {
  var n = r.pstyle(e)[t][a];
  return n ?? r.cy().style().getDefaultProperty(e)[t][0];
};
Sr.getStylePropertyValue = function(r, e, t) {
  var a = this;
  if (r = r[0], r) {
    var n = a.properties[e];
    n.alias && (n = n.pointsTo);
    var i = n.type, o = r.pstyle(n.name);
    if (o) {
      var s = o.value, l = o.units, u = o.strValue;
      if (t && i.number && s != null && ae(s)) {
        var v = r.cy().zoom(), f = function(m) {
          return m * v;
        }, c = function(m, p) {
          return f(m) + p;
        }, d = Me(s), h = d ? l.every(function(g) {
          return g != null;
        }) : l != null;
        return h ? d ? s.map(function(g, m) {
          return c(g, l[m]);
        }).join(" ") : c(s, l) : d ? s.map(function(g) {
          return le(g) ? g : "" + f(g);
        }).join(" ") : "" + f(s);
      } else if (u != null)
        return u;
    }
    return null;
  }
};
Sr.getAnimationStartStyle = function(r, e) {
  for (var t = {}, a = 0; a < e.length; a++) {
    var n = e[a], i = n.name, o = r.pstyle(i);
    o !== void 0 && (Ce(o) ? o = this.parse(i, o.strValue) : o = this.parse(i, o)), o && (t[i] = o);
  }
  return t;
};
Sr.getPropsList = function(r) {
  var e = this, t = [], a = r, n = e.properties;
  if (a)
    for (var i = Object.keys(a), o = 0; o < i.length; o++) {
      var s = i[o], l = a[s], u = n[s] || n[Un(s)], v = this.parse(u.name, l);
      v && t.push(v);
    }
  return t;
};
Sr.getNonDefaultPropertiesHash = function(r, e, t) {
  var a = t.slice(), n, i, o, s, l, u;
  for (l = 0; l < e.length; l++)
    if (n = e[l], i = r.pstyle(n, !1), i != null)
      if (i.pfValue != null)
        a[0] = Zt(s, a[0]), a[1] = Qt(s, a[1]);
      else
        for (o = i.strValue, u = 0; u < o.length; u++)
          s = o.charCodeAt(u), a[0] = Zt(s, a[0]), a[1] = Qt(s, a[1]);
  return a;
};
Sr.getPropertiesHash = Sr.getNonDefaultPropertiesHash;
var sn = {};
sn.appendFromJson = function(r) {
  for (var e = this, t = 0; t < r.length; t++) {
    var a = r[t], n = a.selector, i = a.style || a.css, o = Object.keys(i);
    e.selector(n);
    for (var s = 0; s < o.length; s++) {
      var l = o[s], u = i[l];
      e.css(l, u);
    }
  }
  return e;
};
sn.fromJson = function(r) {
  var e = this;
  return e.resetToDefault(), e.appendFromJson(r), e;
};
sn.json = function() {
  for (var r = [], e = this.defaultLength; e < this.length; e++) {
    for (var t = this[e], a = t.selector, n = t.properties, i = {}, o = 0; o < n.length; o++) {
      var s = n[o];
      i[s.name] = s.strValue;
    }
    r.push({
      selector: a ? a.toString() : "core",
      style: i
    });
  }
  return r;
};
var oi = {};
oi.appendFromString = function(r) {
  var e = this, t = this, a = "" + r, n, i, o;
  a = a.replace(/[/][*](\s|.)+?[*][/]/g, "");
  function s() {
    a.length > n.length ? a = a.substr(n.length) : a = "";
  }
  function l() {
    i.length > o.length ? i = i.substr(o.length) : i = "";
  }
  for (; ; ) {
    var u = a.match(/^\s*$/);
    if (u)
      break;
    var v = a.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
    if (!v) {
      Pe("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " + a);
      break;
    }
    n = v[0];
    var f = v[1];
    if (f !== "core") {
      var c = new Gr(f);
      if (c.invalid) {
        Pe("Skipping parsing of block: Invalid selector found in string stylesheet: " + f), s();
        continue;
      }
    }
    var d = v[2], h = !1;
    i = d;
    for (var g = []; ; ) {
      var m = i.match(/^\s*$/);
      if (m)
        break;
      var p = i.match(/^\s*(.+?)\s*:\s*(.+?)(?:\s*;|\s*$)/);
      if (!p) {
        Pe("Skipping parsing of block: Invalid formatting of style property and value definitions found in:" + d), h = !0;
        break;
      }
      o = p[0];
      var y = p[1], b = p[2], w = e.properties[y];
      if (!w) {
        Pe("Skipping property: Invalid property name in: " + o), l();
        continue;
      }
      var T = t.parse(y, b);
      if (!T) {
        Pe("Skipping property: Invalid property definition in: " + o), l();
        continue;
      }
      g.push({
        name: y,
        val: b
      }), l();
    }
    if (h) {
      s();
      break;
    }
    t.selector(f);
    for (var C = 0; C < g.length; C++) {
      var x = g[C];
      t.css(x.name, x.val);
    }
    s();
  }
  return t;
};
oi.fromString = function(r) {
  var e = this;
  return e.resetToDefault(), e.appendFromString(r), e;
};
var Ye = {};
(function() {
  var r = Ve, e = Cd, t = Td, a = Dd, n = kd, i = function(X) {
    return "^" + X + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$";
  }, o = function(X) {
    var Z = r + "|\\w+|" + e + "|" + t + "|" + a + "|" + n;
    return "^" + X + "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" + r + ")\\s*\\,\\s*(" + r + ")\\s*,\\s*(" + Z + ")\\s*\\,\\s*(" + Z + ")\\)$";
  }, s = [`^url\\s*\\(\\s*['"]?(.+?)['"]?\\s*\\)$`, "^(none)$", "^(.+)$"];
  Ye.types = {
    time: {
      number: !0,
      min: 0,
      units: "s|ms",
      implicitUnits: "ms"
    },
    percent: {
      number: !0,
      min: 0,
      max: 100,
      units: "%",
      implicitUnits: "%"
    },
    percentages: {
      number: !0,
      min: 0,
      max: 100,
      units: "%",
      implicitUnits: "%",
      multiple: !0
    },
    zeroOneNumber: {
      number: !0,
      min: 0,
      max: 1,
      unitless: !0
    },
    zeroOneNumbers: {
      number: !0,
      min: 0,
      max: 1,
      unitless: !0,
      multiple: !0
    },
    nOneOneNumber: {
      number: !0,
      min: -1,
      max: 1,
      unitless: !0
    },
    nonNegativeInt: {
      number: !0,
      min: 0,
      integer: !0,
      unitless: !0
    },
    position: {
      enums: ["parent", "origin"]
    },
    nodeSize: {
      number: !0,
      min: 0,
      enums: ["label"]
    },
    number: {
      number: !0,
      unitless: !0
    },
    numbers: {
      number: !0,
      unitless: !0,
      multiple: !0
    },
    positiveNumber: {
      number: !0,
      unitless: !0,
      min: 0,
      strictMin: !0
    },
    size: {
      number: !0,
      min: 0
    },
    bidirectionalSize: {
      number: !0
    },
    // allows negative
    bidirectionalSizeMaybePercent: {
      number: !0,
      allowPercent: !0
    },
    // allows negative
    bidirectionalSizes: {
      number: !0,
      multiple: !0
    },
    // allows negative
    sizeMaybePercent: {
      number: !0,
      min: 0,
      allowPercent: !0
    },
    axisDirection: {
      enums: ["horizontal", "leftward", "rightward", "vertical", "upward", "downward", "auto"]
    },
    paddingRelativeTo: {
      enums: ["width", "height", "average", "min", "max"]
    },
    bgWH: {
      number: !0,
      min: 0,
      allowPercent: !0,
      enums: ["auto"],
      multiple: !0
    },
    bgPos: {
      number: !0,
      allowPercent: !0,
      multiple: !0
    },
    bgRelativeTo: {
      enums: ["inner", "include-padding"],
      multiple: !0
    },
    bgRepeat: {
      enums: ["repeat", "repeat-x", "repeat-y", "no-repeat"],
      multiple: !0
    },
    bgFit: {
      enums: ["none", "contain", "cover"],
      multiple: !0
    },
    bgCrossOrigin: {
      enums: ["anonymous", "use-credentials"],
      multiple: !0
    },
    bgClip: {
      enums: ["none", "node"],
      multiple: !0
    },
    bgContainment: {
      enums: ["inside", "over"],
      multiple: !0
    },
    color: {
      color: !0
    },
    colors: {
      color: !0,
      multiple: !0
    },
    fill: {
      enums: ["solid", "linear-gradient", "radial-gradient"]
    },
    bool: {
      enums: ["yes", "no"]
    },
    bools: {
      enums: ["yes", "no"],
      multiple: !0
    },
    lineStyle: {
      enums: ["solid", "dotted", "dashed"]
    },
    lineCap: {
      enums: ["butt", "round", "square"]
    },
    borderStyle: {
      enums: ["solid", "dotted", "dashed", "double"]
    },
    curveStyle: {
      enums: ["bezier", "unbundled-bezier", "haystack", "segments", "straight", "straight-triangle", "taxi"]
    },
    fontFamily: {
      regex: '^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$'
    },
    fontStyle: {
      enums: ["italic", "normal", "oblique"]
    },
    fontWeight: {
      enums: ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "800", "900", 100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    textDecoration: {
      enums: ["none", "underline", "overline", "line-through"]
    },
    textTransform: {
      enums: ["none", "uppercase", "lowercase"]
    },
    textWrap: {
      enums: ["none", "wrap", "ellipsis"]
    },
    textOverflowWrap: {
      enums: ["whitespace", "anywhere"]
    },
    textBackgroundShape: {
      enums: ["rectangle", "roundrectangle", "round-rectangle"]
    },
    nodeShape: {
      enums: ["rectangle", "roundrectangle", "round-rectangle", "cutrectangle", "cut-rectangle", "bottomroundrectangle", "bottom-round-rectangle", "barrel", "ellipse", "triangle", "round-triangle", "square", "pentagon", "round-pentagon", "hexagon", "round-hexagon", "concavehexagon", "concave-hexagon", "heptagon", "round-heptagon", "octagon", "round-octagon", "tag", "round-tag", "star", "diamond", "round-diamond", "vee", "rhomboid", "polygon"]
    },
    overlayShape: {
      enums: ["roundrectangle", "round-rectangle", "ellipse"]
    },
    compoundIncludeLabels: {
      enums: ["include", "exclude"]
    },
    arrowShape: {
      enums: ["tee", "triangle", "triangle-tee", "circle-triangle", "triangle-cross", "triangle-backcurve", "vee", "square", "circle", "diamond", "chevron", "none"]
    },
    arrowFill: {
      enums: ["filled", "hollow"]
    },
    display: {
      enums: ["element", "none"]
    },
    visibility: {
      enums: ["hidden", "visible"]
    },
    zCompoundDepth: {
      enums: ["bottom", "orphan", "auto", "top"]
    },
    zIndexCompare: {
      enums: ["auto", "manual"]
    },
    valign: {
      enums: ["top", "center", "bottom"]
    },
    halign: {
      enums: ["left", "center", "right"]
    },
    justification: {
      enums: ["left", "center", "right", "auto"]
    },
    text: {
      string: !0
    },
    data: {
      mapping: !0,
      regex: i("data")
    },
    layoutData: {
      mapping: !0,
      regex: i("layoutData")
    },
    scratch: {
      mapping: !0,
      regex: i("scratch")
    },
    mapData: {
      mapping: !0,
      regex: o("mapData")
    },
    mapLayoutData: {
      mapping: !0,
      regex: o("mapLayoutData")
    },
    mapScratch: {
      mapping: !0,
      regex: o("mapScratch")
    },
    fn: {
      mapping: !0,
      fn: !0
    },
    url: {
      regexes: s,
      singleRegexMatchValue: !0
    },
    urls: {
      regexes: s,
      singleRegexMatchValue: !0,
      multiple: !0
    },
    propList: {
      propList: !0
    },
    angle: {
      number: !0,
      units: "deg|rad",
      implicitUnits: "rad"
    },
    textRotation: {
      number: !0,
      units: "deg|rad",
      implicitUnits: "rad",
      enums: ["none", "autorotate"]
    },
    polygonPointList: {
      number: !0,
      multiple: !0,
      evenMultiple: !0,
      min: -1,
      max: 1,
      unitless: !0
    },
    edgeDistances: {
      enums: ["intersection", "node-position"]
    },
    edgeEndpoint: {
      number: !0,
      multiple: !0,
      units: "%|px|em|deg|rad",
      implicitUnits: "px",
      enums: ["inside-to-node", "outside-to-node", "outside-to-node-or-label", "outside-to-line", "outside-to-line-or-label"],
      singleEnum: !0,
      validate: function(X, Z) {
        switch (X.length) {
          case 2:
            return Z[0] !== "deg" && Z[0] !== "rad" && Z[1] !== "deg" && Z[1] !== "rad";
          case 1:
            return le(X[0]) || Z[0] === "deg" || Z[0] === "rad";
          default:
            return !1;
        }
      }
    },
    easing: {
      regexes: ["^(spring)\\s*\\(\\s*(" + r + ")\\s*,\\s*(" + r + ")\\s*\\)$", "^(cubic-bezier)\\s*\\(\\s*(" + r + ")\\s*,\\s*(" + r + ")\\s*,\\s*(" + r + ")\\s*,\\s*(" + r + ")\\s*\\)$"],
      enums: ["linear", "ease", "ease-in", "ease-out", "ease-in-out", "ease-in-sine", "ease-out-sine", "ease-in-out-sine", "ease-in-quad", "ease-out-quad", "ease-in-out-quad", "ease-in-cubic", "ease-out-cubic", "ease-in-out-cubic", "ease-in-quart", "ease-out-quart", "ease-in-out-quart", "ease-in-quint", "ease-out-quint", "ease-in-out-quint", "ease-in-expo", "ease-out-expo", "ease-in-out-expo", "ease-in-circ", "ease-out-circ", "ease-in-out-circ"]
    },
    gradientDirection: {
      enums: [
        "to-bottom",
        "to-top",
        "to-left",
        "to-right",
        "to-bottom-right",
        "to-bottom-left",
        "to-top-right",
        "to-top-left",
        "to-right-bottom",
        "to-left-bottom",
        "to-right-top",
        "to-left-top"
        // different order
      ]
    },
    boundsExpansion: {
      number: !0,
      multiple: !0,
      min: 0,
      validate: function(X) {
        var Z = X.length;
        return Z === 1 || Z === 2 || Z === 4;
      }
    }
  };
  var l = {
    zeroNonZero: function(X, Z) {
      return (X == null || Z == null) && X !== Z || X == 0 && Z != 0 ? !0 : X != 0 && Z == 0;
    },
    any: function(X, Z) {
      return X != Z;
    },
    emptyNonEmpty: function(X, Z) {
      var j = qr(X), re = qr(Z);
      return j && !re || !j && re;
    }
  }, u = Ye.types, v = [{
    name: "label",
    type: u.text,
    triggersBounds: l.any,
    triggersZOrder: l.emptyNonEmpty
  }, {
    name: "text-rotation",
    type: u.textRotation,
    triggersBounds: l.any
  }, {
    name: "text-margin-x",
    type: u.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "text-margin-y",
    type: u.bidirectionalSize,
    triggersBounds: l.any
  }], f = [{
    name: "source-label",
    type: u.text,
    triggersBounds: l.any
  }, {
    name: "source-text-rotation",
    type: u.textRotation,
    triggersBounds: l.any
  }, {
    name: "source-text-margin-x",
    type: u.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "source-text-margin-y",
    type: u.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "source-text-offset",
    type: u.size,
    triggersBounds: l.any
  }], c = [{
    name: "target-label",
    type: u.text,
    triggersBounds: l.any
  }, {
    name: "target-text-rotation",
    type: u.textRotation,
    triggersBounds: l.any
  }, {
    name: "target-text-margin-x",
    type: u.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "target-text-margin-y",
    type: u.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "target-text-offset",
    type: u.size,
    triggersBounds: l.any
  }], d = [{
    name: "font-family",
    type: u.fontFamily,
    triggersBounds: l.any
  }, {
    name: "font-style",
    type: u.fontStyle,
    triggersBounds: l.any
  }, {
    name: "font-weight",
    type: u.fontWeight,
    triggersBounds: l.any
  }, {
    name: "font-size",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "text-transform",
    type: u.textTransform,
    triggersBounds: l.any
  }, {
    name: "text-wrap",
    type: u.textWrap,
    triggersBounds: l.any
  }, {
    name: "text-overflow-wrap",
    type: u.textOverflowWrap,
    triggersBounds: l.any
  }, {
    name: "text-max-width",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "text-outline-width",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "line-height",
    type: u.positiveNumber,
    triggersBounds: l.any
  }], h = [{
    name: "text-valign",
    type: u.valign,
    triggersBounds: l.any
  }, {
    name: "text-halign",
    type: u.halign,
    triggersBounds: l.any
  }, {
    name: "color",
    type: u.color
  }, {
    name: "text-outline-color",
    type: u.color
  }, {
    name: "text-outline-opacity",
    type: u.zeroOneNumber
  }, {
    name: "text-background-color",
    type: u.color
  }, {
    name: "text-background-opacity",
    type: u.zeroOneNumber
  }, {
    name: "text-background-padding",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "text-border-opacity",
    type: u.zeroOneNumber
  }, {
    name: "text-border-color",
    type: u.color
  }, {
    name: "text-border-width",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "text-border-style",
    type: u.borderStyle,
    triggersBounds: l.any
  }, {
    name: "text-background-shape",
    type: u.textBackgroundShape,
    triggersBounds: l.any
  }, {
    name: "text-justification",
    type: u.justification
  }], g = [{
    name: "events",
    type: u.bool
  }, {
    name: "text-events",
    type: u.bool
  }], m = [{
    name: "display",
    type: u.display,
    triggersZOrder: l.any,
    triggersBounds: l.any,
    triggersBoundsOfParallelBeziers: !0
  }, {
    name: "visibility",
    type: u.visibility,
    triggersZOrder: l.any
  }, {
    name: "opacity",
    type: u.zeroOneNumber,
    triggersZOrder: l.zeroNonZero
  }, {
    name: "text-opacity",
    type: u.zeroOneNumber
  }, {
    name: "min-zoomed-font-size",
    type: u.size
  }, {
    name: "z-compound-depth",
    type: u.zCompoundDepth,
    triggersZOrder: l.any
  }, {
    name: "z-index-compare",
    type: u.zIndexCompare,
    triggersZOrder: l.any
  }, {
    name: "z-index",
    type: u.nonNegativeInt,
    triggersZOrder: l.any
  }], p = [{
    name: "overlay-padding",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "overlay-color",
    type: u.color
  }, {
    name: "overlay-opacity",
    type: u.zeroOneNumber,
    triggersBounds: l.zeroNonZero
  }, {
    name: "overlay-shape",
    type: u.overlayShape,
    triggersBounds: l.any
  }], y = [{
    name: "underlay-padding",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "underlay-color",
    type: u.color
  }, {
    name: "underlay-opacity",
    type: u.zeroOneNumber,
    triggersBounds: l.zeroNonZero
  }, {
    name: "underlay-shape",
    type: u.overlayShape,
    triggersBounds: l.any
  }], b = [{
    name: "transition-property",
    type: u.propList
  }, {
    name: "transition-duration",
    type: u.time
  }, {
    name: "transition-delay",
    type: u.time
  }, {
    name: "transition-timing-function",
    type: u.easing
  }], w = function(X, Z) {
    return Z.value === "label" ? -X.poolIndex() : Z.pfValue;
  }, T = [{
    name: "height",
    type: u.nodeSize,
    triggersBounds: l.any,
    hashOverride: w
  }, {
    name: "width",
    type: u.nodeSize,
    triggersBounds: l.any,
    hashOverride: w
  }, {
    name: "shape",
    type: u.nodeShape,
    triggersBounds: l.any
  }, {
    name: "shape-polygon-points",
    type: u.polygonPointList,
    triggersBounds: l.any
  }, {
    name: "background-color",
    type: u.color
  }, {
    name: "background-fill",
    type: u.fill
  }, {
    name: "background-opacity",
    type: u.zeroOneNumber
  }, {
    name: "background-blacken",
    type: u.nOneOneNumber
  }, {
    name: "background-gradient-stop-colors",
    type: u.colors
  }, {
    name: "background-gradient-stop-positions",
    type: u.percentages
  }, {
    name: "background-gradient-direction",
    type: u.gradientDirection
  }, {
    name: "padding",
    type: u.sizeMaybePercent,
    triggersBounds: l.any
  }, {
    name: "padding-relative-to",
    type: u.paddingRelativeTo,
    triggersBounds: l.any
  }, {
    name: "bounds-expansion",
    type: u.boundsExpansion,
    triggersBounds: l.any
  }], C = [{
    name: "border-color",
    type: u.color
  }, {
    name: "border-opacity",
    type: u.zeroOneNumber
  }, {
    name: "border-width",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "border-style",
    type: u.borderStyle
  }], x = [{
    name: "background-image",
    type: u.urls
  }, {
    name: "background-image-crossorigin",
    type: u.bgCrossOrigin
  }, {
    name: "background-image-opacity",
    type: u.zeroOneNumbers
  }, {
    name: "background-image-containment",
    type: u.bgContainment
  }, {
    name: "background-image-smoothing",
    type: u.bools
  }, {
    name: "background-position-x",
    type: u.bgPos
  }, {
    name: "background-position-y",
    type: u.bgPos
  }, {
    name: "background-width-relative-to",
    type: u.bgRelativeTo
  }, {
    name: "background-height-relative-to",
    type: u.bgRelativeTo
  }, {
    name: "background-repeat",
    type: u.bgRepeat
  }, {
    name: "background-fit",
    type: u.bgFit
  }, {
    name: "background-clip",
    type: u.bgClip
  }, {
    name: "background-width",
    type: u.bgWH
  }, {
    name: "background-height",
    type: u.bgWH
  }, {
    name: "background-offset-x",
    type: u.bgPos
  }, {
    name: "background-offset-y",
    type: u.bgPos
  }], D = [{
    name: "position",
    type: u.position,
    triggersBounds: l.any
  }, {
    name: "compound-sizing-wrt-labels",
    type: u.compoundIncludeLabels,
    triggersBounds: l.any
  }, {
    name: "min-width",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "min-width-bias-left",
    type: u.sizeMaybePercent,
    triggersBounds: l.any
  }, {
    name: "min-width-bias-right",
    type: u.sizeMaybePercent,
    triggersBounds: l.any
  }, {
    name: "min-height",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "min-height-bias-top",
    type: u.sizeMaybePercent,
    triggersBounds: l.any
  }, {
    name: "min-height-bias-bottom",
    type: u.sizeMaybePercent,
    triggersBounds: l.any
  }], E = [{
    name: "line-style",
    type: u.lineStyle
  }, {
    name: "line-color",
    type: u.color
  }, {
    name: "line-fill",
    type: u.fill
  }, {
    name: "line-cap",
    type: u.lineCap
  }, {
    name: "line-opacity",
    type: u.zeroOneNumber
  }, {
    name: "line-dash-pattern",
    type: u.numbers
  }, {
    name: "line-dash-offset",
    type: u.number
  }, {
    name: "line-gradient-stop-colors",
    type: u.colors
  }, {
    name: "line-gradient-stop-positions",
    type: u.percentages
  }, {
    name: "curve-style",
    type: u.curveStyle,
    triggersBounds: l.any,
    triggersBoundsOfParallelBeziers: !0
  }, {
    name: "haystack-radius",
    type: u.zeroOneNumber,
    triggersBounds: l.any
  }, {
    name: "source-endpoint",
    type: u.edgeEndpoint,
    triggersBounds: l.any
  }, {
    name: "target-endpoint",
    type: u.edgeEndpoint,
    triggersBounds: l.any
  }, {
    name: "control-point-step-size",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "control-point-distances",
    type: u.bidirectionalSizes,
    triggersBounds: l.any
  }, {
    name: "control-point-weights",
    type: u.numbers,
    triggersBounds: l.any
  }, {
    name: "segment-distances",
    type: u.bidirectionalSizes,
    triggersBounds: l.any
  }, {
    name: "segment-weights",
    type: u.numbers,
    triggersBounds: l.any
  }, {
    name: "taxi-turn",
    type: u.bidirectionalSizeMaybePercent,
    triggersBounds: l.any
  }, {
    name: "taxi-turn-min-distance",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "taxi-direction",
    type: u.axisDirection,
    triggersBounds: l.any
  }, {
    name: "edge-distances",
    type: u.edgeDistances,
    triggersBounds: l.any
  }, {
    name: "arrow-scale",
    type: u.positiveNumber,
    triggersBounds: l.any
  }, {
    name: "loop-direction",
    type: u.angle,
    triggersBounds: l.any
  }, {
    name: "loop-sweep",
    type: u.angle,
    triggersBounds: l.any
  }, {
    name: "source-distance-from-node",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "target-distance-from-node",
    type: u.size,
    triggersBounds: l.any
  }], P = [{
    name: "ghost",
    type: u.bool,
    triggersBounds: l.any
  }, {
    name: "ghost-offset-x",
    type: u.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "ghost-offset-y",
    type: u.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "ghost-opacity",
    type: u.zeroOneNumber
  }], B = [{
    name: "selection-box-color",
    type: u.color
  }, {
    name: "selection-box-opacity",
    type: u.zeroOneNumber
  }, {
    name: "selection-box-border-color",
    type: u.color
  }, {
    name: "selection-box-border-width",
    type: u.size
  }, {
    name: "active-bg-color",
    type: u.color
  }, {
    name: "active-bg-opacity",
    type: u.zeroOneNumber
  }, {
    name: "active-bg-size",
    type: u.size
  }, {
    name: "outside-texture-bg-color",
    type: u.color
  }, {
    name: "outside-texture-bg-opacity",
    type: u.zeroOneNumber
  }], k = [];
  Ye.pieBackgroundN = 16, k.push({
    name: "pie-size",
    type: u.sizeMaybePercent
  });
  for (var M = 1; M <= Ye.pieBackgroundN; M++)
    k.push({
      name: "pie-" + M + "-background-color",
      type: u.color
    }), k.push({
      name: "pie-" + M + "-background-size",
      type: u.percent
    }), k.push({
      name: "pie-" + M + "-background-opacity",
      type: u.zeroOneNumber
    });
  var L = [], O = Ye.arrowPrefixes = ["source", "mid-source", "target", "mid-target"];
  [{
    name: "arrow-shape",
    type: u.arrowShape,
    triggersBounds: l.any
  }, {
    name: "arrow-color",
    type: u.color
  }, {
    name: "arrow-fill",
    type: u.arrowFill
  }].forEach(function(I) {
    O.forEach(function(X) {
      var Z = X + "-" + I.name, j = I.type, re = I.triggersBounds;
      L.push({
        name: Z,
        type: j,
        triggersBounds: re
      });
    });
  }, {});
  var A = Ye.properties = [].concat(g, b, m, p, y, P, h, d, v, f, c, T, C, x, k, D, E, L, B), R = Ye.propertyGroups = {
    // common to all eles
    behavior: g,
    transition: b,
    visibility: m,
    overlay: p,
    underlay: y,
    ghost: P,
    // labels
    commonLabel: h,
    labelDimensions: d,
    mainLabel: v,
    sourceLabel: f,
    targetLabel: c,
    // node props
    nodeBody: T,
    nodeBorder: C,
    backgroundImage: x,
    pie: k,
    compound: D,
    // edge props
    edgeLine: E,
    edgeArrow: L,
    core: B
  }, z = Ye.propertyGroupNames = {}, F = Ye.propertyGroupKeys = Object.keys(R);
  F.forEach(function(I) {
    z[I] = R[I].map(function(X) {
      return X.name;
    }), R[I].forEach(function(X) {
      return X.groupKey = I;
    });
  });
  var q = Ye.aliases = [{
    name: "content",
    pointsTo: "label"
  }, {
    name: "control-point-distance",
    pointsTo: "control-point-distances"
  }, {
    name: "control-point-weight",
    pointsTo: "control-point-weights"
  }, {
    name: "edge-text-rotation",
    pointsTo: "text-rotation"
  }, {
    name: "padding-left",
    pointsTo: "padding"
  }, {
    name: "padding-right",
    pointsTo: "padding"
  }, {
    name: "padding-top",
    pointsTo: "padding"
  }, {
    name: "padding-bottom",
    pointsTo: "padding"
  }];
  Ye.propertyNames = A.map(function(I) {
    return I.name;
  });
  for (var N = 0; N < A.length; N++) {
    var V = A[N];
    A[V.name] = V;
  }
  for (var Y = 0; Y < q.length; Y++) {
    var U = q[Y], W = A[U.pointsTo], H = {
      name: U.name,
      alias: !0,
      pointsTo: W
    };
    A.push(H), A[U.name] = H;
  }
})();
Ye.getDefaultProperty = function(r) {
  return this.getDefaultProperties()[r];
};
Ye.getDefaultProperties = function() {
  var r = this._private;
  if (r.defaultProperties != null)
    return r.defaultProperties;
  for (var e = ce({
    // core props
    "selection-box-color": "#ddd",
    "selection-box-opacity": 0.65,
    "selection-box-border-color": "#aaa",
    "selection-box-border-width": 1,
    "active-bg-color": "black",
    "active-bg-opacity": 0.15,
    "active-bg-size": 30,
    "outside-texture-bg-color": "#000",
    "outside-texture-bg-opacity": 0.125,
    // common node/edge props
    events: "yes",
    "text-events": "no",
    "text-valign": "top",
    "text-halign": "center",
    "text-justification": "auto",
    "line-height": 1,
    color: "#000",
    "text-outline-color": "#000",
    "text-outline-width": 0,
    "text-outline-opacity": 1,
    "text-opacity": 1,
    "text-decoration": "none",
    "text-transform": "none",
    "text-wrap": "none",
    "text-overflow-wrap": "whitespace",
    "text-max-width": 9999,
    "text-background-color": "#000",
    "text-background-opacity": 0,
    "text-background-shape": "rectangle",
    "text-background-padding": 0,
    "text-border-opacity": 0,
    "text-border-width": 0,
    "text-border-style": "solid",
    "text-border-color": "#000",
    "font-family": "Helvetica Neue, Helvetica, sans-serif",
    "font-style": "normal",
    "font-weight": "normal",
    "font-size": 16,
    "min-zoomed-font-size": 0,
    "text-rotation": "none",
    "source-text-rotation": "none",
    "target-text-rotation": "none",
    visibility: "visible",
    display: "element",
    opacity: 1,
    "z-compound-depth": "auto",
    "z-index-compare": "auto",
    "z-index": 0,
    label: "",
    "text-margin-x": 0,
    "text-margin-y": 0,
    "source-label": "",
    "source-text-offset": 0,
    "source-text-margin-x": 0,
    "source-text-margin-y": 0,
    "target-label": "",
    "target-text-offset": 0,
    "target-text-margin-x": 0,
    "target-text-margin-y": 0,
    "overlay-opacity": 0,
    "overlay-color": "#000",
    "overlay-padding": 10,
    "overlay-shape": "round-rectangle",
    "underlay-opacity": 0,
    "underlay-color": "#000",
    "underlay-padding": 10,
    "underlay-shape": "round-rectangle",
    "transition-property": "none",
    "transition-duration": 0,
    "transition-delay": 0,
    "transition-timing-function": "linear",
    // node props
    "background-blacken": 0,
    "background-color": "#999",
    "background-fill": "solid",
    "background-opacity": 1,
    "background-image": "none",
    "background-image-crossorigin": "anonymous",
    "background-image-opacity": 1,
    "background-image-containment": "inside",
    "background-image-smoothing": "yes",
    "background-position-x": "50%",
    "background-position-y": "50%",
    "background-offset-x": 0,
    "background-offset-y": 0,
    "background-width-relative-to": "include-padding",
    "background-height-relative-to": "include-padding",
    "background-repeat": "no-repeat",
    "background-fit": "none",
    "background-clip": "node",
    "background-width": "auto",
    "background-height": "auto",
    "border-color": "#000",
    "border-opacity": 1,
    "border-width": 0,
    "border-style": "solid",
    height: 30,
    width: 30,
    shape: "ellipse",
    "shape-polygon-points": "-1, -1,   1, -1,   1, 1,   -1, 1",
    "bounds-expansion": 0,
    // node gradient
    "background-gradient-direction": "to-bottom",
    "background-gradient-stop-colors": "#999",
    "background-gradient-stop-positions": "0%",
    // ghost props
    ghost: "no",
    "ghost-offset-y": 0,
    "ghost-offset-x": 0,
    "ghost-opacity": 0,
    // compound props
    padding: 0,
    "padding-relative-to": "width",
    position: "origin",
    "compound-sizing-wrt-labels": "include",
    "min-width": 0,
    "min-width-bias-left": 0,
    "min-width-bias-right": 0,
    "min-height": 0,
    "min-height-bias-top": 0,
    "min-height-bias-bottom": 0
  }, {
    // node pie bg
    "pie-size": "100%"
  }, [{
    name: "pie-{{i}}-background-color",
    value: "black"
  }, {
    name: "pie-{{i}}-background-size",
    value: "0%"
  }, {
    name: "pie-{{i}}-background-opacity",
    value: 1
  }].reduce(function(l, u) {
    for (var v = 1; v <= Ye.pieBackgroundN; v++) {
      var f = u.name.replace("{{i}}", v), c = u.value;
      l[f] = c;
    }
    return l;
  }, {}), {
    // edge props
    "line-style": "solid",
    "line-color": "#999",
    "line-fill": "solid",
    "line-cap": "butt",
    "line-opacity": 1,
    "line-gradient-stop-colors": "#999",
    "line-gradient-stop-positions": "0%",
    "control-point-step-size": 40,
    "control-point-weights": 0.5,
    "segment-weights": 0.5,
    "segment-distances": 20,
    "taxi-turn": "50%",
    "taxi-turn-min-distance": 10,
    "taxi-direction": "auto",
    "edge-distances": "intersection",
    "curve-style": "haystack",
    "haystack-radius": 0,
    "arrow-scale": 1,
    "loop-direction": "-45deg",
    "loop-sweep": "-90deg",
    "source-distance-from-node": 0,
    "target-distance-from-node": 0,
    "source-endpoint": "outside-to-node",
    "target-endpoint": "outside-to-node",
    "line-dash-pattern": [6, 3],
    "line-dash-offset": 0
  }, [{
    name: "arrow-shape",
    value: "none"
  }, {
    name: "arrow-color",
    value: "#999"
  }, {
    name: "arrow-fill",
    value: "filled"
  }].reduce(function(l, u) {
    return Ye.arrowPrefixes.forEach(function(v) {
      var f = v + "-" + u.name, c = u.value;
      l[f] = c;
    }), l;
  }, {})), t = {}, a = 0; a < this.properties.length; a++) {
    var n = this.properties[a];
    if (!n.pointsTo) {
      var i = n.name, o = e[i], s = this.parse(i, o);
      t[i] = s;
    }
  }
  return r.defaultProperties = t, r.defaultProperties;
};
Ye.addDefaultStylesheet = function() {
  this.selector(":parent").css({
    shape: "rectangle",
    padding: 10,
    "background-color": "#eee",
    "border-color": "#ccc",
    "border-width": 1
  }).selector("edge").css({
    width: 3
  }).selector(":loop").css({
    "curve-style": "bezier"
  }).selector("edge:compound").css({
    "curve-style": "bezier",
    "source-endpoint": "outside-to-line",
    "target-endpoint": "outside-to-line"
  }).selector(":selected").css({
    "background-color": "#0169D9",
    "line-color": "#0169D9",
    "source-arrow-color": "#0169D9",
    "target-arrow-color": "#0169D9",
    "mid-source-arrow-color": "#0169D9",
    "mid-target-arrow-color": "#0169D9"
  }).selector(":parent:selected").css({
    "background-color": "#CCE1F9",
    "border-color": "#aec8e5"
  }).selector(":active").css({
    "overlay-color": "black",
    "overlay-padding": 10,
    "overlay-opacity": 0.25
  }), this.defaultLength = this.length;
};
var un = {};
un.parse = function(r, e, t, a) {
  var n = this;
  if (ze(e))
    return n.parseImplWarn(r, e, t, a);
  var i = a === "mapping" || a === !0 || a === !1 || a == null ? "dontcare" : a, o = t ? "t" : "f", s = "" + e, l = jo(r, s, o, i), u = n.propCache = n.propCache || [], v;
  return (v = u[l]) || (v = u[l] = n.parseImplWarn(r, e, t, a)), (t || a === "mapping") && (v = Er(v), v && (v.value = Er(v.value))), v;
};
un.parseImplWarn = function(r, e, t, a) {
  var n = this.parseImpl(r, e, t, a);
  return !n && e != null && Pe("The style property `".concat(r, ": ").concat(e, "` is invalid")), n && (n.name === "width" || n.name === "height") && e === "label" && Pe("The style value of `label` is deprecated for `" + n.name + "`"), n;
};
un.parseImpl = function(r, e, t, a) {
  var n = this;
  r = Un(r);
  var i = n.properties[r], o = e, s = n.types;
  if (!i || e === void 0)
    return null;
  i.alias && (i = i.pointsTo, r = i.name);
  var l = le(e);
  l && (e = e.trim());
  var u = i.type;
  if (!u)
    return null;
  if (t && (e === "" || e === null))
    return {
      name: r,
      value: e,
      bypass: !0,
      deleteBypass: !0
    };
  if (ze(e))
    return {
      name: r,
      value: e,
      strValue: "fn",
      mapped: s.fn,
      bypass: t
    };
  var v, f;
  if (!(!l || a || e.length < 7 || e[1] !== "a")) {
    if (e.length >= 7 && e[0] === "d" && (v = new RegExp(s.data.regex).exec(e))) {
      if (t)
        return !1;
      var c = s.data;
      return {
        name: r,
        value: v,
        strValue: "" + e,
        mapped: c,
        field: v[1],
        bypass: t
      };
    } else if (e.length >= 10 && e[0] === "m" && (f = new RegExp(s.mapData.regex).exec(e))) {
      if (t || u.multiple)
        return !1;
      var d = s.mapData;
      if (!(u.color || u.number))
        return !1;
      var h = this.parse(r, f[4]);
      if (!h || h.mapped)
        return !1;
      var g = this.parse(r, f[5]);
      if (!g || g.mapped)
        return !1;
      if (h.pfValue === g.pfValue || h.strValue === g.strValue)
        return Pe("`" + r + ": " + e + "` is not a valid mapper because the output range is zero; converting to `" + r + ": " + h.strValue + "`"), this.parse(r, h.strValue);
      if (u.color) {
        var m = h.value, p = g.value, y = m[0] === p[0] && m[1] === p[1] && m[2] === p[2] && // optional alpha
        (m[3] === p[3] || (m[3] == null || m[3] === 1) && (p[3] == null || p[3] === 1));
        if (y)
          return !1;
      }
      return {
        name: r,
        value: f,
        strValue: "" + e,
        mapped: d,
        field: f[1],
        fieldMin: parseFloat(f[2]),
        // min & max are numeric
        fieldMax: parseFloat(f[3]),
        valueMin: h.value,
        valueMax: g.value,
        bypass: t
      };
    }
  }
  if (u.multiple && a !== "multiple") {
    var b;
    if (l ? b = e.split(/\s+/) : Me(e) ? b = e : b = [e], u.evenMultiple && b.length % 2 !== 0)
      return null;
    for (var w = [], T = [], C = [], x = "", D = !1, E = 0; E < b.length; E++) {
      var P = n.parse(r, b[E], t, "multiple");
      D = D || le(P.value), w.push(P.value), C.push(P.pfValue != null ? P.pfValue : P.value), T.push(P.units), x += (E > 0 ? " " : "") + P.strValue;
    }
    return u.validate && !u.validate(w, T) ? null : u.singleEnum && D ? w.length === 1 && le(w[0]) ? {
      name: r,
      value: w[0],
      strValue: w[0],
      bypass: t
    } : null : {
      name: r,
      value: w,
      pfValue: C,
      strValue: x,
      bypass: t,
      units: T
    };
  }
  var B = function() {
    for (var Z = 0; Z < u.enums.length; Z++) {
      var j = u.enums[Z];
      if (j === e)
        return {
          name: r,
          value: e,
          strValue: "" + e,
          bypass: t
        };
    }
    return null;
  };
  if (u.number) {
    var k, M = "px";
    if (u.units && (k = u.units), u.implicitUnits && (M = u.implicitUnits), !u.unitless)
      if (l) {
        var L = "px|em" + (u.allowPercent ? "|\\%" : "");
        k && (L = k);
        var O = e.match("^(" + Ve + ")(" + L + ")?$");
        O && (e = O[1], k = O[2] || M);
      } else
        (!k || u.implicitUnits) && (k = M);
    if (e = parseFloat(e), isNaN(e) && u.enums === void 0)
      return null;
    if (isNaN(e) && u.enums !== void 0)
      return e = o, B();
    if (u.integer && !pd(e) || u.min !== void 0 && (e < u.min || u.strictMin && e === u.min) || u.max !== void 0 && (e > u.max || u.strictMax && e === u.max))
      return null;
    var A = {
      name: r,
      value: e,
      strValue: "" + e + (k || ""),
      units: k,
      bypass: t
    };
    return u.unitless || k !== "px" && k !== "em" ? A.pfValue = e : A.pfValue = k === "px" || !k ? e : this.getEmSizeInPixels() * e, (k === "ms" || k === "s") && (A.pfValue = k === "ms" ? e : 1e3 * e), (k === "deg" || k === "rad") && (A.pfValue = k === "rad" ? e : fh(e)), k === "%" && (A.pfValue = e / 100), A;
  } else if (u.propList) {
    var R = [], z = "" + e;
    if (z !== "none") {
      for (var F = z.split(/\s*,\s*|\s+/), q = 0; q < F.length; q++) {
        var N = F[q].trim();
        n.properties[N] ? R.push(N) : Pe("`" + N + "` is not a valid property name");
      }
      if (R.length === 0)
        return null;
    }
    return {
      name: r,
      value: R,
      strValue: R.length === 0 ? "none" : R.join(" "),
      bypass: t
    };
  } else if (u.color) {
    var V = Rd(e);
    return V ? {
      name: r,
      value: V,
      pfValue: V,
      strValue: "rgb(" + V[0] + "," + V[1] + "," + V[2] + ")",
      // n.b. no spaces b/c of multiple support
      bypass: t
    } : null;
  } else if (u.regex || u.regexes) {
    if (u.enums) {
      var Y = B();
      if (Y)
        return Y;
    }
    for (var U = u.regexes ? u.regexes : [u.regex], W = 0; W < U.length; W++) {
      var H = new RegExp(U[W]), I = H.exec(e);
      if (I)
        return {
          name: r,
          value: u.singleRegexMatchValue ? I[1] : I,
          strValue: "" + e,
          bypass: t
        };
    }
    return null;
  } else
    return u.string ? {
      name: r,
      value: "" + e,
      strValue: "" + e,
      bypass: t
    } : u.enums ? B() : null;
};
var Je = function r(e) {
  if (!(this instanceof r))
    return new r(e);
  if (!Xn(e)) {
    Fe("A style must have a core reference");
    return;
  }
  this._private = {
    cy: e,
    coreStyle: {}
  }, this.length = 0, this.resetToDefault();
}, er = Je.prototype;
er.instanceString = function() {
  return "style";
};
er.clear = function() {
  for (var r = this._private, e = r.cy, t = e.elements(), a = 0; a < this.length; a++)
    this[a] = void 0;
  return this.length = 0, r.contextStyles = {}, r.propDiffs = {}, this.cleanElements(t, !0), t.forEach(function(n) {
    var i = n[0]._private;
    i.styleDirty = !0, i.appliedInitStyle = !1;
  }), this;
};
er.resetToDefault = function() {
  return this.clear(), this.addDefaultStylesheet(), this;
};
er.core = function(r) {
  return this._private.coreStyle[r] || this.getDefaultProperty(r);
};
er.selector = function(r) {
  var e = r === "core" ? null : new Gr(r), t = this.length++;
  return this[t] = {
    selector: e,
    properties: [],
    mappedProperties: [],
    index: t
  }, this;
};
er.css = function() {
  var r = this, e = arguments;
  if (e.length === 1)
    for (var t = e[0], a = 0; a < r.properties.length; a++) {
      var n = r.properties[a], i = t[n.name];
      i === void 0 && (i = t[Ja(n.name)]), i !== void 0 && this.cssRule(n.name, i);
    }
  else
    e.length === 2 && this.cssRule(e[0], e[1]);
  return this;
};
er.style = er.css;
er.cssRule = function(r, e) {
  var t = this.parse(r, e);
  if (t) {
    var a = this.length - 1;
    this[a].properties.push(t), this[a].properties[t.name] = t, t.name.match(/pie-(\d+)-background-size/) && t.value && (this._private.hasPie = !0), t.mapped && this[a].mappedProperties.push(t);
    var n = !this[a].selector;
    n && (this._private.coreStyle[t.name] = t);
  }
  return this;
};
er.append = function(r) {
  return Wo(r) ? r.appendToStyle(this) : Me(r) ? this.appendFromJson(r) : le(r) && this.appendFromString(r), this;
};
Je.fromJson = function(r, e) {
  var t = new Je(r);
  return t.fromJson(e), t;
};
Je.fromString = function(r, e) {
  return new Je(r).fromString(e);
};
[rr, ca, ii, Sr, sn, oi, Ye, un].forEach(function(r) {
  ce(er, r);
});
Je.types = er.types;
Je.properties = er.properties;
Je.propertyGroups = er.propertyGroups;
Je.propertyGroupNames = er.propertyGroupNames;
Je.propertyGroupKeys = er.propertyGroupKeys;
var Cp = {
  style: function(e) {
    if (e) {
      var t = this.setStyle(e);
      t.update();
    }
    return this._private.style;
  },
  setStyle: function(e) {
    var t = this._private;
    return Wo(e) ? t.style = e.generateStyle(this) : Me(e) ? t.style = Je.fromJson(this, e) : le(e) ? t.style = Je.fromString(this, e) : t.style = Je(this), t.style;
  },
  // e.g. cy.data() changed => recalc ele mappers
  updateStyle: function() {
    this.mutableElements().updateStyle();
  }
}, Sp = "single", tt = {
  autolock: function(e) {
    if (e !== void 0)
      this._private.autolock = !!e;
    else
      return this._private.autolock;
    return this;
  },
  autoungrabify: function(e) {
    if (e !== void 0)
      this._private.autoungrabify = !!e;
    else
      return this._private.autoungrabify;
    return this;
  },
  autounselectify: function(e) {
    if (e !== void 0)
      this._private.autounselectify = !!e;
    else
      return this._private.autounselectify;
    return this;
  },
  selectionType: function(e) {
    var t = this._private;
    if (t.selectionType == null && (t.selectionType = Sp), e !== void 0)
      (e === "additive" || e === "single") && (t.selectionType = e);
    else
      return t.selectionType;
    return this;
  },
  panningEnabled: function(e) {
    if (e !== void 0)
      this._private.panningEnabled = !!e;
    else
      return this._private.panningEnabled;
    return this;
  },
  userPanningEnabled: function(e) {
    if (e !== void 0)
      this._private.userPanningEnabled = !!e;
    else
      return this._private.userPanningEnabled;
    return this;
  },
  zoomingEnabled: function(e) {
    if (e !== void 0)
      this._private.zoomingEnabled = !!e;
    else
      return this._private.zoomingEnabled;
    return this;
  },
  userZoomingEnabled: function(e) {
    if (e !== void 0)
      this._private.userZoomingEnabled = !!e;
    else
      return this._private.userZoomingEnabled;
    return this;
  },
  boxSelectionEnabled: function(e) {
    if (e !== void 0)
      this._private.boxSelectionEnabled = !!e;
    else
      return this._private.boxSelectionEnabled;
    return this;
  },
  pan: function() {
    var e = arguments, t = this._private.pan, a, n, i, o, s;
    switch (e.length) {
      case 0:
        return t;
      case 1:
        if (le(e[0]))
          return a = e[0], t[a];
        if (Ce(e[0])) {
          if (!this._private.panningEnabled)
            return this;
          i = e[0], o = i.x, s = i.y, ae(o) && (t.x = o), ae(s) && (t.y = s), this.emit("pan viewport");
        }
        break;
      case 2:
        if (!this._private.panningEnabled)
          return this;
        a = e[0], n = e[1], (a === "x" || a === "y") && ae(n) && (t[a] = n), this.emit("pan viewport");
        break;
    }
    return this.notify("viewport"), this;
  },
  panBy: function(e, t) {
    var a = arguments, n = this._private.pan, i, o, s, l, u;
    if (!this._private.panningEnabled)
      return this;
    switch (a.length) {
      case 1:
        Ce(e) && (s = a[0], l = s.x, u = s.y, ae(l) && (n.x += l), ae(u) && (n.y += u), this.emit("pan viewport"));
        break;
      case 2:
        i = e, o = t, (i === "x" || i === "y") && ae(o) && (n[i] += o), this.emit("pan viewport");
        break;
    }
    return this.notify("viewport"), this;
  },
  fit: function(e, t) {
    var a = this.getFitViewport(e, t);
    if (a) {
      var n = this._private;
      n.zoom = a.zoom, n.pan = a.pan, this.emit("pan zoom viewport"), this.notify("viewport");
    }
    return this;
  },
  getFitViewport: function(e, t) {
    if (ae(e) && t === void 0 && (t = e, e = void 0), !(!this._private.panningEnabled || !this._private.zoomingEnabled)) {
      var a;
      if (le(e)) {
        var n = e;
        e = this.$(n);
      } else if (bd(e)) {
        var i = e;
        a = {
          x1: i.x1,
          y1: i.y1,
          x2: i.x2,
          y2: i.y2
        }, a.w = a.x2 - a.x1, a.h = a.y2 - a.y1;
      } else
        lr(e) || (e = this.mutableElements());
      if (!(lr(e) && e.empty())) {
        a = a || e.boundingBox();
        var o = this.width(), s = this.height(), l;
        if (t = ae(t) ? t : 0, !isNaN(o) && !isNaN(s) && o > 0 && s > 0 && !isNaN(a.w) && !isNaN(a.h) && a.w > 0 && a.h > 0) {
          l = Math.min((o - 2 * t) / a.w, (s - 2 * t) / a.h), l = l > this._private.maxZoom ? this._private.maxZoom : l, l = l < this._private.minZoom ? this._private.minZoom : l;
          var u = {
            // now pan to middle
            x: (o - l * (a.x1 + a.x2)) / 2,
            y: (s - l * (a.y1 + a.y2)) / 2
          };
          return {
            zoom: l,
            pan: u
          };
        }
      }
    }
  },
  zoomRange: function(e, t) {
    var a = this._private;
    if (t == null) {
      var n = e;
      e = n.min, t = n.max;
    }
    return ae(e) && ae(t) && e <= t ? (a.minZoom = e, a.maxZoom = t) : ae(e) && t === void 0 && e <= a.maxZoom ? a.minZoom = e : ae(t) && e === void 0 && t >= a.minZoom && (a.maxZoom = t), this;
  },
  minZoom: function(e) {
    return e === void 0 ? this._private.minZoom : this.zoomRange({
      min: e
    });
  },
  maxZoom: function(e) {
    return e === void 0 ? this._private.maxZoom : this.zoomRange({
      max: e
    });
  },
  getZoomedViewport: function(e) {
    var t = this._private, a = t.pan, n = t.zoom, i, o, s = !1;
    if (t.zoomingEnabled || (s = !0), ae(e) ? o = e : Ce(e) && (o = e.level, e.position != null ? i = en(e.position, n, a) : e.renderedPosition != null && (i = e.renderedPosition), i != null && !t.panningEnabled && (s = !0)), o = o > t.maxZoom ? t.maxZoom : o, o = o < t.minZoom ? t.minZoom : o, s || !ae(o) || o === n || i != null && (!ae(i.x) || !ae(i.y)))
      return null;
    if (i != null) {
      var l = a, u = n, v = o, f = {
        x: -v / u * (i.x - l.x) + i.x,
        y: -v / u * (i.y - l.y) + i.y
      };
      return {
        zoomed: !0,
        panned: !0,
        zoom: v,
        pan: f
      };
    } else
      return {
        zoomed: !0,
        panned: !1,
        zoom: o,
        pan: a
      };
  },
  zoom: function(e) {
    if (e === void 0)
      return this._private.zoom;
    var t = this.getZoomedViewport(e), a = this._private;
    return t == null || !t.zoomed ? this : (a.zoom = t.zoom, t.panned && (a.pan.x = t.pan.x, a.pan.y = t.pan.y), this.emit("zoom" + (t.panned ? " pan" : "") + " viewport"), this.notify("viewport"), this);
  },
  viewport: function(e) {
    var t = this._private, a = !0, n = !0, i = [], o = !1, s = !1;
    if (!e)
      return this;
    if (ae(e.zoom) || (a = !1), Ce(e.pan) || (n = !1), !a && !n)
      return this;
    if (a) {
      var l = e.zoom;
      l < t.minZoom || l > t.maxZoom || !t.zoomingEnabled ? o = !0 : (t.zoom = l, i.push("zoom"));
    }
    if (n && (!o || !e.cancelOnFailedZoom) && t.panningEnabled) {
      var u = e.pan;
      ae(u.x) && (t.pan.x = u.x, s = !1), ae(u.y) && (t.pan.y = u.y, s = !1), s || i.push("pan");
    }
    return i.length > 0 && (i.push("viewport"), this.emit(i.join(" ")), this.notify("viewport")), this;
  },
  center: function(e) {
    var t = this.getCenterPan(e);
    return t && (this._private.pan = t, this.emit("pan viewport"), this.notify("viewport")), this;
  },
  getCenterPan: function(e, t) {
    if (this._private.panningEnabled) {
      if (le(e)) {
        var a = e;
        e = this.mutableElements().filter(a);
      } else
        lr(e) || (e = this.mutableElements());
      if (e.length !== 0) {
        var n = e.boundingBox(), i = this.width(), o = this.height();
        t = t === void 0 ? this._private.zoom : t;
        var s = {
          // middle
          x: (i - t * (n.x1 + n.x2)) / 2,
          y: (o - t * (n.y1 + n.y2)) / 2
        };
        return s;
      }
    }
  },
  reset: function() {
    return !this._private.panningEnabled || !this._private.zoomingEnabled ? this : (this.viewport({
      pan: {
        x: 0,
        y: 0
      },
      zoom: 1
    }), this);
  },
  invalidateSize: function() {
    this._private.sizeCache = null;
  },
  size: function() {
    var e = this._private, t = e.container;
    return e.sizeCache = e.sizeCache || (t ? function() {
      var a = Ie.getComputedStyle(t), n = function(o) {
        return parseFloat(a.getPropertyValue(o));
      };
      return {
        width: t.clientWidth - n("padding-left") - n("padding-right"),
        height: t.clientHeight - n("padding-top") - n("padding-bottom")
      };
    }() : {
      // fallback if no container (not 0 b/c can be used for dividing etc)
      width: 1,
      height: 1
    });
  },
  width: function() {
    return this.size().width;
  },
  height: function() {
    return this.size().height;
  },
  extent: function() {
    var e = this._private.pan, t = this._private.zoom, a = this.renderedExtent(), n = {
      x1: (a.x1 - e.x) / t,
      x2: (a.x2 - e.x) / t,
      y1: (a.y1 - e.y) / t,
      y2: (a.y2 - e.y) / t
    };
    return n.w = n.x2 - n.x1, n.h = n.y2 - n.y1, n;
  },
  renderedExtent: function() {
    var e = this.width(), t = this.height();
    return {
      x1: 0,
      y1: 0,
      x2: e,
      y2: t,
      w: e,
      h: t
    };
  },
  multiClickDebounceTime: function(e) {
    if (e)
      this._private.multiClickDebounceTime = e;
    else
      return this._private.multiClickDebounceTime;
    return this;
  }
};
tt.centre = tt.center;
tt.autolockNodes = tt.autolock;
tt.autoungrabifyNodes = tt.autoungrabify;
var ta = {
  data: ke.data({
    field: "data",
    bindingEvent: "data",
    allowBinding: !0,
    allowSetting: !0,
    settingEvent: "data",
    settingTriggersEvent: !0,
    triggerFnName: "trigger",
    allowGetting: !0,
    updateStyle: !0
  }),
  removeData: ke.removeData({
    field: "data",
    event: "data",
    triggerFnName: "trigger",
    triggerEvent: !0,
    updateStyle: !0
  }),
  scratch: ke.data({
    field: "scratch",
    bindingEvent: "scratch",
    allowBinding: !0,
    allowSetting: !0,
    settingEvent: "scratch",
    settingTriggersEvent: !0,
    triggerFnName: "trigger",
    allowGetting: !0,
    updateStyle: !0
  }),
  removeScratch: ke.removeData({
    field: "scratch",
    event: "scratch",
    triggerFnName: "trigger",
    triggerEvent: !0,
    updateStyle: !0
  })
};
ta.attr = ta.data;
ta.removeAttr = ta.removeData;
var aa = function(e) {
  var t = this;
  e = ce({}, e);
  var a = e.container;
  a && !Na(a) && Na(a[0]) && (a = a[0]);
  var n = a ? a._cyreg : null;
  n = n || {}, n && n.cy && (n.cy.destroy(), n = {});
  var i = n.readies = n.readies || [];
  a && (a._cyreg = n), n.cy = t;
  var o = Ie !== void 0 && a !== void 0 && !e.headless, s = e;
  s.layout = ce({
    name: o ? "grid" : "null"
  }, s.layout), s.renderer = ce({
    name: o ? "canvas" : "null"
  }, s.renderer);
  var l = function(h, g, m) {
    return g !== void 0 ? g : m !== void 0 ? m : h;
  }, u = this._private = {
    container: a,
    // html dom ele container
    ready: !1,
    // whether ready has been triggered
    options: s,
    // cached options
    elements: new Ue(this),
    // elements in the graph
    listeners: [],
    // list of listeners
    aniEles: new Ue(this),
    // elements being animated
    data: s.data || {},
    // data for the core
    scratch: {},
    // scratch object for core
    layout: null,
    renderer: null,
    destroyed: !1,
    // whether destroy was called
    notificationsEnabled: !0,
    // whether notifications are sent to the renderer
    minZoom: 1e-50,
    maxZoom: 1e50,
    zoomingEnabled: l(!0, s.zoomingEnabled),
    userZoomingEnabled: l(!0, s.userZoomingEnabled),
    panningEnabled: l(!0, s.panningEnabled),
    userPanningEnabled: l(!0, s.userPanningEnabled),
    boxSelectionEnabled: l(!0, s.boxSelectionEnabled),
    autolock: l(!1, s.autolock, s.autolockNodes),
    autoungrabify: l(!1, s.autoungrabify, s.autoungrabifyNodes),
    autounselectify: l(!1, s.autounselectify),
    styleEnabled: s.styleEnabled === void 0 ? o : s.styleEnabled,
    zoom: ae(s.zoom) ? s.zoom : 1,
    pan: {
      x: Ce(s.pan) && ae(s.pan.x) ? s.pan.x : 0,
      y: Ce(s.pan) && ae(s.pan.y) ? s.pan.y : 0
    },
    animation: {
      // object for currently-running animations
      current: [],
      queue: []
    },
    hasCompoundNodes: !1,
    multiClickDebounceTime: l(250, s.multiClickDebounceTime)
  };
  this.createEmitter(), this.selectionType(s.selectionType), this.zoomRange({
    min: s.minZoom,
    max: s.maxZoom
  });
  var v = function(h, g) {
    var m = h.some(wd);
    if (m)
      return Pt.all(h).then(g);
    g(h);
  };
  u.styleEnabled && t.setStyle([]);
  var f = ce({}, s, s.renderer);
  t.initRenderer(f);
  var c = function(h, g, m) {
    t.notifications(!1);
    var p = t.mutableElements();
    p.length > 0 && p.remove(), h != null && (Ce(h) || Me(h)) && t.add(h), t.one("layoutready", function(b) {
      t.notifications(!0), t.emit(b), t.one("load", g), t.emitAndNotify("load");
    }).one("layoutstop", function() {
      t.one("done", m), t.emit("done");
    });
    var y = ce({}, t._private.options.layout);
    y.eles = t.elements(), t.layout(y).run();
  };
  v([s.style, s.elements], function(d) {
    var h = d[0], g = d[1];
    u.styleEnabled && t.style().append(h), c(g, function() {
      t.startAnimationLoop(), u.ready = !0, ze(s.ready) && t.on("ready", s.ready);
      for (var m = 0; m < i.length; m++) {
        var p = i[m];
        t.on("ready", p);
      }
      n && (n.readies = []), t.emit("ready");
    }, s.done);
  });
}, Ha = aa.prototype;
ce(Ha, {
  instanceString: function() {
    return "core";
  },
  isReady: function() {
    return this._private.ready;
  },
  destroyed: function() {
    return this._private.destroyed;
  },
  ready: function(e) {
    return this.isReady() ? this.emitter().emit("ready", [], e) : this.on("ready", e), this;
  },
  destroy: function() {
    var e = this;
    if (!e.destroyed())
      return e.stopAnimationLoop(), e.destroyRenderer(), this.emit("destroy"), e._private.destroyed = !0, e;
  },
  hasElementWithId: function(e) {
    return this._private.elements.hasElementWithId(e);
  },
  getElementById: function(e) {
    return this._private.elements.getElementById(e);
  },
  hasCompoundNodes: function() {
    return this._private.hasCompoundNodes;
  },
  headless: function() {
    return this._private.renderer.isHeadless();
  },
  styleEnabled: function() {
    return this._private.styleEnabled;
  },
  addToPool: function(e) {
    return this._private.elements.merge(e), this;
  },
  removeFromPool: function(e) {
    return this._private.elements.unmerge(e), this;
  },
  container: function() {
    return this._private.container || null;
  },
  mount: function(e) {
    if (e != null) {
      var t = this, a = t._private, n = a.options;
      return !Na(e) && Na(e[0]) && (e = e[0]), t.stopAnimationLoop(), t.destroyRenderer(), a.container = e, a.styleEnabled = !0, t.invalidateSize(), t.initRenderer(ce({}, n, n.renderer, {
        // allow custom renderer name to be re-used, otherwise use canvas
        name: n.renderer.name === "null" ? "canvas" : n.renderer.name
      })), t.startAnimationLoop(), t.style(n.style), t.emit("mount"), t;
    }
  },
  unmount: function() {
    var e = this;
    return e.stopAnimationLoop(), e.destroyRenderer(), e.initRenderer({
      name: "null"
    }), e.emit("unmount"), e;
  },
  options: function() {
    return Er(this._private.options);
  },
  json: function(e) {
    var t = this, a = t._private, n = t.mutableElements(), i = function(w) {
      return t.getElementById(w.id());
    };
    if (Ce(e)) {
      if (t.startBatch(), e.elements) {
        var o = {}, s = function(w, T) {
          for (var C = [], x = [], D = 0; D < w.length; D++) {
            var E = w[D];
            if (!E.data.id) {
              Pe("cy.json() cannot handle elements without an ID attribute");
              continue;
            }
            var P = "" + E.data.id, B = t.getElementById(P);
            o[P] = !0, B.length !== 0 ? x.push({
              ele: B,
              json: E
            }) : (T && (E.group = T), C.push(E));
          }
          t.add(C);
          for (var k = 0; k < x.length; k++) {
            var M = x[k], L = M.ele, O = M.json;
            L.json(O);
          }
        };
        if (Me(e.elements))
          s(e.elements);
        else
          for (var l = ["nodes", "edges"], u = 0; u < l.length; u++) {
            var v = l[u], f = e.elements[v];
            Me(f) && s(f, v);
          }
        var c = t.collection();
        n.filter(function(b) {
          return !o[b.id()];
        }).forEach(function(b) {
          b.isParent() ? c.merge(b) : b.remove();
        }), c.forEach(function(b) {
          return b.children().move({
            parent: null
          });
        }), c.forEach(function(b) {
          return i(b).remove();
        });
      }
      e.style && t.style(e.style), e.zoom != null && e.zoom !== a.zoom && t.zoom(e.zoom), e.pan && (e.pan.x !== a.pan.x || e.pan.y !== a.pan.y) && t.pan(e.pan), e.data && t.data(e.data);
      for (var d = ["minZoom", "maxZoom", "zoomingEnabled", "userZoomingEnabled", "panningEnabled", "userPanningEnabled", "boxSelectionEnabled", "autolock", "autoungrabify", "autounselectify", "multiClickDebounceTime"], h = 0; h < d.length; h++) {
        var g = d[h];
        e[g] != null && t[g](e[g]);
      }
      return t.endBatch(), this;
    } else {
      var m = !!e, p = {};
      m ? p.elements = this.elements().map(function(b) {
        return b.json();
      }) : (p.elements = {}, n.forEach(function(b) {
        var w = b.group();
        p.elements[w] || (p.elements[w] = []), p.elements[w].push(b.json());
      })), this._private.styleEnabled && (p.style = t.style().json()), p.data = Er(t.data());
      var y = a.options;
      return p.zoomingEnabled = a.zoomingEnabled, p.userZoomingEnabled = a.userZoomingEnabled, p.zoom = a.zoom, p.minZoom = a.minZoom, p.maxZoom = a.maxZoom, p.panningEnabled = a.panningEnabled, p.userPanningEnabled = a.userPanningEnabled, p.pan = Er(a.pan), p.boxSelectionEnabled = a.boxSelectionEnabled, p.renderer = Er(y.renderer), p.hideEdgesOnViewport = y.hideEdgesOnViewport, p.textureOnViewport = y.textureOnViewport, p.wheelSensitivity = y.wheelSensitivity, p.motionBlur = y.motionBlur, p.multiClickDebounceTime = y.multiClickDebounceTime, p;
    }
  }
});
Ha.$id = Ha.getElementById;
[dp, yp, Fs, In, Oa, wp, zn, Ia, Cp, tt, ta].forEach(function(r) {
  ce(Ha, r);
});
var Tp = {
  fit: !0,
  // whether to fit the viewport to the graph
  directed: !1,
  // whether the tree is directed downwards (or edges can point in any direction if false)
  padding: 30,
  // padding on fit
  circle: !1,
  // put depths in concentric circles if true, put depths top down if false
  grid: !1,
  // whether to create an even grid into which the DAG is placed (circle:false only)
  spacingFactor: 1.75,
  // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: !0,
  // prevents node overlap, may overflow boundingBox if not enough space
  nodeDimensionsIncludeLabels: !1,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  roots: void 0,
  // the roots of the trees
  maximal: !1,
  // whether to shift nodes down their natural BFS depths in order to avoid upwards edges (DAGS only)
  depthSort: void 0,
  // a sorting function to order nodes at equal depth. e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled,
  animateFilter: function(e, t) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, t) {
    return t;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts
}, ct = function(e) {
  return e.scratch("breadthfirst");
}, po = function(e, t) {
  return e.scratch("breadthfirst", t);
};
function $s(r) {
  this.options = ce({}, Tp, r);
}
$s.prototype.run = function() {
  var r = this.options, e = r, t = r.cy, a = e.eles, n = a.nodes().filter(function(te) {
    return !te.isParent();
  }), i = a, o = e.directed, s = e.maximal || e.maximalAdjustments > 0, l = ur(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: t.width(),
    h: t.height()
  }), u;
  if (lr(e.roots))
    u = e.roots;
  else if (Me(e.roots)) {
    for (var v = [], f = 0; f < e.roots.length; f++) {
      var c = e.roots[f], d = t.getElementById(c);
      v.push(d);
    }
    u = t.collection(v);
  } else if (le(e.roots))
    u = t.$(e.roots);
  else if (o)
    u = n.roots();
  else {
    var h = a.components();
    u = t.collection();
    for (var g = function(ee) {
      var ve = h[ee], oe = ve.maxDegree(!1), ne = ve.filter(function(ue) {
        return ue.degree(!1) === oe;
      });
      u = u.add(ne);
    }, m = 0; m < h.length; m++)
      g(m);
  }
  var p = [], y = {}, b = function(ee, ve) {
    p[ve] == null && (p[ve] = []);
    var oe = p[ve].length;
    p[ve].push(ee), po(ee, {
      index: oe,
      depth: ve
    });
  }, w = function(ee, ve) {
    var oe = ct(ee), ne = oe.depth, ue = oe.index;
    p[ne][ue] = null, b(ee, ve);
  };
  i.bfs({
    roots: u,
    directed: e.directed,
    visit: function(ee, ve, oe, ne, ue) {
      var we = ee[0], ge = we.id();
      b(we, ue), y[ge] = !0;
    }
  });
  for (var T = [], C = 0; C < n.length; C++) {
    var x = n[C];
    y[x.id()] || T.push(x);
  }
  var D = function(ee) {
    for (var ve = p[ee], oe = 0; oe < ve.length; oe++) {
      var ne = ve[oe];
      if (ne == null) {
        ve.splice(oe, 1), oe--;
        continue;
      }
      po(ne, {
        depth: ee,
        index: oe
      });
    }
  }, E = function() {
    for (var ee = 0; ee < p.length; ee++)
      D(ee);
  }, P = function(ee, ve) {
    for (var oe = ct(ee), ne = ee.incomers().filter(function(S) {
      return S.isNode() && a.has(S);
    }), ue = -1, we = ee.id(), ge = 0; ge < ne.length; ge++) {
      var fe = ne[ge], _ = ct(fe);
      ue = Math.max(ue, _.depth);
    }
    return oe.depth <= ue ? ve[we] ? null : (w(ee, ue + 1), ve[we] = !0, !0) : !1;
  };
  if (o && s) {
    var B = [], k = {}, M = function(ee) {
      return B.push(ee);
    }, L = function() {
      return B.shift();
    };
    for (n.forEach(function(te) {
      return B.push(te);
    }); B.length > 0; ) {
      var O = L(), A = P(O, k);
      if (A)
        O.outgoers().filter(function(te) {
          return te.isNode() && a.has(te);
        }).forEach(M);
      else if (A === null) {
        Pe("Detected double maximal shift for node `" + O.id() + "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs.");
        break;
      }
    }
  }
  E();
  var R = 0;
  if (e.avoidOverlap)
    for (var z = 0; z < n.length; z++) {
      var F = n[z], q = F.layoutDimensions(e), N = q.w, V = q.h;
      R = Math.max(R, N, V);
    }
  var Y = {}, U = function(ee) {
    if (Y[ee.id()])
      return Y[ee.id()];
    for (var ve = ct(ee).depth, oe = ee.neighborhood(), ne = 0, ue = 0, we = 0; we < oe.length; we++) {
      var ge = oe[we];
      if (!(ge.isEdge() || ge.isParent() || !n.has(ge))) {
        var fe = ct(ge);
        if (fe != null) {
          var _ = fe.index, S = fe.depth;
          if (!(_ == null || S == null)) {
            var $ = p[S].length;
            S < ve && (ne += _ / $, ue++);
          }
        }
      }
    }
    return ue = Math.max(1, ue), ne = ne / ue, ue === 0 && (ne = 0), Y[ee.id()] = ne, ne;
  }, W = function(ee, ve) {
    var oe = U(ee), ne = U(ve), ue = oe - ne;
    return ue === 0 ? Xo(ee.id(), ve.id()) : ue;
  };
  e.depthSort !== void 0 && (W = e.depthSort);
  for (var H = 0; H < p.length; H++)
    p[H].sort(W), D(H);
  for (var I = [], X = 0; X < T.length; X++)
    I.push(T[X]);
  p.unshift(I), E();
  for (var Z = 0, j = 0; j < p.length; j++)
    Z = Math.max(p[j].length, Z);
  var re = {
    x: l.x1 + l.w / 2,
    y: l.x1 + l.h / 2
  }, de = p.reduce(function(te, ee) {
    return Math.max(te, ee.length);
  }, 0), he = function(ee) {
    var ve = ct(ee), oe = ve.depth, ne = ve.index, ue = p[oe].length, we = Math.max(l.w / ((e.grid ? de : ue) + 1), R), ge = Math.max(l.h / (p.length + 1), R), fe = Math.min(l.w / 2 / p.length, l.h / 2 / p.length);
    if (fe = Math.max(fe, R), e.circle) {
      var S = fe * oe + fe - (p.length > 0 && p[0].length <= 3 ? fe / 2 : 0), $ = 2 * Math.PI / p[oe].length * ne;
      return oe === 0 && p[0].length === 1 && (S = 1), {
        x: re.x + S * Math.cos($),
        y: re.y + S * Math.sin($)
      };
    } else {
      var _ = {
        x: re.x + (ne + 1 - (ue + 1) / 2) * we,
        y: (oe + 1) * ge
      };
      return _;
    }
  };
  return a.nodes().layoutPositions(this, e, he), this;
};
var Dp = {
  fit: !0,
  // whether to fit the viewport to the graph
  padding: 30,
  // the padding on fit
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: !0,
  // prevents node overlap, may overflow boundingBox and radius if not enough space
  nodeDimensionsIncludeLabels: !1,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  radius: void 0,
  // the radius of the circle
  startAngle: 3 / 2 * Math.PI,
  // where nodes start in radians
  sweep: void 0,
  // how many radians should be between the first and last node (defaults to full circle)
  clockwise: !0,
  // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
  sort: void 0,
  // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, t) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, t) {
    return t;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts 
};
function Vs(r) {
  this.options = ce({}, Dp, r);
}
Vs.prototype.run = function() {
  var r = this.options, e = r, t = r.cy, a = e.eles, n = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, i = a.nodes().not(":parent");
  e.sort && (i = i.sort(e.sort));
  for (var o = ur(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: t.width(),
    h: t.height()
  }), s = {
    x: o.x1 + o.w / 2,
    y: o.y1 + o.h / 2
  }, l = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / i.length : e.sweep, u = l / Math.max(1, i.length - 1), v, f = 0, c = 0; c < i.length; c++) {
    var d = i[c], h = d.layoutDimensions(e), g = h.w, m = h.h;
    f = Math.max(f, g, m);
  }
  if (ae(e.radius) ? v = e.radius : i.length <= 1 ? v = 0 : v = Math.min(o.h, o.w) / 2 - f, i.length > 1 && e.avoidOverlap) {
    f *= 1.75;
    var p = Math.cos(u) - Math.cos(0), y = Math.sin(u) - Math.sin(0), b = Math.sqrt(f * f / (p * p + y * y));
    v = Math.max(b, v);
  }
  var w = function(C, x) {
    var D = e.startAngle + x * u * (n ? 1 : -1), E = v * Math.cos(D), P = v * Math.sin(D), B = {
      x: s.x + E,
      y: s.y + P
    };
    return B;
  };
  return a.nodes().layoutPositions(this, e, w), this;
};
var kp = {
  fit: !0,
  // whether to fit the viewport to the graph
  padding: 30,
  // the padding on fit
  startAngle: 3 / 2 * Math.PI,
  // where nodes start in radians
  sweep: void 0,
  // how many radians should be between the first and last node (defaults to full circle)
  clockwise: !0,
  // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
  equidistant: !1,
  // whether levels have an equal radial distance betwen them, may cause bounding box overflow
  minNodeSpacing: 10,
  // min spacing between outside of nodes (used for radius adjustment)
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: !0,
  // prevents node overlap, may overflow boundingBox if not enough space
  nodeDimensionsIncludeLabels: !1,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  height: void 0,
  // height of layout area (overrides container height)
  width: void 0,
  // width of layout area (overrides container width)
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  concentric: function(e) {
    return e.degree();
  },
  levelWidth: function(e) {
    return e.maxDegree() / 4;
  },
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, t) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, t) {
    return t;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts
};
function qs(r) {
  this.options = ce({}, kp, r);
}
qs.prototype.run = function() {
  for (var r = this.options, e = r, t = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, a = r.cy, n = e.eles, i = n.nodes().not(":parent"), o = ur(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: a.width(),
    h: a.height()
  }), s = {
    x: o.x1 + o.w / 2,
    y: o.y1 + o.h / 2
  }, l = [], u = 0, v = 0; v < i.length; v++) {
    var f = i[v], c = void 0;
    c = e.concentric(f), l.push({
      value: c,
      node: f
    }), f._private.scratch.concentric = c;
  }
  i.updateStyle();
  for (var d = 0; d < i.length; d++) {
    var h = i[d], g = h.layoutDimensions(e);
    u = Math.max(u, g.w, g.h);
  }
  l.sort(function(te, ee) {
    return ee.value - te.value;
  });
  for (var m = e.levelWidth(i), p = [[]], y = p[0], b = 0; b < l.length; b++) {
    var w = l[b];
    if (y.length > 0) {
      var T = Math.abs(y[0].value - w.value);
      T >= m && (y = [], p.push(y));
    }
    y.push(w);
  }
  var C = u + e.minNodeSpacing;
  if (!e.avoidOverlap) {
    var x = p.length > 0 && p[0].length > 1, D = Math.min(o.w, o.h) / 2 - C, E = D / (p.length + x ? 1 : 0);
    C = Math.min(C, E);
  }
  for (var P = 0, B = 0; B < p.length; B++) {
    var k = p[B], M = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / k.length : e.sweep, L = k.dTheta = M / Math.max(1, k.length - 1);
    if (k.length > 1 && e.avoidOverlap) {
      var O = Math.cos(L) - Math.cos(0), A = Math.sin(L) - Math.sin(0), R = Math.sqrt(C * C / (O * O + A * A));
      P = Math.max(R, P);
    }
    k.r = P, P += C;
  }
  if (e.equidistant) {
    for (var z = 0, F = 0, q = 0; q < p.length; q++) {
      var N = p[q], V = N.r - F;
      z = Math.max(z, V);
    }
    F = 0;
    for (var Y = 0; Y < p.length; Y++) {
      var U = p[Y];
      Y === 0 && (F = U.r), U.r = F, F += z;
    }
  }
  for (var W = {}, H = 0; H < p.length; H++)
    for (var I = p[H], X = I.dTheta, Z = I.r, j = 0; j < I.length; j++) {
      var re = I[j], de = e.startAngle + (t ? 1 : -1) * X * j, he = {
        x: s.x + Z * Math.cos(de),
        y: s.y + Z * Math.sin(de)
      };
      W[re.node.id()] = he;
    }
  return n.nodes().layoutPositions(this, e, function(te) {
    var ee = te.id();
    return W[ee];
  }), this;
};
var Sn, Pp = {
  // Called on `layoutready`
  ready: function() {
  },
  // Called on `layoutstop`
  stop: function() {
  },
  // Whether to animate while running the layout
  // true : Animate continuously as the layout is running
  // false : Just show the end result
  // 'end' : Animate with the end result, from the initial positions to the end positions
  animate: !0,
  // Easing of the animation for animate:'end'
  animationEasing: void 0,
  // The duration of the animation for animate:'end'
  animationDuration: void 0,
  // A function that determines whether the node should be animated
  // All nodes animated by default on animate enabled
  // Non-animated nodes are positioned immediately when the layout starts
  animateFilter: function(e, t) {
    return !0;
  },
  // The layout animates only after this many milliseconds for animate:true
  // (prevents flashing on fast runs)
  animationThreshold: 250,
  // Number of iterations between consecutive screen positions update
  refresh: 20,
  // Whether to fit the network view after when done
  fit: !0,
  // Padding on fit
  padding: 30,
  // Constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  boundingBox: void 0,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  nodeDimensionsIncludeLabels: !1,
  // Randomize the initial positions of the nodes (true) or use existing positions (false)
  randomize: !1,
  // Extra spacing between components in non-compound graphs
  componentSpacing: 40,
  // Node repulsion (non overlapping) multiplier
  nodeRepulsion: function(e) {
    return 2048;
  },
  // Node repulsion (overlapping) multiplier
  nodeOverlap: 4,
  // Ideal edge (non nested) length
  idealEdgeLength: function(e) {
    return 32;
  },
  // Divisor to compute edge forces
  edgeElasticity: function(e) {
    return 32;
  },
  // Nesting factor (multiplier) to compute ideal edge length for nested edges
  nestingFactor: 1.2,
  // Gravity force (constant)
  gravity: 1,
  // Maximum number of iterations to perform
  numIter: 1e3,
  // Initial temperature (maximum node displacement)
  initialTemp: 1e3,
  // Cooling factor (how the temperature is reduced between consecutive iterations
  coolingFactor: 0.99,
  // Lower temperature threshold (below this point the layout will end)
  minTemp: 1
};
function ln(r) {
  this.options = ce({}, Pp, r), this.options.layout = this;
}
ln.prototype.run = function() {
  var r = this.options, e = r.cy, t = this;
  t.stopped = !1, (r.animate === !0 || r.animate === !1) && t.emit({
    type: "layoutstart",
    layout: t
  }), r.debug === !0 ? Sn = !0 : Sn = !1;
  var a = Bp(e, t, r);
  Sn && Ap(a), r.randomize && Rp(a);
  var n = Br(), i = function() {
    Op(a, e, r), r.fit === !0 && e.fit(r.padding);
  }, o = function(c) {
    return !(t.stopped || c >= r.numIter || (Ip(a, r), a.temperature = a.temperature * r.coolingFactor, a.temperature < r.minTemp));
  }, s = function() {
    if (r.animate === !0 || r.animate === !1)
      i(), t.one("layoutstop", r.stop), t.emit({
        type: "layoutstop",
        layout: t
      });
    else {
      var c = r.eles.nodes(), d = Hs(a, r, c);
      c.layoutPositions(t, r, d);
    }
  }, l = 0, u = !0;
  if (r.animate === !0) {
    var v = function f() {
      for (var c = 0; u && c < r.refresh; )
        u = o(l), l++, c++;
      if (!u)
        yo(a, r), s();
      else {
        var d = Br();
        d - n >= r.animationThreshold && i(), Fa(f);
      }
    };
    v();
  } else {
    for (; u; )
      u = o(l), l++;
    yo(a, r), s();
  }
  return this;
};
ln.prototype.stop = function() {
  return this.stopped = !0, this.thread && this.thread.stop(), this.emit("layoutstop"), this;
};
ln.prototype.destroy = function() {
  return this.thread && this.thread.stop(), this;
};
var Bp = function(e, t, a) {
  for (var n = a.eles.edges(), i = a.eles.nodes(), o = {
    isCompound: e.hasCompoundNodes(),
    layoutNodes: [],
    idToIndex: {},
    nodeSize: i.size(),
    graphSet: [],
    indexToGraph: [],
    layoutEdges: [],
    edgeSize: n.size(),
    temperature: a.initialTemp,
    clientWidth: e.width(),
    clientHeight: e.width(),
    boundingBox: ur(a.boundingBox ? a.boundingBox : {
      x1: 0,
      y1: 0,
      w: e.width(),
      h: e.height()
    })
  }, s = a.eles.components(), l = {}, u = 0; u < s.length; u++)
    for (var v = s[u], f = 0; f < v.length; f++) {
      var c = v[f];
      l[c.id()] = u;
    }
  for (var u = 0; u < o.nodeSize; u++) {
    var d = i[u], h = d.layoutDimensions(a), g = {};
    g.isLocked = d.locked(), g.id = d.data("id"), g.parentId = d.data("parent"), g.cmptId = l[d.id()], g.children = [], g.positionX = d.position("x"), g.positionY = d.position("y"), g.offsetX = 0, g.offsetY = 0, g.height = h.w, g.width = h.h, g.maxX = g.positionX + g.width / 2, g.minX = g.positionX - g.width / 2, g.maxY = g.positionY + g.height / 2, g.minY = g.positionY - g.height / 2, g.padLeft = parseFloat(d.style("padding")), g.padRight = parseFloat(d.style("padding")), g.padTop = parseFloat(d.style("padding")), g.padBottom = parseFloat(d.style("padding")), g.nodeRepulsion = ze(a.nodeRepulsion) ? a.nodeRepulsion(d) : a.nodeRepulsion, o.layoutNodes.push(g), o.idToIndex[g.id] = u;
  }
  for (var m = [], p = 0, y = -1, b = [], u = 0; u < o.nodeSize; u++) {
    var d = o.layoutNodes[u], w = d.parentId;
    w != null ? o.layoutNodes[o.idToIndex[w]].children.push(d.id) : (m[++y] = d.id, b.push(d.id));
  }
  for (o.graphSet.push(b); p <= y; ) {
    var T = m[p++], C = o.idToIndex[T], c = o.layoutNodes[C], x = c.children;
    if (x.length > 0) {
      o.graphSet.push(x);
      for (var u = 0; u < x.length; u++)
        m[++y] = x[u];
    }
  }
  for (var u = 0; u < o.graphSet.length; u++)
    for (var D = o.graphSet[u], f = 0; f < D.length; f++) {
      var E = o.idToIndex[D[f]];
      o.indexToGraph[E] = u;
    }
  for (var u = 0; u < o.edgeSize; u++) {
    var P = n[u], B = {};
    B.id = P.data("id"), B.sourceId = P.data("source"), B.targetId = P.data("target");
    var k = ze(a.idealEdgeLength) ? a.idealEdgeLength(P) : a.idealEdgeLength, M = ze(a.edgeElasticity) ? a.edgeElasticity(P) : a.edgeElasticity, L = o.idToIndex[B.sourceId], O = o.idToIndex[B.targetId], A = o.indexToGraph[L], R = o.indexToGraph[O];
    if (A != R) {
      for (var z = Lp(B.sourceId, B.targetId, o), F = o.graphSet[z], q = 0, g = o.layoutNodes[L]; F.indexOf(g.id) === -1; )
        g = o.layoutNodes[o.idToIndex[g.parentId]], q++;
      for (g = o.layoutNodes[O]; F.indexOf(g.id) === -1; )
        g = o.layoutNodes[o.idToIndex[g.parentId]], q++;
      k *= q * a.nestingFactor;
    }
    B.idealLength = k, B.elasticity = M, o.layoutEdges.push(B);
  }
  return o;
}, Lp = function(e, t, a) {
  var n = Mp(e, t, 0, a);
  return 2 > n.count ? 0 : n.graph;
}, Mp = function r(e, t, a, n) {
  var i = n.graphSet[a];
  if (-1 < i.indexOf(e) && -1 < i.indexOf(t))
    return {
      count: 2,
      graph: a
    };
  for (var o = 0, s = 0; s < i.length; s++) {
    var l = i[s], u = n.idToIndex[l], v = n.layoutNodes[u].children;
    if (v.length !== 0) {
      var f = n.indexToGraph[n.idToIndex[v[0]]], c = r(e, t, f, n);
      if (c.count !== 0)
        if (c.count === 1) {
          if (o++, o === 2)
            break;
        } else
          return c;
    }
  }
  return {
    count: o,
    graph: a
  };
}, Ap, Rp = function(e, t) {
  for (var a = e.clientWidth, n = e.clientHeight, i = 0; i < e.nodeSize; i++) {
    var o = e.layoutNodes[i];
    o.children.length === 0 && !o.isLocked && (o.positionX = Math.random() * a, o.positionY = Math.random() * n);
  }
}, Hs = function(e, t, a) {
  var n = e.boundingBox, i = {
    x1: 1 / 0,
    x2: -1 / 0,
    y1: 1 / 0,
    y2: -1 / 0
  };
  return t.boundingBox && (a.forEach(function(o) {
    var s = e.layoutNodes[e.idToIndex[o.data("id")]];
    i.x1 = Math.min(i.x1, s.positionX), i.x2 = Math.max(i.x2, s.positionX), i.y1 = Math.min(i.y1, s.positionY), i.y2 = Math.max(i.y2, s.positionY);
  }), i.w = i.x2 - i.x1, i.h = i.y2 - i.y1), function(o, s) {
    var l = e.layoutNodes[e.idToIndex[o.data("id")]];
    if (t.boundingBox) {
      var u = (l.positionX - i.x1) / i.w, v = (l.positionY - i.y1) / i.h;
      return {
        x: n.x1 + u * n.w,
        y: n.y1 + v * n.h
      };
    } else
      return {
        x: l.positionX,
        y: l.positionY
      };
  };
}, Op = function(e, t, a) {
  var n = a.layout, i = a.eles.nodes(), o = Hs(e, a, i);
  i.positions(o), e.ready !== !0 && (e.ready = !0, n.one("layoutready", a.ready), n.emit({
    type: "layoutready",
    layout: this
  }));
}, Ip = function(e, t, a) {
  zp(e, t), $p(e), Vp(e, t), qp(e), Hp(e);
}, zp = function(e, t) {
  for (var a = 0; a < e.graphSet.length; a++)
    for (var n = e.graphSet[a], i = n.length, o = 0; o < i; o++)
      for (var s = e.layoutNodes[e.idToIndex[n[o]]], l = o + 1; l < i; l++) {
        var u = e.layoutNodes[e.idToIndex[n[l]]];
        Np(s, u, e, t);
      }
}, mo = function(e) {
  return -e + 2 * e * Math.random();
}, Np = function(e, t, a, n) {
  var i = e.cmptId, o = t.cmptId;
  if (!(i !== o && !a.isCompound)) {
    var s = t.positionX - e.positionX, l = t.positionY - e.positionY, u = 1;
    s === 0 && l === 0 && (s = mo(u), l = mo(u));
    var v = Fp(e, t, s, l);
    if (v > 0)
      var f = n.nodeOverlap * v, c = Math.sqrt(s * s + l * l), d = f * s / c, h = f * l / c;
    else
      var g = Ga(e, s, l), m = Ga(t, -1 * s, -1 * l), p = m.x - g.x, y = m.y - g.y, b = p * p + y * y, c = Math.sqrt(b), f = (e.nodeRepulsion + t.nodeRepulsion) / b, d = f * p / c, h = f * y / c;
    e.isLocked || (e.offsetX -= d, e.offsetY -= h), t.isLocked || (t.offsetX += d, t.offsetY += h);
  }
}, Fp = function(e, t, a, n) {
  if (a > 0)
    var i = e.maxX - t.minX;
  else
    var i = t.maxX - e.minX;
  if (n > 0)
    var o = e.maxY - t.minY;
  else
    var o = t.maxY - e.minY;
  return i >= 0 && o >= 0 ? Math.sqrt(i * i + o * o) : 0;
}, Ga = function(e, t, a) {
  var n = e.positionX, i = e.positionY, o = e.height || 1, s = e.width || 1, l = a / t, u = o / s, v = {};
  return t === 0 && 0 < a || t === 0 && 0 > a ? (v.x = n, v.y = i + o / 2, v) : 0 < t && -1 * u <= l && l <= u ? (v.x = n + s / 2, v.y = i + s * a / 2 / t, v) : 0 > t && -1 * u <= l && l <= u ? (v.x = n - s / 2, v.y = i - s * a / 2 / t, v) : 0 < a && (l <= -1 * u || l >= u) ? (v.x = n + o * t / 2 / a, v.y = i + o / 2, v) : (0 > a && (l <= -1 * u || l >= u) && (v.x = n - o * t / 2 / a, v.y = i - o / 2), v);
}, $p = function(e, t) {
  for (var a = 0; a < e.edgeSize; a++) {
    var n = e.layoutEdges[a], i = e.idToIndex[n.sourceId], o = e.layoutNodes[i], s = e.idToIndex[n.targetId], l = e.layoutNodes[s], u = l.positionX - o.positionX, v = l.positionY - o.positionY;
    if (!(u === 0 && v === 0)) {
      var f = Ga(o, u, v), c = Ga(l, -1 * u, -1 * v), d = c.x - f.x, h = c.y - f.y, g = Math.sqrt(d * d + h * h), m = Math.pow(n.idealLength - g, 2) / n.elasticity;
      if (g !== 0)
        var p = m * d / g, y = m * h / g;
      else
        var p = 0, y = 0;
      o.isLocked || (o.offsetX += p, o.offsetY += y), l.isLocked || (l.offsetX -= p, l.offsetY -= y);
    }
  }
}, Vp = function(e, t) {
  if (t.gravity !== 0)
    for (var a = 1, n = 0; n < e.graphSet.length; n++) {
      var i = e.graphSet[n], o = i.length;
      if (n === 0)
        var s = e.clientHeight / 2, l = e.clientWidth / 2;
      else
        var u = e.layoutNodes[e.idToIndex[i[0]]], v = e.layoutNodes[e.idToIndex[u.parentId]], s = v.positionX, l = v.positionY;
      for (var f = 0; f < o; f++) {
        var c = e.layoutNodes[e.idToIndex[i[f]]];
        if (!c.isLocked) {
          var d = s - c.positionX, h = l - c.positionY, g = Math.sqrt(d * d + h * h);
          if (g > a) {
            var m = t.gravity * d / g, p = t.gravity * h / g;
            c.offsetX += m, c.offsetY += p;
          }
        }
      }
    }
}, qp = function(e, t) {
  var a = [], n = 0, i = -1;
  for (a.push.apply(a, e.graphSet[0]), i += e.graphSet[0].length; n <= i; ) {
    var o = a[n++], s = e.idToIndex[o], l = e.layoutNodes[s], u = l.children;
    if (0 < u.length && !l.isLocked) {
      for (var v = l.offsetX, f = l.offsetY, c = 0; c < u.length; c++) {
        var d = e.layoutNodes[e.idToIndex[u[c]]];
        d.offsetX += v, d.offsetY += f, a[++i] = u[c];
      }
      l.offsetX = 0, l.offsetY = 0;
    }
  }
}, Hp = function(e, t) {
  for (var a = 0; a < e.nodeSize; a++) {
    var n = e.layoutNodes[a];
    0 < n.children.length && (n.maxX = void 0, n.minX = void 0, n.maxY = void 0, n.minY = void 0);
  }
  for (var a = 0; a < e.nodeSize; a++) {
    var n = e.layoutNodes[a];
    if (!(0 < n.children.length || n.isLocked)) {
      var i = Gp(n.offsetX, n.offsetY, e.temperature);
      n.positionX += i.x, n.positionY += i.y, n.offsetX = 0, n.offsetY = 0, n.minX = n.positionX - n.width, n.maxX = n.positionX + n.width, n.minY = n.positionY - n.height, n.maxY = n.positionY + n.height, Kp(n, e);
    }
  }
  for (var a = 0; a < e.nodeSize; a++) {
    var n = e.layoutNodes[a];
    0 < n.children.length && !n.isLocked && (n.positionX = (n.maxX + n.minX) / 2, n.positionY = (n.maxY + n.minY) / 2, n.width = n.maxX - n.minX, n.height = n.maxY - n.minY);
  }
}, Gp = function(e, t, a) {
  var n = Math.sqrt(e * e + t * t);
  if (n > a)
    var i = {
      x: a * e / n,
      y: a * t / n
    };
  else
    var i = {
      x: e,
      y: t
    };
  return i;
}, Kp = function r(e, t) {
  var a = e.parentId;
  if (a != null) {
    var n = t.layoutNodes[t.idToIndex[a]], i = !1;
    if ((n.maxX == null || e.maxX + n.padRight > n.maxX) && (n.maxX = e.maxX + n.padRight, i = !0), (n.minX == null || e.minX - n.padLeft < n.minX) && (n.minX = e.minX - n.padLeft, i = !0), (n.maxY == null || e.maxY + n.padBottom > n.maxY) && (n.maxY = e.maxY + n.padBottom, i = !0), (n.minY == null || e.minY - n.padTop < n.minY) && (n.minY = e.minY - n.padTop, i = !0), i)
      return r(n, t);
  }
}, yo = function(e, t) {
  for (var a = e.layoutNodes, n = [], i = 0; i < a.length; i++) {
    var o = a[i], s = o.cmptId, l = n[s] = n[s] || [];
    l.push(o);
  }
  for (var u = 0, i = 0; i < n.length; i++) {
    var v = n[i];
    if (v) {
      v.x1 = 1 / 0, v.x2 = -1 / 0, v.y1 = 1 / 0, v.y2 = -1 / 0;
      for (var f = 0; f < v.length; f++) {
        var c = v[f];
        v.x1 = Math.min(v.x1, c.positionX - c.width / 2), v.x2 = Math.max(v.x2, c.positionX + c.width / 2), v.y1 = Math.min(v.y1, c.positionY - c.height / 2), v.y2 = Math.max(v.y2, c.positionY + c.height / 2);
      }
      v.w = v.x2 - v.x1, v.h = v.y2 - v.y1, u += v.w * v.h;
    }
  }
  n.sort(function(y, b) {
    return b.w * b.h - y.w * y.h;
  });
  for (var d = 0, h = 0, g = 0, m = 0, p = Math.sqrt(u) * e.clientWidth / e.clientHeight, i = 0; i < n.length; i++) {
    var v = n[i];
    if (v) {
      for (var f = 0; f < v.length; f++) {
        var c = v[f];
        c.isLocked || (c.positionX += d - v.x1, c.positionY += h - v.y1);
      }
      d += v.w + t.componentSpacing, g += v.w + t.componentSpacing, m = Math.max(m, v.h), g > p && (h += m + t.componentSpacing, d = 0, g = 0, m = 0);
    }
  }
}, Wp = {
  fit: !0,
  // whether to fit the viewport to the graph
  padding: 30,
  // padding used on fit
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: !0,
  // prevents node overlap, may overflow boundingBox if not enough space
  avoidOverlapPadding: 10,
  // extra spacing around nodes when avoidOverlap: true
  nodeDimensionsIncludeLabels: !1,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  condense: !1,
  // uses all available space on false, uses minimal space on true
  rows: void 0,
  // force num of rows in the grid
  cols: void 0,
  // force num of columns in the grid
  position: function(e) {
  },
  // returns { row, col } for element
  sort: void 0,
  // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, t) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, t) {
    return t;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts 
};
function Gs(r) {
  this.options = ce({}, Wp, r);
}
Gs.prototype.run = function() {
  var r = this.options, e = r, t = r.cy, a = e.eles, n = a.nodes().not(":parent");
  e.sort && (n = n.sort(e.sort));
  var i = ur(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: t.width(),
    h: t.height()
  });
  if (i.h === 0 || i.w === 0)
    a.nodes().layoutPositions(this, e, function(Y) {
      return {
        x: i.x1,
        y: i.y1
      };
    });
  else {
    var o = n.size(), s = Math.sqrt(o * i.h / i.w), l = Math.round(s), u = Math.round(i.w / i.h * s), v = function(U) {
      if (U == null)
        return Math.min(l, u);
      var W = Math.min(l, u);
      W == l ? l = U : u = U;
    }, f = function(U) {
      if (U == null)
        return Math.max(l, u);
      var W = Math.max(l, u);
      W == l ? l = U : u = U;
    }, c = e.rows, d = e.cols != null ? e.cols : e.columns;
    if (c != null && d != null)
      l = c, u = d;
    else if (c != null && d == null)
      l = c, u = Math.ceil(o / l);
    else if (c == null && d != null)
      u = d, l = Math.ceil(o / u);
    else if (u * l > o) {
      var h = v(), g = f();
      (h - 1) * g >= o ? v(h - 1) : (g - 1) * h >= o && f(g - 1);
    } else
      for (; u * l < o; ) {
        var m = v(), p = f();
        (p + 1) * m >= o ? f(p + 1) : v(m + 1);
      }
    var y = i.w / u, b = i.h / l;
    if (e.condense && (y = 0, b = 0), e.avoidOverlap)
      for (var w = 0; w < n.length; w++) {
        var T = n[w], C = T._private.position;
        (C.x == null || C.y == null) && (C.x = 0, C.y = 0);
        var x = T.layoutDimensions(e), D = e.avoidOverlapPadding, E = x.w + D, P = x.h + D;
        y = Math.max(y, E), b = Math.max(b, P);
      }
    for (var B = {}, k = function(U, W) {
      return !!B["c-" + U + "-" + W];
    }, M = function(U, W) {
      B["c-" + U + "-" + W] = !0;
    }, L = 0, O = 0, A = function() {
      O++, O >= u && (O = 0, L++);
    }, R = {}, z = 0; z < n.length; z++) {
      var F = n[z], q = e.position(F);
      if (q && (q.row !== void 0 || q.col !== void 0)) {
        var N = {
          row: q.row,
          col: q.col
        };
        if (N.col === void 0)
          for (N.col = 0; k(N.row, N.col); )
            N.col++;
        else if (N.row === void 0)
          for (N.row = 0; k(N.row, N.col); )
            N.row++;
        R[F.id()] = N, M(N.row, N.col);
      }
    }
    var V = function(U, W) {
      var H, I;
      if (U.locked() || U.isParent())
        return !1;
      var X = R[U.id()];
      if (X)
        H = X.col * y + y / 2 + i.x1, I = X.row * b + b / 2 + i.y1;
      else {
        for (; k(L, O); )
          A();
        H = O * y + y / 2 + i.x1, I = L * b + b / 2 + i.y1, M(L, O), A();
      }
      return {
        x: H,
        y: I
      };
    };
    n.layoutPositions(this, e, V);
  }
  return this;
};
var Yp = {
  ready: function() {
  },
  // on layoutready
  stop: function() {
  }
  // on layoutstop
};
function si(r) {
  this.options = ce({}, Yp, r);
}
si.prototype.run = function() {
  var r = this.options, e = r.eles, t = this;
  return r.cy, t.emit("layoutstart"), e.nodes().positions(function() {
    return {
      x: 0,
      y: 0
    };
  }), t.one("layoutready", r.ready), t.emit("layoutready"), t.one("layoutstop", r.stop), t.emit("layoutstop"), this;
};
si.prototype.stop = function() {
  return this;
};
var Xp = {
  positions: void 0,
  // map of (node id) => (position obj); or function(node){ return somPos; }
  zoom: void 0,
  // the zoom level to set (prob want fit = false if set)
  pan: void 0,
  // the pan level to set (prob want fit = false if set)
  fit: !0,
  // whether to fit to viewport
  padding: 30,
  // padding on fit
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, t) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, t) {
    return t;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts
};
function Ks(r) {
  this.options = ce({}, Xp, r);
}
Ks.prototype.run = function() {
  var r = this.options, e = r.eles, t = e.nodes(), a = ze(r.positions);
  function n(i) {
    if (r.positions == null)
      return oh(i.position());
    if (a)
      return r.positions(i);
    var o = r.positions[i._private.data.id];
    return o ?? null;
  }
  return t.layoutPositions(this, r, function(i, o) {
    var s = n(i);
    return i.locked() || s == null ? !1 : s;
  }), this;
};
var Up = {
  fit: !0,
  // whether to fit to viewport
  padding: 30,
  // fit padding
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, t) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, t) {
    return t;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts 
};
function Ws(r) {
  this.options = ce({}, Up, r);
}
Ws.prototype.run = function() {
  var r = this.options, e = r.cy, t = r.eles, a = ur(r.boundingBox ? r.boundingBox : {
    x1: 0,
    y1: 0,
    w: e.width(),
    h: e.height()
  }), n = function(o, s) {
    return {
      x: a.x1 + Math.round(Math.random() * a.w),
      y: a.y1 + Math.round(Math.random() * a.h)
    };
  };
  return t.nodes().layoutPositions(this, r, n), this;
};
var Zp = [{
  name: "breadthfirst",
  impl: $s
}, {
  name: "circle",
  impl: Vs
}, {
  name: "concentric",
  impl: qs
}, {
  name: "cose",
  impl: ln
}, {
  name: "grid",
  impl: Gs
}, {
  name: "null",
  impl: si
}, {
  name: "preset",
  impl: Ks
}, {
  name: "random",
  impl: Ws
}];
function Ys(r) {
  this.options = r, this.notifications = 0;
}
var bo = function() {
}, wo = function() {
  throw new Error("A headless instance can not render images");
};
Ys.prototype = {
  recalculateRenderedStyle: bo,
  notify: function() {
    this.notifications++;
  },
  init: bo,
  isHeadless: function() {
    return !0;
  },
  png: wo,
  jpg: wo
};
var ui = {};
ui.arrowShapeWidth = 0.3;
ui.registerArrowShapes = function() {
  var r = this.arrowShapes = {}, e = this, t = function(u, v, f, c, d, h, g) {
    var m = d.x - f / 2 - g, p = d.x + f / 2 + g, y = d.y - f / 2 - g, b = d.y + f / 2 + g, w = m <= u && u <= p && y <= v && v <= b;
    return w;
  }, a = function(u, v, f, c, d) {
    var h = u * Math.cos(c) - v * Math.sin(c), g = u * Math.sin(c) + v * Math.cos(c), m = h * f, p = g * f, y = m + d.x, b = p + d.y;
    return {
      x: y,
      y: b
    };
  }, n = function(u, v, f, c) {
    for (var d = [], h = 0; h < u.length; h += 2) {
      var g = u[h], m = u[h + 1];
      d.push(a(g, m, v, f, c));
    }
    return d;
  }, i = function(u) {
    for (var v = [], f = 0; f < u.length; f++) {
      var c = u[f];
      v.push(c.x, c.y);
    }
    return v;
  }, o = function(u) {
    return u.pstyle("width").pfValue * u.pstyle("arrow-scale").pfValue * 2;
  }, s = function(u, v) {
    le(v) && (v = r[v]), r[u] = ce({
      name: u,
      points: [-0.15, -0.3, 0.15, -0.3, 0.15, 0.3, -0.15, 0.3],
      collide: function(c, d, h, g, m, p) {
        var y = i(n(this.points, h + 2 * p, g, m)), b = sr(c, d, y);
        return b;
      },
      roughCollide: t,
      draw: function(c, d, h, g) {
        var m = n(this.points, d, h, g);
        e.arrowShapeImpl("polygon")(c, m);
      },
      spacing: function(c) {
        return 0;
      },
      gap: o
    }, v);
  };
  s("none", {
    collide: $a,
    roughCollide: $a,
    draw: Qn,
    spacing: Oi,
    gap: Oi
  }), s("triangle", {
    points: [-0.15, -0.3, 0, 0, 0.15, -0.3]
  }), s("arrow", "triangle"), s("triangle-backcurve", {
    points: r.triangle.points,
    controlPoint: [0, -0.15],
    roughCollide: t,
    draw: function(u, v, f, c, d) {
      var h = n(this.points, v, f, c), g = this.controlPoint, m = a(g[0], g[1], v, f, c);
      e.arrowShapeImpl(this.name)(u, h, m);
    },
    gap: function(u) {
      return o(u) * 0.8;
    }
  }), s("triangle-tee", {
    points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
    pointsTee: [-0.15, -0.4, -0.15, -0.5, 0.15, -0.5, 0.15, -0.4],
    collide: function(u, v, f, c, d, h, g) {
      var m = i(n(this.points, f + 2 * g, c, d)), p = i(n(this.pointsTee, f + 2 * g, c, d)), y = sr(u, v, m) || sr(u, v, p);
      return y;
    },
    draw: function(u, v, f, c, d) {
      var h = n(this.points, v, f, c), g = n(this.pointsTee, v, f, c);
      e.arrowShapeImpl(this.name)(u, h, g);
    }
  }), s("circle-triangle", {
    radius: 0.15,
    pointsTr: [0, -0.15, 0.15, -0.45, -0.15, -0.45, 0, -0.15],
    collide: function(u, v, f, c, d, h, g) {
      var m = d, p = Math.pow(m.x - u, 2) + Math.pow(m.y - v, 2) <= Math.pow((f + 2 * g) * this.radius, 2), y = i(n(this.points, f + 2 * g, c, d));
      return sr(u, v, y) || p;
    },
    draw: function(u, v, f, c, d) {
      var h = n(this.pointsTr, v, f, c);
      e.arrowShapeImpl(this.name)(u, h, c.x, c.y, this.radius * v);
    },
    spacing: function(u) {
      return e.getArrowWidth(u.pstyle("width").pfValue, u.pstyle("arrow-scale").value) * this.radius;
    }
  }), s("triangle-cross", {
    points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
    baseCrossLinePts: [
      -0.15,
      -0.4,
      // first half of the rectangle
      -0.15,
      -0.4,
      0.15,
      -0.4,
      // second half of the rectangle
      0.15,
      -0.4
    ],
    crossLinePts: function(u, v) {
      var f = this.baseCrossLinePts.slice(), c = v / u, d = 3, h = 5;
      return f[d] = f[d] - c, f[h] = f[h] - c, f;
    },
    collide: function(u, v, f, c, d, h, g) {
      var m = i(n(this.points, f + 2 * g, c, d)), p = i(n(this.crossLinePts(f, h), f + 2 * g, c, d)), y = sr(u, v, m) || sr(u, v, p);
      return y;
    },
    draw: function(u, v, f, c, d) {
      var h = n(this.points, v, f, c), g = n(this.crossLinePts(v, d), v, f, c);
      e.arrowShapeImpl(this.name)(u, h, g);
    }
  }), s("vee", {
    points: [-0.15, -0.3, 0, 0, 0.15, -0.3, 0, -0.15],
    gap: function(u) {
      return o(u) * 0.525;
    }
  }), s("circle", {
    radius: 0.15,
    collide: function(u, v, f, c, d, h, g) {
      var m = d, p = Math.pow(m.x - u, 2) + Math.pow(m.y - v, 2) <= Math.pow((f + 2 * g) * this.radius, 2);
      return p;
    },
    draw: function(u, v, f, c, d) {
      e.arrowShapeImpl(this.name)(u, c.x, c.y, this.radius * v);
    },
    spacing: function(u) {
      return e.getArrowWidth(u.pstyle("width").pfValue, u.pstyle("arrow-scale").value) * this.radius;
    }
  }), s("tee", {
    points: [-0.15, 0, -0.15, -0.1, 0.15, -0.1, 0.15, 0],
    spacing: function(u) {
      return 1;
    },
    gap: function(u) {
      return 1;
    }
  }), s("square", {
    points: [-0.15, 0, 0.15, 0, 0.15, -0.3, -0.15, -0.3]
  }), s("diamond", {
    points: [-0.15, -0.15, 0, -0.3, 0.15, -0.15, 0, 0],
    gap: function(u) {
      return u.pstyle("width").pfValue * u.pstyle("arrow-scale").value;
    }
  }), s("chevron", {
    points: [0, 0, -0.15, -0.15, -0.1, -0.2, 0, -0.1, 0.1, -0.2, 0.15, -0.15],
    gap: function(u) {
      return 0.95 * u.pstyle("width").pfValue * u.pstyle("arrow-scale").value;
    }
  });
};
var it = {};
it.projectIntoViewport = function(r, e) {
  var t = this.cy, a = this.findContainerClientCoords(), n = a[0], i = a[1], o = a[4], s = t.pan(), l = t.zoom(), u = ((r - n) / o - s.x) / l, v = ((e - i) / o - s.y) / l;
  return [u, v];
};
it.findContainerClientCoords = function() {
  if (this.containerBB)
    return this.containerBB;
  var r = this.container, e = r.getBoundingClientRect(), t = Ie.getComputedStyle(r), a = function(p) {
    return parseFloat(t.getPropertyValue(p));
  }, n = {
    left: a("padding-left"),
    right: a("padding-right"),
    top: a("padding-top"),
    bottom: a("padding-bottom")
  }, i = {
    left: a("border-left-width"),
    right: a("border-right-width"),
    top: a("border-top-width"),
    bottom: a("border-bottom-width")
  }, o = r.clientWidth, s = r.clientHeight, l = n.left + n.right, u = n.top + n.bottom, v = i.left + i.right, f = e.width / (o + v), c = o - l, d = s - u, h = e.left + n.left + i.left, g = e.top + n.top + i.top;
  return this.containerBB = [h, g, c, d, f];
};
it.invalidateContainerClientCoordsCache = function() {
  this.containerBB = null;
};
it.findNearestElement = function(r, e, t, a) {
  return this.findNearestElements(r, e, t, a)[0];
};
it.findNearestElements = function(r, e, t, a) {
  var n = this, i = this, o = i.getCachedZSortedEles(), s = [], l = i.cy.zoom(), u = i.cy.hasCompoundNodes(), v = (a ? 24 : 8) / l, f = (a ? 8 : 2) / l, c = (a ? 8 : 2) / l, d = 1 / 0, h, g;
  t && (o = o.interactive);
  function m(x, D) {
    if (x.isNode()) {
      if (g)
        return;
      g = x, s.push(x);
    }
    if (x.isEdge() && (D == null || D < d))
      if (h) {
        if (h.pstyle("z-compound-depth").value === x.pstyle("z-compound-depth").value && h.pstyle("z-compound-depth").value === x.pstyle("z-compound-depth").value) {
          for (var E = 0; E < s.length; E++)
            if (s[E].isEdge()) {
              s[E] = x, h = x, d = D ?? d;
              break;
            }
        }
      } else
        s.push(x), h = x, d = D ?? d;
  }
  function p(x) {
    var D = x.outerWidth() + 2 * f, E = x.outerHeight() + 2 * f, P = D / 2, B = E / 2, k = x.position();
    if (k.x - P <= r && r <= k.x + P && k.y - B <= e && e <= k.y + B) {
      var M = i.nodeShapes[n.getNodeShape(x)];
      if (M.checkPoint(r, e, 0, D, E, k.x, k.y))
        return m(x, 0), !0;
    }
  }
  function y(x) {
    var D = x._private, E = D.rscratch, P = x.pstyle("width").pfValue, B = x.pstyle("arrow-scale").value, k = P / 2 + v, M = k * k, L = k * 2, z = D.source, F = D.target, O;
    if (E.edgeType === "segments" || E.edgeType === "straight" || E.edgeType === "haystack") {
      for (var A = E.allpts, R = 0; R + 3 < A.length; R += 2)
        if (bh(r, e, A[R], A[R + 1], A[R + 2], A[R + 3], L) && M > (O = Sh(r, e, A[R], A[R + 1], A[R + 2], A[R + 3])))
          return m(x, O), !0;
    } else if (E.edgeType === "bezier" || E.edgeType === "multibezier" || E.edgeType === "self" || E.edgeType === "compound") {
      for (var A = E.allpts, R = 0; R + 5 < E.allpts.length; R += 4)
        if (wh(r, e, A[R], A[R + 1], A[R + 2], A[R + 3], A[R + 4], A[R + 5], L) && M > (O = Ch(r, e, A[R], A[R + 1], A[R + 2], A[R + 3], A[R + 4], A[R + 5])))
          return m(x, O), !0;
    }
    for (var z = z || D.source, F = F || D.target, q = n.getArrowWidth(P, B), N = [{
      name: "source",
      x: E.arrowStartX,
      y: E.arrowStartY,
      angle: E.srcArrowAngle
    }, {
      name: "target",
      x: E.arrowEndX,
      y: E.arrowEndY,
      angle: E.tgtArrowAngle
    }, {
      name: "mid-source",
      x: E.midX,
      y: E.midY,
      angle: E.midsrcArrowAngle
    }, {
      name: "mid-target",
      x: E.midX,
      y: E.midY,
      angle: E.midtgtArrowAngle
    }], R = 0; R < N.length; R++) {
      var V = N[R], Y = i.arrowShapes[x.pstyle(V.name + "-arrow-shape").value], U = x.pstyle("width").pfValue;
      if (Y.roughCollide(r, e, q, V.angle, {
        x: V.x,
        y: V.y
      }, U, v) && Y.collide(r, e, q, V.angle, {
        x: V.x,
        y: V.y
      }, U, v))
        return m(x), !0;
    }
    u && s.length > 0 && (p(z), p(F));
  }
  function b(x, D, E) {
    return br(x, D, E);
  }
  function w(x, D) {
    var E = x._private, P = c, B;
    D ? B = D + "-" : B = "", x.boundingBox();
    var k = E.labelBounds[D || "main"], M = x.pstyle(B + "label").value, L = x.pstyle("text-events").strValue === "yes";
    if (!(!L || !M)) {
      var O = b(E.rscratch, "labelX", D), A = b(E.rscratch, "labelY", D), R = b(E.rscratch, "labelAngle", D), z = x.pstyle(B + "text-margin-x").pfValue, F = x.pstyle(B + "text-margin-y").pfValue, q = k.x1 - P - z, N = k.x2 + P - z, V = k.y1 - P - F, Y = k.y2 + P - F;
      if (R) {
        var U = Math.cos(R), W = Math.sin(R), H = function(he, te) {
          return he = he - O, te = te - A, {
            x: he * U - te * W + O,
            y: he * W + te * U + A
          };
        }, I = H(q, V), X = H(q, Y), Z = H(N, V), j = H(N, Y), re = [
          // with the margin added after the rotation is applied
          I.x + z,
          I.y + F,
          Z.x + z,
          Z.y + F,
          j.x + z,
          j.y + F,
          X.x + z,
          X.y + F
        ];
        if (sr(r, e, re))
          return m(x), !0;
      } else if (xt(k, r, e))
        return m(x), !0;
    }
  }
  for (var T = o.length - 1; T >= 0; T--) {
    var C = o[T];
    C.isNode() ? p(C) || w(C) : y(C) || w(C) || w(C, "source") || w(C, "target");
  }
  return s;
};
it.getAllInBox = function(r, e, t, a) {
  var n = this.getCachedZSortedEles().interactive, i = [], o = Math.min(r, t), s = Math.max(r, t), l = Math.min(e, a), u = Math.max(e, a);
  r = o, t = s, e = l, a = u;
  for (var v = ur({
    x1: r,
    y1: e,
    x2: t,
    y2: a
  }), f = 0; f < n.length; f++) {
    var c = n[f];
    if (c.isNode()) {
      var d = c, h = d.boundingBox({
        includeNodes: !0,
        includeEdges: !1,
        includeLabels: !1
      });
      jn(v, h) && !os(h, v) && i.push(d);
    } else {
      var g = c, m = g._private, p = m.rscratch;
      if (p.startX != null && p.startY != null && !xt(v, p.startX, p.startY) || p.endX != null && p.endY != null && !xt(v, p.endX, p.endY))
        continue;
      if (p.edgeType === "bezier" || p.edgeType === "multibezier" || p.edgeType === "self" || p.edgeType === "compound" || p.edgeType === "segments" || p.edgeType === "haystack") {
        for (var y = m.rstyle.bezierPts || m.rstyle.linePts || m.rstyle.haystackPts, b = !0, w = 0; w < y.length; w++)
          if (!yh(v, y[w])) {
            b = !1;
            break;
          }
        b && i.push(g);
      } else
        (p.edgeType === "haystack" || p.edgeType === "straight") && i.push(g);
    }
  }
  return i;
};
var Ka = {};
Ka.calculateArrowAngles = function(r) {
  var e = r._private.rscratch, t = e.edgeType === "haystack", a = e.edgeType === "bezier", n = e.edgeType === "multibezier", i = e.edgeType === "segments", o = e.edgeType === "compound", s = e.edgeType === "self", l, u, v, f, c, d, p, y;
  if (t ? (v = e.haystackPts[0], f = e.haystackPts[1], c = e.haystackPts[2], d = e.haystackPts[3]) : (v = e.arrowStartX, f = e.arrowStartY, c = e.arrowEndX, d = e.arrowEndY), p = e.midX, y = e.midY, i)
    l = v - e.segpts[0], u = f - e.segpts[1];
  else if (n || o || s || a) {
    var h = e.allpts, g = Ge(h[0], h[2], h[4], 0.1), m = Ge(h[1], h[3], h[5], 0.1);
    l = v - g, u = f - m;
  } else
    l = v - p, u = f - y;
  e.srcArrowAngle = wa(l, u);
  var p = e.midX, y = e.midY;
  if (t && (p = (v + c) / 2, y = (f + d) / 2), l = c - v, u = d - f, i) {
    var h = e.allpts;
    if (h.length / 2 % 2 === 0) {
      var b = h.length / 2, w = b - 2;
      l = h[b] - h[w], u = h[b + 1] - h[w + 1];
    } else {
      var b = h.length / 2 - 1, w = b - 2, T = b + 2;
      l = h[b] - h[w], u = h[b + 1] - h[w + 1];
    }
  } else if (n || o || s) {
    var h = e.allpts, C = e.ctrlpts, x, D, E, P;
    if (C.length / 2 % 2 === 0) {
      var B = h.length / 2 - 1, k = B + 2, M = k + 2;
      x = Ge(h[B], h[k], h[M], 0), D = Ge(h[B + 1], h[k + 1], h[M + 1], 0), E = Ge(h[B], h[k], h[M], 1e-4), P = Ge(h[B + 1], h[k + 1], h[M + 1], 1e-4);
    } else {
      var k = h.length / 2 - 1, B = k - 2, M = k + 2;
      x = Ge(h[B], h[k], h[M], 0.4999), D = Ge(h[B + 1], h[k + 1], h[M + 1], 0.4999), E = Ge(h[B], h[k], h[M], 0.5), P = Ge(h[B + 1], h[k + 1], h[M + 1], 0.5);
    }
    l = E - x, u = P - D;
  }
  if (e.midtgtArrowAngle = wa(l, u), e.midDispX = l, e.midDispY = u, l *= -1, u *= -1, i) {
    var h = e.allpts;
    if (h.length / 2 % 2 !== 0) {
      var b = h.length / 2 - 1, T = b + 2;
      l = -(h[T] - h[b]), u = -(h[T + 1] - h[b + 1]);
    }
  }
  if (e.midsrcArrowAngle = wa(l, u), i)
    l = c - e.segpts[e.segpts.length - 2], u = d - e.segpts[e.segpts.length - 1];
  else if (n || o || s || a) {
    var h = e.allpts, L = h.length, g = Ge(h[L - 6], h[L - 4], h[L - 2], 0.9), m = Ge(h[L - 5], h[L - 3], h[L - 1], 0.9);
    l = c - g, u = d - m;
  } else
    l = c - p, u = d - y;
  e.tgtArrowAngle = wa(l, u);
};
Ka.getArrowWidth = Ka.getArrowHeight = function(r, e) {
  var t = this.arrowWidthCache = this.arrowWidthCache || {}, a = t[r + ", " + e];
  return a || (a = Math.max(Math.pow(r * 13.37, 0.9), 29) * e, t[r + ", " + e] = a, a);
};
var nr = {};
nr.findHaystackPoints = function(r) {
  for (var e = 0; e < r.length; e++) {
    var t = r[e], a = t._private, n = a.rscratch;
    if (!n.haystack) {
      var i = Math.random() * 2 * Math.PI;
      n.source = {
        x: Math.cos(i),
        y: Math.sin(i)
      }, i = Math.random() * 2 * Math.PI, n.target = {
        x: Math.cos(i),
        y: Math.sin(i)
      };
    }
    var o = a.source, s = a.target, l = o.position(), u = s.position(), v = o.width(), f = s.width(), c = o.height(), d = s.height(), h = t.pstyle("haystack-radius").value, g = h / 2;
    n.haystackPts = n.allpts = [n.source.x * v * g + l.x, n.source.y * c * g + l.y, n.target.x * f * g + u.x, n.target.y * d * g + u.y], n.midX = (n.allpts[0] + n.allpts[2]) / 2, n.midY = (n.allpts[1] + n.allpts[3]) / 2, n.edgeType = "haystack", n.haystack = !0, this.storeEdgeProjections(t), this.calculateArrowAngles(t), this.recalculateEdgeLabelProjections(t), this.calculateLabelAngles(t);
  }
};
nr.findSegmentsPoints = function(r, e) {
  var t = r._private.rscratch, a = e.posPts, n = e.intersectionPts, i = e.vectorNormInverse, o = r.pstyle("edge-distances").value, s = r.pstyle("segment-weights"), l = r.pstyle("segment-distances"), u = Math.min(s.pfValue.length, l.pfValue.length);
  t.edgeType = "segments", t.segpts = [];
  for (var v = 0; v < u; v++) {
    var f = s.pfValue[v], c = l.pfValue[v], d = 1 - f, h = f, g = o === "node-position" ? a : n, m = {
      x: g.x1 * d + g.x2 * h,
      y: g.y1 * d + g.y2 * h
    };
    t.segpts.push(m.x + i.x * c, m.y + i.y * c);
  }
};
nr.findLoopPoints = function(r, e, t, a) {
  var n = r._private.rscratch, i = e.dirCounts, o = e.srcPos, s = r.pstyle("control-point-distances"), l = s ? s.pfValue[0] : void 0, u = r.pstyle("loop-direction").pfValue, v = r.pstyle("loop-sweep").pfValue, f = r.pstyle("control-point-step-size").pfValue;
  n.edgeType = "self";
  var c = t, d = f;
  a && (c = 0, d = l);
  var h = u - Math.PI / 2, g = h - v / 2, m = h + v / 2, p = String(u + "_" + v);
  c = i[p] === void 0 ? i[p] = 0 : ++i[p], n.ctrlpts = [o.x + Math.cos(g) * 1.4 * d * (c / 3 + 1), o.y + Math.sin(g) * 1.4 * d * (c / 3 + 1), o.x + Math.cos(m) * 1.4 * d * (c / 3 + 1), o.y + Math.sin(m) * 1.4 * d * (c / 3 + 1)];
};
nr.findCompoundLoopPoints = function(r, e, t, a) {
  var n = r._private.rscratch;
  n.edgeType = "compound";
  var i = e.srcPos, o = e.tgtPos, s = e.srcW, l = e.srcH, u = e.tgtW, v = e.tgtH, f = r.pstyle("control-point-step-size").pfValue, c = r.pstyle("control-point-distances"), d = c ? c.pfValue[0] : void 0, h = t, g = f;
  a && (h = 0, g = d);
  var m = 50, p = {
    x: i.x - s / 2,
    y: i.y - l / 2
  }, y = {
    x: o.x - u / 2,
    y: o.y - v / 2
  }, b = {
    x: Math.min(p.x, y.x),
    y: Math.min(p.y, y.y)
  }, w = 0.5, T = Math.max(w, Math.log(s * 0.01)), C = Math.max(w, Math.log(u * 0.01));
  n.ctrlpts = [b.x, b.y - (1 + Math.pow(m, 1.12) / 100) * g * (h / 3 + 1) * T, b.x - (1 + Math.pow(m, 1.12) / 100) * g * (h / 3 + 1) * C, b.y];
};
nr.findStraightEdgePoints = function(r) {
  r._private.rscratch.edgeType = "straight";
};
nr.findBezierPoints = function(r, e, t, a, n) {
  var i = r._private.rscratch, o = e.vectorNormInverse, s = e.posPts, l = e.intersectionPts, u = r.pstyle("edge-distances").value, v = r.pstyle("control-point-step-size").pfValue, f = r.pstyle("control-point-distances"), c = r.pstyle("control-point-weights"), d = f && c ? Math.min(f.value.length, c.value.length) : 1, h = f ? f.pfValue[0] : void 0, g = c.value[0], m = a;
  i.edgeType = m ? "multibezier" : "bezier", i.ctrlpts = [];
  for (var p = 0; p < d; p++) {
    var y = (0.5 - e.eles.length / 2 + t) * v * (n ? -1 : 1), b = void 0, w = is(y);
    m && (h = f ? f.pfValue[p] : v, g = c.value[p]), a ? b = h : b = h !== void 0 ? w * h : void 0;
    var T = b !== void 0 ? b : y, C = 1 - g, x = g, D = u === "node-position" ? s : l, E = {
      x: D.x1 * C + D.x2 * x,
      y: D.y1 * C + D.y2 * x
    };
    i.ctrlpts.push(E.x + o.x * T, E.y + o.y * T);
  }
};
nr.findTaxiPoints = function(r, e) {
  var t = r._private.rscratch;
  t.edgeType = "segments";
  var a = "vertical", n = "horizontal", i = "leftward", o = "rightward", s = "downward", l = "upward", u = "auto", v = e.posPts, f = e.srcW, c = e.srcH, d = e.tgtW, h = e.tgtH, g = r.pstyle("edge-distances").value, m = g !== "node-position", p = r.pstyle("taxi-direction").value, y = p, b = r.pstyle("taxi-turn"), w = b.units === "%", T = b.pfValue, C = T < 0, x = r.pstyle("taxi-turn-min-distance").pfValue, D = m ? (f + d) / 2 : 0, E = m ? (c + h) / 2 : 0, P = v.x2 - v.x1, B = v.y2 - v.y1, k = function(se, xe) {
    return se > 0 ? Math.max(se - xe, 0) : Math.min(se + xe, 0);
  }, M = k(P, D), L = k(B, E), O = !1;
  y === u ? p = Math.abs(M) > Math.abs(L) ? n : a : y === l || y === s ? (p = a, O = !0) : (y === i || y === o) && (p = n, O = !0);
  var A = p === a, R = A ? L : M, z = A ? B : P, F = is(z), q = !1;
  !(O && (w || C)) && (y === s && z < 0 || y === l && z > 0 || y === i && z > 0 || y === o && z < 0) && (F *= -1, R = F * Math.abs(R), q = !0);
  var N;
  if (w) {
    var V = T < 0 ? 1 + T : T;
    N = V * R;
  } else {
    var Y = T < 0 ? R : 0;
    N = Y + T * F;
  }
  var U = function(se) {
    return Math.abs(se) < x || Math.abs(se) >= Math.abs(R);
  }, W = U(N), H = U(Math.abs(R) - Math.abs(N)), I = W || H;
  if (I && !q)
    if (A) {
      var X = Math.abs(z) <= c / 2, Z = Math.abs(P) <= d / 2;
      if (X) {
        var j = (v.x1 + v.x2) / 2, re = v.y1, de = v.y2;
        t.segpts = [j, re, j, de];
      } else if (Z) {
        var he = (v.y1 + v.y2) / 2, te = v.x1, ee = v.x2;
        t.segpts = [te, he, ee, he];
      } else
        t.segpts = [v.x1, v.y2];
    } else {
      var ve = Math.abs(z) <= f / 2, oe = Math.abs(B) <= h / 2;
      if (ve) {
        var ne = (v.y1 + v.y2) / 2, ue = v.x1, we = v.x2;
        t.segpts = [ue, ne, we, ne];
      } else if (oe) {
        var ge = (v.x1 + v.x2) / 2, fe = v.y1, _ = v.y2;
        t.segpts = [ge, fe, ge, _];
      } else
        t.segpts = [v.x2, v.y1];
    }
  else if (A) {
    var S = v.y1 + N + (m ? c / 2 * F : 0), $ = v.x1, Q = v.x2;
    t.segpts = [$, S, Q, S];
  } else {
    var G = v.x1 + N + (m ? f / 2 * F : 0), K = v.y1, pe = v.y2;
    t.segpts = [G, K, G, pe];
  }
};
nr.tryToCorrectInvalidPoints = function(r, e) {
  var t = r._private.rscratch;
  if (t.edgeType === "bezier") {
    var a = e.srcPos, n = e.tgtPos, i = e.srcW, o = e.srcH, s = e.tgtW, l = e.tgtH, u = e.srcShape, v = e.tgtShape, f = !ae(t.startX) || !ae(t.startY), c = !ae(t.arrowStartX) || !ae(t.arrowStartY), d = !ae(t.endX) || !ae(t.endY), h = !ae(t.arrowEndX) || !ae(t.arrowEndY), g = 3, m = this.getArrowWidth(r.pstyle("width").pfValue, r.pstyle("arrow-scale").value) * this.arrowShapeWidth, p = g * m, y = et({
      x: t.ctrlpts[0],
      y: t.ctrlpts[1]
    }, {
      x: t.startX,
      y: t.startY
    }), b = y < p, w = et({
      x: t.ctrlpts[0],
      y: t.ctrlpts[1]
    }, {
      x: t.endX,
      y: t.endY
    }), T = w < p, C = !1;
    if (f || c || b) {
      C = !0;
      var x = {
        // delta
        x: t.ctrlpts[0] - a.x,
        y: t.ctrlpts[1] - a.y
      }, D = Math.sqrt(x.x * x.x + x.y * x.y), E = {
        // normalised delta
        x: x.x / D,
        y: x.y / D
      }, P = Math.max(i, o), B = {
        // *2 radius guarantees outside shape
        x: t.ctrlpts[0] + E.x * 2 * P,
        y: t.ctrlpts[1] + E.y * 2 * P
      }, k = u.intersectLine(a.x, a.y, i, o, B.x, B.y, 0);
      b ? (t.ctrlpts[0] = t.ctrlpts[0] + E.x * (p - y), t.ctrlpts[1] = t.ctrlpts[1] + E.y * (p - y)) : (t.ctrlpts[0] = k[0] + E.x * p, t.ctrlpts[1] = k[1] + E.y * p);
    }
    if (d || h || T) {
      C = !0;
      var M = {
        // delta
        x: t.ctrlpts[0] - n.x,
        y: t.ctrlpts[1] - n.y
      }, L = Math.sqrt(M.x * M.x + M.y * M.y), O = {
        // normalised delta
        x: M.x / L,
        y: M.y / L
      }, A = Math.max(i, o), R = {
        // *2 radius guarantees outside shape
        x: t.ctrlpts[0] + O.x * 2 * A,
        y: t.ctrlpts[1] + O.y * 2 * A
      }, z = v.intersectLine(n.x, n.y, s, l, R.x, R.y, 0);
      T ? (t.ctrlpts[0] = t.ctrlpts[0] + O.x * (p - w), t.ctrlpts[1] = t.ctrlpts[1] + O.y * (p - w)) : (t.ctrlpts[0] = z[0] + O.x * p, t.ctrlpts[1] = z[1] + O.y * p);
    }
    C && this.findEndpoints(r);
  }
};
nr.storeAllpts = function(r) {
  var e = r._private.rscratch;
  if (e.edgeType === "multibezier" || e.edgeType === "bezier" || e.edgeType === "self" || e.edgeType === "compound") {
    e.allpts = [], e.allpts.push(e.startX, e.startY);
    for (var t = 0; t + 1 < e.ctrlpts.length; t += 2)
      e.allpts.push(e.ctrlpts[t], e.ctrlpts[t + 1]), t + 3 < e.ctrlpts.length && e.allpts.push((e.ctrlpts[t] + e.ctrlpts[t + 2]) / 2, (e.ctrlpts[t + 1] + e.ctrlpts[t + 3]) / 2);
    e.allpts.push(e.endX, e.endY);
    var a, n;
    e.ctrlpts.length / 2 % 2 === 0 ? (a = e.allpts.length / 2 - 1, e.midX = e.allpts[a], e.midY = e.allpts[a + 1]) : (a = e.allpts.length / 2 - 3, n = 0.5, e.midX = Ge(e.allpts[a], e.allpts[a + 2], e.allpts[a + 4], n), e.midY = Ge(e.allpts[a + 1], e.allpts[a + 3], e.allpts[a + 5], n));
  } else if (e.edgeType === "straight")
    e.allpts = [e.startX, e.startY, e.endX, e.endY], e.midX = (e.startX + e.endX + e.arrowStartX + e.arrowEndX) / 4, e.midY = (e.startY + e.endY + e.arrowStartY + e.arrowEndY) / 4;
  else if (e.edgeType === "segments")
    if (e.allpts = [], e.allpts.push(e.startX, e.startY), e.allpts.push.apply(e.allpts, e.segpts), e.allpts.push(e.endX, e.endY), e.segpts.length % 4 === 0) {
      var i = e.segpts.length / 2, o = i - 2;
      e.midX = (e.segpts[o] + e.segpts[i]) / 2, e.midY = (e.segpts[o + 1] + e.segpts[i + 1]) / 2;
    } else {
      var s = e.segpts.length / 2 - 1;
      e.midX = e.segpts[s], e.midY = e.segpts[s + 1];
    }
};
nr.checkForInvalidEdgeWarning = function(r) {
  var e = r[0]._private.rscratch;
  e.nodesOverlap || ae(e.startX) && ae(e.startY) && ae(e.endX) && ae(e.endY) ? e.loggedErr = !1 : e.loggedErr || (e.loggedErr = !0, Pe("Edge `" + r.id() + "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap."));
};
nr.findEdgeControlPoints = function(r) {
  var e = this;
  if (!(!r || r.length === 0)) {
    for (var t = this, a = t.cy, n = a.hasCompoundNodes(), i = {
      map: new Cr(),
      get: function(x) {
        var D = this.map.get(x[0]);
        return D != null ? D.get(x[1]) : null;
      },
      set: function(x, D) {
        var E = this.map.get(x[0]);
        E == null && (E = new Cr(), this.map.set(x[0], E)), E.set(x[1], D);
      }
    }, o = [], s = [], l = 0; l < r.length; l++) {
      var u = r[l], v = u._private, f = u.pstyle("curve-style").value;
      if (!(u.removed() || !u.takesUpSpace())) {
        if (f === "haystack") {
          s.push(u);
          continue;
        }
        var c = f === "unbundled-bezier" || f === "segments" || f === "straight" || f === "straight-triangle" || f === "taxi", d = f === "unbundled-bezier" || f === "bezier", h = v.source, g = v.target, m = h.poolIndex(), p = g.poolIndex(), y = [m, p].sort(), b = i.get(y);
        b == null && (b = {
          eles: []
        }, i.set(y, b), o.push(y)), b.eles.push(u), c && (b.hasUnbundled = !0), d && (b.hasBezier = !0);
      }
    }
    for (var w = function(x) {
      var D = o[x], E = i.get(D), P = void 0;
      if (!E.hasUnbundled) {
        var B = E.eles[0].parallelEdges().filter(function(_) {
          return _.isBundledBezier();
        });
        _n(E.eles), B.forEach(function(_) {
          return E.eles.push(_);
        }), E.eles.sort(function(_, S) {
          return _.poolIndex() - S.poolIndex();
        });
      }
      var k = E.eles[0], M = k.source(), L = k.target();
      if (M.poolIndex() > L.poolIndex()) {
        var O = M;
        M = L, L = O;
      }
      var A = E.srcPos = M.position(), R = E.tgtPos = L.position(), z = E.srcW = M.outerWidth(), F = E.srcH = M.outerHeight(), q = E.tgtW = L.outerWidth(), N = E.tgtH = L.outerHeight(), V = E.srcShape = t.nodeShapes[e.getNodeShape(M)], Y = E.tgtShape = t.nodeShapes[e.getNodeShape(L)];
      E.dirCounts = {
        north: 0,
        west: 0,
        south: 0,
        east: 0,
        northwest: 0,
        southwest: 0,
        northeast: 0,
        southeast: 0
      };
      for (var U = 0; U < E.eles.length; U++) {
        var W = E.eles[U], H = W[0]._private.rscratch, I = W.pstyle("curve-style").value, X = I === "unbundled-bezier" || I === "segments" || I === "taxi", Z = !M.same(W.source());
        if (!E.calculatedIntersection && M !== L && (E.hasBezier || E.hasUnbundled)) {
          E.calculatedIntersection = !0;
          var j = V.intersectLine(A.x, A.y, z, F, R.x, R.y, 0), re = E.srcIntn = j, de = Y.intersectLine(R.x, R.y, q, N, A.x, A.y, 0), he = E.tgtIntn = de, te = E.intersectionPts = {
            x1: j[0],
            x2: de[0],
            y1: j[1],
            y2: de[1]
          }, ee = E.posPts = {
            x1: A.x,
            x2: R.x,
            y1: A.y,
            y2: R.y
          }, ve = de[1] - j[1], oe = de[0] - j[0], ne = Math.sqrt(oe * oe + ve * ve), ue = E.vector = {
            x: oe,
            y: ve
          }, we = E.vectorNorm = {
            x: ue.x / ne,
            y: ue.y / ne
          }, ge = {
            x: -we.y,
            y: we.x
          };
          E.nodesOverlap = !ae(ne) || Y.checkPoint(j[0], j[1], 0, q, N, R.x, R.y) || V.checkPoint(de[0], de[1], 0, z, F, A.x, A.y), E.vectorNormInverse = ge, P = {
            nodesOverlap: E.nodesOverlap,
            dirCounts: E.dirCounts,
            calculatedIntersection: !0,
            hasBezier: E.hasBezier,
            hasUnbundled: E.hasUnbundled,
            eles: E.eles,
            srcPos: R,
            tgtPos: A,
            srcW: q,
            srcH: N,
            tgtW: z,
            tgtH: F,
            srcIntn: he,
            tgtIntn: re,
            srcShape: Y,
            tgtShape: V,
            posPts: {
              x1: ee.x2,
              y1: ee.y2,
              x2: ee.x1,
              y2: ee.y1
            },
            intersectionPts: {
              x1: te.x2,
              y1: te.y2,
              x2: te.x1,
              y2: te.y1
            },
            vector: {
              x: -ue.x,
              y: -ue.y
            },
            vectorNorm: {
              x: -we.x,
              y: -we.y
            },
            vectorNormInverse: {
              x: -ge.x,
              y: -ge.y
            }
          };
        }
        var fe = Z ? P : E;
        H.nodesOverlap = fe.nodesOverlap, H.srcIntn = fe.srcIntn, H.tgtIntn = fe.tgtIntn, n && (M.isParent() || M.isChild() || L.isParent() || L.isChild()) && (M.parents().anySame(L) || L.parents().anySame(M) || M.same(L) && M.isParent()) ? e.findCompoundLoopPoints(W, fe, U, X) : M === L ? e.findLoopPoints(W, fe, U, X) : I === "segments" ? e.findSegmentsPoints(W, fe) : I === "taxi" ? e.findTaxiPoints(W, fe) : I === "straight" || !X && E.eles.length % 2 === 1 && U === Math.floor(E.eles.length / 2) ? e.findStraightEdgePoints(W) : e.findBezierPoints(W, fe, U, X, Z), e.findEndpoints(W), e.tryToCorrectInvalidPoints(W, fe), e.checkForInvalidEdgeWarning(W), e.storeAllpts(W), e.storeEdgeProjections(W), e.calculateArrowAngles(W), e.recalculateEdgeLabelProjections(W), e.calculateLabelAngles(W);
      }
    }, T = 0; T < o.length; T++)
      w(T);
    this.findHaystackPoints(s);
  }
};
function Xs(r) {
  var e = [];
  if (r != null) {
    for (var t = 0; t < r.length; t += 2) {
      var a = r[t], n = r[t + 1];
      e.push({
        x: a,
        y: n
      });
    }
    return e;
  }
}
nr.getSegmentPoints = function(r) {
  var e = r[0]._private.rscratch, t = e.edgeType;
  if (t === "segments")
    return this.recalculateRenderedStyle(r), Xs(e.segpts);
};
nr.getControlPoints = function(r) {
  var e = r[0]._private.rscratch, t = e.edgeType;
  if (t === "bezier" || t === "multibezier" || t === "self" || t === "compound")
    return this.recalculateRenderedStyle(r), Xs(e.ctrlpts);
};
nr.getEdgeMidpoint = function(r) {
  var e = r[0]._private.rscratch;
  return this.recalculateRenderedStyle(r), {
    x: e.midX,
    y: e.midY
  };
};
var da = {};
da.manualEndptToPx = function(r, e) {
  var t = this, a = r.position(), n = r.outerWidth(), i = r.outerHeight();
  if (e.value.length === 2) {
    var o = [e.pfValue[0], e.pfValue[1]];
    return e.units[0] === "%" && (o[0] = o[0] * n), e.units[1] === "%" && (o[1] = o[1] * i), o[0] += a.x, o[1] += a.y, o;
  } else {
    var s = e.pfValue[0];
    s = -Math.PI / 2 + s;
    var l = 2 * Math.max(n, i), u = [a.x + Math.cos(s) * l, a.y + Math.sin(s) * l];
    return t.nodeShapes[this.getNodeShape(r)].intersectLine(a.x, a.y, n, i, u[0], u[1], 0);
  }
};
da.findEndpoints = function(r) {
  var e = this, t, a = r.source()[0], n = r.target()[0], i = a.position(), o = n.position(), s = r.pstyle("target-arrow-shape").value, l = r.pstyle("source-arrow-shape").value, u = r.pstyle("target-distance-from-node").pfValue, v = r.pstyle("source-distance-from-node").pfValue, f = r.pstyle("curve-style").value, c = r._private.rscratch, d = c.edgeType, h = f === "taxi", g = d === "self" || d === "compound", m = d === "bezier" || d === "multibezier" || g, p = d !== "bezier", y = d === "straight" || d === "segments", b = d === "segments", w = m || p || y, T = g || h, C = r.pstyle("source-endpoint"), x = T ? "outside-to-node" : C.value, D = r.pstyle("target-endpoint"), E = T ? "outside-to-node" : D.value;
  c.srcManEndpt = C, c.tgtManEndpt = D;
  var P, B, k, M;
  if (m) {
    var L = [c.ctrlpts[0], c.ctrlpts[1]], O = p ? [c.ctrlpts[c.ctrlpts.length - 2], c.ctrlpts[c.ctrlpts.length - 1]] : L;
    P = O, B = L;
  } else if (y) {
    var A = b ? c.segpts.slice(0, 2) : [o.x, o.y], R = b ? c.segpts.slice(c.segpts.length - 2) : [i.x, i.y];
    P = R, B = A;
  }
  if (E === "inside-to-node")
    t = [o.x, o.y];
  else if (D.units)
    t = this.manualEndptToPx(n, D);
  else if (E === "outside-to-line")
    t = c.tgtIntn;
  else if (E === "outside-to-node" || E === "outside-to-node-or-label" ? k = P : (E === "outside-to-line" || E === "outside-to-line-or-label") && (k = [i.x, i.y]), t = e.nodeShapes[this.getNodeShape(n)].intersectLine(o.x, o.y, n.outerWidth(), n.outerHeight(), k[0], k[1], 0), E === "outside-to-node-or-label" || E === "outside-to-line-or-label") {
    var z = n._private.rscratch, F = z.labelWidth, q = z.labelHeight, N = z.labelX, V = z.labelY, Y = F / 2, U = q / 2, W = n.pstyle("text-valign").value;
    W === "top" ? V -= U : W === "bottom" && (V += U);
    var H = n.pstyle("text-halign").value;
    H === "left" ? N -= Y : H === "right" && (N += Y);
    var I = jt(k[0], k[1], [N - Y, V - U, N + Y, V - U, N + Y, V + U, N - Y, V + U], o.x, o.y);
    if (I.length > 0) {
      var X = i, Z = Qr(X, gt(t)), j = Qr(X, gt(I)), re = Z;
      if (j < Z && (t = I, re = j), I.length > 2) {
        var de = Qr(X, {
          x: I[2],
          y: I[3]
        });
        de < re && (t = [I[2], I[3]]);
      }
    }
  }
  var he = xa(t, P, e.arrowShapes[s].spacing(r) + u), te = xa(t, P, e.arrowShapes[s].gap(r) + u);
  if (c.endX = te[0], c.endY = te[1], c.arrowEndX = he[0], c.arrowEndY = he[1], x === "inside-to-node")
    t = [i.x, i.y];
  else if (C.units)
    t = this.manualEndptToPx(a, C);
  else if (x === "outside-to-line")
    t = c.srcIntn;
  else if (x === "outside-to-node" || x === "outside-to-node-or-label" ? M = B : (x === "outside-to-line" || x === "outside-to-line-or-label") && (M = [o.x, o.y]), t = e.nodeShapes[this.getNodeShape(a)].intersectLine(i.x, i.y, a.outerWidth(), a.outerHeight(), M[0], M[1], 0), x === "outside-to-node-or-label" || x === "outside-to-line-or-label") {
    var ee = a._private.rscratch, ve = ee.labelWidth, oe = ee.labelHeight, ne = ee.labelX, ue = ee.labelY, we = ve / 2, ge = oe / 2, fe = a.pstyle("text-valign").value;
    fe === "top" ? ue -= ge : fe === "bottom" && (ue += ge);
    var _ = a.pstyle("text-halign").value;
    _ === "left" ? ne -= we : _ === "right" && (ne += we);
    var S = jt(M[0], M[1], [ne - we, ue - ge, ne + we, ue - ge, ne + we, ue + ge, ne - we, ue + ge], i.x, i.y);
    if (S.length > 0) {
      var $ = o, Q = Qr($, gt(t)), G = Qr($, gt(S)), K = Q;
      if (G < Q && (t = [S[0], S[1]], K = G), S.length > 2) {
        var pe = Qr($, {
          x: S[2],
          y: S[3]
        });
        pe < K && (t = [S[2], S[3]]);
      }
    }
  }
  var J = xa(t, B, e.arrowShapes[l].spacing(r) + v), se = xa(t, B, e.arrowShapes[l].gap(r) + v);
  c.startX = se[0], c.startY = se[1], c.arrowStartX = J[0], c.arrowStartY = J[1], w && (!ae(c.startX) || !ae(c.startY) || !ae(c.endX) || !ae(c.endY) ? c.badLine = !0 : c.badLine = !1);
};
da.getSourceEndpoint = function(r) {
  var e = r[0]._private.rscratch;
  switch (this.recalculateRenderedStyle(r), e.edgeType) {
    case "haystack":
      return {
        x: e.haystackPts[0],
        y: e.haystackPts[1]
      };
    default:
      return {
        x: e.arrowStartX,
        y: e.arrowStartY
      };
  }
};
da.getTargetEndpoint = function(r) {
  var e = r[0]._private.rscratch;
  switch (this.recalculateRenderedStyle(r), e.edgeType) {
    case "haystack":
      return {
        x: e.haystackPts[2],
        y: e.haystackPts[3]
      };
    default:
      return {
        x: e.arrowEndX,
        y: e.arrowEndY
      };
  }
};
var li = {};
function Qp(r, e, t) {
  for (var a = function(u, v, f, c) {
    return Ge(u, v, f, c);
  }, n = e._private, i = n.rstyle.bezierPts, o = 0; o < r.bezierProjPcts.length; o++) {
    var s = r.bezierProjPcts[o];
    i.push({
      x: a(t[0], t[2], t[4], s),
      y: a(t[1], t[3], t[5], s)
    });
  }
}
li.storeEdgeProjections = function(r) {
  var e = r._private, t = e.rscratch, a = t.edgeType;
  if (e.rstyle.bezierPts = null, e.rstyle.linePts = null, e.rstyle.haystackPts = null, a === "multibezier" || a === "bezier" || a === "self" || a === "compound") {
    e.rstyle.bezierPts = [];
    for (var n = 0; n + 5 < t.allpts.length; n += 4)
      Qp(this, r, t.allpts.slice(n, n + 6));
  } else if (a === "segments")
    for (var i = e.rstyle.linePts = [], n = 0; n + 1 < t.allpts.length; n += 2)
      i.push({
        x: t.allpts[n],
        y: t.allpts[n + 1]
      });
  else if (a === "haystack") {
    var o = t.haystackPts;
    e.rstyle.haystackPts = [{
      x: o[0],
      y: o[1]
    }, {
      x: o[2],
      y: o[3]
    }];
  }
  e.rstyle.arrowWidth = this.getArrowWidth(r.pstyle("width").pfValue, r.pstyle("arrow-scale").value) * this.arrowShapeWidth;
};
li.recalculateEdgeProjections = function(r) {
  this.findEdgeControlPoints(r);
};
var Tr = {};
Tr.recalculateNodeLabelProjection = function(r) {
  var e = r.pstyle("label").strValue;
  if (!qr(e)) {
    var t, a, n = r._private, i = r.width(), o = r.height(), s = r.padding(), l = r.position(), u = r.pstyle("text-halign").strValue, v = r.pstyle("text-valign").strValue, f = n.rscratch, c = n.rstyle;
    switch (u) {
      case "left":
        t = l.x - i / 2 - s;
        break;
      case "right":
        t = l.x + i / 2 + s;
        break;
      default:
        t = l.x;
    }
    switch (v) {
      case "top":
        a = l.y - o / 2 - s;
        break;
      case "bottom":
        a = l.y + o / 2 + s;
        break;
      default:
        a = l.y;
    }
    f.labelX = t, f.labelY = a, c.labelX = t, c.labelY = a, this.calculateLabelAngles(r), this.applyLabelDimensions(r);
  }
};
var Us = function(e, t) {
  var a = Math.atan(t / e);
  return e === 0 && a < 0 && (a = a * -1), a;
}, Zs = function(e, t) {
  var a = t.x - e.x, n = t.y - e.y;
  return Us(a, n);
}, _p = function(e, t, a, n) {
  var i = Jt(0, n - 1e-3, 1), o = Jt(0, n + 1e-3, 1), s = mt(e, t, a, i), l = mt(e, t, a, o);
  return Zs(s, l);
};
Tr.recalculateEdgeLabelProjections = function(r) {
  var e, t = r._private, a = t.rscratch, n = this, i = {
    mid: r.pstyle("label").strValue,
    source: r.pstyle("source-label").strValue,
    target: r.pstyle("target-label").strValue
  };
  if (i.mid || i.source || i.target) {
    e = {
      x: a.midX,
      y: a.midY
    };
    var o = function(f, c, d) {
      Nr(t.rscratch, f, c, d), Nr(t.rstyle, f, c, d);
    };
    o("labelX", null, e.x), o("labelY", null, e.y);
    var s = Us(a.midDispX, a.midDispY);
    o("labelAutoAngle", null, s);
    var l = function v() {
      if (v.cache)
        return v.cache;
      for (var f = [], c = 0; c + 5 < a.allpts.length; c += 4) {
        var d = {
          x: a.allpts[c],
          y: a.allpts[c + 1]
        }, h = {
          x: a.allpts[c + 2],
          y: a.allpts[c + 3]
        }, g = {
          x: a.allpts[c + 4],
          y: a.allpts[c + 5]
        };
        f.push({
          p0: d,
          p1: h,
          p2: g,
          startDist: 0,
          length: 0,
          segments: []
        });
      }
      var m = t.rstyle.bezierPts, p = n.bezierProjPcts.length;
      function y(x, D, E, P, B) {
        var k = et(D, E), M = x.segments[x.segments.length - 1], L = {
          p0: D,
          p1: E,
          t0: P,
          t1: B,
          startDist: M ? M.startDist + M.length : 0,
          length: k
        };
        x.segments.push(L), x.length += k;
      }
      for (var b = 0; b < f.length; b++) {
        var w = f[b], T = f[b - 1];
        T && (w.startDist = T.startDist + T.length), y(w, w.p0, m[b * p], 0, n.bezierProjPcts[0]);
        for (var C = 0; C < p - 1; C++)
          y(w, m[b * p + C], m[b * p + C + 1], n.bezierProjPcts[C], n.bezierProjPcts[C + 1]);
        y(w, m[b * p + p - 1], w.p2, n.bezierProjPcts[p - 1], 1);
      }
      return v.cache = f;
    }, u = function(f) {
      var c, d = f === "source";
      if (i[f]) {
        var h = r.pstyle(f + "-text-offset").pfValue;
        switch (a.edgeType) {
          case "self":
          case "compound":
          case "bezier":
          case "multibezier": {
            for (var g = l(), m, p = 0, y = 0, b = 0; b < g.length; b++) {
              for (var w = g[d ? b : g.length - 1 - b], T = 0; T < w.segments.length; T++) {
                var C = w.segments[d ? T : w.segments.length - 1 - T], x = b === g.length - 1 && T === w.segments.length - 1;
                if (p = y, y += C.length, y >= h || x) {
                  m = {
                    cp: w,
                    segment: C
                  };
                  break;
                }
              }
              if (m)
                break;
            }
            var D = m.cp, E = m.segment, P = (h - p) / E.length, B = E.t1 - E.t0, k = d ? E.t0 + B * P : E.t1 - B * P;
            k = Jt(0, k, 1), e = mt(D.p0, D.p1, D.p2, k), c = _p(D.p0, D.p1, D.p2, k);
            break;
          }
          case "straight":
          case "segments":
          case "haystack": {
            for (var M = 0, L, O, A, R, z = a.allpts.length, F = 0; F + 3 < z && (d ? (A = {
              x: a.allpts[F],
              y: a.allpts[F + 1]
            }, R = {
              x: a.allpts[F + 2],
              y: a.allpts[F + 3]
            }) : (A = {
              x: a.allpts[z - 2 - F],
              y: a.allpts[z - 1 - F]
            }, R = {
              x: a.allpts[z - 4 - F],
              y: a.allpts[z - 3 - F]
            }), L = et(A, R), O = M, M += L, !(M >= h)); F += 2)
              ;
            var q = h - O, N = q / L;
            N = Jt(0, N, 1), e = dh(A, R, N), c = Zs(A, R);
            break;
          }
        }
        o("labelX", f, e.x), o("labelY", f, e.y), o("labelAutoAngle", f, c);
      }
    };
    u("source"), u("target"), this.applyLabelDimensions(r);
  }
};
Tr.applyLabelDimensions = function(r) {
  this.applyPrefixedLabelDimensions(r), r.isEdge() && (this.applyPrefixedLabelDimensions(r, "source"), this.applyPrefixedLabelDimensions(r, "target"));
};
Tr.applyPrefixedLabelDimensions = function(r, e) {
  var t = r._private, a = this.getLabelText(r, e), n = this.calculateLabelDimensions(r, a), i = r.pstyle("line-height").pfValue, o = r.pstyle("text-wrap").strValue, s = br(t.rscratch, "labelWrapCachedLines", e) || [], l = o !== "wrap" ? 1 : Math.max(s.length, 1), u = n.height / l, v = u * i, f = n.width, c = n.height + (l - 1) * (i - 1) * u;
  Nr(t.rstyle, "labelWidth", e, f), Nr(t.rscratch, "labelWidth", e, f), Nr(t.rstyle, "labelHeight", e, c), Nr(t.rscratch, "labelHeight", e, c), Nr(t.rscratch, "labelLineHeight", e, v);
};
Tr.getLabelText = function(r, e) {
  var t = r._private, a = e ? e + "-" : "", n = r.pstyle(a + "label").strValue, i = r.pstyle("text-transform").value, o = function(q, N) {
    return N ? (Nr(t.rscratch, q, e, N), N) : br(t.rscratch, q, e);
  };
  if (!n)
    return "";
  i == "none" || (i == "uppercase" ? n = n.toUpperCase() : i == "lowercase" && (n = n.toLowerCase()));
  var s = r.pstyle("text-wrap").value;
  if (s === "wrap") {
    var l = o("labelKey");
    if (l != null && o("labelWrapKey") === l)
      return o("labelWrapCachedText");
    for (var u = "​", v = n.split(`
`), f = r.pstyle("text-max-width").pfValue, c = r.pstyle("text-overflow-wrap").value, d = c === "anywhere", h = [], g = /[\s\u200b]+/, m = d ? "" : " ", p = 0; p < v.length; p++) {
      var y = v[p], b = this.calculateLabelDimensions(r, y), w = b.width;
      if (d) {
        var T = y.split("").join(u);
        y = T;
      }
      if (w > f) {
        for (var C = y.split(g), x = "", D = 0; D < C.length; D++) {
          var E = C[D], P = x.length === 0 ? E : x + m + E, B = this.calculateLabelDimensions(r, P), k = B.width;
          k <= f ? x += E + m : (x && h.push(x), x = E + m);
        }
        x.match(/^[\s\u200b]+$/) || h.push(x);
      } else
        h.push(y);
    }
    o("labelWrapCachedLines", h), n = o("labelWrapCachedText", h.join(`
`)), o("labelWrapKey", l);
  } else if (s === "ellipsis") {
    var M = r.pstyle("text-max-width").pfValue, L = "", O = "…", A = !1;
    if (this.calculateLabelDimensions(r, n).width < M)
      return n;
    for (var R = 0; R < n.length; R++) {
      var z = this.calculateLabelDimensions(r, L + n[R] + O).width;
      if (z > M)
        break;
      L += n[R], R === n.length - 1 && (A = !0);
    }
    return A || (L += O), L;
  }
  return n;
};
Tr.getLabelJustification = function(r) {
  var e = r.pstyle("text-justification").strValue, t = r.pstyle("text-halign").strValue;
  if (e === "auto")
    if (r.isNode())
      switch (t) {
        case "left":
          return "right";
        case "right":
          return "left";
        default:
          return "center";
      }
    else
      return "center";
  else
    return e;
};
Tr.calculateLabelDimensions = function(r, e) {
  var t = this, a = jr(e, r._private.labelDimsKey), n = t.labelDimCache || (t.labelDimCache = []), i = n[a];
  if (i != null)
    return i;
  var o = 0, s = r.pstyle("font-style").strValue, l = r.pstyle("font-size").pfValue, u = r.pstyle("font-family").strValue, v = r.pstyle("font-weight").strValue, f = this.labelCalcCanvas, c = this.labelCalcCanvasContext;
  if (!f) {
    f = this.labelCalcCanvas = document.createElement("canvas"), c = this.labelCalcCanvasContext = f.getContext("2d");
    var d = f.style;
    d.position = "absolute", d.left = "-9999px", d.top = "-9999px", d.zIndex = "-1", d.visibility = "hidden", d.pointerEvents = "none";
  }
  c.font = "".concat(s, " ").concat(v, " ").concat(l, "px ").concat(u);
  for (var h = 0, g = 0, m = e.split(`
`), p = 0; p < m.length; p++) {
    var y = m[p], b = c.measureText(y), w = Math.ceil(b.width), T = l;
    h = Math.max(w, h), g += T;
  }
  return h += o, g += o, n[a] = {
    width: h,
    height: g
  };
};
Tr.calculateLabelAngle = function(r, e) {
  var t = r._private, a = t.rscratch, n = r.isEdge(), i = e ? e + "-" : "", o = r.pstyle(i + "text-rotation"), s = o.strValue;
  return s === "none" ? 0 : n && s === "autorotate" ? a.labelAutoAngle : s === "autorotate" ? 0 : o.pfValue;
};
Tr.calculateLabelAngles = function(r) {
  var e = this, t = r.isEdge(), a = r._private, n = a.rscratch;
  n.labelAngle = e.calculateLabelAngle(r), t && (n.sourceLabelAngle = e.calculateLabelAngle(r, "source"), n.targetLabelAngle = e.calculateLabelAngle(r, "target"));
};
var Qs = {}, xo = 28, Eo = !1;
Qs.getNodeShape = function(r) {
  var e = this, t = r.pstyle("shape").value;
  if (t === "cutrectangle" && (r.width() < xo || r.height() < xo))
    return Eo || (Pe("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead"), Eo = !0), "rectangle";
  if (r.isParent())
    return t === "rectangle" || t === "roundrectangle" || t === "round-rectangle" || t === "cutrectangle" || t === "cut-rectangle" || t === "barrel" ? t : "rectangle";
  if (t === "polygon") {
    var a = r.pstyle("shape-polygon-points").value;
    return e.nodeShapes.makePolygon(a).name;
  }
  return t;
};
var vn = {};
vn.registerCalculationListeners = function() {
  var r = this.cy, e = r.collection(), t = this, a = function(o) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    if (e.merge(o), s)
      for (var l = 0; l < o.length; l++) {
        var u = o[l], v = u._private, f = v.rstyle;
        f.clean = !1, f.cleanConnected = !1;
      }
  };
  t.binder(r).on("bounds.* dirty.*", function(o) {
    var s = o.target;
    a(s);
  }).on("style.* background.*", function(o) {
    var s = o.target;
    a(s, !1);
  });
  var n = function(o) {
    if (o) {
      var s = t.onUpdateEleCalcsFns;
      e.cleanStyle();
      for (var l = 0; l < e.length; l++) {
        var u = e[l], v = u._private.rstyle;
        u.isNode() && !v.cleanConnected && (a(u.connectedEdges()), v.cleanConnected = !0);
      }
      if (s)
        for (var f = 0; f < s.length; f++) {
          var c = s[f];
          c(o, e);
        }
      t.recalculateRenderedStyle(e), e = r.collection();
    }
  };
  t.flushRenderedStyleQueue = function() {
    n(!0);
  }, t.beforeRender(n, t.beforeRenderPriorities.eleCalcs);
};
vn.onUpdateEleCalcs = function(r) {
  var e = this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || [];
  e.push(r);
};
vn.recalculateRenderedStyle = function(r, e) {
  var t = function(w) {
    return w._private.rstyle.cleanConnected;
  }, a = [], n = [];
  if (!this.destroyed) {
    e === void 0 && (e = !0);
    for (var i = 0; i < r.length; i++) {
      var o = r[i], s = o._private, l = s.rstyle;
      o.isEdge() && (!t(o.source()) || !t(o.target())) && (l.clean = !1), !(e && l.clean || o.removed()) && o.pstyle("display").value !== "none" && (s.group === "nodes" ? n.push(o) : a.push(o), l.clean = !0);
    }
    for (var u = 0; u < n.length; u++) {
      var v = n[u], f = v._private, c = f.rstyle, d = v.position();
      this.recalculateNodeLabelProjection(v), c.nodeX = d.x, c.nodeY = d.y, c.nodeW = v.pstyle("width").pfValue, c.nodeH = v.pstyle("height").pfValue;
    }
    this.recalculateEdgeProjections(a);
    for (var h = 0; h < a.length; h++) {
      var g = a[h], m = g._private, p = m.rstyle, y = m.rscratch;
      p.srcX = y.arrowStartX, p.srcY = y.arrowStartY, p.tgtX = y.arrowEndX, p.tgtY = y.arrowEndY, p.midX = y.midX, p.midY = y.midY, p.labelAngle = y.labelAngle, p.sourceLabelAngle = y.sourceLabelAngle, p.targetLabelAngle = y.targetLabelAngle;
    }
  }
};
var fn = {};
fn.updateCachedGrabbedEles = function() {
  var r = this.cachedZSortedEles;
  if (r) {
    r.drag = [], r.nondrag = [];
    for (var e = [], t = 0; t < r.length; t++) {
      var a = r[t], n = a._private.rscratch;
      a.grabbed() && !a.isParent() ? e.push(a) : n.inDragLayer ? r.drag.push(a) : r.nondrag.push(a);
    }
    for (var t = 0; t < e.length; t++) {
      var a = e[t];
      r.drag.push(a);
    }
  }
};
fn.invalidateCachedZSortedEles = function() {
  this.cachedZSortedEles = null;
};
fn.getCachedZSortedEles = function(r) {
  if (r || !this.cachedZSortedEles) {
    var e = this.cy.mutableElements().toArray();
    e.sort(zs), e.interactive = e.filter(function(t) {
      return t.interactive();
    }), this.cachedZSortedEles = e, this.updateCachedGrabbedEles();
  } else
    e = this.cachedZSortedEles;
  return e;
};
var _s = {};
[it, Ka, nr, da, li, Tr, Qs, vn, fn].forEach(function(r) {
  ce(_s, r);
});
var Js = {};
Js.getCachedImage = function(r, e, t) {
  var a = this, n = a.imageCache = a.imageCache || {}, i = n[r];
  if (i)
    return i.image.complete || i.image.addEventListener("load", t), i.image;
  i = n[r] = n[r] || {};
  var o = i.image = new Image();
  o.addEventListener("load", t), o.addEventListener("error", function() {
    o.error = !0;
  });
  var s = "data:", l = r.substring(0, s.length).toLowerCase() === s;
  return l || (o.crossOrigin = e), o.src = r, o;
};
var Mt = {};
Mt.registerBinding = function(r, e, t, a) {
  var n = Array.prototype.slice.apply(arguments, [1]), i = this.binder(r);
  return i.on.apply(i, n);
};
Mt.binder = function(r) {
  var e = this, t = r === window || r === document || r === document.body || yd(r);
  if (e.supportsPassiveEvents == null) {
    var a = !1;
    try {
      var n = Object.defineProperty({}, "passive", {
        get: function() {
          return a = !0, !0;
        }
      });
      window.addEventListener("test", null, n);
    } catch {
    }
    e.supportsPassiveEvents = a;
  }
  var i = function(s, l, u) {
    var v = Array.prototype.slice.call(arguments);
    return t && e.supportsPassiveEvents && (v[2] = {
      capture: u ?? !1,
      passive: !1,
      once: !1
    }), e.bindings.push({
      target: r,
      args: v
    }), (r.addEventListener || r.on).apply(r, v), this;
  };
  return {
    on: i,
    addEventListener: i,
    addListener: i,
    bind: i
  };
};
Mt.nodeIsDraggable = function(r) {
  return r && r.isNode() && !r.locked() && r.grabbable();
};
Mt.nodeIsGrabbable = function(r) {
  return this.nodeIsDraggable(r) && r.interactive();
};
Mt.load = function() {
  var r = this, e = function(S) {
    return S.selected();
  }, t = function(S, $, Q, G) {
    S == null && (S = r.cy);
    for (var K = 0; K < $.length; K++) {
      var pe = $[K];
      S.emit({
        originalEvent: Q,
        type: pe,
        position: G
      });
    }
  }, a = function(S) {
    return S.shiftKey || S.metaKey || S.ctrlKey;
  }, n = function(S, $) {
    var Q = !0;
    if (r.cy.hasCompoundNodes() && S && S.pannable())
      for (var G = 0; $ && G < $.length; G++) {
        var S = $[G];
        if (S.isNode() && S.isParent() && !S.pannable()) {
          Q = !1;
          break;
        }
      }
    else
      Q = !0;
    return Q;
  }, i = function(S) {
    S[0]._private.grabbed = !0;
  }, o = function(S) {
    S[0]._private.grabbed = !1;
  }, s = function(S) {
    S[0]._private.rscratch.inDragLayer = !0;
  }, l = function(S) {
    S[0]._private.rscratch.inDragLayer = !1;
  }, u = function(S) {
    S[0]._private.rscratch.isGrabTarget = !0;
  }, v = function(S) {
    S[0]._private.rscratch.isGrabTarget = !1;
  }, f = function(S, $) {
    var Q = $.addToList, G = Q.has(S);
    !G && S.grabbable() && !S.locked() && (Q.merge(S), i(S));
  }, c = function(S, $) {
    if (S.cy().hasCompoundNodes() && !($.inDragLayer == null && $.addToList == null)) {
      var Q = S.descendants();
      $.inDragLayer && (Q.forEach(s), Q.connectedEdges().forEach(s)), $.addToList && f(Q, $);
    }
  }, d = function(S, $) {
    $ = $ || {};
    var Q = S.cy().hasCompoundNodes();
    $.inDragLayer && (S.forEach(s), S.neighborhood().stdFilter(function(G) {
      return !Q || G.isEdge();
    }).forEach(s)), $.addToList && S.forEach(function(G) {
      f(G, $);
    }), c(S, $), m(S, {
      inDragLayer: $.inDragLayer
    }), r.updateCachedGrabbedEles();
  }, h = d, g = function(S) {
    S && (r.getCachedZSortedEles().forEach(function($) {
      o($), l($), v($);
    }), r.updateCachedGrabbedEles());
  }, m = function(S, $) {
    if (!($.inDragLayer == null && $.addToList == null) && S.cy().hasCompoundNodes()) {
      var Q = S.ancestors().orphans();
      if (!Q.same(S)) {
        var G = Q.descendants().spawnSelf().merge(Q).unmerge(S).unmerge(S.descendants()), K = G.connectedEdges();
        $.inDragLayer && (K.forEach(s), G.forEach(s)), $.addToList && G.forEach(function(pe) {
          f(pe, $);
        });
      }
    }
  }, p = function() {
    document.activeElement != null && document.activeElement.blur != null && document.activeElement.blur();
  }, y = typeof MutationObserver < "u", b = typeof ResizeObserver < "u";
  y ? (r.removeObserver = new MutationObserver(function(_) {
    for (var S = 0; S < _.length; S++) {
      var $ = _[S], Q = $.removedNodes;
      if (Q)
        for (var G = 0; G < Q.length; G++) {
          var K = Q[G];
          if (K === r.container) {
            r.destroy();
            break;
          }
        }
    }
  }), r.container.parentNode && r.removeObserver.observe(r.container.parentNode, {
    childList: !0
  })) : r.registerBinding(r.container, "DOMNodeRemoved", function(_) {
    r.destroy();
  });
  var w = _a.default(function() {
    r.cy.resize();
  }, 100);
  y && (r.styleObserver = new MutationObserver(w), r.styleObserver.observe(r.container, {
    attributes: !0
  })), r.registerBinding(window, "resize", w), b && (r.resizeObserver = new ResizeObserver(w), r.resizeObserver.observe(r.container));
  var T = function(S, $) {
    for (; S != null; )
      $(S), S = S.parentNode;
  }, C = function() {
    r.invalidateContainerClientCoordsCache();
  };
  T(r.container, function(_) {
    r.registerBinding(_, "transitionend", C), r.registerBinding(_, "animationend", C), r.registerBinding(_, "scroll", C);
  }), r.registerBinding(r.container, "contextmenu", function(_) {
    _.preventDefault();
  });
  var x = function() {
    return r.selection[4] !== 0;
  }, D = function(S) {
    for (var $ = r.findContainerClientCoords(), Q = $[0], G = $[1], K = $[2], pe = $[3], J = S.touches ? S.touches : [S], se = !1, xe = 0; xe < J.length; xe++) {
      var Be = J[xe];
      if (Q <= Be.clientX && Be.clientX <= Q + K && G <= Be.clientY && Be.clientY <= G + pe) {
        se = !0;
        break;
      }
    }
    if (!se)
      return !1;
    for (var ye = r.container, De = S.target, me = De.parentNode, be = !1; me; ) {
      if (me === ye) {
        be = !0;
        break;
      }
      me = me.parentNode;
    }
    return !!be;
  };
  r.registerBinding(r.container, "mousedown", function(S) {
    if (D(S)) {
      S.preventDefault(), p(), r.hoverData.capture = !0, r.hoverData.which = S.which;
      var $ = r.cy, Q = [S.clientX, S.clientY], G = r.projectIntoViewport(Q[0], Q[1]), K = r.selection, pe = r.findNearestElements(G[0], G[1], !0, !1), J = pe[0], se = r.dragData.possibleDragElements;
      r.hoverData.mdownPos = G, r.hoverData.mdownGPos = Q;
      var xe = function() {
        r.hoverData.tapholdCancelled = !1, clearTimeout(r.hoverData.tapholdTimeout), r.hoverData.tapholdTimeout = setTimeout(function() {
          if (!r.hoverData.tapholdCancelled) {
            var Ne = r.hoverData.down;
            Ne ? Ne.emit({
              originalEvent: S,
              type: "taphold",
              position: {
                x: G[0],
                y: G[1]
              }
            }) : $.emit({
              originalEvent: S,
              type: "taphold",
              position: {
                x: G[0],
                y: G[1]
              }
            });
          }
        }, r.tapholdDuration);
      };
      if (S.which == 3) {
        r.hoverData.cxtStarted = !0;
        var Be = {
          originalEvent: S,
          type: "cxttapstart",
          position: {
            x: G[0],
            y: G[1]
          }
        };
        J ? (J.activate(), J.emit(Be), r.hoverData.down = J) : $.emit(Be), r.hoverData.downTime = new Date().getTime(), r.hoverData.cxtDragged = !1;
      } else if (S.which == 1) {
        J && J.activate();
        {
          if (J != null && r.nodeIsGrabbable(J)) {
            var ye = function(Ne) {
              return {
                originalEvent: S,
                type: Ne,
                position: {
                  x: G[0],
                  y: G[1]
                }
              };
            }, De = function(Ne) {
              Ne.emit(ye("grab"));
            };
            if (u(J), !J.selected())
              se = r.dragData.possibleDragElements = $.collection(), h(J, {
                addToList: se
              }), J.emit(ye("grabon")).emit(ye("grab"));
            else {
              se = r.dragData.possibleDragElements = $.collection();
              var me = $.$(function(be) {
                return be.isNode() && be.selected() && r.nodeIsGrabbable(be);
              });
              d(me, {
                addToList: se
              }), J.emit(ye("grabon")), me.forEach(De);
            }
            r.redrawHint("eles", !0), r.redrawHint("drag", !0);
          }
          r.hoverData.down = J, r.hoverData.downs = pe, r.hoverData.downTime = new Date().getTime();
        }
        t(J, ["mousedown", "tapstart", "vmousedown"], S, {
          x: G[0],
          y: G[1]
        }), J == null ? (K[4] = 1, r.data.bgActivePosistion = {
          x: G[0],
          y: G[1]
        }, r.redrawHint("select", !0), r.redraw()) : J.pannable() && (K[4] = 1), xe();
      }
      K[0] = K[2] = G[0], K[1] = K[3] = G[1];
    }
  }, !1), r.registerBinding(window, "mousemove", function(S) {
    var $ = r.hoverData.capture;
    if (!(!$ && !D(S))) {
      var Q = !1, G = r.cy, K = G.zoom(), pe = [S.clientX, S.clientY], J = r.projectIntoViewport(pe[0], pe[1]), se = r.hoverData.mdownPos, xe = r.hoverData.mdownGPos, Be = r.selection, ye = null;
      !r.hoverData.draggingEles && !r.hoverData.dragging && !r.hoverData.selecting && (ye = r.findNearestElement(J[0], J[1], !0, !1));
      var De = r.hoverData.last, me = r.hoverData.down, be = [J[0] - Be[2], J[1] - Be[3]], Ne = r.dragData.possibleDragElements, Ke;
      if (xe) {
        var hr = pe[0] - xe[0], gr = hr * hr, We = pe[1] - xe[1], fr = We * We, tr = gr + fr;
        r.hoverData.isOverThresholdDrag = Ke = tr >= r.desktopTapThreshold2;
      }
      var kr = a(S);
      Ke && (r.hoverData.tapholdCancelled = !0);
      var Or = function() {
        var xr = r.hoverData.dragDelta = r.hoverData.dragDelta || [];
        xr.length === 0 ? (xr.push(be[0]), xr.push(be[1])) : (xr[0] += be[0], xr[1] += be[1]);
      };
      Q = !0, t(ye, ["mousemove", "vmousemove", "tapdrag"], S, {
        x: J[0],
        y: J[1]
      });
      var st = function() {
        r.data.bgActivePosistion = void 0, r.hoverData.selecting || G.emit({
          originalEvent: S,
          type: "boxstart",
          position: {
            x: J[0],
            y: J[1]
          }
        }), Be[4] = 1, r.hoverData.selecting = !0, r.redrawHint("select", !0), r.redraw();
      };
      if (r.hoverData.which === 3) {
        if (Ke) {
          var Ur = {
            originalEvent: S,
            type: "cxtdrag",
            position: {
              x: J[0],
              y: J[1]
            }
          };
          me ? me.emit(Ur) : G.emit(Ur), r.hoverData.cxtDragged = !0, (!r.hoverData.cxtOver || ye !== r.hoverData.cxtOver) && (r.hoverData.cxtOver && r.hoverData.cxtOver.emit({
            originalEvent: S,
            type: "cxtdragout",
            position: {
              x: J[0],
              y: J[1]
            }
          }), r.hoverData.cxtOver = ye, ye && ye.emit({
            originalEvent: S,
            type: "cxtdragover",
            position: {
              x: J[0],
              y: J[1]
            }
          }));
        }
      } else if (r.hoverData.dragging) {
        if (Q = !0, G.panningEnabled() && G.userPanningEnabled()) {
          var ut;
          if (r.hoverData.justStartedPan) {
            var pa = r.hoverData.mdownPos;
            ut = {
              x: (J[0] - pa[0]) * K,
              y: (J[1] - pa[1]) * K
            }, r.hoverData.justStartedPan = !1;
          } else
            ut = {
              x: be[0] * K,
              y: be[1] * K
            };
          G.panBy(ut), G.emit("dragpan"), r.hoverData.dragged = !0;
        }
        J = r.projectIntoViewport(S.clientX, S.clientY);
      } else if (Be[4] == 1 && (me == null || me.pannable())) {
        if (Ke) {
          if (!r.hoverData.dragging && G.boxSelectionEnabled() && (kr || !G.panningEnabled() || !G.userPanningEnabled()))
            st();
          else if (!r.hoverData.selecting && G.panningEnabled() && G.userPanningEnabled()) {
            var Zr = n(me, r.hoverData.downs);
            Zr && (r.hoverData.dragging = !0, r.hoverData.justStartedPan = !0, Be[4] = 0, r.data.bgActivePosistion = gt(se), r.redrawHint("select", !0), r.redraw());
          }
          me && me.pannable() && me.active() && me.unactivate();
        }
      } else {
        if (me && me.pannable() && me.active() && me.unactivate(), (!me || !me.grabbed()) && ye != De && (De && t(De, ["mouseout", "tapdragout"], S, {
          x: J[0],
          y: J[1]
        }), ye && t(ye, ["mouseover", "tapdragover"], S, {
          x: J[0],
          y: J[1]
        }), r.hoverData.last = ye), me)
          if (Ke) {
            if (G.boxSelectionEnabled() && kr)
              me && me.grabbed() && (g(Ne), me.emit("freeon"), Ne.emit("free"), r.dragData.didDrag && (me.emit("dragfreeon"), Ne.emit("dragfree"))), st();
            else if (me && me.grabbed() && r.nodeIsDraggable(me)) {
              var ir = !r.dragData.didDrag;
              ir && r.redrawHint("eles", !0), r.dragData.didDrag = !0, r.hoverData.draggingEles || d(Ne, {
                inDragLayer: !0
              });
              var _e = {
                x: 0,
                y: 0
              };
              if (ae(be[0]) && ae(be[1]) && (_e.x += be[0], _e.y += be[1], ir)) {
                var or = r.hoverData.dragDelta;
                or && ae(or[0]) && ae(or[1]) && (_e.x += or[0], _e.y += or[1]);
              }
              r.hoverData.draggingEles = !0, Ne.silentShift(_e).emit("position drag"), r.redrawHint("drag", !0), r.redraw();
            }
          } else
            Or();
        Q = !0;
      }
      if (Be[2] = J[0], Be[3] = J[1], Q)
        return S.stopPropagation && S.stopPropagation(), S.preventDefault && S.preventDefault(), !1;
    }
  }, !1);
  var E, P, B;
  r.registerBinding(window, "mouseup", function(S) {
    var $ = r.hoverData.capture;
    if ($) {
      r.hoverData.capture = !1;
      var Q = r.cy, G = r.projectIntoViewport(S.clientX, S.clientY), K = r.selection, pe = r.findNearestElement(G[0], G[1], !0, !1), J = r.dragData.possibleDragElements, se = r.hoverData.down, xe = a(S);
      if (r.data.bgActivePosistion && (r.redrawHint("select", !0), r.redraw()), r.hoverData.tapholdCancelled = !0, r.data.bgActivePosistion = void 0, se && se.unactivate(), r.hoverData.which === 3) {
        var Be = {
          originalEvent: S,
          type: "cxttapend",
          position: {
            x: G[0],
            y: G[1]
          }
        };
        if (se ? se.emit(Be) : Q.emit(Be), !r.hoverData.cxtDragged) {
          var ye = {
            originalEvent: S,
            type: "cxttap",
            position: {
              x: G[0],
              y: G[1]
            }
          };
          se ? se.emit(ye) : Q.emit(ye);
        }
        r.hoverData.cxtDragged = !1, r.hoverData.which = null;
      } else if (r.hoverData.which === 1) {
        if (t(pe, ["mouseup", "tapend", "vmouseup"], S, {
          x: G[0],
          y: G[1]
        }), !r.dragData.didDrag && // didn't move a node around
        !r.hoverData.dragged && // didn't pan
        !r.hoverData.selecting && // not box selection
        !r.hoverData.isOverThresholdDrag && (t(se, ["click", "tap", "vclick"], S, {
          x: G[0],
          y: G[1]
        }), P = !1, S.timeStamp - B <= Q.multiClickDebounceTime() ? (E && clearTimeout(E), P = !0, B = null, t(se, ["dblclick", "dbltap", "vdblclick"], S, {
          x: G[0],
          y: G[1]
        })) : (E = setTimeout(function() {
          P || t(se, ["oneclick", "onetap", "voneclick"], S, {
            x: G[0],
            y: G[1]
          });
        }, Q.multiClickDebounceTime()), B = S.timeStamp)), se == null && !r.dragData.didDrag && !r.hoverData.selecting && !r.hoverData.dragged && !a(S) && (Q.$(e).unselect(["tapunselect"]), J.length > 0 && r.redrawHint("eles", !0), r.dragData.possibleDragElements = J = Q.collection()), pe == se && !r.dragData.didDrag && !r.hoverData.selecting && pe != null && pe._private.selectable && (r.hoverData.dragging || (Q.selectionType() === "additive" || xe ? pe.selected() ? pe.unselect(["tapunselect"]) : pe.select(["tapselect"]) : xe || (Q.$(e).unmerge(pe).unselect(["tapunselect"]), pe.select(["tapselect"]))), r.redrawHint("eles", !0)), r.hoverData.selecting) {
          var De = Q.collection(r.getAllInBox(K[0], K[1], K[2], K[3]));
          r.redrawHint("select", !0), De.length > 0 && r.redrawHint("eles", !0), Q.emit({
            type: "boxend",
            originalEvent: S,
            position: {
              x: G[0],
              y: G[1]
            }
          });
          var me = function(Ke) {
            return Ke.selectable() && !Ke.selected();
          };
          Q.selectionType() === "additive" || xe || Q.$(e).unmerge(De).unselect(), De.emit("box").stdFilter(me).select().emit("boxselect"), r.redraw();
        }
        if (r.hoverData.dragging && (r.hoverData.dragging = !1, r.redrawHint("select", !0), r.redrawHint("eles", !0), r.redraw()), !K[4]) {
          r.redrawHint("drag", !0), r.redrawHint("eles", !0);
          var be = se && se.grabbed();
          g(J), be && (se.emit("freeon"), J.emit("free"), r.dragData.didDrag && (se.emit("dragfreeon"), J.emit("dragfree")));
        }
      }
      K[4] = 0, r.hoverData.down = null, r.hoverData.cxtStarted = !1, r.hoverData.draggingEles = !1, r.hoverData.selecting = !1, r.hoverData.isOverThresholdDrag = !1, r.dragData.didDrag = !1, r.hoverData.dragged = !1, r.hoverData.dragDelta = [], r.hoverData.mdownPos = null, r.hoverData.mdownGPos = null;
    }
  }, !1);
  var k = function(S) {
    if (!r.scrollingPage) {
      var $ = r.cy, Q = $.zoom(), G = $.pan(), K = r.projectIntoViewport(S.clientX, S.clientY), pe = [K[0] * Q + G.x, K[1] * Q + G.y];
      if (r.hoverData.draggingEles || r.hoverData.dragging || r.hoverData.cxtStarted || x()) {
        S.preventDefault();
        return;
      }
      if ($.panningEnabled() && $.userPanningEnabled() && $.zoomingEnabled() && $.userZoomingEnabled()) {
        S.preventDefault(), r.data.wheelZooming = !0, clearTimeout(r.data.wheelTimeout), r.data.wheelTimeout = setTimeout(function() {
          r.data.wheelZooming = !1, r.redrawHint("eles", !0), r.redraw();
        }, 150);
        var J;
        S.deltaY != null ? J = S.deltaY / -250 : S.wheelDeltaY != null ? J = S.wheelDeltaY / 1e3 : J = S.wheelDelta / 1e3, J = J * r.wheelSensitivity;
        var se = S.deltaMode === 1;
        se && (J *= 33);
        var xe = $.zoom() * Math.pow(10, J);
        S.type === "gesturechange" && (xe = r.gestureStartZoom * S.scale), $.zoom({
          level: xe,
          renderedPosition: {
            x: pe[0],
            y: pe[1]
          }
        }), $.emit(S.type === "gesturechange" ? "pinchzoom" : "scrollzoom");
      }
    }
  };
  r.registerBinding(r.container, "wheel", k, !0), r.registerBinding(window, "scroll", function(S) {
    r.scrollingPage = !0, clearTimeout(r.scrollingPageTimeout), r.scrollingPageTimeout = setTimeout(function() {
      r.scrollingPage = !1;
    }, 250);
  }, !0), r.registerBinding(r.container, "gesturestart", function(S) {
    r.gestureStartZoom = r.cy.zoom(), r.hasTouchStarted || S.preventDefault();
  }, !0), r.registerBinding(r.container, "gesturechange", function(_) {
    r.hasTouchStarted || k(_);
  }, !0), r.registerBinding(r.container, "mouseout", function(S) {
    var $ = r.projectIntoViewport(S.clientX, S.clientY);
    r.cy.emit({
      originalEvent: S,
      type: "mouseout",
      position: {
        x: $[0],
        y: $[1]
      }
    });
  }, !1), r.registerBinding(r.container, "mouseover", function(S) {
    var $ = r.projectIntoViewport(S.clientX, S.clientY);
    r.cy.emit({
      originalEvent: S,
      type: "mouseover",
      position: {
        x: $[0],
        y: $[1]
      }
    });
  }, !1);
  var M, L, O, A, R, z, F, q, N, V, Y, U, W, H = function(S, $, Q, G) {
    return Math.sqrt((Q - S) * (Q - S) + (G - $) * (G - $));
  }, I = function(S, $, Q, G) {
    return (Q - S) * (Q - S) + (G - $) * (G - $);
  }, X;
  r.registerBinding(r.container, "touchstart", X = function(S) {
    if (r.hasTouchStarted = !0, !!D(S)) {
      p(), r.touchData.capture = !0, r.data.bgActivePosistion = void 0;
      var $ = r.cy, Q = r.touchData.now, G = r.touchData.earlier;
      if (S.touches[0]) {
        var K = r.projectIntoViewport(S.touches[0].clientX, S.touches[0].clientY);
        Q[0] = K[0], Q[1] = K[1];
      }
      if (S.touches[1]) {
        var K = r.projectIntoViewport(S.touches[1].clientX, S.touches[1].clientY);
        Q[2] = K[0], Q[3] = K[1];
      }
      if (S.touches[2]) {
        var K = r.projectIntoViewport(S.touches[2].clientX, S.touches[2].clientY);
        Q[4] = K[0], Q[5] = K[1];
      }
      if (S.touches[1]) {
        r.touchData.singleTouchMoved = !0, g(r.dragData.touchDragEles);
        var pe = r.findContainerClientCoords();
        N = pe[0], V = pe[1], Y = pe[2], U = pe[3], M = S.touches[0].clientX - N, L = S.touches[0].clientY - V, O = S.touches[1].clientX - N, A = S.touches[1].clientY - V, W = 0 <= M && M <= Y && 0 <= O && O <= Y && 0 <= L && L <= U && 0 <= A && A <= U;
        var J = $.pan(), se = $.zoom();
        R = H(M, L, O, A), z = I(M, L, O, A), F = [(M + O) / 2, (L + A) / 2], q = [(F[0] - J.x) / se, (F[1] - J.y) / se];
        var xe = 200, Be = xe * xe;
        if (z < Be && !S.touches[2]) {
          var ye = r.findNearestElement(Q[0], Q[1], !0, !0), De = r.findNearestElement(Q[2], Q[3], !0, !0);
          ye && ye.isNode() ? (ye.activate().emit({
            originalEvent: S,
            type: "cxttapstart",
            position: {
              x: Q[0],
              y: Q[1]
            }
          }), r.touchData.start = ye) : De && De.isNode() ? (De.activate().emit({
            originalEvent: S,
            type: "cxttapstart",
            position: {
              x: Q[0],
              y: Q[1]
            }
          }), r.touchData.start = De) : $.emit({
            originalEvent: S,
            type: "cxttapstart",
            position: {
              x: Q[0],
              y: Q[1]
            }
          }), r.touchData.start && (r.touchData.start._private.grabbed = !1), r.touchData.cxt = !0, r.touchData.cxtDragged = !1, r.data.bgActivePosistion = void 0, r.redraw();
          return;
        }
      }
      if (S.touches[2])
        $.boxSelectionEnabled() && S.preventDefault();
      else if (!S.touches[1]) {
        if (S.touches[0]) {
          var me = r.findNearestElements(Q[0], Q[1], !0, !0), be = me[0];
          if (be != null && (be.activate(), r.touchData.start = be, r.touchData.starts = me, r.nodeIsGrabbable(be))) {
            var Ne = r.dragData.touchDragEles = $.collection(), Ke = null;
            r.redrawHint("eles", !0), r.redrawHint("drag", !0), be.selected() ? (Ke = $.$(function(tr) {
              return tr.selected() && r.nodeIsGrabbable(tr);
            }), d(Ke, {
              addToList: Ne
            })) : h(be, {
              addToList: Ne
            }), u(be);
            var hr = function(kr) {
              return {
                originalEvent: S,
                type: kr,
                position: {
                  x: Q[0],
                  y: Q[1]
                }
              };
            };
            be.emit(hr("grabon")), Ke ? Ke.forEach(function(tr) {
              tr.emit(hr("grab"));
            }) : be.emit(hr("grab"));
          }
          t(be, ["touchstart", "tapstart", "vmousedown"], S, {
            x: Q[0],
            y: Q[1]
          }), be == null && (r.data.bgActivePosistion = {
            x: K[0],
            y: K[1]
          }, r.redrawHint("select", !0), r.redraw()), r.touchData.singleTouchMoved = !1, r.touchData.singleTouchStartTime = +new Date(), clearTimeout(r.touchData.tapholdTimeout), r.touchData.tapholdTimeout = setTimeout(function() {
            r.touchData.singleTouchMoved === !1 && !r.pinching && !r.touchData.selecting && t(r.touchData.start, ["taphold"], S, {
              x: Q[0],
              y: Q[1]
            });
          }, r.tapholdDuration);
        }
      }
      if (S.touches.length >= 1) {
        for (var gr = r.touchData.startPosition = [], We = 0; We < Q.length; We++)
          gr[We] = G[We] = Q[We];
        var fr = S.touches[0];
        r.touchData.startGPosition = [fr.clientX, fr.clientY];
      }
    }
  }, !1);
  var Z;
  r.registerBinding(window, "touchmove", Z = function(S) {
    var $ = r.touchData.capture;
    if (!(!$ && !D(S))) {
      var Q = r.selection, G = r.cy, K = r.touchData.now, pe = r.touchData.earlier, J = G.zoom();
      if (S.touches[0]) {
        var se = r.projectIntoViewport(S.touches[0].clientX, S.touches[0].clientY);
        K[0] = se[0], K[1] = se[1];
      }
      if (S.touches[1]) {
        var se = r.projectIntoViewport(S.touches[1].clientX, S.touches[1].clientY);
        K[2] = se[0], K[3] = se[1];
      }
      if (S.touches[2]) {
        var se = r.projectIntoViewport(S.touches[2].clientX, S.touches[2].clientY);
        K[4] = se[0], K[5] = se[1];
      }
      var xe = r.touchData.startGPosition, Be;
      if ($ && S.touches[0] && xe) {
        for (var ye = [], De = 0; De < K.length; De++)
          ye[De] = K[De] - pe[De];
        var me = S.touches[0].clientX - xe[0], be = me * me, Ne = S.touches[0].clientY - xe[1], Ke = Ne * Ne, hr = be + Ke;
        Be = hr >= r.touchTapThreshold2;
      }
      if ($ && r.touchData.cxt) {
        S.preventDefault();
        var gr = S.touches[0].clientX - N, We = S.touches[0].clientY - V, fr = S.touches[1].clientX - N, tr = S.touches[1].clientY - V, kr = I(gr, We, fr, tr), Or = kr / z, st = 150, Ur = st * st, ut = 1.5, pa = ut * ut;
        if (Or >= pa || kr >= Ur) {
          r.touchData.cxt = !1, r.data.bgActivePosistion = void 0, r.redrawHint("select", !0);
          var Zr = {
            originalEvent: S,
            type: "cxttapend",
            position: {
              x: K[0],
              y: K[1]
            }
          };
          r.touchData.start ? (r.touchData.start.unactivate().emit(Zr), r.touchData.start = null) : G.emit(Zr);
        }
      }
      if ($ && r.touchData.cxt) {
        var Zr = {
          originalEvent: S,
          type: "cxtdrag",
          position: {
            x: K[0],
            y: K[1]
          }
        };
        r.data.bgActivePosistion = void 0, r.redrawHint("select", !0), r.touchData.start ? r.touchData.start.emit(Zr) : G.emit(Zr), r.touchData.start && (r.touchData.start._private.grabbed = !1), r.touchData.cxtDragged = !0;
        var ir = r.findNearestElement(K[0], K[1], !0, !0);
        (!r.touchData.cxtOver || ir !== r.touchData.cxtOver) && (r.touchData.cxtOver && r.touchData.cxtOver.emit({
          originalEvent: S,
          type: "cxtdragout",
          position: {
            x: K[0],
            y: K[1]
          }
        }), r.touchData.cxtOver = ir, ir && ir.emit({
          originalEvent: S,
          type: "cxtdragover",
          position: {
            x: K[0],
            y: K[1]
          }
        }));
      } else if ($ && S.touches[2] && G.boxSelectionEnabled())
        S.preventDefault(), r.data.bgActivePosistion = void 0, this.lastThreeTouch = +new Date(), r.touchData.selecting || G.emit({
          originalEvent: S,
          type: "boxstart",
          position: {
            x: K[0],
            y: K[1]
          }
        }), r.touchData.selecting = !0, r.touchData.didSelect = !0, Q[4] = 1, !Q || Q.length === 0 || Q[0] === void 0 ? (Q[0] = (K[0] + K[2] + K[4]) / 3, Q[1] = (K[1] + K[3] + K[5]) / 3, Q[2] = (K[0] + K[2] + K[4]) / 3 + 1, Q[3] = (K[1] + K[3] + K[5]) / 3 + 1) : (Q[2] = (K[0] + K[2] + K[4]) / 3, Q[3] = (K[1] + K[3] + K[5]) / 3), r.redrawHint("select", !0), r.redraw();
      else if ($ && S.touches[1] && !r.touchData.didSelect && G.zoomingEnabled() && G.panningEnabled() && G.userZoomingEnabled() && G.userPanningEnabled()) {
        S.preventDefault(), r.data.bgActivePosistion = void 0, r.redrawHint("select", !0);
        var _e = r.dragData.touchDragEles;
        if (_e) {
          r.redrawHint("drag", !0);
          for (var or = 0; or < _e.length; or++) {
            var ma = _e[or]._private;
            ma.grabbed = !1, ma.rscratch.inDragLayer = !1;
          }
        }
        var xr = r.touchData.start, gr = S.touches[0].clientX - N, We = S.touches[0].clientY - V, fr = S.touches[1].clientX - N, tr = S.touches[1].clientY - V, fi = H(gr, We, fr, tr), hu = fi / R;
        if (W) {
          var gu = gr - M, pu = We - L, mu = fr - O, yu = tr - A, bu = (gu + mu) / 2, wu = (pu + yu) / 2, Ot = G.zoom(), cn = Ot * hu, ya = G.pan(), ci = q[0] * Ot + ya.x, di = q[1] * Ot + ya.y, xu = {
            x: -cn / Ot * (ci - ya.x - bu) + ci,
            y: -cn / Ot * (di - ya.y - wu) + di
          };
          if (xr && xr.active()) {
            var _e = r.dragData.touchDragEles;
            g(_e), r.redrawHint("drag", !0), r.redrawHint("eles", !0), xr.unactivate().emit("freeon"), _e.emit("free"), r.dragData.didDrag && (xr.emit("dragfreeon"), _e.emit("dragfree"));
          }
          G.viewport({
            zoom: cn,
            pan: xu,
            cancelOnFailedZoom: !0
          }), G.emit("pinchzoom"), R = fi, M = gr, L = We, O = fr, A = tr, r.pinching = !0;
        }
        if (S.touches[0]) {
          var se = r.projectIntoViewport(S.touches[0].clientX, S.touches[0].clientY);
          K[0] = se[0], K[1] = se[1];
        }
        if (S.touches[1]) {
          var se = r.projectIntoViewport(S.touches[1].clientX, S.touches[1].clientY);
          K[2] = se[0], K[3] = se[1];
        }
        if (S.touches[2]) {
          var se = r.projectIntoViewport(S.touches[2].clientX, S.touches[2].clientY);
          K[4] = se[0], K[5] = se[1];
        }
      } else if (S.touches[0] && !r.touchData.didSelect) {
        var pr = r.touchData.start, dn = r.touchData.last, ir;
        if (!r.hoverData.draggingEles && !r.swipePanning && (ir = r.findNearestElement(K[0], K[1], !0, !0)), $ && pr != null && S.preventDefault(), $ && pr != null && r.nodeIsDraggable(pr))
          if (Be) {
            var _e = r.dragData.touchDragEles, hi = !r.dragData.didDrag;
            hi && d(_e, {
              inDragLayer: !0
            }), r.dragData.didDrag = !0;
            var It = {
              x: 0,
              y: 0
            };
            if (ae(ye[0]) && ae(ye[1]) && (It.x += ye[0], It.y += ye[1], hi)) {
              r.redrawHint("eles", !0);
              var mr = r.touchData.dragDelta;
              mr && ae(mr[0]) && ae(mr[1]) && (It.x += mr[0], It.y += mr[1]);
            }
            r.hoverData.draggingEles = !0, _e.silentShift(It).emit("position drag"), r.redrawHint("drag", !0), r.touchData.startPosition[0] == pe[0] && r.touchData.startPosition[1] == pe[1] && r.redrawHint("eles", !0), r.redraw();
          } else {
            var mr = r.touchData.dragDelta = r.touchData.dragDelta || [];
            mr.length === 0 ? (mr.push(ye[0]), mr.push(ye[1])) : (mr[0] += ye[0], mr[1] += ye[1]);
          }
        if (t(pr || ir, ["touchmove", "tapdrag", "vmousemove"], S, {
          x: K[0],
          y: K[1]
        }), (!pr || !pr.grabbed()) && ir != dn && (dn && dn.emit({
          originalEvent: S,
          type: "tapdragout",
          position: {
            x: K[0],
            y: K[1]
          }
        }), ir && ir.emit({
          originalEvent: S,
          type: "tapdragover",
          position: {
            x: K[0],
            y: K[1]
          }
        })), r.touchData.last = ir, $)
          for (var or = 0; or < K.length; or++)
            K[or] && r.touchData.startPosition[or] && Be && (r.touchData.singleTouchMoved = !0);
        if ($ && (pr == null || pr.pannable()) && G.panningEnabled() && G.userPanningEnabled()) {
          var Eu = n(pr, r.touchData.starts);
          Eu && (S.preventDefault(), r.data.bgActivePosistion || (r.data.bgActivePosistion = gt(r.touchData.startPosition)), r.swipePanning ? (G.panBy({
            x: ye[0] * J,
            y: ye[1] * J
          }), G.emit("dragpan")) : Be && (r.swipePanning = !0, G.panBy({
            x: me * J,
            y: Ne * J
          }), G.emit("dragpan"), pr && (pr.unactivate(), r.redrawHint("select", !0), r.touchData.start = null)));
          var se = r.projectIntoViewport(S.touches[0].clientX, S.touches[0].clientY);
          K[0] = se[0], K[1] = se[1];
        }
      }
      for (var De = 0; De < K.length; De++)
        pe[De] = K[De];
      $ && S.touches.length > 0 && !r.hoverData.draggingEles && !r.swipePanning && r.data.bgActivePosistion != null && (r.data.bgActivePosistion = void 0, r.redrawHint("select", !0), r.redraw());
    }
  }, !1);
  var j;
  r.registerBinding(window, "touchcancel", j = function(S) {
    var $ = r.touchData.start;
    r.touchData.capture = !1, $ && $.unactivate();
  });
  var re, de, he, te;
  if (r.registerBinding(window, "touchend", re = function(S) {
    var $ = r.touchData.start, Q = r.touchData.capture;
    if (Q)
      S.touches.length === 0 && (r.touchData.capture = !1), S.preventDefault();
    else
      return;
    var G = r.selection;
    r.swipePanning = !1, r.hoverData.draggingEles = !1;
    var K = r.cy, pe = K.zoom(), J = r.touchData.now, se = r.touchData.earlier;
    if (S.touches[0]) {
      var xe = r.projectIntoViewport(S.touches[0].clientX, S.touches[0].clientY);
      J[0] = xe[0], J[1] = xe[1];
    }
    if (S.touches[1]) {
      var xe = r.projectIntoViewport(S.touches[1].clientX, S.touches[1].clientY);
      J[2] = xe[0], J[3] = xe[1];
    }
    if (S.touches[2]) {
      var xe = r.projectIntoViewport(S.touches[2].clientX, S.touches[2].clientY);
      J[4] = xe[0], J[5] = xe[1];
    }
    $ && $.unactivate();
    var Be;
    if (r.touchData.cxt) {
      if (Be = {
        originalEvent: S,
        type: "cxttapend",
        position: {
          x: J[0],
          y: J[1]
        }
      }, $ ? $.emit(Be) : K.emit(Be), !r.touchData.cxtDragged) {
        var ye = {
          originalEvent: S,
          type: "cxttap",
          position: {
            x: J[0],
            y: J[1]
          }
        };
        $ ? $.emit(ye) : K.emit(ye);
      }
      r.touchData.start && (r.touchData.start._private.grabbed = !1), r.touchData.cxt = !1, r.touchData.start = null, r.redraw();
      return;
    }
    if (!S.touches[2] && K.boxSelectionEnabled() && r.touchData.selecting) {
      r.touchData.selecting = !1;
      var De = K.collection(r.getAllInBox(G[0], G[1], G[2], G[3]));
      G[0] = void 0, G[1] = void 0, G[2] = void 0, G[3] = void 0, G[4] = 0, r.redrawHint("select", !0), K.emit({
        type: "boxend",
        originalEvent: S,
        position: {
          x: J[0],
          y: J[1]
        }
      });
      var me = function(Ur) {
        return Ur.selectable() && !Ur.selected();
      };
      De.emit("box").stdFilter(me).select().emit("boxselect"), De.nonempty() && r.redrawHint("eles", !0), r.redraw();
    }
    if ($ != null && $.unactivate(), S.touches[2])
      r.data.bgActivePosistion = void 0, r.redrawHint("select", !0);
    else if (!S.touches[1]) {
      if (!S.touches[0]) {
        if (!S.touches[0]) {
          r.data.bgActivePosistion = void 0, r.redrawHint("select", !0);
          var be = r.dragData.touchDragEles;
          if ($ != null) {
            var Ne = $._private.grabbed;
            g(be), r.redrawHint("drag", !0), r.redrawHint("eles", !0), Ne && ($.emit("freeon"), be.emit("free"), r.dragData.didDrag && ($.emit("dragfreeon"), be.emit("dragfree"))), t($, ["touchend", "tapend", "vmouseup", "tapdragout"], S, {
              x: J[0],
              y: J[1]
            }), $.unactivate(), r.touchData.start = null;
          } else {
            var Ke = r.findNearestElement(J[0], J[1], !0, !0);
            t(Ke, ["touchend", "tapend", "vmouseup", "tapdragout"], S, {
              x: J[0],
              y: J[1]
            });
          }
          var hr = r.touchData.startPosition[0] - J[0], gr = hr * hr, We = r.touchData.startPosition[1] - J[1], fr = We * We, tr = gr + fr, kr = tr * pe * pe;
          r.touchData.singleTouchMoved || ($ || K.$(":selected").unselect(["tapunselect"]), t($, ["tap", "vclick"], S, {
            x: J[0],
            y: J[1]
          }), de = !1, S.timeStamp - te <= K.multiClickDebounceTime() ? (he && clearTimeout(he), de = !0, te = null, t($, ["dbltap", "vdblclick"], S, {
            x: J[0],
            y: J[1]
          })) : (he = setTimeout(function() {
            de || t($, ["onetap", "voneclick"], S, {
              x: J[0],
              y: J[1]
            });
          }, K.multiClickDebounceTime()), te = S.timeStamp)), $ != null && !r.dragData.didDrag && $._private.selectable && kr < r.touchTapThreshold2 && !r.pinching && (K.selectionType() === "single" ? (K.$(e).unmerge($).unselect(["tapunselect"]), $.select(["tapselect"])) : $.selected() ? $.unselect(["tapunselect"]) : $.select(["tapselect"]), r.redrawHint("eles", !0)), r.touchData.singleTouchMoved = !0;
        }
      }
    }
    for (var Or = 0; Or < J.length; Or++)
      se[Or] = J[Or];
    r.dragData.didDrag = !1, S.touches.length === 0 && (r.touchData.dragDelta = [], r.touchData.startPosition = null, r.touchData.startGPosition = null, r.touchData.didSelect = !1), S.touches.length < 2 && (S.touches.length === 1 && (r.touchData.startGPosition = [S.touches[0].clientX, S.touches[0].clientY]), r.pinching = !1, r.redrawHint("eles", !0), r.redraw());
  }, !1), typeof TouchEvent > "u") {
    var ee = [], ve = function(S) {
      return {
        clientX: S.clientX,
        clientY: S.clientY,
        force: 1,
        identifier: S.pointerId,
        pageX: S.pageX,
        pageY: S.pageY,
        radiusX: S.width / 2,
        radiusY: S.height / 2,
        screenX: S.screenX,
        screenY: S.screenY,
        target: S.target
      };
    }, oe = function(S) {
      return {
        event: S,
        touch: ve(S)
      };
    }, ne = function(S) {
      ee.push(oe(S));
    }, ue = function(S) {
      for (var $ = 0; $ < ee.length; $++) {
        var Q = ee[$];
        if (Q.event.pointerId === S.pointerId) {
          ee.splice($, 1);
          return;
        }
      }
    }, we = function(S) {
      var $ = ee.filter(function(Q) {
        return Q.event.pointerId === S.pointerId;
      })[0];
      $.event = S, $.touch = ve(S);
    }, ge = function(S) {
      S.touches = ee.map(function($) {
        return $.touch;
      });
    }, fe = function(S) {
      return S.pointerType === "mouse" || S.pointerType === 4;
    };
    r.registerBinding(r.container, "pointerdown", function(_) {
      fe(_) || (_.preventDefault(), ne(_), ge(_), X(_));
    }), r.registerBinding(r.container, "pointerup", function(_) {
      fe(_) || (ue(_), ge(_), re(_));
    }), r.registerBinding(r.container, "pointercancel", function(_) {
      fe(_) || (ue(_), ge(_), j(_));
    }), r.registerBinding(r.container, "pointermove", function(_) {
      fe(_) || (_.preventDefault(), we(_), ge(_), Z(_));
    });
  }
};
var Ar = {};
Ar.generatePolygon = function(r, e) {
  return this.nodeShapes[r] = {
    renderer: this,
    name: r,
    points: e,
    draw: function(a, n, i, o, s) {
      this.renderer.nodeShapeImpl("polygon", a, n, i, o, s, this.points);
    },
    intersectLine: function(a, n, i, o, s, l, u) {
      return jt(s, l, this.points, a, n, i / 2, o / 2, u);
    },
    checkPoint: function(a, n, i, o, s, l, u) {
      return Lr(a, n, this.points, l, u, o, s, [0, -1], i);
    }
  };
};
Ar.generateEllipse = function() {
  return this.nodeShapes.ellipse = {
    renderer: this,
    name: "ellipse",
    draw: function(e, t, a, n, i) {
      this.renderer.nodeShapeImpl(this.name, e, t, a, n, i);
    },
    intersectLine: function(e, t, a, n, i, o, s) {
      return Dh(i, o, e, t, a / 2 + s, n / 2 + s);
    },
    checkPoint: function(e, t, a, n, i, o, s) {
      return Jr(e, t, n, i, o, s, a);
    }
  };
};
Ar.generateRoundPolygon = function(r, e) {
  for (var t = new Array(e.length * 2), a = 0; a < e.length / 2; a++) {
    var n = a * 2, i = void 0;
    a < e.length / 2 - 1 ? i = (a + 1) * 2 : i = 0, t[a * 4] = e[n], t[a * 4 + 1] = e[n + 1];
    var o = e[i] - e[n], s = e[i + 1] - e[n + 1], l = Math.sqrt(o * o + s * s);
    t[a * 4 + 2] = o / l, t[a * 4 + 3] = s / l;
  }
  return this.nodeShapes[r] = {
    renderer: this,
    name: r,
    points: t,
    draw: function(v, f, c, d, h) {
      this.renderer.nodeShapeImpl("round-polygon", v, f, c, d, h, this.points);
    },
    intersectLine: function(v, f, c, d, h, g, m) {
      return kh(h, g, this.points, v, f, c, d);
    },
    checkPoint: function(v, f, c, d, h, g, m) {
      return Th(v, f, this.points, g, m, d, h);
    }
  };
};
Ar.generateRoundRectangle = function() {
  return this.nodeShapes["round-rectangle"] = this.nodeShapes.roundrectangle = {
    renderer: this,
    name: "round-rectangle",
    points: ar(4, 0),
    draw: function(e, t, a, n, i) {
      this.renderer.nodeShapeImpl(this.name, e, t, a, n, i);
    },
    intersectLine: function(e, t, a, n, i, o, s) {
      return ss(i, o, e, t, a, n, s);
    },
    checkPoint: function(e, t, a, n, i, o, s) {
      var l = va(n, i), u = l * 2;
      return !!(Lr(e, t, this.points, o, s, n, i - u, [0, -1], a) || Lr(e, t, this.points, o, s, n - u, i, [0, -1], a) || Jr(e, t, u, u, o - n / 2 + l, s - i / 2 + l, a) || Jr(e, t, u, u, o + n / 2 - l, s - i / 2 + l, a) || Jr(e, t, u, u, o + n / 2 - l, s + i / 2 - l, a) || Jr(e, t, u, u, o - n / 2 + l, s + i / 2 - l, a));
    }
  };
};
Ar.generateCutRectangle = function() {
  return this.nodeShapes["cut-rectangle"] = this.nodeShapes.cutrectangle = {
    renderer: this,
    name: "cut-rectangle",
    cornerLength: fs(),
    points: ar(4, 0),
    draw: function(e, t, a, n, i) {
      this.renderer.nodeShapeImpl(this.name, e, t, a, n, i);
    },
    generateCutTrianglePts: function(e, t, a, n) {
      var i = this.cornerLength, o = t / 2, s = e / 2, l = a - s, u = a + s, v = n - o, f = n + o;
      return {
        topLeft: [l, v + i, l + i, v, l + i, v + i],
        topRight: [u - i, v, u, v + i, u - i, v + i],
        bottomRight: [u, f - i, u - i, f, u - i, f - i],
        bottomLeft: [l + i, f, l, f - i, l + i, f - i]
      };
    },
    intersectLine: function(e, t, a, n, i, o, s) {
      var l = this.generateCutTrianglePts(a + 2 * s, n + 2 * s, e, t), u = [].concat.apply([], [l.topLeft.splice(0, 4), l.topRight.splice(0, 4), l.bottomRight.splice(0, 4), l.bottomLeft.splice(0, 4)]);
      return jt(i, o, u, e, t);
    },
    checkPoint: function(e, t, a, n, i, o, s) {
      if (Lr(e, t, this.points, o, s, n, i - 2 * this.cornerLength, [0, -1], a) || Lr(e, t, this.points, o, s, n - 2 * this.cornerLength, i, [0, -1], a))
        return !0;
      var l = this.generateCutTrianglePts(n, i, o, s);
      return sr(e, t, l.topLeft) || sr(e, t, l.topRight) || sr(e, t, l.bottomRight) || sr(e, t, l.bottomLeft);
    }
  };
};
Ar.generateBarrel = function() {
  return this.nodeShapes.barrel = {
    renderer: this,
    name: "barrel",
    points: ar(4, 0),
    draw: function(e, t, a, n, i) {
      this.renderer.nodeShapeImpl(this.name, e, t, a, n, i);
    },
    intersectLine: function(e, t, a, n, i, o, s) {
      var l = 0.15, u = 0.5, v = 0.85, f = this.generateBarrelBezierPts(a + 2 * s, n + 2 * s, e, t), c = function(g) {
        var m = mt({
          x: g[0],
          y: g[1]
        }, {
          x: g[2],
          y: g[3]
        }, {
          x: g[4],
          y: g[5]
        }, l), p = mt({
          x: g[0],
          y: g[1]
        }, {
          x: g[2],
          y: g[3]
        }, {
          x: g[4],
          y: g[5]
        }, u), y = mt({
          x: g[0],
          y: g[1]
        }, {
          x: g[2],
          y: g[3]
        }, {
          x: g[4],
          y: g[5]
        }, v);
        return [g[0], g[1], m.x, m.y, p.x, p.y, y.x, y.y, g[4], g[5]];
      }, d = [].concat(c(f.topLeft), c(f.topRight), c(f.bottomRight), c(f.bottomLeft));
      return jt(i, o, d, e, t);
    },
    generateBarrelBezierPts: function(e, t, a, n) {
      var i = t / 2, o = e / 2, s = a - o, l = a + o, u = n - i, v = n + i, f = Ln(e, t), c = f.heightOffset, d = f.widthOffset, h = f.ctrlPtOffsetPct * e, g = {
        topLeft: [s, u + c, s + h, u, s + d, u],
        topRight: [l - d, u, l - h, u, l, u + c],
        bottomRight: [l, v - c, l - h, v, l - d, v],
        bottomLeft: [s + d, v, s + h, v, s, v - c]
      };
      return g.topLeft.isTop = !0, g.topRight.isTop = !0, g.bottomLeft.isBottom = !0, g.bottomRight.isBottom = !0, g;
    },
    checkPoint: function(e, t, a, n, i, o, s) {
      var l = Ln(n, i), u = l.heightOffset, v = l.widthOffset;
      if (Lr(e, t, this.points, o, s, n, i - 2 * u, [0, -1], a) || Lr(e, t, this.points, o, s, n - 2 * v, i, [0, -1], a))
        return !0;
      for (var f = this.generateBarrelBezierPts(n, i, o, s), c = function(x, D, E) {
        var P = E[4], B = E[2], k = E[0], M = E[5], L = E[1], O = Math.min(P, k), A = Math.max(P, k), R = Math.min(M, L), z = Math.max(M, L);
        if (O <= x && x <= A && R <= D && D <= z) {
          var F = Ph(P, B, k), q = xh(F[0], F[1], F[2], x), N = q.filter(function(V) {
            return 0 <= V && V <= 1;
          });
          if (N.length > 0)
            return N[0];
        }
        return null;
      }, d = Object.keys(f), h = 0; h < d.length; h++) {
        var g = d[h], m = f[g], p = c(e, t, m);
        if (p != null) {
          var y = m[5], b = m[3], w = m[1], T = Ge(y, b, w, p);
          if (m.isTop && T <= t || m.isBottom && t <= T)
            return !0;
        }
      }
      return !1;
    }
  };
};
Ar.generateBottomRoundrectangle = function() {
  return this.nodeShapes["bottom-round-rectangle"] = this.nodeShapes.bottomroundrectangle = {
    renderer: this,
    name: "bottom-round-rectangle",
    points: ar(4, 0),
    draw: function(e, t, a, n, i) {
      this.renderer.nodeShapeImpl(this.name, e, t, a, n, i);
    },
    intersectLine: function(e, t, a, n, i, o, s) {
      var l = e - (a / 2 + s), u = t - (n / 2 + s), v = u, f = e + (a / 2 + s), c = Fr(i, o, e, t, l, u, f, v, !1);
      return c.length > 0 ? c : ss(i, o, e, t, a, n, s);
    },
    checkPoint: function(e, t, a, n, i, o, s) {
      var l = va(n, i), u = 2 * l;
      if (Lr(e, t, this.points, o, s, n, i - u, [0, -1], a) || Lr(e, t, this.points, o, s, n - u, i, [0, -1], a))
        return !0;
      var v = n / 2 + 2 * a, f = i / 2 + 2 * a, c = [o - v, s - f, o - v, s, o + v, s, o + v, s - f];
      return !!(sr(e, t, c) || Jr(e, t, u, u, o + n / 2 - l, s + i / 2 - l, a) || Jr(e, t, u, u, o - n / 2 + l, s + i / 2 - l, a));
    }
  };
};
Ar.registerNodeShapes = function() {
  var r = this.nodeShapes = {}, e = this;
  this.generateEllipse(), this.generatePolygon("triangle", ar(3, 0)), this.generateRoundPolygon("round-triangle", ar(3, 0)), this.generatePolygon("rectangle", ar(4, 0)), r.square = r.rectangle, this.generateRoundRectangle(), this.generateCutRectangle(), this.generateBarrel(), this.generateBottomRoundrectangle();
  {
    var t = [0, 1, 1, 0, 0, -1, -1, 0];
    this.generatePolygon("diamond", t), this.generateRoundPolygon("round-diamond", t);
  }
  this.generatePolygon("pentagon", ar(5, 0)), this.generateRoundPolygon("round-pentagon", ar(5, 0)), this.generatePolygon("hexagon", ar(6, 0)), this.generateRoundPolygon("round-hexagon", ar(6, 0)), this.generatePolygon("heptagon", ar(7, 0)), this.generateRoundPolygon("round-heptagon", ar(7, 0)), this.generatePolygon("octagon", ar(8, 0)), this.generateRoundPolygon("round-octagon", ar(8, 0));
  var a = new Array(20);
  {
    var n = Bn(5, 0), i = Bn(5, Math.PI / 5), o = 0.5 * (3 - Math.sqrt(5));
    o *= 1.57;
    for (var s = 0; s < i.length / 2; s++)
      i[s * 2] *= o, i[s * 2 + 1] *= o;
    for (var s = 0; s < 20 / 4; s++)
      a[s * 4] = n[s * 2], a[s * 4 + 1] = n[s * 2 + 1], a[s * 4 + 2] = i[s * 2], a[s * 4 + 3] = i[s * 2 + 1];
  }
  a = vs(a), this.generatePolygon("star", a), this.generatePolygon("vee", [-1, -1, 0, -0.333, 1, -1, 0, 1]), this.generatePolygon("rhomboid", [-1, -1, 0.333, -1, 1, 1, -0.333, 1]), this.nodeShapes.concavehexagon = this.generatePolygon("concave-hexagon", [-1, -0.95, -0.75, 0, -1, 0.95, 1, 0.95, 0.75, 0, 1, -0.95]);
  {
    var l = [-1, -1, 0.25, -1, 1, 0, 0.25, 1, -1, 1];
    this.generatePolygon("tag", l), this.generateRoundPolygon("round-tag", l);
  }
  r.makePolygon = function(u) {
    var v = u.join("$"), f = "polygon-" + v, c;
    return (c = this[f]) ? c : e.generatePolygon(f, u);
  };
};
var ha = {};
ha.timeToRender = function() {
  return this.redrawTotalTime / this.redrawCount;
};
ha.redraw = function(r) {
  r = r || as();
  var e = this;
  e.averageRedrawTime === void 0 && (e.averageRedrawTime = 0), e.lastRedrawTime === void 0 && (e.lastRedrawTime = 0), e.lastDrawTime === void 0 && (e.lastDrawTime = 0), e.requestedFrame = !0, e.renderOptions = r;
};
ha.beforeRender = function(r, e) {
  if (!this.destroyed) {
    e == null && Fe("Priority is not optional for beforeRender");
    var t = this.beforeRenderCallbacks;
    t.push({
      fn: r,
      priority: e
    }), t.sort(function(a, n) {
      return n.priority - a.priority;
    });
  }
};
var Co = function(e, t, a) {
  for (var n = e.beforeRenderCallbacks, i = 0; i < n.length; i++)
    n[i].fn(t, a);
};
ha.startRenderLoop = function() {
  var r = this, e = r.cy;
  if (!r.renderLoopStarted) {
    r.renderLoopStarted = !0;
    var t = function a(n) {
      if (!r.destroyed) {
        if (!e.batching())
          if (r.requestedFrame && !r.skipFrame) {
            Co(r, !0, n);
            var i = Br();
            r.render(r.renderOptions);
            var o = r.lastDrawTime = Br();
            r.averageRedrawTime === void 0 && (r.averageRedrawTime = o - i), r.redrawCount === void 0 && (r.redrawCount = 0), r.redrawCount++, r.redrawTotalTime === void 0 && (r.redrawTotalTime = 0);
            var s = o - i;
            r.redrawTotalTime += s, r.lastRedrawTime = s, r.averageRedrawTime = r.averageRedrawTime / 2 + s / 2, r.requestedFrame = !1;
          } else
            Co(r, !1, n);
        r.skipFrame = !1, Fa(a);
      }
    };
    Fa(t);
  }
};
var Jp = function(e) {
  this.init(e);
}, js = Jp, At = js.prototype;
At.clientFunctions = ["redrawHint", "render", "renderTo", "matchCanvasSize", "nodeShapeImpl", "arrowShapeImpl"];
At.init = function(r) {
  var e = this;
  e.options = r, e.cy = r.cy;
  var t = e.container = r.cy.container();
  if (Ie) {
    var a = Ie.document, n = a.head, i = "__________cytoscape_stylesheet", o = "__________cytoscape_container", s = a.getElementById(i) != null;
    if (t.className.indexOf(o) < 0 && (t.className = (t.className || "") + " " + o), !s) {
      var l = a.createElement("style");
      l.id = i, l.innerHTML = "." + o + " { position: relative; }", n.insertBefore(l, n.children[0]);
    }
    var u = Ie.getComputedStyle(t), v = u.getPropertyValue("position");
    v === "static" && Pe("A Cytoscape container has style position:static and so can not use UI extensions properly");
  }
  e.selection = [void 0, void 0, void 0, void 0, 0], e.bezierProjPcts = [0.05, 0.225, 0.4, 0.5, 0.6, 0.775, 0.95], e.hoverData = {
    down: null,
    last: null,
    downTime: null,
    triggerMode: null,
    dragging: !1,
    initialPan: [null, null],
    capture: !1
  }, e.dragData = {
    possibleDragElements: []
  }, e.touchData = {
    start: null,
    capture: !1,
    // These 3 fields related to tap, taphold events
    startPosition: [null, null, null, null, null, null],
    singleTouchStartTime: null,
    singleTouchMoved: !0,
    now: [null, null, null, null, null, null],
    earlier: [null, null, null, null, null, null]
  }, e.redraws = 0, e.showFps = r.showFps, e.debug = r.debug, e.hideEdgesOnViewport = r.hideEdgesOnViewport, e.textureOnViewport = r.textureOnViewport, e.wheelSensitivity = r.wheelSensitivity, e.motionBlurEnabled = r.motionBlur, e.forcedPixelRatio = ae(r.pixelRatio) ? r.pixelRatio : null, e.motionBlur = r.motionBlur, e.motionBlurOpacity = r.motionBlurOpacity, e.motionBlurTransparency = 1 - e.motionBlurOpacity, e.motionBlurPxRatio = 1, e.mbPxRBlurry = 1, e.minMbLowQualFrames = 4, e.fullQualityMb = !1, e.clearedForMotionBlur = [], e.desktopTapThreshold = r.desktopTapThreshold, e.desktopTapThreshold2 = r.desktopTapThreshold * r.desktopTapThreshold, e.touchTapThreshold = r.touchTapThreshold, e.touchTapThreshold2 = r.touchTapThreshold * r.touchTapThreshold, e.tapholdDuration = 500, e.bindings = [], e.beforeRenderCallbacks = [], e.beforeRenderPriorities = {
    // higher priority execs before lower one
    animations: 400,
    eleCalcs: 300,
    eleTxrDeq: 200,
    lyrTxrDeq: 150,
    lyrTxrSkip: 100
  }, e.registerNodeShapes(), e.registerArrowShapes(), e.registerCalculationListeners();
};
At.notify = function(r, e) {
  var t = this, a = t.cy;
  if (!this.destroyed) {
    if (r === "init") {
      t.load();
      return;
    }
    if (r === "destroy") {
      t.destroy();
      return;
    }
    (r === "add" || r === "remove" || r === "move" && a.hasCompoundNodes() || r === "load" || r === "zorder" || r === "mount") && t.invalidateCachedZSortedEles(), r === "viewport" && t.redrawHint("select", !0), (r === "load" || r === "resize" || r === "mount") && (t.invalidateContainerClientCoordsCache(), t.matchCanvasSize(t.container)), t.redrawHint("eles", !0), t.redrawHint("drag", !0), this.startRenderLoop(), this.redraw();
  }
};
At.destroy = function() {
  var r = this;
  r.destroyed = !0, r.cy.stopAnimationLoop();
  for (var e = 0; e < r.bindings.length; e++) {
    var t = r.bindings[e], a = t, n = a.target;
    (n.off || n.removeEventListener).apply(n, a.args);
  }
  if (r.bindings = [], r.beforeRenderCallbacks = [], r.onUpdateEleCalcsFns = [], r.removeObserver && r.removeObserver.disconnect(), r.styleObserver && r.styleObserver.disconnect(), r.resizeObserver && r.resizeObserver.disconnect(), r.labelCalcDiv)
    try {
      document.body.removeChild(r.labelCalcDiv);
    } catch {
    }
};
At.isHeadless = function() {
  return !1;
};
[ui, _s, Js, Mt, Ar, ha].forEach(function(r) {
  ce(At, r);
});
var Tn = 1e3 / 60, eu = {
  setupDequeueing: function(e) {
    return function() {
      var a = this, n = this.renderer;
      if (!a.dequeueingSetup) {
        a.dequeueingSetup = !0;
        var i = _a.default(function() {
          n.redrawHint("eles", !0), n.redrawHint("drag", !0), n.redraw();
        }, e.deqRedrawThreshold), o = function(u, v) {
          var f = Br(), c = n.averageRedrawTime, d = n.lastRedrawTime, h = [], g = n.cy.extent(), m = n.getPixelRatio();
          for (u || n.flushRenderedStyleQueue(); ; ) {
            var p = Br(), y = p - f, b = p - v;
            if (d < Tn) {
              var w = Tn - (u ? c : 0);
              if (b >= e.deqFastCost * w)
                break;
            } else if (u) {
              if (y >= e.deqCost * d || y >= e.deqAvgCost * c)
                break;
            } else if (b >= e.deqNoDrawCost * Tn)
              break;
            var T = e.deq(a, m, g);
            if (T.length > 0)
              for (var C = 0; C < T.length; C++)
                h.push(T[C]);
            else
              break;
          }
          h.length > 0 && (e.onDeqd(a, h), !u && e.shouldRedraw(a, h, m, g) && i());
        }, s = e.priority || Qn;
        n.beforeRender(o, s(a));
      }
    };
  }
}, jp = /* @__PURE__ */ function() {
  function r(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $a;
    Wn(this, r), this.idsByKey = new Cr(), this.keyForId = new Cr(), this.cachesByLvl = new Cr(), this.lvls = [], this.getKey = e, this.doesEleInvalidateKey = t;
  }
  return Yn(r, [{
    key: "getIdsFor",
    value: function(t) {
      t == null && Fe("Can not get id list for null key");
      var a = this.idsByKey, n = this.idsByKey.get(t);
      return n || (n = new kt(), a.set(t, n)), n;
    }
  }, {
    key: "addIdForKey",
    value: function(t, a) {
      t != null && this.getIdsFor(t).add(a);
    }
  }, {
    key: "deleteIdForKey",
    value: function(t, a) {
      t != null && this.getIdsFor(t).delete(a);
    }
  }, {
    key: "getNumberOfIdsForKey",
    value: function(t) {
      return t == null ? 0 : this.getIdsFor(t).size;
    }
  }, {
    key: "updateKeyMappingFor",
    value: function(t) {
      var a = t.id(), n = this.keyForId.get(a), i = this.getKey(t);
      this.deleteIdForKey(n, a), this.addIdForKey(i, a), this.keyForId.set(a, i);
    }
  }, {
    key: "deleteKeyMappingFor",
    value: function(t) {
      var a = t.id(), n = this.keyForId.get(a);
      this.deleteIdForKey(n, a), this.keyForId.delete(a);
    }
  }, {
    key: "keyHasChangedFor",
    value: function(t) {
      var a = t.id(), n = this.keyForId.get(a), i = this.getKey(t);
      return n !== i;
    }
  }, {
    key: "isInvalid",
    value: function(t) {
      return this.keyHasChangedFor(t) || this.doesEleInvalidateKey(t);
    }
  }, {
    key: "getCachesAt",
    value: function(t) {
      var a = this.cachesByLvl, n = this.lvls, i = a.get(t);
      return i || (i = new Cr(), a.set(t, i), n.push(t)), i;
    }
  }, {
    key: "getCache",
    value: function(t, a) {
      return this.getCachesAt(a).get(t);
    }
  }, {
    key: "get",
    value: function(t, a) {
      var n = this.getKey(t), i = this.getCache(n, a);
      return i != null && this.updateKeyMappingFor(t), i;
    }
  }, {
    key: "getForCachedKey",
    value: function(t, a) {
      var n = this.keyForId.get(t.id()), i = this.getCache(n, a);
      return i;
    }
  }, {
    key: "hasCache",
    value: function(t, a) {
      return this.getCachesAt(a).has(t);
    }
  }, {
    key: "has",
    value: function(t, a) {
      var n = this.getKey(t);
      return this.hasCache(n, a);
    }
  }, {
    key: "setCache",
    value: function(t, a, n) {
      n.key = t, this.getCachesAt(a).set(t, n);
    }
  }, {
    key: "set",
    value: function(t, a, n) {
      var i = this.getKey(t);
      this.setCache(i, a, n), this.updateKeyMappingFor(t);
    }
  }, {
    key: "deleteCache",
    value: function(t, a) {
      this.getCachesAt(a).delete(t);
    }
  }, {
    key: "delete",
    value: function(t, a) {
      var n = this.getKey(t);
      this.deleteCache(n, a);
    }
  }, {
    key: "invalidateKey",
    value: function(t) {
      var a = this;
      this.lvls.forEach(function(n) {
        return a.deleteCache(t, n);
      });
    }
    // returns true if no other eles reference the invalidated cache (n.b. other eles may need the cache with the same key)
  }, {
    key: "invalidate",
    value: function(t) {
      var a = t.id(), n = this.keyForId.get(a);
      this.deleteKeyMappingFor(t);
      var i = this.doesEleInvalidateKey(t);
      return i && this.invalidateKey(n), i || this.getNumberOfIdsForKey(n) === 0;
    }
  }]), r;
}(), So = 25, Ba = 50, za = -4, Nn = 3, em = 7.99, rm = 8, tm = 1024, am = 1024, nm = 1024, im = 0.2, om = 0.8, sm = 10, um = 0.15, lm = 0.1, vm = 0.9, fm = 0.9, cm = 100, dm = 1, pt = {
  dequeue: "dequeue",
  downscale: "downscale",
  highQuality: "highQuality"
}, hm = Ze({
  getKey: null,
  doesEleInvalidateKey: $a,
  drawElement: null,
  getBoundingBox: null,
  getRotationPoint: null,
  getRotationOffset: null,
  isVisible: es,
  allowEdgeTxrCaching: !0,
  allowParentTxrCaching: !0
}), Wt = function(e, t) {
  var a = this;
  a.renderer = e, a.onDequeues = [];
  var n = hm(t);
  ce(a, n), a.lookup = new jp(n.getKey, n.doesEleInvalidateKey), a.setupDequeueing();
}, He = Wt.prototype;
He.reasons = pt;
He.getTextureQueue = function(r) {
  var e = this;
  return e.eleImgCaches = e.eleImgCaches || {}, e.eleImgCaches[r] = e.eleImgCaches[r] || [];
};
He.getRetiredTextureQueue = function(r) {
  var e = this, t = e.eleImgCaches.retired = e.eleImgCaches.retired || {}, a = t[r] = t[r] || [];
  return a;
};
He.getElementQueue = function() {
  var r = this, e = r.eleCacheQueue = r.eleCacheQueue || new sa.default(function(t, a) {
    return a.reqs - t.reqs;
  });
  return e;
};
He.getElementKeyToQueue = function() {
  var r = this, e = r.eleKeyToCacheQueue = r.eleKeyToCacheQueue || {};
  return e;
};
He.getElement = function(r, e, t, a, n) {
  var i = this, o = this.renderer, s = o.cy.zoom(), l = this.lookup;
  if (!e || e.w === 0 || e.h === 0 || isNaN(e.w) || isNaN(e.h) || !r.visible() || r.removed() || !i.allowEdgeTxrCaching && r.isEdge() || !i.allowParentTxrCaching && r.isParent())
    return null;
  if (a == null && (a = Math.ceil(Jn(s * t))), a < za)
    a = za;
  else if (s >= em || a > Nn)
    return null;
  var u = Math.pow(2, a), v = e.h * u, f = e.w * u, c = o.eleTextBiggerThanMin(r, u);
  if (!this.isVisible(r, c))
    return null;
  var d = l.get(r, a);
  if (d && d.invalidated && (d.invalidated = !1, d.texture.invalidatedWidth -= d.width), d)
    return d;
  var h;
  if (v <= So ? h = So : v <= Ba ? h = Ba : h = Math.ceil(v / Ba) * Ba, v > nm || f > am)
    return null;
  var g = i.getTextureQueue(h), m = g[g.length - 2], p = function() {
    return i.recycleTexture(h, f) || i.addTexture(h, f);
  };
  m || (m = g[g.length - 1]), m || (m = p()), m.width - m.usedWidth < f && (m = p());
  for (var y = function(A) {
    return A && A.scaledLabelShown === c;
  }, b = n && n === pt.dequeue, w = n && n === pt.highQuality, T = n && n === pt.downscale, C, x = a + 1; x <= Nn; x++) {
    var D = l.get(r, x);
    if (D) {
      C = D;
      break;
    }
  }
  var E = C && C.level === a + 1 ? C : null, P = function() {
    m.context.drawImage(E.texture.canvas, E.x, 0, E.width, E.height, m.usedWidth, 0, f, v);
  };
  if (m.context.setTransform(1, 0, 0, 1, 0, 0), m.context.clearRect(m.usedWidth, 0, f, h), y(E))
    P();
  else if (y(C))
    if (w) {
      for (var B = C.level; B > a; B--)
        E = i.getElement(r, e, t, B, pt.downscale);
      P();
    } else
      return i.queueElement(r, C.level - 1), C;
  else {
    var k;
    if (!b && !w && !T)
      for (var M = a - 1; M >= za; M--) {
        var L = l.get(r, M);
        if (L) {
          k = L;
          break;
        }
      }
    if (y(k))
      return i.queueElement(r, a), k;
    m.context.translate(m.usedWidth, 0), m.context.scale(u, u), this.drawElement(m.context, r, e, c, !1), m.context.scale(1 / u, 1 / u), m.context.translate(-m.usedWidth, 0);
  }
  return d = {
    x: m.usedWidth,
    texture: m,
    level: a,
    scale: u,
    width: f,
    height: v,
    scaledLabelShown: c
  }, m.usedWidth += Math.ceil(f + rm), m.eleCaches.push(d), l.set(r, a, d), i.checkTextureFullness(m), d;
};
He.invalidateElements = function(r) {
  for (var e = 0; e < r.length; e++)
    this.invalidateElement(r[e]);
};
He.invalidateElement = function(r) {
  var e = this, t = e.lookup, a = [], n = t.isInvalid(r);
  if (n) {
    for (var i = za; i <= Nn; i++) {
      var o = t.getForCachedKey(r, i);
      o && a.push(o);
    }
    var s = t.invalidate(r);
    if (s)
      for (var l = 0; l < a.length; l++) {
        var u = a[l], v = u.texture;
        v.invalidatedWidth += u.width, u.invalidated = !0, e.checkTextureUtility(v);
      }
    e.removeFromQueue(r);
  }
};
He.checkTextureUtility = function(r) {
  r.invalidatedWidth >= im * r.width && this.retireTexture(r);
};
He.checkTextureFullness = function(r) {
  var e = this, t = e.getTextureQueue(r.height);
  r.usedWidth / r.width > om && r.fullnessChecks >= sm ? Hr(t, r) : r.fullnessChecks++;
};
He.retireTexture = function(r) {
  var e = this, t = r.height, a = e.getTextureQueue(t), n = this.lookup;
  Hr(a, r), r.retired = !0;
  for (var i = r.eleCaches, o = 0; o < i.length; o++) {
    var s = i[o];
    n.deleteCache(s.key, s.level);
  }
  _n(i);
  var l = e.getRetiredTextureQueue(t);
  l.push(r);
};
He.addTexture = function(r, e) {
  var t = this, a = t.getTextureQueue(r), n = {};
  return a.push(n), n.eleCaches = [], n.height = r, n.width = Math.max(tm, e), n.usedWidth = 0, n.invalidatedWidth = 0, n.fullnessChecks = 0, n.canvas = t.renderer.makeOffscreenCanvas(n.width, n.height), n.context = n.canvas.getContext("2d"), n;
};
He.recycleTexture = function(r, e) {
  for (var t = this, a = t.getTextureQueue(r), n = t.getRetiredTextureQueue(r), i = 0; i < n.length; i++) {
    var o = n[i];
    if (o.width >= e)
      return o.retired = !1, o.usedWidth = 0, o.invalidatedWidth = 0, o.fullnessChecks = 0, _n(o.eleCaches), o.context.setTransform(1, 0, 0, 1, 0, 0), o.context.clearRect(0, 0, o.width, o.height), Hr(n, o), a.push(o), o;
  }
};
He.queueElement = function(r, e) {
  var t = this, a = t.getElementQueue(), n = t.getElementKeyToQueue(), i = this.getKey(r), o = n[i];
  if (o)
    o.level = Math.max(o.level, e), o.eles.merge(r), o.reqs++, a.updateItem(o);
  else {
    var s = {
      eles: r.spawn().merge(r),
      level: e,
      reqs: 1,
      key: i
    };
    a.push(s), n[i] = s;
  }
};
He.dequeue = function(r) {
  for (var e = this, t = e.getElementQueue(), a = e.getElementKeyToQueue(), n = [], i = e.lookup, o = 0; o < dm && t.size() > 0; o++) {
    var s = t.pop(), l = s.key, u = s.eles[0], v = i.hasCache(u, s.level);
    if (a[l] = null, v)
      continue;
    n.push(s);
    var f = e.getBoundingBox(u);
    e.getElement(u, f, r, s.level, pt.dequeue);
  }
  return n;
};
He.removeFromQueue = function(r) {
  var e = this, t = e.getElementQueue(), a = e.getElementKeyToQueue(), n = this.getKey(r), i = a[n];
  i != null && (i.eles.length === 1 ? (i.reqs = Zn, t.updateItem(i), t.pop(), a[n] = null) : i.eles.unmerge(r));
};
He.onDequeue = function(r) {
  this.onDequeues.push(r);
};
He.offDequeue = function(r) {
  Hr(this.onDequeues, r);
};
He.setupDequeueing = eu.setupDequeueing({
  deqRedrawThreshold: cm,
  deqCost: um,
  deqAvgCost: lm,
  deqNoDrawCost: vm,
  deqFastCost: fm,
  deq: function(e, t, a) {
    return e.dequeue(t, a);
  },
  onDeqd: function(e, t) {
    for (var a = 0; a < e.onDequeues.length; a++) {
      var n = e.onDequeues[a];
      n(t);
    }
  },
  shouldRedraw: function(e, t, a, n) {
    for (var i = 0; i < t.length; i++)
      for (var o = t[i].eles, s = 0; s < o.length; s++) {
        var l = o[s].boundingBox();
        if (jn(l, n))
          return !0;
      }
    return !1;
  },
  priority: function(e) {
    return e.renderer.beforeRenderPriorities.eleTxrDeq;
  }
});
var gm = 1, Xt = -4, Wa = 2, pm = 3.99, mm = 50, ym = 50, bm = 0.15, wm = 0.1, xm = 0.9, Em = 0.9, Cm = 1, To = 250, Sm = 4e3 * 4e3, Tm = !0, ru = function(e) {
  var t = this, a = t.renderer = e, n = a.cy;
  t.layersByLevel = {}, t.firstGet = !0, t.lastInvalidationTime = Br() - 2 * To, t.skipping = !1, t.eleTxrDeqs = n.collection(), t.scheduleElementRefinement = _a.default(function() {
    t.refineElementTextures(t.eleTxrDeqs), t.eleTxrDeqs.unmerge(t.eleTxrDeqs);
  }, ym), a.beforeRender(function(o, s) {
    s - t.lastInvalidationTime <= To ? t.skipping = !0 : t.skipping = !1;
  }, a.beforeRenderPriorities.lyrTxrSkip);
  var i = function(s, l) {
    return l.reqs - s.reqs;
  };
  t.layersQueue = new sa.default(i), t.setupDequeueing();
}, Qe = ru.prototype, Do = 0, Dm = Math.pow(2, 53) - 1;
Qe.makeLayer = function(r, e) {
  var t = Math.pow(2, e), a = Math.ceil(r.w * t), n = Math.ceil(r.h * t), i = this.renderer.makeOffscreenCanvas(a, n), o = {
    id: Do = ++Do % Dm,
    bb: r,
    level: e,
    width: a,
    height: n,
    canvas: i,
    context: i.getContext("2d"),
    eles: [],
    elesQueue: [],
    reqs: 0
  }, s = o.context, l = -o.bb.x1, u = -o.bb.y1;
  return s.scale(t, t), s.translate(l, u), o;
};
Qe.getLayers = function(r, e, t) {
  var a = this, n = a.renderer, i = n.cy, o = i.zoom(), s = a.firstGet;
  if (a.firstGet = !1, t == null) {
    if (t = Math.ceil(Jn(o * e)), t < Xt)
      t = Xt;
    else if (o >= pm || t > Wa)
      return null;
  }
  a.validateLayersElesOrdering(t, r);
  var l = a.layersByLevel, u = Math.pow(2, t), v = l[t] = l[t] || [], f, c = a.levelIsComplete(t, r), d, h = function() {
    var P = function(O) {
      if (a.validateLayersElesOrdering(O, r), a.levelIsComplete(O, r))
        return d = l[O], !0;
    }, B = function(O) {
      if (!d)
        for (var A = t + O; Xt <= A && A <= Wa && !P(A); A += O)
          ;
    };
    B(1), B(-1);
    for (var k = v.length - 1; k >= 0; k--) {
      var M = v[k];
      M.invalid && Hr(v, M);
    }
  };
  if (!c)
    h();
  else
    return v;
  var g = function() {
    if (!f) {
      f = ur();
      for (var P = 0; P < r.length; P++)
        ph(f, r[P].boundingBox());
    }
    return f;
  }, m = function(P) {
    P = P || {};
    var B = P.after;
    g();
    var k = f.w * u * (f.h * u);
    if (k > Sm)
      return null;
    var M = a.makeLayer(f, t);
    if (B != null) {
      var L = v.indexOf(B) + 1;
      v.splice(L, 0, M);
    } else
      (P.insert === void 0 || P.insert) && v.unshift(M);
    return M;
  };
  if (a.skipping && !s)
    return null;
  for (var p = null, y = r.length / gm, b = !s, w = 0; w < r.length; w++) {
    var T = r[w], C = T._private.rscratch, x = C.imgLayerCaches = C.imgLayerCaches || {}, D = x[t];
    if (D) {
      p = D;
      continue;
    }
    if ((!p || p.eles.length >= y || !os(p.bb, T.boundingBox())) && (p = m({
      insert: !0,
      after: p
    }), !p))
      return null;
    d || b ? a.queueLayer(p, T) : a.drawEleInLayer(p, T, t, e), p.eles.push(T), x[t] = p;
  }
  return d || (b ? null : v);
};
Qe.getEleLevelForLayerLevel = function(r, e) {
  return r;
};
Qe.drawEleInLayer = function(r, e, t, a) {
  var n = this, i = this.renderer, o = r.context, s = e.boundingBox();
  s.w === 0 || s.h === 0 || !e.visible() || (t = n.getEleLevelForLayerLevel(t, a), i.setImgSmoothing(o, !1), i.drawCachedElement(o, e, null, null, t, Tm), i.setImgSmoothing(o, !0));
};
Qe.levelIsComplete = function(r, e) {
  var t = this, a = t.layersByLevel[r];
  if (!a || a.length === 0)
    return !1;
  for (var n = 0, i = 0; i < a.length; i++) {
    var o = a[i];
    if (o.reqs > 0 || o.invalid)
      return !1;
    n += o.eles.length;
  }
  return n === e.length;
};
Qe.validateLayersElesOrdering = function(r, e) {
  var t = this.layersByLevel[r];
  if (t)
    for (var a = 0; a < t.length; a++) {
      for (var n = t[a], i = -1, o = 0; o < e.length; o++)
        if (n.eles[0] === e[o]) {
          i = o;
          break;
        }
      if (i < 0) {
        this.invalidateLayer(n);
        continue;
      }
      for (var s = i, o = 0; o < n.eles.length; o++)
        if (n.eles[o] !== e[s + o]) {
          this.invalidateLayer(n);
          break;
        }
    }
};
Qe.updateElementsInLayers = function(r, e) {
  for (var t = this, a = la(r[0]), n = 0; n < r.length; n++)
    for (var i = a ? null : r[n], o = a ? r[n] : r[n].ele, s = o._private.rscratch, l = s.imgLayerCaches = s.imgLayerCaches || {}, u = Xt; u <= Wa; u++) {
      var v = l[u];
      v && (i && t.getEleLevelForLayerLevel(v.level) !== i.level || e(v, o, i));
    }
};
Qe.haveLayers = function() {
  for (var r = this, e = !1, t = Xt; t <= Wa; t++) {
    var a = r.layersByLevel[t];
    if (a && a.length > 0) {
      e = !0;
      break;
    }
  }
  return e;
};
Qe.invalidateElements = function(r) {
  var e = this;
  r.length !== 0 && (e.lastInvalidationTime = Br(), !(r.length === 0 || !e.haveLayers()) && e.updateElementsInLayers(r, function(a, n, i) {
    e.invalidateLayer(a);
  }));
};
Qe.invalidateLayer = function(r) {
  if (this.lastInvalidationTime = Br(), !r.invalid) {
    var e = r.level, t = r.eles, a = this.layersByLevel[e];
    Hr(a, r), r.elesQueue = [], r.invalid = !0, r.replacement && (r.replacement.invalid = !0);
    for (var n = 0; n < t.length; n++) {
      var i = t[n]._private.rscratch.imgLayerCaches;
      i && (i[e] = null);
    }
  }
};
Qe.refineElementTextures = function(r) {
  var e = this;
  e.updateElementsInLayers(r, function(a, n, i) {
    var o = a.replacement;
    if (o || (o = a.replacement = e.makeLayer(a.bb, a.level), o.replaces = a, o.eles = a.eles), !o.reqs)
      for (var s = 0; s < o.eles.length; s++)
        e.queueLayer(o, o.eles[s]);
  });
};
Qe.enqueueElementRefinement = function(r) {
  this.eleTxrDeqs.merge(r), this.scheduleElementRefinement();
};
Qe.queueLayer = function(r, e) {
  var t = this, a = t.layersQueue, n = r.elesQueue, i = n.hasId = n.hasId || {};
  if (!r.replacement) {
    if (e) {
      if (i[e.id()])
        return;
      n.push(e), i[e.id()] = !0;
    }
    r.reqs ? (r.reqs++, a.updateItem(r)) : (r.reqs = 1, a.push(r));
  }
};
Qe.dequeue = function(r) {
  for (var e = this, t = e.layersQueue, a = [], n = 0; n < Cm && t.size() !== 0; ) {
    var i = t.peek();
    if (i.replacement) {
      t.pop();
      continue;
    }
    if (i.replaces && i !== i.replaces.replacement) {
      t.pop();
      continue;
    }
    if (i.invalid) {
      t.pop();
      continue;
    }
    var o = i.elesQueue.shift();
    o && (e.drawEleInLayer(i, o, i.level, r), n++), a.length === 0 && a.push(!0), i.elesQueue.length === 0 && (t.pop(), i.reqs = 0, i.replaces && e.applyLayerReplacement(i), e.requestRedraw());
  }
  return a;
};
Qe.applyLayerReplacement = function(r) {
  var e = this, t = e.layersByLevel[r.level], a = r.replaces, n = t.indexOf(a);
  if (!(n < 0 || a.invalid)) {
    t[n] = r;
    for (var i = 0; i < r.eles.length; i++) {
      var o = r.eles[i]._private, s = o.imgLayerCaches = o.imgLayerCaches || {};
      s && (s[r.level] = r);
    }
    e.requestRedraw();
  }
};
Qe.requestRedraw = _a.default(function() {
  var r = this.renderer;
  r.redrawHint("eles", !0), r.redrawHint("drag", !0), r.redraw();
}, 100);
Qe.setupDequeueing = eu.setupDequeueing({
  deqRedrawThreshold: mm,
  deqCost: bm,
  deqAvgCost: wm,
  deqNoDrawCost: xm,
  deqFastCost: Em,
  deq: function(e, t) {
    return e.dequeue(t);
  },
  onDeqd: Qn,
  shouldRedraw: es,
  priority: function(e) {
    return e.renderer.beforeRenderPriorities.lyrTxrDeq;
  }
});
var tu = {}, ko;
function km(r, e) {
  for (var t = 0; t < e.length; t++) {
    var a = e[t];
    r.lineTo(a.x, a.y);
  }
}
function Pm(r, e, t) {
  for (var a, n = 0; n < e.length; n++) {
    var i = e[n];
    n === 0 && (a = i), r.lineTo(i.x, i.y);
  }
  r.quadraticCurveTo(t.x, t.y, a.x, a.y);
}
function Po(r, e, t) {
  r.beginPath && r.beginPath();
  for (var a = e, n = 0; n < a.length; n++) {
    var i = a[n];
    r.lineTo(i.x, i.y);
  }
  var o = t, s = t[0];
  r.moveTo(s.x, s.y);
  for (var n = 1; n < o.length; n++) {
    var i = o[n];
    r.lineTo(i.x, i.y);
  }
  r.closePath && r.closePath();
}
function Bm(r, e, t, a, n) {
  r.beginPath && r.beginPath(), r.arc(t, a, n, 0, Math.PI * 2, !1);
  var i = e, o = i[0];
  r.moveTo(o.x, o.y);
  for (var s = 0; s < i.length; s++) {
    var l = i[s];
    r.lineTo(l.x, l.y);
  }
  r.closePath && r.closePath();
}
function Lm(r, e, t, a) {
  r.arc(e, t, a, 0, Math.PI * 2, !1);
}
tu.arrowShapeImpl = function(r) {
  return (ko || (ko = {
    polygon: km,
    "triangle-backcurve": Pm,
    "triangle-tee": Po,
    "circle-triangle": Bm,
    "triangle-cross": Po,
    circle: Lm
  }))[r];
};
var Dr = {};
Dr.drawElement = function(r, e, t, a, n, i) {
  var o = this;
  e.isNode() ? o.drawNode(r, e, t, a, n, i) : o.drawEdge(r, e, t, a, n, i);
};
Dr.drawElementOverlay = function(r, e) {
  var t = this;
  e.isNode() ? t.drawNodeOverlay(r, e) : t.drawEdgeOverlay(r, e);
};
Dr.drawElementUnderlay = function(r, e) {
  var t = this;
  e.isNode() ? t.drawNodeUnderlay(r, e) : t.drawEdgeUnderlay(r, e);
};
Dr.drawCachedElementPortion = function(r, e, t, a, n, i, o, s) {
  var l = this, u = t.getBoundingBox(e);
  if (!(u.w === 0 || u.h === 0)) {
    var v = t.getElement(e, u, a, n, i);
    if (v != null) {
      var f = s(l, e);
      if (f === 0)
        return;
      var c = o(l, e), d = u.x1, h = u.y1, g = u.w, m = u.h, p, y, b, w, T;
      if (c !== 0) {
        var C = t.getRotationPoint(e);
        b = C.x, w = C.y, r.translate(b, w), r.rotate(c), T = l.getImgSmoothing(r), T || l.setImgSmoothing(r, !0);
        var x = t.getRotationOffset(e);
        p = x.x, y = x.y;
      } else
        p = d, y = h;
      var D;
      f !== 1 && (D = r.globalAlpha, r.globalAlpha = D * f), r.drawImage(v.texture.canvas, v.x, 0, v.width, v.height, p, y, g, m), f !== 1 && (r.globalAlpha = D), c !== 0 && (r.rotate(-c), r.translate(-b, -w), T || l.setImgSmoothing(r, !1));
    } else
      t.drawElement(r, e);
  }
};
var Mm = function() {
  return 0;
}, Am = function(e, t) {
  return e.getTextAngle(t, null);
}, Rm = function(e, t) {
  return e.getTextAngle(t, "source");
}, Om = function(e, t) {
  return e.getTextAngle(t, "target");
}, Im = function(e, t) {
  return t.effectiveOpacity();
}, Dn = function(e, t) {
  return t.pstyle("text-opacity").pfValue * t.effectiveOpacity();
};
Dr.drawCachedElement = function(r, e, t, a, n, i) {
  var o = this, s = o.data, l = s.eleTxrCache, u = s.lblTxrCache, v = s.slbTxrCache, f = s.tlbTxrCache, c = e.boundingBox(), d = i === !0 ? l.reasons.highQuality : null;
  if (!(c.w === 0 || c.h === 0 || !e.visible()) && (!a || jn(c, a))) {
    var h = e.isEdge(), g = e.element()._private.rscratch.badLine;
    o.drawElementUnderlay(r, e), o.drawCachedElementPortion(r, e, l, t, n, d, Mm, Im), (!h || !g) && o.drawCachedElementPortion(r, e, u, t, n, d, Am, Dn), h && !g && (o.drawCachedElementPortion(r, e, v, t, n, d, Rm, Dn), o.drawCachedElementPortion(r, e, f, t, n, d, Om, Dn)), o.drawElementOverlay(r, e);
  }
};
Dr.drawElements = function(r, e) {
  for (var t = this, a = 0; a < e.length; a++) {
    var n = e[a];
    t.drawElement(r, n);
  }
};
Dr.drawCachedElements = function(r, e, t, a) {
  for (var n = this, i = 0; i < e.length; i++) {
    var o = e[i];
    n.drawCachedElement(r, o, t, a);
  }
};
Dr.drawCachedNodes = function(r, e, t, a) {
  for (var n = this, i = 0; i < e.length; i++) {
    var o = e[i];
    o.isNode() && n.drawCachedElement(r, o, t, a);
  }
};
Dr.drawLayeredElements = function(r, e, t, a) {
  var n = this, i = n.data.lyrTxrCache.getLayers(e, t);
  if (i)
    for (var o = 0; o < i.length; o++) {
      var s = i[o], l = s.bb;
      l.w === 0 || l.h === 0 || r.drawImage(s.canvas, l.x1, l.y1, l.w, l.h);
    }
  else
    n.drawCachedElements(r, e, t, a);
};
var Rr = {};
Rr.drawEdge = function(r, e, t) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, o = this, s = e._private.rscratch;
  if (!(i && !e.visible()) && !(s.badLine || s.allpts == null || isNaN(s.allpts[0]))) {
    var l;
    t && (l = t, r.translate(-l.x1, -l.y1));
    var u = i ? e.pstyle("opacity").value : 1, v = i ? e.pstyle("line-opacity").value : 1, f = e.pstyle("curve-style").value, c = e.pstyle("line-style").value, d = e.pstyle("width").pfValue, h = e.pstyle("line-cap").value, g = u * v, m = u * v, p = function() {
      var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : g;
      f === "straight-triangle" ? (o.eleStrokeStyle(r, e, k), o.drawEdgeTrianglePath(e, r, s.allpts)) : (r.lineWidth = d, r.lineCap = h, o.eleStrokeStyle(r, e, k), o.drawEdgePath(e, r, s.allpts, c), r.lineCap = "butt");
    }, y = function() {
      n && o.drawEdgeOverlay(r, e);
    }, b = function() {
      n && o.drawEdgeUnderlay(r, e);
    }, w = function() {
      var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : m;
      o.drawArrowheads(r, e, k);
    }, T = function() {
      o.drawElementText(r, e, null, a);
    };
    r.lineJoin = "round";
    var C = e.pstyle("ghost").value === "yes";
    if (C) {
      var x = e.pstyle("ghost-offset-x").pfValue, D = e.pstyle("ghost-offset-y").pfValue, E = e.pstyle("ghost-opacity").value, P = g * E;
      r.translate(x, D), p(P), w(P), r.translate(-x, -D);
    }
    b(), p(), w(), y(), T(), t && r.translate(l.x1, l.y1);
  }
};
var au = function(e) {
  if (!["overlay", "underlay"].includes(e))
    throw new Error("Invalid state");
  return function(t, a) {
    if (a.visible()) {
      var n = a.pstyle("".concat(e, "-opacity")).value;
      if (n !== 0) {
        var i = this, o = i.usePaths(), s = a._private.rscratch, l = a.pstyle("".concat(e, "-padding")).pfValue, u = 2 * l, v = a.pstyle("".concat(e, "-color")).value;
        t.lineWidth = u, s.edgeType === "self" && !o ? t.lineCap = "butt" : t.lineCap = "round", i.colorStrokeStyle(t, v[0], v[1], v[2], n), i.drawEdgePath(a, t, s.allpts, "solid");
      }
    }
  };
};
Rr.drawEdgeOverlay = au("overlay");
Rr.drawEdgeUnderlay = au("underlay");
Rr.drawEdgePath = function(r, e, t, a) {
  var n = r._private.rscratch, i = e, o, s = !1, l = this.usePaths(), u = r.pstyle("line-dash-pattern").pfValue, v = r.pstyle("line-dash-offset").pfValue;
  if (l) {
    var f = t.join("$"), c = n.pathCacheKey && n.pathCacheKey === f;
    c ? (o = e = n.pathCache, s = !0) : (o = e = new Path2D(), n.pathCacheKey = f, n.pathCache = o);
  }
  if (i.setLineDash)
    switch (a) {
      case "dotted":
        i.setLineDash([1, 1]);
        break;
      case "dashed":
        i.setLineDash(u), i.lineDashOffset = v;
        break;
      case "solid":
        i.setLineDash([]);
        break;
    }
  if (!s && !n.badLine)
    switch (e.beginPath && e.beginPath(), e.moveTo(t[0], t[1]), n.edgeType) {
      case "bezier":
      case "self":
      case "compound":
      case "multibezier":
        for (var d = 2; d + 3 < t.length; d += 4)
          e.quadraticCurveTo(t[d], t[d + 1], t[d + 2], t[d + 3]);
        break;
      case "straight":
      case "segments":
      case "haystack":
        for (var h = 2; h + 1 < t.length; h += 2)
          e.lineTo(t[h], t[h + 1]);
        break;
    }
  e = i, l ? e.stroke(o) : e.stroke(), e.setLineDash && e.setLineDash([]);
};
Rr.drawEdgeTrianglePath = function(r, e, t) {
  e.fillStyle = e.strokeStyle;
  for (var a = r.pstyle("width").pfValue, n = 0; n + 1 < t.length; n += 2) {
    var i = [t[n + 2] - t[n], t[n + 3] - t[n + 1]], o = Math.sqrt(i[0] * i[0] + i[1] * i[1]), s = [i[1] / o, -i[0] / o], l = [s[0] * a / 2, s[1] * a / 2];
    e.beginPath(), e.moveTo(t[n] - l[0], t[n + 1] - l[1]), e.lineTo(t[n] + l[0], t[n + 1] + l[1]), e.lineTo(t[n + 2], t[n + 3]), e.closePath(), e.fill();
  }
};
Rr.drawArrowheads = function(r, e, t) {
  var a = e._private.rscratch, n = a.edgeType === "haystack";
  n || this.drawArrowhead(r, e, "source", a.arrowStartX, a.arrowStartY, a.srcArrowAngle, t), this.drawArrowhead(r, e, "mid-target", a.midX, a.midY, a.midtgtArrowAngle, t), this.drawArrowhead(r, e, "mid-source", a.midX, a.midY, a.midsrcArrowAngle, t), n || this.drawArrowhead(r, e, "target", a.arrowEndX, a.arrowEndY, a.tgtArrowAngle, t);
};
Rr.drawArrowhead = function(r, e, t, a, n, i, o) {
  if (!(isNaN(a) || a == null || isNaN(n) || n == null || isNaN(i) || i == null)) {
    var s = this, l = e.pstyle(t + "-arrow-shape").value;
    if (l !== "none") {
      var u = e.pstyle(t + "-arrow-fill").value === "hollow" ? "both" : "filled", v = e.pstyle(t + "-arrow-fill").value, f = e.pstyle("width").pfValue, c = e.pstyle("opacity").value;
      o === void 0 && (o = c);
      var d = r.globalCompositeOperation;
      (o !== 1 || v === "hollow") && (r.globalCompositeOperation = "destination-out", s.colorFillStyle(r, 255, 255, 255, 1), s.colorStrokeStyle(r, 255, 255, 255, 1), s.drawArrowShape(e, r, u, f, l, a, n, i), r.globalCompositeOperation = d);
      var h = e.pstyle(t + "-arrow-color").value;
      s.colorFillStyle(r, h[0], h[1], h[2], o), s.colorStrokeStyle(r, h[0], h[1], h[2], o), s.drawArrowShape(e, r, v, f, l, a, n, i);
    }
  }
};
Rr.drawArrowShape = function(r, e, t, a, n, i, o, s) {
  var l = this, u = this.usePaths() && n !== "triangle-cross", v = !1, f, c = e, d = {
    x: i,
    y: o
  }, h = r.pstyle("arrow-scale").value, g = this.getArrowWidth(a, h), m = l.arrowShapes[n];
  if (u) {
    var p = l.arrowPathCache = l.arrowPathCache || [], y = jr(n), b = p[y];
    b != null ? (f = e = b, v = !0) : (f = e = new Path2D(), p[y] = f);
  }
  v || (e.beginPath && e.beginPath(), u ? m.draw(e, 1, 0, {
    x: 0,
    y: 0
  }, 1) : m.draw(e, g, s, d, a), e.closePath && e.closePath()), e = c, u && (e.translate(i, o), e.rotate(s), e.scale(g, g)), (t === "filled" || t === "both") && (u ? e.fill(f) : e.fill()), (t === "hollow" || t === "both") && (e.lineWidth = (m.matchEdgeWidth ? a : 1) / (u ? g : 1), e.lineJoin = "miter", u ? e.stroke(f) : e.stroke()), u && (e.scale(1 / g, 1 / g), e.rotate(-s), e.translate(-i, -o));
};
var vi = {};
vi.safeDrawImage = function(r, e, t, a, n, i, o, s, l, u) {
  if (!(n <= 0 || i <= 0 || l <= 0 || u <= 0))
    try {
      r.drawImage(e, t, a, n, i, o, s, l, u);
    } catch (v) {
      Pe(v);
    }
};
vi.drawInscribedImage = function(r, e, t, a, n) {
  var i = this, o = t.position(), s = o.x, l = o.y, u = t.cy().style(), v = u.getIndexedStyle.bind(u), f = v(t, "background-fit", "value", a), c = v(t, "background-repeat", "value", a), d = t.width(), h = t.height(), g = t.padding() * 2, m = d + (v(t, "background-width-relative-to", "value", a) === "inner" ? 0 : g), p = h + (v(t, "background-height-relative-to", "value", a) === "inner" ? 0 : g), y = t._private.rscratch, b = v(t, "background-clip", "value", a), w = b === "node", T = v(t, "background-image-opacity", "value", a) * n, C = v(t, "background-image-smoothing", "value", a), x = e.width || e.cachedW, D = e.height || e.cachedH;
  (x == null || D == null) && (document.body.appendChild(e), x = e.cachedW = e.width || e.offsetWidth, D = e.cachedH = e.height || e.offsetHeight, document.body.removeChild(e));
  var E = x, P = D;
  if (v(t, "background-width", "value", a) !== "auto" && (v(t, "background-width", "units", a) === "%" ? E = v(t, "background-width", "pfValue", a) * m : E = v(t, "background-width", "pfValue", a)), v(t, "background-height", "value", a) !== "auto" && (v(t, "background-height", "units", a) === "%" ? P = v(t, "background-height", "pfValue", a) * p : P = v(t, "background-height", "pfValue", a)), !(E === 0 || P === 0)) {
    if (f === "contain") {
      var B = Math.min(m / E, p / P);
      E *= B, P *= B;
    } else if (f === "cover") {
      var B = Math.max(m / E, p / P);
      E *= B, P *= B;
    }
    var k = s - m / 2, M = v(t, "background-position-x", "units", a), L = v(t, "background-position-x", "pfValue", a);
    M === "%" ? k += (m - E) * L : k += L;
    var O = v(t, "background-offset-x", "units", a), A = v(t, "background-offset-x", "pfValue", a);
    O === "%" ? k += (m - E) * A : k += A;
    var R = l - p / 2, z = v(t, "background-position-y", "units", a), F = v(t, "background-position-y", "pfValue", a);
    z === "%" ? R += (p - P) * F : R += F;
    var q = v(t, "background-offset-y", "units", a), N = v(t, "background-offset-y", "pfValue", a);
    q === "%" ? R += (p - P) * N : R += N, y.pathCache && (k -= s, R -= l, s = 0, l = 0);
    var V = r.globalAlpha;
    r.globalAlpha = T;
    var Y = i.getImgSmoothing(r), U = !1;
    if (C === "no" && Y ? (i.setImgSmoothing(r, !1), U = !0) : C === "yes" && !Y && (i.setImgSmoothing(r, !0), U = !0), c === "no-repeat")
      w && (r.save(), y.pathCache ? r.clip(y.pathCache) : (i.nodeShapes[i.getNodeShape(t)].draw(r, s, l, m, p), r.clip())), i.safeDrawImage(r, e, 0, 0, x, D, k, R, E, P), w && r.restore();
    else {
      var W = r.createPattern(e, c);
      r.fillStyle = W, i.nodeShapes[i.getNodeShape(t)].draw(r, s, l, m, p), r.translate(k, R), r.fill(), r.translate(-k, -R);
    }
    r.globalAlpha = V, U && i.setImgSmoothing(r, Y);
  }
};
var ot = {};
ot.eleTextBiggerThanMin = function(r, e) {
  if (!e) {
    var t = r.cy().zoom(), a = this.getPixelRatio(), n = Math.ceil(Jn(t * a));
    e = Math.pow(2, n);
  }
  var i = r.pstyle("font-size").pfValue * e, o = r.pstyle("min-zoomed-font-size").pfValue;
  return !(i < o);
};
ot.drawElementText = function(r, e, t, a, n) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, o = this;
  if (a == null) {
    if (i && !o.eleTextBiggerThanMin(e))
      return;
  } else if (a === !1)
    return;
  if (e.isNode()) {
    var s = e.pstyle("label");
    if (!s || !s.value)
      return;
    var l = o.getLabelJustification(e);
    r.textAlign = l, r.textBaseline = "bottom";
  } else {
    var u = e.element()._private.rscratch.badLine, v = e.pstyle("label"), f = e.pstyle("source-label"), c = e.pstyle("target-label");
    if (u || (!v || !v.value) && (!f || !f.value) && (!c || !c.value))
      return;
    r.textAlign = "center", r.textBaseline = "bottom";
  }
  var d = !t, h;
  t && (h = t, r.translate(-h.x1, -h.y1)), n == null ? (o.drawText(r, e, null, d, i), e.isEdge() && (o.drawText(r, e, "source", d, i), o.drawText(r, e, "target", d, i))) : o.drawText(r, e, n, d, i), t && r.translate(h.x1, h.y1);
};
ot.getFontCache = function(r) {
  var e;
  this.fontCaches = this.fontCaches || [];
  for (var t = 0; t < this.fontCaches.length; t++)
    if (e = this.fontCaches[t], e.context === r)
      return e;
  return e = {
    context: r
  }, this.fontCaches.push(e), e;
};
ot.setupTextStyle = function(r, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, a = e.pstyle("font-style").strValue, n = e.pstyle("font-size").pfValue + "px", i = e.pstyle("font-family").strValue, o = e.pstyle("font-weight").strValue, s = t ? e.effectiveOpacity() * e.pstyle("text-opacity").value : 1, l = e.pstyle("text-outline-opacity").value * s, u = e.pstyle("color").value, v = e.pstyle("text-outline-color").value;
  r.font = a + " " + o + " " + n + " " + i, r.lineJoin = "round", this.colorFillStyle(r, u[0], u[1], u[2], s), this.colorStrokeStyle(r, v[0], v[1], v[2], l);
};
function zm(r, e, t, a, n) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 5;
  r.beginPath(), r.moveTo(e + i, t), r.lineTo(e + a - i, t), r.quadraticCurveTo(e + a, t, e + a, t + i), r.lineTo(e + a, t + n - i), r.quadraticCurveTo(e + a, t + n, e + a - i, t + n), r.lineTo(e + i, t + n), r.quadraticCurveTo(e, t + n, e, t + n - i), r.lineTo(e, t + i), r.quadraticCurveTo(e, t, e + i, t), r.closePath(), r.fill();
}
ot.getTextAngle = function(r, e) {
  var t, a = r._private, n = a.rscratch, i = e ? e + "-" : "", o = r.pstyle(i + "text-rotation"), s = br(n, "labelAngle", e);
  return o.strValue === "autorotate" ? t = r.isEdge() ? s : 0 : o.strValue === "none" ? t = 0 : t = o.pfValue, t;
};
ot.drawText = function(r, e, t) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = e._private, o = i.rscratch, s = n ? e.effectiveOpacity() : 1;
  if (!(n && (s === 0 || e.pstyle("text-opacity").value === 0))) {
    t === "main" && (t = null);
    var l = br(o, "labelX", t), u = br(o, "labelY", t), v, f, c = this.getLabelText(e, t);
    if (c != null && c !== "" && !isNaN(l) && !isNaN(u)) {
      this.setupTextStyle(r, e, n);
      var d = t ? t + "-" : "", h = br(o, "labelWidth", t), g = br(o, "labelHeight", t), m = e.pstyle(d + "text-margin-x").pfValue, p = e.pstyle(d + "text-margin-y").pfValue, y = e.isEdge(), b = e.pstyle("text-halign").value, w = e.pstyle("text-valign").value;
      y && (b = "center", w = "center"), l += m, u += p;
      var T;
      switch (a ? T = this.getTextAngle(e, t) : T = 0, T !== 0 && (v = l, f = u, r.translate(v, f), r.rotate(T), l = 0, u = 0), w) {
        case "top":
          break;
        case "center":
          u += g / 2;
          break;
        case "bottom":
          u += g;
          break;
      }
      var C = e.pstyle("text-background-opacity").value, x = e.pstyle("text-border-opacity").value, D = e.pstyle("text-border-width").pfValue, E = e.pstyle("text-background-padding").pfValue;
      if (C > 0 || D > 0 && x > 0) {
        var P = l - E;
        switch (b) {
          case "left":
            P -= h;
            break;
          case "center":
            P -= h / 2;
            break;
        }
        var B = u - g - E, k = h + 2 * E, M = g + 2 * E;
        if (C > 0) {
          var L = r.fillStyle, O = e.pstyle("text-background-color").value;
          r.fillStyle = "rgba(" + O[0] + "," + O[1] + "," + O[2] + "," + C * s + ")";
          var A = e.pstyle("text-background-shape").strValue;
          A.indexOf("round") === 0 ? zm(r, P, B, k, M, 2) : r.fillRect(P, B, k, M), r.fillStyle = L;
        }
        if (D > 0 && x > 0) {
          var R = r.strokeStyle, z = r.lineWidth, F = e.pstyle("text-border-color").value, q = e.pstyle("text-border-style").value;
          if (r.strokeStyle = "rgba(" + F[0] + "," + F[1] + "," + F[2] + "," + x * s + ")", r.lineWidth = D, r.setLineDash)
            switch (q) {
              case "dotted":
                r.setLineDash([1, 1]);
                break;
              case "dashed":
                r.setLineDash([4, 2]);
                break;
              case "double":
                r.lineWidth = D / 4, r.setLineDash([]);
                break;
              case "solid":
                r.setLineDash([]);
                break;
            }
          if (r.strokeRect(P, B, k, M), q === "double") {
            var N = D / 2;
            r.strokeRect(P + N, B + N, k - N * 2, M - N * 2);
          }
          r.setLineDash && r.setLineDash([]), r.lineWidth = z, r.strokeStyle = R;
        }
      }
      var V = 2 * e.pstyle("text-outline-width").pfValue;
      if (V > 0 && (r.lineWidth = V), e.pstyle("text-wrap").value === "wrap") {
        var Y = br(o, "labelWrapCachedLines", t), U = br(o, "labelLineHeight", t), W = h / 2, H = this.getLabelJustification(e);
        switch (H === "auto" || (b === "left" ? H === "left" ? l += -h : H === "center" && (l += -W) : b === "center" ? H === "left" ? l += -W : H === "right" && (l += W) : b === "right" && (H === "center" ? l += W : H === "right" && (l += h))), w) {
          case "top":
            u -= (Y.length - 1) * U;
            break;
          case "center":
          case "bottom":
            u -= (Y.length - 1) * U;
            break;
        }
        for (var I = 0; I < Y.length; I++)
          V > 0 && r.strokeText(Y[I], l, u), r.fillText(Y[I], l, u), u += U;
      } else
        V > 0 && r.strokeText(c, l, u), r.fillText(c, l, u);
      T !== 0 && (r.rotate(-T), r.translate(-v, -f));
    }
  }
};
var Rt = {};
Rt.drawNode = function(r, e, t) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, o = this, s, l, u = e._private, v = u.rscratch, f = e.position();
  if (!(!ae(f.x) || !ae(f.y)) && !(i && !e.visible())) {
    var c = i ? e.effectiveOpacity() : 1, d = o.usePaths(), h, g = !1, m = e.padding();
    s = e.width() + 2 * m, l = e.height() + 2 * m;
    var p;
    t && (p = t, r.translate(-p.x1, -p.y1));
    for (var y = e.pstyle("background-image"), b = y.value, w = new Array(b.length), T = new Array(b.length), C = 0, x = 0; x < b.length; x++) {
      var D = b[x], E = w[x] = D != null && D !== "none";
      if (E) {
        var P = e.cy().style().getIndexedStyle(e, "background-image-crossorigin", "value", x);
        C++, T[x] = o.getCachedImage(D, P, function() {
          u.backgroundTimestamp = Date.now(), e.emitAndNotify("background");
        });
      }
    }
    var B = e.pstyle("background-blacken").value, k = e.pstyle("border-width").pfValue, M = e.pstyle("background-opacity").value * c, L = e.pstyle("border-color").value, O = e.pstyle("border-style").value, A = e.pstyle("border-opacity").value * c;
    r.lineJoin = "miter";
    var R = function() {
      var ne = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : M;
      o.eleFillStyle(r, e, ne);
    }, z = function() {
      var ne = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : A;
      o.colorStrokeStyle(r, L[0], L[1], L[2], ne);
    }, F = e.pstyle("shape").strValue, q = e.pstyle("shape-polygon-points").pfValue;
    if (d) {
      r.translate(f.x, f.y);
      var N = o.nodePathCache = o.nodePathCache || [], V = jo(F === "polygon" ? F + "," + q.join(",") : F, "" + l, "" + s), Y = N[V];
      Y != null ? (h = Y, g = !0, v.pathCache = h) : (h = new Path2D(), N[V] = v.pathCache = h);
    }
    var U = function() {
      if (!g) {
        var ne = f;
        d && (ne = {
          x: 0,
          y: 0
        }), o.nodeShapes[o.getNodeShape(e)].draw(h || r, ne.x, ne.y, s, l);
      }
      d ? r.fill(h) : r.fill();
    }, W = function() {
      for (var ne = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : c, ue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, we = u.backgrounding, ge = 0, fe = 0; fe < T.length; fe++) {
        var _ = e.cy().style().getIndexedStyle(e, "background-image-containment", "value", fe);
        if (ue && _ === "over" || !ue && _ === "inside") {
          ge++;
          continue;
        }
        w[fe] && T[fe].complete && !T[fe].error && (ge++, o.drawInscribedImage(r, T[fe], e, fe, ne));
      }
      u.backgrounding = ge !== C, we !== u.backgrounding && e.updateStyle(!1);
    }, H = function() {
      var ne = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, ue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : c;
      o.hasPie(e) && (o.drawPie(r, e, ue), ne && (d || o.nodeShapes[o.getNodeShape(e)].draw(r, f.x, f.y, s, l)));
    }, I = function() {
      var ne = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : c, ue = (B > 0 ? B : -B) * ne, we = B > 0 ? 0 : 255;
      B !== 0 && (o.colorFillStyle(r, we, we, we, ue), d ? r.fill(h) : r.fill());
    }, X = function() {
      if (k > 0) {
        if (r.lineWidth = k, r.lineCap = "butt", r.setLineDash)
          switch (O) {
            case "dotted":
              r.setLineDash([1, 1]);
              break;
            case "dashed":
              r.setLineDash([4, 2]);
              break;
            case "solid":
            case "double":
              r.setLineDash([]);
              break;
          }
        if (d ? r.stroke(h) : r.stroke(), O === "double") {
          r.lineWidth = k / 3;
          var ne = r.globalCompositeOperation;
          r.globalCompositeOperation = "destination-out", d ? r.stroke(h) : r.stroke(), r.globalCompositeOperation = ne;
        }
        r.setLineDash && r.setLineDash([]);
      }
    }, Z = function() {
      n && o.drawNodeOverlay(r, e, f, s, l);
    }, j = function() {
      n && o.drawNodeUnderlay(r, e, f, s, l);
    }, re = function() {
      o.drawElementText(r, e, null, a);
    }, de = e.pstyle("ghost").value === "yes";
    if (de) {
      var he = e.pstyle("ghost-offset-x").pfValue, te = e.pstyle("ghost-offset-y").pfValue, ee = e.pstyle("ghost-opacity").value, ve = ee * c;
      r.translate(he, te), R(ee * M), U(), W(ve, !0), z(ee * A), X(), H(B !== 0 || k !== 0), W(ve, !1), I(ve), r.translate(-he, -te);
    }
    d && r.translate(-f.x, -f.y), j(), d && r.translate(f.x, f.y), R(), U(), W(c, !0), z(), X(), H(B !== 0 || k !== 0), W(c, !1), I(), d && r.translate(-f.x, -f.y), re(), Z(), t && r.translate(p.x1, p.y1);
  }
};
var nu = function(e) {
  if (!["overlay", "underlay"].includes(e))
    throw new Error("Invalid state");
  return function(t, a, n, i, o) {
    var s = this;
    if (a.visible()) {
      var l = a.pstyle("".concat(e, "-padding")).pfValue, u = a.pstyle("".concat(e, "-opacity")).value, v = a.pstyle("".concat(e, "-color")).value, f = a.pstyle("".concat(e, "-shape")).value;
      if (u > 0) {
        if (n = n || a.position(), i == null || o == null) {
          var c = a.padding();
          i = a.width() + 2 * c, o = a.height() + 2 * c;
        }
        s.colorFillStyle(t, v[0], v[1], v[2], u), s.nodeShapes[f].draw(t, n.x, n.y, i + l * 2, o + l * 2), t.fill();
      }
    }
  };
};
Rt.drawNodeOverlay = nu("overlay");
Rt.drawNodeUnderlay = nu("underlay");
Rt.hasPie = function(r) {
  return r = r[0], r._private.hasPie;
};
Rt.drawPie = function(r, e, t, a) {
  e = e[0], a = a || e.position();
  var n = e.cy().style(), i = e.pstyle("pie-size"), o = a.x, s = a.y, l = e.width(), u = e.height(), v = Math.min(l, u) / 2, f = 0, c = this.usePaths();
  c && (o = 0, s = 0), i.units === "%" ? v = v * i.pfValue : i.pfValue !== void 0 && (v = i.pfValue / 2);
  for (var d = 1; d <= n.pieBackgroundN; d++) {
    var h = e.pstyle("pie-" + d + "-background-size").value, g = e.pstyle("pie-" + d + "-background-color").value, m = e.pstyle("pie-" + d + "-background-opacity").value * t, p = h / 100;
    p + f > 1 && (p = 1 - f);
    var y = 1.5 * Math.PI + 2 * Math.PI * f, b = 2 * Math.PI * p, w = y + b;
    h === 0 || f >= 1 || f + p > 1 || (r.beginPath(), r.moveTo(o, s), r.arc(o, s, v, y, w), r.closePath(), this.colorFillStyle(r, g[0], g[1], g[2], m), r.fill(), f += p);
  }
};
var vr = {}, Nm = 100;
vr.getPixelRatio = function() {
  var r = this.data.contexts[0];
  if (this.forcedPixelRatio != null)
    return this.forcedPixelRatio;
  var e = r.backingStorePixelRatio || r.webkitBackingStorePixelRatio || r.mozBackingStorePixelRatio || r.msBackingStorePixelRatio || r.oBackingStorePixelRatio || r.backingStorePixelRatio || 1;
  return (window.devicePixelRatio || 1) / e;
};
vr.paintCache = function(r) {
  for (var e = this.paintCaches = this.paintCaches || [], t = !0, a, n = 0; n < e.length; n++)
    if (a = e[n], a.context === r) {
      t = !1;
      break;
    }
  return t && (a = {
    context: r
  }, e.push(a)), a;
};
vr.createGradientStyleFor = function(r, e, t, a, n) {
  var i, o = this.usePaths(), s = t.pstyle(e + "-gradient-stop-colors").value, l = t.pstyle(e + "-gradient-stop-positions").pfValue;
  if (a === "radial-gradient")
    if (t.isEdge()) {
      var u = t.sourceEndpoint(), v = t.targetEndpoint(), f = t.midpoint(), c = et(u, f), d = et(v, f);
      i = r.createRadialGradient(f.x, f.y, 0, f.x, f.y, Math.max(c, d));
    } else {
      var h = o ? {
        x: 0,
        y: 0
      } : t.position(), g = t.paddedWidth(), m = t.paddedHeight();
      i = r.createRadialGradient(h.x, h.y, 0, h.x, h.y, Math.max(g, m));
    }
  else if (t.isEdge()) {
    var p = t.sourceEndpoint(), y = t.targetEndpoint();
    i = r.createLinearGradient(p.x, p.y, y.x, y.y);
  } else {
    var b = o ? {
      x: 0,
      y: 0
    } : t.position(), w = t.paddedWidth(), T = t.paddedHeight(), C = w / 2, x = T / 2, D = t.pstyle("background-gradient-direction").value;
    switch (D) {
      case "to-bottom":
        i = r.createLinearGradient(b.x, b.y - x, b.x, b.y + x);
        break;
      case "to-top":
        i = r.createLinearGradient(b.x, b.y + x, b.x, b.y - x);
        break;
      case "to-left":
        i = r.createLinearGradient(b.x + C, b.y, b.x - C, b.y);
        break;
      case "to-right":
        i = r.createLinearGradient(b.x - C, b.y, b.x + C, b.y);
        break;
      case "to-bottom-right":
      case "to-right-bottom":
        i = r.createLinearGradient(b.x - C, b.y - x, b.x + C, b.y + x);
        break;
      case "to-top-right":
      case "to-right-top":
        i = r.createLinearGradient(b.x - C, b.y + x, b.x + C, b.y - x);
        break;
      case "to-bottom-left":
      case "to-left-bottom":
        i = r.createLinearGradient(b.x + C, b.y - x, b.x - C, b.y + x);
        break;
      case "to-top-left":
      case "to-left-top":
        i = r.createLinearGradient(b.x + C, b.y + x, b.x - C, b.y - x);
        break;
    }
  }
  if (!i)
    return null;
  for (var E = l.length === s.length, P = s.length, B = 0; B < P; B++)
    i.addColorStop(E ? l[B] : B / (P - 1), "rgba(" + s[B][0] + "," + s[B][1] + "," + s[B][2] + "," + n + ")");
  return i;
};
vr.gradientFillStyle = function(r, e, t, a) {
  var n = this.createGradientStyleFor(r, "background", e, t, a);
  if (!n)
    return null;
  r.fillStyle = n;
};
vr.colorFillStyle = function(r, e, t, a, n) {
  r.fillStyle = "rgba(" + e + "," + t + "," + a + "," + n + ")";
};
vr.eleFillStyle = function(r, e, t) {
  var a = e.pstyle("background-fill").value;
  if (a === "linear-gradient" || a === "radial-gradient")
    this.gradientFillStyle(r, e, a, t);
  else {
    var n = e.pstyle("background-color").value;
    this.colorFillStyle(r, n[0], n[1], n[2], t);
  }
};
vr.gradientStrokeStyle = function(r, e, t, a) {
  var n = this.createGradientStyleFor(r, "line", e, t, a);
  if (!n)
    return null;
  r.strokeStyle = n;
};
vr.colorStrokeStyle = function(r, e, t, a, n) {
  r.strokeStyle = "rgba(" + e + "," + t + "," + a + "," + n + ")";
};
vr.eleStrokeStyle = function(r, e, t) {
  var a = e.pstyle("line-fill").value;
  if (a === "linear-gradient" || a === "radial-gradient")
    this.gradientStrokeStyle(r, e, a, t);
  else {
    var n = e.pstyle("line-color").value;
    this.colorStrokeStyle(r, n[0], n[1], n[2], t);
  }
};
vr.matchCanvasSize = function(r) {
  var e = this, t = e.data, a = e.findContainerClientCoords(), n = a[2], i = a[3], o = e.getPixelRatio(), s = e.motionBlurPxRatio;
  (r === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_NODE] || r === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_DRAG]) && (o = s);
  var l = n * o, u = i * o, v;
  if (!(l === e.canvasWidth && u === e.canvasHeight)) {
    e.fontCaches = null;
    var f = t.canvasContainer;
    f.style.width = n + "px", f.style.height = i + "px";
    for (var c = 0; c < e.CANVAS_LAYERS; c++)
      v = t.canvases[c], v.width = l, v.height = u, v.style.width = n + "px", v.style.height = i + "px";
    for (var c = 0; c < e.BUFFER_COUNT; c++)
      v = t.bufferCanvases[c], v.width = l, v.height = u, v.style.width = n + "px", v.style.height = i + "px";
    e.textureMult = 1, o <= 1 && (v = t.bufferCanvases[e.TEXTURE_BUFFER], e.textureMult = 2, v.width = l * e.textureMult, v.height = u * e.textureMult), e.canvasWidth = l, e.canvasHeight = u;
  }
};
vr.renderTo = function(r, e, t, a) {
  this.render({
    forcedContext: r,
    forcedZoom: e,
    forcedPan: t,
    drawAllLayers: !0,
    forcedPxRatio: a
  });
};
vr.render = function(r) {
  r = r || as();
  var e = r.forcedContext, t = r.drawAllLayers, a = r.drawOnlyNodeLayer, n = r.forcedZoom, i = r.forcedPan, o = this, s = r.forcedPxRatio === void 0 ? this.getPixelRatio() : r.forcedPxRatio, l = o.cy, u = o.data, v = u.canvasNeedsRedraw, f = o.textureOnViewport && !e && (o.pinching || o.hoverData.dragging || o.swipePanning || o.data.wheelZooming), c = r.motionBlur !== void 0 ? r.motionBlur : o.motionBlur, d = o.motionBlurPxRatio, h = l.hasCompoundNodes(), g = o.hoverData.draggingEles, m = !!(o.hoverData.selecting || o.touchData.selecting);
  c = c && !e && o.motionBlurEnabled && !m;
  var p = c;
  e || (o.prevPxRatio !== s && (o.invalidateContainerClientCoordsCache(), o.matchCanvasSize(o.container), o.redrawHint("eles", !0), o.redrawHint("drag", !0)), o.prevPxRatio = s), !e && o.motionBlurTimeout && clearTimeout(o.motionBlurTimeout), c && (o.mbFrames == null && (o.mbFrames = 0), o.mbFrames++, o.mbFrames < 3 && (p = !1), o.mbFrames > o.minMbLowQualFrames && (o.motionBlurPxRatio = o.mbPxRBlurry)), o.clearingMotionBlur && (o.motionBlurPxRatio = 1), o.textureDrawLastFrame && !f && (v[o.NODE] = !0, v[o.SELECT_BOX] = !0);
  var y = l.style(), b = l.zoom(), w = n !== void 0 ? n : b, T = l.pan(), C = {
    x: T.x,
    y: T.y
  }, x = {
    zoom: b,
    pan: {
      x: T.x,
      y: T.y
    }
  }, D = o.prevViewport, E = D === void 0 || x.zoom !== D.zoom || x.pan.x !== D.pan.x || x.pan.y !== D.pan.y;
  !E && !(g && !h) && (o.motionBlurPxRatio = 1), i && (C = i), w *= s, C.x *= s, C.y *= s;
  var P = o.getCachedZSortedEles();
  function B(te, ee, ve, oe, ne) {
    var ue = te.globalCompositeOperation;
    te.globalCompositeOperation = "destination-out", o.colorFillStyle(te, 255, 255, 255, o.motionBlurTransparency), te.fillRect(ee, ve, oe, ne), te.globalCompositeOperation = ue;
  }
  function k(te, ee) {
    var ve, oe, ne, ue;
    !o.clearingMotionBlur && (te === u.bufferContexts[o.MOTIONBLUR_BUFFER_NODE] || te === u.bufferContexts[o.MOTIONBLUR_BUFFER_DRAG]) ? (ve = {
      x: T.x * d,
      y: T.y * d
    }, oe = b * d, ne = o.canvasWidth * d, ue = o.canvasHeight * d) : (ve = C, oe = w, ne = o.canvasWidth, ue = o.canvasHeight), te.setTransform(1, 0, 0, 1, 0, 0), ee === "motionBlur" ? B(te, 0, 0, ne, ue) : !e && (ee === void 0 || ee) && te.clearRect(0, 0, ne, ue), t || (te.translate(ve.x, ve.y), te.scale(oe, oe)), i && te.translate(i.x, i.y), n && te.scale(n, n);
  }
  if (f || (o.textureDrawLastFrame = !1), f) {
    if (o.textureDrawLastFrame = !0, !o.textureCache) {
      o.textureCache = {}, o.textureCache.bb = l.mutableElements().boundingBox(), o.textureCache.texture = o.data.bufferCanvases[o.TEXTURE_BUFFER];
      var M = o.data.bufferContexts[o.TEXTURE_BUFFER];
      M.setTransform(1, 0, 0, 1, 0, 0), M.clearRect(0, 0, o.canvasWidth * o.textureMult, o.canvasHeight * o.textureMult), o.render({
        forcedContext: M,
        drawOnlyNodeLayer: !0,
        forcedPxRatio: s * o.textureMult
      });
      var x = o.textureCache.viewport = {
        zoom: l.zoom(),
        pan: l.pan(),
        width: o.canvasWidth,
        height: o.canvasHeight
      };
      x.mpan = {
        x: (0 - x.pan.x) / x.zoom,
        y: (0 - x.pan.y) / x.zoom
      };
    }
    v[o.DRAG] = !1, v[o.NODE] = !1;
    var L = u.contexts[o.NODE], O = o.textureCache.texture, x = o.textureCache.viewport;
    L.setTransform(1, 0, 0, 1, 0, 0), c ? B(L, 0, 0, x.width, x.height) : L.clearRect(0, 0, x.width, x.height);
    var A = y.core("outside-texture-bg-color").value, R = y.core("outside-texture-bg-opacity").value;
    o.colorFillStyle(L, A[0], A[1], A[2], R), L.fillRect(0, 0, x.width, x.height);
    var b = l.zoom();
    k(L, !1), L.clearRect(x.mpan.x, x.mpan.y, x.width / x.zoom / s, x.height / x.zoom / s), L.drawImage(O, x.mpan.x, x.mpan.y, x.width / x.zoom / s, x.height / x.zoom / s);
  } else
    o.textureOnViewport && !e && (o.textureCache = null);
  var z = l.extent(), F = o.pinching || o.hoverData.dragging || o.swipePanning || o.data.wheelZooming || o.hoverData.draggingEles || o.cy.animated(), q = o.hideEdgesOnViewport && F, N = [];
  if (N[o.NODE] = !v[o.NODE] && c && !o.clearedForMotionBlur[o.NODE] || o.clearingMotionBlur, N[o.NODE] && (o.clearedForMotionBlur[o.NODE] = !0), N[o.DRAG] = !v[o.DRAG] && c && !o.clearedForMotionBlur[o.DRAG] || o.clearingMotionBlur, N[o.DRAG] && (o.clearedForMotionBlur[o.DRAG] = !0), v[o.NODE] || t || a || N[o.NODE]) {
    var V = c && !N[o.NODE] && d !== 1, L = e || (V ? o.data.bufferContexts[o.MOTIONBLUR_BUFFER_NODE] : u.contexts[o.NODE]), Y = c && !V ? "motionBlur" : void 0;
    k(L, Y), q ? o.drawCachedNodes(L, P.nondrag, s, z) : o.drawLayeredElements(L, P.nondrag, s, z), o.debug && o.drawDebugPoints(L, P.nondrag), !t && !c && (v[o.NODE] = !1);
  }
  if (!a && (v[o.DRAG] || t || N[o.DRAG])) {
    var V = c && !N[o.DRAG] && d !== 1, L = e || (V ? o.data.bufferContexts[o.MOTIONBLUR_BUFFER_DRAG] : u.contexts[o.DRAG]);
    k(L, c && !V ? "motionBlur" : void 0), q ? o.drawCachedNodes(L, P.drag, s, z) : o.drawCachedElements(L, P.drag, s, z), o.debug && o.drawDebugPoints(L, P.drag), !t && !c && (v[o.DRAG] = !1);
  }
  if (o.showFps || !a && v[o.SELECT_BOX] && !t) {
    var L = e || u.contexts[o.SELECT_BOX];
    if (k(L), o.selection[4] == 1 && (o.hoverData.selecting || o.touchData.selecting)) {
      var b = o.cy.zoom(), U = y.core("selection-box-border-width").value / b;
      L.lineWidth = U, L.fillStyle = "rgba(" + y.core("selection-box-color").value[0] + "," + y.core("selection-box-color").value[1] + "," + y.core("selection-box-color").value[2] + "," + y.core("selection-box-opacity").value + ")", L.fillRect(o.selection[0], o.selection[1], o.selection[2] - o.selection[0], o.selection[3] - o.selection[1]), U > 0 && (L.strokeStyle = "rgba(" + y.core("selection-box-border-color").value[0] + "," + y.core("selection-box-border-color").value[1] + "," + y.core("selection-box-border-color").value[2] + "," + y.core("selection-box-opacity").value + ")", L.strokeRect(o.selection[0], o.selection[1], o.selection[2] - o.selection[0], o.selection[3] - o.selection[1]));
    }
    if (u.bgActivePosistion && !o.hoverData.selecting) {
      var b = o.cy.zoom(), W = u.bgActivePosistion;
      L.fillStyle = "rgba(" + y.core("active-bg-color").value[0] + "," + y.core("active-bg-color").value[1] + "," + y.core("active-bg-color").value[2] + "," + y.core("active-bg-opacity").value + ")", L.beginPath(), L.arc(W.x, W.y, y.core("active-bg-size").pfValue / b, 0, 2 * Math.PI), L.fill();
    }
    var H = o.lastRedrawTime;
    if (o.showFps && H) {
      H = Math.round(H);
      var I = Math.round(1e3 / H);
      L.setTransform(1, 0, 0, 1, 0, 0), L.fillStyle = "rgba(255, 0, 0, 0.75)", L.strokeStyle = "rgba(255, 0, 0, 0.75)", L.lineWidth = 1, L.fillText("1 frame = " + H + " ms = " + I + " fps", 0, 20);
      var X = 60;
      L.strokeRect(0, 30, 250, 20), L.fillRect(0, 30, 250 * Math.min(I / X, 1), 20);
    }
    t || (v[o.SELECT_BOX] = !1);
  }
  if (c && d !== 1) {
    var Z = u.contexts[o.NODE], j = o.data.bufferCanvases[o.MOTIONBLUR_BUFFER_NODE], re = u.contexts[o.DRAG], de = o.data.bufferCanvases[o.MOTIONBLUR_BUFFER_DRAG], he = function(ee, ve, oe) {
      ee.setTransform(1, 0, 0, 1, 0, 0), oe || !p ? ee.clearRect(0, 0, o.canvasWidth, o.canvasHeight) : B(ee, 0, 0, o.canvasWidth, o.canvasHeight);
      var ne = d;
      ee.drawImage(
        ve,
        // img
        0,
        0,
        // sx, sy
        o.canvasWidth * ne,
        o.canvasHeight * ne,
        // sw, sh
        0,
        0,
        // x, y
        o.canvasWidth,
        o.canvasHeight
        // w, h
      );
    };
    (v[o.NODE] || N[o.NODE]) && (he(Z, j, N[o.NODE]), v[o.NODE] = !1), (v[o.DRAG] || N[o.DRAG]) && (he(re, de, N[o.DRAG]), v[o.DRAG] = !1);
  }
  o.prevViewport = x, o.clearingMotionBlur && (o.clearingMotionBlur = !1, o.motionBlurCleared = !0, o.motionBlur = !0), c && (o.motionBlurTimeout = setTimeout(function() {
    o.motionBlurTimeout = null, o.clearedForMotionBlur[o.NODE] = !1, o.clearedForMotionBlur[o.DRAG] = !1, o.motionBlur = !1, o.clearingMotionBlur = !f, o.mbFrames = 0, v[o.NODE] = !0, v[o.DRAG] = !0, o.redraw();
  }, Nm)), e || l.emit("render");
};
var Xr = {};
Xr.drawPolygonPath = function(r, e, t, a, n, i) {
  var o = a / 2, s = n / 2;
  r.beginPath && r.beginPath(), r.moveTo(e + o * i[0], t + s * i[1]);
  for (var l = 1; l < i.length / 2; l++)
    r.lineTo(e + o * i[l * 2], t + s * i[l * 2 + 1]);
  r.closePath();
};
Xr.drawRoundPolygonPath = function(r, e, t, a, n, i) {
  var o = a / 2, s = n / 2, l = ei(a, n);
  r.beginPath && r.beginPath();
  for (var u = 0; u < i.length / 4; u++) {
    var v = void 0, f = void 0;
    u === 0 ? v = i.length - 2 : v = u * 4 - 2, f = u * 4 + 2;
    var c = e + o * i[u * 4], d = t + s * i[u * 4 + 1], h = -i[v] * i[f] - i[v + 1] * i[f + 1], g = l / Math.tan(Math.acos(h) / 2), m = c - g * i[v], p = d - g * i[v + 1], y = c + g * i[f], b = d + g * i[f + 1];
    u === 0 ? r.moveTo(m, p) : r.lineTo(m, p), r.arcTo(c, d, y, b, l);
  }
  r.closePath();
};
Xr.drawRoundRectanglePath = function(r, e, t, a, n) {
  var i = a / 2, o = n / 2, s = va(a, n);
  r.beginPath && r.beginPath(), r.moveTo(e, t - o), r.arcTo(e + i, t - o, e + i, t, s), r.arcTo(e + i, t + o, e, t + o, s), r.arcTo(e - i, t + o, e - i, t, s), r.arcTo(e - i, t - o, e, t - o, s), r.lineTo(e, t - o), r.closePath();
};
Xr.drawBottomRoundRectanglePath = function(r, e, t, a, n) {
  var i = a / 2, o = n / 2, s = va(a, n);
  r.beginPath && r.beginPath(), r.moveTo(e, t - o), r.lineTo(e + i, t - o), r.lineTo(e + i, t), r.arcTo(e + i, t + o, e, t + o, s), r.arcTo(e - i, t + o, e - i, t, s), r.lineTo(e - i, t - o), r.lineTo(e, t - o), r.closePath();
};
Xr.drawCutRectanglePath = function(r, e, t, a, n) {
  var i = a / 2, o = n / 2, s = fs();
  r.beginPath && r.beginPath(), r.moveTo(e - i + s, t - o), r.lineTo(e + i - s, t - o), r.lineTo(e + i, t - o + s), r.lineTo(e + i, t + o - s), r.lineTo(e + i - s, t + o), r.lineTo(e - i + s, t + o), r.lineTo(e - i, t + o - s), r.lineTo(e - i, t - o + s), r.closePath();
};
Xr.drawBarrelPath = function(r, e, t, a, n) {
  var i = a / 2, o = n / 2, s = e - i, l = e + i, u = t - o, v = t + o, f = Ln(a, n), c = f.widthOffset, d = f.heightOffset, h = f.ctrlPtOffsetPct * c;
  r.beginPath && r.beginPath(), r.moveTo(s, u + d), r.lineTo(s, v - d), r.quadraticCurveTo(s + h, v, s + c, v), r.lineTo(l - c, v), r.quadraticCurveTo(l - h, v, l, v - d), r.lineTo(l, u + d), r.quadraticCurveTo(l - h, u, l - c, u), r.lineTo(s + c, u), r.quadraticCurveTo(s + h, u, s, u + d), r.closePath();
};
var Bo = Math.sin(0), Lo = Math.cos(0), Fn = {}, $n = {}, iu = Math.PI / 40;
for (var dt = 0 * Math.PI; dt < 2 * Math.PI; dt += iu)
  Fn[dt] = Math.sin(dt), $n[dt] = Math.cos(dt);
Xr.drawEllipsePath = function(r, e, t, a, n) {
  if (r.beginPath && r.beginPath(), r.ellipse)
    r.ellipse(e, t, a / 2, n / 2, 0, 0, 2 * Math.PI);
  else
    for (var i, o, s = a / 2, l = n / 2, u = 0 * Math.PI; u < 2 * Math.PI; u += iu)
      i = e - s * Fn[u] * Bo + s * $n[u] * Lo, o = t + l * $n[u] * Bo + l * Fn[u] * Lo, u === 0 ? r.moveTo(i, o) : r.lineTo(i, o);
  r.closePath();
};
var ga = {};
ga.createBuffer = function(r, e) {
  var t = document.createElement("canvas");
  return t.width = r, t.height = e, [t, t.getContext("2d")];
};
ga.bufferCanvasImage = function(r) {
  var e = this.cy, t = e.mutableElements(), a = t.boundingBox(), n = this.findContainerClientCoords(), i = r.full ? Math.ceil(a.w) : n[2], o = r.full ? Math.ceil(a.h) : n[3], s = ae(r.maxWidth) || ae(r.maxHeight), l = this.getPixelRatio(), u = 1;
  if (r.scale !== void 0)
    i *= r.scale, o *= r.scale, u = r.scale;
  else if (s) {
    var v = 1 / 0, f = 1 / 0;
    ae(r.maxWidth) && (v = u * r.maxWidth / i), ae(r.maxHeight) && (f = u * r.maxHeight / o), u = Math.min(v, f), i *= u, o *= u;
  }
  s || (i *= l, o *= l, u *= l);
  var c = document.createElement("canvas");
  c.width = i, c.height = o, c.style.width = i + "px", c.style.height = o + "px";
  var d = c.getContext("2d");
  if (i > 0 && o > 0) {
    d.clearRect(0, 0, i, o), d.globalCompositeOperation = "source-over";
    var h = this.getCachedZSortedEles();
    if (r.full)
      d.translate(-a.x1 * u, -a.y1 * u), d.scale(u, u), this.drawElements(d, h), d.scale(1 / u, 1 / u), d.translate(a.x1 * u, a.y1 * u);
    else {
      var g = e.pan(), m = {
        x: g.x * u,
        y: g.y * u
      };
      u *= e.zoom(), d.translate(m.x, m.y), d.scale(u, u), this.drawElements(d, h), d.scale(1 / u, 1 / u), d.translate(-m.x, -m.y);
    }
    r.bg && (d.globalCompositeOperation = "destination-over", d.fillStyle = r.bg, d.rect(0, 0, i, o), d.fill());
  }
  return c;
};
function Fm(r, e) {
  for (var t = atob(r), a = new ArrayBuffer(t.length), n = new Uint8Array(a), i = 0; i < t.length; i++)
    n[i] = t.charCodeAt(i);
  return new Blob([a], {
    type: e
  });
}
function Mo(r) {
  var e = r.indexOf(",");
  return r.substr(e + 1);
}
function ou(r, e, t) {
  var a = function() {
    return e.toDataURL(t, r.quality);
  };
  switch (r.output) {
    case "blob-promise":
      return new Pt(function(n, i) {
        try {
          e.toBlob(function(o) {
            o != null ? n(o) : i(new Error("`canvas.toBlob()` sent a null value in its callback"));
          }, t, r.quality);
        } catch (o) {
          i(o);
        }
      });
    case "blob":
      return Fm(Mo(a()), t);
    case "base64":
      return Mo(a());
    case "base64uri":
    default:
      return a();
  }
}
ga.png = function(r) {
  return ou(r, this.bufferCanvasImage(r), "image/png");
};
ga.jpg = function(r) {
  return ou(r, this.bufferCanvasImage(r), "image/jpeg");
};
var su = {};
su.nodeShapeImpl = function(r, e, t, a, n, i, o) {
  switch (r) {
    case "ellipse":
      return this.drawEllipsePath(e, t, a, n, i);
    case "polygon":
      return this.drawPolygonPath(e, t, a, n, i, o);
    case "round-polygon":
      return this.drawRoundPolygonPath(e, t, a, n, i, o);
    case "roundrectangle":
    case "round-rectangle":
      return this.drawRoundRectanglePath(e, t, a, n, i);
    case "cutrectangle":
    case "cut-rectangle":
      return this.drawCutRectanglePath(e, t, a, n, i);
    case "bottomroundrectangle":
    case "bottom-round-rectangle":
      return this.drawBottomRoundRectanglePath(e, t, a, n, i);
    case "barrel":
      return this.drawBarrelPath(e, t, a, n, i);
  }
};
var $m = uu, Se = uu.prototype;
Se.CANVAS_LAYERS = 3;
Se.SELECT_BOX = 0;
Se.DRAG = 1;
Se.NODE = 2;
Se.BUFFER_COUNT = 3;
Se.TEXTURE_BUFFER = 0;
Se.MOTIONBLUR_BUFFER_NODE = 1;
Se.MOTIONBLUR_BUFFER_DRAG = 2;
function uu(r) {
  var e = this;
  e.data = {
    canvases: new Array(Se.CANVAS_LAYERS),
    contexts: new Array(Se.CANVAS_LAYERS),
    canvasNeedsRedraw: new Array(Se.CANVAS_LAYERS),
    bufferCanvases: new Array(Se.BUFFER_COUNT),
    bufferContexts: new Array(Se.CANVAS_LAYERS)
  };
  var t = "-webkit-tap-highlight-color", a = "rgba(0,0,0,0)";
  e.data.canvasContainer = document.createElement("div");
  var n = e.data.canvasContainer.style;
  e.data.canvasContainer.style[t] = a, n.position = "relative", n.zIndex = "0", n.overflow = "hidden";
  var i = r.cy.container();
  i.appendChild(e.data.canvasContainer), i.style[t] = a;
  var o = {
    "-webkit-user-select": "none",
    "-moz-user-select": "-moz-none",
    "user-select": "none",
    "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
    "outline-style": "none"
  };
  xd() && (o["-ms-touch-action"] = "none", o["touch-action"] = "none");
  for (var s = 0; s < Se.CANVAS_LAYERS; s++) {
    var l = e.data.canvases[s] = document.createElement("canvas");
    e.data.contexts[s] = l.getContext("2d"), Object.keys(o).forEach(function(H) {
      l.style[H] = o[H];
    }), l.style.position = "absolute", l.setAttribute("data-id", "layer" + s), l.style.zIndex = String(Se.CANVAS_LAYERS - s), e.data.canvasContainer.appendChild(l), e.data.canvasNeedsRedraw[s] = !1;
  }
  e.data.topCanvas = e.data.canvases[0], e.data.canvases[Se.NODE].setAttribute("data-id", "layer" + Se.NODE + "-node"), e.data.canvases[Se.SELECT_BOX].setAttribute("data-id", "layer" + Se.SELECT_BOX + "-selectbox"), e.data.canvases[Se.DRAG].setAttribute("data-id", "layer" + Se.DRAG + "-drag");
  for (var s = 0; s < Se.BUFFER_COUNT; s++)
    e.data.bufferCanvases[s] = document.createElement("canvas"), e.data.bufferContexts[s] = e.data.bufferCanvases[s].getContext("2d"), e.data.bufferCanvases[s].style.position = "absolute", e.data.bufferCanvases[s].setAttribute("data-id", "buffer" + s), e.data.bufferCanvases[s].style.zIndex = String(-s - 1), e.data.bufferCanvases[s].style.visibility = "hidden";
  e.pathsEnabled = !0;
  var u = ur(), v = function(I) {
    return {
      x: (I.x1 + I.x2) / 2,
      y: (I.y1 + I.y2) / 2
    };
  }, f = function(I) {
    return {
      x: -I.w / 2,
      y: -I.h / 2
    };
  }, c = function(I) {
    var X = I[0]._private, Z = X.oldBackgroundTimestamp === X.backgroundTimestamp;
    return !Z;
  }, d = function(I) {
    return I[0]._private.nodeKey;
  }, h = function(I) {
    return I[0]._private.labelStyleKey;
  }, g = function(I) {
    return I[0]._private.sourceLabelStyleKey;
  }, m = function(I) {
    return I[0]._private.targetLabelStyleKey;
  }, p = function(I, X, Z, j, re) {
    return e.drawElement(I, X, Z, !1, !1, re);
  }, y = function(I, X, Z, j, re) {
    return e.drawElementText(I, X, Z, j, "main", re);
  }, b = function(I, X, Z, j, re) {
    return e.drawElementText(I, X, Z, j, "source", re);
  }, w = function(I, X, Z, j, re) {
    return e.drawElementText(I, X, Z, j, "target", re);
  }, T = function(I) {
    return I.boundingBox(), I[0]._private.bodyBounds;
  }, C = function(I) {
    return I.boundingBox(), I[0]._private.labelBounds.main || u;
  }, x = function(I) {
    return I.boundingBox(), I[0]._private.labelBounds.source || u;
  }, D = function(I) {
    return I.boundingBox(), I[0]._private.labelBounds.target || u;
  }, E = function(I, X) {
    return X;
  }, P = function(I) {
    return v(T(I));
  }, B = function(I, X, Z) {
    var j = I ? I + "-" : "";
    return {
      x: X.x + Z.pstyle(j + "text-margin-x").pfValue,
      y: X.y + Z.pstyle(j + "text-margin-y").pfValue
    };
  }, k = function(I, X, Z) {
    var j = I[0]._private.rscratch;
    return {
      x: j[X],
      y: j[Z]
    };
  }, M = function(I) {
    return B("", k(I, "labelX", "labelY"), I);
  }, L = function(I) {
    return B("source", k(I, "sourceLabelX", "sourceLabelY"), I);
  }, O = function(I) {
    return B("target", k(I, "targetLabelX", "targetLabelY"), I);
  }, A = function(I) {
    return f(T(I));
  }, R = function(I) {
    return f(x(I));
  }, z = function(I) {
    return f(D(I));
  }, F = function(I) {
    var X = C(I), Z = f(C(I));
    if (I.isNode()) {
      switch (I.pstyle("text-halign").value) {
        case "left":
          Z.x = -X.w;
          break;
        case "right":
          Z.x = 0;
          break;
      }
      switch (I.pstyle("text-valign").value) {
        case "top":
          Z.y = -X.h;
          break;
        case "bottom":
          Z.y = 0;
          break;
      }
    }
    return Z;
  }, q = e.data.eleTxrCache = new Wt(e, {
    getKey: d,
    doesEleInvalidateKey: c,
    drawElement: p,
    getBoundingBox: T,
    getRotationPoint: P,
    getRotationOffset: A,
    allowEdgeTxrCaching: !1,
    allowParentTxrCaching: !1
  }), N = e.data.lblTxrCache = new Wt(e, {
    getKey: h,
    drawElement: y,
    getBoundingBox: C,
    getRotationPoint: M,
    getRotationOffset: F,
    isVisible: E
  }), V = e.data.slbTxrCache = new Wt(e, {
    getKey: g,
    drawElement: b,
    getBoundingBox: x,
    getRotationPoint: L,
    getRotationOffset: R,
    isVisible: E
  }), Y = e.data.tlbTxrCache = new Wt(e, {
    getKey: m,
    drawElement: w,
    getBoundingBox: D,
    getRotationPoint: O,
    getRotationOffset: z,
    isVisible: E
  }), U = e.data.lyrTxrCache = new ru(e);
  e.onUpdateEleCalcs(function(I, X) {
    q.invalidateElements(X), N.invalidateElements(X), V.invalidateElements(X), Y.invalidateElements(X), U.invalidateElements(X);
    for (var Z = 0; Z < X.length; Z++) {
      var j = X[Z]._private;
      j.oldBackgroundTimestamp = j.backgroundTimestamp;
    }
  });
  var W = function(I) {
    for (var X = 0; X < I.length; X++)
      U.enqueueElementRefinement(I[X].ele);
  };
  q.onDequeue(W), N.onDequeue(W), V.onDequeue(W), Y.onDequeue(W);
}
Se.redrawHint = function(r, e) {
  var t = this;
  switch (r) {
    case "eles":
      t.data.canvasNeedsRedraw[Se.NODE] = e;
      break;
    case "drag":
      t.data.canvasNeedsRedraw[Se.DRAG] = e;
      break;
    case "select":
      t.data.canvasNeedsRedraw[Se.SELECT_BOX] = e;
      break;
  }
};
var Vm = typeof Path2D < "u";
Se.path2dEnabled = function(r) {
  if (r === void 0)
    return this.pathsEnabled;
  this.pathsEnabled = !!r;
};
Se.usePaths = function() {
  return Vm && this.pathsEnabled;
};
Se.setImgSmoothing = function(r, e) {
  r.imageSmoothingEnabled != null ? r.imageSmoothingEnabled = e : (r.webkitImageSmoothingEnabled = e, r.mozImageSmoothingEnabled = e, r.msImageSmoothingEnabled = e);
};
Se.getImgSmoothing = function(r) {
  return r.imageSmoothingEnabled != null ? r.imageSmoothingEnabled : r.webkitImageSmoothingEnabled || r.mozImageSmoothingEnabled || r.msImageSmoothingEnabled;
};
Se.makeOffscreenCanvas = function(r, e) {
  var t;
  return (typeof OffscreenCanvas > "u" ? "undefined" : qe(OffscreenCanvas)) !== "undefined" ? t = new OffscreenCanvas(r, e) : (t = document.createElement("canvas"), t.width = r, t.height = e), t;
};
[tu, Dr, Rr, vi, ot, Rt, vr, Xr, ga, su].forEach(function(r) {
  ce(Se, r);
});
var qm = [{
  name: "null",
  impl: Ys
}, {
  name: "base",
  impl: js
}, {
  name: "canvas",
  impl: $m
}], Hm = [{
  type: "layout",
  extensions: Zp
}, {
  type: "renderer",
  extensions: qm
}], lu = {}, vu = {};
function fu(r, e, t) {
  var a = t, n = function(D) {
    Pe("Can not register `" + e + "` for `" + r + "` since `" + D + "` already exists in the prototype and can not be overridden");
  };
  if (r === "core") {
    if (aa.prototype[e])
      return n(e);
    aa.prototype[e] = t;
  } else if (r === "collection") {
    if (Ue.prototype[e])
      return n(e);
    Ue.prototype[e] = t;
  } else if (r === "layout") {
    for (var i = function(D) {
      this.options = D, t.call(this, D), Ce(this._private) || (this._private = {}), this._private.cy = D.cy, this._private.listeners = [], this.createEmitter();
    }, o = i.prototype = Object.create(t.prototype), s = [], l = 0; l < s.length; l++) {
      var u = s[l];
      o[u] = o[u] || function() {
        return this;
      };
    }
    o.start && !o.run ? o.run = function() {
      return this.start(), this;
    } : !o.start && o.run && (o.start = function() {
      return this.run(), this;
    });
    var v = t.prototype.stop;
    o.stop = function() {
      var x = this.options;
      if (x && x.animate) {
        var D = this.animations;
        if (D)
          for (var E = 0; E < D.length; E++)
            D[E].stop();
      }
      return v ? v.call(this) : this.emit("layoutstop"), this;
    }, o.destroy || (o.destroy = function() {
      return this;
    }), o.cy = function() {
      return this._private.cy;
    };
    var f = function(D) {
      return D._private.cy;
    }, c = {
      addEventFields: function(D, E) {
        E.layout = D, E.cy = f(D), E.target = D;
      },
      bubble: function() {
        return !0;
      },
      parent: function(D) {
        return f(D);
      }
    };
    ce(o, {
      createEmitter: function() {
        return this._private.emitter = new an(c, this), this;
      },
      emitter: function() {
        return this._private.emitter;
      },
      on: function(D, E) {
        return this.emitter().on(D, E), this;
      },
      one: function(D, E) {
        return this.emitter().one(D, E), this;
      },
      once: function(D, E) {
        return this.emitter().one(D, E), this;
      },
      removeListener: function(D, E) {
        return this.emitter().removeListener(D, E), this;
      },
      removeAllListeners: function() {
        return this.emitter().removeAllListeners(), this;
      },
      emit: function(D, E) {
        return this.emitter().emit(D, E), this;
      }
    }), ke.eventAliasesOn(o), a = i;
  } else if (r === "renderer" && e !== "null" && e !== "base") {
    var d = cu("renderer", "base"), h = d.prototype, g = t, m = t.prototype, p = function() {
      d.apply(this, arguments), g.apply(this, arguments);
    }, y = p.prototype;
    for (var b in h) {
      var w = h[b], T = m[b] != null;
      if (T)
        return n(b);
      y[b] = w;
    }
    for (var C in m)
      y[C] = m[C];
    h.clientFunctions.forEach(function(x) {
      y[x] = y[x] || function() {
        Fe("Renderer does not implement `renderer." + x + "()` on its prototype");
      };
    }), a = p;
  } else if (r === "__proto__" || r === "constructor" || r === "prototype")
    return Fe(r + " is an illegal type to be registered, possibly lead to prototype pollutions");
  return Uo({
    map: lu,
    keys: [r, e],
    value: a
  });
}
function cu(r, e) {
  return Zo({
    map: lu,
    keys: [r, e]
  });
}
function Gm(r, e, t, a, n) {
  return Uo({
    map: vu,
    keys: [r, e, t, a],
    value: n
  });
}
function Km(r, e, t, a) {
  return Zo({
    map: vu,
    keys: [r, e, t, a]
  });
}
var Vn = function() {
  if (arguments.length === 2)
    return cu.apply(null, arguments);
  if (arguments.length === 3)
    return fu.apply(null, arguments);
  if (arguments.length === 4)
    return Km.apply(null, arguments);
  if (arguments.length === 5)
    return Gm.apply(null, arguments);
  Fe("Invalid extension access syntax");
};
aa.prototype.extension = Vn;
Hm.forEach(function(r) {
  r.extensions.forEach(function(e) {
    fu(r.type, e.name, e.impl);
  });
});
var du = function r() {
  if (!(this instanceof r))
    return new r();
  this.length = 0;
}, at = du.prototype;
at.instanceString = function() {
  return "stylesheet";
};
at.selector = function(r) {
  var e = this.length++;
  return this[e] = {
    selector: r,
    properties: []
  }, this;
};
at.css = function(r, e) {
  var t = this.length - 1;
  if (le(r))
    this[t].properties.push({
      name: r,
      value: e
    });
  else if (Ce(r))
    for (var a = r, n = Object.keys(a), i = 0; i < n.length; i++) {
      var o = n[i], s = a[o];
      if (s != null) {
        var l = Je.properties[o] || Je.properties[Ja(o)];
        if (l != null) {
          var u = l.name, v = s;
          this[t].properties.push({
            name: u,
            value: v
          });
        }
      }
    }
  return this;
};
at.style = at.css;
at.generateStyle = function(r) {
  var e = new Je(r);
  return this.appendToStyle(e);
};
at.appendToStyle = function(r) {
  for (var e = 0; e < this.length; e++) {
    var t = this[e], a = t.selector, n = t.properties;
    r.selector(a);
    for (var i = 0; i < n.length; i++) {
      var o = n[i];
      r.css(o.name, o.value);
    }
  }
  return r;
};
var Wm = "3.23.0", nt = function(e) {
  if (e === void 0 && (e = {}), Ce(e))
    return new aa(e);
  if (le(e))
    return Vn.apply(Vn, arguments);
};
nt.use = function(r) {
  var e = Array.prototype.slice.call(arguments, 1);
  return e.unshift(nt), r.apply(null, e), this;
};
nt.warnings = function(r) {
  return rs(r);
};
nt.version = Wm;
nt.stylesheet = nt.Stylesheet = du;
var Ao = nt;
const Xm = /* @__PURE__ */ Cu({
  __proto__: null,
  default: Ao
}, [Ao]);
export {
  Xm as c
};
//# sourceMappingURL=cytoscape.cjs-999c166d.js.map
