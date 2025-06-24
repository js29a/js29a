(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) l(a);
  new MutationObserver((a) => {
    for (const r of a) if (r.type === "childList") for (const o of r.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && l(o);
  }).observe(document, { childList: true, subtree: true });
  function n(a) {
    const r = {};
    return a.integrity && (r.integrity = a.integrity), a.referrerPolicy && (r.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? r.credentials = "include" : a.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
  }
  function l(a) {
    if (a.ep) return;
    a.ep = true;
    const r = n(a);
    fetch(a.href, r);
  }
})();
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Yu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const mt = {}, ca = [], On = () => {
}, Eg = () => false, Do = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Gu = (e) => e.startsWith("onUpdate:"), zt = Object.assign, Xu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ag = Object.prototype.hasOwnProperty, st = (e, t) => Ag.call(e, t), Ne = Array.isArray, da = (e) => kr(e) === "[object Map]", Tf = (e) => kr(e) === "[object Set]", Rg = (e) => kr(e) === "[object RegExp]", Qe = (e) => typeof e == "function", Rt = (e) => typeof e == "string", pl = (e) => typeof e == "symbol", xt = (e) => e !== null && typeof e == "object", Mf = (e) => (xt(e) || Qe(e)) && Qe(e.then) && Qe(e.catch), Ef = Object.prototype.toString, kr = (e) => Ef.call(e), $g = (e) => kr(e).slice(8, -1), Af = (e) => kr(e) === "[object Object]", Zu = (e) => Rt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Xa = /* @__PURE__ */ Yu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), No = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Pg = /-(\w)/g, bn = No((e) => e.replace(Pg, (t, n) => n ? n.toUpperCase() : "")), Lg = /\B([A-Z])/g, Wl = No((e) => e.replace(Lg, "-$1").toLowerCase()), Ho = No((e) => e.charAt(0).toUpperCase() + e.slice(1)), yi = No((e) => e ? `on${Ho(e)}` : ""), hl = (e, t) => !Object.is(e, t), Za = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, Rf = (e, t, n, l = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: l, value: n });
}, Bg = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Fg = (e) => {
  const t = Rt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Js;
const qr = () => Js || (Js = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function jo(e) {
  if (Ne(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const l = e[n], a = Rt(l) ? Ig(l) : jo(l);
      if (a) for (const r in a) t[r] = a[r];
    }
    return t;
  } else if (Rt(e) || xt(e)) return e;
}
const Og = /;(?![^(]*\))/g, Vg = /:([^]+)/, zg = /\/\*[^]*?\*\//g;
function Ig(e) {
  const t = {};
  return e.replace(zg, "").split(Og).forEach((n) => {
    if (n) {
      const l = n.split(Vg);
      l.length > 1 && (t[l[0].trim()] = l[1].trim());
    }
  }), t;
}
function Ju(e) {
  let t = "";
  if (Rt(e)) t = e;
  else if (Ne(e)) for (let n = 0; n < e.length; n++) {
    const l = Ju(e[n]);
    l && (t += l + " ");
  }
  else if (xt(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Dg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ng = /* @__PURE__ */ Yu(Dg);
function $f(e) {
  return !!e || e === "";
}
const Pf = (e) => !!(e && e.__v_isRef === true), Lf = (e) => Rt(e) ? e : e == null ? "" : Ne(e) || xt(e) && (e.toString === Ef || !Qe(e.toString)) ? Pf(e) ? Lf(e.value) : JSON.stringify(e, Bf, 2) : String(e), Bf = (e, t) => Pf(t) ? Bf(e, t.value) : da(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [l, a], r) => (n[pi(l, r) + " =>"] = a, n), {}) } : Tf(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => pi(n)) } : pl(t) ? pi(t) : xt(t) && !Ne(t) && !Af(t) ? String(t) : t, pi = (e, t = "") => {
  var n;
  return pl(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let an;
class Hg {
  constructor(t = false) {
    this.detached = t, this._active = true, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = an, !t && an && (this.index = (an.scopes || (an.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = true;
      let t, n;
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = false;
      let t, n;
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = an;
      try {
        return an = this, t();
      } finally {
        an = n;
      }
    }
  }
  on() {
    an = this;
  }
  off() {
    an = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = false;
      let n, l;
      for (n = 0, l = this.effects.length; n < l; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, l = this.cleanups.length; n < l; n++) this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, l = this.scopes.length; n < l; n++) this.scopes[n].stop(true);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const a = this.parent.scopes.pop();
        a && a !== this && (this.parent.scopes[this.index] = a, a.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function jg() {
  return an;
}
let bt;
const _i = /* @__PURE__ */ new WeakSet();
class Ff {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, an && an.active && an.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, _i.has(this) && (_i.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Vf(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, ec(this), zf(this);
    const t = bt, n = qn;
    bt = this, qn = true;
    try {
      return this.fn();
    } finally {
      If(this), bt = t, qn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) ns(t);
      this.deps = this.depsTail = void 0, ec(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? _i.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    du(this) && this.run();
  }
  get dirty() {
    return du(this);
  }
}
let Of = 0, Ja, er;
function Vf(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = er, er = e;
    return;
  }
  e.next = Ja, Ja = e;
}
function es() {
  Of++;
}
function ts() {
  if (--Of > 0) return;
  if (er) {
    let t = er;
    for (er = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ja; ) {
    let t = Ja;
    for (Ja = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
        t.trigger();
      } catch (l) {
        e || (e = l);
      }
      t = n;
    }
  }
  if (e) throw e;
}
function zf(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function If(e) {
  let t, n = e.depsTail, l = n;
  for (; l; ) {
    const a = l.prevDep;
    l.version === -1 ? (l === n && (n = a), ns(l), Ug(l)) : t = l, l.dep.activeLink = l.prevActiveLink, l.prevActiveLink = void 0, l = a;
  }
  e.deps = t, e.depsTail = n;
}
function du(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Df(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function Df(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === dr)) return;
  e.globalVersion = dr;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !du(e)) {
    e.flags &= -3;
    return;
  }
  const n = bt, l = qn;
  bt = e, qn = true;
  try {
    zf(e);
    const a = e.fn(e._value);
    (t.version === 0 || hl(a, e._value)) && (e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    bt = n, qn = l, If(e), e.flags &= -3;
  }
}
function ns(e, t = false) {
  const { dep: n, prevSub: l, nextSub: a } = e;
  if (l && (l.nextSub = a, e.prevSub = void 0), a && (a.prevSub = l, e.nextSub = void 0), n.subs === e && (n.subs = l, !l && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep) ns(r, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ug(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let qn = true;
const Nf = [];
function _l() {
  Nf.push(qn), qn = false;
}
function wl() {
  const e = Nf.pop();
  qn = e === void 0 ? true : e;
}
function ec(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = bt;
    bt = void 0;
    try {
      t();
    } finally {
      bt = n;
    }
  }
}
let dr = 0;
class Qg {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ls {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!bt || !qn || bt === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== bt) n = this.activeLink = new Qg(bt, this), bt.deps ? (n.prevDep = bt.depsTail, bt.depsTail.nextDep = n, bt.depsTail = n) : bt.deps = bt.depsTail = n, Hf(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const l = n.nextDep;
      l.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = l), n.prevDep = bt.depsTail, n.nextDep = void 0, bt.depsTail.nextDep = n, bt.depsTail = n, bt.deps === n && (bt.deps = l);
    }
    return n;
  }
  trigger(t) {
    this.version++, dr++, this.notify(t);
  }
  notify(t) {
    es();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      ts();
    }
  }
}
function Hf(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let l = t.deps; l; l = l.nextDep) Hf(l);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const fu = /* @__PURE__ */ new WeakMap(), zl = Symbol(""), vu = Symbol(""), fr = Symbol("");
function Kt(e, t, n) {
  if (qn && bt) {
    let l = fu.get(e);
    l || fu.set(e, l = /* @__PURE__ */ new Map());
    let a = l.get(n);
    a || (l.set(n, a = new ls()), a.map = l, a.key = n), a.track();
  }
}
function Wn(e, t, n, l, a, r) {
  const o = fu.get(e);
  if (!o) {
    dr++;
    return;
  }
  const i = (u) => {
    u && u.trigger();
  };
  if (es(), t === "clear") o.forEach(i);
  else {
    const u = Ne(e), c = u && Zu(n);
    if (u && n === "length") {
      const s = Number(l);
      o.forEach((f, m) => {
        (m === "length" || m === fr || !pl(m) && m >= s) && i(f);
      });
    } else switch ((n !== void 0 || o.has(void 0)) && i(o.get(n)), c && i(o.get(fr)), t) {
      case "add":
        u ? c && i(o.get("length")) : (i(o.get(zl)), da(e) && i(o.get(vu)));
        break;
      case "delete":
        u || (i(o.get(zl)), da(e) && i(o.get(vu)));
        break;
      case "set":
        da(e) && i(o.get(zl));
        break;
    }
  }
  ts();
}
function Zl(e) {
  const t = Ge(e);
  return t === e ? t : (Kt(t, "iterate", fr), Tn(e) ? t : t.map(Gt));
}
function as(e) {
  return Kt(e = Ge(e), "iterate", fr), e;
}
const Kg = { __proto__: null, [Symbol.iterator]() {
  return wi(this, Symbol.iterator, Gt);
}, concat(...e) {
  return Zl(this).concat(...e.map((t) => Ne(t) ? Zl(t) : t));
}, entries() {
  return wi(this, "entries", (e) => (e[1] = Gt(e[1]), e));
}, every(e, t) {
  return Dn(this, "every", e, t, void 0, arguments);
}, filter(e, t) {
  return Dn(this, "filter", e, t, (n) => n.map(Gt), arguments);
}, find(e, t) {
  return Dn(this, "find", e, t, Gt, arguments);
}, findIndex(e, t) {
  return Dn(this, "findIndex", e, t, void 0, arguments);
}, findLast(e, t) {
  return Dn(this, "findLast", e, t, Gt, arguments);
}, findLastIndex(e, t) {
  return Dn(this, "findLastIndex", e, t, void 0, arguments);
}, forEach(e, t) {
  return Dn(this, "forEach", e, t, void 0, arguments);
}, includes(...e) {
  return Si(this, "includes", e);
}, indexOf(...e) {
  return Si(this, "indexOf", e);
}, join(e) {
  return Zl(this).join(e);
}, lastIndexOf(...e) {
  return Si(this, "lastIndexOf", e);
}, map(e, t) {
  return Dn(this, "map", e, t, void 0, arguments);
}, pop() {
  return La(this, "pop");
}, push(...e) {
  return La(this, "push", e);
}, reduce(e, ...t) {
  return tc(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return tc(this, "reduceRight", e, t);
}, shift() {
  return La(this, "shift");
}, some(e, t) {
  return Dn(this, "some", e, t, void 0, arguments);
}, splice(...e) {
  return La(this, "splice", e);
}, toReversed() {
  return Zl(this).toReversed();
}, toSorted(e) {
  return Zl(this).toSorted(e);
}, toSpliced(...e) {
  return Zl(this).toSpliced(...e);
}, unshift(...e) {
  return La(this, "unshift", e);
}, values() {
  return wi(this, "values", Gt);
} };
function wi(e, t, n) {
  const l = as(e), a = l[t]();
  return l !== e && !Tn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.value && (r.value = n(r.value)), r;
  }), a;
}
const Wg = Array.prototype;
function Dn(e, t, n, l, a, r) {
  const o = as(e), i = o !== e && !Tn(e), u = o[t];
  if (u !== Wg[t]) {
    const f = u.apply(e, r);
    return i ? Gt(f) : f;
  }
  let c = n;
  o !== e && (i ? c = function(f, m) {
    return n.call(this, Gt(f), m, e);
  } : n.length > 2 && (c = function(f, m) {
    return n.call(this, f, m, e);
  }));
  const s = u.call(o, c, l);
  return i && a ? a(s) : s;
}
function tc(e, t, n, l) {
  const a = as(e);
  let r = n;
  return a !== e && (Tn(e) ? n.length > 3 && (r = function(o, i, u) {
    return n.call(this, o, i, u, e);
  }) : r = function(o, i, u) {
    return n.call(this, o, Gt(i), u, e);
  }), a[t](r, ...l);
}
function Si(e, t, n) {
  const l = Ge(e);
  Kt(l, "iterate", fr);
  const a = l[t](...n);
  return (a === -1 || a === false) && us(n[0]) ? (n[0] = Ge(n[0]), l[t](...n)) : a;
}
function La(e, t, n = []) {
  _l(), es();
  const l = Ge(e)[t].apply(e, n);
  return ts(), wl(), l;
}
const Yg = /* @__PURE__ */ Yu("__proto__,__v_isRef,__isVue"), jf = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(pl));
function Gg(e) {
  pl(e) || (e = String(e));
  const t = Ge(this);
  return Kt(t, "has", e), t.hasOwnProperty(e);
}
class Uf {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, l) {
    if (n === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive") return !a;
    if (n === "__v_isReadonly") return a;
    if (n === "__v_isShallow") return r;
    if (n === "__v_raw") return l === (a ? r ? o0 : Yf : r ? Wf : Kf).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(l) ? t : void 0;
    const o = Ne(t);
    if (!a) {
      let u;
      if (o && (u = Kg[n])) return u;
      if (n === "hasOwnProperty") return Gg;
    }
    const i = Reflect.get(t, n, pt(t) ? t : l);
    return (pl(n) ? jf.has(n) : Yg(n)) || (a || Kt(t, "get", n), r) ? i : pt(i) ? o && Zu(n) ? i : i.value : xt(i) ? a ? Gf(i) : Fn(i) : i;
  }
}
class Qf extends Uf {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, l, a) {
    let r = t[n];
    if (!this._isShallow) {
      const u = jl(r);
      if (!Tn(l) && !jl(l) && (r = Ge(r), l = Ge(l)), !Ne(t) && pt(r) && !pt(l)) return u ? false : (r.value = l, true);
    }
    const o = Ne(t) && Zu(n) ? Number(n) < t.length : st(t, n), i = Reflect.set(t, n, l, pt(t) ? t : a);
    return t === Ge(a) && (o ? hl(l, r) && Wn(t, "set", n, l) : Wn(t, "add", n, l)), i;
  }
  deleteProperty(t, n) {
    const l = st(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && l && Wn(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const l = Reflect.has(t, n);
    return (!pl(n) || !jf.has(n)) && Kt(t, "has", n), l;
  }
  ownKeys(t) {
    return Kt(t, "iterate", Ne(t) ? "length" : zl), Reflect.ownKeys(t);
  }
}
class Xg extends Uf {
  constructor(t = false) {
    super(true, t);
  }
  set(t, n) {
    return true;
  }
  deleteProperty(t, n) {
    return true;
  }
}
const Zg = new Qf(), Jg = new Xg(), e0 = new Qf(true);
const mu = (e) => e, Lr = (e) => Reflect.getPrototypeOf(e);
function t0(e, t, n) {
  return function(...l) {
    const a = this.__v_raw, r = Ge(a), o = da(r), i = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, c = a[e](...l), s = n ? mu : t ? hu : Gt;
    return !t && Kt(r, "iterate", u ? vu : zl), { next() {
      const { value: f, done: m } = c.next();
      return m ? { value: f, done: m } : { value: i ? [s(f[0]), s(f[1])] : s(f), done: m };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function Br(e) {
  return function(...t) {
    return e === "delete" ? false : e === "clear" ? void 0 : this;
  };
}
function n0(e, t) {
  const n = { get(a) {
    const r = this.__v_raw, o = Ge(r), i = Ge(a);
    e || (hl(a, i) && Kt(o, "get", a), Kt(o, "get", i));
    const { has: u } = Lr(o), c = t ? mu : e ? hu : Gt;
    if (u.call(o, a)) return c(r.get(a));
    if (u.call(o, i)) return c(r.get(i));
    r !== o && r.get(a);
  }, get size() {
    const a = this.__v_raw;
    return !e && Kt(Ge(a), "iterate", zl), Reflect.get(a, "size", a);
  }, has(a) {
    const r = this.__v_raw, o = Ge(r), i = Ge(a);
    return e || (hl(a, i) && Kt(o, "has", a), Kt(o, "has", i)), a === i ? r.has(a) : r.has(a) || r.has(i);
  }, forEach(a, r) {
    const o = this, i = o.__v_raw, u = Ge(i), c = t ? mu : e ? hu : Gt;
    return !e && Kt(u, "iterate", zl), i.forEach((s, f) => a.call(r, c(s), c(f), o));
  } };
  return zt(n, e ? { add: Br("add"), set: Br("set"), delete: Br("delete"), clear: Br("clear") } : { add(a) {
    !t && !Tn(a) && !jl(a) && (a = Ge(a));
    const r = Ge(this);
    return Lr(r).has.call(r, a) || (r.add(a), Wn(r, "add", a, a)), this;
  }, set(a, r) {
    !t && !Tn(r) && !jl(r) && (r = Ge(r));
    const o = Ge(this), { has: i, get: u } = Lr(o);
    let c = i.call(o, a);
    c || (a = Ge(a), c = i.call(o, a));
    const s = u.call(o, a);
    return o.set(a, r), c ? hl(r, s) && Wn(o, "set", a, r) : Wn(o, "add", a, r), this;
  }, delete(a) {
    const r = Ge(this), { has: o, get: i } = Lr(r);
    let u = o.call(r, a);
    u || (a = Ge(a), u = o.call(r, a)), i && i.call(r, a);
    const c = r.delete(a);
    return u && Wn(r, "delete", a, void 0), c;
  }, clear() {
    const a = Ge(this), r = a.size !== 0, o = a.clear();
    return r && Wn(a, "clear", void 0, void 0), o;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((a) => {
    n[a] = t0(a, e, t);
  }), n;
}
function rs(e, t) {
  const n = n0(e, t);
  return (l, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? l : Reflect.get(st(n, a) && a in l ? n : l, a, r);
}
const l0 = { get: rs(false, false) }, a0 = { get: rs(false, true) }, r0 = { get: rs(true, false) };
const Kf = /* @__PURE__ */ new WeakMap(), Wf = /* @__PURE__ */ new WeakMap(), Yf = /* @__PURE__ */ new WeakMap(), o0 = /* @__PURE__ */ new WeakMap();
function i0(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function u0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : i0($g(e));
}
function Fn(e) {
  return jl(e) ? e : is(e, false, Zg, l0, Kf);
}
function os(e) {
  return is(e, false, e0, a0, Wf);
}
function Gf(e) {
  return is(e, true, Jg, r0, Yf);
}
function is(e, t, n, l, a) {
  if (!xt(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const r = a.get(e);
  if (r) return r;
  const o = u0(e);
  if (o === 0) return e;
  const i = new Proxy(e, o === 2 ? l : n);
  return a.set(e, i), i;
}
function tr(e) {
  return jl(e) ? tr(e.__v_raw) : !!(e && e.__v_isReactive);
}
function jl(e) {
  return !!(e && e.__v_isReadonly);
}
function Tn(e) {
  return !!(e && e.__v_isShallow);
}
function us(e) {
  return e ? !!e.__v_raw : false;
}
function Ge(e) {
  const t = e && e.__v_raw;
  return t ? Ge(t) : e;
}
function Uo(e) {
  return !st(e, "__v_skip") && Object.isExtensible(e) && Rf(e, "__v_skip", true), e;
}
const Gt = (e) => xt(e) ? Fn(e) : e, hu = (e) => xt(e) ? Gf(e) : e;
function pt(e) {
  return e ? e.__v_isRef === true : false;
}
function K(e) {
  return Xf(e, false);
}
function s0(e) {
  return Xf(e, true);
}
function Xf(e, t) {
  return pt(e) ? e : new c0(e, t);
}
class c0 {
  constructor(t, n) {
    this.dep = new ls(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Ge(t), this._value = n ? t : Gt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, l = this.__v_isShallow || Tn(t) || jl(t);
    t = l ? t : Ge(t), hl(t, n) && (this._rawValue = t, this._value = l ? t : Gt(t), this.dep.trigger());
  }
}
function Ie(e) {
  return pt(e) ? e.value : e;
}
const d0 = { get: (e, t, n) => t === "__v_raw" ? e : Ie(Reflect.get(e, t, n)), set: (e, t, n, l) => {
  const a = e[t];
  return pt(a) && !pt(n) ? (a.value = n, true) : Reflect.set(e, t, n, l);
} };
function Zf(e) {
  return tr(e) ? e : new Proxy(e, d0);
}
class f0 {
  constructor(t, n, l) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ls(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = dr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = l;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && bt !== this) return Vf(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return Df(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function v0(e, t, n = false) {
  let l, a;
  return Qe(e) ? l = e : (l = e.get, a = e.set), new f0(l, a, n);
}
const Fr = {}, vo = /* @__PURE__ */ new WeakMap();
let $l;
function m0(e, t = false, n = $l) {
  if (n) {
    let l = vo.get(n);
    l || vo.set(n, l = []), l.push(e);
  }
}
function h0(e, t, n = mt) {
  const { immediate: l, deep: a, once: r, scheduler: o, augmentJob: i, call: u } = n, c = (b) => a ? b : Tn(b) || a === false || a === 0 ? Yn(b, 1) : Yn(b);
  let s, f, m, h, g = false, _ = false;
  if (pt(e) ? (f = () => e.value, g = Tn(e)) : tr(e) ? (f = () => c(e), g = true) : Ne(e) ? (_ = true, g = e.some((b) => tr(b) || Tn(b)), f = () => e.map((b) => {
    if (pt(b)) return b.value;
    if (tr(b)) return c(b);
    if (Qe(b)) return u ? u(b, 2) : b();
  })) : Qe(e) ? t ? f = u ? () => u(e, 2) : e : f = () => {
    if (m) {
      _l();
      try {
        m();
      } finally {
        wl();
      }
    }
    const b = $l;
    $l = s;
    try {
      return u ? u(e, 3, [h]) : e(h);
    } finally {
      $l = b;
    }
  } : f = On, t && a) {
    const b = f, x = a === true ? 1 / 0 : a;
    f = () => Yn(b(), x);
  }
  const w = jg(), k = () => {
    s.stop(), w && w.active && Xu(w.effects, s);
  };
  if (r && t) {
    const b = t;
    t = (...x) => {
      b(...x), k();
    };
  }
  let p = _ ? new Array(e.length).fill(Fr) : Fr;
  const y = (b) => {
    if (!(!(s.flags & 1) || !s.dirty && !b)) if (t) {
      const x = s.run();
      if (a || g || (_ ? x.some(($, F) => hl($, p[F])) : hl(x, p))) {
        m && m();
        const $ = $l;
        $l = s;
        try {
          const F = [x, p === Fr ? void 0 : _ && p[0] === Fr ? [] : p, h];
          u ? u(t, 3, F) : t(...F), p = x;
        } finally {
          $l = $;
        }
      }
    } else s.run();
  };
  return i && i(y), s = new Ff(f), s.scheduler = o ? () => o(y, false) : y, h = (b) => m0(b, false, s), m = s.onStop = () => {
    const b = vo.get(s);
    if (b) {
      if (u) u(b, 4);
      else for (const x of b) x();
      vo.delete(s);
    }
  }, t ? l ? y(true) : p = s.run() : o ? o(y.bind(null, true), true) : s.run(), k.pause = s.pause.bind(s), k.resume = s.resume.bind(s), k.stop = k, k;
}
function Yn(e, t = 1 / 0, n) {
  if (t <= 0 || !xt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
  if (n.add(e), t--, pt(e)) Yn(e.value, t, n);
  else if (Ne(e)) for (let l = 0; l < e.length; l++) Yn(e[l], t, n);
  else if (Tf(e) || da(e)) e.forEach((l) => {
    Yn(l, t, n);
  });
  else if (Af(e)) {
    for (const l in e) Yn(e[l], t, n);
    for (const l of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, l) && Yn(e[l], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Tr(e, t, n, l) {
  try {
    return l ? e(...l) : e();
  } catch (a) {
    Qo(a, t, n);
  }
}
function En(e, t, n, l) {
  if (Qe(e)) {
    const a = Tr(e, t, n, l);
    return a && Mf(a) && a.catch((r) => {
      Qo(r, t, n);
    }), a;
  }
  if (Ne(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++) a.push(En(e[r], t, n, l));
    return a;
  }
}
function Qo(e, t, n, l = true) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || mt;
  if (t) {
    let i = t.parent;
    const u = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; i; ) {
      const s = i.ec;
      if (s) {
        for (let f = 0; f < s.length; f++) if (s[f](e, u, c) === false) return;
      }
      i = i.parent;
    }
    if (r) {
      _l(), Tr(r, null, 10, [e, u, c]), wl();
      return;
    }
  }
  g0(e, n, a, l, o);
}
function g0(e, t, n, l = true, a = false) {
  if (a) throw e;
  console.error(e);
}
const Xt = [];
let Pn = -1;
const fa = [];
let sl = null, ia = 0;
const Jf = Promise.resolve();
let mo = null;
function We(e) {
  const t = mo || Jf;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function b0(e) {
  let t = Pn + 1, n = Xt.length;
  for (; t < n; ) {
    const l = t + n >>> 1, a = Xt[l], r = vr(a);
    r < e || r === e && a.flags & 2 ? t = l + 1 : n = l;
  }
  return t;
}
function ss(e) {
  if (!(e.flags & 1)) {
    const t = vr(e), n = Xt[Xt.length - 1];
    !n || !(e.flags & 2) && t >= vr(n) ? Xt.push(e) : Xt.splice(b0(t), 0, e), e.flags |= 1, ev();
  }
}
function ev() {
  mo || (mo = Jf.then(nv));
}
function y0(e) {
  Ne(e) ? fa.push(...e) : sl && e.id === -1 ? sl.splice(ia + 1, 0, e) : e.flags & 1 || (fa.push(e), e.flags |= 1), ev();
}
function nc(e, t, n = Pn + 1) {
  for (; n < Xt.length; n++) {
    const l = Xt[n];
    if (l && l.flags & 2) {
      if (e && l.id !== e.uid) continue;
      Xt.splice(n, 1), n--, l.flags & 4 && (l.flags &= -2), l(), l.flags & 4 || (l.flags &= -2);
    }
  }
}
function tv(e) {
  if (fa.length) {
    const t = [...new Set(fa)].sort((n, l) => vr(n) - vr(l));
    if (fa.length = 0, sl) {
      sl.push(...t);
      return;
    }
    for (sl = t, ia = 0; ia < sl.length; ia++) {
      const n = sl[ia];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    sl = null, ia = 0;
  }
}
const vr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function nv(e) {
  try {
    for (Pn = 0; Pn < Xt.length; Pn++) {
      const t = Xt[Pn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Tr(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Pn < Xt.length; Pn++) {
      const t = Xt[Pn];
      t && (t.flags &= -2);
    }
    Pn = -1, Xt.length = 0, tv(), mo = null, (Xt.length || fa.length) && nv();
  }
}
let tn = null, lv = null;
function ho(e) {
  const t = tn;
  return tn = e, lv = e && e.type.__scopeId || null, t;
}
function At(e, t = tn, n) {
  if (!t || e._n) return e;
  const l = (...a) => {
    l._d && hc(-1);
    const r = ho(t);
    let o;
    try {
      o = e(...a);
    } finally {
      ho(r), l._d && hc(1);
    }
    return o;
  };
  return l._n = true, l._c = true, l._d = true, l;
}
function sn(e, t) {
  if (tn === null) return e;
  const n = ei(tn), l = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, o, i, u = mt] = t[a];
    r && (Qe(r) && (r = { mounted: r, updated: r }), r.deep && Yn(o), l.push({ dir: r, instance: n, value: o, oldValue: void 0, arg: i, modifiers: u }));
  }
  return e;
}
function kl(e, t, n, l) {
  const a = e.dirs, r = t && t.dirs;
  for (let o = 0; o < a.length; o++) {
    const i = a[o];
    r && (i.oldValue = r[o].value);
    let u = i.dir[l];
    u && (_l(), En(u, n, 8, [e.el, i, e, t]), wl());
  }
}
const av = Symbol("_vte"), rv = (e) => e.__isTeleport, nr = (e) => e && (e.disabled || e.disabled === ""), lc = (e) => e && (e.defer || e.defer === ""), ac = (e) => typeof SVGElement < "u" && e instanceof SVGElement, rc = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, gu = (e, t) => {
  const n = e && e.to;
  return Rt(n) ? t ? t(n) : null : n;
}, ov = { name: "Teleport", __isTeleport: true, process(e, t, n, l, a, r, o, i, u, c) {
  const { mc: s, pc: f, pbc: m, o: { insert: h, querySelector: g, createText: _, createComment: w } } = c, k = nr(t.props);
  let { shapeFlag: p, children: y, dynamicChildren: b } = t;
  if (e == null) {
    const x = t.el = _(""), $ = t.anchor = _("");
    h(x, n, l), h($, n, l);
    const F = (B, P) => {
      p & 16 && (a && a.isCE && (a.ce._teleportTarget = B), s(y, B, P, a, r, o, i, u));
    }, D = () => {
      const B = t.target = gu(t.props, g), P = iv(B, t, _, h);
      B && (o !== "svg" && ac(B) ? o = "svg" : o !== "mathml" && rc(B) && (o = "mathml"), k || (F(B, P), to(t, false)));
    };
    k && (F(n, $), to(t, true)), lc(t.props) ? Bt(() => {
      D(), t.el.__isMounted = true;
    }, r) : D();
  } else {
    if (lc(t.props) && !e.el.__isMounted) {
      Bt(() => {
        ov.process(e, t, n, l, a, r, o, i, u, c), delete e.el.__isMounted;
      }, r);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const x = t.anchor = e.anchor, $ = t.target = e.target, F = t.targetAnchor = e.targetAnchor, D = nr(e.props), B = D ? n : $, P = D ? x : F;
    if (o === "svg" || ac($) ? o = "svg" : (o === "mathml" || rc($)) && (o = "mathml"), b ? (m(e.dynamicChildren, b, B, a, r, o, i), vs(e, t, true)) : u || f(e, t, B, P, a, r, o, i, false), k) D ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Or(t, n, x, c, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const I = t.target = gu(t.props, g);
      I && Or(t, I, null, c, 0);
    } else D && Or(t, $, F, c, 1);
    to(t, k);
  }
}, remove(e, t, n, { um: l, o: { remove: a } }, r) {
  const { shapeFlag: o, children: i, anchor: u, targetStart: c, targetAnchor: s, target: f, props: m } = e;
  if (f && (a(c), a(s)), r && a(u), o & 16) {
    const h = r || !nr(m);
    for (let g = 0; g < i.length; g++) {
      const _ = i[g];
      l(_, t, n, h, !!_.dynamicChildren);
    }
  }
}, move: Or, hydrate: p0 };
function Or(e, t, n, { o: { insert: l }, m: a }, r = 2) {
  r === 0 && l(e.targetAnchor, t, n);
  const { el: o, anchor: i, shapeFlag: u, children: c, props: s } = e, f = r === 2;
  if (f && l(o, t, n), (!f || nr(s)) && u & 16) for (let m = 0; m < c.length; m++) a(c[m], t, n, 2);
  f && l(i, t, n);
}
function p0(e, t, n, l, a, r, { o: { nextSibling: o, parentNode: i, querySelector: u, insert: c, createText: s } }, f) {
  const m = t.target = gu(t.props, u);
  if (m) {
    const h = nr(t.props), g = m._lpa || m.firstChild;
    if (t.shapeFlag & 16) if (h) t.anchor = f(o(e), t, i(e), n, l, a, r), t.targetStart = g, t.targetAnchor = g && o(g);
    else {
      t.anchor = o(e);
      let _ = g;
      for (; _; ) {
        if (_ && _.nodeType === 8) {
          if (_.data === "teleport start anchor") t.targetStart = _;
          else if (_.data === "teleport anchor") {
            t.targetAnchor = _, m._lpa = t.targetAnchor && o(t.targetAnchor);
            break;
          }
        }
        _ = o(_);
      }
      t.targetAnchor || iv(m, t, s, c), f(g && o(g), t, m, n, l, a, r);
    }
    to(t, h);
  }
  return t.anchor && o(t.anchor);
}
const _0 = ov;
function to(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let l, a;
    for (t ? (l = e.el, a = e.anchor) : (l = e.targetStart, a = e.targetAnchor); l && l !== a; ) l.nodeType === 1 && l.setAttribute("data-v-owner", n.uid), l = l.nextSibling;
    n.ut();
  }
}
function iv(e, t, n, l) {
  const a = t.targetStart = n(""), r = t.targetAnchor = n("");
  return a[av] = r, e && (l(a, e), l(r, e)), r;
}
const cl = Symbol("_leaveCb"), Vr = Symbol("_enterCb");
function uv() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return ft(() => {
    e.isMounted = true;
  }), Ke(() => {
    e.isUnmounting = true;
  }), e;
}
const dn = [Function, Array], sv = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: dn, onEnter: dn, onAfterEnter: dn, onEnterCancelled: dn, onBeforeLeave: dn, onLeave: dn, onAfterLeave: dn, onLeaveCancelled: dn, onBeforeAppear: dn, onAppear: dn, onAfterAppear: dn, onAppearCancelled: dn }, cv = (e) => {
  const t = e.subTree;
  return t.component ? cv(t.component) : t;
}, w0 = { name: "BaseTransition", props: sv, setup(e, { slots: t }) {
  const n = Se(), l = uv();
  return () => {
    const a = t.default && cs(t.default(), true);
    if (!a || !a.length) return;
    const r = dv(a), o = Ge(e), { mode: i } = o;
    if (l.isLeaving) return xi(r);
    const u = oc(r);
    if (!u) return xi(r);
    let c = mr(u, o, l, n, (f) => c = f);
    u.type !== Zt && yl(u, c);
    let s = n.subTree && oc(n.subTree);
    if (s && s.type !== Zt && !vl(u, s) && cv(n).type !== Zt) {
      let f = mr(s, o, l, n);
      if (yl(s, f), i === "out-in" && u.type !== Zt) return l.isLeaving = true, f.afterLeave = () => {
        l.isLeaving = false, n.job.flags & 8 || n.update(), delete f.afterLeave, s = void 0;
      }, xi(r);
      i === "in-out" && u.type !== Zt ? f.delayLeave = (m, h, g) => {
        const _ = fv(l, s);
        _[String(s.key)] = s, m[cl] = () => {
          h(), m[cl] = void 0, delete c.delayedLeave, s = void 0;
        }, c.delayedLeave = () => {
          g(), delete c.delayedLeave, s = void 0;
        };
      } : s = void 0;
    } else s && (s = void 0);
    return r;
  };
} };
function dv(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== Zt) {
      t = n;
      break;
    }
  }
  return t;
}
const S0 = w0;
function fv(e, t) {
  const { leavingVNodes: n } = e;
  let l = n.get(t.type);
  return l || (l = /* @__PURE__ */ Object.create(null), n.set(t.type, l)), l;
}
function mr(e, t, n, l, a) {
  const { appear: r, mode: o, persisted: i = false, onBeforeEnter: u, onEnter: c, onAfterEnter: s, onEnterCancelled: f, onBeforeLeave: m, onLeave: h, onAfterLeave: g, onLeaveCancelled: _, onBeforeAppear: w, onAppear: k, onAfterAppear: p, onAppearCancelled: y } = t, b = String(e.key), x = fv(n, e), $ = (B, P) => {
    B && En(B, l, 9, P);
  }, F = (B, P) => {
    const I = P[1];
    $(B, P), Ne(B) ? B.every((q) => q.length <= 1) && I() : B.length <= 1 && I();
  }, D = { mode: o, persisted: i, beforeEnter(B) {
    let P = u;
    if (!n.isMounted) if (r) P = w || u;
    else return;
    B[cl] && B[cl](true);
    const I = x[b];
    I && vl(e, I) && I.el[cl] && I.el[cl](), $(P, [B]);
  }, enter(B) {
    let P = c, I = s, q = f;
    if (!n.isMounted) if (r) P = k || c, I = p || s, q = y || f;
    else return;
    let M = false;
    const C = B[Vr] = (H) => {
      M || (M = true, H ? $(q, [B]) : $(I, [B]), D.delayedLeave && D.delayedLeave(), B[Vr] = void 0);
    };
    P ? F(P, [B, C]) : C();
  }, leave(B, P) {
    const I = String(e.key);
    if (B[Vr] && B[Vr](true), n.isUnmounting) return P();
    $(m, [B]);
    let q = false;
    const M = B[cl] = (C) => {
      q || (q = true, P(), C ? $(_, [B]) : $(g, [B]), B[cl] = void 0, x[I] === e && delete x[I]);
    };
    x[I] = e, h ? F(h, [B, M]) : M();
  }, clone(B) {
    const P = mr(B, t, n, l, a);
    return a && a(P), P;
  } };
  return D;
}
function xi(e) {
  if (Ko(e)) return e = Xn(e), e.children = null, e;
}
function oc(e) {
  if (!Ko(e)) return rv(e.type) && e.children ? dv(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && Qe(n.default)) return n.default();
  }
}
function yl(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, yl(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function cs(e, t = false, n) {
  let l = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const i = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === rn ? (o.patchFlag & 128 && a++, l = l.concat(cs(o.children, t, i))) : (t || o.type !== Zt) && l.push(i != null ? Xn(o, { key: i }) : o);
  }
  if (a > 1) for (let r = 0; r < l.length; r++) l[r].patchFlag = -2;
  return l;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ta(e, t) {
  return Qe(e) ? zt({ name: e.name }, t, { setup: e }) : e;
}
function vv(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function go(e, t, n, l, a = false) {
  if (Ne(e)) {
    e.forEach((g, _) => go(g, t && (Ne(t) ? t[_] : t), n, l, a));
    return;
  }
  if (va(l) && !a) {
    l.shapeFlag & 512 && l.type.__asyncResolved && l.component.subTree.component && go(e, t, n, l.component.subTree);
    return;
  }
  const r = l.shapeFlag & 4 ? ei(l.component) : l.el, o = a ? null : r, { i, r: u } = e, c = t && t.r, s = i.refs === mt ? i.refs = {} : i.refs, f = i.setupState, m = Ge(f), h = f === mt ? () => false : (g) => st(m, g);
  if (c != null && c !== u && (Rt(c) ? (s[c] = null, h(c) && (f[c] = null)) : pt(c) && (c.value = null)), Qe(u)) Tr(u, i, 12, [o, s]);
  else {
    const g = Rt(u), _ = pt(u);
    if (g || _) {
      const w = () => {
        if (e.f) {
          const k = g ? h(u) ? f[u] : s[u] : u.value;
          a ? Ne(k) && Xu(k, r) : Ne(k) ? k.includes(r) || k.push(r) : g ? (s[u] = [r], h(u) && (f[u] = s[u])) : (u.value = [r], e.k && (s[e.k] = u.value));
        } else g ? (s[u] = o, h(u) && (f[u] = o)) : _ && (u.value = o, e.k && (s[e.k] = o));
      };
      o ? (w.id = -1, Bt(w, n)) : w();
    }
  }
}
qr().requestIdleCallback;
qr().cancelIdleCallback;
const va = (e) => !!e.type.__asyncLoader, Ko = (e) => e.type.__isKeepAlive, x0 = { name: "KeepAlive", __isKeepAlive: true, props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] }, setup(e, { slots: t }) {
  const n = Se(), l = n.ctx;
  if (!l.renderer) return () => {
    const p = t.default && t.default();
    return p && p.length === 1 ? p[0] : p;
  };
  const a = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set();
  let o = null;
  const i = n.suspense, { renderer: { p: u, m: c, um: s, o: { createElement: f } } } = l, m = f("div");
  l.activate = (p, y, b, x, $) => {
    const F = p.component;
    c(p, y, b, 0, i), u(F.vnode, p, y, b, F, i, x, p.slotScopeIds, $), Bt(() => {
      F.isDeactivated = false, F.a && Za(F.a);
      const D = p.props && p.props.onVnodeMounted;
      D && vn(D, F.parent, p);
    }, i);
  }, l.deactivate = (p) => {
    const y = p.component;
    yo(y.m), yo(y.a), c(p, m, null, 1, i), Bt(() => {
      y.da && Za(y.da);
      const b = p.props && p.props.onVnodeUnmounted;
      b && vn(b, y.parent, p), y.isDeactivated = true;
    }, i);
  };
  function h(p) {
    Ci(p), s(p, n, i, true);
  }
  function g(p) {
    a.forEach((y, b) => {
      const x = Su(y.type);
      x && !p(x) && _(b);
    });
  }
  function _(p) {
    const y = a.get(p);
    y && (!o || !vl(y, o)) ? h(y) : o && Ci(o), a.delete(p), r.delete(p);
  }
  be(() => [e.include, e.exclude], ([p, y]) => {
    p && g((b) => Ua(p, b)), y && g((b) => !Ua(y, b));
  }, { flush: "post", deep: true });
  let w = null;
  const k = () => {
    w != null && (po(n.subTree.type) ? Bt(() => {
      a.set(w, zr(n.subTree));
    }, n.subTree.suspense) : a.set(w, zr(n.subTree)));
  };
  return ft(k), Go(k), Ke(() => {
    a.forEach((p) => {
      const { subTree: y, suspense: b } = n, x = zr(y);
      if (p.type === x.type && p.key === x.key) {
        Ci(x);
        const $ = x.component.da;
        $ && Bt($, b);
        return;
      }
      h(p);
    });
  }), () => {
    if (w = null, !t.default) return o = null;
    const p = t.default(), y = p[0];
    if (p.length > 1) return o = null, p;
    if (!gr(y) || !(y.shapeFlag & 4) && !(y.shapeFlag & 128)) return o = null, y;
    let b = zr(y);
    if (b.type === Zt) return o = null, b;
    const x = b.type, $ = Su(va(b) ? b.type.__asyncResolved || {} : x), { include: F, exclude: D, max: B } = e;
    if (F && (!$ || !Ua(F, $)) || D && $ && Ua(D, $)) return b.shapeFlag &= -257, o = b, y;
    const P = b.key == null ? x : b.key, I = a.get(P);
    return b.el && (b = Xn(b), y.shapeFlag & 128 && (y.ssContent = b)), w = P, I ? (b.el = I.el, b.component = I.component, b.transition && yl(b, b.transition), b.shapeFlag |= 512, r.delete(P), r.add(P)) : (r.add(P), B && r.size > parseInt(B, 10) && _(r.values().next().value)), b.shapeFlag |= 256, o = b, po(y.type) ? y : b;
  };
} }, mv = x0;
function Ua(e, t) {
  return Ne(e) ? e.some((n) => Ua(n, t)) : Rt(e) ? e.split(",").includes(t) : Rg(e) ? (e.lastIndex = 0, e.test(t)) : false;
}
function Sl(e, t) {
  hv(e, "a", t);
}
function Vn(e, t) {
  hv(e, "da", t);
}
function hv(e, t, n = Ht) {
  const l = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated) return;
      a = a.parent;
    }
    return e();
  });
  if (Wo(t, l, n), n) {
    let a = n.parent;
    for (; a && a.parent; ) Ko(a.parent.vnode) && C0(l, t, n, a), a = a.parent;
  }
}
function C0(e, t, n, l) {
  const a = Wo(t, e, l, true);
  Xo(() => {
    Xu(l[t], a);
  }, n);
}
function Ci(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function zr(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Wo(e, t, n = Ht, l = false) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      _l();
      const i = Mr(n), u = En(t, n, e, o);
      return i(), wl(), u;
    });
    return l ? a.unshift(r) : a.push(r), r;
  }
}
const Jn = (e) => (t, n = Ht) => {
  (!br || e === "sp") && Wo(e, (...l) => t(...l), n);
}, Yo = Jn("bm"), ft = Jn("m"), Ma = Jn("bu"), Go = Jn("u"), Ke = Jn("bum"), Xo = Jn("um"), k0 = Jn("sp"), q0 = Jn("rtg"), T0 = Jn("rtc");
function M0(e, t = Ht) {
  Wo("ec", e, t);
}
const gv = "components", E0 = "directives";
function ds(e, t) {
  return bv(gv, e, true, t) || e;
}
const A0 = Symbol.for("v-ndc");
function R0(e) {
  return bv(E0, e);
}
function bv(e, t, n = true, l = false) {
  const a = tn || Ht;
  if (a) {
    const r = a.type;
    if (e === gv) {
      const i = Su(r, false);
      if (i && (i === t || i === bn(t) || i === Ho(bn(t)))) return r;
    }
    const o = ic(a[e] || r[e], t) || ic(a.appContext[e], t);
    return !o && l ? r : o;
  }
}
function ic(e, t) {
  return e && (e[t] || e[bn(t)] || e[Ho(bn(t))]);
}
const bu = (e) => e ? Ov(e) ? ei(e) : bu(e.parent) : null, lr = zt(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => bu(e.parent), $root: (e) => bu(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => pv(e), $forceUpdate: (e) => e.f || (e.f = () => {
  ss(e.update);
}), $nextTick: (e) => e.n || (e.n = We.bind(e.proxy)), $watch: (e) => J0.bind(e) }), ki = (e, t) => e !== mt && !e.__isScriptSetup && st(e, t), $0 = { get({ _: e }, t) {
  if (t === "__v_skip") return true;
  const { ctx: n, setupState: l, data: a, props: r, accessCache: o, type: i, appContext: u } = e;
  let c;
  if (t[0] !== "$") {
    const h = o[t];
    if (h !== void 0) switch (h) {
      case 1:
        return l[t];
      case 2:
        return a[t];
      case 4:
        return n[t];
      case 3:
        return r[t];
    }
    else {
      if (ki(l, t)) return o[t] = 1, l[t];
      if (a !== mt && st(a, t)) return o[t] = 2, a[t];
      if ((c = e.propsOptions[0]) && st(c, t)) return o[t] = 3, r[t];
      if (n !== mt && st(n, t)) return o[t] = 4, n[t];
      yu && (o[t] = 0);
    }
  }
  const s = lr[t];
  let f, m;
  if (s) return t === "$attrs" && Kt(e.attrs, "get", ""), s(e);
  if ((f = i.__cssModules) && (f = f[t])) return f;
  if (n !== mt && st(n, t)) return o[t] = 4, n[t];
  if (m = u.config.globalProperties, st(m, t)) return m[t];
}, set({ _: e }, t, n) {
  const { data: l, setupState: a, ctx: r } = e;
  return ki(a, t) ? (a[t] = n, true) : l !== mt && st(l, t) ? (l[t] = n, true) : st(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (r[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: l, appContext: a, propsOptions: r } }, o) {
  let i;
  return !!n[o] || e !== mt && st(e, o) || ki(t, o) || (i = r[0]) && st(i, o) || st(l, o) || st(lr, o) || st(a.config.globalProperties, o);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : st(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function uc(e) {
  return Ne(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let yu = true;
function P0(e) {
  const t = pv(e), n = e.proxy, l = e.ctx;
  yu = false, t.beforeCreate && sc(t.beforeCreate, e, "bc");
  const { data: a, computed: r, methods: o, watch: i, provide: u, inject: c, created: s, beforeMount: f, mounted: m, beforeUpdate: h, updated: g, activated: _, deactivated: w, beforeDestroy: k, beforeUnmount: p, destroyed: y, unmounted: b, render: x, renderTracked: $, renderTriggered: F, errorCaptured: D, serverPrefetch: B, expose: P, inheritAttrs: I, components: q, directives: M, filters: C } = t;
  if (c && L0(c, l, null), o) for (const L in o) {
    const O = o[L];
    Qe(O) && (l[L] = O.bind(n));
  }
  if (a) {
    const L = a.call(n, n);
    xt(L) && (e.data = Fn(L));
  }
  if (yu = true, r) for (const L in r) {
    const O = r[L], U = Qe(O) ? O.bind(n, n) : Qe(O.get) ? O.get.bind(n, n) : On, ye = !Qe(O) && Qe(O.set) ? O.set.bind(n) : On, W = v({ get: U, set: ye });
    Object.defineProperty(l, L, { enumerable: true, configurable: true, get: () => W.value, set: (T) => W.value = T });
  }
  if (i) for (const L in i) yv(i[L], l, n, L);
  if (u) {
    const L = Qe(u) ? u.call(n) : u;
    Reflect.ownKeys(L).forEach((O) => {
      hn(O, L[O]);
    });
  }
  s && sc(s, e, "c");
  function Y(L, O) {
    Ne(O) ? O.forEach((U) => L(U.bind(n))) : O && L(O.bind(n));
  }
  if (Y(Yo, f), Y(ft, m), Y(Ma, h), Y(Go, g), Y(Sl, _), Y(Vn, w), Y(M0, D), Y(T0, $), Y(q0, F), Y(Ke, p), Y(Xo, b), Y(k0, B), Ne(P)) if (P.length) {
    const L = e.exposed || (e.exposed = {});
    P.forEach((O) => {
      Object.defineProperty(L, O, { get: () => n[O], set: (U) => n[O] = U });
    });
  } else e.exposed || (e.exposed = {});
  x && e.render === On && (e.render = x), I != null && (e.inheritAttrs = I), q && (e.components = q), M && (e.directives = M), B && vv(e);
}
function L0(e, t, n = On) {
  Ne(e) && (e = pu(e));
  for (const l in e) {
    const a = e[l];
    let r;
    xt(a) ? "default" in a ? r = Tt(a.from || l, a.default, true) : r = Tt(a.from || l) : r = Tt(a), pt(r) ? Object.defineProperty(t, l, { enumerable: true, configurable: true, get: () => r.value, set: (o) => r.value = o }) : t[l] = r;
  }
}
function sc(e, t, n) {
  En(Ne(e) ? e.map((l) => l.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function yv(e, t, n, l) {
  let a = l.includes(".") ? $v(n, l) : () => n[l];
  if (Rt(e)) {
    const r = t[e];
    Qe(r) && be(a, r);
  } else if (Qe(e)) be(a, e.bind(n));
  else if (xt(e)) if (Ne(e)) e.forEach((r) => yv(r, t, n, l));
  else {
    const r = Qe(e.handler) ? e.handler.bind(n) : t[e.handler];
    Qe(r) && be(a, r, e);
  }
}
function pv(e) {
  const t = e.type, { mixins: n, extends: l } = t, { mixins: a, optionsCache: r, config: { optionMergeStrategies: o } } = e.appContext, i = r.get(t);
  let u;
  return i ? u = i : !a.length && !n && !l ? u = t : (u = {}, a.length && a.forEach((c) => bo(u, c, o, true)), bo(u, t, o)), xt(t) && r.set(t, u), u;
}
function bo(e, t, n, l = false) {
  const { mixins: a, extends: r } = t;
  r && bo(e, r, n, true), a && a.forEach((o) => bo(e, o, n, true));
  for (const o in t) if (!(l && o === "expose")) {
    const i = B0[o] || n && n[o];
    e[o] = i ? i(e[o], t[o]) : t[o];
  }
  return e;
}
const B0 = { data: cc, props: dc, emits: dc, methods: Qa, computed: Qa, beforeCreate: Yt, created: Yt, beforeMount: Yt, mounted: Yt, beforeUpdate: Yt, updated: Yt, beforeDestroy: Yt, beforeUnmount: Yt, destroyed: Yt, unmounted: Yt, activated: Yt, deactivated: Yt, errorCaptured: Yt, serverPrefetch: Yt, components: Qa, directives: Qa, watch: O0, provide: cc, inject: F0 };
function cc(e, t) {
  return t ? e ? function() {
    return zt(Qe(e) ? e.call(this, this) : e, Qe(t) ? t.call(this, this) : t);
  } : t : e;
}
function F0(e, t) {
  return Qa(pu(e), pu(t));
}
function pu(e) {
  if (Ne(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Yt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Qa(e, t) {
  return e ? zt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function dc(e, t) {
  return e ? Ne(e) && Ne(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : zt(/* @__PURE__ */ Object.create(null), uc(e), uc(t ?? {})) : t;
}
function O0(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = zt(/* @__PURE__ */ Object.create(null), e);
  for (const l in t) n[l] = Yt(e[l], t[l]);
  return n;
}
function _v() {
  return { app: null, config: { isNativeTag: Eg, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let V0 = 0;
function z0(e, t) {
  return function(l, a = null) {
    Qe(l) || (l = zt({}, l)), a != null && !xt(a) && (a = null);
    const r = _v(), o = /* @__PURE__ */ new WeakSet(), i = [];
    let u = false;
    const c = r.app = { _uid: V0++, _component: l, _props: a, _container: null, _context: r, _instance: null, version: _b, get config() {
      return r.config;
    }, set config(s) {
    }, use(s, ...f) {
      return o.has(s) || (s && Qe(s.install) ? (o.add(s), s.install(c, ...f)) : Qe(s) && (o.add(s), s(c, ...f))), c;
    }, mixin(s) {
      return r.mixins.includes(s) || r.mixins.push(s), c;
    }, component(s, f) {
      return f ? (r.components[s] = f, c) : r.components[s];
    }, directive(s, f) {
      return f ? (r.directives[s] = f, c) : r.directives[s];
    }, mount(s, f, m) {
      if (!u) {
        const h = c._ceVNode || Je(l, a);
        return h.appContext = r, m === true ? m = "svg" : m === false && (m = void 0), e(h, s, m), u = true, c._container = s, s.__vue_app__ = c, ei(h.component);
      }
    }, onUnmount(s) {
      i.push(s);
    }, unmount() {
      u && (En(i, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
    }, provide(s, f) {
      return r.provides[s] = f, c;
    }, runWithContext(s) {
      const f = ma;
      ma = c;
      try {
        return s();
      } finally {
        ma = f;
      }
    } };
    return c;
  };
}
let ma = null;
function hn(e, t) {
  if (Ht) {
    let n = Ht.provides;
    const l = Ht.parent && Ht.parent.provides;
    l === n && (n = Ht.provides = Object.create(l)), n[e] = t;
  }
}
function Tt(e, t, n = false) {
  const l = Ht || tn;
  if (l || ma) {
    const a = ma ? ma._context.provides : l ? l.parent == null ? l.vnode.appContext && l.vnode.appContext.provides : l.parent.provides : void 0;
    if (a && e in a) return a[e];
    if (arguments.length > 1) return n && Qe(t) ? t.call(l && l.proxy) : t;
  }
}
const wv = {}, Sv = () => Object.create(wv), xv = (e) => Object.getPrototypeOf(e) === wv;
function I0(e, t, n, l = false) {
  const a = {}, r = Sv();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Cv(e, t, a, r);
  for (const o in e.propsOptions[0]) o in a || (a[o] = void 0);
  n ? e.props = l ? a : os(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function D0(e, t, n, l) {
  const { props: a, attrs: r, vnode: { patchFlag: o } } = e, i = Ge(a), [u] = e.propsOptions;
  let c = false;
  if ((l || o > 0) && !(o & 16)) {
    if (o & 8) {
      const s = e.vnode.dynamicProps;
      for (let f = 0; f < s.length; f++) {
        let m = s[f];
        if (Zo(e.emitsOptions, m)) continue;
        const h = t[m];
        if (u) if (st(r, m)) h !== r[m] && (r[m] = h, c = true);
        else {
          const g = bn(m);
          a[g] = _u(u, i, g, h, e, false);
        }
        else h !== r[m] && (r[m] = h, c = true);
      }
    }
  } else {
    Cv(e, t, a, r) && (c = true);
    let s;
    for (const f in i) (!t || !st(t, f) && ((s = Wl(f)) === f || !st(t, s))) && (u ? n && (n[f] !== void 0 || n[s] !== void 0) && (a[f] = _u(u, i, f, void 0, e, true)) : delete a[f]);
    if (r !== i) for (const f in r) (!t || !st(t, f)) && (delete r[f], c = true);
  }
  c && Wn(e.attrs, "set", "");
}
function Cv(e, t, n, l) {
  const [a, r] = e.propsOptions;
  let o = false, i;
  if (t) for (let u in t) {
    if (Xa(u)) continue;
    const c = t[u];
    let s;
    a && st(a, s = bn(u)) ? !r || !r.includes(s) ? n[s] = c : (i || (i = {}))[s] = c : Zo(e.emitsOptions, u) || (!(u in l) || c !== l[u]) && (l[u] = c, o = true);
  }
  if (r) {
    const u = Ge(n), c = i || mt;
    for (let s = 0; s < r.length; s++) {
      const f = r[s];
      n[f] = _u(a, u, f, c[f], e, !st(c, f));
    }
  }
  return o;
}
function _u(e, t, n, l, a, r) {
  const o = e[n];
  if (o != null) {
    const i = st(o, "default");
    if (i && l === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && Qe(u)) {
        const { propsDefaults: c } = a;
        if (n in c) l = c[n];
        else {
          const s = Mr(a);
          l = c[n] = u.call(null, t), s();
        }
      } else l = u;
      a.ce && a.ce._setProp(n, l);
    }
    o[0] && (r && !i ? l = false : o[1] && (l === "" || l === Wl(n)) && (l = true));
  }
  return l;
}
const N0 = /* @__PURE__ */ new WeakMap();
function kv(e, t, n = false) {
  const l = n ? N0 : t.propsCache, a = l.get(e);
  if (a) return a;
  const r = e.props, o = {}, i = [];
  let u = false;
  if (!Qe(e)) {
    const s = (f) => {
      u = true;
      const [m, h] = kv(f, t, true);
      zt(o, m), h && i.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  if (!r && !u) return xt(e) && l.set(e, ca), ca;
  if (Ne(r)) for (let s = 0; s < r.length; s++) {
    const f = bn(r[s]);
    fc(f) && (o[f] = mt);
  }
  else if (r) for (const s in r) {
    const f = bn(s);
    if (fc(f)) {
      const m = r[s], h = o[f] = Ne(m) || Qe(m) ? { type: m } : zt({}, m), g = h.type;
      let _ = false, w = true;
      if (Ne(g)) for (let k = 0; k < g.length; ++k) {
        const p = g[k], y = Qe(p) && p.name;
        if (y === "Boolean") {
          _ = true;
          break;
        } else y === "String" && (w = false);
      }
      else _ = Qe(g) && g.name === "Boolean";
      h[0] = _, h[1] = w, (_ || st(h, "default")) && i.push(f);
    }
  }
  const c = [o, i];
  return xt(e) && l.set(e, c), c;
}
function fc(e) {
  return e[0] !== "$" && !Xa(e);
}
const qv = (e) => e[0] === "_" || e === "$stable", fs = (e) => Ne(e) ? e.map(Bn) : [Bn(e)], H0 = (e, t, n) => {
  if (t._n) return t;
  const l = At((...a) => fs(t(...a)), n);
  return l._c = false, l;
}, Tv = (e, t, n) => {
  const l = e._ctx;
  for (const a in e) {
    if (qv(a)) continue;
    const r = e[a];
    if (Qe(r)) t[a] = H0(a, r, l);
    else if (r != null) {
      const o = fs(r);
      t[a] = () => o;
    }
  }
}, Mv = (e, t) => {
  const n = fs(t);
  e.slots.default = () => n;
}, Ev = (e, t, n) => {
  for (const l in t) (n || l !== "_") && (e[l] = t[l]);
}, j0 = (e, t, n) => {
  const l = e.slots = Sv();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Ev(l, t, n), n && Rf(l, "_", a, true)) : Tv(t, l);
  } else t && Mv(e, t);
}, U0 = (e, t, n) => {
  const { vnode: l, slots: a } = e;
  let r = true, o = mt;
  if (l.shapeFlag & 32) {
    const i = t._;
    i ? n && i === 1 ? r = false : Ev(a, t, n) : (r = !t.$stable, Tv(t, a)), o = t;
  } else t && (Mv(e, t), o = { default: 1 });
  if (r) for (const i in a) !qv(i) && o[i] == null && delete a[i];
};
function Q0() {
  typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && (qr().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false);
}
const Bt = ob;
function K0(e) {
  return W0(e);
}
function W0(e, t) {
  Q0();
  const n = qr();
  n.__VUE__ = true;
  const { insert: l, remove: a, patchProp: r, createElement: o, createText: i, createComment: u, setText: c, setElementText: s, parentNode: f, nextSibling: m, setScopeId: h = On, insertStaticContent: g } = e, _ = (S, E, N, ne = null, le = null, X = null, ve = void 0, ge = null, me = !!E.dynamicChildren) => {
    if (S === E) return;
    S && !vl(S, E) && (ne = A(S), T(S, le, X, true), S = null), E.patchFlag === -2 && (me = false, E.dynamicChildren = null);
    const { type: de, ref: ae, shapeFlag: Q } = E;
    switch (de) {
      case Jo:
        w(S, E, N, ne);
        break;
      case Zt:
        k(S, E, N, ne);
        break;
      case Ti:
        S == null && p(E, N, ne, ve);
        break;
      case rn:
        q(S, E, N, ne, le, X, ve, ge, me);
        break;
      default:
        Q & 1 ? x(S, E, N, ne, le, X, ve, ge, me) : Q & 6 ? M(S, E, N, ne, le, X, ve, ge, me) : (Q & 64 || Q & 128) && de.process(S, E, N, ne, le, X, ve, ge, me, j);
    }
    ae != null && le && go(ae, S && S.ref, X, E || S, !E);
  }, w = (S, E, N, ne) => {
    if (S == null) l(E.el = i(E.children), N, ne);
    else {
      const le = E.el = S.el;
      E.children !== S.children && c(le, E.children);
    }
  }, k = (S, E, N, ne) => {
    S == null ? l(E.el = u(E.children || ""), N, ne) : E.el = S.el;
  }, p = (S, E, N, ne) => {
    [S.el, S.anchor] = g(S.children, E, N, ne, S.el, S.anchor);
  }, y = ({ el: S, anchor: E }, N, ne) => {
    let le;
    for (; S && S !== E; ) le = m(S), l(S, N, ne), S = le;
    l(E, N, ne);
  }, b = ({ el: S, anchor: E }) => {
    let N;
    for (; S && S !== E; ) N = m(S), a(S), S = N;
    a(E);
  }, x = (S, E, N, ne, le, X, ve, ge, me) => {
    E.type === "svg" ? ve = "svg" : E.type === "math" && (ve = "mathml"), S == null ? $(E, N, ne, le, X, ve, ge, me) : B(S, E, le, X, ve, ge, me);
  }, $ = (S, E, N, ne, le, X, ve, ge) => {
    let me, de;
    const { props: ae, shapeFlag: Q, transition: oe, dirs: we } = S;
    if (me = S.el = o(S.type, X, ae && ae.is, ae), Q & 8 ? s(me, S.children) : Q & 16 && D(S.children, me, null, ne, le, qi(S, X), ve, ge), we && kl(S, null, ne, "created"), F(me, S, S.scopeId, ve, ne), ae) {
      for (const qe in ae) qe !== "value" && !Xa(qe) && r(me, qe, null, ae[qe], X, ne);
      "value" in ae && r(me, "value", null, ae.value, X), (de = ae.onVnodeBeforeMount) && vn(de, ne, S);
    }
    we && kl(S, null, ne, "beforeMount");
    const ke = Y0(le, oe);
    ke && oe.beforeEnter(me), l(me, E, N), ((de = ae && ae.onVnodeMounted) || ke || we) && Bt(() => {
      de && vn(de, ne, S), ke && oe.enter(me), we && kl(S, null, ne, "mounted");
    }, le);
  }, F = (S, E, N, ne, le) => {
    if (N && h(S, N), ne) for (let X = 0; X < ne.length; X++) h(S, ne[X]);
    if (le) {
      let X = le.subTree;
      if (E === X || po(X.type) && (X.ssContent === E || X.ssFallback === E)) {
        const ve = le.vnode;
        F(S, ve, ve.scopeId, ve.slotScopeIds, le.parent);
      }
    }
  }, D = (S, E, N, ne, le, X, ve, ge, me = 0) => {
    for (let de = me; de < S.length; de++) {
      const ae = S[de] = ge ? dl(S[de]) : Bn(S[de]);
      _(null, ae, E, N, ne, le, X, ve, ge);
    }
  }, B = (S, E, N, ne, le, X, ve) => {
    const ge = E.el = S.el;
    let { patchFlag: me, dynamicChildren: de, dirs: ae } = E;
    me |= S.patchFlag & 16;
    const Q = S.props || mt, oe = E.props || mt;
    let we;
    if (N && ql(N, false), (we = oe.onVnodeBeforeUpdate) && vn(we, N, E, S), ae && kl(E, S, N, "beforeUpdate"), N && ql(N, true), (Q.innerHTML && oe.innerHTML == null || Q.textContent && oe.textContent == null) && s(ge, ""), de ? P(S.dynamicChildren, de, ge, N, ne, qi(E, le), X) : ve || O(S, E, ge, null, N, ne, qi(E, le), X, false), me > 0) {
      if (me & 16) I(ge, Q, oe, N, le);
      else if (me & 2 && Q.class !== oe.class && r(ge, "class", null, oe.class, le), me & 4 && r(ge, "style", Q.style, oe.style, le), me & 8) {
        const ke = E.dynamicProps;
        for (let qe = 0; qe < ke.length; qe++) {
          const Me = ke[qe], He = Q[Me], Ve = oe[Me];
          (Ve !== He || Me === "value") && r(ge, Me, He, Ve, le, N);
        }
      }
      me & 1 && S.children !== E.children && s(ge, E.children);
    } else !ve && de == null && I(ge, Q, oe, N, le);
    ((we = oe.onVnodeUpdated) || ae) && Bt(() => {
      we && vn(we, N, E, S), ae && kl(E, S, N, "updated");
    }, ne);
  }, P = (S, E, N, ne, le, X, ve) => {
    for (let ge = 0; ge < E.length; ge++) {
      const me = S[ge], de = E[ge], ae = me.el && (me.type === rn || !vl(me, de) || me.shapeFlag & 70) ? f(me.el) : N;
      _(me, de, ae, null, ne, le, X, ve, true);
    }
  }, I = (S, E, N, ne, le) => {
    if (E !== N) {
      if (E !== mt) for (const X in E) !Xa(X) && !(X in N) && r(S, X, E[X], null, le, ne);
      for (const X in N) {
        if (Xa(X)) continue;
        const ve = N[X], ge = E[X];
        ve !== ge && X !== "value" && r(S, X, ge, ve, le, ne);
      }
      "value" in N && r(S, "value", E.value, N.value, le);
    }
  }, q = (S, E, N, ne, le, X, ve, ge, me) => {
    const de = E.el = S ? S.el : i(""), ae = E.anchor = S ? S.anchor : i("");
    let { patchFlag: Q, dynamicChildren: oe, slotScopeIds: we } = E;
    we && (ge = ge ? ge.concat(we) : we), S == null ? (l(de, N, ne), l(ae, N, ne), D(E.children || [], N, ae, le, X, ve, ge, me)) : Q > 0 && Q & 64 && oe && S.dynamicChildren ? (P(S.dynamicChildren, oe, N, le, X, ve, ge), (E.key != null || le && E === le.subTree) && vs(S, E, true)) : O(S, E, N, ae, le, X, ve, ge, me);
  }, M = (S, E, N, ne, le, X, ve, ge, me) => {
    E.slotScopeIds = ge, S == null ? E.shapeFlag & 512 ? le.ctx.activate(E, N, ne, ve, me) : C(E, N, ne, le, X, ve, me) : H(S, E, me);
  }, C = (S, E, N, ne, le, X, ve) => {
    const ge = S.component = mb(S, ne, le);
    if (Ko(S) && (ge.ctx.renderer = j), hb(ge, false, ve), ge.asyncDep) {
      if (le && le.registerDep(ge, Y, ve), !S.el) {
        const me = ge.subTree = Je(Zt);
        k(null, me, E, N);
      }
    } else Y(ge, S, E, N, le, X, ve);
  }, H = (S, E, N) => {
    const ne = E.component = S.component;
    if (ab(S, E, N)) if (ne.asyncDep && !ne.asyncResolved) {
      L(ne, E, N);
      return;
    } else ne.next = E, ne.update();
    else E.el = S.el, ne.vnode = E;
  }, Y = (S, E, N, ne, le, X, ve) => {
    const ge = () => {
      if (S.isMounted) {
        let { next: Q, bu: oe, u: we, parent: ke, vnode: qe } = S;
        {
          const pe = Av(S);
          if (pe) {
            Q && (Q.el = qe.el, L(S, Q, ve)), pe.asyncDep.then(() => {
              S.isUnmounted || ge();
            });
            return;
          }
        }
        let Me = Q, He;
        ql(S, false), Q ? (Q.el = qe.el, L(S, Q, ve)) : Q = qe, oe && Za(oe), (He = Q.props && Q.props.onVnodeBeforeUpdate) && vn(He, ke, Q, qe), ql(S, true);
        const Ve = vc(S), ie = S.subTree;
        S.subTree = Ve, _(ie, Ve, f(ie.el), A(ie), S, le, X), Q.el = Ve.el, Me === null && rb(S, Ve.el), we && Bt(we, le), (He = Q.props && Q.props.onVnodeUpdated) && Bt(() => vn(He, ke, Q, qe), le);
      } else {
        let Q;
        const { el: oe, props: we } = E, { bm: ke, m: qe, parent: Me, root: He, type: Ve } = S, ie = va(E);
        ql(S, false), ke && Za(ke), !ie && (Q = we && we.onVnodeBeforeMount) && vn(Q, Me, E), ql(S, true);
        {
          He.ce && He.ce._injectChildStyle(Ve);
          const pe = S.subTree = vc(S);
          _(null, pe, N, ne, S, le, X), E.el = pe.el;
        }
        if (qe && Bt(qe, le), !ie && (Q = we && we.onVnodeMounted)) {
          const pe = E;
          Bt(() => vn(Q, Me, pe), le);
        }
        (E.shapeFlag & 256 || Me && va(Me.vnode) && Me.vnode.shapeFlag & 256) && S.a && Bt(S.a, le), S.isMounted = true, E = N = ne = null;
      }
    };
    S.scope.on();
    const me = S.effect = new Ff(ge);
    S.scope.off();
    const de = S.update = me.run.bind(me), ae = S.job = me.runIfDirty.bind(me);
    ae.i = S, ae.id = S.uid, me.scheduler = () => ss(ae), ql(S, true), de();
  }, L = (S, E, N) => {
    E.component = S;
    const ne = S.vnode.props;
    S.vnode = E, S.next = null, D0(S, E.props, ne, N), U0(S, E.children, N), _l(), nc(S), wl();
  }, O = (S, E, N, ne, le, X, ve, ge, me = false) => {
    const de = S && S.children, ae = S ? S.shapeFlag : 0, Q = E.children, { patchFlag: oe, shapeFlag: we } = E;
    if (oe > 0) {
      if (oe & 128) {
        ye(de, Q, N, ne, le, X, ve, ge, me);
        return;
      } else if (oe & 256) {
        U(de, Q, N, ne, le, X, ve, ge, me);
        return;
      }
    }
    we & 8 ? (ae & 16 && R(de, le, X), Q !== de && s(N, Q)) : ae & 16 ? we & 16 ? ye(de, Q, N, ne, le, X, ve, ge, me) : R(de, le, X, true) : (ae & 8 && s(N, ""), we & 16 && D(Q, N, ne, le, X, ve, ge, me));
  }, U = (S, E, N, ne, le, X, ve, ge, me) => {
    S = S || ca, E = E || ca;
    const de = S.length, ae = E.length, Q = Math.min(de, ae);
    let oe;
    for (oe = 0; oe < Q; oe++) {
      const we = E[oe] = me ? dl(E[oe]) : Bn(E[oe]);
      _(S[oe], we, N, null, le, X, ve, ge, me);
    }
    de > ae ? R(S, le, X, true, false, Q) : D(E, N, ne, le, X, ve, ge, me, Q);
  }, ye = (S, E, N, ne, le, X, ve, ge, me) => {
    let de = 0;
    const ae = E.length;
    let Q = S.length - 1, oe = ae - 1;
    for (; de <= Q && de <= oe; ) {
      const we = S[de], ke = E[de] = me ? dl(E[de]) : Bn(E[de]);
      if (vl(we, ke)) _(we, ke, N, null, le, X, ve, ge, me);
      else break;
      de++;
    }
    for (; de <= Q && de <= oe; ) {
      const we = S[Q], ke = E[oe] = me ? dl(E[oe]) : Bn(E[oe]);
      if (vl(we, ke)) _(we, ke, N, null, le, X, ve, ge, me);
      else break;
      Q--, oe--;
    }
    if (de > Q) {
      if (de <= oe) {
        const we = oe + 1, ke = we < ae ? E[we].el : ne;
        for (; de <= oe; ) _(null, E[de] = me ? dl(E[de]) : Bn(E[de]), N, ke, le, X, ve, ge, me), de++;
      }
    } else if (de > oe) for (; de <= Q; ) T(S[de], le, X, true), de++;
    else {
      const we = de, ke = de, qe = /* @__PURE__ */ new Map();
      for (de = ke; de <= oe; de++) {
        const Ce = E[de] = me ? dl(E[de]) : Bn(E[de]);
        Ce.key != null && qe.set(Ce.key, de);
      }
      let Me, He = 0;
      const Ve = oe - ke + 1;
      let ie = false, pe = 0;
      const re = new Array(Ve);
      for (de = 0; de < Ve; de++) re[de] = 0;
      for (de = we; de <= Q; de++) {
        const Ce = S[de];
        if (He >= Ve) {
          T(Ce, le, X, true);
          continue;
        }
        let Oe;
        if (Ce.key != null) Oe = qe.get(Ce.key);
        else for (Me = ke; Me <= oe; Me++) if (re[Me - ke] === 0 && vl(Ce, E[Me])) {
          Oe = Me;
          break;
        }
        Oe === void 0 ? T(Ce, le, X, true) : (re[Oe - ke] = de + 1, Oe >= pe ? pe = Oe : ie = true, _(Ce, E[Oe], N, null, le, X, ve, ge, me), He++);
      }
      const _e = ie ? G0(re) : ca;
      for (Me = _e.length - 1, de = Ve - 1; de >= 0; de--) {
        const Ce = ke + de, Oe = E[Ce], Ae = Ce + 1 < ae ? E[Ce + 1].el : ne;
        re[de] === 0 ? _(null, Oe, N, Ae, le, X, ve, ge, me) : ie && (Me < 0 || de !== _e[Me] ? W(Oe, N, Ae, 2) : Me--);
      }
    }
  }, W = (S, E, N, ne, le = null) => {
    const { el: X, type: ve, transition: ge, children: me, shapeFlag: de } = S;
    if (de & 6) {
      W(S.component.subTree, E, N, ne);
      return;
    }
    if (de & 128) {
      S.suspense.move(E, N, ne);
      return;
    }
    if (de & 64) {
      ve.move(S, E, N, j);
      return;
    }
    if (ve === rn) {
      l(X, E, N);
      for (let Q = 0; Q < me.length; Q++) W(me[Q], E, N, ne);
      l(S.anchor, E, N);
      return;
    }
    if (ve === Ti) {
      y(S, E, N);
      return;
    }
    if (ne !== 2 && de & 1 && ge) if (ne === 0) ge.beforeEnter(X), l(X, E, N), Bt(() => ge.enter(X), le);
    else {
      const { leave: Q, delayLeave: oe, afterLeave: we } = ge, ke = () => l(X, E, N), qe = () => {
        Q(X, () => {
          ke(), we && we();
        });
      };
      oe ? oe(X, ke, qe) : qe();
    }
    else l(X, E, N);
  }, T = (S, E, N, ne = false, le = false) => {
    const { type: X, props: ve, ref: ge, children: me, dynamicChildren: de, shapeFlag: ae, patchFlag: Q, dirs: oe, cacheIndex: we } = S;
    if (Q === -2 && (le = false), ge != null && go(ge, null, N, S, true), we != null && (E.renderCache[we] = void 0), ae & 256) {
      E.ctx.deactivate(S);
      return;
    }
    const ke = ae & 1 && oe, qe = !va(S);
    let Me;
    if (qe && (Me = ve && ve.onVnodeBeforeUnmount) && vn(Me, E, S), ae & 6) fe(S.component, N, ne);
    else {
      if (ae & 128) {
        S.suspense.unmount(N, ne);
        return;
      }
      ke && kl(S, null, E, "beforeUnmount"), ae & 64 ? S.type.remove(S, E, N, j, ne) : de && !de.hasOnce && (X !== rn || Q > 0 && Q & 64) ? R(de, E, N, false, true) : (X === rn && Q & 384 || !le && ae & 16) && R(me, E, N), ne && ee(S);
    }
    (qe && (Me = ve && ve.onVnodeUnmounted) || ke) && Bt(() => {
      Me && vn(Me, E, S), ke && kl(S, null, E, "unmounted");
    }, N);
  }, ee = (S) => {
    const { type: E, el: N, anchor: ne, transition: le } = S;
    if (E === rn) {
      G(N, ne);
      return;
    }
    if (E === Ti) {
      b(S);
      return;
    }
    const X = () => {
      a(N), le && !le.persisted && le.afterLeave && le.afterLeave();
    };
    if (S.shapeFlag & 1 && le && !le.persisted) {
      const { leave: ve, delayLeave: ge } = le, me = () => ve(N, X);
      ge ? ge(S.el, X, me) : me();
    } else X();
  }, G = (S, E) => {
    let N;
    for (; S !== E; ) N = m(S), a(S), S = N;
    a(E);
  }, fe = (S, E, N) => {
    const { bum: ne, scope: le, job: X, subTree: ve, um: ge, m: me, a: de } = S;
    yo(me), yo(de), ne && Za(ne), le.stop(), X && (X.flags |= 8, T(ve, S, E, N)), ge && Bt(ge, E), Bt(() => {
      S.isUnmounted = true;
    }, E), E && E.pendingBranch && !E.isUnmounted && S.asyncDep && !S.asyncResolved && S.suspenseId === E.pendingId && (E.deps--, E.deps === 0 && E.resolve());
  }, R = (S, E, N, ne = false, le = false, X = 0) => {
    for (let ve = X; ve < S.length; ve++) T(S[ve], E, N, ne, le);
  }, A = (S) => {
    if (S.shapeFlag & 6) return A(S.component.subTree);
    if (S.shapeFlag & 128) return S.suspense.next();
    const E = m(S.anchor || S.el), N = E && E[av];
    return N ? m(N) : E;
  };
  let te = false;
  const V = (S, E, N) => {
    S == null ? E._vnode && T(E._vnode, null, null, true) : _(E._vnode || null, S, E, null, null, null, N), E._vnode = S, te || (te = true, nc(), tv(), te = false);
  }, j = { p: _, um: T, m: W, r: ee, mt: C, mc: D, pc: O, pbc: P, n: A, o: e };
  return { render: V, hydrate: void 0, createApp: z0(V) };
}
function qi({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ql({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Y0(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function vs(e, t, n = false) {
  const l = e.children, a = t.children;
  if (Ne(l) && Ne(a)) for (let r = 0; r < l.length; r++) {
    const o = l[r];
    let i = a[r];
    i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = a[r] = dl(a[r]), i.el = o.el), !n && i.patchFlag !== -2 && vs(o, i)), i.type === Jo && (i.el = o.el);
  }
}
function G0(e) {
  const t = e.slice(), n = [0];
  let l, a, r, o, i;
  const u = e.length;
  for (l = 0; l < u; l++) {
    const c = e[l];
    if (c !== 0) {
      if (a = n[n.length - 1], e[a] < c) {
        t[l] = a, n.push(l);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; ) i = r + o >> 1, e[n[i]] < c ? r = i + 1 : o = i;
      c < e[n[r]] && (r > 0 && (t[l] = n[r - 1]), n[r] = l);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; ) n[r] = o, o = t[o];
  return n;
}
function Av(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Av(t);
}
function yo(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const X0 = Symbol.for("v-scx"), Z0 = () => Tt(X0);
function be(e, t, n) {
  return Rv(e, t, n);
}
function Rv(e, t, n = mt) {
  const { immediate: l, deep: a, flush: r, once: o } = n, i = zt({}, n), u = t && l || !t && r !== "post";
  let c;
  if (br) {
    if (r === "sync") {
      const h = Z0();
      c = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!u) {
      const h = () => {
      };
      return h.stop = On, h.resume = On, h.pause = On, h;
    }
  }
  const s = Ht;
  i.call = (h, g, _) => En(h, s, g, _);
  let f = false;
  r === "post" ? i.scheduler = (h) => {
    Bt(h, s && s.suspense);
  } : r !== "sync" && (f = true, i.scheduler = (h, g) => {
    g ? h() : ss(h);
  }), i.augmentJob = (h) => {
    t && (h.flags |= 4), f && (h.flags |= 2, s && (h.id = s.uid, h.i = s));
  };
  const m = h0(e, t, i);
  return br && (c ? c.push(m) : u && m()), m;
}
function J0(e, t, n) {
  const l = this.proxy, a = Rt(e) ? e.includes(".") ? $v(l, e) : () => l[e] : e.bind(l, l);
  let r;
  Qe(t) ? r = t : (r = t.handler, n = t);
  const o = Mr(this), i = Rv(a, r.bind(l), n);
  return o(), i;
}
function $v(e, t) {
  const n = t.split(".");
  return () => {
    let l = e;
    for (let a = 0; a < n.length && l; a++) l = l[n[a]];
    return l;
  };
}
const eb = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${bn(t)}Modifiers`] || e[`${Wl(t)}Modifiers`];
function tb(e, t, ...n) {
  if (e.isUnmounted) return;
  const l = e.vnode.props || mt;
  let a = n;
  const r = t.startsWith("update:"), o = r && eb(l, t.slice(7));
  o && (o.trim && (a = n.map((s) => Rt(s) ? s.trim() : s)), o.number && (a = n.map(Bg)));
  let i, u = l[i = yi(t)] || l[i = yi(bn(t))];
  !u && r && (u = l[i = yi(Wl(t))]), u && En(u, e, 6, a);
  const c = l[i + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[i]) return;
    e.emitted[i] = true, En(c, e, 6, a);
  }
}
function Pv(e, t, n = false) {
  const l = t.emitsCache, a = l.get(e);
  if (a !== void 0) return a;
  const r = e.emits;
  let o = {}, i = false;
  if (!Qe(e)) {
    const u = (c) => {
      const s = Pv(c, t, true);
      s && (i = true, zt(o, s));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !i ? (xt(e) && l.set(e, null), null) : (Ne(r) ? r.forEach((u) => o[u] = null) : zt(o, r), xt(e) && l.set(e, o), o);
}
function Zo(e, t) {
  return !e || !Do(t) ? false : (t = t.slice(2).replace(/Once$/, ""), st(e, t[0].toLowerCase() + t.slice(1)) || st(e, Wl(t)) || st(e, t));
}
function vc(e) {
  const { type: t, vnode: n, proxy: l, withProxy: a, propsOptions: [r], slots: o, attrs: i, emit: u, render: c, renderCache: s, props: f, data: m, setupState: h, ctx: g, inheritAttrs: _ } = e, w = ho(e);
  let k, p;
  try {
    if (n.shapeFlag & 4) {
      const b = a || l, x = b;
      k = Bn(c.call(x, b, s, f, h, m, g)), p = i;
    } else {
      const b = t;
      k = Bn(b.length > 1 ? b(f, { attrs: i, slots: o, emit: u }) : b(f, null)), p = t.props ? i : nb(i);
    }
  } catch (b) {
    ar.length = 0, Qo(b, e, 1), k = Je(Zt);
  }
  let y = k;
  if (p && _ !== false) {
    const b = Object.keys(p), { shapeFlag: x } = y;
    b.length && x & 7 && (r && b.some(Gu) && (p = lb(p, r)), y = Xn(y, p, false, true));
  }
  return n.dirs && (y = Xn(y, null, false, true), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && yl(y, n.transition), k = y, ho(w), k;
}
const nb = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || Do(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, lb = (e, t) => {
  const n = {};
  for (const l in e) (!Gu(l) || !(l.slice(9) in t)) && (n[l] = e[l]);
  return n;
};
function ab(e, t, n) {
  const { props: l, children: a, component: r } = e, { props: o, children: i, patchFlag: u } = t, c = r.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && u >= 0) {
    if (u & 1024) return true;
    if (u & 16) return l ? mc(l, o, c) : !!o;
    if (u & 8) {
      const s = t.dynamicProps;
      for (let f = 0; f < s.length; f++) {
        const m = s[f];
        if (o[m] !== l[m] && !Zo(c, m)) return true;
      }
    }
  } else return (a || i) && (!i || !i.$stable) ? true : l === o ? false : l ? o ? mc(l, o, c) : true : !!o;
  return false;
}
function mc(e, t, n) {
  const l = Object.keys(t);
  if (l.length !== Object.keys(e).length) return true;
  for (let a = 0; a < l.length; a++) {
    const r = l[a];
    if (t[r] !== e[r] && !Zo(n, r)) return true;
  }
  return false;
}
function rb({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const l = t.subTree;
    if (l.suspense && l.suspense.activeBranch === e && (l.el = e.el), l === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const po = (e) => e.__isSuspense;
function ob(e, t) {
  t && t.pendingBranch ? Ne(e) ? t.effects.push(...e) : t.effects.push(e) : y0(e);
}
const rn = Symbol.for("v-fgt"), Jo = Symbol.for("v-txt"), Zt = Symbol.for("v-cmt"), Ti = Symbol.for("v-stc"), ar = [];
let un = null;
function Gn(e = false) {
  ar.push(un = e ? null : []);
}
function ib() {
  ar.pop(), un = ar[ar.length - 1] || null;
}
let hr = 1;
function hc(e, t = false) {
  hr += e, e < 0 && un && t && (un.hasOnce = true);
}
function Lv(e) {
  return e.dynamicChildren = hr > 0 ? un || ca : null, ib(), hr > 0 && un && un.push(e), e;
}
function Bv(e, t, n, l, a, r) {
  return Lv(Ln(e, t, n, l, a, r, true));
}
function Ll(e, t, n, l, a) {
  return Lv(Je(e, t, n, l, a, true));
}
function gr(e) {
  return e ? e.__v_isVNode === true : false;
}
function vl(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Fv = ({ key: e }) => e ?? null, no = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? Rt(e) || pt(e) || Qe(e) ? { i: tn, r: e, k: t, f: !!n } : e : null);
function Ln(e, t = null, n = null, l = 0, a = null, r = e === rn ? 0 : 1, o = false, i = false) {
  const u = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && Fv(t), ref: t && no(t), scopeId: lv, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: r, patchFlag: l, dynamicProps: a, dynamicChildren: null, appContext: null, ctx: tn };
  return i ? (ms(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= Rt(n) ? 8 : 16), hr > 0 && !o && un && (u.patchFlag > 0 || r & 6) && u.patchFlag !== 32 && un.push(u), u;
}
const Je = ub;
function ub(e, t = null, n = null, l = 0, a = null, r = false) {
  if ((!e || e === A0) && (e = Zt), gr(e)) {
    const i = Xn(e, t, true);
    return n && ms(i, n), hr > 0 && !r && un && (i.shapeFlag & 6 ? un[un.indexOf(e)] = i : un.push(i)), i.patchFlag = -2, i;
  }
  if (pb(e) && (e = e.__vccOpts), t) {
    t = sb(t);
    let { class: i, style: u } = t;
    i && !Rt(i) && (t.class = Ju(i)), xt(u) && (us(u) && !Ne(u) && (u = zt({}, u)), t.style = jo(u));
  }
  const o = Rt(e) ? 1 : po(e) ? 128 : rv(e) ? 64 : xt(e) ? 4 : Qe(e) ? 2 : 0;
  return Ln(e, t, n, l, a, o, r, true);
}
function sb(e) {
  return e ? us(e) || xv(e) ? zt({}, e) : e : null;
}
function Xn(e, t, n = false, l = false) {
  const { props: a, ref: r, patchFlag: o, children: i, transition: u } = e, c = t ? db(a || {}, t) : a, s = { __v_isVNode: true, __v_skip: true, type: e.type, props: c, key: c && Fv(c), ref: t && t.ref ? n && r ? Ne(r) ? r.concat(no(t)) : [r, no(t)] : no(t) : r, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: i, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== rn ? o === -1 ? 16 : o | 16 : o, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: u, component: e.component, suspense: e.suspense, ssContent: e.ssContent && Xn(e.ssContent), ssFallback: e.ssFallback && Xn(e.ssFallback), el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return u && l && yl(s, u.clone(s)), s;
}
function Bl(e = " ", t = 0) {
  return Je(Jo, null, e, t);
}
function gc(e = "", t = false) {
  return t ? (Gn(), Ll(Zt, null, e)) : Je(Zt, null, e);
}
function Bn(e) {
  return e == null || typeof e == "boolean" ? Je(Zt) : Ne(e) ? Je(rn, null, e.slice()) : gr(e) ? dl(e) : Je(Jo, null, String(e));
}
function dl(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Xn(e);
}
function ms(e, t) {
  let n = 0;
  const { shapeFlag: l } = e;
  if (t == null) t = null;
  else if (Ne(t)) n = 16;
  else if (typeof t == "object") if (l & 65) {
    const a = t.default;
    a && (a._c && (a._d = false), ms(e, a()), a._c && (a._d = true));
    return;
  } else {
    n = 32;
    const a = t._;
    !a && !xv(t) ? t._ctx = tn : a === 3 && tn && (tn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else Qe(t) ? (t = { default: t, _ctx: tn }, n = 32) : (t = String(t), l & 64 ? (n = 16, t = [Bl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function db(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const l = e[n];
    for (const a in l) if (a === "class") t.class !== l.class && (t.class = Ju([t.class, l.class]));
    else if (a === "style") t.style = jo([t.style, l.style]);
    else if (Do(a)) {
      const r = t[a], o = l[a];
      o && r !== o && !(Ne(r) && r.includes(o)) && (t[a] = r ? [].concat(r, o) : o);
    } else a !== "" && (t[a] = l[a]);
  }
  return t;
}
function vn(e, t, n, l = null) {
  En(e, t, 7, [n, l]);
}
const fb = _v();
let vb = 0;
function mb(e, t, n) {
  const l = e.type, a = (t ? t.appContext : e.appContext) || fb, r = { uid: vb++, vnode: e, type: l, parent: t, appContext: a, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new Hg(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(a.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: kv(l, a), emitsOptions: Pv(l, a), emit: null, emitted: null, propsDefaults: mt, inheritAttrs: l.inheritAttrs, ctx: mt, data: mt, props: mt, attrs: mt, slots: mt, refs: mt, setupState: mt, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = tb.bind(null, r), e.ce && e.ce(r), r;
}
let Ht = null;
const Se = () => Ht || tn;
let _o, wu;
{
  const e = qr(), t = (n, l) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(l), (r) => {
      a.length > 1 ? a.forEach((o) => o(r)) : a[0](r);
    };
  };
  _o = t("__VUE_INSTANCE_SETTERS__", (n) => Ht = n), wu = t("__VUE_SSR_SETTERS__", (n) => br = n);
}
const Mr = (e) => {
  const t = Ht;
  return _o(e), e.scope.on(), () => {
    e.scope.off(), _o(t);
  };
}, bc = () => {
  Ht && Ht.scope.off(), _o(null);
};
function Ov(e) {
  return e.vnode.shapeFlag & 4;
}
let br = false;
function hb(e, t = false, n = false) {
  t && wu(t);
  const { props: l, children: a } = e.vnode, r = Ov(e);
  I0(e, l, r, t), j0(e, a, n);
  const o = r ? gb(e, t) : void 0;
  return t && wu(false), o;
}
function gb(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, $0);
  const { setup: l } = n;
  if (l) {
    _l();
    const a = e.setupContext = l.length > 1 ? yb(e) : null, r = Mr(e), o = Tr(l, e, 0, [e.props, a]), i = Mf(o);
    if (wl(), r(), (i || e.sp) && !va(e) && vv(e), i) {
      if (o.then(bc, bc), t) return o.then((u) => {
        yc(e, u);
      }).catch((u) => {
        Qo(u, e, 0);
      });
      e.asyncDep = o;
    } else yc(e, o);
  } else Vv(e);
}
function yc(e, t, n) {
  Qe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : xt(t) && (e.setupState = Zf(t)), Vv(e);
}
function Vv(e, t, n) {
  const l = e.type;
  e.render || (e.render = l.render || On);
  {
    const a = Mr(e);
    _l();
    try {
      P0(e);
    } finally {
      wl(), a();
    }
  }
}
const bb = { get(e, t) {
  return Kt(e, "get", ""), e[t];
} };
function yb(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, bb), slots: e.slots, emit: e.emit, expose: t };
}
function ei(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Zf(Uo(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in lr) return lr[n](e);
  }, has(t, n) {
    return n in t || n in lr;
  } })) : e.proxy;
}
function Su(e, t = true) {
  return Qe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function pb(e) {
  return Qe(e) && "__vccOpts" in e;
}
const v = (e, t) => v0(e, t, br);
function d(e, t, n) {
  const l = arguments.length;
  return l === 2 ? xt(t) && !Ne(t) ? gr(t) ? Je(e, null, [t]) : Je(e, t) : Je(e, null, t) : (l > 3 ? n = Array.prototype.slice.call(arguments, 2) : l === 3 && gr(n) && (n = [n]), Je(e, t, n));
}
const _b = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let xu;
const pc = typeof window < "u" && window.trustedTypes;
if (pc) try {
  xu = pc.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const zv = xu ? (e) => xu.createHTML(e) : (e) => e, wb = "http://www.w3.org/2000/svg", Sb = "http://www.w3.org/1998/Math/MathML", Kn = typeof document < "u" ? document : null, _c = Kn && Kn.createElement("template"), xb = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, l) => {
  const a = t === "svg" ? Kn.createElementNS(wb, e) : t === "mathml" ? Kn.createElementNS(Sb, e) : n ? Kn.createElement(e, { is: n }) : Kn.createElement(e);
  return e === "select" && l && l.multiple != null && a.setAttribute("multiple", l.multiple), a;
}, createText: (e) => Kn.createTextNode(e), createComment: (e) => Kn.createComment(e), setText: (e, t) => {
  e.nodeValue = t;
}, setElementText: (e, t) => {
  e.textContent = t;
}, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => Kn.querySelector(e), setScopeId(e, t) {
  e.setAttribute(t, "");
}, insertStaticContent(e, t, n, l, a, r) {
  const o = n ? n.previousSibling : t.lastChild;
  if (a && (a === r || a.nextSibling)) for (; t.insertBefore(a.cloneNode(true), n), !(a === r || !(a = a.nextSibling)); ) ;
  else {
    _c.innerHTML = zv(l === "svg" ? `<svg>${e}</svg>` : l === "mathml" ? `<math>${e}</math>` : e);
    const i = _c.content;
    if (l === "svg" || l === "mathml") {
      const u = i.firstChild;
      for (; u.firstChild; ) i.appendChild(u.firstChild);
      i.removeChild(u);
    }
    t.insertBefore(i, n);
  }
  return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, ll = "transition", Ba = "animation", wa = Symbol("_vtc"), Iv = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, Dv = zt({}, sv, Iv), Cb = (e) => (e.displayName = "Transition", e.props = Dv, e), Ft = Cb((e, { slots: t }) => d(S0, Nv(e), t)), Tl = (e, t = []) => {
  Ne(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, wc = (e) => e ? Ne(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function Nv(e) {
  const t = {};
  for (const q in e) q in Iv || (t[q] = e[q]);
  if (e.css === false) return t;
  const { name: n = "v", type: l, duration: a, enterFromClass: r = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: i = `${n}-enter-to`, appearFromClass: u = r, appearActiveClass: c = o, appearToClass: s = i, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: m = `${n}-leave-active`, leaveToClass: h = `${n}-leave-to` } = e, g = kb(a), _ = g && g[0], w = g && g[1], { onBeforeEnter: k, onEnter: p, onEnterCancelled: y, onLeave: b, onLeaveCancelled: x, onBeforeAppear: $ = k, onAppear: F = p, onAppearCancelled: D = y } = t, B = (q, M, C, H) => {
    q._enterCancelled = H, il(q, M ? s : i), il(q, M ? c : o), C && C();
  }, P = (q, M) => {
    q._isLeaving = false, il(q, f), il(q, h), il(q, m), M && M();
  }, I = (q) => (M, C) => {
    const H = q ? F : p, Y = () => B(M, q, C);
    Tl(H, [M, Y]), Sc(() => {
      il(M, q ? u : r), $n(M, q ? s : i), wc(H) || xc(M, l, _, Y);
    });
  };
  return zt(t, { onBeforeEnter(q) {
    Tl(k, [q]), $n(q, r), $n(q, o);
  }, onBeforeAppear(q) {
    Tl($, [q]), $n(q, u), $n(q, c);
  }, onEnter: I(false), onAppear: I(true), onLeave(q, M) {
    q._isLeaving = true;
    const C = () => P(q, M);
    $n(q, f), q._enterCancelled ? ($n(q, m), Cu()) : (Cu(), $n(q, m)), Sc(() => {
      q._isLeaving && (il(q, f), $n(q, h), wc(b) || xc(q, l, w, C));
    }), Tl(b, [q, C]);
  }, onEnterCancelled(q) {
    B(q, false, void 0, true), Tl(y, [q]);
  }, onAppearCancelled(q) {
    B(q, true, void 0, true), Tl(D, [q]);
  }, onLeaveCancelled(q) {
    P(q), Tl(x, [q]);
  } });
}
function kb(e) {
  if (e == null) return null;
  if (xt(e)) return [Mi(e.enter), Mi(e.leave)];
  {
    const t = Mi(e);
    return [t, t];
  }
}
function Mi(e) {
  return Fg(e);
}
function $n(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[wa] || (e[wa] = /* @__PURE__ */ new Set())).add(t);
}
function il(e, t) {
  t.split(/\s+/).forEach((l) => l && e.classList.remove(l));
  const n = e[wa];
  n && (n.delete(t), n.size || (e[wa] = void 0));
}
function Sc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let qb = 0;
function xc(e, t, n, l) {
  const a = e._endId = ++qb, r = () => {
    a === e._endId && l();
  };
  if (n != null) return setTimeout(r, n);
  const { type: o, timeout: i, propCount: u } = Hv(e, t);
  if (!o) return l();
  const c = o + "end";
  let s = 0;
  const f = () => {
    e.removeEventListener(c, m), r();
  }, m = (h) => {
    h.target === e && ++s >= u && f();
  };
  setTimeout(() => {
    s < u && f();
  }, i + 1), e.addEventListener(c, m);
}
function Hv(e, t) {
  const n = window.getComputedStyle(e), l = (g) => (n[g] || "").split(", "), a = l(`${ll}Delay`), r = l(`${ll}Duration`), o = Cc(a, r), i = l(`${Ba}Delay`), u = l(`${Ba}Duration`), c = Cc(i, u);
  let s = null, f = 0, m = 0;
  t === ll ? o > 0 && (s = ll, f = o, m = r.length) : t === Ba ? c > 0 && (s = Ba, f = c, m = u.length) : (f = Math.max(o, c), s = f > 0 ? o > c ? ll : Ba : null, m = s ? s === ll ? r.length : u.length : 0);
  const h = s === ll && /\b(transform|all)(,|$)/.test(l(`${ll}Property`).toString());
  return { type: s, timeout: f, propCount: m, hasTransform: h };
}
function Cc(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, l) => kc(n) + kc(e[l])));
}
function kc(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Cu() {
  return document.body.offsetHeight;
}
function Tb(e, t, n) {
  const l = e[wa];
  l && (t = (t ? [t, ...l] : [...l]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const wo = Symbol("_vod"), jv = Symbol("_vsh"), Uv = { beforeMount(e, { value: t }, { transition: n }) {
  e[wo] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Fa(e, t);
}, mounted(e, { value: t }, { transition: n }) {
  n && t && n.enter(e);
}, updated(e, { value: t, oldValue: n }, { transition: l }) {
  !t != !n && (l ? t ? (l.beforeEnter(e), Fa(e, true), l.enter(e)) : l.leave(e, () => {
    Fa(e, false);
  }) : Fa(e, t));
}, beforeUnmount(e, { value: t }) {
  Fa(e, t);
} };
function Fa(e, t) {
  e.style.display = t ? e[wo] : "none", e[jv] = !t;
}
const Mb = Symbol(""), Eb = /(^|;)\s*display\s*:/;
function Ab(e, t, n) {
  const l = e.style, a = Rt(n);
  let r = false;
  if (n && !a) {
    if (t) if (Rt(t)) for (const o of t.split(";")) {
      const i = o.slice(0, o.indexOf(":")).trim();
      n[i] == null && lo(l, i, "");
    }
    else for (const o in t) n[o] == null && lo(l, o, "");
    for (const o in n) o === "display" && (r = true), lo(l, o, n[o]);
  } else if (a) {
    if (t !== n) {
      const o = l[Mb];
      o && (n += ";" + o), l.cssText = n, r = Eb.test(n);
    }
  } else t && e.removeAttribute("style");
  wo in e && (e[wo] = r ? l.display : "", e[jv] && (l.display = "none"));
}
const qc = /\s*!important$/;
function lo(e, t, n) {
  if (Ne(n)) n.forEach((l) => lo(e, t, l));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const l = Rb(e, t);
    qc.test(n) ? e.setProperty(Wl(l), n.replace(qc, ""), "important") : e[l] = n;
  }
}
const Tc = ["Webkit", "Moz", "ms"], Ei = {};
function Rb(e, t) {
  const n = Ei[t];
  if (n) return n;
  let l = bn(t);
  if (l !== "filter" && l in e) return Ei[t] = l;
  l = Ho(l);
  for (let a = 0; a < Tc.length; a++) {
    const r = Tc[a] + l;
    if (r in e) return Ei[t] = r;
  }
  return t;
}
const Mc = "http://www.w3.org/1999/xlink";
function Ec(e, t, n, l, a, r = Ng(t)) {
  l && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Mc, t.slice(6, t.length)) : e.setAttributeNS(Mc, t, n) : n == null || r && !$f(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : pl(n) ? String(n) : n);
}
function Ac(e, t, n, l, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? zv(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && !r.includes("-")) {
    const i = r === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
    (i !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = false;
  if (n === "" || n == null) {
    const i = typeof e[t];
    i === "boolean" ? n = $f(n) : n == null && i === "string" ? (n = "", o = true) : i === "number" && (n = 0, o = true);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(a || t);
}
function $b(e, t, n, l) {
  e.addEventListener(t, n, l);
}
function Pb(e, t, n, l) {
  e.removeEventListener(t, n, l);
}
const Rc = Symbol("_vei");
function Lb(e, t, n, l, a = null) {
  const r = e[Rc] || (e[Rc] = {}), o = r[t];
  if (l && o) o.value = l;
  else {
    const [i, u] = Bb(t);
    if (l) {
      const c = r[t] = Vb(l, a);
      $b(e, i, c, u);
    } else o && (Pb(e, i, o, u), r[t] = void 0);
  }
}
const $c = /(?:Once|Passive|Capture)$/;
function Bb(e) {
  let t;
  if ($c.test(e)) {
    t = {};
    let l;
    for (; l = e.match($c); ) e = e.slice(0, e.length - l[0].length), t[l[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : Wl(e.slice(2)), t];
}
let Ai = 0;
const Fb = Promise.resolve(), Ob = () => Ai || (Fb.then(() => Ai = 0), Ai = Date.now());
function Vb(e, t) {
  const n = (l) => {
    if (!l._vts) l._vts = Date.now();
    else if (l._vts <= n.attached) return;
    En(zb(l, n.value), t, 5, [l]);
  };
  return n.value = e, n.attached = Ob(), n;
}
function zb(e, t) {
  if (Ne(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((l) => (a) => !a._stopped && l && l(a));
  } else return t;
}
const Pc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ib = (e, t, n, l, a, r) => {
  const o = a === "svg";
  t === "class" ? Tb(e, l, o) : t === "style" ? Ab(e, n, l) : Do(t) ? Gu(t) || Lb(e, t, n, l, r) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Db(e, t, l, o)) ? (Ac(e, t, l), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ec(e, t, l, o, r, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !Rt(l)) ? Ac(e, bn(t), l, r, t) : (t === "true-value" ? e._trueValue = l : t === "false-value" && (e._falseValue = l), Ec(e, t, l, o));
};
function Db(e, t, n, l) {
  if (l) return !!(t === "innerHTML" || t === "textContent" || t in e && Pc(t) && Qe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE") return false;
  }
  return Pc(t) && Rt(n) ? false : t in e;
}
const Qv = /* @__PURE__ */ new WeakMap(), Kv = /* @__PURE__ */ new WeakMap(), So = Symbol("_moveCb"), Lc = Symbol("_enterCb"), Nb = (e) => (delete e.props.mode, e), Hb = Nb({ name: "TransitionGroup", props: zt({}, Dv, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = Se(), l = uv();
  let a, r;
  return Go(() => {
    if (!a.length) return;
    const o = e.moveClass || `${e.name || "v"}-move`;
    if (!Wb(a[0].el, n.vnode.el, o)) return;
    a.forEach(Ub), a.forEach(Qb);
    const i = a.filter(Kb);
    Cu(), i.forEach((u) => {
      const c = u.el, s = c.style;
      $n(c, o), s.transform = s.webkitTransform = s.transitionDuration = "";
      const f = c[So] = (m) => {
        m && m.target !== c || (!m || /transform$/.test(m.propertyName)) && (c.removeEventListener("transitionend", f), c[So] = null, il(c, o));
      };
      c.addEventListener("transitionend", f);
    });
  }), () => {
    const o = Ge(e), i = Nv(o);
    let u = o.tag || rn;
    if (a = [], r) for (let c = 0; c < r.length; c++) {
      const s = r[c];
      s.el && s.el instanceof Element && (a.push(s), yl(s, mr(s, i, l, n)), Qv.set(s, s.el.getBoundingClientRect()));
    }
    r = t.default ? cs(t.default()) : [];
    for (let c = 0; c < r.length; c++) {
      const s = r[c];
      s.key != null && yl(s, mr(s, i, l, n));
    }
    return Je(u, null, r);
  };
} }), jb = Hb;
function Ub(e) {
  const t = e.el;
  t[So] && t[So](), t[Lc] && t[Lc]();
}
function Qb(e) {
  Kv.set(e, e.el.getBoundingClientRect());
}
function Kb(e) {
  const t = Qv.get(e), n = Kv.get(e), l = t.left - n.left, a = t.top - n.top;
  if (l || a) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${l}px,${a}px)`, r.transitionDuration = "0s", e;
  }
}
function Wb(e, t, n) {
  const l = e.cloneNode(), a = e[wa];
  a && a.forEach((i) => {
    i.split(/\s+/).forEach((u) => u && l.classList.remove(u));
  }), n.split(/\s+/).forEach((i) => i && l.classList.add(i)), l.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(l);
  const { hasTransform: o } = Hv(l);
  return r.removeChild(l), o;
}
const Yb = zt({ patchProp: Ib }, xb);
let Bc;
function Gb() {
  return Bc || (Bc = K0(Yb));
}
const Wv = (...e) => {
  const t = Gb().createApp(...e), { mount: n } = t;
  return t.mount = (l) => {
    const a = Zb(l);
    if (!a) return;
    const r = t._component;
    !Qe(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const o = n(a, false, Xb(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), o;
  }, t;
};
function Xb(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Zb(e) {
  return Rt(e) ? document.querySelector(e) : e;
}
/*!
* Quasar Framework v2.18.1
* (c) 2015-present Razvan Stoenescu
* Released under the MIT License.
*/
var Ri = null;
function hs() {
  return Ri !== null ? Ri : Ri = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
typeof __QUASAR_SSR__ != "boolean" && (hs().__QUASAR_SSR__ = false);
typeof __QUASAR_SSR_CLIENT__ != "boolean" && (hs().__QUASAR_SSR_CLIENT__ = false);
typeof __QUASAR_SSR_PWA__ != "boolean" && (hs().__QUASAR_SSR_PWA__ = false);
function Ot(e, t, n, l) {
  return Object.defineProperty(e, t, { get: n, set: l, enumerable: true }), e;
}
function Yv(e, t) {
  for (const n in t) Ot(e, n, t[n]);
  return e;
}
var nn = K(__QUASAR_SSR_CLIENT__ && (__QUASAR_SSR_PWA__ ? document.body.getAttribute("data-server-rendered") !== null : true)), ku;
function Jb(e, t) {
  const n = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
  return { browser: n[5] || n[3] || n[1] || "", version: n[4] || n[2] || "0", platform: t[0] || "" };
}
function ey(e) {
  return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
}
var Gv = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function ty(e) {
  const t = e.toLowerCase(), n = ey(t), l = Jb(t, n), a = { mobile: false, desktop: false, cordova: false, capacitor: false, nativeMobile: false, electron: false, bex: false, linux: false, mac: false, win: false, cros: false, chrome: false, firefox: false, opera: false, safari: false, vivaldi: false, edge: false, edgeChromium: false, ie: false, webkit: false, android: false, ios: false, ipad: false, iphone: false, ipod: false, kindle: false, winphone: false, blackberry: false, playbook: false, silk: false };
  l.browser && (a[l.browser] = true, a.version = l.version, a.versionNumber = parseInt(l.version, 10)), l.platform && (a[l.platform] = true);
  const r = a.android || a.ios || a.bb || a.blackberry || a.ipad || a.iphone || a.ipod || a.kindle || a.playbook || a.silk || a["windows phone"];
  if (r === true || t.indexOf("mobile") !== -1 ? a.mobile = true : a.desktop = true, a["windows phone"] && (a.winphone = true, delete a["windows phone"]), a.edga || a.edgios || a.edg ? (a.edge = true, l.browser = "edge") : a.crios ? (a.chrome = true, l.browser = "chrome") : a.fxios && (a.firefox = true, l.browser = "firefox"), (a.ipod || a.ipad || a.iphone) && (a.ios = true), a.vivaldi && (l.browser = "vivaldi", a.vivaldi = true), (a.chrome || a.opr || a.safari || a.vivaldi || a.mobile === true && a.ios !== true && r !== true) && (a.webkit = true), a.opr && (l.browser = "opera", a.opera = true), a.safari && (a.blackberry || a.bb ? (l.browser = "blackberry", a.blackberry = true) : a.playbook ? (l.browser = "playbook", a.playbook = true) : a.android ? (l.browser = "android", a.android = true) : a.kindle ? (l.browser = "kindle", a.kindle = true) : a.silk && (l.browser = "silk", a.silk = true)), a.name = l.browser, a.platform = l.platform, t.indexOf("electron") !== -1) a.electron = true;
  else if (document.location.href.indexOf("-extension://") !== -1) a.bex = true;
  else {
    if (window.Capacitor !== void 0 ? (a.capacitor = true, a.nativeMobile = true, a.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (a.cordova = true, a.nativeMobile = true, a.nativeMobileWrapper = "cordova"), nn.value === true && (ku = { is: { ...a } }), Gv === true && a.mac === true && (a.desktop === true && a.safari === true || a.nativeMobile === true && a.android !== true && a.ios !== true && a.ipad !== true)) {
      delete a.mac, delete a.desktop;
      const o = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
      Object.assign(a, { mobile: true, ios: true, platform: o, [o]: true });
    }
    a.mobile !== true && window.navigator.userAgentData && window.navigator.userAgentData.mobile && (delete a.desktop, a.mobile = true);
  }
  return a;
}
var Fc = navigator.userAgent || navigator.vendor || window.opera, ny = { has: { touch: false, webStorage: false }, within: { iframe: false } }, ze = { userAgent: Fc, is: ty(Fc), has: { touch: Gv }, within: { iframe: window.self !== window.top } }, qu = { install(e) {
  const { $q: t } = e;
  nn.value === true ? (e.onSSRHydrated.push(() => {
    Object.assign(t.platform, ze), nn.value = false;
  }), t.platform = Fn(this)) : t.platform = this;
} };
{
  let e;
  Ot(ze.has, "webStorage", () => {
    if (e !== void 0) return e;
    try {
      if (window.localStorage) return e = true, true;
    } catch {
    }
    return e = false, false;
  }), Object.assign(qu, ze), nn.value === true && (Object.assign(qu, ku, ny), ku = null);
}
var Xv = qu;
function he(e) {
  return Uo(/* @__PURE__ */ Ta(e));
}
function Rn(e) {
  return Uo(e);
}
var xl = (e, t) => {
  const n = Fn(e);
  for (const l in e) Ot(t, l, () => n[l], (a) => {
    n[l] = a;
  });
  return t;
}, dt = { hasPassive: false, passiveCapture: true, notPassiveCapture: true };
try {
  const e = Object.defineProperty({}, "passive", { get() {
    Object.assign(dt, { hasPassive: true, passive: { passive: true }, notPassive: { passive: false }, passiveCapture: { passive: true, capture: true }, notPassiveCapture: { passive: false, capture: true } });
  } });
  window.addEventListener("qtest", null, e), window.removeEventListener("qtest", null, e);
} catch {
}
function St() {
}
function ti(e) {
  return e.button === 0;
}
function en(e) {
  return e.touches && e.touches[0] ? e = e.touches[0] : e.changedTouches && e.changedTouches[0] ? e = e.changedTouches[0] : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]), { top: e.clientY, left: e.clientX };
}
function ly(e) {
  if (e.path) return e.path;
  if (e.composedPath) return e.composedPath();
  const t = [];
  let n = e.target;
  for (; n; ) {
    if (t.push(n), n.tagName === "HTML") return t.push(document), t.push(window), t;
    n = n.parentElement;
  }
}
function wt(e) {
  e.stopPropagation();
}
function Vt(e) {
  e.cancelable !== false && e.preventDefault();
}
function je(e) {
  e.cancelable !== false && e.preventDefault(), e.stopPropagation();
}
function ha(e, t) {
  if (e === void 0 || t === true && e.__dragPrevented === true) return;
  const n = t === true ? (l) => {
    l.__dragPrevented = true, l.addEventListener("dragstart", Vt, dt.notPassiveCapture);
  } : (l) => {
    delete l.__dragPrevented, l.removeEventListener("dragstart", Vt, dt.notPassiveCapture);
  };
  e.querySelectorAll("a, img").forEach(n);
}
function kt(e, t, n) {
  const l = `__q_${t}_evt`;
  e[l] = e[l] !== void 0 ? e[l].concat(n) : n, n.forEach((a) => {
    a[0].addEventListener(a[1], e[a[2]], dt[a[3]]);
  });
}
function Wt(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 && (e[n].forEach((l) => {
    l[0].removeEventListener(l[1], e[l[2]], dt[l[3]]);
  }), e[n] = void 0);
}
function Ea(e, t = 250, n) {
  let l = null;
  function a() {
    const r = arguments, o = () => {
      l = null, e.apply(this, r);
    };
    l !== null && clearTimeout(l), l = setTimeout(o, t);
  }
  return a.cancel = () => {
    l !== null && clearTimeout(l);
  }, a;
}
var $i = ["sm", "md", "lg", "xl"], { passive: Oc } = dt, ay = xl({ width: 0, height: 0, name: "xs", sizes: { sm: 600, md: 1024, lg: 1440, xl: 1920 }, lt: { sm: true, md: true, lg: true, xl: true }, gt: { xs: false, sm: false, md: false, lg: false }, xs: true, sm: false, md: false, lg: false, xl: false }, { setSizes: St, setDebounce: St, install({ $q: e, onSSRHydrated: t }) {
  var _a2;
  if (e.screen = this, this.__installed === true) {
    e.config.screen !== void 0 && (e.config.screen.bodyClasses === false ? document.body.classList.remove(`screen--${this.name}`) : this.__update(true));
    return;
  }
  const { visualViewport: n } = window, l = n || window, a = document.scrollingElement || document.documentElement, r = n === void 0 || ze.is.mobile === true ? () => [Math.max(window.innerWidth, a.clientWidth), Math.max(window.innerHeight, a.clientHeight)] : () => [n.width * n.scale + window.innerWidth - a.clientWidth, n.height * n.scale + window.innerHeight - a.clientHeight], o = ((_a2 = e.config.screen) == null ? void 0 : _a2.bodyClasses) === true;
  this.__update = (f) => {
    const [m, h] = r();
    if (h !== this.height && (this.height = h), m !== this.width) this.width = m;
    else if (f !== true) return;
    let g = this.sizes;
    this.gt.xs = m >= g.sm, this.gt.sm = m >= g.md, this.gt.md = m >= g.lg, this.gt.lg = m >= g.xl, this.lt.sm = m < g.sm, this.lt.md = m < g.md, this.lt.lg = m < g.lg, this.lt.xl = m < g.xl, this.xs = this.lt.sm, this.sm = this.gt.xs === true && this.lt.md === true, this.md = this.gt.sm === true && this.lt.lg === true, this.lg = this.gt.md === true && this.lt.xl === true, this.xl = this.gt.lg, g = this.xs === true && "xs" || this.sm === true && "sm" || this.md === true && "md" || this.lg === true && "lg" || "xl", g !== this.name && (o === true && (document.body.classList.remove(`screen--${this.name}`), document.body.classList.add(`screen--${g}`)), this.name = g);
  };
  let i, u = {}, c = 16;
  this.setSizes = (f) => {
    $i.forEach((m) => {
      f[m] !== void 0 && (u[m] = f[m]);
    });
  }, this.setDebounce = (f) => {
    c = f;
  };
  const s = () => {
    const f = getComputedStyle(document.body);
    f.getPropertyValue("--q-size-sm") && $i.forEach((m) => {
      this.sizes[m] = parseInt(f.getPropertyValue(`--q-size-${m}`), 10);
    }), this.setSizes = (m) => {
      $i.forEach((h) => {
        m[h] && (this.sizes[h] = m[h]);
      }), this.__update(true);
    }, this.setDebounce = (m) => {
      i !== void 0 && l.removeEventListener("resize", i, Oc), i = m > 0 ? Ea(this.__update, m) : this.__update, l.addEventListener("resize", i, Oc);
    }, this.setDebounce(c), Object.keys(u).length !== 0 ? (this.setSizes(u), u = void 0) : this.__update(), o === true && this.name === "xs" && document.body.classList.add("screen--xs");
  };
  nn.value === true ? t.push(s) : s();
} }), Ut = xl({ isActive: false, mode: false }, { __media: void 0, set(e) {
  Ut.mode = e, e === "auto" ? (Ut.__media === void 0 && (Ut.__media = window.matchMedia("(prefers-color-scheme: dark)"), Ut.__updateMedia = () => {
    Ut.set("auto");
  }, Ut.__media.addListener(Ut.__updateMedia)), e = Ut.__media.matches) : Ut.__media !== void 0 && (Ut.__media.removeListener(Ut.__updateMedia), Ut.__media = void 0), Ut.isActive = e === true, document.body.classList.remove(`body--${e === true ? "light" : "dark"}`), document.body.classList.add(`body--${e === true ? "dark" : "light"}`);
}, toggle() {
  Ut.set(Ut.isActive === false);
}, install({ $q: e, ssrContext: t }) {
  const { dark: n } = e.config;
  e.dark = this, this.__installed !== true && this.set(n !== void 0 ? n : false);
} }), Zv = Ut;
function ry(e, t, n = document.body) {
  if (typeof e != "string") throw new TypeError("Expected a string as propName");
  if (typeof t != "string") throw new TypeError("Expected a string as value");
  if (!(n instanceof Element)) throw new TypeError("Expected a DOM element");
  n.style.setProperty(`--q-${e}`, t);
}
var Jv = false;
function oy(e) {
  Jv = e.isComposing === true;
}
function Yl(e) {
  return Jv === true || e !== Object(e) || e.isComposing === true || e.qKeyEvent === true;
}
function yn(e, t) {
  return Yl(e) === true ? false : [].concat(t).includes(e.keyCode);
}
function em(e) {
  if (e.ios === true) return "ios";
  if (e.android === true) return "android";
}
function iy({ is: e, has: t, within: n }, l) {
  const a = [e.desktop === true ? "desktop" : "mobile", `${t.touch === false ? "no-" : ""}touch`];
  if (e.mobile === true) {
    const r = em(e);
    r !== void 0 && a.push("platform-" + r);
  }
  if (e.nativeMobile === true) {
    const r = e.nativeMobileWrapper;
    a.push(r), a.push("native-mobile"), e.ios === true && (l[r] === void 0 || l[r].iosStatusBarPadding !== false) && a.push("q-ios-padding");
  } else e.electron === true ? a.push("electron") : e.bex === true && a.push("bex");
  return n.iframe === true && a.push("within-iframe"), a;
}
function uy() {
  const { is: e } = ze, t = document.body.className, n = new Set(t.replace(/ {2}/g, " ").split(" "));
  if (e.nativeMobile !== true && e.electron !== true && e.bex !== true) {
    if (e.desktop === true) n.delete("mobile"), n.delete("platform-ios"), n.delete("platform-android"), n.add("desktop");
    else if (e.mobile === true) {
      n.delete("desktop"), n.add("mobile"), n.delete("platform-ios"), n.delete("platform-android");
      const a = em(e);
      a !== void 0 && n.add(`platform-${a}`);
    }
  }
  ze.has.touch === true && (n.delete("no-touch"), n.add("touch")), ze.within.iframe === true && n.add("within-iframe");
  const l = Array.from(n).join(" ");
  t !== l && (document.body.className = l);
}
function sy(e) {
  for (const t in e) ry(t, e[t]);
}
var cy = { install(e) {
  if (this.__installed !== true) {
    if (nn.value === true) uy();
    else {
      const { $q: t } = e;
      t.config.brand !== void 0 && sy(t.config.brand);
      const n = iy(ze, t.config);
      document.body.classList.add.apply(document.body.classList, n);
    }
    ze.is.ios === true && document.body.addEventListener("touchstart", St), window.addEventListener("keydown", oy, true);
  }
} }, tm = () => true;
function dy(e) {
  return typeof e == "string" && e !== "" && e !== "/" && e !== "#/";
}
function fy(e) {
  return e.startsWith("#") === true && (e = e.substring(1)), e.startsWith("/") === false && (e = "/" + e), e.endsWith("/") === true && (e = e.substring(0, e.length - 1)), "#" + e;
}
function vy(e) {
  if (e.backButtonExit === false) return () => false;
  if (e.backButtonExit === "*") return tm;
  const t = ["#/"];
  return Array.isArray(e.backButtonExit) === true && t.push(...e.backButtonExit.filter(dy).map(fy)), () => t.includes(window.location.hash);
}
var yr = { __history: [], add: St, remove: St, install({ $q: e }) {
  if (this.__installed === true) return;
  const { cordova: t, capacitor: n } = ze.is;
  if (t !== true && n !== true) return;
  const l = e.config[t === true ? "cordova" : "capacitor"];
  if ((l == null ? void 0 : l.backButton) === false || n === true && (window.Capacitor === void 0 || window.Capacitor.Plugins.App === void 0)) return;
  this.add = (o) => {
    o.condition === void 0 && (o.condition = tm), this.__history.push(o);
  }, this.remove = (o) => {
    const i = this.__history.indexOf(o);
    i >= 0 && this.__history.splice(i, 1);
  };
  const a = vy(Object.assign({ backButtonExit: true }, l)), r = () => {
    if (this.__history.length) {
      const o = this.__history[this.__history.length - 1];
      o.condition() === true && (this.__history.pop(), o.handler());
    } else a() === true ? navigator.app.exitApp() : window.history.back();
  };
  t === true ? document.addEventListener("deviceready", () => {
    document.addEventListener("backbutton", r, false);
  }) : window.Capacitor.Plugins.App.addListener("backButton", r);
} }, Tu = { isoName: "en-US", nativeName: "English (US)", label: { clear: "Clear", ok: "OK", cancel: "Cancel", close: "Close", set: "Set", select: "Select", reset: "Reset", remove: "Remove", update: "Update", create: "Create", search: "Search", filter: "Filter", refresh: "Refresh", expand: (e) => e ? `Expand "${e}"` : "Expand", collapse: (e) => e ? `Collapse "${e}"` : "Collapse" }, date: { days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), firstDayOfWeek: 0, format24h: false, pluralDay: "days", prevMonth: "Previous month", nextMonth: "Next month", prevYear: "Previous year", nextYear: "Next year", today: "Today", prevRangeYears: (e) => `Previous ${e} years`, nextRangeYears: (e) => `Next ${e} years` }, table: { noData: "No data available", noResults: "No matching records found", loading: "Loading...", selectedRecords: (e) => e === 1 ? "1 record selected." : (e === 0 ? "No" : e) + " records selected.", recordsPerPage: "Records per page:", allRows: "All", pagination: (e, t, n) => e + "-" + t + " of " + n, columns: "Columns" }, pagination: { first: "First page", prev: "Previous page", next: "Next page", last: "Last page" }, editor: { url: "URL", bold: "Bold", italic: "Italic", strikethrough: "Strikethrough", underline: "Underline", unorderedList: "Unordered List", orderedList: "Ordered List", subscript: "Subscript", superscript: "Superscript", hyperlink: "Hyperlink", toggleFullscreen: "Toggle Fullscreen", quote: "Quote", left: "Left align", center: "Center align", right: "Right align", justify: "Justify align", print: "Print", outdent: "Decrease indentation", indent: "Increase indentation", removeFormat: "Remove formatting", formatting: "Formatting", fontSize: "Font Size", align: "Align", hr: "Insert Horizontal Rule", undo: "Undo", redo: "Redo", heading1: "Heading 1", heading2: "Heading 2", heading3: "Heading 3", heading4: "Heading 4", heading5: "Heading 5", heading6: "Heading 6", paragraph: "Paragraph", code: "Code", size1: "Very small", size2: "A bit small", size3: "Normal", size4: "Medium-large", size5: "Big", size6: "Very big", size7: "Maximum", defaultFont: "Default Font", viewSource: "View Source" }, tree: { noNodes: "No nodes available", noResults: "No matching nodes found" } };
function Vc() {
  const e = Array.isArray(navigator.languages) === true && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
  if (typeof e == "string") return e.split(/[-_]/).map((t, n) => n === 0 ? t.toLowerCase() : n > 1 || t.length < 4 ? t.toUpperCase() : t[0].toUpperCase() + t.slice(1).toLowerCase()).join("-");
}
var Pl = xl({ __qLang: {} }, { getLocale: Vc, set(e = Tu, t) {
  const n = { ...e, rtl: e.rtl === true, getLocale: Vc };
  {
    if (n.set = Pl.set, Pl.__langConfig === void 0 || Pl.__langConfig.noHtmlAttrs !== true) {
      const l = document.documentElement;
      l.setAttribute("dir", n.rtl === true ? "rtl" : "ltr"), l.setAttribute("lang", n.isoName);
    }
    Object.assign(Pl.__qLang, n);
  }
}, install({ $q: e, lang: t, ssrContext: n }) {
  e.lang = Pl.__qLang, Pl.__langConfig = e.config.lang, this.__installed === true ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qLang, { get() {
    return Reflect.get(...arguments);
  }, ownKeys(l) {
    return Reflect.ownKeys(l).filter((a) => a !== "set" && a !== "getLocale");
  } }), this.set(t || Tu));
} }), ni = Pl, my = { name: "material-icons", type: { positive: "check_circle", negative: "warning", info: "info", warning: "priority_high" }, arrow: { up: "arrow_upward", right: "arrow_forward", down: "arrow_downward", left: "arrow_back", dropdown: "arrow_drop_down" }, chevron: { left: "chevron_left", right: "chevron_right" }, colorPicker: { spectrum: "gradient", tune: "tune", palette: "style" }, pullToRefresh: { icon: "refresh" }, carousel: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down", navigationIcon: "lens" }, chip: { remove: "cancel", selected: "check" }, datetime: { arrowLeft: "chevron_left", arrowRight: "chevron_right", now: "access_time", today: "today" }, editor: { bold: "format_bold", italic: "format_italic", strikethrough: "strikethrough_s", underline: "format_underlined", unorderedList: "format_list_bulleted", orderedList: "format_list_numbered", subscript: "vertical_align_bottom", superscript: "vertical_align_top", hyperlink: "link", toggleFullscreen: "fullscreen", quote: "format_quote", left: "format_align_left", center: "format_align_center", right: "format_align_right", justify: "format_align_justify", print: "print", outdent: "format_indent_decrease", indent: "format_indent_increase", removeFormat: "format_clear", formatting: "text_format", fontSize: "format_size", align: "format_align_left", hr: "remove", undo: "undo", redo: "redo", heading: "format_size", code: "code", size: "format_size", font: "font_download", viewSource: "code" }, expansionItem: { icon: "keyboard_arrow_down", denseIcon: "arrow_drop_down" }, fab: { icon: "add", activeIcon: "close" }, field: { clear: "cancel", error: "error" }, pagination: { first: "first_page", prev: "keyboard_arrow_left", next: "keyboard_arrow_right", last: "last_page" }, rating: { icon: "grade" }, stepper: { done: "check", active: "edit", error: "warning" }, tabs: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down" }, table: { arrowUp: "arrow_upward", warning: "warning", firstPage: "first_page", prevPage: "chevron_left", nextPage: "chevron_right", lastPage: "last_page" }, tree: { icon: "play_arrow" }, uploader: { done: "done", clear: "clear", add: "add_box", upload: "cloud_upload", removeQueue: "clear_all", removeUploaded: "done_all" } }, Mu = xl({ iconMapFn: null, __qIconSet: {} }, { set(e, t) {
  const n = { ...e };
  n.set = Mu.set, Object.assign(Mu.__qIconSet, n);
}, install({ $q: e, iconSet: t, ssrContext: n }) {
  e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn), e.iconSet = this.__qIconSet, Ot(e, "iconMapFn", () => this.iconMapFn, (l) => {
    this.iconMapFn = l;
  }), this.__installed === true ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qIconSet, { get() {
    return Reflect.get(...arguments);
  }, ownKeys(l) {
    return Reflect.ownKeys(l).filter((a) => a !== "set");
  } }), this.set(t || my));
} }), nm = Mu, lm = "_q_", am = "_q_t_", rm = "_q_s_", Gl = "_q_l_", om = "_q_pc_", im = "_q_f_", um = "_q_fo_", sm = "_q_tabs_", cm = "_q_u_";
function ot() {
}
var xo = {}, dm = false;
function hy() {
  dm = true;
}
function kn(e, t) {
  if (e === t) return true;
  if (e !== null && t !== null && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return false;
    let n, l;
    if (e.constructor === Array) {
      if (n = e.length, n !== t.length) return false;
      for (l = n; l-- !== 0; ) if (kn(e[l], t[l]) !== true) return false;
      return true;
    }
    if (e.constructor === Map) {
      if (e.size !== t.size) return false;
      let r = e.entries();
      for (l = r.next(); l.done !== true; ) {
        if (t.has(l.value[0]) !== true) return false;
        l = r.next();
      }
      for (r = e.entries(), l = r.next(); l.done !== true; ) {
        if (kn(l.value[1], t.get(l.value[0])) !== true) return false;
        l = r.next();
      }
      return true;
    }
    if (e.constructor === Set) {
      if (e.size !== t.size) return false;
      const r = e.entries();
      for (l = r.next(); l.done !== true; ) {
        if (t.has(l.value[0]) !== true) return false;
        l = r.next();
      }
      return true;
    }
    if (e.buffer != null && e.buffer.constructor === ArrayBuffer) {
      if (n = e.length, n !== t.length) return false;
      for (l = n; l-- !== 0; ) if (e[l] !== t[l]) return false;
      return true;
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
    const a = Object.keys(e).filter((r) => e[r] !== void 0);
    if (n = a.length, n !== Object.keys(t).filter((r) => t[r] !== void 0).length) return false;
    for (l = n; l-- !== 0; ) {
      const r = a[l];
      if (kn(e[r], t[r]) !== true) return false;
    }
    return true;
  }
  return e !== e && t !== t;
}
function Pt(e) {
  return e !== null && typeof e == "object" && Array.isArray(e) !== true;
}
function Eu(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function gy(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function pr(e) {
  return typeof e == "number" && isFinite(e);
}
var zc = [Xv, cy, Zv, ay, yr, ni, nm];
function li(e, t) {
  const n = Wv(e);
  n.config.globalProperties = t.config.globalProperties;
  const { reload: l, ...a } = t._context;
  return Object.assign(n._context, a), n;
}
function Ic(e, t) {
  t.forEach((n) => {
    n.install(e), n.__installed = true;
  });
}
function by(e, t, n) {
  e.config.globalProperties.$q = n.$q, e.provide(lm, n.$q), Ic(n, zc), t.components !== void 0 && Object.values(t.components).forEach((l) => {
    Pt(l) === true && l.name !== void 0 && e.component(l.name, l);
  }), t.directives !== void 0 && Object.values(t.directives).forEach((l) => {
    Pt(l) === true && l.name !== void 0 && e.directive(l.name, l);
  }), t.plugins !== void 0 && Ic(n, Object.values(t.plugins).filter((l) => typeof l.install == "function" && zc.includes(l) === false)), nn.value === true && (n.$q.onSSRHydrated = () => {
    n.onSSRHydrated.forEach((l) => {
      l();
    }), n.$q.onSSRHydrated = () => {
    };
  });
}
var yy = function(e, t = {}) {
  const n = { version: "2.18.1" };
  dm === false ? (t.config !== void 0 && Object.assign(xo, t.config), n.config = { ...xo }, hy()) : n.config = t.config || {}, by(e, t, { parentApp: e, $q: n, lang: t.lang, iconSet: t.iconSet, onSSRHydrated: [] });
}, Dc = ["B", "KB", "MB", "GB", "TB", "PB"];
function Au(e, t = 1) {
  let n = 0;
  for (; parseInt(e, 10) >= 1024 && n < Dc.length - 1; ) e /= 1024, ++n;
  return `${e.toFixed(t)}${Dc[n]}`;
}
function ct(e, t, n) {
  return n <= t ? t : Math.min(n, Math.max(t, e));
}
function Co(e, t, n) {
  if (n <= t) return t;
  const l = n - t + 1;
  let a = t + (e - t) % l;
  return a < t && (a = l + a), a === 0 ? 0 : a;
}
function rt(e, t = 2, n = "0") {
  if (e == null) return e;
  const l = "" + e;
  return l.length >= t ? l : new Array(t - l.length + 1).join(n) + l;
}
var gs = XMLHttpRequest, fm = gs.prototype.open, py = ["top", "right", "bottom", "left"], ko = [], rr = 0;
function _y({ p: e, pos: t, active: n, horiz: l, reverse: a, dir: r }) {
  let o = 1, i = 1;
  return l === true ? (a === true && (o = -1), t === "bottom" && (i = -1), { transform: `translate3d(${o * (e - 100)}%,${n ? 0 : i * -200}%,0)` }) : (a === true && (i = -1), t === "right" && (o = -1), { transform: `translate3d(${n ? 0 : r * o * -200}%,${i * (e - 100)}%,0)` });
}
function wy(e, t) {
  return typeof t != "number" && (e < 25 ? t = Math.random() * 3 + 3 : e < 65 ? t = Math.random() * 3 : e < 85 ? t = Math.random() * 2 : e < 99 ? t = 0.6 : t = 0), ct(e + t, 0, 100);
}
function Sy(e) {
  rr++, ko.push(e), !(rr > 1) && (gs.prototype.open = function(t, n) {
    const l = [], a = () => {
      ko.forEach((o) => {
        (o.hijackFilter.value === null || o.hijackFilter.value(n) === true) && (o.start(), l.push(o.stop));
      });
    }, r = () => {
      l.forEach((o) => {
        o();
      });
    };
    this.addEventListener("loadstart", a, { once: true }), this.addEventListener("loadend", r, { once: true }), fm.apply(this, arguments);
  });
}
function xy(e) {
  ko = ko.filter((t) => t.start !== e), rr = Math.max(0, rr - 1), rr === 0 && (gs.prototype.open = fm);
}
var Cy = he({ name: "QAjaxBar", props: { position: { type: String, default: "top", validator: (e) => py.includes(e) }, size: { type: String, default: "2px" }, color: String, skipHijack: Boolean, reverse: Boolean, hijackFilter: Function }, emits: ["start", "stop"], setup(e, { emit: t }) {
  const { proxy: n } = Se(), l = K(0), a = K(false), r = K(true);
  let o = 0, i = null, u;
  const c = v(() => `q-loading-bar q-loading-bar--${e.position}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (r.value === true ? "" : " no-transition")), s = v(() => e.position === "top" || e.position === "bottom"), f = v(() => s.value === true ? "height" : "width"), m = v(() => {
    const y = a.value, b = _y({ p: l.value, pos: e.position, active: y, horiz: s.value, reverse: n.$q.lang.rtl === true && ["top", "bottom"].includes(e.position) ? e.reverse === false : e.reverse, dir: n.$q.lang.rtl === true ? -1 : 1 });
    return b[f.value] = e.size, b.opacity = y ? 1 : 0, b;
  }), h = v(() => a.value === true ? { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": l.value } : { "aria-hidden": "true" });
  function g(y = 300) {
    const b = u;
    return u = Math.max(0, y) || 0, o++, o > 1 ? (b === 0 && y > 0 ? k() : i !== null && b > 0 && y <= 0 && (clearTimeout(i), i = null), o) : (i !== null && clearTimeout(i), t("start"), l.value = 0, i = setTimeout(() => {
      i = null, r.value = true, y > 0 && k();
    }, a._value === true ? 500 : 1), a._value !== true && (a.value = true, r.value = false), o);
  }
  function _(y) {
    return o > 0 && (l.value = wy(l.value, y)), o;
  }
  function w() {
    if (o = Math.max(0, o - 1), o > 0) return o;
    i !== null && (clearTimeout(i), i = null), t("stop");
    const y = () => {
      r.value = true, l.value = 100, i = setTimeout(() => {
        i = null, a.value = false;
      }, 1e3);
    };
    return l.value === 0 ? i = setTimeout(y, 1) : y(), o;
  }
  function k() {
    l.value < 100 && (i = setTimeout(() => {
      i = null, _(), k();
    }, u));
  }
  let p;
  return ft(() => {
    e.skipHijack !== true && (p = true, Sy({ start: g, stop: w, hijackFilter: v(() => e.hijackFilter || null) }));
  }), Ke(() => {
    i !== null && clearTimeout(i), p === true && xy(g);
  }), Object.assign(n, { start: g, stop: w, increment: _ }), () => d("div", { class: c.value, style: m.value, ...h.value });
} }), Ru = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 }, el = { size: String };
function tl(e, t = Ru) {
  return v(() => e.size !== void 0 ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size } : null);
}
function Pe(e, t) {
  return e !== void 0 && e() || t;
}
function Er(e, t) {
  if (e !== void 0) {
    const n = e();
    if (n != null) return n.slice();
  }
  return t;
}
function qt(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function bs(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function pn(e, t, n, l, a, r) {
  t.key = l + a;
  const o = d(e, t, n);
  return a === true ? sn(o, r()) : o;
}
var Nc = "0 0 24 24", Pi = (e) => e, Li = (e) => `ionicons ${e}`, vm = { "mdi-": (e) => `mdi ${e}`, "icon-": Pi, "bt-": (e) => `bt ${e}`, "eva-": (e) => `eva ${e}`, "ion-md": Li, "ion-ios": Li, "ion-logo": Li, "iconfont ": Pi, "ti-": (e) => `themify-icon ${e}`, "bi-": (e) => `bootstrap-icons ${e}`, "i-": Pi }, mm = { o_: "-outlined", r_: "-round", s_: "-sharp" }, hm = { sym_o_: "-outlined", sym_r_: "-rounded", sym_s_: "-sharp" }, ky = new RegExp("^(" + Object.keys(vm).join("|") + ")"), qy = new RegExp("^(" + Object.keys(mm).join("|") + ")"), Hc = new RegExp("^(" + Object.keys(hm).join("|") + ")"), Ty = /^[Mm]\s?[-+]?\.?\d/, My = /^img:/, Ey = /^svguse:/, Ay = /^ion-/, Ry = /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, et = he({ name: "QIcon", props: { ...el, tag: { type: String, default: "i" }, name: String, color: String, left: Boolean, right: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = tl(e), a = v(() => "q-icon" + (e.left === true ? " on-left" : "") + (e.right === true ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), r = v(() => {
    let o, i = e.name;
    if (i === "none" || !i) return { none: true };
    if (n.iconMapFn !== null) {
      const s = n.iconMapFn(i);
      if (s !== void 0) if (s.icon !== void 0) {
        if (i = s.icon, i === "none" || !i) return { none: true };
      } else return { cls: s.cls, content: s.content !== void 0 ? s.content : " " };
    }
    if (Ty.test(i) === true) {
      const [s, f = Nc] = i.split("|");
      return { svg: true, viewBox: f, nodes: s.split("&&").map((m) => {
        const [h, g, _] = m.split("@@");
        return d("path", { style: g, d: h, transform: _ });
      }) };
    }
    if (My.test(i) === true) return { img: true, src: i.substring(4) };
    if (Ey.test(i) === true) {
      const [s, f = Nc] = i.split("|");
      return { svguse: true, src: s.substring(7), viewBox: f };
    }
    let u = " ";
    const c = i.match(ky);
    if (c !== null) o = vm[c[1]](i);
    else if (Ry.test(i) === true) o = i;
    else if (Ay.test(i) === true) o = `ionicons ion-${n.platform.is.ios === true ? "ios" : "md"}${i.substring(3)}`;
    else if (Hc.test(i) === true) {
      o = "notranslate material-symbols";
      const s = i.match(Hc);
      s !== null && (i = i.substring(6), o += hm[s[1]]), u = i;
    } else {
      o = "notranslate material-icons";
      const s = i.match(qy);
      s !== null && (i = i.substring(2), o += mm[s[1]]), u = i;
    }
    return { cls: o, content: u };
  });
  return () => {
    const o = { class: a.value, style: l.value, "aria-hidden": "true" };
    return r.value.none === true ? d(e.tag, o, Pe(t.default)) : r.value.img === true ? d(e.tag, o, qt(t.default, [d("img", { src: r.value.src })])) : r.value.svg === true ? d(e.tag, o, qt(t.default, [d("svg", { viewBox: r.value.viewBox || "0 0 24 24" }, r.value.nodes)])) : r.value.svguse === true ? d(e.tag, o, qt(t.default, [d("svg", { viewBox: r.value.viewBox }, [d("use", { "xlink:href": r.value.src })])])) : (r.value.cls !== void 0 && (o.class += " " + r.value.cls), d(e.tag, o, qt(t.default, [r.value.content])));
  };
} }), $u = he({ name: "QAvatar", props: { ...el, fontSize: String, color: String, textColor: String, icon: String, square: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  const n = tl(e), l = v(() => "q-avatar" + (e.color ? ` bg-${e.color}` : "") + (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") + (e.square === true ? " q-avatar--square" : e.rounded === true ? " rounded-borders" : "")), a = v(() => e.fontSize ? { fontSize: e.fontSize } : null);
  return () => {
    const r = e.icon !== void 0 ? [d(et, { name: e.icon })] : void 0;
    return d("div", { class: l.value, style: n.value }, [d("div", { class: "q-avatar__content row flex-center overflow-hidden", style: a.value }, bs(t.default, r))]);
  };
} }), $y = ["top", "middle", "bottom"];
he({ name: "QBadge", props: { color: String, textColor: String, floating: Boolean, transparent: Boolean, multiLine: Boolean, outline: Boolean, rounded: Boolean, label: [Number, String], align: { type: String, validator: (e) => $y.includes(e) } }, setup(e, { slots: t }) {
  const n = v(() => e.align !== void 0 ? { verticalAlign: e.align } : null), l = v(() => {
    const a = e.outline === true && e.color || e.textColor;
    return `q-badge flex inline items-center no-wrap q-badge--${e.multiLine === true ? "multi" : "single"}-line` + (e.outline === true ? " q-badge--outline" : e.color !== void 0 ? ` bg-${e.color}` : "") + (a !== void 0 ? ` text-${a}` : "") + (e.floating === true ? " q-badge--floating" : "") + (e.rounded === true ? " q-badge--rounded" : "") + (e.transparent === true ? " q-badge--transparent" : "");
  });
  return () => d("div", { class: l.value, style: n.value, role: "status", "aria-label": e.label }, qt(t.default, e.label !== void 0 ? [e.label] : []));
} });
var nt = { dark: { type: Boolean, default: null } };
function lt(e, t) {
  return v(() => e.dark === null ? t.dark.isActive : e.dark);
}
he({ name: "QBanner", props: { ...nt, inlineActions: Boolean, dense: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = lt(e, n), a = v(() => "q-banner row items-center" + (e.dense === true ? " q-banner--dense" : "") + (l.value === true ? " q-banner--dark q-dark" : "") + (e.rounded === true ? " rounded-borders" : "")), r = v(() => `q-banner__actions row items-center justify-end col-${e.inlineActions === true ? "auto" : "all"}`);
  return () => {
    const o = [d("div", { class: "q-banner__avatar col-auto row items-center self-start" }, Pe(t.avatar)), d("div", { class: "q-banner__content col text-body2" }, Pe(t.default))], i = Pe(t.action);
    return i !== void 0 && o.push(d("div", { class: r.value }, i)), d("div", { class: a.value + (e.inlineActions === false && i !== void 0 ? " q-banner--top-padding" : ""), role: "alert" }, o);
  };
} });
he({ name: "QBar", props: { ...nt, dense: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = lt(e, n), a = v(() => `q-bar row no-wrap items-center q-bar--${e.dense === true ? "dense" : "standard"}  q-bar--${l.value === true ? "dark" : "light"}`);
  return () => d("div", { class: a.value, role: "toolbar" }, Pe(t.default));
} });
var gm = { left: "start", center: "center", right: "end", between: "between", around: "around", evenly: "evenly", stretch: "stretch" }, Py = Object.keys(gm), ys = { align: { type: String, validator: (e) => Py.includes(e) } };
function ps(e) {
  return v(() => {
    const t = e.align === void 0 ? e.vertical === true ? "stretch" : "left" : e.align;
    return `${e.vertical === true ? "items" : "justify"}-${gm[t]}`;
  });
}
function ao(e) {
  if (Object(e.$parent) === e.$parent) return e.$parent;
  let { parent: t } = e.$;
  for (; Object(t) === t; ) {
    if (Object(t.proxy) === t.proxy) return t.proxy;
    t = t.parent;
  }
}
function bm(e, t) {
  typeof t.type == "symbol" ? Array.isArray(t.children) === true && t.children.forEach((n) => {
    bm(e, n);
  }) : e.add(t);
}
function _s(e) {
  const t = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    bm(t, n);
  }), Array.from(t);
}
function ws(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function gl(e) {
  return e.isUnmounted === true || e.isDeactivated === true;
}
var Ly = ["", true];
he({ name: "QBreadcrumbs", props: { ...ys, separator: { type: String, default: "/" }, separatorColor: String, activeColor: { type: String, default: "primary" }, gutter: { type: String, validator: (e) => ["none", "xs", "sm", "md", "lg", "xl"].includes(e), default: "sm" } }, setup(e, { slots: t }) {
  const n = ps(e), l = v(() => `flex items-center ${n.value}${e.gutter === "none" ? "" : ` q-gutter-${e.gutter}`}`), a = v(() => e.separatorColor ? ` text-${e.separatorColor}` : ""), r = v(() => ` text-${e.activeColor}`);
  return () => {
    if (t.default === void 0) return;
    const o = _s(Pe(t.default));
    if (o.length === 0) return;
    let i = 1;
    const u = [], c = o.filter((f) => {
      var _a2;
      return ((_a2 = f.type) == null ? void 0 : _a2.name) === "QBreadcrumbsEl";
    }).length, s = t.separator !== void 0 ? t.separator : () => e.separator;
    return o.forEach((f) => {
      var _a2;
      if (((_a2 = f.type) == null ? void 0 : _a2.name) === "QBreadcrumbsEl") {
        const m = i < c, h = f.props !== null && Ly.includes(f.props.disable), g = (m === true ? "" : " q-breadcrumbs--last") + (h !== true && m === true ? r.value : "");
        i++, u.push(d("div", { class: `flex items-center${g}` }, [f])), m === true && u.push(d("div", { class: "q-breadcrumbs__separator" + a.value }, s()));
      } else u.push(f);
    }), d("div", { class: "q-breadcrumbs" }, [d("div", { class: l.value }, u)]);
  };
} });
function jc(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
function Uc(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function By(e, t) {
  for (const n in t) {
    const l = t[n], a = e[n];
    if (typeof l == "string") {
      if (l !== a) return false;
    } else if (Array.isArray(a) === false || a.length !== l.length || l.some((r, o) => r !== a[o])) return false;
  }
  return true;
}
function Qc(e, t) {
  return Array.isArray(t) === true ? e.length === t.length && e.every((n, l) => n === t[l]) : e.length === 1 && e[0] === t;
}
function Fy(e, t) {
  return Array.isArray(e) === true ? Qc(e, t) : Array.isArray(t) === true ? Qc(t, e) : e === t;
}
function Oy(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (const n in e) if (Fy(e[n], t[n]) === false) return false;
  return true;
}
var ym = { to: [String, Object], replace: Boolean, href: String, target: String, disable: Boolean }, Ar = { ...ym, exact: Boolean, activeClass: { type: String, default: "q-router-link--active" }, exactActiveClass: { type: String, default: "q-router-link--exact-active" } };
function ai({ fallbackTag: e, useDisableForRouterLinkProps: t = true } = {}) {
  const n = Se(), { props: l, proxy: a, emit: r } = n, o = ws(n), i = v(() => l.disable !== true && l.href !== void 0), u = v(t === true ? () => o === true && l.disable !== true && i.value !== true && l.to !== void 0 && l.to !== null && l.to !== "" : () => o === true && i.value !== true && l.to !== void 0 && l.to !== null && l.to !== ""), c = v(() => u.value === true ? p(l.to) : null), s = v(() => c.value !== null), f = v(() => i.value === true || s.value === true), m = v(() => l.type === "a" || f.value === true ? "a" : l.tag || e || "div"), h = v(() => i.value === true ? { href: l.href, target: l.target } : s.value === true ? { href: c.value.href, target: l.target } : {}), g = v(() => {
    if (s.value === false) return -1;
    const { matched: x } = c.value, { length: $ } = x, F = x[$ - 1];
    if (F === void 0) return -1;
    const D = a.$route.matched;
    if (D.length === 0) return -1;
    const B = D.findIndex(Uc.bind(null, F));
    if (B !== -1) return B;
    const P = jc(x[$ - 2]);
    return $ > 1 && jc(F) === P && D[D.length - 1].path !== P ? D.findIndex(Uc.bind(null, x[$ - 2])) : B;
  }), _ = v(() => s.value === true && g.value !== -1 && By(a.$route.params, c.value.params)), w = v(() => _.value === true && g.value === a.$route.matched.length - 1 && Oy(a.$route.params, c.value.params)), k = v(() => s.value === true ? w.value === true ? ` ${l.exactActiveClass} ${l.activeClass}` : l.exact === true ? "" : _.value === true ? ` ${l.activeClass}` : "" : "");
  function p(x) {
    try {
      return a.$router.resolve(x);
    } catch {
    }
    return null;
  }
  function y(x, { returnRouterError: $, to: F = l.to, replace: D = l.replace } = {}) {
    if (l.disable === true) return x.preventDefault(), Promise.resolve(false);
    if (x.metaKey || x.altKey || x.ctrlKey || x.shiftKey || x.button !== void 0 && x.button !== 0 || l.target === "_blank") return Promise.resolve(false);
    x.preventDefault();
    const B = a.$router[D === true ? "replace" : "push"](F);
    return $ === true ? B : B.then(() => {
    }).catch(() => {
    });
  }
  function b(x) {
    if (s.value === true) {
      const $ = (F) => y(x, F);
      r("click", x, $), x.defaultPrevented !== true && $();
    } else r("click", x);
  }
  return { hasRouterLink: s, hasHrefLink: i, hasLink: f, linkTag: m, resolvedLink: c, linkIsActive: _, linkIsExactActive: w, linkClass: k, linkAttrs: h, getLink: p, navigateToRouterLink: y, navigateOnClick: b };
}
he({ name: "QBreadcrumbsEl", props: { ...Ar, label: String, icon: String, tag: { type: String, default: "span" } }, emits: ["click"], setup(e, { slots: t }) {
  const { linkTag: n, linkAttrs: l, linkClass: a, navigateOnClick: r } = ai(), o = v(() => ({ class: "q-breadcrumbs__el q-link flex inline items-center relative-position " + (e.disable !== true ? "q-link--focusable" + a.value : "q-breadcrumbs__el--disable"), ...l.value, onClick: r })), i = v(() => "q-breadcrumbs__el-icon" + (e.label !== void 0 ? " q-breadcrumbs__el-icon--with-label" : ""));
  return () => {
    const u = [];
    return e.icon !== void 0 && u.push(d(et, { class: i.value, name: e.icon })), e.label !== void 0 && u.push(e.label), d(n.value, { ...o.value }, qt(t.default, u));
  };
} });
var Mt = { size: { type: [String, Number], default: "1em" }, color: String };
function Et(e) {
  return { cSize: v(() => e.size in Ru ? `${Ru[e.size]}px` : e.size), classes: v(() => "q-spinner" + (e.color ? ` text-${e.color}` : "")) };
}
var _n = he({ name: "QSpinner", props: { ...Mt, thickness: { type: Number, default: 5 } }, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value + " q-spinner-mat", width: t.value, height: t.value, viewBox: "25 25 50 50" }, [d("circle", { class: "path", cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": e.thickness, "stroke-miterlimit": "10" })]);
} });
function qo(e) {
  if (e === window) return { top: 0, left: 0 };
  const { top: t, left: n } = e.getBoundingClientRect();
  return { top: t, left: n };
}
function Sa(e) {
  return e === window ? window.innerHeight : e.getBoundingClientRect().height;
}
function Pu(e, t) {
  const n = e.style;
  for (const l in t) n[l] = t[l];
}
function Vy(e) {
  if (e == null) return;
  if (typeof e == "string") try {
    return document.querySelector(e) || void 0;
  } catch {
    return;
  }
  const t = Ie(e);
  if (t) return t.$el || t;
}
function pm(e, t) {
  if (e == null || e.contains(t) === true) return true;
  for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling) if (n.contains(t)) return true;
  return false;
}
function _m(e, t = 250) {
  let n = false, l;
  return function() {
    return n === false && (n = true, setTimeout(() => {
      n = false;
    }, t), l = e.apply(this, arguments)), l;
  };
}
function Kc(e, t, n, l) {
  n.modifiers.stop === true && wt(e);
  const a = n.modifiers.color;
  let r = n.modifiers.center;
  r = r === true || l === true;
  const o = document.createElement("span"), i = document.createElement("span"), u = en(e), { left: c, top: s, width: f, height: m } = t.getBoundingClientRect(), h = Math.sqrt(f * f + m * m), g = h / 2, _ = `${(f - h) / 2}px`, w = r ? _ : `${u.left - c - g}px`, k = `${(m - h) / 2}px`, p = r ? k : `${u.top - s - g}px`;
  i.className = "q-ripple__inner", Pu(i, { height: `${h}px`, width: `${h}px`, transform: `translate3d(${w},${p},0) scale3d(.2,.2,1)`, opacity: 0 }), o.className = `q-ripple${a ? " text-" + a : ""}`, o.setAttribute("dir", "ltr"), o.appendChild(i), t.appendChild(o);
  const y = () => {
    o.remove(), clearTimeout(b);
  };
  n.abort.push(y);
  let b = setTimeout(() => {
    i.classList.add("q-ripple__inner--enter"), i.style.transform = `translate3d(${_},${k},0) scale3d(1,1,1)`, i.style.opacity = 0.2, b = setTimeout(() => {
      i.classList.remove("q-ripple__inner--enter"), i.classList.add("q-ripple__inner--leave"), i.style.opacity = 0, b = setTimeout(() => {
        o.remove(), n.abort.splice(n.abort.indexOf(y), 1);
      }, 275);
    }, 250);
  }, 50);
}
function Wc(e, { modifiers: t, value: n, arg: l }) {
  const a = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = { early: a.early === true, stop: a.stop === true, center: a.center === true, color: a.color || l, keyCodes: [].concat(a.keyCodes || 13) };
}
var ri = Rn({ name: "ripple", beforeMount(e, t) {
  const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
  if (n.ripple === false) return;
  const l = { cfg: n, enabled: t.value !== false, modifiers: {}, abort: [], start(a) {
    l.enabled === true && a.qSkipRipple !== true && a.type === (l.modifiers.early === true ? "pointerdown" : "click") && Kc(a, e, l, a.qKeyEvent === true);
  }, keystart: _m((a) => {
    l.enabled === true && a.qSkipRipple !== true && yn(a, l.modifiers.keyCodes) === true && a.type === `key${l.modifiers.early === true ? "down" : "up"}` && Kc(a, e, l, true);
  }, 300) };
  Wc(l, t), e.__qripple = l, kt(l, "main", [[e, "pointerdown", "start", "passive"], [e, "click", "start", "passive"], [e, "keydown", "keystart", "passive"], [e, "keyup", "keystart", "passive"]]);
}, updated(e, t) {
  if (t.oldValue !== t.value) {
    const n = e.__qripple;
    n !== void 0 && (n.enabled = t.value !== false, n.enabled === true && Object(t.value) === t.value && Wc(n, t));
  }
}, beforeUnmount(e) {
  const t = e.__qripple;
  t !== void 0 && (t.abort.forEach((n) => {
    n();
  }), Wt(t, "main"), delete e._qripple);
} }), To = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 }, zy = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, Iy = ["button", "submit", "reset"], Dy = /[^\s]\/[^\s]/, wm = ["flat", "outline", "push", "unelevated"];
function Ss(e, t) {
  return e.flat === true ? "flat" : e.outline === true ? "outline" : e.push === true ? "push" : e.unelevated === true ? "unelevated" : t;
}
function Sm(e) {
  const t = Ss(e);
  return t !== void 0 ? { [t]: true } : {};
}
var xs = { ...el, ...ym, type: { type: String, default: "button" }, label: [Number, String], icon: String, iconRight: String, ...wm.reduce((e, t) => (e[t] = Boolean) && e, {}), square: Boolean, rounded: Boolean, glossy: Boolean, size: String, fab: Boolean, fabMini: Boolean, padding: String, color: String, textColor: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, tabindex: [Number, String], ripple: { type: [Boolean, Object], default: true }, align: { ...ys.align, default: "center" }, stack: Boolean, stretch: Boolean, loading: { type: Boolean, default: null }, disable: Boolean }, Ny = { ...xs, round: Boolean };
function Hy(e) {
  const t = tl(e, zy), n = ps(e), { hasRouterLink: l, hasLink: a, linkTag: r, linkAttrs: o, navigateOnClick: i } = ai({ fallbackTag: "button" }), u = v(() => {
    const w = e.fab === false && e.fabMini === false ? t.value : {};
    return e.padding !== void 0 ? Object.assign({}, w, { padding: e.padding.split(/\s+/).map((k) => k in To ? To[k] + "px" : k).join(" "), minWidth: "0", minHeight: "0" }) : w;
  }), c = v(() => e.rounded === true || e.fab === true || e.fabMini === true), s = v(() => e.disable !== true && e.loading !== true), f = v(() => s.value === true ? e.tabindex || 0 : -1), m = v(() => Ss(e, "standard")), h = v(() => {
    const w = { tabindex: f.value };
    return a.value === true ? Object.assign(w, o.value) : Iy.includes(e.type) === true && (w.type = e.type), r.value === "a" ? (e.disable === true ? w["aria-disabled"] = "true" : w.href === void 0 && (w.role = "button"), l.value !== true && Dy.test(e.type) === true && (w.type = e.type)) : e.disable === true && (w.disabled = "", w["aria-disabled"] = "true"), e.loading === true && e.percentage !== void 0 && Object.assign(w, { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": e.percentage }), w;
  }), g = v(() => {
    let w;
    e.color !== void 0 ? e.flat === true || e.outline === true ? w = `text-${e.textColor || e.color}` : w = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (w = `text-${e.textColor}`);
    const k = e.round === true ? "round" : `rectangle${c.value === true ? " q-btn--rounded" : e.square === true ? " q-btn--square" : ""}`;
    return `q-btn--${m.value} q-btn--${k}` + (w !== void 0 ? " " + w : "") + (s.value === true ? " q-btn--actionable q-focusable q-hoverable" : e.disable === true ? " disabled" : "") + (e.fab === true ? " q-btn--fab" : e.fabMini === true ? " q-btn--fab-mini" : "") + (e.noCaps === true ? " q-btn--no-uppercase" : "") + (e.dense === true ? " q-btn--dense" : "") + (e.stretch === true ? " no-border-radius self-stretch" : "") + (e.glossy === true ? " glossy" : "") + (e.square ? " q-btn--square" : "");
  }), _ = v(() => n.value + (e.stack === true ? " column" : " row") + (e.noWrap === true ? " no-wrap text-no-wrap" : "") + (e.loading === true ? " q-btn__content--hidden" : ""));
  return { classes: g, style: u, innerClasses: _, attributes: h, hasLink: a, linkTag: r, navigateOnClick: i, isActionable: s };
}
var { passiveCapture: fn } = dt, Jl = null, ea = null, ta = null, Ze = he({ name: "QBtn", props: { ...Ny, percentage: Number, darkPercentage: Boolean, onTouchstart: [Function, Array] }, emits: ["click", "keydown", "mousedown", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { classes: a, style: r, innerClasses: o, attributes: i, hasLink: u, linkTag: c, navigateOnClick: s, isActionable: f } = Hy(e), m = K(null), h = K(null);
  let g = null, _, w = null;
  const k = v(() => e.label !== void 0 && e.label !== null && e.label !== ""), p = v(() => e.disable === true || e.ripple === false ? false : { keyCodes: u.value === true ? [13, 32] : [13], ...e.ripple === true ? {} : e.ripple }), y = v(() => ({ center: e.round })), b = v(() => {
    const C = Math.max(0, Math.min(100, e.percentage));
    return C > 0 ? { transition: "transform 0.6s", transform: `translateX(${C - 100}%)` } : {};
  }), x = v(() => {
    if (e.loading === true) return { onMousedown: M, onTouchstart: M, onClick: M, onKeydown: M, onKeyup: M };
    if (f.value === true) {
      const C = { onClick: F, onKeydown: D, onMousedown: P };
      if (l.$q.platform.has.touch === true) {
        const H = e.onTouchstart !== void 0 ? "" : "Passive";
        C[`onTouchstart${H}`] = B;
      }
      return C;
    }
    return { onClick: je };
  }), $ = v(() => ({ ref: m, class: "q-btn q-btn-item non-selectable no-outline " + a.value, style: r.value, ...i.value, ...x.value }));
  function F(C) {
    if (m.value !== null) {
      if (C !== void 0) {
        if (C.defaultPrevented === true) return;
        const H = document.activeElement;
        if (e.type === "submit" && H !== document.body && m.value.contains(H) === false && H.contains(m.value) === false) {
          C.qAvoidFocus !== true && m.value.focus();
          const Y = () => {
            var _a2;
            document.removeEventListener("keydown", je, true), document.removeEventListener("keyup", Y, fn), (_a2 = m.value) == null ? void 0 : _a2.removeEventListener("blur", Y, fn);
          };
          document.addEventListener("keydown", je, true), document.addEventListener("keyup", Y, fn), m.value.addEventListener("blur", Y, fn);
        }
      }
      s(C);
    }
  }
  function D(C) {
    m.value !== null && (n("keydown", C), yn(C, [13, 32]) === true && ea !== m.value && (ea !== null && q(), C.defaultPrevented !== true && (C.qAvoidFocus !== true && m.value.focus(), ea = m.value, m.value.classList.add("q-btn--active"), document.addEventListener("keyup", I, true), m.value.addEventListener("blur", I, fn)), je(C)));
  }
  function B(C) {
    m.value !== null && (n("touchstart", C), C.defaultPrevented !== true && (Jl !== m.value && (Jl !== null && q(), Jl = m.value, g = C.target, g.addEventListener("touchcancel", I, fn), g.addEventListener("touchend", I, fn)), _ = true, w !== null && clearTimeout(w), w = setTimeout(() => {
      w = null, _ = false;
    }, 200)));
  }
  function P(C) {
    m.value !== null && (C.qSkipRipple = _ === true, n("mousedown", C), C.defaultPrevented !== true && ta !== m.value && (ta !== null && q(), ta = m.value, m.value.classList.add("q-btn--active"), document.addEventListener("mouseup", I, fn)));
  }
  function I(C) {
    if (m.value !== null && !((C == null ? void 0 : C.type) === "blur" && document.activeElement === m.value)) {
      if ((C == null ? void 0 : C.type) === "keyup") {
        if (ea === m.value && yn(C, [13, 32]) === true) {
          const H = new MouseEvent("click", C);
          H.qKeyEvent = true, C.defaultPrevented === true && Vt(H), C.cancelBubble === true && wt(H), m.value.dispatchEvent(H), je(C), C.qKeyEvent = true;
        }
        n("keyup", C);
      }
      q();
    }
  }
  function q(C) {
    var _a2, _b2;
    const H = h.value;
    C !== true && (Jl === m.value || ta === m.value) && H !== null && H !== document.activeElement && (H.setAttribute("tabindex", -1), H.focus()), Jl === m.value && (g !== null && (g.removeEventListener("touchcancel", I, fn), g.removeEventListener("touchend", I, fn)), Jl = g = null), ta === m.value && (document.removeEventListener("mouseup", I, fn), ta = null), ea === m.value && (document.removeEventListener("keyup", I, true), (_a2 = m.value) == null ? void 0 : _a2.removeEventListener("blur", I, fn), ea = null), (_b2 = m.value) == null ? void 0 : _b2.classList.remove("q-btn--active");
  }
  function M(C) {
    je(C), C.qSkipRipple = true;
  }
  return Ke(() => {
    q(true);
  }), Object.assign(l, { click: (C) => {
    f.value === true && F(C);
  } }), () => {
    let C = [];
    e.icon !== void 0 && C.push(d(et, { name: e.icon, left: e.stack !== true && k.value === true, role: "img" })), k.value === true && C.push(d("span", { class: "block" }, [e.label])), C = qt(t.default, C), e.iconRight !== void 0 && e.round === false && C.push(d(et, { name: e.iconRight, right: e.stack !== true && k.value === true, role: "img" }));
    const H = [d("span", { class: "q-focus-helper", ref: h })];
    return e.loading === true && e.percentage !== void 0 && H.push(d("span", { class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === true ? " q-btn__progress--dark" : "") }, [d("span", { class: "q-btn__progress-indicator fit block", style: b.value })])), H.push(d("span", { class: "q-btn__content text-center col items-center q-anchor--skip " + o.value }, C)), e.loading !== null && H.push(d(Ft, { name: "q-transition--fade" }, () => e.loading === true ? [d("span", { key: "loading", class: "absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : [d(_n)])] : null)), sn(d(c.value, $.value, H), [[ri, p.value, void 0, y.value]]);
  };
} }), xm = he({ name: "QBtnGroup", props: { unelevated: Boolean, outline: Boolean, flat: Boolean, rounded: Boolean, square: Boolean, push: Boolean, stretch: Boolean, glossy: Boolean, spread: Boolean }, setup(e, { slots: t }) {
  const n = v(() => {
    const l = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter((a) => e[a] === true).map((a) => `q-btn-group--${a}`).join(" ");
    return `q-btn-group row no-wrap${l.length !== 0 ? " " + l : ""}` + (e.spread === true ? " q-btn-group--spread" : " inline");
  });
  return () => d("div", { class: n.value }, Pe(t.default));
} });
function Mn() {
  if (window.getSelection !== void 0) {
    const e = window.getSelection();
    e.empty !== void 0 ? e.empty() : e.removeAllRanges !== void 0 && (e.removeAllRanges(), Xv.is.mobile !== true && e.addRange(document.createRange()));
  } else document.selection !== void 0 && document.selection.empty();
}
var Cm = { target: { type: [Boolean, String, Element], default: true }, noParentEvent: Boolean }, km = { ...Cm, contextMenu: Boolean };
function Cs({ showing: e, avoidEmit: t, configureAnchorEl: n }) {
  const { props: l, proxy: a, emit: r } = Se(), o = K(null);
  let i = null;
  function u(h) {
    return o.value === null ? false : h === void 0 || h.touches === void 0 || h.touches.length <= 1;
  }
  const c = {};
  n === void 0 && (Object.assign(c, { hide(h) {
    a.hide(h);
  }, toggle(h) {
    a.toggle(h), h.qAnchorHandled = true;
  }, toggleKey(h) {
    yn(h, 13) === true && c.toggle(h);
  }, contextClick(h) {
    a.hide(h), Vt(h), We(() => {
      a.show(h), h.qAnchorHandled = true;
    });
  }, prevent: Vt, mobileTouch(h) {
    if (c.mobileCleanup(h), u(h) !== true) return;
    a.hide(h), o.value.classList.add("non-selectable");
    const g = h.target;
    kt(c, "anchor", [[g, "touchmove", "mobileCleanup", "passive"], [g, "touchend", "mobileCleanup", "passive"], [g, "touchcancel", "mobileCleanup", "passive"], [o.value, "contextmenu", "prevent", "notPassive"]]), i = setTimeout(() => {
      i = null, a.show(h), h.qAnchorHandled = true;
    }, 300);
  }, mobileCleanup(h) {
    o.value.classList.remove("non-selectable"), i !== null && (clearTimeout(i), i = null), e.value === true && h !== void 0 && Mn();
  } }), n = function(h = l.contextMenu) {
    if (l.noParentEvent === true || o.value === null) return;
    let g;
    h === true ? a.$q.platform.is.mobile === true ? g = [[o.value, "touchstart", "mobileTouch", "passive"]] : g = [[o.value, "mousedown", "hide", "passive"], [o.value, "contextmenu", "contextClick", "notPassive"]] : g = [[o.value, "click", "toggle", "passive"], [o.value, "keyup", "toggleKey", "passive"]], kt(c, "anchor", g);
  });
  function s() {
    Wt(c, "anchor");
  }
  function f(h) {
    for (o.value = h; o.value.classList.contains("q-anchor--skip"); ) o.value = o.value.parentNode;
    n();
  }
  function m() {
    if (l.target === false || l.target === "" || a.$el.parentNode === null) o.value = null;
    else if (l.target === true) f(a.$el.parentNode);
    else {
      let h = l.target;
      if (typeof l.target == "string") try {
        h = document.querySelector(l.target);
      } catch {
        h = void 0;
      }
      h != null ? (o.value = h.$el || h, n()) : (o.value = null, console.error(`Anchor: target "${l.target}" not found`));
    }
  }
  return be(() => l.contextMenu, (h) => {
    o.value !== null && (s(), n(h));
  }), be(() => l.target, () => {
    o.value !== null && s(), m();
  }), be(() => l.noParentEvent, (h) => {
    o.value !== null && (h === true ? s() : n());
  }), ft(() => {
    m(), t !== true && l.modelValue === true && o.value === null && r("update:modelValue", false);
  }), Ke(() => {
    i !== null && clearTimeout(i), s();
  }), { anchorEl: o, canShow: u, anchorEvents: c };
}
function qm(e, t) {
  const n = K(null);
  let l;
  function a(i, u) {
    const c = `${u !== void 0 ? "add" : "remove"}EventListener`, s = u !== void 0 ? u : l;
    i !== window && i[c]("scroll", s, dt.passive), window[c]("scroll", s, dt.passive), l = u;
  }
  function r() {
    n.value !== null && (a(n.value), n.value = null);
  }
  const o = be(() => e.noParentEvent, () => {
    n.value !== null && (r(), t());
  });
  return Ke(o), { localScrollTarget: n, unconfigureScrollTarget: r, changeScrollEvent: a };
}
var Aa = { modelValue: { type: Boolean, default: null }, "onUpdate:modelValue": [Function, Array] }, Ra = ["beforeShow", "show", "beforeHide", "hide"];
function $a({ showing: e, canShow: t, hideOnRouteChange: n, handleShow: l, handleHide: a, processOnMount: r }) {
  const o = Se(), { props: i, emit: u, proxy: c } = o;
  let s;
  function f(p) {
    e.value === true ? g(p) : m(p);
  }
  function m(p) {
    if (i.disable === true || (p == null ? void 0 : p.qAnchorHandled) === true || t !== void 0 && t(p) !== true) return;
    const y = i["onUpdate:modelValue"] !== void 0;
    y === true && (u("update:modelValue", true), s = p, We(() => {
      s === p && (s = void 0);
    })), (i.modelValue === null || y === false) && h(p);
  }
  function h(p) {
    e.value !== true && (e.value = true, u("beforeShow", p), l !== void 0 ? l(p) : u("show", p));
  }
  function g(p) {
    if (i.disable === true) return;
    const y = i["onUpdate:modelValue"] !== void 0;
    y === true && (u("update:modelValue", false), s = p, We(() => {
      s === p && (s = void 0);
    })), (i.modelValue === null || y === false) && _(p);
  }
  function _(p) {
    e.value !== false && (e.value = false, u("beforeHide", p), a !== void 0 ? a(p) : u("hide", p));
  }
  function w(p) {
    i.disable === true && p === true ? i["onUpdate:modelValue"] !== void 0 && u("update:modelValue", false) : p === true !== e.value && (p === true ? h : _)(s);
  }
  be(() => i.modelValue, w), n !== void 0 && ws(o) === true && be(() => c.$route.fullPath, () => {
    n.value === true && e.value === true && g();
  }), r === true && ft(() => {
    w(i.modelValue);
  });
  const k = { show: m, hide: g, toggle: f };
  return Object.assign(c, k), k;
}
var Ol = [], _r = [];
function Tm(e) {
  _r = _r.filter((t) => t !== e);
}
function jy(e) {
  Tm(e), _r.push(e);
}
function Yc(e) {
  Tm(e), _r.length === 0 && Ol.length !== 0 && (Ol[Ol.length - 1](), Ol = []);
}
function Pa(e) {
  _r.length === 0 ? e() : Ol.push(e);
}
function Uy(e) {
  Ol = Ol.filter((t) => t !== e);
}
var ga = [], or = [], Qy = 1, ul = document.body;
function Rr(e, t) {
  const n = document.createElement("div");
  if (n.id = t !== void 0 ? `q-portal--${t}--${Qy++}` : e, xo.globalNodes !== void 0) {
    const l = xo.globalNodes.class;
    l !== void 0 && (n.className = l);
  }
  return ul.appendChild(n), ga.push(n), or.push(t), n;
}
function ks(e) {
  const t = ga.indexOf(e);
  ga.splice(t, 1), or.splice(t, 1), e.remove();
}
function Ky(e) {
  if (e === ul) return;
  if (ul = e, ul === document.body || or.reduce((n, l) => l === "dialog" ? n + 1 : n, 0) < 2) {
    ga.forEach((n) => {
      n.contains(ul) === false && ul.appendChild(n);
    });
    return;
  }
  const t = or.lastIndexOf("dialog");
  for (let n = 0; n < ga.length; n++) {
    const l = ga[n];
    (n === t || or[n] !== "dialog") && l.contains(ul) === false && ul.appendChild(l);
  }
}
var ba = [];
function Wy(e) {
  return ba.find((t) => t.contentEl !== null && t.contentEl.contains(e));
}
function Mm(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      if (e.hide(t), e.$props.separateClosePopup === true) return ao(e);
    } else if (e.__qPortal === true) {
      const n = ao(e);
      return (n == null ? void 0 : n.$options.name) === "QPopupProxy" ? (e.hide(t), n) : e;
    }
    e = ao(e);
  } while (e != null);
}
function Yy(e, t, n) {
  for (; n !== 0 && e !== void 0 && e !== null; ) {
    if (e.__qPortal === true) {
      if (n--, e.$options.name === "QMenu") {
        e = Mm(e, t);
        continue;
      }
      e.hide(t);
    }
    e = ao(e);
  }
}
var Gy = he({ name: "QPortal", setup(e, { slots: t }) {
  return () => t.default();
} });
function Xy(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog") return true;
    if (e.type.name === "QDialog" || e.type.name === "QMenu") return false;
    e = e.parent;
  }
  return false;
}
function qs(e, t, n, l) {
  const a = K(false), r = K(false);
  let o = null;
  const i = {}, u = l === "dialog" && Xy(e);
  function c(f) {
    if (f === true) {
      Yc(i), r.value = true;
      return;
    }
    r.value = false, a.value === false && (u === false && o === null && (o = Rr(false, l)), a.value = true, ba.push(e.proxy), jy(i));
  }
  function s(f) {
    if (r.value = false, f !== true) return;
    Yc(i), a.value = false;
    const m = ba.indexOf(e.proxy);
    m !== -1 && ba.splice(m, 1), o !== null && (ks(o), o = null);
  }
  return Xo(() => {
    s(true);
  }), e.proxy.__qPortal = true, Ot(e.proxy, "contentEl", () => t.value), { showPortal: c, hidePortal: s, portalIsActive: a, portalIsAccessible: r, renderPortal: () => u === true ? n() : a.value === true ? [d(_0, { to: o }, d(Gy, n))] : void 0 };
}
var Il = { transitionShow: { type: String, default: "fade" }, transitionHide: { type: String, default: "fade" }, transitionDuration: { type: [String, Number], default: 300 } };
function oi(e, t = () => {
}, n = () => {
}) {
  return { transitionProps: v(() => {
    const l = `q-transition--${e.transitionShow || t()}`, a = `q-transition--${e.transitionHide || n()}`;
    return { appear: true, enterFromClass: `${l}-enter-from`, enterActiveClass: `${l}-enter-active`, enterToClass: `${l}-enter-to`, leaveFromClass: `${a}-leave-from`, leaveActiveClass: `${a}-leave-active`, leaveToClass: `${a}-leave-to` };
  }), transitionStyle: v(() => `--q-transition-duration: ${e.transitionDuration}ms`) };
}
function ya() {
  let e;
  const t = Se();
  function n() {
    e = void 0;
  }
  return Vn(n), Ke(n), { removeTick: n, registerTick(l) {
    e = l, We(() => {
      e === l && (gl(t) === false && e(), e = void 0);
    });
  } };
}
function Zn() {
  let e = null;
  const t = Se();
  function n() {
    e !== null && (clearTimeout(e), e = null);
  }
  return Vn(n), Ke(n), { removeTimeout: n, registerTimeout(l, a) {
    n(), gl(t) === false && (e = setTimeout(() => {
      e = null, l();
    }, a));
  } };
}
var Xl = [Element, String], Zy = [null, document, document.body, document.scrollingElement, document.documentElement];
function zn(e, t) {
  let n = Vy(t);
  if (n === void 0) {
    if (e == null) return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return Zy.includes(n) ? window : n;
}
function Ir(e) {
  return (e === window ? document.body : e).scrollHeight;
}
function bl(e) {
  return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop;
}
function ii(e) {
  return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft;
}
function Em(e, t, n = 0) {
  const l = arguments[3] === void 0 ? performance.now() : arguments[3], a = bl(e);
  if (n <= 0) {
    a !== t && Lu(e, t);
    return;
  }
  requestAnimationFrame((r) => {
    const o = r - l, i = a + (t - a) / Math.max(o, n) * o;
    Lu(e, i), i !== t && Em(e, t, n - o, r);
  });
}
function Am(e, t, n = 0) {
  const l = arguments[3] === void 0 ? performance.now() : arguments[3], a = ii(e);
  if (n <= 0) {
    a !== t && Bu(e, t);
    return;
  }
  requestAnimationFrame((r) => {
    const o = r - l, i = a + (t - a) / Math.max(o, n) * o;
    Bu(e, i), i !== t && Am(e, t, n - o, r);
  });
}
function Lu(e, t) {
  if (e === window) {
    window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t);
    return;
  }
  e.scrollTop = t;
}
function Bu(e, t) {
  if (e === window) {
    window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0);
    return;
  }
  e.scrollLeft = t;
}
function pa(e, t, n) {
  if (n) {
    Em(e, t, n);
    return;
  }
  Lu(e, t);
}
function Bi(e, t, n) {
  if (n) {
    Am(e, t, n);
    return;
  }
  Bu(e, t);
}
var Dr;
function ro() {
  if (Dr !== void 0) return Dr;
  const e = document.createElement("p"), t = document.createElement("div");
  Pu(e, { width: "100%", height: "200px" }), Pu(t, { position: "absolute", top: "0px", left: "0px", visibility: "hidden", width: "200px", height: "150px", overflow: "hidden" }), t.appendChild(e), document.body.appendChild(t);
  const n = e.offsetWidth;
  t.style.overflow = "scroll";
  let l = e.offsetWidth;
  return n === l && (l = t.clientWidth), t.remove(), Dr = n - l, Dr;
}
function Jy(e, t = true) {
  return !e || e.nodeType !== Node.ELEMENT_NODE ? false : t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]));
}
var Dl = [], xa;
function ep(e) {
  xa = e.keyCode === 27;
}
function tp() {
  xa === true && (xa = false);
}
function np(e) {
  xa === true && (xa = false, yn(e, 27) === true && Dl[Dl.length - 1](e));
}
function Rm(e) {
  window[e]("keydown", ep), window[e]("blur", tp), window[e]("keyup", np), xa = false;
}
function $m(e) {
  ze.is.desktop === true && (Dl.push(e), Dl.length === 1 && Rm("addEventListener"));
}
function Mo(e) {
  const t = Dl.indexOf(e);
  t !== -1 && (Dl.splice(t, 1), Dl.length === 0 && Rm("removeEventListener"));
}
var Nl = [];
function Pm(e) {
  Nl[Nl.length - 1](e);
}
function Lm(e) {
  ze.is.desktop === true && (Nl.push(e), Nl.length === 1 && document.body.addEventListener("focusin", Pm));
}
function Fu(e) {
  const t = Nl.indexOf(e);
  t !== -1 && (Nl.splice(t, 1), Nl.length === 0 && document.body.removeEventListener("focusin", Pm));
}
var { notPassiveCapture: Eo } = dt, Hl = [];
function Ao(e) {
  const t = e.target;
  if (t === void 0 || t.nodeType === 8 || t.classList.contains("no-pointer-events") === true) return;
  let n = ba.length - 1;
  for (; n >= 0; ) {
    const l = ba[n].$;
    if (l.type.name === "QTooltip") {
      n--;
      continue;
    }
    if (l.type.name !== "QDialog") break;
    if (l.props.seamless !== true) return;
    n--;
  }
  for (let l = Hl.length - 1; l >= 0; l--) {
    const a = Hl[l];
    if ((a.anchorEl.value === null || a.anchorEl.value.contains(t) === false) && (t === document.body || a.innerRef.value !== null && a.innerRef.value.contains(t) === false)) e.qClickOutside = true, a.onClickOutside(e);
    else return;
  }
}
function Bm(e) {
  Hl.push(e), Hl.length === 1 && (document.addEventListener("mousedown", Ao, Eo), document.addEventListener("touchstart", Ao, Eo));
}
function Ro(e) {
  const t = Hl.findIndex((n) => n === e);
  t !== -1 && (Hl.splice(t, 1), Hl.length === 0 && (document.removeEventListener("mousedown", Ao, Eo), document.removeEventListener("touchstart", Ao, Eo)));
}
var Gc, Xc;
function $o(e) {
  const t = e.split(" ");
  return t.length !== 2 ? false : ["top", "center", "bottom"].includes(t[0]) !== true ? (console.error("Anchor/Self position must start with one of top/center/bottom"), false) : ["left", "middle", "right", "start", "end"].includes(t[1]) !== true ? (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), false) : true;
}
function Fm(e) {
  return e ? !(e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number") : true;
}
var Ou = { "start#ltr": "left", "start#rtl": "right", "end#ltr": "right", "end#rtl": "left" };
["left", "middle", "right"].forEach((e) => {
  Ou[`${e}#ltr`] = e, Ou[`${e}#rtl`] = e;
});
function Po(e, t) {
  const n = e.split(" ");
  return { vertical: n[0], horizontal: Ou[`${n[1]}#${t === true ? "rtl" : "ltr"}`] };
}
function lp(e, t) {
  let { top: n, left: l, right: a, bottom: r, width: o, height: i } = e.getBoundingClientRect();
  return t !== void 0 && (n -= t[1], l -= t[0], r += t[1], a += t[0], o += t[0], i += t[1]), { top: n, bottom: r, height: i, left: l, right: a, width: o, middle: l + (a - l) / 2, center: n + (r - n) / 2 };
}
function ap(e, t, n) {
  let { top: l, left: a } = e.getBoundingClientRect();
  return l += t.top, a += t.left, n !== void 0 && (l += n[1], a += n[0]), { top: l, bottom: l + 1, height: 1, left: a, right: a + 1, width: 1, middle: a, center: l };
}
function rp(e, t) {
  return { top: 0, center: t / 2, bottom: t, left: 0, middle: e / 2, right: e };
}
function Zc(e, t, n, l) {
  return { top: e[n.vertical] - t[l.vertical], left: e[n.horizontal] - t[l.horizontal] };
}
function Ts(e, t = 0) {
  if (e.targetEl === null || e.anchorEl === null || t > 5) return;
  if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      Ts(e, t + 1);
    }, 10);
    return;
  }
  const { targetEl: n, offset: l, anchorEl: a, anchorOrigin: r, selfOrigin: o, absoluteOffset: i, fit: u, cover: c, maxHeight: s, maxWidth: f } = e;
  if (ze.is.ios === true && window.visualViewport !== void 0) {
    const $ = document.body.style, { offsetLeft: F, offsetTop: D } = window.visualViewport;
    F !== Gc && ($.setProperty("--q-pe-left", F + "px"), Gc = F), D !== Xc && ($.setProperty("--q-pe-top", D + "px"), Xc = D);
  }
  const { scrollLeft: m, scrollTop: h } = n, g = i === void 0 ? lp(a, c === true ? [0, 0] : l) : ap(a, i, l);
  Object.assign(n.style, { top: 0, left: 0, minWidth: null, minHeight: null, maxWidth: f, maxHeight: s, visibility: "visible" });
  const { offsetWidth: _, offsetHeight: w } = n, { elWidth: k, elHeight: p } = u === true || c === true ? { elWidth: Math.max(g.width, _), elHeight: c === true ? Math.max(g.height, w) : w } : { elWidth: _, elHeight: w };
  let y = { maxWidth: f, maxHeight: s };
  (u === true || c === true) && (y.minWidth = g.width + "px", c === true && (y.minHeight = g.height + "px")), Object.assign(n.style, y);
  const b = rp(k, p);
  let x = Zc(g, b, r, o);
  if (i === void 0 || l === void 0) Fi(x, g, b, r, o);
  else {
    const { top: $, left: F } = x;
    Fi(x, g, b, r, o);
    let D = false;
    if (x.top !== $) {
      D = true;
      const B = 2 * l[1];
      g.center = g.top -= B, g.bottom -= B + 2;
    }
    if (x.left !== F) {
      D = true;
      const B = 2 * l[0];
      g.middle = g.left -= B, g.right -= B + 2;
    }
    D === true && (x = Zc(g, b, r, o), Fi(x, g, b, r, o));
  }
  y = { top: x.top + "px", left: x.left + "px" }, x.maxHeight !== void 0 && (y.maxHeight = x.maxHeight + "px", g.height > x.maxHeight && (y.minHeight = y.maxHeight)), x.maxWidth !== void 0 && (y.maxWidth = x.maxWidth + "px", g.width > x.maxWidth && (y.minWidth = y.maxWidth)), Object.assign(n.style, y), n.scrollTop !== h && (n.scrollTop = h), n.scrollLeft !== m && (n.scrollLeft = m);
}
function Fi(e, t, n, l, a) {
  const r = n.bottom, o = n.right, i = ro(), u = window.innerHeight - i, c = document.body.clientWidth;
  if (e.top < 0 || e.top + r > u) if (a.vertical === "center") e.top = t[l.vertical] > u / 2 ? Math.max(0, u - r) : 0, e.maxHeight = Math.min(r, u);
  else if (t[l.vertical] > u / 2) {
    const s = Math.min(u, l.vertical === "center" ? t.center : l.vertical === a.vertical ? t.bottom : t.top);
    e.maxHeight = Math.min(r, s), e.top = Math.max(0, s - r);
  } else e.top = Math.max(0, l.vertical === "center" ? t.center : l.vertical === a.vertical ? t.top : t.bottom), e.maxHeight = Math.min(r, u - e.top);
  if (e.left < 0 || e.left + o > c) if (e.maxWidth = Math.min(o, c), a.horizontal === "middle") e.left = t[l.horizontal] > c / 2 ? Math.max(0, c - o) : 0;
  else if (t[l.horizontal] > c / 2) {
    const s = Math.min(c, l.horizontal === "middle" ? t.middle : l.horizontal === a.horizontal ? t.right : t.left);
    e.maxWidth = Math.min(o, s), e.left = Math.max(0, s - e.maxWidth);
  } else e.left = Math.max(0, l.horizontal === "middle" ? t.middle : l.horizontal === a.horizontal ? t.left : t.right), e.maxWidth = Math.min(o, c - e.left);
}
var ui = he({ name: "QMenu", inheritAttrs: false, props: { ...km, ...Aa, ...nt, ...Il, persistent: Boolean, autoClose: Boolean, separateClosePopup: Boolean, noEscDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, fit: Boolean, cover: Boolean, square: Boolean, anchor: { type: String, validator: $o }, self: { type: String, validator: $o }, offset: { type: Array, validator: Fm }, scrollTarget: Xl, touchPosition: Boolean, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null } }, emits: [...Ra, "click", "escapeKey"], setup(e, { slots: t, emit: n, attrs: l }) {
  let a = null, r, o, i;
  const u = Se(), { proxy: c } = u, { $q: s } = c, f = K(null), m = K(false), h = v(() => e.persistent !== true && e.noRouteDismiss !== true), g = lt(e, s), { registerTick: _, removeTick: w } = ya(), { registerTimeout: k } = Zn(), { transitionProps: p, transitionStyle: y } = oi(e), { localScrollTarget: b, changeScrollEvent: x, unconfigureScrollTarget: $ } = qm(e, ee), { anchorEl: F, canShow: D } = Cs({ showing: m }), { hide: B } = $a({ showing: m, canShow: D, handleShow: ye, handleHide: W, hideOnRouteChange: h, processOnMount: true }), { showPortal: P, hidePortal: I, renderPortal: q } = qs(u, f, te, "menu"), M = { anchorEl: F, innerRef: f, onClickOutside(V) {
    if (e.persistent !== true && m.value === true) return B(V), (V.type === "touchstart" || V.target.classList.contains("q-dialog__backdrop")) && je(V), true;
  } }, C = v(() => Po(e.anchor || (e.cover === true ? "center middle" : "bottom start"), s.lang.rtl)), H = v(() => e.cover === true ? C.value : Po(e.self || "top start", s.lang.rtl)), Y = v(() => (e.square === true ? " q-menu--square" : "") + (g.value === true ? " q-menu--dark q-dark" : "")), L = v(() => e.autoClose === true ? { onClick: G } : {}), O = v(() => m.value === true && e.persistent !== true);
  be(O, (V) => {
    V === true ? ($m(R), Bm(M)) : (Mo(R), Ro(M));
  });
  function U() {
    Pa(() => {
      let V = f.value;
      V && V.contains(document.activeElement) !== true && (V = V.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || V.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || V.querySelector("[autofocus], [data-autofocus]") || V, V.focus({ preventScroll: true }));
    });
  }
  function ye(V) {
    if (a = e.noRefocus === false ? document.activeElement : null, Lm(fe), P(), ee(), r = void 0, V !== void 0 && (e.touchPosition || e.contextMenu)) {
      const j = en(V);
      if (j.left !== void 0) {
        const { top: ue, left: S } = F.value.getBoundingClientRect();
        r = { left: j.left - S, top: j.top - ue };
      }
    }
    o === void 0 && (o = be(() => s.screen.width + "|" + s.screen.height + "|" + e.self + "|" + e.anchor + "|" + s.lang.rtl, A)), e.noFocus !== true && document.activeElement.blur(), _(() => {
      A(), e.noFocus !== true && U();
    }), k(() => {
      s.platform.is.ios === true && (i = e.autoClose, f.value.click()), A(), P(true), n("show", V);
    }, e.transitionDuration);
  }
  function W(V) {
    w(), I(), T(true), a !== null && (V === void 0 || V.qClickOutside !== true) && ((((V == null ? void 0 : V.type.indexOf("key")) === 0 ? a.closest('[tabindex]:not([tabindex^="-"])') : void 0) || a).focus(), a = null), k(() => {
      I(true), n("hide", V);
    }, e.transitionDuration);
  }
  function T(V) {
    r = void 0, o !== void 0 && (o(), o = void 0), (V === true || m.value === true) && (Fu(fe), $(), Ro(M), Mo(R)), V !== true && (a = null);
  }
  function ee() {
    (F.value !== null || e.scrollTarget !== void 0) && (b.value = zn(F.value, e.scrollTarget), x(b.value, A));
  }
  function G(V) {
    i !== true ? (Mm(c, V), n("click", V)) : i = false;
  }
  function fe(V) {
    O.value === true && e.noFocus !== true && pm(f.value, V.target) !== true && U();
  }
  function R(V) {
    e.noEscDismiss !== true && (n("escapeKey"), B(V));
  }
  function A() {
    Ts({ targetEl: f.value, offset: e.offset, anchorEl: F.value, anchorOrigin: C.value, selfOrigin: H.value, absoluteOffset: r, fit: e.fit, cover: e.cover, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function te() {
    return d(Ft, p.value, () => m.value === true ? d("div", { role: "menu", ...l, ref: f, tabindex: -1, class: ["q-menu q-position-engine scroll" + Y.value, l.class], style: [l.style, y.value], ...L.value }, Pe(t.default)) : null);
  }
  return Ke(T), Object.assign(c, { focus: U, updatePosition: A }), q;
} }), Oi, Nr = 0, Nt = new Array(256);
for (let e = 0; e < 256; e++) Nt[e] = (e + 256).toString(16).substring(1);
var op = (() => {
  const e = typeof crypto < "u" ? crypto : typeof window < "u" ? window.crypto || window.msCrypto : void 0;
  if (e !== void 0) {
    if (e.randomBytes !== void 0) return e.randomBytes;
    if (e.getRandomValues !== void 0) return (t) => {
      const n = new Uint8Array(t);
      return e.getRandomValues(n), n;
    };
  }
  return (t) => {
    const n = [];
    for (let l = t; l > 0; l--) n.push(Math.floor(Math.random() * 256));
    return n;
  };
})(), Jc = 4096;
function wr() {
  (Oi === void 0 || Nr + 16 > Jc) && (Nr = 0, Oi = op(Jc));
  const e = Array.prototype.slice.call(Oi, Nr, Nr += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, Nt[e[0]] + Nt[e[1]] + Nt[e[2]] + Nt[e[3]] + "-" + Nt[e[4]] + Nt[e[5]] + "-" + Nt[e[6]] + Nt[e[7]] + "-" + Nt[e[8]] + Nt[e[9]] + "-" + Nt[e[10]] + Nt[e[11]] + Nt[e[12]] + Nt[e[13]] + Nt[e[14]] + Nt[e[15]];
}
function ip(e) {
  return e ?? null;
}
function ed(e, t) {
  return e ?? (t === true ? `f_${wr()}` : null);
}
function si({ getValue: e, required: t = true } = {}) {
  if (nn.value === true) {
    const n = K(e !== void 0 ? ip(e()) : null);
    return t === true && n.value === null && ft(() => {
      n.value = `f_${wr()}`;
    }), e !== void 0 && be(e, (l) => {
      n.value = ed(l, t);
    }), n;
  }
  return e !== void 0 ? v(() => ed(e(), t)) : K(`f_${wr()}`);
}
var up = Object.keys(xs);
function sp(e) {
  return up.reduce((t, n) => {
    const l = e[n];
    return l !== void 0 && (t[n] = l), t;
  }, {});
}
var cp = he({ name: "QBtnDropdown", props: { ...xs, ...Il, modelValue: Boolean, split: Boolean, dropdownIcon: String, contentClass: [Array, String, Object], contentStyle: [Array, String, Object], cover: Boolean, persistent: Boolean, noEscDismiss: Boolean, noRouteDismiss: Boolean, autoClose: Boolean, noRefocus: Boolean, noFocus: Boolean, menuAnchor: { type: String, default: "bottom end" }, menuSelf: { type: String, default: "top end" }, menuOffset: Array, disableMainBtn: Boolean, disableDropdown: Boolean, noIconAnimation: Boolean, toggleAriaLabel: String }, emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), a = K(e.modelValue), r = K(null), o = si(), i = v(() => {
    const b = { "aria-expanded": a.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": o.value, "aria-label": e.toggleAriaLabel || l.$q.lang.label[a.value === true ? "collapse" : "expand"](e.label) };
    return (e.disable === true || e.split === false && e.disableMainBtn === true || e.disableDropdown === true) && (b["aria-disabled"] = "true"), b;
  }), u = v(() => "q-btn-dropdown__arrow" + (a.value === true && e.noIconAnimation === false ? " rotate-180" : "") + (e.split === false ? " q-btn-dropdown__arrow-container" : "")), c = v(() => Sm(e)), s = v(() => sp(e));
  be(() => e.modelValue, (b) => {
    var _a2;
    (_a2 = r.value) == null ? void 0 : _a2[b ? "show" : "hide"]();
  }), be(() => e.split, y);
  function f(b) {
    a.value = true, n("beforeShow", b);
  }
  function m(b) {
    n("show", b), n("update:modelValue", true);
  }
  function h(b) {
    a.value = false, n("beforeHide", b);
  }
  function g(b) {
    n("hide", b), n("update:modelValue", false);
  }
  function _(b) {
    n("click", b);
  }
  function w(b) {
    wt(b), y(), n("click", b);
  }
  function k(b) {
    var _a2;
    (_a2 = r.value) == null ? void 0 : _a2.toggle(b);
  }
  function p(b) {
    var _a2;
    (_a2 = r.value) == null ? void 0 : _a2.show(b);
  }
  function y(b) {
    var _a2;
    (_a2 = r.value) == null ? void 0 : _a2.hide(b);
  }
  return Object.assign(l, { show: p, hide: y, toggle: k }), ft(() => {
    e.modelValue === true && p();
  }), () => {
    const b = [d(et, { class: u.value, name: e.dropdownIcon || l.$q.iconSet.arrow.dropdown })];
    return e.disableDropdown !== true && b.push(d(ui, { ref: r, id: o.value, class: e.contentClass, style: e.contentStyle, cover: e.cover, fit: true, persistent: e.persistent, noEscDismiss: e.noEscDismiss, noRouteDismiss: e.noRouteDismiss, autoClose: e.autoClose, noFocus: e.noFocus, noRefocus: e.noRefocus, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, separateClosePopup: true, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, onBeforeShow: f, onShow: m, onBeforeHide: h, onHide: g }, t.default)), e.split === false ? d(Ze, { class: "q-btn-dropdown q-btn-dropdown--simple", ...s.value, ...i.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: _ }, { default: () => Pe(t.label, []).concat(b), loading: t.loading }) : d(xm, { class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item", rounded: e.rounded, square: e.square, ...c.value, glossy: e.glossy, stretch: e.stretch }, () => [d(Ze, { class: "q-btn-dropdown--current", ...s.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: w }, { default: t.label, loading: t.loading }), d(Ze, { class: "q-btn-dropdown__arrow-container q-anchor--skip", ...i.value, ...c.value, disable: e.disable === true || e.disableDropdown === true, rounded: e.rounded, color: e.color, textColor: e.textColor, dense: e.dense, size: e.size, padding: e.padding, ripple: e.ripple }, () => b)]);
  };
} }), wn = { name: String };
function $r(e) {
  return v(() => ({ type: "hidden", name: e.name, value: e.modelValue }));
}
function Cl(e = {}) {
  return (t, n, l) => {
    t[n](d("input", { class: "hidden" + (l || ""), ...e.value }));
  };
}
function Ms(e) {
  return v(() => e.name || e.for);
}
he({ name: "QBtnToggle", props: { ...wn, modelValue: { required: true }, options: { type: Array, required: true, validator: (e) => e.every((t) => ("label" in t || "icon" in t || "slot" in t) && "value" in t) }, color: String, textColor: String, toggleColor: { type: String, default: "primary" }, toggleTextColor: String, outline: Boolean, flat: Boolean, unelevated: Boolean, rounded: Boolean, push: Boolean, glossy: Boolean, size: String, padding: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, readonly: Boolean, disable: Boolean, stack: Boolean, stretch: Boolean, spread: Boolean, clearable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "clear", "click"], setup(e, { slots: t, emit: n }) {
  const l = v(() => e.options.find((m) => m.value === e.modelValue) !== void 0), a = v(() => ({ type: "hidden", name: e.name, value: e.modelValue })), r = Cl(a), o = v(() => Sm(e)), i = v(() => ({ rounded: e.rounded, dense: e.dense, ...o.value })), u = v(() => e.options.map((m, h) => {
    const { attrs: g, value: _, slot: w, ...k } = m;
    return { slot: w, props: { key: h, "aria-pressed": _ === e.modelValue ? "true" : "false", ...g, ...k, ...i.value, disable: e.disable === true || k.disable === true, color: _ === e.modelValue ? s(k, "toggleColor") : s(k, "color"), textColor: _ === e.modelValue ? s(k, "toggleTextColor") : s(k, "textColor"), noCaps: s(k, "noCaps") === true, noWrap: s(k, "noWrap") === true, size: s(k, "size"), padding: s(k, "padding"), ripple: s(k, "ripple"), stack: s(k, "stack") === true, stretch: s(k, "stretch") === true, onClick(p) {
      c(_, m, p);
    } } };
  }));
  function c(m, h, g) {
    e.readonly !== true && (e.modelValue === m ? e.clearable === true && (n("update:modelValue", null, null), n("clear")) : n("update:modelValue", m, h), n("click", g));
  }
  function s(m, h) {
    return m[h] === void 0 ? e[h] : m[h];
  }
  function f() {
    const m = u.value.map((h) => d(Ze, h.props, h.slot !== void 0 ? t[h.slot] : void 0));
    return e.name !== void 0 && e.disable !== true && l.value === true && r(m, "push"), qt(t.default, m);
  }
  return () => d(xm, { class: "q-btn-toggle", ...o.value, rounded: e.rounded, stretch: e.stretch, glossy: e.glossy, spread: e.spread }, f);
} });
var Om = he({ name: "QCard", props: { ...nt, tag: { type: String, default: "div" }, square: Boolean, flat: Boolean, bordered: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = lt(e, n), a = v(() => "q-card" + (l.value === true ? " q-card--dark q-dark" : "") + (e.bordered === true ? " q-card--bordered" : "") + (e.square === true ? " q-card--square no-border-radius" : "") + (e.flat === true ? " q-card--flat no-shadow" : ""));
  return () => d(e.tag, { class: a.value }, Pe(t.default));
} }), Fl = he({ name: "QCardSection", props: { tag: { type: String, default: "div" }, horizontal: Boolean }, setup(e, { slots: t }) {
  const n = v(() => `q-card__section q-card__section--${e.horizontal === true ? "horiz row no-wrap" : "vert"}`);
  return () => d(e.tag, { class: n.value }, Pe(t.default));
} }), dp = he({ name: "QCardActions", props: { ...ys, vertical: Boolean }, setup(e, { slots: t }) {
  const n = ps(e), l = v(() => `q-card__actions ${n.value} q-card__actions--${e.vertical === true ? "vert column" : "horiz row"}`);
  return () => d("div", { class: l.value }, Pe(t.default));
} }), Es = { left: true, right: true, up: true, down: true, horizontal: true, vertical: true }, fp = Object.keys(Es);
Es.all = true;
function Lo(e) {
  const t = {};
  for (const n of fp) e[n] === true && (t[n] = true);
  return Object.keys(t).length === 0 ? Es : (t.horizontal === true ? t.left = t.right = true : t.left === true && t.right === true && (t.horizontal = true), t.vertical === true ? t.up = t.down = true : t.up === true && t.down === true && (t.vertical = true), t.horizontal === true && t.vertical === true && (t.all = true), t);
}
var vp = ["INPUT", "TEXTAREA"];
function Bo(e, t) {
  return t.event === void 0 && e.target !== void 0 && e.target.draggable !== true && typeof t.handler == "function" && vp.includes(e.target.nodeName.toUpperCase()) === false && (e.qClonedBy === void 0 || e.qClonedBy.indexOf(t.uid) === -1);
}
function mp(e) {
  const t = [0.06, 6, 50];
  return typeof e == "string" && e.length && e.split(":").forEach((n, l) => {
    const a = parseFloat(n);
    a && (t[l] = a);
  }), t;
}
var hp = Rn({ name: "touch-swipe", beforeMount(e, { value: t, arg: n, modifiers: l }) {
  if (l.mouse !== true && ze.has.touch !== true) return;
  const a = l.mouseCapture === true ? "Capture" : "", r = { handler: t, sensitivity: mp(n), direction: Lo(l), noop: St, mouseStart(o) {
    Bo(o, r) && ti(o) && (kt(r, "temp", [[document, "mousemove", "move", `notPassive${a}`], [document, "mouseup", "end", "notPassiveCapture"]]), r.start(o, true));
  }, touchStart(o) {
    if (Bo(o, r)) {
      const i = o.target;
      kt(r, "temp", [[i, "touchmove", "move", "notPassiveCapture"], [i, "touchcancel", "end", "notPassiveCapture"], [i, "touchend", "end", "notPassiveCapture"]]), r.start(o);
    }
  }, start(o, i) {
    ze.is.firefox === true && ha(e, true);
    const u = en(o);
    r.event = { x: u.left, y: u.top, time: Date.now(), mouse: i === true, dir: false };
  }, move(o) {
    if (r.event === void 0) return;
    if (r.event.dir !== false) {
      je(o);
      return;
    }
    const i = Date.now() - r.event.time;
    if (i === 0) return;
    const u = en(o), c = u.left - r.event.x, s = Math.abs(c), f = u.top - r.event.y, m = Math.abs(f);
    if (r.event.mouse !== true) {
      if (s < r.sensitivity[1] && m < r.sensitivity[1]) {
        r.end(o);
        return;
      }
    } else if (window.getSelection().toString() !== "") {
      r.end(o);
      return;
    } else if (s < r.sensitivity[2] && m < r.sensitivity[2]) return;
    const h = s / i, g = m / i;
    r.direction.vertical === true && s < m && s < 100 && g > r.sensitivity[0] && (r.event.dir = f < 0 ? "up" : "down"), r.direction.horizontal === true && s > m && m < 100 && h > r.sensitivity[0] && (r.event.dir = c < 0 ? "left" : "right"), r.direction.up === true && s < m && f < 0 && s < 100 && g > r.sensitivity[0] && (r.event.dir = "up"), r.direction.down === true && s < m && f > 0 && s < 100 && g > r.sensitivity[0] && (r.event.dir = "down"), r.direction.left === true && s > m && c < 0 && m < 100 && h > r.sensitivity[0] && (r.event.dir = "left"), r.direction.right === true && s > m && c > 0 && m < 100 && h > r.sensitivity[0] && (r.event.dir = "right"), r.event.dir !== false ? (je(o), r.event.mouse === true && (document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), Mn(), r.styleCleanup = (_) => {
      r.styleCleanup = void 0, document.body.classList.remove("non-selectable");
      const w = () => {
        document.body.classList.remove("no-pointer-events--children");
      };
      _ === true ? setTimeout(w, 50) : w();
    }), r.handler({ evt: o, touch: r.event.mouse !== true, mouse: r.event.mouse, direction: r.event.dir, duration: i, distance: { x: s, y: m } })) : r.end(o);
  }, end(o) {
    var _a2;
    r.event !== void 0 && (Wt(r, "temp"), ze.is.firefox === true && ha(e, false), (_a2 = r.styleCleanup) == null ? void 0 : _a2.call(r, true), o !== void 0 && r.event.dir !== false && je(o), r.event = void 0);
  } };
  if (e.__qtouchswipe = r, l.mouse === true) {
    const o = l.mouseCapture === true || l.mousecapture === true ? "Capture" : "";
    kt(r, "main", [[e, "mousedown", "mouseStart", `passive${o}`]]);
  }
  ze.has.touch === true && kt(r, "main", [[e, "touchstart", "touchStart", `passive${l.capture === true ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const n = e.__qtouchswipe;
  n !== void 0 && (t.oldValue !== t.value && (typeof t.value != "function" && n.end(), n.handler = t.value), n.direction = Lo(t.modifiers));
}, beforeUnmount(e) {
  var _a2;
  const t = e.__qtouchswipe;
  t !== void 0 && (Wt(t, "main"), Wt(t, "temp"), ze.is.firefox === true && ha(e, false), (_a2 = t.styleCleanup) == null ? void 0 : _a2.call(t), delete e.__qtouchswipe);
} });
function Pr() {
  let e = /* @__PURE__ */ Object.create(null);
  return { getCache: (t, n) => e[t] === void 0 ? e[t] = typeof n == "function" ? n() : n : e[t], setCache(t, n) {
    e[t] = n;
  }, hasCache(t) {
    return Object.hasOwnProperty.call(e, t);
  }, clearCache(t) {
    t !== void 0 ? delete e[t] : e = /* @__PURE__ */ Object.create(null);
  } };
}
var As = { name: { required: true }, disable: Boolean }, td = { setup(e, { slots: t }) {
  return () => d("div", { class: "q-panel scroll", role: "tabpanel" }, Pe(t.default));
} }, Rs = { modelValue: { required: true }, animated: Boolean, infinite: Boolean, swipeable: Boolean, vertical: Boolean, transitionPrev: String, transitionNext: String, transitionDuration: { type: [String, Number], default: 300 }, keepAlive: Boolean, keepAliveInclude: [String, Array, RegExp], keepAliveExclude: [String, Array, RegExp], keepAliveMax: Number }, $s = ["update:modelValue", "beforeTransition", "transition"];
function Ps() {
  const { props: e, emit: t, proxy: n } = Se(), { getCache: l } = Pr(), { registerTimeout: a } = Zn();
  let r, o;
  const i = K(null), u = { value: null };
  function c(C) {
    const H = e.vertical === true ? "up" : "left";
    D((n.$q.lang.rtl === true ? -1 : 1) * (C.direction === H ? 1 : -1));
  }
  const s = v(() => [[hp, c, void 0, { horizontal: e.vertical !== true, vertical: e.vertical, mouse: true }]]), f = v(() => e.transitionPrev || `slide-${e.vertical === true ? "down" : "right"}`), m = v(() => e.transitionNext || `slide-${e.vertical === true ? "up" : "left"}`), h = v(() => `--q-transition-duration: ${e.transitionDuration}ms`), g = v(() => typeof e.modelValue == "string" || typeof e.modelValue == "number" ? e.modelValue : String(e.modelValue)), _ = v(() => ({ include: e.keepAliveInclude, exclude: e.keepAliveExclude, max: e.keepAliveMax })), w = v(() => e.keepAliveInclude !== void 0 || e.keepAliveExclude !== void 0);
  be(() => e.modelValue, (C, H) => {
    const Y = b(C) === true ? x(C) : -1;
    o !== true && F(Y === -1 ? 0 : Y < x(H) ? -1 : 1), u.value !== Y && (u.value = Y, t("beforeTransition", C, H), a(() => {
      t("transition", C, H);
    }, e.transitionDuration));
  });
  function k() {
    D(1);
  }
  function p() {
    D(-1);
  }
  function y(C) {
    t("update:modelValue", C);
  }
  function b(C) {
    return C != null && C !== "";
  }
  function x(C) {
    return r.findIndex((H) => H.props.name === C && H.props.disable !== "" && H.props.disable !== true);
  }
  function $() {
    return r.filter((C) => C.props.disable !== "" && C.props.disable !== true);
  }
  function F(C) {
    const H = C !== 0 && e.animated === true && u.value !== -1 ? "q-transition--" + (C === -1 ? f.value : m.value) : null;
    i.value !== H && (i.value = H);
  }
  function D(C, H = u.value) {
    let Y = H + C;
    for (; Y !== -1 && Y < r.length; ) {
      const L = r[Y];
      if (L !== void 0 && L.props.disable !== "" && L.props.disable !== true) {
        F(C), o = true, t("update:modelValue", L.props.name), setTimeout(() => {
          o = false;
        });
        return;
      }
      Y += C;
    }
    e.infinite === true && r.length !== 0 && H !== -1 && H !== r.length && D(C, C === -1 ? r.length : -1);
  }
  function B() {
    const C = x(e.modelValue);
    return u.value !== C && (u.value = C), true;
  }
  function P() {
    const C = b(e.modelValue) === true && B() && r[u.value];
    return e.keepAlive === true ? [d(mv, _.value, [d(w.value === true ? l(g.value, () => ({ ...td, name: g.value })) : td, { key: g.value, style: h.value }, () => C)])] : [d("div", { class: "q-panel scroll", style: h.value, key: g.value, role: "tabpanel" }, [C])];
  }
  function I() {
    if (r.length !== 0) return e.animated === true ? [d(Ft, { name: i.value }, P)] : P();
  }
  function q(C) {
    return r = _s(Pe(C.default, [])).filter((H) => H.props !== null && H.props.slot === void 0 && b(H.props.name) === true), r.length;
  }
  function M() {
    return r;
  }
  return Object.assign(n, { next: k, previous: p, goTo: y }), { panelIndex: u, panelDirectives: s, updatePanelsList: q, updatePanelIndex: B, getPanelContent: I, getEnabledPanels: $, getPanels: M, isValidPanelName: b, keepAliveProps: _, needsUniqueKeepAliveWrapper: w, goToPanelByOffset: D, goToPanel: y, nextPanel: k, previousPanel: p };
}
var Oa = 0, Ls = { fullscreen: Boolean, noRouteFullscreenExit: Boolean }, Bs = ["update:fullscreen", "fullscreen"];
function Fs() {
  const e = Se(), { props: t, emit: n, proxy: l } = e;
  let a, r, o;
  const i = K(false);
  ws(e) === true && be(() => l.$route.fullPath, () => {
    t.noRouteFullscreenExit !== true && s();
  }), be(() => t.fullscreen, (f) => {
    i.value !== f && u();
  }), be(i, (f) => {
    n("update:fullscreen", f), n("fullscreen", f);
  });
  function u() {
    i.value === true ? s() : c();
  }
  function c() {
    i.value !== true && (i.value = true, o = l.$el.parentNode, o.replaceChild(r, l.$el), document.body.appendChild(l.$el), Oa++, Oa === 1 && document.body.classList.add("q-body--fullscreen-mixin"), a = { handler: s }, yr.add(a));
  }
  function s() {
    i.value === true && (a !== void 0 && (yr.remove(a), a = void 0), o.replaceChild(l.$el, r), i.value = false, Oa = Math.max(0, Oa - 1), Oa === 0 && (document.body.classList.remove("q-body--fullscreen-mixin"), l.$el.scrollIntoView !== void 0 && setTimeout(() => {
      l.$el.scrollIntoView();
    })));
  }
  return Yo(() => {
    r = document.createElement("span");
  }), ft(() => {
    t.fullscreen === true && c();
  }), Ke(s), Object.assign(l, { toggleFullscreen: u, setFullscreen: c, exitFullscreen: s }), { inFullscreen: i, toggleFullscreen: u };
}
var gp = ["top", "right", "bottom", "left"], bp = ["regular", "flat", "outline", "push", "unelevated"];
he({ name: "QCarousel", props: { ...nt, ...Rs, ...Ls, transitionPrev: { type: String, default: "fade" }, transitionNext: { type: String, default: "fade" }, height: String, padding: Boolean, controlColor: String, controlTextColor: String, controlType: { type: String, validator: (e) => bp.includes(e), default: "flat" }, autoplay: [Number, Boolean], arrows: Boolean, prevIcon: String, nextIcon: String, navigation: Boolean, navigationPosition: { type: String, validator: (e) => gp.includes(e) }, navigationIcon: String, navigationActiveIcon: String, thumbnails: Boolean }, emits: [...Bs, ...$s], setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = lt(e, n);
  let a = null, r;
  const { updatePanelsList: o, getPanelContent: i, panelDirectives: u, goToPanel: c, previousPanel: s, nextPanel: f, getEnabledPanels: m, panelIndex: h } = Ps(), { inFullscreen: g } = Fs(), _ = v(() => g.value !== true && e.height !== void 0 ? { height: e.height } : {}), w = v(() => e.vertical === true ? "vertical" : "horizontal"), k = v(() => e.navigationPosition || (e.vertical === true ? "right" : "bottom")), p = v(() => `q-carousel q-panel-parent q-carousel--with${e.padding === true ? "" : "out"}-padding` + (g.value === true ? " fullscreen" : "") + (l.value === true ? " q-carousel--dark q-dark" : "") + (e.arrows === true ? ` q-carousel--arrows-${w.value}` : "") + (e.navigation === true ? ` q-carousel--navigation-${k.value}` : "")), y = v(() => {
    const P = [e.prevIcon || n.iconSet.carousel[e.vertical === true ? "up" : "left"], e.nextIcon || n.iconSet.carousel[e.vertical === true ? "down" : "right"]];
    return e.vertical === false && n.lang.rtl === true ? P.reverse() : P;
  }), b = v(() => e.navigationIcon || n.iconSet.carousel.navigationIcon), x = v(() => e.navigationActiveIcon || b.value), $ = v(() => ({ color: e.controlColor, textColor: e.controlTextColor, round: true, [e.controlType]: true, dense: true }));
  be(() => e.modelValue, () => {
    e.autoplay && F();
  }), be(() => e.autoplay, (P) => {
    P ? F() : a !== null && (clearTimeout(a), a = null);
  });
  function F() {
    const P = pr(e.autoplay) === true ? Math.abs(e.autoplay) : 5e3;
    a !== null && clearTimeout(a), a = setTimeout(() => {
      a = null, P >= 0 ? f() : s();
    }, P);
  }
  ft(() => {
    e.autoplay && F();
  }), Ke(() => {
    a !== null && clearTimeout(a);
  });
  function D(P, I) {
    return d("div", { class: `q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${P} q-carousel__navigation--${k.value}` + (e.controlColor !== void 0 ? ` text-${e.controlColor}` : "") }, [d("div", { class: "q-carousel__navigation-inner flex flex-center no-wrap" }, m().map(I))]);
  }
  function B() {
    const P = [];
    if (e.navigation === true) {
      const I = t["navigation-icon"] !== void 0 ? t["navigation-icon"] : (M) => d(Ze, { key: "nav" + M.name, class: `q-carousel__navigation-icon q-carousel__navigation-icon--${M.active === true ? "" : "in"}active`, ...M.btnProps, onClick: M.onClick }), q = r - 1;
      P.push(D("buttons", (M, C) => {
        const H = M.props.name, Y = h.value === C;
        return I({ index: C, maxIndex: q, name: H, active: Y, btnProps: { icon: Y === true ? x.value : b.value, size: "sm", ...$.value }, onClick: () => {
          c(H);
        } });
      }));
    } else if (e.thumbnails === true) {
      const I = e.controlColor !== void 0 ? ` text-${e.controlColor}` : "";
      P.push(D("thumbnails", (q) => {
        const M = q.props;
        return d("img", { key: "tmb#" + M.name, class: `q-carousel__thumbnail q-carousel__thumbnail--${M.name === e.modelValue ? "" : "in"}active` + I, src: M.imgSrc || M["img-src"], onClick: () => {
          c(M.name);
        } });
      }));
    }
    return e.arrows === true && h.value >= 0 && ((e.infinite === true || h.value > 0) && P.push(d("div", { key: "prev", class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${w.value} absolute flex flex-center` }, [d(Ze, { icon: y.value[0], ...$.value, onClick: s })])), (e.infinite === true || h.value < r - 1) && P.push(d("div", { key: "next", class: `q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${w.value} absolute flex flex-center` }, [d(Ze, { icon: y.value[1], ...$.value, onClick: f })]))), qt(t.control, P);
  }
  return () => (r = o(t), d("div", { class: p.value, style: _.value }, [pn("div", { class: "q-carousel__slides-container" }, i(), "sl-cont", e.swipeable, () => u.value)].concat(B())));
} });
he({ name: "QCarouselSlide", props: { ...As, imgSrc: String }, setup(e, { slots: t }) {
  const n = v(() => e.imgSrc ? { backgroundImage: `url("${e.imgSrc}")` } : {});
  return () => d("div", { class: "q-carousel__slide", style: n.value }, Pe(t.default));
} });
he({ name: "QCarouselControl", props: { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, default: () => [18, 18], validator: (e) => e.length === 2 } }, setup(e, { slots: t }) {
  const n = v(() => `q-carousel__control absolute absolute-${e.position}`), l = v(() => ({ margin: `${e.offset[1]}px ${e.offset[0]}px` }));
  return () => d("div", { class: n.value, style: l.value }, Pe(t.default));
} });
he({ name: "QChatMessage", props: { sent: Boolean, label: String, bgColor: String, textColor: String, name: String, avatar: String, text: Array, stamp: String, size: String, labelHtml: Boolean, nameHtml: Boolean, textHtml: Boolean, stampHtml: Boolean }, setup(e, { slots: t }) {
  const n = v(() => e.sent === true ? "sent" : "received"), l = v(() => `q-message-text-content q-message-text-content--${n.value}` + (e.textColor !== void 0 ? ` text-${e.textColor}` : "")), a = v(() => `q-message-text q-message-text--${n.value}` + (e.bgColor !== void 0 ? ` text-${e.bgColor}` : "")), r = v(() => "q-message-container row items-end no-wrap" + (e.sent === true ? " reverse" : "")), o = v(() => e.size !== void 0 ? `col-${e.size}` : ""), i = v(() => ({ msg: e.textHtml === true ? "innerHTML" : "textContent", stamp: e.stampHtml === true ? "innerHTML" : "textContent", name: e.nameHtml === true ? "innerHTML" : "textContent", label: e.labelHtml === true ? "innerHTML" : "textContent" }));
  function u(s) {
    return t.stamp !== void 0 ? [s, d("div", { class: "q-message-stamp" }, t.stamp())] : e.stamp ? [s, d("div", { class: "q-message-stamp", [i.value.stamp]: e.stamp })] : [s];
  }
  function c(s, f) {
    const m = f === true ? s.length > 1 ? (h) => h : (h) => d("div", [h]) : (h) => d("div", { [i.value.msg]: h });
    return s.map((h, g) => d("div", { key: g, class: a.value }, [d("div", { class: l.value }, u(m(h)))]));
  }
  return () => {
    const s = [];
    t.avatar !== void 0 ? s.push(t.avatar()) : e.avatar !== void 0 && s.push(d("img", { class: `q-message-avatar q-message-avatar--${n.value}`, src: e.avatar, "aria-hidden": "true" }));
    const f = [];
    t.name !== void 0 ? f.push(d("div", { class: `q-message-name q-message-name--${n.value}` }, t.name())) : e.name !== void 0 && f.push(d("div", { class: `q-message-name q-message-name--${n.value}`, [i.value.name]: e.name })), t.default !== void 0 ? f.push(c(_s(t.default()), true)) : e.text !== void 0 && f.push(c(e.text)), s.push(d("div", { class: o.value }, f));
    const m = [];
    return t.label !== void 0 ? m.push(d("div", { class: "q-message-label" }, t.label())) : e.label !== void 0 && m.push(d("div", { class: "q-message-label", [i.value.label]: e.label })), m.push(d("div", { class: r.value }, s)), d("div", { class: `q-message q-message-${n.value}` }, m);
  };
} });
function Vm(e, t) {
  const n = K(null), l = v(() => e.disable === true ? null : d("span", { ref: n, class: "no-outline", tabindex: -1 }));
  function a(r) {
    const o = t.value;
    (r == null ? void 0 : r.qAvoidFocus) !== true && ((r == null ? void 0 : r.type.indexOf("key")) === 0 ? document.activeElement !== o && (o == null ? void 0 : o.contains(document.activeElement)) === true && o.focus() : n.value !== null && (r === void 0 || (o == null ? void 0 : o.contains(r.target)) === true) && n.value.focus());
  }
  return { refocusTargetEl: l, refocusTarget: a };
}
var zm = { xs: 30, sm: 35, md: 40, lg: 50, xl: 60 }, Im = { ...nt, ...el, ...wn, modelValue: { required: true, default: null }, val: {}, trueValue: { default: true }, falseValue: { default: false }, indeterminateValue: { default: null }, checkedIcon: String, uncheckedIcon: String, indeterminateIcon: String, toggleOrder: { type: String, validator: (e) => e === "tf" || e === "ft" }, toggleIndeterminate: Boolean, label: String, leftLabel: Boolean, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, Dm = ["update:modelValue"];
function Nm(e, t) {
  const { props: n, slots: l, emit: a, proxy: r } = Se(), { $q: o } = r, i = lt(n, o), u = K(null), { refocusTargetEl: c, refocusTarget: s } = Vm(n, u), f = tl(n, zm), m = v(() => n.val !== void 0 && Array.isArray(n.modelValue)), h = v(() => {
    const q = Ge(n.val);
    return m.value === true ? n.modelValue.findIndex((M) => Ge(M) === q) : -1;
  }), g = v(() => m.value === true ? h.value !== -1 : Ge(n.modelValue) === Ge(n.trueValue)), _ = v(() => m.value === true ? h.value === -1 : Ge(n.modelValue) === Ge(n.falseValue)), w = v(() => g.value === false && _.value === false), k = v(() => n.disable === true ? -1 : n.tabindex || 0), p = v(() => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (n.disable === true ? " disabled" : "") + (i.value === true ? ` q-${e}--dark` : "") + (n.dense === true ? ` q-${e}--dense` : "") + (n.leftLabel === true ? " reverse" : "")), y = v(() => {
    const q = g.value === true ? "truthy" : _.value === true ? "falsy" : "indet", M = n.color !== void 0 && (n.keepColor === true || (e === "toggle" ? g.value === true : _.value !== true)) ? ` text-${n.color}` : "";
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${q}${M}`;
  }), b = v(() => {
    const q = { type: "checkbox" };
    return n.name !== void 0 && Object.assign(q, { ".checked": g.value, "^checked": g.value === true ? "checked" : void 0, name: n.name, value: m.value === true ? n.val : n.trueValue }), q;
  }), x = Cl(b), $ = v(() => {
    const q = { tabindex: k.value, role: e === "toggle" ? "switch" : "checkbox", "aria-label": n.label, "aria-checked": w.value === true ? "mixed" : g.value === true ? "true" : "false" };
    return n.disable === true && (q["aria-disabled"] = "true"), q;
  });
  function F(q) {
    q !== void 0 && (je(q), s(q)), n.disable !== true && a("update:modelValue", D(), q);
  }
  function D() {
    if (m.value === true) {
      if (g.value === true) {
        const q = n.modelValue.slice();
        return q.splice(h.value, 1), q;
      }
      return n.modelValue.concat([n.val]);
    }
    if (g.value === true) {
      if (n.toggleOrder !== "ft" || n.toggleIndeterminate === false) return n.falseValue;
    } else if (_.value === true) {
      if (n.toggleOrder === "ft" || n.toggleIndeterminate === false) return n.trueValue;
    } else return n.toggleOrder !== "ft" ? n.trueValue : n.falseValue;
    return n.indeterminateValue;
  }
  function B(q) {
    (q.keyCode === 13 || q.keyCode === 32) && je(q);
  }
  function P(q) {
    (q.keyCode === 13 || q.keyCode === 32) && F(q);
  }
  const I = t(g, w);
  return Object.assign(r, { toggle: F }), () => {
    const q = I();
    n.disable !== true && x(q, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
    const M = [d("div", { class: y.value, style: f.value, "aria-hidden": "true" }, q)];
    c.value !== null && M.push(c.value);
    const C = n.label !== void 0 ? qt(l.default, [n.label]) : Pe(l.default);
    return C !== void 0 && M.push(d("div", { class: `q-${e}__label q-anchor--skip` }, C)), d("div", { ref: u, class: p.value, ...$.value, onClick: F, onKeydown: B, onKeyup: P }, M);
  };
}
var yp = () => d("div", { key: "svg", class: "q-checkbox__bg absolute" }, [d("svg", { class: "q-checkbox__svg fit absolute-full", viewBox: "0 0 24 24" }, [d("path", { class: "q-checkbox__truthy", fill: "none", d: "M1.73,12.91 8.1,19.28 22.79,4.59" }), d("path", { class: "q-checkbox__indet", d: "M4,14H20V10H4" })])]), ir = he({ name: "QCheckbox", props: Im, emits: Dm, setup(e) {
  const t = yp();
  function n(l, a) {
    const r = v(() => (l.value === true ? e.checkedIcon : a.value === true ? e.indeterminateIcon : e.uncheckedIcon) || null);
    return () => r.value !== null ? [d("div", { key: "icon", class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap" }, [d(et, { class: "q-checkbox__icon", name: r.value })])] : [t];
  }
  return Nm("checkbox", n);
} }), pp = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, Hm = he({ name: "QChip", props: { ...nt, ...el, dense: Boolean, icon: String, iconRight: String, iconRemove: String, iconSelected: String, label: [String, Number], color: String, textColor: String, modelValue: { type: Boolean, default: true }, selected: { type: Boolean, default: null }, square: Boolean, outline: Boolean, clickable: Boolean, removable: Boolean, removeAriaLabel: String, tabindex: [String, Number], disable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "update:selected", "remove", "click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = lt(e, l), r = tl(e, pp), o = v(() => e.selected === true || e.icon !== void 0), i = v(() => e.selected === true ? e.iconSelected || l.iconSet.chip.selected : e.icon), u = v(() => e.iconRemove || l.iconSet.chip.remove), c = v(() => e.disable === false && (e.clickable === true || e.selected !== null)), s = v(() => {
    const w = e.outline === true && e.color || e.textColor;
    return "q-chip row inline no-wrap items-center" + (e.outline === false && e.color !== void 0 ? ` bg-${e.color}` : "") + (w ? ` text-${w} q-chip--colored` : "") + (e.disable === true ? " disabled" : "") + (e.dense === true ? " q-chip--dense" : "") + (e.outline === true ? " q-chip--outline" : "") + (e.selected === true ? " q-chip--selected" : "") + (c.value === true ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (e.square === true ? " q-chip--square" : "") + (a.value === true ? " q-chip--dark q-dark" : "");
  }), f = v(() => {
    const w = e.disable === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: e.tabindex || 0 }, k = { ...w, role: "button", "aria-hidden": "false", "aria-label": e.removeAriaLabel || l.lang.label.remove };
    return { chip: w, remove: k };
  });
  function m(w) {
    w.keyCode === 13 && h(w);
  }
  function h(w) {
    e.disable || (n("update:selected", !e.selected), n("click", w));
  }
  function g(w) {
    (w.keyCode === void 0 || w.keyCode === 13) && (je(w), e.disable === false && (n("update:modelValue", false), n("remove")));
  }
  function _() {
    const w = [];
    c.value === true && w.push(d("div", { class: "q-focus-helper" })), o.value === true && w.push(d(et, { class: "q-chip__icon q-chip__icon--left", name: i.value }));
    const k = e.label !== void 0 ? [d("div", { class: "ellipsis" }, [e.label])] : void 0;
    return w.push(d("div", { class: "q-chip__content col row no-wrap items-center q-anchor--skip" }, bs(t.default, k))), e.iconRight && w.push(d(et, { class: "q-chip__icon q-chip__icon--right", name: e.iconRight })), e.removable === true && w.push(d(et, { class: "q-chip__icon q-chip__icon--remove cursor-pointer", name: u.value, ...f.value.remove, onClick: g, onKeyup: g })), w;
  }
  return () => {
    if (e.modelValue === false) return;
    const w = { class: s.value, style: r.value };
    return c.value === true && Object.assign(w, f.value.chip, { onClick: h, onKeyup: m }), pn("div", w, _(), "ripple", e.ripple !== false && e.disable !== true, () => [[ri, e.ripple]]);
  };
} }), Os = { ...el, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, color: String, centerColor: String, trackColor: String, fontSize: String, rounded: Boolean, thickness: { type: Number, default: 0.2, validator: (e) => e >= 0 && e <= 1 }, angle: { type: Number, default: 0 }, showValue: Boolean, reverse: Boolean, instantFeedback: Boolean }, Vu = 50, jm = 2 * Vu, Um = jm * Math.PI, _p = Math.round(Um * 1e3) / 1e3, Qm = he({ name: "QCircularProgress", props: { ...Os, value: { type: Number, default: 0 }, animationSpeed: { type: [String, Number], default: 600 }, indeterminate: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = tl(e), a = v(() => {
    const h = (n.lang.rtl === true ? -1 : 1) * e.angle;
    return { transform: e.reverse !== (n.lang.rtl === true) ? `scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90 - h}deg)` : `rotate3d(0, 0, 1, ${h - 90}deg)` };
  }), r = v(() => e.instantFeedback !== true && e.indeterminate !== true ? { transition: `stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease` } : ""), o = v(() => jm / (1 - e.thickness / 2)), i = v(() => `${o.value / 2} ${o.value / 2} ${o.value} ${o.value}`), u = v(() => ct(e.value, e.min, e.max)), c = v(() => e.max - e.min), s = v(() => e.thickness / 2 * o.value), f = v(() => {
    const h = (e.max - u.value) / c.value, g = e.rounded === true && u.value < e.max && h < 0.25 ? s.value / 2 * (1 - h / 0.25) : 0;
    return Um * h + g;
  });
  function m({ thickness: h, offset: g, color: _, cls: w, rounded: k }) {
    return d("circle", { class: "q-circular-progress__" + w + (_ !== void 0 ? ` text-${_}` : ""), style: r.value, fill: "transparent", stroke: "currentColor", "stroke-width": h, "stroke-dasharray": _p, "stroke-dashoffset": g, "stroke-linecap": k, cx: o.value, cy: o.value, r: Vu });
  }
  return () => {
    const h = [];
    e.centerColor !== void 0 && e.centerColor !== "transparent" && h.push(d("circle", { class: `q-circular-progress__center text-${e.centerColor}`, fill: "currentColor", r: Vu - s.value / 2, cx: o.value, cy: o.value })), e.trackColor !== void 0 && e.trackColor !== "transparent" && h.push(m({ cls: "track", thickness: s.value, offset: 0, color: e.trackColor })), h.push(m({ cls: "circle", thickness: s.value, offset: f.value, color: e.color, rounded: e.rounded === true ? "round" : void 0 }));
    const g = [d("svg", { class: "q-circular-progress__svg", style: a.value, viewBox: i.value, "aria-hidden": "true" }, h)];
    return e.showValue === true && g.push(d("div", { class: "q-circular-progress__text absolute-full row flex-center content-center", style: { fontSize: e.fontSize } }, t.default !== void 0 ? t.default() : [d("div", u.value)])), d("div", { class: `q-circular-progress q-circular-progress--${e.indeterminate === true ? "in" : ""}determinate`, style: l.value, role: "progressbar", "aria-valuemin": e.min, "aria-valuemax": e.max, "aria-valuenow": e.indeterminate === true ? void 0 : u.value }, bs(t.internal, g));
  };
} });
function Vi(e, t, n) {
  const l = en(e);
  let a, r = l.left - t.event.x, o = l.top - t.event.y, i = Math.abs(r), u = Math.abs(o);
  const c = t.direction;
  c.horizontal === true && c.vertical !== true ? a = r < 0 ? "left" : "right" : c.horizontal !== true && c.vertical === true ? a = o < 0 ? "up" : "down" : c.up === true && o < 0 ? (a = "up", i > u && (c.left === true && r < 0 ? a = "left" : c.right === true && r > 0 && (a = "right"))) : c.down === true && o > 0 ? (a = "down", i > u && (c.left === true && r < 0 ? a = "left" : c.right === true && r > 0 && (a = "right"))) : c.left === true && r < 0 ? (a = "left", i < u && (c.up === true && o < 0 ? a = "up" : c.down === true && o > 0 && (a = "down"))) : c.right === true && r > 0 && (a = "right", i < u && (c.up === true && o < 0 ? a = "up" : c.down === true && o > 0 && (a = "down")));
  let s = false;
  if (a === void 0 && n === false) {
    if (t.event.isFirst === true || t.event.lastDir === void 0) return {};
    a = t.event.lastDir, s = true, a === "left" || a === "right" ? (l.left -= r, i = 0, r = 0) : (l.top -= o, u = 0, o = 0);
  }
  return { synthetic: s, payload: { evt: e, touch: t.event.mouse !== true, mouse: t.event.mouse === true, position: l, direction: a, isFirst: t.event.isFirst, isFinal: n === true, duration: Date.now() - t.event.time, distance: { x: i, y: u }, offset: { x: r, y: o }, delta: { x: l.left - t.event.lastX, y: l.top - t.event.lastY } } };
}
var wp = 0, gn = Rn({ name: "touch-pan", beforeMount(e, { value: t, modifiers: n }) {
  if (n.mouse !== true && ze.has.touch !== true) return;
  function l(r, o) {
    n.mouse === true && o === true ? je(r) : (n.stop === true && wt(r), n.prevent === true && Vt(r));
  }
  const a = { uid: "qvtp_" + wp++, handler: t, modifiers: n, direction: Lo(n), noop: St, mouseStart(r) {
    Bo(r, a) && ti(r) && (kt(a, "temp", [[document, "mousemove", "move", "notPassiveCapture"], [document, "mouseup", "end", "passiveCapture"]]), a.start(r, true));
  }, touchStart(r) {
    if (Bo(r, a)) {
      const o = r.target;
      kt(a, "temp", [[o, "touchmove", "move", "notPassiveCapture"], [o, "touchcancel", "end", "passiveCapture"], [o, "touchend", "end", "passiveCapture"]]), a.start(r);
    }
  }, start(r, o) {
    if (ze.is.firefox === true && ha(e, true), a.lastEvt = r, o === true || n.stop === true) {
      if (a.direction.all !== true && (o !== true || a.modifiers.mouseAllDir !== true && a.modifiers.mousealldir !== true)) {
        const c = r.type.indexOf("mouse") !== -1 ? new MouseEvent(r.type, r) : new TouchEvent(r.type, r);
        r.defaultPrevented === true && Vt(c), r.cancelBubble === true && wt(c), Object.assign(c, { qKeyEvent: r.qKeyEvent, qClickOutside: r.qClickOutside, qAnchorHandled: r.qAnchorHandled, qClonedBy: r.qClonedBy === void 0 ? [a.uid] : r.qClonedBy.concat(a.uid) }), a.initialEvent = { target: r.target, event: c };
      }
      wt(r);
    }
    const { left: i, top: u } = en(r);
    a.event = { x: i, y: u, time: Date.now(), mouse: o === true, detected: false, isFirst: true, isFinal: false, lastX: i, lastY: u };
  }, move(r) {
    if (a.event === void 0) return;
    const o = en(r), i = o.left - a.event.x, u = o.top - a.event.y;
    if (i === 0 && u === 0) return;
    a.lastEvt = r;
    const c = a.event.mouse === true, s = () => {
      l(r, c);
      let h;
      n.preserveCursor !== true && n.preservecursor !== true && (h = document.documentElement.style.cursor || "", document.documentElement.style.cursor = "grabbing"), c === true && document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), Mn(), a.styleCleanup = (g) => {
        if (a.styleCleanup = void 0, h !== void 0 && (document.documentElement.style.cursor = h), document.body.classList.remove("non-selectable"), c === true) {
          const _ = () => {
            document.body.classList.remove("no-pointer-events--children");
          };
          g !== void 0 ? setTimeout(() => {
            _(), g();
          }, 50) : _();
        } else g !== void 0 && g();
      };
    };
    if (a.event.detected === true) {
      a.event.isFirst !== true && l(r, a.event.mouse);
      const { payload: h, synthetic: g } = Vi(r, a, false);
      h !== void 0 && (a.handler(h) === false ? a.end(r) : (a.styleCleanup === void 0 && a.event.isFirst === true && s(), a.event.lastX = h.position.left, a.event.lastY = h.position.top, a.event.lastDir = g === true ? void 0 : h.direction, a.event.isFirst = false));
      return;
    }
    if (a.direction.all === true || c === true && (a.modifiers.mouseAllDir === true || a.modifiers.mousealldir === true)) {
      s(), a.event.detected = true, a.move(r);
      return;
    }
    const f = Math.abs(i), m = Math.abs(u);
    f !== m && (a.direction.horizontal === true && f > m || a.direction.vertical === true && f < m || a.direction.up === true && f < m && u < 0 || a.direction.down === true && f < m && u > 0 || a.direction.left === true && f > m && i < 0 || a.direction.right === true && f > m && i > 0 ? (a.event.detected = true, a.move(r)) : a.end(r, true));
  }, end(r, o) {
    var _a2;
    if (a.event !== void 0) {
      if (Wt(a, "temp"), ze.is.firefox === true && ha(e, false), o === true) (_a2 = a.styleCleanup) == null ? void 0 : _a2.call(a), a.event.detected !== true && a.initialEvent !== void 0 && a.initialEvent.target.dispatchEvent(a.initialEvent.event);
      else if (a.event.detected === true) {
        a.event.isFirst === true && a.handler(Vi(r === void 0 ? a.lastEvt : r, a).payload);
        const { payload: i } = Vi(r === void 0 ? a.lastEvt : r, a, true), u = () => {
          a.handler(i);
        };
        a.styleCleanup !== void 0 ? a.styleCleanup(u) : u();
      }
      a.event = void 0, a.initialEvent = void 0, a.lastEvt = void 0;
    }
  } };
  if (e.__qtouchpan = a, n.mouse === true) {
    const r = n.mouseCapture === true || n.mousecapture === true ? "Capture" : "";
    kt(a, "main", [[e, "mousedown", "mouseStart", `passive${r}`]]);
  }
  ze.has.touch === true && kt(a, "main", [[e, "touchstart", "touchStart", `passive${n.capture === true ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const n = e.__qtouchpan;
  n !== void 0 && (t.oldValue !== t.value && (typeof value != "function" && n.end(), n.handler = t.value), n.direction = Lo(t.modifiers));
}, beforeUnmount(e) {
  var _a2;
  const t = e.__qtouchpan;
  t !== void 0 && (t.event !== void 0 && t.end(), Wt(t, "main"), Wt(t, "temp"), ze.is.firefox === true && ha(e, false), (_a2 = t.styleCleanup) == null ? void 0 : _a2.call(t), delete e.__qtouchpan);
} }), nd = "q-slider__marker-labels", Sp = (e) => ({ value: e }), xp = ({ marker: e }) => d("div", { key: e.value, style: e.style, class: e.classes }, e.label), Vs = [34, 37, 40, 33, 39, 38], Km = { ...nt, ...wn, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, snap: Boolean, vertical: Boolean, reverse: Boolean, color: String, markerLabelsClass: String, label: Boolean, labelColor: String, labelTextColor: String, labelAlways: Boolean, switchLabelSide: Boolean, markers: [Boolean, Number], markerLabels: [Boolean, Array, Object, Function], switchMarkerLabelsSide: Boolean, trackImg: String, trackColor: String, innerTrackImg: String, innerTrackColor: String, selectionColor: String, selectionImg: String, thumbSize: { type: String, default: "20px" }, trackSize: { type: String, default: "4px" }, disable: Boolean, readonly: Boolean, dense: Boolean, tabindex: [String, Number], thumbColor: String, thumbPath: { type: String, default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0" } }, Wm = ["pan", "update:modelValue", "change"];
function Ym({ updateValue: e, updatePosition: t, getDragging: n, formAttrs: l }) {
  const { props: a, emit: r, slots: o, proxy: { $q: i } } = Se(), u = lt(a, i), c = Cl(l), s = K(false), f = K(false), m = K(false), h = K(false), g = v(() => a.vertical === true ? "--v" : "--h"), _ = v(() => "-" + (a.switchLabelSide === true ? "switched" : "standard")), w = v(() => a.vertical === true ? a.reverse === true : a.reverse !== (i.lang.rtl === true)), k = v(() => isNaN(a.innerMin) === true || a.innerMin < a.min ? a.min : a.innerMin), p = v(() => isNaN(a.innerMax) === true || a.innerMax > a.max ? a.max : a.innerMax), y = v(() => a.disable !== true && a.readonly !== true && k.value < p.value), b = v(() => {
    if (a.step === 0) return (_e) => _e;
    const re = (String(a.step).trim().split(".")[1] || "").length;
    return (_e) => parseFloat(_e.toFixed(re));
  }), x = v(() => a.step === 0 ? 1 : a.step), $ = v(() => y.value === true ? a.tabindex || 0 : -1), F = v(() => a.max - a.min), D = v(() => p.value - k.value), B = v(() => ue(k.value)), P = v(() => ue(p.value)), I = v(() => a.vertical === true ? w.value === true ? "bottom" : "top" : w.value === true ? "right" : "left"), q = v(() => a.vertical === true ? "height" : "width"), M = v(() => a.vertical === true ? "width" : "height"), C = v(() => a.vertical === true ? "vertical" : "horizontal"), H = v(() => {
    const re = { role: "slider", "aria-valuemin": k.value, "aria-valuemax": p.value, "aria-orientation": C.value, "data-step": a.step };
    return a.disable === true ? re["aria-disabled"] = "true" : a.readonly === true && (re["aria-readonly"] = "true"), re;
  }), Y = v(() => `q-slider q-slider${g.value} q-slider--${s.value === true ? "" : "in"}active inline no-wrap ` + (a.vertical === true ? "row" : "column") + (a.disable === true ? " disabled" : " q-slider--enabled" + (y.value === true ? " q-slider--editable" : "")) + (m.value === "both" ? " q-slider--focus" : "") + (a.label || a.labelAlways === true ? " q-slider--label" : "") + (a.labelAlways === true ? " q-slider--label-always" : "") + (u.value === true ? " q-slider--dark" : "") + (a.dense === true ? " q-slider--dense q-slider--dense" + g.value : ""));
  function L(re) {
    const _e = "q-slider__" + re;
    return `${_e} ${_e}${g.value} ${_e}${g.value}${_.value}`;
  }
  function O(re) {
    const _e = "q-slider__" + re;
    return `${_e} ${_e}${g.value}`;
  }
  const U = v(() => {
    const re = a.selectionColor || a.color;
    return "q-slider__selection absolute" + (re !== void 0 ? ` text-${re}` : "");
  }), ye = v(() => O("markers") + " absolute overflow-hidden"), W = v(() => O("track-container")), T = v(() => L("pin")), ee = v(() => L("label")), G = v(() => L("text-container")), fe = v(() => L("marker-labels-container") + (a.markerLabelsClass !== void 0 ? ` ${a.markerLabelsClass}` : "")), R = v(() => "q-slider__track relative-position no-outline" + (a.trackColor !== void 0 ? ` bg-${a.trackColor}` : "")), A = v(() => {
    const re = { [M.value]: a.trackSize };
    return a.trackImg !== void 0 && (re.backgroundImage = `url(${a.trackImg}) !important`), re;
  }), te = v(() => "q-slider__inner absolute" + (a.innerTrackColor !== void 0 ? ` bg-${a.innerTrackColor}` : "")), V = v(() => {
    const re = P.value - B.value, _e = { [I.value]: `${100 * B.value}%`, [q.value]: re === 0 ? "2px" : `${100 * re}%` };
    return a.innerTrackImg !== void 0 && (_e.backgroundImage = `url(${a.innerTrackImg}) !important`), _e;
  });
  function j(re) {
    const { min: _e, max: Ce, step: Oe } = a;
    let Ae = _e + re * (Ce - _e);
    if (Oe > 0) {
      const Ye = (Ae - k.value) % Oe;
      Ae += (Math.abs(Ye) >= Oe / 2 ? (Ye < 0 ? -1 : 1) * Oe : 0) - Ye;
    }
    return Ae = b.value(Ae), ct(Ae, k.value, p.value);
  }
  function ue(re) {
    return F.value === 0 ? 0 : (re - a.min) / F.value;
  }
  function S(re, _e) {
    const Ce = en(re), Oe = a.vertical === true ? ct((Ce.top - _e.top) / _e.height, 0, 1) : ct((Ce.left - _e.left) / _e.width, 0, 1);
    return ct(w.value === true ? 1 - Oe : Oe, B.value, P.value);
  }
  const E = v(() => pr(a.markers) === true ? a.markers : x.value), N = v(() => {
    const re = [], _e = E.value, Ce = a.max;
    let Oe = a.min;
    do
      re.push(Oe), Oe += _e;
    while (Oe < Ce);
    return re.push(Ce), re;
  }), ne = v(() => {
    const re = ` ${nd}${g.value}-`;
    return nd + `${re}${a.switchMarkerLabelsSide === true ? "switched" : "standard"}${re}${w.value === true ? "rtl" : "ltr"}`;
  }), le = v(() => a.markerLabels === false ? null : ge(a.markerLabels).map((re, _e) => ({ index: _e, value: re.value, label: re.label || re.value, classes: ne.value + (re.classes !== void 0 ? " " + re.classes : ""), style: { ...me(re.value), ...re.style || {} } }))), X = v(() => ({ markerList: le.value, markerMap: de.value, classes: ne.value, getStyle: me })), ve = v(() => {
    const re = D.value === 0 ? "2px" : 100 * E.value / D.value;
    return { ...V.value, backgroundSize: a.vertical === true ? `2px ${re}%` : `${re}% 2px` };
  });
  function ge(re) {
    if (re === false) return null;
    if (re === true) return N.value.map(Sp);
    if (typeof re == "function") return N.value.map((Ce) => {
      const Oe = re(Ce);
      return Pt(Oe) === true ? { ...Oe, value: Ce } : { value: Ce, label: Oe };
    });
    const _e = ({ value: Ce }) => Ce >= a.min && Ce <= a.max;
    return Array.isArray(re) === true ? re.map((Ce) => Pt(Ce) === true ? Ce : { value: Ce }).filter(_e) : Object.keys(re).map((Ce) => {
      const Oe = re[Ce], Ae = Number(Ce);
      return Pt(Oe) === true ? { ...Oe, value: Ae } : { value: Ae, label: Oe };
    }).filter(_e);
  }
  function me(re) {
    return { [I.value]: `${100 * (re - a.min) / F.value}%` };
  }
  const de = v(() => {
    if (a.markerLabels === false) return null;
    const re = {};
    return le.value.forEach((_e) => {
      re[_e.value] = _e;
    }), re;
  });
  function ae() {
    if (o["marker-label-group"] !== void 0) return o["marker-label-group"](X.value);
    const re = o["marker-label"] || xp;
    return le.value.map((_e) => re({ marker: _e, ...X.value }));
  }
  const Q = v(() => [[gn, oe, void 0, { [C.value]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
  function oe(re) {
    re.isFinal === true ? (h.value !== void 0 && (t(re.evt), re.touch === true && e(true), h.value = void 0, r("pan", "end")), s.value = false, m.value = false) : re.isFirst === true ? (h.value = n(re.evt), t(re.evt), e(), s.value = true, r("pan", "start")) : (t(re.evt), e());
  }
  function we() {
    m.value = false;
  }
  function ke(re) {
    t(re, n(re)), e(), f.value = true, s.value = true, document.addEventListener("mouseup", qe, true);
  }
  function qe() {
    f.value = false, s.value = false, e(true), we(), document.removeEventListener("mouseup", qe, true);
  }
  function Me(re) {
    t(re, n(re)), e(true);
  }
  function He(re) {
    Vs.includes(re.keyCode) && e(true);
  }
  function Ve(re) {
    if (a.vertical === true) return null;
    const _e = i.lang.rtl !== a.reverse ? 1 - re : re;
    return { transform: `translateX(calc(${2 * _e - 1} * ${a.thumbSize} / 2 + ${50 - 100 * _e}%))` };
  }
  function ie(re) {
    const _e = v(() => f.value === false && (m.value === re.focusValue || m.value === "both") ? " q-slider--focus" : ""), Ce = v(() => `q-slider__thumb q-slider__thumb${g.value} q-slider__thumb${g.value}-${w.value === true ? "rtl" : "ltr"} absolute non-selectable` + _e.value + (re.thumbColor.value !== void 0 ? ` text-${re.thumbColor.value}` : "")), Oe = v(() => ({ width: a.thumbSize, height: a.thumbSize, [I.value]: `${100 * re.ratio.value}%`, zIndex: m.value === re.focusValue ? 2 : void 0 })), Ae = v(() => re.labelColor.value !== void 0 ? ` text-${re.labelColor.value}` : ""), Ye = v(() => Ve(re.ratio.value)), it = v(() => "q-slider__text" + (re.labelTextColor.value !== void 0 ? ` text-${re.labelTextColor.value}` : ""));
    return () => {
      const Ct = [d("svg", { class: "q-slider__thumb-shape absolute-full", viewBox: "0 0 20 20", "aria-hidden": "true" }, [d("path", { d: a.thumbPath })]), d("div", { class: "q-slider__focus-ring fit" })];
      return (a.label === true || a.labelAlways === true) && (Ct.push(d("div", { class: T.value + " absolute fit no-pointer-events" + Ae.value }, [d("div", { class: ee.value, style: { minWidth: a.thumbSize } }, [d("div", { class: G.value, style: Ye.value }, [d("span", { class: it.value }, re.label.value)])])])), a.name !== void 0 && a.disable !== true && c(Ct, "push")), d("div", { class: Ce.value, style: Oe.value, ...re.getNodeData() }, Ct);
    };
  }
  function pe(re, _e, Ce, Oe) {
    const Ae = [];
    a.innerTrackColor !== "transparent" && Ae.push(d("div", { key: "inner", class: te.value, style: V.value })), a.selectionColor !== "transparent" && Ae.push(d("div", { key: "selection", class: U.value, style: re.value })), a.markers !== false && Ae.push(d("div", { key: "marker", class: ye.value, style: ve.value })), Oe(Ae);
    const Ye = [pn("div", { key: "trackC", class: W.value, tabindex: _e.value, ...Ce.value }, [d("div", { class: R.value, style: A.value }, Ae)], "slide", y.value, () => Q.value)];
    if (a.markerLabels !== false) {
      const it = a.switchMarkerLabelsSide === true ? "unshift" : "push";
      Ye[it](d("div", { key: "markerL", class: fe.value }, ae()));
    }
    return Ye;
  }
  return Ke(() => {
    document.removeEventListener("mouseup", qe, true);
  }), { state: { active: s, focus: m, preventFocus: f, dragging: h, editable: y, classes: Y, tabindex: $, attributes: H, roundValueFn: b, keyStep: x, trackLen: F, innerMin: k, innerMinRatio: B, innerMax: p, innerMaxRatio: P, positionProp: I, sizeProp: q, isReversed: w }, methods: { onActivate: ke, onMobileClick: Me, onBlur: we, onKeyup: He, getContent: pe, getThumbRenderFn: ie, convertRatioToModel: j, convertModelToRatio: ue, getDraggingRatio: S } };
}
var Cp = () => ({}), na = he({ name: "QSlider", props: { ...Km, modelValue: { required: true, default: null, validator: (e) => typeof e == "number" || e === null }, labelValue: [String, Number] }, emits: Wm, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = Se(), { state: l, methods: a } = Ym({ updateValue: g, updatePosition: w, getDragging: _, formAttrs: $r(e) }), r = K(null), o = K(0), i = K(0);
  function u() {
    i.value = e.modelValue === null ? l.innerMin.value : ct(e.modelValue, l.innerMin.value, l.innerMax.value);
  }
  be(() => `${e.modelValue}|${l.innerMin.value}|${l.innerMax.value}`, u), u();
  const c = v(() => a.convertModelToRatio(i.value)), s = v(() => l.active.value === true ? o.value : c.value), f = v(() => {
    const y = { [l.positionProp.value]: `${100 * l.innerMinRatio.value}%`, [l.sizeProp.value]: `${100 * (s.value - l.innerMinRatio.value)}%` };
    return e.selectionImg !== void 0 && (y.backgroundImage = `url(${e.selectionImg}) !important`), y;
  }), m = a.getThumbRenderFn({ focusValue: true, getNodeData: Cp, ratio: s, label: v(() => e.labelValue !== void 0 ? e.labelValue : i.value), thumbColor: v(() => e.thumbColor || e.color), labelColor: v(() => e.labelColor), labelTextColor: v(() => e.labelTextColor) }), h = v(() => l.editable.value !== true ? {} : n.platform.is.mobile === true ? { onClick: a.onMobileClick } : { onMousedown: a.onActivate, onFocus: k, onBlur: a.onBlur, onKeydown: p, onKeyup: a.onKeyup });
  function g(y) {
    i.value !== e.modelValue && t("update:modelValue", i.value), y === true && t("change", i.value);
  }
  function _() {
    return r.value.getBoundingClientRect();
  }
  function w(y, b = l.dragging.value) {
    const x = a.getDraggingRatio(y, b);
    i.value = a.convertRatioToModel(x), o.value = e.snap !== true || e.step === 0 ? x : a.convertModelToRatio(i.value);
  }
  function k() {
    l.focus.value = true;
  }
  function p(y) {
    if (Vs.includes(y.keyCode) === false) return;
    je(y);
    const b = ([34, 33].includes(y.keyCode) ? 10 : 1) * l.keyStep.value, x = ([34, 37, 40].includes(y.keyCode) ? -1 : 1) * (l.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * b;
    i.value = ct(l.roundValueFn.value(i.value + x), l.innerMin.value, l.innerMax.value), g();
  }
  return () => {
    const y = a.getContent(f, l.tabindex, h, (b) => {
      b.push(m());
    });
    return d("div", { ref: r, class: l.classes.value + (e.modelValue === null ? " q-slider--no-value" : ""), ...l.attributes.value, "aria-valuenow": e.modelValue }, y);
  };
} });
function Gm() {
  const e = K(!nn.value);
  return e.value === false && ft(() => {
    e.value = true;
  }), { isHydrated: e };
}
var Xm = typeof ResizeObserver < "u", ld = Xm === true ? {} : { style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;", url: "about:blank" }, Ul = he({ name: "QResizeObserver", props: { debounce: { type: [String, Number], default: 100 } }, emits: ["resize"], setup(e, { emit: t }) {
  let n = null, l, a = { width: -1, height: -1 };
  function r(u) {
    u === true || e.debounce === 0 || e.debounce === "0" ? o() : n === null && (n = setTimeout(o, e.debounce));
  }
  function o() {
    if (n !== null && (clearTimeout(n), n = null), l) {
      const { offsetWidth: u, offsetHeight: c } = l;
      (u !== a.width || c !== a.height) && (a = { width: u, height: c }, t("resize", a));
    }
  }
  const { proxy: i } = Se();
  if (i.trigger = r, Xm === true) {
    let u;
    const c = (s) => {
      l = i.$el.parentNode, l ? (u = new ResizeObserver(r), u.observe(l), o()) : s !== true && We(() => {
        c(true);
      });
    };
    return ft(() => {
      c();
    }), Ke(() => {
      n !== null && clearTimeout(n), u !== void 0 && (u.disconnect !== void 0 ? u.disconnect() : l && u.unobserve(l));
    }), St;
  } else {
    let u = function() {
      n !== null && (clearTimeout(n), n = null), f !== void 0 && (f.removeEventListener !== void 0 && f.removeEventListener("resize", r, dt.passive), f = void 0);
    }, c = function() {
      u(), (l == null ? void 0 : l.contentDocument) && (f = l.contentDocument.defaultView, f.addEventListener("resize", r, dt.passive), o());
    };
    const { isHydrated: s } = Gm();
    let f;
    return ft(() => {
      We(() => {
        l = i.$el, l && c();
      });
    }), Ke(u), () => {
      if (s.value === true) return d("object", { class: "q--avoid-card-border", style: ld.style, tabindex: -1, type: "text/html", data: ld.url, "aria-hidden": "true", onLoad: c });
    };
  }
} }), Sr = false;
if (!__QUASAR_SSR__) {
  const e = document.createElement("div");
  e.setAttribute("dir", "rtl"), Object.assign(e.style, { width: "1px", height: "1px", overflow: "auto" });
  const t = document.createElement("div");
  Object.assign(t.style, { width: "1000px", height: "1px" }), document.body.appendChild(e), e.appendChild(t), e.scrollLeft = -1e3, Sr = e.scrollLeft >= 0, e.remove();
}
function kp(e, t, n) {
  const l = n === true ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${t === true ? l[0] : l[1]}${e ? ` text-${e}` : ""}`;
}
var qp = ["left", "center", "right", "justify"], ad = he({ name: "QTabs", props: { modelValue: [Number, String], align: { type: String, default: "center", validator: (e) => qp.includes(e) }, breakpoint: { type: [String, Number], default: 600 }, vertical: Boolean, shrink: Boolean, stretch: Boolean, activeClass: String, activeColor: String, activeBgColor: String, indicatorColor: String, leftIcon: String, rightIcon: String, outsideArrows: Boolean, mobileArrows: Boolean, switchIndicator: Boolean, narrowIndicator: Boolean, inlineLabel: Boolean, noCaps: Boolean, dense: Boolean, contentClass: String, "onUpdate:modelValue": [Function, Array] }, setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, { registerTick: r } = ya(), { registerTick: o } = ya(), { registerTick: i } = ya(), { registerTimeout: u, removeTimeout: c } = Zn(), { registerTimeout: s, removeTimeout: f } = Zn(), m = K(null), h = K(null), g = K(e.modelValue), _ = K(false), w = K(true), k = K(false), p = K(false), y = [], b = K(0), x = K(false);
  let $ = null, F = null, D;
  const B = v(() => ({ activeClass: e.activeClass, activeColor: e.activeColor, activeBgColor: e.activeBgColor, indicatorClass: kp(e.indicatorColor, e.switchIndicator, e.vertical), narrowIndicator: e.narrowIndicator, inlineLabel: e.inlineLabel, noCaps: e.noCaps })), P = v(() => {
    const ae = b.value, Q = g.value;
    for (let oe = 0; oe < ae; oe++) if (y[oe].name.value === Q) return true;
    return false;
  }), I = v(() => `q-tabs__content--align-${_.value === true ? "left" : p.value === true ? "justify" : e.align}`), q = v(() => `q-tabs row no-wrap items-center q-tabs--${_.value === true ? "" : "not-"}scrollable q-tabs--${e.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${e.outsideArrows === true ? "outside" : "inside"} q-tabs--mobile-with${e.mobileArrows === true ? "" : "out"}-arrows` + (e.dense === true ? " q-tabs--dense" : "") + (e.shrink === true ? " col-shrink" : "") + (e.stretch === true ? " self-stretch" : "")), M = v(() => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + I.value + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), C = v(() => e.vertical === true ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" }), H = v(() => e.vertical !== true && a.lang.rtl === true), Y = v(() => Sr === false && H.value === true);
  be(H, T), be(() => e.modelValue, (ae) => {
    L({ name: ae, setCurrent: true, skipEmit: true });
  }), be(() => e.outsideArrows, O);
  function L({ name: ae, setCurrent: Q, skipEmit: oe }) {
    g.value !== ae && (oe !== true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", ae), (Q === true || e["onUpdate:modelValue"] === void 0) && (ye(g.value, ae), g.value = ae));
  }
  function O() {
    r(() => {
      m.value && U({ width: m.value.offsetWidth, height: m.value.offsetHeight });
    });
  }
  function U(ae) {
    if (C.value === void 0 || h.value === null) return;
    const Q = ae[C.value.container], oe = Math.min(h.value[C.value.scroll], Array.prototype.reduce.call(h.value.children, (ke, qe) => ke + (qe[C.value.content] || 0), 0)), we = Q > 0 && oe > Q;
    _.value = we, we === true && o(T), p.value = Q < parseInt(e.breakpoint, 10);
  }
  function ye(ae, Q) {
    const oe = ae != null && ae !== "" ? y.find((ke) => ke.name.value === ae) : null, we = Q != null && Q !== "" ? y.find((ke) => ke.name.value === Q) : null;
    if (de === true) de = false;
    else if (oe && we) {
      const ke = oe.tabIndicatorRef.value, qe = we.tabIndicatorRef.value;
      $ !== null && (clearTimeout($), $ = null), ke.style.transition = "none", ke.style.transform = "none", qe.style.transition = "none", qe.style.transform = "none";
      const Me = ke.getBoundingClientRect(), He = qe.getBoundingClientRect();
      qe.style.transform = e.vertical === true ? `translate3d(0,${Me.top - He.top}px,0) scale3d(1,${He.height ? Me.height / He.height : 1},1)` : `translate3d(${Me.left - He.left}px,0,0) scale3d(${He.width ? Me.width / He.width : 1},1,1)`, i(() => {
        $ = setTimeout(() => {
          $ = null, qe.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)", qe.style.transform = "none";
        }, 70);
      });
    }
    we && _.value === true && W(we.rootRef.value);
  }
  function W(ae) {
    const { left: Q, width: oe, top: we, height: ke } = h.value.getBoundingClientRect(), qe = ae.getBoundingClientRect();
    let Me = e.vertical === true ? qe.top - we : qe.left - Q;
    if (Me < 0) {
      h.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.floor(Me), T();
      return;
    }
    Me += e.vertical === true ? qe.height - ke : qe.width - oe, Me > 0 && (h.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.ceil(Me), T());
  }
  function T() {
    const ae = h.value;
    if (ae === null) return;
    const Q = ae.getBoundingClientRect(), oe = e.vertical === true ? ae.scrollTop : Math.abs(ae.scrollLeft);
    H.value === true ? (w.value = Math.ceil(oe + Q.width) < ae.scrollWidth - 1, k.value = oe > 0) : (w.value = oe > 0, k.value = e.vertical === true ? Math.ceil(oe + Q.height) < ae.scrollHeight : Math.ceil(oe + Q.width) < ae.scrollWidth);
  }
  function ee(ae) {
    F !== null && clearInterval(F), F = setInterval(() => {
      V(ae) === true && R();
    }, 5);
  }
  function G() {
    ee(Y.value === true ? Number.MAX_SAFE_INTEGER : 0);
  }
  function fe() {
    ee(Y.value === true ? 0 : Number.MAX_SAFE_INTEGER);
  }
  function R() {
    F !== null && (clearInterval(F), F = null);
  }
  function A(ae, Q) {
    const oe = Array.prototype.filter.call(h.value.children, (He) => He === Q || He.matches && He.matches(".q-tab.q-focusable") === true), we = oe.length;
    if (we === 0) return;
    if (ae === 36) return W(oe[0]), oe[0].focus(), true;
    if (ae === 35) return W(oe[we - 1]), oe[we - 1].focus(), true;
    const ke = ae === (e.vertical === true ? 38 : 37), qe = ae === (e.vertical === true ? 40 : 39), Me = ke === true ? -1 : qe === true ? 1 : void 0;
    if (Me !== void 0) {
      const He = H.value === true ? -1 : 1, Ve = oe.indexOf(Q) + Me * He;
      return Ve >= 0 && Ve < we && (W(oe[Ve]), oe[Ve].focus({ preventScroll: true })), true;
    }
  }
  const te = v(() => Y.value === true ? { get: (ae) => Math.abs(ae.scrollLeft), set: (ae, Q) => {
    ae.scrollLeft = -Q;
  } } : e.vertical === true ? { get: (ae) => ae.scrollTop, set: (ae, Q) => {
    ae.scrollTop = Q;
  } } : { get: (ae) => ae.scrollLeft, set: (ae, Q) => {
    ae.scrollLeft = Q;
  } });
  function V(ae) {
    const Q = h.value, { get: oe, set: we } = te.value;
    let ke = false, qe = oe(Q);
    const Me = ae < qe ? -1 : 1;
    return qe += Me * 5, qe < 0 ? (ke = true, qe = 0) : (Me === -1 && qe <= ae || Me === 1 && qe >= ae) && (ke = true, qe = ae), we(Q, qe), T(), ke;
  }
  function j(ae, Q) {
    for (const oe in ae) if (ae[oe] !== Q[oe]) return false;
    return true;
  }
  function ue() {
    let ae = null, Q = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
    const oe = y.filter((Me) => {
      var _a2;
      return ((_a2 = Me.routeData) == null ? void 0 : _a2.hasRouterLink.value) === true;
    }), { hash: we, query: ke } = l.$route, qe = Object.keys(ke).length;
    for (const Me of oe) {
      const He = Me.routeData.exact.value === true;
      if (Me.routeData[He === true ? "linkIsExactActive" : "linkIsActive"].value !== true) continue;
      const { hash: Ve, query: ie, matched: pe, href: re } = Me.routeData.resolvedLink.value, _e = Object.keys(ie).length;
      if (He === true) {
        if (Ve !== we || _e !== qe || j(ke, ie) === false) continue;
        ae = Me.name.value;
        break;
      }
      if (Ve !== "" && Ve !== we || _e !== 0 && j(ie, ke) === false) continue;
      const Ce = { matchedLen: pe.length, queryDiff: qe - _e, hrefLen: re.length - Ve.length };
      if (Ce.matchedLen > Q.matchedLen) {
        ae = Me.name.value, Q = Ce;
        continue;
      } else if (Ce.matchedLen !== Q.matchedLen) continue;
      if (Ce.queryDiff < Q.queryDiff) ae = Me.name.value, Q = Ce;
      else if (Ce.queryDiff !== Q.queryDiff) continue;
      Ce.hrefLen > Q.hrefLen && (ae = Me.name.value, Q = Ce);
    }
    if (ae === null && y.some((Me) => Me.routeData === void 0 && Me.name.value === g.value) === true) {
      de = false;
      return;
    }
    L({ name: ae, setCurrent: true });
  }
  function S(ae) {
    if (c(), x.value !== true && m.value !== null && ae.target && typeof ae.target.closest == "function") {
      const Q = ae.target.closest(".q-tab");
      Q && m.value.contains(Q) === true && (x.value = true, _.value === true && W(Q));
    }
  }
  function E() {
    u(() => {
      x.value = false;
    }, 30);
  }
  function N() {
    ve.avoidRouteWatcher === false ? s(ue) : f();
  }
  function ne() {
    if (D === void 0) {
      const ae = be(() => l.$route.fullPath, N);
      D = () => {
        ae(), D = void 0;
      };
    }
  }
  function le(ae) {
    y.push(ae), b.value++, O(), ae.routeData === void 0 || l.$route === void 0 ? s(() => {
      if (_.value === true) {
        const Q = g.value, oe = Q != null && Q !== "" ? y.find((we) => we.name.value === Q) : null;
        oe && W(oe.rootRef.value);
      }
    }) : (ne(), ae.routeData.hasRouterLink.value === true && N());
  }
  function X(ae) {
    y.splice(y.indexOf(ae), 1), b.value--, O(), D !== void 0 && ae.routeData !== void 0 && (y.every((Q) => Q.routeData === void 0) === true && D(), N());
  }
  const ve = { currentModel: g, tabProps: B, hasFocus: x, hasActiveTab: P, registerTab: le, unregisterTab: X, verifyRouteModel: N, updateModel: L, onKbdNavigate: A, avoidRouteWatcher: false };
  hn(sm, ve);
  function ge() {
    $ !== null && clearTimeout($), R(), D == null ? void 0 : D();
  }
  let me, de;
  return Ke(ge), Vn(() => {
    me = D !== void 0, ge();
  }), Sl(() => {
    me === true && (ne(), de = true, N()), O();
  }), () => d("div", { ref: m, class: q.value, role: "tablist", onFocusin: S, onFocusout: E }, [d(Ul, { onResize: U }), d("div", { ref: h, class: M.value, onScroll: T }, Pe(t.default)), d(et, { class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (w.value === true ? "" : " q-tabs__arrow--faded"), name: e.leftIcon || a.iconSet.tabs[e.vertical === true ? "up" : "left"], onMousedownPassive: G, onTouchstartPassive: G, onMouseupPassive: R, onMouseleavePassive: R, onTouchendPassive: R }), d(et, { class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (k.value === true ? "" : " q-tabs__arrow--faded"), name: e.rightIcon || a.iconSet.tabs[e.vertical === true ? "down" : "right"], onMousedownPassive: fe, onTouchstartPassive: fe, onMouseupPassive: R, onMouseleavePassive: R, onTouchendPassive: R })]);
} }), Tp = 0, Zm = ["click", "keydown"], Jm = { icon: String, label: [Number, String], alert: [Boolean, String], alertIcon: String, name: { type: [Number, String], default: () => `t_${Tp++}` }, noCaps: Boolean, tabindex: [String, Number], disable: Boolean, contentClass: String, ripple: { type: [Boolean, Object], default: true } };
function eh(e, t, n, l) {
  const a = Tt(sm, ot);
  if (a === ot) return console.error("QTab/QRouteTab component needs to be child of QTabs"), ot;
  const { proxy: r } = Se(), o = K(null), i = K(null), u = K(null), c = v(() => e.disable === true || e.ripple === false ? false : Object.assign({ keyCodes: [13, 32], early: true }, e.ripple === true ? {} : e.ripple)), s = v(() => a.currentModel.value === e.name), f = v(() => "q-tab relative-position self-stretch flex flex-center text-center" + (s.value === true ? " q-tab--active" + (a.tabProps.value.activeClass ? " " + a.tabProps.value.activeClass : "") + (a.tabProps.value.activeColor ? ` text-${a.tabProps.value.activeColor}` : "") + (a.tabProps.value.activeBgColor ? ` bg-${a.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (e.icon && e.label && a.tabProps.value.inlineLabel === false ? " q-tab--full" : "") + (e.noCaps === true || a.tabProps.value.noCaps === true ? " q-tab--no-caps" : "") + (e.disable === true ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (l !== void 0 ? l.linkClass.value : "")), m = v(() => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + (a.tabProps.value.inlineLabel === true ? "row no-wrap q-tab__content--inline" : "column") + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), h = v(() => e.disable === true || a.hasFocus.value === true || s.value === false && a.hasActiveTab.value === true ? -1 : e.tabindex || 0);
  function g(y, b) {
    var _a2;
    if (b !== true && (y == null ? void 0 : y.qAvoidFocus) !== true && ((_a2 = o.value) == null ? void 0 : _a2.focus()), e.disable === true) {
      (l == null ? void 0 : l.hasRouterLink.value) === true && je(y);
      return;
    }
    if (l === void 0) {
      a.updateModel({ name: e.name }), n("click", y);
      return;
    }
    if (l.hasRouterLink.value === true) {
      const x = ($ = {}) => {
        let F;
        const D = $.to === void 0 || kn($.to, e.to) === true ? a.avoidRouteWatcher = wr() : null;
        return l.navigateToRouterLink(y, { ...$, returnRouterError: true }).catch((B) => {
          F = B;
        }).then((B) => {
          var _a3;
          if (D === a.avoidRouteWatcher && (a.avoidRouteWatcher = false, F === void 0 && (B === void 0 || ((_a3 = B.message) == null ? void 0 : _a3.startsWith("Avoided redundant navigation")) === true) && a.updateModel({ name: e.name })), $.returnRouterError === true) return F !== void 0 ? Promise.reject(F) : B;
        });
      };
      n("click", y, x), y.defaultPrevented !== true && x();
      return;
    }
    n("click", y);
  }
  function _(y) {
    yn(y, [13, 32]) ? g(y, true) : Yl(y) !== true && y.keyCode >= 35 && y.keyCode <= 40 && y.altKey !== true && y.metaKey !== true && a.onKbdNavigate(y.keyCode, r.$el) === true && je(y), n("keydown", y);
  }
  function w() {
    const y = a.tabProps.value.narrowIndicator, b = [], x = d("div", { ref: u, class: ["q-tab__indicator", a.tabProps.value.indicatorClass] });
    e.icon !== void 0 && b.push(d(et, { class: "q-tab__icon", name: e.icon })), e.label !== void 0 && b.push(d("div", { class: "q-tab__label" }, e.label)), e.alert !== false && b.push(e.alertIcon !== void 0 ? d(et, { class: "q-tab__alert-icon", color: e.alert !== true ? e.alert : void 0, name: e.alertIcon }) : d("div", { class: "q-tab__alert" + (e.alert !== true ? ` text-${e.alert}` : "") })), y === true && b.push(x);
    const $ = [d("div", { class: "q-focus-helper", tabindex: -1, ref: o }), d("div", { class: m.value }, qt(t.default, b))];
    return y === false && $.push(x), $;
  }
  const k = { name: v(() => e.name), rootRef: i, tabIndicatorRef: u, routeData: l };
  Ke(() => {
    a.unregisterTab(k);
  }), ft(() => {
    a.registerTab(k);
  });
  function p(y, b) {
    const x = { ref: i, class: f.value, tabindex: h.value, role: "tab", "aria-selected": s.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: g, onKeydown: _, ...b };
    return sn(d(y, x, w()), [[ri, c.value]]);
  }
  return { renderTab: p, $tabs: a };
}
var Va = he({ name: "QTab", props: Jm, emits: Zm, setup(e, { slots: t, emit: n }) {
  const { renderTab: l } = eh(e, t, n);
  return () => l("div");
} }), Mp = he({ name: "QTabPanels", props: { ...Rs, ...nt }, emits: $s, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), { updatePanelsList: a, getPanelContent: r, panelDirectives: o } = Ps(), i = v(() => "q-tab-panels q-panel-parent" + (l.value === true ? " q-tab-panels--dark q-dark" : ""));
  return () => (a(t), pn("div", { class: i.value }, r(), "pan", e.swipeable, () => o.value));
} }), zi = he({ name: "QTabPanel", props: As, setup(e, { slots: t }) {
  return () => d("div", { class: "q-tab-panel", role: "tabpanel" }, Pe(t.default));
} }), rd = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, od = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, id = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, Hr = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, jr = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, oo = { date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e), time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e), fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e), timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e), email: (e) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e), hexColor: (e) => rd.test(e), hexaColor: (e) => od.test(e), hexOrHexaColor: (e) => id.test(e), rgbColor: (e) => Hr.test(e), rgbaColor: (e) => jr.test(e), rgbOrRgbaColor: (e) => Hr.test(e) || jr.test(e), hexOrRgbColor: (e) => rd.test(e) || Hr.test(e), hexaOrRgbaColor: (e) => od.test(e) || jr.test(e), anyColor: (e) => id.test(e) || Hr.test(e) || jr.test(e) }, Ep = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;
function ud({ r: e, g: t, b: n, a: l }) {
  const a = l !== void 0;
  if (e = Math.round(e), t = Math.round(t), n = Math.round(n), e > 255 || t > 255 || n > 255 || a && l > 100) throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");
  return l = a ? (Math.round(255 * l / 100) | 256).toString(16).slice(1) : "", "#" + (n | t << 8 | e << 16 | 1 << 24).toString(16).slice(1) + l;
}
function sd({ r: e, g: t, b: n, a: l }) {
  return `rgb${l !== void 0 ? "a" : ""}(${e},${t},${n}${l !== void 0 ? "," + l / 100 : ""})`;
}
function th(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  e = e.replace(/^#/, ""), e.length === 3 ? e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] : e.length === 4 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
  const t = parseInt(e, 16);
  return e.length > 6 ? { r: t >> 24 & 255, g: t >> 16 & 255, b: t >> 8 & 255, a: Math.round((t & 255) / 2.55) } : { r: t >> 16, g: t >> 8 & 255, b: t & 255 };
}
function cd({ h: e, s: t, v: n, a: l }) {
  let a, r, o;
  t = t / 100, n = n / 100, e = e / 360;
  const i = Math.floor(e * 6), u = e * 6 - i, c = n * (1 - t), s = n * (1 - u * t), f = n * (1 - (1 - u) * t);
  switch (i % 6) {
    case 0:
      a = n, r = f, o = c;
      break;
    case 1:
      a = s, r = n, o = c;
      break;
    case 2:
      a = c, r = n, o = f;
      break;
    case 3:
      a = c, r = s, o = n;
      break;
    case 4:
      a = f, r = c, o = n;
      break;
    case 5:
      a = n, r = c, o = s;
      break;
  }
  return { r: Math.round(a * 255), g: Math.round(r * 255), b: Math.round(o * 255), a: l };
}
function Ii({ r: e, g: t, b: n, a: l }) {
  const a = Math.max(e, t, n), r = Math.min(e, t, n), o = a - r, i = a === 0 ? 0 : o / a, u = a / 255;
  let c;
  switch (a) {
    case r:
      c = 0;
      break;
    case e:
      c = t - n + o * (t < n ? 6 : 0), c /= 6 * o;
      break;
    case t:
      c = n - e + o * 2, c /= 6 * o;
      break;
    case n:
      c = e - t + o * 4, c /= 6 * o;
      break;
  }
  return { h: Math.round(c * 360), s: Math.round(i * 100), v: Math.round(u * 100), a: l };
}
function nh(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  const t = e.replace(/ /g, ""), n = Ep.exec(t);
  if (n === null) return th(t);
  const l = { r: Math.min(255, parseInt(n[2], 10)), g: Math.min(255, parseInt(n[3], 10)), b: Math.min(255, parseInt(n[4], 10)) };
  if (n[1]) {
    const a = parseFloat(n[5]);
    l.a = Math.min(1, isNaN(a) === true ? 1 : a) * 100;
  }
  return l;
}
function Ap(e) {
  if (typeof e != "string" && (!e || e.r === void 0)) throw new TypeError("Expected a string or a {r, g, b} object as color");
  const t = typeof e == "string" ? nh(e) : e, n = t.r / 255, l = t.g / 255, a = t.b / 255, r = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4), o = l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4), i = a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);
  return 0.2126 * r + 0.7152 * o + 0.0722 * i;
}
var Rp = ["rgb(255,204,204)", "rgb(255,230,204)", "rgb(255,255,204)", "rgb(204,255,204)", "rgb(204,255,230)", "rgb(204,255,255)", "rgb(204,230,255)", "rgb(204,204,255)", "rgb(230,204,255)", "rgb(255,204,255)", "rgb(255,153,153)", "rgb(255,204,153)", "rgb(255,255,153)", "rgb(153,255,153)", "rgb(153,255,204)", "rgb(153,255,255)", "rgb(153,204,255)", "rgb(153,153,255)", "rgb(204,153,255)", "rgb(255,153,255)", "rgb(255,102,102)", "rgb(255,179,102)", "rgb(255,255,102)", "rgb(102,255,102)", "rgb(102,255,179)", "rgb(102,255,255)", "rgb(102,179,255)", "rgb(102,102,255)", "rgb(179,102,255)", "rgb(255,102,255)", "rgb(255,51,51)", "rgb(255,153,51)", "rgb(255,255,51)", "rgb(51,255,51)", "rgb(51,255,153)", "rgb(51,255,255)", "rgb(51,153,255)", "rgb(51,51,255)", "rgb(153,51,255)", "rgb(255,51,255)", "rgb(255,0,0)", "rgb(255,128,0)", "rgb(255,255,0)", "rgb(0,255,0)", "rgb(0,255,128)", "rgb(0,255,255)", "rgb(0,128,255)", "rgb(0,0,255)", "rgb(128,0,255)", "rgb(255,0,255)", "rgb(245,0,0)", "rgb(245,123,0)", "rgb(245,245,0)", "rgb(0,245,0)", "rgb(0,245,123)", "rgb(0,245,245)", "rgb(0,123,245)", "rgb(0,0,245)", "rgb(123,0,245)", "rgb(245,0,245)", "rgb(214,0,0)", "rgb(214,108,0)", "rgb(214,214,0)", "rgb(0,214,0)", "rgb(0,214,108)", "rgb(0,214,214)", "rgb(0,108,214)", "rgb(0,0,214)", "rgb(108,0,214)", "rgb(214,0,214)", "rgb(163,0,0)", "rgb(163,82,0)", "rgb(163,163,0)", "rgb(0,163,0)", "rgb(0,163,82)", "rgb(0,163,163)", "rgb(0,82,163)", "rgb(0,0,163)", "rgb(82,0,163)", "rgb(163,0,163)", "rgb(92,0,0)", "rgb(92,46,0)", "rgb(92,92,0)", "rgb(0,92,0)", "rgb(0,92,46)", "rgb(0,92,92)", "rgb(0,46,92)", "rgb(0,0,92)", "rgb(46,0,92)", "rgb(92,0,92)", "rgb(255,255,255)", "rgb(205,205,205)", "rgb(178,178,178)", "rgb(153,153,153)", "rgb(127,127,127)", "rgb(102,102,102)", "rgb(76,76,76)", "rgb(51,51,51)", "rgb(25,25,25)", "rgb(0,0,0)"], dd = "M5 5 h10 v10 h-10 v-10 z", $p = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==";
he({ name: "QColor", props: { ...nt, ...wn, modelValue: String, defaultValue: String, defaultView: { type: String, default: "spectrum", validator: (e) => ["spectrum", "tune", "palette"].includes(e) }, formatModel: { type: String, default: "auto", validator: (e) => ["auto", "hex", "rgb", "hexa", "rgba"].includes(e) }, palette: Array, noHeader: Boolean, noHeaderTabs: Boolean, noFooter: Boolean, square: Boolean, flat: Boolean, bordered: Boolean, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change"], setup(e, { emit: t }) {
  const { proxy: n } = Se(), { $q: l } = n, a = lt(e, l), { getCache: r } = Pr(), o = K(null), i = K(null), u = v(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("hex") !== -1), c = v(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1), s = K(e.formatModel === "auto" ? e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#") ? "hex" : "rgb" : e.formatModel.startsWith("hex") ? "hex" : "rgb"), f = K(e.defaultView), m = K(q(e.modelValue || e.defaultValue)), h = v(() => e.disable !== true && e.readonly !== true), g = v(() => e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#")), _ = v(() => u.value !== null ? u.value : g.value), w = v(() => ({ type: "hidden", name: e.name, value: m.value[_.value === true ? "hex" : "rgb"] })), k = Cl(w), p = v(() => c.value !== null ? c.value : m.value.a !== void 0), y = v(() => ({ backgroundColor: m.value.rgb || "#000" })), b = v(() => `q-color-picker__header-content q-color-picker__header-content--${(m.value.a !== void 0 && m.value.a < 65 ? true : Ap(m.value) > 0.4) ? "light" : "dark"}`), x = v(() => ({ background: `hsl(${m.value.h},100%,50%)` })), $ = v(() => ({ top: `${100 - m.value.v}%`, [l.lang.rtl === true ? "right" : "left"]: `${m.value.s}%` })), F = v(() => e.palette !== void 0 && e.palette.length !== 0 ? e.palette : Rp), D = v(() => "q-color-picker" + (e.bordered === true ? " q-color-picker--bordered" : "") + (e.square === true ? " q-color-picker--square no-border-radius" : "") + (e.flat === true ? " q-color-picker--flat no-shadow" : "") + (e.disable === true ? " disabled" : "") + (a.value === true ? " q-color-picker--dark q-dark" : "")), B = v(() => e.disable === true ? { "aria-disabled": "true" } : {}), P = v(() => [[gn, U, void 0, { prevent: true, stop: true, mouse: true }]]);
  be(() => e.modelValue, (S) => {
    const E = q(S || e.defaultValue);
    E.hex !== m.value.hex && (m.value = E);
  }), be(() => e.defaultValue, (S) => {
    if (!e.modelValue && S) {
      const E = q(S);
      E.hex !== m.value.hex && (m.value = E);
    }
  });
  function I(S, E) {
    m.value.hex = ud(S), m.value.rgb = sd(S), m.value.r = S.r, m.value.g = S.g, m.value.b = S.b, m.value.a = S.a;
    const N = m.value[_.value === true ? "hex" : "rgb"];
    t("update:modelValue", N), E === true && t("change", N);
  }
  function q(S) {
    const E = c.value !== void 0 ? c.value : e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1;
    if (typeof S != "string" || S.length === 0 || oo.anyColor(S.replace(/ /g, "")) !== true) return { h: 0, s: 0, v: 0, r: 0, g: 0, b: 0, a: E === true ? 100 : void 0, hex: void 0, rgb: void 0 };
    const N = nh(S);
    return E === true && N.a === void 0 && (N.a = 100), N.hex = ud(N), N.rgb = sd(N), Object.assign(N, Ii(N));
  }
  function M(S, E, N) {
    const ne = o.value;
    if (ne === null) return;
    const le = ne.clientWidth, X = ne.clientHeight, ve = ne.getBoundingClientRect();
    let ge = Math.min(le, Math.max(0, S - ve.left));
    l.lang.rtl === true && (ge = le - ge);
    const me = Math.min(X, Math.max(0, E - ve.top)), de = Math.round(100 * ge / le), ae = Math.round(100 * Math.max(0, Math.min(1, -(me / X) + 1))), Q = cd({ h: m.value.h, s: de, v: ae, a: p.value === true ? m.value.a : void 0 });
    m.value.s = de, m.value.v = ae, I(Q, N);
  }
  function C(S, E) {
    const N = Math.round(S), ne = cd({ h: N, s: m.value.s, v: m.value.v, a: p.value === true ? m.value.a : void 0 });
    m.value.h = N, I(ne, E);
  }
  function H(S) {
    C(S, true);
  }
  function Y(S, E, N, ne, le) {
    if (ne !== void 0 && wt(ne), !/^[0-9]+$/.test(S)) {
      le === true && n.$forceUpdate();
      return;
    }
    const X = Math.floor(Number(S));
    if (X < 0 || X > N) {
      le === true && n.$forceUpdate();
      return;
    }
    const ve = { r: E === "r" ? X : m.value.r, g: E === "g" ? X : m.value.g, b: E === "b" ? X : m.value.b, a: p.value === true ? E === "a" ? X : m.value.a : void 0 };
    if (E !== "a") {
      const ge = Ii(ve);
      m.value.h = ge.h, m.value.s = ge.s, m.value.v = ge.v;
    }
    if (I(ve, le), le !== true && (ne == null ? void 0 : ne.target.selectionEnd) !== void 0) {
      const ge = ne.target.selectionEnd;
      We(() => {
        ne.target.setSelectionRange(ge, ge);
      });
    }
  }
  function L(S, E) {
    let N;
    const ne = S.target.value;
    if (wt(S), s.value === "hex") {
      if (ne.length !== (p.value === true ? 9 : 7) || !/^#[0-9A-Fa-f]+$/.test(ne)) return true;
      N = th(ne);
    } else {
      let X;
      if (ne.endsWith(")")) if (p.value !== true && ne.startsWith("rgb(")) {
        if (X = ne.substring(4, ne.length - 1).split(",").map((ve) => parseInt(ve, 10)), X.length !== 3 || !/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(ne)) return true;
      } else if (p.value === true && ne.startsWith("rgba(")) {
        if (X = ne.substring(5, ne.length - 1).split(","), X.length !== 4 || !/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(ne)) return true;
        for (let ge = 0; ge < 3; ge++) {
          const me = parseInt(X[ge], 10);
          if (me < 0 || me > 255) return true;
          X[ge] = me;
        }
        const ve = parseFloat(X[3]);
        if (ve < 0 || ve > 1) return true;
        X[3] = ve;
      } else return true;
      else return true;
      if (X[0] < 0 || X[0] > 255 || X[1] < 0 || X[1] > 255 || X[2] < 0 || X[2] > 255 || p.value === true && (X[3] < 0 || X[3] > 1)) return true;
      N = { r: X[0], g: X[1], b: X[2], a: p.value === true ? X[3] * 100 : void 0 };
    }
    const le = Ii(N);
    if (m.value.h = le.h, m.value.s = le.s, m.value.v = le.v, I(N, E), E !== true) {
      const X = S.target.selectionEnd;
      We(() => {
        S.target.setSelectionRange(X, X);
      });
    }
  }
  function O(S) {
    const E = q(S), N = { r: E.r, g: E.g, b: E.b, a: E.a };
    N.a === void 0 && (N.a = m.value.a), m.value.h = E.h, m.value.s = E.s, m.value.v = E.v, I(N, true);
  }
  function U(S) {
    S.isFinal ? M(S.position.left, S.position.top, true) : ye(S);
  }
  const ye = _m((S) => {
    M(S.position.left, S.position.top);
  }, 20);
  function W(S) {
    M(S.pageX - window.pageXOffset, S.pageY - window.pageYOffset, true);
  }
  function T(S) {
    M(S.pageX - window.pageXOffset, S.pageY - window.pageYOffset);
  }
  function ee(S) {
    i.value !== null && (i.value.$el.style.opacity = S ? 1 : 0);
  }
  function G(S) {
    s.value = S;
  }
  function fe() {
    const S = [];
    return e.noHeaderTabs !== true && S.push(d(ad, { class: "q-color-picker__header-tabs", modelValue: s.value, dense: true, align: "justify", "onUpdate:modelValue": G }, () => [d(Va, { label: "HEX" + (p.value === true ? "A" : ""), name: "hex", ripple: false }), d(Va, { label: "RGB" + (p.value === true ? "A" : ""), name: "rgb", ripple: false })])), S.push(d("div", { class: "q-color-picker__header-banner row flex-center no-wrap" }, [d("input", { class: "fit", value: m.value[s.value], ...h.value !== true ? { readonly: true } : {}, ...r("topIn", { onInput: (E) => {
      ee(L(E) === true);
    }, onChange: wt, onBlur: (E) => {
      L(E, true) === true && n.$forceUpdate(), ee(false);
    } }) }), d(et, { ref: i, class: "q-color-picker__error-icon absolute no-pointer-events", name: l.iconSet.type.negative })])), d("div", { class: "q-color-picker__header relative-position overflow-hidden" }, [d("div", { class: "q-color-picker__header-bg absolute-full" }), d("div", { class: b.value, style: y.value }, S)]);
  }
  function R() {
    return d(Mp, { modelValue: f.value, animated: true }, () => [d(zi, { class: "q-color-picker__spectrum-tab overflow-hidden", name: "spectrum" }, V), d(zi, { class: "q-pa-md q-color-picker__tune-tab", name: "tune" }, j), d(zi, { class: "q-color-picker__palette-tab", name: "palette" }, ue)]);
  }
  function A(S) {
    f.value = S;
  }
  function te() {
    return d("div", { class: "q-color-picker__footer relative-position overflow-hidden" }, [d(ad, { class: "absolute-full", modelValue: f.value, dense: true, align: "justify", "onUpdate:modelValue": A }, () => [d(Va, { icon: l.iconSet.colorPicker.spectrum, name: "spectrum", ripple: false }), d(Va, { icon: l.iconSet.colorPicker.tune, name: "tune", ripple: false }), d(Va, { icon: l.iconSet.colorPicker.palette, name: "palette", ripple: false })])]);
  }
  function V() {
    const S = { ref: o, class: "q-color-picker__spectrum non-selectable relative-position cursor-pointer" + (h.value !== true ? " readonly" : ""), style: x.value, ...h.value === true ? { onClick: W, onMousedown: T } : {} }, E = [d("div", { style: { paddingBottom: "100%" } }), d("div", { class: "q-color-picker__spectrum-white absolute-full" }), d("div", { class: "q-color-picker__spectrum-black absolute-full" }), d("div", { class: "absolute", style: $.value }, [m.value.hex !== void 0 ? d("div", { class: "q-color-picker__spectrum-circle" }) : null])], N = [d(na, { class: "q-color-picker__hue non-selectable", modelValue: m.value.h, min: 0, max: 360, trackSize: "8px", innerTrackColor: "transparent", selectionColor: "transparent", readonly: h.value !== true, thumbPath: dd, "onUpdate:modelValue": C, onChange: H })];
    return p.value === true && N.push(d(na, { class: "q-color-picker__alpha non-selectable", modelValue: m.value.a, min: 0, max: 100, trackSize: "8px", trackColor: "white", innerTrackColor: "transparent", selectionColor: "transparent", trackImg: $p, readonly: h.value !== true, hideSelection: true, thumbPath: dd, ...r("alphaSlide", { "onUpdate:modelValue": (ne) => Y(ne, "a", 100), onChange: (ne) => Y(ne, "a", 100, void 0, true) }) })), [pn("div", S, E, "spec", h.value, () => P.value), d("div", { class: "q-color-picker__sliders" }, N)];
  }
  function j() {
    return [d("div", { class: "row items-center no-wrap" }, [d("div", "R"), d(na, { modelValue: m.value.r, min: 0, max: 255, color: "red", dark: a.value, readonly: h.value !== true, ...r("rSlide", { "onUpdate:modelValue": (S) => Y(S, "r", 255), onChange: (S) => Y(S, "r", 255, void 0, true) }) }), d("input", { value: m.value.r, maxlength: 3, readonly: h.value !== true, onChange: wt, ...r("rIn", { onInput: (S) => Y(S.target.value, "r", 255, S), onBlur: (S) => Y(S.target.value, "r", 255, S, true) }) })]), d("div", { class: "row items-center no-wrap" }, [d("div", "G"), d(na, { modelValue: m.value.g, min: 0, max: 255, color: "green", dark: a.value, readonly: h.value !== true, ...r("gSlide", { "onUpdate:modelValue": (S) => Y(S, "g", 255), onChange: (S) => Y(S, "g", 255, void 0, true) }) }), d("input", { value: m.value.g, maxlength: 3, readonly: h.value !== true, onChange: wt, ...r("gIn", { onInput: (S) => Y(S.target.value, "g", 255, S), onBlur: (S) => Y(S.target.value, "g", 255, S, true) }) })]), d("div", { class: "row items-center no-wrap" }, [d("div", "B"), d(na, { modelValue: m.value.b, min: 0, max: 255, color: "blue", readonly: h.value !== true, dark: a.value, ...r("bSlide", { "onUpdate:modelValue": (S) => Y(S, "b", 255), onChange: (S) => Y(S, "b", 255, void 0, true) }) }), d("input", { value: m.value.b, maxlength: 3, readonly: h.value !== true, onChange: wt, ...r("bIn", { onInput: (S) => Y(S.target.value, "b", 255, S), onBlur: (S) => Y(S.target.value, "b", 255, S, true) }) })]), p.value === true ? d("div", { class: "row items-center no-wrap" }, [d("div", "A"), d(na, { modelValue: m.value.a, color: "grey", readonly: h.value !== true, dark: a.value, ...r("aSlide", { "onUpdate:modelValue": (S) => Y(S, "a", 100), onChange: (S) => Y(S, "a", 100, void 0, true) }) }), d("input", { value: m.value.a, maxlength: 3, readonly: h.value !== true, onChange: wt, ...r("aIn", { onInput: (S) => Y(S.target.value, "a", 100, S), onBlur: (S) => Y(S.target.value, "a", 100, S, true) }) })]) : null];
  }
  function ue() {
    const S = (E) => d("div", { class: "q-color-picker__cube col-auto", style: { backgroundColor: E }, ...h.value === true ? r("palette#" + E, { onClick: () => {
      O(E);
    } }) : {} });
    return [d("div", { class: "row items-center q-color-picker__palette-rows" + (h.value === true ? " q-color-picker__palette-rows--editable" : "") }, F.value.map(S))];
  }
  return () => {
    const S = [R()];
    return e.name !== void 0 && e.disable !== true && k(S, "push"), e.noHeader !== true && S.unshift(fe()), e.noFooter !== true && S.push(te()), d("div", { class: D.value, ...B.value }, S);
  };
} });
var ml = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
function Pp(e, t, n) {
  return Object.prototype.toString.call(e) === "[object Date]" && (n = e.getDate(), t = e.getMonth() + 1, e = e.getFullYear()), Op(zs(e, t, n));
}
function fd(e, t, n) {
  return ah(Fp(e, t, n));
}
function Lp(e) {
  return Bp(e) === 0;
}
function io(e, t) {
  return t <= 6 ? 31 : t <= 11 || Lp(e) ? 30 : 29;
}
function Bp(e) {
  const t = ml.length;
  let n = ml[0], l, a, r, o, i;
  if (e < n || e >= ml[t - 1]) throw new Error("Invalid Jalaali year " + e);
  for (i = 1; i < t && (l = ml[i], a = l - n, !(e < l)); i += 1) n = l;
  return o = e - n, a - o < 6 && (o = o - a + _t(a + 4, 33) * 33), r = on(on(o + 1, 33) - 1, 4), r === -1 && (r = 4), r;
}
function lh(e, t) {
  const n = ml.length, l = e + 621;
  let a = -14, r = ml[0], o, i, u, c, s;
  if (e < r || e >= ml[n - 1]) throw new Error("Invalid Jalaali year " + e);
  for (s = 1; s < n && (o = ml[s], i = o - r, !(e < o)); s += 1) a = a + _t(i, 33) * 8 + _t(on(i, 33), 4), r = o;
  c = e - r, a = a + _t(c, 33) * 8 + _t(on(c, 33) + 3, 4), on(i, 33) === 4 && i - c === 4 && (a += 1);
  const f = _t(l, 4) - _t((_t(l, 100) + 1) * 3, 4) - 150, m = 20 + a - f;
  return t || (i - c < 6 && (c = c - i + _t(i + 4, 33) * 33), u = on(on(c + 1, 33) - 1, 4), u === -1 && (u = 4)), { leap: u, gy: l, march: m };
}
function Fp(e, t, n) {
  const l = lh(e, true);
  return zs(l.gy, 3, l.march) + (t - 1) * 31 - _t(t, 7) * (t - 7) + n - 1;
}
function Op(e) {
  const t = ah(e).gy;
  let n = t - 621, l, a, r;
  const o = lh(n, false), i = zs(t, 3, o.march);
  if (r = e - i, r >= 0) {
    if (r <= 185) return a = 1 + _t(r, 31), l = on(r, 31) + 1, { jy: n, jm: a, jd: l };
    r -= 186;
  } else n -= 1, r += 179, o.leap === 1 && (r += 1);
  return a = 7 + _t(r, 30), l = on(r, 30) + 1, { jy: n, jm: a, jd: l };
}
function zs(e, t, n) {
  let l = _t((e + _t(t - 8, 6) + 100100) * 1461, 4) + _t(153 * on(t + 9, 12) + 2, 5) + n - 34840408;
  return l = l - _t(_t(e + 100100 + _t(t - 8, 6), 100) * 3, 4) + 752, l;
}
function ah(e) {
  let t = 4 * e + 139361631;
  t = t + _t(_t(4 * e + 183187720, 146097) * 3, 4) * 4 - 3908;
  const n = _t(on(t, 1461), 4) * 5 + 308, l = _t(on(n, 153), 5) + 1, a = on(_t(n, 153), 12) + 1;
  return { gy: _t(t, 1461) - 100100 + _t(8 - a, 6), gm: a, gd: l };
}
function _t(e, t) {
  return ~~(e / t);
}
function on(e, t) {
  return e - ~~(e / t) * t;
}
var Vp = ["gregorian", "persian"], Fo = { mask: { type: String }, locale: Object, calendar: { type: String, validator: (e) => Vp.includes(e), default: "gregorian" }, landscape: Boolean, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, readonly: Boolean, disable: Boolean }, rh = ["update:modelValue"];
function Un(e) {
  return e.year + "/" + rt(e.month) + "/" + rt(e.day);
}
function oh(e, t) {
  const n = v(() => e.disable !== true && e.readonly !== true), l = v(() => n.value === true ? 0 : -1), a = v(() => {
    const i = [];
    return e.color !== void 0 && i.push(`bg-${e.color}`), e.textColor !== void 0 && i.push(`text-${e.textColor}`), i.join(" ");
  });
  function r() {
    return e.locale !== void 0 ? { ...t.lang.date, ...e.locale } : t.lang.date;
  }
  function o(i) {
    const u = /* @__PURE__ */ new Date(), c = i === true ? null : 0;
    if (e.calendar === "persian") {
      const s = Pp(u);
      return { year: s.jy, month: s.jm, day: s.jd };
    }
    return { year: u.getFullYear(), month: u.getMonth() + 1, day: u.getDate(), hour: c, minute: c, second: c, millisecond: c };
  }
  return { editable: n, tabindex: l, headerClass: a, getLocale: r, getCurrentDate: o };
}
var ih = 864e5, zp = 36e5, zu = 6e4, uh = "YYYY-MM-DDTHH:mm:ss.SSSZ", Ip = /\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g, Dp = /(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g, Di = {};
function Np(e, t) {
  const n = "(" + t.days.join("|") + ")", l = e + n;
  if (Di[l] !== void 0) return Di[l];
  const a = "(" + t.daysShort.join("|") + ")", r = "(" + t.months.join("|") + ")", o = "(" + t.monthsShort.join("|") + ")", i = {};
  let u = 0;
  const c = e.replace(Dp, (f) => {
    switch (u++, f) {
      case "YY":
        return i.YY = u, "(-?\\d{1,2})";
      case "YYYY":
        return i.YYYY = u, "(-?\\d{1,4})";
      case "M":
        return i.M = u, "(\\d{1,2})";
      case "Mo":
        return i.M = u++, "(\\d{1,2}(st|nd|rd|th))";
      case "MM":
        return i.M = u, "(\\d{2})";
      case "MMM":
        return i.MMM = u, o;
      case "MMMM":
        return i.MMMM = u, r;
      case "D":
        return i.D = u, "(\\d{1,2})";
      case "Do":
        return i.D = u++, "(\\d{1,2}(st|nd|rd|th))";
      case "DD":
        return i.D = u, "(\\d{2})";
      case "H":
        return i.H = u, "(\\d{1,2})";
      case "HH":
        return i.H = u, "(\\d{2})";
      case "h":
        return i.h = u, "(\\d{1,2})";
      case "hh":
        return i.h = u, "(\\d{2})";
      case "m":
        return i.m = u, "(\\d{1,2})";
      case "mm":
        return i.m = u, "(\\d{2})";
      case "s":
        return i.s = u, "(\\d{1,2})";
      case "ss":
        return i.s = u, "(\\d{2})";
      case "S":
        return i.S = u, "(\\d{1})";
      case "SS":
        return i.S = u, "(\\d{2})";
      case "SSS":
        return i.S = u, "(\\d{3})";
      case "A":
        return i.A = u, "(AM|PM)";
      case "a":
        return i.a = u, "(am|pm)";
      case "aa":
        return i.aa = u, "(a\\.m\\.|p\\.m\\.)";
      case "ddd":
        return a;
      case "dddd":
        return n;
      case "Q":
      case "d":
      case "E":
        return "(\\d{1})";
      case "do":
        return u++, "(\\d{1}(st|nd|rd|th))";
      case "Qo":
        return "(1st|2nd|3rd|4th)";
      case "DDD":
      case "DDDD":
        return "(\\d{1,3})";
      case "DDDo":
        return u++, "(\\d{1,3}(st|nd|rd|th))";
      case "w":
        return "(\\d{1,2})";
      case "wo":
        return u++, "(\\d{1,2}(st|nd|rd|th))";
      case "ww":
        return "(\\d{2})";
      case "Z":
        return i.Z = u, "(Z|[+-]\\d{2}:\\d{2})";
      case "ZZ":
        return i.ZZ = u, "(Z|[+-]\\d{2}\\d{2})";
      case "X":
        return i.X = u, "(-?\\d+)";
      case "x":
        return i.x = u, "(-?\\d{4,})";
      default:
        return u--, f[0] === "[" && (f = f.substring(1, f.length - 1)), f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
  }), s = { map: i, regex: new RegExp("^" + c) };
  return Di[l] = s, s;
}
function sh(e, t) {
  return e !== void 0 ? e : t !== void 0 ? t.date : Tu.date;
}
function vd(e, t = "") {
  const n = e > 0 ? "-" : "+", l = Math.abs(e), a = Math.floor(l / 60), r = l % 60;
  return n + rt(a) + t + rt(r);
}
function Ka(e, t, n, l, a) {
  const r = { year: null, month: null, day: null, hour: null, minute: null, second: null, millisecond: null, timezoneOffset: null, dateHash: null, timeHash: null };
  if (a !== void 0 && Object.assign(r, a), e == null || e === "" || typeof e != "string") return r;
  t === void 0 && (t = uh);
  const o = sh(n, ni.props), i = o.months, u = o.monthsShort, { regex: c, map: s } = Np(t, o), f = e.match(c);
  if (f === null) return r;
  let m = "";
  if (s.X !== void 0 || s.x !== void 0) {
    const h = parseInt(f[s.X !== void 0 ? s.X : s.x], 10);
    if (isNaN(h) === true || h < 0) return r;
    const g = new Date(h * (s.X !== void 0 ? 1e3 : 1));
    r.year = g.getFullYear(), r.month = g.getMonth() + 1, r.day = g.getDate(), r.hour = g.getHours(), r.minute = g.getMinutes(), r.second = g.getSeconds(), r.millisecond = g.getMilliseconds();
  } else {
    if (s.YYYY !== void 0) r.year = parseInt(f[s.YYYY], 10);
    else if (s.YY !== void 0) {
      const h = parseInt(f[s.YY], 10);
      r.year = h < 0 ? h : 2e3 + h;
    }
    if (s.M !== void 0) {
      if (r.month = parseInt(f[s.M], 10), r.month < 1 || r.month > 12) return r;
    } else s.MMM !== void 0 ? r.month = u.indexOf(f[s.MMM]) + 1 : s.MMMM !== void 0 && (r.month = i.indexOf(f[s.MMMM]) + 1);
    if (s.D !== void 0) {
      if (r.day = parseInt(f[s.D], 10), r.year === null || r.month === null || r.day < 1) return r;
      const h = l !== "persian" ? new Date(r.year, r.month, 0).getDate() : io(r.year, r.month);
      if (r.day > h) return r;
    }
    s.H !== void 0 ? r.hour = parseInt(f[s.H], 10) % 24 : s.h !== void 0 && (r.hour = parseInt(f[s.h], 10) % 12, (s.A && f[s.A] === "PM" || s.a && f[s.a] === "pm" || s.aa && f[s.aa] === "p.m.") && (r.hour += 12), r.hour = r.hour % 24), s.m !== void 0 && (r.minute = parseInt(f[s.m], 10) % 60), s.s !== void 0 && (r.second = parseInt(f[s.s], 10) % 60), s.S !== void 0 && (r.millisecond = parseInt(f[s.S], 10) * 10 ** (3 - f[s.S].length)), (s.Z !== void 0 || s.ZZ !== void 0) && (m = s.Z !== void 0 ? f[s.Z].replace(":", "") : f[s.ZZ], r.timezoneOffset = (m[0] === "+" ? -1 : 1) * (60 * m.slice(1, 3) + 1 * m.slice(3, 5)));
  }
  return r.dateHash = rt(r.year, 6) + "/" + rt(r.month) + "/" + rt(r.day), r.timeHash = rt(r.hour) + ":" + rt(r.minute) + ":" + rt(r.second) + m, r;
}
function Ni(e) {
  const t = new Date(e.getFullYear(), e.getMonth(), e.getDate());
  t.setDate(t.getDate() - (t.getDay() + 6) % 7 + 3);
  const n = new Date(t.getFullYear(), 0, 4);
  n.setDate(n.getDate() - (n.getDay() + 6) % 7 + 3);
  const l = t.getTimezoneOffset() - n.getTimezoneOffset();
  t.setHours(t.getHours() - l);
  const a = (t - n) / (ih * 7);
  return 1 + Math.floor(a);
}
function Qn(e, t, n) {
  const l = new Date(e), a = `set${n === true ? "UTC" : ""}`;
  switch (t) {
    case "year":
    case "years":
      l[`${a}Month`](0);
    case "month":
    case "months":
      l[`${a}Date`](1);
    case "day":
    case "days":
    case "date":
      l[`${a}Hours`](0);
    case "hour":
    case "hours":
      l[`${a}Minutes`](0);
    case "minute":
    case "minutes":
      l[`${a}Seconds`](0);
    case "second":
    case "seconds":
      l[`${a}Milliseconds`](0);
  }
  return l;
}
function Ur(e, t, n) {
  return (e.getTime() - e.getTimezoneOffset() * zu - (t.getTime() - t.getTimezoneOffset() * zu)) / n;
}
function ch(e, t, n = "days") {
  const l = new Date(e), a = new Date(t);
  switch (n) {
    case "years":
    case "year":
      return l.getFullYear() - a.getFullYear();
    case "months":
    case "month":
      return (l.getFullYear() - a.getFullYear()) * 12 + l.getMonth() - a.getMonth();
    case "days":
    case "day":
    case "date":
      return Ur(Qn(l, "day"), Qn(a, "day"), ih);
    case "hours":
    case "hour":
      return Ur(Qn(l, "hour"), Qn(a, "hour"), zp);
    case "minutes":
    case "minute":
      return Ur(Qn(l, "minute"), Qn(a, "minute"), zu);
    case "seconds":
    case "second":
      return Ur(Qn(l, "second"), Qn(a, "second"), 1e3);
  }
}
function Hi(e) {
  return ch(e, Qn(e, "year"), "days") + 1;
}
function la(e) {
  if (e >= 11 && e <= 13) return `${e}th`;
  switch (e % 10) {
    case 1:
      return `${e}st`;
    case 2:
      return `${e}nd`;
    case 3:
      return `${e}rd`;
  }
  return `${e}th`;
}
var md = { YY(e, t, n) {
  const l = this.YYYY(e, t, n) % 100;
  return l >= 0 ? rt(l) : "-" + rt(Math.abs(l));
}, YYYY(e, t, n) {
  return n ?? e.getFullYear();
}, M(e) {
  return e.getMonth() + 1;
}, Mo(e) {
  return la(e.getMonth() + 1);
}, MM(e) {
  return rt(e.getMonth() + 1);
}, MMM(e, t) {
  return t.monthsShort[e.getMonth()];
}, MMMM(e, t) {
  return t.months[e.getMonth()];
}, Q(e) {
  return Math.ceil((e.getMonth() + 1) / 3);
}, Qo(e) {
  return la(this.Q(e));
}, D(e) {
  return e.getDate();
}, Do(e) {
  return la(e.getDate());
}, DD(e) {
  return rt(e.getDate());
}, DDD(e) {
  return Hi(e);
}, DDDo(e) {
  return la(Hi(e));
}, DDDD(e) {
  return rt(Hi(e), 3);
}, d(e) {
  return e.getDay();
}, do(e) {
  return la(e.getDay());
}, dd(e, t) {
  return t.days[e.getDay()].slice(0, 2);
}, ddd(e, t) {
  return t.daysShort[e.getDay()];
}, dddd(e, t) {
  return t.days[e.getDay()];
}, E(e) {
  return e.getDay() || 7;
}, w(e) {
  return Ni(e);
}, wo(e) {
  return la(Ni(e));
}, ww(e) {
  return rt(Ni(e));
}, H(e) {
  return e.getHours();
}, HH(e) {
  return rt(e.getHours());
}, h(e) {
  const t = e.getHours();
  return t === 0 ? 12 : t > 12 ? t % 12 : t;
}, hh(e) {
  return rt(this.h(e));
}, m(e) {
  return e.getMinutes();
}, mm(e) {
  return rt(e.getMinutes());
}, s(e) {
  return e.getSeconds();
}, ss(e) {
  return rt(e.getSeconds());
}, S(e) {
  return Math.floor(e.getMilliseconds() / 100);
}, SS(e) {
  return rt(Math.floor(e.getMilliseconds() / 10));
}, SSS(e) {
  return rt(e.getMilliseconds(), 3);
}, A(e) {
  return e.getHours() < 12 ? "AM" : "PM";
}, a(e) {
  return e.getHours() < 12 ? "am" : "pm";
}, aa(e) {
  return e.getHours() < 12 ? "a.m." : "p.m.";
}, Z(e, t, n, l) {
  const a = l ?? e.getTimezoneOffset();
  return vd(a, ":");
}, ZZ(e, t, n, l) {
  const a = l ?? e.getTimezoneOffset();
  return vd(a);
}, X(e) {
  return Math.floor(e.getTime() / 1e3);
}, x(e) {
  return e.getTime();
} };
function dh(e, t, n, l, a) {
  if (e !== 0 && !e || e === 1 / 0 || e === -1 / 0) return;
  const r = new Date(e);
  if (isNaN(r)) return;
  t === void 0 && (t = uh);
  const o = sh(n, ni.props);
  return t.replace(Ip, (i, u) => i in md ? md[i](r, o, l, a) : u === void 0 ? i : u.split("\\]").join("]"));
}
var Nn = 20, Hp = ["Calendar", "Years", "Months"], hd = (e) => Hp.includes(e), ji = (e) => /^-?[\d]+\/[0-1]\d$/.test(e), aa = " \u2014 ";
function al(e) {
  return e.year + "/" + rt(e.month);
}
he({ name: "QDate", props: { ...Fo, ...wn, ...nt, modelValue: { required: true, validator: (e) => typeof e == "string" || Array.isArray(e) === true || Object(e) === e || e === null }, multiple: Boolean, range: Boolean, title: String, subtitle: String, mask: { ...Fo.mask, default: "YYYY/MM/DD" }, defaultYearMonth: { type: String, validator: ji }, yearsInMonthView: Boolean, events: [Array, Function], eventColor: [String, Function], emitImmediately: Boolean, options: [Array, Function], navigationMinYearMonth: { type: String, validator: ji }, navigationMaxYearMonth: { type: String, validator: ji }, noUnset: Boolean, firstDayOfWeek: [String, Number], todayBtn: Boolean, minimal: Boolean, defaultView: { type: String, default: "Calendar", validator: hd } }, emits: [...rh, "rangeStart", "rangeEnd", "navigation"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = lt(e, a), { getCache: o } = Pr(), { tabindex: i, headerClass: u, getLocale: c, getCurrentDate: s } = oh(e, a);
  let f;
  const m = $r(e), h = Cl(m), g = K(null), _ = K(He()), w = K(c()), k = v(() => He()), p = v(() => c()), y = v(() => s()), b = K(ie(_.value, w.value)), x = K(e.defaultView), $ = v(() => a.lang.rtl === true ? "right" : "left"), F = K($.value), D = K($.value), B = b.value.year, P = K(B - B % Nn - (B < 0 ? Nn : 0)), I = K(null), q = v(() => {
    const z = e.landscape === true ? "landscape" : "portrait";
    return `q-date q-date--${z} q-date--${z}-${e.minimal === true ? "minimal" : "standard"}` + (r.value === true ? " q-date--dark q-dark" : "") + (e.bordered === true ? " q-date--bordered" : "") + (e.square === true ? " q-date--square no-border-radius" : "") + (e.flat === true ? " q-date--flat no-shadow" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-date--readonly" : "");
  }), M = v(() => e.color || "primary"), C = v(() => e.textColor || "white"), H = v(() => e.emitImmediately === true && e.multiple !== true && e.range !== true), Y = v(() => Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue !== null && e.modelValue !== void 0 ? [e.modelValue] : []), L = v(() => Y.value.filter((z) => typeof z == "string").map((z) => Ve(z, _.value, w.value)).filter((z) => z.dateHash !== null && z.day !== null && z.month !== null && z.year !== null)), O = v(() => {
    const z = (Z) => Ve(Z, _.value, w.value);
    return Y.value.filter((Z) => Pt(Z) === true && Z.from !== void 0 && Z.to !== void 0).map((Z) => ({ from: z(Z.from), to: z(Z.to) })).filter((Z) => Z.from.dateHash !== null && Z.to.dateHash !== null && Z.from.dateHash < Z.to.dateHash);
  }), U = v(() => e.calendar !== "persian" ? (z) => new Date(z.year, z.month - 1, z.day) : (z) => {
    const Z = fd(z.year, z.month, z.day);
    return new Date(Z.gy, Z.gm - 1, Z.gd);
  }), ye = v(() => e.calendar === "persian" ? Un : (z, Z, ce) => dh(new Date(z.year, z.month - 1, z.day, z.hour, z.minute, z.second, z.millisecond), Z === void 0 ? _.value : Z, ce === void 0 ? w.value : ce, z.year, z.timezoneOffset)), W = v(() => L.value.length + O.value.reduce((z, Z) => z + 1 + ch(U.value(Z.to), U.value(Z.from)), 0)), T = v(() => {
    if (e.title !== void 0 && e.title !== null && e.title.length !== 0) return e.title;
    if (I.value !== null) {
      const ce = I.value.init, Te = U.value(ce);
      return w.value.daysShort[Te.getDay()] + ", " + w.value.monthsShort[ce.month - 1] + " " + ce.day + aa + "?";
    }
    if (W.value === 0) return aa;
    if (W.value > 1) return `${W.value} ${w.value.pluralDay}`;
    const z = L.value[0], Z = U.value(z);
    return isNaN(Z.valueOf()) === true ? aa : w.value.headerTitle !== void 0 ? w.value.headerTitle(Z, z) : w.value.daysShort[Z.getDay()] + ", " + w.value.monthsShort[z.month - 1] + " " + z.day;
  }), ee = v(() => L.value.concat(O.value.map((Z) => Z.from)).sort((Z, ce) => Z.year - ce.year || Z.month - ce.month)[0]), G = v(() => L.value.concat(O.value.map((Z) => Z.to)).sort((Z, ce) => ce.year - Z.year || ce.month - Z.month)[0]), fe = v(() => {
    if (e.subtitle !== void 0 && e.subtitle !== null && e.subtitle.length !== 0) return e.subtitle;
    if (W.value === 0) return aa;
    if (W.value > 1) {
      const z = ee.value, Z = G.value, ce = w.value.monthsShort;
      return ce[z.month - 1] + (z.year !== Z.year ? " " + z.year + aa + ce[Z.month - 1] + " " : z.month !== Z.month ? aa + ce[Z.month - 1] : "") + " " + Z.year;
    }
    return L.value[0].year;
  }), R = v(() => {
    const z = [a.iconSet.datetime.arrowLeft, a.iconSet.datetime.arrowRight];
    return a.lang.rtl === true ? z.reverse() : z;
  }), A = v(() => e.firstDayOfWeek !== void 0 ? Number(e.firstDayOfWeek) : w.value.firstDayOfWeek), te = v(() => {
    const z = w.value.daysShort, Z = A.value;
    return Z > 0 ? z.slice(Z, 7).concat(z.slice(0, Z)) : z;
  }), V = v(() => {
    const z = b.value;
    return e.calendar !== "persian" ? new Date(z.year, z.month, 0).getDate() : io(z.year, z.month);
  }), j = v(() => typeof e.eventColor == "function" ? e.eventColor : () => e.eventColor), ue = v(() => {
    if (e.navigationMinYearMonth === void 0) return null;
    const z = e.navigationMinYearMonth.split("/");
    return { year: parseInt(z[0], 10), month: parseInt(z[1], 10) };
  }), S = v(() => {
    if (e.navigationMaxYearMonth === void 0) return null;
    const z = e.navigationMaxYearMonth.split("/");
    return { year: parseInt(z[0], 10), month: parseInt(z[1], 10) };
  }), E = v(() => {
    const z = { month: { prev: true, next: true }, year: { prev: true, next: true } };
    return ue.value !== null && ue.value.year >= b.value.year && (z.year.prev = false, ue.value.year === b.value.year && ue.value.month >= b.value.month && (z.month.prev = false)), S.value !== null && S.value.year <= b.value.year && (z.year.next = false, S.value.year === b.value.year && S.value.month <= b.value.month && (z.month.next = false)), z;
  }), N = v(() => {
    const z = {};
    return L.value.forEach((Z) => {
      const ce = al(Z);
      z[ce] === void 0 && (z[ce] = []), z[ce].push(Z.day);
    }), z;
  }), ne = v(() => {
    const z = {};
    return O.value.forEach((Z) => {
      const ce = al(Z.from), Te = al(Z.to);
      if (z[ce] === void 0 && (z[ce] = []), z[ce].push({ from: Z.from.day, to: ce === Te ? Z.to.day : void 0, range: Z }), ce < Te) {
        let Ee;
        const { year: Xe, month: Le } = Z.from, De = Le < 12 ? { year: Xe, month: Le + 1 } : { year: Xe + 1, month: 1 };
        for (; (Ee = al(De)) <= Te; ) z[Ee] === void 0 && (z[Ee] = []), z[Ee].push({ from: void 0, to: Ee === Te ? Z.to.day : void 0, range: Z }), De.month++, De.month > 12 && (De.year++, De.month = 1);
      }
    }), z;
  }), le = v(() => {
    if (I.value === null) return;
    const { init: z, initHash: Z, final: ce, finalHash: Te } = I.value, [Ee, Xe] = Z <= Te ? [z, ce] : [ce, z], Le = al(Ee), De = al(Xe);
    if (Le !== X.value && De !== X.value) return;
    const at = {};
    return Le === X.value ? (at.from = Ee.day, at.includeFrom = true) : at.from = 1, De === X.value ? (at.to = Xe.day, at.includeTo = true) : at.to = V.value, at;
  }), X = v(() => al(b.value)), ve = v(() => {
    const z = {};
    if (e.options === void 0) {
      for (let ce = 1; ce <= V.value; ce++) z[ce] = true;
      return z;
    }
    const Z = typeof e.options == "function" ? e.options : (ce) => e.options.includes(ce);
    for (let ce = 1; ce <= V.value; ce++) {
      const Te = X.value + "/" + rt(ce);
      z[ce] = Z(Te);
    }
    return z;
  }), ge = v(() => {
    const z = {};
    if (e.events === void 0) for (let Z = 1; Z <= V.value; Z++) z[Z] = false;
    else {
      const Z = typeof e.events == "function" ? e.events : (ce) => e.events.includes(ce);
      for (let ce = 1; ce <= V.value; ce++) {
        const Te = X.value + "/" + rt(ce);
        z[ce] = Z(Te) === true && j.value(Te);
      }
    }
    return z;
  }), me = v(() => {
    let z, Z;
    const { year: ce, month: Te } = b.value;
    if (e.calendar !== "persian") z = new Date(ce, Te - 1, 1), Z = new Date(ce, Te - 1, 0).getDate();
    else {
      const Ee = fd(ce, Te, 1);
      z = new Date(Ee.gy, Ee.gm - 1, Ee.gd);
      let Xe = Te - 1, Le = ce;
      Xe === 0 && (Xe = 12, Le--), Z = io(Le, Xe);
    }
    return { days: z.getDay() - A.value - 1, endDay: Z };
  }), de = v(() => {
    const z = [], { days: Z, endDay: ce } = me.value, Te = Z < 0 ? Z + 7 : Z;
    if (Te < 6) for (let Le = ce - Te; Le <= ce; Le++) z.push({ i: Le, fill: true });
    const Ee = z.length;
    for (let Le = 1; Le <= V.value; Le++) {
      const De = { i: Le, event: ge.value[Le], classes: [] };
      ve.value[Le] === true && (De.in = true, De.flat = true), z.push(De);
    }
    if (N.value[X.value] !== void 0 && N.value[X.value].forEach((Le) => {
      const De = Ee + Le - 1;
      Object.assign(z[De], { selected: true, unelevated: true, flat: false, color: M.value, textColor: C.value });
    }), ne.value[X.value] !== void 0 && ne.value[X.value].forEach((Le) => {
      if (Le.from !== void 0) {
        const De = Ee + Le.from - 1, at = Ee + (Le.to || V.value) - 1;
        for (let cn = De; cn <= at; cn++) Object.assign(z[cn], { range: Le.range, unelevated: true, color: M.value, textColor: C.value });
        Object.assign(z[De], { rangeFrom: true, flat: false }), Le.to !== void 0 && Object.assign(z[at], { rangeTo: true, flat: false });
      } else if (Le.to !== void 0) {
        const De = Ee + Le.to - 1;
        for (let at = Ee; at <= De; at++) Object.assign(z[at], { range: Le.range, unelevated: true, color: M.value, textColor: C.value });
        Object.assign(z[De], { flat: false, rangeTo: true });
      } else {
        const De = Ee + V.value - 1;
        for (let at = Ee; at <= De; at++) Object.assign(z[at], { range: Le.range, unelevated: true, color: M.value, textColor: C.value });
      }
    }), le.value !== void 0) {
      const Le = Ee + le.value.from - 1, De = Ee + le.value.to - 1;
      for (let at = Le; at <= De; at++) z[at].color = M.value, z[at].editRange = true;
      le.value.includeFrom === true && (z[Le].editRangeFrom = true), le.value.includeTo === true && (z[De].editRangeTo = true);
    }
    b.value.year === y.value.year && b.value.month === y.value.month && (z[Ee + y.value.day - 1].today = true);
    const Xe = z.length % 7;
    if (Xe > 0) {
      const Le = 7 - Xe;
      for (let De = 1; De <= Le; De++) z.push({ i: De, fill: true });
    }
    return z.forEach((Le) => {
      let De = "q-date__calendar-item ";
      Le.fill === true ? De += "q-date__calendar-item--fill" : (De += `q-date__calendar-item--${Le.in === true ? "in" : "out"}`, Le.range !== void 0 && (De += ` q-date__range${Le.rangeTo === true ? "-to" : Le.rangeFrom === true ? "-from" : ""}`), Le.editRange === true && (De += ` q-date__edit-range${Le.editRangeFrom === true ? "-from" : ""}${Le.editRangeTo === true ? "-to" : ""}`), (Le.range !== void 0 || Le.editRange === true) && (De += ` text-${Le.color}`)), Le.classes = De;
    }), z;
  }), ae = v(() => e.disable === true ? { "aria-disabled": "true" } : {});
  be(() => e.modelValue, (z) => {
    if (f === JSON.stringify(z)) f = 0;
    else {
      const Z = ie(_.value, w.value);
      it(Z.year, Z.month, Z);
    }
  }), be(x, () => {
    g.value !== null && l.$el.contains(document.activeElement) === true && g.value.focus();
  }), be(() => b.value.year + "|" + b.value.month, () => {
    n("navigation", { year: b.value.year, month: b.value.month });
  }), be(k, (z) => {
    xe(z, w.value, "mask"), _.value = z;
  }), be(p, (z) => {
    xe(_.value, z, "locale"), w.value = z;
  });
  function Q(z) {
    f = JSON.stringify(z);
  }
  function oe() {
    const { year: z, month: Z, day: ce } = y.value, Te = { ...b.value, year: z, month: Z, day: ce }, Ee = N.value[al(Te)];
    (Ee === void 0 || Ee.includes(Te.day) === false) && In(Te), qe(Te.year, Te.month);
  }
  function we(z) {
    hd(z) === true && (x.value = z);
  }
  function ke(z, Z) {
    ["month", "year"].includes(z) && (z === "month" ? re : _e)(Z === true ? -1 : 1);
  }
  function qe(z, Z) {
    x.value = "Calendar", it(z, Z);
  }
  function Me(z, Z) {
    if (e.range === false || !z) {
      I.value = null;
      return;
    }
    const ce = Object.assign({ ...b.value }, z), Te = Z !== void 0 ? Object.assign({ ...b.value }, Z) : ce;
    I.value = { init: ce, initHash: Un(ce), final: Te, finalHash: Un(Te) }, qe(ce.year, ce.month);
  }
  function He() {
    return e.calendar === "persian" ? "YYYY/MM/DD" : e.mask;
  }
  function Ve(z, Z, ce) {
    return Ka(z, Z, ce, e.calendar, { hour: 0, minute: 0, second: 0, millisecond: 0 });
  }
  function ie(z, Z) {
    const ce = Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue ? [e.modelValue] : [];
    if (ce.length === 0) return pe();
    const Te = ce[ce.length - 1], Ee = Ve(Te.from !== void 0 ? Te.from : Te, z, Z);
    return Ee.dateHash === null ? pe() : Ee;
  }
  function pe() {
    let z, Z;
    if (e.defaultYearMonth !== void 0) {
      const ce = e.defaultYearMonth.split("/");
      z = parseInt(ce[0], 10), Z = parseInt(ce[1], 10);
    } else {
      const ce = y.value !== void 0 ? y.value : s();
      z = ce.year, Z = ce.month;
    }
    return { year: z, month: Z, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0, dateHash: z + "/" + rt(Z) + "/01" };
  }
  function re(z) {
    let Z = b.value.year, ce = Number(b.value.month) + z;
    ce === 13 ? (ce = 1, Z++) : ce === 0 && (ce = 12, Z--), it(Z, ce), H.value === true && jt("month");
  }
  function _e(z) {
    const Z = Number(b.value.year) + z;
    it(Z, b.value.month), H.value === true && jt("year");
  }
  function Ce(z) {
    it(z, b.value.month), x.value = e.defaultView === "Years" ? "Months" : "Calendar", H.value === true && jt("year");
  }
  function Oe(z) {
    it(b.value.year, z), x.value = "Calendar", H.value === true && jt("month");
  }
  function Ae(z, Z) {
    var _a2;
    (((_a2 = N.value[Z]) == null ? void 0 : _a2.includes(z.day)) === true ? se : In)(z);
  }
  function Ye(z) {
    return { year: z.year, month: z.month, day: z.day };
  }
  function it(z, Z, ce) {
    if (ue.value !== null && z <= ue.value.year && ((Z < ue.value.month || z < ue.value.year) && (Z = ue.value.month), z = ue.value.year), S.value !== null && z >= S.value.year && ((Z > S.value.month || z > S.value.year) && (Z = S.value.month), z = S.value.year), ce !== void 0) {
      const { hour: Ee, minute: Xe, second: Le, millisecond: De, timezoneOffset: at, timeHash: cn } = ce;
      Object.assign(b.value, { hour: Ee, minute: Xe, second: Le, millisecond: De, timezoneOffset: at, timeHash: cn });
    }
    const Te = z + "/" + rt(Z) + "/01";
    Te !== b.value.dateHash && (F.value = b.value.dateHash < Te == (a.lang.rtl !== true) ? "left" : "right", z !== b.value.year && (D.value = F.value), We(() => {
      P.value = z - z % Nn - (z < 0 ? Nn : 0), Object.assign(b.value, { year: z, month: Z, day: 1, dateHash: Te });
    }));
  }
  function Ct(z, Z, ce) {
    const Te = z !== null && z.length === 1 && e.multiple === false ? z[0] : z, { reason: Ee, details: Xe } = nl(Z, ce);
    Q(Te), n("update:modelValue", Te, Ee, Xe);
  }
  function jt(z) {
    const Z = L.value[0] !== void 0 && L.value[0].dateHash !== null ? { ...L.value[0] } : { ...b.value };
    We(() => {
      Z.year = b.value.year, Z.month = b.value.month;
      const ce = e.calendar !== "persian" ? new Date(Z.year, Z.month, 0).getDate() : io(Z.year, Z.month);
      Z.day = Math.min(Math.max(1, Z.day), ce);
      const Te = ln(Z), { details: Ee } = nl("", Z);
      Q(Te), n("update:modelValue", Te, z, Ee);
    });
  }
  function nl(z, Z) {
    return Z.from !== void 0 ? { reason: `${z}-range`, details: { ...Ye(Z.target), from: Ye(Z.from), to: Ye(Z.to) } } : { reason: `${z}-day`, details: Ye(Z) };
  }
  function ln(z, Z, ce) {
    return z.from !== void 0 ? { from: ye.value(z.from, Z, ce), to: ye.value(z.to, Z, ce) } : ye.value(z, Z, ce);
  }
  function In(z) {
    let Z;
    if (e.multiple === true) if (z.from !== void 0) {
      const ce = Un(z.from), Te = Un(z.to), Ee = L.value.filter((Le) => Le.dateHash < ce || Le.dateHash > Te), Xe = O.value.filter(({ from: Le, to: De }) => De.dateHash < ce || Le.dateHash > Te);
      Z = Ee.concat(Xe).concat(z).map((Le) => ln(Le));
    } else {
      const ce = Y.value.slice();
      ce.push(ln(z)), Z = ce;
    }
    else Z = ln(z);
    Ct(Z, "add", z);
  }
  function se(z) {
    if (e.noUnset === true) return;
    let Z = null;
    if (e.multiple === true && Array.isArray(e.modelValue) === true) {
      const ce = ln(z);
      z.from !== void 0 ? Z = e.modelValue.filter((Te) => Te.from !== void 0 ? Te.from !== ce.from && Te.to !== ce.to : true) : Z = e.modelValue.filter((Te) => Te !== ce), Z.length === 0 && (Z = null);
    }
    Ct(Z, "remove", z);
  }
  function xe(z, Z, ce) {
    const Te = L.value.concat(O.value).map((Xe) => ln(Xe, z, Z)).filter((Xe) => Xe.from !== void 0 ? Xe.from.dateHash !== null && Xe.to.dateHash !== null : Xe.dateHash !== null), Ee = (e.multiple === true ? Te : Te[0]) || null;
    Q(Ee), n("update:modelValue", Ee, ce);
  }
  function Fe() {
    if (e.minimal !== true) return d("div", { class: "q-date__header " + u.value }, [d("div", { class: "relative-position" }, [d(Ft, { name: "q-transition--fade" }, () => d("div", { key: "h-yr-" + fe.value, class: "q-date__header-subtitle q-date__header-link " + (x.value === "Years" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: i.value, ...o("vY", { onClick() {
      x.value = "Years";
    }, onKeyup(z) {
      z.keyCode === 13 && (x.value = "Years");
    } }) }, [fe.value]))]), d("div", { class: "q-date__header-title relative-position flex no-wrap" }, [d("div", { class: "relative-position col" }, [d(Ft, { name: "q-transition--fade" }, () => d("div", { key: "h-sub" + T.value, class: "q-date__header-title-label q-date__header-link " + (x.value === "Calendar" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: i.value, ...o("vC", { onClick() {
      x.value = "Calendar";
    }, onKeyup(z) {
      z.keyCode === 13 && (x.value = "Calendar");
    } }) }, [T.value]))]), e.todayBtn === true ? d(Ze, { class: "q-date__header-today self-start", icon: a.iconSet.datetime.today, ariaLabel: a.lang.date.today, flat: true, size: "sm", round: true, tabindex: i.value, onClick: oe }) : null])]);
  }
  function Be({ label: z, type: Z, key: ce, dir: Te, goTo: Ee, boundaries: Xe, cls: Le }) {
    return [d("div", { class: "row items-center q-date__arrow" }, [d(Ze, { round: true, dense: true, size: "sm", flat: true, icon: R.value[0], ariaLabel: Z === "Years" ? a.lang.date.prevYear : a.lang.date.prevMonth, tabindex: i.value, disable: Xe.prev === false, ...o("go-#" + Z, { onClick() {
      Ee(-1);
    } }) })]), d("div", { class: "relative-position overflow-hidden flex flex-center" + Le }, [d(Ft, { name: "q-transition--jump-" + Te }, () => d("div", { key: ce }, [d(Ze, { flat: true, dense: true, noCaps: true, label: z, tabindex: i.value, ...o("view#" + Z, { onClick: () => {
      x.value = Z;
    } }) })]))]), d("div", { class: "row items-center q-date__arrow" }, [d(Ze, { round: true, dense: true, size: "sm", flat: true, icon: R.value[1], ariaLabel: Z === "Years" ? a.lang.date.nextYear : a.lang.date.nextMonth, tabindex: i.value, disable: Xe.next === false, ...o("go+#" + Z, { onClick() {
      Ee(1);
    } }) })])];
  }
  const Ue = { Calendar: () => [d("div", { key: "calendar-view", class: "q-date__view q-date__calendar" }, [d("div", { class: "q-date__navigation row items-center no-wrap" }, Be({ label: w.value.months[b.value.month - 1], type: "Months", key: b.value.month, dir: F.value, goTo: re, boundaries: E.value.month, cls: " col" }).concat(Be({ label: b.value.year, type: "Years", key: b.value.year, dir: D.value, goTo: _e, boundaries: E.value.year, cls: "" }))), d("div", { class: "q-date__calendar-weekdays row items-center no-wrap" }, te.value.map((z) => d("div", { class: "q-date__calendar-item" }, [d("div", z)]))), d("div", { class: "q-date__calendar-days-container relative-position overflow-hidden" }, [d(Ft, { name: "q-transition--slide-" + F.value }, () => d("div", { key: X.value, class: "q-date__calendar-days fit" }, de.value.map((z) => d("div", { class: z.classes }, [z.in === true ? d(Ze, { class: z.today === true ? "q-date__today" : "", dense: true, flat: z.flat, unelevated: z.unelevated, color: z.color, textColor: z.textColor, label: z.i, tabindex: i.value, ...o("day#" + z.i, { onClick: () => {
    yt(z.i);
  }, onMouseover: () => {
    ht(z.i);
  } }) }, z.event !== false ? () => d("div", { class: "q-date__event bg-" + z.event }) : null) : d("div", "" + z.i)]))))])])], Months() {
    const z = b.value.year === y.value.year, Z = (Te) => ue.value !== null && b.value.year === ue.value.year && ue.value.month > Te || S.value !== null && b.value.year === S.value.year && S.value.month < Te, ce = w.value.monthsShort.map((Te, Ee) => {
      const Xe = b.value.month === Ee + 1;
      return d("div", { class: "q-date__months-item flex flex-center" }, [d(Ze, { class: z === true && y.value.month === Ee + 1 ? "q-date__today" : null, flat: Xe !== true, label: Te, unelevated: Xe, color: Xe === true ? M.value : null, textColor: Xe === true ? C.value : null, tabindex: i.value, disable: Z(Ee + 1), ...o("month#" + Ee, { onClick: () => {
        Oe(Ee + 1);
      } }) })]);
    });
    return e.yearsInMonthView === true && ce.unshift(d("div", { class: "row no-wrap full-width" }, [Be({ label: b.value.year, type: "Years", key: b.value.year, dir: D.value, goTo: _e, boundaries: E.value.year, cls: " col" })])), d("div", { key: "months-view", class: "q-date__view q-date__months flex flex-center" }, ce);
  }, Years() {
    const z = P.value, Z = z + Nn, ce = [], Te = (Ee) => ue.value !== null && ue.value.year > Ee || S.value !== null && S.value.year < Ee;
    for (let Ee = z; Ee <= Z; Ee++) {
      const Xe = b.value.year === Ee;
      ce.push(d("div", { class: "q-date__years-item flex flex-center" }, [d(Ze, { key: "yr" + Ee, class: y.value.year === Ee ? "q-date__today" : null, flat: !Xe, label: Ee, dense: true, unelevated: Xe, color: Xe === true ? M.value : null, textColor: Xe === true ? C.value : null, tabindex: i.value, disable: Te(Ee), ...o("yr#" + Ee, { onClick: () => {
        Ce(Ee);
      } }) })]));
    }
    return d("div", { class: "q-date__view q-date__years flex flex-center" }, [d("div", { class: "col-auto" }, [d(Ze, { round: true, dense: true, flat: true, icon: R.value[0], ariaLabel: a.lang.date.prevRangeYears(Nn), tabindex: i.value, disable: Te(z), ...o("y-", { onClick: () => {
      P.value -= Nn;
    } }) })]), d("div", { class: "q-date__years-content col self-stretch row items-center" }, ce), d("div", { class: "col-auto" }, [d(Ze, { round: true, dense: true, flat: true, icon: R.value[1], ariaLabel: a.lang.date.nextRangeYears(Nn), tabindex: i.value, disable: Te(Z), ...o("y+", { onClick: () => {
      P.value += Nn;
    } }) })])]);
  } };
  function yt(z) {
    const Z = { ...b.value, day: z };
    if (e.range === false) {
      Ae(Z, X.value);
      return;
    }
    if (I.value === null) {
      const ce = de.value.find((Ee) => Ee.fill !== true && Ee.i === z);
      if (e.noUnset !== true && ce.range !== void 0) {
        se({ target: Z, from: ce.range.from, to: ce.range.to });
        return;
      }
      if (ce.selected === true) {
        se(Z);
        return;
      }
      const Te = Un(Z);
      I.value = { init: Z, initHash: Te, final: Z, finalHash: Te }, n("rangeStart", Ye(Z));
    } else {
      const ce = I.value.initHash, Te = Un(Z), Ee = ce <= Te ? { from: I.value.init, to: Z } : { from: Z, to: I.value.init };
      I.value = null, In(ce === Te ? Z : { target: Z, ...Ee }), n("rangeEnd", { from: Ye(Ee.from), to: Ye(Ee.to) });
    }
  }
  function ht(z) {
    if (I.value !== null) {
      const Z = { ...b.value, day: z };
      Object.assign(I.value, { final: Z, finalHash: Un(Z) });
    }
  }
  return Object.assign(l, { setToday: oe, setView: we, offsetCalendar: ke, setCalendarTo: qe, setEditingRange: Me }), () => {
    const z = [d("div", { class: "q-date__content col relative-position" }, [d(Ft, { name: "q-transition--fade" }, Ue[x.value])])], Z = Pe(t.default);
    return Z !== void 0 && z.push(d("div", { class: "q-date__actions" }, Z)), e.name !== void 0 && e.disable !== true && h(z, "push"), d("div", { class: q.value, ...ae.value }, [Fe(), d("div", { ref: g, class: "q-date__main col column", tabindex: -1 }, z)]);
  };
} });
function fh(e, t, n) {
  let l;
  function a() {
    l !== void 0 && (yr.remove(l), l = void 0);
  }
  return Ke(() => {
    e.value === true && a();
  }), { removeFromHistory: a, addToHistory() {
    l = { condition: () => n.value === true, handler: t }, yr.add(l);
  } };
}
var za = 0, Ui, Qi, Wa, Ki = false, gd, bd, yd, Ml = null;
function jp(e) {
  Up(e) && je(e);
}
function Up(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop")) return true;
  const t = ly(e), n = e.shiftKey && !e.deltaX, l = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY), a = n || l ? e.deltaY : e.deltaX;
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (Jy(o, l)) return l ? a < 0 && o.scrollTop === 0 ? true : a > 0 && o.scrollTop + o.clientHeight === o.scrollHeight : a < 0 && o.scrollLeft === 0 ? true : a > 0 && o.scrollLeft + o.clientWidth === o.scrollWidth;
  }
  return true;
}
function pd(e) {
  e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function Qr(e) {
  Ki !== true && (Ki = true, requestAnimationFrame(() => {
    Ki = false;
    const { height: t } = e.target, { clientHeight: n, scrollTop: l } = document.scrollingElement;
    (Wa === void 0 || t !== window.innerHeight) && (Wa = n - t, document.scrollingElement.scrollTop = l), l > Wa && (document.scrollingElement.scrollTop -= Math.ceil((l - Wa) / 8));
  }));
}
function _d(e) {
  const t = document.body, n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: l, overflowX: a } = window.getComputedStyle(t);
    Ui = ii(window), Qi = bl(window), gd = t.style.left, bd = t.style.top, yd = window.location.href, t.style.left = `-${Ui}px`, t.style.top = `-${Qi}px`, a !== "hidden" && (a === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), l !== "hidden" && (l === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = true, ze.is.ios === true && (n === true ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", Qr, dt.passiveCapture), window.visualViewport.addEventListener("scroll", Qr, dt.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", pd, dt.passiveCapture));
  }
  ze.is.desktop === true && ze.is.mac === true && window[`${e}EventListener`]("wheel", jp, dt.notPassive), e === "remove" && (ze.is.ios === true && (n === true ? (window.visualViewport.removeEventListener("resize", Qr, dt.passiveCapture), window.visualViewport.removeEventListener("scroll", Qr, dt.passiveCapture)) : window.removeEventListener("scroll", pd, dt.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = false, t.style.left = gd, t.style.top = bd, window.location.href === yd && window.scrollTo(Ui, Qi), Wa = void 0);
}
function Iu(e) {
  let t = "add";
  if (e === true) {
    if (za++, Ml !== null) {
      clearTimeout(Ml), Ml = null;
      return;
    }
    if (za > 1) return;
  } else {
    if (za === 0 || (za--, za > 0)) return;
    if (t = "remove", ze.is.ios === true && ze.is.nativeMobile === true) {
      Ml !== null && clearTimeout(Ml), Ml = setTimeout(() => {
        _d(t), Ml = null;
      }, 100);
      return;
    }
  }
  _d(t);
}
function vh() {
  let e;
  return { preventBodyScroll(t) {
    t !== e && (e !== void 0 || t === true) && (e = t, Iu(t));
  } };
}
var Kr = 0, Qp = { standard: "fixed-full flex-center", top: "fixed-top justify-center", bottom: "fixed-bottom justify-center", right: "fixed-right items-center", left: "fixed-left items-center" }, wd = { standard: ["scale", "scale"], top: ["slide-down", "slide-up"], bottom: ["slide-up", "slide-down"], right: ["slide-left", "slide-right"], left: ["slide-right", "slide-left"] }, ci = he({ name: "QDialog", inheritAttrs: false, props: { ...Aa, ...Il, transitionShow: String, transitionHide: String, persistent: Boolean, autoClose: Boolean, allowFocusOutside: Boolean, noEscDismiss: Boolean, noBackdropDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, noShake: Boolean, seamless: Boolean, maximized: Boolean, fullWidth: Boolean, fullHeight: Boolean, square: Boolean, backdropFilter: String, position: { type: String, default: "standard", validator: (e) => ["standard", "top", "bottom", "left", "right"].includes(e) } }, emits: [...Ra, "shake", "click", "escapeKey"], setup(e, { slots: t, emit: n, attrs: l }) {
  const a = Se(), r = K(null), o = K(false), i = K(false);
  let u = null, c = null, s, f;
  const m = v(() => e.persistent !== true && e.noRouteDismiss !== true && e.seamless !== true), { preventBodyScroll: h } = vh(), { registerTimeout: g } = Zn(), { registerTick: _, removeTick: w } = ya(), { transitionProps: k, transitionStyle: p } = oi(e, () => wd[e.position][0], () => wd[e.position][1]), y = v(() => p.value + (e.backdropFilter !== void 0 ? `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}` : "")), { showPortal: b, hidePortal: x, portalIsAccessible: $, renderPortal: F } = qs(a, r, fe, "dialog"), { hide: D } = $a({ showing: o, hideOnRouteChange: m, handleShow: H, handleHide: Y, processOnMount: true }), { addToHistory: B, removeFromHistory: P } = fh(o, D, m), I = v(() => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === true ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${Qp[e.position]}` + (i.value === true ? " q-dialog__inner--animating" : "") + (e.fullWidth === true ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === true ? " q-dialog__inner--fullheight" : "") + (e.square === true ? " q-dialog__inner--square" : "")), q = v(() => o.value === true && e.seamless !== true), M = v(() => e.autoClose === true ? { onClick: T } : {}), C = v(() => [`q-dialog fullscreen no-pointer-events q-dialog--${q.value === true ? "modal" : "seamless"}`, l.class]);
  be(() => e.maximized, (R) => {
    o.value === true && W(R);
  }), be(q, (R) => {
    h(R), R === true ? (Lm(G), $m(U)) : (Fu(G), Mo(U));
  });
  function H(R) {
    var _a2;
    B(), c = e.noRefocus === false && document.activeElement !== null ? document.activeElement : null, W(e.maximized), b(), i.value = true, e.noFocus !== true ? ((_a2 = document.activeElement) == null ? void 0 : _a2.blur(), _(L)) : w(), g(() => {
      if (a.proxy.$q.platform.is.ios === true) {
        if (e.seamless !== true && document.activeElement) {
          const { top: A, bottom: te } = document.activeElement.getBoundingClientRect(), { innerHeight: V } = window, j = window.visualViewport !== void 0 ? window.visualViewport.height : V;
          A > 0 && te > j / 2 && (document.scrollingElement.scrollTop = Math.min(document.scrollingElement.scrollHeight - j, te >= V ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + te - j / 2))), document.activeElement.scrollIntoView();
        }
        f = true, r.value.click(), f = false;
      }
      b(true), i.value = false, n("show", R);
    }, e.transitionDuration);
  }
  function Y(R) {
    w(), P(), ye(true), i.value = true, x(), c !== null && ((((R == null ? void 0 : R.type.indexOf("key")) === 0 ? c.closest('[tabindex]:not([tabindex^="-"])') : void 0) || c).focus(), c = null), g(() => {
      x(true), i.value = false, n("hide", R);
    }, e.transitionDuration);
  }
  function L(R) {
    Pa(() => {
      let A = r.value;
      if (A !== null) {
        if (R !== void 0) {
          const te = A.querySelector(R);
          if (te !== null) {
            te.focus({ preventScroll: true });
            return;
          }
        }
        A.contains(document.activeElement) !== true && (A = A.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || A.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || A.querySelector("[autofocus], [data-autofocus]") || A, A.focus({ preventScroll: true }));
      }
    });
  }
  function O(R) {
    R && typeof R.focus == "function" ? R.focus({ preventScroll: true }) : L(), n("shake");
    const A = r.value;
    A !== null && (A.classList.remove("q-animate--scale"), A.classList.add("q-animate--scale"), u !== null && clearTimeout(u), u = setTimeout(() => {
      u = null, r.value !== null && (A.classList.remove("q-animate--scale"), L());
    }, 170));
  }
  function U() {
    e.seamless !== true && (e.persistent === true || e.noEscDismiss === true ? e.maximized !== true && e.noShake !== true && O() : (n("escapeKey"), D()));
  }
  function ye(R) {
    u !== null && (clearTimeout(u), u = null), (R === true || o.value === true) && (W(false), e.seamless !== true && (h(false), Fu(G), Mo(U))), R !== true && (c = null);
  }
  function W(R) {
    R === true ? s !== true && (Kr < 1 && document.body.classList.add("q-body--dialog"), Kr++, s = true) : s === true && (Kr < 2 && document.body.classList.remove("q-body--dialog"), Kr--, s = false);
  }
  function T(R) {
    f !== true && (D(R), n("click", R));
  }
  function ee(R) {
    e.persistent !== true && e.noBackdropDismiss !== true ? D(R) : e.noShake !== true && O();
  }
  function G(R) {
    e.allowFocusOutside !== true && $.value === true && pm(r.value, R.target) !== true && L('[tabindex]:not([tabindex="-1"])');
  }
  Object.assign(a.proxy, { focus: L, shake: O, __updateRefocusTarget(R) {
    c = R || null;
  } }), Ke(ye);
  function fe() {
    return d("div", { role: "dialog", "aria-modal": q.value === true ? "true" : "false", ...l, class: C.value }, [d(Ft, { name: "q-transition--fade", appear: true }, () => q.value === true ? d("div", { class: "q-dialog__backdrop fixed-full", style: y.value, "aria-hidden": "true", tabindex: -1, onClick: ee }) : null), d(Ft, k.value, () => o.value === true ? d("div", { ref: r, class: I.value, style: p.value, tabindex: -1, ...M.value }, Pe(t.default)) : null)]);
  }
  return F;
} }), Sd = 150, xd = he({ name: "QDrawer", inheritAttrs: false, props: { ...Aa, ...nt, side: { type: String, default: "left", validator: (e) => ["left", "right"].includes(e) }, width: { type: Number, default: 300 }, mini: Boolean, miniToOverlay: Boolean, miniWidth: { type: Number, default: 57 }, noMiniAnimation: Boolean, breakpoint: { type: Number, default: 1023 }, showIfAbove: Boolean, behavior: { type: String, validator: (e) => ["default", "desktop", "mobile"].includes(e), default: "default" }, bordered: Boolean, elevated: Boolean, overlay: Boolean, persistent: Boolean, noSwipeOpen: Boolean, noSwipeClose: Boolean, noSwipeBackdrop: Boolean }, emits: [...Ra, "onLayout", "miniState"], setup(e, { slots: t, emit: n, attrs: l }) {
  const a = Se(), { proxy: { $q: r } } = a, o = lt(e, r), { preventBodyScroll: i } = vh(), { registerTimeout: u, removeTimeout: c } = Zn(), s = Tt(Gl, ot);
  if (s === ot) return console.error("QDrawer needs to be child of QLayout"), ot;
  let f, m = null, h;
  const g = K(e.behavior === "mobile" || e.behavior !== "desktop" && s.totalWidth.value <= e.breakpoint), _ = v(() => e.mini === true && g.value !== true), w = v(() => _.value === true ? e.miniWidth : e.width), k = K(e.showIfAbove === true && g.value === false ? true : e.modelValue === true), p = v(() => e.persistent !== true && (g.value === true || ye.value === true));
  function y(Q, oe) {
    if (F(), Q !== false && s.animate(), E(0), g.value === true) {
      const we = s.instances[Y.value];
      (we == null ? void 0 : we.belowBreakpoint) === true && we.hide(false), N(1), s.isContainer.value !== true && i(true);
    } else N(0), Q !== false && ne(false);
    u(() => {
      Q !== false && ne(true), oe !== true && n("show", Q);
    }, Sd);
  }
  function b(Q, oe) {
    D(), Q !== false && s.animate(), N(0), E(I.value * w.value), ge(), oe !== true ? u(() => {
      n("hide", Q);
    }, Sd) : c();
  }
  const { show: x, hide: $ } = $a({ showing: k, hideOnRouteChange: p, handleShow: y, handleHide: b }), { addToHistory: F, removeFromHistory: D } = fh(k, $, p), B = { belowBreakpoint: g, hide: $ }, P = v(() => e.side === "right"), I = v(() => (r.lang.rtl === true ? -1 : 1) * (P.value === true ? 1 : -1)), q = K(0), M = K(false), C = K(false), H = K(w.value * I.value), Y = v(() => P.value === true ? "left" : "right"), L = v(() => k.value === true && g.value === false && e.overlay === false ? e.miniToOverlay === true ? e.miniWidth : w.value : 0), O = v(() => e.overlay === true || e.miniToOverlay === true || s.view.value.indexOf(P.value ? "R" : "L") !== -1 || r.platform.is.ios === true && s.isContainer.value === true), U = v(() => e.overlay === false && k.value === true && g.value === false), ye = v(() => e.overlay === true && k.value === true && g.value === false), W = v(() => "fullscreen q-drawer__backdrop" + (k.value === false && M.value === false ? " hidden" : "")), T = v(() => ({ backgroundColor: `rgba(0,0,0,${q.value * 0.4})` })), ee = v(() => P.value === true ? s.rows.value.top[2] === "r" : s.rows.value.top[0] === "l"), G = v(() => P.value === true ? s.rows.value.bottom[2] === "r" : s.rows.value.bottom[0] === "l"), fe = v(() => {
    const Q = {};
    return s.header.space === true && ee.value === false && (O.value === true ? Q.top = `${s.header.offset}px` : s.header.space === true && (Q.top = `${s.header.size}px`)), s.footer.space === true && G.value === false && (O.value === true ? Q.bottom = `${s.footer.offset}px` : s.footer.space === true && (Q.bottom = `${s.footer.size}px`)), Q;
  }), R = v(() => {
    const Q = { width: `${w.value}px`, transform: `translateX(${H.value}px)` };
    return g.value === true ? Q : Object.assign(Q, fe.value);
  }), A = v(() => "q-drawer__content fit " + (s.isContainer.value !== true ? "scroll" : "overflow-auto")), te = v(() => `q-drawer q-drawer--${e.side}` + (C.value === true ? " q-drawer--mini-animate" : "") + (e.bordered === true ? " q-drawer--bordered" : "") + (o.value === true ? " q-drawer--dark q-dark" : "") + (M.value === true ? " no-transition" : k.value === true ? "" : " q-layout--prevent-focus") + (g.value === true ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${_.value === true ? "mini" : "standard"}` + (O.value === true || U.value !== true ? " fixed" : "") + (e.overlay === true || e.miniToOverlay === true ? " q-drawer--on-top" : "") + (ee.value === true ? " q-drawer--top-padding" : ""))), V = v(() => {
    const Q = r.lang.rtl === true ? e.side : Y.value;
    return [[gn, X, void 0, { [Q]: true, mouse: true }]];
  }), j = v(() => {
    const Q = r.lang.rtl === true ? Y.value : e.side;
    return [[gn, ve, void 0, { [Q]: true, mouse: true }]];
  }), ue = v(() => {
    const Q = r.lang.rtl === true ? Y.value : e.side;
    return [[gn, ve, void 0, { [Q]: true, mouse: true, mouseAllDir: true }]];
  });
  function S() {
    de(g, e.behavior === "mobile" || e.behavior !== "desktop" && s.totalWidth.value <= e.breakpoint);
  }
  be(g, (Q) => {
    Q === true ? (f = k.value, k.value === true && $(false)) : e.overlay === false && e.behavior !== "mobile" && f !== false && (k.value === true ? (E(0), N(0), ge()) : x(false));
  }), be(() => e.side, (Q, oe) => {
    s.instances[oe] === B && (s.instances[oe] = void 0, s[oe].space = false, s[oe].offset = 0), s.instances[Q] = B, s[Q].size = w.value, s[Q].space = U.value, s[Q].offset = L.value;
  }), be(s.totalWidth, () => {
    (s.isContainer.value === true || document.qScrollPrevented !== true) && S();
  }), be(() => e.behavior + e.breakpoint, S), be(s.isContainer, (Q) => {
    k.value === true && i(Q !== true), Q === true && S();
  }), be(s.scrollbarWidth, () => {
    E(k.value === true ? 0 : void 0);
  }), be(L, (Q) => {
    me("offset", Q);
  }), be(U, (Q) => {
    n("onLayout", Q), me("space", Q);
  }), be(P, () => {
    E();
  }), be(w, (Q) => {
    E(), ae(e.miniToOverlay, Q);
  }), be(() => e.miniToOverlay, (Q) => {
    ae(Q, w.value);
  }), be(() => r.lang.rtl, () => {
    E();
  }), be(() => e.mini, () => {
    e.noMiniAnimation || e.modelValue === true && (le(), s.animate());
  }), be(_, (Q) => {
    n("miniState", Q);
  });
  function E(Q) {
    Q === void 0 ? We(() => {
      Q = k.value === true ? 0 : w.value, E(I.value * Q);
    }) : (s.isContainer.value === true && P.value === true && (g.value === true || Math.abs(Q) === w.value) && (Q += I.value * s.scrollbarWidth.value), H.value = Q);
  }
  function N(Q) {
    q.value = Q;
  }
  function ne(Q) {
    const oe = Q === true ? "remove" : s.isContainer.value !== true ? "add" : "";
    oe !== "" && document.body.classList[oe]("q-body--drawer-toggle");
  }
  function le() {
    m !== null && clearTimeout(m), a.proxy && a.proxy.$el && a.proxy.$el.classList.add("q-drawer--mini-animate"), C.value = true, m = setTimeout(() => {
      var _a2, _b2;
      m = null, C.value = false, (_b2 = (_a2 = a == null ? void 0 : a.proxy) == null ? void 0 : _a2.$el) == null ? void 0 : _b2.classList.remove("q-drawer--mini-animate");
    }, 150);
  }
  function X(Q) {
    if (k.value !== false) return;
    const oe = w.value, we = ct(Q.distance.x, 0, oe);
    if (Q.isFinal === true) {
      we >= Math.min(75, oe) === true ? x() : (s.animate(), N(0), E(I.value * oe)), M.value = false;
      return;
    }
    E((r.lang.rtl === true ? P.value !== true : P.value) ? Math.max(oe - we, 0) : Math.min(0, we - oe)), N(ct(we / oe, 0, 1)), Q.isFirst === true && (M.value = true);
  }
  function ve(Q) {
    if (k.value !== true) return;
    const oe = w.value, we = Q.direction === e.side, ke = (r.lang.rtl === true ? we !== true : we) ? ct(Q.distance.x, 0, oe) : 0;
    if (Q.isFinal === true) {
      Math.abs(ke) < Math.min(75, oe) === true ? (s.animate(), N(1), E(0)) : $(), M.value = false;
      return;
    }
    E(I.value * ke), N(ct(1 - ke / oe, 0, 1)), Q.isFirst === true && (M.value = true);
  }
  function ge() {
    i(false), ne(true);
  }
  function me(Q, oe) {
    s.update(e.side, Q, oe);
  }
  function de(Q, oe) {
    Q.value !== oe && (Q.value = oe);
  }
  function ae(Q, oe) {
    me("size", Q === true ? e.miniWidth : oe);
  }
  return s.instances[e.side] = B, ae(e.miniToOverlay, w.value), me("space", U.value), me("offset", L.value), e.showIfAbove === true && e.modelValue !== true && k.value === true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", true), ft(() => {
    n("onLayout", U.value), n("miniState", _.value), f = e.showIfAbove === true;
    const Q = () => {
      (k.value === true ? y : b)(false, true);
    };
    if (s.totalWidth.value !== 0) {
      We(Q);
      return;
    }
    h = be(s.totalWidth, () => {
      h(), h = void 0, k.value === false && e.showIfAbove === true && g.value === false ? x(false) : Q();
    });
  }), Ke(() => {
    h == null ? void 0 : h(), m !== null && (clearTimeout(m), m = null), k.value === true && ge(), s.instances[e.side] === B && (s.instances[e.side] = void 0, me("size", 0), me("offset", 0), me("space", false));
  }), () => {
    const Q = [];
    g.value === true && (e.noSwipeOpen === false && Q.push(sn(d("div", { key: "open", class: `q-drawer__opener fixed-${e.side}`, "aria-hidden": "true" }), V.value)), Q.push(pn("div", { ref: "backdrop", class: W.value, style: T.value, "aria-hidden": "true", onClick: $ }, void 0, "backdrop", e.noSwipeBackdrop !== true && k.value === true, () => ue.value)));
    const oe = _.value === true && t.mini !== void 0, we = [d("div", { ...l, key: "" + oe, class: [A.value, l.class] }, oe === true ? t.mini() : Pe(t.default))];
    return e.elevated === true && k.value === true && we.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), Q.push(pn("aside", { ref: "content", class: te.value, style: R.value }, we, "contentclose", e.noSwipeClose !== true && g.value === true, () => j.value)), d("div", { class: "q-drawer-container" }, Q);
  };
} });
function mh(e, t) {
  if (t && e === t) return null;
  const n = e.nodeName.toLowerCase();
  if (["div", "li", "ul", "ol", "blockquote"].includes(n) === true) return e;
  const l = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle, a = l.display;
  return a === "block" || a === "table" ? e : mh(e.parentNode);
}
function Wi(e, t, n) {
  return !e || e === document.body ? false : n === true && e === t || (t === document ? document.body : t).contains(e.parentNode);
}
function hh(e, t, n) {
  if (n || (n = document.createRange(), n.selectNode(e), n.setStart(e, 0)), t.count === 0) n.setEnd(e, t.count);
  else if (t.count > 0) if (e.nodeType === Node.TEXT_NODE) e.textContent.length < t.count ? t.count -= e.textContent.length : (n.setEnd(e, t.count), t.count = 0);
  else for (let l = 0; t.count !== 0 && l < e.childNodes.length; l++) n = hh(e.childNodes[l], t, n);
  return n;
}
var Kp = /^https?:\/\//, Wp = class {
  constructor(e, t) {
    this.el = e, this.eVm = t, this._range = null;
  }
  get selection() {
    if (this.el) {
      const e = document.getSelection();
      if (Wi(e.anchorNode, this.el, true) && Wi(e.focusNode, this.el, true)) return e;
    }
    return null;
  }
  get hasSelection() {
    return this.selection !== null ? this.selection.toString().length !== 0 : false;
  }
  get range() {
    const e = this.selection;
    return (e == null ? void 0 : e.rangeCount) ? e.getRangeAt(0) : this._range;
  }
  get parent() {
    const e = this.range;
    if (e !== null) {
      const t = e.startContainer;
      return t.nodeType === document.ELEMENT_NODE ? t : t.parentNode;
    }
    return null;
  }
  get blockParent() {
    const e = this.parent;
    return e !== null ? mh(e, this.el) : null;
  }
  save(e = this.range) {
    e !== null && (this._range = e);
  }
  restore(e = this._range) {
    const t = document.createRange(), n = document.getSelection();
    e !== null ? (t.setStart(e.startContainer, e.startOffset), t.setEnd(e.endContainer, e.endOffset), n.removeAllRanges(), n.addRange(t)) : (n.selectAllChildren(this.el), n.collapseToEnd());
  }
  savePosition() {
    let e = -1, t;
    const n = document.getSelection(), l = this.el.parentNode;
    if (n.focusNode && Wi(n.focusNode, l)) for (t = n.focusNode, e = n.focusOffset; t && t !== l; ) t !== this.el && t.previousSibling ? (t = t.previousSibling, e += t.textContent.length) : t = t.parentNode;
    this.savedPos = e;
  }
  restorePosition(e = 0) {
    if (this.savedPos > 0 && this.savedPos < e) {
      const t = window.getSelection(), n = hh(this.el, { count: this.savedPos });
      n && (n.collapse(false), t.removeAllRanges(), t.addRange(n));
    }
  }
  hasParent(e, t) {
    const n = t ? this.parent : this.blockParent;
    return n !== null ? n.nodeName.toLowerCase() === e.toLowerCase() : false;
  }
  hasParents(e, t, n = this.parent) {
    return n === null ? false : e.includes(n.nodeName.toLowerCase()) === true ? true : t === true ? this.hasParents(e, t, n.parentNode) : false;
  }
  is(e, t) {
    if (this.selection === null) return false;
    switch (e) {
      case "formatBlock":
        return t === "DIV" && this.parent === this.el || this.hasParent(t, t === "PRE");
      case "link":
        return this.hasParent("A", true);
      case "fontSize":
        return document.queryCommandValue(e) === t;
      case "fontName":
        const n = document.queryCommandValue(e);
        return n === `"${t}"` || n === t;
      case "fullscreen":
        return this.eVm.inFullscreen.value;
      case "viewsource":
        return this.eVm.isViewingSource.value;
      case void 0:
        return false;
      default:
        const l = document.queryCommandState(e);
        return t !== void 0 ? l === t : l;
    }
  }
  getParentAttribute(e) {
    return this.parent !== null ? this.parent.getAttribute(e) : null;
  }
  can(e) {
    if (e === "outdent") return this.hasParents(["blockquote", "li"], true);
    if (e === "indent") return this.hasParents(["li"], true);
    if (e === "link") return this.selection !== null || this.is("link");
  }
  apply(e, t, n = St) {
    if (e === "formatBlock") ["BLOCKQUOTE", "H1", "H2", "H3", "H4", "H5", "H6"].includes(t) && this.is(e, t) && (e = "outdent", t = null), t === "PRE" && this.is(e, "PRE") && (t = "P");
    else if (e === "print") {
      n();
      const l = window.open();
      l.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `), l.print(), l.close();
      return;
    } else if (e === "link") {
      const l = this.getParentAttribute("href");
      if (l === null) {
        const a = this.selectWord(this.selection), r = a ? a.toString() : "";
        if (!r.length && (!this.range || !this.range.cloneContents().querySelector("img"))) return;
        this.eVm.editLinkUrl.value = Kp.test(r) ? r : "https://", document.execCommand("createLink", false, this.eVm.editLinkUrl.value), this.save(a.getRangeAt(0));
      } else this.eVm.editLinkUrl.value = l, this.range.selectNodeContents(this.parent), this.save();
      return;
    } else if (e === "fullscreen") {
      this.eVm.toggleFullscreen(), n();
      return;
    } else if (e === "viewsource") {
      this.eVm.isViewingSource.value = this.eVm.isViewingSource.value === false, this.eVm.setContent(this.eVm.props.modelValue), n();
      return;
    }
    document.execCommand(e, false, t), n();
  }
  selectWord(e) {
    if (e === null || e.isCollapsed !== true || e.modify === void 0) return e;
    const t = document.createRange();
    t.setStart(e.anchorNode, e.anchorOffset), t.setEnd(e.focusNode, e.focusOffset);
    const n = t.collapsed ? ["backward", "forward"] : ["forward", "backward"];
    t.detach();
    const l = e.focusNode, a = e.focusOffset;
    return e.collapse(e.anchorNode, e.anchorOffset), e.modify("move", n[0], "character"), e.modify("move", n[1], "word"), e.extend(l, a), e.modify("extend", n[1], "character"), e.modify("extend", n[0], "word"), e;
  }
}, Yp = he({ name: "QTooltip", inheritAttrs: false, props: { ...Cm, ...Aa, ...Il, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null }, transitionShow: { ...Il.transitionShow, default: "jump-down" }, transitionHide: { ...Il.transitionHide, default: "jump-up" }, anchor: { type: String, default: "bottom middle", validator: $o }, self: { type: String, default: "top middle", validator: $o }, offset: { type: Array, default: () => [14, 14], validator: Fm }, scrollTarget: Xl, delay: { type: Number, default: 0 }, hideDelay: { type: Number, default: 0 }, persistent: Boolean }, emits: [...Ra], setup(e, { slots: t, emit: n, attrs: l }) {
  let a, r;
  const o = Se(), { proxy: { $q: i } } = o, u = K(null), c = K(false), s = v(() => Po(e.anchor, i.lang.rtl)), f = v(() => Po(e.self, i.lang.rtl)), m = v(() => e.persistent !== true), { registerTick: h, removeTick: g } = ya(), { registerTimeout: _ } = Zn(), { transitionProps: w, transitionStyle: k } = oi(e), { localScrollTarget: p, changeScrollEvent: y, unconfigureScrollTarget: b } = qm(e, ye), { anchorEl: x, canShow: $, anchorEvents: F } = Cs({ showing: c, configureAnchorEl: U }), { show: D, hide: B } = $a({ showing: c, canShow: $, handleShow: M, handleHide: C, hideOnRouteChange: m, processOnMount: true });
  Object.assign(F, { delayShow: L, delayHide: O });
  const { showPortal: P, hidePortal: I, renderPortal: q } = qs(o, u, T, "tooltip");
  if (i.platform.is.mobile === true) {
    const ee = { anchorEl: x, innerRef: u, onClickOutside(fe) {
      return B(fe), fe.target.classList.contains("q-dialog__backdrop") && je(fe), true;
    } }, G = v(() => e.modelValue === null && e.persistent !== true && c.value === true);
    be(G, (fe) => {
      (fe === true ? Bm : Ro)(ee);
    }), Ke(() => {
      Ro(ee);
    });
  }
  function M(ee) {
    P(), h(() => {
      r = new MutationObserver(() => Y()), r.observe(u.value, { attributes: false, childList: true, characterData: true, subtree: true }), Y(), ye();
    }), a === void 0 && (a = be(() => i.screen.width + "|" + i.screen.height + "|" + e.self + "|" + e.anchor + "|" + i.lang.rtl, Y)), _(() => {
      P(true), n("show", ee);
    }, e.transitionDuration);
  }
  function C(ee) {
    g(), I(), H(), _(() => {
      I(true), n("hide", ee);
    }, e.transitionDuration);
  }
  function H() {
    r !== void 0 && (r.disconnect(), r = void 0), a !== void 0 && (a(), a = void 0), b(), Wt(F, "tooltipTemp");
  }
  function Y() {
    Ts({ targetEl: u.value, offset: e.offset, anchorEl: x.value, anchorOrigin: s.value, selfOrigin: f.value, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function L(ee) {
    if (i.platform.is.mobile === true) {
      Mn(), document.body.classList.add("non-selectable");
      const G = x.value, fe = ["touchmove", "touchcancel", "touchend", "click"].map((R) => [G, R, "delayHide", "passiveCapture"]);
      kt(F, "tooltipTemp", fe);
    }
    _(() => {
      D(ee);
    }, e.delay);
  }
  function O(ee) {
    i.platform.is.mobile === true && (Wt(F, "tooltipTemp"), Mn(), setTimeout(() => {
      document.body.classList.remove("non-selectable");
    }, 10)), _(() => {
      B(ee);
    }, e.hideDelay);
  }
  function U() {
    if (e.noParentEvent === true || x.value === null) return;
    const ee = i.platform.is.mobile === true ? [[x.value, "touchstart", "delayShow", "passive"]] : [[x.value, "mouseenter", "delayShow", "passive"], [x.value, "mouseleave", "delayHide", "passive"]];
    kt(F, "anchor", ee);
  }
  function ye() {
    if (x.value !== null || e.scrollTarget !== void 0) {
      p.value = zn(x.value, e.scrollTarget);
      const ee = e.noParentEvent === true ? Y : B;
      y(p.value, ee);
    }
  }
  function W() {
    return c.value === true ? d("div", { ...l, ref: u, class: ["q-tooltip q-tooltip--style q-position-engine no-pointer-events", l.class], style: [l.style, k.value], role: "tooltip" }, Pe(t.default)) : null;
  }
  function T() {
    return d(Ft, w.value, W);
  }
  return Ke(H), Object.assign(o.proxy, { updatePosition: Y }), q;
} }), Ca = he({ name: "QItem", props: { ...nt, ...Ar, tag: { type: String, default: "div" }, active: { type: Boolean, default: null }, clickable: Boolean, dense: Boolean, insetLevel: Number, tabindex: [String, Number], focused: Boolean, manualFocus: Boolean }, emits: ["click", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = lt(e, l), { hasLink: r, linkAttrs: o, linkClass: i, linkTag: u, navigateOnClick: c } = ai(), s = K(null), f = K(null), m = v(() => e.clickable === true || r.value === true || e.tag === "label"), h = v(() => e.disable !== true && m.value === true), g = v(() => "q-item q-item-type row no-wrap" + (e.dense === true ? " q-item--dense" : "") + (a.value === true ? " q-item--dark" : "") + (r.value === true && e.active === null ? i.value : e.active === true ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === true ? " disabled" : "") + (h.value === true ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === true ? " q-manual-focusable--focused" : "") : "")), _ = v(() => e.insetLevel === void 0 ? null : { ["padding" + (l.lang.rtl === true ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px" });
  function w(y) {
    h.value === true && (f.value !== null && y.qAvoidFocus !== true && (y.qKeyEvent !== true && document.activeElement === s.value ? f.value.focus() : document.activeElement === f.value && s.value.focus()), c(y));
  }
  function k(y) {
    if (h.value === true && yn(y, [13, 32]) === true) {
      je(y), y.qKeyEvent = true;
      const b = new MouseEvent("click", y);
      b.qKeyEvent = true, s.value.dispatchEvent(b);
    }
    n("keyup", y);
  }
  function p() {
    const y = Er(t.default, []);
    return h.value === true && y.unshift(d("div", { class: "q-focus-helper", tabindex: -1, ref: f })), y;
  }
  return () => {
    const y = { ref: s, class: g.value, style: _.value, role: "listitem", onClick: w, onKeyup: k };
    return h.value === true ? (y.tabindex = e.tabindex || "0", Object.assign(y, o.value)) : m.value === true && (y["aria-disabled"] = "true"), d(u.value, y, p());
  };
} }), mn = he({ name: "QItemSection", props: { avatar: Boolean, thumbnail: Boolean, side: Boolean, top: Boolean, noWrap: Boolean }, setup(e, { slots: t }) {
  const n = v(() => `q-item__section column q-item__section--${e.avatar === true || e.side === true || e.thumbnail === true ? "side" : "main"}` + (e.top === true ? " q-item__section--top justify-start" : " justify-center") + (e.avatar === true ? " q-item__section--avatar" : "") + (e.thumbnail === true ? " q-item__section--thumbnail" : "") + (e.noWrap === true ? " q-item__section--nowrap" : ""));
  return () => d("div", { class: n.value }, Pe(t.default));
} });
function gh(e, t, n) {
  t.handler ? t.handler(e, n, n.caret) : n.runCmd(t.cmd, t.param);
}
function Is(e) {
  return d("div", { class: "q-editor__toolbar-group" }, e);
}
function bh(e, t, n, l = false) {
  const a = l || (t.type === "toggle" ? t.toggled ? t.toggled(e) : t.cmd && e.caret.is(t.cmd, t.param) : false), r = [];
  if (t.tip && e.$q.platform.is.desktop) {
    const o = t.key ? d("div", [d("small", `(CTRL + ${String.fromCharCode(t.key)})`)]) : null;
    r.push(d(Yp, { delay: 1e3 }, () => [d("div", { innerHTML: t.tip }), o]));
  }
  return d(Ze, { ...e.buttonProps.value, icon: t.icon !== null ? t.icon : void 0, color: a ? t.toggleColor || e.props.toolbarToggleColor : t.color || e.props.toolbarColor, textColor: a && !e.props.toolbarPush ? null : t.textColor || e.props.toolbarTextColor, label: t.label, disable: t.disable ? typeof t.disable == "function" ? t.disable(e) : true : false, size: "sm", onClick(o) {
    n == null ? void 0 : n(), gh(o, t, e);
  } }, () => r);
}
function Gp(e, t) {
  const n = t.list === "only-icons";
  let l = t.label, a = t.icon !== null ? t.icon : void 0, r, o;
  function i() {
    c.component.proxy.hide();
  }
  if (n) o = t.options.map((s) => {
    const f = s.type === void 0 ? e.caret.is(s.cmd, s.param) : false;
    return f && (l = s.tip, a = s.icon !== null ? s.icon : void 0), bh(e, s, i, f);
  }), r = e.toolbarBackgroundClass.value, o = [Is(o)];
  else {
    const s = e.props.toolbarToggleColor !== void 0 ? `text-${e.props.toolbarToggleColor}` : null, f = e.props.toolbarTextColor !== void 0 ? `text-${e.props.toolbarTextColor}` : null, m = t.list === "no-icons";
    o = t.options.map((h) => {
      const g = h.disable ? h.disable(e) : false, _ = h.type === void 0 ? e.caret.is(h.cmd, h.param) : false;
      _ && (l = h.tip, a = h.icon !== null ? h.icon : void 0);
      const w = h.htmlTip;
      return d(Ca, { active: _, activeClass: s, clickable: true, disable: g, dense: true, onClick(k) {
        var _a2;
        i(), (k == null ? void 0 : k.qAvoidFocus) !== true && ((_a2 = e.contentRef.value) == null ? void 0 : _a2.focus()), e.caret.restore(), gh(k, h, e);
      } }, () => [m === true ? null : d(mn, { class: _ ? s : f, side: true }, () => d(et, { name: h.icon !== null ? h.icon : void 0 })), d(mn, w ? () => d("div", { class: "text-no-wrap", innerHTML: h.htmlTip }) : h.tip ? () => d("div", { class: "text-no-wrap" }, h.tip) : void 0)]);
    }), r = [e.toolbarBackgroundClass.value, f];
  }
  const u = t.highlight && l !== t.label, c = d(cp, { ...e.buttonProps.value, noCaps: true, noWrap: true, color: u ? e.props.toolbarToggleColor : e.props.toolbarColor, textColor: u && !e.props.toolbarPush ? null : e.props.toolbarTextColor, label: t.fixedLabel ? t.label : l, icon: t.fixedIcon ? t.icon !== null ? t.icon : void 0 : a, contentClass: r, onShow: (s) => e.emit("dropdownShow", s), onHide: (s) => e.emit("dropdownHide", s), onBeforeShow: (s) => e.emit("dropdownBeforeShow", s), onBeforeHide: (s) => e.emit("dropdownBeforeHide", s) }, () => o);
  return c;
}
function Xp(e) {
  if (e.caret) return e.buttons.value.filter((t) => !e.isViewingSource.value || t.find((n) => n.cmd === "viewsource")).map((t) => Is(t.map((n) => e.isViewingSource.value && n.cmd !== "viewsource" ? false : n.type === "slot" ? Pe(e.slots[n.slot]) : n.type === "dropdown" ? Gp(e, n) : bh(e, n))));
}
function Zp(e, t, n, l = {}) {
  const a = Object.keys(l);
  if (a.length === 0) return {};
  const r = { default_font: { cmd: "fontName", param: e, icon: n, tip: t } };
  return a.forEach((o) => {
    const i = l[o];
    r[o] = { cmd: "fontName", param: i, icon: n, tip: i, htmlTip: `<font face="${i}">${i}</font>` };
  }), r;
}
function Jp(e) {
  if (e.caret) {
    const t = e.props.toolbarColor || e.props.toolbarTextColor;
    let n = e.editLinkUrl.value;
    const l = () => {
      e.caret.restore(), n !== e.editLinkUrl.value && document.execCommand("createLink", false, n === "" ? " " : n), e.editLinkUrl.value = null;
    };
    return [d("div", { class: `q-mx-xs text-${t}` }, `${e.$q.lang.editor.url}: `), d("input", { key: "qedt_btm_input", class: "col q-editor__link-input", value: n, onInput: (a) => {
      wt(a), n = a.target.value;
    }, onKeydown: (a) => {
      if (Yl(a) !== true) switch (a.keyCode) {
        case 13:
          return Vt(a), l();
        case 27:
          Vt(a), e.caret.restore(), (!e.editLinkUrl.value || e.editLinkUrl.value === "https://") && document.execCommand("unlink"), e.editLinkUrl.value = null;
          break;
      }
    } }), Is([d(Ze, { key: "qedt_btm_rem", tabindex: -1, ...e.buttonProps.value, label: e.$q.lang.label.remove, noCaps: true, onClick: () => {
      e.caret.restore(), document.execCommand("unlink"), e.editLinkUrl.value = null;
    } }), d(Ze, { key: "qedt_btm_upd", ...e.buttonProps.value, label: e.$q.lang.label.update, noCaps: true, onClick: l })])];
  }
}
var Cd = /^on[A-Z]/;
function yh() {
  const { attrs: e, vnode: t } = Se(), n = { listeners: K({}), attributes: K({}) };
  function l() {
    const a = {}, r = {};
    for (const o in e) o !== "class" && o !== "style" && Cd.test(o) === false && (a[o] = e[o]);
    for (const o in t.props) Cd.test(o) === true && (r[o] = t.props[o]);
    n.attributes.value = a, n.listeners.value = r;
  }
  return Ma(l), l(), n;
}
var e1 = Object.prototype.toString, Yi = Object.prototype.hasOwnProperty, t1 = new Set(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp"].map((e) => "[object " + e + "]"));
function kd(e) {
  if (e !== Object(e) || t1.has(e1.call(e)) === true || e.constructor && Yi.call(e, "constructor") === false && Yi.call(e.constructor.prototype, "isPrototypeOf") === false) return false;
  let t;
  for (t in e) ;
  return t === void 0 || Yi.call(e, t);
}
function ph() {
  let e, t, n, l, a, r, o = arguments[0] || {}, i = 1, u = false;
  const c = arguments.length;
  for (typeof o == "boolean" && (u = o, o = arguments[1] || {}, i = 2), Object(o) !== o && typeof o != "function" && (o = {}), c === i && (o = this, i--); i < c; i++) if ((e = arguments[i]) !== null) for (t in e) n = o[t], l = e[t], o !== l && (u === true && l && ((a = Array.isArray(l)) || kd(l) === true) ? (a === true ? r = Array.isArray(n) === true ? n : [] : r = kd(n) === true ? n : {}, o[t] = ph(u, r, l)) : l !== void 0 && (o[t] = l));
  return o;
}
he({ name: "QEditor", props: { ...nt, ...Ls, modelValue: { type: String, required: true }, readonly: Boolean, disable: Boolean, minHeight: { type: String, default: "10rem" }, maxHeight: String, height: String, definitions: Object, fonts: Object, placeholder: String, toolbar: { type: Array, validator: (e) => e.length === 0 || e.every((t) => t.length), default: () => [["left", "center", "right", "justify"], ["bold", "italic", "underline", "strike"], ["undo", "redo"]] }, toolbarColor: String, toolbarBg: String, toolbarTextColor: String, toolbarToggleColor: { type: String, default: "primary" }, toolbarOutline: Boolean, toolbarPush: Boolean, toolbarRounded: Boolean, paragraphTag: { type: String, validator: (e) => ["div", "p"].includes(e), default: "div" }, contentStyle: Object, contentClass: [Object, Array, String], square: Boolean, flat: Boolean, dense: Boolean }, emits: [...Bs, "update:modelValue", "keydown", "click", "focus", "blur", "dropdownShow", "dropdownHide", "dropdownBeforeShow", "dropdownBeforeHide", "linkShow", "linkHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = lt(e, a), { inFullscreen: o, toggleFullscreen: i } = Fs(), u = yh(), c = K(null), s = K(null), f = K(null), m = K(false), h = v(() => !e.readonly && !e.disable);
  let g, _, w = e.modelValue;
  document.execCommand("defaultParagraphSeparator", false, e.paragraphTag), g = window.getComputedStyle(document.body).fontFamily;
  const k = v(() => e.toolbarBg ? ` bg-${e.toolbarBg}` : ""), p = v(() => ({ type: "a", flat: e.toolbarOutline !== true && e.toolbarPush !== true, noWrap: true, outline: e.toolbarOutline, push: e.toolbarPush, rounded: e.toolbarRounded, dense: true, color: e.toolbarColor, disable: !h.value, size: "sm" })), y = v(() => {
    const R = a.lang.editor, A = a.iconSet.editor;
    return { bold: { cmd: "bold", icon: A.bold, tip: R.bold, key: 66 }, italic: { cmd: "italic", icon: A.italic, tip: R.italic, key: 73 }, strike: { cmd: "strikeThrough", icon: A.strikethrough, tip: R.strikethrough, key: 83 }, underline: { cmd: "underline", icon: A.underline, tip: R.underline, key: 85 }, unordered: { cmd: "insertUnorderedList", icon: A.unorderedList, tip: R.unorderedList }, ordered: { cmd: "insertOrderedList", icon: A.orderedList, tip: R.orderedList }, subscript: { cmd: "subscript", icon: A.subscript, tip: R.subscript, htmlTip: "x<subscript>2</subscript>" }, superscript: { cmd: "superscript", icon: A.superscript, tip: R.superscript, htmlTip: "x<superscript>2</superscript>" }, link: { cmd: "link", disable: (te) => te.caret && !te.caret.can("link"), icon: A.hyperlink, tip: R.hyperlink, key: 76 }, fullscreen: { cmd: "fullscreen", icon: A.toggleFullscreen, tip: R.toggleFullscreen, key: 70 }, viewsource: { cmd: "viewsource", icon: A.viewSource, tip: R.viewSource }, quote: { cmd: "formatBlock", param: "BLOCKQUOTE", icon: A.quote, tip: R.quote, key: 81 }, left: { cmd: "justifyLeft", icon: A.left, tip: R.left }, center: { cmd: "justifyCenter", icon: A.center, tip: R.center }, right: { cmd: "justifyRight", icon: A.right, tip: R.right }, justify: { cmd: "justifyFull", icon: A.justify, tip: R.justify }, print: { type: "no-state", cmd: "print", icon: A.print, tip: R.print, key: 80 }, outdent: { type: "no-state", disable: (te) => te.caret && !te.caret.can("outdent"), cmd: "outdent", icon: A.outdent, tip: R.outdent }, indent: { type: "no-state", disable: (te) => te.caret && !te.caret.can("indent"), cmd: "indent", icon: A.indent, tip: R.indent }, removeFormat: { type: "no-state", cmd: "removeFormat", icon: A.removeFormat, tip: R.removeFormat }, hr: { type: "no-state", cmd: "insertHorizontalRule", icon: A.hr, tip: R.hr }, undo: { type: "no-state", cmd: "undo", icon: A.undo, tip: R.undo, key: 90 }, redo: { type: "no-state", cmd: "redo", icon: A.redo, tip: R.redo, key: 89 }, h1: { cmd: "formatBlock", param: "H1", icon: A.heading1 || A.heading, tip: R.heading1, htmlTip: `<h1 class="q-ma-none">${R.heading1}</h1>` }, h2: { cmd: "formatBlock", param: "H2", icon: A.heading2 || A.heading, tip: R.heading2, htmlTip: `<h2 class="q-ma-none">${R.heading2}</h2>` }, h3: { cmd: "formatBlock", param: "H3", icon: A.heading3 || A.heading, tip: R.heading3, htmlTip: `<h3 class="q-ma-none">${R.heading3}</h3>` }, h4: { cmd: "formatBlock", param: "H4", icon: A.heading4 || A.heading, tip: R.heading4, htmlTip: `<h4 class="q-ma-none">${R.heading4}</h4>` }, h5: { cmd: "formatBlock", param: "H5", icon: A.heading5 || A.heading, tip: R.heading5, htmlTip: `<h5 class="q-ma-none">${R.heading5}</h5>` }, h6: { cmd: "formatBlock", param: "H6", icon: A.heading6 || A.heading, tip: R.heading6, htmlTip: `<h6 class="q-ma-none">${R.heading6}</h6>` }, p: { cmd: "formatBlock", param: e.paragraphTag, icon: A.heading, tip: R.paragraph }, code: { cmd: "formatBlock", param: "PRE", icon: A.code, htmlTip: `<code>${R.code}</code>` }, "size-1": { cmd: "fontSize", param: "1", icon: A.size1 || A.size, tip: R.size1, htmlTip: `<font size="1">${R.size1}</font>` }, "size-2": { cmd: "fontSize", param: "2", icon: A.size2 || A.size, tip: R.size2, htmlTip: `<font size="2">${R.size2}</font>` }, "size-3": { cmd: "fontSize", param: "3", icon: A.size3 || A.size, tip: R.size3, htmlTip: `<font size="3">${R.size3}</font>` }, "size-4": { cmd: "fontSize", param: "4", icon: A.size4 || A.size, tip: R.size4, htmlTip: `<font size="4">${R.size4}</font>` }, "size-5": { cmd: "fontSize", param: "5", icon: A.size5 || A.size, tip: R.size5, htmlTip: `<font size="5">${R.size5}</font>` }, "size-6": { cmd: "fontSize", param: "6", icon: A.size6 || A.size, tip: R.size6, htmlTip: `<font size="6">${R.size6}</font>` }, "size-7": { cmd: "fontSize", param: "7", icon: A.size7 || A.size, tip: R.size7, htmlTip: `<font size="7">${R.size7}</font>` } };
  }), b = v(() => {
    const R = e.definitions || {}, A = e.definitions || e.fonts ? ph(true, {}, y.value, R, Zp(g, a.lang.editor.defaultFont, a.iconSet.editor.font, e.fonts)) : y.value;
    return e.toolbar.map((te) => te.map((V) => {
      if (V.options) return { type: "dropdown", icon: V.icon, label: V.label, size: "sm", dense: true, fixedLabel: V.fixedLabel, fixedIcon: V.fixedIcon, highlight: V.highlight, list: V.list, options: V.options.map((ue) => A[ue]) };
      const j = A[V];
      return j ? j.type === "no-state" || R[V] && (j.cmd === void 0 || y.value[j.cmd] && y.value[j.cmd].type === "no-state") ? j : Object.assign({ type: "toggle" }, j) : { type: "slot", slot: V };
    }));
  }), x = { $q: a, props: e, slots: t, emit: n, inFullscreen: o, toggleFullscreen: i, runCmd: T, isViewingSource: m, editLinkUrl: f, toolbarBackgroundClass: k, buttonProps: p, contentRef: s, buttons: b, setContent: W };
  be(() => e.modelValue, (R) => {
    w !== R && (w = R, W(R, true));
  }), be(f, (R) => {
    n(`link${R ? "Show" : "Hide"}`);
  });
  const $ = v(() => e.toolbar && e.toolbar.length !== 0), F = v(() => {
    const R = {}, A = (te) => {
      te.key && (R[te.key] = { cmd: te.cmd, param: te.param });
    };
    return b.value.forEach((te) => {
      te.forEach((V) => {
        V.options ? V.options.forEach(A) : A(V);
      });
    }), R;
  }), D = v(() => o.value ? e.contentStyle : [{ minHeight: e.minHeight, height: e.height, maxHeight: e.maxHeight }, e.contentStyle]), B = v(() => `q-editor q-editor--${m.value === true ? "source" : "default"}` + (e.disable === true ? " disabled" : "") + (o.value === true ? " fullscreen column" : "") + (e.square === true ? " q-editor--square no-border-radius" : "") + (e.flat === true ? " q-editor--flat" : "") + (e.dense === true ? " q-editor--dense" : "") + (r.value === true ? " q-editor--dark q-dark" : "")), P = v(() => [e.contentClass, "q-editor__content", { col: o.value, "overflow-auto": o.value || e.maxHeight }]), I = v(() => e.disable === true ? { "aria-disabled": "true" } : {});
  function q() {
    if (s.value !== null) {
      const R = `inner${m.value === true ? "Text" : "HTML"}`, A = s.value[R];
      A !== e.modelValue && (w = A, n("update:modelValue", A));
    }
  }
  function M(R) {
    if (n("keydown", R), R.ctrlKey !== true || Yl(R) === true) {
      ee();
      return;
    }
    const A = R.keyCode, te = F.value[A];
    if (te !== void 0) {
      const { cmd: V, param: j } = te;
      je(R), T(V, j, false);
    }
  }
  function C(R) {
    ee(), n("click", R);
  }
  function H(R) {
    if (s.value !== null) {
      const { scrollTop: A, scrollHeight: te } = s.value;
      _ = te - A;
    }
    x.caret.save(), n("blur", R);
  }
  function Y(R) {
    We(() => {
      s.value !== null && _ !== void 0 && (s.value.scrollTop = s.value.scrollHeight - _);
    }), n("focus", R);
  }
  function L(R) {
    const A = c.value;
    if (A !== null && A.contains(R.target) === true && (R.relatedTarget === null || A.contains(R.relatedTarget) !== true)) {
      const te = `inner${m.value === true ? "Text" : "HTML"}`;
      x.caret.restorePosition(s.value[te].length), ee();
    }
  }
  function O(R) {
    const A = c.value;
    A !== null && A.contains(R.target) === true && (R.relatedTarget === null || A.contains(R.relatedTarget) !== true) && (x.caret.savePosition(), ee());
  }
  function U() {
    _ = void 0;
  }
  function ye(R) {
    x.caret.save();
  }
  function W(R, A) {
    if (s.value !== null) {
      A === true && x.caret.savePosition();
      const te = `inner${m.value === true ? "Text" : "HTML"}`;
      s.value[te] = R, A === true && (x.caret.restorePosition(s.value[te].length), ee());
    }
  }
  function T(R, A, te = true) {
    G(), x.caret.restore(), x.caret.apply(R, A, () => {
      G(), x.caret.save(), te && ee();
    });
  }
  function ee() {
    setTimeout(() => {
      f.value = null, l.$forceUpdate();
    }, 1);
  }
  function G() {
    Pa(() => {
      var _a2;
      (_a2 = s.value) == null ? void 0 : _a2.focus({ preventScroll: true });
    });
  }
  function fe() {
    return s.value;
  }
  return ft(() => {
    x.caret = l.caret = new Wp(s.value, x), W(e.modelValue), ee(), document.addEventListener("selectionchange", ye);
  }), Ke(() => {
    document.removeEventListener("selectionchange", ye);
  }), Object.assign(l, { runCmd: T, refreshToolbar: ee, focus: G, getContentEl: fe }), () => {
    let R;
    if ($.value) {
      const A = [d("div", { key: "qedt_top", class: "q-editor__toolbar row no-wrap scroll-x" + k.value }, Xp(x))];
      f.value !== null && A.push(d("div", { key: "qedt_btm", class: "q-editor__toolbar row no-wrap items-center scroll-x" + k.value }, Jp(x))), R = d("div", { key: "toolbar_ctainer", class: "q-editor__toolbars-container" }, A);
    }
    return d("div", { ref: c, class: B.value, style: { height: o.value === true ? "100%" : null }, ...I.value, onFocusin: L, onFocusout: O }, [R, d("div", { ref: s, style: D.value, class: P.value, contenteditable: h.value, placeholder: e.placeholder, ...u.listeners.value, onInput: q, onKeydown: M, onClick: C, onBlur: H, onFocus: Y, onMousedown: U, onTouchstartPassive: U })]);
  };
} });
var Du = he({ name: "QItemLabel", props: { overline: Boolean, caption: Boolean, header: Boolean, lines: [Number, String] }, setup(e, { slots: t }) {
  const n = v(() => parseInt(e.lines, 10)), l = v(() => "q-item__label" + (e.overline === true ? " q-item__label--overline text-overline" : "") + (e.caption === true ? " q-item__label--caption text-caption" : "") + (e.header === true ? " q-item__label--header" : "") + (n.value === 1 ? " ellipsis" : "")), a = v(() => e.lines !== void 0 && n.value > 1 ? { overflow: "hidden", display: "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": n.value } : null);
  return () => d("div", { style: a.value, class: l.value }, Pe(t.default));
} }), Ds = he({ name: "QSlideTransition", props: { appear: Boolean, duration: { type: Number, default: 300 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: n }) {
  let l = false, a, r, o = null, i = null, u, c;
  function s() {
    a == null ? void 0 : a(), a = null, l = false, o !== null && (clearTimeout(o), o = null), i !== null && (clearTimeout(i), i = null), r == null ? void 0 : r.removeEventListener("transitionend", u), u = null;
  }
  function f(_, w, k) {
    w !== void 0 && (_.style.height = `${w}px`), _.style.transition = `height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`, l = true, a = k;
  }
  function m(_, w) {
    _.style.overflowY = null, _.style.height = null, _.style.transition = null, s(), w !== c && n(w);
  }
  function h(_, w) {
    let k = 0;
    r = _, l === true ? (s(), k = _.offsetHeight === _.scrollHeight ? 0 : void 0) : (c = "hide", _.style.overflowY = "hidden"), f(_, k, w), o = setTimeout(() => {
      o = null, _.style.height = `${_.scrollHeight}px`, u = (p) => {
        i = null, (Object(p) !== p || p.target === _) && m(_, "show");
      }, _.addEventListener("transitionend", u), i = setTimeout(u, e.duration * 1.1);
    }, 100);
  }
  function g(_, w) {
    let k;
    r = _, l === true ? s() : (c = "show", _.style.overflowY = "hidden", k = _.scrollHeight), f(_, k, w), o = setTimeout(() => {
      o = null, _.style.height = 0, u = (p) => {
        i = null, (Object(p) !== p || p.target === _) && m(_, "hide");
      }, _.addEventListener("transitionend", u), i = setTimeout(u, e.duration * 1.1);
    }, 100);
  }
  return Ke(() => {
    l === true && s();
  }), () => d(Ft, { css: false, appear: e.appear, onEnter: h, onLeave: g }, t.default);
} }), n1 = { true: "inset", item: "item-inset", "item-thumbnail": "item-thumbnail-inset" }, Gi = { xs: 2, sm: 4, md: 8, lg: 16, xl: 24 }, Ql = he({ name: "QSeparator", props: { ...nt, spaced: [Boolean, String], inset: [Boolean, String], vertical: Boolean, color: String, size: String }, setup(e) {
  const t = Se(), n = lt(e, t.proxy.$q), l = v(() => e.vertical === true ? "vertical" : "horizontal"), a = v(() => ` q-separator--${l.value}`), r = v(() => e.inset !== false ? `${a.value}-${n1[e.inset]}` : ""), o = v(() => `q-separator${a.value}${r.value}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (n.value === true ? " q-separator--dark" : "")), i = v(() => {
    const u = {};
    if (e.size !== void 0 && (u[e.vertical === true ? "width" : "height"] = e.size), e.spaced !== false) {
      const c = e.spaced === true ? `${Gi.md}px` : e.spaced in Gi ? `${Gi[e.spaced]}px` : e.spaced, s = e.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
      u[`margin${s[0]}`] = u[`margin${s[1]}`] = c;
    }
    return u;
  });
  return () => d("hr", { class: o.value, style: i.value, "aria-orientation": l.value });
} }), El = os({}), l1 = Object.keys(Ar);
he({ name: "QExpansionItem", props: { ...Ar, ...Aa, ...nt, icon: String, label: String, labelLines: [Number, String], caption: String, captionLines: [Number, String], dense: Boolean, toggleAriaLabel: String, expandIcon: String, expandedIcon: String, expandIconClass: [Array, String, Object], duration: {}, headerInsetLevel: Number, contentInsetLevel: Number, expandSeparator: Boolean, defaultOpened: Boolean, hideExpandIcon: Boolean, expandIconToggle: Boolean, switchToggleSide: Boolean, denseToggle: Boolean, group: String, popup: Boolean, headerStyle: [Array, String, Object], headerClass: [Array, String, Object] }, emits: [...Ra, "click", "afterShow", "afterHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = lt(e, l), r = K(e.modelValue !== null ? e.modelValue : e.defaultOpened), o = K(null), i = si(), { show: u, hide: c, toggle: s } = $a({ showing: r });
  let f, m;
  const h = v(() => `q-expansion-item q-item-type q-expansion-item--${r.value === true ? "expanded" : "collapsed"} q-expansion-item--${e.popup === true ? "popup" : "standard"}`), g = v(() => e.contentInsetLevel === void 0 ? null : { ["padding" + (l.lang.rtl === true ? "Right" : "Left")]: e.contentInsetLevel * 56 + "px" }), _ = v(() => e.disable !== true && (e.href !== void 0 || e.to !== void 0 && e.to !== null && e.to !== "")), w = v(() => {
    const L = {};
    return l1.forEach((O) => {
      L[O] = e[O];
    }), L;
  }), k = v(() => _.value === true || e.expandIconToggle !== true), p = v(() => e.expandedIcon !== void 0 && r.value === true ? e.expandedIcon : e.expandIcon || l.iconSet.expansionItem[e.denseToggle === true ? "denseIcon" : "icon"]), y = v(() => e.disable !== true && (_.value === true || e.expandIconToggle === true)), b = v(() => ({ expanded: r.value === true, detailsId: i.value, toggle: s, show: u, hide: c })), x = v(() => {
    const L = e.toggleAriaLabel !== void 0 ? e.toggleAriaLabel : l.lang.label[r.value === true ? "collapse" : "expand"](e.label);
    return { role: "button", "aria-expanded": r.value === true ? "true" : "false", "aria-controls": i.value, "aria-label": L };
  });
  be(() => e.group, (L) => {
    m == null ? void 0 : m(), L !== void 0 && I();
  });
  function $(L) {
    _.value !== true && s(L), n("click", L);
  }
  function F(L) {
    L.keyCode === 13 && D(L, true);
  }
  function D(L, O) {
    var _a2;
    O !== true && L.qAvoidFocus !== true && ((_a2 = o.value) == null ? void 0 : _a2.focus()), s(L), je(L);
  }
  function B() {
    n("afterShow");
  }
  function P() {
    n("afterHide");
  }
  function I() {
    f === void 0 && (f = wr()), r.value === true && (El[e.group] = f);
    const L = be(r, (U) => {
      U === true ? El[e.group] = f : El[e.group] === f && delete El[e.group];
    }), O = be(() => El[e.group], (U, ye) => {
      ye === f && U !== void 0 && U !== f && c();
    });
    m = () => {
      L(), O(), El[e.group] === f && delete El[e.group], m = void 0;
    };
  }
  function q() {
    const L = { class: [`q-focusable relative-position cursor-pointer${e.denseToggle === true && e.switchToggleSide === true ? " items-end" : ""}`, e.expandIconClass], side: e.switchToggleSide !== true, avatar: e.switchToggleSide }, O = [d(et, { class: "q-expansion-item__toggle-icon" + (e.expandedIcon === void 0 && r.value === true ? " q-expansion-item__toggle-icon--rotated" : ""), name: p.value })];
    return y.value === true && (Object.assign(L, { tabindex: 0, ...x.value, onClick: D, onKeyup: F }), O.unshift(d("div", { ref: o, class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded", tabindex: -1 }))), d(mn, L, () => O);
  }
  function M() {
    let L;
    return t.header !== void 0 ? L = [].concat(t.header(b.value)) : (L = [d(mn, () => [d(Du, { lines: e.labelLines }, () => e.label || ""), e.caption ? d(Du, { lines: e.captionLines, caption: true }, () => e.caption) : null])], e.icon && L[e.switchToggleSide === true ? "push" : "unshift"](d(mn, { side: e.switchToggleSide === true, avatar: e.switchToggleSide !== true }, () => d(et, { name: e.icon })))), e.disable !== true && e.hideExpandIcon !== true && L[e.switchToggleSide === true ? "unshift" : "push"](q()), L;
  }
  function C() {
    const L = { ref: "item", style: e.headerStyle, class: e.headerClass, dark: a.value, disable: e.disable, dense: e.dense, insetLevel: e.headerInsetLevel };
    return k.value === true && (L.clickable = true, L.onClick = $, Object.assign(L, _.value === true ? w.value : x.value)), d(Ca, L, M);
  }
  function H() {
    return sn(d("div", { key: "e-content", class: "q-expansion-item__content relative-position", style: g.value, id: i.value }, Pe(t.default)), [[Uv, r.value]]);
  }
  function Y() {
    const L = [C(), d(Ds, { duration: e.duration, onShow: B, onHide: P }, H)];
    return e.expandSeparator === true && L.push(d(Ql, { class: "q-expansion-item__border q-expansion-item__border--top absolute-top", dark: a.value }), d(Ql, { class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom", dark: a.value })), L;
  }
  return e.group !== void 0 && I(), Ke(() => {
    m == null ? void 0 : m();
  }), () => d("div", { class: h.value }, [d("div", { class: "q-expansion-item__container relative-position" }, Y())]);
} });
var a1 = ["top", "right", "bottom", "left"], Nu = { type: { type: String, default: "a" }, outline: Boolean, push: Boolean, flat: Boolean, unelevated: Boolean, color: String, textColor: String, glossy: Boolean, square: Boolean, padding: String, label: { type: [String, Number], default: "" }, labelPosition: { type: String, default: "right", validator: (e) => a1.includes(e) }, externalLabel: Boolean, hideLabel: { type: Boolean }, labelClass: [Array, String, Object], labelStyle: [Array, String, Object], disable: Boolean, tabindex: [Number, String] };
function _h(e, t) {
  return { formClass: v(() => `q-fab--form-${e.square === true ? "square" : "rounded"}`), stacked: v(() => e.externalLabel === false && ["top", "bottom"].includes(e.labelPosition)), labelProps: v(() => {
    if (e.externalLabel === true) {
      const n = e.hideLabel === null ? t.value === false : e.hideLabel;
      return { action: "push", data: { class: [e.labelClass, `q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}` + (n === true ? " q-fab__label--external-hidden" : "")], style: e.labelStyle } };
    }
    return { action: ["left", "top"].includes(e.labelPosition) ? "unshift" : "push", data: { class: [e.labelClass, `q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}` + (e.hideLabel === true ? " q-fab__label--internal-hidden" : "")], style: e.labelStyle } };
  }) };
}
var r1 = ["up", "right", "down", "left"], o1 = ["left", "center", "right"];
he({ name: "QFab", props: { ...Nu, ...Aa, icon: String, activeIcon: String, hideIcon: Boolean, hideLabel: { ...Nu.hideLabel, default: null }, direction: { type: String, default: "right", validator: (e) => r1.includes(e) }, persistent: Boolean, verticalActionsAlign: { type: String, default: "center", validator: (e) => o1.includes(e) } }, emits: Ra, setup(e, { slots: t }) {
  const n = K(null), l = K(e.modelValue === true), a = si(), { proxy: { $q: r } } = Se(), { formClass: o, labelProps: i } = _h(e, l), u = v(() => e.persistent !== true), { hide: c, toggle: s } = $a({ showing: l, hideOnRouteChange: u }), f = v(() => ({ opened: l.value })), m = v(() => `q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${o.value}` + (l.value === true ? " q-fab--opened" : " q-fab--closed")), h = v(() => `q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${l.value === true ? "opened" : "closed"}`), g = v(() => {
    const p = { id: a.value, role: "menu" };
    return l.value !== true && (p["aria-hidden"] = "true"), p;
  }), _ = v(() => `q-fab__icon-holder  q-fab__icon-holder--${l.value === true ? "opened" : "closed"}`);
  function w(p, y) {
    const b = t[p], x = `q-fab__${p} absolute-full`;
    return b === void 0 ? d(et, { class: x, name: e[y] || r.iconSet.fab[y] }) : d("div", { class: x }, b(f.value));
  }
  function k() {
    const p = [];
    return e.hideIcon !== true && p.push(d("div", { class: _.value }, [w("icon", "icon"), w("active-icon", "activeIcon")])), (e.label !== "" || t.label !== void 0) && p[i.value.action](d("div", i.value.data, t.label !== void 0 ? t.label(f.value) : [e.label])), qt(t.tooltip, p);
  }
  return hn(im, { showing: l, onChildClick(p) {
    var _a2;
    c(p), (p == null ? void 0 : p.qAvoidFocus) !== true && ((_a2 = n.value) == null ? void 0 : _a2.$el.focus());
  } }), () => d("div", { class: m.value }, [d(Ze, { ref: n, class: o.value, ...e, noWrap: true, stack: e.stacked, align: void 0, icon: void 0, label: void 0, noCaps: true, fab: true, "aria-expanded": l.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": a.value, onClick: s }, k), d("div", { class: h.value, ...g.value }, Pe(t.default))]);
} });
var wh = { start: "self-end", center: "self-center", end: "self-start" }, i1 = Object.keys(wh);
he({ name: "QFabAction", props: { ...Nu, icon: { type: String, default: "" }, anchor: { type: String, validator: (e) => i1.includes(e) }, to: [String, Object], replace: Boolean }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const l = Tt(im, () => ({ showing: { value: true }, onChildClick: St })), { formClass: a, labelProps: r } = _h(e, l.showing), o = v(() => {
    const f = wh[e.anchor];
    return a.value + (f !== void 0 ? ` ${f}` : "");
  }), i = v(() => e.disable === true || l.showing.value !== true);
  function u(f) {
    l.onChildClick(f), n("click", f);
  }
  function c() {
    const f = [];
    return t.icon !== void 0 ? f.push(t.icon()) : e.icon !== "" && f.push(d(et, { name: e.icon })), (e.label !== "" || t.label !== void 0) && f[r.value.action](d("div", r.value.data, t.label !== void 0 ? t.label() : [e.label])), qt(t.default, f);
  }
  const s = Se();
  return Object.assign(s.proxy, { click: u }), () => d(Ze, { class: o.value, ...e, noWrap: true, stack: e.stacked, icon: void 0, label: void 0, noCaps: true, fabMini: true, disable: i.value, onClick: u }, c);
} });
function u1({ validate: e, resetValidation: t, requiresQForm: n }) {
  const l = Tt(um, false);
  if (l !== false) {
    const { props: a, proxy: r } = Se();
    Object.assign(r, { validate: e, resetValidation: t }), be(() => a.disable, (o) => {
      o === true ? (typeof t == "function" && t(), l.unbindComponent(r)) : l.bindComponent(r);
    }), ft(() => {
      a.disable !== true && l.bindComponent(r);
    }), Ke(() => {
      a.disable !== true && l.unbindComponent(r);
    });
  } else n === true && console.error("Parent QForm not found on useFormChild()!");
}
var s1 = [true, false, "ondemand"], c1 = { modelValue: {}, error: { type: Boolean, default: null }, errorMessage: String, noErrorIcon: Boolean, rules: Array, reactiveRules: Boolean, lazyRules: { type: [Boolean, String], default: false, validator: (e) => s1.includes(e) } };
function d1(e, t) {
  const { props: n, proxy: l } = Se(), a = K(false), r = K(null), o = K(false);
  u1({ validate: _, resetValidation: g });
  let i = 0, u;
  const c = v(() => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0), s = v(() => n.disable !== true && c.value === true && t.value === false), f = v(() => n.error === true || a.value === true), m = v(() => typeof n.errorMessage == "string" && n.errorMessage.length !== 0 ? n.errorMessage : r.value);
  be(() => n.modelValue, () => {
    o.value = true, s.value === true && n.lazyRules === false && w();
  });
  function h() {
    n.lazyRules !== "ondemand" && s.value === true && o.value === true && w();
  }
  be(() => n.reactiveRules, (k) => {
    k === true ? u === void 0 && (u = be(() => n.rules, h, { immediate: true, deep: true })) : u !== void 0 && (u(), u = void 0);
  }, { immediate: true }), be(() => n.lazyRules, h), be(e, (k) => {
    k === true ? o.value = true : s.value === true && n.lazyRules !== "ondemand" && w();
  });
  function g() {
    i++, t.value = false, o.value = false, a.value = false, r.value = null, w.cancel();
  }
  function _(k = n.modelValue) {
    if (n.disable === true || c.value === false) return true;
    const p = ++i, y = t.value !== true ? () => {
      o.value = true;
    } : () => {
    }, b = ($, F) => {
      $ === true && y(), a.value = $, r.value = F || null, t.value = false;
    }, x = [];
    for (let $ = 0; $ < n.rules.length; $++) {
      const F = n.rules[$];
      let D;
      if (typeof F == "function" ? D = F(k, oo) : typeof F == "string" && oo[F] !== void 0 && (D = oo[F](k)), D === false || typeof D == "string") return b(true, D), false;
      D !== true && D !== void 0 && x.push(D);
    }
    return x.length === 0 ? (b(false), true) : (t.value = true, Promise.all(x).then(($) => {
      if ($ === void 0 || Array.isArray($) === false || $.length === 0) return p === i && b(false), true;
      const F = $.find((D) => D === false || typeof D == "string");
      return p === i && b(F !== void 0, F), F === void 0;
    }, ($) => (p === i && (console.error($), b(true)), false)));
  }
  const w = Ea(_, 0);
  return Ke(() => {
    u == null ? void 0 : u(), w.cancel();
  }), Object.assign(l, { resetValidation: g, validate: _ }), Ot(l, "hasError", () => f.value), { isDirtyModel: o, hasRules: c, hasError: f, errorMessage: m, validate: _, resetValidation: g };
}
function Kl(e) {
  return e != null && ("" + e).length !== 0;
}
var Sh = { ...nt, ...c1, label: String, stackLabel: Boolean, hint: String, hideHint: Boolean, prefix: String, suffix: String, labelColor: String, color: String, bgColor: String, filled: Boolean, outlined: Boolean, borderless: Boolean, standout: [Boolean, String], square: Boolean, loading: Boolean, labelSlot: Boolean, bottomSlots: Boolean, hideBottomSpace: Boolean, rounded: Boolean, dense: Boolean, itemAligned: Boolean, counter: Boolean, clearable: Boolean, clearIcon: String, disable: Boolean, readonly: Boolean, autofocus: Boolean, for: String }, di = { ...Sh, maxlength: [Number, String] }, fi = ["update:modelValue", "clear", "focus", "blur"];
function vi({ requiredForAttr: e = true, tagProp: t, changeEvent: n = false } = {}) {
  const { props: l, proxy: a } = Se(), r = lt(l, a.$q), o = si({ required: e, getValue: () => l.for });
  return { requiredForAttr: e, changeEvent: n, tag: t === true ? v(() => l.tag) : { value: "label" }, isDark: r, editable: v(() => l.disable !== true && l.readonly !== true), innerLoading: K(false), focused: K(false), hasPopupOpen: false, splitAttrs: yh(), targetUid: o, rootRef: K(null), targetRef: K(null), controlRef: K(null) };
}
function mi(e) {
  const { props: t, emit: n, slots: l, attrs: a, proxy: r } = Se(), { $q: o } = r;
  let i = null;
  e.hasValue === void 0 && (e.hasValue = v(() => Kl(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (O) => {
    n("update:modelValue", O);
  }), e.controlEvents === void 0 && (e.controlEvents = { onFocusin: B, onFocusout: P }), Object.assign(e, { clearValue: I, onControlFocusin: B, onControlFocusout: P, focus: F }), e.computedCounter === void 0 && (e.computedCounter = v(() => {
    if (t.counter !== false) {
      const O = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === true ? t.modelValue.length : 0, U = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
      return O + (U !== void 0 ? " / " + U : "");
    }
  }));
  const { isDirtyModel: u, hasRules: c, hasError: s, errorMessage: f, resetValidation: m } = d1(e.focused, e.innerLoading), h = e.floatingLabel !== void 0 ? v(() => t.stackLabel === true || e.focused.value === true || e.floatingLabel.value === true) : v(() => t.stackLabel === true || e.focused.value === true || e.hasValue.value === true), g = v(() => t.bottomSlots === true || t.hint !== void 0 || c.value === true || t.counter === true || t.error !== null), _ = v(() => t.filled === true ? "filled" : t.outlined === true ? "outlined" : t.borderless === true ? "borderless" : t.standout ? "standout" : "standard"), w = v(() => `q-field row no-wrap items-start q-field--${_.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === true ? " q-field--rounded" : "") + (t.square === true ? " q-field--square" : "") + (h.value === true ? " q-field--float" : "") + (p.value === true ? " q-field--labeled" : "") + (t.dense === true ? " q-field--dense" : "") + (t.itemAligned === true ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === true ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === true ? " q-field--focused" : "") + (s.value === true ? " q-field--error" : "") + (s.value === true || e.focused.value === true ? " q-field--highlighted" : "") + (t.hideBottomSpace !== true && g.value === true ? " q-field--with-bottom" : "") + (t.disable === true ? " q-field--disabled" : t.readonly === true ? " q-field--readonly" : "")), k = v(() => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (s.value === true ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === true ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")), p = v(() => t.labelSlot === true || t.label !== void 0), y = v(() => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && s.value !== true ? ` text-${t.labelColor}` : "")), b = v(() => ({ id: e.targetUid.value, editable: e.editable.value, focused: e.focused.value, floatingLabel: h.value, modelValue: t.modelValue, emitValue: e.emitValue })), x = v(() => {
    const O = {};
    return e.targetUid.value && (O.for = e.targetUid.value), t.disable === true && (O["aria-disabled"] = "true"), O;
  });
  function $() {
    var _a2;
    const O = document.activeElement;
    let U = (_a2 = e.targetRef) == null ? void 0 : _a2.value;
    U && (O === null || O.id !== e.targetUid.value) && (U.hasAttribute("tabindex") === true || (U = U.querySelector("[tabindex]")), U !== O && (U == null ? void 0 : U.focus({ preventScroll: true })));
  }
  function F() {
    Pa($);
  }
  function D() {
    Uy($);
    const O = document.activeElement;
    O !== null && e.rootRef.value.contains(O) && O.blur();
  }
  function B(O) {
    i !== null && (clearTimeout(i), i = null), e.editable.value === true && e.focused.value === false && (e.focused.value = true, n("focus", O));
  }
  function P(O, U) {
    i !== null && clearTimeout(i), i = setTimeout(() => {
      i = null, !(document.hasFocus() === true && (e.hasPopupOpen === true || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement) !== false)) && (e.focused.value === true && (e.focused.value = false, n("blur", O)), U == null ? void 0 : U());
    });
  }
  function I(O) {
    var _a2;
    je(O), o.platform.is.mobile !== true ? (((_a2 = e.targetRef) == null ? void 0 : _a2.value) || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === true && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), n("update:modelValue", null), e.changeEvent === true && n("change", null), n("clear", t.modelValue), We(() => {
      const U = u.value;
      m(), u.value = U;
    });
  }
  function q(O) {
    [13, 32].includes(O.keyCode) && I(O);
  }
  function M() {
    const O = [];
    return l.prepend !== void 0 && O.push(d("div", { class: "q-field__prepend q-field__marginal row no-wrap items-center", key: "prepend", onClick: Vt }, l.prepend())), O.push(d("div", { class: "q-field__control-container col relative-position row no-wrap q-anchor--skip" }, C())), s.value === true && t.noErrorIcon === false && O.push(Y("error", [d(et, { name: o.iconSet.field.error, color: "negative" })])), t.loading === true || e.innerLoading.value === true ? O.push(Y("inner-loading-append", l.loading !== void 0 ? l.loading() : [d(_n, { color: t.color })])) : t.clearable === true && e.hasValue.value === true && e.editable.value === true && O.push(Y("inner-clearable-append", [d(et, { class: "q-field__focusable-action", name: t.clearIcon || o.iconSet.field.clear, tabindex: 0, role: "button", "aria-hidden": "false", "aria-label": o.lang.label.clear, onKeyup: q, onClick: I })])), l.append !== void 0 && O.push(d("div", { class: "q-field__append q-field__marginal row no-wrap items-center", key: "append", onClick: Vt }, l.append())), e.getInnerAppend !== void 0 && O.push(Y("inner-append", e.getInnerAppend())), e.getControlChild !== void 0 && O.push(e.getControlChild()), O;
  }
  function C() {
    const O = [];
    return t.prefix !== void 0 && t.prefix !== null && O.push(d("div", { class: "q-field__prefix no-pointer-events row items-center" }, t.prefix)), e.getShadowControl !== void 0 && e.hasShadow.value === true && O.push(e.getShadowControl()), e.getControl !== void 0 ? O.push(e.getControl()) : l.rawControl !== void 0 ? O.push(l.rawControl()) : l.control !== void 0 && O.push(d("div", { ref: e.targetRef, class: "q-field__native row", tabindex: -1, ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0 }, l.control(b.value))), p.value === true && O.push(d("div", { class: y.value }, Pe(l.label, t.label))), t.suffix !== void 0 && t.suffix !== null && O.push(d("div", { class: "q-field__suffix no-pointer-events row items-center" }, t.suffix)), O.concat(Pe(l.default));
  }
  function H() {
    let O, U;
    s.value === true ? f.value !== null ? (O = [d("div", { role: "alert" }, f.value)], U = `q--slot-error-${f.value}`) : (O = Pe(l.error), U = "q--slot-error") : (t.hideHint !== true || e.focused.value === true) && (t.hint !== void 0 ? (O = [d("div", t.hint)], U = `q--slot-hint-${t.hint}`) : (O = Pe(l.hint), U = "q--slot-hint"));
    const ye = t.counter === true || l.counter !== void 0;
    if (t.hideBottomSpace === true && ye === false && O === void 0) return;
    const W = d("div", { key: U, class: "q-field__messages col" }, O);
    return d("div", { class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== true ? "animated" : "stale"), onClick: Vt }, [t.hideBottomSpace === true ? W : d(Ft, { name: "q-transition--field-message" }, () => W), ye === true ? d("div", { class: "q-field__counter" }, l.counter !== void 0 ? l.counter() : e.computedCounter.value) : null]);
  }
  function Y(O, U) {
    return U === null ? null : d("div", { key: O, class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip" }, U);
  }
  let L = false;
  return Vn(() => {
    L = true;
  }), Sl(() => {
    L === true && t.autofocus === true && r.focus();
  }), t.autofocus === true && ft(() => {
    r.focus();
  }), Ke(() => {
    i !== null && clearTimeout(i);
  }), Object.assign(r, { focus: F, blur: D }), function() {
    const U = e.getControl === void 0 && l.control === void 0 ? { ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0, ...x.value } : x.value;
    return d(e.tag.value, { ref: e.rootRef, class: [w.value, a.class], style: a.style, ...U }, [l.before !== void 0 ? d("div", { class: "q-field__before q-field__marginal row no-wrap items-center", onClick: Vt }, l.before()) : null, d("div", { class: "q-field__inner relative-position col self-stretch" }, [d("div", { ref: e.controlRef, class: k.value, tabindex: -1, ...e.controlEvents }, M()), g.value === true ? H() : null]), l.after !== void 0 ? d("div", { class: "q-field__after q-field__marginal row no-wrap items-center", onClick: Vt }, l.after()) : null]);
  };
}
var f1 = he({ name: "QField", inheritAttrs: false, props: { ...di, tag: { type: String, default: "label" } }, emits: fi, setup() {
  return mi(vi({ tagProp: true }));
} });
function ra(e, t, n, l) {
  const a = [];
  return e.forEach((r) => {
    l(r) === true ? a.push(r) : t.push({ failedPropValidation: n, file: r });
  }), a;
}
function Wr(e) {
  (e == null ? void 0 : e.dataTransfer) && (e.dataTransfer.dropEffect = "copy"), je(e);
}
var xh = { multiple: Boolean, accept: String, capture: String, maxFileSize: [Number, String], maxTotalSize: [Number, String], maxFiles: [Number, String], filter: Function }, Ch = ["rejected"];
function kh({ editable: e, dnd: t, getFileInput: n, addFilesToQueue: l }) {
  const { props: a, emit: r, proxy: o } = Se(), i = K(null), u = v(() => a.accept !== void 0 ? a.accept.split(",").map((p) => (p = p.trim(), p === "*" ? "*/" : (p.endsWith("/*") && (p = p.slice(0, p.length - 1)), p.toUpperCase()))) : null), c = v(() => parseInt(a.maxFiles, 10)), s = v(() => parseInt(a.maxTotalSize, 10));
  function f(p) {
    var _a2;
    if (e.value) if (p !== Object(p) && (p = { target: null }), ((_a2 = p.target) == null ? void 0 : _a2.matches('input[type="file"]')) === true) p.clientX === 0 && p.clientY === 0 && wt(p);
    else {
      const y = n();
      y !== p.target && (y == null ? void 0 : y.click(p));
    }
  }
  function m(p) {
    e.value && p && l(null, p);
  }
  function h(p, y, b, x) {
    let $ = Array.from(y || p.target.files);
    const F = [], D = () => {
      F.length !== 0 && r("rejected", F);
    };
    if (a.accept !== void 0 && u.value.indexOf("*/") === -1 && ($ = ra($, F, "accept", (B) => u.value.some((P) => B.type.toUpperCase().startsWith(P) || B.name.toUpperCase().endsWith(P))), $.length === 0)) return D();
    if (a.maxFileSize !== void 0) {
      const B = parseInt(a.maxFileSize, 10);
      if ($ = ra($, F, "max-file-size", (P) => P.size <= B), $.length === 0) return D();
    }
    if (a.multiple !== true && $.length !== 0 && ($ = [$[0]]), $.forEach((B) => {
      B.__key = B.webkitRelativePath + B.lastModified + B.name + B.size;
    }), x === true) {
      const B = b.map((P) => P.__key);
      $ = ra($, F, "duplicate", (P) => B.includes(P.__key) === false);
    }
    if ($.length === 0) return D();
    if (a.maxTotalSize !== void 0) {
      let B = x === true ? b.reduce((P, I) => P + I.size, 0) : 0;
      if ($ = ra($, F, "max-total-size", (P) => (B += P.size, B <= s.value)), $.length === 0) return D();
    }
    if (typeof a.filter == "function") {
      const B = a.filter($);
      $ = ra($, F, "filter", (P) => B.includes(P));
    }
    if (a.maxFiles !== void 0) {
      let B = x === true ? b.length : 0;
      if ($ = ra($, F, "max-files", () => (B++, B <= c.value)), $.length === 0) return D();
    }
    if (D(), $.length !== 0) return $;
  }
  function g(p) {
    Wr(p), t.value !== true && (t.value = true);
  }
  function _(p) {
    je(p), (p.relatedTarget !== null || ze.is.safari !== true ? p.relatedTarget !== i.value : document.elementsFromPoint(p.clientX, p.clientY).includes(i.value) === false) === true && (t.value = false);
  }
  function w(p) {
    Wr(p);
    const y = p.dataTransfer.files;
    y.length !== 0 && l(null, y), t.value = false;
  }
  function k(p) {
    if (t.value === true) return d("div", { ref: i, class: `q-${p}__dnd absolute-full`, onDragenter: Wr, onDragover: Wr, onDragleave: _, onDrop: w });
  }
  return Object.assign(o, { pickFiles: f, addFiles: m }), { pickFiles: f, addFiles: m, onDragover: g, onDragleave: _, processFiles: h, getDndNode: k, maxFilesNumber: c, maxTotalSizeNumber: s };
}
function qh(e, t) {
  function n() {
    const l = e.modelValue;
    try {
      const a = "DataTransfer" in window ? new DataTransfer() : "ClipboardEvent" in window ? new ClipboardEvent("").clipboardData : void 0;
      return Object(l) === l && ("length" in l ? Array.from(l) : [l]).forEach((r) => {
        a.items.add(r);
      }), { files: a.files };
    } catch {
      return { files: void 0 };
    }
  }
  return v(t === true ? () => {
    if (e.type === "file") return n();
  } : n);
}
he({ name: "QFile", inheritAttrs: false, props: { ...Sh, ...wn, ...xh, modelValue: [File, FileList, Array], append: Boolean, useChips: Boolean, displayValue: [String, Number], tabindex: { type: [String, Number], default: 0 }, counterLabel: Function, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...fi, ...Ch], setup(e, { slots: t, emit: n, attrs: l }) {
  const { proxy: a } = Se(), r = vi(), o = K(null), i = K(false), u = Ms(e), { pickFiles: c, onDragover: s, onDragleave: f, processFiles: m, getDndNode: h } = kh({ editable: r.editable, dnd: i, getFileInput: q, addFilesToQueue: M }), g = qh(e), _ = v(() => Object(e.modelValue) === e.modelValue ? "length" in e.modelValue ? Array.from(e.modelValue) : [e.modelValue] : []), w = v(() => Kl(_.value)), k = v(() => _.value.map((L) => L.name).join(", ")), p = v(() => Au(_.value.reduce((L, O) => L + O.size, 0))), y = v(() => ({ totalSize: p.value, filesNumber: _.value.length, maxFiles: e.maxFiles })), b = v(() => ({ tabindex: -1, type: "file", title: "", accept: e.accept, capture: e.capture, name: u.value, ...l, id: r.targetUid.value, disabled: r.editable.value !== true })), x = v(() => "q-file q-field--auto-height" + (i.value === true ? " q-file--dnd" : "")), $ = v(() => e.multiple === true && e.append === true);
  function F(L) {
    const O = _.value.slice();
    O.splice(L, 1), B(O);
  }
  function D(L) {
    const O = _.value.indexOf(L);
    O !== -1 && F(O);
  }
  function B(L) {
    n("update:modelValue", e.multiple === true ? L : L[0]);
  }
  function P(L) {
    L.keyCode === 13 && Vt(L);
  }
  function I(L) {
    (L.keyCode === 13 || L.keyCode === 32) && c(L);
  }
  function q() {
    return o.value;
  }
  function M(L, O) {
    const U = m(L, O, _.value, $.value), ye = q();
    ye != null && (ye.value = ""), U !== void 0 && ((e.multiple === true ? e.modelValue && U.every((W) => _.value.includes(W)) : e.modelValue === U[0]) || B($.value === true ? _.value.concat(U) : U));
  }
  function C() {
    return [d("input", { class: [e.inputClass, "q-file__filler"], style: e.inputStyle })];
  }
  function H() {
    if (t.file !== void 0) return _.value.length === 0 ? C() : _.value.map((O, U) => t.file({ index: U, file: O, ref: this }));
    if (t.selected !== void 0) return _.value.length === 0 ? C() : t.selected({ files: _.value, ref: this });
    if (e.useChips === true) return _.value.length === 0 ? C() : _.value.map((O, U) => d(Hm, { key: "file-" + U, removable: r.editable.value, dense: true, textColor: e.color, tabindex: e.tabindex, onRemove: () => {
      F(U);
    } }, () => d("span", { class: "ellipsis", textContent: O.name })));
    const L = e.displayValue !== void 0 ? e.displayValue : k.value;
    return L.length !== 0 ? [d("div", { class: e.inputClass, style: e.inputStyle, textContent: L })] : C();
  }
  function Y() {
    const L = { ref: o, ...b.value, ...g.value, class: "q-field__input fit absolute-full cursor-pointer", onChange: M };
    return e.multiple === true && (L.multiple = true), d("input", L);
  }
  return Object.assign(r, { fieldClass: x, emitValue: B, hasValue: w, inputRef: o, innerValue: _, floatingLabel: v(() => w.value === true || Kl(e.displayValue)), computedCounter: v(() => {
    if (e.counterLabel !== void 0) return e.counterLabel(y.value);
    const L = e.maxFiles;
    return `${_.value.length}${L !== void 0 ? " / " + L : ""} (${p.value})`;
  }), getControlChild: () => h("file"), getControl: () => {
    const L = { ref: r.targetRef, class: "q-field__native row items-center cursor-pointer", tabindex: e.tabindex };
    return r.editable.value === true && Object.assign(L, { onDragover: s, onDragleave: f, onKeydown: P, onKeyup: I }), d("div", L, [Y()].concat(H()));
  } }), Object.assign(a, { removeAtIndex: F, removeFile: D, getNativeElement: () => o.value }), Ot(a, "nativeEl", () => o.value), mi(r);
} });
var v1 = he({ name: "QFooter", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = Tt(Gl, ot);
  if (a === ot) return console.error("QFooter needs to be child of QLayout"), ot;
  const r = K(parseInt(e.heightHint, 10)), o = K(true), i = K(nn.value === true || a.isContainer.value === true ? 0 : window.innerHeight), u = v(() => e.reveal === true || a.view.value.indexOf("F") !== -1 || l.platform.is.ios && a.isContainer.value === true), c = v(() => a.isContainer.value === true ? a.containerHeight.value : i.value), s = v(() => {
    if (e.modelValue !== true) return 0;
    if (u.value === true) return o.value === true ? r.value : 0;
    const x = a.scroll.value.position + c.value + r.value - a.height.value;
    return x > 0 ? x : 0;
  }), f = v(() => e.modelValue !== true || u.value === true && o.value !== true), m = v(() => e.modelValue === true && f.value === true && e.reveal === true), h = v(() => "q-footer q-layout__section--marginal " + (u.value === true ? "fixed" : "absolute") + "-bottom" + (e.bordered === true ? " q-footer--bordered" : "") + (f.value === true ? " q-footer--hidden" : "") + (e.modelValue !== true ? " q-layout--prevent-focus" + (u.value !== true ? " hidden" : "") : "")), g = v(() => {
    const x = a.rows.value.bottom, $ = {};
    return x[0] === "l" && a.left.space === true && ($[l.lang.rtl === true ? "right" : "left"] = `${a.left.size}px`), x[2] === "r" && a.right.space === true && ($[l.lang.rtl === true ? "left" : "right"] = `${a.right.size}px`), $;
  });
  function _(x, $) {
    a.update("footer", x, $);
  }
  function w(x, $) {
    x.value !== $ && (x.value = $);
  }
  function k({ height: x }) {
    w(r, x), _("size", x);
  }
  function p() {
    if (e.reveal !== true) return;
    const { direction: x, position: $, inflectionPoint: F } = a.scroll.value;
    w(o, x === "up" || $ - F < 100 || a.height.value - c.value - $ - r.value < 300);
  }
  function y(x) {
    m.value === true && w(o, true), n("focusin", x);
  }
  be(() => e.modelValue, (x) => {
    _("space", x), w(o, true), a.animate();
  }), be(s, (x) => {
    _("offset", x);
  }), be(() => e.reveal, (x) => {
    x === false && w(o, e.modelValue);
  }), be(o, (x) => {
    a.animate(), n("reveal", x);
  }), be([r, a.scroll, a.height], p), be(() => l.screen.height, (x) => {
    a.isContainer.value !== true && w(i, x);
  });
  const b = {};
  return a.instances.footer = b, e.modelValue === true && _("size", r.value), _("space", e.modelValue), _("offset", s.value), Ke(() => {
    a.instances.footer === b && (a.instances.footer = void 0, _("size", 0), _("offset", 0), _("space", false));
  }), () => {
    const x = qt(t.default, [d(Ul, { debounce: 0, onResize: k })]);
    return e.elevated === true && x.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), d("footer", { class: h.value, style: g.value, onFocusin: y }, x);
  };
} });
he({ name: "QForm", props: { autofocus: Boolean, noErrorFocus: Boolean, noResetFocus: Boolean, greedy: Boolean, onSubmit: Function }, emits: ["reset", "validationSuccess", "validationError"], setup(e, { slots: t, emit: n }) {
  const l = Se(), a = K(null);
  let r = 0;
  const o = [];
  function i(h) {
    const g = typeof h == "boolean" ? h : e.noErrorFocus !== true, _ = ++r, w = (y, b) => {
      n(`validation${y === true ? "Success" : "Error"}`, b);
    }, k = (y) => {
      const b = y.validate();
      return typeof b.then == "function" ? b.then((x) => ({ valid: x, comp: y }), (x) => ({ valid: false, comp: y, err: x })) : Promise.resolve({ valid: b, comp: y });
    };
    return (e.greedy === true ? Promise.all(o.map(k)).then((y) => y.filter((b) => b.valid !== true)) : o.reduce((y, b) => y.then(() => k(b).then((x) => {
      if (x.valid === false) return Promise.reject(x);
    })), Promise.resolve()).catch((y) => [y])).then((y) => {
      if (y === void 0 || y.length === 0) return _ === r && w(true), true;
      if (_ === r) {
        const { comp: b, err: x } = y[0];
        if (x !== void 0 && console.error(x), w(false, b), g === true) {
          const $ = y.find(({ comp: F }) => typeof F.focus == "function" && gl(F.$) === false);
          $ !== void 0 && $.comp.focus();
        }
      }
      return false;
    });
  }
  function u() {
    r++, o.forEach((h) => {
      typeof h.resetValidation == "function" && h.resetValidation();
    });
  }
  function c(h) {
    h !== void 0 && je(h);
    const g = r + 1;
    i().then((_) => {
      g === r && _ === true && (e.onSubmit !== void 0 ? n("submit", h) : (h == null ? void 0 : h.target) !== void 0 && typeof h.target.submit == "function" && h.target.submit());
    });
  }
  function s(h) {
    h !== void 0 && je(h), n("reset"), We(() => {
      u(), e.autofocus === true && e.noResetFocus !== true && f();
    });
  }
  function f() {
    Pa(() => {
      var _a2;
      if (a.value === null) return;
      (_a2 = a.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || a.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || a.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(a.value.querySelectorAll("[tabindex]"), (g) => g.tabIndex !== -1)) == null ? void 0 : _a2.focus({ preventScroll: true });
    });
  }
  hn(um, { bindComponent(h) {
    o.push(h);
  }, unbindComponent(h) {
    const g = o.indexOf(h);
    g !== -1 && o.splice(g, 1);
  } });
  let m = false;
  return Vn(() => {
    m = true;
  }), Sl(() => {
    m === true && e.autofocus === true && f();
  }), ft(() => {
    e.autofocus === true && f();
  }), Object.assign(l.proxy, { validate: i, resetValidation: u, submit: c, reset: s, focus: f, getValidationComponents: () => o }), () => d("form", { class: "q-form", ref: a, onSubmit: c, onReset: s }, Pe(t.default));
} });
var m1 = he({ name: "QHeader", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, revealOffset: { type: Number, default: 250 }, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = Tt(Gl, ot);
  if (a === ot) return console.error("QHeader needs to be child of QLayout"), ot;
  const r = K(parseInt(e.heightHint, 10)), o = K(true), i = v(() => e.reveal === true || a.view.value.indexOf("H") !== -1 || l.platform.is.ios && a.isContainer.value === true), u = v(() => {
    if (e.modelValue !== true) return 0;
    if (i.value === true) return o.value === true ? r.value : 0;
    const p = r.value - a.scroll.value.position;
    return p > 0 ? p : 0;
  }), c = v(() => e.modelValue !== true || i.value === true && o.value !== true), s = v(() => e.modelValue === true && c.value === true && e.reveal === true), f = v(() => "q-header q-layout__section--marginal " + (i.value === true ? "fixed" : "absolute") + "-top" + (e.bordered === true ? " q-header--bordered" : "") + (c.value === true ? " q-header--hidden" : "") + (e.modelValue !== true ? " q-layout--prevent-focus" : "")), m = v(() => {
    const p = a.rows.value.top, y = {};
    return p[0] === "l" && a.left.space === true && (y[l.lang.rtl === true ? "right" : "left"] = `${a.left.size}px`), p[2] === "r" && a.right.space === true && (y[l.lang.rtl === true ? "left" : "right"] = `${a.right.size}px`), y;
  });
  function h(p, y) {
    a.update("header", p, y);
  }
  function g(p, y) {
    p.value !== y && (p.value = y);
  }
  function _({ height: p }) {
    g(r, p), h("size", p);
  }
  function w(p) {
    s.value === true && g(o, true), n("focusin", p);
  }
  be(() => e.modelValue, (p) => {
    h("space", p), g(o, true), a.animate();
  }), be(u, (p) => {
    h("offset", p);
  }), be(() => e.reveal, (p) => {
    p === false && g(o, e.modelValue);
  }), be(o, (p) => {
    a.animate(), n("reveal", p);
  }), be(a.scroll, (p) => {
    e.reveal === true && g(o, p.direction === "up" || p.position <= e.revealOffset || p.position - p.inflectionPoint < 100);
  });
  const k = {};
  return a.instances.header = k, e.modelValue === true && h("size", r.value), h("space", e.modelValue), h("offset", u.value), Ke(() => {
    a.instances.header === k && (a.instances.header = void 0, h("size", 0), h("offset", 0), h("space", false));
  }), () => {
    const p = Er(t.default, []);
    return e.elevated === true && p.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), p.push(d(Ul, { debounce: 0, onResize: _ })), d("header", { class: f.value, style: m.value, onFocusin: w }, p);
  };
} }), Ns = { ratio: [String, Number] };
function Hs(e, t) {
  return v(() => {
    const n = Number(e.ratio || (t !== void 0 ? t.value : void 0));
    return isNaN(n) !== true && n > 0 ? { paddingBottom: `${100 / n}%` } : null;
  });
}
var h1 = 1.7778;
he({ name: "QImg", props: { ...Ns, src: String, srcset: String, sizes: String, alt: String, crossorigin: String, decoding: String, referrerpolicy: String, draggable: Boolean, loading: { type: String, default: "lazy" }, loadingShowDelay: { type: [Number, String], default: 0 }, fetchpriority: { type: String, default: "auto" }, width: String, height: String, initialRatio: { type: [Number, String], default: h1 }, placeholderSrc: String, errorSrc: String, fit: { type: String, default: "cover" }, position: { type: String, default: "50% 50%" }, imgClass: String, imgStyle: Object, noSpinner: Boolean, noNativeMenu: Boolean, noTransition: Boolean, spinnerColor: String, spinnerSize: String }, emits: ["load", "error"], setup(e, { slots: t, emit: n }) {
  const l = K(e.initialRatio), a = Hs(e, l), r = Se(), { registerTimeout: o, removeTimeout: i } = Zn(), { registerTimeout: u, removeTimeout: c } = Zn(), s = v(() => e.placeholderSrc !== void 0 ? { src: e.placeholderSrc } : null), f = v(() => e.errorSrc !== void 0 ? { src: e.errorSrc, __qerror: true } : null), m = [K(null), K(s.value)], h = K(0), g = K(false), _ = K(false), w = v(() => `q-img q-img--${e.noNativeMenu === true ? "no-" : ""}menu`), k = v(() => ({ width: e.width, height: e.height })), p = v(() => `q-img__image ${e.imgClass !== void 0 ? e.imgClass + " " : ""}q-img__image--with${e.noTransition === true ? "out" : ""}-transition q-img__image--`), y = v(() => ({ ...e.imgStyle, objectFit: e.fit, objectPosition: e.position }));
  function b() {
    if (c(), e.loadingShowDelay === 0) {
      g.value = true;
      return;
    }
    u(() => {
      g.value = true;
    }, e.loadingShowDelay);
  }
  function x() {
    c(), g.value = false;
  }
  function $({ target: q }) {
    gl(r) === false && (i(), l.value = q.naturalHeight === 0 ? 0.5 : q.naturalWidth / q.naturalHeight, F(q, 1));
  }
  function F(q, M) {
    M === 1e3 || gl(r) === true || (q.complete === true ? D(q) : o(() => {
      F(q, M + 1);
    }, 50));
  }
  function D(q) {
    gl(r) !== true && (h.value = h.value ^ 1, m[h.value].value = null, x(), q.getAttribute("__qerror") !== "true" && (_.value = false), n("load", q.currentSrc || q.src));
  }
  function B(q) {
    i(), x(), _.value = true, m[h.value].value = f.value, m[h.value ^ 1].value = s.value, n("error", q);
  }
  function P(q) {
    const M = m[q].value, C = { key: "img_" + q, class: p.value, style: y.value, alt: e.alt, crossorigin: e.crossorigin, decoding: e.decoding, referrerpolicy: e.referrerpolicy, height: e.height, width: e.width, loading: e.loading, fetchpriority: e.fetchpriority, "aria-hidden": "true", draggable: e.draggable, ...M };
    return h.value === q ? Object.assign(C, { class: C.class + "current", onLoad: $, onError: B }) : C.class += "loaded", d("div", { class: "q-img__container absolute-full", key: "img" + q }, d("img", C));
  }
  function I() {
    return g.value === false ? d("div", { key: "content", class: "q-img__content absolute-full q-anchor--skip" }, Pe(t[_.value === true ? "error" : "default"])) : d("div", { key: "loading", class: "q-img__loading absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : e.noSpinner === true ? void 0 : [d(_n, { color: e.spinnerColor, size: e.spinnerSize })]);
  }
  {
    let q = function() {
      be(() => e.src || e.srcset || e.sizes ? { src: e.src, srcset: e.srcset, sizes: e.sizes } : null, (M) => {
        i(), _.value = false, M === null ? (x(), m[h.value ^ 1].value = s.value) : b(), m[h.value].value = M;
      }, { immediate: true });
    };
    nn.value === true ? ft(q) : q();
  }
  return () => {
    const q = [];
    return a.value !== null && q.push(d("div", { key: "filler", style: a.value })), m[0].value !== null && q.push(P(0)), m[1].value !== null && q.push(P(1)), q.push(d(Ft, { name: "q-transition--fade" }, I)), d("div", { key: "main", class: w.value, style: k.value, role: "img", "aria-label": e.alt }, q);
  };
} });
var { passive: Al } = dt;
he({ name: "QInfiniteScroll", props: { offset: { type: Number, default: 500 }, debounce: { type: [String, Number], default: 100 }, scrollTarget: Xl, initialIndex: { type: Number, default: 0 }, disable: Boolean, reverse: Boolean }, emits: ["load"], setup(e, { slots: t, emit: n }) {
  const l = K(false), a = K(true), r = K(null), o = K(null);
  let i = e.initialIndex, u, c;
  const s = v(() => "q-infinite-scroll__loading" + (l.value === true ? "" : " invisible"));
  function f() {
    if (e.disable === true || l.value === true || a.value === false) return;
    const F = Ir(u), D = bl(u), B = Sa(u);
    e.reverse === false ? Math.round(D + B + e.offset) >= Math.round(F) && m() : Math.round(D) <= e.offset && m();
  }
  function m() {
    if (e.disable === true || l.value === true || a.value === false) return;
    i++, l.value = true;
    const F = Ir(u);
    n("load", i, (D) => {
      a.value === true && (l.value = false, We(() => {
        if (e.reverse === true) {
          const B = Ir(u), P = bl(u), I = B - F;
          pa(u, P + I);
        }
        D === true ? _() : r.value && r.value.closest("body") && c();
      }));
    });
  }
  function h() {
    i = 0;
  }
  function g() {
    a.value === false && (a.value = true, u.addEventListener("scroll", c, Al)), f();
  }
  function _() {
    var _a2;
    a.value === true && (a.value = false, l.value = false, u.removeEventListener("scroll", c, Al), (_a2 = c == null ? void 0 : c.cancel) == null ? void 0 : _a2.call(c));
  }
  function w() {
    if (u && a.value === true && u.removeEventListener("scroll", c, Al), u = zn(r.value, e.scrollTarget), a.value === true) {
      if (u.addEventListener("scroll", c, Al), e.reverse === true) {
        const F = Ir(u), D = Sa(u);
        pa(u, F - D);
      }
      f();
    }
  }
  function k(F) {
    i = F;
  }
  function p(F) {
    F = parseInt(F, 10);
    const D = c;
    c = F <= 0 ? f : Ea(f, isNaN(F) === true ? 100 : F), u && a.value === true && (D !== void 0 && u.removeEventListener("scroll", D, Al), u.addEventListener("scroll", c, Al));
  }
  function y(F) {
    if (b.value === true) {
      if (o.value === null) {
        F !== true && We(() => {
          y(true);
        });
        return;
      }
      const D = `${l.value === true ? "un" : ""}pauseAnimations`;
      Array.from(o.value.getElementsByTagName("svg")).forEach((B) => {
        B[D]();
      });
    }
  }
  const b = v(() => e.disable !== true && a.value === true);
  be([l, b], () => {
    y();
  }), be(() => e.disable, (F) => {
    F === true ? _() : g();
  }), be(() => e.reverse, () => {
    l.value === false && a.value === true && f();
  }), be(() => e.scrollTarget, w), be(() => e.debounce, p);
  let x = false;
  Sl(() => {
    x !== false && u && pa(u, x);
  }), Vn(() => {
    x = u ? bl(u) : false;
  }), Ke(() => {
    a.value === true && u.removeEventListener("scroll", c, Al);
  }), ft(() => {
    p(e.debounce), w(), l.value === false && y();
  });
  const $ = Se();
  return Object.assign($.proxy, { poll: () => {
    c == null ? void 0 : c();
  }, trigger: m, stop: _, reset: h, resume: g, setIndex: k, updateScrollTarget: w }), () => {
    const F = Er(t.default, []);
    return b.value === true && F[e.reverse === false ? "push" : "unshift"](d("div", { ref: o, class: s.value }, Pe(t.loading))), d("div", { class: "q-infinite-scroll", ref: r }, F);
  };
} });
he({ name: "QInnerLoading", props: { ...nt, ...Il, showing: Boolean, color: String, size: { type: [String, Number], default: "42px" }, label: String, labelClass: String, labelStyle: [String, Array, Object] }, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), { transitionProps: a, transitionStyle: r } = oi(e), o = v(() => "q-inner-loading q--avoid-card-border absolute-full column flex-center" + (l.value === true ? " q-inner-loading--dark" : "")), i = v(() => "q-inner-loading__label" + (e.labelClass !== void 0 ? ` ${e.labelClass}` : ""));
  function u() {
    const s = [d(_n, { size: e.size, color: e.color })];
    return e.label !== void 0 && s.push(d("div", { class: i.value, style: e.labelStyle }, [e.label])), s;
  }
  function c() {
    return e.showing === true ? d("div", { class: o.value, style: r.value }, t.default !== void 0 ? t.default() : u()) : null;
  }
  return () => d(Ft, a.value, c);
} });
var qd = { date: "####/##/##", datetime: "####/##/## ##:##", time: "##:##", fulltime: "##:##:##", phone: "(###) ### - ####", card: "#### #### #### ####" }, Oo = { "#": { pattern: "[\\d]", negate: "[^\\d]" }, S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" }, N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" }, A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleLowerCase() }, X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleLowerCase() } }, Th = Object.keys(Oo);
Th.forEach((e) => {
  Oo[e].regex = new RegExp(Oo[e].pattern);
});
var g1 = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + Th.join("") + "])|(.)", "g"), Td = /[.*+?^${}()|[\]\\]/g, Lt = "", b1 = { mask: String, reverseFillMask: Boolean, fillMask: [Boolean, String], unmaskedValue: Boolean };
function y1(e, t, n, l) {
  let a, r, o, i, u, c;
  const s = K(null), f = K(h());
  function m() {
    return e.autogrow === true || ["textarea", "text", "search", "url", "tel", "password"].includes(e.type);
  }
  be(() => e.type + e.autogrow, _), be(() => e.mask, (B) => {
    if (B !== void 0) w(f.value, true);
    else {
      const P = F(f.value);
      _(), e.modelValue !== P && t("update:modelValue", P);
    }
  }), be(() => e.fillMask + e.reverseFillMask, () => {
    s.value === true && w(f.value, true);
  }), be(() => e.unmaskedValue, () => {
    s.value === true && w(f.value);
  });
  function h() {
    if (_(), s.value === true) {
      const B = x(F(e.modelValue));
      return e.fillMask !== false ? D(B) : B;
    }
    return e.modelValue;
  }
  function g(B) {
    if (B < a.length) return a.slice(-B);
    let P = "", I = a;
    const q = I.indexOf(Lt);
    if (q !== -1) {
      for (let M = B - I.length; M > 0; M--) P += Lt;
      I = I.slice(0, q) + P + I.slice(q);
    }
    return I;
  }
  function _() {
    if (s.value = e.mask !== void 0 && e.mask.length !== 0 && m(), s.value === false) {
      i = void 0, a = "", r = "";
      return;
    }
    const B = qd[e.mask] === void 0 ? e.mask : qd[e.mask], P = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_", I = P.replace(Td, "\\$&"), q = [], M = [], C = [];
    let H = e.reverseFillMask === true, Y = "", L = "";
    B.replace(g1, (W, T, ee, G, fe) => {
      if (G !== void 0) {
        const R = Oo[G];
        C.push(R), L = R.negate, H === true && (M.push("(?:" + L + "+)?(" + R.pattern + "+)?(?:" + L + "+)?(" + R.pattern + "+)?"), H = false), M.push("(?:" + L + "+)?(" + R.pattern + ")?");
      } else if (ee !== void 0) Y = "\\" + (ee === "\\" ? "" : ee), C.push(ee), q.push("([^" + Y + "]+)?" + Y + "?");
      else {
        const R = T !== void 0 ? T : fe;
        Y = R === "\\" ? "\\\\\\\\" : R.replace(Td, "\\\\$&"), C.push(R), q.push("([^" + Y + "]+)?" + Y + "?");
      }
    });
    const O = new RegExp("^" + q.join("") + "(" + (Y === "" ? "." : "[^" + Y + "]") + "+)?" + (Y === "" ? "" : "[" + Y + "]*") + "$"), U = M.length - 1, ye = M.map((W, T) => T === 0 && e.reverseFillMask === true ? new RegExp("^" + I + "*" + W) : T === U ? new RegExp("^" + W + "(" + (L === "" ? "." : L) + "+)?" + (e.reverseFillMask === true ? "$" : I + "*")) : new RegExp("^" + W));
    o = C, i = (W) => {
      const T = O.exec(e.reverseFillMask === true ? W : W.slice(0, C.length + 1));
      T !== null && (W = T.slice(1).join(""));
      const ee = [], G = ye.length;
      for (let fe = 0, R = W; fe < G; fe++) {
        const A = ye[fe].exec(R);
        if (A === null) break;
        R = R.slice(A.shift().length), ee.push(...A);
      }
      return ee.length !== 0 ? ee.join("") : W;
    }, a = C.map((W) => typeof W == "string" ? W : Lt).join(""), r = a.split(Lt).join(P);
  }
  function w(B, P, I) {
    const q = l.value, M = q.selectionEnd, C = q.value.length - M, H = F(B);
    P === true && _();
    const Y = x(H), L = e.fillMask !== false ? D(Y) : Y, O = f.value !== L;
    q.value !== L && (q.value = L), O === true && (f.value = L), document.activeElement === q && We(() => {
      if (L === r) {
        const ye = e.reverseFillMask === true ? r.length : 0;
        q.setSelectionRange(ye, ye, "forward");
        return;
      }
      if (I === "insertFromPaste" && e.reverseFillMask !== true) {
        const ye = q.selectionEnd;
        let W = M - 1;
        for (let T = u; T <= W && T < ye; T++) a[T] !== Lt && W++;
        p.right(q, W);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(I) !== -1) {
        const ye = e.reverseFillMask === true ? M === 0 ? L.length > Y.length ? 1 : 0 : Math.max(0, L.length - (L === r ? 0 : Math.min(Y.length, C) + 1)) + 1 : M;
        q.setSelectionRange(ye, ye, "forward");
        return;
      }
      if (e.reverseFillMask === true) if (O === true) {
        const ye = Math.max(0, L.length - (L === r ? 0 : Math.min(Y.length, C + 1)));
        ye === 1 && M === 1 ? q.setSelectionRange(ye, ye, "forward") : p.rightReverse(q, ye);
      } else {
        const ye = L.length - C;
        q.setSelectionRange(ye, ye, "backward");
      }
      else if (O === true) {
        const ye = Math.max(0, a.indexOf(Lt), Math.min(Y.length, M) - 1);
        p.right(q, ye);
      } else {
        const ye = M - 1;
        p.right(q, ye);
      }
    });
    const U = e.unmaskedValue === true ? F(L) : L;
    String(e.modelValue) !== U && (e.modelValue !== null || U !== "") && n(U, true);
  }
  function k(B, P, I) {
    const q = x(F(B.value));
    P = Math.max(0, a.indexOf(Lt), Math.min(q.length, P)), u = P, B.setSelectionRange(P, I, "forward");
  }
  const p = { left(B, P) {
    const I = a.slice(P - 1).indexOf(Lt) === -1;
    let q = Math.max(0, P - 1);
    for (; q >= 0; q--) if (a[q] === Lt) {
      P = q, I === true && P++;
      break;
    }
    if (q < 0 && a[P] !== void 0 && a[P] !== Lt) return p.right(B, 0);
    P >= 0 && B.setSelectionRange(P, P, "backward");
  }, right(B, P) {
    const I = B.value.length;
    let q = Math.min(I, P + 1);
    for (; q <= I; q++) if (a[q] === Lt) {
      P = q;
      break;
    } else a[q - 1] === Lt && (P = q);
    if (q > I && a[P - 1] !== void 0 && a[P - 1] !== Lt) return p.left(B, I);
    B.setSelectionRange(P, P, "forward");
  }, leftReverse(B, P) {
    const I = g(B.value.length);
    let q = Math.max(0, P - 1);
    for (; q >= 0; q--) if (I[q - 1] === Lt) {
      P = q;
      break;
    } else if (I[q] === Lt && (P = q, q === 0)) break;
    if (q < 0 && I[P] !== void 0 && I[P] !== Lt) return p.rightReverse(B, 0);
    P >= 0 && B.setSelectionRange(P, P, "backward");
  }, rightReverse(B, P) {
    const I = B.value.length, q = g(I), M = q.slice(0, P + 1).indexOf(Lt) === -1;
    let C = Math.min(I, P + 1);
    for (; C <= I; C++) if (q[C - 1] === Lt) {
      P = C, P > 0 && M === true && P--;
      break;
    }
    if (C > I && q[P - 1] !== void 0 && q[P - 1] !== Lt) return p.leftReverse(B, I);
    B.setSelectionRange(P, P, "forward");
  } };
  function y(B) {
    t("click", B), c = void 0;
  }
  function b(B) {
    if (t("keydown", B), Yl(B) === true || B.altKey === true) return;
    const P = l.value, I = P.selectionStart, q = P.selectionEnd;
    if (B.shiftKey || (c = void 0), B.keyCode === 37 || B.keyCode === 39) {
      B.shiftKey && c === void 0 && (c = P.selectionDirection === "forward" ? I : q);
      const M = p[(B.keyCode === 39 ? "right" : "left") + (e.reverseFillMask === true ? "Reverse" : "")];
      if (B.preventDefault(), M(P, c === I ? q : I), B.shiftKey) {
        const C = P.selectionStart;
        P.setSelectionRange(Math.min(c, C), Math.max(c, C), "forward");
      }
    } else B.keyCode === 8 && e.reverseFillMask !== true && I === q ? (p.left(P, I), P.setSelectionRange(P.selectionStart, q, "backward")) : B.keyCode === 46 && e.reverseFillMask === true && I === q && (p.rightReverse(P, q), P.setSelectionRange(I, P.selectionEnd, "forward"));
  }
  function x(B) {
    if (B == null || B === "") return "";
    if (e.reverseFillMask === true) return $(B);
    const P = o;
    let I = 0, q = "";
    for (let M = 0; M < P.length; M++) {
      const C = B[I], H = P[M];
      if (typeof H == "string") q += H, C === H && I++;
      else if (C !== void 0 && H.regex.test(C)) q += H.transform !== void 0 ? H.transform(C) : C, I++;
      else return q;
    }
    return q;
  }
  function $(B) {
    const P = o, I = a.indexOf(Lt);
    let q = B.length - 1, M = "";
    for (let C = P.length - 1; C >= 0 && q !== -1; C--) {
      const H = P[C];
      let Y = B[q];
      if (typeof H == "string") M = H + M, Y === H && q--;
      else if (Y !== void 0 && H.regex.test(Y)) do
        M = (H.transform !== void 0 ? H.transform(Y) : Y) + M, q--, Y = B[q];
      while (I === C && Y !== void 0 && H.regex.test(Y));
      else return M;
    }
    return M;
  }
  function F(B) {
    return typeof B != "string" || i === void 0 ? typeof B == "number" ? i("" + B) : B : i(B);
  }
  function D(B) {
    return r.length - B.length <= 0 ? B : e.reverseFillMask === true && B.length !== 0 ? r.slice(0, -B.length) + B : B + r.slice(B.length);
  }
  return { innerValue: f, hasMask: s, moveCursorForPaste: k, updateMaskValue: w, onMaskedKeydown: b, onMaskedClick: y };
}
var p1 = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/, _1 = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u, w1 = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/, S1 = /[a-z0-9_ -]$/i;
function Mh(e) {
  return function(n) {
    if (n.type === "compositionend" || n.type === "change") {
      if (n.target.qComposing !== true) return;
      n.target.qComposing = false, e(n);
    } else n.type === "compositionupdate" && n.target.qComposing !== true && typeof n.data == "string" && (ze.is.firefox === true ? S1.test(n.data) === false : p1.test(n.data) === true || _1.test(n.data) === true || w1.test(n.data) === true) === true && (n.target.qComposing = true);
  };
}
var Eh = he({ name: "QInput", inheritAttrs: false, props: { ...di, ...b1, ...wn, modelValue: [String, Number, FileList], shadowText: String, type: { type: String, default: "text" }, debounce: [String, Number], autogrow: Boolean, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...fi, "paste", "change", "keydown", "click", "animationend"], setup(e, { emit: t, attrs: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = {};
  let o = NaN, i, u, c = null, s;
  const f = K(null), m = Ms(e), { innerValue: h, hasMask: g, moveCursorForPaste: _, updateMaskValue: w, onMaskedKeydown: k, onMaskedClick: p } = y1(e, t, Y, f), y = qh(e, true), b = v(() => Kl(h.value)), x = Mh(C), $ = vi({ changeEvent: true }), F = v(() => e.type === "textarea" || e.autogrow === true), D = v(() => F.value === true || ["text", "search", "url", "tel", "password"].includes(e.type)), B = v(() => {
    const T = { ...$.splitAttrs.listeners.value, onInput: C, onPaste: M, onChange: O, onBlur: U, onFocus: wt };
    return T.onCompositionstart = T.onCompositionupdate = T.onCompositionend = x, g.value === true && (T.onKeydown = k, T.onClick = p), e.autogrow === true && (T.onAnimationend = H), T;
  }), P = v(() => {
    const T = { tabindex: 0, "data-autofocus": e.autofocus === true || void 0, rows: e.type === "textarea" ? 6 : void 0, "aria-label": e.label, name: m.value, ...$.splitAttrs.attributes.value, id: $.targetUid.value, maxlength: e.maxlength, disabled: e.disable === true, readonly: e.readonly === true };
    return F.value === false && (T.type = e.type), e.autogrow === true && (T.rows = 1), T;
  });
  be(() => e.type, () => {
    f.value && (f.value.value = e.modelValue);
  }), be(() => e.modelValue, (T) => {
    if (g.value === true) {
      if (u === true && (u = false, String(T) === o)) return;
      w(T);
    } else h.value !== T && (h.value = T, e.type === "number" && r.hasOwnProperty("value") === true && (i === true ? i = false : delete r.value));
    e.autogrow === true && We(L);
  }), be(() => e.autogrow, (T) => {
    T === true ? We(L) : f.value !== null && n.rows > 0 && (f.value.style.height = "auto");
  }), be(() => e.dense, () => {
    e.autogrow === true && We(L);
  });
  function I() {
    Pa(() => {
      const T = document.activeElement;
      f.value !== null && f.value !== T && (T === null || T.id !== $.targetUid.value) && f.value.focus({ preventScroll: true });
    });
  }
  function q() {
    var _a2;
    (_a2 = f.value) == null ? void 0 : _a2.select();
  }
  function M(T) {
    if (g.value === true && e.reverseFillMask !== true) {
      const ee = T.target;
      _(ee, ee.selectionStart, ee.selectionEnd);
    }
    t("paste", T);
  }
  function C(T) {
    if (!T || !T.target) return;
    if (e.type === "file") {
      t("update:modelValue", T.target.files);
      return;
    }
    const ee = T.target.value;
    if (T.target.qComposing === true) {
      r.value = ee;
      return;
    }
    if (g.value === true) w(ee, false, T.inputType);
    else if (Y(ee), D.value === true && T.target === document.activeElement) {
      const { selectionStart: G, selectionEnd: fe } = T.target;
      G !== void 0 && fe !== void 0 && We(() => {
        T.target === document.activeElement && ee.indexOf(T.target.value) === 0 && T.target.setSelectionRange(G, fe);
      });
    }
    e.autogrow === true && L();
  }
  function H(T) {
    t("animationend", T), L();
  }
  function Y(T, ee) {
    s = () => {
      c = null, e.type !== "number" && r.hasOwnProperty("value") === true && delete r.value, e.modelValue !== T && o !== T && (o = T, ee === true && (u = true), t("update:modelValue", T), We(() => {
        o === T && (o = NaN);
      })), s = void 0;
    }, e.type === "number" && (i = true, r.value = T), e.debounce !== void 0 ? (c !== null && clearTimeout(c), r.value = T, c = setTimeout(s, e.debounce)) : s();
  }
  function L() {
    requestAnimationFrame(() => {
      const T = f.value;
      if (T !== null) {
        const ee = T.parentNode.style, { scrollTop: G } = T, { overflowY: fe, maxHeight: R } = a.platform.is.firefox === true ? {} : window.getComputedStyle(T), A = fe !== void 0 && fe !== "scroll";
        A === true && (T.style.overflowY = "hidden"), ee.marginBottom = T.scrollHeight - 1 + "px", T.style.height = "1px", T.style.height = T.scrollHeight + "px", A === true && (T.style.overflowY = parseInt(R, 10) < T.scrollHeight ? "auto" : "hidden"), ee.marginBottom = "", T.scrollTop = G;
      }
    });
  }
  function O(T) {
    x(T), c !== null && (clearTimeout(c), c = null), s == null ? void 0 : s(), t("change", T.target.value);
  }
  function U(T) {
    T !== void 0 && wt(T), c !== null && (clearTimeout(c), c = null), s == null ? void 0 : s(), i = false, u = false, delete r.value, e.type !== "file" && setTimeout(() => {
      f.value !== null && (f.value.value = h.value !== void 0 ? h.value : "");
    });
  }
  function ye() {
    return r.hasOwnProperty("value") === true ? r.value : h.value !== void 0 ? h.value : "";
  }
  Ke(() => {
    U();
  }), ft(() => {
    e.autogrow === true && L();
  }), Object.assign($, { innerValue: h, fieldClass: v(() => `q-${F.value === true ? "textarea" : "input"}` + (e.autogrow === true ? " q-textarea--autogrow" : "")), hasShadow: v(() => e.type !== "file" && typeof e.shadowText == "string" && e.shadowText.length !== 0), inputRef: f, emitValue: Y, hasValue: b, floatingLabel: v(() => b.value === true && (e.type !== "number" || isNaN(h.value) === false) || Kl(e.displayValue)), getControl: () => d(F.value === true ? "textarea" : "input", { ref: f, class: ["q-field__native q-placeholder", e.inputClass], style: e.inputStyle, ...P.value, ...B.value, ...e.type !== "file" ? { value: ye() } : y.value }), getShadowControl: () => d("div", { class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (F.value === true ? "" : " text-no-wrap") }, [d("span", { class: "invisible" }, ye()), d("span", e.shadowText)]) });
  const W = mi($);
  return Object.assign(l, { focus: I, select: q, getNativeElement: () => f.value }), Ot(l, "nativeEl", () => f.value), W;
} }), Md = { threshold: 0, root: null, rootMargin: "0px" };
function Ed(e, t, n) {
  var _a2;
  let l, a, r;
  typeof n == "function" ? (l = n, a = Md, r = t.cfg === void 0) : (l = n.handler, a = Object.assign({}, Md, n.cfg), r = t.cfg === void 0 || kn(t.cfg, a) === false), t.handler !== l && (t.handler = l), r === true && (t.cfg = a, (_a2 = t.observer) == null ? void 0 : _a2.unobserve(e), t.observer = new IntersectionObserver(([o]) => {
    if (typeof t.handler == "function") {
      if (o.rootBounds === null && document.body.contains(e) === true) {
        t.observer.unobserve(e), t.observer.observe(e);
        return;
      }
      (t.handler(o, t.observer) === false || t.once === true && o.isIntersecting === true) && Ah(e);
    }
  }, a), t.observer.observe(e));
}
function Ah(e) {
  var _a2;
  const t = e.__qvisible;
  t !== void 0 && ((_a2 = t.observer) == null ? void 0 : _a2.unobserve(e), delete e.__qvisible);
}
var x1 = Rn({ name: "intersection", mounted(e, { modifiers: t, value: n }) {
  const l = { once: t.once === true };
  Ed(e, l, n), e.__qvisible = l;
}, updated(e, t) {
  const n = e.__qvisible;
  n !== void 0 && Ed(e, n, t.value);
}, beforeUnmount: Ah });
he({ name: "QIntersection", props: { tag: { type: String, default: "div" }, once: Boolean, transition: String, transitionDuration: { type: [String, Number], default: 300 }, ssrPrerender: Boolean, margin: String, threshold: [Number, Array], root: { default: null }, disable: Boolean, onVisibility: Function }, setup(e, { slots: t, emit: n }) {
  const l = K(nn.value === true ? e.ssrPrerender : false), a = v(() => e.root !== void 0 || e.margin !== void 0 || e.threshold !== void 0 ? { handler: u, cfg: { root: e.root, rootMargin: e.margin, threshold: e.threshold } } : u), r = v(() => e.disable !== true && (nn.value !== true || e.once !== true || e.ssrPrerender !== true)), o = v(() => [[x1, a.value, void 0, { once: e.once }]]), i = v(() => `--q-transition-duration: ${e.transitionDuration}ms`);
  function u(s) {
    l.value !== s.isIntersecting && (l.value = s.isIntersecting, e.onVisibility !== void 0 && n("visibility", l.value));
  }
  function c() {
    if (l.value === true) return [d("div", { key: "content", style: i.value }, Pe(t.default))];
    if (t.hidden !== void 0) return [d("div", { key: "hidden", style: i.value }, t.hidden())];
  }
  return () => {
    const s = e.transition ? [d(Ft, { name: "q-transition--" + e.transition }, c)] : c();
    return pn(e.tag, { class: "q-intersection" }, s, "main", r.value, () => o.value);
  };
} });
var C1 = ["ul", "ol"], Rh = he({ name: "QList", props: { ...nt, bordered: Boolean, dense: Boolean, separator: Boolean, padding: Boolean, tag: { type: String, default: "div" } }, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), a = v(() => C1.includes(e.tag) ? null : "list"), r = v(() => "q-list" + (e.bordered === true ? " q-list--bordered" : "") + (e.dense === true ? " q-list--dense" : "") + (e.separator === true ? " q-list--separator" : "") + (l.value === true ? " q-list--dark" : "") + (e.padding === true ? " q-list--padding" : ""));
  return () => d(e.tag, { class: r.value, role: a.value }, Pe(t.default));
} }), Ad = [34, 37, 40, 33, 39, 38], k1 = Object.keys(Os);
he({ name: "QKnob", props: { ...wn, ...Os, modelValue: { type: Number, required: true }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, tabindex: { type: [Number, String], default: 0 }, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change", "dragValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = K(e.modelValue), o = K(false), i = v(() => isNaN(e.innerMin) === true || e.innerMin < e.min ? e.min : e.innerMin), u = v(() => isNaN(e.innerMax) === true || e.innerMax > e.max ? e.max : e.innerMax);
  let c;
  function s() {
    r.value = e.modelValue === null ? i.value : ct(e.modelValue, i.value, u.value), I(true);
  }
  be(() => `${e.modelValue}|${i.value}|${u.value}`, s), s();
  const f = v(() => e.disable === false && e.readonly === false), m = v(() => "q-knob non-selectable" + (f.value === true ? " q-knob--editable" : e.disable === true ? " disabled" : "")), h = v(() => (String(e.step).trim().split(".")[1] || "").length), g = v(() => e.step === 0 ? 1 : e.step), _ = v(() => e.instantFeedback === true || o.value === true), w = a.platform.is.mobile === true ? v(() => f.value === true ? { onClick: F } : {}) : v(() => f.value === true ? { onMousedown: $, onClick: F, onKeydown: D, onKeyup: P } : {}), k = v(() => f.value === true ? { tabindex: e.tabindex } : { [`aria-${e.disable === true ? "disabled" : "readonly"}`]: "true" }), p = v(() => {
    const C = {};
    return k1.forEach((H) => {
      C[H] = e[H];
    }), C;
  });
  function y(C) {
    C.isFinal ? (B(C.evt, true), o.value = false) : (C.isFirst && (x(), o.value = true), B(C.evt));
  }
  const b = v(() => [[gn, y, void 0, { prevent: true, stop: true, mouse: true }]]);
  function x() {
    const { top: C, left: H, width: Y, height: L } = l.$el.getBoundingClientRect();
    c = { top: C + L / 2, left: H + Y / 2 };
  }
  function $(C) {
    x(), B(C);
  }
  function F(C) {
    x(), B(C, true);
  }
  function D(C) {
    if (Ad.includes(C.keyCode) === false) return;
    je(C);
    const H = ([34, 33].includes(C.keyCode) ? 10 : 1) * g.value, Y = [34, 37, 40].includes(C.keyCode) ? -H : H;
    r.value = ct(parseFloat((r.value + Y).toFixed(h.value)), i.value, u.value), I();
  }
  function B(C, H) {
    const Y = en(C), L = Math.abs(Y.top - c.top), O = Math.sqrt(L ** 2 + Math.abs(Y.left - c.left) ** 2);
    let U = Math.asin(L / O) * (180 / Math.PI);
    Y.top < c.top ? U = c.left < Y.left ? 90 - U : 270 + U : U = c.left < Y.left ? U + 90 : 270 - U, a.lang.rtl === true ? U = Co(-U - e.angle, 0, 360) : e.angle && (U = Co(U - e.angle, 0, 360)), e.reverse === true && (U = 360 - U);
    let ye = e.min + U / 360 * (e.max - e.min);
    if (g.value !== 0) {
      const W = ye % g.value;
      ye = ye - W + (Math.abs(W) >= g.value / 2 ? (W < 0 ? -1 : 1) * g.value : 0), ye = parseFloat(ye.toFixed(h.value));
    }
    ye = ct(ye, i.value, u.value), n("dragValue", ye), r.value !== ye && (r.value = ye), I(H);
  }
  function P(C) {
    Ad.includes(C.keyCode) && I(true);
  }
  function I(C) {
    e.modelValue !== r.value && n("update:modelValue", r.value), C === true && n("change", r.value);
  }
  const q = $r(e);
  function M() {
    return d("input", q.value);
  }
  return () => {
    const C = { class: m.value, role: "slider", "aria-valuemin": i.value, "aria-valuemax": u.value, "aria-valuenow": e.modelValue, ...k.value, ...p.value, value: r.value, instantFeedback: _.value, ...w.value }, H = { default: t.default };
    return f.value === true && e.name !== void 0 && (H.internal = M), pn(Qm, C, H, "knob", f.value, () => b.value);
  };
} });
var { passive: Rd } = dt, q1 = ["both", "horizontal", "vertical"], $h = he({ name: "QScrollObserver", props: { axis: { type: String, validator: (e) => q1.includes(e), default: "vertical" }, debounce: [String, Number], scrollTarget: Xl }, emits: ["scroll"], setup(e, { emit: t }) {
  const n = { position: { top: 0, left: 0 }, direction: "down", directionChanged: false, delta: { top: 0, left: 0 }, inflectionPoint: { top: 0, left: 0 } };
  let l = null, a, r;
  be(() => e.scrollTarget, () => {
    u(), i();
  });
  function o() {
    l == null ? void 0 : l();
    const f = Math.max(0, bl(a)), m = ii(a), h = { top: f - n.position.top, left: m - n.position.left };
    if (e.axis === "vertical" && h.top === 0 || e.axis === "horizontal" && h.left === 0) return;
    const g = Math.abs(h.top) >= Math.abs(h.left) ? h.top < 0 ? "up" : "down" : h.left < 0 ? "left" : "right";
    n.position = { top: f, left: m }, n.directionChanged = n.direction !== g, n.delta = h, n.directionChanged === true && (n.direction = g, n.inflectionPoint = n.position), t("scroll", { ...n });
  }
  function i() {
    a = zn(r, e.scrollTarget), a.addEventListener("scroll", c, Rd), c(true);
  }
  function u() {
    a !== void 0 && (a.removeEventListener("scroll", c, Rd), a = void 0);
  }
  function c(f) {
    if (f === true || e.debounce === 0 || e.debounce === "0") o();
    else if (l === null) {
      const [m, h] = e.debounce ? [setTimeout(o, e.debounce), clearTimeout] : [requestAnimationFrame(o), cancelAnimationFrame];
      l = () => {
        h(m), l = null;
      };
    }
  }
  const { proxy: s } = Se();
  return be(() => s.$q.lang.rtl, o), ft(() => {
    r = s.$el.parentNode, i();
  }), Ke(() => {
    l == null ? void 0 : l(), u();
  }), Object.assign(s, { trigger: c, getPosition: () => n }), St;
} }), T1 = he({ name: "QLayout", props: { container: Boolean, view: { type: String, default: "hhh lpr fff", validator: (e) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase()) }, onScroll: Function, onScrollHeight: Function, onResize: Function }, setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = K(null), r = K(l.screen.height), o = K(e.container === true ? 0 : l.screen.width), i = K({ position: 0, direction: "down", inflectionPoint: 0 }), u = K(0), c = K(nn.value === true ? 0 : ro()), s = v(() => "q-layout q-layout--" + (e.container === true ? "containerized" : "standard")), f = v(() => e.container === false ? { minHeight: l.screen.height + "px" } : null), m = v(() => c.value !== 0 ? { [l.lang.rtl === true ? "left" : "right"]: `${c.value}px` } : null), h = v(() => c.value !== 0 ? { [l.lang.rtl === true ? "right" : "left"]: 0, [l.lang.rtl === true ? "left" : "right"]: `-${c.value}px`, width: `calc(100% + ${c.value}px)` } : null);
  function g(b) {
    if (e.container === true || document.qScrollPrevented !== true) {
      const x = { position: b.position.top, direction: b.direction, directionChanged: b.directionChanged, inflectionPoint: b.inflectionPoint.top, delta: b.delta.top };
      i.value = x, e.onScroll !== void 0 && n("scroll", x);
    }
  }
  function _(b) {
    const { height: x, width: $ } = b;
    let F = false;
    r.value !== x && (F = true, r.value = x, e.onScrollHeight !== void 0 && n("scrollHeight", x), k()), o.value !== $ && (F = true, o.value = $), F === true && e.onResize !== void 0 && n("resize", b);
  }
  function w({ height: b }) {
    u.value !== b && (u.value = b, k());
  }
  function k() {
    if (e.container === true) {
      const b = r.value > u.value ? ro() : 0;
      c.value !== b && (c.value = b);
    }
  }
  let p = null;
  const y = { instances: {}, view: v(() => e.view), isContainer: v(() => e.container), rootRef: a, height: r, containerHeight: u, scrollbarWidth: c, totalWidth: v(() => o.value + c.value), rows: v(() => {
    const b = e.view.toLowerCase().split(" ");
    return { top: b[0].split(""), middle: b[1].split(""), bottom: b[2].split("") };
  }), header: Fn({ size: 0, offset: 0, space: false }), right: Fn({ size: 300, offset: 0, space: false }), footer: Fn({ size: 0, offset: 0, space: false }), left: Fn({ size: 300, offset: 0, space: false }), scroll: i, animate() {
    p !== null ? clearTimeout(p) : document.body.classList.add("q-body--layout-animate"), p = setTimeout(() => {
      p = null, document.body.classList.remove("q-body--layout-animate");
    }, 155);
  }, update(b, x, $) {
    y[b][x] = $;
  } };
  if (hn(Gl, y), ro() > 0) {
    let b = function() {
      F = null, D.classList.remove("hide-scrollbar");
    }, x = function() {
      if (F === null) {
        if (D.scrollHeight > l.screen.height) return;
        D.classList.add("hide-scrollbar");
      } else clearTimeout(F);
      F = setTimeout(b, 300);
    }, $ = function(B) {
      F !== null && B === "remove" && (clearTimeout(F), b()), window[`${B}EventListener`]("resize", x);
    }, F = null;
    const D = document.body;
    be(() => e.container !== true ? "add" : "remove", $), e.container !== true && $("add"), Xo(() => {
      $("remove");
    });
  }
  return () => {
    const b = qt(t.default, [d($h, { onScroll: g }), d(Ul, { onResize: _ })]), x = d("div", { class: s.value, style: f.value, ref: e.container === true ? void 0 : a, tabindex: -1 }, b);
    return e.container === true ? d("div", { class: "q-layout-container overflow-hidden", ref: a }, [d(Ul, { onResize: w }), d("div", { class: "absolute-full", style: m.value }, [d("div", { class: "scroll", style: h.value }, [x])])]) : x;
  };
} }), M1 = ["horizontal", "vertical", "cell", "none"], E1 = he({ name: "QMarkupTable", props: { ...nt, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, wrapCells: Boolean, separator: { type: String, default: "horizontal", validator: (e) => M1.includes(e) } }, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), a = v(() => `q-markup-table q-table__container q-table__card q-table--${e.separator}-separator` + (l.value === true ? " q-table--dark q-table__card--dark q-dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "") + (e.square === true ? " q-table--square" : "") + (e.wrapCells === false ? " q-table--no-wrap" : ""));
  return () => d("div", { class: a.value }, [d("table", { class: "q-table" }, Pe(t.default))]);
} });
he({ name: "QNoSsr", props: { tag: { type: String, default: "div" }, placeholder: String }, setup(e, { slots: t }) {
  const { isHydrated: n } = Gm();
  return () => {
    if (n.value === true) {
      const r = Pe(t.default);
      return r === void 0 ? r : r.length > 1 ? d(e.tag, {}, r) : r[0];
    }
    const l = { class: "q-no-ssr-placeholder" }, a = Pe(t.placeholder);
    if (a !== void 0) return a.length > 1 ? d(e.tag, l, a) : a[0];
    if (e.placeholder !== void 0) return d(e.tag, l, e.placeholder);
  };
} });
var A1 = () => d("svg", { key: "svg", class: "q-radio__bg absolute non-selectable", viewBox: "0 0 24 24" }, [d("path", { d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12" }), d("path", { class: "q-radio__check", d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6" })]), R1 = he({ name: "QRadio", props: { ...nt, ...el, ...wn, modelValue: { required: true }, val: { required: true }, label: String, leftLabel: Boolean, checkedIcon: String, uncheckedIcon: String, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), a = lt(e, l.$q), r = tl(e, zm), o = K(null), { refocusTargetEl: i, refocusTarget: u } = Vm(e, o), c = v(() => Ge(e.modelValue) === Ge(e.val)), s = v(() => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (e.disable === true ? " disabled" : "") + (a.value === true ? " q-radio--dark" : "") + (e.dense === true ? " q-radio--dense" : "") + (e.leftLabel === true ? " reverse" : "")), f = v(() => {
    const b = e.color !== void 0 && (e.keepColor === true || c.value === true) ? ` text-${e.color}` : "";
    return `q-radio__inner relative-position q-radio__inner--${c.value === true ? "truthy" : "falsy"}${b}`;
  }), m = v(() => (c.value === true ? e.checkedIcon : e.uncheckedIcon) || null), h = v(() => e.disable === true ? -1 : e.tabindex || 0), g = v(() => {
    const b = { type: "radio" };
    return e.name !== void 0 && Object.assign(b, { ".checked": c.value === true, "^checked": c.value === true ? "checked" : void 0, name: e.name, value: e.val }), b;
  }), _ = Cl(g);
  function w(b) {
    b !== void 0 && (je(b), u(b)), e.disable !== true && c.value !== true && n("update:modelValue", e.val, b);
  }
  function k(b) {
    (b.keyCode === 13 || b.keyCode === 32) && je(b);
  }
  function p(b) {
    (b.keyCode === 13 || b.keyCode === 32) && w(b);
  }
  Object.assign(l, { set: w });
  const y = A1();
  return () => {
    const b = m.value !== null ? [d("div", { key: "icon", class: "q-radio__icon-container absolute-full flex flex-center no-wrap" }, [d(et, { class: "q-radio__icon", name: m.value })])] : [y];
    e.disable !== true && _(b, "unshift", " q-radio__native q-ma-none q-pa-none");
    const x = [d("div", { class: f.value, style: r.value, "aria-hidden": "true" }, b)];
    i.value !== null && x.push(i.value);
    const $ = e.label !== void 0 ? qt(t.default, [e.label]) : Pe(t.default);
    return $ !== void 0 && x.push(d("div", { class: "q-radio__label q-anchor--skip" }, $)), d("div", { ref: o, class: s.value, tabindex: h.value, role: "radio", "aria-label": e.label, "aria-checked": c.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: w, onKeydown: k, onKeyup: p }, x);
  };
} }), $1 = he({ name: "QToggle", props: { ...Im, icon: String, iconColor: String }, emits: Dm, setup(e) {
  function t(n, l) {
    const a = v(() => (n.value === true ? e.checkedIcon : l.value === true ? e.indeterminateIcon : e.uncheckedIcon) || e.icon), r = v(() => n.value === true ? e.iconColor : null);
    return () => [d("div", { class: "q-toggle__track" }), d("div", { class: "q-toggle__thumb absolute flex flex-center no-wrap" }, a.value !== void 0 ? [d(et, { name: a.value, color: r.value })] : void 0)];
  }
  return Nm("toggle", t);
} }), Ph = { radio: R1, checkbox: ir, toggle: $1 }, P1 = Object.keys(Ph);
function Xi(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (l) => l[n];
}
var L1 = he({ name: "QOptionGroup", props: { ...nt, modelValue: { required: true }, options: { type: Array, validator: (e) => e.every(Pt), default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], name: String, type: { type: String, default: "radio", validator: (e) => P1.includes(e) }, color: String, keepColor: Boolean, dense: Boolean, size: String, leftLabel: Boolean, inline: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { emit: t, slots: n }) {
  const { proxy: { $q: l } } = Se(), a = Array.isArray(e.modelValue);
  e.type === "radio" ? a === true && console.error("q-option-group: model should not be array") : a === false && console.error("q-option-group: model should be array in your case");
  const r = lt(e, l), o = v(() => Ph[e.type]), i = v(() => Xi(e.optionValue, "value")), u = v(() => Xi(e.optionLabel, "label")), c = v(() => Xi(e.optionDisable, "disable")), s = v(() => e.options.map((g) => ({ val: i.value(g), name: g.name === void 0 ? e.name : g.name, disable: e.disable || c.value(g), leftLabel: g.leftLabel === void 0 ? e.leftLabel : g.leftLabel, color: g.color === void 0 ? e.color : g.color, checkedIcon: g.checkedIcon, uncheckedIcon: g.uncheckedIcon, dark: g.dark === void 0 ? r.value : g.dark, size: g.size === void 0 ? e.size : g.size, dense: e.dense, keepColor: g.keepColor === void 0 ? e.keepColor : g.keepColor }))), f = v(() => "q-option-group q-gutter-x-sm" + (e.inline === true ? " q-option-group--inline" : "")), m = v(() => {
    const g = { role: "group" };
    return e.type === "radio" && (g.role = "radiogroup", e.disable === true && (g["aria-disabled"] = "true")), g;
  });
  function h(g) {
    t("update:modelValue", g);
  }
  return () => d("div", { class: f.value, ...m.value }, e.options.map((g, _) => {
    const w = n["label-" + _] !== void 0 ? () => n["label-" + _](g) : n.label !== void 0 ? () => n.label(g) : void 0;
    return d("div", [d(o.value, { label: w === void 0 ? u.value(g) : null, modelValue: e.modelValue, "onUpdate:modelValue": h, ...s.value[_] }, w)]);
  }));
} });
he({ name: "QPage", props: { padding: Boolean, styleFn: Function }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = Tt(Gl, ot);
  if (l === ot) return console.error("QPage needs to be a deep child of QLayout"), ot;
  if (Tt(om, ot) === ot) return console.error("QPage needs to be child of QPageContainer"), ot;
  const r = v(() => {
    const i = (l.header.space === true ? l.header.size : 0) + (l.footer.space === true ? l.footer.size : 0);
    if (typeof e.styleFn == "function") {
      const u = l.isContainer.value === true ? l.containerHeight.value : n.screen.height;
      return e.styleFn(i, u);
    }
    return { minHeight: l.isContainer.value === true ? l.containerHeight.value - i + "px" : n.screen.height === 0 ? i !== 0 ? `calc(100vh - ${i}px)` : "100vh" : n.screen.height - i + "px" };
  }), o = v(() => `q-page${e.padding === true ? " q-layout-padding" : ""}`);
  return () => d("main", { class: o.value, style: r.value }, Pe(t.default));
} });
var B1 = he({ name: "QPageContainer", setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = Tt(Gl, ot);
  if (l === ot) return console.error("QPageContainer needs to be child of QLayout"), ot;
  hn(om, true);
  const a = v(() => {
    const r = {};
    return l.header.space === true && (r.paddingTop = `${l.header.size}px`), l.right.space === true && (r[`padding${n.lang.rtl === true ? "Left" : "Right"}`] = `${l.right.size}px`), l.footer.space === true && (r.paddingBottom = `${l.footer.size}px`), l.left.space === true && (r[`padding${n.lang.rtl === true ? "Right" : "Left"}`] = `${l.left.size}px`), r;
  });
  return () => d("div", { class: "q-page-container", style: a.value }, Pe(t.default));
} }), Hu = { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, validator: (e) => e.length === 2 }, expand: Boolean };
function Lh() {
  const { props: e, proxy: { $q: t } } = Se(), n = Tt(Gl, ot);
  if (n === ot) return console.error("QPageSticky needs to be child of QLayout"), ot;
  const l = v(() => {
    const f = e.position;
    return { top: f.indexOf("top") !== -1, right: f.indexOf("right") !== -1, bottom: f.indexOf("bottom") !== -1, left: f.indexOf("left") !== -1, vertical: f === "top" || f === "bottom", horizontal: f === "left" || f === "right" };
  }), a = v(() => n.header.offset), r = v(() => n.right.offset), o = v(() => n.footer.offset), i = v(() => n.left.offset), u = v(() => {
    let f = 0, m = 0;
    const h = l.value, g = t.lang.rtl === true ? -1 : 1;
    h.top === true && a.value !== 0 ? m = `${a.value}px` : h.bottom === true && o.value !== 0 && (m = `${-o.value}px`), h.left === true && i.value !== 0 ? f = `${g * i.value}px` : h.right === true && r.value !== 0 && (f = `${-g * r.value}px`);
    const _ = { transform: `translate(${f}, ${m})` };
    return e.offset && (_.margin = `${e.offset[1]}px ${e.offset[0]}px`), h.vertical === true ? (i.value !== 0 && (_[t.lang.rtl === true ? "right" : "left"] = `${i.value}px`), r.value !== 0 && (_[t.lang.rtl === true ? "left" : "right"] = `${r.value}px`)) : h.horizontal === true && (a.value !== 0 && (_.top = `${a.value}px`), o.value !== 0 && (_.bottom = `${o.value}px`)), _;
  }), c = v(() => `q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand === true ? "expand" : "shrink"}`);
  function s(f) {
    const m = Pe(f.default);
    return d("div", { class: c.value, style: u.value }, e.expand === true ? m : [d("div", m)]);
  }
  return { $layout: n, getStickyContent: s };
}
he({ name: "QPageScroller", props: { ...Hu, scrollOffset: { type: Number, default: 1e3 }, reverse: Boolean, duration: { type: Number, default: 300 }, offset: { ...Hu.offset, default: () => [18, 18] } }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), { $layout: a, getStickyContent: r } = Lh(), o = K(null);
  let i;
  const u = v(() => a.height.value - (a.isContainer.value === true ? a.containerHeight.value : l.screen.height));
  function c() {
    return e.reverse === true ? u.value - a.scroll.value.position > e.scrollOffset : a.scroll.value.position > e.scrollOffset;
  }
  const s = K(c());
  function f() {
    const w = c();
    s.value !== w && (s.value = w);
  }
  function m() {
    e.reverse === true ? i === void 0 && (i = be(u, f)) : h();
  }
  be(a.scroll, f), be(() => e.reverse, m);
  function h() {
    i !== void 0 && (i(), i = void 0);
  }
  function g(w) {
    const k = zn(a.isContainer.value === true ? o.value : a.rootRef.value);
    pa(k, e.reverse === true ? a.height.value : 0, e.duration), n("click", w);
  }
  function _() {
    return s.value === true ? d("div", { ref: o, class: "q-page-scroller", onClick: g }, r(t)) : null;
  }
  return m(), Ke(h), () => d(Ft, { name: "q-transition--fade" }, _);
} });
he({ name: "QPageSticky", props: Hu, setup(e, { slots: t }) {
  const { getStickyContent: n } = Lh();
  return () => n(t);
} });
function Yr(e, t) {
  return [true, false].includes(e) ? e : t;
}
he({ name: "QPagination", props: { ...nt, modelValue: { type: Number, required: true }, min: { type: [Number, String], default: 1 }, max: { type: [Number, String], required: true }, maxPages: { type: [Number, String], default: 0, validator: (e) => (typeof e == "string" ? parseInt(e, 10) : e) >= 0 }, inputStyle: [Array, String, Object], inputClass: [Array, String, Object], size: String, disable: Boolean, input: Boolean, iconPrev: String, iconNext: String, iconFirst: String, iconLast: String, toFn: Function, boundaryLinks: { type: Boolean, default: null }, boundaryNumbers: { type: Boolean, default: null }, directionLinks: { type: Boolean, default: null }, ellipses: { type: Boolean, default: null }, ripple: { type: [Boolean, Object], default: null }, round: Boolean, rounded: Boolean, flat: Boolean, outline: Boolean, unelevated: Boolean, push: Boolean, glossy: Boolean, color: { type: String, default: "primary" }, textColor: String, activeDesign: { type: String, default: "", values: (e) => e === "" || wm.includes(e) }, activeColor: String, activeTextColor: String, gutter: String, padding: { type: String, default: "3px 2px" } }, emits: ["update:modelValue"], setup(e, { emit: t }) {
  const { proxy: n } = Se(), { $q: l } = n, a = lt(e, l), r = v(() => parseInt(e.min, 10)), o = v(() => parseInt(e.max, 10)), i = v(() => parseInt(e.maxPages, 10)), u = v(() => g.value + " / " + o.value), c = v(() => Yr(e.boundaryLinks, e.input)), s = v(() => Yr(e.boundaryNumbers, !e.input)), f = v(() => Yr(e.directionLinks, e.input)), m = v(() => Yr(e.ellipses, !e.input)), h = K(null), g = v({ get: () => e.modelValue, set: (M) => {
    if (M = parseInt(M, 10), e.disable || isNaN(M)) return;
    const C = ct(M, r.value, o.value);
    e.modelValue !== C && t("update:modelValue", C);
  } });
  be(() => `${r.value}|${o.value}`, () => {
    g.value = e.modelValue;
  });
  const _ = v(() => "q-pagination row no-wrap items-center" + (e.disable === true ? " disabled" : "")), w = v(() => e.gutter in To ? `${To[e.gutter]}px` : e.gutter || null), k = v(() => w.value !== null ? `--q-pagination-gutter-parent:-${w.value};--q-pagination-gutter-child:${w.value}` : null), p = v(() => {
    const M = [e.iconFirst || l.iconSet.pagination.first, e.iconPrev || l.iconSet.pagination.prev, e.iconNext || l.iconSet.pagination.next, e.iconLast || l.iconSet.pagination.last];
    return l.lang.rtl === true ? M.reverse() : M;
  }), y = v(() => ({ "aria-disabled": e.disable === true ? "true" : "false", role: "navigation" })), b = v(() => Ss(e, "flat")), x = v(() => ({ [b.value]: true, round: e.round, rounded: e.rounded, padding: e.padding, color: e.color, textColor: e.textColor, size: e.size, ripple: e.ripple !== null ? e.ripple : true })), $ = v(() => {
    const M = { [b.value]: false };
    return e.activeDesign !== "" && (M[e.activeDesign] = true), M;
  }), F = v(() => ({ ...$.value, color: e.activeColor || e.color, textColor: e.activeTextColor || e.textColor })), D = v(() => {
    let M = Math.max(i.value, 1 + (m.value ? 2 : 0) + (s.value ? 2 : 0));
    const C = { pgFrom: r.value, pgTo: o.value, ellipsesStart: false, ellipsesEnd: false, boundaryStart: false, boundaryEnd: false, marginalStyle: { minWidth: `${Math.max(2, String(o.value).length)}em` } };
    return i.value && M < o.value - r.value + 1 && (M = 1 + Math.floor(M / 2) * 2, C.pgFrom = Math.max(r.value, Math.min(o.value - M + 1, e.modelValue - Math.floor(M / 2))), C.pgTo = Math.min(o.value, C.pgFrom + M - 1), s.value && (C.boundaryStart = true, C.pgFrom++), m.value && C.pgFrom > r.value + (s.value ? 1 : 0) && (C.ellipsesStart = true, C.pgFrom++), s.value && (C.boundaryEnd = true, C.pgTo--), m.value && C.pgTo < o.value - (s.value ? 1 : 0) && (C.ellipsesEnd = true, C.pgTo--)), C;
  });
  function B(M) {
    g.value = M;
  }
  function P(M) {
    g.value = g.value + M;
  }
  const I = v(() => {
    function M() {
      g.value = h.value, h.value = null;
    }
    return { "onUpdate:modelValue": (C) => {
      h.value = C;
    }, onKeyup: (C) => {
      yn(C, 13) === true && M();
    }, onBlur: M };
  });
  function q(M, C, H) {
    const Y = { "aria-label": C, "aria-current": "false", ...x.value, ...M };
    return H === true && Object.assign(Y, { "aria-current": "true", ...F.value }), C !== void 0 && (e.toFn !== void 0 ? Y.to = e.toFn(C) : Y.onClick = () => {
      B(C);
    }), d(Ze, Y);
  }
  return Object.assign(n, { set: B, setByOffset: P }), () => {
    const M = [], C = [];
    let H;
    if (c.value === true && (M.push(q({ key: "bls", disable: e.disable || e.modelValue <= r.value, icon: p.value[0], "aria-label": l.lang.pagination.first }, r.value)), C.unshift(q({ key: "ble", disable: e.disable || e.modelValue >= o.value, icon: p.value[3], "aria-label": l.lang.pagination.last }, o.value))), f.value === true && (M.push(q({ key: "bdp", disable: e.disable || e.modelValue <= r.value, icon: p.value[1], "aria-label": l.lang.pagination.prev }, e.modelValue - 1)), C.unshift(q({ key: "bdn", disable: e.disable || e.modelValue >= o.value, icon: p.value[2], "aria-label": l.lang.pagination.next }, e.modelValue + 1))), e.input !== true) {
      H = [];
      const { pgFrom: Y, pgTo: L, marginalStyle: O } = D.value;
      if (D.value.boundaryStart === true) {
        const U = r.value === e.modelValue;
        M.push(q({ key: "bns", style: O, disable: e.disable, label: r.value }, r.value, U));
      }
      if (D.value.boundaryEnd === true) {
        const U = o.value === e.modelValue;
        C.unshift(q({ key: "bne", style: O, disable: e.disable, label: o.value }, o.value, U));
      }
      D.value.ellipsesStart === true && M.push(q({ key: "bes", style: O, disable: e.disable, label: "\u2026", ripple: false }, Y - 1)), D.value.ellipsesEnd === true && C.unshift(q({ key: "bee", style: O, disable: e.disable, label: "\u2026", ripple: false }, L + 1));
      for (let U = Y; U <= L; U++) H.push(q({ key: `bpg${U}`, style: O, disable: e.disable, label: U }, U, U === e.modelValue));
    }
    return d("div", { class: _.value, ...y.value }, [d("div", { class: "q-pagination__content row no-wrap items-center", style: k.value }, [...M, e.input === true ? d(Eh, { class: "inline", style: { width: `${u.value.length / 1.5}em` }, type: "number", dense: true, value: h.value, disable: e.disable, dark: a.value, borderless: true, inputClass: e.inputClass, inputStyle: e.inputStyle, placeholder: u.value, min: r.value, max: o.value, ...I.value }) : d("div", { class: "q-pagination__middle row justify-center" }, H), ...C])]);
  };
} });
function Zi(e) {
  let t = false, n, l;
  function a() {
    l = arguments, t !== true && (t = true, n = window.requestAnimationFrame(() => {
      e.apply(this, l), l = void 0, t = false;
    }));
  }
  return a.cancel = () => {
    window.cancelAnimationFrame(n), t = false;
  }, a;
}
var { passive: Gr } = dt;
he({ name: "QParallax", props: { src: String, height: { type: Number, default: 500 }, speed: { type: Number, default: 1, validator: (e) => e >= 0 && e <= 1 }, scrollTarget: Xl, onScroll: Function }, setup(e, { slots: t, emit: n }) {
  const l = K(0), a = K(null), r = K(null), o = K(null);
  let i, u, c, s, f, m;
  be(() => e.height, () => {
    i === true && g();
  }), be(() => e.scrollTarget, () => {
    i === true && (p(), k());
  });
  let h = (y) => {
    l.value = y, e.onScroll !== void 0 && n("scroll", y);
  };
  function g() {
    let y, b, x;
    m === window ? (y = 0, x = b = window.innerHeight) : (y = qo(m).top, b = Sa(m), x = y + b);
    const $ = qo(a.value).top, F = $ + e.height;
    if (f !== void 0 || F > y && $ < x) {
      const D = (x - $) / (e.height + b);
      _((c - e.height) * D * e.speed), h(D);
    }
  }
  let _ = (y) => {
    u.style.transform = `translate3d(-50%,${Math.round(y)}px,0)`;
  };
  function w() {
    c = u.naturalHeight || u.videoHeight || Sa(u), i === true && g();
  }
  function k() {
    i = true, m = zn(a.value, e.scrollTarget), m.addEventListener("scroll", g, Gr), window.addEventListener("resize", s, Gr), g();
  }
  function p() {
    i === true && (i = false, m.removeEventListener("scroll", g, Gr), window.removeEventListener("resize", s, Gr), m = void 0, _.cancel(), h.cancel(), s.cancel());
  }
  return ft(() => {
    _ = Zi(_), h = Zi(h), s = Zi(w), u = t.media !== void 0 ? r.value.children[0] : o.value, u.onload = u.onloadstart = u.loadedmetadata = w, w(), u.style.display = "initial", window.IntersectionObserver !== void 0 ? (f = new IntersectionObserver((y) => {
      (y[0].isIntersecting === true ? k : p)();
    }), f.observe(a.value)) : k();
  }), Ke(() => {
    p(), f == null ? void 0 : f.disconnect(), u.onload = u.onloadstart = u.loadedmetadata = null;
  }), () => d("div", { ref: a, class: "q-parallax", style: { height: `${e.height}px` } }, [d("div", { ref: r, class: "q-parallax__media absolute-full" }, t.media !== void 0 ? t.media() : [d("img", { ref: o, src: e.src })]), d("div", { class: "q-parallax__content absolute-full column flex-center" }, t.content !== void 0 ? t.content({ percentScrolled: l.value }) : Pe(t.default))]);
} });
function ur(e, t = /* @__PURE__ */ new WeakMap()) {
  if (Object(e) !== e) return e;
  if (t.has(e)) return t.get(e);
  const n = e instanceof Date ? new Date(e) : e instanceof RegExp ? new RegExp(e.source, e.flags) : e instanceof Set ? /* @__PURE__ */ new Set() : e instanceof Map ? /* @__PURE__ */ new Map() : typeof e.constructor != "function" ? /* @__PURE__ */ Object.create(null) : e.prototype !== void 0 && typeof e.prototype.constructor == "function" ? e : new e.constructor();
  if (typeof e.constructor == "function" && typeof e.valueOf == "function") {
    const l = e.valueOf();
    if (Object(l) !== l) {
      const a = new e.constructor(l);
      return t.set(e, a), a;
    }
  }
  return t.set(e, n), e instanceof Set ? e.forEach((l) => {
    n.add(ur(l, t));
  }) : e instanceof Map && e.forEach((l, a) => {
    n.set(a, ur(l, t));
  }), Object.assign(n, ...Object.keys(e).map((l) => ({ [l]: ur(e[l], t) })));
}
he({ name: "QPopupEdit", props: { modelValue: { required: true }, title: String, buttons: Boolean, labelSet: String, labelCancel: String, color: { type: String, default: "primary" }, validate: { type: Function, default: () => true }, autoSave: Boolean, cover: { type: Boolean, default: true }, disable: Boolean }, emits: ["update:modelValue", "save", "cancel", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = K(null), o = K(""), i = K("");
  let u = false;
  const c = v(() => Ot({ initialValue: o.value, validate: e.validate, set: s, cancel: f, updatePosition: m }, "value", () => i.value, (b) => {
    i.value = b;
  }));
  function s() {
    e.validate(i.value) !== false && (h() === true && (n("save", i.value, o.value), n("update:modelValue", i.value)), g());
  }
  function f() {
    h() === true && n("cancel", i.value, o.value), g();
  }
  function m() {
    We(() => {
      r.value.updatePosition();
    });
  }
  function h() {
    return kn(i.value, o.value) === false;
  }
  function g() {
    u = true, r.value.hide();
  }
  function _() {
    u = false, o.value = ur(e.modelValue), i.value = ur(e.modelValue), n("beforeShow");
  }
  function w() {
    n("show");
  }
  function k() {
    u === false && h() === true && (e.autoSave === true && e.validate(i.value) === true ? (n("save", i.value, o.value), n("update:modelValue", i.value)) : n("cancel", i.value, o.value)), n("beforeHide");
  }
  function p() {
    n("hide");
  }
  function y() {
    const b = t.default !== void 0 ? [].concat(t.default(c.value)) : [];
    return e.title && b.unshift(d("div", { class: "q-dialog__title q-mt-sm q-mb-sm" }, e.title)), e.buttons === true && b.push(d("div", { class: "q-popup-edit__buttons row justify-center no-wrap" }, [d(Ze, { flat: true, color: e.color, label: e.labelCancel || a.lang.label.cancel, onClick: f }), d(Ze, { flat: true, color: e.color, label: e.labelSet || a.lang.label.set, onClick: s })])), b;
  }
  return Object.assign(l, { set: s, cancel: f, show(b) {
    var _a2;
    (_a2 = r.value) == null ? void 0 : _a2.show(b);
  }, hide(b) {
    var _a2;
    (_a2 = r.value) == null ? void 0 : _a2.hide(b);
  }, updatePosition: m }), () => {
    if (e.disable !== true) return d(ui, { ref: r, class: "q-popup-edit", cover: e.cover, onBeforeShow: _, onShow: w, onBeforeHide: k, onHide: p, onEscapeKey: f }, y);
  };
} });
he({ name: "QPopupProxy", props: { ...km, breakpoint: { type: [String, Number], default: 450 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: n, attrs: l }) {
  const { proxy: a } = Se(), { $q: r } = a, o = K(false), i = K(null), u = v(() => parseInt(e.breakpoint, 10)), { canShow: c } = Cs({ showing: o });
  function s() {
    return r.screen.width < u.value || r.screen.height < u.value ? "dialog" : "menu";
  }
  const f = K(s()), m = v(() => f.value === "menu" ? { maxHeight: "99vh" } : {});
  be(() => s(), (_) => {
    o.value !== true && (f.value = _);
  });
  function h(_) {
    o.value = true, n("show", _);
  }
  function g(_) {
    o.value = false, f.value = s(), n("hide", _);
  }
  return Object.assign(a, { show(_) {
    c(_) === true && i.value.show(_);
  }, hide(_) {
    i.value.hide(_);
  }, toggle(_) {
    i.value.toggle(_);
  } }), Ot(a, "currentComponent", () => ({ type: f.value, ref: i.value })), () => {
    const _ = { ref: i, ...m.value, ...l, onShow: h, onHide: g };
    let w;
    return f.value === "dialog" ? w = ci : (w = ui, Object.assign(_, { target: e.target, contextMenu: e.contextMenu, noParentEvent: true, separateClosePopup: true })), d(w, _, t.default);
  };
} });
var F1 = { xs: 2, sm: 4, md: 6, lg: 10, xl: 14 };
function $d(e, t, n) {
  return { transform: t === true ? `translateX(${n.lang.rtl === true ? "-" : ""}100%) scale3d(${-e},1,1)` : `scale3d(${e},1,1)` };
}
var O1 = he({ name: "QLinearProgress", props: { ...nt, ...el, value: { type: Number, default: 0 }, buffer: Number, color: String, trackColor: String, reverse: Boolean, stripe: Boolean, indeterminate: Boolean, query: Boolean, rounded: Boolean, animationSpeed: { type: [String, Number], default: 2100 }, instantFeedback: Boolean }, setup(e, { slots: t }) {
  const { proxy: n } = Se(), l = lt(e, n.$q), a = tl(e, F1), r = v(() => e.indeterminate === true || e.query === true), o = v(() => e.reverse !== e.query), i = v(() => ({ ...a.value !== null ? a.value : {}, "--q-linear-progress-speed": `${e.animationSpeed}ms` })), u = v(() => "q-linear-progress" + (e.color !== void 0 ? ` text-${e.color}` : "") + (e.reverse === true || e.query === true ? " q-linear-progress--reverse" : "") + (e.rounded === true ? " rounded-borders" : "")), c = v(() => $d(e.buffer !== void 0 ? e.buffer : 1, o.value, n.$q)), s = v(() => `with${e.instantFeedback === true ? "out" : ""}-transition`), f = v(() => `q-linear-progress__track absolute-full q-linear-progress__track--${s.value} q-linear-progress__track--${l.value === true ? "dark" : "light"}` + (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")), m = v(() => $d(r.value === true ? 1 : e.value, o.value, n.$q)), h = v(() => `q-linear-progress__model absolute-full q-linear-progress__model--${s.value} q-linear-progress__model--${r.value === true ? "in" : ""}determinate`), g = v(() => ({ width: `${e.value * 100}%` })), _ = v(() => `q-linear-progress__stripe absolute-${e.reverse === true ? "right" : "left"} q-linear-progress__stripe--${s.value}`);
  return () => {
    const w = [d("div", { class: f.value, style: c.value }), d("div", { class: h.value, style: m.value })];
    return e.stripe === true && r.value === false && w.push(d("div", { class: _.value, style: g.value })), d("div", { class: u.value, style: i.value, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuenow": e.indeterminate === true ? void 0 : e.value }, qt(t.default, w));
  };
} }), Pd = 40, Ji = 20;
he({ name: "QPullToRefresh", props: { color: String, bgColor: String, icon: String, noMouse: Boolean, disable: Boolean, scrollTarget: Xl }, emits: ["refresh"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = K("pull"), o = K(0), i = K(false), u = K(-40), c = K(false), s = K({}), f = v(() => ({ opacity: o.value, transform: `translateY(${u.value}px) rotate(${o.value * 360}deg)` })), m = v(() => "q-pull-to-refresh__puller row flex-center" + (c.value === true ? " q-pull-to-refresh__puller--animating" : "") + (e.bgColor !== void 0 ? ` bg-${e.bgColor}` : ""));
  function h(x) {
    if (x.isFinal === true) {
      i.value === true && (i.value = false, r.value === "pulled" ? (r.value = "refreshing", y({ pos: Ji }), w()) : r.value === "pull" && y({ pos: -40, ratio: 0 }));
      return;
    }
    if (c.value === true || r.value === "refreshing") return false;
    if (x.isFirst === true) {
      if (bl(k) !== 0 || x.direction !== "down") return i.value === true && (i.value = false, r.value = "pull", y({ pos: -40, ratio: 0 })), false;
      i.value = true;
      const { top: D, left: B } = l.$el.getBoundingClientRect();
      s.value = { top: D + "px", left: B + "px", width: window.getComputedStyle(l.$el).getPropertyValue("width") };
    }
    Vt(x.evt);
    const $ = Math.min(140, Math.max(0, x.distance.y));
    u.value = $ - Pd, o.value = ct($ / (Ji + Pd), 0, 1);
    const F = u.value > Ji ? "pulled" : "pull";
    r.value !== F && (r.value = F);
  }
  const g = v(() => {
    const x = { down: true };
    return e.noMouse !== true && (x.mouse = true), [[gn, h, void 0, x]];
  }), _ = v(() => `q-pull-to-refresh__content${i.value === true ? " no-pointer-events" : ""}`);
  function w() {
    n("refresh", () => {
      y({ pos: -40, ratio: 0 }, () => {
        r.value = "pull";
      });
    });
  }
  let k, p = null;
  function y({ pos: x, ratio: $ }, F) {
    c.value = true, u.value = x, $ !== void 0 && (o.value = $), p !== null && clearTimeout(p), p = setTimeout(() => {
      p = null, c.value = false, F == null ? void 0 : F();
    }, 300);
  }
  function b() {
    k = zn(l.$el, e.scrollTarget);
  }
  return be(() => e.scrollTarget, b), ft(b), Ke(() => {
    p !== null && clearTimeout(p);
  }), Object.assign(l, { trigger: w, updateScrollTarget: b }), () => {
    const x = [d("div", { class: _.value }, Pe(t.default)), d("div", { class: "q-pull-to-refresh__puller-container fixed row flex-center no-pointer-events z-top", style: s.value }, [d("div", { class: m.value, style: f.value }, [r.value !== "refreshing" ? d(et, { name: e.icon || a.iconSet.pullToRefresh.icon, color: e.color, size: "32px" }) : d(_n, { size: "24px", color: e.color })])])];
    return pn("div", { class: "q-pull-to-refresh" }, x, "main", e.disable === false, () => g.value);
  };
} });
var rl = { MIN: 0, RANGE: 1, MAX: 2 };
he({ name: "QRange", props: { ...Km, modelValue: { type: Object, default: () => ({ min: null, max: null }), validator: (e) => "min" in e && "max" in e }, dragRange: Boolean, dragOnlyRange: Boolean, leftLabelColor: String, leftLabelTextColor: String, rightLabelColor: String, rightLabelTextColor: String, leftLabelValue: [String, Number], rightLabelValue: [String, Number], leftThumbColor: String, rightThumbColor: String }, emits: Wm, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = Se(), { state: l, methods: a } = Ym({ updateValue: D, updatePosition: P, getDragging: B, formAttrs: v(() => ({ type: "hidden", name: e.name, value: `${e.modelValue.min}|${e.modelValue.max}` })) }), r = K(null), o = K(0), i = K(0), u = K({ min: 0, max: 0 });
  function c() {
    u.value.min = e.modelValue.min === null ? l.innerMin.value : ct(e.modelValue.min, l.innerMin.value, l.innerMax.value), u.value.max = e.modelValue.max === null ? l.innerMax.value : ct(e.modelValue.max, l.innerMin.value, l.innerMax.value);
  }
  be(() => `${e.modelValue.min}|${e.modelValue.max}|${l.innerMin.value}|${l.innerMax.value}`, c), c();
  const s = v(() => a.convertModelToRatio(u.value.min)), f = v(() => a.convertModelToRatio(u.value.max)), m = v(() => l.active.value === true ? o.value : s.value), h = v(() => l.active.value === true ? i.value : f.value), g = v(() => {
    const q = { [l.positionProp.value]: `${100 * m.value}%`, [l.sizeProp.value]: `${100 * (h.value - m.value)}%` };
    return e.selectionImg !== void 0 && (q.backgroundImage = `url(${e.selectionImg}) !important`), q;
  }), _ = v(() => {
    if (l.editable.value !== true) return {};
    if (n.platform.is.mobile === true) return { onClick: a.onMobileClick };
    const q = { onMousedown: a.onActivate };
    return (e.dragRange === true || e.dragOnlyRange === true) && Object.assign(q, { onFocus: () => {
      l.focus.value = "both";
    }, onBlur: a.onBlur, onKeydown: I, onKeyup: a.onKeyup }), q;
  });
  function w(q) {
    return n.platform.is.mobile !== true && l.editable.value === true && e.dragOnlyRange !== true ? { onFocus: () => {
      l.focus.value = q;
    }, onBlur: a.onBlur, onKeydown: I, onKeyup: a.onKeyup } : {};
  }
  const k = v(() => e.dragOnlyRange !== true ? l.tabindex.value : null), p = v(() => n.platform.is.mobile !== true && (e.dragRange || e.dragOnlyRange === true) ? l.tabindex.value : null), y = K(null), b = v(() => w("min")), x = a.getThumbRenderFn({ focusValue: "min", getNodeData: () => ({ ref: y, key: "tmin", ...b.value, tabindex: k.value }), ratio: m, label: v(() => e.leftLabelValue !== void 0 ? e.leftLabelValue : u.value.min), thumbColor: v(() => e.leftThumbColor || e.thumbColor || e.color), labelColor: v(() => e.leftLabelColor || e.labelColor), labelTextColor: v(() => e.leftLabelTextColor || e.labelTextColor) }), $ = v(() => w("max")), F = a.getThumbRenderFn({ focusValue: "max", getNodeData: () => ({ ...$.value, key: "tmax", tabindex: k.value }), ratio: h, label: v(() => e.rightLabelValue !== void 0 ? e.rightLabelValue : u.value.max), thumbColor: v(() => e.rightThumbColor || e.thumbColor || e.color), labelColor: v(() => e.rightLabelColor || e.labelColor), labelTextColor: v(() => e.rightLabelTextColor || e.labelTextColor) });
  function D(q) {
    (u.value.min !== e.modelValue.min || u.value.max !== e.modelValue.max) && t("update:modelValue", { ...u.value }), q === true && t("change", { ...u.value });
  }
  function B(q) {
    const { left: M, top: C, width: H, height: Y } = r.value.getBoundingClientRect(), L = e.dragOnlyRange === true ? 0 : e.vertical === true ? y.value.offsetHeight / (2 * Y) : y.value.offsetWidth / (2 * H), O = { left: M, top: C, width: H, height: Y, valueMin: u.value.min, valueMax: u.value.max, ratioMin: s.value, ratioMax: f.value }, U = a.getDraggingRatio(q, O);
    return e.dragOnlyRange !== true && U < O.ratioMin + L ? O.type = rl.MIN : e.dragOnlyRange === true || U < O.ratioMax - L ? e.dragRange === true || e.dragOnlyRange === true ? (O.type = rl.RANGE, Object.assign(O, { offsetRatio: U, offsetModel: a.convertRatioToModel(U), rangeValue: O.valueMax - O.valueMin, rangeRatio: O.ratioMax - O.ratioMin })) : O.type = O.ratioMax - U < U - O.ratioMin ? rl.MAX : rl.MIN : O.type = rl.MAX, O;
  }
  function P(q, M = l.dragging.value) {
    let C;
    const H = a.getDraggingRatio(q, M), Y = a.convertRatioToModel(H);
    switch (M.type) {
      case rl.MIN:
        H <= M.ratioMax ? (C = { minR: H, maxR: M.ratioMax, min: Y, max: M.valueMax }, l.focus.value = "min") : (C = { minR: M.ratioMax, maxR: H, min: M.valueMax, max: Y }, l.focus.value = "max");
        break;
      case rl.MAX:
        H >= M.ratioMin ? (C = { minR: M.ratioMin, maxR: H, min: M.valueMin, max: Y }, l.focus.value = "max") : (C = { minR: H, maxR: M.ratioMin, min: Y, max: M.valueMin }, l.focus.value = "min");
        break;
      case rl.RANGE:
        const L = H - M.offsetRatio, O = ct(M.ratioMin + L, l.innerMinRatio.value, l.innerMaxRatio.value - M.rangeRatio), U = Y - M.offsetModel, ye = ct(M.valueMin + U, l.innerMin.value, l.innerMax.value - M.rangeValue);
        C = { minR: O, maxR: O + M.rangeRatio, min: l.roundValueFn.value(ye), max: l.roundValueFn.value(ye + M.rangeValue) }, l.focus.value = "both";
        break;
    }
    u.value = u.value.min === null || u.value.max === null ? { min: C.min || e.min, max: C.max || e.max } : { min: C.min, max: C.max }, e.snap !== true || e.step === 0 ? (o.value = C.minR, i.value = C.maxR) : (o.value = a.convertModelToRatio(u.value.min), i.value = a.convertModelToRatio(u.value.max));
  }
  function I(q) {
    if (Vs.includes(q.keyCode) === false) return;
    je(q);
    const M = ([34, 33].includes(q.keyCode) ? 10 : 1) * l.keyStep.value, C = ([34, 37, 40].includes(q.keyCode) ? -1 : 1) * (l.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * M;
    if (l.focus.value === "both") {
      const H = u.value.max - u.value.min, Y = ct(l.roundValueFn.value(u.value.min + C), l.innerMin.value, l.innerMax.value - H);
      u.value = { min: Y, max: l.roundValueFn.value(Y + H) };
    } else {
      if (l.focus.value === false) return;
      {
        const H = l.focus.value;
        u.value = { ...u.value, [H]: ct(l.roundValueFn.value(u.value[H] + C), H === "min" ? l.innerMin.value : u.value.min, H === "max" ? l.innerMax.value : u.value.max) };
      }
    }
    D();
  }
  return () => {
    const q = a.getContent(g, p, _, (M) => {
      M.push(x(), F());
    });
    return d("div", { ref: r, class: "q-range " + l.classes.value + (e.modelValue.min === null || e.modelValue.max === null ? " q-slider--no-value" : ""), ...l.attributes.value, "aria-valuenow": e.modelValue.min + "|" + e.modelValue.max }, q);
  };
} });
he({ name: "QRating", props: { ...el, ...wn, modelValue: { type: Number, required: true }, max: { type: [String, Number], default: 5 }, icon: [String, Array], iconHalf: [String, Array], iconSelected: [String, Array], iconAriaLabel: [String, Array], color: [String, Array], colorHalf: [String, Array], colorSelected: [String, Array], noReset: Boolean, noDimming: Boolean, readonly: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = tl(e), r = $r(e), o = Cl(r), i = K(0);
  let u = {};
  const c = v(() => e.readonly !== true && e.disable !== true), s = v(() => `q-rating row inline items-center q-rating--${c.value === true ? "" : "non-"}editable` + (e.noDimming === true ? " q-rating--no-dimming" : "") + (e.disable === true ? " disabled" : "") + (e.color !== void 0 && Array.isArray(e.color) === false ? ` text-${e.color}` : "")), f = v(() => {
    const y = Array.isArray(e.icon) === true ? e.icon.length : 0, b = Array.isArray(e.iconSelected) === true ? e.iconSelected.length : 0, x = Array.isArray(e.iconHalf) === true ? e.iconHalf.length : 0, $ = Array.isArray(e.color) === true ? e.color.length : 0, F = Array.isArray(e.colorSelected) === true ? e.colorSelected.length : 0, D = Array.isArray(e.colorHalf) === true ? e.colorHalf.length : 0;
    return { iconLen: y, icon: y > 0 ? e.icon[y - 1] : e.icon, selIconLen: b, selIcon: b > 0 ? e.iconSelected[b - 1] : e.iconSelected, halfIconLen: x, halfIcon: x > 0 ? e.iconHalf[b - 1] : e.iconHalf, colorLen: $, color: $ > 0 ? e.color[$ - 1] : e.color, selColorLen: F, selColor: F > 0 ? e.colorSelected[F - 1] : e.colorSelected, halfColorLen: D, halfColor: D > 0 ? e.colorHalf[D - 1] : e.colorHalf };
  }), m = v(() => {
    if (typeof e.iconAriaLabel == "string") {
      const y = e.iconAriaLabel.length !== 0 ? `${e.iconAriaLabel} ` : "";
      return (b) => `${y}${b}`;
    }
    if (Array.isArray(e.iconAriaLabel) === true) {
      const y = e.iconAriaLabel.length;
      if (y > 0) return (b) => e.iconAriaLabel[Math.min(b, y) - 1];
    }
    return (y, b) => `${b} ${y}`;
  }), h = v(() => {
    const y = [], b = f.value, x = Math.ceil(e.modelValue), $ = c.value === true ? 0 : null, F = e.iconHalf === void 0 || x === e.modelValue ? -1 : x;
    for (let D = 1; D <= e.max; D++) {
      const B = i.value === 0 && e.modelValue >= D || i.value > 0 && i.value >= D, P = F === D && i.value < D, I = i.value > 0 && (P === true ? x : e.modelValue) >= D && i.value < D, q = P === true ? D <= b.halfColorLen ? e.colorHalf[D - 1] : b.halfColor : b.selColor !== void 0 && B === true ? D <= b.selColorLen ? e.colorSelected[D - 1] : b.selColor : D <= b.colorLen ? e.color[D - 1] : b.color, M = (P === true ? D <= b.halfIconLen ? e.iconHalf[D - 1] : b.halfIcon : b.selIcon !== void 0 && (B === true || I === true) ? D <= b.selIconLen ? e.iconSelected[D - 1] : b.selIcon : D <= b.iconLen ? e.icon[D - 1] : b.icon) || l.iconSet.rating.icon;
      y.push({ name: (P === true ? D <= b.halfIconLen ? e.iconHalf[D - 1] : b.halfIcon : b.selIcon !== void 0 && (B === true || I === true) ? D <= b.selIconLen ? e.iconSelected[D - 1] : b.selIcon : D <= b.iconLen ? e.icon[D - 1] : b.icon) || l.iconSet.rating.icon, attrs: { tabindex: $, role: "radio", "aria-checked": e.modelValue === D ? "true" : "false", "aria-label": m.value(D, M) }, iconClass: "q-rating__icon" + (B === true || P === true ? " q-rating__icon--active" : "") + (I === true ? " q-rating__icon--exselected" : "") + (i.value === D ? " q-rating__icon--hovered" : "") + (q !== void 0 ? ` text-${q}` : "") });
    }
    return y;
  }), g = v(() => {
    const y = { role: "radiogroup" };
    return e.disable === true && (y["aria-disabled"] = "true"), e.readonly === true && (y["aria-readonly"] = "true"), y;
  });
  function _(y) {
    if (c.value === true) {
      const b = ct(parseInt(y, 10), 1, parseInt(e.max, 10)), x = e.noReset !== true && e.modelValue === b ? 0 : b;
      x !== e.modelValue && n("update:modelValue", x), i.value = 0;
    }
  }
  function w(y) {
    c.value === true && (i.value = y);
  }
  function k(y, b) {
    switch (y.keyCode) {
      case 13:
      case 32:
        return _(b), je(y);
      case 37:
      case 40:
        return u[`rt${b - 1}`] && u[`rt${b - 1}`].focus(), je(y);
      case 39:
      case 38:
        return u[`rt${b + 1}`] && u[`rt${b + 1}`].focus(), je(y);
    }
  }
  function p() {
    i.value = 0;
  }
  return Ma(() => {
    u = {};
  }), () => {
    const y = [];
    return h.value.forEach(({ iconClass: b, name: x, attrs: $ }, F) => {
      const D = F + 1;
      y.push(d("div", { key: D, ref: (B) => {
        u[`rt${D}`] = B;
      }, class: "q-rating__icon-container flex flex-center", ...$, onClick() {
        _(D);
      }, onMouseover() {
        w(D);
      }, onMouseout: p, onFocus() {
        w(D);
      }, onBlur: p, onKeyup(B) {
        k(B, D);
      } }, qt(t[`tip-${D}`], [d(et, { class: b, name: x })])));
    }), e.name !== void 0 && e.disable !== true && o(y, "push"), d("div", { class: s.value, style: a.value, ...g.value }, y);
  };
} });
he({ name: "QResponsive", props: Ns, setup(e, { slots: t }) {
  const n = Hs(e);
  return () => d("div", { class: "q-responsive" }, [d("div", { class: "q-responsive__filler overflow-hidden" }, [d("div", { style: n.value })]), d("div", { class: "q-responsive__content absolute-full fit" }, Pe(t.default))]);
} });
var V1 = he({ props: ["store", "barStyle", "verticalBarStyle", "horizontalBarStyle"], setup(e) {
  return () => [d("div", { class: e.store.scroll.vertical.barClass.value, style: [e.barStyle, e.verticalBarStyle], "aria-hidden": "true", onMousedown: e.store.onVerticalMousedown }), d("div", { class: e.store.scroll.horizontal.barClass.value, style: [e.barStyle, e.horizontalBarStyle], "aria-hidden": "true", onMousedown: e.store.onHorizontalMousedown }), sn(d("div", { ref: e.store.scroll.vertical.ref, class: e.store.scroll.vertical.thumbClass.value, style: e.store.scroll.vertical.style.value, "aria-hidden": "true" }), e.store.thumbVertDir), sn(d("div", { ref: e.store.scroll.horizontal.ref, class: e.store.scroll.horizontal.thumbClass.value, style: e.store.scroll.horizontal.style.value, "aria-hidden": "true" }), e.store.thumbHorizDir)];
} }), Ld = ["vertical", "horizontal"], eu = { vertical: { offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y" }, horizontal: { offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x" } }, Bd = { prevent: true, mouse: true, mouseAllDir: true }, Fd = (e) => e >= 250 ? 50 : Math.ceil(e / 5), z1 = he({ name: "QScrollArea", props: { ...nt, thumbStyle: Object, verticalThumbStyle: Object, horizontalThumbStyle: Object, barStyle: [Array, String, Object], verticalBarStyle: [Array, String, Object], horizontalBarStyle: [Array, String, Object], verticalOffset: { type: Array, default: [0, 0] }, horizontalOffset: { type: Array, default: [0, 0] }, contentStyle: [Array, String, Object], contentActiveStyle: [Array, String, Object], delay: { type: [String, Number], default: 1e3 }, visible: { type: Boolean, default: null }, tabindex: [String, Number], onScroll: Function }, setup(e, { slots: t, emit: n }) {
  const l = K(false), a = K(false), r = K(false), o = { vertical: K(0), horizontal: K(0) }, i = { vertical: { ref: K(null), position: K(0), size: K(0) }, horizontal: { ref: K(null), position: K(0), size: K(0) } }, { proxy: u } = Se(), c = lt(e, u.$q);
  let s = null, f;
  const m = K(null), h = v(() => "q-scrollarea" + (c.value === true ? " q-scrollarea--dark" : ""));
  Object.assign(o, { verticalInner: v(() => o.vertical.value - e.verticalOffset[0] - e.verticalOffset[1]), horizontalInner: v(() => o.horizontal.value - e.horizontalOffset[0] - e.horizontalOffset[1]) }), i.vertical.percentage = v(() => {
    const C = i.vertical.size.value - o.vertical.value;
    if (C <= 0) return 0;
    const H = ct(i.vertical.position.value / C, 0, 1);
    return Math.round(H * 1e4) / 1e4;
  }), i.vertical.thumbHidden = v(() => (e.visible === null ? r.value : e.visible) !== true && l.value === false && a.value === false || i.vertical.size.value <= o.vertical.value + 1), i.vertical.thumbStart = v(() => e.verticalOffset[0] + i.vertical.percentage.value * (o.verticalInner.value - i.vertical.thumbSize.value)), i.vertical.thumbSize = v(() => Math.round(ct(o.verticalInner.value * o.verticalInner.value / i.vertical.size.value, Fd(o.verticalInner.value), o.verticalInner.value))), i.vertical.style = v(() => ({ ...e.thumbStyle, ...e.verticalThumbStyle, top: `${i.vertical.thumbStart.value}px`, height: `${i.vertical.thumbSize.value}px`, right: `${e.horizontalOffset[1]}px` })), i.vertical.thumbClass = v(() => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (i.vertical.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), i.vertical.barClass = v(() => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (i.vertical.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : "")), i.horizontal.percentage = v(() => {
    const C = i.horizontal.size.value - o.horizontal.value;
    if (C <= 0) return 0;
    const H = ct(Math.abs(i.horizontal.position.value) / C, 0, 1);
    return Math.round(H * 1e4) / 1e4;
  }), i.horizontal.thumbHidden = v(() => (e.visible === null ? r.value : e.visible) !== true && l.value === false && a.value === false || i.horizontal.size.value <= o.horizontal.value + 1), i.horizontal.thumbStart = v(() => e.horizontalOffset[0] + i.horizontal.percentage.value * (o.horizontalInner.value - i.horizontal.thumbSize.value)), i.horizontal.thumbSize = v(() => Math.round(ct(o.horizontalInner.value * o.horizontalInner.value / i.horizontal.size.value, Fd(o.horizontalInner.value), o.horizontalInner.value))), i.horizontal.style = v(() => ({ ...e.thumbStyle, ...e.horizontalThumbStyle, [u.$q.lang.rtl === true ? "right" : "left"]: `${i.horizontal.thumbStart.value}px`, width: `${i.horizontal.thumbSize.value}px`, bottom: `${e.verticalOffset[1]}px` })), i.horizontal.thumbClass = v(() => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (i.horizontal.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), i.horizontal.barClass = v(() => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (i.horizontal.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : ""));
  const g = v(() => i.vertical.thumbHidden.value === true && i.horizontal.thumbHidden.value === true ? e.contentStyle : e.contentActiveStyle);
  function _() {
    const C = {};
    return Ld.forEach((H) => {
      const Y = i[H];
      Object.assign(C, { [H + "Position"]: Y.position.value, [H + "Percentage"]: Y.percentage.value, [H + "Size"]: Y.size.value, [H + "ContainerSize"]: o[H].value, [H + "ContainerInnerSize"]: o[H + "Inner"].value });
    }), C;
  }
  const w = Ea(() => {
    const C = _();
    C.ref = u, n("scroll", C);
  }, 0);
  function k(C, H, Y) {
    if (Ld.includes(C) === false) {
      console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
      return;
    }
    (C === "vertical" ? pa : Bi)(m.value, H, Y);
  }
  function p({ height: C, width: H }) {
    let Y = false;
    o.vertical.value !== C && (o.vertical.value = C, Y = true), o.horizontal.value !== H && (o.horizontal.value = H, Y = true), Y === true && F();
  }
  function y({ position: C }) {
    let H = false;
    i.vertical.position.value !== C.top && (i.vertical.position.value = C.top, H = true), i.horizontal.position.value !== C.left && (i.horizontal.position.value = C.left, H = true), H === true && F();
  }
  function b({ height: C, width: H }) {
    i.horizontal.size.value !== H && (i.horizontal.size.value = H, F()), i.vertical.size.value !== C && (i.vertical.size.value = C, F());
  }
  function x(C, H) {
    const Y = i[H];
    if (C.isFirst === true) {
      if (Y.thumbHidden.value === true) return;
      f = Y.position.value, a.value = true;
    } else if (a.value !== true) return;
    C.isFinal === true && (a.value = false);
    const L = eu[H], O = (Y.size.value - o[H].value) / (o[H + "Inner"].value - Y.thumbSize.value), U = C.distance[L.dist], ye = f + (C.direction === L.dir ? 1 : -1) * U * O;
    D(ye, H);
  }
  function $(C, H) {
    const Y = i[H];
    if (Y.thumbHidden.value !== true) {
      const L = H === "vertical" ? e.verticalOffset[0] : e.horizontalOffset[0], O = C[eu[H].offset] - L, U = Y.thumbStart.value - L;
      if (O < U || O > U + Y.thumbSize.value) {
        const ye = O - Y.thumbSize.value / 2, W = ct(ye / (o[H + "Inner"].value - Y.thumbSize.value), 0, 1);
        D(W * Math.max(0, Y.size.value - o[H].value), H);
      }
      Y.ref.value !== null && Y.ref.value.dispatchEvent(new MouseEvent(C.type, C));
    }
  }
  function F() {
    l.value = true, s !== null && clearTimeout(s), s = setTimeout(() => {
      s = null, l.value = false;
    }, e.delay), e.onScroll !== void 0 && w();
  }
  function D(C, H) {
    m.value[eu[H].scroll] = C;
  }
  let B = null;
  function P() {
    B !== null && clearTimeout(B), B = setTimeout(() => {
      B = null, r.value = true;
    }, u.$q.platform.is.ios ? 50 : 0);
  }
  function I() {
    B !== null && (clearTimeout(B), B = null), r.value = false;
  }
  let q = null;
  be(() => u.$q.lang.rtl, (C) => {
    m.value !== null && Bi(m.value, Math.abs(i.horizontal.position.value) * (C === true ? -1 : 1));
  }), Vn(() => {
    q = { top: i.vertical.position.value, left: i.horizontal.position.value };
  }), Sl(() => {
    if (q === null) return;
    const C = m.value;
    C !== null && (Bi(C, q.left), pa(C, q.top));
  }), Ke(w.cancel), Object.assign(u, { getScrollTarget: () => m.value, getScroll: _, getScrollPosition: () => ({ top: i.vertical.position.value, left: i.horizontal.position.value }), getScrollPercentage: () => ({ top: i.vertical.percentage.value, left: i.horizontal.percentage.value }), setScrollPosition: k, setScrollPercentage(C, H, Y) {
    k(C, H * (i[C].size.value - o[C].value) * (C === "horizontal" && u.$q.lang.rtl === true ? -1 : 1), Y);
  } });
  const M = { scroll: i, thumbVertDir: [[gn, (C) => {
    x(C, "vertical");
  }, void 0, { vertical: true, ...Bd }]], thumbHorizDir: [[gn, (C) => {
    x(C, "horizontal");
  }, void 0, { horizontal: true, ...Bd }]], onVerticalMousedown(C) {
    $(C, "vertical");
  }, onHorizontalMousedown(C) {
    $(C, "horizontal");
  } };
  return () => d("div", { class: h.value, onMouseenter: P, onMouseleave: I }, [d("div", { ref: m, class: "q-scrollarea__container scroll relative-position fit hide-scrollbar", tabindex: e.tabindex !== void 0 ? e.tabindex : void 0 }, [d("div", { class: "q-scrollarea__content absolute", style: g.value }, qt(t.default, [d(Ul, { debounce: 0, onResize: b })])), d($h, { axis: "both", onScroll: y })]), d(Ul, { debounce: 0, onResize: p }), d(V1, { store: M, barStyle: e.barStyle, verticalBarStyle: e.verticalBarStyle, horizontalBarStyle: e.horizontalBarStyle })]);
} }), Cn = 1e3, I1 = ["start", "center", "end", "start-force", "center-force", "end-force"], Bh = Array.prototype.filter, D1 = __QUASAR_SSR__ || window.getComputedStyle(document.body).overflowAnchor === void 0 ? St : function(e, t) {
  e !== null && (e._qOverflowAnimationFrame !== void 0 && cancelAnimationFrame(e._qOverflowAnimationFrame), e._qOverflowAnimationFrame = requestAnimationFrame(() => {
    if (e === null) return;
    e._qOverflowAnimationFrame = void 0;
    const n = e.children || [];
    Bh.call(n, (a) => a.dataset && a.dataset.qVsAnchor !== void 0).forEach((a) => {
      delete a.dataset.qVsAnchor;
    });
    const l = n[t];
    (l == null ? void 0 : l.dataset) && (l.dataset.qVsAnchor = "");
  }));
};
function _a(e, t) {
  return e + t;
}
function tu(e, t, n, l, a, r, o, i) {
  const u = e === window ? document.scrollingElement || document.documentElement : e, c = a === true ? "offsetWidth" : "offsetHeight", s = { scrollStart: 0, scrollViewSize: -o - i, scrollMaxSize: 0, offsetStart: -o, offsetEnd: -i };
  if (a === true ? (e === window ? (s.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, s.scrollViewSize += document.documentElement.clientWidth) : (s.scrollStart = u.scrollLeft, s.scrollViewSize += u.clientWidth), s.scrollMaxSize = u.scrollWidth, r === true && (s.scrollStart = (Sr === true ? s.scrollMaxSize - s.scrollViewSize : 0) - s.scrollStart)) : (e === window ? (s.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0, s.scrollViewSize += document.documentElement.clientHeight) : (s.scrollStart = u.scrollTop, s.scrollViewSize += u.clientHeight), s.scrollMaxSize = u.scrollHeight), n !== null) for (let f = n.previousElementSibling; f !== null; f = f.previousElementSibling) f.classList.contains("q-virtual-scroll--skip") === false && (s.offsetStart += f[c]);
  if (l !== null) for (let f = l.nextElementSibling; f !== null; f = f.nextElementSibling) f.classList.contains("q-virtual-scroll--skip") === false && (s.offsetEnd += f[c]);
  if (t !== e) {
    const f = u.getBoundingClientRect(), m = t.getBoundingClientRect();
    a === true ? (s.offsetStart += m.left - f.left, s.offsetEnd -= m.width) : (s.offsetStart += m.top - f.top, s.offsetEnd -= m.height), e !== window && (s.offsetStart += s.scrollStart), s.offsetEnd += s.scrollMaxSize - s.offsetStart;
  }
  return s;
}
function Od(e, t, n, l) {
  t === "end" && (t = (e === window ? document.body : e)[n === true ? "scrollWidth" : "scrollHeight"]), e === window ? n === true ? (l === true && (t = (Sr === true ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - t), window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t) : n === true ? (l === true && (t = (Sr === true ? e.scrollWidth - e.offsetWidth : 0) - t), e.scrollLeft = t) : e.scrollTop = t;
}
function Ia(e, t, n, l) {
  if (n >= l) return 0;
  const a = t.length, r = Math.floor(n / Cn), o = Math.floor((l - 1) / Cn) + 1;
  let i = e.slice(r, o).reduce(_a, 0);
  return n % Cn !== 0 && (i -= t.slice(r * Cn, n).reduce(_a, 0)), l % Cn !== 0 && l !== a && (i -= t.slice(l, o * Cn).reduce(_a, 0)), i;
}
var Fh = { virtualScrollSliceSize: { type: [Number, String], default: 10 }, virtualScrollSliceRatioBefore: { type: [Number, String], default: 1 }, virtualScrollSliceRatioAfter: { type: [Number, String], default: 1 }, virtualScrollItemSize: { type: [Number, String], default: 24 }, virtualScrollStickySizeStart: { type: [Number, String], default: 0 }, virtualScrollStickySizeEnd: { type: [Number, String], default: 0 }, tableColspan: [Number, String] }, Oh = Object.keys(Fh), ju = { virtualScrollHorizontal: Boolean, onVirtualScroll: Function, ...Fh };
function Vh({ virtualScrollLength: e, getVirtualScrollTarget: t, getVirtualScrollEl: n, virtualScrollItemSizeComputed: l }) {
  const a = Se(), { props: r, emit: o, proxy: i } = a, { $q: u } = i;
  let c, s, f, m = [], h;
  const g = K(0), _ = K(0), w = K({}), k = K(null), p = K(null), y = K(null), b = K({ from: 0, to: 0 }), x = v(() => r.tableColspan !== void 0 ? r.tableColspan : 100);
  l === void 0 && (l = v(() => r.virtualScrollItemSize));
  const $ = v(() => l.value + ";" + r.virtualScrollHorizontal), F = v(() => $.value + ";" + r.virtualScrollSliceRatioBefore + ";" + r.virtualScrollSliceRatioAfter);
  be(F, () => {
    Y();
  }), be($, D);
  function D() {
    H(s, true);
  }
  function B(W) {
    H(W === void 0 ? s : W);
  }
  function P(W, T) {
    const ee = t();
    if (ee == null || ee.nodeType === 8) return;
    const G = tu(ee, n(), k.value, p.value, r.virtualScrollHorizontal, u.lang.rtl, r.virtualScrollStickySizeStart, r.virtualScrollStickySizeEnd);
    f !== G.scrollViewSize && Y(G.scrollViewSize), q(ee, G, Math.min(e.value - 1, Math.max(0, parseInt(W, 10) || 0)), 0, I1.indexOf(T) !== -1 ? T : s !== -1 && W > s ? "end" : "start");
  }
  function I() {
    const W = t();
    if (W == null || W.nodeType === 8) return;
    const T = tu(W, n(), k.value, p.value, r.virtualScrollHorizontal, u.lang.rtl, r.virtualScrollStickySizeStart, r.virtualScrollStickySizeEnd), ee = e.value - 1, G = T.scrollMaxSize - T.offsetStart - T.offsetEnd - _.value;
    if (c === T.scrollStart) return;
    if (T.scrollMaxSize <= 0) {
      q(W, T, 0, 0);
      return;
    }
    f !== T.scrollViewSize && Y(T.scrollViewSize), M(b.value.from);
    const fe = Math.floor(T.scrollMaxSize - Math.max(T.scrollViewSize, T.offsetEnd) - Math.min(h[ee], T.scrollViewSize / 2));
    if (fe > 0 && Math.ceil(T.scrollStart) >= fe) {
      q(W, T, ee, T.scrollMaxSize - T.offsetEnd - m.reduce(_a, 0));
      return;
    }
    let R = 0, A = T.scrollStart - T.offsetStart, te = A;
    if (A <= G && A + T.scrollViewSize >= g.value) A -= g.value, R = b.value.from, te = A;
    else for (let V = 0; A >= m[V] && R < ee; V++) A -= m[V], R += Cn;
    for (; A > 0 && R < ee; ) A -= h[R], A > -T.scrollViewSize ? (R++, te = A) : te = h[R] + A;
    q(W, T, R, te);
  }
  function q(W, T, ee, G, fe) {
    const R = typeof fe == "string" && fe.indexOf("-force") !== -1, A = R === true ? fe.replace("-force", "") : fe, te = A !== void 0 ? A : "start";
    let V = Math.max(0, ee - w.value[te]), j = V + w.value.total;
    j > e.value && (j = e.value, V = Math.max(0, j - w.value.total)), c = T.scrollStart;
    const ue = V !== b.value.from || j !== b.value.to;
    if (ue === false && A === void 0) {
      O(ee);
      return;
    }
    const { activeElement: S } = document, E = y.value;
    ue === true && E !== null && E !== S && E.contains(S) === true && (E.addEventListener("focusout", C), setTimeout(() => {
      E == null ? void 0 : E.removeEventListener("focusout", C);
    })), D1(E, ee - V);
    const N = A !== void 0 ? h.slice(V, ee).reduce(_a, 0) : 0;
    if (ue === true) {
      const ne = j >= b.value.from && V <= b.value.to ? b.value.to : j;
      b.value = { from: V, to: ne }, g.value = Ia(m, h, 0, V), _.value = Ia(m, h, j, e.value), requestAnimationFrame(() => {
        b.value.to !== j && c === T.scrollStart && (b.value = { from: b.value.from, to: j }, _.value = Ia(m, h, j, e.value));
      });
    }
    requestAnimationFrame(() => {
      if (c !== T.scrollStart) return;
      ue === true && M(V);
      const ne = h.slice(V, ee).reduce(_a, 0), le = ne + T.offsetStart + g.value, X = le + h[ee];
      let ve = le + G;
      if (A !== void 0) {
        const ge = ne - N, me = T.scrollStart + ge;
        ve = R !== true && me < le && X < me + T.scrollViewSize ? me : A === "end" ? X - T.scrollViewSize : le - (A === "start" ? 0 : Math.round((T.scrollViewSize - h[ee]) / 2));
      }
      c = ve, Od(W, ve, r.virtualScrollHorizontal, u.lang.rtl), O(ee);
    });
  }
  function M(W) {
    const T = y.value;
    if (T) {
      const ee = Bh.call(T.children, (V) => V.classList && V.classList.contains("q-virtual-scroll--skip") === false), G = ee.length, fe = r.virtualScrollHorizontal === true ? (V) => V.getBoundingClientRect().width : (V) => V.offsetHeight;
      let R = W, A, te;
      for (let V = 0; V < G; ) {
        for (A = fe(ee[V]), V++; V < G && ee[V].classList.contains("q-virtual-scroll--with-prev") === true; ) A += fe(ee[V]), V++;
        te = A - h[R], te !== 0 && (h[R] += te, m[Math.floor(R / Cn)] += te), R++;
      }
    }
  }
  function C() {
    var _a2;
    (_a2 = y.value) == null ? void 0 : _a2.focus();
  }
  function H(W, T) {
    const ee = 1 * l.value;
    (T === true || Array.isArray(h) === false) && (h = []);
    const G = h.length;
    h.length = e.value;
    for (let R = e.value - 1; R >= G; R--) h[R] = ee;
    const fe = Math.floor((e.value - 1) / Cn);
    m = [];
    for (let R = 0; R <= fe; R++) {
      let A = 0;
      const te = Math.min((R + 1) * Cn, e.value);
      for (let V = R * Cn; V < te; V++) A += h[V];
      m.push(A);
    }
    s = -1, c = void 0, g.value = Ia(m, h, 0, b.value.from), _.value = Ia(m, h, b.value.to, e.value), W >= 0 ? (M(b.value.from), We(() => {
      P(W);
    })) : U();
  }
  function Y(W) {
    if (W === void 0 && typeof window < "u") {
      const A = t();
      A != null && A.nodeType !== 8 && (W = tu(A, n(), k.value, p.value, r.virtualScrollHorizontal, u.lang.rtl, r.virtualScrollStickySizeStart, r.virtualScrollStickySizeEnd).scrollViewSize);
    }
    f = W;
    const T = parseFloat(r.virtualScrollSliceRatioBefore) || 0, ee = parseFloat(r.virtualScrollSliceRatioAfter) || 0, G = 1 + T + ee, fe = W === void 0 || W <= 0 ? 1 : Math.ceil(W / l.value), R = Math.max(1, fe, Math.ceil((r.virtualScrollSliceSize > 0 ? r.virtualScrollSliceSize : 10) / G));
    w.value = { total: Math.ceil(R * G), start: Math.ceil(R * T), center: Math.ceil(R * (0.5 + T)), end: Math.ceil(R * (1 + T)), view: fe };
  }
  function L(W, T) {
    const ee = r.virtualScrollHorizontal === true ? "width" : "height", G = { ["--q-virtual-scroll-item-" + ee]: l.value + "px" };
    return [W === "tbody" ? d(W, { class: "q-virtual-scroll__padding", key: "before", ref: k }, [d("tr", [d("td", { style: { [ee]: `${g.value}px`, ...G }, colspan: x.value })])]) : d(W, { class: "q-virtual-scroll__padding", key: "before", ref: k, style: { [ee]: `${g.value}px`, ...G } }), d(W, { class: "q-virtual-scroll__content", key: "content", ref: y, tabindex: -1 }, T.flat()), W === "tbody" ? d(W, { class: "q-virtual-scroll__padding", key: "after", ref: p }, [d("tr", [d("td", { style: { [ee]: `${_.value}px`, ...G }, colspan: x.value })])]) : d(W, { class: "q-virtual-scroll__padding", key: "after", ref: p, style: { [ee]: `${_.value}px`, ...G } })];
  }
  function O(W) {
    s !== W && (r.onVirtualScroll !== void 0 && o("virtualScroll", { index: W, from: b.value.from, to: b.value.to - 1, direction: W < s ? "decrease" : "increase", ref: i }), s = W);
  }
  Y();
  const U = Ea(I, u.platform.is.ios === true ? 120 : 35);
  Yo(() => {
    Y();
  });
  let ye = false;
  return Vn(() => {
    ye = true;
  }), Sl(() => {
    if (ye !== true) return;
    const W = t();
    c !== void 0 && W !== void 0 && W !== null && W.nodeType !== 8 ? Od(W, c, r.virtualScrollHorizontal, u.lang.rtl) : P(s);
  }), __QUASAR_SSR__ || Ke(() => {
    U.cancel();
  }), Object.assign(i, { scrollTo: P, reset: D, refresh: B }), { virtualScrollSliceRange: b, virtualScrollSliceSizeComputed: w, setVirtualScrollSize: Y, onVirtualScrollEvt: U, localResetVirtualScroll: H, padVirtualScroll: L, scrollTo: P, reset: D, refresh: B };
}
var Vd = (e) => ["add", "add-unique", "toggle"].includes(e), N1 = ".*+?^${}()|[]\\", H1 = Object.keys(di);
function nu(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (l) => l !== null && typeof l == "object" && n in l ? l[n] : l;
}
var j1 = he({ name: "QSelect", inheritAttrs: false, props: { ...ju, ...wn, ...di, modelValue: { required: true }, multiple: Boolean, displayValue: [String, Number], displayValueHtml: Boolean, dropdownIcon: String, options: { type: Array, default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], hideSelected: Boolean, hideDropdownIcon: Boolean, fillInput: Boolean, maxValues: [Number, String], optionsDense: Boolean, optionsDark: { type: Boolean, default: null }, optionsSelectedClass: String, optionsHtml: Boolean, optionsCover: Boolean, menuShrink: Boolean, menuAnchor: String, menuSelf: String, menuOffset: Array, popupContentClass: String, popupContentStyle: [String, Array, Object], popupNoRouteDismiss: Boolean, useInput: Boolean, useChips: Boolean, newValueMode: { type: String, validator: Vd }, mapOptions: Boolean, emitValue: Boolean, disableTabSelection: Boolean, inputDebounce: { type: [Number, String], default: 500 }, inputClass: [Array, String, Object], inputStyle: [Array, String, Object], tabindex: { type: [String, Number], default: 0 }, autocomplete: String, transitionShow: {}, transitionHide: {}, transitionDuration: {}, behavior: { type: String, validator: (e) => ["default", "menu", "dialog"].includes(e), default: "default" }, virtualScrollItemSize: ju.virtualScrollItemSize.type, onNewValue: Function, onFilter: Function }, emits: [...fi, "add", "remove", "inputValue", "keyup", "keypress", "keydown", "popupShow", "popupHide", "filterAbort"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = K(false), o = K(false), i = K(-1), u = K(""), c = K(false), s = K(false);
  let f = null, m = null, h, g, _, w = null, k, p, y, b;
  const x = K(null), $ = K(null), F = K(null), D = K(null), B = K(null), P = Ms(e), I = Mh(se), q = v(() => Array.isArray(e.options) ? e.options.length : 0), M = v(() => e.virtualScrollItemSize === void 0 ? e.optionsDense === true ? 24 : 48 : e.virtualScrollItemSize), { virtualScrollSliceRange: C, virtualScrollSliceSizeComputed: H, localResetVirtualScroll: Y, padVirtualScroll: L, onVirtualScrollEvt: O, scrollTo: U, setVirtualScrollSize: ye } = Vh({ virtualScrollLength: q, getVirtualScrollTarget: jt, getVirtualScrollEl: Ct, virtualScrollItemSizeComputed: M }), W = vi(), T = v(() => {
    const J = e.mapOptions === true && e.multiple !== true, Re = e.modelValue !== void 0 && (e.modelValue !== null || J === true) ? e.multiple === true && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
    if (e.mapOptions === true && Array.isArray(e.options) === true) {
      const $e = e.mapOptions === true && h !== void 0 ? h : [], tt = Re.map((gt) => re(gt, $e));
      return e.modelValue === null && J === true ? tt.filter((gt) => gt !== null) : tt;
    }
    return Re;
  }), ee = v(() => {
    const J = {};
    return H1.forEach((Re) => {
      const $e = e[Re];
      $e !== void 0 && (J[Re] = $e);
    }), J;
  }), G = v(() => e.optionsDark === null ? W.isDark.value : e.optionsDark), fe = v(() => Kl(T.value)), R = v(() => {
    let J = "q-field__input q-placeholder col";
    return e.hideSelected === true || T.value.length === 0 ? [J, e.inputClass] : (J += " q-field__input--padding", e.inputClass === void 0 ? J : [J, e.inputClass]);
  }), A = v(() => (e.virtualScrollHorizontal === true ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")), te = v(() => q.value === 0), V = v(() => T.value.map((J) => ae.value(J)).join(", ")), j = v(() => e.displayValue !== void 0 ? e.displayValue : V.value), ue = v(() => e.optionsHtml === true ? () => true : (J) => (J == null ? void 0 : J.html) === true), S = v(() => e.displayValueHtml === true || e.displayValue === void 0 && (e.optionsHtml === true || T.value.some(ue.value))), E = v(() => W.focused.value === true ? e.tabindex : -1), N = v(() => {
    const J = { tabindex: e.tabindex, role: "combobox", "aria-label": e.label, "aria-readonly": e.readonly === true ? "true" : "false", "aria-autocomplete": e.useInput === true ? "list" : "none", "aria-expanded": r.value === true ? "true" : "false", "aria-controls": `${W.targetUid.value}_lb` };
    return i.value >= 0 && (J["aria-activedescendant"] = `${W.targetUid.value}_${i.value}`), J;
  }), ne = v(() => ({ id: `${W.targetUid.value}_lb`, role: "listbox", "aria-multiselectable": e.multiple === true ? "true" : "false" })), le = v(() => T.value.map((J, Re) => ({ index: Re, opt: J, html: ue.value(J), selected: true, removeAtIndex: Me, toggleOption: Ve, tabindex: E.value }))), X = v(() => {
    if (q.value === 0) return [];
    const { from: J, to: Re } = C.value;
    return e.options.slice(J, Re).map(($e, tt) => {
      const gt = Q.value($e) === true, vt = _e($e) === true, Dt = J + tt, $t = { clickable: true, active: vt, activeClass: me.value, manualFocus: true, focused: false, disable: gt, tabindex: -1, dense: e.optionsDense, dark: G.value, role: "option", "aria-selected": vt === true ? "true" : "false", id: `${W.targetUid.value}_${Dt}`, onClick: () => {
        Ve($e);
      } };
      return gt !== true && (i.value === Dt && ($t.focused = true), a.platform.is.desktop === true && ($t.onMousemove = () => {
        r.value === true && ie(Dt);
      })), { index: Dt, opt: $e, html: ue.value($e), label: ae.value($e), selected: $t.active, focused: $t.focused, toggleOption: Ve, setOptionIndex: ie, itemProps: $t };
    });
  }), ve = v(() => e.dropdownIcon !== void 0 ? e.dropdownIcon : a.iconSet.arrow.dropdown), ge = v(() => e.optionsCover === false && e.outlined !== true && e.standout !== true && e.borderless !== true && e.rounded !== true), me = v(() => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : ""), de = v(() => nu(e.optionValue, "value")), ae = v(() => nu(e.optionLabel, "label")), Q = v(() => nu(e.optionDisable, "disable")), oe = v(() => T.value.map(de.value)), we = v(() => {
    const J = { onInput: se, onChange: I, onKeydown: it, onKeyup: Ae, onKeypress: Ye, onFocus: Ce, onClick(Re) {
      g === true && wt(Re);
    } };
    return J.onCompositionstart = J.onCompositionupdate = J.onCompositionend = I, J;
  });
  be(T, (J) => {
    h = J, e.useInput === true && e.fillInput === true && e.multiple !== true && W.innerLoading.value !== true && (o.value !== true && r.value !== true || fe.value !== true) && (_ !== true && cn(), (o.value === true || r.value === true) && Be(""));
  }, { immediate: true }), be(() => e.fillInput, cn), be(r, gi), be(q, Mg);
  function ke(J) {
    return e.emitValue === true ? de.value(J) : J;
  }
  function qe(J) {
    if (J !== -1 && J < T.value.length) if (e.multiple === true) {
      const Re = e.modelValue.slice();
      n("remove", { index: J, value: Re.splice(J, 1)[0] }), n("update:modelValue", Re);
    } else n("update:modelValue", null);
  }
  function Me(J) {
    qe(J), W.focus();
  }
  function He(J, Re) {
    const $e = ke(J);
    if (e.multiple !== true) {
      e.fillInput === true && Fe(ae.value(J), true, true), n("update:modelValue", $e);
      return;
    }
    if (T.value.length === 0) {
      n("add", { index: 0, value: $e }), n("update:modelValue", e.multiple === true ? [$e] : $e);
      return;
    }
    if (Re === true && _e(J) === true || e.maxValues !== void 0 && e.modelValue.length >= e.maxValues) return;
    const tt = e.modelValue.slice();
    n("add", { index: tt.length, value: $e }), tt.push($e), n("update:modelValue", tt);
  }
  function Ve(J, Re) {
    var _a2;
    if (W.editable.value !== true || J === void 0 || Q.value(J) === true) return;
    const $e = de.value(J);
    if (e.multiple !== true) {
      Re !== true && (Fe(e.fillInput === true ? ae.value(J) : "", true, true), at()), (_a2 = $.value) == null ? void 0 : _a2.focus(), (T.value.length === 0 || kn(de.value(T.value[0]), $e) !== true) && n("update:modelValue", e.emitValue === true ? $e : J);
      return;
    }
    if ((g !== true || c.value === true) && W.focus(), Ce(), T.value.length === 0) {
      const vt = e.emitValue === true ? $e : J;
      n("add", { index: 0, value: vt }), n("update:modelValue", e.multiple === true ? [vt] : vt);
      return;
    }
    const tt = e.modelValue.slice(), gt = oe.value.findIndex((vt) => kn(vt, $e));
    if (gt !== -1) n("remove", { index: gt, value: tt.splice(gt, 1)[0] });
    else {
      if (e.maxValues !== void 0 && tt.length >= e.maxValues) return;
      const vt = e.emitValue === true ? $e : J;
      n("add", { index: tt.length, value: vt }), tt.push(vt);
    }
    n("update:modelValue", tt);
  }
  function ie(J) {
    if (a.platform.is.desktop !== true) return;
    const Re = J !== -1 && J < q.value ? J : -1;
    i.value !== Re && (i.value = Re);
  }
  function pe(J = 1, Re) {
    if (r.value === true) {
      let $e = i.value;
      do
        $e = Co($e + J, -1, q.value - 1);
      while ($e !== -1 && $e !== i.value && Q.value(e.options[$e]) === true);
      i.value !== $e && (ie($e), U($e), Re !== true && e.useInput === true && e.fillInput === true && xe($e >= 0 ? ae.value(e.options[$e]) : k, true));
    }
  }
  function re(J, Re) {
    const $e = (tt) => kn(de.value(tt), J);
    return e.options.find($e) || Re.find($e) || J;
  }
  function _e(J) {
    const Re = de.value(J);
    return oe.value.find(($e) => kn($e, Re)) !== void 0;
  }
  function Ce(J) {
    e.useInput === true && $.value !== null && (J === void 0 || $.value === J.target && J.target.value === V.value) && $.value.select();
  }
  function Oe(J) {
    yn(J, 27) === true && r.value === true && (wt(J), at(), cn()), n("keyup", J);
  }
  function Ae(J) {
    const { value: Re } = J.target;
    if (J.keyCode !== void 0) {
      Oe(J);
      return;
    }
    if (J.target.value = "", f !== null && (clearTimeout(f), f = null), m !== null && (clearTimeout(m), m = null), cn(), typeof Re == "string" && Re.length !== 0) {
      const $e = Re.toLocaleLowerCase(), tt = (vt) => {
        const Dt = e.options.find(($t) => String(vt.value($t)).toLocaleLowerCase() === $e);
        return Dt === void 0 ? false : (T.value.indexOf(Dt) === -1 ? Ve(Dt) : at(), true);
      }, gt = (vt) => {
        tt(de) !== true && vt !== true && tt(ae) !== true && Be(Re, true, () => gt(true));
      };
      gt();
    } else W.clearValue(J);
  }
  function Ye(J) {
    n("keypress", J);
  }
  function it(J) {
    if (n("keydown", J), Yl(J) === true) return;
    const Re = u.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0), $e = J.shiftKey !== true && e.disableTabSelection !== true && e.multiple !== true && (i.value !== -1 || Re === true);
    if (J.keyCode === 27) {
      Vt(J);
      return;
    }
    if (J.keyCode === 9 && $e === false) {
      Le();
      return;
    }
    if (J.target === void 0 || J.target.id !== W.targetUid.value || W.editable.value !== true) return;
    if (J.keyCode === 40 && W.innerLoading.value !== true && r.value === false) {
      je(J), De();
      return;
    }
    if (J.keyCode === 8 && (e.useChips === true || e.clearable === true) && e.hideSelected !== true && u.value.length === 0) {
      e.multiple === true && Array.isArray(e.modelValue) === true ? qe(e.modelValue.length - 1) : e.multiple !== true && e.modelValue !== null && n("update:modelValue", null);
      return;
    }
    (J.keyCode === 35 || J.keyCode === 36) && (typeof u.value != "string" || u.value.length === 0) && (je(J), i.value = -1, pe(J.keyCode === 36 ? 1 : -1, e.multiple)), (J.keyCode === 33 || J.keyCode === 34) && H.value !== void 0 && (je(J), i.value = Math.max(-1, Math.min(q.value, i.value + (J.keyCode === 33 ? -1 : 1) * H.value.view)), pe(J.keyCode === 33 ? 1 : -1, e.multiple)), (J.keyCode === 38 || J.keyCode === 40) && (je(J), pe(J.keyCode === 38 ? -1 : 1, e.multiple));
    const tt = q.value;
    if ((y === void 0 || b < Date.now()) && (y = ""), tt > 0 && e.useInput !== true && J.key !== void 0 && J.key.length === 1 && J.altKey === false && J.ctrlKey === false && J.metaKey === false && (J.keyCode !== 32 || y.length !== 0)) {
      r.value !== true && De(J);
      const gt = J.key.toLocaleLowerCase(), vt = y.length === 1 && y[0] === gt;
      b = Date.now() + 1500, vt === false && (je(J), y += gt);
      const Dt = new RegExp("^" + y.split("").map((bi) => N1.indexOf(bi) !== -1 ? "\\" + bi : bi).join(".*"), "i");
      let $t = i.value;
      if (vt === true || $t < 0 || Dt.test(ae.value(e.options[$t])) !== true) do
        $t = Co($t + 1, -1, tt - 1);
      while ($t !== i.value && (Q.value(e.options[$t]) === true || Dt.test(ae.value(e.options[$t])) !== true));
      i.value !== $t && We(() => {
        ie($t), U($t), $t >= 0 && e.useInput === true && e.fillInput === true && xe(ae.value(e.options[$t]), true);
      });
      return;
    }
    if (!(J.keyCode !== 13 && (J.keyCode !== 32 || e.useInput === true || y !== "") && (J.keyCode !== 9 || $e === false))) {
      if (J.keyCode !== 9 && je(J), i.value !== -1 && i.value < tt) {
        Ve(e.options[i.value]);
        return;
      }
      if (Re === true) {
        const gt = (vt, Dt) => {
          var _a2;
          if (Dt) {
            if (Vd(Dt) !== true) return;
          } else Dt = e.newValueMode;
          if (Fe("", e.multiple !== true, true), vt == null) return;
          (Dt === "toggle" ? Ve : He)(vt, Dt === "add-unique"), e.multiple !== true && ((_a2 = $.value) == null ? void 0 : _a2.focus(), at());
        };
        if (e.onNewValue !== void 0 ? n("newValue", u.value, gt) : gt(u.value), e.multiple !== true) return;
      }
      r.value === true ? Le() : W.innerLoading.value !== true && De();
    }
  }
  function Ct() {
    return g === true ? B.value : F.value !== null && F.value.contentEl !== null ? F.value.contentEl : void 0;
  }
  function jt() {
    return Ct();
  }
  function nl() {
    return e.hideSelected === true ? [] : t["selected-item"] !== void 0 ? le.value.map((J) => t["selected-item"](J)).slice() : t.selected !== void 0 ? [].concat(t.selected()) : e.useChips === true ? le.value.map((J, Re) => d(Hm, { key: "option-" + Re, removable: W.editable.value === true && Q.value(J.opt) !== true, dense: true, textColor: e.color, tabindex: E.value, onRemove() {
      J.removeAtIndex(Re);
    } }, () => d("span", { class: "ellipsis", [J.html === true ? "innerHTML" : "textContent"]: ae.value(J.opt) }))) : [d("span", { class: "ellipsis", [S.value === true ? "innerHTML" : "textContent"]: j.value })];
  }
  function ln() {
    if (te.value === true) return t["no-option"] !== void 0 ? t["no-option"]({ inputValue: u.value }) : void 0;
    const J = t.option !== void 0 ? t.option : ($e) => d(Ca, { key: $e.index, ...$e.itemProps }, () => d(mn, () => d(Du, () => d("span", { [$e.html === true ? "innerHTML" : "textContent"]: $e.label }))));
    let Re = L("div", X.value.map(J));
    return t["before-options"] !== void 0 && (Re = t["before-options"]().concat(Re)), qt(t["after-options"], Re);
  }
  function In(J, Re) {
    const $e = Re === true ? { ...N.value, ...W.splitAttrs.attributes.value } : void 0, tt = { ref: Re === true ? $ : void 0, key: "i_t", class: R.value, style: e.inputStyle, value: u.value !== void 0 ? u.value : "", type: "search", ...$e, id: Re === true ? W.targetUid.value : void 0, maxlength: e.maxlength, autocomplete: e.autocomplete, "data-autofocus": J === true || e.autofocus === true || void 0, disabled: e.disable === true, readonly: e.readonly === true, ...we.value };
    return J !== true && g === true && (Array.isArray(tt.class) === true ? tt.class = [...tt.class, "no-pointer-events"] : tt.class += " no-pointer-events"), d("input", tt);
  }
  function se(J) {
    f !== null && (clearTimeout(f), f = null), m !== null && (clearTimeout(m), m = null), !(J && J.target && J.target.qComposing === true) && (xe(J.target.value || ""), _ = true, k = u.value, W.focused.value !== true && (g !== true || c.value === true) && W.focus(), e.onFilter !== void 0 && (f = setTimeout(() => {
      f = null, Be(u.value);
    }, e.inputDebounce)));
  }
  function xe(J, Re) {
    u.value !== J && (u.value = J, Re === true || e.inputDebounce === 0 || e.inputDebounce === "0" ? n("inputValue", J) : m = setTimeout(() => {
      m = null, n("inputValue", J);
    }, e.inputDebounce));
  }
  function Fe(J, Re, $e) {
    _ = $e !== true, e.useInput === true && (xe(J, true), (Re === true || $e !== true) && (k = J), Re !== true && Be(J));
  }
  function Be(J, Re, $e) {
    if (e.onFilter === void 0 || Re !== true && W.focused.value !== true) return;
    W.innerLoading.value === true ? n("filterAbort") : (W.innerLoading.value = true, s.value = true), J !== "" && e.multiple !== true && T.value.length !== 0 && _ !== true && J === ae.value(T.value[0]) && (J = "");
    const tt = setTimeout(() => {
      r.value === true && (r.value = false);
    }, 10);
    w !== null && clearTimeout(w), w = tt, n("filter", J, (gt, vt) => {
      (Re === true || W.focused.value === true) && w === tt && (clearTimeout(w), typeof gt == "function" && gt(), s.value = false, We(() => {
        W.innerLoading.value = false, W.editable.value === true && (Re === true ? r.value === true && at() : r.value === true ? gi(true) : r.value = true), typeof vt == "function" && We(() => {
          vt(l);
        }), typeof $e == "function" && We(() => {
          $e(l);
        });
      }));
    }, () => {
      W.focused.value === true && w === tt && (clearTimeout(w), W.innerLoading.value = false, s.value = false), r.value === true && (r.value = false);
    });
  }
  function Ue() {
    return d(ui, { ref: F, class: A.value, style: e.popupContentStyle, modelValue: r.value, fit: e.menuShrink !== true, cover: e.optionsCover === true && te.value !== true && e.useInput !== true, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, dark: G.value, noParentEvent: true, noRefocus: true, noFocus: true, noRouteDismiss: e.popupNoRouteDismiss, square: ge.value, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, separateClosePopup: true, ...ne.value, onScrollPassive: O, onBeforeShow: Gs, onBeforeHide: yt, onShow: ht }, ln);
  }
  function yt(J) {
    Xs(J), Le();
  }
  function ht() {
    ye();
  }
  function z(J) {
    var _a2;
    wt(J), (_a2 = $.value) == null ? void 0 : _a2.focus(), c.value = true, window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
  }
  function Z(J) {
    wt(J), We(() => {
      c.value = false;
    });
  }
  function ce() {
    const J = [d(f1, { class: `col-auto ${W.fieldClass.value}`, ...ee.value, for: W.targetUid.value, dark: G.value, square: true, loading: s.value, itemAligned: false, filled: true, stackLabel: u.value.length !== 0, ...W.splitAttrs.listeners.value, onFocus: z, onBlur: Z }, { ...t, rawControl: () => W.getControl(true), before: void 0, after: void 0 })];
    return r.value === true && J.push(d("div", { ref: B, class: A.value + " scroll", style: e.popupContentStyle, ...ne.value, onClick: Vt, onScrollPassive: O }, ln())), d(ci, { ref: D, modelValue: o.value, position: e.useInput === true ? "top" : void 0, transitionShow: p, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, noRouteDismiss: e.popupNoRouteDismiss, onBeforeShow: Gs, onBeforeHide: Te, onHide: Ee, onShow: Xe }, () => d("div", { class: "q-select__dialog" + (G.value === true ? " q-select__dialog--dark q-dark" : "") + (c.value === true ? " q-select__dialog--focused" : "") }, J));
  }
  function Te(J) {
    Xs(J), D.value !== null && D.value.__updateRefocusTarget(W.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")), W.focused.value = false;
  }
  function Ee(J) {
    at(), W.focused.value === false && n("blur", J), cn();
  }
  function Xe() {
    const J = document.activeElement;
    (J === null || J.id !== W.targetUid.value) && $.value !== null && $.value !== J && $.value.focus(), ye();
  }
  function Le() {
    o.value !== true && (i.value = -1, r.value === true && (r.value = false), W.focused.value === false && (w !== null && (clearTimeout(w), w = null), W.innerLoading.value === true && (n("filterAbort"), W.innerLoading.value = false, s.value = false)));
  }
  function De(J) {
    W.editable.value === true && (g === true ? (W.onControlFocusin(J), o.value = true, We(() => {
      W.focus();
    })) : W.focus(), e.onFilter !== void 0 ? Be(u.value) : (te.value !== true || t["no-option"] !== void 0) && (r.value = true));
  }
  function at() {
    o.value = false, Le();
  }
  function cn() {
    e.useInput === true && Fe(e.multiple !== true && e.fillInput === true && T.value.length !== 0 && ae.value(T.value[0]) || "", true, true);
  }
  function gi(J) {
    let Re = -1;
    if (J === true) {
      if (T.value.length !== 0) {
        const $e = de.value(T.value[0]);
        Re = e.options.findIndex((tt) => kn(de.value(tt), $e));
      }
      Y(Re);
    }
    ie(Re);
  }
  function Mg(J, Re) {
    r.value === true && W.innerLoading.value === false && (Y(-1, true), We(() => {
      r.value === true && W.innerLoading.value === false && (J > Re ? Y() : gi(true));
    }));
  }
  function Ys() {
    o.value === false && F.value !== null && F.value.updatePosition();
  }
  function Gs(J) {
    J !== void 0 && wt(J), n("popupShow", J), W.hasPopupOpen = true, W.onControlFocusin(J);
  }
  function Xs(J) {
    J !== void 0 && wt(J), n("popupHide", J), W.hasPopupOpen = false, W.onControlFocusout(J);
  }
  function Zs() {
    g = a.platform.is.mobile !== true && e.behavior !== "dialog" ? false : e.behavior !== "menu" && (e.useInput === true ? t["no-option"] !== void 0 || e.onFilter !== void 0 || te.value === false : true), p = a.platform.is.ios === true && g === true && e.useInput === true ? "fade" : e.transitionShow;
  }
  return Ma(Zs), Go(Ys), Zs(), Ke(() => {
    f !== null && clearTimeout(f), m !== null && clearTimeout(m);
  }), Object.assign(l, { showPopup: De, hidePopup: at, removeAtIndex: qe, add: He, toggleOption: Ve, getOptionIndex: () => i.value, setOptionIndex: ie, moveOptionSelection: pe, filter: Be, updateMenuPosition: Ys, updateInputValue: Fe, isOptionSelected: _e, getEmittingOptionValue: ke, isOptionDisabled: (...J) => Q.value.apply(null, J) === true, getOptionValue: (...J) => de.value.apply(null, J), getOptionLabel: (...J) => ae.value.apply(null, J) }), Object.assign(W, { innerValue: T, fieldClass: v(() => `q-select q-field--auto-height q-select--with${e.useInput !== true ? "out" : ""}-input q-select--with${e.useChips !== true ? "out" : ""}-chips q-select--${e.multiple === true ? "multiple" : "single"}`), inputRef: x, targetRef: $, hasValue: fe, showPopup: De, floatingLabel: v(() => e.hideSelected !== true && fe.value === true || typeof u.value == "number" || u.value.length !== 0 || Kl(e.displayValue)), getControlChild: () => {
    if (W.editable.value !== false && (o.value === true || te.value !== true || t["no-option"] !== void 0)) return g === true ? ce() : Ue();
    W.hasPopupOpen === true && (W.hasPopupOpen = false);
  }, controlEvents: { onFocusin(J) {
    W.onControlFocusin(J);
  }, onFocusout(J) {
    W.onControlFocusout(J, () => {
      cn(), Le();
    });
  }, onClick(J) {
    var _a2;
    if (Vt(J), g !== true && r.value === true) {
      Le(), (_a2 = $.value) == null ? void 0 : _a2.focus();
      return;
    }
    De(J);
  } }, getControl: (J) => {
    const Re = nl(), $e = J === true || o.value !== true || g !== true;
    if (e.useInput === true) Re.push(In(J, $e));
    else if (W.editable.value === true) {
      const gt = $e === true ? N.value : void 0;
      Re.push(d("input", { ref: $e === true ? $ : void 0, key: "d_t", class: "q-select__focus-target", id: $e === true ? W.targetUid.value : void 0, value: j.value, readonly: true, "data-autofocus": J === true || e.autofocus === true || void 0, ...gt, onKeydown: it, onKeyup: Oe, onKeypress: Ye })), $e === true && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && Re.push(d("input", { class: "q-select__autocomplete-input", autocomplete: e.autocomplete, tabindex: -1, onKeyup: Ae }));
    }
    if (P.value !== void 0 && e.disable !== true && oe.value.length !== 0) {
      const gt = oe.value.map((vt) => d("option", { value: vt, selected: true }));
      Re.push(d("select", { class: "hidden", name: P.value, multiple: e.multiple }, gt));
    }
    const tt = e.useInput === true || $e !== true ? void 0 : W.splitAttrs.attributes.value;
    return d("div", { class: "q-field__native row items-center", ...tt, ...W.splitAttrs.listeners.value }, Re);
  }, getInnerAppend: () => e.loading !== true && s.value !== true && e.hideDropdownIcon !== true ? [d(et, { class: "q-select__dropdown-icon" + (r.value === true ? " rotate-180" : ""), name: ve.value })] : null }), mi(W);
} }), U1 = ["text", "rect", "circle", "QBtn", "QBadge", "QChip", "QToolbar", "QCheckbox", "QRadio", "QToggle", "QSlider", "QRange", "QInput", "QAvatar"], Q1 = ["wave", "pulse", "pulse-x", "pulse-y", "fade", "blink", "none"];
he({ name: "QSkeleton", props: { ...nt, tag: { type: String, default: "div" }, type: { type: String, validator: (e) => U1.includes(e), default: "rect" }, animation: { type: String, validator: (e) => Q1.includes(e), default: "wave" }, animationSpeed: { type: [String, Number], default: 1500 }, square: Boolean, bordered: Boolean, size: String, width: String, height: String }, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), a = v(() => {
    const o = e.size !== void 0 ? [e.size, e.size] : [e.width, e.height];
    return { "--q-skeleton-speed": `${e.animationSpeed}ms`, width: o[0], height: o[1] };
  }), r = v(() => `q-skeleton q-skeleton--${l.value === true ? "dark" : "light"} q-skeleton--type-${e.type}` + (e.animation !== "none" ? ` q-skeleton--anim q-skeleton--anim-${e.animation}` : "") + (e.square === true ? " q-skeleton--square" : "") + (e.bordered === true ? " q-skeleton--bordered" : ""));
  return () => d(e.tag, { class: r.value, style: a.value }, Pe(t.default));
} });
var zd = [["left", "center", "start", "width"], ["right", "center", "end", "width"], ["top", "start", "center", "height"], ["bottom", "end", "center", "height"]];
he({ name: "QSlideItem", props: { ...nt, leftColor: String, rightColor: String, topColor: String, bottomColor: String, onSlide: Function }, emits: ["action", "top", "right", "bottom", "left"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = lt(e, a), { getCache: o } = Pr(), i = K(null);
  let u = null, c = {}, s = {}, f = {};
  const m = v(() => a.lang.rtl === true ? { left: "right", right: "left" } : { left: "left", right: "right" }), h = v(() => "q-slide-item q-item-type overflow-hidden" + (r.value === true ? " q-slide-item--dark q-dark" : ""));
  function g() {
    i.value.style.transform = "translate(0,0)";
  }
  function _(k, p, y) {
    e.onSlide !== void 0 && n("slide", { side: k, ratio: p, isReset: y });
  }
  function w(k) {
    const p = i.value;
    if (k.isFirst) c = { dir: null, size: { left: 0, right: 0, top: 0, bottom: 0 }, scale: 0 }, p.classList.add("no-transition"), zd.forEach(($) => {
      if (t[$[0]] !== void 0) {
        const F = f[$[0]];
        F.style.transform = "scale(1)", c.size[$[0]] = F.getBoundingClientRect()[$[3]];
      }
    }), c.axis = k.direction === "up" || k.direction === "down" ? "Y" : "X";
    else if (k.isFinal) {
      p.classList.remove("no-transition"), c.scale === 1 ? (p.style.transform = `translate${c.axis}(${c.dir * 100}%)`, u !== null && clearTimeout(u), u = setTimeout(() => {
        u = null, n(c.showing, { reset: g }), n("action", { side: c.showing, reset: g });
      }, 230)) : (p.style.transform = "translate(0,0)", _(c.showing, 0, true));
      return;
    } else k.direction = c.axis === "X" ? k.offset.x < 0 ? "left" : "right" : k.offset.y < 0 ? "up" : "down";
    if (t.left === void 0 && k.direction === m.value.right || t.right === void 0 && k.direction === m.value.left || t.top === void 0 && k.direction === "down" || t.bottom === void 0 && k.direction === "up") {
      p.style.transform = "translate(0,0)";
      return;
    }
    let y, b, x;
    c.axis === "X" ? (b = k.direction === "left" ? -1 : 1, y = b === 1 ? m.value.left : m.value.right, x = k.distance.x) : (b = k.direction === "up" ? -2 : 2, y = b === 2 ? "top" : "bottom", x = k.distance.y), !(c.dir !== null && Math.abs(b) !== Math.abs(c.dir)) && (c.dir !== b && (["left", "right", "top", "bottom"].forEach(($) => {
      s[$] && (s[$].style.visibility = y === $ ? "visible" : "hidden");
    }), c.showing = y, c.dir = b), c.scale = Math.max(0, Math.min(1, (x - 40) / c.size[y])), p.style.transform = `translate${c.axis}(${x * b / Math.abs(b)}px)`, f[y].style.transform = `scale(${c.scale})`, _(y, c.scale, false));
  }
  return Ma(() => {
    s = {}, f = {};
  }), Ke(() => {
    u !== null && clearTimeout(u);
  }), Object.assign(l, { reset: g }), () => {
    const k = [], p = { left: t[m.value.right] !== void 0, right: t[m.value.left] !== void 0, up: t.bottom !== void 0, down: t.top !== void 0 }, y = Object.keys(p).filter((x) => p[x] === true);
    zd.forEach((x) => {
      const $ = x[0];
      t[$] !== void 0 && k.push(d("div", { key: $, ref: (F) => {
        s[$] = F;
      }, class: `q-slide-item__${$} absolute-full row no-wrap items-${x[1]} justify-${x[2]}` + (e[$ + "Color"] !== void 0 ? ` bg-${e[$ + "Color"]}` : "") }, [d("div", { ref: (F) => {
        f[$] = F;
      } }, t[$]())]));
    });
    const b = d("div", { key: `${y.length === 0 ? "only-" : ""} content`, ref: i, class: "q-slide-item__content" }, Pe(t.default));
    return y.length === 0 ? k.push(b) : k.push(sn(b, o("dir#" + y.join(""), () => {
      const x = { prevent: true, stop: true, mouse: true };
      return y.forEach(($) => {
        x[$] = true;
      }), [[gn, w, void 0, x]];
    }))), d("div", { class: h.value }, k);
  };
} });
he({ name: "QSpace", setup() {
  const e = d("div", { class: "q-space" });
  return () => e;
} });
var K1 = '<g transform="matrix(1 0 0 -1 0 80)"><rect width="10" height="20" rx="3"><animate attributeName="height" begin="0s" dur="4.3s" values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="15" width="10" height="80" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" width="10" height="50" rx="3"><animate attributeName="height" begin="0s" dur="1.4s" values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="45" width="10" height="30" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear" repeatCount="indefinite"></animate></rect></g>';
he({ name: "QSpinnerAudio", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 55 80", xmlns: "http://www.w3.org/2000/svg", innerHTML: K1 });
} });
var W1 = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"></animate></circle></g>';
he({ name: "QSpinnerBall", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 57 57", xmlns: "http://www.w3.org/2000/svg", innerHTML: W1 });
} });
var Y1 = '<rect y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="60" width="15" height="140" rx="6"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="90" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="120" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect>';
he({ name: "QSpinnerBars", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 135 140", xmlns: "http://www.w3.org/2000/svg", innerHTML: Y1 });
} });
var G1 = '<rect x="25" y="25" width="50" height="50" fill="none" stroke-width="4" stroke="currentColor"><animateTransform id="spinnerBox" attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" dur="0.5s" begin="rectBox.end"></animateTransform></rect><rect x="27" y="27" width="46" height="50" fill="currentColor"><animate id="rectBox" attributeName="height" begin="0s;spinnerBox.end" dur="1.3s" from="50" to="0" fill="freeze"></animate></rect>';
he({ name: "QSpinnerBox", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: G1 });
} });
var X1 = '<circle cx="50" cy="50" r="48" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="currentColor"></circle><line stroke-linecap="round" stroke-width="4" stroke-miterlimit="10" stroke="currentColor" x1="50" y1="50" x2="85" y2="50.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2s" repeatCount="indefinite"></animateTransform></line><line stroke-linecap="round" stroke-width="4" stroke-miterlimit="10" stroke="currentColor" x1="50" y1="50" x2="49.5" y2="74"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="15s" repeatCount="indefinite"></animateTransform></line>';
he({ name: "QSpinnerClock", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: X1 });
} });
var Z1 = '<rect x="0" y="0" width="100" height="100" fill="none"></rect><path d="M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z" fill="currentColor"></path><circle cx="30" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;1;1" keyTimes="0;0.2;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="50" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.2;0.4;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="70" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.4;0.6;1" dur="1s" repeatCount="indefinite"></animate></circle>';
he({ name: "QSpinnerComment", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: Z1 });
} });
var J1 = '<rect x="0" y="0" width="100" height="100" fill="none"></rect><g transform="translate(25 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.1s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(25 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.7"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.3s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.2s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g>';
he({ name: "QSpinnerCube", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: J1 });
} });
var e_ = '<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from=".5" to=".5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';
he({ name: "QSpinnerDots", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg", innerHTML: e_ });
} });
var t_ = '<g transform="translate(20 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(50 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.1s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(80 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.2s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g>';
he({ name: "QSpinnerFacebook", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid", innerHTML: t_ });
} });
var n_ = '<g transform="translate(-20,-20)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="90 50 50" to="0 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g><g transform="translate(20,20) rotate(15 50 50)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="90 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g>';
he({ name: "QSpinnerGears", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: n_ });
} });
var l_ = '<circle cx="12.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="0s" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5"><animate attributeName="fill-opacity" begin="100ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="300ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="600ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="800ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="400ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="700ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="500ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="200ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';
he({ name: "QSpinnerGrid", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 105 105", xmlns: "http://www.w3.org/2000/svg", innerHTML: l_ });
} });
var a_ = '<path d="M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.716-6.002 11.47-7.65 17.304-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.593-2.32 17.308 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0.7s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"></path>';
he({ name: "QSpinnerHearts", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 140 64", xmlns: "http://www.w3.org/2000/svg", innerHTML: a_ });
} });
var r_ = '<g><path fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10" d="M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"></path><clipPath id="uil-hourglass-clip1"><rect x="15" y="20" width="70" height="25"><animate attributeName="height" from="25" to="0" dur="1s" repeatCount="indefinite" values="25;0;0" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="20" to="45" dur="1s" repeatCount="indefinite" values="20;45;45" keyTimes="0;0.5;1"></animate></rect></clipPath><clipPath id="uil-hourglass-clip2"><rect x="15" y="55" width="70" height="25"><animate attributeName="height" from="0" to="25" dur="1s" repeatCount="indefinite" values="0;25;25" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="80" to="55" dur="1s" repeatCount="indefinite" values="80;55;55" keyTimes="0;0.5;1"></animate></rect></clipPath><path d="M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z" clip-path="url(#uil-hourglass-clip1)" fill="currentColor"></path><path d="M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z" clip-path="url(#uil-hourglass-clip2)" fill="currentColor"></path><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" repeatCount="indefinite" dur="1s" values="0 50 50;0 50 50;180 50 50" keyTimes="0;0.7;1"></animateTransform></g>';
he({ name: "QSpinnerHourglass", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: r_ });
} });
var o_ = '<path d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z" fill="none" stroke="currentColor" stroke-width="8" stroke-dasharray="10.691205342610678 10.691205342610678" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" from="0" to="21.382410685221355" begin="0" dur="2s" repeatCount="indefinite" fill="freeze"></animate></path>';
he({ name: "QSpinnerInfinity", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: o_ });
} });
var i_ = '<g stroke-width="4" stroke-linecap="round"><line y1="17" y2="29" transform="translate(32,32) rotate(180)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(210)"><animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(240)"><animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(270)"><animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(300)"><animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(330)"><animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(0)"><animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(30)"><animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(60)"><animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(90)"><animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(120)"><animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(150)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line></g>';
he({ name: "QSpinnerIos", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, stroke: "currentColor", fill: "currentColor", viewBox: "0 0 64 64", innerHTML: i_ });
} });
var u_ = '<circle cx="50" cy="50" r="44" fill="none" stroke-width="4" stroke-opacity=".5" stroke="currentColor"></circle><circle cx="8" cy="54" r="6" fill="currentColor" stroke-width="3" stroke="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 48" to="360 50 52" dur="2s" repeatCount="indefinite"></animateTransform></circle>';
he({ name: "QSpinnerOrbit", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: u_ });
} });
var s_ = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g>';
he({ name: "QSpinnerOval", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", innerHTML: s_ });
} });
var c_ = '<path d="M0 50A50 50 0 0 1 50 0L50 50L0 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="0.8s" repeatCount="indefinite"></animateTransform></path><path d="M50 0A50 50 0 0 1 100 50L50 50L50 0" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1.6s" repeatCount="indefinite"></animateTransform></path><path d="M100 50A50 50 0 0 1 50 100L50 50L100 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2.4s" repeatCount="indefinite"></animateTransform></path><path d="M50 100A50 50 0 0 1 0 50L50 50L50 100" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="3.2s" repeatCount="indefinite"></animateTransform></path>';
he({ name: "QSpinnerPie", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: c_ });
} });
var d_ = '<g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g>';
he({ name: "QSpinnerPuff", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 44 44", xmlns: "http://www.w3.org/2000/svg", innerHTML: d_ });
} });
var f_ = '<g transform="scale(0.55)"><circle cx="30" cy="150" r="30" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></circle><path d="M90,150h30c0-49.7-40.3-90-90-90v30C63.1,90,90,116.9,90,150z" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.1" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></path><path d="M150,150h30C180,67.2,112.8,0,30,0v30C96.3,30,150,83.7,150,150z" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.2" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></path></g>';
he({ name: "QSpinnerRadio", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: f_ });
} });
var v_ = '<g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2"><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="8"><animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"></animate></circle></g>';
he({ name: "QSpinnerRings", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 45 45", xmlns: "http://www.w3.org/2000/svg", innerHTML: v_ });
} });
var m_ = '<defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-color="currentColor" stop-opacity="0" offset="0%"></stop><stop stop-color="currentColor" stop-opacity=".631" offset="63.146%"></stop><stop stop-color="currentColor" offset="100%"></stop></linearGradient></defs><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></path><circle fill="currentColor" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></circle></g>';
he({ name: "QSpinnerTail", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", innerHTML: m_ });
} });
he({ name: "QSplitter", props: { ...nt, modelValue: { type: Number, required: true }, reverse: Boolean, unit: { type: String, default: "%", validator: (e) => ["%", "px"].includes(e) }, limits: { type: Array, validator: (e) => e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number" ? false : e[0] >= 0 && e[0] <= e[1] }, emitImmediately: Boolean, horizontal: Boolean, disable: Boolean, beforeClass: [Array, String, Object], afterClass: [Array, String, Object], separatorClass: [Array, String, Object], separatorStyle: [Array, String, Object] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = lt(e, l), r = K(null), o = { before: K(null), after: K(null) }, i = v(() => `q-splitter no-wrap ${e.horizontal === true ? "q-splitter--horizontal column" : "q-splitter--vertical row"} q-splitter--${e.disable === true ? "disabled" : "workable"}` + (a.value === true ? " q-splitter--dark" : "")), u = v(() => e.horizontal === true ? "height" : "width"), c = v(() => e.reverse !== true ? "before" : "after"), s = v(() => e.limits !== void 0 ? e.limits : e.unit === "%" ? [10, 90] : [50, 1 / 0]);
  function f(x) {
    return (e.unit === "%" ? x : Math.round(x)) + e.unit;
  }
  const m = v(() => ({ [c.value]: { [u.value]: f(e.modelValue) } }));
  let h, g, _, w, k;
  function p(x) {
    if (x.isFirst === true) {
      const F = r.value.getBoundingClientRect()[u.value];
      h = e.horizontal === true ? "up" : "left", g = e.unit === "%" ? 100 : F, _ = Math.min(g, s.value[1], Math.max(s.value[0], e.modelValue)), w = (e.reverse !== true ? 1 : -1) * (e.horizontal === true ? 1 : l.lang.rtl === true ? -1 : 1) * (e.unit === "%" ? F === 0 ? 0 : 100 / F : 1), r.value.classList.add("q-splitter--active");
      return;
    }
    if (x.isFinal === true) {
      k !== e.modelValue && n("update:modelValue", k), r.value.classList.remove("q-splitter--active");
      return;
    }
    const $ = _ + w * (x.direction === h ? -1 : 1) * x.distance[e.horizontal === true ? "y" : "x"];
    k = Math.min(g, s.value[1], Math.max(s.value[0], $)), o[c.value].value.style[u.value] = f(k), e.emitImmediately === true && e.modelValue !== k && n("update:modelValue", k);
  }
  const y = v(() => [[gn, p, void 0, { [e.horizontal === true ? "vertical" : "horizontal"]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
  function b(x, $) {
    x < $[0] ? n("update:modelValue", $[0]) : x > $[1] && n("update:modelValue", $[1]);
  }
  return be(() => e.modelValue, (x) => {
    b(x, s.value);
  }), be(() => e.limits, () => {
    We(() => {
      b(e.modelValue, s.value);
    });
  }), () => {
    const x = [d("div", { ref: o.before, class: ["q-splitter__panel q-splitter__before" + (e.reverse === true ? " col" : ""), e.beforeClass], style: m.value.before }, Pe(t.before)), d("div", { class: ["q-splitter__separator", e.separatorClass], style: e.separatorStyle, "aria-disabled": e.disable === true ? "true" : void 0 }, [pn("div", { class: "q-splitter__separator-area absolute-full" }, Pe(t.separator), "sep", e.disable !== true, () => y.value)]), d("div", { ref: o.after, class: ["q-splitter__panel q-splitter__after" + (e.reverse === true ? "" : " col"), e.afterClass], style: m.value.after }, Pe(t.after))];
    return d("div", { class: i.value, ref: r }, qt(t.default, x));
  };
} });
var zh = he({ name: "StepHeader", props: { stepper: {}, step: {}, goToPanel: Function }, setup(e, { attrs: t }) {
  const { proxy: { $q: n } } = Se(), l = K(null), a = v(() => e.stepper.modelValue === e.step.name), r = v(() => {
    const w = e.step.disable;
    return w === true || w === "";
  }), o = v(() => {
    const w = e.step.error;
    return w === true || w === "";
  }), i = v(() => {
    const w = e.step.done;
    return r.value === false && (w === true || w === "");
  }), u = v(() => {
    const w = e.step.headerNav, k = w === true || w === "" || w === void 0;
    return r.value === false && e.stepper.headerNav && k;
  }), c = v(() => e.step.prefix && (a.value === false || e.stepper.activeIcon === "none") && (o.value === false || e.stepper.errorIcon === "none") && (i.value === false || e.stepper.doneIcon === "none")), s = v(() => {
    const w = e.step.icon || e.stepper.inactiveIcon;
    if (a.value === true) {
      const k = e.step.activeIcon || e.stepper.activeIcon;
      return k === "none" ? w : k || n.iconSet.stepper.active;
    }
    if (o.value === true) {
      const k = e.step.errorIcon || e.stepper.errorIcon;
      return k === "none" ? w : k || n.iconSet.stepper.error;
    }
    if (r.value === false && i.value === true) {
      const k = e.step.doneIcon || e.stepper.doneIcon;
      return k === "none" ? w : k || n.iconSet.stepper.done;
    }
    return w;
  }), f = v(() => {
    const w = o.value === true ? e.step.errorColor || e.stepper.errorColor : void 0;
    if (a.value === true) {
      const k = e.step.activeColor || e.stepper.activeColor || e.step.color;
      return k !== void 0 ? k : w;
    }
    return w !== void 0 ? w : r.value === false && i.value === true ? e.step.doneColor || e.stepper.doneColor || e.step.color || e.stepper.inactiveColor : e.step.color || e.stepper.inactiveColor;
  }), m = v(() => "q-stepper__tab col-grow flex items-center no-wrap relative-position" + (f.value !== void 0 ? ` text-${f.value}` : "") + (o.value === true ? " q-stepper__tab--error q-stepper__tab--error-with-" + (c.value === true ? "prefix" : "icon") : "") + (a.value === true ? " q-stepper__tab--active" : "") + (i.value === true ? " q-stepper__tab--done" : "") + (u.value === true ? " q-stepper__tab--navigation q-focusable q-hoverable" : "") + (r.value === true ? " q-stepper__tab--disabled" : "")), h = v(() => e.stepper.headerNav !== true ? false : u.value);
  function g() {
    var _a2;
    (_a2 = l.value) == null ? void 0 : _a2.focus(), a.value === false && e.goToPanel(e.step.name);
  }
  function _(w) {
    w.keyCode === 13 && a.value === false && e.goToPanel(e.step.name);
  }
  return () => {
    const w = { class: m.value };
    u.value === true && (w.onClick = g, w.onKeyup = _, Object.assign(w, r.value === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: t.tabindex || 0 }));
    const k = [d("div", { class: "q-focus-helper", tabindex: -1, ref: l }), d("div", { class: "q-stepper__dot row flex-center q-stepper__line relative-position" }, [d("span", { class: "row flex-center" }, [c.value === true ? e.step.prefix : d(et, { name: s.value })])])];
    if (e.step.title !== void 0 && e.step.title !== null) {
      const p = [d("div", { class: "q-stepper__title" }, e.step.title)];
      e.step.caption !== void 0 && e.step.caption !== null && p.push(d("div", { class: "q-stepper__caption" }, e.step.caption)), k.push(d("div", { class: "q-stepper__label q-stepper__line relative-position" }, p));
    }
    return sn(d("div", w, k), [[ri, h.value]]);
  };
} });
function Ih(e) {
  return d("div", { class: "q-stepper__step-content" }, [d("div", { class: "q-stepper__step-inner" }, Pe(e.default))]);
}
var Id = { setup(e, { slots: t }) {
  return () => Ih(t);
} };
he({ name: "QStep", props: { ...As, icon: String, color: String, title: { type: String, required: true }, caption: String, prefix: [String, Number], doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String, headerNav: { type: Boolean, default: true }, done: Boolean, error: Boolean, onScroll: [Function, Array] }, setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = Tt(rm, ot);
  if (a === ot) return console.error("QStep needs to be a child of QStepper"), ot;
  const { getCache: r } = Pr(), o = K(null), i = v(() => a.value.modelValue === e.name), u = v(() => l.platform.is.ios !== true && l.platform.is.chrome === true || i.value !== true || a.value.vertical !== true ? {} : { onScroll(f) {
    const { target: m } = f;
    m.scrollTop > 0 && (m.scrollTop = 0), e.onScroll !== void 0 && n("scroll", f);
  } }), c = v(() => typeof e.name == "string" || typeof e.name == "number" ? e.name : String(e.name));
  function s() {
    const f = a.value.vertical;
    return f === true && a.value.keepAlive === true ? d(mv, a.value.keepAliveProps.value, i.value === true ? [d(a.value.needsUniqueKeepAliveWrapper.value === true ? r(c.value, () => ({ ...Id, name: c.value })) : Id, { key: c.value }, t.default)] : void 0) : f !== true || i.value === true ? Ih(t) : void 0;
  }
  return () => d("div", { ref: o, class: "q-stepper__step", role: "tabpanel", ...u.value }, a.value.vertical === true ? [d(zh, { stepper: a.value, step: e, goToPanel: a.value.goToPanel }), a.value.animated === true ? d(Ds, s) : s()] : [s()]);
} });
var h_ = /(-\w)/g;
function g_(e) {
  const t = {};
  for (const n in e) {
    const l = n.replace(h_, (a) => a[1].toUpperCase());
    t[l] = e[n];
  }
  return t;
}
he({ name: "QStepper", props: { ...nt, ...Rs, flat: Boolean, bordered: Boolean, alternativeLabels: Boolean, headerNav: Boolean, contracted: Boolean, headerClass: String, inactiveColor: String, inactiveIcon: String, doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String }, emits: $s, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), { updatePanelsList: a, isValidPanelName: r, updatePanelIndex: o, getPanelContent: i, getPanels: u, panelDirectives: c, goToPanel: s, keepAliveProps: f, needsUniqueKeepAliveWrapper: m } = Ps();
  hn(rm, v(() => ({ goToPanel: s, keepAliveProps: f, needsUniqueKeepAliveWrapper: m, ...e })));
  const h = v(() => `q-stepper q-stepper--${e.vertical === true ? "vertical" : "horizontal"}` + (e.flat === true ? " q-stepper--flat" : "") + (e.bordered === true ? " q-stepper--bordered" : "") + (l.value === true ? " q-stepper--dark q-dark" : "")), g = v(() => `q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels === true ? "alternative" : "standard"}-labels` + (e.flat === false || e.bordered === true ? " q-stepper__header--border" : "") + (e.contracted === true ? " q-stepper__header--contracted" : "") + (e.headerClass !== void 0 ? ` ${e.headerClass}` : ""));
  function _() {
    const w = Pe(t.message, []);
    if (e.vertical === true) {
      r(e.modelValue) && o();
      const k = d("div", { class: "q-stepper__content" }, Pe(t.default));
      return w === void 0 ? [k] : w.concat(k);
    }
    return [d("div", { class: g.value }, u().map((k) => {
      const p = g_(k.props);
      return d(zh, { key: p.name, stepper: e, step: p, goToPanel: s });
    })), w, pn("div", { class: "q-stepper__content q-panel-parent" }, i(), "cont", e.swipeable, () => c.value)];
  }
  return () => (a(t), d("div", { class: h.value }, qt(t.navigation, _())));
} });
he({ name: "QStepperNavigation", setup(e, { slots: t }) {
  return () => d("div", { class: "q-stepper__nav" }, Pe(t.default));
} });
var b_ = he({ name: "QTh", props: { props: Object, autoWidth: Boolean }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const l = Se(), { proxy: { $q: a } } = l, r = (o) => {
    n("click", o);
  };
  return () => {
    if (e.props === void 0) return d("th", { class: e.autoWidth === true ? "q-table--col-auto-width" : "", onClick: r }, Pe(t.default));
    let o, i;
    const u = l.vnode.key;
    if (u) {
      if (o = e.props.colsMap[u], o === void 0) return;
    } else o = e.props.col;
    if (o.sortable === true) {
      const s = o.align === "right" ? "unshift" : "push";
      i = Er(t.default, []), i[s](d(et, { class: o.__iconClass, name: a.iconSet.table.arrowUp }));
    } else i = Pe(t.default);
    const c = { class: o.__thClass + (e.autoWidth === true ? " q-table--col-auto-width" : ""), style: o.headerStyle, onClick: (s) => {
      o.sortable === true && e.props.sort(o), r(s);
    } };
    return d("th", c, i);
  };
} });
function Dh(e, t) {
  return d("div", e, [d("table", { class: "q-table" }, t)]);
}
var y_ = { list: Rh, table: E1 }, p_ = ["list", "table", "__qtable"], __ = he({ name: "QVirtualScroll", props: { ...ju, type: { type: String, default: "list", validator: (e) => p_.includes(e) }, items: { type: Array, default: () => [] }, itemsFn: Function, itemsSize: Number, scrollTarget: Xl }, setup(e, { slots: t, attrs: n }) {
  let l;
  const a = K(null), r = v(() => e.itemsSize >= 0 && e.itemsFn !== void 0 ? parseInt(e.itemsSize, 10) : Array.isArray(e.items) ? e.items.length : 0), { virtualScrollSliceRange: o, localResetVirtualScroll: i, padVirtualScroll: u, onVirtualScrollEvt: c } = Vh({ virtualScrollLength: r, getVirtualScrollTarget: g, getVirtualScrollEl: h }), s = v(() => {
    if (r.value === 0) return [];
    const p = (y, b) => ({ index: o.value.from + b, item: y });
    return e.itemsFn === void 0 ? e.items.slice(o.value.from, o.value.to).map(p) : e.itemsFn(o.value.from, o.value.to - o.value.from).map(p);
  }), f = v(() => "q-virtual-scroll q-virtual-scroll" + (e.virtualScrollHorizontal === true ? "--horizontal" : "--vertical") + (e.scrollTarget !== void 0 ? "" : " scroll")), m = v(() => e.scrollTarget !== void 0 ? {} : { tabindex: 0 });
  be(r, () => {
    i();
  }), be(() => e.scrollTarget, () => {
    w(), _();
  });
  function h() {
    return a.value.$el || a.value;
  }
  function g() {
    return l;
  }
  function _() {
    l = zn(h(), e.scrollTarget), l.addEventListener("scroll", c, dt.passive);
  }
  function w() {
    l !== void 0 && (l.removeEventListener("scroll", c, dt.passive), l = void 0);
  }
  function k() {
    let p = u(e.type === "list" ? "div" : "tbody", s.value.map(t.default));
    return t.before !== void 0 && (p = t.before().concat(p)), qt(t.after, p);
  }
  return Yo(() => {
    i();
  }), ft(() => {
    _();
  }), Sl(() => {
    _();
  }), Vn(() => {
    w();
  }), Ke(() => {
    w();
  }), () => {
    if (t.default === void 0) {
      console.error("QVirtualScroll: default scoped slot is required for rendering");
      return;
    }
    return e.type === "__qtable" ? Dh({ ref: a, class: "q-table__middle " + f.value }, k()) : d(y_[e.type], { ...n, ref: a, class: [n.class, f.value], ...m.value }, k);
  };
} });
function w_(e, t) {
  return new Date(e) - new Date(t);
}
var S_ = { sortMethod: Function, binaryStateSort: Boolean, columnSortOrder: { type: String, validator: (e) => e === "ad" || e === "da", default: "ad" } };
function x_(e, t, n, l) {
  const a = v(() => {
    const { sortBy: i } = t.value;
    return i && n.value.find((u) => u.name === i) || null;
  }), r = v(() => e.sortMethod !== void 0 ? e.sortMethod : (i, u, c) => {
    const s = n.value.find((h) => h.name === u);
    if (s === void 0 || s.field === void 0) return i;
    const f = c === true ? -1 : 1, m = typeof s.field == "function" ? (h) => s.field(h) : (h) => h[s.field];
    return i.sort((h, g) => {
      let _ = m(h), w = m(g);
      return s.rawSort !== void 0 ? s.rawSort(_, w, h, g) * f : _ == null ? -1 * f : w == null ? 1 * f : s.sort !== void 0 ? s.sort(_, w, h, g) * f : pr(_) === true && pr(w) === true ? (_ - w) * f : Eu(_) === true && Eu(w) === true ? w_(_, w) * f : typeof _ == "boolean" && typeof w == "boolean" ? (_ - w) * f : ([_, w] = [_, w].map((k) => (k + "").toLocaleString().toLowerCase()), _ < w ? -1 * f : _ === w ? 0 : f);
    });
  });
  function o(i) {
    let u = e.columnSortOrder;
    if (Pt(i) === true) i.sortOrder && (u = i.sortOrder), i = i.name;
    else {
      const f = n.value.find((m) => m.name === i);
      (f == null ? void 0 : f.sortOrder) && (u = f.sortOrder);
    }
    let { sortBy: c, descending: s } = t.value;
    c !== i ? (c = i, s = u === "da") : e.binaryStateSort === true ? s = !s : s === true ? u === "ad" ? c = null : s = false : u === "ad" ? s = true : c = null, l({ sortBy: c, descending: s, page: 1 });
  }
  return { columnToSort: a, computedSortMethod: r, sort: o };
}
var C_ = { filter: [String, Object], filterMethod: Function };
function k_(e, t) {
  const n = v(() => e.filterMethod !== void 0 ? e.filterMethod : (l, a, r, o) => {
    const i = a ? a.toLowerCase() : "";
    return l.filter((u) => r.some((c) => {
      const s = o(c, u) + "";
      return (s === "undefined" || s === "null" ? "" : s.toLowerCase()).indexOf(i) !== -1;
    }));
  });
  return be(() => e.filter, () => {
    We(() => {
      t({ page: 1 }, true);
    });
  }, { deep: true }), { computedFilterMethod: n };
}
function q_(e, t) {
  for (const n in t) if (t[n] !== e[n]) return false;
  return true;
}
function Dd(e) {
  return e.page < 1 && (e.page = 1), e.rowsPerPage !== void 0 && e.rowsPerPage < 1 && (e.rowsPerPage = 0), e;
}
var T_ = { pagination: Object, rowsPerPageOptions: { type: Array, default: () => [5, 7, 10, 15, 20, 25, 50, 0] }, "onUpdate:pagination": [Function, Array] };
function M_(e, t) {
  const { props: n, emit: l } = e, a = K(Object.assign({ sortBy: null, descending: false, page: 1, rowsPerPage: n.rowsPerPageOptions.length !== 0 ? n.rowsPerPageOptions[0] : 5 }, n.pagination)), r = v(() => {
    const s = n["onUpdate:pagination"] !== void 0 ? { ...a.value, ...n.pagination } : a.value;
    return Dd(s);
  }), o = v(() => r.value.rowsNumber !== void 0);
  function i(s) {
    u({ pagination: s, filter: n.filter });
  }
  function u(s = {}) {
    We(() => {
      l("request", { pagination: s.pagination || r.value, filter: s.filter || n.filter, getCellValue: t });
    });
  }
  function c(s, f) {
    const m = Dd({ ...r.value, ...s });
    if (q_(r.value, m) === true) {
      o.value === true && f === true && i(m);
      return;
    }
    if (o.value === true) {
      i(m);
      return;
    }
    n.pagination !== void 0 && n["onUpdate:pagination"] !== void 0 ? l("update:pagination", m) : a.value = m;
  }
  return { innerPagination: a, computedPagination: r, isServerSide: o, requestServerInteraction: u, setPagination: c };
}
function E_(e, t, n, l, a, r) {
  const { props: o, emit: i, proxy: { $q: u } } = e, c = v(() => l.value === true ? n.value.rowsNumber || 0 : r.value), s = v(() => {
    const { page: b, rowsPerPage: x } = n.value;
    return (b - 1) * x;
  }), f = v(() => {
    const { page: b, rowsPerPage: x } = n.value;
    return b * x;
  }), m = v(() => n.value.page === 1), h = v(() => n.value.rowsPerPage === 0 ? 1 : Math.max(1, Math.ceil(c.value / n.value.rowsPerPage))), g = v(() => f.value === 0 ? true : n.value.page >= h.value), _ = v(() => (o.rowsPerPageOptions.includes(t.value.rowsPerPage) ? o.rowsPerPageOptions : [t.value.rowsPerPage].concat(o.rowsPerPageOptions)).map((x) => ({ label: x === 0 ? u.lang.table.allRows : "" + x, value: x })));
  be(h, (b, x) => {
    if (b === x) return;
    const $ = n.value.page;
    b && !$ ? a({ page: 1 }) : b < $ && a({ page: b });
  });
  function w() {
    a({ page: 1 });
  }
  function k() {
    const { page: b } = n.value;
    b > 1 && a({ page: b - 1 });
  }
  function p() {
    const { page: b, rowsPerPage: x } = n.value;
    f.value > 0 && b * x < c.value && a({ page: b + 1 });
  }
  function y() {
    a({ page: h.value });
  }
  return o["onUpdate:pagination"] !== void 0 && i("update:pagination", { ...n.value }), { firstRowIndex: s, lastRowIndex: f, isFirstPage: m, isLastPage: g, pagesNumber: h, computedRowsPerPageOptions: _, computedRowsNumber: c, firstPage: w, prevPage: k, nextPage: p, lastPage: y };
}
var A_ = { selection: { type: String, default: "none", validator: (e) => ["single", "multiple", "none"].includes(e) }, selected: { type: Array, default: () => [] } }, R_ = ["update:selected", "selection"];
function $_(e, t, n, l) {
  const a = v(() => {
    const g = {};
    return e.selected.map(l.value).forEach((_) => {
      g[_] = true;
    }), g;
  }), r = v(() => e.selection !== "none"), o = v(() => e.selection === "single"), i = v(() => e.selection === "multiple"), u = v(() => n.value.length !== 0 && n.value.every((g) => a.value[l.value(g)] === true)), c = v(() => u.value !== true && n.value.some((g) => a.value[l.value(g)] === true)), s = v(() => e.selected.length);
  function f(g) {
    return a.value[g] === true;
  }
  function m() {
    t("update:selected", []);
  }
  function h(g, _, w, k) {
    t("selection", { rows: _, added: w, keys: g, evt: k });
    const p = o.value === true ? w === true ? _ : [] : w === true ? e.selected.concat(_) : e.selected.filter((y) => g.includes(l.value(y)) === false);
    t("update:selected", p);
  }
  return { hasSelectionMode: r, singleSelection: o, multipleSelection: i, allRowsSelected: u, someRowsSelected: c, rowsSelectedNumber: s, isRowSelected: f, clearSelection: m, updateSelection: h };
}
function Nd(e) {
  return Array.isArray(e) ? e.slice() : [];
}
var P_ = { expanded: Array }, L_ = ["update:expanded"];
function B_(e, t) {
  const n = K(Nd(e.expanded));
  be(() => e.expanded, (o) => {
    n.value = Nd(o);
  });
  function l(o) {
    return n.value.includes(o);
  }
  function a(o) {
    e.expanded !== void 0 ? t("update:expanded", o) : n.value = o;
  }
  function r(o, i) {
    const u = n.value.slice(), c = u.indexOf(o);
    i === true ? c === -1 && (u.push(o), a(u)) : c !== -1 && (u.splice(c, 1), a(u));
  }
  return { isRowExpanded: l, setExpanded: a, updateExpanded: r };
}
var F_ = { visibleColumns: Array };
function O_(e, t, n) {
  const l = v(() => {
    if (e.columns !== void 0) return e.columns;
    const i = e.rows[0];
    return i !== void 0 ? Object.keys(i).map((u) => ({ name: u, label: u.toUpperCase(), field: u, align: pr(i[u]) ? "right" : "left", sortable: true })) : [];
  }), a = v(() => {
    const { sortBy: i, descending: u } = t.value;
    return (e.visibleColumns !== void 0 ? l.value.filter((s) => s.required === true || e.visibleColumns.includes(s.name) === true) : l.value).map((s) => {
      const f = s.align || "right", m = `text-${f}`;
      return { ...s, align: f, __iconClass: `q-table__sort-icon q-table__sort-icon--${f}`, __thClass: m + (s.headerClasses !== void 0 ? " " + s.headerClasses : "") + (s.sortable === true ? " sortable" : "") + (s.name === i ? ` sorted ${u === true ? "sort-desc" : ""}` : ""), __tdStyle: s.style !== void 0 ? typeof s.style != "function" ? () => s.style : s.style : () => null, __tdClass: s.classes !== void 0 ? typeof s.classes != "function" ? () => m + " " + s.classes : (h) => m + " " + s.classes(h) : () => m };
    });
  }), r = v(() => {
    const i = {};
    return a.value.forEach((u) => {
      i[u.name] = u;
    }), i;
  }), o = v(() => e.tableColspan !== void 0 ? e.tableColspan : a.value.length + (n.value === true ? 1 : 0));
  return { colList: l, computedCols: a, computedColsMap: r, computedColspan: o };
}
var Xr = "q-table__bottom row items-center", Nh = {};
Oh.forEach((e) => {
  Nh[e] = {};
});
he({ name: "QTable", props: { rows: { type: Array, required: true }, rowKey: { type: [String, Function], default: "id" }, columns: Array, loading: Boolean, iconFirstPage: String, iconPrevPage: String, iconNextPage: String, iconLastPage: String, title: String, hideHeader: Boolean, grid: Boolean, gridHeader: Boolean, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, separator: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical", "cell", "none"].includes(e) }, wrapCells: Boolean, virtualScroll: Boolean, virtualScrollTarget: {}, ...Nh, noDataLabel: String, noResultsLabel: String, loadingLabel: String, selectedRowsLabel: Function, rowsPerPageLabel: String, paginationLabel: Function, color: { type: String, default: "grey-8" }, titleClass: [String, Array, Object], tableStyle: [String, Array, Object], tableClass: [String, Array, Object], tableHeaderStyle: [String, Array, Object], tableHeaderClass: [String, Array, Object], tableRowStyleFn: Function, tableRowClassFn: Function, cardContainerClass: [String, Array, Object], cardContainerStyle: [String, Array, Object], cardStyle: [String, Array, Object], cardClass: [String, Array, Object], cardStyleFn: Function, cardClassFn: Function, hideBottom: Boolean, hideSelectedBanner: Boolean, hideNoData: Boolean, hidePagination: Boolean, onRowClick: Function, onRowDblclick: Function, onRowContextmenu: Function, ...nt, ...Ls, ...F_, ...C_, ...T_, ...P_, ...A_, ...S_ }, emits: ["request", "virtualScroll", ...Bs, ...L_, ...R_], setup(e, { slots: t, emit: n }) {
  const l = Se(), { proxy: { $q: a } } = l, r = lt(e, a), { inFullscreen: o, toggleFullscreen: i } = Fs(), u = v(() => typeof e.rowKey == "function" ? e.rowKey : (se) => se[e.rowKey]), c = K(null), s = K(null), f = v(() => e.grid !== true && e.virtualScroll === true), m = v(() => " q-table__card" + (r.value === true ? " q-table__card--dark q-dark" : "") + (e.square === true ? " q-table--square" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "")), h = v(() => `q-table__container q-table--${e.separator}-separator column no-wrap` + (e.grid === true ? " q-table--grid" : m.value) + (r.value === true ? " q-table--dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.wrapCells === false ? " q-table--no-wrap" : "") + (o.value === true ? " fullscreen scroll" : "")), g = v(() => h.value + (e.loading === true ? " q-table--loading" : ""));
  be(() => e.tableStyle + e.tableClass + e.tableHeaderStyle + e.tableHeaderClass + h.value, () => {
    var _a2;
    f.value === true && ((_a2 = s.value) == null ? void 0 : _a2.reset());
  });
  const { innerPagination: _, computedPagination: w, isServerSide: k, requestServerInteraction: p, setPagination: y } = M_(l, ie), { computedFilterMethod: b } = k_(e, y), { isRowExpanded: x, setExpanded: $, updateExpanded: F } = B_(e, n), D = v(() => {
    let se = e.rows;
    if (k.value === true || se.length === 0) return se;
    const { sortBy: xe, descending: Fe } = w.value;
    return e.filter && (se = b.value(se, e.filter, W.value, ie)), G.value !== null && (se = fe.value(e.rows === se ? se.slice() : se, xe, Fe)), se;
  }), B = v(() => D.value.length), P = v(() => {
    let se = D.value;
    if (k.value === true) return se;
    const { rowsPerPage: xe } = w.value;
    return xe !== 0 && (A.value === 0 && e.rows !== se ? se.length > te.value && (se = se.slice(0, te.value)) : se = se.slice(A.value, te.value)), se;
  }), { hasSelectionMode: I, singleSelection: q, multipleSelection: M, allRowsSelected: C, someRowsSelected: H, rowsSelectedNumber: Y, isRowSelected: L, clearSelection: O, updateSelection: U } = $_(e, n, P, u), { colList: ye, computedCols: W, computedColsMap: T, computedColspan: ee } = O_(e, w, I), { columnToSort: G, computedSortMethod: fe, sort: R } = x_(e, w, ye, y), { firstRowIndex: A, lastRowIndex: te, isFirstPage: V, isLastPage: j, pagesNumber: ue, computedRowsPerPageOptions: S, computedRowsNumber: E, firstPage: N, prevPage: ne, nextPage: le, lastPage: X } = E_(l, _, w, k, y, B), ve = v(() => P.value.length === 0), ge = v(() => {
    const se = {};
    return Oh.forEach((xe) => {
      se[xe] = e[xe];
    }), se.virtualScrollItemSize === void 0 && (se.virtualScrollItemSize = e.dense === true ? 28 : 48), se;
  });
  function me() {
    f.value === true && s.value.reset();
  }
  function de() {
    if (e.grid === true) return In();
    const se = e.hideHeader !== true ? Ce : null;
    if (f.value === true) {
      const Fe = t["top-row"], Be = t["bottom-row"], Ue = { default: (yt) => we(yt.item, t.body, yt.index) };
      if (Fe !== void 0) {
        const yt = d("tbody", Fe({ cols: W.value }));
        Ue.before = se === null ? () => yt : () => [se()].concat(yt);
      } else se !== null && (Ue.before = se);
      return Be !== void 0 && (Ue.after = () => d("tbody", Be({ cols: W.value }))), d(__, { ref: s, class: e.tableClass, style: e.tableStyle, ...ge.value, scrollTarget: e.virtualScrollTarget, items: P.value, type: "__qtable", tableColspan: ee.value, onVirtualScroll: Q }, Ue);
    }
    const xe = [ke()];
    return se !== null && xe.unshift(se()), Dh({ class: ["q-table__middle scroll", e.tableClass], style: e.tableStyle }, xe);
  }
  function ae(se, xe) {
    if (s.value !== null) {
      s.value.scrollTo(se, xe);
      return;
    }
    se = parseInt(se, 10);
    const Fe = c.value.querySelector(`tbody tr:nth-of-type(${se + 1})`);
    if (Fe !== null) {
      const Be = c.value.querySelector(".q-table__middle.scroll"), Ue = Fe.offsetTop - e.virtualScrollStickySizeStart, yt = Ue < Be.scrollTop ? "decrease" : "increase";
      Be.scrollTop = Ue, n("virtualScroll", { index: se, from: 0, to: _.value.rowsPerPage - 1, direction: yt });
    }
  }
  function Q(se) {
    n("virtualScroll", se);
  }
  function oe() {
    return [d(O1, { class: "q-table__linear-progress", color: e.color, dark: r.value, indeterminate: true, trackColor: "transparent" })];
  }
  function we(se, xe, Fe) {
    const Be = u.value(se), Ue = L(Be);
    if (xe !== void 0) {
      const Z = { key: Be, row: se, pageIndex: Fe, __trClass: Ue ? "selected" : "" };
      if (e.tableRowStyleFn !== void 0 && (Z.__trStyle = e.tableRowStyleFn(se)), e.tableRowClassFn !== void 0) {
        const ce = e.tableRowClassFn(se);
        ce && (Z.__trClass = `${ce} ${Z.__trClass}`);
      }
      return xe(qe(Z));
    }
    const yt = t["body-cell"], ht = W.value.map((Z) => {
      const ce = t[`body-cell-${Z.name}`], Te = ce !== void 0 ? ce : yt;
      return Te !== void 0 ? Te(Me({ key: Be, row: se, pageIndex: Fe, col: Z })) : d("td", { class: Z.__tdClass(se), style: Z.__tdStyle(se) }, ie(Z, se));
    });
    if (I.value === true) {
      const Z = t["body-selection"], ce = Z !== void 0 ? Z(He({ key: Be, row: se, pageIndex: Fe })) : [d(ir, { modelValue: Ue, color: e.color, dark: r.value, dense: e.dense, "onUpdate:modelValue": (Te, Ee) => {
        U([Be], [se], Te, Ee);
      } })];
      ht.unshift(d("td", { class: "q-table--col-auto-width" }, ce));
    }
    const z = { key: Be, class: { selected: Ue } };
    if (e.onRowClick !== void 0 && (z.class["cursor-pointer"] = true, z.onClick = (Z) => {
      n("rowClick", Z, se, Fe);
    }), e.onRowDblclick !== void 0 && (z.class["cursor-pointer"] = true, z.onDblclick = (Z) => {
      n("rowDblclick", Z, se, Fe);
    }), e.onRowContextmenu !== void 0 && (z.class["cursor-pointer"] = true, z.onContextmenu = (Z) => {
      n("rowContextmenu", Z, se, Fe);
    }), e.tableRowStyleFn !== void 0 && (z.style = e.tableRowStyleFn(se)), e.tableRowClassFn !== void 0) {
      const Z = e.tableRowClassFn(se);
      Z && (z.class[Z] = true);
    }
    return d("tr", z, ht);
  }
  function ke() {
    const se = t.body, xe = t["top-row"], Fe = t["bottom-row"];
    let Be = P.value.map((Ue, yt) => we(Ue, se, yt));
    return xe !== void 0 && (Be = xe({ cols: W.value }).concat(Be)), Fe !== void 0 && (Be = Be.concat(Fe({ cols: W.value }))), d("tbody", Be);
  }
  function qe(se) {
    return Ve(se), se.cols = se.cols.map((xe) => Ot({ ...xe }, "value", () => ie(xe, se.row))), se;
  }
  function Me(se) {
    return Ve(se), Ot(se, "value", () => ie(se.col, se.row)), se;
  }
  function He(se) {
    return Ve(se), se;
  }
  function Ve(se) {
    Object.assign(se, { cols: W.value, colsMap: T.value, sort: R, rowIndex: A.value + se.pageIndex, color: e.color, dark: r.value, dense: e.dense }), I.value === true && Ot(se, "selected", () => L(se.key), (xe, Fe) => {
      U([se.key], [se.row], xe, Fe);
    }), Ot(se, "expand", () => x(se.key), (xe) => {
      F(se.key, xe);
    });
  }
  function ie(se, xe) {
    const Fe = typeof se.field == "function" ? se.field(xe) : xe[se.field];
    return se.format !== void 0 ? se.format(Fe, xe) : Fe;
  }
  const pe = v(() => ({ pagination: w.value, pagesNumber: ue.value, isFirstPage: V.value, isLastPage: j.value, firstPage: N, prevPage: ne, nextPage: le, lastPage: X, inFullscreen: o.value, toggleFullscreen: i }));
  function re() {
    const se = t.top, xe = t["top-left"], Fe = t["top-right"], Be = t["top-selection"], Ue = I.value === true && Be !== void 0 && Y.value > 0, yt = "q-table__top relative-position row items-center";
    if (se !== void 0) return d("div", { class: yt }, [se(pe.value)]);
    let ht;
    if (Ue === true ? ht = Be(pe.value).slice() : (ht = [], xe !== void 0 ? ht.push(d("div", { class: "q-table__control" }, [xe(pe.value)])) : e.title && ht.push(d("div", { class: "q-table__control" }, [d("div", { class: ["q-table__title", e.titleClass] }, e.title)]))), Fe !== void 0 && (ht.push(d("div", { class: "q-table__separator col" })), ht.push(d("div", { class: "q-table__control" }, [Fe(pe.value)]))), ht.length !== 0) return d("div", { class: yt }, ht);
  }
  const _e = v(() => H.value === true ? null : C.value);
  function Ce() {
    const se = Oe();
    return e.loading === true && t.loading === void 0 && se.push(d("tr", { class: "q-table__progress" }, [d("th", { class: "relative-position", colspan: ee.value }, oe())])), d("thead", se);
  }
  function Oe() {
    const se = t.header, xe = t["header-cell"];
    if (se !== void 0) return se(Ae({ header: true })).slice();
    const Fe = W.value.map((Be) => {
      const Ue = t[`header-cell-${Be.name}`], yt = Ue !== void 0 ? Ue : xe, ht = Ae({ col: Be });
      return yt !== void 0 ? yt(ht) : d(b_, { key: Be.name, props: ht }, () => Be.label);
    });
    if (q.value === true && e.grid !== true) Fe.unshift(d("th", { class: "q-table--col-auto-width" }, " "));
    else if (M.value === true) {
      const Be = t["header-selection"], Ue = Be !== void 0 ? Be(Ae({})) : [d(ir, { color: e.color, modelValue: _e.value, dark: r.value, dense: e.dense, "onUpdate:modelValue": Ye })];
      Fe.unshift(d("th", { class: "q-table--col-auto-width" }, Ue));
    }
    return [d("tr", { class: e.tableHeaderClass, style: e.tableHeaderStyle }, Fe)];
  }
  function Ae(se) {
    return Object.assign(se, { cols: W.value, sort: R, colsMap: T.value, color: e.color, dark: r.value, dense: e.dense }), M.value === true && Ot(se, "selected", () => _e.value, Ye), se;
  }
  function Ye(se) {
    H.value === true && (se = false), U(P.value.map(u.value), P.value, se);
  }
  const it = v(() => {
    const se = [e.iconFirstPage || a.iconSet.table.firstPage, e.iconPrevPage || a.iconSet.table.prevPage, e.iconNextPage || a.iconSet.table.nextPage, e.iconLastPage || a.iconSet.table.lastPage];
    return a.lang.rtl === true ? se.reverse() : se;
  });
  function Ct() {
    if (e.hideBottom === true) return;
    if (ve.value === true) {
      if (e.hideNoData === true) return;
      const Fe = e.loading === true ? e.loadingLabel || a.lang.table.loading : e.filter ? e.noResultsLabel || a.lang.table.noResults : e.noDataLabel || a.lang.table.noData, Be = t["no-data"], Ue = Be !== void 0 ? [Be({ message: Fe, icon: a.iconSet.table.warning, filter: e.filter })] : [d(et, { class: "q-table__bottom-nodata-icon", name: a.iconSet.table.warning }), Fe];
      return d("div", { class: Xr + " q-table__bottom--nodata" }, Ue);
    }
    const se = t.bottom;
    if (se !== void 0) return d("div", { class: Xr }, [se(pe.value)]);
    const xe = e.hideSelectedBanner !== true && I.value === true && Y.value > 0 ? [d("div", { class: "q-table__control" }, [d("div", [(e.selectedRowsLabel || a.lang.table.selectedRecords)(Y.value)])])] : [];
    if (e.hidePagination !== true) return d("div", { class: Xr + " justify-end" }, nl(xe));
    if (xe.length !== 0) return d("div", { class: Xr }, xe);
  }
  function jt(se) {
    y({ page: 1, rowsPerPage: se.value });
  }
  function nl(se) {
    let xe;
    const { rowsPerPage: Fe } = w.value, Be = e.paginationLabel || a.lang.table.pagination, Ue = t.pagination, yt = e.rowsPerPageOptions.length > 1;
    if (se.push(d("div", { class: "q-table__separator col" })), yt === true && se.push(d("div", { class: "q-table__control" }, [d("span", { class: "q-table__bottom-item" }, [e.rowsPerPageLabel || a.lang.table.recordsPerPage]), d(j1, { class: "q-table__select inline q-table__bottom-item", color: e.color, modelValue: Fe, options: S.value, displayValue: Fe === 0 ? a.lang.table.allRows : Fe, dark: r.value, borderless: true, dense: true, optionsDense: true, optionsCover: true, "onUpdate:modelValue": jt })])), Ue !== void 0) xe = Ue(pe.value);
    else if (xe = [d("span", Fe !== 0 ? { class: "q-table__bottom-item" } : {}, [Fe ? Be(A.value + 1, Math.min(te.value, E.value), E.value) : Be(1, B.value, E.value)])], Fe !== 0 && ue.value > 1) {
      const ht = { color: e.color, round: true, dense: true, flat: true };
      e.dense === true && (ht.size = "sm"), ue.value > 2 && xe.push(d(Ze, { key: "pgFirst", ...ht, icon: it.value[0], disable: V.value, ariaLabel: a.lang.pagination.first, onClick: N })), xe.push(d(Ze, { key: "pgPrev", ...ht, icon: it.value[1], disable: V.value, ariaLabel: a.lang.pagination.prev, onClick: ne }), d(Ze, { key: "pgNext", ...ht, icon: it.value[2], disable: j.value, ariaLabel: a.lang.pagination.next, onClick: le })), ue.value > 2 && xe.push(d(Ze, { key: "pgLast", ...ht, icon: it.value[3], disable: j.value, ariaLabel: a.lang.pagination.last, onClick: X }));
    }
    return se.push(d("div", { class: "q-table__control" }, xe)), se;
  }
  function ln() {
    const se = e.gridHeader === true ? [d("table", { class: "q-table" }, [Ce()])] : e.loading === true && t.loading === void 0 ? oe() : void 0;
    return d("div", { class: "q-table__middle" }, se);
  }
  function In() {
    const se = t.item !== void 0 ? t.item : (xe) => {
      const Fe = xe.cols.map((Ue) => d("div", { class: "q-table__grid-item-row" }, [d("div", { class: "q-table__grid-item-title" }, [Ue.label]), d("div", { class: "q-table__grid-item-value" }, [Ue.value])]));
      if (I.value === true) {
        const Ue = t["body-selection"], yt = Ue !== void 0 ? Ue(xe) : [d(ir, { modelValue: xe.selected, color: e.color, dark: r.value, dense: e.dense, "onUpdate:modelValue": (ht, z) => {
          U([xe.key], [xe.row], ht, z);
        } })];
        Fe.unshift(d("div", { class: "q-table__grid-item-row" }, yt), d(Ql, { dark: r.value }));
      }
      const Be = { class: ["q-table__grid-item-card" + m.value, e.cardClass], style: e.cardStyle };
      if (e.cardStyleFn !== void 0 && (Be.style = [Be.style, e.cardStyleFn(xe.row)]), e.cardClassFn !== void 0) {
        const Ue = e.cardClassFn(xe.row);
        Ue && (Be.class[0] += ` ${Ue}`);
      }
      return (e.onRowClick !== void 0 || e.onRowDblclick !== void 0 || e.onRowContextmenu !== void 0) && (Be.class[0] += " cursor-pointer", e.onRowClick !== void 0 && (Be.onClick = (Ue) => {
        n("RowClick", Ue, xe.row, xe.pageIndex);
      }), e.onRowDblclick !== void 0 && (Be.onDblclick = (Ue) => {
        n("RowDblclick", Ue, xe.row, xe.pageIndex);
      }), e.onRowContextmenu !== void 0 && (Be.onContextmenu = (Ue) => {
        n("rowContextmenu", Ue, xe.row, xe.pageIndex);
      })), d("div", { class: "q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3" + (xe.selected === true ? " q-table__grid-item--selected" : "") }, [d("div", Be, Fe)]);
    };
    return d("div", { class: ["q-table__grid-content row", e.cardContainerClass], style: e.cardContainerStyle }, P.value.map((xe, Fe) => se(qe({ key: u.value(xe), row: xe, pageIndex: Fe }))));
  }
  return Object.assign(l.proxy, { requestServerInteraction: p, setPagination: y, firstPage: N, prevPage: ne, nextPage: le, lastPage: X, isRowSelected: L, clearSelection: O, isRowExpanded: x, setExpanded: $, sort: R, resetVirtualScroll: me, scrollTo: ae, getCellValue: ie }), Yv(l.proxy, { filteredSortedRows: () => D.value, computedRows: () => P.value, computedRowsNumber: () => E.value }), () => {
    const se = [re()], xe = { ref: c, class: g.value };
    return e.grid === true ? se.push(ln()) : Object.assign(xe, { class: [xe.class, e.cardClass], style: e.cardStyle }), se.push(de(), Ct()), e.loading === true && t.loading !== void 0 && se.push(t.loading()), d("div", xe, se);
  };
} });
he({ name: "QTr", props: { props: Object, noHover: Boolean }, setup(e, { slots: t }) {
  const n = v(() => "q-tr" + (e.props === void 0 || e.props.header === true ? "" : " " + e.props.__trClass) + (e.noHover === true ? " q-tr--no-hover" : ""));
  return () => {
    var _a2;
    return d("tr", { style: (_a2 = e.props) == null ? void 0 : _a2.__trStyle, class: n.value }, Pe(t.default));
  };
} });
he({ name: "QTd", props: { props: Object, autoWidth: Boolean, noHover: Boolean }, setup(e, { slots: t }) {
  const n = Se(), l = v(() => "q-td" + (e.autoWidth === true ? " q-table--col-auto-width" : "") + (e.noHover === true ? " q-td--no-hover" : "") + " ");
  return () => {
    if (e.props === void 0) return d("td", { class: l.value }, Pe(t.default));
    const a = n.vnode.key, r = (e.props.colsMap !== void 0 ? e.props.colsMap[a] : null) || e.props.col;
    if (r === void 0) return;
    const { row: o } = e.props;
    return d("td", { class: l.value + r.__tdClass(o), style: r.__tdStyle(o) }, Pe(t.default));
  };
} });
he({ name: "QRouteTab", props: { ...Ar, ...Jm }, emits: Zm, setup(e, { slots: t, emit: n }) {
  const l = ai({ useDisableForRouterLinkProps: false }), { renderTab: a, $tabs: r } = eh(e, t, n, { exact: v(() => e.exact), ...l });
  return be(() => `${e.name} | ${e.exact} | ${(l.resolvedLink.value || {}).href}`, r.verifyRouteModel), () => a(l.linkTag.value, l.linkAttrs.value);
} });
function V_(e, t) {
  return e.hour !== null && e.minute === null ? "minute" : "hour";
}
function z_() {
  const e = /* @__PURE__ */ new Date();
  return { hour: e.getHours(), minute: e.getMinutes(), second: e.getSeconds(), millisecond: e.getMilliseconds() };
}
he({ name: "QTime", props: { ...nt, ...wn, ...Fo, modelValue: { required: true, validator: (e) => typeof e == "string" || e === null }, mask: { ...Fo.mask, default: null }, format24h: { type: Boolean, default: null }, defaultDate: { type: String, validator: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e) }, options: Function, hourOptions: Array, minuteOptions: Array, secondOptions: Array, withSeconds: Boolean, nowBtn: Boolean }, emits: rh, setup(e, { slots: t, emit: n }) {
  const l = Se(), { $q: a } = l.proxy, r = lt(e, a), { tabindex: o, headerClass: i, getLocale: u, getCurrentDate: c } = oh(e, a), s = $r(e), f = Cl(s);
  let m, h;
  const g = K(null), _ = v(() => fe()), w = v(() => u()), k = v(() => R()), p = Ka(e.modelValue, _.value, w.value, e.calendar, k.value), y = K(V_(p)), b = K(p), x = K(p.hour === null || p.hour < 12), $ = v(() => `q-time q-time--${e.landscape === true ? "landscape" : "portrait"}` + (r.value === true ? " q-time--dark q-dark" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-time--readonly" : "") + (e.bordered === true ? " q-time--bordered" : "") + (e.square === true ? " q-time--square no-border-radius" : "") + (e.flat === true ? " q-time--flat no-shadow" : "")), F = v(() => {
    const ie = b.value;
    return { hour: ie.hour === null ? "--" : D.value === true ? rt(ie.hour) : String(x.value === true ? ie.hour === 0 ? 12 : ie.hour : ie.hour > 12 ? ie.hour - 12 : ie.hour), minute: ie.minute === null ? "--" : rt(ie.minute), second: ie.second === null ? "--" : rt(ie.second) };
  }), D = v(() => e.format24h !== null ? e.format24h : a.lang.date.format24h), B = v(() => {
    const ie = y.value === "hour", pe = ie === true ? 12 : 60, re = b.value[y.value];
    let Ce = `rotate(${Math.round(re * (360 / pe)) - 180}deg) translateX(-50%)`;
    return ie === true && D.value === true && b.value.hour >= 12 && (Ce += " scale(.7)"), { transform: Ce };
  }), P = v(() => b.value.hour !== null), I = v(() => P.value === true && b.value.minute !== null), q = v(() => e.hourOptions !== void 0 ? (ie) => e.hourOptions.includes(ie) : e.options !== void 0 ? (ie) => e.options(ie, null, null) : null), M = v(() => e.minuteOptions !== void 0 ? (ie) => e.minuteOptions.includes(ie) : e.options !== void 0 ? (ie) => e.options(b.value.hour, ie, null) : null), C = v(() => e.secondOptions !== void 0 ? (ie) => e.secondOptions.includes(ie) : e.options !== void 0 ? (ie) => e.options(b.value.hour, b.value.minute, ie) : null), H = v(() => {
    if (q.value === null) return null;
    const ie = T(0, 11, q.value), pe = T(12, 11, q.value);
    return { am: ie, pm: pe, values: ie.values.concat(pe.values) };
  }), Y = v(() => M.value !== null ? T(0, 59, M.value) : null), L = v(() => C.value !== null ? T(0, 59, C.value) : null), O = v(() => {
    switch (y.value) {
      case "hour":
        return H.value;
      case "minute":
        return Y.value;
      case "second":
        return L.value;
    }
  }), U = v(() => {
    let ie, pe, re = 0, _e = 1;
    const Ce = O.value !== null ? O.value.values : void 0;
    y.value === "hour" ? D.value === true ? (ie = 0, pe = 23) : (ie = 0, pe = 11, x.value === false && (re = 12)) : (ie = 0, pe = 55, _e = 5);
    const Oe = [];
    for (let Ae = ie, Ye = ie; Ae <= pe; Ae += _e, Ye++) {
      const it = Ae + re, Ct = (Ce == null ? void 0 : Ce.includes(it)) === false, jt = y.value === "hour" && Ae === 0 ? D.value === true ? "00" : "12" : Ae;
      Oe.push({ val: it, index: Ye, disable: Ct, label: jt });
    }
    return Oe;
  }), ye = v(() => [[gn, V, void 0, { stop: true, prevent: true, mouse: true }]]);
  be(() => e.modelValue, (ie) => {
    const pe = Ka(ie, _.value, w.value, e.calendar, k.value);
    (pe.dateHash !== b.value.dateHash || pe.timeHash !== b.value.timeHash) && (b.value = pe, pe.hour === null ? y.value = "hour" : x.value = pe.hour < 12);
  }), be([_, w], () => {
    We(() => {
      Me();
    });
  });
  function W() {
    const ie = { ...c(), ...z_() };
    Me(ie), Object.assign(b.value, ie), y.value = "hour";
  }
  function T(ie, pe, re) {
    const _e = Array.apply(null, { length: pe + 1 }).map((Ce, Oe) => {
      const Ae = Oe + ie;
      return { index: Ae, val: re(Ae) === true };
    }).filter((Ce) => Ce.val === true).map((Ce) => Ce.index);
    return { min: _e[0], max: _e[_e.length - 1], values: _e, threshold: pe + 1 };
  }
  function ee(ie, pe, re) {
    const _e = Math.abs(ie - pe);
    return Math.min(_e, re - _e);
  }
  function G(ie, { min: pe, max: re, values: _e, threshold: Ce }) {
    if (ie === pe) return pe;
    if (ie < pe || ie > re) return ee(ie, pe, Ce) <= ee(ie, re, Ce) ? pe : re;
    const Oe = _e.findIndex((it) => ie <= it), Ae = _e[Oe - 1], Ye = _e[Oe];
    return ie - Ae <= Ye - ie ? Ae : Ye;
  }
  function fe() {
    return e.calendar !== "persian" && e.mask !== null ? e.mask : `HH:mm${e.withSeconds === true ? ":ss" : ""}`;
  }
  function R() {
    if (typeof e.defaultDate != "string") {
      const ie = c(true);
      return ie.dateHash = Un(ie), ie;
    }
    return Ka(e.defaultDate, "YYYY/MM/DD", void 0, e.calendar);
  }
  function A() {
    return gl(l) === true || O.value !== null && (O.value.values.length === 0 || y.value === "hour" && D.value !== true && H.value[x.value === true ? "am" : "pm"].values.length === 0);
  }
  function te() {
    const ie = g.value, { top: pe, left: re, width: _e } = ie.getBoundingClientRect(), Ce = _e / 2;
    return { top: pe + Ce, left: re + Ce, dist: Ce * 0.7 };
  }
  function V(ie) {
    if (A() !== true) {
      if (ie.isFirst === true) {
        m = te(), h = ue(ie.evt, m);
        return;
      }
      h = ue(ie.evt, m, h), ie.isFinal === true && (m = false, h = null, j());
    }
  }
  function j() {
    y.value === "hour" ? y.value = "minute" : e.withSeconds && y.value === "minute" && (y.value = "second");
  }
  function ue(ie, pe, re) {
    const _e = en(ie), Ce = Math.abs(_e.top - pe.top), Oe = Math.sqrt(Math.pow(Math.abs(_e.top - pe.top), 2) + Math.pow(Math.abs(_e.left - pe.left), 2));
    let Ae, Ye = Math.asin(Ce / Oe) * (180 / Math.PI);
    if (_e.top < pe.top ? Ye = pe.left < _e.left ? 90 - Ye : 270 + Ye : Ye = pe.left < _e.left ? Ye + 90 : 270 - Ye, y.value === "hour") {
      if (Ae = Ye / 30, H.value !== null) {
        const it = D.value !== true ? x.value === true : H.value.am.values.length !== 0 && H.value.pm.values.length !== 0 ? Oe >= pe.dist : H.value.am.values.length !== 0;
        Ae = G(Ae + (it === true ? 0 : 12), H.value[it === true ? "am" : "pm"]);
      } else Ae = Math.round(Ae), D.value === true ? Oe < pe.dist ? Ae < 12 && (Ae += 12) : Ae === 12 && (Ae = 0) : x.value === true && Ae === 12 ? Ae = 0 : x.value === false && Ae !== 12 && (Ae += 12);
      D.value === true && (x.value = Ae < 12);
    } else Ae = Math.round(Ye / 6) % 60, y.value === "minute" && Y.value !== null ? Ae = G(Ae, Y.value) : y.value === "second" && L.value !== null && (Ae = G(Ae, L.value));
    return re !== Ae && Q[y.value](Ae), Ae;
  }
  const S = { hour() {
    y.value = "hour";
  }, minute() {
    y.value = "minute";
  }, second() {
    y.value = "second";
  } };
  function E(ie) {
    ie.keyCode === 13 && oe();
  }
  function N(ie) {
    ie.keyCode === 13 && we();
  }
  function ne(ie) {
    A() !== true && (a.platform.is.desktop !== true && ue(ie, te()), j());
  }
  function le(ie) {
    A() !== true && ue(ie, te());
  }
  function X(ie) {
    if (ie.keyCode === 13) y.value = "hour";
    else if ([37, 39].includes(ie.keyCode)) {
      const pe = ie.keyCode === 37 ? -1 : 1;
      if (H.value !== null) {
        const re = D.value === true ? H.value.values : H.value[x.value === true ? "am" : "pm"].values;
        if (re.length === 0) return;
        if (b.value.hour === null) me(re[0]);
        else {
          const _e = (re.length + re.indexOf(b.value.hour) + pe) % re.length;
          me(re[_e]);
        }
      } else {
        const re = D.value === true ? 24 : 12, _e = D.value !== true && x.value === false ? 12 : 0, Ce = b.value.hour === null ? -pe : b.value.hour;
        me(_e + (24 + Ce + pe) % re);
      }
    }
  }
  function ve(ie) {
    if (ie.keyCode === 13) y.value = "minute";
    else if ([37, 39].includes(ie.keyCode)) {
      const pe = ie.keyCode === 37 ? -1 : 1;
      if (Y.value !== null) {
        const re = Y.value.values;
        if (re.length === 0) return;
        if (b.value.minute === null) de(re[0]);
        else {
          const _e = (re.length + re.indexOf(b.value.minute) + pe) % re.length;
          de(re[_e]);
        }
      } else {
        const re = b.value.minute === null ? -pe : b.value.minute;
        de((60 + re + pe) % 60);
      }
    }
  }
  function ge(ie) {
    if (ie.keyCode === 13) y.value = "second";
    else if ([37, 39].includes(ie.keyCode)) {
      const pe = ie.keyCode === 37 ? -1 : 1;
      if (L.value !== null) {
        const re = L.value.values;
        if (re.length === 0) return;
        if (b.value.seconds === null) ae(re[0]);
        else {
          const _e = (re.length + re.indexOf(b.value.second) + pe) % re.length;
          ae(re[_e]);
        }
      } else {
        const re = b.value.second === null ? -pe : b.value.second;
        ae((60 + re + pe) % 60);
      }
    }
  }
  function me(ie) {
    b.value.hour !== ie && (b.value.hour = ie, qe());
  }
  function de(ie) {
    b.value.minute !== ie && (b.value.minute = ie, qe());
  }
  function ae(ie) {
    b.value.second !== ie && (b.value.second = ie, qe());
  }
  const Q = { hour: me, minute: de, second: ae };
  function oe() {
    x.value === false && (x.value = true, b.value.hour !== null && (b.value.hour -= 12, qe()));
  }
  function we() {
    x.value === true && (x.value = false, b.value.hour !== null && (b.value.hour += 12, qe()));
  }
  function ke(ie) {
    const pe = e.modelValue;
    y.value !== ie && pe !== void 0 && pe !== null && pe !== "" && typeof pe != "string" && (y.value = ie);
  }
  function qe() {
    if (q.value !== null && q.value(b.value.hour) !== true) {
      b.value = Ka(), ke("hour");
      return;
    }
    if (M.value !== null && M.value(b.value.minute) !== true) {
      b.value.minute = null, b.value.second = null, ke("minute");
      return;
    }
    if (e.withSeconds === true && C.value !== null && C.value(b.value.second) !== true) {
      b.value.second = null, ke("second");
      return;
    }
    b.value.hour === null || b.value.minute === null || e.withSeconds === true && b.value.second === null || Me();
  }
  function Me(ie) {
    const pe = Object.assign({ ...b.value }, ie), re = e.calendar === "persian" ? rt(pe.hour) + ":" + rt(pe.minute) + (e.withSeconds === true ? ":" + rt(pe.second) : "") : dh(new Date(pe.year, pe.month === null ? null : pe.month - 1, pe.day, pe.hour, pe.minute, pe.second, pe.millisecond), _.value, w.value, pe.year, pe.timezoneOffset);
    pe.changed = re !== e.modelValue, n("update:modelValue", re, pe);
  }
  function He() {
    const ie = [d("div", { class: "q-time__link " + (y.value === "hour" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: S.hour, onKeyup: X }, F.value.hour), d("div", ":"), d("div", P.value === true ? { class: "q-time__link " + (y.value === "minute" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onKeyup: ve, onClick: S.minute } : { class: "q-time__link" }, F.value.minute)];
    e.withSeconds === true && ie.push(d("div", ":"), d("div", I.value === true ? { class: "q-time__link " + (y.value === "second" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onKeyup: ge, onClick: S.second } : { class: "q-time__link" }, F.value.second));
    const pe = [d("div", { class: "q-time__header-label row items-center no-wrap", dir: "ltr" }, ie)];
    return D.value === false && pe.push(d("div", { class: "q-time__header-ampm column items-between no-wrap" }, [d("div", { class: "q-time__link " + (x.value === true ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: oe, onKeyup: E }, "AM"), d("div", { class: "q-time__link " + (x.value !== true ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: we, onKeyup: N }, "PM")])), d("div", { class: "q-time__header flex flex-center no-wrap " + i.value }, pe);
  }
  function Ve() {
    const ie = b.value[y.value];
    return d("div", { class: "q-time__content col relative-position" }, [d(Ft, { name: "q-transition--scale" }, () => d("div", { key: "clock" + y.value, class: "q-time__container-parent absolute-full" }, [d("div", { ref: g, class: "q-time__container-child fit overflow-hidden" }, [sn(d("div", { class: "q-time__clock cursor-pointer non-selectable", onClick: ne, onMousedown: le }, [d("div", { class: "q-time__clock-circle fit" }, [d("div", { class: "q-time__clock-pointer" + (b.value[y.value] === null ? " hidden" : e.color !== void 0 ? ` text-${e.color}` : ""), style: B.value }), U.value.map((pe) => d("div", { class: `q-time__clock-position row flex-center q-time__clock-pos-${pe.index}` + (pe.val === ie ? " q-time__clock-position--active " + i.value : pe.disable === true ? " q-time__clock-position--disable" : "") }, [d("span", pe.label)]))])]), ye.value)])])), e.nowBtn === true ? d(Ze, { class: "q-time__now-button absolute", icon: a.iconSet.datetime.now, unelevated: true, size: "sm", round: true, color: e.color, textColor: e.textColor, tabindex: o.value, onClick: W }) : null]);
  }
  return l.proxy.setNow = W, () => {
    const ie = [Ve()], pe = Pe(t.default);
    return pe !== void 0 && ie.push(d("div", { class: "q-time__actions" }, pe)), e.name !== void 0 && e.disable !== true && f(ie, "push"), d("div", { class: $.value, tabindex: -1 }, [He(), d("div", { class: "q-time__main col overflow-auto" }, ie)]);
  };
} });
he({ name: "QTimeline", props: { ...nt, color: { type: String, default: "primary" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, layout: { type: String, default: "dense", validator: (e) => ["dense", "comfortable", "loose"].includes(e) } }, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q);
  hn(am, e);
  const a = v(() => `q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}` + (l.value === true ? " q-timeline--dark" : ""));
  return () => d("ul", { class: a.value }, Pe(t.default));
} });
he({ name: "QTimelineEntry", props: { heading: Boolean, tag: { type: String, default: "h3" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, icon: String, avatar: String, color: String, title: String, subtitle: String, body: String }, setup(e, { slots: t }) {
  const n = Tt(am, ot);
  if (n === ot) return console.error("QTimelineEntry needs to be child of QTimeline"), ot;
  const l = v(() => `q-timeline__entry q-timeline__entry--${e.side}` + (e.icon !== void 0 || e.avatar !== void 0 ? " q-timeline__entry--icon" : "")), a = v(() => `q-timeline__dot text-${e.color || n.color}`), r = v(() => n.layout === "comfortable" && n.side === "left");
  return () => {
    const o = Er(t.default, []);
    if (e.body !== void 0 && o.unshift(e.body), e.heading === true) {
      const c = [d("div"), d("div"), d(e.tag, { class: "q-timeline__heading-title" }, o)];
      return d("div", { class: "q-timeline__heading" }, r.value === true ? c.reverse() : c);
    }
    let i;
    e.icon !== void 0 ? i = [d(et, { class: "row items-center justify-center", name: e.icon })] : e.avatar !== void 0 && (i = [d("img", { class: "q-timeline__dot-img", src: e.avatar })]);
    const u = [d("div", { class: "q-timeline__subtitle" }, [d("span", {}, Pe(t.subtitle, [e.subtitle]))]), d("div", { class: a.value }, i), d("div", { class: "q-timeline__content" }, [d("h6", { class: "q-timeline__title" }, Pe(t.title, [e.title]))].concat(o))];
    return d("li", { class: l.value }, r.value === true ? u.reverse() : u);
  };
} });
var Hd = he({ name: "QToolbar", props: { inset: Boolean }, setup(e, { slots: t }) {
  const n = v(() => "q-toolbar row no-wrap items-center" + (e.inset === true ? " q-toolbar--inset" : ""));
  return () => d("div", { class: n.value, role: "toolbar" }, Pe(t.default));
} }), jd = he({ name: "QToolbarTitle", props: { shrink: Boolean }, setup(e, { slots: t }) {
  const n = v(() => "q-toolbar__title ellipsis" + (e.shrink === true ? " col-shrink" : ""));
  return () => d("div", { class: n.value }, Pe(t.default));
} }), I_ = ["none", "strict", "leaf", "leaf-filtered"];
he({ name: "QTree", props: { ...nt, nodes: { type: Array, required: true }, nodeKey: { type: String, required: true }, labelKey: { type: String, default: "label" }, childrenKey: { type: String, default: "children" }, dense: Boolean, color: String, controlColor: String, textColor: String, selectedColor: String, icon: String, tickStrategy: { type: String, default: "none", validator: (e) => I_.includes(e) }, ticked: Array, expanded: Array, selected: {}, noSelectionUnset: Boolean, defaultExpandAll: Boolean, accordion: Boolean, filter: String, filterMethod: Function, duration: {}, noConnectors: Boolean, noTransition: Boolean, noNodesLabel: String, noResultsLabel: String }, emits: ["update:expanded", "update:ticked", "update:selected", "lazyLoad", "afterShow", "afterHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = lt(e, a), o = K({}), i = K(e.ticked || []), u = K(e.expanded || []);
  let c = {};
  Ma(() => {
    c = {};
  });
  const s = v(() => `q-tree q-tree--${e.dense === true ? "dense" : "standard"}` + (e.noConnectors === true ? " q-tree--no-connectors" : "") + (r.value === true ? " q-tree--dark" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), f = v(() => e.selected !== void 0), m = v(() => e.icon || a.iconSet.tree.icon), h = v(() => e.controlColor || e.color), g = v(() => e.textColor !== void 0 ? ` text-${e.textColor}` : ""), _ = v(() => {
    const T = e.selectedColor || e.color;
    return T ? ` text-${T}` : "";
  }), w = v(() => e.filterMethod !== void 0 ? e.filterMethod : (T, ee) => {
    const G = ee.toLowerCase();
    return T[e.labelKey] && T[e.labelKey].toLowerCase().indexOf(G) !== -1;
  }), k = v(() => {
    const T = {}, ee = (G, fe) => {
      const R = G.tickStrategy || (fe ? fe.tickStrategy : e.tickStrategy), A = G[e.nodeKey], te = G[e.childrenKey] && Array.isArray(G[e.childrenKey]) && G[e.childrenKey].length !== 0, V = G.disabled !== true && f.value === true && G.selectable !== false, j = G.disabled !== true && G.expandable !== false, ue = R !== "none", S = R === "strict", E = R === "leaf-filtered", N = R === "leaf" || R === "leaf-filtered";
      let ne = G.disabled !== true && G.tickable !== false;
      N === true && ne === true && fe && fe.tickable !== true && (ne = false);
      let le = G.lazy;
      le === true && o.value[A] !== void 0 && Array.isArray(G[e.childrenKey]) === true && (le = o.value[A]);
      const X = { key: A, parent: fe, isParent: te, lazy: le, disabled: G.disabled, link: G.disabled !== true && (V === true || j === true && (te === true || le === true)), children: [], matchesFilter: e.filter ? w.value(G, e.filter) : true, selected: A === e.selected && V === true, selectable: V, expanded: te === true ? u.value.includes(A) : false, expandable: j, noTick: G.noTick === true || S !== true && le && le !== "loaded", tickable: ne, tickStrategy: R, hasTicking: ue, strictTicking: S, leafFilteredTicking: E, leafTicking: N, ticked: S === true ? i.value.includes(A) : te === true ? false : i.value.includes(A) };
      if (T[A] = X, te === true && (X.children = G[e.childrenKey].map((ve) => ee(ve, X)), e.filter && (X.matchesFilter !== true ? X.matchesFilter = X.children.some((ve) => ve.matchesFilter) : X.noTick !== true && X.disabled !== true && X.tickable === true && E === true && X.children.every((ve) => ve.matchesFilter !== true || ve.noTick === true || ve.tickable !== true) === true && (X.tickable = false)), X.matchesFilter === true && (X.noTick !== true && S !== true && X.children.every((ve) => ve.noTick) === true && (X.noTick = true), N))) {
        if (X.ticked = false, X.indeterminate = X.children.some((ve) => ve.indeterminate === true), X.tickable = X.tickable === true && X.children.some((ve) => ve.tickable), X.indeterminate !== true) {
          const ve = X.children.reduce((ge, me) => me.ticked === true ? ge + 1 : ge, 0);
          ve === X.children.length ? X.ticked = true : ve > 0 && (X.indeterminate = true);
        }
        X.indeterminate === true && (X.indeterminateNextState = X.children.every((ve) => ve.tickable !== true || ve.ticked !== true));
      }
      return X;
    };
    return e.nodes.forEach((G) => ee(G, null)), T;
  });
  be(() => e.ticked, (T) => {
    i.value = T;
  }), be(() => e.expanded, (T) => {
    u.value = T;
  });
  function p(T) {
    const ee = [].reduce, G = (fe, R) => {
      if (fe || !R) return fe;
      if (Array.isArray(R) === true) return ee.call(Object(R), G, fe);
      if (R[e.nodeKey] === T) return R;
      if (R[e.childrenKey]) return G(null, R[e.childrenKey]);
    };
    return G(null, e.nodes);
  }
  function y() {
    return i.value.map((T) => p(T));
  }
  function b() {
    return u.value.map((T) => p(T));
  }
  function x(T) {
    return T && k.value[T] ? k.value[T].expanded : false;
  }
  function $() {
    e.expanded !== void 0 ? n("update:expanded", []) : u.value = [];
  }
  function F() {
    const T = [], ee = (G) => {
      G[e.childrenKey] && G[e.childrenKey].length !== 0 && G.expandable !== false && G.disabled !== true && (T.push(G[e.nodeKey]), G[e.childrenKey].forEach(ee));
    };
    e.nodes.forEach(ee), e.expanded !== void 0 ? n("update:expanded", T) : u.value = T;
  }
  function D(T, ee, G = p(T), fe = k.value[T]) {
    if (fe.lazy && fe.lazy !== "loaded") {
      if (fe.lazy === "loading") return;
      o.value[T] = "loading", Array.isArray(G[e.childrenKey]) !== true && (G[e.childrenKey] = []), n("lazyLoad", { node: G, key: T, done: (R) => {
        o.value[T] = "loaded", G[e.childrenKey] = Array.isArray(R) === true ? R : [], We(() => {
          var _a2;
          ((_a2 = k.value[T]) == null ? void 0 : _a2.isParent) === true && B(T, true);
        });
      }, fail: () => {
        delete o.value[T], G[e.childrenKey].length === 0 && delete G[e.childrenKey];
      } });
    } else fe.isParent === true && fe.expandable === true && B(T, ee);
  }
  function B(T, ee) {
    let G = u.value;
    const fe = e.expanded !== void 0;
    if (fe === true && (G = G.slice()), ee) {
      if (e.accordion && k.value[T]) {
        const R = [];
        k.value[T].parent ? k.value[T].parent.children.forEach((A) => {
          A.key !== T && A.expandable === true && R.push(A.key);
        }) : e.nodes.forEach((A) => {
          const te = A[e.nodeKey];
          te !== T && R.push(te);
        }), R.length !== 0 && (G = G.filter((A) => R.includes(A) === false));
      }
      G = G.concat([T]).filter((R, A, te) => te.indexOf(R) === A);
    } else G = G.filter((R) => R !== T);
    fe === true ? n("update:expanded", G) : u.value = G;
  }
  function P(T) {
    return T && k.value[T] ? k.value[T].ticked : false;
  }
  function I(T, ee) {
    let G = i.value;
    const fe = e.ticked !== void 0;
    fe === true && (G = G.slice()), ee ? G = G.concat(T).filter((R, A, te) => te.indexOf(R) === A) : G = G.filter((R) => T.includes(R) === false), fe === true && n("update:ticked", G);
  }
  function q(T, ee, G) {
    const fe = { tree: l, node: T, key: G, color: e.color, dark: r.value };
    return Ot(fe, "expanded", () => ee.expanded, (R) => {
      R !== ee.expanded && D(G, R);
    }), Ot(fe, "ticked", () => ee.ticked, (R) => {
      R !== ee.ticked && I([G], R);
    }), fe;
  }
  function M(T) {
    return (e.filter ? T.filter((ee) => k.value[ee[e.nodeKey]].matchesFilter) : T).map((ee) => L(ee));
  }
  function C(T) {
    if (T.icon !== void 0) return d(et, { class: "q-tree__icon q-mr-sm", name: T.icon, color: T.iconColor });
    const ee = T.img || T.avatar;
    if (ee) return d("img", { class: `q-tree__${T.img ? "img" : "avatar"} q-mr-sm`, src: ee });
  }
  function H() {
    n("afterShow");
  }
  function Y() {
    n("afterHide");
  }
  function L(T) {
    const ee = T[e.nodeKey], G = k.value[ee], fe = T.header && t[`header-${T.header}`] || t["default-header"], R = G.isParent === true ? M(T[e.childrenKey]) : [], A = R.length !== 0 || G.lazy && G.lazy !== "loaded";
    let te = T.body && t[`body-${T.body}`] || t["default-body"];
    const V = fe !== void 0 || te !== void 0 ? q(T, G, ee) : null;
    return te !== void 0 && (te = d("div", { class: "q-tree__node-body relative-position" }, [d("div", { class: g.value }, [te(V)])])), d("div", { key: ee, class: `q-tree__node relative-position q-tree__node--${A === true ? "parent" : "child"}` }, [d("div", { class: "q-tree__node-header relative-position row no-wrap items-center" + (G.link === true ? " q-tree__node--link q-hoverable q-focusable" : "") + (G.selected === true ? " q-tree__node--selected" : "") + (G.disabled === true ? " q-tree__node--disabled" : ""), tabindex: G.link === true ? 0 : -1, ariaExpanded: R.length > 0 ? G.expanded : null, role: "treeitem", onClick: (j) => {
      U(T, G, j);
    }, onKeypress(j) {
      Yl(j) !== true && (j.keyCode === 13 ? U(T, G, j, true) : j.keyCode === 32 && ye(T, G, j, true));
    } }, [d("div", { class: "q-focus-helper", tabindex: -1, ref: (j) => {
      c[G.key] = j;
    } }), G.lazy === "loading" ? d(_n, { class: "q-tree__spinner", color: h.value }) : A === true ? d(et, { class: "q-tree__arrow" + (G.expanded === true ? " q-tree__arrow--rotate" : ""), name: m.value, onClick(j) {
      ye(T, G, j);
    } }) : null, G.hasTicking === true && G.noTick !== true ? d(ir, { class: "q-tree__tickbox", modelValue: G.indeterminate === true ? null : G.ticked, color: h.value, dark: r.value, dense: true, keepColor: true, disable: G.tickable !== true, onKeydown: je, "onUpdate:modelValue": (j) => {
      W(G, j);
    } }) : null, d("div", { class: "q-tree__node-header-content col row no-wrap items-center" + (G.selected === true ? _.value : g.value) }, [fe ? fe(V) : [C(T), d("div", T[e.labelKey])]])]), A === true ? e.noTransition === true ? G.expanded === true ? d("div", { class: "q-tree__node-collapsible" + g.value, key: `${ee}__q` }, [te, d("div", { class: "q-tree__children" + (G.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, R)]) : null : d(Ds, { duration: e.duration, onShow: H, onHide: Y }, () => sn(d("div", { class: "q-tree__node-collapsible" + g.value, key: `${ee}__q` }, [te, d("div", { class: "q-tree__children" + (G.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, R)]), [[Uv, G.expanded]])) : te]);
  }
  function O(T) {
    var _a2;
    (_a2 = c[T]) == null ? void 0 : _a2.focus();
  }
  function U(T, ee, G, fe) {
    fe !== true && ee.selectable !== false && O(ee.key), f.value && ee.selectable ? e.noSelectionUnset === false ? n("update:selected", ee.key !== e.selected ? ee.key : null) : ee.key !== e.selected && n("update:selected", ee.key === void 0 ? null : ee.key) : ye(T, ee, G, fe), typeof T.handler == "function" && T.handler(T);
  }
  function ye(T, ee, G, fe) {
    G !== void 0 && je(G), fe !== true && ee.selectable !== false && O(ee.key), D(ee.key, !ee.expanded, T, ee);
  }
  function W(T, ee) {
    if (T.indeterminate === true && (ee = T.indeterminateNextState), T.strictTicking) I([T.key], ee);
    else if (T.leafTicking) {
      const G = [], fe = (R) => {
        R.isParent ? (ee !== true && R.noTick !== true && R.tickable === true && G.push(R.key), R.leafTicking === true && R.children.forEach(fe)) : R.noTick !== true && R.tickable === true && (R.leafFilteredTicking !== true || R.matchesFilter === true) && G.push(R.key);
      };
      fe(T), I(G, ee);
    }
  }
  return e.defaultExpandAll === true && F(), Object.assign(l, { getNodeByKey: p, getTickedNodes: y, getExpandedNodes: b, isExpanded: x, collapseAll: $, expandAll: F, setExpanded: D, isTicked: P, setTicked: I }), () => {
    const T = M(e.nodes);
    return d("div", { class: s.value, role: "tree" }, T.length === 0 ? e.filter ? e.noResultsLabel || a.lang.tree.noResults : e.noNodesLabel || a.lang.tree.noNodes : T);
  };
} });
function Ud(e) {
  return (e * 100).toFixed(2) + "%";
}
var D_ = { ...nt, ...xh, label: String, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, noThumbnails: Boolean, thumbnailFit: { type: String, default: "cover" }, autoUpload: Boolean, hideUploadBtn: Boolean, disable: Boolean, readonly: Boolean }, Hh = [...Ch, "start", "finish", "added", "removed"];
function N_(e, t) {
  const n = Se(), { props: l, slots: a, emit: r, proxy: o } = n, { $q: i } = o, u = lt(l, i);
  function c(V, j, ue) {
    if (V.__status = j, j === "idle") {
      V.__uploaded = 0, V.__progress = 0, V.__sizeLabel = Au(V.size), V.__progressLabel = "0.00%";
      return;
    }
    if (j === "failed") {
      o.$forceUpdate();
      return;
    }
    V.__uploaded = j === "uploaded" ? V.size : ue, V.__progress = j === "uploaded" ? 1 : Math.min(0.9999, V.__uploaded / V.size), V.__progressLabel = Ud(V.__progress), o.$forceUpdate();
  }
  const s = v(() => l.disable !== true && l.readonly !== true), f = K(false), m = K(null), h = K(null), g = { files: K([]), queuedFiles: K([]), uploadedFiles: K([]), uploadedSize: K(0), updateFileStatus: c, isAlive: () => gl(n) === false }, { pickFiles: _, addFiles: w, onDragover: k, onDragleave: p, processFiles: y, getDndNode: b, maxFilesNumber: x, maxTotalSizeNumber: $ } = kh({ editable: s, dnd: f, getFileInput: W, addFilesToQueue: T });
  Object.assign(g, e({ props: l, slots: a, emit: r, helpers: g, exposeApi: (V) => {
    Object.assign(g, V);
  } })), g.isBusy === void 0 && (g.isBusy = K(false));
  const F = K(0), D = v(() => F.value === 0 ? 0 : g.uploadedSize.value / F.value), B = v(() => Ud(D.value)), P = v(() => Au(F.value)), I = v(() => s.value === true && g.isUploading.value !== true && (l.multiple === true || g.queuedFiles.value.length === 0) && (l.maxFiles === void 0 || g.files.value.length < x.value) && (l.maxTotalSize === void 0 || F.value < $.value)), q = v(() => s.value === true && g.isBusy.value !== true && g.isUploading.value !== true && g.queuedFiles.value.length !== 0);
  hn(cm, fe);
  const M = v(() => "q-uploader column no-wrap" + (u.value === true ? " q-uploader--dark q-dark" : "") + (l.bordered === true ? " q-uploader--bordered" : "") + (l.square === true ? " q-uploader--square no-border-radius" : "") + (l.flat === true ? " q-uploader--flat no-shadow" : "") + (l.disable === true ? " disabled q-uploader--disable" : "") + (f.value === true ? " q-uploader--dnd" : "")), C = v(() => "q-uploader__header" + (l.color !== void 0 ? ` bg-${l.color}` : "") + (l.textColor !== void 0 ? ` text-${l.textColor}` : ""));
  be(g.isUploading, (V, j) => {
    j === false && V === true ? r("start") : j === true && V === false && r("finish");
  });
  function H() {
    l.disable === false && (g.abort(), g.uploadedSize.value = 0, F.value = 0, ye(), g.files.value = [], g.queuedFiles.value = [], g.uploadedFiles.value = []);
  }
  function Y() {
    l.disable === false && O(["uploaded"], () => {
      g.uploadedFiles.value = [];
    });
  }
  function L() {
    O(["idle", "failed"], ({ size: V }) => {
      F.value -= V, g.queuedFiles.value = [];
    });
  }
  function O(V, j) {
    if (l.disable === true) return;
    const ue = { files: [], size: 0 }, S = g.files.value.filter((E) => V.indexOf(E.__status) === -1 ? true : (ue.size += E.size, ue.files.push(E), E.__img !== void 0 && window.URL.revokeObjectURL(E.__img.src), false));
    ue.files.length !== 0 && (g.files.value = S, j(ue), r("removed", ue.files));
  }
  function U(V) {
    l.disable || (V.__status === "uploaded" ? g.uploadedFiles.value = g.uploadedFiles.value.filter((j) => j.__key !== V.__key) : V.__status === "uploading" ? V.__abort() : F.value -= V.size, g.files.value = g.files.value.filter((j) => j.__key !== V.__key ? true : (j.__img !== void 0 && window.URL.revokeObjectURL(j.__img.src), false)), g.queuedFiles.value = g.queuedFiles.value.filter((j) => j.__key !== V.__key), r("removed", [V]));
  }
  function ye() {
    g.files.value.forEach((V) => {
      V.__img !== void 0 && window.URL.revokeObjectURL(V.__img.src);
    });
  }
  function W() {
    return h.value || m.value.getElementsByClassName("q-uploader__input")[0];
  }
  function T(V, j) {
    const ue = y(V, j, g.files.value, true), S = W();
    S != null && (S.value = ""), ue !== void 0 && (ue.forEach((E) => {
      if (g.updateFileStatus(E, "idle"), F.value += E.size, l.noThumbnails !== true && E.type.toUpperCase().startsWith("IMAGE")) {
        const N = new Image();
        N.src = window.URL.createObjectURL(E), E.__img = N;
      }
    }), g.files.value = g.files.value.concat(ue), g.queuedFiles.value = g.queuedFiles.value.concat(ue), r("added", ue), l.autoUpload === true && g.upload());
  }
  function ee() {
    q.value === true && g.upload();
  }
  function G(V, j, ue) {
    if (V === true) {
      const S = { type: "a", key: j, icon: i.iconSet.uploader[j], flat: true, dense: true };
      let E;
      return j === "add" ? (S.onClick = _, E = fe) : S.onClick = ue, d(Ze, S, E);
    }
  }
  function fe() {
    return d("input", { ref: h, class: "q-uploader__input overflow-hidden absolute-full", tabindex: -1, type: "file", title: "", accept: l.accept, multiple: l.multiple === true ? "multiple" : void 0, capture: l.capture, onMousedown: wt, onClick: _, onChange: T });
  }
  function R() {
    return a.header !== void 0 ? a.header(te) : [d("div", { class: "q-uploader__header-content column" }, [d("div", { class: "flex flex-center no-wrap q-gutter-xs" }, [G(g.queuedFiles.value.length !== 0, "removeQueue", L), G(g.uploadedFiles.value.length !== 0, "removeUploaded", Y), g.isUploading.value === true ? d(_n, { class: "q-uploader__spinner" }) : null, d("div", { class: "col column justify-center" }, [l.label !== void 0 ? d("div", { class: "q-uploader__title" }, [l.label]) : null, d("div", { class: "q-uploader__subtitle" }, [P.value + " / " + B.value])]), G(I.value, "add"), G(l.hideUploadBtn === false && q.value === true, "upload", g.upload), G(g.isUploading.value, "clear", g.abort)])])];
  }
  function A() {
    return a.list !== void 0 ? a.list(te) : g.files.value.map((V) => d("div", { key: V.__key, class: "q-uploader__file relative-position" + (l.noThumbnails !== true && V.__img !== void 0 ? " q-uploader__file--img" : "") + (V.__status === "failed" ? " q-uploader__file--failed" : V.__status === "uploaded" ? " q-uploader__file--uploaded" : ""), style: l.noThumbnails !== true && V.__img !== void 0 ? { backgroundImage: 'url("' + V.__img.src + '")', backgroundSize: l.thumbnailFit } : null }, [d("div", { class: "q-uploader__file-header row flex-center no-wrap" }, [V.__status === "failed" ? d(et, { class: "q-uploader__file-status", name: i.iconSet.type.negative, color: "negative" }) : null, d("div", { class: "q-uploader__file-header-content col" }, [d("div", { class: "q-uploader__title" }, [V.name]), d("div", { class: "q-uploader__subtitle row items-center no-wrap" }, [V.__sizeLabel + " / " + V.__progressLabel])]), V.__status === "uploading" ? d(Qm, { value: V.__progress, min: 0, max: 1, indeterminate: V.__progress === 0 }) : d(Ze, { round: true, dense: true, flat: true, icon: i.iconSet.uploader[V.__status === "uploaded" ? "done" : "clear"], onClick: () => {
      U(V);
    } })])]));
  }
  Ke(() => {
    g.isUploading.value === true && g.abort(), g.files.value.length !== 0 && ye();
  });
  const te = {};
  for (const V in g) pt(g[V]) === true ? Ot(te, V, () => g[V].value) : te[V] = g[V];
  return Object.assign(te, { upload: ee, reset: H, removeUploadedFiles: Y, removeQueuedFiles: L, removeFile: U, pickFiles: _, addFiles: w }), Yv(te, { canAddFiles: () => I.value, canUpload: () => q.value, uploadSizeLabel: () => P.value, uploadProgressLabel: () => B.value }), t({ ...g, upload: ee, reset: H, removeUploadedFiles: Y, removeQueuedFiles: L, removeFile: U, pickFiles: _, addFiles: w, canAddFiles: I, canUpload: q, uploadSizeLabel: P, uploadProgressLabel: B }), () => {
    const V = [d("div", { class: C.value }, R()), d("div", { class: "q-uploader__list scroll" }, A()), b("uploader")];
    g.isBusy.value === true && V.push(d("div", { class: "q-uploader__overlay absolute-full flex flex-center" }, [d(_n)]));
    const j = { ref: m, class: M.value };
    return I.value === true && Object.assign(j, { onDragover: k, onDragleave: p }), d("div", j, V);
  };
}
var H_ = () => true;
function jh(e) {
  const t = {};
  return e.forEach((n) => {
    t[n] = H_;
  }), t;
}
var j_ = jh(Hh), U_ = ({ name: e, props: t, emits: n, injectPlugin: l }) => he({ name: e, props: { ...D_, ...t }, emits: Pt(n) === true ? { ...j_, ...n } : [...Hh, ...n], setup(a, { expose: r }) {
  return N_(l, r);
} });
function Hn(e) {
  return typeof e == "function" ? e : () => e;
}
var Q_ = "QUploader", K_ = { url: [Function, String], method: { type: [Function, String], default: "POST" }, fieldName: { type: [Function, String], default: () => (e) => e.name }, headers: [Function, Array], formFields: [Function, Array], withCredentials: [Function, Boolean], sendRaw: [Function, Boolean], batch: [Function, Boolean], factory: Function }, W_ = ["factoryFailed", "uploaded", "failed", "uploading"];
function Y_({ props: e, emit: t, helpers: n }) {
  const l = K([]), a = K([]), r = K(0), o = v(() => ({ url: Hn(e.url), method: Hn(e.method), headers: Hn(e.headers), formFields: Hn(e.formFields), fieldName: Hn(e.fieldName), withCredentials: Hn(e.withCredentials), sendRaw: Hn(e.sendRaw), batch: Hn(e.batch) })), i = v(() => r.value > 0), u = v(() => a.value.length !== 0);
  let c;
  function s() {
    l.value.forEach((g) => {
      g.abort();
    }), a.value.length !== 0 && (c = true);
  }
  function f() {
    const g = n.queuedFiles.value.slice(0);
    n.queuedFiles.value = [], o.value.batch(g) ? m(g) : g.forEach((_) => {
      m([_]);
    });
  }
  function m(g) {
    if (r.value++, typeof e.factory != "function") {
      h(g, {});
      return;
    }
    const _ = e.factory(g);
    if (!_) t("factoryFailed", new Error("QUploader: factory() does not return properly"), g), r.value--;
    else if (typeof _.catch == "function" && typeof _.then == "function") {
      a.value.push(_);
      const w = (k) => {
        n.isAlive() === true && (a.value = a.value.filter((p) => p !== _), a.value.length === 0 && (c = false), n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach((p) => {
          n.updateFileStatus(p, "failed");
        }), t("factoryFailed", k, g), r.value--);
      };
      _.then((k) => {
        c === true ? w(new Error("Aborted")) : n.isAlive() === true && (a.value = a.value.filter((p) => p !== _), h(g, k));
      }).catch(w);
    } else h(g, _ || {});
  }
  function h(g, _) {
    const w = new FormData(), k = new XMLHttpRequest(), p = (q, M) => _[q] !== void 0 ? Hn(_[q])(M) : o.value[q](M), y = p("url", g);
    if (!y) {
      console.error("q-uploader: invalid or no URL specified"), r.value--;
      return;
    }
    const b = p("formFields", g);
    b !== void 0 && b.forEach((q) => {
      w.append(q.name, q.value);
    });
    let x = 0, $ = 0, F = 0, D = 0, B;
    k.upload.addEventListener("progress", (q) => {
      if (B === true) return;
      const M = Math.min(D, q.loaded);
      n.uploadedSize.value += M - F, F = M;
      let C = F - $;
      for (let H = x; C > 0 && H < g.length; H++) {
        const Y = g[H];
        if (C > Y.size) C -= Y.size, x++, $ += Y.size, n.updateFileStatus(Y, "uploading", Y.size);
        else {
          n.updateFileStatus(Y, "uploading", C);
          return;
        }
      }
    }, false), k.onreadystatechange = () => {
      k.readyState < 4 || (k.status && k.status < 400 ? (n.uploadedFiles.value = n.uploadedFiles.value.concat(g), g.forEach((q) => {
        n.updateFileStatus(q, "uploaded");
      }), t("uploaded", { files: g, xhr: k })) : (B = true, n.uploadedSize.value -= F, n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach((q) => {
        n.updateFileStatus(q, "failed");
      }), t("failed", { files: g, xhr: k })), r.value--, l.value = l.value.filter((q) => q !== k));
    }, k.open(p("method", g), y), p("withCredentials", g) === true && (k.withCredentials = true);
    const P = p("headers", g);
    P !== void 0 && P.forEach((q) => {
      k.setRequestHeader(q.name, q.value);
    });
    const I = p("sendRaw", g);
    g.forEach((q) => {
      n.updateFileStatus(q, "uploading", 0), I !== true && w.append(p("fieldName", q), q, q.name), q.xhr = k, q.__abort = () => {
        k.abort();
      }, D += q.size;
    }), t("uploading", { files: g, xhr: k }), l.value.push(k), I === true ? k.send(new Blob(g)) : k.send(w);
  }
  return { isUploading: i, isBusy: u, abort: s, upload: f };
}
var G_ = { name: Q_, props: K_, emits: W_, injectPlugin: Y_ };
U_(G_);
he({ name: "QUploaderAddTrigger", setup() {
  const e = Tt(cm, ot);
  return e === ot && console.error("QUploaderAddTrigger needs to be child of QUploader"), e;
} });
he({ name: "QVideo", props: { ...Ns, src: { type: String, required: true }, title: String, fetchpriority: { type: String, default: "auto" }, loading: { type: String, default: "eager" }, referrerpolicy: { type: String, default: "strict-origin-when-cross-origin" } }, setup(e) {
  const t = Hs(e), n = v(() => "q-video" + (e.ratio !== void 0 ? " q-video--responsive" : ""));
  return () => d("div", { class: n.value, style: t.value }, [d("iframe", { src: e.src, title: e.title, fetchpriority: e.fetchpriority, loading: e.loading, referrerpolicy: e.referrerpolicy, frameborder: "0", allowfullscreen: true })]);
} });
function Qd(e) {
  if (e === false) return 0;
  if (e === true || e === void 0) return 1;
  const t = parseInt(e, 10);
  return isNaN(t) ? 0 : t;
}
Rn({ name: "close-popup", beforeMount(e, { value: t }) {
  const n = { depth: Qd(t), handler(l) {
    n.depth !== 0 && setTimeout(() => {
      const a = Wy(e);
      a !== void 0 && Yy(a, l, n.depth);
    });
  }, handlerKey(l) {
    yn(l, 13) === true && n.handler(l);
  } };
  e.__qclosepopup = n, e.addEventListener("click", n.handler), e.addEventListener("keyup", n.handlerKey);
}, updated(e, { value: t, oldValue: n }) {
  t !== n && (e.__qclosepopup.depth = Qd(t));
}, beforeUnmount(e) {
  const t = e.__qclosepopup;
  e.removeEventListener("click", t.handler), e.removeEventListener("keyup", t.handlerKey), delete e.__qclosepopup;
} });
var X_ = 0, Da = void 0;
function Kd(e, t) {
  Da === void 0 && (Da = document.createElement("div"), Da.style.cssText = "position: absolute; left: 0; top: 0", document.body.appendChild(Da));
  const n = e.getBoundingClientRect(), l = Da.getBoundingClientRect(), { marginLeft: a, marginRight: r, marginTop: o, marginBottom: i } = window.getComputedStyle(e), u = parseInt(a, 10) + parseInt(r, 10), c = parseInt(o, 10) + parseInt(i, 10);
  return { left: n.left - l.left, top: n.top - l.top, width: n.right - n.left, height: n.bottom - n.top, widthM: n.right - n.left + (t === true ? 0 : u), heightM: n.bottom - n.top + (t === true ? 0 : c), marginH: t === true ? u : 0, marginV: t === true ? c : 0 };
}
function Zr(e) {
  return { width: e.scrollWidth, height: e.scrollHeight };
}
var Wd = ["Top", "Right", "Bottom", "Left"], Yd = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], Z_ = /-block|-inline|block-|inline-/, J_ = /(-block|-inline|block-|inline-).*:/;
function Gd(e, t) {
  const n = window.getComputedStyle(e), l = {};
  for (let a = 0; a < t.length; a++) {
    const r = t[a];
    if (n[r] === "") if (r === "cssText") {
      const o = n.length;
      let i = "";
      for (let u = 0; u < o; u++) Z_.test(n[u]) !== true && (i += n[u] + ": " + n[n[u]] + "; ");
      l[r] = i;
    } else if (["borderWidth", "borderStyle", "borderColor"].indexOf(r) !== -1) {
      const o = r.replace("border", "");
      let i = "";
      for (let u = 0; u < Wd.length; u++) {
        const c = "border" + Wd[u] + o;
        i += n[c] + " ";
      }
      l[r] = i;
    } else if (r === "borderRadius") {
      let o = "", i = "";
      for (let u = 0; u < Yd.length; u++) {
        const c = n[Yd[u]].split(" ");
        o += c[0] + " ", i += (c[1] === void 0 ? c[0] : c[1]) + " ";
      }
      l[r] = o + "/ " + i;
    } else l[r] = n[r];
    else r === "cssText" ? l[r] = n[r].split(";").filter((o) => J_.test(o) !== true).join(";") : l[r] = n[r];
  }
  return l;
}
var ew = ["absolute", "fixed", "relative", "sticky"];
function Xd(e) {
  let t = e, n = 0;
  for (; t !== null && t !== document; ) {
    const { position: l, zIndex: a } = window.getComputedStyle(t), r = Number(a);
    r > n && (t === e || ew.includes(l) === true) && (n = r), t = t.parentNode;
  }
  return n;
}
function tw(e) {
  return { from: e.from, to: e.to !== void 0 ? e.to : e.from };
}
function nw(e) {
  return typeof e == "number" ? e = { duration: e } : typeof e == "function" && (e = { onEnd: e }), { ...e, waitFor: e.waitFor === void 0 ? 0 : e.waitFor, duration: isNaN(e.duration) === true ? 300 : parseInt(e.duration, 10), easing: typeof e.easing == "string" && e.easing.length !== 0 ? e.easing : "ease-in-out", delay: isNaN(e.delay) === true ? 0 : parseInt(e.delay, 10), fill: typeof e.fill == "string" && e.fill.length !== 0 ? e.fill : "none", resize: e.resize === true, useCSS: e.useCSS === true || e.usecss === true, hideFromClone: e.hideFromClone === true || e.hidefromclone === true, keepToClone: e.keepToClone === true || e.keeptoclone === true, tween: e.tween === true, tweenFromOpacity: isNaN(e.tweenFromOpacity) === true ? 0.6 : parseFloat(e.tweenFromOpacity), tweenToOpacity: isNaN(e.tweenToOpacity) === true ? 0.5 : parseFloat(e.tweenToOpacity) };
}
function Zd(e) {
  const t = typeof e;
  return t === "function" ? e() : t === "string" ? document.querySelector(e) : e;
}
function Jd(e) {
  return e && e.ownerDocument === document && e.parentNode !== null;
}
function lw(e) {
  let t = () => false, n = false, l = true;
  const a = tw(e), r = nw(e), o = Zd(a.from);
  if (Jd(o) !== true) return t;
  typeof o.qMorphCancel == "function" && o.qMorphCancel();
  let i, u, c, s;
  const f = o.parentNode, m = o.nextElementSibling, h = Kd(o, r.resize), { width: g, height: _ } = Zr(f), { borderWidth: w, borderStyle: k, borderColor: p, borderRadius: y, backgroundColor: b, transform: x, position: $, cssText: F } = Gd(o, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), D = o.classList.toString(), B = o.style.cssText, P = o.cloneNode(true), I = r.tween === true ? o.cloneNode(true) : void 0;
  I !== void 0 && (I.className = I.classList.toString().split(" ").filter((M) => /^bg-/.test(M) === false).join(" ")), r.hideFromClone === true && P.classList.add("q-morph--internal"), P.setAttribute("aria-hidden", "true"), P.style.transition = "none", P.style.animation = "none", P.style.pointerEvents = "none", f.insertBefore(P, m), o.qMorphCancel = () => {
    n = true, P.remove(), I == null ? void 0 : I.remove(), r.hideFromClone === true && P.classList.remove("q-morph--internal"), o.qMorphCancel = void 0;
  };
  const q = () => {
    const M = Zd(a.to);
    if (n === true || Jd(M) !== true) {
      typeof o.qMorphCancel == "function" && o.qMorphCancel();
      return;
    }
    o !== M && typeof M.qMorphCancel == "function" && M.qMorphCancel(), r.keepToClone !== true && M.classList.add("q-morph--internal"), P.classList.add("q-morph--internal");
    const { width: C, height: H } = Zr(f), { width: Y, height: L } = Zr(M.parentNode);
    r.hideFromClone !== true && P.classList.remove("q-morph--internal"), M.qMorphCancel = () => {
      n = true, P.remove(), I == null ? void 0 : I.remove(), r.hideFromClone === true && P.classList.remove("q-morph--internal"), r.keepToClone !== true && M.classList.remove("q-morph--internal"), o.qMorphCancel = void 0, M.qMorphCancel = void 0;
    };
    const O = () => {
      if (n === true) {
        typeof M.qMorphCancel == "function" && M.qMorphCancel();
        return;
      }
      r.hideFromClone !== true && (P.classList.add("q-morph--internal"), P.innerHTML = "", P.style.left = 0, P.style.right = "unset", P.style.top = 0, P.style.bottom = "unset", P.style.transform = "none"), r.keepToClone !== true && M.classList.remove("q-morph--internal");
      const U = M.parentNode, { width: ye, height: W } = Zr(U), T = M.cloneNode(r.keepToClone);
      T.setAttribute("aria-hidden", "true"), r.keepToClone !== true && (T.style.left = 0, T.style.right = "unset", T.style.top = 0, T.style.bottom = "unset", T.style.transform = "none", T.style.pointerEvents = "none"), T.classList.add("q-morph--internal");
      const ee = M === o && f === U ? P : M.nextElementSibling;
      U.insertBefore(T, ee);
      const { borderWidth: G, borderStyle: fe, borderColor: R, borderRadius: A, backgroundColor: te, transform: V, position: j, cssText: ue } = Gd(M, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), S = M.classList.toString(), E = M.style.cssText;
      M.style.cssText = ue, M.style.transform = "none", M.style.animation = "none", M.style.transition = "none", M.className = S.split(" ").filter((_e) => /^bg-/.test(_e) === false).join(" ");
      const N = Kd(M, r.resize), ne = h.left - N.left, le = h.top - N.top, X = h.width / (N.width > 0 ? N.width : 10), ve = h.height / (N.height > 0 ? N.height : 100), ge = g - C, me = _ - H, de = ye - Y, ae = W - L, Q = Math.max(h.widthM, ge), oe = Math.max(h.heightM, me), we = Math.max(N.widthM, de), ke = Math.max(N.heightM, ae), qe = o === M && ["absolute", "fixed"].includes(j) === false && ["absolute", "fixed"].includes($) === false;
      let Me = j === "fixed", He = U;
      for (; Me !== true && He !== document; ) Me = window.getComputedStyle(He).position === "fixed", He = He.parentNode;
      if (r.hideFromClone !== true && (P.style.display = "block", P.style.flex = "0 0 auto", P.style.opacity = 0, P.style.minWidth = "unset", P.style.maxWidth = "unset", P.style.minHeight = "unset", P.style.maxHeight = "unset", P.classList.remove("q-morph--internal")), r.keepToClone !== true && (T.style.display = "block", T.style.flex = "0 0 auto", T.style.opacity = 0, T.style.minWidth = "unset", T.style.maxWidth = "unset", T.style.minHeight = "unset", T.style.maxHeight = "unset"), T.classList.remove("q-morph--internal"), typeof r.classes == "string" && (M.className += " " + r.classes), typeof r.style == "string") M.style.cssText += " " + r.style;
      else if (Pt(r.style) === true) for (const _e in r.style) M.style[_e] = r.style[_e];
      const Ve = Xd(P), ie = Xd(M), pe = Me === true ? document.documentElement : { scrollLeft: 0, scrollTop: 0 };
      M.style.position = Me === true ? "fixed" : "absolute", M.style.left = `${N.left - pe.scrollLeft}px`, M.style.right = "unset", M.style.top = `${N.top - pe.scrollTop}px`, M.style.margin = 0, r.resize === true && (M.style.minWidth = "unset", M.style.maxWidth = "unset", M.style.minHeight = "unset", M.style.maxHeight = "unset", M.style.overflow = "hidden", M.style.overflowX = "hidden", M.style.overflowY = "hidden"), document.body.appendChild(M), I !== void 0 && (I.style.cssText = F, I.style.transform = "none", I.style.animation = "none", I.style.transition = "none", I.style.position = M.style.position, I.style.left = `${h.left - pe.scrollLeft}px`, I.style.right = "unset", I.style.top = `${h.top - pe.scrollTop}px`, I.style.margin = 0, I.style.pointerEvents = "none", r.resize === true && (I.style.minWidth = "unset", I.style.maxWidth = "unset", I.style.minHeight = "unset", I.style.maxHeight = "unset", I.style.overflow = "hidden", I.style.overflowX = "hidden", I.style.overflowY = "hidden"), document.body.appendChild(I));
      const re = (_e) => {
        o === M && l !== true ? (M.style.cssText = B, M.className = D) : (M.style.cssText = E, M.className = S), T.parentNode === U && U.insertBefore(M, T), P.remove(), T.remove(), I == null ? void 0 : I.remove(), t = () => false, o.qMorphCancel = void 0, M.qMorphCancel = void 0, typeof r.onEnd == "function" && r.onEnd(l === true ? "to" : "from", _e === true);
      };
      if (r.useCSS !== true && typeof M.animate == "function") {
        const _e = r.resize === true ? { transform: `translate(${ne}px, ${le}px)`, width: `${Q}px`, height: `${oe}px` } : { transform: `translate(${ne}px, ${le}px) scale(${X}, ${ve})` }, Ce = r.resize === true ? { width: `${we}px`, height: `${ke}px` } : {}, Oe = r.resize === true ? { width: `${Q}px`, height: `${oe}px` } : {}, Ae = r.resize === true ? { transform: `translate(${-1 * ne}px, ${-1 * le}px)`, width: `${we}px`, height: `${ke}px` } : { transform: `translate(${-1 * ne}px, ${-1 * le}px) scale(${1 / X}, ${1 / ve})` }, Ye = I !== void 0 ? { opacity: r.tweenToOpacity } : { backgroundColor: b }, it = I !== void 0 ? { opacity: 1 } : { backgroundColor: te };
        s = M.animate([{ margin: 0, borderWidth: w, borderStyle: k, borderColor: p, borderRadius: y, zIndex: Ve, transformOrigin: "0 0", ..._e, ...Ye }, { margin: 0, borderWidth: G, borderStyle: fe, borderColor: R, borderRadius: A, zIndex: ie, transformOrigin: "0 0", transform: V, ...Ce, ...it }], { duration: r.duration, easing: r.easing, fill: r.fill, delay: r.delay }), u = I === void 0 ? void 0 : I.animate([{ opacity: r.tweenFromOpacity, margin: 0, borderWidth: w, borderStyle: k, borderColor: p, borderRadius: y, zIndex: Ve, transformOrigin: "0 0", transform: x, ...Oe }, { opacity: 0, margin: 0, borderWidth: G, borderStyle: fe, borderColor: R, borderRadius: A, zIndex: ie, transformOrigin: "0 0", ...Ae }], { duration: r.duration, easing: r.easing, fill: r.fill, delay: r.delay }), i = r.hideFromClone === true || qe === true ? void 0 : P.animate([{ margin: `${me < 0 ? me / 2 : 0}px ${ge < 0 ? ge / 2 : 0}px`, width: `${Q + h.marginH}px`, height: `${oe + h.marginV}px` }, { margin: 0, width: 0, height: 0 }], { duration: r.duration, easing: r.easing, fill: r.fill, delay: r.delay }), c = r.keepToClone === true ? void 0 : T.animate([qe === true ? { margin: `${me < 0 ? me / 2 : 0}px ${ge < 0 ? ge / 2 : 0}px`, width: `${Q + h.marginH}px`, height: `${oe + h.marginV}px` } : { margin: 0, width: 0, height: 0 }, { margin: `${ae < 0 ? ae / 2 : 0}px ${de < 0 ? de / 2 : 0}px`, width: `${we + N.marginH}px`, height: `${ke + N.marginV}px` }], { duration: r.duration, easing: r.easing, fill: r.fill, delay: r.delay });
        const Ct = (jt) => {
          i == null ? void 0 : i.cancel(), u == null ? void 0 : u.cancel(), c == null ? void 0 : c.cancel(), s.cancel(), s.removeEventListener("finish", Ct), s.removeEventListener("cancel", Ct), re(jt), i = void 0, u = void 0, c = void 0, s = void 0;
        };
        o.qMorphCancel = () => {
          o.qMorphCancel = void 0, n = true, Ct();
        }, M.qMorphCancel = () => {
          M.qMorphCancel = void 0, n = true, Ct();
        }, s.addEventListener("finish", Ct), s.addEventListener("cancel", Ct), t = (jt) => n === true || s === void 0 ? false : jt === true ? (Ct(true), true) : (l = l !== true, i == null ? void 0 : i.reverse(), u == null ? void 0 : u.reverse(), c == null ? void 0 : c.reverse(), s.reverse(), true);
      } else {
        const _e = `q-morph-anim-${++X_}`, Ce = document.createElement("style"), Oe = r.resize === true ? `
            transform: translate(${ne}px, ${le}px);
            width: ${Q}px;
            height: ${oe}px;
          ` : `transform: translate(${ne}px, ${le}px) scale(${X}, ${ve});`, Ae = r.resize === true ? `
            width: ${we}px;
            height: ${ke}px;
          ` : "", Ye = r.resize === true ? `
            width: ${Q}px;
            height: ${oe}px;
          ` : "", it = r.resize === true ? `
            transform: translate(${-1 * ne}px, ${-1 * le}px);
            width: ${we}px;
            height: ${ke}px;
          ` : `transform: translate(${-1 * ne}px, ${-1 * le}px) scale(${1 / X}, ${1 / ve});`, Ct = I !== void 0 ? `opacity: ${r.tweenToOpacity};` : `background-color: ${b};`, jt = I !== void 0 ? "opacity: 1;" : `background-color: ${te};`, nl = I === void 0 ? "" : `
            @keyframes ${_e}-from-tween {
              0% {
                opacity: ${r.tweenFromOpacity};
                margin: 0;
                border-width: ${w};
                border-style: ${k};
                border-color: ${p};
                border-radius: ${y};
                z-index: ${Ve};
                transform-origin: 0 0;
                transform: ${x};
                ${Ye}
              }

              100% {
                opacity: 0;
                margin: 0;
                border-width: ${G};
                border-style: ${fe};
                border-color: ${R};
                border-radius: ${A};
                z-index: ${ie};
                transform-origin: 0 0;
                ${it}
              }
            }
          `, ln = r.hideFromClone === true || qe === true ? "" : `
            @keyframes ${_e}-from {
              0% {
                margin: ${me < 0 ? me / 2 : 0}px ${ge < 0 ? ge / 2 : 0}px;
                width: ${Q + h.marginH}px;
                height: ${oe + h.marginV}px;
              }

              100% {
                margin: 0;
                width: 0;
                height: 0;
              }
            }
          `, In = qe === true ? `
            margin: ${me < 0 ? me / 2 : 0}px ${ge < 0 ? ge / 2 : 0}px;
            width: ${Q + h.marginH}px;
            height: ${oe + h.marginV}px;
          ` : `
            margin: 0;
            width: 0;
            height: 0;
          `, se = r.keepToClone === true ? "" : `
            @keyframes ${_e}-to {
              0% {
                ${In}
              }

              100% {
                margin: ${ae < 0 ? ae / 2 : 0}px ${de < 0 ? de / 2 : 0}px;
                width: ${we + N.marginH}px;
                height: ${ke + N.marginV}px;
              }
            }
          `;
        Ce.innerHTML = `
          @keyframes ${_e} {
            0% {
              margin: 0;
              border-width: ${w};
              border-style: ${k};
              border-color: ${p};
              border-radius: ${y};
              background-color: ${b};
              z-index: ${Ve};
              transform-origin: 0 0;
              ${Oe}
              ${Ct}
            }

            100% {
              margin: 0;
              border-width: ${G};
              border-style: ${fe};
              border-color: ${R};
              border-radius: ${A};
              background-color: ${te};
              z-index: ${ie};
              transform-origin: 0 0;
              transform: ${V};
              ${Ae}
              ${jt}
            }
          }

          ${ln}

          ${nl}

          ${se}
        `, document.head.appendChild(Ce);
        let xe = "normal";
        P.style.animation = `${r.duration}ms ${r.easing} ${r.delay}ms ${xe} ${r.fill} ${_e}-from`, I !== void 0 && (I.style.animation = `${r.duration}ms ${r.easing} ${r.delay}ms ${xe} ${r.fill} ${_e}-from-tween`), T.style.animation = `${r.duration}ms ${r.easing} ${r.delay}ms ${xe} ${r.fill} ${_e}-to`, M.style.animation = `${r.duration}ms ${r.easing} ${r.delay}ms ${xe} ${r.fill} ${_e}`;
        const Fe = (Be) => {
          Be === Object(Be) && Be.animationName !== _e || (M.removeEventListener("animationend", Fe), M.removeEventListener("animationcancel", Fe), re(), Ce.remove());
        };
        o.qMorphCancel = () => {
          o.qMorphCancel = void 0, n = true, Fe();
        }, M.qMorphCancel = () => {
          M.qMorphCancel = void 0, n = true, Fe();
        }, M.addEventListener("animationend", Fe), M.addEventListener("animationcancel", Fe), t = (Be) => n === true || !M || !P || !T ? false : Be === true ? (Fe(), true) : (l = l !== true, xe = xe === "normal" ? "reverse" : "normal", P.style.animationDirection = xe, I.style.animationDirection = xe, T.style.animationDirection = xe, M.style.animationDirection = xe, true);
      }
    };
    r.waitFor > 0 || r.waitFor === "transitionend" || r.waitFor === Object(r.waitFor) && typeof r.waitFor.then == "function" ? (r.waitFor > 0 ? new Promise((ye) => setTimeout(ye, r.waitFor)) : r.waitFor === "transitionend" ? new Promise((ye) => {
      const W = () => {
        T !== null && (clearTimeout(T), T = null), M && (M.removeEventListener("transitionend", W), M.removeEventListener("transitioncancel", W)), ye();
      };
      let T = setTimeout(W, 400);
      M.addEventListener("transitionend", W), M.addEventListener("transitioncancel", W);
    }) : r.waitFor).then(O).catch(() => {
      typeof M.qMorphCancel == "function" && M.qMorphCancel();
    }) : O();
  };
  return typeof e.onToggle == "function" && e.onToggle(), requestAnimationFrame(q), (M) => t(M);
}
var Vo = {}, aw = ["duration", "delay", "easing", "fill", "classes", "style", "duration", "resize", "useCSS", "hideFromClone", "keepToClone", "tween", "tweenFromOpacity", "tweenToOpacity", "waitFor", "onEnd"], rw = ["resize", "useCSS", "hideFromClone", "keepToClone", "tween"];
function sa(e, t) {
  e.clsAction !== t && (e.clsAction = t, e.el.classList[t]("q-morph--invisible"));
}
function Uh(e) {
  if (e.animating === true || e.queue.length < 2) return;
  const [t, n] = e.queue;
  e.animating = true, t.animating = true, n.animating = true, sa(t, "remove"), sa(n, "remove");
  const l = lw({ from: t.el, to: n.el, onToggle() {
    sa(t, "add"), sa(n, "remove");
  }, ...n.opts, onEnd(a, r) {
    var _a2, _b2;
    (_b2 = (_a2 = n.opts).onEnd) == null ? void 0 : _b2.call(_a2, a, r), r !== true && (t.animating = false, n.animating = false, e.animating = false, e.cancel = void 0, e.queue.shift(), Uh(e));
  } });
  e.cancel = () => {
    l(true), e.cancel = void 0;
  };
}
function Qh(e, t) {
  const n = t.opts;
  rw.forEach((l) => {
    n[l] = e[l] === true;
  });
}
function ow(e, t) {
  const n = typeof e == "string" && e.length !== 0 ? e.split(":") : [];
  t.name = n[0], t.group = n[1], Object.assign(t.opts, { duration: isNaN(n[2]) === true ? 300 : parseFloat(n[2]), waitFor: n[3] });
}
function iw(e, t) {
  e.group !== void 0 && (t.group = e.group), e.name !== void 0 && (t.name = e.name);
  const n = t.opts;
  aw.forEach((l) => {
    e[l] !== void 0 && (n[l] = e[l]);
  });
}
function uw(e, t) {
  if (t.name === e) {
    const n = Vo[t.group];
    n === void 0 ? (Vo[t.group] = { name: t.group, model: e, queue: [t], animating: false }, sa(t, "remove")) : n.model !== e && (n.model = e, n.queue.push(t), n.animating === false && n.queue.length === 2 && Uh(n));
    return;
  }
  t.animating === false && sa(t, "add");
}
function ef(e, t) {
  let n;
  Object(t) === t ? (n = "" + t.model, iw(t, e), Qh(t, e)) : n = "" + t, n !== e.model ? (e.model = n, uw(n, e)) : e.animating === false && e.clsAction !== void 0 && e.el.classList[e.clsAction]("q-morph--invisible");
}
Rn({ name: "morph", mounted(e, t) {
  const n = { el: e, animating: false, opts: {} };
  Qh(t.modifiers, n), ow(t.arg, n), ef(n, t.value), e.__qmorph = n;
}, updated(e, t) {
  ef(e.__qmorph, t.value);
}, beforeUnmount(e) {
  var _a2;
  const t = e.__qmorph, n = Vo[t.group];
  n !== void 0 && n.queue.indexOf(t) !== -1 && (n.queue = n.queue.filter((a) => a !== t), n.queue.length === 0 && ((_a2 = n.cancel) == null ? void 0 : _a2.call(n), delete Vo[t.group])), t.clsAction === "add" && e.classList.remove("q-morph--invisible"), delete e.__qmorph;
} });
var sw = { childList: true, subtree: true, attributes: true, characterData: true, attributeOldValue: true, characterDataOldValue: true };
function tf(e, t, n) {
  var _a2;
  t.handler = n, (_a2 = t.observer) == null ? void 0 : _a2.disconnect(), t.observer = new MutationObserver((l) => {
    typeof t.handler == "function" && (t.handler(l) === false || t.once === true) && Kh(e);
  }), t.observer.observe(e, t.opts);
}
function Kh(e) {
  var _a2;
  const t = e.__qmutation;
  t !== void 0 && ((_a2 = t.observer) == null ? void 0 : _a2.disconnect(), delete e.__qmutation);
}
Rn({ name: "mutation", mounted(e, { modifiers: { once: t, ...n }, value: l }) {
  const a = { once: t, opts: Object.keys(n).length === 0 ? sw : n };
  tf(e, a, l), e.__qmutation = a;
}, updated(e, { oldValue: t, value: n }) {
  const l = e.__qmutation;
  l !== void 0 && t !== n && tf(e, l, n);
}, beforeUnmount: Kh });
var { passive: zo } = dt;
function nf(e, { value: t, oldValue: n }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, zo);
    return;
  }
  e.handler = t, typeof n != "function" && (e.scrollTarget.addEventListener("scroll", e.scroll, zo), e.scroll());
}
Rn({ name: "scroll-fire", mounted(e, t) {
  const n = { scrollTarget: zn(e), scroll: Ea(() => {
    let l, a;
    n.scrollTarget === window ? (a = e.getBoundingClientRect().bottom, l = window.innerHeight) : (a = qo(e).top + Sa(e), l = qo(n.scrollTarget).top + Sa(n.scrollTarget)), a > 0 && a < l && (n.scrollTarget.removeEventListener("scroll", n.scroll, zo), n.handler(e));
  }, 25) };
  nf(n, t), e.__qscrollfire = n;
}, updated(e, t) {
  t.value !== t.oldValue && nf(e.__qscrollfire, t);
}, beforeUnmount(e) {
  const t = e.__qscrollfire;
  t.scrollTarget.removeEventListener("scroll", t.scroll, zo), t.scroll.cancel(), delete e.__qscrollfire;
} });
function lf(e, { value: t, oldValue: n }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, dt.passive);
    return;
  }
  e.handler = t, typeof n != "function" && e.scrollTarget.addEventListener("scroll", e.scroll, dt.passive);
}
Rn({ name: "scroll", mounted(e, t) {
  const n = { scrollTarget: zn(e), scroll() {
    n.handler(bl(n.scrollTarget), ii(n.scrollTarget));
  } };
  lf(n, t), e.__qscroll = n;
}, updated(e, t) {
  e.__qscroll !== void 0 && t.oldValue !== t.value && lf(e.__qscroll, t);
}, beforeUnmount(e) {
  const t = e.__qscroll;
  t.scrollTarget.removeEventListener("scroll", t.scroll, dt.passive), delete e.__qscroll;
} });
Rn({ name: "touch-hold", beforeMount(e, t) {
  const { modifiers: n } = t;
  if (n.mouse !== true && ze.has.touch !== true) return;
  const l = { handler: t.value, noop: St, mouseStart(r) {
    typeof l.handler == "function" && ti(r) === true && (kt(l, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]), l.start(r, true));
  }, touchStart(r) {
    if (r.target !== void 0 && typeof l.handler == "function") {
      const o = r.target;
      kt(l, "temp", [[o, "touchmove", "move", "passiveCapture"], [o, "touchcancel", "end", "notPassiveCapture"], [o, "touchend", "end", "notPassiveCapture"]]), l.start(r);
    }
  }, start(r, o) {
    l.origin = en(r);
    const i = Date.now();
    ze.is.mobile === true && (document.body.classList.add("non-selectable"), Mn(), l.styleCleanup = (u) => {
      l.styleCleanup = void 0;
      const c = () => {
        document.body.classList.remove("non-selectable");
      };
      u === true ? (Mn(), setTimeout(c, 10)) : c();
    }), l.triggered = false, l.sensitivity = o === true ? l.mouseSensitivity : l.touchSensitivity, l.timer = setTimeout(() => {
      l.timer = void 0, Mn(), l.triggered = true, l.handler({ evt: r, touch: o !== true, mouse: o === true, position: l.origin, duration: Date.now() - i });
    }, l.duration);
  }, move(r) {
    const { top: o, left: i } = en(r);
    l.timer !== void 0 && (Math.abs(i - l.origin.left) >= l.sensitivity || Math.abs(o - l.origin.top) >= l.sensitivity) && (clearTimeout(l.timer), l.timer = void 0);
  }, end(r) {
    var _a2;
    Wt(l, "temp"), (_a2 = l.styleCleanup) == null ? void 0 : _a2.call(l, l.triggered), l.triggered === true ? r !== void 0 && je(r) : l.timer !== void 0 && (clearTimeout(l.timer), l.timer = void 0);
  } }, a = [600, 5, 7];
  if (typeof t.arg == "string" && t.arg.length !== 0 && t.arg.split(":").forEach((r, o) => {
    const i = parseInt(r, 10);
    i && (a[o] = i);
  }), [l.duration, l.touchSensitivity, l.mouseSensitivity] = a, e.__qtouchhold = l, n.mouse === true) {
    const r = n.mouseCapture === true || n.mousecapture === true ? "Capture" : "";
    kt(l, "main", [[e, "mousedown", "mouseStart", `passive${r}`]]);
  }
  ze.has.touch === true && kt(l, "main", [[e, "touchstart", "touchStart", `passive${n.capture === true ? "Capture" : ""}`], [e, "touchend", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const n = e.__qtouchhold;
  n !== void 0 && t.oldValue !== t.value && (typeof t.value != "function" && n.end(), n.handler = t.value);
}, beforeUnmount(e) {
  var _a2;
  const t = e.__qtouchhold;
  t !== void 0 && (Wt(t, "main"), Wt(t, "temp"), t.timer !== void 0 && clearTimeout(t.timer), (_a2 = t.styleCleanup) == null ? void 0 : _a2.call(t), delete e.__qtouchhold);
} });
var Wh = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] }, cw = new RegExp(`^([\\d+]+|${Object.keys(Wh).join("|")})$`, "i");
function dw(e, t) {
  const { top: n, left: l } = en(e);
  return Math.abs(l - t.left) >= 7 || Math.abs(n - t.top) >= 7;
}
Rn({ name: "touch-repeat", beforeMount(e, { modifiers: t, value: n, arg: l }) {
  const a = Object.keys(t).reduce((u, c) => {
    if (cw.test(c) === true) {
      const s = isNaN(parseInt(c, 10)) ? Wh[c.toLowerCase()] : parseInt(c, 10);
      s >= 0 && u.push(s);
    }
    return u;
  }, []);
  if (t.mouse !== true && ze.has.touch !== true && a.length === 0) return;
  const r = typeof l == "string" && l.length !== 0 ? l.split(":").map((u) => parseInt(u, 10)) : [0, 600, 300], o = r.length - 1, i = { keyboard: a, handler: n, noop: St, mouseStart(u) {
    i.event === void 0 && typeof i.handler == "function" && ti(u) === true && (kt(i, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]), i.start(u, true));
  }, keyboardStart(u) {
    if (typeof i.handler == "function" && yn(u, a) === true) {
      if ((r[0] === 0 || i.event !== void 0) && (je(u), e.focus(), i.event !== void 0)) return;
      kt(i, "temp", [[document, "keyup", "end", "notPassiveCapture"], [document, "click", "end", "notPassiveCapture"]]), i.start(u, false, true);
    }
  }, touchStart(u) {
    if (u.target !== void 0 && typeof i.handler == "function") {
      const c = u.target;
      kt(i, "temp", [[c, "touchmove", "move", "passiveCapture"], [c, "touchcancel", "end", "notPassiveCapture"], [c, "touchend", "end", "notPassiveCapture"]]), i.start(u);
    }
  }, start(u, c, s) {
    s !== true && (i.origin = en(u));
    function f(h) {
      i.styleCleanup = void 0, document.documentElement.style.cursor = "";
      const g = () => {
        document.body.classList.remove("non-selectable");
      };
      h === true ? (Mn(), setTimeout(g, 10)) : g();
    }
    ze.is.mobile === true && (document.body.classList.add("non-selectable"), Mn(), i.styleCleanup = f), i.event = { touch: c !== true && s !== true, mouse: c === true, keyboard: s === true, startTime: Date.now(), repeatCount: 0 };
    const m = () => {
      if (i.timer = void 0, i.event === void 0) return;
      i.event.repeatCount === 0 && (i.event.evt = u, s === true ? i.event.keyCode = u.keyCode : i.event.position = en(u), ze.is.mobile !== true && (document.documentElement.style.cursor = "pointer", document.body.classList.add("non-selectable"), Mn(), i.styleCleanup = f)), i.event.duration = Date.now() - i.event.startTime, i.event.repeatCount += 1, i.handler(i.event);
      const h = o < i.event.repeatCount ? o : i.event.repeatCount;
      i.timer = setTimeout(m, r[h]);
    };
    r[0] === 0 ? m() : i.timer = setTimeout(m, r[0]);
  }, move(u) {
    i.event !== void 0 && i.timer !== void 0 && dw(u, i.origin) === true && (clearTimeout(i.timer), i.timer = void 0);
  }, end(u) {
    var _a2;
    i.event !== void 0 && ((_a2 = i.styleCleanup) == null ? void 0 : _a2.call(i, true), u !== void 0 && i.event.repeatCount > 0 && je(u), Wt(i, "temp"), i.timer !== void 0 && (clearTimeout(i.timer), i.timer = void 0), i.event = void 0);
  } };
  if (e.__qtouchrepeat = i, t.mouse === true) {
    const u = t.mouseCapture === true || t.mousecapture === true ? "Capture" : "";
    kt(i, "main", [[e, "mousedown", "mouseStart", `passive${u}`]]);
  }
  if (ze.has.touch === true && kt(i, "main", [[e, "touchstart", "touchStart", `passive${t.capture === true ? "Capture" : ""}`], [e, "touchend", "noop", "passiveCapture"]]), a.length !== 0) {
    const u = t.keyCapture === true || t.keycapture === true ? "Capture" : "";
    kt(i, "main", [[e, "keydown", "keyboardStart", `notPassive${u}`]]);
  }
}, updated(e, { oldValue: t, value: n }) {
  const l = e.__qtouchrepeat;
  l !== void 0 && t !== n && (typeof n != "function" && l.end(), l.handler = n);
}, beforeUnmount(e) {
  var _a2;
  const t = e.__qtouchrepeat;
  t !== void 0 && (t.timer !== void 0 && clearTimeout(t.timer), Wt(t, "main"), Wt(t, "temp"), (_a2 = t.styleCleanup) == null ? void 0 : _a2.call(t), delete e.__qtouchrepeat);
} });
function fw(e, t = document.body) {
  if (!(t instanceof Element)) throw new TypeError("Expected a DOM element");
  return getComputedStyle(t).getPropertyValue(`--q-${e}`).trim() || null;
}
var Jr;
function vw() {
  return ze.is.winphone ? "msapplication-navbutton-color" : ze.is.safari ? "apple-mobile-web-app-status-bar-style" : "theme-color";
}
function mw(e) {
  const t = document.getElementsByTagName("META");
  for (const n in t) if (t[n].name === e) return t[n];
}
function hw(e) {
  Jr === void 0 && (Jr = vw());
  let t = mw(Jr);
  const n = t === void 0;
  n && (t = document.createElement("meta"), t.setAttribute("name", Jr)), t.setAttribute("content", e), n && document.head.appendChild(t);
}
ze.is.mobile === true && (ze.is.nativeMobile === true || ze.is.winphone === true || ze.is.safari === true || ze.is.webkit === true || ze.is.vivaldi);
var Na = {};
function gw(e) {
  Object.assign(Qt, { request: e, exit: e, toggle: e });
}
function Yh() {
  return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || null;
}
function Gh() {
  const e = Qt.activeEl = Qt.isActive === false ? null : Yh();
  Ky(e === null || e === document.documentElement ? document.body : e);
}
function bw() {
  Qt.isActive = Qt.isActive === false, Gh();
}
function af(e, t) {
  try {
    const n = e[t]();
    return n === void 0 ? Promise.resolve() : n;
  } catch (n) {
    return Promise.reject(n);
  }
}
var Qt = xl({ isActive: false, activeEl: null }, { isCapable: false, install({ $q: e }) {
  e.fullscreen = this;
} });
Na.request = ["requestFullscreen", "msRequestFullscreen", "mozRequestFullScreen", "webkitRequestFullscreen"].find((e) => document.documentElement[e] !== void 0), Qt.isCapable = Na.request !== void 0, Qt.isCapable === false ? gw(() => Promise.reject("Not capable")) : (Object.assign(Qt, { request(e) {
  const t = e || document.documentElement, { activeEl: n } = Qt;
  return t === n ? Promise.resolve() : (n !== null && t.contains(n) === true ? Qt.exit() : Promise.resolve()).finally(() => af(t, Na.request));
}, exit() {
  return Qt.isActive === true ? af(document, Na.exit) : Promise.resolve();
}, toggle(e) {
  return Qt.isActive === true ? Qt.exit() : Qt.request(e);
} }), Na.exit = ["exitFullscreen", "msExitFullscreen", "mozCancelFullScreen", "webkitExitFullscreen"].find((e) => document[e]), Qt.isActive = !!Yh(), Qt.isActive === true && Gh(), ["onfullscreenchange", "onmsfullscreenchange", "onwebkitfullscreenchange"].forEach((e) => {
  document[e] = bw;
}));
var yw = xl({ appVisible: true }, { install({ $q: e }) {
  Ot(e, "appVisible", () => this.appVisible);
} });
{
  let e, t;
  if (typeof document.hidden < "u" ? (e = "hidden", t = "visibilitychange") : typeof document.msHidden < "u" ? (e = "msHidden", t = "msvisibilitychange") : typeof document.webkitHidden < "u" && (e = "webkitHidden", t = "webkitvisibilitychange"), t && typeof document[e] < "u") {
    const n = () => {
      yw.appVisible = !document[e];
    };
    document.addEventListener(t, n, false);
  }
}
he({ name: "BottomSheetComponent", props: { ...nt, title: String, message: String, actions: Array, grid: Boolean, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  const { proxy: n } = Se(), l = lt(e, n.$q), a = K(null);
  function r() {
    a.value.show();
  }
  function o() {
    a.value.hide();
  }
  function i(h) {
    t("ok", h), o();
  }
  function u() {
    t("hide");
  }
  function c() {
    return e.actions.map((h) => {
      const g = h.avatar || h.img;
      return h.label === void 0 ? d(Ql, { class: "col-all", dark: l.value }) : d("div", { class: ["q-bottom-sheet__item q-hoverable q-focusable cursor-pointer relative-position", h.class], style: h.style, tabindex: 0, role: "listitem", onClick() {
        i(h);
      }, onKeyup(_) {
        _.keyCode === 13 && i(h);
      } }, [d("div", { class: "q-focus-helper" }), h.icon ? d(et, { name: h.icon, color: h.color }) : g ? d("img", { class: h.avatar ? "q-bottom-sheet__avatar" : "", src: g }) : d("div", { class: "q-bottom-sheet__empty-icon" }), d("div", h.label)]);
    });
  }
  function s() {
    return e.actions.map((h) => {
      const g = h.avatar || h.img;
      return h.label === void 0 ? d(Ql, { spaced: true, dark: l.value }) : d(Ca, { class: ["q-bottom-sheet__item", h.classes], style: h.style, tabindex: 0, clickable: true, dark: l.value, onClick() {
        i(h);
      } }, () => [d(mn, { avatar: true }, () => h.icon ? d(et, { name: h.icon, color: h.color }) : g ? d("img", { class: h.avatar ? "q-bottom-sheet__avatar" : "", src: g }) : null), d(mn, () => h.label)]);
    });
  }
  function f() {
    const h = [];
    return e.title && h.push(d(Fl, { class: "q-dialog__title" }, () => e.title)), e.message && h.push(d(Fl, { class: "q-dialog__message" }, () => e.message)), h.push(e.grid === true ? d("div", { class: "row items-stretch justify-start", role: "list" }, c()) : d("div", { role: "list" }, s())), h;
  }
  function m() {
    return [d(Om, { class: [`q-bottom-sheet q-bottom-sheet--${e.grid === true ? "grid" : "list"}` + (l.value === true ? " q-bottom-sheet--dark q-dark" : ""), e.cardClass], style: e.cardStyle }, f)];
  }
  return Object.assign(n, { show: r, hide: o }), () => d(ci, { ref: a, position: "bottom", onHide: u }, m);
} });
function Xh(e, t) {
  for (const n in t) n !== "spinner" && Object(t[n]) === t[n] ? (e[n] = Object(e[n]) !== e[n] ? {} : { ...e[n] }, Xh(e[n], t[n])) : e[n] = t[n];
}
function pw(e, t, n) {
  return (l) => {
    let a, r;
    const o = l.component !== void 0;
    if (o === true) {
      const { component: p, componentProps: y } = l;
      a = typeof p == "string" ? n.component(p) : p, r = y || {};
    } else {
      const { class: p, style: y, ...b } = l;
      a = e, r = b, p !== void 0 && (b.cardClass = p), y !== void 0 && (b.cardStyle = y);
    }
    let i, u = false;
    const c = K(null), s = Rr(false, "dialog"), f = (p) => {
      var _a2;
      if (((_a2 = c.value) == null ? void 0 : _a2[p]) !== void 0) {
        c.value[p]();
        return;
      }
      const y = i.$.subTree;
      if (y == null ? void 0 : y.component) {
        if (y.component.proxy && y.component.proxy[p]) {
          y.component.proxy[p]();
          return;
        }
        if (y.component.subTree && y.component.subTree.component && y.component.subTree.component.proxy && y.component.subTree.component.proxy[p]) {
          y.component.subTree.component.proxy[p]();
          return;
        }
      }
      console.error("[Quasar] Incorrectly defined Dialog component");
    }, m = [], h = [], g = { onOk(p) {
      return m.push(p), g;
    }, onCancel(p) {
      return h.push(p), g;
    }, onDismiss(p) {
      return m.push(p), h.push(p), g;
    }, hide() {
      return f("hide"), g;
    }, update(p) {
      if (i !== null) {
        if (o === true) Object.assign(r, p);
        else {
          const { class: y, style: b, ...x } = p;
          y !== void 0 && (x.cardClass = y), b !== void 0 && (x.cardStyle = b), Xh(r, x);
        }
        i.$forceUpdate();
      }
      return g;
    } }, _ = (p) => {
      u = true, m.forEach((y) => {
        y(p);
      });
    }, w = () => {
      k.unmount(s), ks(s), k = null, i = null, u !== true && h.forEach((p) => {
        p();
      });
    };
    let k = li({ name: "QGlobalDialog", setup: () => () => d(a, { ...r, ref: c, onOk: _, onHide: w, onVnodeMounted(...p) {
      typeof r.onVnodeMounted == "function" && r.onVnodeMounted(...p), We(() => f("show"));
    } }) }, n);
    return i = k.mount(s), g;
  };
}
function Zh(e) {
  return encodeURIComponent(e);
}
function Jh(e) {
  return decodeURIComponent(e);
}
function _w(e) {
  return Zh(e === Object(e) ? JSON.stringify(e) : "" + e);
}
function ww(e) {
  if (e === "") return e;
  e.indexOf('"') === 0 && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), e = Jh(e.replace(/\+/g, " "));
  try {
    const t = JSON.parse(e);
    (t === Object(t) || Array.isArray(t) === true) && (e = t);
  } catch {
  }
  return e;
}
function eg(e) {
  const t = /* @__PURE__ */ new Date();
  return t.setMilliseconds(t.getMilliseconds() + e), t.toUTCString();
}
function Sw(e) {
  let t = 0;
  const n = e.match(/(\d+)d/), l = e.match(/(\d+)h/), a = e.match(/(\d+)m/), r = e.match(/(\d+)s/);
  return n && (t += n[1] * 864e5), l && (t += l[1] * 36e5), a && (t += a[1] * 6e4), r && (t += r[1] * 1e3), t === 0 ? e : eg(t);
}
function tg(e, t, n = {}, l) {
  let a, r;
  n.expires !== void 0 && (Object.prototype.toString.call(n.expires) === "[object Date]" ? a = n.expires.toUTCString() : typeof n.expires == "string" ? a = Sw(n.expires) : (r = parseFloat(n.expires), a = isNaN(r) === false ? eg(r * 864e5) : n.expires));
  const o = `${Zh(e)}=${_w(t)}`, i = [o, a !== void 0 ? "; Expires=" + a : "", n.path ? "; Path=" + n.path : "", n.domain ? "; Domain=" + n.domain : "", n.sameSite ? "; SameSite=" + n.sameSite : "", n.httpOnly ? "; HttpOnly" : "", n.secure ? "; Secure" : "", n.other ? "; " + n.other : ""].join("");
  if (l) {
    l.req.qCookies ? l.req.qCookies.push(i) : l.req.qCookies = [i], l.res.setHeader("Set-Cookie", l.req.qCookies);
    let u = l.req.headers.cookie || "";
    if (a !== void 0 && r < 0) {
      const c = Io(e, l);
      c !== void 0 && (u = u.replace(`${e}=${c}; `, "").replace(`; ${e}=${c}`, "").replace(`${e}=${c}`, ""));
    } else u = u ? `${o}; ${u}` : i;
    l.req.headers.cookie = u;
  } else document.cookie = i;
}
function Io(e, t) {
  const n = t ? t.req.headers : document, l = n.cookie ? n.cookie.split("; ") : [], a = l.length;
  let r = e ? null : {}, o = 0, i, u, c;
  for (; o < a; o++) if (i = l[o].split("="), u = Jh(i.shift()), c = i.join("="), !e) r[u] = c;
  else if (e === u) {
    r = ww(c);
    break;
  }
  return r;
}
function xw(e, t, n) {
  tg(e, "", { expires: -1, ...t }, n);
}
function Cw(e, t) {
  return Io(e, t) !== null;
}
function ng(e) {
  return { get: (t) => Io(t, e), set: (t, n, l) => tg(t, n, l, e), has: (t) => Cw(t, e), remove: (t, n) => xw(t, n, e), getAll: () => Io(null, e) };
}
var js = { install({ $q: e, ssrContext: t }) {
  e.cookies = this;
} };
__QUASAR_SSR__ && (js.parseSSR = (e) => {
  if (e !== void 0) return ng(e);
});
Object.assign(js, ng());
var kw = js, qw = he({ name: "DialogPluginComponent", props: { ...nt, title: String, message: String, prompt: Object, options: Object, progress: [Boolean, Object], html: Boolean, ok: { type: [String, Object, Boolean], default: true }, cancel: [String, Object, Boolean], focus: { type: String, default: "ok", validator: (e) => ["ok", "cancel", "none"].includes(e) }, stackButtons: Boolean, color: String, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  const { proxy: n } = Se(), { $q: l } = n, a = lt(e, l), r = K(null), o = K(e.prompt !== void 0 ? e.prompt.model : e.options !== void 0 ? e.options.model : void 0), i = v(() => "q-dialog-plugin" + (a.value === true ? " q-dialog-plugin--dark q-dark" : "") + (e.progress !== false ? " q-dialog-plugin--progress" : "")), u = v(() => e.color || (a.value === true ? "amber" : "primary")), c = v(() => e.progress === false ? null : Pt(e.progress) === true ? { component: e.progress.spinner || _n, props: { color: e.progress.color || u.value } } : { component: _n, props: { color: u.value } }), s = v(() => e.prompt !== void 0 || e.options !== void 0), f = v(() => {
    if (s.value !== true) return {};
    const { model: C, isValid: H, items: Y, ...L } = e.prompt !== void 0 ? e.prompt : e.options;
    return L;
  }), m = v(() => Pt(e.ok) === true || e.ok === true ? l.lang.label.ok : e.ok), h = v(() => Pt(e.cancel) === true || e.cancel === true ? l.lang.label.cancel : e.cancel), g = v(() => e.prompt !== void 0 ? e.prompt.isValid !== void 0 && e.prompt.isValid(o.value) !== true : e.options !== void 0 ? e.options.isValid !== void 0 && e.options.isValid(o.value) !== true : false), _ = v(() => ({ color: u.value, label: m.value, ripple: false, disable: g.value, ...Pt(e.ok) === true ? e.ok : { flat: true }, "data-autofocus": e.focus === "ok" && s.value !== true || void 0, onClick: y })), w = v(() => ({ color: u.value, label: h.value, ripple: false, ...Pt(e.cancel) === true ? e.cancel : { flat: true }, "data-autofocus": e.focus === "cancel" && s.value !== true || void 0, onClick: b }));
  be(() => e.prompt && e.prompt.model, $), be(() => e.options && e.options.model, $);
  function k() {
    r.value.show();
  }
  function p() {
    r.value.hide();
  }
  function y() {
    t("ok", Ge(o.value)), p();
  }
  function b() {
    p();
  }
  function x() {
    t("hide");
  }
  function $(C) {
    o.value = C;
  }
  function F(C) {
    g.value !== true && e.prompt.type !== "textarea" && yn(C, 13) === true && y();
  }
  function D(C, H) {
    return e.html === true ? d(Fl, { class: C, innerHTML: H }) : d(Fl, { class: C }, () => H);
  }
  function B() {
    return [d(Eh, { color: u.value, dense: true, autofocus: true, dark: a.value, ...f.value, modelValue: o.value, "onUpdate:modelValue": $, onKeyup: F })];
  }
  function P() {
    return [d(L1, { color: u.value, options: e.options.items, dark: a.value, ...f.value, modelValue: o.value, "onUpdate:modelValue": $ })];
  }
  function I() {
    const C = [];
    return e.cancel && C.push(d(Ze, w.value)), e.ok && C.push(d(Ze, _.value)), d(dp, { class: e.stackButtons === true ? "items-end" : "", vertical: e.stackButtons, align: "right" }, () => C);
  }
  function q() {
    const C = [];
    return e.title && C.push(D("q-dialog__title", e.title)), e.progress !== false && C.push(d(Fl, { class: "q-dialog__progress" }, () => d(c.value.component, c.value.props))), e.message && C.push(D("q-dialog__message", e.message)), e.prompt !== void 0 ? C.push(d(Fl, { class: "scroll q-dialog-plugin__form" }, B)) : e.options !== void 0 && C.push(d(Ql, { dark: a.value }), d(Fl, { class: "scroll q-dialog-plugin__form" }, P), d(Ql, { dark: a.value })), (e.ok || e.cancel) && C.push(I()), C;
  }
  function M() {
    return [d(Om, { class: [i.value, e.cardClass], style: e.cardStyle, dark: a.value }, q)];
  }
  return Object.assign(n, { show: k, hide: p }), () => d(ci, { ref: r, onHide: x }, M);
} }), Tw = { install({ $q: e, parentApp: t }) {
  e.dialog = this.create = pw(qw, true, t);
} }, oa, lu, rf = 0, Rl = null, It = {}, Vl = {}, lg = { group: "__default_quasar_group__", delay: 0, message: false, html: false, spinnerSize: 80, spinnerColor: "", messageColor: "", backgroundColor: "", boxClass: "", spinner: _n, customClass: "" }, ag = { ...lg };
function Mw(e) {
  if ((e == null ? void 0 : e.group) !== void 0 && Vl[e.group] !== void 0) return Object.assign(Vl[e.group], e);
  const t = Pt(e) === true && e.ignoreDefaults === true ? { ...lg, ...e } : { ...ag, ...e };
  return Vl[t.group] = t, t;
}
var Sn = xl({ isActive: false }, { show(e) {
  It = Mw(e);
  const { group: t } = It;
  return Sn.isActive = true, oa !== void 0 ? (It.uid = rf, lu.$forceUpdate()) : (It.uid = ++rf, Rl !== null && clearTimeout(Rl), Rl = setTimeout(() => {
    Rl = null;
    const n = Rr("q-loading");
    oa = li({ name: "QLoading", setup() {
      ft(() => {
        Iu(true);
      });
      function l() {
        Sn.isActive !== true && oa !== void 0 && (Iu(false), oa.unmount(n), ks(n), oa = void 0, lu = void 0);
      }
      function a() {
        if (Sn.isActive !== true) return null;
        const r = [d(It.spinner, { class: "q-loading__spinner", color: It.spinnerColor, size: It.spinnerSize })];
        return It.message && r.push(d("div", { class: "q-loading__message" + (It.messageColor ? ` text-${It.messageColor}` : ""), [It.html === true ? "innerHTML" : "textContent"]: It.message })), d("div", { class: "q-loading fullscreen flex flex-center z-max " + It.customClass.trim(), key: It.uid }, [d("div", { class: "q-loading__backdrop" + (It.backgroundColor ? ` bg-${It.backgroundColor}` : "") }), d("div", { class: "q-loading__box column items-center " + It.boxClass }, r)]);
      }
      return () => d(Ft, { name: "q-transition--fade", appear: true, onAfterLeave: l }, a);
    } }, Sn.__parentApp), lu = oa.mount(n);
  }, It.delay)), (n) => {
    if (n === void 0 || Object(n) !== n) {
      Sn.hide(t);
      return;
    }
    Sn.show({ ...n, group: t });
  };
}, hide(e) {
  if (Sn.isActive === true) {
    if (e === void 0) Vl = {};
    else {
      if (Vl[e] === void 0) return;
      {
        delete Vl[e];
        const t = Object.keys(Vl);
        if (t.length !== 0) {
          const n = t[t.length - 1];
          Sn.show({ group: n });
          return;
        }
      }
    }
    Rl !== null && (clearTimeout(Rl), Rl = null), Sn.isActive = false;
  }
}, setDefaults(e) {
  Pt(e) === true && Object.assign(ag, e);
}, install({ $q: e, parentApp: t }) {
  e.loading = this, Sn.__parentApp = t, e.config.loading !== void 0 && this.setDefaults(e.config.loading);
} }), Ew = Sn, eo = K(null), of = xl({ isActive: false }, { start: St, stop: St, increment: St, setDefaults: St, install({ $q: e, parentApp: t }) {
  if (e.loadingBar = this, this.__installed === true) {
    e.config.loadingBar !== void 0 && this.setDefaults(e.config.loadingBar);
    return;
  }
  const n = K(e.config.loadingBar !== void 0 ? { ...e.config.loadingBar } : {});
  function l() {
    of.isActive = true;
  }
  function a() {
    of.isActive = false;
  }
  const r = Rr("q-loading-bar");
  li({ name: "LoadingBar", devtools: { hide: true }, setup: () => () => d(Cy, { ...n.value, onStart: l, onStop: a, ref: eo }) }, t).mount(r), Object.assign(this, { start(o) {
    eo.value.start(o);
  }, stop() {
    eo.value.stop();
  }, increment() {
    eo.value.increment.apply(null, arguments);
  }, setDefaults(o) {
    Pt(o) === true && Object.assign(n.value, o);
  } });
} }), Aw = 0, uo = {}, so = {}, xn = {}, rg = {}, Rw = /^\s*$/, og = [], $w = [void 0, null, true, false, ""], Us = ["top-left", "top-right", "bottom-left", "bottom-right", "top", "bottom", "left", "right", "center"], Pw = ["top-left", "top-right", "bottom-left", "bottom-right"], Ya = { positive: { icon: (e) => e.iconSet.type.positive, color: "positive" }, negative: { icon: (e) => e.iconSet.type.negative, color: "negative" }, warning: { icon: (e) => e.iconSet.type.warning, color: "warning", textColor: "dark" }, info: { icon: (e) => e.iconSet.type.info, color: "info" }, ongoing: { group: false, timeout: 0, spinner: true, color: "grey-8" } };
function ig(e, t, n) {
  var _a2;
  if (!e) return Ha("parameter required");
  let l;
  const a = { textColor: "white" };
  if (e.ignoreDefaults !== true && Object.assign(a, uo), Pt(e) === false && (a.type && Object.assign(a, Ya[a.type]), e = { message: e }), Object.assign(a, Ya[e.type || a.type], e), typeof a.icon == "function" && (a.icon = a.icon(t)), a.spinner ? (a.spinner === true && (a.spinner = _n), a.spinner = Uo(a.spinner)) : a.spinner = false, a.meta = { hasMedia: !!(a.spinner !== false || a.icon || a.avatar), hasText: uf(a.message) || uf(a.caption) }, a.position) {
    if (Us.includes(a.position) === false) return Ha("wrong position", e);
  } else a.position = "bottom";
  if ($w.includes(a.timeout) === true) a.timeout = 5e3;
  else {
    const u = Number(a.timeout);
    if (isNaN(u) || u < 0) return Ha("wrong timeout", e);
    a.timeout = Number.isFinite(u) ? u : 0;
  }
  a.timeout === 0 ? a.progress = false : a.progress === true && (a.meta.progressClass = "q-notification__progress" + (a.progressClass ? ` ${a.progressClass}` : ""), a.meta.progressStyle = { animationDuration: `${a.timeout + 1e3}ms` });
  const r = (Array.isArray(e.actions) === true ? e.actions : []).concat(e.ignoreDefaults !== true && Array.isArray(uo.actions) === true ? uo.actions : []).concat(Array.isArray((_a2 = Ya[e.type]) == null ? void 0 : _a2.actions) === true ? Ya[e.type].actions : []), { closeBtn: o } = a;
  if (o && r.push({ label: typeof o == "string" ? o : t.lang.label.close }), a.actions = r.map(({ handler: u, noDismiss: c, ...s }) => ({ flat: true, ...s, onClick: typeof u == "function" ? () => {
    u(), c !== true && i();
  } : () => {
    i();
  } })), a.multiLine === void 0 && (a.multiLine = a.actions.length > 1), Object.assign(a.meta, { class: `q-notification row items-stretch q-notification--${a.multiLine === true ? "multi-line" : "standard"}` + (a.color !== void 0 ? ` bg-${a.color}` : "") + (a.textColor !== void 0 ? ` text-${a.textColor}` : "") + (a.classes !== void 0 ? ` ${a.classes}` : ""), wrapperClass: "q-notification__wrapper col relative-position border-radius-inherit " + (a.multiLine === true ? "column no-wrap justify-center" : "row items-center"), contentClass: "q-notification__content row items-center" + (a.multiLine === true ? "" : " col"), leftClass: a.meta.hasText === true ? "additional" : "single", attrs: { role: "alert", ...a.attrs } }), a.group === false ? (a.group = void 0, a.meta.group = void 0) : ((a.group === void 0 || a.group === true) && (a.group = [a.message, a.caption, a.multiline].concat(a.actions.map((u) => `${u.label}*${u.icon}`)).join("|")), a.meta.group = a.group + "|" + a.position), a.actions.length === 0 ? a.actions = void 0 : a.meta.actionsClass = "q-notification__actions row items-center " + (a.multiLine === true ? "justify-end" : "col-auto") + (a.meta.hasMedia === true ? " q-notification__actions--with-media" : ""), n !== void 0) {
    n.notif.meta.timer && (clearTimeout(n.notif.meta.timer), n.notif.meta.timer = void 0), a.meta.uid = n.notif.meta.uid;
    const u = xn[a.position].value.indexOf(n.notif);
    xn[a.position].value[u] = a;
  } else {
    const u = so[a.meta.group];
    if (u === void 0) {
      if (a.meta.uid = Aw++, a.meta.badge = 1, ["left", "right", "center"].indexOf(a.position) !== -1) xn[a.position].value.splice(Math.floor(xn[a.position].value.length / 2), 0, a);
      else {
        const c = a.position.indexOf("top") !== -1 ? "unshift" : "push";
        xn[a.position].value[c](a);
      }
      a.group !== void 0 && (so[a.meta.group] = a);
    } else {
      if (u.meta.timer && (clearTimeout(u.meta.timer), u.meta.timer = void 0), a.badgePosition !== void 0) {
        if (Pw.includes(a.badgePosition) === false) return Ha("wrong badgePosition", e);
      } else a.badgePosition = `top-${a.position.indexOf("left") !== -1 ? "right" : "left"}`;
      a.meta.uid = u.meta.uid, a.meta.badge = u.meta.badge + 1, a.meta.badgeClass = `q-notification__badge q-notification__badge--${a.badgePosition}` + (a.badgeColor !== void 0 ? ` bg-${a.badgeColor}` : "") + (a.badgeTextColor !== void 0 ? ` text-${a.badgeTextColor}` : "") + (a.badgeClass ? ` ${a.badgeClass}` : "");
      const c = xn[a.position].value.indexOf(u);
      xn[a.position].value[c] = so[a.meta.group] = a;
    }
  }
  const i = () => {
    Lw(a), l = void 0;
  };
  if (a.timeout > 0 && (a.meta.timer = setTimeout(() => {
    a.meta.timer = void 0, i();
  }, a.timeout + 1e3)), a.group !== void 0) return (u) => {
    u !== void 0 ? Ha("trying to update a grouped one which is forbidden", e) : i();
  };
  if (l = { dismiss: i, config: e, notif: a }, n !== void 0) {
    Object.assign(n, l);
    return;
  }
  return (u) => {
    if (l !== void 0) if (u === void 0) l.dismiss();
    else {
      const c = Object.assign({}, l.config, u, { group: false, position: a.position });
      ig(c, t, l);
    }
  };
}
function Lw(e) {
  e.meta.timer && (clearTimeout(e.meta.timer), e.meta.timer = void 0);
  const t = xn[e.position].value.indexOf(e);
  if (t !== -1) {
    e.group !== void 0 && delete so[e.meta.group];
    const n = og["" + e.meta.uid];
    if (n) {
      const { width: l, height: a } = getComputedStyle(n);
      n.style.left = `${n.offsetLeft}px`, n.style.width = l, n.style.height = a;
    }
    xn[e.position].value.splice(t, 1), typeof e.onDismiss == "function" && e.onDismiss();
  }
}
function uf(e) {
  return e != null && Rw.test(e) !== true;
}
function Ha(e, t) {
  return console.error(`Notify: ${e}`, t), false;
}
function Bw() {
  return he({ name: "QNotifications", devtools: { hide: true }, setup() {
    return () => d("div", { class: "q-notifications" }, Us.map((e) => d(jb, { key: e, class: rg[e], tag: "div", name: `q-notification--${e}` }, () => xn[e].value.map((t) => {
      const n = t.meta, l = [];
      if (n.hasMedia === true && (t.spinner !== false ? l.push(d(t.spinner, { class: "q-notification__spinner q-notification__spinner--" + n.leftClass, color: t.spinnerColor, size: t.spinnerSize })) : t.icon ? l.push(d(et, { class: "q-notification__icon q-notification__icon--" + n.leftClass, name: t.icon, color: t.iconColor, size: t.iconSize, role: "img" })) : t.avatar && l.push(d($u, { class: "q-notification__avatar q-notification__avatar--" + n.leftClass }, () => d("img", { src: t.avatar, "aria-hidden": "true" })))), n.hasText === true) {
        let r;
        const o = { class: "q-notification__message col" };
        if (t.html === true) o.innerHTML = t.caption ? `<div>${t.message}</div><div class="q-notification__caption">${t.caption}</div>` : t.message;
        else {
          const i = [t.message];
          r = t.caption ? [d("div", i), d("div", { class: "q-notification__caption" }, [t.caption])] : i;
        }
        l.push(d("div", o, r));
      }
      const a = [d("div", { class: n.contentClass }, l)];
      return t.progress === true && a.push(d("div", { key: `${n.uid}|p|${n.badge}`, class: n.progressClass, style: n.progressStyle })), t.actions !== void 0 && a.push(d("div", { class: n.actionsClass }, t.actions.map((r) => d(Ze, r)))), n.badge > 1 && a.push(d("div", { key: `${n.uid}|${n.badge}`, class: t.meta.badgeClass, style: t.badgeStyle }, [n.badge])), d("div", { ref: (r) => {
        og["" + n.uid] = r;
      }, key: n.uid, class: n.class, ...n.attrs }, [d("div", { class: n.wrapperClass }, a)]);
    }))));
  } });
}
var Fw = { setDefaults(e) {
  Pt(e) === true && Object.assign(uo, e);
}, registerType(e, t) {
  Pt(t) === true && (Ya[e] = t);
}, install({ $q: e, parentApp: t }) {
  if (e.notify = this.create = (n) => ig(n, e), e.notify.setDefaults = this.setDefaults, e.notify.registerType = this.registerType, e.config.notify !== void 0 && this.setDefaults(e.config.notify), this.__installed !== true) {
    Us.forEach((l) => {
      xn[l] = K([]);
      const a = ["left", "center", "right"].includes(l) === true ? "center" : l.indexOf("top") !== -1 ? "top" : "bottom", r = l.indexOf("left") !== -1 ? "start" : l.indexOf("right") !== -1 ? "end" : "center", o = ["left", "right"].includes(l) ? `items-${l === "left" ? "start" : "end"} justify-center` : l === "center" ? "flex-center" : `items-${r}`;
      rg[l] = `q-notifications__list q-notifications__list--${a} fixed column no-wrap ${o}`;
    });
    const n = Rr("q-notify");
    li(Bw(), t).mount(n);
  }
} };
function Ow(e) {
  return Eu(e) === true ? "__q_date|" + e.getTime() : gy(e) === true ? "__q_expr|" + e.source : typeof e == "number" ? "__q_numb|" + e : typeof e == "boolean" ? "__q_bool|" + (e ? "1" : "0") : typeof e == "string" ? "__q_strn|" + e : typeof e == "function" ? "__q_strn|" + e.toString() : e === Object(e) ? "__q_objt|" + JSON.stringify(e) : e;
}
function Vw(e) {
  if (e.length < 9) return e;
  const n = e.substring(0, 8), l = e.substring(9);
  switch (n) {
    case "__q_date":
      const a = Number(l);
      return new Date(Number.isNaN(a) === true ? l : a);
    case "__q_expr":
      return new RegExp(l);
    case "__q_numb":
      return Number(l);
    case "__q_bool":
      return l === "1";
    case "__q_strn":
      return "" + l;
    case "__q_objt":
      return JSON.parse(l);
    default:
      return e;
  }
}
function ug() {
  const e = () => null;
  return { has: () => false, hasItem: () => false, getLength: () => 0, getItem: e, getIndex: e, getKey: e, getAll: () => {
  }, getAllKeys: () => [], set: St, setItem: St, remove: St, removeItem: St, clear: St, isEmpty: () => true };
}
function sg(e) {
  const t = window[e + "Storage"], n = (o) => {
    const i = t.getItem(o);
    return i ? Vw(i) : null;
  }, l = (o) => t.getItem(o) !== null, a = (o, i) => {
    t.setItem(o, Ow(i));
  }, r = (o) => {
    t.removeItem(o);
  };
  return { has: l, hasItem: l, getLength: () => t.length, getItem: n, getIndex: (o) => o < t.length ? n(t.key(o)) : null, getKey: (o) => o < t.length ? t.key(o) : null, getAll: () => {
    let o;
    const i = {}, u = t.length;
    for (let c = 0; c < u; c++) o = t.key(c), i[o] = n(o);
    return i;
  }, getAllKeys: () => {
    const o = [], i = t.length;
    for (let u = 0; u < i; u++) o.push(t.key(u));
    return o;
  }, set: a, setItem: a, remove: r, removeItem: r, clear: () => {
    t.clear();
  }, isEmpty: () => t.length === 0 };
}
var cg = ze.has.webStorage === false ? ug() : sg("local"), zw = { install({ $q: e }) {
  e.localStorage = cg;
} };
Object.assign(zw, cg);
var dg = ze.has.webStorage === false ? ug() : sg("session"), Iw = { install({ $q: e }) {
  e.sessionStorage = dg;
} };
Object.assign(Iw, dg);
var Dw = ["ok", "hide"];
jh(Dw);
function Nw() {
  return Tt(lm);
}
var Hw = { version: "2.18.1", install: yy, lang: ni, iconSet: nm };
function jw(e, t) {
  const n = ds("router-view");
  return Gn(), Ll(n, { class: "view" });
}
const fg = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, a] of t) n[l] = a;
  return n;
}, Uw = {}, Qw = fg(Uw, [["render", jw]]), Kw = "M10,2C8.18,2 6.47,2.5 5,3.35C8,5.08 10,8.3 10,12C10,15.7 8,18.92 5,20.65C6.47,21.5 8.18,22 10,22A10,10 0 0,0 20,12A10,10 0 0,0 10,2Z", Ww = "M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z", Yw = /* @__PURE__ */ Ta({ __name: "Quasar", setup(e) {
  const t = Nw();
  let n = K(false), l = K(false), a = K(true);
  const r = "production";
  return (o, i) => {
    const u = ds("router-view"), c = R0("ripple");
    return Gn(), Ll(Ie(T1), { view: "hHh LpR fFf" }, { default: At(() => [Je(Ie(m1), { class: "bg-primary text-white", elevated: "", id: "header" }, { default: At(() => [Je(Ie(Hd), null, { default: At(() => [Je(Ie(Ze), { dense: "", flat: "", round: "", icon: "menu", onClick: i[0] || (i[0] = (s) => pt(n) ? n.value = !Ie(n) : n = !Ie(n)) }), Je(Ie(jd), null, { default: At(() => [Je(Ie($u), null, { default: At(() => i[10] || (i[10] = [Ln("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" }, null, -1)])), _: 1 }), i[11] || (i[11] = Bl("\xA0WebGL mtg"))]), _: 1 }), Ie(t).dark.isActive ? (Gn(), Ll(Ie(Ze), { key: 0, dense: "", flat: "", round: "", icon: Ie(Ww), onClick: i[1] || (i[1] = (s) => Ie(t).dark.set(false)) }, null, 8, ["icon"])) : gc("", true), Ie(t).dark.isActive ? gc("", true) : (Gn(), Ll(Ie(Ze), { key: 1, dense: "", flat: "", round: "", icon: Ie(Kw), onClick: i[2] || (i[2] = (s) => Ie(t).dark.set(true)) }, null, 8, ["icon"])), Je(Ie(Ze), { dense: "", flat: "", round: "", icon: "menu", onClick: i[3] || (i[3] = (s) => pt(l) ? l.value = !Ie(l) : l = !Ie(l)) })]), _: 1 })]), _: 1 }), Je(Ie(xd), { modelValue: Ie(n), "onUpdate:modelValue": i[8] || (i[8] = (s) => pt(n) ? n.value = s : n = s), side: "left", bordered: "", mini: Ie(a), overlay: "" }, { default: At(() => [Je(Ie(z1), { class: "fit" }, { default: At(() => [Je(Ie(Rh), { class: "menu-list padding" }, { default: At(() => [sn((Gn(), Ll(Ie(Ca), { clickable: "", onMouseover: i[4] || (i[4] = (s) => pt(a) ? a.value = false : a = false), onMouseout: i[5] || (i[5] = (s) => pt(a) ? a.value = true : a = true) }, { default: At(() => [Je(Ie(mn), { avatar: "" }, { default: At(() => [Je(Ie(et), { name: "inbox" })]), _: 1 }), Je(Ie(mn), null, { default: At(() => i[12] || (i[12] = [Bl("inbox")])), _: 1 })]), _: 1 })), [[c]]), sn((Gn(), Ll(Ie(Ca), { clickable: "", onMouseover: i[6] || (i[6] = (s) => pt(a) ? a.value = false : a = false), onMouseout: i[7] || (i[7] = (s) => pt(a) ? a.value = true : a = true) }, { default: At(() => [Je(Ie(mn), { avatar: "" }, { default: At(() => [Je(Ie(et), { name: "login" })]), _: 1 }), Je(Ie(mn), null, { default: At(() => i[13] || (i[13] = [Bl("login")])), _: 1 })]), _: 1 })), [[c]])]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["modelValue", "mini"]), Je(Ie(xd), { modelValue: Ie(l), "onUpdate:modelValue": i[9] || (i[9] = (s) => pt(l) ? l.value = s : l = s), side: "right", bordered: "", overlay: "" }, { default: At(() => i[14] || (i[14] = [Bl("right")])), _: 1 }, 8, ["modelValue"]), Je(Ie(B1), null, { default: At(() => [Je(u)]), _: 1 }), Je(Ie(v1), { class: "bg-grey-8 text-orange", elevated: "", id: "footer" }, { default: At(() => [Je(Ie(Hd), null, { default: At(() => [Je(Ie(jd), { style: { "font-size": "1.0em" } }, { default: At(() => [Je(Ie($u), { class: "q-mr-sm", size: "sm" }, { default: At(() => i[15] || (i[15] = [Ln("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" }, null, -1)])), _: 1 }), Bl("\xA0vite / vue / quasar / wasm / webgl mtg \xA0mode: " + Lf(Ie(r)), 1)]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 });
  };
} });
/*!
* vue-router v4.5.0
* (c) 2024 Eduardo San Martin Morote
* @license MIT
*/
const ua = typeof document < "u";
function vg(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Gw(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && vg(e.default);
}
const ut = Object.assign;
function au(e, t) {
  const n = {};
  for (const l in t) {
    const a = t[l];
    n[l] = An(a) ? a.map(e) : e(a);
  }
  return n;
}
const sr = () => {
}, An = Array.isArray, mg = /#/g, Xw = /&/g, Zw = /\//g, Jw = /=/g, eS = /\?/g, hg = /\+/g, tS = /%5B/g, nS = /%5D/g, gg = /%5E/g, lS = /%60/g, bg = /%7B/g, aS = /%7C/g, yg = /%7D/g, rS = /%20/g;
function Qs(e) {
  return encodeURI("" + e).replace(aS, "|").replace(tS, "[").replace(nS, "]");
}
function oS(e) {
  return Qs(e).replace(bg, "{").replace(yg, "}").replace(gg, "^");
}
function Uu(e) {
  return Qs(e).replace(hg, "%2B").replace(rS, "+").replace(mg, "%23").replace(Xw, "%26").replace(lS, "`").replace(bg, "{").replace(yg, "}").replace(gg, "^");
}
function iS(e) {
  return Uu(e).replace(Jw, "%3D");
}
function uS(e) {
  return Qs(e).replace(mg, "%23").replace(eS, "%3F");
}
function sS(e) {
  return e == null ? "" : uS(e).replace(Zw, "%2F");
}
function xr(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const cS = /\/$/, dS = (e) => e.replace(cS, "");
function ru(e, t, n = "/") {
  let l, a = {}, r = "", o = "";
  const i = t.indexOf("#");
  let u = t.indexOf("?");
  return i < u && i >= 0 && (u = -1), u > -1 && (l = t.slice(0, u), r = t.slice(u + 1, i > -1 ? i : t.length), a = e(r)), i > -1 && (l = l || t.slice(0, i), o = t.slice(i, t.length)), l = hS(l ?? t, n), { fullPath: l + (r && "?") + r + o, path: l, query: a, hash: xr(o) };
}
function fS(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function sf(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function vS(e, t, n) {
  const l = t.matched.length - 1, a = n.matched.length - 1;
  return l > -1 && l === a && ka(t.matched[l], n.matched[a]) && pg(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function ka(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function pg(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (const n in e) if (!mS(e[n], t[n])) return false;
  return true;
}
function mS(e, t) {
  return An(e) ? cf(e, t) : An(t) ? cf(t, e) : e === t;
}
function cf(e, t) {
  return An(t) ? e.length === t.length && e.every((n, l) => n === t[l]) : e.length === 1 && e[0] === t;
}
function hS(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"), l = e.split("/"), a = l[l.length - 1];
  (a === ".." || a === ".") && l.push("");
  let r = n.length - 1, o, i;
  for (o = 0; o < l.length; o++) if (i = l[o], i !== ".") if (i === "..") r > 1 && r--;
  else break;
  return n.slice(0, r).join("/") + "/" + l.slice(o).join("/");
}
const ol = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
var Cr;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Cr || (Cr = {}));
var cr;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(cr || (cr = {}));
function gS(e) {
  if (!e) if (ua) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), dS(e);
}
const bS = /^[^#]+#/;
function yS(e, t) {
  return e.replace(bS, "#") + t;
}
function pS(e, t) {
  const n = document.documentElement.getBoundingClientRect(), l = e.getBoundingClientRect();
  return { behavior: t.behavior, left: l.left - n.left - (t.left || 0), top: l.top - n.top - (t.top || 0) };
}
const hi = () => ({ left: window.scrollX, top: window.scrollY });
function _S(e) {
  let t;
  if ("el" in e) {
    const n = e.el, l = typeof n == "string" && n.startsWith("#"), a = typeof n == "string" ? l ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!a) return;
    t = pS(a, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function df(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Qu = /* @__PURE__ */ new Map();
function wS(e, t) {
  Qu.set(e, t);
}
function SS(e) {
  const t = Qu.get(e);
  return Qu.delete(e), t;
}
let xS = () => location.protocol + "//" + location.host;
function _g(e, t) {
  const { pathname: n, search: l, hash: a } = t, r = e.indexOf("#");
  if (r > -1) {
    let i = a.includes(e.slice(r)) ? e.slice(r).length : 1, u = a.slice(i);
    return u[0] !== "/" && (u = "/" + u), sf(u, "");
  }
  return sf(n, e) + l + a;
}
function CS(e, t, n, l) {
  let a = [], r = [], o = null;
  const i = ({ state: m }) => {
    const h = _g(e, location), g = n.value, _ = t.value;
    let w = 0;
    if (m) {
      if (n.value = h, t.value = m, o && o === g) {
        o = null;
        return;
      }
      w = _ ? m.position - _.position : 0;
    } else l(h);
    a.forEach((k) => {
      k(n.value, g, { delta: w, type: Cr.pop, direction: w ? w > 0 ? cr.forward : cr.back : cr.unknown });
    });
  };
  function u() {
    o = n.value;
  }
  function c(m) {
    a.push(m);
    const h = () => {
      const g = a.indexOf(m);
      g > -1 && a.splice(g, 1);
    };
    return r.push(h), h;
  }
  function s() {
    const { history: m } = window;
    m.state && m.replaceState(ut({}, m.state, { scroll: hi() }), "");
  }
  function f() {
    for (const m of r) m();
    r = [], window.removeEventListener("popstate", i), window.removeEventListener("beforeunload", s);
  }
  return window.addEventListener("popstate", i), window.addEventListener("beforeunload", s, { passive: true }), { pauseListeners: u, listen: c, destroy: f };
}
function ff(e, t, n, l = false, a = false) {
  return { back: e, current: t, forward: n, replaced: l, position: window.history.length, scroll: a ? hi() : null };
}
function kS(e) {
  const { history: t, location: n } = window, l = { value: _g(e, n) }, a = { value: t.state };
  a.value || r(l.value, { back: null, current: l.value, forward: null, position: t.length - 1, replaced: true, scroll: null }, true);
  function r(u, c, s) {
    const f = e.indexOf("#"), m = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + u : xS() + e + u;
    try {
      t[s ? "replaceState" : "pushState"](c, "", m), a.value = c;
    } catch (h) {
      console.error(h), n[s ? "replace" : "assign"](m);
    }
  }
  function o(u, c) {
    const s = ut({}, t.state, ff(a.value.back, u, a.value.forward, true), c, { position: a.value.position });
    r(u, s, true), l.value = u;
  }
  function i(u, c) {
    const s = ut({}, a.value, t.state, { forward: u, scroll: hi() });
    r(s.current, s, true);
    const f = ut({}, ff(l.value, u, null), { position: s.position + 1 }, c);
    r(u, f, false), l.value = u;
  }
  return { location: l, state: a, push: i, replace: o };
}
function qS(e) {
  e = gS(e);
  const t = kS(e), n = CS(e, t.state, t.location, t.replace);
  function l(r, o = true) {
    o || n.pauseListeners(), history.go(r);
  }
  const a = ut({ location: "", base: e, go: l, createHref: yS.bind(null, e) }, t, n);
  return Object.defineProperty(a, "location", { enumerable: true, get: () => t.location.value }), Object.defineProperty(a, "state", { enumerable: true, get: () => t.state.value }), a;
}
function TS(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), qS(e);
}
function MS(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function wg(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Sg = Symbol("");
var vf;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(vf || (vf = {}));
function qa(e, t) {
  return ut(new Error(), { type: e, [Sg]: true }, t);
}
function jn(e, t) {
  return e instanceof Error && Sg in e && (t == null || !!(e.type & t));
}
const mf = "[^/]+?", ES = { sensitive: false, strict: false, start: true, end: true }, AS = /[.+*?^${}()[\]/\\]/g;
function RS(e, t) {
  const n = ut({}, ES, t), l = [];
  let a = n.start ? "^" : "";
  const r = [];
  for (const c of e) {
    const s = c.length ? [] : [90];
    n.strict && !c.length && (a += "/");
    for (let f = 0; f < c.length; f++) {
      const m = c[f];
      let h = 40 + (n.sensitive ? 0.25 : 0);
      if (m.type === 0) f || (a += "/"), a += m.value.replace(AS, "\\$&"), h += 40;
      else if (m.type === 1) {
        const { value: g, repeatable: _, optional: w, regexp: k } = m;
        r.push({ name: g, repeatable: _, optional: w });
        const p = k || mf;
        if (p !== mf) {
          h += 10;
          try {
            new RegExp(`(${p})`);
          } catch (b) {
            throw new Error(`Invalid custom RegExp for param "${g}" (${p}): ` + b.message);
          }
        }
        let y = _ ? `((?:${p})(?:/(?:${p}))*)` : `(${p})`;
        f || (y = w && c.length < 2 ? `(?:/${y})` : "/" + y), w && (y += "?"), a += y, h += 20, w && (h += -8), _ && (h += -20), p === ".*" && (h += -50);
      }
      s.push(h);
    }
    l.push(s);
  }
  if (n.strict && n.end) {
    const c = l.length - 1;
    l[c][l[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (a += "/?"), n.end ? a += "$" : n.strict && !a.endsWith("/") && (a += "(?:/|$)");
  const o = new RegExp(a, n.sensitive ? "" : "i");
  function i(c) {
    const s = c.match(o), f = {};
    if (!s) return null;
    for (let m = 1; m < s.length; m++) {
      const h = s[m] || "", g = r[m - 1];
      f[g.name] = h && g.repeatable ? h.split("/") : h;
    }
    return f;
  }
  function u(c) {
    let s = "", f = false;
    for (const m of e) {
      (!f || !s.endsWith("/")) && (s += "/"), f = false;
      for (const h of m) if (h.type === 0) s += h.value;
      else if (h.type === 1) {
        const { value: g, repeatable: _, optional: w } = h, k = g in c ? c[g] : "";
        if (An(k) && !_) throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
        const p = An(k) ? k.join("/") : k;
        if (!p) if (w) m.length < 2 && (s.endsWith("/") ? s = s.slice(0, -1) : f = true);
        else throw new Error(`Missing required param "${g}"`);
        s += p;
      }
    }
    return s || "/";
  }
  return { re: o, score: l, keys: r, parse: i, stringify: u };
}
function $S(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const l = t[n] - e[n];
    if (l) return l;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function xg(e, t) {
  let n = 0;
  const l = e.score, a = t.score;
  for (; n < l.length && n < a.length; ) {
    const r = $S(l[n], a[n]);
    if (r) return r;
    n++;
  }
  if (Math.abs(a.length - l.length) === 1) {
    if (hf(l)) return 1;
    if (hf(a)) return -1;
  }
  return a.length - l.length;
}
function hf(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const PS = { type: 0, value: "" }, LS = /[a-zA-Z0-9_]/;
function BS(e) {
  if (!e) return [[]];
  if (e === "/") return [[PS]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${n})/"${c}": ${h}`);
  }
  let n = 0, l = n;
  const a = [];
  let r;
  function o() {
    r && a.push(r), r = [];
  }
  let i = 0, u, c = "", s = "";
  function f() {
    c && (n === 0 ? r.push({ type: 0, value: c }) : n === 1 || n === 2 || n === 3 ? (r.length > 1 && (u === "*" || u === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), r.push({ type: 1, value: c, regexp: s, repeatable: u === "*" || u === "+", optional: u === "*" || u === "?" })) : t("Invalid state to consume buffer"), c = "");
  }
  function m() {
    c += u;
  }
  for (; i < e.length; ) {
    if (u = e[i++], u === "\\" && n !== 2) {
      l = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        u === "/" ? (c && f(), o()) : u === ":" ? (f(), n = 1) : m();
        break;
      case 4:
        m(), n = l;
        break;
      case 1:
        u === "(" ? n = 2 : LS.test(u) ? m() : (f(), n = 0, u !== "*" && u !== "?" && u !== "+" && i--);
        break;
      case 2:
        u === ")" ? s[s.length - 1] == "\\" ? s = s.slice(0, -1) + u : n = 3 : s += u;
        break;
      case 3:
        f(), n = 0, u !== "*" && u !== "?" && u !== "+" && i--, s = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), f(), o(), a;
}
function FS(e, t, n) {
  const l = RS(BS(e.path), n), a = ut(l, { record: e, parent: t, children: [], alias: [] });
  return t && !a.record.aliasOf == !t.record.aliasOf && t.children.push(a), a;
}
function OS(e, t) {
  const n = [], l = /* @__PURE__ */ new Map();
  t = pf({ strict: false, end: true, sensitive: false }, t);
  function a(f) {
    return l.get(f);
  }
  function r(f, m, h) {
    const g = !h, _ = bf(f);
    _.aliasOf = h && h.record;
    const w = pf(t, f), k = [_];
    if ("alias" in f) {
      const b = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const x of b) k.push(bf(ut({}, _, { components: h ? h.record.components : _.components, path: x, aliasOf: h ? h.record : _ })));
    }
    let p, y;
    for (const b of k) {
      const { path: x } = b;
      if (m && x[0] !== "/") {
        const $ = m.record.path, F = $[$.length - 1] === "/" ? "" : "/";
        b.path = m.record.path + (x && F + x);
      }
      if (p = FS(b, m, w), h ? h.alias.push(p) : (y = y || p, y !== p && y.alias.push(p), g && f.name && !yf(p) && o(f.name)), Cg(p) && u(p), _.children) {
        const $ = _.children;
        for (let F = 0; F < $.length; F++) r($[F], p, h && h.children[F]);
      }
      h = h || p;
    }
    return y ? () => {
      o(y);
    } : sr;
  }
  function o(f) {
    if (wg(f)) {
      const m = l.get(f);
      m && (l.delete(f), n.splice(n.indexOf(m), 1), m.children.forEach(o), m.alias.forEach(o));
    } else {
      const m = n.indexOf(f);
      m > -1 && (n.splice(m, 1), f.record.name && l.delete(f.record.name), f.children.forEach(o), f.alias.forEach(o));
    }
  }
  function i() {
    return n;
  }
  function u(f) {
    const m = IS(f, n);
    n.splice(m, 0, f), f.record.name && !yf(f) && l.set(f.record.name, f);
  }
  function c(f, m) {
    let h, g = {}, _, w;
    if ("name" in f && f.name) {
      if (h = l.get(f.name), !h) throw qa(1, { location: f });
      w = h.record.name, g = ut(gf(m.params, h.keys.filter((y) => !y.optional).concat(h.parent ? h.parent.keys.filter((y) => y.optional) : []).map((y) => y.name)), f.params && gf(f.params, h.keys.map((y) => y.name))), _ = h.stringify(g);
    } else if (f.path != null) _ = f.path, h = n.find((y) => y.re.test(_)), h && (g = h.parse(_), w = h.record.name);
    else {
      if (h = m.name ? l.get(m.name) : n.find((y) => y.re.test(m.path)), !h) throw qa(1, { location: f, currentLocation: m });
      w = h.record.name, g = ut({}, m.params, f.params), _ = h.stringify(g);
    }
    const k = [];
    let p = h;
    for (; p; ) k.unshift(p.record), p = p.parent;
    return { name: w, path: _, params: g, matched: k, meta: zS(k) };
  }
  e.forEach((f) => r(f));
  function s() {
    n.length = 0, l.clear();
  }
  return { addRoute: r, resolve: c, removeRoute: o, clearRoutes: s, getRoutes: i, getRecordMatcher: a };
}
function gf(e, t) {
  const n = {};
  for (const l of t) l in e && (n[l] = e[l]);
  return n;
}
function bf(e) {
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: VS(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function VS(e) {
  const t = {}, n = e.props || false;
  if ("component" in e) t.default = n;
  else for (const l in e.components) t[l] = typeof n == "object" ? n[l] : n;
  return t;
}
function yf(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function zS(e) {
  return e.reduce((t, n) => ut(t, n.meta), {});
}
function pf(e, t) {
  const n = {};
  for (const l in e) n[l] = l in t ? t[l] : e[l];
  return n;
}
function IS(e, t) {
  let n = 0, l = t.length;
  for (; n !== l; ) {
    const r = n + l >> 1;
    xg(e, t[r]) < 0 ? l = r : n = r + 1;
  }
  const a = DS(e);
  return a && (l = t.lastIndexOf(a, l - 1)), l;
}
function DS(e) {
  let t = e;
  for (; t = t.parent; ) if (Cg(t) && xg(e, t) === 0) return t;
}
function Cg({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function NS(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const l = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let a = 0; a < l.length; ++a) {
    const r = l[a].replace(hg, " "), o = r.indexOf("="), i = xr(o < 0 ? r : r.slice(0, o)), u = o < 0 ? null : xr(r.slice(o + 1));
    if (i in t) {
      let c = t[i];
      An(c) || (c = t[i] = [c]), c.push(u);
    } else t[i] = u;
  }
  return t;
}
function _f(e) {
  let t = "";
  for (let n in e) {
    const l = e[n];
    if (n = iS(n), l == null) {
      l !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (An(l) ? l.map((r) => r && Uu(r)) : [l && Uu(l)]).forEach((r) => {
      r !== void 0 && (t += (t.length ? "&" : "") + n, r != null && (t += "=" + r));
    });
  }
  return t;
}
function HS(e) {
  const t = {};
  for (const n in e) {
    const l = e[n];
    l !== void 0 && (t[n] = An(l) ? l.map((a) => a == null ? null : "" + a) : l == null ? l : "" + l);
  }
  return t;
}
const jS = Symbol(""), wf = Symbol(""), Ks = Symbol(""), kg = Symbol(""), Ku = Symbol("");
function ja() {
  let e = [];
  function t(l) {
    return e.push(l), () => {
      const a = e.indexOf(l);
      a > -1 && e.splice(a, 1);
    };
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function fl(e, t, n, l, a, r = (o) => o()) {
  const o = l && (l.enterCallbacks[a] = l.enterCallbacks[a] || []);
  return () => new Promise((i, u) => {
    const c = (m) => {
      m === false ? u(qa(4, { from: n, to: t })) : m instanceof Error ? u(m) : MS(m) ? u(qa(2, { from: t, to: m })) : (o && l.enterCallbacks[a] === o && typeof m == "function" && o.push(m), i());
    }, s = r(() => e.call(l && l.instances[a], t, n, c));
    let f = Promise.resolve(s);
    e.length < 3 && (f = f.then(c)), f.catch((m) => u(m));
  });
}
function ou(e, t, n, l, a = (r) => r()) {
  const r = [];
  for (const o of e) for (const i in o.components) {
    let u = o.components[i];
    if (!(t !== "beforeRouteEnter" && !o.instances[i])) if (vg(u)) {
      const s = (u.__vccOpts || u)[t];
      s && r.push(fl(s, n, l, o, i, a));
    } else {
      let c = u();
      r.push(() => c.then((s) => {
        if (!s) throw new Error(`Couldn't resolve component "${i}" at "${o.path}"`);
        const f = Gw(s) ? s.default : s;
        o.mods[i] = s, o.components[i] = f;
        const h = (f.__vccOpts || f)[t];
        return h && fl(h, n, l, o, i, a)();
      }));
    }
  }
  return r;
}
function Sf(e) {
  const t = Tt(Ks), n = Tt(kg), l = v(() => {
    const u = Ie(e.to);
    return t.resolve(u);
  }), a = v(() => {
    const { matched: u } = l.value, { length: c } = u, s = u[c - 1], f = n.matched;
    if (!s || !f.length) return -1;
    const m = f.findIndex(ka.bind(null, s));
    if (m > -1) return m;
    const h = xf(u[c - 2]);
    return c > 1 && xf(s) === h && f[f.length - 1].path !== h ? f.findIndex(ka.bind(null, u[c - 2])) : m;
  }), r = v(() => a.value > -1 && YS(n.params, l.value.params)), o = v(() => a.value > -1 && a.value === n.matched.length - 1 && pg(n.params, l.value.params));
  function i(u = {}) {
    if (WS(u)) {
      const c = t[Ie(e.replace) ? "replace" : "push"](Ie(e.to)).catch(sr);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c;
    }
    return Promise.resolve();
  }
  return { route: l, href: v(() => l.value.href), isActive: r, isExactActive: o, navigate: i };
}
function US(e) {
  return e.length === 1 ? e[0] : e;
}
const QS = /* @__PURE__ */ Ta({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" } }, useLink: Sf, setup(e, { slots: t }) {
  const n = Fn(Sf(e)), { options: l } = Tt(Ks), a = v(() => ({ [Cf(e.activeClass, l.linkActiveClass, "router-link-active")]: n.isActive, [Cf(e.exactActiveClass, l.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive }));
  return () => {
    const r = t.default && US(t.default(n));
    return e.custom ? r : d("a", { "aria-current": n.isExactActive ? e.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: a.value }, r);
  };
} }), KS = QS;
function WS(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), true;
  }
}
function YS(e, t) {
  for (const n in t) {
    const l = t[n], a = e[n];
    if (typeof l == "string") {
      if (l !== a) return false;
    } else if (!An(a) || a.length !== l.length || l.some((r, o) => r !== a[o])) return false;
  }
  return true;
}
function xf(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Cf = (e, t, n) => e ?? t ?? n, GS = /* @__PURE__ */ Ta({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: n }) {
  const l = Tt(Ku), a = v(() => e.route || l.value), r = Tt(wf, 0), o = v(() => {
    let c = Ie(r);
    const { matched: s } = a.value;
    let f;
    for (; (f = s[c]) && !f.components; ) c++;
    return c;
  }), i = v(() => a.value.matched[o.value]);
  hn(wf, v(() => o.value + 1)), hn(jS, i), hn(Ku, a);
  const u = K();
  return be(() => [u.value, i.value, e.name], ([c, s, f], [m, h, g]) => {
    s && (s.instances[f] = c, h && h !== s && c && c === m && (s.leaveGuards.size || (s.leaveGuards = h.leaveGuards), s.updateGuards.size || (s.updateGuards = h.updateGuards))), c && s && (!h || !ka(s, h) || !m) && (s.enterCallbacks[f] || []).forEach((_) => _(c));
  }, { flush: "post" }), () => {
    const c = a.value, s = e.name, f = i.value, m = f && f.components[s];
    if (!m) return kf(n.default, { Component: m, route: c });
    const h = f.props[s], g = h ? h === true ? c.params : typeof h == "function" ? h(c) : h : null, w = d(m, ut({}, g, t, { onVnodeUnmounted: (k) => {
      k.component.isUnmounted && (f.instances[s] = null);
    }, ref: u }));
    return kf(n.default, { Component: w, route: c }) || w;
  };
} });
function kf(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const XS = GS;
function ZS(e) {
  const t = OS(e.routes, e), n = e.parseQuery || NS, l = e.stringifyQuery || _f, a = e.history, r = ja(), o = ja(), i = ja(), u = s0(ol);
  let c = ol;
  ua && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const s = au.bind(null, (A) => "" + A), f = au.bind(null, sS), m = au.bind(null, xr);
  function h(A, te) {
    let V, j;
    return wg(A) ? (V = t.getRecordMatcher(A), j = te) : j = A, t.addRoute(j, V);
  }
  function g(A) {
    const te = t.getRecordMatcher(A);
    te && t.removeRoute(te);
  }
  function _() {
    return t.getRoutes().map((A) => A.record);
  }
  function w(A) {
    return !!t.getRecordMatcher(A);
  }
  function k(A, te) {
    if (te = ut({}, te || u.value), typeof A == "string") {
      const N = ru(n, A, te.path), ne = t.resolve({ path: N.path }, te), le = a.createHref(N.fullPath);
      return ut(N, ne, { params: m(ne.params), hash: xr(N.hash), redirectedFrom: void 0, href: le });
    }
    let V;
    if (A.path != null) V = ut({}, A, { path: ru(n, A.path, te.path).path });
    else {
      const N = ut({}, A.params);
      for (const ne in N) N[ne] == null && delete N[ne];
      V = ut({}, A, { params: f(N) }), te.params = f(te.params);
    }
    const j = t.resolve(V, te), ue = A.hash || "";
    j.params = s(m(j.params));
    const S = fS(l, ut({}, A, { hash: oS(ue), path: j.path })), E = a.createHref(S);
    return ut({ fullPath: S, hash: ue, query: l === _f ? HS(A.query) : A.query || {} }, j, { redirectedFrom: void 0, href: E });
  }
  function p(A) {
    return typeof A == "string" ? ru(n, A, u.value.path) : ut({}, A);
  }
  function y(A, te) {
    if (c !== A) return qa(8, { from: te, to: A });
  }
  function b(A) {
    return F(A);
  }
  function x(A) {
    return b(ut(p(A), { replace: true }));
  }
  function $(A) {
    const te = A.matched[A.matched.length - 1];
    if (te && te.redirect) {
      const { redirect: V } = te;
      let j = typeof V == "function" ? V(A) : V;
      return typeof j == "string" && (j = j.includes("?") || j.includes("#") ? j = p(j) : { path: j }, j.params = {}), ut({ query: A.query, hash: A.hash, params: j.path != null ? {} : A.params }, j);
    }
  }
  function F(A, te) {
    const V = c = k(A), j = u.value, ue = A.state, S = A.force, E = A.replace === true, N = $(V);
    if (N) return F(ut(p(N), { state: typeof N == "object" ? ut({}, ue, N.state) : ue, force: S, replace: E }), te || V);
    const ne = V;
    ne.redirectedFrom = te;
    let le;
    return !S && vS(l, j, V) && (le = qa(16, { to: ne, from: j }), W(j, j, true, false)), (le ? Promise.resolve(le) : P(ne, j)).catch((X) => jn(X) ? jn(X, 2) ? X : ye(X) : O(X, ne, j)).then((X) => {
      if (X) {
        if (jn(X, 2)) return F(ut({ replace: E }, p(X.to), { state: typeof X.to == "object" ? ut({}, ue, X.to.state) : ue, force: S }), te || ne);
      } else X = q(ne, j, true, E, ue);
      return I(ne, j, X), X;
    });
  }
  function D(A, te) {
    const V = y(A, te);
    return V ? Promise.reject(V) : Promise.resolve();
  }
  function B(A) {
    const te = G.values().next().value;
    return te && typeof te.runWithContext == "function" ? te.runWithContext(A) : A();
  }
  function P(A, te) {
    let V;
    const [j, ue, S] = JS(A, te);
    V = ou(j.reverse(), "beforeRouteLeave", A, te);
    for (const N of j) N.leaveGuards.forEach((ne) => {
      V.push(fl(ne, A, te));
    });
    const E = D.bind(null, A, te);
    return V.push(E), R(V).then(() => {
      V = [];
      for (const N of r.list()) V.push(fl(N, A, te));
      return V.push(E), R(V);
    }).then(() => {
      V = ou(ue, "beforeRouteUpdate", A, te);
      for (const N of ue) N.updateGuards.forEach((ne) => {
        V.push(fl(ne, A, te));
      });
      return V.push(E), R(V);
    }).then(() => {
      V = [];
      for (const N of S) if (N.beforeEnter) if (An(N.beforeEnter)) for (const ne of N.beforeEnter) V.push(fl(ne, A, te));
      else V.push(fl(N.beforeEnter, A, te));
      return V.push(E), R(V);
    }).then(() => (A.matched.forEach((N) => N.enterCallbacks = {}), V = ou(S, "beforeRouteEnter", A, te, B), V.push(E), R(V))).then(() => {
      V = [];
      for (const N of o.list()) V.push(fl(N, A, te));
      return V.push(E), R(V);
    }).catch((N) => jn(N, 8) ? N : Promise.reject(N));
  }
  function I(A, te, V) {
    i.list().forEach((j) => B(() => j(A, te, V)));
  }
  function q(A, te, V, j, ue) {
    const S = y(A, te);
    if (S) return S;
    const E = te === ol, N = ua ? history.state : {};
    V && (j || E ? a.replace(A.fullPath, ut({ scroll: E && N && N.scroll }, ue)) : a.push(A.fullPath, ue)), u.value = A, W(A, te, V, E), ye();
  }
  let M;
  function C() {
    M || (M = a.listen((A, te, V) => {
      if (!fe.listening) return;
      const j = k(A), ue = $(j);
      if (ue) {
        F(ut(ue, { replace: true, force: true }), j).catch(sr);
        return;
      }
      c = j;
      const S = u.value;
      ua && wS(df(S.fullPath, V.delta), hi()), P(j, S).catch((E) => jn(E, 12) ? E : jn(E, 2) ? (F(ut(p(E.to), { force: true }), j).then((N) => {
        jn(N, 20) && !V.delta && V.type === Cr.pop && a.go(-1, false);
      }).catch(sr), Promise.reject()) : (V.delta && a.go(-V.delta, false), O(E, j, S))).then((E) => {
        E = E || q(j, S, false), E && (V.delta && !jn(E, 8) ? a.go(-V.delta, false) : V.type === Cr.pop && jn(E, 20) && a.go(-1, false)), I(j, S, E);
      }).catch(sr);
    }));
  }
  let H = ja(), Y = ja(), L;
  function O(A, te, V) {
    ye(A);
    const j = Y.list();
    return j.length ? j.forEach((ue) => ue(A, te, V)) : console.error(A), Promise.reject(A);
  }
  function U() {
    return L && u.value !== ol ? Promise.resolve() : new Promise((A, te) => {
      H.add([A, te]);
    });
  }
  function ye(A) {
    return L || (L = !A, C(), H.list().forEach(([te, V]) => A ? V(A) : te()), H.reset()), A;
  }
  function W(A, te, V, j) {
    const { scrollBehavior: ue } = e;
    if (!ua || !ue) return Promise.resolve();
    const S = !V && SS(df(A.fullPath, 0)) || (j || !V) && history.state && history.state.scroll || null;
    return We().then(() => ue(A, te, S)).then((E) => E && _S(E)).catch((E) => O(E, A, te));
  }
  const T = (A) => a.go(A);
  let ee;
  const G = /* @__PURE__ */ new Set(), fe = { currentRoute: u, listening: true, addRoute: h, removeRoute: g, clearRoutes: t.clearRoutes, hasRoute: w, getRoutes: _, resolve: k, options: e, push: b, replace: x, go: T, back: () => T(-1), forward: () => T(1), beforeEach: r.add, beforeResolve: o.add, afterEach: i.add, onError: Y.add, isReady: U, install(A) {
    const te = this;
    A.component("RouterLink", KS), A.component("RouterView", XS), A.config.globalProperties.$router = te, Object.defineProperty(A.config.globalProperties, "$route", { enumerable: true, get: () => Ie(u) }), ua && !ee && u.value === ol && (ee = true, b(a.location).catch((ue) => {
    }));
    const V = {};
    for (const ue in ol) Object.defineProperty(V, ue, { get: () => u.value[ue], enumerable: true });
    A.provide(Ks, te), A.provide(kg, os(V)), A.provide(Ku, u);
    const j = A.unmount;
    G.add(A), A.unmount = function() {
      G.delete(A), G.size < 1 && (c = ol, M && M(), M = null, u.value = ol, ee = false, L = false), j();
    };
  } };
  function R(A) {
    return A.reduce((te, V) => te.then(() => B(V)), Promise.resolve());
  }
  return fe;
}
function JS(e, t) {
  const n = [], l = [], a = [], r = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < r; o++) {
    const i = t.matched[o];
    i && (e.matched.find((c) => ka(c, i)) ? l.push(i) : n.push(i));
    const u = e.matched[o];
    u && (t.matched.find((c) => ka(c, u)) || a.push(u));
  }
  return [n, l, a];
}
let Jt;
const qg = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && qg.decode();
let Ga = null;
function co() {
  return (Ga === null || Ga.byteLength === 0) && (Ga = new Uint8Array(Jt.memory.buffer)), Ga;
}
function iu(e, t) {
  return e = e >>> 0, qg.decode(co().subarray(e, e + t));
}
function ex(e) {
  const t = Jt.__externref_table_alloc();
  return Jt.__wbindgen_export_2.set(t, e), t;
}
function tx(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    const l = ex(n);
    Jt.__wbindgen_exn_store(l);
  }
}
function nx(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    let l = function() {
      try {
        return n instanceof Error ? `${n.message}

Stack:
${n.stack}` : n.toString();
      } catch {
        return "<failed to stringify thrown value>";
      }
    }();
    throw console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", l), n;
  }
}
let Wu = 0;
const fo = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, lx = typeof fo.encodeInto == "function" ? function(e, t) {
  return fo.encodeInto(e, t);
} : function(e, t) {
  const n = fo.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function ax(e, t, n) {
  if (typeof e != "string") throw new Error(`expected a string argument, found ${typeof e}`);
  if (n === void 0) {
    const i = fo.encode(e), u = t(i.length, 1) >>> 0;
    return co().subarray(u, u + i.length).set(i), Wu = i.length, u;
  }
  let l = e.length, a = t(l, 1) >>> 0;
  const r = co();
  let o = 0;
  for (; o < l; o++) {
    const i = e.charCodeAt(o);
    if (i > 127) break;
    r[a + o] = i;
  }
  if (o !== l) {
    o !== 0 && (e = e.slice(o)), a = n(a, l, l = o + e.length * 3, 1) >>> 0;
    const i = co().subarray(a + o, a + l), u = lx(e, i);
    if (u.read !== e.length) throw new Error("failed to pass whole string");
    o += u.written, a = n(a, l, o, 1) >>> 0;
  }
  return Wu = o, a;
}
function rx(e) {
  const t = Jt.__wbindgen_export_2.get(e);
  return Jt.__externref_table_dealloc(e), t;
}
function ox(e) {
  const t = ax(e, Jt.__wbindgen_malloc, Jt.__wbindgen_realloc), n = Wu, l = Jt.mtg(t, n);
  if (l[1]) throw rx(l[0]);
}
async function ix(e, t) {
  if (typeof Response == "function" && e instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(e, t);
    } catch (l) {
      if (e.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", l);
      else throw l;
    }
    const n = await e.arrayBuffer();
    return await WebAssembly.instantiate(n, t);
  } else {
    const n = await WebAssembly.instantiate(e, t);
    return n instanceof WebAssembly.Instance ? { instance: n, module: e } : n;
  }
}
function ux() {
  const e = {};
  return e.wbg = {}, e.wbg.__wbg_cb_d0b9dcdfbbb21123 = function() {
    return tx(function(t, n) {
      cb(iu(t, n));
    }, arguments);
  }, e.wbg.__wbg_log_6eff8ac810e5dae1 = function() {
    return nx(function(t, n) {
      log(iu(t, n));
    }, arguments);
  }, e.wbg.__wbindgen_init_externref_table = function() {
    const t = Jt.__wbindgen_export_2, n = t.grow(4);
    t.set(0, void 0), t.set(n + 0, void 0), t.set(n + 1, null), t.set(n + 2, true), t.set(n + 3, false);
  }, e.wbg.__wbindgen_throw = function(t, n) {
    throw new Error(iu(t, n));
  }, e;
}
function sx(e, t) {
  return Jt = e.exports, Tg.__wbindgen_wasm_module = t, Ga = null, Jt.__wbindgen_start(), Jt;
}
async function Tg(e) {
  if (Jt !== void 0) return Jt;
  typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("" + new URL("wasm_rust_mtg_bg-DocDiN2i.wasm", import.meta.url).href, import.meta.url));
  const t = ux();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: l } = await ix(await e, t);
  return sx(n, l);
}
const cx = /* @__PURE__ */ Ta({ __name: "HelloWorld", setup(e) {
  const t = () => {
    ox("test");
  };
  return (n, l) => {
    const a = ds("router-view");
    return Gn(), Bv(rn, null, [Je(Ie(Ze), { class: "q-ma-lg", color: "primary", onClick: t }, { default: At(() => l[0] || (l[0] = [Bl("test")])), _: 1 }), Je(a)], 64);
  };
} }), dx = fg(cx, [["__scopeId", "data-v-17fee452"]]);
var fx = 1e-6, qf = typeof Float32Array < "u" ? Float32Array : Array;
Math.hypot || (Math.hypot = function() {
  for (var e = 0, t = arguments.length; t--; ) e += arguments[t] * arguments[t];
  return Math.sqrt(e);
});
function uu() {
  var e = new qf(16);
  return qf != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e;
}
function vx(e, t) {
  if (e === t) {
    var n = t[1], l = t[2], a = t[3], r = t[6], o = t[7], i = t[11];
    e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = n, e[6] = t[9], e[7] = t[13], e[8] = l, e[9] = r, e[11] = t[14], e[12] = a, e[13] = o, e[14] = i;
  } else e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15];
  return e;
}
function mx(e, t) {
  var n = t[0], l = t[1], a = t[2], r = t[3], o = t[4], i = t[5], u = t[6], c = t[7], s = t[8], f = t[9], m = t[10], h = t[11], g = t[12], _ = t[13], w = t[14], k = t[15], p = n * i - l * o, y = n * u - a * o, b = n * c - r * o, x = l * u - a * i, $ = l * c - r * i, F = a * c - r * u, D = s * _ - f * g, B = s * w - m * g, P = s * k - h * g, I = f * w - m * _, q = f * k - h * _, M = m * k - h * w, C = p * M - y * q + b * I + x * P - $ * B + F * D;
  return C ? (C = 1 / C, e[0] = (i * M - u * q + c * I) * C, e[1] = (a * q - l * M - r * I) * C, e[2] = (_ * F - w * $ + k * x) * C, e[3] = (m * $ - f * F - h * x) * C, e[4] = (u * P - o * M - c * B) * C, e[5] = (n * M - a * P + r * B) * C, e[6] = (w * b - g * F - k * y) * C, e[7] = (s * F - m * b + h * y) * C, e[8] = (o * q - i * P + c * D) * C, e[9] = (l * P - n * q - r * D) * C, e[10] = (g * $ - _ * b + k * p) * C, e[11] = (f * b - s * $ - h * p) * C, e[12] = (i * B - o * I - u * D) * C, e[13] = (n * I - l * B + a * D) * C, e[14] = (_ * y - g * x - w * p) * C, e[15] = (s * x - f * y + m * p) * C, e) : null;
}
function su(e, t, n) {
  var l = n[0], a = n[1], r = n[2], o, i, u, c, s, f, m, h, g, _, w, k;
  return t === e ? (e[12] = t[0] * l + t[4] * a + t[8] * r + t[12], e[13] = t[1] * l + t[5] * a + t[9] * r + t[13], e[14] = t[2] * l + t[6] * a + t[10] * r + t[14], e[15] = t[3] * l + t[7] * a + t[11] * r + t[15]) : (o = t[0], i = t[1], u = t[2], c = t[3], s = t[4], f = t[5], m = t[6], h = t[7], g = t[8], _ = t[9], w = t[10], k = t[11], e[0] = o, e[1] = i, e[2] = u, e[3] = c, e[4] = s, e[5] = f, e[6] = m, e[7] = h, e[8] = g, e[9] = _, e[10] = w, e[11] = k, e[12] = o * l + s * a + g * r + t[12], e[13] = i * l + f * a + _ * r + t[13], e[14] = u * l + m * a + w * r + t[14], e[15] = c * l + h * a + k * r + t[15]), e;
}
function cu(e, t, n, l) {
  var a = l[0], r = l[1], o = l[2], i = Math.hypot(a, r, o), u, c, s, f, m, h, g, _, w, k, p, y, b, x, $, F, D, B, P, I, q, M, C, H;
  return i < fx ? null : (i = 1 / i, a *= i, r *= i, o *= i, u = Math.sin(n), c = Math.cos(n), s = 1 - c, f = t[0], m = t[1], h = t[2], g = t[3], _ = t[4], w = t[5], k = t[6], p = t[7], y = t[8], b = t[9], x = t[10], $ = t[11], F = a * a * s + c, D = r * a * s + o * u, B = o * a * s - r * u, P = a * r * s - o * u, I = r * r * s + c, q = o * r * s + a * u, M = a * o * s + r * u, C = r * o * s - a * u, H = o * o * s + c, e[0] = f * F + _ * D + y * B, e[1] = m * F + w * D + b * B, e[2] = h * F + k * D + x * B, e[3] = g * F + p * D + $ * B, e[4] = f * P + _ * I + y * q, e[5] = m * P + w * I + b * q, e[6] = h * P + k * I + x * q, e[7] = g * P + p * I + $ * q, e[8] = f * M + _ * C + y * H, e[9] = m * M + w * C + b * H, e[10] = h * M + k * C + x * H, e[11] = g * M + p * C + $ * H, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e);
}
function hx(e, t, n, l, a) {
  var r = 1 / Math.tan(t / 2), o;
  return e[0] = r / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = r, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, a != null && a !== 1 / 0 ? (o = 1 / (l - a), e[10] = (a + l) * o, e[14] = 2 * a * l * o) : (e[10] = -1, e[14] = -2 * l), e;
}
var gx = hx;
const bx = ["width", "height"], yx = /* @__PURE__ */ Ta({ __name: "WebGL", setup(e) {
  const t = K();
  let n = null;
  const l = { front_0: null, front_1: null, front_2: null, front_3: null, body: null };
  let a = null;
  const r = K([0, 0]), o = K(""), i = K(-1), u = K([0, 0, 0, 0]), c = K(640), s = K(480), f = K(0), m = (L, O, U, ye, W, T, ee) => {
    const G = [];
    for (let fe = 0; fe < 6; ++fe) G.push(L + (fe + ye) % 6 + 1 + ee), G.push(O + (fe + W) % 6 + 1 + ee), G.push(U + (fe + T) % 6 + 1 + ee);
    return G;
  }, h = () => {
    if (n === null) throw new Error("no WebGL context");
    const L = n.createBuffer();
    n.bindBuffer(n.ARRAY_BUFFER, L);
    let O = [0, 0, 0];
    for (let j = 0; j < 6; ++j) {
      const ue = 3.141 * j * 60 / 180;
      O = O.concat([1 * Math.cos(ue), 1 * Math.sin(ue), 0]);
    }
    for (let j = 0; j < 6; ++j) {
      const ue = 3.141 * j * 60 / 180;
      O = O.concat([1 * Math.cos(ue), 1 * Math.sin(ue), 0]);
    }
    for (let j = 0; j < 6; ++j) {
      const ue = 3.141 * j * 60 / 180;
      O = O.concat([1 * Math.cos(ue), 1 * Math.sin(ue), 0.2]);
    }
    for (let j = 0; j < 6; ++j) {
      const ue = 3.141 * j * 60 / 180;
      O = O.concat([1 * Math.cos(ue), 1 * Math.sin(ue), 0.2]);
    }
    for (let j = 0; j < 6; ++j) {
      const ue = 3.141 * j * 60 / 180;
      O = O.concat([1.2 * Math.cos(ue), 1.2 * Math.sin(ue), 0.2]);
    }
    for (let j = 0; j < 6; ++j) {
      const ue = 3.141 * j * 60 / 180;
      O = O.concat([1.2 * Math.cos(ue), 1.2 * Math.sin(ue), 0.2]);
    }
    for (let j = 0; j < 6; ++j) {
      const ue = 3.141 * j * 60 / 180;
      O = O.concat([1.2 * Math.cos(ue), 1.2 * Math.sin(ue), -1]);
    }
    n.bufferData(n.ARRAY_BUFFER, new Float32Array(O), n.STATIC_DRAW);
    let U = [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1];
    for (let j = 0; j < 6; ++j) U = U.concat([1, 1, 1, 1]);
    for (let j = 0; j < 6; ++j) U = U.concat([1, 1, 1, 1]);
    for (let j = 0; j < 6; ++j) U = U.concat([1, 1, 1, 1]);
    for (let j = 0; j < 6; ++j) U = U.concat([1, 1, 1, 1]);
    for (let j = 0; j < 6; ++j) U = U.concat([1, 1, 1, 1]);
    for (let j = 0; j < 6; ++j) U = U.concat([1, 1, 1, 1]);
    for (let j = 0; j < 6; ++j) U = U.concat([1, 1, 1, 1]);
    const ye = n.createBuffer();
    n.bindBuffer(n.ARRAY_BUFFER, ye), n.bufferData(n.ARRAY_BUFFER, new Float32Array(U), n.STATIC_DRAW);
    const W = n.createBuffer();
    let T = [0.5, 0.5];
    for (let j = 0; j < 6; ++j) {
      const ue = 3.141 * j * 60 / 180;
      T = T.concat([0.5 + 0.5 * Math.cos(ue), 0.5 + 0.5 * Math.sin(ue)]);
    }
    for (let j = 0; j < 6; ++j) {
      const ue = 3.141 * j * 60 / 180;
      T = T.concat([0.5 + 0.4 * Math.cos(ue), 0.5 + 0.4 * Math.sin(ue)]);
    }
    for (let j = 0; j < 6; ++j) {
      const ue = 3.141 * j * 60 / 180;
      T = T.concat([0.7 + 0.4 * Math.cos(ue), 0.7 + 0.4 * Math.sin(ue)]);
    }
    for (let j = 0; j < 6; ++j) {
      const ue = 3.141 * j * 60 / 180;
      T = T.concat([0.8 + 0.5 * Math.cos(ue), 0.8 + 0.5 * Math.sin(ue)]);
    }
    for (let j = 0; j < 6; ++j) {
      const ue = 3.141 * j * 60 / 180;
      T = T.concat([0.9 + 0.5 * Math.cos(ue), 0.9 + 0.5 * Math.sin(ue)]);
    }
    for (let j = 0; j < 6; ++j) {
      const ue = 3.141 * (j + 1) * 60 / 180;
      T = T.concat([0.3 + 0.5 * Math.cos(ue + 0), 0.3 + 0.5 * Math.sin(ue + 0)]);
    }
    n.bindBuffer(n.ARRAY_BUFFER, W), n.bufferData(n.ARRAY_BUFFER, new Float32Array(T), n.STATIC_DRAW);
    const ee = n.createBuffer();
    let G = [];
    for (let j = 1; j < 7; ++j) G = G.concat([0, j, 1 + j % 6]);
    G = G.concat(m(0, 0, 6, 0, 1, 0, 6)), G = G.concat(m(6, 6, 0, 0, 1, 1, 6)), G = G.concat(m(6, 6, 12, 0, 1, 0, 12)), G = G.concat(m(12, 12, 6, 0, 1, 1, 12)), G = G.concat(m(12, 18, 12, 1, 0, 0, 18)), G = G.concat(m(18, 18, 12, 0, 1, 1, 18)), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, ee), n.bufferData(n.ELEMENT_ARRAY_BUFFER, new Uint16Array(G), n.STATIC_DRAW);
    const fe = n.createBuffer();
    let R = [0, 0, 1], A = [], te = [], V = [];
    for (let j = 0; j < 6; ++j) {
      const ue = j * 3.414 / 180 * 60, S = 0 * (90 * 3.414 / 180);
      A = A.concat([0, 0, 1]), te = te.concat([-Math.cos(ue - S), -Math.sin(ue - S), 0]), V = V.concat([Math.cos(ue - S), Math.sin(ue - S), 0]);
    }
    return R = R.concat(A), R = R.concat(te), R = R.concat(te), R = R.concat(A), R = R.concat(A), R = R.concat(V), R = R.concat(V), n.bindBuffer(n.ARRAY_BUFFER, fe), n.bufferData(n.ARRAY_BUFFER, new Float32Array(R), n.STATIC_DRAW), [L, ye, W, ee, fe];
  }, g = (L, O) => {
    const U = uu();
    return su(U, U, [0, 0, -6]), cu(U, U, 1.3 * Math.sin(O) * 3.141 / 6 / 3, [0, 1, 0]), cu(U, U, 1.2 * Math.sin(O * 1.15 + 1) * 3.141 / 4 / 3, [1, 0, 0]), cu(U, U, 1.1 * Math.sin(O * 1.33 + 2) * 3.141 / 5 / 3, [0, 0, 1]), su(U, U, [L[0], L[1], L[2]]), U;
  }, _ = (L, O) => {
    n !== null && (n.uniform1i(O.unif.sampler, 0), n.uniform1f(O.unif.mode, 1), n.drawElements(n.TRIANGLES, 3 * 6, n.UNSIGNED_SHORT, 0), n.uniform1i(O.unif.sampler, 1), n.uniform1f(O.unif.mode, 0), n.drawElements(n.TRIANGLES, 3 * 6 * 6, n.UNSIGNED_SHORT, 2 * 3 * 6));
  }, w = [[0, 1], [0, -2.2 + 1], [-2, 0], [2, 0]], k = (L, O) => {
    if (n === null || t.value === void 0) throw new Error("no WebGL context");
    n.bindFramebuffer(n.FRAMEBUFFER, null), n.bindRenderbuffer(n.RENDERBUFFER, null), n.clearColor(0, 0, 0, 0), n.clearDepth(1), n.enable(n.DEPTH_TEST), n.depthFunc(n.LEQUAL), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT);
    const U = 45 * Math.PI / 180, ye = c.value / s.value, W = 0.1, T = 100, ee = uu();
    gx(ee, U, ye, W, T);
    const G = O;
    su(ee, ee, [Math.sin(G * 0.3) * 1, Math.cos(G * 0.4) * 1, Math.cos(0.6 * G) * 1]), p(L, false), y(L), b(L), x(L), n.useProgram(L.prog_draw), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, L.bufs.index), n.uniform1f(L.unif.time, O), n.uniformMatrix4fv(L.unif.proj, false, ee), n.activeTexture(n.TEXTURE0 + 1), n.bindTexture(n.TEXTURE_2D, l.body), n.activeTexture(n.TEXTURE0);
    for (let R = 0; R < 4; ++R) {
      switch (R) {
        case 0:
          n.bindTexture(n.TEXTURE_2D, l.front_3);
          break;
        case 1:
          n.bindTexture(n.TEXTURE_2D, l.front_1);
          break;
        case 2:
          n.bindTexture(n.TEXTURE_2D, l.front_2);
          break;
        default:
          n.bindTexture(n.TEXTURE_2D, l.front_0);
          break;
      }
      const A = g(w[R].concat([u.value[R] * 0.5]), O);
      n.uniformMatrix4fv(L.unif.model, false, A), n.uniform1f(L.unif.fade, u.value[R]);
      const te = uu();
      mx(te, A), vx(te, te), n.uniformMatrix4fv(L.unif.normal, false, te), _(R + 1, L);
    }
    n.useProgram(L.prog_pick), n.enable(n.DEPTH_TEST), n.bindTexture(n.TEXTURE_2D, L.pick.tex), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.bindRenderbuffer(n.RENDERBUFFER, L.pick.rb), n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_COMPONENT16, n.canvas.width, n.canvas.height), n.bindFramebuffer(n.FRAMEBUFFER, L.pick.fb), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.RENDERBUFFER, L.pick.rb), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.canvas.width, n.canvas.height, 0, n.RGBA, n.UNSIGNED_BYTE, null), n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, L.pick.tex, 0), n.uniformMatrix4fv(L.unif.proj_pick, false, ee), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT), p(L, true);
    for (let R = 0; R < 4; ++R) n.uniformMatrix4fv(L.unif.model_pick, false, g(w[R].concat([u.value[R]]), O)), n.uniform4f(L.unif.id_pick, (R + 1) / 255, 0, 0, 0), n.drawElements(n.TRIANGLES, 3 * 6, n.UNSIGNED_SHORT, 0);
    let fe = new Uint8Array(4);
    n.readPixels(r.value[0], s.value - r.value[1], 1, 1, n.RGBA, n.UNSIGNED_BYTE, fe), fe.length && (o.value = fe.toString(), fe[0] > 0 ? i.value = fe[0] : i.value = -1);
  }, p = (L, O) => {
    if (n === null) throw new Error("setPos - no ctx");
    const U = 3, ye = n.FLOAT, W = false, T = 0, ee = 0;
    n.bindBuffer(n.ARRAY_BUFFER, L.bufs.pos), n.vertexAttribPointer(O ? L.attr.pos_pick : L.attr.pos, U, ye, W, T, ee), n.enableVertexAttribArray(O ? L.attr.pos_pick : L.attr.pos);
  }, y = (L) => {
    if (n === null) throw new Error("setColor - no ctx");
    n.bindBuffer(n.ARRAY_BUFFER, L.bufs.color), n.vertexAttribPointer(L.attr.color, 4, n.FLOAT, false, 0, 0), n.enableVertexAttribArray(L.attr.color);
  }, b = (L) => {
    if (n === null) throw new Error("setTex crash");
    n.bindBuffer(n.ARRAY_BUFFER, L.bufs.tex), n.vertexAttribPointer(L.attr.texture, 2, n.FLOAT, false, 0, 0), n.enableVertexAttribArray(L.attr.texture);
  }, x = (L) => {
    if (n === null) throw new Error("setNorm crash");
    n.bindBuffer(n.ARRAY_BUFFER, L.bufs.norm), n.vertexAttribPointer(L.attr.norm, 3, n.FLOAT, false, 0, 0), n.enableVertexAttribArray(L.attr.norm);
  };
  let $ = 0;
  const F = () => {
    if (n === null) return;
    const U = P(`
        attribute vec4 aVertexPosition;
        attribute vec3 aVertexNormal;
        attribute vec4 aVertexColor;
        attribute vec2 aTextureCoord;

        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;
        uniform mat4 uNormalMatrix;
        uniform float fTime;
        uniform float fMode;
        uniform lowp float fFade;

        varying vec4 vColor;
        varying float fDist;
        varying highp vec2 vTextureCoord;
        varying highp float fT;
        varying lowp float fKind;
        varying lowp float fCurFade;
        varying highp vec3 vLighting;

        void main() {
            vec4 b = aVertexPosition;
            fDist = sqrt(aVertexPosition[0] * aVertexPosition[0] + aVertexPosition[1] * aVertexPosition[1]);

            gl_Position = uProjectionMatrix * uModelViewMatrix * b;

            vColor = aVertexColor;
            vTextureCoord = aTextureCoord;

            fT = fTime;

            fKind = fMode;
            fCurFade = fFade;

            highp vec3 ambientLight = vec3(0.1, 0.1, 0.1);
            highp vec3 directionalLightColor = vec3(1.0, 1.0, 1.0);
            highp vec3 directionalVector = normalize(vec3(-0.175, -0.25, 1));// normalize(vec3(0, 0, -1));

            // highp vec4 transformedNormal = uNormalMatrix * vec4(normalize(aVertexNormal), 1.0);
            // highp vec4 transformedNormal = uNormalMatrix * uModelViewMatrix * vec4((aVertexNormal), 1.0);
            highp vec4 transformedNormal = uNormalMatrix * vec4((aVertexNormal), 1.0);

            highp float directional = min(max(dot(transformedNormal.xyz, directionalVector), 0.0), 1.0);
            vLighting = ambientLight + (directionalLightColor * directional) * 1.0;

            // vLighting = vec3(1.0, 1.0, 1.0);
        }
    `, `
        uniform sampler2D uSampler;

        varying lowp vec4 vColor;
        varying lowp float fT;
        varying lowp float fDist;
        varying highp vec2 vTextureCoord;
        varying lowp float fKind;
        varying lowp float fCurFade;
        varying lowp vec3 vLighting;

        void main() {
            lowp vec2 t = vTextureCoord;

            lowp float x = t[0] - 0.5;
            lowp float y = t[1] - 0.5;

            lowp float r = sqrt(x * x + y * y) * 4.0;

            lowp float f1 = fT;

            lowp vec2 tt;

            lowp float a = fCurFade;

            tt[0] = t[0] + t[0] * (cos(f1 * r * 3.0) / 10.0 + 0.5) * 0.5 * exp(-r * 0.3) * exp(-f1 * 0.15);
            tt[1] = t[1] + t[1] * (sin(f1 * r * 2.0) / 10.0 + 0.5) * 0.5 * exp(-r * 0.3) * exp(-f1 * 0.15);

            if(fKind == 1.0) { // idle or hover
                lowp vec4 idle = texture2D(uSampler, tt) * vColor;
                idle[0] *= 0.66;
                idle[1] *= 0.66;
                idle[2] *= 0.66;

                lowp vec4 active = texture2D(uSampler, t);
                active[0] *= 0.8;
                active[1] *= 0.8;
                active[2] *= 1.0;
                active += vec4(0.2, 0.2, 0.0, 0.0);

                lowp float a = 1.0 - cos(3.141 * fCurFade / 2.0);

                gl_FragColor = (idle * (1.0 - a) + active * a);
                gl_FragColor = vec4(gl_FragColor.rgb * vLighting, gl_FragColor.a);
                // gl_FragColor = vec4(vLighting, 1.0);
            }
            else { // norm
                gl_FragColor = texture2D(uSampler, t) * vColor;
                gl_FragColor = vec4(gl_FragColor.rgb * vLighting, gl_FragColor.a);

                // gl_FragColor = vec4(vLighting, 1.0);
            }
        }
    `), ye = `
        attribute vec4 aVertexPosition;
        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;

        void main() {
            vec4 b = aVertexPosition;
            gl_Position = uProjectionMatrix * uModelViewMatrix * b;
            // gl_Position = b;
            // gl_Position = uProjectionMatrix* b;
        }
    `, W = `
        precision mediump float;
        
        uniform vec4 uId;
        
        void main() {
            gl_FragColor = uId;
        }
    `, T = h(), ee = P(ye, W), G = { prog_draw: U, prog_pick: ee, attr: { pos: n.getAttribLocation(U, "aVertexPosition"), norm: n.getAttribLocation(U, "aVertexNormal"), pos_pick: n.getAttribLocation(ee, "aVertexPosition"), color: n.getAttribLocation(U, "aVertexColor"), texture: n.getAttribLocation(U, "aTextureCoord") }, unif: { proj: n.getUniformLocation(U, "uProjectionMatrix"), model: n.getUniformLocation(U, "uModelViewMatrix"), sampler: n.getUniformLocation(U, "uSampler"), normal: n.getUniformLocation(U, "uNormalMatrix"), time: n.getUniformLocation(U, "fTime"), mode: n.getUniformLocation(U, "fMode"), fade: n.getUniformLocation(U, "fFade"), proj_pick: n.getUniformLocation(ee, "uProjectionMatrix"), model_pick: n.getUniformLocation(ee, "uModelViewMatrix"), id_pick: n.getUniformLocation(ee, "uId") }, bufs: { pos: T[0], color: T[1], tex: T[2], index: T[3], norm: T[4] }, pick: { fb: n.createFramebuffer(), rb: n.createRenderbuffer(), tex: n.createTexture() } };
    for (const fe in l) l[fe] = q();
    n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, true), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), a = G;
  }, D = () => {
    if (t.value === void 0 || (n === null && (n = t.value.getContext("webgl2", {})), n === null)) return;
    a === null && F(), n.viewport(0, 0, c.value, s.value);
    let L = 0, O = false;
    $ = setInterval(() => {
      O ? (L -= 0.033, L < 0 && (L = 0, O = false)) : (L += 0.033, L > 7.5 && (L = 7.5, O = true)), a !== null && (B(), k(a, L));
    }, 25);
  }, B = (L) => {
    for (let O = 0; O < 4; ++O) i.value - 1 == O ? u.value[O] < 1 && (u.value[O] += 0.05) : u.value[O] > 0 && (u.value[O] -= 0.05);
  }, P = (L, O) => {
    if (n === null) throw new Error("no webgl");
    const U = I(n.VERTEX_SHADER, L), ye = I(n.FRAGMENT_SHADER, O), W = n.createProgram();
    return n.attachShader(W, U), n.attachShader(W, ye), n.linkProgram(W), W;
  }, I = (L, O) => {
    if (n === null) throw new Error("no webgl");
    const U = n.createShader(L);
    if (U === null) throw new Error("bad shader");
    return n.shaderSource(U, O), n.compileShader(U), U;
  }, q = () => {
    if (n === null) return null;
    const L = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, L), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0])), L;
  }, M = (L, O) => {
    if (n === null) return;
    const U = O.target;
    n.bindTexture(n.TEXTURE_2D, l[L]), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, U), n.generateMipmap(n.TEXTURE_2D);
  }, C = (L) => {
    if (n === null || t.value === void 0) return;
    const O = L, U = O.offsetX, ye = O.offsetY;
    U - t.value.clientWidth / 2, ye - t.value.clientHeight / 2, (U - n.canvas.width / 2) / 2, (ye - n.canvas.height / 2) / 2, r.value = [U, ye];
  }, H = () => {
    $ != 0 && clearInterval($);
    const L = document.getElementById("header");
    L !== null && (f.value = L.getBoundingClientRect().bottom);
    let O = 0;
    document.getElementById("footer"), L !== null && (O = L.getBoundingClientRect().height), We(() => {
      c.value = window.innerWidth, s.value = window.innerHeight - f.value - O, We(D);
    });
  };
  ft(() => {
    window.addEventListener("resize", H), H();
  }), Ke(() => {
    clearInterval($), window.removeEventListener("resize", H);
  });
  const Y = () => ({ top: f.value + "px" });
  return (L, O) => (Gn(), Bv(rn, null, [Ln("canvas", { id: "canvas", ref_key: "canvas", ref: t, onMousemove: O[0] || (O[0] = (U) => C(U)), width: c.value, height: s.value, style: jo(Y()) }, null, 44, bx), Ln("img", { src: "img/wood.jpg", onLoad: O[1] || (O[1] = (U) => M("body", U)), style: { display: "none" } }, null, 32), Ln("img", { src: "img/tex.jpg", onLoad: O[2] || (O[2] = (U) => M("front_0", U)), style: { display: "none" } }, null, 32), Ln("img", { src: "img/clock.jpg", onLoad: O[3] || (O[3] = (U) => M("front_1", U)), style: { display: "none" } }, null, 32), Ln("img", { src: "img/tv.jpg", onLoad: O[4] || (O[4] = (U) => M("front_2", U)), style: { display: "none" } }, null, 32), Ln("img", { src: "img/phone.jpg", onLoad: O[5] || (O[5] = (U) => M("front_3", U)), style: { display: "none" } }, null, 32)], 64));
} }), px = { BASE_URL: "./", DEV: false, MODE: "production", PROD: true, SSR: false, VITE_APP_NAME: "vite mtg", VITE_client_id: "quasar-2fa", VITE_client_secret: "spoon" }, Ws = Wv(Qw);
console.log(px);
const _x = [{ name: "layout", path: "/", component: Yw, children: [{ name: "root", path: "", component: dx }, { name: "webgl", path: "webgl", component: yx }] }], wx = ZS({ history: TS(), routes: _x });
Ws.use(wx);
Ws.use(Hw, { plugins: { Dialog: Tw, Dark: Zv, Loading: Ew, Cookies: kw, Notify: Fw }, config: { dark: "auto" } });
window.cb = (e) => {
  alert(e);
};
window.log = (e) => {
  console.log("%cwasm>%c %s", "background-color: blue; color: cyan; border: 2px solid blue;", "", e);
};
Tg({}).then(() => {
  Ws.mount("#q-app");
});
