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
}, Mg = () => false, No = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Yu = (e) => e.startsWith("onUpdate:"), It = Object.assign, Gu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Eg = Object.prototype.hasOwnProperty, st = (e, t) => Eg.call(e, t), Ne = Array.isArray, da = (e) => kr(e) === "[object Map]", qf = (e) => kr(e) === "[object Set]", $g = (e) => kr(e) === "[object RegExp]", Qe = (e) => typeof e == "function", $t = (e) => typeof e == "string", yl = (e) => typeof e == "symbol", xt = (e) => e !== null && typeof e == "object", Tf = (e) => (xt(e) || Qe(e)) && Qe(e.then) && Qe(e.catch), Mf = Object.prototype.toString, kr = (e) => Mf.call(e), Ag = (e) => kr(e).slice(8, -1), Ef = (e) => kr(e) === "[object Object]", Xu = (e) => $t(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Xa = /* @__PURE__ */ Wu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Ho = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Rg = /-(\w)/g, bn = Ho((e) => e.replace(Rg, (t, n) => n ? n.toUpperCase() : "")), Pg = /\B([A-Z])/g, Kl = Ho((e) => e.replace(Pg, "-$1").toLowerCase()), jo = Ho((e) => e.charAt(0).toUpperCase() + e.slice(1)), yi = Ho((e) => e ? `on${jo(e)}` : ""), ml = (e, t) => !Object.is(e, t), Za = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, $f = (e, t, n, l = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: l, value: n });
}, Lg = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Bg = (e) => {
  const t = $t(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Js;
const qr = () => Js || (Js = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Zu(e) {
  if (Ne(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const l = e[n], a = $t(l) ? Ig(l) : Zu(l);
      if (a) for (const r in a) t[r] = a[r];
    }
    return t;
  } else if ($t(e) || xt(e)) return e;
}
const Fg = /;(?![^(]*\))/g, Og = /:([^]+)/, Vg = /\/\*[^]*?\*\//g;
function Ig(e) {
  const t = {};
  return e.replace(Vg, "").split(Fg).forEach((n) => {
    if (n) {
      const l = n.split(Og);
      l.length > 1 && (t[l[0].trim()] = l[1].trim());
    }
  }), t;
}
function Ju(e) {
  let t = "";
  if ($t(e)) t = e;
  else if (Ne(e)) for (let n = 0; n < e.length; n++) {
    const l = Ju(e[n]);
    l && (t += l + " ");
  }
  else if (xt(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const zg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Dg = /* @__PURE__ */ Wu(zg);
function Af(e) {
  return !!e || e === "";
}
const Rf = (e) => !!(e && e.__v_isRef === true), to = (e) => $t(e) ? e : e == null ? "" : Ne(e) || xt(e) && (e.toString === Mf || !Qe(e.toString)) ? Rf(e) ? to(e.value) : JSON.stringify(e, Pf, 2) : String(e), Pf = (e, t) => Rf(t) ? Pf(e, t.value) : da(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [l, a], r) => (n[pi(l, r) + " =>"] = a, n), {}) } : qf(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => pi(n)) } : yl(t) ? pi(t) : xt(t) && !Ne(t) && !Ef(t) ? String(t) : t, pi = (e, t = "") => {
  var n;
  return yl(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let an;
class Ng {
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
function Hg() {
  return an;
}
let bt;
const _i = /* @__PURE__ */ new WeakSet();
class Lf {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ff(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, ec(this), Of(this);
    const t = bt, n = qn;
    bt = this, qn = true;
    try {
      return this.fn();
    } finally {
      Vf(this), bt = t, qn = n, this.flags &= -3;
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
    cu(this) && this.run();
  }
  get dirty() {
    return cu(this);
  }
}
let Bf = 0, Ja, er;
function Ff(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = er, er = e;
    return;
  }
  e.next = Ja, Ja = e;
}
function es() {
  Bf++;
}
function ts() {
  if (--Bf > 0) return;
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
function Of(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Vf(e) {
  let t, n = e.depsTail, l = n;
  for (; l; ) {
    const a = l.prevDep;
    l.version === -1 ? (l === n && (n = a), ns(l), jg(l)) : t = l, l.dep.activeLink = l.prevActiveLink, l.prevActiveLink = void 0, l = a;
  }
  e.deps = t, e.depsTail = n;
}
function cu(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (If(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function If(e) {
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
    Of(e);
    const a = e.fn(e._value);
    (t.version === 0 || ml(a, e._value)) && (e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    bt = n, qn = l, Vf(e), e.flags &= -3;
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
function jg(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let qn = true;
const zf = [];
function pl() {
  zf.push(qn), qn = false;
}
function _l() {
  const e = zf.pop();
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
class Ug {
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
    if (n === void 0 || n.sub !== bt) n = this.activeLink = new Ug(bt, this), bt.deps ? (n.prevDep = bt.depsTail, bt.depsTail.nextDep = n, bt.depsTail = n) : bt.deps = bt.depsTail = n, Df(n);
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
function Df(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let l = t.deps; l; l = l.nextDep) Df(l);
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
    a || (l.set(n, a = new ls()), a.map = l, a.key = n), a.track();
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
  if (es(), t === "clear") o.forEach(i);
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
  ts();
}
function Xl(e) {
  const t = Ye(e);
  return t === e ? t : (Kt(t, "iterate", fr), Tn(e) ? t : t.map(Gt));
}
function as(e) {
  return Kt(e = Ye(e), "iterate", fr), e;
}
const Qg = { __proto__: null, [Symbol.iterator]() {
  return wi(this, Symbol.iterator, Gt);
}, concat(...e) {
  return Xl(this).concat(...e.map((t) => Ne(t) ? Xl(t) : t));
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
  return Xl(this).join(e);
}, lastIndexOf(...e) {
  return Si(this, "lastIndexOf", e);
}, map(e, t) {
  return zn(this, "map", e, t, void 0, arguments);
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
  return zn(this, "some", e, t, void 0, arguments);
}, splice(...e) {
  return La(this, "splice", e);
}, toReversed() {
  return Xl(this).toReversed();
}, toSorted(e) {
  return Xl(this).toSorted(e);
}, toSpliced(...e) {
  return Xl(this).toSpliced(...e);
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
const Kg = Array.prototype;
function zn(e, t, n, l, a, r) {
  const o = as(e), i = o !== e && !Tn(e), u = o[t];
  if (u !== Kg[t]) {
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
  const l = Ye(e);
  Kt(l, "iterate", fr);
  const a = l[t](...n);
  return (a === -1 || a === false) && us(n[0]) ? (n[0] = Ye(n[0]), l[t](...n)) : a;
}
function La(e, t, n = []) {
  pl(), es();
  const l = Ye(e)[t].apply(e, n);
  return ts(), _l(), l;
}
const Wg = /* @__PURE__ */ Wu("__proto__,__v_isRef,__isVue"), Nf = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(yl));
function Yg(e) {
  yl(e) || (e = String(e));
  const t = Ye(this);
  return Kt(t, "has", e), t.hasOwnProperty(e);
}
class Hf {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, l) {
    if (n === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive") return !a;
    if (n === "__v_isReadonly") return a;
    if (n === "__v_isShallow") return r;
    if (n === "__v_raw") return l === (a ? r ? r0 : Kf : r ? Qf : Uf).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(l) ? t : void 0;
    const o = Ne(t);
    if (!a) {
      let u;
      if (o && (u = Qg[n])) return u;
      if (n === "hasOwnProperty") return Yg;
    }
    const i = Reflect.get(t, n, pt(t) ? t : l);
    return (yl(n) ? Nf.has(n) : Wg(n)) || (a || Kt(t, "get", n), r) ? i : pt(i) ? o && Xu(n) ? i : i.value : xt(i) ? a ? Wf(i) : Bn(i) : i;
  }
}
class jf extends Hf {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, l, a) {
    let r = t[n];
    if (!this._isShallow) {
      const u = Hl(r);
      if (!Tn(l) && !Hl(l) && (r = Ye(r), l = Ye(l)), !Ne(t) && pt(r) && !pt(l)) return u ? false : (r.value = l, true);
    }
    const o = Ne(t) && Xu(n) ? Number(n) < t.length : st(t, n), i = Reflect.set(t, n, l, pt(t) ? t : a);
    return t === Ye(a) && (o ? ml(l, r) && Kn(t, "set", n, l) : Kn(t, "add", n, l)), i;
  }
  deleteProperty(t, n) {
    const l = st(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && l && Kn(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const l = Reflect.has(t, n);
    return (!yl(n) || !Nf.has(n)) && Kt(t, "has", n), l;
  }
  ownKeys(t) {
    return Kt(t, "iterate", Ne(t) ? "length" : Vl), Reflect.ownKeys(t);
  }
}
class Gg extends Hf {
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
const Xg = new jf(), Zg = new Gg(), Jg = new jf(true);
const vu = (e) => e, Lr = (e) => Reflect.getPrototypeOf(e);
function e0(e, t, n) {
  return function(...l) {
    const a = this.__v_raw, r = Ye(a), o = da(r), i = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, c = a[e](...l), s = n ? vu : t ? mu : Gt;
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
function t0(e, t) {
  const n = { get(a) {
    const r = this.__v_raw, o = Ye(r), i = Ye(a);
    e || (ml(a, i) && Kt(o, "get", a), Kt(o, "get", i));
    const { has: u } = Lr(o), c = t ? vu : e ? mu : Gt;
    if (u.call(o, a)) return c(r.get(a));
    if (u.call(o, i)) return c(r.get(i));
    r !== o && r.get(a);
  }, get size() {
    const a = this.__v_raw;
    return !e && Kt(Ye(a), "iterate", Vl), Reflect.get(a, "size", a);
  }, has(a) {
    const r = this.__v_raw, o = Ye(r), i = Ye(a);
    return e || (ml(a, i) && Kt(o, "has", a), Kt(o, "has", i)), a === i ? r.has(a) : r.has(a) || r.has(i);
  }, forEach(a, r) {
    const o = this, i = o.__v_raw, u = Ye(i), c = t ? vu : e ? mu : Gt;
    return !e && Kt(u, "iterate", Vl), i.forEach((s, v) => a.call(r, c(s), c(v), o));
  } };
  return It(n, e ? { add: Br("add"), set: Br("set"), delete: Br("delete"), clear: Br("clear") } : { add(a) {
    !t && !Tn(a) && !Hl(a) && (a = Ye(a));
    const r = Ye(this);
    return Lr(r).has.call(r, a) || (r.add(a), Kn(r, "add", a, a)), this;
  }, set(a, r) {
    !t && !Tn(r) && !Hl(r) && (r = Ye(r));
    const o = Ye(this), { has: i, get: u } = Lr(o);
    let c = i.call(o, a);
    c || (a = Ye(a), c = i.call(o, a));
    const s = u.call(o, a);
    return o.set(a, r), c ? ml(r, s) && Kn(o, "set", a, r) : Kn(o, "add", a, r), this;
  }, delete(a) {
    const r = Ye(this), { has: o, get: i } = Lr(r);
    let u = o.call(r, a);
    u || (a = Ye(a), u = o.call(r, a)), i && i.call(r, a);
    const c = r.delete(a);
    return u && Kn(r, "delete", a, void 0), c;
  }, clear() {
    const a = Ye(this), r = a.size !== 0, o = a.clear();
    return r && Kn(a, "clear", void 0, void 0), o;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((a) => {
    n[a] = e0(a, e, t);
  }), n;
}
function rs(e, t) {
  const n = t0(e, t);
  return (l, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? l : Reflect.get(st(n, a) && a in l ? n : l, a, r);
}
const n0 = { get: rs(false, false) }, l0 = { get: rs(false, true) }, a0 = { get: rs(true, false) };
const Uf = /* @__PURE__ */ new WeakMap(), Qf = /* @__PURE__ */ new WeakMap(), Kf = /* @__PURE__ */ new WeakMap(), r0 = /* @__PURE__ */ new WeakMap();
function o0(e) {
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
function i0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : o0(Ag(e));
}
function Bn(e) {
  return Hl(e) ? e : is(e, false, Xg, n0, Uf);
}
function os(e) {
  return is(e, false, Jg, l0, Qf);
}
function Wf(e) {
  return is(e, true, Zg, a0, Kf);
}
function is(e, t, n, l, a) {
  if (!xt(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const r = a.get(e);
  if (r) return r;
  const o = i0(e);
  if (o === 0) return e;
  const i = new Proxy(e, o === 2 ? l : n);
  return a.set(e, i), i;
}
function tr(e) {
  return Hl(e) ? tr(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Hl(e) {
  return !!(e && e.__v_isReadonly);
}
function Tn(e) {
  return !!(e && e.__v_isShallow);
}
function us(e) {
  return e ? !!e.__v_raw : false;
}
function Ye(e) {
  const t = e && e.__v_raw;
  return t ? Ye(t) : e;
}
function Uo(e) {
  return !st(e, "__v_skip") && Object.isExtensible(e) && $f(e, "__v_skip", true), e;
}
const Gt = (e) => xt(e) ? Bn(e) : e, mu = (e) => xt(e) ? Wf(e) : e;
function pt(e) {
  return e ? e.__v_isRef === true : false;
}
function U(e) {
  return Yf(e, false);
}
function u0(e) {
  return Yf(e, true);
}
function Yf(e, t) {
  return pt(e) ? e : new s0(e, t);
}
class s0 {
  constructor(t, n) {
    this.dep = new ls(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Ye(t), this._value = n ? t : Gt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, l = this.__v_isShallow || Tn(t) || Hl(t);
    t = l ? t : Ye(t), ml(t, n) && (this._rawValue = t, this._value = l ? t : Gt(t), this.dep.trigger());
  }
}
function Ie(e) {
  return pt(e) ? e.value : e;
}
const c0 = { get: (e, t, n) => t === "__v_raw" ? e : Ie(Reflect.get(e, t, n)), set: (e, t, n, l) => {
  const a = e[t];
  return pt(a) && !pt(n) ? (a.value = n, true) : Reflect.set(e, t, n, l);
} };
function Gf(e) {
  return tr(e) ? e : new Proxy(e, c0);
}
class d0 {
  constructor(t, n, l) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ls(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = dr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = l;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && bt !== this) return Ff(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return If(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function f0(e, t, n = false) {
  let l, a;
  return Qe(e) ? l = e : (l = e.get, a = e.set), new d0(l, a, n);
}
const Fr = {}, mo = /* @__PURE__ */ new WeakMap();
let Al;
function v0(e, t = false, n = Al) {
  if (n) {
    let l = mo.get(n);
    l || mo.set(n, l = []), l.push(e);
  }
}
function m0(e, t, n = mt) {
  const { immediate: l, deep: a, once: r, scheduler: o, augmentJob: i, call: u } = n, c = (b) => a ? b : Tn(b) || a === false || a === 0 ? Wn(b, 1) : Wn(b);
  let s, v, h, m, g = false, w = false;
  if (pt(e) ? (v = () => e.value, g = Tn(e)) : tr(e) ? (v = () => c(e), g = true) : Ne(e) ? (w = true, g = e.some((b) => tr(b) || Tn(b)), v = () => e.map((b) => {
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
    const b = v, _ = a === true ? 1 / 0 : a;
    v = () => Wn(b(), _);
  }
  const S = Hg(), q = () => {
    s.stop(), S && S.active && Gu(S.effects, s);
  };
  if (r && t) {
    const b = t;
    t = (..._) => {
      b(..._), q();
    };
  }
  let p = w ? new Array(e.length).fill(Fr) : Fr;
  const y = (b) => {
    if (!(!(s.flags & 1) || !s.dirty && !b)) if (t) {
      const _ = s.run();
      if (a || g || (w ? _.some((E, A) => ml(E, p[A])) : ml(_, p))) {
        h && h();
        const E = Al;
        Al = s;
        try {
          const A = [_, p === Fr ? void 0 : w && p[0] === Fr ? [] : p, m];
          u ? u(t, 3, A) : t(...A), p = _;
        } finally {
          Al = E;
        }
      }
    } else s.run();
  };
  return i && i(y), s = new Lf(v), s.scheduler = o ? () => o(y, false) : y, m = (b) => v0(b, false, s), h = s.onStop = () => {
    const b = mo.get(s);
    if (b) {
      if (u) u(b, 4);
      else for (const _ of b) _();
      mo.delete(s);
    }
  }, t ? l ? y(true) : p = s.run() : o ? o(y.bind(null, true), true) : s.run(), q.pause = s.pause.bind(s), q.resume = s.resume.bind(s), q.stop = q, q;
}
function Wn(e, t = 1 / 0, n) {
  if (t <= 0 || !xt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
  if (n.add(e), t--, pt(e)) Wn(e.value, t, n);
  else if (Ne(e)) for (let l = 0; l < e.length; l++) Wn(e[l], t, n);
  else if (qf(e) || da(e)) e.forEach((l) => {
    Wn(l, t, n);
  });
  else if (Ef(e)) {
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
    return a && Tf(a) && a.catch((r) => {
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
  h0(e, n, a, l, o);
}
function h0(e, t, n, l = true, a = false) {
  if (a) throw e;
  console.error(e);
}
const Xt = [];
let Pn = -1;
const fa = [];
let ul = null, oa = 0;
const Xf = Promise.resolve();
let ho = null;
function Ge(e) {
  const t = ho || Xf;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function g0(e) {
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
    !n || !(e.flags & 2) && t >= vr(n) ? Xt.push(e) : Xt.splice(g0(t), 0, e), e.flags |= 1, Zf();
  }
}
function Zf() {
  ho || (ho = Xf.then(ev));
}
function b0(e) {
  Ne(e) ? fa.push(...e) : ul && e.id === -1 ? ul.splice(oa + 1, 0, e) : e.flags & 1 || (fa.push(e), e.flags |= 1), Zf();
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
function Jf(e) {
  if (fa.length) {
    const t = [...new Set(fa)].sort((n, l) => vr(n) - vr(l));
    if (fa.length = 0, ul) {
      ul.push(...t);
      return;
    }
    for (ul = t, oa = 0; oa < ul.length; oa++) {
      const n = ul[oa];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ul = null, oa = 0;
  }
}
const vr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ev(e) {
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
    Pn = -1, Xt.length = 0, Jf(), ho = null, (Xt.length || fa.length) && ev();
  }
}
let tn = null, tv = null;
function go(e) {
  const t = tn;
  return tn = e, tv = e && e.type.__scopeId || null, t;
}
function Lt(e, t = tn, n) {
  if (!t || e._n) return e;
  const l = (...a) => {
    l._d && hc(-1);
    const r = go(t);
    let o;
    try {
      o = e(...a);
    } finally {
      go(r), l._d && hc(1);
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
const nv = Symbol("_vte"), lv = (e) => e.__isTeleport, nr = (e) => e && (e.disabled || e.disabled === ""), lc = (e) => e && (e.defer || e.defer === ""), ac = (e) => typeof SVGElement < "u" && e instanceof SVGElement, rc = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, hu = (e, t) => {
  const n = e && e.to;
  return $t(n) ? t ? t(n) : null : n;
}, av = { name: "Teleport", __isTeleport: true, process(e, t, n, l, a, r, o, i, u, c) {
  const { mc: s, pc: v, pbc: h, o: { insert: m, querySelector: g, createText: w, createComment: S } } = c, q = nr(t.props);
  let { shapeFlag: p, children: y, dynamicChildren: b } = t;
  if (e == null) {
    const _ = t.el = w(""), E = t.anchor = w("");
    m(_, n, l), m(E, n, l);
    const A = (L, P) => {
      p & 16 && (a && a.isCE && (a.ce._teleportTarget = L), s(y, L, P, a, r, o, i, u));
    }, V = () => {
      const L = t.target = hu(t.props, g), P = rv(L, t, w, m);
      L && (o !== "svg" && ac(L) ? o = "svg" : o !== "mathml" && rc(L) && (o = "mathml"), q || (A(L, P), no(t, false)));
    };
    q && (A(n, E), no(t, true)), lc(t.props) ? Bt(() => {
      V(), t.el.__isMounted = true;
    }, r) : V();
  } else {
    if (lc(t.props) && !e.el.__isMounted) {
      Bt(() => {
        av.process(e, t, n, l, a, r, o, i, u, c), delete e.el.__isMounted;
      }, r);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const _ = t.anchor = e.anchor, E = t.target = e.target, A = t.targetAnchor = e.targetAnchor, V = nr(e.props), L = V ? n : E, P = V ? _ : A;
    if (o === "svg" || ac(E) ? o = "svg" : (o === "mathml" || rc(E)) && (o = "mathml"), b ? (h(e.dynamicChildren, b, L, a, r, o, i), vs(e, t, true)) : u || v(e, t, L, P, a, r, o, i, false), q) V ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Or(t, n, _, c, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const F = t.target = hu(t.props, g);
      F && Or(t, F, null, c, 0);
    } else V && Or(t, E, A, c, 1);
    no(t, q);
  }
}, remove(e, t, n, { um: l, o: { remove: a } }, r) {
  const { shapeFlag: o, children: i, anchor: u, targetStart: c, targetAnchor: s, target: v, props: h } = e;
  if (v && (a(c), a(s)), r && a(u), o & 16) {
    const m = r || !nr(h);
    for (let g = 0; g < i.length; g++) {
      const w = i[g];
      l(w, t, n, m, !!w.dynamicChildren);
    }
  }
}, move: Or, hydrate: y0 };
function Or(e, t, n, { o: { insert: l }, m: a }, r = 2) {
  r === 0 && l(e.targetAnchor, t, n);
  const { el: o, anchor: i, shapeFlag: u, children: c, props: s } = e, v = r === 2;
  if (v && l(o, t, n), (!v || nr(s)) && u & 16) for (let h = 0; h < c.length; h++) a(c[h], t, n, 2);
  v && l(i, t, n);
}
function y0(e, t, n, l, a, r, { o: { nextSibling: o, parentNode: i, querySelector: u, insert: c, createText: s } }, v) {
  const h = t.target = hu(t.props, u);
  if (h) {
    const m = nr(t.props), g = h._lpa || h.firstChild;
    if (t.shapeFlag & 16) if (m) t.anchor = v(o(e), t, i(e), n, l, a, r), t.targetStart = g, t.targetAnchor = g && o(g);
    else {
      t.anchor = o(e);
      let w = g;
      for (; w; ) {
        if (w && w.nodeType === 8) {
          if (w.data === "teleport start anchor") t.targetStart = w;
          else if (w.data === "teleport anchor") {
            t.targetAnchor = w, h._lpa = t.targetAnchor && o(t.targetAnchor);
            break;
          }
        }
        w = o(w);
      }
      t.targetAnchor || rv(h, t, s, c), v(g && o(g), t, h, n, l, a, r);
    }
    no(t, m);
  }
  return t.anchor && o(t.anchor);
}
const p0 = av;
function no(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let l, a;
    for (t ? (l = e.el, a = e.anchor) : (l = e.targetStart, a = e.targetAnchor); l && l !== a; ) l.nodeType === 1 && l.setAttribute("data-v-owner", n.uid), l = l.nextSibling;
    n.ut();
  }
}
function rv(e, t, n, l) {
  const a = t.targetStart = n(""), r = t.targetAnchor = n("");
  return a[nv] = r, e && (l(a, e), l(r, e)), r;
}
const sl = Symbol("_leaveCb"), Vr = Symbol("_enterCb");
function ov() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return ft(() => {
    e.isMounted = true;
  }), Ke(() => {
    e.isUnmounting = true;
  }), e;
}
const dn = [Function, Array], iv = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: dn, onEnter: dn, onAfterEnter: dn, onEnterCancelled: dn, onBeforeLeave: dn, onLeave: dn, onAfterLeave: dn, onLeaveCancelled: dn, onBeforeAppear: dn, onAppear: dn, onAfterAppear: dn, onAppearCancelled: dn }, uv = (e) => {
  const t = e.subTree;
  return t.component ? uv(t.component) : t;
}, _0 = { name: "BaseTransition", props: iv, setup(e, { slots: t }) {
  const n = Se(), l = ov();
  return () => {
    const a = t.default && cs(t.default(), true);
    if (!a || !a.length) return;
    const r = sv(a), o = Ye(e), { mode: i } = o;
    if (l.isLeaving) return xi(r);
    const u = oc(r);
    if (!u) return xi(r);
    let c = mr(u, o, l, n, (v) => c = v);
    u.type !== Zt && bl(u, c);
    let s = n.subTree && oc(n.subTree);
    if (s && s.type !== Zt && !fl(u, s) && uv(n).type !== Zt) {
      let v = mr(s, o, l, n);
      if (bl(s, v), i === "out-in" && u.type !== Zt) return l.isLeaving = true, v.afterLeave = () => {
        l.isLeaving = false, n.job.flags & 8 || n.update(), delete v.afterLeave, s = void 0;
      }, xi(r);
      i === "in-out" && u.type !== Zt ? v.delayLeave = (h, m, g) => {
        const w = cv(l, s);
        w[String(s.key)] = s, h[sl] = () => {
          m(), h[sl] = void 0, delete c.delayedLeave, s = void 0;
        }, c.delayedLeave = () => {
          g(), delete c.delayedLeave, s = void 0;
        };
      } : s = void 0;
    } else s && (s = void 0);
    return r;
  };
} };
function sv(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== Zt) {
      t = n;
      break;
    }
  }
  return t;
}
const w0 = _0;
function cv(e, t) {
  const { leavingVNodes: n } = e;
  let l = n.get(t.type);
  return l || (l = /* @__PURE__ */ Object.create(null), n.set(t.type, l)), l;
}
function mr(e, t, n, l, a) {
  const { appear: r, mode: o, persisted: i = false, onBeforeEnter: u, onEnter: c, onAfterEnter: s, onEnterCancelled: v, onBeforeLeave: h, onLeave: m, onAfterLeave: g, onLeaveCancelled: w, onBeforeAppear: S, onAppear: q, onAfterAppear: p, onAppearCancelled: y } = t, b = String(e.key), _ = cv(n, e), E = (L, P) => {
    L && En(L, l, 9, P);
  }, A = (L, P) => {
    const F = P[1];
    E(L, P), Ne(L) ? L.every((T) => T.length <= 1) && F() : L.length <= 1 && F();
  }, V = { mode: o, persisted: i, beforeEnter(L) {
    let P = u;
    if (!n.isMounted) if (r) P = S || u;
    else return;
    L[sl] && L[sl](true);
    const F = _[b];
    F && fl(e, F) && F.el[sl] && F.el[sl](), E(P, [L]);
  }, enter(L) {
    let P = c, F = s, T = v;
    if (!n.isMounted) if (r) P = q || c, F = p || s, T = y || v;
    else return;
    let x = false;
    const C = L[Vr] = (D) => {
      x || (x = true, D ? E(T, [L]) : E(F, [L]), V.delayedLeave && V.delayedLeave(), L[Vr] = void 0);
    };
    P ? A(P, [L, C]) : C();
  }, leave(L, P) {
    const F = String(e.key);
    if (L[Vr] && L[Vr](true), n.isUnmounting) return P();
    E(h, [L]);
    let T = false;
    const x = L[sl] = (C) => {
      T || (T = true, P(), C ? E(w, [L]) : E(g, [L]), L[sl] = void 0, _[F] === e && delete _[F]);
    };
    _[F] = e, m ? A(m, [L, x]) : x();
  }, clone(L) {
    const P = mr(L, t, n, l, a);
    return a && a(P), P;
  } };
  return V;
}
function xi(e) {
  if (Ko(e)) return e = Gn(e), e.children = null, e;
}
function oc(e) {
  if (!Ko(e)) return lv(e.type) && e.children ? sv(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && Qe(n.default)) return n.default();
  }
}
function bl(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, bl(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function cs(e, t = false, n) {
  let l = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const i = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === rn ? (o.patchFlag & 128 && a++, l = l.concat(cs(o.children, t, i))) : (t || o.type !== Zt) && l.push(i != null ? Gn(o, { key: i }) : o);
  }
  if (a > 1) for (let r = 0; r < l.length; r++) l[r].patchFlag = -2;
  return l;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ta(e, t) {
  return Qe(e) ? It({ name: e.name }, t, { setup: e }) : e;
}
function dv(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function bo(e, t, n, l, a = false) {
  if (Ne(e)) {
    e.forEach((g, w) => bo(g, t && (Ne(t) ? t[w] : t), n, l, a));
    return;
  }
  if (va(l) && !a) {
    l.shapeFlag & 512 && l.type.__asyncResolved && l.component.subTree.component && bo(e, t, n, l.component.subTree);
    return;
  }
  const r = l.shapeFlag & 4 ? ei(l.component) : l.el, o = a ? null : r, { i, r: u } = e, c = t && t.r, s = i.refs === mt ? i.refs = {} : i.refs, v = i.setupState, h = Ye(v), m = v === mt ? () => false : (g) => st(h, g);
  if (c != null && c !== u && ($t(c) ? (s[c] = null, m(c) && (v[c] = null)) : pt(c) && (c.value = null)), Qe(u)) Tr(u, i, 12, [o, s]);
  else {
    const g = $t(u), w = pt(u);
    if (g || w) {
      const S = () => {
        if (e.f) {
          const q = g ? m(u) ? v[u] : s[u] : u.value;
          a ? Ne(q) && Gu(q, r) : Ne(q) ? q.includes(r) || q.push(r) : g ? (s[u] = [r], m(u) && (v[u] = s[u])) : (u.value = [r], e.k && (s[e.k] = u.value));
        } else g ? (s[u] = o, m(u) && (v[u] = o)) : w && (u.value = o, e.k && (s[e.k] = o));
      };
      o ? (S.id = -1, Bt(S, n)) : S();
    }
  }
}
qr().requestIdleCallback;
qr().cancelIdleCallback;
const va = (e) => !!e.type.__asyncLoader, Ko = (e) => e.type.__isKeepAlive, S0 = { name: "KeepAlive", __isKeepAlive: true, props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] }, setup(e, { slots: t }) {
  const n = Se(), l = n.ctx;
  if (!l.renderer) return () => {
    const p = t.default && t.default();
    return p && p.length === 1 ? p[0] : p;
  };
  const a = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set();
  let o = null;
  const i = n.suspense, { renderer: { p: u, m: c, um: s, o: { createElement: v } } } = l, h = v("div");
  l.activate = (p, y, b, _, E) => {
    const A = p.component;
    c(p, y, b, 0, i), u(A.vnode, p, y, b, A, i, _, p.slotScopeIds, E), Bt(() => {
      A.isDeactivated = false, A.a && Za(A.a);
      const V = p.props && p.props.onVnodeMounted;
      V && vn(V, A.parent, p);
    }, i);
  }, l.deactivate = (p) => {
    const y = p.component;
    po(y.m), po(y.a), c(p, h, null, 1, i), Bt(() => {
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
      const _ = wu(y.type);
      _ && !p(_) && w(b);
    });
  }
  function w(p) {
    const y = a.get(p);
    y && (!o || !fl(y, o)) ? m(y) : o && Ci(o), a.delete(p), r.delete(p);
  }
  he(() => [e.include, e.exclude], ([p, y]) => {
    p && g((b) => Ua(p, b)), y && g((b) => !Ua(y, b));
  }, { flush: "post", deep: true });
  let S = null;
  const q = () => {
    S != null && (_o(n.subTree.type) ? Bt(() => {
      a.set(S, Ir(n.subTree));
    }, n.subTree.suspense) : a.set(S, Ir(n.subTree)));
  };
  return ft(q), Go(q), Ke(() => {
    a.forEach((p) => {
      const { subTree: y, suspense: b } = n, _ = Ir(y);
      if (p.type === _.type && p.key === _.key) {
        Ci(_);
        const E = _.component.da;
        E && Bt(E, b);
        return;
      }
      m(p);
    });
  }), () => {
    if (S = null, !t.default) return o = null;
    const p = t.default(), y = p[0];
    if (p.length > 1) return o = null, p;
    if (!gr(y) || !(y.shapeFlag & 4) && !(y.shapeFlag & 128)) return o = null, y;
    let b = Ir(y);
    if (b.type === Zt) return o = null, b;
    const _ = b.type, E = wu(va(b) ? b.type.__asyncResolved || {} : _), { include: A, exclude: V, max: L } = e;
    if (A && (!E || !Ua(A, E)) || V && E && Ua(V, E)) return b.shapeFlag &= -257, o = b, y;
    const P = b.key == null ? _ : b.key, F = a.get(P);
    return b.el && (b = Gn(b), y.shapeFlag & 128 && (y.ssContent = b)), S = P, F ? (b.el = F.el, b.component = F.component, b.transition && bl(b, b.transition), b.shapeFlag |= 512, r.delete(P), r.add(P)) : (r.add(P), L && r.size > parseInt(L, 10) && w(r.values().next().value)), b.shapeFlag |= 256, o = b, _o(y.type) ? y : b;
  };
} }, fv = S0;
function Ua(e, t) {
  return Ne(e) ? e.some((n) => Ua(n, t)) : $t(e) ? e.split(",").includes(t) : $g(e) ? (e.lastIndex = 0, e.test(t)) : false;
}
function wl(e, t) {
  vv(e, "a", t);
}
function On(e, t) {
  vv(e, "da", t);
}
function vv(e, t, n = Ht) {
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
    for (; a && a.parent; ) Ko(a.parent.vnode) && x0(l, t, n, a), a = a.parent;
  }
}
function x0(e, t, n, l) {
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
}, Yo = Zn("bm"), ft = Zn("m"), Ma = Zn("bu"), Go = Zn("u"), Ke = Zn("bum"), Xo = Zn("um"), C0 = Zn("sp"), k0 = Zn("rtg"), q0 = Zn("rtc");
function T0(e, t = Ht) {
  Wo("ec", e, t);
}
const mv = "components", M0 = "directives";
function ds(e, t) {
  return hv(mv, e, true, t) || e;
}
const E0 = Symbol.for("v-ndc");
function $0(e) {
  return hv(M0, e);
}
function hv(e, t, n = true, l = false) {
  const a = tn || Ht;
  if (a) {
    const r = a.type;
    if (e === mv) {
      const i = wu(r, false);
      if (i && (i === t || i === bn(t) || i === jo(bn(t)))) return r;
    }
    const o = ic(a[e] || r[e], t) || ic(a.appContext[e], t);
    return !o && l ? r : o;
  }
}
function ic(e, t) {
  return e && (e[t] || e[bn(t)] || e[jo(bn(t))]);
}
const gu = (e) => e ? Bv(e) ? ei(e) : gu(e.parent) : null, lr = It(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => gu(e.parent), $root: (e) => gu(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => bv(e), $forceUpdate: (e) => e.f || (e.f = () => {
  ss(e.update);
}), $nextTick: (e) => e.n || (e.n = Ge.bind(e.proxy)), $watch: (e) => Z0.bind(e) }), ki = (e, t) => e !== mt && !e.__isScriptSetup && st(e, t), A0 = { get({ _: e }, t) {
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
function uc(e) {
  return Ne(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let bu = true;
function R0(e) {
  const t = bv(e), n = e.proxy, l = e.ctx;
  bu = false, t.beforeCreate && sc(t.beforeCreate, e, "bc");
  const { data: a, computed: r, methods: o, watch: i, provide: u, inject: c, created: s, beforeMount: v, mounted: h, beforeUpdate: m, updated: g, activated: w, deactivated: S, beforeDestroy: q, beforeUnmount: p, destroyed: y, unmounted: b, render: _, renderTracked: E, renderTriggered: A, errorCaptured: V, serverPrefetch: L, expose: P, inheritAttrs: F, components: T, directives: x, filters: C } = t;
  if (c && P0(c, l, null), o) for (const j in o) {
    const W = o[j];
    Qe(W) && (l[j] = W.bind(n));
  }
  if (a) {
    const j = a.call(n, n);
    xt(j) && (e.data = Bn(j));
  }
  if (bu = true, r) for (const j in r) {
    const W = r[j], te = Qe(W) ? W.bind(n, n) : Qe(W.get) ? W.get.bind(n, n) : Fn, pe = !Qe(W) && Qe(W.set) ? W.set.bind(n) : Fn, Q = f({ get: te, set: pe });
    Object.defineProperty(l, j, { enumerable: true, configurable: true, get: () => Q.value, set: (M) => Q.value = M });
  }
  if (i) for (const j in i) gv(i[j], l, n, j);
  if (u) {
    const j = Qe(u) ? u.call(n) : u;
    Reflect.ownKeys(j).forEach((W) => {
      hn(W, j[W]);
    });
  }
  s && sc(s, e, "c");
  function H(j, W) {
    Ne(W) ? W.forEach((te) => j(te.bind(n))) : W && j(W.bind(n));
  }
  if (H(Yo, v), H(ft, h), H(Ma, m), H(Go, g), H(wl, w), H(On, S), H(T0, V), H(q0, E), H(k0, A), H(Ke, p), H(Xo, b), H(C0, L), Ne(P)) if (P.length) {
    const j = e.exposed || (e.exposed = {});
    P.forEach((W) => {
      Object.defineProperty(j, W, { get: () => n[W], set: (te) => n[W] = te });
    });
  } else e.exposed || (e.exposed = {});
  _ && e.render === Fn && (e.render = _), F != null && (e.inheritAttrs = F), T && (e.components = T), x && (e.directives = x), L && dv(e);
}
function P0(e, t, n = Fn) {
  Ne(e) && (e = yu(e));
  for (const l in e) {
    const a = e[l];
    let r;
    xt(a) ? "default" in a ? r = Tt(a.from || l, a.default, true) : r = Tt(a.from || l) : r = Tt(a), pt(r) ? Object.defineProperty(t, l, { enumerable: true, configurable: true, get: () => r.value, set: (o) => r.value = o }) : t[l] = r;
  }
}
function sc(e, t, n) {
  En(Ne(e) ? e.map((l) => l.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function gv(e, t, n, l) {
  let a = l.includes(".") ? $v(n, l) : () => n[l];
  if ($t(e)) {
    const r = t[e];
    Qe(r) && he(a, r);
  } else if (Qe(e)) he(a, e.bind(n));
  else if (xt(e)) if (Ne(e)) e.forEach((r) => gv(r, t, n, l));
  else {
    const r = Qe(e.handler) ? e.handler.bind(n) : t[e.handler];
    Qe(r) && he(a, r, e);
  }
}
function bv(e) {
  const t = e.type, { mixins: n, extends: l } = t, { mixins: a, optionsCache: r, config: { optionMergeStrategies: o } } = e.appContext, i = r.get(t);
  let u;
  return i ? u = i : !a.length && !n && !l ? u = t : (u = {}, a.length && a.forEach((c) => yo(u, c, o, true)), yo(u, t, o)), xt(t) && r.set(t, u), u;
}
function yo(e, t, n, l = false) {
  const { mixins: a, extends: r } = t;
  r && yo(e, r, n, true), a && a.forEach((o) => yo(e, o, n, true));
  for (const o in t) if (!(l && o === "expose")) {
    const i = L0[o] || n && n[o];
    e[o] = i ? i(e[o], t[o]) : t[o];
  }
  return e;
}
const L0 = { data: cc, props: dc, emits: dc, methods: Qa, computed: Qa, beforeCreate: Yt, created: Yt, beforeMount: Yt, mounted: Yt, beforeUpdate: Yt, updated: Yt, beforeDestroy: Yt, beforeUnmount: Yt, destroyed: Yt, unmounted: Yt, activated: Yt, deactivated: Yt, errorCaptured: Yt, serverPrefetch: Yt, components: Qa, directives: Qa, watch: F0, provide: cc, inject: B0 };
function cc(e, t) {
  return t ? e ? function() {
    return It(Qe(e) ? e.call(this, this) : e, Qe(t) ? t.call(this, this) : t);
  } : t : e;
}
function B0(e, t) {
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
function dc(e, t) {
  return e ? Ne(e) && Ne(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : It(/* @__PURE__ */ Object.create(null), uc(e), uc(t ?? {})) : t;
}
function F0(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = It(/* @__PURE__ */ Object.create(null), e);
  for (const l in t) n[l] = Yt(e[l], t[l]);
  return n;
}
function yv() {
  return { app: null, config: { isNativeTag: Mg, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let O0 = 0;
function V0(e, t) {
  return function(l, a = null) {
    Qe(l) || (l = It({}, l)), a != null && !xt(a) && (a = null);
    const r = yv(), o = /* @__PURE__ */ new WeakSet(), i = [];
    let u = false;
    const c = r.app = { _uid: O0++, _component: l, _props: a, _container: null, _context: r, _instance: null, version: pb, get config() {
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
const pv = {}, _v = () => Object.create(pv), wv = (e) => Object.getPrototypeOf(e) === pv;
function I0(e, t, n, l = false) {
  const a = {}, r = _v();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Sv(e, t, a, r);
  for (const o in e.propsOptions[0]) o in a || (a[o] = void 0);
  n ? e.props = l ? a : os(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function z0(e, t, n, l) {
  const { props: a, attrs: r, vnode: { patchFlag: o } } = e, i = Ye(a), [u] = e.propsOptions;
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
    Sv(e, t, a, r) && (c = true);
    let s;
    for (const v in i) (!t || !st(t, v) && ((s = Kl(v)) === v || !st(t, s))) && (u ? n && (n[v] !== void 0 || n[s] !== void 0) && (a[v] = pu(u, i, v, void 0, e, true)) : delete a[v]);
    if (r !== i) for (const v in r) (!t || !st(t, v)) && (delete r[v], c = true);
  }
  c && Kn(e.attrs, "set", "");
}
function Sv(e, t, n, l) {
  const [a, r] = e.propsOptions;
  let o = false, i;
  if (t) for (let u in t) {
    if (Xa(u)) continue;
    const c = t[u];
    let s;
    a && st(a, s = bn(u)) ? !r || !r.includes(s) ? n[s] = c : (i || (i = {}))[s] = c : Zo(e.emitsOptions, u) || (!(u in l) || c !== l[u]) && (l[u] = c, o = true);
  }
  if (r) {
    const u = Ye(n), c = i || mt;
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
    o[0] && (r && !i ? l = false : o[1] && (l === "" || l === Kl(n)) && (l = true));
  }
  return l;
}
const D0 = /* @__PURE__ */ new WeakMap();
function xv(e, t, n = false) {
  const l = n ? D0 : t.propsCache, a = l.get(e);
  if (a) return a;
  const r = e.props, o = {}, i = [];
  let u = false;
  if (!Qe(e)) {
    const s = (v) => {
      u = true;
      const [h, m] = xv(v, t, true);
      It(o, h), m && i.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  if (!r && !u) return xt(e) && l.set(e, ca), ca;
  if (Ne(r)) for (let s = 0; s < r.length; s++) {
    const v = bn(r[s]);
    fc(v) && (o[v] = mt);
  }
  else if (r) for (const s in r) {
    const v = bn(s);
    if (fc(v)) {
      const h = r[s], m = o[v] = Ne(h) || Qe(h) ? { type: h } : It({}, h), g = m.type;
      let w = false, S = true;
      if (Ne(g)) for (let q = 0; q < g.length; ++q) {
        const p = g[q], y = Qe(p) && p.name;
        if (y === "Boolean") {
          w = true;
          break;
        } else y === "String" && (S = false);
      }
      else w = Qe(g) && g.name === "Boolean";
      m[0] = w, m[1] = S, (w || st(m, "default")) && i.push(v);
    }
  }
  const c = [o, i];
  return xt(e) && l.set(e, c), c;
}
function fc(e) {
  return e[0] !== "$" && !Xa(e);
}
const Cv = (e) => e[0] === "_" || e === "$stable", fs = (e) => Ne(e) ? e.map(Ln) : [Ln(e)], N0 = (e, t, n) => {
  if (t._n) return t;
  const l = Lt((...a) => fs(t(...a)), n);
  return l._c = false, l;
}, kv = (e, t, n) => {
  const l = e._ctx;
  for (const a in e) {
    if (Cv(a)) continue;
    const r = e[a];
    if (Qe(r)) t[a] = N0(a, r, l);
    else if (r != null) {
      const o = fs(r);
      t[a] = () => o;
    }
  }
}, qv = (e, t) => {
  const n = fs(t);
  e.slots.default = () => n;
}, Tv = (e, t, n) => {
  for (const l in t) (n || l !== "_") && (e[l] = t[l]);
}, H0 = (e, t, n) => {
  const l = e.slots = _v();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Tv(l, t, n), n && $f(l, "_", a, true)) : kv(t, l);
  } else t && qv(e, t);
}, j0 = (e, t, n) => {
  const { vnode: l, slots: a } = e;
  let r = true, o = mt;
  if (l.shapeFlag & 32) {
    const i = t._;
    i ? n && i === 1 ? r = false : Tv(a, t, n) : (r = !t.$stable, kv(t, a)), o = t;
  } else t && (qv(e, t), o = { default: 1 });
  if (r) for (const i in a) !Cv(i) && o[i] == null && delete a[i];
};
function U0() {
  typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && (qr().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false);
}
const Bt = rb;
function Q0(e) {
  return K0(e);
}
function K0(e, t) {
  U0();
  const n = qr();
  n.__VUE__ = true;
  const { insert: l, remove: a, patchProp: r, createElement: o, createText: i, createComment: u, setText: c, setElementText: s, parentNode: v, nextSibling: h, setScopeId: m = Fn, insertStaticContent: g } = e, w = (k, $, z, Z = null, ne = null, K = null, de = void 0, me = null, fe = !!$.dynamicChildren) => {
    if (k === $) return;
    k && !fl(k, $) && (Z = R(k), M(k, ne, K, true), k = null), $.patchFlag === -2 && (fe = false, $.dynamicChildren = null);
    const { type: ce, ref: le, shapeFlag: N } = $;
    switch (ce) {
      case Jo:
        S(k, $, z, Z);
        break;
      case Zt:
        q(k, $, z, Z);
        break;
      case Ti:
        k == null && p($, z, Z, de);
        break;
      case rn:
        T(k, $, z, Z, ne, K, de, me, fe);
        break;
      default:
        N & 1 ? _(k, $, z, Z, ne, K, de, me, fe) : N & 6 ? x(k, $, z, Z, ne, K, de, me, fe) : (N & 64 || N & 128) && ce.process(k, $, z, Z, ne, K, de, me, fe, re);
    }
    le != null && ne && bo(le, k && k.ref, K, $ || k, !$);
  }, S = (k, $, z, Z) => {
    if (k == null) l($.el = i($.children), z, Z);
    else {
      const ne = $.el = k.el;
      $.children !== k.children && c(ne, $.children);
    }
  }, q = (k, $, z, Z) => {
    k == null ? l($.el = u($.children || ""), z, Z) : $.el = k.el;
  }, p = (k, $, z, Z) => {
    [k.el, k.anchor] = g(k.children, $, z, Z, k.el, k.anchor);
  }, y = ({ el: k, anchor: $ }, z, Z) => {
    let ne;
    for (; k && k !== $; ) ne = h(k), l(k, z, Z), k = ne;
    l($, z, Z);
  }, b = ({ el: k, anchor: $ }) => {
    let z;
    for (; k && k !== $; ) z = h(k), a(k), k = z;
    a($);
  }, _ = (k, $, z, Z, ne, K, de, me, fe) => {
    $.type === "svg" ? de = "svg" : $.type === "math" && (de = "mathml"), k == null ? E($, z, Z, ne, K, de, me, fe) : L(k, $, ne, K, de, me, fe);
  }, E = (k, $, z, Z, ne, K, de, me) => {
    let fe, ce;
    const { props: le, shapeFlag: N, transition: oe, dirs: _e } = k;
    if (fe = k.el = o(k.type, K, le && le.is, le), N & 8 ? s(fe, k.children) : N & 16 && V(k.children, fe, null, Z, ne, qi(k, K), de, me), _e && Cl(k, null, Z, "created"), A(fe, k, k.scopeId, de, Z), le) {
      for (const qe in le) qe !== "value" && !Xa(qe) && r(fe, qe, null, le[qe], K, Z);
      "value" in le && r(fe, "value", null, le.value, K), (ce = le.onVnodeBeforeMount) && vn(ce, Z, k);
    }
    _e && Cl(k, null, Z, "beforeMount");
    const ke = W0(ne, oe);
    ke && oe.beforeEnter(fe), l(fe, $, z), ((ce = le && le.onVnodeMounted) || ke || _e) && Bt(() => {
      ce && vn(ce, Z, k), ke && oe.enter(fe), _e && Cl(k, null, Z, "mounted");
    }, ne);
  }, A = (k, $, z, Z, ne) => {
    if (z && m(k, z), Z) for (let K = 0; K < Z.length; K++) m(k, Z[K]);
    if (ne) {
      let K = ne.subTree;
      if ($ === K || _o(K.type) && (K.ssContent === $ || K.ssFallback === $)) {
        const de = ne.vnode;
        A(k, de, de.scopeId, de.slotScopeIds, ne.parent);
      }
    }
  }, V = (k, $, z, Z, ne, K, de, me, fe = 0) => {
    for (let ce = fe; ce < k.length; ce++) {
      const le = k[ce] = me ? cl(k[ce]) : Ln(k[ce]);
      w(null, le, $, z, Z, ne, K, de, me);
    }
  }, L = (k, $, z, Z, ne, K, de) => {
    const me = $.el = k.el;
    let { patchFlag: fe, dynamicChildren: ce, dirs: le } = $;
    fe |= k.patchFlag & 16;
    const N = k.props || mt, oe = $.props || mt;
    let _e;
    if (z && kl(z, false), (_e = oe.onVnodeBeforeUpdate) && vn(_e, z, $, k), le && Cl($, k, z, "beforeUpdate"), z && kl(z, true), (N.innerHTML && oe.innerHTML == null || N.textContent && oe.textContent == null) && s(me, ""), ce ? P(k.dynamicChildren, ce, me, z, Z, qi($, ne), K) : de || W(k, $, me, null, z, Z, qi($, ne), K, false), fe > 0) {
      if (fe & 16) F(me, N, oe, z, ne);
      else if (fe & 2 && N.class !== oe.class && r(me, "class", null, oe.class, ne), fe & 4 && r(me, "style", N.style, oe.style, ne), fe & 8) {
        const ke = $.dynamicProps;
        for (let qe = 0; qe < ke.length; qe++) {
          const Me = ke[qe], He = N[Me], Ve = oe[Me];
          (Ve !== He || Me === "value") && r(me, Me, He, Ve, ne, z);
        }
      }
      fe & 1 && k.children !== $.children && s(me, $.children);
    } else !de && ce == null && F(me, N, oe, z, ne);
    ((_e = oe.onVnodeUpdated) || le) && Bt(() => {
      _e && vn(_e, z, $, k), le && Cl($, k, z, "updated");
    }, Z);
  }, P = (k, $, z, Z, ne, K, de) => {
    for (let me = 0; me < $.length; me++) {
      const fe = k[me], ce = $[me], le = fe.el && (fe.type === rn || !fl(fe, ce) || fe.shapeFlag & 70) ? v(fe.el) : z;
      w(fe, ce, le, null, Z, ne, K, de, true);
    }
  }, F = (k, $, z, Z, ne) => {
    if ($ !== z) {
      if ($ !== mt) for (const K in $) !Xa(K) && !(K in z) && r(k, K, $[K], null, ne, Z);
      for (const K in z) {
        if (Xa(K)) continue;
        const de = z[K], me = $[K];
        de !== me && K !== "value" && r(k, K, me, de, ne, Z);
      }
      "value" in z && r(k, "value", $.value, z.value, ne);
    }
  }, T = (k, $, z, Z, ne, K, de, me, fe) => {
    const ce = $.el = k ? k.el : i(""), le = $.anchor = k ? k.anchor : i("");
    let { patchFlag: N, dynamicChildren: oe, slotScopeIds: _e } = $;
    _e && (me = me ? me.concat(_e) : _e), k == null ? (l(ce, z, Z), l(le, z, Z), V($.children || [], z, le, ne, K, de, me, fe)) : N > 0 && N & 64 && oe && k.dynamicChildren ? (P(k.dynamicChildren, oe, z, ne, K, de, me), ($.key != null || ne && $ === ne.subTree) && vs(k, $, true)) : W(k, $, z, le, ne, K, de, me, fe);
  }, x = (k, $, z, Z, ne, K, de, me, fe) => {
    $.slotScopeIds = me, k == null ? $.shapeFlag & 512 ? ne.ctx.activate($, z, Z, de, fe) : C($, z, Z, ne, K, de, fe) : D(k, $, fe);
  }, C = (k, $, z, Z, ne, K, de) => {
    const me = k.component = vb(k, Z, ne);
    if (Ko(k) && (me.ctx.renderer = re), mb(me, false, de), me.asyncDep) {
      if (ne && ne.registerDep(me, H, de), !k.el) {
        const fe = me.subTree = Je(Zt);
        q(null, fe, $, z);
      }
    } else H(me, k, $, z, ne, K, de);
  }, D = (k, $, z) => {
    const Z = $.component = k.component;
    if (lb(k, $, z)) if (Z.asyncDep && !Z.asyncResolved) {
      j(Z, $, z);
      return;
    } else Z.next = $, Z.update();
    else $.el = k.el, Z.vnode = $;
  }, H = (k, $, z, Z, ne, K, de) => {
    const me = () => {
      if (k.isMounted) {
        let { next: N, bu: oe, u: _e, parent: ke, vnode: qe } = k;
        {
          const ge = Mv(k);
          if (ge) {
            N && (N.el = qe.el, j(k, N, de)), ge.asyncDep.then(() => {
              k.isUnmounted || me();
            });
            return;
          }
        }
        let Me = N, He;
        kl(k, false), N ? (N.el = qe.el, j(k, N, de)) : N = qe, oe && Za(oe), (He = N.props && N.props.onVnodeBeforeUpdate) && vn(He, ke, N, qe), kl(k, true);
        const Ve = vc(k), ie = k.subTree;
        k.subTree = Ve, w(ie, Ve, v(ie.el), R(ie), k, ne, K), N.el = Ve.el, Me === null && ab(k, Ve.el), _e && Bt(_e, ne), (He = N.props && N.props.onVnodeUpdated) && Bt(() => vn(He, ke, N, qe), ne);
      } else {
        let N;
        const { el: oe, props: _e } = $, { bm: ke, m: qe, parent: Me, root: He, type: Ve } = k, ie = va($);
        kl(k, false), ke && Za(ke), !ie && (N = _e && _e.onVnodeBeforeMount) && vn(N, Me, $), kl(k, true);
        {
          He.ce && He.ce._injectChildStyle(Ve);
          const ge = k.subTree = vc(k);
          w(null, ge, z, Z, k, ne, K), $.el = ge.el;
        }
        if (qe && Bt(qe, ne), !ie && (N = _e && _e.onVnodeMounted)) {
          const ge = $;
          Bt(() => vn(N, Me, ge), ne);
        }
        ($.shapeFlag & 256 || Me && va(Me.vnode) && Me.vnode.shapeFlag & 256) && k.a && Bt(k.a, ne), k.isMounted = true, $ = z = Z = null;
      }
    };
    k.scope.on();
    const fe = k.effect = new Lf(me);
    k.scope.off();
    const ce = k.update = fe.run.bind(fe), le = k.job = fe.runIfDirty.bind(fe);
    le.i = k, le.id = k.uid, fe.scheduler = () => ss(le), kl(k, true), ce();
  }, j = (k, $, z) => {
    $.component = k;
    const Z = k.vnode.props;
    k.vnode = $, k.next = null, z0(k, $.props, Z, z), j0(k, $.children, z), pl(), nc(k), _l();
  }, W = (k, $, z, Z, ne, K, de, me, fe = false) => {
    const ce = k && k.children, le = k ? k.shapeFlag : 0, N = $.children, { patchFlag: oe, shapeFlag: _e } = $;
    if (oe > 0) {
      if (oe & 128) {
        pe(ce, N, z, Z, ne, K, de, me, fe);
        return;
      } else if (oe & 256) {
        te(ce, N, z, Z, ne, K, de, me, fe);
        return;
      }
    }
    _e & 8 ? (le & 16 && B(ce, ne, K), N !== ce && s(z, N)) : le & 16 ? _e & 16 ? pe(ce, N, z, Z, ne, K, de, me, fe) : B(ce, ne, K, true) : (le & 8 && s(z, ""), _e & 16 && V(N, z, Z, ne, K, de, me, fe));
  }, te = (k, $, z, Z, ne, K, de, me, fe) => {
    k = k || ca, $ = $ || ca;
    const ce = k.length, le = $.length, N = Math.min(ce, le);
    let oe;
    for (oe = 0; oe < N; oe++) {
      const _e = $[oe] = fe ? cl($[oe]) : Ln($[oe]);
      w(k[oe], _e, z, null, ne, K, de, me, fe);
    }
    ce > le ? B(k, ne, K, true, false, N) : V($, z, Z, ne, K, de, me, fe, N);
  }, pe = (k, $, z, Z, ne, K, de, me, fe) => {
    let ce = 0;
    const le = $.length;
    let N = k.length - 1, oe = le - 1;
    for (; ce <= N && ce <= oe; ) {
      const _e = k[ce], ke = $[ce] = fe ? cl($[ce]) : Ln($[ce]);
      if (fl(_e, ke)) w(_e, ke, z, null, ne, K, de, me, fe);
      else break;
      ce++;
    }
    for (; ce <= N && ce <= oe; ) {
      const _e = k[N], ke = $[oe] = fe ? cl($[oe]) : Ln($[oe]);
      if (fl(_e, ke)) w(_e, ke, z, null, ne, K, de, me, fe);
      else break;
      N--, oe--;
    }
    if (ce > N) {
      if (ce <= oe) {
        const _e = oe + 1, ke = _e < le ? $[_e].el : Z;
        for (; ce <= oe; ) w(null, $[ce] = fe ? cl($[ce]) : Ln($[ce]), z, ke, ne, K, de, me, fe), ce++;
      }
    } else if (ce > oe) for (; ce <= N; ) M(k[ce], ne, K, true), ce++;
    else {
      const _e = ce, ke = ce, qe = /* @__PURE__ */ new Map();
      for (ce = ke; ce <= oe; ce++) {
        const Ce = $[ce] = fe ? cl($[ce]) : Ln($[ce]);
        Ce.key != null && qe.set(Ce.key, ce);
      }
      let Me, He = 0;
      const Ve = oe - ke + 1;
      let ie = false, ge = 0;
      const ae = new Array(Ve);
      for (ce = 0; ce < Ve; ce++) ae[ce] = 0;
      for (ce = _e; ce <= N; ce++) {
        const Ce = k[ce];
        if (He >= Ve) {
          M(Ce, ne, K, true);
          continue;
        }
        let Oe;
        if (Ce.key != null) Oe = qe.get(Ce.key);
        else for (Me = ke; Me <= oe; Me++) if (ae[Me - ke] === 0 && fl(Ce, $[Me])) {
          Oe = Me;
          break;
        }
        Oe === void 0 ? M(Ce, ne, K, true) : (ae[Oe - ke] = ce + 1, Oe >= ge ? ge = Oe : ie = true, w(Ce, $[Oe], z, null, ne, K, de, me, fe), He++);
      }
      const ye = ie ? Y0(ae) : ca;
      for (Me = ye.length - 1, ce = Ve - 1; ce >= 0; ce--) {
        const Ce = ke + ce, Oe = $[Ce], $e = Ce + 1 < le ? $[Ce + 1].el : Z;
        ae[ce] === 0 ? w(null, Oe, z, $e, ne, K, de, me, fe) : ie && (Me < 0 || ce !== ye[Me] ? Q(Oe, z, $e, 2) : Me--);
      }
    }
  }, Q = (k, $, z, Z, ne = null) => {
    const { el: K, type: de, transition: me, children: fe, shapeFlag: ce } = k;
    if (ce & 6) {
      Q(k.component.subTree, $, z, Z);
      return;
    }
    if (ce & 128) {
      k.suspense.move($, z, Z);
      return;
    }
    if (ce & 64) {
      de.move(k, $, z, re);
      return;
    }
    if (de === rn) {
      l(K, $, z);
      for (let N = 0; N < fe.length; N++) Q(fe[N], $, z, Z);
      l(k.anchor, $, z);
      return;
    }
    if (de === Ti) {
      y(k, $, z);
      return;
    }
    if (Z !== 2 && ce & 1 && me) if (Z === 0) me.beforeEnter(K), l(K, $, z), Bt(() => me.enter(K), ne);
    else {
      const { leave: N, delayLeave: oe, afterLeave: _e } = me, ke = () => l(K, $, z), qe = () => {
        N(K, () => {
          ke(), _e && _e();
        });
      };
      oe ? oe(K, ke, qe) : qe();
    }
    else l(K, $, z);
  }, M = (k, $, z, Z = false, ne = false) => {
    const { type: K, props: de, ref: me, children: fe, dynamicChildren: ce, shapeFlag: le, patchFlag: N, dirs: oe, cacheIndex: _e } = k;
    if (N === -2 && (ne = false), me != null && bo(me, null, z, k, true), _e != null && ($.renderCache[_e] = void 0), le & 256) {
      $.ctx.deactivate(k);
      return;
    }
    const ke = le & 1 && oe, qe = !va(k);
    let Me;
    if (qe && (Me = de && de.onVnodeBeforeUnmount) && vn(Me, $, k), le & 6) be(k.component, z, Z);
    else {
      if (le & 128) {
        k.suspense.unmount(z, Z);
        return;
      }
      ke && Cl(k, null, $, "beforeUnmount"), le & 64 ? k.type.remove(k, $, z, re, Z) : ce && !ce.hasOnce && (K !== rn || N > 0 && N & 64) ? B(ce, $, z, false, true) : (K === rn && N & 384 || !ne && le & 16) && B(fe, $, z), Z && ee(k);
    }
    (qe && (Me = de && de.onVnodeUnmounted) || ke) && Bt(() => {
      Me && vn(Me, $, k), ke && Cl(k, null, $, "unmounted");
    }, z);
  }, ee = (k) => {
    const { type: $, el: z, anchor: Z, transition: ne } = k;
    if ($ === rn) {
      X(z, Z);
      return;
    }
    if ($ === Ti) {
      b(k);
      return;
    }
    const K = () => {
      a(z), ne && !ne.persisted && ne.afterLeave && ne.afterLeave();
    };
    if (k.shapeFlag & 1 && ne && !ne.persisted) {
      const { leave: de, delayLeave: me } = ne, fe = () => de(z, K);
      me ? me(k.el, K, fe) : fe();
    } else K();
  }, X = (k, $) => {
    let z;
    for (; k !== $; ) z = h(k), a(k), k = z;
    a($);
  }, be = (k, $, z) => {
    const { bum: Z, scope: ne, job: K, subTree: de, um: me, m: fe, a: ce } = k;
    po(fe), po(ce), Z && Za(Z), ne.stop(), K && (K.flags |= 8, M(de, k, $, z)), me && Bt(me, $), Bt(() => {
      k.isUnmounted = true;
    }, $), $ && $.pendingBranch && !$.isUnmounted && k.asyncDep && !k.asyncResolved && k.suspenseId === $.pendingId && ($.deps--, $.deps === 0 && $.resolve());
  }, B = (k, $, z, Z = false, ne = false, K = 0) => {
    for (let de = K; de < k.length; de++) M(k[de], $, z, Z, ne);
  }, R = (k) => {
    if (k.shapeFlag & 6) return R(k.component.subTree);
    if (k.shapeFlag & 128) return k.suspense.next();
    const $ = h(k.anchor || k.el), z = $ && $[nv];
    return z ? h(z) : $;
  };
  let J = false;
  const O = (k, $, z) => {
    k == null ? $._vnode && M($._vnode, null, null, true) : w($._vnode || null, k, $, null, null, null, z), $._vnode = k, J || (J = true, nc(), Jf(), J = false);
  }, re = { p: w, um: M, m: Q, r: ee, mt: C, mc: V, pc: W, pbc: P, n: R, o: e };
  return { render: O, hydrate: void 0, createApp: V0(O) };
}
function qi({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function kl({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function W0(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function vs(e, t, n = false) {
  const l = e.children, a = t.children;
  if (Ne(l) && Ne(a)) for (let r = 0; r < l.length; r++) {
    const o = l[r];
    let i = a[r];
    i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = a[r] = cl(a[r]), i.el = o.el), !n && i.patchFlag !== -2 && vs(o, i)), i.type === Jo && (i.el = o.el);
  }
}
function Y0(e) {
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
function Mv(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Mv(t);
}
function po(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const G0 = Symbol.for("v-scx"), X0 = () => Tt(G0);
function he(e, t, n) {
  return Ev(e, t, n);
}
function Ev(e, t, n = mt) {
  const { immediate: l, deep: a, flush: r, once: o } = n, i = It({}, n), u = t && l || !t && r !== "post";
  let c;
  if (br) {
    if (r === "sync") {
      const m = X0();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!u) {
      const m = () => {
      };
      return m.stop = Fn, m.resume = Fn, m.pause = Fn, m;
    }
  }
  const s = Ht;
  i.call = (m, g, w) => En(m, s, g, w);
  let v = false;
  r === "post" ? i.scheduler = (m) => {
    Bt(m, s && s.suspense);
  } : r !== "sync" && (v = true, i.scheduler = (m, g) => {
    g ? m() : ss(m);
  }), i.augmentJob = (m) => {
    t && (m.flags |= 4), v && (m.flags |= 2, s && (m.id = s.uid, m.i = s));
  };
  const h = m0(e, t, i);
  return br && (c ? c.push(h) : u && h()), h;
}
function Z0(e, t, n) {
  const l = this.proxy, a = $t(e) ? e.includes(".") ? $v(l, e) : () => l[e] : e.bind(l, l);
  let r;
  Qe(t) ? r = t : (r = t.handler, n = t);
  const o = Mr(this), i = Ev(a, r.bind(l), n);
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
const J0 = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${bn(t)}Modifiers`] || e[`${Kl(t)}Modifiers`];
function eb(e, t, ...n) {
  if (e.isUnmounted) return;
  const l = e.vnode.props || mt;
  let a = n;
  const r = t.startsWith("update:"), o = r && J0(l, t.slice(7));
  o && (o.trim && (a = n.map((s) => $t(s) ? s.trim() : s)), o.number && (a = n.map(Lg)));
  let i, u = l[i = yi(t)] || l[i = yi(bn(t))];
  !u && r && (u = l[i = yi(Kl(t))]), u && En(u, e, 6, a);
  const c = l[i + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[i]) return;
    e.emitted[i] = true, En(c, e, 6, a);
  }
}
function Av(e, t, n = false) {
  const l = t.emitsCache, a = l.get(e);
  if (a !== void 0) return a;
  const r = e.emits;
  let o = {}, i = false;
  if (!Qe(e)) {
    const u = (c) => {
      const s = Av(c, t, true);
      s && (i = true, It(o, s));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !i ? (xt(e) && l.set(e, null), null) : (Ne(r) ? r.forEach((u) => o[u] = null) : It(o, r), xt(e) && l.set(e, o), o);
}
function Zo(e, t) {
  return !e || !No(t) ? false : (t = t.slice(2).replace(/Once$/, ""), st(e, t[0].toLowerCase() + t.slice(1)) || st(e, Kl(t)) || st(e, t));
}
function vc(e) {
  const { type: t, vnode: n, proxy: l, withProxy: a, propsOptions: [r], slots: o, attrs: i, emit: u, render: c, renderCache: s, props: v, data: h, setupState: m, ctx: g, inheritAttrs: w } = e, S = go(e);
  let q, p;
  try {
    if (n.shapeFlag & 4) {
      const b = a || l, _ = b;
      q = Ln(c.call(_, b, s, v, m, h, g)), p = i;
    } else {
      const b = t;
      q = Ln(b.length > 1 ? b(v, { attrs: i, slots: o, emit: u }) : b(v, null)), p = t.props ? i : tb(i);
    }
  } catch (b) {
    ar.length = 0, Qo(b, e, 1), q = Je(Zt);
  }
  let y = q;
  if (p && w !== false) {
    const b = Object.keys(p), { shapeFlag: _ } = y;
    b.length && _ & 7 && (r && b.some(Yu) && (p = nb(p, r)), y = Gn(y, p, false, true));
  }
  return n.dirs && (y = Gn(y, null, false, true), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && bl(y, n.transition), q = y, go(S), q;
}
const tb = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || No(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, nb = (e, t) => {
  const n = {};
  for (const l in e) (!Yu(l) || !(l.slice(9) in t)) && (n[l] = e[l]);
  return n;
};
function lb(e, t, n) {
  const { props: l, children: a, component: r } = e, { props: o, children: i, patchFlag: u } = t, c = r.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && u >= 0) {
    if (u & 1024) return true;
    if (u & 16) return l ? mc(l, o, c) : !!o;
    if (u & 8) {
      const s = t.dynamicProps;
      for (let v = 0; v < s.length; v++) {
        const h = s[v];
        if (o[h] !== l[h] && !Zo(c, h)) return true;
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
function ab({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const l = t.subTree;
    if (l.suspense && l.suspense.activeBranch === e && (l.el = e.el), l === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const _o = (e) => e.__isSuspense;
function rb(e, t) {
  t && t.pendingBranch ? Ne(e) ? t.effects.push(...e) : t.effects.push(e) : b0(e);
}
const rn = Symbol.for("v-fgt"), Jo = Symbol.for("v-txt"), Zt = Symbol.for("v-cmt"), Ti = Symbol.for("v-stc"), ar = [];
let un = null;
function Yn(e = false) {
  ar.push(un = e ? null : []);
}
function ob() {
  ar.pop(), un = ar[ar.length - 1] || null;
}
let hr = 1;
function hc(e, t = false) {
  hr += e, e < 0 && un && t && (un.hasOnce = true);
}
function Rv(e) {
  return e.dynamicChildren = hr > 0 ? un || ca : null, ob(), hr > 0 && un && un.push(e), e;
}
function Pv(e, t, n, l, a, r) {
  return Rv(Bl(e, t, n, l, a, r, true));
}
function Pl(e, t, n, l, a) {
  return Rv(Je(e, t, n, l, a, true));
}
function gr(e) {
  return e ? e.__v_isVNode === true : false;
}
function fl(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Lv = ({ key: e }) => e ?? null, lo = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? $t(e) || pt(e) || Qe(e) ? { i: tn, r: e, k: t, f: !!n } : e : null);
function Bl(e, t = null, n = null, l = 0, a = null, r = e === rn ? 0 : 1, o = false, i = false) {
  const u = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && Lv(t), ref: t && lo(t), scopeId: tv, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: r, patchFlag: l, dynamicProps: a, dynamicChildren: null, appContext: null, ctx: tn };
  return i ? (ms(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= $t(n) ? 8 : 16), hr > 0 && !o && un && (u.patchFlag > 0 || r & 6) && u.patchFlag !== 32 && un.push(u), u;
}
const Je = ib;
function ib(e, t = null, n = null, l = 0, a = null, r = false) {
  if ((!e || e === E0) && (e = Zt), gr(e)) {
    const i = Gn(e, t, true);
    return n && ms(i, n), hr > 0 && !r && un && (i.shapeFlag & 6 ? un[un.indexOf(e)] = i : un.push(i)), i.patchFlag = -2, i;
  }
  if (yb(e) && (e = e.__vccOpts), t) {
    t = ub(t);
    let { class: i, style: u } = t;
    i && !$t(i) && (t.class = Ju(i)), xt(u) && (us(u) && !Ne(u) && (u = It({}, u)), t.style = Zu(u));
  }
  const o = $t(e) ? 1 : _o(e) ? 128 : lv(e) ? 64 : xt(e) ? 4 : Qe(e) ? 2 : 0;
  return Bl(e, t, n, l, a, o, r, true);
}
function ub(e) {
  return e ? us(e) || wv(e) ? It({}, e) : e : null;
}
function Gn(e, t, n = false, l = false) {
  const { props: a, ref: r, patchFlag: o, children: i, transition: u } = e, c = t ? sb(a || {}, t) : a, s = { __v_isVNode: true, __v_skip: true, type: e.type, props: c, key: c && Lv(c), ref: t && t.ref ? n && r ? Ne(r) ? r.concat(lo(t)) : [r, lo(t)] : lo(t) : r, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: i, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== rn ? o === -1 ? 16 : o | 16 : o, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: u, component: e.component, suspense: e.suspense, ssContent: e.ssContent && Gn(e.ssContent), ssFallback: e.ssFallback && Gn(e.ssFallback), el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return u && l && bl(s, u.clone(s)), s;
}
function ua(e = " ", t = 0) {
  return Je(Jo, null, e, t);
}
function gc(e = "", t = false) {
  return t ? (Yn(), Pl(Zt, null, e)) : Je(Zt, null, e);
}
function Ln(e) {
  return e == null || typeof e == "boolean" ? Je(Zt) : Ne(e) ? Je(rn, null, e.slice()) : gr(e) ? cl(e) : Je(Jo, null, String(e));
}
function cl(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Gn(e);
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
    !a && !wv(t) ? t._ctx = tn : a === 3 && tn && (tn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else Qe(t) ? (t = { default: t, _ctx: tn }, n = 32) : (t = String(t), l & 64 ? (n = 16, t = [ua(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function sb(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const l = e[n];
    for (const a in l) if (a === "class") t.class !== l.class && (t.class = Ju([t.class, l.class]));
    else if (a === "style") t.style = Zu([t.style, l.style]);
    else if (No(a)) {
      const r = t[a], o = l[a];
      o && r !== o && !(Ne(r) && r.includes(o)) && (t[a] = r ? [].concat(r, o) : o);
    } else a !== "" && (t[a] = l[a]);
  }
  return t;
}
function vn(e, t, n, l = null) {
  En(e, t, 7, [n, l]);
}
const db = yv();
let fb = 0;
function vb(e, t, n) {
  const l = e.type, a = (t ? t.appContext : e.appContext) || db, r = { uid: fb++, vnode: e, type: l, parent: t, appContext: a, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new Ng(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(a.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: xv(l, a), emitsOptions: Av(l, a), emit: null, emitted: null, propsDefaults: mt, inheritAttrs: l.inheritAttrs, ctx: mt, data: mt, props: mt, attrs: mt, slots: mt, refs: mt, setupState: mt, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = eb.bind(null, r), e.ce && e.ce(r), r;
}
let Ht = null;
const Se = () => Ht || tn;
let wo, _u;
{
  const e = qr(), t = (n, l) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(l), (r) => {
      a.length > 1 ? a.forEach((o) => o(r)) : a[0](r);
    };
  };
  wo = t("__VUE_INSTANCE_SETTERS__", (n) => Ht = n), _u = t("__VUE_SSR_SETTERS__", (n) => br = n);
}
const Mr = (e) => {
  const t = Ht;
  return wo(e), e.scope.on(), () => {
    e.scope.off(), wo(t);
  };
}, bc = () => {
  Ht && Ht.scope.off(), wo(null);
};
function Bv(e) {
  return e.vnode.shapeFlag & 4;
}
let br = false;
function mb(e, t = false, n = false) {
  t && _u(t);
  const { props: l, children: a } = e.vnode, r = Bv(e);
  I0(e, l, r, t), H0(e, a, n);
  const o = r ? hb(e, t) : void 0;
  return t && _u(false), o;
}
function hb(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, A0);
  const { setup: l } = n;
  if (l) {
    pl();
    const a = e.setupContext = l.length > 1 ? bb(e) : null, r = Mr(e), o = Tr(l, e, 0, [e.props, a]), i = Tf(o);
    if (_l(), r(), (i || e.sp) && !va(e) && dv(e), i) {
      if (o.then(bc, bc), t) return o.then((u) => {
        yc(e, u);
      }).catch((u) => {
        Qo(u, e, 0);
      });
      e.asyncDep = o;
    } else yc(e, o);
  } else Fv(e);
}
function yc(e, t, n) {
  Qe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : xt(t) && (e.setupState = Gf(t)), Fv(e);
}
function Fv(e, t, n) {
  const l = e.type;
  e.render || (e.render = l.render || Fn);
  {
    const a = Mr(e);
    pl();
    try {
      R0(e);
    } finally {
      _l(), a();
    }
  }
}
const gb = { get(e, t) {
  return Kt(e, "get", ""), e[t];
} };
function bb(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, gb), slots: e.slots, emit: e.emit, expose: t };
}
function ei(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Gf(Uo(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in lr) return lr[n](e);
  }, has(t, n) {
    return n in t || n in lr;
  } })) : e.proxy;
}
function wu(e, t = true) {
  return Qe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function yb(e) {
  return Qe(e) && "__vccOpts" in e;
}
const f = (e, t) => f0(e, t, br);
function d(e, t, n) {
  const l = arguments.length;
  return l === 2 ? xt(t) && !Ne(t) ? gr(t) ? Je(e, null, [t]) : Je(e, t) : Je(e, null, t) : (l > 3 ? n = Array.prototype.slice.call(arguments, 2) : l === 3 && gr(n) && (n = [n]), Je(e, t, n));
}
const pb = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Su;
const pc = typeof window < "u" && window.trustedTypes;
if (pc) try {
  Su = pc.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const Ov = Su ? (e) => Su.createHTML(e) : (e) => e, _b = "http://www.w3.org/2000/svg", wb = "http://www.w3.org/1998/Math/MathML", Qn = typeof document < "u" ? document : null, _c = Qn && Qn.createElement("template"), Sb = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, l) => {
  const a = t === "svg" ? Qn.createElementNS(_b, e) : t === "mathml" ? Qn.createElementNS(wb, e) : n ? Qn.createElement(e, { is: n }) : Qn.createElement(e);
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
    _c.innerHTML = Ov(l === "svg" ? `<svg>${e}</svg>` : l === "mathml" ? `<math>${e}</math>` : e);
    const i = _c.content;
    if (l === "svg" || l === "mathml") {
      const u = i.firstChild;
      for (; u.firstChild; ) i.appendChild(u.firstChild);
      i.removeChild(u);
    }
    t.insertBefore(i, n);
  }
  return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, nl = "transition", Ba = "animation", wa = Symbol("_vtc"), Vv = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, Iv = It({}, iv, Vv), xb = (e) => (e.displayName = "Transition", e.props = Iv, e), Ft = xb((e, { slots: t }) => d(w0, zv(e), t)), ql = (e, t = []) => {
  Ne(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, wc = (e) => e ? Ne(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function zv(e) {
  const t = {};
  for (const T in e) T in Vv || (t[T] = e[T]);
  if (e.css === false) return t;
  const { name: n = "v", type: l, duration: a, enterFromClass: r = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: i = `${n}-enter-to`, appearFromClass: u = r, appearActiveClass: c = o, appearToClass: s = i, leaveFromClass: v = `${n}-leave-from`, leaveActiveClass: h = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, g = Cb(a), w = g && g[0], S = g && g[1], { onBeforeEnter: q, onEnter: p, onEnterCancelled: y, onLeave: b, onLeaveCancelled: _, onBeforeAppear: E = q, onAppear: A = p, onAppearCancelled: V = y } = t, L = (T, x, C, D) => {
    T._enterCancelled = D, ol(T, x ? s : i), ol(T, x ? c : o), C && C();
  }, P = (T, x) => {
    T._isLeaving = false, ol(T, v), ol(T, m), ol(T, h), x && x();
  }, F = (T) => (x, C) => {
    const D = T ? A : p, H = () => L(x, T, C);
    ql(D, [x, H]), Sc(() => {
      ol(x, T ? u : r), Rn(x, T ? s : i), wc(D) || xc(x, l, w, H);
    });
  };
  return It(t, { onBeforeEnter(T) {
    ql(q, [T]), Rn(T, r), Rn(T, o);
  }, onBeforeAppear(T) {
    ql(E, [T]), Rn(T, u), Rn(T, c);
  }, onEnter: F(false), onAppear: F(true), onLeave(T, x) {
    T._isLeaving = true;
    const C = () => P(T, x);
    Rn(T, v), T._enterCancelled ? (Rn(T, h), xu()) : (xu(), Rn(T, h)), Sc(() => {
      T._isLeaving && (ol(T, v), Rn(T, m), wc(b) || xc(T, l, S, C));
    }), ql(b, [T, C]);
  }, onEnterCancelled(T) {
    L(T, false, void 0, true), ql(y, [T]);
  }, onAppearCancelled(T) {
    L(T, true, void 0, true), ql(V, [T]);
  }, onLeaveCancelled(T) {
    P(T), ql(_, [T]);
  } });
}
function Cb(e) {
  if (e == null) return null;
  if (xt(e)) return [Mi(e.enter), Mi(e.leave)];
  {
    const t = Mi(e);
    return [t, t];
  }
}
function Mi(e) {
  return Bg(e);
}
function Rn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[wa] || (e[wa] = /* @__PURE__ */ new Set())).add(t);
}
function ol(e, t) {
  t.split(/\s+/).forEach((l) => l && e.classList.remove(l));
  const n = e[wa];
  n && (n.delete(t), n.size || (e[wa] = void 0));
}
function Sc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let kb = 0;
function xc(e, t, n, l) {
  const a = e._endId = ++kb, r = () => {
    a === e._endId && l();
  };
  if (n != null) return setTimeout(r, n);
  const { type: o, timeout: i, propCount: u } = Dv(e, t);
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
function Dv(e, t) {
  const n = window.getComputedStyle(e), l = (g) => (n[g] || "").split(", "), a = l(`${nl}Delay`), r = l(`${nl}Duration`), o = Cc(a, r), i = l(`${Ba}Delay`), u = l(`${Ba}Duration`), c = Cc(i, u);
  let s = null, v = 0, h = 0;
  t === nl ? o > 0 && (s = nl, v = o, h = r.length) : t === Ba ? c > 0 && (s = Ba, v = c, h = u.length) : (v = Math.max(o, c), s = v > 0 ? o > c ? nl : Ba : null, h = s ? s === nl ? r.length : u.length : 0);
  const m = s === nl && /\b(transform|all)(,|$)/.test(l(`${nl}Property`).toString());
  return { type: s, timeout: v, propCount: h, hasTransform: m };
}
function Cc(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, l) => kc(n) + kc(e[l])));
}
function kc(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function xu() {
  return document.body.offsetHeight;
}
function qb(e, t, n) {
  const l = e[wa];
  l && (t = (t ? [t, ...l] : [...l]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const So = Symbol("_vod"), Nv = Symbol("_vsh"), Hv = { beforeMount(e, { value: t }, { transition: n }) {
  e[So] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Fa(e, t);
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
  e.style.display = t ? e[So] : "none", e[Nv] = !t;
}
const Tb = Symbol(""), Mb = /(^|;)\s*display\s*:/;
function Eb(e, t, n) {
  const l = e.style, a = $t(n);
  let r = false;
  if (n && !a) {
    if (t) if ($t(t)) for (const o of t.split(";")) {
      const i = o.slice(0, o.indexOf(":")).trim();
      n[i] == null && ao(l, i, "");
    }
    else for (const o in t) n[o] == null && ao(l, o, "");
    for (const o in n) o === "display" && (r = true), ao(l, o, n[o]);
  } else if (a) {
    if (t !== n) {
      const o = l[Tb];
      o && (n += ";" + o), l.cssText = n, r = Mb.test(n);
    }
  } else t && e.removeAttribute("style");
  So in e && (e[So] = r ? l.display : "", e[Nv] && (l.display = "none"));
}
const qc = /\s*!important$/;
function ao(e, t, n) {
  if (Ne(n)) n.forEach((l) => ao(e, t, l));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const l = $b(e, t);
    qc.test(n) ? e.setProperty(Kl(l), n.replace(qc, ""), "important") : e[l] = n;
  }
}
const Tc = ["Webkit", "Moz", "ms"], Ei = {};
function $b(e, t) {
  const n = Ei[t];
  if (n) return n;
  let l = bn(t);
  if (l !== "filter" && l in e) return Ei[t] = l;
  l = jo(l);
  for (let a = 0; a < Tc.length; a++) {
    const r = Tc[a] + l;
    if (r in e) return Ei[t] = r;
  }
  return t;
}
const Mc = "http://www.w3.org/1999/xlink";
function Ec(e, t, n, l, a, r = Dg(t)) {
  l && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Mc, t.slice(6, t.length)) : e.setAttributeNS(Mc, t, n) : n == null || r && !Af(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : yl(n) ? String(n) : n);
}
function $c(e, t, n, l, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ov(n) : n);
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
    i === "boolean" ? n = Af(n) : n == null && i === "string" ? (n = "", o = true) : i === "number" && (n = 0, o = true);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(a || t);
}
function Ab(e, t, n, l) {
  e.addEventListener(t, n, l);
}
function Rb(e, t, n, l) {
  e.removeEventListener(t, n, l);
}
const Ac = Symbol("_vei");
function Pb(e, t, n, l, a = null) {
  const r = e[Ac] || (e[Ac] = {}), o = r[t];
  if (l && o) o.value = l;
  else {
    const [i, u] = Lb(t);
    if (l) {
      const c = r[t] = Ob(l, a);
      Ab(e, i, c, u);
    } else o && (Rb(e, i, o, u), r[t] = void 0);
  }
}
const Rc = /(?:Once|Passive|Capture)$/;
function Lb(e) {
  let t;
  if (Rc.test(e)) {
    t = {};
    let l;
    for (; l = e.match(Rc); ) e = e.slice(0, e.length - l[0].length), t[l[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : Kl(e.slice(2)), t];
}
let $i = 0;
const Bb = Promise.resolve(), Fb = () => $i || (Bb.then(() => $i = 0), $i = Date.now());
function Ob(e, t) {
  const n = (l) => {
    if (!l._vts) l._vts = Date.now();
    else if (l._vts <= n.attached) return;
    En(Vb(l, n.value), t, 5, [l]);
  };
  return n.value = e, n.attached = Fb(), n;
}
function Vb(e, t) {
  if (Ne(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((l) => (a) => !a._stopped && l && l(a));
  } else return t;
}
const Pc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ib = (e, t, n, l, a, r) => {
  const o = a === "svg";
  t === "class" ? qb(e, l, o) : t === "style" ? Eb(e, n, l) : No(t) ? Yu(t) || Pb(e, t, n, l, r) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : zb(e, t, l, o)) ? ($c(e, t, l), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ec(e, t, l, o, r, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !$t(l)) ? $c(e, bn(t), l, r, t) : (t === "true-value" ? e._trueValue = l : t === "false-value" && (e._falseValue = l), Ec(e, t, l, o));
};
function zb(e, t, n, l) {
  if (l) return !!(t === "innerHTML" || t === "textContent" || t in e && Pc(t) && Qe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE") return false;
  }
  return Pc(t) && $t(n) ? false : t in e;
}
const jv = /* @__PURE__ */ new WeakMap(), Uv = /* @__PURE__ */ new WeakMap(), xo = Symbol("_moveCb"), Lc = Symbol("_enterCb"), Db = (e) => (delete e.props.mode, e), Nb = Db({ name: "TransitionGroup", props: It({}, Iv, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = Se(), l = ov();
  let a, r;
  return Go(() => {
    if (!a.length) return;
    const o = e.moveClass || `${e.name || "v"}-move`;
    if (!Kb(a[0].el, n.vnode.el, o)) return;
    a.forEach(jb), a.forEach(Ub);
    const i = a.filter(Qb);
    xu(), i.forEach((u) => {
      const c = u.el, s = c.style;
      Rn(c, o), s.transform = s.webkitTransform = s.transitionDuration = "";
      const v = c[xo] = (h) => {
        h && h.target !== c || (!h || /transform$/.test(h.propertyName)) && (c.removeEventListener("transitionend", v), c[xo] = null, ol(c, o));
      };
      c.addEventListener("transitionend", v);
    });
  }), () => {
    const o = Ye(e), i = zv(o);
    let u = o.tag || rn;
    if (a = [], r) for (let c = 0; c < r.length; c++) {
      const s = r[c];
      s.el && s.el instanceof Element && (a.push(s), bl(s, mr(s, i, l, n)), jv.set(s, s.el.getBoundingClientRect()));
    }
    r = t.default ? cs(t.default()) : [];
    for (let c = 0; c < r.length; c++) {
      const s = r[c];
      s.key != null && bl(s, mr(s, i, l, n));
    }
    return Je(u, null, r);
  };
} }), Hb = Nb;
function jb(e) {
  const t = e.el;
  t[xo] && t[xo](), t[Lc] && t[Lc]();
}
function Ub(e) {
  Uv.set(e, e.el.getBoundingClientRect());
}
function Qb(e) {
  const t = jv.get(e), n = Uv.get(e), l = t.left - n.left, a = t.top - n.top;
  if (l || a) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${l}px,${a}px)`, r.transitionDuration = "0s", e;
  }
}
function Kb(e, t, n) {
  const l = e.cloneNode(), a = e[wa];
  a && a.forEach((i) => {
    i.split(/\s+/).forEach((u) => u && l.classList.remove(u));
  }), n.split(/\s+/).forEach((i) => i && l.classList.add(i)), l.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(l);
  const { hasTransform: o } = Dv(l);
  return r.removeChild(l), o;
}
const Wb = It({ patchProp: Ib }, Sb);
let Bc;
function Yb() {
  return Bc || (Bc = Q0(Wb));
}
const Qv = (...e) => {
  const t = Yb().createApp(...e), { mount: n } = t;
  return t.mount = (l) => {
    const a = Xb(l);
    if (!a) return;
    const r = t._component;
    !Qe(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const o = n(a, false, Gb(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), o;
  }, t;
};
function Gb(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Xb(e) {
  return $t(e) ? document.querySelector(e) : e;
}
/*!
* Quasar Framework v2.18.1
* (c) 2015-present Razvan Stoenescu
* Released under the MIT License.
*/
var Ai = null;
function hs() {
  return Ai !== null ? Ai : Ai = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
typeof __QUASAR_SSR__ != "boolean" && (hs().__QUASAR_SSR__ = false);
typeof __QUASAR_SSR_CLIENT__ != "boolean" && (hs().__QUASAR_SSR_CLIENT__ = false);
typeof __QUASAR_SSR_PWA__ != "boolean" && (hs().__QUASAR_SSR_PWA__ = false);
function Ot(e, t, n, l) {
  return Object.defineProperty(e, t, { get: n, set: l, enumerable: true }), e;
}
function Kv(e, t) {
  for (const n in t) Ot(e, n, t[n]);
  return e;
}
var nn = U(__QUASAR_SSR_CLIENT__ && (__QUASAR_SSR_PWA__ ? document.body.getAttribute("data-server-rendered") !== null : true)), Cu;
function Zb(e, t) {
  const n = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
  return { browser: n[5] || n[3] || n[1] || "", version: n[4] || n[2] || "0", platform: t[0] || "" };
}
function Jb(e) {
  return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
}
var Wv = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function ey(e) {
  const t = e.toLowerCase(), n = Jb(t), l = Zb(t, n), a = { mobile: false, desktop: false, cordova: false, capacitor: false, nativeMobile: false, electron: false, bex: false, linux: false, mac: false, win: false, cros: false, chrome: false, firefox: false, opera: false, safari: false, vivaldi: false, edge: false, edgeChromium: false, ie: false, webkit: false, android: false, ios: false, ipad: false, iphone: false, ipod: false, kindle: false, winphone: false, blackberry: false, playbook: false, silk: false };
  l.browser && (a[l.browser] = true, a.version = l.version, a.versionNumber = parseInt(l.version, 10)), l.platform && (a[l.platform] = true);
  const r = a.android || a.ios || a.bb || a.blackberry || a.ipad || a.iphone || a.ipod || a.kindle || a.playbook || a.silk || a["windows phone"];
  if (r === true || t.indexOf("mobile") !== -1 ? a.mobile = true : a.desktop = true, a["windows phone"] && (a.winphone = true, delete a["windows phone"]), a.edga || a.edgios || a.edg ? (a.edge = true, l.browser = "edge") : a.crios ? (a.chrome = true, l.browser = "chrome") : a.fxios && (a.firefox = true, l.browser = "firefox"), (a.ipod || a.ipad || a.iphone) && (a.ios = true), a.vivaldi && (l.browser = "vivaldi", a.vivaldi = true), (a.chrome || a.opr || a.safari || a.vivaldi || a.mobile === true && a.ios !== true && r !== true) && (a.webkit = true), a.opr && (l.browser = "opera", a.opera = true), a.safari && (a.blackberry || a.bb ? (l.browser = "blackberry", a.blackberry = true) : a.playbook ? (l.browser = "playbook", a.playbook = true) : a.android ? (l.browser = "android", a.android = true) : a.kindle ? (l.browser = "kindle", a.kindle = true) : a.silk && (l.browser = "silk", a.silk = true)), a.name = l.browser, a.platform = l.platform, t.indexOf("electron") !== -1) a.electron = true;
  else if (document.location.href.indexOf("-extension://") !== -1) a.bex = true;
  else {
    if (window.Capacitor !== void 0 ? (a.capacitor = true, a.nativeMobile = true, a.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (a.cordova = true, a.nativeMobile = true, a.nativeMobileWrapper = "cordova"), nn.value === true && (Cu = { is: { ...a } }), Wv === true && a.mac === true && (a.desktop === true && a.safari === true || a.nativeMobile === true && a.android !== true && a.ios !== true && a.ipad !== true)) {
      delete a.mac, delete a.desktop;
      const o = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
      Object.assign(a, { mobile: true, ios: true, platform: o, [o]: true });
    }
    a.mobile !== true && window.navigator.userAgentData && window.navigator.userAgentData.mobile && (delete a.desktop, a.mobile = true);
  }
  return a;
}
var Fc = navigator.userAgent || navigator.vendor || window.opera, ty = { has: { touch: false, webStorage: false }, within: { iframe: false } }, ze = { userAgent: Fc, is: ey(Fc), has: { touch: Wv }, within: { iframe: window.self !== window.top } }, ku = { install(e) {
  const { $q: t } = e;
  nn.value === true ? (e.onSSRHydrated.push(() => {
    Object.assign(t.platform, ze), nn.value = false;
  }), t.platform = Bn(this)) : t.platform = this;
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
  }), Object.assign(ku, ze), nn.value === true && (Object.assign(ku, Cu, ty), Cu = null);
}
var Yv = ku;
function ve(e) {
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
function ny(e) {
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
var Ri = ["sm", "md", "lg", "xl"], { passive: Oc } = dt, ly = Sl({ width: 0, height: 0, name: "xs", sizes: { sm: 600, md: 1024, lg: 1440, xl: 1920 }, lt: { sm: true, md: true, lg: true, xl: true }, gt: { xs: false, sm: false, md: false, lg: false }, xs: true, sm: false, md: false, lg: false, xl: false }, { setSizes: St, setDebounce: St, install({ $q: e, onSSRHydrated: t }) {
  var _a2;
  if (e.screen = this, this.__installed === true) {
    e.config.screen !== void 0 && (e.config.screen.bodyClasses === false ? document.body.classList.remove(`screen--${this.name}`) : this.__update(true));
    return;
  }
  const { visualViewport: n } = window, l = n || window, a = document.scrollingElement || document.documentElement, r = n === void 0 || ze.is.mobile === true ? () => [Math.max(window.innerWidth, a.clientWidth), Math.max(window.innerHeight, a.clientHeight)] : () => [n.width * n.scale + window.innerWidth - a.clientWidth, n.height * n.scale + window.innerHeight - a.clientHeight], o = ((_a2 = e.config.screen) == null ? void 0 : _a2.bodyClasses) === true;
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
      i !== void 0 && l.removeEventListener("resize", i, Oc), i = h > 0 ? Ea(this.__update, h) : this.__update, l.addEventListener("resize", i, Oc);
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
} }), Gv = Ut;
function ay(e, t, n = document.body) {
  if (typeof e != "string") throw new TypeError("Expected a string as propName");
  if (typeof t != "string") throw new TypeError("Expected a string as value");
  if (!(n instanceof Element)) throw new TypeError("Expected a DOM element");
  n.style.setProperty(`--q-${e}`, t);
}
var Xv = false;
function ry(e) {
  Xv = e.isComposing === true;
}
function Wl(e) {
  return Xv === true || e !== Object(e) || e.isComposing === true || e.qKeyEvent === true;
}
function yn(e, t) {
  return Wl(e) === true ? false : [].concat(t).includes(e.keyCode);
}
function Zv(e) {
  if (e.ios === true) return "ios";
  if (e.android === true) return "android";
}
function oy({ is: e, has: t, within: n }, l) {
  const a = [e.desktop === true ? "desktop" : "mobile", `${t.touch === false ? "no-" : ""}touch`];
  if (e.mobile === true) {
    const r = Zv(e);
    r !== void 0 && a.push("platform-" + r);
  }
  if (e.nativeMobile === true) {
    const r = e.nativeMobileWrapper;
    a.push(r), a.push("native-mobile"), e.ios === true && (l[r] === void 0 || l[r].iosStatusBarPadding !== false) && a.push("q-ios-padding");
  } else e.electron === true ? a.push("electron") : e.bex === true && a.push("bex");
  return n.iframe === true && a.push("within-iframe"), a;
}
function iy() {
  const { is: e } = ze, t = document.body.className, n = new Set(t.replace(/ {2}/g, " ").split(" "));
  if (e.nativeMobile !== true && e.electron !== true && e.bex !== true) {
    if (e.desktop === true) n.delete("mobile"), n.delete("platform-ios"), n.delete("platform-android"), n.add("desktop");
    else if (e.mobile === true) {
      n.delete("desktop"), n.add("mobile"), n.delete("platform-ios"), n.delete("platform-android");
      const a = Zv(e);
      a !== void 0 && n.add(`platform-${a}`);
    }
  }
  ze.has.touch === true && (n.delete("no-touch"), n.add("touch")), ze.within.iframe === true && n.add("within-iframe");
  const l = Array.from(n).join(" ");
  t !== l && (document.body.className = l);
}
function uy(e) {
  for (const t in e) ay(t, e[t]);
}
var sy = { install(e) {
  if (this.__installed !== true) {
    if (nn.value === true) iy();
    else {
      const { $q: t } = e;
      t.config.brand !== void 0 && uy(t.config.brand);
      const n = oy(ze, t.config);
      document.body.classList.add.apply(document.body.classList, n);
    }
    ze.is.ios === true && document.body.addEventListener("touchstart", St), window.addEventListener("keydown", ry, true);
  }
} }, Jv = () => true;
function cy(e) {
  return typeof e == "string" && e !== "" && e !== "/" && e !== "#/";
}
function dy(e) {
  return e.startsWith("#") === true && (e = e.substring(1)), e.startsWith("/") === false && (e = "/" + e), e.endsWith("/") === true && (e = e.substring(0, e.length - 1)), "#" + e;
}
function fy(e) {
  if (e.backButtonExit === false) return () => false;
  if (e.backButtonExit === "*") return Jv;
  const t = ["#/"];
  return Array.isArray(e.backButtonExit) === true && t.push(...e.backButtonExit.filter(cy).map(dy)), () => t.includes(window.location.hash);
}
var yr = { __history: [], add: St, remove: St, install({ $q: e }) {
  if (this.__installed === true) return;
  const { cordova: t, capacitor: n } = ze.is;
  if (t !== true && n !== true) return;
  const l = e.config[t === true ? "cordova" : "capacitor"];
  if ((l == null ? void 0 : l.backButton) === false || n === true && (window.Capacitor === void 0 || window.Capacitor.Plugins.App === void 0)) return;
  this.add = (o) => {
    o.condition === void 0 && (o.condition = Jv), this.__history.push(o);
  }, this.remove = (o) => {
    const i = this.__history.indexOf(o);
    i >= 0 && this.__history.splice(i, 1);
  };
  const a = fy(Object.assign({ backButtonExit: true }, l)), r = () => {
    if (this.__history.length) {
      const o = this.__history[this.__history.length - 1];
      o.condition() === true && (this.__history.pop(), o.handler());
    } else a() === true ? navigator.app.exitApp() : window.history.back();
  };
  t === true ? document.addEventListener("deviceready", () => {
    document.addEventListener("backbutton", r, false);
  }) : window.Capacitor.Plugins.App.addListener("backButton", r);
} }, qu = { isoName: "en-US", nativeName: "English (US)", label: { clear: "Clear", ok: "OK", cancel: "Cancel", close: "Close", set: "Set", select: "Select", reset: "Reset", remove: "Remove", update: "Update", create: "Create", search: "Search", filter: "Filter", refresh: "Refresh", expand: (e) => e ? `Expand "${e}"` : "Expand", collapse: (e) => e ? `Collapse "${e}"` : "Collapse" }, date: { days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), firstDayOfWeek: 0, format24h: false, pluralDay: "days", prevMonth: "Previous month", nextMonth: "Next month", prevYear: "Previous year", nextYear: "Next year", today: "Today", prevRangeYears: (e) => `Previous ${e} years`, nextRangeYears: (e) => `Next ${e} years` }, table: { noData: "No data available", noResults: "No matching records found", loading: "Loading...", selectedRecords: (e) => e === 1 ? "1 record selected." : (e === 0 ? "No" : e) + " records selected.", recordsPerPage: "Records per page:", allRows: "All", pagination: (e, t, n) => e + "-" + t + " of " + n, columns: "Columns" }, pagination: { first: "First page", prev: "Previous page", next: "Next page", last: "Last page" }, editor: { url: "URL", bold: "Bold", italic: "Italic", strikethrough: "Strikethrough", underline: "Underline", unorderedList: "Unordered List", orderedList: "Ordered List", subscript: "Subscript", superscript: "Superscript", hyperlink: "Hyperlink", toggleFullscreen: "Toggle Fullscreen", quote: "Quote", left: "Left align", center: "Center align", right: "Right align", justify: "Justify align", print: "Print", outdent: "Decrease indentation", indent: "Increase indentation", removeFormat: "Remove formatting", formatting: "Formatting", fontSize: "Font Size", align: "Align", hr: "Insert Horizontal Rule", undo: "Undo", redo: "Redo", heading1: "Heading 1", heading2: "Heading 2", heading3: "Heading 3", heading4: "Heading 4", heading5: "Heading 5", heading6: "Heading 6", paragraph: "Paragraph", code: "Code", size1: "Very small", size2: "A bit small", size3: "Normal", size4: "Medium-large", size5: "Big", size6: "Very big", size7: "Maximum", defaultFont: "Default Font", viewSource: "View Source" }, tree: { noNodes: "No nodes available", noResults: "No matching nodes found" } };
function Vc() {
  const e = Array.isArray(navigator.languages) === true && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
  if (typeof e == "string") return e.split(/[-_]/).map((t, n) => n === 0 ? t.toLowerCase() : n > 1 || t.length < 4 ? t.toUpperCase() : t[0].toUpperCase() + t.slice(1).toLowerCase()).join("-");
}
var Rl = Sl({ __qLang: {} }, { getLocale: Vc, set(e = qu, t) {
  const n = { ...e, rtl: e.rtl === true, getLocale: Vc };
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
} }), ni = Rl, vy = { name: "material-icons", type: { positive: "check_circle", negative: "warning", info: "info", warning: "priority_high" }, arrow: { up: "arrow_upward", right: "arrow_forward", down: "arrow_downward", left: "arrow_back", dropdown: "arrow_drop_down" }, chevron: { left: "chevron_left", right: "chevron_right" }, colorPicker: { spectrum: "gradient", tune: "tune", palette: "style" }, pullToRefresh: { icon: "refresh" }, carousel: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down", navigationIcon: "lens" }, chip: { remove: "cancel", selected: "check" }, datetime: { arrowLeft: "chevron_left", arrowRight: "chevron_right", now: "access_time", today: "today" }, editor: { bold: "format_bold", italic: "format_italic", strikethrough: "strikethrough_s", underline: "format_underlined", unorderedList: "format_list_bulleted", orderedList: "format_list_numbered", subscript: "vertical_align_bottom", superscript: "vertical_align_top", hyperlink: "link", toggleFullscreen: "fullscreen", quote: "format_quote", left: "format_align_left", center: "format_align_center", right: "format_align_right", justify: "format_align_justify", print: "print", outdent: "format_indent_decrease", indent: "format_indent_increase", removeFormat: "format_clear", formatting: "text_format", fontSize: "format_size", align: "format_align_left", hr: "remove", undo: "undo", redo: "redo", heading: "format_size", code: "code", size: "format_size", font: "font_download", viewSource: "code" }, expansionItem: { icon: "keyboard_arrow_down", denseIcon: "arrow_drop_down" }, fab: { icon: "add", activeIcon: "close" }, field: { clear: "cancel", error: "error" }, pagination: { first: "first_page", prev: "keyboard_arrow_left", next: "keyboard_arrow_right", last: "last_page" }, rating: { icon: "grade" }, stepper: { done: "check", active: "edit", error: "warning" }, tabs: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down" }, table: { arrowUp: "arrow_upward", warning: "warning", firstPage: "first_page", prevPage: "chevron_left", nextPage: "chevron_right", lastPage: "last_page" }, tree: { icon: "play_arrow" }, uploader: { done: "done", clear: "clear", add: "add_box", upload: "cloud_upload", removeQueue: "clear_all", removeUploaded: "done_all" } }, Tu = Sl({ iconMapFn: null, __qIconSet: {} }, { set(e, t) {
  const n = { ...e };
  n.set = Tu.set, Object.assign(Tu.__qIconSet, n);
}, install({ $q: e, iconSet: t, ssrContext: n }) {
  e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn), e.iconSet = this.__qIconSet, Ot(e, "iconMapFn", () => this.iconMapFn, (l) => {
    this.iconMapFn = l;
  }), this.__installed === true ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qIconSet, { get() {
    return Reflect.get(...arguments);
  }, ownKeys(l) {
    return Reflect.ownKeys(l).filter((a) => a !== "set");
  } }), this.set(t || vy));
} }), em = Tu, tm = "_q_", nm = "_q_t_", lm = "_q_s_", Yl = "_q_l_", am = "_q_pc_", rm = "_q_f_", om = "_q_fo_", im = "_q_tabs_", um = "_q_u_";
function ot() {
}
var Co = {}, sm = false;
function my() {
  sm = true;
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
function Rt(e) {
  return e !== null && typeof e == "object" && Array.isArray(e) !== true;
}
function Mu(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function hy(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function pr(e) {
  return typeof e == "number" && isFinite(e);
}
var Ic = [Yv, sy, Gv, ly, yr, ni, em];
function li(e, t) {
  const n = Qv(e);
  n.config.globalProperties = t.config.globalProperties;
  const { reload: l, ...a } = t._context;
  return Object.assign(n._context, a), n;
}
function zc(e, t) {
  t.forEach((n) => {
    n.install(e), n.__installed = true;
  });
}
function gy(e, t, n) {
  e.config.globalProperties.$q = n.$q, e.provide(tm, n.$q), zc(n, Ic), t.components !== void 0 && Object.values(t.components).forEach((l) => {
    Rt(l) === true && l.name !== void 0 && e.component(l.name, l);
  }), t.directives !== void 0 && Object.values(t.directives).forEach((l) => {
    Rt(l) === true && l.name !== void 0 && e.directive(l.name, l);
  }), t.plugins !== void 0 && zc(n, Object.values(t.plugins).filter((l) => typeof l.install == "function" && Ic.includes(l) === false)), nn.value === true && (n.$q.onSSRHydrated = () => {
    n.onSSRHydrated.forEach((l) => {
      l();
    }), n.$q.onSSRHydrated = () => {
    };
  });
}
var by = function(e, t = {}) {
  const n = { version: "2.18.1" };
  sm === false ? (t.config !== void 0 && Object.assign(Co, t.config), n.config = { ...Co }, my()) : n.config = t.config || {}, gy(e, t, { parentApp: e, $q: n, lang: t.lang, iconSet: t.iconSet, onSSRHydrated: [] });
}, Dc = ["B", "KB", "MB", "GB", "TB", "PB"];
function Eu(e, t = 1) {
  let n = 0;
  for (; parseInt(e, 10) >= 1024 && n < Dc.length - 1; ) e /= 1024, ++n;
  return `${e.toFixed(t)}${Dc[n]}`;
}
function ct(e, t, n) {
  return n <= t ? t : Math.min(n, Math.max(t, e));
}
function ko(e, t, n) {
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
var gs = XMLHttpRequest, cm = gs.prototype.open, yy = ["top", "right", "bottom", "left"], qo = [], rr = 0;
function py({ p: e, pos: t, active: n, horiz: l, reverse: a, dir: r }) {
  let o = 1, i = 1;
  return l === true ? (a === true && (o = -1), t === "bottom" && (i = -1), { transform: `translate3d(${o * (e - 100)}%,${n ? 0 : i * -200}%,0)` }) : (a === true && (i = -1), t === "right" && (o = -1), { transform: `translate3d(${n ? 0 : r * o * -200}%,${i * (e - 100)}%,0)` });
}
function _y(e, t) {
  return typeof t != "number" && (e < 25 ? t = Math.random() * 3 + 3 : e < 65 ? t = Math.random() * 3 : e < 85 ? t = Math.random() * 2 : e < 99 ? t = 0.6 : t = 0), ct(e + t, 0, 100);
}
function wy(e) {
  rr++, qo.push(e), !(rr > 1) && (gs.prototype.open = function(t, n) {
    const l = [], a = () => {
      qo.forEach((o) => {
        (o.hijackFilter.value === null || o.hijackFilter.value(n) === true) && (o.start(), l.push(o.stop));
      });
    }, r = () => {
      l.forEach((o) => {
        o();
      });
    };
    this.addEventListener("loadstart", a, { once: true }), this.addEventListener("loadend", r, { once: true }), cm.apply(this, arguments);
  });
}
function Sy(e) {
  qo = qo.filter((t) => t.start !== e), rr = Math.max(0, rr - 1), rr === 0 && (gs.prototype.open = cm);
}
var xy = ve({ name: "QAjaxBar", props: { position: { type: String, default: "top", validator: (e) => yy.includes(e) }, size: { type: String, default: "2px" }, color: String, skipHijack: Boolean, reverse: Boolean, hijackFilter: Function }, emits: ["start", "stop"], setup(e, { emit: t }) {
  const { proxy: n } = Se(), l = U(0), a = U(false), r = U(true);
  let o = 0, i = null, u;
  const c = f(() => `q-loading-bar q-loading-bar--${e.position}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (r.value === true ? "" : " no-transition")), s = f(() => e.position === "top" || e.position === "bottom"), v = f(() => s.value === true ? "height" : "width"), h = f(() => {
    const y = a.value, b = py({ p: l.value, pos: e.position, active: y, horiz: s.value, reverse: n.$q.lang.rtl === true && ["top", "bottom"].includes(e.position) ? e.reverse === false : e.reverse, dir: n.$q.lang.rtl === true ? -1 : 1 });
    return b[v.value] = e.size, b.opacity = y ? 1 : 0, b;
  }), m = f(() => a.value === true ? { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": l.value } : { "aria-hidden": "true" });
  function g(y = 300) {
    const b = u;
    return u = Math.max(0, y) || 0, o++, o > 1 ? (b === 0 && y > 0 ? q() : i !== null && b > 0 && y <= 0 && (clearTimeout(i), i = null), o) : (i !== null && clearTimeout(i), t("start"), l.value = 0, i = setTimeout(() => {
      i = null, r.value = true, y > 0 && q();
    }, a._value === true ? 500 : 1), a._value !== true && (a.value = true, r.value = false), o);
  }
  function w(y) {
    return o > 0 && (l.value = _y(l.value, y)), o;
  }
  function S() {
    if (o = Math.max(0, o - 1), o > 0) return o;
    i !== null && (clearTimeout(i), i = null), t("stop");
    const y = () => {
      r.value = true, l.value = 100, i = setTimeout(() => {
        i = null, a.value = false;
      }, 1e3);
    };
    return l.value === 0 ? i = setTimeout(y, 1) : y(), o;
  }
  function q() {
    l.value < 100 && (i = setTimeout(() => {
      i = null, w(), q();
    }, u));
  }
  let p;
  return ft(() => {
    e.skipHijack !== true && (p = true, wy({ start: g, stop: S, hijackFilter: f(() => e.hijackFilter || null) }));
  }), Ke(() => {
    i !== null && clearTimeout(i), p === true && Sy(g);
  }), Object.assign(n, { start: g, stop: S, increment: w }), () => d("div", { class: c.value, style: h.value, ...m.value });
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
function bs(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function pn(e, t, n, l, a, r) {
  t.key = l + a;
  const o = d(e, t, n);
  return a === true ? sn(o, r()) : o;
}
var Nc = "0 0 24 24", Pi = (e) => e, Li = (e) => `ionicons ${e}`, dm = { "mdi-": (e) => `mdi ${e}`, "icon-": Pi, "bt-": (e) => `bt ${e}`, "eva-": (e) => `eva ${e}`, "ion-md": Li, "ion-ios": Li, "ion-logo": Li, "iconfont ": Pi, "ti-": (e) => `themify-icon ${e}`, "bi-": (e) => `bootstrap-icons ${e}`, "i-": Pi }, fm = { o_: "-outlined", r_: "-round", s_: "-sharp" }, vm = { sym_o_: "-outlined", sym_r_: "-rounded", sym_s_: "-sharp" }, Cy = new RegExp("^(" + Object.keys(dm).join("|") + ")"), ky = new RegExp("^(" + Object.keys(fm).join("|") + ")"), Hc = new RegExp("^(" + Object.keys(vm).join("|") + ")"), qy = /^[Mm]\s?[-+]?\.?\d/, Ty = /^img:/, My = /^svguse:/, Ey = /^ion-/, $y = /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, et = ve({ name: "QIcon", props: { ...Jn, tag: { type: String, default: "i" }, name: String, color: String, left: Boolean, right: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = el(e), a = f(() => "q-icon" + (e.left === true ? " on-left" : "") + (e.right === true ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), r = f(() => {
    let o, i = e.name;
    if (i === "none" || !i) return { none: true };
    if (n.iconMapFn !== null) {
      const s = n.iconMapFn(i);
      if (s !== void 0) if (s.icon !== void 0) {
        if (i = s.icon, i === "none" || !i) return { none: true };
      } else return { cls: s.cls, content: s.content !== void 0 ? s.content : " " };
    }
    if (qy.test(i) === true) {
      const [s, v = Nc] = i.split("|");
      return { svg: true, viewBox: v, nodes: s.split("&&").map((h) => {
        const [m, g, w] = h.split("@@");
        return d("path", { style: g, d: m, transform: w });
      }) };
    }
    if (Ty.test(i) === true) return { img: true, src: i.substring(4) };
    if (My.test(i) === true) {
      const [s, v = Nc] = i.split("|");
      return { svguse: true, src: s.substring(7), viewBox: v };
    }
    let u = " ";
    const c = i.match(Cy);
    if (c !== null) o = dm[c[1]](i);
    else if ($y.test(i) === true) o = i;
    else if (Ey.test(i) === true) o = `ionicons ion-${n.platform.is.ios === true ? "ios" : "md"}${i.substring(3)}`;
    else if (Hc.test(i) === true) {
      o = "notranslate material-symbols";
      const s = i.match(Hc);
      s !== null && (i = i.substring(6), o += vm[s[1]]), u = i;
    } else {
      o = "notranslate material-icons";
      const s = i.match(ky);
      s !== null && (i = i.substring(2), o += fm[s[1]]), u = i;
    }
    return { cls: o, content: u };
  });
  return () => {
    const o = { class: a.value, style: l.value, "aria-hidden": "true" };
    return r.value.none === true ? d(e.tag, o, Pe(t.default)) : r.value.img === true ? d(e.tag, o, qt(t.default, [d("img", { src: r.value.src })])) : r.value.svg === true ? d(e.tag, o, qt(t.default, [d("svg", { viewBox: r.value.viewBox || "0 0 24 24" }, r.value.nodes)])) : r.value.svguse === true ? d(e.tag, o, qt(t.default, [d("svg", { viewBox: r.value.viewBox }, [d("use", { "xlink:href": r.value.src })])])) : (r.value.cls !== void 0 && (o.class += " " + r.value.cls), d(e.tag, o, qt(t.default, [r.value.content])));
  };
} }), mm = ve({ name: "QAvatar", props: { ...Jn, fontSize: String, color: String, textColor: String, icon: String, square: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  const n = el(e), l = f(() => "q-avatar" + (e.color ? ` bg-${e.color}` : "") + (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") + (e.square === true ? " q-avatar--square" : e.rounded === true ? " rounded-borders" : "")), a = f(() => e.fontSize ? { fontSize: e.fontSize } : null);
  return () => {
    const r = e.icon !== void 0 ? [d(et, { name: e.icon })] : void 0;
    return d("div", { class: l.value, style: n.value }, [d("div", { class: "q-avatar__content row flex-center overflow-hidden", style: a.value }, bs(t.default, r))]);
  };
} }), Ay = ["top", "middle", "bottom"];
ve({ name: "QBadge", props: { color: String, textColor: String, floating: Boolean, transparent: Boolean, multiLine: Boolean, outline: Boolean, rounded: Boolean, label: [Number, String], align: { type: String, validator: (e) => Ay.includes(e) } }, setup(e, { slots: t }) {
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
ve({ name: "QBanner", props: { ...nt, inlineActions: Boolean, dense: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = lt(e, n), a = f(() => "q-banner row items-center" + (e.dense === true ? " q-banner--dense" : "") + (l.value === true ? " q-banner--dark q-dark" : "") + (e.rounded === true ? " rounded-borders" : "")), r = f(() => `q-banner__actions row items-center justify-end col-${e.inlineActions === true ? "auto" : "all"}`);
  return () => {
    const o = [d("div", { class: "q-banner__avatar col-auto row items-center self-start" }, Pe(t.avatar)), d("div", { class: "q-banner__content col text-body2" }, Pe(t.default))], i = Pe(t.action);
    return i !== void 0 && o.push(d("div", { class: r.value }, i)), d("div", { class: a.value + (e.inlineActions === false && i !== void 0 ? " q-banner--top-padding" : ""), role: "alert" }, o);
  };
} });
ve({ name: "QBar", props: { ...nt, dense: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = lt(e, n), a = f(() => `q-bar row no-wrap items-center q-bar--${e.dense === true ? "dense" : "standard"}  q-bar--${l.value === true ? "dark" : "light"}`);
  return () => d("div", { class: a.value, role: "toolbar" }, Pe(t.default));
} });
var hm = { left: "start", center: "center", right: "end", between: "between", around: "around", evenly: "evenly", stretch: "stretch" }, Ry = Object.keys(hm), ys = { align: { type: String, validator: (e) => Ry.includes(e) } };
function ps(e) {
  return f(() => {
    const t = e.align === void 0 ? e.vertical === true ? "stretch" : "left" : e.align;
    return `${e.vertical === true ? "items" : "justify"}-${hm[t]}`;
  });
}
function ro(e) {
  if (Object(e.$parent) === e.$parent) return e.$parent;
  let { parent: t } = e.$;
  for (; Object(t) === t; ) {
    if (Object(t.proxy) === t.proxy) return t.proxy;
    t = t.parent;
  }
}
function gm(e, t) {
  typeof t.type == "symbol" ? Array.isArray(t.children) === true && t.children.forEach((n) => {
    gm(e, n);
  }) : e.add(t);
}
function _s(e) {
  const t = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    gm(t, n);
  }), Array.from(t);
}
function ws(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function hl(e) {
  return e.isUnmounted === true || e.isDeactivated === true;
}
var Py = ["", true];
ve({ name: "QBreadcrumbs", props: { ...ys, separator: { type: String, default: "/" }, separatorColor: String, activeColor: { type: String, default: "primary" }, gutter: { type: String, validator: (e) => ["none", "xs", "sm", "md", "lg", "xl"].includes(e), default: "sm" } }, setup(e, { slots: t }) {
  const n = ps(e), l = f(() => `flex items-center ${n.value}${e.gutter === "none" ? "" : ` q-gutter-${e.gutter}`}`), a = f(() => e.separatorColor ? ` text-${e.separatorColor}` : ""), r = f(() => ` text-${e.activeColor}`);
  return () => {
    if (t.default === void 0) return;
    const o = _s(Pe(t.default));
    if (o.length === 0) return;
    let i = 1;
    const u = [], c = o.filter((v) => {
      var _a2;
      return ((_a2 = v.type) == null ? void 0 : _a2.name) === "QBreadcrumbsEl";
    }).length, s = t.separator !== void 0 ? t.separator : () => e.separator;
    return o.forEach((v) => {
      var _a2;
      if (((_a2 = v.type) == null ? void 0 : _a2.name) === "QBreadcrumbsEl") {
        const h = i < c, m = v.props !== null && Py.includes(v.props.disable), g = (h === true ? "" : " q-breadcrumbs--last") + (m !== true && h === true ? r.value : "");
        i++, u.push(d("div", { class: `flex items-center${g}` }, [v])), h === true && u.push(d("div", { class: "q-breadcrumbs__separator" + a.value }, s()));
      } else u.push(v);
    }), d("div", { class: "q-breadcrumbs" }, [d("div", { class: l.value }, u)]);
  };
} });
function jc(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
function Uc(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ly(e, t) {
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
function By(e, t) {
  return Array.isArray(e) === true ? Qc(e, t) : Array.isArray(t) === true ? Qc(t, e) : e === t;
}
function Fy(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (const n in e) if (By(e[n], t[n]) === false) return false;
  return true;
}
var bm = { to: [String, Object], replace: Boolean, href: String, target: String, disable: Boolean }, $r = { ...bm, exact: Boolean, activeClass: { type: String, default: "q-router-link--active" }, exactActiveClass: { type: String, default: "q-router-link--exact-active" } };
function ai({ fallbackTag: e, useDisableForRouterLinkProps: t = true } = {}) {
  const n = Se(), { props: l, proxy: a, emit: r } = n, o = ws(n), i = f(() => l.disable !== true && l.href !== void 0), u = f(t === true ? () => o === true && l.disable !== true && i.value !== true && l.to !== void 0 && l.to !== null && l.to !== "" : () => o === true && i.value !== true && l.to !== void 0 && l.to !== null && l.to !== ""), c = f(() => u.value === true ? p(l.to) : null), s = f(() => c.value !== null), v = f(() => i.value === true || s.value === true), h = f(() => l.type === "a" || v.value === true ? "a" : l.tag || e || "div"), m = f(() => i.value === true ? { href: l.href, target: l.target } : s.value === true ? { href: c.value.href, target: l.target } : {}), g = f(() => {
    if (s.value === false) return -1;
    const { matched: _ } = c.value, { length: E } = _, A = _[E - 1];
    if (A === void 0) return -1;
    const V = a.$route.matched;
    if (V.length === 0) return -1;
    const L = V.findIndex(Uc.bind(null, A));
    if (L !== -1) return L;
    const P = jc(_[E - 2]);
    return E > 1 && jc(A) === P && V[V.length - 1].path !== P ? V.findIndex(Uc.bind(null, _[E - 2])) : L;
  }), w = f(() => s.value === true && g.value !== -1 && Ly(a.$route.params, c.value.params)), S = f(() => w.value === true && g.value === a.$route.matched.length - 1 && Fy(a.$route.params, c.value.params)), q = f(() => s.value === true ? S.value === true ? ` ${l.exactActiveClass} ${l.activeClass}` : l.exact === true ? "" : w.value === true ? ` ${l.activeClass}` : "" : "");
  function p(_) {
    try {
      return a.$router.resolve(_);
    } catch {
    }
    return null;
  }
  function y(_, { returnRouterError: E, to: A = l.to, replace: V = l.replace } = {}) {
    if (l.disable === true) return _.preventDefault(), Promise.resolve(false);
    if (_.metaKey || _.altKey || _.ctrlKey || _.shiftKey || _.button !== void 0 && _.button !== 0 || l.target === "_blank") return Promise.resolve(false);
    _.preventDefault();
    const L = a.$router[V === true ? "replace" : "push"](A);
    return E === true ? L : L.then(() => {
    }).catch(() => {
    });
  }
  function b(_) {
    if (s.value === true) {
      const E = (A) => y(_, A);
      r("click", _, E), _.defaultPrevented !== true && E();
    } else r("click", _);
  }
  return { hasRouterLink: s, hasHrefLink: i, hasLink: v, linkTag: h, resolvedLink: c, linkIsActive: w, linkIsExactActive: S, linkClass: q, linkAttrs: m, getLink: p, navigateToRouterLink: y, navigateOnClick: b };
}
ve({ name: "QBreadcrumbsEl", props: { ...$r, label: String, icon: String, tag: { type: String, default: "span" } }, emits: ["click"], setup(e, { slots: t }) {
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
var _n = ve({ name: "QSpinner", props: { ...Mt, thickness: { type: Number, default: 5 } }, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value + " q-spinner-mat", width: t.value, height: t.value, viewBox: "25 25 50 50" }, [d("circle", { class: "path", cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": e.thickness, "stroke-miterlimit": "10" })]);
} });
function To(e) {
  if (e === window) return { top: 0, left: 0 };
  const { top: t, left: n } = e.getBoundingClientRect();
  return { top: t, left: n };
}
function Sa(e) {
  return e === window ? window.innerHeight : e.getBoundingClientRect().height;
}
function Au(e, t) {
  const n = e.style;
  for (const l in t) n[l] = t[l];
}
function Oy(e) {
  if (e == null) return;
  if (typeof e == "string") try {
    return document.querySelector(e) || void 0;
  } catch {
    return;
  }
  const t = Ie(e);
  if (t) return t.$el || t;
}
function ym(e, t) {
  if (e == null || e.contains(t) === true) return true;
  for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling) if (n.contains(t)) return true;
  return false;
}
function pm(e, t = 250) {
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
  const o = document.createElement("span"), i = document.createElement("span"), u = en(e), { left: c, top: s, width: v, height: h } = t.getBoundingClientRect(), m = Math.sqrt(v * v + h * h), g = m / 2, w = `${(v - m) / 2}px`, S = r ? w : `${u.left - c - g}px`, q = `${(h - m) / 2}px`, p = r ? q : `${u.top - s - g}px`;
  i.className = "q-ripple__inner", Au(i, { height: `${m}px`, width: `${m}px`, transform: `translate3d(${S},${p},0) scale3d(.2,.2,1)`, opacity: 0 }), o.className = `q-ripple${a ? " text-" + a : ""}`, o.setAttribute("dir", "ltr"), o.appendChild(i), t.appendChild(o);
  const y = () => {
    o.remove(), clearTimeout(b);
  };
  n.abort.push(y);
  let b = setTimeout(() => {
    i.classList.add("q-ripple__inner--enter"), i.style.transform = `translate3d(${w},${q},0) scale3d(1,1,1)`, i.style.opacity = 0.2, b = setTimeout(() => {
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
var ri = An({ name: "ripple", beforeMount(e, t) {
  const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
  if (n.ripple === false) return;
  const l = { cfg: n, enabled: t.value !== false, modifiers: {}, abort: [], start(a) {
    l.enabled === true && a.qSkipRipple !== true && a.type === (l.modifiers.early === true ? "pointerdown" : "click") && Kc(a, e, l, a.qKeyEvent === true);
  }, keystart: pm((a) => {
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
} }), Mo = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 }, Vy = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, Iy = ["button", "submit", "reset"], zy = /[^\s]\/[^\s]/, _m = ["flat", "outline", "push", "unelevated"];
function Ss(e, t) {
  return e.flat === true ? "flat" : e.outline === true ? "outline" : e.push === true ? "push" : e.unelevated === true ? "unelevated" : t;
}
function wm(e) {
  const t = Ss(e);
  return t !== void 0 ? { [t]: true } : {};
}
var xs = { ...Jn, ...bm, type: { type: String, default: "button" }, label: [Number, String], icon: String, iconRight: String, ..._m.reduce((e, t) => (e[t] = Boolean) && e, {}), square: Boolean, rounded: Boolean, glossy: Boolean, size: String, fab: Boolean, fabMini: Boolean, padding: String, color: String, textColor: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, tabindex: [Number, String], ripple: { type: [Boolean, Object], default: true }, align: { ...ys.align, default: "center" }, stack: Boolean, stretch: Boolean, loading: { type: Boolean, default: null }, disable: Boolean }, Dy = { ...xs, round: Boolean };
function Ny(e) {
  const t = el(e, Vy), n = ps(e), { hasRouterLink: l, hasLink: a, linkTag: r, linkAttrs: o, navigateOnClick: i } = ai({ fallbackTag: "button" }), u = f(() => {
    const S = e.fab === false && e.fabMini === false ? t.value : {};
    return e.padding !== void 0 ? Object.assign({}, S, { padding: e.padding.split(/\s+/).map((q) => q in Mo ? Mo[q] + "px" : q).join(" "), minWidth: "0", minHeight: "0" }) : S;
  }), c = f(() => e.rounded === true || e.fab === true || e.fabMini === true), s = f(() => e.disable !== true && e.loading !== true), v = f(() => s.value === true ? e.tabindex || 0 : -1), h = f(() => Ss(e, "standard")), m = f(() => {
    const S = { tabindex: v.value };
    return a.value === true ? Object.assign(S, o.value) : Iy.includes(e.type) === true && (S.type = e.type), r.value === "a" ? (e.disable === true ? S["aria-disabled"] = "true" : S.href === void 0 && (S.role = "button"), l.value !== true && zy.test(e.type) === true && (S.type = e.type)) : e.disable === true && (S.disabled = "", S["aria-disabled"] = "true"), e.loading === true && e.percentage !== void 0 && Object.assign(S, { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": e.percentage }), S;
  }), g = f(() => {
    let S;
    e.color !== void 0 ? e.flat === true || e.outline === true ? S = `text-${e.textColor || e.color}` : S = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (S = `text-${e.textColor}`);
    const q = e.round === true ? "round" : `rectangle${c.value === true ? " q-btn--rounded" : e.square === true ? " q-btn--square" : ""}`;
    return `q-btn--${h.value} q-btn--${q}` + (S !== void 0 ? " " + S : "") + (s.value === true ? " q-btn--actionable q-focusable q-hoverable" : e.disable === true ? " disabled" : "") + (e.fab === true ? " q-btn--fab" : e.fabMini === true ? " q-btn--fab-mini" : "") + (e.noCaps === true ? " q-btn--no-uppercase" : "") + (e.dense === true ? " q-btn--dense" : "") + (e.stretch === true ? " no-border-radius self-stretch" : "") + (e.glossy === true ? " glossy" : "") + (e.square ? " q-btn--square" : "");
  }), w = f(() => n.value + (e.stack === true ? " column" : " row") + (e.noWrap === true ? " no-wrap text-no-wrap" : "") + (e.loading === true ? " q-btn__content--hidden" : ""));
  return { classes: g, style: u, innerClasses: w, attributes: m, hasLink: a, linkTag: r, navigateOnClick: i, isActionable: s };
}
var { passiveCapture: fn } = dt, Zl = null, Jl = null, ea = null, Ze = ve({ name: "QBtn", props: { ...Dy, percentage: Number, darkPercentage: Boolean, onTouchstart: [Function, Array] }, emits: ["click", "keydown", "mousedown", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { classes: a, style: r, innerClasses: o, attributes: i, hasLink: u, linkTag: c, navigateOnClick: s, isActionable: v } = Ny(e), h = U(null), m = U(null);
  let g = null, w, S = null;
  const q = f(() => e.label !== void 0 && e.label !== null && e.label !== ""), p = f(() => e.disable === true || e.ripple === false ? false : { keyCodes: u.value === true ? [13, 32] : [13], ...e.ripple === true ? {} : e.ripple }), y = f(() => ({ center: e.round })), b = f(() => {
    const C = Math.max(0, Math.min(100, e.percentage));
    return C > 0 ? { transition: "transform 0.6s", transform: `translateX(${C - 100}%)` } : {};
  }), _ = f(() => {
    if (e.loading === true) return { onMousedown: x, onTouchstart: x, onClick: x, onKeydown: x, onKeyup: x };
    if (v.value === true) {
      const C = { onClick: A, onKeydown: V, onMousedown: P };
      if (l.$q.platform.has.touch === true) {
        const D = e.onTouchstart !== void 0 ? "" : "Passive";
        C[`onTouchstart${D}`] = L;
      }
      return C;
    }
    return { onClick: je };
  }), E = f(() => ({ ref: h, class: "q-btn q-btn-item non-selectable no-outline " + a.value, style: r.value, ...i.value, ..._.value }));
  function A(C) {
    if (h.value !== null) {
      if (C !== void 0) {
        if (C.defaultPrevented === true) return;
        const D = document.activeElement;
        if (e.type === "submit" && D !== document.body && h.value.contains(D) === false && D.contains(h.value) === false) {
          C.qAvoidFocus !== true && h.value.focus();
          const H = () => {
            var _a2;
            document.removeEventListener("keydown", je, true), document.removeEventListener("keyup", H, fn), (_a2 = h.value) == null ? void 0 : _a2.removeEventListener("blur", H, fn);
          };
          document.addEventListener("keydown", je, true), document.addEventListener("keyup", H, fn), h.value.addEventListener("blur", H, fn);
        }
      }
      s(C);
    }
  }
  function V(C) {
    h.value !== null && (n("keydown", C), yn(C, [13, 32]) === true && Jl !== h.value && (Jl !== null && T(), C.defaultPrevented !== true && (C.qAvoidFocus !== true && h.value.focus(), Jl = h.value, h.value.classList.add("q-btn--active"), document.addEventListener("keyup", F, true), h.value.addEventListener("blur", F, fn)), je(C)));
  }
  function L(C) {
    h.value !== null && (n("touchstart", C), C.defaultPrevented !== true && (Zl !== h.value && (Zl !== null && T(), Zl = h.value, g = C.target, g.addEventListener("touchcancel", F, fn), g.addEventListener("touchend", F, fn)), w = true, S !== null && clearTimeout(S), S = setTimeout(() => {
      S = null, w = false;
    }, 200)));
  }
  function P(C) {
    h.value !== null && (C.qSkipRipple = w === true, n("mousedown", C), C.defaultPrevented !== true && ea !== h.value && (ea !== null && T(), ea = h.value, h.value.classList.add("q-btn--active"), document.addEventListener("mouseup", F, fn)));
  }
  function F(C) {
    if (h.value !== null && !((C == null ? void 0 : C.type) === "blur" && document.activeElement === h.value)) {
      if ((C == null ? void 0 : C.type) === "keyup") {
        if (Jl === h.value && yn(C, [13, 32]) === true) {
          const D = new MouseEvent("click", C);
          D.qKeyEvent = true, C.defaultPrevented === true && Vt(D), C.cancelBubble === true && wt(D), h.value.dispatchEvent(D), je(C), C.qKeyEvent = true;
        }
        n("keyup", C);
      }
      T();
    }
  }
  function T(C) {
    var _a2, _b2;
    const D = m.value;
    C !== true && (Zl === h.value || ea === h.value) && D !== null && D !== document.activeElement && (D.setAttribute("tabindex", -1), D.focus()), Zl === h.value && (g !== null && (g.removeEventListener("touchcancel", F, fn), g.removeEventListener("touchend", F, fn)), Zl = g = null), ea === h.value && (document.removeEventListener("mouseup", F, fn), ea = null), Jl === h.value && (document.removeEventListener("keyup", F, true), (_a2 = h.value) == null ? void 0 : _a2.removeEventListener("blur", F, fn), Jl = null), (_b2 = h.value) == null ? void 0 : _b2.classList.remove("q-btn--active");
  }
  function x(C) {
    je(C), C.qSkipRipple = true;
  }
  return Ke(() => {
    T(true);
  }), Object.assign(l, { click: (C) => {
    v.value === true && A(C);
  } }), () => {
    let C = [];
    e.icon !== void 0 && C.push(d(et, { name: e.icon, left: e.stack !== true && q.value === true, role: "img" })), q.value === true && C.push(d("span", { class: "block" }, [e.label])), C = qt(t.default, C), e.iconRight !== void 0 && e.round === false && C.push(d(et, { name: e.iconRight, right: e.stack !== true && q.value === true, role: "img" }));
    const D = [d("span", { class: "q-focus-helper", ref: m })];
    return e.loading === true && e.percentage !== void 0 && D.push(d("span", { class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === true ? " q-btn__progress--dark" : "") }, [d("span", { class: "q-btn__progress-indicator fit block", style: b.value })])), D.push(d("span", { class: "q-btn__content text-center col items-center q-anchor--skip " + o.value }, C)), e.loading !== null && D.push(d(Ft, { name: "q-transition--fade" }, () => e.loading === true ? [d("span", { key: "loading", class: "absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : [d(_n)])] : null)), sn(d(c.value, E.value, D), [[ri, p.value, void 0, y.value]]);
  };
} }), Sm = ve({ name: "QBtnGroup", props: { unelevated: Boolean, outline: Boolean, flat: Boolean, rounded: Boolean, square: Boolean, push: Boolean, stretch: Boolean, glossy: Boolean, spread: Boolean }, setup(e, { slots: t }) {
  const n = f(() => {
    const l = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter((a) => e[a] === true).map((a) => `q-btn-group--${a}`).join(" ");
    return `q-btn-group row no-wrap${l.length !== 0 ? " " + l : ""}` + (e.spread === true ? " q-btn-group--spread" : " inline");
  });
  return () => d("div", { class: n.value }, Pe(t.default));
} });
function Mn() {
  if (window.getSelection !== void 0) {
    const e = window.getSelection();
    e.empty !== void 0 ? e.empty() : e.removeAllRanges !== void 0 && (e.removeAllRanges(), Yv.is.mobile !== true && e.addRange(document.createRange()));
  } else document.selection !== void 0 && document.selection.empty();
}
var xm = { target: { type: [Boolean, String, Element], default: true }, noParentEvent: Boolean }, Cm = { ...xm, contextMenu: Boolean };
function Cs({ showing: e, avoidEmit: t, configureAnchorEl: n }) {
  const { props: l, proxy: a, emit: r } = Se(), o = U(null);
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
    a.hide(m), Vt(m), Ge(() => {
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
  return he(() => l.contextMenu, (m) => {
    o.value !== null && (s(), n(m));
  }), he(() => l.target, () => {
    o.value !== null && s(), h();
  }), he(() => l.noParentEvent, (m) => {
    o.value !== null && (m === true ? s() : n());
  }), ft(() => {
    h(), t !== true && l.modelValue === true && o.value === null && r("update:modelValue", false);
  }), Ke(() => {
    i !== null && clearTimeout(i), s();
  }), { anchorEl: o, canShow: u, anchorEvents: c };
}
function km(e, t) {
  const n = U(null);
  let l;
  function a(i, u) {
    const c = `${u !== void 0 ? "add" : "remove"}EventListener`, s = u !== void 0 ? u : l;
    i !== window && i[c]("scroll", s, dt.passive), window[c]("scroll", s, dt.passive), l = u;
  }
  function r() {
    n.value !== null && (a(n.value), n.value = null);
  }
  const o = he(() => e.noParentEvent, () => {
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
    y === true && (u("update:modelValue", true), s = p, Ge(() => {
      s === p && (s = void 0);
    })), (i.modelValue === null || y === false) && m(p);
  }
  function m(p) {
    e.value !== true && (e.value = true, u("beforeShow", p), l !== void 0 ? l(p) : u("show", p));
  }
  function g(p) {
    if (i.disable === true) return;
    const y = i["onUpdate:modelValue"] !== void 0;
    y === true && (u("update:modelValue", false), s = p, Ge(() => {
      s === p && (s = void 0);
    })), (i.modelValue === null || y === false) && w(p);
  }
  function w(p) {
    e.value !== false && (e.value = false, u("beforeHide", p), a !== void 0 ? a(p) : u("hide", p));
  }
  function S(p) {
    i.disable === true && p === true ? i["onUpdate:modelValue"] !== void 0 && u("update:modelValue", false) : p === true !== e.value && (p === true ? m : w)(s);
  }
  he(() => i.modelValue, S), n !== void 0 && ws(o) === true && he(() => c.$route.fullPath, () => {
    n.value === true && e.value === true && g();
  }), r === true && ft(() => {
    S(i.modelValue);
  });
  const q = { show: h, hide: g, toggle: v };
  return Object.assign(c, q), q;
}
var Fl = [], _r = [];
function qm(e) {
  _r = _r.filter((t) => t !== e);
}
function Hy(e) {
  qm(e), _r.push(e);
}
function Yc(e) {
  qm(e), _r.length === 0 && Fl.length !== 0 && (Fl[Fl.length - 1](), Fl = []);
}
function Pa(e) {
  _r.length === 0 ? e() : Fl.push(e);
}
function jy(e) {
  Fl = Fl.filter((t) => t !== e);
}
var ga = [], or = [], Uy = 1, il = document.body;
function Ar(e, t) {
  const n = document.createElement("div");
  if (n.id = t !== void 0 ? `q-portal--${t}--${Uy++}` : e, Co.globalNodes !== void 0) {
    const l = Co.globalNodes.class;
    l !== void 0 && (n.className = l);
  }
  return il.appendChild(n), ga.push(n), or.push(t), n;
}
function ks(e) {
  const t = ga.indexOf(e);
  ga.splice(t, 1), or.splice(t, 1), e.remove();
}
function Qy(e) {
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
function Ky(e) {
  return ba.find((t) => t.contentEl !== null && t.contentEl.contains(e));
}
function Tm(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      if (e.hide(t), e.$props.separateClosePopup === true) return ro(e);
    } else if (e.__qPortal === true) {
      const n = ro(e);
      return (n == null ? void 0 : n.$options.name) === "QPopupProxy" ? (e.hide(t), n) : e;
    }
    e = ro(e);
  } while (e != null);
}
function Wy(e, t, n) {
  for (; n !== 0 && e !== void 0 && e !== null; ) {
    if (e.__qPortal === true) {
      if (n--, e.$options.name === "QMenu") {
        e = Tm(e, t);
        continue;
      }
      e.hide(t);
    }
    e = ro(e);
  }
}
var Yy = ve({ name: "QPortal", setup(e, { slots: t }) {
  return () => t.default();
} });
function Gy(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog") return true;
    if (e.type.name === "QDialog" || e.type.name === "QMenu") return false;
    e = e.parent;
  }
  return false;
}
function qs(e, t, n, l) {
  const a = U(false), r = U(false);
  let o = null;
  const i = {}, u = l === "dialog" && Gy(e);
  function c(v) {
    if (v === true) {
      Yc(i), r.value = true;
      return;
    }
    r.value = false, a.value === false && (u === false && o === null && (o = Ar(false, l)), a.value = true, ba.push(e.proxy), Hy(i));
  }
  function s(v) {
    if (r.value = false, v !== true) return;
    Yc(i), a.value = false;
    const h = ba.indexOf(e.proxy);
    h !== -1 && ba.splice(h, 1), o !== null && (ks(o), o = null);
  }
  return Xo(() => {
    s(true);
  }), e.proxy.__qPortal = true, Ot(e.proxy, "contentEl", () => t.value), { showPortal: c, hidePortal: s, portalIsActive: a, portalIsAccessible: r, renderPortal: () => u === true ? n() : a.value === true ? [d(p0, { to: o }, d(Yy, n))] : void 0 };
}
var Il = { transitionShow: { type: String, default: "fade" }, transitionHide: { type: String, default: "fade" }, transitionDuration: { type: [String, Number], default: 300 } };
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
    e = l, Ge(() => {
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
var Gl = [Element, String], Xy = [null, document, document.body, document.scrollingElement, document.documentElement];
function Vn(e, t) {
  let n = Oy(t);
  if (n === void 0) {
    if (e == null) return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return Xy.includes(n) ? window : n;
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
function Mm(e, t, n = 0) {
  const l = arguments[3] === void 0 ? performance.now() : arguments[3], a = gl(e);
  if (n <= 0) {
    a !== t && Ru(e, t);
    return;
  }
  requestAnimationFrame((r) => {
    const o = r - l, i = a + (t - a) / Math.max(o, n) * o;
    Ru(e, i), i !== t && Mm(e, t, n - o, r);
  });
}
function Em(e, t, n = 0) {
  const l = arguments[3] === void 0 ? performance.now() : arguments[3], a = ii(e);
  if (n <= 0) {
    a !== t && Pu(e, t);
    return;
  }
  requestAnimationFrame((r) => {
    const o = r - l, i = a + (t - a) / Math.max(o, n) * o;
    Pu(e, i), i !== t && Em(e, t, n - o, r);
  });
}
function Ru(e, t) {
  if (e === window) {
    window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t);
    return;
  }
  e.scrollTop = t;
}
function Pu(e, t) {
  if (e === window) {
    window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0);
    return;
  }
  e.scrollLeft = t;
}
function pa(e, t, n) {
  if (n) {
    Mm(e, t, n);
    return;
  }
  Ru(e, t);
}
function Bi(e, t, n) {
  if (n) {
    Em(e, t, n);
    return;
  }
  Pu(e, t);
}
var Dr;
function oo() {
  if (Dr !== void 0) return Dr;
  const e = document.createElement("p"), t = document.createElement("div");
  Au(e, { width: "100%", height: "200px" }), Au(t, { position: "absolute", top: "0px", left: "0px", visibility: "hidden", width: "200px", height: "150px", overflow: "hidden" }), t.appendChild(e), document.body.appendChild(t);
  const n = e.offsetWidth;
  t.style.overflow = "scroll";
  let l = e.offsetWidth;
  return n === l && (l = t.clientWidth), t.remove(), Dr = n - l, Dr;
}
function Zy(e, t = true) {
  return !e || e.nodeType !== Node.ELEMENT_NODE ? false : t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]));
}
var zl = [], xa;
function Jy(e) {
  xa = e.keyCode === 27;
}
function ep() {
  xa === true && (xa = false);
}
function tp(e) {
  xa === true && (xa = false, yn(e, 27) === true && zl[zl.length - 1](e));
}
function $m(e) {
  window[e]("keydown", Jy), window[e]("blur", ep), window[e]("keyup", tp), xa = false;
}
function Am(e) {
  ze.is.desktop === true && (zl.push(e), zl.length === 1 && $m("addEventListener"));
}
function Eo(e) {
  const t = zl.indexOf(e);
  t !== -1 && (zl.splice(t, 1), zl.length === 0 && $m("removeEventListener"));
}
var Dl = [];
function Rm(e) {
  Dl[Dl.length - 1](e);
}
function Pm(e) {
  ze.is.desktop === true && (Dl.push(e), Dl.length === 1 && document.body.addEventListener("focusin", Rm));
}
function Lu(e) {
  const t = Dl.indexOf(e);
  t !== -1 && (Dl.splice(t, 1), Dl.length === 0 && document.body.removeEventListener("focusin", Rm));
}
var { notPassiveCapture: $o } = dt, Nl = [];
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
  for (let l = Nl.length - 1; l >= 0; l--) {
    const a = Nl[l];
    if ((a.anchorEl.value === null || a.anchorEl.value.contains(t) === false) && (t === document.body || a.innerRef.value !== null && a.innerRef.value.contains(t) === false)) e.qClickOutside = true, a.onClickOutside(e);
    else return;
  }
}
function Lm(e) {
  Nl.push(e), Nl.length === 1 && (document.addEventListener("mousedown", Ao, $o), document.addEventListener("touchstart", Ao, $o));
}
function Ro(e) {
  const t = Nl.findIndex((n) => n === e);
  t !== -1 && (Nl.splice(t, 1), Nl.length === 0 && (document.removeEventListener("mousedown", Ao, $o), document.removeEventListener("touchstart", Ao, $o)));
}
var Gc, Xc;
function Po(e) {
  const t = e.split(" ");
  return t.length !== 2 ? false : ["top", "center", "bottom"].includes(t[0]) !== true ? (console.error("Anchor/Self position must start with one of top/center/bottom"), false) : ["left", "middle", "right", "start", "end"].includes(t[1]) !== true ? (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), false) : true;
}
function Bm(e) {
  return e ? !(e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number") : true;
}
var Bu = { "start#ltr": "left", "start#rtl": "right", "end#ltr": "right", "end#rtl": "left" };
["left", "middle", "right"].forEach((e) => {
  Bu[`${e}#ltr`] = e, Bu[`${e}#rtl`] = e;
});
function Lo(e, t) {
  const n = e.split(" ");
  return { vertical: n[0], horizontal: Bu[`${n[1]}#${t === true ? "rtl" : "ltr"}`] };
}
function np(e, t) {
  let { top: n, left: l, right: a, bottom: r, width: o, height: i } = e.getBoundingClientRect();
  return t !== void 0 && (n -= t[1], l -= t[0], r += t[1], a += t[0], o += t[0], i += t[1]), { top: n, bottom: r, height: i, left: l, right: a, width: o, middle: l + (a - l) / 2, center: n + (r - n) / 2 };
}
function lp(e, t, n) {
  let { top: l, left: a } = e.getBoundingClientRect();
  return l += t.top, a += t.left, n !== void 0 && (l += n[1], a += n[0]), { top: l, bottom: l + 1, height: 1, left: a, right: a + 1, width: 1, middle: a, center: l };
}
function ap(e, t) {
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
  const { targetEl: n, offset: l, anchorEl: a, anchorOrigin: r, selfOrigin: o, absoluteOffset: i, fit: u, cover: c, maxHeight: s, maxWidth: v } = e;
  if (ze.is.ios === true && window.visualViewport !== void 0) {
    const E = document.body.style, { offsetLeft: A, offsetTop: V } = window.visualViewport;
    A !== Gc && (E.setProperty("--q-pe-left", A + "px"), Gc = A), V !== Xc && (E.setProperty("--q-pe-top", V + "px"), Xc = V);
  }
  const { scrollLeft: h, scrollTop: m } = n, g = i === void 0 ? np(a, c === true ? [0, 0] : l) : lp(a, i, l);
  Object.assign(n.style, { top: 0, left: 0, minWidth: null, minHeight: null, maxWidth: v, maxHeight: s, visibility: "visible" });
  const { offsetWidth: w, offsetHeight: S } = n, { elWidth: q, elHeight: p } = u === true || c === true ? { elWidth: Math.max(g.width, w), elHeight: c === true ? Math.max(g.height, S) : S } : { elWidth: w, elHeight: S };
  let y = { maxWidth: v, maxHeight: s };
  (u === true || c === true) && (y.minWidth = g.width + "px", c === true && (y.minHeight = g.height + "px")), Object.assign(n.style, y);
  const b = ap(q, p);
  let _ = Zc(g, b, r, o);
  if (i === void 0 || l === void 0) Fi(_, g, b, r, o);
  else {
    const { top: E, left: A } = _;
    Fi(_, g, b, r, o);
    let V = false;
    if (_.top !== E) {
      V = true;
      const L = 2 * l[1];
      g.center = g.top -= L, g.bottom -= L + 2;
    }
    if (_.left !== A) {
      V = true;
      const L = 2 * l[0];
      g.middle = g.left -= L, g.right -= L + 2;
    }
    V === true && (_ = Zc(g, b, r, o), Fi(_, g, b, r, o));
  }
  y = { top: _.top + "px", left: _.left + "px" }, _.maxHeight !== void 0 && (y.maxHeight = _.maxHeight + "px", g.height > _.maxHeight && (y.minHeight = y.maxHeight)), _.maxWidth !== void 0 && (y.maxWidth = _.maxWidth + "px", g.width > _.maxWidth && (y.minWidth = y.maxWidth)), Object.assign(n.style, y), n.scrollTop !== m && (n.scrollTop = m), n.scrollLeft !== h && (n.scrollLeft = h);
}
function Fi(e, t, n, l, a) {
  const r = n.bottom, o = n.right, i = oo(), u = window.innerHeight - i, c = document.body.clientWidth;
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
var ui = ve({ name: "QMenu", inheritAttrs: false, props: { ...Cm, ...$a, ...nt, ...Il, persistent: Boolean, autoClose: Boolean, separateClosePopup: Boolean, noEscDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, fit: Boolean, cover: Boolean, square: Boolean, anchor: { type: String, validator: Po }, self: { type: String, validator: Po }, offset: { type: Array, validator: Bm }, scrollTarget: Gl, touchPosition: Boolean, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null } }, emits: [...Aa, "click", "escapeKey"], setup(e, { slots: t, emit: n, attrs: l }) {
  let a = null, r, o, i;
  const u = Se(), { proxy: c } = u, { $q: s } = c, v = U(null), h = U(false), m = f(() => e.persistent !== true && e.noRouteDismiss !== true), g = lt(e, s), { registerTick: w, removeTick: S } = ya(), { registerTimeout: q } = Xn(), { transitionProps: p, transitionStyle: y } = oi(e), { localScrollTarget: b, changeScrollEvent: _, unconfigureScrollTarget: E } = km(e, ee), { anchorEl: A, canShow: V } = Cs({ showing: h }), { hide: L } = Ra({ showing: h, canShow: V, handleShow: pe, handleHide: Q, hideOnRouteChange: m, processOnMount: true }), { showPortal: P, hidePortal: F, renderPortal: T } = qs(u, v, J, "menu"), x = { anchorEl: A, innerRef: v, onClickOutside(O) {
    if (e.persistent !== true && h.value === true) return L(O), (O.type === "touchstart" || O.target.classList.contains("q-dialog__backdrop")) && je(O), true;
  } }, C = f(() => Lo(e.anchor || (e.cover === true ? "center middle" : "bottom start"), s.lang.rtl)), D = f(() => e.cover === true ? C.value : Lo(e.self || "top start", s.lang.rtl)), H = f(() => (e.square === true ? " q-menu--square" : "") + (g.value === true ? " q-menu--dark q-dark" : "")), j = f(() => e.autoClose === true ? { onClick: X } : {}), W = f(() => h.value === true && e.persistent !== true);
  he(W, (O) => {
    O === true ? (Am(B), Lm(x)) : (Eo(B), Ro(x));
  });
  function te() {
    Pa(() => {
      let O = v.value;
      O && O.contains(document.activeElement) !== true && (O = O.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || O.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || O.querySelector("[autofocus], [data-autofocus]") || O, O.focus({ preventScroll: true }));
    });
  }
  function pe(O) {
    if (a = e.noRefocus === false ? document.activeElement : null, Pm(be), P(), ee(), r = void 0, O !== void 0 && (e.touchPosition || e.contextMenu)) {
      const re = en(O);
      if (re.left !== void 0) {
        const { top: we, left: k } = A.value.getBoundingClientRect();
        r = { left: re.left - k, top: re.top - we };
      }
    }
    o === void 0 && (o = he(() => s.screen.width + "|" + s.screen.height + "|" + e.self + "|" + e.anchor + "|" + s.lang.rtl, R)), e.noFocus !== true && document.activeElement.blur(), w(() => {
      R(), e.noFocus !== true && te();
    }), q(() => {
      s.platform.is.ios === true && (i = e.autoClose, v.value.click()), R(), P(true), n("show", O);
    }, e.transitionDuration);
  }
  function Q(O) {
    S(), F(), M(true), a !== null && (O === void 0 || O.qClickOutside !== true) && ((((O == null ? void 0 : O.type.indexOf("key")) === 0 ? a.closest('[tabindex]:not([tabindex^="-"])') : void 0) || a).focus(), a = null), q(() => {
      F(true), n("hide", O);
    }, e.transitionDuration);
  }
  function M(O) {
    r = void 0, o !== void 0 && (o(), o = void 0), (O === true || h.value === true) && (Lu(be), E(), Ro(x), Eo(B)), O !== true && (a = null);
  }
  function ee() {
    (A.value !== null || e.scrollTarget !== void 0) && (b.value = Vn(A.value, e.scrollTarget), _(b.value, R));
  }
  function X(O) {
    i !== true ? (Tm(c, O), n("click", O)) : i = false;
  }
  function be(O) {
    W.value === true && e.noFocus !== true && ym(v.value, O.target) !== true && te();
  }
  function B(O) {
    e.noEscDismiss !== true && (n("escapeKey"), L(O));
  }
  function R() {
    Ts({ targetEl: v.value, offset: e.offset, anchorEl: A.value, anchorOrigin: C.value, selfOrigin: D.value, absoluteOffset: r, fit: e.fit, cover: e.cover, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function J() {
    return d(Ft, p.value, () => h.value === true ? d("div", { role: "menu", ...l, ref: v, tabindex: -1, class: ["q-menu q-position-engine scroll" + H.value, l.class], style: [l.style, y.value], ...j.value }, Pe(t.default)) : null);
  }
  return Ke(M), Object.assign(c, { focus: te, updatePosition: R }), T;
} }), Oi, Nr = 0, Nt = new Array(256);
for (let e = 0; e < 256; e++) Nt[e] = (e + 256).toString(16).substring(1);
var rp = (() => {
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
  (Oi === void 0 || Nr + 16 > Jc) && (Nr = 0, Oi = rp(Jc));
  const e = Array.prototype.slice.call(Oi, Nr, Nr += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, Nt[e[0]] + Nt[e[1]] + Nt[e[2]] + Nt[e[3]] + "-" + Nt[e[4]] + Nt[e[5]] + "-" + Nt[e[6]] + Nt[e[7]] + "-" + Nt[e[8]] + Nt[e[9]] + "-" + Nt[e[10]] + Nt[e[11]] + Nt[e[12]] + Nt[e[13]] + Nt[e[14]] + Nt[e[15]];
}
function op(e) {
  return e ?? null;
}
function ed(e, t) {
  return e ?? (t === true ? `f_${wr()}` : null);
}
function si({ getValue: e, required: t = true } = {}) {
  if (nn.value === true) {
    const n = U(e !== void 0 ? op(e()) : null);
    return t === true && n.value === null && ft(() => {
      n.value = `f_${wr()}`;
    }), e !== void 0 && he(e, (l) => {
      n.value = ed(l, t);
    }), n;
  }
  return e !== void 0 ? f(() => ed(e(), t)) : U(`f_${wr()}`);
}
var ip = Object.keys(xs);
function up(e) {
  return ip.reduce((t, n) => {
    const l = e[n];
    return l !== void 0 && (t[n] = l), t;
  }, {});
}
var sp = ve({ name: "QBtnDropdown", props: { ...xs, ...Il, modelValue: Boolean, split: Boolean, dropdownIcon: String, contentClass: [Array, String, Object], contentStyle: [Array, String, Object], cover: Boolean, persistent: Boolean, noEscDismiss: Boolean, noRouteDismiss: Boolean, autoClose: Boolean, noRefocus: Boolean, noFocus: Boolean, menuAnchor: { type: String, default: "bottom end" }, menuSelf: { type: String, default: "top end" }, menuOffset: Array, disableMainBtn: Boolean, disableDropdown: Boolean, noIconAnimation: Boolean, toggleAriaLabel: String }, emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), a = U(e.modelValue), r = U(null), o = si(), i = f(() => {
    const b = { "aria-expanded": a.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": o.value, "aria-label": e.toggleAriaLabel || l.$q.lang.label[a.value === true ? "collapse" : "expand"](e.label) };
    return (e.disable === true || e.split === false && e.disableMainBtn === true || e.disableDropdown === true) && (b["aria-disabled"] = "true"), b;
  }), u = f(() => "q-btn-dropdown__arrow" + (a.value === true && e.noIconAnimation === false ? " rotate-180" : "") + (e.split === false ? " q-btn-dropdown__arrow-container" : "")), c = f(() => wm(e)), s = f(() => up(e));
  he(() => e.modelValue, (b) => {
    var _a2;
    (_a2 = r.value) == null ? void 0 : _a2[b ? "show" : "hide"]();
  }), he(() => e.split, y);
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
  function w(b) {
    n("click", b);
  }
  function S(b) {
    wt(b), y(), n("click", b);
  }
  function q(b) {
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
  return Object.assign(l, { show: p, hide: y, toggle: q }), ft(() => {
    e.modelValue === true && p();
  }), () => {
    const b = [d(et, { class: u.value, name: e.dropdownIcon || l.$q.iconSet.arrow.dropdown })];
    return e.disableDropdown !== true && b.push(d(ui, { ref: r, id: o.value, class: e.contentClass, style: e.contentStyle, cover: e.cover, fit: true, persistent: e.persistent, noEscDismiss: e.noEscDismiss, noRouteDismiss: e.noRouteDismiss, autoClose: e.autoClose, noFocus: e.noFocus, noRefocus: e.noRefocus, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, separateClosePopup: true, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, onBeforeShow: v, onShow: h, onBeforeHide: m, onHide: g }, t.default)), e.split === false ? d(Ze, { class: "q-btn-dropdown q-btn-dropdown--simple", ...s.value, ...i.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: w }, { default: () => Pe(t.label, []).concat(b), loading: t.loading }) : d(Sm, { class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item", rounded: e.rounded, square: e.square, ...c.value, glossy: e.glossy, stretch: e.stretch }, () => [d(Ze, { class: "q-btn-dropdown--current", ...s.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: S }, { default: t.label, loading: t.loading }), d(Ze, { class: "q-btn-dropdown__arrow-container q-anchor--skip", ...i.value, ...c.value, disable: e.disable === true || e.disableDropdown === true, rounded: e.rounded, color: e.color, textColor: e.textColor, dense: e.dense, size: e.size, padding: e.padding, ripple: e.ripple }, () => b)]);
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
function Ms(e) {
  return f(() => e.name || e.for);
}
ve({ name: "QBtnToggle", props: { ...wn, modelValue: { required: true }, options: { type: Array, required: true, validator: (e) => e.every((t) => ("label" in t || "icon" in t || "slot" in t) && "value" in t) }, color: String, textColor: String, toggleColor: { type: String, default: "primary" }, toggleTextColor: String, outline: Boolean, flat: Boolean, unelevated: Boolean, rounded: Boolean, push: Boolean, glossy: Boolean, size: String, padding: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, readonly: Boolean, disable: Boolean, stack: Boolean, stretch: Boolean, spread: Boolean, clearable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "clear", "click"], setup(e, { slots: t, emit: n }) {
  const l = f(() => e.options.find((h) => h.value === e.modelValue) !== void 0), a = f(() => ({ type: "hidden", name: e.name, value: e.modelValue })), r = xl(a), o = f(() => wm(e)), i = f(() => ({ rounded: e.rounded, dense: e.dense, ...o.value })), u = f(() => e.options.map((h, m) => {
    const { attrs: g, value: w, slot: S, ...q } = h;
    return { slot: S, props: { key: m, "aria-pressed": w === e.modelValue ? "true" : "false", ...g, ...q, ...i.value, disable: e.disable === true || q.disable === true, color: w === e.modelValue ? s(q, "toggleColor") : s(q, "color"), textColor: w === e.modelValue ? s(q, "toggleTextColor") : s(q, "textColor"), noCaps: s(q, "noCaps") === true, noWrap: s(q, "noWrap") === true, size: s(q, "size"), padding: s(q, "padding"), ripple: s(q, "ripple"), stack: s(q, "stack") === true, stretch: s(q, "stretch") === true, onClick(p) {
      c(w, h, p);
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
  return () => d(Sm, { class: "q-btn-toggle", ...o.value, rounded: e.rounded, stretch: e.stretch, glossy: e.glossy, spread: e.spread }, v);
} });
var Fm = ve({ name: "QCard", props: { ...nt, tag: { type: String, default: "div" }, square: Boolean, flat: Boolean, bordered: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = lt(e, n), a = f(() => "q-card" + (l.value === true ? " q-card--dark q-dark" : "") + (e.bordered === true ? " q-card--bordered" : "") + (e.square === true ? " q-card--square no-border-radius" : "") + (e.flat === true ? " q-card--flat no-shadow" : ""));
  return () => d(e.tag, { class: a.value }, Pe(t.default));
} }), Ll = ve({ name: "QCardSection", props: { tag: { type: String, default: "div" }, horizontal: Boolean }, setup(e, { slots: t }) {
  const n = f(() => `q-card__section q-card__section--${e.horizontal === true ? "horiz row no-wrap" : "vert"}`);
  return () => d(e.tag, { class: n.value }, Pe(t.default));
} }), cp = ve({ name: "QCardActions", props: { ...ys, vertical: Boolean }, setup(e, { slots: t }) {
  const n = ps(e), l = f(() => `q-card__actions ${n.value} q-card__actions--${e.vertical === true ? "vert column" : "horiz row"}`);
  return () => d("div", { class: l.value }, Pe(t.default));
} }), Es = { left: true, right: true, up: true, down: true, horizontal: true, vertical: true }, dp = Object.keys(Es);
Es.all = true;
function Bo(e) {
  const t = {};
  for (const n of dp) e[n] === true && (t[n] = true);
  return Object.keys(t).length === 0 ? Es : (t.horizontal === true ? t.left = t.right = true : t.left === true && t.right === true && (t.horizontal = true), t.vertical === true ? t.up = t.down = true : t.up === true && t.down === true && (t.vertical = true), t.horizontal === true && t.vertical === true && (t.all = true), t);
}
var fp = ["INPUT", "TEXTAREA"];
function Fo(e, t) {
  return t.event === void 0 && e.target !== void 0 && e.target.draggable !== true && typeof t.handler == "function" && fp.includes(e.target.nodeName.toUpperCase()) === false && (e.qClonedBy === void 0 || e.qClonedBy.indexOf(t.uid) === -1);
}
function vp(e) {
  const t = [0.06, 6, 50];
  return typeof e == "string" && e.length && e.split(":").forEach((n, l) => {
    const a = parseFloat(n);
    a && (t[l] = a);
  }), t;
}
var mp = An({ name: "touch-swipe", beforeMount(e, { value: t, arg: n, modifiers: l }) {
  if (l.mouse !== true && ze.has.touch !== true) return;
  const a = l.mouseCapture === true ? "Capture" : "", r = { handler: t, sensitivity: vp(n), direction: Bo(l), noop: St, mouseStart(o) {
    Fo(o, r) && ti(o) && (kt(r, "temp", [[document, "mousemove", "move", `notPassive${a}`], [document, "mouseup", "end", "notPassiveCapture"]]), r.start(o, true));
  }, touchStart(o) {
    if (Fo(o, r)) {
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
    r.direction.vertical === true && s < h && s < 100 && g > r.sensitivity[0] && (r.event.dir = v < 0 ? "up" : "down"), r.direction.horizontal === true && s > h && h < 100 && m > r.sensitivity[0] && (r.event.dir = c < 0 ? "left" : "right"), r.direction.up === true && s < h && v < 0 && s < 100 && g > r.sensitivity[0] && (r.event.dir = "up"), r.direction.down === true && s < h && v > 0 && s < 100 && g > r.sensitivity[0] && (r.event.dir = "down"), r.direction.left === true && s > h && c < 0 && h < 100 && m > r.sensitivity[0] && (r.event.dir = "left"), r.direction.right === true && s > h && c > 0 && h < 100 && m > r.sensitivity[0] && (r.event.dir = "right"), r.event.dir !== false ? (je(o), r.event.mouse === true && (document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), Mn(), r.styleCleanup = (w) => {
      r.styleCleanup = void 0, document.body.classList.remove("non-selectable");
      const S = () => {
        document.body.classList.remove("no-pointer-events--children");
      };
      w === true ? setTimeout(S, 50) : S();
    }), r.handler({ evt: o, touch: r.event.mouse !== true, mouse: r.event.mouse, direction: r.event.dir, duration: i, distance: { x: s, y: h } })) : r.end(o);
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
  n !== void 0 && (t.oldValue !== t.value && (typeof t.value != "function" && n.end(), n.handler = t.value), n.direction = Bo(t.modifiers));
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
var $s = { name: { required: true }, disable: Boolean }, td = { setup(e, { slots: t }) {
  return () => d("div", { class: "q-panel scroll", role: "tabpanel" }, Pe(t.default));
} }, As = { modelValue: { required: true }, animated: Boolean, infinite: Boolean, swipeable: Boolean, vertical: Boolean, transitionPrev: String, transitionNext: String, transitionDuration: { type: [String, Number], default: 300 }, keepAlive: Boolean, keepAliveInclude: [String, Array, RegExp], keepAliveExclude: [String, Array, RegExp], keepAliveMax: Number }, Rs = ["update:modelValue", "beforeTransition", "transition"];
function Ps() {
  const { props: e, emit: t, proxy: n } = Se(), { getCache: l } = Pr(), { registerTimeout: a } = Xn();
  let r, o;
  const i = U(null), u = { value: null };
  function c(C) {
    const D = e.vertical === true ? "up" : "left";
    V((n.$q.lang.rtl === true ? -1 : 1) * (C.direction === D ? 1 : -1));
  }
  const s = f(() => [[mp, c, void 0, { horizontal: e.vertical !== true, vertical: e.vertical, mouse: true }]]), v = f(() => e.transitionPrev || `slide-${e.vertical === true ? "down" : "right"}`), h = f(() => e.transitionNext || `slide-${e.vertical === true ? "up" : "left"}`), m = f(() => `--q-transition-duration: ${e.transitionDuration}ms`), g = f(() => typeof e.modelValue == "string" || typeof e.modelValue == "number" ? e.modelValue : String(e.modelValue)), w = f(() => ({ include: e.keepAliveInclude, exclude: e.keepAliveExclude, max: e.keepAliveMax })), S = f(() => e.keepAliveInclude !== void 0 || e.keepAliveExclude !== void 0);
  he(() => e.modelValue, (C, D) => {
    const H = b(C) === true ? _(C) : -1;
    o !== true && A(H === -1 ? 0 : H < _(D) ? -1 : 1), u.value !== H && (u.value = H, t("beforeTransition", C, D), a(() => {
      t("transition", C, D);
    }, e.transitionDuration));
  });
  function q() {
    V(1);
  }
  function p() {
    V(-1);
  }
  function y(C) {
    t("update:modelValue", C);
  }
  function b(C) {
    return C != null && C !== "";
  }
  function _(C) {
    return r.findIndex((D) => D.props.name === C && D.props.disable !== "" && D.props.disable !== true);
  }
  function E() {
    return r.filter((C) => C.props.disable !== "" && C.props.disable !== true);
  }
  function A(C) {
    const D = C !== 0 && e.animated === true && u.value !== -1 ? "q-transition--" + (C === -1 ? v.value : h.value) : null;
    i.value !== D && (i.value = D);
  }
  function V(C, D = u.value) {
    let H = D + C;
    for (; H !== -1 && H < r.length; ) {
      const j = r[H];
      if (j !== void 0 && j.props.disable !== "" && j.props.disable !== true) {
        A(C), o = true, t("update:modelValue", j.props.name), setTimeout(() => {
          o = false;
        });
        return;
      }
      H += C;
    }
    e.infinite === true && r.length !== 0 && D !== -1 && D !== r.length && V(C, C === -1 ? r.length : -1);
  }
  function L() {
    const C = _(e.modelValue);
    return u.value !== C && (u.value = C), true;
  }
  function P() {
    const C = b(e.modelValue) === true && L() && r[u.value];
    return e.keepAlive === true ? [d(fv, w.value, [d(S.value === true ? l(g.value, () => ({ ...td, name: g.value })) : td, { key: g.value, style: m.value }, () => C)])] : [d("div", { class: "q-panel scroll", style: m.value, key: g.value, role: "tabpanel" }, [C])];
  }
  function F() {
    if (r.length !== 0) return e.animated === true ? [d(Ft, { name: i.value }, P)] : P();
  }
  function T(C) {
    return r = _s(Pe(C.default, [])).filter((D) => D.props !== null && D.props.slot === void 0 && b(D.props.name) === true), r.length;
  }
  function x() {
    return r;
  }
  return Object.assign(n, { next: q, previous: p, goTo: y }), { panelIndex: u, panelDirectives: s, updatePanelsList: T, updatePanelIndex: L, getPanelContent: F, getEnabledPanels: E, getPanels: x, isValidPanelName: b, keepAliveProps: w, needsUniqueKeepAliveWrapper: S, goToPanelByOffset: V, goToPanel: y, nextPanel: q, previousPanel: p };
}
var Oa = 0, Ls = { fullscreen: Boolean, noRouteFullscreenExit: Boolean }, Bs = ["update:fullscreen", "fullscreen"];
function Fs() {
  const e = Se(), { props: t, emit: n, proxy: l } = e;
  let a, r, o;
  const i = U(false);
  ws(e) === true && he(() => l.$route.fullPath, () => {
    t.noRouteFullscreenExit !== true && s();
  }), he(() => t.fullscreen, (v) => {
    i.value !== v && u();
  }), he(i, (v) => {
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
var hp = ["top", "right", "bottom", "left"], gp = ["regular", "flat", "outline", "push", "unelevated"];
ve({ name: "QCarousel", props: { ...nt, ...As, ...Ls, transitionPrev: { type: String, default: "fade" }, transitionNext: { type: String, default: "fade" }, height: String, padding: Boolean, controlColor: String, controlTextColor: String, controlType: { type: String, validator: (e) => gp.includes(e), default: "flat" }, autoplay: [Number, Boolean], arrows: Boolean, prevIcon: String, nextIcon: String, navigation: Boolean, navigationPosition: { type: String, validator: (e) => hp.includes(e) }, navigationIcon: String, navigationActiveIcon: String, thumbnails: Boolean }, emits: [...Bs, ...Rs], setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = lt(e, n);
  let a = null, r;
  const { updatePanelsList: o, getPanelContent: i, panelDirectives: u, goToPanel: c, previousPanel: s, nextPanel: v, getEnabledPanels: h, panelIndex: m } = Ps(), { inFullscreen: g } = Fs(), w = f(() => g.value !== true && e.height !== void 0 ? { height: e.height } : {}), S = f(() => e.vertical === true ? "vertical" : "horizontal"), q = f(() => e.navigationPosition || (e.vertical === true ? "right" : "bottom")), p = f(() => `q-carousel q-panel-parent q-carousel--with${e.padding === true ? "" : "out"}-padding` + (g.value === true ? " fullscreen" : "") + (l.value === true ? " q-carousel--dark q-dark" : "") + (e.arrows === true ? ` q-carousel--arrows-${S.value}` : "") + (e.navigation === true ? ` q-carousel--navigation-${q.value}` : "")), y = f(() => {
    const P = [e.prevIcon || n.iconSet.carousel[e.vertical === true ? "up" : "left"], e.nextIcon || n.iconSet.carousel[e.vertical === true ? "down" : "right"]];
    return e.vertical === false && n.lang.rtl === true ? P.reverse() : P;
  }), b = f(() => e.navigationIcon || n.iconSet.carousel.navigationIcon), _ = f(() => e.navigationActiveIcon || b.value), E = f(() => ({ color: e.controlColor, textColor: e.controlTextColor, round: true, [e.controlType]: true, dense: true }));
  he(() => e.modelValue, () => {
    e.autoplay && A();
  }), he(() => e.autoplay, (P) => {
    P ? A() : a !== null && (clearTimeout(a), a = null);
  });
  function A() {
    const P = pr(e.autoplay) === true ? Math.abs(e.autoplay) : 5e3;
    a !== null && clearTimeout(a), a = setTimeout(() => {
      a = null, P >= 0 ? v() : s();
    }, P);
  }
  ft(() => {
    e.autoplay && A();
  }), Ke(() => {
    a !== null && clearTimeout(a);
  });
  function V(P, F) {
    return d("div", { class: `q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${P} q-carousel__navigation--${q.value}` + (e.controlColor !== void 0 ? ` text-${e.controlColor}` : "") }, [d("div", { class: "q-carousel__navigation-inner flex flex-center no-wrap" }, h().map(F))]);
  }
  function L() {
    const P = [];
    if (e.navigation === true) {
      const F = t["navigation-icon"] !== void 0 ? t["navigation-icon"] : (x) => d(Ze, { key: "nav" + x.name, class: `q-carousel__navigation-icon q-carousel__navigation-icon--${x.active === true ? "" : "in"}active`, ...x.btnProps, onClick: x.onClick }), T = r - 1;
      P.push(V("buttons", (x, C) => {
        const D = x.props.name, H = m.value === C;
        return F({ index: C, maxIndex: T, name: D, active: H, btnProps: { icon: H === true ? _.value : b.value, size: "sm", ...E.value }, onClick: () => {
          c(D);
        } });
      }));
    } else if (e.thumbnails === true) {
      const F = e.controlColor !== void 0 ? ` text-${e.controlColor}` : "";
      P.push(V("thumbnails", (T) => {
        const x = T.props;
        return d("img", { key: "tmb#" + x.name, class: `q-carousel__thumbnail q-carousel__thumbnail--${x.name === e.modelValue ? "" : "in"}active` + F, src: x.imgSrc || x["img-src"], onClick: () => {
          c(x.name);
        } });
      }));
    }
    return e.arrows === true && m.value >= 0 && ((e.infinite === true || m.value > 0) && P.push(d("div", { key: "prev", class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${S.value} absolute flex flex-center` }, [d(Ze, { icon: y.value[0], ...E.value, onClick: s })])), (e.infinite === true || m.value < r - 1) && P.push(d("div", { key: "next", class: `q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${S.value} absolute flex flex-center` }, [d(Ze, { icon: y.value[1], ...E.value, onClick: v })]))), qt(t.control, P);
  }
  return () => (r = o(t), d("div", { class: p.value, style: w.value }, [pn("div", { class: "q-carousel__slides-container" }, i(), "sl-cont", e.swipeable, () => u.value)].concat(L())));
} });
ve({ name: "QCarouselSlide", props: { ...$s, imgSrc: String }, setup(e, { slots: t }) {
  const n = f(() => e.imgSrc ? { backgroundImage: `url("${e.imgSrc}")` } : {});
  return () => d("div", { class: "q-carousel__slide", style: n.value }, Pe(t.default));
} });
ve({ name: "QCarouselControl", props: { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, default: () => [18, 18], validator: (e) => e.length === 2 } }, setup(e, { slots: t }) {
  const n = f(() => `q-carousel__control absolute absolute-${e.position}`), l = f(() => ({ margin: `${e.offset[1]}px ${e.offset[0]}px` }));
  return () => d("div", { class: n.value, style: l.value }, Pe(t.default));
} });
ve({ name: "QChatMessage", props: { sent: Boolean, label: String, bgColor: String, textColor: String, name: String, avatar: String, text: Array, stamp: String, size: String, labelHtml: Boolean, nameHtml: Boolean, textHtml: Boolean, stampHtml: Boolean }, setup(e, { slots: t }) {
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
    t.name !== void 0 ? v.push(d("div", { class: `q-message-name q-message-name--${n.value}` }, t.name())) : e.name !== void 0 && v.push(d("div", { class: `q-message-name q-message-name--${n.value}`, [i.value.name]: e.name })), t.default !== void 0 ? v.push(c(_s(t.default()), true)) : e.text !== void 0 && v.push(c(e.text)), s.push(d("div", { class: o.value }, v));
    const h = [];
    return t.label !== void 0 ? h.push(d("div", { class: "q-message-label" }, t.label())) : e.label !== void 0 && h.push(d("div", { class: "q-message-label", [i.value.label]: e.label })), h.push(d("div", { class: r.value }, s)), d("div", { class: `q-message q-message-${n.value}` }, h);
  };
} });
function Om(e, t) {
  const n = U(null), l = f(() => e.disable === true ? null : d("span", { ref: n, class: "no-outline", tabindex: -1 }));
  function a(r) {
    const o = t.value;
    (r == null ? void 0 : r.qAvoidFocus) !== true && ((r == null ? void 0 : r.type.indexOf("key")) === 0 ? document.activeElement !== o && (o == null ? void 0 : o.contains(document.activeElement)) === true && o.focus() : n.value !== null && (r === void 0 || (o == null ? void 0 : o.contains(r.target)) === true) && n.value.focus());
  }
  return { refocusTargetEl: l, refocusTarget: a };
}
var Vm = { xs: 30, sm: 35, md: 40, lg: 50, xl: 60 }, Im = { ...nt, ...Jn, ...wn, modelValue: { required: true, default: null }, val: {}, trueValue: { default: true }, falseValue: { default: false }, indeterminateValue: { default: null }, checkedIcon: String, uncheckedIcon: String, indeterminateIcon: String, toggleOrder: { type: String, validator: (e) => e === "tf" || e === "ft" }, toggleIndeterminate: Boolean, label: String, leftLabel: Boolean, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, zm = ["update:modelValue"];
function Dm(e, t) {
  const { props: n, slots: l, emit: a, proxy: r } = Se(), { $q: o } = r, i = lt(n, o), u = U(null), { refocusTargetEl: c, refocusTarget: s } = Om(n, u), v = el(n, Vm), h = f(() => n.val !== void 0 && Array.isArray(n.modelValue)), m = f(() => {
    const T = Ye(n.val);
    return h.value === true ? n.modelValue.findIndex((x) => Ye(x) === T) : -1;
  }), g = f(() => h.value === true ? m.value !== -1 : Ye(n.modelValue) === Ye(n.trueValue)), w = f(() => h.value === true ? m.value === -1 : Ye(n.modelValue) === Ye(n.falseValue)), S = f(() => g.value === false && w.value === false), q = f(() => n.disable === true ? -1 : n.tabindex || 0), p = f(() => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (n.disable === true ? " disabled" : "") + (i.value === true ? ` q-${e}--dark` : "") + (n.dense === true ? ` q-${e}--dense` : "") + (n.leftLabel === true ? " reverse" : "")), y = f(() => {
    const T = g.value === true ? "truthy" : w.value === true ? "falsy" : "indet", x = n.color !== void 0 && (n.keepColor === true || (e === "toggle" ? g.value === true : w.value !== true)) ? ` text-${n.color}` : "";
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${T}${x}`;
  }), b = f(() => {
    const T = { type: "checkbox" };
    return n.name !== void 0 && Object.assign(T, { ".checked": g.value, "^checked": g.value === true ? "checked" : void 0, name: n.name, value: h.value === true ? n.val : n.trueValue }), T;
  }), _ = xl(b), E = f(() => {
    const T = { tabindex: q.value, role: e === "toggle" ? "switch" : "checkbox", "aria-label": n.label, "aria-checked": S.value === true ? "mixed" : g.value === true ? "true" : "false" };
    return n.disable === true && (T["aria-disabled"] = "true"), T;
  });
  function A(T) {
    T !== void 0 && (je(T), s(T)), n.disable !== true && a("update:modelValue", V(), T);
  }
  function V() {
    if (h.value === true) {
      if (g.value === true) {
        const T = n.modelValue.slice();
        return T.splice(m.value, 1), T;
      }
      return n.modelValue.concat([n.val]);
    }
    if (g.value === true) {
      if (n.toggleOrder !== "ft" || n.toggleIndeterminate === false) return n.falseValue;
    } else if (w.value === true) {
      if (n.toggleOrder === "ft" || n.toggleIndeterminate === false) return n.trueValue;
    } else return n.toggleOrder !== "ft" ? n.trueValue : n.falseValue;
    return n.indeterminateValue;
  }
  function L(T) {
    (T.keyCode === 13 || T.keyCode === 32) && je(T);
  }
  function P(T) {
    (T.keyCode === 13 || T.keyCode === 32) && A(T);
  }
  const F = t(g, S);
  return Object.assign(r, { toggle: A }), () => {
    const T = F();
    n.disable !== true && _(T, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
    const x = [d("div", { class: y.value, style: v.value, "aria-hidden": "true" }, T)];
    c.value !== null && x.push(c.value);
    const C = n.label !== void 0 ? qt(l.default, [n.label]) : Pe(l.default);
    return C !== void 0 && x.push(d("div", { class: `q-${e}__label q-anchor--skip` }, C)), d("div", { ref: u, class: p.value, ...E.value, onClick: A, onKeydown: L, onKeyup: P }, x);
  };
}
var bp = () => d("div", { key: "svg", class: "q-checkbox__bg absolute" }, [d("svg", { class: "q-checkbox__svg fit absolute-full", viewBox: "0 0 24 24" }, [d("path", { class: "q-checkbox__truthy", fill: "none", d: "M1.73,12.91 8.1,19.28 22.79,4.59" }), d("path", { class: "q-checkbox__indet", d: "M4,14H20V10H4" })])]), ir = ve({ name: "QCheckbox", props: Im, emits: zm, setup(e) {
  const t = bp();
  function n(l, a) {
    const r = f(() => (l.value === true ? e.checkedIcon : a.value === true ? e.indeterminateIcon : e.uncheckedIcon) || null);
    return () => r.value !== null ? [d("div", { key: "icon", class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap" }, [d(et, { class: "q-checkbox__icon", name: r.value })])] : [t];
  }
  return Dm("checkbox", n);
} }), yp = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, Nm = ve({ name: "QChip", props: { ...nt, ...Jn, dense: Boolean, icon: String, iconRight: String, iconRemove: String, iconSelected: String, label: [String, Number], color: String, textColor: String, modelValue: { type: Boolean, default: true }, selected: { type: Boolean, default: null }, square: Boolean, outline: Boolean, clickable: Boolean, removable: Boolean, removeAriaLabel: String, tabindex: [String, Number], disable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "update:selected", "remove", "click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = lt(e, l), r = el(e, yp), o = f(() => e.selected === true || e.icon !== void 0), i = f(() => e.selected === true ? e.iconSelected || l.iconSet.chip.selected : e.icon), u = f(() => e.iconRemove || l.iconSet.chip.remove), c = f(() => e.disable === false && (e.clickable === true || e.selected !== null)), s = f(() => {
    const S = e.outline === true && e.color || e.textColor;
    return "q-chip row inline no-wrap items-center" + (e.outline === false && e.color !== void 0 ? ` bg-${e.color}` : "") + (S ? ` text-${S} q-chip--colored` : "") + (e.disable === true ? " disabled" : "") + (e.dense === true ? " q-chip--dense" : "") + (e.outline === true ? " q-chip--outline" : "") + (e.selected === true ? " q-chip--selected" : "") + (c.value === true ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (e.square === true ? " q-chip--square" : "") + (a.value === true ? " q-chip--dark q-dark" : "");
  }), v = f(() => {
    const S = e.disable === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: e.tabindex || 0 }, q = { ...S, role: "button", "aria-hidden": "false", "aria-label": e.removeAriaLabel || l.lang.label.remove };
    return { chip: S, remove: q };
  });
  function h(S) {
    S.keyCode === 13 && m(S);
  }
  function m(S) {
    e.disable || (n("update:selected", !e.selected), n("click", S));
  }
  function g(S) {
    (S.keyCode === void 0 || S.keyCode === 13) && (je(S), e.disable === false && (n("update:modelValue", false), n("remove")));
  }
  function w() {
    const S = [];
    c.value === true && S.push(d("div", { class: "q-focus-helper" })), o.value === true && S.push(d(et, { class: "q-chip__icon q-chip__icon--left", name: i.value }));
    const q = e.label !== void 0 ? [d("div", { class: "ellipsis" }, [e.label])] : void 0;
    return S.push(d("div", { class: "q-chip__content col row no-wrap items-center q-anchor--skip" }, bs(t.default, q))), e.iconRight && S.push(d(et, { class: "q-chip__icon q-chip__icon--right", name: e.iconRight })), e.removable === true && S.push(d(et, { class: "q-chip__icon q-chip__icon--remove cursor-pointer", name: u.value, ...v.value.remove, onClick: g, onKeyup: g })), S;
  }
  return () => {
    if (e.modelValue === false) return;
    const S = { class: s.value, style: r.value };
    return c.value === true && Object.assign(S, v.value.chip, { onClick: m, onKeyup: h }), pn("div", S, w(), "ripple", e.ripple !== false && e.disable !== true, () => [[ri, e.ripple]]);
  };
} }), Os = { ...Jn, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, color: String, centerColor: String, trackColor: String, fontSize: String, rounded: Boolean, thickness: { type: Number, default: 0.2, validator: (e) => e >= 0 && e <= 1 }, angle: { type: Number, default: 0 }, showValue: Boolean, reverse: Boolean, instantFeedback: Boolean }, Fu = 50, Hm = 2 * Fu, jm = Hm * Math.PI, pp = Math.round(jm * 1e3) / 1e3, Um = ve({ name: "QCircularProgress", props: { ...Os, value: { type: Number, default: 0 }, animationSpeed: { type: [String, Number], default: 600 }, indeterminate: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = el(e), a = f(() => {
    const m = (n.lang.rtl === true ? -1 : 1) * e.angle;
    return { transform: e.reverse !== (n.lang.rtl === true) ? `scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90 - m}deg)` : `rotate3d(0, 0, 1, ${m - 90}deg)` };
  }), r = f(() => e.instantFeedback !== true && e.indeterminate !== true ? { transition: `stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease` } : ""), o = f(() => Hm / (1 - e.thickness / 2)), i = f(() => `${o.value / 2} ${o.value / 2} ${o.value} ${o.value}`), u = f(() => ct(e.value, e.min, e.max)), c = f(() => e.max - e.min), s = f(() => e.thickness / 2 * o.value), v = f(() => {
    const m = (e.max - u.value) / c.value, g = e.rounded === true && u.value < e.max && m < 0.25 ? s.value / 2 * (1 - m / 0.25) : 0;
    return jm * m + g;
  });
  function h({ thickness: m, offset: g, color: w, cls: S, rounded: q }) {
    return d("circle", { class: "q-circular-progress__" + S + (w !== void 0 ? ` text-${w}` : ""), style: r.value, fill: "transparent", stroke: "currentColor", "stroke-width": m, "stroke-dasharray": pp, "stroke-dashoffset": g, "stroke-linecap": q, cx: o.value, cy: o.value, r: Fu });
  }
  return () => {
    const m = [];
    e.centerColor !== void 0 && e.centerColor !== "transparent" && m.push(d("circle", { class: `q-circular-progress__center text-${e.centerColor}`, fill: "currentColor", r: Fu - s.value / 2, cx: o.value, cy: o.value })), e.trackColor !== void 0 && e.trackColor !== "transparent" && m.push(h({ cls: "track", thickness: s.value, offset: 0, color: e.trackColor })), m.push(h({ cls: "circle", thickness: s.value, offset: v.value, color: e.color, rounded: e.rounded === true ? "round" : void 0 }));
    const g = [d("svg", { class: "q-circular-progress__svg", style: a.value, viewBox: i.value, "aria-hidden": "true" }, m)];
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
var _p = 0, gn = An({ name: "touch-pan", beforeMount(e, { value: t, modifiers: n }) {
  if (n.mouse !== true && ze.has.touch !== true) return;
  function l(r, o) {
    n.mouse === true && o === true ? je(r) : (n.stop === true && wt(r), n.prevent === true && Vt(r));
  }
  const a = { uid: "qvtp_" + _p++, handler: t, modifiers: n, direction: Bo(n), noop: St, mouseStart(r) {
    Fo(r, a) && ti(r) && (kt(a, "temp", [[document, "mousemove", "move", "notPassiveCapture"], [document, "mouseup", "end", "passiveCapture"]]), a.start(r, true));
  }, touchStart(r) {
    if (Fo(r, a)) {
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
      let m;
      n.preserveCursor !== true && n.preservecursor !== true && (m = document.documentElement.style.cursor || "", document.documentElement.style.cursor = "grabbing"), c === true && document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), Mn(), a.styleCleanup = (g) => {
        if (a.styleCleanup = void 0, m !== void 0 && (document.documentElement.style.cursor = m), document.body.classList.remove("non-selectable"), c === true) {
          const w = () => {
            document.body.classList.remove("no-pointer-events--children");
          };
          g !== void 0 ? setTimeout(() => {
            w(), g();
          }, 50) : w();
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
  n !== void 0 && (t.oldValue !== t.value && (typeof value != "function" && n.end(), n.handler = t.value), n.direction = Bo(t.modifiers));
}, beforeUnmount(e) {
  var _a2;
  const t = e.__qtouchpan;
  t !== void 0 && (t.event !== void 0 && t.end(), Wt(t, "main"), Wt(t, "temp"), ze.is.firefox === true && ha(e, false), (_a2 = t.styleCleanup) == null ? void 0 : _a2.call(t), delete e.__qtouchpan);
} }), nd = "q-slider__marker-labels", wp = (e) => ({ value: e }), Sp = ({ marker: e }) => d("div", { key: e.value, style: e.style, class: e.classes }, e.label), Vs = [34, 37, 40, 33, 39, 38], Qm = { ...nt, ...wn, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, snap: Boolean, vertical: Boolean, reverse: Boolean, color: String, markerLabelsClass: String, label: Boolean, labelColor: String, labelTextColor: String, labelAlways: Boolean, switchLabelSide: Boolean, markers: [Boolean, Number], markerLabels: [Boolean, Array, Object, Function], switchMarkerLabelsSide: Boolean, trackImg: String, trackColor: String, innerTrackImg: String, innerTrackColor: String, selectionColor: String, selectionImg: String, thumbSize: { type: String, default: "20px" }, trackSize: { type: String, default: "4px" }, disable: Boolean, readonly: Boolean, dense: Boolean, tabindex: [String, Number], thumbColor: String, thumbPath: { type: String, default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0" } }, Km = ["pan", "update:modelValue", "change"];
function Wm({ updateValue: e, updatePosition: t, getDragging: n, formAttrs: l }) {
  const { props: a, emit: r, slots: o, proxy: { $q: i } } = Se(), u = lt(a, i), c = xl(l), s = U(false), v = U(false), h = U(false), m = U(false), g = f(() => a.vertical === true ? "--v" : "--h"), w = f(() => "-" + (a.switchLabelSide === true ? "switched" : "standard")), S = f(() => a.vertical === true ? a.reverse === true : a.reverse !== (i.lang.rtl === true)), q = f(() => isNaN(a.innerMin) === true || a.innerMin < a.min ? a.min : a.innerMin), p = f(() => isNaN(a.innerMax) === true || a.innerMax > a.max ? a.max : a.innerMax), y = f(() => a.disable !== true && a.readonly !== true && q.value < p.value), b = f(() => {
    if (a.step === 0) return (ye) => ye;
    const ae = (String(a.step).trim().split(".")[1] || "").length;
    return (ye) => parseFloat(ye.toFixed(ae));
  }), _ = f(() => a.step === 0 ? 1 : a.step), E = f(() => y.value === true ? a.tabindex || 0 : -1), A = f(() => a.max - a.min), V = f(() => p.value - q.value), L = f(() => we(q.value)), P = f(() => we(p.value)), F = f(() => a.vertical === true ? S.value === true ? "bottom" : "top" : S.value === true ? "right" : "left"), T = f(() => a.vertical === true ? "height" : "width"), x = f(() => a.vertical === true ? "width" : "height"), C = f(() => a.vertical === true ? "vertical" : "horizontal"), D = f(() => {
    const ae = { role: "slider", "aria-valuemin": q.value, "aria-valuemax": p.value, "aria-orientation": C.value, "data-step": a.step };
    return a.disable === true ? ae["aria-disabled"] = "true" : a.readonly === true && (ae["aria-readonly"] = "true"), ae;
  }), H = f(() => `q-slider q-slider${g.value} q-slider--${s.value === true ? "" : "in"}active inline no-wrap ` + (a.vertical === true ? "row" : "column") + (a.disable === true ? " disabled" : " q-slider--enabled" + (y.value === true ? " q-slider--editable" : "")) + (h.value === "both" ? " q-slider--focus" : "") + (a.label || a.labelAlways === true ? " q-slider--label" : "") + (a.labelAlways === true ? " q-slider--label-always" : "") + (u.value === true ? " q-slider--dark" : "") + (a.dense === true ? " q-slider--dense q-slider--dense" + g.value : ""));
  function j(ae) {
    const ye = "q-slider__" + ae;
    return `${ye} ${ye}${g.value} ${ye}${g.value}${w.value}`;
  }
  function W(ae) {
    const ye = "q-slider__" + ae;
    return `${ye} ${ye}${g.value}`;
  }
  const te = f(() => {
    const ae = a.selectionColor || a.color;
    return "q-slider__selection absolute" + (ae !== void 0 ? ` text-${ae}` : "");
  }), pe = f(() => W("markers") + " absolute overflow-hidden"), Q = f(() => W("track-container")), M = f(() => j("pin")), ee = f(() => j("label")), X = f(() => j("text-container")), be = f(() => j("marker-labels-container") + (a.markerLabelsClass !== void 0 ? ` ${a.markerLabelsClass}` : "")), B = f(() => "q-slider__track relative-position no-outline" + (a.trackColor !== void 0 ? ` bg-${a.trackColor}` : "")), R = f(() => {
    const ae = { [x.value]: a.trackSize };
    return a.trackImg !== void 0 && (ae.backgroundImage = `url(${a.trackImg}) !important`), ae;
  }), J = f(() => "q-slider__inner absolute" + (a.innerTrackColor !== void 0 ? ` bg-${a.innerTrackColor}` : "")), O = f(() => {
    const ae = P.value - L.value, ye = { [F.value]: `${100 * L.value}%`, [T.value]: ae === 0 ? "2px" : `${100 * ae}%` };
    return a.innerTrackImg !== void 0 && (ye.backgroundImage = `url(${a.innerTrackImg}) !important`), ye;
  });
  function re(ae) {
    const { min: ye, max: Ce, step: Oe } = a;
    let $e = ye + ae * (Ce - ye);
    if (Oe > 0) {
      const We = ($e - q.value) % Oe;
      $e += (Math.abs(We) >= Oe / 2 ? (We < 0 ? -1 : 1) * Oe : 0) - We;
    }
    return $e = b.value($e), ct($e, q.value, p.value);
  }
  function we(ae) {
    return A.value === 0 ? 0 : (ae - a.min) / A.value;
  }
  function k(ae, ye) {
    const Ce = en(ae), Oe = a.vertical === true ? ct((Ce.top - ye.top) / ye.height, 0, 1) : ct((Ce.left - ye.left) / ye.width, 0, 1);
    return ct(S.value === true ? 1 - Oe : Oe, L.value, P.value);
  }
  const $ = f(() => pr(a.markers) === true ? a.markers : _.value), z = f(() => {
    const ae = [], ye = $.value, Ce = a.max;
    let Oe = a.min;
    do
      ae.push(Oe), Oe += ye;
    while (Oe < Ce);
    return ae.push(Ce), ae;
  }), Z = f(() => {
    const ae = ` ${nd}${g.value}-`;
    return nd + `${ae}${a.switchMarkerLabelsSide === true ? "switched" : "standard"}${ae}${S.value === true ? "rtl" : "ltr"}`;
  }), ne = f(() => a.markerLabels === false ? null : me(a.markerLabels).map((ae, ye) => ({ index: ye, value: ae.value, label: ae.label || ae.value, classes: Z.value + (ae.classes !== void 0 ? " " + ae.classes : ""), style: { ...fe(ae.value), ...ae.style || {} } }))), K = f(() => ({ markerList: ne.value, markerMap: ce.value, classes: Z.value, getStyle: fe })), de = f(() => {
    const ae = V.value === 0 ? "2px" : 100 * $.value / V.value;
    return { ...O.value, backgroundSize: a.vertical === true ? `2px ${ae}%` : `${ae}% 2px` };
  });
  function me(ae) {
    if (ae === false) return null;
    if (ae === true) return z.value.map(wp);
    if (typeof ae == "function") return z.value.map((Ce) => {
      const Oe = ae(Ce);
      return Rt(Oe) === true ? { ...Oe, value: Ce } : { value: Ce, label: Oe };
    });
    const ye = ({ value: Ce }) => Ce >= a.min && Ce <= a.max;
    return Array.isArray(ae) === true ? ae.map((Ce) => Rt(Ce) === true ? Ce : { value: Ce }).filter(ye) : Object.keys(ae).map((Ce) => {
      const Oe = ae[Ce], $e = Number(Ce);
      return Rt(Oe) === true ? { ...Oe, value: $e } : { value: $e, label: Oe };
    }).filter(ye);
  }
  function fe(ae) {
    return { [F.value]: `${100 * (ae - a.min) / A.value}%` };
  }
  const ce = f(() => {
    if (a.markerLabels === false) return null;
    const ae = {};
    return ne.value.forEach((ye) => {
      ae[ye.value] = ye;
    }), ae;
  });
  function le() {
    if (o["marker-label-group"] !== void 0) return o["marker-label-group"](K.value);
    const ae = o["marker-label"] || Sp;
    return ne.value.map((ye) => ae({ marker: ye, ...K.value }));
  }
  const N = f(() => [[gn, oe, void 0, { [C.value]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
  function oe(ae) {
    ae.isFinal === true ? (m.value !== void 0 && (t(ae.evt), ae.touch === true && e(true), m.value = void 0, r("pan", "end")), s.value = false, h.value = false) : ae.isFirst === true ? (m.value = n(ae.evt), t(ae.evt), e(), s.value = true, r("pan", "start")) : (t(ae.evt), e());
  }
  function _e() {
    h.value = false;
  }
  function ke(ae) {
    t(ae, n(ae)), e(), v.value = true, s.value = true, document.addEventListener("mouseup", qe, true);
  }
  function qe() {
    v.value = false, s.value = false, e(true), _e(), document.removeEventListener("mouseup", qe, true);
  }
  function Me(ae) {
    t(ae, n(ae)), e(true);
  }
  function He(ae) {
    Vs.includes(ae.keyCode) && e(true);
  }
  function Ve(ae) {
    if (a.vertical === true) return null;
    const ye = i.lang.rtl !== a.reverse ? 1 - ae : ae;
    return { transform: `translateX(calc(${2 * ye - 1} * ${a.thumbSize} / 2 + ${50 - 100 * ye}%))` };
  }
  function ie(ae) {
    const ye = f(() => v.value === false && (h.value === ae.focusValue || h.value === "both") ? " q-slider--focus" : ""), Ce = f(() => `q-slider__thumb q-slider__thumb${g.value} q-slider__thumb${g.value}-${S.value === true ? "rtl" : "ltr"} absolute non-selectable` + ye.value + (ae.thumbColor.value !== void 0 ? ` text-${ae.thumbColor.value}` : "")), Oe = f(() => ({ width: a.thumbSize, height: a.thumbSize, [F.value]: `${100 * ae.ratio.value}%`, zIndex: h.value === ae.focusValue ? 2 : void 0 })), $e = f(() => ae.labelColor.value !== void 0 ? ` text-${ae.labelColor.value}` : ""), We = f(() => Ve(ae.ratio.value)), it = f(() => "q-slider__text" + (ae.labelTextColor.value !== void 0 ? ` text-${ae.labelTextColor.value}` : ""));
    return () => {
      const Ct = [d("svg", { class: "q-slider__thumb-shape absolute-full", viewBox: "0 0 20 20", "aria-hidden": "true" }, [d("path", { d: a.thumbPath })]), d("div", { class: "q-slider__focus-ring fit" })];
      return (a.label === true || a.labelAlways === true) && (Ct.push(d("div", { class: M.value + " absolute fit no-pointer-events" + $e.value }, [d("div", { class: ee.value, style: { minWidth: a.thumbSize } }, [d("div", { class: X.value, style: We.value }, [d("span", { class: it.value }, ae.label.value)])])])), a.name !== void 0 && a.disable !== true && c(Ct, "push")), d("div", { class: Ce.value, style: Oe.value, ...ae.getNodeData() }, Ct);
    };
  }
  function ge(ae, ye, Ce, Oe) {
    const $e = [];
    a.innerTrackColor !== "transparent" && $e.push(d("div", { key: "inner", class: J.value, style: O.value })), a.selectionColor !== "transparent" && $e.push(d("div", { key: "selection", class: te.value, style: ae.value })), a.markers !== false && $e.push(d("div", { key: "marker", class: pe.value, style: de.value })), Oe($e);
    const We = [pn("div", { key: "trackC", class: Q.value, tabindex: ye.value, ...Ce.value }, [d("div", { class: B.value, style: R.value }, $e)], "slide", y.value, () => N.value)];
    if (a.markerLabels !== false) {
      const it = a.switchMarkerLabelsSide === true ? "unshift" : "push";
      We[it](d("div", { key: "markerL", class: be.value }, le()));
    }
    return We;
  }
  return Ke(() => {
    document.removeEventListener("mouseup", qe, true);
  }), { state: { active: s, focus: h, preventFocus: v, dragging: m, editable: y, classes: H, tabindex: E, attributes: D, roundValueFn: b, keyStep: _, trackLen: A, innerMin: q, innerMinRatio: L, innerMax: p, innerMaxRatio: P, positionProp: F, sizeProp: T, isReversed: S }, methods: { onActivate: ke, onMobileClick: Me, onBlur: _e, onKeyup: He, getContent: ge, getThumbRenderFn: ie, convertRatioToModel: re, convertModelToRatio: we, getDraggingRatio: k } };
}
var xp = () => ({}), ta = ve({ name: "QSlider", props: { ...Qm, modelValue: { required: true, default: null, validator: (e) => typeof e == "number" || e === null }, labelValue: [String, Number] }, emits: Km, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = Se(), { state: l, methods: a } = Wm({ updateValue: g, updatePosition: S, getDragging: w, formAttrs: Rr(e) }), r = U(null), o = U(0), i = U(0);
  function u() {
    i.value = e.modelValue === null ? l.innerMin.value : ct(e.modelValue, l.innerMin.value, l.innerMax.value);
  }
  he(() => `${e.modelValue}|${l.innerMin.value}|${l.innerMax.value}`, u), u();
  const c = f(() => a.convertModelToRatio(i.value)), s = f(() => l.active.value === true ? o.value : c.value), v = f(() => {
    const y = { [l.positionProp.value]: `${100 * l.innerMinRatio.value}%`, [l.sizeProp.value]: `${100 * (s.value - l.innerMinRatio.value)}%` };
    return e.selectionImg !== void 0 && (y.backgroundImage = `url(${e.selectionImg}) !important`), y;
  }), h = a.getThumbRenderFn({ focusValue: true, getNodeData: xp, ratio: s, label: f(() => e.labelValue !== void 0 ? e.labelValue : i.value), thumbColor: f(() => e.thumbColor || e.color), labelColor: f(() => e.labelColor), labelTextColor: f(() => e.labelTextColor) }), m = f(() => l.editable.value !== true ? {} : n.platform.is.mobile === true ? { onClick: a.onMobileClick } : { onMousedown: a.onActivate, onFocus: q, onBlur: a.onBlur, onKeydown: p, onKeyup: a.onKeyup });
  function g(y) {
    i.value !== e.modelValue && t("update:modelValue", i.value), y === true && t("change", i.value);
  }
  function w() {
    return r.value.getBoundingClientRect();
  }
  function S(y, b = l.dragging.value) {
    const _ = a.getDraggingRatio(y, b);
    i.value = a.convertRatioToModel(_), o.value = e.snap !== true || e.step === 0 ? _ : a.convertModelToRatio(i.value);
  }
  function q() {
    l.focus.value = true;
  }
  function p(y) {
    if (Vs.includes(y.keyCode) === false) return;
    je(y);
    const b = ([34, 33].includes(y.keyCode) ? 10 : 1) * l.keyStep.value, _ = ([34, 37, 40].includes(y.keyCode) ? -1 : 1) * (l.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * b;
    i.value = ct(l.roundValueFn.value(i.value + _), l.innerMin.value, l.innerMax.value), g();
  }
  return () => {
    const y = a.getContent(v, l.tabindex, m, (b) => {
      b.push(h());
    });
    return d("div", { ref: r, class: l.classes.value + (e.modelValue === null ? " q-slider--no-value" : ""), ...l.attributes.value, "aria-valuenow": e.modelValue }, y);
  };
} });
function Ym() {
  const e = U(!nn.value);
  return e.value === false && ft(() => {
    e.value = true;
  }), { isHydrated: e };
}
var Gm = typeof ResizeObserver < "u", ld = Gm === true ? {} : { style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;", url: "about:blank" }, jl = ve({ name: "QResizeObserver", props: { debounce: { type: [String, Number], default: 100 } }, emits: ["resize"], setup(e, { emit: t }) {
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
  if (i.trigger = r, Gm === true) {
    let u;
    const c = (s) => {
      l = i.$el.parentNode, l ? (u = new ResizeObserver(r), u.observe(l), o()) : s !== true && Ge(() => {
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
    const { isHydrated: s } = Ym();
    let v;
    return ft(() => {
      Ge(() => {
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
function Cp(e, t, n) {
  const l = n === true ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${t === true ? l[0] : l[1]}${e ? ` text-${e}` : ""}`;
}
var kp = ["left", "center", "right", "justify"], Ou = ve({ name: "QTabs", props: { modelValue: [Number, String], align: { type: String, default: "center", validator: (e) => kp.includes(e) }, breakpoint: { type: [String, Number], default: 600 }, vertical: Boolean, shrink: Boolean, stretch: Boolean, activeClass: String, activeColor: String, activeBgColor: String, indicatorColor: String, leftIcon: String, rightIcon: String, outsideArrows: Boolean, mobileArrows: Boolean, switchIndicator: Boolean, narrowIndicator: Boolean, inlineLabel: Boolean, noCaps: Boolean, dense: Boolean, contentClass: String, "onUpdate:modelValue": [Function, Array] }, setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, { registerTick: r } = ya(), { registerTick: o } = ya(), { registerTick: i } = ya(), { registerTimeout: u, removeTimeout: c } = Xn(), { registerTimeout: s, removeTimeout: v } = Xn(), h = U(null), m = U(null), g = U(e.modelValue), w = U(false), S = U(true), q = U(false), p = U(false), y = [], b = U(0), _ = U(false);
  let E = null, A = null, V;
  const L = f(() => ({ activeClass: e.activeClass, activeColor: e.activeColor, activeBgColor: e.activeBgColor, indicatorClass: Cp(e.indicatorColor, e.switchIndicator, e.vertical), narrowIndicator: e.narrowIndicator, inlineLabel: e.inlineLabel, noCaps: e.noCaps })), P = f(() => {
    const le = b.value, N = g.value;
    for (let oe = 0; oe < le; oe++) if (y[oe].name.value === N) return true;
    return false;
  }), F = f(() => `q-tabs__content--align-${w.value === true ? "left" : p.value === true ? "justify" : e.align}`), T = f(() => `q-tabs row no-wrap items-center q-tabs--${w.value === true ? "" : "not-"}scrollable q-tabs--${e.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${e.outsideArrows === true ? "outside" : "inside"} q-tabs--mobile-with${e.mobileArrows === true ? "" : "out"}-arrows` + (e.dense === true ? " q-tabs--dense" : "") + (e.shrink === true ? " col-shrink" : "") + (e.stretch === true ? " self-stretch" : "")), x = f(() => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + F.value + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), C = f(() => e.vertical === true ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" }), D = f(() => e.vertical !== true && a.lang.rtl === true), H = f(() => Sr === false && D.value === true);
  he(D, M), he(() => e.modelValue, (le) => {
    j({ name: le, setCurrent: true, skipEmit: true });
  }), he(() => e.outsideArrows, W);
  function j({ name: le, setCurrent: N, skipEmit: oe }) {
    g.value !== le && (oe !== true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", le), (N === true || e["onUpdate:modelValue"] === void 0) && (pe(g.value, le), g.value = le));
  }
  function W() {
    r(() => {
      h.value && te({ width: h.value.offsetWidth, height: h.value.offsetHeight });
    });
  }
  function te(le) {
    if (C.value === void 0 || m.value === null) return;
    const N = le[C.value.container], oe = Math.min(m.value[C.value.scroll], Array.prototype.reduce.call(m.value.children, (ke, qe) => ke + (qe[C.value.content] || 0), 0)), _e = N > 0 && oe > N;
    w.value = _e, _e === true && o(M), p.value = N < parseInt(e.breakpoint, 10);
  }
  function pe(le, N) {
    const oe = le != null && le !== "" ? y.find((ke) => ke.name.value === le) : null, _e = N != null && N !== "" ? y.find((ke) => ke.name.value === N) : null;
    if (ce === true) ce = false;
    else if (oe && _e) {
      const ke = oe.tabIndicatorRef.value, qe = _e.tabIndicatorRef.value;
      E !== null && (clearTimeout(E), E = null), ke.style.transition = "none", ke.style.transform = "none", qe.style.transition = "none", qe.style.transform = "none";
      const Me = ke.getBoundingClientRect(), He = qe.getBoundingClientRect();
      qe.style.transform = e.vertical === true ? `translate3d(0,${Me.top - He.top}px,0) scale3d(1,${He.height ? Me.height / He.height : 1},1)` : `translate3d(${Me.left - He.left}px,0,0) scale3d(${He.width ? Me.width / He.width : 1},1,1)`, i(() => {
        E = setTimeout(() => {
          E = null, qe.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)", qe.style.transform = "none";
        }, 70);
      });
    }
    _e && w.value === true && Q(_e.rootRef.value);
  }
  function Q(le) {
    const { left: N, width: oe, top: _e, height: ke } = m.value.getBoundingClientRect(), qe = le.getBoundingClientRect();
    let Me = e.vertical === true ? qe.top - _e : qe.left - N;
    if (Me < 0) {
      m.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.floor(Me), M();
      return;
    }
    Me += e.vertical === true ? qe.height - ke : qe.width - oe, Me > 0 && (m.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.ceil(Me), M());
  }
  function M() {
    const le = m.value;
    if (le === null) return;
    const N = le.getBoundingClientRect(), oe = e.vertical === true ? le.scrollTop : Math.abs(le.scrollLeft);
    D.value === true ? (S.value = Math.ceil(oe + N.width) < le.scrollWidth - 1, q.value = oe > 0) : (S.value = oe > 0, q.value = e.vertical === true ? Math.ceil(oe + N.height) < le.scrollHeight : Math.ceil(oe + N.width) < le.scrollWidth);
  }
  function ee(le) {
    A !== null && clearInterval(A), A = setInterval(() => {
      O(le) === true && B();
    }, 5);
  }
  function X() {
    ee(H.value === true ? Number.MAX_SAFE_INTEGER : 0);
  }
  function be() {
    ee(H.value === true ? 0 : Number.MAX_SAFE_INTEGER);
  }
  function B() {
    A !== null && (clearInterval(A), A = null);
  }
  function R(le, N) {
    const oe = Array.prototype.filter.call(m.value.children, (He) => He === N || He.matches && He.matches(".q-tab.q-focusable") === true), _e = oe.length;
    if (_e === 0) return;
    if (le === 36) return Q(oe[0]), oe[0].focus(), true;
    if (le === 35) return Q(oe[_e - 1]), oe[_e - 1].focus(), true;
    const ke = le === (e.vertical === true ? 38 : 37), qe = le === (e.vertical === true ? 40 : 39), Me = ke === true ? -1 : qe === true ? 1 : void 0;
    if (Me !== void 0) {
      const He = D.value === true ? -1 : 1, Ve = oe.indexOf(N) + Me * He;
      return Ve >= 0 && Ve < _e && (Q(oe[Ve]), oe[Ve].focus({ preventScroll: true })), true;
    }
  }
  const J = f(() => H.value === true ? { get: (le) => Math.abs(le.scrollLeft), set: (le, N) => {
    le.scrollLeft = -N;
  } } : e.vertical === true ? { get: (le) => le.scrollTop, set: (le, N) => {
    le.scrollTop = N;
  } } : { get: (le) => le.scrollLeft, set: (le, N) => {
    le.scrollLeft = N;
  } });
  function O(le) {
    const N = m.value, { get: oe, set: _e } = J.value;
    let ke = false, qe = oe(N);
    const Me = le < qe ? -1 : 1;
    return qe += Me * 5, qe < 0 ? (ke = true, qe = 0) : (Me === -1 && qe <= le || Me === 1 && qe >= le) && (ke = true, qe = le), _e(N, qe), M(), ke;
  }
  function re(le, N) {
    for (const oe in le) if (le[oe] !== N[oe]) return false;
    return true;
  }
  function we() {
    let le = null, N = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
    const oe = y.filter((Me) => {
      var _a2;
      return ((_a2 = Me.routeData) == null ? void 0 : _a2.hasRouterLink.value) === true;
    }), { hash: _e, query: ke } = l.$route, qe = Object.keys(ke).length;
    for (const Me of oe) {
      const He = Me.routeData.exact.value === true;
      if (Me.routeData[He === true ? "linkIsExactActive" : "linkIsActive"].value !== true) continue;
      const { hash: Ve, query: ie, matched: ge, href: ae } = Me.routeData.resolvedLink.value, ye = Object.keys(ie).length;
      if (He === true) {
        if (Ve !== _e || ye !== qe || re(ke, ie) === false) continue;
        le = Me.name.value;
        break;
      }
      if (Ve !== "" && Ve !== _e || ye !== 0 && re(ie, ke) === false) continue;
      const Ce = { matchedLen: ge.length, queryDiff: qe - ye, hrefLen: ae.length - Ve.length };
      if (Ce.matchedLen > N.matchedLen) {
        le = Me.name.value, N = Ce;
        continue;
      } else if (Ce.matchedLen !== N.matchedLen) continue;
      if (Ce.queryDiff < N.queryDiff) le = Me.name.value, N = Ce;
      else if (Ce.queryDiff !== N.queryDiff) continue;
      Ce.hrefLen > N.hrefLen && (le = Me.name.value, N = Ce);
    }
    if (le === null && y.some((Me) => Me.routeData === void 0 && Me.name.value === g.value) === true) {
      ce = false;
      return;
    }
    j({ name: le, setCurrent: true });
  }
  function k(le) {
    if (c(), _.value !== true && h.value !== null && le.target && typeof le.target.closest == "function") {
      const N = le.target.closest(".q-tab");
      N && h.value.contains(N) === true && (_.value = true, w.value === true && Q(N));
    }
  }
  function $() {
    u(() => {
      _.value = false;
    }, 30);
  }
  function z() {
    de.avoidRouteWatcher === false ? s(we) : v();
  }
  function Z() {
    if (V === void 0) {
      const le = he(() => l.$route.fullPath, z);
      V = () => {
        le(), V = void 0;
      };
    }
  }
  function ne(le) {
    y.push(le), b.value++, W(), le.routeData === void 0 || l.$route === void 0 ? s(() => {
      if (w.value === true) {
        const N = g.value, oe = N != null && N !== "" ? y.find((_e) => _e.name.value === N) : null;
        oe && Q(oe.rootRef.value);
      }
    }) : (Z(), le.routeData.hasRouterLink.value === true && z());
  }
  function K(le) {
    y.splice(y.indexOf(le), 1), b.value--, W(), V !== void 0 && le.routeData !== void 0 && (y.every((N) => N.routeData === void 0) === true && V(), z());
  }
  const de = { currentModel: g, tabProps: L, hasFocus: _, hasActiveTab: P, registerTab: ne, unregisterTab: K, verifyRouteModel: z, updateModel: j, onKbdNavigate: R, avoidRouteWatcher: false };
  hn(im, de);
  function me() {
    E !== null && clearTimeout(E), B(), V == null ? void 0 : V();
  }
  let fe, ce;
  return Ke(me), On(() => {
    fe = V !== void 0, me();
  }), wl(() => {
    fe === true && (Z(), ce = true, z()), W();
  }), () => d("div", { ref: h, class: T.value, role: "tablist", onFocusin: k, onFocusout: $ }, [d(jl, { onResize: te }), d("div", { ref: m, class: x.value, onScroll: M }, Pe(t.default)), d(et, { class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (S.value === true ? "" : " q-tabs__arrow--faded"), name: e.leftIcon || a.iconSet.tabs[e.vertical === true ? "up" : "left"], onMousedownPassive: X, onTouchstartPassive: X, onMouseupPassive: B, onMouseleavePassive: B, onTouchendPassive: B }), d(et, { class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (q.value === true ? "" : " q-tabs__arrow--faded"), name: e.rightIcon || a.iconSet.tabs[e.vertical === true ? "down" : "right"], onMousedownPassive: be, onTouchstartPassive: be, onMouseupPassive: B, onMouseleavePassive: B, onTouchendPassive: B })]);
} }), qp = 0, Xm = ["click", "keydown"], Zm = { icon: String, label: [Number, String], alert: [Boolean, String], alertIcon: String, name: { type: [Number, String], default: () => `t_${qp++}` }, noCaps: Boolean, tabindex: [String, Number], disable: Boolean, contentClass: String, ripple: { type: [Boolean, Object], default: true } };
function Jm(e, t, n, l) {
  const a = Tt(im, ot);
  if (a === ot) return console.error("QTab/QRouteTab component needs to be child of QTabs"), ot;
  const { proxy: r } = Se(), o = U(null), i = U(null), u = U(null), c = f(() => e.disable === true || e.ripple === false ? false : Object.assign({ keyCodes: [13, 32], early: true }, e.ripple === true ? {} : e.ripple)), s = f(() => a.currentModel.value === e.name), v = f(() => "q-tab relative-position self-stretch flex flex-center text-center" + (s.value === true ? " q-tab--active" + (a.tabProps.value.activeClass ? " " + a.tabProps.value.activeClass : "") + (a.tabProps.value.activeColor ? ` text-${a.tabProps.value.activeColor}` : "") + (a.tabProps.value.activeBgColor ? ` bg-${a.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (e.icon && e.label && a.tabProps.value.inlineLabel === false ? " q-tab--full" : "") + (e.noCaps === true || a.tabProps.value.noCaps === true ? " q-tab--no-caps" : "") + (e.disable === true ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (l !== void 0 ? l.linkClass.value : "")), h = f(() => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + (a.tabProps.value.inlineLabel === true ? "row no-wrap q-tab__content--inline" : "column") + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), m = f(() => e.disable === true || a.hasFocus.value === true || s.value === false && a.hasActiveTab.value === true ? -1 : e.tabindex || 0);
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
      const _ = (E = {}) => {
        let A;
        const V = E.to === void 0 || kn(E.to, e.to) === true ? a.avoidRouteWatcher = wr() : null;
        return l.navigateToRouterLink(y, { ...E, returnRouterError: true }).catch((L) => {
          A = L;
        }).then((L) => {
          var _a3;
          if (V === a.avoidRouteWatcher && (a.avoidRouteWatcher = false, A === void 0 && (L === void 0 || ((_a3 = L.message) == null ? void 0 : _a3.startsWith("Avoided redundant navigation")) === true) && a.updateModel({ name: e.name })), E.returnRouterError === true) return A !== void 0 ? Promise.reject(A) : L;
        });
      };
      n("click", y, _), y.defaultPrevented !== true && _();
      return;
    }
    n("click", y);
  }
  function w(y) {
    yn(y, [13, 32]) ? g(y, true) : Wl(y) !== true && y.keyCode >= 35 && y.keyCode <= 40 && y.altKey !== true && y.metaKey !== true && a.onKbdNavigate(y.keyCode, r.$el) === true && je(y), n("keydown", y);
  }
  function S() {
    const y = a.tabProps.value.narrowIndicator, b = [], _ = d("div", { ref: u, class: ["q-tab__indicator", a.tabProps.value.indicatorClass] });
    e.icon !== void 0 && b.push(d(et, { class: "q-tab__icon", name: e.icon })), e.label !== void 0 && b.push(d("div", { class: "q-tab__label" }, e.label)), e.alert !== false && b.push(e.alertIcon !== void 0 ? d(et, { class: "q-tab__alert-icon", color: e.alert !== true ? e.alert : void 0, name: e.alertIcon }) : d("div", { class: "q-tab__alert" + (e.alert !== true ? ` text-${e.alert}` : "") })), y === true && b.push(_);
    const E = [d("div", { class: "q-focus-helper", tabindex: -1, ref: o }), d("div", { class: h.value }, qt(t.default, b))];
    return y === false && E.push(_), E;
  }
  const q = { name: f(() => e.name), rootRef: i, tabIndicatorRef: u, routeData: l };
  Ke(() => {
    a.unregisterTab(q);
  }), ft(() => {
    a.registerTab(q);
  });
  function p(y, b) {
    const _ = { ref: i, class: v.value, tabindex: m.value, role: "tab", "aria-selected": s.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: g, onKeydown: w, ...b };
    return sn(d(y, _, S()), [[ri, c.value]]);
  }
  return { renderTab: p, $tabs: a };
}
var Va = ve({ name: "QTab", props: Zm, emits: Xm, setup(e, { slots: t, emit: n }) {
  const { renderTab: l } = Jm(e, t, n);
  return () => l("div");
} }), Tp = ve({ name: "QTabPanels", props: { ...As, ...nt }, emits: Rs, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), { updatePanelsList: a, getPanelContent: r, panelDirectives: o } = Ps(), i = f(() => "q-tab-panels q-panel-parent" + (l.value === true ? " q-tab-panels--dark q-dark" : ""));
  return () => (a(t), pn("div", { class: i.value }, r(), "pan", e.swipeable, () => o.value));
} }), Ii = ve({ name: "QTabPanel", props: $s, setup(e, { slots: t }) {
  return () => d("div", { class: "q-tab-panel", role: "tabpanel" }, Pe(t.default));
} }), ad = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, rd = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, od = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, Hr = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, jr = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, io = { date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e), time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e), fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e), timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e), email: (e) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e), hexColor: (e) => ad.test(e), hexaColor: (e) => rd.test(e), hexOrHexaColor: (e) => od.test(e), rgbColor: (e) => Hr.test(e), rgbaColor: (e) => jr.test(e), rgbOrRgbaColor: (e) => Hr.test(e) || jr.test(e), hexOrRgbColor: (e) => ad.test(e) || Hr.test(e), hexaOrRgbaColor: (e) => rd.test(e) || jr.test(e), anyColor: (e) => od.test(e) || Hr.test(e) || jr.test(e) }, Mp = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;
function id({ r: e, g: t, b: n, a: l }) {
  const a = l !== void 0;
  if (e = Math.round(e), t = Math.round(t), n = Math.round(n), e > 255 || t > 255 || n > 255 || a && l > 100) throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");
  return l = a ? (Math.round(255 * l / 100) | 256).toString(16).slice(1) : "", "#" + (n | t << 8 | e << 16 | 1 << 24).toString(16).slice(1) + l;
}
function ud({ r: e, g: t, b: n, a: l }) {
  return `rgb${l !== void 0 ? "a" : ""}(${e},${t},${n}${l !== void 0 ? "," + l / 100 : ""})`;
}
function eh(e) {
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
function th(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  const t = e.replace(/ /g, ""), n = Mp.exec(t);
  if (n === null) return eh(t);
  const l = { r: Math.min(255, parseInt(n[2], 10)), g: Math.min(255, parseInt(n[3], 10)), b: Math.min(255, parseInt(n[4], 10)) };
  if (n[1]) {
    const a = parseFloat(n[5]);
    l.a = Math.min(1, isNaN(a) === true ? 1 : a) * 100;
  }
  return l;
}
function Ep(e) {
  if (typeof e != "string" && (!e || e.r === void 0)) throw new TypeError("Expected a string or a {r, g, b} object as color");
  const t = typeof e == "string" ? th(e) : e, n = t.r / 255, l = t.g / 255, a = t.b / 255, r = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4), o = l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4), i = a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);
  return 0.2126 * r + 0.7152 * o + 0.0722 * i;
}
var $p = ["rgb(255,204,204)", "rgb(255,230,204)", "rgb(255,255,204)", "rgb(204,255,204)", "rgb(204,255,230)", "rgb(204,255,255)", "rgb(204,230,255)", "rgb(204,204,255)", "rgb(230,204,255)", "rgb(255,204,255)", "rgb(255,153,153)", "rgb(255,204,153)", "rgb(255,255,153)", "rgb(153,255,153)", "rgb(153,255,204)", "rgb(153,255,255)", "rgb(153,204,255)", "rgb(153,153,255)", "rgb(204,153,255)", "rgb(255,153,255)", "rgb(255,102,102)", "rgb(255,179,102)", "rgb(255,255,102)", "rgb(102,255,102)", "rgb(102,255,179)", "rgb(102,255,255)", "rgb(102,179,255)", "rgb(102,102,255)", "rgb(179,102,255)", "rgb(255,102,255)", "rgb(255,51,51)", "rgb(255,153,51)", "rgb(255,255,51)", "rgb(51,255,51)", "rgb(51,255,153)", "rgb(51,255,255)", "rgb(51,153,255)", "rgb(51,51,255)", "rgb(153,51,255)", "rgb(255,51,255)", "rgb(255,0,0)", "rgb(255,128,0)", "rgb(255,255,0)", "rgb(0,255,0)", "rgb(0,255,128)", "rgb(0,255,255)", "rgb(0,128,255)", "rgb(0,0,255)", "rgb(128,0,255)", "rgb(255,0,255)", "rgb(245,0,0)", "rgb(245,123,0)", "rgb(245,245,0)", "rgb(0,245,0)", "rgb(0,245,123)", "rgb(0,245,245)", "rgb(0,123,245)", "rgb(0,0,245)", "rgb(123,0,245)", "rgb(245,0,245)", "rgb(214,0,0)", "rgb(214,108,0)", "rgb(214,214,0)", "rgb(0,214,0)", "rgb(0,214,108)", "rgb(0,214,214)", "rgb(0,108,214)", "rgb(0,0,214)", "rgb(108,0,214)", "rgb(214,0,214)", "rgb(163,0,0)", "rgb(163,82,0)", "rgb(163,163,0)", "rgb(0,163,0)", "rgb(0,163,82)", "rgb(0,163,163)", "rgb(0,82,163)", "rgb(0,0,163)", "rgb(82,0,163)", "rgb(163,0,163)", "rgb(92,0,0)", "rgb(92,46,0)", "rgb(92,92,0)", "rgb(0,92,0)", "rgb(0,92,46)", "rgb(0,92,92)", "rgb(0,46,92)", "rgb(0,0,92)", "rgb(46,0,92)", "rgb(92,0,92)", "rgb(255,255,255)", "rgb(205,205,205)", "rgb(178,178,178)", "rgb(153,153,153)", "rgb(127,127,127)", "rgb(102,102,102)", "rgb(76,76,76)", "rgb(51,51,51)", "rgb(25,25,25)", "rgb(0,0,0)"], cd = "M5 5 h10 v10 h-10 v-10 z", Ap = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==";
ve({ name: "QColor", props: { ...nt, ...wn, modelValue: String, defaultValue: String, defaultView: { type: String, default: "spectrum", validator: (e) => ["spectrum", "tune", "palette"].includes(e) }, formatModel: { type: String, default: "auto", validator: (e) => ["auto", "hex", "rgb", "hexa", "rgba"].includes(e) }, palette: Array, noHeader: Boolean, noHeaderTabs: Boolean, noFooter: Boolean, square: Boolean, flat: Boolean, bordered: Boolean, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change"], setup(e, { emit: t }) {
  const { proxy: n } = Se(), { $q: l } = n, a = lt(e, l), { getCache: r } = Pr(), o = U(null), i = U(null), u = f(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("hex") !== -1), c = f(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1), s = U(e.formatModel === "auto" ? e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#") ? "hex" : "rgb" : e.formatModel.startsWith("hex") ? "hex" : "rgb"), v = U(e.defaultView), h = U(T(e.modelValue || e.defaultValue)), m = f(() => e.disable !== true && e.readonly !== true), g = f(() => e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#")), w = f(() => u.value !== null ? u.value : g.value), S = f(() => ({ type: "hidden", name: e.name, value: h.value[w.value === true ? "hex" : "rgb"] })), q = xl(S), p = f(() => c.value !== null ? c.value : h.value.a !== void 0), y = f(() => ({ backgroundColor: h.value.rgb || "#000" })), b = f(() => `q-color-picker__header-content q-color-picker__header-content--${(h.value.a !== void 0 && h.value.a < 65 ? true : Ep(h.value) > 0.4) ? "light" : "dark"}`), _ = f(() => ({ background: `hsl(${h.value.h},100%,50%)` })), E = f(() => ({ top: `${100 - h.value.v}%`, [l.lang.rtl === true ? "right" : "left"]: `${h.value.s}%` })), A = f(() => e.palette !== void 0 && e.palette.length !== 0 ? e.palette : $p), V = f(() => "q-color-picker" + (e.bordered === true ? " q-color-picker--bordered" : "") + (e.square === true ? " q-color-picker--square no-border-radius" : "") + (e.flat === true ? " q-color-picker--flat no-shadow" : "") + (e.disable === true ? " disabled" : "") + (a.value === true ? " q-color-picker--dark q-dark" : "")), L = f(() => e.disable === true ? { "aria-disabled": "true" } : {}), P = f(() => [[gn, te, void 0, { prevent: true, stop: true, mouse: true }]]);
  he(() => e.modelValue, (k) => {
    const $ = T(k || e.defaultValue);
    $.hex !== h.value.hex && (h.value = $);
  }), he(() => e.defaultValue, (k) => {
    if (!e.modelValue && k) {
      const $ = T(k);
      $.hex !== h.value.hex && (h.value = $);
    }
  });
  function F(k, $) {
    h.value.hex = id(k), h.value.rgb = ud(k), h.value.r = k.r, h.value.g = k.g, h.value.b = k.b, h.value.a = k.a;
    const z = h.value[w.value === true ? "hex" : "rgb"];
    t("update:modelValue", z), $ === true && t("change", z);
  }
  function T(k) {
    const $ = c.value !== void 0 ? c.value : e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1;
    if (typeof k != "string" || k.length === 0 || io.anyColor(k.replace(/ /g, "")) !== true) return { h: 0, s: 0, v: 0, r: 0, g: 0, b: 0, a: $ === true ? 100 : void 0, hex: void 0, rgb: void 0 };
    const z = th(k);
    return $ === true && z.a === void 0 && (z.a = 100), z.hex = id(z), z.rgb = ud(z), Object.assign(z, zi(z));
  }
  function x(k, $, z) {
    const Z = o.value;
    if (Z === null) return;
    const ne = Z.clientWidth, K = Z.clientHeight, de = Z.getBoundingClientRect();
    let me = Math.min(ne, Math.max(0, k - de.left));
    l.lang.rtl === true && (me = ne - me);
    const fe = Math.min(K, Math.max(0, $ - de.top)), ce = Math.round(100 * me / ne), le = Math.round(100 * Math.max(0, Math.min(1, -(fe / K) + 1))), N = sd({ h: h.value.h, s: ce, v: le, a: p.value === true ? h.value.a : void 0 });
    h.value.s = ce, h.value.v = le, F(N, z);
  }
  function C(k, $) {
    const z = Math.round(k), Z = sd({ h: z, s: h.value.s, v: h.value.v, a: p.value === true ? h.value.a : void 0 });
    h.value.h = z, F(Z, $);
  }
  function D(k) {
    C(k, true);
  }
  function H(k, $, z, Z, ne) {
    if (Z !== void 0 && wt(Z), !/^[0-9]+$/.test(k)) {
      ne === true && n.$forceUpdate();
      return;
    }
    const K = Math.floor(Number(k));
    if (K < 0 || K > z) {
      ne === true && n.$forceUpdate();
      return;
    }
    const de = { r: $ === "r" ? K : h.value.r, g: $ === "g" ? K : h.value.g, b: $ === "b" ? K : h.value.b, a: p.value === true ? $ === "a" ? K : h.value.a : void 0 };
    if ($ !== "a") {
      const me = zi(de);
      h.value.h = me.h, h.value.s = me.s, h.value.v = me.v;
    }
    if (F(de, ne), ne !== true && (Z == null ? void 0 : Z.target.selectionEnd) !== void 0) {
      const me = Z.target.selectionEnd;
      Ge(() => {
        Z.target.setSelectionRange(me, me);
      });
    }
  }
  function j(k, $) {
    let z;
    const Z = k.target.value;
    if (wt(k), s.value === "hex") {
      if (Z.length !== (p.value === true ? 9 : 7) || !/^#[0-9A-Fa-f]+$/.test(Z)) return true;
      z = eh(Z);
    } else {
      let K;
      if (Z.endsWith(")")) if (p.value !== true && Z.startsWith("rgb(")) {
        if (K = Z.substring(4, Z.length - 1).split(",").map((de) => parseInt(de, 10)), K.length !== 3 || !/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(Z)) return true;
      } else if (p.value === true && Z.startsWith("rgba(")) {
        if (K = Z.substring(5, Z.length - 1).split(","), K.length !== 4 || !/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(Z)) return true;
        for (let me = 0; me < 3; me++) {
          const fe = parseInt(K[me], 10);
          if (fe < 0 || fe > 255) return true;
          K[me] = fe;
        }
        const de = parseFloat(K[3]);
        if (de < 0 || de > 1) return true;
        K[3] = de;
      } else return true;
      else return true;
      if (K[0] < 0 || K[0] > 255 || K[1] < 0 || K[1] > 255 || K[2] < 0 || K[2] > 255 || p.value === true && (K[3] < 0 || K[3] > 1)) return true;
      z = { r: K[0], g: K[1], b: K[2], a: p.value === true ? K[3] * 100 : void 0 };
    }
    const ne = zi(z);
    if (h.value.h = ne.h, h.value.s = ne.s, h.value.v = ne.v, F(z, $), $ !== true) {
      const K = k.target.selectionEnd;
      Ge(() => {
        k.target.setSelectionRange(K, K);
      });
    }
  }
  function W(k) {
    const $ = T(k), z = { r: $.r, g: $.g, b: $.b, a: $.a };
    z.a === void 0 && (z.a = h.value.a), h.value.h = $.h, h.value.s = $.s, h.value.v = $.v, F(z, true);
  }
  function te(k) {
    k.isFinal ? x(k.position.left, k.position.top, true) : pe(k);
  }
  const pe = pm((k) => {
    x(k.position.left, k.position.top);
  }, 20);
  function Q(k) {
    x(k.pageX - window.pageXOffset, k.pageY - window.pageYOffset, true);
  }
  function M(k) {
    x(k.pageX - window.pageXOffset, k.pageY - window.pageYOffset);
  }
  function ee(k) {
    i.value !== null && (i.value.$el.style.opacity = k ? 1 : 0);
  }
  function X(k) {
    s.value = k;
  }
  function be() {
    const k = [];
    return e.noHeaderTabs !== true && k.push(d(Ou, { class: "q-color-picker__header-tabs", modelValue: s.value, dense: true, align: "justify", "onUpdate:modelValue": X }, () => [d(Va, { label: "HEX" + (p.value === true ? "A" : ""), name: "hex", ripple: false }), d(Va, { label: "RGB" + (p.value === true ? "A" : ""), name: "rgb", ripple: false })])), k.push(d("div", { class: "q-color-picker__header-banner row flex-center no-wrap" }, [d("input", { class: "fit", value: h.value[s.value], ...m.value !== true ? { readonly: true } : {}, ...r("topIn", { onInput: ($) => {
      ee(j($) === true);
    }, onChange: wt, onBlur: ($) => {
      j($, true) === true && n.$forceUpdate(), ee(false);
    } }) }), d(et, { ref: i, class: "q-color-picker__error-icon absolute no-pointer-events", name: l.iconSet.type.negative })])), d("div", { class: "q-color-picker__header relative-position overflow-hidden" }, [d("div", { class: "q-color-picker__header-bg absolute-full" }), d("div", { class: b.value, style: y.value }, k)]);
  }
  function B() {
    return d(Tp, { modelValue: v.value, animated: true }, () => [d(Ii, { class: "q-color-picker__spectrum-tab overflow-hidden", name: "spectrum" }, O), d(Ii, { class: "q-pa-md q-color-picker__tune-tab", name: "tune" }, re), d(Ii, { class: "q-color-picker__palette-tab", name: "palette" }, we)]);
  }
  function R(k) {
    v.value = k;
  }
  function J() {
    return d("div", { class: "q-color-picker__footer relative-position overflow-hidden" }, [d(Ou, { class: "absolute-full", modelValue: v.value, dense: true, align: "justify", "onUpdate:modelValue": R }, () => [d(Va, { icon: l.iconSet.colorPicker.spectrum, name: "spectrum", ripple: false }), d(Va, { icon: l.iconSet.colorPicker.tune, name: "tune", ripple: false }), d(Va, { icon: l.iconSet.colorPicker.palette, name: "palette", ripple: false })])]);
  }
  function O() {
    const k = { ref: o, class: "q-color-picker__spectrum non-selectable relative-position cursor-pointer" + (m.value !== true ? " readonly" : ""), style: _.value, ...m.value === true ? { onClick: Q, onMousedown: M } : {} }, $ = [d("div", { style: { paddingBottom: "100%" } }), d("div", { class: "q-color-picker__spectrum-white absolute-full" }), d("div", { class: "q-color-picker__spectrum-black absolute-full" }), d("div", { class: "absolute", style: E.value }, [h.value.hex !== void 0 ? d("div", { class: "q-color-picker__spectrum-circle" }) : null])], z = [d(ta, { class: "q-color-picker__hue non-selectable", modelValue: h.value.h, min: 0, max: 360, trackSize: "8px", innerTrackColor: "transparent", selectionColor: "transparent", readonly: m.value !== true, thumbPath: cd, "onUpdate:modelValue": C, onChange: D })];
    return p.value === true && z.push(d(ta, { class: "q-color-picker__alpha non-selectable", modelValue: h.value.a, min: 0, max: 100, trackSize: "8px", trackColor: "white", innerTrackColor: "transparent", selectionColor: "transparent", trackImg: Ap, readonly: m.value !== true, hideSelection: true, thumbPath: cd, ...r("alphaSlide", { "onUpdate:modelValue": (Z) => H(Z, "a", 100), onChange: (Z) => H(Z, "a", 100, void 0, true) }) })), [pn("div", k, $, "spec", m.value, () => P.value), d("div", { class: "q-color-picker__sliders" }, z)];
  }
  function re() {
    return [d("div", { class: "row items-center no-wrap" }, [d("div", "R"), d(ta, { modelValue: h.value.r, min: 0, max: 255, color: "red", dark: a.value, readonly: m.value !== true, ...r("rSlide", { "onUpdate:modelValue": (k) => H(k, "r", 255), onChange: (k) => H(k, "r", 255, void 0, true) }) }), d("input", { value: h.value.r, maxlength: 3, readonly: m.value !== true, onChange: wt, ...r("rIn", { onInput: (k) => H(k.target.value, "r", 255, k), onBlur: (k) => H(k.target.value, "r", 255, k, true) }) })]), d("div", { class: "row items-center no-wrap" }, [d("div", "G"), d(ta, { modelValue: h.value.g, min: 0, max: 255, color: "green", dark: a.value, readonly: m.value !== true, ...r("gSlide", { "onUpdate:modelValue": (k) => H(k, "g", 255), onChange: (k) => H(k, "g", 255, void 0, true) }) }), d("input", { value: h.value.g, maxlength: 3, readonly: m.value !== true, onChange: wt, ...r("gIn", { onInput: (k) => H(k.target.value, "g", 255, k), onBlur: (k) => H(k.target.value, "g", 255, k, true) }) })]), d("div", { class: "row items-center no-wrap" }, [d("div", "B"), d(ta, { modelValue: h.value.b, min: 0, max: 255, color: "blue", readonly: m.value !== true, dark: a.value, ...r("bSlide", { "onUpdate:modelValue": (k) => H(k, "b", 255), onChange: (k) => H(k, "b", 255, void 0, true) }) }), d("input", { value: h.value.b, maxlength: 3, readonly: m.value !== true, onChange: wt, ...r("bIn", { onInput: (k) => H(k.target.value, "b", 255, k), onBlur: (k) => H(k.target.value, "b", 255, k, true) }) })]), p.value === true ? d("div", { class: "row items-center no-wrap" }, [d("div", "A"), d(ta, { modelValue: h.value.a, color: "grey", readonly: m.value !== true, dark: a.value, ...r("aSlide", { "onUpdate:modelValue": (k) => H(k, "a", 100), onChange: (k) => H(k, "a", 100, void 0, true) }) }), d("input", { value: h.value.a, maxlength: 3, readonly: m.value !== true, onChange: wt, ...r("aIn", { onInput: (k) => H(k.target.value, "a", 100, k), onBlur: (k) => H(k.target.value, "a", 100, k, true) }) })]) : null];
  }
  function we() {
    const k = ($) => d("div", { class: "q-color-picker__cube col-auto", style: { backgroundColor: $ }, ...m.value === true ? r("palette#" + $, { onClick: () => {
      W($);
    } }) : {} });
    return [d("div", { class: "row items-center q-color-picker__palette-rows" + (m.value === true ? " q-color-picker__palette-rows--editable" : "") }, A.value.map(k))];
  }
  return () => {
    const k = [B()];
    return e.name !== void 0 && e.disable !== true && q(k, "push"), e.noHeader !== true && k.unshift(be()), e.noFooter !== true && k.push(J()), d("div", { class: V.value, ...L.value }, k);
  };
} });
var vl = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
function Rp(e, t, n) {
  return Object.prototype.toString.call(e) === "[object Date]" && (n = e.getDate(), t = e.getMonth() + 1, e = e.getFullYear()), Fp(Is(e, t, n));
}
function dd(e, t, n) {
  return lh(Bp(e, t, n));
}
function Pp(e) {
  return Lp(e) === 0;
}
function uo(e, t) {
  return t <= 6 ? 31 : t <= 11 || Pp(e) ? 30 : 29;
}
function Lp(e) {
  const t = vl.length;
  let n = vl[0], l, a, r, o, i;
  if (e < n || e >= vl[t - 1]) throw new Error("Invalid Jalaali year " + e);
  for (i = 1; i < t && (l = vl[i], a = l - n, !(e < l)); i += 1) n = l;
  return o = e - n, a - o < 6 && (o = o - a + _t(a + 4, 33) * 33), r = on(on(o + 1, 33) - 1, 4), r === -1 && (r = 4), r;
}
function nh(e, t) {
  const n = vl.length, l = e + 621;
  let a = -14, r = vl[0], o, i, u, c, s;
  if (e < r || e >= vl[n - 1]) throw new Error("Invalid Jalaali year " + e);
  for (s = 1; s < n && (o = vl[s], i = o - r, !(e < o)); s += 1) a = a + _t(i, 33) * 8 + _t(on(i, 33), 4), r = o;
  c = e - r, a = a + _t(c, 33) * 8 + _t(on(c, 33) + 3, 4), on(i, 33) === 4 && i - c === 4 && (a += 1);
  const v = _t(l, 4) - _t((_t(l, 100) + 1) * 3, 4) - 150, h = 20 + a - v;
  return t || (i - c < 6 && (c = c - i + _t(i + 4, 33) * 33), u = on(on(c + 1, 33) - 1, 4), u === -1 && (u = 4)), { leap: u, gy: l, march: h };
}
function Bp(e, t, n) {
  const l = nh(e, true);
  return Is(l.gy, 3, l.march) + (t - 1) * 31 - _t(t, 7) * (t - 7) + n - 1;
}
function Fp(e) {
  const t = lh(e).gy;
  let n = t - 621, l, a, r;
  const o = nh(n, false), i = Is(t, 3, o.march);
  if (r = e - i, r >= 0) {
    if (r <= 185) return a = 1 + _t(r, 31), l = on(r, 31) + 1, { jy: n, jm: a, jd: l };
    r -= 186;
  } else n -= 1, r += 179, o.leap === 1 && (r += 1);
  return a = 7 + _t(r, 30), l = on(r, 30) + 1, { jy: n, jm: a, jd: l };
}
function Is(e, t, n) {
  let l = _t((e + _t(t - 8, 6) + 100100) * 1461, 4) + _t(153 * on(t + 9, 12) + 2, 5) + n - 34840408;
  return l = l - _t(_t(e + 100100 + _t(t - 8, 6), 100) * 3, 4) + 752, l;
}
function lh(e) {
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
var Op = ["gregorian", "persian"], Oo = { mask: { type: String }, locale: Object, calendar: { type: String, validator: (e) => Op.includes(e), default: "gregorian" }, landscape: Boolean, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, readonly: Boolean, disable: Boolean }, ah = ["update:modelValue"];
function jn(e) {
  return e.year + "/" + rt(e.month) + "/" + rt(e.day);
}
function rh(e, t) {
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
      const s = Rp(u);
      return { year: s.jy, month: s.jm, day: s.jd };
    }
    return { year: u.getFullYear(), month: u.getMonth() + 1, day: u.getDate(), hour: c, minute: c, second: c, millisecond: c };
  }
  return { editable: n, tabindex: l, headerClass: a, getLocale: r, getCurrentDate: o };
}
var oh = 864e5, Vp = 36e5, Vu = 6e4, ih = "YYYY-MM-DDTHH:mm:ss.SSSZ", Ip = /\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g, zp = /(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g, Di = {};
function Dp(e, t) {
  const n = "(" + t.days.join("|") + ")", l = e + n;
  if (Di[l] !== void 0) return Di[l];
  const a = "(" + t.daysShort.join("|") + ")", r = "(" + t.months.join("|") + ")", o = "(" + t.monthsShort.join("|") + ")", i = {};
  let u = 0;
  const c = e.replace(zp, (v) => {
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
function uh(e, t) {
  return e !== void 0 ? e : t !== void 0 ? t.date : qu.date;
}
function fd(e, t = "") {
  const n = e > 0 ? "-" : "+", l = Math.abs(e), a = Math.floor(l / 60), r = l % 60;
  return n + rt(a) + t + rt(r);
}
function Ka(e, t, n, l, a) {
  const r = { year: null, month: null, day: null, hour: null, minute: null, second: null, millisecond: null, timezoneOffset: null, dateHash: null, timeHash: null };
  if (a !== void 0 && Object.assign(r, a), e == null || e === "" || typeof e != "string") return r;
  t === void 0 && (t = ih);
  const o = uh(n, ni.props), i = o.months, u = o.monthsShort, { regex: c, map: s } = Dp(t, o), v = e.match(c);
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
      const m = l !== "persian" ? new Date(r.year, r.month, 0).getDate() : uo(r.year, r.month);
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
  const a = (t - n) / (oh * 7);
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
function sh(e, t, n = "days") {
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
      return Ur(Un(l, "day"), Un(a, "day"), oh);
    case "hours":
    case "hour":
      return Ur(Un(l, "hour"), Un(a, "hour"), Vp);
    case "minutes":
    case "minute":
      return Ur(Un(l, "minute"), Un(a, "minute"), Vu);
    case "seconds":
    case "second":
      return Ur(Un(l, "second"), Un(a, "second"), 1e3);
  }
}
function Hi(e) {
  return sh(e, Un(e, "year"), "days") + 1;
}
function na(e) {
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
  return na(e.getMonth() + 1);
}, MM(e) {
  return rt(e.getMonth() + 1);
}, MMM(e, t) {
  return t.monthsShort[e.getMonth()];
}, MMMM(e, t) {
  return t.months[e.getMonth()];
}, Q(e) {
  return Math.ceil((e.getMonth() + 1) / 3);
}, Qo(e) {
  return na(this.Q(e));
}, D(e) {
  return e.getDate();
}, Do(e) {
  return na(e.getDate());
}, DD(e) {
  return rt(e.getDate());
}, DDD(e) {
  return Hi(e);
}, DDDo(e) {
  return na(Hi(e));
}, DDDD(e) {
  return rt(Hi(e), 3);
}, d(e) {
  return e.getDay();
}, do(e) {
  return na(e.getDay());
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
  return na(Ni(e));
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
function ch(e, t, n, l, a) {
  if (e !== 0 && !e || e === 1 / 0 || e === -1 / 0) return;
  const r = new Date(e);
  if (isNaN(r)) return;
  t === void 0 && (t = ih);
  const o = uh(n, ni.props);
  return t.replace(Ip, (i, u) => i in vd ? vd[i](r, o, l, a) : u === void 0 ? i : u.split("\\]").join("]"));
}
var Dn = 20, Np = ["Calendar", "Years", "Months"], md = (e) => Np.includes(e), ji = (e) => /^-?[\d]+\/[0-1]\d$/.test(e), la = " \u2014 ";
function ll(e) {
  return e.year + "/" + rt(e.month);
}
ve({ name: "QDate", props: { ...Oo, ...wn, ...nt, modelValue: { required: true, validator: (e) => typeof e == "string" || Array.isArray(e) === true || Object(e) === e || e === null }, multiple: Boolean, range: Boolean, title: String, subtitle: String, mask: { ...Oo.mask, default: "YYYY/MM/DD" }, defaultYearMonth: { type: String, validator: ji }, yearsInMonthView: Boolean, events: [Array, Function], eventColor: [String, Function], emitImmediately: Boolean, options: [Array, Function], navigationMinYearMonth: { type: String, validator: ji }, navigationMaxYearMonth: { type: String, validator: ji }, noUnset: Boolean, firstDayOfWeek: [String, Number], todayBtn: Boolean, minimal: Boolean, defaultView: { type: String, default: "Calendar", validator: md } }, emits: [...ah, "rangeStart", "rangeEnd", "navigation"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = lt(e, a), { getCache: o } = Pr(), { tabindex: i, headerClass: u, getLocale: c, getCurrentDate: s } = rh(e, a);
  let v;
  const h = Rr(e), m = xl(h), g = U(null), w = U(He()), S = U(c()), q = f(() => He()), p = f(() => c()), y = f(() => s()), b = U(ie(w.value, S.value)), _ = U(e.defaultView), E = f(() => a.lang.rtl === true ? "right" : "left"), A = U(E.value), V = U(E.value), L = b.value.year, P = U(L - L % Dn - (L < 0 ? Dn : 0)), F = U(null), T = f(() => {
    const I = e.landscape === true ? "landscape" : "portrait";
    return `q-date q-date--${I} q-date--${I}-${e.minimal === true ? "minimal" : "standard"}` + (r.value === true ? " q-date--dark q-dark" : "") + (e.bordered === true ? " q-date--bordered" : "") + (e.square === true ? " q-date--square no-border-radius" : "") + (e.flat === true ? " q-date--flat no-shadow" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-date--readonly" : "");
  }), x = f(() => e.color || "primary"), C = f(() => e.textColor || "white"), D = f(() => e.emitImmediately === true && e.multiple !== true && e.range !== true), H = f(() => Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue !== null && e.modelValue !== void 0 ? [e.modelValue] : []), j = f(() => H.value.filter((I) => typeof I == "string").map((I) => Ve(I, w.value, S.value)).filter((I) => I.dateHash !== null && I.day !== null && I.month !== null && I.year !== null)), W = f(() => {
    const I = (Y) => Ve(Y, w.value, S.value);
    return H.value.filter((Y) => Rt(Y) === true && Y.from !== void 0 && Y.to !== void 0).map((Y) => ({ from: I(Y.from), to: I(Y.to) })).filter((Y) => Y.from.dateHash !== null && Y.to.dateHash !== null && Y.from.dateHash < Y.to.dateHash);
  }), te = f(() => e.calendar !== "persian" ? (I) => new Date(I.year, I.month - 1, I.day) : (I) => {
    const Y = dd(I.year, I.month, I.day);
    return new Date(Y.gy, Y.gm - 1, Y.gd);
  }), pe = f(() => e.calendar === "persian" ? jn : (I, Y, se) => ch(new Date(I.year, I.month - 1, I.day, I.hour, I.minute, I.second, I.millisecond), Y === void 0 ? w.value : Y, se === void 0 ? S.value : se, I.year, I.timezoneOffset)), Q = f(() => j.value.length + W.value.reduce((I, Y) => I + 1 + sh(te.value(Y.to), te.value(Y.from)), 0)), M = f(() => {
    if (e.title !== void 0 && e.title !== null && e.title.length !== 0) return e.title;
    if (F.value !== null) {
      const se = F.value.init, Te = te.value(se);
      return S.value.daysShort[Te.getDay()] + ", " + S.value.monthsShort[se.month - 1] + " " + se.day + la + "?";
    }
    if (Q.value === 0) return la;
    if (Q.value > 1) return `${Q.value} ${S.value.pluralDay}`;
    const I = j.value[0], Y = te.value(I);
    return isNaN(Y.valueOf()) === true ? la : S.value.headerTitle !== void 0 ? S.value.headerTitle(Y, I) : S.value.daysShort[Y.getDay()] + ", " + S.value.monthsShort[I.month - 1] + " " + I.day;
  }), ee = f(() => j.value.concat(W.value.map((Y) => Y.from)).sort((Y, se) => Y.year - se.year || Y.month - se.month)[0]), X = f(() => j.value.concat(W.value.map((Y) => Y.to)).sort((Y, se) => se.year - Y.year || se.month - Y.month)[0]), be = f(() => {
    if (e.subtitle !== void 0 && e.subtitle !== null && e.subtitle.length !== 0) return e.subtitle;
    if (Q.value === 0) return la;
    if (Q.value > 1) {
      const I = ee.value, Y = X.value, se = S.value.monthsShort;
      return se[I.month - 1] + (I.year !== Y.year ? " " + I.year + la + se[Y.month - 1] + " " : I.month !== Y.month ? la + se[Y.month - 1] : "") + " " + Y.year;
    }
    return j.value[0].year;
  }), B = f(() => {
    const I = [a.iconSet.datetime.arrowLeft, a.iconSet.datetime.arrowRight];
    return a.lang.rtl === true ? I.reverse() : I;
  }), R = f(() => e.firstDayOfWeek !== void 0 ? Number(e.firstDayOfWeek) : S.value.firstDayOfWeek), J = f(() => {
    const I = S.value.daysShort, Y = R.value;
    return Y > 0 ? I.slice(Y, 7).concat(I.slice(0, Y)) : I;
  }), O = f(() => {
    const I = b.value;
    return e.calendar !== "persian" ? new Date(I.year, I.month, 0).getDate() : uo(I.year, I.month);
  }), re = f(() => typeof e.eventColor == "function" ? e.eventColor : () => e.eventColor), we = f(() => {
    if (e.navigationMinYearMonth === void 0) return null;
    const I = e.navigationMinYearMonth.split("/");
    return { year: parseInt(I[0], 10), month: parseInt(I[1], 10) };
  }), k = f(() => {
    if (e.navigationMaxYearMonth === void 0) return null;
    const I = e.navigationMaxYearMonth.split("/");
    return { year: parseInt(I[0], 10), month: parseInt(I[1], 10) };
  }), $ = f(() => {
    const I = { month: { prev: true, next: true }, year: { prev: true, next: true } };
    return we.value !== null && we.value.year >= b.value.year && (I.year.prev = false, we.value.year === b.value.year && we.value.month >= b.value.month && (I.month.prev = false)), k.value !== null && k.value.year <= b.value.year && (I.year.next = false, k.value.year === b.value.year && k.value.month <= b.value.month && (I.month.next = false)), I;
  }), z = f(() => {
    const I = {};
    return j.value.forEach((Y) => {
      const se = ll(Y);
      I[se] === void 0 && (I[se] = []), I[se].push(Y.day);
    }), I;
  }), Z = f(() => {
    const I = {};
    return W.value.forEach((Y) => {
      const se = ll(Y.from), Te = ll(Y.to);
      if (I[se] === void 0 && (I[se] = []), I[se].push({ from: Y.from.day, to: se === Te ? Y.to.day : void 0, range: Y }), se < Te) {
        let Ee;
        const { year: Xe, month: Le } = Y.from, De = Le < 12 ? { year: Xe, month: Le + 1 } : { year: Xe + 1, month: 1 };
        for (; (Ee = ll(De)) <= Te; ) I[Ee] === void 0 && (I[Ee] = []), I[Ee].push({ from: void 0, to: Ee === Te ? Y.to.day : void 0, range: Y }), De.month++, De.month > 12 && (De.year++, De.month = 1);
      }
    }), I;
  }), ne = f(() => {
    if (F.value === null) return;
    const { init: I, initHash: Y, final: se, finalHash: Te } = F.value, [Ee, Xe] = Y <= Te ? [I, se] : [se, I], Le = ll(Ee), De = ll(Xe);
    if (Le !== K.value && De !== K.value) return;
    const at = {};
    return Le === K.value ? (at.from = Ee.day, at.includeFrom = true) : at.from = 1, De === K.value ? (at.to = Xe.day, at.includeTo = true) : at.to = O.value, at;
  }), K = f(() => ll(b.value)), de = f(() => {
    const I = {};
    if (e.options === void 0) {
      for (let se = 1; se <= O.value; se++) I[se] = true;
      return I;
    }
    const Y = typeof e.options == "function" ? e.options : (se) => e.options.includes(se);
    for (let se = 1; se <= O.value; se++) {
      const Te = K.value + "/" + rt(se);
      I[se] = Y(Te);
    }
    return I;
  }), me = f(() => {
    const I = {};
    if (e.events === void 0) for (let Y = 1; Y <= O.value; Y++) I[Y] = false;
    else {
      const Y = typeof e.events == "function" ? e.events : (se) => e.events.includes(se);
      for (let se = 1; se <= O.value; se++) {
        const Te = K.value + "/" + rt(se);
        I[se] = Y(Te) === true && re.value(Te);
      }
    }
    return I;
  }), fe = f(() => {
    let I, Y;
    const { year: se, month: Te } = b.value;
    if (e.calendar !== "persian") I = new Date(se, Te - 1, 1), Y = new Date(se, Te - 1, 0).getDate();
    else {
      const Ee = dd(se, Te, 1);
      I = new Date(Ee.gy, Ee.gm - 1, Ee.gd);
      let Xe = Te - 1, Le = se;
      Xe === 0 && (Xe = 12, Le--), Y = uo(Le, Xe);
    }
    return { days: I.getDay() - R.value - 1, endDay: Y };
  }), ce = f(() => {
    const I = [], { days: Y, endDay: se } = fe.value, Te = Y < 0 ? Y + 7 : Y;
    if (Te < 6) for (let Le = se - Te; Le <= se; Le++) I.push({ i: Le, fill: true });
    const Ee = I.length;
    for (let Le = 1; Le <= O.value; Le++) {
      const De = { i: Le, event: me.value[Le], classes: [] };
      de.value[Le] === true && (De.in = true, De.flat = true), I.push(De);
    }
    if (z.value[K.value] !== void 0 && z.value[K.value].forEach((Le) => {
      const De = Ee + Le - 1;
      Object.assign(I[De], { selected: true, unelevated: true, flat: false, color: x.value, textColor: C.value });
    }), Z.value[K.value] !== void 0 && Z.value[K.value].forEach((Le) => {
      if (Le.from !== void 0) {
        const De = Ee + Le.from - 1, at = Ee + (Le.to || O.value) - 1;
        for (let cn = De; cn <= at; cn++) Object.assign(I[cn], { range: Le.range, unelevated: true, color: x.value, textColor: C.value });
        Object.assign(I[De], { rangeFrom: true, flat: false }), Le.to !== void 0 && Object.assign(I[at], { rangeTo: true, flat: false });
      } else if (Le.to !== void 0) {
        const De = Ee + Le.to - 1;
        for (let at = Ee; at <= De; at++) Object.assign(I[at], { range: Le.range, unelevated: true, color: x.value, textColor: C.value });
        Object.assign(I[De], { flat: false, rangeTo: true });
      } else {
        const De = Ee + O.value - 1;
        for (let at = Ee; at <= De; at++) Object.assign(I[at], { range: Le.range, unelevated: true, color: x.value, textColor: C.value });
      }
    }), ne.value !== void 0) {
      const Le = Ee + ne.value.from - 1, De = Ee + ne.value.to - 1;
      for (let at = Le; at <= De; at++) I[at].color = x.value, I[at].editRange = true;
      ne.value.includeFrom === true && (I[Le].editRangeFrom = true), ne.value.includeTo === true && (I[De].editRangeTo = true);
    }
    b.value.year === y.value.year && b.value.month === y.value.month && (I[Ee + y.value.day - 1].today = true);
    const Xe = I.length % 7;
    if (Xe > 0) {
      const Le = 7 - Xe;
      for (let De = 1; De <= Le; De++) I.push({ i: De, fill: true });
    }
    return I.forEach((Le) => {
      let De = "q-date__calendar-item ";
      Le.fill === true ? De += "q-date__calendar-item--fill" : (De += `q-date__calendar-item--${Le.in === true ? "in" : "out"}`, Le.range !== void 0 && (De += ` q-date__range${Le.rangeTo === true ? "-to" : Le.rangeFrom === true ? "-from" : ""}`), Le.editRange === true && (De += ` q-date__edit-range${Le.editRangeFrom === true ? "-from" : ""}${Le.editRangeTo === true ? "-to" : ""}`), (Le.range !== void 0 || Le.editRange === true) && (De += ` text-${Le.color}`)), Le.classes = De;
    }), I;
  }), le = f(() => e.disable === true ? { "aria-disabled": "true" } : {});
  he(() => e.modelValue, (I) => {
    if (v === JSON.stringify(I)) v = 0;
    else {
      const Y = ie(w.value, S.value);
      it(Y.year, Y.month, Y);
    }
  }), he(_, () => {
    g.value !== null && l.$el.contains(document.activeElement) === true && g.value.focus();
  }), he(() => b.value.year + "|" + b.value.month, () => {
    n("navigation", { year: b.value.year, month: b.value.month });
  }), he(q, (I) => {
    xe(I, S.value, "mask"), w.value = I;
  }), he(p, (I) => {
    xe(w.value, I, "locale"), S.value = I;
  });
  function N(I) {
    v = JSON.stringify(I);
  }
  function oe() {
    const { year: I, month: Y, day: se } = y.value, Te = { ...b.value, year: I, month: Y, day: se }, Ee = z.value[ll(Te)];
    (Ee === void 0 || Ee.includes(Te.day) === false) && In(Te), qe(Te.year, Te.month);
  }
  function _e(I) {
    md(I) === true && (_.value = I);
  }
  function ke(I, Y) {
    ["month", "year"].includes(I) && (I === "month" ? ae : ye)(Y === true ? -1 : 1);
  }
  function qe(I, Y) {
    _.value = "Calendar", it(I, Y);
  }
  function Me(I, Y) {
    if (e.range === false || !I) {
      F.value = null;
      return;
    }
    const se = Object.assign({ ...b.value }, I), Te = Y !== void 0 ? Object.assign({ ...b.value }, Y) : se;
    F.value = { init: se, initHash: jn(se), final: Te, finalHash: jn(Te) }, qe(se.year, se.month);
  }
  function He() {
    return e.calendar === "persian" ? "YYYY/MM/DD" : e.mask;
  }
  function Ve(I, Y, se) {
    return Ka(I, Y, se, e.calendar, { hour: 0, minute: 0, second: 0, millisecond: 0 });
  }
  function ie(I, Y) {
    const se = Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue ? [e.modelValue] : [];
    if (se.length === 0) return ge();
    const Te = se[se.length - 1], Ee = Ve(Te.from !== void 0 ? Te.from : Te, I, Y);
    return Ee.dateHash === null ? ge() : Ee;
  }
  function ge() {
    let I, Y;
    if (e.defaultYearMonth !== void 0) {
      const se = e.defaultYearMonth.split("/");
      I = parseInt(se[0], 10), Y = parseInt(se[1], 10);
    } else {
      const se = y.value !== void 0 ? y.value : s();
      I = se.year, Y = se.month;
    }
    return { year: I, month: Y, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0, dateHash: I + "/" + rt(Y) + "/01" };
  }
  function ae(I) {
    let Y = b.value.year, se = Number(b.value.month) + I;
    se === 13 ? (se = 1, Y++) : se === 0 && (se = 12, Y--), it(Y, se), D.value === true && jt("month");
  }
  function ye(I) {
    const Y = Number(b.value.year) + I;
    it(Y, b.value.month), D.value === true && jt("year");
  }
  function Ce(I) {
    it(I, b.value.month), _.value = e.defaultView === "Years" ? "Months" : "Calendar", D.value === true && jt("year");
  }
  function Oe(I) {
    it(b.value.year, I), _.value = "Calendar", D.value === true && jt("month");
  }
  function $e(I, Y) {
    var _a2;
    (((_a2 = z.value[Y]) == null ? void 0 : _a2.includes(I.day)) === true ? ue : In)(I);
  }
  function We(I) {
    return { year: I.year, month: I.month, day: I.day };
  }
  function it(I, Y, se) {
    if (we.value !== null && I <= we.value.year && ((Y < we.value.month || I < we.value.year) && (Y = we.value.month), I = we.value.year), k.value !== null && I >= k.value.year && ((Y > k.value.month || I > k.value.year) && (Y = k.value.month), I = k.value.year), se !== void 0) {
      const { hour: Ee, minute: Xe, second: Le, millisecond: De, timezoneOffset: at, timeHash: cn } = se;
      Object.assign(b.value, { hour: Ee, minute: Xe, second: Le, millisecond: De, timezoneOffset: at, timeHash: cn });
    }
    const Te = I + "/" + rt(Y) + "/01";
    Te !== b.value.dateHash && (A.value = b.value.dateHash < Te == (a.lang.rtl !== true) ? "left" : "right", I !== b.value.year && (V.value = A.value), Ge(() => {
      P.value = I - I % Dn - (I < 0 ? Dn : 0), Object.assign(b.value, { year: I, month: Y, day: 1, dateHash: Te });
    }));
  }
  function Ct(I, Y, se) {
    const Te = I !== null && I.length === 1 && e.multiple === false ? I[0] : I, { reason: Ee, details: Xe } = tl(Y, se);
    N(Te), n("update:modelValue", Te, Ee, Xe);
  }
  function jt(I) {
    const Y = j.value[0] !== void 0 && j.value[0].dateHash !== null ? { ...j.value[0] } : { ...b.value };
    Ge(() => {
      Y.year = b.value.year, Y.month = b.value.month;
      const se = e.calendar !== "persian" ? new Date(Y.year, Y.month, 0).getDate() : uo(Y.year, Y.month);
      Y.day = Math.min(Math.max(1, Y.day), se);
      const Te = ln(Y), { details: Ee } = tl("", Y);
      N(Te), n("update:modelValue", Te, I, Ee);
    });
  }
  function tl(I, Y) {
    return Y.from !== void 0 ? { reason: `${I}-range`, details: { ...We(Y.target), from: We(Y.from), to: We(Y.to) } } : { reason: `${I}-day`, details: We(Y) };
  }
  function ln(I, Y, se) {
    return I.from !== void 0 ? { from: pe.value(I.from, Y, se), to: pe.value(I.to, Y, se) } : pe.value(I, Y, se);
  }
  function In(I) {
    let Y;
    if (e.multiple === true) if (I.from !== void 0) {
      const se = jn(I.from), Te = jn(I.to), Ee = j.value.filter((Le) => Le.dateHash < se || Le.dateHash > Te), Xe = W.value.filter(({ from: Le, to: De }) => De.dateHash < se || Le.dateHash > Te);
      Y = Ee.concat(Xe).concat(I).map((Le) => ln(Le));
    } else {
      const se = H.value.slice();
      se.push(ln(I)), Y = se;
    }
    else Y = ln(I);
    Ct(Y, "add", I);
  }
  function ue(I) {
    if (e.noUnset === true) return;
    let Y = null;
    if (e.multiple === true && Array.isArray(e.modelValue) === true) {
      const se = ln(I);
      I.from !== void 0 ? Y = e.modelValue.filter((Te) => Te.from !== void 0 ? Te.from !== se.from && Te.to !== se.to : true) : Y = e.modelValue.filter((Te) => Te !== se), Y.length === 0 && (Y = null);
    }
    Ct(Y, "remove", I);
  }
  function xe(I, Y, se) {
    const Te = j.value.concat(W.value).map((Xe) => ln(Xe, I, Y)).filter((Xe) => Xe.from !== void 0 ? Xe.from.dateHash !== null && Xe.to.dateHash !== null : Xe.dateHash !== null), Ee = (e.multiple === true ? Te : Te[0]) || null;
    N(Ee), n("update:modelValue", Ee, se);
  }
  function Fe() {
    if (e.minimal !== true) return d("div", { class: "q-date__header " + u.value }, [d("div", { class: "relative-position" }, [d(Ft, { name: "q-transition--fade" }, () => d("div", { key: "h-yr-" + be.value, class: "q-date__header-subtitle q-date__header-link " + (_.value === "Years" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: i.value, ...o("vY", { onClick() {
      _.value = "Years";
    }, onKeyup(I) {
      I.keyCode === 13 && (_.value = "Years");
    } }) }, [be.value]))]), d("div", { class: "q-date__header-title relative-position flex no-wrap" }, [d("div", { class: "relative-position col" }, [d(Ft, { name: "q-transition--fade" }, () => d("div", { key: "h-sub" + M.value, class: "q-date__header-title-label q-date__header-link " + (_.value === "Calendar" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: i.value, ...o("vC", { onClick() {
      _.value = "Calendar";
    }, onKeyup(I) {
      I.keyCode === 13 && (_.value = "Calendar");
    } }) }, [M.value]))]), e.todayBtn === true ? d(Ze, { class: "q-date__header-today self-start", icon: a.iconSet.datetime.today, ariaLabel: a.lang.date.today, flat: true, size: "sm", round: true, tabindex: i.value, onClick: oe }) : null])]);
  }
  function Be({ label: I, type: Y, key: se, dir: Te, goTo: Ee, boundaries: Xe, cls: Le }) {
    return [d("div", { class: "row items-center q-date__arrow" }, [d(Ze, { round: true, dense: true, size: "sm", flat: true, icon: B.value[0], ariaLabel: Y === "Years" ? a.lang.date.prevYear : a.lang.date.prevMonth, tabindex: i.value, disable: Xe.prev === false, ...o("go-#" + Y, { onClick() {
      Ee(-1);
    } }) })]), d("div", { class: "relative-position overflow-hidden flex flex-center" + Le }, [d(Ft, { name: "q-transition--jump-" + Te }, () => d("div", { key: se }, [d(Ze, { flat: true, dense: true, noCaps: true, label: I, tabindex: i.value, ...o("view#" + Y, { onClick: () => {
      _.value = Y;
    } }) })]))]), d("div", { class: "row items-center q-date__arrow" }, [d(Ze, { round: true, dense: true, size: "sm", flat: true, icon: B.value[1], ariaLabel: Y === "Years" ? a.lang.date.nextYear : a.lang.date.nextMonth, tabindex: i.value, disable: Xe.next === false, ...o("go+#" + Y, { onClick() {
      Ee(1);
    } }) })])];
  }
  const Ue = { Calendar: () => [d("div", { key: "calendar-view", class: "q-date__view q-date__calendar" }, [d("div", { class: "q-date__navigation row items-center no-wrap" }, Be({ label: S.value.months[b.value.month - 1], type: "Months", key: b.value.month, dir: A.value, goTo: ae, boundaries: $.value.month, cls: " col" }).concat(Be({ label: b.value.year, type: "Years", key: b.value.year, dir: V.value, goTo: ye, boundaries: $.value.year, cls: "" }))), d("div", { class: "q-date__calendar-weekdays row items-center no-wrap" }, J.value.map((I) => d("div", { class: "q-date__calendar-item" }, [d("div", I)]))), d("div", { class: "q-date__calendar-days-container relative-position overflow-hidden" }, [d(Ft, { name: "q-transition--slide-" + A.value }, () => d("div", { key: K.value, class: "q-date__calendar-days fit" }, ce.value.map((I) => d("div", { class: I.classes }, [I.in === true ? d(Ze, { class: I.today === true ? "q-date__today" : "", dense: true, flat: I.flat, unelevated: I.unelevated, color: I.color, textColor: I.textColor, label: I.i, tabindex: i.value, ...o("day#" + I.i, { onClick: () => {
    yt(I.i);
  }, onMouseover: () => {
    ht(I.i);
  } }) }, I.event !== false ? () => d("div", { class: "q-date__event bg-" + I.event }) : null) : d("div", "" + I.i)]))))])])], Months() {
    const I = b.value.year === y.value.year, Y = (Te) => we.value !== null && b.value.year === we.value.year && we.value.month > Te || k.value !== null && b.value.year === k.value.year && k.value.month < Te, se = S.value.monthsShort.map((Te, Ee) => {
      const Xe = b.value.month === Ee + 1;
      return d("div", { class: "q-date__months-item flex flex-center" }, [d(Ze, { class: I === true && y.value.month === Ee + 1 ? "q-date__today" : null, flat: Xe !== true, label: Te, unelevated: Xe, color: Xe === true ? x.value : null, textColor: Xe === true ? C.value : null, tabindex: i.value, disable: Y(Ee + 1), ...o("month#" + Ee, { onClick: () => {
        Oe(Ee + 1);
      } }) })]);
    });
    return e.yearsInMonthView === true && se.unshift(d("div", { class: "row no-wrap full-width" }, [Be({ label: b.value.year, type: "Years", key: b.value.year, dir: V.value, goTo: ye, boundaries: $.value.year, cls: " col" })])), d("div", { key: "months-view", class: "q-date__view q-date__months flex flex-center" }, se);
  }, Years() {
    const I = P.value, Y = I + Dn, se = [], Te = (Ee) => we.value !== null && we.value.year > Ee || k.value !== null && k.value.year < Ee;
    for (let Ee = I; Ee <= Y; Ee++) {
      const Xe = b.value.year === Ee;
      se.push(d("div", { class: "q-date__years-item flex flex-center" }, [d(Ze, { key: "yr" + Ee, class: y.value.year === Ee ? "q-date__today" : null, flat: !Xe, label: Ee, dense: true, unelevated: Xe, color: Xe === true ? x.value : null, textColor: Xe === true ? C.value : null, tabindex: i.value, disable: Te(Ee), ...o("yr#" + Ee, { onClick: () => {
        Ce(Ee);
      } }) })]));
    }
    return d("div", { class: "q-date__view q-date__years flex flex-center" }, [d("div", { class: "col-auto" }, [d(Ze, { round: true, dense: true, flat: true, icon: B.value[0], ariaLabel: a.lang.date.prevRangeYears(Dn), tabindex: i.value, disable: Te(I), ...o("y-", { onClick: () => {
      P.value -= Dn;
    } }) })]), d("div", { class: "q-date__years-content col self-stretch row items-center" }, se), d("div", { class: "col-auto" }, [d(Ze, { round: true, dense: true, flat: true, icon: B.value[1], ariaLabel: a.lang.date.nextRangeYears(Dn), tabindex: i.value, disable: Te(Y), ...o("y+", { onClick: () => {
      P.value += Dn;
    } }) })])]);
  } };
  function yt(I) {
    const Y = { ...b.value, day: I };
    if (e.range === false) {
      $e(Y, K.value);
      return;
    }
    if (F.value === null) {
      const se = ce.value.find((Ee) => Ee.fill !== true && Ee.i === I);
      if (e.noUnset !== true && se.range !== void 0) {
        ue({ target: Y, from: se.range.from, to: se.range.to });
        return;
      }
      if (se.selected === true) {
        ue(Y);
        return;
      }
      const Te = jn(Y);
      F.value = { init: Y, initHash: Te, final: Y, finalHash: Te }, n("rangeStart", We(Y));
    } else {
      const se = F.value.initHash, Te = jn(Y), Ee = se <= Te ? { from: F.value.init, to: Y } : { from: Y, to: F.value.init };
      F.value = null, In(se === Te ? Y : { target: Y, ...Ee }), n("rangeEnd", { from: We(Ee.from), to: We(Ee.to) });
    }
  }
  function ht(I) {
    if (F.value !== null) {
      const Y = { ...b.value, day: I };
      Object.assign(F.value, { final: Y, finalHash: jn(Y) });
    }
  }
  return Object.assign(l, { setToday: oe, setView: _e, offsetCalendar: ke, setCalendarTo: qe, setEditingRange: Me }), () => {
    const I = [d("div", { class: "q-date__content col relative-position" }, [d(Ft, { name: "q-transition--fade" }, Ue[_.value])])], Y = Pe(t.default);
    return Y !== void 0 && I.push(d("div", { class: "q-date__actions" }, Y)), e.name !== void 0 && e.disable !== true && m(I, "push"), d("div", { class: T.value, ...le.value }, [Fe(), d("div", { ref: g, class: "q-date__main col column", tabindex: -1 }, I)]);
  };
} });
function dh(e, t, n) {
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
function Hp(e) {
  jp(e) && je(e);
}
function jp(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop")) return true;
  const t = ny(e), n = e.shiftKey && !e.deltaX, l = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY), a = n || l ? e.deltaY : e.deltaX;
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (Zy(o, l)) return l ? a < 0 && o.scrollTop === 0 ? true : a > 0 && o.scrollTop + o.clientHeight === o.scrollHeight : a < 0 && o.scrollLeft === 0 ? true : a > 0 && o.scrollLeft + o.clientWidth === o.scrollWidth;
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
    Ui = ii(window), Qi = gl(window), hd = t.style.left, gd = t.style.top, bd = window.location.href, t.style.left = `-${Ui}px`, t.style.top = `-${Qi}px`, a !== "hidden" && (a === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), l !== "hidden" && (l === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = true, ze.is.ios === true && (n === true ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", Qr, dt.passiveCapture), window.visualViewport.addEventListener("scroll", Qr, dt.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", yd, dt.passiveCapture));
  }
  ze.is.desktop === true && ze.is.mac === true && window[`${e}EventListener`]("wheel", Hp, dt.notPassive), e === "remove" && (ze.is.ios === true && (n === true ? (window.visualViewport.removeEventListener("resize", Qr, dt.passiveCapture), window.visualViewport.removeEventListener("scroll", Qr, dt.passiveCapture)) : window.removeEventListener("scroll", yd, dt.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = false, t.style.left = hd, t.style.top = gd, window.location.href === bd && window.scrollTo(Ui, Qi), Wa = void 0);
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
    if (t = "remove", ze.is.ios === true && ze.is.nativeMobile === true) {
      Tl !== null && clearTimeout(Tl), Tl = setTimeout(() => {
        pd(t), Tl = null;
      }, 100);
      return;
    }
  }
  pd(t);
}
function fh() {
  let e;
  return { preventBodyScroll(t) {
    t !== e && (e !== void 0 || t === true) && (e = t, Iu(t));
  } };
}
var Kr = 0, Up = { standard: "fixed-full flex-center", top: "fixed-top justify-center", bottom: "fixed-bottom justify-center", right: "fixed-right items-center", left: "fixed-left items-center" }, _d = { standard: ["scale", "scale"], top: ["slide-down", "slide-up"], bottom: ["slide-up", "slide-down"], right: ["slide-left", "slide-right"], left: ["slide-right", "slide-left"] }, ci = ve({ name: "QDialog", inheritAttrs: false, props: { ...$a, ...Il, transitionShow: String, transitionHide: String, persistent: Boolean, autoClose: Boolean, allowFocusOutside: Boolean, noEscDismiss: Boolean, noBackdropDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, noShake: Boolean, seamless: Boolean, maximized: Boolean, fullWidth: Boolean, fullHeight: Boolean, square: Boolean, backdropFilter: String, position: { type: String, default: "standard", validator: (e) => ["standard", "top", "bottom", "left", "right"].includes(e) } }, emits: [...Aa, "shake", "click", "escapeKey"], setup(e, { slots: t, emit: n, attrs: l }) {
  const a = Se(), r = U(null), o = U(false), i = U(false);
  let u = null, c = null, s, v;
  const h = f(() => e.persistent !== true && e.noRouteDismiss !== true && e.seamless !== true), { preventBodyScroll: m } = fh(), { registerTimeout: g } = Xn(), { registerTick: w, removeTick: S } = ya(), { transitionProps: q, transitionStyle: p } = oi(e, () => _d[e.position][0], () => _d[e.position][1]), y = f(() => p.value + (e.backdropFilter !== void 0 ? `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}` : "")), { showPortal: b, hidePortal: _, portalIsAccessible: E, renderPortal: A } = qs(a, r, be, "dialog"), { hide: V } = Ra({ showing: o, hideOnRouteChange: h, handleShow: D, handleHide: H, processOnMount: true }), { addToHistory: L, removeFromHistory: P } = dh(o, V, h), F = f(() => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === true ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${Up[e.position]}` + (i.value === true ? " q-dialog__inner--animating" : "") + (e.fullWidth === true ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === true ? " q-dialog__inner--fullheight" : "") + (e.square === true ? " q-dialog__inner--square" : "")), T = f(() => o.value === true && e.seamless !== true), x = f(() => e.autoClose === true ? { onClick: M } : {}), C = f(() => [`q-dialog fullscreen no-pointer-events q-dialog--${T.value === true ? "modal" : "seamless"}`, l.class]);
  he(() => e.maximized, (B) => {
    o.value === true && Q(B);
  }), he(T, (B) => {
    m(B), B === true ? (Pm(X), Am(te)) : (Lu(X), Eo(te));
  });
  function D(B) {
    var _a2;
    L(), c = e.noRefocus === false && document.activeElement !== null ? document.activeElement : null, Q(e.maximized), b(), i.value = true, e.noFocus !== true ? ((_a2 = document.activeElement) == null ? void 0 : _a2.blur(), w(j)) : S(), g(() => {
      if (a.proxy.$q.platform.is.ios === true) {
        if (e.seamless !== true && document.activeElement) {
          const { top: R, bottom: J } = document.activeElement.getBoundingClientRect(), { innerHeight: O } = window, re = window.visualViewport !== void 0 ? window.visualViewport.height : O;
          R > 0 && J > re / 2 && (document.scrollingElement.scrollTop = Math.min(document.scrollingElement.scrollHeight - re, J >= O ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + J - re / 2))), document.activeElement.scrollIntoView();
        }
        v = true, r.value.click(), v = false;
      }
      b(true), i.value = false, n("show", B);
    }, e.transitionDuration);
  }
  function H(B) {
    S(), P(), pe(true), i.value = true, _(), c !== null && ((((B == null ? void 0 : B.type.indexOf("key")) === 0 ? c.closest('[tabindex]:not([tabindex^="-"])') : void 0) || c).focus(), c = null), g(() => {
      _(true), i.value = false, n("hide", B);
    }, e.transitionDuration);
  }
  function j(B) {
    Pa(() => {
      let R = r.value;
      if (R !== null) {
        if (B !== void 0) {
          const J = R.querySelector(B);
          if (J !== null) {
            J.focus({ preventScroll: true });
            return;
          }
        }
        R.contains(document.activeElement) !== true && (R = R.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || R.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || R.querySelector("[autofocus], [data-autofocus]") || R, R.focus({ preventScroll: true }));
      }
    });
  }
  function W(B) {
    B && typeof B.focus == "function" ? B.focus({ preventScroll: true }) : j(), n("shake");
    const R = r.value;
    R !== null && (R.classList.remove("q-animate--scale"), R.classList.add("q-animate--scale"), u !== null && clearTimeout(u), u = setTimeout(() => {
      u = null, r.value !== null && (R.classList.remove("q-animate--scale"), j());
    }, 170));
  }
  function te() {
    e.seamless !== true && (e.persistent === true || e.noEscDismiss === true ? e.maximized !== true && e.noShake !== true && W() : (n("escapeKey"), V()));
  }
  function pe(B) {
    u !== null && (clearTimeout(u), u = null), (B === true || o.value === true) && (Q(false), e.seamless !== true && (m(false), Lu(X), Eo(te))), B !== true && (c = null);
  }
  function Q(B) {
    B === true ? s !== true && (Kr < 1 && document.body.classList.add("q-body--dialog"), Kr++, s = true) : s === true && (Kr < 2 && document.body.classList.remove("q-body--dialog"), Kr--, s = false);
  }
  function M(B) {
    v !== true && (V(B), n("click", B));
  }
  function ee(B) {
    e.persistent !== true && e.noBackdropDismiss !== true ? V(B) : e.noShake !== true && W();
  }
  function X(B) {
    e.allowFocusOutside !== true && E.value === true && ym(r.value, B.target) !== true && j('[tabindex]:not([tabindex="-1"])');
  }
  Object.assign(a.proxy, { focus: j, shake: W, __updateRefocusTarget(B) {
    c = B || null;
  } }), Ke(pe);
  function be() {
    return d("div", { role: "dialog", "aria-modal": T.value === true ? "true" : "false", ...l, class: C.value }, [d(Ft, { name: "q-transition--fade", appear: true }, () => T.value === true ? d("div", { class: "q-dialog__backdrop fixed-full", style: y.value, "aria-hidden": "true", tabindex: -1, onClick: ee }) : null), d(Ft, q.value, () => o.value === true ? d("div", { ref: r, class: F.value, style: p.value, tabindex: -1, ...x.value }, Pe(t.default)) : null)]);
  }
  return A;
} }), wd = 150, Sd = ve({ name: "QDrawer", inheritAttrs: false, props: { ...$a, ...nt, side: { type: String, default: "left", validator: (e) => ["left", "right"].includes(e) }, width: { type: Number, default: 300 }, mini: Boolean, miniToOverlay: Boolean, miniWidth: { type: Number, default: 57 }, noMiniAnimation: Boolean, breakpoint: { type: Number, default: 1023 }, showIfAbove: Boolean, behavior: { type: String, validator: (e) => ["default", "desktop", "mobile"].includes(e), default: "default" }, bordered: Boolean, elevated: Boolean, overlay: Boolean, persistent: Boolean, noSwipeOpen: Boolean, noSwipeClose: Boolean, noSwipeBackdrop: Boolean }, emits: [...Aa, "onLayout", "miniState"], setup(e, { slots: t, emit: n, attrs: l }) {
  const a = Se(), { proxy: { $q: r } } = a, o = lt(e, r), { preventBodyScroll: i } = fh(), { registerTimeout: u, removeTimeout: c } = Xn(), s = Tt(Yl, ot);
  if (s === ot) return console.error("QDrawer needs to be child of QLayout"), ot;
  let v, h = null, m;
  const g = U(e.behavior === "mobile" || e.behavior !== "desktop" && s.totalWidth.value <= e.breakpoint), w = f(() => e.mini === true && g.value !== true), S = f(() => w.value === true ? e.miniWidth : e.width), q = U(e.showIfAbove === true && g.value === false ? true : e.modelValue === true), p = f(() => e.persistent !== true && (g.value === true || pe.value === true));
  function y(N, oe) {
    if (A(), N !== false && s.animate(), $(0), g.value === true) {
      const _e = s.instances[H.value];
      (_e == null ? void 0 : _e.belowBreakpoint) === true && _e.hide(false), z(1), s.isContainer.value !== true && i(true);
    } else z(0), N !== false && Z(false);
    u(() => {
      N !== false && Z(true), oe !== true && n("show", N);
    }, wd);
  }
  function b(N, oe) {
    V(), N !== false && s.animate(), z(0), $(F.value * S.value), me(), oe !== true ? u(() => {
      n("hide", N);
    }, wd) : c();
  }
  const { show: _, hide: E } = Ra({ showing: q, hideOnRouteChange: p, handleShow: y, handleHide: b }), { addToHistory: A, removeFromHistory: V } = dh(q, E, p), L = { belowBreakpoint: g, hide: E }, P = f(() => e.side === "right"), F = f(() => (r.lang.rtl === true ? -1 : 1) * (P.value === true ? 1 : -1)), T = U(0), x = U(false), C = U(false), D = U(S.value * F.value), H = f(() => P.value === true ? "left" : "right"), j = f(() => q.value === true && g.value === false && e.overlay === false ? e.miniToOverlay === true ? e.miniWidth : S.value : 0), W = f(() => e.overlay === true || e.miniToOverlay === true || s.view.value.indexOf(P.value ? "R" : "L") !== -1 || r.platform.is.ios === true && s.isContainer.value === true), te = f(() => e.overlay === false && q.value === true && g.value === false), pe = f(() => e.overlay === true && q.value === true && g.value === false), Q = f(() => "fullscreen q-drawer__backdrop" + (q.value === false && x.value === false ? " hidden" : "")), M = f(() => ({ backgroundColor: `rgba(0,0,0,${T.value * 0.4})` })), ee = f(() => P.value === true ? s.rows.value.top[2] === "r" : s.rows.value.top[0] === "l"), X = f(() => P.value === true ? s.rows.value.bottom[2] === "r" : s.rows.value.bottom[0] === "l"), be = f(() => {
    const N = {};
    return s.header.space === true && ee.value === false && (W.value === true ? N.top = `${s.header.offset}px` : s.header.space === true && (N.top = `${s.header.size}px`)), s.footer.space === true && X.value === false && (W.value === true ? N.bottom = `${s.footer.offset}px` : s.footer.space === true && (N.bottom = `${s.footer.size}px`)), N;
  }), B = f(() => {
    const N = { width: `${S.value}px`, transform: `translateX(${D.value}px)` };
    return g.value === true ? N : Object.assign(N, be.value);
  }), R = f(() => "q-drawer__content fit " + (s.isContainer.value !== true ? "scroll" : "overflow-auto")), J = f(() => `q-drawer q-drawer--${e.side}` + (C.value === true ? " q-drawer--mini-animate" : "") + (e.bordered === true ? " q-drawer--bordered" : "") + (o.value === true ? " q-drawer--dark q-dark" : "") + (x.value === true ? " no-transition" : q.value === true ? "" : " q-layout--prevent-focus") + (g.value === true ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${w.value === true ? "mini" : "standard"}` + (W.value === true || te.value !== true ? " fixed" : "") + (e.overlay === true || e.miniToOverlay === true ? " q-drawer--on-top" : "") + (ee.value === true ? " q-drawer--top-padding" : ""))), O = f(() => {
    const N = r.lang.rtl === true ? e.side : H.value;
    return [[gn, K, void 0, { [N]: true, mouse: true }]];
  }), re = f(() => {
    const N = r.lang.rtl === true ? H.value : e.side;
    return [[gn, de, void 0, { [N]: true, mouse: true }]];
  }), we = f(() => {
    const N = r.lang.rtl === true ? H.value : e.side;
    return [[gn, de, void 0, { [N]: true, mouse: true, mouseAllDir: true }]];
  });
  function k() {
    ce(g, e.behavior === "mobile" || e.behavior !== "desktop" && s.totalWidth.value <= e.breakpoint);
  }
  he(g, (N) => {
    N === true ? (v = q.value, q.value === true && E(false)) : e.overlay === false && e.behavior !== "mobile" && v !== false && (q.value === true ? ($(0), z(0), me()) : _(false));
  }), he(() => e.side, (N, oe) => {
    s.instances[oe] === L && (s.instances[oe] = void 0, s[oe].space = false, s[oe].offset = 0), s.instances[N] = L, s[N].size = S.value, s[N].space = te.value, s[N].offset = j.value;
  }), he(s.totalWidth, () => {
    (s.isContainer.value === true || document.qScrollPrevented !== true) && k();
  }), he(() => e.behavior + e.breakpoint, k), he(s.isContainer, (N) => {
    q.value === true && i(N !== true), N === true && k();
  }), he(s.scrollbarWidth, () => {
    $(q.value === true ? 0 : void 0);
  }), he(j, (N) => {
    fe("offset", N);
  }), he(te, (N) => {
    n("onLayout", N), fe("space", N);
  }), he(P, () => {
    $();
  }), he(S, (N) => {
    $(), le(e.miniToOverlay, N);
  }), he(() => e.miniToOverlay, (N) => {
    le(N, S.value);
  }), he(() => r.lang.rtl, () => {
    $();
  }), he(() => e.mini, () => {
    e.noMiniAnimation || e.modelValue === true && (ne(), s.animate());
  }), he(w, (N) => {
    n("miniState", N);
  });
  function $(N) {
    N === void 0 ? Ge(() => {
      N = q.value === true ? 0 : S.value, $(F.value * N);
    }) : (s.isContainer.value === true && P.value === true && (g.value === true || Math.abs(N) === S.value) && (N += F.value * s.scrollbarWidth.value), D.value = N);
  }
  function z(N) {
    T.value = N;
  }
  function Z(N) {
    const oe = N === true ? "remove" : s.isContainer.value !== true ? "add" : "";
    oe !== "" && document.body.classList[oe]("q-body--drawer-toggle");
  }
  function ne() {
    h !== null && clearTimeout(h), a.proxy && a.proxy.$el && a.proxy.$el.classList.add("q-drawer--mini-animate"), C.value = true, h = setTimeout(() => {
      var _a2, _b2;
      h = null, C.value = false, (_b2 = (_a2 = a == null ? void 0 : a.proxy) == null ? void 0 : _a2.$el) == null ? void 0 : _b2.classList.remove("q-drawer--mini-animate");
    }, 150);
  }
  function K(N) {
    if (q.value !== false) return;
    const oe = S.value, _e = ct(N.distance.x, 0, oe);
    if (N.isFinal === true) {
      _e >= Math.min(75, oe) === true ? _() : (s.animate(), z(0), $(F.value * oe)), x.value = false;
      return;
    }
    $((r.lang.rtl === true ? P.value !== true : P.value) ? Math.max(oe - _e, 0) : Math.min(0, _e - oe)), z(ct(_e / oe, 0, 1)), N.isFirst === true && (x.value = true);
  }
  function de(N) {
    if (q.value !== true) return;
    const oe = S.value, _e = N.direction === e.side, ke = (r.lang.rtl === true ? _e !== true : _e) ? ct(N.distance.x, 0, oe) : 0;
    if (N.isFinal === true) {
      Math.abs(ke) < Math.min(75, oe) === true ? (s.animate(), z(1), $(0)) : E(), x.value = false;
      return;
    }
    $(F.value * ke), z(ct(1 - ke / oe, 0, 1)), N.isFirst === true && (x.value = true);
  }
  function me() {
    i(false), Z(true);
  }
  function fe(N, oe) {
    s.update(e.side, N, oe);
  }
  function ce(N, oe) {
    N.value !== oe && (N.value = oe);
  }
  function le(N, oe) {
    fe("size", N === true ? e.miniWidth : oe);
  }
  return s.instances[e.side] = L, le(e.miniToOverlay, S.value), fe("space", te.value), fe("offset", j.value), e.showIfAbove === true && e.modelValue !== true && q.value === true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", true), ft(() => {
    n("onLayout", te.value), n("miniState", w.value), v = e.showIfAbove === true;
    const N = () => {
      (q.value === true ? y : b)(false, true);
    };
    if (s.totalWidth.value !== 0) {
      Ge(N);
      return;
    }
    m = he(s.totalWidth, () => {
      m(), m = void 0, q.value === false && e.showIfAbove === true && g.value === false ? _(false) : N();
    });
  }), Ke(() => {
    m == null ? void 0 : m(), h !== null && (clearTimeout(h), h = null), q.value === true && me(), s.instances[e.side] === L && (s.instances[e.side] = void 0, fe("size", 0), fe("offset", 0), fe("space", false));
  }), () => {
    const N = [];
    g.value === true && (e.noSwipeOpen === false && N.push(sn(d("div", { key: "open", class: `q-drawer__opener fixed-${e.side}`, "aria-hidden": "true" }), O.value)), N.push(pn("div", { ref: "backdrop", class: Q.value, style: M.value, "aria-hidden": "true", onClick: E }, void 0, "backdrop", e.noSwipeBackdrop !== true && q.value === true, () => we.value)));
    const oe = w.value === true && t.mini !== void 0, _e = [d("div", { ...l, key: "" + oe, class: [R.value, l.class] }, oe === true ? t.mini() : Pe(t.default))];
    return e.elevated === true && q.value === true && _e.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), N.push(pn("aside", { ref: "content", class: J.value, style: B.value }, _e, "contentclose", e.noSwipeClose !== true && g.value === true, () => re.value)), d("div", { class: "q-drawer-container" }, N);
  };
} });
function vh(e, t) {
  if (t && e === t) return null;
  const n = e.nodeName.toLowerCase();
  if (["div", "li", "ul", "ol", "blockquote"].includes(n) === true) return e;
  const l = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle, a = l.display;
  return a === "block" || a === "table" ? e : vh(e.parentNode);
}
function Wi(e, t, n) {
  return !e || e === document.body ? false : n === true && e === t || (t === document ? document.body : t).contains(e.parentNode);
}
function mh(e, t, n) {
  if (n || (n = document.createRange(), n.selectNode(e), n.setStart(e, 0)), t.count === 0) n.setEnd(e, t.count);
  else if (t.count > 0) if (e.nodeType === Node.TEXT_NODE) e.textContent.length < t.count ? t.count -= e.textContent.length : (n.setEnd(e, t.count), t.count = 0);
  else for (let l = 0; t.count !== 0 && l < e.childNodes.length; l++) n = mh(e.childNodes[l], t, n);
  return n;
}
var Qp = /^https?:\/\//, Kp = class {
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
    return e !== null ? vh(e, this.el) : null;
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
      const t = window.getSelection(), n = mh(this.el, { count: this.savedPos });
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
        this.eVm.editLinkUrl.value = Qp.test(r) ? r : "https://", document.execCommand("createLink", false, this.eVm.editLinkUrl.value), this.save(a.getRangeAt(0));
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
}, Wp = ve({ name: "QTooltip", inheritAttrs: false, props: { ...xm, ...$a, ...Il, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null }, transitionShow: { ...Il.transitionShow, default: "jump-down" }, transitionHide: { ...Il.transitionHide, default: "jump-up" }, anchor: { type: String, default: "bottom middle", validator: Po }, self: { type: String, default: "top middle", validator: Po }, offset: { type: Array, default: () => [14, 14], validator: Bm }, scrollTarget: Gl, delay: { type: Number, default: 0 }, hideDelay: { type: Number, default: 0 }, persistent: Boolean }, emits: [...Aa], setup(e, { slots: t, emit: n, attrs: l }) {
  let a, r;
  const o = Se(), { proxy: { $q: i } } = o, u = U(null), c = U(false), s = f(() => Lo(e.anchor, i.lang.rtl)), v = f(() => Lo(e.self, i.lang.rtl)), h = f(() => e.persistent !== true), { registerTick: m, removeTick: g } = ya(), { registerTimeout: w } = Xn(), { transitionProps: S, transitionStyle: q } = oi(e), { localScrollTarget: p, changeScrollEvent: y, unconfigureScrollTarget: b } = km(e, pe), { anchorEl: _, canShow: E, anchorEvents: A } = Cs({ showing: c, configureAnchorEl: te }), { show: V, hide: L } = Ra({ showing: c, canShow: E, handleShow: x, handleHide: C, hideOnRouteChange: h, processOnMount: true });
  Object.assign(A, { delayShow: j, delayHide: W });
  const { showPortal: P, hidePortal: F, renderPortal: T } = qs(o, u, M, "tooltip");
  if (i.platform.is.mobile === true) {
    const ee = { anchorEl: _, innerRef: u, onClickOutside(be) {
      return L(be), be.target.classList.contains("q-dialog__backdrop") && je(be), true;
    } }, X = f(() => e.modelValue === null && e.persistent !== true && c.value === true);
    he(X, (be) => {
      (be === true ? Lm : Ro)(ee);
    }), Ke(() => {
      Ro(ee);
    });
  }
  function x(ee) {
    P(), m(() => {
      r = new MutationObserver(() => H()), r.observe(u.value, { attributes: false, childList: true, characterData: true, subtree: true }), H(), pe();
    }), a === void 0 && (a = he(() => i.screen.width + "|" + i.screen.height + "|" + e.self + "|" + e.anchor + "|" + i.lang.rtl, H)), w(() => {
      P(true), n("show", ee);
    }, e.transitionDuration);
  }
  function C(ee) {
    g(), F(), D(), w(() => {
      F(true), n("hide", ee);
    }, e.transitionDuration);
  }
  function D() {
    r !== void 0 && (r.disconnect(), r = void 0), a !== void 0 && (a(), a = void 0), b(), Wt(A, "tooltipTemp");
  }
  function H() {
    Ts({ targetEl: u.value, offset: e.offset, anchorEl: _.value, anchorOrigin: s.value, selfOrigin: v.value, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function j(ee) {
    if (i.platform.is.mobile === true) {
      Mn(), document.body.classList.add("non-selectable");
      const X = _.value, be = ["touchmove", "touchcancel", "touchend", "click"].map((B) => [X, B, "delayHide", "passiveCapture"]);
      kt(A, "tooltipTemp", be);
    }
    w(() => {
      V(ee);
    }, e.delay);
  }
  function W(ee) {
    i.platform.is.mobile === true && (Wt(A, "tooltipTemp"), Mn(), setTimeout(() => {
      document.body.classList.remove("non-selectable");
    }, 10)), w(() => {
      L(ee);
    }, e.hideDelay);
  }
  function te() {
    if (e.noParentEvent === true || _.value === null) return;
    const ee = i.platform.is.mobile === true ? [[_.value, "touchstart", "delayShow", "passive"]] : [[_.value, "mouseenter", "delayShow", "passive"], [_.value, "mouseleave", "delayHide", "passive"]];
    kt(A, "anchor", ee);
  }
  function pe() {
    if (_.value !== null || e.scrollTarget !== void 0) {
      p.value = Vn(_.value, e.scrollTarget);
      const ee = e.noParentEvent === true ? H : L;
      y(p.value, ee);
    }
  }
  function Q() {
    return c.value === true ? d("div", { ...l, ref: u, class: ["q-tooltip q-tooltip--style q-position-engine no-pointer-events", l.class], style: [l.style, q.value], role: "tooltip" }, Pe(t.default)) : null;
  }
  function M() {
    return d(Ft, S.value, Q);
  }
  return Ke(D), Object.assign(o.proxy, { updatePosition: H }), T;
} }), Ca = ve({ name: "QItem", props: { ...nt, ...$r, tag: { type: String, default: "div" }, active: { type: Boolean, default: null }, clickable: Boolean, dense: Boolean, insetLevel: Number, tabindex: [String, Number], focused: Boolean, manualFocus: Boolean }, emits: ["click", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = lt(e, l), { hasLink: r, linkAttrs: o, linkClass: i, linkTag: u, navigateOnClick: c } = ai(), s = U(null), v = U(null), h = f(() => e.clickable === true || r.value === true || e.tag === "label"), m = f(() => e.disable !== true && h.value === true), g = f(() => "q-item q-item-type row no-wrap" + (e.dense === true ? " q-item--dense" : "") + (a.value === true ? " q-item--dark" : "") + (r.value === true && e.active === null ? i.value : e.active === true ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === true ? " disabled" : "") + (m.value === true ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === true ? " q-manual-focusable--focused" : "") : "")), w = f(() => e.insetLevel === void 0 ? null : { ["padding" + (l.lang.rtl === true ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px" });
  function S(y) {
    m.value === true && (v.value !== null && y.qAvoidFocus !== true && (y.qKeyEvent !== true && document.activeElement === s.value ? v.value.focus() : document.activeElement === v.value && s.value.focus()), c(y));
  }
  function q(y) {
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
    const y = { ref: s, class: g.value, style: w.value, role: "listitem", onClick: S, onKeyup: q };
    return m.value === true ? (y.tabindex = e.tabindex || "0", Object.assign(y, o.value)) : h.value === true && (y["aria-disabled"] = "true"), d(u.value, y, p());
  };
} }), mn = ve({ name: "QItemSection", props: { avatar: Boolean, thumbnail: Boolean, side: Boolean, top: Boolean, noWrap: Boolean }, setup(e, { slots: t }) {
  const n = f(() => `q-item__section column q-item__section--${e.avatar === true || e.side === true || e.thumbnail === true ? "side" : "main"}` + (e.top === true ? " q-item__section--top justify-start" : " justify-center") + (e.avatar === true ? " q-item__section--avatar" : "") + (e.thumbnail === true ? " q-item__section--thumbnail" : "") + (e.noWrap === true ? " q-item__section--nowrap" : ""));
  return () => d("div", { class: n.value }, Pe(t.default));
} });
function hh(e, t, n) {
  t.handler ? t.handler(e, n, n.caret) : n.runCmd(t.cmd, t.param);
}
function zs(e) {
  return d("div", { class: "q-editor__toolbar-group" }, e);
}
function gh(e, t, n, l = false) {
  const a = l || (t.type === "toggle" ? t.toggled ? t.toggled(e) : t.cmd && e.caret.is(t.cmd, t.param) : false), r = [];
  if (t.tip && e.$q.platform.is.desktop) {
    const o = t.key ? d("div", [d("small", `(CTRL + ${String.fromCharCode(t.key)})`)]) : null;
    r.push(d(Wp, { delay: 1e3 }, () => [d("div", { innerHTML: t.tip }), o]));
  }
  return d(Ze, { ...e.buttonProps.value, icon: t.icon !== null ? t.icon : void 0, color: a ? t.toggleColor || e.props.toolbarToggleColor : t.color || e.props.toolbarColor, textColor: a && !e.props.toolbarPush ? null : t.textColor || e.props.toolbarTextColor, label: t.label, disable: t.disable ? typeof t.disable == "function" ? t.disable(e) : true : false, size: "sm", onClick(o) {
    n == null ? void 0 : n(), hh(o, t, e);
  } }, () => r);
}
function Yp(e, t) {
  const n = t.list === "only-icons";
  let l = t.label, a = t.icon !== null ? t.icon : void 0, r, o;
  function i() {
    c.component.proxy.hide();
  }
  if (n) o = t.options.map((s) => {
    const v = s.type === void 0 ? e.caret.is(s.cmd, s.param) : false;
    return v && (l = s.tip, a = s.icon !== null ? s.icon : void 0), gh(e, s, i, v);
  }), r = e.toolbarBackgroundClass.value, o = [zs(o)];
  else {
    const s = e.props.toolbarToggleColor !== void 0 ? `text-${e.props.toolbarToggleColor}` : null, v = e.props.toolbarTextColor !== void 0 ? `text-${e.props.toolbarTextColor}` : null, h = t.list === "no-icons";
    o = t.options.map((m) => {
      const g = m.disable ? m.disable(e) : false, w = m.type === void 0 ? e.caret.is(m.cmd, m.param) : false;
      w && (l = m.tip, a = m.icon !== null ? m.icon : void 0);
      const S = m.htmlTip;
      return d(Ca, { active: w, activeClass: s, clickable: true, disable: g, dense: true, onClick(q) {
        var _a2;
        i(), (q == null ? void 0 : q.qAvoidFocus) !== true && ((_a2 = e.contentRef.value) == null ? void 0 : _a2.focus()), e.caret.restore(), hh(q, m, e);
      } }, () => [h === true ? null : d(mn, { class: w ? s : v, side: true }, () => d(et, { name: m.icon !== null ? m.icon : void 0 })), d(mn, S ? () => d("div", { class: "text-no-wrap", innerHTML: m.htmlTip }) : m.tip ? () => d("div", { class: "text-no-wrap" }, m.tip) : void 0)]);
    }), r = [e.toolbarBackgroundClass.value, v];
  }
  const u = t.highlight && l !== t.label, c = d(sp, { ...e.buttonProps.value, noCaps: true, noWrap: true, color: u ? e.props.toolbarToggleColor : e.props.toolbarColor, textColor: u && !e.props.toolbarPush ? null : e.props.toolbarTextColor, label: t.fixedLabel ? t.label : l, icon: t.fixedIcon ? t.icon !== null ? t.icon : void 0 : a, contentClass: r, onShow: (s) => e.emit("dropdownShow", s), onHide: (s) => e.emit("dropdownHide", s), onBeforeShow: (s) => e.emit("dropdownBeforeShow", s), onBeforeHide: (s) => e.emit("dropdownBeforeHide", s) }, () => o);
  return c;
}
function Gp(e) {
  if (e.caret) return e.buttons.value.filter((t) => !e.isViewingSource.value || t.find((n) => n.cmd === "viewsource")).map((t) => zs(t.map((n) => e.isViewingSource.value && n.cmd !== "viewsource" ? false : n.type === "slot" ? Pe(e.slots[n.slot]) : n.type === "dropdown" ? Yp(e, n) : gh(e, n))));
}
function Xp(e, t, n, l = {}) {
  const a = Object.keys(l);
  if (a.length === 0) return {};
  const r = { default_font: { cmd: "fontName", param: e, icon: n, tip: t } };
  return a.forEach((o) => {
    const i = l[o];
    r[o] = { cmd: "fontName", param: i, icon: n, tip: i, htmlTip: `<font face="${i}">${i}</font>` };
  }), r;
}
function Zp(e) {
  if (e.caret) {
    const t = e.props.toolbarColor || e.props.toolbarTextColor;
    let n = e.editLinkUrl.value;
    const l = () => {
      e.caret.restore(), n !== e.editLinkUrl.value && document.execCommand("createLink", false, n === "" ? " " : n), e.editLinkUrl.value = null;
    };
    return [d("div", { class: `q-mx-xs text-${t}` }, `${e.$q.lang.editor.url}: `), d("input", { key: "qedt_btm_input", class: "col q-editor__link-input", value: n, onInput: (a) => {
      wt(a), n = a.target.value;
    }, onKeydown: (a) => {
      if (Wl(a) !== true) switch (a.keyCode) {
        case 13:
          return Vt(a), l();
        case 27:
          Vt(a), e.caret.restore(), (!e.editLinkUrl.value || e.editLinkUrl.value === "https://") && document.execCommand("unlink"), e.editLinkUrl.value = null;
          break;
      }
    } }), zs([d(Ze, { key: "qedt_btm_rem", tabindex: -1, ...e.buttonProps.value, label: e.$q.lang.label.remove, noCaps: true, onClick: () => {
      e.caret.restore(), document.execCommand("unlink"), e.editLinkUrl.value = null;
    } }), d(Ze, { key: "qedt_btm_upd", ...e.buttonProps.value, label: e.$q.lang.label.update, noCaps: true, onClick: l })])];
  }
}
var xd = /^on[A-Z]/;
function bh() {
  const { attrs: e, vnode: t } = Se(), n = { listeners: U({}), attributes: U({}) };
  function l() {
    const a = {}, r = {};
    for (const o in e) o !== "class" && o !== "style" && xd.test(o) === false && (a[o] = e[o]);
    for (const o in t.props) xd.test(o) === true && (r[o] = t.props[o]);
    n.attributes.value = a, n.listeners.value = r;
  }
  return Ma(l), l(), n;
}
var Jp = Object.prototype.toString, Yi = Object.prototype.hasOwnProperty, e1 = new Set(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp"].map((e) => "[object " + e + "]"));
function Cd(e) {
  if (e !== Object(e) || e1.has(Jp.call(e)) === true || e.constructor && Yi.call(e, "constructor") === false && Yi.call(e.constructor.prototype, "isPrototypeOf") === false) return false;
  let t;
  for (t in e) ;
  return t === void 0 || Yi.call(e, t);
}
function yh() {
  let e, t, n, l, a, r, o = arguments[0] || {}, i = 1, u = false;
  const c = arguments.length;
  for (typeof o == "boolean" && (u = o, o = arguments[1] || {}, i = 2), Object(o) !== o && typeof o != "function" && (o = {}), c === i && (o = this, i--); i < c; i++) if ((e = arguments[i]) !== null) for (t in e) n = o[t], l = e[t], o !== l && (u === true && l && ((a = Array.isArray(l)) || Cd(l) === true) ? (a === true ? r = Array.isArray(n) === true ? n : [] : r = Cd(n) === true ? n : {}, o[t] = yh(u, r, l)) : l !== void 0 && (o[t] = l));
  return o;
}
ve({ name: "QEditor", props: { ...nt, ...Ls, modelValue: { type: String, required: true }, readonly: Boolean, disable: Boolean, minHeight: { type: String, default: "10rem" }, maxHeight: String, height: String, definitions: Object, fonts: Object, placeholder: String, toolbar: { type: Array, validator: (e) => e.length === 0 || e.every((t) => t.length), default: () => [["left", "center", "right", "justify"], ["bold", "italic", "underline", "strike"], ["undo", "redo"]] }, toolbarColor: String, toolbarBg: String, toolbarTextColor: String, toolbarToggleColor: { type: String, default: "primary" }, toolbarOutline: Boolean, toolbarPush: Boolean, toolbarRounded: Boolean, paragraphTag: { type: String, validator: (e) => ["div", "p"].includes(e), default: "div" }, contentStyle: Object, contentClass: [Object, Array, String], square: Boolean, flat: Boolean, dense: Boolean }, emits: [...Bs, "update:modelValue", "keydown", "click", "focus", "blur", "dropdownShow", "dropdownHide", "dropdownBeforeShow", "dropdownBeforeHide", "linkShow", "linkHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = lt(e, a), { inFullscreen: o, toggleFullscreen: i } = Fs(), u = bh(), c = U(null), s = U(null), v = U(null), h = U(false), m = f(() => !e.readonly && !e.disable);
  let g, w, S = e.modelValue;
  document.execCommand("defaultParagraphSeparator", false, e.paragraphTag), g = window.getComputedStyle(document.body).fontFamily;
  const q = f(() => e.toolbarBg ? ` bg-${e.toolbarBg}` : ""), p = f(() => ({ type: "a", flat: e.toolbarOutline !== true && e.toolbarPush !== true, noWrap: true, outline: e.toolbarOutline, push: e.toolbarPush, rounded: e.toolbarRounded, dense: true, color: e.toolbarColor, disable: !m.value, size: "sm" })), y = f(() => {
    const B = a.lang.editor, R = a.iconSet.editor;
    return { bold: { cmd: "bold", icon: R.bold, tip: B.bold, key: 66 }, italic: { cmd: "italic", icon: R.italic, tip: B.italic, key: 73 }, strike: { cmd: "strikeThrough", icon: R.strikethrough, tip: B.strikethrough, key: 83 }, underline: { cmd: "underline", icon: R.underline, tip: B.underline, key: 85 }, unordered: { cmd: "insertUnorderedList", icon: R.unorderedList, tip: B.unorderedList }, ordered: { cmd: "insertOrderedList", icon: R.orderedList, tip: B.orderedList }, subscript: { cmd: "subscript", icon: R.subscript, tip: B.subscript, htmlTip: "x<subscript>2</subscript>" }, superscript: { cmd: "superscript", icon: R.superscript, tip: B.superscript, htmlTip: "x<superscript>2</superscript>" }, link: { cmd: "link", disable: (J) => J.caret && !J.caret.can("link"), icon: R.hyperlink, tip: B.hyperlink, key: 76 }, fullscreen: { cmd: "fullscreen", icon: R.toggleFullscreen, tip: B.toggleFullscreen, key: 70 }, viewsource: { cmd: "viewsource", icon: R.viewSource, tip: B.viewSource }, quote: { cmd: "formatBlock", param: "BLOCKQUOTE", icon: R.quote, tip: B.quote, key: 81 }, left: { cmd: "justifyLeft", icon: R.left, tip: B.left }, center: { cmd: "justifyCenter", icon: R.center, tip: B.center }, right: { cmd: "justifyRight", icon: R.right, tip: B.right }, justify: { cmd: "justifyFull", icon: R.justify, tip: B.justify }, print: { type: "no-state", cmd: "print", icon: R.print, tip: B.print, key: 80 }, outdent: { type: "no-state", disable: (J) => J.caret && !J.caret.can("outdent"), cmd: "outdent", icon: R.outdent, tip: B.outdent }, indent: { type: "no-state", disable: (J) => J.caret && !J.caret.can("indent"), cmd: "indent", icon: R.indent, tip: B.indent }, removeFormat: { type: "no-state", cmd: "removeFormat", icon: R.removeFormat, tip: B.removeFormat }, hr: { type: "no-state", cmd: "insertHorizontalRule", icon: R.hr, tip: B.hr }, undo: { type: "no-state", cmd: "undo", icon: R.undo, tip: B.undo, key: 90 }, redo: { type: "no-state", cmd: "redo", icon: R.redo, tip: B.redo, key: 89 }, h1: { cmd: "formatBlock", param: "H1", icon: R.heading1 || R.heading, tip: B.heading1, htmlTip: `<h1 class="q-ma-none">${B.heading1}</h1>` }, h2: { cmd: "formatBlock", param: "H2", icon: R.heading2 || R.heading, tip: B.heading2, htmlTip: `<h2 class="q-ma-none">${B.heading2}</h2>` }, h3: { cmd: "formatBlock", param: "H3", icon: R.heading3 || R.heading, tip: B.heading3, htmlTip: `<h3 class="q-ma-none">${B.heading3}</h3>` }, h4: { cmd: "formatBlock", param: "H4", icon: R.heading4 || R.heading, tip: B.heading4, htmlTip: `<h4 class="q-ma-none">${B.heading4}</h4>` }, h5: { cmd: "formatBlock", param: "H5", icon: R.heading5 || R.heading, tip: B.heading5, htmlTip: `<h5 class="q-ma-none">${B.heading5}</h5>` }, h6: { cmd: "formatBlock", param: "H6", icon: R.heading6 || R.heading, tip: B.heading6, htmlTip: `<h6 class="q-ma-none">${B.heading6}</h6>` }, p: { cmd: "formatBlock", param: e.paragraphTag, icon: R.heading, tip: B.paragraph }, code: { cmd: "formatBlock", param: "PRE", icon: R.code, htmlTip: `<code>${B.code}</code>` }, "size-1": { cmd: "fontSize", param: "1", icon: R.size1 || R.size, tip: B.size1, htmlTip: `<font size="1">${B.size1}</font>` }, "size-2": { cmd: "fontSize", param: "2", icon: R.size2 || R.size, tip: B.size2, htmlTip: `<font size="2">${B.size2}</font>` }, "size-3": { cmd: "fontSize", param: "3", icon: R.size3 || R.size, tip: B.size3, htmlTip: `<font size="3">${B.size3}</font>` }, "size-4": { cmd: "fontSize", param: "4", icon: R.size4 || R.size, tip: B.size4, htmlTip: `<font size="4">${B.size4}</font>` }, "size-5": { cmd: "fontSize", param: "5", icon: R.size5 || R.size, tip: B.size5, htmlTip: `<font size="5">${B.size5}</font>` }, "size-6": { cmd: "fontSize", param: "6", icon: R.size6 || R.size, tip: B.size6, htmlTip: `<font size="6">${B.size6}</font>` }, "size-7": { cmd: "fontSize", param: "7", icon: R.size7 || R.size, tip: B.size7, htmlTip: `<font size="7">${B.size7}</font>` } };
  }), b = f(() => {
    const B = e.definitions || {}, R = e.definitions || e.fonts ? yh(true, {}, y.value, B, Xp(g, a.lang.editor.defaultFont, a.iconSet.editor.font, e.fonts)) : y.value;
    return e.toolbar.map((J) => J.map((O) => {
      if (O.options) return { type: "dropdown", icon: O.icon, label: O.label, size: "sm", dense: true, fixedLabel: O.fixedLabel, fixedIcon: O.fixedIcon, highlight: O.highlight, list: O.list, options: O.options.map((we) => R[we]) };
      const re = R[O];
      return re ? re.type === "no-state" || B[O] && (re.cmd === void 0 || y.value[re.cmd] && y.value[re.cmd].type === "no-state") ? re : Object.assign({ type: "toggle" }, re) : { type: "slot", slot: O };
    }));
  }), _ = { $q: a, props: e, slots: t, emit: n, inFullscreen: o, toggleFullscreen: i, runCmd: M, isViewingSource: h, editLinkUrl: v, toolbarBackgroundClass: q, buttonProps: p, contentRef: s, buttons: b, setContent: Q };
  he(() => e.modelValue, (B) => {
    S !== B && (S = B, Q(B, true));
  }), he(v, (B) => {
    n(`link${B ? "Show" : "Hide"}`);
  });
  const E = f(() => e.toolbar && e.toolbar.length !== 0), A = f(() => {
    const B = {}, R = (J) => {
      J.key && (B[J.key] = { cmd: J.cmd, param: J.param });
    };
    return b.value.forEach((J) => {
      J.forEach((O) => {
        O.options ? O.options.forEach(R) : R(O);
      });
    }), B;
  }), V = f(() => o.value ? e.contentStyle : [{ minHeight: e.minHeight, height: e.height, maxHeight: e.maxHeight }, e.contentStyle]), L = f(() => `q-editor q-editor--${h.value === true ? "source" : "default"}` + (e.disable === true ? " disabled" : "") + (o.value === true ? " fullscreen column" : "") + (e.square === true ? " q-editor--square no-border-radius" : "") + (e.flat === true ? " q-editor--flat" : "") + (e.dense === true ? " q-editor--dense" : "") + (r.value === true ? " q-editor--dark q-dark" : "")), P = f(() => [e.contentClass, "q-editor__content", { col: o.value, "overflow-auto": o.value || e.maxHeight }]), F = f(() => e.disable === true ? { "aria-disabled": "true" } : {});
  function T() {
    if (s.value !== null) {
      const B = `inner${h.value === true ? "Text" : "HTML"}`, R = s.value[B];
      R !== e.modelValue && (S = R, n("update:modelValue", R));
    }
  }
  function x(B) {
    if (n("keydown", B), B.ctrlKey !== true || Wl(B) === true) {
      ee();
      return;
    }
    const R = B.keyCode, J = A.value[R];
    if (J !== void 0) {
      const { cmd: O, param: re } = J;
      je(B), M(O, re, false);
    }
  }
  function C(B) {
    ee(), n("click", B);
  }
  function D(B) {
    if (s.value !== null) {
      const { scrollTop: R, scrollHeight: J } = s.value;
      w = J - R;
    }
    _.caret.save(), n("blur", B);
  }
  function H(B) {
    Ge(() => {
      s.value !== null && w !== void 0 && (s.value.scrollTop = s.value.scrollHeight - w);
    }), n("focus", B);
  }
  function j(B) {
    const R = c.value;
    if (R !== null && R.contains(B.target) === true && (B.relatedTarget === null || R.contains(B.relatedTarget) !== true)) {
      const J = `inner${h.value === true ? "Text" : "HTML"}`;
      _.caret.restorePosition(s.value[J].length), ee();
    }
  }
  function W(B) {
    const R = c.value;
    R !== null && R.contains(B.target) === true && (B.relatedTarget === null || R.contains(B.relatedTarget) !== true) && (_.caret.savePosition(), ee());
  }
  function te() {
    w = void 0;
  }
  function pe(B) {
    _.caret.save();
  }
  function Q(B, R) {
    if (s.value !== null) {
      R === true && _.caret.savePosition();
      const J = `inner${h.value === true ? "Text" : "HTML"}`;
      s.value[J] = B, R === true && (_.caret.restorePosition(s.value[J].length), ee());
    }
  }
  function M(B, R, J = true) {
    X(), _.caret.restore(), _.caret.apply(B, R, () => {
      X(), _.caret.save(), J && ee();
    });
  }
  function ee() {
    setTimeout(() => {
      v.value = null, l.$forceUpdate();
    }, 1);
  }
  function X() {
    Pa(() => {
      var _a2;
      (_a2 = s.value) == null ? void 0 : _a2.focus({ preventScroll: true });
    });
  }
  function be() {
    return s.value;
  }
  return ft(() => {
    _.caret = l.caret = new Kp(s.value, _), Q(e.modelValue), ee(), document.addEventListener("selectionchange", pe);
  }), Ke(() => {
    document.removeEventListener("selectionchange", pe);
  }), Object.assign(l, { runCmd: M, refreshToolbar: ee, focus: X, getContentEl: be }), () => {
    let B;
    if (E.value) {
      const R = [d("div", { key: "qedt_top", class: "q-editor__toolbar row no-wrap scroll-x" + q.value }, Gp(_))];
      v.value !== null && R.push(d("div", { key: "qedt_btm", class: "q-editor__toolbar row no-wrap items-center scroll-x" + q.value }, Zp(_))), B = d("div", { key: "toolbar_ctainer", class: "q-editor__toolbars-container" }, R);
    }
    return d("div", { ref: c, class: L.value, style: { height: o.value === true ? "100%" : null }, ...F.value, onFocusin: j, onFocusout: W }, [B, d("div", { ref: s, style: V.value, class: P.value, contenteditable: m.value, placeholder: e.placeholder, ...u.listeners.value, onInput: T, onKeydown: x, onClick: C, onBlur: D, onFocus: H, onMousedown: te, onTouchstartPassive: te })]);
  };
} });
var zu = ve({ name: "QItemLabel", props: { overline: Boolean, caption: Boolean, header: Boolean, lines: [Number, String] }, setup(e, { slots: t }) {
  const n = f(() => parseInt(e.lines, 10)), l = f(() => "q-item__label" + (e.overline === true ? " q-item__label--overline text-overline" : "") + (e.caption === true ? " q-item__label--caption text-caption" : "") + (e.header === true ? " q-item__label--header" : "") + (n.value === 1 ? " ellipsis" : "")), a = f(() => e.lines !== void 0 && n.value > 1 ? { overflow: "hidden", display: "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": n.value } : null);
  return () => d("div", { style: a.value, class: l.value }, Pe(t.default));
} }), Ds = ve({ name: "QSlideTransition", props: { appear: Boolean, duration: { type: Number, default: 300 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: n }) {
  let l = false, a, r, o = null, i = null, u, c;
  function s() {
    a == null ? void 0 : a(), a = null, l = false, o !== null && (clearTimeout(o), o = null), i !== null && (clearTimeout(i), i = null), r == null ? void 0 : r.removeEventListener("transitionend", u), u = null;
  }
  function v(w, S, q) {
    S !== void 0 && (w.style.height = `${S}px`), w.style.transition = `height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`, l = true, a = q;
  }
  function h(w, S) {
    w.style.overflowY = null, w.style.height = null, w.style.transition = null, s(), S !== c && n(S);
  }
  function m(w, S) {
    let q = 0;
    r = w, l === true ? (s(), q = w.offsetHeight === w.scrollHeight ? 0 : void 0) : (c = "hide", w.style.overflowY = "hidden"), v(w, q, S), o = setTimeout(() => {
      o = null, w.style.height = `${w.scrollHeight}px`, u = (p) => {
        i = null, (Object(p) !== p || p.target === w) && h(w, "show");
      }, w.addEventListener("transitionend", u), i = setTimeout(u, e.duration * 1.1);
    }, 100);
  }
  function g(w, S) {
    let q;
    r = w, l === true ? s() : (c = "show", w.style.overflowY = "hidden", q = w.scrollHeight), v(w, q, S), o = setTimeout(() => {
      o = null, w.style.height = 0, u = (p) => {
        i = null, (Object(p) !== p || p.target === w) && h(w, "hide");
      }, w.addEventListener("transitionend", u), i = setTimeout(u, e.duration * 1.1);
    }, 100);
  }
  return Ke(() => {
    l === true && s();
  }), () => d(Ft, { css: false, appear: e.appear, onEnter: m, onLeave: g }, t.default);
} }), t1 = { true: "inset", item: "item-inset", "item-thumbnail": "item-thumbnail-inset" }, Gi = { xs: 2, sm: 4, md: 8, lg: 16, xl: 24 }, Ul = ve({ name: "QSeparator", props: { ...nt, spaced: [Boolean, String], inset: [Boolean, String], vertical: Boolean, color: String, size: String }, setup(e) {
  const t = Se(), n = lt(e, t.proxy.$q), l = f(() => e.vertical === true ? "vertical" : "horizontal"), a = f(() => ` q-separator--${l.value}`), r = f(() => e.inset !== false ? `${a.value}-${t1[e.inset]}` : ""), o = f(() => `q-separator${a.value}${r.value}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (n.value === true ? " q-separator--dark" : "")), i = f(() => {
    const u = {};
    if (e.size !== void 0 && (u[e.vertical === true ? "width" : "height"] = e.size), e.spaced !== false) {
      const c = e.spaced === true ? `${Gi.md}px` : e.spaced in Gi ? `${Gi[e.spaced]}px` : e.spaced, s = e.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
      u[`margin${s[0]}`] = u[`margin${s[1]}`] = c;
    }
    return u;
  });
  return () => d("hr", { class: o.value, style: i.value, "aria-orientation": l.value });
} }), Ml = os({}), n1 = Object.keys($r);
ve({ name: "QExpansionItem", props: { ...$r, ...$a, ...nt, icon: String, label: String, labelLines: [Number, String], caption: String, captionLines: [Number, String], dense: Boolean, toggleAriaLabel: String, expandIcon: String, expandedIcon: String, expandIconClass: [Array, String, Object], duration: {}, headerInsetLevel: Number, contentInsetLevel: Number, expandSeparator: Boolean, defaultOpened: Boolean, hideExpandIcon: Boolean, expandIconToggle: Boolean, switchToggleSide: Boolean, denseToggle: Boolean, group: String, popup: Boolean, headerStyle: [Array, String, Object], headerClass: [Array, String, Object] }, emits: [...Aa, "click", "afterShow", "afterHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = lt(e, l), r = U(e.modelValue !== null ? e.modelValue : e.defaultOpened), o = U(null), i = si(), { show: u, hide: c, toggle: s } = Ra({ showing: r });
  let v, h;
  const m = f(() => `q-expansion-item q-item-type q-expansion-item--${r.value === true ? "expanded" : "collapsed"} q-expansion-item--${e.popup === true ? "popup" : "standard"}`), g = f(() => e.contentInsetLevel === void 0 ? null : { ["padding" + (l.lang.rtl === true ? "Right" : "Left")]: e.contentInsetLevel * 56 + "px" }), w = f(() => e.disable !== true && (e.href !== void 0 || e.to !== void 0 && e.to !== null && e.to !== "")), S = f(() => {
    const j = {};
    return n1.forEach((W) => {
      j[W] = e[W];
    }), j;
  }), q = f(() => w.value === true || e.expandIconToggle !== true), p = f(() => e.expandedIcon !== void 0 && r.value === true ? e.expandedIcon : e.expandIcon || l.iconSet.expansionItem[e.denseToggle === true ? "denseIcon" : "icon"]), y = f(() => e.disable !== true && (w.value === true || e.expandIconToggle === true)), b = f(() => ({ expanded: r.value === true, detailsId: i.value, toggle: s, show: u, hide: c })), _ = f(() => {
    const j = e.toggleAriaLabel !== void 0 ? e.toggleAriaLabel : l.lang.label[r.value === true ? "collapse" : "expand"](e.label);
    return { role: "button", "aria-expanded": r.value === true ? "true" : "false", "aria-controls": i.value, "aria-label": j };
  });
  he(() => e.group, (j) => {
    h == null ? void 0 : h(), j !== void 0 && F();
  });
  function E(j) {
    w.value !== true && s(j), n("click", j);
  }
  function A(j) {
    j.keyCode === 13 && V(j, true);
  }
  function V(j, W) {
    var _a2;
    W !== true && j.qAvoidFocus !== true && ((_a2 = o.value) == null ? void 0 : _a2.focus()), s(j), je(j);
  }
  function L() {
    n("afterShow");
  }
  function P() {
    n("afterHide");
  }
  function F() {
    v === void 0 && (v = wr()), r.value === true && (Ml[e.group] = v);
    const j = he(r, (te) => {
      te === true ? Ml[e.group] = v : Ml[e.group] === v && delete Ml[e.group];
    }), W = he(() => Ml[e.group], (te, pe) => {
      pe === v && te !== void 0 && te !== v && c();
    });
    h = () => {
      j(), W(), Ml[e.group] === v && delete Ml[e.group], h = void 0;
    };
  }
  function T() {
    const j = { class: [`q-focusable relative-position cursor-pointer${e.denseToggle === true && e.switchToggleSide === true ? " items-end" : ""}`, e.expandIconClass], side: e.switchToggleSide !== true, avatar: e.switchToggleSide }, W = [d(et, { class: "q-expansion-item__toggle-icon" + (e.expandedIcon === void 0 && r.value === true ? " q-expansion-item__toggle-icon--rotated" : ""), name: p.value })];
    return y.value === true && (Object.assign(j, { tabindex: 0, ..._.value, onClick: V, onKeyup: A }), W.unshift(d("div", { ref: o, class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded", tabindex: -1 }))), d(mn, j, () => W);
  }
  function x() {
    let j;
    return t.header !== void 0 ? j = [].concat(t.header(b.value)) : (j = [d(mn, () => [d(zu, { lines: e.labelLines }, () => e.label || ""), e.caption ? d(zu, { lines: e.captionLines, caption: true }, () => e.caption) : null])], e.icon && j[e.switchToggleSide === true ? "push" : "unshift"](d(mn, { side: e.switchToggleSide === true, avatar: e.switchToggleSide !== true }, () => d(et, { name: e.icon })))), e.disable !== true && e.hideExpandIcon !== true && j[e.switchToggleSide === true ? "unshift" : "push"](T()), j;
  }
  function C() {
    const j = { ref: "item", style: e.headerStyle, class: e.headerClass, dark: a.value, disable: e.disable, dense: e.dense, insetLevel: e.headerInsetLevel };
    return q.value === true && (j.clickable = true, j.onClick = E, Object.assign(j, w.value === true ? S.value : _.value)), d(Ca, j, x);
  }
  function D() {
    return sn(d("div", { key: "e-content", class: "q-expansion-item__content relative-position", style: g.value, id: i.value }, Pe(t.default)), [[Hv, r.value]]);
  }
  function H() {
    const j = [C(), d(Ds, { duration: e.duration, onShow: L, onHide: P }, D)];
    return e.expandSeparator === true && j.push(d(Ul, { class: "q-expansion-item__border q-expansion-item__border--top absolute-top", dark: a.value }), d(Ul, { class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom", dark: a.value })), j;
  }
  return e.group !== void 0 && F(), Ke(() => {
    h == null ? void 0 : h();
  }), () => d("div", { class: m.value }, [d("div", { class: "q-expansion-item__container relative-position" }, H())]);
} });
var l1 = ["top", "right", "bottom", "left"], Du = { type: { type: String, default: "a" }, outline: Boolean, push: Boolean, flat: Boolean, unelevated: Boolean, color: String, textColor: String, glossy: Boolean, square: Boolean, padding: String, label: { type: [String, Number], default: "" }, labelPosition: { type: String, default: "right", validator: (e) => l1.includes(e) }, externalLabel: Boolean, hideLabel: { type: Boolean }, labelClass: [Array, String, Object], labelStyle: [Array, String, Object], disable: Boolean, tabindex: [Number, String] };
function ph(e, t) {
  return { formClass: f(() => `q-fab--form-${e.square === true ? "square" : "rounded"}`), stacked: f(() => e.externalLabel === false && ["top", "bottom"].includes(e.labelPosition)), labelProps: f(() => {
    if (e.externalLabel === true) {
      const n = e.hideLabel === null ? t.value === false : e.hideLabel;
      return { action: "push", data: { class: [e.labelClass, `q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}` + (n === true ? " q-fab__label--external-hidden" : "")], style: e.labelStyle } };
    }
    return { action: ["left", "top"].includes(e.labelPosition) ? "unshift" : "push", data: { class: [e.labelClass, `q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}` + (e.hideLabel === true ? " q-fab__label--internal-hidden" : "")], style: e.labelStyle } };
  }) };
}
var a1 = ["up", "right", "down", "left"], r1 = ["left", "center", "right"];
ve({ name: "QFab", props: { ...Du, ...$a, icon: String, activeIcon: String, hideIcon: Boolean, hideLabel: { ...Du.hideLabel, default: null }, direction: { type: String, default: "right", validator: (e) => a1.includes(e) }, persistent: Boolean, verticalActionsAlign: { type: String, default: "center", validator: (e) => r1.includes(e) } }, emits: Aa, setup(e, { slots: t }) {
  const n = U(null), l = U(e.modelValue === true), a = si(), { proxy: { $q: r } } = Se(), { formClass: o, labelProps: i } = ph(e, l), u = f(() => e.persistent !== true), { hide: c, toggle: s } = Ra({ showing: l, hideOnRouteChange: u }), v = f(() => ({ opened: l.value })), h = f(() => `q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${o.value}` + (l.value === true ? " q-fab--opened" : " q-fab--closed")), m = f(() => `q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${l.value === true ? "opened" : "closed"}`), g = f(() => {
    const p = { id: a.value, role: "menu" };
    return l.value !== true && (p["aria-hidden"] = "true"), p;
  }), w = f(() => `q-fab__icon-holder  q-fab__icon-holder--${l.value === true ? "opened" : "closed"}`);
  function S(p, y) {
    const b = t[p], _ = `q-fab__${p} absolute-full`;
    return b === void 0 ? d(et, { class: _, name: e[y] || r.iconSet.fab[y] }) : d("div", { class: _ }, b(v.value));
  }
  function q() {
    const p = [];
    return e.hideIcon !== true && p.push(d("div", { class: w.value }, [S("icon", "icon"), S("active-icon", "activeIcon")])), (e.label !== "" || t.label !== void 0) && p[i.value.action](d("div", i.value.data, t.label !== void 0 ? t.label(v.value) : [e.label])), qt(t.tooltip, p);
  }
  return hn(rm, { showing: l, onChildClick(p) {
    var _a2;
    c(p), (p == null ? void 0 : p.qAvoidFocus) !== true && ((_a2 = n.value) == null ? void 0 : _a2.$el.focus());
  } }), () => d("div", { class: h.value }, [d(Ze, { ref: n, class: o.value, ...e, noWrap: true, stack: e.stacked, align: void 0, icon: void 0, label: void 0, noCaps: true, fab: true, "aria-expanded": l.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": a.value, onClick: s }, q), d("div", { class: m.value, ...g.value }, Pe(t.default))]);
} });
var _h = { start: "self-end", center: "self-center", end: "self-start" }, o1 = Object.keys(_h);
ve({ name: "QFabAction", props: { ...Du, icon: { type: String, default: "" }, anchor: { type: String, validator: (e) => o1.includes(e) }, to: [String, Object], replace: Boolean }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const l = Tt(rm, () => ({ showing: { value: true }, onChildClick: St })), { formClass: a, labelProps: r } = ph(e, l.showing), o = f(() => {
    const v = _h[e.anchor];
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
function i1({ validate: e, resetValidation: t, requiresQForm: n }) {
  const l = Tt(om, false);
  if (l !== false) {
    const { props: a, proxy: r } = Se();
    Object.assign(r, { validate: e, resetValidation: t }), he(() => a.disable, (o) => {
      o === true ? (typeof t == "function" && t(), l.unbindComponent(r)) : l.bindComponent(r);
    }), ft(() => {
      a.disable !== true && l.bindComponent(r);
    }), Ke(() => {
      a.disable !== true && l.unbindComponent(r);
    });
  } else n === true && console.error("Parent QForm not found on useFormChild()!");
}
var u1 = [true, false, "ondemand"], s1 = { modelValue: {}, error: { type: Boolean, default: null }, errorMessage: String, noErrorIcon: Boolean, rules: Array, reactiveRules: Boolean, lazyRules: { type: [Boolean, String], default: false, validator: (e) => u1.includes(e) } };
function c1(e, t) {
  const { props: n, proxy: l } = Se(), a = U(false), r = U(null), o = U(false);
  i1({ validate: w, resetValidation: g });
  let i = 0, u;
  const c = f(() => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0), s = f(() => n.disable !== true && c.value === true && t.value === false), v = f(() => n.error === true || a.value === true), h = f(() => typeof n.errorMessage == "string" && n.errorMessage.length !== 0 ? n.errorMessage : r.value);
  he(() => n.modelValue, () => {
    o.value = true, s.value === true && n.lazyRules === false && S();
  });
  function m() {
    n.lazyRules !== "ondemand" && s.value === true && o.value === true && S();
  }
  he(() => n.reactiveRules, (q) => {
    q === true ? u === void 0 && (u = he(() => n.rules, m, { immediate: true, deep: true })) : u !== void 0 && (u(), u = void 0);
  }, { immediate: true }), he(() => n.lazyRules, m), he(e, (q) => {
    q === true ? o.value = true : s.value === true && n.lazyRules !== "ondemand" && S();
  });
  function g() {
    i++, t.value = false, o.value = false, a.value = false, r.value = null, S.cancel();
  }
  function w(q = n.modelValue) {
    if (n.disable === true || c.value === false) return true;
    const p = ++i, y = t.value !== true ? () => {
      o.value = true;
    } : () => {
    }, b = (E, A) => {
      E === true && y(), a.value = E, r.value = A || null, t.value = false;
    }, _ = [];
    for (let E = 0; E < n.rules.length; E++) {
      const A = n.rules[E];
      let V;
      if (typeof A == "function" ? V = A(q, io) : typeof A == "string" && io[A] !== void 0 && (V = io[A](q)), V === false || typeof V == "string") return b(true, V), false;
      V !== true && V !== void 0 && _.push(V);
    }
    return _.length === 0 ? (b(false), true) : (t.value = true, Promise.all(_).then((E) => {
      if (E === void 0 || Array.isArray(E) === false || E.length === 0) return p === i && b(false), true;
      const A = E.find((V) => V === false || typeof V == "string");
      return p === i && b(A !== void 0, A), A === void 0;
    }, (E) => (p === i && (console.error(E), b(true)), false)));
  }
  const S = Ea(w, 0);
  return Ke(() => {
    u == null ? void 0 : u(), S.cancel();
  }), Object.assign(l, { resetValidation: g, validate: w }), Ot(l, "hasError", () => v.value), { isDirtyModel: o, hasRules: c, hasError: v, errorMessage: h, validate: w, resetValidation: g };
}
function Ql(e) {
  return e != null && ("" + e).length !== 0;
}
var wh = { ...nt, ...s1, label: String, stackLabel: Boolean, hint: String, hideHint: Boolean, prefix: String, suffix: String, labelColor: String, color: String, bgColor: String, filled: Boolean, outlined: Boolean, borderless: Boolean, standout: [Boolean, String], square: Boolean, loading: Boolean, labelSlot: Boolean, bottomSlots: Boolean, hideBottomSpace: Boolean, rounded: Boolean, dense: Boolean, itemAligned: Boolean, counter: Boolean, clearable: Boolean, clearIcon: String, disable: Boolean, readonly: Boolean, autofocus: Boolean, for: String }, di = { ...wh, maxlength: [Number, String] }, fi = ["update:modelValue", "clear", "focus", "blur"];
function vi({ requiredForAttr: e = true, tagProp: t, changeEvent: n = false } = {}) {
  const { props: l, proxy: a } = Se(), r = lt(l, a.$q), o = si({ required: e, getValue: () => l.for });
  return { requiredForAttr: e, changeEvent: n, tag: t === true ? f(() => l.tag) : { value: "label" }, isDark: r, editable: f(() => l.disable !== true && l.readonly !== true), innerLoading: U(false), focused: U(false), hasPopupOpen: false, splitAttrs: bh(), targetUid: o, rootRef: U(null), targetRef: U(null), controlRef: U(null) };
}
function mi(e) {
  const { props: t, emit: n, slots: l, attrs: a, proxy: r } = Se(), { $q: o } = r;
  let i = null;
  e.hasValue === void 0 && (e.hasValue = f(() => Ql(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (W) => {
    n("update:modelValue", W);
  }), e.controlEvents === void 0 && (e.controlEvents = { onFocusin: L, onFocusout: P }), Object.assign(e, { clearValue: F, onControlFocusin: L, onControlFocusout: P, focus: A }), e.computedCounter === void 0 && (e.computedCounter = f(() => {
    if (t.counter !== false) {
      const W = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === true ? t.modelValue.length : 0, te = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
      return W + (te !== void 0 ? " / " + te : "");
    }
  }));
  const { isDirtyModel: u, hasRules: c, hasError: s, errorMessage: v, resetValidation: h } = c1(e.focused, e.innerLoading), m = e.floatingLabel !== void 0 ? f(() => t.stackLabel === true || e.focused.value === true || e.floatingLabel.value === true) : f(() => t.stackLabel === true || e.focused.value === true || e.hasValue.value === true), g = f(() => t.bottomSlots === true || t.hint !== void 0 || c.value === true || t.counter === true || t.error !== null), w = f(() => t.filled === true ? "filled" : t.outlined === true ? "outlined" : t.borderless === true ? "borderless" : t.standout ? "standout" : "standard"), S = f(() => `q-field row no-wrap items-start q-field--${w.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === true ? " q-field--rounded" : "") + (t.square === true ? " q-field--square" : "") + (m.value === true ? " q-field--float" : "") + (p.value === true ? " q-field--labeled" : "") + (t.dense === true ? " q-field--dense" : "") + (t.itemAligned === true ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === true ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === true ? " q-field--focused" : "") + (s.value === true ? " q-field--error" : "") + (s.value === true || e.focused.value === true ? " q-field--highlighted" : "") + (t.hideBottomSpace !== true && g.value === true ? " q-field--with-bottom" : "") + (t.disable === true ? " q-field--disabled" : t.readonly === true ? " q-field--readonly" : "")), q = f(() => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (s.value === true ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === true ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")), p = f(() => t.labelSlot === true || t.label !== void 0), y = f(() => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && s.value !== true ? ` text-${t.labelColor}` : "")), b = f(() => ({ id: e.targetUid.value, editable: e.editable.value, focused: e.focused.value, floatingLabel: m.value, modelValue: t.modelValue, emitValue: e.emitValue })), _ = f(() => {
    const W = {};
    return e.targetUid.value && (W.for = e.targetUid.value), t.disable === true && (W["aria-disabled"] = "true"), W;
  });
  function E() {
    var _a2;
    const W = document.activeElement;
    let te = (_a2 = e.targetRef) == null ? void 0 : _a2.value;
    te && (W === null || W.id !== e.targetUid.value) && (te.hasAttribute("tabindex") === true || (te = te.querySelector("[tabindex]")), te !== W && (te == null ? void 0 : te.focus({ preventScroll: true })));
  }
  function A() {
    Pa(E);
  }
  function V() {
    jy(E);
    const W = document.activeElement;
    W !== null && e.rootRef.value.contains(W) && W.blur();
  }
  function L(W) {
    i !== null && (clearTimeout(i), i = null), e.editable.value === true && e.focused.value === false && (e.focused.value = true, n("focus", W));
  }
  function P(W, te) {
    i !== null && clearTimeout(i), i = setTimeout(() => {
      i = null, !(document.hasFocus() === true && (e.hasPopupOpen === true || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement) !== false)) && (e.focused.value === true && (e.focused.value = false, n("blur", W)), te == null ? void 0 : te());
    });
  }
  function F(W) {
    var _a2;
    je(W), o.platform.is.mobile !== true ? (((_a2 = e.targetRef) == null ? void 0 : _a2.value) || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === true && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), n("update:modelValue", null), e.changeEvent === true && n("change", null), n("clear", t.modelValue), Ge(() => {
      const te = u.value;
      h(), u.value = te;
    });
  }
  function T(W) {
    [13, 32].includes(W.keyCode) && F(W);
  }
  function x() {
    const W = [];
    return l.prepend !== void 0 && W.push(d("div", { class: "q-field__prepend q-field__marginal row no-wrap items-center", key: "prepend", onClick: Vt }, l.prepend())), W.push(d("div", { class: "q-field__control-container col relative-position row no-wrap q-anchor--skip" }, C())), s.value === true && t.noErrorIcon === false && W.push(H("error", [d(et, { name: o.iconSet.field.error, color: "negative" })])), t.loading === true || e.innerLoading.value === true ? W.push(H("inner-loading-append", l.loading !== void 0 ? l.loading() : [d(_n, { color: t.color })])) : t.clearable === true && e.hasValue.value === true && e.editable.value === true && W.push(H("inner-clearable-append", [d(et, { class: "q-field__focusable-action", name: t.clearIcon || o.iconSet.field.clear, tabindex: 0, role: "button", "aria-hidden": "false", "aria-label": o.lang.label.clear, onKeyup: T, onClick: F })])), l.append !== void 0 && W.push(d("div", { class: "q-field__append q-field__marginal row no-wrap items-center", key: "append", onClick: Vt }, l.append())), e.getInnerAppend !== void 0 && W.push(H("inner-append", e.getInnerAppend())), e.getControlChild !== void 0 && W.push(e.getControlChild()), W;
  }
  function C() {
    const W = [];
    return t.prefix !== void 0 && t.prefix !== null && W.push(d("div", { class: "q-field__prefix no-pointer-events row items-center" }, t.prefix)), e.getShadowControl !== void 0 && e.hasShadow.value === true && W.push(e.getShadowControl()), e.getControl !== void 0 ? W.push(e.getControl()) : l.rawControl !== void 0 ? W.push(l.rawControl()) : l.control !== void 0 && W.push(d("div", { ref: e.targetRef, class: "q-field__native row", tabindex: -1, ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0 }, l.control(b.value))), p.value === true && W.push(d("div", { class: y.value }, Pe(l.label, t.label))), t.suffix !== void 0 && t.suffix !== null && W.push(d("div", { class: "q-field__suffix no-pointer-events row items-center" }, t.suffix)), W.concat(Pe(l.default));
  }
  function D() {
    let W, te;
    s.value === true ? v.value !== null ? (W = [d("div", { role: "alert" }, v.value)], te = `q--slot-error-${v.value}`) : (W = Pe(l.error), te = "q--slot-error") : (t.hideHint !== true || e.focused.value === true) && (t.hint !== void 0 ? (W = [d("div", t.hint)], te = `q--slot-hint-${t.hint}`) : (W = Pe(l.hint), te = "q--slot-hint"));
    const pe = t.counter === true || l.counter !== void 0;
    if (t.hideBottomSpace === true && pe === false && W === void 0) return;
    const Q = d("div", { key: te, class: "q-field__messages col" }, W);
    return d("div", { class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== true ? "animated" : "stale"), onClick: Vt }, [t.hideBottomSpace === true ? Q : d(Ft, { name: "q-transition--field-message" }, () => Q), pe === true ? d("div", { class: "q-field__counter" }, l.counter !== void 0 ? l.counter() : e.computedCounter.value) : null]);
  }
  function H(W, te) {
    return te === null ? null : d("div", { key: W, class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip" }, te);
  }
  let j = false;
  return On(() => {
    j = true;
  }), wl(() => {
    j === true && t.autofocus === true && r.focus();
  }), t.autofocus === true && ft(() => {
    r.focus();
  }), Ke(() => {
    i !== null && clearTimeout(i);
  }), Object.assign(r, { focus: A, blur: V }), function() {
    const te = e.getControl === void 0 && l.control === void 0 ? { ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0, ..._.value } : _.value;
    return d(e.tag.value, { ref: e.rootRef, class: [S.value, a.class], style: a.style, ...te }, [l.before !== void 0 ? d("div", { class: "q-field__before q-field__marginal row no-wrap items-center", onClick: Vt }, l.before()) : null, d("div", { class: "q-field__inner relative-position col self-stretch" }, [d("div", { ref: e.controlRef, class: q.value, tabindex: -1, ...e.controlEvents }, x()), g.value === true ? D() : null]), l.after !== void 0 ? d("div", { class: "q-field__after q-field__marginal row no-wrap items-center", onClick: Vt }, l.after()) : null]);
  };
}
var d1 = ve({ name: "QField", inheritAttrs: false, props: { ...di, tag: { type: String, default: "label" } }, emits: fi, setup() {
  return mi(vi({ tagProp: true }));
} });
function aa(e, t, n, l) {
  const a = [];
  return e.forEach((r) => {
    l(r) === true ? a.push(r) : t.push({ failedPropValidation: n, file: r });
  }), a;
}
function Wr(e) {
  (e == null ? void 0 : e.dataTransfer) && (e.dataTransfer.dropEffect = "copy"), je(e);
}
var Sh = { multiple: Boolean, accept: String, capture: String, maxFileSize: [Number, String], maxTotalSize: [Number, String], maxFiles: [Number, String], filter: Function }, xh = ["rejected"];
function Ch({ editable: e, dnd: t, getFileInput: n, addFilesToQueue: l }) {
  const { props: a, emit: r, proxy: o } = Se(), i = U(null), u = f(() => a.accept !== void 0 ? a.accept.split(",").map((p) => (p = p.trim(), p === "*" ? "*/" : (p.endsWith("/*") && (p = p.slice(0, p.length - 1)), p.toUpperCase()))) : null), c = f(() => parseInt(a.maxFiles, 10)), s = f(() => parseInt(a.maxTotalSize, 10));
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
  function m(p, y, b, _) {
    let E = Array.from(y || p.target.files);
    const A = [], V = () => {
      A.length !== 0 && r("rejected", A);
    };
    if (a.accept !== void 0 && u.value.indexOf("*/") === -1 && (E = aa(E, A, "accept", (L) => u.value.some((P) => L.type.toUpperCase().startsWith(P) || L.name.toUpperCase().endsWith(P))), E.length === 0)) return V();
    if (a.maxFileSize !== void 0) {
      const L = parseInt(a.maxFileSize, 10);
      if (E = aa(E, A, "max-file-size", (P) => P.size <= L), E.length === 0) return V();
    }
    if (a.multiple !== true && E.length !== 0 && (E = [E[0]]), E.forEach((L) => {
      L.__key = L.webkitRelativePath + L.lastModified + L.name + L.size;
    }), _ === true) {
      const L = b.map((P) => P.__key);
      E = aa(E, A, "duplicate", (P) => L.includes(P.__key) === false);
    }
    if (E.length === 0) return V();
    if (a.maxTotalSize !== void 0) {
      let L = _ === true ? b.reduce((P, F) => P + F.size, 0) : 0;
      if (E = aa(E, A, "max-total-size", (P) => (L += P.size, L <= s.value)), E.length === 0) return V();
    }
    if (typeof a.filter == "function") {
      const L = a.filter(E);
      E = aa(E, A, "filter", (P) => L.includes(P));
    }
    if (a.maxFiles !== void 0) {
      let L = _ === true ? b.length : 0;
      if (E = aa(E, A, "max-files", () => (L++, L <= c.value)), E.length === 0) return V();
    }
    if (V(), E.length !== 0) return E;
  }
  function g(p) {
    Wr(p), t.value !== true && (t.value = true);
  }
  function w(p) {
    je(p), (p.relatedTarget !== null || ze.is.safari !== true ? p.relatedTarget !== i.value : document.elementsFromPoint(p.clientX, p.clientY).includes(i.value) === false) === true && (t.value = false);
  }
  function S(p) {
    Wr(p);
    const y = p.dataTransfer.files;
    y.length !== 0 && l(null, y), t.value = false;
  }
  function q(p) {
    if (t.value === true) return d("div", { ref: i, class: `q-${p}__dnd absolute-full`, onDragenter: Wr, onDragover: Wr, onDragleave: w, onDrop: S });
  }
  return Object.assign(o, { pickFiles: v, addFiles: h }), { pickFiles: v, addFiles: h, onDragover: g, onDragleave: w, processFiles: m, getDndNode: q, maxFilesNumber: c, maxTotalSizeNumber: s };
}
function kh(e, t) {
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
ve({ name: "QFile", inheritAttrs: false, props: { ...wh, ...wn, ...Sh, modelValue: [File, FileList, Array], append: Boolean, useChips: Boolean, displayValue: [String, Number], tabindex: { type: [String, Number], default: 0 }, counterLabel: Function, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...fi, ...xh], setup(e, { slots: t, emit: n, attrs: l }) {
  const { proxy: a } = Se(), r = vi(), o = U(null), i = U(false), u = Ms(e), { pickFiles: c, onDragover: s, onDragleave: v, processFiles: h, getDndNode: m } = Ch({ editable: r.editable, dnd: i, getFileInput: T, addFilesToQueue: x }), g = kh(e), w = f(() => Object(e.modelValue) === e.modelValue ? "length" in e.modelValue ? Array.from(e.modelValue) : [e.modelValue] : []), S = f(() => Ql(w.value)), q = f(() => w.value.map((j) => j.name).join(", ")), p = f(() => Eu(w.value.reduce((j, W) => j + W.size, 0))), y = f(() => ({ totalSize: p.value, filesNumber: w.value.length, maxFiles: e.maxFiles })), b = f(() => ({ tabindex: -1, type: "file", title: "", accept: e.accept, capture: e.capture, name: u.value, ...l, id: r.targetUid.value, disabled: r.editable.value !== true })), _ = f(() => "q-file q-field--auto-height" + (i.value === true ? " q-file--dnd" : "")), E = f(() => e.multiple === true && e.append === true);
  function A(j) {
    const W = w.value.slice();
    W.splice(j, 1), L(W);
  }
  function V(j) {
    const W = w.value.indexOf(j);
    W !== -1 && A(W);
  }
  function L(j) {
    n("update:modelValue", e.multiple === true ? j : j[0]);
  }
  function P(j) {
    j.keyCode === 13 && Vt(j);
  }
  function F(j) {
    (j.keyCode === 13 || j.keyCode === 32) && c(j);
  }
  function T() {
    return o.value;
  }
  function x(j, W) {
    const te = h(j, W, w.value, E.value), pe = T();
    pe != null && (pe.value = ""), te !== void 0 && ((e.multiple === true ? e.modelValue && te.every((Q) => w.value.includes(Q)) : e.modelValue === te[0]) || L(E.value === true ? w.value.concat(te) : te));
  }
  function C() {
    return [d("input", { class: [e.inputClass, "q-file__filler"], style: e.inputStyle })];
  }
  function D() {
    if (t.file !== void 0) return w.value.length === 0 ? C() : w.value.map((W, te) => t.file({ index: te, file: W, ref: this }));
    if (t.selected !== void 0) return w.value.length === 0 ? C() : t.selected({ files: w.value, ref: this });
    if (e.useChips === true) return w.value.length === 0 ? C() : w.value.map((W, te) => d(Nm, { key: "file-" + te, removable: r.editable.value, dense: true, textColor: e.color, tabindex: e.tabindex, onRemove: () => {
      A(te);
    } }, () => d("span", { class: "ellipsis", textContent: W.name })));
    const j = e.displayValue !== void 0 ? e.displayValue : q.value;
    return j.length !== 0 ? [d("div", { class: e.inputClass, style: e.inputStyle, textContent: j })] : C();
  }
  function H() {
    const j = { ref: o, ...b.value, ...g.value, class: "q-field__input fit absolute-full cursor-pointer", onChange: x };
    return e.multiple === true && (j.multiple = true), d("input", j);
  }
  return Object.assign(r, { fieldClass: _, emitValue: L, hasValue: S, inputRef: o, innerValue: w, floatingLabel: f(() => S.value === true || Ql(e.displayValue)), computedCounter: f(() => {
    if (e.counterLabel !== void 0) return e.counterLabel(y.value);
    const j = e.maxFiles;
    return `${w.value.length}${j !== void 0 ? " / " + j : ""} (${p.value})`;
  }), getControlChild: () => m("file"), getControl: () => {
    const j = { ref: r.targetRef, class: "q-field__native row items-center cursor-pointer", tabindex: e.tabindex };
    return r.editable.value === true && Object.assign(j, { onDragover: s, onDragleave: v, onKeydown: P, onKeyup: F }), d("div", j, [H()].concat(D()));
  } }), Object.assign(a, { removeAtIndex: A, removeFile: V, getNativeElement: () => o.value }), Ot(a, "nativeEl", () => o.value), mi(r);
} });
ve({ name: "QFooter", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = Tt(Yl, ot);
  if (a === ot) return console.error("QFooter needs to be child of QLayout"), ot;
  const r = U(parseInt(e.heightHint, 10)), o = U(true), i = U(nn.value === true || a.isContainer.value === true ? 0 : window.innerHeight), u = f(() => e.reveal === true || a.view.value.indexOf("F") !== -1 || l.platform.is.ios && a.isContainer.value === true), c = f(() => a.isContainer.value === true ? a.containerHeight.value : i.value), s = f(() => {
    if (e.modelValue !== true) return 0;
    if (u.value === true) return o.value === true ? r.value : 0;
    const _ = a.scroll.value.position + c.value + r.value - a.height.value;
    return _ > 0 ? _ : 0;
  }), v = f(() => e.modelValue !== true || u.value === true && o.value !== true), h = f(() => e.modelValue === true && v.value === true && e.reveal === true), m = f(() => "q-footer q-layout__section--marginal " + (u.value === true ? "fixed" : "absolute") + "-bottom" + (e.bordered === true ? " q-footer--bordered" : "") + (v.value === true ? " q-footer--hidden" : "") + (e.modelValue !== true ? " q-layout--prevent-focus" + (u.value !== true ? " hidden" : "") : "")), g = f(() => {
    const _ = a.rows.value.bottom, E = {};
    return _[0] === "l" && a.left.space === true && (E[l.lang.rtl === true ? "right" : "left"] = `${a.left.size}px`), _[2] === "r" && a.right.space === true && (E[l.lang.rtl === true ? "left" : "right"] = `${a.right.size}px`), E;
  });
  function w(_, E) {
    a.update("footer", _, E);
  }
  function S(_, E) {
    _.value !== E && (_.value = E);
  }
  function q({ height: _ }) {
    S(r, _), w("size", _);
  }
  function p() {
    if (e.reveal !== true) return;
    const { direction: _, position: E, inflectionPoint: A } = a.scroll.value;
    S(o, _ === "up" || E - A < 100 || a.height.value - c.value - E - r.value < 300);
  }
  function y(_) {
    h.value === true && S(o, true), n("focusin", _);
  }
  he(() => e.modelValue, (_) => {
    w("space", _), S(o, true), a.animate();
  }), he(s, (_) => {
    w("offset", _);
  }), he(() => e.reveal, (_) => {
    _ === false && S(o, e.modelValue);
  }), he(o, (_) => {
    a.animate(), n("reveal", _);
  }), he([r, a.scroll, a.height], p), he(() => l.screen.height, (_) => {
    a.isContainer.value !== true && S(i, _);
  });
  const b = {};
  return a.instances.footer = b, e.modelValue === true && w("size", r.value), w("space", e.modelValue), w("offset", s.value), Ke(() => {
    a.instances.footer === b && (a.instances.footer = void 0, w("size", 0), w("offset", 0), w("space", false));
  }), () => {
    const _ = qt(t.default, [d(jl, { debounce: 0, onResize: q })]);
    return e.elevated === true && _.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), d("footer", { class: m.value, style: g.value, onFocusin: y }, _);
  };
} });
ve({ name: "QForm", props: { autofocus: Boolean, noErrorFocus: Boolean, noResetFocus: Boolean, greedy: Boolean, onSubmit: Function }, emits: ["reset", "validationSuccess", "validationError"], setup(e, { slots: t, emit: n }) {
  const l = Se(), a = U(null);
  let r = 0;
  const o = [];
  function i(m) {
    const g = typeof m == "boolean" ? m : e.noErrorFocus !== true, w = ++r, S = (y, b) => {
      n(`validation${y === true ? "Success" : "Error"}`, b);
    }, q = (y) => {
      const b = y.validate();
      return typeof b.then == "function" ? b.then((_) => ({ valid: _, comp: y }), (_) => ({ valid: false, comp: y, err: _ })) : Promise.resolve({ valid: b, comp: y });
    };
    return (e.greedy === true ? Promise.all(o.map(q)).then((y) => y.filter((b) => b.valid !== true)) : o.reduce((y, b) => y.then(() => q(b).then((_) => {
      if (_.valid === false) return Promise.reject(_);
    })), Promise.resolve()).catch((y) => [y])).then((y) => {
      if (y === void 0 || y.length === 0) return w === r && S(true), true;
      if (w === r) {
        const { comp: b, err: _ } = y[0];
        if (_ !== void 0 && console.error(_), S(false, b), g === true) {
          const E = y.find(({ comp: A }) => typeof A.focus == "function" && hl(A.$) === false);
          E !== void 0 && E.comp.focus();
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
    i().then((w) => {
      g === r && w === true && (e.onSubmit !== void 0 ? n("submit", m) : (m == null ? void 0 : m.target) !== void 0 && typeof m.target.submit == "function" && m.target.submit());
    });
  }
  function s(m) {
    m !== void 0 && je(m), n("reset"), Ge(() => {
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
  hn(om, { bindComponent(m) {
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
var f1 = ve({ name: "QHeader", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, revealOffset: { type: Number, default: 250 }, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = Tt(Yl, ot);
  if (a === ot) return console.error("QHeader needs to be child of QLayout"), ot;
  const r = U(parseInt(e.heightHint, 10)), o = U(true), i = f(() => e.reveal === true || a.view.value.indexOf("H") !== -1 || l.platform.is.ios && a.isContainer.value === true), u = f(() => {
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
  function w({ height: p }) {
    g(r, p), m("size", p);
  }
  function S(p) {
    s.value === true && g(o, true), n("focusin", p);
  }
  he(() => e.modelValue, (p) => {
    m("space", p), g(o, true), a.animate();
  }), he(u, (p) => {
    m("offset", p);
  }), he(() => e.reveal, (p) => {
    p === false && g(o, e.modelValue);
  }), he(o, (p) => {
    a.animate(), n("reveal", p);
  }), he(a.scroll, (p) => {
    e.reveal === true && g(o, p.direction === "up" || p.position <= e.revealOffset || p.position - p.inflectionPoint < 100);
  });
  const q = {};
  return a.instances.header = q, e.modelValue === true && m("size", r.value), m("space", e.modelValue), m("offset", u.value), Ke(() => {
    a.instances.header === q && (a.instances.header = void 0, m("size", 0), m("offset", 0), m("space", false));
  }), () => {
    const p = Er(t.default, []);
    return e.elevated === true && p.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), p.push(d(jl, { debounce: 0, onResize: w })), d("header", { class: v.value, style: h.value, onFocusin: S }, p);
  };
} }), Ns = { ratio: [String, Number] };
function Hs(e, t) {
  return f(() => {
    const n = Number(e.ratio || (t !== void 0 ? t.value : void 0));
    return isNaN(n) !== true && n > 0 ? { paddingBottom: `${100 / n}%` } : null;
  });
}
var v1 = 1.7778;
ve({ name: "QImg", props: { ...Ns, src: String, srcset: String, sizes: String, alt: String, crossorigin: String, decoding: String, referrerpolicy: String, draggable: Boolean, loading: { type: String, default: "lazy" }, loadingShowDelay: { type: [Number, String], default: 0 }, fetchpriority: { type: String, default: "auto" }, width: String, height: String, initialRatio: { type: [Number, String], default: v1 }, placeholderSrc: String, errorSrc: String, fit: { type: String, default: "cover" }, position: { type: String, default: "50% 50%" }, imgClass: String, imgStyle: Object, noSpinner: Boolean, noNativeMenu: Boolean, noTransition: Boolean, spinnerColor: String, spinnerSize: String }, emits: ["load", "error"], setup(e, { slots: t, emit: n }) {
  const l = U(e.initialRatio), a = Hs(e, l), r = Se(), { registerTimeout: o, removeTimeout: i } = Xn(), { registerTimeout: u, removeTimeout: c } = Xn(), s = f(() => e.placeholderSrc !== void 0 ? { src: e.placeholderSrc } : null), v = f(() => e.errorSrc !== void 0 ? { src: e.errorSrc, __qerror: true } : null), h = [U(null), U(s.value)], m = U(0), g = U(false), w = U(false), S = f(() => `q-img q-img--${e.noNativeMenu === true ? "no-" : ""}menu`), q = f(() => ({ width: e.width, height: e.height })), p = f(() => `q-img__image ${e.imgClass !== void 0 ? e.imgClass + " " : ""}q-img__image--with${e.noTransition === true ? "out" : ""}-transition q-img__image--`), y = f(() => ({ ...e.imgStyle, objectFit: e.fit, objectPosition: e.position }));
  function b() {
    if (c(), e.loadingShowDelay === 0) {
      g.value = true;
      return;
    }
    u(() => {
      g.value = true;
    }, e.loadingShowDelay);
  }
  function _() {
    c(), g.value = false;
  }
  function E({ target: T }) {
    hl(r) === false && (i(), l.value = T.naturalHeight === 0 ? 0.5 : T.naturalWidth / T.naturalHeight, A(T, 1));
  }
  function A(T, x) {
    x === 1e3 || hl(r) === true || (T.complete === true ? V(T) : o(() => {
      A(T, x + 1);
    }, 50));
  }
  function V(T) {
    hl(r) !== true && (m.value = m.value ^ 1, h[m.value].value = null, _(), T.getAttribute("__qerror") !== "true" && (w.value = false), n("load", T.currentSrc || T.src));
  }
  function L(T) {
    i(), _(), w.value = true, h[m.value].value = v.value, h[m.value ^ 1].value = s.value, n("error", T);
  }
  function P(T) {
    const x = h[T].value, C = { key: "img_" + T, class: p.value, style: y.value, alt: e.alt, crossorigin: e.crossorigin, decoding: e.decoding, referrerpolicy: e.referrerpolicy, height: e.height, width: e.width, loading: e.loading, fetchpriority: e.fetchpriority, "aria-hidden": "true", draggable: e.draggable, ...x };
    return m.value === T ? Object.assign(C, { class: C.class + "current", onLoad: E, onError: L }) : C.class += "loaded", d("div", { class: "q-img__container absolute-full", key: "img" + T }, d("img", C));
  }
  function F() {
    return g.value === false ? d("div", { key: "content", class: "q-img__content absolute-full q-anchor--skip" }, Pe(t[w.value === true ? "error" : "default"])) : d("div", { key: "loading", class: "q-img__loading absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : e.noSpinner === true ? void 0 : [d(_n, { color: e.spinnerColor, size: e.spinnerSize })]);
  }
  {
    let T = function() {
      he(() => e.src || e.srcset || e.sizes ? { src: e.src, srcset: e.srcset, sizes: e.sizes } : null, (x) => {
        i(), w.value = false, x === null ? (_(), h[m.value ^ 1].value = s.value) : b(), h[m.value].value = x;
      }, { immediate: true });
    };
    nn.value === true ? ft(T) : T();
  }
  return () => {
    const T = [];
    return a.value !== null && T.push(d("div", { key: "filler", style: a.value })), h[0].value !== null && T.push(P(0)), h[1].value !== null && T.push(P(1)), T.push(d(Ft, { name: "q-transition--fade" }, F)), d("div", { key: "main", class: S.value, style: q.value, role: "img", "aria-label": e.alt }, T);
  };
} });
var { passive: El } = dt;
ve({ name: "QInfiniteScroll", props: { offset: { type: Number, default: 500 }, debounce: { type: [String, Number], default: 100 }, scrollTarget: Gl, initialIndex: { type: Number, default: 0 }, disable: Boolean, reverse: Boolean }, emits: ["load"], setup(e, { slots: t, emit: n }) {
  const l = U(false), a = U(true), r = U(null), o = U(null);
  let i = e.initialIndex, u, c;
  const s = f(() => "q-infinite-scroll__loading" + (l.value === true ? "" : " invisible"));
  function v() {
    if (e.disable === true || l.value === true || a.value === false) return;
    const A = zr(u), V = gl(u), L = Sa(u);
    e.reverse === false ? Math.round(V + L + e.offset) >= Math.round(A) && h() : Math.round(V) <= e.offset && h();
  }
  function h() {
    if (e.disable === true || l.value === true || a.value === false) return;
    i++, l.value = true;
    const A = zr(u);
    n("load", i, (V) => {
      a.value === true && (l.value = false, Ge(() => {
        if (e.reverse === true) {
          const L = zr(u), P = gl(u), F = L - A;
          pa(u, P + F);
        }
        V === true ? w() : r.value && r.value.closest("body") && c();
      }));
    });
  }
  function m() {
    i = 0;
  }
  function g() {
    a.value === false && (a.value = true, u.addEventListener("scroll", c, El)), v();
  }
  function w() {
    var _a2;
    a.value === true && (a.value = false, l.value = false, u.removeEventListener("scroll", c, El), (_a2 = c == null ? void 0 : c.cancel) == null ? void 0 : _a2.call(c));
  }
  function S() {
    if (u && a.value === true && u.removeEventListener("scroll", c, El), u = Vn(r.value, e.scrollTarget), a.value === true) {
      if (u.addEventListener("scroll", c, El), e.reverse === true) {
        const A = zr(u), V = Sa(u);
        pa(u, A - V);
      }
      v();
    }
  }
  function q(A) {
    i = A;
  }
  function p(A) {
    A = parseInt(A, 10);
    const V = c;
    c = A <= 0 ? v : Ea(v, isNaN(A) === true ? 100 : A), u && a.value === true && (V !== void 0 && u.removeEventListener("scroll", V, El), u.addEventListener("scroll", c, El));
  }
  function y(A) {
    if (b.value === true) {
      if (o.value === null) {
        A !== true && Ge(() => {
          y(true);
        });
        return;
      }
      const V = `${l.value === true ? "un" : ""}pauseAnimations`;
      Array.from(o.value.getElementsByTagName("svg")).forEach((L) => {
        L[V]();
      });
    }
  }
  const b = f(() => e.disable !== true && a.value === true);
  he([l, b], () => {
    y();
  }), he(() => e.disable, (A) => {
    A === true ? w() : g();
  }), he(() => e.reverse, () => {
    l.value === false && a.value === true && v();
  }), he(() => e.scrollTarget, S), he(() => e.debounce, p);
  let _ = false;
  wl(() => {
    _ !== false && u && pa(u, _);
  }), On(() => {
    _ = u ? gl(u) : false;
  }), Ke(() => {
    a.value === true && u.removeEventListener("scroll", c, El);
  }), ft(() => {
    p(e.debounce), S(), l.value === false && y();
  });
  const E = Se();
  return Object.assign(E.proxy, { poll: () => {
    c == null ? void 0 : c();
  }, trigger: h, stop: w, reset: m, resume: g, setIndex: q, updateScrollTarget: S }), () => {
    const A = Er(t.default, []);
    return b.value === true && A[e.reverse === false ? "push" : "unshift"](d("div", { ref: o, class: s.value }, Pe(t.loading))), d("div", { class: "q-infinite-scroll", ref: r }, A);
  };
} });
ve({ name: "QInnerLoading", props: { ...nt, ...Il, showing: Boolean, color: String, size: { type: [String, Number], default: "42px" }, label: String, labelClass: String, labelStyle: [String, Array, Object] }, setup(e, { slots: t }) {
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
var kd = { date: "####/##/##", datetime: "####/##/## ##:##", time: "##:##", fulltime: "##:##:##", phone: "(###) ### - ####", card: "#### #### #### ####" }, Vo = { "#": { pattern: "[\\d]", negate: "[^\\d]" }, S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" }, N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" }, A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleLowerCase() }, X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleLowerCase() } }, qh = Object.keys(Vo);
qh.forEach((e) => {
  Vo[e].regex = new RegExp(Vo[e].pattern);
});
var m1 = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + qh.join("") + "])|(.)", "g"), qd = /[.*+?^${}()|[\]\\]/g, Pt = "", h1 = { mask: String, reverseFillMask: Boolean, fillMask: [Boolean, String], unmaskedValue: Boolean };
function g1(e, t, n, l) {
  let a, r, o, i, u, c;
  const s = U(null), v = U(m());
  function h() {
    return e.autogrow === true || ["textarea", "text", "search", "url", "tel", "password"].includes(e.type);
  }
  he(() => e.type + e.autogrow, w), he(() => e.mask, (L) => {
    if (L !== void 0) S(v.value, true);
    else {
      const P = A(v.value);
      w(), e.modelValue !== P && t("update:modelValue", P);
    }
  }), he(() => e.fillMask + e.reverseFillMask, () => {
    s.value === true && S(v.value, true);
  }), he(() => e.unmaskedValue, () => {
    s.value === true && S(v.value);
  });
  function m() {
    if (w(), s.value === true) {
      const L = _(A(e.modelValue));
      return e.fillMask !== false ? V(L) : L;
    }
    return e.modelValue;
  }
  function g(L) {
    if (L < a.length) return a.slice(-L);
    let P = "", F = a;
    const T = F.indexOf(Pt);
    if (T !== -1) {
      for (let x = L - F.length; x > 0; x--) P += Pt;
      F = F.slice(0, T) + P + F.slice(T);
    }
    return F;
  }
  function w() {
    if (s.value = e.mask !== void 0 && e.mask.length !== 0 && h(), s.value === false) {
      i = void 0, a = "", r = "";
      return;
    }
    const L = kd[e.mask] === void 0 ? e.mask : kd[e.mask], P = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_", F = P.replace(qd, "\\$&"), T = [], x = [], C = [];
    let D = e.reverseFillMask === true, H = "", j = "";
    L.replace(m1, (Q, M, ee, X, be) => {
      if (X !== void 0) {
        const B = Vo[X];
        C.push(B), j = B.negate, D === true && (x.push("(?:" + j + "+)?(" + B.pattern + "+)?(?:" + j + "+)?(" + B.pattern + "+)?"), D = false), x.push("(?:" + j + "+)?(" + B.pattern + ")?");
      } else if (ee !== void 0) H = "\\" + (ee === "\\" ? "" : ee), C.push(ee), T.push("([^" + H + "]+)?" + H + "?");
      else {
        const B = M !== void 0 ? M : be;
        H = B === "\\" ? "\\\\\\\\" : B.replace(qd, "\\\\$&"), C.push(B), T.push("([^" + H + "]+)?" + H + "?");
      }
    });
    const W = new RegExp("^" + T.join("") + "(" + (H === "" ? "." : "[^" + H + "]") + "+)?" + (H === "" ? "" : "[" + H + "]*") + "$"), te = x.length - 1, pe = x.map((Q, M) => M === 0 && e.reverseFillMask === true ? new RegExp("^" + F + "*" + Q) : M === te ? new RegExp("^" + Q + "(" + (j === "" ? "." : j) + "+)?" + (e.reverseFillMask === true ? "$" : F + "*")) : new RegExp("^" + Q));
    o = C, i = (Q) => {
      const M = W.exec(e.reverseFillMask === true ? Q : Q.slice(0, C.length + 1));
      M !== null && (Q = M.slice(1).join(""));
      const ee = [], X = pe.length;
      for (let be = 0, B = Q; be < X; be++) {
        const R = pe[be].exec(B);
        if (R === null) break;
        B = B.slice(R.shift().length), ee.push(...R);
      }
      return ee.length !== 0 ? ee.join("") : Q;
    }, a = C.map((Q) => typeof Q == "string" ? Q : Pt).join(""), r = a.split(Pt).join(P);
  }
  function S(L, P, F) {
    const T = l.value, x = T.selectionEnd, C = T.value.length - x, D = A(L);
    P === true && w();
    const H = _(D), j = e.fillMask !== false ? V(H) : H, W = v.value !== j;
    T.value !== j && (T.value = j), W === true && (v.value = j), document.activeElement === T && Ge(() => {
      if (j === r) {
        const pe = e.reverseFillMask === true ? r.length : 0;
        T.setSelectionRange(pe, pe, "forward");
        return;
      }
      if (F === "insertFromPaste" && e.reverseFillMask !== true) {
        const pe = T.selectionEnd;
        let Q = x - 1;
        for (let M = u; M <= Q && M < pe; M++) a[M] !== Pt && Q++;
        p.right(T, Q);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(F) !== -1) {
        const pe = e.reverseFillMask === true ? x === 0 ? j.length > H.length ? 1 : 0 : Math.max(0, j.length - (j === r ? 0 : Math.min(H.length, C) + 1)) + 1 : x;
        T.setSelectionRange(pe, pe, "forward");
        return;
      }
      if (e.reverseFillMask === true) if (W === true) {
        const pe = Math.max(0, j.length - (j === r ? 0 : Math.min(H.length, C + 1)));
        pe === 1 && x === 1 ? T.setSelectionRange(pe, pe, "forward") : p.rightReverse(T, pe);
      } else {
        const pe = j.length - C;
        T.setSelectionRange(pe, pe, "backward");
      }
      else if (W === true) {
        const pe = Math.max(0, a.indexOf(Pt), Math.min(H.length, x) - 1);
        p.right(T, pe);
      } else {
        const pe = x - 1;
        p.right(T, pe);
      }
    });
    const te = e.unmaskedValue === true ? A(j) : j;
    String(e.modelValue) !== te && (e.modelValue !== null || te !== "") && n(te, true);
  }
  function q(L, P, F) {
    const T = _(A(L.value));
    P = Math.max(0, a.indexOf(Pt), Math.min(T.length, P)), u = P, L.setSelectionRange(P, F, "forward");
  }
  const p = { left(L, P) {
    const F = a.slice(P - 1).indexOf(Pt) === -1;
    let T = Math.max(0, P - 1);
    for (; T >= 0; T--) if (a[T] === Pt) {
      P = T, F === true && P++;
      break;
    }
    if (T < 0 && a[P] !== void 0 && a[P] !== Pt) return p.right(L, 0);
    P >= 0 && L.setSelectionRange(P, P, "backward");
  }, right(L, P) {
    const F = L.value.length;
    let T = Math.min(F, P + 1);
    for (; T <= F; T++) if (a[T] === Pt) {
      P = T;
      break;
    } else a[T - 1] === Pt && (P = T);
    if (T > F && a[P - 1] !== void 0 && a[P - 1] !== Pt) return p.left(L, F);
    L.setSelectionRange(P, P, "forward");
  }, leftReverse(L, P) {
    const F = g(L.value.length);
    let T = Math.max(0, P - 1);
    for (; T >= 0; T--) if (F[T - 1] === Pt) {
      P = T;
      break;
    } else if (F[T] === Pt && (P = T, T === 0)) break;
    if (T < 0 && F[P] !== void 0 && F[P] !== Pt) return p.rightReverse(L, 0);
    P >= 0 && L.setSelectionRange(P, P, "backward");
  }, rightReverse(L, P) {
    const F = L.value.length, T = g(F), x = T.slice(0, P + 1).indexOf(Pt) === -1;
    let C = Math.min(F, P + 1);
    for (; C <= F; C++) if (T[C - 1] === Pt) {
      P = C, P > 0 && x === true && P--;
      break;
    }
    if (C > F && T[P - 1] !== void 0 && T[P - 1] !== Pt) return p.leftReverse(L, F);
    L.setSelectionRange(P, P, "forward");
  } };
  function y(L) {
    t("click", L), c = void 0;
  }
  function b(L) {
    if (t("keydown", L), Wl(L) === true || L.altKey === true) return;
    const P = l.value, F = P.selectionStart, T = P.selectionEnd;
    if (L.shiftKey || (c = void 0), L.keyCode === 37 || L.keyCode === 39) {
      L.shiftKey && c === void 0 && (c = P.selectionDirection === "forward" ? F : T);
      const x = p[(L.keyCode === 39 ? "right" : "left") + (e.reverseFillMask === true ? "Reverse" : "")];
      if (L.preventDefault(), x(P, c === F ? T : F), L.shiftKey) {
        const C = P.selectionStart;
        P.setSelectionRange(Math.min(c, C), Math.max(c, C), "forward");
      }
    } else L.keyCode === 8 && e.reverseFillMask !== true && F === T ? (p.left(P, F), P.setSelectionRange(P.selectionStart, T, "backward")) : L.keyCode === 46 && e.reverseFillMask === true && F === T && (p.rightReverse(P, T), P.setSelectionRange(F, P.selectionEnd, "forward"));
  }
  function _(L) {
    if (L == null || L === "") return "";
    if (e.reverseFillMask === true) return E(L);
    const P = o;
    let F = 0, T = "";
    for (let x = 0; x < P.length; x++) {
      const C = L[F], D = P[x];
      if (typeof D == "string") T += D, C === D && F++;
      else if (C !== void 0 && D.regex.test(C)) T += D.transform !== void 0 ? D.transform(C) : C, F++;
      else return T;
    }
    return T;
  }
  function E(L) {
    const P = o, F = a.indexOf(Pt);
    let T = L.length - 1, x = "";
    for (let C = P.length - 1; C >= 0 && T !== -1; C--) {
      const D = P[C];
      let H = L[T];
      if (typeof D == "string") x = D + x, H === D && T--;
      else if (H !== void 0 && D.regex.test(H)) do
        x = (D.transform !== void 0 ? D.transform(H) : H) + x, T--, H = L[T];
      while (F === C && H !== void 0 && D.regex.test(H));
      else return x;
    }
    return x;
  }
  function A(L) {
    return typeof L != "string" || i === void 0 ? typeof L == "number" ? i("" + L) : L : i(L);
  }
  function V(L) {
    return r.length - L.length <= 0 ? L : e.reverseFillMask === true && L.length !== 0 ? r.slice(0, -L.length) + L : L + r.slice(L.length);
  }
  return { innerValue: v, hasMask: s, moveCursorForPaste: q, updateMaskValue: S, onMaskedKeydown: b, onMaskedClick: y };
}
var b1 = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/, y1 = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u, p1 = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/, _1 = /[a-z0-9_ -]$/i;
function Th(e) {
  return function(n) {
    if (n.type === "compositionend" || n.type === "change") {
      if (n.target.qComposing !== true) return;
      n.target.qComposing = false, e(n);
    } else n.type === "compositionupdate" && n.target.qComposing !== true && typeof n.data == "string" && (ze.is.firefox === true ? _1.test(n.data) === false : b1.test(n.data) === true || y1.test(n.data) === true || p1.test(n.data) === true) === true && (n.target.qComposing = true);
  };
}
var Mh = ve({ name: "QInput", inheritAttrs: false, props: { ...di, ...h1, ...wn, modelValue: [String, Number, FileList], shadowText: String, type: { type: String, default: "text" }, debounce: [String, Number], autogrow: Boolean, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...fi, "paste", "change", "keydown", "click", "animationend"], setup(e, { emit: t, attrs: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = {};
  let o = NaN, i, u, c = null, s;
  const v = U(null), h = Ms(e), { innerValue: m, hasMask: g, moveCursorForPaste: w, updateMaskValue: S, onMaskedKeydown: q, onMaskedClick: p } = g1(e, t, H, v), y = kh(e, true), b = f(() => Ql(m.value)), _ = Th(C), E = vi({ changeEvent: true }), A = f(() => e.type === "textarea" || e.autogrow === true), V = f(() => A.value === true || ["text", "search", "url", "tel", "password"].includes(e.type)), L = f(() => {
    const M = { ...E.splitAttrs.listeners.value, onInput: C, onPaste: x, onChange: W, onBlur: te, onFocus: wt };
    return M.onCompositionstart = M.onCompositionupdate = M.onCompositionend = _, g.value === true && (M.onKeydown = q, M.onClick = p), e.autogrow === true && (M.onAnimationend = D), M;
  }), P = f(() => {
    const M = { tabindex: 0, "data-autofocus": e.autofocus === true || void 0, rows: e.type === "textarea" ? 6 : void 0, "aria-label": e.label, name: h.value, ...E.splitAttrs.attributes.value, id: E.targetUid.value, maxlength: e.maxlength, disabled: e.disable === true, readonly: e.readonly === true };
    return A.value === false && (M.type = e.type), e.autogrow === true && (M.rows = 1), M;
  });
  he(() => e.type, () => {
    v.value && (v.value.value = e.modelValue);
  }), he(() => e.modelValue, (M) => {
    if (g.value === true) {
      if (u === true && (u = false, String(M) === o)) return;
      S(M);
    } else m.value !== M && (m.value = M, e.type === "number" && r.hasOwnProperty("value") === true && (i === true ? i = false : delete r.value));
    e.autogrow === true && Ge(j);
  }), he(() => e.autogrow, (M) => {
    M === true ? Ge(j) : v.value !== null && n.rows > 0 && (v.value.style.height = "auto");
  }), he(() => e.dense, () => {
    e.autogrow === true && Ge(j);
  });
  function F() {
    Pa(() => {
      const M = document.activeElement;
      v.value !== null && v.value !== M && (M === null || M.id !== E.targetUid.value) && v.value.focus({ preventScroll: true });
    });
  }
  function T() {
    var _a2;
    (_a2 = v.value) == null ? void 0 : _a2.select();
  }
  function x(M) {
    if (g.value === true && e.reverseFillMask !== true) {
      const ee = M.target;
      w(ee, ee.selectionStart, ee.selectionEnd);
    }
    t("paste", M);
  }
  function C(M) {
    if (!M || !M.target) return;
    if (e.type === "file") {
      t("update:modelValue", M.target.files);
      return;
    }
    const ee = M.target.value;
    if (M.target.qComposing === true) {
      r.value = ee;
      return;
    }
    if (g.value === true) S(ee, false, M.inputType);
    else if (H(ee), V.value === true && M.target === document.activeElement) {
      const { selectionStart: X, selectionEnd: be } = M.target;
      X !== void 0 && be !== void 0 && Ge(() => {
        M.target === document.activeElement && ee.indexOf(M.target.value) === 0 && M.target.setSelectionRange(X, be);
      });
    }
    e.autogrow === true && j();
  }
  function D(M) {
    t("animationend", M), j();
  }
  function H(M, ee) {
    s = () => {
      c = null, e.type !== "number" && r.hasOwnProperty("value") === true && delete r.value, e.modelValue !== M && o !== M && (o = M, ee === true && (u = true), t("update:modelValue", M), Ge(() => {
        o === M && (o = NaN);
      })), s = void 0;
    }, e.type === "number" && (i = true, r.value = M), e.debounce !== void 0 ? (c !== null && clearTimeout(c), r.value = M, c = setTimeout(s, e.debounce)) : s();
  }
  function j() {
    requestAnimationFrame(() => {
      const M = v.value;
      if (M !== null) {
        const ee = M.parentNode.style, { scrollTop: X } = M, { overflowY: be, maxHeight: B } = a.platform.is.firefox === true ? {} : window.getComputedStyle(M), R = be !== void 0 && be !== "scroll";
        R === true && (M.style.overflowY = "hidden"), ee.marginBottom = M.scrollHeight - 1 + "px", M.style.height = "1px", M.style.height = M.scrollHeight + "px", R === true && (M.style.overflowY = parseInt(B, 10) < M.scrollHeight ? "auto" : "hidden"), ee.marginBottom = "", M.scrollTop = X;
      }
    });
  }
  function W(M) {
    _(M), c !== null && (clearTimeout(c), c = null), s == null ? void 0 : s(), t("change", M.target.value);
  }
  function te(M) {
    M !== void 0 && wt(M), c !== null && (clearTimeout(c), c = null), s == null ? void 0 : s(), i = false, u = false, delete r.value, e.type !== "file" && setTimeout(() => {
      v.value !== null && (v.value.value = m.value !== void 0 ? m.value : "");
    });
  }
  function pe() {
    return r.hasOwnProperty("value") === true ? r.value : m.value !== void 0 ? m.value : "";
  }
  Ke(() => {
    te();
  }), ft(() => {
    e.autogrow === true && j();
  }), Object.assign(E, { innerValue: m, fieldClass: f(() => `q-${A.value === true ? "textarea" : "input"}` + (e.autogrow === true ? " q-textarea--autogrow" : "")), hasShadow: f(() => e.type !== "file" && typeof e.shadowText == "string" && e.shadowText.length !== 0), inputRef: v, emitValue: H, hasValue: b, floatingLabel: f(() => b.value === true && (e.type !== "number" || isNaN(m.value) === false) || Ql(e.displayValue)), getControl: () => d(A.value === true ? "textarea" : "input", { ref: v, class: ["q-field__native q-placeholder", e.inputClass], style: e.inputStyle, ...P.value, ...L.value, ...e.type !== "file" ? { value: pe() } : y.value }), getShadowControl: () => d("div", { class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (A.value === true ? "" : " text-no-wrap") }, [d("span", { class: "invisible" }, pe()), d("span", e.shadowText)]) });
  const Q = mi(E);
  return Object.assign(l, { focus: F, select: T, getNativeElement: () => v.value }), Ot(l, "nativeEl", () => v.value), Q;
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
      (t.handler(o, t.observer) === false || t.once === true && o.isIntersecting === true) && Eh(e);
    }
  }, a), t.observer.observe(e));
}
function Eh(e) {
  var _a2;
  const t = e.__qvisible;
  t !== void 0 && ((_a2 = t.observer) == null ? void 0 : _a2.unobserve(e), delete e.__qvisible);
}
var w1 = An({ name: "intersection", mounted(e, { modifiers: t, value: n }) {
  const l = { once: t.once === true };
  Md(e, l, n), e.__qvisible = l;
}, updated(e, t) {
  const n = e.__qvisible;
  n !== void 0 && Md(e, n, t.value);
}, beforeUnmount: Eh });
ve({ name: "QIntersection", props: { tag: { type: String, default: "div" }, once: Boolean, transition: String, transitionDuration: { type: [String, Number], default: 300 }, ssrPrerender: Boolean, margin: String, threshold: [Number, Array], root: { default: null }, disable: Boolean, onVisibility: Function }, setup(e, { slots: t, emit: n }) {
  const l = U(nn.value === true ? e.ssrPrerender : false), a = f(() => e.root !== void 0 || e.margin !== void 0 || e.threshold !== void 0 ? { handler: u, cfg: { root: e.root, rootMargin: e.margin, threshold: e.threshold } } : u), r = f(() => e.disable !== true && (nn.value !== true || e.once !== true || e.ssrPrerender !== true)), o = f(() => [[w1, a.value, void 0, { once: e.once }]]), i = f(() => `--q-transition-duration: ${e.transitionDuration}ms`);
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
var S1 = ["ul", "ol"], $h = ve({ name: "QList", props: { ...nt, bordered: Boolean, dense: Boolean, separator: Boolean, padding: Boolean, tag: { type: String, default: "div" } }, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), a = f(() => S1.includes(e.tag) ? null : "list"), r = f(() => "q-list" + (e.bordered === true ? " q-list--bordered" : "") + (e.dense === true ? " q-list--dense" : "") + (e.separator === true ? " q-list--separator" : "") + (l.value === true ? " q-list--dark" : "") + (e.padding === true ? " q-list--padding" : ""));
  return () => d(e.tag, { class: r.value, role: a.value }, Pe(t.default));
} }), Ed = [34, 37, 40, 33, 39, 38], x1 = Object.keys(Os);
ve({ name: "QKnob", props: { ...wn, ...Os, modelValue: { type: Number, required: true }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, tabindex: { type: [Number, String], default: 0 }, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change", "dragValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = U(e.modelValue), o = U(false), i = f(() => isNaN(e.innerMin) === true || e.innerMin < e.min ? e.min : e.innerMin), u = f(() => isNaN(e.innerMax) === true || e.innerMax > e.max ? e.max : e.innerMax);
  let c;
  function s() {
    r.value = e.modelValue === null ? i.value : ct(e.modelValue, i.value, u.value), F(true);
  }
  he(() => `${e.modelValue}|${i.value}|${u.value}`, s), s();
  const v = f(() => e.disable === false && e.readonly === false), h = f(() => "q-knob non-selectable" + (v.value === true ? " q-knob--editable" : e.disable === true ? " disabled" : "")), m = f(() => (String(e.step).trim().split(".")[1] || "").length), g = f(() => e.step === 0 ? 1 : e.step), w = f(() => e.instantFeedback === true || o.value === true), S = a.platform.is.mobile === true ? f(() => v.value === true ? { onClick: A } : {}) : f(() => v.value === true ? { onMousedown: E, onClick: A, onKeydown: V, onKeyup: P } : {}), q = f(() => v.value === true ? { tabindex: e.tabindex } : { [`aria-${e.disable === true ? "disabled" : "readonly"}`]: "true" }), p = f(() => {
    const C = {};
    return x1.forEach((D) => {
      C[D] = e[D];
    }), C;
  });
  function y(C) {
    C.isFinal ? (L(C.evt, true), o.value = false) : (C.isFirst && (_(), o.value = true), L(C.evt));
  }
  const b = f(() => [[gn, y, void 0, { prevent: true, stop: true, mouse: true }]]);
  function _() {
    const { top: C, left: D, width: H, height: j } = l.$el.getBoundingClientRect();
    c = { top: C + j / 2, left: D + H / 2 };
  }
  function E(C) {
    _(), L(C);
  }
  function A(C) {
    _(), L(C, true);
  }
  function V(C) {
    if (Ed.includes(C.keyCode) === false) return;
    je(C);
    const D = ([34, 33].includes(C.keyCode) ? 10 : 1) * g.value, H = [34, 37, 40].includes(C.keyCode) ? -D : D;
    r.value = ct(parseFloat((r.value + H).toFixed(m.value)), i.value, u.value), F();
  }
  function L(C, D) {
    const H = en(C), j = Math.abs(H.top - c.top), W = Math.sqrt(j ** 2 + Math.abs(H.left - c.left) ** 2);
    let te = Math.asin(j / W) * (180 / Math.PI);
    H.top < c.top ? te = c.left < H.left ? 90 - te : 270 + te : te = c.left < H.left ? te + 90 : 270 - te, a.lang.rtl === true ? te = ko(-te - e.angle, 0, 360) : e.angle && (te = ko(te - e.angle, 0, 360)), e.reverse === true && (te = 360 - te);
    let pe = e.min + te / 360 * (e.max - e.min);
    if (g.value !== 0) {
      const Q = pe % g.value;
      pe = pe - Q + (Math.abs(Q) >= g.value / 2 ? (Q < 0 ? -1 : 1) * g.value : 0), pe = parseFloat(pe.toFixed(m.value));
    }
    pe = ct(pe, i.value, u.value), n("dragValue", pe), r.value !== pe && (r.value = pe), F(D);
  }
  function P(C) {
    Ed.includes(C.keyCode) && F(true);
  }
  function F(C) {
    e.modelValue !== r.value && n("update:modelValue", r.value), C === true && n("change", r.value);
  }
  const T = Rr(e);
  function x() {
    return d("input", T.value);
  }
  return () => {
    const C = { class: h.value, role: "slider", "aria-valuemin": i.value, "aria-valuemax": u.value, "aria-valuenow": e.modelValue, ...q.value, ...p.value, value: r.value, instantFeedback: w.value, ...S.value }, D = { default: t.default };
    return v.value === true && e.name !== void 0 && (D.internal = x), pn(Um, C, D, "knob", v.value, () => b.value);
  };
} });
var { passive: $d } = dt, C1 = ["both", "horizontal", "vertical"], Ah = ve({ name: "QScrollObserver", props: { axis: { type: String, validator: (e) => C1.includes(e), default: "vertical" }, debounce: [String, Number], scrollTarget: Gl }, emits: ["scroll"], setup(e, { emit: t }) {
  const n = { position: { top: 0, left: 0 }, direction: "down", directionChanged: false, delta: { top: 0, left: 0 }, inflectionPoint: { top: 0, left: 0 } };
  let l = null, a, r;
  he(() => e.scrollTarget, () => {
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
  return he(() => s.$q.lang.rtl, o), ft(() => {
    r = s.$el.parentNode, i();
  }), Ke(() => {
    l == null ? void 0 : l(), u();
  }), Object.assign(s, { trigger: c, getPosition: () => n }), St;
} }), k1 = ve({ name: "QLayout", props: { container: Boolean, view: { type: String, default: "hhh lpr fff", validator: (e) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase()) }, onScroll: Function, onScrollHeight: Function, onResize: Function }, setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = U(null), r = U(l.screen.height), o = U(e.container === true ? 0 : l.screen.width), i = U({ position: 0, direction: "down", inflectionPoint: 0 }), u = U(0), c = U(nn.value === true ? 0 : oo()), s = f(() => "q-layout q-layout--" + (e.container === true ? "containerized" : "standard")), v = f(() => e.container === false ? { minHeight: l.screen.height + "px" } : null), h = f(() => c.value !== 0 ? { [l.lang.rtl === true ? "left" : "right"]: `${c.value}px` } : null), m = f(() => c.value !== 0 ? { [l.lang.rtl === true ? "right" : "left"]: 0, [l.lang.rtl === true ? "left" : "right"]: `-${c.value}px`, width: `calc(100% + ${c.value}px)` } : null);
  function g(b) {
    if (e.container === true || document.qScrollPrevented !== true) {
      const _ = { position: b.position.top, direction: b.direction, directionChanged: b.directionChanged, inflectionPoint: b.inflectionPoint.top, delta: b.delta.top };
      i.value = _, e.onScroll !== void 0 && n("scroll", _);
    }
  }
  function w(b) {
    const { height: _, width: E } = b;
    let A = false;
    r.value !== _ && (A = true, r.value = _, e.onScrollHeight !== void 0 && n("scrollHeight", _), q()), o.value !== E && (A = true, o.value = E), A === true && e.onResize !== void 0 && n("resize", b);
  }
  function S({ height: b }) {
    u.value !== b && (u.value = b, q());
  }
  function q() {
    if (e.container === true) {
      const b = r.value > u.value ? oo() : 0;
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
  }, update(b, _, E) {
    y[b][_] = E;
  } };
  if (hn(Yl, y), oo() > 0) {
    let b = function() {
      A = null, V.classList.remove("hide-scrollbar");
    }, _ = function() {
      if (A === null) {
        if (V.scrollHeight > l.screen.height) return;
        V.classList.add("hide-scrollbar");
      } else clearTimeout(A);
      A = setTimeout(b, 300);
    }, E = function(L) {
      A !== null && L === "remove" && (clearTimeout(A), b()), window[`${L}EventListener`]("resize", _);
    }, A = null;
    const V = document.body;
    he(() => e.container !== true ? "add" : "remove", E), e.container !== true && E("add"), Xo(() => {
      E("remove");
    });
  }
  return () => {
    const b = qt(t.default, [d(Ah, { onScroll: g }), d(jl, { onResize: w })]), _ = d("div", { class: s.value, style: v.value, ref: e.container === true ? void 0 : a, tabindex: -1 }, b);
    return e.container === true ? d("div", { class: "q-layout-container overflow-hidden", ref: a }, [d(jl, { onResize: S }), d("div", { class: "absolute-full", style: h.value }, [d("div", { class: "scroll", style: m.value }, [_])])]) : _;
  };
} }), q1 = ["horizontal", "vertical", "cell", "none"], T1 = ve({ name: "QMarkupTable", props: { ...nt, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, wrapCells: Boolean, separator: { type: String, default: "horizontal", validator: (e) => q1.includes(e) } }, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), a = f(() => `q-markup-table q-table__container q-table__card q-table--${e.separator}-separator` + (l.value === true ? " q-table--dark q-table__card--dark q-dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "") + (e.square === true ? " q-table--square" : "") + (e.wrapCells === false ? " q-table--no-wrap" : ""));
  return () => d("div", { class: a.value }, [d("table", { class: "q-table" }, Pe(t.default))]);
} });
ve({ name: "QNoSsr", props: { tag: { type: String, default: "div" }, placeholder: String }, setup(e, { slots: t }) {
  const { isHydrated: n } = Ym();
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
var M1 = () => d("svg", { key: "svg", class: "q-radio__bg absolute non-selectable", viewBox: "0 0 24 24" }, [d("path", { d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12" }), d("path", { class: "q-radio__check", d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6" })]), E1 = ve({ name: "QRadio", props: { ...nt, ...Jn, ...wn, modelValue: { required: true }, val: { required: true }, label: String, leftLabel: Boolean, checkedIcon: String, uncheckedIcon: String, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), a = lt(e, l.$q), r = el(e, Vm), o = U(null), { refocusTargetEl: i, refocusTarget: u } = Om(e, o), c = f(() => Ye(e.modelValue) === Ye(e.val)), s = f(() => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (e.disable === true ? " disabled" : "") + (a.value === true ? " q-radio--dark" : "") + (e.dense === true ? " q-radio--dense" : "") + (e.leftLabel === true ? " reverse" : "")), v = f(() => {
    const b = e.color !== void 0 && (e.keepColor === true || c.value === true) ? ` text-${e.color}` : "";
    return `q-radio__inner relative-position q-radio__inner--${c.value === true ? "truthy" : "falsy"}${b}`;
  }), h = f(() => (c.value === true ? e.checkedIcon : e.uncheckedIcon) || null), m = f(() => e.disable === true ? -1 : e.tabindex || 0), g = f(() => {
    const b = { type: "radio" };
    return e.name !== void 0 && Object.assign(b, { ".checked": c.value === true, "^checked": c.value === true ? "checked" : void 0, name: e.name, value: e.val }), b;
  }), w = xl(g);
  function S(b) {
    b !== void 0 && (je(b), u(b)), e.disable !== true && c.value !== true && n("update:modelValue", e.val, b);
  }
  function q(b) {
    (b.keyCode === 13 || b.keyCode === 32) && je(b);
  }
  function p(b) {
    (b.keyCode === 13 || b.keyCode === 32) && S(b);
  }
  Object.assign(l, { set: S });
  const y = M1();
  return () => {
    const b = h.value !== null ? [d("div", { key: "icon", class: "q-radio__icon-container absolute-full flex flex-center no-wrap" }, [d(et, { class: "q-radio__icon", name: h.value })])] : [y];
    e.disable !== true && w(b, "unshift", " q-radio__native q-ma-none q-pa-none");
    const _ = [d("div", { class: v.value, style: r.value, "aria-hidden": "true" }, b)];
    i.value !== null && _.push(i.value);
    const E = e.label !== void 0 ? qt(t.default, [e.label]) : Pe(t.default);
    return E !== void 0 && _.push(d("div", { class: "q-radio__label q-anchor--skip" }, E)), d("div", { ref: o, class: s.value, tabindex: m.value, role: "radio", "aria-label": e.label, "aria-checked": c.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: S, onKeydown: q, onKeyup: p }, _);
  };
} }), $1 = ve({ name: "QToggle", props: { ...Im, icon: String, iconColor: String }, emits: zm, setup(e) {
  function t(n, l) {
    const a = f(() => (n.value === true ? e.checkedIcon : l.value === true ? e.indeterminateIcon : e.uncheckedIcon) || e.icon), r = f(() => n.value === true ? e.iconColor : null);
    return () => [d("div", { class: "q-toggle__track" }), d("div", { class: "q-toggle__thumb absolute flex flex-center no-wrap" }, a.value !== void 0 ? [d(et, { name: a.value, color: r.value })] : void 0)];
  }
  return Dm("toggle", t);
} }), Rh = { radio: E1, checkbox: ir, toggle: $1 }, A1 = Object.keys(Rh);
function Xi(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (l) => l[n];
}
var R1 = ve({ name: "QOptionGroup", props: { ...nt, modelValue: { required: true }, options: { type: Array, validator: (e) => e.every(Rt), default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], name: String, type: { type: String, default: "radio", validator: (e) => A1.includes(e) }, color: String, keepColor: Boolean, dense: Boolean, size: String, leftLabel: Boolean, inline: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { emit: t, slots: n }) {
  const { proxy: { $q: l } } = Se(), a = Array.isArray(e.modelValue);
  e.type === "radio" ? a === true && console.error("q-option-group: model should not be array") : a === false && console.error("q-option-group: model should be array in your case");
  const r = lt(e, l), o = f(() => Rh[e.type]), i = f(() => Xi(e.optionValue, "value")), u = f(() => Xi(e.optionLabel, "label")), c = f(() => Xi(e.optionDisable, "disable")), s = f(() => e.options.map((g) => ({ val: i.value(g), name: g.name === void 0 ? e.name : g.name, disable: e.disable || c.value(g), leftLabel: g.leftLabel === void 0 ? e.leftLabel : g.leftLabel, color: g.color === void 0 ? e.color : g.color, checkedIcon: g.checkedIcon, uncheckedIcon: g.uncheckedIcon, dark: g.dark === void 0 ? r.value : g.dark, size: g.size === void 0 ? e.size : g.size, dense: e.dense, keepColor: g.keepColor === void 0 ? e.keepColor : g.keepColor }))), v = f(() => "q-option-group q-gutter-x-sm" + (e.inline === true ? " q-option-group--inline" : "")), h = f(() => {
    const g = { role: "group" };
    return e.type === "radio" && (g.role = "radiogroup", e.disable === true && (g["aria-disabled"] = "true")), g;
  });
  function m(g) {
    t("update:modelValue", g);
  }
  return () => d("div", { class: v.value, ...h.value }, e.options.map((g, w) => {
    const S = n["label-" + w] !== void 0 ? () => n["label-" + w](g) : n.label !== void 0 ? () => n.label(g) : void 0;
    return d("div", [d(o.value, { label: S === void 0 ? u.value(g) : null, modelValue: e.modelValue, "onUpdate:modelValue": m, ...s.value[w] }, S)]);
  }));
} });
ve({ name: "QPage", props: { padding: Boolean, styleFn: Function }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = Tt(Yl, ot);
  if (l === ot) return console.error("QPage needs to be a deep child of QLayout"), ot;
  if (Tt(am, ot) === ot) return console.error("QPage needs to be child of QPageContainer"), ot;
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
var P1 = ve({ name: "QPageContainer", setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = Tt(Yl, ot);
  if (l === ot) return console.error("QPageContainer needs to be child of QLayout"), ot;
  hn(am, true);
  const a = f(() => {
    const r = {};
    return l.header.space === true && (r.paddingTop = `${l.header.size}px`), l.right.space === true && (r[`padding${n.lang.rtl === true ? "Left" : "Right"}`] = `${l.right.size}px`), l.footer.space === true && (r.paddingBottom = `${l.footer.size}px`), l.left.space === true && (r[`padding${n.lang.rtl === true ? "Right" : "Left"}`] = `${l.left.size}px`), r;
  });
  return () => d("div", { class: "q-page-container", style: a.value }, Pe(t.default));
} }), Nu = { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, validator: (e) => e.length === 2 }, expand: Boolean };
function Ph() {
  const { props: e, proxy: { $q: t } } = Se(), n = Tt(Yl, ot);
  if (n === ot) return console.error("QPageSticky needs to be child of QLayout"), ot;
  const l = f(() => {
    const v = e.position;
    return { top: v.indexOf("top") !== -1, right: v.indexOf("right") !== -1, bottom: v.indexOf("bottom") !== -1, left: v.indexOf("left") !== -1, vertical: v === "top" || v === "bottom", horizontal: v === "left" || v === "right" };
  }), a = f(() => n.header.offset), r = f(() => n.right.offset), o = f(() => n.footer.offset), i = f(() => n.left.offset), u = f(() => {
    let v = 0, h = 0;
    const m = l.value, g = t.lang.rtl === true ? -1 : 1;
    m.top === true && a.value !== 0 ? h = `${a.value}px` : m.bottom === true && o.value !== 0 && (h = `${-o.value}px`), m.left === true && i.value !== 0 ? v = `${g * i.value}px` : m.right === true && r.value !== 0 && (v = `${-g * r.value}px`);
    const w = { transform: `translate(${v}, ${h})` };
    return e.offset && (w.margin = `${e.offset[1]}px ${e.offset[0]}px`), m.vertical === true ? (i.value !== 0 && (w[t.lang.rtl === true ? "right" : "left"] = `${i.value}px`), r.value !== 0 && (w[t.lang.rtl === true ? "left" : "right"] = `${r.value}px`)) : m.horizontal === true && (a.value !== 0 && (w.top = `${a.value}px`), o.value !== 0 && (w.bottom = `${o.value}px`)), w;
  }), c = f(() => `q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand === true ? "expand" : "shrink"}`);
  function s(v) {
    const h = Pe(v.default);
    return d("div", { class: c.value, style: u.value }, e.expand === true ? h : [d("div", h)]);
  }
  return { $layout: n, getStickyContent: s };
}
ve({ name: "QPageScroller", props: { ...Nu, scrollOffset: { type: Number, default: 1e3 }, reverse: Boolean, duration: { type: Number, default: 300 }, offset: { ...Nu.offset, default: () => [18, 18] } }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), { $layout: a, getStickyContent: r } = Ph(), o = U(null);
  let i;
  const u = f(() => a.height.value - (a.isContainer.value === true ? a.containerHeight.value : l.screen.height));
  function c() {
    return e.reverse === true ? u.value - a.scroll.value.position > e.scrollOffset : a.scroll.value.position > e.scrollOffset;
  }
  const s = U(c());
  function v() {
    const S = c();
    s.value !== S && (s.value = S);
  }
  function h() {
    e.reverse === true ? i === void 0 && (i = he(u, v)) : m();
  }
  he(a.scroll, v), he(() => e.reverse, h);
  function m() {
    i !== void 0 && (i(), i = void 0);
  }
  function g(S) {
    const q = Vn(a.isContainer.value === true ? o.value : a.rootRef.value);
    pa(q, e.reverse === true ? a.height.value : 0, e.duration), n("click", S);
  }
  function w() {
    return s.value === true ? d("div", { ref: o, class: "q-page-scroller", onClick: g }, r(t)) : null;
  }
  return h(), Ke(m), () => d(Ft, { name: "q-transition--fade" }, w);
} });
ve({ name: "QPageSticky", props: Nu, setup(e, { slots: t }) {
  const { getStickyContent: n } = Ph();
  return () => n(t);
} });
function Yr(e, t) {
  return [true, false].includes(e) ? e : t;
}
ve({ name: "QPagination", props: { ...nt, modelValue: { type: Number, required: true }, min: { type: [Number, String], default: 1 }, max: { type: [Number, String], required: true }, maxPages: { type: [Number, String], default: 0, validator: (e) => (typeof e == "string" ? parseInt(e, 10) : e) >= 0 }, inputStyle: [Array, String, Object], inputClass: [Array, String, Object], size: String, disable: Boolean, input: Boolean, iconPrev: String, iconNext: String, iconFirst: String, iconLast: String, toFn: Function, boundaryLinks: { type: Boolean, default: null }, boundaryNumbers: { type: Boolean, default: null }, directionLinks: { type: Boolean, default: null }, ellipses: { type: Boolean, default: null }, ripple: { type: [Boolean, Object], default: null }, round: Boolean, rounded: Boolean, flat: Boolean, outline: Boolean, unelevated: Boolean, push: Boolean, glossy: Boolean, color: { type: String, default: "primary" }, textColor: String, activeDesign: { type: String, default: "", values: (e) => e === "" || _m.includes(e) }, activeColor: String, activeTextColor: String, gutter: String, padding: { type: String, default: "3px 2px" } }, emits: ["update:modelValue"], setup(e, { emit: t }) {
  const { proxy: n } = Se(), { $q: l } = n, a = lt(e, l), r = f(() => parseInt(e.min, 10)), o = f(() => parseInt(e.max, 10)), i = f(() => parseInt(e.maxPages, 10)), u = f(() => g.value + " / " + o.value), c = f(() => Yr(e.boundaryLinks, e.input)), s = f(() => Yr(e.boundaryNumbers, !e.input)), v = f(() => Yr(e.directionLinks, e.input)), h = f(() => Yr(e.ellipses, !e.input)), m = U(null), g = f({ get: () => e.modelValue, set: (x) => {
    if (x = parseInt(x, 10), e.disable || isNaN(x)) return;
    const C = ct(x, r.value, o.value);
    e.modelValue !== C && t("update:modelValue", C);
  } });
  he(() => `${r.value}|${o.value}`, () => {
    g.value = e.modelValue;
  });
  const w = f(() => "q-pagination row no-wrap items-center" + (e.disable === true ? " disabled" : "")), S = f(() => e.gutter in Mo ? `${Mo[e.gutter]}px` : e.gutter || null), q = f(() => S.value !== null ? `--q-pagination-gutter-parent:-${S.value};--q-pagination-gutter-child:${S.value}` : null), p = f(() => {
    const x = [e.iconFirst || l.iconSet.pagination.first, e.iconPrev || l.iconSet.pagination.prev, e.iconNext || l.iconSet.pagination.next, e.iconLast || l.iconSet.pagination.last];
    return l.lang.rtl === true ? x.reverse() : x;
  }), y = f(() => ({ "aria-disabled": e.disable === true ? "true" : "false", role: "navigation" })), b = f(() => Ss(e, "flat")), _ = f(() => ({ [b.value]: true, round: e.round, rounded: e.rounded, padding: e.padding, color: e.color, textColor: e.textColor, size: e.size, ripple: e.ripple !== null ? e.ripple : true })), E = f(() => {
    const x = { [b.value]: false };
    return e.activeDesign !== "" && (x[e.activeDesign] = true), x;
  }), A = f(() => ({ ...E.value, color: e.activeColor || e.color, textColor: e.activeTextColor || e.textColor })), V = f(() => {
    let x = Math.max(i.value, 1 + (h.value ? 2 : 0) + (s.value ? 2 : 0));
    const C = { pgFrom: r.value, pgTo: o.value, ellipsesStart: false, ellipsesEnd: false, boundaryStart: false, boundaryEnd: false, marginalStyle: { minWidth: `${Math.max(2, String(o.value).length)}em` } };
    return i.value && x < o.value - r.value + 1 && (x = 1 + Math.floor(x / 2) * 2, C.pgFrom = Math.max(r.value, Math.min(o.value - x + 1, e.modelValue - Math.floor(x / 2))), C.pgTo = Math.min(o.value, C.pgFrom + x - 1), s.value && (C.boundaryStart = true, C.pgFrom++), h.value && C.pgFrom > r.value + (s.value ? 1 : 0) && (C.ellipsesStart = true, C.pgFrom++), s.value && (C.boundaryEnd = true, C.pgTo--), h.value && C.pgTo < o.value - (s.value ? 1 : 0) && (C.ellipsesEnd = true, C.pgTo--)), C;
  });
  function L(x) {
    g.value = x;
  }
  function P(x) {
    g.value = g.value + x;
  }
  const F = f(() => {
    function x() {
      g.value = m.value, m.value = null;
    }
    return { "onUpdate:modelValue": (C) => {
      m.value = C;
    }, onKeyup: (C) => {
      yn(C, 13) === true && x();
    }, onBlur: x };
  });
  function T(x, C, D) {
    const H = { "aria-label": C, "aria-current": "false", ..._.value, ...x };
    return D === true && Object.assign(H, { "aria-current": "true", ...A.value }), C !== void 0 && (e.toFn !== void 0 ? H.to = e.toFn(C) : H.onClick = () => {
      L(C);
    }), d(Ze, H);
  }
  return Object.assign(n, { set: L, setByOffset: P }), () => {
    const x = [], C = [];
    let D;
    if (c.value === true && (x.push(T({ key: "bls", disable: e.disable || e.modelValue <= r.value, icon: p.value[0], "aria-label": l.lang.pagination.first }, r.value)), C.unshift(T({ key: "ble", disable: e.disable || e.modelValue >= o.value, icon: p.value[3], "aria-label": l.lang.pagination.last }, o.value))), v.value === true && (x.push(T({ key: "bdp", disable: e.disable || e.modelValue <= r.value, icon: p.value[1], "aria-label": l.lang.pagination.prev }, e.modelValue - 1)), C.unshift(T({ key: "bdn", disable: e.disable || e.modelValue >= o.value, icon: p.value[2], "aria-label": l.lang.pagination.next }, e.modelValue + 1))), e.input !== true) {
      D = [];
      const { pgFrom: H, pgTo: j, marginalStyle: W } = V.value;
      if (V.value.boundaryStart === true) {
        const te = r.value === e.modelValue;
        x.push(T({ key: "bns", style: W, disable: e.disable, label: r.value }, r.value, te));
      }
      if (V.value.boundaryEnd === true) {
        const te = o.value === e.modelValue;
        C.unshift(T({ key: "bne", style: W, disable: e.disable, label: o.value }, o.value, te));
      }
      V.value.ellipsesStart === true && x.push(T({ key: "bes", style: W, disable: e.disable, label: "\u2026", ripple: false }, H - 1)), V.value.ellipsesEnd === true && C.unshift(T({ key: "bee", style: W, disable: e.disable, label: "\u2026", ripple: false }, j + 1));
      for (let te = H; te <= j; te++) D.push(T({ key: `bpg${te}`, style: W, disable: e.disable, label: te }, te, te === e.modelValue));
    }
    return d("div", { class: w.value, ...y.value }, [d("div", { class: "q-pagination__content row no-wrap items-center", style: q.value }, [...x, e.input === true ? d(Mh, { class: "inline", style: { width: `${u.value.length / 1.5}em` }, type: "number", dense: true, value: m.value, disable: e.disable, dark: a.value, borderless: true, inputClass: e.inputClass, inputStyle: e.inputStyle, placeholder: u.value, min: r.value, max: o.value, ...F.value }) : d("div", { class: "q-pagination__middle row justify-center" }, D), ...C])]);
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
ve({ name: "QParallax", props: { src: String, height: { type: Number, default: 500 }, speed: { type: Number, default: 1, validator: (e) => e >= 0 && e <= 1 }, scrollTarget: Gl, onScroll: Function }, setup(e, { slots: t, emit: n }) {
  const l = U(0), a = U(null), r = U(null), o = U(null);
  let i, u, c, s, v, h;
  he(() => e.height, () => {
    i === true && g();
  }), he(() => e.scrollTarget, () => {
    i === true && (p(), q());
  });
  let m = (y) => {
    l.value = y, e.onScroll !== void 0 && n("scroll", y);
  };
  function g() {
    let y, b, _;
    h === window ? (y = 0, _ = b = window.innerHeight) : (y = To(h).top, b = Sa(h), _ = y + b);
    const E = To(a.value).top, A = E + e.height;
    if (v !== void 0 || A > y && E < _) {
      const V = (_ - E) / (e.height + b);
      w((c - e.height) * V * e.speed), m(V);
    }
  }
  let w = (y) => {
    u.style.transform = `translate3d(-50%,${Math.round(y)}px,0)`;
  };
  function S() {
    c = u.naturalHeight || u.videoHeight || Sa(u), i === true && g();
  }
  function q() {
    i = true, h = Vn(a.value, e.scrollTarget), h.addEventListener("scroll", g, Gr), window.addEventListener("resize", s, Gr), g();
  }
  function p() {
    i === true && (i = false, h.removeEventListener("scroll", g, Gr), window.removeEventListener("resize", s, Gr), h = void 0, w.cancel(), m.cancel(), s.cancel());
  }
  return ft(() => {
    w = Zi(w), m = Zi(m), s = Zi(S), u = t.media !== void 0 ? r.value.children[0] : o.value, u.onload = u.onloadstart = u.loadedmetadata = S, S(), u.style.display = "initial", window.IntersectionObserver !== void 0 ? (v = new IntersectionObserver((y) => {
      (y[0].isIntersecting === true ? q : p)();
    }), v.observe(a.value)) : q();
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
ve({ name: "QPopupEdit", props: { modelValue: { required: true }, title: String, buttons: Boolean, labelSet: String, labelCancel: String, color: { type: String, default: "primary" }, validate: { type: Function, default: () => true }, autoSave: Boolean, cover: { type: Boolean, default: true }, disable: Boolean }, emits: ["update:modelValue", "save", "cancel", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = U(null), o = U(""), i = U("");
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
    Ge(() => {
      r.value.updatePosition();
    });
  }
  function m() {
    return kn(i.value, o.value) === false;
  }
  function g() {
    u = true, r.value.hide();
  }
  function w() {
    u = false, o.value = ur(e.modelValue), i.value = ur(e.modelValue), n("beforeShow");
  }
  function S() {
    n("show");
  }
  function q() {
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
    if (e.disable !== true) return d(ui, { ref: r, class: "q-popup-edit", cover: e.cover, onBeforeShow: w, onShow: S, onBeforeHide: q, onHide: p, onEscapeKey: v }, y);
  };
} });
ve({ name: "QPopupProxy", props: { ...Cm, breakpoint: { type: [String, Number], default: 450 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: n, attrs: l }) {
  const { proxy: a } = Se(), { $q: r } = a, o = U(false), i = U(null), u = f(() => parseInt(e.breakpoint, 10)), { canShow: c } = Cs({ showing: o });
  function s() {
    return r.screen.width < u.value || r.screen.height < u.value ? "dialog" : "menu";
  }
  const v = U(s()), h = f(() => v.value === "menu" ? { maxHeight: "99vh" } : {});
  he(() => s(), (w) => {
    o.value !== true && (v.value = w);
  });
  function m(w) {
    o.value = true, n("show", w);
  }
  function g(w) {
    o.value = false, v.value = s(), n("hide", w);
  }
  return Object.assign(a, { show(w) {
    c(w) === true && i.value.show(w);
  }, hide(w) {
    i.value.hide(w);
  }, toggle(w) {
    i.value.toggle(w);
  } }), Ot(a, "currentComponent", () => ({ type: v.value, ref: i.value })), () => {
    const w = { ref: i, ...h.value, ...l, onShow: m, onHide: g };
    let S;
    return v.value === "dialog" ? S = ci : (S = ui, Object.assign(w, { target: e.target, contextMenu: e.contextMenu, noParentEvent: true, separateClosePopup: true })), d(S, w, t.default);
  };
} });
var L1 = { xs: 2, sm: 4, md: 6, lg: 10, xl: 14 };
function Ad(e, t, n) {
  return { transform: t === true ? `translateX(${n.lang.rtl === true ? "-" : ""}100%) scale3d(${-e},1,1)` : `scale3d(${e},1,1)` };
}
var B1 = ve({ name: "QLinearProgress", props: { ...nt, ...Jn, value: { type: Number, default: 0 }, buffer: Number, color: String, trackColor: String, reverse: Boolean, stripe: Boolean, indeterminate: Boolean, query: Boolean, rounded: Boolean, animationSpeed: { type: [String, Number], default: 2100 }, instantFeedback: Boolean }, setup(e, { slots: t }) {
  const { proxy: n } = Se(), l = lt(e, n.$q), a = el(e, L1), r = f(() => e.indeterminate === true || e.query === true), o = f(() => e.reverse !== e.query), i = f(() => ({ ...a.value !== null ? a.value : {}, "--q-linear-progress-speed": `${e.animationSpeed}ms` })), u = f(() => "q-linear-progress" + (e.color !== void 0 ? ` text-${e.color}` : "") + (e.reverse === true || e.query === true ? " q-linear-progress--reverse" : "") + (e.rounded === true ? " rounded-borders" : "")), c = f(() => Ad(e.buffer !== void 0 ? e.buffer : 1, o.value, n.$q)), s = f(() => `with${e.instantFeedback === true ? "out" : ""}-transition`), v = f(() => `q-linear-progress__track absolute-full q-linear-progress__track--${s.value} q-linear-progress__track--${l.value === true ? "dark" : "light"}` + (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")), h = f(() => Ad(r.value === true ? 1 : e.value, o.value, n.$q)), m = f(() => `q-linear-progress__model absolute-full q-linear-progress__model--${s.value} q-linear-progress__model--${r.value === true ? "in" : ""}determinate`), g = f(() => ({ width: `${e.value * 100}%` })), w = f(() => `q-linear-progress__stripe absolute-${e.reverse === true ? "right" : "left"} q-linear-progress__stripe--${s.value}`);
  return () => {
    const S = [d("div", { class: v.value, style: c.value }), d("div", { class: m.value, style: h.value })];
    return e.stripe === true && r.value === false && S.push(d("div", { class: w.value, style: g.value })), d("div", { class: u.value, style: i.value, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuenow": e.indeterminate === true ? void 0 : e.value }, qt(t.default, S));
  };
} }), Rd = 40, Ji = 20;
ve({ name: "QPullToRefresh", props: { color: String, bgColor: String, icon: String, noMouse: Boolean, disable: Boolean, scrollTarget: Gl }, emits: ["refresh"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = U("pull"), o = U(0), i = U(false), u = U(-40), c = U(false), s = U({}), v = f(() => ({ opacity: o.value, transform: `translateY(${u.value}px) rotate(${o.value * 360}deg)` })), h = f(() => "q-pull-to-refresh__puller row flex-center" + (c.value === true ? " q-pull-to-refresh__puller--animating" : "") + (e.bgColor !== void 0 ? ` bg-${e.bgColor}` : ""));
  function m(_) {
    if (_.isFinal === true) {
      i.value === true && (i.value = false, r.value === "pulled" ? (r.value = "refreshing", y({ pos: Ji }), S()) : r.value === "pull" && y({ pos: -40, ratio: 0 }));
      return;
    }
    if (c.value === true || r.value === "refreshing") return false;
    if (_.isFirst === true) {
      if (gl(q) !== 0 || _.direction !== "down") return i.value === true && (i.value = false, r.value = "pull", y({ pos: -40, ratio: 0 })), false;
      i.value = true;
      const { top: V, left: L } = l.$el.getBoundingClientRect();
      s.value = { top: V + "px", left: L + "px", width: window.getComputedStyle(l.$el).getPropertyValue("width") };
    }
    Vt(_.evt);
    const E = Math.min(140, Math.max(0, _.distance.y));
    u.value = E - Rd, o.value = ct(E / (Ji + Rd), 0, 1);
    const A = u.value > Ji ? "pulled" : "pull";
    r.value !== A && (r.value = A);
  }
  const g = f(() => {
    const _ = { down: true };
    return e.noMouse !== true && (_.mouse = true), [[gn, m, void 0, _]];
  }), w = f(() => `q-pull-to-refresh__content${i.value === true ? " no-pointer-events" : ""}`);
  function S() {
    n("refresh", () => {
      y({ pos: -40, ratio: 0 }, () => {
        r.value = "pull";
      });
    });
  }
  let q, p = null;
  function y({ pos: _, ratio: E }, A) {
    c.value = true, u.value = _, E !== void 0 && (o.value = E), p !== null && clearTimeout(p), p = setTimeout(() => {
      p = null, c.value = false, A == null ? void 0 : A();
    }, 300);
  }
  function b() {
    q = Vn(l.$el, e.scrollTarget);
  }
  return he(() => e.scrollTarget, b), ft(b), Ke(() => {
    p !== null && clearTimeout(p);
  }), Object.assign(l, { trigger: S, updateScrollTarget: b }), () => {
    const _ = [d("div", { class: w.value }, Pe(t.default)), d("div", { class: "q-pull-to-refresh__puller-container fixed row flex-center no-pointer-events z-top", style: s.value }, [d("div", { class: h.value, style: v.value }, [r.value !== "refreshing" ? d(et, { name: e.icon || a.iconSet.pullToRefresh.icon, color: e.color, size: "32px" }) : d(_n, { size: "24px", color: e.color })])])];
    return pn("div", { class: "q-pull-to-refresh" }, _, "main", e.disable === false, () => g.value);
  };
} });
var al = { MIN: 0, RANGE: 1, MAX: 2 };
ve({ name: "QRange", props: { ...Qm, modelValue: { type: Object, default: () => ({ min: null, max: null }), validator: (e) => "min" in e && "max" in e }, dragRange: Boolean, dragOnlyRange: Boolean, leftLabelColor: String, leftLabelTextColor: String, rightLabelColor: String, rightLabelTextColor: String, leftLabelValue: [String, Number], rightLabelValue: [String, Number], leftThumbColor: String, rightThumbColor: String }, emits: Km, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = Se(), { state: l, methods: a } = Wm({ updateValue: V, updatePosition: P, getDragging: L, formAttrs: f(() => ({ type: "hidden", name: e.name, value: `${e.modelValue.min}|${e.modelValue.max}` })) }), r = U(null), o = U(0), i = U(0), u = U({ min: 0, max: 0 });
  function c() {
    u.value.min = e.modelValue.min === null ? l.innerMin.value : ct(e.modelValue.min, l.innerMin.value, l.innerMax.value), u.value.max = e.modelValue.max === null ? l.innerMax.value : ct(e.modelValue.max, l.innerMin.value, l.innerMax.value);
  }
  he(() => `${e.modelValue.min}|${e.modelValue.max}|${l.innerMin.value}|${l.innerMax.value}`, c), c();
  const s = f(() => a.convertModelToRatio(u.value.min)), v = f(() => a.convertModelToRatio(u.value.max)), h = f(() => l.active.value === true ? o.value : s.value), m = f(() => l.active.value === true ? i.value : v.value), g = f(() => {
    const T = { [l.positionProp.value]: `${100 * h.value}%`, [l.sizeProp.value]: `${100 * (m.value - h.value)}%` };
    return e.selectionImg !== void 0 && (T.backgroundImage = `url(${e.selectionImg}) !important`), T;
  }), w = f(() => {
    if (l.editable.value !== true) return {};
    if (n.platform.is.mobile === true) return { onClick: a.onMobileClick };
    const T = { onMousedown: a.onActivate };
    return (e.dragRange === true || e.dragOnlyRange === true) && Object.assign(T, { onFocus: () => {
      l.focus.value = "both";
    }, onBlur: a.onBlur, onKeydown: F, onKeyup: a.onKeyup }), T;
  });
  function S(T) {
    return n.platform.is.mobile !== true && l.editable.value === true && e.dragOnlyRange !== true ? { onFocus: () => {
      l.focus.value = T;
    }, onBlur: a.onBlur, onKeydown: F, onKeyup: a.onKeyup } : {};
  }
  const q = f(() => e.dragOnlyRange !== true ? l.tabindex.value : null), p = f(() => n.platform.is.mobile !== true && (e.dragRange || e.dragOnlyRange === true) ? l.tabindex.value : null), y = U(null), b = f(() => S("min")), _ = a.getThumbRenderFn({ focusValue: "min", getNodeData: () => ({ ref: y, key: "tmin", ...b.value, tabindex: q.value }), ratio: h, label: f(() => e.leftLabelValue !== void 0 ? e.leftLabelValue : u.value.min), thumbColor: f(() => e.leftThumbColor || e.thumbColor || e.color), labelColor: f(() => e.leftLabelColor || e.labelColor), labelTextColor: f(() => e.leftLabelTextColor || e.labelTextColor) }), E = f(() => S("max")), A = a.getThumbRenderFn({ focusValue: "max", getNodeData: () => ({ ...E.value, key: "tmax", tabindex: q.value }), ratio: m, label: f(() => e.rightLabelValue !== void 0 ? e.rightLabelValue : u.value.max), thumbColor: f(() => e.rightThumbColor || e.thumbColor || e.color), labelColor: f(() => e.rightLabelColor || e.labelColor), labelTextColor: f(() => e.rightLabelTextColor || e.labelTextColor) });
  function V(T) {
    (u.value.min !== e.modelValue.min || u.value.max !== e.modelValue.max) && t("update:modelValue", { ...u.value }), T === true && t("change", { ...u.value });
  }
  function L(T) {
    const { left: x, top: C, width: D, height: H } = r.value.getBoundingClientRect(), j = e.dragOnlyRange === true ? 0 : e.vertical === true ? y.value.offsetHeight / (2 * H) : y.value.offsetWidth / (2 * D), W = { left: x, top: C, width: D, height: H, valueMin: u.value.min, valueMax: u.value.max, ratioMin: s.value, ratioMax: v.value }, te = a.getDraggingRatio(T, W);
    return e.dragOnlyRange !== true && te < W.ratioMin + j ? W.type = al.MIN : e.dragOnlyRange === true || te < W.ratioMax - j ? e.dragRange === true || e.dragOnlyRange === true ? (W.type = al.RANGE, Object.assign(W, { offsetRatio: te, offsetModel: a.convertRatioToModel(te), rangeValue: W.valueMax - W.valueMin, rangeRatio: W.ratioMax - W.ratioMin })) : W.type = W.ratioMax - te < te - W.ratioMin ? al.MAX : al.MIN : W.type = al.MAX, W;
  }
  function P(T, x = l.dragging.value) {
    let C;
    const D = a.getDraggingRatio(T, x), H = a.convertRatioToModel(D);
    switch (x.type) {
      case al.MIN:
        D <= x.ratioMax ? (C = { minR: D, maxR: x.ratioMax, min: H, max: x.valueMax }, l.focus.value = "min") : (C = { minR: x.ratioMax, maxR: D, min: x.valueMax, max: H }, l.focus.value = "max");
        break;
      case al.MAX:
        D >= x.ratioMin ? (C = { minR: x.ratioMin, maxR: D, min: x.valueMin, max: H }, l.focus.value = "max") : (C = { minR: D, maxR: x.ratioMin, min: H, max: x.valueMin }, l.focus.value = "min");
        break;
      case al.RANGE:
        const j = D - x.offsetRatio, W = ct(x.ratioMin + j, l.innerMinRatio.value, l.innerMaxRatio.value - x.rangeRatio), te = H - x.offsetModel, pe = ct(x.valueMin + te, l.innerMin.value, l.innerMax.value - x.rangeValue);
        C = { minR: W, maxR: W + x.rangeRatio, min: l.roundValueFn.value(pe), max: l.roundValueFn.value(pe + x.rangeValue) }, l.focus.value = "both";
        break;
    }
    u.value = u.value.min === null || u.value.max === null ? { min: C.min || e.min, max: C.max || e.max } : { min: C.min, max: C.max }, e.snap !== true || e.step === 0 ? (o.value = C.minR, i.value = C.maxR) : (o.value = a.convertModelToRatio(u.value.min), i.value = a.convertModelToRatio(u.value.max));
  }
  function F(T) {
    if (Vs.includes(T.keyCode) === false) return;
    je(T);
    const x = ([34, 33].includes(T.keyCode) ? 10 : 1) * l.keyStep.value, C = ([34, 37, 40].includes(T.keyCode) ? -1 : 1) * (l.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * x;
    if (l.focus.value === "both") {
      const D = u.value.max - u.value.min, H = ct(l.roundValueFn.value(u.value.min + C), l.innerMin.value, l.innerMax.value - D);
      u.value = { min: H, max: l.roundValueFn.value(H + D) };
    } else {
      if (l.focus.value === false) return;
      {
        const D = l.focus.value;
        u.value = { ...u.value, [D]: ct(l.roundValueFn.value(u.value[D] + C), D === "min" ? l.innerMin.value : u.value.min, D === "max" ? l.innerMax.value : u.value.max) };
      }
    }
    V();
  }
  return () => {
    const T = a.getContent(g, p, w, (x) => {
      x.push(_(), A());
    });
    return d("div", { ref: r, class: "q-range " + l.classes.value + (e.modelValue.min === null || e.modelValue.max === null ? " q-slider--no-value" : ""), ...l.attributes.value, "aria-valuenow": e.modelValue.min + "|" + e.modelValue.max }, T);
  };
} });
ve({ name: "QRating", props: { ...Jn, ...wn, modelValue: { type: Number, required: true }, max: { type: [String, Number], default: 5 }, icon: [String, Array], iconHalf: [String, Array], iconSelected: [String, Array], iconAriaLabel: [String, Array], color: [String, Array], colorHalf: [String, Array], colorSelected: [String, Array], noReset: Boolean, noDimming: Boolean, readonly: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = el(e), r = Rr(e), o = xl(r), i = U(0);
  let u = {};
  const c = f(() => e.readonly !== true && e.disable !== true), s = f(() => `q-rating row inline items-center q-rating--${c.value === true ? "" : "non-"}editable` + (e.noDimming === true ? " q-rating--no-dimming" : "") + (e.disable === true ? " disabled" : "") + (e.color !== void 0 && Array.isArray(e.color) === false ? ` text-${e.color}` : "")), v = f(() => {
    const y = Array.isArray(e.icon) === true ? e.icon.length : 0, b = Array.isArray(e.iconSelected) === true ? e.iconSelected.length : 0, _ = Array.isArray(e.iconHalf) === true ? e.iconHalf.length : 0, E = Array.isArray(e.color) === true ? e.color.length : 0, A = Array.isArray(e.colorSelected) === true ? e.colorSelected.length : 0, V = Array.isArray(e.colorHalf) === true ? e.colorHalf.length : 0;
    return { iconLen: y, icon: y > 0 ? e.icon[y - 1] : e.icon, selIconLen: b, selIcon: b > 0 ? e.iconSelected[b - 1] : e.iconSelected, halfIconLen: _, halfIcon: _ > 0 ? e.iconHalf[b - 1] : e.iconHalf, colorLen: E, color: E > 0 ? e.color[E - 1] : e.color, selColorLen: A, selColor: A > 0 ? e.colorSelected[A - 1] : e.colorSelected, halfColorLen: V, halfColor: V > 0 ? e.colorHalf[V - 1] : e.colorHalf };
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
    const y = [], b = v.value, _ = Math.ceil(e.modelValue), E = c.value === true ? 0 : null, A = e.iconHalf === void 0 || _ === e.modelValue ? -1 : _;
    for (let V = 1; V <= e.max; V++) {
      const L = i.value === 0 && e.modelValue >= V || i.value > 0 && i.value >= V, P = A === V && i.value < V, F = i.value > 0 && (P === true ? _ : e.modelValue) >= V && i.value < V, T = P === true ? V <= b.halfColorLen ? e.colorHalf[V - 1] : b.halfColor : b.selColor !== void 0 && L === true ? V <= b.selColorLen ? e.colorSelected[V - 1] : b.selColor : V <= b.colorLen ? e.color[V - 1] : b.color, x = (P === true ? V <= b.halfIconLen ? e.iconHalf[V - 1] : b.halfIcon : b.selIcon !== void 0 && (L === true || F === true) ? V <= b.selIconLen ? e.iconSelected[V - 1] : b.selIcon : V <= b.iconLen ? e.icon[V - 1] : b.icon) || l.iconSet.rating.icon;
      y.push({ name: (P === true ? V <= b.halfIconLen ? e.iconHalf[V - 1] : b.halfIcon : b.selIcon !== void 0 && (L === true || F === true) ? V <= b.selIconLen ? e.iconSelected[V - 1] : b.selIcon : V <= b.iconLen ? e.icon[V - 1] : b.icon) || l.iconSet.rating.icon, attrs: { tabindex: E, role: "radio", "aria-checked": e.modelValue === V ? "true" : "false", "aria-label": h.value(V, x) }, iconClass: "q-rating__icon" + (L === true || P === true ? " q-rating__icon--active" : "") + (F === true ? " q-rating__icon--exselected" : "") + (i.value === V ? " q-rating__icon--hovered" : "") + (T !== void 0 ? ` text-${T}` : "") });
    }
    return y;
  }), g = f(() => {
    const y = { role: "radiogroup" };
    return e.disable === true && (y["aria-disabled"] = "true"), e.readonly === true && (y["aria-readonly"] = "true"), y;
  });
  function w(y) {
    if (c.value === true) {
      const b = ct(parseInt(y, 10), 1, parseInt(e.max, 10)), _ = e.noReset !== true && e.modelValue === b ? 0 : b;
      _ !== e.modelValue && n("update:modelValue", _), i.value = 0;
    }
  }
  function S(y) {
    c.value === true && (i.value = y);
  }
  function q(y, b) {
    switch (y.keyCode) {
      case 13:
      case 32:
        return w(b), je(y);
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
    return m.value.forEach(({ iconClass: b, name: _, attrs: E }, A) => {
      const V = A + 1;
      y.push(d("div", { key: V, ref: (L) => {
        u[`rt${V}`] = L;
      }, class: "q-rating__icon-container flex flex-center", ...E, onClick() {
        w(V);
      }, onMouseover() {
        S(V);
      }, onMouseout: p, onFocus() {
        S(V);
      }, onBlur: p, onKeyup(L) {
        q(L, V);
      } }, qt(t[`tip-${V}`], [d(et, { class: b, name: _ })])));
    }), e.name !== void 0 && e.disable !== true && o(y, "push"), d("div", { class: s.value, style: a.value, ...g.value }, y);
  };
} });
ve({ name: "QResponsive", props: Ns, setup(e, { slots: t }) {
  const n = Hs(e);
  return () => d("div", { class: "q-responsive" }, [d("div", { class: "q-responsive__filler overflow-hidden" }, [d("div", { style: n.value })]), d("div", { class: "q-responsive__content absolute-full fit" }, Pe(t.default))]);
} });
var F1 = ve({ props: ["store", "barStyle", "verticalBarStyle", "horizontalBarStyle"], setup(e) {
  return () => [d("div", { class: e.store.scroll.vertical.barClass.value, style: [e.barStyle, e.verticalBarStyle], "aria-hidden": "true", onMousedown: e.store.onVerticalMousedown }), d("div", { class: e.store.scroll.horizontal.barClass.value, style: [e.barStyle, e.horizontalBarStyle], "aria-hidden": "true", onMousedown: e.store.onHorizontalMousedown }), sn(d("div", { ref: e.store.scroll.vertical.ref, class: e.store.scroll.vertical.thumbClass.value, style: e.store.scroll.vertical.style.value, "aria-hidden": "true" }), e.store.thumbVertDir), sn(d("div", { ref: e.store.scroll.horizontal.ref, class: e.store.scroll.horizontal.thumbClass.value, style: e.store.scroll.horizontal.style.value, "aria-hidden": "true" }), e.store.thumbHorizDir)];
} }), Pd = ["vertical", "horizontal"], eu = { vertical: { offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y" }, horizontal: { offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x" } }, Ld = { prevent: true, mouse: true, mouseAllDir: true }, Bd = (e) => e >= 250 ? 50 : Math.ceil(e / 5), O1 = ve({ name: "QScrollArea", props: { ...nt, thumbStyle: Object, verticalThumbStyle: Object, horizontalThumbStyle: Object, barStyle: [Array, String, Object], verticalBarStyle: [Array, String, Object], horizontalBarStyle: [Array, String, Object], verticalOffset: { type: Array, default: [0, 0] }, horizontalOffset: { type: Array, default: [0, 0] }, contentStyle: [Array, String, Object], contentActiveStyle: [Array, String, Object], delay: { type: [String, Number], default: 1e3 }, visible: { type: Boolean, default: null }, tabindex: [String, Number], onScroll: Function }, setup(e, { slots: t, emit: n }) {
  const l = U(false), a = U(false), r = U(false), o = { vertical: U(0), horizontal: U(0) }, i = { vertical: { ref: U(null), position: U(0), size: U(0) }, horizontal: { ref: U(null), position: U(0), size: U(0) } }, { proxy: u } = Se(), c = lt(e, u.$q);
  let s = null, v;
  const h = U(null), m = f(() => "q-scrollarea" + (c.value === true ? " q-scrollarea--dark" : ""));
  Object.assign(o, { verticalInner: f(() => o.vertical.value - e.verticalOffset[0] - e.verticalOffset[1]), horizontalInner: f(() => o.horizontal.value - e.horizontalOffset[0] - e.horizontalOffset[1]) }), i.vertical.percentage = f(() => {
    const C = i.vertical.size.value - o.vertical.value;
    if (C <= 0) return 0;
    const D = ct(i.vertical.position.value / C, 0, 1);
    return Math.round(D * 1e4) / 1e4;
  }), i.vertical.thumbHidden = f(() => (e.visible === null ? r.value : e.visible) !== true && l.value === false && a.value === false || i.vertical.size.value <= o.vertical.value + 1), i.vertical.thumbStart = f(() => e.verticalOffset[0] + i.vertical.percentage.value * (o.verticalInner.value - i.vertical.thumbSize.value)), i.vertical.thumbSize = f(() => Math.round(ct(o.verticalInner.value * o.verticalInner.value / i.vertical.size.value, Bd(o.verticalInner.value), o.verticalInner.value))), i.vertical.style = f(() => ({ ...e.thumbStyle, ...e.verticalThumbStyle, top: `${i.vertical.thumbStart.value}px`, height: `${i.vertical.thumbSize.value}px`, right: `${e.horizontalOffset[1]}px` })), i.vertical.thumbClass = f(() => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (i.vertical.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), i.vertical.barClass = f(() => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (i.vertical.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : "")), i.horizontal.percentage = f(() => {
    const C = i.horizontal.size.value - o.horizontal.value;
    if (C <= 0) return 0;
    const D = ct(Math.abs(i.horizontal.position.value) / C, 0, 1);
    return Math.round(D * 1e4) / 1e4;
  }), i.horizontal.thumbHidden = f(() => (e.visible === null ? r.value : e.visible) !== true && l.value === false && a.value === false || i.horizontal.size.value <= o.horizontal.value + 1), i.horizontal.thumbStart = f(() => e.horizontalOffset[0] + i.horizontal.percentage.value * (o.horizontalInner.value - i.horizontal.thumbSize.value)), i.horizontal.thumbSize = f(() => Math.round(ct(o.horizontalInner.value * o.horizontalInner.value / i.horizontal.size.value, Bd(o.horizontalInner.value), o.horizontalInner.value))), i.horizontal.style = f(() => ({ ...e.thumbStyle, ...e.horizontalThumbStyle, [u.$q.lang.rtl === true ? "right" : "left"]: `${i.horizontal.thumbStart.value}px`, width: `${i.horizontal.thumbSize.value}px`, bottom: `${e.verticalOffset[1]}px` })), i.horizontal.thumbClass = f(() => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (i.horizontal.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), i.horizontal.barClass = f(() => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (i.horizontal.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : ""));
  const g = f(() => i.vertical.thumbHidden.value === true && i.horizontal.thumbHidden.value === true ? e.contentStyle : e.contentActiveStyle);
  function w() {
    const C = {};
    return Pd.forEach((D) => {
      const H = i[D];
      Object.assign(C, { [D + "Position"]: H.position.value, [D + "Percentage"]: H.percentage.value, [D + "Size"]: H.size.value, [D + "ContainerSize"]: o[D].value, [D + "ContainerInnerSize"]: o[D + "Inner"].value });
    }), C;
  }
  const S = Ea(() => {
    const C = w();
    C.ref = u, n("scroll", C);
  }, 0);
  function q(C, D, H) {
    if (Pd.includes(C) === false) {
      console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
      return;
    }
    (C === "vertical" ? pa : Bi)(h.value, D, H);
  }
  function p({ height: C, width: D }) {
    let H = false;
    o.vertical.value !== C && (o.vertical.value = C, H = true), o.horizontal.value !== D && (o.horizontal.value = D, H = true), H === true && A();
  }
  function y({ position: C }) {
    let D = false;
    i.vertical.position.value !== C.top && (i.vertical.position.value = C.top, D = true), i.horizontal.position.value !== C.left && (i.horizontal.position.value = C.left, D = true), D === true && A();
  }
  function b({ height: C, width: D }) {
    i.horizontal.size.value !== D && (i.horizontal.size.value = D, A()), i.vertical.size.value !== C && (i.vertical.size.value = C, A());
  }
  function _(C, D) {
    const H = i[D];
    if (C.isFirst === true) {
      if (H.thumbHidden.value === true) return;
      v = H.position.value, a.value = true;
    } else if (a.value !== true) return;
    C.isFinal === true && (a.value = false);
    const j = eu[D], W = (H.size.value - o[D].value) / (o[D + "Inner"].value - H.thumbSize.value), te = C.distance[j.dist], pe = v + (C.direction === j.dir ? 1 : -1) * te * W;
    V(pe, D);
  }
  function E(C, D) {
    const H = i[D];
    if (H.thumbHidden.value !== true) {
      const j = D === "vertical" ? e.verticalOffset[0] : e.horizontalOffset[0], W = C[eu[D].offset] - j, te = H.thumbStart.value - j;
      if (W < te || W > te + H.thumbSize.value) {
        const pe = W - H.thumbSize.value / 2, Q = ct(pe / (o[D + "Inner"].value - H.thumbSize.value), 0, 1);
        V(Q * Math.max(0, H.size.value - o[D].value), D);
      }
      H.ref.value !== null && H.ref.value.dispatchEvent(new MouseEvent(C.type, C));
    }
  }
  function A() {
    l.value = true, s !== null && clearTimeout(s), s = setTimeout(() => {
      s = null, l.value = false;
    }, e.delay), e.onScroll !== void 0 && S();
  }
  function V(C, D) {
    h.value[eu[D].scroll] = C;
  }
  let L = null;
  function P() {
    L !== null && clearTimeout(L), L = setTimeout(() => {
      L = null, r.value = true;
    }, u.$q.platform.is.ios ? 50 : 0);
  }
  function F() {
    L !== null && (clearTimeout(L), L = null), r.value = false;
  }
  let T = null;
  he(() => u.$q.lang.rtl, (C) => {
    h.value !== null && Bi(h.value, Math.abs(i.horizontal.position.value) * (C === true ? -1 : 1));
  }), On(() => {
    T = { top: i.vertical.position.value, left: i.horizontal.position.value };
  }), wl(() => {
    if (T === null) return;
    const C = h.value;
    C !== null && (Bi(C, T.left), pa(C, T.top));
  }), Ke(S.cancel), Object.assign(u, { getScrollTarget: () => h.value, getScroll: w, getScrollPosition: () => ({ top: i.vertical.position.value, left: i.horizontal.position.value }), getScrollPercentage: () => ({ top: i.vertical.percentage.value, left: i.horizontal.percentage.value }), setScrollPosition: q, setScrollPercentage(C, D, H) {
    q(C, D * (i[C].size.value - o[C].value) * (C === "horizontal" && u.$q.lang.rtl === true ? -1 : 1), H);
  } });
  const x = { scroll: i, thumbVertDir: [[gn, (C) => {
    _(C, "vertical");
  }, void 0, { vertical: true, ...Ld }]], thumbHorizDir: [[gn, (C) => {
    _(C, "horizontal");
  }, void 0, { horizontal: true, ...Ld }]], onVerticalMousedown(C) {
    E(C, "vertical");
  }, onHorizontalMousedown(C) {
    E(C, "horizontal");
  } };
  return () => d("div", { class: m.value, onMouseenter: P, onMouseleave: F }, [d("div", { ref: h, class: "q-scrollarea__container scroll relative-position fit hide-scrollbar", tabindex: e.tabindex !== void 0 ? e.tabindex : void 0 }, [d("div", { class: "q-scrollarea__content absolute", style: g.value }, qt(t.default, [d(jl, { debounce: 0, onResize: b })])), d(Ah, { axis: "both", onScroll: y })]), d(jl, { debounce: 0, onResize: p }), d(F1, { store: x, barStyle: e.barStyle, verticalBarStyle: e.verticalBarStyle, horizontalBarStyle: e.horizontalBarStyle })]);
} }), Cn = 1e3, V1 = ["start", "center", "end", "start-force", "center-force", "end-force"], Lh = Array.prototype.filter, I1 = __QUASAR_SSR__ || window.getComputedStyle(document.body).overflowAnchor === void 0 ? St : function(e, t) {
  e !== null && (e._qOverflowAnimationFrame !== void 0 && cancelAnimationFrame(e._qOverflowAnimationFrame), e._qOverflowAnimationFrame = requestAnimationFrame(() => {
    if (e === null) return;
    e._qOverflowAnimationFrame = void 0;
    const n = e.children || [];
    Lh.call(n, (a) => a.dataset && a.dataset.qVsAnchor !== void 0).forEach((a) => {
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
var Bh = { virtualScrollSliceSize: { type: [Number, String], default: 10 }, virtualScrollSliceRatioBefore: { type: [Number, String], default: 1 }, virtualScrollSliceRatioAfter: { type: [Number, String], default: 1 }, virtualScrollItemSize: { type: [Number, String], default: 24 }, virtualScrollStickySizeStart: { type: [Number, String], default: 0 }, virtualScrollStickySizeEnd: { type: [Number, String], default: 0 }, tableColspan: [Number, String] }, Fh = Object.keys(Bh), Hu = { virtualScrollHorizontal: Boolean, onVirtualScroll: Function, ...Bh };
function Oh({ virtualScrollLength: e, getVirtualScrollTarget: t, getVirtualScrollEl: n, virtualScrollItemSizeComputed: l }) {
  const a = Se(), { props: r, emit: o, proxy: i } = a, { $q: u } = i;
  let c, s, v, h = [], m;
  const g = U(0), w = U(0), S = U({}), q = U(null), p = U(null), y = U(null), b = U({ from: 0, to: 0 }), _ = f(() => r.tableColspan !== void 0 ? r.tableColspan : 100);
  l === void 0 && (l = f(() => r.virtualScrollItemSize));
  const E = f(() => l.value + ";" + r.virtualScrollHorizontal), A = f(() => E.value + ";" + r.virtualScrollSliceRatioBefore + ";" + r.virtualScrollSliceRatioAfter);
  he(A, () => {
    H();
  }), he(E, V);
  function V() {
    D(s, true);
  }
  function L(Q) {
    D(Q === void 0 ? s : Q);
  }
  function P(Q, M) {
    const ee = t();
    if (ee == null || ee.nodeType === 8) return;
    const X = tu(ee, n(), q.value, p.value, r.virtualScrollHorizontal, u.lang.rtl, r.virtualScrollStickySizeStart, r.virtualScrollStickySizeEnd);
    v !== X.scrollViewSize && H(X.scrollViewSize), T(ee, X, Math.min(e.value - 1, Math.max(0, parseInt(Q, 10) || 0)), 0, V1.indexOf(M) !== -1 ? M : s !== -1 && Q > s ? "end" : "start");
  }
  function F() {
    const Q = t();
    if (Q == null || Q.nodeType === 8) return;
    const M = tu(Q, n(), q.value, p.value, r.virtualScrollHorizontal, u.lang.rtl, r.virtualScrollStickySizeStart, r.virtualScrollStickySizeEnd), ee = e.value - 1, X = M.scrollMaxSize - M.offsetStart - M.offsetEnd - w.value;
    if (c === M.scrollStart) return;
    if (M.scrollMaxSize <= 0) {
      T(Q, M, 0, 0);
      return;
    }
    v !== M.scrollViewSize && H(M.scrollViewSize), x(b.value.from);
    const be = Math.floor(M.scrollMaxSize - Math.max(M.scrollViewSize, M.offsetEnd) - Math.min(m[ee], M.scrollViewSize / 2));
    if (be > 0 && Math.ceil(M.scrollStart) >= be) {
      T(Q, M, ee, M.scrollMaxSize - M.offsetEnd - h.reduce(_a, 0));
      return;
    }
    let B = 0, R = M.scrollStart - M.offsetStart, J = R;
    if (R <= X && R + M.scrollViewSize >= g.value) R -= g.value, B = b.value.from, J = R;
    else for (let O = 0; R >= h[O] && B < ee; O++) R -= h[O], B += Cn;
    for (; R > 0 && B < ee; ) R -= m[B], R > -M.scrollViewSize ? (B++, J = R) : J = m[B] + R;
    T(Q, M, B, J);
  }
  function T(Q, M, ee, X, be) {
    const B = typeof be == "string" && be.indexOf("-force") !== -1, R = B === true ? be.replace("-force", "") : be, J = R !== void 0 ? R : "start";
    let O = Math.max(0, ee - S.value[J]), re = O + S.value.total;
    re > e.value && (re = e.value, O = Math.max(0, re - S.value.total)), c = M.scrollStart;
    const we = O !== b.value.from || re !== b.value.to;
    if (we === false && R === void 0) {
      W(ee);
      return;
    }
    const { activeElement: k } = document, $ = y.value;
    we === true && $ !== null && $ !== k && $.contains(k) === true && ($.addEventListener("focusout", C), setTimeout(() => {
      $ == null ? void 0 : $.removeEventListener("focusout", C);
    })), I1($, ee - O);
    const z = R !== void 0 ? m.slice(O, ee).reduce(_a, 0) : 0;
    if (we === true) {
      const Z = re >= b.value.from && O <= b.value.to ? b.value.to : re;
      b.value = { from: O, to: Z }, g.value = za(h, m, 0, O), w.value = za(h, m, re, e.value), requestAnimationFrame(() => {
        b.value.to !== re && c === M.scrollStart && (b.value = { from: b.value.from, to: re }, w.value = za(h, m, re, e.value));
      });
    }
    requestAnimationFrame(() => {
      if (c !== M.scrollStart) return;
      we === true && x(O);
      const Z = m.slice(O, ee).reduce(_a, 0), ne = Z + M.offsetStart + g.value, K = ne + m[ee];
      let de = ne + X;
      if (R !== void 0) {
        const me = Z - z, fe = M.scrollStart + me;
        de = B !== true && fe < ne && K < fe + M.scrollViewSize ? fe : R === "end" ? K - M.scrollViewSize : ne - (R === "start" ? 0 : Math.round((M.scrollViewSize - m[ee]) / 2));
      }
      c = de, Fd(Q, de, r.virtualScrollHorizontal, u.lang.rtl), W(ee);
    });
  }
  function x(Q) {
    const M = y.value;
    if (M) {
      const ee = Lh.call(M.children, (O) => O.classList && O.classList.contains("q-virtual-scroll--skip") === false), X = ee.length, be = r.virtualScrollHorizontal === true ? (O) => O.getBoundingClientRect().width : (O) => O.offsetHeight;
      let B = Q, R, J;
      for (let O = 0; O < X; ) {
        for (R = be(ee[O]), O++; O < X && ee[O].classList.contains("q-virtual-scroll--with-prev") === true; ) R += be(ee[O]), O++;
        J = R - m[B], J !== 0 && (m[B] += J, h[Math.floor(B / Cn)] += J), B++;
      }
    }
  }
  function C() {
    var _a2;
    (_a2 = y.value) == null ? void 0 : _a2.focus();
  }
  function D(Q, M) {
    const ee = 1 * l.value;
    (M === true || Array.isArray(m) === false) && (m = []);
    const X = m.length;
    m.length = e.value;
    for (let B = e.value - 1; B >= X; B--) m[B] = ee;
    const be = Math.floor((e.value - 1) / Cn);
    h = [];
    for (let B = 0; B <= be; B++) {
      let R = 0;
      const J = Math.min((B + 1) * Cn, e.value);
      for (let O = B * Cn; O < J; O++) R += m[O];
      h.push(R);
    }
    s = -1, c = void 0, g.value = za(h, m, 0, b.value.from), w.value = za(h, m, b.value.to, e.value), Q >= 0 ? (x(b.value.from), Ge(() => {
      P(Q);
    })) : te();
  }
  function H(Q) {
    if (Q === void 0 && typeof window < "u") {
      const R = t();
      R != null && R.nodeType !== 8 && (Q = tu(R, n(), q.value, p.value, r.virtualScrollHorizontal, u.lang.rtl, r.virtualScrollStickySizeStart, r.virtualScrollStickySizeEnd).scrollViewSize);
    }
    v = Q;
    const M = parseFloat(r.virtualScrollSliceRatioBefore) || 0, ee = parseFloat(r.virtualScrollSliceRatioAfter) || 0, X = 1 + M + ee, be = Q === void 0 || Q <= 0 ? 1 : Math.ceil(Q / l.value), B = Math.max(1, be, Math.ceil((r.virtualScrollSliceSize > 0 ? r.virtualScrollSliceSize : 10) / X));
    S.value = { total: Math.ceil(B * X), start: Math.ceil(B * M), center: Math.ceil(B * (0.5 + M)), end: Math.ceil(B * (1 + M)), view: be };
  }
  function j(Q, M) {
    const ee = r.virtualScrollHorizontal === true ? "width" : "height", X = { ["--q-virtual-scroll-item-" + ee]: l.value + "px" };
    return [Q === "tbody" ? d(Q, { class: "q-virtual-scroll__padding", key: "before", ref: q }, [d("tr", [d("td", { style: { [ee]: `${g.value}px`, ...X }, colspan: _.value })])]) : d(Q, { class: "q-virtual-scroll__padding", key: "before", ref: q, style: { [ee]: `${g.value}px`, ...X } }), d(Q, { class: "q-virtual-scroll__content", key: "content", ref: y, tabindex: -1 }, M.flat()), Q === "tbody" ? d(Q, { class: "q-virtual-scroll__padding", key: "after", ref: p }, [d("tr", [d("td", { style: { [ee]: `${w.value}px`, ...X }, colspan: _.value })])]) : d(Q, { class: "q-virtual-scroll__padding", key: "after", ref: p, style: { [ee]: `${w.value}px`, ...X } })];
  }
  function W(Q) {
    s !== Q && (r.onVirtualScroll !== void 0 && o("virtualScroll", { index: Q, from: b.value.from, to: b.value.to - 1, direction: Q < s ? "decrease" : "increase", ref: i }), s = Q);
  }
  H();
  const te = Ea(F, u.platform.is.ios === true ? 120 : 35);
  Yo(() => {
    H();
  });
  let pe = false;
  return On(() => {
    pe = true;
  }), wl(() => {
    if (pe !== true) return;
    const Q = t();
    c !== void 0 && Q !== void 0 && Q !== null && Q.nodeType !== 8 ? Fd(Q, c, r.virtualScrollHorizontal, u.lang.rtl) : P(s);
  }), __QUASAR_SSR__ || Ke(() => {
    te.cancel();
  }), Object.assign(i, { scrollTo: P, reset: V, refresh: L }), { virtualScrollSliceRange: b, virtualScrollSliceSizeComputed: S, setVirtualScrollSize: H, onVirtualScrollEvt: te, localResetVirtualScroll: D, padVirtualScroll: j, scrollTo: P, reset: V, refresh: L };
}
var Od = (e) => ["add", "add-unique", "toggle"].includes(e), z1 = ".*+?^${}()|[]\\", D1 = Object.keys(di);
function nu(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (l) => l !== null && typeof l == "object" && n in l ? l[n] : l;
}
var N1 = ve({ name: "QSelect", inheritAttrs: false, props: { ...Hu, ...wn, ...di, modelValue: { required: true }, multiple: Boolean, displayValue: [String, Number], displayValueHtml: Boolean, dropdownIcon: String, options: { type: Array, default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], hideSelected: Boolean, hideDropdownIcon: Boolean, fillInput: Boolean, maxValues: [Number, String], optionsDense: Boolean, optionsDark: { type: Boolean, default: null }, optionsSelectedClass: String, optionsHtml: Boolean, optionsCover: Boolean, menuShrink: Boolean, menuAnchor: String, menuSelf: String, menuOffset: Array, popupContentClass: String, popupContentStyle: [String, Array, Object], popupNoRouteDismiss: Boolean, useInput: Boolean, useChips: Boolean, newValueMode: { type: String, validator: Od }, mapOptions: Boolean, emitValue: Boolean, disableTabSelection: Boolean, inputDebounce: { type: [Number, String], default: 500 }, inputClass: [Array, String, Object], inputStyle: [Array, String, Object], tabindex: { type: [String, Number], default: 0 }, autocomplete: String, transitionShow: {}, transitionHide: {}, transitionDuration: {}, behavior: { type: String, validator: (e) => ["default", "menu", "dialog"].includes(e), default: "default" }, virtualScrollItemSize: Hu.virtualScrollItemSize.type, onNewValue: Function, onFilter: Function }, emits: [...fi, "add", "remove", "inputValue", "keyup", "keypress", "keydown", "popupShow", "popupHide", "filterAbort"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = U(false), o = U(false), i = U(-1), u = U(""), c = U(false), s = U(false);
  let v = null, h = null, m, g, w, S = null, q, p, y, b;
  const _ = U(null), E = U(null), A = U(null), V = U(null), L = U(null), P = Ms(e), F = Th(ue), T = f(() => Array.isArray(e.options) ? e.options.length : 0), x = f(() => e.virtualScrollItemSize === void 0 ? e.optionsDense === true ? 24 : 48 : e.virtualScrollItemSize), { virtualScrollSliceRange: C, virtualScrollSliceSizeComputed: D, localResetVirtualScroll: H, padVirtualScroll: j, onVirtualScrollEvt: W, scrollTo: te, setVirtualScrollSize: pe } = Oh({ virtualScrollLength: T, getVirtualScrollTarget: jt, getVirtualScrollEl: Ct, virtualScrollItemSizeComputed: x }), Q = vi(), M = f(() => {
    const G = e.mapOptions === true && e.multiple !== true, Ae = e.modelValue !== void 0 && (e.modelValue !== null || G === true) ? e.multiple === true && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
    if (e.mapOptions === true && Array.isArray(e.options) === true) {
      const Re = e.mapOptions === true && m !== void 0 ? m : [], tt = Ae.map((gt) => ae(gt, Re));
      return e.modelValue === null && G === true ? tt.filter((gt) => gt !== null) : tt;
    }
    return Ae;
  }), ee = f(() => {
    const G = {};
    return D1.forEach((Ae) => {
      const Re = e[Ae];
      Re !== void 0 && (G[Ae] = Re);
    }), G;
  }), X = f(() => e.optionsDark === null ? Q.isDark.value : e.optionsDark), be = f(() => Ql(M.value)), B = f(() => {
    let G = "q-field__input q-placeholder col";
    return e.hideSelected === true || M.value.length === 0 ? [G, e.inputClass] : (G += " q-field__input--padding", e.inputClass === void 0 ? G : [G, e.inputClass]);
  }), R = f(() => (e.virtualScrollHorizontal === true ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")), J = f(() => T.value === 0), O = f(() => M.value.map((G) => le.value(G)).join(", ")), re = f(() => e.displayValue !== void 0 ? e.displayValue : O.value), we = f(() => e.optionsHtml === true ? () => true : (G) => (G == null ? void 0 : G.html) === true), k = f(() => e.displayValueHtml === true || e.displayValue === void 0 && (e.optionsHtml === true || M.value.some(we.value))), $ = f(() => Q.focused.value === true ? e.tabindex : -1), z = f(() => {
    const G = { tabindex: e.tabindex, role: "combobox", "aria-label": e.label, "aria-readonly": e.readonly === true ? "true" : "false", "aria-autocomplete": e.useInput === true ? "list" : "none", "aria-expanded": r.value === true ? "true" : "false", "aria-controls": `${Q.targetUid.value}_lb` };
    return i.value >= 0 && (G["aria-activedescendant"] = `${Q.targetUid.value}_${i.value}`), G;
  }), Z = f(() => ({ id: `${Q.targetUid.value}_lb`, role: "listbox", "aria-multiselectable": e.multiple === true ? "true" : "false" })), ne = f(() => M.value.map((G, Ae) => ({ index: Ae, opt: G, html: we.value(G), selected: true, removeAtIndex: Me, toggleOption: Ve, tabindex: $.value }))), K = f(() => {
    if (T.value === 0) return [];
    const { from: G, to: Ae } = C.value;
    return e.options.slice(G, Ae).map((Re, tt) => {
      const gt = N.value(Re) === true, vt = ye(Re) === true, Dt = G + tt, At = { clickable: true, active: vt, activeClass: fe.value, manualFocus: true, focused: false, disable: gt, tabindex: -1, dense: e.optionsDense, dark: X.value, role: "option", "aria-selected": vt === true ? "true" : "false", id: `${Q.targetUid.value}_${Dt}`, onClick: () => {
        Ve(Re);
      } };
      return gt !== true && (i.value === Dt && (At.focused = true), a.platform.is.desktop === true && (At.onMousemove = () => {
        r.value === true && ie(Dt);
      })), { index: Dt, opt: Re, html: we.value(Re), label: le.value(Re), selected: At.active, focused: At.focused, toggleOption: Ve, setOptionIndex: ie, itemProps: At };
    });
  }), de = f(() => e.dropdownIcon !== void 0 ? e.dropdownIcon : a.iconSet.arrow.dropdown), me = f(() => e.optionsCover === false && e.outlined !== true && e.standout !== true && e.borderless !== true && e.rounded !== true), fe = f(() => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : ""), ce = f(() => nu(e.optionValue, "value")), le = f(() => nu(e.optionLabel, "label")), N = f(() => nu(e.optionDisable, "disable")), oe = f(() => M.value.map(ce.value)), _e = f(() => {
    const G = { onInput: ue, onChange: F, onKeydown: it, onKeyup: $e, onKeypress: We, onFocus: Ce, onClick(Ae) {
      g === true && wt(Ae);
    } };
    return G.onCompositionstart = G.onCompositionupdate = G.onCompositionend = F, G;
  });
  he(M, (G) => {
    m = G, e.useInput === true && e.fillInput === true && e.multiple !== true && Q.innerLoading.value !== true && (o.value !== true && r.value !== true || be.value !== true) && (w !== true && cn(), (o.value === true || r.value === true) && Be(""));
  }, { immediate: true }), he(() => e.fillInput, cn), he(r, gi), he(T, Tg);
  function ke(G) {
    return e.emitValue === true ? ce.value(G) : G;
  }
  function qe(G) {
    if (G !== -1 && G < M.value.length) if (e.multiple === true) {
      const Ae = e.modelValue.slice();
      n("remove", { index: G, value: Ae.splice(G, 1)[0] }), n("update:modelValue", Ae);
    } else n("update:modelValue", null);
  }
  function Me(G) {
    qe(G), Q.focus();
  }
  function He(G, Ae) {
    const Re = ke(G);
    if (e.multiple !== true) {
      e.fillInput === true && Fe(le.value(G), true, true), n("update:modelValue", Re);
      return;
    }
    if (M.value.length === 0) {
      n("add", { index: 0, value: Re }), n("update:modelValue", e.multiple === true ? [Re] : Re);
      return;
    }
    if (Ae === true && ye(G) === true || e.maxValues !== void 0 && e.modelValue.length >= e.maxValues) return;
    const tt = e.modelValue.slice();
    n("add", { index: tt.length, value: Re }), tt.push(Re), n("update:modelValue", tt);
  }
  function Ve(G, Ae) {
    var _a2;
    if (Q.editable.value !== true || G === void 0 || N.value(G) === true) return;
    const Re = ce.value(G);
    if (e.multiple !== true) {
      Ae !== true && (Fe(e.fillInput === true ? le.value(G) : "", true, true), at()), (_a2 = E.value) == null ? void 0 : _a2.focus(), (M.value.length === 0 || kn(ce.value(M.value[0]), Re) !== true) && n("update:modelValue", e.emitValue === true ? Re : G);
      return;
    }
    if ((g !== true || c.value === true) && Q.focus(), Ce(), M.value.length === 0) {
      const vt = e.emitValue === true ? Re : G;
      n("add", { index: 0, value: vt }), n("update:modelValue", e.multiple === true ? [vt] : vt);
      return;
    }
    const tt = e.modelValue.slice(), gt = oe.value.findIndex((vt) => kn(vt, Re));
    if (gt !== -1) n("remove", { index: gt, value: tt.splice(gt, 1)[0] });
    else {
      if (e.maxValues !== void 0 && tt.length >= e.maxValues) return;
      const vt = e.emitValue === true ? Re : G;
      n("add", { index: tt.length, value: vt }), tt.push(vt);
    }
    n("update:modelValue", tt);
  }
  function ie(G) {
    if (a.platform.is.desktop !== true) return;
    const Ae = G !== -1 && G < T.value ? G : -1;
    i.value !== Ae && (i.value = Ae);
  }
  function ge(G = 1, Ae) {
    if (r.value === true) {
      let Re = i.value;
      do
        Re = ko(Re + G, -1, T.value - 1);
      while (Re !== -1 && Re !== i.value && N.value(e.options[Re]) === true);
      i.value !== Re && (ie(Re), te(Re), Ae !== true && e.useInput === true && e.fillInput === true && xe(Re >= 0 ? le.value(e.options[Re]) : q, true));
    }
  }
  function ae(G, Ae) {
    const Re = (tt) => kn(ce.value(tt), G);
    return e.options.find(Re) || Ae.find(Re) || G;
  }
  function ye(G) {
    const Ae = ce.value(G);
    return oe.value.find((Re) => kn(Re, Ae)) !== void 0;
  }
  function Ce(G) {
    e.useInput === true && E.value !== null && (G === void 0 || E.value === G.target && G.target.value === O.value) && E.value.select();
  }
  function Oe(G) {
    yn(G, 27) === true && r.value === true && (wt(G), at(), cn()), n("keyup", G);
  }
  function $e(G) {
    const { value: Ae } = G.target;
    if (G.keyCode !== void 0) {
      Oe(G);
      return;
    }
    if (G.target.value = "", v !== null && (clearTimeout(v), v = null), h !== null && (clearTimeout(h), h = null), cn(), typeof Ae == "string" && Ae.length !== 0) {
      const Re = Ae.toLocaleLowerCase(), tt = (vt) => {
        const Dt = e.options.find((At) => String(vt.value(At)).toLocaleLowerCase() === Re);
        return Dt === void 0 ? false : (M.value.indexOf(Dt) === -1 ? Ve(Dt) : at(), true);
      }, gt = (vt) => {
        tt(ce) !== true && vt !== true && tt(le) !== true && Be(Ae, true, () => gt(true));
      };
      gt();
    } else Q.clearValue(G);
  }
  function We(G) {
    n("keypress", G);
  }
  function it(G) {
    if (n("keydown", G), Wl(G) === true) return;
    const Ae = u.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0), Re = G.shiftKey !== true && e.disableTabSelection !== true && e.multiple !== true && (i.value !== -1 || Ae === true);
    if (G.keyCode === 27) {
      Vt(G);
      return;
    }
    if (G.keyCode === 9 && Re === false) {
      Le();
      return;
    }
    if (G.target === void 0 || G.target.id !== Q.targetUid.value || Q.editable.value !== true) return;
    if (G.keyCode === 40 && Q.innerLoading.value !== true && r.value === false) {
      je(G), De();
      return;
    }
    if (G.keyCode === 8 && (e.useChips === true || e.clearable === true) && e.hideSelected !== true && u.value.length === 0) {
      e.multiple === true && Array.isArray(e.modelValue) === true ? qe(e.modelValue.length - 1) : e.multiple !== true && e.modelValue !== null && n("update:modelValue", null);
      return;
    }
    (G.keyCode === 35 || G.keyCode === 36) && (typeof u.value != "string" || u.value.length === 0) && (je(G), i.value = -1, ge(G.keyCode === 36 ? 1 : -1, e.multiple)), (G.keyCode === 33 || G.keyCode === 34) && D.value !== void 0 && (je(G), i.value = Math.max(-1, Math.min(T.value, i.value + (G.keyCode === 33 ? -1 : 1) * D.value.view)), ge(G.keyCode === 33 ? 1 : -1, e.multiple)), (G.keyCode === 38 || G.keyCode === 40) && (je(G), ge(G.keyCode === 38 ? -1 : 1, e.multiple));
    const tt = T.value;
    if ((y === void 0 || b < Date.now()) && (y = ""), tt > 0 && e.useInput !== true && G.key !== void 0 && G.key.length === 1 && G.altKey === false && G.ctrlKey === false && G.metaKey === false && (G.keyCode !== 32 || y.length !== 0)) {
      r.value !== true && De(G);
      const gt = G.key.toLocaleLowerCase(), vt = y.length === 1 && y[0] === gt;
      b = Date.now() + 1500, vt === false && (je(G), y += gt);
      const Dt = new RegExp("^" + y.split("").map((bi) => z1.indexOf(bi) !== -1 ? "\\" + bi : bi).join(".*"), "i");
      let At = i.value;
      if (vt === true || At < 0 || Dt.test(le.value(e.options[At])) !== true) do
        At = ko(At + 1, -1, tt - 1);
      while (At !== i.value && (N.value(e.options[At]) === true || Dt.test(le.value(e.options[At])) !== true));
      i.value !== At && Ge(() => {
        ie(At), te(At), At >= 0 && e.useInput === true && e.fillInput === true && xe(le.value(e.options[At]), true);
      });
      return;
    }
    if (!(G.keyCode !== 13 && (G.keyCode !== 32 || e.useInput === true || y !== "") && (G.keyCode !== 9 || Re === false))) {
      if (G.keyCode !== 9 && je(G), i.value !== -1 && i.value < tt) {
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
          (Dt === "toggle" ? Ve : He)(vt, Dt === "add-unique"), e.multiple !== true && ((_a2 = E.value) == null ? void 0 : _a2.focus(), at());
        };
        if (e.onNewValue !== void 0 ? n("newValue", u.value, gt) : gt(u.value), e.multiple !== true) return;
      }
      r.value === true ? Le() : Q.innerLoading.value !== true && De();
    }
  }
  function Ct() {
    return g === true ? L.value : A.value !== null && A.value.contentEl !== null ? A.value.contentEl : void 0;
  }
  function jt() {
    return Ct();
  }
  function tl() {
    return e.hideSelected === true ? [] : t["selected-item"] !== void 0 ? ne.value.map((G) => t["selected-item"](G)).slice() : t.selected !== void 0 ? [].concat(t.selected()) : e.useChips === true ? ne.value.map((G, Ae) => d(Nm, { key: "option-" + Ae, removable: Q.editable.value === true && N.value(G.opt) !== true, dense: true, textColor: e.color, tabindex: $.value, onRemove() {
      G.removeAtIndex(Ae);
    } }, () => d("span", { class: "ellipsis", [G.html === true ? "innerHTML" : "textContent"]: le.value(G.opt) }))) : [d("span", { class: "ellipsis", [k.value === true ? "innerHTML" : "textContent"]: re.value })];
  }
  function ln() {
    if (J.value === true) return t["no-option"] !== void 0 ? t["no-option"]({ inputValue: u.value }) : void 0;
    const G = t.option !== void 0 ? t.option : (Re) => d(Ca, { key: Re.index, ...Re.itemProps }, () => d(mn, () => d(zu, () => d("span", { [Re.html === true ? "innerHTML" : "textContent"]: Re.label }))));
    let Ae = j("div", K.value.map(G));
    return t["before-options"] !== void 0 && (Ae = t["before-options"]().concat(Ae)), qt(t["after-options"], Ae);
  }
  function In(G, Ae) {
    const Re = Ae === true ? { ...z.value, ...Q.splitAttrs.attributes.value } : void 0, tt = { ref: Ae === true ? E : void 0, key: "i_t", class: B.value, style: e.inputStyle, value: u.value !== void 0 ? u.value : "", type: "search", ...Re, id: Ae === true ? Q.targetUid.value : void 0, maxlength: e.maxlength, autocomplete: e.autocomplete, "data-autofocus": G === true || e.autofocus === true || void 0, disabled: e.disable === true, readonly: e.readonly === true, ..._e.value };
    return G !== true && g === true && (Array.isArray(tt.class) === true ? tt.class = [...tt.class, "no-pointer-events"] : tt.class += " no-pointer-events"), d("input", tt);
  }
  function ue(G) {
    v !== null && (clearTimeout(v), v = null), h !== null && (clearTimeout(h), h = null), !(G && G.target && G.target.qComposing === true) && (xe(G.target.value || ""), w = true, q = u.value, Q.focused.value !== true && (g !== true || c.value === true) && Q.focus(), e.onFilter !== void 0 && (v = setTimeout(() => {
      v = null, Be(u.value);
    }, e.inputDebounce)));
  }
  function xe(G, Ae) {
    u.value !== G && (u.value = G, Ae === true || e.inputDebounce === 0 || e.inputDebounce === "0" ? n("inputValue", G) : h = setTimeout(() => {
      h = null, n("inputValue", G);
    }, e.inputDebounce));
  }
  function Fe(G, Ae, Re) {
    w = Re !== true, e.useInput === true && (xe(G, true), (Ae === true || Re !== true) && (q = G), Ae !== true && Be(G));
  }
  function Be(G, Ae, Re) {
    if (e.onFilter === void 0 || Ae !== true && Q.focused.value !== true) return;
    Q.innerLoading.value === true ? n("filterAbort") : (Q.innerLoading.value = true, s.value = true), G !== "" && e.multiple !== true && M.value.length !== 0 && w !== true && G === le.value(M.value[0]) && (G = "");
    const tt = setTimeout(() => {
      r.value === true && (r.value = false);
    }, 10);
    S !== null && clearTimeout(S), S = tt, n("filter", G, (gt, vt) => {
      (Ae === true || Q.focused.value === true) && S === tt && (clearTimeout(S), typeof gt == "function" && gt(), s.value = false, Ge(() => {
        Q.innerLoading.value = false, Q.editable.value === true && (Ae === true ? r.value === true && at() : r.value === true ? gi(true) : r.value = true), typeof vt == "function" && Ge(() => {
          vt(l);
        }), typeof Re == "function" && Ge(() => {
          Re(l);
        });
      }));
    }, () => {
      Q.focused.value === true && S === tt && (clearTimeout(S), Q.innerLoading.value = false, s.value = false), r.value === true && (r.value = false);
    });
  }
  function Ue() {
    return d(ui, { ref: A, class: R.value, style: e.popupContentStyle, modelValue: r.value, fit: e.menuShrink !== true, cover: e.optionsCover === true && J.value !== true && e.useInput !== true, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, dark: X.value, noParentEvent: true, noRefocus: true, noFocus: true, noRouteDismiss: e.popupNoRouteDismiss, square: me.value, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, separateClosePopup: true, ...Z.value, onScrollPassive: W, onBeforeShow: Gs, onBeforeHide: yt, onShow: ht }, ln);
  }
  function yt(G) {
    Xs(G), Le();
  }
  function ht() {
    pe();
  }
  function I(G) {
    var _a2;
    wt(G), (_a2 = E.value) == null ? void 0 : _a2.focus(), c.value = true, window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
  }
  function Y(G) {
    wt(G), Ge(() => {
      c.value = false;
    });
  }
  function se() {
    const G = [d(d1, { class: `col-auto ${Q.fieldClass.value}`, ...ee.value, for: Q.targetUid.value, dark: X.value, square: true, loading: s.value, itemAligned: false, filled: true, stackLabel: u.value.length !== 0, ...Q.splitAttrs.listeners.value, onFocus: I, onBlur: Y }, { ...t, rawControl: () => Q.getControl(true), before: void 0, after: void 0 })];
    return r.value === true && G.push(d("div", { ref: L, class: R.value + " scroll", style: e.popupContentStyle, ...Z.value, onClick: Vt, onScrollPassive: W }, ln())), d(ci, { ref: V, modelValue: o.value, position: e.useInput === true ? "top" : void 0, transitionShow: p, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, noRouteDismiss: e.popupNoRouteDismiss, onBeforeShow: Gs, onBeforeHide: Te, onHide: Ee, onShow: Xe }, () => d("div", { class: "q-select__dialog" + (X.value === true ? " q-select__dialog--dark q-dark" : "") + (c.value === true ? " q-select__dialog--focused" : "") }, G));
  }
  function Te(G) {
    Xs(G), V.value !== null && V.value.__updateRefocusTarget(Q.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")), Q.focused.value = false;
  }
  function Ee(G) {
    at(), Q.focused.value === false && n("blur", G), cn();
  }
  function Xe() {
    const G = document.activeElement;
    (G === null || G.id !== Q.targetUid.value) && E.value !== null && E.value !== G && E.value.focus(), pe();
  }
  function Le() {
    o.value !== true && (i.value = -1, r.value === true && (r.value = false), Q.focused.value === false && (S !== null && (clearTimeout(S), S = null), Q.innerLoading.value === true && (n("filterAbort"), Q.innerLoading.value = false, s.value = false)));
  }
  function De(G) {
    Q.editable.value === true && (g === true ? (Q.onControlFocusin(G), o.value = true, Ge(() => {
      Q.focus();
    })) : Q.focus(), e.onFilter !== void 0 ? Be(u.value) : (J.value !== true || t["no-option"] !== void 0) && (r.value = true));
  }
  function at() {
    o.value = false, Le();
  }
  function cn() {
    e.useInput === true && Fe(e.multiple !== true && e.fillInput === true && M.value.length !== 0 && le.value(M.value[0]) || "", true, true);
  }
  function gi(G) {
    let Ae = -1;
    if (G === true) {
      if (M.value.length !== 0) {
        const Re = ce.value(M.value[0]);
        Ae = e.options.findIndex((tt) => kn(ce.value(tt), Re));
      }
      H(Ae);
    }
    ie(Ae);
  }
  function Tg(G, Ae) {
    r.value === true && Q.innerLoading.value === false && (H(-1, true), Ge(() => {
      r.value === true && Q.innerLoading.value === false && (G > Ae ? H() : gi(true));
    }));
  }
  function Ys() {
    o.value === false && A.value !== null && A.value.updatePosition();
  }
  function Gs(G) {
    G !== void 0 && wt(G), n("popupShow", G), Q.hasPopupOpen = true, Q.onControlFocusin(G);
  }
  function Xs(G) {
    G !== void 0 && wt(G), n("popupHide", G), Q.hasPopupOpen = false, Q.onControlFocusout(G);
  }
  function Zs() {
    g = a.platform.is.mobile !== true && e.behavior !== "dialog" ? false : e.behavior !== "menu" && (e.useInput === true ? t["no-option"] !== void 0 || e.onFilter !== void 0 || J.value === false : true), p = a.platform.is.ios === true && g === true && e.useInput === true ? "fade" : e.transitionShow;
  }
  return Ma(Zs), Go(Ys), Zs(), Ke(() => {
    v !== null && clearTimeout(v), h !== null && clearTimeout(h);
  }), Object.assign(l, { showPopup: De, hidePopup: at, removeAtIndex: qe, add: He, toggleOption: Ve, getOptionIndex: () => i.value, setOptionIndex: ie, moveOptionSelection: ge, filter: Be, updateMenuPosition: Ys, updateInputValue: Fe, isOptionSelected: ye, getEmittingOptionValue: ke, isOptionDisabled: (...G) => N.value.apply(null, G) === true, getOptionValue: (...G) => ce.value.apply(null, G), getOptionLabel: (...G) => le.value.apply(null, G) }), Object.assign(Q, { innerValue: M, fieldClass: f(() => `q-select q-field--auto-height q-select--with${e.useInput !== true ? "out" : ""}-input q-select--with${e.useChips !== true ? "out" : ""}-chips q-select--${e.multiple === true ? "multiple" : "single"}`), inputRef: _, targetRef: E, hasValue: be, showPopup: De, floatingLabel: f(() => e.hideSelected !== true && be.value === true || typeof u.value == "number" || u.value.length !== 0 || Ql(e.displayValue)), getControlChild: () => {
    if (Q.editable.value !== false && (o.value === true || J.value !== true || t["no-option"] !== void 0)) return g === true ? se() : Ue();
    Q.hasPopupOpen === true && (Q.hasPopupOpen = false);
  }, controlEvents: { onFocusin(G) {
    Q.onControlFocusin(G);
  }, onFocusout(G) {
    Q.onControlFocusout(G, () => {
      cn(), Le();
    });
  }, onClick(G) {
    var _a2;
    if (Vt(G), g !== true && r.value === true) {
      Le(), (_a2 = E.value) == null ? void 0 : _a2.focus();
      return;
    }
    De(G);
  } }, getControl: (G) => {
    const Ae = tl(), Re = G === true || o.value !== true || g !== true;
    if (e.useInput === true) Ae.push(In(G, Re));
    else if (Q.editable.value === true) {
      const gt = Re === true ? z.value : void 0;
      Ae.push(d("input", { ref: Re === true ? E : void 0, key: "d_t", class: "q-select__focus-target", id: Re === true ? Q.targetUid.value : void 0, value: re.value, readonly: true, "data-autofocus": G === true || e.autofocus === true || void 0, ...gt, onKeydown: it, onKeyup: Oe, onKeypress: We })), Re === true && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && Ae.push(d("input", { class: "q-select__autocomplete-input", autocomplete: e.autocomplete, tabindex: -1, onKeyup: $e }));
    }
    if (P.value !== void 0 && e.disable !== true && oe.value.length !== 0) {
      const gt = oe.value.map((vt) => d("option", { value: vt, selected: true }));
      Ae.push(d("select", { class: "hidden", name: P.value, multiple: e.multiple }, gt));
    }
    const tt = e.useInput === true || Re !== true ? void 0 : Q.splitAttrs.attributes.value;
    return d("div", { class: "q-field__native row items-center", ...tt, ...Q.splitAttrs.listeners.value }, Ae);
  }, getInnerAppend: () => e.loading !== true && s.value !== true && e.hideDropdownIcon !== true ? [d(et, { class: "q-select__dropdown-icon" + (r.value === true ? " rotate-180" : ""), name: de.value })] : null }), mi(Q);
} }), H1 = ["text", "rect", "circle", "QBtn", "QBadge", "QChip", "QToolbar", "QCheckbox", "QRadio", "QToggle", "QSlider", "QRange", "QInput", "QAvatar"], j1 = ["wave", "pulse", "pulse-x", "pulse-y", "fade", "blink", "none"];
ve({ name: "QSkeleton", props: { ...nt, tag: { type: String, default: "div" }, type: { type: String, validator: (e) => H1.includes(e), default: "rect" }, animation: { type: String, validator: (e) => j1.includes(e), default: "wave" }, animationSpeed: { type: [String, Number], default: 1500 }, square: Boolean, bordered: Boolean, size: String, width: String, height: String }, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), a = f(() => {
    const o = e.size !== void 0 ? [e.size, e.size] : [e.width, e.height];
    return { "--q-skeleton-speed": `${e.animationSpeed}ms`, width: o[0], height: o[1] };
  }), r = f(() => `q-skeleton q-skeleton--${l.value === true ? "dark" : "light"} q-skeleton--type-${e.type}` + (e.animation !== "none" ? ` q-skeleton--anim q-skeleton--anim-${e.animation}` : "") + (e.square === true ? " q-skeleton--square" : "") + (e.bordered === true ? " q-skeleton--bordered" : ""));
  return () => d(e.tag, { class: r.value, style: a.value }, Pe(t.default));
} });
var Vd = [["left", "center", "start", "width"], ["right", "center", "end", "width"], ["top", "start", "center", "height"], ["bottom", "end", "center", "height"]];
ve({ name: "QSlideItem", props: { ...nt, leftColor: String, rightColor: String, topColor: String, bottomColor: String, onSlide: Function }, emits: ["action", "top", "right", "bottom", "left"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = lt(e, a), { getCache: o } = Pr(), i = U(null);
  let u = null, c = {}, s = {}, v = {};
  const h = f(() => a.lang.rtl === true ? { left: "right", right: "left" } : { left: "left", right: "right" }), m = f(() => "q-slide-item q-item-type overflow-hidden" + (r.value === true ? " q-slide-item--dark q-dark" : ""));
  function g() {
    i.value.style.transform = "translate(0,0)";
  }
  function w(q, p, y) {
    e.onSlide !== void 0 && n("slide", { side: q, ratio: p, isReset: y });
  }
  function S(q) {
    const p = i.value;
    if (q.isFirst) c = { dir: null, size: { left: 0, right: 0, top: 0, bottom: 0 }, scale: 0 }, p.classList.add("no-transition"), Vd.forEach((E) => {
      if (t[E[0]] !== void 0) {
        const A = v[E[0]];
        A.style.transform = "scale(1)", c.size[E[0]] = A.getBoundingClientRect()[E[3]];
      }
    }), c.axis = q.direction === "up" || q.direction === "down" ? "Y" : "X";
    else if (q.isFinal) {
      p.classList.remove("no-transition"), c.scale === 1 ? (p.style.transform = `translate${c.axis}(${c.dir * 100}%)`, u !== null && clearTimeout(u), u = setTimeout(() => {
        u = null, n(c.showing, { reset: g }), n("action", { side: c.showing, reset: g });
      }, 230)) : (p.style.transform = "translate(0,0)", w(c.showing, 0, true));
      return;
    } else q.direction = c.axis === "X" ? q.offset.x < 0 ? "left" : "right" : q.offset.y < 0 ? "up" : "down";
    if (t.left === void 0 && q.direction === h.value.right || t.right === void 0 && q.direction === h.value.left || t.top === void 0 && q.direction === "down" || t.bottom === void 0 && q.direction === "up") {
      p.style.transform = "translate(0,0)";
      return;
    }
    let y, b, _;
    c.axis === "X" ? (b = q.direction === "left" ? -1 : 1, y = b === 1 ? h.value.left : h.value.right, _ = q.distance.x) : (b = q.direction === "up" ? -2 : 2, y = b === 2 ? "top" : "bottom", _ = q.distance.y), !(c.dir !== null && Math.abs(b) !== Math.abs(c.dir)) && (c.dir !== b && (["left", "right", "top", "bottom"].forEach((E) => {
      s[E] && (s[E].style.visibility = y === E ? "visible" : "hidden");
    }), c.showing = y, c.dir = b), c.scale = Math.max(0, Math.min(1, (_ - 40) / c.size[y])), p.style.transform = `translate${c.axis}(${_ * b / Math.abs(b)}px)`, v[y].style.transform = `scale(${c.scale})`, w(y, c.scale, false));
  }
  return Ma(() => {
    s = {}, v = {};
  }), Ke(() => {
    u !== null && clearTimeout(u);
  }), Object.assign(l, { reset: g }), () => {
    const q = [], p = { left: t[h.value.right] !== void 0, right: t[h.value.left] !== void 0, up: t.bottom !== void 0, down: t.top !== void 0 }, y = Object.keys(p).filter((_) => p[_] === true);
    Vd.forEach((_) => {
      const E = _[0];
      t[E] !== void 0 && q.push(d("div", { key: E, ref: (A) => {
        s[E] = A;
      }, class: `q-slide-item__${E} absolute-full row no-wrap items-${_[1]} justify-${_[2]}` + (e[E + "Color"] !== void 0 ? ` bg-${e[E + "Color"]}` : "") }, [d("div", { ref: (A) => {
        v[E] = A;
      } }, t[E]())]));
    });
    const b = d("div", { key: `${y.length === 0 ? "only-" : ""} content`, ref: i, class: "q-slide-item__content" }, Pe(t.default));
    return y.length === 0 ? q.push(b) : q.push(sn(b, o("dir#" + y.join(""), () => {
      const _ = { prevent: true, stop: true, mouse: true };
      return y.forEach((E) => {
        _[E] = true;
      }), [[gn, S, void 0, _]];
    }))), d("div", { class: m.value }, q);
  };
} });
ve({ name: "QSpace", setup() {
  const e = d("div", { class: "q-space" });
  return () => e;
} });
var U1 = '<g transform="matrix(1 0 0 -1 0 80)"><rect width="10" height="20" rx="3"><animate attributeName="height" begin="0s" dur="4.3s" values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="15" width="10" height="80" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" width="10" height="50" rx="3"><animate attributeName="height" begin="0s" dur="1.4s" values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="45" width="10" height="30" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear" repeatCount="indefinite"></animate></rect></g>';
ve({ name: "QSpinnerAudio", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 55 80", xmlns: "http://www.w3.org/2000/svg", innerHTML: U1 });
} });
var Q1 = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"></animate></circle></g>';
ve({ name: "QSpinnerBall", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 57 57", xmlns: "http://www.w3.org/2000/svg", innerHTML: Q1 });
} });
var K1 = '<rect y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="60" width="15" height="140" rx="6"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="90" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="120" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect>';
ve({ name: "QSpinnerBars", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 135 140", xmlns: "http://www.w3.org/2000/svg", innerHTML: K1 });
} });
var W1 = '<rect x="25" y="25" width="50" height="50" fill="none" stroke-width="4" stroke="currentColor"><animateTransform id="spinnerBox" attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" dur="0.5s" begin="rectBox.end"></animateTransform></rect><rect x="27" y="27" width="46" height="50" fill="currentColor"><animate id="rectBox" attributeName="height" begin="0s;spinnerBox.end" dur="1.3s" from="50" to="0" fill="freeze"></animate></rect>';
ve({ name: "QSpinnerBox", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: W1 });
} });
var Y1 = '<circle cx="50" cy="50" r="48" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="currentColor"></circle><line stroke-linecap="round" stroke-width="4" stroke-miterlimit="10" stroke="currentColor" x1="50" y1="50" x2="85" y2="50.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2s" repeatCount="indefinite"></animateTransform></line><line stroke-linecap="round" stroke-width="4" stroke-miterlimit="10" stroke="currentColor" x1="50" y1="50" x2="49.5" y2="74"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="15s" repeatCount="indefinite"></animateTransform></line>';
ve({ name: "QSpinnerClock", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: Y1 });
} });
var G1 = '<rect x="0" y="0" width="100" height="100" fill="none"></rect><path d="M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z" fill="currentColor"></path><circle cx="30" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;1;1" keyTimes="0;0.2;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="50" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.2;0.4;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="70" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.4;0.6;1" dur="1s" repeatCount="indefinite"></animate></circle>';
ve({ name: "QSpinnerComment", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: G1 });
} });
var X1 = '<rect x="0" y="0" width="100" height="100" fill="none"></rect><g transform="translate(25 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.1s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(25 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.7"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.3s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.2s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g>';
ve({ name: "QSpinnerCube", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: X1 });
} });
var Z1 = '<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from=".5" to=".5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';
ve({ name: "QSpinnerDots", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg", innerHTML: Z1 });
} });
var J1 = '<g transform="translate(20 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(50 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.1s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(80 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.2s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g>';
ve({ name: "QSpinnerFacebook", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid", innerHTML: J1 });
} });
var e_ = '<g transform="translate(-20,-20)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="90 50 50" to="0 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g><g transform="translate(20,20) rotate(15 50 50)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="90 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g>';
ve({ name: "QSpinnerGears", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: e_ });
} });
var t_ = '<circle cx="12.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="0s" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5"><animate attributeName="fill-opacity" begin="100ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="300ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="600ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="800ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="400ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="700ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="500ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="200ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';
ve({ name: "QSpinnerGrid", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 105 105", xmlns: "http://www.w3.org/2000/svg", innerHTML: t_ });
} });
var n_ = '<path d="M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.716-6.002 11.47-7.65 17.304-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.593-2.32 17.308 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0.7s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"></path>';
ve({ name: "QSpinnerHearts", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 140 64", xmlns: "http://www.w3.org/2000/svg", innerHTML: n_ });
} });
var l_ = '<g><path fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10" d="M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"></path><clipPath id="uil-hourglass-clip1"><rect x="15" y="20" width="70" height="25"><animate attributeName="height" from="25" to="0" dur="1s" repeatCount="indefinite" values="25;0;0" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="20" to="45" dur="1s" repeatCount="indefinite" values="20;45;45" keyTimes="0;0.5;1"></animate></rect></clipPath><clipPath id="uil-hourglass-clip2"><rect x="15" y="55" width="70" height="25"><animate attributeName="height" from="0" to="25" dur="1s" repeatCount="indefinite" values="0;25;25" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="80" to="55" dur="1s" repeatCount="indefinite" values="80;55;55" keyTimes="0;0.5;1"></animate></rect></clipPath><path d="M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z" clip-path="url(#uil-hourglass-clip1)" fill="currentColor"></path><path d="M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z" clip-path="url(#uil-hourglass-clip2)" fill="currentColor"></path><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" repeatCount="indefinite" dur="1s" values="0 50 50;0 50 50;180 50 50" keyTimes="0;0.7;1"></animateTransform></g>';
ve({ name: "QSpinnerHourglass", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: l_ });
} });
var a_ = '<path d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z" fill="none" stroke="currentColor" stroke-width="8" stroke-dasharray="10.691205342610678 10.691205342610678" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" from="0" to="21.382410685221355" begin="0" dur="2s" repeatCount="indefinite" fill="freeze"></animate></path>';
ve({ name: "QSpinnerInfinity", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: a_ });
} });
var r_ = '<g stroke-width="4" stroke-linecap="round"><line y1="17" y2="29" transform="translate(32,32) rotate(180)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(210)"><animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(240)"><animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(270)"><animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(300)"><animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(330)"><animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(0)"><animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(30)"><animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(60)"><animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(90)"><animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(120)"><animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(150)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line></g>';
ve({ name: "QSpinnerIos", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, stroke: "currentColor", fill: "currentColor", viewBox: "0 0 64 64", innerHTML: r_ });
} });
var o_ = '<circle cx="50" cy="50" r="44" fill="none" stroke-width="4" stroke-opacity=".5" stroke="currentColor"></circle><circle cx="8" cy="54" r="6" fill="currentColor" stroke-width="3" stroke="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 48" to="360 50 52" dur="2s" repeatCount="indefinite"></animateTransform></circle>';
ve({ name: "QSpinnerOrbit", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: o_ });
} });
var i_ = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g>';
ve({ name: "QSpinnerOval", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", innerHTML: i_ });
} });
var u_ = '<path d="M0 50A50 50 0 0 1 50 0L50 50L0 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="0.8s" repeatCount="indefinite"></animateTransform></path><path d="M50 0A50 50 0 0 1 100 50L50 50L50 0" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1.6s" repeatCount="indefinite"></animateTransform></path><path d="M100 50A50 50 0 0 1 50 100L50 50L100 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2.4s" repeatCount="indefinite"></animateTransform></path><path d="M50 100A50 50 0 0 1 0 50L50 50L50 100" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="3.2s" repeatCount="indefinite"></animateTransform></path>';
ve({ name: "QSpinnerPie", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: u_ });
} });
var s_ = '<g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g>';
ve({ name: "QSpinnerPuff", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 44 44", xmlns: "http://www.w3.org/2000/svg", innerHTML: s_ });
} });
var c_ = '<g transform="scale(0.55)"><circle cx="30" cy="150" r="30" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></circle><path d="M90,150h30c0-49.7-40.3-90-90-90v30C63.1,90,90,116.9,90,150z" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.1" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></path><path d="M150,150h30C180,67.2,112.8,0,30,0v30C96.3,30,150,83.7,150,150z" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.2" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></path></g>';
ve({ name: "QSpinnerRadio", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: c_ });
} });
var d_ = '<g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2"><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="8"><animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"></animate></circle></g>';
ve({ name: "QSpinnerRings", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 45 45", xmlns: "http://www.w3.org/2000/svg", innerHTML: d_ });
} });
var f_ = '<defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-color="currentColor" stop-opacity="0" offset="0%"></stop><stop stop-color="currentColor" stop-opacity=".631" offset="63.146%"></stop><stop stop-color="currentColor" offset="100%"></stop></linearGradient></defs><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></path><circle fill="currentColor" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></circle></g>';
ve({ name: "QSpinnerTail", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", innerHTML: f_ });
} });
ve({ name: "QSplitter", props: { ...nt, modelValue: { type: Number, required: true }, reverse: Boolean, unit: { type: String, default: "%", validator: (e) => ["%", "px"].includes(e) }, limits: { type: Array, validator: (e) => e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number" ? false : e[0] >= 0 && e[0] <= e[1] }, emitImmediately: Boolean, horizontal: Boolean, disable: Boolean, beforeClass: [Array, String, Object], afterClass: [Array, String, Object], separatorClass: [Array, String, Object], separatorStyle: [Array, String, Object] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = lt(e, l), r = U(null), o = { before: U(null), after: U(null) }, i = f(() => `q-splitter no-wrap ${e.horizontal === true ? "q-splitter--horizontal column" : "q-splitter--vertical row"} q-splitter--${e.disable === true ? "disabled" : "workable"}` + (a.value === true ? " q-splitter--dark" : "")), u = f(() => e.horizontal === true ? "height" : "width"), c = f(() => e.reverse !== true ? "before" : "after"), s = f(() => e.limits !== void 0 ? e.limits : e.unit === "%" ? [10, 90] : [50, 1 / 0]);
  function v(_) {
    return (e.unit === "%" ? _ : Math.round(_)) + e.unit;
  }
  const h = f(() => ({ [c.value]: { [u.value]: v(e.modelValue) } }));
  let m, g, w, S, q;
  function p(_) {
    if (_.isFirst === true) {
      const A = r.value.getBoundingClientRect()[u.value];
      m = e.horizontal === true ? "up" : "left", g = e.unit === "%" ? 100 : A, w = Math.min(g, s.value[1], Math.max(s.value[0], e.modelValue)), S = (e.reverse !== true ? 1 : -1) * (e.horizontal === true ? 1 : l.lang.rtl === true ? -1 : 1) * (e.unit === "%" ? A === 0 ? 0 : 100 / A : 1), r.value.classList.add("q-splitter--active");
      return;
    }
    if (_.isFinal === true) {
      q !== e.modelValue && n("update:modelValue", q), r.value.classList.remove("q-splitter--active");
      return;
    }
    const E = w + S * (_.direction === m ? -1 : 1) * _.distance[e.horizontal === true ? "y" : "x"];
    q = Math.min(g, s.value[1], Math.max(s.value[0], E)), o[c.value].value.style[u.value] = v(q), e.emitImmediately === true && e.modelValue !== q && n("update:modelValue", q);
  }
  const y = f(() => [[gn, p, void 0, { [e.horizontal === true ? "vertical" : "horizontal"]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
  function b(_, E) {
    _ < E[0] ? n("update:modelValue", E[0]) : _ > E[1] && n("update:modelValue", E[1]);
  }
  return he(() => e.modelValue, (_) => {
    b(_, s.value);
  }), he(() => e.limits, () => {
    Ge(() => {
      b(e.modelValue, s.value);
    });
  }), () => {
    const _ = [d("div", { ref: o.before, class: ["q-splitter__panel q-splitter__before" + (e.reverse === true ? " col" : ""), e.beforeClass], style: h.value.before }, Pe(t.before)), d("div", { class: ["q-splitter__separator", e.separatorClass], style: e.separatorStyle, "aria-disabled": e.disable === true ? "true" : void 0 }, [pn("div", { class: "q-splitter__separator-area absolute-full" }, Pe(t.separator), "sep", e.disable !== true, () => y.value)]), d("div", { ref: o.after, class: ["q-splitter__panel q-splitter__after" + (e.reverse === true ? "" : " col"), e.afterClass], style: h.value.after }, Pe(t.after))];
    return d("div", { class: i.value, ref: r }, qt(t.default, _));
  };
} });
var Vh = ve({ name: "StepHeader", props: { stepper: {}, step: {}, goToPanel: Function }, setup(e, { attrs: t }) {
  const { proxy: { $q: n } } = Se(), l = U(null), a = f(() => e.stepper.modelValue === e.step.name), r = f(() => {
    const S = e.step.disable;
    return S === true || S === "";
  }), o = f(() => {
    const S = e.step.error;
    return S === true || S === "";
  }), i = f(() => {
    const S = e.step.done;
    return r.value === false && (S === true || S === "");
  }), u = f(() => {
    const S = e.step.headerNav, q = S === true || S === "" || S === void 0;
    return r.value === false && e.stepper.headerNav && q;
  }), c = f(() => e.step.prefix && (a.value === false || e.stepper.activeIcon === "none") && (o.value === false || e.stepper.errorIcon === "none") && (i.value === false || e.stepper.doneIcon === "none")), s = f(() => {
    const S = e.step.icon || e.stepper.inactiveIcon;
    if (a.value === true) {
      const q = e.step.activeIcon || e.stepper.activeIcon;
      return q === "none" ? S : q || n.iconSet.stepper.active;
    }
    if (o.value === true) {
      const q = e.step.errorIcon || e.stepper.errorIcon;
      return q === "none" ? S : q || n.iconSet.stepper.error;
    }
    if (r.value === false && i.value === true) {
      const q = e.step.doneIcon || e.stepper.doneIcon;
      return q === "none" ? S : q || n.iconSet.stepper.done;
    }
    return S;
  }), v = f(() => {
    const S = o.value === true ? e.step.errorColor || e.stepper.errorColor : void 0;
    if (a.value === true) {
      const q = e.step.activeColor || e.stepper.activeColor || e.step.color;
      return q !== void 0 ? q : S;
    }
    return S !== void 0 ? S : r.value === false && i.value === true ? e.step.doneColor || e.stepper.doneColor || e.step.color || e.stepper.inactiveColor : e.step.color || e.stepper.inactiveColor;
  }), h = f(() => "q-stepper__tab col-grow flex items-center no-wrap relative-position" + (v.value !== void 0 ? ` text-${v.value}` : "") + (o.value === true ? " q-stepper__tab--error q-stepper__tab--error-with-" + (c.value === true ? "prefix" : "icon") : "") + (a.value === true ? " q-stepper__tab--active" : "") + (i.value === true ? " q-stepper__tab--done" : "") + (u.value === true ? " q-stepper__tab--navigation q-focusable q-hoverable" : "") + (r.value === true ? " q-stepper__tab--disabled" : "")), m = f(() => e.stepper.headerNav !== true ? false : u.value);
  function g() {
    var _a2;
    (_a2 = l.value) == null ? void 0 : _a2.focus(), a.value === false && e.goToPanel(e.step.name);
  }
  function w(S) {
    S.keyCode === 13 && a.value === false && e.goToPanel(e.step.name);
  }
  return () => {
    const S = { class: h.value };
    u.value === true && (S.onClick = g, S.onKeyup = w, Object.assign(S, r.value === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: t.tabindex || 0 }));
    const q = [d("div", { class: "q-focus-helper", tabindex: -1, ref: l }), d("div", { class: "q-stepper__dot row flex-center q-stepper__line relative-position" }, [d("span", { class: "row flex-center" }, [c.value === true ? e.step.prefix : d(et, { name: s.value })])])];
    if (e.step.title !== void 0 && e.step.title !== null) {
      const p = [d("div", { class: "q-stepper__title" }, e.step.title)];
      e.step.caption !== void 0 && e.step.caption !== null && p.push(d("div", { class: "q-stepper__caption" }, e.step.caption)), q.push(d("div", { class: "q-stepper__label q-stepper__line relative-position" }, p));
    }
    return sn(d("div", S, q), [[ri, m.value]]);
  };
} });
function Ih(e) {
  return d("div", { class: "q-stepper__step-content" }, [d("div", { class: "q-stepper__step-inner" }, Pe(e.default))]);
}
var Id = { setup(e, { slots: t }) {
  return () => Ih(t);
} };
ve({ name: "QStep", props: { ...$s, icon: String, color: String, title: { type: String, required: true }, caption: String, prefix: [String, Number], doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String, headerNav: { type: Boolean, default: true }, done: Boolean, error: Boolean, onScroll: [Function, Array] }, setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = Tt(lm, ot);
  if (a === ot) return console.error("QStep needs to be a child of QStepper"), ot;
  const { getCache: r } = Pr(), o = U(null), i = f(() => a.value.modelValue === e.name), u = f(() => l.platform.is.ios !== true && l.platform.is.chrome === true || i.value !== true || a.value.vertical !== true ? {} : { onScroll(v) {
    const { target: h } = v;
    h.scrollTop > 0 && (h.scrollTop = 0), e.onScroll !== void 0 && n("scroll", v);
  } }), c = f(() => typeof e.name == "string" || typeof e.name == "number" ? e.name : String(e.name));
  function s() {
    const v = a.value.vertical;
    return v === true && a.value.keepAlive === true ? d(fv, a.value.keepAliveProps.value, i.value === true ? [d(a.value.needsUniqueKeepAliveWrapper.value === true ? r(c.value, () => ({ ...Id, name: c.value })) : Id, { key: c.value }, t.default)] : void 0) : v !== true || i.value === true ? Ih(t) : void 0;
  }
  return () => d("div", { ref: o, class: "q-stepper__step", role: "tabpanel", ...u.value }, a.value.vertical === true ? [d(Vh, { stepper: a.value, step: e, goToPanel: a.value.goToPanel }), a.value.animated === true ? d(Ds, s) : s()] : [s()]);
} });
var v_ = /(-\w)/g;
function m_(e) {
  const t = {};
  for (const n in e) {
    const l = n.replace(v_, (a) => a[1].toUpperCase());
    t[l] = e[n];
  }
  return t;
}
ve({ name: "QStepper", props: { ...nt, ...As, flat: Boolean, bordered: Boolean, alternativeLabels: Boolean, headerNav: Boolean, contracted: Boolean, headerClass: String, inactiveColor: String, inactiveIcon: String, doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String }, emits: Rs, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), { updatePanelsList: a, isValidPanelName: r, updatePanelIndex: o, getPanelContent: i, getPanels: u, panelDirectives: c, goToPanel: s, keepAliveProps: v, needsUniqueKeepAliveWrapper: h } = Ps();
  hn(lm, f(() => ({ goToPanel: s, keepAliveProps: v, needsUniqueKeepAliveWrapper: h, ...e })));
  const m = f(() => `q-stepper q-stepper--${e.vertical === true ? "vertical" : "horizontal"}` + (e.flat === true ? " q-stepper--flat" : "") + (e.bordered === true ? " q-stepper--bordered" : "") + (l.value === true ? " q-stepper--dark q-dark" : "")), g = f(() => `q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels === true ? "alternative" : "standard"}-labels` + (e.flat === false || e.bordered === true ? " q-stepper__header--border" : "") + (e.contracted === true ? " q-stepper__header--contracted" : "") + (e.headerClass !== void 0 ? ` ${e.headerClass}` : ""));
  function w() {
    const S = Pe(t.message, []);
    if (e.vertical === true) {
      r(e.modelValue) && o();
      const q = d("div", { class: "q-stepper__content" }, Pe(t.default));
      return S === void 0 ? [q] : S.concat(q);
    }
    return [d("div", { class: g.value }, u().map((q) => {
      const p = m_(q.props);
      return d(Vh, { key: p.name, stepper: e, step: p, goToPanel: s });
    })), S, pn("div", { class: "q-stepper__content q-panel-parent" }, i(), "cont", e.swipeable, () => c.value)];
  }
  return () => (a(t), d("div", { class: m.value }, qt(t.navigation, w())));
} });
ve({ name: "QStepperNavigation", setup(e, { slots: t }) {
  return () => d("div", { class: "q-stepper__nav" }, Pe(t.default));
} });
var h_ = ve({ name: "QTh", props: { props: Object, autoWidth: Boolean }, emits: ["click"], setup(e, { slots: t, emit: n }) {
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
function zh(e, t) {
  return d("div", e, [d("table", { class: "q-table" }, t)]);
}
var g_ = { list: $h, table: T1 }, b_ = ["list", "table", "__qtable"], y_ = ve({ name: "QVirtualScroll", props: { ...Hu, type: { type: String, default: "list", validator: (e) => b_.includes(e) }, items: { type: Array, default: () => [] }, itemsFn: Function, itemsSize: Number, scrollTarget: Gl }, setup(e, { slots: t, attrs: n }) {
  let l;
  const a = U(null), r = f(() => e.itemsSize >= 0 && e.itemsFn !== void 0 ? parseInt(e.itemsSize, 10) : Array.isArray(e.items) ? e.items.length : 0), { virtualScrollSliceRange: o, localResetVirtualScroll: i, padVirtualScroll: u, onVirtualScrollEvt: c } = Oh({ virtualScrollLength: r, getVirtualScrollTarget: g, getVirtualScrollEl: m }), s = f(() => {
    if (r.value === 0) return [];
    const p = (y, b) => ({ index: o.value.from + b, item: y });
    return e.itemsFn === void 0 ? e.items.slice(o.value.from, o.value.to).map(p) : e.itemsFn(o.value.from, o.value.to - o.value.from).map(p);
  }), v = f(() => "q-virtual-scroll q-virtual-scroll" + (e.virtualScrollHorizontal === true ? "--horizontal" : "--vertical") + (e.scrollTarget !== void 0 ? "" : " scroll")), h = f(() => e.scrollTarget !== void 0 ? {} : { tabindex: 0 });
  he(r, () => {
    i();
  }), he(() => e.scrollTarget, () => {
    S(), w();
  });
  function m() {
    return a.value.$el || a.value;
  }
  function g() {
    return l;
  }
  function w() {
    l = Vn(m(), e.scrollTarget), l.addEventListener("scroll", c, dt.passive);
  }
  function S() {
    l !== void 0 && (l.removeEventListener("scroll", c, dt.passive), l = void 0);
  }
  function q() {
    let p = u(e.type === "list" ? "div" : "tbody", s.value.map(t.default));
    return t.before !== void 0 && (p = t.before().concat(p)), qt(t.after, p);
  }
  return Yo(() => {
    i();
  }), ft(() => {
    w();
  }), wl(() => {
    w();
  }), On(() => {
    S();
  }), Ke(() => {
    S();
  }), () => {
    if (t.default === void 0) {
      console.error("QVirtualScroll: default scoped slot is required for rendering");
      return;
    }
    return e.type === "__qtable" ? zh({ ref: a, class: "q-table__middle " + v.value }, q()) : d(g_[e.type], { ...n, ref: a, class: [n.class, v.value], ...h.value }, q);
  };
} });
function p_(e, t) {
  return new Date(e) - new Date(t);
}
var __ = { sortMethod: Function, binaryStateSort: Boolean, columnSortOrder: { type: String, validator: (e) => e === "ad" || e === "da", default: "ad" } };
function w_(e, t, n, l) {
  const a = f(() => {
    const { sortBy: i } = t.value;
    return i && n.value.find((u) => u.name === i) || null;
  }), r = f(() => e.sortMethod !== void 0 ? e.sortMethod : (i, u, c) => {
    const s = n.value.find((m) => m.name === u);
    if (s === void 0 || s.field === void 0) return i;
    const v = c === true ? -1 : 1, h = typeof s.field == "function" ? (m) => s.field(m) : (m) => m[s.field];
    return i.sort((m, g) => {
      let w = h(m), S = h(g);
      return s.rawSort !== void 0 ? s.rawSort(w, S, m, g) * v : w == null ? -1 * v : S == null ? 1 * v : s.sort !== void 0 ? s.sort(w, S, m, g) * v : pr(w) === true && pr(S) === true ? (w - S) * v : Mu(w) === true && Mu(S) === true ? p_(w, S) * v : typeof w == "boolean" && typeof S == "boolean" ? (w - S) * v : ([w, S] = [w, S].map((q) => (q + "").toLocaleString().toLowerCase()), w < S ? -1 * v : w === S ? 0 : v);
    });
  });
  function o(i) {
    let u = e.columnSortOrder;
    if (Rt(i) === true) i.sortOrder && (u = i.sortOrder), i = i.name;
    else {
      const v = n.value.find((h) => h.name === i);
      (v == null ? void 0 : v.sortOrder) && (u = v.sortOrder);
    }
    let { sortBy: c, descending: s } = t.value;
    c !== i ? (c = i, s = u === "da") : e.binaryStateSort === true ? s = !s : s === true ? u === "ad" ? c = null : s = false : u === "ad" ? s = true : c = null, l({ sortBy: c, descending: s, page: 1 });
  }
  return { columnToSort: a, computedSortMethod: r, sort: o };
}
var S_ = { filter: [String, Object], filterMethod: Function };
function x_(e, t) {
  const n = f(() => e.filterMethod !== void 0 ? e.filterMethod : (l, a, r, o) => {
    const i = a ? a.toLowerCase() : "";
    return l.filter((u) => r.some((c) => {
      const s = o(c, u) + "";
      return (s === "undefined" || s === "null" ? "" : s.toLowerCase()).indexOf(i) !== -1;
    }));
  });
  return he(() => e.filter, () => {
    Ge(() => {
      t({ page: 1 }, true);
    });
  }, { deep: true }), { computedFilterMethod: n };
}
function C_(e, t) {
  for (const n in t) if (t[n] !== e[n]) return false;
  return true;
}
function zd(e) {
  return e.page < 1 && (e.page = 1), e.rowsPerPage !== void 0 && e.rowsPerPage < 1 && (e.rowsPerPage = 0), e;
}
var k_ = { pagination: Object, rowsPerPageOptions: { type: Array, default: () => [5, 7, 10, 15, 20, 25, 50, 0] }, "onUpdate:pagination": [Function, Array] };
function q_(e, t) {
  const { props: n, emit: l } = e, a = U(Object.assign({ sortBy: null, descending: false, page: 1, rowsPerPage: n.rowsPerPageOptions.length !== 0 ? n.rowsPerPageOptions[0] : 5 }, n.pagination)), r = f(() => {
    const s = n["onUpdate:pagination"] !== void 0 ? { ...a.value, ...n.pagination } : a.value;
    return zd(s);
  }), o = f(() => r.value.rowsNumber !== void 0);
  function i(s) {
    u({ pagination: s, filter: n.filter });
  }
  function u(s = {}) {
    Ge(() => {
      l("request", { pagination: s.pagination || r.value, filter: s.filter || n.filter, getCellValue: t });
    });
  }
  function c(s, v) {
    const h = zd({ ...r.value, ...s });
    if (C_(r.value, h) === true) {
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
function T_(e, t, n, l, a, r) {
  const { props: o, emit: i, proxy: { $q: u } } = e, c = f(() => l.value === true ? n.value.rowsNumber || 0 : r.value), s = f(() => {
    const { page: b, rowsPerPage: _ } = n.value;
    return (b - 1) * _;
  }), v = f(() => {
    const { page: b, rowsPerPage: _ } = n.value;
    return b * _;
  }), h = f(() => n.value.page === 1), m = f(() => n.value.rowsPerPage === 0 ? 1 : Math.max(1, Math.ceil(c.value / n.value.rowsPerPage))), g = f(() => v.value === 0 ? true : n.value.page >= m.value), w = f(() => (o.rowsPerPageOptions.includes(t.value.rowsPerPage) ? o.rowsPerPageOptions : [t.value.rowsPerPage].concat(o.rowsPerPageOptions)).map((_) => ({ label: _ === 0 ? u.lang.table.allRows : "" + _, value: _ })));
  he(m, (b, _) => {
    if (b === _) return;
    const E = n.value.page;
    b && !E ? a({ page: 1 }) : b < E && a({ page: b });
  });
  function S() {
    a({ page: 1 });
  }
  function q() {
    const { page: b } = n.value;
    b > 1 && a({ page: b - 1 });
  }
  function p() {
    const { page: b, rowsPerPage: _ } = n.value;
    v.value > 0 && b * _ < c.value && a({ page: b + 1 });
  }
  function y() {
    a({ page: m.value });
  }
  return o["onUpdate:pagination"] !== void 0 && i("update:pagination", { ...n.value }), { firstRowIndex: s, lastRowIndex: v, isFirstPage: h, isLastPage: g, pagesNumber: m, computedRowsPerPageOptions: w, computedRowsNumber: c, firstPage: S, prevPage: q, nextPage: p, lastPage: y };
}
var M_ = { selection: { type: String, default: "none", validator: (e) => ["single", "multiple", "none"].includes(e) }, selected: { type: Array, default: () => [] } }, E_ = ["update:selected", "selection"];
function $_(e, t, n, l) {
  const a = f(() => {
    const g = {};
    return e.selected.map(l.value).forEach((w) => {
      g[w] = true;
    }), g;
  }), r = f(() => e.selection !== "none"), o = f(() => e.selection === "single"), i = f(() => e.selection === "multiple"), u = f(() => n.value.length !== 0 && n.value.every((g) => a.value[l.value(g)] === true)), c = f(() => u.value !== true && n.value.some((g) => a.value[l.value(g)] === true)), s = f(() => e.selected.length);
  function v(g) {
    return a.value[g] === true;
  }
  function h() {
    t("update:selected", []);
  }
  function m(g, w, S, q) {
    t("selection", { rows: w, added: S, keys: g, evt: q });
    const p = o.value === true ? S === true ? w : [] : S === true ? e.selected.concat(w) : e.selected.filter((y) => g.includes(l.value(y)) === false);
    t("update:selected", p);
  }
  return { hasSelectionMode: r, singleSelection: o, multipleSelection: i, allRowsSelected: u, someRowsSelected: c, rowsSelectedNumber: s, isRowSelected: v, clearSelection: h, updateSelection: m };
}
function Dd(e) {
  return Array.isArray(e) ? e.slice() : [];
}
var A_ = { expanded: Array }, R_ = ["update:expanded"];
function P_(e, t) {
  const n = U(Dd(e.expanded));
  he(() => e.expanded, (o) => {
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
var L_ = { visibleColumns: Array };
function B_(e, t, n) {
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
var Xr = "q-table__bottom row items-center", Dh = {};
Fh.forEach((e) => {
  Dh[e] = {};
});
ve({ name: "QTable", props: { rows: { type: Array, required: true }, rowKey: { type: [String, Function], default: "id" }, columns: Array, loading: Boolean, iconFirstPage: String, iconPrevPage: String, iconNextPage: String, iconLastPage: String, title: String, hideHeader: Boolean, grid: Boolean, gridHeader: Boolean, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, separator: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical", "cell", "none"].includes(e) }, wrapCells: Boolean, virtualScroll: Boolean, virtualScrollTarget: {}, ...Dh, noDataLabel: String, noResultsLabel: String, loadingLabel: String, selectedRowsLabel: Function, rowsPerPageLabel: String, paginationLabel: Function, color: { type: String, default: "grey-8" }, titleClass: [String, Array, Object], tableStyle: [String, Array, Object], tableClass: [String, Array, Object], tableHeaderStyle: [String, Array, Object], tableHeaderClass: [String, Array, Object], tableRowStyleFn: Function, tableRowClassFn: Function, cardContainerClass: [String, Array, Object], cardContainerStyle: [String, Array, Object], cardStyle: [String, Array, Object], cardClass: [String, Array, Object], cardStyleFn: Function, cardClassFn: Function, hideBottom: Boolean, hideSelectedBanner: Boolean, hideNoData: Boolean, hidePagination: Boolean, onRowClick: Function, onRowDblclick: Function, onRowContextmenu: Function, ...nt, ...Ls, ...L_, ...S_, ...k_, ...A_, ...M_, ...__ }, emits: ["request", "virtualScroll", ...Bs, ...R_, ...E_], setup(e, { slots: t, emit: n }) {
  const l = Se(), { proxy: { $q: a } } = l, r = lt(e, a), { inFullscreen: o, toggleFullscreen: i } = Fs(), u = f(() => typeof e.rowKey == "function" ? e.rowKey : (ue) => ue[e.rowKey]), c = U(null), s = U(null), v = f(() => e.grid !== true && e.virtualScroll === true), h = f(() => " q-table__card" + (r.value === true ? " q-table__card--dark q-dark" : "") + (e.square === true ? " q-table--square" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "")), m = f(() => `q-table__container q-table--${e.separator}-separator column no-wrap` + (e.grid === true ? " q-table--grid" : h.value) + (r.value === true ? " q-table--dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.wrapCells === false ? " q-table--no-wrap" : "") + (o.value === true ? " fullscreen scroll" : "")), g = f(() => m.value + (e.loading === true ? " q-table--loading" : ""));
  he(() => e.tableStyle + e.tableClass + e.tableHeaderStyle + e.tableHeaderClass + m.value, () => {
    var _a2;
    v.value === true && ((_a2 = s.value) == null ? void 0 : _a2.reset());
  });
  const { innerPagination: w, computedPagination: S, isServerSide: q, requestServerInteraction: p, setPagination: y } = q_(l, ie), { computedFilterMethod: b } = x_(e, y), { isRowExpanded: _, setExpanded: E, updateExpanded: A } = P_(e, n), V = f(() => {
    let ue = e.rows;
    if (q.value === true || ue.length === 0) return ue;
    const { sortBy: xe, descending: Fe } = S.value;
    return e.filter && (ue = b.value(ue, e.filter, Q.value, ie)), X.value !== null && (ue = be.value(e.rows === ue ? ue.slice() : ue, xe, Fe)), ue;
  }), L = f(() => V.value.length), P = f(() => {
    let ue = V.value;
    if (q.value === true) return ue;
    const { rowsPerPage: xe } = S.value;
    return xe !== 0 && (R.value === 0 && e.rows !== ue ? ue.length > J.value && (ue = ue.slice(0, J.value)) : ue = ue.slice(R.value, J.value)), ue;
  }), { hasSelectionMode: F, singleSelection: T, multipleSelection: x, allRowsSelected: C, someRowsSelected: D, rowsSelectedNumber: H, isRowSelected: j, clearSelection: W, updateSelection: te } = $_(e, n, P, u), { colList: pe, computedCols: Q, computedColsMap: M, computedColspan: ee } = B_(e, S, F), { columnToSort: X, computedSortMethod: be, sort: B } = w_(e, S, pe, y), { firstRowIndex: R, lastRowIndex: J, isFirstPage: O, isLastPage: re, pagesNumber: we, computedRowsPerPageOptions: k, computedRowsNumber: $, firstPage: z, prevPage: Z, nextPage: ne, lastPage: K } = T_(l, w, S, q, y, L), de = f(() => P.value.length === 0), me = f(() => {
    const ue = {};
    return Fh.forEach((xe) => {
      ue[xe] = e[xe];
    }), ue.virtualScrollItemSize === void 0 && (ue.virtualScrollItemSize = e.dense === true ? 28 : 48), ue;
  });
  function fe() {
    v.value === true && s.value.reset();
  }
  function ce() {
    if (e.grid === true) return In();
    const ue = e.hideHeader !== true ? Ce : null;
    if (v.value === true) {
      const Fe = t["top-row"], Be = t["bottom-row"], Ue = { default: (yt) => _e(yt.item, t.body, yt.index) };
      if (Fe !== void 0) {
        const yt = d("tbody", Fe({ cols: Q.value }));
        Ue.before = ue === null ? () => yt : () => [ue()].concat(yt);
      } else ue !== null && (Ue.before = ue);
      return Be !== void 0 && (Ue.after = () => d("tbody", Be({ cols: Q.value }))), d(y_, { ref: s, class: e.tableClass, style: e.tableStyle, ...me.value, scrollTarget: e.virtualScrollTarget, items: P.value, type: "__qtable", tableColspan: ee.value, onVirtualScroll: N }, Ue);
    }
    const xe = [ke()];
    return ue !== null && xe.unshift(ue()), zh({ class: ["q-table__middle scroll", e.tableClass], style: e.tableStyle }, xe);
  }
  function le(ue, xe) {
    if (s.value !== null) {
      s.value.scrollTo(ue, xe);
      return;
    }
    ue = parseInt(ue, 10);
    const Fe = c.value.querySelector(`tbody tr:nth-of-type(${ue + 1})`);
    if (Fe !== null) {
      const Be = c.value.querySelector(".q-table__middle.scroll"), Ue = Fe.offsetTop - e.virtualScrollStickySizeStart, yt = Ue < Be.scrollTop ? "decrease" : "increase";
      Be.scrollTop = Ue, n("virtualScroll", { index: ue, from: 0, to: w.value.rowsPerPage - 1, direction: yt });
    }
  }
  function N(ue) {
    n("virtualScroll", ue);
  }
  function oe() {
    return [d(B1, { class: "q-table__linear-progress", color: e.color, dark: r.value, indeterminate: true, trackColor: "transparent" })];
  }
  function _e(ue, xe, Fe) {
    const Be = u.value(ue), Ue = j(Be);
    if (xe !== void 0) {
      const Y = { key: Be, row: ue, pageIndex: Fe, __trClass: Ue ? "selected" : "" };
      if (e.tableRowStyleFn !== void 0 && (Y.__trStyle = e.tableRowStyleFn(ue)), e.tableRowClassFn !== void 0) {
        const se = e.tableRowClassFn(ue);
        se && (Y.__trClass = `${se} ${Y.__trClass}`);
      }
      return xe(qe(Y));
    }
    const yt = t["body-cell"], ht = Q.value.map((Y) => {
      const se = t[`body-cell-${Y.name}`], Te = se !== void 0 ? se : yt;
      return Te !== void 0 ? Te(Me({ key: Be, row: ue, pageIndex: Fe, col: Y })) : d("td", { class: Y.__tdClass(ue), style: Y.__tdStyle(ue) }, ie(Y, ue));
    });
    if (F.value === true) {
      const Y = t["body-selection"], se = Y !== void 0 ? Y(He({ key: Be, row: ue, pageIndex: Fe })) : [d(ir, { modelValue: Ue, color: e.color, dark: r.value, dense: e.dense, "onUpdate:modelValue": (Te, Ee) => {
        te([Be], [ue], Te, Ee);
      } })];
      ht.unshift(d("td", { class: "q-table--col-auto-width" }, se));
    }
    const I = { key: Be, class: { selected: Ue } };
    if (e.onRowClick !== void 0 && (I.class["cursor-pointer"] = true, I.onClick = (Y) => {
      n("rowClick", Y, ue, Fe);
    }), e.onRowDblclick !== void 0 && (I.class["cursor-pointer"] = true, I.onDblclick = (Y) => {
      n("rowDblclick", Y, ue, Fe);
    }), e.onRowContextmenu !== void 0 && (I.class["cursor-pointer"] = true, I.onContextmenu = (Y) => {
      n("rowContextmenu", Y, ue, Fe);
    }), e.tableRowStyleFn !== void 0 && (I.style = e.tableRowStyleFn(ue)), e.tableRowClassFn !== void 0) {
      const Y = e.tableRowClassFn(ue);
      Y && (I.class[Y] = true);
    }
    return d("tr", I, ht);
  }
  function ke() {
    const ue = t.body, xe = t["top-row"], Fe = t["bottom-row"];
    let Be = P.value.map((Ue, yt) => _e(Ue, ue, yt));
    return xe !== void 0 && (Be = xe({ cols: Q.value }).concat(Be)), Fe !== void 0 && (Be = Be.concat(Fe({ cols: Q.value }))), d("tbody", Be);
  }
  function qe(ue) {
    return Ve(ue), ue.cols = ue.cols.map((xe) => Ot({ ...xe }, "value", () => ie(xe, ue.row))), ue;
  }
  function Me(ue) {
    return Ve(ue), Ot(ue, "value", () => ie(ue.col, ue.row)), ue;
  }
  function He(ue) {
    return Ve(ue), ue;
  }
  function Ve(ue) {
    Object.assign(ue, { cols: Q.value, colsMap: M.value, sort: B, rowIndex: R.value + ue.pageIndex, color: e.color, dark: r.value, dense: e.dense }), F.value === true && Ot(ue, "selected", () => j(ue.key), (xe, Fe) => {
      te([ue.key], [ue.row], xe, Fe);
    }), Ot(ue, "expand", () => _(ue.key), (xe) => {
      A(ue.key, xe);
    });
  }
  function ie(ue, xe) {
    const Fe = typeof ue.field == "function" ? ue.field(xe) : xe[ue.field];
    return ue.format !== void 0 ? ue.format(Fe, xe) : Fe;
  }
  const ge = f(() => ({ pagination: S.value, pagesNumber: we.value, isFirstPage: O.value, isLastPage: re.value, firstPage: z, prevPage: Z, nextPage: ne, lastPage: K, inFullscreen: o.value, toggleFullscreen: i }));
  function ae() {
    const ue = t.top, xe = t["top-left"], Fe = t["top-right"], Be = t["top-selection"], Ue = F.value === true && Be !== void 0 && H.value > 0, yt = "q-table__top relative-position row items-center";
    if (ue !== void 0) return d("div", { class: yt }, [ue(ge.value)]);
    let ht;
    if (Ue === true ? ht = Be(ge.value).slice() : (ht = [], xe !== void 0 ? ht.push(d("div", { class: "q-table__control" }, [xe(ge.value)])) : e.title && ht.push(d("div", { class: "q-table__control" }, [d("div", { class: ["q-table__title", e.titleClass] }, e.title)]))), Fe !== void 0 && (ht.push(d("div", { class: "q-table__separator col" })), ht.push(d("div", { class: "q-table__control" }, [Fe(ge.value)]))), ht.length !== 0) return d("div", { class: yt }, ht);
  }
  const ye = f(() => D.value === true ? null : C.value);
  function Ce() {
    const ue = Oe();
    return e.loading === true && t.loading === void 0 && ue.push(d("tr", { class: "q-table__progress" }, [d("th", { class: "relative-position", colspan: ee.value }, oe())])), d("thead", ue);
  }
  function Oe() {
    const ue = t.header, xe = t["header-cell"];
    if (ue !== void 0) return ue($e({ header: true })).slice();
    const Fe = Q.value.map((Be) => {
      const Ue = t[`header-cell-${Be.name}`], yt = Ue !== void 0 ? Ue : xe, ht = $e({ col: Be });
      return yt !== void 0 ? yt(ht) : d(h_, { key: Be.name, props: ht }, () => Be.label);
    });
    if (T.value === true && e.grid !== true) Fe.unshift(d("th", { class: "q-table--col-auto-width" }, " "));
    else if (x.value === true) {
      const Be = t["header-selection"], Ue = Be !== void 0 ? Be($e({})) : [d(ir, { color: e.color, modelValue: ye.value, dark: r.value, dense: e.dense, "onUpdate:modelValue": We })];
      Fe.unshift(d("th", { class: "q-table--col-auto-width" }, Ue));
    }
    return [d("tr", { class: e.tableHeaderClass, style: e.tableHeaderStyle }, Fe)];
  }
  function $e(ue) {
    return Object.assign(ue, { cols: Q.value, sort: B, colsMap: M.value, color: e.color, dark: r.value, dense: e.dense }), x.value === true && Ot(ue, "selected", () => ye.value, We), ue;
  }
  function We(ue) {
    D.value === true && (ue = false), te(P.value.map(u.value), P.value, ue);
  }
  const it = f(() => {
    const ue = [e.iconFirstPage || a.iconSet.table.firstPage, e.iconPrevPage || a.iconSet.table.prevPage, e.iconNextPage || a.iconSet.table.nextPage, e.iconLastPage || a.iconSet.table.lastPage];
    return a.lang.rtl === true ? ue.reverse() : ue;
  });
  function Ct() {
    if (e.hideBottom === true) return;
    if (de.value === true) {
      if (e.hideNoData === true) return;
      const Fe = e.loading === true ? e.loadingLabel || a.lang.table.loading : e.filter ? e.noResultsLabel || a.lang.table.noResults : e.noDataLabel || a.lang.table.noData, Be = t["no-data"], Ue = Be !== void 0 ? [Be({ message: Fe, icon: a.iconSet.table.warning, filter: e.filter })] : [d(et, { class: "q-table__bottom-nodata-icon", name: a.iconSet.table.warning }), Fe];
      return d("div", { class: Xr + " q-table__bottom--nodata" }, Ue);
    }
    const ue = t.bottom;
    if (ue !== void 0) return d("div", { class: Xr }, [ue(ge.value)]);
    const xe = e.hideSelectedBanner !== true && F.value === true && H.value > 0 ? [d("div", { class: "q-table__control" }, [d("div", [(e.selectedRowsLabel || a.lang.table.selectedRecords)(H.value)])])] : [];
    if (e.hidePagination !== true) return d("div", { class: Xr + " justify-end" }, tl(xe));
    if (xe.length !== 0) return d("div", { class: Xr }, xe);
  }
  function jt(ue) {
    y({ page: 1, rowsPerPage: ue.value });
  }
  function tl(ue) {
    let xe;
    const { rowsPerPage: Fe } = S.value, Be = e.paginationLabel || a.lang.table.pagination, Ue = t.pagination, yt = e.rowsPerPageOptions.length > 1;
    if (ue.push(d("div", { class: "q-table__separator col" })), yt === true && ue.push(d("div", { class: "q-table__control" }, [d("span", { class: "q-table__bottom-item" }, [e.rowsPerPageLabel || a.lang.table.recordsPerPage]), d(N1, { class: "q-table__select inline q-table__bottom-item", color: e.color, modelValue: Fe, options: k.value, displayValue: Fe === 0 ? a.lang.table.allRows : Fe, dark: r.value, borderless: true, dense: true, optionsDense: true, optionsCover: true, "onUpdate:modelValue": jt })])), Ue !== void 0) xe = Ue(ge.value);
    else if (xe = [d("span", Fe !== 0 ? { class: "q-table__bottom-item" } : {}, [Fe ? Be(R.value + 1, Math.min(J.value, $.value), $.value) : Be(1, L.value, $.value)])], Fe !== 0 && we.value > 1) {
      const ht = { color: e.color, round: true, dense: true, flat: true };
      e.dense === true && (ht.size = "sm"), we.value > 2 && xe.push(d(Ze, { key: "pgFirst", ...ht, icon: it.value[0], disable: O.value, ariaLabel: a.lang.pagination.first, onClick: z })), xe.push(d(Ze, { key: "pgPrev", ...ht, icon: it.value[1], disable: O.value, ariaLabel: a.lang.pagination.prev, onClick: Z }), d(Ze, { key: "pgNext", ...ht, icon: it.value[2], disable: re.value, ariaLabel: a.lang.pagination.next, onClick: ne })), we.value > 2 && xe.push(d(Ze, { key: "pgLast", ...ht, icon: it.value[3], disable: re.value, ariaLabel: a.lang.pagination.last, onClick: K }));
    }
    return ue.push(d("div", { class: "q-table__control" }, xe)), ue;
  }
  function ln() {
    const ue = e.gridHeader === true ? [d("table", { class: "q-table" }, [Ce()])] : e.loading === true && t.loading === void 0 ? oe() : void 0;
    return d("div", { class: "q-table__middle" }, ue);
  }
  function In() {
    const ue = t.item !== void 0 ? t.item : (xe) => {
      const Fe = xe.cols.map((Ue) => d("div", { class: "q-table__grid-item-row" }, [d("div", { class: "q-table__grid-item-title" }, [Ue.label]), d("div", { class: "q-table__grid-item-value" }, [Ue.value])]));
      if (F.value === true) {
        const Ue = t["body-selection"], yt = Ue !== void 0 ? Ue(xe) : [d(ir, { modelValue: xe.selected, color: e.color, dark: r.value, dense: e.dense, "onUpdate:modelValue": (ht, I) => {
          te([xe.key], [xe.row], ht, I);
        } })];
        Fe.unshift(d("div", { class: "q-table__grid-item-row" }, yt), d(Ul, { dark: r.value }));
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
    return d("div", { class: ["q-table__grid-content row", e.cardContainerClass], style: e.cardContainerStyle }, P.value.map((xe, Fe) => ue(qe({ key: u.value(xe), row: xe, pageIndex: Fe }))));
  }
  return Object.assign(l.proxy, { requestServerInteraction: p, setPagination: y, firstPage: z, prevPage: Z, nextPage: ne, lastPage: K, isRowSelected: j, clearSelection: W, isRowExpanded: _, setExpanded: E, sort: B, resetVirtualScroll: fe, scrollTo: le, getCellValue: ie }), Kv(l.proxy, { filteredSortedRows: () => V.value, computedRows: () => P.value, computedRowsNumber: () => $.value }), () => {
    const ue = [ae()], xe = { ref: c, class: g.value };
    return e.grid === true ? ue.push(ln()) : Object.assign(xe, { class: [xe.class, e.cardClass], style: e.cardStyle }), ue.push(ce(), Ct()), e.loading === true && t.loading !== void 0 && ue.push(t.loading()), d("div", xe, ue);
  };
} });
ve({ name: "QTr", props: { props: Object, noHover: Boolean }, setup(e, { slots: t }) {
  const n = f(() => "q-tr" + (e.props === void 0 || e.props.header === true ? "" : " " + e.props.__trClass) + (e.noHover === true ? " q-tr--no-hover" : ""));
  return () => {
    var _a2;
    return d("tr", { style: (_a2 = e.props) == null ? void 0 : _a2.__trStyle, class: n.value }, Pe(t.default));
  };
} });
ve({ name: "QTd", props: { props: Object, autoWidth: Boolean, noHover: Boolean }, setup(e, { slots: t }) {
  const n = Se(), l = f(() => "q-td" + (e.autoWidth === true ? " q-table--col-auto-width" : "") + (e.noHover === true ? " q-td--no-hover" : "") + " ");
  return () => {
    if (e.props === void 0) return d("td", { class: l.value }, Pe(t.default));
    const a = n.vnode.key, r = (e.props.colsMap !== void 0 ? e.props.colsMap[a] : null) || e.props.col;
    if (r === void 0) return;
    const { row: o } = e.props;
    return d("td", { class: l.value + r.__tdClass(o), style: r.__tdStyle(o) }, Pe(t.default));
  };
} });
var lu = ve({ name: "QRouteTab", props: { ...$r, ...Zm }, emits: Xm, setup(e, { slots: t, emit: n }) {
  const l = ai({ useDisableForRouterLinkProps: false }), { renderTab: a, $tabs: r } = Jm(e, t, n, { exact: f(() => e.exact), ...l });
  return he(() => `${e.name} | ${e.exact} | ${(l.resolvedLink.value || {}).href}`, r.verifyRouteModel), () => a(l.linkTag.value, l.linkAttrs.value);
} });
function F_(e, t) {
  return e.hour !== null && e.minute === null ? "minute" : "hour";
}
function O_() {
  const e = /* @__PURE__ */ new Date();
  return { hour: e.getHours(), minute: e.getMinutes(), second: e.getSeconds(), millisecond: e.getMilliseconds() };
}
ve({ name: "QTime", props: { ...nt, ...wn, ...Oo, modelValue: { required: true, validator: (e) => typeof e == "string" || e === null }, mask: { ...Oo.mask, default: null }, format24h: { type: Boolean, default: null }, defaultDate: { type: String, validator: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e) }, options: Function, hourOptions: Array, minuteOptions: Array, secondOptions: Array, withSeconds: Boolean, nowBtn: Boolean }, emits: ah, setup(e, { slots: t, emit: n }) {
  const l = Se(), { $q: a } = l.proxy, r = lt(e, a), { tabindex: o, headerClass: i, getLocale: u, getCurrentDate: c } = rh(e, a), s = Rr(e), v = xl(s);
  let h, m;
  const g = U(null), w = f(() => be()), S = f(() => u()), q = f(() => B()), p = Ka(e.modelValue, w.value, S.value, e.calendar, q.value), y = U(F_(p)), b = U(p), _ = U(p.hour === null || p.hour < 12), E = f(() => `q-time q-time--${e.landscape === true ? "landscape" : "portrait"}` + (r.value === true ? " q-time--dark q-dark" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-time--readonly" : "") + (e.bordered === true ? " q-time--bordered" : "") + (e.square === true ? " q-time--square no-border-radius" : "") + (e.flat === true ? " q-time--flat no-shadow" : "")), A = f(() => {
    const ie = b.value;
    return { hour: ie.hour === null ? "--" : V.value === true ? rt(ie.hour) : String(_.value === true ? ie.hour === 0 ? 12 : ie.hour : ie.hour > 12 ? ie.hour - 12 : ie.hour), minute: ie.minute === null ? "--" : rt(ie.minute), second: ie.second === null ? "--" : rt(ie.second) };
  }), V = f(() => e.format24h !== null ? e.format24h : a.lang.date.format24h), L = f(() => {
    const ie = y.value === "hour", ge = ie === true ? 12 : 60, ae = b.value[y.value];
    let Ce = `rotate(${Math.round(ae * (360 / ge)) - 180}deg) translateX(-50%)`;
    return ie === true && V.value === true && b.value.hour >= 12 && (Ce += " scale(.7)"), { transform: Ce };
  }), P = f(() => b.value.hour !== null), F = f(() => P.value === true && b.value.minute !== null), T = f(() => e.hourOptions !== void 0 ? (ie) => e.hourOptions.includes(ie) : e.options !== void 0 ? (ie) => e.options(ie, null, null) : null), x = f(() => e.minuteOptions !== void 0 ? (ie) => e.minuteOptions.includes(ie) : e.options !== void 0 ? (ie) => e.options(b.value.hour, ie, null) : null), C = f(() => e.secondOptions !== void 0 ? (ie) => e.secondOptions.includes(ie) : e.options !== void 0 ? (ie) => e.options(b.value.hour, b.value.minute, ie) : null), D = f(() => {
    if (T.value === null) return null;
    const ie = M(0, 11, T.value), ge = M(12, 11, T.value);
    return { am: ie, pm: ge, values: ie.values.concat(ge.values) };
  }), H = f(() => x.value !== null ? M(0, 59, x.value) : null), j = f(() => C.value !== null ? M(0, 59, C.value) : null), W = f(() => {
    switch (y.value) {
      case "hour":
        return D.value;
      case "minute":
        return H.value;
      case "second":
        return j.value;
    }
  }), te = f(() => {
    let ie, ge, ae = 0, ye = 1;
    const Ce = W.value !== null ? W.value.values : void 0;
    y.value === "hour" ? V.value === true ? (ie = 0, ge = 23) : (ie = 0, ge = 11, _.value === false && (ae = 12)) : (ie = 0, ge = 55, ye = 5);
    const Oe = [];
    for (let $e = ie, We = ie; $e <= ge; $e += ye, We++) {
      const it = $e + ae, Ct = (Ce == null ? void 0 : Ce.includes(it)) === false, jt = y.value === "hour" && $e === 0 ? V.value === true ? "00" : "12" : $e;
      Oe.push({ val: it, index: We, disable: Ct, label: jt });
    }
    return Oe;
  }), pe = f(() => [[gn, O, void 0, { stop: true, prevent: true, mouse: true }]]);
  he(() => e.modelValue, (ie) => {
    const ge = Ka(ie, w.value, S.value, e.calendar, q.value);
    (ge.dateHash !== b.value.dateHash || ge.timeHash !== b.value.timeHash) && (b.value = ge, ge.hour === null ? y.value = "hour" : _.value = ge.hour < 12);
  }), he([w, S], () => {
    Ge(() => {
      Me();
    });
  });
  function Q() {
    const ie = { ...c(), ...O_() };
    Me(ie), Object.assign(b.value, ie), y.value = "hour";
  }
  function M(ie, ge, ae) {
    const ye = Array.apply(null, { length: ge + 1 }).map((Ce, Oe) => {
      const $e = Oe + ie;
      return { index: $e, val: ae($e) === true };
    }).filter((Ce) => Ce.val === true).map((Ce) => Ce.index);
    return { min: ye[0], max: ye[ye.length - 1], values: ye, threshold: ge + 1 };
  }
  function ee(ie, ge, ae) {
    const ye = Math.abs(ie - ge);
    return Math.min(ye, ae - ye);
  }
  function X(ie, { min: ge, max: ae, values: ye, threshold: Ce }) {
    if (ie === ge) return ge;
    if (ie < ge || ie > ae) return ee(ie, ge, Ce) <= ee(ie, ae, Ce) ? ge : ae;
    const Oe = ye.findIndex((it) => ie <= it), $e = ye[Oe - 1], We = ye[Oe];
    return ie - $e <= We - ie ? $e : We;
  }
  function be() {
    return e.calendar !== "persian" && e.mask !== null ? e.mask : `HH:mm${e.withSeconds === true ? ":ss" : ""}`;
  }
  function B() {
    if (typeof e.defaultDate != "string") {
      const ie = c(true);
      return ie.dateHash = jn(ie), ie;
    }
    return Ka(e.defaultDate, "YYYY/MM/DD", void 0, e.calendar);
  }
  function R() {
    return hl(l) === true || W.value !== null && (W.value.values.length === 0 || y.value === "hour" && V.value !== true && D.value[_.value === true ? "am" : "pm"].values.length === 0);
  }
  function J() {
    const ie = g.value, { top: ge, left: ae, width: ye } = ie.getBoundingClientRect(), Ce = ye / 2;
    return { top: ge + Ce, left: ae + Ce, dist: Ce * 0.7 };
  }
  function O(ie) {
    if (R() !== true) {
      if (ie.isFirst === true) {
        h = J(), m = we(ie.evt, h);
        return;
      }
      m = we(ie.evt, h, m), ie.isFinal === true && (h = false, m = null, re());
    }
  }
  function re() {
    y.value === "hour" ? y.value = "minute" : e.withSeconds && y.value === "minute" && (y.value = "second");
  }
  function we(ie, ge, ae) {
    const ye = en(ie), Ce = Math.abs(ye.top - ge.top), Oe = Math.sqrt(Math.pow(Math.abs(ye.top - ge.top), 2) + Math.pow(Math.abs(ye.left - ge.left), 2));
    let $e, We = Math.asin(Ce / Oe) * (180 / Math.PI);
    if (ye.top < ge.top ? We = ge.left < ye.left ? 90 - We : 270 + We : We = ge.left < ye.left ? We + 90 : 270 - We, y.value === "hour") {
      if ($e = We / 30, D.value !== null) {
        const it = V.value !== true ? _.value === true : D.value.am.values.length !== 0 && D.value.pm.values.length !== 0 ? Oe >= ge.dist : D.value.am.values.length !== 0;
        $e = X($e + (it === true ? 0 : 12), D.value[it === true ? "am" : "pm"]);
      } else $e = Math.round($e), V.value === true ? Oe < ge.dist ? $e < 12 && ($e += 12) : $e === 12 && ($e = 0) : _.value === true && $e === 12 ? $e = 0 : _.value === false && $e !== 12 && ($e += 12);
      V.value === true && (_.value = $e < 12);
    } else $e = Math.round(We / 6) % 60, y.value === "minute" && H.value !== null ? $e = X($e, H.value) : y.value === "second" && j.value !== null && ($e = X($e, j.value));
    return ae !== $e && N[y.value]($e), $e;
  }
  const k = { hour() {
    y.value = "hour";
  }, minute() {
    y.value = "minute";
  }, second() {
    y.value = "second";
  } };
  function $(ie) {
    ie.keyCode === 13 && oe();
  }
  function z(ie) {
    ie.keyCode === 13 && _e();
  }
  function Z(ie) {
    R() !== true && (a.platform.is.desktop !== true && we(ie, J()), re());
  }
  function ne(ie) {
    R() !== true && we(ie, J());
  }
  function K(ie) {
    if (ie.keyCode === 13) y.value = "hour";
    else if ([37, 39].includes(ie.keyCode)) {
      const ge = ie.keyCode === 37 ? -1 : 1;
      if (D.value !== null) {
        const ae = V.value === true ? D.value.values : D.value[_.value === true ? "am" : "pm"].values;
        if (ae.length === 0) return;
        if (b.value.hour === null) fe(ae[0]);
        else {
          const ye = (ae.length + ae.indexOf(b.value.hour) + ge) % ae.length;
          fe(ae[ye]);
        }
      } else {
        const ae = V.value === true ? 24 : 12, ye = V.value !== true && _.value === false ? 12 : 0, Ce = b.value.hour === null ? -ge : b.value.hour;
        fe(ye + (24 + Ce + ge) % ae);
      }
    }
  }
  function de(ie) {
    if (ie.keyCode === 13) y.value = "minute";
    else if ([37, 39].includes(ie.keyCode)) {
      const ge = ie.keyCode === 37 ? -1 : 1;
      if (H.value !== null) {
        const ae = H.value.values;
        if (ae.length === 0) return;
        if (b.value.minute === null) ce(ae[0]);
        else {
          const ye = (ae.length + ae.indexOf(b.value.minute) + ge) % ae.length;
          ce(ae[ye]);
        }
      } else {
        const ae = b.value.minute === null ? -ge : b.value.minute;
        ce((60 + ae + ge) % 60);
      }
    }
  }
  function me(ie) {
    if (ie.keyCode === 13) y.value = "second";
    else if ([37, 39].includes(ie.keyCode)) {
      const ge = ie.keyCode === 37 ? -1 : 1;
      if (j.value !== null) {
        const ae = j.value.values;
        if (ae.length === 0) return;
        if (b.value.seconds === null) le(ae[0]);
        else {
          const ye = (ae.length + ae.indexOf(b.value.second) + ge) % ae.length;
          le(ae[ye]);
        }
      } else {
        const ae = b.value.second === null ? -ge : b.value.second;
        le((60 + ae + ge) % 60);
      }
    }
  }
  function fe(ie) {
    b.value.hour !== ie && (b.value.hour = ie, qe());
  }
  function ce(ie) {
    b.value.minute !== ie && (b.value.minute = ie, qe());
  }
  function le(ie) {
    b.value.second !== ie && (b.value.second = ie, qe());
  }
  const N = { hour: fe, minute: ce, second: le };
  function oe() {
    _.value === false && (_.value = true, b.value.hour !== null && (b.value.hour -= 12, qe()));
  }
  function _e() {
    _.value === true && (_.value = false, b.value.hour !== null && (b.value.hour += 12, qe()));
  }
  function ke(ie) {
    const ge = e.modelValue;
    y.value !== ie && ge !== void 0 && ge !== null && ge !== "" && typeof ge != "string" && (y.value = ie);
  }
  function qe() {
    if (T.value !== null && T.value(b.value.hour) !== true) {
      b.value = Ka(), ke("hour");
      return;
    }
    if (x.value !== null && x.value(b.value.minute) !== true) {
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
    const ge = Object.assign({ ...b.value }, ie), ae = e.calendar === "persian" ? rt(ge.hour) + ":" + rt(ge.minute) + (e.withSeconds === true ? ":" + rt(ge.second) : "") : ch(new Date(ge.year, ge.month === null ? null : ge.month - 1, ge.day, ge.hour, ge.minute, ge.second, ge.millisecond), w.value, S.value, ge.year, ge.timezoneOffset);
    ge.changed = ae !== e.modelValue, n("update:modelValue", ae, ge);
  }
  function He() {
    const ie = [d("div", { class: "q-time__link " + (y.value === "hour" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: k.hour, onKeyup: K }, A.value.hour), d("div", ":"), d("div", P.value === true ? { class: "q-time__link " + (y.value === "minute" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onKeyup: de, onClick: k.minute } : { class: "q-time__link" }, A.value.minute)];
    e.withSeconds === true && ie.push(d("div", ":"), d("div", F.value === true ? { class: "q-time__link " + (y.value === "second" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onKeyup: me, onClick: k.second } : { class: "q-time__link" }, A.value.second));
    const ge = [d("div", { class: "q-time__header-label row items-center no-wrap", dir: "ltr" }, ie)];
    return V.value === false && ge.push(d("div", { class: "q-time__header-ampm column items-between no-wrap" }, [d("div", { class: "q-time__link " + (_.value === true ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: oe, onKeyup: $ }, "AM"), d("div", { class: "q-time__link " + (_.value !== true ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: _e, onKeyup: z }, "PM")])), d("div", { class: "q-time__header flex flex-center no-wrap " + i.value }, ge);
  }
  function Ve() {
    const ie = b.value[y.value];
    return d("div", { class: "q-time__content col relative-position" }, [d(Ft, { name: "q-transition--scale" }, () => d("div", { key: "clock" + y.value, class: "q-time__container-parent absolute-full" }, [d("div", { ref: g, class: "q-time__container-child fit overflow-hidden" }, [sn(d("div", { class: "q-time__clock cursor-pointer non-selectable", onClick: Z, onMousedown: ne }, [d("div", { class: "q-time__clock-circle fit" }, [d("div", { class: "q-time__clock-pointer" + (b.value[y.value] === null ? " hidden" : e.color !== void 0 ? ` text-${e.color}` : ""), style: L.value }), te.value.map((ge) => d("div", { class: `q-time__clock-position row flex-center q-time__clock-pos-${ge.index}` + (ge.val === ie ? " q-time__clock-position--active " + i.value : ge.disable === true ? " q-time__clock-position--disable" : "") }, [d("span", ge.label)]))])]), pe.value)])])), e.nowBtn === true ? d(Ze, { class: "q-time__now-button absolute", icon: a.iconSet.datetime.now, unelevated: true, size: "sm", round: true, color: e.color, textColor: e.textColor, tabindex: o.value, onClick: Q }) : null]);
  }
  return l.proxy.setNow = Q, () => {
    const ie = [Ve()], ge = Pe(t.default);
    return ge !== void 0 && ie.push(d("div", { class: "q-time__actions" }, ge)), e.name !== void 0 && e.disable !== true && v(ie, "push"), d("div", { class: E.value, tabindex: -1 }, [He(), d("div", { class: "q-time__main col overflow-auto" }, ie)]);
  };
} });
ve({ name: "QTimeline", props: { ...nt, color: { type: String, default: "primary" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, layout: { type: String, default: "dense", validator: (e) => ["dense", "comfortable", "loose"].includes(e) } }, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q);
  hn(nm, e);
  const a = f(() => `q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}` + (l.value === true ? " q-timeline--dark" : ""));
  return () => d("ul", { class: a.value }, Pe(t.default));
} });
ve({ name: "QTimelineEntry", props: { heading: Boolean, tag: { type: String, default: "h3" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, icon: String, avatar: String, color: String, title: String, subtitle: String, body: String }, setup(e, { slots: t }) {
  const n = Tt(nm, ot);
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
var V_ = ve({ name: "QToolbar", props: { inset: Boolean }, setup(e, { slots: t }) {
  const n = f(() => "q-toolbar row no-wrap items-center" + (e.inset === true ? " q-toolbar--inset" : ""));
  return () => d("div", { class: n.value, role: "toolbar" }, Pe(t.default));
} }), I_ = ve({ name: "QToolbarTitle", props: { shrink: Boolean }, setup(e, { slots: t }) {
  const n = f(() => "q-toolbar__title ellipsis" + (e.shrink === true ? " col-shrink" : ""));
  return () => d("div", { class: n.value }, Pe(t.default));
} }), z_ = ["none", "strict", "leaf", "leaf-filtered"];
ve({ name: "QTree", props: { ...nt, nodes: { type: Array, required: true }, nodeKey: { type: String, required: true }, labelKey: { type: String, default: "label" }, childrenKey: { type: String, default: "children" }, dense: Boolean, color: String, controlColor: String, textColor: String, selectedColor: String, icon: String, tickStrategy: { type: String, default: "none", validator: (e) => z_.includes(e) }, ticked: Array, expanded: Array, selected: {}, noSelectionUnset: Boolean, defaultExpandAll: Boolean, accordion: Boolean, filter: String, filterMethod: Function, duration: {}, noConnectors: Boolean, noTransition: Boolean, noNodesLabel: String, noResultsLabel: String }, emits: ["update:expanded", "update:ticked", "update:selected", "lazyLoad", "afterShow", "afterHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = lt(e, a), o = U({}), i = U(e.ticked || []), u = U(e.expanded || []);
  let c = {};
  Ma(() => {
    c = {};
  });
  const s = f(() => `q-tree q-tree--${e.dense === true ? "dense" : "standard"}` + (e.noConnectors === true ? " q-tree--no-connectors" : "") + (r.value === true ? " q-tree--dark" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), v = f(() => e.selected !== void 0), h = f(() => e.icon || a.iconSet.tree.icon), m = f(() => e.controlColor || e.color), g = f(() => e.textColor !== void 0 ? ` text-${e.textColor}` : ""), w = f(() => {
    const M = e.selectedColor || e.color;
    return M ? ` text-${M}` : "";
  }), S = f(() => e.filterMethod !== void 0 ? e.filterMethod : (M, ee) => {
    const X = ee.toLowerCase();
    return M[e.labelKey] && M[e.labelKey].toLowerCase().indexOf(X) !== -1;
  }), q = f(() => {
    const M = {}, ee = (X, be) => {
      const B = X.tickStrategy || (be ? be.tickStrategy : e.tickStrategy), R = X[e.nodeKey], J = X[e.childrenKey] && Array.isArray(X[e.childrenKey]) && X[e.childrenKey].length !== 0, O = X.disabled !== true && v.value === true && X.selectable !== false, re = X.disabled !== true && X.expandable !== false, we = B !== "none", k = B === "strict", $ = B === "leaf-filtered", z = B === "leaf" || B === "leaf-filtered";
      let Z = X.disabled !== true && X.tickable !== false;
      z === true && Z === true && be && be.tickable !== true && (Z = false);
      let ne = X.lazy;
      ne === true && o.value[R] !== void 0 && Array.isArray(X[e.childrenKey]) === true && (ne = o.value[R]);
      const K = { key: R, parent: be, isParent: J, lazy: ne, disabled: X.disabled, link: X.disabled !== true && (O === true || re === true && (J === true || ne === true)), children: [], matchesFilter: e.filter ? S.value(X, e.filter) : true, selected: R === e.selected && O === true, selectable: O, expanded: J === true ? u.value.includes(R) : false, expandable: re, noTick: X.noTick === true || k !== true && ne && ne !== "loaded", tickable: Z, tickStrategy: B, hasTicking: we, strictTicking: k, leafFilteredTicking: $, leafTicking: z, ticked: k === true ? i.value.includes(R) : J === true ? false : i.value.includes(R) };
      if (M[R] = K, J === true && (K.children = X[e.childrenKey].map((de) => ee(de, K)), e.filter && (K.matchesFilter !== true ? K.matchesFilter = K.children.some((de) => de.matchesFilter) : K.noTick !== true && K.disabled !== true && K.tickable === true && $ === true && K.children.every((de) => de.matchesFilter !== true || de.noTick === true || de.tickable !== true) === true && (K.tickable = false)), K.matchesFilter === true && (K.noTick !== true && k !== true && K.children.every((de) => de.noTick) === true && (K.noTick = true), z))) {
        if (K.ticked = false, K.indeterminate = K.children.some((de) => de.indeterminate === true), K.tickable = K.tickable === true && K.children.some((de) => de.tickable), K.indeterminate !== true) {
          const de = K.children.reduce((me, fe) => fe.ticked === true ? me + 1 : me, 0);
          de === K.children.length ? K.ticked = true : de > 0 && (K.indeterminate = true);
        }
        K.indeterminate === true && (K.indeterminateNextState = K.children.every((de) => de.tickable !== true || de.ticked !== true));
      }
      return K;
    };
    return e.nodes.forEach((X) => ee(X, null)), M;
  });
  he(() => e.ticked, (M) => {
    i.value = M;
  }), he(() => e.expanded, (M) => {
    u.value = M;
  });
  function p(M) {
    const ee = [].reduce, X = (be, B) => {
      if (be || !B) return be;
      if (Array.isArray(B) === true) return ee.call(Object(B), X, be);
      if (B[e.nodeKey] === M) return B;
      if (B[e.childrenKey]) return X(null, B[e.childrenKey]);
    };
    return X(null, e.nodes);
  }
  function y() {
    return i.value.map((M) => p(M));
  }
  function b() {
    return u.value.map((M) => p(M));
  }
  function _(M) {
    return M && q.value[M] ? q.value[M].expanded : false;
  }
  function E() {
    e.expanded !== void 0 ? n("update:expanded", []) : u.value = [];
  }
  function A() {
    const M = [], ee = (X) => {
      X[e.childrenKey] && X[e.childrenKey].length !== 0 && X.expandable !== false && X.disabled !== true && (M.push(X[e.nodeKey]), X[e.childrenKey].forEach(ee));
    };
    e.nodes.forEach(ee), e.expanded !== void 0 ? n("update:expanded", M) : u.value = M;
  }
  function V(M, ee, X = p(M), be = q.value[M]) {
    if (be.lazy && be.lazy !== "loaded") {
      if (be.lazy === "loading") return;
      o.value[M] = "loading", Array.isArray(X[e.childrenKey]) !== true && (X[e.childrenKey] = []), n("lazyLoad", { node: X, key: M, done: (B) => {
        o.value[M] = "loaded", X[e.childrenKey] = Array.isArray(B) === true ? B : [], Ge(() => {
          var _a2;
          ((_a2 = q.value[M]) == null ? void 0 : _a2.isParent) === true && L(M, true);
        });
      }, fail: () => {
        delete o.value[M], X[e.childrenKey].length === 0 && delete X[e.childrenKey];
      } });
    } else be.isParent === true && be.expandable === true && L(M, ee);
  }
  function L(M, ee) {
    let X = u.value;
    const be = e.expanded !== void 0;
    if (be === true && (X = X.slice()), ee) {
      if (e.accordion && q.value[M]) {
        const B = [];
        q.value[M].parent ? q.value[M].parent.children.forEach((R) => {
          R.key !== M && R.expandable === true && B.push(R.key);
        }) : e.nodes.forEach((R) => {
          const J = R[e.nodeKey];
          J !== M && B.push(J);
        }), B.length !== 0 && (X = X.filter((R) => B.includes(R) === false));
      }
      X = X.concat([M]).filter((B, R, J) => J.indexOf(B) === R);
    } else X = X.filter((B) => B !== M);
    be === true ? n("update:expanded", X) : u.value = X;
  }
  function P(M) {
    return M && q.value[M] ? q.value[M].ticked : false;
  }
  function F(M, ee) {
    let X = i.value;
    const be = e.ticked !== void 0;
    be === true && (X = X.slice()), ee ? X = X.concat(M).filter((B, R, J) => J.indexOf(B) === R) : X = X.filter((B) => M.includes(B) === false), be === true && n("update:ticked", X);
  }
  function T(M, ee, X) {
    const be = { tree: l, node: M, key: X, color: e.color, dark: r.value };
    return Ot(be, "expanded", () => ee.expanded, (B) => {
      B !== ee.expanded && V(X, B);
    }), Ot(be, "ticked", () => ee.ticked, (B) => {
      B !== ee.ticked && F([X], B);
    }), be;
  }
  function x(M) {
    return (e.filter ? M.filter((ee) => q.value[ee[e.nodeKey]].matchesFilter) : M).map((ee) => j(ee));
  }
  function C(M) {
    if (M.icon !== void 0) return d(et, { class: "q-tree__icon q-mr-sm", name: M.icon, color: M.iconColor });
    const ee = M.img || M.avatar;
    if (ee) return d("img", { class: `q-tree__${M.img ? "img" : "avatar"} q-mr-sm`, src: ee });
  }
  function D() {
    n("afterShow");
  }
  function H() {
    n("afterHide");
  }
  function j(M) {
    const ee = M[e.nodeKey], X = q.value[ee], be = M.header && t[`header-${M.header}`] || t["default-header"], B = X.isParent === true ? x(M[e.childrenKey]) : [], R = B.length !== 0 || X.lazy && X.lazy !== "loaded";
    let J = M.body && t[`body-${M.body}`] || t["default-body"];
    const O = be !== void 0 || J !== void 0 ? T(M, X, ee) : null;
    return J !== void 0 && (J = d("div", { class: "q-tree__node-body relative-position" }, [d("div", { class: g.value }, [J(O)])])), d("div", { key: ee, class: `q-tree__node relative-position q-tree__node--${R === true ? "parent" : "child"}` }, [d("div", { class: "q-tree__node-header relative-position row no-wrap items-center" + (X.link === true ? " q-tree__node--link q-hoverable q-focusable" : "") + (X.selected === true ? " q-tree__node--selected" : "") + (X.disabled === true ? " q-tree__node--disabled" : ""), tabindex: X.link === true ? 0 : -1, ariaExpanded: B.length > 0 ? X.expanded : null, role: "treeitem", onClick: (re) => {
      te(M, X, re);
    }, onKeypress(re) {
      Wl(re) !== true && (re.keyCode === 13 ? te(M, X, re, true) : re.keyCode === 32 && pe(M, X, re, true));
    } }, [d("div", { class: "q-focus-helper", tabindex: -1, ref: (re) => {
      c[X.key] = re;
    } }), X.lazy === "loading" ? d(_n, { class: "q-tree__spinner", color: m.value }) : R === true ? d(et, { class: "q-tree__arrow" + (X.expanded === true ? " q-tree__arrow--rotate" : ""), name: h.value, onClick(re) {
      pe(M, X, re);
    } }) : null, X.hasTicking === true && X.noTick !== true ? d(ir, { class: "q-tree__tickbox", modelValue: X.indeterminate === true ? null : X.ticked, color: m.value, dark: r.value, dense: true, keepColor: true, disable: X.tickable !== true, onKeydown: je, "onUpdate:modelValue": (re) => {
      Q(X, re);
    } }) : null, d("div", { class: "q-tree__node-header-content col row no-wrap items-center" + (X.selected === true ? w.value : g.value) }, [be ? be(O) : [C(M), d("div", M[e.labelKey])]])]), R === true ? e.noTransition === true ? X.expanded === true ? d("div", { class: "q-tree__node-collapsible" + g.value, key: `${ee}__q` }, [J, d("div", { class: "q-tree__children" + (X.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, B)]) : null : d(Ds, { duration: e.duration, onShow: D, onHide: H }, () => sn(d("div", { class: "q-tree__node-collapsible" + g.value, key: `${ee}__q` }, [J, d("div", { class: "q-tree__children" + (X.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, B)]), [[Hv, X.expanded]])) : J]);
  }
  function W(M) {
    var _a2;
    (_a2 = c[M]) == null ? void 0 : _a2.focus();
  }
  function te(M, ee, X, be) {
    be !== true && ee.selectable !== false && W(ee.key), v.value && ee.selectable ? e.noSelectionUnset === false ? n("update:selected", ee.key !== e.selected ? ee.key : null) : ee.key !== e.selected && n("update:selected", ee.key === void 0 ? null : ee.key) : pe(M, ee, X, be), typeof M.handler == "function" && M.handler(M);
  }
  function pe(M, ee, X, be) {
    X !== void 0 && je(X), be !== true && ee.selectable !== false && W(ee.key), V(ee.key, !ee.expanded, M, ee);
  }
  function Q(M, ee) {
    if (M.indeterminate === true && (ee = M.indeterminateNextState), M.strictTicking) F([M.key], ee);
    else if (M.leafTicking) {
      const X = [], be = (B) => {
        B.isParent ? (ee !== true && B.noTick !== true && B.tickable === true && X.push(B.key), B.leafTicking === true && B.children.forEach(be)) : B.noTick !== true && B.tickable === true && (B.leafFilteredTicking !== true || B.matchesFilter === true) && X.push(B.key);
      };
      be(M), F(X, ee);
    }
  }
  return e.defaultExpandAll === true && A(), Object.assign(l, { getNodeByKey: p, getTickedNodes: y, getExpandedNodes: b, isExpanded: _, collapseAll: E, expandAll: A, setExpanded: V, isTicked: P, setTicked: F }), () => {
    const M = x(e.nodes);
    return d("div", { class: s.value, role: "tree" }, M.length === 0 ? e.filter ? e.noResultsLabel || a.lang.tree.noResults : e.noNodesLabel || a.lang.tree.noNodes : M);
  };
} });
function Nd(e) {
  return (e * 100).toFixed(2) + "%";
}
var D_ = { ...nt, ...Sh, label: String, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, noThumbnails: Boolean, thumbnailFit: { type: String, default: "cover" }, autoUpload: Boolean, hideUploadBtn: Boolean, disable: Boolean, readonly: Boolean }, Nh = [...xh, "start", "finish", "added", "removed"];
function N_(e, t) {
  const n = Se(), { props: l, slots: a, emit: r, proxy: o } = n, { $q: i } = o, u = lt(l, i);
  function c(O, re, we) {
    if (O.__status = re, re === "idle") {
      O.__uploaded = 0, O.__progress = 0, O.__sizeLabel = Eu(O.size), O.__progressLabel = "0.00%";
      return;
    }
    if (re === "failed") {
      o.$forceUpdate();
      return;
    }
    O.__uploaded = re === "uploaded" ? O.size : we, O.__progress = re === "uploaded" ? 1 : Math.min(0.9999, O.__uploaded / O.size), O.__progressLabel = Nd(O.__progress), o.$forceUpdate();
  }
  const s = f(() => l.disable !== true && l.readonly !== true), v = U(false), h = U(null), m = U(null), g = { files: U([]), queuedFiles: U([]), uploadedFiles: U([]), uploadedSize: U(0), updateFileStatus: c, isAlive: () => hl(n) === false }, { pickFiles: w, addFiles: S, onDragover: q, onDragleave: p, processFiles: y, getDndNode: b, maxFilesNumber: _, maxTotalSizeNumber: E } = Ch({ editable: s, dnd: v, getFileInput: Q, addFilesToQueue: M });
  Object.assign(g, e({ props: l, slots: a, emit: r, helpers: g, exposeApi: (O) => {
    Object.assign(g, O);
  } })), g.isBusy === void 0 && (g.isBusy = U(false));
  const A = U(0), V = f(() => A.value === 0 ? 0 : g.uploadedSize.value / A.value), L = f(() => Nd(V.value)), P = f(() => Eu(A.value)), F = f(() => s.value === true && g.isUploading.value !== true && (l.multiple === true || g.queuedFiles.value.length === 0) && (l.maxFiles === void 0 || g.files.value.length < _.value) && (l.maxTotalSize === void 0 || A.value < E.value)), T = f(() => s.value === true && g.isBusy.value !== true && g.isUploading.value !== true && g.queuedFiles.value.length !== 0);
  hn(um, be);
  const x = f(() => "q-uploader column no-wrap" + (u.value === true ? " q-uploader--dark q-dark" : "") + (l.bordered === true ? " q-uploader--bordered" : "") + (l.square === true ? " q-uploader--square no-border-radius" : "") + (l.flat === true ? " q-uploader--flat no-shadow" : "") + (l.disable === true ? " disabled q-uploader--disable" : "") + (v.value === true ? " q-uploader--dnd" : "")), C = f(() => "q-uploader__header" + (l.color !== void 0 ? ` bg-${l.color}` : "") + (l.textColor !== void 0 ? ` text-${l.textColor}` : ""));
  he(g.isUploading, (O, re) => {
    re === false && O === true ? r("start") : re === true && O === false && r("finish");
  });
  function D() {
    l.disable === false && (g.abort(), g.uploadedSize.value = 0, A.value = 0, pe(), g.files.value = [], g.queuedFiles.value = [], g.uploadedFiles.value = []);
  }
  function H() {
    l.disable === false && W(["uploaded"], () => {
      g.uploadedFiles.value = [];
    });
  }
  function j() {
    W(["idle", "failed"], ({ size: O }) => {
      A.value -= O, g.queuedFiles.value = [];
    });
  }
  function W(O, re) {
    if (l.disable === true) return;
    const we = { files: [], size: 0 }, k = g.files.value.filter(($) => O.indexOf($.__status) === -1 ? true : (we.size += $.size, we.files.push($), $.__img !== void 0 && window.URL.revokeObjectURL($.__img.src), false));
    we.files.length !== 0 && (g.files.value = k, re(we), r("removed", we.files));
  }
  function te(O) {
    l.disable || (O.__status === "uploaded" ? g.uploadedFiles.value = g.uploadedFiles.value.filter((re) => re.__key !== O.__key) : O.__status === "uploading" ? O.__abort() : A.value -= O.size, g.files.value = g.files.value.filter((re) => re.__key !== O.__key ? true : (re.__img !== void 0 && window.URL.revokeObjectURL(re.__img.src), false)), g.queuedFiles.value = g.queuedFiles.value.filter((re) => re.__key !== O.__key), r("removed", [O]));
  }
  function pe() {
    g.files.value.forEach((O) => {
      O.__img !== void 0 && window.URL.revokeObjectURL(O.__img.src);
    });
  }
  function Q() {
    return m.value || h.value.getElementsByClassName("q-uploader__input")[0];
  }
  function M(O, re) {
    const we = y(O, re, g.files.value, true), k = Q();
    k != null && (k.value = ""), we !== void 0 && (we.forEach(($) => {
      if (g.updateFileStatus($, "idle"), A.value += $.size, l.noThumbnails !== true && $.type.toUpperCase().startsWith("IMAGE")) {
        const z = new Image();
        z.src = window.URL.createObjectURL($), $.__img = z;
      }
    }), g.files.value = g.files.value.concat(we), g.queuedFiles.value = g.queuedFiles.value.concat(we), r("added", we), l.autoUpload === true && g.upload());
  }
  function ee() {
    T.value === true && g.upload();
  }
  function X(O, re, we) {
    if (O === true) {
      const k = { type: "a", key: re, icon: i.iconSet.uploader[re], flat: true, dense: true };
      let $;
      return re === "add" ? (k.onClick = w, $ = be) : k.onClick = we, d(Ze, k, $);
    }
  }
  function be() {
    return d("input", { ref: m, class: "q-uploader__input overflow-hidden absolute-full", tabindex: -1, type: "file", title: "", accept: l.accept, multiple: l.multiple === true ? "multiple" : void 0, capture: l.capture, onMousedown: wt, onClick: w, onChange: M });
  }
  function B() {
    return a.header !== void 0 ? a.header(J) : [d("div", { class: "q-uploader__header-content column" }, [d("div", { class: "flex flex-center no-wrap q-gutter-xs" }, [X(g.queuedFiles.value.length !== 0, "removeQueue", j), X(g.uploadedFiles.value.length !== 0, "removeUploaded", H), g.isUploading.value === true ? d(_n, { class: "q-uploader__spinner" }) : null, d("div", { class: "col column justify-center" }, [l.label !== void 0 ? d("div", { class: "q-uploader__title" }, [l.label]) : null, d("div", { class: "q-uploader__subtitle" }, [P.value + " / " + L.value])]), X(F.value, "add"), X(l.hideUploadBtn === false && T.value === true, "upload", g.upload), X(g.isUploading.value, "clear", g.abort)])])];
  }
  function R() {
    return a.list !== void 0 ? a.list(J) : g.files.value.map((O) => d("div", { key: O.__key, class: "q-uploader__file relative-position" + (l.noThumbnails !== true && O.__img !== void 0 ? " q-uploader__file--img" : "") + (O.__status === "failed" ? " q-uploader__file--failed" : O.__status === "uploaded" ? " q-uploader__file--uploaded" : ""), style: l.noThumbnails !== true && O.__img !== void 0 ? { backgroundImage: 'url("' + O.__img.src + '")', backgroundSize: l.thumbnailFit } : null }, [d("div", { class: "q-uploader__file-header row flex-center no-wrap" }, [O.__status === "failed" ? d(et, { class: "q-uploader__file-status", name: i.iconSet.type.negative, color: "negative" }) : null, d("div", { class: "q-uploader__file-header-content col" }, [d("div", { class: "q-uploader__title" }, [O.name]), d("div", { class: "q-uploader__subtitle row items-center no-wrap" }, [O.__sizeLabel + " / " + O.__progressLabel])]), O.__status === "uploading" ? d(Um, { value: O.__progress, min: 0, max: 1, indeterminate: O.__progress === 0 }) : d(Ze, { round: true, dense: true, flat: true, icon: i.iconSet.uploader[O.__status === "uploaded" ? "done" : "clear"], onClick: () => {
      te(O);
    } })])]));
  }
  Ke(() => {
    g.isUploading.value === true && g.abort(), g.files.value.length !== 0 && pe();
  });
  const J = {};
  for (const O in g) pt(g[O]) === true ? Ot(J, O, () => g[O].value) : J[O] = g[O];
  return Object.assign(J, { upload: ee, reset: D, removeUploadedFiles: H, removeQueuedFiles: j, removeFile: te, pickFiles: w, addFiles: S }), Kv(J, { canAddFiles: () => F.value, canUpload: () => T.value, uploadSizeLabel: () => P.value, uploadProgressLabel: () => L.value }), t({ ...g, upload: ee, reset: D, removeUploadedFiles: H, removeQueuedFiles: j, removeFile: te, pickFiles: w, addFiles: S, canAddFiles: F, canUpload: T, uploadSizeLabel: P, uploadProgressLabel: L }), () => {
    const O = [d("div", { class: C.value }, B()), d("div", { class: "q-uploader__list scroll" }, R()), b("uploader")];
    g.isBusy.value === true && O.push(d("div", { class: "q-uploader__overlay absolute-full flex flex-center" }, [d(_n)]));
    const re = { ref: h, class: x.value };
    return F.value === true && Object.assign(re, { onDragover: q, onDragleave: p }), d("div", re, O);
  };
}
var H_ = () => true;
function Hh(e) {
  const t = {};
  return e.forEach((n) => {
    t[n] = H_;
  }), t;
}
var j_ = Hh(Nh), U_ = ({ name: e, props: t, emits: n, injectPlugin: l }) => ve({ name: e, props: { ...D_, ...t }, emits: Rt(n) === true ? { ...j_, ...n } : [...Nh, ...n], setup(a, { expose: r }) {
  return N_(l, r);
} });
function Nn(e) {
  return typeof e == "function" ? e : () => e;
}
var Q_ = "QUploader", K_ = { url: [Function, String], method: { type: [Function, String], default: "POST" }, fieldName: { type: [Function, String], default: () => (e) => e.name }, headers: [Function, Array], formFields: [Function, Array], withCredentials: [Function, Boolean], sendRaw: [Function, Boolean], batch: [Function, Boolean], factory: Function }, W_ = ["factoryFailed", "uploaded", "failed", "uploading"];
function Y_({ props: e, emit: t, helpers: n }) {
  const l = U([]), a = U([]), r = U(0), o = f(() => ({ url: Nn(e.url), method: Nn(e.method), headers: Nn(e.headers), formFields: Nn(e.formFields), fieldName: Nn(e.fieldName), withCredentials: Nn(e.withCredentials), sendRaw: Nn(e.sendRaw), batch: Nn(e.batch) })), i = f(() => r.value > 0), u = f(() => a.value.length !== 0);
  let c;
  function s() {
    l.value.forEach((g) => {
      g.abort();
    }), a.value.length !== 0 && (c = true);
  }
  function v() {
    const g = n.queuedFiles.value.slice(0);
    n.queuedFiles.value = [], o.value.batch(g) ? h(g) : g.forEach((w) => {
      h([w]);
    });
  }
  function h(g) {
    if (r.value++, typeof e.factory != "function") {
      m(g, {});
      return;
    }
    const w = e.factory(g);
    if (!w) t("factoryFailed", new Error("QUploader: factory() does not return properly"), g), r.value--;
    else if (typeof w.catch == "function" && typeof w.then == "function") {
      a.value.push(w);
      const S = (q) => {
        n.isAlive() === true && (a.value = a.value.filter((p) => p !== w), a.value.length === 0 && (c = false), n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach((p) => {
          n.updateFileStatus(p, "failed");
        }), t("factoryFailed", q, g), r.value--);
      };
      w.then((q) => {
        c === true ? S(new Error("Aborted")) : n.isAlive() === true && (a.value = a.value.filter((p) => p !== w), m(g, q));
      }).catch(S);
    } else m(g, w || {});
  }
  function m(g, w) {
    const S = new FormData(), q = new XMLHttpRequest(), p = (T, x) => w[T] !== void 0 ? Nn(w[T])(x) : o.value[T](x), y = p("url", g);
    if (!y) {
      console.error("q-uploader: invalid or no URL specified"), r.value--;
      return;
    }
    const b = p("formFields", g);
    b !== void 0 && b.forEach((T) => {
      S.append(T.name, T.value);
    });
    let _ = 0, E = 0, A = 0, V = 0, L;
    q.upload.addEventListener("progress", (T) => {
      if (L === true) return;
      const x = Math.min(V, T.loaded);
      n.uploadedSize.value += x - A, A = x;
      let C = A - E;
      for (let D = _; C > 0 && D < g.length; D++) {
        const H = g[D];
        if (C > H.size) C -= H.size, _++, E += H.size, n.updateFileStatus(H, "uploading", H.size);
        else {
          n.updateFileStatus(H, "uploading", C);
          return;
        }
      }
    }, false), q.onreadystatechange = () => {
      q.readyState < 4 || (q.status && q.status < 400 ? (n.uploadedFiles.value = n.uploadedFiles.value.concat(g), g.forEach((T) => {
        n.updateFileStatus(T, "uploaded");
      }), t("uploaded", { files: g, xhr: q })) : (L = true, n.uploadedSize.value -= A, n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach((T) => {
        n.updateFileStatus(T, "failed");
      }), t("failed", { files: g, xhr: q })), r.value--, l.value = l.value.filter((T) => T !== q));
    }, q.open(p("method", g), y), p("withCredentials", g) === true && (q.withCredentials = true);
    const P = p("headers", g);
    P !== void 0 && P.forEach((T) => {
      q.setRequestHeader(T.name, T.value);
    });
    const F = p("sendRaw", g);
    g.forEach((T) => {
      n.updateFileStatus(T, "uploading", 0), F !== true && S.append(p("fieldName", T), T, T.name), T.xhr = q, T.__abort = () => {
        q.abort();
      }, V += T.size;
    }), t("uploading", { files: g, xhr: q }), l.value.push(q), F === true ? q.send(new Blob(g)) : q.send(S);
  }
  return { isUploading: i, isBusy: u, abort: s, upload: v };
}
var G_ = { name: Q_, props: K_, emits: W_, injectPlugin: Y_ };
U_(G_);
ve({ name: "QUploaderAddTrigger", setup() {
  const e = Tt(um, ot);
  return e === ot && console.error("QUploaderAddTrigger needs to be child of QUploader"), e;
} });
ve({ name: "QVideo", props: { ...Ns, src: { type: String, required: true }, title: String, fetchpriority: { type: String, default: "auto" }, loading: { type: String, default: "eager" }, referrerpolicy: { type: String, default: "strict-origin-when-cross-origin" } }, setup(e) {
  const t = Hs(e), n = f(() => "q-video" + (e.ratio !== void 0 ? " q-video--responsive" : ""));
  return () => d("div", { class: n.value, style: t.value }, [d("iframe", { src: e.src, title: e.title, fetchpriority: e.fetchpriority, loading: e.loading, referrerpolicy: e.referrerpolicy, frameborder: "0", allowfullscreen: true })]);
} });
function Hd(e) {
  if (e === false) return 0;
  if (e === true || e === void 0) return 1;
  const t = parseInt(e, 10);
  return isNaN(t) ? 0 : t;
}
An({ name: "close-popup", beforeMount(e, { value: t }) {
  const n = { depth: Hd(t), handler(l) {
    n.depth !== 0 && setTimeout(() => {
      const a = Ky(e);
      a !== void 0 && Wy(a, l, n.depth);
    });
  }, handlerKey(l) {
    yn(l, 13) === true && n.handler(l);
  } };
  e.__qclosepopup = n, e.addEventListener("click", n.handler), e.addEventListener("keyup", n.handlerKey);
}, updated(e, { value: t, oldValue: n }) {
  t !== n && (e.__qclosepopup.depth = Hd(t));
}, beforeUnmount(e) {
  const t = e.__qclosepopup;
  e.removeEventListener("click", t.handler), e.removeEventListener("keyup", t.handlerKey), delete e.__qclosepopup;
} });
var X_ = 0, Da = void 0;
function jd(e, t) {
  Da === void 0 && (Da = document.createElement("div"), Da.style.cssText = "position: absolute; left: 0; top: 0", document.body.appendChild(Da));
  const n = e.getBoundingClientRect(), l = Da.getBoundingClientRect(), { marginLeft: a, marginRight: r, marginTop: o, marginBottom: i } = window.getComputedStyle(e), u = parseInt(a, 10) + parseInt(r, 10), c = parseInt(o, 10) + parseInt(i, 10);
  return { left: n.left - l.left, top: n.top - l.top, width: n.right - n.left, height: n.bottom - n.top, widthM: n.right - n.left + (t === true ? 0 : u), heightM: n.bottom - n.top + (t === true ? 0 : c), marginH: t === true ? u : 0, marginV: t === true ? c : 0 };
}
function Zr(e) {
  return { width: e.scrollWidth, height: e.scrollHeight };
}
var Ud = ["Top", "Right", "Bottom", "Left"], Qd = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], Z_ = /-block|-inline|block-|inline-/, J_ = /(-block|-inline|block-|inline-).*:/;
function Kd(e, t) {
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
      for (let u = 0; u < Ud.length; u++) {
        const c = "border" + Ud[u] + o;
        i += n[c] + " ";
      }
      l[r] = i;
    } else if (r === "borderRadius") {
      let o = "", i = "";
      for (let u = 0; u < Qd.length; u++) {
        const c = n[Qd[u]].split(" ");
        o += c[0] + " ", i += (c[1] === void 0 ? c[0] : c[1]) + " ";
      }
      l[r] = o + "/ " + i;
    } else l[r] = n[r];
    else r === "cssText" ? l[r] = n[r].split(";").filter((o) => J_.test(o) !== true).join(";") : l[r] = n[r];
  }
  return l;
}
var ew = ["absolute", "fixed", "relative", "sticky"];
function Wd(e) {
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
function Yd(e) {
  const t = typeof e;
  return t === "function" ? e() : t === "string" ? document.querySelector(e) : e;
}
function Gd(e) {
  return e && e.ownerDocument === document && e.parentNode !== null;
}
function lw(e) {
  let t = () => false, n = false, l = true;
  const a = tw(e), r = nw(e), o = Yd(a.from);
  if (Gd(o) !== true) return t;
  typeof o.qMorphCancel == "function" && o.qMorphCancel();
  let i, u, c, s;
  const v = o.parentNode, h = o.nextElementSibling, m = jd(o, r.resize), { width: g, height: w } = Zr(v), { borderWidth: S, borderStyle: q, borderColor: p, borderRadius: y, backgroundColor: b, transform: _, position: E, cssText: A } = Kd(o, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), V = o.classList.toString(), L = o.style.cssText, P = o.cloneNode(true), F = r.tween === true ? o.cloneNode(true) : void 0;
  F !== void 0 && (F.className = F.classList.toString().split(" ").filter((x) => /^bg-/.test(x) === false).join(" ")), r.hideFromClone === true && P.classList.add("q-morph--internal"), P.setAttribute("aria-hidden", "true"), P.style.transition = "none", P.style.animation = "none", P.style.pointerEvents = "none", v.insertBefore(P, h), o.qMorphCancel = () => {
    n = true, P.remove(), F == null ? void 0 : F.remove(), r.hideFromClone === true && P.classList.remove("q-morph--internal"), o.qMorphCancel = void 0;
  };
  const T = () => {
    const x = Yd(a.to);
    if (n === true || Gd(x) !== true) {
      typeof o.qMorphCancel == "function" && o.qMorphCancel();
      return;
    }
    o !== x && typeof x.qMorphCancel == "function" && x.qMorphCancel(), r.keepToClone !== true && x.classList.add("q-morph--internal"), P.classList.add("q-morph--internal");
    const { width: C, height: D } = Zr(v), { width: H, height: j } = Zr(x.parentNode);
    r.hideFromClone !== true && P.classList.remove("q-morph--internal"), x.qMorphCancel = () => {
      n = true, P.remove(), F == null ? void 0 : F.remove(), r.hideFromClone === true && P.classList.remove("q-morph--internal"), r.keepToClone !== true && x.classList.remove("q-morph--internal"), o.qMorphCancel = void 0, x.qMorphCancel = void 0;
    };
    const W = () => {
      if (n === true) {
        typeof x.qMorphCancel == "function" && x.qMorphCancel();
        return;
      }
      r.hideFromClone !== true && (P.classList.add("q-morph--internal"), P.innerHTML = "", P.style.left = 0, P.style.right = "unset", P.style.top = 0, P.style.bottom = "unset", P.style.transform = "none"), r.keepToClone !== true && x.classList.remove("q-morph--internal");
      const te = x.parentNode, { width: pe, height: Q } = Zr(te), M = x.cloneNode(r.keepToClone);
      M.setAttribute("aria-hidden", "true"), r.keepToClone !== true && (M.style.left = 0, M.style.right = "unset", M.style.top = 0, M.style.bottom = "unset", M.style.transform = "none", M.style.pointerEvents = "none"), M.classList.add("q-morph--internal");
      const ee = x === o && v === te ? P : x.nextElementSibling;
      te.insertBefore(M, ee);
      const { borderWidth: X, borderStyle: be, borderColor: B, borderRadius: R, backgroundColor: J, transform: O, position: re, cssText: we } = Kd(x, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), k = x.classList.toString(), $ = x.style.cssText;
      x.style.cssText = we, x.style.transform = "none", x.style.animation = "none", x.style.transition = "none", x.className = k.split(" ").filter((ye) => /^bg-/.test(ye) === false).join(" ");
      const z = jd(x, r.resize), Z = m.left - z.left, ne = m.top - z.top, K = m.width / (z.width > 0 ? z.width : 10), de = m.height / (z.height > 0 ? z.height : 100), me = g - C, fe = w - D, ce = pe - H, le = Q - j, N = Math.max(m.widthM, me), oe = Math.max(m.heightM, fe), _e = Math.max(z.widthM, ce), ke = Math.max(z.heightM, le), qe = o === x && ["absolute", "fixed"].includes(re) === false && ["absolute", "fixed"].includes(E) === false;
      let Me = re === "fixed", He = te;
      for (; Me !== true && He !== document; ) Me = window.getComputedStyle(He).position === "fixed", He = He.parentNode;
      if (r.hideFromClone !== true && (P.style.display = "block", P.style.flex = "0 0 auto", P.style.opacity = 0, P.style.minWidth = "unset", P.style.maxWidth = "unset", P.style.minHeight = "unset", P.style.maxHeight = "unset", P.classList.remove("q-morph--internal")), r.keepToClone !== true && (M.style.display = "block", M.style.flex = "0 0 auto", M.style.opacity = 0, M.style.minWidth = "unset", M.style.maxWidth = "unset", M.style.minHeight = "unset", M.style.maxHeight = "unset"), M.classList.remove("q-morph--internal"), typeof r.classes == "string" && (x.className += " " + r.classes), typeof r.style == "string") x.style.cssText += " " + r.style;
      else if (Rt(r.style) === true) for (const ye in r.style) x.style[ye] = r.style[ye];
      const Ve = Wd(P), ie = Wd(x), ge = Me === true ? document.documentElement : { scrollLeft: 0, scrollTop: 0 };
      x.style.position = Me === true ? "fixed" : "absolute", x.style.left = `${z.left - ge.scrollLeft}px`, x.style.right = "unset", x.style.top = `${z.top - ge.scrollTop}px`, x.style.margin = 0, r.resize === true && (x.style.minWidth = "unset", x.style.maxWidth = "unset", x.style.minHeight = "unset", x.style.maxHeight = "unset", x.style.overflow = "hidden", x.style.overflowX = "hidden", x.style.overflowY = "hidden"), document.body.appendChild(x), F !== void 0 && (F.style.cssText = A, F.style.transform = "none", F.style.animation = "none", F.style.transition = "none", F.style.position = x.style.position, F.style.left = `${m.left - ge.scrollLeft}px`, F.style.right = "unset", F.style.top = `${m.top - ge.scrollTop}px`, F.style.margin = 0, F.style.pointerEvents = "none", r.resize === true && (F.style.minWidth = "unset", F.style.maxWidth = "unset", F.style.minHeight = "unset", F.style.maxHeight = "unset", F.style.overflow = "hidden", F.style.overflowX = "hidden", F.style.overflowY = "hidden"), document.body.appendChild(F));
      const ae = (ye) => {
        o === x && l !== true ? (x.style.cssText = L, x.className = V) : (x.style.cssText = $, x.className = k), M.parentNode === te && te.insertBefore(x, M), P.remove(), M.remove(), F == null ? void 0 : F.remove(), t = () => false, o.qMorphCancel = void 0, x.qMorphCancel = void 0, typeof r.onEnd == "function" && r.onEnd(l === true ? "to" : "from", ye === true);
      };
      if (r.useCSS !== true && typeof x.animate == "function") {
        const ye = r.resize === true ? { transform: `translate(${Z}px, ${ne}px)`, width: `${N}px`, height: `${oe}px` } : { transform: `translate(${Z}px, ${ne}px) scale(${K}, ${de})` }, Ce = r.resize === true ? { width: `${_e}px`, height: `${ke}px` } : {}, Oe = r.resize === true ? { width: `${N}px`, height: `${oe}px` } : {}, $e = r.resize === true ? { transform: `translate(${-1 * Z}px, ${-1 * ne}px)`, width: `${_e}px`, height: `${ke}px` } : { transform: `translate(${-1 * Z}px, ${-1 * ne}px) scale(${1 / K}, ${1 / de})` }, We = F !== void 0 ? { opacity: r.tweenToOpacity } : { backgroundColor: b }, it = F !== void 0 ? { opacity: 1 } : { backgroundColor: J };
        s = x.animate([{ margin: 0, borderWidth: S, borderStyle: q, borderColor: p, borderRadius: y, zIndex: Ve, transformOrigin: "0 0", ...ye, ...We }, { margin: 0, borderWidth: X, borderStyle: be, borderColor: B, borderRadius: R, zIndex: ie, transformOrigin: "0 0", transform: O, ...Ce, ...it }], { duration: r.duration, easing: r.easing, fill: r.fill, delay: r.delay }), u = F === void 0 ? void 0 : F.animate([{ opacity: r.tweenFromOpacity, margin: 0, borderWidth: S, borderStyle: q, borderColor: p, borderRadius: y, zIndex: Ve, transformOrigin: "0 0", transform: _, ...Oe }, { opacity: 0, margin: 0, borderWidth: X, borderStyle: be, borderColor: B, borderRadius: R, zIndex: ie, transformOrigin: "0 0", ...$e }], { duration: r.duration, easing: r.easing, fill: r.fill, delay: r.delay }), i = r.hideFromClone === true || qe === true ? void 0 : P.animate([{ margin: `${fe < 0 ? fe / 2 : 0}px ${me < 0 ? me / 2 : 0}px`, width: `${N + m.marginH}px`, height: `${oe + m.marginV}px` }, { margin: 0, width: 0, height: 0 }], { duration: r.duration, easing: r.easing, fill: r.fill, delay: r.delay }), c = r.keepToClone === true ? void 0 : M.animate([qe === true ? { margin: `${fe < 0 ? fe / 2 : 0}px ${me < 0 ? me / 2 : 0}px`, width: `${N + m.marginH}px`, height: `${oe + m.marginV}px` } : { margin: 0, width: 0, height: 0 }, { margin: `${le < 0 ? le / 2 : 0}px ${ce < 0 ? ce / 2 : 0}px`, width: `${_e + z.marginH}px`, height: `${ke + z.marginV}px` }], { duration: r.duration, easing: r.easing, fill: r.fill, delay: r.delay });
        const Ct = (jt) => {
          i == null ? void 0 : i.cancel(), u == null ? void 0 : u.cancel(), c == null ? void 0 : c.cancel(), s.cancel(), s.removeEventListener("finish", Ct), s.removeEventListener("cancel", Ct), ae(jt), i = void 0, u = void 0, c = void 0, s = void 0;
        };
        o.qMorphCancel = () => {
          o.qMorphCancel = void 0, n = true, Ct();
        }, x.qMorphCancel = () => {
          x.qMorphCancel = void 0, n = true, Ct();
        }, s.addEventListener("finish", Ct), s.addEventListener("cancel", Ct), t = (jt) => n === true || s === void 0 ? false : jt === true ? (Ct(true), true) : (l = l !== true, i == null ? void 0 : i.reverse(), u == null ? void 0 : u.reverse(), c == null ? void 0 : c.reverse(), s.reverse(), true);
      } else {
        const ye = `q-morph-anim-${++X_}`, Ce = document.createElement("style"), Oe = r.resize === true ? `
            transform: translate(${Z}px, ${ne}px);
            width: ${N}px;
            height: ${oe}px;
          ` : `transform: translate(${Z}px, ${ne}px) scale(${K}, ${de});`, $e = r.resize === true ? `
            width: ${_e}px;
            height: ${ke}px;
          ` : "", We = r.resize === true ? `
            width: ${N}px;
            height: ${oe}px;
          ` : "", it = r.resize === true ? `
            transform: translate(${-1 * Z}px, ${-1 * ne}px);
            width: ${_e}px;
            height: ${ke}px;
          ` : `transform: translate(${-1 * Z}px, ${-1 * ne}px) scale(${1 / K}, ${1 / de});`, Ct = F !== void 0 ? `opacity: ${r.tweenToOpacity};` : `background-color: ${b};`, jt = F !== void 0 ? "opacity: 1;" : `background-color: ${J};`, tl = F === void 0 ? "" : `
            @keyframes ${ye}-from-tween {
              0% {
                opacity: ${r.tweenFromOpacity};
                margin: 0;
                border-width: ${S};
                border-style: ${q};
                border-color: ${p};
                border-radius: ${y};
                z-index: ${Ve};
                transform-origin: 0 0;
                transform: ${_};
                ${We}
              }

              100% {
                opacity: 0;
                margin: 0;
                border-width: ${X};
                border-style: ${be};
                border-color: ${B};
                border-radius: ${R};
                z-index: ${ie};
                transform-origin: 0 0;
                ${it}
              }
            }
          `, ln = r.hideFromClone === true || qe === true ? "" : `
            @keyframes ${ye}-from {
              0% {
                margin: ${fe < 0 ? fe / 2 : 0}px ${me < 0 ? me / 2 : 0}px;
                width: ${N + m.marginH}px;
                height: ${oe + m.marginV}px;
              }

              100% {
                margin: 0;
                width: 0;
                height: 0;
              }
            }
          `, In = qe === true ? `
            margin: ${fe < 0 ? fe / 2 : 0}px ${me < 0 ? me / 2 : 0}px;
            width: ${N + m.marginH}px;
            height: ${oe + m.marginV}px;
          ` : `
            margin: 0;
            width: 0;
            height: 0;
          `, ue = r.keepToClone === true ? "" : `
            @keyframes ${ye}-to {
              0% {
                ${In}
              }

              100% {
                margin: ${le < 0 ? le / 2 : 0}px ${ce < 0 ? ce / 2 : 0}px;
                width: ${_e + z.marginH}px;
                height: ${ke + z.marginV}px;
              }
            }
          `;
        Ce.innerHTML = `
          @keyframes ${ye} {
            0% {
              margin: 0;
              border-width: ${S};
              border-style: ${q};
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
              border-width: ${X};
              border-style: ${be};
              border-color: ${B};
              border-radius: ${R};
              background-color: ${J};
              z-index: ${ie};
              transform-origin: 0 0;
              transform: ${O};
              ${$e}
              ${jt}
            }
          }

          ${ln}

          ${tl}

          ${ue}
        `, document.head.appendChild(Ce);
        let xe = "normal";
        P.style.animation = `${r.duration}ms ${r.easing} ${r.delay}ms ${xe} ${r.fill} ${ye}-from`, F !== void 0 && (F.style.animation = `${r.duration}ms ${r.easing} ${r.delay}ms ${xe} ${r.fill} ${ye}-from-tween`), M.style.animation = `${r.duration}ms ${r.easing} ${r.delay}ms ${xe} ${r.fill} ${ye}-to`, x.style.animation = `${r.duration}ms ${r.easing} ${r.delay}ms ${xe} ${r.fill} ${ye}`;
        const Fe = (Be) => {
          Be === Object(Be) && Be.animationName !== ye || (x.removeEventListener("animationend", Fe), x.removeEventListener("animationcancel", Fe), ae(), Ce.remove());
        };
        o.qMorphCancel = () => {
          o.qMorphCancel = void 0, n = true, Fe();
        }, x.qMorphCancel = () => {
          x.qMorphCancel = void 0, n = true, Fe();
        }, x.addEventListener("animationend", Fe), x.addEventListener("animationcancel", Fe), t = (Be) => n === true || !x || !P || !M ? false : Be === true ? (Fe(), true) : (l = l !== true, xe = xe === "normal" ? "reverse" : "normal", P.style.animationDirection = xe, F.style.animationDirection = xe, M.style.animationDirection = xe, x.style.animationDirection = xe, true);
      }
    };
    r.waitFor > 0 || r.waitFor === "transitionend" || r.waitFor === Object(r.waitFor) && typeof r.waitFor.then == "function" ? (r.waitFor > 0 ? new Promise((pe) => setTimeout(pe, r.waitFor)) : r.waitFor === "transitionend" ? new Promise((pe) => {
      const Q = () => {
        M !== null && (clearTimeout(M), M = null), x && (x.removeEventListener("transitionend", Q), x.removeEventListener("transitioncancel", Q)), pe();
      };
      let M = setTimeout(Q, 400);
      x.addEventListener("transitionend", Q), x.addEventListener("transitioncancel", Q);
    }) : r.waitFor).then(W).catch(() => {
      typeof x.qMorphCancel == "function" && x.qMorphCancel();
    }) : W();
  };
  return typeof e.onToggle == "function" && e.onToggle(), requestAnimationFrame(T), (x) => t(x);
}
var Io = {}, aw = ["duration", "delay", "easing", "fill", "classes", "style", "duration", "resize", "useCSS", "hideFromClone", "keepToClone", "tween", "tweenFromOpacity", "tweenToOpacity", "waitFor", "onEnd"], rw = ["resize", "useCSS", "hideFromClone", "keepToClone", "tween"];
function sa(e, t) {
  e.clsAction !== t && (e.clsAction = t, e.el.classList[t]("q-morph--invisible"));
}
function jh(e) {
  if (e.animating === true || e.queue.length < 2) return;
  const [t, n] = e.queue;
  e.animating = true, t.animating = true, n.animating = true, sa(t, "remove"), sa(n, "remove");
  const l = lw({ from: t.el, to: n.el, onToggle() {
    sa(t, "add"), sa(n, "remove");
  }, ...n.opts, onEnd(a, r) {
    var _a2, _b2;
    (_b2 = (_a2 = n.opts).onEnd) == null ? void 0 : _b2.call(_a2, a, r), r !== true && (t.animating = false, n.animating = false, e.animating = false, e.cancel = void 0, e.queue.shift(), jh(e));
  } });
  e.cancel = () => {
    l(true), e.cancel = void 0;
  };
}
function Uh(e, t) {
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
    const n = Io[t.group];
    n === void 0 ? (Io[t.group] = { name: t.group, model: e, queue: [t], animating: false }, sa(t, "remove")) : n.model !== e && (n.model = e, n.queue.push(t), n.animating === false && n.queue.length === 2 && jh(n));
    return;
  }
  t.animating === false && sa(t, "add");
}
function Xd(e, t) {
  let n;
  Object(t) === t ? (n = "" + t.model, iw(t, e), Uh(t, e)) : n = "" + t, n !== e.model ? (e.model = n, uw(n, e)) : e.animating === false && e.clsAction !== void 0 && e.el.classList[e.clsAction]("q-morph--invisible");
}
An({ name: "morph", mounted(e, t) {
  const n = { el: e, animating: false, opts: {} };
  Uh(t.modifiers, n), ow(t.arg, n), Xd(n, t.value), e.__qmorph = n;
}, updated(e, t) {
  Xd(e.__qmorph, t.value);
}, beforeUnmount(e) {
  var _a2;
  const t = e.__qmorph, n = Io[t.group];
  n !== void 0 && n.queue.indexOf(t) !== -1 && (n.queue = n.queue.filter((a) => a !== t), n.queue.length === 0 && ((_a2 = n.cancel) == null ? void 0 : _a2.call(n), delete Io[t.group])), t.clsAction === "add" && e.classList.remove("q-morph--invisible"), delete e.__qmorph;
} });
var sw = { childList: true, subtree: true, attributes: true, characterData: true, attributeOldValue: true, characterDataOldValue: true };
function Zd(e, t, n) {
  var _a2;
  t.handler = n, (_a2 = t.observer) == null ? void 0 : _a2.disconnect(), t.observer = new MutationObserver((l) => {
    typeof t.handler == "function" && (t.handler(l) === false || t.once === true) && Qh(e);
  }), t.observer.observe(e, t.opts);
}
function Qh(e) {
  var _a2;
  const t = e.__qmutation;
  t !== void 0 && ((_a2 = t.observer) == null ? void 0 : _a2.disconnect(), delete e.__qmutation);
}
An({ name: "mutation", mounted(e, { modifiers: { once: t, ...n }, value: l }) {
  const a = { once: t, opts: Object.keys(n).length === 0 ? sw : n };
  Zd(e, a, l), e.__qmutation = a;
}, updated(e, { oldValue: t, value: n }) {
  const l = e.__qmutation;
  l !== void 0 && t !== n && Zd(e, l, n);
}, beforeUnmount: Qh });
var { passive: zo } = dt;
function Jd(e, { value: t, oldValue: n }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, zo);
    return;
  }
  e.handler = t, typeof n != "function" && (e.scrollTarget.addEventListener("scroll", e.scroll, zo), e.scroll());
}
An({ name: "scroll-fire", mounted(e, t) {
  const n = { scrollTarget: Vn(e), scroll: Ea(() => {
    let l, a;
    n.scrollTarget === window ? (a = e.getBoundingClientRect().bottom, l = window.innerHeight) : (a = To(e).top + Sa(e), l = To(n.scrollTarget).top + Sa(n.scrollTarget)), a > 0 && a < l && (n.scrollTarget.removeEventListener("scroll", n.scroll, zo), n.handler(e));
  }, 25) };
  Jd(n, t), e.__qscrollfire = n;
}, updated(e, t) {
  t.value !== t.oldValue && Jd(e.__qscrollfire, t);
}, beforeUnmount(e) {
  const t = e.__qscrollfire;
  t.scrollTarget.removeEventListener("scroll", t.scroll, zo), t.scroll.cancel(), delete e.__qscrollfire;
} });
function ef(e, { value: t, oldValue: n }) {
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
  ef(n, t), e.__qscroll = n;
}, updated(e, t) {
  e.__qscroll !== void 0 && t.oldValue !== t.value && ef(e.__qscroll, t);
}, beforeUnmount(e) {
  const t = e.__qscroll;
  t.scrollTarget.removeEventListener("scroll", t.scroll, dt.passive), delete e.__qscroll;
} });
An({ name: "touch-hold", beforeMount(e, t) {
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
var Kh = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] }, cw = new RegExp(`^([\\d+]+|${Object.keys(Kh).join("|")})$`, "i");
function dw(e, t) {
  const { top: n, left: l } = en(e);
  return Math.abs(l - t.left) >= 7 || Math.abs(n - t.top) >= 7;
}
An({ name: "touch-repeat", beforeMount(e, { modifiers: t, value: n, arg: l }) {
  const a = Object.keys(t).reduce((u, c) => {
    if (cw.test(c) === true) {
      const s = isNaN(parseInt(c, 10)) ? Kh[c.toLowerCase()] : parseInt(c, 10);
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
    function v(m) {
      i.styleCleanup = void 0, document.documentElement.style.cursor = "";
      const g = () => {
        document.body.classList.remove("non-selectable");
      };
      m === true ? (Mn(), setTimeout(g, 10)) : g();
    }
    ze.is.mobile === true && (document.body.classList.add("non-selectable"), Mn(), i.styleCleanup = v), i.event = { touch: c !== true && s !== true, mouse: c === true, keyboard: s === true, startTime: Date.now(), repeatCount: 0 };
    const h = () => {
      if (i.timer = void 0, i.event === void 0) return;
      i.event.repeatCount === 0 && (i.event.evt = u, s === true ? i.event.keyCode = u.keyCode : i.event.position = en(u), ze.is.mobile !== true && (document.documentElement.style.cursor = "pointer", document.body.classList.add("non-selectable"), Mn(), i.styleCleanup = v)), i.event.duration = Date.now() - i.event.startTime, i.event.repeatCount += 1, i.handler(i.event);
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
function Wh() {
  return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || null;
}
function Yh() {
  const e = Qt.activeEl = Qt.isActive === false ? null : Wh();
  Qy(e === null || e === document.documentElement ? document.body : e);
}
function bw() {
  Qt.isActive = Qt.isActive === false, Yh();
}
function tf(e, t) {
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
  return t === n ? Promise.resolve() : (n !== null && t.contains(n) === true ? Qt.exit() : Promise.resolve()).finally(() => tf(t, Na.request));
}, exit() {
  return Qt.isActive === true ? tf(document, Na.exit) : Promise.resolve();
}, toggle(e) {
  return Qt.isActive === true ? Qt.exit() : Qt.request(e);
} }), Na.exit = ["exitFullscreen", "msExitFullscreen", "mozCancelFullScreen", "webkitExitFullscreen"].find((e) => document[e]), Qt.isActive = !!Wh(), Qt.isActive === true && Yh(), ["onfullscreenchange", "onmsfullscreenchange", "onwebkitfullscreenchange"].forEach((e) => {
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
ve({ name: "BottomSheetComponent", props: { ...nt, title: String, message: String, actions: Array, grid: Boolean, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  const { proxy: n } = Se(), l = lt(e, n.$q), a = U(null);
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
      return m.label === void 0 ? d(Ul, { class: "col-all", dark: l.value }) : d("div", { class: ["q-bottom-sheet__item q-hoverable q-focusable cursor-pointer relative-position", m.class], style: m.style, tabindex: 0, role: "listitem", onClick() {
        i(m);
      }, onKeyup(w) {
        w.keyCode === 13 && i(m);
      } }, [d("div", { class: "q-focus-helper" }), m.icon ? d(et, { name: m.icon, color: m.color }) : g ? d("img", { class: m.avatar ? "q-bottom-sheet__avatar" : "", src: g }) : d("div", { class: "q-bottom-sheet__empty-icon" }), d("div", m.label)]);
    });
  }
  function s() {
    return e.actions.map((m) => {
      const g = m.avatar || m.img;
      return m.label === void 0 ? d(Ul, { spaced: true, dark: l.value }) : d(Ca, { class: ["q-bottom-sheet__item", m.classes], style: m.style, tabindex: 0, clickable: true, dark: l.value, onClick() {
        i(m);
      } }, () => [d(mn, { avatar: true }, () => m.icon ? d(et, { name: m.icon, color: m.color }) : g ? d("img", { class: m.avatar ? "q-bottom-sheet__avatar" : "", src: g }) : null), d(mn, () => m.label)]);
    });
  }
  function v() {
    const m = [];
    return e.title && m.push(d(Ll, { class: "q-dialog__title" }, () => e.title)), e.message && m.push(d(Ll, { class: "q-dialog__message" }, () => e.message)), m.push(e.grid === true ? d("div", { class: "row items-stretch justify-start", role: "list" }, c()) : d("div", { role: "list" }, s())), m;
  }
  function h() {
    return [d(Fm, { class: [`q-bottom-sheet q-bottom-sheet--${e.grid === true ? "grid" : "list"}` + (l.value === true ? " q-bottom-sheet--dark q-dark" : ""), e.cardClass], style: e.cardStyle }, v)];
  }
  return Object.assign(n, { show: r, hide: o }), () => d(ci, { ref: a, position: "bottom", onHide: u }, h);
} });
function Gh(e, t) {
  for (const n in t) n !== "spinner" && Object(t[n]) === t[n] ? (e[n] = Object(e[n]) !== e[n] ? {} : { ...e[n] }, Gh(e[n], t[n])) : e[n] = t[n];
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
    const c = U(null), s = Ar(false, "dialog"), v = (p) => {
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
          const { class: y, style: b, ..._ } = p;
          y !== void 0 && (_.cardClass = y), b !== void 0 && (_.cardStyle = b), Gh(r, _);
        }
        i.$forceUpdate();
      }
      return g;
    } }, w = (p) => {
      u = true, h.forEach((y) => {
        y(p);
      });
    }, S = () => {
      q.unmount(s), ks(s), q = null, i = null, u !== true && m.forEach((p) => {
        p();
      });
    };
    let q = li({ name: "QGlobalDialog", setup: () => () => d(a, { ...r, ref: c, onOk: w, onHide: S, onVnodeMounted(...p) {
      typeof r.onVnodeMounted == "function" && r.onVnodeMounted(...p), Ge(() => v("show"));
    } }) }, n);
    return i = q.mount(s), g;
  };
}
function Xh(e) {
  return encodeURIComponent(e);
}
function Zh(e) {
  return decodeURIComponent(e);
}
function _w(e) {
  return Xh(e === Object(e) ? JSON.stringify(e) : "" + e);
}
function ww(e) {
  if (e === "") return e;
  e.indexOf('"') === 0 && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), e = Zh(e.replace(/\+/g, " "));
  try {
    const t = JSON.parse(e);
    (t === Object(t) || Array.isArray(t) === true) && (e = t);
  } catch {
  }
  return e;
}
function Jh(e) {
  const t = /* @__PURE__ */ new Date();
  return t.setMilliseconds(t.getMilliseconds() + e), t.toUTCString();
}
function Sw(e) {
  let t = 0;
  const n = e.match(/(\d+)d/), l = e.match(/(\d+)h/), a = e.match(/(\d+)m/), r = e.match(/(\d+)s/);
  return n && (t += n[1] * 864e5), l && (t += l[1] * 36e5), a && (t += a[1] * 6e4), r && (t += r[1] * 1e3), t === 0 ? e : Jh(t);
}
function eg(e, t, n = {}, l) {
  let a, r;
  n.expires !== void 0 && (Object.prototype.toString.call(n.expires) === "[object Date]" ? a = n.expires.toUTCString() : typeof n.expires == "string" ? a = Sw(n.expires) : (r = parseFloat(n.expires), a = isNaN(r) === false ? Jh(r * 864e5) : n.expires));
  const o = `${Xh(e)}=${_w(t)}`, i = [o, a !== void 0 ? "; Expires=" + a : "", n.path ? "; Path=" + n.path : "", n.domain ? "; Domain=" + n.domain : "", n.sameSite ? "; SameSite=" + n.sameSite : "", n.httpOnly ? "; HttpOnly" : "", n.secure ? "; Secure" : "", n.other ? "; " + n.other : ""].join("");
  if (l) {
    l.req.qCookies ? l.req.qCookies.push(i) : l.req.qCookies = [i], l.res.setHeader("Set-Cookie", l.req.qCookies);
    let u = l.req.headers.cookie || "";
    if (a !== void 0 && r < 0) {
      const c = Do(e, l);
      c !== void 0 && (u = u.replace(`${e}=${c}; `, "").replace(`; ${e}=${c}`, "").replace(`${e}=${c}`, ""));
    } else u = u ? `${o}; ${u}` : i;
    l.req.headers.cookie = u;
  } else document.cookie = i;
}
function Do(e, t) {
  const n = t ? t.req.headers : document, l = n.cookie ? n.cookie.split("; ") : [], a = l.length;
  let r = e ? null : {}, o = 0, i, u, c;
  for (; o < a; o++) if (i = l[o].split("="), u = Zh(i.shift()), c = i.join("="), !e) r[u] = c;
  else if (e === u) {
    r = ww(c);
    break;
  }
  return r;
}
function xw(e, t, n) {
  eg(e, "", { expires: -1, ...t }, n);
}
function Cw(e, t) {
  return Do(e, t) !== null;
}
function tg(e) {
  return { get: (t) => Do(t, e), set: (t, n, l) => eg(t, n, l, e), has: (t) => Cw(t, e), remove: (t, n) => xw(t, n, e), getAll: () => Do(null, e) };
}
var js = { install({ $q: e, ssrContext: t }) {
  e.cookies = this;
} };
__QUASAR_SSR__ && (js.parseSSR = (e) => {
  if (e !== void 0) return tg(e);
});
Object.assign(js, tg());
var kw = js, qw = ve({ name: "DialogPluginComponent", props: { ...nt, title: String, message: String, prompt: Object, options: Object, progress: [Boolean, Object], html: Boolean, ok: { type: [String, Object, Boolean], default: true }, cancel: [String, Object, Boolean], focus: { type: String, default: "ok", validator: (e) => ["ok", "cancel", "none"].includes(e) }, stackButtons: Boolean, color: String, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  const { proxy: n } = Se(), { $q: l } = n, a = lt(e, l), r = U(null), o = U(e.prompt !== void 0 ? e.prompt.model : e.options !== void 0 ? e.options.model : void 0), i = f(() => "q-dialog-plugin" + (a.value === true ? " q-dialog-plugin--dark q-dark" : "") + (e.progress !== false ? " q-dialog-plugin--progress" : "")), u = f(() => e.color || (a.value === true ? "amber" : "primary")), c = f(() => e.progress === false ? null : Rt(e.progress) === true ? { component: e.progress.spinner || _n, props: { color: e.progress.color || u.value } } : { component: _n, props: { color: u.value } }), s = f(() => e.prompt !== void 0 || e.options !== void 0), v = f(() => {
    if (s.value !== true) return {};
    const { model: C, isValid: D, items: H, ...j } = e.prompt !== void 0 ? e.prompt : e.options;
    return j;
  }), h = f(() => Rt(e.ok) === true || e.ok === true ? l.lang.label.ok : e.ok), m = f(() => Rt(e.cancel) === true || e.cancel === true ? l.lang.label.cancel : e.cancel), g = f(() => e.prompt !== void 0 ? e.prompt.isValid !== void 0 && e.prompt.isValid(o.value) !== true : e.options !== void 0 ? e.options.isValid !== void 0 && e.options.isValid(o.value) !== true : false), w = f(() => ({ color: u.value, label: h.value, ripple: false, disable: g.value, ...Rt(e.ok) === true ? e.ok : { flat: true }, "data-autofocus": e.focus === "ok" && s.value !== true || void 0, onClick: y })), S = f(() => ({ color: u.value, label: m.value, ripple: false, ...Rt(e.cancel) === true ? e.cancel : { flat: true }, "data-autofocus": e.focus === "cancel" && s.value !== true || void 0, onClick: b }));
  he(() => e.prompt && e.prompt.model, E), he(() => e.options && e.options.model, E);
  function q() {
    r.value.show();
  }
  function p() {
    r.value.hide();
  }
  function y() {
    t("ok", Ye(o.value)), p();
  }
  function b() {
    p();
  }
  function _() {
    t("hide");
  }
  function E(C) {
    o.value = C;
  }
  function A(C) {
    g.value !== true && e.prompt.type !== "textarea" && yn(C, 13) === true && y();
  }
  function V(C, D) {
    return e.html === true ? d(Ll, { class: C, innerHTML: D }) : d(Ll, { class: C }, () => D);
  }
  function L() {
    return [d(Mh, { color: u.value, dense: true, autofocus: true, dark: a.value, ...v.value, modelValue: o.value, "onUpdate:modelValue": E, onKeyup: A })];
  }
  function P() {
    return [d(R1, { color: u.value, options: e.options.items, dark: a.value, ...v.value, modelValue: o.value, "onUpdate:modelValue": E })];
  }
  function F() {
    const C = [];
    return e.cancel && C.push(d(Ze, S.value)), e.ok && C.push(d(Ze, w.value)), d(cp, { class: e.stackButtons === true ? "items-end" : "", vertical: e.stackButtons, align: "right" }, () => C);
  }
  function T() {
    const C = [];
    return e.title && C.push(V("q-dialog__title", e.title)), e.progress !== false && C.push(d(Ll, { class: "q-dialog__progress" }, () => d(c.value.component, c.value.props))), e.message && C.push(V("q-dialog__message", e.message)), e.prompt !== void 0 ? C.push(d(Ll, { class: "scroll q-dialog-plugin__form" }, L)) : e.options !== void 0 && C.push(d(Ul, { dark: a.value }), d(Ll, { class: "scroll q-dialog-plugin__form" }, P), d(Ul, { dark: a.value })), (e.ok || e.cancel) && C.push(F()), C;
  }
  function x() {
    return [d(Fm, { class: [i.value, e.cardClass], style: e.cardStyle, dark: a.value }, T)];
  }
  return Object.assign(n, { show: q, hide: p }), () => d(ci, { ref: r, onHide: _ }, x);
} }), Tw = { install({ $q: e, parentApp: t }) {
  e.dialog = this.create = pw(qw, true, t);
} }, ra, au, nf = 0, $l = null, zt = {}, Ol = {}, ng = { group: "__default_quasar_group__", delay: 0, message: false, html: false, spinnerSize: 80, spinnerColor: "", messageColor: "", backgroundColor: "", boxClass: "", spinner: _n, customClass: "" }, lg = { ...ng };
function Mw(e) {
  if ((e == null ? void 0 : e.group) !== void 0 && Ol[e.group] !== void 0) return Object.assign(Ol[e.group], e);
  const t = Rt(e) === true && e.ignoreDefaults === true ? { ...ng, ...e } : { ...lg, ...e };
  return Ol[t.group] = t, t;
}
var Sn = Sl({ isActive: false }, { show(e) {
  zt = Mw(e);
  const { group: t } = zt;
  return Sn.isActive = true, ra !== void 0 ? (zt.uid = nf, au.$forceUpdate()) : (zt.uid = ++nf, $l !== null && clearTimeout($l), $l = setTimeout(() => {
    $l = null;
    const n = Ar("q-loading");
    ra = li({ name: "QLoading", setup() {
      ft(() => {
        Iu(true);
      });
      function l() {
        Sn.isActive !== true && ra !== void 0 && (Iu(false), ra.unmount(n), ks(n), ra = void 0, au = void 0);
      }
      function a() {
        if (Sn.isActive !== true) return null;
        const r = [d(zt.spinner, { class: "q-loading__spinner", color: zt.spinnerColor, size: zt.spinnerSize })];
        return zt.message && r.push(d("div", { class: "q-loading__message" + (zt.messageColor ? ` text-${zt.messageColor}` : ""), [zt.html === true ? "innerHTML" : "textContent"]: zt.message })), d("div", { class: "q-loading fullscreen flex flex-center z-max " + zt.customClass.trim(), key: zt.uid }, [d("div", { class: "q-loading__backdrop" + (zt.backgroundColor ? ` bg-${zt.backgroundColor}` : "") }), d("div", { class: "q-loading__box column items-center " + zt.boxClass }, r)]);
      }
      return () => d(Ft, { name: "q-transition--fade", appear: true, onAfterLeave: l }, a);
    } }, Sn.__parentApp), au = ra.mount(n);
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
  Rt(e) === true && Object.assign(lg, e);
}, install({ $q: e, parentApp: t }) {
  e.loading = this, Sn.__parentApp = t, e.config.loading !== void 0 && this.setDefaults(e.config.loading);
} }), Ew = Sn, eo = U(null), lf = Sl({ isActive: false }, { start: St, stop: St, increment: St, setDefaults: St, install({ $q: e, parentApp: t }) {
  if (e.loadingBar = this, this.__installed === true) {
    e.config.loadingBar !== void 0 && this.setDefaults(e.config.loadingBar);
    return;
  }
  const n = U(e.config.loadingBar !== void 0 ? { ...e.config.loadingBar } : {});
  function l() {
    lf.isActive = true;
  }
  function a() {
    lf.isActive = false;
  }
  const r = Ar("q-loading-bar");
  li({ name: "LoadingBar", devtools: { hide: true }, setup: () => () => d(xy, { ...n.value, onStart: l, onStop: a, ref: eo }) }, t).mount(r), Object.assign(this, { start(o) {
    eo.value.start(o);
  }, stop() {
    eo.value.stop();
  }, increment() {
    eo.value.increment.apply(null, arguments);
  }, setDefaults(o) {
    Rt(o) === true && Object.assign(n.value, o);
  } });
} }), $w = 0, so = {}, co = {}, xn = {}, ag = {}, Aw = /^\s*$/, rg = [], Rw = [void 0, null, true, false, ""], Us = ["top-left", "top-right", "bottom-left", "bottom-right", "top", "bottom", "left", "right", "center"], Pw = ["top-left", "top-right", "bottom-left", "bottom-right"], Ya = { positive: { icon: (e) => e.iconSet.type.positive, color: "positive" }, negative: { icon: (e) => e.iconSet.type.negative, color: "negative" }, warning: { icon: (e) => e.iconSet.type.warning, color: "warning", textColor: "dark" }, info: { icon: (e) => e.iconSet.type.info, color: "info" }, ongoing: { group: false, timeout: 0, spinner: true, color: "grey-8" } };
function og(e, t, n) {
  var _a2;
  if (!e) return Ha("parameter required");
  let l;
  const a = { textColor: "white" };
  if (e.ignoreDefaults !== true && Object.assign(a, so), Rt(e) === false && (a.type && Object.assign(a, Ya[a.type]), e = { message: e }), Object.assign(a, Ya[e.type || a.type], e), typeof a.icon == "function" && (a.icon = a.icon(t)), a.spinner ? (a.spinner === true && (a.spinner = _n), a.spinner = Uo(a.spinner)) : a.spinner = false, a.meta = { hasMedia: !!(a.spinner !== false || a.icon || a.avatar), hasText: af(a.message) || af(a.caption) }, a.position) {
    if (Us.includes(a.position) === false) return Ha("wrong position", e);
  } else a.position = "bottom";
  if (Rw.includes(a.timeout) === true) a.timeout = 5e3;
  else {
    const u = Number(a.timeout);
    if (isNaN(u) || u < 0) return Ha("wrong timeout", e);
    a.timeout = Number.isFinite(u) ? u : 0;
  }
  a.timeout === 0 ? a.progress = false : a.progress === true && (a.meta.progressClass = "q-notification__progress" + (a.progressClass ? ` ${a.progressClass}` : ""), a.meta.progressStyle = { animationDuration: `${a.timeout + 1e3}ms` });
  const r = (Array.isArray(e.actions) === true ? e.actions : []).concat(e.ignoreDefaults !== true && Array.isArray(so.actions) === true ? so.actions : []).concat(Array.isArray((_a2 = Ya[e.type]) == null ? void 0 : _a2.actions) === true ? Ya[e.type].actions : []), { closeBtn: o } = a;
  if (o && r.push({ label: typeof o == "string" ? o : t.lang.label.close }), a.actions = r.map(({ handler: u, noDismiss: c, ...s }) => ({ flat: true, ...s, onClick: typeof u == "function" ? () => {
    u(), c !== true && i();
  } : () => {
    i();
  } })), a.multiLine === void 0 && (a.multiLine = a.actions.length > 1), Object.assign(a.meta, { class: `q-notification row items-stretch q-notification--${a.multiLine === true ? "multi-line" : "standard"}` + (a.color !== void 0 ? ` bg-${a.color}` : "") + (a.textColor !== void 0 ? ` text-${a.textColor}` : "") + (a.classes !== void 0 ? ` ${a.classes}` : ""), wrapperClass: "q-notification__wrapper col relative-position border-radius-inherit " + (a.multiLine === true ? "column no-wrap justify-center" : "row items-center"), contentClass: "q-notification__content row items-center" + (a.multiLine === true ? "" : " col"), leftClass: a.meta.hasText === true ? "additional" : "single", attrs: { role: "alert", ...a.attrs } }), a.group === false ? (a.group = void 0, a.meta.group = void 0) : ((a.group === void 0 || a.group === true) && (a.group = [a.message, a.caption, a.multiline].concat(a.actions.map((u) => `${u.label}*${u.icon}`)).join("|")), a.meta.group = a.group + "|" + a.position), a.actions.length === 0 ? a.actions = void 0 : a.meta.actionsClass = "q-notification__actions row items-center " + (a.multiLine === true ? "justify-end" : "col-auto") + (a.meta.hasMedia === true ? " q-notification__actions--with-media" : ""), n !== void 0) {
    n.notif.meta.timer && (clearTimeout(n.notif.meta.timer), n.notif.meta.timer = void 0), a.meta.uid = n.notif.meta.uid;
    const u = xn[a.position].value.indexOf(n.notif);
    xn[a.position].value[u] = a;
  } else {
    const u = co[a.meta.group];
    if (u === void 0) {
      if (a.meta.uid = $w++, a.meta.badge = 1, ["left", "right", "center"].indexOf(a.position) !== -1) xn[a.position].value.splice(Math.floor(xn[a.position].value.length / 2), 0, a);
      else {
        const c = a.position.indexOf("top") !== -1 ? "unshift" : "push";
        xn[a.position].value[c](a);
      }
      a.group !== void 0 && (co[a.meta.group] = a);
    } else {
      if (u.meta.timer && (clearTimeout(u.meta.timer), u.meta.timer = void 0), a.badgePosition !== void 0) {
        if (Pw.includes(a.badgePosition) === false) return Ha("wrong badgePosition", e);
      } else a.badgePosition = `top-${a.position.indexOf("left") !== -1 ? "right" : "left"}`;
      a.meta.uid = u.meta.uid, a.meta.badge = u.meta.badge + 1, a.meta.badgeClass = `q-notification__badge q-notification__badge--${a.badgePosition}` + (a.badgeColor !== void 0 ? ` bg-${a.badgeColor}` : "") + (a.badgeTextColor !== void 0 ? ` text-${a.badgeTextColor}` : "") + (a.badgeClass ? ` ${a.badgeClass}` : "");
      const c = xn[a.position].value.indexOf(u);
      xn[a.position].value[c] = co[a.meta.group] = a;
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
      og(c, t, l);
    }
  };
}
function Lw(e) {
  e.meta.timer && (clearTimeout(e.meta.timer), e.meta.timer = void 0);
  const t = xn[e.position].value.indexOf(e);
  if (t !== -1) {
    e.group !== void 0 && delete co[e.meta.group];
    const n = rg["" + e.meta.uid];
    if (n) {
      const { width: l, height: a } = getComputedStyle(n);
      n.style.left = `${n.offsetLeft}px`, n.style.width = l, n.style.height = a;
    }
    xn[e.position].value.splice(t, 1), typeof e.onDismiss == "function" && e.onDismiss();
  }
}
function af(e) {
  return e != null && Aw.test(e) !== true;
}
function Ha(e, t) {
  return console.error(`Notify: ${e}`, t), false;
}
function Bw() {
  return ve({ name: "QNotifications", devtools: { hide: true }, setup() {
    return () => d("div", { class: "q-notifications" }, Us.map((e) => d(Hb, { key: e, class: ag[e], tag: "div", name: `q-notification--${e}` }, () => xn[e].value.map((t) => {
      const n = t.meta, l = [];
      if (n.hasMedia === true && (t.spinner !== false ? l.push(d(t.spinner, { class: "q-notification__spinner q-notification__spinner--" + n.leftClass, color: t.spinnerColor, size: t.spinnerSize })) : t.icon ? l.push(d(et, { class: "q-notification__icon q-notification__icon--" + n.leftClass, name: t.icon, color: t.iconColor, size: t.iconSize, role: "img" })) : t.avatar && l.push(d(mm, { class: "q-notification__avatar q-notification__avatar--" + n.leftClass }, () => d("img", { src: t.avatar, "aria-hidden": "true" })))), n.hasText === true) {
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
        rg["" + n.uid] = r;
      }, key: n.uid, class: n.class, ...n.attrs }, [d("div", { class: n.wrapperClass }, a)]);
    }))));
  } });
}
var Fw = { setDefaults(e) {
  Rt(e) === true && Object.assign(so, e);
}, registerType(e, t) {
  Rt(t) === true && (Ya[e] = t);
}, install({ $q: e, parentApp: t }) {
  if (e.notify = this.create = (n) => og(n, e), e.notify.setDefaults = this.setDefaults, e.notify.registerType = this.registerType, e.config.notify !== void 0 && this.setDefaults(e.config.notify), this.__installed !== true) {
    Us.forEach((l) => {
      xn[l] = U([]);
      const a = ["left", "center", "right"].includes(l) === true ? "center" : l.indexOf("top") !== -1 ? "top" : "bottom", r = l.indexOf("left") !== -1 ? "start" : l.indexOf("right") !== -1 ? "end" : "center", o = ["left", "right"].includes(l) ? `items-${l === "left" ? "start" : "end"} justify-center` : l === "center" ? "flex-center" : `items-${r}`;
      ag[l] = `q-notifications__list q-notifications__list--${a} fixed column no-wrap ${o}`;
    });
    const n = Ar("q-notify");
    li(Bw(), t).mount(n);
  }
} };
function Ow(e) {
  return Mu(e) === true ? "__q_date|" + e.getTime() : hy(e) === true ? "__q_expr|" + e.source : typeof e == "number" ? "__q_numb|" + e : typeof e == "boolean" ? "__q_bool|" + (e ? "1" : "0") : typeof e == "string" ? "__q_strn|" + e : typeof e == "function" ? "__q_strn|" + e.toString() : e === Object(e) ? "__q_objt|" + JSON.stringify(e) : e;
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
function ig() {
  const e = () => null;
  return { has: () => false, hasItem: () => false, getLength: () => 0, getItem: e, getIndex: e, getKey: e, getAll: () => {
  }, getAllKeys: () => [], set: St, setItem: St, remove: St, removeItem: St, clear: St, isEmpty: () => true };
}
function ug(e) {
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
var sg = ze.has.webStorage === false ? ig() : ug("local"), Iw = { install({ $q: e }) {
  e.localStorage = sg;
} };
Object.assign(Iw, sg);
var cg = ze.has.webStorage === false ? ig() : ug("session"), zw = { install({ $q: e }) {
  e.sessionStorage = cg;
} };
Object.assign(zw, cg);
var Dw = ["ok", "hide"];
Hh(Dw);
function Nw() {
  return Tt(tm);
}
var Hw = { version: "2.18.1", install: by, lang: ni, iconSet: em };
function jw(e, t) {
  const n = ds("router-view");
  return Yn(), Pl(n, { class: "view" });
}
const dg = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, a] of t) n[l] = a;
  return n;
}, Uw = {}, Qw = dg(Uw, [["render", jw]]), Kw = "M10,2C8.18,2 6.47,2.5 5,3.35C8,5.08 10,8.3 10,12C10,15.7 8,18.92 5,20.65C6.47,21.5 8.18,22 10,22A10,10 0 0,0 20,12A10,10 0 0,0 10,2Z", Ww = "M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z", Yw = /* @__PURE__ */ Ta({ __name: "Quasar", setup(e) {
  const t = Nw();
  let n = U(false), l = U(false), a = U(true);
  return (r, o) => {
    const i = ds("router-view"), u = $0("ripple");
    return Yn(), Pl(Ie(k1), { view: "hHh LpR fFf" }, { default: Lt(() => [Je(Ie(f1), { class: "bg-primary text-white", elevated: "" }, { default: Lt(() => [Je(Ie(V_), null, { default: Lt(() => [Je(Ie(Ze), { dense: "", flat: "", round: "", icon: "menu", onClick: o[0] || (o[0] = (c) => pt(n) ? n.value = !Ie(n) : n = !Ie(n)) }), Je(Ie(I_), null, { default: Lt(() => [Je(Ie(mm), null, { default: Lt(() => o[10] || (o[10] = [Bl("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" }, null, -1)])), _: 1 }), o[11] || (o[11] = ua("\xA0Title"))]), _: 1 }), Ie(t).dark.isActive ? (Yn(), Pl(Ie(Ze), { key: 0, dense: "", flat: "", round: "", icon: Ie(Ww), onClick: o[1] || (o[1] = (c) => Ie(t).dark.set(false)) }, null, 8, ["icon"])) : gc("", true), Ie(t).dark.isActive ? gc("", true) : (Yn(), Pl(Ie(Ze), { key: 1, dense: "", flat: "", round: "", icon: Ie(Kw), onClick: o[2] || (o[2] = (c) => Ie(t).dark.set(true)) }, null, 8, ["icon"])), Je(Ie(Ze), { dense: "", flat: "", round: "", icon: "menu", onClick: o[3] || (o[3] = (c) => pt(l) ? l.value = !Ie(l) : l = !Ie(l)) })]), _: 1 }), Je(Ie(Ou), { align: "left" }, { default: Lt(() => [Je(Ie(lu), { to: "/page1", label: "Page One" }), Je(Ie(lu), { to: "/page2", label: "Page Two" }), Je(Ie(lu), { to: "/page3", label: "Page Three" })]), _: 1 })]), _: 1 }), Je(Ie(Sd), { modelValue: Ie(n), "onUpdate:modelValue": o[8] || (o[8] = (c) => pt(n) ? n.value = c : n = c), side: "left", bordered: "", mini: Ie(a), overlay: "" }, { default: Lt(() => [Je(Ie(O1), { class: "fit" }, { default: Lt(() => [Je(Ie($h), { class: "menu-list padding" }, { default: Lt(() => [sn((Yn(), Pl(Ie(Ca), { clickable: "", onMouseover: o[4] || (o[4] = (c) => pt(a) ? a.value = false : a = false), onMouseout: o[5] || (o[5] = (c) => pt(a) ? a.value = true : a = true) }, { default: Lt(() => [Je(Ie(mn), { avatar: "" }, { default: Lt(() => [Je(Ie(et), { name: "inbox" })]), _: 1 }), Je(Ie(mn), null, { default: Lt(() => o[12] || (o[12] = [ua("inbox")])), _: 1 })]), _: 1 })), [[u]]), sn((Yn(), Pl(Ie(Ca), { clickable: "", onMouseover: o[6] || (o[6] = (c) => pt(a) ? a.value = false : a = false), onMouseout: o[7] || (o[7] = (c) => pt(a) ? a.value = true : a = true) }, { default: Lt(() => [Je(Ie(mn), { avatar: "" }, { default: Lt(() => [Je(Ie(et), { name: "login" })]), _: 1 }), Je(Ie(mn), null, { default: Lt(() => o[13] || (o[13] = [ua("login")])), _: 1 })]), _: 1 })), [[u]])]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["modelValue", "mini"]), Je(Ie(Sd), { modelValue: Ie(l), "onUpdate:modelValue": o[9] || (o[9] = (c) => pt(l) ? l.value = c : l = c), side: "right", bordered: "", overlay: "" }, { default: Lt(() => o[14] || (o[14] = [ua("right")])), _: 1 }, 8, ["modelValue"]), Je(Ie(P1), { class: "fit" }, { default: Lt(() => [Je(i)]), _: 1 })]), _: 1 });
  };
} });
/*!
* vue-router v4.5.0
* (c) 2024 Eduardo San Martin Morote
* @license MIT
*/
const ia = typeof document < "u";
function fg(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Gw(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && fg(e.default);
}
const ut = Object.assign;
function ru(e, t) {
  const n = {};
  for (const l in t) {
    const a = t[l];
    n[l] = $n(a) ? a.map(e) : e(a);
  }
  return n;
}
const sr = () => {
}, $n = Array.isArray, vg = /#/g, Xw = /&/g, Zw = /\//g, Jw = /=/g, eS = /\?/g, mg = /\+/g, tS = /%5B/g, nS = /%5D/g, hg = /%5E/g, lS = /%60/g, gg = /%7B/g, aS = /%7C/g, bg = /%7D/g, rS = /%20/g;
function Qs(e) {
  return encodeURI("" + e).replace(aS, "|").replace(tS, "[").replace(nS, "]");
}
function oS(e) {
  return Qs(e).replace(gg, "{").replace(bg, "}").replace(hg, "^");
}
function ju(e) {
  return Qs(e).replace(mg, "%2B").replace(rS, "+").replace(vg, "%23").replace(Xw, "%26").replace(lS, "`").replace(gg, "{").replace(bg, "}").replace(hg, "^");
}
function iS(e) {
  return ju(e).replace(Jw, "%3D");
}
function uS(e) {
  return Qs(e).replace(vg, "%23").replace(eS, "%3F");
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
function ou(e, t, n = "/") {
  let l, a = {}, r = "", o = "";
  const i = t.indexOf("#");
  let u = t.indexOf("?");
  return i < u && i >= 0 && (u = -1), u > -1 && (l = t.slice(0, u), r = t.slice(u + 1, i > -1 ? i : t.length), a = e(r)), i > -1 && (l = l || t.slice(0, i), o = t.slice(i, t.length)), l = hS(l ?? t, n), { fullPath: l + (r && "?") + r + o, path: l, query: a, hash: xr(o) };
}
function fS(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function rf(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function vS(e, t, n) {
  const l = t.matched.length - 1, a = n.matched.length - 1;
  return l > -1 && l === a && ka(t.matched[l], n.matched[a]) && yg(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function ka(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function yg(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (const n in e) if (!mS(e[n], t[n])) return false;
  return true;
}
function mS(e, t) {
  return $n(e) ? of(e, t) : $n(t) ? of(t, e) : e === t;
}
function of(e, t) {
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
  if (!e) if (ia) {
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
function uf(e, t) {
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
function pg(e, t) {
  const { pathname: n, search: l, hash: a } = t, r = e.indexOf("#");
  if (r > -1) {
    let i = a.includes(e.slice(r)) ? e.slice(r).length : 1, u = a.slice(i);
    return u[0] !== "/" && (u = "/" + u), rf(u, "");
  }
  return rf(n, e) + l + a;
}
function CS(e, t, n, l) {
  let a = [], r = [], o = null;
  const i = ({ state: h }) => {
    const m = pg(e, location), g = n.value, w = t.value;
    let S = 0;
    if (h) {
      if (n.value = m, t.value = h, o && o === g) {
        o = null;
        return;
      }
      S = w ? h.position - w.position : 0;
    } else l(m);
    a.forEach((q) => {
      q(n.value, g, { delta: S, type: Cr.pop, direction: S ? S > 0 ? cr.forward : cr.back : cr.unknown });
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
function sf(e, t, n, l = false, a = false) {
  return { back: e, current: t, forward: n, replaced: l, position: window.history.length, scroll: a ? hi() : null };
}
function kS(e) {
  const { history: t, location: n } = window, l = { value: pg(e, n) }, a = { value: t.state };
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
    const s = ut({}, t.state, sf(a.value.back, u, a.value.forward, true), c, { position: a.value.position });
    r(u, s, true), l.value = u;
  }
  function i(u, c) {
    const s = ut({}, a.value, t.state, { forward: u, scroll: hi() });
    r(s.current, s, true);
    const v = ut({}, sf(l.value, u, null), { position: s.position + 1 }, c);
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
function _g(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const wg = Symbol("");
var cf;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(cf || (cf = {}));
function qa(e, t) {
  return ut(new Error(), { type: e, [wg]: true }, t);
}
function Hn(e, t) {
  return e instanceof Error && wg in e && (t == null || !!(e.type & t));
}
const df = "[^/]+?", ES = { sensitive: false, strict: false, start: true, end: true }, $S = /[.+*?^${}()[\]/\\]/g;
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
        const { value: g, repeatable: w, optional: S, regexp: q } = h;
        r.push({ name: g, repeatable: w, optional: S });
        const p = q || df;
        if (p !== df) {
          m += 10;
          try {
            new RegExp(`(${p})`);
          } catch (b) {
            throw new Error(`Invalid custom RegExp for param "${g}" (${p}): ` + b.message);
          }
        }
        let y = w ? `((?:${p})(?:/(?:${p}))*)` : `(${p})`;
        v || (y = S && c.length < 2 ? `(?:/${y})` : "/" + y), S && (y += "?"), a += y, m += 20, S && (m += -8), w && (m += -20), p === ".*" && (m += -50);
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
        const { value: g, repeatable: w, optional: S } = m, q = g in c ? c[g] : "";
        if ($n(q) && !w) throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
        const p = $n(q) ? q.join("/") : q;
        if (!p) if (S) h.length < 2 && (s.endsWith("/") ? s = s.slice(0, -1) : v = true);
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
function Sg(e, t) {
  let n = 0;
  const l = e.score, a = t.score;
  for (; n < l.length && n < a.length; ) {
    const r = RS(l[n], a[n]);
    if (r) return r;
    n++;
  }
  if (Math.abs(a.length - l.length) === 1) {
    if (ff(l)) return 1;
    if (ff(a)) return -1;
  }
  return a.length - l.length;
}
function ff(e) {
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
  t = gf({ strict: false, end: true, sensitive: false }, t);
  function a(v) {
    return l.get(v);
  }
  function r(v, h, m) {
    const g = !m, w = mf(v);
    w.aliasOf = m && m.record;
    const S = gf(t, v), q = [w];
    if ("alias" in v) {
      const b = typeof v.alias == "string" ? [v.alias] : v.alias;
      for (const _ of b) q.push(mf(ut({}, w, { components: m ? m.record.components : w.components, path: _, aliasOf: m ? m.record : w })));
    }
    let p, y;
    for (const b of q) {
      const { path: _ } = b;
      if (h && _[0] !== "/") {
        const E = h.record.path, A = E[E.length - 1] === "/" ? "" : "/";
        b.path = h.record.path + (_ && A + _);
      }
      if (p = FS(b, h, S), m ? m.alias.push(p) : (y = y || p, y !== p && y.alias.push(p), g && v.name && !hf(p) && o(v.name)), xg(p) && u(p), w.children) {
        const E = w.children;
        for (let A = 0; A < E.length; A++) r(E[A], p, m && m.children[A]);
      }
      m = m || p;
    }
    return y ? () => {
      o(y);
    } : sr;
  }
  function o(v) {
    if (_g(v)) {
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
    n.splice(h, 0, v), v.record.name && !hf(v) && l.set(v.record.name, v);
  }
  function c(v, h) {
    let m, g = {}, w, S;
    if ("name" in v && v.name) {
      if (m = l.get(v.name), !m) throw qa(1, { location: v });
      S = m.record.name, g = ut(vf(h.params, m.keys.filter((y) => !y.optional).concat(m.parent ? m.parent.keys.filter((y) => y.optional) : []).map((y) => y.name)), v.params && vf(v.params, m.keys.map((y) => y.name))), w = m.stringify(g);
    } else if (v.path != null) w = v.path, m = n.find((y) => y.re.test(w)), m && (g = m.parse(w), S = m.record.name);
    else {
      if (m = h.name ? l.get(h.name) : n.find((y) => y.re.test(h.path)), !m) throw qa(1, { location: v, currentLocation: h });
      S = m.record.name, g = ut({}, h.params, v.params), w = m.stringify(g);
    }
    const q = [];
    let p = m;
    for (; p; ) q.unshift(p.record), p = p.parent;
    return { name: S, path: w, params: g, matched: q, meta: IS(q) };
  }
  e.forEach((v) => r(v));
  function s() {
    n.length = 0, l.clear();
  }
  return { addRoute: r, resolve: c, removeRoute: o, clearRoutes: s, getRoutes: i, getRecordMatcher: a };
}
function vf(e, t) {
  const n = {};
  for (const l of t) l in e && (n[l] = e[l]);
  return n;
}
function mf(e) {
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: VS(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function VS(e) {
  const t = {}, n = e.props || false;
  if ("component" in e) t.default = n;
  else for (const l in e.components) t[l] = typeof n == "object" ? n[l] : n;
  return t;
}
function hf(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function IS(e) {
  return e.reduce((t, n) => ut(t, n.meta), {});
}
function gf(e, t) {
  const n = {};
  for (const l in e) n[l] = l in t ? t[l] : e[l];
  return n;
}
function zS(e, t) {
  let n = 0, l = t.length;
  for (; n !== l; ) {
    const r = n + l >> 1;
    Sg(e, t[r]) < 0 ? l = r : n = r + 1;
  }
  const a = DS(e);
  return a && (l = t.lastIndexOf(a, l - 1)), l;
}
function DS(e) {
  let t = e;
  for (; t = t.parent; ) if (xg(t) && Sg(e, t) === 0) return t;
}
function xg({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function NS(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const l = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let a = 0; a < l.length; ++a) {
    const r = l[a].replace(mg, " "), o = r.indexOf("="), i = xr(o < 0 ? r : r.slice(0, o)), u = o < 0 ? null : xr(r.slice(o + 1));
    if (i in t) {
      let c = t[i];
      $n(c) || (c = t[i] = [c]), c.push(u);
    } else t[i] = u;
  }
  return t;
}
function bf(e) {
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
const jS = Symbol(""), yf = Symbol(""), Ks = Symbol(""), Cg = Symbol(""), Qu = Symbol("");
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
function iu(e, t, n, l, a = (r) => r()) {
  const r = [];
  for (const o of e) for (const i in o.components) {
    let u = o.components[i];
    if (!(t !== "beforeRouteEnter" && !o.instances[i])) if (fg(u)) {
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
function pf(e) {
  const t = Tt(Ks), n = Tt(Cg), l = f(() => {
    const u = Ie(e.to);
    return t.resolve(u);
  }), a = f(() => {
    const { matched: u } = l.value, { length: c } = u, s = u[c - 1], v = n.matched;
    if (!s || !v.length) return -1;
    const h = v.findIndex(ka.bind(null, s));
    if (h > -1) return h;
    const m = _f(u[c - 2]);
    return c > 1 && _f(s) === m && v[v.length - 1].path !== m ? v.findIndex(ka.bind(null, u[c - 2])) : h;
  }), r = f(() => a.value > -1 && YS(n.params, l.value.params)), o = f(() => a.value > -1 && a.value === n.matched.length - 1 && yg(n.params, l.value.params));
  function i(u = {}) {
    if (WS(u)) {
      const c = t[Ie(e.replace) ? "replace" : "push"](Ie(e.to)).catch(sr);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c;
    }
    return Promise.resolve();
  }
  return { route: l, href: f(() => l.value.href), isActive: r, isExactActive: o, navigate: i };
}
function US(e) {
  return e.length === 1 ? e[0] : e;
}
const QS = /* @__PURE__ */ Ta({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" } }, useLink: pf, setup(e, { slots: t }) {
  const n = Bn(pf(e)), { options: l } = Tt(Ks), a = f(() => ({ [wf(e.activeClass, l.linkActiveClass, "router-link-active")]: n.isActive, [wf(e.exactActiveClass, l.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive }));
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
function _f(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const wf = (e, t, n) => e ?? t ?? n, GS = /* @__PURE__ */ Ta({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: n }) {
  const l = Tt(Qu), a = f(() => e.route || l.value), r = Tt(yf, 0), o = f(() => {
    let c = Ie(r);
    const { matched: s } = a.value;
    let v;
    for (; (v = s[c]) && !v.components; ) c++;
    return c;
  }), i = f(() => a.value.matched[o.value]);
  hn(yf, f(() => o.value + 1)), hn(jS, i), hn(Qu, a);
  const u = U();
  return he(() => [u.value, i.value, e.name], ([c, s, v], [h, m, g]) => {
    s && (s.instances[v] = c, m && m !== s && c && c === h && (s.leaveGuards.size || (s.leaveGuards = m.leaveGuards), s.updateGuards.size || (s.updateGuards = m.updateGuards))), c && s && (!m || !ka(s, m) || !h) && (s.enterCallbacks[v] || []).forEach((w) => w(c));
  }, { flush: "post" }), () => {
    const c = a.value, s = e.name, v = i.value, h = v && v.components[s];
    if (!h) return Sf(n.default, { Component: h, route: c });
    const m = v.props[s], g = m ? m === true ? c.params : typeof m == "function" ? m(c) : m : null, S = d(h, ut({}, g, t, { onVnodeUnmounted: (q) => {
      q.component.isUnmounted && (v.instances[s] = null);
    }, ref: u }));
    return Sf(n.default, { Component: S, route: c }) || S;
  };
} });
function Sf(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const XS = GS;
function ZS(e) {
  const t = OS(e.routes, e), n = e.parseQuery || NS, l = e.stringifyQuery || bf, a = e.history, r = ja(), o = ja(), i = ja(), u = u0(rl);
  let c = rl;
  ia && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const s = ru.bind(null, (R) => "" + R), v = ru.bind(null, sS), h = ru.bind(null, xr);
  function m(R, J) {
    let O, re;
    return _g(R) ? (O = t.getRecordMatcher(R), re = J) : re = R, t.addRoute(re, O);
  }
  function g(R) {
    const J = t.getRecordMatcher(R);
    J && t.removeRoute(J);
  }
  function w() {
    return t.getRoutes().map((R) => R.record);
  }
  function S(R) {
    return !!t.getRecordMatcher(R);
  }
  function q(R, J) {
    if (J = ut({}, J || u.value), typeof R == "string") {
      const z = ou(n, R, J.path), Z = t.resolve({ path: z.path }, J), ne = a.createHref(z.fullPath);
      return ut(z, Z, { params: h(Z.params), hash: xr(z.hash), redirectedFrom: void 0, href: ne });
    }
    let O;
    if (R.path != null) O = ut({}, R, { path: ou(n, R.path, J.path).path });
    else {
      const z = ut({}, R.params);
      for (const Z in z) z[Z] == null && delete z[Z];
      O = ut({}, R, { params: v(z) }), J.params = v(J.params);
    }
    const re = t.resolve(O, J), we = R.hash || "";
    re.params = s(h(re.params));
    const k = fS(l, ut({}, R, { hash: oS(we), path: re.path })), $ = a.createHref(k);
    return ut({ fullPath: k, hash: we, query: l === bf ? HS(R.query) : R.query || {} }, re, { redirectedFrom: void 0, href: $ });
  }
  function p(R) {
    return typeof R == "string" ? ou(n, R, u.value.path) : ut({}, R);
  }
  function y(R, J) {
    if (c !== R) return qa(8, { from: J, to: R });
  }
  function b(R) {
    return A(R);
  }
  function _(R) {
    return b(ut(p(R), { replace: true }));
  }
  function E(R) {
    const J = R.matched[R.matched.length - 1];
    if (J && J.redirect) {
      const { redirect: O } = J;
      let re = typeof O == "function" ? O(R) : O;
      return typeof re == "string" && (re = re.includes("?") || re.includes("#") ? re = p(re) : { path: re }, re.params = {}), ut({ query: R.query, hash: R.hash, params: re.path != null ? {} : R.params }, re);
    }
  }
  function A(R, J) {
    const O = c = q(R), re = u.value, we = R.state, k = R.force, $ = R.replace === true, z = E(O);
    if (z) return A(ut(p(z), { state: typeof z == "object" ? ut({}, we, z.state) : we, force: k, replace: $ }), J || O);
    const Z = O;
    Z.redirectedFrom = J;
    let ne;
    return !k && vS(l, re, O) && (ne = qa(16, { to: Z, from: re }), Q(re, re, true, false)), (ne ? Promise.resolve(ne) : P(Z, re)).catch((K) => Hn(K) ? Hn(K, 2) ? K : pe(K) : W(K, Z, re)).then((K) => {
      if (K) {
        if (Hn(K, 2)) return A(ut({ replace: $ }, p(K.to), { state: typeof K.to == "object" ? ut({}, we, K.to.state) : we, force: k }), J || Z);
      } else K = T(Z, re, true, $, we);
      return F(Z, re, K), K;
    });
  }
  function V(R, J) {
    const O = y(R, J);
    return O ? Promise.reject(O) : Promise.resolve();
  }
  function L(R) {
    const J = X.values().next().value;
    return J && typeof J.runWithContext == "function" ? J.runWithContext(R) : R();
  }
  function P(R, J) {
    let O;
    const [re, we, k] = JS(R, J);
    O = iu(re.reverse(), "beforeRouteLeave", R, J);
    for (const z of re) z.leaveGuards.forEach((Z) => {
      O.push(dl(Z, R, J));
    });
    const $ = V.bind(null, R, J);
    return O.push($), B(O).then(() => {
      O = [];
      for (const z of r.list()) O.push(dl(z, R, J));
      return O.push($), B(O);
    }).then(() => {
      O = iu(we, "beforeRouteUpdate", R, J);
      for (const z of we) z.updateGuards.forEach((Z) => {
        O.push(dl(Z, R, J));
      });
      return O.push($), B(O);
    }).then(() => {
      O = [];
      for (const z of k) if (z.beforeEnter) if ($n(z.beforeEnter)) for (const Z of z.beforeEnter) O.push(dl(Z, R, J));
      else O.push(dl(z.beforeEnter, R, J));
      return O.push($), B(O);
    }).then(() => (R.matched.forEach((z) => z.enterCallbacks = {}), O = iu(k, "beforeRouteEnter", R, J, L), O.push($), B(O))).then(() => {
      O = [];
      for (const z of o.list()) O.push(dl(z, R, J));
      return O.push($), B(O);
    }).catch((z) => Hn(z, 8) ? z : Promise.reject(z));
  }
  function F(R, J, O) {
    i.list().forEach((re) => L(() => re(R, J, O)));
  }
  function T(R, J, O, re, we) {
    const k = y(R, J);
    if (k) return k;
    const $ = J === rl, z = ia ? history.state : {};
    O && (re || $ ? a.replace(R.fullPath, ut({ scroll: $ && z && z.scroll }, we)) : a.push(R.fullPath, we)), u.value = R, Q(R, J, O, $), pe();
  }
  let x;
  function C() {
    x || (x = a.listen((R, J, O) => {
      if (!be.listening) return;
      const re = q(R), we = E(re);
      if (we) {
        A(ut(we, { replace: true, force: true }), re).catch(sr);
        return;
      }
      c = re;
      const k = u.value;
      ia && wS(uf(k.fullPath, O.delta), hi()), P(re, k).catch(($) => Hn($, 12) ? $ : Hn($, 2) ? (A(ut(p($.to), { force: true }), re).then((z) => {
        Hn(z, 20) && !O.delta && O.type === Cr.pop && a.go(-1, false);
      }).catch(sr), Promise.reject()) : (O.delta && a.go(-O.delta, false), W($, re, k))).then(($) => {
        $ = $ || T(re, k, false), $ && (O.delta && !Hn($, 8) ? a.go(-O.delta, false) : O.type === Cr.pop && Hn($, 20) && a.go(-1, false)), F(re, k, $);
      }).catch(sr);
    }));
  }
  let D = ja(), H = ja(), j;
  function W(R, J, O) {
    pe(R);
    const re = H.list();
    return re.length ? re.forEach((we) => we(R, J, O)) : console.error(R), Promise.reject(R);
  }
  function te() {
    return j && u.value !== rl ? Promise.resolve() : new Promise((R, J) => {
      D.add([R, J]);
    });
  }
  function pe(R) {
    return j || (j = !R, C(), D.list().forEach(([J, O]) => R ? O(R) : J()), D.reset()), R;
  }
  function Q(R, J, O, re) {
    const { scrollBehavior: we } = e;
    if (!ia || !we) return Promise.resolve();
    const k = !O && SS(uf(R.fullPath, 0)) || (re || !O) && history.state && history.state.scroll || null;
    return Ge().then(() => we(R, J, k)).then(($) => $ && _S($)).catch(($) => W($, R, J));
  }
  const M = (R) => a.go(R);
  let ee;
  const X = /* @__PURE__ */ new Set(), be = { currentRoute: u, listening: true, addRoute: m, removeRoute: g, clearRoutes: t.clearRoutes, hasRoute: S, getRoutes: w, resolve: q, options: e, push: b, replace: _, go: M, back: () => M(-1), forward: () => M(1), beforeEach: r.add, beforeResolve: o.add, afterEach: i.add, onError: H.add, isReady: te, install(R) {
    const J = this;
    R.component("RouterLink", KS), R.component("RouterView", XS), R.config.globalProperties.$router = J, Object.defineProperty(R.config.globalProperties, "$route", { enumerable: true, get: () => Ie(u) }), ia && !ee && u.value === rl && (ee = true, b(a.location).catch((we) => {
    }));
    const O = {};
    for (const we in rl) Object.defineProperty(O, we, { get: () => u.value[we], enumerable: true });
    R.provide(Ks, J), R.provide(Cg, os(O)), R.provide(Qu, u);
    const re = R.unmount;
    X.add(R), R.unmount = function() {
      X.delete(R), X.size < 1 && (c = rl, x && x(), x = null, u.value = rl, ee = false, j = false), re();
    };
  } };
  function B(R) {
    return R.reduce((J, O) => J.then(() => L(O)), Promise.resolve());
  }
  return be;
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
const kg = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && kg.decode();
let Ga = null;
function fo() {
  return (Ga === null || Ga.byteLength === 0) && (Ga = new Uint8Array(Jt.memory.buffer)), Ga;
}
function uu(e, t) {
  return e = e >>> 0, kg.decode(fo().subarray(e, e + t));
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
const vo = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, lx = typeof vo.encodeInto == "function" ? function(e, t) {
  return vo.encodeInto(e, t);
} : function(e, t) {
  const n = vo.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function ax(e, t, n) {
  if (typeof e != "string") throw new Error(`expected a string argument, found ${typeof e}`);
  if (n === void 0) {
    const i = vo.encode(e), u = t(i.length, 1) >>> 0;
    return fo().subarray(u, u + i.length).set(i), Ku = i.length, u;
  }
  let l = e.length, a = t(l, 1) >>> 0;
  const r = fo();
  let o = 0;
  for (; o < l; o++) {
    const i = e.charCodeAt(o);
    if (i > 127) break;
    r[a + o] = i;
  }
  if (o !== l) {
    o !== 0 && (e = e.slice(o)), a = n(a, l, l = o + e.length * 3, 1) >>> 0;
    const i = fo().subarray(a + o, a + l), u = lx(e, i);
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
      cb(uu(t, n));
    }, arguments);
  }, e.wbg.__wbg_log_6eff8ac810e5dae1 = function() {
    return nx(function(t, n) {
      log(uu(t, n));
    }, arguments);
  }, e.wbg.__wbindgen_init_externref_table = function() {
    const t = Jt.__wbindgen_export_2, n = t.grow(4);
    t.set(0, void 0), t.set(n + 0, void 0), t.set(n + 1, null), t.set(n + 2, true), t.set(n + 3, false);
  }, e.wbg.__wbindgen_throw = function(t, n) {
    throw new Error(uu(t, n));
  }, e;
}
function sx(e, t) {
  return Jt = e.exports, qg.__wbindgen_wasm_module = t, Ga = null, Jt.__wbindgen_start(), Jt;
}
async function qg(e) {
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
    return Yn(), Pv(rn, null, [Je(Ie(Ze), { class: "q-ma-lg", color: "primary", onClick: t }, { default: Lt(() => l[0] || (l[0] = [ua("test")])), _: 1 }), Je(a)], 64);
  };
} }), dx = dg(cx, [["__scopeId", "data-v-17fee452"]]);
var fx = 1e-6, xf = typeof Float32Array < "u" ? Float32Array : Array;
Math.hypot || (Math.hypot = function() {
  for (var e = 0, t = arguments.length; t--; ) e += arguments[t] * arguments[t];
  return Math.sqrt(e);
});
function Cf() {
  var e = new xf(16);
  return xf != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e;
}
function kf(e, t, n) {
  var l = n[0], a = n[1], r = n[2], o, i, u, c, s, v, h, m, g, w, S, q;
  return t === e ? (e[12] = t[0] * l + t[4] * a + t[8] * r + t[12], e[13] = t[1] * l + t[5] * a + t[9] * r + t[13], e[14] = t[2] * l + t[6] * a + t[10] * r + t[14], e[15] = t[3] * l + t[7] * a + t[11] * r + t[15]) : (o = t[0], i = t[1], u = t[2], c = t[3], s = t[4], v = t[5], h = t[6], m = t[7], g = t[8], w = t[9], S = t[10], q = t[11], e[0] = o, e[1] = i, e[2] = u, e[3] = c, e[4] = s, e[5] = v, e[6] = h, e[7] = m, e[8] = g, e[9] = w, e[10] = S, e[11] = q, e[12] = o * l + s * a + g * r + t[12], e[13] = i * l + v * a + w * r + t[13], e[14] = u * l + h * a + S * r + t[14], e[15] = c * l + m * a + q * r + t[15]), e;
}
function su(e, t, n, l) {
  var a = l[0], r = l[1], o = l[2], i = Math.hypot(a, r, o), u, c, s, v, h, m, g, w, S, q, p, y, b, _, E, A, V, L, P, F, T, x, C, D;
  return i < fx ? null : (i = 1 / i, a *= i, r *= i, o *= i, u = Math.sin(n), c = Math.cos(n), s = 1 - c, v = t[0], h = t[1], m = t[2], g = t[3], w = t[4], S = t[5], q = t[6], p = t[7], y = t[8], b = t[9], _ = t[10], E = t[11], A = a * a * s + c, V = r * a * s + o * u, L = o * a * s - r * u, P = a * r * s - o * u, F = r * r * s + c, T = o * r * s + a * u, x = a * o * s + r * u, C = r * o * s - a * u, D = o * o * s + c, e[0] = v * A + w * V + y * L, e[1] = h * A + S * V + b * L, e[2] = m * A + q * V + _ * L, e[3] = g * A + p * V + E * L, e[4] = v * P + w * F + y * T, e[5] = h * P + S * F + b * T, e[6] = m * P + q * F + _ * T, e[7] = g * P + p * F + E * T, e[8] = v * x + w * C + y * D, e[9] = h * x + S * C + b * D, e[10] = m * x + q * C + _ * D, e[11] = g * x + p * C + E * D, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e);
}
function vx(e, t, n, l, a) {
  var r = 1 / Math.tan(t / 2), o;
  return e[0] = r / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = r, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, a != null && a !== 1 / 0 ? (o = 1 / (l - a), e[10] = (a + l) * o, e[14] = 2 * a * l * o) : (e[10] = -1, e[14] = -2 * l), e;
}
var mx = vx;
const hx = ["width", "height"], gx = { id: "mark" }, bx = /* @__PURE__ */ Ta({ __name: "WebGL", setup(e) {
  const t = U();
  let n = null;
  const l = U([0, 0]), a = U(""), r = U(false);
  let o = U(640), i = U(480);
  const u = () => {
    if (n === null) throw new Error("no WebGL context");
    const _ = n.createBuffer();
    n.bindBuffer(n.ARRAY_BUFFER, _);
    let E = [0, 0, 0];
    for (let x = 0; x < 6; ++x) {
      const C = 3.141 * x * 60 / 180;
      E = E.concat([1 * Math.cos(C), 1 * Math.sin(C), 0]);
    }
    for (let x = 0; x < 6; ++x) {
      const C = 3.141 * x * 60 / 180;
      E = E.concat([1 * Math.cos(C), 1 * Math.sin(C), 0.4]);
    }
    for (let x = 0; x < 6; ++x) {
      const C = 3.141 * x * 60 / 180;
      E = E.concat([1.2 * Math.cos(C), 1.2 * Math.sin(C), 0.4]);
    }
    for (let x = 0; x < 6; ++x) {
      const C = 3.141 * x * 60 / 180;
      E = E.concat([1.2 * Math.cos(C), 1.2 * Math.sin(C), -1]);
    }
    n.bufferData(n.ARRAY_BUFFER, new Float32Array(E), n.STATIC_DRAW);
    let A = [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1];
    for (let x = 0; x < 6; ++x) A = A.concat([1, 1, 1, 1]);
    for (let x = 0; x < 6; ++x) A = A.concat([1, 1, 1, 1]);
    for (let x = 0; x < 6; ++x) A = A.concat([0.75, 0.75, 0.75, 1]);
    for (let x = 0; x < 6; ++x) A = A.concat([0.5, 0.5, 0.5, 1]);
    const V = n.createBuffer();
    n.bindBuffer(n.ARRAY_BUFFER, V), n.bufferData(n.ARRAY_BUFFER, new Float32Array(A), n.STATIC_DRAW);
    const L = n.createBuffer();
    let P = [0.5, 0.5];
    for (let x = 0; x < 6; ++x) {
      const C = 3.141 * x * 60 / 180;
      P = P.concat([0.5 + 0.5 * Math.cos(C), 0.5 + 0.5 * Math.sin(C)]);
    }
    for (let x = 0; x < 6; ++x) {
      const C = 3.141 * x * 60 / 180;
      P = P.concat([0.5 + 0.4 * Math.cos(C), 0.5 + 0.4 * Math.sin(C)]);
    }
    for (let x = 0; x < 6; ++x) {
      const C = 3.141 * x * 60 / 180;
      P = P.concat([0.5 + 0.5 * Math.cos(C), 0.5 + 0.5 * Math.sin(C)]);
    }
    for (let x = 0; x < 6; ++x) {
      const C = 3.141 * x * 60 / 180;
      P = P.concat([0.5 + 0.5 * Math.cos(C + 1), 0.5 + 0.5 * Math.sin(C + 1)]);
    }
    n.bindBuffer(n.ARRAY_BUFFER, L), n.bufferData(n.ARRAY_BUFFER, new Float32Array(P), n.STATIC_DRAW);
    const F = n.createBuffer();
    let T = [];
    for (let x = 1; x < 7; ++x) T = T.concat([0, x, 1 + x % 6]);
    for (let x = 1; x < 7; ++x) T = T.concat([x, 1 + x % 6, x + 6]);
    for (let x = 1; x < 7; ++x) T = T.concat([6 + x, 7 + x % 6, x % 6 + 1]);
    for (let x = 1; x < 7; ++x) T = T.concat([6 + x, 7 + x % 6, 6 + x + 6]);
    for (let x = 1; x < 7; ++x) T = T.concat([12 + x, 13 + x % 6, 6 + x % 6 + 1]);
    for (let x = 1; x < 7; ++x) T = T.concat([12 + x, 13 + x % 6, 12 + x + 6]);
    for (let x = 1; x < 7; ++x) T = T.concat([18 + x, 19 + x % 6, 12 + x % 6 + 1]);
    return n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, F), n.bufferData(n.ELEMENT_ARRAY_BUFFER, new Uint16Array(T), n.STATIC_DRAW), [_, V, L, F];
  }, c = (_, E) => {
    if (n === null || t.value === void 0) throw new Error("no WebGL context");
    n.bindFramebuffer(n.FRAMEBUFFER, null), n.bindRenderbuffer(n.RENDERBUFFER, null), n.clearColor(0, 0.5, 0.5, 1), n.clearDepth(1), n.enable(n.DEPTH_TEST), n.depthFunc(n.LEQUAL), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT);
    const A = 45 * Math.PI / 180, V = n.canvas.width / n.canvas.height, L = 0.1, P = 100, F = Cf();
    mx(F, A, V, L, P);
    const T = E;
    kf(F, F, [Math.sin(T * 0.3) * 1, Math.cos(T * 0.4) * 1, Math.cos(0.6 * T) * 1]);
    const x = Cf();
    kf(x, x, [0, 0, -6]), su(x, x, Math.sin(E) * 3.141 / 6 / 3, [0, 1, 0]), su(x, x, Math.sin(E * 1.15) * 3.141 / 4 / 3, [1, 0, 0]), su(x, x, Math.sin(E * 1.33) * 3.141 / 5 / 3, [1, 0, 0]), s(_, false), v(_), h(_), n.useProgram(_.prog_draw), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, _.bufs.index), n.bindTexture(n.TEXTURE_2D, S), n.uniform1i(_.locs.sampler, 0), n.uniform1f(_.locs.time, E), n.uniformMatrix4fv(_.locs.proj, false, F), n.uniformMatrix4fv(_.locs.view, false, x), n.uniform1f(_.locs.mode, 0), n.bindTexture(n.TEXTURE_2D, S), n.drawElements(n.TRIANGLES, 3 * 6, n.UNSIGNED_SHORT, 0), n.uniform1f(_.locs.mode, 1), n.bindTexture(n.TEXTURE_2D, q), n.drawElements(n.TRIANGLES, 3 * 6 * 6, n.UNSIGNED_SHORT, 2 * 3 * 6), n.useProgram(_.prog_pick), n.enable(n.DEPTH_TEST), n.bindTexture(n.TEXTURE_2D, _.pick.tex), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.bindRenderbuffer(n.RENDERBUFFER, _.pick.rb), n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_COMPONENT16, n.canvas.width, n.canvas.height), n.bindFramebuffer(n.FRAMEBUFFER, _.pick.fb), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.RENDERBUFFER, _.pick.rb), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.canvas.width, n.canvas.height, 0, n.RGBA, n.UNSIGNED_BYTE, null), n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, _.pick.tex, 0), n.uniformMatrix4fv(_.locs.view_pick, false, x), n.uniformMatrix4fv(_.locs.proj_pick, false, F), n.uniform4f(_.locs.id_pick, 1, 0, 0, 0), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT), s(_, true), n.drawElements(n.TRIANGLES, 3 * 6, n.UNSIGNED_SHORT, 0), n.drawElements(n.TRIANGLES, 3 * 6 * 6, n.UNSIGNED_SHORT, 2 * 3 * 6);
    let C = new Uint8Array(4);
    const D = l.value[0], H = l.value[1];
    D * n.canvas.width / o.value, n.canvas.height - H * n.canvas.height / i.value - 1, n.readPixels(l.value[0], l.value[1], 1, 1, n.RGBA, n.UNSIGNED_BYTE, C), C.length && (a.value = C.toString(), C[0] > 0 ? r.value = true : r.value = false);
  }, s = (_, E) => {
    if (n === null) throw new Error("setPos - no ctx");
    const A = 3, V = n.FLOAT, L = false, P = 0, F = 0;
    n.bindBuffer(n.ARRAY_BUFFER, _.bufs.pos), n.vertexAttribPointer(E ? _.attr.vertex_pick : _.attr.vertex, A, V, L, P, F), n.enableVertexAttribArray(E ? _.attr.vertex_pick : _.attr.vertex);
  }, v = (_) => {
    if (n === null) throw new Error("setColor - no ctx");
    n.bindBuffer(n.ARRAY_BUFFER, _.bufs.color), n.vertexAttribPointer(_.attr.color, 4, n.FLOAT, false, 0, 0), n.enableVertexAttribArray(_.attr.color);
  }, h = (_) => {
    if (n === null) throw new Error("setTex crash");
    n.bindBuffer(n.ARRAY_BUFFER, _.bufs.tex), n.vertexAttribPointer(_.attr.texture, 2, n.FLOAT, false, 0, 0), n.enableVertexAttribArray(_.attr.texture);
  }, m = () => {
    if (console.log(t.value), t.value === void 0 || (n = t.value.getContext("webgl2", {}), n === null)) return;
    const A = g(`
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

            if(fKind == 0.0) {
                t[0] += (cos(f1 * r * 3.0) / 10.0 + 0.5) * 0.5 * exp(-r * 0.3) * exp(-f1 * 0.15);
                t[1] += (sin(f1 * r * 2.0) / 10.0 + 0.5) * 0.5 * exp(-r * 0.3) * exp(-f1 * 0.15);
            }

            gl_FragColor = texture2D(uSampler, t) * vColor;
        }
    `), V = `
        attribute vec4 aVertexPosition;
        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;

        void main() {
            vec4 b = aVertexPosition;
            gl_Position = uProjectionMatrix * uModelViewMatrix * b;
            // gl_Position = b;
            // gl_Position = uProjectionMatrix* b;
        }
    `, L = `
        precision mediump float;
        
        uniform vec4 uId;
        
        void main() {
            gl_FragColor = uId;
        }
    `, P = u(), F = n.getUniformLocation(A, "uProjectionMatrix"), T = n.getUniformLocation(A, "uModelViewMatrix"), x = n.getUniformLocation(A, "uSampler"), C = n.getUniformLocation(A, "fTime"), D = n.getUniformLocation(A, "fMode");
    if (F === null) throw new Error("no proj loc");
    if (T === null) throw new Error("no view loc");
    if (x === null) throw new Error("no sampler loc");
    if (C === null) throw new Error("no time loc");
    if (D === null) throw new Error("no mode loc");
    const H = g(V, L), j = n.getUniformLocation(H, "uProjectionMatrix"), W = n.getUniformLocation(H, "uModelViewMatrix"), te = n.getUniformLocation(H, "uId");
    if (j === null) throw new Error("no proj pick loc");
    if (W === null) throw new Error("no view pick loc");
    if (te === null) throw new Error("no id pick loc");
    const pe = { prog_draw: A, prog_pick: H, attr: { vertex: n.getAttribLocation(A, "aVertexPosition"), vertex_pick: n.getAttribLocation(H, "aVertexPosition"), color: n.getAttribLocation(A, "aVertexColor"), texture: n.getAttribLocation(A, "aTextureCoord") }, locs: { proj: F, view: T, sampler: x, time: C, mode: D, proj_pick: j, view_pick: W, id_pick: te }, bufs: { pos: P[0], color: P[1], tex: P[2], index: P[3] }, pick: { fb: n.createFramebuffer(), rb: n.createRenderbuffer(), tex: n.createTexture() } };
    p(), n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, true), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR);
    let Q = 0, M = false;
    setInterval(() => {
      M ? (Q -= 0.033, Q < 0 && (Q = 0, M = false)) : (Q += 0.033, Q > 7.5 && (Q = 7.5, M = true)), c(pe, Q);
    }, 25);
  }, g = (_, E) => {
    if (n === null) throw new Error("no webgl");
    const A = w(n.VERTEX_SHADER, _), V = w(n.FRAGMENT_SHADER, E), L = n.createProgram();
    return n.attachShader(L, A), n.attachShader(L, V), n.linkProgram(L), L;
  }, w = (_, E) => {
    if (n === null) throw new Error("no webgl");
    const A = n.createShader(_);
    if (A === null) throw new Error("bad shader");
    return n.shaderSource(A, E), n.compileShader(A), A;
  };
  let S = null, q = null;
  const p = () => {
    if (n === null) throw new Error("loadTexture no context");
    S = n.createTexture(), n.bindTexture(n.TEXTURE_2D, S), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 0])), q = n.createTexture(), n.bindTexture(n.TEXTURE_2D, q), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 0]));
  }, y = (_, E) => {
    if (S === null || n === null) return;
    const A = E.target;
    _ === "base" && n.bindTexture(n.TEXTURE_2D, S), _ === "body" && n.bindTexture(n.TEXTURE_2D, q), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, A), n.generateMipmap(n.TEXTURE_2D);
  }, b = (_) => {
    if (n === null || t.value === void 0) return;
    const E = _, A = E.clientX, V = E.clientY;
    A - t.value.clientWidth / 2, V - t.value.clientHeight / 2, (A - n.canvas.width / 2) / 2, (V - n.canvas.height / 2) / 2, l.value = [A, V];
  };
  return ft(() => {
    o.value = document.body.getBoundingClientRect().width, i.value = document.body.getBoundingClientRect().height - 100, Ge(m);
  }), (_, E) => (Yn(), Pv(rn, null, [Bl("canvas", { id: "canvas", ref_key: "canvas", ref: t, onMousemove: E[0] || (E[0] = (A) => b(A)), width: Ie(o), height: Ie(i) }, null, 40, hx), Bl("img", { src: "img/tex.jpg", onLoad: E[1] || (E[1] = (A) => y("base", A)), style: { display: "none" } }, null, 32), Bl("img", { src: "img/wood.jpg", onLoad: E[2] || (E[2] = (A) => y("body", A)), style: { display: "none" } }, null, 32), Bl("div", gx, to(l.value) + " " + to(a.value) + " " + to(r.value), 1)], 64));
} }), yx = { BASE_URL: "./", DEV: false, MODE: "production", PROD: true, SSR: false, VITE_APP_NAME: "vite mtg", VITE_client_id: "quasar-2fa", VITE_client_secret: "spoon" }, Ws = Qv(Qw);
console.log(yx);
const px = [{ name: "layout", path: "/", component: Yw, children: [{ name: "root", path: "", component: dx }, { name: "webgl", path: "webgl", component: bx }] }], _x = ZS({ history: TS(), routes: px });
Ws.use(_x);
Ws.use(Hw, { plugins: { Dialog: Tw, Dark: Gv, Loading: Ew, Cookies: kw, Notify: Fw }, config: { dark: "auto" } });
window.cb = (e) => {
  alert(e);
};
window.log = (e) => {
  console.log("%cwasm>%c %s", "background-color: blue; color: cyan; border: 2px solid blue;", "", e);
};
qg({}).then(() => {
  Ws.mount("#q-app");
});
