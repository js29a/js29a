var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value2) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value2);
var __privateSet = (obj, member, value2, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value2) : member.set(obj, value2), value2);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _n2, _r2, _e, _l2, _t2, _a2, _AS_instances, o_fn;
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) l(r);
  new MutationObserver((r) => {
    for (const a of r) if (a.type === "childList") for (const o of a.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && l(o);
  }).observe(document, { childList: true, subtree: true });
  function n(r) {
    const a = {};
    return r.integrity && (a.integrity = r.integrity), r.referrerPolicy && (a.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? a.credentials = "include" : r.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
  }
  function l(r) {
    if (r.ep) return;
    r.ep = true;
    const a = n(r);
    fetch(r.href, a);
  }
})();
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ju(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const mt = {}, dr = [], On = () => {
}, Og = () => false, jo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), es = (e) => e.startsWith("onUpdate:"), Dt = Object.assign, ts = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Vg = Object.prototype.hasOwnProperty, st = (e, t) => Vg.call(e, t), Ne = Array.isArray, fr = (e) => qa(e) === "[object Map]", Pf = (e) => qa(e) === "[object Set]", Dg = (e) => qa(e) === "[object RegExp]", Qe = (e) => typeof e == "function", At = (e) => typeof e == "string", pl = (e) => typeof e == "symbol", St = (e) => e !== null && typeof e == "object", $f = (e) => (St(e) || Qe(e)) && Qe(e.then) && Qe(e.catch), Bf = Object.prototype.toString, qa = (e) => Bf.call(e), Ig = (e) => qa(e).slice(8, -1), Lf = (e) => qa(e) === "[object Object]", ns = (e) => At(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Zr = /* @__PURE__ */ Ju(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Uo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, zg = /-(\w)/g, bn = Uo((e) => e.replace(zg, (t, n) => n ? n.toUpperCase() : "")), Ng = /\B([A-Z])/g, Wl = Uo((e) => e.replace(Ng, "-$1").toLowerCase()), Qo = Uo((e) => e.charAt(0).toUpperCase() + e.slice(1)), wi = Uo((e) => e ? `on${Qo(e)}` : ""), hl = (e, t) => !Object.is(e, t), Jr = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, Ff = (e, t, n, l = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: l, value: n });
}, Hg = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, jg = (e) => {
  const t = At(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let lc;
const Ma = () => lc || (lc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ko(e) {
  if (Ne(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const l = e[n], r = At(l) ? Wg(l) : Ko(l);
      if (r) for (const a in r) t[a] = r[a];
    }
    return t;
  } else if (At(e) || St(e)) return e;
}
const Ug = /;(?![^(]*\))/g, Qg = /:([^]+)/, Kg = /\/\*[^]*?\*\//g;
function Wg(e) {
  const t = {};
  return e.replace(Kg, "").split(Ug).forEach((n) => {
    if (n) {
      const l = n.split(Qg);
      l.length > 1 && (t[l[0].trim()] = l[1].trim());
    }
  }), t;
}
function ls(e) {
  let t = "";
  if (At(e)) t = e;
  else if (Ne(e)) for (let n = 0; n < e.length; n++) {
    const l = ls(e[n]);
    l && (t += l + " ");
  }
  else if (St(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Yg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xg = /* @__PURE__ */ Ju(Yg);
function Of(e) {
  return !!e || e === "";
}
const Vf = (e) => !!(e && e.__v_isRef === true), Df = (e) => At(e) ? e : e == null ? "" : Ne(e) || St(e) && (e.toString === Bf || !Qe(e.toString)) ? Vf(e) ? Df(e.value) : JSON.stringify(e, If, 2) : String(e), If = (e, t) => Vf(t) ? If(e, t.value) : fr(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [l, r], a) => (n[xi(l, a) + " =>"] = r, n), {}) } : Pf(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => xi(n)) } : pl(t) ? xi(t) : St(t) && !Ne(t) && !Lf(t) ? String(t) : t, xi = (e, t = "") => {
  var n;
  return pl(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let rn;
class Gg {
  constructor(t = false) {
    this.detached = t, this._active = true, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = rn, !t && rn && (this.index = (rn.scopes || (rn.scopes = [])).push(this) - 1);
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
      const n = rn;
      try {
        return rn = this, t();
      } finally {
        rn = n;
      }
    }
  }
  on() {
    rn = this;
  }
  off() {
    rn = this.parent;
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
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Zg() {
  return rn;
}
let bt;
const Si = /* @__PURE__ */ new WeakSet();
class zf {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, rn && rn.active && rn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Si.has(this) && (Si.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Hf(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, rc(this), jf(this);
    const t = bt, n = Tn;
    bt = this, Tn = true;
    try {
      return this.fn();
    } finally {
      Uf(this), bt = t, Tn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) os(t);
      this.deps = this.depsTail = void 0, rc(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Si.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    hu(this) && this.run();
  }
  get dirty() {
    return hu(this);
  }
}
let Nf = 0, ea, ta;
function Hf(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = ta, ta = e;
    return;
  }
  e.next = ea, ea = e;
}
function rs() {
  Nf++;
}
function as() {
  if (--Nf > 0) return;
  if (ta) {
    let t = ta;
    for (ta = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; ea; ) {
    let t = ea;
    for (ea = void 0; t; ) {
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
function jf(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Uf(e) {
  let t, n = e.depsTail, l = n;
  for (; l; ) {
    const r = l.prevDep;
    l.version === -1 ? (l === n && (n = r), os(l), Jg(l)) : t = l, l.dep.activeLink = l.prevActiveLink, l.prevActiveLink = void 0, l = r;
  }
  e.deps = t, e.depsTail = n;
}
function hu(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Qf(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function Qf(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === va)) return;
  e.globalVersion = va;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !hu(e)) {
    e.flags &= -3;
    return;
  }
  const n = bt, l = Tn;
  bt = e, Tn = true;
  try {
    jf(e);
    const r = e.fn(e._value);
    (t.version === 0 || hl(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    bt = n, Tn = l, Uf(e), e.flags &= -3;
  }
}
function os(e, t = false) {
  const { dep: n, prevSub: l, nextSub: r } = e;
  if (l && (l.nextSub = r, e.prevSub = void 0), r && (r.prevSub = l, e.nextSub = void 0), n.subs === e && (n.subs = l, !l && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep) os(a, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Jg(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Tn = true;
const Kf = [];
function _l() {
  Kf.push(Tn), Tn = false;
}
function wl() {
  const e = Kf.pop();
  Tn = e === void 0 ? true : e;
}
function rc(e) {
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
let va = 0;
class e0 {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class is {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!bt || !Tn || bt === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== bt) n = this.activeLink = new e0(bt, this), bt.deps ? (n.prevDep = bt.depsTail, bt.depsTail.nextDep = n, bt.depsTail = n) : bt.deps = bt.depsTail = n, Wf(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const l = n.nextDep;
      l.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = l), n.prevDep = bt.depsTail, n.nextDep = void 0, bt.depsTail.nextDep = n, bt.depsTail = n, bt.deps === n && (bt.deps = l);
    }
    return n;
  }
  trigger(t) {
    this.version++, va++, this.notify(t);
  }
  notify(t) {
    rs();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      as();
    }
  }
}
function Wf(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let l = t.deps; l; l = l.nextDep) Wf(l);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const gu = /* @__PURE__ */ new WeakMap(), Dl = Symbol(""), bu = Symbol(""), ma = Symbol("");
function Kt(e, t, n) {
  if (Tn && bt) {
    let l = gu.get(e);
    l || gu.set(e, l = /* @__PURE__ */ new Map());
    let r = l.get(n);
    r || (l.set(n, r = new is()), r.map = l, r.key = n), r.track();
  }
}
function Wn(e, t, n, l, r, a) {
  const o = gu.get(e);
  if (!o) {
    va++;
    return;
  }
  const i = (u) => {
    u && u.trigger();
  };
  if (rs(), t === "clear") o.forEach(i);
  else {
    const u = Ne(e), c = u && ns(n);
    if (u && n === "length") {
      const s = Number(l);
      o.forEach((f, h) => {
        (h === "length" || h === ma || !pl(h) && h >= s) && i(f);
      });
    } else switch ((n !== void 0 || o.has(void 0)) && i(o.get(n)), c && i(o.get(ma)), t) {
      case "add":
        u ? c && i(o.get("length")) : (i(o.get(Dl)), fr(e) && i(o.get(bu)));
        break;
      case "delete":
        u || (i(o.get(Dl)), fr(e) && i(o.get(bu)));
        break;
      case "set":
        fr(e) && i(o.get(Dl));
        break;
    }
  }
  as();
}
function Zl(e) {
  const t = Xe(e);
  return t === e ? t : (Kt(t, "iterate", ma), qn(e) ? t : t.map(Xt));
}
function us(e) {
  return Kt(e = Xe(e), "iterate", ma), e;
}
const t0 = { __proto__: null, [Symbol.iterator]() {
  return Ci(this, Symbol.iterator, Xt);
}, concat(...e) {
  return Zl(this).concat(...e.map((t) => Ne(t) ? Zl(t) : t));
}, entries() {
  return Ci(this, "entries", (e) => (e[1] = Xt(e[1]), e));
}, every(e, t) {
  return zn(this, "every", e, t, void 0, arguments);
}, filter(e, t) {
  return zn(this, "filter", e, t, (n) => n.map(Xt), arguments);
}, find(e, t) {
  return zn(this, "find", e, t, Xt, arguments);
}, findIndex(e, t) {
  return zn(this, "findIndex", e, t, void 0, arguments);
}, findLast(e, t) {
  return zn(this, "findLast", e, t, Xt, arguments);
}, findLastIndex(e, t) {
  return zn(this, "findLastIndex", e, t, void 0, arguments);
}, forEach(e, t) {
  return zn(this, "forEach", e, t, void 0, arguments);
}, includes(...e) {
  return ki(this, "includes", e);
}, indexOf(...e) {
  return ki(this, "indexOf", e);
}, join(e) {
  return Zl(this).join(e);
}, lastIndexOf(...e) {
  return ki(this, "lastIndexOf", e);
}, map(e, t) {
  return zn(this, "map", e, t, void 0, arguments);
}, pop() {
  return Lr(this, "pop");
}, push(...e) {
  return Lr(this, "push", e);
}, reduce(e, ...t) {
  return ac(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return ac(this, "reduceRight", e, t);
}, shift() {
  return Lr(this, "shift");
}, some(e, t) {
  return zn(this, "some", e, t, void 0, arguments);
}, splice(...e) {
  return Lr(this, "splice", e);
}, toReversed() {
  return Zl(this).toReversed();
}, toSorted(e) {
  return Zl(this).toSorted(e);
}, toSpliced(...e) {
  return Zl(this).toSpliced(...e);
}, unshift(...e) {
  return Lr(this, "unshift", e);
}, values() {
  return Ci(this, "values", Xt);
} };
function Ci(e, t, n) {
  const l = us(e), r = l[t]();
  return l !== e && !qn(e) && (r._next = r.next, r.next = () => {
    const a = r._next();
    return a.value && (a.value = n(a.value)), a;
  }), r;
}
const n0 = Array.prototype;
function zn(e, t, n, l, r, a) {
  const o = us(e), i = o !== e && !qn(e), u = o[t];
  if (u !== n0[t]) {
    const f = u.apply(e, a);
    return i ? Xt(f) : f;
  }
  let c = n;
  o !== e && (i ? c = function(f, h) {
    return n.call(this, Xt(f), h, e);
  } : n.length > 2 && (c = function(f, h) {
    return n.call(this, f, h, e);
  }));
  const s = u.call(o, c, l);
  return i && r ? r(s) : s;
}
function ac(e, t, n, l) {
  const r = us(e);
  let a = n;
  return r !== e && (qn(e) ? n.length > 3 && (a = function(o, i, u) {
    return n.call(this, o, i, u, e);
  }) : a = function(o, i, u) {
    return n.call(this, o, Xt(i), u, e);
  }), r[t](a, ...l);
}
function ki(e, t, n) {
  const l = Xe(e);
  Kt(l, "iterate", ma);
  const r = l[t](...n);
  return (r === -1 || r === false) && fs(n[0]) ? (n[0] = Xe(n[0]), l[t](...n)) : r;
}
function Lr(e, t, n = []) {
  _l(), rs();
  const l = Xe(e)[t].apply(e, n);
  return as(), wl(), l;
}
const l0 = /* @__PURE__ */ Ju("__proto__,__v_isRef,__isVue"), Yf = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(pl));
function r0(e) {
  pl(e) || (e = String(e));
  const t = Xe(this);
  return Kt(t, "has", e), t.hasOwnProperty(e);
}
class Xf {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, l) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, a = this._isShallow;
    if (n === "__v_isReactive") return !r;
    if (n === "__v_isReadonly") return r;
    if (n === "__v_isShallow") return a;
    if (n === "__v_raw") return l === (r ? a ? m0 : ev : a ? Jf : Zf).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(l) ? t : void 0;
    const o = Ne(t);
    if (!r) {
      let u;
      if (o && (u = t0[n])) return u;
      if (n === "hasOwnProperty") return r0;
    }
    const i = Reflect.get(t, n, pt(t) ? t : l);
    return (pl(n) ? Yf.has(n) : l0(n)) || (r || Kt(t, "get", n), a) ? i : pt(i) ? o && ns(n) ? i : i.value : St(i) ? r ? tv(i) : Fn(i) : i;
  }
}
class Gf extends Xf {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, l, r) {
    let a = t[n];
    if (!this._isShallow) {
      const u = jl(a);
      if (!qn(l) && !jl(l) && (a = Xe(a), l = Xe(l)), !Ne(t) && pt(a) && !pt(l)) return u ? false : (a.value = l, true);
    }
    const o = Ne(t) && ns(n) ? Number(n) < t.length : st(t, n), i = Reflect.set(t, n, l, pt(t) ? t : r);
    return t === Xe(r) && (o ? hl(l, a) && Wn(t, "set", n, l) : Wn(t, "add", n, l)), i;
  }
  deleteProperty(t, n) {
    const l = st(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && l && Wn(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const l = Reflect.has(t, n);
    return (!pl(n) || !Yf.has(n)) && Kt(t, "has", n), l;
  }
  ownKeys(t) {
    return Kt(t, "iterate", Ne(t) ? "length" : Dl), Reflect.ownKeys(t);
  }
}
class a0 extends Xf {
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
const o0 = new Gf(), i0 = new a0(), u0 = new Gf(true);
const yu = (e) => e, Fa = (e) => Reflect.getPrototypeOf(e);
function s0(e, t, n) {
  return function(...l) {
    const r = this.__v_raw, a = Xe(r), o = fr(a), i = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, c = r[e](...l), s = n ? yu : t ? pu : Xt;
    return !t && Kt(a, "iterate", u ? bu : Dl), { next() {
      const { value: f, done: h } = c.next();
      return h ? { value: f, done: h } : { value: i ? [s(f[0]), s(f[1])] : s(f), done: h };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function Oa(e) {
  return function(...t) {
    return e === "delete" ? false : e === "clear" ? void 0 : this;
  };
}
function c0(e, t) {
  const n = { get(r) {
    const a = this.__v_raw, o = Xe(a), i = Xe(r);
    e || (hl(r, i) && Kt(o, "get", r), Kt(o, "get", i));
    const { has: u } = Fa(o), c = t ? yu : e ? pu : Xt;
    if (u.call(o, r)) return c(a.get(r));
    if (u.call(o, i)) return c(a.get(i));
    a !== o && a.get(r);
  }, get size() {
    const r = this.__v_raw;
    return !e && Kt(Xe(r), "iterate", Dl), Reflect.get(r, "size", r);
  }, has(r) {
    const a = this.__v_raw, o = Xe(a), i = Xe(r);
    return e || (hl(r, i) && Kt(o, "has", r), Kt(o, "has", i)), r === i ? a.has(r) : a.has(r) || a.has(i);
  }, forEach(r, a) {
    const o = this, i = o.__v_raw, u = Xe(i), c = t ? yu : e ? pu : Xt;
    return !e && Kt(u, "iterate", Dl), i.forEach((s, f) => r.call(a, c(s), c(f), o));
  } };
  return Dt(n, e ? { add: Oa("add"), set: Oa("set"), delete: Oa("delete"), clear: Oa("clear") } : { add(r) {
    !t && !qn(r) && !jl(r) && (r = Xe(r));
    const a = Xe(this);
    return Fa(a).has.call(a, r) || (a.add(r), Wn(a, "add", r, r)), this;
  }, set(r, a) {
    !t && !qn(a) && !jl(a) && (a = Xe(a));
    const o = Xe(this), { has: i, get: u } = Fa(o);
    let c = i.call(o, r);
    c || (r = Xe(r), c = i.call(o, r));
    const s = u.call(o, r);
    return o.set(r, a), c ? hl(a, s) && Wn(o, "set", r, a) : Wn(o, "add", r, a), this;
  }, delete(r) {
    const a = Xe(this), { has: o, get: i } = Fa(a);
    let u = o.call(a, r);
    u || (r = Xe(r), u = o.call(a, r)), i && i.call(a, r);
    const c = a.delete(r);
    return u && Wn(a, "delete", r, void 0), c;
  }, clear() {
    const r = Xe(this), a = r.size !== 0, o = r.clear();
    return a && Wn(r, "clear", void 0, void 0), o;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    n[r] = s0(r, e, t);
  }), n;
}
function ss(e, t) {
  const n = c0(e, t);
  return (l, r, a) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? l : Reflect.get(st(n, r) && r in l ? n : l, r, a);
}
const d0 = { get: ss(false, false) }, f0 = { get: ss(false, true) }, v0 = { get: ss(true, false) };
const Zf = /* @__PURE__ */ new WeakMap(), Jf = /* @__PURE__ */ new WeakMap(), ev = /* @__PURE__ */ new WeakMap(), m0 = /* @__PURE__ */ new WeakMap();
function h0(e) {
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
function g0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : h0(Ig(e));
}
function Fn(e) {
  return jl(e) ? e : ds(e, false, o0, d0, Zf);
}
function cs(e) {
  return ds(e, false, u0, f0, Jf);
}
function tv(e) {
  return ds(e, true, i0, v0, ev);
}
function ds(e, t, n, l, r) {
  if (!St(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const a = r.get(e);
  if (a) return a;
  const o = g0(e);
  if (o === 0) return e;
  const i = new Proxy(e, o === 2 ? l : n);
  return r.set(e, i), i;
}
function na(e) {
  return jl(e) ? na(e.__v_raw) : !!(e && e.__v_isReactive);
}
function jl(e) {
  return !!(e && e.__v_isReadonly);
}
function qn(e) {
  return !!(e && e.__v_isShallow);
}
function fs(e) {
  return e ? !!e.__v_raw : false;
}
function Xe(e) {
  const t = e && e.__v_raw;
  return t ? Xe(t) : e;
}
function Wo(e) {
  return !st(e, "__v_skip") && Object.isExtensible(e) && Ff(e, "__v_skip", true), e;
}
const Xt = (e) => St(e) ? Fn(e) : e, pu = (e) => St(e) ? tv(e) : e;
function pt(e) {
  return e ? e.__v_isRef === true : false;
}
function K(e) {
  return nv(e, false);
}
function b0(e) {
  return nv(e, true);
}
function nv(e, t) {
  return pt(e) ? e : new y0(e, t);
}
class y0 {
  constructor(t, n) {
    this.dep = new is(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Xe(t), this._value = n ? t : Xt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, l = this.__v_isShallow || qn(t) || jl(t);
    t = l ? t : Xe(t), hl(t, n) && (this._rawValue = t, this._value = l ? t : Xt(t), this.dep.trigger());
  }
}
function Ie(e) {
  return pt(e) ? e.value : e;
}
const p0 = { get: (e, t, n) => t === "__v_raw" ? e : Ie(Reflect.get(e, t, n)), set: (e, t, n, l) => {
  const r = e[t];
  return pt(r) && !pt(n) ? (r.value = n, true) : Reflect.set(e, t, n, l);
} };
function lv(e) {
  return na(e) ? e : new Proxy(e, p0);
}
class _0 {
  constructor(t, n, l) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new is(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = va - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = l;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && bt !== this) return Hf(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return Qf(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function w0(e, t, n = false) {
  let l, r;
  return Qe(e) ? l = e : (l = e.get, r = e.set), new _0(l, r, n);
}
const Va = {}, go = /* @__PURE__ */ new WeakMap();
let Pl;
function x0(e, t = false, n = Pl) {
  if (n) {
    let l = go.get(n);
    l || go.set(n, l = []), l.push(e);
  }
}
function S0(e, t, n = mt) {
  const { immediate: l, deep: r, once: a, scheduler: o, augmentJob: i, call: u } = n, c = (b) => r ? b : qn(b) || r === false || r === 0 ? Yn(b, 1) : Yn(b);
  let s, f, h, m, g = false, w = false;
  if (pt(e) ? (f = () => e.value, g = qn(e)) : na(e) ? (f = () => c(e), g = true) : Ne(e) ? (w = true, g = e.some((b) => na(b) || qn(b)), f = () => e.map((b) => {
    if (pt(b)) return b.value;
    if (na(b)) return c(b);
    if (Qe(b)) return u ? u(b, 2) : b();
  })) : Qe(e) ? t ? f = u ? () => u(e, 2) : e : f = () => {
    if (h) {
      _l();
      try {
        h();
      } finally {
        wl();
      }
    }
    const b = Pl;
    Pl = s;
    try {
      return u ? u(e, 3, [m]) : e(m);
    } finally {
      Pl = b;
    }
  } : f = On, t && r) {
    const b = f, C = r === true ? 1 / 0 : r;
    f = () => Yn(b(), C);
  }
  const x = Zg(), T = () => {
    s.stop(), x && x.active && ts(x.effects, s);
  };
  if (a && t) {
    const b = t;
    t = (...C) => {
      b(...C), T();
    };
  }
  let p = w ? new Array(e.length).fill(Va) : Va;
  const y = (b) => {
    if (!(!(s.flags & 1) || !s.dirty && !b)) if (t) {
      const C = s.run();
      if (r || g || (w ? C.some(($, F) => hl($, p[F])) : hl(C, p))) {
        h && h();
        const $ = Pl;
        Pl = s;
        try {
          const F = [C, p === Va ? void 0 : w && p[0] === Va ? [] : p, m];
          u ? u(t, 3, F) : t(...F), p = C;
        } finally {
          Pl = $;
        }
      }
    } else s.run();
  };
  return i && i(y), s = new zf(f), s.scheduler = o ? () => o(y, false) : y, m = (b) => x0(b, false, s), h = s.onStop = () => {
    const b = go.get(s);
    if (b) {
      if (u) u(b, 4);
      else for (const C of b) C();
      go.delete(s);
    }
  }, t ? l ? y(true) : p = s.run() : o ? o(y.bind(null, true), true) : s.run(), T.pause = s.pause.bind(s), T.resume = s.resume.bind(s), T.stop = T, T;
}
function Yn(e, t = 1 / 0, n) {
  if (t <= 0 || !St(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
  if (n.add(e), t--, pt(e)) Yn(e.value, t, n);
  else if (Ne(e)) for (let l = 0; l < e.length; l++) Yn(e[l], t, n);
  else if (Pf(e) || fr(e)) e.forEach((l) => {
    Yn(l, t, n);
  });
  else if (Lf(e)) {
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
function Ea(e, t, n, l) {
  try {
    return l ? e(...l) : e();
  } catch (r) {
    Yo(r, t, n);
  }
}
function En(e, t, n, l) {
  if (Qe(e)) {
    const r = Ea(e, t, n, l);
    return r && $f(r) && r.catch((a) => {
      Yo(a, t, n);
    }), r;
  }
  if (Ne(e)) {
    const r = [];
    for (let a = 0; a < e.length; a++) r.push(En(e[a], t, n, l));
    return r;
  }
}
function Yo(e, t, n, l = true) {
  const r = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: o } = t && t.appContext.config || mt;
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
    if (a) {
      _l(), Ea(a, null, 10, [e, u, c]), wl();
      return;
    }
  }
  C0(e, n, r, l, o);
}
function C0(e, t, n, l = true, r = false) {
  if (r) throw e;
  console.error(e);
}
const Gt = [];
let $n = -1;
const vr = [];
let sl = null, ir = 0;
const rv = Promise.resolve();
let bo = null;
function We(e) {
  const t = bo || rv;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function k0(e) {
  let t = $n + 1, n = Gt.length;
  for (; t < n; ) {
    const l = t + n >>> 1, r = Gt[l], a = ha(r);
    a < e || a === e && r.flags & 2 ? t = l + 1 : n = l;
  }
  return t;
}
function vs(e) {
  if (!(e.flags & 1)) {
    const t = ha(e), n = Gt[Gt.length - 1];
    !n || !(e.flags & 2) && t >= ha(n) ? Gt.push(e) : Gt.splice(k0(t), 0, e), e.flags |= 1, av();
  }
}
function av() {
  bo || (bo = rv.then(iv));
}
function T0(e) {
  Ne(e) ? vr.push(...e) : sl && e.id === -1 ? sl.splice(ir + 1, 0, e) : e.flags & 1 || (vr.push(e), e.flags |= 1), av();
}
function oc(e, t, n = $n + 1) {
  for (; n < Gt.length; n++) {
    const l = Gt[n];
    if (l && l.flags & 2) {
      if (e && l.id !== e.uid) continue;
      Gt.splice(n, 1), n--, l.flags & 4 && (l.flags &= -2), l(), l.flags & 4 || (l.flags &= -2);
    }
  }
}
function ov(e) {
  if (vr.length) {
    const t = [...new Set(vr)].sort((n, l) => ha(n) - ha(l));
    if (vr.length = 0, sl) {
      sl.push(...t);
      return;
    }
    for (sl = t, ir = 0; ir < sl.length; ir++) {
      const n = sl[ir];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    sl = null, ir = 0;
  }
}
const ha = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function iv(e) {
  try {
    for ($n = 0; $n < Gt.length; $n++) {
      const t = Gt[$n];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ea(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; $n < Gt.length; $n++) {
      const t = Gt[$n];
      t && (t.flags &= -2);
    }
    $n = -1, Gt.length = 0, ov(), bo = null, (Gt.length || vr.length) && iv();
  }
}
let tn = null, uv = null;
function yo(e) {
  const t = tn;
  return tn = e, uv = e && e.type.__scopeId || null, t;
}
function Rt(e, t = tn, n) {
  if (!t || e._n) return e;
  const l = (...r) => {
    l._d && pc(-1);
    const a = yo(t);
    let o;
    try {
      o = e(...r);
    } finally {
      yo(a), l._d && pc(1);
    }
    return o;
  };
  return l._n = true, l._c = true, l._d = true, l;
}
function sn(e, t) {
  if (tn === null) return e;
  const n = li(tn), l = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [a, o, i, u = mt] = t[r];
    a && (Qe(a) && (a = { mounted: a, updated: a }), a.deep && Yn(o), l.push({ dir: a, instance: n, value: o, oldValue: void 0, arg: i, modifiers: u }));
  }
  return e;
}
function kl(e, t, n, l) {
  const r = e.dirs, a = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    a && (i.oldValue = a[o].value);
    let u = i.dir[l];
    u && (_l(), En(u, n, 8, [e.el, i, e, t]), wl());
  }
}
const sv = Symbol("_vte"), cv = (e) => e.__isTeleport, la = (e) => e && (e.disabled || e.disabled === ""), ic = (e) => e && (e.defer || e.defer === ""), uc = (e) => typeof SVGElement < "u" && e instanceof SVGElement, sc = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, _u = (e, t) => {
  const n = e && e.to;
  return At(n) ? t ? t(n) : null : n;
}, dv = { name: "Teleport", __isTeleport: true, process(e, t, n, l, r, a, o, i, u, c) {
  const { mc: s, pc: f, pbc: h, o: { insert: m, querySelector: g, createText: w, createComment: x } } = c, T = la(t.props);
  let { shapeFlag: p, children: y, dynamicChildren: b } = t;
  if (e == null) {
    const C = t.el = w(""), $ = t.anchor = w("");
    m(C, n, l), m($, n, l);
    const F = (B, L) => {
      p & 16 && (r && r.isCE && (r.ce._teleportTarget = B), s(y, B, L, r, a, o, i, u));
    }, N = () => {
      const B = t.target = _u(t.props, g), L = fv(B, t, w, m);
      B && (o !== "svg" && uc(B) ? o = "svg" : o !== "mathml" && sc(B) && (o = "mathml"), T || (F(B, L), ro(t, false)));
    };
    T && (F(n, $), ro(t, true)), ic(t.props) ? Lt(() => {
      N(), t.el.__isMounted = true;
    }, a) : N();
  } else {
    if (ic(t.props) && !e.el.__isMounted) {
      Lt(() => {
        dv.process(e, t, n, l, r, a, o, i, u, c), delete e.el.__isMounted;
      }, a);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const C = t.anchor = e.anchor, $ = t.target = e.target, F = t.targetAnchor = e.targetAnchor, N = la(e.props), B = N ? n : $, L = N ? C : F;
    if (o === "svg" || uc($) ? o = "svg" : (o === "mathml" || sc($)) && (o = "mathml"), b ? (h(e.dynamicChildren, b, B, r, a, o, i), bs(e, t, true)) : u || f(e, t, B, L, r, a, o, i, false), T) N ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Da(t, n, C, c, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const z = t.target = _u(t.props, g);
      z && Da(t, z, null, c, 0);
    } else N && Da(t, $, F, c, 1);
    ro(t, T);
  }
}, remove(e, t, n, { um: l, o: { remove: r } }, a) {
  const { shapeFlag: o, children: i, anchor: u, targetStart: c, targetAnchor: s, target: f, props: h } = e;
  if (f && (r(c), r(s)), a && r(u), o & 16) {
    const m = a || !la(h);
    for (let g = 0; g < i.length; g++) {
      const w = i[g];
      l(w, t, n, m, !!w.dynamicChildren);
    }
  }
}, move: Da, hydrate: q0 };
function Da(e, t, n, { o: { insert: l }, m: r }, a = 2) {
  a === 0 && l(e.targetAnchor, t, n);
  const { el: o, anchor: i, shapeFlag: u, children: c, props: s } = e, f = a === 2;
  if (f && l(o, t, n), (!f || la(s)) && u & 16) for (let h = 0; h < c.length; h++) r(c[h], t, n, 2);
  f && l(i, t, n);
}
function q0(e, t, n, l, r, a, { o: { nextSibling: o, parentNode: i, querySelector: u, insert: c, createText: s } }, f) {
  const h = t.target = _u(t.props, u);
  if (h) {
    const m = la(t.props), g = h._lpa || h.firstChild;
    if (t.shapeFlag & 16) if (m) t.anchor = f(o(e), t, i(e), n, l, r, a), t.targetStart = g, t.targetAnchor = g && o(g);
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
      t.targetAnchor || fv(h, t, s, c), f(g && o(g), t, h, n, l, r, a);
    }
    ro(t, m);
  }
  return t.anchor && o(t.anchor);
}
const M0 = dv;
function ro(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let l, r;
    for (t ? (l = e.el, r = e.anchor) : (l = e.targetStart, r = e.targetAnchor); l && l !== r; ) l.nodeType === 1 && l.setAttribute("data-v-owner", n.uid), l = l.nextSibling;
    n.ut();
  }
}
function fv(e, t, n, l) {
  const r = t.targetStart = n(""), a = t.targetAnchor = n("");
  return r[sv] = a, e && (l(r, e), l(a, e)), a;
}
const cl = Symbol("_leaveCb"), Ia = Symbol("_enterCb");
function vv() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return ft(() => {
    e.isMounted = true;
  }), Ke(() => {
    e.isUnmounting = true;
  }), e;
}
const dn = [Function, Array], mv = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: dn, onEnter: dn, onAfterEnter: dn, onEnterCancelled: dn, onBeforeLeave: dn, onLeave: dn, onAfterLeave: dn, onLeaveCancelled: dn, onBeforeAppear: dn, onAppear: dn, onAfterAppear: dn, onAppearCancelled: dn }, hv = (e) => {
  const t = e.subTree;
  return t.component ? hv(t.component) : t;
}, E0 = { name: "BaseTransition", props: mv, setup(e, { slots: t }) {
  const n = xe(), l = vv();
  return () => {
    const r = t.default && ms(t.default(), true);
    if (!r || !r.length) return;
    const a = gv(r), o = Xe(e), { mode: i } = o;
    if (l.isLeaving) return Ti(a);
    const u = cc(a);
    if (!u) return Ti(a);
    let c = ga(u, o, l, n, (f) => c = f);
    u.type !== Zt && yl(u, c);
    let s = n.subTree && cc(n.subTree);
    if (s && s.type !== Zt && !vl(u, s) && hv(n).type !== Zt) {
      let f = ga(s, o, l, n);
      if (yl(s, f), i === "out-in" && u.type !== Zt) return l.isLeaving = true, f.afterLeave = () => {
        l.isLeaving = false, n.job.flags & 8 || n.update(), delete f.afterLeave, s = void 0;
      }, Ti(a);
      i === "in-out" && u.type !== Zt ? f.delayLeave = (h, m, g) => {
        const w = bv(l, s);
        w[String(s.key)] = s, h[cl] = () => {
          m(), h[cl] = void 0, delete c.delayedLeave, s = void 0;
        }, c.delayedLeave = () => {
          g(), delete c.delayedLeave, s = void 0;
        };
      } : s = void 0;
    } else s && (s = void 0);
    return a;
  };
} };
function gv(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== Zt) {
      t = n;
      break;
    }
  }
  return t;
}
const R0 = E0;
function bv(e, t) {
  const { leavingVNodes: n } = e;
  let l = n.get(t.type);
  return l || (l = /* @__PURE__ */ Object.create(null), n.set(t.type, l)), l;
}
function ga(e, t, n, l, r) {
  const { appear: a, mode: o, persisted: i = false, onBeforeEnter: u, onEnter: c, onAfterEnter: s, onEnterCancelled: f, onBeforeLeave: h, onLeave: m, onAfterLeave: g, onLeaveCancelled: w, onBeforeAppear: x, onAppear: T, onAfterAppear: p, onAppearCancelled: y } = t, b = String(e.key), C = bv(n, e), $ = (B, L) => {
    B && En(B, l, 9, L);
  }, F = (B, L) => {
    const z = L[1];
    $(B, L), Ne(B) ? B.every((q) => q.length <= 1) && z() : B.length <= 1 && z();
  }, N = { mode: o, persisted: i, beforeEnter(B) {
    let L = u;
    if (!n.isMounted) if (a) L = x || u;
    else return;
    B[cl] && B[cl](true);
    const z = C[b];
    z && vl(e, z) && z.el[cl] && z.el[cl](), $(L, [B]);
  }, enter(B) {
    let L = c, z = s, q = f;
    if (!n.isMounted) if (a) L = T || c, z = p || s, q = y || f;
    else return;
    let E = false;
    const k = B[Ia] = (j) => {
      E || (E = true, j ? $(q, [B]) : $(z, [B]), N.delayedLeave && N.delayedLeave(), B[Ia] = void 0);
    };
    L ? F(L, [B, k]) : k();
  }, leave(B, L) {
    const z = String(e.key);
    if (B[Ia] && B[Ia](true), n.isUnmounting) return L();
    $(h, [B]);
    let q = false;
    const E = B[cl] = (k) => {
      q || (q = true, L(), k ? $(w, [B]) : $(g, [B]), B[cl] = void 0, C[z] === e && delete C[z]);
    };
    C[z] = e, m ? F(m, [B, E]) : E();
  }, clone(B) {
    const L = ga(B, t, n, l, r);
    return r && r(L), L;
  } };
  return N;
}
function Ti(e) {
  if (Xo(e)) return e = Gn(e), e.children = null, e;
}
function cc(e) {
  if (!Xo(e)) return cv(e.type) && e.children ? gv(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && Qe(n.default)) return n.default();
  }
}
function yl(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, yl(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ms(e, t = false, n) {
  let l = [], r = 0;
  for (let a = 0; a < e.length; a++) {
    let o = e[a];
    const i = n == null ? o.key : String(n) + String(o.key != null ? o.key : a);
    o.type === an ? (o.patchFlag & 128 && r++, l = l.concat(ms(o.children, t, i))) : (t || o.type !== Zt) && l.push(i != null ? Gn(o, { key: i }) : o);
  }
  if (r > 1) for (let a = 0; a < l.length; a++) l[a].patchFlag = -2;
  return l;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Mr(e, t) {
  return Qe(e) ? Dt({ name: e.name }, t, { setup: e }) : e;
}
function yv(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function po(e, t, n, l, r = false) {
  if (Ne(e)) {
    e.forEach((g, w) => po(g, t && (Ne(t) ? t[w] : t), n, l, r));
    return;
  }
  if (mr(l) && !r) {
    l.shapeFlag & 512 && l.type.__asyncResolved && l.component.subTree.component && po(e, t, n, l.component.subTree);
    return;
  }
  const a = l.shapeFlag & 4 ? li(l.component) : l.el, o = r ? null : a, { i, r: u } = e, c = t && t.r, s = i.refs === mt ? i.refs = {} : i.refs, f = i.setupState, h = Xe(f), m = f === mt ? () => false : (g) => st(h, g);
  if (c != null && c !== u && (At(c) ? (s[c] = null, m(c) && (f[c] = null)) : pt(c) && (c.value = null)), Qe(u)) Ea(u, i, 12, [o, s]);
  else {
    const g = At(u), w = pt(u);
    if (g || w) {
      const x = () => {
        if (e.f) {
          const T = g ? m(u) ? f[u] : s[u] : u.value;
          r ? Ne(T) && ts(T, a) : Ne(T) ? T.includes(a) || T.push(a) : g ? (s[u] = [a], m(u) && (f[u] = s[u])) : (u.value = [a], e.k && (s[e.k] = u.value));
        } else g ? (s[u] = o, m(u) && (f[u] = o)) : w && (u.value = o, e.k && (s[e.k] = o));
      };
      o ? (x.id = -1, Lt(x, n)) : x();
    }
  }
}
Ma().requestIdleCallback;
Ma().cancelIdleCallback;
const mr = (e) => !!e.type.__asyncLoader, Xo = (e) => e.type.__isKeepAlive, A0 = { name: "KeepAlive", __isKeepAlive: true, props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] }, setup(e, { slots: t }) {
  const n = xe(), l = n.ctx;
  if (!l.renderer) return () => {
    const p = t.default && t.default();
    return p && p.length === 1 ? p[0] : p;
  };
  const r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
  let o = null;
  const i = n.suspense, { renderer: { p: u, m: c, um: s, o: { createElement: f } } } = l, h = f("div");
  l.activate = (p, y, b, C, $) => {
    const F = p.component;
    c(p, y, b, 0, i), u(F.vnode, p, y, b, F, i, C, p.slotScopeIds, $), Lt(() => {
      F.isDeactivated = false, F.a && Jr(F.a);
      const N = p.props && p.props.onVnodeMounted;
      N && vn(N, F.parent, p);
    }, i);
  }, l.deactivate = (p) => {
    const y = p.component;
    wo(y.m), wo(y.a), c(p, h, null, 1, i), Lt(() => {
      y.da && Jr(y.da);
      const b = p.props && p.props.onVnodeUnmounted;
      b && vn(b, y.parent, p), y.isDeactivated = true;
    }, i);
  };
  function m(p) {
    qi(p), s(p, n, i, true);
  }
  function g(p) {
    r.forEach((y, b) => {
      const C = Tu(y.type);
      C && !p(C) && w(b);
    });
  }
  function w(p) {
    const y = r.get(p);
    y && (!o || !vl(y, o)) ? m(y) : o && qi(o), r.delete(p), a.delete(p);
  }
  ge(() => [e.include, e.exclude], ([p, y]) => {
    p && g((b) => Qr(p, b)), y && g((b) => !Qr(y, b));
  }, { flush: "post", deep: true });
  let x = null;
  const T = () => {
    x != null && (xo(n.subTree.type) ? Lt(() => {
      r.set(x, za(n.subTree));
    }, n.subTree.suspense) : r.set(x, za(n.subTree)));
  };
  return ft(T), Jo(T), Ke(() => {
    r.forEach((p) => {
      const { subTree: y, suspense: b } = n, C = za(y);
      if (p.type === C.type && p.key === C.key) {
        qi(C);
        const $ = C.component.da;
        $ && Lt($, b);
        return;
      }
      m(p);
    });
  }), () => {
    if (x = null, !t.default) return o = null;
    const p = t.default(), y = p[0];
    if (p.length > 1) return o = null, p;
    if (!ya(y) || !(y.shapeFlag & 4) && !(y.shapeFlag & 128)) return o = null, y;
    let b = za(y);
    if (b.type === Zt) return o = null, b;
    const C = b.type, $ = Tu(mr(b) ? b.type.__asyncResolved || {} : C), { include: F, exclude: N, max: B } = e;
    if (F && (!$ || !Qr(F, $)) || N && $ && Qr(N, $)) return b.shapeFlag &= -257, o = b, y;
    const L = b.key == null ? C : b.key, z = r.get(L);
    return b.el && (b = Gn(b), y.shapeFlag & 128 && (y.ssContent = b)), x = L, z ? (b.el = z.el, b.component = z.component, b.transition && yl(b, b.transition), b.shapeFlag |= 512, a.delete(L), a.add(L)) : (a.add(L), B && a.size > parseInt(B, 10) && w(a.values().next().value)), b.shapeFlag |= 256, o = b, xo(y.type) ? y : b;
  };
} }, pv = A0;
function Qr(e, t) {
  return Ne(e) ? e.some((n) => Qr(n, t)) : At(e) ? e.split(",").includes(t) : Dg(e) ? (e.lastIndex = 0, e.test(t)) : false;
}
function xl(e, t) {
  _v(e, "a", t);
}
function Vn(e, t) {
  _v(e, "da", t);
}
function _v(e, t, n = Ht) {
  const l = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated) return;
      r = r.parent;
    }
    return e();
  });
  if (Go(t, l, n), n) {
    let r = n.parent;
    for (; r && r.parent; ) Xo(r.parent.vnode) && P0(l, t, n, r), r = r.parent;
  }
}
function P0(e, t, n, l) {
  const r = Go(t, e, l, true);
  ei(() => {
    ts(l[t], r);
  }, n);
}
function qi(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function za(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Go(e, t, n = Ht, l = false) {
  if (n) {
    const r = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...o) => {
      _l();
      const i = Ra(n), u = En(t, n, e, o);
      return i(), wl(), u;
    });
    return l ? r.unshift(a) : r.push(a), a;
  }
}
const Jn = (e) => (t, n = Ht) => {
  (!pa || e === "sp") && Go(e, (...l) => t(...l), n);
}, Zo = Jn("bm"), ft = Jn("m"), Er = Jn("bu"), Jo = Jn("u"), Ke = Jn("bum"), ei = Jn("um"), $0 = Jn("sp"), B0 = Jn("rtg"), L0 = Jn("rtc");
function F0(e, t = Ht) {
  Go("ec", e, t);
}
const wv = "components", O0 = "directives";
function hs(e, t) {
  return xv(wv, e, true, t) || e;
}
const V0 = Symbol.for("v-ndc");
function D0(e) {
  return xv(O0, e);
}
function xv(e, t, n = true, l = false) {
  const r = tn || Ht;
  if (r) {
    const a = r.type;
    if (e === wv) {
      const i = Tu(a, false);
      if (i && (i === t || i === bn(t) || i === Qo(bn(t)))) return a;
    }
    const o = dc(r[e] || a[e], t) || dc(r.appContext[e], t);
    return !o && l ? a : o;
  }
}
function dc(e, t) {
  return e && (e[t] || e[bn(t)] || e[Qo(bn(t))]);
}
const wu = (e) => e ? Nv(e) ? li(e) : wu(e.parent) : null, ra = Dt(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => wu(e.parent), $root: (e) => wu(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => Cv(e), $forceUpdate: (e) => e.f || (e.f = () => {
  vs(e.update);
}), $nextTick: (e) => e.n || (e.n = We.bind(e.proxy)), $watch: (e) => ib.bind(e) }), Mi = (e, t) => e !== mt && !e.__isScriptSetup && st(e, t), I0 = { get({ _: e }, t) {
  if (t === "__v_skip") return true;
  const { ctx: n, setupState: l, data: r, props: a, accessCache: o, type: i, appContext: u } = e;
  let c;
  if (t[0] !== "$") {
    const m = o[t];
    if (m !== void 0) switch (m) {
      case 1:
        return l[t];
      case 2:
        return r[t];
      case 4:
        return n[t];
      case 3:
        return a[t];
    }
    else {
      if (Mi(l, t)) return o[t] = 1, l[t];
      if (r !== mt && st(r, t)) return o[t] = 2, r[t];
      if ((c = e.propsOptions[0]) && st(c, t)) return o[t] = 3, a[t];
      if (n !== mt && st(n, t)) return o[t] = 4, n[t];
      xu && (o[t] = 0);
    }
  }
  const s = ra[t];
  let f, h;
  if (s) return t === "$attrs" && Kt(e.attrs, "get", ""), s(e);
  if ((f = i.__cssModules) && (f = f[t])) return f;
  if (n !== mt && st(n, t)) return o[t] = 4, n[t];
  if (h = u.config.globalProperties, st(h, t)) return h[t];
}, set({ _: e }, t, n) {
  const { data: l, setupState: r, ctx: a } = e;
  return Mi(r, t) ? (r[t] = n, true) : l !== mt && st(l, t) ? (l[t] = n, true) : st(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (a[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: l, appContext: r, propsOptions: a } }, o) {
  let i;
  return !!n[o] || e !== mt && st(e, o) || Mi(t, o) || (i = a[0]) && st(i, o) || st(l, o) || st(ra, o) || st(r.config.globalProperties, o);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : st(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function fc(e) {
  return Ne(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let xu = true;
function z0(e) {
  const t = Cv(e), n = e.proxy, l = e.ctx;
  xu = false, t.beforeCreate && vc(t.beforeCreate, e, "bc");
  const { data: r, computed: a, methods: o, watch: i, provide: u, inject: c, created: s, beforeMount: f, mounted: h, beforeUpdate: m, updated: g, activated: w, deactivated: x, beforeDestroy: T, beforeUnmount: p, destroyed: y, unmounted: b, render: C, renderTracked: $, renderTriggered: F, errorCaptured: N, serverPrefetch: B, expose: L, inheritAttrs: z, components: q, directives: E, filters: k } = t;
  if (c && N0(c, l, null), o) for (const W in o) {
    const X = o[W];
    Qe(X) && (l[W] = X.bind(n));
  }
  if (r) {
    const W = r.call(n, n);
    St(W) && (e.data = Fn(W));
  }
  if (xu = true, a) for (const W in a) {
    const X = a[W], re = Qe(X) ? X.bind(n, n) : Qe(X.get) ? X.get.bind(n, n) : On, pe = !Qe(X) && Qe(X.set) ? X.set.bind(n) : On, Y = v({ get: re, set: pe });
    Object.defineProperty(l, W, { enumerable: true, configurable: true, get: () => Y.value, set: (_) => Y.value = _ });
  }
  if (i) for (const W in i) Sv(i[W], l, n, W);
  if (u) {
    const W = Qe(u) ? u.call(n) : u;
    Reflect.ownKeys(W).forEach((X) => {
      hn(X, W[X]);
    });
  }
  s && vc(s, e, "c");
  function Q(W, X) {
    Ne(X) ? X.forEach((re) => W(re.bind(n))) : X && W(X.bind(n));
  }
  if (Q(Zo, f), Q(ft, h), Q(Er, m), Q(Jo, g), Q(xl, w), Q(Vn, x), Q(F0, N), Q(L0, $), Q(B0, F), Q(Ke, p), Q(ei, b), Q($0, B), Ne(L)) if (L.length) {
    const W = e.exposed || (e.exposed = {});
    L.forEach((X) => {
      Object.defineProperty(W, X, { get: () => n[X], set: (re) => n[X] = re });
    });
  } else e.exposed || (e.exposed = {});
  C && e.render === On && (e.render = C), z != null && (e.inheritAttrs = z), q && (e.components = q), E && (e.directives = E), B && yv(e);
}
function N0(e, t, n = On) {
  Ne(e) && (e = Su(e));
  for (const l in e) {
    const r = e[l];
    let a;
    St(r) ? "default" in r ? a = qt(r.from || l, r.default, true) : a = qt(r.from || l) : a = qt(r), pt(a) ? Object.defineProperty(t, l, { enumerable: true, configurable: true, get: () => a.value, set: (o) => a.value = o }) : t[l] = a;
  }
}
function vc(e, t, n) {
  En(Ne(e) ? e.map((l) => l.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Sv(e, t, n, l) {
  let r = l.includes(".") ? Ov(n, l) : () => n[l];
  if (At(e)) {
    const a = t[e];
    Qe(a) && ge(r, a);
  } else if (Qe(e)) ge(r, e.bind(n));
  else if (St(e)) if (Ne(e)) e.forEach((a) => Sv(a, t, n, l));
  else {
    const a = Qe(e.handler) ? e.handler.bind(n) : t[e.handler];
    Qe(a) && ge(r, a, e);
  }
}
function Cv(e) {
  const t = e.type, { mixins: n, extends: l } = t, { mixins: r, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, i = a.get(t);
  let u;
  return i ? u = i : !r.length && !n && !l ? u = t : (u = {}, r.length && r.forEach((c) => _o(u, c, o, true)), _o(u, t, o)), St(t) && a.set(t, u), u;
}
function _o(e, t, n, l = false) {
  const { mixins: r, extends: a } = t;
  a && _o(e, a, n, true), r && r.forEach((o) => _o(e, o, n, true));
  for (const o in t) if (!(l && o === "expose")) {
    const i = H0[o] || n && n[o];
    e[o] = i ? i(e[o], t[o]) : t[o];
  }
  return e;
}
const H0 = { data: mc, props: hc, emits: hc, methods: Kr, computed: Kr, beforeCreate: Yt, created: Yt, beforeMount: Yt, mounted: Yt, beforeUpdate: Yt, updated: Yt, beforeDestroy: Yt, beforeUnmount: Yt, destroyed: Yt, unmounted: Yt, activated: Yt, deactivated: Yt, errorCaptured: Yt, serverPrefetch: Yt, components: Kr, directives: Kr, watch: U0, provide: mc, inject: j0 };
function mc(e, t) {
  return t ? e ? function() {
    return Dt(Qe(e) ? e.call(this, this) : e, Qe(t) ? t.call(this, this) : t);
  } : t : e;
}
function j0(e, t) {
  return Kr(Su(e), Su(t));
}
function Su(e) {
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
function Kr(e, t) {
  return e ? Dt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function hc(e, t) {
  return e ? Ne(e) && Ne(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Dt(/* @__PURE__ */ Object.create(null), fc(e), fc(t ?? {})) : t;
}
function U0(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Dt(/* @__PURE__ */ Object.create(null), e);
  for (const l in t) n[l] = Yt(e[l], t[l]);
  return n;
}
function kv() {
  return { app: null, config: { isNativeTag: Og, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let Q0 = 0;
function K0(e, t) {
  return function(l, r = null) {
    Qe(l) || (l = Dt({}, l)), r != null && !St(r) && (r = null);
    const a = kv(), o = /* @__PURE__ */ new WeakSet(), i = [];
    let u = false;
    const c = a.app = { _uid: Q0++, _component: l, _props: r, _container: null, _context: a, _instance: null, version: Mb, get config() {
      return a.config;
    }, set config(s) {
    }, use(s, ...f) {
      return o.has(s) || (s && Qe(s.install) ? (o.add(s), s.install(c, ...f)) : Qe(s) && (o.add(s), s(c, ...f))), c;
    }, mixin(s) {
      return a.mixins.includes(s) || a.mixins.push(s), c;
    }, component(s, f) {
      return f ? (a.components[s] = f, c) : a.components[s];
    }, directive(s, f) {
      return f ? (a.directives[s] = f, c) : a.directives[s];
    }, mount(s, f, h) {
      if (!u) {
        const m = c._ceVNode || Je(l, r);
        return m.appContext = a, h === true ? h = "svg" : h === false && (h = void 0), e(m, s, h), u = true, c._container = s, s.__vue_app__ = c, li(m.component);
      }
    }, onUnmount(s) {
      i.push(s);
    }, unmount() {
      u && (En(i, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
    }, provide(s, f) {
      return a.provides[s] = f, c;
    }, runWithContext(s) {
      const f = hr;
      hr = c;
      try {
        return s();
      } finally {
        hr = f;
      }
    } };
    return c;
  };
}
let hr = null;
function hn(e, t) {
  if (Ht) {
    let n = Ht.provides;
    const l = Ht.parent && Ht.parent.provides;
    l === n && (n = Ht.provides = Object.create(l)), n[e] = t;
  }
}
function qt(e, t, n = false) {
  const l = Ht || tn;
  if (l || hr) {
    const r = hr ? hr._context.provides : l ? l.parent == null ? l.vnode.appContext && l.vnode.appContext.provides : l.parent.provides : void 0;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && Qe(t) ? t.call(l && l.proxy) : t;
  }
}
const Tv = {}, qv = () => Object.create(Tv), Mv = (e) => Object.getPrototypeOf(e) === Tv;
function W0(e, t, n, l = false) {
  const r = {}, a = qv();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ev(e, t, r, a);
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
  n ? e.props = l ? r : cs(r) : e.type.props ? e.props = r : e.props = a, e.attrs = a;
}
function Y0(e, t, n, l) {
  const { props: r, attrs: a, vnode: { patchFlag: o } } = e, i = Xe(r), [u] = e.propsOptions;
  let c = false;
  if ((l || o > 0) && !(o & 16)) {
    if (o & 8) {
      const s = e.vnode.dynamicProps;
      for (let f = 0; f < s.length; f++) {
        let h = s[f];
        if (ti(e.emitsOptions, h)) continue;
        const m = t[h];
        if (u) if (st(a, h)) m !== a[h] && (a[h] = m, c = true);
        else {
          const g = bn(h);
          r[g] = Cu(u, i, g, m, e, false);
        }
        else m !== a[h] && (a[h] = m, c = true);
      }
    }
  } else {
    Ev(e, t, r, a) && (c = true);
    let s;
    for (const f in i) (!t || !st(t, f) && ((s = Wl(f)) === f || !st(t, s))) && (u ? n && (n[f] !== void 0 || n[s] !== void 0) && (r[f] = Cu(u, i, f, void 0, e, true)) : delete r[f]);
    if (a !== i) for (const f in a) (!t || !st(t, f)) && (delete a[f], c = true);
  }
  c && Wn(e.attrs, "set", "");
}
function Ev(e, t, n, l) {
  const [r, a] = e.propsOptions;
  let o = false, i;
  if (t) for (let u in t) {
    if (Zr(u)) continue;
    const c = t[u];
    let s;
    r && st(r, s = bn(u)) ? !a || !a.includes(s) ? n[s] = c : (i || (i = {}))[s] = c : ti(e.emitsOptions, u) || (!(u in l) || c !== l[u]) && (l[u] = c, o = true);
  }
  if (a) {
    const u = Xe(n), c = i || mt;
    for (let s = 0; s < a.length; s++) {
      const f = a[s];
      n[f] = Cu(r, u, f, c[f], e, !st(c, f));
    }
  }
  return o;
}
function Cu(e, t, n, l, r, a) {
  const o = e[n];
  if (o != null) {
    const i = st(o, "default");
    if (i && l === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && Qe(u)) {
        const { propsDefaults: c } = r;
        if (n in c) l = c[n];
        else {
          const s = Ra(r);
          l = c[n] = u.call(null, t), s();
        }
      } else l = u;
      r.ce && r.ce._setProp(n, l);
    }
    o[0] && (a && !i ? l = false : o[1] && (l === "" || l === Wl(n)) && (l = true));
  }
  return l;
}
const X0 = /* @__PURE__ */ new WeakMap();
function Rv(e, t, n = false) {
  const l = n ? X0 : t.propsCache, r = l.get(e);
  if (r) return r;
  const a = e.props, o = {}, i = [];
  let u = false;
  if (!Qe(e)) {
    const s = (f) => {
      u = true;
      const [h, m] = Rv(f, t, true);
      Dt(o, h), m && i.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  if (!a && !u) return St(e) && l.set(e, dr), dr;
  if (Ne(a)) for (let s = 0; s < a.length; s++) {
    const f = bn(a[s]);
    gc(f) && (o[f] = mt);
  }
  else if (a) for (const s in a) {
    const f = bn(s);
    if (gc(f)) {
      const h = a[s], m = o[f] = Ne(h) || Qe(h) ? { type: h } : Dt({}, h), g = m.type;
      let w = false, x = true;
      if (Ne(g)) for (let T = 0; T < g.length; ++T) {
        const p = g[T], y = Qe(p) && p.name;
        if (y === "Boolean") {
          w = true;
          break;
        } else y === "String" && (x = false);
      }
      else w = Qe(g) && g.name === "Boolean";
      m[0] = w, m[1] = x, (w || st(m, "default")) && i.push(f);
    }
  }
  const c = [o, i];
  return St(e) && l.set(e, c), c;
}
function gc(e) {
  return e[0] !== "$" && !Zr(e);
}
const Av = (e) => e[0] === "_" || e === "$stable", gs = (e) => Ne(e) ? e.map(Ln) : [Ln(e)], G0 = (e, t, n) => {
  if (t._n) return t;
  const l = Rt((...r) => gs(t(...r)), n);
  return l._c = false, l;
}, Pv = (e, t, n) => {
  const l = e._ctx;
  for (const r in e) {
    if (Av(r)) continue;
    const a = e[r];
    if (Qe(a)) t[r] = G0(r, a, l);
    else if (a != null) {
      const o = gs(a);
      t[r] = () => o;
    }
  }
}, $v = (e, t) => {
  const n = gs(t);
  e.slots.default = () => n;
}, Bv = (e, t, n) => {
  for (const l in t) (n || l !== "_") && (e[l] = t[l]);
}, Z0 = (e, t, n) => {
  const l = e.slots = qv();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Bv(l, t, n), n && Ff(l, "_", r, true)) : Pv(t, l);
  } else t && $v(e, t);
}, J0 = (e, t, n) => {
  const { vnode: l, slots: r } = e;
  let a = true, o = mt;
  if (l.shapeFlag & 32) {
    const i = t._;
    i ? n && i === 1 ? a = false : Bv(r, t, n) : (a = !t.$stable, Pv(t, r)), o = t;
  } else t && ($v(e, t), o = { default: 1 });
  if (a) for (const i in r) !Av(i) && o[i] == null && delete r[i];
};
function eb() {
  typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && (Ma().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false);
}
const Lt = hb;
function tb(e) {
  return nb(e);
}
function nb(e, t) {
  eb();
  const n = Ma();
  n.__VUE__ = true;
  const { insert: l, remove: r, patchProp: a, createElement: o, createText: i, createComment: u, setText: c, setElementText: s, parentNode: f, nextSibling: h, setScopeId: m = On, insertStaticContent: g } = e, w = (S, M, D, ee = null, le = null, P = null, te = void 0, ce = null, de = !!M.dynamicChildren) => {
    if (S === M) return;
    S && !vl(S, M) && (ee = R(S), _(S, le, P, true), S = null), M.patchFlag === -2 && (de = false, M.dynamicChildren = null);
    const { type: me, ref: ae, shapeFlag: U } = M;
    switch (me) {
      case ni:
        x(S, M, D, ee);
        break;
      case Zt:
        T(S, M, D, ee);
        break;
      case Ri:
        S == null && p(M, D, ee, te);
        break;
      case an:
        q(S, M, D, ee, le, P, te, ce, de);
        break;
      default:
        U & 1 ? C(S, M, D, ee, le, P, te, ce, de) : U & 6 ? E(S, M, D, ee, le, P, te, ce, de) : (U & 64 || U & 128) && me.process(S, M, D, ee, le, P, te, ce, de, ne);
    }
    ae != null && le && po(ae, S && S.ref, P, M || S, !M);
  }, x = (S, M, D, ee) => {
    if (S == null) l(M.el = i(M.children), D, ee);
    else {
      const le = M.el = S.el;
      M.children !== S.children && c(le, M.children);
    }
  }, T = (S, M, D, ee) => {
    S == null ? l(M.el = u(M.children || ""), D, ee) : M.el = S.el;
  }, p = (S, M, D, ee) => {
    [S.el, S.anchor] = g(S.children, M, D, ee, S.el, S.anchor);
  }, y = ({ el: S, anchor: M }, D, ee) => {
    let le;
    for (; S && S !== M; ) le = h(S), l(S, D, ee), S = le;
    l(M, D, ee);
  }, b = ({ el: S, anchor: M }) => {
    let D;
    for (; S && S !== M; ) D = h(S), r(S), S = D;
    r(M);
  }, C = (S, M, D, ee, le, P, te, ce, de) => {
    M.type === "svg" ? te = "svg" : M.type === "math" && (te = "mathml"), S == null ? $(M, D, ee, le, P, te, ce, de) : B(S, M, le, P, te, ce, de);
  }, $ = (S, M, D, ee, le, P, te, ce) => {
    let de, me;
    const { props: ae, shapeFlag: U, transition: ie, dirs: we } = S;
    if (de = S.el = o(S.type, P, ae && ae.is, ae), U & 8 ? s(de, S.children) : U & 16 && N(S.children, de, null, ee, le, Ei(S, P), te, ce), we && kl(S, null, ee, "created"), F(de, S, S.scopeId, te, ee), ae) {
      for (const Te in ae) Te !== "value" && !Zr(Te) && a(de, Te, null, ae[Te], P, ee);
      "value" in ae && a(de, "value", null, ae.value, P), (me = ae.onVnodeBeforeMount) && vn(me, ee, S);
    }
    we && kl(S, null, ee, "beforeMount");
    const ke = lb(le, ie);
    ke && ie.beforeEnter(de), l(de, M, D), ((me = ae && ae.onVnodeMounted) || ke || we) && Lt(() => {
      me && vn(me, ee, S), ke && ie.enter(de), we && kl(S, null, ee, "mounted");
    }, le);
  }, F = (S, M, D, ee, le) => {
    if (D && m(S, D), ee) for (let P = 0; P < ee.length; P++) m(S, ee[P]);
    if (le) {
      let P = le.subTree;
      if (M === P || xo(P.type) && (P.ssContent === M || P.ssFallback === M)) {
        const te = le.vnode;
        F(S, te, te.scopeId, te.slotScopeIds, le.parent);
      }
    }
  }, N = (S, M, D, ee, le, P, te, ce, de = 0) => {
    for (let me = de; me < S.length; me++) {
      const ae = S[me] = ce ? dl(S[me]) : Ln(S[me]);
      w(null, ae, M, D, ee, le, P, te, ce);
    }
  }, B = (S, M, D, ee, le, P, te) => {
    const ce = M.el = S.el;
    let { patchFlag: de, dynamicChildren: me, dirs: ae } = M;
    de |= S.patchFlag & 16;
    const U = S.props || mt, ie = M.props || mt;
    let we;
    if (D && Tl(D, false), (we = ie.onVnodeBeforeUpdate) && vn(we, D, M, S), ae && kl(M, S, D, "beforeUpdate"), D && Tl(D, true), (U.innerHTML && ie.innerHTML == null || U.textContent && ie.textContent == null) && s(ce, ""), me ? L(S.dynamicChildren, me, ce, D, ee, Ei(M, le), P) : te || X(S, M, ce, null, D, ee, Ei(M, le), P, false), de > 0) {
      if (de & 16) z(ce, U, ie, D, le);
      else if (de & 2 && U.class !== ie.class && a(ce, "class", null, ie.class, le), de & 4 && a(ce, "style", U.style, ie.style, le), de & 8) {
        const ke = M.dynamicProps;
        for (let Te = 0; Te < ke.length; Te++) {
          const Me = ke[Te], He = U[Me], Ve = ie[Me];
          (Ve !== He || Me === "value") && a(ce, Me, He, Ve, le, D);
        }
      }
      de & 1 && S.children !== M.children && s(ce, M.children);
    } else !te && me == null && z(ce, U, ie, D, le);
    ((we = ie.onVnodeUpdated) || ae) && Lt(() => {
      we && vn(we, D, M, S), ae && kl(M, S, D, "updated");
    }, ee);
  }, L = (S, M, D, ee, le, P, te) => {
    for (let ce = 0; ce < M.length; ce++) {
      const de = S[ce], me = M[ce], ae = de.el && (de.type === an || !vl(de, me) || de.shapeFlag & 70) ? f(de.el) : D;
      w(de, me, ae, null, ee, le, P, te, true);
    }
  }, z = (S, M, D, ee, le) => {
    if (M !== D) {
      if (M !== mt) for (const P in M) !Zr(P) && !(P in D) && a(S, P, M[P], null, le, ee);
      for (const P in D) {
        if (Zr(P)) continue;
        const te = D[P], ce = M[P];
        te !== ce && P !== "value" && a(S, P, ce, te, le, ee);
      }
      "value" in D && a(S, "value", M.value, D.value, le);
    }
  }, q = (S, M, D, ee, le, P, te, ce, de) => {
    const me = M.el = S ? S.el : i(""), ae = M.anchor = S ? S.anchor : i("");
    let { patchFlag: U, dynamicChildren: ie, slotScopeIds: we } = M;
    we && (ce = ce ? ce.concat(we) : we), S == null ? (l(me, D, ee), l(ae, D, ee), N(M.children || [], D, ae, le, P, te, ce, de)) : U > 0 && U & 64 && ie && S.dynamicChildren ? (L(S.dynamicChildren, ie, D, le, P, te, ce), (M.key != null || le && M === le.subTree) && bs(S, M, true)) : X(S, M, D, ae, le, P, te, ce, de);
  }, E = (S, M, D, ee, le, P, te, ce, de) => {
    M.slotScopeIds = ce, S == null ? M.shapeFlag & 512 ? le.ctx.activate(M, D, ee, te, de) : k(M, D, ee, le, P, te, de) : j(S, M, de);
  }, k = (S, M, D, ee, le, P, te) => {
    const ce = S.component = xb(S, ee, le);
    if (Xo(S) && (ce.ctx.renderer = ne), Sb(ce, false, te), ce.asyncDep) {
      if (le && le.registerDep(ce, Q, te), !S.el) {
        const de = ce.subTree = Je(Zt);
        T(null, de, M, D);
      }
    } else Q(ce, S, M, D, le, P, te);
  }, j = (S, M, D) => {
    const ee = M.component = S.component;
    if (vb(S, M, D)) if (ee.asyncDep && !ee.asyncResolved) {
      W(ee, M, D);
      return;
    } else ee.next = M, ee.update();
    else M.el = S.el, ee.vnode = M;
  }, Q = (S, M, D, ee, le, P, te) => {
    const ce = () => {
      if (S.isMounted) {
        let { next: U, bu: ie, u: we, parent: ke, vnode: Te } = S;
        {
          const ye = Lv(S);
          if (ye) {
            U && (U.el = Te.el, W(S, U, te)), ye.asyncDep.then(() => {
              S.isUnmounted || ce();
            });
            return;
          }
        }
        let Me = U, He;
        Tl(S, false), U ? (U.el = Te.el, W(S, U, te)) : U = Te, ie && Jr(ie), (He = U.props && U.props.onVnodeBeforeUpdate) && vn(He, ke, U, Te), Tl(S, true);
        const Ve = bc(S), ue = S.subTree;
        S.subTree = Ve, w(ue, Ve, f(ue.el), R(ue), S, le, P), U.el = Ve.el, Me === null && mb(S, Ve.el), we && Lt(we, le), (He = U.props && U.props.onVnodeUpdated) && Lt(() => vn(He, ke, U, Te), le);
      } else {
        let U;
        const { el: ie, props: we } = M, { bm: ke, m: Te, parent: Me, root: He, type: Ve } = S, ue = mr(M);
        Tl(S, false), ke && Jr(ke), !ue && (U = we && we.onVnodeBeforeMount) && vn(U, Me, M), Tl(S, true);
        {
          He.ce && He.ce._injectChildStyle(Ve);
          const ye = S.subTree = bc(S);
          w(null, ye, D, ee, S, le, P), M.el = ye.el;
        }
        if (Te && Lt(Te, le), !ue && (U = we && we.onVnodeMounted)) {
          const ye = M;
          Lt(() => vn(U, Me, ye), le);
        }
        (M.shapeFlag & 256 || Me && mr(Me.vnode) && Me.vnode.shapeFlag & 256) && S.a && Lt(S.a, le), S.isMounted = true, M = D = ee = null;
      }
    };
    S.scope.on();
    const de = S.effect = new zf(ce);
    S.scope.off();
    const me = S.update = de.run.bind(de), ae = S.job = de.runIfDirty.bind(de);
    ae.i = S, ae.id = S.uid, de.scheduler = () => vs(ae), Tl(S, true), me();
  }, W = (S, M, D) => {
    M.component = S;
    const ee = S.vnode.props;
    S.vnode = M, S.next = null, Y0(S, M.props, ee, D), J0(S, M.children, D), _l(), oc(S), wl();
  }, X = (S, M, D, ee, le, P, te, ce, de = false) => {
    const me = S && S.children, ae = S ? S.shapeFlag : 0, U = M.children, { patchFlag: ie, shapeFlag: we } = M;
    if (ie > 0) {
      if (ie & 128) {
        pe(me, U, D, ee, le, P, te, ce, de);
        return;
      } else if (ie & 256) {
        re(me, U, D, ee, le, P, te, ce, de);
        return;
      }
    }
    we & 8 ? (ae & 16 && A(me, le, P), U !== me && s(D, U)) : ae & 16 ? we & 16 ? pe(me, U, D, ee, le, P, te, ce, de) : A(me, le, P, true) : (ae & 8 && s(D, ""), we & 16 && N(U, D, ee, le, P, te, ce, de));
  }, re = (S, M, D, ee, le, P, te, ce, de) => {
    S = S || dr, M = M || dr;
    const me = S.length, ae = M.length, U = Math.min(me, ae);
    let ie;
    for (ie = 0; ie < U; ie++) {
      const we = M[ie] = de ? dl(M[ie]) : Ln(M[ie]);
      w(S[ie], we, D, null, le, P, te, ce, de);
    }
    me > ae ? A(S, le, P, true, false, U) : N(M, D, ee, le, P, te, ce, de, U);
  }, pe = (S, M, D, ee, le, P, te, ce, de) => {
    let me = 0;
    const ae = M.length;
    let U = S.length - 1, ie = ae - 1;
    for (; me <= U && me <= ie; ) {
      const we = S[me], ke = M[me] = de ? dl(M[me]) : Ln(M[me]);
      if (vl(we, ke)) w(we, ke, D, null, le, P, te, ce, de);
      else break;
      me++;
    }
    for (; me <= U && me <= ie; ) {
      const we = S[U], ke = M[ie] = de ? dl(M[ie]) : Ln(M[ie]);
      if (vl(we, ke)) w(we, ke, D, null, le, P, te, ce, de);
      else break;
      U--, ie--;
    }
    if (me > U) {
      if (me <= ie) {
        const we = ie + 1, ke = we < ae ? M[we].el : ee;
        for (; me <= ie; ) w(null, M[me] = de ? dl(M[me]) : Ln(M[me]), D, ke, le, P, te, ce, de), me++;
      }
    } else if (me > ie) for (; me <= U; ) _(S[me], le, P, true), me++;
    else {
      const we = me, ke = me, Te = /* @__PURE__ */ new Map();
      for (me = ke; me <= ie; me++) {
        const Ce = M[me] = de ? dl(M[me]) : Ln(M[me]);
        Ce.key != null && Te.set(Ce.key, me);
      }
      let Me, He = 0;
      const Ve = ie - ke + 1;
      let ue = false, ye = 0;
      const oe = new Array(Ve);
      for (me = 0; me < Ve; me++) oe[me] = 0;
      for (me = we; me <= U; me++) {
        const Ce = S[me];
        if (He >= Ve) {
          _(Ce, le, P, true);
          continue;
        }
        let Oe;
        if (Ce.key != null) Oe = Te.get(Ce.key);
        else for (Me = ke; Me <= ie; Me++) if (oe[Me - ke] === 0 && vl(Ce, M[Me])) {
          Oe = Me;
          break;
        }
        Oe === void 0 ? _(Ce, le, P, true) : (oe[Oe - ke] = me + 1, Oe >= ye ? ye = Oe : ue = true, w(Ce, M[Oe], D, null, le, P, te, ce, de), He++);
      }
      const _e2 = ue ? rb(oe) : dr;
      for (Me = _e2.length - 1, me = Ve - 1; me >= 0; me--) {
        const Ce = ke + me, Oe = M[Ce], Re = Ce + 1 < ae ? M[Ce + 1].el : ee;
        oe[me] === 0 ? w(null, Oe, D, Re, le, P, te, ce, de) : ue && (Me < 0 || me !== _e2[Me] ? Y(Oe, D, Re, 2) : Me--);
      }
    }
  }, Y = (S, M, D, ee, le = null) => {
    const { el: P, type: te, transition: ce, children: de, shapeFlag: me } = S;
    if (me & 6) {
      Y(S.component.subTree, M, D, ee);
      return;
    }
    if (me & 128) {
      S.suspense.move(M, D, ee);
      return;
    }
    if (me & 64) {
      te.move(S, M, D, ne);
      return;
    }
    if (te === an) {
      l(P, M, D);
      for (let U = 0; U < de.length; U++) Y(de[U], M, D, ee);
      l(S.anchor, M, D);
      return;
    }
    if (te === Ri) {
      y(S, M, D);
      return;
    }
    if (ee !== 2 && me & 1 && ce) if (ee === 0) ce.beforeEnter(P), l(P, M, D), Lt(() => ce.enter(P), le);
    else {
      const { leave: U, delayLeave: ie, afterLeave: we } = ce, ke = () => l(P, M, D), Te = () => {
        U(P, () => {
          ke(), we && we();
        });
      };
      ie ? ie(P, ke, Te) : Te();
    }
    else l(P, M, D);
  }, _ = (S, M, D, ee = false, le = false) => {
    const { type: P, props: te, ref: ce, children: de, dynamicChildren: me, shapeFlag: ae, patchFlag: U, dirs: ie, cacheIndex: we } = S;
    if (U === -2 && (le = false), ce != null && po(ce, null, D, S, true), we != null && (M.renderCache[we] = void 0), ae & 256) {
      M.ctx.deactivate(S);
      return;
    }
    const ke = ae & 1 && ie, Te = !mr(S);
    let Me;
    if (Te && (Me = te && te.onVnodeBeforeUnmount) && vn(Me, M, S), ae & 6) fe(S.component, D, ee);
    else {
      if (ae & 128) {
        S.suspense.unmount(D, ee);
        return;
      }
      ke && kl(S, null, M, "beforeUnmount"), ae & 64 ? S.type.remove(S, M, D, ne, ee) : me && !me.hasOnce && (P !== an || U > 0 && U & 64) ? A(me, M, D, false, true) : (P === an && U & 384 || !le && ae & 16) && A(de, M, D), ee && H(S);
    }
    (Te && (Me = te && te.onVnodeUnmounted) || ke) && Lt(() => {
      Me && vn(Me, M, S), ke && kl(S, null, M, "unmounted");
    }, D);
  }, H = (S) => {
    const { type: M, el: D, anchor: ee, transition: le } = S;
    if (M === an) {
      V(D, ee);
      return;
    }
    if (M === Ri) {
      b(S);
      return;
    }
    const P = () => {
      r(D), le && !le.persisted && le.afterLeave && le.afterLeave();
    };
    if (S.shapeFlag & 1 && le && !le.persisted) {
      const { leave: te, delayLeave: ce } = le, de = () => te(D, P);
      ce ? ce(S.el, P, de) : de();
    } else P();
  }, V = (S, M) => {
    let D;
    for (; S !== M; ) D = h(S), r(S), S = D;
    r(M);
  }, fe = (S, M, D) => {
    const { bum: ee, scope: le, job: P, subTree: te, um: ce, m: de, a: me } = S;
    wo(de), wo(me), ee && Jr(ee), le.stop(), P && (P.flags |= 8, _(te, S, M, D)), ce && Lt(ce, M), Lt(() => {
      S.isUnmounted = true;
    }, M), M && M.pendingBranch && !M.isUnmounted && S.asyncDep && !S.asyncResolved && S.suspenseId === M.pendingId && (M.deps--, M.deps === 0 && M.resolve());
  }, A = (S, M, D, ee = false, le = false, P = 0) => {
    for (let te = P; te < S.length; te++) _(S[te], M, D, ee, le);
  }, R = (S) => {
    if (S.shapeFlag & 6) return R(S.component.subTree);
    if (S.shapeFlag & 128) return S.suspense.next();
    const M = h(S.anchor || S.el), D = M && M[sv];
    return D ? h(D) : M;
  };
  let G = false;
  const O = (S, M, D) => {
    S == null ? M._vnode && _(M._vnode, null, null, true) : w(M._vnode || null, S, M, null, null, null, D), M._vnode = S, G || (G = true, oc(), ov(), G = false);
  }, ne = { p: w, um: _, m: Y, r: H, mt: k, mc: N, pc: X, pbc: L, n: R, o: e };
  return { render: O, hydrate: void 0, createApp: K0(O) };
}
function Ei({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Tl({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function lb(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function bs(e, t, n = false) {
  const l = e.children, r = t.children;
  if (Ne(l) && Ne(r)) for (let a = 0; a < l.length; a++) {
    const o = l[a];
    let i = r[a];
    i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = r[a] = dl(r[a]), i.el = o.el), !n && i.patchFlag !== -2 && bs(o, i)), i.type === ni && (i.el = o.el);
  }
}
function rb(e) {
  const t = e.slice(), n = [0];
  let l, r, a, o, i;
  const u = e.length;
  for (l = 0; l < u; l++) {
    const c = e[l];
    if (c !== 0) {
      if (r = n[n.length - 1], e[r] < c) {
        t[l] = r, n.push(l);
        continue;
      }
      for (a = 0, o = n.length - 1; a < o; ) i = a + o >> 1, e[n[i]] < c ? a = i + 1 : o = i;
      c < e[n[a]] && (a > 0 && (t[l] = n[a - 1]), n[a] = l);
    }
  }
  for (a = n.length, o = n[a - 1]; a-- > 0; ) n[a] = o, o = t[o];
  return n;
}
function Lv(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Lv(t);
}
function wo(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const ab = Symbol.for("v-scx"), ob = () => qt(ab);
function ge(e, t, n) {
  return Fv(e, t, n);
}
function Fv(e, t, n = mt) {
  const { immediate: l, deep: r, flush: a, once: o } = n, i = Dt({}, n), u = t && l || !t && a !== "post";
  let c;
  if (pa) {
    if (a === "sync") {
      const m = ob();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!u) {
      const m = () => {
      };
      return m.stop = On, m.resume = On, m.pause = On, m;
    }
  }
  const s = Ht;
  i.call = (m, g, w) => En(m, s, g, w);
  let f = false;
  a === "post" ? i.scheduler = (m) => {
    Lt(m, s && s.suspense);
  } : a !== "sync" && (f = true, i.scheduler = (m, g) => {
    g ? m() : vs(m);
  }), i.augmentJob = (m) => {
    t && (m.flags |= 4), f && (m.flags |= 2, s && (m.id = s.uid, m.i = s));
  };
  const h = S0(e, t, i);
  return pa && (c ? c.push(h) : u && h()), h;
}
function ib(e, t, n) {
  const l = this.proxy, r = At(e) ? e.includes(".") ? Ov(l, e) : () => l[e] : e.bind(l, l);
  let a;
  Qe(t) ? a = t : (a = t.handler, n = t);
  const o = Ra(this), i = Fv(r, a.bind(l), n);
  return o(), i;
}
function Ov(e, t) {
  const n = t.split(".");
  return () => {
    let l = e;
    for (let r = 0; r < n.length && l; r++) l = l[n[r]];
    return l;
  };
}
const ub = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${bn(t)}Modifiers`] || e[`${Wl(t)}Modifiers`];
function sb(e, t, ...n) {
  if (e.isUnmounted) return;
  const l = e.vnode.props || mt;
  let r = n;
  const a = t.startsWith("update:"), o = a && ub(l, t.slice(7));
  o && (o.trim && (r = n.map((s) => At(s) ? s.trim() : s)), o.number && (r = n.map(Hg)));
  let i, u = l[i = wi(t)] || l[i = wi(bn(t))];
  !u && a && (u = l[i = wi(Wl(t))]), u && En(u, e, 6, r);
  const c = l[i + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[i]) return;
    e.emitted[i] = true, En(c, e, 6, r);
  }
}
function Vv(e, t, n = false) {
  const l = t.emitsCache, r = l.get(e);
  if (r !== void 0) return r;
  const a = e.emits;
  let o = {}, i = false;
  if (!Qe(e)) {
    const u = (c) => {
      const s = Vv(c, t, true);
      s && (i = true, Dt(o, s));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !a && !i ? (St(e) && l.set(e, null), null) : (Ne(a) ? a.forEach((u) => o[u] = null) : Dt(o, a), St(e) && l.set(e, o), o);
}
function ti(e, t) {
  return !e || !jo(t) ? false : (t = t.slice(2).replace(/Once$/, ""), st(e, t[0].toLowerCase() + t.slice(1)) || st(e, Wl(t)) || st(e, t));
}
function bc(e) {
  const { type: t, vnode: n, proxy: l, withProxy: r, propsOptions: [a], slots: o, attrs: i, emit: u, render: c, renderCache: s, props: f, data: h, setupState: m, ctx: g, inheritAttrs: w } = e, x = yo(e);
  let T, p;
  try {
    if (n.shapeFlag & 4) {
      const b = r || l, C = b;
      T = Ln(c.call(C, b, s, f, m, h, g)), p = i;
    } else {
      const b = t;
      T = Ln(b.length > 1 ? b(f, { attrs: i, slots: o, emit: u }) : b(f, null)), p = t.props ? i : db(i);
    }
  } catch (b) {
    aa.length = 0, Yo(b, e, 1), T = Je(Zt);
  }
  let y = T;
  if (p && w !== false) {
    const b = Object.keys(p), { shapeFlag: C } = y;
    b.length && C & 7 && (a && b.some(es) && (p = fb(p, a)), y = Gn(y, p, false, true));
  }
  return n.dirs && (y = Gn(y, null, false, true), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && yl(y, n.transition), T = y, yo(x), T;
}
const db = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || jo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, fb = (e, t) => {
  const n = {};
  for (const l in e) (!es(l) || !(l.slice(9) in t)) && (n[l] = e[l]);
  return n;
};
function vb(e, t, n) {
  const { props: l, children: r, component: a } = e, { props: o, children: i, patchFlag: u } = t, c = a.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && u >= 0) {
    if (u & 1024) return true;
    if (u & 16) return l ? yc(l, o, c) : !!o;
    if (u & 8) {
      const s = t.dynamicProps;
      for (let f = 0; f < s.length; f++) {
        const h = s[f];
        if (o[h] !== l[h] && !ti(c, h)) return true;
      }
    }
  } else return (r || i) && (!i || !i.$stable) ? true : l === o ? false : l ? o ? yc(l, o, c) : true : !!o;
  return false;
}
function yc(e, t, n) {
  const l = Object.keys(t);
  if (l.length !== Object.keys(e).length) return true;
  for (let r = 0; r < l.length; r++) {
    const a = l[r];
    if (t[a] !== e[a] && !ti(n, a)) return true;
  }
  return false;
}
function mb({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const l = t.subTree;
    if (l.suspense && l.suspense.activeBranch === e && (l.el = e.el), l === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const xo = (e) => e.__isSuspense;
function hb(e, t) {
  t && t.pendingBranch ? Ne(e) ? t.effects.push(...e) : t.effects.push(e) : T0(e);
}
const an = Symbol.for("v-fgt"), ni = Symbol.for("v-txt"), Zt = Symbol.for("v-cmt"), Ri = Symbol.for("v-stc"), aa = [];
let un = null;
function Xn(e = false) {
  aa.push(un = e ? null : []);
}
function gb() {
  aa.pop(), un = aa[aa.length - 1] || null;
}
let ba = 1;
function pc(e, t = false) {
  ba += e, e < 0 && un && t && (un.hasOnce = true);
}
function Dv(e) {
  return e.dynamicChildren = ba > 0 ? un || dr : null, gb(), ba > 0 && un && un.push(e), e;
}
function Iv(e, t, n, l, r, a) {
  return Dv(Bn(e, t, n, l, r, a, true));
}
function Bl(e, t, n, l, r) {
  return Dv(Je(e, t, n, l, r, true));
}
function ya(e) {
  return e ? e.__v_isVNode === true : false;
}
function vl(e, t) {
  return e.type === t.type && e.key === t.key;
}
const zv = ({ key: e }) => e ?? null, ao = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? At(e) || pt(e) || Qe(e) ? { i: tn, r: e, k: t, f: !!n } : e : null);
function Bn(e, t = null, n = null, l = 0, r = null, a = e === an ? 0 : 1, o = false, i = false) {
  const u = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && zv(t), ref: t && ao(t), scopeId: uv, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: a, patchFlag: l, dynamicProps: r, dynamicChildren: null, appContext: null, ctx: tn };
  return i ? (ys(u, n), a & 128 && e.normalize(u)) : n && (u.shapeFlag |= At(n) ? 8 : 16), ba > 0 && !o && un && (u.patchFlag > 0 || a & 6) && u.patchFlag !== 32 && un.push(u), u;
}
const Je = bb;
function bb(e, t = null, n = null, l = 0, r = null, a = false) {
  if ((!e || e === V0) && (e = Zt), ya(e)) {
    const i = Gn(e, t, true);
    return n && ys(i, n), ba > 0 && !a && un && (i.shapeFlag & 6 ? un[un.indexOf(e)] = i : un.push(i)), i.patchFlag = -2, i;
  }
  if (qb(e) && (e = e.__vccOpts), t) {
    t = yb(t);
    let { class: i, style: u } = t;
    i && !At(i) && (t.class = ls(i)), St(u) && (fs(u) && !Ne(u) && (u = Dt({}, u)), t.style = Ko(u));
  }
  const o = At(e) ? 1 : xo(e) ? 128 : cv(e) ? 64 : St(e) ? 4 : Qe(e) ? 2 : 0;
  return Bn(e, t, n, l, r, o, a, true);
}
function yb(e) {
  return e ? fs(e) || Mv(e) ? Dt({}, e) : e : null;
}
function Gn(e, t, n = false, l = false) {
  const { props: r, ref: a, patchFlag: o, children: i, transition: u } = e, c = t ? pb(r || {}, t) : r, s = { __v_isVNode: true, __v_skip: true, type: e.type, props: c, key: c && zv(c), ref: t && t.ref ? n && a ? Ne(a) ? a.concat(ao(t)) : [a, ao(t)] : ao(t) : a, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: i, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== an ? o === -1 ? 16 : o | 16 : o, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: u, component: e.component, suspense: e.suspense, ssContent: e.ssContent && Gn(e.ssContent), ssFallback: e.ssFallback && Gn(e.ssFallback), el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return u && l && yl(s, u.clone(s)), s;
}
function Ll(e = " ", t = 0) {
  return Je(ni, null, e, t);
}
function _c(e = "", t = false) {
  return t ? (Xn(), Bl(Zt, null, e)) : Je(Zt, null, e);
}
function Ln(e) {
  return e == null || typeof e == "boolean" ? Je(Zt) : Ne(e) ? Je(an, null, e.slice()) : ya(e) ? dl(e) : Je(ni, null, String(e));
}
function dl(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Gn(e);
}
function ys(e, t) {
  let n = 0;
  const { shapeFlag: l } = e;
  if (t == null) t = null;
  else if (Ne(t)) n = 16;
  else if (typeof t == "object") if (l & 65) {
    const r = t.default;
    r && (r._c && (r._d = false), ys(e, r()), r._c && (r._d = true));
    return;
  } else {
    n = 32;
    const r = t._;
    !r && !Mv(t) ? t._ctx = tn : r === 3 && tn && (tn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else Qe(t) ? (t = { default: t, _ctx: tn }, n = 32) : (t = String(t), l & 64 ? (n = 16, t = [Ll(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function pb(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const l = e[n];
    for (const r in l) if (r === "class") t.class !== l.class && (t.class = ls([t.class, l.class]));
    else if (r === "style") t.style = Ko([t.style, l.style]);
    else if (jo(r)) {
      const a = t[r], o = l[r];
      o && a !== o && !(Ne(a) && a.includes(o)) && (t[r] = a ? [].concat(a, o) : o);
    } else r !== "" && (t[r] = l[r]);
  }
  return t;
}
function vn(e, t, n, l = null) {
  En(e, t, 7, [n, l]);
}
const _b = kv();
let wb = 0;
function xb(e, t, n) {
  const l = e.type, r = (t ? t.appContext : e.appContext) || _b, a = { uid: wb++, vnode: e, type: l, parent: t, appContext: r, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new Gg(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(r.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: Rv(l, r), emitsOptions: Vv(l, r), emit: null, emitted: null, propsDefaults: mt, inheritAttrs: l.inheritAttrs, ctx: mt, data: mt, props: mt, attrs: mt, slots: mt, refs: mt, setupState: mt, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = sb.bind(null, a), e.ce && e.ce(a), a;
}
let Ht = null;
const xe = () => Ht || tn;
let So, ku;
{
  const e = Ma(), t = (n, l) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(l), (a) => {
      r.length > 1 ? r.forEach((o) => o(a)) : r[0](a);
    };
  };
  So = t("__VUE_INSTANCE_SETTERS__", (n) => Ht = n), ku = t("__VUE_SSR_SETTERS__", (n) => pa = n);
}
const Ra = (e) => {
  const t = Ht;
  return So(e), e.scope.on(), () => {
    e.scope.off(), So(t);
  };
}, wc = () => {
  Ht && Ht.scope.off(), So(null);
};
function Nv(e) {
  return e.vnode.shapeFlag & 4;
}
let pa = false;
function Sb(e, t = false, n = false) {
  t && ku(t);
  const { props: l, children: r } = e.vnode, a = Nv(e);
  W0(e, l, a, t), Z0(e, r, n);
  const o = a ? Cb(e, t) : void 0;
  return t && ku(false), o;
}
function Cb(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, I0);
  const { setup: l } = n;
  if (l) {
    _l();
    const r = e.setupContext = l.length > 1 ? Tb(e) : null, a = Ra(e), o = Ea(l, e, 0, [e.props, r]), i = $f(o);
    if (wl(), a(), (i || e.sp) && !mr(e) && yv(e), i) {
      if (o.then(wc, wc), t) return o.then((u) => {
        xc(e, u);
      }).catch((u) => {
        Yo(u, e, 0);
      });
      e.asyncDep = o;
    } else xc(e, o);
  } else Hv(e);
}
function xc(e, t, n) {
  Qe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : St(t) && (e.setupState = lv(t)), Hv(e);
}
function Hv(e, t, n) {
  const l = e.type;
  e.render || (e.render = l.render || On);
  {
    const r = Ra(e);
    _l();
    try {
      z0(e);
    } finally {
      wl(), r();
    }
  }
}
const kb = { get(e, t) {
  return Kt(e, "get", ""), e[t];
} };
function Tb(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, kb), slots: e.slots, emit: e.emit, expose: t };
}
function li(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(lv(Wo(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in ra) return ra[n](e);
  }, has(t, n) {
    return n in t || n in ra;
  } })) : e.proxy;
}
function Tu(e, t = true) {
  return Qe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function qb(e) {
  return Qe(e) && "__vccOpts" in e;
}
const v = (e, t) => w0(e, t, pa);
function d(e, t, n) {
  const l = arguments.length;
  return l === 2 ? St(t) && !Ne(t) ? ya(t) ? Je(e, null, [t]) : Je(e, t) : Je(e, null, t) : (l > 3 ? n = Array.prototype.slice.call(arguments, 2) : l === 3 && ya(n) && (n = [n]), Je(e, t, n));
}
const Mb = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let qu;
const Sc = typeof window < "u" && window.trustedTypes;
if (Sc) try {
  qu = Sc.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const jv = qu ? (e) => qu.createHTML(e) : (e) => e, Eb = "http://www.w3.org/2000/svg", Rb = "http://www.w3.org/1998/Math/MathML", Kn = typeof document < "u" ? document : null, Cc = Kn && Kn.createElement("template"), Ab = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, l) => {
  const r = t === "svg" ? Kn.createElementNS(Eb, e) : t === "mathml" ? Kn.createElementNS(Rb, e) : n ? Kn.createElement(e, { is: n }) : Kn.createElement(e);
  return e === "select" && l && l.multiple != null && r.setAttribute("multiple", l.multiple), r;
}, createText: (e) => Kn.createTextNode(e), createComment: (e) => Kn.createComment(e), setText: (e, t) => {
  e.nodeValue = t;
}, setElementText: (e, t) => {
  e.textContent = t;
}, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => Kn.querySelector(e), setScopeId(e, t) {
  e.setAttribute(t, "");
}, insertStaticContent(e, t, n, l, r, a) {
  const o = n ? n.previousSibling : t.lastChild;
  if (r && (r === a || r.nextSibling)) for (; t.insertBefore(r.cloneNode(true), n), !(r === a || !(r = r.nextSibling)); ) ;
  else {
    Cc.innerHTML = jv(l === "svg" ? `<svg>${e}</svg>` : l === "mathml" ? `<math>${e}</math>` : e);
    const i = Cc.content;
    if (l === "svg" || l === "mathml") {
      const u = i.firstChild;
      for (; u.firstChild; ) i.appendChild(u.firstChild);
      i.removeChild(u);
    }
    t.insertBefore(i, n);
  }
  return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, ll = "transition", Fr = "animation", xr = Symbol("_vtc"), Uv = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, Qv = Dt({}, mv, Uv), Pb = (e) => (e.displayName = "Transition", e.props = Qv, e), Ft = Pb((e, { slots: t }) => d(R0, Kv(e), t)), ql = (e, t = []) => {
  Ne(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, kc = (e) => e ? Ne(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function Kv(e) {
  const t = {};
  for (const q in e) q in Uv || (t[q] = e[q]);
  if (e.css === false) return t;
  const { name: n = "v", type: l, duration: r, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: i = `${n}-enter-to`, appearFromClass: u = a, appearActiveClass: c = o, appearToClass: s = i, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: h = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, g = $b(r), w = g && g[0], x = g && g[1], { onBeforeEnter: T, onEnter: p, onEnterCancelled: y, onLeave: b, onLeaveCancelled: C, onBeforeAppear: $ = T, onAppear: F = p, onAppearCancelled: N = y } = t, B = (q, E, k, j) => {
    q._enterCancelled = j, il(q, E ? s : i), il(q, E ? c : o), k && k();
  }, L = (q, E) => {
    q._isLeaving = false, il(q, f), il(q, m), il(q, h), E && E();
  }, z = (q) => (E, k) => {
    const j = q ? F : p, Q = () => B(E, q, k);
    ql(j, [E, Q]), Tc(() => {
      il(E, q ? u : a), Pn(E, q ? s : i), kc(j) || qc(E, l, w, Q);
    });
  };
  return Dt(t, { onBeforeEnter(q) {
    ql(T, [q]), Pn(q, a), Pn(q, o);
  }, onBeforeAppear(q) {
    ql($, [q]), Pn(q, u), Pn(q, c);
  }, onEnter: z(false), onAppear: z(true), onLeave(q, E) {
    q._isLeaving = true;
    const k = () => L(q, E);
    Pn(q, f), q._enterCancelled ? (Pn(q, h), Mu()) : (Mu(), Pn(q, h)), Tc(() => {
      q._isLeaving && (il(q, f), Pn(q, m), kc(b) || qc(q, l, x, k));
    }), ql(b, [q, k]);
  }, onEnterCancelled(q) {
    B(q, false, void 0, true), ql(y, [q]);
  }, onAppearCancelled(q) {
    B(q, true, void 0, true), ql(N, [q]);
  }, onLeaveCancelled(q) {
    L(q), ql(C, [q]);
  } });
}
function $b(e) {
  if (e == null) return null;
  if (St(e)) return [Ai(e.enter), Ai(e.leave)];
  {
    const t = Ai(e);
    return [t, t];
  }
}
function Ai(e) {
  return jg(e);
}
function Pn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[xr] || (e[xr] = /* @__PURE__ */ new Set())).add(t);
}
function il(e, t) {
  t.split(/\s+/).forEach((l) => l && e.classList.remove(l));
  const n = e[xr];
  n && (n.delete(t), n.size || (e[xr] = void 0));
}
function Tc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Bb = 0;
function qc(e, t, n, l) {
  const r = e._endId = ++Bb, a = () => {
    r === e._endId && l();
  };
  if (n != null) return setTimeout(a, n);
  const { type: o, timeout: i, propCount: u } = Wv(e, t);
  if (!o) return l();
  const c = o + "end";
  let s = 0;
  const f = () => {
    e.removeEventListener(c, h), a();
  }, h = (m) => {
    m.target === e && ++s >= u && f();
  };
  setTimeout(() => {
    s < u && f();
  }, i + 1), e.addEventListener(c, h);
}
function Wv(e, t) {
  const n = window.getComputedStyle(e), l = (g) => (n[g] || "").split(", "), r = l(`${ll}Delay`), a = l(`${ll}Duration`), o = Mc(r, a), i = l(`${Fr}Delay`), u = l(`${Fr}Duration`), c = Mc(i, u);
  let s = null, f = 0, h = 0;
  t === ll ? o > 0 && (s = ll, f = o, h = a.length) : t === Fr ? c > 0 && (s = Fr, f = c, h = u.length) : (f = Math.max(o, c), s = f > 0 ? o > c ? ll : Fr : null, h = s ? s === ll ? a.length : u.length : 0);
  const m = s === ll && /\b(transform|all)(,|$)/.test(l(`${ll}Property`).toString());
  return { type: s, timeout: f, propCount: h, hasTransform: m };
}
function Mc(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, l) => Ec(n) + Ec(e[l])));
}
function Ec(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Mu() {
  return document.body.offsetHeight;
}
function Lb(e, t, n) {
  const l = e[xr];
  l && (t = (t ? [t, ...l] : [...l]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Co = Symbol("_vod"), Yv = Symbol("_vsh"), Xv = { beforeMount(e, { value: t }, { transition: n }) {
  e[Co] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Or(e, t);
}, mounted(e, { value: t }, { transition: n }) {
  n && t && n.enter(e);
}, updated(e, { value: t, oldValue: n }, { transition: l }) {
  !t != !n && (l ? t ? (l.beforeEnter(e), Or(e, true), l.enter(e)) : l.leave(e, () => {
    Or(e, false);
  }) : Or(e, t));
}, beforeUnmount(e, { value: t }) {
  Or(e, t);
} };
function Or(e, t) {
  e.style.display = t ? e[Co] : "none", e[Yv] = !t;
}
const Fb = Symbol(""), Ob = /(^|;)\s*display\s*:/;
function Vb(e, t, n) {
  const l = e.style, r = At(n);
  let a = false;
  if (n && !r) {
    if (t) if (At(t)) for (const o of t.split(";")) {
      const i = o.slice(0, o.indexOf(":")).trim();
      n[i] == null && oo(l, i, "");
    }
    else for (const o in t) n[o] == null && oo(l, o, "");
    for (const o in n) o === "display" && (a = true), oo(l, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = l[Fb];
      o && (n += ";" + o), l.cssText = n, a = Ob.test(n);
    }
  } else t && e.removeAttribute("style");
  Co in e && (e[Co] = a ? l.display : "", e[Yv] && (l.display = "none"));
}
const Rc = /\s*!important$/;
function oo(e, t, n) {
  if (Ne(n)) n.forEach((l) => oo(e, t, l));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const l = Db(e, t);
    Rc.test(n) ? e.setProperty(Wl(l), n.replace(Rc, ""), "important") : e[l] = n;
  }
}
const Ac = ["Webkit", "Moz", "ms"], Pi = {};
function Db(e, t) {
  const n = Pi[t];
  if (n) return n;
  let l = bn(t);
  if (l !== "filter" && l in e) return Pi[t] = l;
  l = Qo(l);
  for (let r = 0; r < Ac.length; r++) {
    const a = Ac[r] + l;
    if (a in e) return Pi[t] = a;
  }
  return t;
}
const Pc = "http://www.w3.org/1999/xlink";
function $c(e, t, n, l, r, a = Xg(t)) {
  l && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Pc, t.slice(6, t.length)) : e.setAttributeNS(Pc, t, n) : n == null || a && !Of(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : pl(n) ? String(n) : n);
}
function Bc(e, t, n, l, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? jv(n) : n);
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
    const i = a === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
    (i !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = false;
  if (n === "" || n == null) {
    const i = typeof e[t];
    i === "boolean" ? n = Of(n) : n == null && i === "string" ? (n = "", o = true) : i === "number" && (n = 0, o = true);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function Ib(e, t, n, l) {
  e.addEventListener(t, n, l);
}
function zb(e, t, n, l) {
  e.removeEventListener(t, n, l);
}
const Lc = Symbol("_vei");
function Nb(e, t, n, l, r = null) {
  const a = e[Lc] || (e[Lc] = {}), o = a[t];
  if (l && o) o.value = l;
  else {
    const [i, u] = Hb(t);
    if (l) {
      const c = a[t] = Qb(l, r);
      Ib(e, i, c, u);
    } else o && (zb(e, i, o, u), a[t] = void 0);
  }
}
const Fc = /(?:Once|Passive|Capture)$/;
function Hb(e) {
  let t;
  if (Fc.test(e)) {
    t = {};
    let l;
    for (; l = e.match(Fc); ) e = e.slice(0, e.length - l[0].length), t[l[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : Wl(e.slice(2)), t];
}
let $i = 0;
const jb = Promise.resolve(), Ub = () => $i || (jb.then(() => $i = 0), $i = Date.now());
function Qb(e, t) {
  const n = (l) => {
    if (!l._vts) l._vts = Date.now();
    else if (l._vts <= n.attached) return;
    En(Kb(l, n.value), t, 5, [l]);
  };
  return n.value = e, n.attached = Ub(), n;
}
function Kb(e, t) {
  if (Ne(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((l) => (r) => !r._stopped && l && l(r));
  } else return t;
}
const Oc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Wb = (e, t, n, l, r, a) => {
  const o = r === "svg";
  t === "class" ? Lb(e, l, o) : t === "style" ? Vb(e, n, l) : jo(t) ? es(t) || Nb(e, t, n, l, a) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Yb(e, t, l, o)) ? (Bc(e, t, l), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && $c(e, t, l, o, a, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !At(l)) ? Bc(e, bn(t), l, a, t) : (t === "true-value" ? e._trueValue = l : t === "false-value" && (e._falseValue = l), $c(e, t, l, o));
};
function Yb(e, t, n, l) {
  if (l) return !!(t === "innerHTML" || t === "textContent" || t in e && Oc(t) && Qe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return false;
  }
  return Oc(t) && At(n) ? false : t in e;
}
const Gv = /* @__PURE__ */ new WeakMap(), Zv = /* @__PURE__ */ new WeakMap(), ko = Symbol("_moveCb"), Vc = Symbol("_enterCb"), Xb = (e) => (delete e.props.mode, e), Gb = Xb({ name: "TransitionGroup", props: Dt({}, Qv, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = xe(), l = vv();
  let r, a;
  return Jo(() => {
    if (!r.length) return;
    const o = e.moveClass || `${e.name || "v"}-move`;
    if (!ny(r[0].el, n.vnode.el, o)) return;
    r.forEach(Jb), r.forEach(ey);
    const i = r.filter(ty);
    Mu(), i.forEach((u) => {
      const c = u.el, s = c.style;
      Pn(c, o), s.transform = s.webkitTransform = s.transitionDuration = "";
      const f = c[ko] = (h) => {
        h && h.target !== c || (!h || /transform$/.test(h.propertyName)) && (c.removeEventListener("transitionend", f), c[ko] = null, il(c, o));
      };
      c.addEventListener("transitionend", f);
    });
  }), () => {
    const o = Xe(e), i = Kv(o);
    let u = o.tag || an;
    if (r = [], a) for (let c = 0; c < a.length; c++) {
      const s = a[c];
      s.el && s.el instanceof Element && (r.push(s), yl(s, ga(s, i, l, n)), Gv.set(s, s.el.getBoundingClientRect()));
    }
    a = t.default ? ms(t.default()) : [];
    for (let c = 0; c < a.length; c++) {
      const s = a[c];
      s.key != null && yl(s, ga(s, i, l, n));
    }
    return Je(u, null, a);
  };
} }), Zb = Gb;
function Jb(e) {
  const t = e.el;
  t[ko] && t[ko](), t[Vc] && t[Vc]();
}
function ey(e) {
  Zv.set(e, e.el.getBoundingClientRect());
}
function ty(e) {
  const t = Gv.get(e), n = Zv.get(e), l = t.left - n.left, r = t.top - n.top;
  if (l || r) {
    const a = e.el.style;
    return a.transform = a.webkitTransform = `translate(${l}px,${r}px)`, a.transitionDuration = "0s", e;
  }
}
function ny(e, t, n) {
  const l = e.cloneNode(), r = e[xr];
  r && r.forEach((i) => {
    i.split(/\s+/).forEach((u) => u && l.classList.remove(u));
  }), n.split(/\s+/).forEach((i) => i && l.classList.add(i)), l.style.display = "none";
  const a = t.nodeType === 1 ? t : t.parentNode;
  a.appendChild(l);
  const { hasTransform: o } = Wv(l);
  return a.removeChild(l), o;
}
const ly = Dt({ patchProp: Wb }, Ab);
let Dc;
function ry() {
  return Dc || (Dc = tb(ly));
}
const Jv = (...e) => {
  const t = ry().createApp(...e), { mount: n } = t;
  return t.mount = (l) => {
    const r = oy(l);
    if (!r) return;
    const a = t._component;
    !Qe(a) && !a.render && !a.template && (a.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, false, ay(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
};
function ay(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function oy(e) {
  return At(e) ? document.querySelector(e) : e;
}
/*!
* Quasar Framework v2.18.1
* (c) 2015-present Razvan Stoenescu
* Released under the MIT License.
*/
var Bi = null;
function ps() {
  return Bi !== null ? Bi : Bi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
typeof __QUASAR_SSR__ != "boolean" && (ps().__QUASAR_SSR__ = false);
typeof __QUASAR_SSR_CLIENT__ != "boolean" && (ps().__QUASAR_SSR_CLIENT__ = false);
typeof __QUASAR_SSR_PWA__ != "boolean" && (ps().__QUASAR_SSR_PWA__ = false);
function Ot(e, t, n, l) {
  return Object.defineProperty(e, t, { get: n, set: l, enumerable: true }), e;
}
function em(e, t) {
  for (const n in t) Ot(e, n, t[n]);
  return e;
}
var nn = K(__QUASAR_SSR_CLIENT__ && (__QUASAR_SSR_PWA__ ? document.body.getAttribute("data-server-rendered") !== null : true)), Eu;
function iy(e, t) {
  const n = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
  return { browser: n[5] || n[3] || n[1] || "", version: n[4] || n[2] || "0", platform: t[0] || "" };
}
function uy(e) {
  return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
}
var tm = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function sy(e) {
  const t = e.toLowerCase(), n = uy(t), l = iy(t, n), r = { mobile: false, desktop: false, cordova: false, capacitor: false, nativeMobile: false, electron: false, bex: false, linux: false, mac: false, win: false, cros: false, chrome: false, firefox: false, opera: false, safari: false, vivaldi: false, edge: false, edgeChromium: false, ie: false, webkit: false, android: false, ios: false, ipad: false, iphone: false, ipod: false, kindle: false, winphone: false, blackberry: false, playbook: false, silk: false };
  l.browser && (r[l.browser] = true, r.version = l.version, r.versionNumber = parseInt(l.version, 10)), l.platform && (r[l.platform] = true);
  const a = r.android || r.ios || r.bb || r.blackberry || r.ipad || r.iphone || r.ipod || r.kindle || r.playbook || r.silk || r["windows phone"];
  if (a === true || t.indexOf("mobile") !== -1 ? r.mobile = true : r.desktop = true, r["windows phone"] && (r.winphone = true, delete r["windows phone"]), r.edga || r.edgios || r.edg ? (r.edge = true, l.browser = "edge") : r.crios ? (r.chrome = true, l.browser = "chrome") : r.fxios && (r.firefox = true, l.browser = "firefox"), (r.ipod || r.ipad || r.iphone) && (r.ios = true), r.vivaldi && (l.browser = "vivaldi", r.vivaldi = true), (r.chrome || r.opr || r.safari || r.vivaldi || r.mobile === true && r.ios !== true && a !== true) && (r.webkit = true), r.opr && (l.browser = "opera", r.opera = true), r.safari && (r.blackberry || r.bb ? (l.browser = "blackberry", r.blackberry = true) : r.playbook ? (l.browser = "playbook", r.playbook = true) : r.android ? (l.browser = "android", r.android = true) : r.kindle ? (l.browser = "kindle", r.kindle = true) : r.silk && (l.browser = "silk", r.silk = true)), r.name = l.browser, r.platform = l.platform, t.indexOf("electron") !== -1) r.electron = true;
  else if (document.location.href.indexOf("-extension://") !== -1) r.bex = true;
  else {
    if (window.Capacitor !== void 0 ? (r.capacitor = true, r.nativeMobile = true, r.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (r.cordova = true, r.nativeMobile = true, r.nativeMobileWrapper = "cordova"), nn.value === true && (Eu = { is: { ...r } }), tm === true && r.mac === true && (r.desktop === true && r.safari === true || r.nativeMobile === true && r.android !== true && r.ios !== true && r.ipad !== true)) {
      delete r.mac, delete r.desktop;
      const o = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
      Object.assign(r, { mobile: true, ios: true, platform: o, [o]: true });
    }
    r.mobile !== true && window.navigator.userAgentData && window.navigator.userAgentData.mobile && (delete r.desktop, r.mobile = true);
  }
  return r;
}
var Ic = navigator.userAgent || navigator.vendor || window.opera, cy = { has: { touch: false, webStorage: false }, within: { iframe: false } }, De = { userAgent: Ic, is: sy(Ic), has: { touch: tm }, within: { iframe: window.self !== window.top } }, Ru = { install(e) {
  const { $q: t } = e;
  nn.value === true ? (e.onSSRHydrated.push(() => {
    Object.assign(t.platform, De), nn.value = false;
  }), t.platform = Fn(this)) : t.platform = this;
} };
{
  let e;
  Ot(De.has, "webStorage", () => {
    if (e !== void 0) return e;
    try {
      if (window.localStorage) return e = true, true;
    } catch {
    }
    return e = false, false;
  }), Object.assign(Ru, De), nn.value === true && (Object.assign(Ru, Eu, cy), Eu = null);
}
var nm = Ru;
function he(e) {
  return Wo(/* @__PURE__ */ Mr(e));
}
function An(e) {
  return Wo(e);
}
var Sl = (e, t) => {
  const n = Fn(e);
  for (const l in e) Ot(t, l, () => n[l], (r) => {
    n[l] = r;
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
function xt() {
}
function ri(e) {
  return e.button === 0;
}
function en(e) {
  return e.touches && e.touches[0] ? e = e.touches[0] : e.changedTouches && e.changedTouches[0] ? e = e.changedTouches[0] : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]), { top: e.clientY, left: e.clientX };
}
function dy(e) {
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
function gr(e, t) {
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
  e[l] = e[l] !== void 0 ? e[l].concat(n) : n, n.forEach((r) => {
    r[0].addEventListener(r[1], e[r[2]], dt[r[3]]);
  });
}
function Wt(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 && (e[n].forEach((l) => {
    l[0].removeEventListener(l[1], e[l[2]], dt[l[3]]);
  }), e[n] = void 0);
}
function Rr(e, t = 250, n) {
  let l = null;
  function r() {
    const a = arguments, o = () => {
      l = null, e.apply(this, a);
    };
    l !== null && clearTimeout(l), l = setTimeout(o, t);
  }
  return r.cancel = () => {
    l !== null && clearTimeout(l);
  }, r;
}
var Li = ["sm", "md", "lg", "xl"], { passive: zc } = dt, fy = Sl({ width: 0, height: 0, name: "xs", sizes: { sm: 600, md: 1024, lg: 1440, xl: 1920 }, lt: { sm: true, md: true, lg: true, xl: true }, gt: { xs: false, sm: false, md: false, lg: false }, xs: true, sm: false, md: false, lg: false, xl: false }, { setSizes: xt, setDebounce: xt, install({ $q: e, onSSRHydrated: t }) {
  var _a3;
  if (e.screen = this, this.__installed === true) {
    e.config.screen !== void 0 && (e.config.screen.bodyClasses === false ? document.body.classList.remove(`screen--${this.name}`) : this.__update(true));
    return;
  }
  const { visualViewport: n } = window, l = n || window, r = document.scrollingElement || document.documentElement, a = n === void 0 || De.is.mobile === true ? () => [Math.max(window.innerWidth, r.clientWidth), Math.max(window.innerHeight, r.clientHeight)] : () => [n.width * n.scale + window.innerWidth - r.clientWidth, n.height * n.scale + window.innerHeight - r.clientHeight], o = ((_a3 = e.config.screen) == null ? void 0 : _a3.bodyClasses) === true;
  this.__update = (f) => {
    const [h, m] = a();
    if (m !== this.height && (this.height = m), h !== this.width) this.width = h;
    else if (f !== true) return;
    let g = this.sizes;
    this.gt.xs = h >= g.sm, this.gt.sm = h >= g.md, this.gt.md = h >= g.lg, this.gt.lg = h >= g.xl, this.lt.sm = h < g.sm, this.lt.md = h < g.md, this.lt.lg = h < g.lg, this.lt.xl = h < g.xl, this.xs = this.lt.sm, this.sm = this.gt.xs === true && this.lt.md === true, this.md = this.gt.sm === true && this.lt.lg === true, this.lg = this.gt.md === true && this.lt.xl === true, this.xl = this.gt.lg, g = this.xs === true && "xs" || this.sm === true && "sm" || this.md === true && "md" || this.lg === true && "lg" || "xl", g !== this.name && (o === true && (document.body.classList.remove(`screen--${this.name}`), document.body.classList.add(`screen--${g}`)), this.name = g);
  };
  let i, u = {}, c = 16;
  this.setSizes = (f) => {
    Li.forEach((h) => {
      f[h] !== void 0 && (u[h] = f[h]);
    });
  }, this.setDebounce = (f) => {
    c = f;
  };
  const s = () => {
    const f = getComputedStyle(document.body);
    f.getPropertyValue("--q-size-sm") && Li.forEach((h) => {
      this.sizes[h] = parseInt(f.getPropertyValue(`--q-size-${h}`), 10);
    }), this.setSizes = (h) => {
      Li.forEach((m) => {
        h[m] && (this.sizes[m] = h[m]);
      }), this.__update(true);
    }, this.setDebounce = (h) => {
      i !== void 0 && l.removeEventListener("resize", i, zc), i = h > 0 ? Rr(this.__update, h) : this.__update, l.addEventListener("resize", i, zc);
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
} }), lm = Ut;
function vy(e, t, n = document.body) {
  if (typeof e != "string") throw new TypeError("Expected a string as propName");
  if (typeof t != "string") throw new TypeError("Expected a string as value");
  if (!(n instanceof Element)) throw new TypeError("Expected a DOM element");
  n.style.setProperty(`--q-${e}`, t);
}
var rm = false;
function my(e) {
  rm = e.isComposing === true;
}
function Yl(e) {
  return rm === true || e !== Object(e) || e.isComposing === true || e.qKeyEvent === true;
}
function yn(e, t) {
  return Yl(e) === true ? false : [].concat(t).includes(e.keyCode);
}
function am(e) {
  if (e.ios === true) return "ios";
  if (e.android === true) return "android";
}
function hy({ is: e, has: t, within: n }, l) {
  const r = [e.desktop === true ? "desktop" : "mobile", `${t.touch === false ? "no-" : ""}touch`];
  if (e.mobile === true) {
    const a = am(e);
    a !== void 0 && r.push("platform-" + a);
  }
  if (e.nativeMobile === true) {
    const a = e.nativeMobileWrapper;
    r.push(a), r.push("native-mobile"), e.ios === true && (l[a] === void 0 || l[a].iosStatusBarPadding !== false) && r.push("q-ios-padding");
  } else e.electron === true ? r.push("electron") : e.bex === true && r.push("bex");
  return n.iframe === true && r.push("within-iframe"), r;
}
function gy() {
  const { is: e } = De, t = document.body.className, n = new Set(t.replace(/ {2}/g, " ").split(" "));
  if (e.nativeMobile !== true && e.electron !== true && e.bex !== true) {
    if (e.desktop === true) n.delete("mobile"), n.delete("platform-ios"), n.delete("platform-android"), n.add("desktop");
    else if (e.mobile === true) {
      n.delete("desktop"), n.add("mobile"), n.delete("platform-ios"), n.delete("platform-android");
      const r = am(e);
      r !== void 0 && n.add(`platform-${r}`);
    }
  }
  De.has.touch === true && (n.delete("no-touch"), n.add("touch")), De.within.iframe === true && n.add("within-iframe");
  const l = Array.from(n).join(" ");
  t !== l && (document.body.className = l);
}
function by(e) {
  for (const t in e) vy(t, e[t]);
}
var yy = { install(e) {
  if (this.__installed !== true) {
    if (nn.value === true) gy();
    else {
      const { $q: t } = e;
      t.config.brand !== void 0 && by(t.config.brand);
      const n = hy(De, t.config);
      document.body.classList.add.apply(document.body.classList, n);
    }
    De.is.ios === true && document.body.addEventListener("touchstart", xt), window.addEventListener("keydown", my, true);
  }
} }, om = () => true;
function py(e) {
  return typeof e == "string" && e !== "" && e !== "/" && e !== "#/";
}
function _y(e) {
  return e.startsWith("#") === true && (e = e.substring(1)), e.startsWith("/") === false && (e = "/" + e), e.endsWith("/") === true && (e = e.substring(0, e.length - 1)), "#" + e;
}
function wy(e) {
  if (e.backButtonExit === false) return () => false;
  if (e.backButtonExit === "*") return om;
  const t = ["#/"];
  return Array.isArray(e.backButtonExit) === true && t.push(...e.backButtonExit.filter(py).map(_y)), () => t.includes(window.location.hash);
}
var _a = { __history: [], add: xt, remove: xt, install({ $q: e }) {
  if (this.__installed === true) return;
  const { cordova: t, capacitor: n } = De.is;
  if (t !== true && n !== true) return;
  const l = e.config[t === true ? "cordova" : "capacitor"];
  if ((l == null ? void 0 : l.backButton) === false || n === true && (window.Capacitor === void 0 || window.Capacitor.Plugins.App === void 0)) return;
  this.add = (o) => {
    o.condition === void 0 && (o.condition = om), this.__history.push(o);
  }, this.remove = (o) => {
    const i = this.__history.indexOf(o);
    i >= 0 && this.__history.splice(i, 1);
  };
  const r = wy(Object.assign({ backButtonExit: true }, l)), a = () => {
    if (this.__history.length) {
      const o = this.__history[this.__history.length - 1];
      o.condition() === true && (this.__history.pop(), o.handler());
    } else r() === true ? navigator.app.exitApp() : window.history.back();
  };
  t === true ? document.addEventListener("deviceready", () => {
    document.addEventListener("backbutton", a, false);
  }) : window.Capacitor.Plugins.App.addListener("backButton", a);
} }, Au = { isoName: "en-US", nativeName: "English (US)", label: { clear: "Clear", ok: "OK", cancel: "Cancel", close: "Close", set: "Set", select: "Select", reset: "Reset", remove: "Remove", update: "Update", create: "Create", search: "Search", filter: "Filter", refresh: "Refresh", expand: (e) => e ? `Expand "${e}"` : "Expand", collapse: (e) => e ? `Collapse "${e}"` : "Collapse" }, date: { days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), firstDayOfWeek: 0, format24h: false, pluralDay: "days", prevMonth: "Previous month", nextMonth: "Next month", prevYear: "Previous year", nextYear: "Next year", today: "Today", prevRangeYears: (e) => `Previous ${e} years`, nextRangeYears: (e) => `Next ${e} years` }, table: { noData: "No data available", noResults: "No matching records found", loading: "Loading...", selectedRecords: (e) => e === 1 ? "1 record selected." : (e === 0 ? "No" : e) + " records selected.", recordsPerPage: "Records per page:", allRows: "All", pagination: (e, t, n) => e + "-" + t + " of " + n, columns: "Columns" }, pagination: { first: "First page", prev: "Previous page", next: "Next page", last: "Last page" }, editor: { url: "URL", bold: "Bold", italic: "Italic", strikethrough: "Strikethrough", underline: "Underline", unorderedList: "Unordered List", orderedList: "Ordered List", subscript: "Subscript", superscript: "Superscript", hyperlink: "Hyperlink", toggleFullscreen: "Toggle Fullscreen", quote: "Quote", left: "Left align", center: "Center align", right: "Right align", justify: "Justify align", print: "Print", outdent: "Decrease indentation", indent: "Increase indentation", removeFormat: "Remove formatting", formatting: "Formatting", fontSize: "Font Size", align: "Align", hr: "Insert Horizontal Rule", undo: "Undo", redo: "Redo", heading1: "Heading 1", heading2: "Heading 2", heading3: "Heading 3", heading4: "Heading 4", heading5: "Heading 5", heading6: "Heading 6", paragraph: "Paragraph", code: "Code", size1: "Very small", size2: "A bit small", size3: "Normal", size4: "Medium-large", size5: "Big", size6: "Very big", size7: "Maximum", defaultFont: "Default Font", viewSource: "View Source" }, tree: { noNodes: "No nodes available", noResults: "No matching nodes found" } };
function Nc() {
  const e = Array.isArray(navigator.languages) === true && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
  if (typeof e == "string") return e.split(/[-_]/).map((t, n) => n === 0 ? t.toLowerCase() : n > 1 || t.length < 4 ? t.toUpperCase() : t[0].toUpperCase() + t.slice(1).toLowerCase()).join("-");
}
var $l = Sl({ __qLang: {} }, { getLocale: Nc, set(e = Au, t) {
  const n = { ...e, rtl: e.rtl === true, getLocale: Nc };
  {
    if (n.set = $l.set, $l.__langConfig === void 0 || $l.__langConfig.noHtmlAttrs !== true) {
      const l = document.documentElement;
      l.setAttribute("dir", n.rtl === true ? "rtl" : "ltr"), l.setAttribute("lang", n.isoName);
    }
    Object.assign($l.__qLang, n);
  }
}, install({ $q: e, lang: t, ssrContext: n }) {
  e.lang = $l.__qLang, $l.__langConfig = e.config.lang, this.__installed === true ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qLang, { get() {
    return Reflect.get(...arguments);
  }, ownKeys(l) {
    return Reflect.ownKeys(l).filter((r) => r !== "set" && r !== "getLocale");
  } }), this.set(t || Au));
} }), ai = $l, xy = { name: "material-icons", type: { positive: "check_circle", negative: "warning", info: "info", warning: "priority_high" }, arrow: { up: "arrow_upward", right: "arrow_forward", down: "arrow_downward", left: "arrow_back", dropdown: "arrow_drop_down" }, chevron: { left: "chevron_left", right: "chevron_right" }, colorPicker: { spectrum: "gradient", tune: "tune", palette: "style" }, pullToRefresh: { icon: "refresh" }, carousel: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down", navigationIcon: "lens" }, chip: { remove: "cancel", selected: "check" }, datetime: { arrowLeft: "chevron_left", arrowRight: "chevron_right", now: "access_time", today: "today" }, editor: { bold: "format_bold", italic: "format_italic", strikethrough: "strikethrough_s", underline: "format_underlined", unorderedList: "format_list_bulleted", orderedList: "format_list_numbered", subscript: "vertical_align_bottom", superscript: "vertical_align_top", hyperlink: "link", toggleFullscreen: "fullscreen", quote: "format_quote", left: "format_align_left", center: "format_align_center", right: "format_align_right", justify: "format_align_justify", print: "print", outdent: "format_indent_decrease", indent: "format_indent_increase", removeFormat: "format_clear", formatting: "text_format", fontSize: "format_size", align: "format_align_left", hr: "remove", undo: "undo", redo: "redo", heading: "format_size", code: "code", size: "format_size", font: "font_download", viewSource: "code" }, expansionItem: { icon: "keyboard_arrow_down", denseIcon: "arrow_drop_down" }, fab: { icon: "add", activeIcon: "close" }, field: { clear: "cancel", error: "error" }, pagination: { first: "first_page", prev: "keyboard_arrow_left", next: "keyboard_arrow_right", last: "last_page" }, rating: { icon: "grade" }, stepper: { done: "check", active: "edit", error: "warning" }, tabs: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down" }, table: { arrowUp: "arrow_upward", warning: "warning", firstPage: "first_page", prevPage: "chevron_left", nextPage: "chevron_right", lastPage: "last_page" }, tree: { icon: "play_arrow" }, uploader: { done: "done", clear: "clear", add: "add_box", upload: "cloud_upload", removeQueue: "clear_all", removeUploaded: "done_all" } }, Pu = Sl({ iconMapFn: null, __qIconSet: {} }, { set(e, t) {
  const n = { ...e };
  n.set = Pu.set, Object.assign(Pu.__qIconSet, n);
}, install({ $q: e, iconSet: t, ssrContext: n }) {
  e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn), e.iconSet = this.__qIconSet, Ot(e, "iconMapFn", () => this.iconMapFn, (l) => {
    this.iconMapFn = l;
  }), this.__installed === true ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qIconSet, { get() {
    return Reflect.get(...arguments);
  }, ownKeys(l) {
    return Reflect.ownKeys(l).filter((r) => r !== "set");
  } }), this.set(t || xy));
} }), im = Pu, um = "_q_", sm = "_q_t_", cm = "_q_s_", Xl = "_q_l_", dm = "_q_pc_", fm = "_q_f_", vm = "_q_fo_", mm = "_q_tabs_", hm = "_q_u_";
function ot() {
}
var To = {}, gm = false;
function Sy() {
  gm = true;
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
      let a = e.entries();
      for (l = a.next(); l.done !== true; ) {
        if (t.has(l.value[0]) !== true) return false;
        l = a.next();
      }
      for (a = e.entries(), l = a.next(); l.done !== true; ) {
        if (kn(l.value[1], t.get(l.value[0])) !== true) return false;
        l = a.next();
      }
      return true;
    }
    if (e.constructor === Set) {
      if (e.size !== t.size) return false;
      const a = e.entries();
      for (l = a.next(); l.done !== true; ) {
        if (t.has(l.value[0]) !== true) return false;
        l = a.next();
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
    const r = Object.keys(e).filter((a) => e[a] !== void 0);
    if (n = r.length, n !== Object.keys(t).filter((a) => t[a] !== void 0).length) return false;
    for (l = n; l-- !== 0; ) {
      const a = r[l];
      if (kn(e[a], t[a]) !== true) return false;
    }
    return true;
  }
  return e !== e && t !== t;
}
function $t(e) {
  return e !== null && typeof e == "object" && Array.isArray(e) !== true;
}
function $u(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Cy(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function wa(e) {
  return typeof e == "number" && isFinite(e);
}
var Hc = [nm, yy, lm, fy, _a, ai, im];
function oi(e, t) {
  const n = Jv(e);
  n.config.globalProperties = t.config.globalProperties;
  const { reload: l, ...r } = t._context;
  return Object.assign(n._context, r), n;
}
function jc(e, t) {
  t.forEach((n) => {
    n.install(e), n.__installed = true;
  });
}
function ky(e, t, n) {
  e.config.globalProperties.$q = n.$q, e.provide(um, n.$q), jc(n, Hc), t.components !== void 0 && Object.values(t.components).forEach((l) => {
    $t(l) === true && l.name !== void 0 && e.component(l.name, l);
  }), t.directives !== void 0 && Object.values(t.directives).forEach((l) => {
    $t(l) === true && l.name !== void 0 && e.directive(l.name, l);
  }), t.plugins !== void 0 && jc(n, Object.values(t.plugins).filter((l) => typeof l.install == "function" && Hc.includes(l) === false)), nn.value === true && (n.$q.onSSRHydrated = () => {
    n.onSSRHydrated.forEach((l) => {
      l();
    }), n.$q.onSSRHydrated = () => {
    };
  });
}
var Ty = function(e, t = {}) {
  const n = { version: "2.18.1" };
  gm === false ? (t.config !== void 0 && Object.assign(To, t.config), n.config = { ...To }, Sy()) : n.config = t.config || {}, ky(e, t, { parentApp: e, $q: n, lang: t.lang, iconSet: t.iconSet, onSSRHydrated: [] });
}, Uc = ["B", "KB", "MB", "GB", "TB", "PB"];
function Bu(e, t = 1) {
  let n = 0;
  for (; parseInt(e, 10) >= 1024 && n < Uc.length - 1; ) e /= 1024, ++n;
  return `${e.toFixed(t)}${Uc[n]}`;
}
function ct(e, t, n) {
  return n <= t ? t : Math.min(n, Math.max(t, e));
}
function qo(e, t, n) {
  if (n <= t) return t;
  const l = n - t + 1;
  let r = t + (e - t) % l;
  return r < t && (r = l + r), r === 0 ? 0 : r;
}
function at(e, t = 2, n = "0") {
  if (e == null) return e;
  const l = "" + e;
  return l.length >= t ? l : new Array(t - l.length + 1).join(n) + l;
}
var _s = XMLHttpRequest, bm = _s.prototype.open, qy = ["top", "right", "bottom", "left"], Mo = [], oa = 0;
function My({ p: e, pos: t, active: n, horiz: l, reverse: r, dir: a }) {
  let o = 1, i = 1;
  return l === true ? (r === true && (o = -1), t === "bottom" && (i = -1), { transform: `translate3d(${o * (e - 100)}%,${n ? 0 : i * -200}%,0)` }) : (r === true && (i = -1), t === "right" && (o = -1), { transform: `translate3d(${n ? 0 : a * o * -200}%,${i * (e - 100)}%,0)` });
}
function Ey(e, t) {
  return typeof t != "number" && (e < 25 ? t = Math.random() * 3 + 3 : e < 65 ? t = Math.random() * 3 : e < 85 ? t = Math.random() * 2 : e < 99 ? t = 0.6 : t = 0), ct(e + t, 0, 100);
}
function Ry(e) {
  oa++, Mo.push(e), !(oa > 1) && (_s.prototype.open = function(t, n) {
    const l = [], r = () => {
      Mo.forEach((o) => {
        (o.hijackFilter.value === null || o.hijackFilter.value(n) === true) && (o.start(), l.push(o.stop));
      });
    }, a = () => {
      l.forEach((o) => {
        o();
      });
    };
    this.addEventListener("loadstart", r, { once: true }), this.addEventListener("loadend", a, { once: true }), bm.apply(this, arguments);
  });
}
function Ay(e) {
  Mo = Mo.filter((t) => t.start !== e), oa = Math.max(0, oa - 1), oa === 0 && (_s.prototype.open = bm);
}
var Py = he({ name: "QAjaxBar", props: { position: { type: String, default: "top", validator: (e) => qy.includes(e) }, size: { type: String, default: "2px" }, color: String, skipHijack: Boolean, reverse: Boolean, hijackFilter: Function }, emits: ["start", "stop"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), l = K(0), r = K(false), a = K(true);
  let o = 0, i = null, u;
  const c = v(() => `q-loading-bar q-loading-bar--${e.position}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (a.value === true ? "" : " no-transition")), s = v(() => e.position === "top" || e.position === "bottom"), f = v(() => s.value === true ? "height" : "width"), h = v(() => {
    const y = r.value, b = My({ p: l.value, pos: e.position, active: y, horiz: s.value, reverse: n.$q.lang.rtl === true && ["top", "bottom"].includes(e.position) ? e.reverse === false : e.reverse, dir: n.$q.lang.rtl === true ? -1 : 1 });
    return b[f.value] = e.size, b.opacity = y ? 1 : 0, b;
  }), m = v(() => r.value === true ? { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": l.value } : { "aria-hidden": "true" });
  function g(y = 300) {
    const b = u;
    return u = Math.max(0, y) || 0, o++, o > 1 ? (b === 0 && y > 0 ? T() : i !== null && b > 0 && y <= 0 && (clearTimeout(i), i = null), o) : (i !== null && clearTimeout(i), t("start"), l.value = 0, i = setTimeout(() => {
      i = null, a.value = true, y > 0 && T();
    }, r._value === true ? 500 : 1), r._value !== true && (r.value = true, a.value = false), o);
  }
  function w(y) {
    return o > 0 && (l.value = Ey(l.value, y)), o;
  }
  function x() {
    if (o = Math.max(0, o - 1), o > 0) return o;
    i !== null && (clearTimeout(i), i = null), t("stop");
    const y = () => {
      a.value = true, l.value = 100, i = setTimeout(() => {
        i = null, r.value = false;
      }, 1e3);
    };
    return l.value === 0 ? i = setTimeout(y, 1) : y(), o;
  }
  function T() {
    l.value < 100 && (i = setTimeout(() => {
      i = null, w(), T();
    }, u));
  }
  let p;
  return ft(() => {
    e.skipHijack !== true && (p = true, Ry({ start: g, stop: x, hijackFilter: v(() => e.hijackFilter || null) }));
  }), Ke(() => {
    i !== null && clearTimeout(i), p === true && Ay(g);
  }), Object.assign(n, { start: g, stop: x, increment: w }), () => d("div", { class: c.value, style: h.value, ...m.value });
} }), Lu = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 }, el = { size: String };
function tl(e, t = Lu) {
  return v(() => e.size !== void 0 ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size } : null);
}
function $e(e, t) {
  return e !== void 0 && e() || t;
}
function Aa(e, t) {
  if (e !== void 0) {
    const n = e();
    if (n != null) return n.slice();
  }
  return t;
}
function Tt(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function ws(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function pn(e, t, n, l, r, a) {
  t.key = l + r;
  const o = d(e, t, n);
  return r === true ? sn(o, a()) : o;
}
var Qc = "0 0 24 24", Fi = (e) => e, Oi = (e) => `ionicons ${e}`, ym = { "mdi-": (e) => `mdi ${e}`, "icon-": Fi, "bt-": (e) => `bt ${e}`, "eva-": (e) => `eva ${e}`, "ion-md": Oi, "ion-ios": Oi, "ion-logo": Oi, "iconfont ": Fi, "ti-": (e) => `themify-icon ${e}`, "bi-": (e) => `bootstrap-icons ${e}`, "i-": Fi }, pm = { o_: "-outlined", r_: "-round", s_: "-sharp" }, _m = { sym_o_: "-outlined", sym_r_: "-rounded", sym_s_: "-sharp" }, $y = new RegExp("^(" + Object.keys(ym).join("|") + ")"), By = new RegExp("^(" + Object.keys(pm).join("|") + ")"), Kc = new RegExp("^(" + Object.keys(_m).join("|") + ")"), Ly = /^[Mm]\s?[-+]?\.?\d/, Fy = /^img:/, Oy = /^svguse:/, Vy = /^ion-/, Dy = /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, et = he({ name: "QIcon", props: { ...el, tag: { type: String, default: "i" }, name: String, color: String, left: Boolean, right: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), l = tl(e), r = v(() => "q-icon" + (e.left === true ? " on-left" : "") + (e.right === true ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), a = v(() => {
    let o, i = e.name;
    if (i === "none" || !i) return { none: true };
    if (n.iconMapFn !== null) {
      const s = n.iconMapFn(i);
      if (s !== void 0) if (s.icon !== void 0) {
        if (i = s.icon, i === "none" || !i) return { none: true };
      } else return { cls: s.cls, content: s.content !== void 0 ? s.content : " " };
    }
    if (Ly.test(i) === true) {
      const [s, f = Qc] = i.split("|");
      return { svg: true, viewBox: f, nodes: s.split("&&").map((h) => {
        const [m, g, w] = h.split("@@");
        return d("path", { style: g, d: m, transform: w });
      }) };
    }
    if (Fy.test(i) === true) return { img: true, src: i.substring(4) };
    if (Oy.test(i) === true) {
      const [s, f = Qc] = i.split("|");
      return { svguse: true, src: s.substring(7), viewBox: f };
    }
    let u = " ";
    const c = i.match($y);
    if (c !== null) o = ym[c[1]](i);
    else if (Dy.test(i) === true) o = i;
    else if (Vy.test(i) === true) o = `ionicons ion-${n.platform.is.ios === true ? "ios" : "md"}${i.substring(3)}`;
    else if (Kc.test(i) === true) {
      o = "notranslate material-symbols";
      const s = i.match(Kc);
      s !== null && (i = i.substring(6), o += _m[s[1]]), u = i;
    } else {
      o = "notranslate material-icons";
      const s = i.match(By);
      s !== null && (i = i.substring(2), o += pm[s[1]]), u = i;
    }
    return { cls: o, content: u };
  });
  return () => {
    const o = { class: r.value, style: l.value, "aria-hidden": "true" };
    return a.value.none === true ? d(e.tag, o, $e(t.default)) : a.value.img === true ? d(e.tag, o, Tt(t.default, [d("img", { src: a.value.src })])) : a.value.svg === true ? d(e.tag, o, Tt(t.default, [d("svg", { viewBox: a.value.viewBox || "0 0 24 24" }, a.value.nodes)])) : a.value.svguse === true ? d(e.tag, o, Tt(t.default, [d("svg", { viewBox: a.value.viewBox }, [d("use", { "xlink:href": a.value.src })])])) : (a.value.cls !== void 0 && (o.class += " " + a.value.cls), d(e.tag, o, Tt(t.default, [a.value.content])));
  };
} }), Fu = he({ name: "QAvatar", props: { ...el, fontSize: String, color: String, textColor: String, icon: String, square: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  const n = tl(e), l = v(() => "q-avatar" + (e.color ? ` bg-${e.color}` : "") + (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") + (e.square === true ? " q-avatar--square" : e.rounded === true ? " rounded-borders" : "")), r = v(() => e.fontSize ? { fontSize: e.fontSize } : null);
  return () => {
    const a = e.icon !== void 0 ? [d(et, { name: e.icon })] : void 0;
    return d("div", { class: l.value, style: n.value }, [d("div", { class: "q-avatar__content row flex-center overflow-hidden", style: r.value }, ws(t.default, a))]);
  };
} }), Iy = ["top", "middle", "bottom"];
he({ name: "QBadge", props: { color: String, textColor: String, floating: Boolean, transparent: Boolean, multiLine: Boolean, outline: Boolean, rounded: Boolean, label: [Number, String], align: { type: String, validator: (e) => Iy.includes(e) } }, setup(e, { slots: t }) {
  const n = v(() => e.align !== void 0 ? { verticalAlign: e.align } : null), l = v(() => {
    const r = e.outline === true && e.color || e.textColor;
    return `q-badge flex inline items-center no-wrap q-badge--${e.multiLine === true ? "multi" : "single"}-line` + (e.outline === true ? " q-badge--outline" : e.color !== void 0 ? ` bg-${e.color}` : "") + (r !== void 0 ? ` text-${r}` : "") + (e.floating === true ? " q-badge--floating" : "") + (e.rounded === true ? " q-badge--rounded" : "") + (e.transparent === true ? " q-badge--transparent" : "");
  });
  return () => d("div", { class: l.value, style: n.value, role: "status", "aria-label": e.label }, Tt(t.default, e.label !== void 0 ? [e.label] : []));
} });
var nt = { dark: { type: Boolean, default: null } };
function lt(e, t) {
  return v(() => e.dark === null ? t.dark.isActive : e.dark);
}
he({ name: "QBanner", props: { ...nt, inlineActions: Boolean, dense: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), l = lt(e, n), r = v(() => "q-banner row items-center" + (e.dense === true ? " q-banner--dense" : "") + (l.value === true ? " q-banner--dark q-dark" : "") + (e.rounded === true ? " rounded-borders" : "")), a = v(() => `q-banner__actions row items-center justify-end col-${e.inlineActions === true ? "auto" : "all"}`);
  return () => {
    const o = [d("div", { class: "q-banner__avatar col-auto row items-center self-start" }, $e(t.avatar)), d("div", { class: "q-banner__content col text-body2" }, $e(t.default))], i = $e(t.action);
    return i !== void 0 && o.push(d("div", { class: a.value }, i)), d("div", { class: r.value + (e.inlineActions === false && i !== void 0 ? " q-banner--top-padding" : ""), role: "alert" }, o);
  };
} });
he({ name: "QBar", props: { ...nt, dense: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), l = lt(e, n), r = v(() => `q-bar row no-wrap items-center q-bar--${e.dense === true ? "dense" : "standard"}  q-bar--${l.value === true ? "dark" : "light"}`);
  return () => d("div", { class: r.value, role: "toolbar" }, $e(t.default));
} });
var wm = { left: "start", center: "center", right: "end", between: "between", around: "around", evenly: "evenly", stretch: "stretch" }, zy = Object.keys(wm), xs = { align: { type: String, validator: (e) => zy.includes(e) } };
function Ss(e) {
  return v(() => {
    const t = e.align === void 0 ? e.vertical === true ? "stretch" : "left" : e.align;
    return `${e.vertical === true ? "items" : "justify"}-${wm[t]}`;
  });
}
function io(e) {
  if (Object(e.$parent) === e.$parent) return e.$parent;
  let { parent: t } = e.$;
  for (; Object(t) === t; ) {
    if (Object(t.proxy) === t.proxy) return t.proxy;
    t = t.parent;
  }
}
function xm(e, t) {
  typeof t.type == "symbol" ? Array.isArray(t.children) === true && t.children.forEach((n) => {
    xm(e, n);
  }) : e.add(t);
}
function Cs(e) {
  const t = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    xm(t, n);
  }), Array.from(t);
}
function ks(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function gl(e) {
  return e.isUnmounted === true || e.isDeactivated === true;
}
var Ny = ["", true];
he({ name: "QBreadcrumbs", props: { ...xs, separator: { type: String, default: "/" }, separatorColor: String, activeColor: { type: String, default: "primary" }, gutter: { type: String, validator: (e) => ["none", "xs", "sm", "md", "lg", "xl"].includes(e), default: "sm" } }, setup(e, { slots: t }) {
  const n = Ss(e), l = v(() => `flex items-center ${n.value}${e.gutter === "none" ? "" : ` q-gutter-${e.gutter}`}`), r = v(() => e.separatorColor ? ` text-${e.separatorColor}` : ""), a = v(() => ` text-${e.activeColor}`);
  return () => {
    if (t.default === void 0) return;
    const o = Cs($e(t.default));
    if (o.length === 0) return;
    let i = 1;
    const u = [], c = o.filter((f) => {
      var _a3;
      return ((_a3 = f.type) == null ? void 0 : _a3.name) === "QBreadcrumbsEl";
    }).length, s = t.separator !== void 0 ? t.separator : () => e.separator;
    return o.forEach((f) => {
      var _a3;
      if (((_a3 = f.type) == null ? void 0 : _a3.name) === "QBreadcrumbsEl") {
        const h = i < c, m = f.props !== null && Ny.includes(f.props.disable), g = (h === true ? "" : " q-breadcrumbs--last") + (m !== true && h === true ? a.value : "");
        i++, u.push(d("div", { class: `flex items-center${g}` }, [f])), h === true && u.push(d("div", { class: "q-breadcrumbs__separator" + r.value }, s()));
      } else u.push(f);
    }), d("div", { class: "q-breadcrumbs" }, [d("div", { class: l.value }, u)]);
  };
} });
function Wc(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
function Yc(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Hy(e, t) {
  for (const n in t) {
    const l = t[n], r = e[n];
    if (typeof l == "string") {
      if (l !== r) return false;
    } else if (Array.isArray(r) === false || r.length !== l.length || l.some((a, o) => a !== r[o])) return false;
  }
  return true;
}
function Xc(e, t) {
  return Array.isArray(t) === true ? e.length === t.length && e.every((n, l) => n === t[l]) : e.length === 1 && e[0] === t;
}
function jy(e, t) {
  return Array.isArray(e) === true ? Xc(e, t) : Array.isArray(t) === true ? Xc(t, e) : e === t;
}
function Uy(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (const n in e) if (jy(e[n], t[n]) === false) return false;
  return true;
}
var Sm = { to: [String, Object], replace: Boolean, href: String, target: String, disable: Boolean }, Pa = { ...Sm, exact: Boolean, activeClass: { type: String, default: "q-router-link--active" }, exactActiveClass: { type: String, default: "q-router-link--exact-active" } };
function ii({ fallbackTag: e, useDisableForRouterLinkProps: t = true } = {}) {
  const n = xe(), { props: l, proxy: r, emit: a } = n, o = ks(n), i = v(() => l.disable !== true && l.href !== void 0), u = v(t === true ? () => o === true && l.disable !== true && i.value !== true && l.to !== void 0 && l.to !== null && l.to !== "" : () => o === true && i.value !== true && l.to !== void 0 && l.to !== null && l.to !== ""), c = v(() => u.value === true ? p(l.to) : null), s = v(() => c.value !== null), f = v(() => i.value === true || s.value === true), h = v(() => l.type === "a" || f.value === true ? "a" : l.tag || e || "div"), m = v(() => i.value === true ? { href: l.href, target: l.target } : s.value === true ? { href: c.value.href, target: l.target } : {}), g = v(() => {
    if (s.value === false) return -1;
    const { matched: C } = c.value, { length: $ } = C, F = C[$ - 1];
    if (F === void 0) return -1;
    const N = r.$route.matched;
    if (N.length === 0) return -1;
    const B = N.findIndex(Yc.bind(null, F));
    if (B !== -1) return B;
    const L = Wc(C[$ - 2]);
    return $ > 1 && Wc(F) === L && N[N.length - 1].path !== L ? N.findIndex(Yc.bind(null, C[$ - 2])) : B;
  }), w = v(() => s.value === true && g.value !== -1 && Hy(r.$route.params, c.value.params)), x = v(() => w.value === true && g.value === r.$route.matched.length - 1 && Uy(r.$route.params, c.value.params)), T = v(() => s.value === true ? x.value === true ? ` ${l.exactActiveClass} ${l.activeClass}` : l.exact === true ? "" : w.value === true ? ` ${l.activeClass}` : "" : "");
  function p(C) {
    try {
      return r.$router.resolve(C);
    } catch {
    }
    return null;
  }
  function y(C, { returnRouterError: $, to: F = l.to, replace: N = l.replace } = {}) {
    if (l.disable === true) return C.preventDefault(), Promise.resolve(false);
    if (C.metaKey || C.altKey || C.ctrlKey || C.shiftKey || C.button !== void 0 && C.button !== 0 || l.target === "_blank") return Promise.resolve(false);
    C.preventDefault();
    const B = r.$router[N === true ? "replace" : "push"](F);
    return $ === true ? B : B.then(() => {
    }).catch(() => {
    });
  }
  function b(C) {
    if (s.value === true) {
      const $ = (F) => y(C, F);
      a("click", C, $), C.defaultPrevented !== true && $();
    } else a("click", C);
  }
  return { hasRouterLink: s, hasHrefLink: i, hasLink: f, linkTag: h, resolvedLink: c, linkIsActive: w, linkIsExactActive: x, linkClass: T, linkAttrs: m, getLink: p, navigateToRouterLink: y, navigateOnClick: b };
}
he({ name: "QBreadcrumbsEl", props: { ...Pa, label: String, icon: String, tag: { type: String, default: "span" } }, emits: ["click"], setup(e, { slots: t }) {
  const { linkTag: n, linkAttrs: l, linkClass: r, navigateOnClick: a } = ii(), o = v(() => ({ class: "q-breadcrumbs__el q-link flex inline items-center relative-position " + (e.disable !== true ? "q-link--focusable" + r.value : "q-breadcrumbs__el--disable"), ...l.value, onClick: a })), i = v(() => "q-breadcrumbs__el-icon" + (e.label !== void 0 ? " q-breadcrumbs__el-icon--with-label" : ""));
  return () => {
    const u = [];
    return e.icon !== void 0 && u.push(d(et, { class: i.value, name: e.icon })), e.label !== void 0 && u.push(e.label), d(n.value, { ...o.value }, Tt(t.default, u));
  };
} });
var Mt = { size: { type: [String, Number], default: "1em" }, color: String };
function Et(e) {
  return { cSize: v(() => e.size in Lu ? `${Lu[e.size]}px` : e.size), classes: v(() => "q-spinner" + (e.color ? ` text-${e.color}` : "")) };
}
var _n = he({ name: "QSpinner", props: { ...Mt, thickness: { type: Number, default: 5 } }, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value + " q-spinner-mat", width: t.value, height: t.value, viewBox: "25 25 50 50" }, [d("circle", { class: "path", cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": e.thickness, "stroke-miterlimit": "10" })]);
} });
function Eo(e) {
  if (e === window) return { top: 0, left: 0 };
  const { top: t, left: n } = e.getBoundingClientRect();
  return { top: t, left: n };
}
function Sr(e) {
  return e === window ? window.innerHeight : e.getBoundingClientRect().height;
}
function Ou(e, t) {
  const n = e.style;
  for (const l in t) n[l] = t[l];
}
function Qy(e) {
  if (e == null) return;
  if (typeof e == "string") try {
    return document.querySelector(e) || void 0;
  } catch {
    return;
  }
  const t = Ie(e);
  if (t) return t.$el || t;
}
function Cm(e, t) {
  if (e == null || e.contains(t) === true) return true;
  for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling) if (n.contains(t)) return true;
  return false;
}
function km(e, t = 250) {
  let n = false, l;
  return function() {
    return n === false && (n = true, setTimeout(() => {
      n = false;
    }, t), l = e.apply(this, arguments)), l;
  };
}
function Gc(e, t, n, l) {
  n.modifiers.stop === true && wt(e);
  const r = n.modifiers.color;
  let a = n.modifiers.center;
  a = a === true || l === true;
  const o = document.createElement("span"), i = document.createElement("span"), u = en(e), { left: c, top: s, width: f, height: h } = t.getBoundingClientRect(), m = Math.sqrt(f * f + h * h), g = m / 2, w = `${(f - m) / 2}px`, x = a ? w : `${u.left - c - g}px`, T = `${(h - m) / 2}px`, p = a ? T : `${u.top - s - g}px`;
  i.className = "q-ripple__inner", Ou(i, { height: `${m}px`, width: `${m}px`, transform: `translate3d(${x},${p},0) scale3d(.2,.2,1)`, opacity: 0 }), o.className = `q-ripple${r ? " text-" + r : ""}`, o.setAttribute("dir", "ltr"), o.appendChild(i), t.appendChild(o);
  const y = () => {
    o.remove(), clearTimeout(b);
  };
  n.abort.push(y);
  let b = setTimeout(() => {
    i.classList.add("q-ripple__inner--enter"), i.style.transform = `translate3d(${w},${T},0) scale3d(1,1,1)`, i.style.opacity = 0.2, b = setTimeout(() => {
      i.classList.remove("q-ripple__inner--enter"), i.classList.add("q-ripple__inner--leave"), i.style.opacity = 0, b = setTimeout(() => {
        o.remove(), n.abort.splice(n.abort.indexOf(y), 1);
      }, 275);
    }, 250);
  }, 50);
}
function Zc(e, { modifiers: t, value: n, arg: l }) {
  const r = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = { early: r.early === true, stop: r.stop === true, center: r.center === true, color: r.color || l, keyCodes: [].concat(r.keyCodes || 13) };
}
var ui = An({ name: "ripple", beforeMount(e, t) {
  const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
  if (n.ripple === false) return;
  const l = { cfg: n, enabled: t.value !== false, modifiers: {}, abort: [], start(r) {
    l.enabled === true && r.qSkipRipple !== true && r.type === (l.modifiers.early === true ? "pointerdown" : "click") && Gc(r, e, l, r.qKeyEvent === true);
  }, keystart: km((r) => {
    l.enabled === true && r.qSkipRipple !== true && yn(r, l.modifiers.keyCodes) === true && r.type === `key${l.modifiers.early === true ? "down" : "up"}` && Gc(r, e, l, true);
  }, 300) };
  Zc(l, t), e.__qripple = l, kt(l, "main", [[e, "pointerdown", "start", "passive"], [e, "click", "start", "passive"], [e, "keydown", "keystart", "passive"], [e, "keyup", "keystart", "passive"]]);
}, updated(e, t) {
  if (t.oldValue !== t.value) {
    const n = e.__qripple;
    n !== void 0 && (n.enabled = t.value !== false, n.enabled === true && Object(t.value) === t.value && Zc(n, t));
  }
}, beforeUnmount(e) {
  const t = e.__qripple;
  t !== void 0 && (t.abort.forEach((n) => {
    n();
  }), Wt(t, "main"), delete e._qripple);
} }), Ro = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 }, Ky = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, Wy = ["button", "submit", "reset"], Yy = /[^\s]\/[^\s]/, Tm = ["flat", "outline", "push", "unelevated"];
function Ts(e, t) {
  return e.flat === true ? "flat" : e.outline === true ? "outline" : e.push === true ? "push" : e.unelevated === true ? "unelevated" : t;
}
function qm(e) {
  const t = Ts(e);
  return t !== void 0 ? { [t]: true } : {};
}
var qs = { ...el, ...Sm, type: { type: String, default: "button" }, label: [Number, String], icon: String, iconRight: String, ...Tm.reduce((e, t) => (e[t] = Boolean) && e, {}), square: Boolean, rounded: Boolean, glossy: Boolean, size: String, fab: Boolean, fabMini: Boolean, padding: String, color: String, textColor: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, tabindex: [Number, String], ripple: { type: [Boolean, Object], default: true }, align: { ...xs.align, default: "center" }, stack: Boolean, stretch: Boolean, loading: { type: Boolean, default: null }, disable: Boolean }, Xy = { ...qs, round: Boolean };
function Gy(e) {
  const t = tl(e, Ky), n = Ss(e), { hasRouterLink: l, hasLink: r, linkTag: a, linkAttrs: o, navigateOnClick: i } = ii({ fallbackTag: "button" }), u = v(() => {
    const x = e.fab === false && e.fabMini === false ? t.value : {};
    return e.padding !== void 0 ? Object.assign({}, x, { padding: e.padding.split(/\s+/).map((T) => T in Ro ? Ro[T] + "px" : T).join(" "), minWidth: "0", minHeight: "0" }) : x;
  }), c = v(() => e.rounded === true || e.fab === true || e.fabMini === true), s = v(() => e.disable !== true && e.loading !== true), f = v(() => s.value === true ? e.tabindex || 0 : -1), h = v(() => Ts(e, "standard")), m = v(() => {
    const x = { tabindex: f.value };
    return r.value === true ? Object.assign(x, o.value) : Wy.includes(e.type) === true && (x.type = e.type), a.value === "a" ? (e.disable === true ? x["aria-disabled"] = "true" : x.href === void 0 && (x.role = "button"), l.value !== true && Yy.test(e.type) === true && (x.type = e.type)) : e.disable === true && (x.disabled = "", x["aria-disabled"] = "true"), e.loading === true && e.percentage !== void 0 && Object.assign(x, { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": e.percentage }), x;
  }), g = v(() => {
    let x;
    e.color !== void 0 ? e.flat === true || e.outline === true ? x = `text-${e.textColor || e.color}` : x = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (x = `text-${e.textColor}`);
    const T = e.round === true ? "round" : `rectangle${c.value === true ? " q-btn--rounded" : e.square === true ? " q-btn--square" : ""}`;
    return `q-btn--${h.value} q-btn--${T}` + (x !== void 0 ? " " + x : "") + (s.value === true ? " q-btn--actionable q-focusable q-hoverable" : e.disable === true ? " disabled" : "") + (e.fab === true ? " q-btn--fab" : e.fabMini === true ? " q-btn--fab-mini" : "") + (e.noCaps === true ? " q-btn--no-uppercase" : "") + (e.dense === true ? " q-btn--dense" : "") + (e.stretch === true ? " no-border-radius self-stretch" : "") + (e.glossy === true ? " glossy" : "") + (e.square ? " q-btn--square" : "");
  }), w = v(() => n.value + (e.stack === true ? " column" : " row") + (e.noWrap === true ? " no-wrap text-no-wrap" : "") + (e.loading === true ? " q-btn__content--hidden" : ""));
  return { classes: g, style: u, innerClasses: w, attributes: m, hasLink: r, linkTag: a, navigateOnClick: i, isActionable: s };
}
var { passiveCapture: fn } = dt, Jl = null, er = null, tr = null, Ze = he({ name: "QBtn", props: { ...Xy, percentage: Number, darkPercentage: Boolean, onTouchstart: [Function, Array] }, emits: ["click", "keydown", "mousedown", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), { classes: r, style: a, innerClasses: o, attributes: i, hasLink: u, linkTag: c, navigateOnClick: s, isActionable: f } = Gy(e), h = K(null), m = K(null);
  let g = null, w, x = null;
  const T = v(() => e.label !== void 0 && e.label !== null && e.label !== ""), p = v(() => e.disable === true || e.ripple === false ? false : { keyCodes: u.value === true ? [13, 32] : [13], ...e.ripple === true ? {} : e.ripple }), y = v(() => ({ center: e.round })), b = v(() => {
    const k = Math.max(0, Math.min(100, e.percentage));
    return k > 0 ? { transition: "transform 0.6s", transform: `translateX(${k - 100}%)` } : {};
  }), C = v(() => {
    if (e.loading === true) return { onMousedown: E, onTouchstart: E, onClick: E, onKeydown: E, onKeyup: E };
    if (f.value === true) {
      const k = { onClick: F, onKeydown: N, onMousedown: L };
      if (l.$q.platform.has.touch === true) {
        const j = e.onTouchstart !== void 0 ? "" : "Passive";
        k[`onTouchstart${j}`] = B;
      }
      return k;
    }
    return { onClick: je };
  }), $ = v(() => ({ ref: h, class: "q-btn q-btn-item non-selectable no-outline " + r.value, style: a.value, ...i.value, ...C.value }));
  function F(k) {
    if (h.value !== null) {
      if (k !== void 0) {
        if (k.defaultPrevented === true) return;
        const j = document.activeElement;
        if (e.type === "submit" && j !== document.body && h.value.contains(j) === false && j.contains(h.value) === false) {
          k.qAvoidFocus !== true && h.value.focus();
          const Q = () => {
            var _a3;
            document.removeEventListener("keydown", je, true), document.removeEventListener("keyup", Q, fn), (_a3 = h.value) == null ? void 0 : _a3.removeEventListener("blur", Q, fn);
          };
          document.addEventListener("keydown", je, true), document.addEventListener("keyup", Q, fn), h.value.addEventListener("blur", Q, fn);
        }
      }
      s(k);
    }
  }
  function N(k) {
    h.value !== null && (n("keydown", k), yn(k, [13, 32]) === true && er !== h.value && (er !== null && q(), k.defaultPrevented !== true && (k.qAvoidFocus !== true && h.value.focus(), er = h.value, h.value.classList.add("q-btn--active"), document.addEventListener("keyup", z, true), h.value.addEventListener("blur", z, fn)), je(k)));
  }
  function B(k) {
    h.value !== null && (n("touchstart", k), k.defaultPrevented !== true && (Jl !== h.value && (Jl !== null && q(), Jl = h.value, g = k.target, g.addEventListener("touchcancel", z, fn), g.addEventListener("touchend", z, fn)), w = true, x !== null && clearTimeout(x), x = setTimeout(() => {
      x = null, w = false;
    }, 200)));
  }
  function L(k) {
    h.value !== null && (k.qSkipRipple = w === true, n("mousedown", k), k.defaultPrevented !== true && tr !== h.value && (tr !== null && q(), tr = h.value, h.value.classList.add("q-btn--active"), document.addEventListener("mouseup", z, fn)));
  }
  function z(k) {
    if (h.value !== null && !((k == null ? void 0 : k.type) === "blur" && document.activeElement === h.value)) {
      if ((k == null ? void 0 : k.type) === "keyup") {
        if (er === h.value && yn(k, [13, 32]) === true) {
          const j = new MouseEvent("click", k);
          j.qKeyEvent = true, k.defaultPrevented === true && Vt(j), k.cancelBubble === true && wt(j), h.value.dispatchEvent(j), je(k), k.qKeyEvent = true;
        }
        n("keyup", k);
      }
      q();
    }
  }
  function q(k) {
    var _a3, _b2;
    const j = m.value;
    k !== true && (Jl === h.value || tr === h.value) && j !== null && j !== document.activeElement && (j.setAttribute("tabindex", -1), j.focus()), Jl === h.value && (g !== null && (g.removeEventListener("touchcancel", z, fn), g.removeEventListener("touchend", z, fn)), Jl = g = null), tr === h.value && (document.removeEventListener("mouseup", z, fn), tr = null), er === h.value && (document.removeEventListener("keyup", z, true), (_a3 = h.value) == null ? void 0 : _a3.removeEventListener("blur", z, fn), er = null), (_b2 = h.value) == null ? void 0 : _b2.classList.remove("q-btn--active");
  }
  function E(k) {
    je(k), k.qSkipRipple = true;
  }
  return Ke(() => {
    q(true);
  }), Object.assign(l, { click: (k) => {
    f.value === true && F(k);
  } }), () => {
    let k = [];
    e.icon !== void 0 && k.push(d(et, { name: e.icon, left: e.stack !== true && T.value === true, role: "img" })), T.value === true && k.push(d("span", { class: "block" }, [e.label])), k = Tt(t.default, k), e.iconRight !== void 0 && e.round === false && k.push(d(et, { name: e.iconRight, right: e.stack !== true && T.value === true, role: "img" }));
    const j = [d("span", { class: "q-focus-helper", ref: m })];
    return e.loading === true && e.percentage !== void 0 && j.push(d("span", { class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === true ? " q-btn__progress--dark" : "") }, [d("span", { class: "q-btn__progress-indicator fit block", style: b.value })])), j.push(d("span", { class: "q-btn__content text-center col items-center q-anchor--skip " + o.value }, k)), e.loading !== null && j.push(d(Ft, { name: "q-transition--fade" }, () => e.loading === true ? [d("span", { key: "loading", class: "absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : [d(_n)])] : null)), sn(d(c.value, $.value, j), [[ui, p.value, void 0, y.value]]);
  };
} }), Mm = he({ name: "QBtnGroup", props: { unelevated: Boolean, outline: Boolean, flat: Boolean, rounded: Boolean, square: Boolean, push: Boolean, stretch: Boolean, glossy: Boolean, spread: Boolean }, setup(e, { slots: t }) {
  const n = v(() => {
    const l = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter((r) => e[r] === true).map((r) => `q-btn-group--${r}`).join(" ");
    return `q-btn-group row no-wrap${l.length !== 0 ? " " + l : ""}` + (e.spread === true ? " q-btn-group--spread" : " inline");
  });
  return () => d("div", { class: n.value }, $e(t.default));
} });
function Mn() {
  if (window.getSelection !== void 0) {
    const e = window.getSelection();
    e.empty !== void 0 ? e.empty() : e.removeAllRanges !== void 0 && (e.removeAllRanges(), nm.is.mobile !== true && e.addRange(document.createRange()));
  } else document.selection !== void 0 && document.selection.empty();
}
var Em = { target: { type: [Boolean, String, Element], default: true }, noParentEvent: Boolean }, Rm = { ...Em, contextMenu: Boolean };
function Ms({ showing: e, avoidEmit: t, configureAnchorEl: n }) {
  const { props: l, proxy: r, emit: a } = xe(), o = K(null);
  let i = null;
  function u(m) {
    return o.value === null ? false : m === void 0 || m.touches === void 0 || m.touches.length <= 1;
  }
  const c = {};
  n === void 0 && (Object.assign(c, { hide(m) {
    r.hide(m);
  }, toggle(m) {
    r.toggle(m), m.qAnchorHandled = true;
  }, toggleKey(m) {
    yn(m, 13) === true && c.toggle(m);
  }, contextClick(m) {
    r.hide(m), Vt(m), We(() => {
      r.show(m), m.qAnchorHandled = true;
    });
  }, prevent: Vt, mobileTouch(m) {
    if (c.mobileCleanup(m), u(m) !== true) return;
    r.hide(m), o.value.classList.add("non-selectable");
    const g = m.target;
    kt(c, "anchor", [[g, "touchmove", "mobileCleanup", "passive"], [g, "touchend", "mobileCleanup", "passive"], [g, "touchcancel", "mobileCleanup", "passive"], [o.value, "contextmenu", "prevent", "notPassive"]]), i = setTimeout(() => {
      i = null, r.show(m), m.qAnchorHandled = true;
    }, 300);
  }, mobileCleanup(m) {
    o.value.classList.remove("non-selectable"), i !== null && (clearTimeout(i), i = null), e.value === true && m !== void 0 && Mn();
  } }), n = function(m = l.contextMenu) {
    if (l.noParentEvent === true || o.value === null) return;
    let g;
    m === true ? r.$q.platform.is.mobile === true ? g = [[o.value, "touchstart", "mobileTouch", "passive"]] : g = [[o.value, "mousedown", "hide", "passive"], [o.value, "contextmenu", "contextClick", "notPassive"]] : g = [[o.value, "click", "toggle", "passive"], [o.value, "keyup", "toggleKey", "passive"]], kt(c, "anchor", g);
  });
  function s() {
    Wt(c, "anchor");
  }
  function f(m) {
    for (o.value = m; o.value.classList.contains("q-anchor--skip"); ) o.value = o.value.parentNode;
    n();
  }
  function h() {
    if (l.target === false || l.target === "" || r.$el.parentNode === null) o.value = null;
    else if (l.target === true) f(r.$el.parentNode);
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
    h(), t !== true && l.modelValue === true && o.value === null && a("update:modelValue", false);
  }), Ke(() => {
    i !== null && clearTimeout(i), s();
  }), { anchorEl: o, canShow: u, anchorEvents: c };
}
function Am(e, t) {
  const n = K(null);
  let l;
  function r(i, u) {
    const c = `${u !== void 0 ? "add" : "remove"}EventListener`, s = u !== void 0 ? u : l;
    i !== window && i[c]("scroll", s, dt.passive), window[c]("scroll", s, dt.passive), l = u;
  }
  function a() {
    n.value !== null && (r(n.value), n.value = null);
  }
  const o = ge(() => e.noParentEvent, () => {
    n.value !== null && (a(), t());
  });
  return Ke(o), { localScrollTarget: n, unconfigureScrollTarget: a, changeScrollEvent: r };
}
var Ar = { modelValue: { type: Boolean, default: null }, "onUpdate:modelValue": [Function, Array] }, Pr = ["beforeShow", "show", "beforeHide", "hide"];
function $r({ showing: e, canShow: t, hideOnRouteChange: n, handleShow: l, handleHide: r, processOnMount: a }) {
  const o = xe(), { props: i, emit: u, proxy: c } = o;
  let s;
  function f(p) {
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
    })), (i.modelValue === null || y === false) && w(p);
  }
  function w(p) {
    e.value !== false && (e.value = false, u("beforeHide", p), r !== void 0 ? r(p) : u("hide", p));
  }
  function x(p) {
    i.disable === true && p === true ? i["onUpdate:modelValue"] !== void 0 && u("update:modelValue", false) : p === true !== e.value && (p === true ? m : w)(s);
  }
  ge(() => i.modelValue, x), n !== void 0 && ks(o) === true && ge(() => c.$route.fullPath, () => {
    n.value === true && e.value === true && g();
  }), a === true && ft(() => {
    x(i.modelValue);
  });
  const T = { show: h, hide: g, toggle: f };
  return Object.assign(c, T), T;
}
var Ol = [], xa = [];
function Pm(e) {
  xa = xa.filter((t) => t !== e);
}
function Zy(e) {
  Pm(e), xa.push(e);
}
function Jc(e) {
  Pm(e), xa.length === 0 && Ol.length !== 0 && (Ol[Ol.length - 1](), Ol = []);
}
function Br(e) {
  xa.length === 0 ? e() : Ol.push(e);
}
function Jy(e) {
  Ol = Ol.filter((t) => t !== e);
}
var br = [], ia = [], ep = 1, ul = document.body;
function $a(e, t) {
  const n = document.createElement("div");
  if (n.id = t !== void 0 ? `q-portal--${t}--${ep++}` : e, To.globalNodes !== void 0) {
    const l = To.globalNodes.class;
    l !== void 0 && (n.className = l);
  }
  return ul.appendChild(n), br.push(n), ia.push(t), n;
}
function Es(e) {
  const t = br.indexOf(e);
  br.splice(t, 1), ia.splice(t, 1), e.remove();
}
function tp(e) {
  if (e === ul) return;
  if (ul = e, ul === document.body || ia.reduce((n, l) => l === "dialog" ? n + 1 : n, 0) < 2) {
    br.forEach((n) => {
      n.contains(ul) === false && ul.appendChild(n);
    });
    return;
  }
  const t = ia.lastIndexOf("dialog");
  for (let n = 0; n < br.length; n++) {
    const l = br[n];
    (n === t || ia[n] !== "dialog") && l.contains(ul) === false && ul.appendChild(l);
  }
}
var yr = [];
function np(e) {
  return yr.find((t) => t.contentEl !== null && t.contentEl.contains(e));
}
function $m(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      if (e.hide(t), e.$props.separateClosePopup === true) return io(e);
    } else if (e.__qPortal === true) {
      const n = io(e);
      return (n == null ? void 0 : n.$options.name) === "QPopupProxy" ? (e.hide(t), n) : e;
    }
    e = io(e);
  } while (e != null);
}
function lp(e, t, n) {
  for (; n !== 0 && e !== void 0 && e !== null; ) {
    if (e.__qPortal === true) {
      if (n--, e.$options.name === "QMenu") {
        e = $m(e, t);
        continue;
      }
      e.hide(t);
    }
    e = io(e);
  }
}
var rp = he({ name: "QPortal", setup(e, { slots: t }) {
  return () => t.default();
} });
function ap(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog") return true;
    if (e.type.name === "QDialog" || e.type.name === "QMenu") return false;
    e = e.parent;
  }
  return false;
}
function Rs(e, t, n, l) {
  const r = K(false), a = K(false);
  let o = null;
  const i = {}, u = l === "dialog" && ap(e);
  function c(f) {
    if (f === true) {
      Jc(i), a.value = true;
      return;
    }
    a.value = false, r.value === false && (u === false && o === null && (o = $a(false, l)), r.value = true, yr.push(e.proxy), Zy(i));
  }
  function s(f) {
    if (a.value = false, f !== true) return;
    Jc(i), r.value = false;
    const h = yr.indexOf(e.proxy);
    h !== -1 && yr.splice(h, 1), o !== null && (Es(o), o = null);
  }
  return ei(() => {
    s(true);
  }), e.proxy.__qPortal = true, Ot(e.proxy, "contentEl", () => t.value), { showPortal: c, hidePortal: s, portalIsActive: r, portalIsAccessible: a, renderPortal: () => u === true ? n() : r.value === true ? [d(M0, { to: o }, d(rp, n))] : void 0 };
}
var Il = { transitionShow: { type: String, default: "fade" }, transitionHide: { type: String, default: "fade" }, transitionDuration: { type: [String, Number], default: 300 } };
function si(e, t = () => {
}, n = () => {
}) {
  return { transitionProps: v(() => {
    const l = `q-transition--${e.transitionShow || t()}`, r = `q-transition--${e.transitionHide || n()}`;
    return { appear: true, enterFromClass: `${l}-enter-from`, enterActiveClass: `${l}-enter-active`, enterToClass: `${l}-enter-to`, leaveFromClass: `${r}-leave-from`, leaveActiveClass: `${r}-leave-active`, leaveToClass: `${r}-leave-to` };
  }), transitionStyle: v(() => `--q-transition-duration: ${e.transitionDuration}ms`) };
}
function pr() {
  let e;
  const t = xe();
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
  const t = xe();
  function n() {
    e !== null && (clearTimeout(e), e = null);
  }
  return Vn(n), Ke(n), { removeTimeout: n, registerTimeout(l, r) {
    n(), gl(t) === false && (e = setTimeout(() => {
      e = null, l();
    }, r));
  } };
}
var Gl = [Element, String], op = [null, document, document.body, document.scrollingElement, document.documentElement];
function Dn(e, t) {
  let n = Qy(t);
  if (n === void 0) {
    if (e == null) return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return op.includes(n) ? window : n;
}
function Na(e) {
  return (e === window ? document.body : e).scrollHeight;
}
function bl(e) {
  return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop;
}
function ci(e) {
  return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft;
}
function Bm(e, t, n = 0) {
  const l = arguments[3] === void 0 ? performance.now() : arguments[3], r = bl(e);
  if (n <= 0) {
    r !== t && Vu(e, t);
    return;
  }
  requestAnimationFrame((a) => {
    const o = a - l, i = r + (t - r) / Math.max(o, n) * o;
    Vu(e, i), i !== t && Bm(e, t, n - o, a);
  });
}
function Lm(e, t, n = 0) {
  const l = arguments[3] === void 0 ? performance.now() : arguments[3], r = ci(e);
  if (n <= 0) {
    r !== t && Du(e, t);
    return;
  }
  requestAnimationFrame((a) => {
    const o = a - l, i = r + (t - r) / Math.max(o, n) * o;
    Du(e, i), i !== t && Lm(e, t, n - o, a);
  });
}
function Vu(e, t) {
  if (e === window) {
    window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t);
    return;
  }
  e.scrollTop = t;
}
function Du(e, t) {
  if (e === window) {
    window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0);
    return;
  }
  e.scrollLeft = t;
}
function _r(e, t, n) {
  if (n) {
    Bm(e, t, n);
    return;
  }
  Vu(e, t);
}
function Vi(e, t, n) {
  if (n) {
    Lm(e, t, n);
    return;
  }
  Du(e, t);
}
var Ha;
function uo() {
  if (Ha !== void 0) return Ha;
  const e = document.createElement("p"), t = document.createElement("div");
  Ou(e, { width: "100%", height: "200px" }), Ou(t, { position: "absolute", top: "0px", left: "0px", visibility: "hidden", width: "200px", height: "150px", overflow: "hidden" }), t.appendChild(e), document.body.appendChild(t);
  const n = e.offsetWidth;
  t.style.overflow = "scroll";
  let l = e.offsetWidth;
  return n === l && (l = t.clientWidth), t.remove(), Ha = n - l, Ha;
}
function ip(e, t = true) {
  return !e || e.nodeType !== Node.ELEMENT_NODE ? false : t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]));
}
var zl = [], Cr;
function up(e) {
  Cr = e.keyCode === 27;
}
function sp() {
  Cr === true && (Cr = false);
}
function cp(e) {
  Cr === true && (Cr = false, yn(e, 27) === true && zl[zl.length - 1](e));
}
function Fm(e) {
  window[e]("keydown", up), window[e]("blur", sp), window[e]("keyup", cp), Cr = false;
}
function Om(e) {
  De.is.desktop === true && (zl.push(e), zl.length === 1 && Fm("addEventListener"));
}
function Ao(e) {
  const t = zl.indexOf(e);
  t !== -1 && (zl.splice(t, 1), zl.length === 0 && Fm("removeEventListener"));
}
var Nl = [];
function Vm(e) {
  Nl[Nl.length - 1](e);
}
function Dm(e) {
  De.is.desktop === true && (Nl.push(e), Nl.length === 1 && document.body.addEventListener("focusin", Vm));
}
function Iu(e) {
  const t = Nl.indexOf(e);
  t !== -1 && (Nl.splice(t, 1), Nl.length === 0 && document.body.removeEventListener("focusin", Vm));
}
var { notPassiveCapture: Po } = dt, Hl = [];
function $o(e) {
  const t = e.target;
  if (t === void 0 || t.nodeType === 8 || t.classList.contains("no-pointer-events") === true) return;
  let n = yr.length - 1;
  for (; n >= 0; ) {
    const l = yr[n].$;
    if (l.type.name === "QTooltip") {
      n--;
      continue;
    }
    if (l.type.name !== "QDialog") break;
    if (l.props.seamless !== true) return;
    n--;
  }
  for (let l = Hl.length - 1; l >= 0; l--) {
    const r = Hl[l];
    if ((r.anchorEl.value === null || r.anchorEl.value.contains(t) === false) && (t === document.body || r.innerRef.value !== null && r.innerRef.value.contains(t) === false)) e.qClickOutside = true, r.onClickOutside(e);
    else return;
  }
}
function Im(e) {
  Hl.push(e), Hl.length === 1 && (document.addEventListener("mousedown", $o, Po), document.addEventListener("touchstart", $o, Po));
}
function Bo(e) {
  const t = Hl.findIndex((n) => n === e);
  t !== -1 && (Hl.splice(t, 1), Hl.length === 0 && (document.removeEventListener("mousedown", $o, Po), document.removeEventListener("touchstart", $o, Po)));
}
var ed, td;
function Lo(e) {
  const t = e.split(" ");
  return t.length !== 2 ? false : ["top", "center", "bottom"].includes(t[0]) !== true ? (console.error("Anchor/Self position must start with one of top/center/bottom"), false) : ["left", "middle", "right", "start", "end"].includes(t[1]) !== true ? (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), false) : true;
}
function zm(e) {
  return e ? !(e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number") : true;
}
var zu = { "start#ltr": "left", "start#rtl": "right", "end#ltr": "right", "end#rtl": "left" };
["left", "middle", "right"].forEach((e) => {
  zu[`${e}#ltr`] = e, zu[`${e}#rtl`] = e;
});
function Fo(e, t) {
  const n = e.split(" ");
  return { vertical: n[0], horizontal: zu[`${n[1]}#${t === true ? "rtl" : "ltr"}`] };
}
function dp(e, t) {
  let { top: n, left: l, right: r, bottom: a, width: o, height: i } = e.getBoundingClientRect();
  return t !== void 0 && (n -= t[1], l -= t[0], a += t[1], r += t[0], o += t[0], i += t[1]), { top: n, bottom: a, height: i, left: l, right: r, width: o, middle: l + (r - l) / 2, center: n + (a - n) / 2 };
}
function fp(e, t, n) {
  let { top: l, left: r } = e.getBoundingClientRect();
  return l += t.top, r += t.left, n !== void 0 && (l += n[1], r += n[0]), { top: l, bottom: l + 1, height: 1, left: r, right: r + 1, width: 1, middle: r, center: l };
}
function vp(e, t) {
  return { top: 0, center: t / 2, bottom: t, left: 0, middle: e / 2, right: e };
}
function nd(e, t, n, l) {
  return { top: e[n.vertical] - t[l.vertical], left: e[n.horizontal] - t[l.horizontal] };
}
function As(e, t = 0) {
  if (e.targetEl === null || e.anchorEl === null || t > 5) return;
  if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      As(e, t + 1);
    }, 10);
    return;
  }
  const { targetEl: n, offset: l, anchorEl: r, anchorOrigin: a, selfOrigin: o, absoluteOffset: i, fit: u, cover: c, maxHeight: s, maxWidth: f } = e;
  if (De.is.ios === true && window.visualViewport !== void 0) {
    const $ = document.body.style, { offsetLeft: F, offsetTop: N } = window.visualViewport;
    F !== ed && ($.setProperty("--q-pe-left", F + "px"), ed = F), N !== td && ($.setProperty("--q-pe-top", N + "px"), td = N);
  }
  const { scrollLeft: h, scrollTop: m } = n, g = i === void 0 ? dp(r, c === true ? [0, 0] : l) : fp(r, i, l);
  Object.assign(n.style, { top: 0, left: 0, minWidth: null, minHeight: null, maxWidth: f, maxHeight: s, visibility: "visible" });
  const { offsetWidth: w, offsetHeight: x } = n, { elWidth: T, elHeight: p } = u === true || c === true ? { elWidth: Math.max(g.width, w), elHeight: c === true ? Math.max(g.height, x) : x } : { elWidth: w, elHeight: x };
  let y = { maxWidth: f, maxHeight: s };
  (u === true || c === true) && (y.minWidth = g.width + "px", c === true && (y.minHeight = g.height + "px")), Object.assign(n.style, y);
  const b = vp(T, p);
  let C = nd(g, b, a, o);
  if (i === void 0 || l === void 0) Di(C, g, b, a, o);
  else {
    const { top: $, left: F } = C;
    Di(C, g, b, a, o);
    let N = false;
    if (C.top !== $) {
      N = true;
      const B = 2 * l[1];
      g.center = g.top -= B, g.bottom -= B + 2;
    }
    if (C.left !== F) {
      N = true;
      const B = 2 * l[0];
      g.middle = g.left -= B, g.right -= B + 2;
    }
    N === true && (C = nd(g, b, a, o), Di(C, g, b, a, o));
  }
  y = { top: C.top + "px", left: C.left + "px" }, C.maxHeight !== void 0 && (y.maxHeight = C.maxHeight + "px", g.height > C.maxHeight && (y.minHeight = y.maxHeight)), C.maxWidth !== void 0 && (y.maxWidth = C.maxWidth + "px", g.width > C.maxWidth && (y.minWidth = y.maxWidth)), Object.assign(n.style, y), n.scrollTop !== m && (n.scrollTop = m), n.scrollLeft !== h && (n.scrollLeft = h);
}
function Di(e, t, n, l, r) {
  const a = n.bottom, o = n.right, i = uo(), u = window.innerHeight - i, c = document.body.clientWidth;
  if (e.top < 0 || e.top + a > u) if (r.vertical === "center") e.top = t[l.vertical] > u / 2 ? Math.max(0, u - a) : 0, e.maxHeight = Math.min(a, u);
  else if (t[l.vertical] > u / 2) {
    const s = Math.min(u, l.vertical === "center" ? t.center : l.vertical === r.vertical ? t.bottom : t.top);
    e.maxHeight = Math.min(a, s), e.top = Math.max(0, s - a);
  } else e.top = Math.max(0, l.vertical === "center" ? t.center : l.vertical === r.vertical ? t.top : t.bottom), e.maxHeight = Math.min(a, u - e.top);
  if (e.left < 0 || e.left + o > c) if (e.maxWidth = Math.min(o, c), r.horizontal === "middle") e.left = t[l.horizontal] > c / 2 ? Math.max(0, c - o) : 0;
  else if (t[l.horizontal] > c / 2) {
    const s = Math.min(c, l.horizontal === "middle" ? t.middle : l.horizontal === r.horizontal ? t.right : t.left);
    e.maxWidth = Math.min(o, s), e.left = Math.max(0, s - e.maxWidth);
  } else e.left = Math.max(0, l.horizontal === "middle" ? t.middle : l.horizontal === r.horizontal ? t.left : t.right), e.maxWidth = Math.min(o, c - e.left);
}
var di = he({ name: "QMenu", inheritAttrs: false, props: { ...Rm, ...Ar, ...nt, ...Il, persistent: Boolean, autoClose: Boolean, separateClosePopup: Boolean, noEscDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, fit: Boolean, cover: Boolean, square: Boolean, anchor: { type: String, validator: Lo }, self: { type: String, validator: Lo }, offset: { type: Array, validator: zm }, scrollTarget: Gl, touchPosition: Boolean, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null } }, emits: [...Pr, "click", "escapeKey"], setup(e, { slots: t, emit: n, attrs: l }) {
  let r = null, a, o, i;
  const u = xe(), { proxy: c } = u, { $q: s } = c, f = K(null), h = K(false), m = v(() => e.persistent !== true && e.noRouteDismiss !== true), g = lt(e, s), { registerTick: w, removeTick: x } = pr(), { registerTimeout: T } = Zn(), { transitionProps: p, transitionStyle: y } = si(e), { localScrollTarget: b, changeScrollEvent: C, unconfigureScrollTarget: $ } = Am(e, H), { anchorEl: F, canShow: N } = Ms({ showing: h }), { hide: B } = $r({ showing: h, canShow: N, handleShow: pe, handleHide: Y, hideOnRouteChange: m, processOnMount: true }), { showPortal: L, hidePortal: z, renderPortal: q } = Rs(u, f, G, "menu"), E = { anchorEl: F, innerRef: f, onClickOutside(O) {
    if (e.persistent !== true && h.value === true) return B(O), (O.type === "touchstart" || O.target.classList.contains("q-dialog__backdrop")) && je(O), true;
  } }, k = v(() => Fo(e.anchor || (e.cover === true ? "center middle" : "bottom start"), s.lang.rtl)), j = v(() => e.cover === true ? k.value : Fo(e.self || "top start", s.lang.rtl)), Q = v(() => (e.square === true ? " q-menu--square" : "") + (g.value === true ? " q-menu--dark q-dark" : "")), W = v(() => e.autoClose === true ? { onClick: V } : {}), X = v(() => h.value === true && e.persistent !== true);
  ge(X, (O) => {
    O === true ? (Om(A), Im(E)) : (Ao(A), Bo(E));
  });
  function re() {
    Br(() => {
      let O = f.value;
      O && O.contains(document.activeElement) !== true && (O = O.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || O.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || O.querySelector("[autofocus], [data-autofocus]") || O, O.focus({ preventScroll: true }));
    });
  }
  function pe(O) {
    if (r = e.noRefocus === false ? document.activeElement : null, Dm(fe), L(), H(), a = void 0, O !== void 0 && (e.touchPosition || e.contextMenu)) {
      const ne = en(O);
      if (ne.left !== void 0) {
        const { top: be, left: S } = F.value.getBoundingClientRect();
        a = { left: ne.left - S, top: ne.top - be };
      }
    }
    o === void 0 && (o = ge(() => s.screen.width + "|" + s.screen.height + "|" + e.self + "|" + e.anchor + "|" + s.lang.rtl, R)), e.noFocus !== true && document.activeElement.blur(), w(() => {
      R(), e.noFocus !== true && re();
    }), T(() => {
      s.platform.is.ios === true && (i = e.autoClose, f.value.click()), R(), L(true), n("show", O);
    }, e.transitionDuration);
  }
  function Y(O) {
    x(), z(), _(true), r !== null && (O === void 0 || O.qClickOutside !== true) && ((((O == null ? void 0 : O.type.indexOf("key")) === 0 ? r.closest('[tabindex]:not([tabindex^="-"])') : void 0) || r).focus(), r = null), T(() => {
      z(true), n("hide", O);
    }, e.transitionDuration);
  }
  function _(O) {
    a = void 0, o !== void 0 && (o(), o = void 0), (O === true || h.value === true) && (Iu(fe), $(), Bo(E), Ao(A)), O !== true && (r = null);
  }
  function H() {
    (F.value !== null || e.scrollTarget !== void 0) && (b.value = Dn(F.value, e.scrollTarget), C(b.value, R));
  }
  function V(O) {
    i !== true ? ($m(c, O), n("click", O)) : i = false;
  }
  function fe(O) {
    X.value === true && e.noFocus !== true && Cm(f.value, O.target) !== true && re();
  }
  function A(O) {
    e.noEscDismiss !== true && (n("escapeKey"), B(O));
  }
  function R() {
    As({ targetEl: f.value, offset: e.offset, anchorEl: F.value, anchorOrigin: k.value, selfOrigin: j.value, absoluteOffset: a, fit: e.fit, cover: e.cover, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function G() {
    return d(Ft, p.value, () => h.value === true ? d("div", { role: "menu", ...l, ref: f, tabindex: -1, class: ["q-menu q-position-engine scroll" + Q.value, l.class], style: [l.style, y.value], ...W.value }, $e(t.default)) : null);
  }
  return Ke(_), Object.assign(c, { focus: re, updatePosition: R }), q;
} }), Ii, ja = 0, Nt = new Array(256);
for (let e = 0; e < 256; e++) Nt[e] = (e + 256).toString(16).substring(1);
var mp = (() => {
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
})(), ld = 4096;
function Sa() {
  (Ii === void 0 || ja + 16 > ld) && (ja = 0, Ii = mp(ld));
  const e = Array.prototype.slice.call(Ii, ja, ja += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, Nt[e[0]] + Nt[e[1]] + Nt[e[2]] + Nt[e[3]] + "-" + Nt[e[4]] + Nt[e[5]] + "-" + Nt[e[6]] + Nt[e[7]] + "-" + Nt[e[8]] + Nt[e[9]] + "-" + Nt[e[10]] + Nt[e[11]] + Nt[e[12]] + Nt[e[13]] + Nt[e[14]] + Nt[e[15]];
}
function hp(e) {
  return e ?? null;
}
function rd(e, t) {
  return e ?? (t === true ? `f_${Sa()}` : null);
}
function fi({ getValue: e, required: t = true } = {}) {
  if (nn.value === true) {
    const n = K(e !== void 0 ? hp(e()) : null);
    return t === true && n.value === null && ft(() => {
      n.value = `f_${Sa()}`;
    }), e !== void 0 && ge(e, (l) => {
      n.value = rd(l, t);
    }), n;
  }
  return e !== void 0 ? v(() => rd(e(), t)) : K(`f_${Sa()}`);
}
var gp = Object.keys(qs);
function bp(e) {
  return gp.reduce((t, n) => {
    const l = e[n];
    return l !== void 0 && (t[n] = l), t;
  }, {});
}
var yp = he({ name: "QBtnDropdown", props: { ...qs, ...Il, modelValue: Boolean, split: Boolean, dropdownIcon: String, contentClass: [Array, String, Object], contentStyle: [Array, String, Object], cover: Boolean, persistent: Boolean, noEscDismiss: Boolean, noRouteDismiss: Boolean, autoClose: Boolean, noRefocus: Boolean, noFocus: Boolean, menuAnchor: { type: String, default: "bottom end" }, menuSelf: { type: String, default: "top end" }, menuOffset: Array, disableMainBtn: Boolean, disableDropdown: Boolean, noIconAnimation: Boolean, toggleAriaLabel: String }, emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), r = K(e.modelValue), a = K(null), o = fi(), i = v(() => {
    const b = { "aria-expanded": r.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": o.value, "aria-label": e.toggleAriaLabel || l.$q.lang.label[r.value === true ? "collapse" : "expand"](e.label) };
    return (e.disable === true || e.split === false && e.disableMainBtn === true || e.disableDropdown === true) && (b["aria-disabled"] = "true"), b;
  }), u = v(() => "q-btn-dropdown__arrow" + (r.value === true && e.noIconAnimation === false ? " rotate-180" : "") + (e.split === false ? " q-btn-dropdown__arrow-container" : "")), c = v(() => qm(e)), s = v(() => bp(e));
  ge(() => e.modelValue, (b) => {
    var _a3;
    (_a3 = a.value) == null ? void 0 : _a3[b ? "show" : "hide"]();
  }), ge(() => e.split, y);
  function f(b) {
    r.value = true, n("beforeShow", b);
  }
  function h(b) {
    n("show", b), n("update:modelValue", true);
  }
  function m(b) {
    r.value = false, n("beforeHide", b);
  }
  function g(b) {
    n("hide", b), n("update:modelValue", false);
  }
  function w(b) {
    n("click", b);
  }
  function x(b) {
    wt(b), y(), n("click", b);
  }
  function T(b) {
    var _a3;
    (_a3 = a.value) == null ? void 0 : _a3.toggle(b);
  }
  function p(b) {
    var _a3;
    (_a3 = a.value) == null ? void 0 : _a3.show(b);
  }
  function y(b) {
    var _a3;
    (_a3 = a.value) == null ? void 0 : _a3.hide(b);
  }
  return Object.assign(l, { show: p, hide: y, toggle: T }), ft(() => {
    e.modelValue === true && p();
  }), () => {
    const b = [d(et, { class: u.value, name: e.dropdownIcon || l.$q.iconSet.arrow.dropdown })];
    return e.disableDropdown !== true && b.push(d(di, { ref: a, id: o.value, class: e.contentClass, style: e.contentStyle, cover: e.cover, fit: true, persistent: e.persistent, noEscDismiss: e.noEscDismiss, noRouteDismiss: e.noRouteDismiss, autoClose: e.autoClose, noFocus: e.noFocus, noRefocus: e.noRefocus, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, separateClosePopup: true, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, onBeforeShow: f, onShow: h, onBeforeHide: m, onHide: g }, t.default)), e.split === false ? d(Ze, { class: "q-btn-dropdown q-btn-dropdown--simple", ...s.value, ...i.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: w }, { default: () => $e(t.label, []).concat(b), loading: t.loading }) : d(Mm, { class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item", rounded: e.rounded, square: e.square, ...c.value, glossy: e.glossy, stretch: e.stretch }, () => [d(Ze, { class: "q-btn-dropdown--current", ...s.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: x }, { default: t.label, loading: t.loading }), d(Ze, { class: "q-btn-dropdown__arrow-container q-anchor--skip", ...i.value, ...c.value, disable: e.disable === true || e.disableDropdown === true, rounded: e.rounded, color: e.color, textColor: e.textColor, dense: e.dense, size: e.size, padding: e.padding, ripple: e.ripple }, () => b)]);
  };
} }), wn = { name: String };
function Ba(e) {
  return v(() => ({ type: "hidden", name: e.name, value: e.modelValue }));
}
function Cl(e = {}) {
  return (t, n, l) => {
    t[n](d("input", { class: "hidden" + (l || ""), ...e.value }));
  };
}
function Ps(e) {
  return v(() => e.name || e.for);
}
he({ name: "QBtnToggle", props: { ...wn, modelValue: { required: true }, options: { type: Array, required: true, validator: (e) => e.every((t) => ("label" in t || "icon" in t || "slot" in t) && "value" in t) }, color: String, textColor: String, toggleColor: { type: String, default: "primary" }, toggleTextColor: String, outline: Boolean, flat: Boolean, unelevated: Boolean, rounded: Boolean, push: Boolean, glossy: Boolean, size: String, padding: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, readonly: Boolean, disable: Boolean, stack: Boolean, stretch: Boolean, spread: Boolean, clearable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "clear", "click"], setup(e, { slots: t, emit: n }) {
  const l = v(() => e.options.find((h) => h.value === e.modelValue) !== void 0), r = v(() => ({ type: "hidden", name: e.name, value: e.modelValue })), a = Cl(r), o = v(() => qm(e)), i = v(() => ({ rounded: e.rounded, dense: e.dense, ...o.value })), u = v(() => e.options.map((h, m) => {
    const { attrs: g, value: w, slot: x, ...T } = h;
    return { slot: x, props: { key: m, "aria-pressed": w === e.modelValue ? "true" : "false", ...g, ...T, ...i.value, disable: e.disable === true || T.disable === true, color: w === e.modelValue ? s(T, "toggleColor") : s(T, "color"), textColor: w === e.modelValue ? s(T, "toggleTextColor") : s(T, "textColor"), noCaps: s(T, "noCaps") === true, noWrap: s(T, "noWrap") === true, size: s(T, "size"), padding: s(T, "padding"), ripple: s(T, "ripple"), stack: s(T, "stack") === true, stretch: s(T, "stretch") === true, onClick(p) {
      c(w, h, p);
    } } };
  }));
  function c(h, m, g) {
    e.readonly !== true && (e.modelValue === h ? e.clearable === true && (n("update:modelValue", null, null), n("clear")) : n("update:modelValue", h, m), n("click", g));
  }
  function s(h, m) {
    return h[m] === void 0 ? e[m] : h[m];
  }
  function f() {
    const h = u.value.map((m) => d(Ze, m.props, m.slot !== void 0 ? t[m.slot] : void 0));
    return e.name !== void 0 && e.disable !== true && l.value === true && a(h, "push"), Tt(t.default, h);
  }
  return () => d(Mm, { class: "q-btn-toggle", ...o.value, rounded: e.rounded, stretch: e.stretch, glossy: e.glossy, spread: e.spread }, f);
} });
var Nm = he({ name: "QCard", props: { ...nt, tag: { type: String, default: "div" }, square: Boolean, flat: Boolean, bordered: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), l = lt(e, n), r = v(() => "q-card" + (l.value === true ? " q-card--dark q-dark" : "") + (e.bordered === true ? " q-card--bordered" : "") + (e.square === true ? " q-card--square no-border-radius" : "") + (e.flat === true ? " q-card--flat no-shadow" : ""));
  return () => d(e.tag, { class: r.value }, $e(t.default));
} }), Fl = he({ name: "QCardSection", props: { tag: { type: String, default: "div" }, horizontal: Boolean }, setup(e, { slots: t }) {
  const n = v(() => `q-card__section q-card__section--${e.horizontal === true ? "horiz row no-wrap" : "vert"}`);
  return () => d(e.tag, { class: n.value }, $e(t.default));
} }), pp = he({ name: "QCardActions", props: { ...xs, vertical: Boolean }, setup(e, { slots: t }) {
  const n = Ss(e), l = v(() => `q-card__actions ${n.value} q-card__actions--${e.vertical === true ? "vert column" : "horiz row"}`);
  return () => d("div", { class: l.value }, $e(t.default));
} }), $s = { left: true, right: true, up: true, down: true, horizontal: true, vertical: true }, _p = Object.keys($s);
$s.all = true;
function Oo(e) {
  const t = {};
  for (const n of _p) e[n] === true && (t[n] = true);
  return Object.keys(t).length === 0 ? $s : (t.horizontal === true ? t.left = t.right = true : t.left === true && t.right === true && (t.horizontal = true), t.vertical === true ? t.up = t.down = true : t.up === true && t.down === true && (t.vertical = true), t.horizontal === true && t.vertical === true && (t.all = true), t);
}
var wp = ["INPUT", "TEXTAREA"];
function Vo(e, t) {
  return t.event === void 0 && e.target !== void 0 && e.target.draggable !== true && typeof t.handler == "function" && wp.includes(e.target.nodeName.toUpperCase()) === false && (e.qClonedBy === void 0 || e.qClonedBy.indexOf(t.uid) === -1);
}
function xp(e) {
  const t = [0.06, 6, 50];
  return typeof e == "string" && e.length && e.split(":").forEach((n, l) => {
    const r = parseFloat(n);
    r && (t[l] = r);
  }), t;
}
var Sp = An({ name: "touch-swipe", beforeMount(e, { value: t, arg: n, modifiers: l }) {
  if (l.mouse !== true && De.has.touch !== true) return;
  const r = l.mouseCapture === true ? "Capture" : "", a = { handler: t, sensitivity: xp(n), direction: Oo(l), noop: xt, mouseStart(o) {
    Vo(o, a) && ri(o) && (kt(a, "temp", [[document, "mousemove", "move", `notPassive${r}`], [document, "mouseup", "end", "notPassiveCapture"]]), a.start(o, true));
  }, touchStart(o) {
    if (Vo(o, a)) {
      const i = o.target;
      kt(a, "temp", [[i, "touchmove", "move", "notPassiveCapture"], [i, "touchcancel", "end", "notPassiveCapture"], [i, "touchend", "end", "notPassiveCapture"]]), a.start(o);
    }
  }, start(o, i) {
    De.is.firefox === true && gr(e, true);
    const u = en(o);
    a.event = { x: u.left, y: u.top, time: Date.now(), mouse: i === true, dir: false };
  }, move(o) {
    if (a.event === void 0) return;
    if (a.event.dir !== false) {
      je(o);
      return;
    }
    const i = Date.now() - a.event.time;
    if (i === 0) return;
    const u = en(o), c = u.left - a.event.x, s = Math.abs(c), f = u.top - a.event.y, h = Math.abs(f);
    if (a.event.mouse !== true) {
      if (s < a.sensitivity[1] && h < a.sensitivity[1]) {
        a.end(o);
        return;
      }
    } else if (window.getSelection().toString() !== "") {
      a.end(o);
      return;
    } else if (s < a.sensitivity[2] && h < a.sensitivity[2]) return;
    const m = s / i, g = h / i;
    a.direction.vertical === true && s < h && s < 100 && g > a.sensitivity[0] && (a.event.dir = f < 0 ? "up" : "down"), a.direction.horizontal === true && s > h && h < 100 && m > a.sensitivity[0] && (a.event.dir = c < 0 ? "left" : "right"), a.direction.up === true && s < h && f < 0 && s < 100 && g > a.sensitivity[0] && (a.event.dir = "up"), a.direction.down === true && s < h && f > 0 && s < 100 && g > a.sensitivity[0] && (a.event.dir = "down"), a.direction.left === true && s > h && c < 0 && h < 100 && m > a.sensitivity[0] && (a.event.dir = "left"), a.direction.right === true && s > h && c > 0 && h < 100 && m > a.sensitivity[0] && (a.event.dir = "right"), a.event.dir !== false ? (je(o), a.event.mouse === true && (document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), Mn(), a.styleCleanup = (w) => {
      a.styleCleanup = void 0, document.body.classList.remove("non-selectable");
      const x = () => {
        document.body.classList.remove("no-pointer-events--children");
      };
      w === true ? setTimeout(x, 50) : x();
    }), a.handler({ evt: o, touch: a.event.mouse !== true, mouse: a.event.mouse, direction: a.event.dir, duration: i, distance: { x: s, y: h } })) : a.end(o);
  }, end(o) {
    var _a3;
    a.event !== void 0 && (Wt(a, "temp"), De.is.firefox === true && gr(e, false), (_a3 = a.styleCleanup) == null ? void 0 : _a3.call(a, true), o !== void 0 && a.event.dir !== false && je(o), a.event = void 0);
  } };
  if (e.__qtouchswipe = a, l.mouse === true) {
    const o = l.mouseCapture === true || l.mousecapture === true ? "Capture" : "";
    kt(a, "main", [[e, "mousedown", "mouseStart", `passive${o}`]]);
  }
  De.has.touch === true && kt(a, "main", [[e, "touchstart", "touchStart", `passive${l.capture === true ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const n = e.__qtouchswipe;
  n !== void 0 && (t.oldValue !== t.value && (typeof t.value != "function" && n.end(), n.handler = t.value), n.direction = Oo(t.modifiers));
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qtouchswipe;
  t !== void 0 && (Wt(t, "main"), Wt(t, "temp"), De.is.firefox === true && gr(e, false), (_a3 = t.styleCleanup) == null ? void 0 : _a3.call(t), delete e.__qtouchswipe);
} });
function La() {
  let e = /* @__PURE__ */ Object.create(null);
  return { getCache: (t, n) => e[t] === void 0 ? e[t] = typeof n == "function" ? n() : n : e[t], setCache(t, n) {
    e[t] = n;
  }, hasCache(t) {
    return Object.hasOwnProperty.call(e, t);
  }, clearCache(t) {
    t !== void 0 ? delete e[t] : e = /* @__PURE__ */ Object.create(null);
  } };
}
var Bs = { name: { required: true }, disable: Boolean }, ad = { setup(e, { slots: t }) {
  return () => d("div", { class: "q-panel scroll", role: "tabpanel" }, $e(t.default));
} }, Ls = { modelValue: { required: true }, animated: Boolean, infinite: Boolean, swipeable: Boolean, vertical: Boolean, transitionPrev: String, transitionNext: String, transitionDuration: { type: [String, Number], default: 300 }, keepAlive: Boolean, keepAliveInclude: [String, Array, RegExp], keepAliveExclude: [String, Array, RegExp], keepAliveMax: Number }, Fs = ["update:modelValue", "beforeTransition", "transition"];
function Os() {
  const { props: e, emit: t, proxy: n } = xe(), { getCache: l } = La(), { registerTimeout: r } = Zn();
  let a, o;
  const i = K(null), u = { value: null };
  function c(k) {
    const j = e.vertical === true ? "up" : "left";
    N((n.$q.lang.rtl === true ? -1 : 1) * (k.direction === j ? 1 : -1));
  }
  const s = v(() => [[Sp, c, void 0, { horizontal: e.vertical !== true, vertical: e.vertical, mouse: true }]]), f = v(() => e.transitionPrev || `slide-${e.vertical === true ? "down" : "right"}`), h = v(() => e.transitionNext || `slide-${e.vertical === true ? "up" : "left"}`), m = v(() => `--q-transition-duration: ${e.transitionDuration}ms`), g = v(() => typeof e.modelValue == "string" || typeof e.modelValue == "number" ? e.modelValue : String(e.modelValue)), w = v(() => ({ include: e.keepAliveInclude, exclude: e.keepAliveExclude, max: e.keepAliveMax })), x = v(() => e.keepAliveInclude !== void 0 || e.keepAliveExclude !== void 0);
  ge(() => e.modelValue, (k, j) => {
    const Q = b(k) === true ? C(k) : -1;
    o !== true && F(Q === -1 ? 0 : Q < C(j) ? -1 : 1), u.value !== Q && (u.value = Q, t("beforeTransition", k, j), r(() => {
      t("transition", k, j);
    }, e.transitionDuration));
  });
  function T() {
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
  function C(k) {
    return a.findIndex((j) => j.props.name === k && j.props.disable !== "" && j.props.disable !== true);
  }
  function $() {
    return a.filter((k) => k.props.disable !== "" && k.props.disable !== true);
  }
  function F(k) {
    const j = k !== 0 && e.animated === true && u.value !== -1 ? "q-transition--" + (k === -1 ? f.value : h.value) : null;
    i.value !== j && (i.value = j);
  }
  function N(k, j = u.value) {
    let Q = j + k;
    for (; Q !== -1 && Q < a.length; ) {
      const W = a[Q];
      if (W !== void 0 && W.props.disable !== "" && W.props.disable !== true) {
        F(k), o = true, t("update:modelValue", W.props.name), setTimeout(() => {
          o = false;
        });
        return;
      }
      Q += k;
    }
    e.infinite === true && a.length !== 0 && j !== -1 && j !== a.length && N(k, k === -1 ? a.length : -1);
  }
  function B() {
    const k = C(e.modelValue);
    return u.value !== k && (u.value = k), true;
  }
  function L() {
    const k = b(e.modelValue) === true && B() && a[u.value];
    return e.keepAlive === true ? [d(pv, w.value, [d(x.value === true ? l(g.value, () => ({ ...ad, name: g.value })) : ad, { key: g.value, style: m.value }, () => k)])] : [d("div", { class: "q-panel scroll", style: m.value, key: g.value, role: "tabpanel" }, [k])];
  }
  function z() {
    if (a.length !== 0) return e.animated === true ? [d(Ft, { name: i.value }, L)] : L();
  }
  function q(k) {
    return a = Cs($e(k.default, [])).filter((j) => j.props !== null && j.props.slot === void 0 && b(j.props.name) === true), a.length;
  }
  function E() {
    return a;
  }
  return Object.assign(n, { next: T, previous: p, goTo: y }), { panelIndex: u, panelDirectives: s, updatePanelsList: q, updatePanelIndex: B, getPanelContent: z, getEnabledPanels: $, getPanels: E, isValidPanelName: b, keepAliveProps: w, needsUniqueKeepAliveWrapper: x, goToPanelByOffset: N, goToPanel: y, nextPanel: T, previousPanel: p };
}
var Vr = 0, Vs = { fullscreen: Boolean, noRouteFullscreenExit: Boolean }, Ds = ["update:fullscreen", "fullscreen"];
function Is() {
  const e = xe(), { props: t, emit: n, proxy: l } = e;
  let r, a, o;
  const i = K(false);
  ks(e) === true && ge(() => l.$route.fullPath, () => {
    t.noRouteFullscreenExit !== true && s();
  }), ge(() => t.fullscreen, (f) => {
    i.value !== f && u();
  }), ge(i, (f) => {
    n("update:fullscreen", f), n("fullscreen", f);
  });
  function u() {
    i.value === true ? s() : c();
  }
  function c() {
    i.value !== true && (i.value = true, o = l.$el.parentNode, o.replaceChild(a, l.$el), document.body.appendChild(l.$el), Vr++, Vr === 1 && document.body.classList.add("q-body--fullscreen-mixin"), r = { handler: s }, _a.add(r));
  }
  function s() {
    i.value === true && (r !== void 0 && (_a.remove(r), r = void 0), o.replaceChild(l.$el, a), i.value = false, Vr = Math.max(0, Vr - 1), Vr === 0 && (document.body.classList.remove("q-body--fullscreen-mixin"), l.$el.scrollIntoView !== void 0 && setTimeout(() => {
      l.$el.scrollIntoView();
    })));
  }
  return Zo(() => {
    a = document.createElement("span");
  }), ft(() => {
    t.fullscreen === true && c();
  }), Ke(s), Object.assign(l, { toggleFullscreen: u, setFullscreen: c, exitFullscreen: s }), { inFullscreen: i, toggleFullscreen: u };
}
var Cp = ["top", "right", "bottom", "left"], kp = ["regular", "flat", "outline", "push", "unelevated"];
he({ name: "QCarousel", props: { ...nt, ...Ls, ...Vs, transitionPrev: { type: String, default: "fade" }, transitionNext: { type: String, default: "fade" }, height: String, padding: Boolean, controlColor: String, controlTextColor: String, controlType: { type: String, validator: (e) => kp.includes(e), default: "flat" }, autoplay: [Number, Boolean], arrows: Boolean, prevIcon: String, nextIcon: String, navigation: Boolean, navigationPosition: { type: String, validator: (e) => Cp.includes(e) }, navigationIcon: String, navigationActiveIcon: String, thumbnails: Boolean }, emits: [...Ds, ...Fs], setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), l = lt(e, n);
  let r = null, a;
  const { updatePanelsList: o, getPanelContent: i, panelDirectives: u, goToPanel: c, previousPanel: s, nextPanel: f, getEnabledPanels: h, panelIndex: m } = Os(), { inFullscreen: g } = Is(), w = v(() => g.value !== true && e.height !== void 0 ? { height: e.height } : {}), x = v(() => e.vertical === true ? "vertical" : "horizontal"), T = v(() => e.navigationPosition || (e.vertical === true ? "right" : "bottom")), p = v(() => `q-carousel q-panel-parent q-carousel--with${e.padding === true ? "" : "out"}-padding` + (g.value === true ? " fullscreen" : "") + (l.value === true ? " q-carousel--dark q-dark" : "") + (e.arrows === true ? ` q-carousel--arrows-${x.value}` : "") + (e.navigation === true ? ` q-carousel--navigation-${T.value}` : "")), y = v(() => {
    const L = [e.prevIcon || n.iconSet.carousel[e.vertical === true ? "up" : "left"], e.nextIcon || n.iconSet.carousel[e.vertical === true ? "down" : "right"]];
    return e.vertical === false && n.lang.rtl === true ? L.reverse() : L;
  }), b = v(() => e.navigationIcon || n.iconSet.carousel.navigationIcon), C = v(() => e.navigationActiveIcon || b.value), $ = v(() => ({ color: e.controlColor, textColor: e.controlTextColor, round: true, [e.controlType]: true, dense: true }));
  ge(() => e.modelValue, () => {
    e.autoplay && F();
  }), ge(() => e.autoplay, (L) => {
    L ? F() : r !== null && (clearTimeout(r), r = null);
  });
  function F() {
    const L = wa(e.autoplay) === true ? Math.abs(e.autoplay) : 5e3;
    r !== null && clearTimeout(r), r = setTimeout(() => {
      r = null, L >= 0 ? f() : s();
    }, L);
  }
  ft(() => {
    e.autoplay && F();
  }), Ke(() => {
    r !== null && clearTimeout(r);
  });
  function N(L, z) {
    return d("div", { class: `q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${L} q-carousel__navigation--${T.value}` + (e.controlColor !== void 0 ? ` text-${e.controlColor}` : "") }, [d("div", { class: "q-carousel__navigation-inner flex flex-center no-wrap" }, h().map(z))]);
  }
  function B() {
    const L = [];
    if (e.navigation === true) {
      const z = t["navigation-icon"] !== void 0 ? t["navigation-icon"] : (E) => d(Ze, { key: "nav" + E.name, class: `q-carousel__navigation-icon q-carousel__navigation-icon--${E.active === true ? "" : "in"}active`, ...E.btnProps, onClick: E.onClick }), q = a - 1;
      L.push(N("buttons", (E, k) => {
        const j = E.props.name, Q = m.value === k;
        return z({ index: k, maxIndex: q, name: j, active: Q, btnProps: { icon: Q === true ? C.value : b.value, size: "sm", ...$.value }, onClick: () => {
          c(j);
        } });
      }));
    } else if (e.thumbnails === true) {
      const z = e.controlColor !== void 0 ? ` text-${e.controlColor}` : "";
      L.push(N("thumbnails", (q) => {
        const E = q.props;
        return d("img", { key: "tmb#" + E.name, class: `q-carousel__thumbnail q-carousel__thumbnail--${E.name === e.modelValue ? "" : "in"}active` + z, src: E.imgSrc || E["img-src"], onClick: () => {
          c(E.name);
        } });
      }));
    }
    return e.arrows === true && m.value >= 0 && ((e.infinite === true || m.value > 0) && L.push(d("div", { key: "prev", class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${x.value} absolute flex flex-center` }, [d(Ze, { icon: y.value[0], ...$.value, onClick: s })])), (e.infinite === true || m.value < a - 1) && L.push(d("div", { key: "next", class: `q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${x.value} absolute flex flex-center` }, [d(Ze, { icon: y.value[1], ...$.value, onClick: f })]))), Tt(t.control, L);
  }
  return () => (a = o(t), d("div", { class: p.value, style: w.value }, [pn("div", { class: "q-carousel__slides-container" }, i(), "sl-cont", e.swipeable, () => u.value)].concat(B())));
} });
he({ name: "QCarouselSlide", props: { ...Bs, imgSrc: String }, setup(e, { slots: t }) {
  const n = v(() => e.imgSrc ? { backgroundImage: `url("${e.imgSrc}")` } : {});
  return () => d("div", { class: "q-carousel__slide", style: n.value }, $e(t.default));
} });
he({ name: "QCarouselControl", props: { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, default: () => [18, 18], validator: (e) => e.length === 2 } }, setup(e, { slots: t }) {
  const n = v(() => `q-carousel__control absolute absolute-${e.position}`), l = v(() => ({ margin: `${e.offset[1]}px ${e.offset[0]}px` }));
  return () => d("div", { class: n.value, style: l.value }, $e(t.default));
} });
he({ name: "QChatMessage", props: { sent: Boolean, label: String, bgColor: String, textColor: String, name: String, avatar: String, text: Array, stamp: String, size: String, labelHtml: Boolean, nameHtml: Boolean, textHtml: Boolean, stampHtml: Boolean }, setup(e, { slots: t }) {
  const n = v(() => e.sent === true ? "sent" : "received"), l = v(() => `q-message-text-content q-message-text-content--${n.value}` + (e.textColor !== void 0 ? ` text-${e.textColor}` : "")), r = v(() => `q-message-text q-message-text--${n.value}` + (e.bgColor !== void 0 ? ` text-${e.bgColor}` : "")), a = v(() => "q-message-container row items-end no-wrap" + (e.sent === true ? " reverse" : "")), o = v(() => e.size !== void 0 ? `col-${e.size}` : ""), i = v(() => ({ msg: e.textHtml === true ? "innerHTML" : "textContent", stamp: e.stampHtml === true ? "innerHTML" : "textContent", name: e.nameHtml === true ? "innerHTML" : "textContent", label: e.labelHtml === true ? "innerHTML" : "textContent" }));
  function u(s) {
    return t.stamp !== void 0 ? [s, d("div", { class: "q-message-stamp" }, t.stamp())] : e.stamp ? [s, d("div", { class: "q-message-stamp", [i.value.stamp]: e.stamp })] : [s];
  }
  function c(s, f) {
    const h = f === true ? s.length > 1 ? (m) => m : (m) => d("div", [m]) : (m) => d("div", { [i.value.msg]: m });
    return s.map((m, g) => d("div", { key: g, class: r.value }, [d("div", { class: l.value }, u(h(m)))]));
  }
  return () => {
    const s = [];
    t.avatar !== void 0 ? s.push(t.avatar()) : e.avatar !== void 0 && s.push(d("img", { class: `q-message-avatar q-message-avatar--${n.value}`, src: e.avatar, "aria-hidden": "true" }));
    const f = [];
    t.name !== void 0 ? f.push(d("div", { class: `q-message-name q-message-name--${n.value}` }, t.name())) : e.name !== void 0 && f.push(d("div", { class: `q-message-name q-message-name--${n.value}`, [i.value.name]: e.name })), t.default !== void 0 ? f.push(c(Cs(t.default()), true)) : e.text !== void 0 && f.push(c(e.text)), s.push(d("div", { class: o.value }, f));
    const h = [];
    return t.label !== void 0 ? h.push(d("div", { class: "q-message-label" }, t.label())) : e.label !== void 0 && h.push(d("div", { class: "q-message-label", [i.value.label]: e.label })), h.push(d("div", { class: a.value }, s)), d("div", { class: `q-message q-message-${n.value}` }, h);
  };
} });
function Hm(e, t) {
  const n = K(null), l = v(() => e.disable === true ? null : d("span", { ref: n, class: "no-outline", tabindex: -1 }));
  function r(a) {
    const o = t.value;
    (a == null ? void 0 : a.qAvoidFocus) !== true && ((a == null ? void 0 : a.type.indexOf("key")) === 0 ? document.activeElement !== o && (o == null ? void 0 : o.contains(document.activeElement)) === true && o.focus() : n.value !== null && (a === void 0 || (o == null ? void 0 : o.contains(a.target)) === true) && n.value.focus());
  }
  return { refocusTargetEl: l, refocusTarget: r };
}
var jm = { xs: 30, sm: 35, md: 40, lg: 50, xl: 60 }, Um = { ...nt, ...el, ...wn, modelValue: { required: true, default: null }, val: {}, trueValue: { default: true }, falseValue: { default: false }, indeterminateValue: { default: null }, checkedIcon: String, uncheckedIcon: String, indeterminateIcon: String, toggleOrder: { type: String, validator: (e) => e === "tf" || e === "ft" }, toggleIndeterminate: Boolean, label: String, leftLabel: Boolean, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, Qm = ["update:modelValue"];
function Km(e, t) {
  const { props: n, slots: l, emit: r, proxy: a } = xe(), { $q: o } = a, i = lt(n, o), u = K(null), { refocusTargetEl: c, refocusTarget: s } = Hm(n, u), f = tl(n, jm), h = v(() => n.val !== void 0 && Array.isArray(n.modelValue)), m = v(() => {
    const q = Xe(n.val);
    return h.value === true ? n.modelValue.findIndex((E) => Xe(E) === q) : -1;
  }), g = v(() => h.value === true ? m.value !== -1 : Xe(n.modelValue) === Xe(n.trueValue)), w = v(() => h.value === true ? m.value === -1 : Xe(n.modelValue) === Xe(n.falseValue)), x = v(() => g.value === false && w.value === false), T = v(() => n.disable === true ? -1 : n.tabindex || 0), p = v(() => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (n.disable === true ? " disabled" : "") + (i.value === true ? ` q-${e}--dark` : "") + (n.dense === true ? ` q-${e}--dense` : "") + (n.leftLabel === true ? " reverse" : "")), y = v(() => {
    const q = g.value === true ? "truthy" : w.value === true ? "falsy" : "indet", E = n.color !== void 0 && (n.keepColor === true || (e === "toggle" ? g.value === true : w.value !== true)) ? ` text-${n.color}` : "";
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${q}${E}`;
  }), b = v(() => {
    const q = { type: "checkbox" };
    return n.name !== void 0 && Object.assign(q, { ".checked": g.value, "^checked": g.value === true ? "checked" : void 0, name: n.name, value: h.value === true ? n.val : n.trueValue }), q;
  }), C = Cl(b), $ = v(() => {
    const q = { tabindex: T.value, role: e === "toggle" ? "switch" : "checkbox", "aria-label": n.label, "aria-checked": x.value === true ? "mixed" : g.value === true ? "true" : "false" };
    return n.disable === true && (q["aria-disabled"] = "true"), q;
  });
  function F(q) {
    q !== void 0 && (je(q), s(q)), n.disable !== true && r("update:modelValue", N(), q);
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
    } else if (w.value === true) {
      if (n.toggleOrder === "ft" || n.toggleIndeterminate === false) return n.trueValue;
    } else return n.toggleOrder !== "ft" ? n.trueValue : n.falseValue;
    return n.indeterminateValue;
  }
  function B(q) {
    (q.keyCode === 13 || q.keyCode === 32) && je(q);
  }
  function L(q) {
    (q.keyCode === 13 || q.keyCode === 32) && F(q);
  }
  const z = t(g, x);
  return Object.assign(a, { toggle: F }), () => {
    const q = z();
    n.disable !== true && C(q, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
    const E = [d("div", { class: y.value, style: f.value, "aria-hidden": "true" }, q)];
    c.value !== null && E.push(c.value);
    const k = n.label !== void 0 ? Tt(l.default, [n.label]) : $e(l.default);
    return k !== void 0 && E.push(d("div", { class: `q-${e}__label q-anchor--skip` }, k)), d("div", { ref: u, class: p.value, ...$.value, onClick: F, onKeydown: B, onKeyup: L }, E);
  };
}
var Tp = () => d("div", { key: "svg", class: "q-checkbox__bg absolute" }, [d("svg", { class: "q-checkbox__svg fit absolute-full", viewBox: "0 0 24 24" }, [d("path", { class: "q-checkbox__truthy", fill: "none", d: "M1.73,12.91 8.1,19.28 22.79,4.59" }), d("path", { class: "q-checkbox__indet", d: "M4,14H20V10H4" })])]), ua = he({ name: "QCheckbox", props: Um, emits: Qm, setup(e) {
  const t = Tp();
  function n(l, r) {
    const a = v(() => (l.value === true ? e.checkedIcon : r.value === true ? e.indeterminateIcon : e.uncheckedIcon) || null);
    return () => a.value !== null ? [d("div", { key: "icon", class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap" }, [d(et, { class: "q-checkbox__icon", name: a.value })])] : [t];
  }
  return Km("checkbox", n);
} }), qp = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, Wm = he({ name: "QChip", props: { ...nt, ...el, dense: Boolean, icon: String, iconRight: String, iconRemove: String, iconSelected: String, label: [String, Number], color: String, textColor: String, modelValue: { type: Boolean, default: true }, selected: { type: Boolean, default: null }, square: Boolean, outline: Boolean, clickable: Boolean, removable: Boolean, removeAriaLabel: String, tabindex: [String, Number], disable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "update:selected", "remove", "click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = xe(), r = lt(e, l), a = tl(e, qp), o = v(() => e.selected === true || e.icon !== void 0), i = v(() => e.selected === true ? e.iconSelected || l.iconSet.chip.selected : e.icon), u = v(() => e.iconRemove || l.iconSet.chip.remove), c = v(() => e.disable === false && (e.clickable === true || e.selected !== null)), s = v(() => {
    const x = e.outline === true && e.color || e.textColor;
    return "q-chip row inline no-wrap items-center" + (e.outline === false && e.color !== void 0 ? ` bg-${e.color}` : "") + (x ? ` text-${x} q-chip--colored` : "") + (e.disable === true ? " disabled" : "") + (e.dense === true ? " q-chip--dense" : "") + (e.outline === true ? " q-chip--outline" : "") + (e.selected === true ? " q-chip--selected" : "") + (c.value === true ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (e.square === true ? " q-chip--square" : "") + (r.value === true ? " q-chip--dark q-dark" : "");
  }), f = v(() => {
    const x = e.disable === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: e.tabindex || 0 }, T = { ...x, role: "button", "aria-hidden": "false", "aria-label": e.removeAriaLabel || l.lang.label.remove };
    return { chip: x, remove: T };
  });
  function h(x) {
    x.keyCode === 13 && m(x);
  }
  function m(x) {
    e.disable || (n("update:selected", !e.selected), n("click", x));
  }
  function g(x) {
    (x.keyCode === void 0 || x.keyCode === 13) && (je(x), e.disable === false && (n("update:modelValue", false), n("remove")));
  }
  function w() {
    const x = [];
    c.value === true && x.push(d("div", { class: "q-focus-helper" })), o.value === true && x.push(d(et, { class: "q-chip__icon q-chip__icon--left", name: i.value }));
    const T = e.label !== void 0 ? [d("div", { class: "ellipsis" }, [e.label])] : void 0;
    return x.push(d("div", { class: "q-chip__content col row no-wrap items-center q-anchor--skip" }, ws(t.default, T))), e.iconRight && x.push(d(et, { class: "q-chip__icon q-chip__icon--right", name: e.iconRight })), e.removable === true && x.push(d(et, { class: "q-chip__icon q-chip__icon--remove cursor-pointer", name: u.value, ...f.value.remove, onClick: g, onKeyup: g })), x;
  }
  return () => {
    if (e.modelValue === false) return;
    const x = { class: s.value, style: a.value };
    return c.value === true && Object.assign(x, f.value.chip, { onClick: m, onKeyup: h }), pn("div", x, w(), "ripple", e.ripple !== false && e.disable !== true, () => [[ui, e.ripple]]);
  };
} }), zs = { ...el, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, color: String, centerColor: String, trackColor: String, fontSize: String, rounded: Boolean, thickness: { type: Number, default: 0.2, validator: (e) => e >= 0 && e <= 1 }, angle: { type: Number, default: 0 }, showValue: Boolean, reverse: Boolean, instantFeedback: Boolean }, Nu = 50, Ym = 2 * Nu, Xm = Ym * Math.PI, Mp = Math.round(Xm * 1e3) / 1e3, Gm = he({ name: "QCircularProgress", props: { ...zs, value: { type: Number, default: 0 }, animationSpeed: { type: [String, Number], default: 600 }, indeterminate: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), l = tl(e), r = v(() => {
    const m = (n.lang.rtl === true ? -1 : 1) * e.angle;
    return { transform: e.reverse !== (n.lang.rtl === true) ? `scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90 - m}deg)` : `rotate3d(0, 0, 1, ${m - 90}deg)` };
  }), a = v(() => e.instantFeedback !== true && e.indeterminate !== true ? { transition: `stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease` } : ""), o = v(() => Ym / (1 - e.thickness / 2)), i = v(() => `${o.value / 2} ${o.value / 2} ${o.value} ${o.value}`), u = v(() => ct(e.value, e.min, e.max)), c = v(() => e.max - e.min), s = v(() => e.thickness / 2 * o.value), f = v(() => {
    const m = (e.max - u.value) / c.value, g = e.rounded === true && u.value < e.max && m < 0.25 ? s.value / 2 * (1 - m / 0.25) : 0;
    return Xm * m + g;
  });
  function h({ thickness: m, offset: g, color: w, cls: x, rounded: T }) {
    return d("circle", { class: "q-circular-progress__" + x + (w !== void 0 ? ` text-${w}` : ""), style: a.value, fill: "transparent", stroke: "currentColor", "stroke-width": m, "stroke-dasharray": Mp, "stroke-dashoffset": g, "stroke-linecap": T, cx: o.value, cy: o.value, r: Nu });
  }
  return () => {
    const m = [];
    e.centerColor !== void 0 && e.centerColor !== "transparent" && m.push(d("circle", { class: `q-circular-progress__center text-${e.centerColor}`, fill: "currentColor", r: Nu - s.value / 2, cx: o.value, cy: o.value })), e.trackColor !== void 0 && e.trackColor !== "transparent" && m.push(h({ cls: "track", thickness: s.value, offset: 0, color: e.trackColor })), m.push(h({ cls: "circle", thickness: s.value, offset: f.value, color: e.color, rounded: e.rounded === true ? "round" : void 0 }));
    const g = [d("svg", { class: "q-circular-progress__svg", style: r.value, viewBox: i.value, "aria-hidden": "true" }, m)];
    return e.showValue === true && g.push(d("div", { class: "q-circular-progress__text absolute-full row flex-center content-center", style: { fontSize: e.fontSize } }, t.default !== void 0 ? t.default() : [d("div", u.value)])), d("div", { class: `q-circular-progress q-circular-progress--${e.indeterminate === true ? "in" : ""}determinate`, style: l.value, role: "progressbar", "aria-valuemin": e.min, "aria-valuemax": e.max, "aria-valuenow": e.indeterminate === true ? void 0 : u.value }, ws(t.internal, g));
  };
} });
function zi(e, t, n) {
  const l = en(e);
  let r, a = l.left - t.event.x, o = l.top - t.event.y, i = Math.abs(a), u = Math.abs(o);
  const c = t.direction;
  c.horizontal === true && c.vertical !== true ? r = a < 0 ? "left" : "right" : c.horizontal !== true && c.vertical === true ? r = o < 0 ? "up" : "down" : c.up === true && o < 0 ? (r = "up", i > u && (c.left === true && a < 0 ? r = "left" : c.right === true && a > 0 && (r = "right"))) : c.down === true && o > 0 ? (r = "down", i > u && (c.left === true && a < 0 ? r = "left" : c.right === true && a > 0 && (r = "right"))) : c.left === true && a < 0 ? (r = "left", i < u && (c.up === true && o < 0 ? r = "up" : c.down === true && o > 0 && (r = "down"))) : c.right === true && a > 0 && (r = "right", i < u && (c.up === true && o < 0 ? r = "up" : c.down === true && o > 0 && (r = "down")));
  let s = false;
  if (r === void 0 && n === false) {
    if (t.event.isFirst === true || t.event.lastDir === void 0) return {};
    r = t.event.lastDir, s = true, r === "left" || r === "right" ? (l.left -= a, i = 0, a = 0) : (l.top -= o, u = 0, o = 0);
  }
  return { synthetic: s, payload: { evt: e, touch: t.event.mouse !== true, mouse: t.event.mouse === true, position: l, direction: r, isFirst: t.event.isFirst, isFinal: n === true, duration: Date.now() - t.event.time, distance: { x: i, y: u }, offset: { x: a, y: o }, delta: { x: l.left - t.event.lastX, y: l.top - t.event.lastY } } };
}
var Ep = 0, gn = An({ name: "touch-pan", beforeMount(e, { value: t, modifiers: n }) {
  if (n.mouse !== true && De.has.touch !== true) return;
  function l(a, o) {
    n.mouse === true && o === true ? je(a) : (n.stop === true && wt(a), n.prevent === true && Vt(a));
  }
  const r = { uid: "qvtp_" + Ep++, handler: t, modifiers: n, direction: Oo(n), noop: xt, mouseStart(a) {
    Vo(a, r) && ri(a) && (kt(r, "temp", [[document, "mousemove", "move", "notPassiveCapture"], [document, "mouseup", "end", "passiveCapture"]]), r.start(a, true));
  }, touchStart(a) {
    if (Vo(a, r)) {
      const o = a.target;
      kt(r, "temp", [[o, "touchmove", "move", "notPassiveCapture"], [o, "touchcancel", "end", "passiveCapture"], [o, "touchend", "end", "passiveCapture"]]), r.start(a);
    }
  }, start(a, o) {
    if (De.is.firefox === true && gr(e, true), r.lastEvt = a, o === true || n.stop === true) {
      if (r.direction.all !== true && (o !== true || r.modifiers.mouseAllDir !== true && r.modifiers.mousealldir !== true)) {
        const c = a.type.indexOf("mouse") !== -1 ? new MouseEvent(a.type, a) : new TouchEvent(a.type, a);
        a.defaultPrevented === true && Vt(c), a.cancelBubble === true && wt(c), Object.assign(c, { qKeyEvent: a.qKeyEvent, qClickOutside: a.qClickOutside, qAnchorHandled: a.qAnchorHandled, qClonedBy: a.qClonedBy === void 0 ? [r.uid] : a.qClonedBy.concat(r.uid) }), r.initialEvent = { target: a.target, event: c };
      }
      wt(a);
    }
    const { left: i, top: u } = en(a);
    r.event = { x: i, y: u, time: Date.now(), mouse: o === true, detected: false, isFirst: true, isFinal: false, lastX: i, lastY: u };
  }, move(a) {
    if (r.event === void 0) return;
    const o = en(a), i = o.left - r.event.x, u = o.top - r.event.y;
    if (i === 0 && u === 0) return;
    r.lastEvt = a;
    const c = r.event.mouse === true, s = () => {
      l(a, c);
      let m;
      n.preserveCursor !== true && n.preservecursor !== true && (m = document.documentElement.style.cursor || "", document.documentElement.style.cursor = "grabbing"), c === true && document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), Mn(), r.styleCleanup = (g) => {
        if (r.styleCleanup = void 0, m !== void 0 && (document.documentElement.style.cursor = m), document.body.classList.remove("non-selectable"), c === true) {
          const w = () => {
            document.body.classList.remove("no-pointer-events--children");
          };
          g !== void 0 ? setTimeout(() => {
            w(), g();
          }, 50) : w();
        } else g !== void 0 && g();
      };
    };
    if (r.event.detected === true) {
      r.event.isFirst !== true && l(a, r.event.mouse);
      const { payload: m, synthetic: g } = zi(a, r, false);
      m !== void 0 && (r.handler(m) === false ? r.end(a) : (r.styleCleanup === void 0 && r.event.isFirst === true && s(), r.event.lastX = m.position.left, r.event.lastY = m.position.top, r.event.lastDir = g === true ? void 0 : m.direction, r.event.isFirst = false));
      return;
    }
    if (r.direction.all === true || c === true && (r.modifiers.mouseAllDir === true || r.modifiers.mousealldir === true)) {
      s(), r.event.detected = true, r.move(a);
      return;
    }
    const f = Math.abs(i), h = Math.abs(u);
    f !== h && (r.direction.horizontal === true && f > h || r.direction.vertical === true && f < h || r.direction.up === true && f < h && u < 0 || r.direction.down === true && f < h && u > 0 || r.direction.left === true && f > h && i < 0 || r.direction.right === true && f > h && i > 0 ? (r.event.detected = true, r.move(a)) : r.end(a, true));
  }, end(a, o) {
    var _a3;
    if (r.event !== void 0) {
      if (Wt(r, "temp"), De.is.firefox === true && gr(e, false), o === true) (_a3 = r.styleCleanup) == null ? void 0 : _a3.call(r), r.event.detected !== true && r.initialEvent !== void 0 && r.initialEvent.target.dispatchEvent(r.initialEvent.event);
      else if (r.event.detected === true) {
        r.event.isFirst === true && r.handler(zi(a === void 0 ? r.lastEvt : a, r).payload);
        const { payload: i } = zi(a === void 0 ? r.lastEvt : a, r, true), u = () => {
          r.handler(i);
        };
        r.styleCleanup !== void 0 ? r.styleCleanup(u) : u();
      }
      r.event = void 0, r.initialEvent = void 0, r.lastEvt = void 0;
    }
  } };
  if (e.__qtouchpan = r, n.mouse === true) {
    const a = n.mouseCapture === true || n.mousecapture === true ? "Capture" : "";
    kt(r, "main", [[e, "mousedown", "mouseStart", `passive${a}`]]);
  }
  De.has.touch === true && kt(r, "main", [[e, "touchstart", "touchStart", `passive${n.capture === true ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const n = e.__qtouchpan;
  n !== void 0 && (t.oldValue !== t.value && (typeof value != "function" && n.end(), n.handler = t.value), n.direction = Oo(t.modifiers));
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qtouchpan;
  t !== void 0 && (t.event !== void 0 && t.end(), Wt(t, "main"), Wt(t, "temp"), De.is.firefox === true && gr(e, false), (_a3 = t.styleCleanup) == null ? void 0 : _a3.call(t), delete e.__qtouchpan);
} }), od = "q-slider__marker-labels", Rp = (e) => ({ value: e }), Ap = ({ marker: e }) => d("div", { key: e.value, style: e.style, class: e.classes }, e.label), Ns = [34, 37, 40, 33, 39, 38], Zm = { ...nt, ...wn, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, snap: Boolean, vertical: Boolean, reverse: Boolean, color: String, markerLabelsClass: String, label: Boolean, labelColor: String, labelTextColor: String, labelAlways: Boolean, switchLabelSide: Boolean, markers: [Boolean, Number], markerLabels: [Boolean, Array, Object, Function], switchMarkerLabelsSide: Boolean, trackImg: String, trackColor: String, innerTrackImg: String, innerTrackColor: String, selectionColor: String, selectionImg: String, thumbSize: { type: String, default: "20px" }, trackSize: { type: String, default: "4px" }, disable: Boolean, readonly: Boolean, dense: Boolean, tabindex: [String, Number], thumbColor: String, thumbPath: { type: String, default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0" } }, Jm = ["pan", "update:modelValue", "change"];
function eh({ updateValue: e, updatePosition: t, getDragging: n, formAttrs: l }) {
  const { props: r, emit: a, slots: o, proxy: { $q: i } } = xe(), u = lt(r, i), c = Cl(l), s = K(false), f = K(false), h = K(false), m = K(false), g = v(() => r.vertical === true ? "--v" : "--h"), w = v(() => "-" + (r.switchLabelSide === true ? "switched" : "standard")), x = v(() => r.vertical === true ? r.reverse === true : r.reverse !== (i.lang.rtl === true)), T = v(() => isNaN(r.innerMin) === true || r.innerMin < r.min ? r.min : r.innerMin), p = v(() => isNaN(r.innerMax) === true || r.innerMax > r.max ? r.max : r.innerMax), y = v(() => r.disable !== true && r.readonly !== true && T.value < p.value), b = v(() => {
    if (r.step === 0) return (_e2) => _e2;
    const oe = (String(r.step).trim().split(".")[1] || "").length;
    return (_e2) => parseFloat(_e2.toFixed(oe));
  }), C = v(() => r.step === 0 ? 1 : r.step), $ = v(() => y.value === true ? r.tabindex || 0 : -1), F = v(() => r.max - r.min), N = v(() => p.value - T.value), B = v(() => be(T.value)), L = v(() => be(p.value)), z = v(() => r.vertical === true ? x.value === true ? "bottom" : "top" : x.value === true ? "right" : "left"), q = v(() => r.vertical === true ? "height" : "width"), E = v(() => r.vertical === true ? "width" : "height"), k = v(() => r.vertical === true ? "vertical" : "horizontal"), j = v(() => {
    const oe = { role: "slider", "aria-valuemin": T.value, "aria-valuemax": p.value, "aria-orientation": k.value, "data-step": r.step };
    return r.disable === true ? oe["aria-disabled"] = "true" : r.readonly === true && (oe["aria-readonly"] = "true"), oe;
  }), Q = v(() => `q-slider q-slider${g.value} q-slider--${s.value === true ? "" : "in"}active inline no-wrap ` + (r.vertical === true ? "row" : "column") + (r.disable === true ? " disabled" : " q-slider--enabled" + (y.value === true ? " q-slider--editable" : "")) + (h.value === "both" ? " q-slider--focus" : "") + (r.label || r.labelAlways === true ? " q-slider--label" : "") + (r.labelAlways === true ? " q-slider--label-always" : "") + (u.value === true ? " q-slider--dark" : "") + (r.dense === true ? " q-slider--dense q-slider--dense" + g.value : ""));
  function W(oe) {
    const _e2 = "q-slider__" + oe;
    return `${_e2} ${_e2}${g.value} ${_e2}${g.value}${w.value}`;
  }
  function X(oe) {
    const _e2 = "q-slider__" + oe;
    return `${_e2} ${_e2}${g.value}`;
  }
  const re = v(() => {
    const oe = r.selectionColor || r.color;
    return "q-slider__selection absolute" + (oe !== void 0 ? ` text-${oe}` : "");
  }), pe = v(() => X("markers") + " absolute overflow-hidden"), Y = v(() => X("track-container")), _ = v(() => W("pin")), H = v(() => W("label")), V = v(() => W("text-container")), fe = v(() => W("marker-labels-container") + (r.markerLabelsClass !== void 0 ? ` ${r.markerLabelsClass}` : "")), A = v(() => "q-slider__track relative-position no-outline" + (r.trackColor !== void 0 ? ` bg-${r.trackColor}` : "")), R = v(() => {
    const oe = { [E.value]: r.trackSize };
    return r.trackImg !== void 0 && (oe.backgroundImage = `url(${r.trackImg}) !important`), oe;
  }), G = v(() => "q-slider__inner absolute" + (r.innerTrackColor !== void 0 ? ` bg-${r.innerTrackColor}` : "")), O = v(() => {
    const oe = L.value - B.value, _e2 = { [z.value]: `${100 * B.value}%`, [q.value]: oe === 0 ? "2px" : `${100 * oe}%` };
    return r.innerTrackImg !== void 0 && (_e2.backgroundImage = `url(${r.innerTrackImg}) !important`), _e2;
  });
  function ne(oe) {
    const { min: _e2, max: Ce, step: Oe } = r;
    let Re = _e2 + oe * (Ce - _e2);
    if (Oe > 0) {
      const Ye = (Re - T.value) % Oe;
      Re += (Math.abs(Ye) >= Oe / 2 ? (Ye < 0 ? -1 : 1) * Oe : 0) - Ye;
    }
    return Re = b.value(Re), ct(Re, T.value, p.value);
  }
  function be(oe) {
    return F.value === 0 ? 0 : (oe - r.min) / F.value;
  }
  function S(oe, _e2) {
    const Ce = en(oe), Oe = r.vertical === true ? ct((Ce.top - _e2.top) / _e2.height, 0, 1) : ct((Ce.left - _e2.left) / _e2.width, 0, 1);
    return ct(x.value === true ? 1 - Oe : Oe, B.value, L.value);
  }
  const M = v(() => wa(r.markers) === true ? r.markers : C.value), D = v(() => {
    const oe = [], _e2 = M.value, Ce = r.max;
    let Oe = r.min;
    do
      oe.push(Oe), Oe += _e2;
    while (Oe < Ce);
    return oe.push(Ce), oe;
  }), ee = v(() => {
    const oe = ` ${od}${g.value}-`;
    return od + `${oe}${r.switchMarkerLabelsSide === true ? "switched" : "standard"}${oe}${x.value === true ? "rtl" : "ltr"}`;
  }), le = v(() => r.markerLabels === false ? null : ce(r.markerLabels).map((oe, _e2) => ({ index: _e2, value: oe.value, label: oe.label || oe.value, classes: ee.value + (oe.classes !== void 0 ? " " + oe.classes : ""), style: { ...de(oe.value), ...oe.style || {} } }))), P = v(() => ({ markerList: le.value, markerMap: me.value, classes: ee.value, getStyle: de })), te = v(() => {
    const oe = N.value === 0 ? "2px" : 100 * M.value / N.value;
    return { ...O.value, backgroundSize: r.vertical === true ? `2px ${oe}%` : `${oe}% 2px` };
  });
  function ce(oe) {
    if (oe === false) return null;
    if (oe === true) return D.value.map(Rp);
    if (typeof oe == "function") return D.value.map((Ce) => {
      const Oe = oe(Ce);
      return $t(Oe) === true ? { ...Oe, value: Ce } : { value: Ce, label: Oe };
    });
    const _e2 = ({ value: Ce }) => Ce >= r.min && Ce <= r.max;
    return Array.isArray(oe) === true ? oe.map((Ce) => $t(Ce) === true ? Ce : { value: Ce }).filter(_e2) : Object.keys(oe).map((Ce) => {
      const Oe = oe[Ce], Re = Number(Ce);
      return $t(Oe) === true ? { ...Oe, value: Re } : { value: Re, label: Oe };
    }).filter(_e2);
  }
  function de(oe) {
    return { [z.value]: `${100 * (oe - r.min) / F.value}%` };
  }
  const me = v(() => {
    if (r.markerLabels === false) return null;
    const oe = {};
    return le.value.forEach((_e2) => {
      oe[_e2.value] = _e2;
    }), oe;
  });
  function ae() {
    if (o["marker-label-group"] !== void 0) return o["marker-label-group"](P.value);
    const oe = o["marker-label"] || Ap;
    return le.value.map((_e2) => oe({ marker: _e2, ...P.value }));
  }
  const U = v(() => [[gn, ie, void 0, { [k.value]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
  function ie(oe) {
    oe.isFinal === true ? (m.value !== void 0 && (t(oe.evt), oe.touch === true && e(true), m.value = void 0, a("pan", "end")), s.value = false, h.value = false) : oe.isFirst === true ? (m.value = n(oe.evt), t(oe.evt), e(), s.value = true, a("pan", "start")) : (t(oe.evt), e());
  }
  function we() {
    h.value = false;
  }
  function ke(oe) {
    t(oe, n(oe)), e(), f.value = true, s.value = true, document.addEventListener("mouseup", Te, true);
  }
  function Te() {
    f.value = false, s.value = false, e(true), we(), document.removeEventListener("mouseup", Te, true);
  }
  function Me(oe) {
    t(oe, n(oe)), e(true);
  }
  function He(oe) {
    Ns.includes(oe.keyCode) && e(true);
  }
  function Ve(oe) {
    if (r.vertical === true) return null;
    const _e2 = i.lang.rtl !== r.reverse ? 1 - oe : oe;
    return { transform: `translateX(calc(${2 * _e2 - 1} * ${r.thumbSize} / 2 + ${50 - 100 * _e2}%))` };
  }
  function ue(oe) {
    const _e2 = v(() => f.value === false && (h.value === oe.focusValue || h.value === "both") ? " q-slider--focus" : ""), Ce = v(() => `q-slider__thumb q-slider__thumb${g.value} q-slider__thumb${g.value}-${x.value === true ? "rtl" : "ltr"} absolute non-selectable` + _e2.value + (oe.thumbColor.value !== void 0 ? ` text-${oe.thumbColor.value}` : "")), Oe = v(() => ({ width: r.thumbSize, height: r.thumbSize, [z.value]: `${100 * oe.ratio.value}%`, zIndex: h.value === oe.focusValue ? 2 : void 0 })), Re = v(() => oe.labelColor.value !== void 0 ? ` text-${oe.labelColor.value}` : ""), Ye = v(() => Ve(oe.ratio.value)), it = v(() => "q-slider__text" + (oe.labelTextColor.value !== void 0 ? ` text-${oe.labelTextColor.value}` : ""));
    return () => {
      const Ct = [d("svg", { class: "q-slider__thumb-shape absolute-full", viewBox: "0 0 20 20", "aria-hidden": "true" }, [d("path", { d: r.thumbPath })]), d("div", { class: "q-slider__focus-ring fit" })];
      return (r.label === true || r.labelAlways === true) && (Ct.push(d("div", { class: _.value + " absolute fit no-pointer-events" + Re.value }, [d("div", { class: H.value, style: { minWidth: r.thumbSize } }, [d("div", { class: V.value, style: Ye.value }, [d("span", { class: it.value }, oe.label.value)])])])), r.name !== void 0 && r.disable !== true && c(Ct, "push")), d("div", { class: Ce.value, style: Oe.value, ...oe.getNodeData() }, Ct);
    };
  }
  function ye(oe, _e2, Ce, Oe) {
    const Re = [];
    r.innerTrackColor !== "transparent" && Re.push(d("div", { key: "inner", class: G.value, style: O.value })), r.selectionColor !== "transparent" && Re.push(d("div", { key: "selection", class: re.value, style: oe.value })), r.markers !== false && Re.push(d("div", { key: "marker", class: pe.value, style: te.value })), Oe(Re);
    const Ye = [pn("div", { key: "trackC", class: Y.value, tabindex: _e2.value, ...Ce.value }, [d("div", { class: A.value, style: R.value }, Re)], "slide", y.value, () => U.value)];
    if (r.markerLabels !== false) {
      const it = r.switchMarkerLabelsSide === true ? "unshift" : "push";
      Ye[it](d("div", { key: "markerL", class: fe.value }, ae()));
    }
    return Ye;
  }
  return Ke(() => {
    document.removeEventListener("mouseup", Te, true);
  }), { state: { active: s, focus: h, preventFocus: f, dragging: m, editable: y, classes: Q, tabindex: $, attributes: j, roundValueFn: b, keyStep: C, trackLen: F, innerMin: T, innerMinRatio: B, innerMax: p, innerMaxRatio: L, positionProp: z, sizeProp: q, isReversed: x }, methods: { onActivate: ke, onMobileClick: Me, onBlur: we, onKeyup: He, getContent: ye, getThumbRenderFn: ue, convertRatioToModel: ne, convertModelToRatio: be, getDraggingRatio: S } };
}
var Pp = () => ({}), nr = he({ name: "QSlider", props: { ...Zm, modelValue: { required: true, default: null, validator: (e) => typeof e == "number" || e === null }, labelValue: [String, Number] }, emits: Jm, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = xe(), { state: l, methods: r } = eh({ updateValue: g, updatePosition: x, getDragging: w, formAttrs: Ba(e) }), a = K(null), o = K(0), i = K(0);
  function u() {
    i.value = e.modelValue === null ? l.innerMin.value : ct(e.modelValue, l.innerMin.value, l.innerMax.value);
  }
  ge(() => `${e.modelValue}|${l.innerMin.value}|${l.innerMax.value}`, u), u();
  const c = v(() => r.convertModelToRatio(i.value)), s = v(() => l.active.value === true ? o.value : c.value), f = v(() => {
    const y = { [l.positionProp.value]: `${100 * l.innerMinRatio.value}%`, [l.sizeProp.value]: `${100 * (s.value - l.innerMinRatio.value)}%` };
    return e.selectionImg !== void 0 && (y.backgroundImage = `url(${e.selectionImg}) !important`), y;
  }), h = r.getThumbRenderFn({ focusValue: true, getNodeData: Pp, ratio: s, label: v(() => e.labelValue !== void 0 ? e.labelValue : i.value), thumbColor: v(() => e.thumbColor || e.color), labelColor: v(() => e.labelColor), labelTextColor: v(() => e.labelTextColor) }), m = v(() => l.editable.value !== true ? {} : n.platform.is.mobile === true ? { onClick: r.onMobileClick } : { onMousedown: r.onActivate, onFocus: T, onBlur: r.onBlur, onKeydown: p, onKeyup: r.onKeyup });
  function g(y) {
    i.value !== e.modelValue && t("update:modelValue", i.value), y === true && t("change", i.value);
  }
  function w() {
    return a.value.getBoundingClientRect();
  }
  function x(y, b = l.dragging.value) {
    const C = r.getDraggingRatio(y, b);
    i.value = r.convertRatioToModel(C), o.value = e.snap !== true || e.step === 0 ? C : r.convertModelToRatio(i.value);
  }
  function T() {
    l.focus.value = true;
  }
  function p(y) {
    if (Ns.includes(y.keyCode) === false) return;
    je(y);
    const b = ([34, 33].includes(y.keyCode) ? 10 : 1) * l.keyStep.value, C = ([34, 37, 40].includes(y.keyCode) ? -1 : 1) * (l.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * b;
    i.value = ct(l.roundValueFn.value(i.value + C), l.innerMin.value, l.innerMax.value), g();
  }
  return () => {
    const y = r.getContent(f, l.tabindex, m, (b) => {
      b.push(h());
    });
    return d("div", { ref: a, class: l.classes.value + (e.modelValue === null ? " q-slider--no-value" : ""), ...l.attributes.value, "aria-valuenow": e.modelValue }, y);
  };
} });
function th() {
  const e = K(!nn.value);
  return e.value === false && ft(() => {
    e.value = true;
  }), { isHydrated: e };
}
var nh = typeof ResizeObserver < "u", id = nh === true ? {} : { style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;", url: "about:blank" }, Ul = he({ name: "QResizeObserver", props: { debounce: { type: [String, Number], default: 100 } }, emits: ["resize"], setup(e, { emit: t }) {
  let n = null, l, r = { width: -1, height: -1 };
  function a(u) {
    u === true || e.debounce === 0 || e.debounce === "0" ? o() : n === null && (n = setTimeout(o, e.debounce));
  }
  function o() {
    if (n !== null && (clearTimeout(n), n = null), l) {
      const { offsetWidth: u, offsetHeight: c } = l;
      (u !== r.width || c !== r.height) && (r = { width: u, height: c }, t("resize", r));
    }
  }
  const { proxy: i } = xe();
  if (i.trigger = a, nh === true) {
    let u;
    const c = (s) => {
      l = i.$el.parentNode, l ? (u = new ResizeObserver(a), u.observe(l), o()) : s !== true && We(() => {
        c(true);
      });
    };
    return ft(() => {
      c();
    }), Ke(() => {
      n !== null && clearTimeout(n), u !== void 0 && (u.disconnect !== void 0 ? u.disconnect() : l && u.unobserve(l));
    }), xt;
  } else {
    let u = function() {
      n !== null && (clearTimeout(n), n = null), f !== void 0 && (f.removeEventListener !== void 0 && f.removeEventListener("resize", a, dt.passive), f = void 0);
    }, c = function() {
      u(), (l == null ? void 0 : l.contentDocument) && (f = l.contentDocument.defaultView, f.addEventListener("resize", a, dt.passive), o());
    };
    const { isHydrated: s } = th();
    let f;
    return ft(() => {
      We(() => {
        l = i.$el, l && c();
      });
    }), Ke(u), () => {
      if (s.value === true) return d("object", { class: "q--avoid-card-border", style: id.style, tabindex: -1, type: "text/html", data: id.url, "aria-hidden": "true", onLoad: c });
    };
  }
} }), Ca = false;
if (!__QUASAR_SSR__) {
  const e = document.createElement("div");
  e.setAttribute("dir", "rtl"), Object.assign(e.style, { width: "1px", height: "1px", overflow: "auto" });
  const t = document.createElement("div");
  Object.assign(t.style, { width: "1000px", height: "1px" }), document.body.appendChild(e), e.appendChild(t), e.scrollLeft = -1e3, Ca = e.scrollLeft >= 0, e.remove();
}
function $p(e, t, n) {
  const l = n === true ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${t === true ? l[0] : l[1]}${e ? ` text-${e}` : ""}`;
}
var Bp = ["left", "center", "right", "justify"], ud = he({ name: "QTabs", props: { modelValue: [Number, String], align: { type: String, default: "center", validator: (e) => Bp.includes(e) }, breakpoint: { type: [String, Number], default: 600 }, vertical: Boolean, shrink: Boolean, stretch: Boolean, activeClass: String, activeColor: String, activeBgColor: String, indicatorColor: String, leftIcon: String, rightIcon: String, outsideArrows: Boolean, mobileArrows: Boolean, switchIndicator: Boolean, narrowIndicator: Boolean, inlineLabel: Boolean, noCaps: Boolean, dense: Boolean, contentClass: String, "onUpdate:modelValue": [Function, Array] }, setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), { $q: r } = l, { registerTick: a } = pr(), { registerTick: o } = pr(), { registerTick: i } = pr(), { registerTimeout: u, removeTimeout: c } = Zn(), { registerTimeout: s, removeTimeout: f } = Zn(), h = K(null), m = K(null), g = K(e.modelValue), w = K(false), x = K(true), T = K(false), p = K(false), y = [], b = K(0), C = K(false);
  let $ = null, F = null, N;
  const B = v(() => ({ activeClass: e.activeClass, activeColor: e.activeColor, activeBgColor: e.activeBgColor, indicatorClass: $p(e.indicatorColor, e.switchIndicator, e.vertical), narrowIndicator: e.narrowIndicator, inlineLabel: e.inlineLabel, noCaps: e.noCaps })), L = v(() => {
    const ae = b.value, U = g.value;
    for (let ie = 0; ie < ae; ie++) if (y[ie].name.value === U) return true;
    return false;
  }), z = v(() => `q-tabs__content--align-${w.value === true ? "left" : p.value === true ? "justify" : e.align}`), q = v(() => `q-tabs row no-wrap items-center q-tabs--${w.value === true ? "" : "not-"}scrollable q-tabs--${e.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${e.outsideArrows === true ? "outside" : "inside"} q-tabs--mobile-with${e.mobileArrows === true ? "" : "out"}-arrows` + (e.dense === true ? " q-tabs--dense" : "") + (e.shrink === true ? " col-shrink" : "") + (e.stretch === true ? " self-stretch" : "")), E = v(() => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + z.value + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), k = v(() => e.vertical === true ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" }), j = v(() => e.vertical !== true && r.lang.rtl === true), Q = v(() => Ca === false && j.value === true);
  ge(j, _), ge(() => e.modelValue, (ae) => {
    W({ name: ae, setCurrent: true, skipEmit: true });
  }), ge(() => e.outsideArrows, X);
  function W({ name: ae, setCurrent: U, skipEmit: ie }) {
    g.value !== ae && (ie !== true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", ae), (U === true || e["onUpdate:modelValue"] === void 0) && (pe(g.value, ae), g.value = ae));
  }
  function X() {
    a(() => {
      h.value && re({ width: h.value.offsetWidth, height: h.value.offsetHeight });
    });
  }
  function re(ae) {
    if (k.value === void 0 || m.value === null) return;
    const U = ae[k.value.container], ie = Math.min(m.value[k.value.scroll], Array.prototype.reduce.call(m.value.children, (ke, Te) => ke + (Te[k.value.content] || 0), 0)), we = U > 0 && ie > U;
    w.value = we, we === true && o(_), p.value = U < parseInt(e.breakpoint, 10);
  }
  function pe(ae, U) {
    const ie = ae != null && ae !== "" ? y.find((ke) => ke.name.value === ae) : null, we = U != null && U !== "" ? y.find((ke) => ke.name.value === U) : null;
    if (me === true) me = false;
    else if (ie && we) {
      const ke = ie.tabIndicatorRef.value, Te = we.tabIndicatorRef.value;
      $ !== null && (clearTimeout($), $ = null), ke.style.transition = "none", ke.style.transform = "none", Te.style.transition = "none", Te.style.transform = "none";
      const Me = ke.getBoundingClientRect(), He = Te.getBoundingClientRect();
      Te.style.transform = e.vertical === true ? `translate3d(0,${Me.top - He.top}px,0) scale3d(1,${He.height ? Me.height / He.height : 1},1)` : `translate3d(${Me.left - He.left}px,0,0) scale3d(${He.width ? Me.width / He.width : 1},1,1)`, i(() => {
        $ = setTimeout(() => {
          $ = null, Te.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)", Te.style.transform = "none";
        }, 70);
      });
    }
    we && w.value === true && Y(we.rootRef.value);
  }
  function Y(ae) {
    const { left: U, width: ie, top: we, height: ke } = m.value.getBoundingClientRect(), Te = ae.getBoundingClientRect();
    let Me = e.vertical === true ? Te.top - we : Te.left - U;
    if (Me < 0) {
      m.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.floor(Me), _();
      return;
    }
    Me += e.vertical === true ? Te.height - ke : Te.width - ie, Me > 0 && (m.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.ceil(Me), _());
  }
  function _() {
    const ae = m.value;
    if (ae === null) return;
    const U = ae.getBoundingClientRect(), ie = e.vertical === true ? ae.scrollTop : Math.abs(ae.scrollLeft);
    j.value === true ? (x.value = Math.ceil(ie + U.width) < ae.scrollWidth - 1, T.value = ie > 0) : (x.value = ie > 0, T.value = e.vertical === true ? Math.ceil(ie + U.height) < ae.scrollHeight : Math.ceil(ie + U.width) < ae.scrollWidth);
  }
  function H(ae) {
    F !== null && clearInterval(F), F = setInterval(() => {
      O(ae) === true && A();
    }, 5);
  }
  function V() {
    H(Q.value === true ? Number.MAX_SAFE_INTEGER : 0);
  }
  function fe() {
    H(Q.value === true ? 0 : Number.MAX_SAFE_INTEGER);
  }
  function A() {
    F !== null && (clearInterval(F), F = null);
  }
  function R(ae, U) {
    const ie = Array.prototype.filter.call(m.value.children, (He) => He === U || He.matches && He.matches(".q-tab.q-focusable") === true), we = ie.length;
    if (we === 0) return;
    if (ae === 36) return Y(ie[0]), ie[0].focus(), true;
    if (ae === 35) return Y(ie[we - 1]), ie[we - 1].focus(), true;
    const ke = ae === (e.vertical === true ? 38 : 37), Te = ae === (e.vertical === true ? 40 : 39), Me = ke === true ? -1 : Te === true ? 1 : void 0;
    if (Me !== void 0) {
      const He = j.value === true ? -1 : 1, Ve = ie.indexOf(U) + Me * He;
      return Ve >= 0 && Ve < we && (Y(ie[Ve]), ie[Ve].focus({ preventScroll: true })), true;
    }
  }
  const G = v(() => Q.value === true ? { get: (ae) => Math.abs(ae.scrollLeft), set: (ae, U) => {
    ae.scrollLeft = -U;
  } } : e.vertical === true ? { get: (ae) => ae.scrollTop, set: (ae, U) => {
    ae.scrollTop = U;
  } } : { get: (ae) => ae.scrollLeft, set: (ae, U) => {
    ae.scrollLeft = U;
  } });
  function O(ae) {
    const U = m.value, { get: ie, set: we } = G.value;
    let ke = false, Te = ie(U);
    const Me = ae < Te ? -1 : 1;
    return Te += Me * 5, Te < 0 ? (ke = true, Te = 0) : (Me === -1 && Te <= ae || Me === 1 && Te >= ae) && (ke = true, Te = ae), we(U, Te), _(), ke;
  }
  function ne(ae, U) {
    for (const ie in ae) if (ae[ie] !== U[ie]) return false;
    return true;
  }
  function be() {
    let ae = null, U = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
    const ie = y.filter((Me) => {
      var _a3;
      return ((_a3 = Me.routeData) == null ? void 0 : _a3.hasRouterLink.value) === true;
    }), { hash: we, query: ke } = l.$route, Te = Object.keys(ke).length;
    for (const Me of ie) {
      const He = Me.routeData.exact.value === true;
      if (Me.routeData[He === true ? "linkIsExactActive" : "linkIsActive"].value !== true) continue;
      const { hash: Ve, query: ue, matched: ye, href: oe } = Me.routeData.resolvedLink.value, _e2 = Object.keys(ue).length;
      if (He === true) {
        if (Ve !== we || _e2 !== Te || ne(ke, ue) === false) continue;
        ae = Me.name.value;
        break;
      }
      if (Ve !== "" && Ve !== we || _e2 !== 0 && ne(ue, ke) === false) continue;
      const Ce = { matchedLen: ye.length, queryDiff: Te - _e2, hrefLen: oe.length - Ve.length };
      if (Ce.matchedLen > U.matchedLen) {
        ae = Me.name.value, U = Ce;
        continue;
      } else if (Ce.matchedLen !== U.matchedLen) continue;
      if (Ce.queryDiff < U.queryDiff) ae = Me.name.value, U = Ce;
      else if (Ce.queryDiff !== U.queryDiff) continue;
      Ce.hrefLen > U.hrefLen && (ae = Me.name.value, U = Ce);
    }
    if (ae === null && y.some((Me) => Me.routeData === void 0 && Me.name.value === g.value) === true) {
      me = false;
      return;
    }
    W({ name: ae, setCurrent: true });
  }
  function S(ae) {
    if (c(), C.value !== true && h.value !== null && ae.target && typeof ae.target.closest == "function") {
      const U = ae.target.closest(".q-tab");
      U && h.value.contains(U) === true && (C.value = true, w.value === true && Y(U));
    }
  }
  function M() {
    u(() => {
      C.value = false;
    }, 30);
  }
  function D() {
    te.avoidRouteWatcher === false ? s(be) : f();
  }
  function ee() {
    if (N === void 0) {
      const ae = ge(() => l.$route.fullPath, D);
      N = () => {
        ae(), N = void 0;
      };
    }
  }
  function le(ae) {
    y.push(ae), b.value++, X(), ae.routeData === void 0 || l.$route === void 0 ? s(() => {
      if (w.value === true) {
        const U = g.value, ie = U != null && U !== "" ? y.find((we) => we.name.value === U) : null;
        ie && Y(ie.rootRef.value);
      }
    }) : (ee(), ae.routeData.hasRouterLink.value === true && D());
  }
  function P(ae) {
    y.splice(y.indexOf(ae), 1), b.value--, X(), N !== void 0 && ae.routeData !== void 0 && (y.every((U) => U.routeData === void 0) === true && N(), D());
  }
  const te = { currentModel: g, tabProps: B, hasFocus: C, hasActiveTab: L, registerTab: le, unregisterTab: P, verifyRouteModel: D, updateModel: W, onKbdNavigate: R, avoidRouteWatcher: false };
  hn(mm, te);
  function ce() {
    $ !== null && clearTimeout($), A(), N == null ? void 0 : N();
  }
  let de, me;
  return Ke(ce), Vn(() => {
    de = N !== void 0, ce();
  }), xl(() => {
    de === true && (ee(), me = true, D()), X();
  }), () => d("div", { ref: h, class: q.value, role: "tablist", onFocusin: S, onFocusout: M }, [d(Ul, { onResize: re }), d("div", { ref: m, class: E.value, onScroll: _ }, $e(t.default)), d(et, { class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (x.value === true ? "" : " q-tabs__arrow--faded"), name: e.leftIcon || r.iconSet.tabs[e.vertical === true ? "up" : "left"], onMousedownPassive: V, onTouchstartPassive: V, onMouseupPassive: A, onMouseleavePassive: A, onTouchendPassive: A }), d(et, { class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (T.value === true ? "" : " q-tabs__arrow--faded"), name: e.rightIcon || r.iconSet.tabs[e.vertical === true ? "down" : "right"], onMousedownPassive: fe, onTouchstartPassive: fe, onMouseupPassive: A, onMouseleavePassive: A, onTouchendPassive: A })]);
} }), Lp = 0, lh = ["click", "keydown"], rh = { icon: String, label: [Number, String], alert: [Boolean, String], alertIcon: String, name: { type: [Number, String], default: () => `t_${Lp++}` }, noCaps: Boolean, tabindex: [String, Number], disable: Boolean, contentClass: String, ripple: { type: [Boolean, Object], default: true } };
function ah(e, t, n, l) {
  const r = qt(mm, ot);
  if (r === ot) return console.error("QTab/QRouteTab component needs to be child of QTabs"), ot;
  const { proxy: a } = xe(), o = K(null), i = K(null), u = K(null), c = v(() => e.disable === true || e.ripple === false ? false : Object.assign({ keyCodes: [13, 32], early: true }, e.ripple === true ? {} : e.ripple)), s = v(() => r.currentModel.value === e.name), f = v(() => "q-tab relative-position self-stretch flex flex-center text-center" + (s.value === true ? " q-tab--active" + (r.tabProps.value.activeClass ? " " + r.tabProps.value.activeClass : "") + (r.tabProps.value.activeColor ? ` text-${r.tabProps.value.activeColor}` : "") + (r.tabProps.value.activeBgColor ? ` bg-${r.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (e.icon && e.label && r.tabProps.value.inlineLabel === false ? " q-tab--full" : "") + (e.noCaps === true || r.tabProps.value.noCaps === true ? " q-tab--no-caps" : "") + (e.disable === true ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (l !== void 0 ? l.linkClass.value : "")), h = v(() => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + (r.tabProps.value.inlineLabel === true ? "row no-wrap q-tab__content--inline" : "column") + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), m = v(() => e.disable === true || r.hasFocus.value === true || s.value === false && r.hasActiveTab.value === true ? -1 : e.tabindex || 0);
  function g(y, b) {
    var _a3;
    if (b !== true && (y == null ? void 0 : y.qAvoidFocus) !== true && ((_a3 = o.value) == null ? void 0 : _a3.focus()), e.disable === true) {
      (l == null ? void 0 : l.hasRouterLink.value) === true && je(y);
      return;
    }
    if (l === void 0) {
      r.updateModel({ name: e.name }), n("click", y);
      return;
    }
    if (l.hasRouterLink.value === true) {
      const C = ($ = {}) => {
        let F;
        const N = $.to === void 0 || kn($.to, e.to) === true ? r.avoidRouteWatcher = Sa() : null;
        return l.navigateToRouterLink(y, { ...$, returnRouterError: true }).catch((B) => {
          F = B;
        }).then((B) => {
          var _a4;
          if (N === r.avoidRouteWatcher && (r.avoidRouteWatcher = false, F === void 0 && (B === void 0 || ((_a4 = B.message) == null ? void 0 : _a4.startsWith("Avoided redundant navigation")) === true) && r.updateModel({ name: e.name })), $.returnRouterError === true) return F !== void 0 ? Promise.reject(F) : B;
        });
      };
      n("click", y, C), y.defaultPrevented !== true && C();
      return;
    }
    n("click", y);
  }
  function w(y) {
    yn(y, [13, 32]) ? g(y, true) : Yl(y) !== true && y.keyCode >= 35 && y.keyCode <= 40 && y.altKey !== true && y.metaKey !== true && r.onKbdNavigate(y.keyCode, a.$el) === true && je(y), n("keydown", y);
  }
  function x() {
    const y = r.tabProps.value.narrowIndicator, b = [], C = d("div", { ref: u, class: ["q-tab__indicator", r.tabProps.value.indicatorClass] });
    e.icon !== void 0 && b.push(d(et, { class: "q-tab__icon", name: e.icon })), e.label !== void 0 && b.push(d("div", { class: "q-tab__label" }, e.label)), e.alert !== false && b.push(e.alertIcon !== void 0 ? d(et, { class: "q-tab__alert-icon", color: e.alert !== true ? e.alert : void 0, name: e.alertIcon }) : d("div", { class: "q-tab__alert" + (e.alert !== true ? ` text-${e.alert}` : "") })), y === true && b.push(C);
    const $ = [d("div", { class: "q-focus-helper", tabindex: -1, ref: o }), d("div", { class: h.value }, Tt(t.default, b))];
    return y === false && $.push(C), $;
  }
  const T = { name: v(() => e.name), rootRef: i, tabIndicatorRef: u, routeData: l };
  Ke(() => {
    r.unregisterTab(T);
  }), ft(() => {
    r.registerTab(T);
  });
  function p(y, b) {
    const C = { ref: i, class: f.value, tabindex: m.value, role: "tab", "aria-selected": s.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: g, onKeydown: w, ...b };
    return sn(d(y, C, x()), [[ui, c.value]]);
  }
  return { renderTab: p, $tabs: r };
}
var Dr = he({ name: "QTab", props: rh, emits: lh, setup(e, { slots: t, emit: n }) {
  const { renderTab: l } = ah(e, t, n);
  return () => l("div");
} }), Fp = he({ name: "QTabPanels", props: { ...Ls, ...nt }, emits: Fs, setup(e, { slots: t }) {
  const n = xe(), l = lt(e, n.proxy.$q), { updatePanelsList: r, getPanelContent: a, panelDirectives: o } = Os(), i = v(() => "q-tab-panels q-panel-parent" + (l.value === true ? " q-tab-panels--dark q-dark" : ""));
  return () => (r(t), pn("div", { class: i.value }, a(), "pan", e.swipeable, () => o.value));
} }), Ni = he({ name: "QTabPanel", props: Bs, setup(e, { slots: t }) {
  return () => d("div", { class: "q-tab-panel", role: "tabpanel" }, $e(t.default));
} }), sd = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, cd = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, dd = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, Ua = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, Qa = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, so = { date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e), time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e), fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e), timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e), email: (e) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e), hexColor: (e) => sd.test(e), hexaColor: (e) => cd.test(e), hexOrHexaColor: (e) => dd.test(e), rgbColor: (e) => Ua.test(e), rgbaColor: (e) => Qa.test(e), rgbOrRgbaColor: (e) => Ua.test(e) || Qa.test(e), hexOrRgbColor: (e) => sd.test(e) || Ua.test(e), hexaOrRgbaColor: (e) => cd.test(e) || Qa.test(e), anyColor: (e) => dd.test(e) || Ua.test(e) || Qa.test(e) }, Op = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;
function fd({ r: e, g: t, b: n, a: l }) {
  const r = l !== void 0;
  if (e = Math.round(e), t = Math.round(t), n = Math.round(n), e > 255 || t > 255 || n > 255 || r && l > 100) throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");
  return l = r ? (Math.round(255 * l / 100) | 256).toString(16).slice(1) : "", "#" + (n | t << 8 | e << 16 | 1 << 24).toString(16).slice(1) + l;
}
function vd({ r: e, g: t, b: n, a: l }) {
  return `rgb${l !== void 0 ? "a" : ""}(${e},${t},${n}${l !== void 0 ? "," + l / 100 : ""})`;
}
function oh(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  e = e.replace(/^#/, ""), e.length === 3 ? e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] : e.length === 4 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
  const t = parseInt(e, 16);
  return e.length > 6 ? { r: t >> 24 & 255, g: t >> 16 & 255, b: t >> 8 & 255, a: Math.round((t & 255) / 2.55) } : { r: t >> 16, g: t >> 8 & 255, b: t & 255 };
}
function md({ h: e, s: t, v: n, a: l }) {
  let r, a, o;
  t = t / 100, n = n / 100, e = e / 360;
  const i = Math.floor(e * 6), u = e * 6 - i, c = n * (1 - t), s = n * (1 - u * t), f = n * (1 - (1 - u) * t);
  switch (i % 6) {
    case 0:
      r = n, a = f, o = c;
      break;
    case 1:
      r = s, a = n, o = c;
      break;
    case 2:
      r = c, a = n, o = f;
      break;
    case 3:
      r = c, a = s, o = n;
      break;
    case 4:
      r = f, a = c, o = n;
      break;
    case 5:
      r = n, a = c, o = s;
      break;
  }
  return { r: Math.round(r * 255), g: Math.round(a * 255), b: Math.round(o * 255), a: l };
}
function Hi({ r: e, g: t, b: n, a: l }) {
  const r = Math.max(e, t, n), a = Math.min(e, t, n), o = r - a, i = r === 0 ? 0 : o / r, u = r / 255;
  let c;
  switch (r) {
    case a:
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
function ih(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  const t = e.replace(/ /g, ""), n = Op.exec(t);
  if (n === null) return oh(t);
  const l = { r: Math.min(255, parseInt(n[2], 10)), g: Math.min(255, parseInt(n[3], 10)), b: Math.min(255, parseInt(n[4], 10)) };
  if (n[1]) {
    const r = parseFloat(n[5]);
    l.a = Math.min(1, isNaN(r) === true ? 1 : r) * 100;
  }
  return l;
}
function Vp(e) {
  if (typeof e != "string" && (!e || e.r === void 0)) throw new TypeError("Expected a string or a {r, g, b} object as color");
  const t = typeof e == "string" ? ih(e) : e, n = t.r / 255, l = t.g / 255, r = t.b / 255, a = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4), o = l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4), i = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  return 0.2126 * a + 0.7152 * o + 0.0722 * i;
}
var Dp = ["rgb(255,204,204)", "rgb(255,230,204)", "rgb(255,255,204)", "rgb(204,255,204)", "rgb(204,255,230)", "rgb(204,255,255)", "rgb(204,230,255)", "rgb(204,204,255)", "rgb(230,204,255)", "rgb(255,204,255)", "rgb(255,153,153)", "rgb(255,204,153)", "rgb(255,255,153)", "rgb(153,255,153)", "rgb(153,255,204)", "rgb(153,255,255)", "rgb(153,204,255)", "rgb(153,153,255)", "rgb(204,153,255)", "rgb(255,153,255)", "rgb(255,102,102)", "rgb(255,179,102)", "rgb(255,255,102)", "rgb(102,255,102)", "rgb(102,255,179)", "rgb(102,255,255)", "rgb(102,179,255)", "rgb(102,102,255)", "rgb(179,102,255)", "rgb(255,102,255)", "rgb(255,51,51)", "rgb(255,153,51)", "rgb(255,255,51)", "rgb(51,255,51)", "rgb(51,255,153)", "rgb(51,255,255)", "rgb(51,153,255)", "rgb(51,51,255)", "rgb(153,51,255)", "rgb(255,51,255)", "rgb(255,0,0)", "rgb(255,128,0)", "rgb(255,255,0)", "rgb(0,255,0)", "rgb(0,255,128)", "rgb(0,255,255)", "rgb(0,128,255)", "rgb(0,0,255)", "rgb(128,0,255)", "rgb(255,0,255)", "rgb(245,0,0)", "rgb(245,123,0)", "rgb(245,245,0)", "rgb(0,245,0)", "rgb(0,245,123)", "rgb(0,245,245)", "rgb(0,123,245)", "rgb(0,0,245)", "rgb(123,0,245)", "rgb(245,0,245)", "rgb(214,0,0)", "rgb(214,108,0)", "rgb(214,214,0)", "rgb(0,214,0)", "rgb(0,214,108)", "rgb(0,214,214)", "rgb(0,108,214)", "rgb(0,0,214)", "rgb(108,0,214)", "rgb(214,0,214)", "rgb(163,0,0)", "rgb(163,82,0)", "rgb(163,163,0)", "rgb(0,163,0)", "rgb(0,163,82)", "rgb(0,163,163)", "rgb(0,82,163)", "rgb(0,0,163)", "rgb(82,0,163)", "rgb(163,0,163)", "rgb(92,0,0)", "rgb(92,46,0)", "rgb(92,92,0)", "rgb(0,92,0)", "rgb(0,92,46)", "rgb(0,92,92)", "rgb(0,46,92)", "rgb(0,0,92)", "rgb(46,0,92)", "rgb(92,0,92)", "rgb(255,255,255)", "rgb(205,205,205)", "rgb(178,178,178)", "rgb(153,153,153)", "rgb(127,127,127)", "rgb(102,102,102)", "rgb(76,76,76)", "rgb(51,51,51)", "rgb(25,25,25)", "rgb(0,0,0)"], hd = "M5 5 h10 v10 h-10 v-10 z", Ip = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==";
he({ name: "QColor", props: { ...nt, ...wn, modelValue: String, defaultValue: String, defaultView: { type: String, default: "spectrum", validator: (e) => ["spectrum", "tune", "palette"].includes(e) }, formatModel: { type: String, default: "auto", validator: (e) => ["auto", "hex", "rgb", "hexa", "rgba"].includes(e) }, palette: Array, noHeader: Boolean, noHeaderTabs: Boolean, noFooter: Boolean, square: Boolean, flat: Boolean, bordered: Boolean, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), { $q: l } = n, r = lt(e, l), { getCache: a } = La(), o = K(null), i = K(null), u = v(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("hex") !== -1), c = v(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1), s = K(e.formatModel === "auto" ? e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#") ? "hex" : "rgb" : e.formatModel.startsWith("hex") ? "hex" : "rgb"), f = K(e.defaultView), h = K(q(e.modelValue || e.defaultValue)), m = v(() => e.disable !== true && e.readonly !== true), g = v(() => e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#")), w = v(() => u.value !== null ? u.value : g.value), x = v(() => ({ type: "hidden", name: e.name, value: h.value[w.value === true ? "hex" : "rgb"] })), T = Cl(x), p = v(() => c.value !== null ? c.value : h.value.a !== void 0), y = v(() => ({ backgroundColor: h.value.rgb || "#000" })), b = v(() => `q-color-picker__header-content q-color-picker__header-content--${(h.value.a !== void 0 && h.value.a < 65 ? true : Vp(h.value) > 0.4) ? "light" : "dark"}`), C = v(() => ({ background: `hsl(${h.value.h},100%,50%)` })), $ = v(() => ({ top: `${100 - h.value.v}%`, [l.lang.rtl === true ? "right" : "left"]: `${h.value.s}%` })), F = v(() => e.palette !== void 0 && e.palette.length !== 0 ? e.palette : Dp), N = v(() => "q-color-picker" + (e.bordered === true ? " q-color-picker--bordered" : "") + (e.square === true ? " q-color-picker--square no-border-radius" : "") + (e.flat === true ? " q-color-picker--flat no-shadow" : "") + (e.disable === true ? " disabled" : "") + (r.value === true ? " q-color-picker--dark q-dark" : "")), B = v(() => e.disable === true ? { "aria-disabled": "true" } : {}), L = v(() => [[gn, re, void 0, { prevent: true, stop: true, mouse: true }]]);
  ge(() => e.modelValue, (S) => {
    const M = q(S || e.defaultValue);
    M.hex !== h.value.hex && (h.value = M);
  }), ge(() => e.defaultValue, (S) => {
    if (!e.modelValue && S) {
      const M = q(S);
      M.hex !== h.value.hex && (h.value = M);
    }
  });
  function z(S, M) {
    h.value.hex = fd(S), h.value.rgb = vd(S), h.value.r = S.r, h.value.g = S.g, h.value.b = S.b, h.value.a = S.a;
    const D = h.value[w.value === true ? "hex" : "rgb"];
    t("update:modelValue", D), M === true && t("change", D);
  }
  function q(S) {
    const M = c.value !== void 0 ? c.value : e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1;
    if (typeof S != "string" || S.length === 0 || so.anyColor(S.replace(/ /g, "")) !== true) return { h: 0, s: 0, v: 0, r: 0, g: 0, b: 0, a: M === true ? 100 : void 0, hex: void 0, rgb: void 0 };
    const D = ih(S);
    return M === true && D.a === void 0 && (D.a = 100), D.hex = fd(D), D.rgb = vd(D), Object.assign(D, Hi(D));
  }
  function E(S, M, D) {
    const ee = o.value;
    if (ee === null) return;
    const le = ee.clientWidth, P = ee.clientHeight, te = ee.getBoundingClientRect();
    let ce = Math.min(le, Math.max(0, S - te.left));
    l.lang.rtl === true && (ce = le - ce);
    const de = Math.min(P, Math.max(0, M - te.top)), me = Math.round(100 * ce / le), ae = Math.round(100 * Math.max(0, Math.min(1, -(de / P) + 1))), U = md({ h: h.value.h, s: me, v: ae, a: p.value === true ? h.value.a : void 0 });
    h.value.s = me, h.value.v = ae, z(U, D);
  }
  function k(S, M) {
    const D = Math.round(S), ee = md({ h: D, s: h.value.s, v: h.value.v, a: p.value === true ? h.value.a : void 0 });
    h.value.h = D, z(ee, M);
  }
  function j(S) {
    k(S, true);
  }
  function Q(S, M, D, ee, le) {
    if (ee !== void 0 && wt(ee), !/^[0-9]+$/.test(S)) {
      le === true && n.$forceUpdate();
      return;
    }
    const P = Math.floor(Number(S));
    if (P < 0 || P > D) {
      le === true && n.$forceUpdate();
      return;
    }
    const te = { r: M === "r" ? P : h.value.r, g: M === "g" ? P : h.value.g, b: M === "b" ? P : h.value.b, a: p.value === true ? M === "a" ? P : h.value.a : void 0 };
    if (M !== "a") {
      const ce = Hi(te);
      h.value.h = ce.h, h.value.s = ce.s, h.value.v = ce.v;
    }
    if (z(te, le), le !== true && (ee == null ? void 0 : ee.target.selectionEnd) !== void 0) {
      const ce = ee.target.selectionEnd;
      We(() => {
        ee.target.setSelectionRange(ce, ce);
      });
    }
  }
  function W(S, M) {
    let D;
    const ee = S.target.value;
    if (wt(S), s.value === "hex") {
      if (ee.length !== (p.value === true ? 9 : 7) || !/^#[0-9A-Fa-f]+$/.test(ee)) return true;
      D = oh(ee);
    } else {
      let P;
      if (ee.endsWith(")")) if (p.value !== true && ee.startsWith("rgb(")) {
        if (P = ee.substring(4, ee.length - 1).split(",").map((te) => parseInt(te, 10)), P.length !== 3 || !/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(ee)) return true;
      } else if (p.value === true && ee.startsWith("rgba(")) {
        if (P = ee.substring(5, ee.length - 1).split(","), P.length !== 4 || !/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(ee)) return true;
        for (let ce = 0; ce < 3; ce++) {
          const de = parseInt(P[ce], 10);
          if (de < 0 || de > 255) return true;
          P[ce] = de;
        }
        const te = parseFloat(P[3]);
        if (te < 0 || te > 1) return true;
        P[3] = te;
      } else return true;
      else return true;
      if (P[0] < 0 || P[0] > 255 || P[1] < 0 || P[1] > 255 || P[2] < 0 || P[2] > 255 || p.value === true && (P[3] < 0 || P[3] > 1)) return true;
      D = { r: P[0], g: P[1], b: P[2], a: p.value === true ? P[3] * 100 : void 0 };
    }
    const le = Hi(D);
    if (h.value.h = le.h, h.value.s = le.s, h.value.v = le.v, z(D, M), M !== true) {
      const P = S.target.selectionEnd;
      We(() => {
        S.target.setSelectionRange(P, P);
      });
    }
  }
  function X(S) {
    const M = q(S), D = { r: M.r, g: M.g, b: M.b, a: M.a };
    D.a === void 0 && (D.a = h.value.a), h.value.h = M.h, h.value.s = M.s, h.value.v = M.v, z(D, true);
  }
  function re(S) {
    S.isFinal ? E(S.position.left, S.position.top, true) : pe(S);
  }
  const pe = km((S) => {
    E(S.position.left, S.position.top);
  }, 20);
  function Y(S) {
    E(S.pageX - window.pageXOffset, S.pageY - window.pageYOffset, true);
  }
  function _(S) {
    E(S.pageX - window.pageXOffset, S.pageY - window.pageYOffset);
  }
  function H(S) {
    i.value !== null && (i.value.$el.style.opacity = S ? 1 : 0);
  }
  function V(S) {
    s.value = S;
  }
  function fe() {
    const S = [];
    return e.noHeaderTabs !== true && S.push(d(ud, { class: "q-color-picker__header-tabs", modelValue: s.value, dense: true, align: "justify", "onUpdate:modelValue": V }, () => [d(Dr, { label: "HEX" + (p.value === true ? "A" : ""), name: "hex", ripple: false }), d(Dr, { label: "RGB" + (p.value === true ? "A" : ""), name: "rgb", ripple: false })])), S.push(d("div", { class: "q-color-picker__header-banner row flex-center no-wrap" }, [d("input", { class: "fit", value: h.value[s.value], ...m.value !== true ? { readonly: true } : {}, ...a("topIn", { onInput: (M) => {
      H(W(M) === true);
    }, onChange: wt, onBlur: (M) => {
      W(M, true) === true && n.$forceUpdate(), H(false);
    } }) }), d(et, { ref: i, class: "q-color-picker__error-icon absolute no-pointer-events", name: l.iconSet.type.negative })])), d("div", { class: "q-color-picker__header relative-position overflow-hidden" }, [d("div", { class: "q-color-picker__header-bg absolute-full" }), d("div", { class: b.value, style: y.value }, S)]);
  }
  function A() {
    return d(Fp, { modelValue: f.value, animated: true }, () => [d(Ni, { class: "q-color-picker__spectrum-tab overflow-hidden", name: "spectrum" }, O), d(Ni, { class: "q-pa-md q-color-picker__tune-tab", name: "tune" }, ne), d(Ni, { class: "q-color-picker__palette-tab", name: "palette" }, be)]);
  }
  function R(S) {
    f.value = S;
  }
  function G() {
    return d("div", { class: "q-color-picker__footer relative-position overflow-hidden" }, [d(ud, { class: "absolute-full", modelValue: f.value, dense: true, align: "justify", "onUpdate:modelValue": R }, () => [d(Dr, { icon: l.iconSet.colorPicker.spectrum, name: "spectrum", ripple: false }), d(Dr, { icon: l.iconSet.colorPicker.tune, name: "tune", ripple: false }), d(Dr, { icon: l.iconSet.colorPicker.palette, name: "palette", ripple: false })])]);
  }
  function O() {
    const S = { ref: o, class: "q-color-picker__spectrum non-selectable relative-position cursor-pointer" + (m.value !== true ? " readonly" : ""), style: C.value, ...m.value === true ? { onClick: Y, onMousedown: _ } : {} }, M = [d("div", { style: { paddingBottom: "100%" } }), d("div", { class: "q-color-picker__spectrum-white absolute-full" }), d("div", { class: "q-color-picker__spectrum-black absolute-full" }), d("div", { class: "absolute", style: $.value }, [h.value.hex !== void 0 ? d("div", { class: "q-color-picker__spectrum-circle" }) : null])], D = [d(nr, { class: "q-color-picker__hue non-selectable", modelValue: h.value.h, min: 0, max: 360, trackSize: "8px", innerTrackColor: "transparent", selectionColor: "transparent", readonly: m.value !== true, thumbPath: hd, "onUpdate:modelValue": k, onChange: j })];
    return p.value === true && D.push(d(nr, { class: "q-color-picker__alpha non-selectable", modelValue: h.value.a, min: 0, max: 100, trackSize: "8px", trackColor: "white", innerTrackColor: "transparent", selectionColor: "transparent", trackImg: Ip, readonly: m.value !== true, hideSelection: true, thumbPath: hd, ...a("alphaSlide", { "onUpdate:modelValue": (ee) => Q(ee, "a", 100), onChange: (ee) => Q(ee, "a", 100, void 0, true) }) })), [pn("div", S, M, "spec", m.value, () => L.value), d("div", { class: "q-color-picker__sliders" }, D)];
  }
  function ne() {
    return [d("div", { class: "row items-center no-wrap" }, [d("div", "R"), d(nr, { modelValue: h.value.r, min: 0, max: 255, color: "red", dark: r.value, readonly: m.value !== true, ...a("rSlide", { "onUpdate:modelValue": (S) => Q(S, "r", 255), onChange: (S) => Q(S, "r", 255, void 0, true) }) }), d("input", { value: h.value.r, maxlength: 3, readonly: m.value !== true, onChange: wt, ...a("rIn", { onInput: (S) => Q(S.target.value, "r", 255, S), onBlur: (S) => Q(S.target.value, "r", 255, S, true) }) })]), d("div", { class: "row items-center no-wrap" }, [d("div", "G"), d(nr, { modelValue: h.value.g, min: 0, max: 255, color: "green", dark: r.value, readonly: m.value !== true, ...a("gSlide", { "onUpdate:modelValue": (S) => Q(S, "g", 255), onChange: (S) => Q(S, "g", 255, void 0, true) }) }), d("input", { value: h.value.g, maxlength: 3, readonly: m.value !== true, onChange: wt, ...a("gIn", { onInput: (S) => Q(S.target.value, "g", 255, S), onBlur: (S) => Q(S.target.value, "g", 255, S, true) }) })]), d("div", { class: "row items-center no-wrap" }, [d("div", "B"), d(nr, { modelValue: h.value.b, min: 0, max: 255, color: "blue", readonly: m.value !== true, dark: r.value, ...a("bSlide", { "onUpdate:modelValue": (S) => Q(S, "b", 255), onChange: (S) => Q(S, "b", 255, void 0, true) }) }), d("input", { value: h.value.b, maxlength: 3, readonly: m.value !== true, onChange: wt, ...a("bIn", { onInput: (S) => Q(S.target.value, "b", 255, S), onBlur: (S) => Q(S.target.value, "b", 255, S, true) }) })]), p.value === true ? d("div", { class: "row items-center no-wrap" }, [d("div", "A"), d(nr, { modelValue: h.value.a, color: "grey", readonly: m.value !== true, dark: r.value, ...a("aSlide", { "onUpdate:modelValue": (S) => Q(S, "a", 100), onChange: (S) => Q(S, "a", 100, void 0, true) }) }), d("input", { value: h.value.a, maxlength: 3, readonly: m.value !== true, onChange: wt, ...a("aIn", { onInput: (S) => Q(S.target.value, "a", 100, S), onBlur: (S) => Q(S.target.value, "a", 100, S, true) }) })]) : null];
  }
  function be() {
    const S = (M) => d("div", { class: "q-color-picker__cube col-auto", style: { backgroundColor: M }, ...m.value === true ? a("palette#" + M, { onClick: () => {
      X(M);
    } }) : {} });
    return [d("div", { class: "row items-center q-color-picker__palette-rows" + (m.value === true ? " q-color-picker__palette-rows--editable" : "") }, F.value.map(S))];
  }
  return () => {
    const S = [A()];
    return e.name !== void 0 && e.disable !== true && T(S, "push"), e.noHeader !== true && S.unshift(fe()), e.noFooter !== true && S.push(G()), d("div", { class: N.value, ...B.value }, S);
  };
} });
var ml = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
function zp(e, t, n) {
  return Object.prototype.toString.call(e) === "[object Date]" && (n = e.getDate(), t = e.getMonth() + 1, e = e.getFullYear()), Up(Hs(e, t, n));
}
function gd(e, t, n) {
  return sh(jp(e, t, n));
}
function Np(e) {
  return Hp(e) === 0;
}
function co(e, t) {
  return t <= 6 ? 31 : t <= 11 || Np(e) ? 30 : 29;
}
function Hp(e) {
  const t = ml.length;
  let n = ml[0], l, r, a, o, i;
  if (e < n || e >= ml[t - 1]) throw new Error("Invalid Jalaali year " + e);
  for (i = 1; i < t && (l = ml[i], r = l - n, !(e < l)); i += 1) n = l;
  return o = e - n, r - o < 6 && (o = o - r + _t(r + 4, 33) * 33), a = on(on(o + 1, 33) - 1, 4), a === -1 && (a = 4), a;
}
function uh(e, t) {
  const n = ml.length, l = e + 621;
  let r = -14, a = ml[0], o, i, u, c, s;
  if (e < a || e >= ml[n - 1]) throw new Error("Invalid Jalaali year " + e);
  for (s = 1; s < n && (o = ml[s], i = o - a, !(e < o)); s += 1) r = r + _t(i, 33) * 8 + _t(on(i, 33), 4), a = o;
  c = e - a, r = r + _t(c, 33) * 8 + _t(on(c, 33) + 3, 4), on(i, 33) === 4 && i - c === 4 && (r += 1);
  const f = _t(l, 4) - _t((_t(l, 100) + 1) * 3, 4) - 150, h = 20 + r - f;
  return t || (i - c < 6 && (c = c - i + _t(i + 4, 33) * 33), u = on(on(c + 1, 33) - 1, 4), u === -1 && (u = 4)), { leap: u, gy: l, march: h };
}
function jp(e, t, n) {
  const l = uh(e, true);
  return Hs(l.gy, 3, l.march) + (t - 1) * 31 - _t(t, 7) * (t - 7) + n - 1;
}
function Up(e) {
  const t = sh(e).gy;
  let n = t - 621, l, r, a;
  const o = uh(n, false), i = Hs(t, 3, o.march);
  if (a = e - i, a >= 0) {
    if (a <= 185) return r = 1 + _t(a, 31), l = on(a, 31) + 1, { jy: n, jm: r, jd: l };
    a -= 186;
  } else n -= 1, a += 179, o.leap === 1 && (a += 1);
  return r = 7 + _t(a, 30), l = on(a, 30) + 1, { jy: n, jm: r, jd: l };
}
function Hs(e, t, n) {
  let l = _t((e + _t(t - 8, 6) + 100100) * 1461, 4) + _t(153 * on(t + 9, 12) + 2, 5) + n - 34840408;
  return l = l - _t(_t(e + 100100 + _t(t - 8, 6), 100) * 3, 4) + 752, l;
}
function sh(e) {
  let t = 4 * e + 139361631;
  t = t + _t(_t(4 * e + 183187720, 146097) * 3, 4) * 4 - 3908;
  const n = _t(on(t, 1461), 4) * 5 + 308, l = _t(on(n, 153), 5) + 1, r = on(_t(n, 153), 12) + 1;
  return { gy: _t(t, 1461) - 100100 + _t(8 - r, 6), gm: r, gd: l };
}
function _t(e, t) {
  return ~~(e / t);
}
function on(e, t) {
  return e - ~~(e / t) * t;
}
var Qp = ["gregorian", "persian"], Do = { mask: { type: String }, locale: Object, calendar: { type: String, validator: (e) => Qp.includes(e), default: "gregorian" }, landscape: Boolean, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, readonly: Boolean, disable: Boolean }, ch = ["update:modelValue"];
function Un(e) {
  return e.year + "/" + at(e.month) + "/" + at(e.day);
}
function dh(e, t) {
  const n = v(() => e.disable !== true && e.readonly !== true), l = v(() => n.value === true ? 0 : -1), r = v(() => {
    const i = [];
    return e.color !== void 0 && i.push(`bg-${e.color}`), e.textColor !== void 0 && i.push(`text-${e.textColor}`), i.join(" ");
  });
  function a() {
    return e.locale !== void 0 ? { ...t.lang.date, ...e.locale } : t.lang.date;
  }
  function o(i) {
    const u = /* @__PURE__ */ new Date(), c = i === true ? null : 0;
    if (e.calendar === "persian") {
      const s = zp(u);
      return { year: s.jy, month: s.jm, day: s.jd };
    }
    return { year: u.getFullYear(), month: u.getMonth() + 1, day: u.getDate(), hour: c, minute: c, second: c, millisecond: c };
  }
  return { editable: n, tabindex: l, headerClass: r, getLocale: a, getCurrentDate: o };
}
var fh = 864e5, Kp = 36e5, Hu = 6e4, vh = "YYYY-MM-DDTHH:mm:ss.SSSZ", Wp = /\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g, Yp = /(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g, ji = {};
function Xp(e, t) {
  const n = "(" + t.days.join("|") + ")", l = e + n;
  if (ji[l] !== void 0) return ji[l];
  const r = "(" + t.daysShort.join("|") + ")", a = "(" + t.months.join("|") + ")", o = "(" + t.monthsShort.join("|") + ")", i = {};
  let u = 0;
  const c = e.replace(Yp, (f) => {
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
        return i.MMMM = u, a;
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
        return r;
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
  return ji[l] = s, s;
}
function mh(e, t) {
  return e !== void 0 ? e : t !== void 0 ? t.date : Au.date;
}
function bd(e, t = "") {
  const n = e > 0 ? "-" : "+", l = Math.abs(e), r = Math.floor(l / 60), a = l % 60;
  return n + at(r) + t + at(a);
}
function Wr(e, t, n, l, r) {
  const a = { year: null, month: null, day: null, hour: null, minute: null, second: null, millisecond: null, timezoneOffset: null, dateHash: null, timeHash: null };
  if (r !== void 0 && Object.assign(a, r), e == null || e === "" || typeof e != "string") return a;
  t === void 0 && (t = vh);
  const o = mh(n, ai.props), i = o.months, u = o.monthsShort, { regex: c, map: s } = Xp(t, o), f = e.match(c);
  if (f === null) return a;
  let h = "";
  if (s.X !== void 0 || s.x !== void 0) {
    const m = parseInt(f[s.X !== void 0 ? s.X : s.x], 10);
    if (isNaN(m) === true || m < 0) return a;
    const g = new Date(m * (s.X !== void 0 ? 1e3 : 1));
    a.year = g.getFullYear(), a.month = g.getMonth() + 1, a.day = g.getDate(), a.hour = g.getHours(), a.minute = g.getMinutes(), a.second = g.getSeconds(), a.millisecond = g.getMilliseconds();
  } else {
    if (s.YYYY !== void 0) a.year = parseInt(f[s.YYYY], 10);
    else if (s.YY !== void 0) {
      const m = parseInt(f[s.YY], 10);
      a.year = m < 0 ? m : 2e3 + m;
    }
    if (s.M !== void 0) {
      if (a.month = parseInt(f[s.M], 10), a.month < 1 || a.month > 12) return a;
    } else s.MMM !== void 0 ? a.month = u.indexOf(f[s.MMM]) + 1 : s.MMMM !== void 0 && (a.month = i.indexOf(f[s.MMMM]) + 1);
    if (s.D !== void 0) {
      if (a.day = parseInt(f[s.D], 10), a.year === null || a.month === null || a.day < 1) return a;
      const m = l !== "persian" ? new Date(a.year, a.month, 0).getDate() : co(a.year, a.month);
      if (a.day > m) return a;
    }
    s.H !== void 0 ? a.hour = parseInt(f[s.H], 10) % 24 : s.h !== void 0 && (a.hour = parseInt(f[s.h], 10) % 12, (s.A && f[s.A] === "PM" || s.a && f[s.a] === "pm" || s.aa && f[s.aa] === "p.m.") && (a.hour += 12), a.hour = a.hour % 24), s.m !== void 0 && (a.minute = parseInt(f[s.m], 10) % 60), s.s !== void 0 && (a.second = parseInt(f[s.s], 10) % 60), s.S !== void 0 && (a.millisecond = parseInt(f[s.S], 10) * 10 ** (3 - f[s.S].length)), (s.Z !== void 0 || s.ZZ !== void 0) && (h = s.Z !== void 0 ? f[s.Z].replace(":", "") : f[s.ZZ], a.timezoneOffset = (h[0] === "+" ? -1 : 1) * (60 * h.slice(1, 3) + 1 * h.slice(3, 5)));
  }
  return a.dateHash = at(a.year, 6) + "/" + at(a.month) + "/" + at(a.day), a.timeHash = at(a.hour) + ":" + at(a.minute) + ":" + at(a.second) + h, a;
}
function Ui(e) {
  const t = new Date(e.getFullYear(), e.getMonth(), e.getDate());
  t.setDate(t.getDate() - (t.getDay() + 6) % 7 + 3);
  const n = new Date(t.getFullYear(), 0, 4);
  n.setDate(n.getDate() - (n.getDay() + 6) % 7 + 3);
  const l = t.getTimezoneOffset() - n.getTimezoneOffset();
  t.setHours(t.getHours() - l);
  const r = (t - n) / (fh * 7);
  return 1 + Math.floor(r);
}
function Qn(e, t, n) {
  const l = new Date(e), r = `set${n === true ? "UTC" : ""}`;
  switch (t) {
    case "year":
    case "years":
      l[`${r}Month`](0);
    case "month":
    case "months":
      l[`${r}Date`](1);
    case "day":
    case "days":
    case "date":
      l[`${r}Hours`](0);
    case "hour":
    case "hours":
      l[`${r}Minutes`](0);
    case "minute":
    case "minutes":
      l[`${r}Seconds`](0);
    case "second":
    case "seconds":
      l[`${r}Milliseconds`](0);
  }
  return l;
}
function Ka(e, t, n) {
  return (e.getTime() - e.getTimezoneOffset() * Hu - (t.getTime() - t.getTimezoneOffset() * Hu)) / n;
}
function hh(e, t, n = "days") {
  const l = new Date(e), r = new Date(t);
  switch (n) {
    case "years":
    case "year":
      return l.getFullYear() - r.getFullYear();
    case "months":
    case "month":
      return (l.getFullYear() - r.getFullYear()) * 12 + l.getMonth() - r.getMonth();
    case "days":
    case "day":
    case "date":
      return Ka(Qn(l, "day"), Qn(r, "day"), fh);
    case "hours":
    case "hour":
      return Ka(Qn(l, "hour"), Qn(r, "hour"), Kp);
    case "minutes":
    case "minute":
      return Ka(Qn(l, "minute"), Qn(r, "minute"), Hu);
    case "seconds":
    case "second":
      return Ka(Qn(l, "second"), Qn(r, "second"), 1e3);
  }
}
function Qi(e) {
  return hh(e, Qn(e, "year"), "days") + 1;
}
function lr(e) {
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
var yd = { YY(e, t, n) {
  const l = this.YYYY(e, t, n) % 100;
  return l >= 0 ? at(l) : "-" + at(Math.abs(l));
}, YYYY(e, t, n) {
  return n ?? e.getFullYear();
}, M(e) {
  return e.getMonth() + 1;
}, Mo(e) {
  return lr(e.getMonth() + 1);
}, MM(e) {
  return at(e.getMonth() + 1);
}, MMM(e, t) {
  return t.monthsShort[e.getMonth()];
}, MMMM(e, t) {
  return t.months[e.getMonth()];
}, Q(e) {
  return Math.ceil((e.getMonth() + 1) / 3);
}, Qo(e) {
  return lr(this.Q(e));
}, D(e) {
  return e.getDate();
}, Do(e) {
  return lr(e.getDate());
}, DD(e) {
  return at(e.getDate());
}, DDD(e) {
  return Qi(e);
}, DDDo(e) {
  return lr(Qi(e));
}, DDDD(e) {
  return at(Qi(e), 3);
}, d(e) {
  return e.getDay();
}, do(e) {
  return lr(e.getDay());
}, dd(e, t) {
  return t.days[e.getDay()].slice(0, 2);
}, ddd(e, t) {
  return t.daysShort[e.getDay()];
}, dddd(e, t) {
  return t.days[e.getDay()];
}, E(e) {
  return e.getDay() || 7;
}, w(e) {
  return Ui(e);
}, wo(e) {
  return lr(Ui(e));
}, ww(e) {
  return at(Ui(e));
}, H(e) {
  return e.getHours();
}, HH(e) {
  return at(e.getHours());
}, h(e) {
  const t = e.getHours();
  return t === 0 ? 12 : t > 12 ? t % 12 : t;
}, hh(e) {
  return at(this.h(e));
}, m(e) {
  return e.getMinutes();
}, mm(e) {
  return at(e.getMinutes());
}, s(e) {
  return e.getSeconds();
}, ss(e) {
  return at(e.getSeconds());
}, S(e) {
  return Math.floor(e.getMilliseconds() / 100);
}, SS(e) {
  return at(Math.floor(e.getMilliseconds() / 10));
}, SSS(e) {
  return at(e.getMilliseconds(), 3);
}, A(e) {
  return e.getHours() < 12 ? "AM" : "PM";
}, a(e) {
  return e.getHours() < 12 ? "am" : "pm";
}, aa(e) {
  return e.getHours() < 12 ? "a.m." : "p.m.";
}, Z(e, t, n, l) {
  const r = l ?? e.getTimezoneOffset();
  return bd(r, ":");
}, ZZ(e, t, n, l) {
  const r = l ?? e.getTimezoneOffset();
  return bd(r);
}, X(e) {
  return Math.floor(e.getTime() / 1e3);
}, x(e) {
  return e.getTime();
} };
function gh(e, t, n, l, r) {
  if (e !== 0 && !e || e === 1 / 0 || e === -1 / 0) return;
  const a = new Date(e);
  if (isNaN(a)) return;
  t === void 0 && (t = vh);
  const o = mh(n, ai.props);
  return t.replace(Wp, (i, u) => i in yd ? yd[i](a, o, l, r) : u === void 0 ? i : u.split("\\]").join("]"));
}
var Nn = 20, Gp = ["Calendar", "Years", "Months"], pd = (e) => Gp.includes(e), Ki = (e) => /^-?[\d]+\/[0-1]\d$/.test(e), rr = " \u2014 ";
function rl(e) {
  return e.year + "/" + at(e.month);
}
he({ name: "QDate", props: { ...Do, ...wn, ...nt, modelValue: { required: true, validator: (e) => typeof e == "string" || Array.isArray(e) === true || Object(e) === e || e === null }, multiple: Boolean, range: Boolean, title: String, subtitle: String, mask: { ...Do.mask, default: "YYYY/MM/DD" }, defaultYearMonth: { type: String, validator: Ki }, yearsInMonthView: Boolean, events: [Array, Function], eventColor: [String, Function], emitImmediately: Boolean, options: [Array, Function], navigationMinYearMonth: { type: String, validator: Ki }, navigationMaxYearMonth: { type: String, validator: Ki }, noUnset: Boolean, firstDayOfWeek: [String, Number], todayBtn: Boolean, minimal: Boolean, defaultView: { type: String, default: "Calendar", validator: pd } }, emits: [...ch, "rangeStart", "rangeEnd", "navigation"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), { $q: r } = l, a = lt(e, r), { getCache: o } = La(), { tabindex: i, headerClass: u, getLocale: c, getCurrentDate: s } = dh(e, r);
  let f;
  const h = Ba(e), m = Cl(h), g = K(null), w = K(He()), x = K(c()), T = v(() => He()), p = v(() => c()), y = v(() => s()), b = K(ue(w.value, x.value)), C = K(e.defaultView), $ = v(() => r.lang.rtl === true ? "right" : "left"), F = K($.value), N = K($.value), B = b.value.year, L = K(B - B % Nn - (B < 0 ? Nn : 0)), z = K(null), q = v(() => {
    const I = e.landscape === true ? "landscape" : "portrait";
    return `q-date q-date--${I} q-date--${I}-${e.minimal === true ? "minimal" : "standard"}` + (a.value === true ? " q-date--dark q-dark" : "") + (e.bordered === true ? " q-date--bordered" : "") + (e.square === true ? " q-date--square no-border-radius" : "") + (e.flat === true ? " q-date--flat no-shadow" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-date--readonly" : "");
  }), E = v(() => e.color || "primary"), k = v(() => e.textColor || "white"), j = v(() => e.emitImmediately === true && e.multiple !== true && e.range !== true), Q = v(() => Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue !== null && e.modelValue !== void 0 ? [e.modelValue] : []), W = v(() => Q.value.filter((I) => typeof I == "string").map((I) => Ve(I, w.value, x.value)).filter((I) => I.dateHash !== null && I.day !== null && I.month !== null && I.year !== null)), X = v(() => {
    const I = (Z) => Ve(Z, w.value, x.value);
    return Q.value.filter((Z) => $t(Z) === true && Z.from !== void 0 && Z.to !== void 0).map((Z) => ({ from: I(Z.from), to: I(Z.to) })).filter((Z) => Z.from.dateHash !== null && Z.to.dateHash !== null && Z.from.dateHash < Z.to.dateHash);
  }), re = v(() => e.calendar !== "persian" ? (I) => new Date(I.year, I.month - 1, I.day) : (I) => {
    const Z = gd(I.year, I.month, I.day);
    return new Date(Z.gy, Z.gm - 1, Z.gd);
  }), pe = v(() => e.calendar === "persian" ? Un : (I, Z, ve) => gh(new Date(I.year, I.month - 1, I.day, I.hour, I.minute, I.second, I.millisecond), Z === void 0 ? w.value : Z, ve === void 0 ? x.value : ve, I.year, I.timezoneOffset)), Y = v(() => W.value.length + X.value.reduce((I, Z) => I + 1 + hh(re.value(Z.to), re.value(Z.from)), 0)), _ = v(() => {
    if (e.title !== void 0 && e.title !== null && e.title.length !== 0) return e.title;
    if (z.value !== null) {
      const ve = z.value.init, qe = re.value(ve);
      return x.value.daysShort[qe.getDay()] + ", " + x.value.monthsShort[ve.month - 1] + " " + ve.day + rr + "?";
    }
    if (Y.value === 0) return rr;
    if (Y.value > 1) return `${Y.value} ${x.value.pluralDay}`;
    const I = W.value[0], Z = re.value(I);
    return isNaN(Z.valueOf()) === true ? rr : x.value.headerTitle !== void 0 ? x.value.headerTitle(Z, I) : x.value.daysShort[Z.getDay()] + ", " + x.value.monthsShort[I.month - 1] + " " + I.day;
  }), H = v(() => W.value.concat(X.value.map((Z) => Z.from)).sort((Z, ve) => Z.year - ve.year || Z.month - ve.month)[0]), V = v(() => W.value.concat(X.value.map((Z) => Z.to)).sort((Z, ve) => ve.year - Z.year || ve.month - Z.month)[0]), fe = v(() => {
    if (e.subtitle !== void 0 && e.subtitle !== null && e.subtitle.length !== 0) return e.subtitle;
    if (Y.value === 0) return rr;
    if (Y.value > 1) {
      const I = H.value, Z = V.value, ve = x.value.monthsShort;
      return ve[I.month - 1] + (I.year !== Z.year ? " " + I.year + rr + ve[Z.month - 1] + " " : I.month !== Z.month ? rr + ve[Z.month - 1] : "") + " " + Z.year;
    }
    return W.value[0].year;
  }), A = v(() => {
    const I = [r.iconSet.datetime.arrowLeft, r.iconSet.datetime.arrowRight];
    return r.lang.rtl === true ? I.reverse() : I;
  }), R = v(() => e.firstDayOfWeek !== void 0 ? Number(e.firstDayOfWeek) : x.value.firstDayOfWeek), G = v(() => {
    const I = x.value.daysShort, Z = R.value;
    return Z > 0 ? I.slice(Z, 7).concat(I.slice(0, Z)) : I;
  }), O = v(() => {
    const I = b.value;
    return e.calendar !== "persian" ? new Date(I.year, I.month, 0).getDate() : co(I.year, I.month);
  }), ne = v(() => typeof e.eventColor == "function" ? e.eventColor : () => e.eventColor), be = v(() => {
    if (e.navigationMinYearMonth === void 0) return null;
    const I = e.navigationMinYearMonth.split("/");
    return { year: parseInt(I[0], 10), month: parseInt(I[1], 10) };
  }), S = v(() => {
    if (e.navigationMaxYearMonth === void 0) return null;
    const I = e.navigationMaxYearMonth.split("/");
    return { year: parseInt(I[0], 10), month: parseInt(I[1], 10) };
  }), M = v(() => {
    const I = { month: { prev: true, next: true }, year: { prev: true, next: true } };
    return be.value !== null && be.value.year >= b.value.year && (I.year.prev = false, be.value.year === b.value.year && be.value.month >= b.value.month && (I.month.prev = false)), S.value !== null && S.value.year <= b.value.year && (I.year.next = false, S.value.year === b.value.year && S.value.month <= b.value.month && (I.month.next = false)), I;
  }), D = v(() => {
    const I = {};
    return W.value.forEach((Z) => {
      const ve = rl(Z);
      I[ve] === void 0 && (I[ve] = []), I[ve].push(Z.day);
    }), I;
  }), ee = v(() => {
    const I = {};
    return X.value.forEach((Z) => {
      const ve = rl(Z.from), qe = rl(Z.to);
      if (I[ve] === void 0 && (I[ve] = []), I[ve].push({ from: Z.from.day, to: ve === qe ? Z.to.day : void 0, range: Z }), ve < qe) {
        let Ee;
        const { year: Ge, month: Be } = Z.from, ze = Be < 12 ? { year: Ge, month: Be + 1 } : { year: Ge + 1, month: 1 };
        for (; (Ee = rl(ze)) <= qe; ) I[Ee] === void 0 && (I[Ee] = []), I[Ee].push({ from: void 0, to: Ee === qe ? Z.to.day : void 0, range: Z }), ze.month++, ze.month > 12 && (ze.year++, ze.month = 1);
      }
    }), I;
  }), le = v(() => {
    if (z.value === null) return;
    const { init: I, initHash: Z, final: ve, finalHash: qe } = z.value, [Ee, Ge] = Z <= qe ? [I, ve] : [ve, I], Be = rl(Ee), ze = rl(Ge);
    if (Be !== P.value && ze !== P.value) return;
    const rt = {};
    return Be === P.value ? (rt.from = Ee.day, rt.includeFrom = true) : rt.from = 1, ze === P.value ? (rt.to = Ge.day, rt.includeTo = true) : rt.to = O.value, rt;
  }), P = v(() => rl(b.value)), te = v(() => {
    const I = {};
    if (e.options === void 0) {
      for (let ve = 1; ve <= O.value; ve++) I[ve] = true;
      return I;
    }
    const Z = typeof e.options == "function" ? e.options : (ve) => e.options.includes(ve);
    for (let ve = 1; ve <= O.value; ve++) {
      const qe = P.value + "/" + at(ve);
      I[ve] = Z(qe);
    }
    return I;
  }), ce = v(() => {
    const I = {};
    if (e.events === void 0) for (let Z = 1; Z <= O.value; Z++) I[Z] = false;
    else {
      const Z = typeof e.events == "function" ? e.events : (ve) => e.events.includes(ve);
      for (let ve = 1; ve <= O.value; ve++) {
        const qe = P.value + "/" + at(ve);
        I[ve] = Z(qe) === true && ne.value(qe);
      }
    }
    return I;
  }), de = v(() => {
    let I, Z;
    const { year: ve, month: qe } = b.value;
    if (e.calendar !== "persian") I = new Date(ve, qe - 1, 1), Z = new Date(ve, qe - 1, 0).getDate();
    else {
      const Ee = gd(ve, qe, 1);
      I = new Date(Ee.gy, Ee.gm - 1, Ee.gd);
      let Ge = qe - 1, Be = ve;
      Ge === 0 && (Ge = 12, Be--), Z = co(Be, Ge);
    }
    return { days: I.getDay() - R.value - 1, endDay: Z };
  }), me = v(() => {
    const I = [], { days: Z, endDay: ve } = de.value, qe = Z < 0 ? Z + 7 : Z;
    if (qe < 6) for (let Be = ve - qe; Be <= ve; Be++) I.push({ i: Be, fill: true });
    const Ee = I.length;
    for (let Be = 1; Be <= O.value; Be++) {
      const ze = { i: Be, event: ce.value[Be], classes: [] };
      te.value[Be] === true && (ze.in = true, ze.flat = true), I.push(ze);
    }
    if (D.value[P.value] !== void 0 && D.value[P.value].forEach((Be) => {
      const ze = Ee + Be - 1;
      Object.assign(I[ze], { selected: true, unelevated: true, flat: false, color: E.value, textColor: k.value });
    }), ee.value[P.value] !== void 0 && ee.value[P.value].forEach((Be) => {
      if (Be.from !== void 0) {
        const ze = Ee + Be.from - 1, rt = Ee + (Be.to || O.value) - 1;
        for (let cn = ze; cn <= rt; cn++) Object.assign(I[cn], { range: Be.range, unelevated: true, color: E.value, textColor: k.value });
        Object.assign(I[ze], { rangeFrom: true, flat: false }), Be.to !== void 0 && Object.assign(I[rt], { rangeTo: true, flat: false });
      } else if (Be.to !== void 0) {
        const ze = Ee + Be.to - 1;
        for (let rt = Ee; rt <= ze; rt++) Object.assign(I[rt], { range: Be.range, unelevated: true, color: E.value, textColor: k.value });
        Object.assign(I[ze], { flat: false, rangeTo: true });
      } else {
        const ze = Ee + O.value - 1;
        for (let rt = Ee; rt <= ze; rt++) Object.assign(I[rt], { range: Be.range, unelevated: true, color: E.value, textColor: k.value });
      }
    }), le.value !== void 0) {
      const Be = Ee + le.value.from - 1, ze = Ee + le.value.to - 1;
      for (let rt = Be; rt <= ze; rt++) I[rt].color = E.value, I[rt].editRange = true;
      le.value.includeFrom === true && (I[Be].editRangeFrom = true), le.value.includeTo === true && (I[ze].editRangeTo = true);
    }
    b.value.year === y.value.year && b.value.month === y.value.month && (I[Ee + y.value.day - 1].today = true);
    const Ge = I.length % 7;
    if (Ge > 0) {
      const Be = 7 - Ge;
      for (let ze = 1; ze <= Be; ze++) I.push({ i: ze, fill: true });
    }
    return I.forEach((Be) => {
      let ze = "q-date__calendar-item ";
      Be.fill === true ? ze += "q-date__calendar-item--fill" : (ze += `q-date__calendar-item--${Be.in === true ? "in" : "out"}`, Be.range !== void 0 && (ze += ` q-date__range${Be.rangeTo === true ? "-to" : Be.rangeFrom === true ? "-from" : ""}`), Be.editRange === true && (ze += ` q-date__edit-range${Be.editRangeFrom === true ? "-from" : ""}${Be.editRangeTo === true ? "-to" : ""}`), (Be.range !== void 0 || Be.editRange === true) && (ze += ` text-${Be.color}`)), Be.classes = ze;
    }), I;
  }), ae = v(() => e.disable === true ? { "aria-disabled": "true" } : {});
  ge(() => e.modelValue, (I) => {
    if (f === JSON.stringify(I)) f = 0;
    else {
      const Z = ue(w.value, x.value);
      it(Z.year, Z.month, Z);
    }
  }), ge(C, () => {
    g.value !== null && l.$el.contains(document.activeElement) === true && g.value.focus();
  }), ge(() => b.value.year + "|" + b.value.month, () => {
    n("navigation", { year: b.value.year, month: b.value.month });
  }), ge(T, (I) => {
    Se(I, x.value, "mask"), w.value = I;
  }), ge(p, (I) => {
    Se(w.value, I, "locale"), x.value = I;
  });
  function U(I) {
    f = JSON.stringify(I);
  }
  function ie() {
    const { year: I, month: Z, day: ve } = y.value, qe = { ...b.value, year: I, month: Z, day: ve }, Ee = D.value[rl(qe)];
    (Ee === void 0 || Ee.includes(qe.day) === false) && In(qe), Te(qe.year, qe.month);
  }
  function we(I) {
    pd(I) === true && (C.value = I);
  }
  function ke(I, Z) {
    ["month", "year"].includes(I) && (I === "month" ? oe : _e2)(Z === true ? -1 : 1);
  }
  function Te(I, Z) {
    C.value = "Calendar", it(I, Z);
  }
  function Me(I, Z) {
    if (e.range === false || !I) {
      z.value = null;
      return;
    }
    const ve = Object.assign({ ...b.value }, I), qe = Z !== void 0 ? Object.assign({ ...b.value }, Z) : ve;
    z.value = { init: ve, initHash: Un(ve), final: qe, finalHash: Un(qe) }, Te(ve.year, ve.month);
  }
  function He() {
    return e.calendar === "persian" ? "YYYY/MM/DD" : e.mask;
  }
  function Ve(I, Z, ve) {
    return Wr(I, Z, ve, e.calendar, { hour: 0, minute: 0, second: 0, millisecond: 0 });
  }
  function ue(I, Z) {
    const ve = Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue ? [e.modelValue] : [];
    if (ve.length === 0) return ye();
    const qe = ve[ve.length - 1], Ee = Ve(qe.from !== void 0 ? qe.from : qe, I, Z);
    return Ee.dateHash === null ? ye() : Ee;
  }
  function ye() {
    let I, Z;
    if (e.defaultYearMonth !== void 0) {
      const ve = e.defaultYearMonth.split("/");
      I = parseInt(ve[0], 10), Z = parseInt(ve[1], 10);
    } else {
      const ve = y.value !== void 0 ? y.value : s();
      I = ve.year, Z = ve.month;
    }
    return { year: I, month: Z, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0, dateHash: I + "/" + at(Z) + "/01" };
  }
  function oe(I) {
    let Z = b.value.year, ve = Number(b.value.month) + I;
    ve === 13 ? (ve = 1, Z++) : ve === 0 && (ve = 12, Z--), it(Z, ve), j.value === true && jt("month");
  }
  function _e2(I) {
    const Z = Number(b.value.year) + I;
    it(Z, b.value.month), j.value === true && jt("year");
  }
  function Ce(I) {
    it(I, b.value.month), C.value = e.defaultView === "Years" ? "Months" : "Calendar", j.value === true && jt("year");
  }
  function Oe(I) {
    it(b.value.year, I), C.value = "Calendar", j.value === true && jt("month");
  }
  function Re(I, Z) {
    var _a3;
    (((_a3 = D.value[Z]) == null ? void 0 : _a3.includes(I.day)) === true ? se : In)(I);
  }
  function Ye(I) {
    return { year: I.year, month: I.month, day: I.day };
  }
  function it(I, Z, ve) {
    if (be.value !== null && I <= be.value.year && ((Z < be.value.month || I < be.value.year) && (Z = be.value.month), I = be.value.year), S.value !== null && I >= S.value.year && ((Z > S.value.month || I > S.value.year) && (Z = S.value.month), I = S.value.year), ve !== void 0) {
      const { hour: Ee, minute: Ge, second: Be, millisecond: ze, timezoneOffset: rt, timeHash: cn } = ve;
      Object.assign(b.value, { hour: Ee, minute: Ge, second: Be, millisecond: ze, timezoneOffset: rt, timeHash: cn });
    }
    const qe = I + "/" + at(Z) + "/01";
    qe !== b.value.dateHash && (F.value = b.value.dateHash < qe == (r.lang.rtl !== true) ? "left" : "right", I !== b.value.year && (N.value = F.value), We(() => {
      L.value = I - I % Nn - (I < 0 ? Nn : 0), Object.assign(b.value, { year: I, month: Z, day: 1, dateHash: qe });
    }));
  }
  function Ct(I, Z, ve) {
    const qe = I !== null && I.length === 1 && e.multiple === false ? I[0] : I, { reason: Ee, details: Ge } = nl(Z, ve);
    U(qe), n("update:modelValue", qe, Ee, Ge);
  }
  function jt(I) {
    const Z = W.value[0] !== void 0 && W.value[0].dateHash !== null ? { ...W.value[0] } : { ...b.value };
    We(() => {
      Z.year = b.value.year, Z.month = b.value.month;
      const ve = e.calendar !== "persian" ? new Date(Z.year, Z.month, 0).getDate() : co(Z.year, Z.month);
      Z.day = Math.min(Math.max(1, Z.day), ve);
      const qe = ln(Z), { details: Ee } = nl("", Z);
      U(qe), n("update:modelValue", qe, I, Ee);
    });
  }
  function nl(I, Z) {
    return Z.from !== void 0 ? { reason: `${I}-range`, details: { ...Ye(Z.target), from: Ye(Z.from), to: Ye(Z.to) } } : { reason: `${I}-day`, details: Ye(Z) };
  }
  function ln(I, Z, ve) {
    return I.from !== void 0 ? { from: pe.value(I.from, Z, ve), to: pe.value(I.to, Z, ve) } : pe.value(I, Z, ve);
  }
  function In(I) {
    let Z;
    if (e.multiple === true) if (I.from !== void 0) {
      const ve = Un(I.from), qe = Un(I.to), Ee = W.value.filter((Be) => Be.dateHash < ve || Be.dateHash > qe), Ge = X.value.filter(({ from: Be, to: ze }) => ze.dateHash < ve || Be.dateHash > qe);
      Z = Ee.concat(Ge).concat(I).map((Be) => ln(Be));
    } else {
      const ve = Q.value.slice();
      ve.push(ln(I)), Z = ve;
    }
    else Z = ln(I);
    Ct(Z, "add", I);
  }
  function se(I) {
    if (e.noUnset === true) return;
    let Z = null;
    if (e.multiple === true && Array.isArray(e.modelValue) === true) {
      const ve = ln(I);
      I.from !== void 0 ? Z = e.modelValue.filter((qe) => qe.from !== void 0 ? qe.from !== ve.from && qe.to !== ve.to : true) : Z = e.modelValue.filter((qe) => qe !== ve), Z.length === 0 && (Z = null);
    }
    Ct(Z, "remove", I);
  }
  function Se(I, Z, ve) {
    const qe = W.value.concat(X.value).map((Ge) => ln(Ge, I, Z)).filter((Ge) => Ge.from !== void 0 ? Ge.from.dateHash !== null && Ge.to.dateHash !== null : Ge.dateHash !== null), Ee = (e.multiple === true ? qe : qe[0]) || null;
    U(Ee), n("update:modelValue", Ee, ve);
  }
  function Fe() {
    if (e.minimal !== true) return d("div", { class: "q-date__header " + u.value }, [d("div", { class: "relative-position" }, [d(Ft, { name: "q-transition--fade" }, () => d("div", { key: "h-yr-" + fe.value, class: "q-date__header-subtitle q-date__header-link " + (C.value === "Years" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: i.value, ...o("vY", { onClick() {
      C.value = "Years";
    }, onKeyup(I) {
      I.keyCode === 13 && (C.value = "Years");
    } }) }, [fe.value]))]), d("div", { class: "q-date__header-title relative-position flex no-wrap" }, [d("div", { class: "relative-position col" }, [d(Ft, { name: "q-transition--fade" }, () => d("div", { key: "h-sub" + _.value, class: "q-date__header-title-label q-date__header-link " + (C.value === "Calendar" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: i.value, ...o("vC", { onClick() {
      C.value = "Calendar";
    }, onKeyup(I) {
      I.keyCode === 13 && (C.value = "Calendar");
    } }) }, [_.value]))]), e.todayBtn === true ? d(Ze, { class: "q-date__header-today self-start", icon: r.iconSet.datetime.today, ariaLabel: r.lang.date.today, flat: true, size: "sm", round: true, tabindex: i.value, onClick: ie }) : null])]);
  }
  function Le({ label: I, type: Z, key: ve, dir: qe, goTo: Ee, boundaries: Ge, cls: Be }) {
    return [d("div", { class: "row items-center q-date__arrow" }, [d(Ze, { round: true, dense: true, size: "sm", flat: true, icon: A.value[0], ariaLabel: Z === "Years" ? r.lang.date.prevYear : r.lang.date.prevMonth, tabindex: i.value, disable: Ge.prev === false, ...o("go-#" + Z, { onClick() {
      Ee(-1);
    } }) })]), d("div", { class: "relative-position overflow-hidden flex flex-center" + Be }, [d(Ft, { name: "q-transition--jump-" + qe }, () => d("div", { key: ve }, [d(Ze, { flat: true, dense: true, noCaps: true, label: I, tabindex: i.value, ...o("view#" + Z, { onClick: () => {
      C.value = Z;
    } }) })]))]), d("div", { class: "row items-center q-date__arrow" }, [d(Ze, { round: true, dense: true, size: "sm", flat: true, icon: A.value[1], ariaLabel: Z === "Years" ? r.lang.date.nextYear : r.lang.date.nextMonth, tabindex: i.value, disable: Ge.next === false, ...o("go+#" + Z, { onClick() {
      Ee(1);
    } }) })])];
  }
  const Ue = { Calendar: () => [d("div", { key: "calendar-view", class: "q-date__view q-date__calendar" }, [d("div", { class: "q-date__navigation row items-center no-wrap" }, Le({ label: x.value.months[b.value.month - 1], type: "Months", key: b.value.month, dir: F.value, goTo: oe, boundaries: M.value.month, cls: " col" }).concat(Le({ label: b.value.year, type: "Years", key: b.value.year, dir: N.value, goTo: _e2, boundaries: M.value.year, cls: "" }))), d("div", { class: "q-date__calendar-weekdays row items-center no-wrap" }, G.value.map((I) => d("div", { class: "q-date__calendar-item" }, [d("div", I)]))), d("div", { class: "q-date__calendar-days-container relative-position overflow-hidden" }, [d(Ft, { name: "q-transition--slide-" + F.value }, () => d("div", { key: P.value, class: "q-date__calendar-days fit" }, me.value.map((I) => d("div", { class: I.classes }, [I.in === true ? d(Ze, { class: I.today === true ? "q-date__today" : "", dense: true, flat: I.flat, unelevated: I.unelevated, color: I.color, textColor: I.textColor, label: I.i, tabindex: i.value, ...o("day#" + I.i, { onClick: () => {
    yt(I.i);
  }, onMouseover: () => {
    ht(I.i);
  } }) }, I.event !== false ? () => d("div", { class: "q-date__event bg-" + I.event }) : null) : d("div", "" + I.i)]))))])])], Months() {
    const I = b.value.year === y.value.year, Z = (qe) => be.value !== null && b.value.year === be.value.year && be.value.month > qe || S.value !== null && b.value.year === S.value.year && S.value.month < qe, ve = x.value.monthsShort.map((qe, Ee) => {
      const Ge = b.value.month === Ee + 1;
      return d("div", { class: "q-date__months-item flex flex-center" }, [d(Ze, { class: I === true && y.value.month === Ee + 1 ? "q-date__today" : null, flat: Ge !== true, label: qe, unelevated: Ge, color: Ge === true ? E.value : null, textColor: Ge === true ? k.value : null, tabindex: i.value, disable: Z(Ee + 1), ...o("month#" + Ee, { onClick: () => {
        Oe(Ee + 1);
      } }) })]);
    });
    return e.yearsInMonthView === true && ve.unshift(d("div", { class: "row no-wrap full-width" }, [Le({ label: b.value.year, type: "Years", key: b.value.year, dir: N.value, goTo: _e2, boundaries: M.value.year, cls: " col" })])), d("div", { key: "months-view", class: "q-date__view q-date__months flex flex-center" }, ve);
  }, Years() {
    const I = L.value, Z = I + Nn, ve = [], qe = (Ee) => be.value !== null && be.value.year > Ee || S.value !== null && S.value.year < Ee;
    for (let Ee = I; Ee <= Z; Ee++) {
      const Ge = b.value.year === Ee;
      ve.push(d("div", { class: "q-date__years-item flex flex-center" }, [d(Ze, { key: "yr" + Ee, class: y.value.year === Ee ? "q-date__today" : null, flat: !Ge, label: Ee, dense: true, unelevated: Ge, color: Ge === true ? E.value : null, textColor: Ge === true ? k.value : null, tabindex: i.value, disable: qe(Ee), ...o("yr#" + Ee, { onClick: () => {
        Ce(Ee);
      } }) })]));
    }
    return d("div", { class: "q-date__view q-date__years flex flex-center" }, [d("div", { class: "col-auto" }, [d(Ze, { round: true, dense: true, flat: true, icon: A.value[0], ariaLabel: r.lang.date.prevRangeYears(Nn), tabindex: i.value, disable: qe(I), ...o("y-", { onClick: () => {
      L.value -= Nn;
    } }) })]), d("div", { class: "q-date__years-content col self-stretch row items-center" }, ve), d("div", { class: "col-auto" }, [d(Ze, { round: true, dense: true, flat: true, icon: A.value[1], ariaLabel: r.lang.date.nextRangeYears(Nn), tabindex: i.value, disable: qe(Z), ...o("y+", { onClick: () => {
      L.value += Nn;
    } }) })])]);
  } };
  function yt(I) {
    const Z = { ...b.value, day: I };
    if (e.range === false) {
      Re(Z, P.value);
      return;
    }
    if (z.value === null) {
      const ve = me.value.find((Ee) => Ee.fill !== true && Ee.i === I);
      if (e.noUnset !== true && ve.range !== void 0) {
        se({ target: Z, from: ve.range.from, to: ve.range.to });
        return;
      }
      if (ve.selected === true) {
        se(Z);
        return;
      }
      const qe = Un(Z);
      z.value = { init: Z, initHash: qe, final: Z, finalHash: qe }, n("rangeStart", Ye(Z));
    } else {
      const ve = z.value.initHash, qe = Un(Z), Ee = ve <= qe ? { from: z.value.init, to: Z } : { from: Z, to: z.value.init };
      z.value = null, In(ve === qe ? Z : { target: Z, ...Ee }), n("rangeEnd", { from: Ye(Ee.from), to: Ye(Ee.to) });
    }
  }
  function ht(I) {
    if (z.value !== null) {
      const Z = { ...b.value, day: I };
      Object.assign(z.value, { final: Z, finalHash: Un(Z) });
    }
  }
  return Object.assign(l, { setToday: ie, setView: we, offsetCalendar: ke, setCalendarTo: Te, setEditingRange: Me }), () => {
    const I = [d("div", { class: "q-date__content col relative-position" }, [d(Ft, { name: "q-transition--fade" }, Ue[C.value])])], Z = $e(t.default);
    return Z !== void 0 && I.push(d("div", { class: "q-date__actions" }, Z)), e.name !== void 0 && e.disable !== true && m(I, "push"), d("div", { class: q.value, ...ae.value }, [Fe(), d("div", { ref: g, class: "q-date__main col column", tabindex: -1 }, I)]);
  };
} });
function bh(e, t, n) {
  let l;
  function r() {
    l !== void 0 && (_a.remove(l), l = void 0);
  }
  return Ke(() => {
    e.value === true && r();
  }), { removeFromHistory: r, addToHistory() {
    l = { condition: () => n.value === true, handler: t }, _a.add(l);
  } };
}
var Ir = 0, Wi, Yi, Yr, Xi = false, _d, wd, xd, Ml = null;
function Zp(e) {
  Jp(e) && je(e);
}
function Jp(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop")) return true;
  const t = dy(e), n = e.shiftKey && !e.deltaX, l = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY), r = n || l ? e.deltaY : e.deltaX;
  for (let a = 0; a < t.length; a++) {
    const o = t[a];
    if (ip(o, l)) return l ? r < 0 && o.scrollTop === 0 ? true : r > 0 && o.scrollTop + o.clientHeight === o.scrollHeight : r < 0 && o.scrollLeft === 0 ? true : r > 0 && o.scrollLeft + o.clientWidth === o.scrollWidth;
  }
  return true;
}
function Sd(e) {
  e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function Wa(e) {
  Xi !== true && (Xi = true, requestAnimationFrame(() => {
    Xi = false;
    const { height: t } = e.target, { clientHeight: n, scrollTop: l } = document.scrollingElement;
    (Yr === void 0 || t !== window.innerHeight) && (Yr = n - t, document.scrollingElement.scrollTop = l), l > Yr && (document.scrollingElement.scrollTop -= Math.ceil((l - Yr) / 8));
  }));
}
function Cd(e) {
  const t = document.body, n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: l, overflowX: r } = window.getComputedStyle(t);
    Wi = ci(window), Yi = bl(window), _d = t.style.left, wd = t.style.top, xd = window.location.href, t.style.left = `-${Wi}px`, t.style.top = `-${Yi}px`, r !== "hidden" && (r === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), l !== "hidden" && (l === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = true, De.is.ios === true && (n === true ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", Wa, dt.passiveCapture), window.visualViewport.addEventListener("scroll", Wa, dt.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", Sd, dt.passiveCapture));
  }
  De.is.desktop === true && De.is.mac === true && window[`${e}EventListener`]("wheel", Zp, dt.notPassive), e === "remove" && (De.is.ios === true && (n === true ? (window.visualViewport.removeEventListener("resize", Wa, dt.passiveCapture), window.visualViewport.removeEventListener("scroll", Wa, dt.passiveCapture)) : window.removeEventListener("scroll", Sd, dt.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = false, t.style.left = _d, t.style.top = wd, window.location.href === xd && window.scrollTo(Wi, Yi), Yr = void 0);
}
function ju(e) {
  let t = "add";
  if (e === true) {
    if (Ir++, Ml !== null) {
      clearTimeout(Ml), Ml = null;
      return;
    }
    if (Ir > 1) return;
  } else {
    if (Ir === 0 || (Ir--, Ir > 0)) return;
    if (t = "remove", De.is.ios === true && De.is.nativeMobile === true) {
      Ml !== null && clearTimeout(Ml), Ml = setTimeout(() => {
        Cd(t), Ml = null;
      }, 100);
      return;
    }
  }
  Cd(t);
}
function yh() {
  let e;
  return { preventBodyScroll(t) {
    t !== e && (e !== void 0 || t === true) && (e = t, ju(t));
  } };
}
var Ya = 0, e1 = { standard: "fixed-full flex-center", top: "fixed-top justify-center", bottom: "fixed-bottom justify-center", right: "fixed-right items-center", left: "fixed-left items-center" }, kd = { standard: ["scale", "scale"], top: ["slide-down", "slide-up"], bottom: ["slide-up", "slide-down"], right: ["slide-left", "slide-right"], left: ["slide-right", "slide-left"] }, vi = he({ name: "QDialog", inheritAttrs: false, props: { ...Ar, ...Il, transitionShow: String, transitionHide: String, persistent: Boolean, autoClose: Boolean, allowFocusOutside: Boolean, noEscDismiss: Boolean, noBackdropDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, noShake: Boolean, seamless: Boolean, maximized: Boolean, fullWidth: Boolean, fullHeight: Boolean, square: Boolean, backdropFilter: String, position: { type: String, default: "standard", validator: (e) => ["standard", "top", "bottom", "left", "right"].includes(e) } }, emits: [...Pr, "shake", "click", "escapeKey"], setup(e, { slots: t, emit: n, attrs: l }) {
  const r = xe(), a = K(null), o = K(false), i = K(false);
  let u = null, c = null, s, f;
  const h = v(() => e.persistent !== true && e.noRouteDismiss !== true && e.seamless !== true), { preventBodyScroll: m } = yh(), { registerTimeout: g } = Zn(), { registerTick: w, removeTick: x } = pr(), { transitionProps: T, transitionStyle: p } = si(e, () => kd[e.position][0], () => kd[e.position][1]), y = v(() => p.value + (e.backdropFilter !== void 0 ? `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}` : "")), { showPortal: b, hidePortal: C, portalIsAccessible: $, renderPortal: F } = Rs(r, a, fe, "dialog"), { hide: N } = $r({ showing: o, hideOnRouteChange: h, handleShow: j, handleHide: Q, processOnMount: true }), { addToHistory: B, removeFromHistory: L } = bh(o, N, h), z = v(() => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === true ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${e1[e.position]}` + (i.value === true ? " q-dialog__inner--animating" : "") + (e.fullWidth === true ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === true ? " q-dialog__inner--fullheight" : "") + (e.square === true ? " q-dialog__inner--square" : "")), q = v(() => o.value === true && e.seamless !== true), E = v(() => e.autoClose === true ? { onClick: _ } : {}), k = v(() => [`q-dialog fullscreen no-pointer-events q-dialog--${q.value === true ? "modal" : "seamless"}`, l.class]);
  ge(() => e.maximized, (A) => {
    o.value === true && Y(A);
  }), ge(q, (A) => {
    m(A), A === true ? (Dm(V), Om(re)) : (Iu(V), Ao(re));
  });
  function j(A) {
    var _a3;
    B(), c = e.noRefocus === false && document.activeElement !== null ? document.activeElement : null, Y(e.maximized), b(), i.value = true, e.noFocus !== true ? ((_a3 = document.activeElement) == null ? void 0 : _a3.blur(), w(W)) : x(), g(() => {
      if (r.proxy.$q.platform.is.ios === true) {
        if (e.seamless !== true && document.activeElement) {
          const { top: R, bottom: G } = document.activeElement.getBoundingClientRect(), { innerHeight: O } = window, ne = window.visualViewport !== void 0 ? window.visualViewport.height : O;
          R > 0 && G > ne / 2 && (document.scrollingElement.scrollTop = Math.min(document.scrollingElement.scrollHeight - ne, G >= O ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + G - ne / 2))), document.activeElement.scrollIntoView();
        }
        f = true, a.value.click(), f = false;
      }
      b(true), i.value = false, n("show", A);
    }, e.transitionDuration);
  }
  function Q(A) {
    x(), L(), pe(true), i.value = true, C(), c !== null && ((((A == null ? void 0 : A.type.indexOf("key")) === 0 ? c.closest('[tabindex]:not([tabindex^="-"])') : void 0) || c).focus(), c = null), g(() => {
      C(true), i.value = false, n("hide", A);
    }, e.transitionDuration);
  }
  function W(A) {
    Br(() => {
      let R = a.value;
      if (R !== null) {
        if (A !== void 0) {
          const G = R.querySelector(A);
          if (G !== null) {
            G.focus({ preventScroll: true });
            return;
          }
        }
        R.contains(document.activeElement) !== true && (R = R.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || R.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || R.querySelector("[autofocus], [data-autofocus]") || R, R.focus({ preventScroll: true }));
      }
    });
  }
  function X(A) {
    A && typeof A.focus == "function" ? A.focus({ preventScroll: true }) : W(), n("shake");
    const R = a.value;
    R !== null && (R.classList.remove("q-animate--scale"), R.classList.add("q-animate--scale"), u !== null && clearTimeout(u), u = setTimeout(() => {
      u = null, a.value !== null && (R.classList.remove("q-animate--scale"), W());
    }, 170));
  }
  function re() {
    e.seamless !== true && (e.persistent === true || e.noEscDismiss === true ? e.maximized !== true && e.noShake !== true && X() : (n("escapeKey"), N()));
  }
  function pe(A) {
    u !== null && (clearTimeout(u), u = null), (A === true || o.value === true) && (Y(false), e.seamless !== true && (m(false), Iu(V), Ao(re))), A !== true && (c = null);
  }
  function Y(A) {
    A === true ? s !== true && (Ya < 1 && document.body.classList.add("q-body--dialog"), Ya++, s = true) : s === true && (Ya < 2 && document.body.classList.remove("q-body--dialog"), Ya--, s = false);
  }
  function _(A) {
    f !== true && (N(A), n("click", A));
  }
  function H(A) {
    e.persistent !== true && e.noBackdropDismiss !== true ? N(A) : e.noShake !== true && X();
  }
  function V(A) {
    e.allowFocusOutside !== true && $.value === true && Cm(a.value, A.target) !== true && W('[tabindex]:not([tabindex="-1"])');
  }
  Object.assign(r.proxy, { focus: W, shake: X, __updateRefocusTarget(A) {
    c = A || null;
  } }), Ke(pe);
  function fe() {
    return d("div", { role: "dialog", "aria-modal": q.value === true ? "true" : "false", ...l, class: k.value }, [d(Ft, { name: "q-transition--fade", appear: true }, () => q.value === true ? d("div", { class: "q-dialog__backdrop fixed-full", style: y.value, "aria-hidden": "true", tabindex: -1, onClick: H }) : null), d(Ft, T.value, () => o.value === true ? d("div", { ref: a, class: z.value, style: p.value, tabindex: -1, ...E.value }, $e(t.default)) : null)]);
  }
  return F;
} }), Td = 150, qd = he({ name: "QDrawer", inheritAttrs: false, props: { ...Ar, ...nt, side: { type: String, default: "left", validator: (e) => ["left", "right"].includes(e) }, width: { type: Number, default: 300 }, mini: Boolean, miniToOverlay: Boolean, miniWidth: { type: Number, default: 57 }, noMiniAnimation: Boolean, breakpoint: { type: Number, default: 1023 }, showIfAbove: Boolean, behavior: { type: String, validator: (e) => ["default", "desktop", "mobile"].includes(e), default: "default" }, bordered: Boolean, elevated: Boolean, overlay: Boolean, persistent: Boolean, noSwipeOpen: Boolean, noSwipeClose: Boolean, noSwipeBackdrop: Boolean }, emits: [...Pr, "onLayout", "miniState"], setup(e, { slots: t, emit: n, attrs: l }) {
  const r = xe(), { proxy: { $q: a } } = r, o = lt(e, a), { preventBodyScroll: i } = yh(), { registerTimeout: u, removeTimeout: c } = Zn(), s = qt(Xl, ot);
  if (s === ot) return console.error("QDrawer needs to be child of QLayout"), ot;
  let f, h = null, m;
  const g = K(e.behavior === "mobile" || e.behavior !== "desktop" && s.totalWidth.value <= e.breakpoint), w = v(() => e.mini === true && g.value !== true), x = v(() => w.value === true ? e.miniWidth : e.width), T = K(e.showIfAbove === true && g.value === false ? true : e.modelValue === true), p = v(() => e.persistent !== true && (g.value === true || pe.value === true));
  function y(U, ie) {
    if (F(), U !== false && s.animate(), M(0), g.value === true) {
      const we = s.instances[Q.value];
      (we == null ? void 0 : we.belowBreakpoint) === true && we.hide(false), D(1), s.isContainer.value !== true && i(true);
    } else D(0), U !== false && ee(false);
    u(() => {
      U !== false && ee(true), ie !== true && n("show", U);
    }, Td);
  }
  function b(U, ie) {
    N(), U !== false && s.animate(), D(0), M(z.value * x.value), ce(), ie !== true ? u(() => {
      n("hide", U);
    }, Td) : c();
  }
  const { show: C, hide: $ } = $r({ showing: T, hideOnRouteChange: p, handleShow: y, handleHide: b }), { addToHistory: F, removeFromHistory: N } = bh(T, $, p), B = { belowBreakpoint: g, hide: $ }, L = v(() => e.side === "right"), z = v(() => (a.lang.rtl === true ? -1 : 1) * (L.value === true ? 1 : -1)), q = K(0), E = K(false), k = K(false), j = K(x.value * z.value), Q = v(() => L.value === true ? "left" : "right"), W = v(() => T.value === true && g.value === false && e.overlay === false ? e.miniToOverlay === true ? e.miniWidth : x.value : 0), X = v(() => e.overlay === true || e.miniToOverlay === true || s.view.value.indexOf(L.value ? "R" : "L") !== -1 || a.platform.is.ios === true && s.isContainer.value === true), re = v(() => e.overlay === false && T.value === true && g.value === false), pe = v(() => e.overlay === true && T.value === true && g.value === false), Y = v(() => "fullscreen q-drawer__backdrop" + (T.value === false && E.value === false ? " hidden" : "")), _ = v(() => ({ backgroundColor: `rgba(0,0,0,${q.value * 0.4})` })), H = v(() => L.value === true ? s.rows.value.top[2] === "r" : s.rows.value.top[0] === "l"), V = v(() => L.value === true ? s.rows.value.bottom[2] === "r" : s.rows.value.bottom[0] === "l"), fe = v(() => {
    const U = {};
    return s.header.space === true && H.value === false && (X.value === true ? U.top = `${s.header.offset}px` : s.header.space === true && (U.top = `${s.header.size}px`)), s.footer.space === true && V.value === false && (X.value === true ? U.bottom = `${s.footer.offset}px` : s.footer.space === true && (U.bottom = `${s.footer.size}px`)), U;
  }), A = v(() => {
    const U = { width: `${x.value}px`, transform: `translateX(${j.value}px)` };
    return g.value === true ? U : Object.assign(U, fe.value);
  }), R = v(() => "q-drawer__content fit " + (s.isContainer.value !== true ? "scroll" : "overflow-auto")), G = v(() => `q-drawer q-drawer--${e.side}` + (k.value === true ? " q-drawer--mini-animate" : "") + (e.bordered === true ? " q-drawer--bordered" : "") + (o.value === true ? " q-drawer--dark q-dark" : "") + (E.value === true ? " no-transition" : T.value === true ? "" : " q-layout--prevent-focus") + (g.value === true ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${w.value === true ? "mini" : "standard"}` + (X.value === true || re.value !== true ? " fixed" : "") + (e.overlay === true || e.miniToOverlay === true ? " q-drawer--on-top" : "") + (H.value === true ? " q-drawer--top-padding" : ""))), O = v(() => {
    const U = a.lang.rtl === true ? e.side : Q.value;
    return [[gn, P, void 0, { [U]: true, mouse: true }]];
  }), ne = v(() => {
    const U = a.lang.rtl === true ? Q.value : e.side;
    return [[gn, te, void 0, { [U]: true, mouse: true }]];
  }), be = v(() => {
    const U = a.lang.rtl === true ? Q.value : e.side;
    return [[gn, te, void 0, { [U]: true, mouse: true, mouseAllDir: true }]];
  });
  function S() {
    me(g, e.behavior === "mobile" || e.behavior !== "desktop" && s.totalWidth.value <= e.breakpoint);
  }
  ge(g, (U) => {
    U === true ? (f = T.value, T.value === true && $(false)) : e.overlay === false && e.behavior !== "mobile" && f !== false && (T.value === true ? (M(0), D(0), ce()) : C(false));
  }), ge(() => e.side, (U, ie) => {
    s.instances[ie] === B && (s.instances[ie] = void 0, s[ie].space = false, s[ie].offset = 0), s.instances[U] = B, s[U].size = x.value, s[U].space = re.value, s[U].offset = W.value;
  }), ge(s.totalWidth, () => {
    (s.isContainer.value === true || document.qScrollPrevented !== true) && S();
  }), ge(() => e.behavior + e.breakpoint, S), ge(s.isContainer, (U) => {
    T.value === true && i(U !== true), U === true && S();
  }), ge(s.scrollbarWidth, () => {
    M(T.value === true ? 0 : void 0);
  }), ge(W, (U) => {
    de("offset", U);
  }), ge(re, (U) => {
    n("onLayout", U), de("space", U);
  }), ge(L, () => {
    M();
  }), ge(x, (U) => {
    M(), ae(e.miniToOverlay, U);
  }), ge(() => e.miniToOverlay, (U) => {
    ae(U, x.value);
  }), ge(() => a.lang.rtl, () => {
    M();
  }), ge(() => e.mini, () => {
    e.noMiniAnimation || e.modelValue === true && (le(), s.animate());
  }), ge(w, (U) => {
    n("miniState", U);
  });
  function M(U) {
    U === void 0 ? We(() => {
      U = T.value === true ? 0 : x.value, M(z.value * U);
    }) : (s.isContainer.value === true && L.value === true && (g.value === true || Math.abs(U) === x.value) && (U += z.value * s.scrollbarWidth.value), j.value = U);
  }
  function D(U) {
    q.value = U;
  }
  function ee(U) {
    const ie = U === true ? "remove" : s.isContainer.value !== true ? "add" : "";
    ie !== "" && document.body.classList[ie]("q-body--drawer-toggle");
  }
  function le() {
    h !== null && clearTimeout(h), r.proxy && r.proxy.$el && r.proxy.$el.classList.add("q-drawer--mini-animate"), k.value = true, h = setTimeout(() => {
      var _a3, _b2;
      h = null, k.value = false, (_b2 = (_a3 = r == null ? void 0 : r.proxy) == null ? void 0 : _a3.$el) == null ? void 0 : _b2.classList.remove("q-drawer--mini-animate");
    }, 150);
  }
  function P(U) {
    if (T.value !== false) return;
    const ie = x.value, we = ct(U.distance.x, 0, ie);
    if (U.isFinal === true) {
      we >= Math.min(75, ie) === true ? C() : (s.animate(), D(0), M(z.value * ie)), E.value = false;
      return;
    }
    M((a.lang.rtl === true ? L.value !== true : L.value) ? Math.max(ie - we, 0) : Math.min(0, we - ie)), D(ct(we / ie, 0, 1)), U.isFirst === true && (E.value = true);
  }
  function te(U) {
    if (T.value !== true) return;
    const ie = x.value, we = U.direction === e.side, ke = (a.lang.rtl === true ? we !== true : we) ? ct(U.distance.x, 0, ie) : 0;
    if (U.isFinal === true) {
      Math.abs(ke) < Math.min(75, ie) === true ? (s.animate(), D(1), M(0)) : $(), E.value = false;
      return;
    }
    M(z.value * ke), D(ct(1 - ke / ie, 0, 1)), U.isFirst === true && (E.value = true);
  }
  function ce() {
    i(false), ee(true);
  }
  function de(U, ie) {
    s.update(e.side, U, ie);
  }
  function me(U, ie) {
    U.value !== ie && (U.value = ie);
  }
  function ae(U, ie) {
    de("size", U === true ? e.miniWidth : ie);
  }
  return s.instances[e.side] = B, ae(e.miniToOverlay, x.value), de("space", re.value), de("offset", W.value), e.showIfAbove === true && e.modelValue !== true && T.value === true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", true), ft(() => {
    n("onLayout", re.value), n("miniState", w.value), f = e.showIfAbove === true;
    const U = () => {
      (T.value === true ? y : b)(false, true);
    };
    if (s.totalWidth.value !== 0) {
      We(U);
      return;
    }
    m = ge(s.totalWidth, () => {
      m(), m = void 0, T.value === false && e.showIfAbove === true && g.value === false ? C(false) : U();
    });
  }), Ke(() => {
    m == null ? void 0 : m(), h !== null && (clearTimeout(h), h = null), T.value === true && ce(), s.instances[e.side] === B && (s.instances[e.side] = void 0, de("size", 0), de("offset", 0), de("space", false));
  }), () => {
    const U = [];
    g.value === true && (e.noSwipeOpen === false && U.push(sn(d("div", { key: "open", class: `q-drawer__opener fixed-${e.side}`, "aria-hidden": "true" }), O.value)), U.push(pn("div", { ref: "backdrop", class: Y.value, style: _.value, "aria-hidden": "true", onClick: $ }, void 0, "backdrop", e.noSwipeBackdrop !== true && T.value === true, () => be.value)));
    const ie = w.value === true && t.mini !== void 0, we = [d("div", { ...l, key: "" + ie, class: [R.value, l.class] }, ie === true ? t.mini() : $e(t.default))];
    return e.elevated === true && T.value === true && we.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), U.push(pn("aside", { ref: "content", class: G.value, style: A.value }, we, "contentclose", e.noSwipeClose !== true && g.value === true, () => ne.value)), d("div", { class: "q-drawer-container" }, U);
  };
} });
function ph(e, t) {
  if (t && e === t) return null;
  const n = e.nodeName.toLowerCase();
  if (["div", "li", "ul", "ol", "blockquote"].includes(n) === true) return e;
  const l = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle, r = l.display;
  return r === "block" || r === "table" ? e : ph(e.parentNode);
}
function Gi(e, t, n) {
  return !e || e === document.body ? false : n === true && e === t || (t === document ? document.body : t).contains(e.parentNode);
}
function _h(e, t, n) {
  if (n || (n = document.createRange(), n.selectNode(e), n.setStart(e, 0)), t.count === 0) n.setEnd(e, t.count);
  else if (t.count > 0) if (e.nodeType === Node.TEXT_NODE) e.textContent.length < t.count ? t.count -= e.textContent.length : (n.setEnd(e, t.count), t.count = 0);
  else for (let l = 0; t.count !== 0 && l < e.childNodes.length; l++) n = _h(e.childNodes[l], t, n);
  return n;
}
var t1 = /^https?:\/\//, n1 = class {
  constructor(e, t) {
    this.el = e, this.eVm = t, this._range = null;
  }
  get selection() {
    if (this.el) {
      const e = document.getSelection();
      if (Gi(e.anchorNode, this.el, true) && Gi(e.focusNode, this.el, true)) return e;
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
    return e !== null ? ph(e, this.el) : null;
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
    if (n.focusNode && Gi(n.focusNode, l)) for (t = n.focusNode, e = n.focusOffset; t && t !== l; ) t !== this.el && t.previousSibling ? (t = t.previousSibling, e += t.textContent.length) : t = t.parentNode;
    this.savedPos = e;
  }
  restorePosition(e = 0) {
    if (this.savedPos > 0 && this.savedPos < e) {
      const t = window.getSelection(), n = _h(this.el, { count: this.savedPos });
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
  apply(e, t, n = xt) {
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
        const r = this.selectWord(this.selection), a = r ? r.toString() : "";
        if (!a.length && (!this.range || !this.range.cloneContents().querySelector("img"))) return;
        this.eVm.editLinkUrl.value = t1.test(a) ? a : "https://", document.execCommand("createLink", false, this.eVm.editLinkUrl.value), this.save(r.getRangeAt(0));
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
    const l = e.focusNode, r = e.focusOffset;
    return e.collapse(e.anchorNode, e.anchorOffset), e.modify("move", n[0], "character"), e.modify("move", n[1], "word"), e.extend(l, r), e.modify("extend", n[1], "character"), e.modify("extend", n[0], "word"), e;
  }
}, l1 = he({ name: "QTooltip", inheritAttrs: false, props: { ...Em, ...Ar, ...Il, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null }, transitionShow: { ...Il.transitionShow, default: "jump-down" }, transitionHide: { ...Il.transitionHide, default: "jump-up" }, anchor: { type: String, default: "bottom middle", validator: Lo }, self: { type: String, default: "top middle", validator: Lo }, offset: { type: Array, default: () => [14, 14], validator: zm }, scrollTarget: Gl, delay: { type: Number, default: 0 }, hideDelay: { type: Number, default: 0 }, persistent: Boolean }, emits: [...Pr], setup(e, { slots: t, emit: n, attrs: l }) {
  let r, a;
  const o = xe(), { proxy: { $q: i } } = o, u = K(null), c = K(false), s = v(() => Fo(e.anchor, i.lang.rtl)), f = v(() => Fo(e.self, i.lang.rtl)), h = v(() => e.persistent !== true), { registerTick: m, removeTick: g } = pr(), { registerTimeout: w } = Zn(), { transitionProps: x, transitionStyle: T } = si(e), { localScrollTarget: p, changeScrollEvent: y, unconfigureScrollTarget: b } = Am(e, pe), { anchorEl: C, canShow: $, anchorEvents: F } = Ms({ showing: c, configureAnchorEl: re }), { show: N, hide: B } = $r({ showing: c, canShow: $, handleShow: E, handleHide: k, hideOnRouteChange: h, processOnMount: true });
  Object.assign(F, { delayShow: W, delayHide: X });
  const { showPortal: L, hidePortal: z, renderPortal: q } = Rs(o, u, _, "tooltip");
  if (i.platform.is.mobile === true) {
    const H = { anchorEl: C, innerRef: u, onClickOutside(fe) {
      return B(fe), fe.target.classList.contains("q-dialog__backdrop") && je(fe), true;
    } }, V = v(() => e.modelValue === null && e.persistent !== true && c.value === true);
    ge(V, (fe) => {
      (fe === true ? Im : Bo)(H);
    }), Ke(() => {
      Bo(H);
    });
  }
  function E(H) {
    L(), m(() => {
      a = new MutationObserver(() => Q()), a.observe(u.value, { attributes: false, childList: true, characterData: true, subtree: true }), Q(), pe();
    }), r === void 0 && (r = ge(() => i.screen.width + "|" + i.screen.height + "|" + e.self + "|" + e.anchor + "|" + i.lang.rtl, Q)), w(() => {
      L(true), n("show", H);
    }, e.transitionDuration);
  }
  function k(H) {
    g(), z(), j(), w(() => {
      z(true), n("hide", H);
    }, e.transitionDuration);
  }
  function j() {
    a !== void 0 && (a.disconnect(), a = void 0), r !== void 0 && (r(), r = void 0), b(), Wt(F, "tooltipTemp");
  }
  function Q() {
    As({ targetEl: u.value, offset: e.offset, anchorEl: C.value, anchorOrigin: s.value, selfOrigin: f.value, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function W(H) {
    if (i.platform.is.mobile === true) {
      Mn(), document.body.classList.add("non-selectable");
      const V = C.value, fe = ["touchmove", "touchcancel", "touchend", "click"].map((A) => [V, A, "delayHide", "passiveCapture"]);
      kt(F, "tooltipTemp", fe);
    }
    w(() => {
      N(H);
    }, e.delay);
  }
  function X(H) {
    i.platform.is.mobile === true && (Wt(F, "tooltipTemp"), Mn(), setTimeout(() => {
      document.body.classList.remove("non-selectable");
    }, 10)), w(() => {
      B(H);
    }, e.hideDelay);
  }
  function re() {
    if (e.noParentEvent === true || C.value === null) return;
    const H = i.platform.is.mobile === true ? [[C.value, "touchstart", "delayShow", "passive"]] : [[C.value, "mouseenter", "delayShow", "passive"], [C.value, "mouseleave", "delayHide", "passive"]];
    kt(F, "anchor", H);
  }
  function pe() {
    if (C.value !== null || e.scrollTarget !== void 0) {
      p.value = Dn(C.value, e.scrollTarget);
      const H = e.noParentEvent === true ? Q : B;
      y(p.value, H);
    }
  }
  function Y() {
    return c.value === true ? d("div", { ...l, ref: u, class: ["q-tooltip q-tooltip--style q-position-engine no-pointer-events", l.class], style: [l.style, T.value], role: "tooltip" }, $e(t.default)) : null;
  }
  function _() {
    return d(Ft, x.value, Y);
  }
  return Ke(j), Object.assign(o.proxy, { updatePosition: Q }), q;
} }), kr = he({ name: "QItem", props: { ...nt, ...Pa, tag: { type: String, default: "div" }, active: { type: Boolean, default: null }, clickable: Boolean, dense: Boolean, insetLevel: Number, tabindex: [String, Number], focused: Boolean, manualFocus: Boolean }, emits: ["click", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = xe(), r = lt(e, l), { hasLink: a, linkAttrs: o, linkClass: i, linkTag: u, navigateOnClick: c } = ii(), s = K(null), f = K(null), h = v(() => e.clickable === true || a.value === true || e.tag === "label"), m = v(() => e.disable !== true && h.value === true), g = v(() => "q-item q-item-type row no-wrap" + (e.dense === true ? " q-item--dense" : "") + (r.value === true ? " q-item--dark" : "") + (a.value === true && e.active === null ? i.value : e.active === true ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === true ? " disabled" : "") + (m.value === true ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === true ? " q-manual-focusable--focused" : "") : "")), w = v(() => e.insetLevel === void 0 ? null : { ["padding" + (l.lang.rtl === true ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px" });
  function x(y) {
    m.value === true && (f.value !== null && y.qAvoidFocus !== true && (y.qKeyEvent !== true && document.activeElement === s.value ? f.value.focus() : document.activeElement === f.value && s.value.focus()), c(y));
  }
  function T(y) {
    if (m.value === true && yn(y, [13, 32]) === true) {
      je(y), y.qKeyEvent = true;
      const b = new MouseEvent("click", y);
      b.qKeyEvent = true, s.value.dispatchEvent(b);
    }
    n("keyup", y);
  }
  function p() {
    const y = Aa(t.default, []);
    return m.value === true && y.unshift(d("div", { class: "q-focus-helper", tabindex: -1, ref: f })), y;
  }
  return () => {
    const y = { ref: s, class: g.value, style: w.value, role: "listitem", onClick: x, onKeyup: T };
    return m.value === true ? (y.tabindex = e.tabindex || "0", Object.assign(y, o.value)) : h.value === true && (y["aria-disabled"] = "true"), d(u.value, y, p());
  };
} }), mn = he({ name: "QItemSection", props: { avatar: Boolean, thumbnail: Boolean, side: Boolean, top: Boolean, noWrap: Boolean }, setup(e, { slots: t }) {
  const n = v(() => `q-item__section column q-item__section--${e.avatar === true || e.side === true || e.thumbnail === true ? "side" : "main"}` + (e.top === true ? " q-item__section--top justify-start" : " justify-center") + (e.avatar === true ? " q-item__section--avatar" : "") + (e.thumbnail === true ? " q-item__section--thumbnail" : "") + (e.noWrap === true ? " q-item__section--nowrap" : ""));
  return () => d("div", { class: n.value }, $e(t.default));
} });
function wh(e, t, n) {
  t.handler ? t.handler(e, n, n.caret) : n.runCmd(t.cmd, t.param);
}
function js(e) {
  return d("div", { class: "q-editor__toolbar-group" }, e);
}
function xh(e, t, n, l = false) {
  const r = l || (t.type === "toggle" ? t.toggled ? t.toggled(e) : t.cmd && e.caret.is(t.cmd, t.param) : false), a = [];
  if (t.tip && e.$q.platform.is.desktop) {
    const o = t.key ? d("div", [d("small", `(CTRL + ${String.fromCharCode(t.key)})`)]) : null;
    a.push(d(l1, { delay: 1e3 }, () => [d("div", { innerHTML: t.tip }), o]));
  }
  return d(Ze, { ...e.buttonProps.value, icon: t.icon !== null ? t.icon : void 0, color: r ? t.toggleColor || e.props.toolbarToggleColor : t.color || e.props.toolbarColor, textColor: r && !e.props.toolbarPush ? null : t.textColor || e.props.toolbarTextColor, label: t.label, disable: t.disable ? typeof t.disable == "function" ? t.disable(e) : true : false, size: "sm", onClick(o) {
    n == null ? void 0 : n(), wh(o, t, e);
  } }, () => a);
}
function r1(e, t) {
  const n = t.list === "only-icons";
  let l = t.label, r = t.icon !== null ? t.icon : void 0, a, o;
  function i() {
    c.component.proxy.hide();
  }
  if (n) o = t.options.map((s) => {
    const f = s.type === void 0 ? e.caret.is(s.cmd, s.param) : false;
    return f && (l = s.tip, r = s.icon !== null ? s.icon : void 0), xh(e, s, i, f);
  }), a = e.toolbarBackgroundClass.value, o = [js(o)];
  else {
    const s = e.props.toolbarToggleColor !== void 0 ? `text-${e.props.toolbarToggleColor}` : null, f = e.props.toolbarTextColor !== void 0 ? `text-${e.props.toolbarTextColor}` : null, h = t.list === "no-icons";
    o = t.options.map((m) => {
      const g = m.disable ? m.disable(e) : false, w = m.type === void 0 ? e.caret.is(m.cmd, m.param) : false;
      w && (l = m.tip, r = m.icon !== null ? m.icon : void 0);
      const x = m.htmlTip;
      return d(kr, { active: w, activeClass: s, clickable: true, disable: g, dense: true, onClick(T) {
        var _a3;
        i(), (T == null ? void 0 : T.qAvoidFocus) !== true && ((_a3 = e.contentRef.value) == null ? void 0 : _a3.focus()), e.caret.restore(), wh(T, m, e);
      } }, () => [h === true ? null : d(mn, { class: w ? s : f, side: true }, () => d(et, { name: m.icon !== null ? m.icon : void 0 })), d(mn, x ? () => d("div", { class: "text-no-wrap", innerHTML: m.htmlTip }) : m.tip ? () => d("div", { class: "text-no-wrap" }, m.tip) : void 0)]);
    }), a = [e.toolbarBackgroundClass.value, f];
  }
  const u = t.highlight && l !== t.label, c = d(yp, { ...e.buttonProps.value, noCaps: true, noWrap: true, color: u ? e.props.toolbarToggleColor : e.props.toolbarColor, textColor: u && !e.props.toolbarPush ? null : e.props.toolbarTextColor, label: t.fixedLabel ? t.label : l, icon: t.fixedIcon ? t.icon !== null ? t.icon : void 0 : r, contentClass: a, onShow: (s) => e.emit("dropdownShow", s), onHide: (s) => e.emit("dropdownHide", s), onBeforeShow: (s) => e.emit("dropdownBeforeShow", s), onBeforeHide: (s) => e.emit("dropdownBeforeHide", s) }, () => o);
  return c;
}
function a1(e) {
  if (e.caret) return e.buttons.value.filter((t) => !e.isViewingSource.value || t.find((n) => n.cmd === "viewsource")).map((t) => js(t.map((n) => e.isViewingSource.value && n.cmd !== "viewsource" ? false : n.type === "slot" ? $e(e.slots[n.slot]) : n.type === "dropdown" ? r1(e, n) : xh(e, n))));
}
function o1(e, t, n, l = {}) {
  const r = Object.keys(l);
  if (r.length === 0) return {};
  const a = { default_font: { cmd: "fontName", param: e, icon: n, tip: t } };
  return r.forEach((o) => {
    const i = l[o];
    a[o] = { cmd: "fontName", param: i, icon: n, tip: i, htmlTip: `<font face="${i}">${i}</font>` };
  }), a;
}
function i1(e) {
  if (e.caret) {
    const t = e.props.toolbarColor || e.props.toolbarTextColor;
    let n = e.editLinkUrl.value;
    const l = () => {
      e.caret.restore(), n !== e.editLinkUrl.value && document.execCommand("createLink", false, n === "" ? " " : n), e.editLinkUrl.value = null;
    };
    return [d("div", { class: `q-mx-xs text-${t}` }, `${e.$q.lang.editor.url}: `), d("input", { key: "qedt_btm_input", class: "col q-editor__link-input", value: n, onInput: (r) => {
      wt(r), n = r.target.value;
    }, onKeydown: (r) => {
      if (Yl(r) !== true) switch (r.keyCode) {
        case 13:
          return Vt(r), l();
        case 27:
          Vt(r), e.caret.restore(), (!e.editLinkUrl.value || e.editLinkUrl.value === "https://") && document.execCommand("unlink"), e.editLinkUrl.value = null;
          break;
      }
    } }), js([d(Ze, { key: "qedt_btm_rem", tabindex: -1, ...e.buttonProps.value, label: e.$q.lang.label.remove, noCaps: true, onClick: () => {
      e.caret.restore(), document.execCommand("unlink"), e.editLinkUrl.value = null;
    } }), d(Ze, { key: "qedt_btm_upd", ...e.buttonProps.value, label: e.$q.lang.label.update, noCaps: true, onClick: l })])];
  }
}
var Md = /^on[A-Z]/;
function Sh() {
  const { attrs: e, vnode: t } = xe(), n = { listeners: K({}), attributes: K({}) };
  function l() {
    const r = {}, a = {};
    for (const o in e) o !== "class" && o !== "style" && Md.test(o) === false && (r[o] = e[o]);
    for (const o in t.props) Md.test(o) === true && (a[o] = t.props[o]);
    n.attributes.value = r, n.listeners.value = a;
  }
  return Er(l), l(), n;
}
var u1 = Object.prototype.toString, Zi = Object.prototype.hasOwnProperty, s1 = new Set(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp"].map((e) => "[object " + e + "]"));
function Ed(e) {
  if (e !== Object(e) || s1.has(u1.call(e)) === true || e.constructor && Zi.call(e, "constructor") === false && Zi.call(e.constructor.prototype, "isPrototypeOf") === false) return false;
  let t;
  for (t in e) ;
  return t === void 0 || Zi.call(e, t);
}
function Ch() {
  let e, t, n, l, r, a, o = arguments[0] || {}, i = 1, u = false;
  const c = arguments.length;
  for (typeof o == "boolean" && (u = o, o = arguments[1] || {}, i = 2), Object(o) !== o && typeof o != "function" && (o = {}), c === i && (o = this, i--); i < c; i++) if ((e = arguments[i]) !== null) for (t in e) n = o[t], l = e[t], o !== l && (u === true && l && ((r = Array.isArray(l)) || Ed(l) === true) ? (r === true ? a = Array.isArray(n) === true ? n : [] : a = Ed(n) === true ? n : {}, o[t] = Ch(u, a, l)) : l !== void 0 && (o[t] = l));
  return o;
}
he({ name: "QEditor", props: { ...nt, ...Vs, modelValue: { type: String, required: true }, readonly: Boolean, disable: Boolean, minHeight: { type: String, default: "10rem" }, maxHeight: String, height: String, definitions: Object, fonts: Object, placeholder: String, toolbar: { type: Array, validator: (e) => e.length === 0 || e.every((t) => t.length), default: () => [["left", "center", "right", "justify"], ["bold", "italic", "underline", "strike"], ["undo", "redo"]] }, toolbarColor: String, toolbarBg: String, toolbarTextColor: String, toolbarToggleColor: { type: String, default: "primary" }, toolbarOutline: Boolean, toolbarPush: Boolean, toolbarRounded: Boolean, paragraphTag: { type: String, validator: (e) => ["div", "p"].includes(e), default: "div" }, contentStyle: Object, contentClass: [Object, Array, String], square: Boolean, flat: Boolean, dense: Boolean }, emits: [...Ds, "update:modelValue", "keydown", "click", "focus", "blur", "dropdownShow", "dropdownHide", "dropdownBeforeShow", "dropdownBeforeHide", "linkShow", "linkHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), { $q: r } = l, a = lt(e, r), { inFullscreen: o, toggleFullscreen: i } = Is(), u = Sh(), c = K(null), s = K(null), f = K(null), h = K(false), m = v(() => !e.readonly && !e.disable);
  let g, w, x = e.modelValue;
  document.execCommand("defaultParagraphSeparator", false, e.paragraphTag), g = window.getComputedStyle(document.body).fontFamily;
  const T = v(() => e.toolbarBg ? ` bg-${e.toolbarBg}` : ""), p = v(() => ({ type: "a", flat: e.toolbarOutline !== true && e.toolbarPush !== true, noWrap: true, outline: e.toolbarOutline, push: e.toolbarPush, rounded: e.toolbarRounded, dense: true, color: e.toolbarColor, disable: !m.value, size: "sm" })), y = v(() => {
    const A = r.lang.editor, R = r.iconSet.editor;
    return { bold: { cmd: "bold", icon: R.bold, tip: A.bold, key: 66 }, italic: { cmd: "italic", icon: R.italic, tip: A.italic, key: 73 }, strike: { cmd: "strikeThrough", icon: R.strikethrough, tip: A.strikethrough, key: 83 }, underline: { cmd: "underline", icon: R.underline, tip: A.underline, key: 85 }, unordered: { cmd: "insertUnorderedList", icon: R.unorderedList, tip: A.unorderedList }, ordered: { cmd: "insertOrderedList", icon: R.orderedList, tip: A.orderedList }, subscript: { cmd: "subscript", icon: R.subscript, tip: A.subscript, htmlTip: "x<subscript>2</subscript>" }, superscript: { cmd: "superscript", icon: R.superscript, tip: A.superscript, htmlTip: "x<superscript>2</superscript>" }, link: { cmd: "link", disable: (G) => G.caret && !G.caret.can("link"), icon: R.hyperlink, tip: A.hyperlink, key: 76 }, fullscreen: { cmd: "fullscreen", icon: R.toggleFullscreen, tip: A.toggleFullscreen, key: 70 }, viewsource: { cmd: "viewsource", icon: R.viewSource, tip: A.viewSource }, quote: { cmd: "formatBlock", param: "BLOCKQUOTE", icon: R.quote, tip: A.quote, key: 81 }, left: { cmd: "justifyLeft", icon: R.left, tip: A.left }, center: { cmd: "justifyCenter", icon: R.center, tip: A.center }, right: { cmd: "justifyRight", icon: R.right, tip: A.right }, justify: { cmd: "justifyFull", icon: R.justify, tip: A.justify }, print: { type: "no-state", cmd: "print", icon: R.print, tip: A.print, key: 80 }, outdent: { type: "no-state", disable: (G) => G.caret && !G.caret.can("outdent"), cmd: "outdent", icon: R.outdent, tip: A.outdent }, indent: { type: "no-state", disable: (G) => G.caret && !G.caret.can("indent"), cmd: "indent", icon: R.indent, tip: A.indent }, removeFormat: { type: "no-state", cmd: "removeFormat", icon: R.removeFormat, tip: A.removeFormat }, hr: { type: "no-state", cmd: "insertHorizontalRule", icon: R.hr, tip: A.hr }, undo: { type: "no-state", cmd: "undo", icon: R.undo, tip: A.undo, key: 90 }, redo: { type: "no-state", cmd: "redo", icon: R.redo, tip: A.redo, key: 89 }, h1: { cmd: "formatBlock", param: "H1", icon: R.heading1 || R.heading, tip: A.heading1, htmlTip: `<h1 class="q-ma-none">${A.heading1}</h1>` }, h2: { cmd: "formatBlock", param: "H2", icon: R.heading2 || R.heading, tip: A.heading2, htmlTip: `<h2 class="q-ma-none">${A.heading2}</h2>` }, h3: { cmd: "formatBlock", param: "H3", icon: R.heading3 || R.heading, tip: A.heading3, htmlTip: `<h3 class="q-ma-none">${A.heading3}</h3>` }, h4: { cmd: "formatBlock", param: "H4", icon: R.heading4 || R.heading, tip: A.heading4, htmlTip: `<h4 class="q-ma-none">${A.heading4}</h4>` }, h5: { cmd: "formatBlock", param: "H5", icon: R.heading5 || R.heading, tip: A.heading5, htmlTip: `<h5 class="q-ma-none">${A.heading5}</h5>` }, h6: { cmd: "formatBlock", param: "H6", icon: R.heading6 || R.heading, tip: A.heading6, htmlTip: `<h6 class="q-ma-none">${A.heading6}</h6>` }, p: { cmd: "formatBlock", param: e.paragraphTag, icon: R.heading, tip: A.paragraph }, code: { cmd: "formatBlock", param: "PRE", icon: R.code, htmlTip: `<code>${A.code}</code>` }, "size-1": { cmd: "fontSize", param: "1", icon: R.size1 || R.size, tip: A.size1, htmlTip: `<font size="1">${A.size1}</font>` }, "size-2": { cmd: "fontSize", param: "2", icon: R.size2 || R.size, tip: A.size2, htmlTip: `<font size="2">${A.size2}</font>` }, "size-3": { cmd: "fontSize", param: "3", icon: R.size3 || R.size, tip: A.size3, htmlTip: `<font size="3">${A.size3}</font>` }, "size-4": { cmd: "fontSize", param: "4", icon: R.size4 || R.size, tip: A.size4, htmlTip: `<font size="4">${A.size4}</font>` }, "size-5": { cmd: "fontSize", param: "5", icon: R.size5 || R.size, tip: A.size5, htmlTip: `<font size="5">${A.size5}</font>` }, "size-6": { cmd: "fontSize", param: "6", icon: R.size6 || R.size, tip: A.size6, htmlTip: `<font size="6">${A.size6}</font>` }, "size-7": { cmd: "fontSize", param: "7", icon: R.size7 || R.size, tip: A.size7, htmlTip: `<font size="7">${A.size7}</font>` } };
  }), b = v(() => {
    const A = e.definitions || {}, R = e.definitions || e.fonts ? Ch(true, {}, y.value, A, o1(g, r.lang.editor.defaultFont, r.iconSet.editor.font, e.fonts)) : y.value;
    return e.toolbar.map((G) => G.map((O) => {
      if (O.options) return { type: "dropdown", icon: O.icon, label: O.label, size: "sm", dense: true, fixedLabel: O.fixedLabel, fixedIcon: O.fixedIcon, highlight: O.highlight, list: O.list, options: O.options.map((be) => R[be]) };
      const ne = R[O];
      return ne ? ne.type === "no-state" || A[O] && (ne.cmd === void 0 || y.value[ne.cmd] && y.value[ne.cmd].type === "no-state") ? ne : Object.assign({ type: "toggle" }, ne) : { type: "slot", slot: O };
    }));
  }), C = { $q: r, props: e, slots: t, emit: n, inFullscreen: o, toggleFullscreen: i, runCmd: _, isViewingSource: h, editLinkUrl: f, toolbarBackgroundClass: T, buttonProps: p, contentRef: s, buttons: b, setContent: Y };
  ge(() => e.modelValue, (A) => {
    x !== A && (x = A, Y(A, true));
  }), ge(f, (A) => {
    n(`link${A ? "Show" : "Hide"}`);
  });
  const $ = v(() => e.toolbar && e.toolbar.length !== 0), F = v(() => {
    const A = {}, R = (G) => {
      G.key && (A[G.key] = { cmd: G.cmd, param: G.param });
    };
    return b.value.forEach((G) => {
      G.forEach((O) => {
        O.options ? O.options.forEach(R) : R(O);
      });
    }), A;
  }), N = v(() => o.value ? e.contentStyle : [{ minHeight: e.minHeight, height: e.height, maxHeight: e.maxHeight }, e.contentStyle]), B = v(() => `q-editor q-editor--${h.value === true ? "source" : "default"}` + (e.disable === true ? " disabled" : "") + (o.value === true ? " fullscreen column" : "") + (e.square === true ? " q-editor--square no-border-radius" : "") + (e.flat === true ? " q-editor--flat" : "") + (e.dense === true ? " q-editor--dense" : "") + (a.value === true ? " q-editor--dark q-dark" : "")), L = v(() => [e.contentClass, "q-editor__content", { col: o.value, "overflow-auto": o.value || e.maxHeight }]), z = v(() => e.disable === true ? { "aria-disabled": "true" } : {});
  function q() {
    if (s.value !== null) {
      const A = `inner${h.value === true ? "Text" : "HTML"}`, R = s.value[A];
      R !== e.modelValue && (x = R, n("update:modelValue", R));
    }
  }
  function E(A) {
    if (n("keydown", A), A.ctrlKey !== true || Yl(A) === true) {
      H();
      return;
    }
    const R = A.keyCode, G = F.value[R];
    if (G !== void 0) {
      const { cmd: O, param: ne } = G;
      je(A), _(O, ne, false);
    }
  }
  function k(A) {
    H(), n("click", A);
  }
  function j(A) {
    if (s.value !== null) {
      const { scrollTop: R, scrollHeight: G } = s.value;
      w = G - R;
    }
    C.caret.save(), n("blur", A);
  }
  function Q(A) {
    We(() => {
      s.value !== null && w !== void 0 && (s.value.scrollTop = s.value.scrollHeight - w);
    }), n("focus", A);
  }
  function W(A) {
    const R = c.value;
    if (R !== null && R.contains(A.target) === true && (A.relatedTarget === null || R.contains(A.relatedTarget) !== true)) {
      const G = `inner${h.value === true ? "Text" : "HTML"}`;
      C.caret.restorePosition(s.value[G].length), H();
    }
  }
  function X(A) {
    const R = c.value;
    R !== null && R.contains(A.target) === true && (A.relatedTarget === null || R.contains(A.relatedTarget) !== true) && (C.caret.savePosition(), H());
  }
  function re() {
    w = void 0;
  }
  function pe(A) {
    C.caret.save();
  }
  function Y(A, R) {
    if (s.value !== null) {
      R === true && C.caret.savePosition();
      const G = `inner${h.value === true ? "Text" : "HTML"}`;
      s.value[G] = A, R === true && (C.caret.restorePosition(s.value[G].length), H());
    }
  }
  function _(A, R, G = true) {
    V(), C.caret.restore(), C.caret.apply(A, R, () => {
      V(), C.caret.save(), G && H();
    });
  }
  function H() {
    setTimeout(() => {
      f.value = null, l.$forceUpdate();
    }, 1);
  }
  function V() {
    Br(() => {
      var _a3;
      (_a3 = s.value) == null ? void 0 : _a3.focus({ preventScroll: true });
    });
  }
  function fe() {
    return s.value;
  }
  return ft(() => {
    C.caret = l.caret = new n1(s.value, C), Y(e.modelValue), H(), document.addEventListener("selectionchange", pe);
  }), Ke(() => {
    document.removeEventListener("selectionchange", pe);
  }), Object.assign(l, { runCmd: _, refreshToolbar: H, focus: V, getContentEl: fe }), () => {
    let A;
    if ($.value) {
      const R = [d("div", { key: "qedt_top", class: "q-editor__toolbar row no-wrap scroll-x" + T.value }, a1(C))];
      f.value !== null && R.push(d("div", { key: "qedt_btm", class: "q-editor__toolbar row no-wrap items-center scroll-x" + T.value }, i1(C))), A = d("div", { key: "toolbar_ctainer", class: "q-editor__toolbars-container" }, R);
    }
    return d("div", { ref: c, class: B.value, style: { height: o.value === true ? "100%" : null }, ...z.value, onFocusin: W, onFocusout: X }, [A, d("div", { ref: s, style: N.value, class: L.value, contenteditable: m.value, placeholder: e.placeholder, ...u.listeners.value, onInput: q, onKeydown: E, onClick: k, onBlur: j, onFocus: Q, onMousedown: re, onTouchstartPassive: re })]);
  };
} });
var Uu = he({ name: "QItemLabel", props: { overline: Boolean, caption: Boolean, header: Boolean, lines: [Number, String] }, setup(e, { slots: t }) {
  const n = v(() => parseInt(e.lines, 10)), l = v(() => "q-item__label" + (e.overline === true ? " q-item__label--overline text-overline" : "") + (e.caption === true ? " q-item__label--caption text-caption" : "") + (e.header === true ? " q-item__label--header" : "") + (n.value === 1 ? " ellipsis" : "")), r = v(() => e.lines !== void 0 && n.value > 1 ? { overflow: "hidden", display: "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": n.value } : null);
  return () => d("div", { style: r.value, class: l.value }, $e(t.default));
} }), Us = he({ name: "QSlideTransition", props: { appear: Boolean, duration: { type: Number, default: 300 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: n }) {
  let l = false, r, a, o = null, i = null, u, c;
  function s() {
    r == null ? void 0 : r(), r = null, l = false, o !== null && (clearTimeout(o), o = null), i !== null && (clearTimeout(i), i = null), a == null ? void 0 : a.removeEventListener("transitionend", u), u = null;
  }
  function f(w, x, T) {
    x !== void 0 && (w.style.height = `${x}px`), w.style.transition = `height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`, l = true, r = T;
  }
  function h(w, x) {
    w.style.overflowY = null, w.style.height = null, w.style.transition = null, s(), x !== c && n(x);
  }
  function m(w, x) {
    let T = 0;
    a = w, l === true ? (s(), T = w.offsetHeight === w.scrollHeight ? 0 : void 0) : (c = "hide", w.style.overflowY = "hidden"), f(w, T, x), o = setTimeout(() => {
      o = null, w.style.height = `${w.scrollHeight}px`, u = (p) => {
        i = null, (Object(p) !== p || p.target === w) && h(w, "show");
      }, w.addEventListener("transitionend", u), i = setTimeout(u, e.duration * 1.1);
    }, 100);
  }
  function g(w, x) {
    let T;
    a = w, l === true ? s() : (c = "show", w.style.overflowY = "hidden", T = w.scrollHeight), f(w, T, x), o = setTimeout(() => {
      o = null, w.style.height = 0, u = (p) => {
        i = null, (Object(p) !== p || p.target === w) && h(w, "hide");
      }, w.addEventListener("transitionend", u), i = setTimeout(u, e.duration * 1.1);
    }, 100);
  }
  return Ke(() => {
    l === true && s();
  }), () => d(Ft, { css: false, appear: e.appear, onEnter: m, onLeave: g }, t.default);
} }), c1 = { true: "inset", item: "item-inset", "item-thumbnail": "item-thumbnail-inset" }, Ji = { xs: 2, sm: 4, md: 8, lg: 16, xl: 24 }, Ql = he({ name: "QSeparator", props: { ...nt, spaced: [Boolean, String], inset: [Boolean, String], vertical: Boolean, color: String, size: String }, setup(e) {
  const t = xe(), n = lt(e, t.proxy.$q), l = v(() => e.vertical === true ? "vertical" : "horizontal"), r = v(() => ` q-separator--${l.value}`), a = v(() => e.inset !== false ? `${r.value}-${c1[e.inset]}` : ""), o = v(() => `q-separator${r.value}${a.value}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (n.value === true ? " q-separator--dark" : "")), i = v(() => {
    const u = {};
    if (e.size !== void 0 && (u[e.vertical === true ? "width" : "height"] = e.size), e.spaced !== false) {
      const c = e.spaced === true ? `${Ji.md}px` : e.spaced in Ji ? `${Ji[e.spaced]}px` : e.spaced, s = e.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
      u[`margin${s[0]}`] = u[`margin${s[1]}`] = c;
    }
    return u;
  });
  return () => d("hr", { class: o.value, style: i.value, "aria-orientation": l.value });
} }), El = cs({}), d1 = Object.keys(Pa);
he({ name: "QExpansionItem", props: { ...Pa, ...Ar, ...nt, icon: String, label: String, labelLines: [Number, String], caption: String, captionLines: [Number, String], dense: Boolean, toggleAriaLabel: String, expandIcon: String, expandedIcon: String, expandIconClass: [Array, String, Object], duration: {}, headerInsetLevel: Number, contentInsetLevel: Number, expandSeparator: Boolean, defaultOpened: Boolean, hideExpandIcon: Boolean, expandIconToggle: Boolean, switchToggleSide: Boolean, denseToggle: Boolean, group: String, popup: Boolean, headerStyle: [Array, String, Object], headerClass: [Array, String, Object] }, emits: [...Pr, "click", "afterShow", "afterHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = xe(), r = lt(e, l), a = K(e.modelValue !== null ? e.modelValue : e.defaultOpened), o = K(null), i = fi(), { show: u, hide: c, toggle: s } = $r({ showing: a });
  let f, h;
  const m = v(() => `q-expansion-item q-item-type q-expansion-item--${a.value === true ? "expanded" : "collapsed"} q-expansion-item--${e.popup === true ? "popup" : "standard"}`), g = v(() => e.contentInsetLevel === void 0 ? null : { ["padding" + (l.lang.rtl === true ? "Right" : "Left")]: e.contentInsetLevel * 56 + "px" }), w = v(() => e.disable !== true && (e.href !== void 0 || e.to !== void 0 && e.to !== null && e.to !== "")), x = v(() => {
    const W = {};
    return d1.forEach((X) => {
      W[X] = e[X];
    }), W;
  }), T = v(() => w.value === true || e.expandIconToggle !== true), p = v(() => e.expandedIcon !== void 0 && a.value === true ? e.expandedIcon : e.expandIcon || l.iconSet.expansionItem[e.denseToggle === true ? "denseIcon" : "icon"]), y = v(() => e.disable !== true && (w.value === true || e.expandIconToggle === true)), b = v(() => ({ expanded: a.value === true, detailsId: i.value, toggle: s, show: u, hide: c })), C = v(() => {
    const W = e.toggleAriaLabel !== void 0 ? e.toggleAriaLabel : l.lang.label[a.value === true ? "collapse" : "expand"](e.label);
    return { role: "button", "aria-expanded": a.value === true ? "true" : "false", "aria-controls": i.value, "aria-label": W };
  });
  ge(() => e.group, (W) => {
    h == null ? void 0 : h(), W !== void 0 && z();
  });
  function $(W) {
    w.value !== true && s(W), n("click", W);
  }
  function F(W) {
    W.keyCode === 13 && N(W, true);
  }
  function N(W, X) {
    var _a3;
    X !== true && W.qAvoidFocus !== true && ((_a3 = o.value) == null ? void 0 : _a3.focus()), s(W), je(W);
  }
  function B() {
    n("afterShow");
  }
  function L() {
    n("afterHide");
  }
  function z() {
    f === void 0 && (f = Sa()), a.value === true && (El[e.group] = f);
    const W = ge(a, (re) => {
      re === true ? El[e.group] = f : El[e.group] === f && delete El[e.group];
    }), X = ge(() => El[e.group], (re, pe) => {
      pe === f && re !== void 0 && re !== f && c();
    });
    h = () => {
      W(), X(), El[e.group] === f && delete El[e.group], h = void 0;
    };
  }
  function q() {
    const W = { class: [`q-focusable relative-position cursor-pointer${e.denseToggle === true && e.switchToggleSide === true ? " items-end" : ""}`, e.expandIconClass], side: e.switchToggleSide !== true, avatar: e.switchToggleSide }, X = [d(et, { class: "q-expansion-item__toggle-icon" + (e.expandedIcon === void 0 && a.value === true ? " q-expansion-item__toggle-icon--rotated" : ""), name: p.value })];
    return y.value === true && (Object.assign(W, { tabindex: 0, ...C.value, onClick: N, onKeyup: F }), X.unshift(d("div", { ref: o, class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded", tabindex: -1 }))), d(mn, W, () => X);
  }
  function E() {
    let W;
    return t.header !== void 0 ? W = [].concat(t.header(b.value)) : (W = [d(mn, () => [d(Uu, { lines: e.labelLines }, () => e.label || ""), e.caption ? d(Uu, { lines: e.captionLines, caption: true }, () => e.caption) : null])], e.icon && W[e.switchToggleSide === true ? "push" : "unshift"](d(mn, { side: e.switchToggleSide === true, avatar: e.switchToggleSide !== true }, () => d(et, { name: e.icon })))), e.disable !== true && e.hideExpandIcon !== true && W[e.switchToggleSide === true ? "unshift" : "push"](q()), W;
  }
  function k() {
    const W = { ref: "item", style: e.headerStyle, class: e.headerClass, dark: r.value, disable: e.disable, dense: e.dense, insetLevel: e.headerInsetLevel };
    return T.value === true && (W.clickable = true, W.onClick = $, Object.assign(W, w.value === true ? x.value : C.value)), d(kr, W, E);
  }
  function j() {
    return sn(d("div", { key: "e-content", class: "q-expansion-item__content relative-position", style: g.value, id: i.value }, $e(t.default)), [[Xv, a.value]]);
  }
  function Q() {
    const W = [k(), d(Us, { duration: e.duration, onShow: B, onHide: L }, j)];
    return e.expandSeparator === true && W.push(d(Ql, { class: "q-expansion-item__border q-expansion-item__border--top absolute-top", dark: r.value }), d(Ql, { class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom", dark: r.value })), W;
  }
  return e.group !== void 0 && z(), Ke(() => {
    h == null ? void 0 : h();
  }), () => d("div", { class: m.value }, [d("div", { class: "q-expansion-item__container relative-position" }, Q())]);
} });
var f1 = ["top", "right", "bottom", "left"], Qu = { type: { type: String, default: "a" }, outline: Boolean, push: Boolean, flat: Boolean, unelevated: Boolean, color: String, textColor: String, glossy: Boolean, square: Boolean, padding: String, label: { type: [String, Number], default: "" }, labelPosition: { type: String, default: "right", validator: (e) => f1.includes(e) }, externalLabel: Boolean, hideLabel: { type: Boolean }, labelClass: [Array, String, Object], labelStyle: [Array, String, Object], disable: Boolean, tabindex: [Number, String] };
function kh(e, t) {
  return { formClass: v(() => `q-fab--form-${e.square === true ? "square" : "rounded"}`), stacked: v(() => e.externalLabel === false && ["top", "bottom"].includes(e.labelPosition)), labelProps: v(() => {
    if (e.externalLabel === true) {
      const n = e.hideLabel === null ? t.value === false : e.hideLabel;
      return { action: "push", data: { class: [e.labelClass, `q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}` + (n === true ? " q-fab__label--external-hidden" : "")], style: e.labelStyle } };
    }
    return { action: ["left", "top"].includes(e.labelPosition) ? "unshift" : "push", data: { class: [e.labelClass, `q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}` + (e.hideLabel === true ? " q-fab__label--internal-hidden" : "")], style: e.labelStyle } };
  }) };
}
var v1 = ["up", "right", "down", "left"], m1 = ["left", "center", "right"];
he({ name: "QFab", props: { ...Qu, ...Ar, icon: String, activeIcon: String, hideIcon: Boolean, hideLabel: { ...Qu.hideLabel, default: null }, direction: { type: String, default: "right", validator: (e) => v1.includes(e) }, persistent: Boolean, verticalActionsAlign: { type: String, default: "center", validator: (e) => m1.includes(e) } }, emits: Pr, setup(e, { slots: t }) {
  const n = K(null), l = K(e.modelValue === true), r = fi(), { proxy: { $q: a } } = xe(), { formClass: o, labelProps: i } = kh(e, l), u = v(() => e.persistent !== true), { hide: c, toggle: s } = $r({ showing: l, hideOnRouteChange: u }), f = v(() => ({ opened: l.value })), h = v(() => `q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${o.value}` + (l.value === true ? " q-fab--opened" : " q-fab--closed")), m = v(() => `q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${l.value === true ? "opened" : "closed"}`), g = v(() => {
    const p = { id: r.value, role: "menu" };
    return l.value !== true && (p["aria-hidden"] = "true"), p;
  }), w = v(() => `q-fab__icon-holder  q-fab__icon-holder--${l.value === true ? "opened" : "closed"}`);
  function x(p, y) {
    const b = t[p], C = `q-fab__${p} absolute-full`;
    return b === void 0 ? d(et, { class: C, name: e[y] || a.iconSet.fab[y] }) : d("div", { class: C }, b(f.value));
  }
  function T() {
    const p = [];
    return e.hideIcon !== true && p.push(d("div", { class: w.value }, [x("icon", "icon"), x("active-icon", "activeIcon")])), (e.label !== "" || t.label !== void 0) && p[i.value.action](d("div", i.value.data, t.label !== void 0 ? t.label(f.value) : [e.label])), Tt(t.tooltip, p);
  }
  return hn(fm, { showing: l, onChildClick(p) {
    var _a3;
    c(p), (p == null ? void 0 : p.qAvoidFocus) !== true && ((_a3 = n.value) == null ? void 0 : _a3.$el.focus());
  } }), () => d("div", { class: h.value }, [d(Ze, { ref: n, class: o.value, ...e, noWrap: true, stack: e.stacked, align: void 0, icon: void 0, label: void 0, noCaps: true, fab: true, "aria-expanded": l.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": r.value, onClick: s }, T), d("div", { class: m.value, ...g.value }, $e(t.default))]);
} });
var Th = { start: "self-end", center: "self-center", end: "self-start" }, h1 = Object.keys(Th);
he({ name: "QFabAction", props: { ...Qu, icon: { type: String, default: "" }, anchor: { type: String, validator: (e) => h1.includes(e) }, to: [String, Object], replace: Boolean }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const l = qt(fm, () => ({ showing: { value: true }, onChildClick: xt })), { formClass: r, labelProps: a } = kh(e, l.showing), o = v(() => {
    const f = Th[e.anchor];
    return r.value + (f !== void 0 ? ` ${f}` : "");
  }), i = v(() => e.disable === true || l.showing.value !== true);
  function u(f) {
    l.onChildClick(f), n("click", f);
  }
  function c() {
    const f = [];
    return t.icon !== void 0 ? f.push(t.icon()) : e.icon !== "" && f.push(d(et, { name: e.icon })), (e.label !== "" || t.label !== void 0) && f[a.value.action](d("div", a.value.data, t.label !== void 0 ? t.label() : [e.label])), Tt(t.default, f);
  }
  const s = xe();
  return Object.assign(s.proxy, { click: u }), () => d(Ze, { class: o.value, ...e, noWrap: true, stack: e.stacked, icon: void 0, label: void 0, noCaps: true, fabMini: true, disable: i.value, onClick: u }, c);
} });
function g1({ validate: e, resetValidation: t, requiresQForm: n }) {
  const l = qt(vm, false);
  if (l !== false) {
    const { props: r, proxy: a } = xe();
    Object.assign(a, { validate: e, resetValidation: t }), ge(() => r.disable, (o) => {
      o === true ? (typeof t == "function" && t(), l.unbindComponent(a)) : l.bindComponent(a);
    }), ft(() => {
      r.disable !== true && l.bindComponent(a);
    }), Ke(() => {
      r.disable !== true && l.unbindComponent(a);
    });
  } else n === true && console.error("Parent QForm not found on useFormChild()!");
}
var b1 = [true, false, "ondemand"], y1 = { modelValue: {}, error: { type: Boolean, default: null }, errorMessage: String, noErrorIcon: Boolean, rules: Array, reactiveRules: Boolean, lazyRules: { type: [Boolean, String], default: false, validator: (e) => b1.includes(e) } };
function p1(e, t) {
  const { props: n, proxy: l } = xe(), r = K(false), a = K(null), o = K(false);
  g1({ validate: w, resetValidation: g });
  let i = 0, u;
  const c = v(() => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0), s = v(() => n.disable !== true && c.value === true && t.value === false), f = v(() => n.error === true || r.value === true), h = v(() => typeof n.errorMessage == "string" && n.errorMessage.length !== 0 ? n.errorMessage : a.value);
  ge(() => n.modelValue, () => {
    o.value = true, s.value === true && n.lazyRules === false && x();
  });
  function m() {
    n.lazyRules !== "ondemand" && s.value === true && o.value === true && x();
  }
  ge(() => n.reactiveRules, (T) => {
    T === true ? u === void 0 && (u = ge(() => n.rules, m, { immediate: true, deep: true })) : u !== void 0 && (u(), u = void 0);
  }, { immediate: true }), ge(() => n.lazyRules, m), ge(e, (T) => {
    T === true ? o.value = true : s.value === true && n.lazyRules !== "ondemand" && x();
  });
  function g() {
    i++, t.value = false, o.value = false, r.value = false, a.value = null, x.cancel();
  }
  function w(T = n.modelValue) {
    if (n.disable === true || c.value === false) return true;
    const p = ++i, y = t.value !== true ? () => {
      o.value = true;
    } : () => {
    }, b = ($, F) => {
      $ === true && y(), r.value = $, a.value = F || null, t.value = false;
    }, C = [];
    for (let $ = 0; $ < n.rules.length; $++) {
      const F = n.rules[$];
      let N;
      if (typeof F == "function" ? N = F(T, so) : typeof F == "string" && so[F] !== void 0 && (N = so[F](T)), N === false || typeof N == "string") return b(true, N), false;
      N !== true && N !== void 0 && C.push(N);
    }
    return C.length === 0 ? (b(false), true) : (t.value = true, Promise.all(C).then(($) => {
      if ($ === void 0 || Array.isArray($) === false || $.length === 0) return p === i && b(false), true;
      const F = $.find((N) => N === false || typeof N == "string");
      return p === i && b(F !== void 0, F), F === void 0;
    }, ($) => (p === i && (console.error($), b(true)), false)));
  }
  const x = Rr(w, 0);
  return Ke(() => {
    u == null ? void 0 : u(), x.cancel();
  }), Object.assign(l, { resetValidation: g, validate: w }), Ot(l, "hasError", () => f.value), { isDirtyModel: o, hasRules: c, hasError: f, errorMessage: h, validate: w, resetValidation: g };
}
function Kl(e) {
  return e != null && ("" + e).length !== 0;
}
var qh = { ...nt, ...y1, label: String, stackLabel: Boolean, hint: String, hideHint: Boolean, prefix: String, suffix: String, labelColor: String, color: String, bgColor: String, filled: Boolean, outlined: Boolean, borderless: Boolean, standout: [Boolean, String], square: Boolean, loading: Boolean, labelSlot: Boolean, bottomSlots: Boolean, hideBottomSpace: Boolean, rounded: Boolean, dense: Boolean, itemAligned: Boolean, counter: Boolean, clearable: Boolean, clearIcon: String, disable: Boolean, readonly: Boolean, autofocus: Boolean, for: String }, mi = { ...qh, maxlength: [Number, String] }, hi = ["update:modelValue", "clear", "focus", "blur"];
function gi({ requiredForAttr: e = true, tagProp: t, changeEvent: n = false } = {}) {
  const { props: l, proxy: r } = xe(), a = lt(l, r.$q), o = fi({ required: e, getValue: () => l.for });
  return { requiredForAttr: e, changeEvent: n, tag: t === true ? v(() => l.tag) : { value: "label" }, isDark: a, editable: v(() => l.disable !== true && l.readonly !== true), innerLoading: K(false), focused: K(false), hasPopupOpen: false, splitAttrs: Sh(), targetUid: o, rootRef: K(null), targetRef: K(null), controlRef: K(null) };
}
function bi(e) {
  const { props: t, emit: n, slots: l, attrs: r, proxy: a } = xe(), { $q: o } = a;
  let i = null;
  e.hasValue === void 0 && (e.hasValue = v(() => Kl(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (X) => {
    n("update:modelValue", X);
  }), e.controlEvents === void 0 && (e.controlEvents = { onFocusin: B, onFocusout: L }), Object.assign(e, { clearValue: z, onControlFocusin: B, onControlFocusout: L, focus: F }), e.computedCounter === void 0 && (e.computedCounter = v(() => {
    if (t.counter !== false) {
      const X = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === true ? t.modelValue.length : 0, re = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
      return X + (re !== void 0 ? " / " + re : "");
    }
  }));
  const { isDirtyModel: u, hasRules: c, hasError: s, errorMessage: f, resetValidation: h } = p1(e.focused, e.innerLoading), m = e.floatingLabel !== void 0 ? v(() => t.stackLabel === true || e.focused.value === true || e.floatingLabel.value === true) : v(() => t.stackLabel === true || e.focused.value === true || e.hasValue.value === true), g = v(() => t.bottomSlots === true || t.hint !== void 0 || c.value === true || t.counter === true || t.error !== null), w = v(() => t.filled === true ? "filled" : t.outlined === true ? "outlined" : t.borderless === true ? "borderless" : t.standout ? "standout" : "standard"), x = v(() => `q-field row no-wrap items-start q-field--${w.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === true ? " q-field--rounded" : "") + (t.square === true ? " q-field--square" : "") + (m.value === true ? " q-field--float" : "") + (p.value === true ? " q-field--labeled" : "") + (t.dense === true ? " q-field--dense" : "") + (t.itemAligned === true ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === true ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === true ? " q-field--focused" : "") + (s.value === true ? " q-field--error" : "") + (s.value === true || e.focused.value === true ? " q-field--highlighted" : "") + (t.hideBottomSpace !== true && g.value === true ? " q-field--with-bottom" : "") + (t.disable === true ? " q-field--disabled" : t.readonly === true ? " q-field--readonly" : "")), T = v(() => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (s.value === true ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === true ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")), p = v(() => t.labelSlot === true || t.label !== void 0), y = v(() => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && s.value !== true ? ` text-${t.labelColor}` : "")), b = v(() => ({ id: e.targetUid.value, editable: e.editable.value, focused: e.focused.value, floatingLabel: m.value, modelValue: t.modelValue, emitValue: e.emitValue })), C = v(() => {
    const X = {};
    return e.targetUid.value && (X.for = e.targetUid.value), t.disable === true && (X["aria-disabled"] = "true"), X;
  });
  function $() {
    var _a3;
    const X = document.activeElement;
    let re = (_a3 = e.targetRef) == null ? void 0 : _a3.value;
    re && (X === null || X.id !== e.targetUid.value) && (re.hasAttribute("tabindex") === true || (re = re.querySelector("[tabindex]")), re !== X && (re == null ? void 0 : re.focus({ preventScroll: true })));
  }
  function F() {
    Br($);
  }
  function N() {
    Jy($);
    const X = document.activeElement;
    X !== null && e.rootRef.value.contains(X) && X.blur();
  }
  function B(X) {
    i !== null && (clearTimeout(i), i = null), e.editable.value === true && e.focused.value === false && (e.focused.value = true, n("focus", X));
  }
  function L(X, re) {
    i !== null && clearTimeout(i), i = setTimeout(() => {
      i = null, !(document.hasFocus() === true && (e.hasPopupOpen === true || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement) !== false)) && (e.focused.value === true && (e.focused.value = false, n("blur", X)), re == null ? void 0 : re());
    });
  }
  function z(X) {
    var _a3;
    je(X), o.platform.is.mobile !== true ? (((_a3 = e.targetRef) == null ? void 0 : _a3.value) || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === true && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), n("update:modelValue", null), e.changeEvent === true && n("change", null), n("clear", t.modelValue), We(() => {
      const re = u.value;
      h(), u.value = re;
    });
  }
  function q(X) {
    [13, 32].includes(X.keyCode) && z(X);
  }
  function E() {
    const X = [];
    return l.prepend !== void 0 && X.push(d("div", { class: "q-field__prepend q-field__marginal row no-wrap items-center", key: "prepend", onClick: Vt }, l.prepend())), X.push(d("div", { class: "q-field__control-container col relative-position row no-wrap q-anchor--skip" }, k())), s.value === true && t.noErrorIcon === false && X.push(Q("error", [d(et, { name: o.iconSet.field.error, color: "negative" })])), t.loading === true || e.innerLoading.value === true ? X.push(Q("inner-loading-append", l.loading !== void 0 ? l.loading() : [d(_n, { color: t.color })])) : t.clearable === true && e.hasValue.value === true && e.editable.value === true && X.push(Q("inner-clearable-append", [d(et, { class: "q-field__focusable-action", name: t.clearIcon || o.iconSet.field.clear, tabindex: 0, role: "button", "aria-hidden": "false", "aria-label": o.lang.label.clear, onKeyup: q, onClick: z })])), l.append !== void 0 && X.push(d("div", { class: "q-field__append q-field__marginal row no-wrap items-center", key: "append", onClick: Vt }, l.append())), e.getInnerAppend !== void 0 && X.push(Q("inner-append", e.getInnerAppend())), e.getControlChild !== void 0 && X.push(e.getControlChild()), X;
  }
  function k() {
    const X = [];
    return t.prefix !== void 0 && t.prefix !== null && X.push(d("div", { class: "q-field__prefix no-pointer-events row items-center" }, t.prefix)), e.getShadowControl !== void 0 && e.hasShadow.value === true && X.push(e.getShadowControl()), e.getControl !== void 0 ? X.push(e.getControl()) : l.rawControl !== void 0 ? X.push(l.rawControl()) : l.control !== void 0 && X.push(d("div", { ref: e.targetRef, class: "q-field__native row", tabindex: -1, ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0 }, l.control(b.value))), p.value === true && X.push(d("div", { class: y.value }, $e(l.label, t.label))), t.suffix !== void 0 && t.suffix !== null && X.push(d("div", { class: "q-field__suffix no-pointer-events row items-center" }, t.suffix)), X.concat($e(l.default));
  }
  function j() {
    let X, re;
    s.value === true ? f.value !== null ? (X = [d("div", { role: "alert" }, f.value)], re = `q--slot-error-${f.value}`) : (X = $e(l.error), re = "q--slot-error") : (t.hideHint !== true || e.focused.value === true) && (t.hint !== void 0 ? (X = [d("div", t.hint)], re = `q--slot-hint-${t.hint}`) : (X = $e(l.hint), re = "q--slot-hint"));
    const pe = t.counter === true || l.counter !== void 0;
    if (t.hideBottomSpace === true && pe === false && X === void 0) return;
    const Y = d("div", { key: re, class: "q-field__messages col" }, X);
    return d("div", { class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== true ? "animated" : "stale"), onClick: Vt }, [t.hideBottomSpace === true ? Y : d(Ft, { name: "q-transition--field-message" }, () => Y), pe === true ? d("div", { class: "q-field__counter" }, l.counter !== void 0 ? l.counter() : e.computedCounter.value) : null]);
  }
  function Q(X, re) {
    return re === null ? null : d("div", { key: X, class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip" }, re);
  }
  let W = false;
  return Vn(() => {
    W = true;
  }), xl(() => {
    W === true && t.autofocus === true && a.focus();
  }), t.autofocus === true && ft(() => {
    a.focus();
  }), Ke(() => {
    i !== null && clearTimeout(i);
  }), Object.assign(a, { focus: F, blur: N }), function() {
    const re = e.getControl === void 0 && l.control === void 0 ? { ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0, ...C.value } : C.value;
    return d(e.tag.value, { ref: e.rootRef, class: [x.value, r.class], style: r.style, ...re }, [l.before !== void 0 ? d("div", { class: "q-field__before q-field__marginal row no-wrap items-center", onClick: Vt }, l.before()) : null, d("div", { class: "q-field__inner relative-position col self-stretch" }, [d("div", { ref: e.controlRef, class: T.value, tabindex: -1, ...e.controlEvents }, E()), g.value === true ? j() : null]), l.after !== void 0 ? d("div", { class: "q-field__after q-field__marginal row no-wrap items-center", onClick: Vt }, l.after()) : null]);
  };
}
var _1 = he({ name: "QField", inheritAttrs: false, props: { ...mi, tag: { type: String, default: "label" } }, emits: hi, setup() {
  return bi(gi({ tagProp: true }));
} });
function ar(e, t, n, l) {
  const r = [];
  return e.forEach((a) => {
    l(a) === true ? r.push(a) : t.push({ failedPropValidation: n, file: a });
  }), r;
}
function Xa(e) {
  (e == null ? void 0 : e.dataTransfer) && (e.dataTransfer.dropEffect = "copy"), je(e);
}
var Mh = { multiple: Boolean, accept: String, capture: String, maxFileSize: [Number, String], maxTotalSize: [Number, String], maxFiles: [Number, String], filter: Function }, Eh = ["rejected"];
function Rh({ editable: e, dnd: t, getFileInput: n, addFilesToQueue: l }) {
  const { props: r, emit: a, proxy: o } = xe(), i = K(null), u = v(() => r.accept !== void 0 ? r.accept.split(",").map((p) => (p = p.trim(), p === "*" ? "*/" : (p.endsWith("/*") && (p = p.slice(0, p.length - 1)), p.toUpperCase()))) : null), c = v(() => parseInt(r.maxFiles, 10)), s = v(() => parseInt(r.maxTotalSize, 10));
  function f(p) {
    var _a3;
    if (e.value) if (p !== Object(p) && (p = { target: null }), ((_a3 = p.target) == null ? void 0 : _a3.matches('input[type="file"]')) === true) p.clientX === 0 && p.clientY === 0 && wt(p);
    else {
      const y = n();
      y !== p.target && (y == null ? void 0 : y.click(p));
    }
  }
  function h(p) {
    e.value && p && l(null, p);
  }
  function m(p, y, b, C) {
    let $ = Array.from(y || p.target.files);
    const F = [], N = () => {
      F.length !== 0 && a("rejected", F);
    };
    if (r.accept !== void 0 && u.value.indexOf("*/") === -1 && ($ = ar($, F, "accept", (B) => u.value.some((L) => B.type.toUpperCase().startsWith(L) || B.name.toUpperCase().endsWith(L))), $.length === 0)) return N();
    if (r.maxFileSize !== void 0) {
      const B = parseInt(r.maxFileSize, 10);
      if ($ = ar($, F, "max-file-size", (L) => L.size <= B), $.length === 0) return N();
    }
    if (r.multiple !== true && $.length !== 0 && ($ = [$[0]]), $.forEach((B) => {
      B.__key = B.webkitRelativePath + B.lastModified + B.name + B.size;
    }), C === true) {
      const B = b.map((L) => L.__key);
      $ = ar($, F, "duplicate", (L) => B.includes(L.__key) === false);
    }
    if ($.length === 0) return N();
    if (r.maxTotalSize !== void 0) {
      let B = C === true ? b.reduce((L, z) => L + z.size, 0) : 0;
      if ($ = ar($, F, "max-total-size", (L) => (B += L.size, B <= s.value)), $.length === 0) return N();
    }
    if (typeof r.filter == "function") {
      const B = r.filter($);
      $ = ar($, F, "filter", (L) => B.includes(L));
    }
    if (r.maxFiles !== void 0) {
      let B = C === true ? b.length : 0;
      if ($ = ar($, F, "max-files", () => (B++, B <= c.value)), $.length === 0) return N();
    }
    if (N(), $.length !== 0) return $;
  }
  function g(p) {
    Xa(p), t.value !== true && (t.value = true);
  }
  function w(p) {
    je(p), (p.relatedTarget !== null || De.is.safari !== true ? p.relatedTarget !== i.value : document.elementsFromPoint(p.clientX, p.clientY).includes(i.value) === false) === true && (t.value = false);
  }
  function x(p) {
    Xa(p);
    const y = p.dataTransfer.files;
    y.length !== 0 && l(null, y), t.value = false;
  }
  function T(p) {
    if (t.value === true) return d("div", { ref: i, class: `q-${p}__dnd absolute-full`, onDragenter: Xa, onDragover: Xa, onDragleave: w, onDrop: x });
  }
  return Object.assign(o, { pickFiles: f, addFiles: h }), { pickFiles: f, addFiles: h, onDragover: g, onDragleave: w, processFiles: m, getDndNode: T, maxFilesNumber: c, maxTotalSizeNumber: s };
}
function Ah(e, t) {
  function n() {
    const l = e.modelValue;
    try {
      const r = "DataTransfer" in window ? new DataTransfer() : "ClipboardEvent" in window ? new ClipboardEvent("").clipboardData : void 0;
      return Object(l) === l && ("length" in l ? Array.from(l) : [l]).forEach((a) => {
        r.items.add(a);
      }), { files: r.files };
    } catch {
      return { files: void 0 };
    }
  }
  return v(t === true ? () => {
    if (e.type === "file") return n();
  } : n);
}
he({ name: "QFile", inheritAttrs: false, props: { ...qh, ...wn, ...Mh, modelValue: [File, FileList, Array], append: Boolean, useChips: Boolean, displayValue: [String, Number], tabindex: { type: [String, Number], default: 0 }, counterLabel: Function, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...hi, ...Eh], setup(e, { slots: t, emit: n, attrs: l }) {
  const { proxy: r } = xe(), a = gi(), o = K(null), i = K(false), u = Ps(e), { pickFiles: c, onDragover: s, onDragleave: f, processFiles: h, getDndNode: m } = Rh({ editable: a.editable, dnd: i, getFileInput: q, addFilesToQueue: E }), g = Ah(e), w = v(() => Object(e.modelValue) === e.modelValue ? "length" in e.modelValue ? Array.from(e.modelValue) : [e.modelValue] : []), x = v(() => Kl(w.value)), T = v(() => w.value.map((W) => W.name).join(", ")), p = v(() => Bu(w.value.reduce((W, X) => W + X.size, 0))), y = v(() => ({ totalSize: p.value, filesNumber: w.value.length, maxFiles: e.maxFiles })), b = v(() => ({ tabindex: -1, type: "file", title: "", accept: e.accept, capture: e.capture, name: u.value, ...l, id: a.targetUid.value, disabled: a.editable.value !== true })), C = v(() => "q-file q-field--auto-height" + (i.value === true ? " q-file--dnd" : "")), $ = v(() => e.multiple === true && e.append === true);
  function F(W) {
    const X = w.value.slice();
    X.splice(W, 1), B(X);
  }
  function N(W) {
    const X = w.value.indexOf(W);
    X !== -1 && F(X);
  }
  function B(W) {
    n("update:modelValue", e.multiple === true ? W : W[0]);
  }
  function L(W) {
    W.keyCode === 13 && Vt(W);
  }
  function z(W) {
    (W.keyCode === 13 || W.keyCode === 32) && c(W);
  }
  function q() {
    return o.value;
  }
  function E(W, X) {
    const re = h(W, X, w.value, $.value), pe = q();
    pe != null && (pe.value = ""), re !== void 0 && ((e.multiple === true ? e.modelValue && re.every((Y) => w.value.includes(Y)) : e.modelValue === re[0]) || B($.value === true ? w.value.concat(re) : re));
  }
  function k() {
    return [d("input", { class: [e.inputClass, "q-file__filler"], style: e.inputStyle })];
  }
  function j() {
    if (t.file !== void 0) return w.value.length === 0 ? k() : w.value.map((X, re) => t.file({ index: re, file: X, ref: this }));
    if (t.selected !== void 0) return w.value.length === 0 ? k() : t.selected({ files: w.value, ref: this });
    if (e.useChips === true) return w.value.length === 0 ? k() : w.value.map((X, re) => d(Wm, { key: "file-" + re, removable: a.editable.value, dense: true, textColor: e.color, tabindex: e.tabindex, onRemove: () => {
      F(re);
    } }, () => d("span", { class: "ellipsis", textContent: X.name })));
    const W = e.displayValue !== void 0 ? e.displayValue : T.value;
    return W.length !== 0 ? [d("div", { class: e.inputClass, style: e.inputStyle, textContent: W })] : k();
  }
  function Q() {
    const W = { ref: o, ...b.value, ...g.value, class: "q-field__input fit absolute-full cursor-pointer", onChange: E };
    return e.multiple === true && (W.multiple = true), d("input", W);
  }
  return Object.assign(a, { fieldClass: C, emitValue: B, hasValue: x, inputRef: o, innerValue: w, floatingLabel: v(() => x.value === true || Kl(e.displayValue)), computedCounter: v(() => {
    if (e.counterLabel !== void 0) return e.counterLabel(y.value);
    const W = e.maxFiles;
    return `${w.value.length}${W !== void 0 ? " / " + W : ""} (${p.value})`;
  }), getControlChild: () => m("file"), getControl: () => {
    const W = { ref: a.targetRef, class: "q-field__native row items-center cursor-pointer", tabindex: e.tabindex };
    return a.editable.value === true && Object.assign(W, { onDragover: s, onDragleave: f, onKeydown: L, onKeyup: z }), d("div", W, [Q()].concat(j()));
  } }), Object.assign(r, { removeAtIndex: F, removeFile: N, getNativeElement: () => o.value }), Ot(r, "nativeEl", () => o.value), bi(a);
} });
var w1 = he({ name: "QFooter", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = xe(), r = qt(Xl, ot);
  if (r === ot) return console.error("QFooter needs to be child of QLayout"), ot;
  const a = K(parseInt(e.heightHint, 10)), o = K(true), i = K(nn.value === true || r.isContainer.value === true ? 0 : window.innerHeight), u = v(() => e.reveal === true || r.view.value.indexOf("F") !== -1 || l.platform.is.ios && r.isContainer.value === true), c = v(() => r.isContainer.value === true ? r.containerHeight.value : i.value), s = v(() => {
    if (e.modelValue !== true) return 0;
    if (u.value === true) return o.value === true ? a.value : 0;
    const C = r.scroll.value.position + c.value + a.value - r.height.value;
    return C > 0 ? C : 0;
  }), f = v(() => e.modelValue !== true || u.value === true && o.value !== true), h = v(() => e.modelValue === true && f.value === true && e.reveal === true), m = v(() => "q-footer q-layout__section--marginal " + (u.value === true ? "fixed" : "absolute") + "-bottom" + (e.bordered === true ? " q-footer--bordered" : "") + (f.value === true ? " q-footer--hidden" : "") + (e.modelValue !== true ? " q-layout--prevent-focus" + (u.value !== true ? " hidden" : "") : "")), g = v(() => {
    const C = r.rows.value.bottom, $ = {};
    return C[0] === "l" && r.left.space === true && ($[l.lang.rtl === true ? "right" : "left"] = `${r.left.size}px`), C[2] === "r" && r.right.space === true && ($[l.lang.rtl === true ? "left" : "right"] = `${r.right.size}px`), $;
  });
  function w(C, $) {
    r.update("footer", C, $);
  }
  function x(C, $) {
    C.value !== $ && (C.value = $);
  }
  function T({ height: C }) {
    x(a, C), w("size", C);
  }
  function p() {
    if (e.reveal !== true) return;
    const { direction: C, position: $, inflectionPoint: F } = r.scroll.value;
    x(o, C === "up" || $ - F < 100 || r.height.value - c.value - $ - a.value < 300);
  }
  function y(C) {
    h.value === true && x(o, true), n("focusin", C);
  }
  ge(() => e.modelValue, (C) => {
    w("space", C), x(o, true), r.animate();
  }), ge(s, (C) => {
    w("offset", C);
  }), ge(() => e.reveal, (C) => {
    C === false && x(o, e.modelValue);
  }), ge(o, (C) => {
    r.animate(), n("reveal", C);
  }), ge([a, r.scroll, r.height], p), ge(() => l.screen.height, (C) => {
    r.isContainer.value !== true && x(i, C);
  });
  const b = {};
  return r.instances.footer = b, e.modelValue === true && w("size", a.value), w("space", e.modelValue), w("offset", s.value), Ke(() => {
    r.instances.footer === b && (r.instances.footer = void 0, w("size", 0), w("offset", 0), w("space", false));
  }), () => {
    const C = Tt(t.default, [d(Ul, { debounce: 0, onResize: T })]);
    return e.elevated === true && C.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), d("footer", { class: m.value, style: g.value, onFocusin: y }, C);
  };
} });
he({ name: "QForm", props: { autofocus: Boolean, noErrorFocus: Boolean, noResetFocus: Boolean, greedy: Boolean, onSubmit: Function }, emits: ["reset", "validationSuccess", "validationError"], setup(e, { slots: t, emit: n }) {
  const l = xe(), r = K(null);
  let a = 0;
  const o = [];
  function i(m) {
    const g = typeof m == "boolean" ? m : e.noErrorFocus !== true, w = ++a, x = (y, b) => {
      n(`validation${y === true ? "Success" : "Error"}`, b);
    }, T = (y) => {
      const b = y.validate();
      return typeof b.then == "function" ? b.then((C) => ({ valid: C, comp: y }), (C) => ({ valid: false, comp: y, err: C })) : Promise.resolve({ valid: b, comp: y });
    };
    return (e.greedy === true ? Promise.all(o.map(T)).then((y) => y.filter((b) => b.valid !== true)) : o.reduce((y, b) => y.then(() => T(b).then((C) => {
      if (C.valid === false) return Promise.reject(C);
    })), Promise.resolve()).catch((y) => [y])).then((y) => {
      if (y === void 0 || y.length === 0) return w === a && x(true), true;
      if (w === a) {
        const { comp: b, err: C } = y[0];
        if (C !== void 0 && console.error(C), x(false, b), g === true) {
          const $ = y.find(({ comp: F }) => typeof F.focus == "function" && gl(F.$) === false);
          $ !== void 0 && $.comp.focus();
        }
      }
      return false;
    });
  }
  function u() {
    a++, o.forEach((m) => {
      typeof m.resetValidation == "function" && m.resetValidation();
    });
  }
  function c(m) {
    m !== void 0 && je(m);
    const g = a + 1;
    i().then((w) => {
      g === a && w === true && (e.onSubmit !== void 0 ? n("submit", m) : (m == null ? void 0 : m.target) !== void 0 && typeof m.target.submit == "function" && m.target.submit());
    });
  }
  function s(m) {
    m !== void 0 && je(m), n("reset"), We(() => {
      u(), e.autofocus === true && e.noResetFocus !== true && f();
    });
  }
  function f() {
    Br(() => {
      var _a3;
      if (r.value === null) return;
      (_a3 = r.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || r.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || r.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(r.value.querySelectorAll("[tabindex]"), (g) => g.tabIndex !== -1)) == null ? void 0 : _a3.focus({ preventScroll: true });
    });
  }
  hn(vm, { bindComponent(m) {
    o.push(m);
  }, unbindComponent(m) {
    const g = o.indexOf(m);
    g !== -1 && o.splice(g, 1);
  } });
  let h = false;
  return Vn(() => {
    h = true;
  }), xl(() => {
    h === true && e.autofocus === true && f();
  }), ft(() => {
    e.autofocus === true && f();
  }), Object.assign(l.proxy, { validate: i, resetValidation: u, submit: c, reset: s, focus: f, getValidationComponents: () => o }), () => d("form", { class: "q-form", ref: r, onSubmit: c, onReset: s }, $e(t.default));
} });
var x1 = he({ name: "QHeader", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, revealOffset: { type: Number, default: 250 }, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = xe(), r = qt(Xl, ot);
  if (r === ot) return console.error("QHeader needs to be child of QLayout"), ot;
  const a = K(parseInt(e.heightHint, 10)), o = K(true), i = v(() => e.reveal === true || r.view.value.indexOf("H") !== -1 || l.platform.is.ios && r.isContainer.value === true), u = v(() => {
    if (e.modelValue !== true) return 0;
    if (i.value === true) return o.value === true ? a.value : 0;
    const p = a.value - r.scroll.value.position;
    return p > 0 ? p : 0;
  }), c = v(() => e.modelValue !== true || i.value === true && o.value !== true), s = v(() => e.modelValue === true && c.value === true && e.reveal === true), f = v(() => "q-header q-layout__section--marginal " + (i.value === true ? "fixed" : "absolute") + "-top" + (e.bordered === true ? " q-header--bordered" : "") + (c.value === true ? " q-header--hidden" : "") + (e.modelValue !== true ? " q-layout--prevent-focus" : "")), h = v(() => {
    const p = r.rows.value.top, y = {};
    return p[0] === "l" && r.left.space === true && (y[l.lang.rtl === true ? "right" : "left"] = `${r.left.size}px`), p[2] === "r" && r.right.space === true && (y[l.lang.rtl === true ? "left" : "right"] = `${r.right.size}px`), y;
  });
  function m(p, y) {
    r.update("header", p, y);
  }
  function g(p, y) {
    p.value !== y && (p.value = y);
  }
  function w({ height: p }) {
    g(a, p), m("size", p);
  }
  function x(p) {
    s.value === true && g(o, true), n("focusin", p);
  }
  ge(() => e.modelValue, (p) => {
    m("space", p), g(o, true), r.animate();
  }), ge(u, (p) => {
    m("offset", p);
  }), ge(() => e.reveal, (p) => {
    p === false && g(o, e.modelValue);
  }), ge(o, (p) => {
    r.animate(), n("reveal", p);
  }), ge(r.scroll, (p) => {
    e.reveal === true && g(o, p.direction === "up" || p.position <= e.revealOffset || p.position - p.inflectionPoint < 100);
  });
  const T = {};
  return r.instances.header = T, e.modelValue === true && m("size", a.value), m("space", e.modelValue), m("offset", u.value), Ke(() => {
    r.instances.header === T && (r.instances.header = void 0, m("size", 0), m("offset", 0), m("space", false));
  }), () => {
    const p = Aa(t.default, []);
    return e.elevated === true && p.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), p.push(d(Ul, { debounce: 0, onResize: w })), d("header", { class: f.value, style: h.value, onFocusin: x }, p);
  };
} }), Qs = { ratio: [String, Number] };
function Ks(e, t) {
  return v(() => {
    const n = Number(e.ratio || (t !== void 0 ? t.value : void 0));
    return isNaN(n) !== true && n > 0 ? { paddingBottom: `${100 / n}%` } : null;
  });
}
var S1 = 1.7778;
he({ name: "QImg", props: { ...Qs, src: String, srcset: String, sizes: String, alt: String, crossorigin: String, decoding: String, referrerpolicy: String, draggable: Boolean, loading: { type: String, default: "lazy" }, loadingShowDelay: { type: [Number, String], default: 0 }, fetchpriority: { type: String, default: "auto" }, width: String, height: String, initialRatio: { type: [Number, String], default: S1 }, placeholderSrc: String, errorSrc: String, fit: { type: String, default: "cover" }, position: { type: String, default: "50% 50%" }, imgClass: String, imgStyle: Object, noSpinner: Boolean, noNativeMenu: Boolean, noTransition: Boolean, spinnerColor: String, spinnerSize: String }, emits: ["load", "error"], setup(e, { slots: t, emit: n }) {
  const l = K(e.initialRatio), r = Ks(e, l), a = xe(), { registerTimeout: o, removeTimeout: i } = Zn(), { registerTimeout: u, removeTimeout: c } = Zn(), s = v(() => e.placeholderSrc !== void 0 ? { src: e.placeholderSrc } : null), f = v(() => e.errorSrc !== void 0 ? { src: e.errorSrc, __qerror: true } : null), h = [K(null), K(s.value)], m = K(0), g = K(false), w = K(false), x = v(() => `q-img q-img--${e.noNativeMenu === true ? "no-" : ""}menu`), T = v(() => ({ width: e.width, height: e.height })), p = v(() => `q-img__image ${e.imgClass !== void 0 ? e.imgClass + " " : ""}q-img__image--with${e.noTransition === true ? "out" : ""}-transition q-img__image--`), y = v(() => ({ ...e.imgStyle, objectFit: e.fit, objectPosition: e.position }));
  function b() {
    if (c(), e.loadingShowDelay === 0) {
      g.value = true;
      return;
    }
    u(() => {
      g.value = true;
    }, e.loadingShowDelay);
  }
  function C() {
    c(), g.value = false;
  }
  function $({ target: q }) {
    gl(a) === false && (i(), l.value = q.naturalHeight === 0 ? 0.5 : q.naturalWidth / q.naturalHeight, F(q, 1));
  }
  function F(q, E) {
    E === 1e3 || gl(a) === true || (q.complete === true ? N(q) : o(() => {
      F(q, E + 1);
    }, 50));
  }
  function N(q) {
    gl(a) !== true && (m.value = m.value ^ 1, h[m.value].value = null, C(), q.getAttribute("__qerror") !== "true" && (w.value = false), n("load", q.currentSrc || q.src));
  }
  function B(q) {
    i(), C(), w.value = true, h[m.value].value = f.value, h[m.value ^ 1].value = s.value, n("error", q);
  }
  function L(q) {
    const E = h[q].value, k = { key: "img_" + q, class: p.value, style: y.value, alt: e.alt, crossorigin: e.crossorigin, decoding: e.decoding, referrerpolicy: e.referrerpolicy, height: e.height, width: e.width, loading: e.loading, fetchpriority: e.fetchpriority, "aria-hidden": "true", draggable: e.draggable, ...E };
    return m.value === q ? Object.assign(k, { class: k.class + "current", onLoad: $, onError: B }) : k.class += "loaded", d("div", { class: "q-img__container absolute-full", key: "img" + q }, d("img", k));
  }
  function z() {
    return g.value === false ? d("div", { key: "content", class: "q-img__content absolute-full q-anchor--skip" }, $e(t[w.value === true ? "error" : "default"])) : d("div", { key: "loading", class: "q-img__loading absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : e.noSpinner === true ? void 0 : [d(_n, { color: e.spinnerColor, size: e.spinnerSize })]);
  }
  {
    let q = function() {
      ge(() => e.src || e.srcset || e.sizes ? { src: e.src, srcset: e.srcset, sizes: e.sizes } : null, (E) => {
        i(), w.value = false, E === null ? (C(), h[m.value ^ 1].value = s.value) : b(), h[m.value].value = E;
      }, { immediate: true });
    };
    nn.value === true ? ft(q) : q();
  }
  return () => {
    const q = [];
    return r.value !== null && q.push(d("div", { key: "filler", style: r.value })), h[0].value !== null && q.push(L(0)), h[1].value !== null && q.push(L(1)), q.push(d(Ft, { name: "q-transition--fade" }, z)), d("div", { key: "main", class: x.value, style: T.value, role: "img", "aria-label": e.alt }, q);
  };
} });
var { passive: Rl } = dt;
he({ name: "QInfiniteScroll", props: { offset: { type: Number, default: 500 }, debounce: { type: [String, Number], default: 100 }, scrollTarget: Gl, initialIndex: { type: Number, default: 0 }, disable: Boolean, reverse: Boolean }, emits: ["load"], setup(e, { slots: t, emit: n }) {
  const l = K(false), r = K(true), a = K(null), o = K(null);
  let i = e.initialIndex, u, c;
  const s = v(() => "q-infinite-scroll__loading" + (l.value === true ? "" : " invisible"));
  function f() {
    if (e.disable === true || l.value === true || r.value === false) return;
    const F = Na(u), N = bl(u), B = Sr(u);
    e.reverse === false ? Math.round(N + B + e.offset) >= Math.round(F) && h() : Math.round(N) <= e.offset && h();
  }
  function h() {
    if (e.disable === true || l.value === true || r.value === false) return;
    i++, l.value = true;
    const F = Na(u);
    n("load", i, (N) => {
      r.value === true && (l.value = false, We(() => {
        if (e.reverse === true) {
          const B = Na(u), L = bl(u), z = B - F;
          _r(u, L + z);
        }
        N === true ? w() : a.value && a.value.closest("body") && c();
      }));
    });
  }
  function m() {
    i = 0;
  }
  function g() {
    r.value === false && (r.value = true, u.addEventListener("scroll", c, Rl)), f();
  }
  function w() {
    var _a3;
    r.value === true && (r.value = false, l.value = false, u.removeEventListener("scroll", c, Rl), (_a3 = c == null ? void 0 : c.cancel) == null ? void 0 : _a3.call(c));
  }
  function x() {
    if (u && r.value === true && u.removeEventListener("scroll", c, Rl), u = Dn(a.value, e.scrollTarget), r.value === true) {
      if (u.addEventListener("scroll", c, Rl), e.reverse === true) {
        const F = Na(u), N = Sr(u);
        _r(u, F - N);
      }
      f();
    }
  }
  function T(F) {
    i = F;
  }
  function p(F) {
    F = parseInt(F, 10);
    const N = c;
    c = F <= 0 ? f : Rr(f, isNaN(F) === true ? 100 : F), u && r.value === true && (N !== void 0 && u.removeEventListener("scroll", N, Rl), u.addEventListener("scroll", c, Rl));
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
      Array.from(o.value.getElementsByTagName("svg")).forEach((B) => {
        B[N]();
      });
    }
  }
  const b = v(() => e.disable !== true && r.value === true);
  ge([l, b], () => {
    y();
  }), ge(() => e.disable, (F) => {
    F === true ? w() : g();
  }), ge(() => e.reverse, () => {
    l.value === false && r.value === true && f();
  }), ge(() => e.scrollTarget, x), ge(() => e.debounce, p);
  let C = false;
  xl(() => {
    C !== false && u && _r(u, C);
  }), Vn(() => {
    C = u ? bl(u) : false;
  }), Ke(() => {
    r.value === true && u.removeEventListener("scroll", c, Rl);
  }), ft(() => {
    p(e.debounce), x(), l.value === false && y();
  });
  const $ = xe();
  return Object.assign($.proxy, { poll: () => {
    c == null ? void 0 : c();
  }, trigger: h, stop: w, reset: m, resume: g, setIndex: T, updateScrollTarget: x }), () => {
    const F = Aa(t.default, []);
    return b.value === true && F[e.reverse === false ? "push" : "unshift"](d("div", { ref: o, class: s.value }, $e(t.loading))), d("div", { class: "q-infinite-scroll", ref: a }, F);
  };
} });
he({ name: "QInnerLoading", props: { ...nt, ...Il, showing: Boolean, color: String, size: { type: [String, Number], default: "42px" }, label: String, labelClass: String, labelStyle: [String, Array, Object] }, setup(e, { slots: t }) {
  const n = xe(), l = lt(e, n.proxy.$q), { transitionProps: r, transitionStyle: a } = si(e), o = v(() => "q-inner-loading q--avoid-card-border absolute-full column flex-center" + (l.value === true ? " q-inner-loading--dark" : "")), i = v(() => "q-inner-loading__label" + (e.labelClass !== void 0 ? ` ${e.labelClass}` : ""));
  function u() {
    const s = [d(_n, { size: e.size, color: e.color })];
    return e.label !== void 0 && s.push(d("div", { class: i.value, style: e.labelStyle }, [e.label])), s;
  }
  function c() {
    return e.showing === true ? d("div", { class: o.value, style: a.value }, t.default !== void 0 ? t.default() : u()) : null;
  }
  return () => d(Ft, r.value, c);
} });
var Rd = { date: "####/##/##", datetime: "####/##/## ##:##", time: "##:##", fulltime: "##:##:##", phone: "(###) ### - ####", card: "#### #### #### ####" }, Io = { "#": { pattern: "[\\d]", negate: "[^\\d]" }, S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" }, N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" }, A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleLowerCase() }, X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleLowerCase() } }, Ph = Object.keys(Io);
Ph.forEach((e) => {
  Io[e].regex = new RegExp(Io[e].pattern);
});
var C1 = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + Ph.join("") + "])|(.)", "g"), Ad = /[.*+?^${}()|[\]\\]/g, Bt = "", k1 = { mask: String, reverseFillMask: Boolean, fillMask: [Boolean, String], unmaskedValue: Boolean };
function T1(e, t, n, l) {
  let r, a, o, i, u, c;
  const s = K(null), f = K(m());
  function h() {
    return e.autogrow === true || ["textarea", "text", "search", "url", "tel", "password"].includes(e.type);
  }
  ge(() => e.type + e.autogrow, w), ge(() => e.mask, (B) => {
    if (B !== void 0) x(f.value, true);
    else {
      const L = F(f.value);
      w(), e.modelValue !== L && t("update:modelValue", L);
    }
  }), ge(() => e.fillMask + e.reverseFillMask, () => {
    s.value === true && x(f.value, true);
  }), ge(() => e.unmaskedValue, () => {
    s.value === true && x(f.value);
  });
  function m() {
    if (w(), s.value === true) {
      const B = C(F(e.modelValue));
      return e.fillMask !== false ? N(B) : B;
    }
    return e.modelValue;
  }
  function g(B) {
    if (B < r.length) return r.slice(-B);
    let L = "", z = r;
    const q = z.indexOf(Bt);
    if (q !== -1) {
      for (let E = B - z.length; E > 0; E--) L += Bt;
      z = z.slice(0, q) + L + z.slice(q);
    }
    return z;
  }
  function w() {
    if (s.value = e.mask !== void 0 && e.mask.length !== 0 && h(), s.value === false) {
      i = void 0, r = "", a = "";
      return;
    }
    const B = Rd[e.mask] === void 0 ? e.mask : Rd[e.mask], L = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_", z = L.replace(Ad, "\\$&"), q = [], E = [], k = [];
    let j = e.reverseFillMask === true, Q = "", W = "";
    B.replace(C1, (Y, _, H, V, fe) => {
      if (V !== void 0) {
        const A = Io[V];
        k.push(A), W = A.negate, j === true && (E.push("(?:" + W + "+)?(" + A.pattern + "+)?(?:" + W + "+)?(" + A.pattern + "+)?"), j = false), E.push("(?:" + W + "+)?(" + A.pattern + ")?");
      } else if (H !== void 0) Q = "\\" + (H === "\\" ? "" : H), k.push(H), q.push("([^" + Q + "]+)?" + Q + "?");
      else {
        const A = _ !== void 0 ? _ : fe;
        Q = A === "\\" ? "\\\\\\\\" : A.replace(Ad, "\\\\$&"), k.push(A), q.push("([^" + Q + "]+)?" + Q + "?");
      }
    });
    const X = new RegExp("^" + q.join("") + "(" + (Q === "" ? "." : "[^" + Q + "]") + "+)?" + (Q === "" ? "" : "[" + Q + "]*") + "$"), re = E.length - 1, pe = E.map((Y, _) => _ === 0 && e.reverseFillMask === true ? new RegExp("^" + z + "*" + Y) : _ === re ? new RegExp("^" + Y + "(" + (W === "" ? "." : W) + "+)?" + (e.reverseFillMask === true ? "$" : z + "*")) : new RegExp("^" + Y));
    o = k, i = (Y) => {
      const _ = X.exec(e.reverseFillMask === true ? Y : Y.slice(0, k.length + 1));
      _ !== null && (Y = _.slice(1).join(""));
      const H = [], V = pe.length;
      for (let fe = 0, A = Y; fe < V; fe++) {
        const R = pe[fe].exec(A);
        if (R === null) break;
        A = A.slice(R.shift().length), H.push(...R);
      }
      return H.length !== 0 ? H.join("") : Y;
    }, r = k.map((Y) => typeof Y == "string" ? Y : Bt).join(""), a = r.split(Bt).join(L);
  }
  function x(B, L, z) {
    const q = l.value, E = q.selectionEnd, k = q.value.length - E, j = F(B);
    L === true && w();
    const Q = C(j), W = e.fillMask !== false ? N(Q) : Q, X = f.value !== W;
    q.value !== W && (q.value = W), X === true && (f.value = W), document.activeElement === q && We(() => {
      if (W === a) {
        const pe = e.reverseFillMask === true ? a.length : 0;
        q.setSelectionRange(pe, pe, "forward");
        return;
      }
      if (z === "insertFromPaste" && e.reverseFillMask !== true) {
        const pe = q.selectionEnd;
        let Y = E - 1;
        for (let _ = u; _ <= Y && _ < pe; _++) r[_] !== Bt && Y++;
        p.right(q, Y);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(z) !== -1) {
        const pe = e.reverseFillMask === true ? E === 0 ? W.length > Q.length ? 1 : 0 : Math.max(0, W.length - (W === a ? 0 : Math.min(Q.length, k) + 1)) + 1 : E;
        q.setSelectionRange(pe, pe, "forward");
        return;
      }
      if (e.reverseFillMask === true) if (X === true) {
        const pe = Math.max(0, W.length - (W === a ? 0 : Math.min(Q.length, k + 1)));
        pe === 1 && E === 1 ? q.setSelectionRange(pe, pe, "forward") : p.rightReverse(q, pe);
      } else {
        const pe = W.length - k;
        q.setSelectionRange(pe, pe, "backward");
      }
      else if (X === true) {
        const pe = Math.max(0, r.indexOf(Bt), Math.min(Q.length, E) - 1);
        p.right(q, pe);
      } else {
        const pe = E - 1;
        p.right(q, pe);
      }
    });
    const re = e.unmaskedValue === true ? F(W) : W;
    String(e.modelValue) !== re && (e.modelValue !== null || re !== "") && n(re, true);
  }
  function T(B, L, z) {
    const q = C(F(B.value));
    L = Math.max(0, r.indexOf(Bt), Math.min(q.length, L)), u = L, B.setSelectionRange(L, z, "forward");
  }
  const p = { left(B, L) {
    const z = r.slice(L - 1).indexOf(Bt) === -1;
    let q = Math.max(0, L - 1);
    for (; q >= 0; q--) if (r[q] === Bt) {
      L = q, z === true && L++;
      break;
    }
    if (q < 0 && r[L] !== void 0 && r[L] !== Bt) return p.right(B, 0);
    L >= 0 && B.setSelectionRange(L, L, "backward");
  }, right(B, L) {
    const z = B.value.length;
    let q = Math.min(z, L + 1);
    for (; q <= z; q++) if (r[q] === Bt) {
      L = q;
      break;
    } else r[q - 1] === Bt && (L = q);
    if (q > z && r[L - 1] !== void 0 && r[L - 1] !== Bt) return p.left(B, z);
    B.setSelectionRange(L, L, "forward");
  }, leftReverse(B, L) {
    const z = g(B.value.length);
    let q = Math.max(0, L - 1);
    for (; q >= 0; q--) if (z[q - 1] === Bt) {
      L = q;
      break;
    } else if (z[q] === Bt && (L = q, q === 0)) break;
    if (q < 0 && z[L] !== void 0 && z[L] !== Bt) return p.rightReverse(B, 0);
    L >= 0 && B.setSelectionRange(L, L, "backward");
  }, rightReverse(B, L) {
    const z = B.value.length, q = g(z), E = q.slice(0, L + 1).indexOf(Bt) === -1;
    let k = Math.min(z, L + 1);
    for (; k <= z; k++) if (q[k - 1] === Bt) {
      L = k, L > 0 && E === true && L--;
      break;
    }
    if (k > z && q[L - 1] !== void 0 && q[L - 1] !== Bt) return p.leftReverse(B, z);
    B.setSelectionRange(L, L, "forward");
  } };
  function y(B) {
    t("click", B), c = void 0;
  }
  function b(B) {
    if (t("keydown", B), Yl(B) === true || B.altKey === true) return;
    const L = l.value, z = L.selectionStart, q = L.selectionEnd;
    if (B.shiftKey || (c = void 0), B.keyCode === 37 || B.keyCode === 39) {
      B.shiftKey && c === void 0 && (c = L.selectionDirection === "forward" ? z : q);
      const E = p[(B.keyCode === 39 ? "right" : "left") + (e.reverseFillMask === true ? "Reverse" : "")];
      if (B.preventDefault(), E(L, c === z ? q : z), B.shiftKey) {
        const k = L.selectionStart;
        L.setSelectionRange(Math.min(c, k), Math.max(c, k), "forward");
      }
    } else B.keyCode === 8 && e.reverseFillMask !== true && z === q ? (p.left(L, z), L.setSelectionRange(L.selectionStart, q, "backward")) : B.keyCode === 46 && e.reverseFillMask === true && z === q && (p.rightReverse(L, q), L.setSelectionRange(z, L.selectionEnd, "forward"));
  }
  function C(B) {
    if (B == null || B === "") return "";
    if (e.reverseFillMask === true) return $(B);
    const L = o;
    let z = 0, q = "";
    for (let E = 0; E < L.length; E++) {
      const k = B[z], j = L[E];
      if (typeof j == "string") q += j, k === j && z++;
      else if (k !== void 0 && j.regex.test(k)) q += j.transform !== void 0 ? j.transform(k) : k, z++;
      else return q;
    }
    return q;
  }
  function $(B) {
    const L = o, z = r.indexOf(Bt);
    let q = B.length - 1, E = "";
    for (let k = L.length - 1; k >= 0 && q !== -1; k--) {
      const j = L[k];
      let Q = B[q];
      if (typeof j == "string") E = j + E, Q === j && q--;
      else if (Q !== void 0 && j.regex.test(Q)) do
        E = (j.transform !== void 0 ? j.transform(Q) : Q) + E, q--, Q = B[q];
      while (z === k && Q !== void 0 && j.regex.test(Q));
      else return E;
    }
    return E;
  }
  function F(B) {
    return typeof B != "string" || i === void 0 ? typeof B == "number" ? i("" + B) : B : i(B);
  }
  function N(B) {
    return a.length - B.length <= 0 ? B : e.reverseFillMask === true && B.length !== 0 ? a.slice(0, -B.length) + B : B + a.slice(B.length);
  }
  return { innerValue: f, hasMask: s, moveCursorForPaste: T, updateMaskValue: x, onMaskedKeydown: b, onMaskedClick: y };
}
var q1 = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/, M1 = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u, E1 = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/, R1 = /[a-z0-9_ -]$/i;
function $h(e) {
  return function(n) {
    if (n.type === "compositionend" || n.type === "change") {
      if (n.target.qComposing !== true) return;
      n.target.qComposing = false, e(n);
    } else n.type === "compositionupdate" && n.target.qComposing !== true && typeof n.data == "string" && (De.is.firefox === true ? R1.test(n.data) === false : q1.test(n.data) === true || M1.test(n.data) === true || E1.test(n.data) === true) === true && (n.target.qComposing = true);
  };
}
var Bh = he({ name: "QInput", inheritAttrs: false, props: { ...mi, ...k1, ...wn, modelValue: [String, Number, FileList], shadowText: String, type: { type: String, default: "text" }, debounce: [String, Number], autogrow: Boolean, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...hi, "paste", "change", "keydown", "click", "animationend"], setup(e, { emit: t, attrs: n }) {
  const { proxy: l } = xe(), { $q: r } = l, a = {};
  let o = NaN, i, u, c = null, s;
  const f = K(null), h = Ps(e), { innerValue: m, hasMask: g, moveCursorForPaste: w, updateMaskValue: x, onMaskedKeydown: T, onMaskedClick: p } = T1(e, t, Q, f), y = Ah(e, true), b = v(() => Kl(m.value)), C = $h(k), $ = gi({ changeEvent: true }), F = v(() => e.type === "textarea" || e.autogrow === true), N = v(() => F.value === true || ["text", "search", "url", "tel", "password"].includes(e.type)), B = v(() => {
    const _ = { ...$.splitAttrs.listeners.value, onInput: k, onPaste: E, onChange: X, onBlur: re, onFocus: wt };
    return _.onCompositionstart = _.onCompositionupdate = _.onCompositionend = C, g.value === true && (_.onKeydown = T, _.onClick = p), e.autogrow === true && (_.onAnimationend = j), _;
  }), L = v(() => {
    const _ = { tabindex: 0, "data-autofocus": e.autofocus === true || void 0, rows: e.type === "textarea" ? 6 : void 0, "aria-label": e.label, name: h.value, ...$.splitAttrs.attributes.value, id: $.targetUid.value, maxlength: e.maxlength, disabled: e.disable === true, readonly: e.readonly === true };
    return F.value === false && (_.type = e.type), e.autogrow === true && (_.rows = 1), _;
  });
  ge(() => e.type, () => {
    f.value && (f.value.value = e.modelValue);
  }), ge(() => e.modelValue, (_) => {
    if (g.value === true) {
      if (u === true && (u = false, String(_) === o)) return;
      x(_);
    } else m.value !== _ && (m.value = _, e.type === "number" && a.hasOwnProperty("value") === true && (i === true ? i = false : delete a.value));
    e.autogrow === true && We(W);
  }), ge(() => e.autogrow, (_) => {
    _ === true ? We(W) : f.value !== null && n.rows > 0 && (f.value.style.height = "auto");
  }), ge(() => e.dense, () => {
    e.autogrow === true && We(W);
  });
  function z() {
    Br(() => {
      const _ = document.activeElement;
      f.value !== null && f.value !== _ && (_ === null || _.id !== $.targetUid.value) && f.value.focus({ preventScroll: true });
    });
  }
  function q() {
    var _a3;
    (_a3 = f.value) == null ? void 0 : _a3.select();
  }
  function E(_) {
    if (g.value === true && e.reverseFillMask !== true) {
      const H = _.target;
      w(H, H.selectionStart, H.selectionEnd);
    }
    t("paste", _);
  }
  function k(_) {
    if (!_ || !_.target) return;
    if (e.type === "file") {
      t("update:modelValue", _.target.files);
      return;
    }
    const H = _.target.value;
    if (_.target.qComposing === true) {
      a.value = H;
      return;
    }
    if (g.value === true) x(H, false, _.inputType);
    else if (Q(H), N.value === true && _.target === document.activeElement) {
      const { selectionStart: V, selectionEnd: fe } = _.target;
      V !== void 0 && fe !== void 0 && We(() => {
        _.target === document.activeElement && H.indexOf(_.target.value) === 0 && _.target.setSelectionRange(V, fe);
      });
    }
    e.autogrow === true && W();
  }
  function j(_) {
    t("animationend", _), W();
  }
  function Q(_, H) {
    s = () => {
      c = null, e.type !== "number" && a.hasOwnProperty("value") === true && delete a.value, e.modelValue !== _ && o !== _ && (o = _, H === true && (u = true), t("update:modelValue", _), We(() => {
        o === _ && (o = NaN);
      })), s = void 0;
    }, e.type === "number" && (i = true, a.value = _), e.debounce !== void 0 ? (c !== null && clearTimeout(c), a.value = _, c = setTimeout(s, e.debounce)) : s();
  }
  function W() {
    requestAnimationFrame(() => {
      const _ = f.value;
      if (_ !== null) {
        const H = _.parentNode.style, { scrollTop: V } = _, { overflowY: fe, maxHeight: A } = r.platform.is.firefox === true ? {} : window.getComputedStyle(_), R = fe !== void 0 && fe !== "scroll";
        R === true && (_.style.overflowY = "hidden"), H.marginBottom = _.scrollHeight - 1 + "px", _.style.height = "1px", _.style.height = _.scrollHeight + "px", R === true && (_.style.overflowY = parseInt(A, 10) < _.scrollHeight ? "auto" : "hidden"), H.marginBottom = "", _.scrollTop = V;
      }
    });
  }
  function X(_) {
    C(_), c !== null && (clearTimeout(c), c = null), s == null ? void 0 : s(), t("change", _.target.value);
  }
  function re(_) {
    _ !== void 0 && wt(_), c !== null && (clearTimeout(c), c = null), s == null ? void 0 : s(), i = false, u = false, delete a.value, e.type !== "file" && setTimeout(() => {
      f.value !== null && (f.value.value = m.value !== void 0 ? m.value : "");
    });
  }
  function pe() {
    return a.hasOwnProperty("value") === true ? a.value : m.value !== void 0 ? m.value : "";
  }
  Ke(() => {
    re();
  }), ft(() => {
    e.autogrow === true && W();
  }), Object.assign($, { innerValue: m, fieldClass: v(() => `q-${F.value === true ? "textarea" : "input"}` + (e.autogrow === true ? " q-textarea--autogrow" : "")), hasShadow: v(() => e.type !== "file" && typeof e.shadowText == "string" && e.shadowText.length !== 0), inputRef: f, emitValue: Q, hasValue: b, floatingLabel: v(() => b.value === true && (e.type !== "number" || isNaN(m.value) === false) || Kl(e.displayValue)), getControl: () => d(F.value === true ? "textarea" : "input", { ref: f, class: ["q-field__native q-placeholder", e.inputClass], style: e.inputStyle, ...L.value, ...B.value, ...e.type !== "file" ? { value: pe() } : y.value }), getShadowControl: () => d("div", { class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (F.value === true ? "" : " text-no-wrap") }, [d("span", { class: "invisible" }, pe()), d("span", e.shadowText)]) });
  const Y = bi($);
  return Object.assign(l, { focus: z, select: q, getNativeElement: () => f.value }), Ot(l, "nativeEl", () => f.value), Y;
} }), Pd = { threshold: 0, root: null, rootMargin: "0px" };
function $d(e, t, n) {
  var _a3;
  let l, r, a;
  typeof n == "function" ? (l = n, r = Pd, a = t.cfg === void 0) : (l = n.handler, r = Object.assign({}, Pd, n.cfg), a = t.cfg === void 0 || kn(t.cfg, r) === false), t.handler !== l && (t.handler = l), a === true && (t.cfg = r, (_a3 = t.observer) == null ? void 0 : _a3.unobserve(e), t.observer = new IntersectionObserver(([o]) => {
    if (typeof t.handler == "function") {
      if (o.rootBounds === null && document.body.contains(e) === true) {
        t.observer.unobserve(e), t.observer.observe(e);
        return;
      }
      (t.handler(o, t.observer) === false || t.once === true && o.isIntersecting === true) && Lh(e);
    }
  }, r), t.observer.observe(e));
}
function Lh(e) {
  var _a3;
  const t = e.__qvisible;
  t !== void 0 && ((_a3 = t.observer) == null ? void 0 : _a3.unobserve(e), delete e.__qvisible);
}
var A1 = An({ name: "intersection", mounted(e, { modifiers: t, value: n }) {
  const l = { once: t.once === true };
  $d(e, l, n), e.__qvisible = l;
}, updated(e, t) {
  const n = e.__qvisible;
  n !== void 0 && $d(e, n, t.value);
}, beforeUnmount: Lh });
he({ name: "QIntersection", props: { tag: { type: String, default: "div" }, once: Boolean, transition: String, transitionDuration: { type: [String, Number], default: 300 }, ssrPrerender: Boolean, margin: String, threshold: [Number, Array], root: { default: null }, disable: Boolean, onVisibility: Function }, setup(e, { slots: t, emit: n }) {
  const l = K(nn.value === true ? e.ssrPrerender : false), r = v(() => e.root !== void 0 || e.margin !== void 0 || e.threshold !== void 0 ? { handler: u, cfg: { root: e.root, rootMargin: e.margin, threshold: e.threshold } } : u), a = v(() => e.disable !== true && (nn.value !== true || e.once !== true || e.ssrPrerender !== true)), o = v(() => [[A1, r.value, void 0, { once: e.once }]]), i = v(() => `--q-transition-duration: ${e.transitionDuration}ms`);
  function u(s) {
    l.value !== s.isIntersecting && (l.value = s.isIntersecting, e.onVisibility !== void 0 && n("visibility", l.value));
  }
  function c() {
    if (l.value === true) return [d("div", { key: "content", style: i.value }, $e(t.default))];
    if (t.hidden !== void 0) return [d("div", { key: "hidden", style: i.value }, t.hidden())];
  }
  return () => {
    const s = e.transition ? [d(Ft, { name: "q-transition--" + e.transition }, c)] : c();
    return pn(e.tag, { class: "q-intersection" }, s, "main", a.value, () => o.value);
  };
} });
var P1 = ["ul", "ol"], Fh = he({ name: "QList", props: { ...nt, bordered: Boolean, dense: Boolean, separator: Boolean, padding: Boolean, tag: { type: String, default: "div" } }, setup(e, { slots: t }) {
  const n = xe(), l = lt(e, n.proxy.$q), r = v(() => P1.includes(e.tag) ? null : "list"), a = v(() => "q-list" + (e.bordered === true ? " q-list--bordered" : "") + (e.dense === true ? " q-list--dense" : "") + (e.separator === true ? " q-list--separator" : "") + (l.value === true ? " q-list--dark" : "") + (e.padding === true ? " q-list--padding" : ""));
  return () => d(e.tag, { class: a.value, role: r.value }, $e(t.default));
} }), Bd = [34, 37, 40, 33, 39, 38], $1 = Object.keys(zs);
he({ name: "QKnob", props: { ...wn, ...zs, modelValue: { type: Number, required: true }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, tabindex: { type: [Number, String], default: 0 }, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change", "dragValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), { $q: r } = l, a = K(e.modelValue), o = K(false), i = v(() => isNaN(e.innerMin) === true || e.innerMin < e.min ? e.min : e.innerMin), u = v(() => isNaN(e.innerMax) === true || e.innerMax > e.max ? e.max : e.innerMax);
  let c;
  function s() {
    a.value = e.modelValue === null ? i.value : ct(e.modelValue, i.value, u.value), z(true);
  }
  ge(() => `${e.modelValue}|${i.value}|${u.value}`, s), s();
  const f = v(() => e.disable === false && e.readonly === false), h = v(() => "q-knob non-selectable" + (f.value === true ? " q-knob--editable" : e.disable === true ? " disabled" : "")), m = v(() => (String(e.step).trim().split(".")[1] || "").length), g = v(() => e.step === 0 ? 1 : e.step), w = v(() => e.instantFeedback === true || o.value === true), x = r.platform.is.mobile === true ? v(() => f.value === true ? { onClick: F } : {}) : v(() => f.value === true ? { onMousedown: $, onClick: F, onKeydown: N, onKeyup: L } : {}), T = v(() => f.value === true ? { tabindex: e.tabindex } : { [`aria-${e.disable === true ? "disabled" : "readonly"}`]: "true" }), p = v(() => {
    const k = {};
    return $1.forEach((j) => {
      k[j] = e[j];
    }), k;
  });
  function y(k) {
    k.isFinal ? (B(k.evt, true), o.value = false) : (k.isFirst && (C(), o.value = true), B(k.evt));
  }
  const b = v(() => [[gn, y, void 0, { prevent: true, stop: true, mouse: true }]]);
  function C() {
    const { top: k, left: j, width: Q, height: W } = l.$el.getBoundingClientRect();
    c = { top: k + W / 2, left: j + Q / 2 };
  }
  function $(k) {
    C(), B(k);
  }
  function F(k) {
    C(), B(k, true);
  }
  function N(k) {
    if (Bd.includes(k.keyCode) === false) return;
    je(k);
    const j = ([34, 33].includes(k.keyCode) ? 10 : 1) * g.value, Q = [34, 37, 40].includes(k.keyCode) ? -j : j;
    a.value = ct(parseFloat((a.value + Q).toFixed(m.value)), i.value, u.value), z();
  }
  function B(k, j) {
    const Q = en(k), W = Math.abs(Q.top - c.top), X = Math.sqrt(W ** 2 + Math.abs(Q.left - c.left) ** 2);
    let re = Math.asin(W / X) * (180 / Math.PI);
    Q.top < c.top ? re = c.left < Q.left ? 90 - re : 270 + re : re = c.left < Q.left ? re + 90 : 270 - re, r.lang.rtl === true ? re = qo(-re - e.angle, 0, 360) : e.angle && (re = qo(re - e.angle, 0, 360)), e.reverse === true && (re = 360 - re);
    let pe = e.min + re / 360 * (e.max - e.min);
    if (g.value !== 0) {
      const Y = pe % g.value;
      pe = pe - Y + (Math.abs(Y) >= g.value / 2 ? (Y < 0 ? -1 : 1) * g.value : 0), pe = parseFloat(pe.toFixed(m.value));
    }
    pe = ct(pe, i.value, u.value), n("dragValue", pe), a.value !== pe && (a.value = pe), z(j);
  }
  function L(k) {
    Bd.includes(k.keyCode) && z(true);
  }
  function z(k) {
    e.modelValue !== a.value && n("update:modelValue", a.value), k === true && n("change", a.value);
  }
  const q = Ba(e);
  function E() {
    return d("input", q.value);
  }
  return () => {
    const k = { class: h.value, role: "slider", "aria-valuemin": i.value, "aria-valuemax": u.value, "aria-valuenow": e.modelValue, ...T.value, ...p.value, value: a.value, instantFeedback: w.value, ...x.value }, j = { default: t.default };
    return f.value === true && e.name !== void 0 && (j.internal = E), pn(Gm, k, j, "knob", f.value, () => b.value);
  };
} });
var { passive: Ld } = dt, B1 = ["both", "horizontal", "vertical"], Oh = he({ name: "QScrollObserver", props: { axis: { type: String, validator: (e) => B1.includes(e), default: "vertical" }, debounce: [String, Number], scrollTarget: Gl }, emits: ["scroll"], setup(e, { emit: t }) {
  const n = { position: { top: 0, left: 0 }, direction: "down", directionChanged: false, delta: { top: 0, left: 0 }, inflectionPoint: { top: 0, left: 0 } };
  let l = null, r, a;
  ge(() => e.scrollTarget, () => {
    u(), i();
  });
  function o() {
    l == null ? void 0 : l();
    const f = Math.max(0, bl(r)), h = ci(r), m = { top: f - n.position.top, left: h - n.position.left };
    if (e.axis === "vertical" && m.top === 0 || e.axis === "horizontal" && m.left === 0) return;
    const g = Math.abs(m.top) >= Math.abs(m.left) ? m.top < 0 ? "up" : "down" : m.left < 0 ? "left" : "right";
    n.position = { top: f, left: h }, n.directionChanged = n.direction !== g, n.delta = m, n.directionChanged === true && (n.direction = g, n.inflectionPoint = n.position), t("scroll", { ...n });
  }
  function i() {
    r = Dn(a, e.scrollTarget), r.addEventListener("scroll", c, Ld), c(true);
  }
  function u() {
    r !== void 0 && (r.removeEventListener("scroll", c, Ld), r = void 0);
  }
  function c(f) {
    if (f === true || e.debounce === 0 || e.debounce === "0") o();
    else if (l === null) {
      const [h, m] = e.debounce ? [setTimeout(o, e.debounce), clearTimeout] : [requestAnimationFrame(o), cancelAnimationFrame];
      l = () => {
        m(h), l = null;
      };
    }
  }
  const { proxy: s } = xe();
  return ge(() => s.$q.lang.rtl, o), ft(() => {
    a = s.$el.parentNode, i();
  }), Ke(() => {
    l == null ? void 0 : l(), u();
  }), Object.assign(s, { trigger: c, getPosition: () => n }), xt;
} }), L1 = he({ name: "QLayout", props: { container: Boolean, view: { type: String, default: "hhh lpr fff", validator: (e) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase()) }, onScroll: Function, onScrollHeight: Function, onResize: Function }, setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = xe(), r = K(null), a = K(l.screen.height), o = K(e.container === true ? 0 : l.screen.width), i = K({ position: 0, direction: "down", inflectionPoint: 0 }), u = K(0), c = K(nn.value === true ? 0 : uo()), s = v(() => "q-layout q-layout--" + (e.container === true ? "containerized" : "standard")), f = v(() => e.container === false ? { minHeight: l.screen.height + "px" } : null), h = v(() => c.value !== 0 ? { [l.lang.rtl === true ? "left" : "right"]: `${c.value}px` } : null), m = v(() => c.value !== 0 ? { [l.lang.rtl === true ? "right" : "left"]: 0, [l.lang.rtl === true ? "left" : "right"]: `-${c.value}px`, width: `calc(100% + ${c.value}px)` } : null);
  function g(b) {
    if (e.container === true || document.qScrollPrevented !== true) {
      const C = { position: b.position.top, direction: b.direction, directionChanged: b.directionChanged, inflectionPoint: b.inflectionPoint.top, delta: b.delta.top };
      i.value = C, e.onScroll !== void 0 && n("scroll", C);
    }
  }
  function w(b) {
    const { height: C, width: $ } = b;
    let F = false;
    a.value !== C && (F = true, a.value = C, e.onScrollHeight !== void 0 && n("scrollHeight", C), T()), o.value !== $ && (F = true, o.value = $), F === true && e.onResize !== void 0 && n("resize", b);
  }
  function x({ height: b }) {
    u.value !== b && (u.value = b, T());
  }
  function T() {
    if (e.container === true) {
      const b = a.value > u.value ? uo() : 0;
      c.value !== b && (c.value = b);
    }
  }
  let p = null;
  const y = { instances: {}, view: v(() => e.view), isContainer: v(() => e.container), rootRef: r, height: a, containerHeight: u, scrollbarWidth: c, totalWidth: v(() => o.value + c.value), rows: v(() => {
    const b = e.view.toLowerCase().split(" ");
    return { top: b[0].split(""), middle: b[1].split(""), bottom: b[2].split("") };
  }), header: Fn({ size: 0, offset: 0, space: false }), right: Fn({ size: 300, offset: 0, space: false }), footer: Fn({ size: 0, offset: 0, space: false }), left: Fn({ size: 300, offset: 0, space: false }), scroll: i, animate() {
    p !== null ? clearTimeout(p) : document.body.classList.add("q-body--layout-animate"), p = setTimeout(() => {
      p = null, document.body.classList.remove("q-body--layout-animate");
    }, 155);
  }, update(b, C, $) {
    y[b][C] = $;
  } };
  if (hn(Xl, y), uo() > 0) {
    let b = function() {
      F = null, N.classList.remove("hide-scrollbar");
    }, C = function() {
      if (F === null) {
        if (N.scrollHeight > l.screen.height) return;
        N.classList.add("hide-scrollbar");
      } else clearTimeout(F);
      F = setTimeout(b, 300);
    }, $ = function(B) {
      F !== null && B === "remove" && (clearTimeout(F), b()), window[`${B}EventListener`]("resize", C);
    }, F = null;
    const N = document.body;
    ge(() => e.container !== true ? "add" : "remove", $), e.container !== true && $("add"), ei(() => {
      $("remove");
    });
  }
  return () => {
    const b = Tt(t.default, [d(Oh, { onScroll: g }), d(Ul, { onResize: w })]), C = d("div", { class: s.value, style: f.value, ref: e.container === true ? void 0 : r, tabindex: -1 }, b);
    return e.container === true ? d("div", { class: "q-layout-container overflow-hidden", ref: r }, [d(Ul, { onResize: x }), d("div", { class: "absolute-full", style: h.value }, [d("div", { class: "scroll", style: m.value }, [C])])]) : C;
  };
} }), F1 = ["horizontal", "vertical", "cell", "none"], O1 = he({ name: "QMarkupTable", props: { ...nt, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, wrapCells: Boolean, separator: { type: String, default: "horizontal", validator: (e) => F1.includes(e) } }, setup(e, { slots: t }) {
  const n = xe(), l = lt(e, n.proxy.$q), r = v(() => `q-markup-table q-table__container q-table__card q-table--${e.separator}-separator` + (l.value === true ? " q-table--dark q-table__card--dark q-dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "") + (e.square === true ? " q-table--square" : "") + (e.wrapCells === false ? " q-table--no-wrap" : ""));
  return () => d("div", { class: r.value }, [d("table", { class: "q-table" }, $e(t.default))]);
} });
he({ name: "QNoSsr", props: { tag: { type: String, default: "div" }, placeholder: String }, setup(e, { slots: t }) {
  const { isHydrated: n } = th();
  return () => {
    if (n.value === true) {
      const a = $e(t.default);
      return a === void 0 ? a : a.length > 1 ? d(e.tag, {}, a) : a[0];
    }
    const l = { class: "q-no-ssr-placeholder" }, r = $e(t.placeholder);
    if (r !== void 0) return r.length > 1 ? d(e.tag, l, r) : r[0];
    if (e.placeholder !== void 0) return d(e.tag, l, e.placeholder);
  };
} });
var V1 = () => d("svg", { key: "svg", class: "q-radio__bg absolute non-selectable", viewBox: "0 0 24 24" }, [d("path", { d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12" }), d("path", { class: "q-radio__check", d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6" })]), D1 = he({ name: "QRadio", props: { ...nt, ...el, ...wn, modelValue: { required: true }, val: { required: true }, label: String, leftLabel: Boolean, checkedIcon: String, uncheckedIcon: String, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), r = lt(e, l.$q), a = tl(e, jm), o = K(null), { refocusTargetEl: i, refocusTarget: u } = Hm(e, o), c = v(() => Xe(e.modelValue) === Xe(e.val)), s = v(() => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (e.disable === true ? " disabled" : "") + (r.value === true ? " q-radio--dark" : "") + (e.dense === true ? " q-radio--dense" : "") + (e.leftLabel === true ? " reverse" : "")), f = v(() => {
    const b = e.color !== void 0 && (e.keepColor === true || c.value === true) ? ` text-${e.color}` : "";
    return `q-radio__inner relative-position q-radio__inner--${c.value === true ? "truthy" : "falsy"}${b}`;
  }), h = v(() => (c.value === true ? e.checkedIcon : e.uncheckedIcon) || null), m = v(() => e.disable === true ? -1 : e.tabindex || 0), g = v(() => {
    const b = { type: "radio" };
    return e.name !== void 0 && Object.assign(b, { ".checked": c.value === true, "^checked": c.value === true ? "checked" : void 0, name: e.name, value: e.val }), b;
  }), w = Cl(g);
  function x(b) {
    b !== void 0 && (je(b), u(b)), e.disable !== true && c.value !== true && n("update:modelValue", e.val, b);
  }
  function T(b) {
    (b.keyCode === 13 || b.keyCode === 32) && je(b);
  }
  function p(b) {
    (b.keyCode === 13 || b.keyCode === 32) && x(b);
  }
  Object.assign(l, { set: x });
  const y = V1();
  return () => {
    const b = h.value !== null ? [d("div", { key: "icon", class: "q-radio__icon-container absolute-full flex flex-center no-wrap" }, [d(et, { class: "q-radio__icon", name: h.value })])] : [y];
    e.disable !== true && w(b, "unshift", " q-radio__native q-ma-none q-pa-none");
    const C = [d("div", { class: f.value, style: a.value, "aria-hidden": "true" }, b)];
    i.value !== null && C.push(i.value);
    const $ = e.label !== void 0 ? Tt(t.default, [e.label]) : $e(t.default);
    return $ !== void 0 && C.push(d("div", { class: "q-radio__label q-anchor--skip" }, $)), d("div", { ref: o, class: s.value, tabindex: m.value, role: "radio", "aria-label": e.label, "aria-checked": c.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: x, onKeydown: T, onKeyup: p }, C);
  };
} }), I1 = he({ name: "QToggle", props: { ...Um, icon: String, iconColor: String }, emits: Qm, setup(e) {
  function t(n, l) {
    const r = v(() => (n.value === true ? e.checkedIcon : l.value === true ? e.indeterminateIcon : e.uncheckedIcon) || e.icon), a = v(() => n.value === true ? e.iconColor : null);
    return () => [d("div", { class: "q-toggle__track" }), d("div", { class: "q-toggle__thumb absolute flex flex-center no-wrap" }, r.value !== void 0 ? [d(et, { name: r.value, color: a.value })] : void 0)];
  }
  return Km("toggle", t);
} }), Vh = { radio: D1, checkbox: ua, toggle: I1 }, z1 = Object.keys(Vh);
function eu(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (l) => l[n];
}
var N1 = he({ name: "QOptionGroup", props: { ...nt, modelValue: { required: true }, options: { type: Array, validator: (e) => e.every($t), default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], name: String, type: { type: String, default: "radio", validator: (e) => z1.includes(e) }, color: String, keepColor: Boolean, dense: Boolean, size: String, leftLabel: Boolean, inline: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { emit: t, slots: n }) {
  const { proxy: { $q: l } } = xe(), r = Array.isArray(e.modelValue);
  e.type === "radio" ? r === true && console.error("q-option-group: model should not be array") : r === false && console.error("q-option-group: model should be array in your case");
  const a = lt(e, l), o = v(() => Vh[e.type]), i = v(() => eu(e.optionValue, "value")), u = v(() => eu(e.optionLabel, "label")), c = v(() => eu(e.optionDisable, "disable")), s = v(() => e.options.map((g) => ({ val: i.value(g), name: g.name === void 0 ? e.name : g.name, disable: e.disable || c.value(g), leftLabel: g.leftLabel === void 0 ? e.leftLabel : g.leftLabel, color: g.color === void 0 ? e.color : g.color, checkedIcon: g.checkedIcon, uncheckedIcon: g.uncheckedIcon, dark: g.dark === void 0 ? a.value : g.dark, size: g.size === void 0 ? e.size : g.size, dense: e.dense, keepColor: g.keepColor === void 0 ? e.keepColor : g.keepColor }))), f = v(() => "q-option-group q-gutter-x-sm" + (e.inline === true ? " q-option-group--inline" : "")), h = v(() => {
    const g = { role: "group" };
    return e.type === "radio" && (g.role = "radiogroup", e.disable === true && (g["aria-disabled"] = "true")), g;
  });
  function m(g) {
    t("update:modelValue", g);
  }
  return () => d("div", { class: f.value, ...h.value }, e.options.map((g, w) => {
    const x = n["label-" + w] !== void 0 ? () => n["label-" + w](g) : n.label !== void 0 ? () => n.label(g) : void 0;
    return d("div", [d(o.value, { label: x === void 0 ? u.value(g) : null, modelValue: e.modelValue, "onUpdate:modelValue": m, ...s.value[w] }, x)]);
  }));
} });
he({ name: "QPage", props: { padding: Boolean, styleFn: Function }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), l = qt(Xl, ot);
  if (l === ot) return console.error("QPage needs to be a deep child of QLayout"), ot;
  if (qt(dm, ot) === ot) return console.error("QPage needs to be child of QPageContainer"), ot;
  const a = v(() => {
    const i = (l.header.space === true ? l.header.size : 0) + (l.footer.space === true ? l.footer.size : 0);
    if (typeof e.styleFn == "function") {
      const u = l.isContainer.value === true ? l.containerHeight.value : n.screen.height;
      return e.styleFn(i, u);
    }
    return { minHeight: l.isContainer.value === true ? l.containerHeight.value - i + "px" : n.screen.height === 0 ? i !== 0 ? `calc(100vh - ${i}px)` : "100vh" : n.screen.height - i + "px" };
  }), o = v(() => `q-page${e.padding === true ? " q-layout-padding" : ""}`);
  return () => d("main", { class: o.value, style: a.value }, $e(t.default));
} });
var H1 = he({ name: "QPageContainer", setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), l = qt(Xl, ot);
  if (l === ot) return console.error("QPageContainer needs to be child of QLayout"), ot;
  hn(dm, true);
  const r = v(() => {
    const a = {};
    return l.header.space === true && (a.paddingTop = `${l.header.size}px`), l.right.space === true && (a[`padding${n.lang.rtl === true ? "Left" : "Right"}`] = `${l.right.size}px`), l.footer.space === true && (a.paddingBottom = `${l.footer.size}px`), l.left.space === true && (a[`padding${n.lang.rtl === true ? "Right" : "Left"}`] = `${l.left.size}px`), a;
  });
  return () => d("div", { class: "q-page-container", style: r.value }, $e(t.default));
} }), Ku = { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, validator: (e) => e.length === 2 }, expand: Boolean };
function Dh() {
  const { props: e, proxy: { $q: t } } = xe(), n = qt(Xl, ot);
  if (n === ot) return console.error("QPageSticky needs to be child of QLayout"), ot;
  const l = v(() => {
    const f = e.position;
    return { top: f.indexOf("top") !== -1, right: f.indexOf("right") !== -1, bottom: f.indexOf("bottom") !== -1, left: f.indexOf("left") !== -1, vertical: f === "top" || f === "bottom", horizontal: f === "left" || f === "right" };
  }), r = v(() => n.header.offset), a = v(() => n.right.offset), o = v(() => n.footer.offset), i = v(() => n.left.offset), u = v(() => {
    let f = 0, h = 0;
    const m = l.value, g = t.lang.rtl === true ? -1 : 1;
    m.top === true && r.value !== 0 ? h = `${r.value}px` : m.bottom === true && o.value !== 0 && (h = `${-o.value}px`), m.left === true && i.value !== 0 ? f = `${g * i.value}px` : m.right === true && a.value !== 0 && (f = `${-g * a.value}px`);
    const w = { transform: `translate(${f}, ${h})` };
    return e.offset && (w.margin = `${e.offset[1]}px ${e.offset[0]}px`), m.vertical === true ? (i.value !== 0 && (w[t.lang.rtl === true ? "right" : "left"] = `${i.value}px`), a.value !== 0 && (w[t.lang.rtl === true ? "left" : "right"] = `${a.value}px`)) : m.horizontal === true && (r.value !== 0 && (w.top = `${r.value}px`), o.value !== 0 && (w.bottom = `${o.value}px`)), w;
  }), c = v(() => `q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand === true ? "expand" : "shrink"}`);
  function s(f) {
    const h = $e(f.default);
    return d("div", { class: c.value, style: u.value }, e.expand === true ? h : [d("div", h)]);
  }
  return { $layout: n, getStickyContent: s };
}
he({ name: "QPageScroller", props: { ...Ku, scrollOffset: { type: Number, default: 1e3 }, reverse: Boolean, duration: { type: Number, default: 300 }, offset: { ...Ku.offset, default: () => [18, 18] } }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = xe(), { $layout: r, getStickyContent: a } = Dh(), o = K(null);
  let i;
  const u = v(() => r.height.value - (r.isContainer.value === true ? r.containerHeight.value : l.screen.height));
  function c() {
    return e.reverse === true ? u.value - r.scroll.value.position > e.scrollOffset : r.scroll.value.position > e.scrollOffset;
  }
  const s = K(c());
  function f() {
    const x = c();
    s.value !== x && (s.value = x);
  }
  function h() {
    e.reverse === true ? i === void 0 && (i = ge(u, f)) : m();
  }
  ge(r.scroll, f), ge(() => e.reverse, h);
  function m() {
    i !== void 0 && (i(), i = void 0);
  }
  function g(x) {
    const T = Dn(r.isContainer.value === true ? o.value : r.rootRef.value);
    _r(T, e.reverse === true ? r.height.value : 0, e.duration), n("click", x);
  }
  function w() {
    return s.value === true ? d("div", { ref: o, class: "q-page-scroller", onClick: g }, a(t)) : null;
  }
  return h(), Ke(m), () => d(Ft, { name: "q-transition--fade" }, w);
} });
he({ name: "QPageSticky", props: Ku, setup(e, { slots: t }) {
  const { getStickyContent: n } = Dh();
  return () => n(t);
} });
function Ga(e, t) {
  return [true, false].includes(e) ? e : t;
}
he({ name: "QPagination", props: { ...nt, modelValue: { type: Number, required: true }, min: { type: [Number, String], default: 1 }, max: { type: [Number, String], required: true }, maxPages: { type: [Number, String], default: 0, validator: (e) => (typeof e == "string" ? parseInt(e, 10) : e) >= 0 }, inputStyle: [Array, String, Object], inputClass: [Array, String, Object], size: String, disable: Boolean, input: Boolean, iconPrev: String, iconNext: String, iconFirst: String, iconLast: String, toFn: Function, boundaryLinks: { type: Boolean, default: null }, boundaryNumbers: { type: Boolean, default: null }, directionLinks: { type: Boolean, default: null }, ellipses: { type: Boolean, default: null }, ripple: { type: [Boolean, Object], default: null }, round: Boolean, rounded: Boolean, flat: Boolean, outline: Boolean, unelevated: Boolean, push: Boolean, glossy: Boolean, color: { type: String, default: "primary" }, textColor: String, activeDesign: { type: String, default: "", values: (e) => e === "" || Tm.includes(e) }, activeColor: String, activeTextColor: String, gutter: String, padding: { type: String, default: "3px 2px" } }, emits: ["update:modelValue"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), { $q: l } = n, r = lt(e, l), a = v(() => parseInt(e.min, 10)), o = v(() => parseInt(e.max, 10)), i = v(() => parseInt(e.maxPages, 10)), u = v(() => g.value + " / " + o.value), c = v(() => Ga(e.boundaryLinks, e.input)), s = v(() => Ga(e.boundaryNumbers, !e.input)), f = v(() => Ga(e.directionLinks, e.input)), h = v(() => Ga(e.ellipses, !e.input)), m = K(null), g = v({ get: () => e.modelValue, set: (E) => {
    if (E = parseInt(E, 10), e.disable || isNaN(E)) return;
    const k = ct(E, a.value, o.value);
    e.modelValue !== k && t("update:modelValue", k);
  } });
  ge(() => `${a.value}|${o.value}`, () => {
    g.value = e.modelValue;
  });
  const w = v(() => "q-pagination row no-wrap items-center" + (e.disable === true ? " disabled" : "")), x = v(() => e.gutter in Ro ? `${Ro[e.gutter]}px` : e.gutter || null), T = v(() => x.value !== null ? `--q-pagination-gutter-parent:-${x.value};--q-pagination-gutter-child:${x.value}` : null), p = v(() => {
    const E = [e.iconFirst || l.iconSet.pagination.first, e.iconPrev || l.iconSet.pagination.prev, e.iconNext || l.iconSet.pagination.next, e.iconLast || l.iconSet.pagination.last];
    return l.lang.rtl === true ? E.reverse() : E;
  }), y = v(() => ({ "aria-disabled": e.disable === true ? "true" : "false", role: "navigation" })), b = v(() => Ts(e, "flat")), C = v(() => ({ [b.value]: true, round: e.round, rounded: e.rounded, padding: e.padding, color: e.color, textColor: e.textColor, size: e.size, ripple: e.ripple !== null ? e.ripple : true })), $ = v(() => {
    const E = { [b.value]: false };
    return e.activeDesign !== "" && (E[e.activeDesign] = true), E;
  }), F = v(() => ({ ...$.value, color: e.activeColor || e.color, textColor: e.activeTextColor || e.textColor })), N = v(() => {
    let E = Math.max(i.value, 1 + (h.value ? 2 : 0) + (s.value ? 2 : 0));
    const k = { pgFrom: a.value, pgTo: o.value, ellipsesStart: false, ellipsesEnd: false, boundaryStart: false, boundaryEnd: false, marginalStyle: { minWidth: `${Math.max(2, String(o.value).length)}em` } };
    return i.value && E < o.value - a.value + 1 && (E = 1 + Math.floor(E / 2) * 2, k.pgFrom = Math.max(a.value, Math.min(o.value - E + 1, e.modelValue - Math.floor(E / 2))), k.pgTo = Math.min(o.value, k.pgFrom + E - 1), s.value && (k.boundaryStart = true, k.pgFrom++), h.value && k.pgFrom > a.value + (s.value ? 1 : 0) && (k.ellipsesStart = true, k.pgFrom++), s.value && (k.boundaryEnd = true, k.pgTo--), h.value && k.pgTo < o.value - (s.value ? 1 : 0) && (k.ellipsesEnd = true, k.pgTo--)), k;
  });
  function B(E) {
    g.value = E;
  }
  function L(E) {
    g.value = g.value + E;
  }
  const z = v(() => {
    function E() {
      g.value = m.value, m.value = null;
    }
    return { "onUpdate:modelValue": (k) => {
      m.value = k;
    }, onKeyup: (k) => {
      yn(k, 13) === true && E();
    }, onBlur: E };
  });
  function q(E, k, j) {
    const Q = { "aria-label": k, "aria-current": "false", ...C.value, ...E };
    return j === true && Object.assign(Q, { "aria-current": "true", ...F.value }), k !== void 0 && (e.toFn !== void 0 ? Q.to = e.toFn(k) : Q.onClick = () => {
      B(k);
    }), d(Ze, Q);
  }
  return Object.assign(n, { set: B, setByOffset: L }), () => {
    const E = [], k = [];
    let j;
    if (c.value === true && (E.push(q({ key: "bls", disable: e.disable || e.modelValue <= a.value, icon: p.value[0], "aria-label": l.lang.pagination.first }, a.value)), k.unshift(q({ key: "ble", disable: e.disable || e.modelValue >= o.value, icon: p.value[3], "aria-label": l.lang.pagination.last }, o.value))), f.value === true && (E.push(q({ key: "bdp", disable: e.disable || e.modelValue <= a.value, icon: p.value[1], "aria-label": l.lang.pagination.prev }, e.modelValue - 1)), k.unshift(q({ key: "bdn", disable: e.disable || e.modelValue >= o.value, icon: p.value[2], "aria-label": l.lang.pagination.next }, e.modelValue + 1))), e.input !== true) {
      j = [];
      const { pgFrom: Q, pgTo: W, marginalStyle: X } = N.value;
      if (N.value.boundaryStart === true) {
        const re = a.value === e.modelValue;
        E.push(q({ key: "bns", style: X, disable: e.disable, label: a.value }, a.value, re));
      }
      if (N.value.boundaryEnd === true) {
        const re = o.value === e.modelValue;
        k.unshift(q({ key: "bne", style: X, disable: e.disable, label: o.value }, o.value, re));
      }
      N.value.ellipsesStart === true && E.push(q({ key: "bes", style: X, disable: e.disable, label: "\u2026", ripple: false }, Q - 1)), N.value.ellipsesEnd === true && k.unshift(q({ key: "bee", style: X, disable: e.disable, label: "\u2026", ripple: false }, W + 1));
      for (let re = Q; re <= W; re++) j.push(q({ key: `bpg${re}`, style: X, disable: e.disable, label: re }, re, re === e.modelValue));
    }
    return d("div", { class: w.value, ...y.value }, [d("div", { class: "q-pagination__content row no-wrap items-center", style: T.value }, [...E, e.input === true ? d(Bh, { class: "inline", style: { width: `${u.value.length / 1.5}em` }, type: "number", dense: true, value: m.value, disable: e.disable, dark: r.value, borderless: true, inputClass: e.inputClass, inputStyle: e.inputStyle, placeholder: u.value, min: a.value, max: o.value, ...z.value }) : d("div", { class: "q-pagination__middle row justify-center" }, j), ...k])]);
  };
} });
function tu(e) {
  let t = false, n, l;
  function r() {
    l = arguments, t !== true && (t = true, n = window.requestAnimationFrame(() => {
      e.apply(this, l), l = void 0, t = false;
    }));
  }
  return r.cancel = () => {
    window.cancelAnimationFrame(n), t = false;
  }, r;
}
var { passive: Za } = dt;
he({ name: "QParallax", props: { src: String, height: { type: Number, default: 500 }, speed: { type: Number, default: 1, validator: (e) => e >= 0 && e <= 1 }, scrollTarget: Gl, onScroll: Function }, setup(e, { slots: t, emit: n }) {
  const l = K(0), r = K(null), a = K(null), o = K(null);
  let i, u, c, s, f, h;
  ge(() => e.height, () => {
    i === true && g();
  }), ge(() => e.scrollTarget, () => {
    i === true && (p(), T());
  });
  let m = (y) => {
    l.value = y, e.onScroll !== void 0 && n("scroll", y);
  };
  function g() {
    let y, b, C;
    h === window ? (y = 0, C = b = window.innerHeight) : (y = Eo(h).top, b = Sr(h), C = y + b);
    const $ = Eo(r.value).top, F = $ + e.height;
    if (f !== void 0 || F > y && $ < C) {
      const N = (C - $) / (e.height + b);
      w((c - e.height) * N * e.speed), m(N);
    }
  }
  let w = (y) => {
    u.style.transform = `translate3d(-50%,${Math.round(y)}px,0)`;
  };
  function x() {
    c = u.naturalHeight || u.videoHeight || Sr(u), i === true && g();
  }
  function T() {
    i = true, h = Dn(r.value, e.scrollTarget), h.addEventListener("scroll", g, Za), window.addEventListener("resize", s, Za), g();
  }
  function p() {
    i === true && (i = false, h.removeEventListener("scroll", g, Za), window.removeEventListener("resize", s, Za), h = void 0, w.cancel(), m.cancel(), s.cancel());
  }
  return ft(() => {
    w = tu(w), m = tu(m), s = tu(x), u = t.media !== void 0 ? a.value.children[0] : o.value, u.onload = u.onloadstart = u.loadedmetadata = x, x(), u.style.display = "initial", window.IntersectionObserver !== void 0 ? (f = new IntersectionObserver((y) => {
      (y[0].isIntersecting === true ? T : p)();
    }), f.observe(r.value)) : T();
  }), Ke(() => {
    p(), f == null ? void 0 : f.disconnect(), u.onload = u.onloadstart = u.loadedmetadata = null;
  }), () => d("div", { ref: r, class: "q-parallax", style: { height: `${e.height}px` } }, [d("div", { ref: a, class: "q-parallax__media absolute-full" }, t.media !== void 0 ? t.media() : [d("img", { ref: o, src: e.src })]), d("div", { class: "q-parallax__content absolute-full column flex-center" }, t.content !== void 0 ? t.content({ percentScrolled: l.value }) : $e(t.default))]);
} });
function sa(e, t = /* @__PURE__ */ new WeakMap()) {
  if (Object(e) !== e) return e;
  if (t.has(e)) return t.get(e);
  const n = e instanceof Date ? new Date(e) : e instanceof RegExp ? new RegExp(e.source, e.flags) : e instanceof Set ? /* @__PURE__ */ new Set() : e instanceof Map ? /* @__PURE__ */ new Map() : typeof e.constructor != "function" ? /* @__PURE__ */ Object.create(null) : e.prototype !== void 0 && typeof e.prototype.constructor == "function" ? e : new e.constructor();
  if (typeof e.constructor == "function" && typeof e.valueOf == "function") {
    const l = e.valueOf();
    if (Object(l) !== l) {
      const r = new e.constructor(l);
      return t.set(e, r), r;
    }
  }
  return t.set(e, n), e instanceof Set ? e.forEach((l) => {
    n.add(sa(l, t));
  }) : e instanceof Map && e.forEach((l, r) => {
    n.set(r, sa(l, t));
  }), Object.assign(n, ...Object.keys(e).map((l) => ({ [l]: sa(e[l], t) })));
}
he({ name: "QPopupEdit", props: { modelValue: { required: true }, title: String, buttons: Boolean, labelSet: String, labelCancel: String, color: { type: String, default: "primary" }, validate: { type: Function, default: () => true }, autoSave: Boolean, cover: { type: Boolean, default: true }, disable: Boolean }, emits: ["update:modelValue", "save", "cancel", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), { $q: r } = l, a = K(null), o = K(""), i = K("");
  let u = false;
  const c = v(() => Ot({ initialValue: o.value, validate: e.validate, set: s, cancel: f, updatePosition: h }, "value", () => i.value, (b) => {
    i.value = b;
  }));
  function s() {
    e.validate(i.value) !== false && (m() === true && (n("save", i.value, o.value), n("update:modelValue", i.value)), g());
  }
  function f() {
    m() === true && n("cancel", i.value, o.value), g();
  }
  function h() {
    We(() => {
      a.value.updatePosition();
    });
  }
  function m() {
    return kn(i.value, o.value) === false;
  }
  function g() {
    u = true, a.value.hide();
  }
  function w() {
    u = false, o.value = sa(e.modelValue), i.value = sa(e.modelValue), n("beforeShow");
  }
  function x() {
    n("show");
  }
  function T() {
    u === false && m() === true && (e.autoSave === true && e.validate(i.value) === true ? (n("save", i.value, o.value), n("update:modelValue", i.value)) : n("cancel", i.value, o.value)), n("beforeHide");
  }
  function p() {
    n("hide");
  }
  function y() {
    const b = t.default !== void 0 ? [].concat(t.default(c.value)) : [];
    return e.title && b.unshift(d("div", { class: "q-dialog__title q-mt-sm q-mb-sm" }, e.title)), e.buttons === true && b.push(d("div", { class: "q-popup-edit__buttons row justify-center no-wrap" }, [d(Ze, { flat: true, color: e.color, label: e.labelCancel || r.lang.label.cancel, onClick: f }), d(Ze, { flat: true, color: e.color, label: e.labelSet || r.lang.label.set, onClick: s })])), b;
  }
  return Object.assign(l, { set: s, cancel: f, show(b) {
    var _a3;
    (_a3 = a.value) == null ? void 0 : _a3.show(b);
  }, hide(b) {
    var _a3;
    (_a3 = a.value) == null ? void 0 : _a3.hide(b);
  }, updatePosition: h }), () => {
    if (e.disable !== true) return d(di, { ref: a, class: "q-popup-edit", cover: e.cover, onBeforeShow: w, onShow: x, onBeforeHide: T, onHide: p, onEscapeKey: f }, y);
  };
} });
he({ name: "QPopupProxy", props: { ...Rm, breakpoint: { type: [String, Number], default: 450 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: n, attrs: l }) {
  const { proxy: r } = xe(), { $q: a } = r, o = K(false), i = K(null), u = v(() => parseInt(e.breakpoint, 10)), { canShow: c } = Ms({ showing: o });
  function s() {
    return a.screen.width < u.value || a.screen.height < u.value ? "dialog" : "menu";
  }
  const f = K(s()), h = v(() => f.value === "menu" ? { maxHeight: "99vh" } : {});
  ge(() => s(), (w) => {
    o.value !== true && (f.value = w);
  });
  function m(w) {
    o.value = true, n("show", w);
  }
  function g(w) {
    o.value = false, f.value = s(), n("hide", w);
  }
  return Object.assign(r, { show(w) {
    c(w) === true && i.value.show(w);
  }, hide(w) {
    i.value.hide(w);
  }, toggle(w) {
    i.value.toggle(w);
  } }), Ot(r, "currentComponent", () => ({ type: f.value, ref: i.value })), () => {
    const w = { ref: i, ...h.value, ...l, onShow: m, onHide: g };
    let x;
    return f.value === "dialog" ? x = vi : (x = di, Object.assign(w, { target: e.target, contextMenu: e.contextMenu, noParentEvent: true, separateClosePopup: true })), d(x, w, t.default);
  };
} });
var j1 = { xs: 2, sm: 4, md: 6, lg: 10, xl: 14 };
function Fd(e, t, n) {
  return { transform: t === true ? `translateX(${n.lang.rtl === true ? "-" : ""}100%) scale3d(${-e},1,1)` : `scale3d(${e},1,1)` };
}
var U1 = he({ name: "QLinearProgress", props: { ...nt, ...el, value: { type: Number, default: 0 }, buffer: Number, color: String, trackColor: String, reverse: Boolean, stripe: Boolean, indeterminate: Boolean, query: Boolean, rounded: Boolean, animationSpeed: { type: [String, Number], default: 2100 }, instantFeedback: Boolean }, setup(e, { slots: t }) {
  const { proxy: n } = xe(), l = lt(e, n.$q), r = tl(e, j1), a = v(() => e.indeterminate === true || e.query === true), o = v(() => e.reverse !== e.query), i = v(() => ({ ...r.value !== null ? r.value : {}, "--q-linear-progress-speed": `${e.animationSpeed}ms` })), u = v(() => "q-linear-progress" + (e.color !== void 0 ? ` text-${e.color}` : "") + (e.reverse === true || e.query === true ? " q-linear-progress--reverse" : "") + (e.rounded === true ? " rounded-borders" : "")), c = v(() => Fd(e.buffer !== void 0 ? e.buffer : 1, o.value, n.$q)), s = v(() => `with${e.instantFeedback === true ? "out" : ""}-transition`), f = v(() => `q-linear-progress__track absolute-full q-linear-progress__track--${s.value} q-linear-progress__track--${l.value === true ? "dark" : "light"}` + (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")), h = v(() => Fd(a.value === true ? 1 : e.value, o.value, n.$q)), m = v(() => `q-linear-progress__model absolute-full q-linear-progress__model--${s.value} q-linear-progress__model--${a.value === true ? "in" : ""}determinate`), g = v(() => ({ width: `${e.value * 100}%` })), w = v(() => `q-linear-progress__stripe absolute-${e.reverse === true ? "right" : "left"} q-linear-progress__stripe--${s.value}`);
  return () => {
    const x = [d("div", { class: f.value, style: c.value }), d("div", { class: m.value, style: h.value })];
    return e.stripe === true && a.value === false && x.push(d("div", { class: w.value, style: g.value })), d("div", { class: u.value, style: i.value, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuenow": e.indeterminate === true ? void 0 : e.value }, Tt(t.default, x));
  };
} }), Od = 40, nu = 20;
he({ name: "QPullToRefresh", props: { color: String, bgColor: String, icon: String, noMouse: Boolean, disable: Boolean, scrollTarget: Gl }, emits: ["refresh"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), { $q: r } = l, a = K("pull"), o = K(0), i = K(false), u = K(-40), c = K(false), s = K({}), f = v(() => ({ opacity: o.value, transform: `translateY(${u.value}px) rotate(${o.value * 360}deg)` })), h = v(() => "q-pull-to-refresh__puller row flex-center" + (c.value === true ? " q-pull-to-refresh__puller--animating" : "") + (e.bgColor !== void 0 ? ` bg-${e.bgColor}` : ""));
  function m(C) {
    if (C.isFinal === true) {
      i.value === true && (i.value = false, a.value === "pulled" ? (a.value = "refreshing", y({ pos: nu }), x()) : a.value === "pull" && y({ pos: -40, ratio: 0 }));
      return;
    }
    if (c.value === true || a.value === "refreshing") return false;
    if (C.isFirst === true) {
      if (bl(T) !== 0 || C.direction !== "down") return i.value === true && (i.value = false, a.value = "pull", y({ pos: -40, ratio: 0 })), false;
      i.value = true;
      const { top: N, left: B } = l.$el.getBoundingClientRect();
      s.value = { top: N + "px", left: B + "px", width: window.getComputedStyle(l.$el).getPropertyValue("width") };
    }
    Vt(C.evt);
    const $ = Math.min(140, Math.max(0, C.distance.y));
    u.value = $ - Od, o.value = ct($ / (nu + Od), 0, 1);
    const F = u.value > nu ? "pulled" : "pull";
    a.value !== F && (a.value = F);
  }
  const g = v(() => {
    const C = { down: true };
    return e.noMouse !== true && (C.mouse = true), [[gn, m, void 0, C]];
  }), w = v(() => `q-pull-to-refresh__content${i.value === true ? " no-pointer-events" : ""}`);
  function x() {
    n("refresh", () => {
      y({ pos: -40, ratio: 0 }, () => {
        a.value = "pull";
      });
    });
  }
  let T, p = null;
  function y({ pos: C, ratio: $ }, F) {
    c.value = true, u.value = C, $ !== void 0 && (o.value = $), p !== null && clearTimeout(p), p = setTimeout(() => {
      p = null, c.value = false, F == null ? void 0 : F();
    }, 300);
  }
  function b() {
    T = Dn(l.$el, e.scrollTarget);
  }
  return ge(() => e.scrollTarget, b), ft(b), Ke(() => {
    p !== null && clearTimeout(p);
  }), Object.assign(l, { trigger: x, updateScrollTarget: b }), () => {
    const C = [d("div", { class: w.value }, $e(t.default)), d("div", { class: "q-pull-to-refresh__puller-container fixed row flex-center no-pointer-events z-top", style: s.value }, [d("div", { class: h.value, style: f.value }, [a.value !== "refreshing" ? d(et, { name: e.icon || r.iconSet.pullToRefresh.icon, color: e.color, size: "32px" }) : d(_n, { size: "24px", color: e.color })])])];
    return pn("div", { class: "q-pull-to-refresh" }, C, "main", e.disable === false, () => g.value);
  };
} });
var al = { MIN: 0, RANGE: 1, MAX: 2 };
he({ name: "QRange", props: { ...Zm, modelValue: { type: Object, default: () => ({ min: null, max: null }), validator: (e) => "min" in e && "max" in e }, dragRange: Boolean, dragOnlyRange: Boolean, leftLabelColor: String, leftLabelTextColor: String, rightLabelColor: String, rightLabelTextColor: String, leftLabelValue: [String, Number], rightLabelValue: [String, Number], leftThumbColor: String, rightThumbColor: String }, emits: Jm, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = xe(), { state: l, methods: r } = eh({ updateValue: N, updatePosition: L, getDragging: B, formAttrs: v(() => ({ type: "hidden", name: e.name, value: `${e.modelValue.min}|${e.modelValue.max}` })) }), a = K(null), o = K(0), i = K(0), u = K({ min: 0, max: 0 });
  function c() {
    u.value.min = e.modelValue.min === null ? l.innerMin.value : ct(e.modelValue.min, l.innerMin.value, l.innerMax.value), u.value.max = e.modelValue.max === null ? l.innerMax.value : ct(e.modelValue.max, l.innerMin.value, l.innerMax.value);
  }
  ge(() => `${e.modelValue.min}|${e.modelValue.max}|${l.innerMin.value}|${l.innerMax.value}`, c), c();
  const s = v(() => r.convertModelToRatio(u.value.min)), f = v(() => r.convertModelToRatio(u.value.max)), h = v(() => l.active.value === true ? o.value : s.value), m = v(() => l.active.value === true ? i.value : f.value), g = v(() => {
    const q = { [l.positionProp.value]: `${100 * h.value}%`, [l.sizeProp.value]: `${100 * (m.value - h.value)}%` };
    return e.selectionImg !== void 0 && (q.backgroundImage = `url(${e.selectionImg}) !important`), q;
  }), w = v(() => {
    if (l.editable.value !== true) return {};
    if (n.platform.is.mobile === true) return { onClick: r.onMobileClick };
    const q = { onMousedown: r.onActivate };
    return (e.dragRange === true || e.dragOnlyRange === true) && Object.assign(q, { onFocus: () => {
      l.focus.value = "both";
    }, onBlur: r.onBlur, onKeydown: z, onKeyup: r.onKeyup }), q;
  });
  function x(q) {
    return n.platform.is.mobile !== true && l.editable.value === true && e.dragOnlyRange !== true ? { onFocus: () => {
      l.focus.value = q;
    }, onBlur: r.onBlur, onKeydown: z, onKeyup: r.onKeyup } : {};
  }
  const T = v(() => e.dragOnlyRange !== true ? l.tabindex.value : null), p = v(() => n.platform.is.mobile !== true && (e.dragRange || e.dragOnlyRange === true) ? l.tabindex.value : null), y = K(null), b = v(() => x("min")), C = r.getThumbRenderFn({ focusValue: "min", getNodeData: () => ({ ref: y, key: "tmin", ...b.value, tabindex: T.value }), ratio: h, label: v(() => e.leftLabelValue !== void 0 ? e.leftLabelValue : u.value.min), thumbColor: v(() => e.leftThumbColor || e.thumbColor || e.color), labelColor: v(() => e.leftLabelColor || e.labelColor), labelTextColor: v(() => e.leftLabelTextColor || e.labelTextColor) }), $ = v(() => x("max")), F = r.getThumbRenderFn({ focusValue: "max", getNodeData: () => ({ ...$.value, key: "tmax", tabindex: T.value }), ratio: m, label: v(() => e.rightLabelValue !== void 0 ? e.rightLabelValue : u.value.max), thumbColor: v(() => e.rightThumbColor || e.thumbColor || e.color), labelColor: v(() => e.rightLabelColor || e.labelColor), labelTextColor: v(() => e.rightLabelTextColor || e.labelTextColor) });
  function N(q) {
    (u.value.min !== e.modelValue.min || u.value.max !== e.modelValue.max) && t("update:modelValue", { ...u.value }), q === true && t("change", { ...u.value });
  }
  function B(q) {
    const { left: E, top: k, width: j, height: Q } = a.value.getBoundingClientRect(), W = e.dragOnlyRange === true ? 0 : e.vertical === true ? y.value.offsetHeight / (2 * Q) : y.value.offsetWidth / (2 * j), X = { left: E, top: k, width: j, height: Q, valueMin: u.value.min, valueMax: u.value.max, ratioMin: s.value, ratioMax: f.value }, re = r.getDraggingRatio(q, X);
    return e.dragOnlyRange !== true && re < X.ratioMin + W ? X.type = al.MIN : e.dragOnlyRange === true || re < X.ratioMax - W ? e.dragRange === true || e.dragOnlyRange === true ? (X.type = al.RANGE, Object.assign(X, { offsetRatio: re, offsetModel: r.convertRatioToModel(re), rangeValue: X.valueMax - X.valueMin, rangeRatio: X.ratioMax - X.ratioMin })) : X.type = X.ratioMax - re < re - X.ratioMin ? al.MAX : al.MIN : X.type = al.MAX, X;
  }
  function L(q, E = l.dragging.value) {
    let k;
    const j = r.getDraggingRatio(q, E), Q = r.convertRatioToModel(j);
    switch (E.type) {
      case al.MIN:
        j <= E.ratioMax ? (k = { minR: j, maxR: E.ratioMax, min: Q, max: E.valueMax }, l.focus.value = "min") : (k = { minR: E.ratioMax, maxR: j, min: E.valueMax, max: Q }, l.focus.value = "max");
        break;
      case al.MAX:
        j >= E.ratioMin ? (k = { minR: E.ratioMin, maxR: j, min: E.valueMin, max: Q }, l.focus.value = "max") : (k = { minR: j, maxR: E.ratioMin, min: Q, max: E.valueMin }, l.focus.value = "min");
        break;
      case al.RANGE:
        const W = j - E.offsetRatio, X = ct(E.ratioMin + W, l.innerMinRatio.value, l.innerMaxRatio.value - E.rangeRatio), re = Q - E.offsetModel, pe = ct(E.valueMin + re, l.innerMin.value, l.innerMax.value - E.rangeValue);
        k = { minR: X, maxR: X + E.rangeRatio, min: l.roundValueFn.value(pe), max: l.roundValueFn.value(pe + E.rangeValue) }, l.focus.value = "both";
        break;
    }
    u.value = u.value.min === null || u.value.max === null ? { min: k.min || e.min, max: k.max || e.max } : { min: k.min, max: k.max }, e.snap !== true || e.step === 0 ? (o.value = k.minR, i.value = k.maxR) : (o.value = r.convertModelToRatio(u.value.min), i.value = r.convertModelToRatio(u.value.max));
  }
  function z(q) {
    if (Ns.includes(q.keyCode) === false) return;
    je(q);
    const E = ([34, 33].includes(q.keyCode) ? 10 : 1) * l.keyStep.value, k = ([34, 37, 40].includes(q.keyCode) ? -1 : 1) * (l.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * E;
    if (l.focus.value === "both") {
      const j = u.value.max - u.value.min, Q = ct(l.roundValueFn.value(u.value.min + k), l.innerMin.value, l.innerMax.value - j);
      u.value = { min: Q, max: l.roundValueFn.value(Q + j) };
    } else {
      if (l.focus.value === false) return;
      {
        const j = l.focus.value;
        u.value = { ...u.value, [j]: ct(l.roundValueFn.value(u.value[j] + k), j === "min" ? l.innerMin.value : u.value.min, j === "max" ? l.innerMax.value : u.value.max) };
      }
    }
    N();
  }
  return () => {
    const q = r.getContent(g, p, w, (E) => {
      E.push(C(), F());
    });
    return d("div", { ref: a, class: "q-range " + l.classes.value + (e.modelValue.min === null || e.modelValue.max === null ? " q-slider--no-value" : ""), ...l.attributes.value, "aria-valuenow": e.modelValue.min + "|" + e.modelValue.max }, q);
  };
} });
he({ name: "QRating", props: { ...el, ...wn, modelValue: { type: Number, required: true }, max: { type: [String, Number], default: 5 }, icon: [String, Array], iconHalf: [String, Array], iconSelected: [String, Array], iconAriaLabel: [String, Array], color: [String, Array], colorHalf: [String, Array], colorSelected: [String, Array], noReset: Boolean, noDimming: Boolean, readonly: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = xe(), r = tl(e), a = Ba(e), o = Cl(a), i = K(0);
  let u = {};
  const c = v(() => e.readonly !== true && e.disable !== true), s = v(() => `q-rating row inline items-center q-rating--${c.value === true ? "" : "non-"}editable` + (e.noDimming === true ? " q-rating--no-dimming" : "") + (e.disable === true ? " disabled" : "") + (e.color !== void 0 && Array.isArray(e.color) === false ? ` text-${e.color}` : "")), f = v(() => {
    const y = Array.isArray(e.icon) === true ? e.icon.length : 0, b = Array.isArray(e.iconSelected) === true ? e.iconSelected.length : 0, C = Array.isArray(e.iconHalf) === true ? e.iconHalf.length : 0, $ = Array.isArray(e.color) === true ? e.color.length : 0, F = Array.isArray(e.colorSelected) === true ? e.colorSelected.length : 0, N = Array.isArray(e.colorHalf) === true ? e.colorHalf.length : 0;
    return { iconLen: y, icon: y > 0 ? e.icon[y - 1] : e.icon, selIconLen: b, selIcon: b > 0 ? e.iconSelected[b - 1] : e.iconSelected, halfIconLen: C, halfIcon: C > 0 ? e.iconHalf[b - 1] : e.iconHalf, colorLen: $, color: $ > 0 ? e.color[$ - 1] : e.color, selColorLen: F, selColor: F > 0 ? e.colorSelected[F - 1] : e.colorSelected, halfColorLen: N, halfColor: N > 0 ? e.colorHalf[N - 1] : e.colorHalf };
  }), h = v(() => {
    if (typeof e.iconAriaLabel == "string") {
      const y = e.iconAriaLabel.length !== 0 ? `${e.iconAriaLabel} ` : "";
      return (b) => `${y}${b}`;
    }
    if (Array.isArray(e.iconAriaLabel) === true) {
      const y = e.iconAriaLabel.length;
      if (y > 0) return (b) => e.iconAriaLabel[Math.min(b, y) - 1];
    }
    return (y, b) => `${b} ${y}`;
  }), m = v(() => {
    const y = [], b = f.value, C = Math.ceil(e.modelValue), $ = c.value === true ? 0 : null, F = e.iconHalf === void 0 || C === e.modelValue ? -1 : C;
    for (let N = 1; N <= e.max; N++) {
      const B = i.value === 0 && e.modelValue >= N || i.value > 0 && i.value >= N, L = F === N && i.value < N, z = i.value > 0 && (L === true ? C : e.modelValue) >= N && i.value < N, q = L === true ? N <= b.halfColorLen ? e.colorHalf[N - 1] : b.halfColor : b.selColor !== void 0 && B === true ? N <= b.selColorLen ? e.colorSelected[N - 1] : b.selColor : N <= b.colorLen ? e.color[N - 1] : b.color, E = (L === true ? N <= b.halfIconLen ? e.iconHalf[N - 1] : b.halfIcon : b.selIcon !== void 0 && (B === true || z === true) ? N <= b.selIconLen ? e.iconSelected[N - 1] : b.selIcon : N <= b.iconLen ? e.icon[N - 1] : b.icon) || l.iconSet.rating.icon;
      y.push({ name: (L === true ? N <= b.halfIconLen ? e.iconHalf[N - 1] : b.halfIcon : b.selIcon !== void 0 && (B === true || z === true) ? N <= b.selIconLen ? e.iconSelected[N - 1] : b.selIcon : N <= b.iconLen ? e.icon[N - 1] : b.icon) || l.iconSet.rating.icon, attrs: { tabindex: $, role: "radio", "aria-checked": e.modelValue === N ? "true" : "false", "aria-label": h.value(N, E) }, iconClass: "q-rating__icon" + (B === true || L === true ? " q-rating__icon--active" : "") + (z === true ? " q-rating__icon--exselected" : "") + (i.value === N ? " q-rating__icon--hovered" : "") + (q !== void 0 ? ` text-${q}` : "") });
    }
    return y;
  }), g = v(() => {
    const y = { role: "radiogroup" };
    return e.disable === true && (y["aria-disabled"] = "true"), e.readonly === true && (y["aria-readonly"] = "true"), y;
  });
  function w(y) {
    if (c.value === true) {
      const b = ct(parseInt(y, 10), 1, parseInt(e.max, 10)), C = e.noReset !== true && e.modelValue === b ? 0 : b;
      C !== e.modelValue && n("update:modelValue", C), i.value = 0;
    }
  }
  function x(y) {
    c.value === true && (i.value = y);
  }
  function T(y, b) {
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
  return Er(() => {
    u = {};
  }), () => {
    const y = [];
    return m.value.forEach(({ iconClass: b, name: C, attrs: $ }, F) => {
      const N = F + 1;
      y.push(d("div", { key: N, ref: (B) => {
        u[`rt${N}`] = B;
      }, class: "q-rating__icon-container flex flex-center", ...$, onClick() {
        w(N);
      }, onMouseover() {
        x(N);
      }, onMouseout: p, onFocus() {
        x(N);
      }, onBlur: p, onKeyup(B) {
        T(B, N);
      } }, Tt(t[`tip-${N}`], [d(et, { class: b, name: C })])));
    }), e.name !== void 0 && e.disable !== true && o(y, "push"), d("div", { class: s.value, style: r.value, ...g.value }, y);
  };
} });
he({ name: "QResponsive", props: Qs, setup(e, { slots: t }) {
  const n = Ks(e);
  return () => d("div", { class: "q-responsive" }, [d("div", { class: "q-responsive__filler overflow-hidden" }, [d("div", { style: n.value })]), d("div", { class: "q-responsive__content absolute-full fit" }, $e(t.default))]);
} });
var Q1 = he({ props: ["store", "barStyle", "verticalBarStyle", "horizontalBarStyle"], setup(e) {
  return () => [d("div", { class: e.store.scroll.vertical.barClass.value, style: [e.barStyle, e.verticalBarStyle], "aria-hidden": "true", onMousedown: e.store.onVerticalMousedown }), d("div", { class: e.store.scroll.horizontal.barClass.value, style: [e.barStyle, e.horizontalBarStyle], "aria-hidden": "true", onMousedown: e.store.onHorizontalMousedown }), sn(d("div", { ref: e.store.scroll.vertical.ref, class: e.store.scroll.vertical.thumbClass.value, style: e.store.scroll.vertical.style.value, "aria-hidden": "true" }), e.store.thumbVertDir), sn(d("div", { ref: e.store.scroll.horizontal.ref, class: e.store.scroll.horizontal.thumbClass.value, style: e.store.scroll.horizontal.style.value, "aria-hidden": "true" }), e.store.thumbHorizDir)];
} }), Vd = ["vertical", "horizontal"], lu = { vertical: { offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y" }, horizontal: { offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x" } }, Dd = { prevent: true, mouse: true, mouseAllDir: true }, Id = (e) => e >= 250 ? 50 : Math.ceil(e / 5), K1 = he({ name: "QScrollArea", props: { ...nt, thumbStyle: Object, verticalThumbStyle: Object, horizontalThumbStyle: Object, barStyle: [Array, String, Object], verticalBarStyle: [Array, String, Object], horizontalBarStyle: [Array, String, Object], verticalOffset: { type: Array, default: [0, 0] }, horizontalOffset: { type: Array, default: [0, 0] }, contentStyle: [Array, String, Object], contentActiveStyle: [Array, String, Object], delay: { type: [String, Number], default: 1e3 }, visible: { type: Boolean, default: null }, tabindex: [String, Number], onScroll: Function }, setup(e, { slots: t, emit: n }) {
  const l = K(false), r = K(false), a = K(false), o = { vertical: K(0), horizontal: K(0) }, i = { vertical: { ref: K(null), position: K(0), size: K(0) }, horizontal: { ref: K(null), position: K(0), size: K(0) } }, { proxy: u } = xe(), c = lt(e, u.$q);
  let s = null, f;
  const h = K(null), m = v(() => "q-scrollarea" + (c.value === true ? " q-scrollarea--dark" : ""));
  Object.assign(o, { verticalInner: v(() => o.vertical.value - e.verticalOffset[0] - e.verticalOffset[1]), horizontalInner: v(() => o.horizontal.value - e.horizontalOffset[0] - e.horizontalOffset[1]) }), i.vertical.percentage = v(() => {
    const k = i.vertical.size.value - o.vertical.value;
    if (k <= 0) return 0;
    const j = ct(i.vertical.position.value / k, 0, 1);
    return Math.round(j * 1e4) / 1e4;
  }), i.vertical.thumbHidden = v(() => (e.visible === null ? a.value : e.visible) !== true && l.value === false && r.value === false || i.vertical.size.value <= o.vertical.value + 1), i.vertical.thumbStart = v(() => e.verticalOffset[0] + i.vertical.percentage.value * (o.verticalInner.value - i.vertical.thumbSize.value)), i.vertical.thumbSize = v(() => Math.round(ct(o.verticalInner.value * o.verticalInner.value / i.vertical.size.value, Id(o.verticalInner.value), o.verticalInner.value))), i.vertical.style = v(() => ({ ...e.thumbStyle, ...e.verticalThumbStyle, top: `${i.vertical.thumbStart.value}px`, height: `${i.vertical.thumbSize.value}px`, right: `${e.horizontalOffset[1]}px` })), i.vertical.thumbClass = v(() => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (i.vertical.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), i.vertical.barClass = v(() => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (i.vertical.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : "")), i.horizontal.percentage = v(() => {
    const k = i.horizontal.size.value - o.horizontal.value;
    if (k <= 0) return 0;
    const j = ct(Math.abs(i.horizontal.position.value) / k, 0, 1);
    return Math.round(j * 1e4) / 1e4;
  }), i.horizontal.thumbHidden = v(() => (e.visible === null ? a.value : e.visible) !== true && l.value === false && r.value === false || i.horizontal.size.value <= o.horizontal.value + 1), i.horizontal.thumbStart = v(() => e.horizontalOffset[0] + i.horizontal.percentage.value * (o.horizontalInner.value - i.horizontal.thumbSize.value)), i.horizontal.thumbSize = v(() => Math.round(ct(o.horizontalInner.value * o.horizontalInner.value / i.horizontal.size.value, Id(o.horizontalInner.value), o.horizontalInner.value))), i.horizontal.style = v(() => ({ ...e.thumbStyle, ...e.horizontalThumbStyle, [u.$q.lang.rtl === true ? "right" : "left"]: `${i.horizontal.thumbStart.value}px`, width: `${i.horizontal.thumbSize.value}px`, bottom: `${e.verticalOffset[1]}px` })), i.horizontal.thumbClass = v(() => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (i.horizontal.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), i.horizontal.barClass = v(() => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (i.horizontal.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : ""));
  const g = v(() => i.vertical.thumbHidden.value === true && i.horizontal.thumbHidden.value === true ? e.contentStyle : e.contentActiveStyle);
  function w() {
    const k = {};
    return Vd.forEach((j) => {
      const Q = i[j];
      Object.assign(k, { [j + "Position"]: Q.position.value, [j + "Percentage"]: Q.percentage.value, [j + "Size"]: Q.size.value, [j + "ContainerSize"]: o[j].value, [j + "ContainerInnerSize"]: o[j + "Inner"].value });
    }), k;
  }
  const x = Rr(() => {
    const k = w();
    k.ref = u, n("scroll", k);
  }, 0);
  function T(k, j, Q) {
    if (Vd.includes(k) === false) {
      console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
      return;
    }
    (k === "vertical" ? _r : Vi)(h.value, j, Q);
  }
  function p({ height: k, width: j }) {
    let Q = false;
    o.vertical.value !== k && (o.vertical.value = k, Q = true), o.horizontal.value !== j && (o.horizontal.value = j, Q = true), Q === true && F();
  }
  function y({ position: k }) {
    let j = false;
    i.vertical.position.value !== k.top && (i.vertical.position.value = k.top, j = true), i.horizontal.position.value !== k.left && (i.horizontal.position.value = k.left, j = true), j === true && F();
  }
  function b({ height: k, width: j }) {
    i.horizontal.size.value !== j && (i.horizontal.size.value = j, F()), i.vertical.size.value !== k && (i.vertical.size.value = k, F());
  }
  function C(k, j) {
    const Q = i[j];
    if (k.isFirst === true) {
      if (Q.thumbHidden.value === true) return;
      f = Q.position.value, r.value = true;
    } else if (r.value !== true) return;
    k.isFinal === true && (r.value = false);
    const W = lu[j], X = (Q.size.value - o[j].value) / (o[j + "Inner"].value - Q.thumbSize.value), re = k.distance[W.dist], pe = f + (k.direction === W.dir ? 1 : -1) * re * X;
    N(pe, j);
  }
  function $(k, j) {
    const Q = i[j];
    if (Q.thumbHidden.value !== true) {
      const W = j === "vertical" ? e.verticalOffset[0] : e.horizontalOffset[0], X = k[lu[j].offset] - W, re = Q.thumbStart.value - W;
      if (X < re || X > re + Q.thumbSize.value) {
        const pe = X - Q.thumbSize.value / 2, Y = ct(pe / (o[j + "Inner"].value - Q.thumbSize.value), 0, 1);
        N(Y * Math.max(0, Q.size.value - o[j].value), j);
      }
      Q.ref.value !== null && Q.ref.value.dispatchEvent(new MouseEvent(k.type, k));
    }
  }
  function F() {
    l.value = true, s !== null && clearTimeout(s), s = setTimeout(() => {
      s = null, l.value = false;
    }, e.delay), e.onScroll !== void 0 && x();
  }
  function N(k, j) {
    h.value[lu[j].scroll] = k;
  }
  let B = null;
  function L() {
    B !== null && clearTimeout(B), B = setTimeout(() => {
      B = null, a.value = true;
    }, u.$q.platform.is.ios ? 50 : 0);
  }
  function z() {
    B !== null && (clearTimeout(B), B = null), a.value = false;
  }
  let q = null;
  ge(() => u.$q.lang.rtl, (k) => {
    h.value !== null && Vi(h.value, Math.abs(i.horizontal.position.value) * (k === true ? -1 : 1));
  }), Vn(() => {
    q = { top: i.vertical.position.value, left: i.horizontal.position.value };
  }), xl(() => {
    if (q === null) return;
    const k = h.value;
    k !== null && (Vi(k, q.left), _r(k, q.top));
  }), Ke(x.cancel), Object.assign(u, { getScrollTarget: () => h.value, getScroll: w, getScrollPosition: () => ({ top: i.vertical.position.value, left: i.horizontal.position.value }), getScrollPercentage: () => ({ top: i.vertical.percentage.value, left: i.horizontal.percentage.value }), setScrollPosition: T, setScrollPercentage(k, j, Q) {
    T(k, j * (i[k].size.value - o[k].value) * (k === "horizontal" && u.$q.lang.rtl === true ? -1 : 1), Q);
  } });
  const E = { scroll: i, thumbVertDir: [[gn, (k) => {
    C(k, "vertical");
  }, void 0, { vertical: true, ...Dd }]], thumbHorizDir: [[gn, (k) => {
    C(k, "horizontal");
  }, void 0, { horizontal: true, ...Dd }]], onVerticalMousedown(k) {
    $(k, "vertical");
  }, onHorizontalMousedown(k) {
    $(k, "horizontal");
  } };
  return () => d("div", { class: m.value, onMouseenter: L, onMouseleave: z }, [d("div", { ref: h, class: "q-scrollarea__container scroll relative-position fit hide-scrollbar", tabindex: e.tabindex !== void 0 ? e.tabindex : void 0 }, [d("div", { class: "q-scrollarea__content absolute", style: g.value }, Tt(t.default, [d(Ul, { debounce: 0, onResize: b })])), d(Oh, { axis: "both", onScroll: y })]), d(Ul, { debounce: 0, onResize: p }), d(Q1, { store: E, barStyle: e.barStyle, verticalBarStyle: e.verticalBarStyle, horizontalBarStyle: e.horizontalBarStyle })]);
} }), Cn = 1e3, W1 = ["start", "center", "end", "start-force", "center-force", "end-force"], Ih = Array.prototype.filter, Y1 = __QUASAR_SSR__ || window.getComputedStyle(document.body).overflowAnchor === void 0 ? xt : function(e, t) {
  e !== null && (e._qOverflowAnimationFrame !== void 0 && cancelAnimationFrame(e._qOverflowAnimationFrame), e._qOverflowAnimationFrame = requestAnimationFrame(() => {
    if (e === null) return;
    e._qOverflowAnimationFrame = void 0;
    const n = e.children || [];
    Ih.call(n, (r) => r.dataset && r.dataset.qVsAnchor !== void 0).forEach((r) => {
      delete r.dataset.qVsAnchor;
    });
    const l = n[t];
    (l == null ? void 0 : l.dataset) && (l.dataset.qVsAnchor = "");
  }));
};
function wr(e, t) {
  return e + t;
}
function ru(e, t, n, l, r, a, o, i) {
  const u = e === window ? document.scrollingElement || document.documentElement : e, c = r === true ? "offsetWidth" : "offsetHeight", s = { scrollStart: 0, scrollViewSize: -o - i, scrollMaxSize: 0, offsetStart: -o, offsetEnd: -i };
  if (r === true ? (e === window ? (s.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, s.scrollViewSize += document.documentElement.clientWidth) : (s.scrollStart = u.scrollLeft, s.scrollViewSize += u.clientWidth), s.scrollMaxSize = u.scrollWidth, a === true && (s.scrollStart = (Ca === true ? s.scrollMaxSize - s.scrollViewSize : 0) - s.scrollStart)) : (e === window ? (s.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0, s.scrollViewSize += document.documentElement.clientHeight) : (s.scrollStart = u.scrollTop, s.scrollViewSize += u.clientHeight), s.scrollMaxSize = u.scrollHeight), n !== null) for (let f = n.previousElementSibling; f !== null; f = f.previousElementSibling) f.classList.contains("q-virtual-scroll--skip") === false && (s.offsetStart += f[c]);
  if (l !== null) for (let f = l.nextElementSibling; f !== null; f = f.nextElementSibling) f.classList.contains("q-virtual-scroll--skip") === false && (s.offsetEnd += f[c]);
  if (t !== e) {
    const f = u.getBoundingClientRect(), h = t.getBoundingClientRect();
    r === true ? (s.offsetStart += h.left - f.left, s.offsetEnd -= h.width) : (s.offsetStart += h.top - f.top, s.offsetEnd -= h.height), e !== window && (s.offsetStart += s.scrollStart), s.offsetEnd += s.scrollMaxSize - s.offsetStart;
  }
  return s;
}
function zd(e, t, n, l) {
  t === "end" && (t = (e === window ? document.body : e)[n === true ? "scrollWidth" : "scrollHeight"]), e === window ? n === true ? (l === true && (t = (Ca === true ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - t), window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t) : n === true ? (l === true && (t = (Ca === true ? e.scrollWidth - e.offsetWidth : 0) - t), e.scrollLeft = t) : e.scrollTop = t;
}
function zr(e, t, n, l) {
  if (n >= l) return 0;
  const r = t.length, a = Math.floor(n / Cn), o = Math.floor((l - 1) / Cn) + 1;
  let i = e.slice(a, o).reduce(wr, 0);
  return n % Cn !== 0 && (i -= t.slice(a * Cn, n).reduce(wr, 0)), l % Cn !== 0 && l !== r && (i -= t.slice(l, o * Cn).reduce(wr, 0)), i;
}
var zh = { virtualScrollSliceSize: { type: [Number, String], default: 10 }, virtualScrollSliceRatioBefore: { type: [Number, String], default: 1 }, virtualScrollSliceRatioAfter: { type: [Number, String], default: 1 }, virtualScrollItemSize: { type: [Number, String], default: 24 }, virtualScrollStickySizeStart: { type: [Number, String], default: 0 }, virtualScrollStickySizeEnd: { type: [Number, String], default: 0 }, tableColspan: [Number, String] }, Nh = Object.keys(zh), Wu = { virtualScrollHorizontal: Boolean, onVirtualScroll: Function, ...zh };
function Hh({ virtualScrollLength: e, getVirtualScrollTarget: t, getVirtualScrollEl: n, virtualScrollItemSizeComputed: l }) {
  const r = xe(), { props: a, emit: o, proxy: i } = r, { $q: u } = i;
  let c, s, f, h = [], m;
  const g = K(0), w = K(0), x = K({}), T = K(null), p = K(null), y = K(null), b = K({ from: 0, to: 0 }), C = v(() => a.tableColspan !== void 0 ? a.tableColspan : 100);
  l === void 0 && (l = v(() => a.virtualScrollItemSize));
  const $ = v(() => l.value + ";" + a.virtualScrollHorizontal), F = v(() => $.value + ";" + a.virtualScrollSliceRatioBefore + ";" + a.virtualScrollSliceRatioAfter);
  ge(F, () => {
    Q();
  }), ge($, N);
  function N() {
    j(s, true);
  }
  function B(Y) {
    j(Y === void 0 ? s : Y);
  }
  function L(Y, _) {
    const H = t();
    if (H == null || H.nodeType === 8) return;
    const V = ru(H, n(), T.value, p.value, a.virtualScrollHorizontal, u.lang.rtl, a.virtualScrollStickySizeStart, a.virtualScrollStickySizeEnd);
    f !== V.scrollViewSize && Q(V.scrollViewSize), q(H, V, Math.min(e.value - 1, Math.max(0, parseInt(Y, 10) || 0)), 0, W1.indexOf(_) !== -1 ? _ : s !== -1 && Y > s ? "end" : "start");
  }
  function z() {
    const Y = t();
    if (Y == null || Y.nodeType === 8) return;
    const _ = ru(Y, n(), T.value, p.value, a.virtualScrollHorizontal, u.lang.rtl, a.virtualScrollStickySizeStart, a.virtualScrollStickySizeEnd), H = e.value - 1, V = _.scrollMaxSize - _.offsetStart - _.offsetEnd - w.value;
    if (c === _.scrollStart) return;
    if (_.scrollMaxSize <= 0) {
      q(Y, _, 0, 0);
      return;
    }
    f !== _.scrollViewSize && Q(_.scrollViewSize), E(b.value.from);
    const fe = Math.floor(_.scrollMaxSize - Math.max(_.scrollViewSize, _.offsetEnd) - Math.min(m[H], _.scrollViewSize / 2));
    if (fe > 0 && Math.ceil(_.scrollStart) >= fe) {
      q(Y, _, H, _.scrollMaxSize - _.offsetEnd - h.reduce(wr, 0));
      return;
    }
    let A = 0, R = _.scrollStart - _.offsetStart, G = R;
    if (R <= V && R + _.scrollViewSize >= g.value) R -= g.value, A = b.value.from, G = R;
    else for (let O = 0; R >= h[O] && A < H; O++) R -= h[O], A += Cn;
    for (; R > 0 && A < H; ) R -= m[A], R > -_.scrollViewSize ? (A++, G = R) : G = m[A] + R;
    q(Y, _, A, G);
  }
  function q(Y, _, H, V, fe) {
    const A = typeof fe == "string" && fe.indexOf("-force") !== -1, R = A === true ? fe.replace("-force", "") : fe, G = R !== void 0 ? R : "start";
    let O = Math.max(0, H - x.value[G]), ne = O + x.value.total;
    ne > e.value && (ne = e.value, O = Math.max(0, ne - x.value.total)), c = _.scrollStart;
    const be = O !== b.value.from || ne !== b.value.to;
    if (be === false && R === void 0) {
      X(H);
      return;
    }
    const { activeElement: S } = document, M = y.value;
    be === true && M !== null && M !== S && M.contains(S) === true && (M.addEventListener("focusout", k), setTimeout(() => {
      M == null ? void 0 : M.removeEventListener("focusout", k);
    })), Y1(M, H - O);
    const D = R !== void 0 ? m.slice(O, H).reduce(wr, 0) : 0;
    if (be === true) {
      const ee = ne >= b.value.from && O <= b.value.to ? b.value.to : ne;
      b.value = { from: O, to: ee }, g.value = zr(h, m, 0, O), w.value = zr(h, m, ne, e.value), requestAnimationFrame(() => {
        b.value.to !== ne && c === _.scrollStart && (b.value = { from: b.value.from, to: ne }, w.value = zr(h, m, ne, e.value));
      });
    }
    requestAnimationFrame(() => {
      if (c !== _.scrollStart) return;
      be === true && E(O);
      const ee = m.slice(O, H).reduce(wr, 0), le = ee + _.offsetStart + g.value, P = le + m[H];
      let te = le + V;
      if (R !== void 0) {
        const ce = ee - D, de = _.scrollStart + ce;
        te = A !== true && de < le && P < de + _.scrollViewSize ? de : R === "end" ? P - _.scrollViewSize : le - (R === "start" ? 0 : Math.round((_.scrollViewSize - m[H]) / 2));
      }
      c = te, zd(Y, te, a.virtualScrollHorizontal, u.lang.rtl), X(H);
    });
  }
  function E(Y) {
    const _ = y.value;
    if (_) {
      const H = Ih.call(_.children, (O) => O.classList && O.classList.contains("q-virtual-scroll--skip") === false), V = H.length, fe = a.virtualScrollHorizontal === true ? (O) => O.getBoundingClientRect().width : (O) => O.offsetHeight;
      let A = Y, R, G;
      for (let O = 0; O < V; ) {
        for (R = fe(H[O]), O++; O < V && H[O].classList.contains("q-virtual-scroll--with-prev") === true; ) R += fe(H[O]), O++;
        G = R - m[A], G !== 0 && (m[A] += G, h[Math.floor(A / Cn)] += G), A++;
      }
    }
  }
  function k() {
    var _a3;
    (_a3 = y.value) == null ? void 0 : _a3.focus();
  }
  function j(Y, _) {
    const H = 1 * l.value;
    (_ === true || Array.isArray(m) === false) && (m = []);
    const V = m.length;
    m.length = e.value;
    for (let A = e.value - 1; A >= V; A--) m[A] = H;
    const fe = Math.floor((e.value - 1) / Cn);
    h = [];
    for (let A = 0; A <= fe; A++) {
      let R = 0;
      const G = Math.min((A + 1) * Cn, e.value);
      for (let O = A * Cn; O < G; O++) R += m[O];
      h.push(R);
    }
    s = -1, c = void 0, g.value = zr(h, m, 0, b.value.from), w.value = zr(h, m, b.value.to, e.value), Y >= 0 ? (E(b.value.from), We(() => {
      L(Y);
    })) : re();
  }
  function Q(Y) {
    if (Y === void 0 && typeof window < "u") {
      const R = t();
      R != null && R.nodeType !== 8 && (Y = ru(R, n(), T.value, p.value, a.virtualScrollHorizontal, u.lang.rtl, a.virtualScrollStickySizeStart, a.virtualScrollStickySizeEnd).scrollViewSize);
    }
    f = Y;
    const _ = parseFloat(a.virtualScrollSliceRatioBefore) || 0, H = parseFloat(a.virtualScrollSliceRatioAfter) || 0, V = 1 + _ + H, fe = Y === void 0 || Y <= 0 ? 1 : Math.ceil(Y / l.value), A = Math.max(1, fe, Math.ceil((a.virtualScrollSliceSize > 0 ? a.virtualScrollSliceSize : 10) / V));
    x.value = { total: Math.ceil(A * V), start: Math.ceil(A * _), center: Math.ceil(A * (0.5 + _)), end: Math.ceil(A * (1 + _)), view: fe };
  }
  function W(Y, _) {
    const H = a.virtualScrollHorizontal === true ? "width" : "height", V = { ["--q-virtual-scroll-item-" + H]: l.value + "px" };
    return [Y === "tbody" ? d(Y, { class: "q-virtual-scroll__padding", key: "before", ref: T }, [d("tr", [d("td", { style: { [H]: `${g.value}px`, ...V }, colspan: C.value })])]) : d(Y, { class: "q-virtual-scroll__padding", key: "before", ref: T, style: { [H]: `${g.value}px`, ...V } }), d(Y, { class: "q-virtual-scroll__content", key: "content", ref: y, tabindex: -1 }, _.flat()), Y === "tbody" ? d(Y, { class: "q-virtual-scroll__padding", key: "after", ref: p }, [d("tr", [d("td", { style: { [H]: `${w.value}px`, ...V }, colspan: C.value })])]) : d(Y, { class: "q-virtual-scroll__padding", key: "after", ref: p, style: { [H]: `${w.value}px`, ...V } })];
  }
  function X(Y) {
    s !== Y && (a.onVirtualScroll !== void 0 && o("virtualScroll", { index: Y, from: b.value.from, to: b.value.to - 1, direction: Y < s ? "decrease" : "increase", ref: i }), s = Y);
  }
  Q();
  const re = Rr(z, u.platform.is.ios === true ? 120 : 35);
  Zo(() => {
    Q();
  });
  let pe = false;
  return Vn(() => {
    pe = true;
  }), xl(() => {
    if (pe !== true) return;
    const Y = t();
    c !== void 0 && Y !== void 0 && Y !== null && Y.nodeType !== 8 ? zd(Y, c, a.virtualScrollHorizontal, u.lang.rtl) : L(s);
  }), __QUASAR_SSR__ || Ke(() => {
    re.cancel();
  }), Object.assign(i, { scrollTo: L, reset: N, refresh: B }), { virtualScrollSliceRange: b, virtualScrollSliceSizeComputed: x, setVirtualScrollSize: Q, onVirtualScrollEvt: re, localResetVirtualScroll: j, padVirtualScroll: W, scrollTo: L, reset: N, refresh: B };
}
var Nd = (e) => ["add", "add-unique", "toggle"].includes(e), X1 = ".*+?^${}()|[]\\", G1 = Object.keys(mi);
function au(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (l) => l !== null && typeof l == "object" && n in l ? l[n] : l;
}
var Z1 = he({ name: "QSelect", inheritAttrs: false, props: { ...Wu, ...wn, ...mi, modelValue: { required: true }, multiple: Boolean, displayValue: [String, Number], displayValueHtml: Boolean, dropdownIcon: String, options: { type: Array, default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], hideSelected: Boolean, hideDropdownIcon: Boolean, fillInput: Boolean, maxValues: [Number, String], optionsDense: Boolean, optionsDark: { type: Boolean, default: null }, optionsSelectedClass: String, optionsHtml: Boolean, optionsCover: Boolean, menuShrink: Boolean, menuAnchor: String, menuSelf: String, menuOffset: Array, popupContentClass: String, popupContentStyle: [String, Array, Object], popupNoRouteDismiss: Boolean, useInput: Boolean, useChips: Boolean, newValueMode: { type: String, validator: Nd }, mapOptions: Boolean, emitValue: Boolean, disableTabSelection: Boolean, inputDebounce: { type: [Number, String], default: 500 }, inputClass: [Array, String, Object], inputStyle: [Array, String, Object], tabindex: { type: [String, Number], default: 0 }, autocomplete: String, transitionShow: {}, transitionHide: {}, transitionDuration: {}, behavior: { type: String, validator: (e) => ["default", "menu", "dialog"].includes(e), default: "default" }, virtualScrollItemSize: Wu.virtualScrollItemSize.type, onNewValue: Function, onFilter: Function }, emits: [...hi, "add", "remove", "inputValue", "keyup", "keypress", "keydown", "popupShow", "popupHide", "filterAbort"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), { $q: r } = l, a = K(false), o = K(false), i = K(-1), u = K(""), c = K(false), s = K(false);
  let f = null, h = null, m, g, w, x = null, T, p, y, b;
  const C = K(null), $ = K(null), F = K(null), N = K(null), B = K(null), L = Ps(e), z = $h(se), q = v(() => Array.isArray(e.options) ? e.options.length : 0), E = v(() => e.virtualScrollItemSize === void 0 ? e.optionsDense === true ? 24 : 48 : e.virtualScrollItemSize), { virtualScrollSliceRange: k, virtualScrollSliceSizeComputed: j, localResetVirtualScroll: Q, padVirtualScroll: W, onVirtualScrollEvt: X, scrollTo: re, setVirtualScrollSize: pe } = Hh({ virtualScrollLength: q, getVirtualScrollTarget: jt, getVirtualScrollEl: Ct, virtualScrollItemSizeComputed: E }), Y = gi(), _ = v(() => {
    const J = e.mapOptions === true && e.multiple !== true, Ae = e.modelValue !== void 0 && (e.modelValue !== null || J === true) ? e.multiple === true && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
    if (e.mapOptions === true && Array.isArray(e.options) === true) {
      const Pe = e.mapOptions === true && m !== void 0 ? m : [], tt = Ae.map((gt) => oe(gt, Pe));
      return e.modelValue === null && J === true ? tt.filter((gt) => gt !== null) : tt;
    }
    return Ae;
  }), H = v(() => {
    const J = {};
    return G1.forEach((Ae) => {
      const Pe = e[Ae];
      Pe !== void 0 && (J[Ae] = Pe);
    }), J;
  }), V = v(() => e.optionsDark === null ? Y.isDark.value : e.optionsDark), fe = v(() => Kl(_.value)), A = v(() => {
    let J = "q-field__input q-placeholder col";
    return e.hideSelected === true || _.value.length === 0 ? [J, e.inputClass] : (J += " q-field__input--padding", e.inputClass === void 0 ? J : [J, e.inputClass]);
  }), R = v(() => (e.virtualScrollHorizontal === true ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")), G = v(() => q.value === 0), O = v(() => _.value.map((J) => ae.value(J)).join(", ")), ne = v(() => e.displayValue !== void 0 ? e.displayValue : O.value), be = v(() => e.optionsHtml === true ? () => true : (J) => (J == null ? void 0 : J.html) === true), S = v(() => e.displayValueHtml === true || e.displayValue === void 0 && (e.optionsHtml === true || _.value.some(be.value))), M = v(() => Y.focused.value === true ? e.tabindex : -1), D = v(() => {
    const J = { tabindex: e.tabindex, role: "combobox", "aria-label": e.label, "aria-readonly": e.readonly === true ? "true" : "false", "aria-autocomplete": e.useInput === true ? "list" : "none", "aria-expanded": a.value === true ? "true" : "false", "aria-controls": `${Y.targetUid.value}_lb` };
    return i.value >= 0 && (J["aria-activedescendant"] = `${Y.targetUid.value}_${i.value}`), J;
  }), ee = v(() => ({ id: `${Y.targetUid.value}_lb`, role: "listbox", "aria-multiselectable": e.multiple === true ? "true" : "false" })), le = v(() => _.value.map((J, Ae) => ({ index: Ae, opt: J, html: be.value(J), selected: true, removeAtIndex: Me, toggleOption: Ve, tabindex: M.value }))), P = v(() => {
    if (q.value === 0) return [];
    const { from: J, to: Ae } = k.value;
    return e.options.slice(J, Ae).map((Pe, tt) => {
      const gt = U.value(Pe) === true, vt = _e2(Pe) === true, zt = J + tt, Pt = { clickable: true, active: vt, activeClass: de.value, manualFocus: true, focused: false, disable: gt, tabindex: -1, dense: e.optionsDense, dark: V.value, role: "option", "aria-selected": vt === true ? "true" : "false", id: `${Y.targetUid.value}_${zt}`, onClick: () => {
        Ve(Pe);
      } };
      return gt !== true && (i.value === zt && (Pt.focused = true), r.platform.is.desktop === true && (Pt.onMousemove = () => {
        a.value === true && ue(zt);
      })), { index: zt, opt: Pe, html: be.value(Pe), label: ae.value(Pe), selected: Pt.active, focused: Pt.focused, toggleOption: Ve, setOptionIndex: ue, itemProps: Pt };
    });
  }), te = v(() => e.dropdownIcon !== void 0 ? e.dropdownIcon : r.iconSet.arrow.dropdown), ce = v(() => e.optionsCover === false && e.outlined !== true && e.standout !== true && e.borderless !== true && e.rounded !== true), de = v(() => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : ""), me = v(() => au(e.optionValue, "value")), ae = v(() => au(e.optionLabel, "label")), U = v(() => au(e.optionDisable, "disable")), ie = v(() => _.value.map(me.value)), we = v(() => {
    const J = { onInput: se, onChange: z, onKeydown: it, onKeyup: Re, onKeypress: Ye, onFocus: Ce, onClick(Ae) {
      g === true && wt(Ae);
    } };
    return J.onCompositionstart = J.onCompositionupdate = J.onCompositionend = z, J;
  });
  ge(_, (J) => {
    m = J, e.useInput === true && e.fillInput === true && e.multiple !== true && Y.innerLoading.value !== true && (o.value !== true && a.value !== true || fe.value !== true) && (w !== true && cn(), (o.value === true || a.value === true) && Le(""));
  }, { immediate: true }), ge(() => e.fillInput, cn), ge(a, pi), ge(q, Fg);
  function ke(J) {
    return e.emitValue === true ? me.value(J) : J;
  }
  function Te(J) {
    if (J !== -1 && J < _.value.length) if (e.multiple === true) {
      const Ae = e.modelValue.slice();
      n("remove", { index: J, value: Ae.splice(J, 1)[0] }), n("update:modelValue", Ae);
    } else n("update:modelValue", null);
  }
  function Me(J) {
    Te(J), Y.focus();
  }
  function He(J, Ae) {
    const Pe = ke(J);
    if (e.multiple !== true) {
      e.fillInput === true && Fe(ae.value(J), true, true), n("update:modelValue", Pe);
      return;
    }
    if (_.value.length === 0) {
      n("add", { index: 0, value: Pe }), n("update:modelValue", e.multiple === true ? [Pe] : Pe);
      return;
    }
    if (Ae === true && _e2(J) === true || e.maxValues !== void 0 && e.modelValue.length >= e.maxValues) return;
    const tt = e.modelValue.slice();
    n("add", { index: tt.length, value: Pe }), tt.push(Pe), n("update:modelValue", tt);
  }
  function Ve(J, Ae) {
    var _a3;
    if (Y.editable.value !== true || J === void 0 || U.value(J) === true) return;
    const Pe = me.value(J);
    if (e.multiple !== true) {
      Ae !== true && (Fe(e.fillInput === true ? ae.value(J) : "", true, true), rt()), (_a3 = $.value) == null ? void 0 : _a3.focus(), (_.value.length === 0 || kn(me.value(_.value[0]), Pe) !== true) && n("update:modelValue", e.emitValue === true ? Pe : J);
      return;
    }
    if ((g !== true || c.value === true) && Y.focus(), Ce(), _.value.length === 0) {
      const vt = e.emitValue === true ? Pe : J;
      n("add", { index: 0, value: vt }), n("update:modelValue", e.multiple === true ? [vt] : vt);
      return;
    }
    const tt = e.modelValue.slice(), gt = ie.value.findIndex((vt) => kn(vt, Pe));
    if (gt !== -1) n("remove", { index: gt, value: tt.splice(gt, 1)[0] });
    else {
      if (e.maxValues !== void 0 && tt.length >= e.maxValues) return;
      const vt = e.emitValue === true ? Pe : J;
      n("add", { index: tt.length, value: vt }), tt.push(vt);
    }
    n("update:modelValue", tt);
  }
  function ue(J) {
    if (r.platform.is.desktop !== true) return;
    const Ae = J !== -1 && J < q.value ? J : -1;
    i.value !== Ae && (i.value = Ae);
  }
  function ye(J = 1, Ae) {
    if (a.value === true) {
      let Pe = i.value;
      do
        Pe = qo(Pe + J, -1, q.value - 1);
      while (Pe !== -1 && Pe !== i.value && U.value(e.options[Pe]) === true);
      i.value !== Pe && (ue(Pe), re(Pe), Ae !== true && e.useInput === true && e.fillInput === true && Se(Pe >= 0 ? ae.value(e.options[Pe]) : T, true));
    }
  }
  function oe(J, Ae) {
    const Pe = (tt) => kn(me.value(tt), J);
    return e.options.find(Pe) || Ae.find(Pe) || J;
  }
  function _e2(J) {
    const Ae = me.value(J);
    return ie.value.find((Pe) => kn(Pe, Ae)) !== void 0;
  }
  function Ce(J) {
    e.useInput === true && $.value !== null && (J === void 0 || $.value === J.target && J.target.value === O.value) && $.value.select();
  }
  function Oe(J) {
    yn(J, 27) === true && a.value === true && (wt(J), rt(), cn()), n("keyup", J);
  }
  function Re(J) {
    const { value: Ae } = J.target;
    if (J.keyCode !== void 0) {
      Oe(J);
      return;
    }
    if (J.target.value = "", f !== null && (clearTimeout(f), f = null), h !== null && (clearTimeout(h), h = null), cn(), typeof Ae == "string" && Ae.length !== 0) {
      const Pe = Ae.toLocaleLowerCase(), tt = (vt) => {
        const zt = e.options.find((Pt) => String(vt.value(Pt)).toLocaleLowerCase() === Pe);
        return zt === void 0 ? false : (_.value.indexOf(zt) === -1 ? Ve(zt) : rt(), true);
      }, gt = (vt) => {
        tt(me) !== true && vt !== true && tt(ae) !== true && Le(Ae, true, () => gt(true));
      };
      gt();
    } else Y.clearValue(J);
  }
  function Ye(J) {
    n("keypress", J);
  }
  function it(J) {
    if (n("keydown", J), Yl(J) === true) return;
    const Ae = u.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0), Pe = J.shiftKey !== true && e.disableTabSelection !== true && e.multiple !== true && (i.value !== -1 || Ae === true);
    if (J.keyCode === 27) {
      Vt(J);
      return;
    }
    if (J.keyCode === 9 && Pe === false) {
      Be();
      return;
    }
    if (J.target === void 0 || J.target.id !== Y.targetUid.value || Y.editable.value !== true) return;
    if (J.keyCode === 40 && Y.innerLoading.value !== true && a.value === false) {
      je(J), ze();
      return;
    }
    if (J.keyCode === 8 && (e.useChips === true || e.clearable === true) && e.hideSelected !== true && u.value.length === 0) {
      e.multiple === true && Array.isArray(e.modelValue) === true ? Te(e.modelValue.length - 1) : e.multiple !== true && e.modelValue !== null && n("update:modelValue", null);
      return;
    }
    (J.keyCode === 35 || J.keyCode === 36) && (typeof u.value != "string" || u.value.length === 0) && (je(J), i.value = -1, ye(J.keyCode === 36 ? 1 : -1, e.multiple)), (J.keyCode === 33 || J.keyCode === 34) && j.value !== void 0 && (je(J), i.value = Math.max(-1, Math.min(q.value, i.value + (J.keyCode === 33 ? -1 : 1) * j.value.view)), ye(J.keyCode === 33 ? 1 : -1, e.multiple)), (J.keyCode === 38 || J.keyCode === 40) && (je(J), ye(J.keyCode === 38 ? -1 : 1, e.multiple));
    const tt = q.value;
    if ((y === void 0 || b < Date.now()) && (y = ""), tt > 0 && e.useInput !== true && J.key !== void 0 && J.key.length === 1 && J.altKey === false && J.ctrlKey === false && J.metaKey === false && (J.keyCode !== 32 || y.length !== 0)) {
      a.value !== true && ze(J);
      const gt = J.key.toLocaleLowerCase(), vt = y.length === 1 && y[0] === gt;
      b = Date.now() + 1500, vt === false && (je(J), y += gt);
      const zt = new RegExp("^" + y.split("").map((_i) => X1.indexOf(_i) !== -1 ? "\\" + _i : _i).join(".*"), "i");
      let Pt = i.value;
      if (vt === true || Pt < 0 || zt.test(ae.value(e.options[Pt])) !== true) do
        Pt = qo(Pt + 1, -1, tt - 1);
      while (Pt !== i.value && (U.value(e.options[Pt]) === true || zt.test(ae.value(e.options[Pt])) !== true));
      i.value !== Pt && We(() => {
        ue(Pt), re(Pt), Pt >= 0 && e.useInput === true && e.fillInput === true && Se(ae.value(e.options[Pt]), true);
      });
      return;
    }
    if (!(J.keyCode !== 13 && (J.keyCode !== 32 || e.useInput === true || y !== "") && (J.keyCode !== 9 || Pe === false))) {
      if (J.keyCode !== 9 && je(J), i.value !== -1 && i.value < tt) {
        Ve(e.options[i.value]);
        return;
      }
      if (Ae === true) {
        const gt = (vt, zt) => {
          var _a3;
          if (zt) {
            if (Nd(zt) !== true) return;
          } else zt = e.newValueMode;
          if (Fe("", e.multiple !== true, true), vt == null) return;
          (zt === "toggle" ? Ve : He)(vt, zt === "add-unique"), e.multiple !== true && ((_a3 = $.value) == null ? void 0 : _a3.focus(), rt());
        };
        if (e.onNewValue !== void 0 ? n("newValue", u.value, gt) : gt(u.value), e.multiple !== true) return;
      }
      a.value === true ? Be() : Y.innerLoading.value !== true && ze();
    }
  }
  function Ct() {
    return g === true ? B.value : F.value !== null && F.value.contentEl !== null ? F.value.contentEl : void 0;
  }
  function jt() {
    return Ct();
  }
  function nl() {
    return e.hideSelected === true ? [] : t["selected-item"] !== void 0 ? le.value.map((J) => t["selected-item"](J)).slice() : t.selected !== void 0 ? [].concat(t.selected()) : e.useChips === true ? le.value.map((J, Ae) => d(Wm, { key: "option-" + Ae, removable: Y.editable.value === true && U.value(J.opt) !== true, dense: true, textColor: e.color, tabindex: M.value, onRemove() {
      J.removeAtIndex(Ae);
    } }, () => d("span", { class: "ellipsis", [J.html === true ? "innerHTML" : "textContent"]: ae.value(J.opt) }))) : [d("span", { class: "ellipsis", [S.value === true ? "innerHTML" : "textContent"]: ne.value })];
  }
  function ln() {
    if (G.value === true) return t["no-option"] !== void 0 ? t["no-option"]({ inputValue: u.value }) : void 0;
    const J = t.option !== void 0 ? t.option : (Pe) => d(kr, { key: Pe.index, ...Pe.itemProps }, () => d(mn, () => d(Uu, () => d("span", { [Pe.html === true ? "innerHTML" : "textContent"]: Pe.label }))));
    let Ae = W("div", P.value.map(J));
    return t["before-options"] !== void 0 && (Ae = t["before-options"]().concat(Ae)), Tt(t["after-options"], Ae);
  }
  function In(J, Ae) {
    const Pe = Ae === true ? { ...D.value, ...Y.splitAttrs.attributes.value } : void 0, tt = { ref: Ae === true ? $ : void 0, key: "i_t", class: A.value, style: e.inputStyle, value: u.value !== void 0 ? u.value : "", type: "search", ...Pe, id: Ae === true ? Y.targetUid.value : void 0, maxlength: e.maxlength, autocomplete: e.autocomplete, "data-autofocus": J === true || e.autofocus === true || void 0, disabled: e.disable === true, readonly: e.readonly === true, ...we.value };
    return J !== true && g === true && (Array.isArray(tt.class) === true ? tt.class = [...tt.class, "no-pointer-events"] : tt.class += " no-pointer-events"), d("input", tt);
  }
  function se(J) {
    f !== null && (clearTimeout(f), f = null), h !== null && (clearTimeout(h), h = null), !(J && J.target && J.target.qComposing === true) && (Se(J.target.value || ""), w = true, T = u.value, Y.focused.value !== true && (g !== true || c.value === true) && Y.focus(), e.onFilter !== void 0 && (f = setTimeout(() => {
      f = null, Le(u.value);
    }, e.inputDebounce)));
  }
  function Se(J, Ae) {
    u.value !== J && (u.value = J, Ae === true || e.inputDebounce === 0 || e.inputDebounce === "0" ? n("inputValue", J) : h = setTimeout(() => {
      h = null, n("inputValue", J);
    }, e.inputDebounce));
  }
  function Fe(J, Ae, Pe) {
    w = Pe !== true, e.useInput === true && (Se(J, true), (Ae === true || Pe !== true) && (T = J), Ae !== true && Le(J));
  }
  function Le(J, Ae, Pe) {
    if (e.onFilter === void 0 || Ae !== true && Y.focused.value !== true) return;
    Y.innerLoading.value === true ? n("filterAbort") : (Y.innerLoading.value = true, s.value = true), J !== "" && e.multiple !== true && _.value.length !== 0 && w !== true && J === ae.value(_.value[0]) && (J = "");
    const tt = setTimeout(() => {
      a.value === true && (a.value = false);
    }, 10);
    x !== null && clearTimeout(x), x = tt, n("filter", J, (gt, vt) => {
      (Ae === true || Y.focused.value === true) && x === tt && (clearTimeout(x), typeof gt == "function" && gt(), s.value = false, We(() => {
        Y.innerLoading.value = false, Y.editable.value === true && (Ae === true ? a.value === true && rt() : a.value === true ? pi(true) : a.value = true), typeof vt == "function" && We(() => {
          vt(l);
        }), typeof Pe == "function" && We(() => {
          Pe(l);
        });
      }));
    }, () => {
      Y.focused.value === true && x === tt && (clearTimeout(x), Y.innerLoading.value = false, s.value = false), a.value === true && (a.value = false);
    });
  }
  function Ue() {
    return d(di, { ref: F, class: R.value, style: e.popupContentStyle, modelValue: a.value, fit: e.menuShrink !== true, cover: e.optionsCover === true && G.value !== true && e.useInput !== true, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, dark: V.value, noParentEvent: true, noRefocus: true, noFocus: true, noRouteDismiss: e.popupNoRouteDismiss, square: ce.value, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, separateClosePopup: true, ...ee.value, onScrollPassive: X, onBeforeShow: ec, onBeforeHide: yt, onShow: ht }, ln);
  }
  function yt(J) {
    tc(J), Be();
  }
  function ht() {
    pe();
  }
  function I(J) {
    var _a3;
    wt(J), (_a3 = $.value) == null ? void 0 : _a3.focus(), c.value = true, window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
  }
  function Z(J) {
    wt(J), We(() => {
      c.value = false;
    });
  }
  function ve() {
    const J = [d(_1, { class: `col-auto ${Y.fieldClass.value}`, ...H.value, for: Y.targetUid.value, dark: V.value, square: true, loading: s.value, itemAligned: false, filled: true, stackLabel: u.value.length !== 0, ...Y.splitAttrs.listeners.value, onFocus: I, onBlur: Z }, { ...t, rawControl: () => Y.getControl(true), before: void 0, after: void 0 })];
    return a.value === true && J.push(d("div", { ref: B, class: R.value + " scroll", style: e.popupContentStyle, ...ee.value, onClick: Vt, onScrollPassive: X }, ln())), d(vi, { ref: N, modelValue: o.value, position: e.useInput === true ? "top" : void 0, transitionShow: p, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, noRouteDismiss: e.popupNoRouteDismiss, onBeforeShow: ec, onBeforeHide: qe, onHide: Ee, onShow: Ge }, () => d("div", { class: "q-select__dialog" + (V.value === true ? " q-select__dialog--dark q-dark" : "") + (c.value === true ? " q-select__dialog--focused" : "") }, J));
  }
  function qe(J) {
    tc(J), N.value !== null && N.value.__updateRefocusTarget(Y.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")), Y.focused.value = false;
  }
  function Ee(J) {
    rt(), Y.focused.value === false && n("blur", J), cn();
  }
  function Ge() {
    const J = document.activeElement;
    (J === null || J.id !== Y.targetUid.value) && $.value !== null && $.value !== J && $.value.focus(), pe();
  }
  function Be() {
    o.value !== true && (i.value = -1, a.value === true && (a.value = false), Y.focused.value === false && (x !== null && (clearTimeout(x), x = null), Y.innerLoading.value === true && (n("filterAbort"), Y.innerLoading.value = false, s.value = false)));
  }
  function ze(J) {
    Y.editable.value === true && (g === true ? (Y.onControlFocusin(J), o.value = true, We(() => {
      Y.focus();
    })) : Y.focus(), e.onFilter !== void 0 ? Le(u.value) : (G.value !== true || t["no-option"] !== void 0) && (a.value = true));
  }
  function rt() {
    o.value = false, Be();
  }
  function cn() {
    e.useInput === true && Fe(e.multiple !== true && e.fillInput === true && _.value.length !== 0 && ae.value(_.value[0]) || "", true, true);
  }
  function pi(J) {
    let Ae = -1;
    if (J === true) {
      if (_.value.length !== 0) {
        const Pe = me.value(_.value[0]);
        Ae = e.options.findIndex((tt) => kn(me.value(tt), Pe));
      }
      Q(Ae);
    }
    ue(Ae);
  }
  function Fg(J, Ae) {
    a.value === true && Y.innerLoading.value === false && (Q(-1, true), We(() => {
      a.value === true && Y.innerLoading.value === false && (J > Ae ? Q() : pi(true));
    }));
  }
  function Js() {
    o.value === false && F.value !== null && F.value.updatePosition();
  }
  function ec(J) {
    J !== void 0 && wt(J), n("popupShow", J), Y.hasPopupOpen = true, Y.onControlFocusin(J);
  }
  function tc(J) {
    J !== void 0 && wt(J), n("popupHide", J), Y.hasPopupOpen = false, Y.onControlFocusout(J);
  }
  function nc() {
    g = r.platform.is.mobile !== true && e.behavior !== "dialog" ? false : e.behavior !== "menu" && (e.useInput === true ? t["no-option"] !== void 0 || e.onFilter !== void 0 || G.value === false : true), p = r.platform.is.ios === true && g === true && e.useInput === true ? "fade" : e.transitionShow;
  }
  return Er(nc), Jo(Js), nc(), Ke(() => {
    f !== null && clearTimeout(f), h !== null && clearTimeout(h);
  }), Object.assign(l, { showPopup: ze, hidePopup: rt, removeAtIndex: Te, add: He, toggleOption: Ve, getOptionIndex: () => i.value, setOptionIndex: ue, moveOptionSelection: ye, filter: Le, updateMenuPosition: Js, updateInputValue: Fe, isOptionSelected: _e2, getEmittingOptionValue: ke, isOptionDisabled: (...J) => U.value.apply(null, J) === true, getOptionValue: (...J) => me.value.apply(null, J), getOptionLabel: (...J) => ae.value.apply(null, J) }), Object.assign(Y, { innerValue: _, fieldClass: v(() => `q-select q-field--auto-height q-select--with${e.useInput !== true ? "out" : ""}-input q-select--with${e.useChips !== true ? "out" : ""}-chips q-select--${e.multiple === true ? "multiple" : "single"}`), inputRef: C, targetRef: $, hasValue: fe, showPopup: ze, floatingLabel: v(() => e.hideSelected !== true && fe.value === true || typeof u.value == "number" || u.value.length !== 0 || Kl(e.displayValue)), getControlChild: () => {
    if (Y.editable.value !== false && (o.value === true || G.value !== true || t["no-option"] !== void 0)) return g === true ? ve() : Ue();
    Y.hasPopupOpen === true && (Y.hasPopupOpen = false);
  }, controlEvents: { onFocusin(J) {
    Y.onControlFocusin(J);
  }, onFocusout(J) {
    Y.onControlFocusout(J, () => {
      cn(), Be();
    });
  }, onClick(J) {
    var _a3;
    if (Vt(J), g !== true && a.value === true) {
      Be(), (_a3 = $.value) == null ? void 0 : _a3.focus();
      return;
    }
    ze(J);
  } }, getControl: (J) => {
    const Ae = nl(), Pe = J === true || o.value !== true || g !== true;
    if (e.useInput === true) Ae.push(In(J, Pe));
    else if (Y.editable.value === true) {
      const gt = Pe === true ? D.value : void 0;
      Ae.push(d("input", { ref: Pe === true ? $ : void 0, key: "d_t", class: "q-select__focus-target", id: Pe === true ? Y.targetUid.value : void 0, value: ne.value, readonly: true, "data-autofocus": J === true || e.autofocus === true || void 0, ...gt, onKeydown: it, onKeyup: Oe, onKeypress: Ye })), Pe === true && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && Ae.push(d("input", { class: "q-select__autocomplete-input", autocomplete: e.autocomplete, tabindex: -1, onKeyup: Re }));
    }
    if (L.value !== void 0 && e.disable !== true && ie.value.length !== 0) {
      const gt = ie.value.map((vt) => d("option", { value: vt, selected: true }));
      Ae.push(d("select", { class: "hidden", name: L.value, multiple: e.multiple }, gt));
    }
    const tt = e.useInput === true || Pe !== true ? void 0 : Y.splitAttrs.attributes.value;
    return d("div", { class: "q-field__native row items-center", ...tt, ...Y.splitAttrs.listeners.value }, Ae);
  }, getInnerAppend: () => e.loading !== true && s.value !== true && e.hideDropdownIcon !== true ? [d(et, { class: "q-select__dropdown-icon" + (a.value === true ? " rotate-180" : ""), name: te.value })] : null }), bi(Y);
} }), J1 = ["text", "rect", "circle", "QBtn", "QBadge", "QChip", "QToolbar", "QCheckbox", "QRadio", "QToggle", "QSlider", "QRange", "QInput", "QAvatar"], e_ = ["wave", "pulse", "pulse-x", "pulse-y", "fade", "blink", "none"];
he({ name: "QSkeleton", props: { ...nt, tag: { type: String, default: "div" }, type: { type: String, validator: (e) => J1.includes(e), default: "rect" }, animation: { type: String, validator: (e) => e_.includes(e), default: "wave" }, animationSpeed: { type: [String, Number], default: 1500 }, square: Boolean, bordered: Boolean, size: String, width: String, height: String }, setup(e, { slots: t }) {
  const n = xe(), l = lt(e, n.proxy.$q), r = v(() => {
    const o = e.size !== void 0 ? [e.size, e.size] : [e.width, e.height];
    return { "--q-skeleton-speed": `${e.animationSpeed}ms`, width: o[0], height: o[1] };
  }), a = v(() => `q-skeleton q-skeleton--${l.value === true ? "dark" : "light"} q-skeleton--type-${e.type}` + (e.animation !== "none" ? ` q-skeleton--anim q-skeleton--anim-${e.animation}` : "") + (e.square === true ? " q-skeleton--square" : "") + (e.bordered === true ? " q-skeleton--bordered" : ""));
  return () => d(e.tag, { class: a.value, style: r.value }, $e(t.default));
} });
var Hd = [["left", "center", "start", "width"], ["right", "center", "end", "width"], ["top", "start", "center", "height"], ["bottom", "end", "center", "height"]];
he({ name: "QSlideItem", props: { ...nt, leftColor: String, rightColor: String, topColor: String, bottomColor: String, onSlide: Function }, emits: ["action", "top", "right", "bottom", "left"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), { $q: r } = l, a = lt(e, r), { getCache: o } = La(), i = K(null);
  let u = null, c = {}, s = {}, f = {};
  const h = v(() => r.lang.rtl === true ? { left: "right", right: "left" } : { left: "left", right: "right" }), m = v(() => "q-slide-item q-item-type overflow-hidden" + (a.value === true ? " q-slide-item--dark q-dark" : ""));
  function g() {
    i.value.style.transform = "translate(0,0)";
  }
  function w(T, p, y) {
    e.onSlide !== void 0 && n("slide", { side: T, ratio: p, isReset: y });
  }
  function x(T) {
    const p = i.value;
    if (T.isFirst) c = { dir: null, size: { left: 0, right: 0, top: 0, bottom: 0 }, scale: 0 }, p.classList.add("no-transition"), Hd.forEach(($) => {
      if (t[$[0]] !== void 0) {
        const F = f[$[0]];
        F.style.transform = "scale(1)", c.size[$[0]] = F.getBoundingClientRect()[$[3]];
      }
    }), c.axis = T.direction === "up" || T.direction === "down" ? "Y" : "X";
    else if (T.isFinal) {
      p.classList.remove("no-transition"), c.scale === 1 ? (p.style.transform = `translate${c.axis}(${c.dir * 100}%)`, u !== null && clearTimeout(u), u = setTimeout(() => {
        u = null, n(c.showing, { reset: g }), n("action", { side: c.showing, reset: g });
      }, 230)) : (p.style.transform = "translate(0,0)", w(c.showing, 0, true));
      return;
    } else T.direction = c.axis === "X" ? T.offset.x < 0 ? "left" : "right" : T.offset.y < 0 ? "up" : "down";
    if (t.left === void 0 && T.direction === h.value.right || t.right === void 0 && T.direction === h.value.left || t.top === void 0 && T.direction === "down" || t.bottom === void 0 && T.direction === "up") {
      p.style.transform = "translate(0,0)";
      return;
    }
    let y, b, C;
    c.axis === "X" ? (b = T.direction === "left" ? -1 : 1, y = b === 1 ? h.value.left : h.value.right, C = T.distance.x) : (b = T.direction === "up" ? -2 : 2, y = b === 2 ? "top" : "bottom", C = T.distance.y), !(c.dir !== null && Math.abs(b) !== Math.abs(c.dir)) && (c.dir !== b && (["left", "right", "top", "bottom"].forEach(($) => {
      s[$] && (s[$].style.visibility = y === $ ? "visible" : "hidden");
    }), c.showing = y, c.dir = b), c.scale = Math.max(0, Math.min(1, (C - 40) / c.size[y])), p.style.transform = `translate${c.axis}(${C * b / Math.abs(b)}px)`, f[y].style.transform = `scale(${c.scale})`, w(y, c.scale, false));
  }
  return Er(() => {
    s = {}, f = {};
  }), Ke(() => {
    u !== null && clearTimeout(u);
  }), Object.assign(l, { reset: g }), () => {
    const T = [], p = { left: t[h.value.right] !== void 0, right: t[h.value.left] !== void 0, up: t.bottom !== void 0, down: t.top !== void 0 }, y = Object.keys(p).filter((C) => p[C] === true);
    Hd.forEach((C) => {
      const $ = C[0];
      t[$] !== void 0 && T.push(d("div", { key: $, ref: (F) => {
        s[$] = F;
      }, class: `q-slide-item__${$} absolute-full row no-wrap items-${C[1]} justify-${C[2]}` + (e[$ + "Color"] !== void 0 ? ` bg-${e[$ + "Color"]}` : "") }, [d("div", { ref: (F) => {
        f[$] = F;
      } }, t[$]())]));
    });
    const b = d("div", { key: `${y.length === 0 ? "only-" : ""} content`, ref: i, class: "q-slide-item__content" }, $e(t.default));
    return y.length === 0 ? T.push(b) : T.push(sn(b, o("dir#" + y.join(""), () => {
      const C = { prevent: true, stop: true, mouse: true };
      return y.forEach(($) => {
        C[$] = true;
      }), [[gn, x, void 0, C]];
    }))), d("div", { class: m.value }, T);
  };
} });
he({ name: "QSpace", setup() {
  const e = d("div", { class: "q-space" });
  return () => e;
} });
var t_ = '<g transform="matrix(1 0 0 -1 0 80)"><rect width="10" height="20" rx="3"><animate attributeName="height" begin="0s" dur="4.3s" values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="15" width="10" height="80" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" width="10" height="50" rx="3"><animate attributeName="height" begin="0s" dur="1.4s" values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="45" width="10" height="30" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear" repeatCount="indefinite"></animate></rect></g>';
he({ name: "QSpinnerAudio", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 55 80", xmlns: "http://www.w3.org/2000/svg", innerHTML: t_ });
} });
var n_ = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"></animate></circle></g>';
he({ name: "QSpinnerBall", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 57 57", xmlns: "http://www.w3.org/2000/svg", innerHTML: n_ });
} });
var l_ = '<rect y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="60" width="15" height="140" rx="6"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="90" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="120" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect>';
he({ name: "QSpinnerBars", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 135 140", xmlns: "http://www.w3.org/2000/svg", innerHTML: l_ });
} });
var r_ = '<rect x="25" y="25" width="50" height="50" fill="none" stroke-width="4" stroke="currentColor"><animateTransform id="spinnerBox" attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" dur="0.5s" begin="rectBox.end"></animateTransform></rect><rect x="27" y="27" width="46" height="50" fill="currentColor"><animate id="rectBox" attributeName="height" begin="0s;spinnerBox.end" dur="1.3s" from="50" to="0" fill="freeze"></animate></rect>';
he({ name: "QSpinnerBox", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: r_ });
} });
var a_ = '<circle cx="50" cy="50" r="48" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="currentColor"></circle><line stroke-linecap="round" stroke-width="4" stroke-miterlimit="10" stroke="currentColor" x1="50" y1="50" x2="85" y2="50.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2s" repeatCount="indefinite"></animateTransform></line><line stroke-linecap="round" stroke-width="4" stroke-miterlimit="10" stroke="currentColor" x1="50" y1="50" x2="49.5" y2="74"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="15s" repeatCount="indefinite"></animateTransform></line>';
he({ name: "QSpinnerClock", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: a_ });
} });
var o_ = '<rect x="0" y="0" width="100" height="100" fill="none"></rect><path d="M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z" fill="currentColor"></path><circle cx="30" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;1;1" keyTimes="0;0.2;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="50" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.2;0.4;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="70" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.4;0.6;1" dur="1s" repeatCount="indefinite"></animate></circle>';
he({ name: "QSpinnerComment", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: o_ });
} });
var i_ = '<rect x="0" y="0" width="100" height="100" fill="none"></rect><g transform="translate(25 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.1s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(25 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.7"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.3s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.2s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g>';
he({ name: "QSpinnerCube", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: i_ });
} });
var u_ = '<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from=".5" to=".5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';
he({ name: "QSpinnerDots", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg", innerHTML: u_ });
} });
var s_ = '<g transform="translate(20 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(50 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.1s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(80 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.2s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g>';
he({ name: "QSpinnerFacebook", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid", innerHTML: s_ });
} });
var c_ = '<g transform="translate(-20,-20)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="90 50 50" to="0 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g><g transform="translate(20,20) rotate(15 50 50)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="90 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g>';
he({ name: "QSpinnerGears", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: c_ });
} });
var d_ = '<circle cx="12.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="0s" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5"><animate attributeName="fill-opacity" begin="100ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="300ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="600ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="800ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="400ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="700ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="500ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="200ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';
he({ name: "QSpinnerGrid", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 105 105", xmlns: "http://www.w3.org/2000/svg", innerHTML: d_ });
} });
var f_ = '<path d="M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.716-6.002 11.47-7.65 17.304-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.593-2.32 17.308 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0.7s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"></path>';
he({ name: "QSpinnerHearts", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 140 64", xmlns: "http://www.w3.org/2000/svg", innerHTML: f_ });
} });
var v_ = '<g><path fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10" d="M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"></path><clipPath id="uil-hourglass-clip1"><rect x="15" y="20" width="70" height="25"><animate attributeName="height" from="25" to="0" dur="1s" repeatCount="indefinite" values="25;0;0" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="20" to="45" dur="1s" repeatCount="indefinite" values="20;45;45" keyTimes="0;0.5;1"></animate></rect></clipPath><clipPath id="uil-hourglass-clip2"><rect x="15" y="55" width="70" height="25"><animate attributeName="height" from="0" to="25" dur="1s" repeatCount="indefinite" values="0;25;25" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="80" to="55" dur="1s" repeatCount="indefinite" values="80;55;55" keyTimes="0;0.5;1"></animate></rect></clipPath><path d="M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z" clip-path="url(#uil-hourglass-clip1)" fill="currentColor"></path><path d="M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z" clip-path="url(#uil-hourglass-clip2)" fill="currentColor"></path><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" repeatCount="indefinite" dur="1s" values="0 50 50;0 50 50;180 50 50" keyTimes="0;0.7;1"></animateTransform></g>';
he({ name: "QSpinnerHourglass", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: v_ });
} });
var m_ = '<path d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z" fill="none" stroke="currentColor" stroke-width="8" stroke-dasharray="10.691205342610678 10.691205342610678" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" from="0" to="21.382410685221355" begin="0" dur="2s" repeatCount="indefinite" fill="freeze"></animate></path>';
he({ name: "QSpinnerInfinity", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: m_ });
} });
var h_ = '<g stroke-width="4" stroke-linecap="round"><line y1="17" y2="29" transform="translate(32,32) rotate(180)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(210)"><animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(240)"><animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(270)"><animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(300)"><animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(330)"><animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(0)"><animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(30)"><animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(60)"><animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(90)"><animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(120)"><animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(150)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line></g>';
he({ name: "QSpinnerIos", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, stroke: "currentColor", fill: "currentColor", viewBox: "0 0 64 64", innerHTML: h_ });
} });
var g_ = '<circle cx="50" cy="50" r="44" fill="none" stroke-width="4" stroke-opacity=".5" stroke="currentColor"></circle><circle cx="8" cy="54" r="6" fill="currentColor" stroke-width="3" stroke="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 48" to="360 50 52" dur="2s" repeatCount="indefinite"></animateTransform></circle>';
he({ name: "QSpinnerOrbit", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: g_ });
} });
var b_ = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g>';
he({ name: "QSpinnerOval", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", innerHTML: b_ });
} });
var y_ = '<path d="M0 50A50 50 0 0 1 50 0L50 50L0 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="0.8s" repeatCount="indefinite"></animateTransform></path><path d="M50 0A50 50 0 0 1 100 50L50 50L50 0" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1.6s" repeatCount="indefinite"></animateTransform></path><path d="M100 50A50 50 0 0 1 50 100L50 50L100 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2.4s" repeatCount="indefinite"></animateTransform></path><path d="M50 100A50 50 0 0 1 0 50L50 50L50 100" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="3.2s" repeatCount="indefinite"></animateTransform></path>';
he({ name: "QSpinnerPie", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: y_ });
} });
var p_ = '<g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g>';
he({ name: "QSpinnerPuff", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 44 44", xmlns: "http://www.w3.org/2000/svg", innerHTML: p_ });
} });
var __ = '<g transform="scale(0.55)"><circle cx="30" cy="150" r="30" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></circle><path d="M90,150h30c0-49.7-40.3-90-90-90v30C63.1,90,90,116.9,90,150z" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.1" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></path><path d="M150,150h30C180,67.2,112.8,0,30,0v30C96.3,30,150,83.7,150,150z" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.2" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></path></g>';
he({ name: "QSpinnerRadio", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: __ });
} });
var w_ = '<g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2"><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="8"><animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"></animate></circle></g>';
he({ name: "QSpinnerRings", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 45 45", xmlns: "http://www.w3.org/2000/svg", innerHTML: w_ });
} });
var x_ = '<defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-color="currentColor" stop-opacity="0" offset="0%"></stop><stop stop-color="currentColor" stop-opacity=".631" offset="63.146%"></stop><stop stop-color="currentColor" offset="100%"></stop></linearGradient></defs><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></path><circle fill="currentColor" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></circle></g>';
he({ name: "QSpinnerTail", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", innerHTML: x_ });
} });
he({ name: "QSplitter", props: { ...nt, modelValue: { type: Number, required: true }, reverse: Boolean, unit: { type: String, default: "%", validator: (e) => ["%", "px"].includes(e) }, limits: { type: Array, validator: (e) => e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number" ? false : e[0] >= 0 && e[0] <= e[1] }, emitImmediately: Boolean, horizontal: Boolean, disable: Boolean, beforeClass: [Array, String, Object], afterClass: [Array, String, Object], separatorClass: [Array, String, Object], separatorStyle: [Array, String, Object] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = xe(), r = lt(e, l), a = K(null), o = { before: K(null), after: K(null) }, i = v(() => `q-splitter no-wrap ${e.horizontal === true ? "q-splitter--horizontal column" : "q-splitter--vertical row"} q-splitter--${e.disable === true ? "disabled" : "workable"}` + (r.value === true ? " q-splitter--dark" : "")), u = v(() => e.horizontal === true ? "height" : "width"), c = v(() => e.reverse !== true ? "before" : "after"), s = v(() => e.limits !== void 0 ? e.limits : e.unit === "%" ? [10, 90] : [50, 1 / 0]);
  function f(C) {
    return (e.unit === "%" ? C : Math.round(C)) + e.unit;
  }
  const h = v(() => ({ [c.value]: { [u.value]: f(e.modelValue) } }));
  let m, g, w, x, T;
  function p(C) {
    if (C.isFirst === true) {
      const F = a.value.getBoundingClientRect()[u.value];
      m = e.horizontal === true ? "up" : "left", g = e.unit === "%" ? 100 : F, w = Math.min(g, s.value[1], Math.max(s.value[0], e.modelValue)), x = (e.reverse !== true ? 1 : -1) * (e.horizontal === true ? 1 : l.lang.rtl === true ? -1 : 1) * (e.unit === "%" ? F === 0 ? 0 : 100 / F : 1), a.value.classList.add("q-splitter--active");
      return;
    }
    if (C.isFinal === true) {
      T !== e.modelValue && n("update:modelValue", T), a.value.classList.remove("q-splitter--active");
      return;
    }
    const $ = w + x * (C.direction === m ? -1 : 1) * C.distance[e.horizontal === true ? "y" : "x"];
    T = Math.min(g, s.value[1], Math.max(s.value[0], $)), o[c.value].value.style[u.value] = f(T), e.emitImmediately === true && e.modelValue !== T && n("update:modelValue", T);
  }
  const y = v(() => [[gn, p, void 0, { [e.horizontal === true ? "vertical" : "horizontal"]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
  function b(C, $) {
    C < $[0] ? n("update:modelValue", $[0]) : C > $[1] && n("update:modelValue", $[1]);
  }
  return ge(() => e.modelValue, (C) => {
    b(C, s.value);
  }), ge(() => e.limits, () => {
    We(() => {
      b(e.modelValue, s.value);
    });
  }), () => {
    const C = [d("div", { ref: o.before, class: ["q-splitter__panel q-splitter__before" + (e.reverse === true ? " col" : ""), e.beforeClass], style: h.value.before }, $e(t.before)), d("div", { class: ["q-splitter__separator", e.separatorClass], style: e.separatorStyle, "aria-disabled": e.disable === true ? "true" : void 0 }, [pn("div", { class: "q-splitter__separator-area absolute-full" }, $e(t.separator), "sep", e.disable !== true, () => y.value)]), d("div", { ref: o.after, class: ["q-splitter__panel q-splitter__after" + (e.reverse === true ? "" : " col"), e.afterClass], style: h.value.after }, $e(t.after))];
    return d("div", { class: i.value, ref: a }, Tt(t.default, C));
  };
} });
var jh = he({ name: "StepHeader", props: { stepper: {}, step: {}, goToPanel: Function }, setup(e, { attrs: t }) {
  const { proxy: { $q: n } } = xe(), l = K(null), r = v(() => e.stepper.modelValue === e.step.name), a = v(() => {
    const x = e.step.disable;
    return x === true || x === "";
  }), o = v(() => {
    const x = e.step.error;
    return x === true || x === "";
  }), i = v(() => {
    const x = e.step.done;
    return a.value === false && (x === true || x === "");
  }), u = v(() => {
    const x = e.step.headerNav, T = x === true || x === "" || x === void 0;
    return a.value === false && e.stepper.headerNav && T;
  }), c = v(() => e.step.prefix && (r.value === false || e.stepper.activeIcon === "none") && (o.value === false || e.stepper.errorIcon === "none") && (i.value === false || e.stepper.doneIcon === "none")), s = v(() => {
    const x = e.step.icon || e.stepper.inactiveIcon;
    if (r.value === true) {
      const T = e.step.activeIcon || e.stepper.activeIcon;
      return T === "none" ? x : T || n.iconSet.stepper.active;
    }
    if (o.value === true) {
      const T = e.step.errorIcon || e.stepper.errorIcon;
      return T === "none" ? x : T || n.iconSet.stepper.error;
    }
    if (a.value === false && i.value === true) {
      const T = e.step.doneIcon || e.stepper.doneIcon;
      return T === "none" ? x : T || n.iconSet.stepper.done;
    }
    return x;
  }), f = v(() => {
    const x = o.value === true ? e.step.errorColor || e.stepper.errorColor : void 0;
    if (r.value === true) {
      const T = e.step.activeColor || e.stepper.activeColor || e.step.color;
      return T !== void 0 ? T : x;
    }
    return x !== void 0 ? x : a.value === false && i.value === true ? e.step.doneColor || e.stepper.doneColor || e.step.color || e.stepper.inactiveColor : e.step.color || e.stepper.inactiveColor;
  }), h = v(() => "q-stepper__tab col-grow flex items-center no-wrap relative-position" + (f.value !== void 0 ? ` text-${f.value}` : "") + (o.value === true ? " q-stepper__tab--error q-stepper__tab--error-with-" + (c.value === true ? "prefix" : "icon") : "") + (r.value === true ? " q-stepper__tab--active" : "") + (i.value === true ? " q-stepper__tab--done" : "") + (u.value === true ? " q-stepper__tab--navigation q-focusable q-hoverable" : "") + (a.value === true ? " q-stepper__tab--disabled" : "")), m = v(() => e.stepper.headerNav !== true ? false : u.value);
  function g() {
    var _a3;
    (_a3 = l.value) == null ? void 0 : _a3.focus(), r.value === false && e.goToPanel(e.step.name);
  }
  function w(x) {
    x.keyCode === 13 && r.value === false && e.goToPanel(e.step.name);
  }
  return () => {
    const x = { class: h.value };
    u.value === true && (x.onClick = g, x.onKeyup = w, Object.assign(x, a.value === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: t.tabindex || 0 }));
    const T = [d("div", { class: "q-focus-helper", tabindex: -1, ref: l }), d("div", { class: "q-stepper__dot row flex-center q-stepper__line relative-position" }, [d("span", { class: "row flex-center" }, [c.value === true ? e.step.prefix : d(et, { name: s.value })])])];
    if (e.step.title !== void 0 && e.step.title !== null) {
      const p = [d("div", { class: "q-stepper__title" }, e.step.title)];
      e.step.caption !== void 0 && e.step.caption !== null && p.push(d("div", { class: "q-stepper__caption" }, e.step.caption)), T.push(d("div", { class: "q-stepper__label q-stepper__line relative-position" }, p));
    }
    return sn(d("div", x, T), [[ui, m.value]]);
  };
} });
function Uh(e) {
  return d("div", { class: "q-stepper__step-content" }, [d("div", { class: "q-stepper__step-inner" }, $e(e.default))]);
}
var jd = { setup(e, { slots: t }) {
  return () => Uh(t);
} };
he({ name: "QStep", props: { ...Bs, icon: String, color: String, title: { type: String, required: true }, caption: String, prefix: [String, Number], doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String, headerNav: { type: Boolean, default: true }, done: Boolean, error: Boolean, onScroll: [Function, Array] }, setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = xe(), r = qt(cm, ot);
  if (r === ot) return console.error("QStep needs to be a child of QStepper"), ot;
  const { getCache: a } = La(), o = K(null), i = v(() => r.value.modelValue === e.name), u = v(() => l.platform.is.ios !== true && l.platform.is.chrome === true || i.value !== true || r.value.vertical !== true ? {} : { onScroll(f) {
    const { target: h } = f;
    h.scrollTop > 0 && (h.scrollTop = 0), e.onScroll !== void 0 && n("scroll", f);
  } }), c = v(() => typeof e.name == "string" || typeof e.name == "number" ? e.name : String(e.name));
  function s() {
    const f = r.value.vertical;
    return f === true && r.value.keepAlive === true ? d(pv, r.value.keepAliveProps.value, i.value === true ? [d(r.value.needsUniqueKeepAliveWrapper.value === true ? a(c.value, () => ({ ...jd, name: c.value })) : jd, { key: c.value }, t.default)] : void 0) : f !== true || i.value === true ? Uh(t) : void 0;
  }
  return () => d("div", { ref: o, class: "q-stepper__step", role: "tabpanel", ...u.value }, r.value.vertical === true ? [d(jh, { stepper: r.value, step: e, goToPanel: r.value.goToPanel }), r.value.animated === true ? d(Us, s) : s()] : [s()]);
} });
var S_ = /(-\w)/g;
function C_(e) {
  const t = {};
  for (const n in e) {
    const l = n.replace(S_, (r) => r[1].toUpperCase());
    t[l] = e[n];
  }
  return t;
}
he({ name: "QStepper", props: { ...nt, ...Ls, flat: Boolean, bordered: Boolean, alternativeLabels: Boolean, headerNav: Boolean, contracted: Boolean, headerClass: String, inactiveColor: String, inactiveIcon: String, doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String }, emits: Fs, setup(e, { slots: t }) {
  const n = xe(), l = lt(e, n.proxy.$q), { updatePanelsList: r, isValidPanelName: a, updatePanelIndex: o, getPanelContent: i, getPanels: u, panelDirectives: c, goToPanel: s, keepAliveProps: f, needsUniqueKeepAliveWrapper: h } = Os();
  hn(cm, v(() => ({ goToPanel: s, keepAliveProps: f, needsUniqueKeepAliveWrapper: h, ...e })));
  const m = v(() => `q-stepper q-stepper--${e.vertical === true ? "vertical" : "horizontal"}` + (e.flat === true ? " q-stepper--flat" : "") + (e.bordered === true ? " q-stepper--bordered" : "") + (l.value === true ? " q-stepper--dark q-dark" : "")), g = v(() => `q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels === true ? "alternative" : "standard"}-labels` + (e.flat === false || e.bordered === true ? " q-stepper__header--border" : "") + (e.contracted === true ? " q-stepper__header--contracted" : "") + (e.headerClass !== void 0 ? ` ${e.headerClass}` : ""));
  function w() {
    const x = $e(t.message, []);
    if (e.vertical === true) {
      a(e.modelValue) && o();
      const T = d("div", { class: "q-stepper__content" }, $e(t.default));
      return x === void 0 ? [T] : x.concat(T);
    }
    return [d("div", { class: g.value }, u().map((T) => {
      const p = C_(T.props);
      return d(jh, { key: p.name, stepper: e, step: p, goToPanel: s });
    })), x, pn("div", { class: "q-stepper__content q-panel-parent" }, i(), "cont", e.swipeable, () => c.value)];
  }
  return () => (r(t), d("div", { class: m.value }, Tt(t.navigation, w())));
} });
he({ name: "QStepperNavigation", setup(e, { slots: t }) {
  return () => d("div", { class: "q-stepper__nav" }, $e(t.default));
} });
var k_ = he({ name: "QTh", props: { props: Object, autoWidth: Boolean }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const l = xe(), { proxy: { $q: r } } = l, a = (o) => {
    n("click", o);
  };
  return () => {
    if (e.props === void 0) return d("th", { class: e.autoWidth === true ? "q-table--col-auto-width" : "", onClick: a }, $e(t.default));
    let o, i;
    const u = l.vnode.key;
    if (u) {
      if (o = e.props.colsMap[u], o === void 0) return;
    } else o = e.props.col;
    if (o.sortable === true) {
      const s = o.align === "right" ? "unshift" : "push";
      i = Aa(t.default, []), i[s](d(et, { class: o.__iconClass, name: r.iconSet.table.arrowUp }));
    } else i = $e(t.default);
    const c = { class: o.__thClass + (e.autoWidth === true ? " q-table--col-auto-width" : ""), style: o.headerStyle, onClick: (s) => {
      o.sortable === true && e.props.sort(o), a(s);
    } };
    return d("th", c, i);
  };
} });
function Qh(e, t) {
  return d("div", e, [d("table", { class: "q-table" }, t)]);
}
var T_ = { list: Fh, table: O1 }, q_ = ["list", "table", "__qtable"], M_ = he({ name: "QVirtualScroll", props: { ...Wu, type: { type: String, default: "list", validator: (e) => q_.includes(e) }, items: { type: Array, default: () => [] }, itemsFn: Function, itemsSize: Number, scrollTarget: Gl }, setup(e, { slots: t, attrs: n }) {
  let l;
  const r = K(null), a = v(() => e.itemsSize >= 0 && e.itemsFn !== void 0 ? parseInt(e.itemsSize, 10) : Array.isArray(e.items) ? e.items.length : 0), { virtualScrollSliceRange: o, localResetVirtualScroll: i, padVirtualScroll: u, onVirtualScrollEvt: c } = Hh({ virtualScrollLength: a, getVirtualScrollTarget: g, getVirtualScrollEl: m }), s = v(() => {
    if (a.value === 0) return [];
    const p = (y, b) => ({ index: o.value.from + b, item: y });
    return e.itemsFn === void 0 ? e.items.slice(o.value.from, o.value.to).map(p) : e.itemsFn(o.value.from, o.value.to - o.value.from).map(p);
  }), f = v(() => "q-virtual-scroll q-virtual-scroll" + (e.virtualScrollHorizontal === true ? "--horizontal" : "--vertical") + (e.scrollTarget !== void 0 ? "" : " scroll")), h = v(() => e.scrollTarget !== void 0 ? {} : { tabindex: 0 });
  ge(a, () => {
    i();
  }), ge(() => e.scrollTarget, () => {
    x(), w();
  });
  function m() {
    return r.value.$el || r.value;
  }
  function g() {
    return l;
  }
  function w() {
    l = Dn(m(), e.scrollTarget), l.addEventListener("scroll", c, dt.passive);
  }
  function x() {
    l !== void 0 && (l.removeEventListener("scroll", c, dt.passive), l = void 0);
  }
  function T() {
    let p = u(e.type === "list" ? "div" : "tbody", s.value.map(t.default));
    return t.before !== void 0 && (p = t.before().concat(p)), Tt(t.after, p);
  }
  return Zo(() => {
    i();
  }), ft(() => {
    w();
  }), xl(() => {
    w();
  }), Vn(() => {
    x();
  }), Ke(() => {
    x();
  }), () => {
    if (t.default === void 0) {
      console.error("QVirtualScroll: default scoped slot is required for rendering");
      return;
    }
    return e.type === "__qtable" ? Qh({ ref: r, class: "q-table__middle " + f.value }, T()) : d(T_[e.type], { ...n, ref: r, class: [n.class, f.value], ...h.value }, T);
  };
} });
function E_(e, t) {
  return new Date(e) - new Date(t);
}
var R_ = { sortMethod: Function, binaryStateSort: Boolean, columnSortOrder: { type: String, validator: (e) => e === "ad" || e === "da", default: "ad" } };
function A_(e, t, n, l) {
  const r = v(() => {
    const { sortBy: i } = t.value;
    return i && n.value.find((u) => u.name === i) || null;
  }), a = v(() => e.sortMethod !== void 0 ? e.sortMethod : (i, u, c) => {
    const s = n.value.find((m) => m.name === u);
    if (s === void 0 || s.field === void 0) return i;
    const f = c === true ? -1 : 1, h = typeof s.field == "function" ? (m) => s.field(m) : (m) => m[s.field];
    return i.sort((m, g) => {
      let w = h(m), x = h(g);
      return s.rawSort !== void 0 ? s.rawSort(w, x, m, g) * f : w == null ? -1 * f : x == null ? 1 * f : s.sort !== void 0 ? s.sort(w, x, m, g) * f : wa(w) === true && wa(x) === true ? (w - x) * f : $u(w) === true && $u(x) === true ? E_(w, x) * f : typeof w == "boolean" && typeof x == "boolean" ? (w - x) * f : ([w, x] = [w, x].map((T) => (T + "").toLocaleString().toLowerCase()), w < x ? -1 * f : w === x ? 0 : f);
    });
  });
  function o(i) {
    let u = e.columnSortOrder;
    if ($t(i) === true) i.sortOrder && (u = i.sortOrder), i = i.name;
    else {
      const f = n.value.find((h) => h.name === i);
      (f == null ? void 0 : f.sortOrder) && (u = f.sortOrder);
    }
    let { sortBy: c, descending: s } = t.value;
    c !== i ? (c = i, s = u === "da") : e.binaryStateSort === true ? s = !s : s === true ? u === "ad" ? c = null : s = false : u === "ad" ? s = true : c = null, l({ sortBy: c, descending: s, page: 1 });
  }
  return { columnToSort: r, computedSortMethod: a, sort: o };
}
var P_ = { filter: [String, Object], filterMethod: Function };
function $_(e, t) {
  const n = v(() => e.filterMethod !== void 0 ? e.filterMethod : (l, r, a, o) => {
    const i = r ? r.toLowerCase() : "";
    return l.filter((u) => a.some((c) => {
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
function B_(e, t) {
  for (const n in t) if (t[n] !== e[n]) return false;
  return true;
}
function Ud(e) {
  return e.page < 1 && (e.page = 1), e.rowsPerPage !== void 0 && e.rowsPerPage < 1 && (e.rowsPerPage = 0), e;
}
var L_ = { pagination: Object, rowsPerPageOptions: { type: Array, default: () => [5, 7, 10, 15, 20, 25, 50, 0] }, "onUpdate:pagination": [Function, Array] };
function F_(e, t) {
  const { props: n, emit: l } = e, r = K(Object.assign({ sortBy: null, descending: false, page: 1, rowsPerPage: n.rowsPerPageOptions.length !== 0 ? n.rowsPerPageOptions[0] : 5 }, n.pagination)), a = v(() => {
    const s = n["onUpdate:pagination"] !== void 0 ? { ...r.value, ...n.pagination } : r.value;
    return Ud(s);
  }), o = v(() => a.value.rowsNumber !== void 0);
  function i(s) {
    u({ pagination: s, filter: n.filter });
  }
  function u(s = {}) {
    We(() => {
      l("request", { pagination: s.pagination || a.value, filter: s.filter || n.filter, getCellValue: t });
    });
  }
  function c(s, f) {
    const h = Ud({ ...a.value, ...s });
    if (B_(a.value, h) === true) {
      o.value === true && f === true && i(h);
      return;
    }
    if (o.value === true) {
      i(h);
      return;
    }
    n.pagination !== void 0 && n["onUpdate:pagination"] !== void 0 ? l("update:pagination", h) : r.value = h;
  }
  return { innerPagination: r, computedPagination: a, isServerSide: o, requestServerInteraction: u, setPagination: c };
}
function O_(e, t, n, l, r, a) {
  const { props: o, emit: i, proxy: { $q: u } } = e, c = v(() => l.value === true ? n.value.rowsNumber || 0 : a.value), s = v(() => {
    const { page: b, rowsPerPage: C } = n.value;
    return (b - 1) * C;
  }), f = v(() => {
    const { page: b, rowsPerPage: C } = n.value;
    return b * C;
  }), h = v(() => n.value.page === 1), m = v(() => n.value.rowsPerPage === 0 ? 1 : Math.max(1, Math.ceil(c.value / n.value.rowsPerPage))), g = v(() => f.value === 0 ? true : n.value.page >= m.value), w = v(() => (o.rowsPerPageOptions.includes(t.value.rowsPerPage) ? o.rowsPerPageOptions : [t.value.rowsPerPage].concat(o.rowsPerPageOptions)).map((C) => ({ label: C === 0 ? u.lang.table.allRows : "" + C, value: C })));
  ge(m, (b, C) => {
    if (b === C) return;
    const $ = n.value.page;
    b && !$ ? r({ page: 1 }) : b < $ && r({ page: b });
  });
  function x() {
    r({ page: 1 });
  }
  function T() {
    const { page: b } = n.value;
    b > 1 && r({ page: b - 1 });
  }
  function p() {
    const { page: b, rowsPerPage: C } = n.value;
    f.value > 0 && b * C < c.value && r({ page: b + 1 });
  }
  function y() {
    r({ page: m.value });
  }
  return o["onUpdate:pagination"] !== void 0 && i("update:pagination", { ...n.value }), { firstRowIndex: s, lastRowIndex: f, isFirstPage: h, isLastPage: g, pagesNumber: m, computedRowsPerPageOptions: w, computedRowsNumber: c, firstPage: x, prevPage: T, nextPage: p, lastPage: y };
}
var V_ = { selection: { type: String, default: "none", validator: (e) => ["single", "multiple", "none"].includes(e) }, selected: { type: Array, default: () => [] } }, D_ = ["update:selected", "selection"];
function I_(e, t, n, l) {
  const r = v(() => {
    const g = {};
    return e.selected.map(l.value).forEach((w) => {
      g[w] = true;
    }), g;
  }), a = v(() => e.selection !== "none"), o = v(() => e.selection === "single"), i = v(() => e.selection === "multiple"), u = v(() => n.value.length !== 0 && n.value.every((g) => r.value[l.value(g)] === true)), c = v(() => u.value !== true && n.value.some((g) => r.value[l.value(g)] === true)), s = v(() => e.selected.length);
  function f(g) {
    return r.value[g] === true;
  }
  function h() {
    t("update:selected", []);
  }
  function m(g, w, x, T) {
    t("selection", { rows: w, added: x, keys: g, evt: T });
    const p = o.value === true ? x === true ? w : [] : x === true ? e.selected.concat(w) : e.selected.filter((y) => g.includes(l.value(y)) === false);
    t("update:selected", p);
  }
  return { hasSelectionMode: a, singleSelection: o, multipleSelection: i, allRowsSelected: u, someRowsSelected: c, rowsSelectedNumber: s, isRowSelected: f, clearSelection: h, updateSelection: m };
}
function Qd(e) {
  return Array.isArray(e) ? e.slice() : [];
}
var z_ = { expanded: Array }, N_ = ["update:expanded"];
function H_(e, t) {
  const n = K(Qd(e.expanded));
  ge(() => e.expanded, (o) => {
    n.value = Qd(o);
  });
  function l(o) {
    return n.value.includes(o);
  }
  function r(o) {
    e.expanded !== void 0 ? t("update:expanded", o) : n.value = o;
  }
  function a(o, i) {
    const u = n.value.slice(), c = u.indexOf(o);
    i === true ? c === -1 && (u.push(o), r(u)) : c !== -1 && (u.splice(c, 1), r(u));
  }
  return { isRowExpanded: l, setExpanded: r, updateExpanded: a };
}
var j_ = { visibleColumns: Array };
function U_(e, t, n) {
  const l = v(() => {
    if (e.columns !== void 0) return e.columns;
    const i = e.rows[0];
    return i !== void 0 ? Object.keys(i).map((u) => ({ name: u, label: u.toUpperCase(), field: u, align: wa(i[u]) ? "right" : "left", sortable: true })) : [];
  }), r = v(() => {
    const { sortBy: i, descending: u } = t.value;
    return (e.visibleColumns !== void 0 ? l.value.filter((s) => s.required === true || e.visibleColumns.includes(s.name) === true) : l.value).map((s) => {
      const f = s.align || "right", h = `text-${f}`;
      return { ...s, align: f, __iconClass: `q-table__sort-icon q-table__sort-icon--${f}`, __thClass: h + (s.headerClasses !== void 0 ? " " + s.headerClasses : "") + (s.sortable === true ? " sortable" : "") + (s.name === i ? ` sorted ${u === true ? "sort-desc" : ""}` : ""), __tdStyle: s.style !== void 0 ? typeof s.style != "function" ? () => s.style : s.style : () => null, __tdClass: s.classes !== void 0 ? typeof s.classes != "function" ? () => h + " " + s.classes : (m) => h + " " + s.classes(m) : () => h };
    });
  }), a = v(() => {
    const i = {};
    return r.value.forEach((u) => {
      i[u.name] = u;
    }), i;
  }), o = v(() => e.tableColspan !== void 0 ? e.tableColspan : r.value.length + (n.value === true ? 1 : 0));
  return { colList: l, computedCols: r, computedColsMap: a, computedColspan: o };
}
var Ja = "q-table__bottom row items-center", Kh = {};
Nh.forEach((e) => {
  Kh[e] = {};
});
he({ name: "QTable", props: { rows: { type: Array, required: true }, rowKey: { type: [String, Function], default: "id" }, columns: Array, loading: Boolean, iconFirstPage: String, iconPrevPage: String, iconNextPage: String, iconLastPage: String, title: String, hideHeader: Boolean, grid: Boolean, gridHeader: Boolean, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, separator: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical", "cell", "none"].includes(e) }, wrapCells: Boolean, virtualScroll: Boolean, virtualScrollTarget: {}, ...Kh, noDataLabel: String, noResultsLabel: String, loadingLabel: String, selectedRowsLabel: Function, rowsPerPageLabel: String, paginationLabel: Function, color: { type: String, default: "grey-8" }, titleClass: [String, Array, Object], tableStyle: [String, Array, Object], tableClass: [String, Array, Object], tableHeaderStyle: [String, Array, Object], tableHeaderClass: [String, Array, Object], tableRowStyleFn: Function, tableRowClassFn: Function, cardContainerClass: [String, Array, Object], cardContainerStyle: [String, Array, Object], cardStyle: [String, Array, Object], cardClass: [String, Array, Object], cardStyleFn: Function, cardClassFn: Function, hideBottom: Boolean, hideSelectedBanner: Boolean, hideNoData: Boolean, hidePagination: Boolean, onRowClick: Function, onRowDblclick: Function, onRowContextmenu: Function, ...nt, ...Vs, ...j_, ...P_, ...L_, ...z_, ...V_, ...R_ }, emits: ["request", "virtualScroll", ...Ds, ...N_, ...D_], setup(e, { slots: t, emit: n }) {
  const l = xe(), { proxy: { $q: r } } = l, a = lt(e, r), { inFullscreen: o, toggleFullscreen: i } = Is(), u = v(() => typeof e.rowKey == "function" ? e.rowKey : (se) => se[e.rowKey]), c = K(null), s = K(null), f = v(() => e.grid !== true && e.virtualScroll === true), h = v(() => " q-table__card" + (a.value === true ? " q-table__card--dark q-dark" : "") + (e.square === true ? " q-table--square" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "")), m = v(() => `q-table__container q-table--${e.separator}-separator column no-wrap` + (e.grid === true ? " q-table--grid" : h.value) + (a.value === true ? " q-table--dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.wrapCells === false ? " q-table--no-wrap" : "") + (o.value === true ? " fullscreen scroll" : "")), g = v(() => m.value + (e.loading === true ? " q-table--loading" : ""));
  ge(() => e.tableStyle + e.tableClass + e.tableHeaderStyle + e.tableHeaderClass + m.value, () => {
    var _a3;
    f.value === true && ((_a3 = s.value) == null ? void 0 : _a3.reset());
  });
  const { innerPagination: w, computedPagination: x, isServerSide: T, requestServerInteraction: p, setPagination: y } = F_(l, ue), { computedFilterMethod: b } = $_(e, y), { isRowExpanded: C, setExpanded: $, updateExpanded: F } = H_(e, n), N = v(() => {
    let se = e.rows;
    if (T.value === true || se.length === 0) return se;
    const { sortBy: Se, descending: Fe } = x.value;
    return e.filter && (se = b.value(se, e.filter, Y.value, ue)), V.value !== null && (se = fe.value(e.rows === se ? se.slice() : se, Se, Fe)), se;
  }), B = v(() => N.value.length), L = v(() => {
    let se = N.value;
    if (T.value === true) return se;
    const { rowsPerPage: Se } = x.value;
    return Se !== 0 && (R.value === 0 && e.rows !== se ? se.length > G.value && (se = se.slice(0, G.value)) : se = se.slice(R.value, G.value)), se;
  }), { hasSelectionMode: z, singleSelection: q, multipleSelection: E, allRowsSelected: k, someRowsSelected: j, rowsSelectedNumber: Q, isRowSelected: W, clearSelection: X, updateSelection: re } = I_(e, n, L, u), { colList: pe, computedCols: Y, computedColsMap: _, computedColspan: H } = U_(e, x, z), { columnToSort: V, computedSortMethod: fe, sort: A } = A_(e, x, pe, y), { firstRowIndex: R, lastRowIndex: G, isFirstPage: O, isLastPage: ne, pagesNumber: be, computedRowsPerPageOptions: S, computedRowsNumber: M, firstPage: D, prevPage: ee, nextPage: le, lastPage: P } = O_(l, w, x, T, y, B), te = v(() => L.value.length === 0), ce = v(() => {
    const se = {};
    return Nh.forEach((Se) => {
      se[Se] = e[Se];
    }), se.virtualScrollItemSize === void 0 && (se.virtualScrollItemSize = e.dense === true ? 28 : 48), se;
  });
  function de() {
    f.value === true && s.value.reset();
  }
  function me() {
    if (e.grid === true) return In();
    const se = e.hideHeader !== true ? Ce : null;
    if (f.value === true) {
      const Fe = t["top-row"], Le = t["bottom-row"], Ue = { default: (yt) => we(yt.item, t.body, yt.index) };
      if (Fe !== void 0) {
        const yt = d("tbody", Fe({ cols: Y.value }));
        Ue.before = se === null ? () => yt : () => [se()].concat(yt);
      } else se !== null && (Ue.before = se);
      return Le !== void 0 && (Ue.after = () => d("tbody", Le({ cols: Y.value }))), d(M_, { ref: s, class: e.tableClass, style: e.tableStyle, ...ce.value, scrollTarget: e.virtualScrollTarget, items: L.value, type: "__qtable", tableColspan: H.value, onVirtualScroll: U }, Ue);
    }
    const Se = [ke()];
    return se !== null && Se.unshift(se()), Qh({ class: ["q-table__middle scroll", e.tableClass], style: e.tableStyle }, Se);
  }
  function ae(se, Se) {
    if (s.value !== null) {
      s.value.scrollTo(se, Se);
      return;
    }
    se = parseInt(se, 10);
    const Fe = c.value.querySelector(`tbody tr:nth-of-type(${se + 1})`);
    if (Fe !== null) {
      const Le = c.value.querySelector(".q-table__middle.scroll"), Ue = Fe.offsetTop - e.virtualScrollStickySizeStart, yt = Ue < Le.scrollTop ? "decrease" : "increase";
      Le.scrollTop = Ue, n("virtualScroll", { index: se, from: 0, to: w.value.rowsPerPage - 1, direction: yt });
    }
  }
  function U(se) {
    n("virtualScroll", se);
  }
  function ie() {
    return [d(U1, { class: "q-table__linear-progress", color: e.color, dark: a.value, indeterminate: true, trackColor: "transparent" })];
  }
  function we(se, Se, Fe) {
    const Le = u.value(se), Ue = W(Le);
    if (Se !== void 0) {
      const Z = { key: Le, row: se, pageIndex: Fe, __trClass: Ue ? "selected" : "" };
      if (e.tableRowStyleFn !== void 0 && (Z.__trStyle = e.tableRowStyleFn(se)), e.tableRowClassFn !== void 0) {
        const ve = e.tableRowClassFn(se);
        ve && (Z.__trClass = `${ve} ${Z.__trClass}`);
      }
      return Se(Te(Z));
    }
    const yt = t["body-cell"], ht = Y.value.map((Z) => {
      const ve = t[`body-cell-${Z.name}`], qe = ve !== void 0 ? ve : yt;
      return qe !== void 0 ? qe(Me({ key: Le, row: se, pageIndex: Fe, col: Z })) : d("td", { class: Z.__tdClass(se), style: Z.__tdStyle(se) }, ue(Z, se));
    });
    if (z.value === true) {
      const Z = t["body-selection"], ve = Z !== void 0 ? Z(He({ key: Le, row: se, pageIndex: Fe })) : [d(ua, { modelValue: Ue, color: e.color, dark: a.value, dense: e.dense, "onUpdate:modelValue": (qe, Ee) => {
        re([Le], [se], qe, Ee);
      } })];
      ht.unshift(d("td", { class: "q-table--col-auto-width" }, ve));
    }
    const I = { key: Le, class: { selected: Ue } };
    if (e.onRowClick !== void 0 && (I.class["cursor-pointer"] = true, I.onClick = (Z) => {
      n("rowClick", Z, se, Fe);
    }), e.onRowDblclick !== void 0 && (I.class["cursor-pointer"] = true, I.onDblclick = (Z) => {
      n("rowDblclick", Z, se, Fe);
    }), e.onRowContextmenu !== void 0 && (I.class["cursor-pointer"] = true, I.onContextmenu = (Z) => {
      n("rowContextmenu", Z, se, Fe);
    }), e.tableRowStyleFn !== void 0 && (I.style = e.tableRowStyleFn(se)), e.tableRowClassFn !== void 0) {
      const Z = e.tableRowClassFn(se);
      Z && (I.class[Z] = true);
    }
    return d("tr", I, ht);
  }
  function ke() {
    const se = t.body, Se = t["top-row"], Fe = t["bottom-row"];
    let Le = L.value.map((Ue, yt) => we(Ue, se, yt));
    return Se !== void 0 && (Le = Se({ cols: Y.value }).concat(Le)), Fe !== void 0 && (Le = Le.concat(Fe({ cols: Y.value }))), d("tbody", Le);
  }
  function Te(se) {
    return Ve(se), se.cols = se.cols.map((Se) => Ot({ ...Se }, "value", () => ue(Se, se.row))), se;
  }
  function Me(se) {
    return Ve(se), Ot(se, "value", () => ue(se.col, se.row)), se;
  }
  function He(se) {
    return Ve(se), se;
  }
  function Ve(se) {
    Object.assign(se, { cols: Y.value, colsMap: _.value, sort: A, rowIndex: R.value + se.pageIndex, color: e.color, dark: a.value, dense: e.dense }), z.value === true && Ot(se, "selected", () => W(se.key), (Se, Fe) => {
      re([se.key], [se.row], Se, Fe);
    }), Ot(se, "expand", () => C(se.key), (Se) => {
      F(se.key, Se);
    });
  }
  function ue(se, Se) {
    const Fe = typeof se.field == "function" ? se.field(Se) : Se[se.field];
    return se.format !== void 0 ? se.format(Fe, Se) : Fe;
  }
  const ye = v(() => ({ pagination: x.value, pagesNumber: be.value, isFirstPage: O.value, isLastPage: ne.value, firstPage: D, prevPage: ee, nextPage: le, lastPage: P, inFullscreen: o.value, toggleFullscreen: i }));
  function oe() {
    const se = t.top, Se = t["top-left"], Fe = t["top-right"], Le = t["top-selection"], Ue = z.value === true && Le !== void 0 && Q.value > 0, yt = "q-table__top relative-position row items-center";
    if (se !== void 0) return d("div", { class: yt }, [se(ye.value)]);
    let ht;
    if (Ue === true ? ht = Le(ye.value).slice() : (ht = [], Se !== void 0 ? ht.push(d("div", { class: "q-table__control" }, [Se(ye.value)])) : e.title && ht.push(d("div", { class: "q-table__control" }, [d("div", { class: ["q-table__title", e.titleClass] }, e.title)]))), Fe !== void 0 && (ht.push(d("div", { class: "q-table__separator col" })), ht.push(d("div", { class: "q-table__control" }, [Fe(ye.value)]))), ht.length !== 0) return d("div", { class: yt }, ht);
  }
  const _e2 = v(() => j.value === true ? null : k.value);
  function Ce() {
    const se = Oe();
    return e.loading === true && t.loading === void 0 && se.push(d("tr", { class: "q-table__progress" }, [d("th", { class: "relative-position", colspan: H.value }, ie())])), d("thead", se);
  }
  function Oe() {
    const se = t.header, Se = t["header-cell"];
    if (se !== void 0) return se(Re({ header: true })).slice();
    const Fe = Y.value.map((Le) => {
      const Ue = t[`header-cell-${Le.name}`], yt = Ue !== void 0 ? Ue : Se, ht = Re({ col: Le });
      return yt !== void 0 ? yt(ht) : d(k_, { key: Le.name, props: ht }, () => Le.label);
    });
    if (q.value === true && e.grid !== true) Fe.unshift(d("th", { class: "q-table--col-auto-width" }, " "));
    else if (E.value === true) {
      const Le = t["header-selection"], Ue = Le !== void 0 ? Le(Re({})) : [d(ua, { color: e.color, modelValue: _e2.value, dark: a.value, dense: e.dense, "onUpdate:modelValue": Ye })];
      Fe.unshift(d("th", { class: "q-table--col-auto-width" }, Ue));
    }
    return [d("tr", { class: e.tableHeaderClass, style: e.tableHeaderStyle }, Fe)];
  }
  function Re(se) {
    return Object.assign(se, { cols: Y.value, sort: A, colsMap: _.value, color: e.color, dark: a.value, dense: e.dense }), E.value === true && Ot(se, "selected", () => _e2.value, Ye), se;
  }
  function Ye(se) {
    j.value === true && (se = false), re(L.value.map(u.value), L.value, se);
  }
  const it = v(() => {
    const se = [e.iconFirstPage || r.iconSet.table.firstPage, e.iconPrevPage || r.iconSet.table.prevPage, e.iconNextPage || r.iconSet.table.nextPage, e.iconLastPage || r.iconSet.table.lastPage];
    return r.lang.rtl === true ? se.reverse() : se;
  });
  function Ct() {
    if (e.hideBottom === true) return;
    if (te.value === true) {
      if (e.hideNoData === true) return;
      const Fe = e.loading === true ? e.loadingLabel || r.lang.table.loading : e.filter ? e.noResultsLabel || r.lang.table.noResults : e.noDataLabel || r.lang.table.noData, Le = t["no-data"], Ue = Le !== void 0 ? [Le({ message: Fe, icon: r.iconSet.table.warning, filter: e.filter })] : [d(et, { class: "q-table__bottom-nodata-icon", name: r.iconSet.table.warning }), Fe];
      return d("div", { class: Ja + " q-table__bottom--nodata" }, Ue);
    }
    const se = t.bottom;
    if (se !== void 0) return d("div", { class: Ja }, [se(ye.value)]);
    const Se = e.hideSelectedBanner !== true && z.value === true && Q.value > 0 ? [d("div", { class: "q-table__control" }, [d("div", [(e.selectedRowsLabel || r.lang.table.selectedRecords)(Q.value)])])] : [];
    if (e.hidePagination !== true) return d("div", { class: Ja + " justify-end" }, nl(Se));
    if (Se.length !== 0) return d("div", { class: Ja }, Se);
  }
  function jt(se) {
    y({ page: 1, rowsPerPage: se.value });
  }
  function nl(se) {
    let Se;
    const { rowsPerPage: Fe } = x.value, Le = e.paginationLabel || r.lang.table.pagination, Ue = t.pagination, yt = e.rowsPerPageOptions.length > 1;
    if (se.push(d("div", { class: "q-table__separator col" })), yt === true && se.push(d("div", { class: "q-table__control" }, [d("span", { class: "q-table__bottom-item" }, [e.rowsPerPageLabel || r.lang.table.recordsPerPage]), d(Z1, { class: "q-table__select inline q-table__bottom-item", color: e.color, modelValue: Fe, options: S.value, displayValue: Fe === 0 ? r.lang.table.allRows : Fe, dark: a.value, borderless: true, dense: true, optionsDense: true, optionsCover: true, "onUpdate:modelValue": jt })])), Ue !== void 0) Se = Ue(ye.value);
    else if (Se = [d("span", Fe !== 0 ? { class: "q-table__bottom-item" } : {}, [Fe ? Le(R.value + 1, Math.min(G.value, M.value), M.value) : Le(1, B.value, M.value)])], Fe !== 0 && be.value > 1) {
      const ht = { color: e.color, round: true, dense: true, flat: true };
      e.dense === true && (ht.size = "sm"), be.value > 2 && Se.push(d(Ze, { key: "pgFirst", ...ht, icon: it.value[0], disable: O.value, ariaLabel: r.lang.pagination.first, onClick: D })), Se.push(d(Ze, { key: "pgPrev", ...ht, icon: it.value[1], disable: O.value, ariaLabel: r.lang.pagination.prev, onClick: ee }), d(Ze, { key: "pgNext", ...ht, icon: it.value[2], disable: ne.value, ariaLabel: r.lang.pagination.next, onClick: le })), be.value > 2 && Se.push(d(Ze, { key: "pgLast", ...ht, icon: it.value[3], disable: ne.value, ariaLabel: r.lang.pagination.last, onClick: P }));
    }
    return se.push(d("div", { class: "q-table__control" }, Se)), se;
  }
  function ln() {
    const se = e.gridHeader === true ? [d("table", { class: "q-table" }, [Ce()])] : e.loading === true && t.loading === void 0 ? ie() : void 0;
    return d("div", { class: "q-table__middle" }, se);
  }
  function In() {
    const se = t.item !== void 0 ? t.item : (Se) => {
      const Fe = Se.cols.map((Ue) => d("div", { class: "q-table__grid-item-row" }, [d("div", { class: "q-table__grid-item-title" }, [Ue.label]), d("div", { class: "q-table__grid-item-value" }, [Ue.value])]));
      if (z.value === true) {
        const Ue = t["body-selection"], yt = Ue !== void 0 ? Ue(Se) : [d(ua, { modelValue: Se.selected, color: e.color, dark: a.value, dense: e.dense, "onUpdate:modelValue": (ht, I) => {
          re([Se.key], [Se.row], ht, I);
        } })];
        Fe.unshift(d("div", { class: "q-table__grid-item-row" }, yt), d(Ql, { dark: a.value }));
      }
      const Le = { class: ["q-table__grid-item-card" + h.value, e.cardClass], style: e.cardStyle };
      if (e.cardStyleFn !== void 0 && (Le.style = [Le.style, e.cardStyleFn(Se.row)]), e.cardClassFn !== void 0) {
        const Ue = e.cardClassFn(Se.row);
        Ue && (Le.class[0] += ` ${Ue}`);
      }
      return (e.onRowClick !== void 0 || e.onRowDblclick !== void 0 || e.onRowContextmenu !== void 0) && (Le.class[0] += " cursor-pointer", e.onRowClick !== void 0 && (Le.onClick = (Ue) => {
        n("RowClick", Ue, Se.row, Se.pageIndex);
      }), e.onRowDblclick !== void 0 && (Le.onDblclick = (Ue) => {
        n("RowDblclick", Ue, Se.row, Se.pageIndex);
      }), e.onRowContextmenu !== void 0 && (Le.onContextmenu = (Ue) => {
        n("rowContextmenu", Ue, Se.row, Se.pageIndex);
      })), d("div", { class: "q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3" + (Se.selected === true ? " q-table__grid-item--selected" : "") }, [d("div", Le, Fe)]);
    };
    return d("div", { class: ["q-table__grid-content row", e.cardContainerClass], style: e.cardContainerStyle }, L.value.map((Se, Fe) => se(Te({ key: u.value(Se), row: Se, pageIndex: Fe }))));
  }
  return Object.assign(l.proxy, { requestServerInteraction: p, setPagination: y, firstPage: D, prevPage: ee, nextPage: le, lastPage: P, isRowSelected: W, clearSelection: X, isRowExpanded: C, setExpanded: $, sort: A, resetVirtualScroll: de, scrollTo: ae, getCellValue: ue }), em(l.proxy, { filteredSortedRows: () => N.value, computedRows: () => L.value, computedRowsNumber: () => M.value }), () => {
    const se = [oe()], Se = { ref: c, class: g.value };
    return e.grid === true ? se.push(ln()) : Object.assign(Se, { class: [Se.class, e.cardClass], style: e.cardStyle }), se.push(me(), Ct()), e.loading === true && t.loading !== void 0 && se.push(t.loading()), d("div", Se, se);
  };
} });
he({ name: "QTr", props: { props: Object, noHover: Boolean }, setup(e, { slots: t }) {
  const n = v(() => "q-tr" + (e.props === void 0 || e.props.header === true ? "" : " " + e.props.__trClass) + (e.noHover === true ? " q-tr--no-hover" : ""));
  return () => {
    var _a3;
    return d("tr", { style: (_a3 = e.props) == null ? void 0 : _a3.__trStyle, class: n.value }, $e(t.default));
  };
} });
he({ name: "QTd", props: { props: Object, autoWidth: Boolean, noHover: Boolean }, setup(e, { slots: t }) {
  const n = xe(), l = v(() => "q-td" + (e.autoWidth === true ? " q-table--col-auto-width" : "") + (e.noHover === true ? " q-td--no-hover" : "") + " ");
  return () => {
    if (e.props === void 0) return d("td", { class: l.value }, $e(t.default));
    const r = n.vnode.key, a = (e.props.colsMap !== void 0 ? e.props.colsMap[r] : null) || e.props.col;
    if (a === void 0) return;
    const { row: o } = e.props;
    return d("td", { class: l.value + a.__tdClass(o), style: a.__tdStyle(o) }, $e(t.default));
  };
} });
he({ name: "QRouteTab", props: { ...Pa, ...rh }, emits: lh, setup(e, { slots: t, emit: n }) {
  const l = ii({ useDisableForRouterLinkProps: false }), { renderTab: r, $tabs: a } = ah(e, t, n, { exact: v(() => e.exact), ...l });
  return ge(() => `${e.name} | ${e.exact} | ${(l.resolvedLink.value || {}).href}`, a.verifyRouteModel), () => r(l.linkTag.value, l.linkAttrs.value);
} });
function Q_(e, t) {
  return e.hour !== null && e.minute === null ? "minute" : "hour";
}
function K_() {
  const e = /* @__PURE__ */ new Date();
  return { hour: e.getHours(), minute: e.getMinutes(), second: e.getSeconds(), millisecond: e.getMilliseconds() };
}
he({ name: "QTime", props: { ...nt, ...wn, ...Do, modelValue: { required: true, validator: (e) => typeof e == "string" || e === null }, mask: { ...Do.mask, default: null }, format24h: { type: Boolean, default: null }, defaultDate: { type: String, validator: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e) }, options: Function, hourOptions: Array, minuteOptions: Array, secondOptions: Array, withSeconds: Boolean, nowBtn: Boolean }, emits: ch, setup(e, { slots: t, emit: n }) {
  const l = xe(), { $q: r } = l.proxy, a = lt(e, r), { tabindex: o, headerClass: i, getLocale: u, getCurrentDate: c } = dh(e, r), s = Ba(e), f = Cl(s);
  let h, m;
  const g = K(null), w = v(() => fe()), x = v(() => u()), T = v(() => A()), p = Wr(e.modelValue, w.value, x.value, e.calendar, T.value), y = K(Q_(p)), b = K(p), C = K(p.hour === null || p.hour < 12), $ = v(() => `q-time q-time--${e.landscape === true ? "landscape" : "portrait"}` + (a.value === true ? " q-time--dark q-dark" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-time--readonly" : "") + (e.bordered === true ? " q-time--bordered" : "") + (e.square === true ? " q-time--square no-border-radius" : "") + (e.flat === true ? " q-time--flat no-shadow" : "")), F = v(() => {
    const ue = b.value;
    return { hour: ue.hour === null ? "--" : N.value === true ? at(ue.hour) : String(C.value === true ? ue.hour === 0 ? 12 : ue.hour : ue.hour > 12 ? ue.hour - 12 : ue.hour), minute: ue.minute === null ? "--" : at(ue.minute), second: ue.second === null ? "--" : at(ue.second) };
  }), N = v(() => e.format24h !== null ? e.format24h : r.lang.date.format24h), B = v(() => {
    const ue = y.value === "hour", ye = ue === true ? 12 : 60, oe = b.value[y.value];
    let Ce = `rotate(${Math.round(oe * (360 / ye)) - 180}deg) translateX(-50%)`;
    return ue === true && N.value === true && b.value.hour >= 12 && (Ce += " scale(.7)"), { transform: Ce };
  }), L = v(() => b.value.hour !== null), z = v(() => L.value === true && b.value.minute !== null), q = v(() => e.hourOptions !== void 0 ? (ue) => e.hourOptions.includes(ue) : e.options !== void 0 ? (ue) => e.options(ue, null, null) : null), E = v(() => e.minuteOptions !== void 0 ? (ue) => e.minuteOptions.includes(ue) : e.options !== void 0 ? (ue) => e.options(b.value.hour, ue, null) : null), k = v(() => e.secondOptions !== void 0 ? (ue) => e.secondOptions.includes(ue) : e.options !== void 0 ? (ue) => e.options(b.value.hour, b.value.minute, ue) : null), j = v(() => {
    if (q.value === null) return null;
    const ue = _(0, 11, q.value), ye = _(12, 11, q.value);
    return { am: ue, pm: ye, values: ue.values.concat(ye.values) };
  }), Q = v(() => E.value !== null ? _(0, 59, E.value) : null), W = v(() => k.value !== null ? _(0, 59, k.value) : null), X = v(() => {
    switch (y.value) {
      case "hour":
        return j.value;
      case "minute":
        return Q.value;
      case "second":
        return W.value;
    }
  }), re = v(() => {
    let ue, ye, oe = 0, _e2 = 1;
    const Ce = X.value !== null ? X.value.values : void 0;
    y.value === "hour" ? N.value === true ? (ue = 0, ye = 23) : (ue = 0, ye = 11, C.value === false && (oe = 12)) : (ue = 0, ye = 55, _e2 = 5);
    const Oe = [];
    for (let Re = ue, Ye = ue; Re <= ye; Re += _e2, Ye++) {
      const it = Re + oe, Ct = (Ce == null ? void 0 : Ce.includes(it)) === false, jt = y.value === "hour" && Re === 0 ? N.value === true ? "00" : "12" : Re;
      Oe.push({ val: it, index: Ye, disable: Ct, label: jt });
    }
    return Oe;
  }), pe = v(() => [[gn, O, void 0, { stop: true, prevent: true, mouse: true }]]);
  ge(() => e.modelValue, (ue) => {
    const ye = Wr(ue, w.value, x.value, e.calendar, T.value);
    (ye.dateHash !== b.value.dateHash || ye.timeHash !== b.value.timeHash) && (b.value = ye, ye.hour === null ? y.value = "hour" : C.value = ye.hour < 12);
  }), ge([w, x], () => {
    We(() => {
      Me();
    });
  });
  function Y() {
    const ue = { ...c(), ...K_() };
    Me(ue), Object.assign(b.value, ue), y.value = "hour";
  }
  function _(ue, ye, oe) {
    const _e2 = Array.apply(null, { length: ye + 1 }).map((Ce, Oe) => {
      const Re = Oe + ue;
      return { index: Re, val: oe(Re) === true };
    }).filter((Ce) => Ce.val === true).map((Ce) => Ce.index);
    return { min: _e2[0], max: _e2[_e2.length - 1], values: _e2, threshold: ye + 1 };
  }
  function H(ue, ye, oe) {
    const _e2 = Math.abs(ue - ye);
    return Math.min(_e2, oe - _e2);
  }
  function V(ue, { min: ye, max: oe, values: _e2, threshold: Ce }) {
    if (ue === ye) return ye;
    if (ue < ye || ue > oe) return H(ue, ye, Ce) <= H(ue, oe, Ce) ? ye : oe;
    const Oe = _e2.findIndex((it) => ue <= it), Re = _e2[Oe - 1], Ye = _e2[Oe];
    return ue - Re <= Ye - ue ? Re : Ye;
  }
  function fe() {
    return e.calendar !== "persian" && e.mask !== null ? e.mask : `HH:mm${e.withSeconds === true ? ":ss" : ""}`;
  }
  function A() {
    if (typeof e.defaultDate != "string") {
      const ue = c(true);
      return ue.dateHash = Un(ue), ue;
    }
    return Wr(e.defaultDate, "YYYY/MM/DD", void 0, e.calendar);
  }
  function R() {
    return gl(l) === true || X.value !== null && (X.value.values.length === 0 || y.value === "hour" && N.value !== true && j.value[C.value === true ? "am" : "pm"].values.length === 0);
  }
  function G() {
    const ue = g.value, { top: ye, left: oe, width: _e2 } = ue.getBoundingClientRect(), Ce = _e2 / 2;
    return { top: ye + Ce, left: oe + Ce, dist: Ce * 0.7 };
  }
  function O(ue) {
    if (R() !== true) {
      if (ue.isFirst === true) {
        h = G(), m = be(ue.evt, h);
        return;
      }
      m = be(ue.evt, h, m), ue.isFinal === true && (h = false, m = null, ne());
    }
  }
  function ne() {
    y.value === "hour" ? y.value = "minute" : e.withSeconds && y.value === "minute" && (y.value = "second");
  }
  function be(ue, ye, oe) {
    const _e2 = en(ue), Ce = Math.abs(_e2.top - ye.top), Oe = Math.sqrt(Math.pow(Math.abs(_e2.top - ye.top), 2) + Math.pow(Math.abs(_e2.left - ye.left), 2));
    let Re, Ye = Math.asin(Ce / Oe) * (180 / Math.PI);
    if (_e2.top < ye.top ? Ye = ye.left < _e2.left ? 90 - Ye : 270 + Ye : Ye = ye.left < _e2.left ? Ye + 90 : 270 - Ye, y.value === "hour") {
      if (Re = Ye / 30, j.value !== null) {
        const it = N.value !== true ? C.value === true : j.value.am.values.length !== 0 && j.value.pm.values.length !== 0 ? Oe >= ye.dist : j.value.am.values.length !== 0;
        Re = V(Re + (it === true ? 0 : 12), j.value[it === true ? "am" : "pm"]);
      } else Re = Math.round(Re), N.value === true ? Oe < ye.dist ? Re < 12 && (Re += 12) : Re === 12 && (Re = 0) : C.value === true && Re === 12 ? Re = 0 : C.value === false && Re !== 12 && (Re += 12);
      N.value === true && (C.value = Re < 12);
    } else Re = Math.round(Ye / 6) % 60, y.value === "minute" && Q.value !== null ? Re = V(Re, Q.value) : y.value === "second" && W.value !== null && (Re = V(Re, W.value));
    return oe !== Re && U[y.value](Re), Re;
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
  function D(ue) {
    ue.keyCode === 13 && we();
  }
  function ee(ue) {
    R() !== true && (r.platform.is.desktop !== true && be(ue, G()), ne());
  }
  function le(ue) {
    R() !== true && be(ue, G());
  }
  function P(ue) {
    if (ue.keyCode === 13) y.value = "hour";
    else if ([37, 39].includes(ue.keyCode)) {
      const ye = ue.keyCode === 37 ? -1 : 1;
      if (j.value !== null) {
        const oe = N.value === true ? j.value.values : j.value[C.value === true ? "am" : "pm"].values;
        if (oe.length === 0) return;
        if (b.value.hour === null) de(oe[0]);
        else {
          const _e2 = (oe.length + oe.indexOf(b.value.hour) + ye) % oe.length;
          de(oe[_e2]);
        }
      } else {
        const oe = N.value === true ? 24 : 12, _e2 = N.value !== true && C.value === false ? 12 : 0, Ce = b.value.hour === null ? -ye : b.value.hour;
        de(_e2 + (24 + Ce + ye) % oe);
      }
    }
  }
  function te(ue) {
    if (ue.keyCode === 13) y.value = "minute";
    else if ([37, 39].includes(ue.keyCode)) {
      const ye = ue.keyCode === 37 ? -1 : 1;
      if (Q.value !== null) {
        const oe = Q.value.values;
        if (oe.length === 0) return;
        if (b.value.minute === null) me(oe[0]);
        else {
          const _e2 = (oe.length + oe.indexOf(b.value.minute) + ye) % oe.length;
          me(oe[_e2]);
        }
      } else {
        const oe = b.value.minute === null ? -ye : b.value.minute;
        me((60 + oe + ye) % 60);
      }
    }
  }
  function ce(ue) {
    if (ue.keyCode === 13) y.value = "second";
    else if ([37, 39].includes(ue.keyCode)) {
      const ye = ue.keyCode === 37 ? -1 : 1;
      if (W.value !== null) {
        const oe = W.value.values;
        if (oe.length === 0) return;
        if (b.value.seconds === null) ae(oe[0]);
        else {
          const _e2 = (oe.length + oe.indexOf(b.value.second) + ye) % oe.length;
          ae(oe[_e2]);
        }
      } else {
        const oe = b.value.second === null ? -ye : b.value.second;
        ae((60 + oe + ye) % 60);
      }
    }
  }
  function de(ue) {
    b.value.hour !== ue && (b.value.hour = ue, Te());
  }
  function me(ue) {
    b.value.minute !== ue && (b.value.minute = ue, Te());
  }
  function ae(ue) {
    b.value.second !== ue && (b.value.second = ue, Te());
  }
  const U = { hour: de, minute: me, second: ae };
  function ie() {
    C.value === false && (C.value = true, b.value.hour !== null && (b.value.hour -= 12, Te()));
  }
  function we() {
    C.value === true && (C.value = false, b.value.hour !== null && (b.value.hour += 12, Te()));
  }
  function ke(ue) {
    const ye = e.modelValue;
    y.value !== ue && ye !== void 0 && ye !== null && ye !== "" && typeof ye != "string" && (y.value = ue);
  }
  function Te() {
    if (q.value !== null && q.value(b.value.hour) !== true) {
      b.value = Wr(), ke("hour");
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
    const ye = Object.assign({ ...b.value }, ue), oe = e.calendar === "persian" ? at(ye.hour) + ":" + at(ye.minute) + (e.withSeconds === true ? ":" + at(ye.second) : "") : gh(new Date(ye.year, ye.month === null ? null : ye.month - 1, ye.day, ye.hour, ye.minute, ye.second, ye.millisecond), w.value, x.value, ye.year, ye.timezoneOffset);
    ye.changed = oe !== e.modelValue, n("update:modelValue", oe, ye);
  }
  function He() {
    const ue = [d("div", { class: "q-time__link " + (y.value === "hour" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: S.hour, onKeyup: P }, F.value.hour), d("div", ":"), d("div", L.value === true ? { class: "q-time__link " + (y.value === "minute" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onKeyup: te, onClick: S.minute } : { class: "q-time__link" }, F.value.minute)];
    e.withSeconds === true && ue.push(d("div", ":"), d("div", z.value === true ? { class: "q-time__link " + (y.value === "second" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onKeyup: ce, onClick: S.second } : { class: "q-time__link" }, F.value.second));
    const ye = [d("div", { class: "q-time__header-label row items-center no-wrap", dir: "ltr" }, ue)];
    return N.value === false && ye.push(d("div", { class: "q-time__header-ampm column items-between no-wrap" }, [d("div", { class: "q-time__link " + (C.value === true ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: ie, onKeyup: M }, "AM"), d("div", { class: "q-time__link " + (C.value !== true ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: we, onKeyup: D }, "PM")])), d("div", { class: "q-time__header flex flex-center no-wrap " + i.value }, ye);
  }
  function Ve() {
    const ue = b.value[y.value];
    return d("div", { class: "q-time__content col relative-position" }, [d(Ft, { name: "q-transition--scale" }, () => d("div", { key: "clock" + y.value, class: "q-time__container-parent absolute-full" }, [d("div", { ref: g, class: "q-time__container-child fit overflow-hidden" }, [sn(d("div", { class: "q-time__clock cursor-pointer non-selectable", onClick: ee, onMousedown: le }, [d("div", { class: "q-time__clock-circle fit" }, [d("div", { class: "q-time__clock-pointer" + (b.value[y.value] === null ? " hidden" : e.color !== void 0 ? ` text-${e.color}` : ""), style: B.value }), re.value.map((ye) => d("div", { class: `q-time__clock-position row flex-center q-time__clock-pos-${ye.index}` + (ye.val === ue ? " q-time__clock-position--active " + i.value : ye.disable === true ? " q-time__clock-position--disable" : "") }, [d("span", ye.label)]))])]), pe.value)])])), e.nowBtn === true ? d(Ze, { class: "q-time__now-button absolute", icon: r.iconSet.datetime.now, unelevated: true, size: "sm", round: true, color: e.color, textColor: e.textColor, tabindex: o.value, onClick: Y }) : null]);
  }
  return l.proxy.setNow = Y, () => {
    const ue = [Ve()], ye = $e(t.default);
    return ye !== void 0 && ue.push(d("div", { class: "q-time__actions" }, ye)), e.name !== void 0 && e.disable !== true && f(ue, "push"), d("div", { class: $.value, tabindex: -1 }, [He(), d("div", { class: "q-time__main col overflow-auto" }, ue)]);
  };
} });
he({ name: "QTimeline", props: { ...nt, color: { type: String, default: "primary" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, layout: { type: String, default: "dense", validator: (e) => ["dense", "comfortable", "loose"].includes(e) } }, setup(e, { slots: t }) {
  const n = xe(), l = lt(e, n.proxy.$q);
  hn(sm, e);
  const r = v(() => `q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}` + (l.value === true ? " q-timeline--dark" : ""));
  return () => d("ul", { class: r.value }, $e(t.default));
} });
he({ name: "QTimelineEntry", props: { heading: Boolean, tag: { type: String, default: "h3" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, icon: String, avatar: String, color: String, title: String, subtitle: String, body: String }, setup(e, { slots: t }) {
  const n = qt(sm, ot);
  if (n === ot) return console.error("QTimelineEntry needs to be child of QTimeline"), ot;
  const l = v(() => `q-timeline__entry q-timeline__entry--${e.side}` + (e.icon !== void 0 || e.avatar !== void 0 ? " q-timeline__entry--icon" : "")), r = v(() => `q-timeline__dot text-${e.color || n.color}`), a = v(() => n.layout === "comfortable" && n.side === "left");
  return () => {
    const o = Aa(t.default, []);
    if (e.body !== void 0 && o.unshift(e.body), e.heading === true) {
      const c = [d("div"), d("div"), d(e.tag, { class: "q-timeline__heading-title" }, o)];
      return d("div", { class: "q-timeline__heading" }, a.value === true ? c.reverse() : c);
    }
    let i;
    e.icon !== void 0 ? i = [d(et, { class: "row items-center justify-center", name: e.icon })] : e.avatar !== void 0 && (i = [d("img", { class: "q-timeline__dot-img", src: e.avatar })]);
    const u = [d("div", { class: "q-timeline__subtitle" }, [d("span", {}, $e(t.subtitle, [e.subtitle]))]), d("div", { class: r.value }, i), d("div", { class: "q-timeline__content" }, [d("h6", { class: "q-timeline__title" }, $e(t.title, [e.title]))].concat(o))];
    return d("li", { class: l.value }, a.value === true ? u.reverse() : u);
  };
} });
var Kd = he({ name: "QToolbar", props: { inset: Boolean }, setup(e, { slots: t }) {
  const n = v(() => "q-toolbar row no-wrap items-center" + (e.inset === true ? " q-toolbar--inset" : ""));
  return () => d("div", { class: n.value, role: "toolbar" }, $e(t.default));
} }), Wd = he({ name: "QToolbarTitle", props: { shrink: Boolean }, setup(e, { slots: t }) {
  const n = v(() => "q-toolbar__title ellipsis" + (e.shrink === true ? " col-shrink" : ""));
  return () => d("div", { class: n.value }, $e(t.default));
} }), W_ = ["none", "strict", "leaf", "leaf-filtered"];
he({ name: "QTree", props: { ...nt, nodes: { type: Array, required: true }, nodeKey: { type: String, required: true }, labelKey: { type: String, default: "label" }, childrenKey: { type: String, default: "children" }, dense: Boolean, color: String, controlColor: String, textColor: String, selectedColor: String, icon: String, tickStrategy: { type: String, default: "none", validator: (e) => W_.includes(e) }, ticked: Array, expanded: Array, selected: {}, noSelectionUnset: Boolean, defaultExpandAll: Boolean, accordion: Boolean, filter: String, filterMethod: Function, duration: {}, noConnectors: Boolean, noTransition: Boolean, noNodesLabel: String, noResultsLabel: String }, emits: ["update:expanded", "update:ticked", "update:selected", "lazyLoad", "afterShow", "afterHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), { $q: r } = l, a = lt(e, r), o = K({}), i = K(e.ticked || []), u = K(e.expanded || []);
  let c = {};
  Er(() => {
    c = {};
  });
  const s = v(() => `q-tree q-tree--${e.dense === true ? "dense" : "standard"}` + (e.noConnectors === true ? " q-tree--no-connectors" : "") + (a.value === true ? " q-tree--dark" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), f = v(() => e.selected !== void 0), h = v(() => e.icon || r.iconSet.tree.icon), m = v(() => e.controlColor || e.color), g = v(() => e.textColor !== void 0 ? ` text-${e.textColor}` : ""), w = v(() => {
    const _ = e.selectedColor || e.color;
    return _ ? ` text-${_}` : "";
  }), x = v(() => e.filterMethod !== void 0 ? e.filterMethod : (_, H) => {
    const V = H.toLowerCase();
    return _[e.labelKey] && _[e.labelKey].toLowerCase().indexOf(V) !== -1;
  }), T = v(() => {
    const _ = {}, H = (V, fe) => {
      const A = V.tickStrategy || (fe ? fe.tickStrategy : e.tickStrategy), R = V[e.nodeKey], G = V[e.childrenKey] && Array.isArray(V[e.childrenKey]) && V[e.childrenKey].length !== 0, O = V.disabled !== true && f.value === true && V.selectable !== false, ne = V.disabled !== true && V.expandable !== false, be = A !== "none", S = A === "strict", M = A === "leaf-filtered", D = A === "leaf" || A === "leaf-filtered";
      let ee = V.disabled !== true && V.tickable !== false;
      D === true && ee === true && fe && fe.tickable !== true && (ee = false);
      let le = V.lazy;
      le === true && o.value[R] !== void 0 && Array.isArray(V[e.childrenKey]) === true && (le = o.value[R]);
      const P = { key: R, parent: fe, isParent: G, lazy: le, disabled: V.disabled, link: V.disabled !== true && (O === true || ne === true && (G === true || le === true)), children: [], matchesFilter: e.filter ? x.value(V, e.filter) : true, selected: R === e.selected && O === true, selectable: O, expanded: G === true ? u.value.includes(R) : false, expandable: ne, noTick: V.noTick === true || S !== true && le && le !== "loaded", tickable: ee, tickStrategy: A, hasTicking: be, strictTicking: S, leafFilteredTicking: M, leafTicking: D, ticked: S === true ? i.value.includes(R) : G === true ? false : i.value.includes(R) };
      if (_[R] = P, G === true && (P.children = V[e.childrenKey].map((te) => H(te, P)), e.filter && (P.matchesFilter !== true ? P.matchesFilter = P.children.some((te) => te.matchesFilter) : P.noTick !== true && P.disabled !== true && P.tickable === true && M === true && P.children.every((te) => te.matchesFilter !== true || te.noTick === true || te.tickable !== true) === true && (P.tickable = false)), P.matchesFilter === true && (P.noTick !== true && S !== true && P.children.every((te) => te.noTick) === true && (P.noTick = true), D))) {
        if (P.ticked = false, P.indeterminate = P.children.some((te) => te.indeterminate === true), P.tickable = P.tickable === true && P.children.some((te) => te.tickable), P.indeterminate !== true) {
          const te = P.children.reduce((ce, de) => de.ticked === true ? ce + 1 : ce, 0);
          te === P.children.length ? P.ticked = true : te > 0 && (P.indeterminate = true);
        }
        P.indeterminate === true && (P.indeterminateNextState = P.children.every((te) => te.tickable !== true || te.ticked !== true));
      }
      return P;
    };
    return e.nodes.forEach((V) => H(V, null)), _;
  });
  ge(() => e.ticked, (_) => {
    i.value = _;
  }), ge(() => e.expanded, (_) => {
    u.value = _;
  });
  function p(_) {
    const H = [].reduce, V = (fe, A) => {
      if (fe || !A) return fe;
      if (Array.isArray(A) === true) return H.call(Object(A), V, fe);
      if (A[e.nodeKey] === _) return A;
      if (A[e.childrenKey]) return V(null, A[e.childrenKey]);
    };
    return V(null, e.nodes);
  }
  function y() {
    return i.value.map((_) => p(_));
  }
  function b() {
    return u.value.map((_) => p(_));
  }
  function C(_) {
    return _ && T.value[_] ? T.value[_].expanded : false;
  }
  function $() {
    e.expanded !== void 0 ? n("update:expanded", []) : u.value = [];
  }
  function F() {
    const _ = [], H = (V) => {
      V[e.childrenKey] && V[e.childrenKey].length !== 0 && V.expandable !== false && V.disabled !== true && (_.push(V[e.nodeKey]), V[e.childrenKey].forEach(H));
    };
    e.nodes.forEach(H), e.expanded !== void 0 ? n("update:expanded", _) : u.value = _;
  }
  function N(_, H, V = p(_), fe = T.value[_]) {
    if (fe.lazy && fe.lazy !== "loaded") {
      if (fe.lazy === "loading") return;
      o.value[_] = "loading", Array.isArray(V[e.childrenKey]) !== true && (V[e.childrenKey] = []), n("lazyLoad", { node: V, key: _, done: (A) => {
        o.value[_] = "loaded", V[e.childrenKey] = Array.isArray(A) === true ? A : [], We(() => {
          var _a3;
          ((_a3 = T.value[_]) == null ? void 0 : _a3.isParent) === true && B(_, true);
        });
      }, fail: () => {
        delete o.value[_], V[e.childrenKey].length === 0 && delete V[e.childrenKey];
      } });
    } else fe.isParent === true && fe.expandable === true && B(_, H);
  }
  function B(_, H) {
    let V = u.value;
    const fe = e.expanded !== void 0;
    if (fe === true && (V = V.slice()), H) {
      if (e.accordion && T.value[_]) {
        const A = [];
        T.value[_].parent ? T.value[_].parent.children.forEach((R) => {
          R.key !== _ && R.expandable === true && A.push(R.key);
        }) : e.nodes.forEach((R) => {
          const G = R[e.nodeKey];
          G !== _ && A.push(G);
        }), A.length !== 0 && (V = V.filter((R) => A.includes(R) === false));
      }
      V = V.concat([_]).filter((A, R, G) => G.indexOf(A) === R);
    } else V = V.filter((A) => A !== _);
    fe === true ? n("update:expanded", V) : u.value = V;
  }
  function L(_) {
    return _ && T.value[_] ? T.value[_].ticked : false;
  }
  function z(_, H) {
    let V = i.value;
    const fe = e.ticked !== void 0;
    fe === true && (V = V.slice()), H ? V = V.concat(_).filter((A, R, G) => G.indexOf(A) === R) : V = V.filter((A) => _.includes(A) === false), fe === true && n("update:ticked", V);
  }
  function q(_, H, V) {
    const fe = { tree: l, node: _, key: V, color: e.color, dark: a.value };
    return Ot(fe, "expanded", () => H.expanded, (A) => {
      A !== H.expanded && N(V, A);
    }), Ot(fe, "ticked", () => H.ticked, (A) => {
      A !== H.ticked && z([V], A);
    }), fe;
  }
  function E(_) {
    return (e.filter ? _.filter((H) => T.value[H[e.nodeKey]].matchesFilter) : _).map((H) => W(H));
  }
  function k(_) {
    if (_.icon !== void 0) return d(et, { class: "q-tree__icon q-mr-sm", name: _.icon, color: _.iconColor });
    const H = _.img || _.avatar;
    if (H) return d("img", { class: `q-tree__${_.img ? "img" : "avatar"} q-mr-sm`, src: H });
  }
  function j() {
    n("afterShow");
  }
  function Q() {
    n("afterHide");
  }
  function W(_) {
    const H = _[e.nodeKey], V = T.value[H], fe = _.header && t[`header-${_.header}`] || t["default-header"], A = V.isParent === true ? E(_[e.childrenKey]) : [], R = A.length !== 0 || V.lazy && V.lazy !== "loaded";
    let G = _.body && t[`body-${_.body}`] || t["default-body"];
    const O = fe !== void 0 || G !== void 0 ? q(_, V, H) : null;
    return G !== void 0 && (G = d("div", { class: "q-tree__node-body relative-position" }, [d("div", { class: g.value }, [G(O)])])), d("div", { key: H, class: `q-tree__node relative-position q-tree__node--${R === true ? "parent" : "child"}` }, [d("div", { class: "q-tree__node-header relative-position row no-wrap items-center" + (V.link === true ? " q-tree__node--link q-hoverable q-focusable" : "") + (V.selected === true ? " q-tree__node--selected" : "") + (V.disabled === true ? " q-tree__node--disabled" : ""), tabindex: V.link === true ? 0 : -1, ariaExpanded: A.length > 0 ? V.expanded : null, role: "treeitem", onClick: (ne) => {
      re(_, V, ne);
    }, onKeypress(ne) {
      Yl(ne) !== true && (ne.keyCode === 13 ? re(_, V, ne, true) : ne.keyCode === 32 && pe(_, V, ne, true));
    } }, [d("div", { class: "q-focus-helper", tabindex: -1, ref: (ne) => {
      c[V.key] = ne;
    } }), V.lazy === "loading" ? d(_n, { class: "q-tree__spinner", color: m.value }) : R === true ? d(et, { class: "q-tree__arrow" + (V.expanded === true ? " q-tree__arrow--rotate" : ""), name: h.value, onClick(ne) {
      pe(_, V, ne);
    } }) : null, V.hasTicking === true && V.noTick !== true ? d(ua, { class: "q-tree__tickbox", modelValue: V.indeterminate === true ? null : V.ticked, color: m.value, dark: a.value, dense: true, keepColor: true, disable: V.tickable !== true, onKeydown: je, "onUpdate:modelValue": (ne) => {
      Y(V, ne);
    } }) : null, d("div", { class: "q-tree__node-header-content col row no-wrap items-center" + (V.selected === true ? w.value : g.value) }, [fe ? fe(O) : [k(_), d("div", _[e.labelKey])]])]), R === true ? e.noTransition === true ? V.expanded === true ? d("div", { class: "q-tree__node-collapsible" + g.value, key: `${H}__q` }, [G, d("div", { class: "q-tree__children" + (V.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, A)]) : null : d(Us, { duration: e.duration, onShow: j, onHide: Q }, () => sn(d("div", { class: "q-tree__node-collapsible" + g.value, key: `${H}__q` }, [G, d("div", { class: "q-tree__children" + (V.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, A)]), [[Xv, V.expanded]])) : G]);
  }
  function X(_) {
    var _a3;
    (_a3 = c[_]) == null ? void 0 : _a3.focus();
  }
  function re(_, H, V, fe) {
    fe !== true && H.selectable !== false && X(H.key), f.value && H.selectable ? e.noSelectionUnset === false ? n("update:selected", H.key !== e.selected ? H.key : null) : H.key !== e.selected && n("update:selected", H.key === void 0 ? null : H.key) : pe(_, H, V, fe), typeof _.handler == "function" && _.handler(_);
  }
  function pe(_, H, V, fe) {
    V !== void 0 && je(V), fe !== true && H.selectable !== false && X(H.key), N(H.key, !H.expanded, _, H);
  }
  function Y(_, H) {
    if (_.indeterminate === true && (H = _.indeterminateNextState), _.strictTicking) z([_.key], H);
    else if (_.leafTicking) {
      const V = [], fe = (A) => {
        A.isParent ? (H !== true && A.noTick !== true && A.tickable === true && V.push(A.key), A.leafTicking === true && A.children.forEach(fe)) : A.noTick !== true && A.tickable === true && (A.leafFilteredTicking !== true || A.matchesFilter === true) && V.push(A.key);
      };
      fe(_), z(V, H);
    }
  }
  return e.defaultExpandAll === true && F(), Object.assign(l, { getNodeByKey: p, getTickedNodes: y, getExpandedNodes: b, isExpanded: C, collapseAll: $, expandAll: F, setExpanded: N, isTicked: L, setTicked: z }), () => {
    const _ = E(e.nodes);
    return d("div", { class: s.value, role: "tree" }, _.length === 0 ? e.filter ? e.noResultsLabel || r.lang.tree.noResults : e.noNodesLabel || r.lang.tree.noNodes : _);
  };
} });
function Yd(e) {
  return (e * 100).toFixed(2) + "%";
}
var Y_ = { ...nt, ...Mh, label: String, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, noThumbnails: Boolean, thumbnailFit: { type: String, default: "cover" }, autoUpload: Boolean, hideUploadBtn: Boolean, disable: Boolean, readonly: Boolean }, Wh = [...Eh, "start", "finish", "added", "removed"];
function X_(e, t) {
  const n = xe(), { props: l, slots: r, emit: a, proxy: o } = n, { $q: i } = o, u = lt(l, i);
  function c(O, ne, be) {
    if (O.__status = ne, ne === "idle") {
      O.__uploaded = 0, O.__progress = 0, O.__sizeLabel = Bu(O.size), O.__progressLabel = "0.00%";
      return;
    }
    if (ne === "failed") {
      o.$forceUpdate();
      return;
    }
    O.__uploaded = ne === "uploaded" ? O.size : be, O.__progress = ne === "uploaded" ? 1 : Math.min(0.9999, O.__uploaded / O.size), O.__progressLabel = Yd(O.__progress), o.$forceUpdate();
  }
  const s = v(() => l.disable !== true && l.readonly !== true), f = K(false), h = K(null), m = K(null), g = { files: K([]), queuedFiles: K([]), uploadedFiles: K([]), uploadedSize: K(0), updateFileStatus: c, isAlive: () => gl(n) === false }, { pickFiles: w, addFiles: x, onDragover: T, onDragleave: p, processFiles: y, getDndNode: b, maxFilesNumber: C, maxTotalSizeNumber: $ } = Rh({ editable: s, dnd: f, getFileInput: Y, addFilesToQueue: _ });
  Object.assign(g, e({ props: l, slots: r, emit: a, helpers: g, exposeApi: (O) => {
    Object.assign(g, O);
  } })), g.isBusy === void 0 && (g.isBusy = K(false));
  const F = K(0), N = v(() => F.value === 0 ? 0 : g.uploadedSize.value / F.value), B = v(() => Yd(N.value)), L = v(() => Bu(F.value)), z = v(() => s.value === true && g.isUploading.value !== true && (l.multiple === true || g.queuedFiles.value.length === 0) && (l.maxFiles === void 0 || g.files.value.length < C.value) && (l.maxTotalSize === void 0 || F.value < $.value)), q = v(() => s.value === true && g.isBusy.value !== true && g.isUploading.value !== true && g.queuedFiles.value.length !== 0);
  hn(hm, fe);
  const E = v(() => "q-uploader column no-wrap" + (u.value === true ? " q-uploader--dark q-dark" : "") + (l.bordered === true ? " q-uploader--bordered" : "") + (l.square === true ? " q-uploader--square no-border-radius" : "") + (l.flat === true ? " q-uploader--flat no-shadow" : "") + (l.disable === true ? " disabled q-uploader--disable" : "") + (f.value === true ? " q-uploader--dnd" : "")), k = v(() => "q-uploader__header" + (l.color !== void 0 ? ` bg-${l.color}` : "") + (l.textColor !== void 0 ? ` text-${l.textColor}` : ""));
  ge(g.isUploading, (O, ne) => {
    ne === false && O === true ? a("start") : ne === true && O === false && a("finish");
  });
  function j() {
    l.disable === false && (g.abort(), g.uploadedSize.value = 0, F.value = 0, pe(), g.files.value = [], g.queuedFiles.value = [], g.uploadedFiles.value = []);
  }
  function Q() {
    l.disable === false && X(["uploaded"], () => {
      g.uploadedFiles.value = [];
    });
  }
  function W() {
    X(["idle", "failed"], ({ size: O }) => {
      F.value -= O, g.queuedFiles.value = [];
    });
  }
  function X(O, ne) {
    if (l.disable === true) return;
    const be = { files: [], size: 0 }, S = g.files.value.filter((M) => O.indexOf(M.__status) === -1 ? true : (be.size += M.size, be.files.push(M), M.__img !== void 0 && window.URL.revokeObjectURL(M.__img.src), false));
    be.files.length !== 0 && (g.files.value = S, ne(be), a("removed", be.files));
  }
  function re(O) {
    l.disable || (O.__status === "uploaded" ? g.uploadedFiles.value = g.uploadedFiles.value.filter((ne) => ne.__key !== O.__key) : O.__status === "uploading" ? O.__abort() : F.value -= O.size, g.files.value = g.files.value.filter((ne) => ne.__key !== O.__key ? true : (ne.__img !== void 0 && window.URL.revokeObjectURL(ne.__img.src), false)), g.queuedFiles.value = g.queuedFiles.value.filter((ne) => ne.__key !== O.__key), a("removed", [O]));
  }
  function pe() {
    g.files.value.forEach((O) => {
      O.__img !== void 0 && window.URL.revokeObjectURL(O.__img.src);
    });
  }
  function Y() {
    return m.value || h.value.getElementsByClassName("q-uploader__input")[0];
  }
  function _(O, ne) {
    const be = y(O, ne, g.files.value, true), S = Y();
    S != null && (S.value = ""), be !== void 0 && (be.forEach((M) => {
      if (g.updateFileStatus(M, "idle"), F.value += M.size, l.noThumbnails !== true && M.type.toUpperCase().startsWith("IMAGE")) {
        const D = new Image();
        D.src = window.URL.createObjectURL(M), M.__img = D;
      }
    }), g.files.value = g.files.value.concat(be), g.queuedFiles.value = g.queuedFiles.value.concat(be), a("added", be), l.autoUpload === true && g.upload());
  }
  function H() {
    q.value === true && g.upload();
  }
  function V(O, ne, be) {
    if (O === true) {
      const S = { type: "a", key: ne, icon: i.iconSet.uploader[ne], flat: true, dense: true };
      let M;
      return ne === "add" ? (S.onClick = w, M = fe) : S.onClick = be, d(Ze, S, M);
    }
  }
  function fe() {
    return d("input", { ref: m, class: "q-uploader__input overflow-hidden absolute-full", tabindex: -1, type: "file", title: "", accept: l.accept, multiple: l.multiple === true ? "multiple" : void 0, capture: l.capture, onMousedown: wt, onClick: w, onChange: _ });
  }
  function A() {
    return r.header !== void 0 ? r.header(G) : [d("div", { class: "q-uploader__header-content column" }, [d("div", { class: "flex flex-center no-wrap q-gutter-xs" }, [V(g.queuedFiles.value.length !== 0, "removeQueue", W), V(g.uploadedFiles.value.length !== 0, "removeUploaded", Q), g.isUploading.value === true ? d(_n, { class: "q-uploader__spinner" }) : null, d("div", { class: "col column justify-center" }, [l.label !== void 0 ? d("div", { class: "q-uploader__title" }, [l.label]) : null, d("div", { class: "q-uploader__subtitle" }, [L.value + " / " + B.value])]), V(z.value, "add"), V(l.hideUploadBtn === false && q.value === true, "upload", g.upload), V(g.isUploading.value, "clear", g.abort)])])];
  }
  function R() {
    return r.list !== void 0 ? r.list(G) : g.files.value.map((O) => d("div", { key: O.__key, class: "q-uploader__file relative-position" + (l.noThumbnails !== true && O.__img !== void 0 ? " q-uploader__file--img" : "") + (O.__status === "failed" ? " q-uploader__file--failed" : O.__status === "uploaded" ? " q-uploader__file--uploaded" : ""), style: l.noThumbnails !== true && O.__img !== void 0 ? { backgroundImage: 'url("' + O.__img.src + '")', backgroundSize: l.thumbnailFit } : null }, [d("div", { class: "q-uploader__file-header row flex-center no-wrap" }, [O.__status === "failed" ? d(et, { class: "q-uploader__file-status", name: i.iconSet.type.negative, color: "negative" }) : null, d("div", { class: "q-uploader__file-header-content col" }, [d("div", { class: "q-uploader__title" }, [O.name]), d("div", { class: "q-uploader__subtitle row items-center no-wrap" }, [O.__sizeLabel + " / " + O.__progressLabel])]), O.__status === "uploading" ? d(Gm, { value: O.__progress, min: 0, max: 1, indeterminate: O.__progress === 0 }) : d(Ze, { round: true, dense: true, flat: true, icon: i.iconSet.uploader[O.__status === "uploaded" ? "done" : "clear"], onClick: () => {
      re(O);
    } })])]));
  }
  Ke(() => {
    g.isUploading.value === true && g.abort(), g.files.value.length !== 0 && pe();
  });
  const G = {};
  for (const O in g) pt(g[O]) === true ? Ot(G, O, () => g[O].value) : G[O] = g[O];
  return Object.assign(G, { upload: H, reset: j, removeUploadedFiles: Q, removeQueuedFiles: W, removeFile: re, pickFiles: w, addFiles: x }), em(G, { canAddFiles: () => z.value, canUpload: () => q.value, uploadSizeLabel: () => L.value, uploadProgressLabel: () => B.value }), t({ ...g, upload: H, reset: j, removeUploadedFiles: Q, removeQueuedFiles: W, removeFile: re, pickFiles: w, addFiles: x, canAddFiles: z, canUpload: q, uploadSizeLabel: L, uploadProgressLabel: B }), () => {
    const O = [d("div", { class: k.value }, A()), d("div", { class: "q-uploader__list scroll" }, R()), b("uploader")];
    g.isBusy.value === true && O.push(d("div", { class: "q-uploader__overlay absolute-full flex flex-center" }, [d(_n)]));
    const ne = { ref: h, class: E.value };
    return z.value === true && Object.assign(ne, { onDragover: T, onDragleave: p }), d("div", ne, O);
  };
}
var G_ = () => true;
function Yh(e) {
  const t = {};
  return e.forEach((n) => {
    t[n] = G_;
  }), t;
}
var Z_ = Yh(Wh), J_ = ({ name: e, props: t, emits: n, injectPlugin: l }) => he({ name: e, props: { ...Y_, ...t }, emits: $t(n) === true ? { ...Z_, ...n } : [...Wh, ...n], setup(r, { expose: a }) {
  return X_(l, a);
} });
function Hn(e) {
  return typeof e == "function" ? e : () => e;
}
var ew = "QUploader", tw = { url: [Function, String], method: { type: [Function, String], default: "POST" }, fieldName: { type: [Function, String], default: () => (e) => e.name }, headers: [Function, Array], formFields: [Function, Array], withCredentials: [Function, Boolean], sendRaw: [Function, Boolean], batch: [Function, Boolean], factory: Function }, nw = ["factoryFailed", "uploaded", "failed", "uploading"];
function lw({ props: e, emit: t, helpers: n }) {
  const l = K([]), r = K([]), a = K(0), o = v(() => ({ url: Hn(e.url), method: Hn(e.method), headers: Hn(e.headers), formFields: Hn(e.formFields), fieldName: Hn(e.fieldName), withCredentials: Hn(e.withCredentials), sendRaw: Hn(e.sendRaw), batch: Hn(e.batch) })), i = v(() => a.value > 0), u = v(() => r.value.length !== 0);
  let c;
  function s() {
    l.value.forEach((g) => {
      g.abort();
    }), r.value.length !== 0 && (c = true);
  }
  function f() {
    const g = n.queuedFiles.value.slice(0);
    n.queuedFiles.value = [], o.value.batch(g) ? h(g) : g.forEach((w) => {
      h([w]);
    });
  }
  function h(g) {
    if (a.value++, typeof e.factory != "function") {
      m(g, {});
      return;
    }
    const w = e.factory(g);
    if (!w) t("factoryFailed", new Error("QUploader: factory() does not return properly"), g), a.value--;
    else if (typeof w.catch == "function" && typeof w.then == "function") {
      r.value.push(w);
      const x = (T) => {
        n.isAlive() === true && (r.value = r.value.filter((p) => p !== w), r.value.length === 0 && (c = false), n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach((p) => {
          n.updateFileStatus(p, "failed");
        }), t("factoryFailed", T, g), a.value--);
      };
      w.then((T) => {
        c === true ? x(new Error("Aborted")) : n.isAlive() === true && (r.value = r.value.filter((p) => p !== w), m(g, T));
      }).catch(x);
    } else m(g, w || {});
  }
  function m(g, w) {
    const x = new FormData(), T = new XMLHttpRequest(), p = (q, E) => w[q] !== void 0 ? Hn(w[q])(E) : o.value[q](E), y = p("url", g);
    if (!y) {
      console.error("q-uploader: invalid or no URL specified"), a.value--;
      return;
    }
    const b = p("formFields", g);
    b !== void 0 && b.forEach((q) => {
      x.append(q.name, q.value);
    });
    let C = 0, $ = 0, F = 0, N = 0, B;
    T.upload.addEventListener("progress", (q) => {
      if (B === true) return;
      const E = Math.min(N, q.loaded);
      n.uploadedSize.value += E - F, F = E;
      let k = F - $;
      for (let j = C; k > 0 && j < g.length; j++) {
        const Q = g[j];
        if (k > Q.size) k -= Q.size, C++, $ += Q.size, n.updateFileStatus(Q, "uploading", Q.size);
        else {
          n.updateFileStatus(Q, "uploading", k);
          return;
        }
      }
    }, false), T.onreadystatechange = () => {
      T.readyState < 4 || (T.status && T.status < 400 ? (n.uploadedFiles.value = n.uploadedFiles.value.concat(g), g.forEach((q) => {
        n.updateFileStatus(q, "uploaded");
      }), t("uploaded", { files: g, xhr: T })) : (B = true, n.uploadedSize.value -= F, n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach((q) => {
        n.updateFileStatus(q, "failed");
      }), t("failed", { files: g, xhr: T })), a.value--, l.value = l.value.filter((q) => q !== T));
    }, T.open(p("method", g), y), p("withCredentials", g) === true && (T.withCredentials = true);
    const L = p("headers", g);
    L !== void 0 && L.forEach((q) => {
      T.setRequestHeader(q.name, q.value);
    });
    const z = p("sendRaw", g);
    g.forEach((q) => {
      n.updateFileStatus(q, "uploading", 0), z !== true && x.append(p("fieldName", q), q, q.name), q.xhr = T, q.__abort = () => {
        T.abort();
      }, N += q.size;
    }), t("uploading", { files: g, xhr: T }), l.value.push(T), z === true ? T.send(new Blob(g)) : T.send(x);
  }
  return { isUploading: i, isBusy: u, abort: s, upload: f };
}
var rw = { name: ew, props: tw, emits: nw, injectPlugin: lw };
J_(rw);
he({ name: "QUploaderAddTrigger", setup() {
  const e = qt(hm, ot);
  return e === ot && console.error("QUploaderAddTrigger needs to be child of QUploader"), e;
} });
he({ name: "QVideo", props: { ...Qs, src: { type: String, required: true }, title: String, fetchpriority: { type: String, default: "auto" }, loading: { type: String, default: "eager" }, referrerpolicy: { type: String, default: "strict-origin-when-cross-origin" } }, setup(e) {
  const t = Ks(e), n = v(() => "q-video" + (e.ratio !== void 0 ? " q-video--responsive" : ""));
  return () => d("div", { class: n.value, style: t.value }, [d("iframe", { src: e.src, title: e.title, fetchpriority: e.fetchpriority, loading: e.loading, referrerpolicy: e.referrerpolicy, frameborder: "0", allowfullscreen: true })]);
} });
function Xd(e) {
  if (e === false) return 0;
  if (e === true || e === void 0) return 1;
  const t = parseInt(e, 10);
  return isNaN(t) ? 0 : t;
}
An({ name: "close-popup", beforeMount(e, { value: t }) {
  const n = { depth: Xd(t), handler(l) {
    n.depth !== 0 && setTimeout(() => {
      const r = np(e);
      r !== void 0 && lp(r, l, n.depth);
    });
  }, handlerKey(l) {
    yn(l, 13) === true && n.handler(l);
  } };
  e.__qclosepopup = n, e.addEventListener("click", n.handler), e.addEventListener("keyup", n.handlerKey);
}, updated(e, { value: t, oldValue: n }) {
  t !== n && (e.__qclosepopup.depth = Xd(t));
}, beforeUnmount(e) {
  const t = e.__qclosepopup;
  e.removeEventListener("click", t.handler), e.removeEventListener("keyup", t.handlerKey), delete e.__qclosepopup;
} });
var aw = 0, Nr = void 0;
function Gd(e, t) {
  Nr === void 0 && (Nr = document.createElement("div"), Nr.style.cssText = "position: absolute; left: 0; top: 0", document.body.appendChild(Nr));
  const n = e.getBoundingClientRect(), l = Nr.getBoundingClientRect(), { marginLeft: r, marginRight: a, marginTop: o, marginBottom: i } = window.getComputedStyle(e), u = parseInt(r, 10) + parseInt(a, 10), c = parseInt(o, 10) + parseInt(i, 10);
  return { left: n.left - l.left, top: n.top - l.top, width: n.right - n.left, height: n.bottom - n.top, widthM: n.right - n.left + (t === true ? 0 : u), heightM: n.bottom - n.top + (t === true ? 0 : c), marginH: t === true ? u : 0, marginV: t === true ? c : 0 };
}
function eo(e) {
  return { width: e.scrollWidth, height: e.scrollHeight };
}
var Zd = ["Top", "Right", "Bottom", "Left"], Jd = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], ow = /-block|-inline|block-|inline-/, iw = /(-block|-inline|block-|inline-).*:/;
function ef(e, t) {
  const n = window.getComputedStyle(e), l = {};
  for (let r = 0; r < t.length; r++) {
    const a = t[r];
    if (n[a] === "") if (a === "cssText") {
      const o = n.length;
      let i = "";
      for (let u = 0; u < o; u++) ow.test(n[u]) !== true && (i += n[u] + ": " + n[n[u]] + "; ");
      l[a] = i;
    } else if (["borderWidth", "borderStyle", "borderColor"].indexOf(a) !== -1) {
      const o = a.replace("border", "");
      let i = "";
      for (let u = 0; u < Zd.length; u++) {
        const c = "border" + Zd[u] + o;
        i += n[c] + " ";
      }
      l[a] = i;
    } else if (a === "borderRadius") {
      let o = "", i = "";
      for (let u = 0; u < Jd.length; u++) {
        const c = n[Jd[u]].split(" ");
        o += c[0] + " ", i += (c[1] === void 0 ? c[0] : c[1]) + " ";
      }
      l[a] = o + "/ " + i;
    } else l[a] = n[a];
    else a === "cssText" ? l[a] = n[a].split(";").filter((o) => iw.test(o) !== true).join(";") : l[a] = n[a];
  }
  return l;
}
var uw = ["absolute", "fixed", "relative", "sticky"];
function tf(e) {
  let t = e, n = 0;
  for (; t !== null && t !== document; ) {
    const { position: l, zIndex: r } = window.getComputedStyle(t), a = Number(r);
    a > n && (t === e || uw.includes(l) === true) && (n = a), t = t.parentNode;
  }
  return n;
}
function sw(e) {
  return { from: e.from, to: e.to !== void 0 ? e.to : e.from };
}
function cw(e) {
  return typeof e == "number" ? e = { duration: e } : typeof e == "function" && (e = { onEnd: e }), { ...e, waitFor: e.waitFor === void 0 ? 0 : e.waitFor, duration: isNaN(e.duration) === true ? 300 : parseInt(e.duration, 10), easing: typeof e.easing == "string" && e.easing.length !== 0 ? e.easing : "ease-in-out", delay: isNaN(e.delay) === true ? 0 : parseInt(e.delay, 10), fill: typeof e.fill == "string" && e.fill.length !== 0 ? e.fill : "none", resize: e.resize === true, useCSS: e.useCSS === true || e.usecss === true, hideFromClone: e.hideFromClone === true || e.hidefromclone === true, keepToClone: e.keepToClone === true || e.keeptoclone === true, tween: e.tween === true, tweenFromOpacity: isNaN(e.tweenFromOpacity) === true ? 0.6 : parseFloat(e.tweenFromOpacity), tweenToOpacity: isNaN(e.tweenToOpacity) === true ? 0.5 : parseFloat(e.tweenToOpacity) };
}
function nf(e) {
  const t = typeof e;
  return t === "function" ? e() : t === "string" ? document.querySelector(e) : e;
}
function lf(e) {
  return e && e.ownerDocument === document && e.parentNode !== null;
}
function dw(e) {
  let t = () => false, n = false, l = true;
  const r = sw(e), a = cw(e), o = nf(r.from);
  if (lf(o) !== true) return t;
  typeof o.qMorphCancel == "function" && o.qMorphCancel();
  let i, u, c, s;
  const f = o.parentNode, h = o.nextElementSibling, m = Gd(o, a.resize), { width: g, height: w } = eo(f), { borderWidth: x, borderStyle: T, borderColor: p, borderRadius: y, backgroundColor: b, transform: C, position: $, cssText: F } = ef(o, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), N = o.classList.toString(), B = o.style.cssText, L = o.cloneNode(true), z = a.tween === true ? o.cloneNode(true) : void 0;
  z !== void 0 && (z.className = z.classList.toString().split(" ").filter((E) => /^bg-/.test(E) === false).join(" ")), a.hideFromClone === true && L.classList.add("q-morph--internal"), L.setAttribute("aria-hidden", "true"), L.style.transition = "none", L.style.animation = "none", L.style.pointerEvents = "none", f.insertBefore(L, h), o.qMorphCancel = () => {
    n = true, L.remove(), z == null ? void 0 : z.remove(), a.hideFromClone === true && L.classList.remove("q-morph--internal"), o.qMorphCancel = void 0;
  };
  const q = () => {
    const E = nf(r.to);
    if (n === true || lf(E) !== true) {
      typeof o.qMorphCancel == "function" && o.qMorphCancel();
      return;
    }
    o !== E && typeof E.qMorphCancel == "function" && E.qMorphCancel(), a.keepToClone !== true && E.classList.add("q-morph--internal"), L.classList.add("q-morph--internal");
    const { width: k, height: j } = eo(f), { width: Q, height: W } = eo(E.parentNode);
    a.hideFromClone !== true && L.classList.remove("q-morph--internal"), E.qMorphCancel = () => {
      n = true, L.remove(), z == null ? void 0 : z.remove(), a.hideFromClone === true && L.classList.remove("q-morph--internal"), a.keepToClone !== true && E.classList.remove("q-morph--internal"), o.qMorphCancel = void 0, E.qMorphCancel = void 0;
    };
    const X = () => {
      if (n === true) {
        typeof E.qMorphCancel == "function" && E.qMorphCancel();
        return;
      }
      a.hideFromClone !== true && (L.classList.add("q-morph--internal"), L.innerHTML = "", L.style.left = 0, L.style.right = "unset", L.style.top = 0, L.style.bottom = "unset", L.style.transform = "none"), a.keepToClone !== true && E.classList.remove("q-morph--internal");
      const re = E.parentNode, { width: pe, height: Y } = eo(re), _ = E.cloneNode(a.keepToClone);
      _.setAttribute("aria-hidden", "true"), a.keepToClone !== true && (_.style.left = 0, _.style.right = "unset", _.style.top = 0, _.style.bottom = "unset", _.style.transform = "none", _.style.pointerEvents = "none"), _.classList.add("q-morph--internal");
      const H = E === o && f === re ? L : E.nextElementSibling;
      re.insertBefore(_, H);
      const { borderWidth: V, borderStyle: fe, borderColor: A, borderRadius: R, backgroundColor: G, transform: O, position: ne, cssText: be } = ef(E, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), S = E.classList.toString(), M = E.style.cssText;
      E.style.cssText = be, E.style.transform = "none", E.style.animation = "none", E.style.transition = "none", E.className = S.split(" ").filter((_e2) => /^bg-/.test(_e2) === false).join(" ");
      const D = Gd(E, a.resize), ee = m.left - D.left, le = m.top - D.top, P = m.width / (D.width > 0 ? D.width : 10), te = m.height / (D.height > 0 ? D.height : 100), ce = g - k, de = w - j, me = pe - Q, ae = Y - W, U = Math.max(m.widthM, ce), ie = Math.max(m.heightM, de), we = Math.max(D.widthM, me), ke = Math.max(D.heightM, ae), Te = o === E && ["absolute", "fixed"].includes(ne) === false && ["absolute", "fixed"].includes($) === false;
      let Me = ne === "fixed", He = re;
      for (; Me !== true && He !== document; ) Me = window.getComputedStyle(He).position === "fixed", He = He.parentNode;
      if (a.hideFromClone !== true && (L.style.display = "block", L.style.flex = "0 0 auto", L.style.opacity = 0, L.style.minWidth = "unset", L.style.maxWidth = "unset", L.style.minHeight = "unset", L.style.maxHeight = "unset", L.classList.remove("q-morph--internal")), a.keepToClone !== true && (_.style.display = "block", _.style.flex = "0 0 auto", _.style.opacity = 0, _.style.minWidth = "unset", _.style.maxWidth = "unset", _.style.minHeight = "unset", _.style.maxHeight = "unset"), _.classList.remove("q-morph--internal"), typeof a.classes == "string" && (E.className += " " + a.classes), typeof a.style == "string") E.style.cssText += " " + a.style;
      else if ($t(a.style) === true) for (const _e2 in a.style) E.style[_e2] = a.style[_e2];
      const Ve = tf(L), ue = tf(E), ye = Me === true ? document.documentElement : { scrollLeft: 0, scrollTop: 0 };
      E.style.position = Me === true ? "fixed" : "absolute", E.style.left = `${D.left - ye.scrollLeft}px`, E.style.right = "unset", E.style.top = `${D.top - ye.scrollTop}px`, E.style.margin = 0, a.resize === true && (E.style.minWidth = "unset", E.style.maxWidth = "unset", E.style.minHeight = "unset", E.style.maxHeight = "unset", E.style.overflow = "hidden", E.style.overflowX = "hidden", E.style.overflowY = "hidden"), document.body.appendChild(E), z !== void 0 && (z.style.cssText = F, z.style.transform = "none", z.style.animation = "none", z.style.transition = "none", z.style.position = E.style.position, z.style.left = `${m.left - ye.scrollLeft}px`, z.style.right = "unset", z.style.top = `${m.top - ye.scrollTop}px`, z.style.margin = 0, z.style.pointerEvents = "none", a.resize === true && (z.style.minWidth = "unset", z.style.maxWidth = "unset", z.style.minHeight = "unset", z.style.maxHeight = "unset", z.style.overflow = "hidden", z.style.overflowX = "hidden", z.style.overflowY = "hidden"), document.body.appendChild(z));
      const oe = (_e2) => {
        o === E && l !== true ? (E.style.cssText = B, E.className = N) : (E.style.cssText = M, E.className = S), _.parentNode === re && re.insertBefore(E, _), L.remove(), _.remove(), z == null ? void 0 : z.remove(), t = () => false, o.qMorphCancel = void 0, E.qMorphCancel = void 0, typeof a.onEnd == "function" && a.onEnd(l === true ? "to" : "from", _e2 === true);
      };
      if (a.useCSS !== true && typeof E.animate == "function") {
        const _e2 = a.resize === true ? { transform: `translate(${ee}px, ${le}px)`, width: `${U}px`, height: `${ie}px` } : { transform: `translate(${ee}px, ${le}px) scale(${P}, ${te})` }, Ce = a.resize === true ? { width: `${we}px`, height: `${ke}px` } : {}, Oe = a.resize === true ? { width: `${U}px`, height: `${ie}px` } : {}, Re = a.resize === true ? { transform: `translate(${-1 * ee}px, ${-1 * le}px)`, width: `${we}px`, height: `${ke}px` } : { transform: `translate(${-1 * ee}px, ${-1 * le}px) scale(${1 / P}, ${1 / te})` }, Ye = z !== void 0 ? { opacity: a.tweenToOpacity } : { backgroundColor: b }, it = z !== void 0 ? { opacity: 1 } : { backgroundColor: G };
        s = E.animate([{ margin: 0, borderWidth: x, borderStyle: T, borderColor: p, borderRadius: y, zIndex: Ve, transformOrigin: "0 0", ..._e2, ...Ye }, { margin: 0, borderWidth: V, borderStyle: fe, borderColor: A, borderRadius: R, zIndex: ue, transformOrigin: "0 0", transform: O, ...Ce, ...it }], { duration: a.duration, easing: a.easing, fill: a.fill, delay: a.delay }), u = z === void 0 ? void 0 : z.animate([{ opacity: a.tweenFromOpacity, margin: 0, borderWidth: x, borderStyle: T, borderColor: p, borderRadius: y, zIndex: Ve, transformOrigin: "0 0", transform: C, ...Oe }, { opacity: 0, margin: 0, borderWidth: V, borderStyle: fe, borderColor: A, borderRadius: R, zIndex: ue, transformOrigin: "0 0", ...Re }], { duration: a.duration, easing: a.easing, fill: a.fill, delay: a.delay }), i = a.hideFromClone === true || Te === true ? void 0 : L.animate([{ margin: `${de < 0 ? de / 2 : 0}px ${ce < 0 ? ce / 2 : 0}px`, width: `${U + m.marginH}px`, height: `${ie + m.marginV}px` }, { margin: 0, width: 0, height: 0 }], { duration: a.duration, easing: a.easing, fill: a.fill, delay: a.delay }), c = a.keepToClone === true ? void 0 : _.animate([Te === true ? { margin: `${de < 0 ? de / 2 : 0}px ${ce < 0 ? ce / 2 : 0}px`, width: `${U + m.marginH}px`, height: `${ie + m.marginV}px` } : { margin: 0, width: 0, height: 0 }, { margin: `${ae < 0 ? ae / 2 : 0}px ${me < 0 ? me / 2 : 0}px`, width: `${we + D.marginH}px`, height: `${ke + D.marginV}px` }], { duration: a.duration, easing: a.easing, fill: a.fill, delay: a.delay });
        const Ct = (jt) => {
          i == null ? void 0 : i.cancel(), u == null ? void 0 : u.cancel(), c == null ? void 0 : c.cancel(), s.cancel(), s.removeEventListener("finish", Ct), s.removeEventListener("cancel", Ct), oe(jt), i = void 0, u = void 0, c = void 0, s = void 0;
        };
        o.qMorphCancel = () => {
          o.qMorphCancel = void 0, n = true, Ct();
        }, E.qMorphCancel = () => {
          E.qMorphCancel = void 0, n = true, Ct();
        }, s.addEventListener("finish", Ct), s.addEventListener("cancel", Ct), t = (jt) => n === true || s === void 0 ? false : jt === true ? (Ct(true), true) : (l = l !== true, i == null ? void 0 : i.reverse(), u == null ? void 0 : u.reverse(), c == null ? void 0 : c.reverse(), s.reverse(), true);
      } else {
        const _e2 = `q-morph-anim-${++aw}`, Ce = document.createElement("style"), Oe = a.resize === true ? `
            transform: translate(${ee}px, ${le}px);
            width: ${U}px;
            height: ${ie}px;
          ` : `transform: translate(${ee}px, ${le}px) scale(${P}, ${te});`, Re = a.resize === true ? `
            width: ${we}px;
            height: ${ke}px;
          ` : "", Ye = a.resize === true ? `
            width: ${U}px;
            height: ${ie}px;
          ` : "", it = a.resize === true ? `
            transform: translate(${-1 * ee}px, ${-1 * le}px);
            width: ${we}px;
            height: ${ke}px;
          ` : `transform: translate(${-1 * ee}px, ${-1 * le}px) scale(${1 / P}, ${1 / te});`, Ct = z !== void 0 ? `opacity: ${a.tweenToOpacity};` : `background-color: ${b};`, jt = z !== void 0 ? "opacity: 1;" : `background-color: ${G};`, nl = z === void 0 ? "" : `
            @keyframes ${_e2}-from-tween {
              0% {
                opacity: ${a.tweenFromOpacity};
                margin: 0;
                border-width: ${x};
                border-style: ${T};
                border-color: ${p};
                border-radius: ${y};
                z-index: ${Ve};
                transform-origin: 0 0;
                transform: ${C};
                ${Ye}
              }

              100% {
                opacity: 0;
                margin: 0;
                border-width: ${V};
                border-style: ${fe};
                border-color: ${A};
                border-radius: ${R};
                z-index: ${ue};
                transform-origin: 0 0;
                ${it}
              }
            }
          `, ln = a.hideFromClone === true || Te === true ? "" : `
            @keyframes ${_e2}-from {
              0% {
                margin: ${de < 0 ? de / 2 : 0}px ${ce < 0 ? ce / 2 : 0}px;
                width: ${U + m.marginH}px;
                height: ${ie + m.marginV}px;
              }

              100% {
                margin: 0;
                width: 0;
                height: 0;
              }
            }
          `, In = Te === true ? `
            margin: ${de < 0 ? de / 2 : 0}px ${ce < 0 ? ce / 2 : 0}px;
            width: ${U + m.marginH}px;
            height: ${ie + m.marginV}px;
          ` : `
            margin: 0;
            width: 0;
            height: 0;
          `, se = a.keepToClone === true ? "" : `
            @keyframes ${_e2}-to {
              0% {
                ${In}
              }

              100% {
                margin: ${ae < 0 ? ae / 2 : 0}px ${me < 0 ? me / 2 : 0}px;
                width: ${we + D.marginH}px;
                height: ${ke + D.marginV}px;
              }
            }
          `;
        Ce.innerHTML = `
          @keyframes ${_e2} {
            0% {
              margin: 0;
              border-width: ${x};
              border-style: ${T};
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
              border-width: ${V};
              border-style: ${fe};
              border-color: ${A};
              border-radius: ${R};
              background-color: ${G};
              z-index: ${ue};
              transform-origin: 0 0;
              transform: ${O};
              ${Re}
              ${jt}
            }
          }

          ${ln}

          ${nl}

          ${se}
        `, document.head.appendChild(Ce);
        let Se = "normal";
        L.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${Se} ${a.fill} ${_e2}-from`, z !== void 0 && (z.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${Se} ${a.fill} ${_e2}-from-tween`), _.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${Se} ${a.fill} ${_e2}-to`, E.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${Se} ${a.fill} ${_e2}`;
        const Fe = (Le) => {
          Le === Object(Le) && Le.animationName !== _e2 || (E.removeEventListener("animationend", Fe), E.removeEventListener("animationcancel", Fe), oe(), Ce.remove());
        };
        o.qMorphCancel = () => {
          o.qMorphCancel = void 0, n = true, Fe();
        }, E.qMorphCancel = () => {
          E.qMorphCancel = void 0, n = true, Fe();
        }, E.addEventListener("animationend", Fe), E.addEventListener("animationcancel", Fe), t = (Le) => n === true || !E || !L || !_ ? false : Le === true ? (Fe(), true) : (l = l !== true, Se = Se === "normal" ? "reverse" : "normal", L.style.animationDirection = Se, z.style.animationDirection = Se, _.style.animationDirection = Se, E.style.animationDirection = Se, true);
      }
    };
    a.waitFor > 0 || a.waitFor === "transitionend" || a.waitFor === Object(a.waitFor) && typeof a.waitFor.then == "function" ? (a.waitFor > 0 ? new Promise((pe) => setTimeout(pe, a.waitFor)) : a.waitFor === "transitionend" ? new Promise((pe) => {
      const Y = () => {
        _ !== null && (clearTimeout(_), _ = null), E && (E.removeEventListener("transitionend", Y), E.removeEventListener("transitioncancel", Y)), pe();
      };
      let _ = setTimeout(Y, 400);
      E.addEventListener("transitionend", Y), E.addEventListener("transitioncancel", Y);
    }) : a.waitFor).then(X).catch(() => {
      typeof E.qMorphCancel == "function" && E.qMorphCancel();
    }) : X();
  };
  return typeof e.onToggle == "function" && e.onToggle(), requestAnimationFrame(q), (E) => t(E);
}
var zo = {}, fw = ["duration", "delay", "easing", "fill", "classes", "style", "duration", "resize", "useCSS", "hideFromClone", "keepToClone", "tween", "tweenFromOpacity", "tweenToOpacity", "waitFor", "onEnd"], vw = ["resize", "useCSS", "hideFromClone", "keepToClone", "tween"];
function cr(e, t) {
  e.clsAction !== t && (e.clsAction = t, e.el.classList[t]("q-morph--invisible"));
}
function Xh(e) {
  if (e.animating === true || e.queue.length < 2) return;
  const [t, n] = e.queue;
  e.animating = true, t.animating = true, n.animating = true, cr(t, "remove"), cr(n, "remove");
  const l = dw({ from: t.el, to: n.el, onToggle() {
    cr(t, "add"), cr(n, "remove");
  }, ...n.opts, onEnd(r, a) {
    var _a3, _b2;
    (_b2 = (_a3 = n.opts).onEnd) == null ? void 0 : _b2.call(_a3, r, a), a !== true && (t.animating = false, n.animating = false, e.animating = false, e.cancel = void 0, e.queue.shift(), Xh(e));
  } });
  e.cancel = () => {
    l(true), e.cancel = void 0;
  };
}
function Gh(e, t) {
  const n = t.opts;
  vw.forEach((l) => {
    n[l] = e[l] === true;
  });
}
function mw(e, t) {
  const n = typeof e == "string" && e.length !== 0 ? e.split(":") : [];
  t.name = n[0], t.group = n[1], Object.assign(t.opts, { duration: isNaN(n[2]) === true ? 300 : parseFloat(n[2]), waitFor: n[3] });
}
function hw(e, t) {
  e.group !== void 0 && (t.group = e.group), e.name !== void 0 && (t.name = e.name);
  const n = t.opts;
  fw.forEach((l) => {
    e[l] !== void 0 && (n[l] = e[l]);
  });
}
function gw(e, t) {
  if (t.name === e) {
    const n = zo[t.group];
    n === void 0 ? (zo[t.group] = { name: t.group, model: e, queue: [t], animating: false }, cr(t, "remove")) : n.model !== e && (n.model = e, n.queue.push(t), n.animating === false && n.queue.length === 2 && Xh(n));
    return;
  }
  t.animating === false && cr(t, "add");
}
function rf(e, t) {
  let n;
  Object(t) === t ? (n = "" + t.model, hw(t, e), Gh(t, e)) : n = "" + t, n !== e.model ? (e.model = n, gw(n, e)) : e.animating === false && e.clsAction !== void 0 && e.el.classList[e.clsAction]("q-morph--invisible");
}
An({ name: "morph", mounted(e, t) {
  const n = { el: e, animating: false, opts: {} };
  Gh(t.modifiers, n), mw(t.arg, n), rf(n, t.value), e.__qmorph = n;
}, updated(e, t) {
  rf(e.__qmorph, t.value);
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qmorph, n = zo[t.group];
  n !== void 0 && n.queue.indexOf(t) !== -1 && (n.queue = n.queue.filter((r) => r !== t), n.queue.length === 0 && ((_a3 = n.cancel) == null ? void 0 : _a3.call(n), delete zo[t.group])), t.clsAction === "add" && e.classList.remove("q-morph--invisible"), delete e.__qmorph;
} });
var bw = { childList: true, subtree: true, attributes: true, characterData: true, attributeOldValue: true, characterDataOldValue: true };
function af(e, t, n) {
  var _a3;
  t.handler = n, (_a3 = t.observer) == null ? void 0 : _a3.disconnect(), t.observer = new MutationObserver((l) => {
    typeof t.handler == "function" && (t.handler(l) === false || t.once === true) && Zh(e);
  }), t.observer.observe(e, t.opts);
}
function Zh(e) {
  var _a3;
  const t = e.__qmutation;
  t !== void 0 && ((_a3 = t.observer) == null ? void 0 : _a3.disconnect(), delete e.__qmutation);
}
An({ name: "mutation", mounted(e, { modifiers: { once: t, ...n }, value: l }) {
  const r = { once: t, opts: Object.keys(n).length === 0 ? bw : n };
  af(e, r, l), e.__qmutation = r;
}, updated(e, { oldValue: t, value: n }) {
  const l = e.__qmutation;
  l !== void 0 && t !== n && af(e, l, n);
}, beforeUnmount: Zh });
var { passive: No } = dt;
function of(e, { value: t, oldValue: n }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, No);
    return;
  }
  e.handler = t, typeof n != "function" && (e.scrollTarget.addEventListener("scroll", e.scroll, No), e.scroll());
}
An({ name: "scroll-fire", mounted(e, t) {
  const n = { scrollTarget: Dn(e), scroll: Rr(() => {
    let l, r;
    n.scrollTarget === window ? (r = e.getBoundingClientRect().bottom, l = window.innerHeight) : (r = Eo(e).top + Sr(e), l = Eo(n.scrollTarget).top + Sr(n.scrollTarget)), r > 0 && r < l && (n.scrollTarget.removeEventListener("scroll", n.scroll, No), n.handler(e));
  }, 25) };
  of(n, t), e.__qscrollfire = n;
}, updated(e, t) {
  t.value !== t.oldValue && of(e.__qscrollfire, t);
}, beforeUnmount(e) {
  const t = e.__qscrollfire;
  t.scrollTarget.removeEventListener("scroll", t.scroll, No), t.scroll.cancel(), delete e.__qscrollfire;
} });
function uf(e, { value: t, oldValue: n }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, dt.passive);
    return;
  }
  e.handler = t, typeof n != "function" && e.scrollTarget.addEventListener("scroll", e.scroll, dt.passive);
}
An({ name: "scroll", mounted(e, t) {
  const n = { scrollTarget: Dn(e), scroll() {
    n.handler(bl(n.scrollTarget), ci(n.scrollTarget));
  } };
  uf(n, t), e.__qscroll = n;
}, updated(e, t) {
  e.__qscroll !== void 0 && t.oldValue !== t.value && uf(e.__qscroll, t);
}, beforeUnmount(e) {
  const t = e.__qscroll;
  t.scrollTarget.removeEventListener("scroll", t.scroll, dt.passive), delete e.__qscroll;
} });
An({ name: "touch-hold", beforeMount(e, t) {
  const { modifiers: n } = t;
  if (n.mouse !== true && De.has.touch !== true) return;
  const l = { handler: t.value, noop: xt, mouseStart(a) {
    typeof l.handler == "function" && ri(a) === true && (kt(l, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]), l.start(a, true));
  }, touchStart(a) {
    if (a.target !== void 0 && typeof l.handler == "function") {
      const o = a.target;
      kt(l, "temp", [[o, "touchmove", "move", "passiveCapture"], [o, "touchcancel", "end", "notPassiveCapture"], [o, "touchend", "end", "notPassiveCapture"]]), l.start(a);
    }
  }, start(a, o) {
    l.origin = en(a);
    const i = Date.now();
    De.is.mobile === true && (document.body.classList.add("non-selectable"), Mn(), l.styleCleanup = (u) => {
      l.styleCleanup = void 0;
      const c = () => {
        document.body.classList.remove("non-selectable");
      };
      u === true ? (Mn(), setTimeout(c, 10)) : c();
    }), l.triggered = false, l.sensitivity = o === true ? l.mouseSensitivity : l.touchSensitivity, l.timer = setTimeout(() => {
      l.timer = void 0, Mn(), l.triggered = true, l.handler({ evt: a, touch: o !== true, mouse: o === true, position: l.origin, duration: Date.now() - i });
    }, l.duration);
  }, move(a) {
    const { top: o, left: i } = en(a);
    l.timer !== void 0 && (Math.abs(i - l.origin.left) >= l.sensitivity || Math.abs(o - l.origin.top) >= l.sensitivity) && (clearTimeout(l.timer), l.timer = void 0);
  }, end(a) {
    var _a3;
    Wt(l, "temp"), (_a3 = l.styleCleanup) == null ? void 0 : _a3.call(l, l.triggered), l.triggered === true ? a !== void 0 && je(a) : l.timer !== void 0 && (clearTimeout(l.timer), l.timer = void 0);
  } }, r = [600, 5, 7];
  if (typeof t.arg == "string" && t.arg.length !== 0 && t.arg.split(":").forEach((a, o) => {
    const i = parseInt(a, 10);
    i && (r[o] = i);
  }), [l.duration, l.touchSensitivity, l.mouseSensitivity] = r, e.__qtouchhold = l, n.mouse === true) {
    const a = n.mouseCapture === true || n.mousecapture === true ? "Capture" : "";
    kt(l, "main", [[e, "mousedown", "mouseStart", `passive${a}`]]);
  }
  De.has.touch === true && kt(l, "main", [[e, "touchstart", "touchStart", `passive${n.capture === true ? "Capture" : ""}`], [e, "touchend", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const n = e.__qtouchhold;
  n !== void 0 && t.oldValue !== t.value && (typeof t.value != "function" && n.end(), n.handler = t.value);
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qtouchhold;
  t !== void 0 && (Wt(t, "main"), Wt(t, "temp"), t.timer !== void 0 && clearTimeout(t.timer), (_a3 = t.styleCleanup) == null ? void 0 : _a3.call(t), delete e.__qtouchhold);
} });
var Jh = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] }, yw = new RegExp(`^([\\d+]+|${Object.keys(Jh).join("|")})$`, "i");
function pw(e, t) {
  const { top: n, left: l } = en(e);
  return Math.abs(l - t.left) >= 7 || Math.abs(n - t.top) >= 7;
}
An({ name: "touch-repeat", beforeMount(e, { modifiers: t, value: n, arg: l }) {
  const r = Object.keys(t).reduce((u, c) => {
    if (yw.test(c) === true) {
      const s = isNaN(parseInt(c, 10)) ? Jh[c.toLowerCase()] : parseInt(c, 10);
      s >= 0 && u.push(s);
    }
    return u;
  }, []);
  if (t.mouse !== true && De.has.touch !== true && r.length === 0) return;
  const a = typeof l == "string" && l.length !== 0 ? l.split(":").map((u) => parseInt(u, 10)) : [0, 600, 300], o = a.length - 1, i = { keyboard: r, handler: n, noop: xt, mouseStart(u) {
    i.event === void 0 && typeof i.handler == "function" && ri(u) === true && (kt(i, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]), i.start(u, true));
  }, keyboardStart(u) {
    if (typeof i.handler == "function" && yn(u, r) === true) {
      if ((a[0] === 0 || i.event !== void 0) && (je(u), e.focus(), i.event !== void 0)) return;
      kt(i, "temp", [[document, "keyup", "end", "notPassiveCapture"], [document, "click", "end", "notPassiveCapture"]]), i.start(u, false, true);
    }
  }, touchStart(u) {
    if (u.target !== void 0 && typeof i.handler == "function") {
      const c = u.target;
      kt(i, "temp", [[c, "touchmove", "move", "passiveCapture"], [c, "touchcancel", "end", "notPassiveCapture"], [c, "touchend", "end", "notPassiveCapture"]]), i.start(u);
    }
  }, start(u, c, s) {
    s !== true && (i.origin = en(u));
    function f(m) {
      i.styleCleanup = void 0, document.documentElement.style.cursor = "";
      const g = () => {
        document.body.classList.remove("non-selectable");
      };
      m === true ? (Mn(), setTimeout(g, 10)) : g();
    }
    De.is.mobile === true && (document.body.classList.add("non-selectable"), Mn(), i.styleCleanup = f), i.event = { touch: c !== true && s !== true, mouse: c === true, keyboard: s === true, startTime: Date.now(), repeatCount: 0 };
    const h = () => {
      if (i.timer = void 0, i.event === void 0) return;
      i.event.repeatCount === 0 && (i.event.evt = u, s === true ? i.event.keyCode = u.keyCode : i.event.position = en(u), De.is.mobile !== true && (document.documentElement.style.cursor = "pointer", document.body.classList.add("non-selectable"), Mn(), i.styleCleanup = f)), i.event.duration = Date.now() - i.event.startTime, i.event.repeatCount += 1, i.handler(i.event);
      const m = o < i.event.repeatCount ? o : i.event.repeatCount;
      i.timer = setTimeout(h, a[m]);
    };
    a[0] === 0 ? h() : i.timer = setTimeout(h, a[0]);
  }, move(u) {
    i.event !== void 0 && i.timer !== void 0 && pw(u, i.origin) === true && (clearTimeout(i.timer), i.timer = void 0);
  }, end(u) {
    var _a3;
    i.event !== void 0 && ((_a3 = i.styleCleanup) == null ? void 0 : _a3.call(i, true), u !== void 0 && i.event.repeatCount > 0 && je(u), Wt(i, "temp"), i.timer !== void 0 && (clearTimeout(i.timer), i.timer = void 0), i.event = void 0);
  } };
  if (e.__qtouchrepeat = i, t.mouse === true) {
    const u = t.mouseCapture === true || t.mousecapture === true ? "Capture" : "";
    kt(i, "main", [[e, "mousedown", "mouseStart", `passive${u}`]]);
  }
  if (De.has.touch === true && kt(i, "main", [[e, "touchstart", "touchStart", `passive${t.capture === true ? "Capture" : ""}`], [e, "touchend", "noop", "passiveCapture"]]), r.length !== 0) {
    const u = t.keyCapture === true || t.keycapture === true ? "Capture" : "";
    kt(i, "main", [[e, "keydown", "keyboardStart", `notPassive${u}`]]);
  }
}, updated(e, { oldValue: t, value: n }) {
  const l = e.__qtouchrepeat;
  l !== void 0 && t !== n && (typeof n != "function" && l.end(), l.handler = n);
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qtouchrepeat;
  t !== void 0 && (t.timer !== void 0 && clearTimeout(t.timer), Wt(t, "main"), Wt(t, "temp"), (_a3 = t.styleCleanup) == null ? void 0 : _a3.call(t), delete e.__qtouchrepeat);
} });
function _w(e, t = document.body) {
  if (!(t instanceof Element)) throw new TypeError("Expected a DOM element");
  return getComputedStyle(t).getPropertyValue(`--q-${e}`).trim() || null;
}
var to;
function ww() {
  return De.is.winphone ? "msapplication-navbutton-color" : De.is.safari ? "apple-mobile-web-app-status-bar-style" : "theme-color";
}
function xw(e) {
  const t = document.getElementsByTagName("META");
  for (const n in t) if (t[n].name === e) return t[n];
}
function Sw(e) {
  to === void 0 && (to = ww());
  let t = xw(to);
  const n = t === void 0;
  n && (t = document.createElement("meta"), t.setAttribute("name", to)), t.setAttribute("content", e), n && document.head.appendChild(t);
}
De.is.mobile === true && (De.is.nativeMobile === true || De.is.winphone === true || De.is.safari === true || De.is.webkit === true || De.is.vivaldi);
var Hr = {};
function Cw(e) {
  Object.assign(Qt, { request: e, exit: e, toggle: e });
}
function eg() {
  return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || null;
}
function tg() {
  const e = Qt.activeEl = Qt.isActive === false ? null : eg();
  tp(e === null || e === document.documentElement ? document.body : e);
}
function kw() {
  Qt.isActive = Qt.isActive === false, tg();
}
function sf(e, t) {
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
Hr.request = ["requestFullscreen", "msRequestFullscreen", "mozRequestFullScreen", "webkitRequestFullscreen"].find((e) => document.documentElement[e] !== void 0), Qt.isCapable = Hr.request !== void 0, Qt.isCapable === false ? Cw(() => Promise.reject("Not capable")) : (Object.assign(Qt, { request(e) {
  const t = e || document.documentElement, { activeEl: n } = Qt;
  return t === n ? Promise.resolve() : (n !== null && t.contains(n) === true ? Qt.exit() : Promise.resolve()).finally(() => sf(t, Hr.request));
}, exit() {
  return Qt.isActive === true ? sf(document, Hr.exit) : Promise.resolve();
}, toggle(e) {
  return Qt.isActive === true ? Qt.exit() : Qt.request(e);
} }), Hr.exit = ["exitFullscreen", "msExitFullscreen", "mozCancelFullScreen", "webkitExitFullscreen"].find((e) => document[e]), Qt.isActive = !!eg(), Qt.isActive === true && tg(), ["onfullscreenchange", "onmsfullscreenchange", "onwebkitfullscreenchange"].forEach((e) => {
  document[e] = kw;
}));
var Tw = Sl({ appVisible: true }, { install({ $q: e }) {
  Ot(e, "appVisible", () => this.appVisible);
} });
{
  let e, t;
  if (typeof document.hidden < "u" ? (e = "hidden", t = "visibilitychange") : typeof document.msHidden < "u" ? (e = "msHidden", t = "msvisibilitychange") : typeof document.webkitHidden < "u" && (e = "webkitHidden", t = "webkitvisibilitychange"), t && typeof document[e] < "u") {
    const n = () => {
      Tw.appVisible = !document[e];
    };
    document.addEventListener(t, n, false);
  }
}
he({ name: "BottomSheetComponent", props: { ...nt, title: String, message: String, actions: Array, grid: Boolean, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), l = lt(e, n.$q), r = K(null);
  function a() {
    r.value.show();
  }
  function o() {
    r.value.hide();
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
      }, onKeyup(w) {
        w.keyCode === 13 && i(m);
      } }, [d("div", { class: "q-focus-helper" }), m.icon ? d(et, { name: m.icon, color: m.color }) : g ? d("img", { class: m.avatar ? "q-bottom-sheet__avatar" : "", src: g }) : d("div", { class: "q-bottom-sheet__empty-icon" }), d("div", m.label)]);
    });
  }
  function s() {
    return e.actions.map((m) => {
      const g = m.avatar || m.img;
      return m.label === void 0 ? d(Ql, { spaced: true, dark: l.value }) : d(kr, { class: ["q-bottom-sheet__item", m.classes], style: m.style, tabindex: 0, clickable: true, dark: l.value, onClick() {
        i(m);
      } }, () => [d(mn, { avatar: true }, () => m.icon ? d(et, { name: m.icon, color: m.color }) : g ? d("img", { class: m.avatar ? "q-bottom-sheet__avatar" : "", src: g }) : null), d(mn, () => m.label)]);
    });
  }
  function f() {
    const m = [];
    return e.title && m.push(d(Fl, { class: "q-dialog__title" }, () => e.title)), e.message && m.push(d(Fl, { class: "q-dialog__message" }, () => e.message)), m.push(e.grid === true ? d("div", { class: "row items-stretch justify-start", role: "list" }, c()) : d("div", { role: "list" }, s())), m;
  }
  function h() {
    return [d(Nm, { class: [`q-bottom-sheet q-bottom-sheet--${e.grid === true ? "grid" : "list"}` + (l.value === true ? " q-bottom-sheet--dark q-dark" : ""), e.cardClass], style: e.cardStyle }, f)];
  }
  return Object.assign(n, { show: a, hide: o }), () => d(vi, { ref: r, position: "bottom", onHide: u }, h);
} });
function ng(e, t) {
  for (const n in t) n !== "spinner" && Object(t[n]) === t[n] ? (e[n] = Object(e[n]) !== e[n] ? {} : { ...e[n] }, ng(e[n], t[n])) : e[n] = t[n];
}
function qw(e, t, n) {
  return (l) => {
    let r, a;
    const o = l.component !== void 0;
    if (o === true) {
      const { component: p, componentProps: y } = l;
      r = typeof p == "string" ? n.component(p) : p, a = y || {};
    } else {
      const { class: p, style: y, ...b } = l;
      r = e, a = b, p !== void 0 && (b.cardClass = p), y !== void 0 && (b.cardStyle = y);
    }
    let i, u = false;
    const c = K(null), s = $a(false, "dialog"), f = (p) => {
      var _a3;
      if (((_a3 = c.value) == null ? void 0 : _a3[p]) !== void 0) {
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
      return f("hide"), g;
    }, update(p) {
      if (i !== null) {
        if (o === true) Object.assign(a, p);
        else {
          const { class: y, style: b, ...C } = p;
          y !== void 0 && (C.cardClass = y), b !== void 0 && (C.cardStyle = b), ng(a, C);
        }
        i.$forceUpdate();
      }
      return g;
    } }, w = (p) => {
      u = true, h.forEach((y) => {
        y(p);
      });
    }, x = () => {
      T.unmount(s), Es(s), T = null, i = null, u !== true && m.forEach((p) => {
        p();
      });
    };
    let T = oi({ name: "QGlobalDialog", setup: () => () => d(r, { ...a, ref: c, onOk: w, onHide: x, onVnodeMounted(...p) {
      typeof a.onVnodeMounted == "function" && a.onVnodeMounted(...p), We(() => f("show"));
    } }) }, n);
    return i = T.mount(s), g;
  };
}
function lg(e) {
  return encodeURIComponent(e);
}
function rg(e) {
  return decodeURIComponent(e);
}
function Mw(e) {
  return lg(e === Object(e) ? JSON.stringify(e) : "" + e);
}
function Ew(e) {
  if (e === "") return e;
  e.indexOf('"') === 0 && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), e = rg(e.replace(/\+/g, " "));
  try {
    const t = JSON.parse(e);
    (t === Object(t) || Array.isArray(t) === true) && (e = t);
  } catch {
  }
  return e;
}
function ag(e) {
  const t = /* @__PURE__ */ new Date();
  return t.setMilliseconds(t.getMilliseconds() + e), t.toUTCString();
}
function Rw(e) {
  let t = 0;
  const n = e.match(/(\d+)d/), l = e.match(/(\d+)h/), r = e.match(/(\d+)m/), a = e.match(/(\d+)s/);
  return n && (t += n[1] * 864e5), l && (t += l[1] * 36e5), r && (t += r[1] * 6e4), a && (t += a[1] * 1e3), t === 0 ? e : ag(t);
}
function og(e, t, n = {}, l) {
  let r, a;
  n.expires !== void 0 && (Object.prototype.toString.call(n.expires) === "[object Date]" ? r = n.expires.toUTCString() : typeof n.expires == "string" ? r = Rw(n.expires) : (a = parseFloat(n.expires), r = isNaN(a) === false ? ag(a * 864e5) : n.expires));
  const o = `${lg(e)}=${Mw(t)}`, i = [o, r !== void 0 ? "; Expires=" + r : "", n.path ? "; Path=" + n.path : "", n.domain ? "; Domain=" + n.domain : "", n.sameSite ? "; SameSite=" + n.sameSite : "", n.httpOnly ? "; HttpOnly" : "", n.secure ? "; Secure" : "", n.other ? "; " + n.other : ""].join("");
  if (l) {
    l.req.qCookies ? l.req.qCookies.push(i) : l.req.qCookies = [i], l.res.setHeader("Set-Cookie", l.req.qCookies);
    let u = l.req.headers.cookie || "";
    if (r !== void 0 && a < 0) {
      const c = Ho(e, l);
      c !== void 0 && (u = u.replace(`${e}=${c}; `, "").replace(`; ${e}=${c}`, "").replace(`${e}=${c}`, ""));
    } else u = u ? `${o}; ${u}` : i;
    l.req.headers.cookie = u;
  } else document.cookie = i;
}
function Ho(e, t) {
  const n = t ? t.req.headers : document, l = n.cookie ? n.cookie.split("; ") : [], r = l.length;
  let a = e ? null : {}, o = 0, i, u, c;
  for (; o < r; o++) if (i = l[o].split("="), u = rg(i.shift()), c = i.join("="), !e) a[u] = c;
  else if (e === u) {
    a = Ew(c);
    break;
  }
  return a;
}
function Aw(e, t, n) {
  og(e, "", { expires: -1, ...t }, n);
}
function Pw(e, t) {
  return Ho(e, t) !== null;
}
function ig(e) {
  return { get: (t) => Ho(t, e), set: (t, n, l) => og(t, n, l, e), has: (t) => Pw(t, e), remove: (t, n) => Aw(t, n, e), getAll: () => Ho(null, e) };
}
var Ws = { install({ $q: e, ssrContext: t }) {
  e.cookies = this;
} };
__QUASAR_SSR__ && (Ws.parseSSR = (e) => {
  if (e !== void 0) return ig(e);
});
Object.assign(Ws, ig());
var $w = Ws, Bw = he({ name: "DialogPluginComponent", props: { ...nt, title: String, message: String, prompt: Object, options: Object, progress: [Boolean, Object], html: Boolean, ok: { type: [String, Object, Boolean], default: true }, cancel: [String, Object, Boolean], focus: { type: String, default: "ok", validator: (e) => ["ok", "cancel", "none"].includes(e) }, stackButtons: Boolean, color: String, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), { $q: l } = n, r = lt(e, l), a = K(null), o = K(e.prompt !== void 0 ? e.prompt.model : e.options !== void 0 ? e.options.model : void 0), i = v(() => "q-dialog-plugin" + (r.value === true ? " q-dialog-plugin--dark q-dark" : "") + (e.progress !== false ? " q-dialog-plugin--progress" : "")), u = v(() => e.color || (r.value === true ? "amber" : "primary")), c = v(() => e.progress === false ? null : $t(e.progress) === true ? { component: e.progress.spinner || _n, props: { color: e.progress.color || u.value } } : { component: _n, props: { color: u.value } }), s = v(() => e.prompt !== void 0 || e.options !== void 0), f = v(() => {
    if (s.value !== true) return {};
    const { model: k, isValid: j, items: Q, ...W } = e.prompt !== void 0 ? e.prompt : e.options;
    return W;
  }), h = v(() => $t(e.ok) === true || e.ok === true ? l.lang.label.ok : e.ok), m = v(() => $t(e.cancel) === true || e.cancel === true ? l.lang.label.cancel : e.cancel), g = v(() => e.prompt !== void 0 ? e.prompt.isValid !== void 0 && e.prompt.isValid(o.value) !== true : e.options !== void 0 ? e.options.isValid !== void 0 && e.options.isValid(o.value) !== true : false), w = v(() => ({ color: u.value, label: h.value, ripple: false, disable: g.value, ...$t(e.ok) === true ? e.ok : { flat: true }, "data-autofocus": e.focus === "ok" && s.value !== true || void 0, onClick: y })), x = v(() => ({ color: u.value, label: m.value, ripple: false, ...$t(e.cancel) === true ? e.cancel : { flat: true }, "data-autofocus": e.focus === "cancel" && s.value !== true || void 0, onClick: b }));
  ge(() => e.prompt && e.prompt.model, $), ge(() => e.options && e.options.model, $);
  function T() {
    a.value.show();
  }
  function p() {
    a.value.hide();
  }
  function y() {
    t("ok", Xe(o.value)), p();
  }
  function b() {
    p();
  }
  function C() {
    t("hide");
  }
  function $(k) {
    o.value = k;
  }
  function F(k) {
    g.value !== true && e.prompt.type !== "textarea" && yn(k, 13) === true && y();
  }
  function N(k, j) {
    return e.html === true ? d(Fl, { class: k, innerHTML: j }) : d(Fl, { class: k }, () => j);
  }
  function B() {
    return [d(Bh, { color: u.value, dense: true, autofocus: true, dark: r.value, ...f.value, modelValue: o.value, "onUpdate:modelValue": $, onKeyup: F })];
  }
  function L() {
    return [d(N1, { color: u.value, options: e.options.items, dark: r.value, ...f.value, modelValue: o.value, "onUpdate:modelValue": $ })];
  }
  function z() {
    const k = [];
    return e.cancel && k.push(d(Ze, x.value)), e.ok && k.push(d(Ze, w.value)), d(pp, { class: e.stackButtons === true ? "items-end" : "", vertical: e.stackButtons, align: "right" }, () => k);
  }
  function q() {
    const k = [];
    return e.title && k.push(N("q-dialog__title", e.title)), e.progress !== false && k.push(d(Fl, { class: "q-dialog__progress" }, () => d(c.value.component, c.value.props))), e.message && k.push(N("q-dialog__message", e.message)), e.prompt !== void 0 ? k.push(d(Fl, { class: "scroll q-dialog-plugin__form" }, B)) : e.options !== void 0 && k.push(d(Ql, { dark: r.value }), d(Fl, { class: "scroll q-dialog-plugin__form" }, L), d(Ql, { dark: r.value })), (e.ok || e.cancel) && k.push(z()), k;
  }
  function E() {
    return [d(Nm, { class: [i.value, e.cardClass], style: e.cardStyle, dark: r.value }, q)];
  }
  return Object.assign(n, { show: T, hide: p }), () => d(vi, { ref: a, onHide: C }, E);
} }), Lw = { install({ $q: e, parentApp: t }) {
  e.dialog = this.create = qw(Bw, true, t);
} }, or, ou, cf = 0, Al = null, It = {}, Vl = {}, ug = { group: "__default_quasar_group__", delay: 0, message: false, html: false, spinnerSize: 80, spinnerColor: "", messageColor: "", backgroundColor: "", boxClass: "", spinner: _n, customClass: "" }, sg = { ...ug };
function Fw(e) {
  if ((e == null ? void 0 : e.group) !== void 0 && Vl[e.group] !== void 0) return Object.assign(Vl[e.group], e);
  const t = $t(e) === true && e.ignoreDefaults === true ? { ...ug, ...e } : { ...sg, ...e };
  return Vl[t.group] = t, t;
}
var xn = Sl({ isActive: false }, { show(e) {
  It = Fw(e);
  const { group: t } = It;
  return xn.isActive = true, or !== void 0 ? (It.uid = cf, ou.$forceUpdate()) : (It.uid = ++cf, Al !== null && clearTimeout(Al), Al = setTimeout(() => {
    Al = null;
    const n = $a("q-loading");
    or = oi({ name: "QLoading", setup() {
      ft(() => {
        ju(true);
      });
      function l() {
        xn.isActive !== true && or !== void 0 && (ju(false), or.unmount(n), Es(n), or = void 0, ou = void 0);
      }
      function r() {
        if (xn.isActive !== true) return null;
        const a = [d(It.spinner, { class: "q-loading__spinner", color: It.spinnerColor, size: It.spinnerSize })];
        return It.message && a.push(d("div", { class: "q-loading__message" + (It.messageColor ? ` text-${It.messageColor}` : ""), [It.html === true ? "innerHTML" : "textContent"]: It.message })), d("div", { class: "q-loading fullscreen flex flex-center z-max " + It.customClass.trim(), key: It.uid }, [d("div", { class: "q-loading__backdrop" + (It.backgroundColor ? ` bg-${It.backgroundColor}` : "") }), d("div", { class: "q-loading__box column items-center " + It.boxClass }, a)]);
      }
      return () => d(Ft, { name: "q-transition--fade", appear: true, onAfterLeave: l }, r);
    } }, xn.__parentApp), ou = or.mount(n);
  }, It.delay)), (n) => {
    if (n === void 0 || Object(n) !== n) {
      xn.hide(t);
      return;
    }
    xn.show({ ...n, group: t });
  };
}, hide(e) {
  if (xn.isActive === true) {
    if (e === void 0) Vl = {};
    else {
      if (Vl[e] === void 0) return;
      {
        delete Vl[e];
        const t = Object.keys(Vl);
        if (t.length !== 0) {
          const n = t[t.length - 1];
          xn.show({ group: n });
          return;
        }
      }
    }
    Al !== null && (clearTimeout(Al), Al = null), xn.isActive = false;
  }
}, setDefaults(e) {
  $t(e) === true && Object.assign(sg, e);
}, install({ $q: e, parentApp: t }) {
  e.loading = this, xn.__parentApp = t, e.config.loading !== void 0 && this.setDefaults(e.config.loading);
} }), Ow = xn, no = K(null), df = Sl({ isActive: false }, { start: xt, stop: xt, increment: xt, setDefaults: xt, install({ $q: e, parentApp: t }) {
  if (e.loadingBar = this, this.__installed === true) {
    e.config.loadingBar !== void 0 && this.setDefaults(e.config.loadingBar);
    return;
  }
  const n = K(e.config.loadingBar !== void 0 ? { ...e.config.loadingBar } : {});
  function l() {
    df.isActive = true;
  }
  function r() {
    df.isActive = false;
  }
  const a = $a("q-loading-bar");
  oi({ name: "LoadingBar", devtools: { hide: true }, setup: () => () => d(Py, { ...n.value, onStart: l, onStop: r, ref: no }) }, t).mount(a), Object.assign(this, { start(o) {
    no.value.start(o);
  }, stop() {
    no.value.stop();
  }, increment() {
    no.value.increment.apply(null, arguments);
  }, setDefaults(o) {
    $t(o) === true && Object.assign(n.value, o);
  } });
} }), Vw = 0, fo = {}, vo = {}, Sn = {}, cg = {}, Dw = /^\s*$/, dg = [], Iw = [void 0, null, true, false, ""], Ys = ["top-left", "top-right", "bottom-left", "bottom-right", "top", "bottom", "left", "right", "center"], zw = ["top-left", "top-right", "bottom-left", "bottom-right"], Xr = { positive: { icon: (e) => e.iconSet.type.positive, color: "positive" }, negative: { icon: (e) => e.iconSet.type.negative, color: "negative" }, warning: { icon: (e) => e.iconSet.type.warning, color: "warning", textColor: "dark" }, info: { icon: (e) => e.iconSet.type.info, color: "info" }, ongoing: { group: false, timeout: 0, spinner: true, color: "grey-8" } };
function fg(e, t, n) {
  var _a3;
  if (!e) return jr("parameter required");
  let l;
  const r = { textColor: "white" };
  if (e.ignoreDefaults !== true && Object.assign(r, fo), $t(e) === false && (r.type && Object.assign(r, Xr[r.type]), e = { message: e }), Object.assign(r, Xr[e.type || r.type], e), typeof r.icon == "function" && (r.icon = r.icon(t)), r.spinner ? (r.spinner === true && (r.spinner = _n), r.spinner = Wo(r.spinner)) : r.spinner = false, r.meta = { hasMedia: !!(r.spinner !== false || r.icon || r.avatar), hasText: ff(r.message) || ff(r.caption) }, r.position) {
    if (Ys.includes(r.position) === false) return jr("wrong position", e);
  } else r.position = "bottom";
  if (Iw.includes(r.timeout) === true) r.timeout = 5e3;
  else {
    const u = Number(r.timeout);
    if (isNaN(u) || u < 0) return jr("wrong timeout", e);
    r.timeout = Number.isFinite(u) ? u : 0;
  }
  r.timeout === 0 ? r.progress = false : r.progress === true && (r.meta.progressClass = "q-notification__progress" + (r.progressClass ? ` ${r.progressClass}` : ""), r.meta.progressStyle = { animationDuration: `${r.timeout + 1e3}ms` });
  const a = (Array.isArray(e.actions) === true ? e.actions : []).concat(e.ignoreDefaults !== true && Array.isArray(fo.actions) === true ? fo.actions : []).concat(Array.isArray((_a3 = Xr[e.type]) == null ? void 0 : _a3.actions) === true ? Xr[e.type].actions : []), { closeBtn: o } = r;
  if (o && a.push({ label: typeof o == "string" ? o : t.lang.label.close }), r.actions = a.map(({ handler: u, noDismiss: c, ...s }) => ({ flat: true, ...s, onClick: typeof u == "function" ? () => {
    u(), c !== true && i();
  } : () => {
    i();
  } })), r.multiLine === void 0 && (r.multiLine = r.actions.length > 1), Object.assign(r.meta, { class: `q-notification row items-stretch q-notification--${r.multiLine === true ? "multi-line" : "standard"}` + (r.color !== void 0 ? ` bg-${r.color}` : "") + (r.textColor !== void 0 ? ` text-${r.textColor}` : "") + (r.classes !== void 0 ? ` ${r.classes}` : ""), wrapperClass: "q-notification__wrapper col relative-position border-radius-inherit " + (r.multiLine === true ? "column no-wrap justify-center" : "row items-center"), contentClass: "q-notification__content row items-center" + (r.multiLine === true ? "" : " col"), leftClass: r.meta.hasText === true ? "additional" : "single", attrs: { role: "alert", ...r.attrs } }), r.group === false ? (r.group = void 0, r.meta.group = void 0) : ((r.group === void 0 || r.group === true) && (r.group = [r.message, r.caption, r.multiline].concat(r.actions.map((u) => `${u.label}*${u.icon}`)).join("|")), r.meta.group = r.group + "|" + r.position), r.actions.length === 0 ? r.actions = void 0 : r.meta.actionsClass = "q-notification__actions row items-center " + (r.multiLine === true ? "justify-end" : "col-auto") + (r.meta.hasMedia === true ? " q-notification__actions--with-media" : ""), n !== void 0) {
    n.notif.meta.timer && (clearTimeout(n.notif.meta.timer), n.notif.meta.timer = void 0), r.meta.uid = n.notif.meta.uid;
    const u = Sn[r.position].value.indexOf(n.notif);
    Sn[r.position].value[u] = r;
  } else {
    const u = vo[r.meta.group];
    if (u === void 0) {
      if (r.meta.uid = Vw++, r.meta.badge = 1, ["left", "right", "center"].indexOf(r.position) !== -1) Sn[r.position].value.splice(Math.floor(Sn[r.position].value.length / 2), 0, r);
      else {
        const c = r.position.indexOf("top") !== -1 ? "unshift" : "push";
        Sn[r.position].value[c](r);
      }
      r.group !== void 0 && (vo[r.meta.group] = r);
    } else {
      if (u.meta.timer && (clearTimeout(u.meta.timer), u.meta.timer = void 0), r.badgePosition !== void 0) {
        if (zw.includes(r.badgePosition) === false) return jr("wrong badgePosition", e);
      } else r.badgePosition = `top-${r.position.indexOf("left") !== -1 ? "right" : "left"}`;
      r.meta.uid = u.meta.uid, r.meta.badge = u.meta.badge + 1, r.meta.badgeClass = `q-notification__badge q-notification__badge--${r.badgePosition}` + (r.badgeColor !== void 0 ? ` bg-${r.badgeColor}` : "") + (r.badgeTextColor !== void 0 ? ` text-${r.badgeTextColor}` : "") + (r.badgeClass ? ` ${r.badgeClass}` : "");
      const c = Sn[r.position].value.indexOf(u);
      Sn[r.position].value[c] = vo[r.meta.group] = r;
    }
  }
  const i = () => {
    Nw(r), l = void 0;
  };
  if (r.timeout > 0 && (r.meta.timer = setTimeout(() => {
    r.meta.timer = void 0, i();
  }, r.timeout + 1e3)), r.group !== void 0) return (u) => {
    u !== void 0 ? jr("trying to update a grouped one which is forbidden", e) : i();
  };
  if (l = { dismiss: i, config: e, notif: r }, n !== void 0) {
    Object.assign(n, l);
    return;
  }
  return (u) => {
    if (l !== void 0) if (u === void 0) l.dismiss();
    else {
      const c = Object.assign({}, l.config, u, { group: false, position: r.position });
      fg(c, t, l);
    }
  };
}
function Nw(e) {
  e.meta.timer && (clearTimeout(e.meta.timer), e.meta.timer = void 0);
  const t = Sn[e.position].value.indexOf(e);
  if (t !== -1) {
    e.group !== void 0 && delete vo[e.meta.group];
    const n = dg["" + e.meta.uid];
    if (n) {
      const { width: l, height: r } = getComputedStyle(n);
      n.style.left = `${n.offsetLeft}px`, n.style.width = l, n.style.height = r;
    }
    Sn[e.position].value.splice(t, 1), typeof e.onDismiss == "function" && e.onDismiss();
  }
}
function ff(e) {
  return e != null && Dw.test(e) !== true;
}
function jr(e, t) {
  return console.error(`Notify: ${e}`, t), false;
}
function Hw() {
  return he({ name: "QNotifications", devtools: { hide: true }, setup() {
    return () => d("div", { class: "q-notifications" }, Ys.map((e) => d(Zb, { key: e, class: cg[e], tag: "div", name: `q-notification--${e}` }, () => Sn[e].value.map((t) => {
      const n = t.meta, l = [];
      if (n.hasMedia === true && (t.spinner !== false ? l.push(d(t.spinner, { class: "q-notification__spinner q-notification__spinner--" + n.leftClass, color: t.spinnerColor, size: t.spinnerSize })) : t.icon ? l.push(d(et, { class: "q-notification__icon q-notification__icon--" + n.leftClass, name: t.icon, color: t.iconColor, size: t.iconSize, role: "img" })) : t.avatar && l.push(d(Fu, { class: "q-notification__avatar q-notification__avatar--" + n.leftClass }, () => d("img", { src: t.avatar, "aria-hidden": "true" })))), n.hasText === true) {
        let a;
        const o = { class: "q-notification__message col" };
        if (t.html === true) o.innerHTML = t.caption ? `<div>${t.message}</div><div class="q-notification__caption">${t.caption}</div>` : t.message;
        else {
          const i = [t.message];
          a = t.caption ? [d("div", i), d("div", { class: "q-notification__caption" }, [t.caption])] : i;
        }
        l.push(d("div", o, a));
      }
      const r = [d("div", { class: n.contentClass }, l)];
      return t.progress === true && r.push(d("div", { key: `${n.uid}|p|${n.badge}`, class: n.progressClass, style: n.progressStyle })), t.actions !== void 0 && r.push(d("div", { class: n.actionsClass }, t.actions.map((a) => d(Ze, a)))), n.badge > 1 && r.push(d("div", { key: `${n.uid}|${n.badge}`, class: t.meta.badgeClass, style: t.badgeStyle }, [n.badge])), d("div", { ref: (a) => {
        dg["" + n.uid] = a;
      }, key: n.uid, class: n.class, ...n.attrs }, [d("div", { class: n.wrapperClass }, r)]);
    }))));
  } });
}
var jw = { setDefaults(e) {
  $t(e) === true && Object.assign(fo, e);
}, registerType(e, t) {
  $t(t) === true && (Xr[e] = t);
}, install({ $q: e, parentApp: t }) {
  if (e.notify = this.create = (n) => fg(n, e), e.notify.setDefaults = this.setDefaults, e.notify.registerType = this.registerType, e.config.notify !== void 0 && this.setDefaults(e.config.notify), this.__installed !== true) {
    Ys.forEach((l) => {
      Sn[l] = K([]);
      const r = ["left", "center", "right"].includes(l) === true ? "center" : l.indexOf("top") !== -1 ? "top" : "bottom", a = l.indexOf("left") !== -1 ? "start" : l.indexOf("right") !== -1 ? "end" : "center", o = ["left", "right"].includes(l) ? `items-${l === "left" ? "start" : "end"} justify-center` : l === "center" ? "flex-center" : `items-${a}`;
      cg[l] = `q-notifications__list q-notifications__list--${r} fixed column no-wrap ${o}`;
    });
    const n = $a("q-notify");
    oi(Hw(), t).mount(n);
  }
} };
function Uw(e) {
  return $u(e) === true ? "__q_date|" + e.getTime() : Cy(e) === true ? "__q_expr|" + e.source : typeof e == "number" ? "__q_numb|" + e : typeof e == "boolean" ? "__q_bool|" + (e ? "1" : "0") : typeof e == "string" ? "__q_strn|" + e : typeof e == "function" ? "__q_strn|" + e.toString() : e === Object(e) ? "__q_objt|" + JSON.stringify(e) : e;
}
function Qw(e) {
  if (e.length < 9) return e;
  const n = e.substring(0, 8), l = e.substring(9);
  switch (n) {
    case "__q_date":
      const r = Number(l);
      return new Date(Number.isNaN(r) === true ? l : r);
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
function vg() {
  const e = () => null;
  return { has: () => false, hasItem: () => false, getLength: () => 0, getItem: e, getIndex: e, getKey: e, getAll: () => {
  }, getAllKeys: () => [], set: xt, setItem: xt, remove: xt, removeItem: xt, clear: xt, isEmpty: () => true };
}
function mg(e) {
  const t = window[e + "Storage"], n = (o) => {
    const i = t.getItem(o);
    return i ? Qw(i) : null;
  }, l = (o) => t.getItem(o) !== null, r = (o, i) => {
    t.setItem(o, Uw(i));
  }, a = (o) => {
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
  }, set: r, setItem: r, remove: a, removeItem: a, clear: () => {
    t.clear();
  }, isEmpty: () => t.length === 0 };
}
var hg = De.has.webStorage === false ? vg() : mg("local"), Kw = { install({ $q: e }) {
  e.localStorage = hg;
} };
Object.assign(Kw, hg);
var gg = De.has.webStorage === false ? vg() : mg("session"), Ww = { install({ $q: e }) {
  e.sessionStorage = gg;
} };
Object.assign(Ww, gg);
var Yw = ["ok", "hide"];
Yh(Yw);
function bg() {
  return qt(um);
}
var Xw = { version: "2.18.1", install: Ty, lang: ai, iconSet: im };
function Gw(e, t) {
  const n = hs("router-view");
  return Xn(), Bl(n, { class: "view" });
}
const yg = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, r] of t) n[l] = r;
  return n;
}, Zw = {}, Jw = yg(Zw, [["render", Gw]]), ex = "M10,2C8.18,2 6.47,2.5 5,3.35C8,5.08 10,8.3 10,12C10,15.7 8,18.92 5,20.65C6.47,21.5 8.18,22 10,22A10,10 0 0,0 20,12A10,10 0 0,0 10,2Z", tx = "M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z", nx = /* @__PURE__ */ Mr({ __name: "Quasar", setup(e) {
  const t = bg();
  let n = K(false), l = K(false), r = K(true);
  const a = "production";
  return (o, i) => {
    const u = hs("router-view"), c = D0("ripple");
    return Xn(), Bl(Ie(L1), { view: "hHh LpR fFf" }, { default: Rt(() => [Je(Ie(x1), { class: "bg-primary text-white", elevated: "", id: "header" }, { default: Rt(() => [Je(Ie(Kd), null, { default: Rt(() => [Je(Ie(Ze), { dense: "", flat: "", round: "", icon: "menu", onClick: i[0] || (i[0] = (s) => pt(n) ? n.value = !Ie(n) : n = !Ie(n)) }), Je(Ie(Wd), null, { default: Rt(() => [Je(Ie(Fu), null, { default: Rt(() => i[10] || (i[10] = [Bn("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" }, null, -1)])), _: 1 }), i[11] || (i[11] = Ll("\xA0WebGL mtg"))]), _: 1 }), Ie(t).dark.isActive ? (Xn(), Bl(Ie(Ze), { key: 0, dense: "", flat: "", round: "", icon: Ie(tx), onClick: i[1] || (i[1] = (s) => Ie(t).dark.set(false)) }, null, 8, ["icon"])) : _c("", true), Ie(t).dark.isActive ? _c("", true) : (Xn(), Bl(Ie(Ze), { key: 1, dense: "", flat: "", round: "", icon: Ie(ex), onClick: i[2] || (i[2] = (s) => Ie(t).dark.set(true)) }, null, 8, ["icon"])), Je(Ie(Ze), { dense: "", flat: "", round: "", icon: "menu", onClick: i[3] || (i[3] = (s) => pt(l) ? l.value = !Ie(l) : l = !Ie(l)) })]), _: 1 })]), _: 1 }), Je(Ie(qd), { modelValue: Ie(n), "onUpdate:modelValue": i[8] || (i[8] = (s) => pt(n) ? n.value = s : n = s), side: "left", bordered: "", mini: Ie(r), overlay: "" }, { default: Rt(() => [Je(Ie(K1), { class: "fit" }, { default: Rt(() => [Je(Ie(Fh), { class: "menu-list padding" }, { default: Rt(() => [sn((Xn(), Bl(Ie(kr), { clickable: "", onMouseover: i[4] || (i[4] = (s) => pt(r) ? r.value = false : r = false), onMouseout: i[5] || (i[5] = (s) => pt(r) ? r.value = true : r = true) }, { default: Rt(() => [Je(Ie(mn), { avatar: "" }, { default: Rt(() => [Je(Ie(et), { name: "inbox" })]), _: 1 }), Je(Ie(mn), null, { default: Rt(() => i[12] || (i[12] = [Ll("inbox")])), _: 1 })]), _: 1 })), [[c]]), sn((Xn(), Bl(Ie(kr), { clickable: "", onMouseover: i[6] || (i[6] = (s) => pt(r) ? r.value = false : r = false), onMouseout: i[7] || (i[7] = (s) => pt(r) ? r.value = true : r = true) }, { default: Rt(() => [Je(Ie(mn), { avatar: "" }, { default: Rt(() => [Je(Ie(et), { name: "login" })]), _: 1 }), Je(Ie(mn), null, { default: Rt(() => i[13] || (i[13] = [Ll("login")])), _: 1 })]), _: 1 })), [[c]])]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["modelValue", "mini"]), Je(Ie(qd), { modelValue: Ie(l), "onUpdate:modelValue": i[9] || (i[9] = (s) => pt(l) ? l.value = s : l = s), side: "right", bordered: "", overlay: "" }, { default: Rt(() => i[14] || (i[14] = [Ll("right")])), _: 1 }, 8, ["modelValue"]), Je(Ie(H1), null, { default: Rt(() => [Je(u)]), _: 1 }), Je(Ie(w1), { class: "bg-grey-8 text-orange", elevated: "", id: "footer" }, { default: Rt(() => [Je(Ie(Kd), null, { default: Rt(() => [Je(Ie(Wd), { style: { "font-size": "1.0em" } }, { default: Rt(() => [Je(Ie(Fu), { class: "q-mr-sm", size: "sm" }, { default: Rt(() => i[15] || (i[15] = [Bn("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" }, null, -1)])), _: 1 }), Ll("\xA0vite / vue / quasar / wasm / webgl mtg \xA0mode: " + Df(Ie(a)), 1)]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 });
  };
} });
/*!
* vue-router v4.5.0
* (c) 2024 Eduardo San Martin Morote
* @license MIT
*/
const ur = typeof document < "u";
function pg(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function lx(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && pg(e.default);
}
const ut = Object.assign;
function iu(e, t) {
  const n = {};
  for (const l in t) {
    const r = t[l];
    n[l] = Rn(r) ? r.map(e) : e(r);
  }
  return n;
}
const ca = () => {
}, Rn = Array.isArray, _g = /#/g, rx = /&/g, ax = /\//g, ox = /=/g, ix = /\?/g, wg = /\+/g, ux = /%5B/g, sx = /%5D/g, xg = /%5E/g, cx = /%60/g, Sg = /%7B/g, dx = /%7C/g, Cg = /%7D/g, fx = /%20/g;
function Xs(e) {
  return encodeURI("" + e).replace(dx, "|").replace(ux, "[").replace(sx, "]");
}
function vx(e) {
  return Xs(e).replace(Sg, "{").replace(Cg, "}").replace(xg, "^");
}
function Yu(e) {
  return Xs(e).replace(wg, "%2B").replace(fx, "+").replace(_g, "%23").replace(rx, "%26").replace(cx, "`").replace(Sg, "{").replace(Cg, "}").replace(xg, "^");
}
function mx(e) {
  return Yu(e).replace(ox, "%3D");
}
function hx(e) {
  return Xs(e).replace(_g, "%23").replace(ix, "%3F");
}
function gx(e) {
  return e == null ? "" : hx(e).replace(ax, "%2F");
}
function ka(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const bx = /\/$/, yx = (e) => e.replace(bx, "");
function uu(e, t, n = "/") {
  let l, r = {}, a = "", o = "";
  const i = t.indexOf("#");
  let u = t.indexOf("?");
  return i < u && i >= 0 && (u = -1), u > -1 && (l = t.slice(0, u), a = t.slice(u + 1, i > -1 ? i : t.length), r = e(a)), i > -1 && (l = l || t.slice(0, i), o = t.slice(i, t.length)), l = xx(l ?? t, n), { fullPath: l + (a && "?") + a + o, path: l, query: r, hash: ka(o) };
}
function px(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function vf(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function _x(e, t, n) {
  const l = t.matched.length - 1, r = n.matched.length - 1;
  return l > -1 && l === r && Tr(t.matched[l], n.matched[r]) && kg(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Tr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function kg(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (const n in e) if (!wx(e[n], t[n])) return false;
  return true;
}
function wx(e, t) {
  return Rn(e) ? mf(e, t) : Rn(t) ? mf(t, e) : e === t;
}
function mf(e, t) {
  return Rn(t) ? e.length === t.length && e.every((n, l) => n === t[l]) : e.length === 1 && e[0] === t;
}
function xx(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"), l = e.split("/"), r = l[l.length - 1];
  (r === ".." || r === ".") && l.push("");
  let a = n.length - 1, o, i;
  for (o = 0; o < l.length; o++) if (i = l[o], i !== ".") if (i === "..") a > 1 && a--;
  else break;
  return n.slice(0, a).join("/") + "/" + l.slice(o).join("/");
}
const ol = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
var Ta;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Ta || (Ta = {}));
var da;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(da || (da = {}));
function Sx(e) {
  if (!e) if (ur) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), yx(e);
}
const Cx = /^[^#]+#/;
function kx(e, t) {
  return e.replace(Cx, "#") + t;
}
function Tx(e, t) {
  const n = document.documentElement.getBoundingClientRect(), l = e.getBoundingClientRect();
  return { behavior: t.behavior, left: l.left - n.left - (t.left || 0), top: l.top - n.top - (t.top || 0) };
}
const yi = () => ({ left: window.scrollX, top: window.scrollY });
function qx(e) {
  let t;
  if ("el" in e) {
    const n = e.el, l = typeof n == "string" && n.startsWith("#"), r = typeof n == "string" ? l ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!r) return;
    t = Tx(r, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function hf(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Xu = /* @__PURE__ */ new Map();
function Mx(e, t) {
  Xu.set(e, t);
}
function Ex(e) {
  const t = Xu.get(e);
  return Xu.delete(e), t;
}
let Rx = () => location.protocol + "//" + location.host;
function Tg(e, t) {
  const { pathname: n, search: l, hash: r } = t, a = e.indexOf("#");
  if (a > -1) {
    let i = r.includes(e.slice(a)) ? e.slice(a).length : 1, u = r.slice(i);
    return u[0] !== "/" && (u = "/" + u), vf(u, "");
  }
  return vf(n, e) + l + r;
}
function Ax(e, t, n, l) {
  let r = [], a = [], o = null;
  const i = ({ state: h }) => {
    const m = Tg(e, location), g = n.value, w = t.value;
    let x = 0;
    if (h) {
      if (n.value = m, t.value = h, o && o === g) {
        o = null;
        return;
      }
      x = w ? h.position - w.position : 0;
    } else l(m);
    r.forEach((T) => {
      T(n.value, g, { delta: x, type: Ta.pop, direction: x ? x > 0 ? da.forward : da.back : da.unknown });
    });
  };
  function u() {
    o = n.value;
  }
  function c(h) {
    r.push(h);
    const m = () => {
      const g = r.indexOf(h);
      g > -1 && r.splice(g, 1);
    };
    return a.push(m), m;
  }
  function s() {
    const { history: h } = window;
    h.state && h.replaceState(ut({}, h.state, { scroll: yi() }), "");
  }
  function f() {
    for (const h of a) h();
    a = [], window.removeEventListener("popstate", i), window.removeEventListener("beforeunload", s);
  }
  return window.addEventListener("popstate", i), window.addEventListener("beforeunload", s, { passive: true }), { pauseListeners: u, listen: c, destroy: f };
}
function gf(e, t, n, l = false, r = false) {
  return { back: e, current: t, forward: n, replaced: l, position: window.history.length, scroll: r ? yi() : null };
}
function Px(e) {
  const { history: t, location: n } = window, l = { value: Tg(e, n) }, r = { value: t.state };
  r.value || a(l.value, { back: null, current: l.value, forward: null, position: t.length - 1, replaced: true, scroll: null }, true);
  function a(u, c, s) {
    const f = e.indexOf("#"), h = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + u : Rx() + e + u;
    try {
      t[s ? "replaceState" : "pushState"](c, "", h), r.value = c;
    } catch (m) {
      console.error(m), n[s ? "replace" : "assign"](h);
    }
  }
  function o(u, c) {
    const s = ut({}, t.state, gf(r.value.back, u, r.value.forward, true), c, { position: r.value.position });
    a(u, s, true), l.value = u;
  }
  function i(u, c) {
    const s = ut({}, r.value, t.state, { forward: u, scroll: yi() });
    a(s.current, s, true);
    const f = ut({}, gf(l.value, u, null), { position: s.position + 1 }, c);
    a(u, f, false), l.value = u;
  }
  return { location: l, state: r, push: i, replace: o };
}
function $x(e) {
  e = Sx(e);
  const t = Px(e), n = Ax(e, t.state, t.location, t.replace);
  function l(a, o = true) {
    o || n.pauseListeners(), history.go(a);
  }
  const r = ut({ location: "", base: e, go: l, createHref: kx.bind(null, e) }, t, n);
  return Object.defineProperty(r, "location", { enumerable: true, get: () => t.location.value }), Object.defineProperty(r, "state", { enumerable: true, get: () => t.state.value }), r;
}
function Bx(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), $x(e);
}
function Lx(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function qg(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Mg = Symbol("");
var bf;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(bf || (bf = {}));
function qr(e, t) {
  return ut(new Error(), { type: e, [Mg]: true }, t);
}
function jn(e, t) {
  return e instanceof Error && Mg in e && (t == null || !!(e.type & t));
}
const yf = "[^/]+?", Fx = { sensitive: false, strict: false, start: true, end: true }, Ox = /[.+*?^${}()[\]/\\]/g;
function Vx(e, t) {
  const n = ut({}, Fx, t), l = [];
  let r = n.start ? "^" : "";
  const a = [];
  for (const c of e) {
    const s = c.length ? [] : [90];
    n.strict && !c.length && (r += "/");
    for (let f = 0; f < c.length; f++) {
      const h = c[f];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0) f || (r += "/"), r += h.value.replace(Ox, "\\$&"), m += 40;
      else if (h.type === 1) {
        const { value: g, repeatable: w, optional: x, regexp: T } = h;
        a.push({ name: g, repeatable: w, optional: x });
        const p = T || yf;
        if (p !== yf) {
          m += 10;
          try {
            new RegExp(`(${p})`);
          } catch (b) {
            throw new Error(`Invalid custom RegExp for param "${g}" (${p}): ` + b.message);
          }
        }
        let y = w ? `((?:${p})(?:/(?:${p}))*)` : `(${p})`;
        f || (y = x && c.length < 2 ? `(?:/${y})` : "/" + y), x && (y += "?"), r += y, m += 20, x && (m += -8), w && (m += -20), p === ".*" && (m += -50);
      }
      s.push(m);
    }
    l.push(s);
  }
  if (n.strict && n.end) {
    const c = l.length - 1;
    l[c][l[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (r += "/?"), n.end ? r += "$" : n.strict && !r.endsWith("/") && (r += "(?:/|$)");
  const o = new RegExp(r, n.sensitive ? "" : "i");
  function i(c) {
    const s = c.match(o), f = {};
    if (!s) return null;
    for (let h = 1; h < s.length; h++) {
      const m = s[h] || "", g = a[h - 1];
      f[g.name] = m && g.repeatable ? m.split("/") : m;
    }
    return f;
  }
  function u(c) {
    let s = "", f = false;
    for (const h of e) {
      (!f || !s.endsWith("/")) && (s += "/"), f = false;
      for (const m of h) if (m.type === 0) s += m.value;
      else if (m.type === 1) {
        const { value: g, repeatable: w, optional: x } = m, T = g in c ? c[g] : "";
        if (Rn(T) && !w) throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
        const p = Rn(T) ? T.join("/") : T;
        if (!p) if (x) h.length < 2 && (s.endsWith("/") ? s = s.slice(0, -1) : f = true);
        else throw new Error(`Missing required param "${g}"`);
        s += p;
      }
    }
    return s || "/";
  }
  return { re: o, score: l, keys: a, parse: i, stringify: u };
}
function Dx(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const l = t[n] - e[n];
    if (l) return l;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function Eg(e, t) {
  let n = 0;
  const l = e.score, r = t.score;
  for (; n < l.length && n < r.length; ) {
    const a = Dx(l[n], r[n]);
    if (a) return a;
    n++;
  }
  if (Math.abs(r.length - l.length) === 1) {
    if (pf(l)) return 1;
    if (pf(r)) return -1;
  }
  return r.length - l.length;
}
function pf(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Ix = { type: 0, value: "" }, zx = /[a-zA-Z0-9_]/;
function Nx(e) {
  if (!e) return [[]];
  if (e === "/") return [[Ix]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${c}": ${m}`);
  }
  let n = 0, l = n;
  const r = [];
  let a;
  function o() {
    a && r.push(a), a = [];
  }
  let i = 0, u, c = "", s = "";
  function f() {
    c && (n === 0 ? a.push({ type: 0, value: c }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (u === "*" || u === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), a.push({ type: 1, value: c, regexp: s, repeatable: u === "*" || u === "+", optional: u === "*" || u === "?" })) : t("Invalid state to consume buffer"), c = "");
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
        u === "/" ? (c && f(), o()) : u === ":" ? (f(), n = 1) : h();
        break;
      case 4:
        h(), n = l;
        break;
      case 1:
        u === "(" ? n = 2 : zx.test(u) ? h() : (f(), n = 0, u !== "*" && u !== "?" && u !== "+" && i--);
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
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), f(), o(), r;
}
function Hx(e, t, n) {
  const l = Vx(Nx(e.path), n), r = ut(l, { record: e, parent: t, children: [], alias: [] });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function jx(e, t) {
  const n = [], l = /* @__PURE__ */ new Map();
  t = Sf({ strict: false, end: true, sensitive: false }, t);
  function r(f) {
    return l.get(f);
  }
  function a(f, h, m) {
    const g = !m, w = wf(f);
    w.aliasOf = m && m.record;
    const x = Sf(t, f), T = [w];
    if ("alias" in f) {
      const b = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const C of b) T.push(wf(ut({}, w, { components: m ? m.record.components : w.components, path: C, aliasOf: m ? m.record : w })));
    }
    let p, y;
    for (const b of T) {
      const { path: C } = b;
      if (h && C[0] !== "/") {
        const $ = h.record.path, F = $[$.length - 1] === "/" ? "" : "/";
        b.path = h.record.path + (C && F + C);
      }
      if (p = Hx(b, h, x), m ? m.alias.push(p) : (y = y || p, y !== p && y.alias.push(p), g && f.name && !xf(p) && o(f.name)), Rg(p) && u(p), w.children) {
        const $ = w.children;
        for (let F = 0; F < $.length; F++) a($[F], p, m && m.children[F]);
      }
      m = m || p;
    }
    return y ? () => {
      o(y);
    } : ca;
  }
  function o(f) {
    if (qg(f)) {
      const h = l.get(f);
      h && (l.delete(f), n.splice(n.indexOf(h), 1), h.children.forEach(o), h.alias.forEach(o));
    } else {
      const h = n.indexOf(f);
      h > -1 && (n.splice(h, 1), f.record.name && l.delete(f.record.name), f.children.forEach(o), f.alias.forEach(o));
    }
  }
  function i() {
    return n;
  }
  function u(f) {
    const h = Kx(f, n);
    n.splice(h, 0, f), f.record.name && !xf(f) && l.set(f.record.name, f);
  }
  function c(f, h) {
    let m, g = {}, w, x;
    if ("name" in f && f.name) {
      if (m = l.get(f.name), !m) throw qr(1, { location: f });
      x = m.record.name, g = ut(_f(h.params, m.keys.filter((y) => !y.optional).concat(m.parent ? m.parent.keys.filter((y) => y.optional) : []).map((y) => y.name)), f.params && _f(f.params, m.keys.map((y) => y.name))), w = m.stringify(g);
    } else if (f.path != null) w = f.path, m = n.find((y) => y.re.test(w)), m && (g = m.parse(w), x = m.record.name);
    else {
      if (m = h.name ? l.get(h.name) : n.find((y) => y.re.test(h.path)), !m) throw qr(1, { location: f, currentLocation: h });
      x = m.record.name, g = ut({}, h.params, f.params), w = m.stringify(g);
    }
    const T = [];
    let p = m;
    for (; p; ) T.unshift(p.record), p = p.parent;
    return { name: x, path: w, params: g, matched: T, meta: Qx(T) };
  }
  e.forEach((f) => a(f));
  function s() {
    n.length = 0, l.clear();
  }
  return { addRoute: a, resolve: c, removeRoute: o, clearRoutes: s, getRoutes: i, getRecordMatcher: r };
}
function _f(e, t) {
  const n = {};
  for (const l of t) l in e && (n[l] = e[l]);
  return n;
}
function wf(e) {
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: Ux(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Ux(e) {
  const t = {}, n = e.props || false;
  if ("component" in e) t.default = n;
  else for (const l in e.components) t[l] = typeof n == "object" ? n[l] : n;
  return t;
}
function xf(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function Qx(e) {
  return e.reduce((t, n) => ut(t, n.meta), {});
}
function Sf(e, t) {
  const n = {};
  for (const l in e) n[l] = l in t ? t[l] : e[l];
  return n;
}
function Kx(e, t) {
  let n = 0, l = t.length;
  for (; n !== l; ) {
    const a = n + l >> 1;
    Eg(e, t[a]) < 0 ? l = a : n = a + 1;
  }
  const r = Wx(e);
  return r && (l = t.lastIndexOf(r, l - 1)), l;
}
function Wx(e) {
  let t = e;
  for (; t = t.parent; ) if (Rg(t) && Eg(e, t) === 0) return t;
}
function Rg({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Yx(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const l = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < l.length; ++r) {
    const a = l[r].replace(wg, " "), o = a.indexOf("="), i = ka(o < 0 ? a : a.slice(0, o)), u = o < 0 ? null : ka(a.slice(o + 1));
    if (i in t) {
      let c = t[i];
      Rn(c) || (c = t[i] = [c]), c.push(u);
    } else t[i] = u;
  }
  return t;
}
function Cf(e) {
  let t = "";
  for (let n in e) {
    const l = e[n];
    if (n = mx(n), l == null) {
      l !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Rn(l) ? l.map((a) => a && Yu(a)) : [l && Yu(l)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function Xx(e) {
  const t = {};
  for (const n in e) {
    const l = e[n];
    l !== void 0 && (t[n] = Rn(l) ? l.map((r) => r == null ? null : "" + r) : l == null ? l : "" + l);
  }
  return t;
}
const Gx = Symbol(""), kf = Symbol(""), Gs = Symbol(""), Ag = Symbol(""), Gu = Symbol("");
function Ur() {
  let e = [];
  function t(l) {
    return e.push(l), () => {
      const r = e.indexOf(l);
      r > -1 && e.splice(r, 1);
    };
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function fl(e, t, n, l, r, a = (o) => o()) {
  const o = l && (l.enterCallbacks[r] = l.enterCallbacks[r] || []);
  return () => new Promise((i, u) => {
    const c = (h) => {
      h === false ? u(qr(4, { from: n, to: t })) : h instanceof Error ? u(h) : Lx(h) ? u(qr(2, { from: t, to: h })) : (o && l.enterCallbacks[r] === o && typeof h == "function" && o.push(h), i());
    }, s = a(() => e.call(l && l.instances[r], t, n, c));
    let f = Promise.resolve(s);
    e.length < 3 && (f = f.then(c)), f.catch((h) => u(h));
  });
}
function su(e, t, n, l, r = (a) => a()) {
  const a = [];
  for (const o of e) for (const i in o.components) {
    let u = o.components[i];
    if (!(t !== "beforeRouteEnter" && !o.instances[i])) if (pg(u)) {
      const s = (u.__vccOpts || u)[t];
      s && a.push(fl(s, n, l, o, i, r));
    } else {
      let c = u();
      a.push(() => c.then((s) => {
        if (!s) throw new Error(`Couldn't resolve component "${i}" at "${o.path}"`);
        const f = lx(s) ? s.default : s;
        o.mods[i] = s, o.components[i] = f;
        const m = (f.__vccOpts || f)[t];
        return m && fl(m, n, l, o, i, r)();
      }));
    }
  }
  return a;
}
function Tf(e) {
  const t = qt(Gs), n = qt(Ag), l = v(() => {
    const u = Ie(e.to);
    return t.resolve(u);
  }), r = v(() => {
    const { matched: u } = l.value, { length: c } = u, s = u[c - 1], f = n.matched;
    if (!s || !f.length) return -1;
    const h = f.findIndex(Tr.bind(null, s));
    if (h > -1) return h;
    const m = qf(u[c - 2]);
    return c > 1 && qf(s) === m && f[f.length - 1].path !== m ? f.findIndex(Tr.bind(null, u[c - 2])) : h;
  }), a = v(() => r.value > -1 && nS(n.params, l.value.params)), o = v(() => r.value > -1 && r.value === n.matched.length - 1 && kg(n.params, l.value.params));
  function i(u = {}) {
    if (tS(u)) {
      const c = t[Ie(e.replace) ? "replace" : "push"](Ie(e.to)).catch(ca);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c;
    }
    return Promise.resolve();
  }
  return { route: l, href: v(() => l.value.href), isActive: a, isExactActive: o, navigate: i };
}
function Zx(e) {
  return e.length === 1 ? e[0] : e;
}
const Jx = /* @__PURE__ */ Mr({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" } }, useLink: Tf, setup(e, { slots: t }) {
  const n = Fn(Tf(e)), { options: l } = qt(Gs), r = v(() => ({ [Mf(e.activeClass, l.linkActiveClass, "router-link-active")]: n.isActive, [Mf(e.exactActiveClass, l.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive }));
  return () => {
    const a = t.default && Zx(t.default(n));
    return e.custom ? a : d("a", { "aria-current": n.isExactActive ? e.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: r.value }, a);
  };
} }), eS = Jx;
function tS(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), true;
  }
}
function nS(e, t) {
  for (const n in t) {
    const l = t[n], r = e[n];
    if (typeof l == "string") {
      if (l !== r) return false;
    } else if (!Rn(r) || r.length !== l.length || l.some((a, o) => a !== r[o])) return false;
  }
  return true;
}
function qf(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Mf = (e, t, n) => e ?? t ?? n, lS = /* @__PURE__ */ Mr({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: n }) {
  const l = qt(Gu), r = v(() => e.route || l.value), a = qt(kf, 0), o = v(() => {
    let c = Ie(a);
    const { matched: s } = r.value;
    let f;
    for (; (f = s[c]) && !f.components; ) c++;
    return c;
  }), i = v(() => r.value.matched[o.value]);
  hn(kf, v(() => o.value + 1)), hn(Gx, i), hn(Gu, r);
  const u = K();
  return ge(() => [u.value, i.value, e.name], ([c, s, f], [h, m, g]) => {
    s && (s.instances[f] = c, m && m !== s && c && c === h && (s.leaveGuards.size || (s.leaveGuards = m.leaveGuards), s.updateGuards.size || (s.updateGuards = m.updateGuards))), c && s && (!m || !Tr(s, m) || !h) && (s.enterCallbacks[f] || []).forEach((w) => w(c));
  }, { flush: "post" }), () => {
    const c = r.value, s = e.name, f = i.value, h = f && f.components[s];
    if (!h) return Ef(n.default, { Component: h, route: c });
    const m = f.props[s], g = m ? m === true ? c.params : typeof m == "function" ? m(c) : m : null, x = d(h, ut({}, g, t, { onVnodeUnmounted: (T) => {
      T.component.isUnmounted && (f.instances[s] = null);
    }, ref: u }));
    return Ef(n.default, { Component: x, route: c }) || x;
  };
} });
function Ef(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const rS = lS;
function aS(e) {
  const t = jx(e.routes, e), n = e.parseQuery || Yx, l = e.stringifyQuery || Cf, r = e.history, a = Ur(), o = Ur(), i = Ur(), u = b0(ol);
  let c = ol;
  ur && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const s = iu.bind(null, (R) => "" + R), f = iu.bind(null, gx), h = iu.bind(null, ka);
  function m(R, G) {
    let O, ne;
    return qg(R) ? (O = t.getRecordMatcher(R), ne = G) : ne = R, t.addRoute(ne, O);
  }
  function g(R) {
    const G = t.getRecordMatcher(R);
    G && t.removeRoute(G);
  }
  function w() {
    return t.getRoutes().map((R) => R.record);
  }
  function x(R) {
    return !!t.getRecordMatcher(R);
  }
  function T(R, G) {
    if (G = ut({}, G || u.value), typeof R == "string") {
      const D = uu(n, R, G.path), ee = t.resolve({ path: D.path }, G), le = r.createHref(D.fullPath);
      return ut(D, ee, { params: h(ee.params), hash: ka(D.hash), redirectedFrom: void 0, href: le });
    }
    let O;
    if (R.path != null) O = ut({}, R, { path: uu(n, R.path, G.path).path });
    else {
      const D = ut({}, R.params);
      for (const ee in D) D[ee] == null && delete D[ee];
      O = ut({}, R, { params: f(D) }), G.params = f(G.params);
    }
    const ne = t.resolve(O, G), be = R.hash || "";
    ne.params = s(h(ne.params));
    const S = px(l, ut({}, R, { hash: vx(be), path: ne.path })), M = r.createHref(S);
    return ut({ fullPath: S, hash: be, query: l === Cf ? Xx(R.query) : R.query || {} }, ne, { redirectedFrom: void 0, href: M });
  }
  function p(R) {
    return typeof R == "string" ? uu(n, R, u.value.path) : ut({}, R);
  }
  function y(R, G) {
    if (c !== R) return qr(8, { from: G, to: R });
  }
  function b(R) {
    return F(R);
  }
  function C(R) {
    return b(ut(p(R), { replace: true }));
  }
  function $(R) {
    const G = R.matched[R.matched.length - 1];
    if (G && G.redirect) {
      const { redirect: O } = G;
      let ne = typeof O == "function" ? O(R) : O;
      return typeof ne == "string" && (ne = ne.includes("?") || ne.includes("#") ? ne = p(ne) : { path: ne }, ne.params = {}), ut({ query: R.query, hash: R.hash, params: ne.path != null ? {} : R.params }, ne);
    }
  }
  function F(R, G) {
    const O = c = T(R), ne = u.value, be = R.state, S = R.force, M = R.replace === true, D = $(O);
    if (D) return F(ut(p(D), { state: typeof D == "object" ? ut({}, be, D.state) : be, force: S, replace: M }), G || O);
    const ee = O;
    ee.redirectedFrom = G;
    let le;
    return !S && _x(l, ne, O) && (le = qr(16, { to: ee, from: ne }), Y(ne, ne, true, false)), (le ? Promise.resolve(le) : L(ee, ne)).catch((P) => jn(P) ? jn(P, 2) ? P : pe(P) : X(P, ee, ne)).then((P) => {
      if (P) {
        if (jn(P, 2)) return F(ut({ replace: M }, p(P.to), { state: typeof P.to == "object" ? ut({}, be, P.to.state) : be, force: S }), G || ee);
      } else P = q(ee, ne, true, M, be);
      return z(ee, ne, P), P;
    });
  }
  function N(R, G) {
    const O = y(R, G);
    return O ? Promise.reject(O) : Promise.resolve();
  }
  function B(R) {
    const G = V.values().next().value;
    return G && typeof G.runWithContext == "function" ? G.runWithContext(R) : R();
  }
  function L(R, G) {
    let O;
    const [ne, be, S] = oS(R, G);
    O = su(ne.reverse(), "beforeRouteLeave", R, G);
    for (const D of ne) D.leaveGuards.forEach((ee) => {
      O.push(fl(ee, R, G));
    });
    const M = N.bind(null, R, G);
    return O.push(M), A(O).then(() => {
      O = [];
      for (const D of a.list()) O.push(fl(D, R, G));
      return O.push(M), A(O);
    }).then(() => {
      O = su(be, "beforeRouteUpdate", R, G);
      for (const D of be) D.updateGuards.forEach((ee) => {
        O.push(fl(ee, R, G));
      });
      return O.push(M), A(O);
    }).then(() => {
      O = [];
      for (const D of S) if (D.beforeEnter) if (Rn(D.beforeEnter)) for (const ee of D.beforeEnter) O.push(fl(ee, R, G));
      else O.push(fl(D.beforeEnter, R, G));
      return O.push(M), A(O);
    }).then(() => (R.matched.forEach((D) => D.enterCallbacks = {}), O = su(S, "beforeRouteEnter", R, G, B), O.push(M), A(O))).then(() => {
      O = [];
      for (const D of o.list()) O.push(fl(D, R, G));
      return O.push(M), A(O);
    }).catch((D) => jn(D, 8) ? D : Promise.reject(D));
  }
  function z(R, G, O) {
    i.list().forEach((ne) => B(() => ne(R, G, O)));
  }
  function q(R, G, O, ne, be) {
    const S = y(R, G);
    if (S) return S;
    const M = G === ol, D = ur ? history.state : {};
    O && (ne || M ? r.replace(R.fullPath, ut({ scroll: M && D && D.scroll }, be)) : r.push(R.fullPath, be)), u.value = R, Y(R, G, O, M), pe();
  }
  let E;
  function k() {
    E || (E = r.listen((R, G, O) => {
      if (!fe.listening) return;
      const ne = T(R), be = $(ne);
      if (be) {
        F(ut(be, { replace: true, force: true }), ne).catch(ca);
        return;
      }
      c = ne;
      const S = u.value;
      ur && Mx(hf(S.fullPath, O.delta), yi()), L(ne, S).catch((M) => jn(M, 12) ? M : jn(M, 2) ? (F(ut(p(M.to), { force: true }), ne).then((D) => {
        jn(D, 20) && !O.delta && O.type === Ta.pop && r.go(-1, false);
      }).catch(ca), Promise.reject()) : (O.delta && r.go(-O.delta, false), X(M, ne, S))).then((M) => {
        M = M || q(ne, S, false), M && (O.delta && !jn(M, 8) ? r.go(-O.delta, false) : O.type === Ta.pop && jn(M, 20) && r.go(-1, false)), z(ne, S, M);
      }).catch(ca);
    }));
  }
  let j = Ur(), Q = Ur(), W;
  function X(R, G, O) {
    pe(R);
    const ne = Q.list();
    return ne.length ? ne.forEach((be) => be(R, G, O)) : console.error(R), Promise.reject(R);
  }
  function re() {
    return W && u.value !== ol ? Promise.resolve() : new Promise((R, G) => {
      j.add([R, G]);
    });
  }
  function pe(R) {
    return W || (W = !R, k(), j.list().forEach(([G, O]) => R ? O(R) : G()), j.reset()), R;
  }
  function Y(R, G, O, ne) {
    const { scrollBehavior: be } = e;
    if (!ur || !be) return Promise.resolve();
    const S = !O && Ex(hf(R.fullPath, 0)) || (ne || !O) && history.state && history.state.scroll || null;
    return We().then(() => be(R, G, S)).then((M) => M && qx(M)).catch((M) => X(M, R, G));
  }
  const _ = (R) => r.go(R);
  let H;
  const V = /* @__PURE__ */ new Set(), fe = { currentRoute: u, listening: true, addRoute: m, removeRoute: g, clearRoutes: t.clearRoutes, hasRoute: x, getRoutes: w, resolve: T, options: e, push: b, replace: C, go: _, back: () => _(-1), forward: () => _(1), beforeEach: a.add, beforeResolve: o.add, afterEach: i.add, onError: Q.add, isReady: re, install(R) {
    const G = this;
    R.component("RouterLink", eS), R.component("RouterView", rS), R.config.globalProperties.$router = G, Object.defineProperty(R.config.globalProperties, "$route", { enumerable: true, get: () => Ie(u) }), ur && !H && u.value === ol && (H = true, b(r.location).catch((be) => {
    }));
    const O = {};
    for (const be in ol) Object.defineProperty(O, be, { get: () => u.value[be], enumerable: true });
    R.provide(Gs, G), R.provide(Ag, cs(O)), R.provide(Gu, u);
    const ne = R.unmount;
    V.add(R), R.unmount = function() {
      V.delete(R), V.size < 1 && (c = ol, E && E(), E = null, u.value = ol, H = false, W = false), ne();
    };
  } };
  function A(R) {
    return R.reduce((G, O) => G.then(() => B(O)), Promise.resolve());
  }
  return fe;
}
function oS(e, t) {
  const n = [], l = [], r = [], a = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < a; o++) {
    const i = t.matched[o];
    i && (e.matched.find((c) => Tr(c, i)) ? l.push(i) : n.push(i));
    const u = e.matched[o];
    u && (t.matched.find((c) => Tr(c, u)) || r.push(u));
  }
  return [n, l, r];
}
let Jt;
const Pg = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Pg.decode();
let Gr = null;
function mo() {
  return (Gr === null || Gr.byteLength === 0) && (Gr = new Uint8Array(Jt.memory.buffer)), Gr;
}
function cu(e, t) {
  return e = e >>> 0, Pg.decode(mo().subarray(e, e + t));
}
function iS(e) {
  const t = Jt.__externref_table_alloc();
  return Jt.__wbindgen_export_2.set(t, e), t;
}
function uS(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    const l = iS(n);
    Jt.__wbindgen_exn_store(l);
  }
}
function sS(e, t) {
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
let Zu = 0;
const ho = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, cS = typeof ho.encodeInto == "function" ? function(e, t) {
  return ho.encodeInto(e, t);
} : function(e, t) {
  const n = ho.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function dS(e, t, n) {
  if (typeof e != "string") throw new Error(`expected a string argument, found ${typeof e}`);
  if (n === void 0) {
    const i = ho.encode(e), u = t(i.length, 1) >>> 0;
    return mo().subarray(u, u + i.length).set(i), Zu = i.length, u;
  }
  let l = e.length, r = t(l, 1) >>> 0;
  const a = mo();
  let o = 0;
  for (; o < l; o++) {
    const i = e.charCodeAt(o);
    if (i > 127) break;
    a[r + o] = i;
  }
  if (o !== l) {
    o !== 0 && (e = e.slice(o)), r = n(r, l, l = o + e.length * 3, 1) >>> 0;
    const i = mo().subarray(r + o, r + l), u = cS(e, i);
    if (u.read !== e.length) throw new Error("failed to pass whole string");
    o += u.written, r = n(r, l, o, 1) >>> 0;
  }
  return Zu = o, r;
}
function fS(e) {
  const t = Jt.__wbindgen_export_2.get(e);
  return Jt.__externref_table_dealloc(e), t;
}
function vS(e) {
  const t = dS(e, Jt.__wbindgen_malloc, Jt.__wbindgen_realloc), n = Zu, l = Jt.mtg(t, n);
  if (l[1]) throw fS(l[0]);
}
async function mS(e, t) {
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
function hS() {
  const e = {};
  return e.wbg = {}, e.wbg.__wbg_cb_d0b9dcdfbbb21123 = function() {
    return uS(function(t, n) {
      cb(cu(t, n));
    }, arguments);
  }, e.wbg.__wbg_log_6eff8ac810e5dae1 = function() {
    return sS(function(t, n) {
      log(cu(t, n));
    }, arguments);
  }, e.wbg.__wbindgen_init_externref_table = function() {
    const t = Jt.__wbindgen_export_2, n = t.grow(4);
    t.set(0, void 0), t.set(n + 0, void 0), t.set(n + 1, null), t.set(n + 2, true), t.set(n + 3, false);
  }, e.wbg.__wbindgen_throw = function(t, n) {
    throw new Error(cu(t, n));
  }, e;
}
function gS(e, t) {
  return Jt = e.exports, $g.__wbindgen_wasm_module = t, Gr = null, Jt.__wbindgen_start(), Jt;
}
async function $g(e) {
  if (Jt !== void 0) return Jt;
  typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("" + new URL("wasm_rust_mtg_bg-BXDIYXLZ.wasm", import.meta.url).href, import.meta.url));
  const t = hS();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: l } = await mS(await e, t);
  return gS(n, l);
}
const bS = /* @__PURE__ */ Mr({ __name: "HelloWorld", setup(e) {
  const t = () => {
    vS("test");
  };
  return (n, l) => {
    const r = hs("router-view");
    return Xn(), Iv(an, null, [Je(Ie(Ze), { class: "q-ma-lg", color: "primary", onClick: t }, { default: Rt(() => l[0] || (l[0] = [Ll("test")])), _: 1 }), Je(r)], 64);
  };
} }), yS = yg(bS, [["__scopeId", "data-v-17fee452"]]);
var pS = 1e-6, Rf = typeof Float32Array < "u" ? Float32Array : Array;
Math.hypot || (Math.hypot = function() {
  for (var e = 0, t = arguments.length; t--; ) e += arguments[t] * arguments[t];
  return Math.sqrt(e);
});
function du() {
  var e = new Rf(16);
  return Rf != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e;
}
function _S(e, t) {
  if (e === t) {
    var n = t[1], l = t[2], r = t[3], a = t[6], o = t[7], i = t[11];
    e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = n, e[6] = t[9], e[7] = t[13], e[8] = l, e[9] = a, e[11] = t[14], e[12] = r, e[13] = o, e[14] = i;
  } else e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15];
  return e;
}
function wS(e, t) {
  var n = t[0], l = t[1], r = t[2], a = t[3], o = t[4], i = t[5], u = t[6], c = t[7], s = t[8], f = t[9], h = t[10], m = t[11], g = t[12], w = t[13], x = t[14], T = t[15], p = n * i - l * o, y = n * u - r * o, b = n * c - a * o, C = l * u - r * i, $ = l * c - a * i, F = r * c - a * u, N = s * w - f * g, B = s * x - h * g, L = s * T - m * g, z = f * x - h * w, q = f * T - m * w, E = h * T - m * x, k = p * E - y * q + b * z + C * L - $ * B + F * N;
  return k ? (k = 1 / k, e[0] = (i * E - u * q + c * z) * k, e[1] = (r * q - l * E - a * z) * k, e[2] = (w * F - x * $ + T * C) * k, e[3] = (h * $ - f * F - m * C) * k, e[4] = (u * L - o * E - c * B) * k, e[5] = (n * E - r * L + a * B) * k, e[6] = (x * b - g * F - T * y) * k, e[7] = (s * F - h * b + m * y) * k, e[8] = (o * q - i * L + c * N) * k, e[9] = (l * L - n * q - a * N) * k, e[10] = (g * $ - w * b + T * p) * k, e[11] = (f * b - s * $ - m * p) * k, e[12] = (i * B - o * z - u * N) * k, e[13] = (n * z - l * B + r * N) * k, e[14] = (w * y - g * C - x * p) * k, e[15] = (s * C - f * y + h * p) * k, e) : null;
}
function fu(e, t, n) {
  var l = n[0], r = n[1], a = n[2], o, i, u, c, s, f, h, m, g, w, x, T;
  return t === e ? (e[12] = t[0] * l + t[4] * r + t[8] * a + t[12], e[13] = t[1] * l + t[5] * r + t[9] * a + t[13], e[14] = t[2] * l + t[6] * r + t[10] * a + t[14], e[15] = t[3] * l + t[7] * r + t[11] * a + t[15]) : (o = t[0], i = t[1], u = t[2], c = t[3], s = t[4], f = t[5], h = t[6], m = t[7], g = t[8], w = t[9], x = t[10], T = t[11], e[0] = o, e[1] = i, e[2] = u, e[3] = c, e[4] = s, e[5] = f, e[6] = h, e[7] = m, e[8] = g, e[9] = w, e[10] = x, e[11] = T, e[12] = o * l + s * r + g * a + t[12], e[13] = i * l + f * r + w * a + t[13], e[14] = u * l + h * r + x * a + t[14], e[15] = c * l + m * r + T * a + t[15]), e;
}
function vu(e, t, n, l) {
  var r = l[0], a = l[1], o = l[2], i = Math.hypot(r, a, o), u, c, s, f, h, m, g, w, x, T, p, y, b, C, $, F, N, B, L, z, q, E, k, j;
  return i < pS ? null : (i = 1 / i, r *= i, a *= i, o *= i, u = Math.sin(n), c = Math.cos(n), s = 1 - c, f = t[0], h = t[1], m = t[2], g = t[3], w = t[4], x = t[5], T = t[6], p = t[7], y = t[8], b = t[9], C = t[10], $ = t[11], F = r * r * s + c, N = a * r * s + o * u, B = o * r * s - a * u, L = r * a * s - o * u, z = a * a * s + c, q = o * a * s + r * u, E = r * o * s + a * u, k = a * o * s - r * u, j = o * o * s + c, e[0] = f * F + w * N + y * B, e[1] = h * F + x * N + b * B, e[2] = m * F + T * N + C * B, e[3] = g * F + p * N + $ * B, e[4] = f * L + w * z + y * q, e[5] = h * L + x * z + b * q, e[6] = m * L + T * z + C * q, e[7] = g * L + p * z + $ * q, e[8] = f * E + w * k + y * j, e[9] = h * E + x * k + b * j, e[10] = m * E + T * k + C * j, e[11] = g * E + p * k + $ * j, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e);
}
function xS(e, t, n, l, r) {
  var a = 1 / Math.tan(t / 2), o;
  return e[0] = a / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, r != null && r !== 1 / 0 ? (o = 1 / (l - r), e[10] = (r + l) * o, e[14] = 2 * r * l * o) : (e[10] = -1, e[14] = -2 * l), e;
}
var SS = xS;
function sr(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === true;
}
function fa(e) {
  return function t(n) {
    return arguments.length === 0 || sr(n) ? t : e.apply(this, arguments);
  };
}
function CS(e) {
  return function t(n, l) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return sr(n) ? t : fa(function(r) {
          return e(n, r);
        });
      default:
        return sr(n) && sr(l) ? t : sr(n) ? fa(function(r) {
          return e(r, l);
        }) : sr(l) ? fa(function(r) {
          return e(n, r);
        }) : e(n, l);
    }
  };
}
const kS = Array.isArray || function(t) {
  return t != null && t.length >= 0 && Object.prototype.toString.call(t) === "[object Array]";
};
var TS = fa(function(t) {
  return t === null ? "Null" : t === void 0 ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1);
});
function qS(e) {
  return new RegExp(e.source, e.flags ? e.flags : (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.sticky ? "y" : "") + (e.unicode ? "u" : "") + (e.dotAll ? "s" : ""));
}
function Bg(e, t, n) {
  if (n || (n = new ES()), MS(e)) return e;
  var l = function(a) {
    var o = n.get(e);
    if (o) return o;
    n.set(e, a);
    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (a[i] = Bg(e[i], true, n));
    return a;
  };
  switch (TS(e)) {
    case "Object":
      return l(Object.create(Object.getPrototypeOf(e)));
    case "Array":
      return l(Array(e.length));
    case "Date":
      return new Date(e.valueOf());
    case "RegExp":
      return qS(e);
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "BigInt64Array":
    case "BigUint64Array":
      return e.slice();
    default:
      return e;
  }
}
function MS(e) {
  var t = typeof e;
  return e == null || t != "object" && t != "function";
}
var ES = function() {
  function e() {
    this.map = {}, this.length = 0;
  }
  return e.prototype.set = function(t, n) {
    var l = this.hash(t), r = this.map[l];
    r || (this.map[l] = r = []), r.push([t, n]), this.length += 1;
  }, e.prototype.hash = function(t) {
    var n = [];
    for (var l in t) n.push(Object.prototype.toString.call(t[l]));
    return n.join();
  }, e.prototype.get = function(t) {
    if (this.length <= 180) {
      for (var n in this.map) for (var o = this.map[n], l = 0; l < o.length; l += 1) {
        var r = o[l];
        if (r[0] === t) return r[1];
      }
      return;
    }
    var a = this.hash(t), o = this.map[a];
    if (o) for (var l = 0; l < o.length; l += 1) {
      var r = o[l];
      if (r[0] === t) return r[1];
    }
  }, e;
}(), lo = fa(function(t) {
  return t != null && typeof t.clone == "function" ? t.clone() : Bg(t);
});
function RS(e, t) {
  return function() {
    var n = arguments.length;
    if (n === 0) return t();
    var l = arguments[n - 1];
    return kS(l) || typeof l[e] != "function" ? t.apply(this, arguments) : l[e].apply(l, Array.prototype.slice.call(arguments, 0, n - 1));
  };
}
var Af = CS(RS("forEach", function(t, n) {
  for (var l = n.length, r = 0; r < l; ) t(n[r]), r += 1;
  return n;
}));
const Lg = { zero: [{ pos: [0, 0], tex: "clock", hover: 0, hot: 1, action: { kind: "home" }, no_fade: true }, { pos: [0, -1], tex: "tv", hover: 0, hot: 2, action: { kind: "show", page: "page beta" } }, { pos: [0, 1], tex: "phone", hover: 0, hot: 3, action: { kind: "show", page: "page gamma" } }, { pos: [1, -0.5], tex: "tex", hover: 0, hot: 4, action: { kind: "sub", hexes: "s1" } }, { pos: [-1, 0.5], tex: "tex", hover: 0, hot: 5, action: { kind: "sub", hexes: "s1" } }], s1: [{ pos: [0, 0], tex: "clock", hover: 0, hot: 1, no_fade: true, action: { kind: "home" } }, { pos: [0, 1], tex: "clock", hover: 0, hot: 2, action: { kind: "show", page: "one" } }, { pos: [0, -1], tex: "tv", hover: 0, hot: 3, action: { kind: "show", page: "two" } }] }, mu = Lg.zero;
class AS {
  constructor(t) {
    __privateAdd(this, _AS_instances);
    __privateAdd(this, _n2, lo(mu));
    __privateAdd(this, _r2, null);
    __privateAdd(this, _e, 1);
    __privateAdd(this, _l2, lo(mu));
    __privateAdd(this, _t2, "in");
    __privateAdd(this, _a2);
    __privateSet(this, _a2, t);
  }
  draw(t) {
    Af((n) => t(n.pos, n.tex, n.hot, n.no_fade ? 0 : __privateGet(this, _e), n.no_fade ? 0 : n.hover))(__privateGet(this, _n2));
  }
  step(t) {
    if (__privateGet(this, _t2) == "in") __privateGet(this, _e) > 0 && (__privateSet(this, _e, __privateGet(this, _e) - t / 750), __privateSet(this, _e, Math.max(__privateGet(this, _e), 0))), __privateGet(this, _e) == 0 && __privateSet(this, _t2, "idle");
    else if (__privateGet(this, _t2) == "out") __privateGet(this, _e) < 1 && (__privateSet(this, _e, __privateGet(this, _e) + t / 750), __privateSet(this, _e, Math.min(__privateGet(this, _e), 1))), __privateGet(this, _e) == 1 && (__privateSet(this, _n2, __privateGet(this, _l2)), __privateSet(this, _t2, "in"));
    else for (const n of __privateGet(this, _n2)) n.hot == __privateGet(this, _r2) ? n.hover < 1 ? n.hover += 0.1 : n.hover = Math.min(n.hover, 1) : n.hover > 0 ? n.hover -= 0.1 : n.hover = Math.max(n.hover, 0);
  }
  hover(t) {
    __privateSet(this, _r2, t);
  }
  activate(t) {
    Af((n) => {
      n.hot == t && __privateMethod(this, _AS_instances, o_fn).call(this, n);
    })(__privateGet(this, _n2));
  }
}
_n2 = new WeakMap();
_r2 = new WeakMap();
_e = new WeakMap();
_l2 = new WeakMap();
_t2 = new WeakMap();
_a2 = new WeakMap();
_AS_instances = new WeakSet();
o_fn = function(t) {
  var _a3, _b2, _c2;
  ((_a3 = t.action) == null ? void 0 : _a3.kind) == "show" && __privateGet(this, _a2).call(this, t.action.page), ((_b2 = t.action) == null ? void 0 : _b2.kind) == "home" && (__privateSet(this, _l2, lo(mu)), __privateSet(this, _t2, "out")), ((_c2 = t.action) == null ? void 0 : _c2.kind) == "sub" && (__privateSet(this, _l2, lo(Lg[t.action.hexes])), __privateSet(this, _t2, "out"));
};
const PS = ["width", "height"], $S = /* @__PURE__ */ Mr({ __name: "WebGL", setup(e) {
  const t = bg(), n = K();
  let l = null;
  const r = { front_0: null, front_1: null, front_2: null, front_3: null, body: null };
  let a = null;
  const o = new AS((_) => t.notify({ message: _ })), i = K([0, 0]), u = K(""), c = K(0), s = K(0), f = K(-1), h = K([0, 0, 0, 0]), m = K(640), g = K(480), w = K(0), x = (_, H, V, fe, A, R, G) => {
    const O = [];
    for (let ne = 0; ne < 6; ++ne) O.push(_ + (ne + fe) % 6 + 1 + G), O.push(H + (ne + A) % 6 + 1 + G), O.push(V + (ne + R) % 6 + 1 + G);
    return O;
  }, T = () => {
    if (l === null) throw new Error("no WebGL context");
    let _ = [0, 0, 0];
    for (let P = 0; P < 6; ++P) {
      const te = 3.141 * P * 60 / 180;
      _ = _.concat([1 * Math.cos(te), 1 * Math.sin(te), 0]);
    }
    for (let P = 0; P < 6; ++P) {
      const te = 3.141 * P * 60 / 180;
      _ = _.concat([1 * Math.cos(te), 1 * Math.sin(te), 0]);
    }
    for (let P = 0; P < 6; ++P) {
      const te = 3.141 * P * 60 / 180;
      _ = _.concat([1 * Math.cos(te), 1 * Math.sin(te), 0.2]);
    }
    for (let P = 0; P < 6; ++P) {
      const te = 3.141 * P * 60 / 180;
      _ = _.concat([1 * Math.cos(te), 1 * Math.sin(te), 0.2]);
    }
    for (let P = 0; P < 6; ++P) {
      const te = 3.141 * P * 60 / 180;
      _ = _.concat([1.2 * Math.cos(te), 1.2 * Math.sin(te), 0.2]);
    }
    for (let P = 0; P < 6; ++P) {
      const te = 3.141 * P * 60 / 180;
      _ = _.concat([1.2 * Math.cos(te), 1.2 * Math.sin(te), 0.2]);
    }
    for (let P = 0; P < 6; ++P) {
      const te = 3.141 * P * 60 / 180;
      _ = _.concat([1 * Math.cos(te), 1 * Math.sin(te), -1]);
    }
    for (let P = 2; P < _.length; P += 3) _[P] -= 1;
    const H = l.createBuffer();
    l.bindBuffer(l.ARRAY_BUFFER, H), l.bufferData(l.ARRAY_BUFFER, new Float32Array(_), l.STATIC_DRAW);
    let V = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1];
    for (let P = 0; P < 6; ++P) V = V.concat([1, 1, 1, 1]);
    for (let P = 0; P < 6; ++P) V = V.concat([1, 1, 1, 1]);
    for (let P = 0; P < 6; ++P) V = V.concat([1, 1, 1, 1]);
    for (let P = 0; P < 6; ++P) V = V.concat([1, 1, 1, 1]);
    for (let P = 0; P < 6; ++P) V = V.concat([1, 1, 1, 1]);
    for (let P = 0; P < 6; ++P) V = V.concat([1, 1, 1, 1]);
    const fe = l.createBuffer();
    l.bindBuffer(l.ARRAY_BUFFER, fe), l.bufferData(l.ARRAY_BUFFER, new Float32Array(V), l.STATIC_DRAW);
    let A = [0.5, 0.5];
    for (let P = 0; P < 6; ++P) {
      const te = 3.141 * P * 60 / 180;
      A = A.concat([0.5 + 0.5 * Math.cos(te), 0.5 + 0.5 * Math.sin(te)]);
    }
    for (let P = 0; P < 6; ++P) {
      const te = 3.141 * P * 60 / 180;
      A = A.concat([0.5 + 0.4 * Math.cos(te), 0.5 + 0.4 * Math.sin(te)]);
    }
    for (let P = 0; P < 6; ++P) {
      const te = 3.141 * P * 60 / 180;
      A = A.concat([0.7 + 0.4 * Math.cos(te), 0.7 + 0.4 * Math.sin(te)]);
    }
    for (let P = 0; P < 6; ++P) {
      const te = 3.141 * P * 60 / 180;
      A = A.concat([0.8 + 0.5 * Math.cos(te), 0.8 + 0.5 * Math.sin(te)]);
    }
    for (let P = 0; P < 6; ++P) {
      const te = 3.141 * P * 60 / 180;
      A = A.concat([0.5 + 0.5 * Math.cos(te), 0.5 + 0.5 * Math.sin(te)]);
    }
    for (let P = 0; P < 6; ++P) {
      const te = 3.141 * (P + 1) * 60 / 180;
      A = A.concat([0.3 + 0.5 * Math.cos(te + 0), 0.3 + 0.5 * Math.sin(te + 0)]);
    }
    for (let P = 0; P < 6; ++P) {
      const te = 3.141 * (P + 1) * 60 / 180;
      A = A.concat([0.3 + 0.5 * Math.cos(te + 0), 0.3 + 0.5 * Math.sin(te + 0)]);
    }
    const R = l.createBuffer();
    l.bindBuffer(l.ARRAY_BUFFER, R), l.bufferData(l.ARRAY_BUFFER, new Float32Array(A), l.STATIC_DRAW);
    let G = [];
    for (let P = 1; P < 7; ++P) G = G.concat([0, P, 1 + P % 6]);
    G = G.concat(x(0, 0, 6, 0, 1, 0, 6)), G = G.concat(x(6, 6, 0, 0, 1, 1, 6)), G = G.concat(x(6, 6, 12, 0, 1, 0, 12)), G = G.concat(x(12, 12, 6, 0, 1, 1, 12)), G = G.concat(x(12, 18, 12, 1, 0, 0, 18)), G = G.concat(x(18, 18, 12, 0, 1, 1, 18));
    let O = 0;
    for (let P = 0; P < G.length; ++P) O = Math.max(O, G[P]);
    console.log("top", O);
    const ne = l.createBuffer();
    l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, ne), l.bufferData(l.ELEMENT_ARRAY_BUFFER, new Uint32Array(G), l.STATIC_DRAW), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, null);
    let be = [0, 0, 1], S = [], M = [], D = [];
    for (let P = 0; P < 6; ++P) {
      const te = P * 3.414 / 180 * 60, ce = 0 * (90 * 3.414 / 180);
      S = S.concat([0, 0, 1]), M = M.concat([-Math.cos(te - ce), -Math.sin(te - ce), 0]), D = D.concat([Math.cos(te - ce), Math.sin(te - ce), 0]);
    }
    be = be.concat(S), be = be.concat(M), be = be.concat(M), be = be.concat(S), be = be.concat(S), be = be.concat(D), be = be.concat(D);
    const ee = l.createBuffer();
    l.bindBuffer(l.ARRAY_BUFFER, ee), l.bufferData(l.ARRAY_BUFFER, new Float32Array(be), l.STATIC_DRAW);
    const le = l.createBuffer();
    return l.bindBuffer(l.ARRAY_BUFFER, le), l.bufferData(l.ARRAY_BUFFER, new Float32Array([-1, -1, 0.1, 1, -1, -0.1, 1, 1, 0.1, -1, 1, -0.1]), l.STATIC_DRAW), console.log("pctn", _.length / 3, V.length / 4, A.length / 2, be.length / 3), [H, fe, R, ne, ee, le];
  }, p = (_, H) => {
    const V = du();
    return fu(V, V, [0, 0, -6]), vu(V, V, 1.3 * Math.sin(H) * 3.141 / 6 / 3, [0, 1, 0]), vu(V, V, 1.2 * Math.sin(H * 1.15 + 1) * 3.141 / 4 / 3, [1, 0, 0]), vu(V, V, 1.1 * Math.sin(H * 1.33 + 2) * 3.141 / 5 / 3, [0, 0, 1]), fu(V, V, [_[0], _[1], _[2]]), V;
  }, y = (_) => {
    l !== null && (l.uniform1i(_.unif.sampler, 0), l.uniform1i(_.unif.mode_int, 1), l.drawElements(l.TRIANGLES, 3 * 6 * 3, l.UNSIGNED_INT, 0), l.uniform1i(_.unif.sampler, 1), l.uniform1i(_.unif.mode_int, 0), l.drawElements(l.TRIANGLES, 3 * 6 * 6, l.UNSIGNED_INT, 4 * 3 * 6));
  }, b = (_, H) => {
    if (l === null || n.value === void 0) throw new Error("no WebGL context");
    l.viewport(0, 0, m.value, g.value), l.enable(l.DEPTH_TEST), l.depthFunc(l.LEQUAL), l.bindRenderbuffer(l.RENDERBUFFER, null), l.bindFramebuffer(l.FRAMEBUFFER, null), l.bindTexture(l.TEXTURE_2D, _.bufs.double), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.LINEAR), l.bindRenderbuffer(l.RENDERBUFFER, _.bufs.depth), l.renderbufferStorage(l.RENDERBUFFER, l.DEPTH_COMPONENT16, l.canvas.width, l.canvas.height), l.bindFramebuffer(l.FRAMEBUFFER, _.bufs.frame), l.framebufferRenderbuffer(l.FRAMEBUFFER, l.DEPTH_ATTACHMENT, l.RENDERBUFFER, _.bufs.depth), l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, l.canvas.width, l.canvas.height, 0, l.RGBA, l.UNSIGNED_BYTE, null), l.framebufferTexture2D(l.FRAMEBUFFER, l.COLOR_ATTACHMENT0, l.TEXTURE_2D, _.bufs.double, 0), l.bindFramebuffer(l.FRAMEBUFFER, _.bufs.frame), l.framebufferTexture2D(l.FRAMEBUFFER, l.COLOR_ATTACHMENT0, l.TEXTURE_2D, _.bufs.double, 0), l.framebufferRenderbuffer(l.FRAMEBUFFER, l.DEPTH_ATTACHMENT, l.RENDERBUFFER, _.bufs.depth), l.clear(l.COLOR_BUFFER_BIT | l.DEPTH_BUFFER_BIT);
    const V = 45 * Math.PI / 180, fe = m.value / g.value, A = 0.1, R = 100, G = du();
    SS(G, V, fe, A, R);
    const O = H;
    fu(G, G, [Math.sin(O * 0.3) * 1, Math.cos(O * 0.4) * 1, Math.cos(0.6 * O) * 1]), l.useProgram(_.prog_draw), C(_, false), $(_), F(_), N(_), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, _.bufs.index), l.uniform1f(_.unif.time, H), l.uniform2f(_.unif.viewport, m.value, g.value), l.uniformMatrix4fv(_.unif.proj, false, G), l.activeTexture(l.TEXTURE0 + 1), l.bindTexture(l.TEXTURE_2D, r.body), l.activeTexture(l.TEXTURE0);
    const ne = (M, D, ee, le, P) => {
      if (l === null) return;
      const te = [M[0] * 2, M[1] * 2.2, P * 0.5 + le * 10], ce = p(te, H);
      switch (l.uniformMatrix4fv(_.unif.model, false, ce), l.uniform1f(_.unif.hover, P), l.uniform1f(_.unif.alpha, 1 - le), l.activeTexture(l.TEXTURE0), D) {
        case "clock":
          l.bindTexture(l.TEXTURE_2D, r.front_1);
          break;
        case "tv":
          l.bindTexture(l.TEXTURE_2D, r.front_2);
          break;
        case "phone":
          l.bindTexture(l.TEXTURE_2D, r.front_3);
          break;
        default:
          l.bindTexture(l.TEXTURE_2D, r.front_0);
          break;
      }
      l.activeTexture(l.TEXTURE0);
      const de = du();
      wS(de, ce), _S(de, de), l.uniformMatrix4fv(_.unif.normal, false, de), y(_);
    };
    o.draw(ne), l.framebufferTexture2D(l.FRAMEBUFFER, l.COLOR_ATTACHMENT0, l.TEXTURE_2D, null, 0), l.framebufferRenderbuffer(l.FRAMEBUFFER, l.DEPTH_ATTACHMENT, l.RENDERBUFFER, null), l.flush(), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, null), l.disableVertexAttribArray(_.attr.pos_model), l.bindFramebuffer(l.FRAMEBUFFER, null), l.bindRenderbuffer(l.RENDERBUFFER, null), l.useProgram(_.prog_copy), l.disable(l.DEPTH_TEST), l.uniform1i(_.unif.copy_tex, 0), l.bindTexture(l.TEXTURE_2D, _.bufs.double), l.bindBuffer(l.ARRAY_BUFFER, _.bufs.copy_pos), l.vertexAttribPointer(_.attr.pos_copy, 3, l.FLOAT, false, 0, 0), l.enableVertexAttribArray(_.attr.pos_copy), l.drawArrays(l.TRIANGLE_FAN, 0, 4), l.disableVertexAttribArray(_.attr.pos_copy), l.useProgram(_.prog_pick), l.enable(l.DEPTH_TEST), l.bindTexture(l.TEXTURE_2D, _.pick.tex), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.NEAREST), l.bindRenderbuffer(l.RENDERBUFFER, _.pick.rb), l.renderbufferStorage(l.RENDERBUFFER, l.DEPTH_COMPONENT16, l.canvas.width, l.canvas.height), l.bindFramebuffer(l.FRAMEBUFFER, _.pick.fb), l.framebufferRenderbuffer(l.FRAMEBUFFER, l.DEPTH_ATTACHMENT, l.RENDERBUFFER, _.pick.rb), l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, l.canvas.width, l.canvas.height, 0, l.RGBA, l.UNSIGNED_BYTE, null), l.framebufferTexture2D(l.FRAMEBUFFER, l.COLOR_ATTACHMENT0, l.TEXTURE_2D, _.pick.tex, 0), l.uniformMatrix4fv(_.unif.proj_pick, false, G), l.clear(l.COLOR_BUFFER_BIT | l.DEPTH_BUFFER_BIT), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, _.bufs.index), l.enableVertexAttribArray(_.attr.pos_pick), C(_, true);
    const be = (M, D, ee, le, P) => {
      if (l === null) return;
      const te = [M[0] * 2, M[1] * 2.2, P * 0.5 + 10 * le];
      p(te, H), l.uniformMatrix4fv(_.unif.model_pick, false, p(te, H)), l.uniform4f(_.unif.id_pick, ee / 255, 0, 0, 0), l.drawElements(l.TRIANGLES, 3 * 6, l.UNSIGNED_INT, 0);
    };
    o.draw(be), l.flush(), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, null), l.disableVertexAttribArray(_.attr.pos_pick);
    let S = new Uint8Array(4);
    l.readPixels(i.value[0], g.value - i.value[1], 1, 1, l.RGBA, l.UNSIGNED_BYTE, S), S.length && (u.value = S.toString(), o.hover(S[0]), c.value = S[0]);
  }, C = (_, H) => {
    if (l === null) throw new Error("setPos - no ctx");
    l.bindBuffer(l.ARRAY_BUFFER, _.bufs.pos), l.vertexAttribPointer(H ? _.attr.pos_pick : _.attr.pos_model, 3, l.FLOAT, false, 0, 0), l.enableVertexAttribArray(H ? _.attr.pos_pick : _.attr.pos_model);
  }, $ = (_) => {
    if (l === null) throw new Error("setColor - no ctx");
    l.bindBuffer(l.ARRAY_BUFFER, _.bufs.color), l.vertexAttribPointer(_.attr.color, 4, l.FLOAT, false, 0, 0), l.enableVertexAttribArray(_.attr.color);
  }, F = (_) => {
    if (l === null) throw new Error("setTex crash");
    l.bindBuffer(l.ARRAY_BUFFER, _.bufs.tex), l.vertexAttribPointer(_.attr.texture, 2, l.FLOAT, false, 0, 0), l.enableVertexAttribArray(_.attr.texture);
  }, N = (_) => {
    if (l === null) throw new Error("setNorm crash");
    l.bindBuffer(l.ARRAY_BUFFER, _.bufs.norm), l.vertexAttribPointer(_.attr.norm, 3, l.FLOAT, false, 0, 0), l.enableVertexAttribArray(_.attr.norm);
  };
  let B = 0;
  const L = () => {
    if (l === null) return;
    const V = E(`
        attribute vec4 aVertexPosition;
        attribute vec3 aVertexNormal;
        attribute vec4 aVertexColor;
        attribute vec2 aTextureCoord;

        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;
        uniform mat4 uNormalMatrix;
        uniform float fTime;
        uniform float fMode;
        uniform mediump float fFade;

        uniform mediump vec2 uViewPort;

        varying vec4 vColor;
        varying float fDist;
        varying highp vec2 vTextureCoord;
        varying highp float fT;
        varying mediump float fCurFade;
        varying mediump vec3 vLighting;

        varying mediump vec3 vNorm; // for spot light
        varying mediump vec3 vPos; // for spot light

        float abc(in float f) {
            return f * 0.1;
        }

        void main() {
            vNorm = aVertexNormal;

            vec4 b = aVertexPosition;
            fDist = sqrt(aVertexPosition[0] * aVertexPosition[0] + aVertexPosition[1] * aVertexPosition[1]);

            gl_Position = uProjectionMatrix * uModelViewMatrix * b;

            vPos = gl_Position.xyz; //(uProjectionMatrix * uModelViewMatrix * gl_Position).xyz;
            // vPos = (uNormalMatrix * vec4(aVertexNormal, 1.0)).xyz;
            // vPos[0] /= uViewPort.x;
            vPos[1] /= uViewPort.x / uViewPort.y;

            // vPos[0] = vPos[0] * 0.5 + 0.5;
            // vPos[1] = vPos[1] * 0.5 + 0.5;

            // vPos[0] /= gl_PointSize[0];
            // vPos[1] /= glPointSize[1];
            // vPos = aVertexPosition.xyz;
            // vPos = aVertexPosition;

            vColor = aVertexColor;
            vTextureCoord = aTextureCoord;

            fT = fTime;

            // fKind = fMode;
            fCurFade = fFade;

            highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);
            highp vec3 directionalLightColor = vec3(1.0, 1.0, 1.0);
            highp vec3 directionalVector = normalize(vec3(1.0, -1.0, 1.0));// normalize(vec3(0, 0, -1));

            // highp vec4 transformedNormal = uNormalMatrix * vec4(normalize(aVertexNormal), 1.0);
            // highp vec4 transformedNormal = uNormalMatrix * uModelViewMatrix * vec4((aVertexNormal), 1.0);
            highp vec4 transformedNormal = uNormalMatrix * vec4(normalize(aVertexNormal), 1.0);

            highp float directional = min(max(
                dot(transformedNormal.xyz, directionalVector),
            0.0), 1.0);
            vLighting = ambientLight + (directionalLightColor * directional) * 1.0;

            // vLighting = vec3(1.0, 1.0, 1.0);
        }
    `, `
        uniform sampler2D uSampler;
        uniform int uMode;
        uniform mediump float uAlpha;

        varying mediump vec4 vColor;
        varying mediump float fT;
        varying mediump float fDist;
        varying highp vec2 vTextureCoord;
        // varying mediump float fKind;
        varying mediump float fCurFade;
        varying mediump vec3 vLighting;

        varying mediump vec3 vNorm; // for spot light
        varying mediump vec3 vPos; // for spot light

        void main() {
            mediump vec2 t = vTextureCoord;

            mediump float x = t[0] - 0.5;
            mediump float y = t[1] - 0.5;

            mediump float r = sqrt(x * x + y * y) * 4.0;

            mediump float f1 = fT;

            mediump vec2 tt;

            mediump float a = fCurFade;

            tt[0] = t[0] + t[0] * (cos(f1 * r * 3.0) / 10.0 + 0.5) * 0.5 * exp(-r * 0.3) * exp(-f1 * 0.15);
            tt[1] = t[1] + t[1] * (sin(f1 * r * 2.0) / 10.0 + 0.5) * 0.5 * exp(-r * 0.3) * exp(-f1 * 0.15);

            // tt.x = t.x;
            // tt.y = t.y;
            // tt.x += 0.1;


            mediump vec4 fragColor;

            if(uMode == 1) { // idle or hover
                mediump vec4 idle = texture2D(uSampler, tt) * vColor;
                idle[0] *= 0.66;
                idle[1] *= 0.66;
                idle[2] *= 0.66;

                mediump vec4 active = texture2D(uSampler, t);
                active[0] *= 0.8;
                active[1] *= 0.8;
                active[2] *= 1.0;
                active += vec4(0.2, 0.2, 0.0, 0.0);

                mediump float a = 1.0 - cos(3.141 * fCurFade / 2.0);

                fragColor = (idle * (1.0 - a) + active * a);
                fragColor = vec4(fragColor.rgb * vLighting, fragColor.a);

            }
            else { // norm
                fragColor = texture2D(uSampler, t) * vColor;
                fragColor = vec4(fragColor.rgb * vLighting, fragColor.a);
            }

                mediump vec3 VP; // surf to light
                mediump vec3 reflection;

                mediump float spotDot; // the angle

                VP = vec3(0.0, 0.0, 6.0) - vPos;

                mediump float d = length(VP); // distance

                VP = normalize(VP);

                spotDot = dot(-VP, normalize(vec3(0.5, 0.33, 1.0))); // direction

                // mediump float f1 = pow(spotDot, 5.0);

                // mediump float f1 = spotDot;

                // if(spotDot) - dir

                mediump float dotVP;// norm * light
                mediump float dotR;// norm * refl

                reflection = normalize (reflect (-normalize (VP), normalize(vNorm)));

                dotVP = max(0.0, dot(vNorm, VP));
                dotR = max(0.0, dot(normalize(vNorm), reflection));

                // dotVP = exp(-dotVP * 1.0 - 0.5);

                if(spotDot > 0.85) {
                    mediump float att = 1.0 / (d + 0.2);

                    att = pow(att, 2.0);

                    mediump float l = 1.0 - pow((1.0 - spotDot) / (1.0 - 0.85), 2.0);
                    l *= att;

                    fragColor += vec4(l, l, l, 0);

                    // mediump float l = spotDot * 0.3 + (1.0 - spotDot) * 0.7;
                    // mediump float l = 1.0 - spotDot;// pow(spotDot, 1.0);// pow(dotR, 5.0);//exp(-dotVP)
                    // l = pow(l, 5.0);
                    // l = exp(-l * 0.1);

                    // gl_FragColor *= l;
                    // gl_FragColor = vec4(l, l, l, 1.0);
                    // gl_FragColor.a = 1.0;

                    // gl_FragColor *= 1.0 - l;
                    // gl_FragColor.a = 1.0;
                    // l = spotDot;
                    // gl_FragColor = vec4(l, 0, l, 1.0);
                }

                // fragColor = vec4(fKind, fKind, fKind, 1.0);

                fragColor.a = pow(uAlpha, 5.0);

                gl_FragColor = fragColor;

                // gl_FragColor = vec4(vLighting, 1.0);

        }
    `), fe = `
        attribute vec4 aVertexPosition;
        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;

        void main() {
            vec4 b = aVertexPosition;
            gl_Position = uProjectionMatrix * uModelViewMatrix * b;
        }
    `, A = `
        precision mediump float;
        
        uniform vec4 uId;
        
        void main() {
            gl_FragColor = uId;
        }
    `, R = `
        attribute vec3 aVertexPos;

        varying mediump vec2 vTexCoord;

        void main() {
            gl_Position = vec4(aVertexPos, 1.0);
            vTexCoord = vec2(0.5 + aVertexPos.x / 2.0, 0.5 + aVertexPos.y / 2.0);
            // gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
            // vTexCoord = vec2(0.5, 0.5);
        }
    `, G = `
        varying mediump vec2 vTexCoord;

        uniform sampler2D uTexture;

        void main() {
            gl_FragColor = texture2D(uTexture, vTexCoord);
        }
    `, O = T(), ne = E(fe, A), be = E(R, G), S = l.createTexture();
    l.bindTexture(l.TEXTURE_2D, S), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.NEAREST), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.NEAREST), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE), l.bindTexture(l.TEXTURE_2D, null);
    const M = l.createRenderbuffer(), D = l.createFramebuffer(), ee = { prog_draw: V, prog_pick: ne, prog_copy: be, attr: { pos_model: l.getAttribLocation(V, "aVertexPosition"), norm: l.getAttribLocation(V, "aVertexNormal"), color: l.getAttribLocation(V, "aVertexColor"), texture: l.getAttribLocation(V, "aTextureCoord"), pos_pick: l.getAttribLocation(ne, "aVertexPosition"), pos_copy: l.getAttribLocation(be, "aVertexPos") }, unif: { proj: l.getUniformLocation(V, "uProjectionMatrix"), model: l.getUniformLocation(V, "uModelViewMatrix"), sampler: l.getUniformLocation(V, "uSampler"), normal: l.getUniformLocation(V, "uNormalMatrix"), time: l.getUniformLocation(V, "fTime"), alpha: l.getUniformLocation(V, "uAlpha"), hover: l.getUniformLocation(V, "fFade"), mode_int: l.getUniformLocation(V, "uMode"), proj_pick: l.getUniformLocation(ne, "uProjectionMatrix"), model_pick: l.getUniformLocation(ne, "uModelViewMatrix"), id_pick: l.getUniformLocation(ne, "uId"), viewport: l.getUniformLocation(V, "uViewPort"), copy_tex: l.getUniformLocation(be, "uTexture") }, bufs: { frame: D, depth: M, double: S, pos: O[0], color: O[1], tex: O[2], index: O[3], norm: O[4], copy_pos: O[5] }, pick: { fb: l.createFramebuffer(), rb: l.createRenderbuffer(), tex: l.createTexture() } };
    for (const le in r) r[le] = j();
    l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL, true), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.LINEAR), a = ee;
  }, z = () => {
    if (n.value === void 0 || (l === null && (l = n.value.getContext("webgl2", {})), l === null)) return;
    a === null && L(), console.log("pctn", a == null ? void 0 : a.attr.pos_model, a == null ? void 0 : a.attr.color, a == null ? void 0 : a.attr.texture, a == null ? void 0 : a.attr.norm), console.log("next", a == null ? void 0 : a.attr.pos_copy, a == null ? void 0 : a.attr.pos_pick), l.bindRenderbuffer(l.RENDERBUFFER, a.bufs.depth), l.renderbufferStorage(l.RENDERBUFFER, l.DEPTH_COMPONENT16, m.value, g.value), l.bindRenderbuffer(l.RENDERBUFFER, null);
    const _ = l.createTexture();
    l.bindTexture(l.TEXTURE_2D, _), l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, m.value, g.value, 0, l.RGBA, l.UNSIGNED_BYTE, null), a.bufs.double = _, l.bindTexture(l.TEXTURE_2D, null), l.viewport(0, 0, m.value, g.value);
    let H = 0, V = false, fe = Date.now();
    B = setInterval(() => {
      const A = Date.now(), R = (A - fe) / 750;
      V ? (H -= R, H < 0 && (H = 0, V = false)) : (H += R, H > 7.5 && (H = 7.5, V = true)), o.step(A - fe), s.value > 0 && (o.activate(s.value), s.value = 0), fe = A, a !== null && (q(), b(a, H));
    }, 25);
  }, q = (_) => {
    for (let H = 0; H < 4; ++H) f.value - 1 == H ? h.value[H] < 1 && (h.value[H] += 0.05) : h.value[H] > 0 && (h.value[H] -= 0.05);
  }, E = (_, H) => {
    if (l === null) throw new Error("no webgl");
    const V = k(l.VERTEX_SHADER, _), fe = k(l.FRAGMENT_SHADER, H), A = l.createProgram();
    return l.attachShader(A, V), l.attachShader(A, fe), l.linkProgram(A), A;
  }, k = (_, H) => {
    if (l === null) throw new Error("no webgl");
    const V = l.createShader(_);
    if (V === null) throw new Error("bad shader");
    return l.shaderSource(V, H), l.compileShader(V), V;
  }, j = () => {
    if (l === null) return null;
    const _ = l.createTexture();
    return l.bindTexture(l.TEXTURE_2D, _), l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, 1, 1, 0, l.RGBA, l.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0])), _;
  }, Q = (_, H) => {
    if (l === null) return;
    const V = H.target;
    l.bindTexture(l.TEXTURE_2D, r[_]), l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, l.RGBA, l.UNSIGNED_BYTE, V), l.hint(l.GENERATE_MIPMAP_HINT, l.NICEST), l.generateMipmap(l.TEXTURE_2D);
  }, W = (_) => {
    if (l === null || n.value === void 0) return;
    const H = _, V = H.offsetX, fe = H.offsetY;
    V - n.value.clientWidth / 2, fe - n.value.clientHeight / 2, (V - l.canvas.width / 2) / 2, (fe - l.canvas.height / 2) / 2, i.value = [V, fe];
  }, X = (_) => {
    const H = _;
    i.value = [H.touches.item(0).clientX, H.touches.item(0).clientY], _.stopPropagation(), _.preventDefault();
  }, re = () => {
    B != 0 && clearInterval(B);
    const _ = document.getElementById("header");
    _ !== null && (w.value = _.getBoundingClientRect().bottom);
    let H = 0;
    document.getElementById("footer"), _ !== null && (H = _.getBoundingClientRect().height), We(() => {
      m.value = window.innerWidth, g.value = window.innerHeight - w.value - H, We(z);
    });
  }, pe = (_) => {
    s.value = c.value;
  };
  ft(() => {
    window.addEventListener("resize", re), re();
  }), Ke(() => {
    clearInterval(B), window.removeEventListener("resize", re);
  });
  const Y = () => ({ top: w.value + "px" });
  return (_, H) => (Xn(), Iv(an, null, [Bn("canvas", { id: "canvas", ref_key: "canvas", ref: n, onMousemove: H[0] || (H[0] = (V) => W(V)), onTouchstart: H[1] || (H[1] = (V) => X(V)), onTouchmove: H[2] || (H[2] = (V) => X(V)), onTouchend: H[3] || (H[3] = (V) => pe()), onMouseup: H[4] || (H[4] = (V) => pe()), width: m.value, height: g.value, style: Ko(Y()) }, null, 44, PS), Bn("img", { src: "img/wood.jpg", onLoad: H[5] || (H[5] = (V) => Q("body", V)), style: { display: "none" } }, null, 32), Bn("img", { src: "img/tex.jpg", onLoad: H[6] || (H[6] = (V) => Q("front_0", V)), style: { display: "none" } }, null, 32), Bn("img", { src: "img/clock.jpg", onLoad: H[7] || (H[7] = (V) => Q("front_1", V)), style: { display: "none" } }, null, 32), Bn("img", { src: "img/tv.jpg", onLoad: H[8] || (H[8] = (V) => Q("front_2", V)), style: { display: "none" } }, null, 32), Bn("img", { src: "img/phone.jpg", onLoad: H[9] || (H[9] = (V) => Q("front_3", V)), style: { display: "none" } }, null, 32)], 64));
} }), BS = { BASE_URL: "./", DEV: false, MODE: "production", PROD: true, SSR: false, VITE_APP_NAME: "vite mtg", VITE_client_id: "quasar-2fa", VITE_client_secret: "spoon" }, Zs = Jv(Jw);
console.log(BS);
const LS = [{ name: "layout", path: "/", component: nx, children: [{ name: "root", path: "", component: yS }, { name: "webgl", path: "webgl", component: $S }] }], FS = aS({ history: Bx(), routes: LS });
Zs.use(FS);
Zs.use(Xw, { plugins: { Dialog: Lw, Dark: lm, Loading: Ow, Cookies: $w, Notify: jw }, config: { dark: "auto" } });
window.cb = (e) => {
  alert(e);
};
window.log = (e) => {
  console.log("%cwasm>%c %s", "background-color: blue; color: cyan; border: 2px solid blue;", "", e);
};
$g({}).then(() => {
  Zs.mount("#q-app");
});
