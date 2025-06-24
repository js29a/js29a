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
function Wu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const mt = {}, ca = [], Fn = () => {
}, Eg = () => false, Do = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Yu = (e) => e.startsWith("onUpdate:"), It = Object.assign, Gu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, $g = Object.prototype.hasOwnProperty, st = (e, t) => $g.call(e, t), Ne = Array.isArray, da = (e) => kr(e) === "[object Map]", Tf = (e) => kr(e) === "[object Set]", Ag = (e) => kr(e) === "[object RegExp]", Qe = (e) => typeof e == "function", At = (e) => typeof e == "string", yl = (e) => typeof e == "symbol", xt = (e) => e !== null && typeof e == "object", Mf = (e) => (xt(e) || Qe(e)) && Qe(e.then) && Qe(e.catch), Ef = Object.prototype.toString, kr = (e) => Ef.call(e), Rg = (e) => kr(e).slice(8, -1), $f = (e) => kr(e) === "[object Object]", Xu = (e) => At(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Xa = /* @__PURE__ */ Wu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), No = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Pg = /-(\w)/g, bn = No((e) => e.replace(Pg, (t, n) => n ? n.toUpperCase() : "")), Lg = /\B([A-Z])/g, Wl = No((e) => e.replace(Lg, "-$1").toLowerCase()), Ho = No((e) => e.charAt(0).toUpperCase() + e.slice(1)), yi = No((e) => e ? `on${Ho(e)}` : ""), ml = (e, t) => !Object.is(e, t), Za = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, Af = (e, t, n, l = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: l, value: n });
}, Bg = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Fg = (e) => {
  const t = At(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Zs;
const qr = () => Zs || (Zs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function jo(e) {
  if (Ne(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const l = e[n], a = At(l) ? zg(l) : jo(l);
      if (a) for (const r in a) t[r] = a[r];
    }
    return t;
  } else if (At(e) || xt(e)) return e;
}
const Og = /;(?![^(]*\))/g, Vg = /:([^]+)/, Ig = /\/\*[^]*?\*\//g;
function zg(e) {
  const t = {};
  return e.replace(Ig, "").split(Og).forEach((n) => {
    if (n) {
      const l = n.split(Vg);
      l.length > 1 && (t[l[0].trim()] = l[1].trim());
    }
  }), t;
}
function Zu(e) {
  let t = "";
  if (At(e)) t = e;
  else if (Ne(e)) for (let n = 0; n < e.length; n++) {
    const l = Zu(e[n]);
    l && (t += l + " ");
  }
  else if (xt(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Dg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ng = /* @__PURE__ */ Wu(Dg);
function Rf(e) {
  return !!e || e === "";
}
const Pf = (e) => !!(e && e.__v_isRef === true), Lf = (e) => At(e) ? e : e == null ? "" : Ne(e) || xt(e) && (e.toString === Ef || !Qe(e.toString)) ? Pf(e) ? Lf(e.value) : JSON.stringify(e, Bf, 2) : String(e), Bf = (e, t) => Pf(t) ? Bf(e, t.value) : da(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [l, a], r) => (n[pi(l, r) + " =>"] = a, n), {}) } : Tf(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => pi(n)) } : yl(t) ? pi(t) : xt(t) && !Ne(t) && !$f(t) ? String(t) : t, pi = (e, t = "") => {
  var n;
  return yl(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
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
    this.flags |= 2, Js(this), If(this);
    const t = bt, n = qn;
    bt = this, qn = true;
    try {
      return this.fn();
    } finally {
      zf(this), bt = t, qn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) ts(t);
      this.deps = this.depsTail = void 0, Js(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? _i.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    cu(this) && this.run();
  }
  get dirty() {
    return cu(this);
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
function Ju() {
  Of++;
}
function es() {
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
function If(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function zf(e) {
  let t, n = e.depsTail, l = n;
  for (; l; ) {
    const a = l.prevDep;
    l.version === -1 ? (l === n && (n = a), ts(l), Ug(l)) : t = l, l.dep.activeLink = l.prevActiveLink, l.prevActiveLink = void 0, l = a;
  }
  e.deps = t, e.depsTail = n;
}
function cu(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Df(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function Df(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === dr)) return;
  e.globalVersion = dr;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !cu(e)) {
    e.flags &= -3;
    return;
  }
  const n = bt, l = qn;
  bt = e, qn = true;
  try {
    If(e);
    const a = e.fn(e._value);
    (t.version === 0 || ml(a, e._value)) && (e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    bt = n, qn = l, zf(e), e.flags &= -3;
  }
}
function ts(e, t = false) {
  const { dep: n, prevSub: l, nextSub: a } = e;
  if (l && (l.nextSub = a, e.prevSub = void 0), a && (a.prevSub = l, e.nextSub = void 0), n.subs === e && (n.subs = l, !l && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep) ts(r, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ug(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let qn = true;
const Nf = [];
function pl() {
  Nf.push(qn), qn = false;
}
function _l() {
  const e = Nf.pop();
  qn = e === void 0 ? true : e;
}
function Js(e) {
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
class ns {
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
    Ju();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      es();
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
const du = /* @__PURE__ */ new WeakMap(), Vl = Symbol(""), fu = Symbol(""), fr = Symbol("");
function Kt(e, t, n) {
  if (qn && bt) {
    let l = du.get(e);
    l || du.set(e, l = /* @__PURE__ */ new Map());
    let a = l.get(n);
    a || (l.set(n, a = new ns()), a.map = l, a.key = n), a.track();
  }
}
function Kn(e, t, n, l, a, r) {
  const o = du.get(e);
  if (!o) {
    dr++;
    return;
  }
  const i = (u) => {
    u && u.trigger();
  };
  if (Ju(), t === "clear") o.forEach(i);
  else {
    const u = Ne(e), c = u && Xu(n);
    if (u && n === "length") {
      const s = Number(l);
      o.forEach((v, h) => {
        (h === "length" || h === fr || !yl(h) && h >= s) && i(v);
      });
    } else switch ((n !== void 0 || o.has(void 0)) && i(o.get(n)), c && i(o.get(fr)), t) {
      case "add":
        u ? c && i(o.get("length")) : (i(o.get(Vl)), da(e) && i(o.get(fu)));
        break;
      case "delete":
        u || (i(o.get(Vl)), da(e) && i(o.get(fu)));
        break;
      case "set":
        da(e) && i(o.get(Vl));
        break;
    }
  }
  es();
}
function Zl(e) {
  const t = Ge(e);
  return t === e ? t : (Kt(t, "iterate", fr), Tn(e) ? t : t.map(Gt));
}
function ls(e) {
  return Kt(e = Ge(e), "iterate", fr), e;
}
const Kg = { __proto__: null, [Symbol.iterator]() {
  return wi(this, Symbol.iterator, Gt);
}, concat(...e) {
  return Zl(this).concat(...e.map((t) => Ne(t) ? Zl(t) : t));
}, entries() {
  return wi(this, "entries", (e) => (e[1] = Gt(e[1]), e));
}, every(e, t) {
  return zn(this, "every", e, t, void 0, arguments);
}, filter(e, t) {
  return zn(this, "filter", e, t, (n) => n.map(Gt), arguments);
}, find(e, t) {
  return zn(this, "find", e, t, Gt, arguments);
}, findIndex(e, t) {
  return zn(this, "findIndex", e, t, void 0, arguments);
}, findLast(e, t) {
  return zn(this, "findLast", e, t, Gt, arguments);
}, findLastIndex(e, t) {
  return zn(this, "findLastIndex", e, t, void 0, arguments);
}, forEach(e, t) {
  return zn(this, "forEach", e, t, void 0, arguments);
}, includes(...e) {
  return Si(this, "includes", e);
}, indexOf(...e) {
  return Si(this, "indexOf", e);
}, join(e) {
  return Zl(this).join(e);
}, lastIndexOf(...e) {
  return Si(this, "lastIndexOf", e);
}, map(e, t) {
  return zn(this, "map", e, t, void 0, arguments);
}, pop() {
  return La(this, "pop");
}, push(...e) {
  return La(this, "push", e);
}, reduce(e, ...t) {
  return ec(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return ec(this, "reduceRight", e, t);
}, shift() {
  return La(this, "shift");
}, some(e, t) {
  return zn(this, "some", e, t, void 0, arguments);
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
  const l = ls(e), a = l[t]();
  return l !== e && !Tn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.value && (r.value = n(r.value)), r;
  }), a;
}
const Wg = Array.prototype;
function zn(e, t, n, l, a, r) {
  const o = ls(e), i = o !== e && !Tn(e), u = o[t];
  if (u !== Wg[t]) {
    const v = u.apply(e, r);
    return i ? Gt(v) : v;
  }
  let c = n;
  o !== e && (i ? c = function(v, h) {
    return n.call(this, Gt(v), h, e);
  } : n.length > 2 && (c = function(v, h) {
    return n.call(this, v, h, e);
  }));
  const s = u.call(o, c, l);
  return i && a ? a(s) : s;
}
function ec(e, t, n, l) {
  const a = ls(e);
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
  return (a === -1 || a === false) && is(n[0]) ? (n[0] = Ge(n[0]), l[t](...n)) : a;
}
function La(e, t, n = []) {
  pl(), Ju();
  const l = Ge(e)[t].apply(e, n);
  return es(), _l(), l;
}
const Yg = /* @__PURE__ */ Wu("__proto__,__v_isRef,__isVue"), jf = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(yl));
function Gg(e) {
  yl(e) || (e = String(e));
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
    return (yl(n) ? jf.has(n) : Yg(n)) || (a || Kt(t, "get", n), r) ? i : pt(i) ? o && Xu(n) ? i : i.value : xt(i) ? a ? Gf(i) : Bn(i) : i;
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
    const o = Ne(t) && Xu(n) ? Number(n) < t.length : st(t, n), i = Reflect.set(t, n, l, pt(t) ? t : a);
    return t === Ge(a) && (o ? ml(l, r) && Kn(t, "set", n, l) : Kn(t, "add", n, l)), i;
  }
  deleteProperty(t, n) {
    const l = st(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && l && Kn(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const l = Reflect.has(t, n);
    return (!yl(n) || !jf.has(n)) && Kt(t, "has", n), l;
  }
  ownKeys(t) {
    return Kt(t, "iterate", Ne(t) ? "length" : Vl), Reflect.ownKeys(t);
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
const vu = (e) => e, Lr = (e) => Reflect.getPrototypeOf(e);
function t0(e, t, n) {
  return function(...l) {
    const a = this.__v_raw, r = Ge(a), o = da(r), i = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, c = a[e](...l), s = n ? vu : t ? mu : Gt;
    return !t && Kt(r, "iterate", u ? fu : Vl), { next() {
      const { value: v, done: h } = c.next();
      return h ? { value: v, done: h } : { value: i ? [s(v[0]), s(v[1])] : s(v), done: h };
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
    e || (ml(a, i) && Kt(o, "get", a), Kt(o, "get", i));
    const { has: u } = Lr(o), c = t ? vu : e ? mu : Gt;
    if (u.call(o, a)) return c(r.get(a));
    if (u.call(o, i)) return c(r.get(i));
    r !== o && r.get(a);
  }, get size() {
    const a = this.__v_raw;
    return !e && Kt(Ge(a), "iterate", Vl), Reflect.get(a, "size", a);
  }, has(a) {
    const r = this.__v_raw, o = Ge(r), i = Ge(a);
    return e || (ml(a, i) && Kt(o, "has", a), Kt(o, "has", i)), a === i ? r.has(a) : r.has(a) || r.has(i);
  }, forEach(a, r) {
    const o = this, i = o.__v_raw, u = Ge(i), c = t ? vu : e ? mu : Gt;
    return !e && Kt(u, "iterate", Vl), i.forEach((s, v) => a.call(r, c(s), c(v), o));
  } };
  return It(n, e ? { add: Br("add"), set: Br("set"), delete: Br("delete"), clear: Br("clear") } : { add(a) {
    !t && !Tn(a) && !jl(a) && (a = Ge(a));
    const r = Ge(this);
    return Lr(r).has.call(r, a) || (r.add(a), Kn(r, "add", a, a)), this;
  }, set(a, r) {
    !t && !Tn(r) && !jl(r) && (r = Ge(r));
    const o = Ge(this), { has: i, get: u } = Lr(o);
    let c = i.call(o, a);
    c || (a = Ge(a), c = i.call(o, a));
    const s = u.call(o, a);
    return o.set(a, r), c ? ml(r, s) && Kn(o, "set", a, r) : Kn(o, "add", a, r), this;
  }, delete(a) {
    const r = Ge(this), { has: o, get: i } = Lr(r);
    let u = o.call(r, a);
    u || (a = Ge(a), u = o.call(r, a)), i && i.call(r, a);
    const c = r.delete(a);
    return u && Kn(r, "delete", a, void 0), c;
  }, clear() {
    const a = Ge(this), r = a.size !== 0, o = a.clear();
    return r && Kn(a, "clear", void 0, void 0), o;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((a) => {
    n[a] = t0(a, e, t);
  }), n;
}
function as(e, t) {
  const n = n0(e, t);
  return (l, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? l : Reflect.get(st(n, a) && a in l ? n : l, a, r);
}
const l0 = { get: as(false, false) }, a0 = { get: as(false, true) }, r0 = { get: as(true, false) };
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : i0(Rg(e));
}
function Bn(e) {
  return jl(e) ? e : os(e, false, Zg, l0, Kf);
}
function rs(e) {
  return os(e, false, e0, a0, Wf);
}
function Gf(e) {
  return os(e, true, Jg, r0, Yf);
}
function os(e, t, n, l, a) {
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
function is(e) {
  return e ? !!e.__v_raw : false;
}
function Ge(e) {
  const t = e && e.__v_raw;
  return t ? Ge(t) : e;
}
function Uo(e) {
  return !st(e, "__v_skip") && Object.isExtensible(e) && Af(e, "__v_skip", true), e;
}
const Gt = (e) => xt(e) ? Bn(e) : e, mu = (e) => xt(e) ? Gf(e) : e;
function pt(e) {
  return e ? e.__v_isRef === true : false;
}
function W(e) {
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
    this.dep = new ns(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Ge(t), this._value = n ? t : Gt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, l = this.__v_isShallow || Tn(t) || jl(t);
    t = l ? t : Ge(t), ml(t, n) && (this._rawValue = t, this._value = l ? t : Gt(t), this.dep.trigger());
  }
}
function ze(e) {
  return pt(e) ? e.value : e;
}
const d0 = { get: (e, t, n) => t === "__v_raw" ? e : ze(Reflect.get(e, t, n)), set: (e, t, n, l) => {
  const a = e[t];
  return pt(a) && !pt(n) ? (a.value = n, true) : Reflect.set(e, t, n, l);
} };
function Zf(e) {
  return tr(e) ? e : new Proxy(e, d0);
}
class f0 {
  constructor(t, n, l) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ns(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = dr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = l;
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
let Al;
function m0(e, t = false, n = Al) {
  if (n) {
    let l = vo.get(n);
    l || vo.set(n, l = []), l.push(e);
  }
}
function h0(e, t, n = mt) {
  const { immediate: l, deep: a, once: r, scheduler: o, augmentJob: i, call: u } = n, c = (b) => a ? b : Tn(b) || a === false || a === 0 ? Wn(b, 1) : Wn(b);
  let s, v, h, m, g = false, _ = false;
  if (pt(e) ? (v = () => e.value, g = Tn(e)) : tr(e) ? (v = () => c(e), g = true) : Ne(e) ? (_ = true, g = e.some((b) => tr(b) || Tn(b)), v = () => e.map((b) => {
    if (pt(b)) return b.value;
    if (tr(b)) return c(b);
    if (Qe(b)) return u ? u(b, 2) : b();
  })) : Qe(e) ? t ? v = u ? () => u(e, 2) : e : v = () => {
    if (h) {
      pl();
      try {
        h();
      } finally {
        _l();
      }
    }
    const b = Al;
    Al = s;
    try {
      return u ? u(e, 3, [m]) : e(m);
    } finally {
      Al = b;
    }
  } : v = Fn, t && a) {
    const b = v, x = a === true ? 1 / 0 : a;
    v = () => Wn(b(), x);
  }
  const w = jg(), C = () => {
    s.stop(), w && w.active && Gu(w.effects, s);
  };
  if (r && t) {
    const b = t;
    t = (...x) => {
      b(...x), C();
    };
  }
  let p = _ ? new Array(e.length).fill(Fr) : Fr;
  const y = (b) => {
    if (!(!(s.flags & 1) || !s.dirty && !b)) if (t) {
      const x = s.run();
      if (a || g || (_ ? x.some((A, F) => ml(A, p[F])) : ml(x, p))) {
        h && h();
        const A = Al;
        Al = s;
        try {
          const F = [x, p === Fr ? void 0 : _ && p[0] === Fr ? [] : p, m];
          u ? u(t, 3, F) : t(...F), p = x;
        } finally {
          Al = A;
        }
      }
    } else s.run();
  };
  return i && i(y), s = new Ff(v), s.scheduler = o ? () => o(y, false) : y, m = (b) => m0(b, false, s), h = s.onStop = () => {
    const b = vo.get(s);
    if (b) {
      if (u) u(b, 4);
      else for (const x of b) x();
      vo.delete(s);
    }
  }, t ? l ? y(true) : p = s.run() : o ? o(y.bind(null, true), true) : s.run(), C.pause = s.pause.bind(s), C.resume = s.resume.bind(s), C.stop = C, C;
}
function Wn(e, t = 1 / 0, n) {
  if (t <= 0 || !xt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
  if (n.add(e), t--, pt(e)) Wn(e.value, t, n);
  else if (Ne(e)) for (let l = 0; l < e.length; l++) Wn(e[l], t, n);
  else if (Tf(e) || da(e)) e.forEach((l) => {
    Wn(l, t, n);
  });
  else if ($f(e)) {
    for (const l in e) Wn(e[l], t, n);
    for (const l of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, l) && Wn(e[l], t, n);
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
        for (let v = 0; v < s.length; v++) if (s[v](e, u, c) === false) return;
      }
      i = i.parent;
    }
    if (r) {
      pl(), Tr(r, null, 10, [e, u, c]), _l();
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
let ul = null, ia = 0;
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
function us(e) {
  if (!(e.flags & 1)) {
    const t = vr(e), n = Xt[Xt.length - 1];
    !n || !(e.flags & 2) && t >= vr(n) ? Xt.push(e) : Xt.splice(b0(t), 0, e), e.flags |= 1, ev();
  }
}
function ev() {
  mo || (mo = Jf.then(nv));
}
function y0(e) {
  Ne(e) ? fa.push(...e) : ul && e.id === -1 ? ul.splice(ia + 1, 0, e) : e.flags & 1 || (fa.push(e), e.flags |= 1), ev();
}
function tc(e, t, n = Pn + 1) {
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
    if (fa.length = 0, ul) {
      ul.push(...t);
      return;
    }
    for (ul = t, ia = 0; ia < ul.length; ia++) {
      const n = ul[ia];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ul = null, ia = 0;
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
function $t(e, t = tn, n) {
  if (!t || e._n) return e;
  const l = (...a) => {
    l._d && mc(-1);
    const r = ho(t);
    let o;
    try {
      o = e(...a);
    } finally {
      ho(r), l._d && mc(1);
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
    r && (Qe(r) && (r = { mounted: r, updated: r }), r.deep && Wn(o), l.push({ dir: r, instance: n, value: o, oldValue: void 0, arg: i, modifiers: u }));
  }
  return e;
}
function Cl(e, t, n, l) {
  const a = e.dirs, r = t && t.dirs;
  for (let o = 0; o < a.length; o++) {
    const i = a[o];
    r && (i.oldValue = r[o].value);
    let u = i.dir[l];
    u && (pl(), En(u, n, 8, [e.el, i, e, t]), _l());
  }
}
const av = Symbol("_vte"), rv = (e) => e.__isTeleport, nr = (e) => e && (e.disabled || e.disabled === ""), nc = (e) => e && (e.defer || e.defer === ""), lc = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ac = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, hu = (e, t) => {
  const n = e && e.to;
  return At(n) ? t ? t(n) : null : n;
}, ov = { name: "Teleport", __isTeleport: true, process(e, t, n, l, a, r, o, i, u, c) {
  const { mc: s, pc: v, pbc: h, o: { insert: m, querySelector: g, createText: _, createComment: w } } = c, C = nr(t.props);
  let { shapeFlag: p, children: y, dynamicChildren: b } = t;
  if (e == null) {
    const x = t.el = _(""), A = t.anchor = _("");
    m(x, n, l), m(A, n, l);
    const F = (P, R) => {
      p & 16 && (a && a.isCE && (a.ce._teleportTarget = P), s(y, P, R, a, r, o, i, u));
    }, N = () => {
      const P = t.target = hu(t.props, g), R = iv(P, t, _, m);
      P && (o !== "svg" && lc(P) ? o = "svg" : o !== "mathml" && ac(P) && (o = "mathml"), C || (F(P, R), to(t, false)));
    };
    C && (F(n, A), to(t, true)), nc(t.props) ? Bt(() => {
      N(), t.el.__isMounted = true;
    }, r) : N();
  } else {
    if (nc(t.props) && !e.el.__isMounted) {
      Bt(() => {
        ov.process(e, t, n, l, a, r, o, i, u, c), delete e.el.__isMounted;
      }, r);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const x = t.anchor = e.anchor, A = t.target = e.target, F = t.targetAnchor = e.targetAnchor, N = nr(e.props), P = N ? n : A, R = N ? x : F;
    if (o === "svg" || lc(A) ? o = "svg" : (o === "mathml" || ac(A)) && (o = "mathml"), b ? (h(e.dynamicChildren, b, P, a, r, o, i), fs(e, t, true)) : u || v(e, t, P, R, a, r, o, i, false), C) N ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Or(t, n, x, c, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const H = t.target = hu(t.props, g);
      H && Or(t, H, null, c, 0);
    } else N && Or(t, A, F, c, 1);
    to(t, C);
  }
}, remove(e, t, n, { um: l, o: { remove: a } }, r) {
  const { shapeFlag: o, children: i, anchor: u, targetStart: c, targetAnchor: s, target: v, props: h } = e;
  if (v && (a(c), a(s)), r && a(u), o & 16) {
    const m = r || !nr(h);
    for (let g = 0; g < i.length; g++) {
      const _ = i[g];
      l(_, t, n, m, !!_.dynamicChildren);
    }
  }
}, move: Or, hydrate: p0 };
function Or(e, t, n, { o: { insert: l }, m: a }, r = 2) {
  r === 0 && l(e.targetAnchor, t, n);
  const { el: o, anchor: i, shapeFlag: u, children: c, props: s } = e, v = r === 2;
  if (v && l(o, t, n), (!v || nr(s)) && u & 16) for (let h = 0; h < c.length; h++) a(c[h], t, n, 2);
  v && l(i, t, n);
}
function p0(e, t, n, l, a, r, { o: { nextSibling: o, parentNode: i, querySelector: u, insert: c, createText: s } }, v) {
  const h = t.target = hu(t.props, u);
  if (h) {
    const m = nr(t.props), g = h._lpa || h.firstChild;
    if (t.shapeFlag & 16) if (m) t.anchor = v(o(e), t, i(e), n, l, a, r), t.targetStart = g, t.targetAnchor = g && o(g);
    else {
      t.anchor = o(e);
      let _ = g;
      for (; _; ) {
        if (_ && _.nodeType === 8) {
          if (_.data === "teleport start anchor") t.targetStart = _;
          else if (_.data === "teleport anchor") {
            t.targetAnchor = _, h._lpa = t.targetAnchor && o(t.targetAnchor);
            break;
          }
        }
        _ = o(_);
      }
      t.targetAnchor || iv(h, t, s, c), v(g && o(g), t, h, n, l, a, r);
    }
    to(t, m);
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
const sl = Symbol("_leaveCb"), Vr = Symbol("_enterCb");
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
    const a = t.default && ss(t.default(), true);
    if (!a || !a.length) return;
    const r = dv(a), o = Ge(e), { mode: i } = o;
    if (l.isLeaving) return xi(r);
    const u = rc(r);
    if (!u) return xi(r);
    let c = mr(u, o, l, n, (v) => c = v);
    u.type !== Zt && bl(u, c);
    let s = n.subTree && rc(n.subTree);
    if (s && s.type !== Zt && !fl(u, s) && cv(n).type !== Zt) {
      let v = mr(s, o, l, n);
      if (bl(s, v), i === "out-in" && u.type !== Zt) return l.isLeaving = true, v.afterLeave = () => {
        l.isLeaving = false, n.job.flags & 8 || n.update(), delete v.afterLeave, s = void 0;
      }, xi(r);
      i === "in-out" && u.type !== Zt ? v.delayLeave = (h, m, g) => {
        const _ = fv(l, s);
        _[String(s.key)] = s, h[sl] = () => {
          m(), h[sl] = void 0, delete c.delayedLeave, s = void 0;
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
  const { appear: r, mode: o, persisted: i = false, onBeforeEnter: u, onEnter: c, onAfterEnter: s, onEnterCancelled: v, onBeforeLeave: h, onLeave: m, onAfterLeave: g, onLeaveCancelled: _, onBeforeAppear: w, onAppear: C, onAfterAppear: p, onAppearCancelled: y } = t, b = String(e.key), x = fv(n, e), A = (P, R) => {
    P && En(P, l, 9, R);
  }, F = (P, R) => {
    const H = R[1];
    A(P, R), Ne(P) ? P.every((q) => q.length <= 1) && H() : P.length <= 1 && H();
  }, N = { mode: o, persisted: i, beforeEnter(P) {
    let R = u;
    if (!n.isMounted) if (r) R = w || u;
    else return;
    P[sl] && P[sl](true);
    const H = x[b];
    H && fl(e, H) && H.el[sl] && H.el[sl](), A(R, [P]);
  }, enter(P) {
    let R = c, H = s, q = v;
    if (!n.isMounted) if (r) R = C || c, H = p || s, q = y || v;
    else return;
    let E = false;
    const k = P[Vr] = (U) => {
      E || (E = true, U ? A(q, [P]) : A(H, [P]), N.delayedLeave && N.delayedLeave(), P[Vr] = void 0);
    };
    R ? F(R, [P, k]) : k();
  }, leave(P, R) {
    const H = String(e.key);
    if (P[Vr] && P[Vr](true), n.isUnmounting) return R();
    A(h, [P]);
    let q = false;
    const E = P[sl] = (k) => {
      q || (q = true, R(), k ? A(_, [P]) : A(g, [P]), P[sl] = void 0, x[H] === e && delete x[H]);
    };
    x[H] = e, m ? F(m, [P, E]) : E();
  }, clone(P) {
    const R = mr(P, t, n, l, a);
    return a && a(R), R;
  } };
  return N;
}
function xi(e) {
  if (Ko(e)) return e = Gn(e), e.children = null, e;
}
function rc(e) {
  if (!Ko(e)) return rv(e.type) && e.children ? dv(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && Qe(n.default)) return n.default();
  }
}
function bl(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, bl(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ss(e, t = false, n) {
  let l = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const i = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === rn ? (o.patchFlag & 128 && a++, l = l.concat(ss(o.children, t, i))) : (t || o.type !== Zt) && l.push(i != null ? Gn(o, { key: i }) : o);
  }
  if (a > 1) for (let r = 0; r < l.length; r++) l[r].patchFlag = -2;
  return l;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ta(e, t) {
  return Qe(e) ? It({ name: e.name }, t, { setup: e }) : e;
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
  const r = l.shapeFlag & 4 ? ei(l.component) : l.el, o = a ? null : r, { i, r: u } = e, c = t && t.r, s = i.refs === mt ? i.refs = {} : i.refs, v = i.setupState, h = Ge(v), m = v === mt ? () => false : (g) => st(h, g);
  if (c != null && c !== u && (At(c) ? (s[c] = null, m(c) && (v[c] = null)) : pt(c) && (c.value = null)), Qe(u)) Tr(u, i, 12, [o, s]);
  else {
    const g = At(u), _ = pt(u);
    if (g || _) {
      const w = () => {
        if (e.f) {
          const C = g ? m(u) ? v[u] : s[u] : u.value;
          a ? Ne(C) && Gu(C, r) : Ne(C) ? C.includes(r) || C.push(r) : g ? (s[u] = [r], m(u) && (v[u] = s[u])) : (u.value = [r], e.k && (s[e.k] = u.value));
        } else g ? (s[u] = o, m(u) && (v[u] = o)) : _ && (u.value = o, e.k && (s[e.k] = o));
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
  const i = n.suspense, { renderer: { p: u, m: c, um: s, o: { createElement: v } } } = l, h = v("div");
  l.activate = (p, y, b, x, A) => {
    const F = p.component;
    c(p, y, b, 0, i), u(F.vnode, p, y, b, F, i, x, p.slotScopeIds, A), Bt(() => {
      F.isDeactivated = false, F.a && Za(F.a);
      const N = p.props && p.props.onVnodeMounted;
      N && vn(N, F.parent, p);
    }, i);
  }, l.deactivate = (p) => {
    const y = p.component;
    yo(y.m), yo(y.a), c(p, h, null, 1, i), Bt(() => {
      y.da && Za(y.da);
      const b = p.props && p.props.onVnodeUnmounted;
      b && vn(b, y.parent, p), y.isDeactivated = true;
    }, i);
  };
  function m(p) {
    Ci(p), s(p, n, i, true);
  }
  function g(p) {
    a.forEach((y, b) => {
      const x = wu(y.type);
      x && !p(x) && _(b);
    });
  }
  function _(p) {
    const y = a.get(p);
    y && (!o || !fl(y, o)) ? m(y) : o && Ci(o), a.delete(p), r.delete(p);
  }
  ge(() => [e.include, e.exclude], ([p, y]) => {
    p && g((b) => Ua(p, b)), y && g((b) => !Ua(y, b));
  }, { flush: "post", deep: true });
  let w = null;
  const C = () => {
    w != null && (po(n.subTree.type) ? Bt(() => {
      a.set(w, Ir(n.subTree));
    }, n.subTree.suspense) : a.set(w, Ir(n.subTree)));
  };
  return ft(C), Go(C), Ke(() => {
    a.forEach((p) => {
      const { subTree: y, suspense: b } = n, x = Ir(y);
      if (p.type === x.type && p.key === x.key) {
        Ci(x);
        const A = x.component.da;
        A && Bt(A, b);
        return;
      }
      m(p);
    });
  }), () => {
    if (w = null, !t.default) return o = null;
    const p = t.default(), y = p[0];
    if (p.length > 1) return o = null, p;
    if (!gr(y) || !(y.shapeFlag & 4) && !(y.shapeFlag & 128)) return o = null, y;
    let b = Ir(y);
    if (b.type === Zt) return o = null, b;
    const x = b.type, A = wu(va(b) ? b.type.__asyncResolved || {} : x), { include: F, exclude: N, max: P } = e;
    if (F && (!A || !Ua(F, A)) || N && A && Ua(N, A)) return b.shapeFlag &= -257, o = b, y;
    const R = b.key == null ? x : b.key, H = a.get(R);
    return b.el && (b = Gn(b), y.shapeFlag & 128 && (y.ssContent = b)), w = R, H ? (b.el = H.el, b.component = H.component, b.transition && bl(b, b.transition), b.shapeFlag |= 512, r.delete(R), r.add(R)) : (r.add(R), P && r.size > parseInt(P, 10) && _(r.values().next().value)), b.shapeFlag |= 256, o = b, po(y.type) ? y : b;
  };
} }, mv = x0;
function Ua(e, t) {
  return Ne(e) ? e.some((n) => Ua(n, t)) : At(e) ? e.split(",").includes(t) : Ag(e) ? (e.lastIndex = 0, e.test(t)) : false;
}
function wl(e, t) {
  hv(e, "a", t);
}
function On(e, t) {
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
    Gu(l[t], a);
  }, n);
}
function Ci(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function Ir(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Wo(e, t, n = Ht, l = false) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      pl();
      const i = Mr(n), u = En(t, n, e, o);
      return i(), _l(), u;
    });
    return l ? a.unshift(r) : a.push(r), r;
  }
}
const Zn = (e) => (t, n = Ht) => {
  (!br || e === "sp") && Wo(e, (...l) => t(...l), n);
}, Yo = Zn("bm"), ft = Zn("m"), Ma = Zn("bu"), Go = Zn("u"), Ke = Zn("bum"), Xo = Zn("um"), k0 = Zn("sp"), q0 = Zn("rtg"), T0 = Zn("rtc");
function M0(e, t = Ht) {
  Wo("ec", e, t);
}
const gv = "components", E0 = "directives";
function cs(e, t) {
  return bv(gv, e, true, t) || e;
}
const $0 = Symbol.for("v-ndc");
function A0(e) {
  return bv(E0, e);
}
function bv(e, t, n = true, l = false) {
  const a = tn || Ht;
  if (a) {
    const r = a.type;
    if (e === gv) {
      const i = wu(r, false);
      if (i && (i === t || i === bn(t) || i === Ho(bn(t)))) return r;
    }
    const o = oc(a[e] || r[e], t) || oc(a.appContext[e], t);
    return !o && l ? r : o;
  }
}
function oc(e, t) {
  return e && (e[t] || e[bn(t)] || e[Ho(bn(t))]);
}
const gu = (e) => e ? Ov(e) ? ei(e) : gu(e.parent) : null, lr = It(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => gu(e.parent), $root: (e) => gu(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => pv(e), $forceUpdate: (e) => e.f || (e.f = () => {
  us(e.update);
}), $nextTick: (e) => e.n || (e.n = We.bind(e.proxy)), $watch: (e) => J0.bind(e) }), ki = (e, t) => e !== mt && !e.__isScriptSetup && st(e, t), R0 = { get({ _: e }, t) {
  if (t === "__v_skip") return true;
  const { ctx: n, setupState: l, data: a, props: r, accessCache: o, type: i, appContext: u } = e;
  let c;
  if (t[0] !== "$") {
    const m = o[t];
    if (m !== void 0) switch (m) {
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
      bu && (o[t] = 0);
    }
  }
  const s = lr[t];
  let v, h;
  if (s) return t === "$attrs" && Kt(e.attrs, "get", ""), s(e);
  if ((v = i.__cssModules) && (v = v[t])) return v;
  if (n !== mt && st(n, t)) return o[t] = 4, n[t];
  if (h = u.config.globalProperties, st(h, t)) return h[t];
}, set({ _: e }, t, n) {
  const { data: l, setupState: a, ctx: r } = e;
  return ki(a, t) ? (a[t] = n, true) : l !== mt && st(l, t) ? (l[t] = n, true) : st(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (r[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: l, appContext: a, propsOptions: r } }, o) {
  let i;
  return !!n[o] || e !== mt && st(e, o) || ki(t, o) || (i = r[0]) && st(i, o) || st(l, o) || st(lr, o) || st(a.config.globalProperties, o);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : st(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function ic(e) {
  return Ne(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let bu = true;
function P0(e) {
  const t = pv(e), n = e.proxy, l = e.ctx;
  bu = false, t.beforeCreate && uc(t.beforeCreate, e, "bc");
  const { data: a, computed: r, methods: o, watch: i, provide: u, inject: c, created: s, beforeMount: v, mounted: h, beforeUpdate: m, updated: g, activated: _, deactivated: w, beforeDestroy: C, beforeUnmount: p, destroyed: y, unmounted: b, render: x, renderTracked: A, renderTriggered: F, errorCaptured: N, serverPrefetch: P, expose: R, inheritAttrs: H, components: q, directives: E, filters: k } = t;
  if (c && L0(c, l, null), o) for (const V in o) {
    const D = o[V];
    Qe(D) && (l[V] = D.bind(n));
  }
  if (a) {
    const V = a.call(n, n);
    xt(V) && (e.data = Bn(V));
  }
  if (bu = true, r) for (const V in r) {
    const D = r[V], te = Qe(D) ? D.bind(n, n) : Qe(D.get) ? D.get.bind(n, n) : Fn, be = !Qe(D) && Qe(D.set) ? D.set.bind(n) : Fn, K = f({ get: te, set: be });
    Object.defineProperty(l, V, { enumerable: true, configurable: true, get: () => K.value, set: (T) => K.value = T });
  }
  if (i) for (const V in i) yv(i[V], l, n, V);
  if (u) {
    const V = Qe(u) ? u.call(n) : u;
    Reflect.ownKeys(V).forEach((D) => {
      hn(D, V[D]);
    });
  }
  s && uc(s, e, "c");
  function L(V, D) {
    Ne(D) ? D.forEach((te) => V(te.bind(n))) : D && V(D.bind(n));
  }
  if (L(Yo, v), L(ft, h), L(Ma, m), L(Go, g), L(wl, _), L(On, w), L(M0, N), L(T0, A), L(q0, F), L(Ke, p), L(Xo, b), L(k0, P), Ne(R)) if (R.length) {
    const V = e.exposed || (e.exposed = {});
    R.forEach((D) => {
      Object.defineProperty(V, D, { get: () => n[D], set: (te) => n[D] = te });
    });
  } else e.exposed || (e.exposed = {});
  x && e.render === Fn && (e.render = x), H != null && (e.inheritAttrs = H), q && (e.components = q), E && (e.directives = E), P && vv(e);
}
function L0(e, t, n = Fn) {
  Ne(e) && (e = yu(e));
  for (const l in e) {
    const a = e[l];
    let r;
    xt(a) ? "default" in a ? r = Tt(a.from || l, a.default, true) : r = Tt(a.from || l) : r = Tt(a), pt(r) ? Object.defineProperty(t, l, { enumerable: true, configurable: true, get: () => r.value, set: (o) => r.value = o }) : t[l] = r;
  }
}
function uc(e, t, n) {
  En(Ne(e) ? e.map((l) => l.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function yv(e, t, n, l) {
  let a = l.includes(".") ? Rv(n, l) : () => n[l];
  if (At(e)) {
    const r = t[e];
    Qe(r) && ge(a, r);
  } else if (Qe(e)) ge(a, e.bind(n));
  else if (xt(e)) if (Ne(e)) e.forEach((r) => yv(r, t, n, l));
  else {
    const r = Qe(e.handler) ? e.handler.bind(n) : t[e.handler];
    Qe(r) && ge(a, r, e);
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
const B0 = { data: sc, props: cc, emits: cc, methods: Qa, computed: Qa, beforeCreate: Yt, created: Yt, beforeMount: Yt, mounted: Yt, beforeUpdate: Yt, updated: Yt, beforeDestroy: Yt, beforeUnmount: Yt, destroyed: Yt, unmounted: Yt, activated: Yt, deactivated: Yt, errorCaptured: Yt, serverPrefetch: Yt, components: Qa, directives: Qa, watch: O0, provide: sc, inject: F0 };
function sc(e, t) {
  return t ? e ? function() {
    return It(Qe(e) ? e.call(this, this) : e, Qe(t) ? t.call(this, this) : t);
  } : t : e;
}
function F0(e, t) {
  return Qa(yu(e), yu(t));
}
function yu(e) {
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
  return e ? It(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function cc(e, t) {
  return e ? Ne(e) && Ne(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : It(/* @__PURE__ */ Object.create(null), ic(e), ic(t ?? {})) : t;
}
function O0(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = It(/* @__PURE__ */ Object.create(null), e);
  for (const l in t) n[l] = Yt(e[l], t[l]);
  return n;
}
function _v() {
  return { app: null, config: { isNativeTag: Eg, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let V0 = 0;
function I0(e, t) {
  return function(l, a = null) {
    Qe(l) || (l = It({}, l)), a != null && !xt(a) && (a = null);
    const r = _v(), o = /* @__PURE__ */ new WeakSet(), i = [];
    let u = false;
    const c = r.app = { _uid: V0++, _component: l, _props: a, _container: null, _context: r, _instance: null, version: _b, get config() {
      return r.config;
    }, set config(s) {
    }, use(s, ...v) {
      return o.has(s) || (s && Qe(s.install) ? (o.add(s), s.install(c, ...v)) : Qe(s) && (o.add(s), s(c, ...v))), c;
    }, mixin(s) {
      return r.mixins.includes(s) || r.mixins.push(s), c;
    }, component(s, v) {
      return v ? (r.components[s] = v, c) : r.components[s];
    }, directive(s, v) {
      return v ? (r.directives[s] = v, c) : r.directives[s];
    }, mount(s, v, h) {
      if (!u) {
        const m = c._ceVNode || Je(l, a);
        return m.appContext = r, h === true ? h = "svg" : h === false && (h = void 0), e(m, s, h), u = true, c._container = s, s.__vue_app__ = c, ei(m.component);
      }
    }, onUnmount(s) {
      i.push(s);
    }, unmount() {
      u && (En(i, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
    }, provide(s, v) {
      return r.provides[s] = v, c;
    }, runWithContext(s) {
      const v = ma;
      ma = c;
      try {
        return s();
      } finally {
        ma = v;
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
function z0(e, t, n, l = false) {
  const a = {}, r = Sv();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Cv(e, t, a, r);
  for (const o in e.propsOptions[0]) o in a || (a[o] = void 0);
  n ? e.props = l ? a : rs(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function D0(e, t, n, l) {
  const { props: a, attrs: r, vnode: { patchFlag: o } } = e, i = Ge(a), [u] = e.propsOptions;
  let c = false;
  if ((l || o > 0) && !(o & 16)) {
    if (o & 8) {
      const s = e.vnode.dynamicProps;
      for (let v = 0; v < s.length; v++) {
        let h = s[v];
        if (Zo(e.emitsOptions, h)) continue;
        const m = t[h];
        if (u) if (st(r, h)) m !== r[h] && (r[h] = m, c = true);
        else {
          const g = bn(h);
          a[g] = pu(u, i, g, m, e, false);
        }
        else m !== r[h] && (r[h] = m, c = true);
      }
    }
  } else {
    Cv(e, t, a, r) && (c = true);
    let s;
    for (const v in i) (!t || !st(t, v) && ((s = Wl(v)) === v || !st(t, s))) && (u ? n && (n[v] !== void 0 || n[s] !== void 0) && (a[v] = pu(u, i, v, void 0, e, true)) : delete a[v]);
    if (r !== i) for (const v in r) (!t || !st(t, v)) && (delete r[v], c = true);
  }
  c && Kn(e.attrs, "set", "");
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
      const v = r[s];
      n[v] = pu(a, u, v, c[v], e, !st(c, v));
    }
  }
  return o;
}
function pu(e, t, n, l, a, r) {
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
    const s = (v) => {
      u = true;
      const [h, m] = kv(v, t, true);
      It(o, h), m && i.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  if (!r && !u) return xt(e) && l.set(e, ca), ca;
  if (Ne(r)) for (let s = 0; s < r.length; s++) {
    const v = bn(r[s]);
    dc(v) && (o[v] = mt);
  }
  else if (r) for (const s in r) {
    const v = bn(s);
    if (dc(v)) {
      const h = r[s], m = o[v] = Ne(h) || Qe(h) ? { type: h } : It({}, h), g = m.type;
      let _ = false, w = true;
      if (Ne(g)) for (let C = 0; C < g.length; ++C) {
        const p = g[C], y = Qe(p) && p.name;
        if (y === "Boolean") {
          _ = true;
          break;
        } else y === "String" && (w = false);
      }
      else _ = Qe(g) && g.name === "Boolean";
      m[0] = _, m[1] = w, (_ || st(m, "default")) && i.push(v);
    }
  }
  const c = [o, i];
  return xt(e) && l.set(e, c), c;
}
function dc(e) {
  return e[0] !== "$" && !Xa(e);
}
const qv = (e) => e[0] === "_" || e === "$stable", ds = (e) => Ne(e) ? e.map(Ln) : [Ln(e)], H0 = (e, t, n) => {
  if (t._n) return t;
  const l = $t((...a) => ds(t(...a)), n);
  return l._c = false, l;
}, Tv = (e, t, n) => {
  const l = e._ctx;
  for (const a in e) {
    if (qv(a)) continue;
    const r = e[a];
    if (Qe(r)) t[a] = H0(a, r, l);
    else if (r != null) {
      const o = ds(r);
      t[a] = () => o;
    }
  }
}, Mv = (e, t) => {
  const n = ds(t);
  e.slots.default = () => n;
}, Ev = (e, t, n) => {
  for (const l in t) (n || l !== "_") && (e[l] = t[l]);
}, j0 = (e, t, n) => {
  const l = e.slots = Sv();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Ev(l, t, n), n && Af(l, "_", a, true)) : Tv(t, l);
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
  const { insert: l, remove: a, patchProp: r, createElement: o, createText: i, createComment: u, setText: c, setElementText: s, parentNode: v, nextSibling: h, setScopeId: m = Fn, insertStaticContent: g } = e, _ = (S, M, j, J = null, ne = null, Y = null, fe = void 0, he = null, ve = !!M.dynamicChildren) => {
    if (S === M) return;
    S && !fl(S, M) && (J = $(S), T(S, ne, Y, true), S = null), M.patchFlag === -2 && (ve = false, M.dynamicChildren = null);
    const { type: de, ref: le, shapeFlag: Q } = M;
    switch (de) {
      case Jo:
        w(S, M, j, J);
        break;
      case Zt:
        C(S, M, j, J);
        break;
      case Ti:
        S == null && p(M, j, J, fe);
        break;
      case rn:
        q(S, M, j, J, ne, Y, fe, he, ve);
        break;
      default:
        Q & 1 ? x(S, M, j, J, ne, Y, fe, he, ve) : Q & 6 ? E(S, M, j, J, ne, Y, fe, he, ve) : (Q & 64 || Q & 128) && de.process(S, M, j, J, ne, Y, fe, he, ve, ae);
    }
    le != null && ne && go(le, S && S.ref, Y, M || S, !M);
  }, w = (S, M, j, J) => {
    if (S == null) l(M.el = i(M.children), j, J);
    else {
      const ne = M.el = S.el;
      M.children !== S.children && c(ne, M.children);
    }
  }, C = (S, M, j, J) => {
    S == null ? l(M.el = u(M.children || ""), j, J) : M.el = S.el;
  }, p = (S, M, j, J) => {
    [S.el, S.anchor] = g(S.children, M, j, J, S.el, S.anchor);
  }, y = ({ el: S, anchor: M }, j, J) => {
    let ne;
    for (; S && S !== M; ) ne = h(S), l(S, j, J), S = ne;
    l(M, j, J);
  }, b = ({ el: S, anchor: M }) => {
    let j;
    for (; S && S !== M; ) j = h(S), a(S), S = j;
    a(M);
  }, x = (S, M, j, J, ne, Y, fe, he, ve) => {
    M.type === "svg" ? fe = "svg" : M.type === "math" && (fe = "mathml"), S == null ? A(M, j, J, ne, Y, fe, he, ve) : P(S, M, ne, Y, fe, he, ve);
  }, A = (S, M, j, J, ne, Y, fe, he) => {
    let ve, de;
    const { props: le, shapeFlag: Q, transition: ie, dirs: _e } = S;
    if (ve = S.el = o(S.type, Y, le && le.is, le), Q & 8 ? s(ve, S.children) : Q & 16 && N(S.children, ve, null, J, ne, qi(S, Y), fe, he), _e && Cl(S, null, J, "created"), F(ve, S, S.scopeId, fe, J), le) {
      for (const qe in le) qe !== "value" && !Xa(qe) && r(ve, qe, null, le[qe], Y, J);
      "value" in le && r(ve, "value", null, le.value, Y), (de = le.onVnodeBeforeMount) && vn(de, J, S);
    }
    _e && Cl(S, null, J, "beforeMount");
    const ke = Y0(ne, ie);
    ke && ie.beforeEnter(ve), l(ve, M, j), ((de = le && le.onVnodeMounted) || ke || _e) && Bt(() => {
      de && vn(de, J, S), ke && ie.enter(ve), _e && Cl(S, null, J, "mounted");
    }, ne);
  }, F = (S, M, j, J, ne) => {
    if (j && m(S, j), J) for (let Y = 0; Y < J.length; Y++) m(S, J[Y]);
    if (ne) {
      let Y = ne.subTree;
      if (M === Y || po(Y.type) && (Y.ssContent === M || Y.ssFallback === M)) {
        const fe = ne.vnode;
        F(S, fe, fe.scopeId, fe.slotScopeIds, ne.parent);
      }
    }
  }, N = (S, M, j, J, ne, Y, fe, he, ve = 0) => {
    for (let de = ve; de < S.length; de++) {
      const le = S[de] = he ? cl(S[de]) : Ln(S[de]);
      _(null, le, M, j, J, ne, Y, fe, he);
    }
  }, P = (S, M, j, J, ne, Y, fe) => {
    const he = M.el = S.el;
    let { patchFlag: ve, dynamicChildren: de, dirs: le } = M;
    ve |= S.patchFlag & 16;
    const Q = S.props || mt, ie = M.props || mt;
    let _e;
    if (j && kl(j, false), (_e = ie.onVnodeBeforeUpdate) && vn(_e, j, M, S), le && Cl(M, S, j, "beforeUpdate"), j && kl(j, true), (Q.innerHTML && ie.innerHTML == null || Q.textContent && ie.textContent == null) && s(he, ""), de ? R(S.dynamicChildren, de, he, j, J, qi(M, ne), Y) : fe || D(S, M, he, null, j, J, qi(M, ne), Y, false), ve > 0) {
      if (ve & 16) H(he, Q, ie, j, ne);
      else if (ve & 2 && Q.class !== ie.class && r(he, "class", null, ie.class, ne), ve & 4 && r(he, "style", Q.style, ie.style, ne), ve & 8) {
        const ke = M.dynamicProps;
        for (let qe = 0; qe < ke.length; qe++) {
          const Me = ke[qe], He = Q[Me], Ve = ie[Me];
          (Ve !== He || Me === "value") && r(he, Me, He, Ve, ne, j);
        }
      }
      ve & 1 && S.children !== M.children && s(he, M.children);
    } else !fe && de == null && H(he, Q, ie, j, ne);
    ((_e = ie.onVnodeUpdated) || le) && Bt(() => {
      _e && vn(_e, j, M, S), le && Cl(M, S, j, "updated");
    }, J);
  }, R = (S, M, j, J, ne, Y, fe) => {
    for (let he = 0; he < M.length; he++) {
      const ve = S[he], de = M[he], le = ve.el && (ve.type === rn || !fl(ve, de) || ve.shapeFlag & 70) ? v(ve.el) : j;
      _(ve, de, le, null, J, ne, Y, fe, true);
    }
  }, H = (S, M, j, J, ne) => {
    if (M !== j) {
      if (M !== mt) for (const Y in M) !Xa(Y) && !(Y in j) && r(S, Y, M[Y], null, ne, J);
      for (const Y in j) {
        if (Xa(Y)) continue;
        const fe = j[Y], he = M[Y];
        fe !== he && Y !== "value" && r(S, Y, he, fe, ne, J);
      }
      "value" in j && r(S, "value", M.value, j.value, ne);
    }
  }, q = (S, M, j, J, ne, Y, fe, he, ve) => {
    const de = M.el = S ? S.el : i(""), le = M.anchor = S ? S.anchor : i("");
    let { patchFlag: Q, dynamicChildren: ie, slotScopeIds: _e } = M;
    _e && (he = he ? he.concat(_e) : _e), S == null ? (l(de, j, J), l(le, j, J), N(M.children || [], j, le, ne, Y, fe, he, ve)) : Q > 0 && Q & 64 && ie && S.dynamicChildren ? (R(S.dynamicChildren, ie, j, ne, Y, fe, he), (M.key != null || ne && M === ne.subTree) && fs(S, M, true)) : D(S, M, j, le, ne, Y, fe, he, ve);
  }, E = (S, M, j, J, ne, Y, fe, he, ve) => {
    M.slotScopeIds = he, S == null ? M.shapeFlag & 512 ? ne.ctx.activate(M, j, J, fe, ve) : k(M, j, J, ne, Y, fe, ve) : U(S, M, ve);
  }, k = (S, M, j, J, ne, Y, fe) => {
    const he = S.component = mb(S, J, ne);
    if (Ko(S) && (he.ctx.renderer = ae), hb(he, false, fe), he.asyncDep) {
      if (ne && ne.registerDep(he, L, fe), !S.el) {
        const ve = he.subTree = Je(Zt);
        C(null, ve, M, j);
      }
    } else L(he, S, M, j, ne, Y, fe);
  }, U = (S, M, j) => {
    const J = M.component = S.component;
    if (ab(S, M, j)) if (J.asyncDep && !J.asyncResolved) {
      V(J, M, j);
      return;
    } else J.next = M, J.update();
    else M.el = S.el, J.vnode = M;
  }, L = (S, M, j, J, ne, Y, fe) => {
    const he = () => {
      if (S.isMounted) {
        let { next: Q, bu: ie, u: _e, parent: ke, vnode: qe } = S;
        {
          const ye = $v(S);
          if (ye) {
            Q && (Q.el = qe.el, V(S, Q, fe)), ye.asyncDep.then(() => {
              S.isUnmounted || he();
            });
            return;
          }
        }
        let Me = Q, He;
        kl(S, false), Q ? (Q.el = qe.el, V(S, Q, fe)) : Q = qe, ie && Za(ie), (He = Q.props && Q.props.onVnodeBeforeUpdate) && vn(He, ke, Q, qe), kl(S, true);
        const Ve = fc(S), ue = S.subTree;
        S.subTree = Ve, _(ue, Ve, v(ue.el), $(ue), S, ne, Y), Q.el = Ve.el, Me === null && rb(S, Ve.el), _e && Bt(_e, ne), (He = Q.props && Q.props.onVnodeUpdated) && Bt(() => vn(He, ke, Q, qe), ne);
      } else {
        let Q;
        const { el: ie, props: _e } = M, { bm: ke, m: qe, parent: Me, root: He, type: Ve } = S, ue = va(M);
        kl(S, false), ke && Za(ke), !ue && (Q = _e && _e.onVnodeBeforeMount) && vn(Q, Me, M), kl(S, true);
        {
          He.ce && He.ce._injectChildStyle(Ve);
          const ye = S.subTree = fc(S);
          _(null, ye, j, J, S, ne, Y), M.el = ye.el;
        }
        if (qe && Bt(qe, ne), !ue && (Q = _e && _e.onVnodeMounted)) {
          const ye = M;
          Bt(() => vn(Q, Me, ye), ne);
        }
        (M.shapeFlag & 256 || Me && va(Me.vnode) && Me.vnode.shapeFlag & 256) && S.a && Bt(S.a, ne), S.isMounted = true, M = j = J = null;
      }
    };
    S.scope.on();
    const ve = S.effect = new Ff(he);
    S.scope.off();
    const de = S.update = ve.run.bind(ve), le = S.job = ve.runIfDirty.bind(ve);
    le.i = S, le.id = S.uid, ve.scheduler = () => us(le), kl(S, true), de();
  }, V = (S, M, j) => {
    M.component = S;
    const J = S.vnode.props;
    S.vnode = M, S.next = null, D0(S, M.props, J, j), U0(S, M.children, j), pl(), tc(S), _l();
  }, D = (S, M, j, J, ne, Y, fe, he, ve = false) => {
    const de = S && S.children, le = S ? S.shapeFlag : 0, Q = M.children, { patchFlag: ie, shapeFlag: _e } = M;
    if (ie > 0) {
      if (ie & 128) {
        be(de, Q, j, J, ne, Y, fe, he, ve);
        return;
      } else if (ie & 256) {
        te(de, Q, j, J, ne, Y, fe, he, ve);
        return;
      }
    }
    _e & 8 ? (le & 16 && B(de, ne, Y), Q !== de && s(j, Q)) : le & 16 ? _e & 16 ? be(de, Q, j, J, ne, Y, fe, he, ve) : B(de, ne, Y, true) : (le & 8 && s(j, ""), _e & 16 && N(Q, j, J, ne, Y, fe, he, ve));
  }, te = (S, M, j, J, ne, Y, fe, he, ve) => {
    S = S || ca, M = M || ca;
    const de = S.length, le = M.length, Q = Math.min(de, le);
    let ie;
    for (ie = 0; ie < Q; ie++) {
      const _e = M[ie] = ve ? cl(M[ie]) : Ln(M[ie]);
      _(S[ie], _e, j, null, ne, Y, fe, he, ve);
    }
    de > le ? B(S, ne, Y, true, false, Q) : N(M, j, J, ne, Y, fe, he, ve, Q);
  }, be = (S, M, j, J, ne, Y, fe, he, ve) => {
    let de = 0;
    const le = M.length;
    let Q = S.length - 1, ie = le - 1;
    for (; de <= Q && de <= ie; ) {
      const _e = S[de], ke = M[de] = ve ? cl(M[de]) : Ln(M[de]);
      if (fl(_e, ke)) _(_e, ke, j, null, ne, Y, fe, he, ve);
      else break;
      de++;
    }
    for (; de <= Q && de <= ie; ) {
      const _e = S[Q], ke = M[ie] = ve ? cl(M[ie]) : Ln(M[ie]);
      if (fl(_e, ke)) _(_e, ke, j, null, ne, Y, fe, he, ve);
      else break;
      Q--, ie--;
    }
    if (de > Q) {
      if (de <= ie) {
        const _e = ie + 1, ke = _e < le ? M[_e].el : J;
        for (; de <= ie; ) _(null, M[de] = ve ? cl(M[de]) : Ln(M[de]), j, ke, ne, Y, fe, he, ve), de++;
      }
    } else if (de > ie) for (; de <= Q; ) T(S[de], ne, Y, true), de++;
    else {
      const _e = de, ke = de, qe = /* @__PURE__ */ new Map();
      for (de = ke; de <= ie; de++) {
        const Ce = M[de] = ve ? cl(M[de]) : Ln(M[de]);
        Ce.key != null && qe.set(Ce.key, de);
      }
      let Me, He = 0;
      const Ve = ie - ke + 1;
      let ue = false, ye = 0;
      const re = new Array(Ve);
      for (de = 0; de < Ve; de++) re[de] = 0;
      for (de = _e; de <= Q; de++) {
        const Ce = S[de];
        if (He >= Ve) {
          T(Ce, ne, Y, true);
          continue;
        }
        let Oe;
        if (Ce.key != null) Oe = qe.get(Ce.key);
        else for (Me = ke; Me <= ie; Me++) if (re[Me - ke] === 0 && fl(Ce, M[Me])) {
          Oe = Me;
          break;
        }
        Oe === void 0 ? T(Ce, ne, Y, true) : (re[Oe - ke] = de + 1, Oe >= ye ? ye = Oe : ue = true, _(Ce, M[Oe], j, null, ne, Y, fe, he, ve), He++);
      }
      const pe = ue ? G0(re) : ca;
      for (Me = pe.length - 1, de = Ve - 1; de >= 0; de--) {
        const Ce = ke + de, Oe = M[Ce], $e = Ce + 1 < le ? M[Ce + 1].el : J;
        re[de] === 0 ? _(null, Oe, j, $e, ne, Y, fe, he, ve) : ue && (Me < 0 || de !== pe[Me] ? K(Oe, j, $e, 2) : Me--);
      }
    }
  }, K = (S, M, j, J, ne = null) => {
    const { el: Y, type: fe, transition: he, children: ve, shapeFlag: de } = S;
    if (de & 6) {
      K(S.component.subTree, M, j, J);
      return;
    }
    if (de & 128) {
      S.suspense.move(M, j, J);
      return;
    }
    if (de & 64) {
      fe.move(S, M, j, ae);
      return;
    }
    if (fe === rn) {
      l(Y, M, j);
      for (let Q = 0; Q < ve.length; Q++) K(ve[Q], M, j, J);
      l(S.anchor, M, j);
      return;
    }
    if (fe === Ti) {
      y(S, M, j);
      return;
    }
    if (J !== 2 && de & 1 && he) if (J === 0) he.beforeEnter(Y), l(Y, M, j), Bt(() => he.enter(Y), ne);
    else {
      const { leave: Q, delayLeave: ie, afterLeave: _e } = he, ke = () => l(Y, M, j), qe = () => {
        Q(Y, () => {
          ke(), _e && _e();
        });
      };
      ie ? ie(Y, ke, qe) : qe();
    }
    else l(Y, M, j);
  }, T = (S, M, j, J = false, ne = false) => {
    const { type: Y, props: fe, ref: he, children: ve, dynamicChildren: de, shapeFlag: le, patchFlag: Q, dirs: ie, cacheIndex: _e } = S;
    if (Q === -2 && (ne = false), he != null && go(he, null, j, S, true), _e != null && (M.renderCache[_e] = void 0), le & 256) {
      M.ctx.deactivate(S);
      return;
    }
    const ke = le & 1 && ie, qe = !va(S);
    let Me;
    if (qe && (Me = fe && fe.onVnodeBeforeUnmount) && vn(Me, M, S), le & 6) oe(S.component, j, J);
    else {
      if (le & 128) {
        S.suspense.unmount(j, J);
        return;
      }
      ke && Cl(S, null, M, "beforeUnmount"), le & 64 ? S.type.remove(S, M, j, ae, J) : de && !de.hasOnce && (Y !== rn || Q > 0 && Q & 64) ? B(de, M, j, false, true) : (Y === rn && Q & 384 || !ne && le & 16) && B(ve, M, j), J && Z(S);
    }
    (qe && (Me = fe && fe.onVnodeUnmounted) || ke) && Bt(() => {
      Me && vn(Me, M, S), ke && Cl(S, null, M, "unmounted");
    }, j);
  }, Z = (S) => {
    const { type: M, el: j, anchor: J, transition: ne } = S;
    if (M === rn) {
      O(j, J);
      return;
    }
    if (M === Ti) {
      b(S);
      return;
    }
    const Y = () => {
      a(j), ne && !ne.persisted && ne.afterLeave && ne.afterLeave();
    };
    if (S.shapeFlag & 1 && ne && !ne.persisted) {
      const { leave: fe, delayLeave: he } = ne, ve = () => fe(j, Y);
      he ? he(S.el, Y, ve) : ve();
    } else Y();
  }, O = (S, M) => {
    let j;
    for (; S !== M; ) j = h(S), a(S), S = j;
    a(M);
  }, oe = (S, M, j) => {
    const { bum: J, scope: ne, job: Y, subTree: fe, um: he, m: ve, a: de } = S;
    yo(ve), yo(de), J && Za(J), ne.stop(), Y && (Y.flags |= 8, T(fe, S, M, j)), he && Bt(he, M), Bt(() => {
      S.isUnmounted = true;
    }, M), M && M.pendingBranch && !M.isUnmounted && S.asyncDep && !S.asyncResolved && S.suspenseId === M.pendingId && (M.deps--, M.deps === 0 && M.resolve());
  }, B = (S, M, j, J = false, ne = false, Y = 0) => {
    for (let fe = Y; fe < S.length; fe++) T(S[fe], M, j, J, ne);
  }, $ = (S) => {
    if (S.shapeFlag & 6) return $(S.component.subTree);
    if (S.shapeFlag & 128) return S.suspense.next();
    const M = h(S.anchor || S.el), j = M && M[av];
    return j ? h(j) : M;
  };
  let ee = false;
  const I = (S, M, j) => {
    S == null ? M._vnode && T(M._vnode, null, null, true) : _(M._vnode || null, S, M, null, null, null, j), M._vnode = S, ee || (ee = true, tc(), tv(), ee = false);
  }, ae = { p: _, um: T, m: K, r: Z, mt: k, mc: N, pc: D, pbc: R, n: $, o: e };
  return { render: I, hydrate: void 0, createApp: I0(I) };
}
function qi({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function kl({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Y0(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function fs(e, t, n = false) {
  const l = e.children, a = t.children;
  if (Ne(l) && Ne(a)) for (let r = 0; r < l.length; r++) {
    const o = l[r];
    let i = a[r];
    i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = a[r] = cl(a[r]), i.el = o.el), !n && i.patchFlag !== -2 && fs(o, i)), i.type === Jo && (i.el = o.el);
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
function $v(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : $v(t);
}
function yo(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const X0 = Symbol.for("v-scx"), Z0 = () => Tt(X0);
function ge(e, t, n) {
  return Av(e, t, n);
}
function Av(e, t, n = mt) {
  const { immediate: l, deep: a, flush: r, once: o } = n, i = It({}, n), u = t && l || !t && r !== "post";
  let c;
  if (br) {
    if (r === "sync") {
      const m = Z0();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!u) {
      const m = () => {
      };
      return m.stop = Fn, m.resume = Fn, m.pause = Fn, m;
    }
  }
  const s = Ht;
  i.call = (m, g, _) => En(m, s, g, _);
  let v = false;
  r === "post" ? i.scheduler = (m) => {
    Bt(m, s && s.suspense);
  } : r !== "sync" && (v = true, i.scheduler = (m, g) => {
    g ? m() : us(m);
  }), i.augmentJob = (m) => {
    t && (m.flags |= 4), v && (m.flags |= 2, s && (m.id = s.uid, m.i = s));
  };
  const h = h0(e, t, i);
  return br && (c ? c.push(h) : u && h()), h;
}
function J0(e, t, n) {
  const l = this.proxy, a = At(e) ? e.includes(".") ? Rv(l, e) : () => l[e] : e.bind(l, l);
  let r;
  Qe(t) ? r = t : (r = t.handler, n = t);
  const o = Mr(this), i = Av(a, r.bind(l), n);
  return o(), i;
}
function Rv(e, t) {
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
  o && (o.trim && (a = n.map((s) => At(s) ? s.trim() : s)), o.number && (a = n.map(Bg)));
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
      s && (i = true, It(o, s));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !i ? (xt(e) && l.set(e, null), null) : (Ne(r) ? r.forEach((u) => o[u] = null) : It(o, r), xt(e) && l.set(e, o), o);
}
function Zo(e, t) {
  return !e || !Do(t) ? false : (t = t.slice(2).replace(/Once$/, ""), st(e, t[0].toLowerCase() + t.slice(1)) || st(e, Wl(t)) || st(e, t));
}
function fc(e) {
  const { type: t, vnode: n, proxy: l, withProxy: a, propsOptions: [r], slots: o, attrs: i, emit: u, render: c, renderCache: s, props: v, data: h, setupState: m, ctx: g, inheritAttrs: _ } = e, w = ho(e);
  let C, p;
  try {
    if (n.shapeFlag & 4) {
      const b = a || l, x = b;
      C = Ln(c.call(x, b, s, v, m, h, g)), p = i;
    } else {
      const b = t;
      C = Ln(b.length > 1 ? b(v, { attrs: i, slots: o, emit: u }) : b(v, null)), p = t.props ? i : nb(i);
    }
  } catch (b) {
    ar.length = 0, Qo(b, e, 1), C = Je(Zt);
  }
  let y = C;
  if (p && _ !== false) {
    const b = Object.keys(p), { shapeFlag: x } = y;
    b.length && x & 7 && (r && b.some(Yu) && (p = lb(p, r)), y = Gn(y, p, false, true));
  }
  return n.dirs && (y = Gn(y, null, false, true), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && bl(y, n.transition), C = y, ho(w), C;
}
const nb = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || Do(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, lb = (e, t) => {
  const n = {};
  for (const l in e) (!Yu(l) || !(l.slice(9) in t)) && (n[l] = e[l]);
  return n;
};
function ab(e, t, n) {
  const { props: l, children: a, component: r } = e, { props: o, children: i, patchFlag: u } = t, c = r.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && u >= 0) {
    if (u & 1024) return true;
    if (u & 16) return l ? vc(l, o, c) : !!o;
    if (u & 8) {
      const s = t.dynamicProps;
      for (let v = 0; v < s.length; v++) {
        const h = s[v];
        if (o[h] !== l[h] && !Zo(c, h)) return true;
      }
    }
  } else return (a || i) && (!i || !i.$stable) ? true : l === o ? false : l ? o ? vc(l, o, c) : true : !!o;
  return false;
}
function vc(e, t, n) {
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
function Yn(e = false) {
  ar.push(un = e ? null : []);
}
function ib() {
  ar.pop(), un = ar[ar.length - 1] || null;
}
let hr = 1;
function mc(e, t = false) {
  hr += e, e < 0 && un && t && (un.hasOnce = true);
}
function Lv(e) {
  return e.dynamicChildren = hr > 0 ? un || ca : null, ib(), hr > 0 && un && un.push(e), e;
}
function Bv(e, t, n, l, a, r) {
  return Lv(Il(e, t, n, l, a, r, true));
}
function Pl(e, t, n, l, a) {
  return Lv(Je(e, t, n, l, a, true));
}
function gr(e) {
  return e ? e.__v_isVNode === true : false;
}
function fl(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Fv = ({ key: e }) => e ?? null, no = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? At(e) || pt(e) || Qe(e) ? { i: tn, r: e, k: t, f: !!n } : e : null);
function Il(e, t = null, n = null, l = 0, a = null, r = e === rn ? 0 : 1, o = false, i = false) {
  const u = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && Fv(t), ref: t && no(t), scopeId: lv, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: r, patchFlag: l, dynamicProps: a, dynamicChildren: null, appContext: null, ctx: tn };
  return i ? (vs(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= At(n) ? 8 : 16), hr > 0 && !o && un && (u.patchFlag > 0 || r & 6) && u.patchFlag !== 32 && un.push(u), u;
}
const Je = ub;
function ub(e, t = null, n = null, l = 0, a = null, r = false) {
  if ((!e || e === $0) && (e = Zt), gr(e)) {
    const i = Gn(e, t, true);
    return n && vs(i, n), hr > 0 && !r && un && (i.shapeFlag & 6 ? un[un.indexOf(e)] = i : un.push(i)), i.patchFlag = -2, i;
  }
  if (pb(e) && (e = e.__vccOpts), t) {
    t = sb(t);
    let { class: i, style: u } = t;
    i && !At(i) && (t.class = Zu(i)), xt(u) && (is(u) && !Ne(u) && (u = It({}, u)), t.style = jo(u));
  }
  const o = At(e) ? 1 : po(e) ? 128 : rv(e) ? 64 : xt(e) ? 4 : Qe(e) ? 2 : 0;
  return Il(e, t, n, l, a, o, r, true);
}
function sb(e) {
  return e ? is(e) || xv(e) ? It({}, e) : e : null;
}
function Gn(e, t, n = false, l = false) {
  const { props: a, ref: r, patchFlag: o, children: i, transition: u } = e, c = t ? db(a || {}, t) : a, s = { __v_isVNode: true, __v_skip: true, type: e.type, props: c, key: c && Fv(c), ref: t && t.ref ? n && r ? Ne(r) ? r.concat(no(t)) : [r, no(t)] : no(t) : r, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: i, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== rn ? o === -1 ? 16 : o | 16 : o, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: u, component: e.component, suspense: e.suspense, ssContent: e.ssContent && Gn(e.ssContent), ssFallback: e.ssFallback && Gn(e.ssFallback), el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return u && l && bl(s, u.clone(s)), s;
}
function Ll(e = " ", t = 0) {
  return Je(Jo, null, e, t);
}
function hc(e = "", t = false) {
  return t ? (Yn(), Pl(Zt, null, e)) : Je(Zt, null, e);
}
function Ln(e) {
  return e == null || typeof e == "boolean" ? Je(Zt) : Ne(e) ? Je(rn, null, e.slice()) : gr(e) ? cl(e) : Je(Jo, null, String(e));
}
function cl(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Gn(e);
}
function vs(e, t) {
  let n = 0;
  const { shapeFlag: l } = e;
  if (t == null) t = null;
  else if (Ne(t)) n = 16;
  else if (typeof t == "object") if (l & 65) {
    const a = t.default;
    a && (a._c && (a._d = false), vs(e, a()), a._c && (a._d = true));
    return;
  } else {
    n = 32;
    const a = t._;
    !a && !xv(t) ? t._ctx = tn : a === 3 && tn && (tn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else Qe(t) ? (t = { default: t, _ctx: tn }, n = 32) : (t = String(t), l & 64 ? (n = 16, t = [Ll(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function db(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const l = e[n];
    for (const a in l) if (a === "class") t.class !== l.class && (t.class = Zu([t.class, l.class]));
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
let _o, _u;
{
  const e = qr(), t = (n, l) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(l), (r) => {
      a.length > 1 ? a.forEach((o) => o(r)) : a[0](r);
    };
  };
  _o = t("__VUE_INSTANCE_SETTERS__", (n) => Ht = n), _u = t("__VUE_SSR_SETTERS__", (n) => br = n);
}
const Mr = (e) => {
  const t = Ht;
  return _o(e), e.scope.on(), () => {
    e.scope.off(), _o(t);
  };
}, gc = () => {
  Ht && Ht.scope.off(), _o(null);
};
function Ov(e) {
  return e.vnode.shapeFlag & 4;
}
let br = false;
function hb(e, t = false, n = false) {
  t && _u(t);
  const { props: l, children: a } = e.vnode, r = Ov(e);
  z0(e, l, r, t), j0(e, a, n);
  const o = r ? gb(e, t) : void 0;
  return t && _u(false), o;
}
function gb(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, R0);
  const { setup: l } = n;
  if (l) {
    pl();
    const a = e.setupContext = l.length > 1 ? yb(e) : null, r = Mr(e), o = Tr(l, e, 0, [e.props, a]), i = Mf(o);
    if (_l(), r(), (i || e.sp) && !va(e) && vv(e), i) {
      if (o.then(gc, gc), t) return o.then((u) => {
        bc(e, u);
      }).catch((u) => {
        Qo(u, e, 0);
      });
      e.asyncDep = o;
    } else bc(e, o);
  } else Vv(e);
}
function bc(e, t, n) {
  Qe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : xt(t) && (e.setupState = Zf(t)), Vv(e);
}
function Vv(e, t, n) {
  const l = e.type;
  e.render || (e.render = l.render || Fn);
  {
    const a = Mr(e);
    pl();
    try {
      P0(e);
    } finally {
      _l(), a();
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
function wu(e, t = true) {
  return Qe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function pb(e) {
  return Qe(e) && "__vccOpts" in e;
}
const f = (e, t) => v0(e, t, br);
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
let Su;
const yc = typeof window < "u" && window.trustedTypes;
if (yc) try {
  Su = yc.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const Iv = Su ? (e) => Su.createHTML(e) : (e) => e, wb = "http://www.w3.org/2000/svg", Sb = "http://www.w3.org/1998/Math/MathML", Qn = typeof document < "u" ? document : null, pc = Qn && Qn.createElement("template"), xb = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, l) => {
  const a = t === "svg" ? Qn.createElementNS(wb, e) : t === "mathml" ? Qn.createElementNS(Sb, e) : n ? Qn.createElement(e, { is: n }) : Qn.createElement(e);
  return e === "select" && l && l.multiple != null && a.setAttribute("multiple", l.multiple), a;
}, createText: (e) => Qn.createTextNode(e), createComment: (e) => Qn.createComment(e), setText: (e, t) => {
  e.nodeValue = t;
}, setElementText: (e, t) => {
  e.textContent = t;
}, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => Qn.querySelector(e), setScopeId(e, t) {
  e.setAttribute(t, "");
}, insertStaticContent(e, t, n, l, a, r) {
  const o = n ? n.previousSibling : t.lastChild;
  if (a && (a === r || a.nextSibling)) for (; t.insertBefore(a.cloneNode(true), n), !(a === r || !(a = a.nextSibling)); ) ;
  else {
    pc.innerHTML = Iv(l === "svg" ? `<svg>${e}</svg>` : l === "mathml" ? `<math>${e}</math>` : e);
    const i = pc.content;
    if (l === "svg" || l === "mathml") {
      const u = i.firstChild;
      for (; u.firstChild; ) i.appendChild(u.firstChild);
      i.removeChild(u);
    }
    t.insertBefore(i, n);
  }
  return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, nl = "transition", Ba = "animation", wa = Symbol("_vtc"), zv = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, Dv = It({}, sv, zv), Cb = (e) => (e.displayName = "Transition", e.props = Dv, e), Ft = Cb((e, { slots: t }) => d(S0, Nv(e), t)), ql = (e, t = []) => {
  Ne(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, _c = (e) => e ? Ne(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function Nv(e) {
  const t = {};
  for (const q in e) q in zv || (t[q] = e[q]);
  if (e.css === false) return t;
  const { name: n = "v", type: l, duration: a, enterFromClass: r = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: i = `${n}-enter-to`, appearFromClass: u = r, appearActiveClass: c = o, appearToClass: s = i, leaveFromClass: v = `${n}-leave-from`, leaveActiveClass: h = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, g = kb(a), _ = g && g[0], w = g && g[1], { onBeforeEnter: C, onEnter: p, onEnterCancelled: y, onLeave: b, onLeaveCancelled: x, onBeforeAppear: A = C, onAppear: F = p, onAppearCancelled: N = y } = t, P = (q, E, k, U) => {
    q._enterCancelled = U, ol(q, E ? s : i), ol(q, E ? c : o), k && k();
  }, R = (q, E) => {
    q._isLeaving = false, ol(q, v), ol(q, m), ol(q, h), E && E();
  }, H = (q) => (E, k) => {
    const U = q ? F : p, L = () => P(E, q, k);
    ql(U, [E, L]), wc(() => {
      ol(E, q ? u : r), Rn(E, q ? s : i), _c(U) || Sc(E, l, _, L);
    });
  };
  return It(t, { onBeforeEnter(q) {
    ql(C, [q]), Rn(q, r), Rn(q, o);
  }, onBeforeAppear(q) {
    ql(A, [q]), Rn(q, u), Rn(q, c);
  }, onEnter: H(false), onAppear: H(true), onLeave(q, E) {
    q._isLeaving = true;
    const k = () => R(q, E);
    Rn(q, v), q._enterCancelled ? (Rn(q, h), xu()) : (xu(), Rn(q, h)), wc(() => {
      q._isLeaving && (ol(q, v), Rn(q, m), _c(b) || Sc(q, l, w, k));
    }), ql(b, [q, k]);
  }, onEnterCancelled(q) {
    P(q, false, void 0, true), ql(y, [q]);
  }, onAppearCancelled(q) {
    P(q, true, void 0, true), ql(N, [q]);
  }, onLeaveCancelled(q) {
    R(q), ql(x, [q]);
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
function Rn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[wa] || (e[wa] = /* @__PURE__ */ new Set())).add(t);
}
function ol(e, t) {
  t.split(/\s+/).forEach((l) => l && e.classList.remove(l));
  const n = e[wa];
  n && (n.delete(t), n.size || (e[wa] = void 0));
}
function wc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let qb = 0;
function Sc(e, t, n, l) {
  const a = e._endId = ++qb, r = () => {
    a === e._endId && l();
  };
  if (n != null) return setTimeout(r, n);
  const { type: o, timeout: i, propCount: u } = Hv(e, t);
  if (!o) return l();
  const c = o + "end";
  let s = 0;
  const v = () => {
    e.removeEventListener(c, h), r();
  }, h = (m) => {
    m.target === e && ++s >= u && v();
  };
  setTimeout(() => {
    s < u && v();
  }, i + 1), e.addEventListener(c, h);
}
function Hv(e, t) {
  const n = window.getComputedStyle(e), l = (g) => (n[g] || "").split(", "), a = l(`${nl}Delay`), r = l(`${nl}Duration`), o = xc(a, r), i = l(`${Ba}Delay`), u = l(`${Ba}Duration`), c = xc(i, u);
  let s = null, v = 0, h = 0;
  t === nl ? o > 0 && (s = nl, v = o, h = r.length) : t === Ba ? c > 0 && (s = Ba, v = c, h = u.length) : (v = Math.max(o, c), s = v > 0 ? o > c ? nl : Ba : null, h = s ? s === nl ? r.length : u.length : 0);
  const m = s === nl && /\b(transform|all)(,|$)/.test(l(`${nl}Property`).toString());
  return { type: s, timeout: v, propCount: h, hasTransform: m };
}
function xc(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, l) => Cc(n) + Cc(e[l])));
}
function Cc(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function xu() {
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
function $b(e, t, n) {
  const l = e.style, a = At(n);
  let r = false;
  if (n && !a) {
    if (t) if (At(t)) for (const o of t.split(";")) {
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
const kc = /\s*!important$/;
function lo(e, t, n) {
  if (Ne(n)) n.forEach((l) => lo(e, t, l));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const l = Ab(e, t);
    kc.test(n) ? e.setProperty(Wl(l), n.replace(kc, ""), "important") : e[l] = n;
  }
}
const qc = ["Webkit", "Moz", "ms"], Ei = {};
function Ab(e, t) {
  const n = Ei[t];
  if (n) return n;
  let l = bn(t);
  if (l !== "filter" && l in e) return Ei[t] = l;
  l = Ho(l);
  for (let a = 0; a < qc.length; a++) {
    const r = qc[a] + l;
    if (r in e) return Ei[t] = r;
  }
  return t;
}
const Tc = "http://www.w3.org/1999/xlink";
function Mc(e, t, n, l, a, r = Ng(t)) {
  l && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Tc, t.slice(6, t.length)) : e.setAttributeNS(Tc, t, n) : n == null || r && !Rf(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : yl(n) ? String(n) : n);
}
function Ec(e, t, n, l, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Iv(n) : n);
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
    i === "boolean" ? n = Rf(n) : n == null && i === "string" ? (n = "", o = true) : i === "number" && (n = 0, o = true);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(a || t);
}
function Rb(e, t, n, l) {
  e.addEventListener(t, n, l);
}
function Pb(e, t, n, l) {
  e.removeEventListener(t, n, l);
}
const $c = Symbol("_vei");
function Lb(e, t, n, l, a = null) {
  const r = e[$c] || (e[$c] = {}), o = r[t];
  if (l && o) o.value = l;
  else {
    const [i, u] = Bb(t);
    if (l) {
      const c = r[t] = Vb(l, a);
      Rb(e, i, c, u);
    } else o && (Pb(e, i, o, u), r[t] = void 0);
  }
}
const Ac = /(?:Once|Passive|Capture)$/;
function Bb(e) {
  let t;
  if (Ac.test(e)) {
    t = {};
    let l;
    for (; l = e.match(Ac); ) e = e.slice(0, e.length - l[0].length), t[l[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : Wl(e.slice(2)), t];
}
let $i = 0;
const Fb = Promise.resolve(), Ob = () => $i || (Fb.then(() => $i = 0), $i = Date.now());
function Vb(e, t) {
  const n = (l) => {
    if (!l._vts) l._vts = Date.now();
    else if (l._vts <= n.attached) return;
    En(Ib(l, n.value), t, 5, [l]);
  };
  return n.value = e, n.attached = Ob(), n;
}
function Ib(e, t) {
  if (Ne(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((l) => (a) => !a._stopped && l && l(a));
  } else return t;
}
const Rc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, zb = (e, t, n, l, a, r) => {
  const o = a === "svg";
  t === "class" ? Tb(e, l, o) : t === "style" ? $b(e, n, l) : Do(t) ? Yu(t) || Lb(e, t, n, l, r) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Db(e, t, l, o)) ? (Ec(e, t, l), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Mc(e, t, l, o, r, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !At(l)) ? Ec(e, bn(t), l, r, t) : (t === "true-value" ? e._trueValue = l : t === "false-value" && (e._falseValue = l), Mc(e, t, l, o));
};
function Db(e, t, n, l) {
  if (l) return !!(t === "innerHTML" || t === "textContent" || t in e && Rc(t) && Qe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE") return false;
  }
  return Rc(t) && At(n) ? false : t in e;
}
const Qv = /* @__PURE__ */ new WeakMap(), Kv = /* @__PURE__ */ new WeakMap(), So = Symbol("_moveCb"), Pc = Symbol("_enterCb"), Nb = (e) => (delete e.props.mode, e), Hb = Nb({ name: "TransitionGroup", props: It({}, Dv, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = Se(), l = uv();
  let a, r;
  return Go(() => {
    if (!a.length) return;
    const o = e.moveClass || `${e.name || "v"}-move`;
    if (!Wb(a[0].el, n.vnode.el, o)) return;
    a.forEach(Ub), a.forEach(Qb);
    const i = a.filter(Kb);
    xu(), i.forEach((u) => {
      const c = u.el, s = c.style;
      Rn(c, o), s.transform = s.webkitTransform = s.transitionDuration = "";
      const v = c[So] = (h) => {
        h && h.target !== c || (!h || /transform$/.test(h.propertyName)) && (c.removeEventListener("transitionend", v), c[So] = null, ol(c, o));
      };
      c.addEventListener("transitionend", v);
    });
  }), () => {
    const o = Ge(e), i = Nv(o);
    let u = o.tag || rn;
    if (a = [], r) for (let c = 0; c < r.length; c++) {
      const s = r[c];
      s.el && s.el instanceof Element && (a.push(s), bl(s, mr(s, i, l, n)), Qv.set(s, s.el.getBoundingClientRect()));
    }
    r = t.default ? ss(t.default()) : [];
    for (let c = 0; c < r.length; c++) {
      const s = r[c];
      s.key != null && bl(s, mr(s, i, l, n));
    }
    return Je(u, null, r);
  };
} }), jb = Hb;
function Ub(e) {
  const t = e.el;
  t[So] && t[So](), t[Pc] && t[Pc]();
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
const Yb = It({ patchProp: zb }, xb);
let Lc;
function Gb() {
  return Lc || (Lc = K0(Yb));
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
  return At(e) ? document.querySelector(e) : e;
}
/*!
* Quasar Framework v2.18.1
* (c) 2015-present Razvan Stoenescu
* Released under the MIT License.
*/
var Ai = null;
function ms() {
  return Ai !== null ? Ai : Ai = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
typeof __QUASAR_SSR__ != "boolean" && (ms().__QUASAR_SSR__ = false);
typeof __QUASAR_SSR_CLIENT__ != "boolean" && (ms().__QUASAR_SSR_CLIENT__ = false);
typeof __QUASAR_SSR_PWA__ != "boolean" && (ms().__QUASAR_SSR_PWA__ = false);
function Ot(e, t, n, l) {
  return Object.defineProperty(e, t, { get: n, set: l, enumerable: true }), e;
}
function Yv(e, t) {
  for (const n in t) Ot(e, n, t[n]);
  return e;
}
var nn = W(__QUASAR_SSR_CLIENT__ && (__QUASAR_SSR_PWA__ ? document.body.getAttribute("data-server-rendered") !== null : true)), Cu;
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
    if (window.Capacitor !== void 0 ? (a.capacitor = true, a.nativeMobile = true, a.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (a.cordova = true, a.nativeMobile = true, a.nativeMobileWrapper = "cordova"), nn.value === true && (Cu = { is: { ...a } }), Gv === true && a.mac === true && (a.desktop === true && a.safari === true || a.nativeMobile === true && a.android !== true && a.ios !== true && a.ipad !== true)) {
      delete a.mac, delete a.desktop;
      const o = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
      Object.assign(a, { mobile: true, ios: true, platform: o, [o]: true });
    }
    a.mobile !== true && window.navigator.userAgentData && window.navigator.userAgentData.mobile && (delete a.desktop, a.mobile = true);
  }
  return a;
}
var Bc = navigator.userAgent || navigator.vendor || window.opera, ny = { has: { touch: false, webStorage: false }, within: { iframe: false } }, Ie = { userAgent: Bc, is: ty(Bc), has: { touch: Gv }, within: { iframe: window.self !== window.top } }, ku = { install(e) {
  const { $q: t } = e;
  nn.value === true ? (e.onSSRHydrated.push(() => {
    Object.assign(t.platform, Ie), nn.value = false;
  }), t.platform = Bn(this)) : t.platform = this;
} };
{
  let e;
  Ot(Ie.has, "webStorage", () => {
    if (e !== void 0) return e;
    try {
      if (window.localStorage) return e = true, true;
    } catch {
    }
    return e = false, false;
  }), Object.assign(ku, Ie), nn.value === true && (Object.assign(ku, Cu, ny), Cu = null);
}
var Xv = ku;
function me(e) {
  return Uo(/* @__PURE__ */ Ta(e));
}
function An(e) {
  return Uo(e);
}
var Sl = (e, t) => {
  const n = Bn(e);
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
var Ri = ["sm", "md", "lg", "xl"], { passive: Fc } = dt, ay = Sl({ width: 0, height: 0, name: "xs", sizes: { sm: 600, md: 1024, lg: 1440, xl: 1920 }, lt: { sm: true, md: true, lg: true, xl: true }, gt: { xs: false, sm: false, md: false, lg: false }, xs: true, sm: false, md: false, lg: false, xl: false }, { setSizes: St, setDebounce: St, install({ $q: e, onSSRHydrated: t }) {
  var _a2;
  if (e.screen = this, this.__installed === true) {
    e.config.screen !== void 0 && (e.config.screen.bodyClasses === false ? document.body.classList.remove(`screen--${this.name}`) : this.__update(true));
    return;
  }
  const { visualViewport: n } = window, l = n || window, a = document.scrollingElement || document.documentElement, r = n === void 0 || Ie.is.mobile === true ? () => [Math.max(window.innerWidth, a.clientWidth), Math.max(window.innerHeight, a.clientHeight)] : () => [n.width * n.scale + window.innerWidth - a.clientWidth, n.height * n.scale + window.innerHeight - a.clientHeight], o = ((_a2 = e.config.screen) == null ? void 0 : _a2.bodyClasses) === true;
  this.__update = (v) => {
    const [h, m] = r();
    if (m !== this.height && (this.height = m), h !== this.width) this.width = h;
    else if (v !== true) return;
    let g = this.sizes;
    this.gt.xs = h >= g.sm, this.gt.sm = h >= g.md, this.gt.md = h >= g.lg, this.gt.lg = h >= g.xl, this.lt.sm = h < g.sm, this.lt.md = h < g.md, this.lt.lg = h < g.lg, this.lt.xl = h < g.xl, this.xs = this.lt.sm, this.sm = this.gt.xs === true && this.lt.md === true, this.md = this.gt.sm === true && this.lt.lg === true, this.lg = this.gt.md === true && this.lt.xl === true, this.xl = this.gt.lg, g = this.xs === true && "xs" || this.sm === true && "sm" || this.md === true && "md" || this.lg === true && "lg" || "xl", g !== this.name && (o === true && (document.body.classList.remove(`screen--${this.name}`), document.body.classList.add(`screen--${g}`)), this.name = g);
  };
  let i, u = {}, c = 16;
  this.setSizes = (v) => {
    Ri.forEach((h) => {
      v[h] !== void 0 && (u[h] = v[h]);
    });
  }, this.setDebounce = (v) => {
    c = v;
  };
  const s = () => {
    const v = getComputedStyle(document.body);
    v.getPropertyValue("--q-size-sm") && Ri.forEach((h) => {
      this.sizes[h] = parseInt(v.getPropertyValue(`--q-size-${h}`), 10);
    }), this.setSizes = (h) => {
      Ri.forEach((m) => {
        h[m] && (this.sizes[m] = h[m]);
      }), this.__update(true);
    }, this.setDebounce = (h) => {
      i !== void 0 && l.removeEventListener("resize", i, Fc), i = h > 0 ? Ea(this.__update, h) : this.__update, l.addEventListener("resize", i, Fc);
    }, this.setDebounce(c), Object.keys(u).length !== 0 ? (this.setSizes(u), u = void 0) : this.__update(), o === true && this.name === "xs" && document.body.classList.add("screen--xs");
  };
  nn.value === true ? t.push(s) : s();
} }), Ut = Sl({ isActive: false, mode: false }, { __media: void 0, set(e) {
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
  const { is: e } = Ie, t = document.body.className, n = new Set(t.replace(/ {2}/g, " ").split(" "));
  if (e.nativeMobile !== true && e.electron !== true && e.bex !== true) {
    if (e.desktop === true) n.delete("mobile"), n.delete("platform-ios"), n.delete("platform-android"), n.add("desktop");
    else if (e.mobile === true) {
      n.delete("desktop"), n.add("mobile"), n.delete("platform-ios"), n.delete("platform-android");
      const a = em(e);
      a !== void 0 && n.add(`platform-${a}`);
    }
  }
  Ie.has.touch === true && (n.delete("no-touch"), n.add("touch")), Ie.within.iframe === true && n.add("within-iframe");
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
      const n = iy(Ie, t.config);
      document.body.classList.add.apply(document.body.classList, n);
    }
    Ie.is.ios === true && document.body.addEventListener("touchstart", St), window.addEventListener("keydown", oy, true);
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
  const { cordova: t, capacitor: n } = Ie.is;
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
} }, qu = { isoName: "en-US", nativeName: "English (US)", label: { clear: "Clear", ok: "OK", cancel: "Cancel", close: "Close", set: "Set", select: "Select", reset: "Reset", remove: "Remove", update: "Update", create: "Create", search: "Search", filter: "Filter", refresh: "Refresh", expand: (e) => e ? `Expand "${e}"` : "Expand", collapse: (e) => e ? `Collapse "${e}"` : "Collapse" }, date: { days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), firstDayOfWeek: 0, format24h: false, pluralDay: "days", prevMonth: "Previous month", nextMonth: "Next month", prevYear: "Previous year", nextYear: "Next year", today: "Today", prevRangeYears: (e) => `Previous ${e} years`, nextRangeYears: (e) => `Next ${e} years` }, table: { noData: "No data available", noResults: "No matching records found", loading: "Loading...", selectedRecords: (e) => e === 1 ? "1 record selected." : (e === 0 ? "No" : e) + " records selected.", recordsPerPage: "Records per page:", allRows: "All", pagination: (e, t, n) => e + "-" + t + " of " + n, columns: "Columns" }, pagination: { first: "First page", prev: "Previous page", next: "Next page", last: "Last page" }, editor: { url: "URL", bold: "Bold", italic: "Italic", strikethrough: "Strikethrough", underline: "Underline", unorderedList: "Unordered List", orderedList: "Ordered List", subscript: "Subscript", superscript: "Superscript", hyperlink: "Hyperlink", toggleFullscreen: "Toggle Fullscreen", quote: "Quote", left: "Left align", center: "Center align", right: "Right align", justify: "Justify align", print: "Print", outdent: "Decrease indentation", indent: "Increase indentation", removeFormat: "Remove formatting", formatting: "Formatting", fontSize: "Font Size", align: "Align", hr: "Insert Horizontal Rule", undo: "Undo", redo: "Redo", heading1: "Heading 1", heading2: "Heading 2", heading3: "Heading 3", heading4: "Heading 4", heading5: "Heading 5", heading6: "Heading 6", paragraph: "Paragraph", code: "Code", size1: "Very small", size2: "A bit small", size3: "Normal", size4: "Medium-large", size5: "Big", size6: "Very big", size7: "Maximum", defaultFont: "Default Font", viewSource: "View Source" }, tree: { noNodes: "No nodes available", noResults: "No matching nodes found" } };
function Oc() {
  const e = Array.isArray(navigator.languages) === true && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
  if (typeof e == "string") return e.split(/[-_]/).map((t, n) => n === 0 ? t.toLowerCase() : n > 1 || t.length < 4 ? t.toUpperCase() : t[0].toUpperCase() + t.slice(1).toLowerCase()).join("-");
}
var Rl = Sl({ __qLang: {} }, { getLocale: Oc, set(e = qu, t) {
  const n = { ...e, rtl: e.rtl === true, getLocale: Oc };
  {
    if (n.set = Rl.set, Rl.__langConfig === void 0 || Rl.__langConfig.noHtmlAttrs !== true) {
      const l = document.documentElement;
      l.setAttribute("dir", n.rtl === true ? "rtl" : "ltr"), l.setAttribute("lang", n.isoName);
    }
    Object.assign(Rl.__qLang, n);
  }
}, install({ $q: e, lang: t, ssrContext: n }) {
  e.lang = Rl.__qLang, Rl.__langConfig = e.config.lang, this.__installed === true ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qLang, { get() {
    return Reflect.get(...arguments);
  }, ownKeys(l) {
    return Reflect.ownKeys(l).filter((a) => a !== "set" && a !== "getLocale");
  } }), this.set(t || qu));
} }), ni = Rl, my = { name: "material-icons", type: { positive: "check_circle", negative: "warning", info: "info", warning: "priority_high" }, arrow: { up: "arrow_upward", right: "arrow_forward", down: "arrow_downward", left: "arrow_back", dropdown: "arrow_drop_down" }, chevron: { left: "chevron_left", right: "chevron_right" }, colorPicker: { spectrum: "gradient", tune: "tune", palette: "style" }, pullToRefresh: { icon: "refresh" }, carousel: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down", navigationIcon: "lens" }, chip: { remove: "cancel", selected: "check" }, datetime: { arrowLeft: "chevron_left", arrowRight: "chevron_right", now: "access_time", today: "today" }, editor: { bold: "format_bold", italic: "format_italic", strikethrough: "strikethrough_s", underline: "format_underlined", unorderedList: "format_list_bulleted", orderedList: "format_list_numbered", subscript: "vertical_align_bottom", superscript: "vertical_align_top", hyperlink: "link", toggleFullscreen: "fullscreen", quote: "format_quote", left: "format_align_left", center: "format_align_center", right: "format_align_right", justify: "format_align_justify", print: "print", outdent: "format_indent_decrease", indent: "format_indent_increase", removeFormat: "format_clear", formatting: "text_format", fontSize: "format_size", align: "format_align_left", hr: "remove", undo: "undo", redo: "redo", heading: "format_size", code: "code", size: "format_size", font: "font_download", viewSource: "code" }, expansionItem: { icon: "keyboard_arrow_down", denseIcon: "arrow_drop_down" }, fab: { icon: "add", activeIcon: "close" }, field: { clear: "cancel", error: "error" }, pagination: { first: "first_page", prev: "keyboard_arrow_left", next: "keyboard_arrow_right", last: "last_page" }, rating: { icon: "grade" }, stepper: { done: "check", active: "edit", error: "warning" }, tabs: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down" }, table: { arrowUp: "arrow_upward", warning: "warning", firstPage: "first_page", prevPage: "chevron_left", nextPage: "chevron_right", lastPage: "last_page" }, tree: { icon: "play_arrow" }, uploader: { done: "done", clear: "clear", add: "add_box", upload: "cloud_upload", removeQueue: "clear_all", removeUploaded: "done_all" } }, Tu = Sl({ iconMapFn: null, __qIconSet: {} }, { set(e, t) {
  const n = { ...e };
  n.set = Tu.set, Object.assign(Tu.__qIconSet, n);
}, install({ $q: e, iconSet: t, ssrContext: n }) {
  e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn), e.iconSet = this.__qIconSet, Ot(e, "iconMapFn", () => this.iconMapFn, (l) => {
    this.iconMapFn = l;
  }), this.__installed === true ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qIconSet, { get() {
    return Reflect.get(...arguments);
  }, ownKeys(l) {
    return Reflect.ownKeys(l).filter((a) => a !== "set");
  } }), this.set(t || my));
} }), nm = Tu, lm = "_q_", am = "_q_t_", rm = "_q_s_", Gl = "_q_l_", om = "_q_pc_", im = "_q_f_", um = "_q_fo_", sm = "_q_tabs_", cm = "_q_u_";
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
function Mu(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function gy(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function pr(e) {
  return typeof e == "number" && isFinite(e);
}
var Vc = [Xv, cy, Zv, ay, yr, ni, nm];
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
  e.config.globalProperties.$q = n.$q, e.provide(lm, n.$q), Ic(n, Vc), t.components !== void 0 && Object.values(t.components).forEach((l) => {
    Pt(l) === true && l.name !== void 0 && e.component(l.name, l);
  }), t.directives !== void 0 && Object.values(t.directives).forEach((l) => {
    Pt(l) === true && l.name !== void 0 && e.directive(l.name, l);
  }), t.plugins !== void 0 && Ic(n, Object.values(t.plugins).filter((l) => typeof l.install == "function" && Vc.includes(l) === false)), nn.value === true && (n.$q.onSSRHydrated = () => {
    n.onSSRHydrated.forEach((l) => {
      l();
    }), n.$q.onSSRHydrated = () => {
    };
  });
}
var yy = function(e, t = {}) {
  const n = { version: "2.18.1" };
  dm === false ? (t.config !== void 0 && Object.assign(xo, t.config), n.config = { ...xo }, hy()) : n.config = t.config || {}, by(e, t, { parentApp: e, $q: n, lang: t.lang, iconSet: t.iconSet, onSSRHydrated: [] });
}, zc = ["B", "KB", "MB", "GB", "TB", "PB"];
function Eu(e, t = 1) {
  let n = 0;
  for (; parseInt(e, 10) >= 1024 && n < zc.length - 1; ) e /= 1024, ++n;
  return `${e.toFixed(t)}${zc[n]}`;
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
var hs = XMLHttpRequest, fm = hs.prototype.open, py = ["top", "right", "bottom", "left"], ko = [], rr = 0;
function _y({ p: e, pos: t, active: n, horiz: l, reverse: a, dir: r }) {
  let o = 1, i = 1;
  return l === true ? (a === true && (o = -1), t === "bottom" && (i = -1), { transform: `translate3d(${o * (e - 100)}%,${n ? 0 : i * -200}%,0)` }) : (a === true && (i = -1), t === "right" && (o = -1), { transform: `translate3d(${n ? 0 : r * o * -200}%,${i * (e - 100)}%,0)` });
}
function wy(e, t) {
  return typeof t != "number" && (e < 25 ? t = Math.random() * 3 + 3 : e < 65 ? t = Math.random() * 3 : e < 85 ? t = Math.random() * 2 : e < 99 ? t = 0.6 : t = 0), ct(e + t, 0, 100);
}
function Sy(e) {
  rr++, ko.push(e), !(rr > 1) && (hs.prototype.open = function(t, n) {
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
  ko = ko.filter((t) => t.start !== e), rr = Math.max(0, rr - 1), rr === 0 && (hs.prototype.open = fm);
}
var Cy = me({ name: "QAjaxBar", props: { position: { type: String, default: "top", validator: (e) => py.includes(e) }, size: { type: String, default: "2px" }, color: String, skipHijack: Boolean, reverse: Boolean, hijackFilter: Function }, emits: ["start", "stop"], setup(e, { emit: t }) {
  const { proxy: n } = Se(), l = W(0), a = W(false), r = W(true);
  let o = 0, i = null, u;
  const c = f(() => `q-loading-bar q-loading-bar--${e.position}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (r.value === true ? "" : " no-transition")), s = f(() => e.position === "top" || e.position === "bottom"), v = f(() => s.value === true ? "height" : "width"), h = f(() => {
    const y = a.value, b = _y({ p: l.value, pos: e.position, active: y, horiz: s.value, reverse: n.$q.lang.rtl === true && ["top", "bottom"].includes(e.position) ? e.reverse === false : e.reverse, dir: n.$q.lang.rtl === true ? -1 : 1 });
    return b[v.value] = e.size, b.opacity = y ? 1 : 0, b;
  }), m = f(() => a.value === true ? { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": l.value } : { "aria-hidden": "true" });
  function g(y = 300) {
    const b = u;
    return u = Math.max(0, y) || 0, o++, o > 1 ? (b === 0 && y > 0 ? C() : i !== null && b > 0 && y <= 0 && (clearTimeout(i), i = null), o) : (i !== null && clearTimeout(i), t("start"), l.value = 0, i = setTimeout(() => {
      i = null, r.value = true, y > 0 && C();
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
  function C() {
    l.value < 100 && (i = setTimeout(() => {
      i = null, _(), C();
    }, u));
  }
  let p;
  return ft(() => {
    e.skipHijack !== true && (p = true, Sy({ start: g, stop: w, hijackFilter: f(() => e.hijackFilter || null) }));
  }), Ke(() => {
    i !== null && clearTimeout(i), p === true && xy(g);
  }), Object.assign(n, { start: g, stop: w, increment: _ }), () => d("div", { class: c.value, style: h.value, ...m.value });
} }), $u = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 }, Jn = { size: String };
function el(e, t = $u) {
  return f(() => e.size !== void 0 ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size } : null);
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
function gs(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function pn(e, t, n, l, a, r) {
  t.key = l + a;
  const o = d(e, t, n);
  return a === true ? sn(o, r()) : o;
}
var Dc = "0 0 24 24", Pi = (e) => e, Li = (e) => `ionicons ${e}`, vm = { "mdi-": (e) => `mdi ${e}`, "icon-": Pi, "bt-": (e) => `bt ${e}`, "eva-": (e) => `eva ${e}`, "ion-md": Li, "ion-ios": Li, "ion-logo": Li, "iconfont ": Pi, "ti-": (e) => `themify-icon ${e}`, "bi-": (e) => `bootstrap-icons ${e}`, "i-": Pi }, mm = { o_: "-outlined", r_: "-round", s_: "-sharp" }, hm = { sym_o_: "-outlined", sym_r_: "-rounded", sym_s_: "-sharp" }, ky = new RegExp("^(" + Object.keys(vm).join("|") + ")"), qy = new RegExp("^(" + Object.keys(mm).join("|") + ")"), Nc = new RegExp("^(" + Object.keys(hm).join("|") + ")"), Ty = /^[Mm]\s?[-+]?\.?\d/, My = /^img:/, Ey = /^svguse:/, $y = /^ion-/, Ay = /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, et = me({ name: "QIcon", props: { ...Jn, tag: { type: String, default: "i" }, name: String, color: String, left: Boolean, right: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = el(e), a = f(() => "q-icon" + (e.left === true ? " on-left" : "") + (e.right === true ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), r = f(() => {
    let o, i = e.name;
    if (i === "none" || !i) return { none: true };
    if (n.iconMapFn !== null) {
      const s = n.iconMapFn(i);
      if (s !== void 0) if (s.icon !== void 0) {
        if (i = s.icon, i === "none" || !i) return { none: true };
      } else return { cls: s.cls, content: s.content !== void 0 ? s.content : " " };
    }
    if (Ty.test(i) === true) {
      const [s, v = Dc] = i.split("|");
      return { svg: true, viewBox: v, nodes: s.split("&&").map((h) => {
        const [m, g, _] = h.split("@@");
        return d("path", { style: g, d: m, transform: _ });
      }) };
    }
    if (My.test(i) === true) return { img: true, src: i.substring(4) };
    if (Ey.test(i) === true) {
      const [s, v = Dc] = i.split("|");
      return { svguse: true, src: s.substring(7), viewBox: v };
    }
    let u = " ";
    const c = i.match(ky);
    if (c !== null) o = vm[c[1]](i);
    else if (Ay.test(i) === true) o = i;
    else if ($y.test(i) === true) o = `ionicons ion-${n.platform.is.ios === true ? "ios" : "md"}${i.substring(3)}`;
    else if (Nc.test(i) === true) {
      o = "notranslate material-symbols";
      const s = i.match(Nc);
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
} }), Au = me({ name: "QAvatar", props: { ...Jn, fontSize: String, color: String, textColor: String, icon: String, square: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  const n = el(e), l = f(() => "q-avatar" + (e.color ? ` bg-${e.color}` : "") + (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") + (e.square === true ? " q-avatar--square" : e.rounded === true ? " rounded-borders" : "")), a = f(() => e.fontSize ? { fontSize: e.fontSize } : null);
  return () => {
    const r = e.icon !== void 0 ? [d(et, { name: e.icon })] : void 0;
    return d("div", { class: l.value, style: n.value }, [d("div", { class: "q-avatar__content row flex-center overflow-hidden", style: a.value }, gs(t.default, r))]);
  };
} }), Ry = ["top", "middle", "bottom"];
me({ name: "QBadge", props: { color: String, textColor: String, floating: Boolean, transparent: Boolean, multiLine: Boolean, outline: Boolean, rounded: Boolean, label: [Number, String], align: { type: String, validator: (e) => Ry.includes(e) } }, setup(e, { slots: t }) {
  const n = f(() => e.align !== void 0 ? { verticalAlign: e.align } : null), l = f(() => {
    const a = e.outline === true && e.color || e.textColor;
    return `q-badge flex inline items-center no-wrap q-badge--${e.multiLine === true ? "multi" : "single"}-line` + (e.outline === true ? " q-badge--outline" : e.color !== void 0 ? ` bg-${e.color}` : "") + (a !== void 0 ? ` text-${a}` : "") + (e.floating === true ? " q-badge--floating" : "") + (e.rounded === true ? " q-badge--rounded" : "") + (e.transparent === true ? " q-badge--transparent" : "");
  });
  return () => d("div", { class: l.value, style: n.value, role: "status", "aria-label": e.label }, qt(t.default, e.label !== void 0 ? [e.label] : []));
} });
var nt = { dark: { type: Boolean, default: null } };
function lt(e, t) {
  return f(() => e.dark === null ? t.dark.isActive : e.dark);
}
me({ name: "QBanner", props: { ...nt, inlineActions: Boolean, dense: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = lt(e, n), a = f(() => "q-banner row items-center" + (e.dense === true ? " q-banner--dense" : "") + (l.value === true ? " q-banner--dark q-dark" : "") + (e.rounded === true ? " rounded-borders" : "")), r = f(() => `q-banner__actions row items-center justify-end col-${e.inlineActions === true ? "auto" : "all"}`);
  return () => {
    const o = [d("div", { class: "q-banner__avatar col-auto row items-center self-start" }, Pe(t.avatar)), d("div", { class: "q-banner__content col text-body2" }, Pe(t.default))], i = Pe(t.action);
    return i !== void 0 && o.push(d("div", { class: r.value }, i)), d("div", { class: a.value + (e.inlineActions === false && i !== void 0 ? " q-banner--top-padding" : ""), role: "alert" }, o);
  };
} });
me({ name: "QBar", props: { ...nt, dense: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = lt(e, n), a = f(() => `q-bar row no-wrap items-center q-bar--${e.dense === true ? "dense" : "standard"}  q-bar--${l.value === true ? "dark" : "light"}`);
  return () => d("div", { class: a.value, role: "toolbar" }, Pe(t.default));
} });
var gm = { left: "start", center: "center", right: "end", between: "between", around: "around", evenly: "evenly", stretch: "stretch" }, Py = Object.keys(gm), bs = { align: { type: String, validator: (e) => Py.includes(e) } };
function ys(e) {
  return f(() => {
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
function ps(e) {
  const t = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    bm(t, n);
  }), Array.from(t);
}
function _s(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function hl(e) {
  return e.isUnmounted === true || e.isDeactivated === true;
}
var Ly = ["", true];
me({ name: "QBreadcrumbs", props: { ...bs, separator: { type: String, default: "/" }, separatorColor: String, activeColor: { type: String, default: "primary" }, gutter: { type: String, validator: (e) => ["none", "xs", "sm", "md", "lg", "xl"].includes(e), default: "sm" } }, setup(e, { slots: t }) {
  const n = ys(e), l = f(() => `flex items-center ${n.value}${e.gutter === "none" ? "" : ` q-gutter-${e.gutter}`}`), a = f(() => e.separatorColor ? ` text-${e.separatorColor}` : ""), r = f(() => ` text-${e.activeColor}`);
  return () => {
    if (t.default === void 0) return;
    const o = ps(Pe(t.default));
    if (o.length === 0) return;
    let i = 1;
    const u = [], c = o.filter((v) => {
      var _a2;
      return ((_a2 = v.type) == null ? void 0 : _a2.name) === "QBreadcrumbsEl";
    }).length, s = t.separator !== void 0 ? t.separator : () => e.separator;
    return o.forEach((v) => {
      var _a2;
      if (((_a2 = v.type) == null ? void 0 : _a2.name) === "QBreadcrumbsEl") {
        const h = i < c, m = v.props !== null && Ly.includes(v.props.disable), g = (h === true ? "" : " q-breadcrumbs--last") + (m !== true && h === true ? r.value : "");
        i++, u.push(d("div", { class: `flex items-center${g}` }, [v])), h === true && u.push(d("div", { class: "q-breadcrumbs__separator" + a.value }, s()));
      } else u.push(v);
    }), d("div", { class: "q-breadcrumbs" }, [d("div", { class: l.value }, u)]);
  };
} });
function Hc(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
function jc(e, t) {
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
function Uc(e, t) {
  return Array.isArray(t) === true ? e.length === t.length && e.every((n, l) => n === t[l]) : e.length === 1 && e[0] === t;
}
function Fy(e, t) {
  return Array.isArray(e) === true ? Uc(e, t) : Array.isArray(t) === true ? Uc(t, e) : e === t;
}
function Oy(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (const n in e) if (Fy(e[n], t[n]) === false) return false;
  return true;
}
var ym = { to: [String, Object], replace: Boolean, href: String, target: String, disable: Boolean }, $r = { ...ym, exact: Boolean, activeClass: { type: String, default: "q-router-link--active" }, exactActiveClass: { type: String, default: "q-router-link--exact-active" } };
function ai({ fallbackTag: e, useDisableForRouterLinkProps: t = true } = {}) {
  const n = Se(), { props: l, proxy: a, emit: r } = n, o = _s(n), i = f(() => l.disable !== true && l.href !== void 0), u = f(t === true ? () => o === true && l.disable !== true && i.value !== true && l.to !== void 0 && l.to !== null && l.to !== "" : () => o === true && i.value !== true && l.to !== void 0 && l.to !== null && l.to !== ""), c = f(() => u.value === true ? p(l.to) : null), s = f(() => c.value !== null), v = f(() => i.value === true || s.value === true), h = f(() => l.type === "a" || v.value === true ? "a" : l.tag || e || "div"), m = f(() => i.value === true ? { href: l.href, target: l.target } : s.value === true ? { href: c.value.href, target: l.target } : {}), g = f(() => {
    if (s.value === false) return -1;
    const { matched: x } = c.value, { length: A } = x, F = x[A - 1];
    if (F === void 0) return -1;
    const N = a.$route.matched;
    if (N.length === 0) return -1;
    const P = N.findIndex(jc.bind(null, F));
    if (P !== -1) return P;
    const R = Hc(x[A - 2]);
    return A > 1 && Hc(F) === R && N[N.length - 1].path !== R ? N.findIndex(jc.bind(null, x[A - 2])) : P;
  }), _ = f(() => s.value === true && g.value !== -1 && By(a.$route.params, c.value.params)), w = f(() => _.value === true && g.value === a.$route.matched.length - 1 && Oy(a.$route.params, c.value.params)), C = f(() => s.value === true ? w.value === true ? ` ${l.exactActiveClass} ${l.activeClass}` : l.exact === true ? "" : _.value === true ? ` ${l.activeClass}` : "" : "");
  function p(x) {
    try {
      return a.$router.resolve(x);
    } catch {
    }
    return null;
  }
  function y(x, { returnRouterError: A, to: F = l.to, replace: N = l.replace } = {}) {
    if (l.disable === true) return x.preventDefault(), Promise.resolve(false);
    if (x.metaKey || x.altKey || x.ctrlKey || x.shiftKey || x.button !== void 0 && x.button !== 0 || l.target === "_blank") return Promise.resolve(false);
    x.preventDefault();
    const P = a.$router[N === true ? "replace" : "push"](F);
    return A === true ? P : P.then(() => {
    }).catch(() => {
    });
  }
  function b(x) {
    if (s.value === true) {
      const A = (F) => y(x, F);
      r("click", x, A), x.defaultPrevented !== true && A();
    } else r("click", x);
  }
  return { hasRouterLink: s, hasHrefLink: i, hasLink: v, linkTag: h, resolvedLink: c, linkIsActive: _, linkIsExactActive: w, linkClass: C, linkAttrs: m, getLink: p, navigateToRouterLink: y, navigateOnClick: b };
}
me({ name: "QBreadcrumbsEl", props: { ...$r, label: String, icon: String, tag: { type: String, default: "span" } }, emits: ["click"], setup(e, { slots: t }) {
  const { linkTag: n, linkAttrs: l, linkClass: a, navigateOnClick: r } = ai(), o = f(() => ({ class: "q-breadcrumbs__el q-link flex inline items-center relative-position " + (e.disable !== true ? "q-link--focusable" + a.value : "q-breadcrumbs__el--disable"), ...l.value, onClick: r })), i = f(() => "q-breadcrumbs__el-icon" + (e.label !== void 0 ? " q-breadcrumbs__el-icon--with-label" : ""));
  return () => {
    const u = [];
    return e.icon !== void 0 && u.push(d(et, { class: i.value, name: e.icon })), e.label !== void 0 && u.push(e.label), d(n.value, { ...o.value }, qt(t.default, u));
  };
} });
var Mt = { size: { type: [String, Number], default: "1em" }, color: String };
function Et(e) {
  return { cSize: f(() => e.size in $u ? `${$u[e.size]}px` : e.size), classes: f(() => "q-spinner" + (e.color ? ` text-${e.color}` : "")) };
}
var _n = me({ name: "QSpinner", props: { ...Mt, thickness: { type: Number, default: 5 } }, setup(e) {
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
function Ru(e, t) {
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
  const t = ze(e);
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
function Qc(e, t, n, l) {
  n.modifiers.stop === true && wt(e);
  const a = n.modifiers.color;
  let r = n.modifiers.center;
  r = r === true || l === true;
  const o = document.createElement("span"), i = document.createElement("span"), u = en(e), { left: c, top: s, width: v, height: h } = t.getBoundingClientRect(), m = Math.sqrt(v * v + h * h), g = m / 2, _ = `${(v - m) / 2}px`, w = r ? _ : `${u.left - c - g}px`, C = `${(h - m) / 2}px`, p = r ? C : `${u.top - s - g}px`;
  i.className = "q-ripple__inner", Ru(i, { height: `${m}px`, width: `${m}px`, transform: `translate3d(${w},${p},0) scale3d(.2,.2,1)`, opacity: 0 }), o.className = `q-ripple${a ? " text-" + a : ""}`, o.setAttribute("dir", "ltr"), o.appendChild(i), t.appendChild(o);
  const y = () => {
    o.remove(), clearTimeout(b);
  };
  n.abort.push(y);
  let b = setTimeout(() => {
    i.classList.add("q-ripple__inner--enter"), i.style.transform = `translate3d(${_},${C},0) scale3d(1,1,1)`, i.style.opacity = 0.2, b = setTimeout(() => {
      i.classList.remove("q-ripple__inner--enter"), i.classList.add("q-ripple__inner--leave"), i.style.opacity = 0, b = setTimeout(() => {
        o.remove(), n.abort.splice(n.abort.indexOf(y), 1);
      }, 275);
    }, 250);
  }, 50);
}
function Kc(e, { modifiers: t, value: n, arg: l }) {
  const a = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = { early: a.early === true, stop: a.stop === true, center: a.center === true, color: a.color || l, keyCodes: [].concat(a.keyCodes || 13) };
}
var ri = An({ name: "ripple", beforeMount(e, t) {
  const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
  if (n.ripple === false) return;
  const l = { cfg: n, enabled: t.value !== false, modifiers: {}, abort: [], start(a) {
    l.enabled === true && a.qSkipRipple !== true && a.type === (l.modifiers.early === true ? "pointerdown" : "click") && Qc(a, e, l, a.qKeyEvent === true);
  }, keystart: _m((a) => {
    l.enabled === true && a.qSkipRipple !== true && yn(a, l.modifiers.keyCodes) === true && a.type === `key${l.modifiers.early === true ? "down" : "up"}` && Qc(a, e, l, true);
  }, 300) };
  Kc(l, t), e.__qripple = l, kt(l, "main", [[e, "pointerdown", "start", "passive"], [e, "click", "start", "passive"], [e, "keydown", "keystart", "passive"], [e, "keyup", "keystart", "passive"]]);
}, updated(e, t) {
  if (t.oldValue !== t.value) {
    const n = e.__qripple;
    n !== void 0 && (n.enabled = t.value !== false, n.enabled === true && Object(t.value) === t.value && Kc(n, t));
  }
}, beforeUnmount(e) {
  const t = e.__qripple;
  t !== void 0 && (t.abort.forEach((n) => {
    n();
  }), Wt(t, "main"), delete e._qripple);
} }), To = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 }, Iy = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, zy = ["button", "submit", "reset"], Dy = /[^\s]\/[^\s]/, wm = ["flat", "outline", "push", "unelevated"];
function ws(e, t) {
  return e.flat === true ? "flat" : e.outline === true ? "outline" : e.push === true ? "push" : e.unelevated === true ? "unelevated" : t;
}
function Sm(e) {
  const t = ws(e);
  return t !== void 0 ? { [t]: true } : {};
}
var Ss = { ...Jn, ...ym, type: { type: String, default: "button" }, label: [Number, String], icon: String, iconRight: String, ...wm.reduce((e, t) => (e[t] = Boolean) && e, {}), square: Boolean, rounded: Boolean, glossy: Boolean, size: String, fab: Boolean, fabMini: Boolean, padding: String, color: String, textColor: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, tabindex: [Number, String], ripple: { type: [Boolean, Object], default: true }, align: { ...bs.align, default: "center" }, stack: Boolean, stretch: Boolean, loading: { type: Boolean, default: null }, disable: Boolean }, Ny = { ...Ss, round: Boolean };
function Hy(e) {
  const t = el(e, Iy), n = ys(e), { hasRouterLink: l, hasLink: a, linkTag: r, linkAttrs: o, navigateOnClick: i } = ai({ fallbackTag: "button" }), u = f(() => {
    const w = e.fab === false && e.fabMini === false ? t.value : {};
    return e.padding !== void 0 ? Object.assign({}, w, { padding: e.padding.split(/\s+/).map((C) => C in To ? To[C] + "px" : C).join(" "), minWidth: "0", minHeight: "0" }) : w;
  }), c = f(() => e.rounded === true || e.fab === true || e.fabMini === true), s = f(() => e.disable !== true && e.loading !== true), v = f(() => s.value === true ? e.tabindex || 0 : -1), h = f(() => ws(e, "standard")), m = f(() => {
    const w = { tabindex: v.value };
    return a.value === true ? Object.assign(w, o.value) : zy.includes(e.type) === true && (w.type = e.type), r.value === "a" ? (e.disable === true ? w["aria-disabled"] = "true" : w.href === void 0 && (w.role = "button"), l.value !== true && Dy.test(e.type) === true && (w.type = e.type)) : e.disable === true && (w.disabled = "", w["aria-disabled"] = "true"), e.loading === true && e.percentage !== void 0 && Object.assign(w, { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": e.percentage }), w;
  }), g = f(() => {
    let w;
    e.color !== void 0 ? e.flat === true || e.outline === true ? w = `text-${e.textColor || e.color}` : w = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (w = `text-${e.textColor}`);
    const C = e.round === true ? "round" : `rectangle${c.value === true ? " q-btn--rounded" : e.square === true ? " q-btn--square" : ""}`;
    return `q-btn--${h.value} q-btn--${C}` + (w !== void 0 ? " " + w : "") + (s.value === true ? " q-btn--actionable q-focusable q-hoverable" : e.disable === true ? " disabled" : "") + (e.fab === true ? " q-btn--fab" : e.fabMini === true ? " q-btn--fab-mini" : "") + (e.noCaps === true ? " q-btn--no-uppercase" : "") + (e.dense === true ? " q-btn--dense" : "") + (e.stretch === true ? " no-border-radius self-stretch" : "") + (e.glossy === true ? " glossy" : "") + (e.square ? " q-btn--square" : "");
  }), _ = f(() => n.value + (e.stack === true ? " column" : " row") + (e.noWrap === true ? " no-wrap text-no-wrap" : "") + (e.loading === true ? " q-btn__content--hidden" : ""));
  return { classes: g, style: u, innerClasses: _, attributes: m, hasLink: a, linkTag: r, navigateOnClick: i, isActionable: s };
}
var { passiveCapture: fn } = dt, Jl = null, ea = null, ta = null, Ze = me({ name: "QBtn", props: { ...Ny, percentage: Number, darkPercentage: Boolean, onTouchstart: [Function, Array] }, emits: ["click", "keydown", "mousedown", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { classes: a, style: r, innerClasses: o, attributes: i, hasLink: u, linkTag: c, navigateOnClick: s, isActionable: v } = Hy(e), h = W(null), m = W(null);
  let g = null, _, w = null;
  const C = f(() => e.label !== void 0 && e.label !== null && e.label !== ""), p = f(() => e.disable === true || e.ripple === false ? false : { keyCodes: u.value === true ? [13, 32] : [13], ...e.ripple === true ? {} : e.ripple }), y = f(() => ({ center: e.round })), b = f(() => {
    const k = Math.max(0, Math.min(100, e.percentage));
    return k > 0 ? { transition: "transform 0.6s", transform: `translateX(${k - 100}%)` } : {};
  }), x = f(() => {
    if (e.loading === true) return { onMousedown: E, onTouchstart: E, onClick: E, onKeydown: E, onKeyup: E };
    if (v.value === true) {
      const k = { onClick: F, onKeydown: N, onMousedown: R };
      if (l.$q.platform.has.touch === true) {
        const U = e.onTouchstart !== void 0 ? "" : "Passive";
        k[`onTouchstart${U}`] = P;
      }
      return k;
    }
    return { onClick: je };
  }), A = f(() => ({ ref: h, class: "q-btn q-btn-item non-selectable no-outline " + a.value, style: r.value, ...i.value, ...x.value }));
  function F(k) {
    if (h.value !== null) {
      if (k !== void 0) {
        if (k.defaultPrevented === true) return;
        const U = document.activeElement;
        if (e.type === "submit" && U !== document.body && h.value.contains(U) === false && U.contains(h.value) === false) {
          k.qAvoidFocus !== true && h.value.focus();
          const L = () => {
            var _a2;
            document.removeEventListener("keydown", je, true), document.removeEventListener("keyup", L, fn), (_a2 = h.value) == null ? void 0 : _a2.removeEventListener("blur", L, fn);
          };
          document.addEventListener("keydown", je, true), document.addEventListener("keyup", L, fn), h.value.addEventListener("blur", L, fn);
        }
      }
      s(k);
    }
  }
  function N(k) {
    h.value !== null && (n("keydown", k), yn(k, [13, 32]) === true && ea !== h.value && (ea !== null && q(), k.defaultPrevented !== true && (k.qAvoidFocus !== true && h.value.focus(), ea = h.value, h.value.classList.add("q-btn--active"), document.addEventListener("keyup", H, true), h.value.addEventListener("blur", H, fn)), je(k)));
  }
  function P(k) {
    h.value !== null && (n("touchstart", k), k.defaultPrevented !== true && (Jl !== h.value && (Jl !== null && q(), Jl = h.value, g = k.target, g.addEventListener("touchcancel", H, fn), g.addEventListener("touchend", H, fn)), _ = true, w !== null && clearTimeout(w), w = setTimeout(() => {
      w = null, _ = false;
    }, 200)));
  }
  function R(k) {
    h.value !== null && (k.qSkipRipple = _ === true, n("mousedown", k), k.defaultPrevented !== true && ta !== h.value && (ta !== null && q(), ta = h.value, h.value.classList.add("q-btn--active"), document.addEventListener("mouseup", H, fn)));
  }
  function H(k) {
    if (h.value !== null && !((k == null ? void 0 : k.type) === "blur" && document.activeElement === h.value)) {
      if ((k == null ? void 0 : k.type) === "keyup") {
        if (ea === h.value && yn(k, [13, 32]) === true) {
          const U = new MouseEvent("click", k);
          U.qKeyEvent = true, k.defaultPrevented === true && Vt(U), k.cancelBubble === true && wt(U), h.value.dispatchEvent(U), je(k), k.qKeyEvent = true;
        }
        n("keyup", k);
      }
      q();
    }
  }
  function q(k) {
    var _a2, _b2;
    const U = m.value;
    k !== true && (Jl === h.value || ta === h.value) && U !== null && U !== document.activeElement && (U.setAttribute("tabindex", -1), U.focus()), Jl === h.value && (g !== null && (g.removeEventListener("touchcancel", H, fn), g.removeEventListener("touchend", H, fn)), Jl = g = null), ta === h.value && (document.removeEventListener("mouseup", H, fn), ta = null), ea === h.value && (document.removeEventListener("keyup", H, true), (_a2 = h.value) == null ? void 0 : _a2.removeEventListener("blur", H, fn), ea = null), (_b2 = h.value) == null ? void 0 : _b2.classList.remove("q-btn--active");
  }
  function E(k) {
    je(k), k.qSkipRipple = true;
  }
  return Ke(() => {
    q(true);
  }), Object.assign(l, { click: (k) => {
    v.value === true && F(k);
  } }), () => {
    let k = [];
    e.icon !== void 0 && k.push(d(et, { name: e.icon, left: e.stack !== true && C.value === true, role: "img" })), C.value === true && k.push(d("span", { class: "block" }, [e.label])), k = qt(t.default, k), e.iconRight !== void 0 && e.round === false && k.push(d(et, { name: e.iconRight, right: e.stack !== true && C.value === true, role: "img" }));
    const U = [d("span", { class: "q-focus-helper", ref: m })];
    return e.loading === true && e.percentage !== void 0 && U.push(d("span", { class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === true ? " q-btn__progress--dark" : "") }, [d("span", { class: "q-btn__progress-indicator fit block", style: b.value })])), U.push(d("span", { class: "q-btn__content text-center col items-center q-anchor--skip " + o.value }, k)), e.loading !== null && U.push(d(Ft, { name: "q-transition--fade" }, () => e.loading === true ? [d("span", { key: "loading", class: "absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : [d(_n)])] : null)), sn(d(c.value, A.value, U), [[ri, p.value, void 0, y.value]]);
  };
} }), xm = me({ name: "QBtnGroup", props: { unelevated: Boolean, outline: Boolean, flat: Boolean, rounded: Boolean, square: Boolean, push: Boolean, stretch: Boolean, glossy: Boolean, spread: Boolean }, setup(e, { slots: t }) {
  const n = f(() => {
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
function xs({ showing: e, avoidEmit: t, configureAnchorEl: n }) {
  const { props: l, proxy: a, emit: r } = Se(), o = W(null);
  let i = null;
  function u(m) {
    return o.value === null ? false : m === void 0 || m.touches === void 0 || m.touches.length <= 1;
  }
  const c = {};
  n === void 0 && (Object.assign(c, { hide(m) {
    a.hide(m);
  }, toggle(m) {
    a.toggle(m), m.qAnchorHandled = true;
  }, toggleKey(m) {
    yn(m, 13) === true && c.toggle(m);
  }, contextClick(m) {
    a.hide(m), Vt(m), We(() => {
      a.show(m), m.qAnchorHandled = true;
    });
  }, prevent: Vt, mobileTouch(m) {
    if (c.mobileCleanup(m), u(m) !== true) return;
    a.hide(m), o.value.classList.add("non-selectable");
    const g = m.target;
    kt(c, "anchor", [[g, "touchmove", "mobileCleanup", "passive"], [g, "touchend", "mobileCleanup", "passive"], [g, "touchcancel", "mobileCleanup", "passive"], [o.value, "contextmenu", "prevent", "notPassive"]]), i = setTimeout(() => {
      i = null, a.show(m), m.qAnchorHandled = true;
    }, 300);
  }, mobileCleanup(m) {
    o.value.classList.remove("non-selectable"), i !== null && (clearTimeout(i), i = null), e.value === true && m !== void 0 && Mn();
  } }), n = function(m = l.contextMenu) {
    if (l.noParentEvent === true || o.value === null) return;
    let g;
    m === true ? a.$q.platform.is.mobile === true ? g = [[o.value, "touchstart", "mobileTouch", "passive"]] : g = [[o.value, "mousedown", "hide", "passive"], [o.value, "contextmenu", "contextClick", "notPassive"]] : g = [[o.value, "click", "toggle", "passive"], [o.value, "keyup", "toggleKey", "passive"]], kt(c, "anchor", g);
  });
  function s() {
    Wt(c, "anchor");
  }
  function v(m) {
    for (o.value = m; o.value.classList.contains("q-anchor--skip"); ) o.value = o.value.parentNode;
    n();
  }
  function h() {
    if (l.target === false || l.target === "" || a.$el.parentNode === null) o.value = null;
    else if (l.target === true) v(a.$el.parentNode);
    else {
      let m = l.target;
      if (typeof l.target == "string") try {
        m = document.querySelector(l.target);
      } catch {
        m = void 0;
      }
      m != null ? (o.value = m.$el || m, n()) : (o.value = null, console.error(`Anchor: target "${l.target}" not found`));
    }
  }
  return ge(() => l.contextMenu, (m) => {
    o.value !== null && (s(), n(m));
  }), ge(() => l.target, () => {
    o.value !== null && s(), h();
  }), ge(() => l.noParentEvent, (m) => {
    o.value !== null && (m === true ? s() : n());
  }), ft(() => {
    h(), t !== true && l.modelValue === true && o.value === null && r("update:modelValue", false);
  }), Ke(() => {
    i !== null && clearTimeout(i), s();
  }), { anchorEl: o, canShow: u, anchorEvents: c };
}
function qm(e, t) {
  const n = W(null);
  let l;
  function a(i, u) {
    const c = `${u !== void 0 ? "add" : "remove"}EventListener`, s = u !== void 0 ? u : l;
    i !== window && i[c]("scroll", s, dt.passive), window[c]("scroll", s, dt.passive), l = u;
  }
  function r() {
    n.value !== null && (a(n.value), n.value = null);
  }
  const o = ge(() => e.noParentEvent, () => {
    n.value !== null && (r(), t());
  });
  return Ke(o), { localScrollTarget: n, unconfigureScrollTarget: r, changeScrollEvent: a };
}
var $a = { modelValue: { type: Boolean, default: null }, "onUpdate:modelValue": [Function, Array] }, Aa = ["beforeShow", "show", "beforeHide", "hide"];
function Ra({ showing: e, canShow: t, hideOnRouteChange: n, handleShow: l, handleHide: a, processOnMount: r }) {
  const o = Se(), { props: i, emit: u, proxy: c } = o;
  let s;
  function v(p) {
    e.value === true ? g(p) : h(p);
  }
  function h(p) {
    if (i.disable === true || (p == null ? void 0 : p.qAnchorHandled) === true || t !== void 0 && t(p) !== true) return;
    const y = i["onUpdate:modelValue"] !== void 0;
    y === true && (u("update:modelValue", true), s = p, We(() => {
      s === p && (s = void 0);
    })), (i.modelValue === null || y === false) && m(p);
  }
  function m(p) {
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
    i.disable === true && p === true ? i["onUpdate:modelValue"] !== void 0 && u("update:modelValue", false) : p === true !== e.value && (p === true ? m : _)(s);
  }
  ge(() => i.modelValue, w), n !== void 0 && _s(o) === true && ge(() => c.$route.fullPath, () => {
    n.value === true && e.value === true && g();
  }), r === true && ft(() => {
    w(i.modelValue);
  });
  const C = { show: h, hide: g, toggle: v };
  return Object.assign(c, C), C;
}
var Fl = [], _r = [];
function Tm(e) {
  _r = _r.filter((t) => t !== e);
}
function jy(e) {
  Tm(e), _r.push(e);
}
function Wc(e) {
  Tm(e), _r.length === 0 && Fl.length !== 0 && (Fl[Fl.length - 1](), Fl = []);
}
function Pa(e) {
  _r.length === 0 ? e() : Fl.push(e);
}
function Uy(e) {
  Fl = Fl.filter((t) => t !== e);
}
var ga = [], or = [], Qy = 1, il = document.body;
function Ar(e, t) {
  const n = document.createElement("div");
  if (n.id = t !== void 0 ? `q-portal--${t}--${Qy++}` : e, xo.globalNodes !== void 0) {
    const l = xo.globalNodes.class;
    l !== void 0 && (n.className = l);
  }
  return il.appendChild(n), ga.push(n), or.push(t), n;
}
function Cs(e) {
  const t = ga.indexOf(e);
  ga.splice(t, 1), or.splice(t, 1), e.remove();
}
function Ky(e) {
  if (e === il) return;
  if (il = e, il === document.body || or.reduce((n, l) => l === "dialog" ? n + 1 : n, 0) < 2) {
    ga.forEach((n) => {
      n.contains(il) === false && il.appendChild(n);
    });
    return;
  }
  const t = or.lastIndexOf("dialog");
  for (let n = 0; n < ga.length; n++) {
    const l = ga[n];
    (n === t || or[n] !== "dialog") && l.contains(il) === false && il.appendChild(l);
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
var Gy = me({ name: "QPortal", setup(e, { slots: t }) {
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
function ks(e, t, n, l) {
  const a = W(false), r = W(false);
  let o = null;
  const i = {}, u = l === "dialog" && Xy(e);
  function c(v) {
    if (v === true) {
      Wc(i), r.value = true;
      return;
    }
    r.value = false, a.value === false && (u === false && o === null && (o = Ar(false, l)), a.value = true, ba.push(e.proxy), jy(i));
  }
  function s(v) {
    if (r.value = false, v !== true) return;
    Wc(i), a.value = false;
    const h = ba.indexOf(e.proxy);
    h !== -1 && ba.splice(h, 1), o !== null && (Cs(o), o = null);
  }
  return Xo(() => {
    s(true);
  }), e.proxy.__qPortal = true, Ot(e.proxy, "contentEl", () => t.value), { showPortal: c, hidePortal: s, portalIsActive: a, portalIsAccessible: r, renderPortal: () => u === true ? n() : a.value === true ? [d(_0, { to: o }, d(Gy, n))] : void 0 };
}
var zl = { transitionShow: { type: String, default: "fade" }, transitionHide: { type: String, default: "fade" }, transitionDuration: { type: [String, Number], default: 300 } };
function oi(e, t = () => {
}, n = () => {
}) {
  return { transitionProps: f(() => {
    const l = `q-transition--${e.transitionShow || t()}`, a = `q-transition--${e.transitionHide || n()}`;
    return { appear: true, enterFromClass: `${l}-enter-from`, enterActiveClass: `${l}-enter-active`, enterToClass: `${l}-enter-to`, leaveFromClass: `${a}-leave-from`, leaveActiveClass: `${a}-leave-active`, leaveToClass: `${a}-leave-to` };
  }), transitionStyle: f(() => `--q-transition-duration: ${e.transitionDuration}ms`) };
}
function ya() {
  let e;
  const t = Se();
  function n() {
    e = void 0;
  }
  return On(n), Ke(n), { removeTick: n, registerTick(l) {
    e = l, We(() => {
      e === l && (hl(t) === false && e(), e = void 0);
    });
  } };
}
function Xn() {
  let e = null;
  const t = Se();
  function n() {
    e !== null && (clearTimeout(e), e = null);
  }
  return On(n), Ke(n), { removeTimeout: n, registerTimeout(l, a) {
    n(), hl(t) === false && (e = setTimeout(() => {
      e = null, l();
    }, a));
  } };
}
var Xl = [Element, String], Zy = [null, document, document.body, document.scrollingElement, document.documentElement];
function Vn(e, t) {
  let n = Vy(t);
  if (n === void 0) {
    if (e == null) return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return Zy.includes(n) ? window : n;
}
function zr(e) {
  return (e === window ? document.body : e).scrollHeight;
}
function gl(e) {
  return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop;
}
function ii(e) {
  return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft;
}
function Em(e, t, n = 0) {
  const l = arguments[3] === void 0 ? performance.now() : arguments[3], a = gl(e);
  if (n <= 0) {
    a !== t && Pu(e, t);
    return;
  }
  requestAnimationFrame((r) => {
    const o = r - l, i = a + (t - a) / Math.max(o, n) * o;
    Pu(e, i), i !== t && Em(e, t, n - o, r);
  });
}
function $m(e, t, n = 0) {
  const l = arguments[3] === void 0 ? performance.now() : arguments[3], a = ii(e);
  if (n <= 0) {
    a !== t && Lu(e, t);
    return;
  }
  requestAnimationFrame((r) => {
    const o = r - l, i = a + (t - a) / Math.max(o, n) * o;
    Lu(e, i), i !== t && $m(e, t, n - o, r);
  });
}
function Pu(e, t) {
  if (e === window) {
    window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t);
    return;
  }
  e.scrollTop = t;
}
function Lu(e, t) {
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
  Pu(e, t);
}
function Bi(e, t, n) {
  if (n) {
    $m(e, t, n);
    return;
  }
  Lu(e, t);
}
var Dr;
function ro() {
  if (Dr !== void 0) return Dr;
  const e = document.createElement("p"), t = document.createElement("div");
  Ru(e, { width: "100%", height: "200px" }), Ru(t, { position: "absolute", top: "0px", left: "0px", visibility: "hidden", width: "200px", height: "150px", overflow: "hidden" }), t.appendChild(e), document.body.appendChild(t);
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
function Am(e) {
  window[e]("keydown", ep), window[e]("blur", tp), window[e]("keyup", np), xa = false;
}
function Rm(e) {
  Ie.is.desktop === true && (Dl.push(e), Dl.length === 1 && Am("addEventListener"));
}
function Mo(e) {
  const t = Dl.indexOf(e);
  t !== -1 && (Dl.splice(t, 1), Dl.length === 0 && Am("removeEventListener"));
}
var Nl = [];
function Pm(e) {
  Nl[Nl.length - 1](e);
}
function Lm(e) {
  Ie.is.desktop === true && (Nl.push(e), Nl.length === 1 && document.body.addEventListener("focusin", Pm));
}
function Bu(e) {
  const t = Nl.indexOf(e);
  t !== -1 && (Nl.splice(t, 1), Nl.length === 0 && document.body.removeEventListener("focusin", Pm));
}
var { notPassiveCapture: Eo } = dt, Hl = [];
function $o(e) {
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
  Hl.push(e), Hl.length === 1 && (document.addEventListener("mousedown", $o, Eo), document.addEventListener("touchstart", $o, Eo));
}
function Ao(e) {
  const t = Hl.findIndex((n) => n === e);
  t !== -1 && (Hl.splice(t, 1), Hl.length === 0 && (document.removeEventListener("mousedown", $o, Eo), document.removeEventListener("touchstart", $o, Eo)));
}
var Yc, Gc;
function Ro(e) {
  const t = e.split(" ");
  return t.length !== 2 ? false : ["top", "center", "bottom"].includes(t[0]) !== true ? (console.error("Anchor/Self position must start with one of top/center/bottom"), false) : ["left", "middle", "right", "start", "end"].includes(t[1]) !== true ? (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), false) : true;
}
function Fm(e) {
  return e ? !(e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number") : true;
}
var Fu = { "start#ltr": "left", "start#rtl": "right", "end#ltr": "right", "end#rtl": "left" };
["left", "middle", "right"].forEach((e) => {
  Fu[`${e}#ltr`] = e, Fu[`${e}#rtl`] = e;
});
function Po(e, t) {
  const n = e.split(" ");
  return { vertical: n[0], horizontal: Fu[`${n[1]}#${t === true ? "rtl" : "ltr"}`] };
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
function Xc(e, t, n, l) {
  return { top: e[n.vertical] - t[l.vertical], left: e[n.horizontal] - t[l.horizontal] };
}
function qs(e, t = 0) {
  if (e.targetEl === null || e.anchorEl === null || t > 5) return;
  if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      qs(e, t + 1);
    }, 10);
    return;
  }
  const { targetEl: n, offset: l, anchorEl: a, anchorOrigin: r, selfOrigin: o, absoluteOffset: i, fit: u, cover: c, maxHeight: s, maxWidth: v } = e;
  if (Ie.is.ios === true && window.visualViewport !== void 0) {
    const A = document.body.style, { offsetLeft: F, offsetTop: N } = window.visualViewport;
    F !== Yc && (A.setProperty("--q-pe-left", F + "px"), Yc = F), N !== Gc && (A.setProperty("--q-pe-top", N + "px"), Gc = N);
  }
  const { scrollLeft: h, scrollTop: m } = n, g = i === void 0 ? lp(a, c === true ? [0, 0] : l) : ap(a, i, l);
  Object.assign(n.style, { top: 0, left: 0, minWidth: null, minHeight: null, maxWidth: v, maxHeight: s, visibility: "visible" });
  const { offsetWidth: _, offsetHeight: w } = n, { elWidth: C, elHeight: p } = u === true || c === true ? { elWidth: Math.max(g.width, _), elHeight: c === true ? Math.max(g.height, w) : w } : { elWidth: _, elHeight: w };
  let y = { maxWidth: v, maxHeight: s };
  (u === true || c === true) && (y.minWidth = g.width + "px", c === true && (y.minHeight = g.height + "px")), Object.assign(n.style, y);
  const b = rp(C, p);
  let x = Xc(g, b, r, o);
  if (i === void 0 || l === void 0) Fi(x, g, b, r, o);
  else {
    const { top: A, left: F } = x;
    Fi(x, g, b, r, o);
    let N = false;
    if (x.top !== A) {
      N = true;
      const P = 2 * l[1];
      g.center = g.top -= P, g.bottom -= P + 2;
    }
    if (x.left !== F) {
      N = true;
      const P = 2 * l[0];
      g.middle = g.left -= P, g.right -= P + 2;
    }
    N === true && (x = Xc(g, b, r, o), Fi(x, g, b, r, o));
  }
  y = { top: x.top + "px", left: x.left + "px" }, x.maxHeight !== void 0 && (y.maxHeight = x.maxHeight + "px", g.height > x.maxHeight && (y.minHeight = y.maxHeight)), x.maxWidth !== void 0 && (y.maxWidth = x.maxWidth + "px", g.width > x.maxWidth && (y.minWidth = y.maxWidth)), Object.assign(n.style, y), n.scrollTop !== m && (n.scrollTop = m), n.scrollLeft !== h && (n.scrollLeft = h);
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
var ui = me({ name: "QMenu", inheritAttrs: false, props: { ...km, ...$a, ...nt, ...zl, persistent: Boolean, autoClose: Boolean, separateClosePopup: Boolean, noEscDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, fit: Boolean, cover: Boolean, square: Boolean, anchor: { type: String, validator: Ro }, self: { type: String, validator: Ro }, offset: { type: Array, validator: Fm }, scrollTarget: Xl, touchPosition: Boolean, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null } }, emits: [...Aa, "click", "escapeKey"], setup(e, { slots: t, emit: n, attrs: l }) {
  let a = null, r, o, i;
  const u = Se(), { proxy: c } = u, { $q: s } = c, v = W(null), h = W(false), m = f(() => e.persistent !== true && e.noRouteDismiss !== true), g = lt(e, s), { registerTick: _, removeTick: w } = ya(), { registerTimeout: C } = Xn(), { transitionProps: p, transitionStyle: y } = oi(e), { localScrollTarget: b, changeScrollEvent: x, unconfigureScrollTarget: A } = qm(e, Z), { anchorEl: F, canShow: N } = xs({ showing: h }), { hide: P } = Ra({ showing: h, canShow: N, handleShow: be, handleHide: K, hideOnRouteChange: m, processOnMount: true }), { showPortal: R, hidePortal: H, renderPortal: q } = ks(u, v, ee, "menu"), E = { anchorEl: F, innerRef: v, onClickOutside(I) {
    if (e.persistent !== true && h.value === true) return P(I), (I.type === "touchstart" || I.target.classList.contains("q-dialog__backdrop")) && je(I), true;
  } }, k = f(() => Po(e.anchor || (e.cover === true ? "center middle" : "bottom start"), s.lang.rtl)), U = f(() => e.cover === true ? k.value : Po(e.self || "top start", s.lang.rtl)), L = f(() => (e.square === true ? " q-menu--square" : "") + (g.value === true ? " q-menu--dark q-dark" : "")), V = f(() => e.autoClose === true ? { onClick: O } : {}), D = f(() => h.value === true && e.persistent !== true);
  ge(D, (I) => {
    I === true ? (Rm(B), Bm(E)) : (Mo(B), Ao(E));
  });
  function te() {
    Pa(() => {
      let I = v.value;
      I && I.contains(document.activeElement) !== true && (I = I.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || I.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || I.querySelector("[autofocus], [data-autofocus]") || I, I.focus({ preventScroll: true }));
    });
  }
  function be(I) {
    if (a = e.noRefocus === false ? document.activeElement : null, Lm(oe), R(), Z(), r = void 0, I !== void 0 && (e.touchPosition || e.contextMenu)) {
      const ae = en(I);
      if (ae.left !== void 0) {
        const { top: we, left: S } = F.value.getBoundingClientRect();
        r = { left: ae.left - S, top: ae.top - we };
      }
    }
    o === void 0 && (o = ge(() => s.screen.width + "|" + s.screen.height + "|" + e.self + "|" + e.anchor + "|" + s.lang.rtl, $)), e.noFocus !== true && document.activeElement.blur(), _(() => {
      $(), e.noFocus !== true && te();
    }), C(() => {
      s.platform.is.ios === true && (i = e.autoClose, v.value.click()), $(), R(true), n("show", I);
    }, e.transitionDuration);
  }
  function K(I) {
    w(), H(), T(true), a !== null && (I === void 0 || I.qClickOutside !== true) && ((((I == null ? void 0 : I.type.indexOf("key")) === 0 ? a.closest('[tabindex]:not([tabindex^="-"])') : void 0) || a).focus(), a = null), C(() => {
      H(true), n("hide", I);
    }, e.transitionDuration);
  }
  function T(I) {
    r = void 0, o !== void 0 && (o(), o = void 0), (I === true || h.value === true) && (Bu(oe), A(), Ao(E), Mo(B)), I !== true && (a = null);
  }
  function Z() {
    (F.value !== null || e.scrollTarget !== void 0) && (b.value = Vn(F.value, e.scrollTarget), x(b.value, $));
  }
  function O(I) {
    i !== true ? (Mm(c, I), n("click", I)) : i = false;
  }
  function oe(I) {
    D.value === true && e.noFocus !== true && pm(v.value, I.target) !== true && te();
  }
  function B(I) {
    e.noEscDismiss !== true && (n("escapeKey"), P(I));
  }
  function $() {
    qs({ targetEl: v.value, offset: e.offset, anchorEl: F.value, anchorOrigin: k.value, selfOrigin: U.value, absoluteOffset: r, fit: e.fit, cover: e.cover, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function ee() {
    return d(Ft, p.value, () => h.value === true ? d("div", { role: "menu", ...l, ref: v, tabindex: -1, class: ["q-menu q-position-engine scroll" + L.value, l.class], style: [l.style, y.value], ...V.value }, Pe(t.default)) : null);
  }
  return Ke(T), Object.assign(c, { focus: te, updatePosition: $ }), q;
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
})(), Zc = 4096;
function wr() {
  (Oi === void 0 || Nr + 16 > Zc) && (Nr = 0, Oi = op(Zc));
  const e = Array.prototype.slice.call(Oi, Nr, Nr += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, Nt[e[0]] + Nt[e[1]] + Nt[e[2]] + Nt[e[3]] + "-" + Nt[e[4]] + Nt[e[5]] + "-" + Nt[e[6]] + Nt[e[7]] + "-" + Nt[e[8]] + Nt[e[9]] + "-" + Nt[e[10]] + Nt[e[11]] + Nt[e[12]] + Nt[e[13]] + Nt[e[14]] + Nt[e[15]];
}
function ip(e) {
  return e ?? null;
}
function Jc(e, t) {
  return e ?? (t === true ? `f_${wr()}` : null);
}
function si({ getValue: e, required: t = true } = {}) {
  if (nn.value === true) {
    const n = W(e !== void 0 ? ip(e()) : null);
    return t === true && n.value === null && ft(() => {
      n.value = `f_${wr()}`;
    }), e !== void 0 && ge(e, (l) => {
      n.value = Jc(l, t);
    }), n;
  }
  return e !== void 0 ? f(() => Jc(e(), t)) : W(`f_${wr()}`);
}
var up = Object.keys(Ss);
function sp(e) {
  return up.reduce((t, n) => {
    const l = e[n];
    return l !== void 0 && (t[n] = l), t;
  }, {});
}
var cp = me({ name: "QBtnDropdown", props: { ...Ss, ...zl, modelValue: Boolean, split: Boolean, dropdownIcon: String, contentClass: [Array, String, Object], contentStyle: [Array, String, Object], cover: Boolean, persistent: Boolean, noEscDismiss: Boolean, noRouteDismiss: Boolean, autoClose: Boolean, noRefocus: Boolean, noFocus: Boolean, menuAnchor: { type: String, default: "bottom end" }, menuSelf: { type: String, default: "top end" }, menuOffset: Array, disableMainBtn: Boolean, disableDropdown: Boolean, noIconAnimation: Boolean, toggleAriaLabel: String }, emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), a = W(e.modelValue), r = W(null), o = si(), i = f(() => {
    const b = { "aria-expanded": a.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": o.value, "aria-label": e.toggleAriaLabel || l.$q.lang.label[a.value === true ? "collapse" : "expand"](e.label) };
    return (e.disable === true || e.split === false && e.disableMainBtn === true || e.disableDropdown === true) && (b["aria-disabled"] = "true"), b;
  }), u = f(() => "q-btn-dropdown__arrow" + (a.value === true && e.noIconAnimation === false ? " rotate-180" : "") + (e.split === false ? " q-btn-dropdown__arrow-container" : "")), c = f(() => Sm(e)), s = f(() => sp(e));
  ge(() => e.modelValue, (b) => {
    var _a2;
    (_a2 = r.value) == null ? void 0 : _a2[b ? "show" : "hide"]();
  }), ge(() => e.split, y);
  function v(b) {
    a.value = true, n("beforeShow", b);
  }
  function h(b) {
    n("show", b), n("update:modelValue", true);
  }
  function m(b) {
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
  function C(b) {
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
  return Object.assign(l, { show: p, hide: y, toggle: C }), ft(() => {
    e.modelValue === true && p();
  }), () => {
    const b = [d(et, { class: u.value, name: e.dropdownIcon || l.$q.iconSet.arrow.dropdown })];
    return e.disableDropdown !== true && b.push(d(ui, { ref: r, id: o.value, class: e.contentClass, style: e.contentStyle, cover: e.cover, fit: true, persistent: e.persistent, noEscDismiss: e.noEscDismiss, noRouteDismiss: e.noRouteDismiss, autoClose: e.autoClose, noFocus: e.noFocus, noRefocus: e.noRefocus, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, separateClosePopup: true, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, onBeforeShow: v, onShow: h, onBeforeHide: m, onHide: g }, t.default)), e.split === false ? d(Ze, { class: "q-btn-dropdown q-btn-dropdown--simple", ...s.value, ...i.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: _ }, { default: () => Pe(t.label, []).concat(b), loading: t.loading }) : d(xm, { class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item", rounded: e.rounded, square: e.square, ...c.value, glossy: e.glossy, stretch: e.stretch }, () => [d(Ze, { class: "q-btn-dropdown--current", ...s.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: w }, { default: t.label, loading: t.loading }), d(Ze, { class: "q-btn-dropdown__arrow-container q-anchor--skip", ...i.value, ...c.value, disable: e.disable === true || e.disableDropdown === true, rounded: e.rounded, color: e.color, textColor: e.textColor, dense: e.dense, size: e.size, padding: e.padding, ripple: e.ripple }, () => b)]);
  };
} }), wn = { name: String };
function Rr(e) {
  return f(() => ({ type: "hidden", name: e.name, value: e.modelValue }));
}
function xl(e = {}) {
  return (t, n, l) => {
    t[n](d("input", { class: "hidden" + (l || ""), ...e.value }));
  };
}
function Ts(e) {
  return f(() => e.name || e.for);
}
me({ name: "QBtnToggle", props: { ...wn, modelValue: { required: true }, options: { type: Array, required: true, validator: (e) => e.every((t) => ("label" in t || "icon" in t || "slot" in t) && "value" in t) }, color: String, textColor: String, toggleColor: { type: String, default: "primary" }, toggleTextColor: String, outline: Boolean, flat: Boolean, unelevated: Boolean, rounded: Boolean, push: Boolean, glossy: Boolean, size: String, padding: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, readonly: Boolean, disable: Boolean, stack: Boolean, stretch: Boolean, spread: Boolean, clearable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "clear", "click"], setup(e, { slots: t, emit: n }) {
  const l = f(() => e.options.find((h) => h.value === e.modelValue) !== void 0), a = f(() => ({ type: "hidden", name: e.name, value: e.modelValue })), r = xl(a), o = f(() => Sm(e)), i = f(() => ({ rounded: e.rounded, dense: e.dense, ...o.value })), u = f(() => e.options.map((h, m) => {
    const { attrs: g, value: _, slot: w, ...C } = h;
    return { slot: w, props: { key: m, "aria-pressed": _ === e.modelValue ? "true" : "false", ...g, ...C, ...i.value, disable: e.disable === true || C.disable === true, color: _ === e.modelValue ? s(C, "toggleColor") : s(C, "color"), textColor: _ === e.modelValue ? s(C, "toggleTextColor") : s(C, "textColor"), noCaps: s(C, "noCaps") === true, noWrap: s(C, "noWrap") === true, size: s(C, "size"), padding: s(C, "padding"), ripple: s(C, "ripple"), stack: s(C, "stack") === true, stretch: s(C, "stretch") === true, onClick(p) {
      c(_, h, p);
    } } };
  }));
  function c(h, m, g) {
    e.readonly !== true && (e.modelValue === h ? e.clearable === true && (n("update:modelValue", null, null), n("clear")) : n("update:modelValue", h, m), n("click", g));
  }
  function s(h, m) {
    return h[m] === void 0 ? e[m] : h[m];
  }
  function v() {
    const h = u.value.map((m) => d(Ze, m.props, m.slot !== void 0 ? t[m.slot] : void 0));
    return e.name !== void 0 && e.disable !== true && l.value === true && r(h, "push"), qt(t.default, h);
  }
  return () => d(xm, { class: "q-btn-toggle", ...o.value, rounded: e.rounded, stretch: e.stretch, glossy: e.glossy, spread: e.spread }, v);
} });
var Om = me({ name: "QCard", props: { ...nt, tag: { type: String, default: "div" }, square: Boolean, flat: Boolean, bordered: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = lt(e, n), a = f(() => "q-card" + (l.value === true ? " q-card--dark q-dark" : "") + (e.bordered === true ? " q-card--bordered" : "") + (e.square === true ? " q-card--square no-border-radius" : "") + (e.flat === true ? " q-card--flat no-shadow" : ""));
  return () => d(e.tag, { class: a.value }, Pe(t.default));
} }), Bl = me({ name: "QCardSection", props: { tag: { type: String, default: "div" }, horizontal: Boolean }, setup(e, { slots: t }) {
  const n = f(() => `q-card__section q-card__section--${e.horizontal === true ? "horiz row no-wrap" : "vert"}`);
  return () => d(e.tag, { class: n.value }, Pe(t.default));
} }), dp = me({ name: "QCardActions", props: { ...bs, vertical: Boolean }, setup(e, { slots: t }) {
  const n = ys(e), l = f(() => `q-card__actions ${n.value} q-card__actions--${e.vertical === true ? "vert column" : "horiz row"}`);
  return () => d("div", { class: l.value }, Pe(t.default));
} }), Ms = { left: true, right: true, up: true, down: true, horizontal: true, vertical: true }, fp = Object.keys(Ms);
Ms.all = true;
function Lo(e) {
  const t = {};
  for (const n of fp) e[n] === true && (t[n] = true);
  return Object.keys(t).length === 0 ? Ms : (t.horizontal === true ? t.left = t.right = true : t.left === true && t.right === true && (t.horizontal = true), t.vertical === true ? t.up = t.down = true : t.up === true && t.down === true && (t.vertical = true), t.horizontal === true && t.vertical === true && (t.all = true), t);
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
var hp = An({ name: "touch-swipe", beforeMount(e, { value: t, arg: n, modifiers: l }) {
  if (l.mouse !== true && Ie.has.touch !== true) return;
  const a = l.mouseCapture === true ? "Capture" : "", r = { handler: t, sensitivity: mp(n), direction: Lo(l), noop: St, mouseStart(o) {
    Bo(o, r) && ti(o) && (kt(r, "temp", [[document, "mousemove", "move", `notPassive${a}`], [document, "mouseup", "end", "notPassiveCapture"]]), r.start(o, true));
  }, touchStart(o) {
    if (Bo(o, r)) {
      const i = o.target;
      kt(r, "temp", [[i, "touchmove", "move", "notPassiveCapture"], [i, "touchcancel", "end", "notPassiveCapture"], [i, "touchend", "end", "notPassiveCapture"]]), r.start(o);
    }
  }, start(o, i) {
    Ie.is.firefox === true && ha(e, true);
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
    const u = en(o), c = u.left - r.event.x, s = Math.abs(c), v = u.top - r.event.y, h = Math.abs(v);
    if (r.event.mouse !== true) {
      if (s < r.sensitivity[1] && h < r.sensitivity[1]) {
        r.end(o);
        return;
      }
    } else if (window.getSelection().toString() !== "") {
      r.end(o);
      return;
    } else if (s < r.sensitivity[2] && h < r.sensitivity[2]) return;
    const m = s / i, g = h / i;
    r.direction.vertical === true && s < h && s < 100 && g > r.sensitivity[0] && (r.event.dir = v < 0 ? "up" : "down"), r.direction.horizontal === true && s > h && h < 100 && m > r.sensitivity[0] && (r.event.dir = c < 0 ? "left" : "right"), r.direction.up === true && s < h && v < 0 && s < 100 && g > r.sensitivity[0] && (r.event.dir = "up"), r.direction.down === true && s < h && v > 0 && s < 100 && g > r.sensitivity[0] && (r.event.dir = "down"), r.direction.left === true && s > h && c < 0 && h < 100 && m > r.sensitivity[0] && (r.event.dir = "left"), r.direction.right === true && s > h && c > 0 && h < 100 && m > r.sensitivity[0] && (r.event.dir = "right"), r.event.dir !== false ? (je(o), r.event.mouse === true && (document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), Mn(), r.styleCleanup = (_) => {
      r.styleCleanup = void 0, document.body.classList.remove("non-selectable");
      const w = () => {
        document.body.classList.remove("no-pointer-events--children");
      };
      _ === true ? setTimeout(w, 50) : w();
    }), r.handler({ evt: o, touch: r.event.mouse !== true, mouse: r.event.mouse, direction: r.event.dir, duration: i, distance: { x: s, y: h } })) : r.end(o);
  }, end(o) {
    var _a2;
    r.event !== void 0 && (Wt(r, "temp"), Ie.is.firefox === true && ha(e, false), (_a2 = r.styleCleanup) == null ? void 0 : _a2.call(r, true), o !== void 0 && r.event.dir !== false && je(o), r.event = void 0);
  } };
  if (e.__qtouchswipe = r, l.mouse === true) {
    const o = l.mouseCapture === true || l.mousecapture === true ? "Capture" : "";
    kt(r, "main", [[e, "mousedown", "mouseStart", `passive${o}`]]);
  }
  Ie.has.touch === true && kt(r, "main", [[e, "touchstart", "touchStart", `passive${l.capture === true ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const n = e.__qtouchswipe;
  n !== void 0 && (t.oldValue !== t.value && (typeof t.value != "function" && n.end(), n.handler = t.value), n.direction = Lo(t.modifiers));
}, beforeUnmount(e) {
  var _a2;
  const t = e.__qtouchswipe;
  t !== void 0 && (Wt(t, "main"), Wt(t, "temp"), Ie.is.firefox === true && ha(e, false), (_a2 = t.styleCleanup) == null ? void 0 : _a2.call(t), delete e.__qtouchswipe);
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
var Es = { name: { required: true }, disable: Boolean }, ed = { setup(e, { slots: t }) {
  return () => d("div", { class: "q-panel scroll", role: "tabpanel" }, Pe(t.default));
} }, $s = { modelValue: { required: true }, animated: Boolean, infinite: Boolean, swipeable: Boolean, vertical: Boolean, transitionPrev: String, transitionNext: String, transitionDuration: { type: [String, Number], default: 300 }, keepAlive: Boolean, keepAliveInclude: [String, Array, RegExp], keepAliveExclude: [String, Array, RegExp], keepAliveMax: Number }, As = ["update:modelValue", "beforeTransition", "transition"];
function Rs() {
  const { props: e, emit: t, proxy: n } = Se(), { getCache: l } = Pr(), { registerTimeout: a } = Xn();
  let r, o;
  const i = W(null), u = { value: null };
  function c(k) {
    const U = e.vertical === true ? "up" : "left";
    N((n.$q.lang.rtl === true ? -1 : 1) * (k.direction === U ? 1 : -1));
  }
  const s = f(() => [[hp, c, void 0, { horizontal: e.vertical !== true, vertical: e.vertical, mouse: true }]]), v = f(() => e.transitionPrev || `slide-${e.vertical === true ? "down" : "right"}`), h = f(() => e.transitionNext || `slide-${e.vertical === true ? "up" : "left"}`), m = f(() => `--q-transition-duration: ${e.transitionDuration}ms`), g = f(() => typeof e.modelValue == "string" || typeof e.modelValue == "number" ? e.modelValue : String(e.modelValue)), _ = f(() => ({ include: e.keepAliveInclude, exclude: e.keepAliveExclude, max: e.keepAliveMax })), w = f(() => e.keepAliveInclude !== void 0 || e.keepAliveExclude !== void 0);
  ge(() => e.modelValue, (k, U) => {
    const L = b(k) === true ? x(k) : -1;
    o !== true && F(L === -1 ? 0 : L < x(U) ? -1 : 1), u.value !== L && (u.value = L, t("beforeTransition", k, U), a(() => {
      t("transition", k, U);
    }, e.transitionDuration));
  });
  function C() {
    N(1);
  }
  function p() {
    N(-1);
  }
  function y(k) {
    t("update:modelValue", k);
  }
  function b(k) {
    return k != null && k !== "";
  }
  function x(k) {
    return r.findIndex((U) => U.props.name === k && U.props.disable !== "" && U.props.disable !== true);
  }
  function A() {
    return r.filter((k) => k.props.disable !== "" && k.props.disable !== true);
  }
  function F(k) {
    const U = k !== 0 && e.animated === true && u.value !== -1 ? "q-transition--" + (k === -1 ? v.value : h.value) : null;
    i.value !== U && (i.value = U);
  }
  function N(k, U = u.value) {
    let L = U + k;
    for (; L !== -1 && L < r.length; ) {
      const V = r[L];
      if (V !== void 0 && V.props.disable !== "" && V.props.disable !== true) {
        F(k), o = true, t("update:modelValue", V.props.name), setTimeout(() => {
          o = false;
        });
        return;
      }
      L += k;
    }
    e.infinite === true && r.length !== 0 && U !== -1 && U !== r.length && N(k, k === -1 ? r.length : -1);
  }
  function P() {
    const k = x(e.modelValue);
    return u.value !== k && (u.value = k), true;
  }
  function R() {
    const k = b(e.modelValue) === true && P() && r[u.value];
    return e.keepAlive === true ? [d(mv, _.value, [d(w.value === true ? l(g.value, () => ({ ...ed, name: g.value })) : ed, { key: g.value, style: m.value }, () => k)])] : [d("div", { class: "q-panel scroll", style: m.value, key: g.value, role: "tabpanel" }, [k])];
  }
  function H() {
    if (r.length !== 0) return e.animated === true ? [d(Ft, { name: i.value }, R)] : R();
  }
  function q(k) {
    return r = ps(Pe(k.default, [])).filter((U) => U.props !== null && U.props.slot === void 0 && b(U.props.name) === true), r.length;
  }
  function E() {
    return r;
  }
  return Object.assign(n, { next: C, previous: p, goTo: y }), { panelIndex: u, panelDirectives: s, updatePanelsList: q, updatePanelIndex: P, getPanelContent: H, getEnabledPanels: A, getPanels: E, isValidPanelName: b, keepAliveProps: _, needsUniqueKeepAliveWrapper: w, goToPanelByOffset: N, goToPanel: y, nextPanel: C, previousPanel: p };
}
var Oa = 0, Ps = { fullscreen: Boolean, noRouteFullscreenExit: Boolean }, Ls = ["update:fullscreen", "fullscreen"];
function Bs() {
  const e = Se(), { props: t, emit: n, proxy: l } = e;
  let a, r, o;
  const i = W(false);
  _s(e) === true && ge(() => l.$route.fullPath, () => {
    t.noRouteFullscreenExit !== true && s();
  }), ge(() => t.fullscreen, (v) => {
    i.value !== v && u();
  }), ge(i, (v) => {
    n("update:fullscreen", v), n("fullscreen", v);
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
me({ name: "QCarousel", props: { ...nt, ...$s, ...Ps, transitionPrev: { type: String, default: "fade" }, transitionNext: { type: String, default: "fade" }, height: String, padding: Boolean, controlColor: String, controlTextColor: String, controlType: { type: String, validator: (e) => bp.includes(e), default: "flat" }, autoplay: [Number, Boolean], arrows: Boolean, prevIcon: String, nextIcon: String, navigation: Boolean, navigationPosition: { type: String, validator: (e) => gp.includes(e) }, navigationIcon: String, navigationActiveIcon: String, thumbnails: Boolean }, emits: [...Ls, ...As], setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = lt(e, n);
  let a = null, r;
  const { updatePanelsList: o, getPanelContent: i, panelDirectives: u, goToPanel: c, previousPanel: s, nextPanel: v, getEnabledPanels: h, panelIndex: m } = Rs(), { inFullscreen: g } = Bs(), _ = f(() => g.value !== true && e.height !== void 0 ? { height: e.height } : {}), w = f(() => e.vertical === true ? "vertical" : "horizontal"), C = f(() => e.navigationPosition || (e.vertical === true ? "right" : "bottom")), p = f(() => `q-carousel q-panel-parent q-carousel--with${e.padding === true ? "" : "out"}-padding` + (g.value === true ? " fullscreen" : "") + (l.value === true ? " q-carousel--dark q-dark" : "") + (e.arrows === true ? ` q-carousel--arrows-${w.value}` : "") + (e.navigation === true ? ` q-carousel--navigation-${C.value}` : "")), y = f(() => {
    const R = [e.prevIcon || n.iconSet.carousel[e.vertical === true ? "up" : "left"], e.nextIcon || n.iconSet.carousel[e.vertical === true ? "down" : "right"]];
    return e.vertical === false && n.lang.rtl === true ? R.reverse() : R;
  }), b = f(() => e.navigationIcon || n.iconSet.carousel.navigationIcon), x = f(() => e.navigationActiveIcon || b.value), A = f(() => ({ color: e.controlColor, textColor: e.controlTextColor, round: true, [e.controlType]: true, dense: true }));
  ge(() => e.modelValue, () => {
    e.autoplay && F();
  }), ge(() => e.autoplay, (R) => {
    R ? F() : a !== null && (clearTimeout(a), a = null);
  });
  function F() {
    const R = pr(e.autoplay) === true ? Math.abs(e.autoplay) : 5e3;
    a !== null && clearTimeout(a), a = setTimeout(() => {
      a = null, R >= 0 ? v() : s();
    }, R);
  }
  ft(() => {
    e.autoplay && F();
  }), Ke(() => {
    a !== null && clearTimeout(a);
  });
  function N(R, H) {
    return d("div", { class: `q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${R} q-carousel__navigation--${C.value}` + (e.controlColor !== void 0 ? ` text-${e.controlColor}` : "") }, [d("div", { class: "q-carousel__navigation-inner flex flex-center no-wrap" }, h().map(H))]);
  }
  function P() {
    const R = [];
    if (e.navigation === true) {
      const H = t["navigation-icon"] !== void 0 ? t["navigation-icon"] : (E) => d(Ze, { key: "nav" + E.name, class: `q-carousel__navigation-icon q-carousel__navigation-icon--${E.active === true ? "" : "in"}active`, ...E.btnProps, onClick: E.onClick }), q = r - 1;
      R.push(N("buttons", (E, k) => {
        const U = E.props.name, L = m.value === k;
        return H({ index: k, maxIndex: q, name: U, active: L, btnProps: { icon: L === true ? x.value : b.value, size: "sm", ...A.value }, onClick: () => {
          c(U);
        } });
      }));
    } else if (e.thumbnails === true) {
      const H = e.controlColor !== void 0 ? ` text-${e.controlColor}` : "";
      R.push(N("thumbnails", (q) => {
        const E = q.props;
        return d("img", { key: "tmb#" + E.name, class: `q-carousel__thumbnail q-carousel__thumbnail--${E.name === e.modelValue ? "" : "in"}active` + H, src: E.imgSrc || E["img-src"], onClick: () => {
          c(E.name);
        } });
      }));
    }
    return e.arrows === true && m.value >= 0 && ((e.infinite === true || m.value > 0) && R.push(d("div", { key: "prev", class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${w.value} absolute flex flex-center` }, [d(Ze, { icon: y.value[0], ...A.value, onClick: s })])), (e.infinite === true || m.value < r - 1) && R.push(d("div", { key: "next", class: `q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${w.value} absolute flex flex-center` }, [d(Ze, { icon: y.value[1], ...A.value, onClick: v })]))), qt(t.control, R);
  }
  return () => (r = o(t), d("div", { class: p.value, style: _.value }, [pn("div", { class: "q-carousel__slides-container" }, i(), "sl-cont", e.swipeable, () => u.value)].concat(P())));
} });
me({ name: "QCarouselSlide", props: { ...Es, imgSrc: String }, setup(e, { slots: t }) {
  const n = f(() => e.imgSrc ? { backgroundImage: `url("${e.imgSrc}")` } : {});
  return () => d("div", { class: "q-carousel__slide", style: n.value }, Pe(t.default));
} });
me({ name: "QCarouselControl", props: { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, default: () => [18, 18], validator: (e) => e.length === 2 } }, setup(e, { slots: t }) {
  const n = f(() => `q-carousel__control absolute absolute-${e.position}`), l = f(() => ({ margin: `${e.offset[1]}px ${e.offset[0]}px` }));
  return () => d("div", { class: n.value, style: l.value }, Pe(t.default));
} });
me({ name: "QChatMessage", props: { sent: Boolean, label: String, bgColor: String, textColor: String, name: String, avatar: String, text: Array, stamp: String, size: String, labelHtml: Boolean, nameHtml: Boolean, textHtml: Boolean, stampHtml: Boolean }, setup(e, { slots: t }) {
  const n = f(() => e.sent === true ? "sent" : "received"), l = f(() => `q-message-text-content q-message-text-content--${n.value}` + (e.textColor !== void 0 ? ` text-${e.textColor}` : "")), a = f(() => `q-message-text q-message-text--${n.value}` + (e.bgColor !== void 0 ? ` text-${e.bgColor}` : "")), r = f(() => "q-message-container row items-end no-wrap" + (e.sent === true ? " reverse" : "")), o = f(() => e.size !== void 0 ? `col-${e.size}` : ""), i = f(() => ({ msg: e.textHtml === true ? "innerHTML" : "textContent", stamp: e.stampHtml === true ? "innerHTML" : "textContent", name: e.nameHtml === true ? "innerHTML" : "textContent", label: e.labelHtml === true ? "innerHTML" : "textContent" }));
  function u(s) {
    return t.stamp !== void 0 ? [s, d("div", { class: "q-message-stamp" }, t.stamp())] : e.stamp ? [s, d("div", { class: "q-message-stamp", [i.value.stamp]: e.stamp })] : [s];
  }
  function c(s, v) {
    const h = v === true ? s.length > 1 ? (m) => m : (m) => d("div", [m]) : (m) => d("div", { [i.value.msg]: m });
    return s.map((m, g) => d("div", { key: g, class: a.value }, [d("div", { class: l.value }, u(h(m)))]));
  }
  return () => {
    const s = [];
    t.avatar !== void 0 ? s.push(t.avatar()) : e.avatar !== void 0 && s.push(d("img", { class: `q-message-avatar q-message-avatar--${n.value}`, src: e.avatar, "aria-hidden": "true" }));
    const v = [];
    t.name !== void 0 ? v.push(d("div", { class: `q-message-name q-message-name--${n.value}` }, t.name())) : e.name !== void 0 && v.push(d("div", { class: `q-message-name q-message-name--${n.value}`, [i.value.name]: e.name })), t.default !== void 0 ? v.push(c(ps(t.default()), true)) : e.text !== void 0 && v.push(c(e.text)), s.push(d("div", { class: o.value }, v));
    const h = [];
    return t.label !== void 0 ? h.push(d("div", { class: "q-message-label" }, t.label())) : e.label !== void 0 && h.push(d("div", { class: "q-message-label", [i.value.label]: e.label })), h.push(d("div", { class: r.value }, s)), d("div", { class: `q-message q-message-${n.value}` }, h);
  };
} });
function Vm(e, t) {
  const n = W(null), l = f(() => e.disable === true ? null : d("span", { ref: n, class: "no-outline", tabindex: -1 }));
  function a(r) {
    const o = t.value;
    (r == null ? void 0 : r.qAvoidFocus) !== true && ((r == null ? void 0 : r.type.indexOf("key")) === 0 ? document.activeElement !== o && (o == null ? void 0 : o.contains(document.activeElement)) === true && o.focus() : n.value !== null && (r === void 0 || (o == null ? void 0 : o.contains(r.target)) === true) && n.value.focus());
  }
  return { refocusTargetEl: l, refocusTarget: a };
}
var Im = { xs: 30, sm: 35, md: 40, lg: 50, xl: 60 }, zm = { ...nt, ...Jn, ...wn, modelValue: { required: true, default: null }, val: {}, trueValue: { default: true }, falseValue: { default: false }, indeterminateValue: { default: null }, checkedIcon: String, uncheckedIcon: String, indeterminateIcon: String, toggleOrder: { type: String, validator: (e) => e === "tf" || e === "ft" }, toggleIndeterminate: Boolean, label: String, leftLabel: Boolean, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, Dm = ["update:modelValue"];
function Nm(e, t) {
  const { props: n, slots: l, emit: a, proxy: r } = Se(), { $q: o } = r, i = lt(n, o), u = W(null), { refocusTargetEl: c, refocusTarget: s } = Vm(n, u), v = el(n, Im), h = f(() => n.val !== void 0 && Array.isArray(n.modelValue)), m = f(() => {
    const q = Ge(n.val);
    return h.value === true ? n.modelValue.findIndex((E) => Ge(E) === q) : -1;
  }), g = f(() => h.value === true ? m.value !== -1 : Ge(n.modelValue) === Ge(n.trueValue)), _ = f(() => h.value === true ? m.value === -1 : Ge(n.modelValue) === Ge(n.falseValue)), w = f(() => g.value === false && _.value === false), C = f(() => n.disable === true ? -1 : n.tabindex || 0), p = f(() => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (n.disable === true ? " disabled" : "") + (i.value === true ? ` q-${e}--dark` : "") + (n.dense === true ? ` q-${e}--dense` : "") + (n.leftLabel === true ? " reverse" : "")), y = f(() => {
    const q = g.value === true ? "truthy" : _.value === true ? "falsy" : "indet", E = n.color !== void 0 && (n.keepColor === true || (e === "toggle" ? g.value === true : _.value !== true)) ? ` text-${n.color}` : "";
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${q}${E}`;
  }), b = f(() => {
    const q = { type: "checkbox" };
    return n.name !== void 0 && Object.assign(q, { ".checked": g.value, "^checked": g.value === true ? "checked" : void 0, name: n.name, value: h.value === true ? n.val : n.trueValue }), q;
  }), x = xl(b), A = f(() => {
    const q = { tabindex: C.value, role: e === "toggle" ? "switch" : "checkbox", "aria-label": n.label, "aria-checked": w.value === true ? "mixed" : g.value === true ? "true" : "false" };
    return n.disable === true && (q["aria-disabled"] = "true"), q;
  });
  function F(q) {
    q !== void 0 && (je(q), s(q)), n.disable !== true && a("update:modelValue", N(), q);
  }
  function N() {
    if (h.value === true) {
      if (g.value === true) {
        const q = n.modelValue.slice();
        return q.splice(m.value, 1), q;
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
  function P(q) {
    (q.keyCode === 13 || q.keyCode === 32) && je(q);
  }
  function R(q) {
    (q.keyCode === 13 || q.keyCode === 32) && F(q);
  }
  const H = t(g, w);
  return Object.assign(r, { toggle: F }), () => {
    const q = H();
    n.disable !== true && x(q, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
    const E = [d("div", { class: y.value, style: v.value, "aria-hidden": "true" }, q)];
    c.value !== null && E.push(c.value);
    const k = n.label !== void 0 ? qt(l.default, [n.label]) : Pe(l.default);
    return k !== void 0 && E.push(d("div", { class: `q-${e}__label q-anchor--skip` }, k)), d("div", { ref: u, class: p.value, ...A.value, onClick: F, onKeydown: P, onKeyup: R }, E);
  };
}
var yp = () => d("div", { key: "svg", class: "q-checkbox__bg absolute" }, [d("svg", { class: "q-checkbox__svg fit absolute-full", viewBox: "0 0 24 24" }, [d("path", { class: "q-checkbox__truthy", fill: "none", d: "M1.73,12.91 8.1,19.28 22.79,4.59" }), d("path", { class: "q-checkbox__indet", d: "M4,14H20V10H4" })])]), ir = me({ name: "QCheckbox", props: zm, emits: Dm, setup(e) {
  const t = yp();
  function n(l, a) {
    const r = f(() => (l.value === true ? e.checkedIcon : a.value === true ? e.indeterminateIcon : e.uncheckedIcon) || null);
    return () => r.value !== null ? [d("div", { key: "icon", class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap" }, [d(et, { class: "q-checkbox__icon", name: r.value })])] : [t];
  }
  return Nm("checkbox", n);
} }), pp = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, Hm = me({ name: "QChip", props: { ...nt, ...Jn, dense: Boolean, icon: String, iconRight: String, iconRemove: String, iconSelected: String, label: [String, Number], color: String, textColor: String, modelValue: { type: Boolean, default: true }, selected: { type: Boolean, default: null }, square: Boolean, outline: Boolean, clickable: Boolean, removable: Boolean, removeAriaLabel: String, tabindex: [String, Number], disable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "update:selected", "remove", "click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = lt(e, l), r = el(e, pp), o = f(() => e.selected === true || e.icon !== void 0), i = f(() => e.selected === true ? e.iconSelected || l.iconSet.chip.selected : e.icon), u = f(() => e.iconRemove || l.iconSet.chip.remove), c = f(() => e.disable === false && (e.clickable === true || e.selected !== null)), s = f(() => {
    const w = e.outline === true && e.color || e.textColor;
    return "q-chip row inline no-wrap items-center" + (e.outline === false && e.color !== void 0 ? ` bg-${e.color}` : "") + (w ? ` text-${w} q-chip--colored` : "") + (e.disable === true ? " disabled" : "") + (e.dense === true ? " q-chip--dense" : "") + (e.outline === true ? " q-chip--outline" : "") + (e.selected === true ? " q-chip--selected" : "") + (c.value === true ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (e.square === true ? " q-chip--square" : "") + (a.value === true ? " q-chip--dark q-dark" : "");
  }), v = f(() => {
    const w = e.disable === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: e.tabindex || 0 }, C = { ...w, role: "button", "aria-hidden": "false", "aria-label": e.removeAriaLabel || l.lang.label.remove };
    return { chip: w, remove: C };
  });
  function h(w) {
    w.keyCode === 13 && m(w);
  }
  function m(w) {
    e.disable || (n("update:selected", !e.selected), n("click", w));
  }
  function g(w) {
    (w.keyCode === void 0 || w.keyCode === 13) && (je(w), e.disable === false && (n("update:modelValue", false), n("remove")));
  }
  function _() {
    const w = [];
    c.value === true && w.push(d("div", { class: "q-focus-helper" })), o.value === true && w.push(d(et, { class: "q-chip__icon q-chip__icon--left", name: i.value }));
    const C = e.label !== void 0 ? [d("div", { class: "ellipsis" }, [e.label])] : void 0;
    return w.push(d("div", { class: "q-chip__content col row no-wrap items-center q-anchor--skip" }, gs(t.default, C))), e.iconRight && w.push(d(et, { class: "q-chip__icon q-chip__icon--right", name: e.iconRight })), e.removable === true && w.push(d(et, { class: "q-chip__icon q-chip__icon--remove cursor-pointer", name: u.value, ...v.value.remove, onClick: g, onKeyup: g })), w;
  }
  return () => {
    if (e.modelValue === false) return;
    const w = { class: s.value, style: r.value };
    return c.value === true && Object.assign(w, v.value.chip, { onClick: m, onKeyup: h }), pn("div", w, _(), "ripple", e.ripple !== false && e.disable !== true, () => [[ri, e.ripple]]);
  };
} }), Fs = { ...Jn, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, color: String, centerColor: String, trackColor: String, fontSize: String, rounded: Boolean, thickness: { type: Number, default: 0.2, validator: (e) => e >= 0 && e <= 1 }, angle: { type: Number, default: 0 }, showValue: Boolean, reverse: Boolean, instantFeedback: Boolean }, Ou = 50, jm = 2 * Ou, Um = jm * Math.PI, _p = Math.round(Um * 1e3) / 1e3, Qm = me({ name: "QCircularProgress", props: { ...Fs, value: { type: Number, default: 0 }, animationSpeed: { type: [String, Number], default: 600 }, indeterminate: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = el(e), a = f(() => {
    const m = (n.lang.rtl === true ? -1 : 1) * e.angle;
    return { transform: e.reverse !== (n.lang.rtl === true) ? `scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90 - m}deg)` : `rotate3d(0, 0, 1, ${m - 90}deg)` };
  }), r = f(() => e.instantFeedback !== true && e.indeterminate !== true ? { transition: `stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease` } : ""), o = f(() => jm / (1 - e.thickness / 2)), i = f(() => `${o.value / 2} ${o.value / 2} ${o.value} ${o.value}`), u = f(() => ct(e.value, e.min, e.max)), c = f(() => e.max - e.min), s = f(() => e.thickness / 2 * o.value), v = f(() => {
    const m = (e.max - u.value) / c.value, g = e.rounded === true && u.value < e.max && m < 0.25 ? s.value / 2 * (1 - m / 0.25) : 0;
    return Um * m + g;
  });
  function h({ thickness: m, offset: g, color: _, cls: w, rounded: C }) {
    return d("circle", { class: "q-circular-progress__" + w + (_ !== void 0 ? ` text-${_}` : ""), style: r.value, fill: "transparent", stroke: "currentColor", "stroke-width": m, "stroke-dasharray": _p, "stroke-dashoffset": g, "stroke-linecap": C, cx: o.value, cy: o.value, r: Ou });
  }
  return () => {
    const m = [];
    e.centerColor !== void 0 && e.centerColor !== "transparent" && m.push(d("circle", { class: `q-circular-progress__center text-${e.centerColor}`, fill: "currentColor", r: Ou - s.value / 2, cx: o.value, cy: o.value })), e.trackColor !== void 0 && e.trackColor !== "transparent" && m.push(h({ cls: "track", thickness: s.value, offset: 0, color: e.trackColor })), m.push(h({ cls: "circle", thickness: s.value, offset: v.value, color: e.color, rounded: e.rounded === true ? "round" : void 0 }));
    const g = [d("svg", { class: "q-circular-progress__svg", style: a.value, viewBox: i.value, "aria-hidden": "true" }, m)];
    return e.showValue === true && g.push(d("div", { class: "q-circular-progress__text absolute-full row flex-center content-center", style: { fontSize: e.fontSize } }, t.default !== void 0 ? t.default() : [d("div", u.value)])), d("div", { class: `q-circular-progress q-circular-progress--${e.indeterminate === true ? "in" : ""}determinate`, style: l.value, role: "progressbar", "aria-valuemin": e.min, "aria-valuemax": e.max, "aria-valuenow": e.indeterminate === true ? void 0 : u.value }, gs(t.internal, g));
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
var wp = 0, gn = An({ name: "touch-pan", beforeMount(e, { value: t, modifiers: n }) {
  if (n.mouse !== true && Ie.has.touch !== true) return;
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
    if (Ie.is.firefox === true && ha(e, true), a.lastEvt = r, o === true || n.stop === true) {
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
      let m;
      n.preserveCursor !== true && n.preservecursor !== true && (m = document.documentElement.style.cursor || "", document.documentElement.style.cursor = "grabbing"), c === true && document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), Mn(), a.styleCleanup = (g) => {
        if (a.styleCleanup = void 0, m !== void 0 && (document.documentElement.style.cursor = m), document.body.classList.remove("non-selectable"), c === true) {
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
      const { payload: m, synthetic: g } = Vi(r, a, false);
      m !== void 0 && (a.handler(m) === false ? a.end(r) : (a.styleCleanup === void 0 && a.event.isFirst === true && s(), a.event.lastX = m.position.left, a.event.lastY = m.position.top, a.event.lastDir = g === true ? void 0 : m.direction, a.event.isFirst = false));
      return;
    }
    if (a.direction.all === true || c === true && (a.modifiers.mouseAllDir === true || a.modifiers.mousealldir === true)) {
      s(), a.event.detected = true, a.move(r);
      return;
    }
    const v = Math.abs(i), h = Math.abs(u);
    v !== h && (a.direction.horizontal === true && v > h || a.direction.vertical === true && v < h || a.direction.up === true && v < h && u < 0 || a.direction.down === true && v < h && u > 0 || a.direction.left === true && v > h && i < 0 || a.direction.right === true && v > h && i > 0 ? (a.event.detected = true, a.move(r)) : a.end(r, true));
  }, end(r, o) {
    var _a2;
    if (a.event !== void 0) {
      if (Wt(a, "temp"), Ie.is.firefox === true && ha(e, false), o === true) (_a2 = a.styleCleanup) == null ? void 0 : _a2.call(a), a.event.detected !== true && a.initialEvent !== void 0 && a.initialEvent.target.dispatchEvent(a.initialEvent.event);
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
  Ie.has.touch === true && kt(a, "main", [[e, "touchstart", "touchStart", `passive${n.capture === true ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const n = e.__qtouchpan;
  n !== void 0 && (t.oldValue !== t.value && (typeof value != "function" && n.end(), n.handler = t.value), n.direction = Lo(t.modifiers));
}, beforeUnmount(e) {
  var _a2;
  const t = e.__qtouchpan;
  t !== void 0 && (t.event !== void 0 && t.end(), Wt(t, "main"), Wt(t, "temp"), Ie.is.firefox === true && ha(e, false), (_a2 = t.styleCleanup) == null ? void 0 : _a2.call(t), delete e.__qtouchpan);
} }), td = "q-slider__marker-labels", Sp = (e) => ({ value: e }), xp = ({ marker: e }) => d("div", { key: e.value, style: e.style, class: e.classes }, e.label), Os = [34, 37, 40, 33, 39, 38], Km = { ...nt, ...wn, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, snap: Boolean, vertical: Boolean, reverse: Boolean, color: String, markerLabelsClass: String, label: Boolean, labelColor: String, labelTextColor: String, labelAlways: Boolean, switchLabelSide: Boolean, markers: [Boolean, Number], markerLabels: [Boolean, Array, Object, Function], switchMarkerLabelsSide: Boolean, trackImg: String, trackColor: String, innerTrackImg: String, innerTrackColor: String, selectionColor: String, selectionImg: String, thumbSize: { type: String, default: "20px" }, trackSize: { type: String, default: "4px" }, disable: Boolean, readonly: Boolean, dense: Boolean, tabindex: [String, Number], thumbColor: String, thumbPath: { type: String, default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0" } }, Wm = ["pan", "update:modelValue", "change"];
function Ym({ updateValue: e, updatePosition: t, getDragging: n, formAttrs: l }) {
  const { props: a, emit: r, slots: o, proxy: { $q: i } } = Se(), u = lt(a, i), c = xl(l), s = W(false), v = W(false), h = W(false), m = W(false), g = f(() => a.vertical === true ? "--v" : "--h"), _ = f(() => "-" + (a.switchLabelSide === true ? "switched" : "standard")), w = f(() => a.vertical === true ? a.reverse === true : a.reverse !== (i.lang.rtl === true)), C = f(() => isNaN(a.innerMin) === true || a.innerMin < a.min ? a.min : a.innerMin), p = f(() => isNaN(a.innerMax) === true || a.innerMax > a.max ? a.max : a.innerMax), y = f(() => a.disable !== true && a.readonly !== true && C.value < p.value), b = f(() => {
    if (a.step === 0) return (pe) => pe;
    const re = (String(a.step).trim().split(".")[1] || "").length;
    return (pe) => parseFloat(pe.toFixed(re));
  }), x = f(() => a.step === 0 ? 1 : a.step), A = f(() => y.value === true ? a.tabindex || 0 : -1), F = f(() => a.max - a.min), N = f(() => p.value - C.value), P = f(() => we(C.value)), R = f(() => we(p.value)), H = f(() => a.vertical === true ? w.value === true ? "bottom" : "top" : w.value === true ? "right" : "left"), q = f(() => a.vertical === true ? "height" : "width"), E = f(() => a.vertical === true ? "width" : "height"), k = f(() => a.vertical === true ? "vertical" : "horizontal"), U = f(() => {
    const re = { role: "slider", "aria-valuemin": C.value, "aria-valuemax": p.value, "aria-orientation": k.value, "data-step": a.step };
    return a.disable === true ? re["aria-disabled"] = "true" : a.readonly === true && (re["aria-readonly"] = "true"), re;
  }), L = f(() => `q-slider q-slider${g.value} q-slider--${s.value === true ? "" : "in"}active inline no-wrap ` + (a.vertical === true ? "row" : "column") + (a.disable === true ? " disabled" : " q-slider--enabled" + (y.value === true ? " q-slider--editable" : "")) + (h.value === "both" ? " q-slider--focus" : "") + (a.label || a.labelAlways === true ? " q-slider--label" : "") + (a.labelAlways === true ? " q-slider--label-always" : "") + (u.value === true ? " q-slider--dark" : "") + (a.dense === true ? " q-slider--dense q-slider--dense" + g.value : ""));
  function V(re) {
    const pe = "q-slider__" + re;
    return `${pe} ${pe}${g.value} ${pe}${g.value}${_.value}`;
  }
  function D(re) {
    const pe = "q-slider__" + re;
    return `${pe} ${pe}${g.value}`;
  }
  const te = f(() => {
    const re = a.selectionColor || a.color;
    return "q-slider__selection absolute" + (re !== void 0 ? ` text-${re}` : "");
  }), be = f(() => D("markers") + " absolute overflow-hidden"), K = f(() => D("track-container")), T = f(() => V("pin")), Z = f(() => V("label")), O = f(() => V("text-container")), oe = f(() => V("marker-labels-container") + (a.markerLabelsClass !== void 0 ? ` ${a.markerLabelsClass}` : "")), B = f(() => "q-slider__track relative-position no-outline" + (a.trackColor !== void 0 ? ` bg-${a.trackColor}` : "")), $ = f(() => {
    const re = { [E.value]: a.trackSize };
    return a.trackImg !== void 0 && (re.backgroundImage = `url(${a.trackImg}) !important`), re;
  }), ee = f(() => "q-slider__inner absolute" + (a.innerTrackColor !== void 0 ? ` bg-${a.innerTrackColor}` : "")), I = f(() => {
    const re = R.value - P.value, pe = { [H.value]: `${100 * P.value}%`, [q.value]: re === 0 ? "2px" : `${100 * re}%` };
    return a.innerTrackImg !== void 0 && (pe.backgroundImage = `url(${a.innerTrackImg}) !important`), pe;
  });
  function ae(re) {
    const { min: pe, max: Ce, step: Oe } = a;
    let $e = pe + re * (Ce - pe);
    if (Oe > 0) {
      const Ye = ($e - C.value) % Oe;
      $e += (Math.abs(Ye) >= Oe / 2 ? (Ye < 0 ? -1 : 1) * Oe : 0) - Ye;
    }
    return $e = b.value($e), ct($e, C.value, p.value);
  }
  function we(re) {
    return F.value === 0 ? 0 : (re - a.min) / F.value;
  }
  function S(re, pe) {
    const Ce = en(re), Oe = a.vertical === true ? ct((Ce.top - pe.top) / pe.height, 0, 1) : ct((Ce.left - pe.left) / pe.width, 0, 1);
    return ct(w.value === true ? 1 - Oe : Oe, P.value, R.value);
  }
  const M = f(() => pr(a.markers) === true ? a.markers : x.value), j = f(() => {
    const re = [], pe = M.value, Ce = a.max;
    let Oe = a.min;
    do
      re.push(Oe), Oe += pe;
    while (Oe < Ce);
    return re.push(Ce), re;
  }), J = f(() => {
    const re = ` ${td}${g.value}-`;
    return td + `${re}${a.switchMarkerLabelsSide === true ? "switched" : "standard"}${re}${w.value === true ? "rtl" : "ltr"}`;
  }), ne = f(() => a.markerLabels === false ? null : he(a.markerLabels).map((re, pe) => ({ index: pe, value: re.value, label: re.label || re.value, classes: J.value + (re.classes !== void 0 ? " " + re.classes : ""), style: { ...ve(re.value), ...re.style || {} } }))), Y = f(() => ({ markerList: ne.value, markerMap: de.value, classes: J.value, getStyle: ve })), fe = f(() => {
    const re = N.value === 0 ? "2px" : 100 * M.value / N.value;
    return { ...I.value, backgroundSize: a.vertical === true ? `2px ${re}%` : `${re}% 2px` };
  });
  function he(re) {
    if (re === false) return null;
    if (re === true) return j.value.map(Sp);
    if (typeof re == "function") return j.value.map((Ce) => {
      const Oe = re(Ce);
      return Pt(Oe) === true ? { ...Oe, value: Ce } : { value: Ce, label: Oe };
    });
    const pe = ({ value: Ce }) => Ce >= a.min && Ce <= a.max;
    return Array.isArray(re) === true ? re.map((Ce) => Pt(Ce) === true ? Ce : { value: Ce }).filter(pe) : Object.keys(re).map((Ce) => {
      const Oe = re[Ce], $e = Number(Ce);
      return Pt(Oe) === true ? { ...Oe, value: $e } : { value: $e, label: Oe };
    }).filter(pe);
  }
  function ve(re) {
    return { [H.value]: `${100 * (re - a.min) / F.value}%` };
  }
  const de = f(() => {
    if (a.markerLabels === false) return null;
    const re = {};
    return ne.value.forEach((pe) => {
      re[pe.value] = pe;
    }), re;
  });
  function le() {
    if (o["marker-label-group"] !== void 0) return o["marker-label-group"](Y.value);
    const re = o["marker-label"] || xp;
    return ne.value.map((pe) => re({ marker: pe, ...Y.value }));
  }
  const Q = f(() => [[gn, ie, void 0, { [k.value]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
  function ie(re) {
    re.isFinal === true ? (m.value !== void 0 && (t(re.evt), re.touch === true && e(true), m.value = void 0, r("pan", "end")), s.value = false, h.value = false) : re.isFirst === true ? (m.value = n(re.evt), t(re.evt), e(), s.value = true, r("pan", "start")) : (t(re.evt), e());
  }
  function _e() {
    h.value = false;
  }
  function ke(re) {
    t(re, n(re)), e(), v.value = true, s.value = true, document.addEventListener("mouseup", qe, true);
  }
  function qe() {
    v.value = false, s.value = false, e(true), _e(), document.removeEventListener("mouseup", qe, true);
  }
  function Me(re) {
    t(re, n(re)), e(true);
  }
  function He(re) {
    Os.includes(re.keyCode) && e(true);
  }
  function Ve(re) {
    if (a.vertical === true) return null;
    const pe = i.lang.rtl !== a.reverse ? 1 - re : re;
    return { transform: `translateX(calc(${2 * pe - 1} * ${a.thumbSize} / 2 + ${50 - 100 * pe}%))` };
  }
  function ue(re) {
    const pe = f(() => v.value === false && (h.value === re.focusValue || h.value === "both") ? " q-slider--focus" : ""), Ce = f(() => `q-slider__thumb q-slider__thumb${g.value} q-slider__thumb${g.value}-${w.value === true ? "rtl" : "ltr"} absolute non-selectable` + pe.value + (re.thumbColor.value !== void 0 ? ` text-${re.thumbColor.value}` : "")), Oe = f(() => ({ width: a.thumbSize, height: a.thumbSize, [H.value]: `${100 * re.ratio.value}%`, zIndex: h.value === re.focusValue ? 2 : void 0 })), $e = f(() => re.labelColor.value !== void 0 ? ` text-${re.labelColor.value}` : ""), Ye = f(() => Ve(re.ratio.value)), it = f(() => "q-slider__text" + (re.labelTextColor.value !== void 0 ? ` text-${re.labelTextColor.value}` : ""));
    return () => {
      const Ct = [d("svg", { class: "q-slider__thumb-shape absolute-full", viewBox: "0 0 20 20", "aria-hidden": "true" }, [d("path", { d: a.thumbPath })]), d("div", { class: "q-slider__focus-ring fit" })];
      return (a.label === true || a.labelAlways === true) && (Ct.push(d("div", { class: T.value + " absolute fit no-pointer-events" + $e.value }, [d("div", { class: Z.value, style: { minWidth: a.thumbSize } }, [d("div", { class: O.value, style: Ye.value }, [d("span", { class: it.value }, re.label.value)])])])), a.name !== void 0 && a.disable !== true && c(Ct, "push")), d("div", { class: Ce.value, style: Oe.value, ...re.getNodeData() }, Ct);
    };
  }
  function ye(re, pe, Ce, Oe) {
    const $e = [];
    a.innerTrackColor !== "transparent" && $e.push(d("div", { key: "inner", class: ee.value, style: I.value })), a.selectionColor !== "transparent" && $e.push(d("div", { key: "selection", class: te.value, style: re.value })), a.markers !== false && $e.push(d("div", { key: "marker", class: be.value, style: fe.value })), Oe($e);
    const Ye = [pn("div", { key: "trackC", class: K.value, tabindex: pe.value, ...Ce.value }, [d("div", { class: B.value, style: $.value }, $e)], "slide", y.value, () => Q.value)];
    if (a.markerLabels !== false) {
      const it = a.switchMarkerLabelsSide === true ? "unshift" : "push";
      Ye[it](d("div", { key: "markerL", class: oe.value }, le()));
    }
    return Ye;
  }
  return Ke(() => {
    document.removeEventListener("mouseup", qe, true);
  }), { state: { active: s, focus: h, preventFocus: v, dragging: m, editable: y, classes: L, tabindex: A, attributes: U, roundValueFn: b, keyStep: x, trackLen: F, innerMin: C, innerMinRatio: P, innerMax: p, innerMaxRatio: R, positionProp: H, sizeProp: q, isReversed: w }, methods: { onActivate: ke, onMobileClick: Me, onBlur: _e, onKeyup: He, getContent: ye, getThumbRenderFn: ue, convertRatioToModel: ae, convertModelToRatio: we, getDraggingRatio: S } };
}
var Cp = () => ({}), na = me({ name: "QSlider", props: { ...Km, modelValue: { required: true, default: null, validator: (e) => typeof e == "number" || e === null }, labelValue: [String, Number] }, emits: Wm, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = Se(), { state: l, methods: a } = Ym({ updateValue: g, updatePosition: w, getDragging: _, formAttrs: Rr(e) }), r = W(null), o = W(0), i = W(0);
  function u() {
    i.value = e.modelValue === null ? l.innerMin.value : ct(e.modelValue, l.innerMin.value, l.innerMax.value);
  }
  ge(() => `${e.modelValue}|${l.innerMin.value}|${l.innerMax.value}`, u), u();
  const c = f(() => a.convertModelToRatio(i.value)), s = f(() => l.active.value === true ? o.value : c.value), v = f(() => {
    const y = { [l.positionProp.value]: `${100 * l.innerMinRatio.value}%`, [l.sizeProp.value]: `${100 * (s.value - l.innerMinRatio.value)}%` };
    return e.selectionImg !== void 0 && (y.backgroundImage = `url(${e.selectionImg}) !important`), y;
  }), h = a.getThumbRenderFn({ focusValue: true, getNodeData: Cp, ratio: s, label: f(() => e.labelValue !== void 0 ? e.labelValue : i.value), thumbColor: f(() => e.thumbColor || e.color), labelColor: f(() => e.labelColor), labelTextColor: f(() => e.labelTextColor) }), m = f(() => l.editable.value !== true ? {} : n.platform.is.mobile === true ? { onClick: a.onMobileClick } : { onMousedown: a.onActivate, onFocus: C, onBlur: a.onBlur, onKeydown: p, onKeyup: a.onKeyup });
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
  function C() {
    l.focus.value = true;
  }
  function p(y) {
    if (Os.includes(y.keyCode) === false) return;
    je(y);
    const b = ([34, 33].includes(y.keyCode) ? 10 : 1) * l.keyStep.value, x = ([34, 37, 40].includes(y.keyCode) ? -1 : 1) * (l.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * b;
    i.value = ct(l.roundValueFn.value(i.value + x), l.innerMin.value, l.innerMax.value), g();
  }
  return () => {
    const y = a.getContent(v, l.tabindex, m, (b) => {
      b.push(h());
    });
    return d("div", { ref: r, class: l.classes.value + (e.modelValue === null ? " q-slider--no-value" : ""), ...l.attributes.value, "aria-valuenow": e.modelValue }, y);
  };
} });
function Gm() {
  const e = W(!nn.value);
  return e.value === false && ft(() => {
    e.value = true;
  }), { isHydrated: e };
}
var Xm = typeof ResizeObserver < "u", nd = Xm === true ? {} : { style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;", url: "about:blank" }, Ul = me({ name: "QResizeObserver", props: { debounce: { type: [String, Number], default: 100 } }, emits: ["resize"], setup(e, { emit: t }) {
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
      n !== null && (clearTimeout(n), n = null), v !== void 0 && (v.removeEventListener !== void 0 && v.removeEventListener("resize", r, dt.passive), v = void 0);
    }, c = function() {
      u(), (l == null ? void 0 : l.contentDocument) && (v = l.contentDocument.defaultView, v.addEventListener("resize", r, dt.passive), o());
    };
    const { isHydrated: s } = Gm();
    let v;
    return ft(() => {
      We(() => {
        l = i.$el, l && c();
      });
    }), Ke(u), () => {
      if (s.value === true) return d("object", { class: "q--avoid-card-border", style: nd.style, tabindex: -1, type: "text/html", data: nd.url, "aria-hidden": "true", onLoad: c });
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
var qp = ["left", "center", "right", "justify"], ld = me({ name: "QTabs", props: { modelValue: [Number, String], align: { type: String, default: "center", validator: (e) => qp.includes(e) }, breakpoint: { type: [String, Number], default: 600 }, vertical: Boolean, shrink: Boolean, stretch: Boolean, activeClass: String, activeColor: String, activeBgColor: String, indicatorColor: String, leftIcon: String, rightIcon: String, outsideArrows: Boolean, mobileArrows: Boolean, switchIndicator: Boolean, narrowIndicator: Boolean, inlineLabel: Boolean, noCaps: Boolean, dense: Boolean, contentClass: String, "onUpdate:modelValue": [Function, Array] }, setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, { registerTick: r } = ya(), { registerTick: o } = ya(), { registerTick: i } = ya(), { registerTimeout: u, removeTimeout: c } = Xn(), { registerTimeout: s, removeTimeout: v } = Xn(), h = W(null), m = W(null), g = W(e.modelValue), _ = W(false), w = W(true), C = W(false), p = W(false), y = [], b = W(0), x = W(false);
  let A = null, F = null, N;
  const P = f(() => ({ activeClass: e.activeClass, activeColor: e.activeColor, activeBgColor: e.activeBgColor, indicatorClass: kp(e.indicatorColor, e.switchIndicator, e.vertical), narrowIndicator: e.narrowIndicator, inlineLabel: e.inlineLabel, noCaps: e.noCaps })), R = f(() => {
    const le = b.value, Q = g.value;
    for (let ie = 0; ie < le; ie++) if (y[ie].name.value === Q) return true;
    return false;
  }), H = f(() => `q-tabs__content--align-${_.value === true ? "left" : p.value === true ? "justify" : e.align}`), q = f(() => `q-tabs row no-wrap items-center q-tabs--${_.value === true ? "" : "not-"}scrollable q-tabs--${e.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${e.outsideArrows === true ? "outside" : "inside"} q-tabs--mobile-with${e.mobileArrows === true ? "" : "out"}-arrows` + (e.dense === true ? " q-tabs--dense" : "") + (e.shrink === true ? " col-shrink" : "") + (e.stretch === true ? " self-stretch" : "")), E = f(() => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + H.value + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), k = f(() => e.vertical === true ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" }), U = f(() => e.vertical !== true && a.lang.rtl === true), L = f(() => Sr === false && U.value === true);
  ge(U, T), ge(() => e.modelValue, (le) => {
    V({ name: le, setCurrent: true, skipEmit: true });
  }), ge(() => e.outsideArrows, D);
  function V({ name: le, setCurrent: Q, skipEmit: ie }) {
    g.value !== le && (ie !== true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", le), (Q === true || e["onUpdate:modelValue"] === void 0) && (be(g.value, le), g.value = le));
  }
  function D() {
    r(() => {
      h.value && te({ width: h.value.offsetWidth, height: h.value.offsetHeight });
    });
  }
  function te(le) {
    if (k.value === void 0 || m.value === null) return;
    const Q = le[k.value.container], ie = Math.min(m.value[k.value.scroll], Array.prototype.reduce.call(m.value.children, (ke, qe) => ke + (qe[k.value.content] || 0), 0)), _e = Q > 0 && ie > Q;
    _.value = _e, _e === true && o(T), p.value = Q < parseInt(e.breakpoint, 10);
  }
  function be(le, Q) {
    const ie = le != null && le !== "" ? y.find((ke) => ke.name.value === le) : null, _e = Q != null && Q !== "" ? y.find((ke) => ke.name.value === Q) : null;
    if (de === true) de = false;
    else if (ie && _e) {
      const ke = ie.tabIndicatorRef.value, qe = _e.tabIndicatorRef.value;
      A !== null && (clearTimeout(A), A = null), ke.style.transition = "none", ke.style.transform = "none", qe.style.transition = "none", qe.style.transform = "none";
      const Me = ke.getBoundingClientRect(), He = qe.getBoundingClientRect();
      qe.style.transform = e.vertical === true ? `translate3d(0,${Me.top - He.top}px,0) scale3d(1,${He.height ? Me.height / He.height : 1},1)` : `translate3d(${Me.left - He.left}px,0,0) scale3d(${He.width ? Me.width / He.width : 1},1,1)`, i(() => {
        A = setTimeout(() => {
          A = null, qe.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)", qe.style.transform = "none";
        }, 70);
      });
    }
    _e && _.value === true && K(_e.rootRef.value);
  }
  function K(le) {
    const { left: Q, width: ie, top: _e, height: ke } = m.value.getBoundingClientRect(), qe = le.getBoundingClientRect();
    let Me = e.vertical === true ? qe.top - _e : qe.left - Q;
    if (Me < 0) {
      m.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.floor(Me), T();
      return;
    }
    Me += e.vertical === true ? qe.height - ke : qe.width - ie, Me > 0 && (m.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.ceil(Me), T());
  }
  function T() {
    const le = m.value;
    if (le === null) return;
    const Q = le.getBoundingClientRect(), ie = e.vertical === true ? le.scrollTop : Math.abs(le.scrollLeft);
    U.value === true ? (w.value = Math.ceil(ie + Q.width) < le.scrollWidth - 1, C.value = ie > 0) : (w.value = ie > 0, C.value = e.vertical === true ? Math.ceil(ie + Q.height) < le.scrollHeight : Math.ceil(ie + Q.width) < le.scrollWidth);
  }
  function Z(le) {
    F !== null && clearInterval(F), F = setInterval(() => {
      I(le) === true && B();
    }, 5);
  }
  function O() {
    Z(L.value === true ? Number.MAX_SAFE_INTEGER : 0);
  }
  function oe() {
    Z(L.value === true ? 0 : Number.MAX_SAFE_INTEGER);
  }
  function B() {
    F !== null && (clearInterval(F), F = null);
  }
  function $(le, Q) {
    const ie = Array.prototype.filter.call(m.value.children, (He) => He === Q || He.matches && He.matches(".q-tab.q-focusable") === true), _e = ie.length;
    if (_e === 0) return;
    if (le === 36) return K(ie[0]), ie[0].focus(), true;
    if (le === 35) return K(ie[_e - 1]), ie[_e - 1].focus(), true;
    const ke = le === (e.vertical === true ? 38 : 37), qe = le === (e.vertical === true ? 40 : 39), Me = ke === true ? -1 : qe === true ? 1 : void 0;
    if (Me !== void 0) {
      const He = U.value === true ? -1 : 1, Ve = ie.indexOf(Q) + Me * He;
      return Ve >= 0 && Ve < _e && (K(ie[Ve]), ie[Ve].focus({ preventScroll: true })), true;
    }
  }
  const ee = f(() => L.value === true ? { get: (le) => Math.abs(le.scrollLeft), set: (le, Q) => {
    le.scrollLeft = -Q;
  } } : e.vertical === true ? { get: (le) => le.scrollTop, set: (le, Q) => {
    le.scrollTop = Q;
  } } : { get: (le) => le.scrollLeft, set: (le, Q) => {
    le.scrollLeft = Q;
  } });
  function I(le) {
    const Q = m.value, { get: ie, set: _e } = ee.value;
    let ke = false, qe = ie(Q);
    const Me = le < qe ? -1 : 1;
    return qe += Me * 5, qe < 0 ? (ke = true, qe = 0) : (Me === -1 && qe <= le || Me === 1 && qe >= le) && (ke = true, qe = le), _e(Q, qe), T(), ke;
  }
  function ae(le, Q) {
    for (const ie in le) if (le[ie] !== Q[ie]) return false;
    return true;
  }
  function we() {
    let le = null, Q = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
    const ie = y.filter((Me) => {
      var _a2;
      return ((_a2 = Me.routeData) == null ? void 0 : _a2.hasRouterLink.value) === true;
    }), { hash: _e, query: ke } = l.$route, qe = Object.keys(ke).length;
    for (const Me of ie) {
      const He = Me.routeData.exact.value === true;
      if (Me.routeData[He === true ? "linkIsExactActive" : "linkIsActive"].value !== true) continue;
      const { hash: Ve, query: ue, matched: ye, href: re } = Me.routeData.resolvedLink.value, pe = Object.keys(ue).length;
      if (He === true) {
        if (Ve !== _e || pe !== qe || ae(ke, ue) === false) continue;
        le = Me.name.value;
        break;
      }
      if (Ve !== "" && Ve !== _e || pe !== 0 && ae(ue, ke) === false) continue;
      const Ce = { matchedLen: ye.length, queryDiff: qe - pe, hrefLen: re.length - Ve.length };
      if (Ce.matchedLen > Q.matchedLen) {
        le = Me.name.value, Q = Ce;
        continue;
      } else if (Ce.matchedLen !== Q.matchedLen) continue;
      if (Ce.queryDiff < Q.queryDiff) le = Me.name.value, Q = Ce;
      else if (Ce.queryDiff !== Q.queryDiff) continue;
      Ce.hrefLen > Q.hrefLen && (le = Me.name.value, Q = Ce);
    }
    if (le === null && y.some((Me) => Me.routeData === void 0 && Me.name.value === g.value) === true) {
      de = false;
      return;
    }
    V({ name: le, setCurrent: true });
  }
  function S(le) {
    if (c(), x.value !== true && h.value !== null && le.target && typeof le.target.closest == "function") {
      const Q = le.target.closest(".q-tab");
      Q && h.value.contains(Q) === true && (x.value = true, _.value === true && K(Q));
    }
  }
  function M() {
    u(() => {
      x.value = false;
    }, 30);
  }
  function j() {
    fe.avoidRouteWatcher === false ? s(we) : v();
  }
  function J() {
    if (N === void 0) {
      const le = ge(() => l.$route.fullPath, j);
      N = () => {
        le(), N = void 0;
      };
    }
  }
  function ne(le) {
    y.push(le), b.value++, D(), le.routeData === void 0 || l.$route === void 0 ? s(() => {
      if (_.value === true) {
        const Q = g.value, ie = Q != null && Q !== "" ? y.find((_e) => _e.name.value === Q) : null;
        ie && K(ie.rootRef.value);
      }
    }) : (J(), le.routeData.hasRouterLink.value === true && j());
  }
  function Y(le) {
    y.splice(y.indexOf(le), 1), b.value--, D(), N !== void 0 && le.routeData !== void 0 && (y.every((Q) => Q.routeData === void 0) === true && N(), j());
  }
  const fe = { currentModel: g, tabProps: P, hasFocus: x, hasActiveTab: R, registerTab: ne, unregisterTab: Y, verifyRouteModel: j, updateModel: V, onKbdNavigate: $, avoidRouteWatcher: false };
  hn(sm, fe);
  function he() {
    A !== null && clearTimeout(A), B(), N == null ? void 0 : N();
  }
  let ve, de;
  return Ke(he), On(() => {
    ve = N !== void 0, he();
  }), wl(() => {
    ve === true && (J(), de = true, j()), D();
  }), () => d("div", { ref: h, class: q.value, role: "tablist", onFocusin: S, onFocusout: M }, [d(Ul, { onResize: te }), d("div", { ref: m, class: E.value, onScroll: T }, Pe(t.default)), d(et, { class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (w.value === true ? "" : " q-tabs__arrow--faded"), name: e.leftIcon || a.iconSet.tabs[e.vertical === true ? "up" : "left"], onMousedownPassive: O, onTouchstartPassive: O, onMouseupPassive: B, onMouseleavePassive: B, onTouchendPassive: B }), d(et, { class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (C.value === true ? "" : " q-tabs__arrow--faded"), name: e.rightIcon || a.iconSet.tabs[e.vertical === true ? "down" : "right"], onMousedownPassive: oe, onTouchstartPassive: oe, onMouseupPassive: B, onMouseleavePassive: B, onTouchendPassive: B })]);
} }), Tp = 0, Zm = ["click", "keydown"], Jm = { icon: String, label: [Number, String], alert: [Boolean, String], alertIcon: String, name: { type: [Number, String], default: () => `t_${Tp++}` }, noCaps: Boolean, tabindex: [String, Number], disable: Boolean, contentClass: String, ripple: { type: [Boolean, Object], default: true } };
function eh(e, t, n, l) {
  const a = Tt(sm, ot);
  if (a === ot) return console.error("QTab/QRouteTab component needs to be child of QTabs"), ot;
  const { proxy: r } = Se(), o = W(null), i = W(null), u = W(null), c = f(() => e.disable === true || e.ripple === false ? false : Object.assign({ keyCodes: [13, 32], early: true }, e.ripple === true ? {} : e.ripple)), s = f(() => a.currentModel.value === e.name), v = f(() => "q-tab relative-position self-stretch flex flex-center text-center" + (s.value === true ? " q-tab--active" + (a.tabProps.value.activeClass ? " " + a.tabProps.value.activeClass : "") + (a.tabProps.value.activeColor ? ` text-${a.tabProps.value.activeColor}` : "") + (a.tabProps.value.activeBgColor ? ` bg-${a.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (e.icon && e.label && a.tabProps.value.inlineLabel === false ? " q-tab--full" : "") + (e.noCaps === true || a.tabProps.value.noCaps === true ? " q-tab--no-caps" : "") + (e.disable === true ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (l !== void 0 ? l.linkClass.value : "")), h = f(() => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + (a.tabProps.value.inlineLabel === true ? "row no-wrap q-tab__content--inline" : "column") + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), m = f(() => e.disable === true || a.hasFocus.value === true || s.value === false && a.hasActiveTab.value === true ? -1 : e.tabindex || 0);
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
      const x = (A = {}) => {
        let F;
        const N = A.to === void 0 || kn(A.to, e.to) === true ? a.avoidRouteWatcher = wr() : null;
        return l.navigateToRouterLink(y, { ...A, returnRouterError: true }).catch((P) => {
          F = P;
        }).then((P) => {
          var _a3;
          if (N === a.avoidRouteWatcher && (a.avoidRouteWatcher = false, F === void 0 && (P === void 0 || ((_a3 = P.message) == null ? void 0 : _a3.startsWith("Avoided redundant navigation")) === true) && a.updateModel({ name: e.name })), A.returnRouterError === true) return F !== void 0 ? Promise.reject(F) : P;
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
    const A = [d("div", { class: "q-focus-helper", tabindex: -1, ref: o }), d("div", { class: h.value }, qt(t.default, b))];
    return y === false && A.push(x), A;
  }
  const C = { name: f(() => e.name), rootRef: i, tabIndicatorRef: u, routeData: l };
  Ke(() => {
    a.unregisterTab(C);
  }), ft(() => {
    a.registerTab(C);
  });
  function p(y, b) {
    const x = { ref: i, class: v.value, tabindex: m.value, role: "tab", "aria-selected": s.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: g, onKeydown: _, ...b };
    return sn(d(y, x, w()), [[ri, c.value]]);
  }
  return { renderTab: p, $tabs: a };
}
var Va = me({ name: "QTab", props: Jm, emits: Zm, setup(e, { slots: t, emit: n }) {
  const { renderTab: l } = eh(e, t, n);
  return () => l("div");
} }), Mp = me({ name: "QTabPanels", props: { ...$s, ...nt }, emits: As, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), { updatePanelsList: a, getPanelContent: r, panelDirectives: o } = Rs(), i = f(() => "q-tab-panels q-panel-parent" + (l.value === true ? " q-tab-panels--dark q-dark" : ""));
  return () => (a(t), pn("div", { class: i.value }, r(), "pan", e.swipeable, () => o.value));
} }), Ii = me({ name: "QTabPanel", props: Es, setup(e, { slots: t }) {
  return () => d("div", { class: "q-tab-panel", role: "tabpanel" }, Pe(t.default));
} }), ad = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, rd = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, od = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, Hr = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, jr = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, oo = { date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e), time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e), fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e), timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e), email: (e) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e), hexColor: (e) => ad.test(e), hexaColor: (e) => rd.test(e), hexOrHexaColor: (e) => od.test(e), rgbColor: (e) => Hr.test(e), rgbaColor: (e) => jr.test(e), rgbOrRgbaColor: (e) => Hr.test(e) || jr.test(e), hexOrRgbColor: (e) => ad.test(e) || Hr.test(e), hexaOrRgbaColor: (e) => rd.test(e) || jr.test(e), anyColor: (e) => od.test(e) || Hr.test(e) || jr.test(e) }, Ep = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;
function id({ r: e, g: t, b: n, a: l }) {
  const a = l !== void 0;
  if (e = Math.round(e), t = Math.round(t), n = Math.round(n), e > 255 || t > 255 || n > 255 || a && l > 100) throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");
  return l = a ? (Math.round(255 * l / 100) | 256).toString(16).slice(1) : "", "#" + (n | t << 8 | e << 16 | 1 << 24).toString(16).slice(1) + l;
}
function ud({ r: e, g: t, b: n, a: l }) {
  return `rgb${l !== void 0 ? "a" : ""}(${e},${t},${n}${l !== void 0 ? "," + l / 100 : ""})`;
}
function th(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  e = e.replace(/^#/, ""), e.length === 3 ? e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] : e.length === 4 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
  const t = parseInt(e, 16);
  return e.length > 6 ? { r: t >> 24 & 255, g: t >> 16 & 255, b: t >> 8 & 255, a: Math.round((t & 255) / 2.55) } : { r: t >> 16, g: t >> 8 & 255, b: t & 255 };
}
function sd({ h: e, s: t, v: n, a: l }) {
  let a, r, o;
  t = t / 100, n = n / 100, e = e / 360;
  const i = Math.floor(e * 6), u = e * 6 - i, c = n * (1 - t), s = n * (1 - u * t), v = n * (1 - (1 - u) * t);
  switch (i % 6) {
    case 0:
      a = n, r = v, o = c;
      break;
    case 1:
      a = s, r = n, o = c;
      break;
    case 2:
      a = c, r = n, o = v;
      break;
    case 3:
      a = c, r = s, o = n;
      break;
    case 4:
      a = v, r = c, o = n;
      break;
    case 5:
      a = n, r = c, o = s;
      break;
  }
  return { r: Math.round(a * 255), g: Math.round(r * 255), b: Math.round(o * 255), a: l };
}
function zi({ r: e, g: t, b: n, a: l }) {
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
function $p(e) {
  if (typeof e != "string" && (!e || e.r === void 0)) throw new TypeError("Expected a string or a {r, g, b} object as color");
  const t = typeof e == "string" ? nh(e) : e, n = t.r / 255, l = t.g / 255, a = t.b / 255, r = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4), o = l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4), i = a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);
  return 0.2126 * r + 0.7152 * o + 0.0722 * i;
}
var Ap = ["rgb(255,204,204)", "rgb(255,230,204)", "rgb(255,255,204)", "rgb(204,255,204)", "rgb(204,255,230)", "rgb(204,255,255)", "rgb(204,230,255)", "rgb(204,204,255)", "rgb(230,204,255)", "rgb(255,204,255)", "rgb(255,153,153)", "rgb(255,204,153)", "rgb(255,255,153)", "rgb(153,255,153)", "rgb(153,255,204)", "rgb(153,255,255)", "rgb(153,204,255)", "rgb(153,153,255)", "rgb(204,153,255)", "rgb(255,153,255)", "rgb(255,102,102)", "rgb(255,179,102)", "rgb(255,255,102)", "rgb(102,255,102)", "rgb(102,255,179)", "rgb(102,255,255)", "rgb(102,179,255)", "rgb(102,102,255)", "rgb(179,102,255)", "rgb(255,102,255)", "rgb(255,51,51)", "rgb(255,153,51)", "rgb(255,255,51)", "rgb(51,255,51)", "rgb(51,255,153)", "rgb(51,255,255)", "rgb(51,153,255)", "rgb(51,51,255)", "rgb(153,51,255)", "rgb(255,51,255)", "rgb(255,0,0)", "rgb(255,128,0)", "rgb(255,255,0)", "rgb(0,255,0)", "rgb(0,255,128)", "rgb(0,255,255)", "rgb(0,128,255)", "rgb(0,0,255)", "rgb(128,0,255)", "rgb(255,0,255)", "rgb(245,0,0)", "rgb(245,123,0)", "rgb(245,245,0)", "rgb(0,245,0)", "rgb(0,245,123)", "rgb(0,245,245)", "rgb(0,123,245)", "rgb(0,0,245)", "rgb(123,0,245)", "rgb(245,0,245)", "rgb(214,0,0)", "rgb(214,108,0)", "rgb(214,214,0)", "rgb(0,214,0)", "rgb(0,214,108)", "rgb(0,214,214)", "rgb(0,108,214)", "rgb(0,0,214)", "rgb(108,0,214)", "rgb(214,0,214)", "rgb(163,0,0)", "rgb(163,82,0)", "rgb(163,163,0)", "rgb(0,163,0)", "rgb(0,163,82)", "rgb(0,163,163)", "rgb(0,82,163)", "rgb(0,0,163)", "rgb(82,0,163)", "rgb(163,0,163)", "rgb(92,0,0)", "rgb(92,46,0)", "rgb(92,92,0)", "rgb(0,92,0)", "rgb(0,92,46)", "rgb(0,92,92)", "rgb(0,46,92)", "rgb(0,0,92)", "rgb(46,0,92)", "rgb(92,0,92)", "rgb(255,255,255)", "rgb(205,205,205)", "rgb(178,178,178)", "rgb(153,153,153)", "rgb(127,127,127)", "rgb(102,102,102)", "rgb(76,76,76)", "rgb(51,51,51)", "rgb(25,25,25)", "rgb(0,0,0)"], cd = "M5 5 h10 v10 h-10 v-10 z", Rp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==";
me({ name: "QColor", props: { ...nt, ...wn, modelValue: String, defaultValue: String, defaultView: { type: String, default: "spectrum", validator: (e) => ["spectrum", "tune", "palette"].includes(e) }, formatModel: { type: String, default: "auto", validator: (e) => ["auto", "hex", "rgb", "hexa", "rgba"].includes(e) }, palette: Array, noHeader: Boolean, noHeaderTabs: Boolean, noFooter: Boolean, square: Boolean, flat: Boolean, bordered: Boolean, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change"], setup(e, { emit: t }) {
  const { proxy: n } = Se(), { $q: l } = n, a = lt(e, l), { getCache: r } = Pr(), o = W(null), i = W(null), u = f(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("hex") !== -1), c = f(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1), s = W(e.formatModel === "auto" ? e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#") ? "hex" : "rgb" : e.formatModel.startsWith("hex") ? "hex" : "rgb"), v = W(e.defaultView), h = W(q(e.modelValue || e.defaultValue)), m = f(() => e.disable !== true && e.readonly !== true), g = f(() => e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#")), _ = f(() => u.value !== null ? u.value : g.value), w = f(() => ({ type: "hidden", name: e.name, value: h.value[_.value === true ? "hex" : "rgb"] })), C = xl(w), p = f(() => c.value !== null ? c.value : h.value.a !== void 0), y = f(() => ({ backgroundColor: h.value.rgb || "#000" })), b = f(() => `q-color-picker__header-content q-color-picker__header-content--${(h.value.a !== void 0 && h.value.a < 65 ? true : $p(h.value) > 0.4) ? "light" : "dark"}`), x = f(() => ({ background: `hsl(${h.value.h},100%,50%)` })), A = f(() => ({ top: `${100 - h.value.v}%`, [l.lang.rtl === true ? "right" : "left"]: `${h.value.s}%` })), F = f(() => e.palette !== void 0 && e.palette.length !== 0 ? e.palette : Ap), N = f(() => "q-color-picker" + (e.bordered === true ? " q-color-picker--bordered" : "") + (e.square === true ? " q-color-picker--square no-border-radius" : "") + (e.flat === true ? " q-color-picker--flat no-shadow" : "") + (e.disable === true ? " disabled" : "") + (a.value === true ? " q-color-picker--dark q-dark" : "")), P = f(() => e.disable === true ? { "aria-disabled": "true" } : {}), R = f(() => [[gn, te, void 0, { prevent: true, stop: true, mouse: true }]]);
  ge(() => e.modelValue, (S) => {
    const M = q(S || e.defaultValue);
    M.hex !== h.value.hex && (h.value = M);
  }), ge(() => e.defaultValue, (S) => {
    if (!e.modelValue && S) {
      const M = q(S);
      M.hex !== h.value.hex && (h.value = M);
    }
  });
  function H(S, M) {
    h.value.hex = id(S), h.value.rgb = ud(S), h.value.r = S.r, h.value.g = S.g, h.value.b = S.b, h.value.a = S.a;
    const j = h.value[_.value === true ? "hex" : "rgb"];
    t("update:modelValue", j), M === true && t("change", j);
  }
  function q(S) {
    const M = c.value !== void 0 ? c.value : e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1;
    if (typeof S != "string" || S.length === 0 || oo.anyColor(S.replace(/ /g, "")) !== true) return { h: 0, s: 0, v: 0, r: 0, g: 0, b: 0, a: M === true ? 100 : void 0, hex: void 0, rgb: void 0 };
    const j = nh(S);
    return M === true && j.a === void 0 && (j.a = 100), j.hex = id(j), j.rgb = ud(j), Object.assign(j, zi(j));
  }
  function E(S, M, j) {
    const J = o.value;
    if (J === null) return;
    const ne = J.clientWidth, Y = J.clientHeight, fe = J.getBoundingClientRect();
    let he = Math.min(ne, Math.max(0, S - fe.left));
    l.lang.rtl === true && (he = ne - he);
    const ve = Math.min(Y, Math.max(0, M - fe.top)), de = Math.round(100 * he / ne), le = Math.round(100 * Math.max(0, Math.min(1, -(ve / Y) + 1))), Q = sd({ h: h.value.h, s: de, v: le, a: p.value === true ? h.value.a : void 0 });
    h.value.s = de, h.value.v = le, H(Q, j);
  }
  function k(S, M) {
    const j = Math.round(S), J = sd({ h: j, s: h.value.s, v: h.value.v, a: p.value === true ? h.value.a : void 0 });
    h.value.h = j, H(J, M);
  }
  function U(S) {
    k(S, true);
  }
  function L(S, M, j, J, ne) {
    if (J !== void 0 && wt(J), !/^[0-9]+$/.test(S)) {
      ne === true && n.$forceUpdate();
      return;
    }
    const Y = Math.floor(Number(S));
    if (Y < 0 || Y > j) {
      ne === true && n.$forceUpdate();
      return;
    }
    const fe = { r: M === "r" ? Y : h.value.r, g: M === "g" ? Y : h.value.g, b: M === "b" ? Y : h.value.b, a: p.value === true ? M === "a" ? Y : h.value.a : void 0 };
    if (M !== "a") {
      const he = zi(fe);
      h.value.h = he.h, h.value.s = he.s, h.value.v = he.v;
    }
    if (H(fe, ne), ne !== true && (J == null ? void 0 : J.target.selectionEnd) !== void 0) {
      const he = J.target.selectionEnd;
      We(() => {
        J.target.setSelectionRange(he, he);
      });
    }
  }
  function V(S, M) {
    let j;
    const J = S.target.value;
    if (wt(S), s.value === "hex") {
      if (J.length !== (p.value === true ? 9 : 7) || !/^#[0-9A-Fa-f]+$/.test(J)) return true;
      j = th(J);
    } else {
      let Y;
      if (J.endsWith(")")) if (p.value !== true && J.startsWith("rgb(")) {
        if (Y = J.substring(4, J.length - 1).split(",").map((fe) => parseInt(fe, 10)), Y.length !== 3 || !/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(J)) return true;
      } else if (p.value === true && J.startsWith("rgba(")) {
        if (Y = J.substring(5, J.length - 1).split(","), Y.length !== 4 || !/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(J)) return true;
        for (let he = 0; he < 3; he++) {
          const ve = parseInt(Y[he], 10);
          if (ve < 0 || ve > 255) return true;
          Y[he] = ve;
        }
        const fe = parseFloat(Y[3]);
        if (fe < 0 || fe > 1) return true;
        Y[3] = fe;
      } else return true;
      else return true;
      if (Y[0] < 0 || Y[0] > 255 || Y[1] < 0 || Y[1] > 255 || Y[2] < 0 || Y[2] > 255 || p.value === true && (Y[3] < 0 || Y[3] > 1)) return true;
      j = { r: Y[0], g: Y[1], b: Y[2], a: p.value === true ? Y[3] * 100 : void 0 };
    }
    const ne = zi(j);
    if (h.value.h = ne.h, h.value.s = ne.s, h.value.v = ne.v, H(j, M), M !== true) {
      const Y = S.target.selectionEnd;
      We(() => {
        S.target.setSelectionRange(Y, Y);
      });
    }
  }
  function D(S) {
    const M = q(S), j = { r: M.r, g: M.g, b: M.b, a: M.a };
    j.a === void 0 && (j.a = h.value.a), h.value.h = M.h, h.value.s = M.s, h.value.v = M.v, H(j, true);
  }
  function te(S) {
    S.isFinal ? E(S.position.left, S.position.top, true) : be(S);
  }
  const be = _m((S) => {
    E(S.position.left, S.position.top);
  }, 20);
  function K(S) {
    E(S.pageX - window.pageXOffset, S.pageY - window.pageYOffset, true);
  }
  function T(S) {
    E(S.pageX - window.pageXOffset, S.pageY - window.pageYOffset);
  }
  function Z(S) {
    i.value !== null && (i.value.$el.style.opacity = S ? 1 : 0);
  }
  function O(S) {
    s.value = S;
  }
  function oe() {
    const S = [];
    return e.noHeaderTabs !== true && S.push(d(ld, { class: "q-color-picker__header-tabs", modelValue: s.value, dense: true, align: "justify", "onUpdate:modelValue": O }, () => [d(Va, { label: "HEX" + (p.value === true ? "A" : ""), name: "hex", ripple: false }), d(Va, { label: "RGB" + (p.value === true ? "A" : ""), name: "rgb", ripple: false })])), S.push(d("div", { class: "q-color-picker__header-banner row flex-center no-wrap" }, [d("input", { class: "fit", value: h.value[s.value], ...m.value !== true ? { readonly: true } : {}, ...r("topIn", { onInput: (M) => {
      Z(V(M) === true);
    }, onChange: wt, onBlur: (M) => {
      V(M, true) === true && n.$forceUpdate(), Z(false);
    } }) }), d(et, { ref: i, class: "q-color-picker__error-icon absolute no-pointer-events", name: l.iconSet.type.negative })])), d("div", { class: "q-color-picker__header relative-position overflow-hidden" }, [d("div", { class: "q-color-picker__header-bg absolute-full" }), d("div", { class: b.value, style: y.value }, S)]);
  }
  function B() {
    return d(Mp, { modelValue: v.value, animated: true }, () => [d(Ii, { class: "q-color-picker__spectrum-tab overflow-hidden", name: "spectrum" }, I), d(Ii, { class: "q-pa-md q-color-picker__tune-tab", name: "tune" }, ae), d(Ii, { class: "q-color-picker__palette-tab", name: "palette" }, we)]);
  }
  function $(S) {
    v.value = S;
  }
  function ee() {
    return d("div", { class: "q-color-picker__footer relative-position overflow-hidden" }, [d(ld, { class: "absolute-full", modelValue: v.value, dense: true, align: "justify", "onUpdate:modelValue": $ }, () => [d(Va, { icon: l.iconSet.colorPicker.spectrum, name: "spectrum", ripple: false }), d(Va, { icon: l.iconSet.colorPicker.tune, name: "tune", ripple: false }), d(Va, { icon: l.iconSet.colorPicker.palette, name: "palette", ripple: false })])]);
  }
  function I() {
    const S = { ref: o, class: "q-color-picker__spectrum non-selectable relative-position cursor-pointer" + (m.value !== true ? " readonly" : ""), style: x.value, ...m.value === true ? { onClick: K, onMousedown: T } : {} }, M = [d("div", { style: { paddingBottom: "100%" } }), d("div", { class: "q-color-picker__spectrum-white absolute-full" }), d("div", { class: "q-color-picker__spectrum-black absolute-full" }), d("div", { class: "absolute", style: A.value }, [h.value.hex !== void 0 ? d("div", { class: "q-color-picker__spectrum-circle" }) : null])], j = [d(na, { class: "q-color-picker__hue non-selectable", modelValue: h.value.h, min: 0, max: 360, trackSize: "8px", innerTrackColor: "transparent", selectionColor: "transparent", readonly: m.value !== true, thumbPath: cd, "onUpdate:modelValue": k, onChange: U })];
    return p.value === true && j.push(d(na, { class: "q-color-picker__alpha non-selectable", modelValue: h.value.a, min: 0, max: 100, trackSize: "8px", trackColor: "white", innerTrackColor: "transparent", selectionColor: "transparent", trackImg: Rp, readonly: m.value !== true, hideSelection: true, thumbPath: cd, ...r("alphaSlide", { "onUpdate:modelValue": (J) => L(J, "a", 100), onChange: (J) => L(J, "a", 100, void 0, true) }) })), [pn("div", S, M, "spec", m.value, () => R.value), d("div", { class: "q-color-picker__sliders" }, j)];
  }
  function ae() {
    return [d("div", { class: "row items-center no-wrap" }, [d("div", "R"), d(na, { modelValue: h.value.r, min: 0, max: 255, color: "red", dark: a.value, readonly: m.value !== true, ...r("rSlide", { "onUpdate:modelValue": (S) => L(S, "r", 255), onChange: (S) => L(S, "r", 255, void 0, true) }) }), d("input", { value: h.value.r, maxlength: 3, readonly: m.value !== true, onChange: wt, ...r("rIn", { onInput: (S) => L(S.target.value, "r", 255, S), onBlur: (S) => L(S.target.value, "r", 255, S, true) }) })]), d("div", { class: "row items-center no-wrap" }, [d("div", "G"), d(na, { modelValue: h.value.g, min: 0, max: 255, color: "green", dark: a.value, readonly: m.value !== true, ...r("gSlide", { "onUpdate:modelValue": (S) => L(S, "g", 255), onChange: (S) => L(S, "g", 255, void 0, true) }) }), d("input", { value: h.value.g, maxlength: 3, readonly: m.value !== true, onChange: wt, ...r("gIn", { onInput: (S) => L(S.target.value, "g", 255, S), onBlur: (S) => L(S.target.value, "g", 255, S, true) }) })]), d("div", { class: "row items-center no-wrap" }, [d("div", "B"), d(na, { modelValue: h.value.b, min: 0, max: 255, color: "blue", readonly: m.value !== true, dark: a.value, ...r("bSlide", { "onUpdate:modelValue": (S) => L(S, "b", 255), onChange: (S) => L(S, "b", 255, void 0, true) }) }), d("input", { value: h.value.b, maxlength: 3, readonly: m.value !== true, onChange: wt, ...r("bIn", { onInput: (S) => L(S.target.value, "b", 255, S), onBlur: (S) => L(S.target.value, "b", 255, S, true) }) })]), p.value === true ? d("div", { class: "row items-center no-wrap" }, [d("div", "A"), d(na, { modelValue: h.value.a, color: "grey", readonly: m.value !== true, dark: a.value, ...r("aSlide", { "onUpdate:modelValue": (S) => L(S, "a", 100), onChange: (S) => L(S, "a", 100, void 0, true) }) }), d("input", { value: h.value.a, maxlength: 3, readonly: m.value !== true, onChange: wt, ...r("aIn", { onInput: (S) => L(S.target.value, "a", 100, S), onBlur: (S) => L(S.target.value, "a", 100, S, true) }) })]) : null];
  }
  function we() {
    const S = (M) => d("div", { class: "q-color-picker__cube col-auto", style: { backgroundColor: M }, ...m.value === true ? r("palette#" + M, { onClick: () => {
      D(M);
    } }) : {} });
    return [d("div", { class: "row items-center q-color-picker__palette-rows" + (m.value === true ? " q-color-picker__palette-rows--editable" : "") }, F.value.map(S))];
  }
  return () => {
    const S = [B()];
    return e.name !== void 0 && e.disable !== true && C(S, "push"), e.noHeader !== true && S.unshift(oe()), e.noFooter !== true && S.push(ee()), d("div", { class: N.value, ...P.value }, S);
  };
} });
var vl = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
function Pp(e, t, n) {
  return Object.prototype.toString.call(e) === "[object Date]" && (n = e.getDate(), t = e.getMonth() + 1, e = e.getFullYear()), Op(Vs(e, t, n));
}
function dd(e, t, n) {
  return ah(Fp(e, t, n));
}
function Lp(e) {
  return Bp(e) === 0;
}
function io(e, t) {
  return t <= 6 ? 31 : t <= 11 || Lp(e) ? 30 : 29;
}
function Bp(e) {
  const t = vl.length;
  let n = vl[0], l, a, r, o, i;
  if (e < n || e >= vl[t - 1]) throw new Error("Invalid Jalaali year " + e);
  for (i = 1; i < t && (l = vl[i], a = l - n, !(e < l)); i += 1) n = l;
  return o = e - n, a - o < 6 && (o = o - a + _t(a + 4, 33) * 33), r = on(on(o + 1, 33) - 1, 4), r === -1 && (r = 4), r;
}
function lh(e, t) {
  const n = vl.length, l = e + 621;
  let a = -14, r = vl[0], o, i, u, c, s;
  if (e < r || e >= vl[n - 1]) throw new Error("Invalid Jalaali year " + e);
  for (s = 1; s < n && (o = vl[s], i = o - r, !(e < o)); s += 1) a = a + _t(i, 33) * 8 + _t(on(i, 33), 4), r = o;
  c = e - r, a = a + _t(c, 33) * 8 + _t(on(c, 33) + 3, 4), on(i, 33) === 4 && i - c === 4 && (a += 1);
  const v = _t(l, 4) - _t((_t(l, 100) + 1) * 3, 4) - 150, h = 20 + a - v;
  return t || (i - c < 6 && (c = c - i + _t(i + 4, 33) * 33), u = on(on(c + 1, 33) - 1, 4), u === -1 && (u = 4)), { leap: u, gy: l, march: h };
}
function Fp(e, t, n) {
  const l = lh(e, true);
  return Vs(l.gy, 3, l.march) + (t - 1) * 31 - _t(t, 7) * (t - 7) + n - 1;
}
function Op(e) {
  const t = ah(e).gy;
  let n = t - 621, l, a, r;
  const o = lh(n, false), i = Vs(t, 3, o.march);
  if (r = e - i, r >= 0) {
    if (r <= 185) return a = 1 + _t(r, 31), l = on(r, 31) + 1, { jy: n, jm: a, jd: l };
    r -= 186;
  } else n -= 1, r += 179, o.leap === 1 && (r += 1);
  return a = 7 + _t(r, 30), l = on(r, 30) + 1, { jy: n, jm: a, jd: l };
}
function Vs(e, t, n) {
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
function jn(e) {
  return e.year + "/" + rt(e.month) + "/" + rt(e.day);
}
function oh(e, t) {
  const n = f(() => e.disable !== true && e.readonly !== true), l = f(() => n.value === true ? 0 : -1), a = f(() => {
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
var ih = 864e5, Ip = 36e5, Vu = 6e4, uh = "YYYY-MM-DDTHH:mm:ss.SSSZ", zp = /\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g, Dp = /(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g, Di = {};
function Np(e, t) {
  const n = "(" + t.days.join("|") + ")", l = e + n;
  if (Di[l] !== void 0) return Di[l];
  const a = "(" + t.daysShort.join("|") + ")", r = "(" + t.months.join("|") + ")", o = "(" + t.monthsShort.join("|") + ")", i = {};
  let u = 0;
  const c = e.replace(Dp, (v) => {
    switch (u++, v) {
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
        return u--, v[0] === "[" && (v = v.substring(1, v.length - 1)), v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
  }), s = { map: i, regex: new RegExp("^" + c) };
  return Di[l] = s, s;
}
function sh(e, t) {
  return e !== void 0 ? e : t !== void 0 ? t.date : qu.date;
}
function fd(e, t = "") {
  const n = e > 0 ? "-" : "+", l = Math.abs(e), a = Math.floor(l / 60), r = l % 60;
  return n + rt(a) + t + rt(r);
}
function Ka(e, t, n, l, a) {
  const r = { year: null, month: null, day: null, hour: null, minute: null, second: null, millisecond: null, timezoneOffset: null, dateHash: null, timeHash: null };
  if (a !== void 0 && Object.assign(r, a), e == null || e === "" || typeof e != "string") return r;
  t === void 0 && (t = uh);
  const o = sh(n, ni.props), i = o.months, u = o.monthsShort, { regex: c, map: s } = Np(t, o), v = e.match(c);
  if (v === null) return r;
  let h = "";
  if (s.X !== void 0 || s.x !== void 0) {
    const m = parseInt(v[s.X !== void 0 ? s.X : s.x], 10);
    if (isNaN(m) === true || m < 0) return r;
    const g = new Date(m * (s.X !== void 0 ? 1e3 : 1));
    r.year = g.getFullYear(), r.month = g.getMonth() + 1, r.day = g.getDate(), r.hour = g.getHours(), r.minute = g.getMinutes(), r.second = g.getSeconds(), r.millisecond = g.getMilliseconds();
  } else {
    if (s.YYYY !== void 0) r.year = parseInt(v[s.YYYY], 10);
    else if (s.YY !== void 0) {
      const m = parseInt(v[s.YY], 10);
      r.year = m < 0 ? m : 2e3 + m;
    }
    if (s.M !== void 0) {
      if (r.month = parseInt(v[s.M], 10), r.month < 1 || r.month > 12) return r;
    } else s.MMM !== void 0 ? r.month = u.indexOf(v[s.MMM]) + 1 : s.MMMM !== void 0 && (r.month = i.indexOf(v[s.MMMM]) + 1);
    if (s.D !== void 0) {
      if (r.day = parseInt(v[s.D], 10), r.year === null || r.month === null || r.day < 1) return r;
      const m = l !== "persian" ? new Date(r.year, r.month, 0).getDate() : io(r.year, r.month);
      if (r.day > m) return r;
    }
    s.H !== void 0 ? r.hour = parseInt(v[s.H], 10) % 24 : s.h !== void 0 && (r.hour = parseInt(v[s.h], 10) % 12, (s.A && v[s.A] === "PM" || s.a && v[s.a] === "pm" || s.aa && v[s.aa] === "p.m.") && (r.hour += 12), r.hour = r.hour % 24), s.m !== void 0 && (r.minute = parseInt(v[s.m], 10) % 60), s.s !== void 0 && (r.second = parseInt(v[s.s], 10) % 60), s.S !== void 0 && (r.millisecond = parseInt(v[s.S], 10) * 10 ** (3 - v[s.S].length)), (s.Z !== void 0 || s.ZZ !== void 0) && (h = s.Z !== void 0 ? v[s.Z].replace(":", "") : v[s.ZZ], r.timezoneOffset = (h[0] === "+" ? -1 : 1) * (60 * h.slice(1, 3) + 1 * h.slice(3, 5)));
  }
  return r.dateHash = rt(r.year, 6) + "/" + rt(r.month) + "/" + rt(r.day), r.timeHash = rt(r.hour) + ":" + rt(r.minute) + ":" + rt(r.second) + h, r;
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
function Un(e, t, n) {
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
  return (e.getTime() - e.getTimezoneOffset() * Vu - (t.getTime() - t.getTimezoneOffset() * Vu)) / n;
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
      return Ur(Un(l, "day"), Un(a, "day"), ih);
    case "hours":
    case "hour":
      return Ur(Un(l, "hour"), Un(a, "hour"), Ip);
    case "minutes":
    case "minute":
      return Ur(Un(l, "minute"), Un(a, "minute"), Vu);
    case "seconds":
    case "second":
      return Ur(Un(l, "second"), Un(a, "second"), 1e3);
  }
}
function Hi(e) {
  return ch(e, Un(e, "year"), "days") + 1;
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
var vd = { YY(e, t, n) {
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
  return fd(a, ":");
}, ZZ(e, t, n, l) {
  const a = l ?? e.getTimezoneOffset();
  return fd(a);
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
  return t.replace(zp, (i, u) => i in vd ? vd[i](r, o, l, a) : u === void 0 ? i : u.split("\\]").join("]"));
}
var Dn = 20, Hp = ["Calendar", "Years", "Months"], md = (e) => Hp.includes(e), ji = (e) => /^-?[\d]+\/[0-1]\d$/.test(e), aa = " \u2014 ";
function ll(e) {
  return e.year + "/" + rt(e.month);
}
me({ name: "QDate", props: { ...Fo, ...wn, ...nt, modelValue: { required: true, validator: (e) => typeof e == "string" || Array.isArray(e) === true || Object(e) === e || e === null }, multiple: Boolean, range: Boolean, title: String, subtitle: String, mask: { ...Fo.mask, default: "YYYY/MM/DD" }, defaultYearMonth: { type: String, validator: ji }, yearsInMonthView: Boolean, events: [Array, Function], eventColor: [String, Function], emitImmediately: Boolean, options: [Array, Function], navigationMinYearMonth: { type: String, validator: ji }, navigationMaxYearMonth: { type: String, validator: ji }, noUnset: Boolean, firstDayOfWeek: [String, Number], todayBtn: Boolean, minimal: Boolean, defaultView: { type: String, default: "Calendar", validator: md } }, emits: [...rh, "rangeStart", "rangeEnd", "navigation"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = lt(e, a), { getCache: o } = Pr(), { tabindex: i, headerClass: u, getLocale: c, getCurrentDate: s } = oh(e, a);
  let v;
  const h = Rr(e), m = xl(h), g = W(null), _ = W(He()), w = W(c()), C = f(() => He()), p = f(() => c()), y = f(() => s()), b = W(ue(_.value, w.value)), x = W(e.defaultView), A = f(() => a.lang.rtl === true ? "right" : "left"), F = W(A.value), N = W(A.value), P = b.value.year, R = W(P - P % Dn - (P < 0 ? Dn : 0)), H = W(null), q = f(() => {
    const z = e.landscape === true ? "landscape" : "portrait";
    return `q-date q-date--${z} q-date--${z}-${e.minimal === true ? "minimal" : "standard"}` + (r.value === true ? " q-date--dark q-dark" : "") + (e.bordered === true ? " q-date--bordered" : "") + (e.square === true ? " q-date--square no-border-radius" : "") + (e.flat === true ? " q-date--flat no-shadow" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-date--readonly" : "");
  }), E = f(() => e.color || "primary"), k = f(() => e.textColor || "white"), U = f(() => e.emitImmediately === true && e.multiple !== true && e.range !== true), L = f(() => Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue !== null && e.modelValue !== void 0 ? [e.modelValue] : []), V = f(() => L.value.filter((z) => typeof z == "string").map((z) => Ve(z, _.value, w.value)).filter((z) => z.dateHash !== null && z.day !== null && z.month !== null && z.year !== null)), D = f(() => {
    const z = (G) => Ve(G, _.value, w.value);
    return L.value.filter((G) => Pt(G) === true && G.from !== void 0 && G.to !== void 0).map((G) => ({ from: z(G.from), to: z(G.to) })).filter((G) => G.from.dateHash !== null && G.to.dateHash !== null && G.from.dateHash < G.to.dateHash);
  }), te = f(() => e.calendar !== "persian" ? (z) => new Date(z.year, z.month - 1, z.day) : (z) => {
    const G = dd(z.year, z.month, z.day);
    return new Date(G.gy, G.gm - 1, G.gd);
  }), be = f(() => e.calendar === "persian" ? jn : (z, G, ce) => dh(new Date(z.year, z.month - 1, z.day, z.hour, z.minute, z.second, z.millisecond), G === void 0 ? _.value : G, ce === void 0 ? w.value : ce, z.year, z.timezoneOffset)), K = f(() => V.value.length + D.value.reduce((z, G) => z + 1 + ch(te.value(G.to), te.value(G.from)), 0)), T = f(() => {
    if (e.title !== void 0 && e.title !== null && e.title.length !== 0) return e.title;
    if (H.value !== null) {
      const ce = H.value.init, Te = te.value(ce);
      return w.value.daysShort[Te.getDay()] + ", " + w.value.monthsShort[ce.month - 1] + " " + ce.day + aa + "?";
    }
    if (K.value === 0) return aa;
    if (K.value > 1) return `${K.value} ${w.value.pluralDay}`;
    const z = V.value[0], G = te.value(z);
    return isNaN(G.valueOf()) === true ? aa : w.value.headerTitle !== void 0 ? w.value.headerTitle(G, z) : w.value.daysShort[G.getDay()] + ", " + w.value.monthsShort[z.month - 1] + " " + z.day;
  }), Z = f(() => V.value.concat(D.value.map((G) => G.from)).sort((G, ce) => G.year - ce.year || G.month - ce.month)[0]), O = f(() => V.value.concat(D.value.map((G) => G.to)).sort((G, ce) => ce.year - G.year || ce.month - G.month)[0]), oe = f(() => {
    if (e.subtitle !== void 0 && e.subtitle !== null && e.subtitle.length !== 0) return e.subtitle;
    if (K.value === 0) return aa;
    if (K.value > 1) {
      const z = Z.value, G = O.value, ce = w.value.monthsShort;
      return ce[z.month - 1] + (z.year !== G.year ? " " + z.year + aa + ce[G.month - 1] + " " : z.month !== G.month ? aa + ce[G.month - 1] : "") + " " + G.year;
    }
    return V.value[0].year;
  }), B = f(() => {
    const z = [a.iconSet.datetime.arrowLeft, a.iconSet.datetime.arrowRight];
    return a.lang.rtl === true ? z.reverse() : z;
  }), $ = f(() => e.firstDayOfWeek !== void 0 ? Number(e.firstDayOfWeek) : w.value.firstDayOfWeek), ee = f(() => {
    const z = w.value.daysShort, G = $.value;
    return G > 0 ? z.slice(G, 7).concat(z.slice(0, G)) : z;
  }), I = f(() => {
    const z = b.value;
    return e.calendar !== "persian" ? new Date(z.year, z.month, 0).getDate() : io(z.year, z.month);
  }), ae = f(() => typeof e.eventColor == "function" ? e.eventColor : () => e.eventColor), we = f(() => {
    if (e.navigationMinYearMonth === void 0) return null;
    const z = e.navigationMinYearMonth.split("/");
    return { year: parseInt(z[0], 10), month: parseInt(z[1], 10) };
  }), S = f(() => {
    if (e.navigationMaxYearMonth === void 0) return null;
    const z = e.navigationMaxYearMonth.split("/");
    return { year: parseInt(z[0], 10), month: parseInt(z[1], 10) };
  }), M = f(() => {
    const z = { month: { prev: true, next: true }, year: { prev: true, next: true } };
    return we.value !== null && we.value.year >= b.value.year && (z.year.prev = false, we.value.year === b.value.year && we.value.month >= b.value.month && (z.month.prev = false)), S.value !== null && S.value.year <= b.value.year && (z.year.next = false, S.value.year === b.value.year && S.value.month <= b.value.month && (z.month.next = false)), z;
  }), j = f(() => {
    const z = {};
    return V.value.forEach((G) => {
      const ce = ll(G);
      z[ce] === void 0 && (z[ce] = []), z[ce].push(G.day);
    }), z;
  }), J = f(() => {
    const z = {};
    return D.value.forEach((G) => {
      const ce = ll(G.from), Te = ll(G.to);
      if (z[ce] === void 0 && (z[ce] = []), z[ce].push({ from: G.from.day, to: ce === Te ? G.to.day : void 0, range: G }), ce < Te) {
        let Ee;
        const { year: Xe, month: Le } = G.from, De = Le < 12 ? { year: Xe, month: Le + 1 } : { year: Xe + 1, month: 1 };
        for (; (Ee = ll(De)) <= Te; ) z[Ee] === void 0 && (z[Ee] = []), z[Ee].push({ from: void 0, to: Ee === Te ? G.to.day : void 0, range: G }), De.month++, De.month > 12 && (De.year++, De.month = 1);
      }
    }), z;
  }), ne = f(() => {
    if (H.value === null) return;
    const { init: z, initHash: G, final: ce, finalHash: Te } = H.value, [Ee, Xe] = G <= Te ? [z, ce] : [ce, z], Le = ll(Ee), De = ll(Xe);
    if (Le !== Y.value && De !== Y.value) return;
    const at = {};
    return Le === Y.value ? (at.from = Ee.day, at.includeFrom = true) : at.from = 1, De === Y.value ? (at.to = Xe.day, at.includeTo = true) : at.to = I.value, at;
  }), Y = f(() => ll(b.value)), fe = f(() => {
    const z = {};
    if (e.options === void 0) {
      for (let ce = 1; ce <= I.value; ce++) z[ce] = true;
      return z;
    }
    const G = typeof e.options == "function" ? e.options : (ce) => e.options.includes(ce);
    for (let ce = 1; ce <= I.value; ce++) {
      const Te = Y.value + "/" + rt(ce);
      z[ce] = G(Te);
    }
    return z;
  }), he = f(() => {
    const z = {};
    if (e.events === void 0) for (let G = 1; G <= I.value; G++) z[G] = false;
    else {
      const G = typeof e.events == "function" ? e.events : (ce) => e.events.includes(ce);
      for (let ce = 1; ce <= I.value; ce++) {
        const Te = Y.value + "/" + rt(ce);
        z[ce] = G(Te) === true && ae.value(Te);
      }
    }
    return z;
  }), ve = f(() => {
    let z, G;
    const { year: ce, month: Te } = b.value;
    if (e.calendar !== "persian") z = new Date(ce, Te - 1, 1), G = new Date(ce, Te - 1, 0).getDate();
    else {
      const Ee = dd(ce, Te, 1);
      z = new Date(Ee.gy, Ee.gm - 1, Ee.gd);
      let Xe = Te - 1, Le = ce;
      Xe === 0 && (Xe = 12, Le--), G = io(Le, Xe);
    }
    return { days: z.getDay() - $.value - 1, endDay: G };
  }), de = f(() => {
    const z = [], { days: G, endDay: ce } = ve.value, Te = G < 0 ? G + 7 : G;
    if (Te < 6) for (let Le = ce - Te; Le <= ce; Le++) z.push({ i: Le, fill: true });
    const Ee = z.length;
    for (let Le = 1; Le <= I.value; Le++) {
      const De = { i: Le, event: he.value[Le], classes: [] };
      fe.value[Le] === true && (De.in = true, De.flat = true), z.push(De);
    }
    if (j.value[Y.value] !== void 0 && j.value[Y.value].forEach((Le) => {
      const De = Ee + Le - 1;
      Object.assign(z[De], { selected: true, unelevated: true, flat: false, color: E.value, textColor: k.value });
    }), J.value[Y.value] !== void 0 && J.value[Y.value].forEach((Le) => {
      if (Le.from !== void 0) {
        const De = Ee + Le.from - 1, at = Ee + (Le.to || I.value) - 1;
        for (let cn = De; cn <= at; cn++) Object.assign(z[cn], { range: Le.range, unelevated: true, color: E.value, textColor: k.value });
        Object.assign(z[De], { rangeFrom: true, flat: false }), Le.to !== void 0 && Object.assign(z[at], { rangeTo: true, flat: false });
      } else if (Le.to !== void 0) {
        const De = Ee + Le.to - 1;
        for (let at = Ee; at <= De; at++) Object.assign(z[at], { range: Le.range, unelevated: true, color: E.value, textColor: k.value });
        Object.assign(z[De], { flat: false, rangeTo: true });
      } else {
        const De = Ee + I.value - 1;
        for (let at = Ee; at <= De; at++) Object.assign(z[at], { range: Le.range, unelevated: true, color: E.value, textColor: k.value });
      }
    }), ne.value !== void 0) {
      const Le = Ee + ne.value.from - 1, De = Ee + ne.value.to - 1;
      for (let at = Le; at <= De; at++) z[at].color = E.value, z[at].editRange = true;
      ne.value.includeFrom === true && (z[Le].editRangeFrom = true), ne.value.includeTo === true && (z[De].editRangeTo = true);
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
  }), le = f(() => e.disable === true ? { "aria-disabled": "true" } : {});
  ge(() => e.modelValue, (z) => {
    if (v === JSON.stringify(z)) v = 0;
    else {
      const G = ue(_.value, w.value);
      it(G.year, G.month, G);
    }
  }), ge(x, () => {
    g.value !== null && l.$el.contains(document.activeElement) === true && g.value.focus();
  }), ge(() => b.value.year + "|" + b.value.month, () => {
    n("navigation", { year: b.value.year, month: b.value.month });
  }), ge(C, (z) => {
    xe(z, w.value, "mask"), _.value = z;
  }), ge(p, (z) => {
    xe(_.value, z, "locale"), w.value = z;
  });
  function Q(z) {
    v = JSON.stringify(z);
  }
  function ie() {
    const { year: z, month: G, day: ce } = y.value, Te = { ...b.value, year: z, month: G, day: ce }, Ee = j.value[ll(Te)];
    (Ee === void 0 || Ee.includes(Te.day) === false) && In(Te), qe(Te.year, Te.month);
  }
  function _e(z) {
    md(z) === true && (x.value = z);
  }
  function ke(z, G) {
    ["month", "year"].includes(z) && (z === "month" ? re : pe)(G === true ? -1 : 1);
  }
  function qe(z, G) {
    x.value = "Calendar", it(z, G);
  }
  function Me(z, G) {
    if (e.range === false || !z) {
      H.value = null;
      return;
    }
    const ce = Object.assign({ ...b.value }, z), Te = G !== void 0 ? Object.assign({ ...b.value }, G) : ce;
    H.value = { init: ce, initHash: jn(ce), final: Te, finalHash: jn(Te) }, qe(ce.year, ce.month);
  }
  function He() {
    return e.calendar === "persian" ? "YYYY/MM/DD" : e.mask;
  }
  function Ve(z, G, ce) {
    return Ka(z, G, ce, e.calendar, { hour: 0, minute: 0, second: 0, millisecond: 0 });
  }
  function ue(z, G) {
    const ce = Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue ? [e.modelValue] : [];
    if (ce.length === 0) return ye();
    const Te = ce[ce.length - 1], Ee = Ve(Te.from !== void 0 ? Te.from : Te, z, G);
    return Ee.dateHash === null ? ye() : Ee;
  }
  function ye() {
    let z, G;
    if (e.defaultYearMonth !== void 0) {
      const ce = e.defaultYearMonth.split("/");
      z = parseInt(ce[0], 10), G = parseInt(ce[1], 10);
    } else {
      const ce = y.value !== void 0 ? y.value : s();
      z = ce.year, G = ce.month;
    }
    return { year: z, month: G, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0, dateHash: z + "/" + rt(G) + "/01" };
  }
  function re(z) {
    let G = b.value.year, ce = Number(b.value.month) + z;
    ce === 13 ? (ce = 1, G++) : ce === 0 && (ce = 12, G--), it(G, ce), U.value === true && jt("month");
  }
  function pe(z) {
    const G = Number(b.value.year) + z;
    it(G, b.value.month), U.value === true && jt("year");
  }
  function Ce(z) {
    it(z, b.value.month), x.value = e.defaultView === "Years" ? "Months" : "Calendar", U.value === true && jt("year");
  }
  function Oe(z) {
    it(b.value.year, z), x.value = "Calendar", U.value === true && jt("month");
  }
  function $e(z, G) {
    var _a2;
    (((_a2 = j.value[G]) == null ? void 0 : _a2.includes(z.day)) === true ? se : In)(z);
  }
  function Ye(z) {
    return { year: z.year, month: z.month, day: z.day };
  }
  function it(z, G, ce) {
    if (we.value !== null && z <= we.value.year && ((G < we.value.month || z < we.value.year) && (G = we.value.month), z = we.value.year), S.value !== null && z >= S.value.year && ((G > S.value.month || z > S.value.year) && (G = S.value.month), z = S.value.year), ce !== void 0) {
      const { hour: Ee, minute: Xe, second: Le, millisecond: De, timezoneOffset: at, timeHash: cn } = ce;
      Object.assign(b.value, { hour: Ee, minute: Xe, second: Le, millisecond: De, timezoneOffset: at, timeHash: cn });
    }
    const Te = z + "/" + rt(G) + "/01";
    Te !== b.value.dateHash && (F.value = b.value.dateHash < Te == (a.lang.rtl !== true) ? "left" : "right", z !== b.value.year && (N.value = F.value), We(() => {
      R.value = z - z % Dn - (z < 0 ? Dn : 0), Object.assign(b.value, { year: z, month: G, day: 1, dateHash: Te });
    }));
  }
  function Ct(z, G, ce) {
    const Te = z !== null && z.length === 1 && e.multiple === false ? z[0] : z, { reason: Ee, details: Xe } = tl(G, ce);
    Q(Te), n("update:modelValue", Te, Ee, Xe);
  }
  function jt(z) {
    const G = V.value[0] !== void 0 && V.value[0].dateHash !== null ? { ...V.value[0] } : { ...b.value };
    We(() => {
      G.year = b.value.year, G.month = b.value.month;
      const ce = e.calendar !== "persian" ? new Date(G.year, G.month, 0).getDate() : io(G.year, G.month);
      G.day = Math.min(Math.max(1, G.day), ce);
      const Te = ln(G), { details: Ee } = tl("", G);
      Q(Te), n("update:modelValue", Te, z, Ee);
    });
  }
  function tl(z, G) {
    return G.from !== void 0 ? { reason: `${z}-range`, details: { ...Ye(G.target), from: Ye(G.from), to: Ye(G.to) } } : { reason: `${z}-day`, details: Ye(G) };
  }
  function ln(z, G, ce) {
    return z.from !== void 0 ? { from: be.value(z.from, G, ce), to: be.value(z.to, G, ce) } : be.value(z, G, ce);
  }
  function In(z) {
    let G;
    if (e.multiple === true) if (z.from !== void 0) {
      const ce = jn(z.from), Te = jn(z.to), Ee = V.value.filter((Le) => Le.dateHash < ce || Le.dateHash > Te), Xe = D.value.filter(({ from: Le, to: De }) => De.dateHash < ce || Le.dateHash > Te);
      G = Ee.concat(Xe).concat(z).map((Le) => ln(Le));
    } else {
      const ce = L.value.slice();
      ce.push(ln(z)), G = ce;
    }
    else G = ln(z);
    Ct(G, "add", z);
  }
  function se(z) {
    if (e.noUnset === true) return;
    let G = null;
    if (e.multiple === true && Array.isArray(e.modelValue) === true) {
      const ce = ln(z);
      z.from !== void 0 ? G = e.modelValue.filter((Te) => Te.from !== void 0 ? Te.from !== ce.from && Te.to !== ce.to : true) : G = e.modelValue.filter((Te) => Te !== ce), G.length === 0 && (G = null);
    }
    Ct(G, "remove", z);
  }
  function xe(z, G, ce) {
    const Te = V.value.concat(D.value).map((Xe) => ln(Xe, z, G)).filter((Xe) => Xe.from !== void 0 ? Xe.from.dateHash !== null && Xe.to.dateHash !== null : Xe.dateHash !== null), Ee = (e.multiple === true ? Te : Te[0]) || null;
    Q(Ee), n("update:modelValue", Ee, ce);
  }
  function Fe() {
    if (e.minimal !== true) return d("div", { class: "q-date__header " + u.value }, [d("div", { class: "relative-position" }, [d(Ft, { name: "q-transition--fade" }, () => d("div", { key: "h-yr-" + oe.value, class: "q-date__header-subtitle q-date__header-link " + (x.value === "Years" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: i.value, ...o("vY", { onClick() {
      x.value = "Years";
    }, onKeyup(z) {
      z.keyCode === 13 && (x.value = "Years");
    } }) }, [oe.value]))]), d("div", { class: "q-date__header-title relative-position flex no-wrap" }, [d("div", { class: "relative-position col" }, [d(Ft, { name: "q-transition--fade" }, () => d("div", { key: "h-sub" + T.value, class: "q-date__header-title-label q-date__header-link " + (x.value === "Calendar" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: i.value, ...o("vC", { onClick() {
      x.value = "Calendar";
    }, onKeyup(z) {
      z.keyCode === 13 && (x.value = "Calendar");
    } }) }, [T.value]))]), e.todayBtn === true ? d(Ze, { class: "q-date__header-today self-start", icon: a.iconSet.datetime.today, ariaLabel: a.lang.date.today, flat: true, size: "sm", round: true, tabindex: i.value, onClick: ie }) : null])]);
  }
  function Be({ label: z, type: G, key: ce, dir: Te, goTo: Ee, boundaries: Xe, cls: Le }) {
    return [d("div", { class: "row items-center q-date__arrow" }, [d(Ze, { round: true, dense: true, size: "sm", flat: true, icon: B.value[0], ariaLabel: G === "Years" ? a.lang.date.prevYear : a.lang.date.prevMonth, tabindex: i.value, disable: Xe.prev === false, ...o("go-#" + G, { onClick() {
      Ee(-1);
    } }) })]), d("div", { class: "relative-position overflow-hidden flex flex-center" + Le }, [d(Ft, { name: "q-transition--jump-" + Te }, () => d("div", { key: ce }, [d(Ze, { flat: true, dense: true, noCaps: true, label: z, tabindex: i.value, ...o("view#" + G, { onClick: () => {
      x.value = G;
    } }) })]))]), d("div", { class: "row items-center q-date__arrow" }, [d(Ze, { round: true, dense: true, size: "sm", flat: true, icon: B.value[1], ariaLabel: G === "Years" ? a.lang.date.nextYear : a.lang.date.nextMonth, tabindex: i.value, disable: Xe.next === false, ...o("go+#" + G, { onClick() {
      Ee(1);
    } }) })])];
  }
  const Ue = { Calendar: () => [d("div", { key: "calendar-view", class: "q-date__view q-date__calendar" }, [d("div", { class: "q-date__navigation row items-center no-wrap" }, Be({ label: w.value.months[b.value.month - 1], type: "Months", key: b.value.month, dir: F.value, goTo: re, boundaries: M.value.month, cls: " col" }).concat(Be({ label: b.value.year, type: "Years", key: b.value.year, dir: N.value, goTo: pe, boundaries: M.value.year, cls: "" }))), d("div", { class: "q-date__calendar-weekdays row items-center no-wrap" }, ee.value.map((z) => d("div", { class: "q-date__calendar-item" }, [d("div", z)]))), d("div", { class: "q-date__calendar-days-container relative-position overflow-hidden" }, [d(Ft, { name: "q-transition--slide-" + F.value }, () => d("div", { key: Y.value, class: "q-date__calendar-days fit" }, de.value.map((z) => d("div", { class: z.classes }, [z.in === true ? d(Ze, { class: z.today === true ? "q-date__today" : "", dense: true, flat: z.flat, unelevated: z.unelevated, color: z.color, textColor: z.textColor, label: z.i, tabindex: i.value, ...o("day#" + z.i, { onClick: () => {
    yt(z.i);
  }, onMouseover: () => {
    ht(z.i);
  } }) }, z.event !== false ? () => d("div", { class: "q-date__event bg-" + z.event }) : null) : d("div", "" + z.i)]))))])])], Months() {
    const z = b.value.year === y.value.year, G = (Te) => we.value !== null && b.value.year === we.value.year && we.value.month > Te || S.value !== null && b.value.year === S.value.year && S.value.month < Te, ce = w.value.monthsShort.map((Te, Ee) => {
      const Xe = b.value.month === Ee + 1;
      return d("div", { class: "q-date__months-item flex flex-center" }, [d(Ze, { class: z === true && y.value.month === Ee + 1 ? "q-date__today" : null, flat: Xe !== true, label: Te, unelevated: Xe, color: Xe === true ? E.value : null, textColor: Xe === true ? k.value : null, tabindex: i.value, disable: G(Ee + 1), ...o("month#" + Ee, { onClick: () => {
        Oe(Ee + 1);
      } }) })]);
    });
    return e.yearsInMonthView === true && ce.unshift(d("div", { class: "row no-wrap full-width" }, [Be({ label: b.value.year, type: "Years", key: b.value.year, dir: N.value, goTo: pe, boundaries: M.value.year, cls: " col" })])), d("div", { key: "months-view", class: "q-date__view q-date__months flex flex-center" }, ce);
  }, Years() {
    const z = R.value, G = z + Dn, ce = [], Te = (Ee) => we.value !== null && we.value.year > Ee || S.value !== null && S.value.year < Ee;
    for (let Ee = z; Ee <= G; Ee++) {
      const Xe = b.value.year === Ee;
      ce.push(d("div", { class: "q-date__years-item flex flex-center" }, [d(Ze, { key: "yr" + Ee, class: y.value.year === Ee ? "q-date__today" : null, flat: !Xe, label: Ee, dense: true, unelevated: Xe, color: Xe === true ? E.value : null, textColor: Xe === true ? k.value : null, tabindex: i.value, disable: Te(Ee), ...o("yr#" + Ee, { onClick: () => {
        Ce(Ee);
      } }) })]));
    }
    return d("div", { class: "q-date__view q-date__years flex flex-center" }, [d("div", { class: "col-auto" }, [d(Ze, { round: true, dense: true, flat: true, icon: B.value[0], ariaLabel: a.lang.date.prevRangeYears(Dn), tabindex: i.value, disable: Te(z), ...o("y-", { onClick: () => {
      R.value -= Dn;
    } }) })]), d("div", { class: "q-date__years-content col self-stretch row items-center" }, ce), d("div", { class: "col-auto" }, [d(Ze, { round: true, dense: true, flat: true, icon: B.value[1], ariaLabel: a.lang.date.nextRangeYears(Dn), tabindex: i.value, disable: Te(G), ...o("y+", { onClick: () => {
      R.value += Dn;
    } }) })])]);
  } };
  function yt(z) {
    const G = { ...b.value, day: z };
    if (e.range === false) {
      $e(G, Y.value);
      return;
    }
    if (H.value === null) {
      const ce = de.value.find((Ee) => Ee.fill !== true && Ee.i === z);
      if (e.noUnset !== true && ce.range !== void 0) {
        se({ target: G, from: ce.range.from, to: ce.range.to });
        return;
      }
      if (ce.selected === true) {
        se(G);
        return;
      }
      const Te = jn(G);
      H.value = { init: G, initHash: Te, final: G, finalHash: Te }, n("rangeStart", Ye(G));
    } else {
      const ce = H.value.initHash, Te = jn(G), Ee = ce <= Te ? { from: H.value.init, to: G } : { from: G, to: H.value.init };
      H.value = null, In(ce === Te ? G : { target: G, ...Ee }), n("rangeEnd", { from: Ye(Ee.from), to: Ye(Ee.to) });
    }
  }
  function ht(z) {
    if (H.value !== null) {
      const G = { ...b.value, day: z };
      Object.assign(H.value, { final: G, finalHash: jn(G) });
    }
  }
  return Object.assign(l, { setToday: ie, setView: _e, offsetCalendar: ke, setCalendarTo: qe, setEditingRange: Me }), () => {
    const z = [d("div", { class: "q-date__content col relative-position" }, [d(Ft, { name: "q-transition--fade" }, Ue[x.value])])], G = Pe(t.default);
    return G !== void 0 && z.push(d("div", { class: "q-date__actions" }, G)), e.name !== void 0 && e.disable !== true && m(z, "push"), d("div", { class: q.value, ...le.value }, [Fe(), d("div", { ref: g, class: "q-date__main col column", tabindex: -1 }, z)]);
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
var Ia = 0, Ui, Qi, Wa, Ki = false, hd, gd, bd, Tl = null;
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
function yd(e) {
  e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function Qr(e) {
  Ki !== true && (Ki = true, requestAnimationFrame(() => {
    Ki = false;
    const { height: t } = e.target, { clientHeight: n, scrollTop: l } = document.scrollingElement;
    (Wa === void 0 || t !== window.innerHeight) && (Wa = n - t, document.scrollingElement.scrollTop = l), l > Wa && (document.scrollingElement.scrollTop -= Math.ceil((l - Wa) / 8));
  }));
}
function pd(e) {
  const t = document.body, n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: l, overflowX: a } = window.getComputedStyle(t);
    Ui = ii(window), Qi = gl(window), hd = t.style.left, gd = t.style.top, bd = window.location.href, t.style.left = `-${Ui}px`, t.style.top = `-${Qi}px`, a !== "hidden" && (a === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), l !== "hidden" && (l === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = true, Ie.is.ios === true && (n === true ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", Qr, dt.passiveCapture), window.visualViewport.addEventListener("scroll", Qr, dt.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", yd, dt.passiveCapture));
  }
  Ie.is.desktop === true && Ie.is.mac === true && window[`${e}EventListener`]("wheel", jp, dt.notPassive), e === "remove" && (Ie.is.ios === true && (n === true ? (window.visualViewport.removeEventListener("resize", Qr, dt.passiveCapture), window.visualViewport.removeEventListener("scroll", Qr, dt.passiveCapture)) : window.removeEventListener("scroll", yd, dt.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = false, t.style.left = hd, t.style.top = gd, window.location.href === bd && window.scrollTo(Ui, Qi), Wa = void 0);
}
function Iu(e) {
  let t = "add";
  if (e === true) {
    if (Ia++, Tl !== null) {
      clearTimeout(Tl), Tl = null;
      return;
    }
    if (Ia > 1) return;
  } else {
    if (Ia === 0 || (Ia--, Ia > 0)) return;
    if (t = "remove", Ie.is.ios === true && Ie.is.nativeMobile === true) {
      Tl !== null && clearTimeout(Tl), Tl = setTimeout(() => {
        pd(t), Tl = null;
      }, 100);
      return;
    }
  }
  pd(t);
}
function vh() {
  let e;
  return { preventBodyScroll(t) {
    t !== e && (e !== void 0 || t === true) && (e = t, Iu(t));
  } };
}
var Kr = 0, Qp = { standard: "fixed-full flex-center", top: "fixed-top justify-center", bottom: "fixed-bottom justify-center", right: "fixed-right items-center", left: "fixed-left items-center" }, _d = { standard: ["scale", "scale"], top: ["slide-down", "slide-up"], bottom: ["slide-up", "slide-down"], right: ["slide-left", "slide-right"], left: ["slide-right", "slide-left"] }, ci = me({ name: "QDialog", inheritAttrs: false, props: { ...$a, ...zl, transitionShow: String, transitionHide: String, persistent: Boolean, autoClose: Boolean, allowFocusOutside: Boolean, noEscDismiss: Boolean, noBackdropDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, noShake: Boolean, seamless: Boolean, maximized: Boolean, fullWidth: Boolean, fullHeight: Boolean, square: Boolean, backdropFilter: String, position: { type: String, default: "standard", validator: (e) => ["standard", "top", "bottom", "left", "right"].includes(e) } }, emits: [...Aa, "shake", "click", "escapeKey"], setup(e, { slots: t, emit: n, attrs: l }) {
  const a = Se(), r = W(null), o = W(false), i = W(false);
  let u = null, c = null, s, v;
  const h = f(() => e.persistent !== true && e.noRouteDismiss !== true && e.seamless !== true), { preventBodyScroll: m } = vh(), { registerTimeout: g } = Xn(), { registerTick: _, removeTick: w } = ya(), { transitionProps: C, transitionStyle: p } = oi(e, () => _d[e.position][0], () => _d[e.position][1]), y = f(() => p.value + (e.backdropFilter !== void 0 ? `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}` : "")), { showPortal: b, hidePortal: x, portalIsAccessible: A, renderPortal: F } = ks(a, r, oe, "dialog"), { hide: N } = Ra({ showing: o, hideOnRouteChange: h, handleShow: U, handleHide: L, processOnMount: true }), { addToHistory: P, removeFromHistory: R } = fh(o, N, h), H = f(() => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === true ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${Qp[e.position]}` + (i.value === true ? " q-dialog__inner--animating" : "") + (e.fullWidth === true ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === true ? " q-dialog__inner--fullheight" : "") + (e.square === true ? " q-dialog__inner--square" : "")), q = f(() => o.value === true && e.seamless !== true), E = f(() => e.autoClose === true ? { onClick: T } : {}), k = f(() => [`q-dialog fullscreen no-pointer-events q-dialog--${q.value === true ? "modal" : "seamless"}`, l.class]);
  ge(() => e.maximized, (B) => {
    o.value === true && K(B);
  }), ge(q, (B) => {
    m(B), B === true ? (Lm(O), Rm(te)) : (Bu(O), Mo(te));
  });
  function U(B) {
    var _a2;
    P(), c = e.noRefocus === false && document.activeElement !== null ? document.activeElement : null, K(e.maximized), b(), i.value = true, e.noFocus !== true ? ((_a2 = document.activeElement) == null ? void 0 : _a2.blur(), _(V)) : w(), g(() => {
      if (a.proxy.$q.platform.is.ios === true) {
        if (e.seamless !== true && document.activeElement) {
          const { top: $, bottom: ee } = document.activeElement.getBoundingClientRect(), { innerHeight: I } = window, ae = window.visualViewport !== void 0 ? window.visualViewport.height : I;
          $ > 0 && ee > ae / 2 && (document.scrollingElement.scrollTop = Math.min(document.scrollingElement.scrollHeight - ae, ee >= I ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + ee - ae / 2))), document.activeElement.scrollIntoView();
        }
        v = true, r.value.click(), v = false;
      }
      b(true), i.value = false, n("show", B);
    }, e.transitionDuration);
  }
  function L(B) {
    w(), R(), be(true), i.value = true, x(), c !== null && ((((B == null ? void 0 : B.type.indexOf("key")) === 0 ? c.closest('[tabindex]:not([tabindex^="-"])') : void 0) || c).focus(), c = null), g(() => {
      x(true), i.value = false, n("hide", B);
    }, e.transitionDuration);
  }
  function V(B) {
    Pa(() => {
      let $ = r.value;
      if ($ !== null) {
        if (B !== void 0) {
          const ee = $.querySelector(B);
          if (ee !== null) {
            ee.focus({ preventScroll: true });
            return;
          }
        }
        $.contains(document.activeElement) !== true && ($ = $.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || $.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || $.querySelector("[autofocus], [data-autofocus]") || $, $.focus({ preventScroll: true }));
      }
    });
  }
  function D(B) {
    B && typeof B.focus == "function" ? B.focus({ preventScroll: true }) : V(), n("shake");
    const $ = r.value;
    $ !== null && ($.classList.remove("q-animate--scale"), $.classList.add("q-animate--scale"), u !== null && clearTimeout(u), u = setTimeout(() => {
      u = null, r.value !== null && ($.classList.remove("q-animate--scale"), V());
    }, 170));
  }
  function te() {
    e.seamless !== true && (e.persistent === true || e.noEscDismiss === true ? e.maximized !== true && e.noShake !== true && D() : (n("escapeKey"), N()));
  }
  function be(B) {
    u !== null && (clearTimeout(u), u = null), (B === true || o.value === true) && (K(false), e.seamless !== true && (m(false), Bu(O), Mo(te))), B !== true && (c = null);
  }
  function K(B) {
    B === true ? s !== true && (Kr < 1 && document.body.classList.add("q-body--dialog"), Kr++, s = true) : s === true && (Kr < 2 && document.body.classList.remove("q-body--dialog"), Kr--, s = false);
  }
  function T(B) {
    v !== true && (N(B), n("click", B));
  }
  function Z(B) {
    e.persistent !== true && e.noBackdropDismiss !== true ? N(B) : e.noShake !== true && D();
  }
  function O(B) {
    e.allowFocusOutside !== true && A.value === true && pm(r.value, B.target) !== true && V('[tabindex]:not([tabindex="-1"])');
  }
  Object.assign(a.proxy, { focus: V, shake: D, __updateRefocusTarget(B) {
    c = B || null;
  } }), Ke(be);
  function oe() {
    return d("div", { role: "dialog", "aria-modal": q.value === true ? "true" : "false", ...l, class: k.value }, [d(Ft, { name: "q-transition--fade", appear: true }, () => q.value === true ? d("div", { class: "q-dialog__backdrop fixed-full", style: y.value, "aria-hidden": "true", tabindex: -1, onClick: Z }) : null), d(Ft, C.value, () => o.value === true ? d("div", { ref: r, class: H.value, style: p.value, tabindex: -1, ...E.value }, Pe(t.default)) : null)]);
  }
  return F;
} }), wd = 150, Sd = me({ name: "QDrawer", inheritAttrs: false, props: { ...$a, ...nt, side: { type: String, default: "left", validator: (e) => ["left", "right"].includes(e) }, width: { type: Number, default: 300 }, mini: Boolean, miniToOverlay: Boolean, miniWidth: { type: Number, default: 57 }, noMiniAnimation: Boolean, breakpoint: { type: Number, default: 1023 }, showIfAbove: Boolean, behavior: { type: String, validator: (e) => ["default", "desktop", "mobile"].includes(e), default: "default" }, bordered: Boolean, elevated: Boolean, overlay: Boolean, persistent: Boolean, noSwipeOpen: Boolean, noSwipeClose: Boolean, noSwipeBackdrop: Boolean }, emits: [...Aa, "onLayout", "miniState"], setup(e, { slots: t, emit: n, attrs: l }) {
  const a = Se(), { proxy: { $q: r } } = a, o = lt(e, r), { preventBodyScroll: i } = vh(), { registerTimeout: u, removeTimeout: c } = Xn(), s = Tt(Gl, ot);
  if (s === ot) return console.error("QDrawer needs to be child of QLayout"), ot;
  let v, h = null, m;
  const g = W(e.behavior === "mobile" || e.behavior !== "desktop" && s.totalWidth.value <= e.breakpoint), _ = f(() => e.mini === true && g.value !== true), w = f(() => _.value === true ? e.miniWidth : e.width), C = W(e.showIfAbove === true && g.value === false ? true : e.modelValue === true), p = f(() => e.persistent !== true && (g.value === true || be.value === true));
  function y(Q, ie) {
    if (F(), Q !== false && s.animate(), M(0), g.value === true) {
      const _e = s.instances[L.value];
      (_e == null ? void 0 : _e.belowBreakpoint) === true && _e.hide(false), j(1), s.isContainer.value !== true && i(true);
    } else j(0), Q !== false && J(false);
    u(() => {
      Q !== false && J(true), ie !== true && n("show", Q);
    }, wd);
  }
  function b(Q, ie) {
    N(), Q !== false && s.animate(), j(0), M(H.value * w.value), he(), ie !== true ? u(() => {
      n("hide", Q);
    }, wd) : c();
  }
  const { show: x, hide: A } = Ra({ showing: C, hideOnRouteChange: p, handleShow: y, handleHide: b }), { addToHistory: F, removeFromHistory: N } = fh(C, A, p), P = { belowBreakpoint: g, hide: A }, R = f(() => e.side === "right"), H = f(() => (r.lang.rtl === true ? -1 : 1) * (R.value === true ? 1 : -1)), q = W(0), E = W(false), k = W(false), U = W(w.value * H.value), L = f(() => R.value === true ? "left" : "right"), V = f(() => C.value === true && g.value === false && e.overlay === false ? e.miniToOverlay === true ? e.miniWidth : w.value : 0), D = f(() => e.overlay === true || e.miniToOverlay === true || s.view.value.indexOf(R.value ? "R" : "L") !== -1 || r.platform.is.ios === true && s.isContainer.value === true), te = f(() => e.overlay === false && C.value === true && g.value === false), be = f(() => e.overlay === true && C.value === true && g.value === false), K = f(() => "fullscreen q-drawer__backdrop" + (C.value === false && E.value === false ? " hidden" : "")), T = f(() => ({ backgroundColor: `rgba(0,0,0,${q.value * 0.4})` })), Z = f(() => R.value === true ? s.rows.value.top[2] === "r" : s.rows.value.top[0] === "l"), O = f(() => R.value === true ? s.rows.value.bottom[2] === "r" : s.rows.value.bottom[0] === "l"), oe = f(() => {
    const Q = {};
    return s.header.space === true && Z.value === false && (D.value === true ? Q.top = `${s.header.offset}px` : s.header.space === true && (Q.top = `${s.header.size}px`)), s.footer.space === true && O.value === false && (D.value === true ? Q.bottom = `${s.footer.offset}px` : s.footer.space === true && (Q.bottom = `${s.footer.size}px`)), Q;
  }), B = f(() => {
    const Q = { width: `${w.value}px`, transform: `translateX(${U.value}px)` };
    return g.value === true ? Q : Object.assign(Q, oe.value);
  }), $ = f(() => "q-drawer__content fit " + (s.isContainer.value !== true ? "scroll" : "overflow-auto")), ee = f(() => `q-drawer q-drawer--${e.side}` + (k.value === true ? " q-drawer--mini-animate" : "") + (e.bordered === true ? " q-drawer--bordered" : "") + (o.value === true ? " q-drawer--dark q-dark" : "") + (E.value === true ? " no-transition" : C.value === true ? "" : " q-layout--prevent-focus") + (g.value === true ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${_.value === true ? "mini" : "standard"}` + (D.value === true || te.value !== true ? " fixed" : "") + (e.overlay === true || e.miniToOverlay === true ? " q-drawer--on-top" : "") + (Z.value === true ? " q-drawer--top-padding" : ""))), I = f(() => {
    const Q = r.lang.rtl === true ? e.side : L.value;
    return [[gn, Y, void 0, { [Q]: true, mouse: true }]];
  }), ae = f(() => {
    const Q = r.lang.rtl === true ? L.value : e.side;
    return [[gn, fe, void 0, { [Q]: true, mouse: true }]];
  }), we = f(() => {
    const Q = r.lang.rtl === true ? L.value : e.side;
    return [[gn, fe, void 0, { [Q]: true, mouse: true, mouseAllDir: true }]];
  });
  function S() {
    de(g, e.behavior === "mobile" || e.behavior !== "desktop" && s.totalWidth.value <= e.breakpoint);
  }
  ge(g, (Q) => {
    Q === true ? (v = C.value, C.value === true && A(false)) : e.overlay === false && e.behavior !== "mobile" && v !== false && (C.value === true ? (M(0), j(0), he()) : x(false));
  }), ge(() => e.side, (Q, ie) => {
    s.instances[ie] === P && (s.instances[ie] = void 0, s[ie].space = false, s[ie].offset = 0), s.instances[Q] = P, s[Q].size = w.value, s[Q].space = te.value, s[Q].offset = V.value;
  }), ge(s.totalWidth, () => {
    (s.isContainer.value === true || document.qScrollPrevented !== true) && S();
  }), ge(() => e.behavior + e.breakpoint, S), ge(s.isContainer, (Q) => {
    C.value === true && i(Q !== true), Q === true && S();
  }), ge(s.scrollbarWidth, () => {
    M(C.value === true ? 0 : void 0);
  }), ge(V, (Q) => {
    ve("offset", Q);
  }), ge(te, (Q) => {
    n("onLayout", Q), ve("space", Q);
  }), ge(R, () => {
    M();
  }), ge(w, (Q) => {
    M(), le(e.miniToOverlay, Q);
  }), ge(() => e.miniToOverlay, (Q) => {
    le(Q, w.value);
  }), ge(() => r.lang.rtl, () => {
    M();
  }), ge(() => e.mini, () => {
    e.noMiniAnimation || e.modelValue === true && (ne(), s.animate());
  }), ge(_, (Q) => {
    n("miniState", Q);
  });
  function M(Q) {
    Q === void 0 ? We(() => {
      Q = C.value === true ? 0 : w.value, M(H.value * Q);
    }) : (s.isContainer.value === true && R.value === true && (g.value === true || Math.abs(Q) === w.value) && (Q += H.value * s.scrollbarWidth.value), U.value = Q);
  }
  function j(Q) {
    q.value = Q;
  }
  function J(Q) {
    const ie = Q === true ? "remove" : s.isContainer.value !== true ? "add" : "";
    ie !== "" && document.body.classList[ie]("q-body--drawer-toggle");
  }
  function ne() {
    h !== null && clearTimeout(h), a.proxy && a.proxy.$el && a.proxy.$el.classList.add("q-drawer--mini-animate"), k.value = true, h = setTimeout(() => {
      var _a2, _b2;
      h = null, k.value = false, (_b2 = (_a2 = a == null ? void 0 : a.proxy) == null ? void 0 : _a2.$el) == null ? void 0 : _b2.classList.remove("q-drawer--mini-animate");
    }, 150);
  }
  function Y(Q) {
    if (C.value !== false) return;
    const ie = w.value, _e = ct(Q.distance.x, 0, ie);
    if (Q.isFinal === true) {
      _e >= Math.min(75, ie) === true ? x() : (s.animate(), j(0), M(H.value * ie)), E.value = false;
      return;
    }
    M((r.lang.rtl === true ? R.value !== true : R.value) ? Math.max(ie - _e, 0) : Math.min(0, _e - ie)), j(ct(_e / ie, 0, 1)), Q.isFirst === true && (E.value = true);
  }
  function fe(Q) {
    if (C.value !== true) return;
    const ie = w.value, _e = Q.direction === e.side, ke = (r.lang.rtl === true ? _e !== true : _e) ? ct(Q.distance.x, 0, ie) : 0;
    if (Q.isFinal === true) {
      Math.abs(ke) < Math.min(75, ie) === true ? (s.animate(), j(1), M(0)) : A(), E.value = false;
      return;
    }
    M(H.value * ke), j(ct(1 - ke / ie, 0, 1)), Q.isFirst === true && (E.value = true);
  }
  function he() {
    i(false), J(true);
  }
  function ve(Q, ie) {
    s.update(e.side, Q, ie);
  }
  function de(Q, ie) {
    Q.value !== ie && (Q.value = ie);
  }
  function le(Q, ie) {
    ve("size", Q === true ? e.miniWidth : ie);
  }
  return s.instances[e.side] = P, le(e.miniToOverlay, w.value), ve("space", te.value), ve("offset", V.value), e.showIfAbove === true && e.modelValue !== true && C.value === true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", true), ft(() => {
    n("onLayout", te.value), n("miniState", _.value), v = e.showIfAbove === true;
    const Q = () => {
      (C.value === true ? y : b)(false, true);
    };
    if (s.totalWidth.value !== 0) {
      We(Q);
      return;
    }
    m = ge(s.totalWidth, () => {
      m(), m = void 0, C.value === false && e.showIfAbove === true && g.value === false ? x(false) : Q();
    });
  }), Ke(() => {
    m == null ? void 0 : m(), h !== null && (clearTimeout(h), h = null), C.value === true && he(), s.instances[e.side] === P && (s.instances[e.side] = void 0, ve("size", 0), ve("offset", 0), ve("space", false));
  }), () => {
    const Q = [];
    g.value === true && (e.noSwipeOpen === false && Q.push(sn(d("div", { key: "open", class: `q-drawer__opener fixed-${e.side}`, "aria-hidden": "true" }), I.value)), Q.push(pn("div", { ref: "backdrop", class: K.value, style: T.value, "aria-hidden": "true", onClick: A }, void 0, "backdrop", e.noSwipeBackdrop !== true && C.value === true, () => we.value)));
    const ie = _.value === true && t.mini !== void 0, _e = [d("div", { ...l, key: "" + ie, class: [$.value, l.class] }, ie === true ? t.mini() : Pe(t.default))];
    return e.elevated === true && C.value === true && _e.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), Q.push(pn("aside", { ref: "content", class: ee.value, style: B.value }, _e, "contentclose", e.noSwipeClose !== true && g.value === true, () => ae.value)), d("div", { class: "q-drawer-container" }, Q);
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
}, Yp = me({ name: "QTooltip", inheritAttrs: false, props: { ...Cm, ...$a, ...zl, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null }, transitionShow: { ...zl.transitionShow, default: "jump-down" }, transitionHide: { ...zl.transitionHide, default: "jump-up" }, anchor: { type: String, default: "bottom middle", validator: Ro }, self: { type: String, default: "top middle", validator: Ro }, offset: { type: Array, default: () => [14, 14], validator: Fm }, scrollTarget: Xl, delay: { type: Number, default: 0 }, hideDelay: { type: Number, default: 0 }, persistent: Boolean }, emits: [...Aa], setup(e, { slots: t, emit: n, attrs: l }) {
  let a, r;
  const o = Se(), { proxy: { $q: i } } = o, u = W(null), c = W(false), s = f(() => Po(e.anchor, i.lang.rtl)), v = f(() => Po(e.self, i.lang.rtl)), h = f(() => e.persistent !== true), { registerTick: m, removeTick: g } = ya(), { registerTimeout: _ } = Xn(), { transitionProps: w, transitionStyle: C } = oi(e), { localScrollTarget: p, changeScrollEvent: y, unconfigureScrollTarget: b } = qm(e, be), { anchorEl: x, canShow: A, anchorEvents: F } = xs({ showing: c, configureAnchorEl: te }), { show: N, hide: P } = Ra({ showing: c, canShow: A, handleShow: E, handleHide: k, hideOnRouteChange: h, processOnMount: true });
  Object.assign(F, { delayShow: V, delayHide: D });
  const { showPortal: R, hidePortal: H, renderPortal: q } = ks(o, u, T, "tooltip");
  if (i.platform.is.mobile === true) {
    const Z = { anchorEl: x, innerRef: u, onClickOutside(oe) {
      return P(oe), oe.target.classList.contains("q-dialog__backdrop") && je(oe), true;
    } }, O = f(() => e.modelValue === null && e.persistent !== true && c.value === true);
    ge(O, (oe) => {
      (oe === true ? Bm : Ao)(Z);
    }), Ke(() => {
      Ao(Z);
    });
  }
  function E(Z) {
    R(), m(() => {
      r = new MutationObserver(() => L()), r.observe(u.value, { attributes: false, childList: true, characterData: true, subtree: true }), L(), be();
    }), a === void 0 && (a = ge(() => i.screen.width + "|" + i.screen.height + "|" + e.self + "|" + e.anchor + "|" + i.lang.rtl, L)), _(() => {
      R(true), n("show", Z);
    }, e.transitionDuration);
  }
  function k(Z) {
    g(), H(), U(), _(() => {
      H(true), n("hide", Z);
    }, e.transitionDuration);
  }
  function U() {
    r !== void 0 && (r.disconnect(), r = void 0), a !== void 0 && (a(), a = void 0), b(), Wt(F, "tooltipTemp");
  }
  function L() {
    qs({ targetEl: u.value, offset: e.offset, anchorEl: x.value, anchorOrigin: s.value, selfOrigin: v.value, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function V(Z) {
    if (i.platform.is.mobile === true) {
      Mn(), document.body.classList.add("non-selectable");
      const O = x.value, oe = ["touchmove", "touchcancel", "touchend", "click"].map((B) => [O, B, "delayHide", "passiveCapture"]);
      kt(F, "tooltipTemp", oe);
    }
    _(() => {
      N(Z);
    }, e.delay);
  }
  function D(Z) {
    i.platform.is.mobile === true && (Wt(F, "tooltipTemp"), Mn(), setTimeout(() => {
      document.body.classList.remove("non-selectable");
    }, 10)), _(() => {
      P(Z);
    }, e.hideDelay);
  }
  function te() {
    if (e.noParentEvent === true || x.value === null) return;
    const Z = i.platform.is.mobile === true ? [[x.value, "touchstart", "delayShow", "passive"]] : [[x.value, "mouseenter", "delayShow", "passive"], [x.value, "mouseleave", "delayHide", "passive"]];
    kt(F, "anchor", Z);
  }
  function be() {
    if (x.value !== null || e.scrollTarget !== void 0) {
      p.value = Vn(x.value, e.scrollTarget);
      const Z = e.noParentEvent === true ? L : P;
      y(p.value, Z);
    }
  }
  function K() {
    return c.value === true ? d("div", { ...l, ref: u, class: ["q-tooltip q-tooltip--style q-position-engine no-pointer-events", l.class], style: [l.style, C.value], role: "tooltip" }, Pe(t.default)) : null;
  }
  function T() {
    return d(Ft, w.value, K);
  }
  return Ke(U), Object.assign(o.proxy, { updatePosition: L }), q;
} }), Ca = me({ name: "QItem", props: { ...nt, ...$r, tag: { type: String, default: "div" }, active: { type: Boolean, default: null }, clickable: Boolean, dense: Boolean, insetLevel: Number, tabindex: [String, Number], focused: Boolean, manualFocus: Boolean }, emits: ["click", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = lt(e, l), { hasLink: r, linkAttrs: o, linkClass: i, linkTag: u, navigateOnClick: c } = ai(), s = W(null), v = W(null), h = f(() => e.clickable === true || r.value === true || e.tag === "label"), m = f(() => e.disable !== true && h.value === true), g = f(() => "q-item q-item-type row no-wrap" + (e.dense === true ? " q-item--dense" : "") + (a.value === true ? " q-item--dark" : "") + (r.value === true && e.active === null ? i.value : e.active === true ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === true ? " disabled" : "") + (m.value === true ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === true ? " q-manual-focusable--focused" : "") : "")), _ = f(() => e.insetLevel === void 0 ? null : { ["padding" + (l.lang.rtl === true ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px" });
  function w(y) {
    m.value === true && (v.value !== null && y.qAvoidFocus !== true && (y.qKeyEvent !== true && document.activeElement === s.value ? v.value.focus() : document.activeElement === v.value && s.value.focus()), c(y));
  }
  function C(y) {
    if (m.value === true && yn(y, [13, 32]) === true) {
      je(y), y.qKeyEvent = true;
      const b = new MouseEvent("click", y);
      b.qKeyEvent = true, s.value.dispatchEvent(b);
    }
    n("keyup", y);
  }
  function p() {
    const y = Er(t.default, []);
    return m.value === true && y.unshift(d("div", { class: "q-focus-helper", tabindex: -1, ref: v })), y;
  }
  return () => {
    const y = { ref: s, class: g.value, style: _.value, role: "listitem", onClick: w, onKeyup: C };
    return m.value === true ? (y.tabindex = e.tabindex || "0", Object.assign(y, o.value)) : h.value === true && (y["aria-disabled"] = "true"), d(u.value, y, p());
  };
} }), mn = me({ name: "QItemSection", props: { avatar: Boolean, thumbnail: Boolean, side: Boolean, top: Boolean, noWrap: Boolean }, setup(e, { slots: t }) {
  const n = f(() => `q-item__section column q-item__section--${e.avatar === true || e.side === true || e.thumbnail === true ? "side" : "main"}` + (e.top === true ? " q-item__section--top justify-start" : " justify-center") + (e.avatar === true ? " q-item__section--avatar" : "") + (e.thumbnail === true ? " q-item__section--thumbnail" : "") + (e.noWrap === true ? " q-item__section--nowrap" : ""));
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
    const v = s.type === void 0 ? e.caret.is(s.cmd, s.param) : false;
    return v && (l = s.tip, a = s.icon !== null ? s.icon : void 0), bh(e, s, i, v);
  }), r = e.toolbarBackgroundClass.value, o = [Is(o)];
  else {
    const s = e.props.toolbarToggleColor !== void 0 ? `text-${e.props.toolbarToggleColor}` : null, v = e.props.toolbarTextColor !== void 0 ? `text-${e.props.toolbarTextColor}` : null, h = t.list === "no-icons";
    o = t.options.map((m) => {
      const g = m.disable ? m.disable(e) : false, _ = m.type === void 0 ? e.caret.is(m.cmd, m.param) : false;
      _ && (l = m.tip, a = m.icon !== null ? m.icon : void 0);
      const w = m.htmlTip;
      return d(Ca, { active: _, activeClass: s, clickable: true, disable: g, dense: true, onClick(C) {
        var _a2;
        i(), (C == null ? void 0 : C.qAvoidFocus) !== true && ((_a2 = e.contentRef.value) == null ? void 0 : _a2.focus()), e.caret.restore(), gh(C, m, e);
      } }, () => [h === true ? null : d(mn, { class: _ ? s : v, side: true }, () => d(et, { name: m.icon !== null ? m.icon : void 0 })), d(mn, w ? () => d("div", { class: "text-no-wrap", innerHTML: m.htmlTip }) : m.tip ? () => d("div", { class: "text-no-wrap" }, m.tip) : void 0)]);
    }), r = [e.toolbarBackgroundClass.value, v];
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
var xd = /^on[A-Z]/;
function yh() {
  const { attrs: e, vnode: t } = Se(), n = { listeners: W({}), attributes: W({}) };
  function l() {
    const a = {}, r = {};
    for (const o in e) o !== "class" && o !== "style" && xd.test(o) === false && (a[o] = e[o]);
    for (const o in t.props) xd.test(o) === true && (r[o] = t.props[o]);
    n.attributes.value = a, n.listeners.value = r;
  }
  return Ma(l), l(), n;
}
var e1 = Object.prototype.toString, Yi = Object.prototype.hasOwnProperty, t1 = new Set(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp"].map((e) => "[object " + e + "]"));
function Cd(e) {
  if (e !== Object(e) || t1.has(e1.call(e)) === true || e.constructor && Yi.call(e, "constructor") === false && Yi.call(e.constructor.prototype, "isPrototypeOf") === false) return false;
  let t;
  for (t in e) ;
  return t === void 0 || Yi.call(e, t);
}
function ph() {
  let e, t, n, l, a, r, o = arguments[0] || {}, i = 1, u = false;
  const c = arguments.length;
  for (typeof o == "boolean" && (u = o, o = arguments[1] || {}, i = 2), Object(o) !== o && typeof o != "function" && (o = {}), c === i && (o = this, i--); i < c; i++) if ((e = arguments[i]) !== null) for (t in e) n = o[t], l = e[t], o !== l && (u === true && l && ((a = Array.isArray(l)) || Cd(l) === true) ? (a === true ? r = Array.isArray(n) === true ? n : [] : r = Cd(n) === true ? n : {}, o[t] = ph(u, r, l)) : l !== void 0 && (o[t] = l));
  return o;
}
me({ name: "QEditor", props: { ...nt, ...Ps, modelValue: { type: String, required: true }, readonly: Boolean, disable: Boolean, minHeight: { type: String, default: "10rem" }, maxHeight: String, height: String, definitions: Object, fonts: Object, placeholder: String, toolbar: { type: Array, validator: (e) => e.length === 0 || e.every((t) => t.length), default: () => [["left", "center", "right", "justify"], ["bold", "italic", "underline", "strike"], ["undo", "redo"]] }, toolbarColor: String, toolbarBg: String, toolbarTextColor: String, toolbarToggleColor: { type: String, default: "primary" }, toolbarOutline: Boolean, toolbarPush: Boolean, toolbarRounded: Boolean, paragraphTag: { type: String, validator: (e) => ["div", "p"].includes(e), default: "div" }, contentStyle: Object, contentClass: [Object, Array, String], square: Boolean, flat: Boolean, dense: Boolean }, emits: [...Ls, "update:modelValue", "keydown", "click", "focus", "blur", "dropdownShow", "dropdownHide", "dropdownBeforeShow", "dropdownBeforeHide", "linkShow", "linkHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = lt(e, a), { inFullscreen: o, toggleFullscreen: i } = Bs(), u = yh(), c = W(null), s = W(null), v = W(null), h = W(false), m = f(() => !e.readonly && !e.disable);
  let g, _, w = e.modelValue;
  document.execCommand("defaultParagraphSeparator", false, e.paragraphTag), g = window.getComputedStyle(document.body).fontFamily;
  const C = f(() => e.toolbarBg ? ` bg-${e.toolbarBg}` : ""), p = f(() => ({ type: "a", flat: e.toolbarOutline !== true && e.toolbarPush !== true, noWrap: true, outline: e.toolbarOutline, push: e.toolbarPush, rounded: e.toolbarRounded, dense: true, color: e.toolbarColor, disable: !m.value, size: "sm" })), y = f(() => {
    const B = a.lang.editor, $ = a.iconSet.editor;
    return { bold: { cmd: "bold", icon: $.bold, tip: B.bold, key: 66 }, italic: { cmd: "italic", icon: $.italic, tip: B.italic, key: 73 }, strike: { cmd: "strikeThrough", icon: $.strikethrough, tip: B.strikethrough, key: 83 }, underline: { cmd: "underline", icon: $.underline, tip: B.underline, key: 85 }, unordered: { cmd: "insertUnorderedList", icon: $.unorderedList, tip: B.unorderedList }, ordered: { cmd: "insertOrderedList", icon: $.orderedList, tip: B.orderedList }, subscript: { cmd: "subscript", icon: $.subscript, tip: B.subscript, htmlTip: "x<subscript>2</subscript>" }, superscript: { cmd: "superscript", icon: $.superscript, tip: B.superscript, htmlTip: "x<superscript>2</superscript>" }, link: { cmd: "link", disable: (ee) => ee.caret && !ee.caret.can("link"), icon: $.hyperlink, tip: B.hyperlink, key: 76 }, fullscreen: { cmd: "fullscreen", icon: $.toggleFullscreen, tip: B.toggleFullscreen, key: 70 }, viewsource: { cmd: "viewsource", icon: $.viewSource, tip: B.viewSource }, quote: { cmd: "formatBlock", param: "BLOCKQUOTE", icon: $.quote, tip: B.quote, key: 81 }, left: { cmd: "justifyLeft", icon: $.left, tip: B.left }, center: { cmd: "justifyCenter", icon: $.center, tip: B.center }, right: { cmd: "justifyRight", icon: $.right, tip: B.right }, justify: { cmd: "justifyFull", icon: $.justify, tip: B.justify }, print: { type: "no-state", cmd: "print", icon: $.print, tip: B.print, key: 80 }, outdent: { type: "no-state", disable: (ee) => ee.caret && !ee.caret.can("outdent"), cmd: "outdent", icon: $.outdent, tip: B.outdent }, indent: { type: "no-state", disable: (ee) => ee.caret && !ee.caret.can("indent"), cmd: "indent", icon: $.indent, tip: B.indent }, removeFormat: { type: "no-state", cmd: "removeFormat", icon: $.removeFormat, tip: B.removeFormat }, hr: { type: "no-state", cmd: "insertHorizontalRule", icon: $.hr, tip: B.hr }, undo: { type: "no-state", cmd: "undo", icon: $.undo, tip: B.undo, key: 90 }, redo: { type: "no-state", cmd: "redo", icon: $.redo, tip: B.redo, key: 89 }, h1: { cmd: "formatBlock", param: "H1", icon: $.heading1 || $.heading, tip: B.heading1, htmlTip: `<h1 class="q-ma-none">${B.heading1}</h1>` }, h2: { cmd: "formatBlock", param: "H2", icon: $.heading2 || $.heading, tip: B.heading2, htmlTip: `<h2 class="q-ma-none">${B.heading2}</h2>` }, h3: { cmd: "formatBlock", param: "H3", icon: $.heading3 || $.heading, tip: B.heading3, htmlTip: `<h3 class="q-ma-none">${B.heading3}</h3>` }, h4: { cmd: "formatBlock", param: "H4", icon: $.heading4 || $.heading, tip: B.heading4, htmlTip: `<h4 class="q-ma-none">${B.heading4}</h4>` }, h5: { cmd: "formatBlock", param: "H5", icon: $.heading5 || $.heading, tip: B.heading5, htmlTip: `<h5 class="q-ma-none">${B.heading5}</h5>` }, h6: { cmd: "formatBlock", param: "H6", icon: $.heading6 || $.heading, tip: B.heading6, htmlTip: `<h6 class="q-ma-none">${B.heading6}</h6>` }, p: { cmd: "formatBlock", param: e.paragraphTag, icon: $.heading, tip: B.paragraph }, code: { cmd: "formatBlock", param: "PRE", icon: $.code, htmlTip: `<code>${B.code}</code>` }, "size-1": { cmd: "fontSize", param: "1", icon: $.size1 || $.size, tip: B.size1, htmlTip: `<font size="1">${B.size1}</font>` }, "size-2": { cmd: "fontSize", param: "2", icon: $.size2 || $.size, tip: B.size2, htmlTip: `<font size="2">${B.size2}</font>` }, "size-3": { cmd: "fontSize", param: "3", icon: $.size3 || $.size, tip: B.size3, htmlTip: `<font size="3">${B.size3}</font>` }, "size-4": { cmd: "fontSize", param: "4", icon: $.size4 || $.size, tip: B.size4, htmlTip: `<font size="4">${B.size4}</font>` }, "size-5": { cmd: "fontSize", param: "5", icon: $.size5 || $.size, tip: B.size5, htmlTip: `<font size="5">${B.size5}</font>` }, "size-6": { cmd: "fontSize", param: "6", icon: $.size6 || $.size, tip: B.size6, htmlTip: `<font size="6">${B.size6}</font>` }, "size-7": { cmd: "fontSize", param: "7", icon: $.size7 || $.size, tip: B.size7, htmlTip: `<font size="7">${B.size7}</font>` } };
  }), b = f(() => {
    const B = e.definitions || {}, $ = e.definitions || e.fonts ? ph(true, {}, y.value, B, Zp(g, a.lang.editor.defaultFont, a.iconSet.editor.font, e.fonts)) : y.value;
    return e.toolbar.map((ee) => ee.map((I) => {
      if (I.options) return { type: "dropdown", icon: I.icon, label: I.label, size: "sm", dense: true, fixedLabel: I.fixedLabel, fixedIcon: I.fixedIcon, highlight: I.highlight, list: I.list, options: I.options.map((we) => $[we]) };
      const ae = $[I];
      return ae ? ae.type === "no-state" || B[I] && (ae.cmd === void 0 || y.value[ae.cmd] && y.value[ae.cmd].type === "no-state") ? ae : Object.assign({ type: "toggle" }, ae) : { type: "slot", slot: I };
    }));
  }), x = { $q: a, props: e, slots: t, emit: n, inFullscreen: o, toggleFullscreen: i, runCmd: T, isViewingSource: h, editLinkUrl: v, toolbarBackgroundClass: C, buttonProps: p, contentRef: s, buttons: b, setContent: K };
  ge(() => e.modelValue, (B) => {
    w !== B && (w = B, K(B, true));
  }), ge(v, (B) => {
    n(`link${B ? "Show" : "Hide"}`);
  });
  const A = f(() => e.toolbar && e.toolbar.length !== 0), F = f(() => {
    const B = {}, $ = (ee) => {
      ee.key && (B[ee.key] = { cmd: ee.cmd, param: ee.param });
    };
    return b.value.forEach((ee) => {
      ee.forEach((I) => {
        I.options ? I.options.forEach($) : $(I);
      });
    }), B;
  }), N = f(() => o.value ? e.contentStyle : [{ minHeight: e.minHeight, height: e.height, maxHeight: e.maxHeight }, e.contentStyle]), P = f(() => `q-editor q-editor--${h.value === true ? "source" : "default"}` + (e.disable === true ? " disabled" : "") + (o.value === true ? " fullscreen column" : "") + (e.square === true ? " q-editor--square no-border-radius" : "") + (e.flat === true ? " q-editor--flat" : "") + (e.dense === true ? " q-editor--dense" : "") + (r.value === true ? " q-editor--dark q-dark" : "")), R = f(() => [e.contentClass, "q-editor__content", { col: o.value, "overflow-auto": o.value || e.maxHeight }]), H = f(() => e.disable === true ? { "aria-disabled": "true" } : {});
  function q() {
    if (s.value !== null) {
      const B = `inner${h.value === true ? "Text" : "HTML"}`, $ = s.value[B];
      $ !== e.modelValue && (w = $, n("update:modelValue", $));
    }
  }
  function E(B) {
    if (n("keydown", B), B.ctrlKey !== true || Yl(B) === true) {
      Z();
      return;
    }
    const $ = B.keyCode, ee = F.value[$];
    if (ee !== void 0) {
      const { cmd: I, param: ae } = ee;
      je(B), T(I, ae, false);
    }
  }
  function k(B) {
    Z(), n("click", B);
  }
  function U(B) {
    if (s.value !== null) {
      const { scrollTop: $, scrollHeight: ee } = s.value;
      _ = ee - $;
    }
    x.caret.save(), n("blur", B);
  }
  function L(B) {
    We(() => {
      s.value !== null && _ !== void 0 && (s.value.scrollTop = s.value.scrollHeight - _);
    }), n("focus", B);
  }
  function V(B) {
    const $ = c.value;
    if ($ !== null && $.contains(B.target) === true && (B.relatedTarget === null || $.contains(B.relatedTarget) !== true)) {
      const ee = `inner${h.value === true ? "Text" : "HTML"}`;
      x.caret.restorePosition(s.value[ee].length), Z();
    }
  }
  function D(B) {
    const $ = c.value;
    $ !== null && $.contains(B.target) === true && (B.relatedTarget === null || $.contains(B.relatedTarget) !== true) && (x.caret.savePosition(), Z());
  }
  function te() {
    _ = void 0;
  }
  function be(B) {
    x.caret.save();
  }
  function K(B, $) {
    if (s.value !== null) {
      $ === true && x.caret.savePosition();
      const ee = `inner${h.value === true ? "Text" : "HTML"}`;
      s.value[ee] = B, $ === true && (x.caret.restorePosition(s.value[ee].length), Z());
    }
  }
  function T(B, $, ee = true) {
    O(), x.caret.restore(), x.caret.apply(B, $, () => {
      O(), x.caret.save(), ee && Z();
    });
  }
  function Z() {
    setTimeout(() => {
      v.value = null, l.$forceUpdate();
    }, 1);
  }
  function O() {
    Pa(() => {
      var _a2;
      (_a2 = s.value) == null ? void 0 : _a2.focus({ preventScroll: true });
    });
  }
  function oe() {
    return s.value;
  }
  return ft(() => {
    x.caret = l.caret = new Wp(s.value, x), K(e.modelValue), Z(), document.addEventListener("selectionchange", be);
  }), Ke(() => {
    document.removeEventListener("selectionchange", be);
  }), Object.assign(l, { runCmd: T, refreshToolbar: Z, focus: O, getContentEl: oe }), () => {
    let B;
    if (A.value) {
      const $ = [d("div", { key: "qedt_top", class: "q-editor__toolbar row no-wrap scroll-x" + C.value }, Xp(x))];
      v.value !== null && $.push(d("div", { key: "qedt_btm", class: "q-editor__toolbar row no-wrap items-center scroll-x" + C.value }, Jp(x))), B = d("div", { key: "toolbar_ctainer", class: "q-editor__toolbars-container" }, $);
    }
    return d("div", { ref: c, class: P.value, style: { height: o.value === true ? "100%" : null }, ...H.value, onFocusin: V, onFocusout: D }, [B, d("div", { ref: s, style: N.value, class: R.value, contenteditable: m.value, placeholder: e.placeholder, ...u.listeners.value, onInput: q, onKeydown: E, onClick: k, onBlur: U, onFocus: L, onMousedown: te, onTouchstartPassive: te })]);
  };
} });
var zu = me({ name: "QItemLabel", props: { overline: Boolean, caption: Boolean, header: Boolean, lines: [Number, String] }, setup(e, { slots: t }) {
  const n = f(() => parseInt(e.lines, 10)), l = f(() => "q-item__label" + (e.overline === true ? " q-item__label--overline text-overline" : "") + (e.caption === true ? " q-item__label--caption text-caption" : "") + (e.header === true ? " q-item__label--header" : "") + (n.value === 1 ? " ellipsis" : "")), a = f(() => e.lines !== void 0 && n.value > 1 ? { overflow: "hidden", display: "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": n.value } : null);
  return () => d("div", { style: a.value, class: l.value }, Pe(t.default));
} }), zs = me({ name: "QSlideTransition", props: { appear: Boolean, duration: { type: Number, default: 300 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: n }) {
  let l = false, a, r, o = null, i = null, u, c;
  function s() {
    a == null ? void 0 : a(), a = null, l = false, o !== null && (clearTimeout(o), o = null), i !== null && (clearTimeout(i), i = null), r == null ? void 0 : r.removeEventListener("transitionend", u), u = null;
  }
  function v(_, w, C) {
    w !== void 0 && (_.style.height = `${w}px`), _.style.transition = `height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`, l = true, a = C;
  }
  function h(_, w) {
    _.style.overflowY = null, _.style.height = null, _.style.transition = null, s(), w !== c && n(w);
  }
  function m(_, w) {
    let C = 0;
    r = _, l === true ? (s(), C = _.offsetHeight === _.scrollHeight ? 0 : void 0) : (c = "hide", _.style.overflowY = "hidden"), v(_, C, w), o = setTimeout(() => {
      o = null, _.style.height = `${_.scrollHeight}px`, u = (p) => {
        i = null, (Object(p) !== p || p.target === _) && h(_, "show");
      }, _.addEventListener("transitionend", u), i = setTimeout(u, e.duration * 1.1);
    }, 100);
  }
  function g(_, w) {
    let C;
    r = _, l === true ? s() : (c = "show", _.style.overflowY = "hidden", C = _.scrollHeight), v(_, C, w), o = setTimeout(() => {
      o = null, _.style.height = 0, u = (p) => {
        i = null, (Object(p) !== p || p.target === _) && h(_, "hide");
      }, _.addEventListener("transitionend", u), i = setTimeout(u, e.duration * 1.1);
    }, 100);
  }
  return Ke(() => {
    l === true && s();
  }), () => d(Ft, { css: false, appear: e.appear, onEnter: m, onLeave: g }, t.default);
} }), n1 = { true: "inset", item: "item-inset", "item-thumbnail": "item-thumbnail-inset" }, Gi = { xs: 2, sm: 4, md: 8, lg: 16, xl: 24 }, Ql = me({ name: "QSeparator", props: { ...nt, spaced: [Boolean, String], inset: [Boolean, String], vertical: Boolean, color: String, size: String }, setup(e) {
  const t = Se(), n = lt(e, t.proxy.$q), l = f(() => e.vertical === true ? "vertical" : "horizontal"), a = f(() => ` q-separator--${l.value}`), r = f(() => e.inset !== false ? `${a.value}-${n1[e.inset]}` : ""), o = f(() => `q-separator${a.value}${r.value}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (n.value === true ? " q-separator--dark" : "")), i = f(() => {
    const u = {};
    if (e.size !== void 0 && (u[e.vertical === true ? "width" : "height"] = e.size), e.spaced !== false) {
      const c = e.spaced === true ? `${Gi.md}px` : e.spaced in Gi ? `${Gi[e.spaced]}px` : e.spaced, s = e.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
      u[`margin${s[0]}`] = u[`margin${s[1]}`] = c;
    }
    return u;
  });
  return () => d("hr", { class: o.value, style: i.value, "aria-orientation": l.value });
} }), Ml = rs({}), l1 = Object.keys($r);
me({ name: "QExpansionItem", props: { ...$r, ...$a, ...nt, icon: String, label: String, labelLines: [Number, String], caption: String, captionLines: [Number, String], dense: Boolean, toggleAriaLabel: String, expandIcon: String, expandedIcon: String, expandIconClass: [Array, String, Object], duration: {}, headerInsetLevel: Number, contentInsetLevel: Number, expandSeparator: Boolean, defaultOpened: Boolean, hideExpandIcon: Boolean, expandIconToggle: Boolean, switchToggleSide: Boolean, denseToggle: Boolean, group: String, popup: Boolean, headerStyle: [Array, String, Object], headerClass: [Array, String, Object] }, emits: [...Aa, "click", "afterShow", "afterHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = lt(e, l), r = W(e.modelValue !== null ? e.modelValue : e.defaultOpened), o = W(null), i = si(), { show: u, hide: c, toggle: s } = Ra({ showing: r });
  let v, h;
  const m = f(() => `q-expansion-item q-item-type q-expansion-item--${r.value === true ? "expanded" : "collapsed"} q-expansion-item--${e.popup === true ? "popup" : "standard"}`), g = f(() => e.contentInsetLevel === void 0 ? null : { ["padding" + (l.lang.rtl === true ? "Right" : "Left")]: e.contentInsetLevel * 56 + "px" }), _ = f(() => e.disable !== true && (e.href !== void 0 || e.to !== void 0 && e.to !== null && e.to !== "")), w = f(() => {
    const V = {};
    return l1.forEach((D) => {
      V[D] = e[D];
    }), V;
  }), C = f(() => _.value === true || e.expandIconToggle !== true), p = f(() => e.expandedIcon !== void 0 && r.value === true ? e.expandedIcon : e.expandIcon || l.iconSet.expansionItem[e.denseToggle === true ? "denseIcon" : "icon"]), y = f(() => e.disable !== true && (_.value === true || e.expandIconToggle === true)), b = f(() => ({ expanded: r.value === true, detailsId: i.value, toggle: s, show: u, hide: c })), x = f(() => {
    const V = e.toggleAriaLabel !== void 0 ? e.toggleAriaLabel : l.lang.label[r.value === true ? "collapse" : "expand"](e.label);
    return { role: "button", "aria-expanded": r.value === true ? "true" : "false", "aria-controls": i.value, "aria-label": V };
  });
  ge(() => e.group, (V) => {
    h == null ? void 0 : h(), V !== void 0 && H();
  });
  function A(V) {
    _.value !== true && s(V), n("click", V);
  }
  function F(V) {
    V.keyCode === 13 && N(V, true);
  }
  function N(V, D) {
    var _a2;
    D !== true && V.qAvoidFocus !== true && ((_a2 = o.value) == null ? void 0 : _a2.focus()), s(V), je(V);
  }
  function P() {
    n("afterShow");
  }
  function R() {
    n("afterHide");
  }
  function H() {
    v === void 0 && (v = wr()), r.value === true && (Ml[e.group] = v);
    const V = ge(r, (te) => {
      te === true ? Ml[e.group] = v : Ml[e.group] === v && delete Ml[e.group];
    }), D = ge(() => Ml[e.group], (te, be) => {
      be === v && te !== void 0 && te !== v && c();
    });
    h = () => {
      V(), D(), Ml[e.group] === v && delete Ml[e.group], h = void 0;
    };
  }
  function q() {
    const V = { class: [`q-focusable relative-position cursor-pointer${e.denseToggle === true && e.switchToggleSide === true ? " items-end" : ""}`, e.expandIconClass], side: e.switchToggleSide !== true, avatar: e.switchToggleSide }, D = [d(et, { class: "q-expansion-item__toggle-icon" + (e.expandedIcon === void 0 && r.value === true ? " q-expansion-item__toggle-icon--rotated" : ""), name: p.value })];
    return y.value === true && (Object.assign(V, { tabindex: 0, ...x.value, onClick: N, onKeyup: F }), D.unshift(d("div", { ref: o, class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded", tabindex: -1 }))), d(mn, V, () => D);
  }
  function E() {
    let V;
    return t.header !== void 0 ? V = [].concat(t.header(b.value)) : (V = [d(mn, () => [d(zu, { lines: e.labelLines }, () => e.label || ""), e.caption ? d(zu, { lines: e.captionLines, caption: true }, () => e.caption) : null])], e.icon && V[e.switchToggleSide === true ? "push" : "unshift"](d(mn, { side: e.switchToggleSide === true, avatar: e.switchToggleSide !== true }, () => d(et, { name: e.icon })))), e.disable !== true && e.hideExpandIcon !== true && V[e.switchToggleSide === true ? "unshift" : "push"](q()), V;
  }
  function k() {
    const V = { ref: "item", style: e.headerStyle, class: e.headerClass, dark: a.value, disable: e.disable, dense: e.dense, insetLevel: e.headerInsetLevel };
    return C.value === true && (V.clickable = true, V.onClick = A, Object.assign(V, _.value === true ? w.value : x.value)), d(Ca, V, E);
  }
  function U() {
    return sn(d("div", { key: "e-content", class: "q-expansion-item__content relative-position", style: g.value, id: i.value }, Pe(t.default)), [[Uv, r.value]]);
  }
  function L() {
    const V = [k(), d(zs, { duration: e.duration, onShow: P, onHide: R }, U)];
    return e.expandSeparator === true && V.push(d(Ql, { class: "q-expansion-item__border q-expansion-item__border--top absolute-top", dark: a.value }), d(Ql, { class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom", dark: a.value })), V;
  }
  return e.group !== void 0 && H(), Ke(() => {
    h == null ? void 0 : h();
  }), () => d("div", { class: m.value }, [d("div", { class: "q-expansion-item__container relative-position" }, L())]);
} });
var a1 = ["top", "right", "bottom", "left"], Du = { type: { type: String, default: "a" }, outline: Boolean, push: Boolean, flat: Boolean, unelevated: Boolean, color: String, textColor: String, glossy: Boolean, square: Boolean, padding: String, label: { type: [String, Number], default: "" }, labelPosition: { type: String, default: "right", validator: (e) => a1.includes(e) }, externalLabel: Boolean, hideLabel: { type: Boolean }, labelClass: [Array, String, Object], labelStyle: [Array, String, Object], disable: Boolean, tabindex: [Number, String] };
function _h(e, t) {
  return { formClass: f(() => `q-fab--form-${e.square === true ? "square" : "rounded"}`), stacked: f(() => e.externalLabel === false && ["top", "bottom"].includes(e.labelPosition)), labelProps: f(() => {
    if (e.externalLabel === true) {
      const n = e.hideLabel === null ? t.value === false : e.hideLabel;
      return { action: "push", data: { class: [e.labelClass, `q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}` + (n === true ? " q-fab__label--external-hidden" : "")], style: e.labelStyle } };
    }
    return { action: ["left", "top"].includes(e.labelPosition) ? "unshift" : "push", data: { class: [e.labelClass, `q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}` + (e.hideLabel === true ? " q-fab__label--internal-hidden" : "")], style: e.labelStyle } };
  }) };
}
var r1 = ["up", "right", "down", "left"], o1 = ["left", "center", "right"];
me({ name: "QFab", props: { ...Du, ...$a, icon: String, activeIcon: String, hideIcon: Boolean, hideLabel: { ...Du.hideLabel, default: null }, direction: { type: String, default: "right", validator: (e) => r1.includes(e) }, persistent: Boolean, verticalActionsAlign: { type: String, default: "center", validator: (e) => o1.includes(e) } }, emits: Aa, setup(e, { slots: t }) {
  const n = W(null), l = W(e.modelValue === true), a = si(), { proxy: { $q: r } } = Se(), { formClass: o, labelProps: i } = _h(e, l), u = f(() => e.persistent !== true), { hide: c, toggle: s } = Ra({ showing: l, hideOnRouteChange: u }), v = f(() => ({ opened: l.value })), h = f(() => `q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${o.value}` + (l.value === true ? " q-fab--opened" : " q-fab--closed")), m = f(() => `q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${l.value === true ? "opened" : "closed"}`), g = f(() => {
    const p = { id: a.value, role: "menu" };
    return l.value !== true && (p["aria-hidden"] = "true"), p;
  }), _ = f(() => `q-fab__icon-holder  q-fab__icon-holder--${l.value === true ? "opened" : "closed"}`);
  function w(p, y) {
    const b = t[p], x = `q-fab__${p} absolute-full`;
    return b === void 0 ? d(et, { class: x, name: e[y] || r.iconSet.fab[y] }) : d("div", { class: x }, b(v.value));
  }
  function C() {
    const p = [];
    return e.hideIcon !== true && p.push(d("div", { class: _.value }, [w("icon", "icon"), w("active-icon", "activeIcon")])), (e.label !== "" || t.label !== void 0) && p[i.value.action](d("div", i.value.data, t.label !== void 0 ? t.label(v.value) : [e.label])), qt(t.tooltip, p);
  }
  return hn(im, { showing: l, onChildClick(p) {
    var _a2;
    c(p), (p == null ? void 0 : p.qAvoidFocus) !== true && ((_a2 = n.value) == null ? void 0 : _a2.$el.focus());
  } }), () => d("div", { class: h.value }, [d(Ze, { ref: n, class: o.value, ...e, noWrap: true, stack: e.stacked, align: void 0, icon: void 0, label: void 0, noCaps: true, fab: true, "aria-expanded": l.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": a.value, onClick: s }, C), d("div", { class: m.value, ...g.value }, Pe(t.default))]);
} });
var wh = { start: "self-end", center: "self-center", end: "self-start" }, i1 = Object.keys(wh);
me({ name: "QFabAction", props: { ...Du, icon: { type: String, default: "" }, anchor: { type: String, validator: (e) => i1.includes(e) }, to: [String, Object], replace: Boolean }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const l = Tt(im, () => ({ showing: { value: true }, onChildClick: St })), { formClass: a, labelProps: r } = _h(e, l.showing), o = f(() => {
    const v = wh[e.anchor];
    return a.value + (v !== void 0 ? ` ${v}` : "");
  }), i = f(() => e.disable === true || l.showing.value !== true);
  function u(v) {
    l.onChildClick(v), n("click", v);
  }
  function c() {
    const v = [];
    return t.icon !== void 0 ? v.push(t.icon()) : e.icon !== "" && v.push(d(et, { name: e.icon })), (e.label !== "" || t.label !== void 0) && v[r.value.action](d("div", r.value.data, t.label !== void 0 ? t.label() : [e.label])), qt(t.default, v);
  }
  const s = Se();
  return Object.assign(s.proxy, { click: u }), () => d(Ze, { class: o.value, ...e, noWrap: true, stack: e.stacked, icon: void 0, label: void 0, noCaps: true, fabMini: true, disable: i.value, onClick: u }, c);
} });
function u1({ validate: e, resetValidation: t, requiresQForm: n }) {
  const l = Tt(um, false);
  if (l !== false) {
    const { props: a, proxy: r } = Se();
    Object.assign(r, { validate: e, resetValidation: t }), ge(() => a.disable, (o) => {
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
  const { props: n, proxy: l } = Se(), a = W(false), r = W(null), o = W(false);
  u1({ validate: _, resetValidation: g });
  let i = 0, u;
  const c = f(() => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0), s = f(() => n.disable !== true && c.value === true && t.value === false), v = f(() => n.error === true || a.value === true), h = f(() => typeof n.errorMessage == "string" && n.errorMessage.length !== 0 ? n.errorMessage : r.value);
  ge(() => n.modelValue, () => {
    o.value = true, s.value === true && n.lazyRules === false && w();
  });
  function m() {
    n.lazyRules !== "ondemand" && s.value === true && o.value === true && w();
  }
  ge(() => n.reactiveRules, (C) => {
    C === true ? u === void 0 && (u = ge(() => n.rules, m, { immediate: true, deep: true })) : u !== void 0 && (u(), u = void 0);
  }, { immediate: true }), ge(() => n.lazyRules, m), ge(e, (C) => {
    C === true ? o.value = true : s.value === true && n.lazyRules !== "ondemand" && w();
  });
  function g() {
    i++, t.value = false, o.value = false, a.value = false, r.value = null, w.cancel();
  }
  function _(C = n.modelValue) {
    if (n.disable === true || c.value === false) return true;
    const p = ++i, y = t.value !== true ? () => {
      o.value = true;
    } : () => {
    }, b = (A, F) => {
      A === true && y(), a.value = A, r.value = F || null, t.value = false;
    }, x = [];
    for (let A = 0; A < n.rules.length; A++) {
      const F = n.rules[A];
      let N;
      if (typeof F == "function" ? N = F(C, oo) : typeof F == "string" && oo[F] !== void 0 && (N = oo[F](C)), N === false || typeof N == "string") return b(true, N), false;
      N !== true && N !== void 0 && x.push(N);
    }
    return x.length === 0 ? (b(false), true) : (t.value = true, Promise.all(x).then((A) => {
      if (A === void 0 || Array.isArray(A) === false || A.length === 0) return p === i && b(false), true;
      const F = A.find((N) => N === false || typeof N == "string");
      return p === i && b(F !== void 0, F), F === void 0;
    }, (A) => (p === i && (console.error(A), b(true)), false)));
  }
  const w = Ea(_, 0);
  return Ke(() => {
    u == null ? void 0 : u(), w.cancel();
  }), Object.assign(l, { resetValidation: g, validate: _ }), Ot(l, "hasError", () => v.value), { isDirtyModel: o, hasRules: c, hasError: v, errorMessage: h, validate: _, resetValidation: g };
}
function Kl(e) {
  return e != null && ("" + e).length !== 0;
}
var Sh = { ...nt, ...c1, label: String, stackLabel: Boolean, hint: String, hideHint: Boolean, prefix: String, suffix: String, labelColor: String, color: String, bgColor: String, filled: Boolean, outlined: Boolean, borderless: Boolean, standout: [Boolean, String], square: Boolean, loading: Boolean, labelSlot: Boolean, bottomSlots: Boolean, hideBottomSpace: Boolean, rounded: Boolean, dense: Boolean, itemAligned: Boolean, counter: Boolean, clearable: Boolean, clearIcon: String, disable: Boolean, readonly: Boolean, autofocus: Boolean, for: String }, di = { ...Sh, maxlength: [Number, String] }, fi = ["update:modelValue", "clear", "focus", "blur"];
function vi({ requiredForAttr: e = true, tagProp: t, changeEvent: n = false } = {}) {
  const { props: l, proxy: a } = Se(), r = lt(l, a.$q), o = si({ required: e, getValue: () => l.for });
  return { requiredForAttr: e, changeEvent: n, tag: t === true ? f(() => l.tag) : { value: "label" }, isDark: r, editable: f(() => l.disable !== true && l.readonly !== true), innerLoading: W(false), focused: W(false), hasPopupOpen: false, splitAttrs: yh(), targetUid: o, rootRef: W(null), targetRef: W(null), controlRef: W(null) };
}
function mi(e) {
  const { props: t, emit: n, slots: l, attrs: a, proxy: r } = Se(), { $q: o } = r;
  let i = null;
  e.hasValue === void 0 && (e.hasValue = f(() => Kl(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (D) => {
    n("update:modelValue", D);
  }), e.controlEvents === void 0 && (e.controlEvents = { onFocusin: P, onFocusout: R }), Object.assign(e, { clearValue: H, onControlFocusin: P, onControlFocusout: R, focus: F }), e.computedCounter === void 0 && (e.computedCounter = f(() => {
    if (t.counter !== false) {
      const D = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === true ? t.modelValue.length : 0, te = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
      return D + (te !== void 0 ? " / " + te : "");
    }
  }));
  const { isDirtyModel: u, hasRules: c, hasError: s, errorMessage: v, resetValidation: h } = d1(e.focused, e.innerLoading), m = e.floatingLabel !== void 0 ? f(() => t.stackLabel === true || e.focused.value === true || e.floatingLabel.value === true) : f(() => t.stackLabel === true || e.focused.value === true || e.hasValue.value === true), g = f(() => t.bottomSlots === true || t.hint !== void 0 || c.value === true || t.counter === true || t.error !== null), _ = f(() => t.filled === true ? "filled" : t.outlined === true ? "outlined" : t.borderless === true ? "borderless" : t.standout ? "standout" : "standard"), w = f(() => `q-field row no-wrap items-start q-field--${_.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === true ? " q-field--rounded" : "") + (t.square === true ? " q-field--square" : "") + (m.value === true ? " q-field--float" : "") + (p.value === true ? " q-field--labeled" : "") + (t.dense === true ? " q-field--dense" : "") + (t.itemAligned === true ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === true ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === true ? " q-field--focused" : "") + (s.value === true ? " q-field--error" : "") + (s.value === true || e.focused.value === true ? " q-field--highlighted" : "") + (t.hideBottomSpace !== true && g.value === true ? " q-field--with-bottom" : "") + (t.disable === true ? " q-field--disabled" : t.readonly === true ? " q-field--readonly" : "")), C = f(() => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (s.value === true ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === true ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")), p = f(() => t.labelSlot === true || t.label !== void 0), y = f(() => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && s.value !== true ? ` text-${t.labelColor}` : "")), b = f(() => ({ id: e.targetUid.value, editable: e.editable.value, focused: e.focused.value, floatingLabel: m.value, modelValue: t.modelValue, emitValue: e.emitValue })), x = f(() => {
    const D = {};
    return e.targetUid.value && (D.for = e.targetUid.value), t.disable === true && (D["aria-disabled"] = "true"), D;
  });
  function A() {
    var _a2;
    const D = document.activeElement;
    let te = (_a2 = e.targetRef) == null ? void 0 : _a2.value;
    te && (D === null || D.id !== e.targetUid.value) && (te.hasAttribute("tabindex") === true || (te = te.querySelector("[tabindex]")), te !== D && (te == null ? void 0 : te.focus({ preventScroll: true })));
  }
  function F() {
    Pa(A);
  }
  function N() {
    Uy(A);
    const D = document.activeElement;
    D !== null && e.rootRef.value.contains(D) && D.blur();
  }
  function P(D) {
    i !== null && (clearTimeout(i), i = null), e.editable.value === true && e.focused.value === false && (e.focused.value = true, n("focus", D));
  }
  function R(D, te) {
    i !== null && clearTimeout(i), i = setTimeout(() => {
      i = null, !(document.hasFocus() === true && (e.hasPopupOpen === true || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement) !== false)) && (e.focused.value === true && (e.focused.value = false, n("blur", D)), te == null ? void 0 : te());
    });
  }
  function H(D) {
    var _a2;
    je(D), o.platform.is.mobile !== true ? (((_a2 = e.targetRef) == null ? void 0 : _a2.value) || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === true && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), n("update:modelValue", null), e.changeEvent === true && n("change", null), n("clear", t.modelValue), We(() => {
      const te = u.value;
      h(), u.value = te;
    });
  }
  function q(D) {
    [13, 32].includes(D.keyCode) && H(D);
  }
  function E() {
    const D = [];
    return l.prepend !== void 0 && D.push(d("div", { class: "q-field__prepend q-field__marginal row no-wrap items-center", key: "prepend", onClick: Vt }, l.prepend())), D.push(d("div", { class: "q-field__control-container col relative-position row no-wrap q-anchor--skip" }, k())), s.value === true && t.noErrorIcon === false && D.push(L("error", [d(et, { name: o.iconSet.field.error, color: "negative" })])), t.loading === true || e.innerLoading.value === true ? D.push(L("inner-loading-append", l.loading !== void 0 ? l.loading() : [d(_n, { color: t.color })])) : t.clearable === true && e.hasValue.value === true && e.editable.value === true && D.push(L("inner-clearable-append", [d(et, { class: "q-field__focusable-action", name: t.clearIcon || o.iconSet.field.clear, tabindex: 0, role: "button", "aria-hidden": "false", "aria-label": o.lang.label.clear, onKeyup: q, onClick: H })])), l.append !== void 0 && D.push(d("div", { class: "q-field__append q-field__marginal row no-wrap items-center", key: "append", onClick: Vt }, l.append())), e.getInnerAppend !== void 0 && D.push(L("inner-append", e.getInnerAppend())), e.getControlChild !== void 0 && D.push(e.getControlChild()), D;
  }
  function k() {
    const D = [];
    return t.prefix !== void 0 && t.prefix !== null && D.push(d("div", { class: "q-field__prefix no-pointer-events row items-center" }, t.prefix)), e.getShadowControl !== void 0 && e.hasShadow.value === true && D.push(e.getShadowControl()), e.getControl !== void 0 ? D.push(e.getControl()) : l.rawControl !== void 0 ? D.push(l.rawControl()) : l.control !== void 0 && D.push(d("div", { ref: e.targetRef, class: "q-field__native row", tabindex: -1, ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0 }, l.control(b.value))), p.value === true && D.push(d("div", { class: y.value }, Pe(l.label, t.label))), t.suffix !== void 0 && t.suffix !== null && D.push(d("div", { class: "q-field__suffix no-pointer-events row items-center" }, t.suffix)), D.concat(Pe(l.default));
  }
  function U() {
    let D, te;
    s.value === true ? v.value !== null ? (D = [d("div", { role: "alert" }, v.value)], te = `q--slot-error-${v.value}`) : (D = Pe(l.error), te = "q--slot-error") : (t.hideHint !== true || e.focused.value === true) && (t.hint !== void 0 ? (D = [d("div", t.hint)], te = `q--slot-hint-${t.hint}`) : (D = Pe(l.hint), te = "q--slot-hint"));
    const be = t.counter === true || l.counter !== void 0;
    if (t.hideBottomSpace === true && be === false && D === void 0) return;
    const K = d("div", { key: te, class: "q-field__messages col" }, D);
    return d("div", { class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== true ? "animated" : "stale"), onClick: Vt }, [t.hideBottomSpace === true ? K : d(Ft, { name: "q-transition--field-message" }, () => K), be === true ? d("div", { class: "q-field__counter" }, l.counter !== void 0 ? l.counter() : e.computedCounter.value) : null]);
  }
  function L(D, te) {
    return te === null ? null : d("div", { key: D, class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip" }, te);
  }
  let V = false;
  return On(() => {
    V = true;
  }), wl(() => {
    V === true && t.autofocus === true && r.focus();
  }), t.autofocus === true && ft(() => {
    r.focus();
  }), Ke(() => {
    i !== null && clearTimeout(i);
  }), Object.assign(r, { focus: F, blur: N }), function() {
    const te = e.getControl === void 0 && l.control === void 0 ? { ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0, ...x.value } : x.value;
    return d(e.tag.value, { ref: e.rootRef, class: [w.value, a.class], style: a.style, ...te }, [l.before !== void 0 ? d("div", { class: "q-field__before q-field__marginal row no-wrap items-center", onClick: Vt }, l.before()) : null, d("div", { class: "q-field__inner relative-position col self-stretch" }, [d("div", { ref: e.controlRef, class: C.value, tabindex: -1, ...e.controlEvents }, E()), g.value === true ? U() : null]), l.after !== void 0 ? d("div", { class: "q-field__after q-field__marginal row no-wrap items-center", onClick: Vt }, l.after()) : null]);
  };
}
var f1 = me({ name: "QField", inheritAttrs: false, props: { ...di, tag: { type: String, default: "label" } }, emits: fi, setup() {
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
  const { props: a, emit: r, proxy: o } = Se(), i = W(null), u = f(() => a.accept !== void 0 ? a.accept.split(",").map((p) => (p = p.trim(), p === "*" ? "*/" : (p.endsWith("/*") && (p = p.slice(0, p.length - 1)), p.toUpperCase()))) : null), c = f(() => parseInt(a.maxFiles, 10)), s = f(() => parseInt(a.maxTotalSize, 10));
  function v(p) {
    var _a2;
    if (e.value) if (p !== Object(p) && (p = { target: null }), ((_a2 = p.target) == null ? void 0 : _a2.matches('input[type="file"]')) === true) p.clientX === 0 && p.clientY === 0 && wt(p);
    else {
      const y = n();
      y !== p.target && (y == null ? void 0 : y.click(p));
    }
  }
  function h(p) {
    e.value && p && l(null, p);
  }
  function m(p, y, b, x) {
    let A = Array.from(y || p.target.files);
    const F = [], N = () => {
      F.length !== 0 && r("rejected", F);
    };
    if (a.accept !== void 0 && u.value.indexOf("*/") === -1 && (A = ra(A, F, "accept", (P) => u.value.some((R) => P.type.toUpperCase().startsWith(R) || P.name.toUpperCase().endsWith(R))), A.length === 0)) return N();
    if (a.maxFileSize !== void 0) {
      const P = parseInt(a.maxFileSize, 10);
      if (A = ra(A, F, "max-file-size", (R) => R.size <= P), A.length === 0) return N();
    }
    if (a.multiple !== true && A.length !== 0 && (A = [A[0]]), A.forEach((P) => {
      P.__key = P.webkitRelativePath + P.lastModified + P.name + P.size;
    }), x === true) {
      const P = b.map((R) => R.__key);
      A = ra(A, F, "duplicate", (R) => P.includes(R.__key) === false);
    }
    if (A.length === 0) return N();
    if (a.maxTotalSize !== void 0) {
      let P = x === true ? b.reduce((R, H) => R + H.size, 0) : 0;
      if (A = ra(A, F, "max-total-size", (R) => (P += R.size, P <= s.value)), A.length === 0) return N();
    }
    if (typeof a.filter == "function") {
      const P = a.filter(A);
      A = ra(A, F, "filter", (R) => P.includes(R));
    }
    if (a.maxFiles !== void 0) {
      let P = x === true ? b.length : 0;
      if (A = ra(A, F, "max-files", () => (P++, P <= c.value)), A.length === 0) return N();
    }
    if (N(), A.length !== 0) return A;
  }
  function g(p) {
    Wr(p), t.value !== true && (t.value = true);
  }
  function _(p) {
    je(p), (p.relatedTarget !== null || Ie.is.safari !== true ? p.relatedTarget !== i.value : document.elementsFromPoint(p.clientX, p.clientY).includes(i.value) === false) === true && (t.value = false);
  }
  function w(p) {
    Wr(p);
    const y = p.dataTransfer.files;
    y.length !== 0 && l(null, y), t.value = false;
  }
  function C(p) {
    if (t.value === true) return d("div", { ref: i, class: `q-${p}__dnd absolute-full`, onDragenter: Wr, onDragover: Wr, onDragleave: _, onDrop: w });
  }
  return Object.assign(o, { pickFiles: v, addFiles: h }), { pickFiles: v, addFiles: h, onDragover: g, onDragleave: _, processFiles: m, getDndNode: C, maxFilesNumber: c, maxTotalSizeNumber: s };
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
  return f(t === true ? () => {
    if (e.type === "file") return n();
  } : n);
}
me({ name: "QFile", inheritAttrs: false, props: { ...Sh, ...wn, ...xh, modelValue: [File, FileList, Array], append: Boolean, useChips: Boolean, displayValue: [String, Number], tabindex: { type: [String, Number], default: 0 }, counterLabel: Function, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...fi, ...Ch], setup(e, { slots: t, emit: n, attrs: l }) {
  const { proxy: a } = Se(), r = vi(), o = W(null), i = W(false), u = Ts(e), { pickFiles: c, onDragover: s, onDragleave: v, processFiles: h, getDndNode: m } = kh({ editable: r.editable, dnd: i, getFileInput: q, addFilesToQueue: E }), g = qh(e), _ = f(() => Object(e.modelValue) === e.modelValue ? "length" in e.modelValue ? Array.from(e.modelValue) : [e.modelValue] : []), w = f(() => Kl(_.value)), C = f(() => _.value.map((V) => V.name).join(", ")), p = f(() => Eu(_.value.reduce((V, D) => V + D.size, 0))), y = f(() => ({ totalSize: p.value, filesNumber: _.value.length, maxFiles: e.maxFiles })), b = f(() => ({ tabindex: -1, type: "file", title: "", accept: e.accept, capture: e.capture, name: u.value, ...l, id: r.targetUid.value, disabled: r.editable.value !== true })), x = f(() => "q-file q-field--auto-height" + (i.value === true ? " q-file--dnd" : "")), A = f(() => e.multiple === true && e.append === true);
  function F(V) {
    const D = _.value.slice();
    D.splice(V, 1), P(D);
  }
  function N(V) {
    const D = _.value.indexOf(V);
    D !== -1 && F(D);
  }
  function P(V) {
    n("update:modelValue", e.multiple === true ? V : V[0]);
  }
  function R(V) {
    V.keyCode === 13 && Vt(V);
  }
  function H(V) {
    (V.keyCode === 13 || V.keyCode === 32) && c(V);
  }
  function q() {
    return o.value;
  }
  function E(V, D) {
    const te = h(V, D, _.value, A.value), be = q();
    be != null && (be.value = ""), te !== void 0 && ((e.multiple === true ? e.modelValue && te.every((K) => _.value.includes(K)) : e.modelValue === te[0]) || P(A.value === true ? _.value.concat(te) : te));
  }
  function k() {
    return [d("input", { class: [e.inputClass, "q-file__filler"], style: e.inputStyle })];
  }
  function U() {
    if (t.file !== void 0) return _.value.length === 0 ? k() : _.value.map((D, te) => t.file({ index: te, file: D, ref: this }));
    if (t.selected !== void 0) return _.value.length === 0 ? k() : t.selected({ files: _.value, ref: this });
    if (e.useChips === true) return _.value.length === 0 ? k() : _.value.map((D, te) => d(Hm, { key: "file-" + te, removable: r.editable.value, dense: true, textColor: e.color, tabindex: e.tabindex, onRemove: () => {
      F(te);
    } }, () => d("span", { class: "ellipsis", textContent: D.name })));
    const V = e.displayValue !== void 0 ? e.displayValue : C.value;
    return V.length !== 0 ? [d("div", { class: e.inputClass, style: e.inputStyle, textContent: V })] : k();
  }
  function L() {
    const V = { ref: o, ...b.value, ...g.value, class: "q-field__input fit absolute-full cursor-pointer", onChange: E };
    return e.multiple === true && (V.multiple = true), d("input", V);
  }
  return Object.assign(r, { fieldClass: x, emitValue: P, hasValue: w, inputRef: o, innerValue: _, floatingLabel: f(() => w.value === true || Kl(e.displayValue)), computedCounter: f(() => {
    if (e.counterLabel !== void 0) return e.counterLabel(y.value);
    const V = e.maxFiles;
    return `${_.value.length}${V !== void 0 ? " / " + V : ""} (${p.value})`;
  }), getControlChild: () => m("file"), getControl: () => {
    const V = { ref: r.targetRef, class: "q-field__native row items-center cursor-pointer", tabindex: e.tabindex };
    return r.editable.value === true && Object.assign(V, { onDragover: s, onDragleave: v, onKeydown: R, onKeyup: H }), d("div", V, [L()].concat(U()));
  } }), Object.assign(a, { removeAtIndex: F, removeFile: N, getNativeElement: () => o.value }), Ot(a, "nativeEl", () => o.value), mi(r);
} });
var v1 = me({ name: "QFooter", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = Tt(Gl, ot);
  if (a === ot) return console.error("QFooter needs to be child of QLayout"), ot;
  const r = W(parseInt(e.heightHint, 10)), o = W(true), i = W(nn.value === true || a.isContainer.value === true ? 0 : window.innerHeight), u = f(() => e.reveal === true || a.view.value.indexOf("F") !== -1 || l.platform.is.ios && a.isContainer.value === true), c = f(() => a.isContainer.value === true ? a.containerHeight.value : i.value), s = f(() => {
    if (e.modelValue !== true) return 0;
    if (u.value === true) return o.value === true ? r.value : 0;
    const x = a.scroll.value.position + c.value + r.value - a.height.value;
    return x > 0 ? x : 0;
  }), v = f(() => e.modelValue !== true || u.value === true && o.value !== true), h = f(() => e.modelValue === true && v.value === true && e.reveal === true), m = f(() => "q-footer q-layout__section--marginal " + (u.value === true ? "fixed" : "absolute") + "-bottom" + (e.bordered === true ? " q-footer--bordered" : "") + (v.value === true ? " q-footer--hidden" : "") + (e.modelValue !== true ? " q-layout--prevent-focus" + (u.value !== true ? " hidden" : "") : "")), g = f(() => {
    const x = a.rows.value.bottom, A = {};
    return x[0] === "l" && a.left.space === true && (A[l.lang.rtl === true ? "right" : "left"] = `${a.left.size}px`), x[2] === "r" && a.right.space === true && (A[l.lang.rtl === true ? "left" : "right"] = `${a.right.size}px`), A;
  });
  function _(x, A) {
    a.update("footer", x, A);
  }
  function w(x, A) {
    x.value !== A && (x.value = A);
  }
  function C({ height: x }) {
    w(r, x), _("size", x);
  }
  function p() {
    if (e.reveal !== true) return;
    const { direction: x, position: A, inflectionPoint: F } = a.scroll.value;
    w(o, x === "up" || A - F < 100 || a.height.value - c.value - A - r.value < 300);
  }
  function y(x) {
    h.value === true && w(o, true), n("focusin", x);
  }
  ge(() => e.modelValue, (x) => {
    _("space", x), w(o, true), a.animate();
  }), ge(s, (x) => {
    _("offset", x);
  }), ge(() => e.reveal, (x) => {
    x === false && w(o, e.modelValue);
  }), ge(o, (x) => {
    a.animate(), n("reveal", x);
  }), ge([r, a.scroll, a.height], p), ge(() => l.screen.height, (x) => {
    a.isContainer.value !== true && w(i, x);
  });
  const b = {};
  return a.instances.footer = b, e.modelValue === true && _("size", r.value), _("space", e.modelValue), _("offset", s.value), Ke(() => {
    a.instances.footer === b && (a.instances.footer = void 0, _("size", 0), _("offset", 0), _("space", false));
  }), () => {
    const x = qt(t.default, [d(Ul, { debounce: 0, onResize: C })]);
    return e.elevated === true && x.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), d("footer", { class: m.value, style: g.value, onFocusin: y }, x);
  };
} });
me({ name: "QForm", props: { autofocus: Boolean, noErrorFocus: Boolean, noResetFocus: Boolean, greedy: Boolean, onSubmit: Function }, emits: ["reset", "validationSuccess", "validationError"], setup(e, { slots: t, emit: n }) {
  const l = Se(), a = W(null);
  let r = 0;
  const o = [];
  function i(m) {
    const g = typeof m == "boolean" ? m : e.noErrorFocus !== true, _ = ++r, w = (y, b) => {
      n(`validation${y === true ? "Success" : "Error"}`, b);
    }, C = (y) => {
      const b = y.validate();
      return typeof b.then == "function" ? b.then((x) => ({ valid: x, comp: y }), (x) => ({ valid: false, comp: y, err: x })) : Promise.resolve({ valid: b, comp: y });
    };
    return (e.greedy === true ? Promise.all(o.map(C)).then((y) => y.filter((b) => b.valid !== true)) : o.reduce((y, b) => y.then(() => C(b).then((x) => {
      if (x.valid === false) return Promise.reject(x);
    })), Promise.resolve()).catch((y) => [y])).then((y) => {
      if (y === void 0 || y.length === 0) return _ === r && w(true), true;
      if (_ === r) {
        const { comp: b, err: x } = y[0];
        if (x !== void 0 && console.error(x), w(false, b), g === true) {
          const A = y.find(({ comp: F }) => typeof F.focus == "function" && hl(F.$) === false);
          A !== void 0 && A.comp.focus();
        }
      }
      return false;
    });
  }
  function u() {
    r++, o.forEach((m) => {
      typeof m.resetValidation == "function" && m.resetValidation();
    });
  }
  function c(m) {
    m !== void 0 && je(m);
    const g = r + 1;
    i().then((_) => {
      g === r && _ === true && (e.onSubmit !== void 0 ? n("submit", m) : (m == null ? void 0 : m.target) !== void 0 && typeof m.target.submit == "function" && m.target.submit());
    });
  }
  function s(m) {
    m !== void 0 && je(m), n("reset"), We(() => {
      u(), e.autofocus === true && e.noResetFocus !== true && v();
    });
  }
  function v() {
    Pa(() => {
      var _a2;
      if (a.value === null) return;
      (_a2 = a.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || a.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || a.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(a.value.querySelectorAll("[tabindex]"), (g) => g.tabIndex !== -1)) == null ? void 0 : _a2.focus({ preventScroll: true });
    });
  }
  hn(um, { bindComponent(m) {
    o.push(m);
  }, unbindComponent(m) {
    const g = o.indexOf(m);
    g !== -1 && o.splice(g, 1);
  } });
  let h = false;
  return On(() => {
    h = true;
  }), wl(() => {
    h === true && e.autofocus === true && v();
  }), ft(() => {
    e.autofocus === true && v();
  }), Object.assign(l.proxy, { validate: i, resetValidation: u, submit: c, reset: s, focus: v, getValidationComponents: () => o }), () => d("form", { class: "q-form", ref: a, onSubmit: c, onReset: s }, Pe(t.default));
} });
var m1 = me({ name: "QHeader", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, revealOffset: { type: Number, default: 250 }, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = Tt(Gl, ot);
  if (a === ot) return console.error("QHeader needs to be child of QLayout"), ot;
  const r = W(parseInt(e.heightHint, 10)), o = W(true), i = f(() => e.reveal === true || a.view.value.indexOf("H") !== -1 || l.platform.is.ios && a.isContainer.value === true), u = f(() => {
    if (e.modelValue !== true) return 0;
    if (i.value === true) return o.value === true ? r.value : 0;
    const p = r.value - a.scroll.value.position;
    return p > 0 ? p : 0;
  }), c = f(() => e.modelValue !== true || i.value === true && o.value !== true), s = f(() => e.modelValue === true && c.value === true && e.reveal === true), v = f(() => "q-header q-layout__section--marginal " + (i.value === true ? "fixed" : "absolute") + "-top" + (e.bordered === true ? " q-header--bordered" : "") + (c.value === true ? " q-header--hidden" : "") + (e.modelValue !== true ? " q-layout--prevent-focus" : "")), h = f(() => {
    const p = a.rows.value.top, y = {};
    return p[0] === "l" && a.left.space === true && (y[l.lang.rtl === true ? "right" : "left"] = `${a.left.size}px`), p[2] === "r" && a.right.space === true && (y[l.lang.rtl === true ? "left" : "right"] = `${a.right.size}px`), y;
  });
  function m(p, y) {
    a.update("header", p, y);
  }
  function g(p, y) {
    p.value !== y && (p.value = y);
  }
  function _({ height: p }) {
    g(r, p), m("size", p);
  }
  function w(p) {
    s.value === true && g(o, true), n("focusin", p);
  }
  ge(() => e.modelValue, (p) => {
    m("space", p), g(o, true), a.animate();
  }), ge(u, (p) => {
    m("offset", p);
  }), ge(() => e.reveal, (p) => {
    p === false && g(o, e.modelValue);
  }), ge(o, (p) => {
    a.animate(), n("reveal", p);
  }), ge(a.scroll, (p) => {
    e.reveal === true && g(o, p.direction === "up" || p.position <= e.revealOffset || p.position - p.inflectionPoint < 100);
  });
  const C = {};
  return a.instances.header = C, e.modelValue === true && m("size", r.value), m("space", e.modelValue), m("offset", u.value), Ke(() => {
    a.instances.header === C && (a.instances.header = void 0, m("size", 0), m("offset", 0), m("space", false));
  }), () => {
    const p = Er(t.default, []);
    return e.elevated === true && p.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), p.push(d(Ul, { debounce: 0, onResize: _ })), d("header", { class: v.value, style: h.value, onFocusin: w }, p);
  };
} }), Ds = { ratio: [String, Number] };
function Ns(e, t) {
  return f(() => {
    const n = Number(e.ratio || (t !== void 0 ? t.value : void 0));
    return isNaN(n) !== true && n > 0 ? { paddingBottom: `${100 / n}%` } : null;
  });
}
var h1 = 1.7778;
me({ name: "QImg", props: { ...Ds, src: String, srcset: String, sizes: String, alt: String, crossorigin: String, decoding: String, referrerpolicy: String, draggable: Boolean, loading: { type: String, default: "lazy" }, loadingShowDelay: { type: [Number, String], default: 0 }, fetchpriority: { type: String, default: "auto" }, width: String, height: String, initialRatio: { type: [Number, String], default: h1 }, placeholderSrc: String, errorSrc: String, fit: { type: String, default: "cover" }, position: { type: String, default: "50% 50%" }, imgClass: String, imgStyle: Object, noSpinner: Boolean, noNativeMenu: Boolean, noTransition: Boolean, spinnerColor: String, spinnerSize: String }, emits: ["load", "error"], setup(e, { slots: t, emit: n }) {
  const l = W(e.initialRatio), a = Ns(e, l), r = Se(), { registerTimeout: o, removeTimeout: i } = Xn(), { registerTimeout: u, removeTimeout: c } = Xn(), s = f(() => e.placeholderSrc !== void 0 ? { src: e.placeholderSrc } : null), v = f(() => e.errorSrc !== void 0 ? { src: e.errorSrc, __qerror: true } : null), h = [W(null), W(s.value)], m = W(0), g = W(false), _ = W(false), w = f(() => `q-img q-img--${e.noNativeMenu === true ? "no-" : ""}menu`), C = f(() => ({ width: e.width, height: e.height })), p = f(() => `q-img__image ${e.imgClass !== void 0 ? e.imgClass + " " : ""}q-img__image--with${e.noTransition === true ? "out" : ""}-transition q-img__image--`), y = f(() => ({ ...e.imgStyle, objectFit: e.fit, objectPosition: e.position }));
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
  function A({ target: q }) {
    hl(r) === false && (i(), l.value = q.naturalHeight === 0 ? 0.5 : q.naturalWidth / q.naturalHeight, F(q, 1));
  }
  function F(q, E) {
    E === 1e3 || hl(r) === true || (q.complete === true ? N(q) : o(() => {
      F(q, E + 1);
    }, 50));
  }
  function N(q) {
    hl(r) !== true && (m.value = m.value ^ 1, h[m.value].value = null, x(), q.getAttribute("__qerror") !== "true" && (_.value = false), n("load", q.currentSrc || q.src));
  }
  function P(q) {
    i(), x(), _.value = true, h[m.value].value = v.value, h[m.value ^ 1].value = s.value, n("error", q);
  }
  function R(q) {
    const E = h[q].value, k = { key: "img_" + q, class: p.value, style: y.value, alt: e.alt, crossorigin: e.crossorigin, decoding: e.decoding, referrerpolicy: e.referrerpolicy, height: e.height, width: e.width, loading: e.loading, fetchpriority: e.fetchpriority, "aria-hidden": "true", draggable: e.draggable, ...E };
    return m.value === q ? Object.assign(k, { class: k.class + "current", onLoad: A, onError: P }) : k.class += "loaded", d("div", { class: "q-img__container absolute-full", key: "img" + q }, d("img", k));
  }
  function H() {
    return g.value === false ? d("div", { key: "content", class: "q-img__content absolute-full q-anchor--skip" }, Pe(t[_.value === true ? "error" : "default"])) : d("div", { key: "loading", class: "q-img__loading absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : e.noSpinner === true ? void 0 : [d(_n, { color: e.spinnerColor, size: e.spinnerSize })]);
  }
  {
    let q = function() {
      ge(() => e.src || e.srcset || e.sizes ? { src: e.src, srcset: e.srcset, sizes: e.sizes } : null, (E) => {
        i(), _.value = false, E === null ? (x(), h[m.value ^ 1].value = s.value) : b(), h[m.value].value = E;
      }, { immediate: true });
    };
    nn.value === true ? ft(q) : q();
  }
  return () => {
    const q = [];
    return a.value !== null && q.push(d("div", { key: "filler", style: a.value })), h[0].value !== null && q.push(R(0)), h[1].value !== null && q.push(R(1)), q.push(d(Ft, { name: "q-transition--fade" }, H)), d("div", { key: "main", class: w.value, style: C.value, role: "img", "aria-label": e.alt }, q);
  };
} });
var { passive: El } = dt;
me({ name: "QInfiniteScroll", props: { offset: { type: Number, default: 500 }, debounce: { type: [String, Number], default: 100 }, scrollTarget: Xl, initialIndex: { type: Number, default: 0 }, disable: Boolean, reverse: Boolean }, emits: ["load"], setup(e, { slots: t, emit: n }) {
  const l = W(false), a = W(true), r = W(null), o = W(null);
  let i = e.initialIndex, u, c;
  const s = f(() => "q-infinite-scroll__loading" + (l.value === true ? "" : " invisible"));
  function v() {
    if (e.disable === true || l.value === true || a.value === false) return;
    const F = zr(u), N = gl(u), P = Sa(u);
    e.reverse === false ? Math.round(N + P + e.offset) >= Math.round(F) && h() : Math.round(N) <= e.offset && h();
  }
  function h() {
    if (e.disable === true || l.value === true || a.value === false) return;
    i++, l.value = true;
    const F = zr(u);
    n("load", i, (N) => {
      a.value === true && (l.value = false, We(() => {
        if (e.reverse === true) {
          const P = zr(u), R = gl(u), H = P - F;
          pa(u, R + H);
        }
        N === true ? _() : r.value && r.value.closest("body") && c();
      }));
    });
  }
  function m() {
    i = 0;
  }
  function g() {
    a.value === false && (a.value = true, u.addEventListener("scroll", c, El)), v();
  }
  function _() {
    var _a2;
    a.value === true && (a.value = false, l.value = false, u.removeEventListener("scroll", c, El), (_a2 = c == null ? void 0 : c.cancel) == null ? void 0 : _a2.call(c));
  }
  function w() {
    if (u && a.value === true && u.removeEventListener("scroll", c, El), u = Vn(r.value, e.scrollTarget), a.value === true) {
      if (u.addEventListener("scroll", c, El), e.reverse === true) {
        const F = zr(u), N = Sa(u);
        pa(u, F - N);
      }
      v();
    }
  }
  function C(F) {
    i = F;
  }
  function p(F) {
    F = parseInt(F, 10);
    const N = c;
    c = F <= 0 ? v : Ea(v, isNaN(F) === true ? 100 : F), u && a.value === true && (N !== void 0 && u.removeEventListener("scroll", N, El), u.addEventListener("scroll", c, El));
  }
  function y(F) {
    if (b.value === true) {
      if (o.value === null) {
        F !== true && We(() => {
          y(true);
        });
        return;
      }
      const N = `${l.value === true ? "un" : ""}pauseAnimations`;
      Array.from(o.value.getElementsByTagName("svg")).forEach((P) => {
        P[N]();
      });
    }
  }
  const b = f(() => e.disable !== true && a.value === true);
  ge([l, b], () => {
    y();
  }), ge(() => e.disable, (F) => {
    F === true ? _() : g();
  }), ge(() => e.reverse, () => {
    l.value === false && a.value === true && v();
  }), ge(() => e.scrollTarget, w), ge(() => e.debounce, p);
  let x = false;
  wl(() => {
    x !== false && u && pa(u, x);
  }), On(() => {
    x = u ? gl(u) : false;
  }), Ke(() => {
    a.value === true && u.removeEventListener("scroll", c, El);
  }), ft(() => {
    p(e.debounce), w(), l.value === false && y();
  });
  const A = Se();
  return Object.assign(A.proxy, { poll: () => {
    c == null ? void 0 : c();
  }, trigger: h, stop: _, reset: m, resume: g, setIndex: C, updateScrollTarget: w }), () => {
    const F = Er(t.default, []);
    return b.value === true && F[e.reverse === false ? "push" : "unshift"](d("div", { ref: o, class: s.value }, Pe(t.loading))), d("div", { class: "q-infinite-scroll", ref: r }, F);
  };
} });
me({ name: "QInnerLoading", props: { ...nt, ...zl, showing: Boolean, color: String, size: { type: [String, Number], default: "42px" }, label: String, labelClass: String, labelStyle: [String, Array, Object] }, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), { transitionProps: a, transitionStyle: r } = oi(e), o = f(() => "q-inner-loading q--avoid-card-border absolute-full column flex-center" + (l.value === true ? " q-inner-loading--dark" : "")), i = f(() => "q-inner-loading__label" + (e.labelClass !== void 0 ? ` ${e.labelClass}` : ""));
  function u() {
    const s = [d(_n, { size: e.size, color: e.color })];
    return e.label !== void 0 && s.push(d("div", { class: i.value, style: e.labelStyle }, [e.label])), s;
  }
  function c() {
    return e.showing === true ? d("div", { class: o.value, style: r.value }, t.default !== void 0 ? t.default() : u()) : null;
  }
  return () => d(Ft, a.value, c);
} });
var kd = { date: "####/##/##", datetime: "####/##/## ##:##", time: "##:##", fulltime: "##:##:##", phone: "(###) ### - ####", card: "#### #### #### ####" }, Oo = { "#": { pattern: "[\\d]", negate: "[^\\d]" }, S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" }, N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" }, A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleLowerCase() }, X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleLowerCase() } }, Th = Object.keys(Oo);
Th.forEach((e) => {
  Oo[e].regex = new RegExp(Oo[e].pattern);
});
var g1 = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + Th.join("") + "])|(.)", "g"), qd = /[.*+?^${}()|[\]\\]/g, Lt = "", b1 = { mask: String, reverseFillMask: Boolean, fillMask: [Boolean, String], unmaskedValue: Boolean };
function y1(e, t, n, l) {
  let a, r, o, i, u, c;
  const s = W(null), v = W(m());
  function h() {
    return e.autogrow === true || ["textarea", "text", "search", "url", "tel", "password"].includes(e.type);
  }
  ge(() => e.type + e.autogrow, _), ge(() => e.mask, (P) => {
    if (P !== void 0) w(v.value, true);
    else {
      const R = F(v.value);
      _(), e.modelValue !== R && t("update:modelValue", R);
    }
  }), ge(() => e.fillMask + e.reverseFillMask, () => {
    s.value === true && w(v.value, true);
  }), ge(() => e.unmaskedValue, () => {
    s.value === true && w(v.value);
  });
  function m() {
    if (_(), s.value === true) {
      const P = x(F(e.modelValue));
      return e.fillMask !== false ? N(P) : P;
    }
    return e.modelValue;
  }
  function g(P) {
    if (P < a.length) return a.slice(-P);
    let R = "", H = a;
    const q = H.indexOf(Lt);
    if (q !== -1) {
      for (let E = P - H.length; E > 0; E--) R += Lt;
      H = H.slice(0, q) + R + H.slice(q);
    }
    return H;
  }
  function _() {
    if (s.value = e.mask !== void 0 && e.mask.length !== 0 && h(), s.value === false) {
      i = void 0, a = "", r = "";
      return;
    }
    const P = kd[e.mask] === void 0 ? e.mask : kd[e.mask], R = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_", H = R.replace(qd, "\\$&"), q = [], E = [], k = [];
    let U = e.reverseFillMask === true, L = "", V = "";
    P.replace(g1, (K, T, Z, O, oe) => {
      if (O !== void 0) {
        const B = Oo[O];
        k.push(B), V = B.negate, U === true && (E.push("(?:" + V + "+)?(" + B.pattern + "+)?(?:" + V + "+)?(" + B.pattern + "+)?"), U = false), E.push("(?:" + V + "+)?(" + B.pattern + ")?");
      } else if (Z !== void 0) L = "\\" + (Z === "\\" ? "" : Z), k.push(Z), q.push("([^" + L + "]+)?" + L + "?");
      else {
        const B = T !== void 0 ? T : oe;
        L = B === "\\" ? "\\\\\\\\" : B.replace(qd, "\\\\$&"), k.push(B), q.push("([^" + L + "]+)?" + L + "?");
      }
    });
    const D = new RegExp("^" + q.join("") + "(" + (L === "" ? "." : "[^" + L + "]") + "+)?" + (L === "" ? "" : "[" + L + "]*") + "$"), te = E.length - 1, be = E.map((K, T) => T === 0 && e.reverseFillMask === true ? new RegExp("^" + H + "*" + K) : T === te ? new RegExp("^" + K + "(" + (V === "" ? "." : V) + "+)?" + (e.reverseFillMask === true ? "$" : H + "*")) : new RegExp("^" + K));
    o = k, i = (K) => {
      const T = D.exec(e.reverseFillMask === true ? K : K.slice(0, k.length + 1));
      T !== null && (K = T.slice(1).join(""));
      const Z = [], O = be.length;
      for (let oe = 0, B = K; oe < O; oe++) {
        const $ = be[oe].exec(B);
        if ($ === null) break;
        B = B.slice($.shift().length), Z.push(...$);
      }
      return Z.length !== 0 ? Z.join("") : K;
    }, a = k.map((K) => typeof K == "string" ? K : Lt).join(""), r = a.split(Lt).join(R);
  }
  function w(P, R, H) {
    const q = l.value, E = q.selectionEnd, k = q.value.length - E, U = F(P);
    R === true && _();
    const L = x(U), V = e.fillMask !== false ? N(L) : L, D = v.value !== V;
    q.value !== V && (q.value = V), D === true && (v.value = V), document.activeElement === q && We(() => {
      if (V === r) {
        const be = e.reverseFillMask === true ? r.length : 0;
        q.setSelectionRange(be, be, "forward");
        return;
      }
      if (H === "insertFromPaste" && e.reverseFillMask !== true) {
        const be = q.selectionEnd;
        let K = E - 1;
        for (let T = u; T <= K && T < be; T++) a[T] !== Lt && K++;
        p.right(q, K);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(H) !== -1) {
        const be = e.reverseFillMask === true ? E === 0 ? V.length > L.length ? 1 : 0 : Math.max(0, V.length - (V === r ? 0 : Math.min(L.length, k) + 1)) + 1 : E;
        q.setSelectionRange(be, be, "forward");
        return;
      }
      if (e.reverseFillMask === true) if (D === true) {
        const be = Math.max(0, V.length - (V === r ? 0 : Math.min(L.length, k + 1)));
        be === 1 && E === 1 ? q.setSelectionRange(be, be, "forward") : p.rightReverse(q, be);
      } else {
        const be = V.length - k;
        q.setSelectionRange(be, be, "backward");
      }
      else if (D === true) {
        const be = Math.max(0, a.indexOf(Lt), Math.min(L.length, E) - 1);
        p.right(q, be);
      } else {
        const be = E - 1;
        p.right(q, be);
      }
    });
    const te = e.unmaskedValue === true ? F(V) : V;
    String(e.modelValue) !== te && (e.modelValue !== null || te !== "") && n(te, true);
  }
  function C(P, R, H) {
    const q = x(F(P.value));
    R = Math.max(0, a.indexOf(Lt), Math.min(q.length, R)), u = R, P.setSelectionRange(R, H, "forward");
  }
  const p = { left(P, R) {
    const H = a.slice(R - 1).indexOf(Lt) === -1;
    let q = Math.max(0, R - 1);
    for (; q >= 0; q--) if (a[q] === Lt) {
      R = q, H === true && R++;
      break;
    }
    if (q < 0 && a[R] !== void 0 && a[R] !== Lt) return p.right(P, 0);
    R >= 0 && P.setSelectionRange(R, R, "backward");
  }, right(P, R) {
    const H = P.value.length;
    let q = Math.min(H, R + 1);
    for (; q <= H; q++) if (a[q] === Lt) {
      R = q;
      break;
    } else a[q - 1] === Lt && (R = q);
    if (q > H && a[R - 1] !== void 0 && a[R - 1] !== Lt) return p.left(P, H);
    P.setSelectionRange(R, R, "forward");
  }, leftReverse(P, R) {
    const H = g(P.value.length);
    let q = Math.max(0, R - 1);
    for (; q >= 0; q--) if (H[q - 1] === Lt) {
      R = q;
      break;
    } else if (H[q] === Lt && (R = q, q === 0)) break;
    if (q < 0 && H[R] !== void 0 && H[R] !== Lt) return p.rightReverse(P, 0);
    R >= 0 && P.setSelectionRange(R, R, "backward");
  }, rightReverse(P, R) {
    const H = P.value.length, q = g(H), E = q.slice(0, R + 1).indexOf(Lt) === -1;
    let k = Math.min(H, R + 1);
    for (; k <= H; k++) if (q[k - 1] === Lt) {
      R = k, R > 0 && E === true && R--;
      break;
    }
    if (k > H && q[R - 1] !== void 0 && q[R - 1] !== Lt) return p.leftReverse(P, H);
    P.setSelectionRange(R, R, "forward");
  } };
  function y(P) {
    t("click", P), c = void 0;
  }
  function b(P) {
    if (t("keydown", P), Yl(P) === true || P.altKey === true) return;
    const R = l.value, H = R.selectionStart, q = R.selectionEnd;
    if (P.shiftKey || (c = void 0), P.keyCode === 37 || P.keyCode === 39) {
      P.shiftKey && c === void 0 && (c = R.selectionDirection === "forward" ? H : q);
      const E = p[(P.keyCode === 39 ? "right" : "left") + (e.reverseFillMask === true ? "Reverse" : "")];
      if (P.preventDefault(), E(R, c === H ? q : H), P.shiftKey) {
        const k = R.selectionStart;
        R.setSelectionRange(Math.min(c, k), Math.max(c, k), "forward");
      }
    } else P.keyCode === 8 && e.reverseFillMask !== true && H === q ? (p.left(R, H), R.setSelectionRange(R.selectionStart, q, "backward")) : P.keyCode === 46 && e.reverseFillMask === true && H === q && (p.rightReverse(R, q), R.setSelectionRange(H, R.selectionEnd, "forward"));
  }
  function x(P) {
    if (P == null || P === "") return "";
    if (e.reverseFillMask === true) return A(P);
    const R = o;
    let H = 0, q = "";
    for (let E = 0; E < R.length; E++) {
      const k = P[H], U = R[E];
      if (typeof U == "string") q += U, k === U && H++;
      else if (k !== void 0 && U.regex.test(k)) q += U.transform !== void 0 ? U.transform(k) : k, H++;
      else return q;
    }
    return q;
  }
  function A(P) {
    const R = o, H = a.indexOf(Lt);
    let q = P.length - 1, E = "";
    for (let k = R.length - 1; k >= 0 && q !== -1; k--) {
      const U = R[k];
      let L = P[q];
      if (typeof U == "string") E = U + E, L === U && q--;
      else if (L !== void 0 && U.regex.test(L)) do
        E = (U.transform !== void 0 ? U.transform(L) : L) + E, q--, L = P[q];
      while (H === k && L !== void 0 && U.regex.test(L));
      else return E;
    }
    return E;
  }
  function F(P) {
    return typeof P != "string" || i === void 0 ? typeof P == "number" ? i("" + P) : P : i(P);
  }
  function N(P) {
    return r.length - P.length <= 0 ? P : e.reverseFillMask === true && P.length !== 0 ? r.slice(0, -P.length) + P : P + r.slice(P.length);
  }
  return { innerValue: v, hasMask: s, moveCursorForPaste: C, updateMaskValue: w, onMaskedKeydown: b, onMaskedClick: y };
}
var p1 = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/, _1 = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u, w1 = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/, S1 = /[a-z0-9_ -]$/i;
function Mh(e) {
  return function(n) {
    if (n.type === "compositionend" || n.type === "change") {
      if (n.target.qComposing !== true) return;
      n.target.qComposing = false, e(n);
    } else n.type === "compositionupdate" && n.target.qComposing !== true && typeof n.data == "string" && (Ie.is.firefox === true ? S1.test(n.data) === false : p1.test(n.data) === true || _1.test(n.data) === true || w1.test(n.data) === true) === true && (n.target.qComposing = true);
  };
}
var Eh = me({ name: "QInput", inheritAttrs: false, props: { ...di, ...b1, ...wn, modelValue: [String, Number, FileList], shadowText: String, type: { type: String, default: "text" }, debounce: [String, Number], autogrow: Boolean, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...fi, "paste", "change", "keydown", "click", "animationend"], setup(e, { emit: t, attrs: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = {};
  let o = NaN, i, u, c = null, s;
  const v = W(null), h = Ts(e), { innerValue: m, hasMask: g, moveCursorForPaste: _, updateMaskValue: w, onMaskedKeydown: C, onMaskedClick: p } = y1(e, t, L, v), y = qh(e, true), b = f(() => Kl(m.value)), x = Mh(k), A = vi({ changeEvent: true }), F = f(() => e.type === "textarea" || e.autogrow === true), N = f(() => F.value === true || ["text", "search", "url", "tel", "password"].includes(e.type)), P = f(() => {
    const T = { ...A.splitAttrs.listeners.value, onInput: k, onPaste: E, onChange: D, onBlur: te, onFocus: wt };
    return T.onCompositionstart = T.onCompositionupdate = T.onCompositionend = x, g.value === true && (T.onKeydown = C, T.onClick = p), e.autogrow === true && (T.onAnimationend = U), T;
  }), R = f(() => {
    const T = { tabindex: 0, "data-autofocus": e.autofocus === true || void 0, rows: e.type === "textarea" ? 6 : void 0, "aria-label": e.label, name: h.value, ...A.splitAttrs.attributes.value, id: A.targetUid.value, maxlength: e.maxlength, disabled: e.disable === true, readonly: e.readonly === true };
    return F.value === false && (T.type = e.type), e.autogrow === true && (T.rows = 1), T;
  });
  ge(() => e.type, () => {
    v.value && (v.value.value = e.modelValue);
  }), ge(() => e.modelValue, (T) => {
    if (g.value === true) {
      if (u === true && (u = false, String(T) === o)) return;
      w(T);
    } else m.value !== T && (m.value = T, e.type === "number" && r.hasOwnProperty("value") === true && (i === true ? i = false : delete r.value));
    e.autogrow === true && We(V);
  }), ge(() => e.autogrow, (T) => {
    T === true ? We(V) : v.value !== null && n.rows > 0 && (v.value.style.height = "auto");
  }), ge(() => e.dense, () => {
    e.autogrow === true && We(V);
  });
  function H() {
    Pa(() => {
      const T = document.activeElement;
      v.value !== null && v.value !== T && (T === null || T.id !== A.targetUid.value) && v.value.focus({ preventScroll: true });
    });
  }
  function q() {
    var _a2;
    (_a2 = v.value) == null ? void 0 : _a2.select();
  }
  function E(T) {
    if (g.value === true && e.reverseFillMask !== true) {
      const Z = T.target;
      _(Z, Z.selectionStart, Z.selectionEnd);
    }
    t("paste", T);
  }
  function k(T) {
    if (!T || !T.target) return;
    if (e.type === "file") {
      t("update:modelValue", T.target.files);
      return;
    }
    const Z = T.target.value;
    if (T.target.qComposing === true) {
      r.value = Z;
      return;
    }
    if (g.value === true) w(Z, false, T.inputType);
    else if (L(Z), N.value === true && T.target === document.activeElement) {
      const { selectionStart: O, selectionEnd: oe } = T.target;
      O !== void 0 && oe !== void 0 && We(() => {
        T.target === document.activeElement && Z.indexOf(T.target.value) === 0 && T.target.setSelectionRange(O, oe);
      });
    }
    e.autogrow === true && V();
  }
  function U(T) {
    t("animationend", T), V();
  }
  function L(T, Z) {
    s = () => {
      c = null, e.type !== "number" && r.hasOwnProperty("value") === true && delete r.value, e.modelValue !== T && o !== T && (o = T, Z === true && (u = true), t("update:modelValue", T), We(() => {
        o === T && (o = NaN);
      })), s = void 0;
    }, e.type === "number" && (i = true, r.value = T), e.debounce !== void 0 ? (c !== null && clearTimeout(c), r.value = T, c = setTimeout(s, e.debounce)) : s();
  }
  function V() {
    requestAnimationFrame(() => {
      const T = v.value;
      if (T !== null) {
        const Z = T.parentNode.style, { scrollTop: O } = T, { overflowY: oe, maxHeight: B } = a.platform.is.firefox === true ? {} : window.getComputedStyle(T), $ = oe !== void 0 && oe !== "scroll";
        $ === true && (T.style.overflowY = "hidden"), Z.marginBottom = T.scrollHeight - 1 + "px", T.style.height = "1px", T.style.height = T.scrollHeight + "px", $ === true && (T.style.overflowY = parseInt(B, 10) < T.scrollHeight ? "auto" : "hidden"), Z.marginBottom = "", T.scrollTop = O;
      }
    });
  }
  function D(T) {
    x(T), c !== null && (clearTimeout(c), c = null), s == null ? void 0 : s(), t("change", T.target.value);
  }
  function te(T) {
    T !== void 0 && wt(T), c !== null && (clearTimeout(c), c = null), s == null ? void 0 : s(), i = false, u = false, delete r.value, e.type !== "file" && setTimeout(() => {
      v.value !== null && (v.value.value = m.value !== void 0 ? m.value : "");
    });
  }
  function be() {
    return r.hasOwnProperty("value") === true ? r.value : m.value !== void 0 ? m.value : "";
  }
  Ke(() => {
    te();
  }), ft(() => {
    e.autogrow === true && V();
  }), Object.assign(A, { innerValue: m, fieldClass: f(() => `q-${F.value === true ? "textarea" : "input"}` + (e.autogrow === true ? " q-textarea--autogrow" : "")), hasShadow: f(() => e.type !== "file" && typeof e.shadowText == "string" && e.shadowText.length !== 0), inputRef: v, emitValue: L, hasValue: b, floatingLabel: f(() => b.value === true && (e.type !== "number" || isNaN(m.value) === false) || Kl(e.displayValue)), getControl: () => d(F.value === true ? "textarea" : "input", { ref: v, class: ["q-field__native q-placeholder", e.inputClass], style: e.inputStyle, ...R.value, ...P.value, ...e.type !== "file" ? { value: be() } : y.value }), getShadowControl: () => d("div", { class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (F.value === true ? "" : " text-no-wrap") }, [d("span", { class: "invisible" }, be()), d("span", e.shadowText)]) });
  const K = mi(A);
  return Object.assign(l, { focus: H, select: q, getNativeElement: () => v.value }), Ot(l, "nativeEl", () => v.value), K;
} }), Td = { threshold: 0, root: null, rootMargin: "0px" };
function Md(e, t, n) {
  var _a2;
  let l, a, r;
  typeof n == "function" ? (l = n, a = Td, r = t.cfg === void 0) : (l = n.handler, a = Object.assign({}, Td, n.cfg), r = t.cfg === void 0 || kn(t.cfg, a) === false), t.handler !== l && (t.handler = l), r === true && (t.cfg = a, (_a2 = t.observer) == null ? void 0 : _a2.unobserve(e), t.observer = new IntersectionObserver(([o]) => {
    if (typeof t.handler == "function") {
      if (o.rootBounds === null && document.body.contains(e) === true) {
        t.observer.unobserve(e), t.observer.observe(e);
        return;
      }
      (t.handler(o, t.observer) === false || t.once === true && o.isIntersecting === true) && $h(e);
    }
  }, a), t.observer.observe(e));
}
function $h(e) {
  var _a2;
  const t = e.__qvisible;
  t !== void 0 && ((_a2 = t.observer) == null ? void 0 : _a2.unobserve(e), delete e.__qvisible);
}
var x1 = An({ name: "intersection", mounted(e, { modifiers: t, value: n }) {
  const l = { once: t.once === true };
  Md(e, l, n), e.__qvisible = l;
}, updated(e, t) {
  const n = e.__qvisible;
  n !== void 0 && Md(e, n, t.value);
}, beforeUnmount: $h });
me({ name: "QIntersection", props: { tag: { type: String, default: "div" }, once: Boolean, transition: String, transitionDuration: { type: [String, Number], default: 300 }, ssrPrerender: Boolean, margin: String, threshold: [Number, Array], root: { default: null }, disable: Boolean, onVisibility: Function }, setup(e, { slots: t, emit: n }) {
  const l = W(nn.value === true ? e.ssrPrerender : false), a = f(() => e.root !== void 0 || e.margin !== void 0 || e.threshold !== void 0 ? { handler: u, cfg: { root: e.root, rootMargin: e.margin, threshold: e.threshold } } : u), r = f(() => e.disable !== true && (nn.value !== true || e.once !== true || e.ssrPrerender !== true)), o = f(() => [[x1, a.value, void 0, { once: e.once }]]), i = f(() => `--q-transition-duration: ${e.transitionDuration}ms`);
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
var C1 = ["ul", "ol"], Ah = me({ name: "QList", props: { ...nt, bordered: Boolean, dense: Boolean, separator: Boolean, padding: Boolean, tag: { type: String, default: "div" } }, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), a = f(() => C1.includes(e.tag) ? null : "list"), r = f(() => "q-list" + (e.bordered === true ? " q-list--bordered" : "") + (e.dense === true ? " q-list--dense" : "") + (e.separator === true ? " q-list--separator" : "") + (l.value === true ? " q-list--dark" : "") + (e.padding === true ? " q-list--padding" : ""));
  return () => d(e.tag, { class: r.value, role: a.value }, Pe(t.default));
} }), Ed = [34, 37, 40, 33, 39, 38], k1 = Object.keys(Fs);
me({ name: "QKnob", props: { ...wn, ...Fs, modelValue: { type: Number, required: true }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, tabindex: { type: [Number, String], default: 0 }, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change", "dragValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = W(e.modelValue), o = W(false), i = f(() => isNaN(e.innerMin) === true || e.innerMin < e.min ? e.min : e.innerMin), u = f(() => isNaN(e.innerMax) === true || e.innerMax > e.max ? e.max : e.innerMax);
  let c;
  function s() {
    r.value = e.modelValue === null ? i.value : ct(e.modelValue, i.value, u.value), H(true);
  }
  ge(() => `${e.modelValue}|${i.value}|${u.value}`, s), s();
  const v = f(() => e.disable === false && e.readonly === false), h = f(() => "q-knob non-selectable" + (v.value === true ? " q-knob--editable" : e.disable === true ? " disabled" : "")), m = f(() => (String(e.step).trim().split(".")[1] || "").length), g = f(() => e.step === 0 ? 1 : e.step), _ = f(() => e.instantFeedback === true || o.value === true), w = a.platform.is.mobile === true ? f(() => v.value === true ? { onClick: F } : {}) : f(() => v.value === true ? { onMousedown: A, onClick: F, onKeydown: N, onKeyup: R } : {}), C = f(() => v.value === true ? { tabindex: e.tabindex } : { [`aria-${e.disable === true ? "disabled" : "readonly"}`]: "true" }), p = f(() => {
    const k = {};
    return k1.forEach((U) => {
      k[U] = e[U];
    }), k;
  });
  function y(k) {
    k.isFinal ? (P(k.evt, true), o.value = false) : (k.isFirst && (x(), o.value = true), P(k.evt));
  }
  const b = f(() => [[gn, y, void 0, { prevent: true, stop: true, mouse: true }]]);
  function x() {
    const { top: k, left: U, width: L, height: V } = l.$el.getBoundingClientRect();
    c = { top: k + V / 2, left: U + L / 2 };
  }
  function A(k) {
    x(), P(k);
  }
  function F(k) {
    x(), P(k, true);
  }
  function N(k) {
    if (Ed.includes(k.keyCode) === false) return;
    je(k);
    const U = ([34, 33].includes(k.keyCode) ? 10 : 1) * g.value, L = [34, 37, 40].includes(k.keyCode) ? -U : U;
    r.value = ct(parseFloat((r.value + L).toFixed(m.value)), i.value, u.value), H();
  }
  function P(k, U) {
    const L = en(k), V = Math.abs(L.top - c.top), D = Math.sqrt(V ** 2 + Math.abs(L.left - c.left) ** 2);
    let te = Math.asin(V / D) * (180 / Math.PI);
    L.top < c.top ? te = c.left < L.left ? 90 - te : 270 + te : te = c.left < L.left ? te + 90 : 270 - te, a.lang.rtl === true ? te = Co(-te - e.angle, 0, 360) : e.angle && (te = Co(te - e.angle, 0, 360)), e.reverse === true && (te = 360 - te);
    let be = e.min + te / 360 * (e.max - e.min);
    if (g.value !== 0) {
      const K = be % g.value;
      be = be - K + (Math.abs(K) >= g.value / 2 ? (K < 0 ? -1 : 1) * g.value : 0), be = parseFloat(be.toFixed(m.value));
    }
    be = ct(be, i.value, u.value), n("dragValue", be), r.value !== be && (r.value = be), H(U);
  }
  function R(k) {
    Ed.includes(k.keyCode) && H(true);
  }
  function H(k) {
    e.modelValue !== r.value && n("update:modelValue", r.value), k === true && n("change", r.value);
  }
  const q = Rr(e);
  function E() {
    return d("input", q.value);
  }
  return () => {
    const k = { class: h.value, role: "slider", "aria-valuemin": i.value, "aria-valuemax": u.value, "aria-valuenow": e.modelValue, ...C.value, ...p.value, value: r.value, instantFeedback: _.value, ...w.value }, U = { default: t.default };
    return v.value === true && e.name !== void 0 && (U.internal = E), pn(Qm, k, U, "knob", v.value, () => b.value);
  };
} });
var { passive: $d } = dt, q1 = ["both", "horizontal", "vertical"], Rh = me({ name: "QScrollObserver", props: { axis: { type: String, validator: (e) => q1.includes(e), default: "vertical" }, debounce: [String, Number], scrollTarget: Xl }, emits: ["scroll"], setup(e, { emit: t }) {
  const n = { position: { top: 0, left: 0 }, direction: "down", directionChanged: false, delta: { top: 0, left: 0 }, inflectionPoint: { top: 0, left: 0 } };
  let l = null, a, r;
  ge(() => e.scrollTarget, () => {
    u(), i();
  });
  function o() {
    l == null ? void 0 : l();
    const v = Math.max(0, gl(a)), h = ii(a), m = { top: v - n.position.top, left: h - n.position.left };
    if (e.axis === "vertical" && m.top === 0 || e.axis === "horizontal" && m.left === 0) return;
    const g = Math.abs(m.top) >= Math.abs(m.left) ? m.top < 0 ? "up" : "down" : m.left < 0 ? "left" : "right";
    n.position = { top: v, left: h }, n.directionChanged = n.direction !== g, n.delta = m, n.directionChanged === true && (n.direction = g, n.inflectionPoint = n.position), t("scroll", { ...n });
  }
  function i() {
    a = Vn(r, e.scrollTarget), a.addEventListener("scroll", c, $d), c(true);
  }
  function u() {
    a !== void 0 && (a.removeEventListener("scroll", c, $d), a = void 0);
  }
  function c(v) {
    if (v === true || e.debounce === 0 || e.debounce === "0") o();
    else if (l === null) {
      const [h, m] = e.debounce ? [setTimeout(o, e.debounce), clearTimeout] : [requestAnimationFrame(o), cancelAnimationFrame];
      l = () => {
        m(h), l = null;
      };
    }
  }
  const { proxy: s } = Se();
  return ge(() => s.$q.lang.rtl, o), ft(() => {
    r = s.$el.parentNode, i();
  }), Ke(() => {
    l == null ? void 0 : l(), u();
  }), Object.assign(s, { trigger: c, getPosition: () => n }), St;
} }), T1 = me({ name: "QLayout", props: { container: Boolean, view: { type: String, default: "hhh lpr fff", validator: (e) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase()) }, onScroll: Function, onScrollHeight: Function, onResize: Function }, setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = W(null), r = W(l.screen.height), o = W(e.container === true ? 0 : l.screen.width), i = W({ position: 0, direction: "down", inflectionPoint: 0 }), u = W(0), c = W(nn.value === true ? 0 : ro()), s = f(() => "q-layout q-layout--" + (e.container === true ? "containerized" : "standard")), v = f(() => e.container === false ? { minHeight: l.screen.height + "px" } : null), h = f(() => c.value !== 0 ? { [l.lang.rtl === true ? "left" : "right"]: `${c.value}px` } : null), m = f(() => c.value !== 0 ? { [l.lang.rtl === true ? "right" : "left"]: 0, [l.lang.rtl === true ? "left" : "right"]: `-${c.value}px`, width: `calc(100% + ${c.value}px)` } : null);
  function g(b) {
    if (e.container === true || document.qScrollPrevented !== true) {
      const x = { position: b.position.top, direction: b.direction, directionChanged: b.directionChanged, inflectionPoint: b.inflectionPoint.top, delta: b.delta.top };
      i.value = x, e.onScroll !== void 0 && n("scroll", x);
    }
  }
  function _(b) {
    const { height: x, width: A } = b;
    let F = false;
    r.value !== x && (F = true, r.value = x, e.onScrollHeight !== void 0 && n("scrollHeight", x), C()), o.value !== A && (F = true, o.value = A), F === true && e.onResize !== void 0 && n("resize", b);
  }
  function w({ height: b }) {
    u.value !== b && (u.value = b, C());
  }
  function C() {
    if (e.container === true) {
      const b = r.value > u.value ? ro() : 0;
      c.value !== b && (c.value = b);
    }
  }
  let p = null;
  const y = { instances: {}, view: f(() => e.view), isContainer: f(() => e.container), rootRef: a, height: r, containerHeight: u, scrollbarWidth: c, totalWidth: f(() => o.value + c.value), rows: f(() => {
    const b = e.view.toLowerCase().split(" ");
    return { top: b[0].split(""), middle: b[1].split(""), bottom: b[2].split("") };
  }), header: Bn({ size: 0, offset: 0, space: false }), right: Bn({ size: 300, offset: 0, space: false }), footer: Bn({ size: 0, offset: 0, space: false }), left: Bn({ size: 300, offset: 0, space: false }), scroll: i, animate() {
    p !== null ? clearTimeout(p) : document.body.classList.add("q-body--layout-animate"), p = setTimeout(() => {
      p = null, document.body.classList.remove("q-body--layout-animate");
    }, 155);
  }, update(b, x, A) {
    y[b][x] = A;
  } };
  if (hn(Gl, y), ro() > 0) {
    let b = function() {
      F = null, N.classList.remove("hide-scrollbar");
    }, x = function() {
      if (F === null) {
        if (N.scrollHeight > l.screen.height) return;
        N.classList.add("hide-scrollbar");
      } else clearTimeout(F);
      F = setTimeout(b, 300);
    }, A = function(P) {
      F !== null && P === "remove" && (clearTimeout(F), b()), window[`${P}EventListener`]("resize", x);
    }, F = null;
    const N = document.body;
    ge(() => e.container !== true ? "add" : "remove", A), e.container !== true && A("add"), Xo(() => {
      A("remove");
    });
  }
  return () => {
    const b = qt(t.default, [d(Rh, { onScroll: g }), d(Ul, { onResize: _ })]), x = d("div", { class: s.value, style: v.value, ref: e.container === true ? void 0 : a, tabindex: -1 }, b);
    return e.container === true ? d("div", { class: "q-layout-container overflow-hidden", ref: a }, [d(Ul, { onResize: w }), d("div", { class: "absolute-full", style: h.value }, [d("div", { class: "scroll", style: m.value }, [x])])]) : x;
  };
} }), M1 = ["horizontal", "vertical", "cell", "none"], E1 = me({ name: "QMarkupTable", props: { ...nt, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, wrapCells: Boolean, separator: { type: String, default: "horizontal", validator: (e) => M1.includes(e) } }, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), a = f(() => `q-markup-table q-table__container q-table__card q-table--${e.separator}-separator` + (l.value === true ? " q-table--dark q-table__card--dark q-dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "") + (e.square === true ? " q-table--square" : "") + (e.wrapCells === false ? " q-table--no-wrap" : ""));
  return () => d("div", { class: a.value }, [d("table", { class: "q-table" }, Pe(t.default))]);
} });
me({ name: "QNoSsr", props: { tag: { type: String, default: "div" }, placeholder: String }, setup(e, { slots: t }) {
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
var $1 = () => d("svg", { key: "svg", class: "q-radio__bg absolute non-selectable", viewBox: "0 0 24 24" }, [d("path", { d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12" }), d("path", { class: "q-radio__check", d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6" })]), A1 = me({ name: "QRadio", props: { ...nt, ...Jn, ...wn, modelValue: { required: true }, val: { required: true }, label: String, leftLabel: Boolean, checkedIcon: String, uncheckedIcon: String, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), a = lt(e, l.$q), r = el(e, Im), o = W(null), { refocusTargetEl: i, refocusTarget: u } = Vm(e, o), c = f(() => Ge(e.modelValue) === Ge(e.val)), s = f(() => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (e.disable === true ? " disabled" : "") + (a.value === true ? " q-radio--dark" : "") + (e.dense === true ? " q-radio--dense" : "") + (e.leftLabel === true ? " reverse" : "")), v = f(() => {
    const b = e.color !== void 0 && (e.keepColor === true || c.value === true) ? ` text-${e.color}` : "";
    return `q-radio__inner relative-position q-radio__inner--${c.value === true ? "truthy" : "falsy"}${b}`;
  }), h = f(() => (c.value === true ? e.checkedIcon : e.uncheckedIcon) || null), m = f(() => e.disable === true ? -1 : e.tabindex || 0), g = f(() => {
    const b = { type: "radio" };
    return e.name !== void 0 && Object.assign(b, { ".checked": c.value === true, "^checked": c.value === true ? "checked" : void 0, name: e.name, value: e.val }), b;
  }), _ = xl(g);
  function w(b) {
    b !== void 0 && (je(b), u(b)), e.disable !== true && c.value !== true && n("update:modelValue", e.val, b);
  }
  function C(b) {
    (b.keyCode === 13 || b.keyCode === 32) && je(b);
  }
  function p(b) {
    (b.keyCode === 13 || b.keyCode === 32) && w(b);
  }
  Object.assign(l, { set: w });
  const y = $1();
  return () => {
    const b = h.value !== null ? [d("div", { key: "icon", class: "q-radio__icon-container absolute-full flex flex-center no-wrap" }, [d(et, { class: "q-radio__icon", name: h.value })])] : [y];
    e.disable !== true && _(b, "unshift", " q-radio__native q-ma-none q-pa-none");
    const x = [d("div", { class: v.value, style: r.value, "aria-hidden": "true" }, b)];
    i.value !== null && x.push(i.value);
    const A = e.label !== void 0 ? qt(t.default, [e.label]) : Pe(t.default);
    return A !== void 0 && x.push(d("div", { class: "q-radio__label q-anchor--skip" }, A)), d("div", { ref: o, class: s.value, tabindex: m.value, role: "radio", "aria-label": e.label, "aria-checked": c.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: w, onKeydown: C, onKeyup: p }, x);
  };
} }), R1 = me({ name: "QToggle", props: { ...zm, icon: String, iconColor: String }, emits: Dm, setup(e) {
  function t(n, l) {
    const a = f(() => (n.value === true ? e.checkedIcon : l.value === true ? e.indeterminateIcon : e.uncheckedIcon) || e.icon), r = f(() => n.value === true ? e.iconColor : null);
    return () => [d("div", { class: "q-toggle__track" }), d("div", { class: "q-toggle__thumb absolute flex flex-center no-wrap" }, a.value !== void 0 ? [d(et, { name: a.value, color: r.value })] : void 0)];
  }
  return Nm("toggle", t);
} }), Ph = { radio: A1, checkbox: ir, toggle: R1 }, P1 = Object.keys(Ph);
function Xi(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (l) => l[n];
}
var L1 = me({ name: "QOptionGroup", props: { ...nt, modelValue: { required: true }, options: { type: Array, validator: (e) => e.every(Pt), default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], name: String, type: { type: String, default: "radio", validator: (e) => P1.includes(e) }, color: String, keepColor: Boolean, dense: Boolean, size: String, leftLabel: Boolean, inline: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { emit: t, slots: n }) {
  const { proxy: { $q: l } } = Se(), a = Array.isArray(e.modelValue);
  e.type === "radio" ? a === true && console.error("q-option-group: model should not be array") : a === false && console.error("q-option-group: model should be array in your case");
  const r = lt(e, l), o = f(() => Ph[e.type]), i = f(() => Xi(e.optionValue, "value")), u = f(() => Xi(e.optionLabel, "label")), c = f(() => Xi(e.optionDisable, "disable")), s = f(() => e.options.map((g) => ({ val: i.value(g), name: g.name === void 0 ? e.name : g.name, disable: e.disable || c.value(g), leftLabel: g.leftLabel === void 0 ? e.leftLabel : g.leftLabel, color: g.color === void 0 ? e.color : g.color, checkedIcon: g.checkedIcon, uncheckedIcon: g.uncheckedIcon, dark: g.dark === void 0 ? r.value : g.dark, size: g.size === void 0 ? e.size : g.size, dense: e.dense, keepColor: g.keepColor === void 0 ? e.keepColor : g.keepColor }))), v = f(() => "q-option-group q-gutter-x-sm" + (e.inline === true ? " q-option-group--inline" : "")), h = f(() => {
    const g = { role: "group" };
    return e.type === "radio" && (g.role = "radiogroup", e.disable === true && (g["aria-disabled"] = "true")), g;
  });
  function m(g) {
    t("update:modelValue", g);
  }
  return () => d("div", { class: v.value, ...h.value }, e.options.map((g, _) => {
    const w = n["label-" + _] !== void 0 ? () => n["label-" + _](g) : n.label !== void 0 ? () => n.label(g) : void 0;
    return d("div", [d(o.value, { label: w === void 0 ? u.value(g) : null, modelValue: e.modelValue, "onUpdate:modelValue": m, ...s.value[_] }, w)]);
  }));
} });
me({ name: "QPage", props: { padding: Boolean, styleFn: Function }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = Tt(Gl, ot);
  if (l === ot) return console.error("QPage needs to be a deep child of QLayout"), ot;
  if (Tt(om, ot) === ot) return console.error("QPage needs to be child of QPageContainer"), ot;
  const r = f(() => {
    const i = (l.header.space === true ? l.header.size : 0) + (l.footer.space === true ? l.footer.size : 0);
    if (typeof e.styleFn == "function") {
      const u = l.isContainer.value === true ? l.containerHeight.value : n.screen.height;
      return e.styleFn(i, u);
    }
    return { minHeight: l.isContainer.value === true ? l.containerHeight.value - i + "px" : n.screen.height === 0 ? i !== 0 ? `calc(100vh - ${i}px)` : "100vh" : n.screen.height - i + "px" };
  }), o = f(() => `q-page${e.padding === true ? " q-layout-padding" : ""}`);
  return () => d("main", { class: o.value, style: r.value }, Pe(t.default));
} });
var B1 = me({ name: "QPageContainer", setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = Tt(Gl, ot);
  if (l === ot) return console.error("QPageContainer needs to be child of QLayout"), ot;
  hn(om, true);
  const a = f(() => {
    const r = {};
    return l.header.space === true && (r.paddingTop = `${l.header.size}px`), l.right.space === true && (r[`padding${n.lang.rtl === true ? "Left" : "Right"}`] = `${l.right.size}px`), l.footer.space === true && (r.paddingBottom = `${l.footer.size}px`), l.left.space === true && (r[`padding${n.lang.rtl === true ? "Right" : "Left"}`] = `${l.left.size}px`), r;
  });
  return () => d("div", { class: "q-page-container", style: a.value }, Pe(t.default));
} }), Nu = { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, validator: (e) => e.length === 2 }, expand: Boolean };
function Lh() {
  const { props: e, proxy: { $q: t } } = Se(), n = Tt(Gl, ot);
  if (n === ot) return console.error("QPageSticky needs to be child of QLayout"), ot;
  const l = f(() => {
    const v = e.position;
    return { top: v.indexOf("top") !== -1, right: v.indexOf("right") !== -1, bottom: v.indexOf("bottom") !== -1, left: v.indexOf("left") !== -1, vertical: v === "top" || v === "bottom", horizontal: v === "left" || v === "right" };
  }), a = f(() => n.header.offset), r = f(() => n.right.offset), o = f(() => n.footer.offset), i = f(() => n.left.offset), u = f(() => {
    let v = 0, h = 0;
    const m = l.value, g = t.lang.rtl === true ? -1 : 1;
    m.top === true && a.value !== 0 ? h = `${a.value}px` : m.bottom === true && o.value !== 0 && (h = `${-o.value}px`), m.left === true && i.value !== 0 ? v = `${g * i.value}px` : m.right === true && r.value !== 0 && (v = `${-g * r.value}px`);
    const _ = { transform: `translate(${v}, ${h})` };
    return e.offset && (_.margin = `${e.offset[1]}px ${e.offset[0]}px`), m.vertical === true ? (i.value !== 0 && (_[t.lang.rtl === true ? "right" : "left"] = `${i.value}px`), r.value !== 0 && (_[t.lang.rtl === true ? "left" : "right"] = `${r.value}px`)) : m.horizontal === true && (a.value !== 0 && (_.top = `${a.value}px`), o.value !== 0 && (_.bottom = `${o.value}px`)), _;
  }), c = f(() => `q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand === true ? "expand" : "shrink"}`);
  function s(v) {
    const h = Pe(v.default);
    return d("div", { class: c.value, style: u.value }, e.expand === true ? h : [d("div", h)]);
  }
  return { $layout: n, getStickyContent: s };
}
me({ name: "QPageScroller", props: { ...Nu, scrollOffset: { type: Number, default: 1e3 }, reverse: Boolean, duration: { type: Number, default: 300 }, offset: { ...Nu.offset, default: () => [18, 18] } }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), { $layout: a, getStickyContent: r } = Lh(), o = W(null);
  let i;
  const u = f(() => a.height.value - (a.isContainer.value === true ? a.containerHeight.value : l.screen.height));
  function c() {
    return e.reverse === true ? u.value - a.scroll.value.position > e.scrollOffset : a.scroll.value.position > e.scrollOffset;
  }
  const s = W(c());
  function v() {
    const w = c();
    s.value !== w && (s.value = w);
  }
  function h() {
    e.reverse === true ? i === void 0 && (i = ge(u, v)) : m();
  }
  ge(a.scroll, v), ge(() => e.reverse, h);
  function m() {
    i !== void 0 && (i(), i = void 0);
  }
  function g(w) {
    const C = Vn(a.isContainer.value === true ? o.value : a.rootRef.value);
    pa(C, e.reverse === true ? a.height.value : 0, e.duration), n("click", w);
  }
  function _() {
    return s.value === true ? d("div", { ref: o, class: "q-page-scroller", onClick: g }, r(t)) : null;
  }
  return h(), Ke(m), () => d(Ft, { name: "q-transition--fade" }, _);
} });
me({ name: "QPageSticky", props: Nu, setup(e, { slots: t }) {
  const { getStickyContent: n } = Lh();
  return () => n(t);
} });
function Yr(e, t) {
  return [true, false].includes(e) ? e : t;
}
me({ name: "QPagination", props: { ...nt, modelValue: { type: Number, required: true }, min: { type: [Number, String], default: 1 }, max: { type: [Number, String], required: true }, maxPages: { type: [Number, String], default: 0, validator: (e) => (typeof e == "string" ? parseInt(e, 10) : e) >= 0 }, inputStyle: [Array, String, Object], inputClass: [Array, String, Object], size: String, disable: Boolean, input: Boolean, iconPrev: String, iconNext: String, iconFirst: String, iconLast: String, toFn: Function, boundaryLinks: { type: Boolean, default: null }, boundaryNumbers: { type: Boolean, default: null }, directionLinks: { type: Boolean, default: null }, ellipses: { type: Boolean, default: null }, ripple: { type: [Boolean, Object], default: null }, round: Boolean, rounded: Boolean, flat: Boolean, outline: Boolean, unelevated: Boolean, push: Boolean, glossy: Boolean, color: { type: String, default: "primary" }, textColor: String, activeDesign: { type: String, default: "", values: (e) => e === "" || wm.includes(e) }, activeColor: String, activeTextColor: String, gutter: String, padding: { type: String, default: "3px 2px" } }, emits: ["update:modelValue"], setup(e, { emit: t }) {
  const { proxy: n } = Se(), { $q: l } = n, a = lt(e, l), r = f(() => parseInt(e.min, 10)), o = f(() => parseInt(e.max, 10)), i = f(() => parseInt(e.maxPages, 10)), u = f(() => g.value + " / " + o.value), c = f(() => Yr(e.boundaryLinks, e.input)), s = f(() => Yr(e.boundaryNumbers, !e.input)), v = f(() => Yr(e.directionLinks, e.input)), h = f(() => Yr(e.ellipses, !e.input)), m = W(null), g = f({ get: () => e.modelValue, set: (E) => {
    if (E = parseInt(E, 10), e.disable || isNaN(E)) return;
    const k = ct(E, r.value, o.value);
    e.modelValue !== k && t("update:modelValue", k);
  } });
  ge(() => `${r.value}|${o.value}`, () => {
    g.value = e.modelValue;
  });
  const _ = f(() => "q-pagination row no-wrap items-center" + (e.disable === true ? " disabled" : "")), w = f(() => e.gutter in To ? `${To[e.gutter]}px` : e.gutter || null), C = f(() => w.value !== null ? `--q-pagination-gutter-parent:-${w.value};--q-pagination-gutter-child:${w.value}` : null), p = f(() => {
    const E = [e.iconFirst || l.iconSet.pagination.first, e.iconPrev || l.iconSet.pagination.prev, e.iconNext || l.iconSet.pagination.next, e.iconLast || l.iconSet.pagination.last];
    return l.lang.rtl === true ? E.reverse() : E;
  }), y = f(() => ({ "aria-disabled": e.disable === true ? "true" : "false", role: "navigation" })), b = f(() => ws(e, "flat")), x = f(() => ({ [b.value]: true, round: e.round, rounded: e.rounded, padding: e.padding, color: e.color, textColor: e.textColor, size: e.size, ripple: e.ripple !== null ? e.ripple : true })), A = f(() => {
    const E = { [b.value]: false };
    return e.activeDesign !== "" && (E[e.activeDesign] = true), E;
  }), F = f(() => ({ ...A.value, color: e.activeColor || e.color, textColor: e.activeTextColor || e.textColor })), N = f(() => {
    let E = Math.max(i.value, 1 + (h.value ? 2 : 0) + (s.value ? 2 : 0));
    const k = { pgFrom: r.value, pgTo: o.value, ellipsesStart: false, ellipsesEnd: false, boundaryStart: false, boundaryEnd: false, marginalStyle: { minWidth: `${Math.max(2, String(o.value).length)}em` } };
    return i.value && E < o.value - r.value + 1 && (E = 1 + Math.floor(E / 2) * 2, k.pgFrom = Math.max(r.value, Math.min(o.value - E + 1, e.modelValue - Math.floor(E / 2))), k.pgTo = Math.min(o.value, k.pgFrom + E - 1), s.value && (k.boundaryStart = true, k.pgFrom++), h.value && k.pgFrom > r.value + (s.value ? 1 : 0) && (k.ellipsesStart = true, k.pgFrom++), s.value && (k.boundaryEnd = true, k.pgTo--), h.value && k.pgTo < o.value - (s.value ? 1 : 0) && (k.ellipsesEnd = true, k.pgTo--)), k;
  });
  function P(E) {
    g.value = E;
  }
  function R(E) {
    g.value = g.value + E;
  }
  const H = f(() => {
    function E() {
      g.value = m.value, m.value = null;
    }
    return { "onUpdate:modelValue": (k) => {
      m.value = k;
    }, onKeyup: (k) => {
      yn(k, 13) === true && E();
    }, onBlur: E };
  });
  function q(E, k, U) {
    const L = { "aria-label": k, "aria-current": "false", ...x.value, ...E };
    return U === true && Object.assign(L, { "aria-current": "true", ...F.value }), k !== void 0 && (e.toFn !== void 0 ? L.to = e.toFn(k) : L.onClick = () => {
      P(k);
    }), d(Ze, L);
  }
  return Object.assign(n, { set: P, setByOffset: R }), () => {
    const E = [], k = [];
    let U;
    if (c.value === true && (E.push(q({ key: "bls", disable: e.disable || e.modelValue <= r.value, icon: p.value[0], "aria-label": l.lang.pagination.first }, r.value)), k.unshift(q({ key: "ble", disable: e.disable || e.modelValue >= o.value, icon: p.value[3], "aria-label": l.lang.pagination.last }, o.value))), v.value === true && (E.push(q({ key: "bdp", disable: e.disable || e.modelValue <= r.value, icon: p.value[1], "aria-label": l.lang.pagination.prev }, e.modelValue - 1)), k.unshift(q({ key: "bdn", disable: e.disable || e.modelValue >= o.value, icon: p.value[2], "aria-label": l.lang.pagination.next }, e.modelValue + 1))), e.input !== true) {
      U = [];
      const { pgFrom: L, pgTo: V, marginalStyle: D } = N.value;
      if (N.value.boundaryStart === true) {
        const te = r.value === e.modelValue;
        E.push(q({ key: "bns", style: D, disable: e.disable, label: r.value }, r.value, te));
      }
      if (N.value.boundaryEnd === true) {
        const te = o.value === e.modelValue;
        k.unshift(q({ key: "bne", style: D, disable: e.disable, label: o.value }, o.value, te));
      }
      N.value.ellipsesStart === true && E.push(q({ key: "bes", style: D, disable: e.disable, label: "\u2026", ripple: false }, L - 1)), N.value.ellipsesEnd === true && k.unshift(q({ key: "bee", style: D, disable: e.disable, label: "\u2026", ripple: false }, V + 1));
      for (let te = L; te <= V; te++) U.push(q({ key: `bpg${te}`, style: D, disable: e.disable, label: te }, te, te === e.modelValue));
    }
    return d("div", { class: _.value, ...y.value }, [d("div", { class: "q-pagination__content row no-wrap items-center", style: C.value }, [...E, e.input === true ? d(Eh, { class: "inline", style: { width: `${u.value.length / 1.5}em` }, type: "number", dense: true, value: m.value, disable: e.disable, dark: a.value, borderless: true, inputClass: e.inputClass, inputStyle: e.inputStyle, placeholder: u.value, min: r.value, max: o.value, ...H.value }) : d("div", { class: "q-pagination__middle row justify-center" }, U), ...k])]);
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
me({ name: "QParallax", props: { src: String, height: { type: Number, default: 500 }, speed: { type: Number, default: 1, validator: (e) => e >= 0 && e <= 1 }, scrollTarget: Xl, onScroll: Function }, setup(e, { slots: t, emit: n }) {
  const l = W(0), a = W(null), r = W(null), o = W(null);
  let i, u, c, s, v, h;
  ge(() => e.height, () => {
    i === true && g();
  }), ge(() => e.scrollTarget, () => {
    i === true && (p(), C());
  });
  let m = (y) => {
    l.value = y, e.onScroll !== void 0 && n("scroll", y);
  };
  function g() {
    let y, b, x;
    h === window ? (y = 0, x = b = window.innerHeight) : (y = qo(h).top, b = Sa(h), x = y + b);
    const A = qo(a.value).top, F = A + e.height;
    if (v !== void 0 || F > y && A < x) {
      const N = (x - A) / (e.height + b);
      _((c - e.height) * N * e.speed), m(N);
    }
  }
  let _ = (y) => {
    u.style.transform = `translate3d(-50%,${Math.round(y)}px,0)`;
  };
  function w() {
    c = u.naturalHeight || u.videoHeight || Sa(u), i === true && g();
  }
  function C() {
    i = true, h = Vn(a.value, e.scrollTarget), h.addEventListener("scroll", g, Gr), window.addEventListener("resize", s, Gr), g();
  }
  function p() {
    i === true && (i = false, h.removeEventListener("scroll", g, Gr), window.removeEventListener("resize", s, Gr), h = void 0, _.cancel(), m.cancel(), s.cancel());
  }
  return ft(() => {
    _ = Zi(_), m = Zi(m), s = Zi(w), u = t.media !== void 0 ? r.value.children[0] : o.value, u.onload = u.onloadstart = u.loadedmetadata = w, w(), u.style.display = "initial", window.IntersectionObserver !== void 0 ? (v = new IntersectionObserver((y) => {
      (y[0].isIntersecting === true ? C : p)();
    }), v.observe(a.value)) : C();
  }), Ke(() => {
    p(), v == null ? void 0 : v.disconnect(), u.onload = u.onloadstart = u.loadedmetadata = null;
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
me({ name: "QPopupEdit", props: { modelValue: { required: true }, title: String, buttons: Boolean, labelSet: String, labelCancel: String, color: { type: String, default: "primary" }, validate: { type: Function, default: () => true }, autoSave: Boolean, cover: { type: Boolean, default: true }, disable: Boolean }, emits: ["update:modelValue", "save", "cancel", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = W(null), o = W(""), i = W("");
  let u = false;
  const c = f(() => Ot({ initialValue: o.value, validate: e.validate, set: s, cancel: v, updatePosition: h }, "value", () => i.value, (b) => {
    i.value = b;
  }));
  function s() {
    e.validate(i.value) !== false && (m() === true && (n("save", i.value, o.value), n("update:modelValue", i.value)), g());
  }
  function v() {
    m() === true && n("cancel", i.value, o.value), g();
  }
  function h() {
    We(() => {
      r.value.updatePosition();
    });
  }
  function m() {
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
  function C() {
    u === false && m() === true && (e.autoSave === true && e.validate(i.value) === true ? (n("save", i.value, o.value), n("update:modelValue", i.value)) : n("cancel", i.value, o.value)), n("beforeHide");
  }
  function p() {
    n("hide");
  }
  function y() {
    const b = t.default !== void 0 ? [].concat(t.default(c.value)) : [];
    return e.title && b.unshift(d("div", { class: "q-dialog__title q-mt-sm q-mb-sm" }, e.title)), e.buttons === true && b.push(d("div", { class: "q-popup-edit__buttons row justify-center no-wrap" }, [d(Ze, { flat: true, color: e.color, label: e.labelCancel || a.lang.label.cancel, onClick: v }), d(Ze, { flat: true, color: e.color, label: e.labelSet || a.lang.label.set, onClick: s })])), b;
  }
  return Object.assign(l, { set: s, cancel: v, show(b) {
    var _a2;
    (_a2 = r.value) == null ? void 0 : _a2.show(b);
  }, hide(b) {
    var _a2;
    (_a2 = r.value) == null ? void 0 : _a2.hide(b);
  }, updatePosition: h }), () => {
    if (e.disable !== true) return d(ui, { ref: r, class: "q-popup-edit", cover: e.cover, onBeforeShow: _, onShow: w, onBeforeHide: C, onHide: p, onEscapeKey: v }, y);
  };
} });
me({ name: "QPopupProxy", props: { ...km, breakpoint: { type: [String, Number], default: 450 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: n, attrs: l }) {
  const { proxy: a } = Se(), { $q: r } = a, o = W(false), i = W(null), u = f(() => parseInt(e.breakpoint, 10)), { canShow: c } = xs({ showing: o });
  function s() {
    return r.screen.width < u.value || r.screen.height < u.value ? "dialog" : "menu";
  }
  const v = W(s()), h = f(() => v.value === "menu" ? { maxHeight: "99vh" } : {});
  ge(() => s(), (_) => {
    o.value !== true && (v.value = _);
  });
  function m(_) {
    o.value = true, n("show", _);
  }
  function g(_) {
    o.value = false, v.value = s(), n("hide", _);
  }
  return Object.assign(a, { show(_) {
    c(_) === true && i.value.show(_);
  }, hide(_) {
    i.value.hide(_);
  }, toggle(_) {
    i.value.toggle(_);
  } }), Ot(a, "currentComponent", () => ({ type: v.value, ref: i.value })), () => {
    const _ = { ref: i, ...h.value, ...l, onShow: m, onHide: g };
    let w;
    return v.value === "dialog" ? w = ci : (w = ui, Object.assign(_, { target: e.target, contextMenu: e.contextMenu, noParentEvent: true, separateClosePopup: true })), d(w, _, t.default);
  };
} });
var F1 = { xs: 2, sm: 4, md: 6, lg: 10, xl: 14 };
function Ad(e, t, n) {
  return { transform: t === true ? `translateX(${n.lang.rtl === true ? "-" : ""}100%) scale3d(${-e},1,1)` : `scale3d(${e},1,1)` };
}
var O1 = me({ name: "QLinearProgress", props: { ...nt, ...Jn, value: { type: Number, default: 0 }, buffer: Number, color: String, trackColor: String, reverse: Boolean, stripe: Boolean, indeterminate: Boolean, query: Boolean, rounded: Boolean, animationSpeed: { type: [String, Number], default: 2100 }, instantFeedback: Boolean }, setup(e, { slots: t }) {
  const { proxy: n } = Se(), l = lt(e, n.$q), a = el(e, F1), r = f(() => e.indeterminate === true || e.query === true), o = f(() => e.reverse !== e.query), i = f(() => ({ ...a.value !== null ? a.value : {}, "--q-linear-progress-speed": `${e.animationSpeed}ms` })), u = f(() => "q-linear-progress" + (e.color !== void 0 ? ` text-${e.color}` : "") + (e.reverse === true || e.query === true ? " q-linear-progress--reverse" : "") + (e.rounded === true ? " rounded-borders" : "")), c = f(() => Ad(e.buffer !== void 0 ? e.buffer : 1, o.value, n.$q)), s = f(() => `with${e.instantFeedback === true ? "out" : ""}-transition`), v = f(() => `q-linear-progress__track absolute-full q-linear-progress__track--${s.value} q-linear-progress__track--${l.value === true ? "dark" : "light"}` + (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")), h = f(() => Ad(r.value === true ? 1 : e.value, o.value, n.$q)), m = f(() => `q-linear-progress__model absolute-full q-linear-progress__model--${s.value} q-linear-progress__model--${r.value === true ? "in" : ""}determinate`), g = f(() => ({ width: `${e.value * 100}%` })), _ = f(() => `q-linear-progress__stripe absolute-${e.reverse === true ? "right" : "left"} q-linear-progress__stripe--${s.value}`);
  return () => {
    const w = [d("div", { class: v.value, style: c.value }), d("div", { class: m.value, style: h.value })];
    return e.stripe === true && r.value === false && w.push(d("div", { class: _.value, style: g.value })), d("div", { class: u.value, style: i.value, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuenow": e.indeterminate === true ? void 0 : e.value }, qt(t.default, w));
  };
} }), Rd = 40, Ji = 20;
me({ name: "QPullToRefresh", props: { color: String, bgColor: String, icon: String, noMouse: Boolean, disable: Boolean, scrollTarget: Xl }, emits: ["refresh"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = W("pull"), o = W(0), i = W(false), u = W(-40), c = W(false), s = W({}), v = f(() => ({ opacity: o.value, transform: `translateY(${u.value}px) rotate(${o.value * 360}deg)` })), h = f(() => "q-pull-to-refresh__puller row flex-center" + (c.value === true ? " q-pull-to-refresh__puller--animating" : "") + (e.bgColor !== void 0 ? ` bg-${e.bgColor}` : ""));
  function m(x) {
    if (x.isFinal === true) {
      i.value === true && (i.value = false, r.value === "pulled" ? (r.value = "refreshing", y({ pos: Ji }), w()) : r.value === "pull" && y({ pos: -40, ratio: 0 }));
      return;
    }
    if (c.value === true || r.value === "refreshing") return false;
    if (x.isFirst === true) {
      if (gl(C) !== 0 || x.direction !== "down") return i.value === true && (i.value = false, r.value = "pull", y({ pos: -40, ratio: 0 })), false;
      i.value = true;
      const { top: N, left: P } = l.$el.getBoundingClientRect();
      s.value = { top: N + "px", left: P + "px", width: window.getComputedStyle(l.$el).getPropertyValue("width") };
    }
    Vt(x.evt);
    const A = Math.min(140, Math.max(0, x.distance.y));
    u.value = A - Rd, o.value = ct(A / (Ji + Rd), 0, 1);
    const F = u.value > Ji ? "pulled" : "pull";
    r.value !== F && (r.value = F);
  }
  const g = f(() => {
    const x = { down: true };
    return e.noMouse !== true && (x.mouse = true), [[gn, m, void 0, x]];
  }), _ = f(() => `q-pull-to-refresh__content${i.value === true ? " no-pointer-events" : ""}`);
  function w() {
    n("refresh", () => {
      y({ pos: -40, ratio: 0 }, () => {
        r.value = "pull";
      });
    });
  }
  let C, p = null;
  function y({ pos: x, ratio: A }, F) {
    c.value = true, u.value = x, A !== void 0 && (o.value = A), p !== null && clearTimeout(p), p = setTimeout(() => {
      p = null, c.value = false, F == null ? void 0 : F();
    }, 300);
  }
  function b() {
    C = Vn(l.$el, e.scrollTarget);
  }
  return ge(() => e.scrollTarget, b), ft(b), Ke(() => {
    p !== null && clearTimeout(p);
  }), Object.assign(l, { trigger: w, updateScrollTarget: b }), () => {
    const x = [d("div", { class: _.value }, Pe(t.default)), d("div", { class: "q-pull-to-refresh__puller-container fixed row flex-center no-pointer-events z-top", style: s.value }, [d("div", { class: h.value, style: v.value }, [r.value !== "refreshing" ? d(et, { name: e.icon || a.iconSet.pullToRefresh.icon, color: e.color, size: "32px" }) : d(_n, { size: "24px", color: e.color })])])];
    return pn("div", { class: "q-pull-to-refresh" }, x, "main", e.disable === false, () => g.value);
  };
} });
var al = { MIN: 0, RANGE: 1, MAX: 2 };
me({ name: "QRange", props: { ...Km, modelValue: { type: Object, default: () => ({ min: null, max: null }), validator: (e) => "min" in e && "max" in e }, dragRange: Boolean, dragOnlyRange: Boolean, leftLabelColor: String, leftLabelTextColor: String, rightLabelColor: String, rightLabelTextColor: String, leftLabelValue: [String, Number], rightLabelValue: [String, Number], leftThumbColor: String, rightThumbColor: String }, emits: Wm, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = Se(), { state: l, methods: a } = Ym({ updateValue: N, updatePosition: R, getDragging: P, formAttrs: f(() => ({ type: "hidden", name: e.name, value: `${e.modelValue.min}|${e.modelValue.max}` })) }), r = W(null), o = W(0), i = W(0), u = W({ min: 0, max: 0 });
  function c() {
    u.value.min = e.modelValue.min === null ? l.innerMin.value : ct(e.modelValue.min, l.innerMin.value, l.innerMax.value), u.value.max = e.modelValue.max === null ? l.innerMax.value : ct(e.modelValue.max, l.innerMin.value, l.innerMax.value);
  }
  ge(() => `${e.modelValue.min}|${e.modelValue.max}|${l.innerMin.value}|${l.innerMax.value}`, c), c();
  const s = f(() => a.convertModelToRatio(u.value.min)), v = f(() => a.convertModelToRatio(u.value.max)), h = f(() => l.active.value === true ? o.value : s.value), m = f(() => l.active.value === true ? i.value : v.value), g = f(() => {
    const q = { [l.positionProp.value]: `${100 * h.value}%`, [l.sizeProp.value]: `${100 * (m.value - h.value)}%` };
    return e.selectionImg !== void 0 && (q.backgroundImage = `url(${e.selectionImg}) !important`), q;
  }), _ = f(() => {
    if (l.editable.value !== true) return {};
    if (n.platform.is.mobile === true) return { onClick: a.onMobileClick };
    const q = { onMousedown: a.onActivate };
    return (e.dragRange === true || e.dragOnlyRange === true) && Object.assign(q, { onFocus: () => {
      l.focus.value = "both";
    }, onBlur: a.onBlur, onKeydown: H, onKeyup: a.onKeyup }), q;
  });
  function w(q) {
    return n.platform.is.mobile !== true && l.editable.value === true && e.dragOnlyRange !== true ? { onFocus: () => {
      l.focus.value = q;
    }, onBlur: a.onBlur, onKeydown: H, onKeyup: a.onKeyup } : {};
  }
  const C = f(() => e.dragOnlyRange !== true ? l.tabindex.value : null), p = f(() => n.platform.is.mobile !== true && (e.dragRange || e.dragOnlyRange === true) ? l.tabindex.value : null), y = W(null), b = f(() => w("min")), x = a.getThumbRenderFn({ focusValue: "min", getNodeData: () => ({ ref: y, key: "tmin", ...b.value, tabindex: C.value }), ratio: h, label: f(() => e.leftLabelValue !== void 0 ? e.leftLabelValue : u.value.min), thumbColor: f(() => e.leftThumbColor || e.thumbColor || e.color), labelColor: f(() => e.leftLabelColor || e.labelColor), labelTextColor: f(() => e.leftLabelTextColor || e.labelTextColor) }), A = f(() => w("max")), F = a.getThumbRenderFn({ focusValue: "max", getNodeData: () => ({ ...A.value, key: "tmax", tabindex: C.value }), ratio: m, label: f(() => e.rightLabelValue !== void 0 ? e.rightLabelValue : u.value.max), thumbColor: f(() => e.rightThumbColor || e.thumbColor || e.color), labelColor: f(() => e.rightLabelColor || e.labelColor), labelTextColor: f(() => e.rightLabelTextColor || e.labelTextColor) });
  function N(q) {
    (u.value.min !== e.modelValue.min || u.value.max !== e.modelValue.max) && t("update:modelValue", { ...u.value }), q === true && t("change", { ...u.value });
  }
  function P(q) {
    const { left: E, top: k, width: U, height: L } = r.value.getBoundingClientRect(), V = e.dragOnlyRange === true ? 0 : e.vertical === true ? y.value.offsetHeight / (2 * L) : y.value.offsetWidth / (2 * U), D = { left: E, top: k, width: U, height: L, valueMin: u.value.min, valueMax: u.value.max, ratioMin: s.value, ratioMax: v.value }, te = a.getDraggingRatio(q, D);
    return e.dragOnlyRange !== true && te < D.ratioMin + V ? D.type = al.MIN : e.dragOnlyRange === true || te < D.ratioMax - V ? e.dragRange === true || e.dragOnlyRange === true ? (D.type = al.RANGE, Object.assign(D, { offsetRatio: te, offsetModel: a.convertRatioToModel(te), rangeValue: D.valueMax - D.valueMin, rangeRatio: D.ratioMax - D.ratioMin })) : D.type = D.ratioMax - te < te - D.ratioMin ? al.MAX : al.MIN : D.type = al.MAX, D;
  }
  function R(q, E = l.dragging.value) {
    let k;
    const U = a.getDraggingRatio(q, E), L = a.convertRatioToModel(U);
    switch (E.type) {
      case al.MIN:
        U <= E.ratioMax ? (k = { minR: U, maxR: E.ratioMax, min: L, max: E.valueMax }, l.focus.value = "min") : (k = { minR: E.ratioMax, maxR: U, min: E.valueMax, max: L }, l.focus.value = "max");
        break;
      case al.MAX:
        U >= E.ratioMin ? (k = { minR: E.ratioMin, maxR: U, min: E.valueMin, max: L }, l.focus.value = "max") : (k = { minR: U, maxR: E.ratioMin, min: L, max: E.valueMin }, l.focus.value = "min");
        break;
      case al.RANGE:
        const V = U - E.offsetRatio, D = ct(E.ratioMin + V, l.innerMinRatio.value, l.innerMaxRatio.value - E.rangeRatio), te = L - E.offsetModel, be = ct(E.valueMin + te, l.innerMin.value, l.innerMax.value - E.rangeValue);
        k = { minR: D, maxR: D + E.rangeRatio, min: l.roundValueFn.value(be), max: l.roundValueFn.value(be + E.rangeValue) }, l.focus.value = "both";
        break;
    }
    u.value = u.value.min === null || u.value.max === null ? { min: k.min || e.min, max: k.max || e.max } : { min: k.min, max: k.max }, e.snap !== true || e.step === 0 ? (o.value = k.minR, i.value = k.maxR) : (o.value = a.convertModelToRatio(u.value.min), i.value = a.convertModelToRatio(u.value.max));
  }
  function H(q) {
    if (Os.includes(q.keyCode) === false) return;
    je(q);
    const E = ([34, 33].includes(q.keyCode) ? 10 : 1) * l.keyStep.value, k = ([34, 37, 40].includes(q.keyCode) ? -1 : 1) * (l.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * E;
    if (l.focus.value === "both") {
      const U = u.value.max - u.value.min, L = ct(l.roundValueFn.value(u.value.min + k), l.innerMin.value, l.innerMax.value - U);
      u.value = { min: L, max: l.roundValueFn.value(L + U) };
    } else {
      if (l.focus.value === false) return;
      {
        const U = l.focus.value;
        u.value = { ...u.value, [U]: ct(l.roundValueFn.value(u.value[U] + k), U === "min" ? l.innerMin.value : u.value.min, U === "max" ? l.innerMax.value : u.value.max) };
      }
    }
    N();
  }
  return () => {
    const q = a.getContent(g, p, _, (E) => {
      E.push(x(), F());
    });
    return d("div", { ref: r, class: "q-range " + l.classes.value + (e.modelValue.min === null || e.modelValue.max === null ? " q-slider--no-value" : ""), ...l.attributes.value, "aria-valuenow": e.modelValue.min + "|" + e.modelValue.max }, q);
  };
} });
me({ name: "QRating", props: { ...Jn, ...wn, modelValue: { type: Number, required: true }, max: { type: [String, Number], default: 5 }, icon: [String, Array], iconHalf: [String, Array], iconSelected: [String, Array], iconAriaLabel: [String, Array], color: [String, Array], colorHalf: [String, Array], colorSelected: [String, Array], noReset: Boolean, noDimming: Boolean, readonly: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = el(e), r = Rr(e), o = xl(r), i = W(0);
  let u = {};
  const c = f(() => e.readonly !== true && e.disable !== true), s = f(() => `q-rating row inline items-center q-rating--${c.value === true ? "" : "non-"}editable` + (e.noDimming === true ? " q-rating--no-dimming" : "") + (e.disable === true ? " disabled" : "") + (e.color !== void 0 && Array.isArray(e.color) === false ? ` text-${e.color}` : "")), v = f(() => {
    const y = Array.isArray(e.icon) === true ? e.icon.length : 0, b = Array.isArray(e.iconSelected) === true ? e.iconSelected.length : 0, x = Array.isArray(e.iconHalf) === true ? e.iconHalf.length : 0, A = Array.isArray(e.color) === true ? e.color.length : 0, F = Array.isArray(e.colorSelected) === true ? e.colorSelected.length : 0, N = Array.isArray(e.colorHalf) === true ? e.colorHalf.length : 0;
    return { iconLen: y, icon: y > 0 ? e.icon[y - 1] : e.icon, selIconLen: b, selIcon: b > 0 ? e.iconSelected[b - 1] : e.iconSelected, halfIconLen: x, halfIcon: x > 0 ? e.iconHalf[b - 1] : e.iconHalf, colorLen: A, color: A > 0 ? e.color[A - 1] : e.color, selColorLen: F, selColor: F > 0 ? e.colorSelected[F - 1] : e.colorSelected, halfColorLen: N, halfColor: N > 0 ? e.colorHalf[N - 1] : e.colorHalf };
  }), h = f(() => {
    if (typeof e.iconAriaLabel == "string") {
      const y = e.iconAriaLabel.length !== 0 ? `${e.iconAriaLabel} ` : "";
      return (b) => `${y}${b}`;
    }
    if (Array.isArray(e.iconAriaLabel) === true) {
      const y = e.iconAriaLabel.length;
      if (y > 0) return (b) => e.iconAriaLabel[Math.min(b, y) - 1];
    }
    return (y, b) => `${b} ${y}`;
  }), m = f(() => {
    const y = [], b = v.value, x = Math.ceil(e.modelValue), A = c.value === true ? 0 : null, F = e.iconHalf === void 0 || x === e.modelValue ? -1 : x;
    for (let N = 1; N <= e.max; N++) {
      const P = i.value === 0 && e.modelValue >= N || i.value > 0 && i.value >= N, R = F === N && i.value < N, H = i.value > 0 && (R === true ? x : e.modelValue) >= N && i.value < N, q = R === true ? N <= b.halfColorLen ? e.colorHalf[N - 1] : b.halfColor : b.selColor !== void 0 && P === true ? N <= b.selColorLen ? e.colorSelected[N - 1] : b.selColor : N <= b.colorLen ? e.color[N - 1] : b.color, E = (R === true ? N <= b.halfIconLen ? e.iconHalf[N - 1] : b.halfIcon : b.selIcon !== void 0 && (P === true || H === true) ? N <= b.selIconLen ? e.iconSelected[N - 1] : b.selIcon : N <= b.iconLen ? e.icon[N - 1] : b.icon) || l.iconSet.rating.icon;
      y.push({ name: (R === true ? N <= b.halfIconLen ? e.iconHalf[N - 1] : b.halfIcon : b.selIcon !== void 0 && (P === true || H === true) ? N <= b.selIconLen ? e.iconSelected[N - 1] : b.selIcon : N <= b.iconLen ? e.icon[N - 1] : b.icon) || l.iconSet.rating.icon, attrs: { tabindex: A, role: "radio", "aria-checked": e.modelValue === N ? "true" : "false", "aria-label": h.value(N, E) }, iconClass: "q-rating__icon" + (P === true || R === true ? " q-rating__icon--active" : "") + (H === true ? " q-rating__icon--exselected" : "") + (i.value === N ? " q-rating__icon--hovered" : "") + (q !== void 0 ? ` text-${q}` : "") });
    }
    return y;
  }), g = f(() => {
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
  function C(y, b) {
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
    return m.value.forEach(({ iconClass: b, name: x, attrs: A }, F) => {
      const N = F + 1;
      y.push(d("div", { key: N, ref: (P) => {
        u[`rt${N}`] = P;
      }, class: "q-rating__icon-container flex flex-center", ...A, onClick() {
        _(N);
      }, onMouseover() {
        w(N);
      }, onMouseout: p, onFocus() {
        w(N);
      }, onBlur: p, onKeyup(P) {
        C(P, N);
      } }, qt(t[`tip-${N}`], [d(et, { class: b, name: x })])));
    }), e.name !== void 0 && e.disable !== true && o(y, "push"), d("div", { class: s.value, style: a.value, ...g.value }, y);
  };
} });
me({ name: "QResponsive", props: Ds, setup(e, { slots: t }) {
  const n = Ns(e);
  return () => d("div", { class: "q-responsive" }, [d("div", { class: "q-responsive__filler overflow-hidden" }, [d("div", { style: n.value })]), d("div", { class: "q-responsive__content absolute-full fit" }, Pe(t.default))]);
} });
var V1 = me({ props: ["store", "barStyle", "verticalBarStyle", "horizontalBarStyle"], setup(e) {
  return () => [d("div", { class: e.store.scroll.vertical.barClass.value, style: [e.barStyle, e.verticalBarStyle], "aria-hidden": "true", onMousedown: e.store.onVerticalMousedown }), d("div", { class: e.store.scroll.horizontal.barClass.value, style: [e.barStyle, e.horizontalBarStyle], "aria-hidden": "true", onMousedown: e.store.onHorizontalMousedown }), sn(d("div", { ref: e.store.scroll.vertical.ref, class: e.store.scroll.vertical.thumbClass.value, style: e.store.scroll.vertical.style.value, "aria-hidden": "true" }), e.store.thumbVertDir), sn(d("div", { ref: e.store.scroll.horizontal.ref, class: e.store.scroll.horizontal.thumbClass.value, style: e.store.scroll.horizontal.style.value, "aria-hidden": "true" }), e.store.thumbHorizDir)];
} }), Pd = ["vertical", "horizontal"], eu = { vertical: { offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y" }, horizontal: { offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x" } }, Ld = { prevent: true, mouse: true, mouseAllDir: true }, Bd = (e) => e >= 250 ? 50 : Math.ceil(e / 5), I1 = me({ name: "QScrollArea", props: { ...nt, thumbStyle: Object, verticalThumbStyle: Object, horizontalThumbStyle: Object, barStyle: [Array, String, Object], verticalBarStyle: [Array, String, Object], horizontalBarStyle: [Array, String, Object], verticalOffset: { type: Array, default: [0, 0] }, horizontalOffset: { type: Array, default: [0, 0] }, contentStyle: [Array, String, Object], contentActiveStyle: [Array, String, Object], delay: { type: [String, Number], default: 1e3 }, visible: { type: Boolean, default: null }, tabindex: [String, Number], onScroll: Function }, setup(e, { slots: t, emit: n }) {
  const l = W(false), a = W(false), r = W(false), o = { vertical: W(0), horizontal: W(0) }, i = { vertical: { ref: W(null), position: W(0), size: W(0) }, horizontal: { ref: W(null), position: W(0), size: W(0) } }, { proxy: u } = Se(), c = lt(e, u.$q);
  let s = null, v;
  const h = W(null), m = f(() => "q-scrollarea" + (c.value === true ? " q-scrollarea--dark" : ""));
  Object.assign(o, { verticalInner: f(() => o.vertical.value - e.verticalOffset[0] - e.verticalOffset[1]), horizontalInner: f(() => o.horizontal.value - e.horizontalOffset[0] - e.horizontalOffset[1]) }), i.vertical.percentage = f(() => {
    const k = i.vertical.size.value - o.vertical.value;
    if (k <= 0) return 0;
    const U = ct(i.vertical.position.value / k, 0, 1);
    return Math.round(U * 1e4) / 1e4;
  }), i.vertical.thumbHidden = f(() => (e.visible === null ? r.value : e.visible) !== true && l.value === false && a.value === false || i.vertical.size.value <= o.vertical.value + 1), i.vertical.thumbStart = f(() => e.verticalOffset[0] + i.vertical.percentage.value * (o.verticalInner.value - i.vertical.thumbSize.value)), i.vertical.thumbSize = f(() => Math.round(ct(o.verticalInner.value * o.verticalInner.value / i.vertical.size.value, Bd(o.verticalInner.value), o.verticalInner.value))), i.vertical.style = f(() => ({ ...e.thumbStyle, ...e.verticalThumbStyle, top: `${i.vertical.thumbStart.value}px`, height: `${i.vertical.thumbSize.value}px`, right: `${e.horizontalOffset[1]}px` })), i.vertical.thumbClass = f(() => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (i.vertical.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), i.vertical.barClass = f(() => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (i.vertical.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : "")), i.horizontal.percentage = f(() => {
    const k = i.horizontal.size.value - o.horizontal.value;
    if (k <= 0) return 0;
    const U = ct(Math.abs(i.horizontal.position.value) / k, 0, 1);
    return Math.round(U * 1e4) / 1e4;
  }), i.horizontal.thumbHidden = f(() => (e.visible === null ? r.value : e.visible) !== true && l.value === false && a.value === false || i.horizontal.size.value <= o.horizontal.value + 1), i.horizontal.thumbStart = f(() => e.horizontalOffset[0] + i.horizontal.percentage.value * (o.horizontalInner.value - i.horizontal.thumbSize.value)), i.horizontal.thumbSize = f(() => Math.round(ct(o.horizontalInner.value * o.horizontalInner.value / i.horizontal.size.value, Bd(o.horizontalInner.value), o.horizontalInner.value))), i.horizontal.style = f(() => ({ ...e.thumbStyle, ...e.horizontalThumbStyle, [u.$q.lang.rtl === true ? "right" : "left"]: `${i.horizontal.thumbStart.value}px`, width: `${i.horizontal.thumbSize.value}px`, bottom: `${e.verticalOffset[1]}px` })), i.horizontal.thumbClass = f(() => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (i.horizontal.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), i.horizontal.barClass = f(() => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (i.horizontal.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : ""));
  const g = f(() => i.vertical.thumbHidden.value === true && i.horizontal.thumbHidden.value === true ? e.contentStyle : e.contentActiveStyle);
  function _() {
    const k = {};
    return Pd.forEach((U) => {
      const L = i[U];
      Object.assign(k, { [U + "Position"]: L.position.value, [U + "Percentage"]: L.percentage.value, [U + "Size"]: L.size.value, [U + "ContainerSize"]: o[U].value, [U + "ContainerInnerSize"]: o[U + "Inner"].value });
    }), k;
  }
  const w = Ea(() => {
    const k = _();
    k.ref = u, n("scroll", k);
  }, 0);
  function C(k, U, L) {
    if (Pd.includes(k) === false) {
      console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
      return;
    }
    (k === "vertical" ? pa : Bi)(h.value, U, L);
  }
  function p({ height: k, width: U }) {
    let L = false;
    o.vertical.value !== k && (o.vertical.value = k, L = true), o.horizontal.value !== U && (o.horizontal.value = U, L = true), L === true && F();
  }
  function y({ position: k }) {
    let U = false;
    i.vertical.position.value !== k.top && (i.vertical.position.value = k.top, U = true), i.horizontal.position.value !== k.left && (i.horizontal.position.value = k.left, U = true), U === true && F();
  }
  function b({ height: k, width: U }) {
    i.horizontal.size.value !== U && (i.horizontal.size.value = U, F()), i.vertical.size.value !== k && (i.vertical.size.value = k, F());
  }
  function x(k, U) {
    const L = i[U];
    if (k.isFirst === true) {
      if (L.thumbHidden.value === true) return;
      v = L.position.value, a.value = true;
    } else if (a.value !== true) return;
    k.isFinal === true && (a.value = false);
    const V = eu[U], D = (L.size.value - o[U].value) / (o[U + "Inner"].value - L.thumbSize.value), te = k.distance[V.dist], be = v + (k.direction === V.dir ? 1 : -1) * te * D;
    N(be, U);
  }
  function A(k, U) {
    const L = i[U];
    if (L.thumbHidden.value !== true) {
      const V = U === "vertical" ? e.verticalOffset[0] : e.horizontalOffset[0], D = k[eu[U].offset] - V, te = L.thumbStart.value - V;
      if (D < te || D > te + L.thumbSize.value) {
        const be = D - L.thumbSize.value / 2, K = ct(be / (o[U + "Inner"].value - L.thumbSize.value), 0, 1);
        N(K * Math.max(0, L.size.value - o[U].value), U);
      }
      L.ref.value !== null && L.ref.value.dispatchEvent(new MouseEvent(k.type, k));
    }
  }
  function F() {
    l.value = true, s !== null && clearTimeout(s), s = setTimeout(() => {
      s = null, l.value = false;
    }, e.delay), e.onScroll !== void 0 && w();
  }
  function N(k, U) {
    h.value[eu[U].scroll] = k;
  }
  let P = null;
  function R() {
    P !== null && clearTimeout(P), P = setTimeout(() => {
      P = null, r.value = true;
    }, u.$q.platform.is.ios ? 50 : 0);
  }
  function H() {
    P !== null && (clearTimeout(P), P = null), r.value = false;
  }
  let q = null;
  ge(() => u.$q.lang.rtl, (k) => {
    h.value !== null && Bi(h.value, Math.abs(i.horizontal.position.value) * (k === true ? -1 : 1));
  }), On(() => {
    q = { top: i.vertical.position.value, left: i.horizontal.position.value };
  }), wl(() => {
    if (q === null) return;
    const k = h.value;
    k !== null && (Bi(k, q.left), pa(k, q.top));
  }), Ke(w.cancel), Object.assign(u, { getScrollTarget: () => h.value, getScroll: _, getScrollPosition: () => ({ top: i.vertical.position.value, left: i.horizontal.position.value }), getScrollPercentage: () => ({ top: i.vertical.percentage.value, left: i.horizontal.percentage.value }), setScrollPosition: C, setScrollPercentage(k, U, L) {
    C(k, U * (i[k].size.value - o[k].value) * (k === "horizontal" && u.$q.lang.rtl === true ? -1 : 1), L);
  } });
  const E = { scroll: i, thumbVertDir: [[gn, (k) => {
    x(k, "vertical");
  }, void 0, { vertical: true, ...Ld }]], thumbHorizDir: [[gn, (k) => {
    x(k, "horizontal");
  }, void 0, { horizontal: true, ...Ld }]], onVerticalMousedown(k) {
    A(k, "vertical");
  }, onHorizontalMousedown(k) {
    A(k, "horizontal");
  } };
  return () => d("div", { class: m.value, onMouseenter: R, onMouseleave: H }, [d("div", { ref: h, class: "q-scrollarea__container scroll relative-position fit hide-scrollbar", tabindex: e.tabindex !== void 0 ? e.tabindex : void 0 }, [d("div", { class: "q-scrollarea__content absolute", style: g.value }, qt(t.default, [d(Ul, { debounce: 0, onResize: b })])), d(Rh, { axis: "both", onScroll: y })]), d(Ul, { debounce: 0, onResize: p }), d(V1, { store: E, barStyle: e.barStyle, verticalBarStyle: e.verticalBarStyle, horizontalBarStyle: e.horizontalBarStyle })]);
} }), Cn = 1e3, z1 = ["start", "center", "end", "start-force", "center-force", "end-force"], Bh = Array.prototype.filter, D1 = __QUASAR_SSR__ || window.getComputedStyle(document.body).overflowAnchor === void 0 ? St : function(e, t) {
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
  if (a === true ? (e === window ? (s.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, s.scrollViewSize += document.documentElement.clientWidth) : (s.scrollStart = u.scrollLeft, s.scrollViewSize += u.clientWidth), s.scrollMaxSize = u.scrollWidth, r === true && (s.scrollStart = (Sr === true ? s.scrollMaxSize - s.scrollViewSize : 0) - s.scrollStart)) : (e === window ? (s.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0, s.scrollViewSize += document.documentElement.clientHeight) : (s.scrollStart = u.scrollTop, s.scrollViewSize += u.clientHeight), s.scrollMaxSize = u.scrollHeight), n !== null) for (let v = n.previousElementSibling; v !== null; v = v.previousElementSibling) v.classList.contains("q-virtual-scroll--skip") === false && (s.offsetStart += v[c]);
  if (l !== null) for (let v = l.nextElementSibling; v !== null; v = v.nextElementSibling) v.classList.contains("q-virtual-scroll--skip") === false && (s.offsetEnd += v[c]);
  if (t !== e) {
    const v = u.getBoundingClientRect(), h = t.getBoundingClientRect();
    a === true ? (s.offsetStart += h.left - v.left, s.offsetEnd -= h.width) : (s.offsetStart += h.top - v.top, s.offsetEnd -= h.height), e !== window && (s.offsetStart += s.scrollStart), s.offsetEnd += s.scrollMaxSize - s.offsetStart;
  }
  return s;
}
function Fd(e, t, n, l) {
  t === "end" && (t = (e === window ? document.body : e)[n === true ? "scrollWidth" : "scrollHeight"]), e === window ? n === true ? (l === true && (t = (Sr === true ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - t), window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t) : n === true ? (l === true && (t = (Sr === true ? e.scrollWidth - e.offsetWidth : 0) - t), e.scrollLeft = t) : e.scrollTop = t;
}
function za(e, t, n, l) {
  if (n >= l) return 0;
  const a = t.length, r = Math.floor(n / Cn), o = Math.floor((l - 1) / Cn) + 1;
  let i = e.slice(r, o).reduce(_a, 0);
  return n % Cn !== 0 && (i -= t.slice(r * Cn, n).reduce(_a, 0)), l % Cn !== 0 && l !== a && (i -= t.slice(l, o * Cn).reduce(_a, 0)), i;
}
var Fh = { virtualScrollSliceSize: { type: [Number, String], default: 10 }, virtualScrollSliceRatioBefore: { type: [Number, String], default: 1 }, virtualScrollSliceRatioAfter: { type: [Number, String], default: 1 }, virtualScrollItemSize: { type: [Number, String], default: 24 }, virtualScrollStickySizeStart: { type: [Number, String], default: 0 }, virtualScrollStickySizeEnd: { type: [Number, String], default: 0 }, tableColspan: [Number, String] }, Oh = Object.keys(Fh), Hu = { virtualScrollHorizontal: Boolean, onVirtualScroll: Function, ...Fh };
function Vh({ virtualScrollLength: e, getVirtualScrollTarget: t, getVirtualScrollEl: n, virtualScrollItemSizeComputed: l }) {
  const a = Se(), { props: r, emit: o, proxy: i } = a, { $q: u } = i;
  let c, s, v, h = [], m;
  const g = W(0), _ = W(0), w = W({}), C = W(null), p = W(null), y = W(null), b = W({ from: 0, to: 0 }), x = f(() => r.tableColspan !== void 0 ? r.tableColspan : 100);
  l === void 0 && (l = f(() => r.virtualScrollItemSize));
  const A = f(() => l.value + ";" + r.virtualScrollHorizontal), F = f(() => A.value + ";" + r.virtualScrollSliceRatioBefore + ";" + r.virtualScrollSliceRatioAfter);
  ge(F, () => {
    L();
  }), ge(A, N);
  function N() {
    U(s, true);
  }
  function P(K) {
    U(K === void 0 ? s : K);
  }
  function R(K, T) {
    const Z = t();
    if (Z == null || Z.nodeType === 8) return;
    const O = tu(Z, n(), C.value, p.value, r.virtualScrollHorizontal, u.lang.rtl, r.virtualScrollStickySizeStart, r.virtualScrollStickySizeEnd);
    v !== O.scrollViewSize && L(O.scrollViewSize), q(Z, O, Math.min(e.value - 1, Math.max(0, parseInt(K, 10) || 0)), 0, z1.indexOf(T) !== -1 ? T : s !== -1 && K > s ? "end" : "start");
  }
  function H() {
    const K = t();
    if (K == null || K.nodeType === 8) return;
    const T = tu(K, n(), C.value, p.value, r.virtualScrollHorizontal, u.lang.rtl, r.virtualScrollStickySizeStart, r.virtualScrollStickySizeEnd), Z = e.value - 1, O = T.scrollMaxSize - T.offsetStart - T.offsetEnd - _.value;
    if (c === T.scrollStart) return;
    if (T.scrollMaxSize <= 0) {
      q(K, T, 0, 0);
      return;
    }
    v !== T.scrollViewSize && L(T.scrollViewSize), E(b.value.from);
    const oe = Math.floor(T.scrollMaxSize - Math.max(T.scrollViewSize, T.offsetEnd) - Math.min(m[Z], T.scrollViewSize / 2));
    if (oe > 0 && Math.ceil(T.scrollStart) >= oe) {
      q(K, T, Z, T.scrollMaxSize - T.offsetEnd - h.reduce(_a, 0));
      return;
    }
    let B = 0, $ = T.scrollStart - T.offsetStart, ee = $;
    if ($ <= O && $ + T.scrollViewSize >= g.value) $ -= g.value, B = b.value.from, ee = $;
    else for (let I = 0; $ >= h[I] && B < Z; I++) $ -= h[I], B += Cn;
    for (; $ > 0 && B < Z; ) $ -= m[B], $ > -T.scrollViewSize ? (B++, ee = $) : ee = m[B] + $;
    q(K, T, B, ee);
  }
  function q(K, T, Z, O, oe) {
    const B = typeof oe == "string" && oe.indexOf("-force") !== -1, $ = B === true ? oe.replace("-force", "") : oe, ee = $ !== void 0 ? $ : "start";
    let I = Math.max(0, Z - w.value[ee]), ae = I + w.value.total;
    ae > e.value && (ae = e.value, I = Math.max(0, ae - w.value.total)), c = T.scrollStart;
    const we = I !== b.value.from || ae !== b.value.to;
    if (we === false && $ === void 0) {
      D(Z);
      return;
    }
    const { activeElement: S } = document, M = y.value;
    we === true && M !== null && M !== S && M.contains(S) === true && (M.addEventListener("focusout", k), setTimeout(() => {
      M == null ? void 0 : M.removeEventListener("focusout", k);
    })), D1(M, Z - I);
    const j = $ !== void 0 ? m.slice(I, Z).reduce(_a, 0) : 0;
    if (we === true) {
      const J = ae >= b.value.from && I <= b.value.to ? b.value.to : ae;
      b.value = { from: I, to: J }, g.value = za(h, m, 0, I), _.value = za(h, m, ae, e.value), requestAnimationFrame(() => {
        b.value.to !== ae && c === T.scrollStart && (b.value = { from: b.value.from, to: ae }, _.value = za(h, m, ae, e.value));
      });
    }
    requestAnimationFrame(() => {
      if (c !== T.scrollStart) return;
      we === true && E(I);
      const J = m.slice(I, Z).reduce(_a, 0), ne = J + T.offsetStart + g.value, Y = ne + m[Z];
      let fe = ne + O;
      if ($ !== void 0) {
        const he = J - j, ve = T.scrollStart + he;
        fe = B !== true && ve < ne && Y < ve + T.scrollViewSize ? ve : $ === "end" ? Y - T.scrollViewSize : ne - ($ === "start" ? 0 : Math.round((T.scrollViewSize - m[Z]) / 2));
      }
      c = fe, Fd(K, fe, r.virtualScrollHorizontal, u.lang.rtl), D(Z);
    });
  }
  function E(K) {
    const T = y.value;
    if (T) {
      const Z = Bh.call(T.children, (I) => I.classList && I.classList.contains("q-virtual-scroll--skip") === false), O = Z.length, oe = r.virtualScrollHorizontal === true ? (I) => I.getBoundingClientRect().width : (I) => I.offsetHeight;
      let B = K, $, ee;
      for (let I = 0; I < O; ) {
        for ($ = oe(Z[I]), I++; I < O && Z[I].classList.contains("q-virtual-scroll--with-prev") === true; ) $ += oe(Z[I]), I++;
        ee = $ - m[B], ee !== 0 && (m[B] += ee, h[Math.floor(B / Cn)] += ee), B++;
      }
    }
  }
  function k() {
    var _a2;
    (_a2 = y.value) == null ? void 0 : _a2.focus();
  }
  function U(K, T) {
    const Z = 1 * l.value;
    (T === true || Array.isArray(m) === false) && (m = []);
    const O = m.length;
    m.length = e.value;
    for (let B = e.value - 1; B >= O; B--) m[B] = Z;
    const oe = Math.floor((e.value - 1) / Cn);
    h = [];
    for (let B = 0; B <= oe; B++) {
      let $ = 0;
      const ee = Math.min((B + 1) * Cn, e.value);
      for (let I = B * Cn; I < ee; I++) $ += m[I];
      h.push($);
    }
    s = -1, c = void 0, g.value = za(h, m, 0, b.value.from), _.value = za(h, m, b.value.to, e.value), K >= 0 ? (E(b.value.from), We(() => {
      R(K);
    })) : te();
  }
  function L(K) {
    if (K === void 0 && typeof window < "u") {
      const $ = t();
      $ != null && $.nodeType !== 8 && (K = tu($, n(), C.value, p.value, r.virtualScrollHorizontal, u.lang.rtl, r.virtualScrollStickySizeStart, r.virtualScrollStickySizeEnd).scrollViewSize);
    }
    v = K;
    const T = parseFloat(r.virtualScrollSliceRatioBefore) || 0, Z = parseFloat(r.virtualScrollSliceRatioAfter) || 0, O = 1 + T + Z, oe = K === void 0 || K <= 0 ? 1 : Math.ceil(K / l.value), B = Math.max(1, oe, Math.ceil((r.virtualScrollSliceSize > 0 ? r.virtualScrollSliceSize : 10) / O));
    w.value = { total: Math.ceil(B * O), start: Math.ceil(B * T), center: Math.ceil(B * (0.5 + T)), end: Math.ceil(B * (1 + T)), view: oe };
  }
  function V(K, T) {
    const Z = r.virtualScrollHorizontal === true ? "width" : "height", O = { ["--q-virtual-scroll-item-" + Z]: l.value + "px" };
    return [K === "tbody" ? d(K, { class: "q-virtual-scroll__padding", key: "before", ref: C }, [d("tr", [d("td", { style: { [Z]: `${g.value}px`, ...O }, colspan: x.value })])]) : d(K, { class: "q-virtual-scroll__padding", key: "before", ref: C, style: { [Z]: `${g.value}px`, ...O } }), d(K, { class: "q-virtual-scroll__content", key: "content", ref: y, tabindex: -1 }, T.flat()), K === "tbody" ? d(K, { class: "q-virtual-scroll__padding", key: "after", ref: p }, [d("tr", [d("td", { style: { [Z]: `${_.value}px`, ...O }, colspan: x.value })])]) : d(K, { class: "q-virtual-scroll__padding", key: "after", ref: p, style: { [Z]: `${_.value}px`, ...O } })];
  }
  function D(K) {
    s !== K && (r.onVirtualScroll !== void 0 && o("virtualScroll", { index: K, from: b.value.from, to: b.value.to - 1, direction: K < s ? "decrease" : "increase", ref: i }), s = K);
  }
  L();
  const te = Ea(H, u.platform.is.ios === true ? 120 : 35);
  Yo(() => {
    L();
  });
  let be = false;
  return On(() => {
    be = true;
  }), wl(() => {
    if (be !== true) return;
    const K = t();
    c !== void 0 && K !== void 0 && K !== null && K.nodeType !== 8 ? Fd(K, c, r.virtualScrollHorizontal, u.lang.rtl) : R(s);
  }), __QUASAR_SSR__ || Ke(() => {
    te.cancel();
  }), Object.assign(i, { scrollTo: R, reset: N, refresh: P }), { virtualScrollSliceRange: b, virtualScrollSliceSizeComputed: w, setVirtualScrollSize: L, onVirtualScrollEvt: te, localResetVirtualScroll: U, padVirtualScroll: V, scrollTo: R, reset: N, refresh: P };
}
var Od = (e) => ["add", "add-unique", "toggle"].includes(e), N1 = ".*+?^${}()|[]\\", H1 = Object.keys(di);
function nu(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (l) => l !== null && typeof l == "object" && n in l ? l[n] : l;
}
var j1 = me({ name: "QSelect", inheritAttrs: false, props: { ...Hu, ...wn, ...di, modelValue: { required: true }, multiple: Boolean, displayValue: [String, Number], displayValueHtml: Boolean, dropdownIcon: String, options: { type: Array, default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], hideSelected: Boolean, hideDropdownIcon: Boolean, fillInput: Boolean, maxValues: [Number, String], optionsDense: Boolean, optionsDark: { type: Boolean, default: null }, optionsSelectedClass: String, optionsHtml: Boolean, optionsCover: Boolean, menuShrink: Boolean, menuAnchor: String, menuSelf: String, menuOffset: Array, popupContentClass: String, popupContentStyle: [String, Array, Object], popupNoRouteDismiss: Boolean, useInput: Boolean, useChips: Boolean, newValueMode: { type: String, validator: Od }, mapOptions: Boolean, emitValue: Boolean, disableTabSelection: Boolean, inputDebounce: { type: [Number, String], default: 500 }, inputClass: [Array, String, Object], inputStyle: [Array, String, Object], tabindex: { type: [String, Number], default: 0 }, autocomplete: String, transitionShow: {}, transitionHide: {}, transitionDuration: {}, behavior: { type: String, validator: (e) => ["default", "menu", "dialog"].includes(e), default: "default" }, virtualScrollItemSize: Hu.virtualScrollItemSize.type, onNewValue: Function, onFilter: Function }, emits: [...fi, "add", "remove", "inputValue", "keyup", "keypress", "keydown", "popupShow", "popupHide", "filterAbort"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = W(false), o = W(false), i = W(-1), u = W(""), c = W(false), s = W(false);
  let v = null, h = null, m, g, _, w = null, C, p, y, b;
  const x = W(null), A = W(null), F = W(null), N = W(null), P = W(null), R = Ts(e), H = Mh(se), q = f(() => Array.isArray(e.options) ? e.options.length : 0), E = f(() => e.virtualScrollItemSize === void 0 ? e.optionsDense === true ? 24 : 48 : e.virtualScrollItemSize), { virtualScrollSliceRange: k, virtualScrollSliceSizeComputed: U, localResetVirtualScroll: L, padVirtualScroll: V, onVirtualScrollEvt: D, scrollTo: te, setVirtualScrollSize: be } = Vh({ virtualScrollLength: q, getVirtualScrollTarget: jt, getVirtualScrollEl: Ct, virtualScrollItemSizeComputed: E }), K = vi(), T = f(() => {
    const X = e.mapOptions === true && e.multiple !== true, Ae = e.modelValue !== void 0 && (e.modelValue !== null || X === true) ? e.multiple === true && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
    if (e.mapOptions === true && Array.isArray(e.options) === true) {
      const Re = e.mapOptions === true && m !== void 0 ? m : [], tt = Ae.map((gt) => re(gt, Re));
      return e.modelValue === null && X === true ? tt.filter((gt) => gt !== null) : tt;
    }
    return Ae;
  }), Z = f(() => {
    const X = {};
    return H1.forEach((Ae) => {
      const Re = e[Ae];
      Re !== void 0 && (X[Ae] = Re);
    }), X;
  }), O = f(() => e.optionsDark === null ? K.isDark.value : e.optionsDark), oe = f(() => Kl(T.value)), B = f(() => {
    let X = "q-field__input q-placeholder col";
    return e.hideSelected === true || T.value.length === 0 ? [X, e.inputClass] : (X += " q-field__input--padding", e.inputClass === void 0 ? X : [X, e.inputClass]);
  }), $ = f(() => (e.virtualScrollHorizontal === true ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")), ee = f(() => q.value === 0), I = f(() => T.value.map((X) => le.value(X)).join(", ")), ae = f(() => e.displayValue !== void 0 ? e.displayValue : I.value), we = f(() => e.optionsHtml === true ? () => true : (X) => (X == null ? void 0 : X.html) === true), S = f(() => e.displayValueHtml === true || e.displayValue === void 0 && (e.optionsHtml === true || T.value.some(we.value))), M = f(() => K.focused.value === true ? e.tabindex : -1), j = f(() => {
    const X = { tabindex: e.tabindex, role: "combobox", "aria-label": e.label, "aria-readonly": e.readonly === true ? "true" : "false", "aria-autocomplete": e.useInput === true ? "list" : "none", "aria-expanded": r.value === true ? "true" : "false", "aria-controls": `${K.targetUid.value}_lb` };
    return i.value >= 0 && (X["aria-activedescendant"] = `${K.targetUid.value}_${i.value}`), X;
  }), J = f(() => ({ id: `${K.targetUid.value}_lb`, role: "listbox", "aria-multiselectable": e.multiple === true ? "true" : "false" })), ne = f(() => T.value.map((X, Ae) => ({ index: Ae, opt: X, html: we.value(X), selected: true, removeAtIndex: Me, toggleOption: Ve, tabindex: M.value }))), Y = f(() => {
    if (q.value === 0) return [];
    const { from: X, to: Ae } = k.value;
    return e.options.slice(X, Ae).map((Re, tt) => {
      const gt = Q.value(Re) === true, vt = pe(Re) === true, Dt = X + tt, Rt = { clickable: true, active: vt, activeClass: ve.value, manualFocus: true, focused: false, disable: gt, tabindex: -1, dense: e.optionsDense, dark: O.value, role: "option", "aria-selected": vt === true ? "true" : "false", id: `${K.targetUid.value}_${Dt}`, onClick: () => {
        Ve(Re);
      } };
      return gt !== true && (i.value === Dt && (Rt.focused = true), a.platform.is.desktop === true && (Rt.onMousemove = () => {
        r.value === true && ue(Dt);
      })), { index: Dt, opt: Re, html: we.value(Re), label: le.value(Re), selected: Rt.active, focused: Rt.focused, toggleOption: Ve, setOptionIndex: ue, itemProps: Rt };
    });
  }), fe = f(() => e.dropdownIcon !== void 0 ? e.dropdownIcon : a.iconSet.arrow.dropdown), he = f(() => e.optionsCover === false && e.outlined !== true && e.standout !== true && e.borderless !== true && e.rounded !== true), ve = f(() => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : ""), de = f(() => nu(e.optionValue, "value")), le = f(() => nu(e.optionLabel, "label")), Q = f(() => nu(e.optionDisable, "disable")), ie = f(() => T.value.map(de.value)), _e = f(() => {
    const X = { onInput: se, onChange: H, onKeydown: it, onKeyup: $e, onKeypress: Ye, onFocus: Ce, onClick(Ae) {
      g === true && wt(Ae);
    } };
    return X.onCompositionstart = X.onCompositionupdate = X.onCompositionend = H, X;
  });
  ge(T, (X) => {
    m = X, e.useInput === true && e.fillInput === true && e.multiple !== true && K.innerLoading.value !== true && (o.value !== true && r.value !== true || oe.value !== true) && (_ !== true && cn(), (o.value === true || r.value === true) && Be(""));
  }, { immediate: true }), ge(() => e.fillInput, cn), ge(r, gi), ge(q, Mg);
  function ke(X) {
    return e.emitValue === true ? de.value(X) : X;
  }
  function qe(X) {
    if (X !== -1 && X < T.value.length) if (e.multiple === true) {
      const Ae = e.modelValue.slice();
      n("remove", { index: X, value: Ae.splice(X, 1)[0] }), n("update:modelValue", Ae);
    } else n("update:modelValue", null);
  }
  function Me(X) {
    qe(X), K.focus();
  }
  function He(X, Ae) {
    const Re = ke(X);
    if (e.multiple !== true) {
      e.fillInput === true && Fe(le.value(X), true, true), n("update:modelValue", Re);
      return;
    }
    if (T.value.length === 0) {
      n("add", { index: 0, value: Re }), n("update:modelValue", e.multiple === true ? [Re] : Re);
      return;
    }
    if (Ae === true && pe(X) === true || e.maxValues !== void 0 && e.modelValue.length >= e.maxValues) return;
    const tt = e.modelValue.slice();
    n("add", { index: tt.length, value: Re }), tt.push(Re), n("update:modelValue", tt);
  }
  function Ve(X, Ae) {
    var _a2;
    if (K.editable.value !== true || X === void 0 || Q.value(X) === true) return;
    const Re = de.value(X);
    if (e.multiple !== true) {
      Ae !== true && (Fe(e.fillInput === true ? le.value(X) : "", true, true), at()), (_a2 = A.value) == null ? void 0 : _a2.focus(), (T.value.length === 0 || kn(de.value(T.value[0]), Re) !== true) && n("update:modelValue", e.emitValue === true ? Re : X);
      return;
    }
    if ((g !== true || c.value === true) && K.focus(), Ce(), T.value.length === 0) {
      const vt = e.emitValue === true ? Re : X;
      n("add", { index: 0, value: vt }), n("update:modelValue", e.multiple === true ? [vt] : vt);
      return;
    }
    const tt = e.modelValue.slice(), gt = ie.value.findIndex((vt) => kn(vt, Re));
    if (gt !== -1) n("remove", { index: gt, value: tt.splice(gt, 1)[0] });
    else {
      if (e.maxValues !== void 0 && tt.length >= e.maxValues) return;
      const vt = e.emitValue === true ? Re : X;
      n("add", { index: tt.length, value: vt }), tt.push(vt);
    }
    n("update:modelValue", tt);
  }
  function ue(X) {
    if (a.platform.is.desktop !== true) return;
    const Ae = X !== -1 && X < q.value ? X : -1;
    i.value !== Ae && (i.value = Ae);
  }
  function ye(X = 1, Ae) {
    if (r.value === true) {
      let Re = i.value;
      do
        Re = Co(Re + X, -1, q.value - 1);
      while (Re !== -1 && Re !== i.value && Q.value(e.options[Re]) === true);
      i.value !== Re && (ue(Re), te(Re), Ae !== true && e.useInput === true && e.fillInput === true && xe(Re >= 0 ? le.value(e.options[Re]) : C, true));
    }
  }
  function re(X, Ae) {
    const Re = (tt) => kn(de.value(tt), X);
    return e.options.find(Re) || Ae.find(Re) || X;
  }
  function pe(X) {
    const Ae = de.value(X);
    return ie.value.find((Re) => kn(Re, Ae)) !== void 0;
  }
  function Ce(X) {
    e.useInput === true && A.value !== null && (X === void 0 || A.value === X.target && X.target.value === I.value) && A.value.select();
  }
  function Oe(X) {
    yn(X, 27) === true && r.value === true && (wt(X), at(), cn()), n("keyup", X);
  }
  function $e(X) {
    const { value: Ae } = X.target;
    if (X.keyCode !== void 0) {
      Oe(X);
      return;
    }
    if (X.target.value = "", v !== null && (clearTimeout(v), v = null), h !== null && (clearTimeout(h), h = null), cn(), typeof Ae == "string" && Ae.length !== 0) {
      const Re = Ae.toLocaleLowerCase(), tt = (vt) => {
        const Dt = e.options.find((Rt) => String(vt.value(Rt)).toLocaleLowerCase() === Re);
        return Dt === void 0 ? false : (T.value.indexOf(Dt) === -1 ? Ve(Dt) : at(), true);
      }, gt = (vt) => {
        tt(de) !== true && vt !== true && tt(le) !== true && Be(Ae, true, () => gt(true));
      };
      gt();
    } else K.clearValue(X);
  }
  function Ye(X) {
    n("keypress", X);
  }
  function it(X) {
    if (n("keydown", X), Yl(X) === true) return;
    const Ae = u.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0), Re = X.shiftKey !== true && e.disableTabSelection !== true && e.multiple !== true && (i.value !== -1 || Ae === true);
    if (X.keyCode === 27) {
      Vt(X);
      return;
    }
    if (X.keyCode === 9 && Re === false) {
      Le();
      return;
    }
    if (X.target === void 0 || X.target.id !== K.targetUid.value || K.editable.value !== true) return;
    if (X.keyCode === 40 && K.innerLoading.value !== true && r.value === false) {
      je(X), De();
      return;
    }
    if (X.keyCode === 8 && (e.useChips === true || e.clearable === true) && e.hideSelected !== true && u.value.length === 0) {
      e.multiple === true && Array.isArray(e.modelValue) === true ? qe(e.modelValue.length - 1) : e.multiple !== true && e.modelValue !== null && n("update:modelValue", null);
      return;
    }
    (X.keyCode === 35 || X.keyCode === 36) && (typeof u.value != "string" || u.value.length === 0) && (je(X), i.value = -1, ye(X.keyCode === 36 ? 1 : -1, e.multiple)), (X.keyCode === 33 || X.keyCode === 34) && U.value !== void 0 && (je(X), i.value = Math.max(-1, Math.min(q.value, i.value + (X.keyCode === 33 ? -1 : 1) * U.value.view)), ye(X.keyCode === 33 ? 1 : -1, e.multiple)), (X.keyCode === 38 || X.keyCode === 40) && (je(X), ye(X.keyCode === 38 ? -1 : 1, e.multiple));
    const tt = q.value;
    if ((y === void 0 || b < Date.now()) && (y = ""), tt > 0 && e.useInput !== true && X.key !== void 0 && X.key.length === 1 && X.altKey === false && X.ctrlKey === false && X.metaKey === false && (X.keyCode !== 32 || y.length !== 0)) {
      r.value !== true && De(X);
      const gt = X.key.toLocaleLowerCase(), vt = y.length === 1 && y[0] === gt;
      b = Date.now() + 1500, vt === false && (je(X), y += gt);
      const Dt = new RegExp("^" + y.split("").map((bi) => N1.indexOf(bi) !== -1 ? "\\" + bi : bi).join(".*"), "i");
      let Rt = i.value;
      if (vt === true || Rt < 0 || Dt.test(le.value(e.options[Rt])) !== true) do
        Rt = Co(Rt + 1, -1, tt - 1);
      while (Rt !== i.value && (Q.value(e.options[Rt]) === true || Dt.test(le.value(e.options[Rt])) !== true));
      i.value !== Rt && We(() => {
        ue(Rt), te(Rt), Rt >= 0 && e.useInput === true && e.fillInput === true && xe(le.value(e.options[Rt]), true);
      });
      return;
    }
    if (!(X.keyCode !== 13 && (X.keyCode !== 32 || e.useInput === true || y !== "") && (X.keyCode !== 9 || Re === false))) {
      if (X.keyCode !== 9 && je(X), i.value !== -1 && i.value < tt) {
        Ve(e.options[i.value]);
        return;
      }
      if (Ae === true) {
        const gt = (vt, Dt) => {
          var _a2;
          if (Dt) {
            if (Od(Dt) !== true) return;
          } else Dt = e.newValueMode;
          if (Fe("", e.multiple !== true, true), vt == null) return;
          (Dt === "toggle" ? Ve : He)(vt, Dt === "add-unique"), e.multiple !== true && ((_a2 = A.value) == null ? void 0 : _a2.focus(), at());
        };
        if (e.onNewValue !== void 0 ? n("newValue", u.value, gt) : gt(u.value), e.multiple !== true) return;
      }
      r.value === true ? Le() : K.innerLoading.value !== true && De();
    }
  }
  function Ct() {
    return g === true ? P.value : F.value !== null && F.value.contentEl !== null ? F.value.contentEl : void 0;
  }
  function jt() {
    return Ct();
  }
  function tl() {
    return e.hideSelected === true ? [] : t["selected-item"] !== void 0 ? ne.value.map((X) => t["selected-item"](X)).slice() : t.selected !== void 0 ? [].concat(t.selected()) : e.useChips === true ? ne.value.map((X, Ae) => d(Hm, { key: "option-" + Ae, removable: K.editable.value === true && Q.value(X.opt) !== true, dense: true, textColor: e.color, tabindex: M.value, onRemove() {
      X.removeAtIndex(Ae);
    } }, () => d("span", { class: "ellipsis", [X.html === true ? "innerHTML" : "textContent"]: le.value(X.opt) }))) : [d("span", { class: "ellipsis", [S.value === true ? "innerHTML" : "textContent"]: ae.value })];
  }
  function ln() {
    if (ee.value === true) return t["no-option"] !== void 0 ? t["no-option"]({ inputValue: u.value }) : void 0;
    const X = t.option !== void 0 ? t.option : (Re) => d(Ca, { key: Re.index, ...Re.itemProps }, () => d(mn, () => d(zu, () => d("span", { [Re.html === true ? "innerHTML" : "textContent"]: Re.label }))));
    let Ae = V("div", Y.value.map(X));
    return t["before-options"] !== void 0 && (Ae = t["before-options"]().concat(Ae)), qt(t["after-options"], Ae);
  }
  function In(X, Ae) {
    const Re = Ae === true ? { ...j.value, ...K.splitAttrs.attributes.value } : void 0, tt = { ref: Ae === true ? A : void 0, key: "i_t", class: B.value, style: e.inputStyle, value: u.value !== void 0 ? u.value : "", type: "search", ...Re, id: Ae === true ? K.targetUid.value : void 0, maxlength: e.maxlength, autocomplete: e.autocomplete, "data-autofocus": X === true || e.autofocus === true || void 0, disabled: e.disable === true, readonly: e.readonly === true, ..._e.value };
    return X !== true && g === true && (Array.isArray(tt.class) === true ? tt.class = [...tt.class, "no-pointer-events"] : tt.class += " no-pointer-events"), d("input", tt);
  }
  function se(X) {
    v !== null && (clearTimeout(v), v = null), h !== null && (clearTimeout(h), h = null), !(X && X.target && X.target.qComposing === true) && (xe(X.target.value || ""), _ = true, C = u.value, K.focused.value !== true && (g !== true || c.value === true) && K.focus(), e.onFilter !== void 0 && (v = setTimeout(() => {
      v = null, Be(u.value);
    }, e.inputDebounce)));
  }
  function xe(X, Ae) {
    u.value !== X && (u.value = X, Ae === true || e.inputDebounce === 0 || e.inputDebounce === "0" ? n("inputValue", X) : h = setTimeout(() => {
      h = null, n("inputValue", X);
    }, e.inputDebounce));
  }
  function Fe(X, Ae, Re) {
    _ = Re !== true, e.useInput === true && (xe(X, true), (Ae === true || Re !== true) && (C = X), Ae !== true && Be(X));
  }
  function Be(X, Ae, Re) {
    if (e.onFilter === void 0 || Ae !== true && K.focused.value !== true) return;
    K.innerLoading.value === true ? n("filterAbort") : (K.innerLoading.value = true, s.value = true), X !== "" && e.multiple !== true && T.value.length !== 0 && _ !== true && X === le.value(T.value[0]) && (X = "");
    const tt = setTimeout(() => {
      r.value === true && (r.value = false);
    }, 10);
    w !== null && clearTimeout(w), w = tt, n("filter", X, (gt, vt) => {
      (Ae === true || K.focused.value === true) && w === tt && (clearTimeout(w), typeof gt == "function" && gt(), s.value = false, We(() => {
        K.innerLoading.value = false, K.editable.value === true && (Ae === true ? r.value === true && at() : r.value === true ? gi(true) : r.value = true), typeof vt == "function" && We(() => {
          vt(l);
        }), typeof Re == "function" && We(() => {
          Re(l);
        });
      }));
    }, () => {
      K.focused.value === true && w === tt && (clearTimeout(w), K.innerLoading.value = false, s.value = false), r.value === true && (r.value = false);
    });
  }
  function Ue() {
    return d(ui, { ref: F, class: $.value, style: e.popupContentStyle, modelValue: r.value, fit: e.menuShrink !== true, cover: e.optionsCover === true && ee.value !== true && e.useInput !== true, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, dark: O.value, noParentEvent: true, noRefocus: true, noFocus: true, noRouteDismiss: e.popupNoRouteDismiss, square: he.value, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, separateClosePopup: true, ...J.value, onScrollPassive: D, onBeforeShow: Ys, onBeforeHide: yt, onShow: ht }, ln);
  }
  function yt(X) {
    Gs(X), Le();
  }
  function ht() {
    be();
  }
  function z(X) {
    var _a2;
    wt(X), (_a2 = A.value) == null ? void 0 : _a2.focus(), c.value = true, window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
  }
  function G(X) {
    wt(X), We(() => {
      c.value = false;
    });
  }
  function ce() {
    const X = [d(f1, { class: `col-auto ${K.fieldClass.value}`, ...Z.value, for: K.targetUid.value, dark: O.value, square: true, loading: s.value, itemAligned: false, filled: true, stackLabel: u.value.length !== 0, ...K.splitAttrs.listeners.value, onFocus: z, onBlur: G }, { ...t, rawControl: () => K.getControl(true), before: void 0, after: void 0 })];
    return r.value === true && X.push(d("div", { ref: P, class: $.value + " scroll", style: e.popupContentStyle, ...J.value, onClick: Vt, onScrollPassive: D }, ln())), d(ci, { ref: N, modelValue: o.value, position: e.useInput === true ? "top" : void 0, transitionShow: p, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, noRouteDismiss: e.popupNoRouteDismiss, onBeforeShow: Ys, onBeforeHide: Te, onHide: Ee, onShow: Xe }, () => d("div", { class: "q-select__dialog" + (O.value === true ? " q-select__dialog--dark q-dark" : "") + (c.value === true ? " q-select__dialog--focused" : "") }, X));
  }
  function Te(X) {
    Gs(X), N.value !== null && N.value.__updateRefocusTarget(K.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")), K.focused.value = false;
  }
  function Ee(X) {
    at(), K.focused.value === false && n("blur", X), cn();
  }
  function Xe() {
    const X = document.activeElement;
    (X === null || X.id !== K.targetUid.value) && A.value !== null && A.value !== X && A.value.focus(), be();
  }
  function Le() {
    o.value !== true && (i.value = -1, r.value === true && (r.value = false), K.focused.value === false && (w !== null && (clearTimeout(w), w = null), K.innerLoading.value === true && (n("filterAbort"), K.innerLoading.value = false, s.value = false)));
  }
  function De(X) {
    K.editable.value === true && (g === true ? (K.onControlFocusin(X), o.value = true, We(() => {
      K.focus();
    })) : K.focus(), e.onFilter !== void 0 ? Be(u.value) : (ee.value !== true || t["no-option"] !== void 0) && (r.value = true));
  }
  function at() {
    o.value = false, Le();
  }
  function cn() {
    e.useInput === true && Fe(e.multiple !== true && e.fillInput === true && T.value.length !== 0 && le.value(T.value[0]) || "", true, true);
  }
  function gi(X) {
    let Ae = -1;
    if (X === true) {
      if (T.value.length !== 0) {
        const Re = de.value(T.value[0]);
        Ae = e.options.findIndex((tt) => kn(de.value(tt), Re));
      }
      L(Ae);
    }
    ue(Ae);
  }
  function Mg(X, Ae) {
    r.value === true && K.innerLoading.value === false && (L(-1, true), We(() => {
      r.value === true && K.innerLoading.value === false && (X > Ae ? L() : gi(true));
    }));
  }
  function Ws() {
    o.value === false && F.value !== null && F.value.updatePosition();
  }
  function Ys(X) {
    X !== void 0 && wt(X), n("popupShow", X), K.hasPopupOpen = true, K.onControlFocusin(X);
  }
  function Gs(X) {
    X !== void 0 && wt(X), n("popupHide", X), K.hasPopupOpen = false, K.onControlFocusout(X);
  }
  function Xs() {
    g = a.platform.is.mobile !== true && e.behavior !== "dialog" ? false : e.behavior !== "menu" && (e.useInput === true ? t["no-option"] !== void 0 || e.onFilter !== void 0 || ee.value === false : true), p = a.platform.is.ios === true && g === true && e.useInput === true ? "fade" : e.transitionShow;
  }
  return Ma(Xs), Go(Ws), Xs(), Ke(() => {
    v !== null && clearTimeout(v), h !== null && clearTimeout(h);
  }), Object.assign(l, { showPopup: De, hidePopup: at, removeAtIndex: qe, add: He, toggleOption: Ve, getOptionIndex: () => i.value, setOptionIndex: ue, moveOptionSelection: ye, filter: Be, updateMenuPosition: Ws, updateInputValue: Fe, isOptionSelected: pe, getEmittingOptionValue: ke, isOptionDisabled: (...X) => Q.value.apply(null, X) === true, getOptionValue: (...X) => de.value.apply(null, X), getOptionLabel: (...X) => le.value.apply(null, X) }), Object.assign(K, { innerValue: T, fieldClass: f(() => `q-select q-field--auto-height q-select--with${e.useInput !== true ? "out" : ""}-input q-select--with${e.useChips !== true ? "out" : ""}-chips q-select--${e.multiple === true ? "multiple" : "single"}`), inputRef: x, targetRef: A, hasValue: oe, showPopup: De, floatingLabel: f(() => e.hideSelected !== true && oe.value === true || typeof u.value == "number" || u.value.length !== 0 || Kl(e.displayValue)), getControlChild: () => {
    if (K.editable.value !== false && (o.value === true || ee.value !== true || t["no-option"] !== void 0)) return g === true ? ce() : Ue();
    K.hasPopupOpen === true && (K.hasPopupOpen = false);
  }, controlEvents: { onFocusin(X) {
    K.onControlFocusin(X);
  }, onFocusout(X) {
    K.onControlFocusout(X, () => {
      cn(), Le();
    });
  }, onClick(X) {
    var _a2;
    if (Vt(X), g !== true && r.value === true) {
      Le(), (_a2 = A.value) == null ? void 0 : _a2.focus();
      return;
    }
    De(X);
  } }, getControl: (X) => {
    const Ae = tl(), Re = X === true || o.value !== true || g !== true;
    if (e.useInput === true) Ae.push(In(X, Re));
    else if (K.editable.value === true) {
      const gt = Re === true ? j.value : void 0;
      Ae.push(d("input", { ref: Re === true ? A : void 0, key: "d_t", class: "q-select__focus-target", id: Re === true ? K.targetUid.value : void 0, value: ae.value, readonly: true, "data-autofocus": X === true || e.autofocus === true || void 0, ...gt, onKeydown: it, onKeyup: Oe, onKeypress: Ye })), Re === true && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && Ae.push(d("input", { class: "q-select__autocomplete-input", autocomplete: e.autocomplete, tabindex: -1, onKeyup: $e }));
    }
    if (R.value !== void 0 && e.disable !== true && ie.value.length !== 0) {
      const gt = ie.value.map((vt) => d("option", { value: vt, selected: true }));
      Ae.push(d("select", { class: "hidden", name: R.value, multiple: e.multiple }, gt));
    }
    const tt = e.useInput === true || Re !== true ? void 0 : K.splitAttrs.attributes.value;
    return d("div", { class: "q-field__native row items-center", ...tt, ...K.splitAttrs.listeners.value }, Ae);
  }, getInnerAppend: () => e.loading !== true && s.value !== true && e.hideDropdownIcon !== true ? [d(et, { class: "q-select__dropdown-icon" + (r.value === true ? " rotate-180" : ""), name: fe.value })] : null }), mi(K);
} }), U1 = ["text", "rect", "circle", "QBtn", "QBadge", "QChip", "QToolbar", "QCheckbox", "QRadio", "QToggle", "QSlider", "QRange", "QInput", "QAvatar"], Q1 = ["wave", "pulse", "pulse-x", "pulse-y", "fade", "blink", "none"];
me({ name: "QSkeleton", props: { ...nt, tag: { type: String, default: "div" }, type: { type: String, validator: (e) => U1.includes(e), default: "rect" }, animation: { type: String, validator: (e) => Q1.includes(e), default: "wave" }, animationSpeed: { type: [String, Number], default: 1500 }, square: Boolean, bordered: Boolean, size: String, width: String, height: String }, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), a = f(() => {
    const o = e.size !== void 0 ? [e.size, e.size] : [e.width, e.height];
    return { "--q-skeleton-speed": `${e.animationSpeed}ms`, width: o[0], height: o[1] };
  }), r = f(() => `q-skeleton q-skeleton--${l.value === true ? "dark" : "light"} q-skeleton--type-${e.type}` + (e.animation !== "none" ? ` q-skeleton--anim q-skeleton--anim-${e.animation}` : "") + (e.square === true ? " q-skeleton--square" : "") + (e.bordered === true ? " q-skeleton--bordered" : ""));
  return () => d(e.tag, { class: r.value, style: a.value }, Pe(t.default));
} });
var Vd = [["left", "center", "start", "width"], ["right", "center", "end", "width"], ["top", "start", "center", "height"], ["bottom", "end", "center", "height"]];
me({ name: "QSlideItem", props: { ...nt, leftColor: String, rightColor: String, topColor: String, bottomColor: String, onSlide: Function }, emits: ["action", "top", "right", "bottom", "left"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = lt(e, a), { getCache: o } = Pr(), i = W(null);
  let u = null, c = {}, s = {}, v = {};
  const h = f(() => a.lang.rtl === true ? { left: "right", right: "left" } : { left: "left", right: "right" }), m = f(() => "q-slide-item q-item-type overflow-hidden" + (r.value === true ? " q-slide-item--dark q-dark" : ""));
  function g() {
    i.value.style.transform = "translate(0,0)";
  }
  function _(C, p, y) {
    e.onSlide !== void 0 && n("slide", { side: C, ratio: p, isReset: y });
  }
  function w(C) {
    const p = i.value;
    if (C.isFirst) c = { dir: null, size: { left: 0, right: 0, top: 0, bottom: 0 }, scale: 0 }, p.classList.add("no-transition"), Vd.forEach((A) => {
      if (t[A[0]] !== void 0) {
        const F = v[A[0]];
        F.style.transform = "scale(1)", c.size[A[0]] = F.getBoundingClientRect()[A[3]];
      }
    }), c.axis = C.direction === "up" || C.direction === "down" ? "Y" : "X";
    else if (C.isFinal) {
      p.classList.remove("no-transition"), c.scale === 1 ? (p.style.transform = `translate${c.axis}(${c.dir * 100}%)`, u !== null && clearTimeout(u), u = setTimeout(() => {
        u = null, n(c.showing, { reset: g }), n("action", { side: c.showing, reset: g });
      }, 230)) : (p.style.transform = "translate(0,0)", _(c.showing, 0, true));
      return;
    } else C.direction = c.axis === "X" ? C.offset.x < 0 ? "left" : "right" : C.offset.y < 0 ? "up" : "down";
    if (t.left === void 0 && C.direction === h.value.right || t.right === void 0 && C.direction === h.value.left || t.top === void 0 && C.direction === "down" || t.bottom === void 0 && C.direction === "up") {
      p.style.transform = "translate(0,0)";
      return;
    }
    let y, b, x;
    c.axis === "X" ? (b = C.direction === "left" ? -1 : 1, y = b === 1 ? h.value.left : h.value.right, x = C.distance.x) : (b = C.direction === "up" ? -2 : 2, y = b === 2 ? "top" : "bottom", x = C.distance.y), !(c.dir !== null && Math.abs(b) !== Math.abs(c.dir)) && (c.dir !== b && (["left", "right", "top", "bottom"].forEach((A) => {
      s[A] && (s[A].style.visibility = y === A ? "visible" : "hidden");
    }), c.showing = y, c.dir = b), c.scale = Math.max(0, Math.min(1, (x - 40) / c.size[y])), p.style.transform = `translate${c.axis}(${x * b / Math.abs(b)}px)`, v[y].style.transform = `scale(${c.scale})`, _(y, c.scale, false));
  }
  return Ma(() => {
    s = {}, v = {};
  }), Ke(() => {
    u !== null && clearTimeout(u);
  }), Object.assign(l, { reset: g }), () => {
    const C = [], p = { left: t[h.value.right] !== void 0, right: t[h.value.left] !== void 0, up: t.bottom !== void 0, down: t.top !== void 0 }, y = Object.keys(p).filter((x) => p[x] === true);
    Vd.forEach((x) => {
      const A = x[0];
      t[A] !== void 0 && C.push(d("div", { key: A, ref: (F) => {
        s[A] = F;
      }, class: `q-slide-item__${A} absolute-full row no-wrap items-${x[1]} justify-${x[2]}` + (e[A + "Color"] !== void 0 ? ` bg-${e[A + "Color"]}` : "") }, [d("div", { ref: (F) => {
        v[A] = F;
      } }, t[A]())]));
    });
    const b = d("div", { key: `${y.length === 0 ? "only-" : ""} content`, ref: i, class: "q-slide-item__content" }, Pe(t.default));
    return y.length === 0 ? C.push(b) : C.push(sn(b, o("dir#" + y.join(""), () => {
      const x = { prevent: true, stop: true, mouse: true };
      return y.forEach((A) => {
        x[A] = true;
      }), [[gn, w, void 0, x]];
    }))), d("div", { class: m.value }, C);
  };
} });
me({ name: "QSpace", setup() {
  const e = d("div", { class: "q-space" });
  return () => e;
} });
var K1 = '<g transform="matrix(1 0 0 -1 0 80)"><rect width="10" height="20" rx="3"><animate attributeName="height" begin="0s" dur="4.3s" values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="15" width="10" height="80" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" width="10" height="50" rx="3"><animate attributeName="height" begin="0s" dur="1.4s" values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="45" width="10" height="30" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear" repeatCount="indefinite"></animate></rect></g>';
me({ name: "QSpinnerAudio", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 55 80", xmlns: "http://www.w3.org/2000/svg", innerHTML: K1 });
} });
var W1 = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"></animate></circle></g>';
me({ name: "QSpinnerBall", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 57 57", xmlns: "http://www.w3.org/2000/svg", innerHTML: W1 });
} });
var Y1 = '<rect y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="60" width="15" height="140" rx="6"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="90" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="120" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect>';
me({ name: "QSpinnerBars", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 135 140", xmlns: "http://www.w3.org/2000/svg", innerHTML: Y1 });
} });
var G1 = '<rect x="25" y="25" width="50" height="50" fill="none" stroke-width="4" stroke="currentColor"><animateTransform id="spinnerBox" attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" dur="0.5s" begin="rectBox.end"></animateTransform></rect><rect x="27" y="27" width="46" height="50" fill="currentColor"><animate id="rectBox" attributeName="height" begin="0s;spinnerBox.end" dur="1.3s" from="50" to="0" fill="freeze"></animate></rect>';
me({ name: "QSpinnerBox", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: G1 });
} });
var X1 = '<circle cx="50" cy="50" r="48" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="currentColor"></circle><line stroke-linecap="round" stroke-width="4" stroke-miterlimit="10" stroke="currentColor" x1="50" y1="50" x2="85" y2="50.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2s" repeatCount="indefinite"></animateTransform></line><line stroke-linecap="round" stroke-width="4" stroke-miterlimit="10" stroke="currentColor" x1="50" y1="50" x2="49.5" y2="74"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="15s" repeatCount="indefinite"></animateTransform></line>';
me({ name: "QSpinnerClock", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: X1 });
} });
var Z1 = '<rect x="0" y="0" width="100" height="100" fill="none"></rect><path d="M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z" fill="currentColor"></path><circle cx="30" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;1;1" keyTimes="0;0.2;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="50" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.2;0.4;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="70" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.4;0.6;1" dur="1s" repeatCount="indefinite"></animate></circle>';
me({ name: "QSpinnerComment", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: Z1 });
} });
var J1 = '<rect x="0" y="0" width="100" height="100" fill="none"></rect><g transform="translate(25 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.1s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(25 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.7"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.3s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.2s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g>';
me({ name: "QSpinnerCube", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: J1 });
} });
var e_ = '<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from=".5" to=".5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';
me({ name: "QSpinnerDots", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg", innerHTML: e_ });
} });
var t_ = '<g transform="translate(20 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(50 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.1s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(80 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.2s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g>';
me({ name: "QSpinnerFacebook", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid", innerHTML: t_ });
} });
var n_ = '<g transform="translate(-20,-20)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="90 50 50" to="0 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g><g transform="translate(20,20) rotate(15 50 50)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="90 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g>';
me({ name: "QSpinnerGears", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: n_ });
} });
var l_ = '<circle cx="12.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="0s" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5"><animate attributeName="fill-opacity" begin="100ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="300ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="600ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="800ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="400ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="700ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="500ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="200ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';
me({ name: "QSpinnerGrid", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 105 105", xmlns: "http://www.w3.org/2000/svg", innerHTML: l_ });
} });
var a_ = '<path d="M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.716-6.002 11.47-7.65 17.304-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.593-2.32 17.308 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0.7s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"></path>';
me({ name: "QSpinnerHearts", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 140 64", xmlns: "http://www.w3.org/2000/svg", innerHTML: a_ });
} });
var r_ = '<g><path fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10" d="M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"></path><clipPath id="uil-hourglass-clip1"><rect x="15" y="20" width="70" height="25"><animate attributeName="height" from="25" to="0" dur="1s" repeatCount="indefinite" values="25;0;0" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="20" to="45" dur="1s" repeatCount="indefinite" values="20;45;45" keyTimes="0;0.5;1"></animate></rect></clipPath><clipPath id="uil-hourglass-clip2"><rect x="15" y="55" width="70" height="25"><animate attributeName="height" from="0" to="25" dur="1s" repeatCount="indefinite" values="0;25;25" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="80" to="55" dur="1s" repeatCount="indefinite" values="80;55;55" keyTimes="0;0.5;1"></animate></rect></clipPath><path d="M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z" clip-path="url(#uil-hourglass-clip1)" fill="currentColor"></path><path d="M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z" clip-path="url(#uil-hourglass-clip2)" fill="currentColor"></path><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" repeatCount="indefinite" dur="1s" values="0 50 50;0 50 50;180 50 50" keyTimes="0;0.7;1"></animateTransform></g>';
me({ name: "QSpinnerHourglass", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: r_ });
} });
var o_ = '<path d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z" fill="none" stroke="currentColor" stroke-width="8" stroke-dasharray="10.691205342610678 10.691205342610678" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" from="0" to="21.382410685221355" begin="0" dur="2s" repeatCount="indefinite" fill="freeze"></animate></path>';
me({ name: "QSpinnerInfinity", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: o_ });
} });
var i_ = '<g stroke-width="4" stroke-linecap="round"><line y1="17" y2="29" transform="translate(32,32) rotate(180)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(210)"><animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(240)"><animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(270)"><animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(300)"><animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(330)"><animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(0)"><animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(30)"><animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(60)"><animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(90)"><animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(120)"><animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(150)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line></g>';
me({ name: "QSpinnerIos", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, stroke: "currentColor", fill: "currentColor", viewBox: "0 0 64 64", innerHTML: i_ });
} });
var u_ = '<circle cx="50" cy="50" r="44" fill="none" stroke-width="4" stroke-opacity=".5" stroke="currentColor"></circle><circle cx="8" cy="54" r="6" fill="currentColor" stroke-width="3" stroke="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 48" to="360 50 52" dur="2s" repeatCount="indefinite"></animateTransform></circle>';
me({ name: "QSpinnerOrbit", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: u_ });
} });
var s_ = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g>';
me({ name: "QSpinnerOval", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", innerHTML: s_ });
} });
var c_ = '<path d="M0 50A50 50 0 0 1 50 0L50 50L0 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="0.8s" repeatCount="indefinite"></animateTransform></path><path d="M50 0A50 50 0 0 1 100 50L50 50L50 0" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1.6s" repeatCount="indefinite"></animateTransform></path><path d="M100 50A50 50 0 0 1 50 100L50 50L100 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2.4s" repeatCount="indefinite"></animateTransform></path><path d="M50 100A50 50 0 0 1 0 50L50 50L50 100" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="3.2s" repeatCount="indefinite"></animateTransform></path>';
me({ name: "QSpinnerPie", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: c_ });
} });
var d_ = '<g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g>';
me({ name: "QSpinnerPuff", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 44 44", xmlns: "http://www.w3.org/2000/svg", innerHTML: d_ });
} });
var f_ = '<g transform="scale(0.55)"><circle cx="30" cy="150" r="30" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></circle><path d="M90,150h30c0-49.7-40.3-90-90-90v30C63.1,90,90,116.9,90,150z" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.1" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></path><path d="M150,150h30C180,67.2,112.8,0,30,0v30C96.3,30,150,83.7,150,150z" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.2" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></path></g>';
me({ name: "QSpinnerRadio", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: f_ });
} });
var v_ = '<g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2"><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="8"><animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"></animate></circle></g>';
me({ name: "QSpinnerRings", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 45 45", xmlns: "http://www.w3.org/2000/svg", innerHTML: v_ });
} });
var m_ = '<defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-color="currentColor" stop-opacity="0" offset="0%"></stop><stop stop-color="currentColor" stop-opacity=".631" offset="63.146%"></stop><stop stop-color="currentColor" offset="100%"></stop></linearGradient></defs><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></path><circle fill="currentColor" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></circle></g>';
me({ name: "QSpinnerTail", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", innerHTML: m_ });
} });
me({ name: "QSplitter", props: { ...nt, modelValue: { type: Number, required: true }, reverse: Boolean, unit: { type: String, default: "%", validator: (e) => ["%", "px"].includes(e) }, limits: { type: Array, validator: (e) => e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number" ? false : e[0] >= 0 && e[0] <= e[1] }, emitImmediately: Boolean, horizontal: Boolean, disable: Boolean, beforeClass: [Array, String, Object], afterClass: [Array, String, Object], separatorClass: [Array, String, Object], separatorStyle: [Array, String, Object] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = lt(e, l), r = W(null), o = { before: W(null), after: W(null) }, i = f(() => `q-splitter no-wrap ${e.horizontal === true ? "q-splitter--horizontal column" : "q-splitter--vertical row"} q-splitter--${e.disable === true ? "disabled" : "workable"}` + (a.value === true ? " q-splitter--dark" : "")), u = f(() => e.horizontal === true ? "height" : "width"), c = f(() => e.reverse !== true ? "before" : "after"), s = f(() => e.limits !== void 0 ? e.limits : e.unit === "%" ? [10, 90] : [50, 1 / 0]);
  function v(x) {
    return (e.unit === "%" ? x : Math.round(x)) + e.unit;
  }
  const h = f(() => ({ [c.value]: { [u.value]: v(e.modelValue) } }));
  let m, g, _, w, C;
  function p(x) {
    if (x.isFirst === true) {
      const F = r.value.getBoundingClientRect()[u.value];
      m = e.horizontal === true ? "up" : "left", g = e.unit === "%" ? 100 : F, _ = Math.min(g, s.value[1], Math.max(s.value[0], e.modelValue)), w = (e.reverse !== true ? 1 : -1) * (e.horizontal === true ? 1 : l.lang.rtl === true ? -1 : 1) * (e.unit === "%" ? F === 0 ? 0 : 100 / F : 1), r.value.classList.add("q-splitter--active");
      return;
    }
    if (x.isFinal === true) {
      C !== e.modelValue && n("update:modelValue", C), r.value.classList.remove("q-splitter--active");
      return;
    }
    const A = _ + w * (x.direction === m ? -1 : 1) * x.distance[e.horizontal === true ? "y" : "x"];
    C = Math.min(g, s.value[1], Math.max(s.value[0], A)), o[c.value].value.style[u.value] = v(C), e.emitImmediately === true && e.modelValue !== C && n("update:modelValue", C);
  }
  const y = f(() => [[gn, p, void 0, { [e.horizontal === true ? "vertical" : "horizontal"]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
  function b(x, A) {
    x < A[0] ? n("update:modelValue", A[0]) : x > A[1] && n("update:modelValue", A[1]);
  }
  return ge(() => e.modelValue, (x) => {
    b(x, s.value);
  }), ge(() => e.limits, () => {
    We(() => {
      b(e.modelValue, s.value);
    });
  }), () => {
    const x = [d("div", { ref: o.before, class: ["q-splitter__panel q-splitter__before" + (e.reverse === true ? " col" : ""), e.beforeClass], style: h.value.before }, Pe(t.before)), d("div", { class: ["q-splitter__separator", e.separatorClass], style: e.separatorStyle, "aria-disabled": e.disable === true ? "true" : void 0 }, [pn("div", { class: "q-splitter__separator-area absolute-full" }, Pe(t.separator), "sep", e.disable !== true, () => y.value)]), d("div", { ref: o.after, class: ["q-splitter__panel q-splitter__after" + (e.reverse === true ? "" : " col"), e.afterClass], style: h.value.after }, Pe(t.after))];
    return d("div", { class: i.value, ref: r }, qt(t.default, x));
  };
} });
var Ih = me({ name: "StepHeader", props: { stepper: {}, step: {}, goToPanel: Function }, setup(e, { attrs: t }) {
  const { proxy: { $q: n } } = Se(), l = W(null), a = f(() => e.stepper.modelValue === e.step.name), r = f(() => {
    const w = e.step.disable;
    return w === true || w === "";
  }), o = f(() => {
    const w = e.step.error;
    return w === true || w === "";
  }), i = f(() => {
    const w = e.step.done;
    return r.value === false && (w === true || w === "");
  }), u = f(() => {
    const w = e.step.headerNav, C = w === true || w === "" || w === void 0;
    return r.value === false && e.stepper.headerNav && C;
  }), c = f(() => e.step.prefix && (a.value === false || e.stepper.activeIcon === "none") && (o.value === false || e.stepper.errorIcon === "none") && (i.value === false || e.stepper.doneIcon === "none")), s = f(() => {
    const w = e.step.icon || e.stepper.inactiveIcon;
    if (a.value === true) {
      const C = e.step.activeIcon || e.stepper.activeIcon;
      return C === "none" ? w : C || n.iconSet.stepper.active;
    }
    if (o.value === true) {
      const C = e.step.errorIcon || e.stepper.errorIcon;
      return C === "none" ? w : C || n.iconSet.stepper.error;
    }
    if (r.value === false && i.value === true) {
      const C = e.step.doneIcon || e.stepper.doneIcon;
      return C === "none" ? w : C || n.iconSet.stepper.done;
    }
    return w;
  }), v = f(() => {
    const w = o.value === true ? e.step.errorColor || e.stepper.errorColor : void 0;
    if (a.value === true) {
      const C = e.step.activeColor || e.stepper.activeColor || e.step.color;
      return C !== void 0 ? C : w;
    }
    return w !== void 0 ? w : r.value === false && i.value === true ? e.step.doneColor || e.stepper.doneColor || e.step.color || e.stepper.inactiveColor : e.step.color || e.stepper.inactiveColor;
  }), h = f(() => "q-stepper__tab col-grow flex items-center no-wrap relative-position" + (v.value !== void 0 ? ` text-${v.value}` : "") + (o.value === true ? " q-stepper__tab--error q-stepper__tab--error-with-" + (c.value === true ? "prefix" : "icon") : "") + (a.value === true ? " q-stepper__tab--active" : "") + (i.value === true ? " q-stepper__tab--done" : "") + (u.value === true ? " q-stepper__tab--navigation q-focusable q-hoverable" : "") + (r.value === true ? " q-stepper__tab--disabled" : "")), m = f(() => e.stepper.headerNav !== true ? false : u.value);
  function g() {
    var _a2;
    (_a2 = l.value) == null ? void 0 : _a2.focus(), a.value === false && e.goToPanel(e.step.name);
  }
  function _(w) {
    w.keyCode === 13 && a.value === false && e.goToPanel(e.step.name);
  }
  return () => {
    const w = { class: h.value };
    u.value === true && (w.onClick = g, w.onKeyup = _, Object.assign(w, r.value === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: t.tabindex || 0 }));
    const C = [d("div", { class: "q-focus-helper", tabindex: -1, ref: l }), d("div", { class: "q-stepper__dot row flex-center q-stepper__line relative-position" }, [d("span", { class: "row flex-center" }, [c.value === true ? e.step.prefix : d(et, { name: s.value })])])];
    if (e.step.title !== void 0 && e.step.title !== null) {
      const p = [d("div", { class: "q-stepper__title" }, e.step.title)];
      e.step.caption !== void 0 && e.step.caption !== null && p.push(d("div", { class: "q-stepper__caption" }, e.step.caption)), C.push(d("div", { class: "q-stepper__label q-stepper__line relative-position" }, p));
    }
    return sn(d("div", w, C), [[ri, m.value]]);
  };
} });
function zh(e) {
  return d("div", { class: "q-stepper__step-content" }, [d("div", { class: "q-stepper__step-inner" }, Pe(e.default))]);
}
var Id = { setup(e, { slots: t }) {
  return () => zh(t);
} };
me({ name: "QStep", props: { ...Es, icon: String, color: String, title: { type: String, required: true }, caption: String, prefix: [String, Number], doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String, headerNav: { type: Boolean, default: true }, done: Boolean, error: Boolean, onScroll: [Function, Array] }, setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = Tt(rm, ot);
  if (a === ot) return console.error("QStep needs to be a child of QStepper"), ot;
  const { getCache: r } = Pr(), o = W(null), i = f(() => a.value.modelValue === e.name), u = f(() => l.platform.is.ios !== true && l.platform.is.chrome === true || i.value !== true || a.value.vertical !== true ? {} : { onScroll(v) {
    const { target: h } = v;
    h.scrollTop > 0 && (h.scrollTop = 0), e.onScroll !== void 0 && n("scroll", v);
  } }), c = f(() => typeof e.name == "string" || typeof e.name == "number" ? e.name : String(e.name));
  function s() {
    const v = a.value.vertical;
    return v === true && a.value.keepAlive === true ? d(mv, a.value.keepAliveProps.value, i.value === true ? [d(a.value.needsUniqueKeepAliveWrapper.value === true ? r(c.value, () => ({ ...Id, name: c.value })) : Id, { key: c.value }, t.default)] : void 0) : v !== true || i.value === true ? zh(t) : void 0;
  }
  return () => d("div", { ref: o, class: "q-stepper__step", role: "tabpanel", ...u.value }, a.value.vertical === true ? [d(Ih, { stepper: a.value, step: e, goToPanel: a.value.goToPanel }), a.value.animated === true ? d(zs, s) : s()] : [s()]);
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
me({ name: "QStepper", props: { ...nt, ...$s, flat: Boolean, bordered: Boolean, alternativeLabels: Boolean, headerNav: Boolean, contracted: Boolean, headerClass: String, inactiveColor: String, inactiveIcon: String, doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String }, emits: As, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), { updatePanelsList: a, isValidPanelName: r, updatePanelIndex: o, getPanelContent: i, getPanels: u, panelDirectives: c, goToPanel: s, keepAliveProps: v, needsUniqueKeepAliveWrapper: h } = Rs();
  hn(rm, f(() => ({ goToPanel: s, keepAliveProps: v, needsUniqueKeepAliveWrapper: h, ...e })));
  const m = f(() => `q-stepper q-stepper--${e.vertical === true ? "vertical" : "horizontal"}` + (e.flat === true ? " q-stepper--flat" : "") + (e.bordered === true ? " q-stepper--bordered" : "") + (l.value === true ? " q-stepper--dark q-dark" : "")), g = f(() => `q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels === true ? "alternative" : "standard"}-labels` + (e.flat === false || e.bordered === true ? " q-stepper__header--border" : "") + (e.contracted === true ? " q-stepper__header--contracted" : "") + (e.headerClass !== void 0 ? ` ${e.headerClass}` : ""));
  function _() {
    const w = Pe(t.message, []);
    if (e.vertical === true) {
      r(e.modelValue) && o();
      const C = d("div", { class: "q-stepper__content" }, Pe(t.default));
      return w === void 0 ? [C] : w.concat(C);
    }
    return [d("div", { class: g.value }, u().map((C) => {
      const p = g_(C.props);
      return d(Ih, { key: p.name, stepper: e, step: p, goToPanel: s });
    })), w, pn("div", { class: "q-stepper__content q-panel-parent" }, i(), "cont", e.swipeable, () => c.value)];
  }
  return () => (a(t), d("div", { class: m.value }, qt(t.navigation, _())));
} });
me({ name: "QStepperNavigation", setup(e, { slots: t }) {
  return () => d("div", { class: "q-stepper__nav" }, Pe(t.default));
} });
var b_ = me({ name: "QTh", props: { props: Object, autoWidth: Boolean }, emits: ["click"], setup(e, { slots: t, emit: n }) {
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
var y_ = { list: Ah, table: E1 }, p_ = ["list", "table", "__qtable"], __ = me({ name: "QVirtualScroll", props: { ...Hu, type: { type: String, default: "list", validator: (e) => p_.includes(e) }, items: { type: Array, default: () => [] }, itemsFn: Function, itemsSize: Number, scrollTarget: Xl }, setup(e, { slots: t, attrs: n }) {
  let l;
  const a = W(null), r = f(() => e.itemsSize >= 0 && e.itemsFn !== void 0 ? parseInt(e.itemsSize, 10) : Array.isArray(e.items) ? e.items.length : 0), { virtualScrollSliceRange: o, localResetVirtualScroll: i, padVirtualScroll: u, onVirtualScrollEvt: c } = Vh({ virtualScrollLength: r, getVirtualScrollTarget: g, getVirtualScrollEl: m }), s = f(() => {
    if (r.value === 0) return [];
    const p = (y, b) => ({ index: o.value.from + b, item: y });
    return e.itemsFn === void 0 ? e.items.slice(o.value.from, o.value.to).map(p) : e.itemsFn(o.value.from, o.value.to - o.value.from).map(p);
  }), v = f(() => "q-virtual-scroll q-virtual-scroll" + (e.virtualScrollHorizontal === true ? "--horizontal" : "--vertical") + (e.scrollTarget !== void 0 ? "" : " scroll")), h = f(() => e.scrollTarget !== void 0 ? {} : { tabindex: 0 });
  ge(r, () => {
    i();
  }), ge(() => e.scrollTarget, () => {
    w(), _();
  });
  function m() {
    return a.value.$el || a.value;
  }
  function g() {
    return l;
  }
  function _() {
    l = Vn(m(), e.scrollTarget), l.addEventListener("scroll", c, dt.passive);
  }
  function w() {
    l !== void 0 && (l.removeEventListener("scroll", c, dt.passive), l = void 0);
  }
  function C() {
    let p = u(e.type === "list" ? "div" : "tbody", s.value.map(t.default));
    return t.before !== void 0 && (p = t.before().concat(p)), qt(t.after, p);
  }
  return Yo(() => {
    i();
  }), ft(() => {
    _();
  }), wl(() => {
    _();
  }), On(() => {
    w();
  }), Ke(() => {
    w();
  }), () => {
    if (t.default === void 0) {
      console.error("QVirtualScroll: default scoped slot is required for rendering");
      return;
    }
    return e.type === "__qtable" ? Dh({ ref: a, class: "q-table__middle " + v.value }, C()) : d(y_[e.type], { ...n, ref: a, class: [n.class, v.value], ...h.value }, C);
  };
} });
function w_(e, t) {
  return new Date(e) - new Date(t);
}
var S_ = { sortMethod: Function, binaryStateSort: Boolean, columnSortOrder: { type: String, validator: (e) => e === "ad" || e === "da", default: "ad" } };
function x_(e, t, n, l) {
  const a = f(() => {
    const { sortBy: i } = t.value;
    return i && n.value.find((u) => u.name === i) || null;
  }), r = f(() => e.sortMethod !== void 0 ? e.sortMethod : (i, u, c) => {
    const s = n.value.find((m) => m.name === u);
    if (s === void 0 || s.field === void 0) return i;
    const v = c === true ? -1 : 1, h = typeof s.field == "function" ? (m) => s.field(m) : (m) => m[s.field];
    return i.sort((m, g) => {
      let _ = h(m), w = h(g);
      return s.rawSort !== void 0 ? s.rawSort(_, w, m, g) * v : _ == null ? -1 * v : w == null ? 1 * v : s.sort !== void 0 ? s.sort(_, w, m, g) * v : pr(_) === true && pr(w) === true ? (_ - w) * v : Mu(_) === true && Mu(w) === true ? w_(_, w) * v : typeof _ == "boolean" && typeof w == "boolean" ? (_ - w) * v : ([_, w] = [_, w].map((C) => (C + "").toLocaleString().toLowerCase()), _ < w ? -1 * v : _ === w ? 0 : v);
    });
  });
  function o(i) {
    let u = e.columnSortOrder;
    if (Pt(i) === true) i.sortOrder && (u = i.sortOrder), i = i.name;
    else {
      const v = n.value.find((h) => h.name === i);
      (v == null ? void 0 : v.sortOrder) && (u = v.sortOrder);
    }
    let { sortBy: c, descending: s } = t.value;
    c !== i ? (c = i, s = u === "da") : e.binaryStateSort === true ? s = !s : s === true ? u === "ad" ? c = null : s = false : u === "ad" ? s = true : c = null, l({ sortBy: c, descending: s, page: 1 });
  }
  return { columnToSort: a, computedSortMethod: r, sort: o };
}
var C_ = { filter: [String, Object], filterMethod: Function };
function k_(e, t) {
  const n = f(() => e.filterMethod !== void 0 ? e.filterMethod : (l, a, r, o) => {
    const i = a ? a.toLowerCase() : "";
    return l.filter((u) => r.some((c) => {
      const s = o(c, u) + "";
      return (s === "undefined" || s === "null" ? "" : s.toLowerCase()).indexOf(i) !== -1;
    }));
  });
  return ge(() => e.filter, () => {
    We(() => {
      t({ page: 1 }, true);
    });
  }, { deep: true }), { computedFilterMethod: n };
}
function q_(e, t) {
  for (const n in t) if (t[n] !== e[n]) return false;
  return true;
}
function zd(e) {
  return e.page < 1 && (e.page = 1), e.rowsPerPage !== void 0 && e.rowsPerPage < 1 && (e.rowsPerPage = 0), e;
}
var T_ = { pagination: Object, rowsPerPageOptions: { type: Array, default: () => [5, 7, 10, 15, 20, 25, 50, 0] }, "onUpdate:pagination": [Function, Array] };
function M_(e, t) {
  const { props: n, emit: l } = e, a = W(Object.assign({ sortBy: null, descending: false, page: 1, rowsPerPage: n.rowsPerPageOptions.length !== 0 ? n.rowsPerPageOptions[0] : 5 }, n.pagination)), r = f(() => {
    const s = n["onUpdate:pagination"] !== void 0 ? { ...a.value, ...n.pagination } : a.value;
    return zd(s);
  }), o = f(() => r.value.rowsNumber !== void 0);
  function i(s) {
    u({ pagination: s, filter: n.filter });
  }
  function u(s = {}) {
    We(() => {
      l("request", { pagination: s.pagination || r.value, filter: s.filter || n.filter, getCellValue: t });
    });
  }
  function c(s, v) {
    const h = zd({ ...r.value, ...s });
    if (q_(r.value, h) === true) {
      o.value === true && v === true && i(h);
      return;
    }
    if (o.value === true) {
      i(h);
      return;
    }
    n.pagination !== void 0 && n["onUpdate:pagination"] !== void 0 ? l("update:pagination", h) : a.value = h;
  }
  return { innerPagination: a, computedPagination: r, isServerSide: o, requestServerInteraction: u, setPagination: c };
}
function E_(e, t, n, l, a, r) {
  const { props: o, emit: i, proxy: { $q: u } } = e, c = f(() => l.value === true ? n.value.rowsNumber || 0 : r.value), s = f(() => {
    const { page: b, rowsPerPage: x } = n.value;
    return (b - 1) * x;
  }), v = f(() => {
    const { page: b, rowsPerPage: x } = n.value;
    return b * x;
  }), h = f(() => n.value.page === 1), m = f(() => n.value.rowsPerPage === 0 ? 1 : Math.max(1, Math.ceil(c.value / n.value.rowsPerPage))), g = f(() => v.value === 0 ? true : n.value.page >= m.value), _ = f(() => (o.rowsPerPageOptions.includes(t.value.rowsPerPage) ? o.rowsPerPageOptions : [t.value.rowsPerPage].concat(o.rowsPerPageOptions)).map((x) => ({ label: x === 0 ? u.lang.table.allRows : "" + x, value: x })));
  ge(m, (b, x) => {
    if (b === x) return;
    const A = n.value.page;
    b && !A ? a({ page: 1 }) : b < A && a({ page: b });
  });
  function w() {
    a({ page: 1 });
  }
  function C() {
    const { page: b } = n.value;
    b > 1 && a({ page: b - 1 });
  }
  function p() {
    const { page: b, rowsPerPage: x } = n.value;
    v.value > 0 && b * x < c.value && a({ page: b + 1 });
  }
  function y() {
    a({ page: m.value });
  }
  return o["onUpdate:pagination"] !== void 0 && i("update:pagination", { ...n.value }), { firstRowIndex: s, lastRowIndex: v, isFirstPage: h, isLastPage: g, pagesNumber: m, computedRowsPerPageOptions: _, computedRowsNumber: c, firstPage: w, prevPage: C, nextPage: p, lastPage: y };
}
var $_ = { selection: { type: String, default: "none", validator: (e) => ["single", "multiple", "none"].includes(e) }, selected: { type: Array, default: () => [] } }, A_ = ["update:selected", "selection"];
function R_(e, t, n, l) {
  const a = f(() => {
    const g = {};
    return e.selected.map(l.value).forEach((_) => {
      g[_] = true;
    }), g;
  }), r = f(() => e.selection !== "none"), o = f(() => e.selection === "single"), i = f(() => e.selection === "multiple"), u = f(() => n.value.length !== 0 && n.value.every((g) => a.value[l.value(g)] === true)), c = f(() => u.value !== true && n.value.some((g) => a.value[l.value(g)] === true)), s = f(() => e.selected.length);
  function v(g) {
    return a.value[g] === true;
  }
  function h() {
    t("update:selected", []);
  }
  function m(g, _, w, C) {
    t("selection", { rows: _, added: w, keys: g, evt: C });
    const p = o.value === true ? w === true ? _ : [] : w === true ? e.selected.concat(_) : e.selected.filter((y) => g.includes(l.value(y)) === false);
    t("update:selected", p);
  }
  return { hasSelectionMode: r, singleSelection: o, multipleSelection: i, allRowsSelected: u, someRowsSelected: c, rowsSelectedNumber: s, isRowSelected: v, clearSelection: h, updateSelection: m };
}
function Dd(e) {
  return Array.isArray(e) ? e.slice() : [];
}
var P_ = { expanded: Array }, L_ = ["update:expanded"];
function B_(e, t) {
  const n = W(Dd(e.expanded));
  ge(() => e.expanded, (o) => {
    n.value = Dd(o);
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
  const l = f(() => {
    if (e.columns !== void 0) return e.columns;
    const i = e.rows[0];
    return i !== void 0 ? Object.keys(i).map((u) => ({ name: u, label: u.toUpperCase(), field: u, align: pr(i[u]) ? "right" : "left", sortable: true })) : [];
  }), a = f(() => {
    const { sortBy: i, descending: u } = t.value;
    return (e.visibleColumns !== void 0 ? l.value.filter((s) => s.required === true || e.visibleColumns.includes(s.name) === true) : l.value).map((s) => {
      const v = s.align || "right", h = `text-${v}`;
      return { ...s, align: v, __iconClass: `q-table__sort-icon q-table__sort-icon--${v}`, __thClass: h + (s.headerClasses !== void 0 ? " " + s.headerClasses : "") + (s.sortable === true ? " sortable" : "") + (s.name === i ? ` sorted ${u === true ? "sort-desc" : ""}` : ""), __tdStyle: s.style !== void 0 ? typeof s.style != "function" ? () => s.style : s.style : () => null, __tdClass: s.classes !== void 0 ? typeof s.classes != "function" ? () => h + " " + s.classes : (m) => h + " " + s.classes(m) : () => h };
    });
  }), r = f(() => {
    const i = {};
    return a.value.forEach((u) => {
      i[u.name] = u;
    }), i;
  }), o = f(() => e.tableColspan !== void 0 ? e.tableColspan : a.value.length + (n.value === true ? 1 : 0));
  return { colList: l, computedCols: a, computedColsMap: r, computedColspan: o };
}
var Xr = "q-table__bottom row items-center", Nh = {};
Oh.forEach((e) => {
  Nh[e] = {};
});
me({ name: "QTable", props: { rows: { type: Array, required: true }, rowKey: { type: [String, Function], default: "id" }, columns: Array, loading: Boolean, iconFirstPage: String, iconPrevPage: String, iconNextPage: String, iconLastPage: String, title: String, hideHeader: Boolean, grid: Boolean, gridHeader: Boolean, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, separator: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical", "cell", "none"].includes(e) }, wrapCells: Boolean, virtualScroll: Boolean, virtualScrollTarget: {}, ...Nh, noDataLabel: String, noResultsLabel: String, loadingLabel: String, selectedRowsLabel: Function, rowsPerPageLabel: String, paginationLabel: Function, color: { type: String, default: "grey-8" }, titleClass: [String, Array, Object], tableStyle: [String, Array, Object], tableClass: [String, Array, Object], tableHeaderStyle: [String, Array, Object], tableHeaderClass: [String, Array, Object], tableRowStyleFn: Function, tableRowClassFn: Function, cardContainerClass: [String, Array, Object], cardContainerStyle: [String, Array, Object], cardStyle: [String, Array, Object], cardClass: [String, Array, Object], cardStyleFn: Function, cardClassFn: Function, hideBottom: Boolean, hideSelectedBanner: Boolean, hideNoData: Boolean, hidePagination: Boolean, onRowClick: Function, onRowDblclick: Function, onRowContextmenu: Function, ...nt, ...Ps, ...F_, ...C_, ...T_, ...P_, ...$_, ...S_ }, emits: ["request", "virtualScroll", ...Ls, ...L_, ...A_], setup(e, { slots: t, emit: n }) {
  const l = Se(), { proxy: { $q: a } } = l, r = lt(e, a), { inFullscreen: o, toggleFullscreen: i } = Bs(), u = f(() => typeof e.rowKey == "function" ? e.rowKey : (se) => se[e.rowKey]), c = W(null), s = W(null), v = f(() => e.grid !== true && e.virtualScroll === true), h = f(() => " q-table__card" + (r.value === true ? " q-table__card--dark q-dark" : "") + (e.square === true ? " q-table--square" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "")), m = f(() => `q-table__container q-table--${e.separator}-separator column no-wrap` + (e.grid === true ? " q-table--grid" : h.value) + (r.value === true ? " q-table--dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.wrapCells === false ? " q-table--no-wrap" : "") + (o.value === true ? " fullscreen scroll" : "")), g = f(() => m.value + (e.loading === true ? " q-table--loading" : ""));
  ge(() => e.tableStyle + e.tableClass + e.tableHeaderStyle + e.tableHeaderClass + m.value, () => {
    var _a2;
    v.value === true && ((_a2 = s.value) == null ? void 0 : _a2.reset());
  });
  const { innerPagination: _, computedPagination: w, isServerSide: C, requestServerInteraction: p, setPagination: y } = M_(l, ue), { computedFilterMethod: b } = k_(e, y), { isRowExpanded: x, setExpanded: A, updateExpanded: F } = B_(e, n), N = f(() => {
    let se = e.rows;
    if (C.value === true || se.length === 0) return se;
    const { sortBy: xe, descending: Fe } = w.value;
    return e.filter && (se = b.value(se, e.filter, K.value, ue)), O.value !== null && (se = oe.value(e.rows === se ? se.slice() : se, xe, Fe)), se;
  }), P = f(() => N.value.length), R = f(() => {
    let se = N.value;
    if (C.value === true) return se;
    const { rowsPerPage: xe } = w.value;
    return xe !== 0 && ($.value === 0 && e.rows !== se ? se.length > ee.value && (se = se.slice(0, ee.value)) : se = se.slice($.value, ee.value)), se;
  }), { hasSelectionMode: H, singleSelection: q, multipleSelection: E, allRowsSelected: k, someRowsSelected: U, rowsSelectedNumber: L, isRowSelected: V, clearSelection: D, updateSelection: te } = R_(e, n, R, u), { colList: be, computedCols: K, computedColsMap: T, computedColspan: Z } = O_(e, w, H), { columnToSort: O, computedSortMethod: oe, sort: B } = x_(e, w, be, y), { firstRowIndex: $, lastRowIndex: ee, isFirstPage: I, isLastPage: ae, pagesNumber: we, computedRowsPerPageOptions: S, computedRowsNumber: M, firstPage: j, prevPage: J, nextPage: ne, lastPage: Y } = E_(l, _, w, C, y, P), fe = f(() => R.value.length === 0), he = f(() => {
    const se = {};
    return Oh.forEach((xe) => {
      se[xe] = e[xe];
    }), se.virtualScrollItemSize === void 0 && (se.virtualScrollItemSize = e.dense === true ? 28 : 48), se;
  });
  function ve() {
    v.value === true && s.value.reset();
  }
  function de() {
    if (e.grid === true) return In();
    const se = e.hideHeader !== true ? Ce : null;
    if (v.value === true) {
      const Fe = t["top-row"], Be = t["bottom-row"], Ue = { default: (yt) => _e(yt.item, t.body, yt.index) };
      if (Fe !== void 0) {
        const yt = d("tbody", Fe({ cols: K.value }));
        Ue.before = se === null ? () => yt : () => [se()].concat(yt);
      } else se !== null && (Ue.before = se);
      return Be !== void 0 && (Ue.after = () => d("tbody", Be({ cols: K.value }))), d(__, { ref: s, class: e.tableClass, style: e.tableStyle, ...he.value, scrollTarget: e.virtualScrollTarget, items: R.value, type: "__qtable", tableColspan: Z.value, onVirtualScroll: Q }, Ue);
    }
    const xe = [ke()];
    return se !== null && xe.unshift(se()), Dh({ class: ["q-table__middle scroll", e.tableClass], style: e.tableStyle }, xe);
  }
  function le(se, xe) {
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
  function ie() {
    return [d(O1, { class: "q-table__linear-progress", color: e.color, dark: r.value, indeterminate: true, trackColor: "transparent" })];
  }
  function _e(se, xe, Fe) {
    const Be = u.value(se), Ue = V(Be);
    if (xe !== void 0) {
      const G = { key: Be, row: se, pageIndex: Fe, __trClass: Ue ? "selected" : "" };
      if (e.tableRowStyleFn !== void 0 && (G.__trStyle = e.tableRowStyleFn(se)), e.tableRowClassFn !== void 0) {
        const ce = e.tableRowClassFn(se);
        ce && (G.__trClass = `${ce} ${G.__trClass}`);
      }
      return xe(qe(G));
    }
    const yt = t["body-cell"], ht = K.value.map((G) => {
      const ce = t[`body-cell-${G.name}`], Te = ce !== void 0 ? ce : yt;
      return Te !== void 0 ? Te(Me({ key: Be, row: se, pageIndex: Fe, col: G })) : d("td", { class: G.__tdClass(se), style: G.__tdStyle(se) }, ue(G, se));
    });
    if (H.value === true) {
      const G = t["body-selection"], ce = G !== void 0 ? G(He({ key: Be, row: se, pageIndex: Fe })) : [d(ir, { modelValue: Ue, color: e.color, dark: r.value, dense: e.dense, "onUpdate:modelValue": (Te, Ee) => {
        te([Be], [se], Te, Ee);
      } })];
      ht.unshift(d("td", { class: "q-table--col-auto-width" }, ce));
    }
    const z = { key: Be, class: { selected: Ue } };
    if (e.onRowClick !== void 0 && (z.class["cursor-pointer"] = true, z.onClick = (G) => {
      n("rowClick", G, se, Fe);
    }), e.onRowDblclick !== void 0 && (z.class["cursor-pointer"] = true, z.onDblclick = (G) => {
      n("rowDblclick", G, se, Fe);
    }), e.onRowContextmenu !== void 0 && (z.class["cursor-pointer"] = true, z.onContextmenu = (G) => {
      n("rowContextmenu", G, se, Fe);
    }), e.tableRowStyleFn !== void 0 && (z.style = e.tableRowStyleFn(se)), e.tableRowClassFn !== void 0) {
      const G = e.tableRowClassFn(se);
      G && (z.class[G] = true);
    }
    return d("tr", z, ht);
  }
  function ke() {
    const se = t.body, xe = t["top-row"], Fe = t["bottom-row"];
    let Be = R.value.map((Ue, yt) => _e(Ue, se, yt));
    return xe !== void 0 && (Be = xe({ cols: K.value }).concat(Be)), Fe !== void 0 && (Be = Be.concat(Fe({ cols: K.value }))), d("tbody", Be);
  }
  function qe(se) {
    return Ve(se), se.cols = se.cols.map((xe) => Ot({ ...xe }, "value", () => ue(xe, se.row))), se;
  }
  function Me(se) {
    return Ve(se), Ot(se, "value", () => ue(se.col, se.row)), se;
  }
  function He(se) {
    return Ve(se), se;
  }
  function Ve(se) {
    Object.assign(se, { cols: K.value, colsMap: T.value, sort: B, rowIndex: $.value + se.pageIndex, color: e.color, dark: r.value, dense: e.dense }), H.value === true && Ot(se, "selected", () => V(se.key), (xe, Fe) => {
      te([se.key], [se.row], xe, Fe);
    }), Ot(se, "expand", () => x(se.key), (xe) => {
      F(se.key, xe);
    });
  }
  function ue(se, xe) {
    const Fe = typeof se.field == "function" ? se.field(xe) : xe[se.field];
    return se.format !== void 0 ? se.format(Fe, xe) : Fe;
  }
  const ye = f(() => ({ pagination: w.value, pagesNumber: we.value, isFirstPage: I.value, isLastPage: ae.value, firstPage: j, prevPage: J, nextPage: ne, lastPage: Y, inFullscreen: o.value, toggleFullscreen: i }));
  function re() {
    const se = t.top, xe = t["top-left"], Fe = t["top-right"], Be = t["top-selection"], Ue = H.value === true && Be !== void 0 && L.value > 0, yt = "q-table__top relative-position row items-center";
    if (se !== void 0) return d("div", { class: yt }, [se(ye.value)]);
    let ht;
    if (Ue === true ? ht = Be(ye.value).slice() : (ht = [], xe !== void 0 ? ht.push(d("div", { class: "q-table__control" }, [xe(ye.value)])) : e.title && ht.push(d("div", { class: "q-table__control" }, [d("div", { class: ["q-table__title", e.titleClass] }, e.title)]))), Fe !== void 0 && (ht.push(d("div", { class: "q-table__separator col" })), ht.push(d("div", { class: "q-table__control" }, [Fe(ye.value)]))), ht.length !== 0) return d("div", { class: yt }, ht);
  }
  const pe = f(() => U.value === true ? null : k.value);
  function Ce() {
    const se = Oe();
    return e.loading === true && t.loading === void 0 && se.push(d("tr", { class: "q-table__progress" }, [d("th", { class: "relative-position", colspan: Z.value }, ie())])), d("thead", se);
  }
  function Oe() {
    const se = t.header, xe = t["header-cell"];
    if (se !== void 0) return se($e({ header: true })).slice();
    const Fe = K.value.map((Be) => {
      const Ue = t[`header-cell-${Be.name}`], yt = Ue !== void 0 ? Ue : xe, ht = $e({ col: Be });
      return yt !== void 0 ? yt(ht) : d(b_, { key: Be.name, props: ht }, () => Be.label);
    });
    if (q.value === true && e.grid !== true) Fe.unshift(d("th", { class: "q-table--col-auto-width" }, " "));
    else if (E.value === true) {
      const Be = t["header-selection"], Ue = Be !== void 0 ? Be($e({})) : [d(ir, { color: e.color, modelValue: pe.value, dark: r.value, dense: e.dense, "onUpdate:modelValue": Ye })];
      Fe.unshift(d("th", { class: "q-table--col-auto-width" }, Ue));
    }
    return [d("tr", { class: e.tableHeaderClass, style: e.tableHeaderStyle }, Fe)];
  }
  function $e(se) {
    return Object.assign(se, { cols: K.value, sort: B, colsMap: T.value, color: e.color, dark: r.value, dense: e.dense }), E.value === true && Ot(se, "selected", () => pe.value, Ye), se;
  }
  function Ye(se) {
    U.value === true && (se = false), te(R.value.map(u.value), R.value, se);
  }
  const it = f(() => {
    const se = [e.iconFirstPage || a.iconSet.table.firstPage, e.iconPrevPage || a.iconSet.table.prevPage, e.iconNextPage || a.iconSet.table.nextPage, e.iconLastPage || a.iconSet.table.lastPage];
    return a.lang.rtl === true ? se.reverse() : se;
  });
  function Ct() {
    if (e.hideBottom === true) return;
    if (fe.value === true) {
      if (e.hideNoData === true) return;
      const Fe = e.loading === true ? e.loadingLabel || a.lang.table.loading : e.filter ? e.noResultsLabel || a.lang.table.noResults : e.noDataLabel || a.lang.table.noData, Be = t["no-data"], Ue = Be !== void 0 ? [Be({ message: Fe, icon: a.iconSet.table.warning, filter: e.filter })] : [d(et, { class: "q-table__bottom-nodata-icon", name: a.iconSet.table.warning }), Fe];
      return d("div", { class: Xr + " q-table__bottom--nodata" }, Ue);
    }
    const se = t.bottom;
    if (se !== void 0) return d("div", { class: Xr }, [se(ye.value)]);
    const xe = e.hideSelectedBanner !== true && H.value === true && L.value > 0 ? [d("div", { class: "q-table__control" }, [d("div", [(e.selectedRowsLabel || a.lang.table.selectedRecords)(L.value)])])] : [];
    if (e.hidePagination !== true) return d("div", { class: Xr + " justify-end" }, tl(xe));
    if (xe.length !== 0) return d("div", { class: Xr }, xe);
  }
  function jt(se) {
    y({ page: 1, rowsPerPage: se.value });
  }
  function tl(se) {
    let xe;
    const { rowsPerPage: Fe } = w.value, Be = e.paginationLabel || a.lang.table.pagination, Ue = t.pagination, yt = e.rowsPerPageOptions.length > 1;
    if (se.push(d("div", { class: "q-table__separator col" })), yt === true && se.push(d("div", { class: "q-table__control" }, [d("span", { class: "q-table__bottom-item" }, [e.rowsPerPageLabel || a.lang.table.recordsPerPage]), d(j1, { class: "q-table__select inline q-table__bottom-item", color: e.color, modelValue: Fe, options: S.value, displayValue: Fe === 0 ? a.lang.table.allRows : Fe, dark: r.value, borderless: true, dense: true, optionsDense: true, optionsCover: true, "onUpdate:modelValue": jt })])), Ue !== void 0) xe = Ue(ye.value);
    else if (xe = [d("span", Fe !== 0 ? { class: "q-table__bottom-item" } : {}, [Fe ? Be($.value + 1, Math.min(ee.value, M.value), M.value) : Be(1, P.value, M.value)])], Fe !== 0 && we.value > 1) {
      const ht = { color: e.color, round: true, dense: true, flat: true };
      e.dense === true && (ht.size = "sm"), we.value > 2 && xe.push(d(Ze, { key: "pgFirst", ...ht, icon: it.value[0], disable: I.value, ariaLabel: a.lang.pagination.first, onClick: j })), xe.push(d(Ze, { key: "pgPrev", ...ht, icon: it.value[1], disable: I.value, ariaLabel: a.lang.pagination.prev, onClick: J }), d(Ze, { key: "pgNext", ...ht, icon: it.value[2], disable: ae.value, ariaLabel: a.lang.pagination.next, onClick: ne })), we.value > 2 && xe.push(d(Ze, { key: "pgLast", ...ht, icon: it.value[3], disable: ae.value, ariaLabel: a.lang.pagination.last, onClick: Y }));
    }
    return se.push(d("div", { class: "q-table__control" }, xe)), se;
  }
  function ln() {
    const se = e.gridHeader === true ? [d("table", { class: "q-table" }, [Ce()])] : e.loading === true && t.loading === void 0 ? ie() : void 0;
    return d("div", { class: "q-table__middle" }, se);
  }
  function In() {
    const se = t.item !== void 0 ? t.item : (xe) => {
      const Fe = xe.cols.map((Ue) => d("div", { class: "q-table__grid-item-row" }, [d("div", { class: "q-table__grid-item-title" }, [Ue.label]), d("div", { class: "q-table__grid-item-value" }, [Ue.value])]));
      if (H.value === true) {
        const Ue = t["body-selection"], yt = Ue !== void 0 ? Ue(xe) : [d(ir, { modelValue: xe.selected, color: e.color, dark: r.value, dense: e.dense, "onUpdate:modelValue": (ht, z) => {
          te([xe.key], [xe.row], ht, z);
        } })];
        Fe.unshift(d("div", { class: "q-table__grid-item-row" }, yt), d(Ql, { dark: r.value }));
      }
      const Be = { class: ["q-table__grid-item-card" + h.value, e.cardClass], style: e.cardStyle };
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
    return d("div", { class: ["q-table__grid-content row", e.cardContainerClass], style: e.cardContainerStyle }, R.value.map((xe, Fe) => se(qe({ key: u.value(xe), row: xe, pageIndex: Fe }))));
  }
  return Object.assign(l.proxy, { requestServerInteraction: p, setPagination: y, firstPage: j, prevPage: J, nextPage: ne, lastPage: Y, isRowSelected: V, clearSelection: D, isRowExpanded: x, setExpanded: A, sort: B, resetVirtualScroll: ve, scrollTo: le, getCellValue: ue }), Yv(l.proxy, { filteredSortedRows: () => N.value, computedRows: () => R.value, computedRowsNumber: () => M.value }), () => {
    const se = [re()], xe = { ref: c, class: g.value };
    return e.grid === true ? se.push(ln()) : Object.assign(xe, { class: [xe.class, e.cardClass], style: e.cardStyle }), se.push(de(), Ct()), e.loading === true && t.loading !== void 0 && se.push(t.loading()), d("div", xe, se);
  };
} });
me({ name: "QTr", props: { props: Object, noHover: Boolean }, setup(e, { slots: t }) {
  const n = f(() => "q-tr" + (e.props === void 0 || e.props.header === true ? "" : " " + e.props.__trClass) + (e.noHover === true ? " q-tr--no-hover" : ""));
  return () => {
    var _a2;
    return d("tr", { style: (_a2 = e.props) == null ? void 0 : _a2.__trStyle, class: n.value }, Pe(t.default));
  };
} });
me({ name: "QTd", props: { props: Object, autoWidth: Boolean, noHover: Boolean }, setup(e, { slots: t }) {
  const n = Se(), l = f(() => "q-td" + (e.autoWidth === true ? " q-table--col-auto-width" : "") + (e.noHover === true ? " q-td--no-hover" : "") + " ");
  return () => {
    if (e.props === void 0) return d("td", { class: l.value }, Pe(t.default));
    const a = n.vnode.key, r = (e.props.colsMap !== void 0 ? e.props.colsMap[a] : null) || e.props.col;
    if (r === void 0) return;
    const { row: o } = e.props;
    return d("td", { class: l.value + r.__tdClass(o), style: r.__tdStyle(o) }, Pe(t.default));
  };
} });
me({ name: "QRouteTab", props: { ...$r, ...Jm }, emits: Zm, setup(e, { slots: t, emit: n }) {
  const l = ai({ useDisableForRouterLinkProps: false }), { renderTab: a, $tabs: r } = eh(e, t, n, { exact: f(() => e.exact), ...l });
  return ge(() => `${e.name} | ${e.exact} | ${(l.resolvedLink.value || {}).href}`, r.verifyRouteModel), () => a(l.linkTag.value, l.linkAttrs.value);
} });
function V_(e, t) {
  return e.hour !== null && e.minute === null ? "minute" : "hour";
}
function I_() {
  const e = /* @__PURE__ */ new Date();
  return { hour: e.getHours(), minute: e.getMinutes(), second: e.getSeconds(), millisecond: e.getMilliseconds() };
}
me({ name: "QTime", props: { ...nt, ...wn, ...Fo, modelValue: { required: true, validator: (e) => typeof e == "string" || e === null }, mask: { ...Fo.mask, default: null }, format24h: { type: Boolean, default: null }, defaultDate: { type: String, validator: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e) }, options: Function, hourOptions: Array, minuteOptions: Array, secondOptions: Array, withSeconds: Boolean, nowBtn: Boolean }, emits: rh, setup(e, { slots: t, emit: n }) {
  const l = Se(), { $q: a } = l.proxy, r = lt(e, a), { tabindex: o, headerClass: i, getLocale: u, getCurrentDate: c } = oh(e, a), s = Rr(e), v = xl(s);
  let h, m;
  const g = W(null), _ = f(() => oe()), w = f(() => u()), C = f(() => B()), p = Ka(e.modelValue, _.value, w.value, e.calendar, C.value), y = W(V_(p)), b = W(p), x = W(p.hour === null || p.hour < 12), A = f(() => `q-time q-time--${e.landscape === true ? "landscape" : "portrait"}` + (r.value === true ? " q-time--dark q-dark" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-time--readonly" : "") + (e.bordered === true ? " q-time--bordered" : "") + (e.square === true ? " q-time--square no-border-radius" : "") + (e.flat === true ? " q-time--flat no-shadow" : "")), F = f(() => {
    const ue = b.value;
    return { hour: ue.hour === null ? "--" : N.value === true ? rt(ue.hour) : String(x.value === true ? ue.hour === 0 ? 12 : ue.hour : ue.hour > 12 ? ue.hour - 12 : ue.hour), minute: ue.minute === null ? "--" : rt(ue.minute), second: ue.second === null ? "--" : rt(ue.second) };
  }), N = f(() => e.format24h !== null ? e.format24h : a.lang.date.format24h), P = f(() => {
    const ue = y.value === "hour", ye = ue === true ? 12 : 60, re = b.value[y.value];
    let Ce = `rotate(${Math.round(re * (360 / ye)) - 180}deg) translateX(-50%)`;
    return ue === true && N.value === true && b.value.hour >= 12 && (Ce += " scale(.7)"), { transform: Ce };
  }), R = f(() => b.value.hour !== null), H = f(() => R.value === true && b.value.minute !== null), q = f(() => e.hourOptions !== void 0 ? (ue) => e.hourOptions.includes(ue) : e.options !== void 0 ? (ue) => e.options(ue, null, null) : null), E = f(() => e.minuteOptions !== void 0 ? (ue) => e.minuteOptions.includes(ue) : e.options !== void 0 ? (ue) => e.options(b.value.hour, ue, null) : null), k = f(() => e.secondOptions !== void 0 ? (ue) => e.secondOptions.includes(ue) : e.options !== void 0 ? (ue) => e.options(b.value.hour, b.value.minute, ue) : null), U = f(() => {
    if (q.value === null) return null;
    const ue = T(0, 11, q.value), ye = T(12, 11, q.value);
    return { am: ue, pm: ye, values: ue.values.concat(ye.values) };
  }), L = f(() => E.value !== null ? T(0, 59, E.value) : null), V = f(() => k.value !== null ? T(0, 59, k.value) : null), D = f(() => {
    switch (y.value) {
      case "hour":
        return U.value;
      case "minute":
        return L.value;
      case "second":
        return V.value;
    }
  }), te = f(() => {
    let ue, ye, re = 0, pe = 1;
    const Ce = D.value !== null ? D.value.values : void 0;
    y.value === "hour" ? N.value === true ? (ue = 0, ye = 23) : (ue = 0, ye = 11, x.value === false && (re = 12)) : (ue = 0, ye = 55, pe = 5);
    const Oe = [];
    for (let $e = ue, Ye = ue; $e <= ye; $e += pe, Ye++) {
      const it = $e + re, Ct = (Ce == null ? void 0 : Ce.includes(it)) === false, jt = y.value === "hour" && $e === 0 ? N.value === true ? "00" : "12" : $e;
      Oe.push({ val: it, index: Ye, disable: Ct, label: jt });
    }
    return Oe;
  }), be = f(() => [[gn, I, void 0, { stop: true, prevent: true, mouse: true }]]);
  ge(() => e.modelValue, (ue) => {
    const ye = Ka(ue, _.value, w.value, e.calendar, C.value);
    (ye.dateHash !== b.value.dateHash || ye.timeHash !== b.value.timeHash) && (b.value = ye, ye.hour === null ? y.value = "hour" : x.value = ye.hour < 12);
  }), ge([_, w], () => {
    We(() => {
      Me();
    });
  });
  function K() {
    const ue = { ...c(), ...I_() };
    Me(ue), Object.assign(b.value, ue), y.value = "hour";
  }
  function T(ue, ye, re) {
    const pe = Array.apply(null, { length: ye + 1 }).map((Ce, Oe) => {
      const $e = Oe + ue;
      return { index: $e, val: re($e) === true };
    }).filter((Ce) => Ce.val === true).map((Ce) => Ce.index);
    return { min: pe[0], max: pe[pe.length - 1], values: pe, threshold: ye + 1 };
  }
  function Z(ue, ye, re) {
    const pe = Math.abs(ue - ye);
    return Math.min(pe, re - pe);
  }
  function O(ue, { min: ye, max: re, values: pe, threshold: Ce }) {
    if (ue === ye) return ye;
    if (ue < ye || ue > re) return Z(ue, ye, Ce) <= Z(ue, re, Ce) ? ye : re;
    const Oe = pe.findIndex((it) => ue <= it), $e = pe[Oe - 1], Ye = pe[Oe];
    return ue - $e <= Ye - ue ? $e : Ye;
  }
  function oe() {
    return e.calendar !== "persian" && e.mask !== null ? e.mask : `HH:mm${e.withSeconds === true ? ":ss" : ""}`;
  }
  function B() {
    if (typeof e.defaultDate != "string") {
      const ue = c(true);
      return ue.dateHash = jn(ue), ue;
    }
    return Ka(e.defaultDate, "YYYY/MM/DD", void 0, e.calendar);
  }
  function $() {
    return hl(l) === true || D.value !== null && (D.value.values.length === 0 || y.value === "hour" && N.value !== true && U.value[x.value === true ? "am" : "pm"].values.length === 0);
  }
  function ee() {
    const ue = g.value, { top: ye, left: re, width: pe } = ue.getBoundingClientRect(), Ce = pe / 2;
    return { top: ye + Ce, left: re + Ce, dist: Ce * 0.7 };
  }
  function I(ue) {
    if ($() !== true) {
      if (ue.isFirst === true) {
        h = ee(), m = we(ue.evt, h);
        return;
      }
      m = we(ue.evt, h, m), ue.isFinal === true && (h = false, m = null, ae());
    }
  }
  function ae() {
    y.value === "hour" ? y.value = "minute" : e.withSeconds && y.value === "minute" && (y.value = "second");
  }
  function we(ue, ye, re) {
    const pe = en(ue), Ce = Math.abs(pe.top - ye.top), Oe = Math.sqrt(Math.pow(Math.abs(pe.top - ye.top), 2) + Math.pow(Math.abs(pe.left - ye.left), 2));
    let $e, Ye = Math.asin(Ce / Oe) * (180 / Math.PI);
    if (pe.top < ye.top ? Ye = ye.left < pe.left ? 90 - Ye : 270 + Ye : Ye = ye.left < pe.left ? Ye + 90 : 270 - Ye, y.value === "hour") {
      if ($e = Ye / 30, U.value !== null) {
        const it = N.value !== true ? x.value === true : U.value.am.values.length !== 0 && U.value.pm.values.length !== 0 ? Oe >= ye.dist : U.value.am.values.length !== 0;
        $e = O($e + (it === true ? 0 : 12), U.value[it === true ? "am" : "pm"]);
      } else $e = Math.round($e), N.value === true ? Oe < ye.dist ? $e < 12 && ($e += 12) : $e === 12 && ($e = 0) : x.value === true && $e === 12 ? $e = 0 : x.value === false && $e !== 12 && ($e += 12);
      N.value === true && (x.value = $e < 12);
    } else $e = Math.round(Ye / 6) % 60, y.value === "minute" && L.value !== null ? $e = O($e, L.value) : y.value === "second" && V.value !== null && ($e = O($e, V.value));
    return re !== $e && Q[y.value]($e), $e;
  }
  const S = { hour() {
    y.value = "hour";
  }, minute() {
    y.value = "minute";
  }, second() {
    y.value = "second";
  } };
  function M(ue) {
    ue.keyCode === 13 && ie();
  }
  function j(ue) {
    ue.keyCode === 13 && _e();
  }
  function J(ue) {
    $() !== true && (a.platform.is.desktop !== true && we(ue, ee()), ae());
  }
  function ne(ue) {
    $() !== true && we(ue, ee());
  }
  function Y(ue) {
    if (ue.keyCode === 13) y.value = "hour";
    else if ([37, 39].includes(ue.keyCode)) {
      const ye = ue.keyCode === 37 ? -1 : 1;
      if (U.value !== null) {
        const re = N.value === true ? U.value.values : U.value[x.value === true ? "am" : "pm"].values;
        if (re.length === 0) return;
        if (b.value.hour === null) ve(re[0]);
        else {
          const pe = (re.length + re.indexOf(b.value.hour) + ye) % re.length;
          ve(re[pe]);
        }
      } else {
        const re = N.value === true ? 24 : 12, pe = N.value !== true && x.value === false ? 12 : 0, Ce = b.value.hour === null ? -ye : b.value.hour;
        ve(pe + (24 + Ce + ye) % re);
      }
    }
  }
  function fe(ue) {
    if (ue.keyCode === 13) y.value = "minute";
    else if ([37, 39].includes(ue.keyCode)) {
      const ye = ue.keyCode === 37 ? -1 : 1;
      if (L.value !== null) {
        const re = L.value.values;
        if (re.length === 0) return;
        if (b.value.minute === null) de(re[0]);
        else {
          const pe = (re.length + re.indexOf(b.value.minute) + ye) % re.length;
          de(re[pe]);
        }
      } else {
        const re = b.value.minute === null ? -ye : b.value.minute;
        de((60 + re + ye) % 60);
      }
    }
  }
  function he(ue) {
    if (ue.keyCode === 13) y.value = "second";
    else if ([37, 39].includes(ue.keyCode)) {
      const ye = ue.keyCode === 37 ? -1 : 1;
      if (V.value !== null) {
        const re = V.value.values;
        if (re.length === 0) return;
        if (b.value.seconds === null) le(re[0]);
        else {
          const pe = (re.length + re.indexOf(b.value.second) + ye) % re.length;
          le(re[pe]);
        }
      } else {
        const re = b.value.second === null ? -ye : b.value.second;
        le((60 + re + ye) % 60);
      }
    }
  }
  function ve(ue) {
    b.value.hour !== ue && (b.value.hour = ue, qe());
  }
  function de(ue) {
    b.value.minute !== ue && (b.value.minute = ue, qe());
  }
  function le(ue) {
    b.value.second !== ue && (b.value.second = ue, qe());
  }
  const Q = { hour: ve, minute: de, second: le };
  function ie() {
    x.value === false && (x.value = true, b.value.hour !== null && (b.value.hour -= 12, qe()));
  }
  function _e() {
    x.value === true && (x.value = false, b.value.hour !== null && (b.value.hour += 12, qe()));
  }
  function ke(ue) {
    const ye = e.modelValue;
    y.value !== ue && ye !== void 0 && ye !== null && ye !== "" && typeof ye != "string" && (y.value = ue);
  }
  function qe() {
    if (q.value !== null && q.value(b.value.hour) !== true) {
      b.value = Ka(), ke("hour");
      return;
    }
    if (E.value !== null && E.value(b.value.minute) !== true) {
      b.value.minute = null, b.value.second = null, ke("minute");
      return;
    }
    if (e.withSeconds === true && k.value !== null && k.value(b.value.second) !== true) {
      b.value.second = null, ke("second");
      return;
    }
    b.value.hour === null || b.value.minute === null || e.withSeconds === true && b.value.second === null || Me();
  }
  function Me(ue) {
    const ye = Object.assign({ ...b.value }, ue), re = e.calendar === "persian" ? rt(ye.hour) + ":" + rt(ye.minute) + (e.withSeconds === true ? ":" + rt(ye.second) : "") : dh(new Date(ye.year, ye.month === null ? null : ye.month - 1, ye.day, ye.hour, ye.minute, ye.second, ye.millisecond), _.value, w.value, ye.year, ye.timezoneOffset);
    ye.changed = re !== e.modelValue, n("update:modelValue", re, ye);
  }
  function He() {
    const ue = [d("div", { class: "q-time__link " + (y.value === "hour" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: S.hour, onKeyup: Y }, F.value.hour), d("div", ":"), d("div", R.value === true ? { class: "q-time__link " + (y.value === "minute" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onKeyup: fe, onClick: S.minute } : { class: "q-time__link" }, F.value.minute)];
    e.withSeconds === true && ue.push(d("div", ":"), d("div", H.value === true ? { class: "q-time__link " + (y.value === "second" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onKeyup: he, onClick: S.second } : { class: "q-time__link" }, F.value.second));
    const ye = [d("div", { class: "q-time__header-label row items-center no-wrap", dir: "ltr" }, ue)];
    return N.value === false && ye.push(d("div", { class: "q-time__header-ampm column items-between no-wrap" }, [d("div", { class: "q-time__link " + (x.value === true ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: ie, onKeyup: M }, "AM"), d("div", { class: "q-time__link " + (x.value !== true ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: _e, onKeyup: j }, "PM")])), d("div", { class: "q-time__header flex flex-center no-wrap " + i.value }, ye);
  }
  function Ve() {
    const ue = b.value[y.value];
    return d("div", { class: "q-time__content col relative-position" }, [d(Ft, { name: "q-transition--scale" }, () => d("div", { key: "clock" + y.value, class: "q-time__container-parent absolute-full" }, [d("div", { ref: g, class: "q-time__container-child fit overflow-hidden" }, [sn(d("div", { class: "q-time__clock cursor-pointer non-selectable", onClick: J, onMousedown: ne }, [d("div", { class: "q-time__clock-circle fit" }, [d("div", { class: "q-time__clock-pointer" + (b.value[y.value] === null ? " hidden" : e.color !== void 0 ? ` text-${e.color}` : ""), style: P.value }), te.value.map((ye) => d("div", { class: `q-time__clock-position row flex-center q-time__clock-pos-${ye.index}` + (ye.val === ue ? " q-time__clock-position--active " + i.value : ye.disable === true ? " q-time__clock-position--disable" : "") }, [d("span", ye.label)]))])]), be.value)])])), e.nowBtn === true ? d(Ze, { class: "q-time__now-button absolute", icon: a.iconSet.datetime.now, unelevated: true, size: "sm", round: true, color: e.color, textColor: e.textColor, tabindex: o.value, onClick: K }) : null]);
  }
  return l.proxy.setNow = K, () => {
    const ue = [Ve()], ye = Pe(t.default);
    return ye !== void 0 && ue.push(d("div", { class: "q-time__actions" }, ye)), e.name !== void 0 && e.disable !== true && v(ue, "push"), d("div", { class: A.value, tabindex: -1 }, [He(), d("div", { class: "q-time__main col overflow-auto" }, ue)]);
  };
} });
me({ name: "QTimeline", props: { ...nt, color: { type: String, default: "primary" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, layout: { type: String, default: "dense", validator: (e) => ["dense", "comfortable", "loose"].includes(e) } }, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q);
  hn(am, e);
  const a = f(() => `q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}` + (l.value === true ? " q-timeline--dark" : ""));
  return () => d("ul", { class: a.value }, Pe(t.default));
} });
me({ name: "QTimelineEntry", props: { heading: Boolean, tag: { type: String, default: "h3" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, icon: String, avatar: String, color: String, title: String, subtitle: String, body: String }, setup(e, { slots: t }) {
  const n = Tt(am, ot);
  if (n === ot) return console.error("QTimelineEntry needs to be child of QTimeline"), ot;
  const l = f(() => `q-timeline__entry q-timeline__entry--${e.side}` + (e.icon !== void 0 || e.avatar !== void 0 ? " q-timeline__entry--icon" : "")), a = f(() => `q-timeline__dot text-${e.color || n.color}`), r = f(() => n.layout === "comfortable" && n.side === "left");
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
var Nd = me({ name: "QToolbar", props: { inset: Boolean }, setup(e, { slots: t }) {
  const n = f(() => "q-toolbar row no-wrap items-center" + (e.inset === true ? " q-toolbar--inset" : ""));
  return () => d("div", { class: n.value, role: "toolbar" }, Pe(t.default));
} }), Hd = me({ name: "QToolbarTitle", props: { shrink: Boolean }, setup(e, { slots: t }) {
  const n = f(() => "q-toolbar__title ellipsis" + (e.shrink === true ? " col-shrink" : ""));
  return () => d("div", { class: n.value }, Pe(t.default));
} }), z_ = ["none", "strict", "leaf", "leaf-filtered"];
me({ name: "QTree", props: { ...nt, nodes: { type: Array, required: true }, nodeKey: { type: String, required: true }, labelKey: { type: String, default: "label" }, childrenKey: { type: String, default: "children" }, dense: Boolean, color: String, controlColor: String, textColor: String, selectedColor: String, icon: String, tickStrategy: { type: String, default: "none", validator: (e) => z_.includes(e) }, ticked: Array, expanded: Array, selected: {}, noSelectionUnset: Boolean, defaultExpandAll: Boolean, accordion: Boolean, filter: String, filterMethod: Function, duration: {}, noConnectors: Boolean, noTransition: Boolean, noNodesLabel: String, noResultsLabel: String }, emits: ["update:expanded", "update:ticked", "update:selected", "lazyLoad", "afterShow", "afterHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = lt(e, a), o = W({}), i = W(e.ticked || []), u = W(e.expanded || []);
  let c = {};
  Ma(() => {
    c = {};
  });
  const s = f(() => `q-tree q-tree--${e.dense === true ? "dense" : "standard"}` + (e.noConnectors === true ? " q-tree--no-connectors" : "") + (r.value === true ? " q-tree--dark" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), v = f(() => e.selected !== void 0), h = f(() => e.icon || a.iconSet.tree.icon), m = f(() => e.controlColor || e.color), g = f(() => e.textColor !== void 0 ? ` text-${e.textColor}` : ""), _ = f(() => {
    const T = e.selectedColor || e.color;
    return T ? ` text-${T}` : "";
  }), w = f(() => e.filterMethod !== void 0 ? e.filterMethod : (T, Z) => {
    const O = Z.toLowerCase();
    return T[e.labelKey] && T[e.labelKey].toLowerCase().indexOf(O) !== -1;
  }), C = f(() => {
    const T = {}, Z = (O, oe) => {
      const B = O.tickStrategy || (oe ? oe.tickStrategy : e.tickStrategy), $ = O[e.nodeKey], ee = O[e.childrenKey] && Array.isArray(O[e.childrenKey]) && O[e.childrenKey].length !== 0, I = O.disabled !== true && v.value === true && O.selectable !== false, ae = O.disabled !== true && O.expandable !== false, we = B !== "none", S = B === "strict", M = B === "leaf-filtered", j = B === "leaf" || B === "leaf-filtered";
      let J = O.disabled !== true && O.tickable !== false;
      j === true && J === true && oe && oe.tickable !== true && (J = false);
      let ne = O.lazy;
      ne === true && o.value[$] !== void 0 && Array.isArray(O[e.childrenKey]) === true && (ne = o.value[$]);
      const Y = { key: $, parent: oe, isParent: ee, lazy: ne, disabled: O.disabled, link: O.disabled !== true && (I === true || ae === true && (ee === true || ne === true)), children: [], matchesFilter: e.filter ? w.value(O, e.filter) : true, selected: $ === e.selected && I === true, selectable: I, expanded: ee === true ? u.value.includes($) : false, expandable: ae, noTick: O.noTick === true || S !== true && ne && ne !== "loaded", tickable: J, tickStrategy: B, hasTicking: we, strictTicking: S, leafFilteredTicking: M, leafTicking: j, ticked: S === true ? i.value.includes($) : ee === true ? false : i.value.includes($) };
      if (T[$] = Y, ee === true && (Y.children = O[e.childrenKey].map((fe) => Z(fe, Y)), e.filter && (Y.matchesFilter !== true ? Y.matchesFilter = Y.children.some((fe) => fe.matchesFilter) : Y.noTick !== true && Y.disabled !== true && Y.tickable === true && M === true && Y.children.every((fe) => fe.matchesFilter !== true || fe.noTick === true || fe.tickable !== true) === true && (Y.tickable = false)), Y.matchesFilter === true && (Y.noTick !== true && S !== true && Y.children.every((fe) => fe.noTick) === true && (Y.noTick = true), j))) {
        if (Y.ticked = false, Y.indeterminate = Y.children.some((fe) => fe.indeterminate === true), Y.tickable = Y.tickable === true && Y.children.some((fe) => fe.tickable), Y.indeterminate !== true) {
          const fe = Y.children.reduce((he, ve) => ve.ticked === true ? he + 1 : he, 0);
          fe === Y.children.length ? Y.ticked = true : fe > 0 && (Y.indeterminate = true);
        }
        Y.indeterminate === true && (Y.indeterminateNextState = Y.children.every((fe) => fe.tickable !== true || fe.ticked !== true));
      }
      return Y;
    };
    return e.nodes.forEach((O) => Z(O, null)), T;
  });
  ge(() => e.ticked, (T) => {
    i.value = T;
  }), ge(() => e.expanded, (T) => {
    u.value = T;
  });
  function p(T) {
    const Z = [].reduce, O = (oe, B) => {
      if (oe || !B) return oe;
      if (Array.isArray(B) === true) return Z.call(Object(B), O, oe);
      if (B[e.nodeKey] === T) return B;
      if (B[e.childrenKey]) return O(null, B[e.childrenKey]);
    };
    return O(null, e.nodes);
  }
  function y() {
    return i.value.map((T) => p(T));
  }
  function b() {
    return u.value.map((T) => p(T));
  }
  function x(T) {
    return T && C.value[T] ? C.value[T].expanded : false;
  }
  function A() {
    e.expanded !== void 0 ? n("update:expanded", []) : u.value = [];
  }
  function F() {
    const T = [], Z = (O) => {
      O[e.childrenKey] && O[e.childrenKey].length !== 0 && O.expandable !== false && O.disabled !== true && (T.push(O[e.nodeKey]), O[e.childrenKey].forEach(Z));
    };
    e.nodes.forEach(Z), e.expanded !== void 0 ? n("update:expanded", T) : u.value = T;
  }
  function N(T, Z, O = p(T), oe = C.value[T]) {
    if (oe.lazy && oe.lazy !== "loaded") {
      if (oe.lazy === "loading") return;
      o.value[T] = "loading", Array.isArray(O[e.childrenKey]) !== true && (O[e.childrenKey] = []), n("lazyLoad", { node: O, key: T, done: (B) => {
        o.value[T] = "loaded", O[e.childrenKey] = Array.isArray(B) === true ? B : [], We(() => {
          var _a2;
          ((_a2 = C.value[T]) == null ? void 0 : _a2.isParent) === true && P(T, true);
        });
      }, fail: () => {
        delete o.value[T], O[e.childrenKey].length === 0 && delete O[e.childrenKey];
      } });
    } else oe.isParent === true && oe.expandable === true && P(T, Z);
  }
  function P(T, Z) {
    let O = u.value;
    const oe = e.expanded !== void 0;
    if (oe === true && (O = O.slice()), Z) {
      if (e.accordion && C.value[T]) {
        const B = [];
        C.value[T].parent ? C.value[T].parent.children.forEach(($) => {
          $.key !== T && $.expandable === true && B.push($.key);
        }) : e.nodes.forEach(($) => {
          const ee = $[e.nodeKey];
          ee !== T && B.push(ee);
        }), B.length !== 0 && (O = O.filter(($) => B.includes($) === false));
      }
      O = O.concat([T]).filter((B, $, ee) => ee.indexOf(B) === $);
    } else O = O.filter((B) => B !== T);
    oe === true ? n("update:expanded", O) : u.value = O;
  }
  function R(T) {
    return T && C.value[T] ? C.value[T].ticked : false;
  }
  function H(T, Z) {
    let O = i.value;
    const oe = e.ticked !== void 0;
    oe === true && (O = O.slice()), Z ? O = O.concat(T).filter((B, $, ee) => ee.indexOf(B) === $) : O = O.filter((B) => T.includes(B) === false), oe === true && n("update:ticked", O);
  }
  function q(T, Z, O) {
    const oe = { tree: l, node: T, key: O, color: e.color, dark: r.value };
    return Ot(oe, "expanded", () => Z.expanded, (B) => {
      B !== Z.expanded && N(O, B);
    }), Ot(oe, "ticked", () => Z.ticked, (B) => {
      B !== Z.ticked && H([O], B);
    }), oe;
  }
  function E(T) {
    return (e.filter ? T.filter((Z) => C.value[Z[e.nodeKey]].matchesFilter) : T).map((Z) => V(Z));
  }
  function k(T) {
    if (T.icon !== void 0) return d(et, { class: "q-tree__icon q-mr-sm", name: T.icon, color: T.iconColor });
    const Z = T.img || T.avatar;
    if (Z) return d("img", { class: `q-tree__${T.img ? "img" : "avatar"} q-mr-sm`, src: Z });
  }
  function U() {
    n("afterShow");
  }
  function L() {
    n("afterHide");
  }
  function V(T) {
    const Z = T[e.nodeKey], O = C.value[Z], oe = T.header && t[`header-${T.header}`] || t["default-header"], B = O.isParent === true ? E(T[e.childrenKey]) : [], $ = B.length !== 0 || O.lazy && O.lazy !== "loaded";
    let ee = T.body && t[`body-${T.body}`] || t["default-body"];
    const I = oe !== void 0 || ee !== void 0 ? q(T, O, Z) : null;
    return ee !== void 0 && (ee = d("div", { class: "q-tree__node-body relative-position" }, [d("div", { class: g.value }, [ee(I)])])), d("div", { key: Z, class: `q-tree__node relative-position q-tree__node--${$ === true ? "parent" : "child"}` }, [d("div", { class: "q-tree__node-header relative-position row no-wrap items-center" + (O.link === true ? " q-tree__node--link q-hoverable q-focusable" : "") + (O.selected === true ? " q-tree__node--selected" : "") + (O.disabled === true ? " q-tree__node--disabled" : ""), tabindex: O.link === true ? 0 : -1, ariaExpanded: B.length > 0 ? O.expanded : null, role: "treeitem", onClick: (ae) => {
      te(T, O, ae);
    }, onKeypress(ae) {
      Yl(ae) !== true && (ae.keyCode === 13 ? te(T, O, ae, true) : ae.keyCode === 32 && be(T, O, ae, true));
    } }, [d("div", { class: "q-focus-helper", tabindex: -1, ref: (ae) => {
      c[O.key] = ae;
    } }), O.lazy === "loading" ? d(_n, { class: "q-tree__spinner", color: m.value }) : $ === true ? d(et, { class: "q-tree__arrow" + (O.expanded === true ? " q-tree__arrow--rotate" : ""), name: h.value, onClick(ae) {
      be(T, O, ae);
    } }) : null, O.hasTicking === true && O.noTick !== true ? d(ir, { class: "q-tree__tickbox", modelValue: O.indeterminate === true ? null : O.ticked, color: m.value, dark: r.value, dense: true, keepColor: true, disable: O.tickable !== true, onKeydown: je, "onUpdate:modelValue": (ae) => {
      K(O, ae);
    } }) : null, d("div", { class: "q-tree__node-header-content col row no-wrap items-center" + (O.selected === true ? _.value : g.value) }, [oe ? oe(I) : [k(T), d("div", T[e.labelKey])]])]), $ === true ? e.noTransition === true ? O.expanded === true ? d("div", { class: "q-tree__node-collapsible" + g.value, key: `${Z}__q` }, [ee, d("div", { class: "q-tree__children" + (O.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, B)]) : null : d(zs, { duration: e.duration, onShow: U, onHide: L }, () => sn(d("div", { class: "q-tree__node-collapsible" + g.value, key: `${Z}__q` }, [ee, d("div", { class: "q-tree__children" + (O.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, B)]), [[Uv, O.expanded]])) : ee]);
  }
  function D(T) {
    var _a2;
    (_a2 = c[T]) == null ? void 0 : _a2.focus();
  }
  function te(T, Z, O, oe) {
    oe !== true && Z.selectable !== false && D(Z.key), v.value && Z.selectable ? e.noSelectionUnset === false ? n("update:selected", Z.key !== e.selected ? Z.key : null) : Z.key !== e.selected && n("update:selected", Z.key === void 0 ? null : Z.key) : be(T, Z, O, oe), typeof T.handler == "function" && T.handler(T);
  }
  function be(T, Z, O, oe) {
    O !== void 0 && je(O), oe !== true && Z.selectable !== false && D(Z.key), N(Z.key, !Z.expanded, T, Z);
  }
  function K(T, Z) {
    if (T.indeterminate === true && (Z = T.indeterminateNextState), T.strictTicking) H([T.key], Z);
    else if (T.leafTicking) {
      const O = [], oe = (B) => {
        B.isParent ? (Z !== true && B.noTick !== true && B.tickable === true && O.push(B.key), B.leafTicking === true && B.children.forEach(oe)) : B.noTick !== true && B.tickable === true && (B.leafFilteredTicking !== true || B.matchesFilter === true) && O.push(B.key);
      };
      oe(T), H(O, Z);
    }
  }
  return e.defaultExpandAll === true && F(), Object.assign(l, { getNodeByKey: p, getTickedNodes: y, getExpandedNodes: b, isExpanded: x, collapseAll: A, expandAll: F, setExpanded: N, isTicked: R, setTicked: H }), () => {
    const T = E(e.nodes);
    return d("div", { class: s.value, role: "tree" }, T.length === 0 ? e.filter ? e.noResultsLabel || a.lang.tree.noResults : e.noNodesLabel || a.lang.tree.noNodes : T);
  };
} });
function jd(e) {
  return (e * 100).toFixed(2) + "%";
}
var D_ = { ...nt, ...xh, label: String, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, noThumbnails: Boolean, thumbnailFit: { type: String, default: "cover" }, autoUpload: Boolean, hideUploadBtn: Boolean, disable: Boolean, readonly: Boolean }, Hh = [...Ch, "start", "finish", "added", "removed"];
function N_(e, t) {
  const n = Se(), { props: l, slots: a, emit: r, proxy: o } = n, { $q: i } = o, u = lt(l, i);
  function c(I, ae, we) {
    if (I.__status = ae, ae === "idle") {
      I.__uploaded = 0, I.__progress = 0, I.__sizeLabel = Eu(I.size), I.__progressLabel = "0.00%";
      return;
    }
    if (ae === "failed") {
      o.$forceUpdate();
      return;
    }
    I.__uploaded = ae === "uploaded" ? I.size : we, I.__progress = ae === "uploaded" ? 1 : Math.min(0.9999, I.__uploaded / I.size), I.__progressLabel = jd(I.__progress), o.$forceUpdate();
  }
  const s = f(() => l.disable !== true && l.readonly !== true), v = W(false), h = W(null), m = W(null), g = { files: W([]), queuedFiles: W([]), uploadedFiles: W([]), uploadedSize: W(0), updateFileStatus: c, isAlive: () => hl(n) === false }, { pickFiles: _, addFiles: w, onDragover: C, onDragleave: p, processFiles: y, getDndNode: b, maxFilesNumber: x, maxTotalSizeNumber: A } = kh({ editable: s, dnd: v, getFileInput: K, addFilesToQueue: T });
  Object.assign(g, e({ props: l, slots: a, emit: r, helpers: g, exposeApi: (I) => {
    Object.assign(g, I);
  } })), g.isBusy === void 0 && (g.isBusy = W(false));
  const F = W(0), N = f(() => F.value === 0 ? 0 : g.uploadedSize.value / F.value), P = f(() => jd(N.value)), R = f(() => Eu(F.value)), H = f(() => s.value === true && g.isUploading.value !== true && (l.multiple === true || g.queuedFiles.value.length === 0) && (l.maxFiles === void 0 || g.files.value.length < x.value) && (l.maxTotalSize === void 0 || F.value < A.value)), q = f(() => s.value === true && g.isBusy.value !== true && g.isUploading.value !== true && g.queuedFiles.value.length !== 0);
  hn(cm, oe);
  const E = f(() => "q-uploader column no-wrap" + (u.value === true ? " q-uploader--dark q-dark" : "") + (l.bordered === true ? " q-uploader--bordered" : "") + (l.square === true ? " q-uploader--square no-border-radius" : "") + (l.flat === true ? " q-uploader--flat no-shadow" : "") + (l.disable === true ? " disabled q-uploader--disable" : "") + (v.value === true ? " q-uploader--dnd" : "")), k = f(() => "q-uploader__header" + (l.color !== void 0 ? ` bg-${l.color}` : "") + (l.textColor !== void 0 ? ` text-${l.textColor}` : ""));
  ge(g.isUploading, (I, ae) => {
    ae === false && I === true ? r("start") : ae === true && I === false && r("finish");
  });
  function U() {
    l.disable === false && (g.abort(), g.uploadedSize.value = 0, F.value = 0, be(), g.files.value = [], g.queuedFiles.value = [], g.uploadedFiles.value = []);
  }
  function L() {
    l.disable === false && D(["uploaded"], () => {
      g.uploadedFiles.value = [];
    });
  }
  function V() {
    D(["idle", "failed"], ({ size: I }) => {
      F.value -= I, g.queuedFiles.value = [];
    });
  }
  function D(I, ae) {
    if (l.disable === true) return;
    const we = { files: [], size: 0 }, S = g.files.value.filter((M) => I.indexOf(M.__status) === -1 ? true : (we.size += M.size, we.files.push(M), M.__img !== void 0 && window.URL.revokeObjectURL(M.__img.src), false));
    we.files.length !== 0 && (g.files.value = S, ae(we), r("removed", we.files));
  }
  function te(I) {
    l.disable || (I.__status === "uploaded" ? g.uploadedFiles.value = g.uploadedFiles.value.filter((ae) => ae.__key !== I.__key) : I.__status === "uploading" ? I.__abort() : F.value -= I.size, g.files.value = g.files.value.filter((ae) => ae.__key !== I.__key ? true : (ae.__img !== void 0 && window.URL.revokeObjectURL(ae.__img.src), false)), g.queuedFiles.value = g.queuedFiles.value.filter((ae) => ae.__key !== I.__key), r("removed", [I]));
  }
  function be() {
    g.files.value.forEach((I) => {
      I.__img !== void 0 && window.URL.revokeObjectURL(I.__img.src);
    });
  }
  function K() {
    return m.value || h.value.getElementsByClassName("q-uploader__input")[0];
  }
  function T(I, ae) {
    const we = y(I, ae, g.files.value, true), S = K();
    S != null && (S.value = ""), we !== void 0 && (we.forEach((M) => {
      if (g.updateFileStatus(M, "idle"), F.value += M.size, l.noThumbnails !== true && M.type.toUpperCase().startsWith("IMAGE")) {
        const j = new Image();
        j.src = window.URL.createObjectURL(M), M.__img = j;
      }
    }), g.files.value = g.files.value.concat(we), g.queuedFiles.value = g.queuedFiles.value.concat(we), r("added", we), l.autoUpload === true && g.upload());
  }
  function Z() {
    q.value === true && g.upload();
  }
  function O(I, ae, we) {
    if (I === true) {
      const S = { type: "a", key: ae, icon: i.iconSet.uploader[ae], flat: true, dense: true };
      let M;
      return ae === "add" ? (S.onClick = _, M = oe) : S.onClick = we, d(Ze, S, M);
    }
  }
  function oe() {
    return d("input", { ref: m, class: "q-uploader__input overflow-hidden absolute-full", tabindex: -1, type: "file", title: "", accept: l.accept, multiple: l.multiple === true ? "multiple" : void 0, capture: l.capture, onMousedown: wt, onClick: _, onChange: T });
  }
  function B() {
    return a.header !== void 0 ? a.header(ee) : [d("div", { class: "q-uploader__header-content column" }, [d("div", { class: "flex flex-center no-wrap q-gutter-xs" }, [O(g.queuedFiles.value.length !== 0, "removeQueue", V), O(g.uploadedFiles.value.length !== 0, "removeUploaded", L), g.isUploading.value === true ? d(_n, { class: "q-uploader__spinner" }) : null, d("div", { class: "col column justify-center" }, [l.label !== void 0 ? d("div", { class: "q-uploader__title" }, [l.label]) : null, d("div", { class: "q-uploader__subtitle" }, [R.value + " / " + P.value])]), O(H.value, "add"), O(l.hideUploadBtn === false && q.value === true, "upload", g.upload), O(g.isUploading.value, "clear", g.abort)])])];
  }
  function $() {
    return a.list !== void 0 ? a.list(ee) : g.files.value.map((I) => d("div", { key: I.__key, class: "q-uploader__file relative-position" + (l.noThumbnails !== true && I.__img !== void 0 ? " q-uploader__file--img" : "") + (I.__status === "failed" ? " q-uploader__file--failed" : I.__status === "uploaded" ? " q-uploader__file--uploaded" : ""), style: l.noThumbnails !== true && I.__img !== void 0 ? { backgroundImage: 'url("' + I.__img.src + '")', backgroundSize: l.thumbnailFit } : null }, [d("div", { class: "q-uploader__file-header row flex-center no-wrap" }, [I.__status === "failed" ? d(et, { class: "q-uploader__file-status", name: i.iconSet.type.negative, color: "negative" }) : null, d("div", { class: "q-uploader__file-header-content col" }, [d("div", { class: "q-uploader__title" }, [I.name]), d("div", { class: "q-uploader__subtitle row items-center no-wrap" }, [I.__sizeLabel + " / " + I.__progressLabel])]), I.__status === "uploading" ? d(Qm, { value: I.__progress, min: 0, max: 1, indeterminate: I.__progress === 0 }) : d(Ze, { round: true, dense: true, flat: true, icon: i.iconSet.uploader[I.__status === "uploaded" ? "done" : "clear"], onClick: () => {
      te(I);
    } })])]));
  }
  Ke(() => {
    g.isUploading.value === true && g.abort(), g.files.value.length !== 0 && be();
  });
  const ee = {};
  for (const I in g) pt(g[I]) === true ? Ot(ee, I, () => g[I].value) : ee[I] = g[I];
  return Object.assign(ee, { upload: Z, reset: U, removeUploadedFiles: L, removeQueuedFiles: V, removeFile: te, pickFiles: _, addFiles: w }), Yv(ee, { canAddFiles: () => H.value, canUpload: () => q.value, uploadSizeLabel: () => R.value, uploadProgressLabel: () => P.value }), t({ ...g, upload: Z, reset: U, removeUploadedFiles: L, removeQueuedFiles: V, removeFile: te, pickFiles: _, addFiles: w, canAddFiles: H, canUpload: q, uploadSizeLabel: R, uploadProgressLabel: P }), () => {
    const I = [d("div", { class: k.value }, B()), d("div", { class: "q-uploader__list scroll" }, $()), b("uploader")];
    g.isBusy.value === true && I.push(d("div", { class: "q-uploader__overlay absolute-full flex flex-center" }, [d(_n)]));
    const ae = { ref: h, class: E.value };
    return H.value === true && Object.assign(ae, { onDragover: C, onDragleave: p }), d("div", ae, I);
  };
}
var H_ = () => true;
function jh(e) {
  const t = {};
  return e.forEach((n) => {
    t[n] = H_;
  }), t;
}
var j_ = jh(Hh), U_ = ({ name: e, props: t, emits: n, injectPlugin: l }) => me({ name: e, props: { ...D_, ...t }, emits: Pt(n) === true ? { ...j_, ...n } : [...Hh, ...n], setup(a, { expose: r }) {
  return N_(l, r);
} });
function Nn(e) {
  return typeof e == "function" ? e : () => e;
}
var Q_ = "QUploader", K_ = { url: [Function, String], method: { type: [Function, String], default: "POST" }, fieldName: { type: [Function, String], default: () => (e) => e.name }, headers: [Function, Array], formFields: [Function, Array], withCredentials: [Function, Boolean], sendRaw: [Function, Boolean], batch: [Function, Boolean], factory: Function }, W_ = ["factoryFailed", "uploaded", "failed", "uploading"];
function Y_({ props: e, emit: t, helpers: n }) {
  const l = W([]), a = W([]), r = W(0), o = f(() => ({ url: Nn(e.url), method: Nn(e.method), headers: Nn(e.headers), formFields: Nn(e.formFields), fieldName: Nn(e.fieldName), withCredentials: Nn(e.withCredentials), sendRaw: Nn(e.sendRaw), batch: Nn(e.batch) })), i = f(() => r.value > 0), u = f(() => a.value.length !== 0);
  let c;
  function s() {
    l.value.forEach((g) => {
      g.abort();
    }), a.value.length !== 0 && (c = true);
  }
  function v() {
    const g = n.queuedFiles.value.slice(0);
    n.queuedFiles.value = [], o.value.batch(g) ? h(g) : g.forEach((_) => {
      h([_]);
    });
  }
  function h(g) {
    if (r.value++, typeof e.factory != "function") {
      m(g, {});
      return;
    }
    const _ = e.factory(g);
    if (!_) t("factoryFailed", new Error("QUploader: factory() does not return properly"), g), r.value--;
    else if (typeof _.catch == "function" && typeof _.then == "function") {
      a.value.push(_);
      const w = (C) => {
        n.isAlive() === true && (a.value = a.value.filter((p) => p !== _), a.value.length === 0 && (c = false), n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach((p) => {
          n.updateFileStatus(p, "failed");
        }), t("factoryFailed", C, g), r.value--);
      };
      _.then((C) => {
        c === true ? w(new Error("Aborted")) : n.isAlive() === true && (a.value = a.value.filter((p) => p !== _), m(g, C));
      }).catch(w);
    } else m(g, _ || {});
  }
  function m(g, _) {
    const w = new FormData(), C = new XMLHttpRequest(), p = (q, E) => _[q] !== void 0 ? Nn(_[q])(E) : o.value[q](E), y = p("url", g);
    if (!y) {
      console.error("q-uploader: invalid or no URL specified"), r.value--;
      return;
    }
    const b = p("formFields", g);
    b !== void 0 && b.forEach((q) => {
      w.append(q.name, q.value);
    });
    let x = 0, A = 0, F = 0, N = 0, P;
    C.upload.addEventListener("progress", (q) => {
      if (P === true) return;
      const E = Math.min(N, q.loaded);
      n.uploadedSize.value += E - F, F = E;
      let k = F - A;
      for (let U = x; k > 0 && U < g.length; U++) {
        const L = g[U];
        if (k > L.size) k -= L.size, x++, A += L.size, n.updateFileStatus(L, "uploading", L.size);
        else {
          n.updateFileStatus(L, "uploading", k);
          return;
        }
      }
    }, false), C.onreadystatechange = () => {
      C.readyState < 4 || (C.status && C.status < 400 ? (n.uploadedFiles.value = n.uploadedFiles.value.concat(g), g.forEach((q) => {
        n.updateFileStatus(q, "uploaded");
      }), t("uploaded", { files: g, xhr: C })) : (P = true, n.uploadedSize.value -= F, n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach((q) => {
        n.updateFileStatus(q, "failed");
      }), t("failed", { files: g, xhr: C })), r.value--, l.value = l.value.filter((q) => q !== C));
    }, C.open(p("method", g), y), p("withCredentials", g) === true && (C.withCredentials = true);
    const R = p("headers", g);
    R !== void 0 && R.forEach((q) => {
      C.setRequestHeader(q.name, q.value);
    });
    const H = p("sendRaw", g);
    g.forEach((q) => {
      n.updateFileStatus(q, "uploading", 0), H !== true && w.append(p("fieldName", q), q, q.name), q.xhr = C, q.__abort = () => {
        C.abort();
      }, N += q.size;
    }), t("uploading", { files: g, xhr: C }), l.value.push(C), H === true ? C.send(new Blob(g)) : C.send(w);
  }
  return { isUploading: i, isBusy: u, abort: s, upload: v };
}
var G_ = { name: Q_, props: K_, emits: W_, injectPlugin: Y_ };
U_(G_);
me({ name: "QUploaderAddTrigger", setup() {
  const e = Tt(cm, ot);
  return e === ot && console.error("QUploaderAddTrigger needs to be child of QUploader"), e;
} });
me({ name: "QVideo", props: { ...Ds, src: { type: String, required: true }, title: String, fetchpriority: { type: String, default: "auto" }, loading: { type: String, default: "eager" }, referrerpolicy: { type: String, default: "strict-origin-when-cross-origin" } }, setup(e) {
  const t = Ns(e), n = f(() => "q-video" + (e.ratio !== void 0 ? " q-video--responsive" : ""));
  return () => d("div", { class: n.value, style: t.value }, [d("iframe", { src: e.src, title: e.title, fetchpriority: e.fetchpriority, loading: e.loading, referrerpolicy: e.referrerpolicy, frameborder: "0", allowfullscreen: true })]);
} });
function Ud(e) {
  if (e === false) return 0;
  if (e === true || e === void 0) return 1;
  const t = parseInt(e, 10);
  return isNaN(t) ? 0 : t;
}
An({ name: "close-popup", beforeMount(e, { value: t }) {
  const n = { depth: Ud(t), handler(l) {
    n.depth !== 0 && setTimeout(() => {
      const a = Wy(e);
      a !== void 0 && Yy(a, l, n.depth);
    });
  }, handlerKey(l) {
    yn(l, 13) === true && n.handler(l);
  } };
  e.__qclosepopup = n, e.addEventListener("click", n.handler), e.addEventListener("keyup", n.handlerKey);
}, updated(e, { value: t, oldValue: n }) {
  t !== n && (e.__qclosepopup.depth = Ud(t));
}, beforeUnmount(e) {
  const t = e.__qclosepopup;
  e.removeEventListener("click", t.handler), e.removeEventListener("keyup", t.handlerKey), delete e.__qclosepopup;
} });
var X_ = 0, Da = void 0;
function Qd(e, t) {
  Da === void 0 && (Da = document.createElement("div"), Da.style.cssText = "position: absolute; left: 0; top: 0", document.body.appendChild(Da));
  const n = e.getBoundingClientRect(), l = Da.getBoundingClientRect(), { marginLeft: a, marginRight: r, marginTop: o, marginBottom: i } = window.getComputedStyle(e), u = parseInt(a, 10) + parseInt(r, 10), c = parseInt(o, 10) + parseInt(i, 10);
  return { left: n.left - l.left, top: n.top - l.top, width: n.right - n.left, height: n.bottom - n.top, widthM: n.right - n.left + (t === true ? 0 : u), heightM: n.bottom - n.top + (t === true ? 0 : c), marginH: t === true ? u : 0, marginV: t === true ? c : 0 };
}
function Zr(e) {
  return { width: e.scrollWidth, height: e.scrollHeight };
}
var Kd = ["Top", "Right", "Bottom", "Left"], Wd = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], Z_ = /-block|-inline|block-|inline-/, J_ = /(-block|-inline|block-|inline-).*:/;
function Yd(e, t) {
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
      for (let u = 0; u < Kd.length; u++) {
        const c = "border" + Kd[u] + o;
        i += n[c] + " ";
      }
      l[r] = i;
    } else if (r === "borderRadius") {
      let o = "", i = "";
      for (let u = 0; u < Wd.length; u++) {
        const c = n[Wd[u]].split(" ");
        o += c[0] + " ", i += (c[1] === void 0 ? c[0] : c[1]) + " ";
      }
      l[r] = o + "/ " + i;
    } else l[r] = n[r];
    else r === "cssText" ? l[r] = n[r].split(";").filter((o) => J_.test(o) !== true).join(";") : l[r] = n[r];
  }
  return l;
}
var ew = ["absolute", "fixed", "relative", "sticky"];
function Gd(e) {
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
function Xd(e) {
  const t = typeof e;
  return t === "function" ? e() : t === "string" ? document.querySelector(e) : e;
}
function Zd(e) {
  return e && e.ownerDocument === document && e.parentNode !== null;
}
function lw(e) {
  let t = () => false, n = false, l = true;
  const a = tw(e), r = nw(e), o = Xd(a.from);
  if (Zd(o) !== true) return t;
  typeof o.qMorphCancel == "function" && o.qMorphCancel();
  let i, u, c, s;
  const v = o.parentNode, h = o.nextElementSibling, m = Qd(o, r.resize), { width: g, height: _ } = Zr(v), { borderWidth: w, borderStyle: C, borderColor: p, borderRadius: y, backgroundColor: b, transform: x, position: A, cssText: F } = Yd(o, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), N = o.classList.toString(), P = o.style.cssText, R = o.cloneNode(true), H = r.tween === true ? o.cloneNode(true) : void 0;
  H !== void 0 && (H.className = H.classList.toString().split(" ").filter((E) => /^bg-/.test(E) === false).join(" ")), r.hideFromClone === true && R.classList.add("q-morph--internal"), R.setAttribute("aria-hidden", "true"), R.style.transition = "none", R.style.animation = "none", R.style.pointerEvents = "none", v.insertBefore(R, h), o.qMorphCancel = () => {
    n = true, R.remove(), H == null ? void 0 : H.remove(), r.hideFromClone === true && R.classList.remove("q-morph--internal"), o.qMorphCancel = void 0;
  };
  const q = () => {
    const E = Xd(a.to);
    if (n === true || Zd(E) !== true) {
      typeof o.qMorphCancel == "function" && o.qMorphCancel();
      return;
    }
    o !== E && typeof E.qMorphCancel == "function" && E.qMorphCancel(), r.keepToClone !== true && E.classList.add("q-morph--internal"), R.classList.add("q-morph--internal");
    const { width: k, height: U } = Zr(v), { width: L, height: V } = Zr(E.parentNode);
    r.hideFromClone !== true && R.classList.remove("q-morph--internal"), E.qMorphCancel = () => {
      n = true, R.remove(), H == null ? void 0 : H.remove(), r.hideFromClone === true && R.classList.remove("q-morph--internal"), r.keepToClone !== true && E.classList.remove("q-morph--internal"), o.qMorphCancel = void 0, E.qMorphCancel = void 0;
    };
    const D = () => {
      if (n === true) {
        typeof E.qMorphCancel == "function" && E.qMorphCancel();
        return;
      }
      r.hideFromClone !== true && (R.classList.add("q-morph--internal"), R.innerHTML = "", R.style.left = 0, R.style.right = "unset", R.style.top = 0, R.style.bottom = "unset", R.style.transform = "none"), r.keepToClone !== true && E.classList.remove("q-morph--internal");
      const te = E.parentNode, { width: be, height: K } = Zr(te), T = E.cloneNode(r.keepToClone);
      T.setAttribute("aria-hidden", "true"), r.keepToClone !== true && (T.style.left = 0, T.style.right = "unset", T.style.top = 0, T.style.bottom = "unset", T.style.transform = "none", T.style.pointerEvents = "none"), T.classList.add("q-morph--internal");
      const Z = E === o && v === te ? R : E.nextElementSibling;
      te.insertBefore(T, Z);
      const { borderWidth: O, borderStyle: oe, borderColor: B, borderRadius: $, backgroundColor: ee, transform: I, position: ae, cssText: we } = Yd(E, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), S = E.classList.toString(), M = E.style.cssText;
      E.style.cssText = we, E.style.transform = "none", E.style.animation = "none", E.style.transition = "none", E.className = S.split(" ").filter((pe) => /^bg-/.test(pe) === false).join(" ");
      const j = Qd(E, r.resize), J = m.left - j.left, ne = m.top - j.top, Y = m.width / (j.width > 0 ? j.width : 10), fe = m.height / (j.height > 0 ? j.height : 100), he = g - k, ve = _ - U, de = be - L, le = K - V, Q = Math.max(m.widthM, he), ie = Math.max(m.heightM, ve), _e = Math.max(j.widthM, de), ke = Math.max(j.heightM, le), qe = o === E && ["absolute", "fixed"].includes(ae) === false && ["absolute", "fixed"].includes(A) === false;
      let Me = ae === "fixed", He = te;
      for (; Me !== true && He !== document; ) Me = window.getComputedStyle(He).position === "fixed", He = He.parentNode;
      if (r.hideFromClone !== true && (R.style.display = "block", R.style.flex = "0 0 auto", R.style.opacity = 0, R.style.minWidth = "unset", R.style.maxWidth = "unset", R.style.minHeight = "unset", R.style.maxHeight = "unset", R.classList.remove("q-morph--internal")), r.keepToClone !== true && (T.style.display = "block", T.style.flex = "0 0 auto", T.style.opacity = 0, T.style.minWidth = "unset", T.style.maxWidth = "unset", T.style.minHeight = "unset", T.style.maxHeight = "unset"), T.classList.remove("q-morph--internal"), typeof r.classes == "string" && (E.className += " " + r.classes), typeof r.style == "string") E.style.cssText += " " + r.style;
      else if (Pt(r.style) === true) for (const pe in r.style) E.style[pe] = r.style[pe];
      const Ve = Gd(R), ue = Gd(E), ye = Me === true ? document.documentElement : { scrollLeft: 0, scrollTop: 0 };
      E.style.position = Me === true ? "fixed" : "absolute", E.style.left = `${j.left - ye.scrollLeft}px`, E.style.right = "unset", E.style.top = `${j.top - ye.scrollTop}px`, E.style.margin = 0, r.resize === true && (E.style.minWidth = "unset", E.style.maxWidth = "unset", E.style.minHeight = "unset", E.style.maxHeight = "unset", E.style.overflow = "hidden", E.style.overflowX = "hidden", E.style.overflowY = "hidden"), document.body.appendChild(E), H !== void 0 && (H.style.cssText = F, H.style.transform = "none", H.style.animation = "none", H.style.transition = "none", H.style.position = E.style.position, H.style.left = `${m.left - ye.scrollLeft}px`, H.style.right = "unset", H.style.top = `${m.top - ye.scrollTop}px`, H.style.margin = 0, H.style.pointerEvents = "none", r.resize === true && (H.style.minWidth = "unset", H.style.maxWidth = "unset", H.style.minHeight = "unset", H.style.maxHeight = "unset", H.style.overflow = "hidden", H.style.overflowX = "hidden", H.style.overflowY = "hidden"), document.body.appendChild(H));
      const re = (pe) => {
        o === E && l !== true ? (E.style.cssText = P, E.className = N) : (E.style.cssText = M, E.className = S), T.parentNode === te && te.insertBefore(E, T), R.remove(), T.remove(), H == null ? void 0 : H.remove(), t = () => false, o.qMorphCancel = void 0, E.qMorphCancel = void 0, typeof r.onEnd == "function" && r.onEnd(l === true ? "to" : "from", pe === true);
      };
      if (r.useCSS !== true && typeof E.animate == "function") {
        const pe = r.resize === true ? { transform: `translate(${J}px, ${ne}px)`, width: `${Q}px`, height: `${ie}px` } : { transform: `translate(${J}px, ${ne}px) scale(${Y}, ${fe})` }, Ce = r.resize === true ? { width: `${_e}px`, height: `${ke}px` } : {}, Oe = r.resize === true ? { width: `${Q}px`, height: `${ie}px` } : {}, $e = r.resize === true ? { transform: `translate(${-1 * J}px, ${-1 * ne}px)`, width: `${_e}px`, height: `${ke}px` } : { transform: `translate(${-1 * J}px, ${-1 * ne}px) scale(${1 / Y}, ${1 / fe})` }, Ye = H !== void 0 ? { opacity: r.tweenToOpacity } : { backgroundColor: b }, it = H !== void 0 ? { opacity: 1 } : { backgroundColor: ee };
        s = E.animate([{ margin: 0, borderWidth: w, borderStyle: C, borderColor: p, borderRadius: y, zIndex: Ve, transformOrigin: "0 0", ...pe, ...Ye }, { margin: 0, borderWidth: O, borderStyle: oe, borderColor: B, borderRadius: $, zIndex: ue, transformOrigin: "0 0", transform: I, ...Ce, ...it }], { duration: r.duration, easing: r.easing, fill: r.fill, delay: r.delay }), u = H === void 0 ? void 0 : H.animate([{ opacity: r.tweenFromOpacity, margin: 0, borderWidth: w, borderStyle: C, borderColor: p, borderRadius: y, zIndex: Ve, transformOrigin: "0 0", transform: x, ...Oe }, { opacity: 0, margin: 0, borderWidth: O, borderStyle: oe, borderColor: B, borderRadius: $, zIndex: ue, transformOrigin: "0 0", ...$e }], { duration: r.duration, easing: r.easing, fill: r.fill, delay: r.delay }), i = r.hideFromClone === true || qe === true ? void 0 : R.animate([{ margin: `${ve < 0 ? ve / 2 : 0}px ${he < 0 ? he / 2 : 0}px`, width: `${Q + m.marginH}px`, height: `${ie + m.marginV}px` }, { margin: 0, width: 0, height: 0 }], { duration: r.duration, easing: r.easing, fill: r.fill, delay: r.delay }), c = r.keepToClone === true ? void 0 : T.animate([qe === true ? { margin: `${ve < 0 ? ve / 2 : 0}px ${he < 0 ? he / 2 : 0}px`, width: `${Q + m.marginH}px`, height: `${ie + m.marginV}px` } : { margin: 0, width: 0, height: 0 }, { margin: `${le < 0 ? le / 2 : 0}px ${de < 0 ? de / 2 : 0}px`, width: `${_e + j.marginH}px`, height: `${ke + j.marginV}px` }], { duration: r.duration, easing: r.easing, fill: r.fill, delay: r.delay });
        const Ct = (jt) => {
          i == null ? void 0 : i.cancel(), u == null ? void 0 : u.cancel(), c == null ? void 0 : c.cancel(), s.cancel(), s.removeEventListener("finish", Ct), s.removeEventListener("cancel", Ct), re(jt), i = void 0, u = void 0, c = void 0, s = void 0;
        };
        o.qMorphCancel = () => {
          o.qMorphCancel = void 0, n = true, Ct();
        }, E.qMorphCancel = () => {
          E.qMorphCancel = void 0, n = true, Ct();
        }, s.addEventListener("finish", Ct), s.addEventListener("cancel", Ct), t = (jt) => n === true || s === void 0 ? false : jt === true ? (Ct(true), true) : (l = l !== true, i == null ? void 0 : i.reverse(), u == null ? void 0 : u.reverse(), c == null ? void 0 : c.reverse(), s.reverse(), true);
      } else {
        const pe = `q-morph-anim-${++X_}`, Ce = document.createElement("style"), Oe = r.resize === true ? `
            transform: translate(${J}px, ${ne}px);
            width: ${Q}px;
            height: ${ie}px;
          ` : `transform: translate(${J}px, ${ne}px) scale(${Y}, ${fe});`, $e = r.resize === true ? `
            width: ${_e}px;
            height: ${ke}px;
          ` : "", Ye = r.resize === true ? `
            width: ${Q}px;
            height: ${ie}px;
          ` : "", it = r.resize === true ? `
            transform: translate(${-1 * J}px, ${-1 * ne}px);
            width: ${_e}px;
            height: ${ke}px;
          ` : `transform: translate(${-1 * J}px, ${-1 * ne}px) scale(${1 / Y}, ${1 / fe});`, Ct = H !== void 0 ? `opacity: ${r.tweenToOpacity};` : `background-color: ${b};`, jt = H !== void 0 ? "opacity: 1;" : `background-color: ${ee};`, tl = H === void 0 ? "" : `
            @keyframes ${pe}-from-tween {
              0% {
                opacity: ${r.tweenFromOpacity};
                margin: 0;
                border-width: ${w};
                border-style: ${C};
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
                border-width: ${O};
                border-style: ${oe};
                border-color: ${B};
                border-radius: ${$};
                z-index: ${ue};
                transform-origin: 0 0;
                ${it}
              }
            }
          `, ln = r.hideFromClone === true || qe === true ? "" : `
            @keyframes ${pe}-from {
              0% {
                margin: ${ve < 0 ? ve / 2 : 0}px ${he < 0 ? he / 2 : 0}px;
                width: ${Q + m.marginH}px;
                height: ${ie + m.marginV}px;
              }

              100% {
                margin: 0;
                width: 0;
                height: 0;
              }
            }
          `, In = qe === true ? `
            margin: ${ve < 0 ? ve / 2 : 0}px ${he < 0 ? he / 2 : 0}px;
            width: ${Q + m.marginH}px;
            height: ${ie + m.marginV}px;
          ` : `
            margin: 0;
            width: 0;
            height: 0;
          `, se = r.keepToClone === true ? "" : `
            @keyframes ${pe}-to {
              0% {
                ${In}
              }

              100% {
                margin: ${le < 0 ? le / 2 : 0}px ${de < 0 ? de / 2 : 0}px;
                width: ${_e + j.marginH}px;
                height: ${ke + j.marginV}px;
              }
            }
          `;
        Ce.innerHTML = `
          @keyframes ${pe} {
            0% {
              margin: 0;
              border-width: ${w};
              border-style: ${C};
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
              border-width: ${O};
              border-style: ${oe};
              border-color: ${B};
              border-radius: ${$};
              background-color: ${ee};
              z-index: ${ue};
              transform-origin: 0 0;
              transform: ${I};
              ${$e}
              ${jt}
            }
          }

          ${ln}

          ${tl}

          ${se}
        `, document.head.appendChild(Ce);
        let xe = "normal";
        R.style.animation = `${r.duration}ms ${r.easing} ${r.delay}ms ${xe} ${r.fill} ${pe}-from`, H !== void 0 && (H.style.animation = `${r.duration}ms ${r.easing} ${r.delay}ms ${xe} ${r.fill} ${pe}-from-tween`), T.style.animation = `${r.duration}ms ${r.easing} ${r.delay}ms ${xe} ${r.fill} ${pe}-to`, E.style.animation = `${r.duration}ms ${r.easing} ${r.delay}ms ${xe} ${r.fill} ${pe}`;
        const Fe = (Be) => {
          Be === Object(Be) && Be.animationName !== pe || (E.removeEventListener("animationend", Fe), E.removeEventListener("animationcancel", Fe), re(), Ce.remove());
        };
        o.qMorphCancel = () => {
          o.qMorphCancel = void 0, n = true, Fe();
        }, E.qMorphCancel = () => {
          E.qMorphCancel = void 0, n = true, Fe();
        }, E.addEventListener("animationend", Fe), E.addEventListener("animationcancel", Fe), t = (Be) => n === true || !E || !R || !T ? false : Be === true ? (Fe(), true) : (l = l !== true, xe = xe === "normal" ? "reverse" : "normal", R.style.animationDirection = xe, H.style.animationDirection = xe, T.style.animationDirection = xe, E.style.animationDirection = xe, true);
      }
    };
    r.waitFor > 0 || r.waitFor === "transitionend" || r.waitFor === Object(r.waitFor) && typeof r.waitFor.then == "function" ? (r.waitFor > 0 ? new Promise((be) => setTimeout(be, r.waitFor)) : r.waitFor === "transitionend" ? new Promise((be) => {
      const K = () => {
        T !== null && (clearTimeout(T), T = null), E && (E.removeEventListener("transitionend", K), E.removeEventListener("transitioncancel", K)), be();
      };
      let T = setTimeout(K, 400);
      E.addEventListener("transitionend", K), E.addEventListener("transitioncancel", K);
    }) : r.waitFor).then(D).catch(() => {
      typeof E.qMorphCancel == "function" && E.qMorphCancel();
    }) : D();
  };
  return typeof e.onToggle == "function" && e.onToggle(), requestAnimationFrame(q), (E) => t(E);
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
function Jd(e, t) {
  let n;
  Object(t) === t ? (n = "" + t.model, iw(t, e), Qh(t, e)) : n = "" + t, n !== e.model ? (e.model = n, uw(n, e)) : e.animating === false && e.clsAction !== void 0 && e.el.classList[e.clsAction]("q-morph--invisible");
}
An({ name: "morph", mounted(e, t) {
  const n = { el: e, animating: false, opts: {} };
  Qh(t.modifiers, n), ow(t.arg, n), Jd(n, t.value), e.__qmorph = n;
}, updated(e, t) {
  Jd(e.__qmorph, t.value);
}, beforeUnmount(e) {
  var _a2;
  const t = e.__qmorph, n = Vo[t.group];
  n !== void 0 && n.queue.indexOf(t) !== -1 && (n.queue = n.queue.filter((a) => a !== t), n.queue.length === 0 && ((_a2 = n.cancel) == null ? void 0 : _a2.call(n), delete Vo[t.group])), t.clsAction === "add" && e.classList.remove("q-morph--invisible"), delete e.__qmorph;
} });
var sw = { childList: true, subtree: true, attributes: true, characterData: true, attributeOldValue: true, characterDataOldValue: true };
function ef(e, t, n) {
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
An({ name: "mutation", mounted(e, { modifiers: { once: t, ...n }, value: l }) {
  const a = { once: t, opts: Object.keys(n).length === 0 ? sw : n };
  ef(e, a, l), e.__qmutation = a;
}, updated(e, { oldValue: t, value: n }) {
  const l = e.__qmutation;
  l !== void 0 && t !== n && ef(e, l, n);
}, beforeUnmount: Kh });
var { passive: Io } = dt;
function tf(e, { value: t, oldValue: n }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, Io);
    return;
  }
  e.handler = t, typeof n != "function" && (e.scrollTarget.addEventListener("scroll", e.scroll, Io), e.scroll());
}
An({ name: "scroll-fire", mounted(e, t) {
  const n = { scrollTarget: Vn(e), scroll: Ea(() => {
    let l, a;
    n.scrollTarget === window ? (a = e.getBoundingClientRect().bottom, l = window.innerHeight) : (a = qo(e).top + Sa(e), l = qo(n.scrollTarget).top + Sa(n.scrollTarget)), a > 0 && a < l && (n.scrollTarget.removeEventListener("scroll", n.scroll, Io), n.handler(e));
  }, 25) };
  tf(n, t), e.__qscrollfire = n;
}, updated(e, t) {
  t.value !== t.oldValue && tf(e.__qscrollfire, t);
}, beforeUnmount(e) {
  const t = e.__qscrollfire;
  t.scrollTarget.removeEventListener("scroll", t.scroll, Io), t.scroll.cancel(), delete e.__qscrollfire;
} });
function nf(e, { value: t, oldValue: n }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, dt.passive);
    return;
  }
  e.handler = t, typeof n != "function" && e.scrollTarget.addEventListener("scroll", e.scroll, dt.passive);
}
An({ name: "scroll", mounted(e, t) {
  const n = { scrollTarget: Vn(e), scroll() {
    n.handler(gl(n.scrollTarget), ii(n.scrollTarget));
  } };
  nf(n, t), e.__qscroll = n;
}, updated(e, t) {
  e.__qscroll !== void 0 && t.oldValue !== t.value && nf(e.__qscroll, t);
}, beforeUnmount(e) {
  const t = e.__qscroll;
  t.scrollTarget.removeEventListener("scroll", t.scroll, dt.passive), delete e.__qscroll;
} });
An({ name: "touch-hold", beforeMount(e, t) {
  const { modifiers: n } = t;
  if (n.mouse !== true && Ie.has.touch !== true) return;
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
    Ie.is.mobile === true && (document.body.classList.add("non-selectable"), Mn(), l.styleCleanup = (u) => {
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
  Ie.has.touch === true && kt(l, "main", [[e, "touchstart", "touchStart", `passive${n.capture === true ? "Capture" : ""}`], [e, "touchend", "noop", "notPassiveCapture"]]);
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
An({ name: "touch-repeat", beforeMount(e, { modifiers: t, value: n, arg: l }) {
  const a = Object.keys(t).reduce((u, c) => {
    if (cw.test(c) === true) {
      const s = isNaN(parseInt(c, 10)) ? Wh[c.toLowerCase()] : parseInt(c, 10);
      s >= 0 && u.push(s);
    }
    return u;
  }, []);
  if (t.mouse !== true && Ie.has.touch !== true && a.length === 0) return;
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
    function v(m) {
      i.styleCleanup = void 0, document.documentElement.style.cursor = "";
      const g = () => {
        document.body.classList.remove("non-selectable");
      };
      m === true ? (Mn(), setTimeout(g, 10)) : g();
    }
    Ie.is.mobile === true && (document.body.classList.add("non-selectable"), Mn(), i.styleCleanup = v), i.event = { touch: c !== true && s !== true, mouse: c === true, keyboard: s === true, startTime: Date.now(), repeatCount: 0 };
    const h = () => {
      if (i.timer = void 0, i.event === void 0) return;
      i.event.repeatCount === 0 && (i.event.evt = u, s === true ? i.event.keyCode = u.keyCode : i.event.position = en(u), Ie.is.mobile !== true && (document.documentElement.style.cursor = "pointer", document.body.classList.add("non-selectable"), Mn(), i.styleCleanup = v)), i.event.duration = Date.now() - i.event.startTime, i.event.repeatCount += 1, i.handler(i.event);
      const m = o < i.event.repeatCount ? o : i.event.repeatCount;
      i.timer = setTimeout(h, r[m]);
    };
    r[0] === 0 ? h() : i.timer = setTimeout(h, r[0]);
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
  if (Ie.has.touch === true && kt(i, "main", [[e, "touchstart", "touchStart", `passive${t.capture === true ? "Capture" : ""}`], [e, "touchend", "noop", "passiveCapture"]]), a.length !== 0) {
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
  return Ie.is.winphone ? "msapplication-navbutton-color" : Ie.is.safari ? "apple-mobile-web-app-status-bar-style" : "theme-color";
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
Ie.is.mobile === true && (Ie.is.nativeMobile === true || Ie.is.winphone === true || Ie.is.safari === true || Ie.is.webkit === true || Ie.is.vivaldi);
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
function lf(e, t) {
  try {
    const n = e[t]();
    return n === void 0 ? Promise.resolve() : n;
  } catch (n) {
    return Promise.reject(n);
  }
}
var Qt = Sl({ isActive: false, activeEl: null }, { isCapable: false, install({ $q: e }) {
  e.fullscreen = this;
} });
Na.request = ["requestFullscreen", "msRequestFullscreen", "mozRequestFullScreen", "webkitRequestFullscreen"].find((e) => document.documentElement[e] !== void 0), Qt.isCapable = Na.request !== void 0, Qt.isCapable === false ? gw(() => Promise.reject("Not capable")) : (Object.assign(Qt, { request(e) {
  const t = e || document.documentElement, { activeEl: n } = Qt;
  return t === n ? Promise.resolve() : (n !== null && t.contains(n) === true ? Qt.exit() : Promise.resolve()).finally(() => lf(t, Na.request));
}, exit() {
  return Qt.isActive === true ? lf(document, Na.exit) : Promise.resolve();
}, toggle(e) {
  return Qt.isActive === true ? Qt.exit() : Qt.request(e);
} }), Na.exit = ["exitFullscreen", "msExitFullscreen", "mozCancelFullScreen", "webkitExitFullscreen"].find((e) => document[e]), Qt.isActive = !!Yh(), Qt.isActive === true && Gh(), ["onfullscreenchange", "onmsfullscreenchange", "onwebkitfullscreenchange"].forEach((e) => {
  document[e] = bw;
}));
var yw = Sl({ appVisible: true }, { install({ $q: e }) {
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
me({ name: "BottomSheetComponent", props: { ...nt, title: String, message: String, actions: Array, grid: Boolean, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  const { proxy: n } = Se(), l = lt(e, n.$q), a = W(null);
  function r() {
    a.value.show();
  }
  function o() {
    a.value.hide();
  }
  function i(m) {
    t("ok", m), o();
  }
  function u() {
    t("hide");
  }
  function c() {
    return e.actions.map((m) => {
      const g = m.avatar || m.img;
      return m.label === void 0 ? d(Ql, { class: "col-all", dark: l.value }) : d("div", { class: ["q-bottom-sheet__item q-hoverable q-focusable cursor-pointer relative-position", m.class], style: m.style, tabindex: 0, role: "listitem", onClick() {
        i(m);
      }, onKeyup(_) {
        _.keyCode === 13 && i(m);
      } }, [d("div", { class: "q-focus-helper" }), m.icon ? d(et, { name: m.icon, color: m.color }) : g ? d("img", { class: m.avatar ? "q-bottom-sheet__avatar" : "", src: g }) : d("div", { class: "q-bottom-sheet__empty-icon" }), d("div", m.label)]);
    });
  }
  function s() {
    return e.actions.map((m) => {
      const g = m.avatar || m.img;
      return m.label === void 0 ? d(Ql, { spaced: true, dark: l.value }) : d(Ca, { class: ["q-bottom-sheet__item", m.classes], style: m.style, tabindex: 0, clickable: true, dark: l.value, onClick() {
        i(m);
      } }, () => [d(mn, { avatar: true }, () => m.icon ? d(et, { name: m.icon, color: m.color }) : g ? d("img", { class: m.avatar ? "q-bottom-sheet__avatar" : "", src: g }) : null), d(mn, () => m.label)]);
    });
  }
  function v() {
    const m = [];
    return e.title && m.push(d(Bl, { class: "q-dialog__title" }, () => e.title)), e.message && m.push(d(Bl, { class: "q-dialog__message" }, () => e.message)), m.push(e.grid === true ? d("div", { class: "row items-stretch justify-start", role: "list" }, c()) : d("div", { role: "list" }, s())), m;
  }
  function h() {
    return [d(Om, { class: [`q-bottom-sheet q-bottom-sheet--${e.grid === true ? "grid" : "list"}` + (l.value === true ? " q-bottom-sheet--dark q-dark" : ""), e.cardClass], style: e.cardStyle }, v)];
  }
  return Object.assign(n, { show: r, hide: o }), () => d(ci, { ref: a, position: "bottom", onHide: u }, h);
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
    const c = W(null), s = Ar(false, "dialog"), v = (p) => {
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
    }, h = [], m = [], g = { onOk(p) {
      return h.push(p), g;
    }, onCancel(p) {
      return m.push(p), g;
    }, onDismiss(p) {
      return h.push(p), m.push(p), g;
    }, hide() {
      return v("hide"), g;
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
      u = true, h.forEach((y) => {
        y(p);
      });
    }, w = () => {
      C.unmount(s), Cs(s), C = null, i = null, u !== true && m.forEach((p) => {
        p();
      });
    };
    let C = li({ name: "QGlobalDialog", setup: () => () => d(a, { ...r, ref: c, onOk: _, onHide: w, onVnodeMounted(...p) {
      typeof r.onVnodeMounted == "function" && r.onVnodeMounted(...p), We(() => v("show"));
    } }) }, n);
    return i = C.mount(s), g;
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
      const c = zo(e, l);
      c !== void 0 && (u = u.replace(`${e}=${c}; `, "").replace(`; ${e}=${c}`, "").replace(`${e}=${c}`, ""));
    } else u = u ? `${o}; ${u}` : i;
    l.req.headers.cookie = u;
  } else document.cookie = i;
}
function zo(e, t) {
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
  return zo(e, t) !== null;
}
function ng(e) {
  return { get: (t) => zo(t, e), set: (t, n, l) => tg(t, n, l, e), has: (t) => Cw(t, e), remove: (t, n) => xw(t, n, e), getAll: () => zo(null, e) };
}
var Hs = { install({ $q: e, ssrContext: t }) {
  e.cookies = this;
} };
__QUASAR_SSR__ && (Hs.parseSSR = (e) => {
  if (e !== void 0) return ng(e);
});
Object.assign(Hs, ng());
var kw = Hs, qw = me({ name: "DialogPluginComponent", props: { ...nt, title: String, message: String, prompt: Object, options: Object, progress: [Boolean, Object], html: Boolean, ok: { type: [String, Object, Boolean], default: true }, cancel: [String, Object, Boolean], focus: { type: String, default: "ok", validator: (e) => ["ok", "cancel", "none"].includes(e) }, stackButtons: Boolean, color: String, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  const { proxy: n } = Se(), { $q: l } = n, a = lt(e, l), r = W(null), o = W(e.prompt !== void 0 ? e.prompt.model : e.options !== void 0 ? e.options.model : void 0), i = f(() => "q-dialog-plugin" + (a.value === true ? " q-dialog-plugin--dark q-dark" : "") + (e.progress !== false ? " q-dialog-plugin--progress" : "")), u = f(() => e.color || (a.value === true ? "amber" : "primary")), c = f(() => e.progress === false ? null : Pt(e.progress) === true ? { component: e.progress.spinner || _n, props: { color: e.progress.color || u.value } } : { component: _n, props: { color: u.value } }), s = f(() => e.prompt !== void 0 || e.options !== void 0), v = f(() => {
    if (s.value !== true) return {};
    const { model: k, isValid: U, items: L, ...V } = e.prompt !== void 0 ? e.prompt : e.options;
    return V;
  }), h = f(() => Pt(e.ok) === true || e.ok === true ? l.lang.label.ok : e.ok), m = f(() => Pt(e.cancel) === true || e.cancel === true ? l.lang.label.cancel : e.cancel), g = f(() => e.prompt !== void 0 ? e.prompt.isValid !== void 0 && e.prompt.isValid(o.value) !== true : e.options !== void 0 ? e.options.isValid !== void 0 && e.options.isValid(o.value) !== true : false), _ = f(() => ({ color: u.value, label: h.value, ripple: false, disable: g.value, ...Pt(e.ok) === true ? e.ok : { flat: true }, "data-autofocus": e.focus === "ok" && s.value !== true || void 0, onClick: y })), w = f(() => ({ color: u.value, label: m.value, ripple: false, ...Pt(e.cancel) === true ? e.cancel : { flat: true }, "data-autofocus": e.focus === "cancel" && s.value !== true || void 0, onClick: b }));
  ge(() => e.prompt && e.prompt.model, A), ge(() => e.options && e.options.model, A);
  function C() {
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
  function A(k) {
    o.value = k;
  }
  function F(k) {
    g.value !== true && e.prompt.type !== "textarea" && yn(k, 13) === true && y();
  }
  function N(k, U) {
    return e.html === true ? d(Bl, { class: k, innerHTML: U }) : d(Bl, { class: k }, () => U);
  }
  function P() {
    return [d(Eh, { color: u.value, dense: true, autofocus: true, dark: a.value, ...v.value, modelValue: o.value, "onUpdate:modelValue": A, onKeyup: F })];
  }
  function R() {
    return [d(L1, { color: u.value, options: e.options.items, dark: a.value, ...v.value, modelValue: o.value, "onUpdate:modelValue": A })];
  }
  function H() {
    const k = [];
    return e.cancel && k.push(d(Ze, w.value)), e.ok && k.push(d(Ze, _.value)), d(dp, { class: e.stackButtons === true ? "items-end" : "", vertical: e.stackButtons, align: "right" }, () => k);
  }
  function q() {
    const k = [];
    return e.title && k.push(N("q-dialog__title", e.title)), e.progress !== false && k.push(d(Bl, { class: "q-dialog__progress" }, () => d(c.value.component, c.value.props))), e.message && k.push(N("q-dialog__message", e.message)), e.prompt !== void 0 ? k.push(d(Bl, { class: "scroll q-dialog-plugin__form" }, P)) : e.options !== void 0 && k.push(d(Ql, { dark: a.value }), d(Bl, { class: "scroll q-dialog-plugin__form" }, R), d(Ql, { dark: a.value })), (e.ok || e.cancel) && k.push(H()), k;
  }
  function E() {
    return [d(Om, { class: [i.value, e.cardClass], style: e.cardStyle, dark: a.value }, q)];
  }
  return Object.assign(n, { show: C, hide: p }), () => d(ci, { ref: r, onHide: x }, E);
} }), Tw = { install({ $q: e, parentApp: t }) {
  e.dialog = this.create = pw(qw, true, t);
} }, oa, lu, af = 0, $l = null, zt = {}, Ol = {}, lg = { group: "__default_quasar_group__", delay: 0, message: false, html: false, spinnerSize: 80, spinnerColor: "", messageColor: "", backgroundColor: "", boxClass: "", spinner: _n, customClass: "" }, ag = { ...lg };
function Mw(e) {
  if ((e == null ? void 0 : e.group) !== void 0 && Ol[e.group] !== void 0) return Object.assign(Ol[e.group], e);
  const t = Pt(e) === true && e.ignoreDefaults === true ? { ...lg, ...e } : { ...ag, ...e };
  return Ol[t.group] = t, t;
}
var Sn = Sl({ isActive: false }, { show(e) {
  zt = Mw(e);
  const { group: t } = zt;
  return Sn.isActive = true, oa !== void 0 ? (zt.uid = af, lu.$forceUpdate()) : (zt.uid = ++af, $l !== null && clearTimeout($l), $l = setTimeout(() => {
    $l = null;
    const n = Ar("q-loading");
    oa = li({ name: "QLoading", setup() {
      ft(() => {
        Iu(true);
      });
      function l() {
        Sn.isActive !== true && oa !== void 0 && (Iu(false), oa.unmount(n), Cs(n), oa = void 0, lu = void 0);
      }
      function a() {
        if (Sn.isActive !== true) return null;
        const r = [d(zt.spinner, { class: "q-loading__spinner", color: zt.spinnerColor, size: zt.spinnerSize })];
        return zt.message && r.push(d("div", { class: "q-loading__message" + (zt.messageColor ? ` text-${zt.messageColor}` : ""), [zt.html === true ? "innerHTML" : "textContent"]: zt.message })), d("div", { class: "q-loading fullscreen flex flex-center z-max " + zt.customClass.trim(), key: zt.uid }, [d("div", { class: "q-loading__backdrop" + (zt.backgroundColor ? ` bg-${zt.backgroundColor}` : "") }), d("div", { class: "q-loading__box column items-center " + zt.boxClass }, r)]);
      }
      return () => d(Ft, { name: "q-transition--fade", appear: true, onAfterLeave: l }, a);
    } }, Sn.__parentApp), lu = oa.mount(n);
  }, zt.delay)), (n) => {
    if (n === void 0 || Object(n) !== n) {
      Sn.hide(t);
      return;
    }
    Sn.show({ ...n, group: t });
  };
}, hide(e) {
  if (Sn.isActive === true) {
    if (e === void 0) Ol = {};
    else {
      if (Ol[e] === void 0) return;
      {
        delete Ol[e];
        const t = Object.keys(Ol);
        if (t.length !== 0) {
          const n = t[t.length - 1];
          Sn.show({ group: n });
          return;
        }
      }
    }
    $l !== null && (clearTimeout($l), $l = null), Sn.isActive = false;
  }
}, setDefaults(e) {
  Pt(e) === true && Object.assign(ag, e);
}, install({ $q: e, parentApp: t }) {
  e.loading = this, Sn.__parentApp = t, e.config.loading !== void 0 && this.setDefaults(e.config.loading);
} }), Ew = Sn, eo = W(null), rf = Sl({ isActive: false }, { start: St, stop: St, increment: St, setDefaults: St, install({ $q: e, parentApp: t }) {
  if (e.loadingBar = this, this.__installed === true) {
    e.config.loadingBar !== void 0 && this.setDefaults(e.config.loadingBar);
    return;
  }
  const n = W(e.config.loadingBar !== void 0 ? { ...e.config.loadingBar } : {});
  function l() {
    rf.isActive = true;
  }
  function a() {
    rf.isActive = false;
  }
  const r = Ar("q-loading-bar");
  li({ name: "LoadingBar", devtools: { hide: true }, setup: () => () => d(Cy, { ...n.value, onStart: l, onStop: a, ref: eo }) }, t).mount(r), Object.assign(this, { start(o) {
    eo.value.start(o);
  }, stop() {
    eo.value.stop();
  }, increment() {
    eo.value.increment.apply(null, arguments);
  }, setDefaults(o) {
    Pt(o) === true && Object.assign(n.value, o);
  } });
} }), $w = 0, uo = {}, so = {}, xn = {}, rg = {}, Aw = /^\s*$/, og = [], Rw = [void 0, null, true, false, ""], js = ["top-left", "top-right", "bottom-left", "bottom-right", "top", "bottom", "left", "right", "center"], Pw = ["top-left", "top-right", "bottom-left", "bottom-right"], Ya = { positive: { icon: (e) => e.iconSet.type.positive, color: "positive" }, negative: { icon: (e) => e.iconSet.type.negative, color: "negative" }, warning: { icon: (e) => e.iconSet.type.warning, color: "warning", textColor: "dark" }, info: { icon: (e) => e.iconSet.type.info, color: "info" }, ongoing: { group: false, timeout: 0, spinner: true, color: "grey-8" } };
function ig(e, t, n) {
  var _a2;
  if (!e) return Ha("parameter required");
  let l;
  const a = { textColor: "white" };
  if (e.ignoreDefaults !== true && Object.assign(a, uo), Pt(e) === false && (a.type && Object.assign(a, Ya[a.type]), e = { message: e }), Object.assign(a, Ya[e.type || a.type], e), typeof a.icon == "function" && (a.icon = a.icon(t)), a.spinner ? (a.spinner === true && (a.spinner = _n), a.spinner = Uo(a.spinner)) : a.spinner = false, a.meta = { hasMedia: !!(a.spinner !== false || a.icon || a.avatar), hasText: of(a.message) || of(a.caption) }, a.position) {
    if (js.includes(a.position) === false) return Ha("wrong position", e);
  } else a.position = "bottom";
  if (Rw.includes(a.timeout) === true) a.timeout = 5e3;
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
      if (a.meta.uid = $w++, a.meta.badge = 1, ["left", "right", "center"].indexOf(a.position) !== -1) xn[a.position].value.splice(Math.floor(xn[a.position].value.length / 2), 0, a);
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
function of(e) {
  return e != null && Aw.test(e) !== true;
}
function Ha(e, t) {
  return console.error(`Notify: ${e}`, t), false;
}
function Bw() {
  return me({ name: "QNotifications", devtools: { hide: true }, setup() {
    return () => d("div", { class: "q-notifications" }, js.map((e) => d(jb, { key: e, class: rg[e], tag: "div", name: `q-notification--${e}` }, () => xn[e].value.map((t) => {
      const n = t.meta, l = [];
      if (n.hasMedia === true && (t.spinner !== false ? l.push(d(t.spinner, { class: "q-notification__spinner q-notification__spinner--" + n.leftClass, color: t.spinnerColor, size: t.spinnerSize })) : t.icon ? l.push(d(et, { class: "q-notification__icon q-notification__icon--" + n.leftClass, name: t.icon, color: t.iconColor, size: t.iconSize, role: "img" })) : t.avatar && l.push(d(Au, { class: "q-notification__avatar q-notification__avatar--" + n.leftClass }, () => d("img", { src: t.avatar, "aria-hidden": "true" })))), n.hasText === true) {
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
    js.forEach((l) => {
      xn[l] = W([]);
      const a = ["left", "center", "right"].includes(l) === true ? "center" : l.indexOf("top") !== -1 ? "top" : "bottom", r = l.indexOf("left") !== -1 ? "start" : l.indexOf("right") !== -1 ? "end" : "center", o = ["left", "right"].includes(l) ? `items-${l === "left" ? "start" : "end"} justify-center` : l === "center" ? "flex-center" : `items-${r}`;
      rg[l] = `q-notifications__list q-notifications__list--${a} fixed column no-wrap ${o}`;
    });
    const n = Ar("q-notify");
    li(Bw(), t).mount(n);
  }
} };
function Ow(e) {
  return Mu(e) === true ? "__q_date|" + e.getTime() : gy(e) === true ? "__q_expr|" + e.source : typeof e == "number" ? "__q_numb|" + e : typeof e == "boolean" ? "__q_bool|" + (e ? "1" : "0") : typeof e == "string" ? "__q_strn|" + e : typeof e == "function" ? "__q_strn|" + e.toString() : e === Object(e) ? "__q_objt|" + JSON.stringify(e) : e;
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
var cg = Ie.has.webStorage === false ? ug() : sg("local"), Iw = { install({ $q: e }) {
  e.localStorage = cg;
} };
Object.assign(Iw, cg);
var dg = Ie.has.webStorage === false ? ug() : sg("session"), zw = { install({ $q: e }) {
  e.sessionStorage = dg;
} };
Object.assign(zw, dg);
var Dw = ["ok", "hide"];
jh(Dw);
function Nw() {
  return Tt(lm);
}
var Hw = { version: "2.18.1", install: yy, lang: ni, iconSet: nm };
function jw(e, t) {
  const n = cs("router-view");
  return Yn(), Pl(n, { class: "view" });
}
const fg = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, a] of t) n[l] = a;
  return n;
}, Uw = {}, Qw = fg(Uw, [["render", jw]]), Kw = "M10,2C8.18,2 6.47,2.5 5,3.35C8,5.08 10,8.3 10,12C10,15.7 8,18.92 5,20.65C6.47,21.5 8.18,22 10,22A10,10 0 0,0 20,12A10,10 0 0,0 10,2Z", Ww = "M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z", Yw = /* @__PURE__ */ Ta({ __name: "Quasar", setup(e) {
  const t = Nw();
  let n = W(false), l = W(false), a = W(true);
  const r = "production";
  return (o, i) => {
    const u = cs("router-view"), c = A0("ripple");
    return Yn(), Pl(ze(T1), { view: "hHh LpR fFf" }, { default: $t(() => [Je(ze(m1), { class: "bg-primary text-white", elevated: "", id: "header" }, { default: $t(() => [Je(ze(Nd), null, { default: $t(() => [Je(ze(Ze), { dense: "", flat: "", round: "", icon: "menu", onClick: i[0] || (i[0] = (s) => pt(n) ? n.value = !ze(n) : n = !ze(n)) }), Je(ze(Hd), null, { default: $t(() => [Je(ze(Au), null, { default: $t(() => i[10] || (i[10] = [Il("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" }, null, -1)])), _: 1 }), i[11] || (i[11] = Ll("\xA0WebGL mtg"))]), _: 1 }), ze(t).dark.isActive ? (Yn(), Pl(ze(Ze), { key: 0, dense: "", flat: "", round: "", icon: ze(Ww), onClick: i[1] || (i[1] = (s) => ze(t).dark.set(false)) }, null, 8, ["icon"])) : hc("", true), ze(t).dark.isActive ? hc("", true) : (Yn(), Pl(ze(Ze), { key: 1, dense: "", flat: "", round: "", icon: ze(Kw), onClick: i[2] || (i[2] = (s) => ze(t).dark.set(true)) }, null, 8, ["icon"])), Je(ze(Ze), { dense: "", flat: "", round: "", icon: "menu", onClick: i[3] || (i[3] = (s) => pt(l) ? l.value = !ze(l) : l = !ze(l)) })]), _: 1 })]), _: 1 }), Je(ze(Sd), { modelValue: ze(n), "onUpdate:modelValue": i[8] || (i[8] = (s) => pt(n) ? n.value = s : n = s), side: "left", bordered: "", mini: ze(a), overlay: "" }, { default: $t(() => [Je(ze(I1), { class: "fit" }, { default: $t(() => [Je(ze(Ah), { class: "menu-list padding" }, { default: $t(() => [sn((Yn(), Pl(ze(Ca), { clickable: "", onMouseover: i[4] || (i[4] = (s) => pt(a) ? a.value = false : a = false), onMouseout: i[5] || (i[5] = (s) => pt(a) ? a.value = true : a = true) }, { default: $t(() => [Je(ze(mn), { avatar: "" }, { default: $t(() => [Je(ze(et), { name: "inbox" })]), _: 1 }), Je(ze(mn), null, { default: $t(() => i[12] || (i[12] = [Ll("inbox")])), _: 1 })]), _: 1 })), [[c]]), sn((Yn(), Pl(ze(Ca), { clickable: "", onMouseover: i[6] || (i[6] = (s) => pt(a) ? a.value = false : a = false), onMouseout: i[7] || (i[7] = (s) => pt(a) ? a.value = true : a = true) }, { default: $t(() => [Je(ze(mn), { avatar: "" }, { default: $t(() => [Je(ze(et), { name: "login" })]), _: 1 }), Je(ze(mn), null, { default: $t(() => i[13] || (i[13] = [Ll("login")])), _: 1 })]), _: 1 })), [[c]])]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["modelValue", "mini"]), Je(ze(Sd), { modelValue: ze(l), "onUpdate:modelValue": i[9] || (i[9] = (s) => pt(l) ? l.value = s : l = s), side: "right", bordered: "", overlay: "" }, { default: $t(() => i[14] || (i[14] = [Ll("right")])), _: 1 }, 8, ["modelValue"]), Je(ze(B1), null, { default: $t(() => [Je(u)]), _: 1 }), Je(ze(v1), { class: "bg-grey-8 text-orange", elevated: "", id: "footer" }, { default: $t(() => [Je(ze(Nd), null, { default: $t(() => [Je(ze(Hd), { style: { "font-size": "1.0em" } }, { default: $t(() => [Je(ze(Au), { class: "q-mr-sm", size: "sm" }, { default: $t(() => i[15] || (i[15] = [Il("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" }, null, -1)])), _: 1 }), Ll("\xA0vite / vue / quasar / wasm / webgl mtg \xA0mode: " + Lf(ze(r)), 1)]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 });
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
    n[l] = $n(a) ? a.map(e) : e(a);
  }
  return n;
}
const sr = () => {
}, $n = Array.isArray, mg = /#/g, Xw = /&/g, Zw = /\//g, Jw = /=/g, eS = /\?/g, hg = /\+/g, tS = /%5B/g, nS = /%5D/g, gg = /%5E/g, lS = /%60/g, bg = /%7B/g, aS = /%7C/g, yg = /%7D/g, rS = /%20/g;
function Us(e) {
  return encodeURI("" + e).replace(aS, "|").replace(tS, "[").replace(nS, "]");
}
function oS(e) {
  return Us(e).replace(bg, "{").replace(yg, "}").replace(gg, "^");
}
function ju(e) {
  return Us(e).replace(hg, "%2B").replace(rS, "+").replace(mg, "%23").replace(Xw, "%26").replace(lS, "`").replace(bg, "{").replace(yg, "}").replace(gg, "^");
}
function iS(e) {
  return ju(e).replace(Jw, "%3D");
}
function uS(e) {
  return Us(e).replace(mg, "%23").replace(eS, "%3F");
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
function uf(e, t) {
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
  return $n(e) ? sf(e, t) : $n(t) ? sf(t, e) : e === t;
}
function sf(e, t) {
  return $n(t) ? e.length === t.length && e.every((n, l) => n === t[l]) : e.length === 1 && e[0] === t;
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
const rl = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
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
function cf(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Uu = /* @__PURE__ */ new Map();
function wS(e, t) {
  Uu.set(e, t);
}
function SS(e) {
  const t = Uu.get(e);
  return Uu.delete(e), t;
}
let xS = () => location.protocol + "//" + location.host;
function _g(e, t) {
  const { pathname: n, search: l, hash: a } = t, r = e.indexOf("#");
  if (r > -1) {
    let i = a.includes(e.slice(r)) ? e.slice(r).length : 1, u = a.slice(i);
    return u[0] !== "/" && (u = "/" + u), uf(u, "");
  }
  return uf(n, e) + l + a;
}
function CS(e, t, n, l) {
  let a = [], r = [], o = null;
  const i = ({ state: h }) => {
    const m = _g(e, location), g = n.value, _ = t.value;
    let w = 0;
    if (h) {
      if (n.value = m, t.value = h, o && o === g) {
        o = null;
        return;
      }
      w = _ ? h.position - _.position : 0;
    } else l(m);
    a.forEach((C) => {
      C(n.value, g, { delta: w, type: Cr.pop, direction: w ? w > 0 ? cr.forward : cr.back : cr.unknown });
    });
  };
  function u() {
    o = n.value;
  }
  function c(h) {
    a.push(h);
    const m = () => {
      const g = a.indexOf(h);
      g > -1 && a.splice(g, 1);
    };
    return r.push(m), m;
  }
  function s() {
    const { history: h } = window;
    h.state && h.replaceState(ut({}, h.state, { scroll: hi() }), "");
  }
  function v() {
    for (const h of r) h();
    r = [], window.removeEventListener("popstate", i), window.removeEventListener("beforeunload", s);
  }
  return window.addEventListener("popstate", i), window.addEventListener("beforeunload", s, { passive: true }), { pauseListeners: u, listen: c, destroy: v };
}
function df(e, t, n, l = false, a = false) {
  return { back: e, current: t, forward: n, replaced: l, position: window.history.length, scroll: a ? hi() : null };
}
function kS(e) {
  const { history: t, location: n } = window, l = { value: _g(e, n) }, a = { value: t.state };
  a.value || r(l.value, { back: null, current: l.value, forward: null, position: t.length - 1, replaced: true, scroll: null }, true);
  function r(u, c, s) {
    const v = e.indexOf("#"), h = v > -1 ? (n.host && document.querySelector("base") ? e : e.slice(v)) + u : xS() + e + u;
    try {
      t[s ? "replaceState" : "pushState"](c, "", h), a.value = c;
    } catch (m) {
      console.error(m), n[s ? "replace" : "assign"](h);
    }
  }
  function o(u, c) {
    const s = ut({}, t.state, df(a.value.back, u, a.value.forward, true), c, { position: a.value.position });
    r(u, s, true), l.value = u;
  }
  function i(u, c) {
    const s = ut({}, a.value, t.state, { forward: u, scroll: hi() });
    r(s.current, s, true);
    const v = ut({}, df(l.value, u, null), { position: s.position + 1 }, c);
    r(u, v, false), l.value = u;
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
var ff;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(ff || (ff = {}));
function qa(e, t) {
  return ut(new Error(), { type: e, [Sg]: true }, t);
}
function Hn(e, t) {
  return e instanceof Error && Sg in e && (t == null || !!(e.type & t));
}
const vf = "[^/]+?", ES = { sensitive: false, strict: false, start: true, end: true }, $S = /[.+*?^${}()[\]/\\]/g;
function AS(e, t) {
  const n = ut({}, ES, t), l = [];
  let a = n.start ? "^" : "";
  const r = [];
  for (const c of e) {
    const s = c.length ? [] : [90];
    n.strict && !c.length && (a += "/");
    for (let v = 0; v < c.length; v++) {
      const h = c[v];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0) v || (a += "/"), a += h.value.replace($S, "\\$&"), m += 40;
      else if (h.type === 1) {
        const { value: g, repeatable: _, optional: w, regexp: C } = h;
        r.push({ name: g, repeatable: _, optional: w });
        const p = C || vf;
        if (p !== vf) {
          m += 10;
          try {
            new RegExp(`(${p})`);
          } catch (b) {
            throw new Error(`Invalid custom RegExp for param "${g}" (${p}): ` + b.message);
          }
        }
        let y = _ ? `((?:${p})(?:/(?:${p}))*)` : `(${p})`;
        v || (y = w && c.length < 2 ? `(?:/${y})` : "/" + y), w && (y += "?"), a += y, m += 20, w && (m += -8), _ && (m += -20), p === ".*" && (m += -50);
      }
      s.push(m);
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
    const s = c.match(o), v = {};
    if (!s) return null;
    for (let h = 1; h < s.length; h++) {
      const m = s[h] || "", g = r[h - 1];
      v[g.name] = m && g.repeatable ? m.split("/") : m;
    }
    return v;
  }
  function u(c) {
    let s = "", v = false;
    for (const h of e) {
      (!v || !s.endsWith("/")) && (s += "/"), v = false;
      for (const m of h) if (m.type === 0) s += m.value;
      else if (m.type === 1) {
        const { value: g, repeatable: _, optional: w } = m, C = g in c ? c[g] : "";
        if ($n(C) && !_) throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
        const p = $n(C) ? C.join("/") : C;
        if (!p) if (w) h.length < 2 && (s.endsWith("/") ? s = s.slice(0, -1) : v = true);
        else throw new Error(`Missing required param "${g}"`);
        s += p;
      }
    }
    return s || "/";
  }
  return { re: o, score: l, keys: r, parse: i, stringify: u };
}
function RS(e, t) {
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
    const r = RS(l[n], a[n]);
    if (r) return r;
    n++;
  }
  if (Math.abs(a.length - l.length) === 1) {
    if (mf(l)) return 1;
    if (mf(a)) return -1;
  }
  return a.length - l.length;
}
function mf(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const PS = { type: 0, value: "" }, LS = /[a-zA-Z0-9_]/;
function BS(e) {
  if (!e) return [[]];
  if (e === "/") return [[PS]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${c}": ${m}`);
  }
  let n = 0, l = n;
  const a = [];
  let r;
  function o() {
    r && a.push(r), r = [];
  }
  let i = 0, u, c = "", s = "";
  function v() {
    c && (n === 0 ? r.push({ type: 0, value: c }) : n === 1 || n === 2 || n === 3 ? (r.length > 1 && (u === "*" || u === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), r.push({ type: 1, value: c, regexp: s, repeatable: u === "*" || u === "+", optional: u === "*" || u === "?" })) : t("Invalid state to consume buffer"), c = "");
  }
  function h() {
    c += u;
  }
  for (; i < e.length; ) {
    if (u = e[i++], u === "\\" && n !== 2) {
      l = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        u === "/" ? (c && v(), o()) : u === ":" ? (v(), n = 1) : h();
        break;
      case 4:
        h(), n = l;
        break;
      case 1:
        u === "(" ? n = 2 : LS.test(u) ? h() : (v(), n = 0, u !== "*" && u !== "?" && u !== "+" && i--);
        break;
      case 2:
        u === ")" ? s[s.length - 1] == "\\" ? s = s.slice(0, -1) + u : n = 3 : s += u;
        break;
      case 3:
        v(), n = 0, u !== "*" && u !== "?" && u !== "+" && i--, s = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), v(), o(), a;
}
function FS(e, t, n) {
  const l = AS(BS(e.path), n), a = ut(l, { record: e, parent: t, children: [], alias: [] });
  return t && !a.record.aliasOf == !t.record.aliasOf && t.children.push(a), a;
}
function OS(e, t) {
  const n = [], l = /* @__PURE__ */ new Map();
  t = yf({ strict: false, end: true, sensitive: false }, t);
  function a(v) {
    return l.get(v);
  }
  function r(v, h, m) {
    const g = !m, _ = gf(v);
    _.aliasOf = m && m.record;
    const w = yf(t, v), C = [_];
    if ("alias" in v) {
      const b = typeof v.alias == "string" ? [v.alias] : v.alias;
      for (const x of b) C.push(gf(ut({}, _, { components: m ? m.record.components : _.components, path: x, aliasOf: m ? m.record : _ })));
    }
    let p, y;
    for (const b of C) {
      const { path: x } = b;
      if (h && x[0] !== "/") {
        const A = h.record.path, F = A[A.length - 1] === "/" ? "" : "/";
        b.path = h.record.path + (x && F + x);
      }
      if (p = FS(b, h, w), m ? m.alias.push(p) : (y = y || p, y !== p && y.alias.push(p), g && v.name && !bf(p) && o(v.name)), Cg(p) && u(p), _.children) {
        const A = _.children;
        for (let F = 0; F < A.length; F++) r(A[F], p, m && m.children[F]);
      }
      m = m || p;
    }
    return y ? () => {
      o(y);
    } : sr;
  }
  function o(v) {
    if (wg(v)) {
      const h = l.get(v);
      h && (l.delete(v), n.splice(n.indexOf(h), 1), h.children.forEach(o), h.alias.forEach(o));
    } else {
      const h = n.indexOf(v);
      h > -1 && (n.splice(h, 1), v.record.name && l.delete(v.record.name), v.children.forEach(o), v.alias.forEach(o));
    }
  }
  function i() {
    return n;
  }
  function u(v) {
    const h = zS(v, n);
    n.splice(h, 0, v), v.record.name && !bf(v) && l.set(v.record.name, v);
  }
  function c(v, h) {
    let m, g = {}, _, w;
    if ("name" in v && v.name) {
      if (m = l.get(v.name), !m) throw qa(1, { location: v });
      w = m.record.name, g = ut(hf(h.params, m.keys.filter((y) => !y.optional).concat(m.parent ? m.parent.keys.filter((y) => y.optional) : []).map((y) => y.name)), v.params && hf(v.params, m.keys.map((y) => y.name))), _ = m.stringify(g);
    } else if (v.path != null) _ = v.path, m = n.find((y) => y.re.test(_)), m && (g = m.parse(_), w = m.record.name);
    else {
      if (m = h.name ? l.get(h.name) : n.find((y) => y.re.test(h.path)), !m) throw qa(1, { location: v, currentLocation: h });
      w = m.record.name, g = ut({}, h.params, v.params), _ = m.stringify(g);
    }
    const C = [];
    let p = m;
    for (; p; ) C.unshift(p.record), p = p.parent;
    return { name: w, path: _, params: g, matched: C, meta: IS(C) };
  }
  e.forEach((v) => r(v));
  function s() {
    n.length = 0, l.clear();
  }
  return { addRoute: r, resolve: c, removeRoute: o, clearRoutes: s, getRoutes: i, getRecordMatcher: a };
}
function hf(e, t) {
  const n = {};
  for (const l of t) l in e && (n[l] = e[l]);
  return n;
}
function gf(e) {
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: VS(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function VS(e) {
  const t = {}, n = e.props || false;
  if ("component" in e) t.default = n;
  else for (const l in e.components) t[l] = typeof n == "object" ? n[l] : n;
  return t;
}
function bf(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function IS(e) {
  return e.reduce((t, n) => ut(t, n.meta), {});
}
function yf(e, t) {
  const n = {};
  for (const l in e) n[l] = l in t ? t[l] : e[l];
  return n;
}
function zS(e, t) {
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
      $n(c) || (c = t[i] = [c]), c.push(u);
    } else t[i] = u;
  }
  return t;
}
function pf(e) {
  let t = "";
  for (let n in e) {
    const l = e[n];
    if (n = iS(n), l == null) {
      l !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    ($n(l) ? l.map((r) => r && ju(r)) : [l && ju(l)]).forEach((r) => {
      r !== void 0 && (t += (t.length ? "&" : "") + n, r != null && (t += "=" + r));
    });
  }
  return t;
}
function HS(e) {
  const t = {};
  for (const n in e) {
    const l = e[n];
    l !== void 0 && (t[n] = $n(l) ? l.map((a) => a == null ? null : "" + a) : l == null ? l : "" + l);
  }
  return t;
}
const jS = Symbol(""), _f = Symbol(""), Qs = Symbol(""), kg = Symbol(""), Qu = Symbol("");
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
function dl(e, t, n, l, a, r = (o) => o()) {
  const o = l && (l.enterCallbacks[a] = l.enterCallbacks[a] || []);
  return () => new Promise((i, u) => {
    const c = (h) => {
      h === false ? u(qa(4, { from: n, to: t })) : h instanceof Error ? u(h) : MS(h) ? u(qa(2, { from: t, to: h })) : (o && l.enterCallbacks[a] === o && typeof h == "function" && o.push(h), i());
    }, s = r(() => e.call(l && l.instances[a], t, n, c));
    let v = Promise.resolve(s);
    e.length < 3 && (v = v.then(c)), v.catch((h) => u(h));
  });
}
function ou(e, t, n, l, a = (r) => r()) {
  const r = [];
  for (const o of e) for (const i in o.components) {
    let u = o.components[i];
    if (!(t !== "beforeRouteEnter" && !o.instances[i])) if (vg(u)) {
      const s = (u.__vccOpts || u)[t];
      s && r.push(dl(s, n, l, o, i, a));
    } else {
      let c = u();
      r.push(() => c.then((s) => {
        if (!s) throw new Error(`Couldn't resolve component "${i}" at "${o.path}"`);
        const v = Gw(s) ? s.default : s;
        o.mods[i] = s, o.components[i] = v;
        const m = (v.__vccOpts || v)[t];
        return m && dl(m, n, l, o, i, a)();
      }));
    }
  }
  return r;
}
function wf(e) {
  const t = Tt(Qs), n = Tt(kg), l = f(() => {
    const u = ze(e.to);
    return t.resolve(u);
  }), a = f(() => {
    const { matched: u } = l.value, { length: c } = u, s = u[c - 1], v = n.matched;
    if (!s || !v.length) return -1;
    const h = v.findIndex(ka.bind(null, s));
    if (h > -1) return h;
    const m = Sf(u[c - 2]);
    return c > 1 && Sf(s) === m && v[v.length - 1].path !== m ? v.findIndex(ka.bind(null, u[c - 2])) : h;
  }), r = f(() => a.value > -1 && YS(n.params, l.value.params)), o = f(() => a.value > -1 && a.value === n.matched.length - 1 && pg(n.params, l.value.params));
  function i(u = {}) {
    if (WS(u)) {
      const c = t[ze(e.replace) ? "replace" : "push"](ze(e.to)).catch(sr);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c;
    }
    return Promise.resolve();
  }
  return { route: l, href: f(() => l.value.href), isActive: r, isExactActive: o, navigate: i };
}
function US(e) {
  return e.length === 1 ? e[0] : e;
}
const QS = /* @__PURE__ */ Ta({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" } }, useLink: wf, setup(e, { slots: t }) {
  const n = Bn(wf(e)), { options: l } = Tt(Qs), a = f(() => ({ [xf(e.activeClass, l.linkActiveClass, "router-link-active")]: n.isActive, [xf(e.exactActiveClass, l.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive }));
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
    } else if (!$n(a) || a.length !== l.length || l.some((r, o) => r !== a[o])) return false;
  }
  return true;
}
function Sf(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const xf = (e, t, n) => e ?? t ?? n, GS = /* @__PURE__ */ Ta({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: n }) {
  const l = Tt(Qu), a = f(() => e.route || l.value), r = Tt(_f, 0), o = f(() => {
    let c = ze(r);
    const { matched: s } = a.value;
    let v;
    for (; (v = s[c]) && !v.components; ) c++;
    return c;
  }), i = f(() => a.value.matched[o.value]);
  hn(_f, f(() => o.value + 1)), hn(jS, i), hn(Qu, a);
  const u = W();
  return ge(() => [u.value, i.value, e.name], ([c, s, v], [h, m, g]) => {
    s && (s.instances[v] = c, m && m !== s && c && c === h && (s.leaveGuards.size || (s.leaveGuards = m.leaveGuards), s.updateGuards.size || (s.updateGuards = m.updateGuards))), c && s && (!m || !ka(s, m) || !h) && (s.enterCallbacks[v] || []).forEach((_) => _(c));
  }, { flush: "post" }), () => {
    const c = a.value, s = e.name, v = i.value, h = v && v.components[s];
    if (!h) return Cf(n.default, { Component: h, route: c });
    const m = v.props[s], g = m ? m === true ? c.params : typeof m == "function" ? m(c) : m : null, w = d(h, ut({}, g, t, { onVnodeUnmounted: (C) => {
      C.component.isUnmounted && (v.instances[s] = null);
    }, ref: u }));
    return Cf(n.default, { Component: w, route: c }) || w;
  };
} });
function Cf(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const XS = GS;
function ZS(e) {
  const t = OS(e.routes, e), n = e.parseQuery || NS, l = e.stringifyQuery || pf, a = e.history, r = ja(), o = ja(), i = ja(), u = s0(rl);
  let c = rl;
  ua && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const s = au.bind(null, ($) => "" + $), v = au.bind(null, sS), h = au.bind(null, xr);
  function m($, ee) {
    let I, ae;
    return wg($) ? (I = t.getRecordMatcher($), ae = ee) : ae = $, t.addRoute(ae, I);
  }
  function g($) {
    const ee = t.getRecordMatcher($);
    ee && t.removeRoute(ee);
  }
  function _() {
    return t.getRoutes().map(($) => $.record);
  }
  function w($) {
    return !!t.getRecordMatcher($);
  }
  function C($, ee) {
    if (ee = ut({}, ee || u.value), typeof $ == "string") {
      const j = ru(n, $, ee.path), J = t.resolve({ path: j.path }, ee), ne = a.createHref(j.fullPath);
      return ut(j, J, { params: h(J.params), hash: xr(j.hash), redirectedFrom: void 0, href: ne });
    }
    let I;
    if ($.path != null) I = ut({}, $, { path: ru(n, $.path, ee.path).path });
    else {
      const j = ut({}, $.params);
      for (const J in j) j[J] == null && delete j[J];
      I = ut({}, $, { params: v(j) }), ee.params = v(ee.params);
    }
    const ae = t.resolve(I, ee), we = $.hash || "";
    ae.params = s(h(ae.params));
    const S = fS(l, ut({}, $, { hash: oS(we), path: ae.path })), M = a.createHref(S);
    return ut({ fullPath: S, hash: we, query: l === pf ? HS($.query) : $.query || {} }, ae, { redirectedFrom: void 0, href: M });
  }
  function p($) {
    return typeof $ == "string" ? ru(n, $, u.value.path) : ut({}, $);
  }
  function y($, ee) {
    if (c !== $) return qa(8, { from: ee, to: $ });
  }
  function b($) {
    return F($);
  }
  function x($) {
    return b(ut(p($), { replace: true }));
  }
  function A($) {
    const ee = $.matched[$.matched.length - 1];
    if (ee && ee.redirect) {
      const { redirect: I } = ee;
      let ae = typeof I == "function" ? I($) : I;
      return typeof ae == "string" && (ae = ae.includes("?") || ae.includes("#") ? ae = p(ae) : { path: ae }, ae.params = {}), ut({ query: $.query, hash: $.hash, params: ae.path != null ? {} : $.params }, ae);
    }
  }
  function F($, ee) {
    const I = c = C($), ae = u.value, we = $.state, S = $.force, M = $.replace === true, j = A(I);
    if (j) return F(ut(p(j), { state: typeof j == "object" ? ut({}, we, j.state) : we, force: S, replace: M }), ee || I);
    const J = I;
    J.redirectedFrom = ee;
    let ne;
    return !S && vS(l, ae, I) && (ne = qa(16, { to: J, from: ae }), K(ae, ae, true, false)), (ne ? Promise.resolve(ne) : R(J, ae)).catch((Y) => Hn(Y) ? Hn(Y, 2) ? Y : be(Y) : D(Y, J, ae)).then((Y) => {
      if (Y) {
        if (Hn(Y, 2)) return F(ut({ replace: M }, p(Y.to), { state: typeof Y.to == "object" ? ut({}, we, Y.to.state) : we, force: S }), ee || J);
      } else Y = q(J, ae, true, M, we);
      return H(J, ae, Y), Y;
    });
  }
  function N($, ee) {
    const I = y($, ee);
    return I ? Promise.reject(I) : Promise.resolve();
  }
  function P($) {
    const ee = O.values().next().value;
    return ee && typeof ee.runWithContext == "function" ? ee.runWithContext($) : $();
  }
  function R($, ee) {
    let I;
    const [ae, we, S] = JS($, ee);
    I = ou(ae.reverse(), "beforeRouteLeave", $, ee);
    for (const j of ae) j.leaveGuards.forEach((J) => {
      I.push(dl(J, $, ee));
    });
    const M = N.bind(null, $, ee);
    return I.push(M), B(I).then(() => {
      I = [];
      for (const j of r.list()) I.push(dl(j, $, ee));
      return I.push(M), B(I);
    }).then(() => {
      I = ou(we, "beforeRouteUpdate", $, ee);
      for (const j of we) j.updateGuards.forEach((J) => {
        I.push(dl(J, $, ee));
      });
      return I.push(M), B(I);
    }).then(() => {
      I = [];
      for (const j of S) if (j.beforeEnter) if ($n(j.beforeEnter)) for (const J of j.beforeEnter) I.push(dl(J, $, ee));
      else I.push(dl(j.beforeEnter, $, ee));
      return I.push(M), B(I);
    }).then(() => ($.matched.forEach((j) => j.enterCallbacks = {}), I = ou(S, "beforeRouteEnter", $, ee, P), I.push(M), B(I))).then(() => {
      I = [];
      for (const j of o.list()) I.push(dl(j, $, ee));
      return I.push(M), B(I);
    }).catch((j) => Hn(j, 8) ? j : Promise.reject(j));
  }
  function H($, ee, I) {
    i.list().forEach((ae) => P(() => ae($, ee, I)));
  }
  function q($, ee, I, ae, we) {
    const S = y($, ee);
    if (S) return S;
    const M = ee === rl, j = ua ? history.state : {};
    I && (ae || M ? a.replace($.fullPath, ut({ scroll: M && j && j.scroll }, we)) : a.push($.fullPath, we)), u.value = $, K($, ee, I, M), be();
  }
  let E;
  function k() {
    E || (E = a.listen(($, ee, I) => {
      if (!oe.listening) return;
      const ae = C($), we = A(ae);
      if (we) {
        F(ut(we, { replace: true, force: true }), ae).catch(sr);
        return;
      }
      c = ae;
      const S = u.value;
      ua && wS(cf(S.fullPath, I.delta), hi()), R(ae, S).catch((M) => Hn(M, 12) ? M : Hn(M, 2) ? (F(ut(p(M.to), { force: true }), ae).then((j) => {
        Hn(j, 20) && !I.delta && I.type === Cr.pop && a.go(-1, false);
      }).catch(sr), Promise.reject()) : (I.delta && a.go(-I.delta, false), D(M, ae, S))).then((M) => {
        M = M || q(ae, S, false), M && (I.delta && !Hn(M, 8) ? a.go(-I.delta, false) : I.type === Cr.pop && Hn(M, 20) && a.go(-1, false)), H(ae, S, M);
      }).catch(sr);
    }));
  }
  let U = ja(), L = ja(), V;
  function D($, ee, I) {
    be($);
    const ae = L.list();
    return ae.length ? ae.forEach((we) => we($, ee, I)) : console.error($), Promise.reject($);
  }
  function te() {
    return V && u.value !== rl ? Promise.resolve() : new Promise(($, ee) => {
      U.add([$, ee]);
    });
  }
  function be($) {
    return V || (V = !$, k(), U.list().forEach(([ee, I]) => $ ? I($) : ee()), U.reset()), $;
  }
  function K($, ee, I, ae) {
    const { scrollBehavior: we } = e;
    if (!ua || !we) return Promise.resolve();
    const S = !I && SS(cf($.fullPath, 0)) || (ae || !I) && history.state && history.state.scroll || null;
    return We().then(() => we($, ee, S)).then((M) => M && _S(M)).catch((M) => D(M, $, ee));
  }
  const T = ($) => a.go($);
  let Z;
  const O = /* @__PURE__ */ new Set(), oe = { currentRoute: u, listening: true, addRoute: m, removeRoute: g, clearRoutes: t.clearRoutes, hasRoute: w, getRoutes: _, resolve: C, options: e, push: b, replace: x, go: T, back: () => T(-1), forward: () => T(1), beforeEach: r.add, beforeResolve: o.add, afterEach: i.add, onError: L.add, isReady: te, install($) {
    const ee = this;
    $.component("RouterLink", KS), $.component("RouterView", XS), $.config.globalProperties.$router = ee, Object.defineProperty($.config.globalProperties, "$route", { enumerable: true, get: () => ze(u) }), ua && !Z && u.value === rl && (Z = true, b(a.location).catch((we) => {
    }));
    const I = {};
    for (const we in rl) Object.defineProperty(I, we, { get: () => u.value[we], enumerable: true });
    $.provide(Qs, ee), $.provide(kg, rs(I)), $.provide(Qu, u);
    const ae = $.unmount;
    O.add($), $.unmount = function() {
      O.delete($), O.size < 1 && (c = rl, E && E(), E = null, u.value = rl, Z = false, V = false), ae();
    };
  } };
  function B($) {
    return $.reduce((ee, I) => ee.then(() => P(I)), Promise.resolve());
  }
  return oe;
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
let Ku = 0;
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
    return co().subarray(u, u + i.length).set(i), Ku = i.length, u;
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
  return Ku = o, a;
}
function rx(e) {
  const t = Jt.__wbindgen_export_2.get(e);
  return Jt.__externref_table_dealloc(e), t;
}
function ox(e) {
  const t = ax(e, Jt.__wbindgen_malloc, Jt.__wbindgen_realloc), n = Ku, l = Jt.mtg(t, n);
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
    const a = cs("router-view");
    return Yn(), Bv(rn, null, [Je(ze(Ze), { class: "q-ma-lg", color: "primary", onClick: t }, { default: $t(() => l[0] || (l[0] = [Ll("test")])), _: 1 }), Je(a)], 64);
  };
} }), dx = fg(cx, [["__scopeId", "data-v-17fee452"]]);
var fx = 1e-6, kf = typeof Float32Array < "u" ? Float32Array : Array;
Math.hypot || (Math.hypot = function() {
  for (var e = 0, t = arguments.length; t--; ) e += arguments[t] * arguments[t];
  return Math.sqrt(e);
});
function qf() {
  var e = new kf(16);
  return kf != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e;
}
function uu(e, t, n) {
  var l = n[0], a = n[1], r = n[2], o, i, u, c, s, v, h, m, g, _, w, C;
  return t === e ? (e[12] = t[0] * l + t[4] * a + t[8] * r + t[12], e[13] = t[1] * l + t[5] * a + t[9] * r + t[13], e[14] = t[2] * l + t[6] * a + t[10] * r + t[14], e[15] = t[3] * l + t[7] * a + t[11] * r + t[15]) : (o = t[0], i = t[1], u = t[2], c = t[3], s = t[4], v = t[5], h = t[6], m = t[7], g = t[8], _ = t[9], w = t[10], C = t[11], e[0] = o, e[1] = i, e[2] = u, e[3] = c, e[4] = s, e[5] = v, e[6] = h, e[7] = m, e[8] = g, e[9] = _, e[10] = w, e[11] = C, e[12] = o * l + s * a + g * r + t[12], e[13] = i * l + v * a + _ * r + t[13], e[14] = u * l + h * a + w * r + t[14], e[15] = c * l + m * a + C * r + t[15]), e;
}
function su(e, t, n, l) {
  var a = l[0], r = l[1], o = l[2], i = Math.hypot(a, r, o), u, c, s, v, h, m, g, _, w, C, p, y, b, x, A, F, N, P, R, H, q, E, k, U;
  return i < fx ? null : (i = 1 / i, a *= i, r *= i, o *= i, u = Math.sin(n), c = Math.cos(n), s = 1 - c, v = t[0], h = t[1], m = t[2], g = t[3], _ = t[4], w = t[5], C = t[6], p = t[7], y = t[8], b = t[9], x = t[10], A = t[11], F = a * a * s + c, N = r * a * s + o * u, P = o * a * s - r * u, R = a * r * s - o * u, H = r * r * s + c, q = o * r * s + a * u, E = a * o * s + r * u, k = r * o * s - a * u, U = o * o * s + c, e[0] = v * F + _ * N + y * P, e[1] = h * F + w * N + b * P, e[2] = m * F + C * N + x * P, e[3] = g * F + p * N + A * P, e[4] = v * R + _ * H + y * q, e[5] = h * R + w * H + b * q, e[6] = m * R + C * H + x * q, e[7] = g * R + p * H + A * q, e[8] = v * E + _ * k + y * U, e[9] = h * E + w * k + b * U, e[10] = m * E + C * k + x * U, e[11] = g * E + p * k + A * U, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e);
}
function vx(e, t, n, l, a) {
  var r = 1 / Math.tan(t / 2), o;
  return e[0] = r / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = r, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, a != null && a !== 1 / 0 ? (o = 1 / (l - a), e[10] = (a + l) * o, e[14] = 2 * a * l * o) : (e[10] = -1, e[14] = -2 * l), e;
}
var mx = vx;
const hx = ["width", "height"], gx = /* @__PURE__ */ Ta({ __name: "WebGL", setup(e) {
  const t = W();
  let n = null;
  const l = W([0, 0]), a = W(""), r = W(-1), o = W([0, 0, 0, 0]), i = W(640), u = W(480), c = W(0), s = () => {
    if (n === null) throw new Error("no WebGL context");
    const L = n.createBuffer();
    n.bindBuffer(n.ARRAY_BUFFER, L);
    let V = [0, 0, 0];
    for (let O = 0; O < 6; ++O) {
      const oe = 3.141 * O * 60 / 180;
      V = V.concat([1 * Math.cos(oe), 1 * Math.sin(oe), 0]);
    }
    for (let O = 0; O < 6; ++O) {
      const oe = 3.141 * O * 60 / 180;
      V = V.concat([1 * Math.cos(oe), 1 * Math.sin(oe), 0.2]);
    }
    for (let O = 0; O < 6; ++O) {
      const oe = 3.141 * O * 60 / 180;
      V = V.concat([1.2 * Math.cos(oe), 1.2 * Math.sin(oe), 0.2]);
    }
    for (let O = 0; O < 6; ++O) {
      const oe = 3.141 * O * 60 / 180;
      V = V.concat([1.2 * Math.cos(oe), 1.2 * Math.sin(oe), -1]);
    }
    n.bufferData(n.ARRAY_BUFFER, new Float32Array(V), n.STATIC_DRAW);
    let D = [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1];
    for (let O = 0; O < 6; ++O) D = D.concat([1, 1, 1, 1]);
    for (let O = 0; O < 6; ++O) D = D.concat([1, 1, 1, 1]);
    for (let O = 0; O < 6; ++O) D = D.concat([0.75, 0.75, 0.75, 1]);
    for (let O = 0; O < 6; ++O) D = D.concat([0.5, 0.5, 0.5, 1]);
    const te = n.createBuffer();
    n.bindBuffer(n.ARRAY_BUFFER, te), n.bufferData(n.ARRAY_BUFFER, new Float32Array(D), n.STATIC_DRAW);
    const be = n.createBuffer();
    let K = [0.5, 0.5];
    for (let O = 0; O < 6; ++O) {
      const oe = 3.141 * O * 60 / 180;
      K = K.concat([0.5 + 0.5 * Math.cos(oe), 0.5 + 0.5 * Math.sin(oe)]);
    }
    for (let O = 0; O < 6; ++O) {
      const oe = 3.141 * O * 60 / 180;
      K = K.concat([0.5 + 0.4 * Math.cos(oe), 0.5 + 0.4 * Math.sin(oe)]);
    }
    for (let O = 0; O < 6; ++O) {
      const oe = 3.141 * O * 60 / 180;
      K = K.concat([0.5 + 0.5 * Math.cos(oe), 0.5 + 0.5 * Math.sin(oe)]);
    }
    for (let O = 0; O < 6; ++O) {
      const oe = 3.141 * O * 60 / 180;
      K = K.concat([0.5 + 0.75 * Math.cos(oe + 1), 0.5 + 0.75 * Math.sin(oe + 1)]);
    }
    n.bindBuffer(n.ARRAY_BUFFER, be), n.bufferData(n.ARRAY_BUFFER, new Float32Array(K), n.STATIC_DRAW);
    const T = n.createBuffer();
    let Z = [];
    for (let O = 1; O < 7; ++O) Z = Z.concat([0, O, 1 + O % 6]);
    for (let O = 1; O < 7; ++O) Z = Z.concat([O, 1 + O % 6, O + 6]);
    for (let O = 1; O < 7; ++O) Z = Z.concat([6 + O, 7 + O % 6, O % 6 + 1]);
    for (let O = 1; O < 7; ++O) Z = Z.concat([6 + O, 7 + O % 6, 6 + O + 6]);
    for (let O = 1; O < 7; ++O) Z = Z.concat([12 + O, 13 + O % 6, 6 + O % 6 + 1]);
    for (let O = 1; O < 7; ++O) Z = Z.concat([12 + O, 13 + O % 6, 12 + O + 6]);
    for (let O = 1; O < 7; ++O) Z = Z.concat([18 + O, 19 + O % 6, 12 + O % 6 + 1]);
    return n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, T), n.bufferData(n.ELEMENT_ARRAY_BUFFER, new Uint16Array(Z), n.STATIC_DRAW), [L, te, be, T];
  }, v = (L, V) => {
    const D = qf();
    return uu(D, D, [0, 0, -6]), su(D, D, Math.sin(V) * 3.141 / 6 / 3, [0, 1, 0]), su(D, D, Math.sin(V * 1.15) * 3.141 / 4 / 3, [1, 0, 0]), su(D, D, Math.sin(V * 1.33) * 3.141 / 5 / 3, [1, 0, 0]), uu(D, D, [L[0], L[1], L[2]]), D;
  }, h = (L, V) => {
    n !== null && (n.uniform1f(V.locs.mode, r.value == L ? 1 : 2), n.bindTexture(n.TEXTURE_2D, N), n.drawElements(n.TRIANGLES, 3 * 6, n.UNSIGNED_SHORT, 0), n.uniform1f(V.locs.mode, 0), n.bindTexture(n.TEXTURE_2D, P), n.drawElements(n.TRIANGLES, 3 * 6 * 6, n.UNSIGNED_SHORT, 2 * 3 * 6));
  }, m = [[0, 0], [0, -2.2], [-2, -1], [2, -1]], g = (L, V) => {
    if (n === null || t.value === void 0) throw new Error("no WebGL context");
    n.bindFramebuffer(n.FRAMEBUFFER, null), n.bindRenderbuffer(n.RENDERBUFFER, null), n.clearColor(0, 0, 0, 0), n.clearDepth(1), n.enable(n.DEPTH_TEST), n.depthFunc(n.LEQUAL), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT);
    const D = 45 * Math.PI / 180, te = i.value / u.value, be = 0.1, K = 100, T = qf();
    mx(T, D, te, be, K);
    const Z = V;
    uu(T, T, [Math.sin(Z * 0.3) * 1, Math.cos(Z * 0.4) * 1, Math.cos(0.6 * Z) * 1]), _(L, false), w(L), C(L), n.useProgram(L.prog_draw), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, L.bufs.index), n.bindTexture(n.TEXTURE_2D, N), n.uniform1i(L.locs.sampler, 0), n.uniform1f(L.locs.time, V), n.uniformMatrix4fv(L.locs.proj, false, T);
    for (let oe = 0; oe < 4; ++oe) n.uniformMatrix4fv(L.locs.model, false, v(m[oe].concat([o.value[oe]]), V)), h(oe + 1, L);
    n.useProgram(L.prog_pick), n.enable(n.DEPTH_TEST), n.bindTexture(n.TEXTURE_2D, L.pick.tex), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.bindRenderbuffer(n.RENDERBUFFER, L.pick.rb), n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_COMPONENT16, n.canvas.width, n.canvas.height), n.bindFramebuffer(n.FRAMEBUFFER, L.pick.fb), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.RENDERBUFFER, L.pick.rb), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.canvas.width, n.canvas.height, 0, n.RGBA, n.UNSIGNED_BYTE, null), n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, L.pick.tex, 0), n.uniformMatrix4fv(L.locs.proj_pick, false, T), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT), _(L, true);
    for (let oe = 0; oe < 4; ++oe) n.uniformMatrix4fv(L.locs.model_pick, false, v(m[oe].concat([o.value[oe]]), V)), n.uniform4f(L.locs.id_pick, (oe + 1) / 255, 0, 0, 0), n.drawElements(n.TRIANGLES, 3 * 6, n.UNSIGNED_SHORT, 0);
    let O = new Uint8Array(4);
    n.readPixels(l.value[0], u.value - l.value[1], 1, 1, n.RGBA, n.UNSIGNED_BYTE, O), O.length && (a.value = O.toString(), O[0] > 0 ? r.value = O[0] : r.value = -1);
  }, _ = (L, V) => {
    if (n === null) throw new Error("setPos - no ctx");
    const D = 3, te = n.FLOAT, be = false, K = 0, T = 0;
    n.bindBuffer(n.ARRAY_BUFFER, L.bufs.pos), n.vertexAttribPointer(V ? L.attr.vertex_pick : L.attr.vertex, D, te, be, K, T), n.enableVertexAttribArray(V ? L.attr.vertex_pick : L.attr.vertex);
  }, w = (L) => {
    if (n === null) throw new Error("setColor - no ctx");
    n.bindBuffer(n.ARRAY_BUFFER, L.bufs.color), n.vertexAttribPointer(L.attr.color, 4, n.FLOAT, false, 0, 0), n.enableVertexAttribArray(L.attr.color);
  }, C = (L) => {
    if (n === null) throw new Error("setTex crash");
    n.bindBuffer(n.ARRAY_BUFFER, L.bufs.tex), n.vertexAttribPointer(L.attr.texture, 2, n.FLOAT, false, 0, 0), n.enableVertexAttribArray(L.attr.texture);
  };
  let p = 0;
  const y = () => {
    if (n === null) return;
    const D = A(`
        attribute vec4 aVertexPosition;
        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;
        uniform float fTime;
        varying vec4 vColor;
        attribute vec4 aVertexColor;

        uniform float fMode;

        varying float fDist;

        attribute vec2 aTextureCoord;
        varying highp vec2 vTextureCoord;

        varying highp float fT;
        varying lowp float fKind;

        void main() {
            vec4 b = aVertexPosition;
            fDist = sqrt(aVertexPosition[0] * aVertexPosition[0] + aVertexPosition[1] * aVertexPosition[1]);

            gl_Position = uProjectionMatrix * uModelViewMatrix * b;

            vColor = aVertexColor;
            vTextureCoord = aTextureCoord;

            fT = fTime;

            fKind = fMode;
        }
    `, `
        varying lowp vec4 vColor;
        varying lowp float fT;
        varying lowp float fDist;
        
        uniform sampler2D uSampler;

        varying highp vec2 vTextureCoord;

        varying lowp float fKind;

        void main() {
            lowp vec2 t = vTextureCoord;

            lowp float x = vTextureCoord[0] - 0.5;
            lowp float y = vTextureCoord[1] - 0.5;

            lowp float r = sqrt(x * x + y * y) * 4.0;

            lowp float f1 = fT;

            if(fKind == 0.0 || fKind == 2.0) {
                t[0] += (cos(f1 * r * 3.0) / 10.0 + 0.5) * 0.5 * exp(-r * 0.3) * exp(-f1 * 0.15);
                t[1] += (sin(f1 * r * 2.0) / 10.0 + 0.5) * 0.5 * exp(-r * 0.3) * exp(-f1 * 0.15);
            }
            
            if(fKind == 2.0) {
                gl_FragColor = texture2D(uSampler, t) * vColor;
                gl_FragColor[0] *= 0.66;
                gl_FragColor[1] *= 0.66;
                gl_FragColor[2] *= 0.66;
            }
            else if(fKind == 1.0) {
                gl_FragColor = texture2D(uSampler, t);
                gl_FragColor[0] *= 0.5;
                gl_FragColor[1] *= 0.5;
                gl_FragColor[2] *= 1.0;
                gl_FragColor += vec4(0.5, 0.5, 0.0, 0.0);
            }
            else {
                gl_FragColor = texture2D(uSampler, t) * vColor;
            }
        }
    `), te = `
        attribute vec4 aVertexPosition;
        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;

        void main() {
            vec4 b = aVertexPosition;
            gl_Position = uProjectionMatrix * uModelViewMatrix * b;
            // gl_Position = b;
            // gl_Position = uProjectionMatrix* b;
        }
    `, be = `
        precision mediump float;
        
        uniform vec4 uId;
        
        void main() {
            gl_FragColor = uId;
        }
    `, K = s(), T = n.getUniformLocation(D, "uProjectionMatrix"), Z = n.getUniformLocation(D, "uModelViewMatrix"), O = n.getUniformLocation(D, "uSampler"), oe = n.getUniformLocation(D, "fTime"), B = n.getUniformLocation(D, "fMode");
    if (T === null) throw new Error("no proj loc");
    if (Z === null) throw new Error("no view loc");
    if (O === null) throw new Error("no sampler loc");
    if (oe === null) throw new Error("no time loc");
    if (B === null) throw new Error("no mode loc");
    const $ = A(te, be), ee = n.getUniformLocation($, "uProjectionMatrix"), I = n.getUniformLocation($, "uModelViewMatrix"), ae = n.getUniformLocation($, "uId");
    if (ee === null) throw new Error("no proj pick loc");
    if (I === null) throw new Error("no view pick loc");
    if (ae === null) throw new Error("no id pick loc");
    const we = { prog_draw: D, prog_pick: $, attr: { vertex: n.getAttribLocation(D, "aVertexPosition"), vertex_pick: n.getAttribLocation($, "aVertexPosition"), color: n.getAttribLocation(D, "aVertexColor"), texture: n.getAttribLocation(D, "aTextureCoord") }, locs: { proj: T, model: Z, sampler: O, time: oe, mode: B, proj_pick: ee, model_pick: I, id_pick: ae }, bufs: { pos: K[0], color: K[1], tex: K[2], index: K[3] }, pick: { fb: n.createFramebuffer(), rb: n.createRenderbuffer(), tex: n.createTexture() } };
    H(), n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, true), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), R = we;
  }, b = () => {
    if (t.value === void 0 || (n === null && (n = t.value.getContext("webgl2", {})), n === null)) return;
    R === null && y(), n.viewport(0, 0, i.value, u.value);
    let L = 0, V = false;
    p = setInterval(() => {
      V ? (L -= 0.033, L < 0 && (L = 0, V = false)) : (L += 0.033, L > 7.5 && (L = 7.5, V = true)), R !== null && (x(), g(R, L));
    }, 25);
  }, x = (L) => {
    for (let V = 0; V < 4; ++V) r.value - 1 == V ? o.value[V] < 0.5 && (o.value[V] += 0.05) : o.value[V] > 0 && (o.value[V] -= 0.05);
  }, A = (L, V) => {
    if (n === null) throw new Error("no webgl");
    const D = F(n.VERTEX_SHADER, L), te = F(n.FRAGMENT_SHADER, V), be = n.createProgram();
    return n.attachShader(be, D), n.attachShader(be, te), n.linkProgram(be), be;
  }, F = (L, V) => {
    if (n === null) throw new Error("no webgl");
    const D = n.createShader(L);
    if (D === null) throw new Error("bad shader");
    return n.shaderSource(D, V), n.compileShader(D), D;
  };
  let N = null, P = null, R = null;
  const H = () => {
    if (n === null) throw new Error("loadTexture no context");
    N = n.createTexture(), n.bindTexture(n.TEXTURE_2D, N), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 0])), P = n.createTexture(), n.bindTexture(n.TEXTURE_2D, P), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 0]));
  }, q = (L, V) => {
    if (N === null || n === null) return;
    const D = V.target;
    L === "base" && n.bindTexture(n.TEXTURE_2D, N), L === "body" && n.bindTexture(n.TEXTURE_2D, P), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, D), n.generateMipmap(n.TEXTURE_2D);
  }, E = (L) => {
    if (n === null || t.value === void 0) return;
    const V = L, D = V.offsetX, te = V.offsetY;
    D - t.value.clientWidth / 2, te - t.value.clientHeight / 2, (D - n.canvas.width / 2) / 2, (te - n.canvas.height / 2) / 2, l.value = [D, te];
  }, k = () => {
    p != 0 && clearInterval(p);
    const L = document.getElementById("header");
    L !== null && (c.value = L.getBoundingClientRect().bottom);
    let V = 0;
    document.getElementById("footer"), L !== null && (V = L.getBoundingClientRect().height), We(() => {
      i.value = window.innerWidth, u.value = window.innerHeight - c.value - V, We(b);
    });
  };
  ft(() => {
    window.addEventListener("resize", k), k();
  }), Ke(() => {
    clearInterval(p), window.removeEventListener("resize", k);
  });
  const U = () => ({ top: c.value + "px" });
  return (L, V) => (Yn(), Bv(rn, null, [Il("canvas", { id: "canvas", ref_key: "canvas", ref: t, onMousemove: V[0] || (V[0] = (D) => E(D)), width: i.value, height: u.value, style: jo(U()) }, null, 44, hx), Il("img", { src: "img/tex.jpg", onLoad: V[1] || (V[1] = (D) => q("base", D)), style: { display: "none" } }, null, 32), Il("img", { src: "img/wood.jpg", onLoad: V[2] || (V[2] = (D) => q("body", D)), style: { display: "none" } }, null, 32)], 64));
} }), bx = { BASE_URL: "./", DEV: false, MODE: "production", PROD: true, SSR: false, VITE_APP_NAME: "vite mtg", VITE_client_id: "quasar-2fa", VITE_client_secret: "spoon" }, Ks = Wv(Qw);
console.log(bx);
const yx = [{ name: "layout", path: "/", component: Yw, children: [{ name: "root", path: "", component: dx }, { name: "webgl", path: "webgl", component: gx }] }], px = ZS({ history: TS(), routes: yx });
Ks.use(px);
Ks.use(Hw, { plugins: { Dialog: Tw, Dark: Zv, Loading: Ew, Cookies: kw, Notify: Fw }, config: { dark: "auto" } });
window.cb = (e) => {
  alert(e);
};
window.log = (e) => {
  console.log("%cwasm>%c %s", "background-color: blue; color: cyan; border: 2px solid blue;", "", e);
};
Tg({}).then(() => {
  Ks.mount("#q-app");
});
