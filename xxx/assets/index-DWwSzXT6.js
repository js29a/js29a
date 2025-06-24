var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value2) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value2);
var __privateSet = (obj, member, value2, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value2) : member.set(obj, value2), value2);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _n2, _r2, _e, _l2, _t2, _a2, _$S_instances, o_fn;
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const a of l) if (a.type === "childList") for (const o of a.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: true, subtree: true });
  function n(l) {
    const a = {};
    return l.integrity && (a.integrity = l.integrity), l.referrerPolicy && (a.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? a.credentials = "include" : l.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
  }
  function r(l) {
    if (l.ep) return;
    l.ep = true;
    const a = n(l);
    fetch(l.href, a);
  }
})();
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ns(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const mt = {}, vr = [], Vn = () => {
}, Dg = () => false, Ko = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ls = (e) => e.startsWith("onUpdate:"), It = Object.assign, rs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ig = Object.prototype.hasOwnProperty, st = (e, t) => Ig.call(e, t), Ne = Array.isArray, mr = (e) => Ma(e) === "[object Map]", Ff = (e) => Ma(e) === "[object Set]", zg = (e) => Ma(e) === "[object RegExp]", Ke = (e) => typeof e == "function", Pt = (e) => typeof e == "string", wl = (e) => typeof e == "symbol", St = (e) => e !== null && typeof e == "object", Of = (e) => (St(e) || Ke(e)) && Ke(e.then) && Ke(e.catch), Vf = Object.prototype.toString, Ma = (e) => Vf.call(e), Ng = (e) => Ma(e).slice(8, -1), Df = (e) => Ma(e) === "[object Object]", as = (e) => Pt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Jr = /* @__PURE__ */ ns(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Wo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Hg = /-(\w)/g, pn = Wo((e) => e.replace(Hg, (t, n) => n ? n.toUpperCase() : "")), jg = /\B([A-Z])/g, Gl = Wo((e) => e.replace(jg, "-$1").toLowerCase()), Yo = Wo((e) => e.charAt(0).toUpperCase() + e.slice(1)), ki = Wo((e) => e ? `on${Yo(e)}` : ""), bl = (e, t) => !Object.is(e, t), ea = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, If = (e, t, n, r = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: r, value: n });
}, Ug = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Qg = (e) => {
  const t = Pt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ic;
const Ea = () => ic || (ic = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Xo(e) {
  if (Ne(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], l = Pt(r) ? Xg(r) : Xo(r);
      if (l) for (const a in l) t[a] = l[a];
    }
    return t;
  } else if (Pt(e) || St(e)) return e;
}
const Kg = /;(?![^(]*\))/g, Wg = /:([^]+)/, Yg = /\/\*[^]*?\*\//g;
function Xg(e) {
  const t = {};
  return e.replace(Yg, "").split(Kg).forEach((n) => {
    if (n) {
      const r = n.split(Wg);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function os(e) {
  let t = "";
  if (Pt(e)) t = e;
  else if (Ne(e)) for (let n = 0; n < e.length; n++) {
    const r = os(e[n]);
    r && (t += r + " ");
  }
  else if (St(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Gg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Zg = /* @__PURE__ */ ns(Gg);
function zf(e) {
  return !!e || e === "";
}
const Nf = (e) => !!(e && e.__v_isRef === true), po = (e) => Pt(e) ? e : e == null ? "" : Ne(e) || St(e) && (e.toString === Vf || !Ke(e.toString)) ? Nf(e) ? po(e.value) : JSON.stringify(e, Hf, 2) : String(e), Hf = (e, t) => Nf(t) ? Hf(e, t.value) : mr(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, l], a) => (n[Ti(r, a) + " =>"] = l, n), {}) } : Ff(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => Ti(n)) } : wl(t) ? Ti(t) : St(t) && !Ne(t) && !Df(t) ? String(t) : t, Ti = (e, t = "") => {
  var n;
  return wl(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let on;
class Jg {
  constructor(t = false) {
    this.detached = t, this._active = true, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = on, !t && on && (this.index = (on.scopes || (on.scopes = [])).push(this) - 1);
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
      const n = on;
      try {
        return on = this, t();
      } finally {
        on = n;
      }
    }
  }
  on() {
    on = this;
  }
  off() {
    on = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = false;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(true);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const l = this.parent.scopes.pop();
        l && l !== this && (this.parent.scopes[this.index] = l, l.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function e0() {
  return on;
}
let bt;
const qi = /* @__PURE__ */ new WeakSet();
class jf {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, on && on.active && on.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, qi.has(this) && (qi.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Qf(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, uc(this), Kf(this);
    const t = bt, n = Mn;
    bt = this, Mn = true;
    try {
      return this.fn();
    } finally {
      Wf(this), bt = t, Mn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) ss(t);
      this.deps = this.depsTail = void 0, uc(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? qi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    pu(this) && this.run();
  }
  get dirty() {
    return pu(this);
  }
}
let Uf = 0, ta, na;
function Qf(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = na, na = e;
    return;
  }
  e.next = ta, ta = e;
}
function is() {
  Uf++;
}
function us() {
  if (--Uf > 0) return;
  if (na) {
    let t = na;
    for (na = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; ta; ) {
    let t = ta;
    for (ta = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
        t.trigger();
      } catch (r) {
        e || (e = r);
      }
      t = n;
    }
  }
  if (e) throw e;
}
function Kf(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Wf(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const l = r.prevDep;
    r.version === -1 ? (r === n && (n = l), ss(r), t0(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = l;
  }
  e.deps = t, e.depsTail = n;
}
function pu(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Yf(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function Yf(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ma)) return;
  e.globalVersion = ma;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !pu(e)) {
    e.flags &= -3;
    return;
  }
  const n = bt, r = Mn;
  bt = e, Mn = true;
  try {
    Kf(e);
    const l = e.fn(e._value);
    (t.version === 0 || bl(l, e._value)) && (e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    bt = n, Mn = r, Wf(e), e.flags &= -3;
  }
}
function ss(e, t = false) {
  const { dep: n, prevSub: r, nextSub: l } = e;
  if (r && (r.nextSub = l, e.prevSub = void 0), l && (l.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep) ss(a, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function t0(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Mn = true;
const Xf = [];
function xl() {
  Xf.push(Mn), Mn = false;
}
function Sl() {
  const e = Xf.pop();
  Mn = e === void 0 ? true : e;
}
function uc(e) {
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
let ma = 0;
class n0 {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class cs {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!bt || !Mn || bt === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== bt) n = this.activeLink = new n0(bt, this), bt.deps ? (n.prevDep = bt.depsTail, bt.depsTail.nextDep = n, bt.depsTail = n) : bt.deps = bt.depsTail = n, Gf(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = bt.depsTail, n.nextDep = void 0, bt.depsTail.nextDep = n, bt.depsTail = n, bt.deps === n && (bt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, ma++, this.notify(t);
  }
  notify(t) {
    is();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      us();
    }
  }
}
function Gf(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) Gf(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const yu = /* @__PURE__ */ new WeakMap(), Nl = Symbol(""), _u = Symbol(""), ha = Symbol("");
function Wt(e, t, n) {
  if (Mn && bt) {
    let r = yu.get(e);
    r || yu.set(e, r = /* @__PURE__ */ new Map());
    let l = r.get(n);
    l || (r.set(n, l = new cs()), l.map = r, l.key = n), l.track();
  }
}
function Yn(e, t, n, r, l, a) {
  const o = yu.get(e);
  if (!o) {
    ma++;
    return;
  }
  const i = (u) => {
    u && u.trigger();
  };
  if (is(), t === "clear") o.forEach(i);
  else {
    const u = Ne(e), c = u && as(n);
    if (u && n === "length") {
      const s = Number(r);
      o.forEach((f, h) => {
        (h === "length" || h === ha || !wl(h) && h >= s) && i(f);
      });
    } else switch ((n !== void 0 || o.has(void 0)) && i(o.get(n)), c && i(o.get(ha)), t) {
      case "add":
        u ? c && i(o.get("length")) : (i(o.get(Nl)), mr(e) && i(o.get(_u)));
        break;
      case "delete":
        u || (i(o.get(Nl)), mr(e) && i(o.get(_u)));
        break;
      case "set":
        mr(e) && i(o.get(Nl));
        break;
    }
  }
  us();
}
function tr(e) {
  const t = Ge(e);
  return t === e ? t : (Wt(t, "iterate", ha), En(e) ? t : t.map(Gt));
}
function ds(e) {
  return Wt(e = Ge(e), "iterate", ha), e;
}
const l0 = { __proto__: null, [Symbol.iterator]() {
  return Mi(this, Symbol.iterator, Gt);
}, concat(...e) {
  return tr(this).concat(...e.map((t) => Ne(t) ? tr(t) : t));
}, entries() {
  return Mi(this, "entries", (e) => (e[1] = Gt(e[1]), e));
}, every(e, t) {
  return Nn(this, "every", e, t, void 0, arguments);
}, filter(e, t) {
  return Nn(this, "filter", e, t, (n) => n.map(Gt), arguments);
}, find(e, t) {
  return Nn(this, "find", e, t, Gt, arguments);
}, findIndex(e, t) {
  return Nn(this, "findIndex", e, t, void 0, arguments);
}, findLast(e, t) {
  return Nn(this, "findLast", e, t, Gt, arguments);
}, findLastIndex(e, t) {
  return Nn(this, "findLastIndex", e, t, void 0, arguments);
}, forEach(e, t) {
  return Nn(this, "forEach", e, t, void 0, arguments);
}, includes(...e) {
  return Ei(this, "includes", e);
}, indexOf(...e) {
  return Ei(this, "indexOf", e);
}, join(e) {
  return tr(this).join(e);
}, lastIndexOf(...e) {
  return Ei(this, "lastIndexOf", e);
}, map(e, t) {
  return Nn(this, "map", e, t, void 0, arguments);
}, pop() {
  return Fr(this, "pop");
}, push(...e) {
  return Fr(this, "push", e);
}, reduce(e, ...t) {
  return sc(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return sc(this, "reduceRight", e, t);
}, shift() {
  return Fr(this, "shift");
}, some(e, t) {
  return Nn(this, "some", e, t, void 0, arguments);
}, splice(...e) {
  return Fr(this, "splice", e);
}, toReversed() {
  return tr(this).toReversed();
}, toSorted(e) {
  return tr(this).toSorted(e);
}, toSpliced(...e) {
  return tr(this).toSpliced(...e);
}, unshift(...e) {
  return Fr(this, "unshift", e);
}, values() {
  return Mi(this, "values", Gt);
} };
function Mi(e, t, n) {
  const r = ds(e), l = r[t]();
  return r !== e && !En(e) && (l._next = l.next, l.next = () => {
    const a = l._next();
    return a.value && (a.value = n(a.value)), a;
  }), l;
}
const r0 = Array.prototype;
function Nn(e, t, n, r, l, a) {
  const o = ds(e), i = o !== e && !En(e), u = o[t];
  if (u !== r0[t]) {
    const f = u.apply(e, a);
    return i ? Gt(f) : f;
  }
  let c = n;
  o !== e && (i ? c = function(f, h) {
    return n.call(this, Gt(f), h, e);
  } : n.length > 2 && (c = function(f, h) {
    return n.call(this, f, h, e);
  }));
  const s = u.call(o, c, r);
  return i && l ? l(s) : s;
}
function sc(e, t, n, r) {
  const l = ds(e);
  let a = n;
  return l !== e && (En(e) ? n.length > 3 && (a = function(o, i, u) {
    return n.call(this, o, i, u, e);
  }) : a = function(o, i, u) {
    return n.call(this, o, Gt(i), u, e);
  }), l[t](a, ...r);
}
function Ei(e, t, n) {
  const r = Ge(e);
  Wt(r, "iterate", ha);
  const l = r[t](...n);
  return (l === -1 || l === false) && hs(n[0]) ? (n[0] = Ge(n[0]), r[t](...n)) : l;
}
function Fr(e, t, n = []) {
  xl(), is();
  const r = Ge(e)[t].apply(e, n);
  return us(), Sl(), r;
}
const a0 = /* @__PURE__ */ ns("__proto__,__v_isRef,__isVue"), Zf = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(wl));
function o0(e) {
  wl(e) || (e = String(e));
  const t = Ge(this);
  return Wt(t, "has", e), t.hasOwnProperty(e);
}
class Jf {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const l = this._isReadonly, a = this._isShallow;
    if (n === "__v_isReactive") return !l;
    if (n === "__v_isReadonly") return l;
    if (n === "__v_isShallow") return a;
    if (n === "__v_raw") return r === (l ? a ? g0 : lv : a ? nv : tv).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = Ne(t);
    if (!l) {
      let u;
      if (o && (u = l0[n])) return u;
      if (n === "hasOwnProperty") return o0;
    }
    const i = Reflect.get(t, n, yt(t) ? t : r);
    return (wl(n) ? Zf.has(n) : a0(n)) || (l || Wt(t, "get", n), a) ? i : yt(i) ? o && as(n) ? i : i.value : St(i) ? l ? rv(i) : On(i) : i;
  }
}
class ev extends Jf {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, r, l) {
    let a = t[n];
    if (!this._isShallow) {
      const u = Kl(a);
      if (!En(r) && !Kl(r) && (a = Ge(a), r = Ge(r)), !Ne(t) && yt(a) && !yt(r)) return u ? false : (a.value = r, true);
    }
    const o = Ne(t) && as(n) ? Number(n) < t.length : st(t, n), i = Reflect.set(t, n, r, yt(t) ? t : l);
    return t === Ge(l) && (o ? bl(r, a) && Yn(t, "set", n, r) : Yn(t, "add", n, r)), i;
  }
  deleteProperty(t, n) {
    const r = st(t, n);
    t[n];
    const l = Reflect.deleteProperty(t, n);
    return l && r && Yn(t, "delete", n, void 0), l;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!wl(n) || !Zf.has(n)) && Wt(t, "has", n), r;
  }
  ownKeys(t) {
    return Wt(t, "iterate", Ne(t) ? "length" : Nl), Reflect.ownKeys(t);
  }
}
class i0 extends Jf {
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
const u0 = new ev(), s0 = new i0(), c0 = new ev(true);
const wu = (e) => e, Oa = (e) => Reflect.getPrototypeOf(e);
function d0(e, t, n) {
  return function(...r) {
    const l = this.__v_raw, a = Ge(l), o = mr(a), i = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, c = l[e](...r), s = n ? wu : t ? xu : Gt;
    return !t && Wt(a, "iterate", u ? _u : Nl), { next() {
      const { value: f, done: h } = c.next();
      return h ? { value: f, done: h } : { value: i ? [s(f[0]), s(f[1])] : s(f), done: h };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function Va(e) {
  return function(...t) {
    return e === "delete" ? false : e === "clear" ? void 0 : this;
  };
}
function f0(e, t) {
  const n = { get(l) {
    const a = this.__v_raw, o = Ge(a), i = Ge(l);
    e || (bl(l, i) && Wt(o, "get", l), Wt(o, "get", i));
    const { has: u } = Oa(o), c = t ? wu : e ? xu : Gt;
    if (u.call(o, l)) return c(a.get(l));
    if (u.call(o, i)) return c(a.get(i));
    a !== o && a.get(l);
  }, get size() {
    const l = this.__v_raw;
    return !e && Wt(Ge(l), "iterate", Nl), Reflect.get(l, "size", l);
  }, has(l) {
    const a = this.__v_raw, o = Ge(a), i = Ge(l);
    return e || (bl(l, i) && Wt(o, "has", l), Wt(o, "has", i)), l === i ? a.has(l) : a.has(l) || a.has(i);
  }, forEach(l, a) {
    const o = this, i = o.__v_raw, u = Ge(i), c = t ? wu : e ? xu : Gt;
    return !e && Wt(u, "iterate", Nl), i.forEach((s, f) => l.call(a, c(s), c(f), o));
  } };
  return It(n, e ? { add: Va("add"), set: Va("set"), delete: Va("delete"), clear: Va("clear") } : { add(l) {
    !t && !En(l) && !Kl(l) && (l = Ge(l));
    const a = Ge(this);
    return Oa(a).has.call(a, l) || (a.add(l), Yn(a, "add", l, l)), this;
  }, set(l, a) {
    !t && !En(a) && !Kl(a) && (a = Ge(a));
    const o = Ge(this), { has: i, get: u } = Oa(o);
    let c = i.call(o, l);
    c || (l = Ge(l), c = i.call(o, l));
    const s = u.call(o, l);
    return o.set(l, a), c ? bl(a, s) && Yn(o, "set", l, a) : Yn(o, "add", l, a), this;
  }, delete(l) {
    const a = Ge(this), { has: o, get: i } = Oa(a);
    let u = o.call(a, l);
    u || (l = Ge(l), u = o.call(a, l)), i && i.call(a, l);
    const c = a.delete(l);
    return u && Yn(a, "delete", l, void 0), c;
  }, clear() {
    const l = Ge(this), a = l.size !== 0, o = l.clear();
    return a && Yn(l, "clear", void 0, void 0), o;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
    n[l] = d0(l, e, t);
  }), n;
}
function fs(e, t) {
  const n = f0(e, t);
  return (r, l, a) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? r : Reflect.get(st(n, l) && l in r ? n : r, l, a);
}
const v0 = { get: fs(false, false) }, m0 = { get: fs(false, true) }, h0 = { get: fs(true, false) };
const tv = /* @__PURE__ */ new WeakMap(), nv = /* @__PURE__ */ new WeakMap(), lv = /* @__PURE__ */ new WeakMap(), g0 = /* @__PURE__ */ new WeakMap();
function b0(e) {
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
function p0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : b0(Ng(e));
}
function On(e) {
  return Kl(e) ? e : ms(e, false, u0, v0, tv);
}
function vs(e) {
  return ms(e, false, c0, m0, nv);
}
function rv(e) {
  return ms(e, true, s0, h0, lv);
}
function ms(e, t, n, r, l) {
  if (!St(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const a = l.get(e);
  if (a) return a;
  const o = p0(e);
  if (o === 0) return e;
  const i = new Proxy(e, o === 2 ? r : n);
  return l.set(e, i), i;
}
function la(e) {
  return Kl(e) ? la(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Kl(e) {
  return !!(e && e.__v_isReadonly);
}
function En(e) {
  return !!(e && e.__v_isShallow);
}
function hs(e) {
  return e ? !!e.__v_raw : false;
}
function Ge(e) {
  const t = e && e.__v_raw;
  return t ? Ge(t) : e;
}
function Go(e) {
  return !st(e, "__v_skip") && Object.isExtensible(e) && If(e, "__v_skip", true), e;
}
const Gt = (e) => St(e) ? On(e) : e, xu = (e) => St(e) ? rv(e) : e;
function yt(e) {
  return e ? e.__v_isRef === true : false;
}
function W(e) {
  return av(e, false);
}
function y0(e) {
  return av(e, true);
}
function av(e, t) {
  return yt(e) ? e : new _0(e, t);
}
class _0 {
  constructor(t, n) {
    this.dep = new cs(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Ge(t), this._value = n ? t : Gt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || En(t) || Kl(t);
    t = r ? t : Ge(t), bl(t, n) && (this._rawValue = t, this._value = r ? t : Gt(t), this.dep.trigger());
  }
}
function Ve(e) {
  return yt(e) ? e.value : e;
}
const w0 = { get: (e, t, n) => t === "__v_raw" ? e : Ve(Reflect.get(e, t, n)), set: (e, t, n, r) => {
  const l = e[t];
  return yt(l) && !yt(n) ? (l.value = n, true) : Reflect.set(e, t, n, r);
} };
function ov(e) {
  return la(e) ? e : new Proxy(e, w0);
}
class x0 {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new cs(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ma - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && bt !== this) return Qf(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return Yf(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function S0(e, t, n = false) {
  let r, l;
  return Ke(e) ? r = e : (r = e.get, l = e.set), new x0(r, l, n);
}
const Da = {}, yo = /* @__PURE__ */ new WeakMap();
let Bl;
function C0(e, t = false, n = Bl) {
  if (n) {
    let r = yo.get(n);
    r || yo.set(n, r = []), r.push(e);
  }
}
function k0(e, t, n = mt) {
  const { immediate: r, deep: l, once: a, scheduler: o, augmentJob: i, call: u } = n, c = (b) => l ? b : En(b) || l === false || l === 0 ? Xn(b, 1) : Xn(b);
  let s, f, h, m, g = false, _ = false;
  if (yt(e) ? (f = () => e.value, g = En(e)) : la(e) ? (f = () => c(e), g = true) : Ne(e) ? (_ = true, g = e.some((b) => la(b) || En(b)), f = () => e.map((b) => {
    if (yt(b)) return b.value;
    if (la(b)) return c(b);
    if (Ke(b)) return u ? u(b, 2) : b();
  })) : Ke(e) ? t ? f = u ? () => u(e, 2) : e : f = () => {
    if (h) {
      xl();
      try {
        h();
      } finally {
        Sl();
      }
    }
    const b = Bl;
    Bl = s;
    try {
      return u ? u(e, 3, [m]) : e(m);
    } finally {
      Bl = b;
    }
  } : f = Vn, t && l) {
    const b = f, C = l === true ? 1 / 0 : l;
    f = () => Xn(b(), C);
  }
  const w = e0(), T = () => {
    s.stop(), w && w.active && rs(w.effects, s);
  };
  if (a && t) {
    const b = t;
    t = (...C) => {
      b(...C), T();
    };
  }
  let y = _ ? new Array(e.length).fill(Da) : Da;
  const p = (b) => {
    if (!(!(s.flags & 1) || !s.dirty && !b)) if (t) {
      const C = s.run();
      if (l || g || (_ ? C.some((P, F) => bl(P, y[F])) : bl(C, y))) {
        h && h();
        const P = Bl;
        Bl = s;
        try {
          const F = [C, y === Da ? void 0 : _ && y[0] === Da ? [] : y, m];
          u ? u(t, 3, F) : t(...F), y = C;
        } finally {
          Bl = P;
        }
      }
    } else s.run();
  };
  return i && i(p), s = new jf(f), s.scheduler = o ? () => o(p, false) : p, m = (b) => C0(b, false, s), h = s.onStop = () => {
    const b = yo.get(s);
    if (b) {
      if (u) u(b, 4);
      else for (const C of b) C();
      yo.delete(s);
    }
  }, t ? r ? p(true) : y = s.run() : o ? o(p.bind(null, true), true) : s.run(), T.pause = s.pause.bind(s), T.resume = s.resume.bind(s), T.stop = T, T;
}
function Xn(e, t = 1 / 0, n) {
  if (t <= 0 || !St(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
  if (n.add(e), t--, yt(e)) Xn(e.value, t, n);
  else if (Ne(e)) for (let r = 0; r < e.length; r++) Xn(e[r], t, n);
  else if (Ff(e) || mr(e)) e.forEach((r) => {
    Xn(r, t, n);
  });
  else if (Df(e)) {
    for (const r in e) Xn(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Xn(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ra(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (l) {
    Zo(l, t, n);
  }
}
function An(e, t, n, r) {
  if (Ke(e)) {
    const l = Ra(e, t, n, r);
    return l && Of(l) && l.catch((a) => {
      Zo(a, t, n);
    }), l;
  }
  if (Ne(e)) {
    const l = [];
    for (let a = 0; a < e.length; a++) l.push(An(e[a], t, n, r));
    return l;
  }
}
function Zo(e, t, n, r = true) {
  const l = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: o } = t && t.appContext.config || mt;
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
      xl(), Ra(a, null, 10, [e, u, c]), Sl();
      return;
    }
  }
  T0(e, n, l, r, o);
}
function T0(e, t, n, r = true, l = false) {
  if (l) throw e;
  console.error(e);
}
const Zt = [];
let Bn = -1;
const hr = [];
let cl = null, sr = 0;
const iv = Promise.resolve();
let _o = null;
function Qe(e) {
  const t = _o || iv;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function q0(e) {
  let t = Bn + 1, n = Zt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, l = Zt[r], a = ga(l);
    a < e || a === e && l.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function gs(e) {
  if (!(e.flags & 1)) {
    const t = ga(e), n = Zt[Zt.length - 1];
    !n || !(e.flags & 2) && t >= ga(n) ? Zt.push(e) : Zt.splice(q0(t), 0, e), e.flags |= 1, uv();
  }
}
function uv() {
  _o || (_o = iv.then(cv));
}
function M0(e) {
  Ne(e) ? hr.push(...e) : cl && e.id === -1 ? cl.splice(sr + 1, 0, e) : e.flags & 1 || (hr.push(e), e.flags |= 1), uv();
}
function cc(e, t, n = Bn + 1) {
  for (; n < Zt.length; n++) {
    const r = Zt[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      Zt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function sv(e) {
  if (hr.length) {
    const t = [...new Set(hr)].sort((n, r) => ga(n) - ga(r));
    if (hr.length = 0, cl) {
      cl.push(...t);
      return;
    }
    for (cl = t, sr = 0; sr < cl.length; sr++) {
      const n = cl[sr];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    cl = null, sr = 0;
  }
}
const ga = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function cv(e) {
  try {
    for (Bn = 0; Bn < Zt.length; Bn++) {
      const t = Zt[Bn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ra(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Bn < Zt.length; Bn++) {
      const t = Zt[Bn];
      t && (t.flags &= -2);
    }
    Bn = -1, Zt.length = 0, sv(), _o = null, (Zt.length || hr.length) && cv();
  }
}
let ln = null, dv = null;
function wo(e) {
  const t = ln;
  return ln = e, dv = e && e.type.__scopeId || null, t;
}
function At(e, t = ln, n) {
  if (!t || e._n) return e;
  const r = (...l) => {
    r._d && Sc(-1);
    const a = wo(t);
    let o;
    try {
      o = e(...l);
    } finally {
      wo(a), r._d && Sc(1);
    }
    return o;
  };
  return r._n = true, r._c = true, r._d = true, r;
}
function cn(e, t) {
  if (ln === null) return e;
  const n = ii(ln), r = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [a, o, i, u = mt] = t[l];
    a && (Ke(a) && (a = { mounted: a, updated: a }), a.deep && Xn(o), r.push({ dir: a, instance: n, value: o, oldValue: void 0, arg: i, modifiers: u }));
  }
  return e;
}
function Ml(e, t, n, r) {
  const l = e.dirs, a = t && t.dirs;
  for (let o = 0; o < l.length; o++) {
    const i = l[o];
    a && (i.oldValue = a[o].value);
    let u = i.dir[r];
    u && (xl(), An(u, n, 8, [e.el, i, e, t]), Sl());
  }
}
const fv = Symbol("_vte"), vv = (e) => e.__isTeleport, ra = (e) => e && (e.disabled || e.disabled === ""), dc = (e) => e && (e.defer || e.defer === ""), fc = (e) => typeof SVGElement < "u" && e instanceof SVGElement, vc = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Su = (e, t) => {
  const n = e && e.to;
  return Pt(n) ? t ? t(n) : null : n;
}, mv = { name: "Teleport", __isTeleport: true, process(e, t, n, r, l, a, o, i, u, c) {
  const { mc: s, pc: f, pbc: h, o: { insert: m, querySelector: g, createText: _, createComment: w } } = c, T = ra(t.props);
  let { shapeFlag: y, children: p, dynamicChildren: b } = t;
  if (e == null) {
    const C = t.el = _(""), P = t.anchor = _("");
    m(C, n, r), m(P, n, r);
    const F = ($, L) => {
      y & 16 && (l && l.isCE && (l.ce._teleportTarget = $), s(p, $, L, l, a, o, i, u));
    }, j = () => {
      const $ = t.target = Su(t.props, g), L = hv($, t, _, m);
      $ && (o !== "svg" && fc($) ? o = "svg" : o !== "mathml" && vc($) && (o = "mathml"), T || (F($, L), ao(t, false)));
    };
    T && (F(n, P), ao(t, true)), dc(t.props) ? Ft(() => {
      j(), t.el.__isMounted = true;
    }, a) : j();
  } else {
    if (dc(t.props) && !e.el.__isMounted) {
      Ft(() => {
        mv.process(e, t, n, r, l, a, o, i, u, c), delete e.el.__isMounted;
      }, a);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const C = t.anchor = e.anchor, P = t.target = e.target, F = t.targetAnchor = e.targetAnchor, j = ra(e.props), $ = j ? n : P, L = j ? C : F;
    if (o === "svg" || fc(P) ? o = "svg" : (o === "mathml" || vc(P)) && (o = "mathml"), b ? (h(e.dynamicChildren, b, $, l, a, o, i), _s(e, t, true)) : u || f(e, t, $, L, l, a, o, i, false), T) j ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ia(t, n, C, c, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const H = t.target = Su(t.props, g);
      H && Ia(t, H, null, c, 0);
    } else j && Ia(t, P, F, c, 1);
    ao(t, T);
  }
}, remove(e, t, n, { um: r, o: { remove: l } }, a) {
  const { shapeFlag: o, children: i, anchor: u, targetStart: c, targetAnchor: s, target: f, props: h } = e;
  if (f && (l(c), l(s)), a && l(u), o & 16) {
    const m = a || !ra(h);
    for (let g = 0; g < i.length; g++) {
      const _ = i[g];
      r(_, t, n, m, !!_.dynamicChildren);
    }
  }
}, move: Ia, hydrate: E0 };
function Ia(e, t, n, { o: { insert: r }, m: l }, a = 2) {
  a === 0 && r(e.targetAnchor, t, n);
  const { el: o, anchor: i, shapeFlag: u, children: c, props: s } = e, f = a === 2;
  if (f && r(o, t, n), (!f || ra(s)) && u & 16) for (let h = 0; h < c.length; h++) l(c[h], t, n, 2);
  f && r(i, t, n);
}
function E0(e, t, n, r, l, a, { o: { nextSibling: o, parentNode: i, querySelector: u, insert: c, createText: s } }, f) {
  const h = t.target = Su(t.props, u);
  if (h) {
    const m = ra(t.props), g = h._lpa || h.firstChild;
    if (t.shapeFlag & 16) if (m) t.anchor = f(o(e), t, i(e), n, r, l, a), t.targetStart = g, t.targetAnchor = g && o(g);
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
      t.targetAnchor || hv(h, t, s, c), f(g && o(g), t, h, n, r, l, a);
    }
    ao(t, m);
  }
  return t.anchor && o(t.anchor);
}
const R0 = mv;
function ao(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, l;
    for (t ? (r = e.el, l = e.anchor) : (r = e.targetStart, l = e.targetAnchor); r && r !== l; ) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function hv(e, t, n, r) {
  const l = t.targetStart = n(""), a = t.targetAnchor = n("");
  return l[fv] = a, e && (r(l, e), r(a, e)), a;
}
const dl = Symbol("_leaveCb"), za = Symbol("_enterCb");
function gv() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return ct(() => {
    e.isMounted = true;
  }), We(() => {
    e.isUnmounting = true;
  }), e;
}
const fn = [Function, Array], bv = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: fn, onEnter: fn, onAfterEnter: fn, onEnterCancelled: fn, onBeforeLeave: fn, onLeave: fn, onAfterLeave: fn, onLeaveCancelled: fn, onBeforeAppear: fn, onAppear: fn, onAfterAppear: fn, onAppearCancelled: fn }, pv = (e) => {
  const t = e.subTree;
  return t.component ? pv(t.component) : t;
}, A0 = { name: "BaseTransition", props: bv, setup(e, { slots: t }) {
  const n = xe(), r = gv();
  return () => {
    const l = t.default && bs(t.default(), true);
    if (!l || !l.length) return;
    const a = yv(l), o = Ge(e), { mode: i } = o;
    if (r.isLeaving) return Ri(a);
    const u = mc(a);
    if (!u) return Ri(a);
    let c = ba(u, o, r, n, (f) => c = f);
    u.type !== Jt && _l(u, c);
    let s = n.subTree && mc(n.subTree);
    if (s && s.type !== Jt && !hl(u, s) && pv(n).type !== Jt) {
      let f = ba(s, o, r, n);
      if (_l(s, f), i === "out-in" && u.type !== Jt) return r.isLeaving = true, f.afterLeave = () => {
        r.isLeaving = false, n.job.flags & 8 || n.update(), delete f.afterLeave, s = void 0;
      }, Ri(a);
      i === "in-out" && u.type !== Jt ? f.delayLeave = (h, m, g) => {
        const _ = _v(r, s);
        _[String(s.key)] = s, h[dl] = () => {
          m(), h[dl] = void 0, delete c.delayedLeave, s = void 0;
        }, c.delayedLeave = () => {
          g(), delete c.delayedLeave, s = void 0;
        };
      } : s = void 0;
    } else s && (s = void 0);
    return a;
  };
} };
function yv(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== Jt) {
      t = n;
      break;
    }
  }
  return t;
}
const P0 = A0;
function _v(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function ba(e, t, n, r, l) {
  const { appear: a, mode: o, persisted: i = false, onBeforeEnter: u, onEnter: c, onAfterEnter: s, onEnterCancelled: f, onBeforeLeave: h, onLeave: m, onAfterLeave: g, onLeaveCancelled: _, onBeforeAppear: w, onAppear: T, onAfterAppear: y, onAppearCancelled: p } = t, b = String(e.key), C = _v(n, e), P = ($, L) => {
    $ && An($, r, 9, L);
  }, F = ($, L) => {
    const H = L[1];
    P($, L), Ne($) ? $.every((q) => q.length <= 1) && H() : $.length <= 1 && H();
  }, j = { mode: o, persisted: i, beforeEnter($) {
    let L = u;
    if (!n.isMounted) if (a) L = w || u;
    else return;
    $[dl] && $[dl](true);
    const H = C[b];
    H && hl(e, H) && H.el[dl] && H.el[dl](), P(L, [$]);
  }, enter($) {
    let L = c, H = s, q = f;
    if (!n.isMounted) if (a) L = T || c, H = y || s, q = p || f;
    else return;
    let A = false;
    const k = $[za] = (U) => {
      A || (A = true, U ? P(q, [$]) : P(H, [$]), j.delayedLeave && j.delayedLeave(), $[za] = void 0);
    };
    L ? F(L, [$, k]) : k();
  }, leave($, L) {
    const H = String(e.key);
    if ($[za] && $[za](true), n.isUnmounting) return L();
    P(h, [$]);
    let q = false;
    const A = $[dl] = (k) => {
      q || (q = true, L(), k ? P(_, [$]) : P(g, [$]), $[dl] = void 0, C[H] === e && delete C[H]);
    };
    C[H] = e, m ? F(m, [$, A]) : A();
  }, clone($) {
    const L = ba($, t, n, r, l);
    return l && l(L), L;
  } };
  return j;
}
function Ri(e) {
  if (Jo(e)) return e = Gn(e), e.children = null, e;
}
function mc(e) {
  if (!Jo(e)) return vv(e.type) && e.children ? yv(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && Ke(n.default)) return n.default();
  }
}
function _l(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, _l(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function bs(e, t = false, n) {
  let r = [], l = 0;
  for (let a = 0; a < e.length; a++) {
    let o = e[a];
    const i = n == null ? o.key : String(n) + String(o.key != null ? o.key : a);
    o.type === nn ? (o.patchFlag & 128 && l++, r = r.concat(bs(o.children, t, i))) : (t || o.type !== Jt) && r.push(i != null ? Gn(o, { key: i }) : o);
  }
  if (l > 1) for (let a = 0; a < r.length; a++) r[a].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Cl(e, t) {
  return Ke(e) ? It({ name: e.name }, t, { setup: e }) : e;
}
function wv(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function xo(e, t, n, r, l = false) {
  if (Ne(e)) {
    e.forEach((g, _) => xo(g, t && (Ne(t) ? t[_] : t), n, r, l));
    return;
  }
  if (gr(r) && !l) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && xo(e, t, n, r.component.subTree);
    return;
  }
  const a = r.shapeFlag & 4 ? ii(r.component) : r.el, o = l ? null : a, { i, r: u } = e, c = t && t.r, s = i.refs === mt ? i.refs = {} : i.refs, f = i.setupState, h = Ge(f), m = f === mt ? () => false : (g) => st(h, g);
  if (c != null && c !== u && (Pt(c) ? (s[c] = null, m(c) && (f[c] = null)) : yt(c) && (c.value = null)), Ke(u)) Ra(u, i, 12, [o, s]);
  else {
    const g = Pt(u), _ = yt(u);
    if (g || _) {
      const w = () => {
        if (e.f) {
          const T = g ? m(u) ? f[u] : s[u] : u.value;
          l ? Ne(T) && rs(T, a) : Ne(T) ? T.includes(a) || T.push(a) : g ? (s[u] = [a], m(u) && (f[u] = s[u])) : (u.value = [a], e.k && (s[e.k] = u.value));
        } else g ? (s[u] = o, m(u) && (f[u] = o)) : _ && (u.value = o, e.k && (s[e.k] = o));
      };
      o ? (w.id = -1, Ft(w, n)) : w();
    }
  }
}
Ea().requestIdleCallback;
Ea().cancelIdleCallback;
const gr = (e) => !!e.type.__asyncLoader, Jo = (e) => e.type.__isKeepAlive, $0 = { name: "KeepAlive", __isKeepAlive: true, props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] }, setup(e, { slots: t }) {
  const n = xe(), r = n.ctx;
  if (!r.renderer) return () => {
    const y = t.default && t.default();
    return y && y.length === 1 ? y[0] : y;
  };
  const l = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
  let o = null;
  const i = n.suspense, { renderer: { p: u, m: c, um: s, o: { createElement: f } } } = r, h = f("div");
  r.activate = (y, p, b, C, P) => {
    const F = y.component;
    c(y, p, b, 0, i), u(F.vnode, y, p, b, F, i, C, y.slotScopeIds, P), Ft(() => {
      F.isDeactivated = false, F.a && ea(F.a);
      const j = y.props && y.props.onVnodeMounted;
      j && mn(j, F.parent, y);
    }, i);
  }, r.deactivate = (y) => {
    const p = y.component;
    Co(p.m), Co(p.a), c(y, h, null, 1, i), Ft(() => {
      p.da && ea(p.da);
      const b = y.props && y.props.onVnodeUnmounted;
      b && mn(b, p.parent, y), p.isDeactivated = true;
    }, i);
  };
  function m(y) {
    Ai(y), s(y, n, i, true);
  }
  function g(y) {
    l.forEach((p, b) => {
      const C = Eu(p.type);
      C && !y(C) && _(b);
    });
  }
  function _(y) {
    const p = l.get(y);
    p && (!o || !hl(p, o)) ? m(p) : o && Ai(o), l.delete(y), a.delete(y);
  }
  ge(() => [e.include, e.exclude], ([y, p]) => {
    y && g((b) => Kr(y, b)), p && g((b) => !Kr(p, b));
  }, { flush: "post", deep: true });
  let w = null;
  const T = () => {
    w != null && (ko(n.subTree.type) ? Ft(() => {
      l.set(w, Na(n.subTree));
    }, n.subTree.suspense) : l.set(w, Na(n.subTree)));
  };
  return ct(T), ni(T), We(() => {
    l.forEach((y) => {
      const { subTree: p, suspense: b } = n, C = Na(p);
      if (y.type === C.type && y.key === C.key) {
        Ai(C);
        const P = C.component.da;
        P && Ft(P, b);
        return;
      }
      m(y);
    });
  }), () => {
    if (w = null, !t.default) return o = null;
    const y = t.default(), p = y[0];
    if (y.length > 1) return o = null, y;
    if (!ya(p) || !(p.shapeFlag & 4) && !(p.shapeFlag & 128)) return o = null, p;
    let b = Na(p);
    if (b.type === Jt) return o = null, b;
    const C = b.type, P = Eu(gr(b) ? b.type.__asyncResolved || {} : C), { include: F, exclude: j, max: $ } = e;
    if (F && (!P || !Kr(F, P)) || j && P && Kr(j, P)) return b.shapeFlag &= -257, o = b, p;
    const L = b.key == null ? C : b.key, H = l.get(L);
    return b.el && (b = Gn(b), p.shapeFlag & 128 && (p.ssContent = b)), w = L, H ? (b.el = H.el, b.component = H.component, b.transition && _l(b, b.transition), b.shapeFlag |= 512, a.delete(L), a.add(L)) : (a.add(L), $ && a.size > parseInt($, 10) && _(a.values().next().value)), b.shapeFlag |= 256, o = b, ko(p.type) ? p : b;
  };
} }, xv = $0;
function Kr(e, t) {
  return Ne(e) ? e.some((n) => Kr(n, t)) : Pt(e) ? e.split(",").includes(t) : zg(e) ? (e.lastIndex = 0, e.test(t)) : false;
}
function kl(e, t) {
  Sv(e, "a", t);
}
function Dn(e, t) {
  Sv(e, "da", t);
}
function Sv(e, t, n = jt) {
  const r = e.__wdc || (e.__wdc = () => {
    let l = n;
    for (; l; ) {
      if (l.isDeactivated) return;
      l = l.parent;
    }
    return e();
  });
  if (ei(t, r, n), n) {
    let l = n.parent;
    for (; l && l.parent; ) Jo(l.parent.vnode) && L0(r, t, n, l), l = l.parent;
  }
}
function L0(e, t, n, r) {
  const l = ei(t, e, r, true);
  li(() => {
    rs(r[t], l);
  }, n);
}
function Ai(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function Na(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function ei(e, t, n = jt, r = false) {
  if (n) {
    const l = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...o) => {
      xl();
      const i = Aa(n), u = An(t, n, e, o);
      return i(), Sl(), u;
    });
    return r ? l.unshift(a) : l.push(a), a;
  }
}
const Jn = (e) => (t, n = jt) => {
  (!_a || e === "sp") && ei(e, (...r) => t(...r), n);
}, ti = Jn("bm"), ct = Jn("m"), Rr = Jn("bu"), ni = Jn("u"), We = Jn("bum"), li = Jn("um"), B0 = Jn("sp"), F0 = Jn("rtg"), O0 = Jn("rtc");
function V0(e, t = jt) {
  ei("ec", e, t);
}
const Cv = "components", D0 = "directives";
function ps(e, t) {
  return kv(Cv, e, true, t) || e;
}
const I0 = Symbol.for("v-ndc");
function z0(e) {
  return kv(D0, e);
}
function kv(e, t, n = true, r = false) {
  const l = ln || jt;
  if (l) {
    const a = l.type;
    if (e === Cv) {
      const i = Eu(a, false);
      if (i && (i === t || i === pn(t) || i === Yo(pn(t)))) return a;
    }
    const o = hc(l[e] || a[e], t) || hc(l.appContext[e], t);
    return !o && r ? a : o;
  }
}
function hc(e, t) {
  return e && (e[t] || e[pn(t)] || e[Yo(pn(t))]);
}
const Cu = (e) => e ? jv(e) ? ii(e) : Cu(e.parent) : null, aa = It(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => Cu(e.parent), $root: (e) => Cu(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => qv(e), $forceUpdate: (e) => e.f || (e.f = () => {
  gs(e.update);
}), $nextTick: (e) => e.n || (e.n = Qe.bind(e.proxy)), $watch: (e) => sb.bind(e) }), Pi = (e, t) => e !== mt && !e.__isScriptSetup && st(e, t), N0 = { get({ _: e }, t) {
  if (t === "__v_skip") return true;
  const { ctx: n, setupState: r, data: l, props: a, accessCache: o, type: i, appContext: u } = e;
  let c;
  if (t[0] !== "$") {
    const m = o[t];
    if (m !== void 0) switch (m) {
      case 1:
        return r[t];
      case 2:
        return l[t];
      case 4:
        return n[t];
      case 3:
        return a[t];
    }
    else {
      if (Pi(r, t)) return o[t] = 1, r[t];
      if (l !== mt && st(l, t)) return o[t] = 2, l[t];
      if ((c = e.propsOptions[0]) && st(c, t)) return o[t] = 3, a[t];
      if (n !== mt && st(n, t)) return o[t] = 4, n[t];
      ku && (o[t] = 0);
    }
  }
  const s = aa[t];
  let f, h;
  if (s) return t === "$attrs" && Wt(e.attrs, "get", ""), s(e);
  if ((f = i.__cssModules) && (f = f[t])) return f;
  if (n !== mt && st(n, t)) return o[t] = 4, n[t];
  if (h = u.config.globalProperties, st(h, t)) return h[t];
}, set({ _: e }, t, n) {
  const { data: r, setupState: l, ctx: a } = e;
  return Pi(l, t) ? (l[t] = n, true) : r !== mt && st(r, t) ? (r[t] = n, true) : st(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (a[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: l, propsOptions: a } }, o) {
  let i;
  return !!n[o] || e !== mt && st(e, o) || Pi(t, o) || (i = a[0]) && st(i, o) || st(r, o) || st(aa, o) || st(l.config.globalProperties, o);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : st(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function gc(e) {
  return Ne(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let ku = true;
function H0(e) {
  const t = qv(e), n = e.proxy, r = e.ctx;
  ku = false, t.beforeCreate && bc(t.beforeCreate, e, "bc");
  const { data: l, computed: a, methods: o, watch: i, provide: u, inject: c, created: s, beforeMount: f, mounted: h, beforeUpdate: m, updated: g, activated: _, deactivated: w, beforeDestroy: T, beforeUnmount: y, destroyed: p, unmounted: b, render: C, renderTracked: P, renderTriggered: F, errorCaptured: j, serverPrefetch: $, expose: L, inheritAttrs: H, components: q, directives: A, filters: k } = t;
  if (c && j0(c, r, null), o) for (const Y in o) {
    const X = o[Y];
    Ke(X) && (r[Y] = X.bind(n));
  }
  if (l) {
    const Y = l.call(n, n);
    St(Y) && (e.data = On(Y));
  }
  if (ku = true, a) for (const Y in a) {
    const X = a[Y], le = Ke(X) ? X.bind(n, n) : Ke(X.get) ? X.get.bind(n, n) : Vn, ye = !Ke(X) && Ke(X.set) ? X.set.bind(n) : Vn, R = v({ get: le, set: ye });
    Object.defineProperty(r, Y, { enumerable: true, configurable: true, get: () => R.value, set: (x) => R.value = x });
  }
  if (i) for (const Y in i) Tv(i[Y], r, n, Y);
  if (u) {
    const Y = Ke(u) ? u.call(n) : u;
    Reflect.ownKeys(Y).forEach((X) => {
      gn(X, Y[X]);
    });
  }
  s && bc(s, e, "c");
  function Q(Y, X) {
    Ne(X) ? X.forEach((le) => Y(le.bind(n))) : X && Y(X.bind(n));
  }
  if (Q(ti, f), Q(ct, h), Q(Rr, m), Q(ni, g), Q(kl, _), Q(Dn, w), Q(V0, j), Q(O0, P), Q(F0, F), Q(We, y), Q(li, b), Q(B0, $), Ne(L)) if (L.length) {
    const Y = e.exposed || (e.exposed = {});
    L.forEach((X) => {
      Object.defineProperty(Y, X, { get: () => n[X], set: (le) => n[X] = le });
    });
  } else e.exposed || (e.exposed = {});
  C && e.render === Vn && (e.render = C), H != null && (e.inheritAttrs = H), q && (e.components = q), A && (e.directives = A), $ && wv(e);
}
function j0(e, t, n = Vn) {
  Ne(e) && (e = Tu(e));
  for (const r in e) {
    const l = e[r];
    let a;
    St(l) ? "default" in l ? a = Mt(l.from || r, l.default, true) : a = Mt(l.from || r) : a = Mt(l), yt(a) ? Object.defineProperty(t, r, { enumerable: true, configurable: true, get: () => a.value, set: (o) => a.value = o }) : t[r] = a;
  }
}
function bc(e, t, n) {
  An(Ne(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Tv(e, t, n, r) {
  let l = r.includes(".") ? Iv(n, r) : () => n[r];
  if (Pt(e)) {
    const a = t[e];
    Ke(a) && ge(l, a);
  } else if (Ke(e)) ge(l, e.bind(n));
  else if (St(e)) if (Ne(e)) e.forEach((a) => Tv(a, t, n, r));
  else {
    const a = Ke(e.handler) ? e.handler.bind(n) : t[e.handler];
    Ke(a) && ge(l, a, e);
  }
}
function qv(e) {
  const t = e.type, { mixins: n, extends: r } = t, { mixins: l, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, i = a.get(t);
  let u;
  return i ? u = i : !l.length && !n && !r ? u = t : (u = {}, l.length && l.forEach((c) => So(u, c, o, true)), So(u, t, o)), St(t) && a.set(t, u), u;
}
function So(e, t, n, r = false) {
  const { mixins: l, extends: a } = t;
  a && So(e, a, n, true), l && l.forEach((o) => So(e, o, n, true));
  for (const o in t) if (!(r && o === "expose")) {
    const i = U0[o] || n && n[o];
    e[o] = i ? i(e[o], t[o]) : t[o];
  }
  return e;
}
const U0 = { data: pc, props: yc, emits: yc, methods: Wr, computed: Wr, beforeCreate: Xt, created: Xt, beforeMount: Xt, mounted: Xt, beforeUpdate: Xt, updated: Xt, beforeDestroy: Xt, beforeUnmount: Xt, destroyed: Xt, unmounted: Xt, activated: Xt, deactivated: Xt, errorCaptured: Xt, serverPrefetch: Xt, components: Wr, directives: Wr, watch: K0, provide: pc, inject: Q0 };
function pc(e, t) {
  return t ? e ? function() {
    return It(Ke(e) ? e.call(this, this) : e, Ke(t) ? t.call(this, this) : t);
  } : t : e;
}
function Q0(e, t) {
  return Wr(Tu(e), Tu(t));
}
function Tu(e) {
  if (Ne(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Xt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Wr(e, t) {
  return e ? It(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function yc(e, t) {
  return e ? Ne(e) && Ne(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : It(/* @__PURE__ */ Object.create(null), gc(e), gc(t ?? {})) : t;
}
function K0(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = It(/* @__PURE__ */ Object.create(null), e);
  for (const r in t) n[r] = Xt(e[r], t[r]);
  return n;
}
function Mv() {
  return { app: null, config: { isNativeTag: Dg, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let W0 = 0;
function Y0(e, t) {
  return function(r, l = null) {
    Ke(r) || (r = It({}, r)), l != null && !St(l) && (l = null);
    const a = Mv(), o = /* @__PURE__ */ new WeakSet(), i = [];
    let u = false;
    const c = a.app = { _uid: W0++, _component: r, _props: l, _container: null, _context: a, _instance: null, version: Rb, get config() {
      return a.config;
    }, set config(s) {
    }, use(s, ...f) {
      return o.has(s) || (s && Ke(s.install) ? (o.add(s), s.install(c, ...f)) : Ke(s) && (o.add(s), s(c, ...f))), c;
    }, mixin(s) {
      return a.mixins.includes(s) || a.mixins.push(s), c;
    }, component(s, f) {
      return f ? (a.components[s] = f, c) : a.components[s];
    }, directive(s, f) {
      return f ? (a.directives[s] = f, c) : a.directives[s];
    }, mount(s, f, h) {
      if (!u) {
        const m = c._ceVNode || Ye(r, l);
        return m.appContext = a, h === true ? h = "svg" : h === false && (h = void 0), e(m, s, h), u = true, c._container = s, s.__vue_app__ = c, ii(m.component);
      }
    }, onUnmount(s) {
      i.push(s);
    }, unmount() {
      u && (An(i, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
    }, provide(s, f) {
      return a.provides[s] = f, c;
    }, runWithContext(s) {
      const f = br;
      br = c;
      try {
        return s();
      } finally {
        br = f;
      }
    } };
    return c;
  };
}
let br = null;
function gn(e, t) {
  if (jt) {
    let n = jt.provides;
    const r = jt.parent && jt.parent.provides;
    r === n && (n = jt.provides = Object.create(r)), n[e] = t;
  }
}
function Mt(e, t, n = false) {
  const r = jt || ln;
  if (r || br) {
    const l = br ? br._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (l && e in l) return l[e];
    if (arguments.length > 1) return n && Ke(t) ? t.call(r && r.proxy) : t;
  }
}
const Ev = {}, Rv = () => Object.create(Ev), Av = (e) => Object.getPrototypeOf(e) === Ev;
function X0(e, t, n, r = false) {
  const l = {}, a = Rv();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Pv(e, t, l, a);
  for (const o in e.propsOptions[0]) o in l || (l[o] = void 0);
  n ? e.props = r ? l : vs(l) : e.type.props ? e.props = l : e.props = a, e.attrs = a;
}
function G0(e, t, n, r) {
  const { props: l, attrs: a, vnode: { patchFlag: o } } = e, i = Ge(l), [u] = e.propsOptions;
  let c = false;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const s = e.vnode.dynamicProps;
      for (let f = 0; f < s.length; f++) {
        let h = s[f];
        if (ri(e.emitsOptions, h)) continue;
        const m = t[h];
        if (u) if (st(a, h)) m !== a[h] && (a[h] = m, c = true);
        else {
          const g = pn(h);
          l[g] = qu(u, i, g, m, e, false);
        }
        else m !== a[h] && (a[h] = m, c = true);
      }
    }
  } else {
    Pv(e, t, l, a) && (c = true);
    let s;
    for (const f in i) (!t || !st(t, f) && ((s = Gl(f)) === f || !st(t, s))) && (u ? n && (n[f] !== void 0 || n[s] !== void 0) && (l[f] = qu(u, i, f, void 0, e, true)) : delete l[f]);
    if (a !== i) for (const f in a) (!t || !st(t, f)) && (delete a[f], c = true);
  }
  c && Yn(e.attrs, "set", "");
}
function Pv(e, t, n, r) {
  const [l, a] = e.propsOptions;
  let o = false, i;
  if (t) for (let u in t) {
    if (Jr(u)) continue;
    const c = t[u];
    let s;
    l && st(l, s = pn(u)) ? !a || !a.includes(s) ? n[s] = c : (i || (i = {}))[s] = c : ri(e.emitsOptions, u) || (!(u in r) || c !== r[u]) && (r[u] = c, o = true);
  }
  if (a) {
    const u = Ge(n), c = i || mt;
    for (let s = 0; s < a.length; s++) {
      const f = a[s];
      n[f] = qu(l, u, f, c[f], e, !st(c, f));
    }
  }
  return o;
}
function qu(e, t, n, r, l, a) {
  const o = e[n];
  if (o != null) {
    const i = st(o, "default");
    if (i && r === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && Ke(u)) {
        const { propsDefaults: c } = l;
        if (n in c) r = c[n];
        else {
          const s = Aa(l);
          r = c[n] = u.call(null, t), s();
        }
      } else r = u;
      l.ce && l.ce._setProp(n, r);
    }
    o[0] && (a && !i ? r = false : o[1] && (r === "" || r === Gl(n)) && (r = true));
  }
  return r;
}
const Z0 = /* @__PURE__ */ new WeakMap();
function $v(e, t, n = false) {
  const r = n ? Z0 : t.propsCache, l = r.get(e);
  if (l) return l;
  const a = e.props, o = {}, i = [];
  let u = false;
  if (!Ke(e)) {
    const s = (f) => {
      u = true;
      const [h, m] = $v(f, t, true);
      It(o, h), m && i.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  if (!a && !u) return St(e) && r.set(e, vr), vr;
  if (Ne(a)) for (let s = 0; s < a.length; s++) {
    const f = pn(a[s]);
    _c(f) && (o[f] = mt);
  }
  else if (a) for (const s in a) {
    const f = pn(s);
    if (_c(f)) {
      const h = a[s], m = o[f] = Ne(h) || Ke(h) ? { type: h } : It({}, h), g = m.type;
      let _ = false, w = true;
      if (Ne(g)) for (let T = 0; T < g.length; ++T) {
        const y = g[T], p = Ke(y) && y.name;
        if (p === "Boolean") {
          _ = true;
          break;
        } else p === "String" && (w = false);
      }
      else _ = Ke(g) && g.name === "Boolean";
      m[0] = _, m[1] = w, (_ || st(m, "default")) && i.push(f);
    }
  }
  const c = [o, i];
  return St(e) && r.set(e, c), c;
}
function _c(e) {
  return e[0] !== "$" && !Jr(e);
}
const Lv = (e) => e[0] === "_" || e === "$stable", ys = (e) => Ne(e) ? e.map(Fn) : [Fn(e)], J0 = (e, t, n) => {
  if (t._n) return t;
  const r = At((...l) => ys(t(...l)), n);
  return r._c = false, r;
}, Bv = (e, t, n) => {
  const r = e._ctx;
  for (const l in e) {
    if (Lv(l)) continue;
    const a = e[l];
    if (Ke(a)) t[l] = J0(l, a, r);
    else if (a != null) {
      const o = ys(a);
      t[l] = () => o;
    }
  }
}, Fv = (e, t) => {
  const n = ys(t);
  e.slots.default = () => n;
}, Ov = (e, t, n) => {
  for (const r in t) (n || r !== "_") && (e[r] = t[r]);
}, eb = (e, t, n) => {
  const r = e.slots = Rv();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (Ov(r, t, n), n && If(r, "_", l, true)) : Bv(t, r);
  } else t && Fv(e, t);
}, tb = (e, t, n) => {
  const { vnode: r, slots: l } = e;
  let a = true, o = mt;
  if (r.shapeFlag & 32) {
    const i = t._;
    i ? n && i === 1 ? a = false : Ov(l, t, n) : (a = !t.$stable, Bv(t, l)), o = t;
  } else t && (Fv(e, t), o = { default: 1 });
  if (a) for (const i in l) !Lv(i) && o[i] == null && delete l[i];
};
function nb() {
  typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && (Ea().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false);
}
const Ft = bb;
function lb(e) {
  return rb(e);
}
function rb(e, t) {
  nb();
  const n = Ea();
  n.__VUE__ = true;
  const { insert: r, remove: l, patchProp: a, createElement: o, createText: i, createComment: u, setText: c, setElementText: s, parentNode: f, nextSibling: h, setScopeId: m = Vn, insertStaticContent: g } = e, _ = (S, E, z, te = null, D = null, I = null, se = void 0, me = null, fe = !!E.dynamicChildren) => {
    if (S === E) return;
    S && !hl(S, E) && (te = M(S), x(S, D, I, true), S = null), E.patchFlag === -2 && (fe = false, E.dynamicChildren = null);
    const { type: de, ref: re, shapeFlag: K } = E;
    switch (de) {
      case ai:
        w(S, E, z, te);
        break;
      case Jt:
        T(S, E, z, te);
        break;
      case Li:
        S == null && y(E, z, te, se);
        break;
      case nn:
        q(S, E, z, te, D, I, se, me, fe);
        break;
      default:
        K & 1 ? C(S, E, z, te, D, I, se, me, fe) : K & 6 ? A(S, E, z, te, D, I, se, me, fe) : (K & 64 || K & 128) && de.process(S, E, z, te, D, I, se, me, fe, ne);
    }
    re != null && D && xo(re, S && S.ref, I, E || S, !E);
  }, w = (S, E, z, te) => {
    if (S == null) r(E.el = i(E.children), z, te);
    else {
      const D = E.el = S.el;
      E.children !== S.children && c(D, E.children);
    }
  }, T = (S, E, z, te) => {
    S == null ? r(E.el = u(E.children || ""), z, te) : E.el = S.el;
  }, y = (S, E, z, te) => {
    [S.el, S.anchor] = g(S.children, E, z, te, S.el, S.anchor);
  }, p = ({ el: S, anchor: E }, z, te) => {
    let D;
    for (; S && S !== E; ) D = h(S), r(S, z, te), S = D;
    r(E, z, te);
  }, b = ({ el: S, anchor: E }) => {
    let z;
    for (; S && S !== E; ) z = h(S), l(S), S = z;
    l(E);
  }, C = (S, E, z, te, D, I, se, me, fe) => {
    E.type === "svg" ? se = "svg" : E.type === "math" && (se = "mathml"), S == null ? P(E, z, te, D, I, se, me, fe) : $(S, E, D, I, se, me, fe);
  }, P = (S, E, z, te, D, I, se, me) => {
    let fe, de;
    const { props: re, shapeFlag: K, transition: ie, dirs: we } = S;
    if (fe = S.el = o(S.type, I, re && re.is, re), K & 8 ? s(fe, S.children) : K & 16 && j(S.children, fe, null, te, D, $i(S, I), se, me), we && Ml(S, null, te, "created"), F(fe, S, S.scopeId, se, te), re) {
      for (const Te in re) Te !== "value" && !Jr(Te) && a(fe, Te, null, re[Te], I, te);
      "value" in re && a(fe, "value", null, re.value, I), (de = re.onVnodeBeforeMount) && mn(de, te, S);
    }
    we && Ml(S, null, te, "beforeMount");
    const ke = ab(D, ie);
    ke && ie.beforeEnter(fe), r(fe, E, z), ((de = re && re.onVnodeMounted) || ke || we) && Ft(() => {
      de && mn(de, te, S), ke && ie.enter(fe), we && Ml(S, null, te, "mounted");
    }, D);
  }, F = (S, E, z, te, D) => {
    if (z && m(S, z), te) for (let I = 0; I < te.length; I++) m(S, te[I]);
    if (D) {
      let I = D.subTree;
      if (E === I || ko(I.type) && (I.ssContent === E || I.ssFallback === E)) {
        const se = D.vnode;
        F(S, se, se.scopeId, se.slotScopeIds, D.parent);
      }
    }
  }, j = (S, E, z, te, D, I, se, me, fe = 0) => {
    for (let de = fe; de < S.length; de++) {
      const re = S[de] = me ? fl(S[de]) : Fn(S[de]);
      _(null, re, E, z, te, D, I, se, me);
    }
  }, $ = (S, E, z, te, D, I, se) => {
    const me = E.el = S.el;
    let { patchFlag: fe, dynamicChildren: de, dirs: re } = E;
    fe |= S.patchFlag & 16;
    const K = S.props || mt, ie = E.props || mt;
    let we;
    if (z && El(z, false), (we = ie.onVnodeBeforeUpdate) && mn(we, z, E, S), re && Ml(E, S, z, "beforeUpdate"), z && El(z, true), (K.innerHTML && ie.innerHTML == null || K.textContent && ie.textContent == null) && s(me, ""), de ? L(S.dynamicChildren, de, me, z, te, $i(E, D), I) : se || X(S, E, me, null, z, te, $i(E, D), I, false), fe > 0) {
      if (fe & 16) H(me, K, ie, z, D);
      else if (fe & 2 && K.class !== ie.class && a(me, "class", null, ie.class, D), fe & 4 && a(me, "style", K.style, ie.style, D), fe & 8) {
        const ke = E.dynamicProps;
        for (let Te = 0; Te < ke.length; Te++) {
          const Me = ke[Te], He = K[Me], De = ie[Me];
          (De !== He || Me === "value") && a(me, Me, He, De, D, z);
        }
      }
      fe & 1 && S.children !== E.children && s(me, E.children);
    } else !se && de == null && H(me, K, ie, z, D);
    ((we = ie.onVnodeUpdated) || re) && Ft(() => {
      we && mn(we, z, E, S), re && Ml(E, S, z, "updated");
    }, te);
  }, L = (S, E, z, te, D, I, se) => {
    for (let me = 0; me < E.length; me++) {
      const fe = S[me], de = E[me], re = fe.el && (fe.type === nn || !hl(fe, de) || fe.shapeFlag & 70) ? f(fe.el) : z;
      _(fe, de, re, null, te, D, I, se, true);
    }
  }, H = (S, E, z, te, D) => {
    if (E !== z) {
      if (E !== mt) for (const I in E) !Jr(I) && !(I in z) && a(S, I, E[I], null, D, te);
      for (const I in z) {
        if (Jr(I)) continue;
        const se = z[I], me = E[I];
        se !== me && I !== "value" && a(S, I, me, se, D, te);
      }
      "value" in z && a(S, "value", E.value, z.value, D);
    }
  }, q = (S, E, z, te, D, I, se, me, fe) => {
    const de = E.el = S ? S.el : i(""), re = E.anchor = S ? S.anchor : i("");
    let { patchFlag: K, dynamicChildren: ie, slotScopeIds: we } = E;
    we && (me = me ? me.concat(we) : we), S == null ? (r(de, z, te), r(re, z, te), j(E.children || [], z, re, D, I, se, me, fe)) : K > 0 && K & 64 && ie && S.dynamicChildren ? (L(S.dynamicChildren, ie, z, D, I, se, me), (E.key != null || D && E === D.subTree) && _s(S, E, true)) : X(S, E, z, re, D, I, se, me, fe);
  }, A = (S, E, z, te, D, I, se, me, fe) => {
    E.slotScopeIds = me, S == null ? E.shapeFlag & 512 ? D.ctx.activate(E, z, te, se, fe) : k(E, z, te, D, I, se, fe) : U(S, E, fe);
  }, k = (S, E, z, te, D, I, se) => {
    const me = S.component = Cb(S, te, D);
    if (Jo(S) && (me.ctx.renderer = ne), kb(me, false, se), me.asyncDep) {
      if (D && D.registerDep(me, Q, se), !S.el) {
        const fe = me.subTree = Ye(Jt);
        T(null, fe, E, z);
      }
    } else Q(me, S, E, z, D, I, se);
  }, U = (S, E, z) => {
    const te = E.component = S.component;
    if (hb(S, E, z)) if (te.asyncDep && !te.asyncResolved) {
      Y(te, E, z);
      return;
    } else te.next = E, te.update();
    else E.el = S.el, te.vnode = E;
  }, Q = (S, E, z, te, D, I, se) => {
    const me = () => {
      if (S.isMounted) {
        let { next: K, bu: ie, u: we, parent: ke, vnode: Te } = S;
        {
          const be = Vv(S);
          if (be) {
            K && (K.el = Te.el, Y(S, K, se)), be.asyncDep.then(() => {
              S.isUnmounted || me();
            });
            return;
          }
        }
        let Me = K, He;
        El(S, false), K ? (K.el = Te.el, Y(S, K, se)) : K = Te, ie && ea(ie), (He = K.props && K.props.onVnodeBeforeUpdate) && mn(He, ke, K, Te), El(S, true);
        const De = wc(S), ue = S.subTree;
        S.subTree = De, _(ue, De, f(ue.el), M(ue), S, D, I), K.el = De.el, Me === null && gb(S, De.el), we && Ft(we, D), (He = K.props && K.props.onVnodeUpdated) && Ft(() => mn(He, ke, K, Te), D);
      } else {
        let K;
        const { el: ie, props: we } = E, { bm: ke, m: Te, parent: Me, root: He, type: De } = S, ue = gr(E);
        El(S, false), ke && ea(ke), !ue && (K = we && we.onVnodeBeforeMount) && mn(K, Me, E), El(S, true);
        {
          He.ce && He.ce._injectChildStyle(De);
          const be = S.subTree = wc(S);
          _(null, be, z, te, S, D, I), E.el = be.el;
        }
        if (Te && Ft(Te, D), !ue && (K = we && we.onVnodeMounted)) {
          const be = E;
          Ft(() => mn(K, Me, be), D);
        }
        (E.shapeFlag & 256 || Me && gr(Me.vnode) && Me.vnode.shapeFlag & 256) && S.a && Ft(S.a, D), S.isMounted = true, E = z = te = null;
      }
    };
    S.scope.on();
    const fe = S.effect = new jf(me);
    S.scope.off();
    const de = S.update = fe.run.bind(fe), re = S.job = fe.runIfDirty.bind(fe);
    re.i = S, re.id = S.uid, fe.scheduler = () => gs(re), El(S, true), de();
  }, Y = (S, E, z) => {
    E.component = S;
    const te = S.vnode.props;
    S.vnode = E, S.next = null, G0(S, E.props, te, z), tb(S, E.children, z), xl(), cc(S), Sl();
  }, X = (S, E, z, te, D, I, se, me, fe = false) => {
    const de = S && S.children, re = S ? S.shapeFlag : 0, K = E.children, { patchFlag: ie, shapeFlag: we } = E;
    if (ie > 0) {
      if (ie & 128) {
        ye(de, K, z, te, D, I, se, me, fe);
        return;
      } else if (ie & 256) {
        le(de, K, z, te, D, I, se, me, fe);
        return;
      }
    }
    we & 8 ? (re & 16 && B(de, D, I), K !== de && s(z, K)) : re & 16 ? we & 16 ? ye(de, K, z, te, D, I, se, me, fe) : B(de, D, I, true) : (re & 8 && s(z, ""), we & 16 && j(K, z, te, D, I, se, me, fe));
  }, le = (S, E, z, te, D, I, se, me, fe) => {
    S = S || vr, E = E || vr;
    const de = S.length, re = E.length, K = Math.min(de, re);
    let ie;
    for (ie = 0; ie < K; ie++) {
      const we = E[ie] = fe ? fl(E[ie]) : Fn(E[ie]);
      _(S[ie], we, z, null, D, I, se, me, fe);
    }
    de > re ? B(S, D, I, true, false, K) : j(E, z, te, D, I, se, me, fe, K);
  }, ye = (S, E, z, te, D, I, se, me, fe) => {
    let de = 0;
    const re = E.length;
    let K = S.length - 1, ie = re - 1;
    for (; de <= K && de <= ie; ) {
      const we = S[de], ke = E[de] = fe ? fl(E[de]) : Fn(E[de]);
      if (hl(we, ke)) _(we, ke, z, null, D, I, se, me, fe);
      else break;
      de++;
    }
    for (; de <= K && de <= ie; ) {
      const we = S[K], ke = E[ie] = fe ? fl(E[ie]) : Fn(E[ie]);
      if (hl(we, ke)) _(we, ke, z, null, D, I, se, me, fe);
      else break;
      K--, ie--;
    }
    if (de > K) {
      if (de <= ie) {
        const we = ie + 1, ke = we < re ? E[we].el : te;
        for (; de <= ie; ) _(null, E[de] = fe ? fl(E[de]) : Fn(E[de]), z, ke, D, I, se, me, fe), de++;
      }
    } else if (de > ie) for (; de <= K; ) x(S[de], D, I, true), de++;
    else {
      const we = de, ke = de, Te = /* @__PURE__ */ new Map();
      for (de = ke; de <= ie; de++) {
        const Ce = E[de] = fe ? fl(E[de]) : Fn(E[de]);
        Ce.key != null && Te.set(Ce.key, de);
      }
      let Me, He = 0;
      const De = ie - ke + 1;
      let ue = false, be = 0;
      const ae = new Array(De);
      for (de = 0; de < De; de++) ae[de] = 0;
      for (de = we; de <= K; de++) {
        const Ce = S[de];
        if (He >= De) {
          x(Ce, D, I, true);
          continue;
        }
        let Oe;
        if (Ce.key != null) Oe = Te.get(Ce.key);
        else for (Me = ke; Me <= ie; Me++) if (ae[Me - ke] === 0 && hl(Ce, E[Me])) {
          Oe = Me;
          break;
        }
        Oe === void 0 ? x(Ce, D, I, true) : (ae[Oe - ke] = de + 1, Oe >= be ? be = Oe : ue = true, _(Ce, E[Oe], z, null, D, I, se, me, fe), He++);
      }
      const _e2 = ue ? ob(ae) : vr;
      for (Me = _e2.length - 1, de = De - 1; de >= 0; de--) {
        const Ce = ke + de, Oe = E[Ce], Re = Ce + 1 < re ? E[Ce + 1].el : te;
        ae[de] === 0 ? _(null, Oe, z, Re, D, I, se, me, fe) : ue && (Me < 0 || de !== _e2[Me] ? R(Oe, z, Re, 2) : Me--);
      }
    }
  }, R = (S, E, z, te, D = null) => {
    const { el: I, type: se, transition: me, children: fe, shapeFlag: de } = S;
    if (de & 6) {
      R(S.component.subTree, E, z, te);
      return;
    }
    if (de & 128) {
      S.suspense.move(E, z, te);
      return;
    }
    if (de & 64) {
      se.move(S, E, z, ne);
      return;
    }
    if (se === nn) {
      r(I, E, z);
      for (let K = 0; K < fe.length; K++) R(fe[K], E, z, te);
      r(S.anchor, E, z);
      return;
    }
    if (se === Li) {
      p(S, E, z);
      return;
    }
    if (te !== 2 && de & 1 && me) if (te === 0) me.beforeEnter(I), r(I, E, z), Ft(() => me.enter(I), D);
    else {
      const { leave: K, delayLeave: ie, afterLeave: we } = me, ke = () => r(I, E, z), Te = () => {
        K(I, () => {
          ke(), we && we();
        });
      };
      ie ? ie(I, ke, Te) : Te();
    }
    else r(I, E, z);
  }, x = (S, E, z, te = false, D = false) => {
    const { type: I, props: se, ref: me, children: fe, dynamicChildren: de, shapeFlag: re, patchFlag: K, dirs: ie, cacheIndex: we } = S;
    if (K === -2 && (D = false), me != null && xo(me, null, z, S, true), we != null && (E.renderCache[we] = void 0), re & 256) {
      E.ctx.deactivate(S);
      return;
    }
    const ke = re & 1 && ie, Te = !gr(S);
    let Me;
    if (Te && (Me = se && se.onVnodeBeforeUnmount) && mn(Me, E, S), re & 6) oe(S.component, z, te);
    else {
      if (re & 128) {
        S.suspense.unmount(z, te);
        return;
      }
      ke && Ml(S, null, E, "beforeUnmount"), re & 64 ? S.type.remove(S, E, z, ne, te) : de && !de.hasOnce && (I !== nn || K > 0 && K & 64) ? B(de, E, z, false, true) : (I === nn && K & 384 || !D && re & 16) && B(fe, E, z), te && O(S);
    }
    (Te && (Me = se && se.onVnodeUnmounted) || ke) && Ft(() => {
      Me && mn(Me, E, S), ke && Ml(S, null, E, "unmounted");
    }, z);
  }, O = (S) => {
    const { type: E, el: z, anchor: te, transition: D } = S;
    if (E === nn) {
      Z(z, te);
      return;
    }
    if (E === Li) {
      b(S);
      return;
    }
    const I = () => {
      l(z), D && !D.persisted && D.afterLeave && D.afterLeave();
    };
    if (S.shapeFlag & 1 && D && !D.persisted) {
      const { leave: se, delayLeave: me } = D, fe = () => se(z, I);
      me ? me(S.el, I, fe) : fe();
    } else I();
  }, Z = (S, E) => {
    let z;
    for (; S !== E; ) z = h(S), l(S), S = z;
    l(E);
  }, oe = (S, E, z) => {
    const { bum: te, scope: D, job: I, subTree: se, um: me, m: fe, a: de } = S;
    Co(fe), Co(de), te && ea(te), D.stop(), I && (I.flags |= 8, x(se, S, E, z)), me && Ft(me, E), Ft(() => {
      S.isUnmounted = true;
    }, E), E && E.pendingBranch && !E.isUnmounted && S.asyncDep && !S.asyncResolved && S.suspenseId === E.pendingId && (E.deps--, E.deps === 0 && E.resolve());
  }, B = (S, E, z, te = false, D = false, I = 0) => {
    for (let se = I; se < S.length; se++) x(S[se], E, z, te, D);
  }, M = (S) => {
    if (S.shapeFlag & 6) return M(S.component.subTree);
    if (S.shapeFlag & 128) return S.suspense.next();
    const E = h(S.anchor || S.el), z = E && E[fv];
    return z ? h(z) : E;
  };
  let ee = false;
  const V = (S, E, z) => {
    S == null ? E._vnode && x(E._vnode, null, null, true) : _(E._vnode || null, S, E, null, null, null, z), E._vnode = S, ee || (ee = true, cc(), sv(), ee = false);
  }, ne = { p: _, um: x, m: R, r: O, mt: k, mc: j, pc: X, pbc: L, n: M, o: e };
  return { render: V, hydrate: void 0, createApp: Y0(V) };
}
function $i({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function El({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ab(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function _s(e, t, n = false) {
  const r = e.children, l = t.children;
  if (Ne(r) && Ne(l)) for (let a = 0; a < r.length; a++) {
    const o = r[a];
    let i = l[a];
    i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = l[a] = fl(l[a]), i.el = o.el), !n && i.patchFlag !== -2 && _s(o, i)), i.type === ai && (i.el = o.el);
  }
}
function ob(e) {
  const t = e.slice(), n = [0];
  let r, l, a, o, i;
  const u = e.length;
  for (r = 0; r < u; r++) {
    const c = e[r];
    if (c !== 0) {
      if (l = n[n.length - 1], e[l] < c) {
        t[r] = l, n.push(r);
        continue;
      }
      for (a = 0, o = n.length - 1; a < o; ) i = a + o >> 1, e[n[i]] < c ? a = i + 1 : o = i;
      c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
    }
  }
  for (a = n.length, o = n[a - 1]; a-- > 0; ) n[a] = o, o = t[o];
  return n;
}
function Vv(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Vv(t);
}
function Co(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const ib = Symbol.for("v-scx"), ub = () => Mt(ib);
function ge(e, t, n) {
  return Dv(e, t, n);
}
function Dv(e, t, n = mt) {
  const { immediate: r, deep: l, flush: a, once: o } = n, i = It({}, n), u = t && r || !t && a !== "post";
  let c;
  if (_a) {
    if (a === "sync") {
      const m = ub();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!u) {
      const m = () => {
      };
      return m.stop = Vn, m.resume = Vn, m.pause = Vn, m;
    }
  }
  const s = jt;
  i.call = (m, g, _) => An(m, s, g, _);
  let f = false;
  a === "post" ? i.scheduler = (m) => {
    Ft(m, s && s.suspense);
  } : a !== "sync" && (f = true, i.scheduler = (m, g) => {
    g ? m() : gs(m);
  }), i.augmentJob = (m) => {
    t && (m.flags |= 4), f && (m.flags |= 2, s && (m.id = s.uid, m.i = s));
  };
  const h = k0(e, t, i);
  return _a && (c ? c.push(h) : u && h()), h;
}
function sb(e, t, n) {
  const r = this.proxy, l = Pt(e) ? e.includes(".") ? Iv(r, e) : () => r[e] : e.bind(r, r);
  let a;
  Ke(t) ? a = t : (a = t.handler, n = t);
  const o = Aa(this), i = Dv(l, a.bind(r), n);
  return o(), i;
}
function Iv(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let l = 0; l < n.length && r; l++) r = r[n[l]];
    return r;
  };
}
const db = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${pn(t)}Modifiers`] || e[`${Gl(t)}Modifiers`];
function fb(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || mt;
  let l = n;
  const a = t.startsWith("update:"), o = a && db(r, t.slice(7));
  o && (o.trim && (l = n.map((s) => Pt(s) ? s.trim() : s)), o.number && (l = n.map(Ug)));
  let i, u = r[i = ki(t)] || r[i = ki(pn(t))];
  !u && a && (u = r[i = ki(Gl(t))]), u && An(u, e, 6, l);
  const c = r[i + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[i]) return;
    e.emitted[i] = true, An(c, e, 6, l);
  }
}
function zv(e, t, n = false) {
  const r = t.emitsCache, l = r.get(e);
  if (l !== void 0) return l;
  const a = e.emits;
  let o = {}, i = false;
  if (!Ke(e)) {
    const u = (c) => {
      const s = zv(c, t, true);
      s && (i = true, It(o, s));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !a && !i ? (St(e) && r.set(e, null), null) : (Ne(a) ? a.forEach((u) => o[u] = null) : It(o, a), St(e) && r.set(e, o), o);
}
function ri(e, t) {
  return !e || !Ko(t) ? false : (t = t.slice(2).replace(/Once$/, ""), st(e, t[0].toLowerCase() + t.slice(1)) || st(e, Gl(t)) || st(e, t));
}
function wc(e) {
  const { type: t, vnode: n, proxy: r, withProxy: l, propsOptions: [a], slots: o, attrs: i, emit: u, render: c, renderCache: s, props: f, data: h, setupState: m, ctx: g, inheritAttrs: _ } = e, w = wo(e);
  let T, y;
  try {
    if (n.shapeFlag & 4) {
      const b = l || r, C = b;
      T = Fn(c.call(C, b, s, f, m, h, g)), y = i;
    } else {
      const b = t;
      T = Fn(b.length > 1 ? b(f, { attrs: i, slots: o, emit: u }) : b(f, null)), y = t.props ? i : vb(i);
    }
  } catch (b) {
    oa.length = 0, Zo(b, e, 1), T = Ye(Jt);
  }
  let p = T;
  if (y && _ !== false) {
    const b = Object.keys(y), { shapeFlag: C } = p;
    b.length && C & 7 && (a && b.some(ls) && (y = mb(y, a)), p = Gn(p, y, false, true));
  }
  return n.dirs && (p = Gn(p, null, false, true), p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs), n.transition && _l(p, n.transition), T = p, wo(w), T;
}
const vb = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || Ko(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, mb = (e, t) => {
  const n = {};
  for (const r in e) (!ls(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function hb(e, t, n) {
  const { props: r, children: l, component: a } = e, { props: o, children: i, patchFlag: u } = t, c = a.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && u >= 0) {
    if (u & 1024) return true;
    if (u & 16) return r ? xc(r, o, c) : !!o;
    if (u & 8) {
      const s = t.dynamicProps;
      for (let f = 0; f < s.length; f++) {
        const h = s[f];
        if (o[h] !== r[h] && !ri(c, h)) return true;
      }
    }
  } else return (l || i) && (!i || !i.$stable) ? true : r === o ? false : r ? o ? xc(r, o, c) : true : !!o;
  return false;
}
function xc(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return true;
  for (let l = 0; l < r.length; l++) {
    const a = r[l];
    if (t[a] !== e[a] && !ri(n, a)) return true;
  }
  return false;
}
function gb({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const ko = (e) => e.__isSuspense;
function bb(e, t) {
  t && t.pendingBranch ? Ne(e) ? t.effects.push(...e) : t.effects.push(e) : M0(e);
}
const nn = Symbol.for("v-fgt"), ai = Symbol.for("v-txt"), Jt = Symbol.for("v-cmt"), Li = Symbol.for("v-stc"), oa = [];
let sn = null;
function Tn(e = false) {
  oa.push(sn = e ? null : []);
}
function pb() {
  oa.pop(), sn = oa[oa.length - 1] || null;
}
let pa = 1;
function Sc(e, t = false) {
  pa += e, e < 0 && sn && t && (sn.hasOnce = true);
}
function Nv(e) {
  return e.dynamicChildren = pa > 0 ? sn || vr : null, pb(), pa > 0 && sn && sn.push(e), e;
}
function oi(e, t, n, r, l, a) {
  return Nv(kt(e, t, n, r, l, a, true));
}
function Ol(e, t, n, r, l) {
  return Nv(Ye(e, t, n, r, l, true));
}
function ya(e) {
  return e ? e.__v_isVNode === true : false;
}
function hl(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Hv = ({ key: e }) => e ?? null, oo = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? Pt(e) || yt(e) || Ke(e) ? { i: ln, r: e, k: t, f: !!n } : e : null);
function kt(e, t = null, n = null, r = 0, l = null, a = e === nn ? 0 : 1, o = false, i = false) {
  const u = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && Hv(t), ref: t && oo(t), scopeId: dv, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: a, patchFlag: r, dynamicProps: l, dynamicChildren: null, appContext: null, ctx: ln };
  return i ? (ws(u, n), a & 128 && e.normalize(u)) : n && (u.shapeFlag |= Pt(n) ? 8 : 16), pa > 0 && !o && sn && (u.patchFlag > 0 || a & 6) && u.patchFlag !== 32 && sn.push(u), u;
}
const Ye = yb;
function yb(e, t = null, n = null, r = 0, l = null, a = false) {
  if ((!e || e === I0) && (e = Jt), ya(e)) {
    const i = Gn(e, t, true);
    return n && ws(i, n), pa > 0 && !a && sn && (i.shapeFlag & 6 ? sn[sn.indexOf(e)] = i : sn.push(i)), i.patchFlag = -2, i;
  }
  if (Eb(e) && (e = e.__vccOpts), t) {
    t = _b(t);
    let { class: i, style: u } = t;
    i && !Pt(i) && (t.class = os(i)), St(u) && (hs(u) && !Ne(u) && (u = It({}, u)), t.style = Xo(u));
  }
  const o = Pt(e) ? 1 : ko(e) ? 128 : vv(e) ? 64 : St(e) ? 4 : Ke(e) ? 2 : 0;
  return kt(e, t, n, r, l, o, a, true);
}
function _b(e) {
  return e ? hs(e) || Av(e) ? It({}, e) : e : null;
}
function Gn(e, t, n = false, r = false) {
  const { props: l, ref: a, patchFlag: o, children: i, transition: u } = e, c = t ? wb(l || {}, t) : l, s = { __v_isVNode: true, __v_skip: true, type: e.type, props: c, key: c && Hv(c), ref: t && t.ref ? n && a ? Ne(a) ? a.concat(oo(t)) : [a, oo(t)] : oo(t) : a, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: i, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== nn ? o === -1 ? 16 : o | 16 : o, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: u, component: e.component, suspense: e.suspense, ssContent: e.ssContent && Gn(e.ssContent), ssFallback: e.ssFallback && Gn(e.ssFallback), el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return u && r && _l(s, u.clone(s)), s;
}
function Vl(e = " ", t = 0) {
  return Ye(ai, null, e, t);
}
function Cc(e = "", t = false) {
  return t ? (Tn(), Ol(Jt, null, e)) : Ye(Jt, null, e);
}
function Fn(e) {
  return e == null || typeof e == "boolean" ? Ye(Jt) : Ne(e) ? Ye(nn, null, e.slice()) : ya(e) ? fl(e) : Ye(ai, null, String(e));
}
function fl(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Gn(e);
}
function ws(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (Ne(t)) n = 16;
  else if (typeof t == "object") if (r & 65) {
    const l = t.default;
    l && (l._c && (l._d = false), ws(e, l()), l._c && (l._d = true));
    return;
  } else {
    n = 32;
    const l = t._;
    !l && !Av(t) ? t._ctx = ln : l === 3 && ln && (ln.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else Ke(t) ? (t = { default: t, _ctx: ln }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Vl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function wb(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const l in r) if (l === "class") t.class !== r.class && (t.class = os([t.class, r.class]));
    else if (l === "style") t.style = Xo([t.style, r.style]);
    else if (Ko(l)) {
      const a = t[l], o = r[l];
      o && a !== o && !(Ne(a) && a.includes(o)) && (t[l] = a ? [].concat(a, o) : o);
    } else l !== "" && (t[l] = r[l]);
  }
  return t;
}
function mn(e, t, n, r = null) {
  An(e, t, 7, [n, r]);
}
const xb = Mv();
let Sb = 0;
function Cb(e, t, n) {
  const r = e.type, l = (t ? t.appContext : e.appContext) || xb, a = { uid: Sb++, vnode: e, type: r, parent: t, appContext: l, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new Jg(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(l.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: $v(r, l), emitsOptions: zv(r, l), emit: null, emitted: null, propsDefaults: mt, inheritAttrs: r.inheritAttrs, ctx: mt, data: mt, props: mt, attrs: mt, slots: mt, refs: mt, setupState: mt, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = fb.bind(null, a), e.ce && e.ce(a), a;
}
let jt = null;
const xe = () => jt || ln;
let To, Mu;
{
  const e = Ea(), t = (n, r) => {
    let l;
    return (l = e[n]) || (l = e[n] = []), l.push(r), (a) => {
      l.length > 1 ? l.forEach((o) => o(a)) : l[0](a);
    };
  };
  To = t("__VUE_INSTANCE_SETTERS__", (n) => jt = n), Mu = t("__VUE_SSR_SETTERS__", (n) => _a = n);
}
const Aa = (e) => {
  const t = jt;
  return To(e), e.scope.on(), () => {
    e.scope.off(), To(t);
  };
}, kc = () => {
  jt && jt.scope.off(), To(null);
};
function jv(e) {
  return e.vnode.shapeFlag & 4;
}
let _a = false;
function kb(e, t = false, n = false) {
  t && Mu(t);
  const { props: r, children: l } = e.vnode, a = jv(e);
  X0(e, r, a, t), eb(e, l, n);
  const o = a ? Tb(e, t) : void 0;
  return t && Mu(false), o;
}
function Tb(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, N0);
  const { setup: r } = n;
  if (r) {
    xl();
    const l = e.setupContext = r.length > 1 ? Mb(e) : null, a = Aa(e), o = Ra(r, e, 0, [e.props, l]), i = Of(o);
    if (Sl(), a(), (i || e.sp) && !gr(e) && wv(e), i) {
      if (o.then(kc, kc), t) return o.then((u) => {
        Tc(e, u);
      }).catch((u) => {
        Zo(u, e, 0);
      });
      e.asyncDep = o;
    } else Tc(e, o);
  } else Uv(e);
}
function Tc(e, t, n) {
  Ke(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : St(t) && (e.setupState = ov(t)), Uv(e);
}
function Uv(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Vn);
  {
    const l = Aa(e);
    xl();
    try {
      H0(e);
    } finally {
      Sl(), l();
    }
  }
}
const qb = { get(e, t) {
  return Wt(e, "get", ""), e[t];
} };
function Mb(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, qb), slots: e.slots, emit: e.emit, expose: t };
}
function ii(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ov(Go(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in aa) return aa[n](e);
  }, has(t, n) {
    return n in t || n in aa;
  } })) : e.proxy;
}
function Eu(e, t = true) {
  return Ke(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Eb(e) {
  return Ke(e) && "__vccOpts" in e;
}
const v = (e, t) => S0(e, t, _a);
function d(e, t, n) {
  const r = arguments.length;
  return r === 2 ? St(t) && !Ne(t) ? ya(t) ? Ye(e, null, [t]) : Ye(e, t) : Ye(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ya(n) && (n = [n]), Ye(e, t, n));
}
const Rb = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ru;
const qc = typeof window < "u" && window.trustedTypes;
if (qc) try {
  Ru = qc.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const Qv = Ru ? (e) => Ru.createHTML(e) : (e) => e, Ab = "http://www.w3.org/2000/svg", Pb = "http://www.w3.org/1998/Math/MathML", Wn = typeof document < "u" ? document : null, Mc = Wn && Wn.createElement("template"), $b = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, r) => {
  const l = t === "svg" ? Wn.createElementNS(Ab, e) : t === "mathml" ? Wn.createElementNS(Pb, e) : n ? Wn.createElement(e, { is: n }) : Wn.createElement(e);
  return e === "select" && r && r.multiple != null && l.setAttribute("multiple", r.multiple), l;
}, createText: (e) => Wn.createTextNode(e), createComment: (e) => Wn.createComment(e), setText: (e, t) => {
  e.nodeValue = t;
}, setElementText: (e, t) => {
  e.textContent = t;
}, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => Wn.querySelector(e), setScopeId(e, t) {
  e.setAttribute(t, "");
}, insertStaticContent(e, t, n, r, l, a) {
  const o = n ? n.previousSibling : t.lastChild;
  if (l && (l === a || l.nextSibling)) for (; t.insertBefore(l.cloneNode(true), n), !(l === a || !(l = l.nextSibling)); ) ;
  else {
    Mc.innerHTML = Qv(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
    const i = Mc.content;
    if (r === "svg" || r === "mathml") {
      const u = i.firstChild;
      for (; u.firstChild; ) i.appendChild(u.firstChild);
      i.removeChild(u);
    }
    t.insertBefore(i, n);
  }
  return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, ll = "transition", Or = "animation", Cr = Symbol("_vtc"), Kv = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, Wv = It({}, bv, Kv), Lb = (e) => (e.displayName = "Transition", e.props = Wv, e), Ot = Lb((e, { slots: t }) => d(P0, Yv(e), t)), Rl = (e, t = []) => {
  Ne(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ec = (e) => e ? Ne(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function Yv(e) {
  const t = {};
  for (const q in e) q in Kv || (t[q] = e[q]);
  if (e.css === false) return t;
  const { name: n = "v", type: r, duration: l, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: i = `${n}-enter-to`, appearFromClass: u = a, appearActiveClass: c = o, appearToClass: s = i, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: h = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, g = Bb(l), _ = g && g[0], w = g && g[1], { onBeforeEnter: T, onEnter: y, onEnterCancelled: p, onLeave: b, onLeaveCancelled: C, onBeforeAppear: P = T, onAppear: F = y, onAppearCancelled: j = p } = t, $ = (q, A, k, U) => {
    q._enterCancelled = U, ul(q, A ? s : i), ul(q, A ? c : o), k && k();
  }, L = (q, A) => {
    q._isLeaving = false, ul(q, f), ul(q, m), ul(q, h), A && A();
  }, H = (q) => (A, k) => {
    const U = q ? F : y, Q = () => $(A, q, k);
    Rl(U, [A, Q]), Rc(() => {
      ul(A, q ? u : a), Ln(A, q ? s : i), Ec(U) || Ac(A, r, _, Q);
    });
  };
  return It(t, { onBeforeEnter(q) {
    Rl(T, [q]), Ln(q, a), Ln(q, o);
  }, onBeforeAppear(q) {
    Rl(P, [q]), Ln(q, u), Ln(q, c);
  }, onEnter: H(false), onAppear: H(true), onLeave(q, A) {
    q._isLeaving = true;
    const k = () => L(q, A);
    Ln(q, f), q._enterCancelled ? (Ln(q, h), Au()) : (Au(), Ln(q, h)), Rc(() => {
      q._isLeaving && (ul(q, f), Ln(q, m), Ec(b) || Ac(q, r, w, k));
    }), Rl(b, [q, k]);
  }, onEnterCancelled(q) {
    $(q, false, void 0, true), Rl(p, [q]);
  }, onAppearCancelled(q) {
    $(q, true, void 0, true), Rl(j, [q]);
  }, onLeaveCancelled(q) {
    L(q), Rl(C, [q]);
  } });
}
function Bb(e) {
  if (e == null) return null;
  if (St(e)) return [Bi(e.enter), Bi(e.leave)];
  {
    const t = Bi(e);
    return [t, t];
  }
}
function Bi(e) {
  return Qg(e);
}
function Ln(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Cr] || (e[Cr] = /* @__PURE__ */ new Set())).add(t);
}
function ul(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Cr];
  n && (n.delete(t), n.size || (e[Cr] = void 0));
}
function Rc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Fb = 0;
function Ac(e, t, n, r) {
  const l = e._endId = ++Fb, a = () => {
    l === e._endId && r();
  };
  if (n != null) return setTimeout(a, n);
  const { type: o, timeout: i, propCount: u } = Xv(e, t);
  if (!o) return r();
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
function Xv(e, t) {
  const n = window.getComputedStyle(e), r = (g) => (n[g] || "").split(", "), l = r(`${ll}Delay`), a = r(`${ll}Duration`), o = Pc(l, a), i = r(`${Or}Delay`), u = r(`${Or}Duration`), c = Pc(i, u);
  let s = null, f = 0, h = 0;
  t === ll ? o > 0 && (s = ll, f = o, h = a.length) : t === Or ? c > 0 && (s = Or, f = c, h = u.length) : (f = Math.max(o, c), s = f > 0 ? o > c ? ll : Or : null, h = s ? s === ll ? a.length : u.length : 0);
  const m = s === ll && /\b(transform|all)(,|$)/.test(r(`${ll}Property`).toString());
  return { type: s, timeout: f, propCount: h, hasTransform: m };
}
function Pc(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => $c(n) + $c(e[r])));
}
function $c(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Au() {
  return document.body.offsetHeight;
}
function Ob(e, t, n) {
  const r = e[Cr];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const qo = Symbol("_vod"), Gv = Symbol("_vsh"), Zv = { beforeMount(e, { value: t }, { transition: n }) {
  e[qo] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Vr(e, t);
}, mounted(e, { value: t }, { transition: n }) {
  n && t && n.enter(e);
}, updated(e, { value: t, oldValue: n }, { transition: r }) {
  !t != !n && (r ? t ? (r.beforeEnter(e), Vr(e, true), r.enter(e)) : r.leave(e, () => {
    Vr(e, false);
  }) : Vr(e, t));
}, beforeUnmount(e, { value: t }) {
  Vr(e, t);
} };
function Vr(e, t) {
  e.style.display = t ? e[qo] : "none", e[Gv] = !t;
}
const Vb = Symbol(""), Db = /(^|;)\s*display\s*:/;
function Ib(e, t, n) {
  const r = e.style, l = Pt(n);
  let a = false;
  if (n && !l) {
    if (t) if (Pt(t)) for (const o of t.split(";")) {
      const i = o.slice(0, o.indexOf(":")).trim();
      n[i] == null && io(r, i, "");
    }
    else for (const o in t) n[o] == null && io(r, o, "");
    for (const o in n) o === "display" && (a = true), io(r, o, n[o]);
  } else if (l) {
    if (t !== n) {
      const o = r[Vb];
      o && (n += ";" + o), r.cssText = n, a = Db.test(n);
    }
  } else t && e.removeAttribute("style");
  qo in e && (e[qo] = a ? r.display : "", e[Gv] && (r.display = "none"));
}
const Lc = /\s*!important$/;
function io(e, t, n) {
  if (Ne(n)) n.forEach((r) => io(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const r = zb(e, t);
    Lc.test(n) ? e.setProperty(Gl(r), n.replace(Lc, ""), "important") : e[r] = n;
  }
}
const Bc = ["Webkit", "Moz", "ms"], Fi = {};
function zb(e, t) {
  const n = Fi[t];
  if (n) return n;
  let r = pn(t);
  if (r !== "filter" && r in e) return Fi[t] = r;
  r = Yo(r);
  for (let l = 0; l < Bc.length; l++) {
    const a = Bc[l] + r;
    if (a in e) return Fi[t] = a;
  }
  return t;
}
const Fc = "http://www.w3.org/1999/xlink";
function Oc(e, t, n, r, l, a = Zg(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Fc, t.slice(6, t.length)) : e.setAttributeNS(Fc, t, n) : n == null || a && !zf(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : wl(n) ? String(n) : n);
}
function Vc(e, t, n, r, l) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Qv(n) : n);
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
    i === "boolean" ? n = zf(n) : n == null && i === "string" ? (n = "", o = true) : i === "number" && (n = 0, o = true);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(l || t);
}
function Nb(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Hb(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Dc = Symbol("_vei");
function jb(e, t, n, r, l = null) {
  const a = e[Dc] || (e[Dc] = {}), o = a[t];
  if (r && o) o.value = r;
  else {
    const [i, u] = Ub(t);
    if (r) {
      const c = a[t] = Wb(r, l);
      Nb(e, i, c, u);
    } else o && (Hb(e, i, o, u), a[t] = void 0);
  }
}
const Ic = /(?:Once|Passive|Capture)$/;
function Ub(e) {
  let t;
  if (Ic.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Ic); ) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : Gl(e.slice(2)), t];
}
let Oi = 0;
const Qb = Promise.resolve(), Kb = () => Oi || (Qb.then(() => Oi = 0), Oi = Date.now());
function Wb(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    An(Yb(r, n.value), t, 5, [r]);
  };
  return n.value = e, n.attached = Kb(), n;
}
function Yb(e, t) {
  if (Ne(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((r) => (l) => !l._stopped && r && r(l));
  } else return t;
}
const zc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Xb = (e, t, n, r, l, a) => {
  const o = l === "svg";
  t === "class" ? Ob(e, r, o) : t === "style" ? Ib(e, n, r) : Ko(t) ? ls(t) || jb(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Gb(e, t, r, o)) ? (Vc(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Oc(e, t, r, o, a, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !Pt(r)) ? Vc(e, pn(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Oc(e, t, r, o));
};
function Gb(e, t, n, r) {
  if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && zc(t) && Ke(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE") return false;
  }
  return zc(t) && Pt(n) ? false : t in e;
}
const Jv = /* @__PURE__ */ new WeakMap(), em = /* @__PURE__ */ new WeakMap(), Mo = Symbol("_moveCb"), Nc = Symbol("_enterCb"), Zb = (e) => (delete e.props.mode, e), Jb = Zb({ name: "TransitionGroup", props: It({}, Wv, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = xe(), r = gv();
  let l, a;
  return ni(() => {
    if (!l.length) return;
    const o = e.moveClass || `${e.name || "v"}-move`;
    if (!rp(l[0].el, n.vnode.el, o)) return;
    l.forEach(tp), l.forEach(np);
    const i = l.filter(lp);
    Au(), i.forEach((u) => {
      const c = u.el, s = c.style;
      Ln(c, o), s.transform = s.webkitTransform = s.transitionDuration = "";
      const f = c[Mo] = (h) => {
        h && h.target !== c || (!h || /transform$/.test(h.propertyName)) && (c.removeEventListener("transitionend", f), c[Mo] = null, ul(c, o));
      };
      c.addEventListener("transitionend", f);
    });
  }), () => {
    const o = Ge(e), i = Yv(o);
    let u = o.tag || nn;
    if (l = [], a) for (let c = 0; c < a.length; c++) {
      const s = a[c];
      s.el && s.el instanceof Element && (l.push(s), _l(s, ba(s, i, r, n)), Jv.set(s, s.el.getBoundingClientRect()));
    }
    a = t.default ? bs(t.default()) : [];
    for (let c = 0; c < a.length; c++) {
      const s = a[c];
      s.key != null && _l(s, ba(s, i, r, n));
    }
    return Ye(u, null, a);
  };
} }), ep = Jb;
function tp(e) {
  const t = e.el;
  t[Mo] && t[Mo](), t[Nc] && t[Nc]();
}
function np(e) {
  em.set(e, e.el.getBoundingClientRect());
}
function lp(e) {
  const t = Jv.get(e), n = em.get(e), r = t.left - n.left, l = t.top - n.top;
  if (r || l) {
    const a = e.el.style;
    return a.transform = a.webkitTransform = `translate(${r}px,${l}px)`, a.transitionDuration = "0s", e;
  }
}
function rp(e, t, n) {
  const r = e.cloneNode(), l = e[Cr];
  l && l.forEach((i) => {
    i.split(/\s+/).forEach((u) => u && r.classList.remove(u));
  }), n.split(/\s+/).forEach((i) => i && r.classList.add(i)), r.style.display = "none";
  const a = t.nodeType === 1 ? t : t.parentNode;
  a.appendChild(r);
  const { hasTransform: o } = Xv(r);
  return a.removeChild(r), o;
}
const ap = It({ patchProp: Xb }, $b);
let Hc;
function op() {
  return Hc || (Hc = lb(ap));
}
const tm = (...e) => {
  const t = op().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const l = up(r);
    if (!l) return;
    const a = t._component;
    !Ke(a) && !a.render && !a.template && (a.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const o = n(l, false, ip(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), o;
  }, t;
};
function ip(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function up(e) {
  return Pt(e) ? document.querySelector(e) : e;
}
/*!
* Quasar Framework v2.18.1
* (c) 2015-present Razvan Stoenescu
* Released under the MIT License.
*/
var Vi = null;
function xs() {
  return Vi !== null ? Vi : Vi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
typeof __QUASAR_SSR__ != "boolean" && (xs().__QUASAR_SSR__ = false);
typeof __QUASAR_SSR_CLIENT__ != "boolean" && (xs().__QUASAR_SSR_CLIENT__ = false);
typeof __QUASAR_SSR_PWA__ != "boolean" && (xs().__QUASAR_SSR_PWA__ = false);
function Vt(e, t, n, r) {
  return Object.defineProperty(e, t, { get: n, set: r, enumerable: true }), e;
}
function nm(e, t) {
  for (const n in t) Vt(e, n, t[n]);
  return e;
}
var rn = W(__QUASAR_SSR_CLIENT__ && (__QUASAR_SSR_PWA__ ? document.body.getAttribute("data-server-rendered") !== null : true)), Pu;
function sp(e, t) {
  const n = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
  return { browser: n[5] || n[3] || n[1] || "", version: n[4] || n[2] || "0", platform: t[0] || "" };
}
function cp(e) {
  return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
}
var lm = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function dp(e) {
  const t = e.toLowerCase(), n = cp(t), r = sp(t, n), l = { mobile: false, desktop: false, cordova: false, capacitor: false, nativeMobile: false, electron: false, bex: false, linux: false, mac: false, win: false, cros: false, chrome: false, firefox: false, opera: false, safari: false, vivaldi: false, edge: false, edgeChromium: false, ie: false, webkit: false, android: false, ios: false, ipad: false, iphone: false, ipod: false, kindle: false, winphone: false, blackberry: false, playbook: false, silk: false };
  r.browser && (l[r.browser] = true, l.version = r.version, l.versionNumber = parseInt(r.version, 10)), r.platform && (l[r.platform] = true);
  const a = l.android || l.ios || l.bb || l.blackberry || l.ipad || l.iphone || l.ipod || l.kindle || l.playbook || l.silk || l["windows phone"];
  if (a === true || t.indexOf("mobile") !== -1 ? l.mobile = true : l.desktop = true, l["windows phone"] && (l.winphone = true, delete l["windows phone"]), l.edga || l.edgios || l.edg ? (l.edge = true, r.browser = "edge") : l.crios ? (l.chrome = true, r.browser = "chrome") : l.fxios && (l.firefox = true, r.browser = "firefox"), (l.ipod || l.ipad || l.iphone) && (l.ios = true), l.vivaldi && (r.browser = "vivaldi", l.vivaldi = true), (l.chrome || l.opr || l.safari || l.vivaldi || l.mobile === true && l.ios !== true && a !== true) && (l.webkit = true), l.opr && (r.browser = "opera", l.opera = true), l.safari && (l.blackberry || l.bb ? (r.browser = "blackberry", l.blackberry = true) : l.playbook ? (r.browser = "playbook", l.playbook = true) : l.android ? (r.browser = "android", l.android = true) : l.kindle ? (r.browser = "kindle", l.kindle = true) : l.silk && (r.browser = "silk", l.silk = true)), l.name = r.browser, l.platform = r.platform, t.indexOf("electron") !== -1) l.electron = true;
  else if (document.location.href.indexOf("-extension://") !== -1) l.bex = true;
  else {
    if (window.Capacitor !== void 0 ? (l.capacitor = true, l.nativeMobile = true, l.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (l.cordova = true, l.nativeMobile = true, l.nativeMobileWrapper = "cordova"), rn.value === true && (Pu = { is: { ...l } }), lm === true && l.mac === true && (l.desktop === true && l.safari === true || l.nativeMobile === true && l.android !== true && l.ios !== true && l.ipad !== true)) {
      delete l.mac, delete l.desktop;
      const o = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
      Object.assign(l, { mobile: true, ios: true, platform: o, [o]: true });
    }
    l.mobile !== true && window.navigator.userAgentData && window.navigator.userAgentData.mobile && (delete l.desktop, l.mobile = true);
  }
  return l;
}
var jc = navigator.userAgent || navigator.vendor || window.opera, fp = { has: { touch: false, webStorage: false }, within: { iframe: false } }, Ie = { userAgent: jc, is: dp(jc), has: { touch: lm }, within: { iframe: window.self !== window.top } }, $u = { install(e) {
  const { $q: t } = e;
  rn.value === true ? (e.onSSRHydrated.push(() => {
    Object.assign(t.platform, Ie), rn.value = false;
  }), t.platform = On(this)) : t.platform = this;
} };
{
  let e;
  Vt(Ie.has, "webStorage", () => {
    if (e !== void 0) return e;
    try {
      if (window.localStorage) return e = true, true;
    } catch {
    }
    return e = false, false;
  }), Object.assign($u, Ie), rn.value === true && (Object.assign($u, Pu, fp), Pu = null);
}
var rm = $u;
function he(e) {
  return Go(/* @__PURE__ */ Cl(e));
}
function $n(e) {
  return Go(e);
}
var Tl = (e, t) => {
  const n = On(e);
  for (const r in e) Vt(t, r, () => n[r], (l) => {
    n[r] = l;
  });
  return t;
}, ft = { hasPassive: false, passiveCapture: true, notPassiveCapture: true };
try {
  const e = Object.defineProperty({}, "passive", { get() {
    Object.assign(ft, { hasPassive: true, passive: { passive: true }, notPassive: { passive: false }, passiveCapture: { passive: true, capture: true }, notPassiveCapture: { passive: false, capture: true } });
  } });
  window.addEventListener("qtest", null, e), window.removeEventListener("qtest", null, e);
} catch {
}
function xt() {
}
function ui(e) {
  return e.button === 0;
}
function tn(e) {
  return e.touches && e.touches[0] ? e = e.touches[0] : e.changedTouches && e.changedTouches[0] ? e = e.changedTouches[0] : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]), { top: e.clientY, left: e.clientX };
}
function vp(e) {
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
function Dt(e) {
  e.cancelable !== false && e.preventDefault();
}
function je(e) {
  e.cancelable !== false && e.preventDefault(), e.stopPropagation();
}
function pr(e, t) {
  if (e === void 0 || t === true && e.__dragPrevented === true) return;
  const n = t === true ? (r) => {
    r.__dragPrevented = true, r.addEventListener("dragstart", Dt, ft.notPassiveCapture);
  } : (r) => {
    delete r.__dragPrevented, r.removeEventListener("dragstart", Dt, ft.notPassiveCapture);
  };
  e.querySelectorAll("a, img").forEach(n);
}
function Tt(e, t, n) {
  const r = `__q_${t}_evt`;
  e[r] = e[r] !== void 0 ? e[r].concat(n) : n, n.forEach((l) => {
    l[0].addEventListener(l[1], e[l[2]], ft[l[3]]);
  });
}
function Yt(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 && (e[n].forEach((r) => {
    r[0].removeEventListener(r[1], e[r[2]], ft[r[3]]);
  }), e[n] = void 0);
}
function Ar(e, t = 250, n) {
  let r = null;
  function l() {
    const a = arguments, o = () => {
      r = null, e.apply(this, a);
    };
    r !== null && clearTimeout(r), r = setTimeout(o, t);
  }
  return l.cancel = () => {
    r !== null && clearTimeout(r);
  }, l;
}
var Di = ["sm", "md", "lg", "xl"], { passive: Uc } = ft, mp = Tl({ width: 0, height: 0, name: "xs", sizes: { sm: 600, md: 1024, lg: 1440, xl: 1920 }, lt: { sm: true, md: true, lg: true, xl: true }, gt: { xs: false, sm: false, md: false, lg: false }, xs: true, sm: false, md: false, lg: false, xl: false }, { setSizes: xt, setDebounce: xt, install({ $q: e, onSSRHydrated: t }) {
  var _a3;
  if (e.screen = this, this.__installed === true) {
    e.config.screen !== void 0 && (e.config.screen.bodyClasses === false ? document.body.classList.remove(`screen--${this.name}`) : this.__update(true));
    return;
  }
  const { visualViewport: n } = window, r = n || window, l = document.scrollingElement || document.documentElement, a = n === void 0 || Ie.is.mobile === true ? () => [Math.max(window.innerWidth, l.clientWidth), Math.max(window.innerHeight, l.clientHeight)] : () => [n.width * n.scale + window.innerWidth - l.clientWidth, n.height * n.scale + window.innerHeight - l.clientHeight], o = ((_a3 = e.config.screen) == null ? void 0 : _a3.bodyClasses) === true;
  this.__update = (f) => {
    const [h, m] = a();
    if (m !== this.height && (this.height = m), h !== this.width) this.width = h;
    else if (f !== true) return;
    let g = this.sizes;
    this.gt.xs = h >= g.sm, this.gt.sm = h >= g.md, this.gt.md = h >= g.lg, this.gt.lg = h >= g.xl, this.lt.sm = h < g.sm, this.lt.md = h < g.md, this.lt.lg = h < g.lg, this.lt.xl = h < g.xl, this.xs = this.lt.sm, this.sm = this.gt.xs === true && this.lt.md === true, this.md = this.gt.sm === true && this.lt.lg === true, this.lg = this.gt.md === true && this.lt.xl === true, this.xl = this.gt.lg, g = this.xs === true && "xs" || this.sm === true && "sm" || this.md === true && "md" || this.lg === true && "lg" || "xl", g !== this.name && (o === true && (document.body.classList.remove(`screen--${this.name}`), document.body.classList.add(`screen--${g}`)), this.name = g);
  };
  let i, u = {}, c = 16;
  this.setSizes = (f) => {
    Di.forEach((h) => {
      f[h] !== void 0 && (u[h] = f[h]);
    });
  }, this.setDebounce = (f) => {
    c = f;
  };
  const s = () => {
    const f = getComputedStyle(document.body);
    f.getPropertyValue("--q-size-sm") && Di.forEach((h) => {
      this.sizes[h] = parseInt(f.getPropertyValue(`--q-size-${h}`), 10);
    }), this.setSizes = (h) => {
      Di.forEach((m) => {
        h[m] && (this.sizes[m] = h[m]);
      }), this.__update(true);
    }, this.setDebounce = (h) => {
      i !== void 0 && r.removeEventListener("resize", i, Uc), i = h > 0 ? Ar(this.__update, h) : this.__update, r.addEventListener("resize", i, Uc);
    }, this.setDebounce(c), Object.keys(u).length !== 0 ? (this.setSizes(u), u = void 0) : this.__update(), o === true && this.name === "xs" && document.body.classList.add("screen--xs");
  };
  rn.value === true ? t.push(s) : s();
} }), Qt = Tl({ isActive: false, mode: false }, { __media: void 0, set(e) {
  Qt.mode = e, e === "auto" ? (Qt.__media === void 0 && (Qt.__media = window.matchMedia("(prefers-color-scheme: dark)"), Qt.__updateMedia = () => {
    Qt.set("auto");
  }, Qt.__media.addListener(Qt.__updateMedia)), e = Qt.__media.matches) : Qt.__media !== void 0 && (Qt.__media.removeListener(Qt.__updateMedia), Qt.__media = void 0), Qt.isActive = e === true, document.body.classList.remove(`body--${e === true ? "light" : "dark"}`), document.body.classList.add(`body--${e === true ? "dark" : "light"}`);
}, toggle() {
  Qt.set(Qt.isActive === false);
}, install({ $q: e, ssrContext: t }) {
  const { dark: n } = e.config;
  e.dark = this, this.__installed !== true && this.set(n !== void 0 ? n : false);
} }), am = Qt;
function hp(e, t, n = document.body) {
  if (typeof e != "string") throw new TypeError("Expected a string as propName");
  if (typeof t != "string") throw new TypeError("Expected a string as value");
  if (!(n instanceof Element)) throw new TypeError("Expected a DOM element");
  n.style.setProperty(`--q-${e}`, t);
}
var om = false;
function gp(e) {
  om = e.isComposing === true;
}
function Zl(e) {
  return om === true || e !== Object(e) || e.isComposing === true || e.qKeyEvent === true;
}
function yn(e, t) {
  return Zl(e) === true ? false : [].concat(t).includes(e.keyCode);
}
function im(e) {
  if (e.ios === true) return "ios";
  if (e.android === true) return "android";
}
function bp({ is: e, has: t, within: n }, r) {
  const l = [e.desktop === true ? "desktop" : "mobile", `${t.touch === false ? "no-" : ""}touch`];
  if (e.mobile === true) {
    const a = im(e);
    a !== void 0 && l.push("platform-" + a);
  }
  if (e.nativeMobile === true) {
    const a = e.nativeMobileWrapper;
    l.push(a), l.push("native-mobile"), e.ios === true && (r[a] === void 0 || r[a].iosStatusBarPadding !== false) && l.push("q-ios-padding");
  } else e.electron === true ? l.push("electron") : e.bex === true && l.push("bex");
  return n.iframe === true && l.push("within-iframe"), l;
}
function pp() {
  const { is: e } = Ie, t = document.body.className, n = new Set(t.replace(/ {2}/g, " ").split(" "));
  if (e.nativeMobile !== true && e.electron !== true && e.bex !== true) {
    if (e.desktop === true) n.delete("mobile"), n.delete("platform-ios"), n.delete("platform-android"), n.add("desktop");
    else if (e.mobile === true) {
      n.delete("desktop"), n.add("mobile"), n.delete("platform-ios"), n.delete("platform-android");
      const l = im(e);
      l !== void 0 && n.add(`platform-${l}`);
    }
  }
  Ie.has.touch === true && (n.delete("no-touch"), n.add("touch")), Ie.within.iframe === true && n.add("within-iframe");
  const r = Array.from(n).join(" ");
  t !== r && (document.body.className = r);
}
function yp(e) {
  for (const t in e) hp(t, e[t]);
}
var _p = { install(e) {
  if (this.__installed !== true) {
    if (rn.value === true) pp();
    else {
      const { $q: t } = e;
      t.config.brand !== void 0 && yp(t.config.brand);
      const n = bp(Ie, t.config);
      document.body.classList.add.apply(document.body.classList, n);
    }
    Ie.is.ios === true && document.body.addEventListener("touchstart", xt), window.addEventListener("keydown", gp, true);
  }
} }, um = () => true;
function wp(e) {
  return typeof e == "string" && e !== "" && e !== "/" && e !== "#/";
}
function xp(e) {
  return e.startsWith("#") === true && (e = e.substring(1)), e.startsWith("/") === false && (e = "/" + e), e.endsWith("/") === true && (e = e.substring(0, e.length - 1)), "#" + e;
}
function Sp(e) {
  if (e.backButtonExit === false) return () => false;
  if (e.backButtonExit === "*") return um;
  const t = ["#/"];
  return Array.isArray(e.backButtonExit) === true && t.push(...e.backButtonExit.filter(wp).map(xp)), () => t.includes(window.location.hash);
}
var wa = { __history: [], add: xt, remove: xt, install({ $q: e }) {
  if (this.__installed === true) return;
  const { cordova: t, capacitor: n } = Ie.is;
  if (t !== true && n !== true) return;
  const r = e.config[t === true ? "cordova" : "capacitor"];
  if ((r == null ? void 0 : r.backButton) === false || n === true && (window.Capacitor === void 0 || window.Capacitor.Plugins.App === void 0)) return;
  this.add = (o) => {
    o.condition === void 0 && (o.condition = um), this.__history.push(o);
  }, this.remove = (o) => {
    const i = this.__history.indexOf(o);
    i >= 0 && this.__history.splice(i, 1);
  };
  const l = Sp(Object.assign({ backButtonExit: true }, r)), a = () => {
    if (this.__history.length) {
      const o = this.__history[this.__history.length - 1];
      o.condition() === true && (this.__history.pop(), o.handler());
    } else l() === true ? navigator.app.exitApp() : window.history.back();
  };
  t === true ? document.addEventListener("deviceready", () => {
    document.addEventListener("backbutton", a, false);
  }) : window.Capacitor.Plugins.App.addListener("backButton", a);
} }, Lu = { isoName: "en-US", nativeName: "English (US)", label: { clear: "Clear", ok: "OK", cancel: "Cancel", close: "Close", set: "Set", select: "Select", reset: "Reset", remove: "Remove", update: "Update", create: "Create", search: "Search", filter: "Filter", refresh: "Refresh", expand: (e) => e ? `Expand "${e}"` : "Expand", collapse: (e) => e ? `Collapse "${e}"` : "Collapse" }, date: { days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), firstDayOfWeek: 0, format24h: false, pluralDay: "days", prevMonth: "Previous month", nextMonth: "Next month", prevYear: "Previous year", nextYear: "Next year", today: "Today", prevRangeYears: (e) => `Previous ${e} years`, nextRangeYears: (e) => `Next ${e} years` }, table: { noData: "No data available", noResults: "No matching records found", loading: "Loading...", selectedRecords: (e) => e === 1 ? "1 record selected." : (e === 0 ? "No" : e) + " records selected.", recordsPerPage: "Records per page:", allRows: "All", pagination: (e, t, n) => e + "-" + t + " of " + n, columns: "Columns" }, pagination: { first: "First page", prev: "Previous page", next: "Next page", last: "Last page" }, editor: { url: "URL", bold: "Bold", italic: "Italic", strikethrough: "Strikethrough", underline: "Underline", unorderedList: "Unordered List", orderedList: "Ordered List", subscript: "Subscript", superscript: "Superscript", hyperlink: "Hyperlink", toggleFullscreen: "Toggle Fullscreen", quote: "Quote", left: "Left align", center: "Center align", right: "Right align", justify: "Justify align", print: "Print", outdent: "Decrease indentation", indent: "Increase indentation", removeFormat: "Remove formatting", formatting: "Formatting", fontSize: "Font Size", align: "Align", hr: "Insert Horizontal Rule", undo: "Undo", redo: "Redo", heading1: "Heading 1", heading2: "Heading 2", heading3: "Heading 3", heading4: "Heading 4", heading5: "Heading 5", heading6: "Heading 6", paragraph: "Paragraph", code: "Code", size1: "Very small", size2: "A bit small", size3: "Normal", size4: "Medium-large", size5: "Big", size6: "Very big", size7: "Maximum", defaultFont: "Default Font", viewSource: "View Source" }, tree: { noNodes: "No nodes available", noResults: "No matching nodes found" } };
function Qc() {
  const e = Array.isArray(navigator.languages) === true && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
  if (typeof e == "string") return e.split(/[-_]/).map((t, n) => n === 0 ? t.toLowerCase() : n > 1 || t.length < 4 ? t.toUpperCase() : t[0].toUpperCase() + t.slice(1).toLowerCase()).join("-");
}
var Fl = Tl({ __qLang: {} }, { getLocale: Qc, set(e = Lu, t) {
  const n = { ...e, rtl: e.rtl === true, getLocale: Qc };
  {
    if (n.set = Fl.set, Fl.__langConfig === void 0 || Fl.__langConfig.noHtmlAttrs !== true) {
      const r = document.documentElement;
      r.setAttribute("dir", n.rtl === true ? "rtl" : "ltr"), r.setAttribute("lang", n.isoName);
    }
    Object.assign(Fl.__qLang, n);
  }
}, install({ $q: e, lang: t, ssrContext: n }) {
  e.lang = Fl.__qLang, Fl.__langConfig = e.config.lang, this.__installed === true ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qLang, { get() {
    return Reflect.get(...arguments);
  }, ownKeys(r) {
    return Reflect.ownKeys(r).filter((l) => l !== "set" && l !== "getLocale");
  } }), this.set(t || Lu));
} }), si = Fl, Cp = { name: "material-icons", type: { positive: "check_circle", negative: "warning", info: "info", warning: "priority_high" }, arrow: { up: "arrow_upward", right: "arrow_forward", down: "arrow_downward", left: "arrow_back", dropdown: "arrow_drop_down" }, chevron: { left: "chevron_left", right: "chevron_right" }, colorPicker: { spectrum: "gradient", tune: "tune", palette: "style" }, pullToRefresh: { icon: "refresh" }, carousel: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down", navigationIcon: "lens" }, chip: { remove: "cancel", selected: "check" }, datetime: { arrowLeft: "chevron_left", arrowRight: "chevron_right", now: "access_time", today: "today" }, editor: { bold: "format_bold", italic: "format_italic", strikethrough: "strikethrough_s", underline: "format_underlined", unorderedList: "format_list_bulleted", orderedList: "format_list_numbered", subscript: "vertical_align_bottom", superscript: "vertical_align_top", hyperlink: "link", toggleFullscreen: "fullscreen", quote: "format_quote", left: "format_align_left", center: "format_align_center", right: "format_align_right", justify: "format_align_justify", print: "print", outdent: "format_indent_decrease", indent: "format_indent_increase", removeFormat: "format_clear", formatting: "text_format", fontSize: "format_size", align: "format_align_left", hr: "remove", undo: "undo", redo: "redo", heading: "format_size", code: "code", size: "format_size", font: "font_download", viewSource: "code" }, expansionItem: { icon: "keyboard_arrow_down", denseIcon: "arrow_drop_down" }, fab: { icon: "add", activeIcon: "close" }, field: { clear: "cancel", error: "error" }, pagination: { first: "first_page", prev: "keyboard_arrow_left", next: "keyboard_arrow_right", last: "last_page" }, rating: { icon: "grade" }, stepper: { done: "check", active: "edit", error: "warning" }, tabs: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down" }, table: { arrowUp: "arrow_upward", warning: "warning", firstPage: "first_page", prevPage: "chevron_left", nextPage: "chevron_right", lastPage: "last_page" }, tree: { icon: "play_arrow" }, uploader: { done: "done", clear: "clear", add: "add_box", upload: "cloud_upload", removeQueue: "clear_all", removeUploaded: "done_all" } }, Bu = Tl({ iconMapFn: null, __qIconSet: {} }, { set(e, t) {
  const n = { ...e };
  n.set = Bu.set, Object.assign(Bu.__qIconSet, n);
}, install({ $q: e, iconSet: t, ssrContext: n }) {
  e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn), e.iconSet = this.__qIconSet, Vt(e, "iconMapFn", () => this.iconMapFn, (r) => {
    this.iconMapFn = r;
  }), this.__installed === true ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qIconSet, { get() {
    return Reflect.get(...arguments);
  }, ownKeys(r) {
    return Reflect.ownKeys(r).filter((l) => l !== "set");
  } }), this.set(t || Cp));
} }), sm = Bu, cm = "_q_", dm = "_q_t_", fm = "_q_s_", Jl = "_q_l_", vm = "_q_pc_", mm = "_q_f_", hm = "_q_fo_", gm = "_q_tabs_", bm = "_q_u_";
function ot() {
}
var Eo = {}, pm = false;
function kp() {
  pm = true;
}
function qn(e, t) {
  if (e === t) return true;
  if (e !== null && t !== null && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return false;
    let n, r;
    if (e.constructor === Array) {
      if (n = e.length, n !== t.length) return false;
      for (r = n; r-- !== 0; ) if (qn(e[r], t[r]) !== true) return false;
      return true;
    }
    if (e.constructor === Map) {
      if (e.size !== t.size) return false;
      let a = e.entries();
      for (r = a.next(); r.done !== true; ) {
        if (t.has(r.value[0]) !== true) return false;
        r = a.next();
      }
      for (a = e.entries(), r = a.next(); r.done !== true; ) {
        if (qn(r.value[1], t.get(r.value[0])) !== true) return false;
        r = a.next();
      }
      return true;
    }
    if (e.constructor === Set) {
      if (e.size !== t.size) return false;
      const a = e.entries();
      for (r = a.next(); r.done !== true; ) {
        if (t.has(r.value[0]) !== true) return false;
        r = a.next();
      }
      return true;
    }
    if (e.buffer != null && e.buffer.constructor === ArrayBuffer) {
      if (n = e.length, n !== t.length) return false;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return false;
      return true;
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
    const l = Object.keys(e).filter((a) => e[a] !== void 0);
    if (n = l.length, n !== Object.keys(t).filter((a) => t[a] !== void 0).length) return false;
    for (r = n; r-- !== 0; ) {
      const a = l[r];
      if (qn(e[a], t[a]) !== true) return false;
    }
    return true;
  }
  return e !== e && t !== t;
}
function Lt(e) {
  return e !== null && typeof e == "object" && Array.isArray(e) !== true;
}
function Fu(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Tp(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function xa(e) {
  return typeof e == "number" && isFinite(e);
}
var Kc = [rm, _p, am, mp, wa, si, sm];
function ci(e, t) {
  const n = tm(e);
  n.config.globalProperties = t.config.globalProperties;
  const { reload: r, ...l } = t._context;
  return Object.assign(n._context, l), n;
}
function Wc(e, t) {
  t.forEach((n) => {
    n.install(e), n.__installed = true;
  });
}
function qp(e, t, n) {
  e.config.globalProperties.$q = n.$q, e.provide(cm, n.$q), Wc(n, Kc), t.components !== void 0 && Object.values(t.components).forEach((r) => {
    Lt(r) === true && r.name !== void 0 && e.component(r.name, r);
  }), t.directives !== void 0 && Object.values(t.directives).forEach((r) => {
    Lt(r) === true && r.name !== void 0 && e.directive(r.name, r);
  }), t.plugins !== void 0 && Wc(n, Object.values(t.plugins).filter((r) => typeof r.install == "function" && Kc.includes(r) === false)), rn.value === true && (n.$q.onSSRHydrated = () => {
    n.onSSRHydrated.forEach((r) => {
      r();
    }), n.$q.onSSRHydrated = () => {
    };
  });
}
var Mp = function(e, t = {}) {
  const n = { version: "2.18.1" };
  pm === false ? (t.config !== void 0 && Object.assign(Eo, t.config), n.config = { ...Eo }, kp()) : n.config = t.config || {}, qp(e, t, { parentApp: e, $q: n, lang: t.lang, iconSet: t.iconSet, onSSRHydrated: [] });
}, Yc = ["B", "KB", "MB", "GB", "TB", "PB"];
function Ou(e, t = 1) {
  let n = 0;
  for (; parseInt(e, 10) >= 1024 && n < Yc.length - 1; ) e /= 1024, ++n;
  return `${e.toFixed(t)}${Yc[n]}`;
}
function dt(e, t, n) {
  return n <= t ? t : Math.min(n, Math.max(t, e));
}
function Ro(e, t, n) {
  if (n <= t) return t;
  const r = n - t + 1;
  let l = t + (e - t) % r;
  return l < t && (l = r + l), l === 0 ? 0 : l;
}
function at(e, t = 2, n = "0") {
  if (e == null) return e;
  const r = "" + e;
  return r.length >= t ? r : new Array(t - r.length + 1).join(n) + r;
}
var Ss = XMLHttpRequest, ym = Ss.prototype.open, Ep = ["top", "right", "bottom", "left"], Ao = [], ia = 0;
function Rp({ p: e, pos: t, active: n, horiz: r, reverse: l, dir: a }) {
  let o = 1, i = 1;
  return r === true ? (l === true && (o = -1), t === "bottom" && (i = -1), { transform: `translate3d(${o * (e - 100)}%,${n ? 0 : i * -200}%,0)` }) : (l === true && (i = -1), t === "right" && (o = -1), { transform: `translate3d(${n ? 0 : a * o * -200}%,${i * (e - 100)}%,0)` });
}
function Ap(e, t) {
  return typeof t != "number" && (e < 25 ? t = Math.random() * 3 + 3 : e < 65 ? t = Math.random() * 3 : e < 85 ? t = Math.random() * 2 : e < 99 ? t = 0.6 : t = 0), dt(e + t, 0, 100);
}
function Pp(e) {
  ia++, Ao.push(e), !(ia > 1) && (Ss.prototype.open = function(t, n) {
    const r = [], l = () => {
      Ao.forEach((o) => {
        (o.hijackFilter.value === null || o.hijackFilter.value(n) === true) && (o.start(), r.push(o.stop));
      });
    }, a = () => {
      r.forEach((o) => {
        o();
      });
    };
    this.addEventListener("loadstart", l, { once: true }), this.addEventListener("loadend", a, { once: true }), ym.apply(this, arguments);
  });
}
function $p(e) {
  Ao = Ao.filter((t) => t.start !== e), ia = Math.max(0, ia - 1), ia === 0 && (Ss.prototype.open = ym);
}
var Lp = he({ name: "QAjaxBar", props: { position: { type: String, default: "top", validator: (e) => Ep.includes(e) }, size: { type: String, default: "2px" }, color: String, skipHijack: Boolean, reverse: Boolean, hijackFilter: Function }, emits: ["start", "stop"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), r = W(0), l = W(false), a = W(true);
  let o = 0, i = null, u;
  const c = v(() => `q-loading-bar q-loading-bar--${e.position}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (a.value === true ? "" : " no-transition")), s = v(() => e.position === "top" || e.position === "bottom"), f = v(() => s.value === true ? "height" : "width"), h = v(() => {
    const p = l.value, b = Rp({ p: r.value, pos: e.position, active: p, horiz: s.value, reverse: n.$q.lang.rtl === true && ["top", "bottom"].includes(e.position) ? e.reverse === false : e.reverse, dir: n.$q.lang.rtl === true ? -1 : 1 });
    return b[f.value] = e.size, b.opacity = p ? 1 : 0, b;
  }), m = v(() => l.value === true ? { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": r.value } : { "aria-hidden": "true" });
  function g(p = 300) {
    const b = u;
    return u = Math.max(0, p) || 0, o++, o > 1 ? (b === 0 && p > 0 ? T() : i !== null && b > 0 && p <= 0 && (clearTimeout(i), i = null), o) : (i !== null && clearTimeout(i), t("start"), r.value = 0, i = setTimeout(() => {
      i = null, a.value = true, p > 0 && T();
    }, l._value === true ? 500 : 1), l._value !== true && (l.value = true, a.value = false), o);
  }
  function _(p) {
    return o > 0 && (r.value = Ap(r.value, p)), o;
  }
  function w() {
    if (o = Math.max(0, o - 1), o > 0) return o;
    i !== null && (clearTimeout(i), i = null), t("stop");
    const p = () => {
      a.value = true, r.value = 100, i = setTimeout(() => {
        i = null, l.value = false;
      }, 1e3);
    };
    return r.value === 0 ? i = setTimeout(p, 1) : p(), o;
  }
  function T() {
    r.value < 100 && (i = setTimeout(() => {
      i = null, _(), T();
    }, u));
  }
  let y;
  return ct(() => {
    e.skipHijack !== true && (y = true, Pp({ start: g, stop: w, hijackFilter: v(() => e.hijackFilter || null) }));
  }), We(() => {
    i !== null && clearTimeout(i), y === true && $p(g);
  }), Object.assign(n, { start: g, stop: w, increment: _ }), () => d("div", { class: c.value, style: h.value, ...m.value });
} }), Vu = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 }, el = { size: String };
function tl(e, t = Vu) {
  return v(() => e.size !== void 0 ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size } : null);
}
function $e(e, t) {
  return e !== void 0 && e() || t;
}
function Pa(e, t) {
  if (e !== void 0) {
    const n = e();
    if (n != null) return n.slice();
  }
  return t;
}
function qt(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function Cs(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function _n(e, t, n, r, l, a) {
  t.key = r + l;
  const o = d(e, t, n);
  return l === true ? cn(o, a()) : o;
}
var Xc = "0 0 24 24", Ii = (e) => e, zi = (e) => `ionicons ${e}`, _m = { "mdi-": (e) => `mdi ${e}`, "icon-": Ii, "bt-": (e) => `bt ${e}`, "eva-": (e) => `eva ${e}`, "ion-md": zi, "ion-ios": zi, "ion-logo": zi, "iconfont ": Ii, "ti-": (e) => `themify-icon ${e}`, "bi-": (e) => `bootstrap-icons ${e}`, "i-": Ii }, wm = { o_: "-outlined", r_: "-round", s_: "-sharp" }, xm = { sym_o_: "-outlined", sym_r_: "-rounded", sym_s_: "-sharp" }, Bp = new RegExp("^(" + Object.keys(_m).join("|") + ")"), Fp = new RegExp("^(" + Object.keys(wm).join("|") + ")"), Gc = new RegExp("^(" + Object.keys(xm).join("|") + ")"), Op = /^[Mm]\s?[-+]?\.?\d/, Vp = /^img:/, Dp = /^svguse:/, Ip = /^ion-/, zp = /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, et = he({ name: "QIcon", props: { ...el, tag: { type: String, default: "i" }, name: String, color: String, left: Boolean, right: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = tl(e), l = v(() => "q-icon" + (e.left === true ? " on-left" : "") + (e.right === true ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), a = v(() => {
    let o, i = e.name;
    if (i === "none" || !i) return { none: true };
    if (n.iconMapFn !== null) {
      const s = n.iconMapFn(i);
      if (s !== void 0) if (s.icon !== void 0) {
        if (i = s.icon, i === "none" || !i) return { none: true };
      } else return { cls: s.cls, content: s.content !== void 0 ? s.content : " " };
    }
    if (Op.test(i) === true) {
      const [s, f = Xc] = i.split("|");
      return { svg: true, viewBox: f, nodes: s.split("&&").map((h) => {
        const [m, g, _] = h.split("@@");
        return d("path", { style: g, d: m, transform: _ });
      }) };
    }
    if (Vp.test(i) === true) return { img: true, src: i.substring(4) };
    if (Dp.test(i) === true) {
      const [s, f = Xc] = i.split("|");
      return { svguse: true, src: s.substring(7), viewBox: f };
    }
    let u = " ";
    const c = i.match(Bp);
    if (c !== null) o = _m[c[1]](i);
    else if (zp.test(i) === true) o = i;
    else if (Ip.test(i) === true) o = `ionicons ion-${n.platform.is.ios === true ? "ios" : "md"}${i.substring(3)}`;
    else if (Gc.test(i) === true) {
      o = "notranslate material-symbols";
      const s = i.match(Gc);
      s !== null && (i = i.substring(6), o += xm[s[1]]), u = i;
    } else {
      o = "notranslate material-icons";
      const s = i.match(Fp);
      s !== null && (i = i.substring(2), o += wm[s[1]]), u = i;
    }
    return { cls: o, content: u };
  });
  return () => {
    const o = { class: l.value, style: r.value, "aria-hidden": "true" };
    return a.value.none === true ? d(e.tag, o, $e(t.default)) : a.value.img === true ? d(e.tag, o, qt(t.default, [d("img", { src: a.value.src })])) : a.value.svg === true ? d(e.tag, o, qt(t.default, [d("svg", { viewBox: a.value.viewBox || "0 0 24 24" }, a.value.nodes)])) : a.value.svguse === true ? d(e.tag, o, qt(t.default, [d("svg", { viewBox: a.value.viewBox }, [d("use", { "xlink:href": a.value.src })])])) : (a.value.cls !== void 0 && (o.class += " " + a.value.cls), d(e.tag, o, qt(t.default, [a.value.content])));
  };
} }), Du = he({ name: "QAvatar", props: { ...el, fontSize: String, color: String, textColor: String, icon: String, square: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  const n = tl(e), r = v(() => "q-avatar" + (e.color ? ` bg-${e.color}` : "") + (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") + (e.square === true ? " q-avatar--square" : e.rounded === true ? " rounded-borders" : "")), l = v(() => e.fontSize ? { fontSize: e.fontSize } : null);
  return () => {
    const a = e.icon !== void 0 ? [d(et, { name: e.icon })] : void 0;
    return d("div", { class: r.value, style: n.value }, [d("div", { class: "q-avatar__content row flex-center overflow-hidden", style: l.value }, Cs(t.default, a))]);
  };
} }), Np = ["top", "middle", "bottom"];
he({ name: "QBadge", props: { color: String, textColor: String, floating: Boolean, transparent: Boolean, multiLine: Boolean, outline: Boolean, rounded: Boolean, label: [Number, String], align: { type: String, validator: (e) => Np.includes(e) } }, setup(e, { slots: t }) {
  const n = v(() => e.align !== void 0 ? { verticalAlign: e.align } : null), r = v(() => {
    const l = e.outline === true && e.color || e.textColor;
    return `q-badge flex inline items-center no-wrap q-badge--${e.multiLine === true ? "multi" : "single"}-line` + (e.outline === true ? " q-badge--outline" : e.color !== void 0 ? ` bg-${e.color}` : "") + (l !== void 0 ? ` text-${l}` : "") + (e.floating === true ? " q-badge--floating" : "") + (e.rounded === true ? " q-badge--rounded" : "") + (e.transparent === true ? " q-badge--transparent" : "");
  });
  return () => d("div", { class: r.value, style: n.value, role: "status", "aria-label": e.label }, qt(t.default, e.label !== void 0 ? [e.label] : []));
} });
var nt = { dark: { type: Boolean, default: null } };
function lt(e, t) {
  return v(() => e.dark === null ? t.dark.isActive : e.dark);
}
he({ name: "QBanner", props: { ...nt, inlineActions: Boolean, dense: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = lt(e, n), l = v(() => "q-banner row items-center" + (e.dense === true ? " q-banner--dense" : "") + (r.value === true ? " q-banner--dark q-dark" : "") + (e.rounded === true ? " rounded-borders" : "")), a = v(() => `q-banner__actions row items-center justify-end col-${e.inlineActions === true ? "auto" : "all"}`);
  return () => {
    const o = [d("div", { class: "q-banner__avatar col-auto row items-center self-start" }, $e(t.avatar)), d("div", { class: "q-banner__content col text-body2" }, $e(t.default))], i = $e(t.action);
    return i !== void 0 && o.push(d("div", { class: a.value }, i)), d("div", { class: l.value + (e.inlineActions === false && i !== void 0 ? " q-banner--top-padding" : ""), role: "alert" }, o);
  };
} });
he({ name: "QBar", props: { ...nt, dense: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = lt(e, n), l = v(() => `q-bar row no-wrap items-center q-bar--${e.dense === true ? "dense" : "standard"}  q-bar--${r.value === true ? "dark" : "light"}`);
  return () => d("div", { class: l.value, role: "toolbar" }, $e(t.default));
} });
var Sm = { left: "start", center: "center", right: "end", between: "between", around: "around", evenly: "evenly", stretch: "stretch" }, Hp = Object.keys(Sm), ks = { align: { type: String, validator: (e) => Hp.includes(e) } };
function Ts(e) {
  return v(() => {
    const t = e.align === void 0 ? e.vertical === true ? "stretch" : "left" : e.align;
    return `${e.vertical === true ? "items" : "justify"}-${Sm[t]}`;
  });
}
function uo(e) {
  if (Object(e.$parent) === e.$parent) return e.$parent;
  let { parent: t } = e.$;
  for (; Object(t) === t; ) {
    if (Object(t.proxy) === t.proxy) return t.proxy;
    t = t.parent;
  }
}
function Cm(e, t) {
  typeof t.type == "symbol" ? Array.isArray(t.children) === true && t.children.forEach((n) => {
    Cm(e, n);
  }) : e.add(t);
}
function qs(e) {
  const t = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    Cm(t, n);
  }), Array.from(t);
}
function Ms(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function pl(e) {
  return e.isUnmounted === true || e.isDeactivated === true;
}
var jp = ["", true];
he({ name: "QBreadcrumbs", props: { ...ks, separator: { type: String, default: "/" }, separatorColor: String, activeColor: { type: String, default: "primary" }, gutter: { type: String, validator: (e) => ["none", "xs", "sm", "md", "lg", "xl"].includes(e), default: "sm" } }, setup(e, { slots: t }) {
  const n = Ts(e), r = v(() => `flex items-center ${n.value}${e.gutter === "none" ? "" : ` q-gutter-${e.gutter}`}`), l = v(() => e.separatorColor ? ` text-${e.separatorColor}` : ""), a = v(() => ` text-${e.activeColor}`);
  return () => {
    if (t.default === void 0) return;
    const o = qs($e(t.default));
    if (o.length === 0) return;
    let i = 1;
    const u = [], c = o.filter((f) => {
      var _a3;
      return ((_a3 = f.type) == null ? void 0 : _a3.name) === "QBreadcrumbsEl";
    }).length, s = t.separator !== void 0 ? t.separator : () => e.separator;
    return o.forEach((f) => {
      var _a3;
      if (((_a3 = f.type) == null ? void 0 : _a3.name) === "QBreadcrumbsEl") {
        const h = i < c, m = f.props !== null && jp.includes(f.props.disable), g = (h === true ? "" : " q-breadcrumbs--last") + (m !== true && h === true ? a.value : "");
        i++, u.push(d("div", { class: `flex items-center${g}` }, [f])), h === true && u.push(d("div", { class: "q-breadcrumbs__separator" + l.value }, s()));
      } else u.push(f);
    }), d("div", { class: "q-breadcrumbs" }, [d("div", { class: r.value }, u)]);
  };
} });
function Zc(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
function Jc(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Up(e, t) {
  for (const n in t) {
    const r = t[n], l = e[n];
    if (typeof r == "string") {
      if (r !== l) return false;
    } else if (Array.isArray(l) === false || l.length !== r.length || r.some((a, o) => a !== l[o])) return false;
  }
  return true;
}
function ed(e, t) {
  return Array.isArray(t) === true ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function Qp(e, t) {
  return Array.isArray(e) === true ? ed(e, t) : Array.isArray(t) === true ? ed(t, e) : e === t;
}
function Kp(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (const n in e) if (Qp(e[n], t[n]) === false) return false;
  return true;
}
var km = { to: [String, Object], replace: Boolean, href: String, target: String, disable: Boolean }, $a = { ...km, exact: Boolean, activeClass: { type: String, default: "q-router-link--active" }, exactActiveClass: { type: String, default: "q-router-link--exact-active" } };
function di({ fallbackTag: e, useDisableForRouterLinkProps: t = true } = {}) {
  const n = xe(), { props: r, proxy: l, emit: a } = n, o = Ms(n), i = v(() => r.disable !== true && r.href !== void 0), u = v(t === true ? () => o === true && r.disable !== true && i.value !== true && r.to !== void 0 && r.to !== null && r.to !== "" : () => o === true && i.value !== true && r.to !== void 0 && r.to !== null && r.to !== ""), c = v(() => u.value === true ? y(r.to) : null), s = v(() => c.value !== null), f = v(() => i.value === true || s.value === true), h = v(() => r.type === "a" || f.value === true ? "a" : r.tag || e || "div"), m = v(() => i.value === true ? { href: r.href, target: r.target } : s.value === true ? { href: c.value.href, target: r.target } : {}), g = v(() => {
    if (s.value === false) return -1;
    const { matched: C } = c.value, { length: P } = C, F = C[P - 1];
    if (F === void 0) return -1;
    const j = l.$route.matched;
    if (j.length === 0) return -1;
    const $ = j.findIndex(Jc.bind(null, F));
    if ($ !== -1) return $;
    const L = Zc(C[P - 2]);
    return P > 1 && Zc(F) === L && j[j.length - 1].path !== L ? j.findIndex(Jc.bind(null, C[P - 2])) : $;
  }), _ = v(() => s.value === true && g.value !== -1 && Up(l.$route.params, c.value.params)), w = v(() => _.value === true && g.value === l.$route.matched.length - 1 && Kp(l.$route.params, c.value.params)), T = v(() => s.value === true ? w.value === true ? ` ${r.exactActiveClass} ${r.activeClass}` : r.exact === true ? "" : _.value === true ? ` ${r.activeClass}` : "" : "");
  function y(C) {
    try {
      return l.$router.resolve(C);
    } catch {
    }
    return null;
  }
  function p(C, { returnRouterError: P, to: F = r.to, replace: j = r.replace } = {}) {
    if (r.disable === true) return C.preventDefault(), Promise.resolve(false);
    if (C.metaKey || C.altKey || C.ctrlKey || C.shiftKey || C.button !== void 0 && C.button !== 0 || r.target === "_blank") return Promise.resolve(false);
    C.preventDefault();
    const $ = l.$router[j === true ? "replace" : "push"](F);
    return P === true ? $ : $.then(() => {
    }).catch(() => {
    });
  }
  function b(C) {
    if (s.value === true) {
      const P = (F) => p(C, F);
      a("click", C, P), C.defaultPrevented !== true && P();
    } else a("click", C);
  }
  return { hasRouterLink: s, hasHrefLink: i, hasLink: f, linkTag: h, resolvedLink: c, linkIsActive: _, linkIsExactActive: w, linkClass: T, linkAttrs: m, getLink: y, navigateToRouterLink: p, navigateOnClick: b };
}
he({ name: "QBreadcrumbsEl", props: { ...$a, label: String, icon: String, tag: { type: String, default: "span" } }, emits: ["click"], setup(e, { slots: t }) {
  const { linkTag: n, linkAttrs: r, linkClass: l, navigateOnClick: a } = di(), o = v(() => ({ class: "q-breadcrumbs__el q-link flex inline items-center relative-position " + (e.disable !== true ? "q-link--focusable" + l.value : "q-breadcrumbs__el--disable"), ...r.value, onClick: a })), i = v(() => "q-breadcrumbs__el-icon" + (e.label !== void 0 ? " q-breadcrumbs__el-icon--with-label" : ""));
  return () => {
    const u = [];
    return e.icon !== void 0 && u.push(d(et, { class: i.value, name: e.icon })), e.label !== void 0 && u.push(e.label), d(n.value, { ...o.value }, qt(t.default, u));
  };
} });
var Et = { size: { type: [String, Number], default: "1em" }, color: String };
function Rt(e) {
  return { cSize: v(() => e.size in Vu ? `${Vu[e.size]}px` : e.size), classes: v(() => "q-spinner" + (e.color ? ` text-${e.color}` : "")) };
}
var wn = he({ name: "QSpinner", props: { ...Et, thickness: { type: Number, default: 5 } }, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => d("svg", { class: n.value + " q-spinner-mat", width: t.value, height: t.value, viewBox: "25 25 50 50" }, [d("circle", { class: "path", cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": e.thickness, "stroke-miterlimit": "10" })]);
} });
function Po(e) {
  if (e === window) return { top: 0, left: 0 };
  const { top: t, left: n } = e.getBoundingClientRect();
  return { top: t, left: n };
}
function kr(e) {
  return e === window ? window.innerHeight : e.getBoundingClientRect().height;
}
function Iu(e, t) {
  const n = e.style;
  for (const r in t) n[r] = t[r];
}
function Wp(e) {
  if (e == null) return;
  if (typeof e == "string") try {
    return document.querySelector(e) || void 0;
  } catch {
    return;
  }
  const t = Ve(e);
  if (t) return t.$el || t;
}
function Tm(e, t) {
  if (e == null || e.contains(t) === true) return true;
  for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling) if (n.contains(t)) return true;
  return false;
}
function qm(e, t = 250) {
  let n = false, r;
  return function() {
    return n === false && (n = true, setTimeout(() => {
      n = false;
    }, t), r = e.apply(this, arguments)), r;
  };
}
function td(e, t, n, r) {
  n.modifiers.stop === true && wt(e);
  const l = n.modifiers.color;
  let a = n.modifiers.center;
  a = a === true || r === true;
  const o = document.createElement("span"), i = document.createElement("span"), u = tn(e), { left: c, top: s, width: f, height: h } = t.getBoundingClientRect(), m = Math.sqrt(f * f + h * h), g = m / 2, _ = `${(f - m) / 2}px`, w = a ? _ : `${u.left - c - g}px`, T = `${(h - m) / 2}px`, y = a ? T : `${u.top - s - g}px`;
  i.className = "q-ripple__inner", Iu(i, { height: `${m}px`, width: `${m}px`, transform: `translate3d(${w},${y},0) scale3d(.2,.2,1)`, opacity: 0 }), o.className = `q-ripple${l ? " text-" + l : ""}`, o.setAttribute("dir", "ltr"), o.appendChild(i), t.appendChild(o);
  const p = () => {
    o.remove(), clearTimeout(b);
  };
  n.abort.push(p);
  let b = setTimeout(() => {
    i.classList.add("q-ripple__inner--enter"), i.style.transform = `translate3d(${_},${T},0) scale3d(1,1,1)`, i.style.opacity = 0.2, b = setTimeout(() => {
      i.classList.remove("q-ripple__inner--enter"), i.classList.add("q-ripple__inner--leave"), i.style.opacity = 0, b = setTimeout(() => {
        o.remove(), n.abort.splice(n.abort.indexOf(p), 1);
      }, 275);
    }, 250);
  }, 50);
}
function nd(e, { modifiers: t, value: n, arg: r }) {
  const l = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = { early: l.early === true, stop: l.stop === true, center: l.center === true, color: l.color || r, keyCodes: [].concat(l.keyCodes || 13) };
}
var fi = $n({ name: "ripple", beforeMount(e, t) {
  const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
  if (n.ripple === false) return;
  const r = { cfg: n, enabled: t.value !== false, modifiers: {}, abort: [], start(l) {
    r.enabled === true && l.qSkipRipple !== true && l.type === (r.modifiers.early === true ? "pointerdown" : "click") && td(l, e, r, l.qKeyEvent === true);
  }, keystart: qm((l) => {
    r.enabled === true && l.qSkipRipple !== true && yn(l, r.modifiers.keyCodes) === true && l.type === `key${r.modifiers.early === true ? "down" : "up"}` && td(l, e, r, true);
  }, 300) };
  nd(r, t), e.__qripple = r, Tt(r, "main", [[e, "pointerdown", "start", "passive"], [e, "click", "start", "passive"], [e, "keydown", "keystart", "passive"], [e, "keyup", "keystart", "passive"]]);
}, updated(e, t) {
  if (t.oldValue !== t.value) {
    const n = e.__qripple;
    n !== void 0 && (n.enabled = t.value !== false, n.enabled === true && Object(t.value) === t.value && nd(n, t));
  }
}, beforeUnmount(e) {
  const t = e.__qripple;
  t !== void 0 && (t.abort.forEach((n) => {
    n();
  }), Yt(t, "main"), delete e._qripple);
} }), $o = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 }, Yp = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, Xp = ["button", "submit", "reset"], Gp = /[^\s]\/[^\s]/, Mm = ["flat", "outline", "push", "unelevated"];
function Es(e, t) {
  return e.flat === true ? "flat" : e.outline === true ? "outline" : e.push === true ? "push" : e.unelevated === true ? "unelevated" : t;
}
function Em(e) {
  const t = Es(e);
  return t !== void 0 ? { [t]: true } : {};
}
var Rs = { ...el, ...km, type: { type: String, default: "button" }, label: [Number, String], icon: String, iconRight: String, ...Mm.reduce((e, t) => (e[t] = Boolean) && e, {}), square: Boolean, rounded: Boolean, glossy: Boolean, size: String, fab: Boolean, fabMini: Boolean, padding: String, color: String, textColor: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, tabindex: [Number, String], ripple: { type: [Boolean, Object], default: true }, align: { ...ks.align, default: "center" }, stack: Boolean, stretch: Boolean, loading: { type: Boolean, default: null }, disable: Boolean }, Zp = { ...Rs, round: Boolean };
function Jp(e) {
  const t = tl(e, Yp), n = Ts(e), { hasRouterLink: r, hasLink: l, linkTag: a, linkAttrs: o, navigateOnClick: i } = di({ fallbackTag: "button" }), u = v(() => {
    const w = e.fab === false && e.fabMini === false ? t.value : {};
    return e.padding !== void 0 ? Object.assign({}, w, { padding: e.padding.split(/\s+/).map((T) => T in $o ? $o[T] + "px" : T).join(" "), minWidth: "0", minHeight: "0" }) : w;
  }), c = v(() => e.rounded === true || e.fab === true || e.fabMini === true), s = v(() => e.disable !== true && e.loading !== true), f = v(() => s.value === true ? e.tabindex || 0 : -1), h = v(() => Es(e, "standard")), m = v(() => {
    const w = { tabindex: f.value };
    return l.value === true ? Object.assign(w, o.value) : Xp.includes(e.type) === true && (w.type = e.type), a.value === "a" ? (e.disable === true ? w["aria-disabled"] = "true" : w.href === void 0 && (w.role = "button"), r.value !== true && Gp.test(e.type) === true && (w.type = e.type)) : e.disable === true && (w.disabled = "", w["aria-disabled"] = "true"), e.loading === true && e.percentage !== void 0 && Object.assign(w, { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": e.percentage }), w;
  }), g = v(() => {
    let w;
    e.color !== void 0 ? e.flat === true || e.outline === true ? w = `text-${e.textColor || e.color}` : w = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (w = `text-${e.textColor}`);
    const T = e.round === true ? "round" : `rectangle${c.value === true ? " q-btn--rounded" : e.square === true ? " q-btn--square" : ""}`;
    return `q-btn--${h.value} q-btn--${T}` + (w !== void 0 ? " " + w : "") + (s.value === true ? " q-btn--actionable q-focusable q-hoverable" : e.disable === true ? " disabled" : "") + (e.fab === true ? " q-btn--fab" : e.fabMini === true ? " q-btn--fab-mini" : "") + (e.noCaps === true ? " q-btn--no-uppercase" : "") + (e.dense === true ? " q-btn--dense" : "") + (e.stretch === true ? " no-border-radius self-stretch" : "") + (e.glossy === true ? " glossy" : "") + (e.square ? " q-btn--square" : "");
  }), _ = v(() => n.value + (e.stack === true ? " column" : " row") + (e.noWrap === true ? " no-wrap text-no-wrap" : "") + (e.loading === true ? " q-btn__content--hidden" : ""));
  return { classes: g, style: u, innerClasses: _, attributes: m, hasLink: l, linkTag: a, navigateOnClick: i, isActionable: s };
}
var { passiveCapture: vn } = ft, nr = null, lr = null, rr = null, Je = he({ name: "QBtn", props: { ...Zp, percentage: Number, darkPercentage: Boolean, onTouchstart: [Function, Array] }, emits: ["click", "keydown", "mousedown", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { classes: l, style: a, innerClasses: o, attributes: i, hasLink: u, linkTag: c, navigateOnClick: s, isActionable: f } = Jp(e), h = W(null), m = W(null);
  let g = null, _, w = null;
  const T = v(() => e.label !== void 0 && e.label !== null && e.label !== ""), y = v(() => e.disable === true || e.ripple === false ? false : { keyCodes: u.value === true ? [13, 32] : [13], ...e.ripple === true ? {} : e.ripple }), p = v(() => ({ center: e.round })), b = v(() => {
    const k = Math.max(0, Math.min(100, e.percentage));
    return k > 0 ? { transition: "transform 0.6s", transform: `translateX(${k - 100}%)` } : {};
  }), C = v(() => {
    if (e.loading === true) return { onMousedown: A, onTouchstart: A, onClick: A, onKeydown: A, onKeyup: A };
    if (f.value === true) {
      const k = { onClick: F, onKeydown: j, onMousedown: L };
      if (r.$q.platform.has.touch === true) {
        const U = e.onTouchstart !== void 0 ? "" : "Passive";
        k[`onTouchstart${U}`] = $;
      }
      return k;
    }
    return { onClick: je };
  }), P = v(() => ({ ref: h, class: "q-btn q-btn-item non-selectable no-outline " + l.value, style: a.value, ...i.value, ...C.value }));
  function F(k) {
    if (h.value !== null) {
      if (k !== void 0) {
        if (k.defaultPrevented === true) return;
        const U = document.activeElement;
        if (e.type === "submit" && U !== document.body && h.value.contains(U) === false && U.contains(h.value) === false) {
          k.qAvoidFocus !== true && h.value.focus();
          const Q = () => {
            var _a3;
            document.removeEventListener("keydown", je, true), document.removeEventListener("keyup", Q, vn), (_a3 = h.value) == null ? void 0 : _a3.removeEventListener("blur", Q, vn);
          };
          document.addEventListener("keydown", je, true), document.addEventListener("keyup", Q, vn), h.value.addEventListener("blur", Q, vn);
        }
      }
      s(k);
    }
  }
  function j(k) {
    h.value !== null && (n("keydown", k), yn(k, [13, 32]) === true && lr !== h.value && (lr !== null && q(), k.defaultPrevented !== true && (k.qAvoidFocus !== true && h.value.focus(), lr = h.value, h.value.classList.add("q-btn--active"), document.addEventListener("keyup", H, true), h.value.addEventListener("blur", H, vn)), je(k)));
  }
  function $(k) {
    h.value !== null && (n("touchstart", k), k.defaultPrevented !== true && (nr !== h.value && (nr !== null && q(), nr = h.value, g = k.target, g.addEventListener("touchcancel", H, vn), g.addEventListener("touchend", H, vn)), _ = true, w !== null && clearTimeout(w), w = setTimeout(() => {
      w = null, _ = false;
    }, 200)));
  }
  function L(k) {
    h.value !== null && (k.qSkipRipple = _ === true, n("mousedown", k), k.defaultPrevented !== true && rr !== h.value && (rr !== null && q(), rr = h.value, h.value.classList.add("q-btn--active"), document.addEventListener("mouseup", H, vn)));
  }
  function H(k) {
    if (h.value !== null && !((k == null ? void 0 : k.type) === "blur" && document.activeElement === h.value)) {
      if ((k == null ? void 0 : k.type) === "keyup") {
        if (lr === h.value && yn(k, [13, 32]) === true) {
          const U = new MouseEvent("click", k);
          U.qKeyEvent = true, k.defaultPrevented === true && Dt(U), k.cancelBubble === true && wt(U), h.value.dispatchEvent(U), je(k), k.qKeyEvent = true;
        }
        n("keyup", k);
      }
      q();
    }
  }
  function q(k) {
    var _a3, _b2;
    const U = m.value;
    k !== true && (nr === h.value || rr === h.value) && U !== null && U !== document.activeElement && (U.setAttribute("tabindex", -1), U.focus()), nr === h.value && (g !== null && (g.removeEventListener("touchcancel", H, vn), g.removeEventListener("touchend", H, vn)), nr = g = null), rr === h.value && (document.removeEventListener("mouseup", H, vn), rr = null), lr === h.value && (document.removeEventListener("keyup", H, true), (_a3 = h.value) == null ? void 0 : _a3.removeEventListener("blur", H, vn), lr = null), (_b2 = h.value) == null ? void 0 : _b2.classList.remove("q-btn--active");
  }
  function A(k) {
    je(k), k.qSkipRipple = true;
  }
  return We(() => {
    q(true);
  }), Object.assign(r, { click: (k) => {
    f.value === true && F(k);
  } }), () => {
    let k = [];
    e.icon !== void 0 && k.push(d(et, { name: e.icon, left: e.stack !== true && T.value === true, role: "img" })), T.value === true && k.push(d("span", { class: "block" }, [e.label])), k = qt(t.default, k), e.iconRight !== void 0 && e.round === false && k.push(d(et, { name: e.iconRight, right: e.stack !== true && T.value === true, role: "img" }));
    const U = [d("span", { class: "q-focus-helper", ref: m })];
    return e.loading === true && e.percentage !== void 0 && U.push(d("span", { class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === true ? " q-btn__progress--dark" : "") }, [d("span", { class: "q-btn__progress-indicator fit block", style: b.value })])), U.push(d("span", { class: "q-btn__content text-center col items-center q-anchor--skip " + o.value }, k)), e.loading !== null && U.push(d(Ot, { name: "q-transition--fade" }, () => e.loading === true ? [d("span", { key: "loading", class: "absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : [d(wn)])] : null)), cn(d(c.value, P.value, U), [[fi, y.value, void 0, p.value]]);
  };
} }), Rm = he({ name: "QBtnGroup", props: { unelevated: Boolean, outline: Boolean, flat: Boolean, rounded: Boolean, square: Boolean, push: Boolean, stretch: Boolean, glossy: Boolean, spread: Boolean }, setup(e, { slots: t }) {
  const n = v(() => {
    const r = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter((l) => e[l] === true).map((l) => `q-btn-group--${l}`).join(" ");
    return `q-btn-group row no-wrap${r.length !== 0 ? " " + r : ""}` + (e.spread === true ? " q-btn-group--spread" : " inline");
  });
  return () => d("div", { class: n.value }, $e(t.default));
} });
function Rn() {
  if (window.getSelection !== void 0) {
    const e = window.getSelection();
    e.empty !== void 0 ? e.empty() : e.removeAllRanges !== void 0 && (e.removeAllRanges(), rm.is.mobile !== true && e.addRange(document.createRange()));
  } else document.selection !== void 0 && document.selection.empty();
}
var Am = { target: { type: [Boolean, String, Element], default: true }, noParentEvent: Boolean }, Pm = { ...Am, contextMenu: Boolean };
function As({ showing: e, avoidEmit: t, configureAnchorEl: n }) {
  const { props: r, proxy: l, emit: a } = xe(), o = W(null);
  let i = null;
  function u(m) {
    return o.value === null ? false : m === void 0 || m.touches === void 0 || m.touches.length <= 1;
  }
  const c = {};
  n === void 0 && (Object.assign(c, { hide(m) {
    l.hide(m);
  }, toggle(m) {
    l.toggle(m), m.qAnchorHandled = true;
  }, toggleKey(m) {
    yn(m, 13) === true && c.toggle(m);
  }, contextClick(m) {
    l.hide(m), Dt(m), Qe(() => {
      l.show(m), m.qAnchorHandled = true;
    });
  }, prevent: Dt, mobileTouch(m) {
    if (c.mobileCleanup(m), u(m) !== true) return;
    l.hide(m), o.value.classList.add("non-selectable");
    const g = m.target;
    Tt(c, "anchor", [[g, "touchmove", "mobileCleanup", "passive"], [g, "touchend", "mobileCleanup", "passive"], [g, "touchcancel", "mobileCleanup", "passive"], [o.value, "contextmenu", "prevent", "notPassive"]]), i = setTimeout(() => {
      i = null, l.show(m), m.qAnchorHandled = true;
    }, 300);
  }, mobileCleanup(m) {
    o.value.classList.remove("non-selectable"), i !== null && (clearTimeout(i), i = null), e.value === true && m !== void 0 && Rn();
  } }), n = function(m = r.contextMenu) {
    if (r.noParentEvent === true || o.value === null) return;
    let g;
    m === true ? l.$q.platform.is.mobile === true ? g = [[o.value, "touchstart", "mobileTouch", "passive"]] : g = [[o.value, "mousedown", "hide", "passive"], [o.value, "contextmenu", "contextClick", "notPassive"]] : g = [[o.value, "click", "toggle", "passive"], [o.value, "keyup", "toggleKey", "passive"]], Tt(c, "anchor", g);
  });
  function s() {
    Yt(c, "anchor");
  }
  function f(m) {
    for (o.value = m; o.value.classList.contains("q-anchor--skip"); ) o.value = o.value.parentNode;
    n();
  }
  function h() {
    if (r.target === false || r.target === "" || l.$el.parentNode === null) o.value = null;
    else if (r.target === true) f(l.$el.parentNode);
    else {
      let m = r.target;
      if (typeof r.target == "string") try {
        m = document.querySelector(r.target);
      } catch {
        m = void 0;
      }
      m != null ? (o.value = m.$el || m, n()) : (o.value = null, console.error(`Anchor: target "${r.target}" not found`));
    }
  }
  return ge(() => r.contextMenu, (m) => {
    o.value !== null && (s(), n(m));
  }), ge(() => r.target, () => {
    o.value !== null && s(), h();
  }), ge(() => r.noParentEvent, (m) => {
    o.value !== null && (m === true ? s() : n());
  }), ct(() => {
    h(), t !== true && r.modelValue === true && o.value === null && a("update:modelValue", false);
  }), We(() => {
    i !== null && clearTimeout(i), s();
  }), { anchorEl: o, canShow: u, anchorEvents: c };
}
function $m(e, t) {
  const n = W(null);
  let r;
  function l(i, u) {
    const c = `${u !== void 0 ? "add" : "remove"}EventListener`, s = u !== void 0 ? u : r;
    i !== window && i[c]("scroll", s, ft.passive), window[c]("scroll", s, ft.passive), r = u;
  }
  function a() {
    n.value !== null && (l(n.value), n.value = null);
  }
  const o = ge(() => e.noParentEvent, () => {
    n.value !== null && (a(), t());
  });
  return We(o), { localScrollTarget: n, unconfigureScrollTarget: a, changeScrollEvent: l };
}
var Pr = { modelValue: { type: Boolean, default: null }, "onUpdate:modelValue": [Function, Array] }, $r = ["beforeShow", "show", "beforeHide", "hide"];
function Lr({ showing: e, canShow: t, hideOnRouteChange: n, handleShow: r, handleHide: l, processOnMount: a }) {
  const o = xe(), { props: i, emit: u, proxy: c } = o;
  let s;
  function f(y) {
    e.value === true ? g(y) : h(y);
  }
  function h(y) {
    if (i.disable === true || (y == null ? void 0 : y.qAnchorHandled) === true || t !== void 0 && t(y) !== true) return;
    const p = i["onUpdate:modelValue"] !== void 0;
    p === true && (u("update:modelValue", true), s = y, Qe(() => {
      s === y && (s = void 0);
    })), (i.modelValue === null || p === false) && m(y);
  }
  function m(y) {
    e.value !== true && (e.value = true, u("beforeShow", y), r !== void 0 ? r(y) : u("show", y));
  }
  function g(y) {
    if (i.disable === true) return;
    const p = i["onUpdate:modelValue"] !== void 0;
    p === true && (u("update:modelValue", false), s = y, Qe(() => {
      s === y && (s = void 0);
    })), (i.modelValue === null || p === false) && _(y);
  }
  function _(y) {
    e.value !== false && (e.value = false, u("beforeHide", y), l !== void 0 ? l(y) : u("hide", y));
  }
  function w(y) {
    i.disable === true && y === true ? i["onUpdate:modelValue"] !== void 0 && u("update:modelValue", false) : y === true !== e.value && (y === true ? m : _)(s);
  }
  ge(() => i.modelValue, w), n !== void 0 && Ms(o) === true && ge(() => c.$route.fullPath, () => {
    n.value === true && e.value === true && g();
  }), a === true && ct(() => {
    w(i.modelValue);
  });
  const T = { show: h, hide: g, toggle: f };
  return Object.assign(c, T), T;
}
var Il = [], Sa = [];
function Lm(e) {
  Sa = Sa.filter((t) => t !== e);
}
function ey(e) {
  Lm(e), Sa.push(e);
}
function ld(e) {
  Lm(e), Sa.length === 0 && Il.length !== 0 && (Il[Il.length - 1](), Il = []);
}
function Br(e) {
  Sa.length === 0 ? e() : Il.push(e);
}
function ty(e) {
  Il = Il.filter((t) => t !== e);
}
var yr = [], ua = [], ny = 1, sl = document.body;
function La(e, t) {
  const n = document.createElement("div");
  if (n.id = t !== void 0 ? `q-portal--${t}--${ny++}` : e, Eo.globalNodes !== void 0) {
    const r = Eo.globalNodes.class;
    r !== void 0 && (n.className = r);
  }
  return sl.appendChild(n), yr.push(n), ua.push(t), n;
}
function Ps(e) {
  const t = yr.indexOf(e);
  yr.splice(t, 1), ua.splice(t, 1), e.remove();
}
function ly(e) {
  if (e === sl) return;
  if (sl = e, sl === document.body || ua.reduce((n, r) => r === "dialog" ? n + 1 : n, 0) < 2) {
    yr.forEach((n) => {
      n.contains(sl) === false && sl.appendChild(n);
    });
    return;
  }
  const t = ua.lastIndexOf("dialog");
  for (let n = 0; n < yr.length; n++) {
    const r = yr[n];
    (n === t || ua[n] !== "dialog") && r.contains(sl) === false && sl.appendChild(r);
  }
}
var _r = [];
function ry(e) {
  return _r.find((t) => t.contentEl !== null && t.contentEl.contains(e));
}
function Bm(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      if (e.hide(t), e.$props.separateClosePopup === true) return uo(e);
    } else if (e.__qPortal === true) {
      const n = uo(e);
      return (n == null ? void 0 : n.$options.name) === "QPopupProxy" ? (e.hide(t), n) : e;
    }
    e = uo(e);
  } while (e != null);
}
function ay(e, t, n) {
  for (; n !== 0 && e !== void 0 && e !== null; ) {
    if (e.__qPortal === true) {
      if (n--, e.$options.name === "QMenu") {
        e = Bm(e, t);
        continue;
      }
      e.hide(t);
    }
    e = uo(e);
  }
}
var oy = he({ name: "QPortal", setup(e, { slots: t }) {
  return () => t.default();
} });
function iy(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog") return true;
    if (e.type.name === "QDialog" || e.type.name === "QMenu") return false;
    e = e.parent;
  }
  return false;
}
function $s(e, t, n, r) {
  const l = W(false), a = W(false);
  let o = null;
  const i = {}, u = r === "dialog" && iy(e);
  function c(f) {
    if (f === true) {
      ld(i), a.value = true;
      return;
    }
    a.value = false, l.value === false && (u === false && o === null && (o = La(false, r)), l.value = true, _r.push(e.proxy), ey(i));
  }
  function s(f) {
    if (a.value = false, f !== true) return;
    ld(i), l.value = false;
    const h = _r.indexOf(e.proxy);
    h !== -1 && _r.splice(h, 1), o !== null && (Ps(o), o = null);
  }
  return li(() => {
    s(true);
  }), e.proxy.__qPortal = true, Vt(e.proxy, "contentEl", () => t.value), { showPortal: c, hidePortal: s, portalIsActive: l, portalIsAccessible: a, renderPortal: () => u === true ? n() : l.value === true ? [d(R0, { to: o }, d(oy, n))] : void 0 };
}
var Hl = { transitionShow: { type: String, default: "fade" }, transitionHide: { type: String, default: "fade" }, transitionDuration: { type: [String, Number], default: 300 } };
function vi(e, t = () => {
}, n = () => {
}) {
  return { transitionProps: v(() => {
    const r = `q-transition--${e.transitionShow || t()}`, l = `q-transition--${e.transitionHide || n()}`;
    return { appear: true, enterFromClass: `${r}-enter-from`, enterActiveClass: `${r}-enter-active`, enterToClass: `${r}-enter-to`, leaveFromClass: `${l}-leave-from`, leaveActiveClass: `${l}-leave-active`, leaveToClass: `${l}-leave-to` };
  }), transitionStyle: v(() => `--q-transition-duration: ${e.transitionDuration}ms`) };
}
function wr() {
  let e;
  const t = xe();
  function n() {
    e = void 0;
  }
  return Dn(n), We(n), { removeTick: n, registerTick(r) {
    e = r, Qe(() => {
      e === r && (pl(t) === false && e(), e = void 0);
    });
  } };
}
function Zn() {
  let e = null;
  const t = xe();
  function n() {
    e !== null && (clearTimeout(e), e = null);
  }
  return Dn(n), We(n), { removeTimeout: n, registerTimeout(r, l) {
    n(), pl(t) === false && (e = setTimeout(() => {
      e = null, r();
    }, l));
  } };
}
var er = [Element, String], uy = [null, document, document.body, document.scrollingElement, document.documentElement];
function In(e, t) {
  let n = Wp(t);
  if (n === void 0) {
    if (e == null) return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return uy.includes(n) ? window : n;
}
function Ha(e) {
  return (e === window ? document.body : e).scrollHeight;
}
function yl(e) {
  return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop;
}
function mi(e) {
  return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft;
}
function Fm(e, t, n = 0) {
  const r = arguments[3] === void 0 ? performance.now() : arguments[3], l = yl(e);
  if (n <= 0) {
    l !== t && zu(e, t);
    return;
  }
  requestAnimationFrame((a) => {
    const o = a - r, i = l + (t - l) / Math.max(o, n) * o;
    zu(e, i), i !== t && Fm(e, t, n - o, a);
  });
}
function Om(e, t, n = 0) {
  const r = arguments[3] === void 0 ? performance.now() : arguments[3], l = mi(e);
  if (n <= 0) {
    l !== t && Nu(e, t);
    return;
  }
  requestAnimationFrame((a) => {
    const o = a - r, i = l + (t - l) / Math.max(o, n) * o;
    Nu(e, i), i !== t && Om(e, t, n - o, a);
  });
}
function zu(e, t) {
  if (e === window) {
    window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t);
    return;
  }
  e.scrollTop = t;
}
function Nu(e, t) {
  if (e === window) {
    window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0);
    return;
  }
  e.scrollLeft = t;
}
function xr(e, t, n) {
  if (n) {
    Fm(e, t, n);
    return;
  }
  zu(e, t);
}
function Ni(e, t, n) {
  if (n) {
    Om(e, t, n);
    return;
  }
  Nu(e, t);
}
var ja;
function so() {
  if (ja !== void 0) return ja;
  const e = document.createElement("p"), t = document.createElement("div");
  Iu(e, { width: "100%", height: "200px" }), Iu(t, { position: "absolute", top: "0px", left: "0px", visibility: "hidden", width: "200px", height: "150px", overflow: "hidden" }), t.appendChild(e), document.body.appendChild(t);
  const n = e.offsetWidth;
  t.style.overflow = "scroll";
  let r = e.offsetWidth;
  return n === r && (r = t.clientWidth), t.remove(), ja = n - r, ja;
}
function sy(e, t = true) {
  return !e || e.nodeType !== Node.ELEMENT_NODE ? false : t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]));
}
var jl = [], Tr;
function cy(e) {
  Tr = e.keyCode === 27;
}
function dy() {
  Tr === true && (Tr = false);
}
function fy(e) {
  Tr === true && (Tr = false, yn(e, 27) === true && jl[jl.length - 1](e));
}
function Vm(e) {
  window[e]("keydown", cy), window[e]("blur", dy), window[e]("keyup", fy), Tr = false;
}
function Dm(e) {
  Ie.is.desktop === true && (jl.push(e), jl.length === 1 && Vm("addEventListener"));
}
function Lo(e) {
  const t = jl.indexOf(e);
  t !== -1 && (jl.splice(t, 1), jl.length === 0 && Vm("removeEventListener"));
}
var Ul = [];
function Im(e) {
  Ul[Ul.length - 1](e);
}
function zm(e) {
  Ie.is.desktop === true && (Ul.push(e), Ul.length === 1 && document.body.addEventListener("focusin", Im));
}
function Hu(e) {
  const t = Ul.indexOf(e);
  t !== -1 && (Ul.splice(t, 1), Ul.length === 0 && document.body.removeEventListener("focusin", Im));
}
var { notPassiveCapture: Bo } = ft, Ql = [];
function Fo(e) {
  const t = e.target;
  if (t === void 0 || t.nodeType === 8 || t.classList.contains("no-pointer-events") === true) return;
  let n = _r.length - 1;
  for (; n >= 0; ) {
    const r = _r[n].$;
    if (r.type.name === "QTooltip") {
      n--;
      continue;
    }
    if (r.type.name !== "QDialog") break;
    if (r.props.seamless !== true) return;
    n--;
  }
  for (let r = Ql.length - 1; r >= 0; r--) {
    const l = Ql[r];
    if ((l.anchorEl.value === null || l.anchorEl.value.contains(t) === false) && (t === document.body || l.innerRef.value !== null && l.innerRef.value.contains(t) === false)) e.qClickOutside = true, l.onClickOutside(e);
    else return;
  }
}
function Nm(e) {
  Ql.push(e), Ql.length === 1 && (document.addEventListener("mousedown", Fo, Bo), document.addEventListener("touchstart", Fo, Bo));
}
function Oo(e) {
  const t = Ql.findIndex((n) => n === e);
  t !== -1 && (Ql.splice(t, 1), Ql.length === 0 && (document.removeEventListener("mousedown", Fo, Bo), document.removeEventListener("touchstart", Fo, Bo)));
}
var rd, ad;
function Vo(e) {
  const t = e.split(" ");
  return t.length !== 2 ? false : ["top", "center", "bottom"].includes(t[0]) !== true ? (console.error("Anchor/Self position must start with one of top/center/bottom"), false) : ["left", "middle", "right", "start", "end"].includes(t[1]) !== true ? (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), false) : true;
}
function Hm(e) {
  return e ? !(e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number") : true;
}
var ju = { "start#ltr": "left", "start#rtl": "right", "end#ltr": "right", "end#rtl": "left" };
["left", "middle", "right"].forEach((e) => {
  ju[`${e}#ltr`] = e, ju[`${e}#rtl`] = e;
});
function Do(e, t) {
  const n = e.split(" ");
  return { vertical: n[0], horizontal: ju[`${n[1]}#${t === true ? "rtl" : "ltr"}`] };
}
function vy(e, t) {
  let { top: n, left: r, right: l, bottom: a, width: o, height: i } = e.getBoundingClientRect();
  return t !== void 0 && (n -= t[1], r -= t[0], a += t[1], l += t[0], o += t[0], i += t[1]), { top: n, bottom: a, height: i, left: r, right: l, width: o, middle: r + (l - r) / 2, center: n + (a - n) / 2 };
}
function my(e, t, n) {
  let { top: r, left: l } = e.getBoundingClientRect();
  return r += t.top, l += t.left, n !== void 0 && (r += n[1], l += n[0]), { top: r, bottom: r + 1, height: 1, left: l, right: l + 1, width: 1, middle: l, center: r };
}
function hy(e, t) {
  return { top: 0, center: t / 2, bottom: t, left: 0, middle: e / 2, right: e };
}
function od(e, t, n, r) {
  return { top: e[n.vertical] - t[r.vertical], left: e[n.horizontal] - t[r.horizontal] };
}
function Ls(e, t = 0) {
  if (e.targetEl === null || e.anchorEl === null || t > 5) return;
  if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      Ls(e, t + 1);
    }, 10);
    return;
  }
  const { targetEl: n, offset: r, anchorEl: l, anchorOrigin: a, selfOrigin: o, absoluteOffset: i, fit: u, cover: c, maxHeight: s, maxWidth: f } = e;
  if (Ie.is.ios === true && window.visualViewport !== void 0) {
    const P = document.body.style, { offsetLeft: F, offsetTop: j } = window.visualViewport;
    F !== rd && (P.setProperty("--q-pe-left", F + "px"), rd = F), j !== ad && (P.setProperty("--q-pe-top", j + "px"), ad = j);
  }
  const { scrollLeft: h, scrollTop: m } = n, g = i === void 0 ? vy(l, c === true ? [0, 0] : r) : my(l, i, r);
  Object.assign(n.style, { top: 0, left: 0, minWidth: null, minHeight: null, maxWidth: f, maxHeight: s, visibility: "visible" });
  const { offsetWidth: _, offsetHeight: w } = n, { elWidth: T, elHeight: y } = u === true || c === true ? { elWidth: Math.max(g.width, _), elHeight: c === true ? Math.max(g.height, w) : w } : { elWidth: _, elHeight: w };
  let p = { maxWidth: f, maxHeight: s };
  (u === true || c === true) && (p.minWidth = g.width + "px", c === true && (p.minHeight = g.height + "px")), Object.assign(n.style, p);
  const b = hy(T, y);
  let C = od(g, b, a, o);
  if (i === void 0 || r === void 0) Hi(C, g, b, a, o);
  else {
    const { top: P, left: F } = C;
    Hi(C, g, b, a, o);
    let j = false;
    if (C.top !== P) {
      j = true;
      const $ = 2 * r[1];
      g.center = g.top -= $, g.bottom -= $ + 2;
    }
    if (C.left !== F) {
      j = true;
      const $ = 2 * r[0];
      g.middle = g.left -= $, g.right -= $ + 2;
    }
    j === true && (C = od(g, b, a, o), Hi(C, g, b, a, o));
  }
  p = { top: C.top + "px", left: C.left + "px" }, C.maxHeight !== void 0 && (p.maxHeight = C.maxHeight + "px", g.height > C.maxHeight && (p.minHeight = p.maxHeight)), C.maxWidth !== void 0 && (p.maxWidth = C.maxWidth + "px", g.width > C.maxWidth && (p.minWidth = p.maxWidth)), Object.assign(n.style, p), n.scrollTop !== m && (n.scrollTop = m), n.scrollLeft !== h && (n.scrollLeft = h);
}
function Hi(e, t, n, r, l) {
  const a = n.bottom, o = n.right, i = so(), u = window.innerHeight - i, c = document.body.clientWidth;
  if (e.top < 0 || e.top + a > u) if (l.vertical === "center") e.top = t[r.vertical] > u / 2 ? Math.max(0, u - a) : 0, e.maxHeight = Math.min(a, u);
  else if (t[r.vertical] > u / 2) {
    const s = Math.min(u, r.vertical === "center" ? t.center : r.vertical === l.vertical ? t.bottom : t.top);
    e.maxHeight = Math.min(a, s), e.top = Math.max(0, s - a);
  } else e.top = Math.max(0, r.vertical === "center" ? t.center : r.vertical === l.vertical ? t.top : t.bottom), e.maxHeight = Math.min(a, u - e.top);
  if (e.left < 0 || e.left + o > c) if (e.maxWidth = Math.min(o, c), l.horizontal === "middle") e.left = t[r.horizontal] > c / 2 ? Math.max(0, c - o) : 0;
  else if (t[r.horizontal] > c / 2) {
    const s = Math.min(c, r.horizontal === "middle" ? t.middle : r.horizontal === l.horizontal ? t.right : t.left);
    e.maxWidth = Math.min(o, s), e.left = Math.max(0, s - e.maxWidth);
  } else e.left = Math.max(0, r.horizontal === "middle" ? t.middle : r.horizontal === l.horizontal ? t.left : t.right), e.maxWidth = Math.min(o, c - e.left);
}
var hi = he({ name: "QMenu", inheritAttrs: false, props: { ...Pm, ...Pr, ...nt, ...Hl, persistent: Boolean, autoClose: Boolean, separateClosePopup: Boolean, noEscDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, fit: Boolean, cover: Boolean, square: Boolean, anchor: { type: String, validator: Vo }, self: { type: String, validator: Vo }, offset: { type: Array, validator: Hm }, scrollTarget: er, touchPosition: Boolean, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null } }, emits: [...$r, "click", "escapeKey"], setup(e, { slots: t, emit: n, attrs: r }) {
  let l = null, a, o, i;
  const u = xe(), { proxy: c } = u, { $q: s } = c, f = W(null), h = W(false), m = v(() => e.persistent !== true && e.noRouteDismiss !== true), g = lt(e, s), { registerTick: _, removeTick: w } = wr(), { registerTimeout: T } = Zn(), { transitionProps: y, transitionStyle: p } = vi(e), { localScrollTarget: b, changeScrollEvent: C, unconfigureScrollTarget: P } = $m(e, O), { anchorEl: F, canShow: j } = As({ showing: h }), { hide: $ } = Lr({ showing: h, canShow: j, handleShow: ye, handleHide: R, hideOnRouteChange: m, processOnMount: true }), { showPortal: L, hidePortal: H, renderPortal: q } = $s(u, f, ee, "menu"), A = { anchorEl: F, innerRef: f, onClickOutside(V) {
    if (e.persistent !== true && h.value === true) return $(V), (V.type === "touchstart" || V.target.classList.contains("q-dialog__backdrop")) && je(V), true;
  } }, k = v(() => Do(e.anchor || (e.cover === true ? "center middle" : "bottom start"), s.lang.rtl)), U = v(() => e.cover === true ? k.value : Do(e.self || "top start", s.lang.rtl)), Q = v(() => (e.square === true ? " q-menu--square" : "") + (g.value === true ? " q-menu--dark q-dark" : "")), Y = v(() => e.autoClose === true ? { onClick: Z } : {}), X = v(() => h.value === true && e.persistent !== true);
  ge(X, (V) => {
    V === true ? (Dm(B), Nm(A)) : (Lo(B), Oo(A));
  });
  function le() {
    Br(() => {
      let V = f.value;
      V && V.contains(document.activeElement) !== true && (V = V.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || V.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || V.querySelector("[autofocus], [data-autofocus]") || V, V.focus({ preventScroll: true }));
    });
  }
  function ye(V) {
    if (l = e.noRefocus === false ? document.activeElement : null, zm(oe), L(), O(), a = void 0, V !== void 0 && (e.touchPosition || e.contextMenu)) {
      const ne = tn(V);
      if (ne.left !== void 0) {
        const { top: pe, left: S } = F.value.getBoundingClientRect();
        a = { left: ne.left - S, top: ne.top - pe };
      }
    }
    o === void 0 && (o = ge(() => s.screen.width + "|" + s.screen.height + "|" + e.self + "|" + e.anchor + "|" + s.lang.rtl, M)), e.noFocus !== true && document.activeElement.blur(), _(() => {
      M(), e.noFocus !== true && le();
    }), T(() => {
      s.platform.is.ios === true && (i = e.autoClose, f.value.click()), M(), L(true), n("show", V);
    }, e.transitionDuration);
  }
  function R(V) {
    w(), H(), x(true), l !== null && (V === void 0 || V.qClickOutside !== true) && ((((V == null ? void 0 : V.type.indexOf("key")) === 0 ? l.closest('[tabindex]:not([tabindex^="-"])') : void 0) || l).focus(), l = null), T(() => {
      H(true), n("hide", V);
    }, e.transitionDuration);
  }
  function x(V) {
    a = void 0, o !== void 0 && (o(), o = void 0), (V === true || h.value === true) && (Hu(oe), P(), Oo(A), Lo(B)), V !== true && (l = null);
  }
  function O() {
    (F.value !== null || e.scrollTarget !== void 0) && (b.value = In(F.value, e.scrollTarget), C(b.value, M));
  }
  function Z(V) {
    i !== true ? (Bm(c, V), n("click", V)) : i = false;
  }
  function oe(V) {
    X.value === true && e.noFocus !== true && Tm(f.value, V.target) !== true && le();
  }
  function B(V) {
    e.noEscDismiss !== true && (n("escapeKey"), $(V));
  }
  function M() {
    Ls({ targetEl: f.value, offset: e.offset, anchorEl: F.value, anchorOrigin: k.value, selfOrigin: U.value, absoluteOffset: a, fit: e.fit, cover: e.cover, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function ee() {
    return d(Ot, y.value, () => h.value === true ? d("div", { role: "menu", ...r, ref: f, tabindex: -1, class: ["q-menu q-position-engine scroll" + Q.value, r.class], style: [r.style, p.value], ...Y.value }, $e(t.default)) : null);
  }
  return We(x), Object.assign(c, { focus: le, updatePosition: M }), q;
} }), ji, Ua = 0, Ht = new Array(256);
for (let e = 0; e < 256; e++) Ht[e] = (e + 256).toString(16).substring(1);
var gy = (() => {
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
    for (let r = t; r > 0; r--) n.push(Math.floor(Math.random() * 256));
    return n;
  };
})(), id = 4096;
function Ca() {
  (ji === void 0 || Ua + 16 > id) && (Ua = 0, ji = gy(id));
  const e = Array.prototype.slice.call(ji, Ua, Ua += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, Ht[e[0]] + Ht[e[1]] + Ht[e[2]] + Ht[e[3]] + "-" + Ht[e[4]] + Ht[e[5]] + "-" + Ht[e[6]] + Ht[e[7]] + "-" + Ht[e[8]] + Ht[e[9]] + "-" + Ht[e[10]] + Ht[e[11]] + Ht[e[12]] + Ht[e[13]] + Ht[e[14]] + Ht[e[15]];
}
function by(e) {
  return e ?? null;
}
function ud(e, t) {
  return e ?? (t === true ? `f_${Ca()}` : null);
}
function gi({ getValue: e, required: t = true } = {}) {
  if (rn.value === true) {
    const n = W(e !== void 0 ? by(e()) : null);
    return t === true && n.value === null && ct(() => {
      n.value = `f_${Ca()}`;
    }), e !== void 0 && ge(e, (r) => {
      n.value = ud(r, t);
    }), n;
  }
  return e !== void 0 ? v(() => ud(e(), t)) : W(`f_${Ca()}`);
}
var py = Object.keys(Rs);
function yy(e) {
  return py.reduce((t, n) => {
    const r = e[n];
    return r !== void 0 && (t[n] = r), t;
  }, {});
}
var _y = he({ name: "QBtnDropdown", props: { ...Rs, ...Hl, modelValue: Boolean, split: Boolean, dropdownIcon: String, contentClass: [Array, String, Object], contentStyle: [Array, String, Object], cover: Boolean, persistent: Boolean, noEscDismiss: Boolean, noRouteDismiss: Boolean, autoClose: Boolean, noRefocus: Boolean, noFocus: Boolean, menuAnchor: { type: String, default: "bottom end" }, menuSelf: { type: String, default: "top end" }, menuOffset: Array, disableMainBtn: Boolean, disableDropdown: Boolean, noIconAnimation: Boolean, toggleAriaLabel: String }, emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), l = W(e.modelValue), a = W(null), o = gi(), i = v(() => {
    const b = { "aria-expanded": l.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": o.value, "aria-label": e.toggleAriaLabel || r.$q.lang.label[l.value === true ? "collapse" : "expand"](e.label) };
    return (e.disable === true || e.split === false && e.disableMainBtn === true || e.disableDropdown === true) && (b["aria-disabled"] = "true"), b;
  }), u = v(() => "q-btn-dropdown__arrow" + (l.value === true && e.noIconAnimation === false ? " rotate-180" : "") + (e.split === false ? " q-btn-dropdown__arrow-container" : "")), c = v(() => Em(e)), s = v(() => yy(e));
  ge(() => e.modelValue, (b) => {
    var _a3;
    (_a3 = a.value) == null ? void 0 : _a3[b ? "show" : "hide"]();
  }), ge(() => e.split, p);
  function f(b) {
    l.value = true, n("beforeShow", b);
  }
  function h(b) {
    n("show", b), n("update:modelValue", true);
  }
  function m(b) {
    l.value = false, n("beforeHide", b);
  }
  function g(b) {
    n("hide", b), n("update:modelValue", false);
  }
  function _(b) {
    n("click", b);
  }
  function w(b) {
    wt(b), p(), n("click", b);
  }
  function T(b) {
    var _a3;
    (_a3 = a.value) == null ? void 0 : _a3.toggle(b);
  }
  function y(b) {
    var _a3;
    (_a3 = a.value) == null ? void 0 : _a3.show(b);
  }
  function p(b) {
    var _a3;
    (_a3 = a.value) == null ? void 0 : _a3.hide(b);
  }
  return Object.assign(r, { show: y, hide: p, toggle: T }), ct(() => {
    e.modelValue === true && y();
  }), () => {
    const b = [d(et, { class: u.value, name: e.dropdownIcon || r.$q.iconSet.arrow.dropdown })];
    return e.disableDropdown !== true && b.push(d(hi, { ref: a, id: o.value, class: e.contentClass, style: e.contentStyle, cover: e.cover, fit: true, persistent: e.persistent, noEscDismiss: e.noEscDismiss, noRouteDismiss: e.noRouteDismiss, autoClose: e.autoClose, noFocus: e.noFocus, noRefocus: e.noRefocus, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, separateClosePopup: true, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, onBeforeShow: f, onShow: h, onBeforeHide: m, onHide: g }, t.default)), e.split === false ? d(Je, { class: "q-btn-dropdown q-btn-dropdown--simple", ...s.value, ...i.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: _ }, { default: () => $e(t.label, []).concat(b), loading: t.loading }) : d(Rm, { class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item", rounded: e.rounded, square: e.square, ...c.value, glossy: e.glossy, stretch: e.stretch }, () => [d(Je, { class: "q-btn-dropdown--current", ...s.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: w }, { default: t.label, loading: t.loading }), d(Je, { class: "q-btn-dropdown__arrow-container q-anchor--skip", ...i.value, ...c.value, disable: e.disable === true || e.disableDropdown === true, rounded: e.rounded, color: e.color, textColor: e.textColor, dense: e.dense, size: e.size, padding: e.padding, ripple: e.ripple }, () => b)]);
  };
} }), xn = { name: String };
function Ba(e) {
  return v(() => ({ type: "hidden", name: e.name, value: e.modelValue }));
}
function ql(e = {}) {
  return (t, n, r) => {
    t[n](d("input", { class: "hidden" + (r || ""), ...e.value }));
  };
}
function Bs(e) {
  return v(() => e.name || e.for);
}
he({ name: "QBtnToggle", props: { ...xn, modelValue: { required: true }, options: { type: Array, required: true, validator: (e) => e.every((t) => ("label" in t || "icon" in t || "slot" in t) && "value" in t) }, color: String, textColor: String, toggleColor: { type: String, default: "primary" }, toggleTextColor: String, outline: Boolean, flat: Boolean, unelevated: Boolean, rounded: Boolean, push: Boolean, glossy: Boolean, size: String, padding: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, readonly: Boolean, disable: Boolean, stack: Boolean, stretch: Boolean, spread: Boolean, clearable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "clear", "click"], setup(e, { slots: t, emit: n }) {
  const r = v(() => e.options.find((h) => h.value === e.modelValue) !== void 0), l = v(() => ({ type: "hidden", name: e.name, value: e.modelValue })), a = ql(l), o = v(() => Em(e)), i = v(() => ({ rounded: e.rounded, dense: e.dense, ...o.value })), u = v(() => e.options.map((h, m) => {
    const { attrs: g, value: _, slot: w, ...T } = h;
    return { slot: w, props: { key: m, "aria-pressed": _ === e.modelValue ? "true" : "false", ...g, ...T, ...i.value, disable: e.disable === true || T.disable === true, color: _ === e.modelValue ? s(T, "toggleColor") : s(T, "color"), textColor: _ === e.modelValue ? s(T, "toggleTextColor") : s(T, "textColor"), noCaps: s(T, "noCaps") === true, noWrap: s(T, "noWrap") === true, size: s(T, "size"), padding: s(T, "padding"), ripple: s(T, "ripple"), stack: s(T, "stack") === true, stretch: s(T, "stretch") === true, onClick(y) {
      c(_, h, y);
    } } };
  }));
  function c(h, m, g) {
    e.readonly !== true && (e.modelValue === h ? e.clearable === true && (n("update:modelValue", null, null), n("clear")) : n("update:modelValue", h, m), n("click", g));
  }
  function s(h, m) {
    return h[m] === void 0 ? e[m] : h[m];
  }
  function f() {
    const h = u.value.map((m) => d(Je, m.props, m.slot !== void 0 ? t[m.slot] : void 0));
    return e.name !== void 0 && e.disable !== true && r.value === true && a(h, "push"), qt(t.default, h);
  }
  return () => d(Rm, { class: "q-btn-toggle", ...o.value, rounded: e.rounded, stretch: e.stretch, glossy: e.glossy, spread: e.spread }, f);
} });
var jm = he({ name: "QCard", props: { ...nt, tag: { type: String, default: "div" }, square: Boolean, flat: Boolean, bordered: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = lt(e, n), l = v(() => "q-card" + (r.value === true ? " q-card--dark q-dark" : "") + (e.bordered === true ? " q-card--bordered" : "") + (e.square === true ? " q-card--square no-border-radius" : "") + (e.flat === true ? " q-card--flat no-shadow" : ""));
  return () => d(e.tag, { class: l.value }, $e(t.default));
} }), Dl = he({ name: "QCardSection", props: { tag: { type: String, default: "div" }, horizontal: Boolean }, setup(e, { slots: t }) {
  const n = v(() => `q-card__section q-card__section--${e.horizontal === true ? "horiz row no-wrap" : "vert"}`);
  return () => d(e.tag, { class: n.value }, $e(t.default));
} }), wy = he({ name: "QCardActions", props: { ...ks, vertical: Boolean }, setup(e, { slots: t }) {
  const n = Ts(e), r = v(() => `q-card__actions ${n.value} q-card__actions--${e.vertical === true ? "vert column" : "horiz row"}`);
  return () => d("div", { class: r.value }, $e(t.default));
} }), Fs = { left: true, right: true, up: true, down: true, horizontal: true, vertical: true }, xy = Object.keys(Fs);
Fs.all = true;
function Io(e) {
  const t = {};
  for (const n of xy) e[n] === true && (t[n] = true);
  return Object.keys(t).length === 0 ? Fs : (t.horizontal === true ? t.left = t.right = true : t.left === true && t.right === true && (t.horizontal = true), t.vertical === true ? t.up = t.down = true : t.up === true && t.down === true && (t.vertical = true), t.horizontal === true && t.vertical === true && (t.all = true), t);
}
var Sy = ["INPUT", "TEXTAREA"];
function zo(e, t) {
  return t.event === void 0 && e.target !== void 0 && e.target.draggable !== true && typeof t.handler == "function" && Sy.includes(e.target.nodeName.toUpperCase()) === false && (e.qClonedBy === void 0 || e.qClonedBy.indexOf(t.uid) === -1);
}
function Cy(e) {
  const t = [0.06, 6, 50];
  return typeof e == "string" && e.length && e.split(":").forEach((n, r) => {
    const l = parseFloat(n);
    l && (t[r] = l);
  }), t;
}
var ky = $n({ name: "touch-swipe", beforeMount(e, { value: t, arg: n, modifiers: r }) {
  if (r.mouse !== true && Ie.has.touch !== true) return;
  const l = r.mouseCapture === true ? "Capture" : "", a = { handler: t, sensitivity: Cy(n), direction: Io(r), noop: xt, mouseStart(o) {
    zo(o, a) && ui(o) && (Tt(a, "temp", [[document, "mousemove", "move", `notPassive${l}`], [document, "mouseup", "end", "notPassiveCapture"]]), a.start(o, true));
  }, touchStart(o) {
    if (zo(o, a)) {
      const i = o.target;
      Tt(a, "temp", [[i, "touchmove", "move", "notPassiveCapture"], [i, "touchcancel", "end", "notPassiveCapture"], [i, "touchend", "end", "notPassiveCapture"]]), a.start(o);
    }
  }, start(o, i) {
    Ie.is.firefox === true && pr(e, true);
    const u = tn(o);
    a.event = { x: u.left, y: u.top, time: Date.now(), mouse: i === true, dir: false };
  }, move(o) {
    if (a.event === void 0) return;
    if (a.event.dir !== false) {
      je(o);
      return;
    }
    const i = Date.now() - a.event.time;
    if (i === 0) return;
    const u = tn(o), c = u.left - a.event.x, s = Math.abs(c), f = u.top - a.event.y, h = Math.abs(f);
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
    a.direction.vertical === true && s < h && s < 100 && g > a.sensitivity[0] && (a.event.dir = f < 0 ? "up" : "down"), a.direction.horizontal === true && s > h && h < 100 && m > a.sensitivity[0] && (a.event.dir = c < 0 ? "left" : "right"), a.direction.up === true && s < h && f < 0 && s < 100 && g > a.sensitivity[0] && (a.event.dir = "up"), a.direction.down === true && s < h && f > 0 && s < 100 && g > a.sensitivity[0] && (a.event.dir = "down"), a.direction.left === true && s > h && c < 0 && h < 100 && m > a.sensitivity[0] && (a.event.dir = "left"), a.direction.right === true && s > h && c > 0 && h < 100 && m > a.sensitivity[0] && (a.event.dir = "right"), a.event.dir !== false ? (je(o), a.event.mouse === true && (document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), Rn(), a.styleCleanup = (_) => {
      a.styleCleanup = void 0, document.body.classList.remove("non-selectable");
      const w = () => {
        document.body.classList.remove("no-pointer-events--children");
      };
      _ === true ? setTimeout(w, 50) : w();
    }), a.handler({ evt: o, touch: a.event.mouse !== true, mouse: a.event.mouse, direction: a.event.dir, duration: i, distance: { x: s, y: h } })) : a.end(o);
  }, end(o) {
    var _a3;
    a.event !== void 0 && (Yt(a, "temp"), Ie.is.firefox === true && pr(e, false), (_a3 = a.styleCleanup) == null ? void 0 : _a3.call(a, true), o !== void 0 && a.event.dir !== false && je(o), a.event = void 0);
  } };
  if (e.__qtouchswipe = a, r.mouse === true) {
    const o = r.mouseCapture === true || r.mousecapture === true ? "Capture" : "";
    Tt(a, "main", [[e, "mousedown", "mouseStart", `passive${o}`]]);
  }
  Ie.has.touch === true && Tt(a, "main", [[e, "touchstart", "touchStart", `passive${r.capture === true ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const n = e.__qtouchswipe;
  n !== void 0 && (t.oldValue !== t.value && (typeof t.value != "function" && n.end(), n.handler = t.value), n.direction = Io(t.modifiers));
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qtouchswipe;
  t !== void 0 && (Yt(t, "main"), Yt(t, "temp"), Ie.is.firefox === true && pr(e, false), (_a3 = t.styleCleanup) == null ? void 0 : _a3.call(t), delete e.__qtouchswipe);
} });
function Fa() {
  let e = /* @__PURE__ */ Object.create(null);
  return { getCache: (t, n) => e[t] === void 0 ? e[t] = typeof n == "function" ? n() : n : e[t], setCache(t, n) {
    e[t] = n;
  }, hasCache(t) {
    return Object.hasOwnProperty.call(e, t);
  }, clearCache(t) {
    t !== void 0 ? delete e[t] : e = /* @__PURE__ */ Object.create(null);
  } };
}
var Os = { name: { required: true }, disable: Boolean }, sd = { setup(e, { slots: t }) {
  return () => d("div", { class: "q-panel scroll", role: "tabpanel" }, $e(t.default));
} }, Vs = { modelValue: { required: true }, animated: Boolean, infinite: Boolean, swipeable: Boolean, vertical: Boolean, transitionPrev: String, transitionNext: String, transitionDuration: { type: [String, Number], default: 300 }, keepAlive: Boolean, keepAliveInclude: [String, Array, RegExp], keepAliveExclude: [String, Array, RegExp], keepAliveMax: Number }, Ds = ["update:modelValue", "beforeTransition", "transition"];
function Is() {
  const { props: e, emit: t, proxy: n } = xe(), { getCache: r } = Fa(), { registerTimeout: l } = Zn();
  let a, o;
  const i = W(null), u = { value: null };
  function c(k) {
    const U = e.vertical === true ? "up" : "left";
    j((n.$q.lang.rtl === true ? -1 : 1) * (k.direction === U ? 1 : -1));
  }
  const s = v(() => [[ky, c, void 0, { horizontal: e.vertical !== true, vertical: e.vertical, mouse: true }]]), f = v(() => e.transitionPrev || `slide-${e.vertical === true ? "down" : "right"}`), h = v(() => e.transitionNext || `slide-${e.vertical === true ? "up" : "left"}`), m = v(() => `--q-transition-duration: ${e.transitionDuration}ms`), g = v(() => typeof e.modelValue == "string" || typeof e.modelValue == "number" ? e.modelValue : String(e.modelValue)), _ = v(() => ({ include: e.keepAliveInclude, exclude: e.keepAliveExclude, max: e.keepAliveMax })), w = v(() => e.keepAliveInclude !== void 0 || e.keepAliveExclude !== void 0);
  ge(() => e.modelValue, (k, U) => {
    const Q = b(k) === true ? C(k) : -1;
    o !== true && F(Q === -1 ? 0 : Q < C(U) ? -1 : 1), u.value !== Q && (u.value = Q, t("beforeTransition", k, U), l(() => {
      t("transition", k, U);
    }, e.transitionDuration));
  });
  function T() {
    j(1);
  }
  function y() {
    j(-1);
  }
  function p(k) {
    t("update:modelValue", k);
  }
  function b(k) {
    return k != null && k !== "";
  }
  function C(k) {
    return a.findIndex((U) => U.props.name === k && U.props.disable !== "" && U.props.disable !== true);
  }
  function P() {
    return a.filter((k) => k.props.disable !== "" && k.props.disable !== true);
  }
  function F(k) {
    const U = k !== 0 && e.animated === true && u.value !== -1 ? "q-transition--" + (k === -1 ? f.value : h.value) : null;
    i.value !== U && (i.value = U);
  }
  function j(k, U = u.value) {
    let Q = U + k;
    for (; Q !== -1 && Q < a.length; ) {
      const Y = a[Q];
      if (Y !== void 0 && Y.props.disable !== "" && Y.props.disable !== true) {
        F(k), o = true, t("update:modelValue", Y.props.name), setTimeout(() => {
          o = false;
        });
        return;
      }
      Q += k;
    }
    e.infinite === true && a.length !== 0 && U !== -1 && U !== a.length && j(k, k === -1 ? a.length : -1);
  }
  function $() {
    const k = C(e.modelValue);
    return u.value !== k && (u.value = k), true;
  }
  function L() {
    const k = b(e.modelValue) === true && $() && a[u.value];
    return e.keepAlive === true ? [d(xv, _.value, [d(w.value === true ? r(g.value, () => ({ ...sd, name: g.value })) : sd, { key: g.value, style: m.value }, () => k)])] : [d("div", { class: "q-panel scroll", style: m.value, key: g.value, role: "tabpanel" }, [k])];
  }
  function H() {
    if (a.length !== 0) return e.animated === true ? [d(Ot, { name: i.value }, L)] : L();
  }
  function q(k) {
    return a = qs($e(k.default, [])).filter((U) => U.props !== null && U.props.slot === void 0 && b(U.props.name) === true), a.length;
  }
  function A() {
    return a;
  }
  return Object.assign(n, { next: T, previous: y, goTo: p }), { panelIndex: u, panelDirectives: s, updatePanelsList: q, updatePanelIndex: $, getPanelContent: H, getEnabledPanels: P, getPanels: A, isValidPanelName: b, keepAliveProps: _, needsUniqueKeepAliveWrapper: w, goToPanelByOffset: j, goToPanel: p, nextPanel: T, previousPanel: y };
}
var Dr = 0, zs = { fullscreen: Boolean, noRouteFullscreenExit: Boolean }, Ns = ["update:fullscreen", "fullscreen"];
function Hs() {
  const e = xe(), { props: t, emit: n, proxy: r } = e;
  let l, a, o;
  const i = W(false);
  Ms(e) === true && ge(() => r.$route.fullPath, () => {
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
    i.value !== true && (i.value = true, o = r.$el.parentNode, o.replaceChild(a, r.$el), document.body.appendChild(r.$el), Dr++, Dr === 1 && document.body.classList.add("q-body--fullscreen-mixin"), l = { handler: s }, wa.add(l));
  }
  function s() {
    i.value === true && (l !== void 0 && (wa.remove(l), l = void 0), o.replaceChild(r.$el, a), i.value = false, Dr = Math.max(0, Dr - 1), Dr === 0 && (document.body.classList.remove("q-body--fullscreen-mixin"), r.$el.scrollIntoView !== void 0 && setTimeout(() => {
      r.$el.scrollIntoView();
    })));
  }
  return ti(() => {
    a = document.createElement("span");
  }), ct(() => {
    t.fullscreen === true && c();
  }), We(s), Object.assign(r, { toggleFullscreen: u, setFullscreen: c, exitFullscreen: s }), { inFullscreen: i, toggleFullscreen: u };
}
var Ty = ["top", "right", "bottom", "left"], qy = ["regular", "flat", "outline", "push", "unelevated"];
he({ name: "QCarousel", props: { ...nt, ...Vs, ...zs, transitionPrev: { type: String, default: "fade" }, transitionNext: { type: String, default: "fade" }, height: String, padding: Boolean, controlColor: String, controlTextColor: String, controlType: { type: String, validator: (e) => qy.includes(e), default: "flat" }, autoplay: [Number, Boolean], arrows: Boolean, prevIcon: String, nextIcon: String, navigation: Boolean, navigationPosition: { type: String, validator: (e) => Ty.includes(e) }, navigationIcon: String, navigationActiveIcon: String, thumbnails: Boolean }, emits: [...Ns, ...Ds], setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = lt(e, n);
  let l = null, a;
  const { updatePanelsList: o, getPanelContent: i, panelDirectives: u, goToPanel: c, previousPanel: s, nextPanel: f, getEnabledPanels: h, panelIndex: m } = Is(), { inFullscreen: g } = Hs(), _ = v(() => g.value !== true && e.height !== void 0 ? { height: e.height } : {}), w = v(() => e.vertical === true ? "vertical" : "horizontal"), T = v(() => e.navigationPosition || (e.vertical === true ? "right" : "bottom")), y = v(() => `q-carousel q-panel-parent q-carousel--with${e.padding === true ? "" : "out"}-padding` + (g.value === true ? " fullscreen" : "") + (r.value === true ? " q-carousel--dark q-dark" : "") + (e.arrows === true ? ` q-carousel--arrows-${w.value}` : "") + (e.navigation === true ? ` q-carousel--navigation-${T.value}` : "")), p = v(() => {
    const L = [e.prevIcon || n.iconSet.carousel[e.vertical === true ? "up" : "left"], e.nextIcon || n.iconSet.carousel[e.vertical === true ? "down" : "right"]];
    return e.vertical === false && n.lang.rtl === true ? L.reverse() : L;
  }), b = v(() => e.navigationIcon || n.iconSet.carousel.navigationIcon), C = v(() => e.navigationActiveIcon || b.value), P = v(() => ({ color: e.controlColor, textColor: e.controlTextColor, round: true, [e.controlType]: true, dense: true }));
  ge(() => e.modelValue, () => {
    e.autoplay && F();
  }), ge(() => e.autoplay, (L) => {
    L ? F() : l !== null && (clearTimeout(l), l = null);
  });
  function F() {
    const L = xa(e.autoplay) === true ? Math.abs(e.autoplay) : 5e3;
    l !== null && clearTimeout(l), l = setTimeout(() => {
      l = null, L >= 0 ? f() : s();
    }, L);
  }
  ct(() => {
    e.autoplay && F();
  }), We(() => {
    l !== null && clearTimeout(l);
  });
  function j(L, H) {
    return d("div", { class: `q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${L} q-carousel__navigation--${T.value}` + (e.controlColor !== void 0 ? ` text-${e.controlColor}` : "") }, [d("div", { class: "q-carousel__navigation-inner flex flex-center no-wrap" }, h().map(H))]);
  }
  function $() {
    const L = [];
    if (e.navigation === true) {
      const H = t["navigation-icon"] !== void 0 ? t["navigation-icon"] : (A) => d(Je, { key: "nav" + A.name, class: `q-carousel__navigation-icon q-carousel__navigation-icon--${A.active === true ? "" : "in"}active`, ...A.btnProps, onClick: A.onClick }), q = a - 1;
      L.push(j("buttons", (A, k) => {
        const U = A.props.name, Q = m.value === k;
        return H({ index: k, maxIndex: q, name: U, active: Q, btnProps: { icon: Q === true ? C.value : b.value, size: "sm", ...P.value }, onClick: () => {
          c(U);
        } });
      }));
    } else if (e.thumbnails === true) {
      const H = e.controlColor !== void 0 ? ` text-${e.controlColor}` : "";
      L.push(j("thumbnails", (q) => {
        const A = q.props;
        return d("img", { key: "tmb#" + A.name, class: `q-carousel__thumbnail q-carousel__thumbnail--${A.name === e.modelValue ? "" : "in"}active` + H, src: A.imgSrc || A["img-src"], onClick: () => {
          c(A.name);
        } });
      }));
    }
    return e.arrows === true && m.value >= 0 && ((e.infinite === true || m.value > 0) && L.push(d("div", { key: "prev", class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${w.value} absolute flex flex-center` }, [d(Je, { icon: p.value[0], ...P.value, onClick: s })])), (e.infinite === true || m.value < a - 1) && L.push(d("div", { key: "next", class: `q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${w.value} absolute flex flex-center` }, [d(Je, { icon: p.value[1], ...P.value, onClick: f })]))), qt(t.control, L);
  }
  return () => (a = o(t), d("div", { class: y.value, style: _.value }, [_n("div", { class: "q-carousel__slides-container" }, i(), "sl-cont", e.swipeable, () => u.value)].concat($())));
} });
he({ name: "QCarouselSlide", props: { ...Os, imgSrc: String }, setup(e, { slots: t }) {
  const n = v(() => e.imgSrc ? { backgroundImage: `url("${e.imgSrc}")` } : {});
  return () => d("div", { class: "q-carousel__slide", style: n.value }, $e(t.default));
} });
he({ name: "QCarouselControl", props: { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, default: () => [18, 18], validator: (e) => e.length === 2 } }, setup(e, { slots: t }) {
  const n = v(() => `q-carousel__control absolute absolute-${e.position}`), r = v(() => ({ margin: `${e.offset[1]}px ${e.offset[0]}px` }));
  return () => d("div", { class: n.value, style: r.value }, $e(t.default));
} });
he({ name: "QChatMessage", props: { sent: Boolean, label: String, bgColor: String, textColor: String, name: String, avatar: String, text: Array, stamp: String, size: String, labelHtml: Boolean, nameHtml: Boolean, textHtml: Boolean, stampHtml: Boolean }, setup(e, { slots: t }) {
  const n = v(() => e.sent === true ? "sent" : "received"), r = v(() => `q-message-text-content q-message-text-content--${n.value}` + (e.textColor !== void 0 ? ` text-${e.textColor}` : "")), l = v(() => `q-message-text q-message-text--${n.value}` + (e.bgColor !== void 0 ? ` text-${e.bgColor}` : "")), a = v(() => "q-message-container row items-end no-wrap" + (e.sent === true ? " reverse" : "")), o = v(() => e.size !== void 0 ? `col-${e.size}` : ""), i = v(() => ({ msg: e.textHtml === true ? "innerHTML" : "textContent", stamp: e.stampHtml === true ? "innerHTML" : "textContent", name: e.nameHtml === true ? "innerHTML" : "textContent", label: e.labelHtml === true ? "innerHTML" : "textContent" }));
  function u(s) {
    return t.stamp !== void 0 ? [s, d("div", { class: "q-message-stamp" }, t.stamp())] : e.stamp ? [s, d("div", { class: "q-message-stamp", [i.value.stamp]: e.stamp })] : [s];
  }
  function c(s, f) {
    const h = f === true ? s.length > 1 ? (m) => m : (m) => d("div", [m]) : (m) => d("div", { [i.value.msg]: m });
    return s.map((m, g) => d("div", { key: g, class: l.value }, [d("div", { class: r.value }, u(h(m)))]));
  }
  return () => {
    const s = [];
    t.avatar !== void 0 ? s.push(t.avatar()) : e.avatar !== void 0 && s.push(d("img", { class: `q-message-avatar q-message-avatar--${n.value}`, src: e.avatar, "aria-hidden": "true" }));
    const f = [];
    t.name !== void 0 ? f.push(d("div", { class: `q-message-name q-message-name--${n.value}` }, t.name())) : e.name !== void 0 && f.push(d("div", { class: `q-message-name q-message-name--${n.value}`, [i.value.name]: e.name })), t.default !== void 0 ? f.push(c(qs(t.default()), true)) : e.text !== void 0 && f.push(c(e.text)), s.push(d("div", { class: o.value }, f));
    const h = [];
    return t.label !== void 0 ? h.push(d("div", { class: "q-message-label" }, t.label())) : e.label !== void 0 && h.push(d("div", { class: "q-message-label", [i.value.label]: e.label })), h.push(d("div", { class: a.value }, s)), d("div", { class: `q-message q-message-${n.value}` }, h);
  };
} });
function Um(e, t) {
  const n = W(null), r = v(() => e.disable === true ? null : d("span", { ref: n, class: "no-outline", tabindex: -1 }));
  function l(a) {
    const o = t.value;
    (a == null ? void 0 : a.qAvoidFocus) !== true && ((a == null ? void 0 : a.type.indexOf("key")) === 0 ? document.activeElement !== o && (o == null ? void 0 : o.contains(document.activeElement)) === true && o.focus() : n.value !== null && (a === void 0 || (o == null ? void 0 : o.contains(a.target)) === true) && n.value.focus());
  }
  return { refocusTargetEl: r, refocusTarget: l };
}
var Qm = { xs: 30, sm: 35, md: 40, lg: 50, xl: 60 }, Km = { ...nt, ...el, ...xn, modelValue: { required: true, default: null }, val: {}, trueValue: { default: true }, falseValue: { default: false }, indeterminateValue: { default: null }, checkedIcon: String, uncheckedIcon: String, indeterminateIcon: String, toggleOrder: { type: String, validator: (e) => e === "tf" || e === "ft" }, toggleIndeterminate: Boolean, label: String, leftLabel: Boolean, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, Wm = ["update:modelValue"];
function Ym(e, t) {
  const { props: n, slots: r, emit: l, proxy: a } = xe(), { $q: o } = a, i = lt(n, o), u = W(null), { refocusTargetEl: c, refocusTarget: s } = Um(n, u), f = tl(n, Qm), h = v(() => n.val !== void 0 && Array.isArray(n.modelValue)), m = v(() => {
    const q = Ge(n.val);
    return h.value === true ? n.modelValue.findIndex((A) => Ge(A) === q) : -1;
  }), g = v(() => h.value === true ? m.value !== -1 : Ge(n.modelValue) === Ge(n.trueValue)), _ = v(() => h.value === true ? m.value === -1 : Ge(n.modelValue) === Ge(n.falseValue)), w = v(() => g.value === false && _.value === false), T = v(() => n.disable === true ? -1 : n.tabindex || 0), y = v(() => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (n.disable === true ? " disabled" : "") + (i.value === true ? ` q-${e}--dark` : "") + (n.dense === true ? ` q-${e}--dense` : "") + (n.leftLabel === true ? " reverse" : "")), p = v(() => {
    const q = g.value === true ? "truthy" : _.value === true ? "falsy" : "indet", A = n.color !== void 0 && (n.keepColor === true || (e === "toggle" ? g.value === true : _.value !== true)) ? ` text-${n.color}` : "";
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${q}${A}`;
  }), b = v(() => {
    const q = { type: "checkbox" };
    return n.name !== void 0 && Object.assign(q, { ".checked": g.value, "^checked": g.value === true ? "checked" : void 0, name: n.name, value: h.value === true ? n.val : n.trueValue }), q;
  }), C = ql(b), P = v(() => {
    const q = { tabindex: T.value, role: e === "toggle" ? "switch" : "checkbox", "aria-label": n.label, "aria-checked": w.value === true ? "mixed" : g.value === true ? "true" : "false" };
    return n.disable === true && (q["aria-disabled"] = "true"), q;
  });
  function F(q) {
    q !== void 0 && (je(q), s(q)), n.disable !== true && l("update:modelValue", j(), q);
  }
  function j() {
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
  function $(q) {
    (q.keyCode === 13 || q.keyCode === 32) && je(q);
  }
  function L(q) {
    (q.keyCode === 13 || q.keyCode === 32) && F(q);
  }
  const H = t(g, w);
  return Object.assign(a, { toggle: F }), () => {
    const q = H();
    n.disable !== true && C(q, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
    const A = [d("div", { class: p.value, style: f.value, "aria-hidden": "true" }, q)];
    c.value !== null && A.push(c.value);
    const k = n.label !== void 0 ? qt(r.default, [n.label]) : $e(r.default);
    return k !== void 0 && A.push(d("div", { class: `q-${e}__label q-anchor--skip` }, k)), d("div", { ref: u, class: y.value, ...P.value, onClick: F, onKeydown: $, onKeyup: L }, A);
  };
}
var My = () => d("div", { key: "svg", class: "q-checkbox__bg absolute" }, [d("svg", { class: "q-checkbox__svg fit absolute-full", viewBox: "0 0 24 24" }, [d("path", { class: "q-checkbox__truthy", fill: "none", d: "M1.73,12.91 8.1,19.28 22.79,4.59" }), d("path", { class: "q-checkbox__indet", d: "M4,14H20V10H4" })])]), sa = he({ name: "QCheckbox", props: Km, emits: Wm, setup(e) {
  const t = My();
  function n(r, l) {
    const a = v(() => (r.value === true ? e.checkedIcon : l.value === true ? e.indeterminateIcon : e.uncheckedIcon) || null);
    return () => a.value !== null ? [d("div", { key: "icon", class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap" }, [d(et, { class: "q-checkbox__icon", name: a.value })])] : [t];
  }
  return Ym("checkbox", n);
} }), Ey = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, Xm = he({ name: "QChip", props: { ...nt, ...el, dense: Boolean, icon: String, iconRight: String, iconRemove: String, iconSelected: String, label: [String, Number], color: String, textColor: String, modelValue: { type: Boolean, default: true }, selected: { type: Boolean, default: null }, square: Boolean, outline: Boolean, clickable: Boolean, removable: Boolean, removeAriaLabel: String, tabindex: [String, Number], disable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "update:selected", "remove", "click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = lt(e, r), a = tl(e, Ey), o = v(() => e.selected === true || e.icon !== void 0), i = v(() => e.selected === true ? e.iconSelected || r.iconSet.chip.selected : e.icon), u = v(() => e.iconRemove || r.iconSet.chip.remove), c = v(() => e.disable === false && (e.clickable === true || e.selected !== null)), s = v(() => {
    const w = e.outline === true && e.color || e.textColor;
    return "q-chip row inline no-wrap items-center" + (e.outline === false && e.color !== void 0 ? ` bg-${e.color}` : "") + (w ? ` text-${w} q-chip--colored` : "") + (e.disable === true ? " disabled" : "") + (e.dense === true ? " q-chip--dense" : "") + (e.outline === true ? " q-chip--outline" : "") + (e.selected === true ? " q-chip--selected" : "") + (c.value === true ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (e.square === true ? " q-chip--square" : "") + (l.value === true ? " q-chip--dark q-dark" : "");
  }), f = v(() => {
    const w = e.disable === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: e.tabindex || 0 }, T = { ...w, role: "button", "aria-hidden": "false", "aria-label": e.removeAriaLabel || r.lang.label.remove };
    return { chip: w, remove: T };
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
    const T = e.label !== void 0 ? [d("div", { class: "ellipsis" }, [e.label])] : void 0;
    return w.push(d("div", { class: "q-chip__content col row no-wrap items-center q-anchor--skip" }, Cs(t.default, T))), e.iconRight && w.push(d(et, { class: "q-chip__icon q-chip__icon--right", name: e.iconRight })), e.removable === true && w.push(d(et, { class: "q-chip__icon q-chip__icon--remove cursor-pointer", name: u.value, ...f.value.remove, onClick: g, onKeyup: g })), w;
  }
  return () => {
    if (e.modelValue === false) return;
    const w = { class: s.value, style: a.value };
    return c.value === true && Object.assign(w, f.value.chip, { onClick: m, onKeyup: h }), _n("div", w, _(), "ripple", e.ripple !== false && e.disable !== true, () => [[fi, e.ripple]]);
  };
} }), js = { ...el, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, color: String, centerColor: String, trackColor: String, fontSize: String, rounded: Boolean, thickness: { type: Number, default: 0.2, validator: (e) => e >= 0 && e <= 1 }, angle: { type: Number, default: 0 }, showValue: Boolean, reverse: Boolean, instantFeedback: Boolean }, Uu = 50, Gm = 2 * Uu, Zm = Gm * Math.PI, Ry = Math.round(Zm * 1e3) / 1e3, Jm = he({ name: "QCircularProgress", props: { ...js, value: { type: Number, default: 0 }, animationSpeed: { type: [String, Number], default: 600 }, indeterminate: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = tl(e), l = v(() => {
    const m = (n.lang.rtl === true ? -1 : 1) * e.angle;
    return { transform: e.reverse !== (n.lang.rtl === true) ? `scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90 - m}deg)` : `rotate3d(0, 0, 1, ${m - 90}deg)` };
  }), a = v(() => e.instantFeedback !== true && e.indeterminate !== true ? { transition: `stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease` } : ""), o = v(() => Gm / (1 - e.thickness / 2)), i = v(() => `${o.value / 2} ${o.value / 2} ${o.value} ${o.value}`), u = v(() => dt(e.value, e.min, e.max)), c = v(() => e.max - e.min), s = v(() => e.thickness / 2 * o.value), f = v(() => {
    const m = (e.max - u.value) / c.value, g = e.rounded === true && u.value < e.max && m < 0.25 ? s.value / 2 * (1 - m / 0.25) : 0;
    return Zm * m + g;
  });
  function h({ thickness: m, offset: g, color: _, cls: w, rounded: T }) {
    return d("circle", { class: "q-circular-progress__" + w + (_ !== void 0 ? ` text-${_}` : ""), style: a.value, fill: "transparent", stroke: "currentColor", "stroke-width": m, "stroke-dasharray": Ry, "stroke-dashoffset": g, "stroke-linecap": T, cx: o.value, cy: o.value, r: Uu });
  }
  return () => {
    const m = [];
    e.centerColor !== void 0 && e.centerColor !== "transparent" && m.push(d("circle", { class: `q-circular-progress__center text-${e.centerColor}`, fill: "currentColor", r: Uu - s.value / 2, cx: o.value, cy: o.value })), e.trackColor !== void 0 && e.trackColor !== "transparent" && m.push(h({ cls: "track", thickness: s.value, offset: 0, color: e.trackColor })), m.push(h({ cls: "circle", thickness: s.value, offset: f.value, color: e.color, rounded: e.rounded === true ? "round" : void 0 }));
    const g = [d("svg", { class: "q-circular-progress__svg", style: l.value, viewBox: i.value, "aria-hidden": "true" }, m)];
    return e.showValue === true && g.push(d("div", { class: "q-circular-progress__text absolute-full row flex-center content-center", style: { fontSize: e.fontSize } }, t.default !== void 0 ? t.default() : [d("div", u.value)])), d("div", { class: `q-circular-progress q-circular-progress--${e.indeterminate === true ? "in" : ""}determinate`, style: r.value, role: "progressbar", "aria-valuemin": e.min, "aria-valuemax": e.max, "aria-valuenow": e.indeterminate === true ? void 0 : u.value }, Cs(t.internal, g));
  };
} });
function Ui(e, t, n) {
  const r = tn(e);
  let l, a = r.left - t.event.x, o = r.top - t.event.y, i = Math.abs(a), u = Math.abs(o);
  const c = t.direction;
  c.horizontal === true && c.vertical !== true ? l = a < 0 ? "left" : "right" : c.horizontal !== true && c.vertical === true ? l = o < 0 ? "up" : "down" : c.up === true && o < 0 ? (l = "up", i > u && (c.left === true && a < 0 ? l = "left" : c.right === true && a > 0 && (l = "right"))) : c.down === true && o > 0 ? (l = "down", i > u && (c.left === true && a < 0 ? l = "left" : c.right === true && a > 0 && (l = "right"))) : c.left === true && a < 0 ? (l = "left", i < u && (c.up === true && o < 0 ? l = "up" : c.down === true && o > 0 && (l = "down"))) : c.right === true && a > 0 && (l = "right", i < u && (c.up === true && o < 0 ? l = "up" : c.down === true && o > 0 && (l = "down")));
  let s = false;
  if (l === void 0 && n === false) {
    if (t.event.isFirst === true || t.event.lastDir === void 0) return {};
    l = t.event.lastDir, s = true, l === "left" || l === "right" ? (r.left -= a, i = 0, a = 0) : (r.top -= o, u = 0, o = 0);
  }
  return { synthetic: s, payload: { evt: e, touch: t.event.mouse !== true, mouse: t.event.mouse === true, position: r, direction: l, isFirst: t.event.isFirst, isFinal: n === true, duration: Date.now() - t.event.time, distance: { x: i, y: u }, offset: { x: a, y: o }, delta: { x: r.left - t.event.lastX, y: r.top - t.event.lastY } } };
}
var Ay = 0, bn = $n({ name: "touch-pan", beforeMount(e, { value: t, modifiers: n }) {
  if (n.mouse !== true && Ie.has.touch !== true) return;
  function r(a, o) {
    n.mouse === true && o === true ? je(a) : (n.stop === true && wt(a), n.prevent === true && Dt(a));
  }
  const l = { uid: "qvtp_" + Ay++, handler: t, modifiers: n, direction: Io(n), noop: xt, mouseStart(a) {
    zo(a, l) && ui(a) && (Tt(l, "temp", [[document, "mousemove", "move", "notPassiveCapture"], [document, "mouseup", "end", "passiveCapture"]]), l.start(a, true));
  }, touchStart(a) {
    if (zo(a, l)) {
      const o = a.target;
      Tt(l, "temp", [[o, "touchmove", "move", "notPassiveCapture"], [o, "touchcancel", "end", "passiveCapture"], [o, "touchend", "end", "passiveCapture"]]), l.start(a);
    }
  }, start(a, o) {
    if (Ie.is.firefox === true && pr(e, true), l.lastEvt = a, o === true || n.stop === true) {
      if (l.direction.all !== true && (o !== true || l.modifiers.mouseAllDir !== true && l.modifiers.mousealldir !== true)) {
        const c = a.type.indexOf("mouse") !== -1 ? new MouseEvent(a.type, a) : new TouchEvent(a.type, a);
        a.defaultPrevented === true && Dt(c), a.cancelBubble === true && wt(c), Object.assign(c, { qKeyEvent: a.qKeyEvent, qClickOutside: a.qClickOutside, qAnchorHandled: a.qAnchorHandled, qClonedBy: a.qClonedBy === void 0 ? [l.uid] : a.qClonedBy.concat(l.uid) }), l.initialEvent = { target: a.target, event: c };
      }
      wt(a);
    }
    const { left: i, top: u } = tn(a);
    l.event = { x: i, y: u, time: Date.now(), mouse: o === true, detected: false, isFirst: true, isFinal: false, lastX: i, lastY: u };
  }, move(a) {
    if (l.event === void 0) return;
    const o = tn(a), i = o.left - l.event.x, u = o.top - l.event.y;
    if (i === 0 && u === 0) return;
    l.lastEvt = a;
    const c = l.event.mouse === true, s = () => {
      r(a, c);
      let m;
      n.preserveCursor !== true && n.preservecursor !== true && (m = document.documentElement.style.cursor || "", document.documentElement.style.cursor = "grabbing"), c === true && document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), Rn(), l.styleCleanup = (g) => {
        if (l.styleCleanup = void 0, m !== void 0 && (document.documentElement.style.cursor = m), document.body.classList.remove("non-selectable"), c === true) {
          const _ = () => {
            document.body.classList.remove("no-pointer-events--children");
          };
          g !== void 0 ? setTimeout(() => {
            _(), g();
          }, 50) : _();
        } else g !== void 0 && g();
      };
    };
    if (l.event.detected === true) {
      l.event.isFirst !== true && r(a, l.event.mouse);
      const { payload: m, synthetic: g } = Ui(a, l, false);
      m !== void 0 && (l.handler(m) === false ? l.end(a) : (l.styleCleanup === void 0 && l.event.isFirst === true && s(), l.event.lastX = m.position.left, l.event.lastY = m.position.top, l.event.lastDir = g === true ? void 0 : m.direction, l.event.isFirst = false));
      return;
    }
    if (l.direction.all === true || c === true && (l.modifiers.mouseAllDir === true || l.modifiers.mousealldir === true)) {
      s(), l.event.detected = true, l.move(a);
      return;
    }
    const f = Math.abs(i), h = Math.abs(u);
    f !== h && (l.direction.horizontal === true && f > h || l.direction.vertical === true && f < h || l.direction.up === true && f < h && u < 0 || l.direction.down === true && f < h && u > 0 || l.direction.left === true && f > h && i < 0 || l.direction.right === true && f > h && i > 0 ? (l.event.detected = true, l.move(a)) : l.end(a, true));
  }, end(a, o) {
    var _a3;
    if (l.event !== void 0) {
      if (Yt(l, "temp"), Ie.is.firefox === true && pr(e, false), o === true) (_a3 = l.styleCleanup) == null ? void 0 : _a3.call(l), l.event.detected !== true && l.initialEvent !== void 0 && l.initialEvent.target.dispatchEvent(l.initialEvent.event);
      else if (l.event.detected === true) {
        l.event.isFirst === true && l.handler(Ui(a === void 0 ? l.lastEvt : a, l).payload);
        const { payload: i } = Ui(a === void 0 ? l.lastEvt : a, l, true), u = () => {
          l.handler(i);
        };
        l.styleCleanup !== void 0 ? l.styleCleanup(u) : u();
      }
      l.event = void 0, l.initialEvent = void 0, l.lastEvt = void 0;
    }
  } };
  if (e.__qtouchpan = l, n.mouse === true) {
    const a = n.mouseCapture === true || n.mousecapture === true ? "Capture" : "";
    Tt(l, "main", [[e, "mousedown", "mouseStart", `passive${a}`]]);
  }
  Ie.has.touch === true && Tt(l, "main", [[e, "touchstart", "touchStart", `passive${n.capture === true ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const n = e.__qtouchpan;
  n !== void 0 && (t.oldValue !== t.value && (typeof value != "function" && n.end(), n.handler = t.value), n.direction = Io(t.modifiers));
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qtouchpan;
  t !== void 0 && (t.event !== void 0 && t.end(), Yt(t, "main"), Yt(t, "temp"), Ie.is.firefox === true && pr(e, false), (_a3 = t.styleCleanup) == null ? void 0 : _a3.call(t), delete e.__qtouchpan);
} }), cd = "q-slider__marker-labels", Py = (e) => ({ value: e }), $y = ({ marker: e }) => d("div", { key: e.value, style: e.style, class: e.classes }, e.label), Us = [34, 37, 40, 33, 39, 38], eh = { ...nt, ...xn, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, snap: Boolean, vertical: Boolean, reverse: Boolean, color: String, markerLabelsClass: String, label: Boolean, labelColor: String, labelTextColor: String, labelAlways: Boolean, switchLabelSide: Boolean, markers: [Boolean, Number], markerLabels: [Boolean, Array, Object, Function], switchMarkerLabelsSide: Boolean, trackImg: String, trackColor: String, innerTrackImg: String, innerTrackColor: String, selectionColor: String, selectionImg: String, thumbSize: { type: String, default: "20px" }, trackSize: { type: String, default: "4px" }, disable: Boolean, readonly: Boolean, dense: Boolean, tabindex: [String, Number], thumbColor: String, thumbPath: { type: String, default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0" } }, th = ["pan", "update:modelValue", "change"];
function nh({ updateValue: e, updatePosition: t, getDragging: n, formAttrs: r }) {
  const { props: l, emit: a, slots: o, proxy: { $q: i } } = xe(), u = lt(l, i), c = ql(r), s = W(false), f = W(false), h = W(false), m = W(false), g = v(() => l.vertical === true ? "--v" : "--h"), _ = v(() => "-" + (l.switchLabelSide === true ? "switched" : "standard")), w = v(() => l.vertical === true ? l.reverse === true : l.reverse !== (i.lang.rtl === true)), T = v(() => isNaN(l.innerMin) === true || l.innerMin < l.min ? l.min : l.innerMin), y = v(() => isNaN(l.innerMax) === true || l.innerMax > l.max ? l.max : l.innerMax), p = v(() => l.disable !== true && l.readonly !== true && T.value < y.value), b = v(() => {
    if (l.step === 0) return (_e2) => _e2;
    const ae = (String(l.step).trim().split(".")[1] || "").length;
    return (_e2) => parseFloat(_e2.toFixed(ae));
  }), C = v(() => l.step === 0 ? 1 : l.step), P = v(() => p.value === true ? l.tabindex || 0 : -1), F = v(() => l.max - l.min), j = v(() => y.value - T.value), $ = v(() => pe(T.value)), L = v(() => pe(y.value)), H = v(() => l.vertical === true ? w.value === true ? "bottom" : "top" : w.value === true ? "right" : "left"), q = v(() => l.vertical === true ? "height" : "width"), A = v(() => l.vertical === true ? "width" : "height"), k = v(() => l.vertical === true ? "vertical" : "horizontal"), U = v(() => {
    const ae = { role: "slider", "aria-valuemin": T.value, "aria-valuemax": y.value, "aria-orientation": k.value, "data-step": l.step };
    return l.disable === true ? ae["aria-disabled"] = "true" : l.readonly === true && (ae["aria-readonly"] = "true"), ae;
  }), Q = v(() => `q-slider q-slider${g.value} q-slider--${s.value === true ? "" : "in"}active inline no-wrap ` + (l.vertical === true ? "row" : "column") + (l.disable === true ? " disabled" : " q-slider--enabled" + (p.value === true ? " q-slider--editable" : "")) + (h.value === "both" ? " q-slider--focus" : "") + (l.label || l.labelAlways === true ? " q-slider--label" : "") + (l.labelAlways === true ? " q-slider--label-always" : "") + (u.value === true ? " q-slider--dark" : "") + (l.dense === true ? " q-slider--dense q-slider--dense" + g.value : ""));
  function Y(ae) {
    const _e2 = "q-slider__" + ae;
    return `${_e2} ${_e2}${g.value} ${_e2}${g.value}${_.value}`;
  }
  function X(ae) {
    const _e2 = "q-slider__" + ae;
    return `${_e2} ${_e2}${g.value}`;
  }
  const le = v(() => {
    const ae = l.selectionColor || l.color;
    return "q-slider__selection absolute" + (ae !== void 0 ? ` text-${ae}` : "");
  }), ye = v(() => X("markers") + " absolute overflow-hidden"), R = v(() => X("track-container")), x = v(() => Y("pin")), O = v(() => Y("label")), Z = v(() => Y("text-container")), oe = v(() => Y("marker-labels-container") + (l.markerLabelsClass !== void 0 ? ` ${l.markerLabelsClass}` : "")), B = v(() => "q-slider__track relative-position no-outline" + (l.trackColor !== void 0 ? ` bg-${l.trackColor}` : "")), M = v(() => {
    const ae = { [A.value]: l.trackSize };
    return l.trackImg !== void 0 && (ae.backgroundImage = `url(${l.trackImg}) !important`), ae;
  }), ee = v(() => "q-slider__inner absolute" + (l.innerTrackColor !== void 0 ? ` bg-${l.innerTrackColor}` : "")), V = v(() => {
    const ae = L.value - $.value, _e2 = { [H.value]: `${100 * $.value}%`, [q.value]: ae === 0 ? "2px" : `${100 * ae}%` };
    return l.innerTrackImg !== void 0 && (_e2.backgroundImage = `url(${l.innerTrackImg}) !important`), _e2;
  });
  function ne(ae) {
    const { min: _e2, max: Ce, step: Oe } = l;
    let Re = _e2 + ae * (Ce - _e2);
    if (Oe > 0) {
      const Xe = (Re - T.value) % Oe;
      Re += (Math.abs(Xe) >= Oe / 2 ? (Xe < 0 ? -1 : 1) * Oe : 0) - Xe;
    }
    return Re = b.value(Re), dt(Re, T.value, y.value);
  }
  function pe(ae) {
    return F.value === 0 ? 0 : (ae - l.min) / F.value;
  }
  function S(ae, _e2) {
    const Ce = tn(ae), Oe = l.vertical === true ? dt((Ce.top - _e2.top) / _e2.height, 0, 1) : dt((Ce.left - _e2.left) / _e2.width, 0, 1);
    return dt(w.value === true ? 1 - Oe : Oe, $.value, L.value);
  }
  const E = v(() => xa(l.markers) === true ? l.markers : C.value), z = v(() => {
    const ae = [], _e2 = E.value, Ce = l.max;
    let Oe = l.min;
    do
      ae.push(Oe), Oe += _e2;
    while (Oe < Ce);
    return ae.push(Ce), ae;
  }), te = v(() => {
    const ae = ` ${cd}${g.value}-`;
    return cd + `${ae}${l.switchMarkerLabelsSide === true ? "switched" : "standard"}${ae}${w.value === true ? "rtl" : "ltr"}`;
  }), D = v(() => l.markerLabels === false ? null : me(l.markerLabels).map((ae, _e2) => ({ index: _e2, value: ae.value, label: ae.label || ae.value, classes: te.value + (ae.classes !== void 0 ? " " + ae.classes : ""), style: { ...fe(ae.value), ...ae.style || {} } }))), I = v(() => ({ markerList: D.value, markerMap: de.value, classes: te.value, getStyle: fe })), se = v(() => {
    const ae = j.value === 0 ? "2px" : 100 * E.value / j.value;
    return { ...V.value, backgroundSize: l.vertical === true ? `2px ${ae}%` : `${ae}% 2px` };
  });
  function me(ae) {
    if (ae === false) return null;
    if (ae === true) return z.value.map(Py);
    if (typeof ae == "function") return z.value.map((Ce) => {
      const Oe = ae(Ce);
      return Lt(Oe) === true ? { ...Oe, value: Ce } : { value: Ce, label: Oe };
    });
    const _e2 = ({ value: Ce }) => Ce >= l.min && Ce <= l.max;
    return Array.isArray(ae) === true ? ae.map((Ce) => Lt(Ce) === true ? Ce : { value: Ce }).filter(_e2) : Object.keys(ae).map((Ce) => {
      const Oe = ae[Ce], Re = Number(Ce);
      return Lt(Oe) === true ? { ...Oe, value: Re } : { value: Re, label: Oe };
    }).filter(_e2);
  }
  function fe(ae) {
    return { [H.value]: `${100 * (ae - l.min) / F.value}%` };
  }
  const de = v(() => {
    if (l.markerLabels === false) return null;
    const ae = {};
    return D.value.forEach((_e2) => {
      ae[_e2.value] = _e2;
    }), ae;
  });
  function re() {
    if (o["marker-label-group"] !== void 0) return o["marker-label-group"](I.value);
    const ae = o["marker-label"] || $y;
    return D.value.map((_e2) => ae({ marker: _e2, ...I.value }));
  }
  const K = v(() => [[bn, ie, void 0, { [k.value]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
  function ie(ae) {
    ae.isFinal === true ? (m.value !== void 0 && (t(ae.evt), ae.touch === true && e(true), m.value = void 0, a("pan", "end")), s.value = false, h.value = false) : ae.isFirst === true ? (m.value = n(ae.evt), t(ae.evt), e(), s.value = true, a("pan", "start")) : (t(ae.evt), e());
  }
  function we() {
    h.value = false;
  }
  function ke(ae) {
    t(ae, n(ae)), e(), f.value = true, s.value = true, document.addEventListener("mouseup", Te, true);
  }
  function Te() {
    f.value = false, s.value = false, e(true), we(), document.removeEventListener("mouseup", Te, true);
  }
  function Me(ae) {
    t(ae, n(ae)), e(true);
  }
  function He(ae) {
    Us.includes(ae.keyCode) && e(true);
  }
  function De(ae) {
    if (l.vertical === true) return null;
    const _e2 = i.lang.rtl !== l.reverse ? 1 - ae : ae;
    return { transform: `translateX(calc(${2 * _e2 - 1} * ${l.thumbSize} / 2 + ${50 - 100 * _e2}%))` };
  }
  function ue(ae) {
    const _e2 = v(() => f.value === false && (h.value === ae.focusValue || h.value === "both") ? " q-slider--focus" : ""), Ce = v(() => `q-slider__thumb q-slider__thumb${g.value} q-slider__thumb${g.value}-${w.value === true ? "rtl" : "ltr"} absolute non-selectable` + _e2.value + (ae.thumbColor.value !== void 0 ? ` text-${ae.thumbColor.value}` : "")), Oe = v(() => ({ width: l.thumbSize, height: l.thumbSize, [H.value]: `${100 * ae.ratio.value}%`, zIndex: h.value === ae.focusValue ? 2 : void 0 })), Re = v(() => ae.labelColor.value !== void 0 ? ` text-${ae.labelColor.value}` : ""), Xe = v(() => De(ae.ratio.value)), it = v(() => "q-slider__text" + (ae.labelTextColor.value !== void 0 ? ` text-${ae.labelTextColor.value}` : ""));
    return () => {
      const Ct = [d("svg", { class: "q-slider__thumb-shape absolute-full", viewBox: "0 0 20 20", "aria-hidden": "true" }, [d("path", { d: l.thumbPath })]), d("div", { class: "q-slider__focus-ring fit" })];
      return (l.label === true || l.labelAlways === true) && (Ct.push(d("div", { class: x.value + " absolute fit no-pointer-events" + Re.value }, [d("div", { class: O.value, style: { minWidth: l.thumbSize } }, [d("div", { class: Z.value, style: Xe.value }, [d("span", { class: it.value }, ae.label.value)])])])), l.name !== void 0 && l.disable !== true && c(Ct, "push")), d("div", { class: Ce.value, style: Oe.value, ...ae.getNodeData() }, Ct);
    };
  }
  function be(ae, _e2, Ce, Oe) {
    const Re = [];
    l.innerTrackColor !== "transparent" && Re.push(d("div", { key: "inner", class: ee.value, style: V.value })), l.selectionColor !== "transparent" && Re.push(d("div", { key: "selection", class: le.value, style: ae.value })), l.markers !== false && Re.push(d("div", { key: "marker", class: ye.value, style: se.value })), Oe(Re);
    const Xe = [_n("div", { key: "trackC", class: R.value, tabindex: _e2.value, ...Ce.value }, [d("div", { class: B.value, style: M.value }, Re)], "slide", p.value, () => K.value)];
    if (l.markerLabels !== false) {
      const it = l.switchMarkerLabelsSide === true ? "unshift" : "push";
      Xe[it](d("div", { key: "markerL", class: oe.value }, re()));
    }
    return Xe;
  }
  return We(() => {
    document.removeEventListener("mouseup", Te, true);
  }), { state: { active: s, focus: h, preventFocus: f, dragging: m, editable: p, classes: Q, tabindex: P, attributes: U, roundValueFn: b, keyStep: C, trackLen: F, innerMin: T, innerMinRatio: $, innerMax: y, innerMaxRatio: L, positionProp: H, sizeProp: q, isReversed: w }, methods: { onActivate: ke, onMobileClick: Me, onBlur: we, onKeyup: He, getContent: be, getThumbRenderFn: ue, convertRatioToModel: ne, convertModelToRatio: pe, getDraggingRatio: S } };
}
var Ly = () => ({}), vl = he({ name: "QSlider", props: { ...eh, modelValue: { required: true, default: null, validator: (e) => typeof e == "number" || e === null }, labelValue: [String, Number] }, emits: th, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = xe(), { state: r, methods: l } = nh({ updateValue: g, updatePosition: w, getDragging: _, formAttrs: Ba(e) }), a = W(null), o = W(0), i = W(0);
  function u() {
    i.value = e.modelValue === null ? r.innerMin.value : dt(e.modelValue, r.innerMin.value, r.innerMax.value);
  }
  ge(() => `${e.modelValue}|${r.innerMin.value}|${r.innerMax.value}`, u), u();
  const c = v(() => l.convertModelToRatio(i.value)), s = v(() => r.active.value === true ? o.value : c.value), f = v(() => {
    const p = { [r.positionProp.value]: `${100 * r.innerMinRatio.value}%`, [r.sizeProp.value]: `${100 * (s.value - r.innerMinRatio.value)}%` };
    return e.selectionImg !== void 0 && (p.backgroundImage = `url(${e.selectionImg}) !important`), p;
  }), h = l.getThumbRenderFn({ focusValue: true, getNodeData: Ly, ratio: s, label: v(() => e.labelValue !== void 0 ? e.labelValue : i.value), thumbColor: v(() => e.thumbColor || e.color), labelColor: v(() => e.labelColor), labelTextColor: v(() => e.labelTextColor) }), m = v(() => r.editable.value !== true ? {} : n.platform.is.mobile === true ? { onClick: l.onMobileClick } : { onMousedown: l.onActivate, onFocus: T, onBlur: l.onBlur, onKeydown: y, onKeyup: l.onKeyup });
  function g(p) {
    i.value !== e.modelValue && t("update:modelValue", i.value), p === true && t("change", i.value);
  }
  function _() {
    return a.value.getBoundingClientRect();
  }
  function w(p, b = r.dragging.value) {
    const C = l.getDraggingRatio(p, b);
    i.value = l.convertRatioToModel(C), o.value = e.snap !== true || e.step === 0 ? C : l.convertModelToRatio(i.value);
  }
  function T() {
    r.focus.value = true;
  }
  function y(p) {
    if (Us.includes(p.keyCode) === false) return;
    je(p);
    const b = ([34, 33].includes(p.keyCode) ? 10 : 1) * r.keyStep.value, C = ([34, 37, 40].includes(p.keyCode) ? -1 : 1) * (r.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * b;
    i.value = dt(r.roundValueFn.value(i.value + C), r.innerMin.value, r.innerMax.value), g();
  }
  return () => {
    const p = l.getContent(f, r.tabindex, m, (b) => {
      b.push(h());
    });
    return d("div", { ref: a, class: r.classes.value + (e.modelValue === null ? " q-slider--no-value" : ""), ...r.attributes.value, "aria-valuenow": e.modelValue }, p);
  };
} });
function lh() {
  const e = W(!rn.value);
  return e.value === false && ct(() => {
    e.value = true;
  }), { isHydrated: e };
}
var rh = typeof ResizeObserver < "u", dd = rh === true ? {} : { style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;", url: "about:blank" }, Wl = he({ name: "QResizeObserver", props: { debounce: { type: [String, Number], default: 100 } }, emits: ["resize"], setup(e, { emit: t }) {
  let n = null, r, l = { width: -1, height: -1 };
  function a(u) {
    u === true || e.debounce === 0 || e.debounce === "0" ? o() : n === null && (n = setTimeout(o, e.debounce));
  }
  function o() {
    if (n !== null && (clearTimeout(n), n = null), r) {
      const { offsetWidth: u, offsetHeight: c } = r;
      (u !== l.width || c !== l.height) && (l = { width: u, height: c }, t("resize", l));
    }
  }
  const { proxy: i } = xe();
  if (i.trigger = a, rh === true) {
    let u;
    const c = (s) => {
      r = i.$el.parentNode, r ? (u = new ResizeObserver(a), u.observe(r), o()) : s !== true && Qe(() => {
        c(true);
      });
    };
    return ct(() => {
      c();
    }), We(() => {
      n !== null && clearTimeout(n), u !== void 0 && (u.disconnect !== void 0 ? u.disconnect() : r && u.unobserve(r));
    }), xt;
  } else {
    let u = function() {
      n !== null && (clearTimeout(n), n = null), f !== void 0 && (f.removeEventListener !== void 0 && f.removeEventListener("resize", a, ft.passive), f = void 0);
    }, c = function() {
      u(), (r == null ? void 0 : r.contentDocument) && (f = r.contentDocument.defaultView, f.addEventListener("resize", a, ft.passive), o());
    };
    const { isHydrated: s } = lh();
    let f;
    return ct(() => {
      Qe(() => {
        r = i.$el, r && c();
      });
    }), We(u), () => {
      if (s.value === true) return d("object", { class: "q--avoid-card-border", style: dd.style, tabindex: -1, type: "text/html", data: dd.url, "aria-hidden": "true", onLoad: c });
    };
  }
} }), ka = false;
if (!__QUASAR_SSR__) {
  const e = document.createElement("div");
  e.setAttribute("dir", "rtl"), Object.assign(e.style, { width: "1px", height: "1px", overflow: "auto" });
  const t = document.createElement("div");
  Object.assign(t.style, { width: "1000px", height: "1px" }), document.body.appendChild(e), e.appendChild(t), e.scrollLeft = -1e3, ka = e.scrollLeft >= 0, e.remove();
}
function By(e, t, n) {
  const r = n === true ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${t === true ? r[0] : r[1]}${e ? ` text-${e}` : ""}`;
}
var Fy = ["left", "center", "right", "justify"], fd = he({ name: "QTabs", props: { modelValue: [Number, String], align: { type: String, default: "center", validator: (e) => Fy.includes(e) }, breakpoint: { type: [String, Number], default: 600 }, vertical: Boolean, shrink: Boolean, stretch: Boolean, activeClass: String, activeColor: String, activeBgColor: String, indicatorColor: String, leftIcon: String, rightIcon: String, outsideArrows: Boolean, mobileArrows: Boolean, switchIndicator: Boolean, narrowIndicator: Boolean, inlineLabel: Boolean, noCaps: Boolean, dense: Boolean, contentClass: String, "onUpdate:modelValue": [Function, Array] }, setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, { registerTick: a } = wr(), { registerTick: o } = wr(), { registerTick: i } = wr(), { registerTimeout: u, removeTimeout: c } = Zn(), { registerTimeout: s, removeTimeout: f } = Zn(), h = W(null), m = W(null), g = W(e.modelValue), _ = W(false), w = W(true), T = W(false), y = W(false), p = [], b = W(0), C = W(false);
  let P = null, F = null, j;
  const $ = v(() => ({ activeClass: e.activeClass, activeColor: e.activeColor, activeBgColor: e.activeBgColor, indicatorClass: By(e.indicatorColor, e.switchIndicator, e.vertical), narrowIndicator: e.narrowIndicator, inlineLabel: e.inlineLabel, noCaps: e.noCaps })), L = v(() => {
    const re = b.value, K = g.value;
    for (let ie = 0; ie < re; ie++) if (p[ie].name.value === K) return true;
    return false;
  }), H = v(() => `q-tabs__content--align-${_.value === true ? "left" : y.value === true ? "justify" : e.align}`), q = v(() => `q-tabs row no-wrap items-center q-tabs--${_.value === true ? "" : "not-"}scrollable q-tabs--${e.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${e.outsideArrows === true ? "outside" : "inside"} q-tabs--mobile-with${e.mobileArrows === true ? "" : "out"}-arrows` + (e.dense === true ? " q-tabs--dense" : "") + (e.shrink === true ? " col-shrink" : "") + (e.stretch === true ? " self-stretch" : "")), A = v(() => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + H.value + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), k = v(() => e.vertical === true ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" }), U = v(() => e.vertical !== true && l.lang.rtl === true), Q = v(() => ka === false && U.value === true);
  ge(U, x), ge(() => e.modelValue, (re) => {
    Y({ name: re, setCurrent: true, skipEmit: true });
  }), ge(() => e.outsideArrows, X);
  function Y({ name: re, setCurrent: K, skipEmit: ie }) {
    g.value !== re && (ie !== true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", re), (K === true || e["onUpdate:modelValue"] === void 0) && (ye(g.value, re), g.value = re));
  }
  function X() {
    a(() => {
      h.value && le({ width: h.value.offsetWidth, height: h.value.offsetHeight });
    });
  }
  function le(re) {
    if (k.value === void 0 || m.value === null) return;
    const K = re[k.value.container], ie = Math.min(m.value[k.value.scroll], Array.prototype.reduce.call(m.value.children, (ke, Te) => ke + (Te[k.value.content] || 0), 0)), we = K > 0 && ie > K;
    _.value = we, we === true && o(x), y.value = K < parseInt(e.breakpoint, 10);
  }
  function ye(re, K) {
    const ie = re != null && re !== "" ? p.find((ke) => ke.name.value === re) : null, we = K != null && K !== "" ? p.find((ke) => ke.name.value === K) : null;
    if (de === true) de = false;
    else if (ie && we) {
      const ke = ie.tabIndicatorRef.value, Te = we.tabIndicatorRef.value;
      P !== null && (clearTimeout(P), P = null), ke.style.transition = "none", ke.style.transform = "none", Te.style.transition = "none", Te.style.transform = "none";
      const Me = ke.getBoundingClientRect(), He = Te.getBoundingClientRect();
      Te.style.transform = e.vertical === true ? `translate3d(0,${Me.top - He.top}px,0) scale3d(1,${He.height ? Me.height / He.height : 1},1)` : `translate3d(${Me.left - He.left}px,0,0) scale3d(${He.width ? Me.width / He.width : 1},1,1)`, i(() => {
        P = setTimeout(() => {
          P = null, Te.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)", Te.style.transform = "none";
        }, 70);
      });
    }
    we && _.value === true && R(we.rootRef.value);
  }
  function R(re) {
    const { left: K, width: ie, top: we, height: ke } = m.value.getBoundingClientRect(), Te = re.getBoundingClientRect();
    let Me = e.vertical === true ? Te.top - we : Te.left - K;
    if (Me < 0) {
      m.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.floor(Me), x();
      return;
    }
    Me += e.vertical === true ? Te.height - ke : Te.width - ie, Me > 0 && (m.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.ceil(Me), x());
  }
  function x() {
    const re = m.value;
    if (re === null) return;
    const K = re.getBoundingClientRect(), ie = e.vertical === true ? re.scrollTop : Math.abs(re.scrollLeft);
    U.value === true ? (w.value = Math.ceil(ie + K.width) < re.scrollWidth - 1, T.value = ie > 0) : (w.value = ie > 0, T.value = e.vertical === true ? Math.ceil(ie + K.height) < re.scrollHeight : Math.ceil(ie + K.width) < re.scrollWidth);
  }
  function O(re) {
    F !== null && clearInterval(F), F = setInterval(() => {
      V(re) === true && B();
    }, 5);
  }
  function Z() {
    O(Q.value === true ? Number.MAX_SAFE_INTEGER : 0);
  }
  function oe() {
    O(Q.value === true ? 0 : Number.MAX_SAFE_INTEGER);
  }
  function B() {
    F !== null && (clearInterval(F), F = null);
  }
  function M(re, K) {
    const ie = Array.prototype.filter.call(m.value.children, (He) => He === K || He.matches && He.matches(".q-tab.q-focusable") === true), we = ie.length;
    if (we === 0) return;
    if (re === 36) return R(ie[0]), ie[0].focus(), true;
    if (re === 35) return R(ie[we - 1]), ie[we - 1].focus(), true;
    const ke = re === (e.vertical === true ? 38 : 37), Te = re === (e.vertical === true ? 40 : 39), Me = ke === true ? -1 : Te === true ? 1 : void 0;
    if (Me !== void 0) {
      const He = U.value === true ? -1 : 1, De = ie.indexOf(K) + Me * He;
      return De >= 0 && De < we && (R(ie[De]), ie[De].focus({ preventScroll: true })), true;
    }
  }
  const ee = v(() => Q.value === true ? { get: (re) => Math.abs(re.scrollLeft), set: (re, K) => {
    re.scrollLeft = -K;
  } } : e.vertical === true ? { get: (re) => re.scrollTop, set: (re, K) => {
    re.scrollTop = K;
  } } : { get: (re) => re.scrollLeft, set: (re, K) => {
    re.scrollLeft = K;
  } });
  function V(re) {
    const K = m.value, { get: ie, set: we } = ee.value;
    let ke = false, Te = ie(K);
    const Me = re < Te ? -1 : 1;
    return Te += Me * 5, Te < 0 ? (ke = true, Te = 0) : (Me === -1 && Te <= re || Me === 1 && Te >= re) && (ke = true, Te = re), we(K, Te), x(), ke;
  }
  function ne(re, K) {
    for (const ie in re) if (re[ie] !== K[ie]) return false;
    return true;
  }
  function pe() {
    let re = null, K = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
    const ie = p.filter((Me) => {
      var _a3;
      return ((_a3 = Me.routeData) == null ? void 0 : _a3.hasRouterLink.value) === true;
    }), { hash: we, query: ke } = r.$route, Te = Object.keys(ke).length;
    for (const Me of ie) {
      const He = Me.routeData.exact.value === true;
      if (Me.routeData[He === true ? "linkIsExactActive" : "linkIsActive"].value !== true) continue;
      const { hash: De, query: ue, matched: be, href: ae } = Me.routeData.resolvedLink.value, _e2 = Object.keys(ue).length;
      if (He === true) {
        if (De !== we || _e2 !== Te || ne(ke, ue) === false) continue;
        re = Me.name.value;
        break;
      }
      if (De !== "" && De !== we || _e2 !== 0 && ne(ue, ke) === false) continue;
      const Ce = { matchedLen: be.length, queryDiff: Te - _e2, hrefLen: ae.length - De.length };
      if (Ce.matchedLen > K.matchedLen) {
        re = Me.name.value, K = Ce;
        continue;
      } else if (Ce.matchedLen !== K.matchedLen) continue;
      if (Ce.queryDiff < K.queryDiff) re = Me.name.value, K = Ce;
      else if (Ce.queryDiff !== K.queryDiff) continue;
      Ce.hrefLen > K.hrefLen && (re = Me.name.value, K = Ce);
    }
    if (re === null && p.some((Me) => Me.routeData === void 0 && Me.name.value === g.value) === true) {
      de = false;
      return;
    }
    Y({ name: re, setCurrent: true });
  }
  function S(re) {
    if (c(), C.value !== true && h.value !== null && re.target && typeof re.target.closest == "function") {
      const K = re.target.closest(".q-tab");
      K && h.value.contains(K) === true && (C.value = true, _.value === true && R(K));
    }
  }
  function E() {
    u(() => {
      C.value = false;
    }, 30);
  }
  function z() {
    se.avoidRouteWatcher === false ? s(pe) : f();
  }
  function te() {
    if (j === void 0) {
      const re = ge(() => r.$route.fullPath, z);
      j = () => {
        re(), j = void 0;
      };
    }
  }
  function D(re) {
    p.push(re), b.value++, X(), re.routeData === void 0 || r.$route === void 0 ? s(() => {
      if (_.value === true) {
        const K = g.value, ie = K != null && K !== "" ? p.find((we) => we.name.value === K) : null;
        ie && R(ie.rootRef.value);
      }
    }) : (te(), re.routeData.hasRouterLink.value === true && z());
  }
  function I(re) {
    p.splice(p.indexOf(re), 1), b.value--, X(), j !== void 0 && re.routeData !== void 0 && (p.every((K) => K.routeData === void 0) === true && j(), z());
  }
  const se = { currentModel: g, tabProps: $, hasFocus: C, hasActiveTab: L, registerTab: D, unregisterTab: I, verifyRouteModel: z, updateModel: Y, onKbdNavigate: M, avoidRouteWatcher: false };
  gn(gm, se);
  function me() {
    P !== null && clearTimeout(P), B(), j == null ? void 0 : j();
  }
  let fe, de;
  return We(me), Dn(() => {
    fe = j !== void 0, me();
  }), kl(() => {
    fe === true && (te(), de = true, z()), X();
  }), () => d("div", { ref: h, class: q.value, role: "tablist", onFocusin: S, onFocusout: E }, [d(Wl, { onResize: le }), d("div", { ref: m, class: A.value, onScroll: x }, $e(t.default)), d(et, { class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (w.value === true ? "" : " q-tabs__arrow--faded"), name: e.leftIcon || l.iconSet.tabs[e.vertical === true ? "up" : "left"], onMousedownPassive: Z, onTouchstartPassive: Z, onMouseupPassive: B, onMouseleavePassive: B, onTouchendPassive: B }), d(et, { class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (T.value === true ? "" : " q-tabs__arrow--faded"), name: e.rightIcon || l.iconSet.tabs[e.vertical === true ? "down" : "right"], onMousedownPassive: oe, onTouchstartPassive: oe, onMouseupPassive: B, onMouseleavePassive: B, onTouchendPassive: B })]);
} }), Oy = 0, ah = ["click", "keydown"], oh = { icon: String, label: [Number, String], alert: [Boolean, String], alertIcon: String, name: { type: [Number, String], default: () => `t_${Oy++}` }, noCaps: Boolean, tabindex: [String, Number], disable: Boolean, contentClass: String, ripple: { type: [Boolean, Object], default: true } };
function ih(e, t, n, r) {
  const l = Mt(gm, ot);
  if (l === ot) return console.error("QTab/QRouteTab component needs to be child of QTabs"), ot;
  const { proxy: a } = xe(), o = W(null), i = W(null), u = W(null), c = v(() => e.disable === true || e.ripple === false ? false : Object.assign({ keyCodes: [13, 32], early: true }, e.ripple === true ? {} : e.ripple)), s = v(() => l.currentModel.value === e.name), f = v(() => "q-tab relative-position self-stretch flex flex-center text-center" + (s.value === true ? " q-tab--active" + (l.tabProps.value.activeClass ? " " + l.tabProps.value.activeClass : "") + (l.tabProps.value.activeColor ? ` text-${l.tabProps.value.activeColor}` : "") + (l.tabProps.value.activeBgColor ? ` bg-${l.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (e.icon && e.label && l.tabProps.value.inlineLabel === false ? " q-tab--full" : "") + (e.noCaps === true || l.tabProps.value.noCaps === true ? " q-tab--no-caps" : "") + (e.disable === true ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (r !== void 0 ? r.linkClass.value : "")), h = v(() => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + (l.tabProps.value.inlineLabel === true ? "row no-wrap q-tab__content--inline" : "column") + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), m = v(() => e.disable === true || l.hasFocus.value === true || s.value === false && l.hasActiveTab.value === true ? -1 : e.tabindex || 0);
  function g(p, b) {
    var _a3;
    if (b !== true && (p == null ? void 0 : p.qAvoidFocus) !== true && ((_a3 = o.value) == null ? void 0 : _a3.focus()), e.disable === true) {
      (r == null ? void 0 : r.hasRouterLink.value) === true && je(p);
      return;
    }
    if (r === void 0) {
      l.updateModel({ name: e.name }), n("click", p);
      return;
    }
    if (r.hasRouterLink.value === true) {
      const C = (P = {}) => {
        let F;
        const j = P.to === void 0 || qn(P.to, e.to) === true ? l.avoidRouteWatcher = Ca() : null;
        return r.navigateToRouterLink(p, { ...P, returnRouterError: true }).catch(($) => {
          F = $;
        }).then(($) => {
          var _a4;
          if (j === l.avoidRouteWatcher && (l.avoidRouteWatcher = false, F === void 0 && ($ === void 0 || ((_a4 = $.message) == null ? void 0 : _a4.startsWith("Avoided redundant navigation")) === true) && l.updateModel({ name: e.name })), P.returnRouterError === true) return F !== void 0 ? Promise.reject(F) : $;
        });
      };
      n("click", p, C), p.defaultPrevented !== true && C();
      return;
    }
    n("click", p);
  }
  function _(p) {
    yn(p, [13, 32]) ? g(p, true) : Zl(p) !== true && p.keyCode >= 35 && p.keyCode <= 40 && p.altKey !== true && p.metaKey !== true && l.onKbdNavigate(p.keyCode, a.$el) === true && je(p), n("keydown", p);
  }
  function w() {
    const p = l.tabProps.value.narrowIndicator, b = [], C = d("div", { ref: u, class: ["q-tab__indicator", l.tabProps.value.indicatorClass] });
    e.icon !== void 0 && b.push(d(et, { class: "q-tab__icon", name: e.icon })), e.label !== void 0 && b.push(d("div", { class: "q-tab__label" }, e.label)), e.alert !== false && b.push(e.alertIcon !== void 0 ? d(et, { class: "q-tab__alert-icon", color: e.alert !== true ? e.alert : void 0, name: e.alertIcon }) : d("div", { class: "q-tab__alert" + (e.alert !== true ? ` text-${e.alert}` : "") })), p === true && b.push(C);
    const P = [d("div", { class: "q-focus-helper", tabindex: -1, ref: o }), d("div", { class: h.value }, qt(t.default, b))];
    return p === false && P.push(C), P;
  }
  const T = { name: v(() => e.name), rootRef: i, tabIndicatorRef: u, routeData: r };
  We(() => {
    l.unregisterTab(T);
  }), ct(() => {
    l.registerTab(T);
  });
  function y(p, b) {
    const C = { ref: i, class: f.value, tabindex: m.value, role: "tab", "aria-selected": s.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: g, onKeydown: _, ...b };
    return cn(d(p, C, w()), [[fi, c.value]]);
  }
  return { renderTab: y, $tabs: l };
}
var Ir = he({ name: "QTab", props: oh, emits: ah, setup(e, { slots: t, emit: n }) {
  const { renderTab: r } = ih(e, t, n);
  return () => r("div");
} }), Vy = he({ name: "QTabPanels", props: { ...Vs, ...nt }, emits: Ds, setup(e, { slots: t }) {
  const n = xe(), r = lt(e, n.proxy.$q), { updatePanelsList: l, getPanelContent: a, panelDirectives: o } = Is(), i = v(() => "q-tab-panels q-panel-parent" + (r.value === true ? " q-tab-panels--dark q-dark" : ""));
  return () => (l(t), _n("div", { class: i.value }, a(), "pan", e.swipeable, () => o.value));
} }), Qi = he({ name: "QTabPanel", props: Os, setup(e, { slots: t }) {
  return () => d("div", { class: "q-tab-panel", role: "tabpanel" }, $e(t.default));
} }), vd = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, md = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, hd = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, Qa = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, Ka = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, co = { date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e), time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e), fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e), timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e), email: (e) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e), hexColor: (e) => vd.test(e), hexaColor: (e) => md.test(e), hexOrHexaColor: (e) => hd.test(e), rgbColor: (e) => Qa.test(e), rgbaColor: (e) => Ka.test(e), rgbOrRgbaColor: (e) => Qa.test(e) || Ka.test(e), hexOrRgbColor: (e) => vd.test(e) || Qa.test(e), hexaOrRgbaColor: (e) => md.test(e) || Ka.test(e), anyColor: (e) => hd.test(e) || Qa.test(e) || Ka.test(e) }, Dy = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;
function gd({ r: e, g: t, b: n, a: r }) {
  const l = r !== void 0;
  if (e = Math.round(e), t = Math.round(t), n = Math.round(n), e > 255 || t > 255 || n > 255 || l && r > 100) throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");
  return r = l ? (Math.round(255 * r / 100) | 256).toString(16).slice(1) : "", "#" + (n | t << 8 | e << 16 | 1 << 24).toString(16).slice(1) + r;
}
function bd({ r: e, g: t, b: n, a: r }) {
  return `rgb${r !== void 0 ? "a" : ""}(${e},${t},${n}${r !== void 0 ? "," + r / 100 : ""})`;
}
function uh(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  e = e.replace(/^#/, ""), e.length === 3 ? e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] : e.length === 4 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
  const t = parseInt(e, 16);
  return e.length > 6 ? { r: t >> 24 & 255, g: t >> 16 & 255, b: t >> 8 & 255, a: Math.round((t & 255) / 2.55) } : { r: t >> 16, g: t >> 8 & 255, b: t & 255 };
}
function pd({ h: e, s: t, v: n, a: r }) {
  let l, a, o;
  t = t / 100, n = n / 100, e = e / 360;
  const i = Math.floor(e * 6), u = e * 6 - i, c = n * (1 - t), s = n * (1 - u * t), f = n * (1 - (1 - u) * t);
  switch (i % 6) {
    case 0:
      l = n, a = f, o = c;
      break;
    case 1:
      l = s, a = n, o = c;
      break;
    case 2:
      l = c, a = n, o = f;
      break;
    case 3:
      l = c, a = s, o = n;
      break;
    case 4:
      l = f, a = c, o = n;
      break;
    case 5:
      l = n, a = c, o = s;
      break;
  }
  return { r: Math.round(l * 255), g: Math.round(a * 255), b: Math.round(o * 255), a: r };
}
function Ki({ r: e, g: t, b: n, a: r }) {
  const l = Math.max(e, t, n), a = Math.min(e, t, n), o = l - a, i = l === 0 ? 0 : o / l, u = l / 255;
  let c;
  switch (l) {
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
  return { h: Math.round(c * 360), s: Math.round(i * 100), v: Math.round(u * 100), a: r };
}
function sh(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  const t = e.replace(/ /g, ""), n = Dy.exec(t);
  if (n === null) return uh(t);
  const r = { r: Math.min(255, parseInt(n[2], 10)), g: Math.min(255, parseInt(n[3], 10)), b: Math.min(255, parseInt(n[4], 10)) };
  if (n[1]) {
    const l = parseFloat(n[5]);
    r.a = Math.min(1, isNaN(l) === true ? 1 : l) * 100;
  }
  return r;
}
function Iy(e) {
  if (typeof e != "string" && (!e || e.r === void 0)) throw new TypeError("Expected a string or a {r, g, b} object as color");
  const t = typeof e == "string" ? sh(e) : e, n = t.r / 255, r = t.g / 255, l = t.b / 255, a = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4), o = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4), i = l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4);
  return 0.2126 * a + 0.7152 * o + 0.0722 * i;
}
var zy = ["rgb(255,204,204)", "rgb(255,230,204)", "rgb(255,255,204)", "rgb(204,255,204)", "rgb(204,255,230)", "rgb(204,255,255)", "rgb(204,230,255)", "rgb(204,204,255)", "rgb(230,204,255)", "rgb(255,204,255)", "rgb(255,153,153)", "rgb(255,204,153)", "rgb(255,255,153)", "rgb(153,255,153)", "rgb(153,255,204)", "rgb(153,255,255)", "rgb(153,204,255)", "rgb(153,153,255)", "rgb(204,153,255)", "rgb(255,153,255)", "rgb(255,102,102)", "rgb(255,179,102)", "rgb(255,255,102)", "rgb(102,255,102)", "rgb(102,255,179)", "rgb(102,255,255)", "rgb(102,179,255)", "rgb(102,102,255)", "rgb(179,102,255)", "rgb(255,102,255)", "rgb(255,51,51)", "rgb(255,153,51)", "rgb(255,255,51)", "rgb(51,255,51)", "rgb(51,255,153)", "rgb(51,255,255)", "rgb(51,153,255)", "rgb(51,51,255)", "rgb(153,51,255)", "rgb(255,51,255)", "rgb(255,0,0)", "rgb(255,128,0)", "rgb(255,255,0)", "rgb(0,255,0)", "rgb(0,255,128)", "rgb(0,255,255)", "rgb(0,128,255)", "rgb(0,0,255)", "rgb(128,0,255)", "rgb(255,0,255)", "rgb(245,0,0)", "rgb(245,123,0)", "rgb(245,245,0)", "rgb(0,245,0)", "rgb(0,245,123)", "rgb(0,245,245)", "rgb(0,123,245)", "rgb(0,0,245)", "rgb(123,0,245)", "rgb(245,0,245)", "rgb(214,0,0)", "rgb(214,108,0)", "rgb(214,214,0)", "rgb(0,214,0)", "rgb(0,214,108)", "rgb(0,214,214)", "rgb(0,108,214)", "rgb(0,0,214)", "rgb(108,0,214)", "rgb(214,0,214)", "rgb(163,0,0)", "rgb(163,82,0)", "rgb(163,163,0)", "rgb(0,163,0)", "rgb(0,163,82)", "rgb(0,163,163)", "rgb(0,82,163)", "rgb(0,0,163)", "rgb(82,0,163)", "rgb(163,0,163)", "rgb(92,0,0)", "rgb(92,46,0)", "rgb(92,92,0)", "rgb(0,92,0)", "rgb(0,92,46)", "rgb(0,92,92)", "rgb(0,46,92)", "rgb(0,0,92)", "rgb(46,0,92)", "rgb(92,0,92)", "rgb(255,255,255)", "rgb(205,205,205)", "rgb(178,178,178)", "rgb(153,153,153)", "rgb(127,127,127)", "rgb(102,102,102)", "rgb(76,76,76)", "rgb(51,51,51)", "rgb(25,25,25)", "rgb(0,0,0)"], yd = "M5 5 h10 v10 h-10 v-10 z", Ny = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==";
he({ name: "QColor", props: { ...nt, ...xn, modelValue: String, defaultValue: String, defaultView: { type: String, default: "spectrum", validator: (e) => ["spectrum", "tune", "palette"].includes(e) }, formatModel: { type: String, default: "auto", validator: (e) => ["auto", "hex", "rgb", "hexa", "rgba"].includes(e) }, palette: Array, noHeader: Boolean, noHeaderTabs: Boolean, noFooter: Boolean, square: Boolean, flat: Boolean, bordered: Boolean, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), { $q: r } = n, l = lt(e, r), { getCache: a } = Fa(), o = W(null), i = W(null), u = v(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("hex") !== -1), c = v(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1), s = W(e.formatModel === "auto" ? e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#") ? "hex" : "rgb" : e.formatModel.startsWith("hex") ? "hex" : "rgb"), f = W(e.defaultView), h = W(q(e.modelValue || e.defaultValue)), m = v(() => e.disable !== true && e.readonly !== true), g = v(() => e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#")), _ = v(() => u.value !== null ? u.value : g.value), w = v(() => ({ type: "hidden", name: e.name, value: h.value[_.value === true ? "hex" : "rgb"] })), T = ql(w), y = v(() => c.value !== null ? c.value : h.value.a !== void 0), p = v(() => ({ backgroundColor: h.value.rgb || "#000" })), b = v(() => `q-color-picker__header-content q-color-picker__header-content--${(h.value.a !== void 0 && h.value.a < 65 ? true : Iy(h.value) > 0.4) ? "light" : "dark"}`), C = v(() => ({ background: `hsl(${h.value.h},100%,50%)` })), P = v(() => ({ top: `${100 - h.value.v}%`, [r.lang.rtl === true ? "right" : "left"]: `${h.value.s}%` })), F = v(() => e.palette !== void 0 && e.palette.length !== 0 ? e.palette : zy), j = v(() => "q-color-picker" + (e.bordered === true ? " q-color-picker--bordered" : "") + (e.square === true ? " q-color-picker--square no-border-radius" : "") + (e.flat === true ? " q-color-picker--flat no-shadow" : "") + (e.disable === true ? " disabled" : "") + (l.value === true ? " q-color-picker--dark q-dark" : "")), $ = v(() => e.disable === true ? { "aria-disabled": "true" } : {}), L = v(() => [[bn, le, void 0, { prevent: true, stop: true, mouse: true }]]);
  ge(() => e.modelValue, (S) => {
    const E = q(S || e.defaultValue);
    E.hex !== h.value.hex && (h.value = E);
  }), ge(() => e.defaultValue, (S) => {
    if (!e.modelValue && S) {
      const E = q(S);
      E.hex !== h.value.hex && (h.value = E);
    }
  });
  function H(S, E) {
    h.value.hex = gd(S), h.value.rgb = bd(S), h.value.r = S.r, h.value.g = S.g, h.value.b = S.b, h.value.a = S.a;
    const z = h.value[_.value === true ? "hex" : "rgb"];
    t("update:modelValue", z), E === true && t("change", z);
  }
  function q(S) {
    const E = c.value !== void 0 ? c.value : e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1;
    if (typeof S != "string" || S.length === 0 || co.anyColor(S.replace(/ /g, "")) !== true) return { h: 0, s: 0, v: 0, r: 0, g: 0, b: 0, a: E === true ? 100 : void 0, hex: void 0, rgb: void 0 };
    const z = sh(S);
    return E === true && z.a === void 0 && (z.a = 100), z.hex = gd(z), z.rgb = bd(z), Object.assign(z, Ki(z));
  }
  function A(S, E, z) {
    const te = o.value;
    if (te === null) return;
    const D = te.clientWidth, I = te.clientHeight, se = te.getBoundingClientRect();
    let me = Math.min(D, Math.max(0, S - se.left));
    r.lang.rtl === true && (me = D - me);
    const fe = Math.min(I, Math.max(0, E - se.top)), de = Math.round(100 * me / D), re = Math.round(100 * Math.max(0, Math.min(1, -(fe / I) + 1))), K = pd({ h: h.value.h, s: de, v: re, a: y.value === true ? h.value.a : void 0 });
    h.value.s = de, h.value.v = re, H(K, z);
  }
  function k(S, E) {
    const z = Math.round(S), te = pd({ h: z, s: h.value.s, v: h.value.v, a: y.value === true ? h.value.a : void 0 });
    h.value.h = z, H(te, E);
  }
  function U(S) {
    k(S, true);
  }
  function Q(S, E, z, te, D) {
    if (te !== void 0 && wt(te), !/^[0-9]+$/.test(S)) {
      D === true && n.$forceUpdate();
      return;
    }
    const I = Math.floor(Number(S));
    if (I < 0 || I > z) {
      D === true && n.$forceUpdate();
      return;
    }
    const se = { r: E === "r" ? I : h.value.r, g: E === "g" ? I : h.value.g, b: E === "b" ? I : h.value.b, a: y.value === true ? E === "a" ? I : h.value.a : void 0 };
    if (E !== "a") {
      const me = Ki(se);
      h.value.h = me.h, h.value.s = me.s, h.value.v = me.v;
    }
    if (H(se, D), D !== true && (te == null ? void 0 : te.target.selectionEnd) !== void 0) {
      const me = te.target.selectionEnd;
      Qe(() => {
        te.target.setSelectionRange(me, me);
      });
    }
  }
  function Y(S, E) {
    let z;
    const te = S.target.value;
    if (wt(S), s.value === "hex") {
      if (te.length !== (y.value === true ? 9 : 7) || !/^#[0-9A-Fa-f]+$/.test(te)) return true;
      z = uh(te);
    } else {
      let I;
      if (te.endsWith(")")) if (y.value !== true && te.startsWith("rgb(")) {
        if (I = te.substring(4, te.length - 1).split(",").map((se) => parseInt(se, 10)), I.length !== 3 || !/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(te)) return true;
      } else if (y.value === true && te.startsWith("rgba(")) {
        if (I = te.substring(5, te.length - 1).split(","), I.length !== 4 || !/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(te)) return true;
        for (let me = 0; me < 3; me++) {
          const fe = parseInt(I[me], 10);
          if (fe < 0 || fe > 255) return true;
          I[me] = fe;
        }
        const se = parseFloat(I[3]);
        if (se < 0 || se > 1) return true;
        I[3] = se;
      } else return true;
      else return true;
      if (I[0] < 0 || I[0] > 255 || I[1] < 0 || I[1] > 255 || I[2] < 0 || I[2] > 255 || y.value === true && (I[3] < 0 || I[3] > 1)) return true;
      z = { r: I[0], g: I[1], b: I[2], a: y.value === true ? I[3] * 100 : void 0 };
    }
    const D = Ki(z);
    if (h.value.h = D.h, h.value.s = D.s, h.value.v = D.v, H(z, E), E !== true) {
      const I = S.target.selectionEnd;
      Qe(() => {
        S.target.setSelectionRange(I, I);
      });
    }
  }
  function X(S) {
    const E = q(S), z = { r: E.r, g: E.g, b: E.b, a: E.a };
    z.a === void 0 && (z.a = h.value.a), h.value.h = E.h, h.value.s = E.s, h.value.v = E.v, H(z, true);
  }
  function le(S) {
    S.isFinal ? A(S.position.left, S.position.top, true) : ye(S);
  }
  const ye = qm((S) => {
    A(S.position.left, S.position.top);
  }, 20);
  function R(S) {
    A(S.pageX - window.pageXOffset, S.pageY - window.pageYOffset, true);
  }
  function x(S) {
    A(S.pageX - window.pageXOffset, S.pageY - window.pageYOffset);
  }
  function O(S) {
    i.value !== null && (i.value.$el.style.opacity = S ? 1 : 0);
  }
  function Z(S) {
    s.value = S;
  }
  function oe() {
    const S = [];
    return e.noHeaderTabs !== true && S.push(d(fd, { class: "q-color-picker__header-tabs", modelValue: s.value, dense: true, align: "justify", "onUpdate:modelValue": Z }, () => [d(Ir, { label: "HEX" + (y.value === true ? "A" : ""), name: "hex", ripple: false }), d(Ir, { label: "RGB" + (y.value === true ? "A" : ""), name: "rgb", ripple: false })])), S.push(d("div", { class: "q-color-picker__header-banner row flex-center no-wrap" }, [d("input", { class: "fit", value: h.value[s.value], ...m.value !== true ? { readonly: true } : {}, ...a("topIn", { onInput: (E) => {
      O(Y(E) === true);
    }, onChange: wt, onBlur: (E) => {
      Y(E, true) === true && n.$forceUpdate(), O(false);
    } }) }), d(et, { ref: i, class: "q-color-picker__error-icon absolute no-pointer-events", name: r.iconSet.type.negative })])), d("div", { class: "q-color-picker__header relative-position overflow-hidden" }, [d("div", { class: "q-color-picker__header-bg absolute-full" }), d("div", { class: b.value, style: p.value }, S)]);
  }
  function B() {
    return d(Vy, { modelValue: f.value, animated: true }, () => [d(Qi, { class: "q-color-picker__spectrum-tab overflow-hidden", name: "spectrum" }, V), d(Qi, { class: "q-pa-md q-color-picker__tune-tab", name: "tune" }, ne), d(Qi, { class: "q-color-picker__palette-tab", name: "palette" }, pe)]);
  }
  function M(S) {
    f.value = S;
  }
  function ee() {
    return d("div", { class: "q-color-picker__footer relative-position overflow-hidden" }, [d(fd, { class: "absolute-full", modelValue: f.value, dense: true, align: "justify", "onUpdate:modelValue": M }, () => [d(Ir, { icon: r.iconSet.colorPicker.spectrum, name: "spectrum", ripple: false }), d(Ir, { icon: r.iconSet.colorPicker.tune, name: "tune", ripple: false }), d(Ir, { icon: r.iconSet.colorPicker.palette, name: "palette", ripple: false })])]);
  }
  function V() {
    const S = { ref: o, class: "q-color-picker__spectrum non-selectable relative-position cursor-pointer" + (m.value !== true ? " readonly" : ""), style: C.value, ...m.value === true ? { onClick: R, onMousedown: x } : {} }, E = [d("div", { style: { paddingBottom: "100%" } }), d("div", { class: "q-color-picker__spectrum-white absolute-full" }), d("div", { class: "q-color-picker__spectrum-black absolute-full" }), d("div", { class: "absolute", style: P.value }, [h.value.hex !== void 0 ? d("div", { class: "q-color-picker__spectrum-circle" }) : null])], z = [d(vl, { class: "q-color-picker__hue non-selectable", modelValue: h.value.h, min: 0, max: 360, trackSize: "8px", innerTrackColor: "transparent", selectionColor: "transparent", readonly: m.value !== true, thumbPath: yd, "onUpdate:modelValue": k, onChange: U })];
    return y.value === true && z.push(d(vl, { class: "q-color-picker__alpha non-selectable", modelValue: h.value.a, min: 0, max: 100, trackSize: "8px", trackColor: "white", innerTrackColor: "transparent", selectionColor: "transparent", trackImg: Ny, readonly: m.value !== true, hideSelection: true, thumbPath: yd, ...a("alphaSlide", { "onUpdate:modelValue": (te) => Q(te, "a", 100), onChange: (te) => Q(te, "a", 100, void 0, true) }) })), [_n("div", S, E, "spec", m.value, () => L.value), d("div", { class: "q-color-picker__sliders" }, z)];
  }
  function ne() {
    return [d("div", { class: "row items-center no-wrap" }, [d("div", "R"), d(vl, { modelValue: h.value.r, min: 0, max: 255, color: "red", dark: l.value, readonly: m.value !== true, ...a("rSlide", { "onUpdate:modelValue": (S) => Q(S, "r", 255), onChange: (S) => Q(S, "r", 255, void 0, true) }) }), d("input", { value: h.value.r, maxlength: 3, readonly: m.value !== true, onChange: wt, ...a("rIn", { onInput: (S) => Q(S.target.value, "r", 255, S), onBlur: (S) => Q(S.target.value, "r", 255, S, true) }) })]), d("div", { class: "row items-center no-wrap" }, [d("div", "G"), d(vl, { modelValue: h.value.g, min: 0, max: 255, color: "green", dark: l.value, readonly: m.value !== true, ...a("gSlide", { "onUpdate:modelValue": (S) => Q(S, "g", 255), onChange: (S) => Q(S, "g", 255, void 0, true) }) }), d("input", { value: h.value.g, maxlength: 3, readonly: m.value !== true, onChange: wt, ...a("gIn", { onInput: (S) => Q(S.target.value, "g", 255, S), onBlur: (S) => Q(S.target.value, "g", 255, S, true) }) })]), d("div", { class: "row items-center no-wrap" }, [d("div", "B"), d(vl, { modelValue: h.value.b, min: 0, max: 255, color: "blue", readonly: m.value !== true, dark: l.value, ...a("bSlide", { "onUpdate:modelValue": (S) => Q(S, "b", 255), onChange: (S) => Q(S, "b", 255, void 0, true) }) }), d("input", { value: h.value.b, maxlength: 3, readonly: m.value !== true, onChange: wt, ...a("bIn", { onInput: (S) => Q(S.target.value, "b", 255, S), onBlur: (S) => Q(S.target.value, "b", 255, S, true) }) })]), y.value === true ? d("div", { class: "row items-center no-wrap" }, [d("div", "A"), d(vl, { modelValue: h.value.a, color: "grey", readonly: m.value !== true, dark: l.value, ...a("aSlide", { "onUpdate:modelValue": (S) => Q(S, "a", 100), onChange: (S) => Q(S, "a", 100, void 0, true) }) }), d("input", { value: h.value.a, maxlength: 3, readonly: m.value !== true, onChange: wt, ...a("aIn", { onInput: (S) => Q(S.target.value, "a", 100, S), onBlur: (S) => Q(S.target.value, "a", 100, S, true) }) })]) : null];
  }
  function pe() {
    const S = (E) => d("div", { class: "q-color-picker__cube col-auto", style: { backgroundColor: E }, ...m.value === true ? a("palette#" + E, { onClick: () => {
      X(E);
    } }) : {} });
    return [d("div", { class: "row items-center q-color-picker__palette-rows" + (m.value === true ? " q-color-picker__palette-rows--editable" : "") }, F.value.map(S))];
  }
  return () => {
    const S = [B()];
    return e.name !== void 0 && e.disable !== true && T(S, "push"), e.noHeader !== true && S.unshift(oe()), e.noFooter !== true && S.push(ee()), d("div", { class: j.value, ...$.value }, S);
  };
} });
var gl = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
function Hy(e, t, n) {
  return Object.prototype.toString.call(e) === "[object Date]" && (n = e.getDate(), t = e.getMonth() + 1, e = e.getFullYear()), Ky(Qs(e, t, n));
}
function _d(e, t, n) {
  return dh(Qy(e, t, n));
}
function jy(e) {
  return Uy(e) === 0;
}
function fo(e, t) {
  return t <= 6 ? 31 : t <= 11 || jy(e) ? 30 : 29;
}
function Uy(e) {
  const t = gl.length;
  let n = gl[0], r, l, a, o, i;
  if (e < n || e >= gl[t - 1]) throw new Error("Invalid Jalaali year " + e);
  for (i = 1; i < t && (r = gl[i], l = r - n, !(e < r)); i += 1) n = r;
  return o = e - n, l - o < 6 && (o = o - l + _t(l + 4, 33) * 33), a = un(un(o + 1, 33) - 1, 4), a === -1 && (a = 4), a;
}
function ch(e, t) {
  const n = gl.length, r = e + 621;
  let l = -14, a = gl[0], o, i, u, c, s;
  if (e < a || e >= gl[n - 1]) throw new Error("Invalid Jalaali year " + e);
  for (s = 1; s < n && (o = gl[s], i = o - a, !(e < o)); s += 1) l = l + _t(i, 33) * 8 + _t(un(i, 33), 4), a = o;
  c = e - a, l = l + _t(c, 33) * 8 + _t(un(c, 33) + 3, 4), un(i, 33) === 4 && i - c === 4 && (l += 1);
  const f = _t(r, 4) - _t((_t(r, 100) + 1) * 3, 4) - 150, h = 20 + l - f;
  return t || (i - c < 6 && (c = c - i + _t(i + 4, 33) * 33), u = un(un(c + 1, 33) - 1, 4), u === -1 && (u = 4)), { leap: u, gy: r, march: h };
}
function Qy(e, t, n) {
  const r = ch(e, true);
  return Qs(r.gy, 3, r.march) + (t - 1) * 31 - _t(t, 7) * (t - 7) + n - 1;
}
function Ky(e) {
  const t = dh(e).gy;
  let n = t - 621, r, l, a;
  const o = ch(n, false), i = Qs(t, 3, o.march);
  if (a = e - i, a >= 0) {
    if (a <= 185) return l = 1 + _t(a, 31), r = un(a, 31) + 1, { jy: n, jm: l, jd: r };
    a -= 186;
  } else n -= 1, a += 179, o.leap === 1 && (a += 1);
  return l = 7 + _t(a, 30), r = un(a, 30) + 1, { jy: n, jm: l, jd: r };
}
function Qs(e, t, n) {
  let r = _t((e + _t(t - 8, 6) + 100100) * 1461, 4) + _t(153 * un(t + 9, 12) + 2, 5) + n - 34840408;
  return r = r - _t(_t(e + 100100 + _t(t - 8, 6), 100) * 3, 4) + 752, r;
}
function dh(e) {
  let t = 4 * e + 139361631;
  t = t + _t(_t(4 * e + 183187720, 146097) * 3, 4) * 4 - 3908;
  const n = _t(un(t, 1461), 4) * 5 + 308, r = _t(un(n, 153), 5) + 1, l = un(_t(n, 153), 12) + 1;
  return { gy: _t(t, 1461) - 100100 + _t(8 - l, 6), gm: l, gd: r };
}
function _t(e, t) {
  return ~~(e / t);
}
function un(e, t) {
  return e - ~~(e / t) * t;
}
var Wy = ["gregorian", "persian"], No = { mask: { type: String }, locale: Object, calendar: { type: String, validator: (e) => Wy.includes(e), default: "gregorian" }, landscape: Boolean, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, readonly: Boolean, disable: Boolean }, fh = ["update:modelValue"];
function Qn(e) {
  return e.year + "/" + at(e.month) + "/" + at(e.day);
}
function vh(e, t) {
  const n = v(() => e.disable !== true && e.readonly !== true), r = v(() => n.value === true ? 0 : -1), l = v(() => {
    const i = [];
    return e.color !== void 0 && i.push(`bg-${e.color}`), e.textColor !== void 0 && i.push(`text-${e.textColor}`), i.join(" ");
  });
  function a() {
    return e.locale !== void 0 ? { ...t.lang.date, ...e.locale } : t.lang.date;
  }
  function o(i) {
    const u = /* @__PURE__ */ new Date(), c = i === true ? null : 0;
    if (e.calendar === "persian") {
      const s = Hy(u);
      return { year: s.jy, month: s.jm, day: s.jd };
    }
    return { year: u.getFullYear(), month: u.getMonth() + 1, day: u.getDate(), hour: c, minute: c, second: c, millisecond: c };
  }
  return { editable: n, tabindex: r, headerClass: l, getLocale: a, getCurrentDate: o };
}
var mh = 864e5, Yy = 36e5, Qu = 6e4, hh = "YYYY-MM-DDTHH:mm:ss.SSSZ", Xy = /\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g, Gy = /(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g, Wi = {};
function Zy(e, t) {
  const n = "(" + t.days.join("|") + ")", r = e + n;
  if (Wi[r] !== void 0) return Wi[r];
  const l = "(" + t.daysShort.join("|") + ")", a = "(" + t.months.join("|") + ")", o = "(" + t.monthsShort.join("|") + ")", i = {};
  let u = 0;
  const c = e.replace(Gy, (f) => {
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
        return l;
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
  return Wi[r] = s, s;
}
function gh(e, t) {
  return e !== void 0 ? e : t !== void 0 ? t.date : Lu.date;
}
function wd(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), l = Math.floor(r / 60), a = r % 60;
  return n + at(l) + t + at(a);
}
function Yr(e, t, n, r, l) {
  const a = { year: null, month: null, day: null, hour: null, minute: null, second: null, millisecond: null, timezoneOffset: null, dateHash: null, timeHash: null };
  if (l !== void 0 && Object.assign(a, l), e == null || e === "" || typeof e != "string") return a;
  t === void 0 && (t = hh);
  const o = gh(n, si.props), i = o.months, u = o.monthsShort, { regex: c, map: s } = Zy(t, o), f = e.match(c);
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
      const m = r !== "persian" ? new Date(a.year, a.month, 0).getDate() : fo(a.year, a.month);
      if (a.day > m) return a;
    }
    s.H !== void 0 ? a.hour = parseInt(f[s.H], 10) % 24 : s.h !== void 0 && (a.hour = parseInt(f[s.h], 10) % 12, (s.A && f[s.A] === "PM" || s.a && f[s.a] === "pm" || s.aa && f[s.aa] === "p.m.") && (a.hour += 12), a.hour = a.hour % 24), s.m !== void 0 && (a.minute = parseInt(f[s.m], 10) % 60), s.s !== void 0 && (a.second = parseInt(f[s.s], 10) % 60), s.S !== void 0 && (a.millisecond = parseInt(f[s.S], 10) * 10 ** (3 - f[s.S].length)), (s.Z !== void 0 || s.ZZ !== void 0) && (h = s.Z !== void 0 ? f[s.Z].replace(":", "") : f[s.ZZ], a.timezoneOffset = (h[0] === "+" ? -1 : 1) * (60 * h.slice(1, 3) + 1 * h.slice(3, 5)));
  }
  return a.dateHash = at(a.year, 6) + "/" + at(a.month) + "/" + at(a.day), a.timeHash = at(a.hour) + ":" + at(a.minute) + ":" + at(a.second) + h, a;
}
function Yi(e) {
  const t = new Date(e.getFullYear(), e.getMonth(), e.getDate());
  t.setDate(t.getDate() - (t.getDay() + 6) % 7 + 3);
  const n = new Date(t.getFullYear(), 0, 4);
  n.setDate(n.getDate() - (n.getDay() + 6) % 7 + 3);
  const r = t.getTimezoneOffset() - n.getTimezoneOffset();
  t.setHours(t.getHours() - r);
  const l = (t - n) / (mh * 7);
  return 1 + Math.floor(l);
}
function Kn(e, t, n) {
  const r = new Date(e), l = `set${n === true ? "UTC" : ""}`;
  switch (t) {
    case "year":
    case "years":
      r[`${l}Month`](0);
    case "month":
    case "months":
      r[`${l}Date`](1);
    case "day":
    case "days":
    case "date":
      r[`${l}Hours`](0);
    case "hour":
    case "hours":
      r[`${l}Minutes`](0);
    case "minute":
    case "minutes":
      r[`${l}Seconds`](0);
    case "second":
    case "seconds":
      r[`${l}Milliseconds`](0);
  }
  return r;
}
function Wa(e, t, n) {
  return (e.getTime() - e.getTimezoneOffset() * Qu - (t.getTime() - t.getTimezoneOffset() * Qu)) / n;
}
function bh(e, t, n = "days") {
  const r = new Date(e), l = new Date(t);
  switch (n) {
    case "years":
    case "year":
      return r.getFullYear() - l.getFullYear();
    case "months":
    case "month":
      return (r.getFullYear() - l.getFullYear()) * 12 + r.getMonth() - l.getMonth();
    case "days":
    case "day":
    case "date":
      return Wa(Kn(r, "day"), Kn(l, "day"), mh);
    case "hours":
    case "hour":
      return Wa(Kn(r, "hour"), Kn(l, "hour"), Yy);
    case "minutes":
    case "minute":
      return Wa(Kn(r, "minute"), Kn(l, "minute"), Qu);
    case "seconds":
    case "second":
      return Wa(Kn(r, "second"), Kn(l, "second"), 1e3);
  }
}
function Xi(e) {
  return bh(e, Kn(e, "year"), "days") + 1;
}
function ar(e) {
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
var xd = { YY(e, t, n) {
  const r = this.YYYY(e, t, n) % 100;
  return r >= 0 ? at(r) : "-" + at(Math.abs(r));
}, YYYY(e, t, n) {
  return n ?? e.getFullYear();
}, M(e) {
  return e.getMonth() + 1;
}, Mo(e) {
  return ar(e.getMonth() + 1);
}, MM(e) {
  return at(e.getMonth() + 1);
}, MMM(e, t) {
  return t.monthsShort[e.getMonth()];
}, MMMM(e, t) {
  return t.months[e.getMonth()];
}, Q(e) {
  return Math.ceil((e.getMonth() + 1) / 3);
}, Qo(e) {
  return ar(this.Q(e));
}, D(e) {
  return e.getDate();
}, Do(e) {
  return ar(e.getDate());
}, DD(e) {
  return at(e.getDate());
}, DDD(e) {
  return Xi(e);
}, DDDo(e) {
  return ar(Xi(e));
}, DDDD(e) {
  return at(Xi(e), 3);
}, d(e) {
  return e.getDay();
}, do(e) {
  return ar(e.getDay());
}, dd(e, t) {
  return t.days[e.getDay()].slice(0, 2);
}, ddd(e, t) {
  return t.daysShort[e.getDay()];
}, dddd(e, t) {
  return t.days[e.getDay()];
}, E(e) {
  return e.getDay() || 7;
}, w(e) {
  return Yi(e);
}, wo(e) {
  return ar(Yi(e));
}, ww(e) {
  return at(Yi(e));
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
}, Z(e, t, n, r) {
  const l = r ?? e.getTimezoneOffset();
  return wd(l, ":");
}, ZZ(e, t, n, r) {
  const l = r ?? e.getTimezoneOffset();
  return wd(l);
}, X(e) {
  return Math.floor(e.getTime() / 1e3);
}, x(e) {
  return e.getTime();
} };
function ph(e, t, n, r, l) {
  if (e !== 0 && !e || e === 1 / 0 || e === -1 / 0) return;
  const a = new Date(e);
  if (isNaN(a)) return;
  t === void 0 && (t = hh);
  const o = gh(n, si.props);
  return t.replace(Xy, (i, u) => i in xd ? xd[i](a, o, r, l) : u === void 0 ? i : u.split("\\]").join("]"));
}
var Hn = 20, Jy = ["Calendar", "Years", "Months"], Sd = (e) => Jy.includes(e), Gi = (e) => /^-?[\d]+\/[0-1]\d$/.test(e), or = " \u2014 ";
function rl(e) {
  return e.year + "/" + at(e.month);
}
he({ name: "QDate", props: { ...No, ...xn, ...nt, modelValue: { required: true, validator: (e) => typeof e == "string" || Array.isArray(e) === true || Object(e) === e || e === null }, multiple: Boolean, range: Boolean, title: String, subtitle: String, mask: { ...No.mask, default: "YYYY/MM/DD" }, defaultYearMonth: { type: String, validator: Gi }, yearsInMonthView: Boolean, events: [Array, Function], eventColor: [String, Function], emitImmediately: Boolean, options: [Array, Function], navigationMinYearMonth: { type: String, validator: Gi }, navigationMaxYearMonth: { type: String, validator: Gi }, noUnset: Boolean, firstDayOfWeek: [String, Number], todayBtn: Boolean, minimal: Boolean, defaultView: { type: String, default: "Calendar", validator: Sd } }, emits: [...fh, "rangeStart", "rangeEnd", "navigation"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = lt(e, l), { getCache: o } = Fa(), { tabindex: i, headerClass: u, getLocale: c, getCurrentDate: s } = vh(e, l);
  let f;
  const h = Ba(e), m = ql(h), g = W(null), _ = W(He()), w = W(c()), T = v(() => He()), y = v(() => c()), p = v(() => s()), b = W(ue(_.value, w.value)), C = W(e.defaultView), P = v(() => l.lang.rtl === true ? "right" : "left"), F = W(P.value), j = W(P.value), $ = b.value.year, L = W($ - $ % Hn - ($ < 0 ? Hn : 0)), H = W(null), q = v(() => {
    const N = e.landscape === true ? "landscape" : "portrait";
    return `q-date q-date--${N} q-date--${N}-${e.minimal === true ? "minimal" : "standard"}` + (a.value === true ? " q-date--dark q-dark" : "") + (e.bordered === true ? " q-date--bordered" : "") + (e.square === true ? " q-date--square no-border-radius" : "") + (e.flat === true ? " q-date--flat no-shadow" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-date--readonly" : "");
  }), A = v(() => e.color || "primary"), k = v(() => e.textColor || "white"), U = v(() => e.emitImmediately === true && e.multiple !== true && e.range !== true), Q = v(() => Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue !== null && e.modelValue !== void 0 ? [e.modelValue] : []), Y = v(() => Q.value.filter((N) => typeof N == "string").map((N) => De(N, _.value, w.value)).filter((N) => N.dateHash !== null && N.day !== null && N.month !== null && N.year !== null)), X = v(() => {
    const N = (G) => De(G, _.value, w.value);
    return Q.value.filter((G) => Lt(G) === true && G.from !== void 0 && G.to !== void 0).map((G) => ({ from: N(G.from), to: N(G.to) })).filter((G) => G.from.dateHash !== null && G.to.dateHash !== null && G.from.dateHash < G.to.dateHash);
  }), le = v(() => e.calendar !== "persian" ? (N) => new Date(N.year, N.month - 1, N.day) : (N) => {
    const G = _d(N.year, N.month, N.day);
    return new Date(G.gy, G.gm - 1, G.gd);
  }), ye = v(() => e.calendar === "persian" ? Qn : (N, G, ve) => ph(new Date(N.year, N.month - 1, N.day, N.hour, N.minute, N.second, N.millisecond), G === void 0 ? _.value : G, ve === void 0 ? w.value : ve, N.year, N.timezoneOffset)), R = v(() => Y.value.length + X.value.reduce((N, G) => N + 1 + bh(le.value(G.to), le.value(G.from)), 0)), x = v(() => {
    if (e.title !== void 0 && e.title !== null && e.title.length !== 0) return e.title;
    if (H.value !== null) {
      const ve = H.value.init, qe = le.value(ve);
      return w.value.daysShort[qe.getDay()] + ", " + w.value.monthsShort[ve.month - 1] + " " + ve.day + or + "?";
    }
    if (R.value === 0) return or;
    if (R.value > 1) return `${R.value} ${w.value.pluralDay}`;
    const N = Y.value[0], G = le.value(N);
    return isNaN(G.valueOf()) === true ? or : w.value.headerTitle !== void 0 ? w.value.headerTitle(G, N) : w.value.daysShort[G.getDay()] + ", " + w.value.monthsShort[N.month - 1] + " " + N.day;
  }), O = v(() => Y.value.concat(X.value.map((G) => G.from)).sort((G, ve) => G.year - ve.year || G.month - ve.month)[0]), Z = v(() => Y.value.concat(X.value.map((G) => G.to)).sort((G, ve) => ve.year - G.year || ve.month - G.month)[0]), oe = v(() => {
    if (e.subtitle !== void 0 && e.subtitle !== null && e.subtitle.length !== 0) return e.subtitle;
    if (R.value === 0) return or;
    if (R.value > 1) {
      const N = O.value, G = Z.value, ve = w.value.monthsShort;
      return ve[N.month - 1] + (N.year !== G.year ? " " + N.year + or + ve[G.month - 1] + " " : N.month !== G.month ? or + ve[G.month - 1] : "") + " " + G.year;
    }
    return Y.value[0].year;
  }), B = v(() => {
    const N = [l.iconSet.datetime.arrowLeft, l.iconSet.datetime.arrowRight];
    return l.lang.rtl === true ? N.reverse() : N;
  }), M = v(() => e.firstDayOfWeek !== void 0 ? Number(e.firstDayOfWeek) : w.value.firstDayOfWeek), ee = v(() => {
    const N = w.value.daysShort, G = M.value;
    return G > 0 ? N.slice(G, 7).concat(N.slice(0, G)) : N;
  }), V = v(() => {
    const N = b.value;
    return e.calendar !== "persian" ? new Date(N.year, N.month, 0).getDate() : fo(N.year, N.month);
  }), ne = v(() => typeof e.eventColor == "function" ? e.eventColor : () => e.eventColor), pe = v(() => {
    if (e.navigationMinYearMonth === void 0) return null;
    const N = e.navigationMinYearMonth.split("/");
    return { year: parseInt(N[0], 10), month: parseInt(N[1], 10) };
  }), S = v(() => {
    if (e.navigationMaxYearMonth === void 0) return null;
    const N = e.navigationMaxYearMonth.split("/");
    return { year: parseInt(N[0], 10), month: parseInt(N[1], 10) };
  }), E = v(() => {
    const N = { month: { prev: true, next: true }, year: { prev: true, next: true } };
    return pe.value !== null && pe.value.year >= b.value.year && (N.year.prev = false, pe.value.year === b.value.year && pe.value.month >= b.value.month && (N.month.prev = false)), S.value !== null && S.value.year <= b.value.year && (N.year.next = false, S.value.year === b.value.year && S.value.month <= b.value.month && (N.month.next = false)), N;
  }), z = v(() => {
    const N = {};
    return Y.value.forEach((G) => {
      const ve = rl(G);
      N[ve] === void 0 && (N[ve] = []), N[ve].push(G.day);
    }), N;
  }), te = v(() => {
    const N = {};
    return X.value.forEach((G) => {
      const ve = rl(G.from), qe = rl(G.to);
      if (N[ve] === void 0 && (N[ve] = []), N[ve].push({ from: G.from.day, to: ve === qe ? G.to.day : void 0, range: G }), ve < qe) {
        let Ee;
        const { year: Ze, month: Le } = G.from, ze = Le < 12 ? { year: Ze, month: Le + 1 } : { year: Ze + 1, month: 1 };
        for (; (Ee = rl(ze)) <= qe; ) N[Ee] === void 0 && (N[Ee] = []), N[Ee].push({ from: void 0, to: Ee === qe ? G.to.day : void 0, range: G }), ze.month++, ze.month > 12 && (ze.year++, ze.month = 1);
      }
    }), N;
  }), D = v(() => {
    if (H.value === null) return;
    const { init: N, initHash: G, final: ve, finalHash: qe } = H.value, [Ee, Ze] = G <= qe ? [N, ve] : [ve, N], Le = rl(Ee), ze = rl(Ze);
    if (Le !== I.value && ze !== I.value) return;
    const rt = {};
    return Le === I.value ? (rt.from = Ee.day, rt.includeFrom = true) : rt.from = 1, ze === I.value ? (rt.to = Ze.day, rt.includeTo = true) : rt.to = V.value, rt;
  }), I = v(() => rl(b.value)), se = v(() => {
    const N = {};
    if (e.options === void 0) {
      for (let ve = 1; ve <= V.value; ve++) N[ve] = true;
      return N;
    }
    const G = typeof e.options == "function" ? e.options : (ve) => e.options.includes(ve);
    for (let ve = 1; ve <= V.value; ve++) {
      const qe = I.value + "/" + at(ve);
      N[ve] = G(qe);
    }
    return N;
  }), me = v(() => {
    const N = {};
    if (e.events === void 0) for (let G = 1; G <= V.value; G++) N[G] = false;
    else {
      const G = typeof e.events == "function" ? e.events : (ve) => e.events.includes(ve);
      for (let ve = 1; ve <= V.value; ve++) {
        const qe = I.value + "/" + at(ve);
        N[ve] = G(qe) === true && ne.value(qe);
      }
    }
    return N;
  }), fe = v(() => {
    let N, G;
    const { year: ve, month: qe } = b.value;
    if (e.calendar !== "persian") N = new Date(ve, qe - 1, 1), G = new Date(ve, qe - 1, 0).getDate();
    else {
      const Ee = _d(ve, qe, 1);
      N = new Date(Ee.gy, Ee.gm - 1, Ee.gd);
      let Ze = qe - 1, Le = ve;
      Ze === 0 && (Ze = 12, Le--), G = fo(Le, Ze);
    }
    return { days: N.getDay() - M.value - 1, endDay: G };
  }), de = v(() => {
    const N = [], { days: G, endDay: ve } = fe.value, qe = G < 0 ? G + 7 : G;
    if (qe < 6) for (let Le = ve - qe; Le <= ve; Le++) N.push({ i: Le, fill: true });
    const Ee = N.length;
    for (let Le = 1; Le <= V.value; Le++) {
      const ze = { i: Le, event: me.value[Le], classes: [] };
      se.value[Le] === true && (ze.in = true, ze.flat = true), N.push(ze);
    }
    if (z.value[I.value] !== void 0 && z.value[I.value].forEach((Le) => {
      const ze = Ee + Le - 1;
      Object.assign(N[ze], { selected: true, unelevated: true, flat: false, color: A.value, textColor: k.value });
    }), te.value[I.value] !== void 0 && te.value[I.value].forEach((Le) => {
      if (Le.from !== void 0) {
        const ze = Ee + Le.from - 1, rt = Ee + (Le.to || V.value) - 1;
        for (let dn = ze; dn <= rt; dn++) Object.assign(N[dn], { range: Le.range, unelevated: true, color: A.value, textColor: k.value });
        Object.assign(N[ze], { rangeFrom: true, flat: false }), Le.to !== void 0 && Object.assign(N[rt], { rangeTo: true, flat: false });
      } else if (Le.to !== void 0) {
        const ze = Ee + Le.to - 1;
        for (let rt = Ee; rt <= ze; rt++) Object.assign(N[rt], { range: Le.range, unelevated: true, color: A.value, textColor: k.value });
        Object.assign(N[ze], { flat: false, rangeTo: true });
      } else {
        const ze = Ee + V.value - 1;
        for (let rt = Ee; rt <= ze; rt++) Object.assign(N[rt], { range: Le.range, unelevated: true, color: A.value, textColor: k.value });
      }
    }), D.value !== void 0) {
      const Le = Ee + D.value.from - 1, ze = Ee + D.value.to - 1;
      for (let rt = Le; rt <= ze; rt++) N[rt].color = A.value, N[rt].editRange = true;
      D.value.includeFrom === true && (N[Le].editRangeFrom = true), D.value.includeTo === true && (N[ze].editRangeTo = true);
    }
    b.value.year === p.value.year && b.value.month === p.value.month && (N[Ee + p.value.day - 1].today = true);
    const Ze = N.length % 7;
    if (Ze > 0) {
      const Le = 7 - Ze;
      for (let ze = 1; ze <= Le; ze++) N.push({ i: ze, fill: true });
    }
    return N.forEach((Le) => {
      let ze = "q-date__calendar-item ";
      Le.fill === true ? ze += "q-date__calendar-item--fill" : (ze += `q-date__calendar-item--${Le.in === true ? "in" : "out"}`, Le.range !== void 0 && (ze += ` q-date__range${Le.rangeTo === true ? "-to" : Le.rangeFrom === true ? "-from" : ""}`), Le.editRange === true && (ze += ` q-date__edit-range${Le.editRangeFrom === true ? "-from" : ""}${Le.editRangeTo === true ? "-to" : ""}`), (Le.range !== void 0 || Le.editRange === true) && (ze += ` text-${Le.color}`)), Le.classes = ze;
    }), N;
  }), re = v(() => e.disable === true ? { "aria-disabled": "true" } : {});
  ge(() => e.modelValue, (N) => {
    if (f === JSON.stringify(N)) f = 0;
    else {
      const G = ue(_.value, w.value);
      it(G.year, G.month, G);
    }
  }), ge(C, () => {
    g.value !== null && r.$el.contains(document.activeElement) === true && g.value.focus();
  }), ge(() => b.value.year + "|" + b.value.month, () => {
    n("navigation", { year: b.value.year, month: b.value.month });
  }), ge(T, (N) => {
    Se(N, w.value, "mask"), _.value = N;
  }), ge(y, (N) => {
    Se(_.value, N, "locale"), w.value = N;
  });
  function K(N) {
    f = JSON.stringify(N);
  }
  function ie() {
    const { year: N, month: G, day: ve } = p.value, qe = { ...b.value, year: N, month: G, day: ve }, Ee = z.value[rl(qe)];
    (Ee === void 0 || Ee.includes(qe.day) === false) && zn(qe), Te(qe.year, qe.month);
  }
  function we(N) {
    Sd(N) === true && (C.value = N);
  }
  function ke(N, G) {
    ["month", "year"].includes(N) && (N === "month" ? ae : _e2)(G === true ? -1 : 1);
  }
  function Te(N, G) {
    C.value = "Calendar", it(N, G);
  }
  function Me(N, G) {
    if (e.range === false || !N) {
      H.value = null;
      return;
    }
    const ve = Object.assign({ ...b.value }, N), qe = G !== void 0 ? Object.assign({ ...b.value }, G) : ve;
    H.value = { init: ve, initHash: Qn(ve), final: qe, finalHash: Qn(qe) }, Te(ve.year, ve.month);
  }
  function He() {
    return e.calendar === "persian" ? "YYYY/MM/DD" : e.mask;
  }
  function De(N, G, ve) {
    return Yr(N, G, ve, e.calendar, { hour: 0, minute: 0, second: 0, millisecond: 0 });
  }
  function ue(N, G) {
    const ve = Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue ? [e.modelValue] : [];
    if (ve.length === 0) return be();
    const qe = ve[ve.length - 1], Ee = De(qe.from !== void 0 ? qe.from : qe, N, G);
    return Ee.dateHash === null ? be() : Ee;
  }
  function be() {
    let N, G;
    if (e.defaultYearMonth !== void 0) {
      const ve = e.defaultYearMonth.split("/");
      N = parseInt(ve[0], 10), G = parseInt(ve[1], 10);
    } else {
      const ve = p.value !== void 0 ? p.value : s();
      N = ve.year, G = ve.month;
    }
    return { year: N, month: G, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0, dateHash: N + "/" + at(G) + "/01" };
  }
  function ae(N) {
    let G = b.value.year, ve = Number(b.value.month) + N;
    ve === 13 ? (ve = 1, G++) : ve === 0 && (ve = 12, G--), it(G, ve), U.value === true && Ut("month");
  }
  function _e2(N) {
    const G = Number(b.value.year) + N;
    it(G, b.value.month), U.value === true && Ut("year");
  }
  function Ce(N) {
    it(N, b.value.month), C.value = e.defaultView === "Years" ? "Months" : "Calendar", U.value === true && Ut("year");
  }
  function Oe(N) {
    it(b.value.year, N), C.value = "Calendar", U.value === true && Ut("month");
  }
  function Re(N, G) {
    var _a3;
    (((_a3 = z.value[G]) == null ? void 0 : _a3.includes(N.day)) === true ? ce : zn)(N);
  }
  function Xe(N) {
    return { year: N.year, month: N.month, day: N.day };
  }
  function it(N, G, ve) {
    if (pe.value !== null && N <= pe.value.year && ((G < pe.value.month || N < pe.value.year) && (G = pe.value.month), N = pe.value.year), S.value !== null && N >= S.value.year && ((G > S.value.month || N > S.value.year) && (G = S.value.month), N = S.value.year), ve !== void 0) {
      const { hour: Ee, minute: Ze, second: Le, millisecond: ze, timezoneOffset: rt, timeHash: dn } = ve;
      Object.assign(b.value, { hour: Ee, minute: Ze, second: Le, millisecond: ze, timezoneOffset: rt, timeHash: dn });
    }
    const qe = N + "/" + at(G) + "/01";
    qe !== b.value.dateHash && (F.value = b.value.dateHash < qe == (l.lang.rtl !== true) ? "left" : "right", N !== b.value.year && (j.value = F.value), Qe(() => {
      L.value = N - N % Hn - (N < 0 ? Hn : 0), Object.assign(b.value, { year: N, month: G, day: 1, dateHash: qe });
    }));
  }
  function Ct(N, G, ve) {
    const qe = N !== null && N.length === 1 && e.multiple === false ? N[0] : N, { reason: Ee, details: Ze } = nl(G, ve);
    K(qe), n("update:modelValue", qe, Ee, Ze);
  }
  function Ut(N) {
    const G = Y.value[0] !== void 0 && Y.value[0].dateHash !== null ? { ...Y.value[0] } : { ...b.value };
    Qe(() => {
      G.year = b.value.year, G.month = b.value.month;
      const ve = e.calendar !== "persian" ? new Date(G.year, G.month, 0).getDate() : fo(G.year, G.month);
      G.day = Math.min(Math.max(1, G.day), ve);
      const qe = an(G), { details: Ee } = nl("", G);
      K(qe), n("update:modelValue", qe, N, Ee);
    });
  }
  function nl(N, G) {
    return G.from !== void 0 ? { reason: `${N}-range`, details: { ...Xe(G.target), from: Xe(G.from), to: Xe(G.to) } } : { reason: `${N}-day`, details: Xe(G) };
  }
  function an(N, G, ve) {
    return N.from !== void 0 ? { from: ye.value(N.from, G, ve), to: ye.value(N.to, G, ve) } : ye.value(N, G, ve);
  }
  function zn(N) {
    let G;
    if (e.multiple === true) if (N.from !== void 0) {
      const ve = Qn(N.from), qe = Qn(N.to), Ee = Y.value.filter((Le) => Le.dateHash < ve || Le.dateHash > qe), Ze = X.value.filter(({ from: Le, to: ze }) => ze.dateHash < ve || Le.dateHash > qe);
      G = Ee.concat(Ze).concat(N).map((Le) => an(Le));
    } else {
      const ve = Q.value.slice();
      ve.push(an(N)), G = ve;
    }
    else G = an(N);
    Ct(G, "add", N);
  }
  function ce(N) {
    if (e.noUnset === true) return;
    let G = null;
    if (e.multiple === true && Array.isArray(e.modelValue) === true) {
      const ve = an(N);
      N.from !== void 0 ? G = e.modelValue.filter((qe) => qe.from !== void 0 ? qe.from !== ve.from && qe.to !== ve.to : true) : G = e.modelValue.filter((qe) => qe !== ve), G.length === 0 && (G = null);
    }
    Ct(G, "remove", N);
  }
  function Se(N, G, ve) {
    const qe = Y.value.concat(X.value).map((Ze) => an(Ze, N, G)).filter((Ze) => Ze.from !== void 0 ? Ze.from.dateHash !== null && Ze.to.dateHash !== null : Ze.dateHash !== null), Ee = (e.multiple === true ? qe : qe[0]) || null;
    K(Ee), n("update:modelValue", Ee, ve);
  }
  function Fe() {
    if (e.minimal !== true) return d("div", { class: "q-date__header " + u.value }, [d("div", { class: "relative-position" }, [d(Ot, { name: "q-transition--fade" }, () => d("div", { key: "h-yr-" + oe.value, class: "q-date__header-subtitle q-date__header-link " + (C.value === "Years" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: i.value, ...o("vY", { onClick() {
      C.value = "Years";
    }, onKeyup(N) {
      N.keyCode === 13 && (C.value = "Years");
    } }) }, [oe.value]))]), d("div", { class: "q-date__header-title relative-position flex no-wrap" }, [d("div", { class: "relative-position col" }, [d(Ot, { name: "q-transition--fade" }, () => d("div", { key: "h-sub" + x.value, class: "q-date__header-title-label q-date__header-link " + (C.value === "Calendar" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: i.value, ...o("vC", { onClick() {
      C.value = "Calendar";
    }, onKeyup(N) {
      N.keyCode === 13 && (C.value = "Calendar");
    } }) }, [x.value]))]), e.todayBtn === true ? d(Je, { class: "q-date__header-today self-start", icon: l.iconSet.datetime.today, ariaLabel: l.lang.date.today, flat: true, size: "sm", round: true, tabindex: i.value, onClick: ie }) : null])]);
  }
  function Be({ label: N, type: G, key: ve, dir: qe, goTo: Ee, boundaries: Ze, cls: Le }) {
    return [d("div", { class: "row items-center q-date__arrow" }, [d(Je, { round: true, dense: true, size: "sm", flat: true, icon: B.value[0], ariaLabel: G === "Years" ? l.lang.date.prevYear : l.lang.date.prevMonth, tabindex: i.value, disable: Ze.prev === false, ...o("go-#" + G, { onClick() {
      Ee(-1);
    } }) })]), d("div", { class: "relative-position overflow-hidden flex flex-center" + Le }, [d(Ot, { name: "q-transition--jump-" + qe }, () => d("div", { key: ve }, [d(Je, { flat: true, dense: true, noCaps: true, label: N, tabindex: i.value, ...o("view#" + G, { onClick: () => {
      C.value = G;
    } }) })]))]), d("div", { class: "row items-center q-date__arrow" }, [d(Je, { round: true, dense: true, size: "sm", flat: true, icon: B.value[1], ariaLabel: G === "Years" ? l.lang.date.nextYear : l.lang.date.nextMonth, tabindex: i.value, disable: Ze.next === false, ...o("go+#" + G, { onClick() {
      Ee(1);
    } }) })])];
  }
  const Ue = { Calendar: () => [d("div", { key: "calendar-view", class: "q-date__view q-date__calendar" }, [d("div", { class: "q-date__navigation row items-center no-wrap" }, Be({ label: w.value.months[b.value.month - 1], type: "Months", key: b.value.month, dir: F.value, goTo: ae, boundaries: E.value.month, cls: " col" }).concat(Be({ label: b.value.year, type: "Years", key: b.value.year, dir: j.value, goTo: _e2, boundaries: E.value.year, cls: "" }))), d("div", { class: "q-date__calendar-weekdays row items-center no-wrap" }, ee.value.map((N) => d("div", { class: "q-date__calendar-item" }, [d("div", N)]))), d("div", { class: "q-date__calendar-days-container relative-position overflow-hidden" }, [d(Ot, { name: "q-transition--slide-" + F.value }, () => d("div", { key: I.value, class: "q-date__calendar-days fit" }, de.value.map((N) => d("div", { class: N.classes }, [N.in === true ? d(Je, { class: N.today === true ? "q-date__today" : "", dense: true, flat: N.flat, unelevated: N.unelevated, color: N.color, textColor: N.textColor, label: N.i, tabindex: i.value, ...o("day#" + N.i, { onClick: () => {
    pt(N.i);
  }, onMouseover: () => {
    ht(N.i);
  } }) }, N.event !== false ? () => d("div", { class: "q-date__event bg-" + N.event }) : null) : d("div", "" + N.i)]))))])])], Months() {
    const N = b.value.year === p.value.year, G = (qe) => pe.value !== null && b.value.year === pe.value.year && pe.value.month > qe || S.value !== null && b.value.year === S.value.year && S.value.month < qe, ve = w.value.monthsShort.map((qe, Ee) => {
      const Ze = b.value.month === Ee + 1;
      return d("div", { class: "q-date__months-item flex flex-center" }, [d(Je, { class: N === true && p.value.month === Ee + 1 ? "q-date__today" : null, flat: Ze !== true, label: qe, unelevated: Ze, color: Ze === true ? A.value : null, textColor: Ze === true ? k.value : null, tabindex: i.value, disable: G(Ee + 1), ...o("month#" + Ee, { onClick: () => {
        Oe(Ee + 1);
      } }) })]);
    });
    return e.yearsInMonthView === true && ve.unshift(d("div", { class: "row no-wrap full-width" }, [Be({ label: b.value.year, type: "Years", key: b.value.year, dir: j.value, goTo: _e2, boundaries: E.value.year, cls: " col" })])), d("div", { key: "months-view", class: "q-date__view q-date__months flex flex-center" }, ve);
  }, Years() {
    const N = L.value, G = N + Hn, ve = [], qe = (Ee) => pe.value !== null && pe.value.year > Ee || S.value !== null && S.value.year < Ee;
    for (let Ee = N; Ee <= G; Ee++) {
      const Ze = b.value.year === Ee;
      ve.push(d("div", { class: "q-date__years-item flex flex-center" }, [d(Je, { key: "yr" + Ee, class: p.value.year === Ee ? "q-date__today" : null, flat: !Ze, label: Ee, dense: true, unelevated: Ze, color: Ze === true ? A.value : null, textColor: Ze === true ? k.value : null, tabindex: i.value, disable: qe(Ee), ...o("yr#" + Ee, { onClick: () => {
        Ce(Ee);
      } }) })]));
    }
    return d("div", { class: "q-date__view q-date__years flex flex-center" }, [d("div", { class: "col-auto" }, [d(Je, { round: true, dense: true, flat: true, icon: B.value[0], ariaLabel: l.lang.date.prevRangeYears(Hn), tabindex: i.value, disable: qe(N), ...o("y-", { onClick: () => {
      L.value -= Hn;
    } }) })]), d("div", { class: "q-date__years-content col self-stretch row items-center" }, ve), d("div", { class: "col-auto" }, [d(Je, { round: true, dense: true, flat: true, icon: B.value[1], ariaLabel: l.lang.date.nextRangeYears(Hn), tabindex: i.value, disable: qe(G), ...o("y+", { onClick: () => {
      L.value += Hn;
    } }) })])]);
  } };
  function pt(N) {
    const G = { ...b.value, day: N };
    if (e.range === false) {
      Re(G, I.value);
      return;
    }
    if (H.value === null) {
      const ve = de.value.find((Ee) => Ee.fill !== true && Ee.i === N);
      if (e.noUnset !== true && ve.range !== void 0) {
        ce({ target: G, from: ve.range.from, to: ve.range.to });
        return;
      }
      if (ve.selected === true) {
        ce(G);
        return;
      }
      const qe = Qn(G);
      H.value = { init: G, initHash: qe, final: G, finalHash: qe }, n("rangeStart", Xe(G));
    } else {
      const ve = H.value.initHash, qe = Qn(G), Ee = ve <= qe ? { from: H.value.init, to: G } : { from: G, to: H.value.init };
      H.value = null, zn(ve === qe ? G : { target: G, ...Ee }), n("rangeEnd", { from: Xe(Ee.from), to: Xe(Ee.to) });
    }
  }
  function ht(N) {
    if (H.value !== null) {
      const G = { ...b.value, day: N };
      Object.assign(H.value, { final: G, finalHash: Qn(G) });
    }
  }
  return Object.assign(r, { setToday: ie, setView: we, offsetCalendar: ke, setCalendarTo: Te, setEditingRange: Me }), () => {
    const N = [d("div", { class: "q-date__content col relative-position" }, [d(Ot, { name: "q-transition--fade" }, Ue[C.value])])], G = $e(t.default);
    return G !== void 0 && N.push(d("div", { class: "q-date__actions" }, G)), e.name !== void 0 && e.disable !== true && m(N, "push"), d("div", { class: q.value, ...re.value }, [Fe(), d("div", { ref: g, class: "q-date__main col column", tabindex: -1 }, N)]);
  };
} });
function yh(e, t, n) {
  let r;
  function l() {
    r !== void 0 && (wa.remove(r), r = void 0);
  }
  return We(() => {
    e.value === true && l();
  }), { removeFromHistory: l, addToHistory() {
    r = { condition: () => n.value === true, handler: t }, wa.add(r);
  } };
}
var zr = 0, Zi, Ji, Xr, eu = false, Cd, kd, Td, Al = null;
function e1(e) {
  t1(e) && je(e);
}
function t1(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop")) return true;
  const t = vp(e), n = e.shiftKey && !e.deltaX, r = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY), l = n || r ? e.deltaY : e.deltaX;
  for (let a = 0; a < t.length; a++) {
    const o = t[a];
    if (sy(o, r)) return r ? l < 0 && o.scrollTop === 0 ? true : l > 0 && o.scrollTop + o.clientHeight === o.scrollHeight : l < 0 && o.scrollLeft === 0 ? true : l > 0 && o.scrollLeft + o.clientWidth === o.scrollWidth;
  }
  return true;
}
function qd(e) {
  e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function Ya(e) {
  eu !== true && (eu = true, requestAnimationFrame(() => {
    eu = false;
    const { height: t } = e.target, { clientHeight: n, scrollTop: r } = document.scrollingElement;
    (Xr === void 0 || t !== window.innerHeight) && (Xr = n - t, document.scrollingElement.scrollTop = r), r > Xr && (document.scrollingElement.scrollTop -= Math.ceil((r - Xr) / 8));
  }));
}
function Md(e) {
  const t = document.body, n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: r, overflowX: l } = window.getComputedStyle(t);
    Zi = mi(window), Ji = yl(window), Cd = t.style.left, kd = t.style.top, Td = window.location.href, t.style.left = `-${Zi}px`, t.style.top = `-${Ji}px`, l !== "hidden" && (l === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), r !== "hidden" && (r === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = true, Ie.is.ios === true && (n === true ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", Ya, ft.passiveCapture), window.visualViewport.addEventListener("scroll", Ya, ft.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", qd, ft.passiveCapture));
  }
  Ie.is.desktop === true && Ie.is.mac === true && window[`${e}EventListener`]("wheel", e1, ft.notPassive), e === "remove" && (Ie.is.ios === true && (n === true ? (window.visualViewport.removeEventListener("resize", Ya, ft.passiveCapture), window.visualViewport.removeEventListener("scroll", Ya, ft.passiveCapture)) : window.removeEventListener("scroll", qd, ft.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = false, t.style.left = Cd, t.style.top = kd, window.location.href === Td && window.scrollTo(Zi, Ji), Xr = void 0);
}
function Ku(e) {
  let t = "add";
  if (e === true) {
    if (zr++, Al !== null) {
      clearTimeout(Al), Al = null;
      return;
    }
    if (zr > 1) return;
  } else {
    if (zr === 0 || (zr--, zr > 0)) return;
    if (t = "remove", Ie.is.ios === true && Ie.is.nativeMobile === true) {
      Al !== null && clearTimeout(Al), Al = setTimeout(() => {
        Md(t), Al = null;
      }, 100);
      return;
    }
  }
  Md(t);
}
function _h() {
  let e;
  return { preventBodyScroll(t) {
    t !== e && (e !== void 0 || t === true) && (e = t, Ku(t));
  } };
}
var Xa = 0, n1 = { standard: "fixed-full flex-center", top: "fixed-top justify-center", bottom: "fixed-bottom justify-center", right: "fixed-right items-center", left: "fixed-left items-center" }, Ed = { standard: ["scale", "scale"], top: ["slide-down", "slide-up"], bottom: ["slide-up", "slide-down"], right: ["slide-left", "slide-right"], left: ["slide-right", "slide-left"] }, bi = he({ name: "QDialog", inheritAttrs: false, props: { ...Pr, ...Hl, transitionShow: String, transitionHide: String, persistent: Boolean, autoClose: Boolean, allowFocusOutside: Boolean, noEscDismiss: Boolean, noBackdropDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, noShake: Boolean, seamless: Boolean, maximized: Boolean, fullWidth: Boolean, fullHeight: Boolean, square: Boolean, backdropFilter: String, position: { type: String, default: "standard", validator: (e) => ["standard", "top", "bottom", "left", "right"].includes(e) } }, emits: [...$r, "shake", "click", "escapeKey"], setup(e, { slots: t, emit: n, attrs: r }) {
  const l = xe(), a = W(null), o = W(false), i = W(false);
  let u = null, c = null, s, f;
  const h = v(() => e.persistent !== true && e.noRouteDismiss !== true && e.seamless !== true), { preventBodyScroll: m } = _h(), { registerTimeout: g } = Zn(), { registerTick: _, removeTick: w } = wr(), { transitionProps: T, transitionStyle: y } = vi(e, () => Ed[e.position][0], () => Ed[e.position][1]), p = v(() => y.value + (e.backdropFilter !== void 0 ? `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}` : "")), { showPortal: b, hidePortal: C, portalIsAccessible: P, renderPortal: F } = $s(l, a, oe, "dialog"), { hide: j } = Lr({ showing: o, hideOnRouteChange: h, handleShow: U, handleHide: Q, processOnMount: true }), { addToHistory: $, removeFromHistory: L } = yh(o, j, h), H = v(() => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === true ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${n1[e.position]}` + (i.value === true ? " q-dialog__inner--animating" : "") + (e.fullWidth === true ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === true ? " q-dialog__inner--fullheight" : "") + (e.square === true ? " q-dialog__inner--square" : "")), q = v(() => o.value === true && e.seamless !== true), A = v(() => e.autoClose === true ? { onClick: x } : {}), k = v(() => [`q-dialog fullscreen no-pointer-events q-dialog--${q.value === true ? "modal" : "seamless"}`, r.class]);
  ge(() => e.maximized, (B) => {
    o.value === true && R(B);
  }), ge(q, (B) => {
    m(B), B === true ? (zm(Z), Dm(le)) : (Hu(Z), Lo(le));
  });
  function U(B) {
    var _a3;
    $(), c = e.noRefocus === false && document.activeElement !== null ? document.activeElement : null, R(e.maximized), b(), i.value = true, e.noFocus !== true ? ((_a3 = document.activeElement) == null ? void 0 : _a3.blur(), _(Y)) : w(), g(() => {
      if (l.proxy.$q.platform.is.ios === true) {
        if (e.seamless !== true && document.activeElement) {
          const { top: M, bottom: ee } = document.activeElement.getBoundingClientRect(), { innerHeight: V } = window, ne = window.visualViewport !== void 0 ? window.visualViewport.height : V;
          M > 0 && ee > ne / 2 && (document.scrollingElement.scrollTop = Math.min(document.scrollingElement.scrollHeight - ne, ee >= V ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + ee - ne / 2))), document.activeElement.scrollIntoView();
        }
        f = true, a.value.click(), f = false;
      }
      b(true), i.value = false, n("show", B);
    }, e.transitionDuration);
  }
  function Q(B) {
    w(), L(), ye(true), i.value = true, C(), c !== null && ((((B == null ? void 0 : B.type.indexOf("key")) === 0 ? c.closest('[tabindex]:not([tabindex^="-"])') : void 0) || c).focus(), c = null), g(() => {
      C(true), i.value = false, n("hide", B);
    }, e.transitionDuration);
  }
  function Y(B) {
    Br(() => {
      let M = a.value;
      if (M !== null) {
        if (B !== void 0) {
          const ee = M.querySelector(B);
          if (ee !== null) {
            ee.focus({ preventScroll: true });
            return;
          }
        }
        M.contains(document.activeElement) !== true && (M = M.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || M.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || M.querySelector("[autofocus], [data-autofocus]") || M, M.focus({ preventScroll: true }));
      }
    });
  }
  function X(B) {
    B && typeof B.focus == "function" ? B.focus({ preventScroll: true }) : Y(), n("shake");
    const M = a.value;
    M !== null && (M.classList.remove("q-animate--scale"), M.classList.add("q-animate--scale"), u !== null && clearTimeout(u), u = setTimeout(() => {
      u = null, a.value !== null && (M.classList.remove("q-animate--scale"), Y());
    }, 170));
  }
  function le() {
    e.seamless !== true && (e.persistent === true || e.noEscDismiss === true ? e.maximized !== true && e.noShake !== true && X() : (n("escapeKey"), j()));
  }
  function ye(B) {
    u !== null && (clearTimeout(u), u = null), (B === true || o.value === true) && (R(false), e.seamless !== true && (m(false), Hu(Z), Lo(le))), B !== true && (c = null);
  }
  function R(B) {
    B === true ? s !== true && (Xa < 1 && document.body.classList.add("q-body--dialog"), Xa++, s = true) : s === true && (Xa < 2 && document.body.classList.remove("q-body--dialog"), Xa--, s = false);
  }
  function x(B) {
    f !== true && (j(B), n("click", B));
  }
  function O(B) {
    e.persistent !== true && e.noBackdropDismiss !== true ? j(B) : e.noShake !== true && X();
  }
  function Z(B) {
    e.allowFocusOutside !== true && P.value === true && Tm(a.value, B.target) !== true && Y('[tabindex]:not([tabindex="-1"])');
  }
  Object.assign(l.proxy, { focus: Y, shake: X, __updateRefocusTarget(B) {
    c = B || null;
  } }), We(ye);
  function oe() {
    return d("div", { role: "dialog", "aria-modal": q.value === true ? "true" : "false", ...r, class: k.value }, [d(Ot, { name: "q-transition--fade", appear: true }, () => q.value === true ? d("div", { class: "q-dialog__backdrop fixed-full", style: p.value, "aria-hidden": "true", tabindex: -1, onClick: O }) : null), d(Ot, T.value, () => o.value === true ? d("div", { ref: a, class: H.value, style: y.value, tabindex: -1, ...A.value }, $e(t.default)) : null)]);
  }
  return F;
} }), Rd = 150, Ad = he({ name: "QDrawer", inheritAttrs: false, props: { ...Pr, ...nt, side: { type: String, default: "left", validator: (e) => ["left", "right"].includes(e) }, width: { type: Number, default: 300 }, mini: Boolean, miniToOverlay: Boolean, miniWidth: { type: Number, default: 57 }, noMiniAnimation: Boolean, breakpoint: { type: Number, default: 1023 }, showIfAbove: Boolean, behavior: { type: String, validator: (e) => ["default", "desktop", "mobile"].includes(e), default: "default" }, bordered: Boolean, elevated: Boolean, overlay: Boolean, persistent: Boolean, noSwipeOpen: Boolean, noSwipeClose: Boolean, noSwipeBackdrop: Boolean }, emits: [...$r, "onLayout", "miniState"], setup(e, { slots: t, emit: n, attrs: r }) {
  const l = xe(), { proxy: { $q: a } } = l, o = lt(e, a), { preventBodyScroll: i } = _h(), { registerTimeout: u, removeTimeout: c } = Zn(), s = Mt(Jl, ot);
  if (s === ot) return console.error("QDrawer needs to be child of QLayout"), ot;
  let f, h = null, m;
  const g = W(e.behavior === "mobile" || e.behavior !== "desktop" && s.totalWidth.value <= e.breakpoint), _ = v(() => e.mini === true && g.value !== true), w = v(() => _.value === true ? e.miniWidth : e.width), T = W(e.showIfAbove === true && g.value === false ? true : e.modelValue === true), y = v(() => e.persistent !== true && (g.value === true || ye.value === true));
  function p(K, ie) {
    if (F(), K !== false && s.animate(), E(0), g.value === true) {
      const we = s.instances[Q.value];
      (we == null ? void 0 : we.belowBreakpoint) === true && we.hide(false), z(1), s.isContainer.value !== true && i(true);
    } else z(0), K !== false && te(false);
    u(() => {
      K !== false && te(true), ie !== true && n("show", K);
    }, Rd);
  }
  function b(K, ie) {
    j(), K !== false && s.animate(), z(0), E(H.value * w.value), me(), ie !== true ? u(() => {
      n("hide", K);
    }, Rd) : c();
  }
  const { show: C, hide: P } = Lr({ showing: T, hideOnRouteChange: y, handleShow: p, handleHide: b }), { addToHistory: F, removeFromHistory: j } = yh(T, P, y), $ = { belowBreakpoint: g, hide: P }, L = v(() => e.side === "right"), H = v(() => (a.lang.rtl === true ? -1 : 1) * (L.value === true ? 1 : -1)), q = W(0), A = W(false), k = W(false), U = W(w.value * H.value), Q = v(() => L.value === true ? "left" : "right"), Y = v(() => T.value === true && g.value === false && e.overlay === false ? e.miniToOverlay === true ? e.miniWidth : w.value : 0), X = v(() => e.overlay === true || e.miniToOverlay === true || s.view.value.indexOf(L.value ? "R" : "L") !== -1 || a.platform.is.ios === true && s.isContainer.value === true), le = v(() => e.overlay === false && T.value === true && g.value === false), ye = v(() => e.overlay === true && T.value === true && g.value === false), R = v(() => "fullscreen q-drawer__backdrop" + (T.value === false && A.value === false ? " hidden" : "")), x = v(() => ({ backgroundColor: `rgba(0,0,0,${q.value * 0.4})` })), O = v(() => L.value === true ? s.rows.value.top[2] === "r" : s.rows.value.top[0] === "l"), Z = v(() => L.value === true ? s.rows.value.bottom[2] === "r" : s.rows.value.bottom[0] === "l"), oe = v(() => {
    const K = {};
    return s.header.space === true && O.value === false && (X.value === true ? K.top = `${s.header.offset}px` : s.header.space === true && (K.top = `${s.header.size}px`)), s.footer.space === true && Z.value === false && (X.value === true ? K.bottom = `${s.footer.offset}px` : s.footer.space === true && (K.bottom = `${s.footer.size}px`)), K;
  }), B = v(() => {
    const K = { width: `${w.value}px`, transform: `translateX(${U.value}px)` };
    return g.value === true ? K : Object.assign(K, oe.value);
  }), M = v(() => "q-drawer__content fit " + (s.isContainer.value !== true ? "scroll" : "overflow-auto")), ee = v(() => `q-drawer q-drawer--${e.side}` + (k.value === true ? " q-drawer--mini-animate" : "") + (e.bordered === true ? " q-drawer--bordered" : "") + (o.value === true ? " q-drawer--dark q-dark" : "") + (A.value === true ? " no-transition" : T.value === true ? "" : " q-layout--prevent-focus") + (g.value === true ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${_.value === true ? "mini" : "standard"}` + (X.value === true || le.value !== true ? " fixed" : "") + (e.overlay === true || e.miniToOverlay === true ? " q-drawer--on-top" : "") + (O.value === true ? " q-drawer--top-padding" : ""))), V = v(() => {
    const K = a.lang.rtl === true ? e.side : Q.value;
    return [[bn, I, void 0, { [K]: true, mouse: true }]];
  }), ne = v(() => {
    const K = a.lang.rtl === true ? Q.value : e.side;
    return [[bn, se, void 0, { [K]: true, mouse: true }]];
  }), pe = v(() => {
    const K = a.lang.rtl === true ? Q.value : e.side;
    return [[bn, se, void 0, { [K]: true, mouse: true, mouseAllDir: true }]];
  });
  function S() {
    de(g, e.behavior === "mobile" || e.behavior !== "desktop" && s.totalWidth.value <= e.breakpoint);
  }
  ge(g, (K) => {
    K === true ? (f = T.value, T.value === true && P(false)) : e.overlay === false && e.behavior !== "mobile" && f !== false && (T.value === true ? (E(0), z(0), me()) : C(false));
  }), ge(() => e.side, (K, ie) => {
    s.instances[ie] === $ && (s.instances[ie] = void 0, s[ie].space = false, s[ie].offset = 0), s.instances[K] = $, s[K].size = w.value, s[K].space = le.value, s[K].offset = Y.value;
  }), ge(s.totalWidth, () => {
    (s.isContainer.value === true || document.qScrollPrevented !== true) && S();
  }), ge(() => e.behavior + e.breakpoint, S), ge(s.isContainer, (K) => {
    T.value === true && i(K !== true), K === true && S();
  }), ge(s.scrollbarWidth, () => {
    E(T.value === true ? 0 : void 0);
  }), ge(Y, (K) => {
    fe("offset", K);
  }), ge(le, (K) => {
    n("onLayout", K), fe("space", K);
  }), ge(L, () => {
    E();
  }), ge(w, (K) => {
    E(), re(e.miniToOverlay, K);
  }), ge(() => e.miniToOverlay, (K) => {
    re(K, w.value);
  }), ge(() => a.lang.rtl, () => {
    E();
  }), ge(() => e.mini, () => {
    e.noMiniAnimation || e.modelValue === true && (D(), s.animate());
  }), ge(_, (K) => {
    n("miniState", K);
  });
  function E(K) {
    K === void 0 ? Qe(() => {
      K = T.value === true ? 0 : w.value, E(H.value * K);
    }) : (s.isContainer.value === true && L.value === true && (g.value === true || Math.abs(K) === w.value) && (K += H.value * s.scrollbarWidth.value), U.value = K);
  }
  function z(K) {
    q.value = K;
  }
  function te(K) {
    const ie = K === true ? "remove" : s.isContainer.value !== true ? "add" : "";
    ie !== "" && document.body.classList[ie]("q-body--drawer-toggle");
  }
  function D() {
    h !== null && clearTimeout(h), l.proxy && l.proxy.$el && l.proxy.$el.classList.add("q-drawer--mini-animate"), k.value = true, h = setTimeout(() => {
      var _a3, _b2;
      h = null, k.value = false, (_b2 = (_a3 = l == null ? void 0 : l.proxy) == null ? void 0 : _a3.$el) == null ? void 0 : _b2.classList.remove("q-drawer--mini-animate");
    }, 150);
  }
  function I(K) {
    if (T.value !== false) return;
    const ie = w.value, we = dt(K.distance.x, 0, ie);
    if (K.isFinal === true) {
      we >= Math.min(75, ie) === true ? C() : (s.animate(), z(0), E(H.value * ie)), A.value = false;
      return;
    }
    E((a.lang.rtl === true ? L.value !== true : L.value) ? Math.max(ie - we, 0) : Math.min(0, we - ie)), z(dt(we / ie, 0, 1)), K.isFirst === true && (A.value = true);
  }
  function se(K) {
    if (T.value !== true) return;
    const ie = w.value, we = K.direction === e.side, ke = (a.lang.rtl === true ? we !== true : we) ? dt(K.distance.x, 0, ie) : 0;
    if (K.isFinal === true) {
      Math.abs(ke) < Math.min(75, ie) === true ? (s.animate(), z(1), E(0)) : P(), A.value = false;
      return;
    }
    E(H.value * ke), z(dt(1 - ke / ie, 0, 1)), K.isFirst === true && (A.value = true);
  }
  function me() {
    i(false), te(true);
  }
  function fe(K, ie) {
    s.update(e.side, K, ie);
  }
  function de(K, ie) {
    K.value !== ie && (K.value = ie);
  }
  function re(K, ie) {
    fe("size", K === true ? e.miniWidth : ie);
  }
  return s.instances[e.side] = $, re(e.miniToOverlay, w.value), fe("space", le.value), fe("offset", Y.value), e.showIfAbove === true && e.modelValue !== true && T.value === true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", true), ct(() => {
    n("onLayout", le.value), n("miniState", _.value), f = e.showIfAbove === true;
    const K = () => {
      (T.value === true ? p : b)(false, true);
    };
    if (s.totalWidth.value !== 0) {
      Qe(K);
      return;
    }
    m = ge(s.totalWidth, () => {
      m(), m = void 0, T.value === false && e.showIfAbove === true && g.value === false ? C(false) : K();
    });
  }), We(() => {
    m == null ? void 0 : m(), h !== null && (clearTimeout(h), h = null), T.value === true && me(), s.instances[e.side] === $ && (s.instances[e.side] = void 0, fe("size", 0), fe("offset", 0), fe("space", false));
  }), () => {
    const K = [];
    g.value === true && (e.noSwipeOpen === false && K.push(cn(d("div", { key: "open", class: `q-drawer__opener fixed-${e.side}`, "aria-hidden": "true" }), V.value)), K.push(_n("div", { ref: "backdrop", class: R.value, style: x.value, "aria-hidden": "true", onClick: P }, void 0, "backdrop", e.noSwipeBackdrop !== true && T.value === true, () => pe.value)));
    const ie = _.value === true && t.mini !== void 0, we = [d("div", { ...r, key: "" + ie, class: [M.value, r.class] }, ie === true ? t.mini() : $e(t.default))];
    return e.elevated === true && T.value === true && we.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), K.push(_n("aside", { ref: "content", class: ee.value, style: B.value }, we, "contentclose", e.noSwipeClose !== true && g.value === true, () => ne.value)), d("div", { class: "q-drawer-container" }, K);
  };
} });
function wh(e, t) {
  if (t && e === t) return null;
  const n = e.nodeName.toLowerCase();
  if (["div", "li", "ul", "ol", "blockquote"].includes(n) === true) return e;
  const r = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle, l = r.display;
  return l === "block" || l === "table" ? e : wh(e.parentNode);
}
function tu(e, t, n) {
  return !e || e === document.body ? false : n === true && e === t || (t === document ? document.body : t).contains(e.parentNode);
}
function xh(e, t, n) {
  if (n || (n = document.createRange(), n.selectNode(e), n.setStart(e, 0)), t.count === 0) n.setEnd(e, t.count);
  else if (t.count > 0) if (e.nodeType === Node.TEXT_NODE) e.textContent.length < t.count ? t.count -= e.textContent.length : (n.setEnd(e, t.count), t.count = 0);
  else for (let r = 0; t.count !== 0 && r < e.childNodes.length; r++) n = xh(e.childNodes[r], t, n);
  return n;
}
var l1 = /^https?:\/\//, r1 = class {
  constructor(e, t) {
    this.el = e, this.eVm = t, this._range = null;
  }
  get selection() {
    if (this.el) {
      const e = document.getSelection();
      if (tu(e.anchorNode, this.el, true) && tu(e.focusNode, this.el, true)) return e;
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
    return e !== null ? wh(e, this.el) : null;
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
    const n = document.getSelection(), r = this.el.parentNode;
    if (n.focusNode && tu(n.focusNode, r)) for (t = n.focusNode, e = n.focusOffset; t && t !== r; ) t !== this.el && t.previousSibling ? (t = t.previousSibling, e += t.textContent.length) : t = t.parentNode;
    this.savedPos = e;
  }
  restorePosition(e = 0) {
    if (this.savedPos > 0 && this.savedPos < e) {
      const t = window.getSelection(), n = xh(this.el, { count: this.savedPos });
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
        const r = document.queryCommandState(e);
        return t !== void 0 ? r === t : r;
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
      const r = window.open();
      r.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `), r.print(), r.close();
      return;
    } else if (e === "link") {
      const r = this.getParentAttribute("href");
      if (r === null) {
        const l = this.selectWord(this.selection), a = l ? l.toString() : "";
        if (!a.length && (!this.range || !this.range.cloneContents().querySelector("img"))) return;
        this.eVm.editLinkUrl.value = l1.test(a) ? a : "https://", document.execCommand("createLink", false, this.eVm.editLinkUrl.value), this.save(l.getRangeAt(0));
      } else this.eVm.editLinkUrl.value = r, this.range.selectNodeContents(this.parent), this.save();
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
    const r = e.focusNode, l = e.focusOffset;
    return e.collapse(e.anchorNode, e.anchorOffset), e.modify("move", n[0], "character"), e.modify("move", n[1], "word"), e.extend(r, l), e.modify("extend", n[1], "character"), e.modify("extend", n[0], "word"), e;
  }
}, a1 = he({ name: "QTooltip", inheritAttrs: false, props: { ...Am, ...Pr, ...Hl, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null }, transitionShow: { ...Hl.transitionShow, default: "jump-down" }, transitionHide: { ...Hl.transitionHide, default: "jump-up" }, anchor: { type: String, default: "bottom middle", validator: Vo }, self: { type: String, default: "top middle", validator: Vo }, offset: { type: Array, default: () => [14, 14], validator: Hm }, scrollTarget: er, delay: { type: Number, default: 0 }, hideDelay: { type: Number, default: 0 }, persistent: Boolean }, emits: [...$r], setup(e, { slots: t, emit: n, attrs: r }) {
  let l, a;
  const o = xe(), { proxy: { $q: i } } = o, u = W(null), c = W(false), s = v(() => Do(e.anchor, i.lang.rtl)), f = v(() => Do(e.self, i.lang.rtl)), h = v(() => e.persistent !== true), { registerTick: m, removeTick: g } = wr(), { registerTimeout: _ } = Zn(), { transitionProps: w, transitionStyle: T } = vi(e), { localScrollTarget: y, changeScrollEvent: p, unconfigureScrollTarget: b } = $m(e, ye), { anchorEl: C, canShow: P, anchorEvents: F } = As({ showing: c, configureAnchorEl: le }), { show: j, hide: $ } = Lr({ showing: c, canShow: P, handleShow: A, handleHide: k, hideOnRouteChange: h, processOnMount: true });
  Object.assign(F, { delayShow: Y, delayHide: X });
  const { showPortal: L, hidePortal: H, renderPortal: q } = $s(o, u, x, "tooltip");
  if (i.platform.is.mobile === true) {
    const O = { anchorEl: C, innerRef: u, onClickOutside(oe) {
      return $(oe), oe.target.classList.contains("q-dialog__backdrop") && je(oe), true;
    } }, Z = v(() => e.modelValue === null && e.persistent !== true && c.value === true);
    ge(Z, (oe) => {
      (oe === true ? Nm : Oo)(O);
    }), We(() => {
      Oo(O);
    });
  }
  function A(O) {
    L(), m(() => {
      a = new MutationObserver(() => Q()), a.observe(u.value, { attributes: false, childList: true, characterData: true, subtree: true }), Q(), ye();
    }), l === void 0 && (l = ge(() => i.screen.width + "|" + i.screen.height + "|" + e.self + "|" + e.anchor + "|" + i.lang.rtl, Q)), _(() => {
      L(true), n("show", O);
    }, e.transitionDuration);
  }
  function k(O) {
    g(), H(), U(), _(() => {
      H(true), n("hide", O);
    }, e.transitionDuration);
  }
  function U() {
    a !== void 0 && (a.disconnect(), a = void 0), l !== void 0 && (l(), l = void 0), b(), Yt(F, "tooltipTemp");
  }
  function Q() {
    Ls({ targetEl: u.value, offset: e.offset, anchorEl: C.value, anchorOrigin: s.value, selfOrigin: f.value, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function Y(O) {
    if (i.platform.is.mobile === true) {
      Rn(), document.body.classList.add("non-selectable");
      const Z = C.value, oe = ["touchmove", "touchcancel", "touchend", "click"].map((B) => [Z, B, "delayHide", "passiveCapture"]);
      Tt(F, "tooltipTemp", oe);
    }
    _(() => {
      j(O);
    }, e.delay);
  }
  function X(O) {
    i.platform.is.mobile === true && (Yt(F, "tooltipTemp"), Rn(), setTimeout(() => {
      document.body.classList.remove("non-selectable");
    }, 10)), _(() => {
      $(O);
    }, e.hideDelay);
  }
  function le() {
    if (e.noParentEvent === true || C.value === null) return;
    const O = i.platform.is.mobile === true ? [[C.value, "touchstart", "delayShow", "passive"]] : [[C.value, "mouseenter", "delayShow", "passive"], [C.value, "mouseleave", "delayHide", "passive"]];
    Tt(F, "anchor", O);
  }
  function ye() {
    if (C.value !== null || e.scrollTarget !== void 0) {
      y.value = In(C.value, e.scrollTarget);
      const O = e.noParentEvent === true ? Q : $;
      p(y.value, O);
    }
  }
  function R() {
    return c.value === true ? d("div", { ...r, ref: u, class: ["q-tooltip q-tooltip--style q-position-engine no-pointer-events", r.class], style: [r.style, T.value], role: "tooltip" }, $e(t.default)) : null;
  }
  function x() {
    return d(Ot, w.value, R);
  }
  return We(U), Object.assign(o.proxy, { updatePosition: Q }), q;
} }), qr = he({ name: "QItem", props: { ...nt, ...$a, tag: { type: String, default: "div" }, active: { type: Boolean, default: null }, clickable: Boolean, dense: Boolean, insetLevel: Number, tabindex: [String, Number], focused: Boolean, manualFocus: Boolean }, emits: ["click", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = lt(e, r), { hasLink: a, linkAttrs: o, linkClass: i, linkTag: u, navigateOnClick: c } = di(), s = W(null), f = W(null), h = v(() => e.clickable === true || a.value === true || e.tag === "label"), m = v(() => e.disable !== true && h.value === true), g = v(() => "q-item q-item-type row no-wrap" + (e.dense === true ? " q-item--dense" : "") + (l.value === true ? " q-item--dark" : "") + (a.value === true && e.active === null ? i.value : e.active === true ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === true ? " disabled" : "") + (m.value === true ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === true ? " q-manual-focusable--focused" : "") : "")), _ = v(() => e.insetLevel === void 0 ? null : { ["padding" + (r.lang.rtl === true ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px" });
  function w(p) {
    m.value === true && (f.value !== null && p.qAvoidFocus !== true && (p.qKeyEvent !== true && document.activeElement === s.value ? f.value.focus() : document.activeElement === f.value && s.value.focus()), c(p));
  }
  function T(p) {
    if (m.value === true && yn(p, [13, 32]) === true) {
      je(p), p.qKeyEvent = true;
      const b = new MouseEvent("click", p);
      b.qKeyEvent = true, s.value.dispatchEvent(b);
    }
    n("keyup", p);
  }
  function y() {
    const p = Pa(t.default, []);
    return m.value === true && p.unshift(d("div", { class: "q-focus-helper", tabindex: -1, ref: f })), p;
  }
  return () => {
    const p = { ref: s, class: g.value, style: _.value, role: "listitem", onClick: w, onKeyup: T };
    return m.value === true ? (p.tabindex = e.tabindex || "0", Object.assign(p, o.value)) : h.value === true && (p["aria-disabled"] = "true"), d(u.value, p, y());
  };
} }), hn = he({ name: "QItemSection", props: { avatar: Boolean, thumbnail: Boolean, side: Boolean, top: Boolean, noWrap: Boolean }, setup(e, { slots: t }) {
  const n = v(() => `q-item__section column q-item__section--${e.avatar === true || e.side === true || e.thumbnail === true ? "side" : "main"}` + (e.top === true ? " q-item__section--top justify-start" : " justify-center") + (e.avatar === true ? " q-item__section--avatar" : "") + (e.thumbnail === true ? " q-item__section--thumbnail" : "") + (e.noWrap === true ? " q-item__section--nowrap" : ""));
  return () => d("div", { class: n.value }, $e(t.default));
} });
function Sh(e, t, n) {
  t.handler ? t.handler(e, n, n.caret) : n.runCmd(t.cmd, t.param);
}
function Ks(e) {
  return d("div", { class: "q-editor__toolbar-group" }, e);
}
function Ch(e, t, n, r = false) {
  const l = r || (t.type === "toggle" ? t.toggled ? t.toggled(e) : t.cmd && e.caret.is(t.cmd, t.param) : false), a = [];
  if (t.tip && e.$q.platform.is.desktop) {
    const o = t.key ? d("div", [d("small", `(CTRL + ${String.fromCharCode(t.key)})`)]) : null;
    a.push(d(a1, { delay: 1e3 }, () => [d("div", { innerHTML: t.tip }), o]));
  }
  return d(Je, { ...e.buttonProps.value, icon: t.icon !== null ? t.icon : void 0, color: l ? t.toggleColor || e.props.toolbarToggleColor : t.color || e.props.toolbarColor, textColor: l && !e.props.toolbarPush ? null : t.textColor || e.props.toolbarTextColor, label: t.label, disable: t.disable ? typeof t.disable == "function" ? t.disable(e) : true : false, size: "sm", onClick(o) {
    n == null ? void 0 : n(), Sh(o, t, e);
  } }, () => a);
}
function o1(e, t) {
  const n = t.list === "only-icons";
  let r = t.label, l = t.icon !== null ? t.icon : void 0, a, o;
  function i() {
    c.component.proxy.hide();
  }
  if (n) o = t.options.map((s) => {
    const f = s.type === void 0 ? e.caret.is(s.cmd, s.param) : false;
    return f && (r = s.tip, l = s.icon !== null ? s.icon : void 0), Ch(e, s, i, f);
  }), a = e.toolbarBackgroundClass.value, o = [Ks(o)];
  else {
    const s = e.props.toolbarToggleColor !== void 0 ? `text-${e.props.toolbarToggleColor}` : null, f = e.props.toolbarTextColor !== void 0 ? `text-${e.props.toolbarTextColor}` : null, h = t.list === "no-icons";
    o = t.options.map((m) => {
      const g = m.disable ? m.disable(e) : false, _ = m.type === void 0 ? e.caret.is(m.cmd, m.param) : false;
      _ && (r = m.tip, l = m.icon !== null ? m.icon : void 0);
      const w = m.htmlTip;
      return d(qr, { active: _, activeClass: s, clickable: true, disable: g, dense: true, onClick(T) {
        var _a3;
        i(), (T == null ? void 0 : T.qAvoidFocus) !== true && ((_a3 = e.contentRef.value) == null ? void 0 : _a3.focus()), e.caret.restore(), Sh(T, m, e);
      } }, () => [h === true ? null : d(hn, { class: _ ? s : f, side: true }, () => d(et, { name: m.icon !== null ? m.icon : void 0 })), d(hn, w ? () => d("div", { class: "text-no-wrap", innerHTML: m.htmlTip }) : m.tip ? () => d("div", { class: "text-no-wrap" }, m.tip) : void 0)]);
    }), a = [e.toolbarBackgroundClass.value, f];
  }
  const u = t.highlight && r !== t.label, c = d(_y, { ...e.buttonProps.value, noCaps: true, noWrap: true, color: u ? e.props.toolbarToggleColor : e.props.toolbarColor, textColor: u && !e.props.toolbarPush ? null : e.props.toolbarTextColor, label: t.fixedLabel ? t.label : r, icon: t.fixedIcon ? t.icon !== null ? t.icon : void 0 : l, contentClass: a, onShow: (s) => e.emit("dropdownShow", s), onHide: (s) => e.emit("dropdownHide", s), onBeforeShow: (s) => e.emit("dropdownBeforeShow", s), onBeforeHide: (s) => e.emit("dropdownBeforeHide", s) }, () => o);
  return c;
}
function i1(e) {
  if (e.caret) return e.buttons.value.filter((t) => !e.isViewingSource.value || t.find((n) => n.cmd === "viewsource")).map((t) => Ks(t.map((n) => e.isViewingSource.value && n.cmd !== "viewsource" ? false : n.type === "slot" ? $e(e.slots[n.slot]) : n.type === "dropdown" ? o1(e, n) : Ch(e, n))));
}
function u1(e, t, n, r = {}) {
  const l = Object.keys(r);
  if (l.length === 0) return {};
  const a = { default_font: { cmd: "fontName", param: e, icon: n, tip: t } };
  return l.forEach((o) => {
    const i = r[o];
    a[o] = { cmd: "fontName", param: i, icon: n, tip: i, htmlTip: `<font face="${i}">${i}</font>` };
  }), a;
}
function s1(e) {
  if (e.caret) {
    const t = e.props.toolbarColor || e.props.toolbarTextColor;
    let n = e.editLinkUrl.value;
    const r = () => {
      e.caret.restore(), n !== e.editLinkUrl.value && document.execCommand("createLink", false, n === "" ? " " : n), e.editLinkUrl.value = null;
    };
    return [d("div", { class: `q-mx-xs text-${t}` }, `${e.$q.lang.editor.url}: `), d("input", { key: "qedt_btm_input", class: "col q-editor__link-input", value: n, onInput: (l) => {
      wt(l), n = l.target.value;
    }, onKeydown: (l) => {
      if (Zl(l) !== true) switch (l.keyCode) {
        case 13:
          return Dt(l), r();
        case 27:
          Dt(l), e.caret.restore(), (!e.editLinkUrl.value || e.editLinkUrl.value === "https://") && document.execCommand("unlink"), e.editLinkUrl.value = null;
          break;
      }
    } }), Ks([d(Je, { key: "qedt_btm_rem", tabindex: -1, ...e.buttonProps.value, label: e.$q.lang.label.remove, noCaps: true, onClick: () => {
      e.caret.restore(), document.execCommand("unlink"), e.editLinkUrl.value = null;
    } }), d(Je, { key: "qedt_btm_upd", ...e.buttonProps.value, label: e.$q.lang.label.update, noCaps: true, onClick: r })])];
  }
}
var Pd = /^on[A-Z]/;
function kh() {
  const { attrs: e, vnode: t } = xe(), n = { listeners: W({}), attributes: W({}) };
  function r() {
    const l = {}, a = {};
    for (const o in e) o !== "class" && o !== "style" && Pd.test(o) === false && (l[o] = e[o]);
    for (const o in t.props) Pd.test(o) === true && (a[o] = t.props[o]);
    n.attributes.value = l, n.listeners.value = a;
  }
  return Rr(r), r(), n;
}
var c1 = Object.prototype.toString, nu = Object.prototype.hasOwnProperty, d1 = new Set(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp"].map((e) => "[object " + e + "]"));
function $d(e) {
  if (e !== Object(e) || d1.has(c1.call(e)) === true || e.constructor && nu.call(e, "constructor") === false && nu.call(e.constructor.prototype, "isPrototypeOf") === false) return false;
  let t;
  for (t in e) ;
  return t === void 0 || nu.call(e, t);
}
function Th() {
  let e, t, n, r, l, a, o = arguments[0] || {}, i = 1, u = false;
  const c = arguments.length;
  for (typeof o == "boolean" && (u = o, o = arguments[1] || {}, i = 2), Object(o) !== o && typeof o != "function" && (o = {}), c === i && (o = this, i--); i < c; i++) if ((e = arguments[i]) !== null) for (t in e) n = o[t], r = e[t], o !== r && (u === true && r && ((l = Array.isArray(r)) || $d(r) === true) ? (l === true ? a = Array.isArray(n) === true ? n : [] : a = $d(n) === true ? n : {}, o[t] = Th(u, a, r)) : r !== void 0 && (o[t] = r));
  return o;
}
he({ name: "QEditor", props: { ...nt, ...zs, modelValue: { type: String, required: true }, readonly: Boolean, disable: Boolean, minHeight: { type: String, default: "10rem" }, maxHeight: String, height: String, definitions: Object, fonts: Object, placeholder: String, toolbar: { type: Array, validator: (e) => e.length === 0 || e.every((t) => t.length), default: () => [["left", "center", "right", "justify"], ["bold", "italic", "underline", "strike"], ["undo", "redo"]] }, toolbarColor: String, toolbarBg: String, toolbarTextColor: String, toolbarToggleColor: { type: String, default: "primary" }, toolbarOutline: Boolean, toolbarPush: Boolean, toolbarRounded: Boolean, paragraphTag: { type: String, validator: (e) => ["div", "p"].includes(e), default: "div" }, contentStyle: Object, contentClass: [Object, Array, String], square: Boolean, flat: Boolean, dense: Boolean }, emits: [...Ns, "update:modelValue", "keydown", "click", "focus", "blur", "dropdownShow", "dropdownHide", "dropdownBeforeShow", "dropdownBeforeHide", "linkShow", "linkHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = lt(e, l), { inFullscreen: o, toggleFullscreen: i } = Hs(), u = kh(), c = W(null), s = W(null), f = W(null), h = W(false), m = v(() => !e.readonly && !e.disable);
  let g, _, w = e.modelValue;
  document.execCommand("defaultParagraphSeparator", false, e.paragraphTag), g = window.getComputedStyle(document.body).fontFamily;
  const T = v(() => e.toolbarBg ? ` bg-${e.toolbarBg}` : ""), y = v(() => ({ type: "a", flat: e.toolbarOutline !== true && e.toolbarPush !== true, noWrap: true, outline: e.toolbarOutline, push: e.toolbarPush, rounded: e.toolbarRounded, dense: true, color: e.toolbarColor, disable: !m.value, size: "sm" })), p = v(() => {
    const B = l.lang.editor, M = l.iconSet.editor;
    return { bold: { cmd: "bold", icon: M.bold, tip: B.bold, key: 66 }, italic: { cmd: "italic", icon: M.italic, tip: B.italic, key: 73 }, strike: { cmd: "strikeThrough", icon: M.strikethrough, tip: B.strikethrough, key: 83 }, underline: { cmd: "underline", icon: M.underline, tip: B.underline, key: 85 }, unordered: { cmd: "insertUnorderedList", icon: M.unorderedList, tip: B.unorderedList }, ordered: { cmd: "insertOrderedList", icon: M.orderedList, tip: B.orderedList }, subscript: { cmd: "subscript", icon: M.subscript, tip: B.subscript, htmlTip: "x<subscript>2</subscript>" }, superscript: { cmd: "superscript", icon: M.superscript, tip: B.superscript, htmlTip: "x<superscript>2</superscript>" }, link: { cmd: "link", disable: (ee) => ee.caret && !ee.caret.can("link"), icon: M.hyperlink, tip: B.hyperlink, key: 76 }, fullscreen: { cmd: "fullscreen", icon: M.toggleFullscreen, tip: B.toggleFullscreen, key: 70 }, viewsource: { cmd: "viewsource", icon: M.viewSource, tip: B.viewSource }, quote: { cmd: "formatBlock", param: "BLOCKQUOTE", icon: M.quote, tip: B.quote, key: 81 }, left: { cmd: "justifyLeft", icon: M.left, tip: B.left }, center: { cmd: "justifyCenter", icon: M.center, tip: B.center }, right: { cmd: "justifyRight", icon: M.right, tip: B.right }, justify: { cmd: "justifyFull", icon: M.justify, tip: B.justify }, print: { type: "no-state", cmd: "print", icon: M.print, tip: B.print, key: 80 }, outdent: { type: "no-state", disable: (ee) => ee.caret && !ee.caret.can("outdent"), cmd: "outdent", icon: M.outdent, tip: B.outdent }, indent: { type: "no-state", disable: (ee) => ee.caret && !ee.caret.can("indent"), cmd: "indent", icon: M.indent, tip: B.indent }, removeFormat: { type: "no-state", cmd: "removeFormat", icon: M.removeFormat, tip: B.removeFormat }, hr: { type: "no-state", cmd: "insertHorizontalRule", icon: M.hr, tip: B.hr }, undo: { type: "no-state", cmd: "undo", icon: M.undo, tip: B.undo, key: 90 }, redo: { type: "no-state", cmd: "redo", icon: M.redo, tip: B.redo, key: 89 }, h1: { cmd: "formatBlock", param: "H1", icon: M.heading1 || M.heading, tip: B.heading1, htmlTip: `<h1 class="q-ma-none">${B.heading1}</h1>` }, h2: { cmd: "formatBlock", param: "H2", icon: M.heading2 || M.heading, tip: B.heading2, htmlTip: `<h2 class="q-ma-none">${B.heading2}</h2>` }, h3: { cmd: "formatBlock", param: "H3", icon: M.heading3 || M.heading, tip: B.heading3, htmlTip: `<h3 class="q-ma-none">${B.heading3}</h3>` }, h4: { cmd: "formatBlock", param: "H4", icon: M.heading4 || M.heading, tip: B.heading4, htmlTip: `<h4 class="q-ma-none">${B.heading4}</h4>` }, h5: { cmd: "formatBlock", param: "H5", icon: M.heading5 || M.heading, tip: B.heading5, htmlTip: `<h5 class="q-ma-none">${B.heading5}</h5>` }, h6: { cmd: "formatBlock", param: "H6", icon: M.heading6 || M.heading, tip: B.heading6, htmlTip: `<h6 class="q-ma-none">${B.heading6}</h6>` }, p: { cmd: "formatBlock", param: e.paragraphTag, icon: M.heading, tip: B.paragraph }, code: { cmd: "formatBlock", param: "PRE", icon: M.code, htmlTip: `<code>${B.code}</code>` }, "size-1": { cmd: "fontSize", param: "1", icon: M.size1 || M.size, tip: B.size1, htmlTip: `<font size="1">${B.size1}</font>` }, "size-2": { cmd: "fontSize", param: "2", icon: M.size2 || M.size, tip: B.size2, htmlTip: `<font size="2">${B.size2}</font>` }, "size-3": { cmd: "fontSize", param: "3", icon: M.size3 || M.size, tip: B.size3, htmlTip: `<font size="3">${B.size3}</font>` }, "size-4": { cmd: "fontSize", param: "4", icon: M.size4 || M.size, tip: B.size4, htmlTip: `<font size="4">${B.size4}</font>` }, "size-5": { cmd: "fontSize", param: "5", icon: M.size5 || M.size, tip: B.size5, htmlTip: `<font size="5">${B.size5}</font>` }, "size-6": { cmd: "fontSize", param: "6", icon: M.size6 || M.size, tip: B.size6, htmlTip: `<font size="6">${B.size6}</font>` }, "size-7": { cmd: "fontSize", param: "7", icon: M.size7 || M.size, tip: B.size7, htmlTip: `<font size="7">${B.size7}</font>` } };
  }), b = v(() => {
    const B = e.definitions || {}, M = e.definitions || e.fonts ? Th(true, {}, p.value, B, u1(g, l.lang.editor.defaultFont, l.iconSet.editor.font, e.fonts)) : p.value;
    return e.toolbar.map((ee) => ee.map((V) => {
      if (V.options) return { type: "dropdown", icon: V.icon, label: V.label, size: "sm", dense: true, fixedLabel: V.fixedLabel, fixedIcon: V.fixedIcon, highlight: V.highlight, list: V.list, options: V.options.map((pe) => M[pe]) };
      const ne = M[V];
      return ne ? ne.type === "no-state" || B[V] && (ne.cmd === void 0 || p.value[ne.cmd] && p.value[ne.cmd].type === "no-state") ? ne : Object.assign({ type: "toggle" }, ne) : { type: "slot", slot: V };
    }));
  }), C = { $q: l, props: e, slots: t, emit: n, inFullscreen: o, toggleFullscreen: i, runCmd: x, isViewingSource: h, editLinkUrl: f, toolbarBackgroundClass: T, buttonProps: y, contentRef: s, buttons: b, setContent: R };
  ge(() => e.modelValue, (B) => {
    w !== B && (w = B, R(B, true));
  }), ge(f, (B) => {
    n(`link${B ? "Show" : "Hide"}`);
  });
  const P = v(() => e.toolbar && e.toolbar.length !== 0), F = v(() => {
    const B = {}, M = (ee) => {
      ee.key && (B[ee.key] = { cmd: ee.cmd, param: ee.param });
    };
    return b.value.forEach((ee) => {
      ee.forEach((V) => {
        V.options ? V.options.forEach(M) : M(V);
      });
    }), B;
  }), j = v(() => o.value ? e.contentStyle : [{ minHeight: e.minHeight, height: e.height, maxHeight: e.maxHeight }, e.contentStyle]), $ = v(() => `q-editor q-editor--${h.value === true ? "source" : "default"}` + (e.disable === true ? " disabled" : "") + (o.value === true ? " fullscreen column" : "") + (e.square === true ? " q-editor--square no-border-radius" : "") + (e.flat === true ? " q-editor--flat" : "") + (e.dense === true ? " q-editor--dense" : "") + (a.value === true ? " q-editor--dark q-dark" : "")), L = v(() => [e.contentClass, "q-editor__content", { col: o.value, "overflow-auto": o.value || e.maxHeight }]), H = v(() => e.disable === true ? { "aria-disabled": "true" } : {});
  function q() {
    if (s.value !== null) {
      const B = `inner${h.value === true ? "Text" : "HTML"}`, M = s.value[B];
      M !== e.modelValue && (w = M, n("update:modelValue", M));
    }
  }
  function A(B) {
    if (n("keydown", B), B.ctrlKey !== true || Zl(B) === true) {
      O();
      return;
    }
    const M = B.keyCode, ee = F.value[M];
    if (ee !== void 0) {
      const { cmd: V, param: ne } = ee;
      je(B), x(V, ne, false);
    }
  }
  function k(B) {
    O(), n("click", B);
  }
  function U(B) {
    if (s.value !== null) {
      const { scrollTop: M, scrollHeight: ee } = s.value;
      _ = ee - M;
    }
    C.caret.save(), n("blur", B);
  }
  function Q(B) {
    Qe(() => {
      s.value !== null && _ !== void 0 && (s.value.scrollTop = s.value.scrollHeight - _);
    }), n("focus", B);
  }
  function Y(B) {
    const M = c.value;
    if (M !== null && M.contains(B.target) === true && (B.relatedTarget === null || M.contains(B.relatedTarget) !== true)) {
      const ee = `inner${h.value === true ? "Text" : "HTML"}`;
      C.caret.restorePosition(s.value[ee].length), O();
    }
  }
  function X(B) {
    const M = c.value;
    M !== null && M.contains(B.target) === true && (B.relatedTarget === null || M.contains(B.relatedTarget) !== true) && (C.caret.savePosition(), O());
  }
  function le() {
    _ = void 0;
  }
  function ye(B) {
    C.caret.save();
  }
  function R(B, M) {
    if (s.value !== null) {
      M === true && C.caret.savePosition();
      const ee = `inner${h.value === true ? "Text" : "HTML"}`;
      s.value[ee] = B, M === true && (C.caret.restorePosition(s.value[ee].length), O());
    }
  }
  function x(B, M, ee = true) {
    Z(), C.caret.restore(), C.caret.apply(B, M, () => {
      Z(), C.caret.save(), ee && O();
    });
  }
  function O() {
    setTimeout(() => {
      f.value = null, r.$forceUpdate();
    }, 1);
  }
  function Z() {
    Br(() => {
      var _a3;
      (_a3 = s.value) == null ? void 0 : _a3.focus({ preventScroll: true });
    });
  }
  function oe() {
    return s.value;
  }
  return ct(() => {
    C.caret = r.caret = new r1(s.value, C), R(e.modelValue), O(), document.addEventListener("selectionchange", ye);
  }), We(() => {
    document.removeEventListener("selectionchange", ye);
  }), Object.assign(r, { runCmd: x, refreshToolbar: O, focus: Z, getContentEl: oe }), () => {
    let B;
    if (P.value) {
      const M = [d("div", { key: "qedt_top", class: "q-editor__toolbar row no-wrap scroll-x" + T.value }, i1(C))];
      f.value !== null && M.push(d("div", { key: "qedt_btm", class: "q-editor__toolbar row no-wrap items-center scroll-x" + T.value }, s1(C))), B = d("div", { key: "toolbar_ctainer", class: "q-editor__toolbars-container" }, M);
    }
    return d("div", { ref: c, class: $.value, style: { height: o.value === true ? "100%" : null }, ...H.value, onFocusin: Y, onFocusout: X }, [B, d("div", { ref: s, style: j.value, class: L.value, contenteditable: m.value, placeholder: e.placeholder, ...u.listeners.value, onInput: q, onKeydown: A, onClick: k, onBlur: U, onFocus: Q, onMousedown: le, onTouchstartPassive: le })]);
  };
} });
var Wu = he({ name: "QItemLabel", props: { overline: Boolean, caption: Boolean, header: Boolean, lines: [Number, String] }, setup(e, { slots: t }) {
  const n = v(() => parseInt(e.lines, 10)), r = v(() => "q-item__label" + (e.overline === true ? " q-item__label--overline text-overline" : "") + (e.caption === true ? " q-item__label--caption text-caption" : "") + (e.header === true ? " q-item__label--header" : "") + (n.value === 1 ? " ellipsis" : "")), l = v(() => e.lines !== void 0 && n.value > 1 ? { overflow: "hidden", display: "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": n.value } : null);
  return () => d("div", { style: l.value, class: r.value }, $e(t.default));
} }), Ws = he({ name: "QSlideTransition", props: { appear: Boolean, duration: { type: Number, default: 300 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: n }) {
  let r = false, l, a, o = null, i = null, u, c;
  function s() {
    l == null ? void 0 : l(), l = null, r = false, o !== null && (clearTimeout(o), o = null), i !== null && (clearTimeout(i), i = null), a == null ? void 0 : a.removeEventListener("transitionend", u), u = null;
  }
  function f(_, w, T) {
    w !== void 0 && (_.style.height = `${w}px`), _.style.transition = `height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`, r = true, l = T;
  }
  function h(_, w) {
    _.style.overflowY = null, _.style.height = null, _.style.transition = null, s(), w !== c && n(w);
  }
  function m(_, w) {
    let T = 0;
    a = _, r === true ? (s(), T = _.offsetHeight === _.scrollHeight ? 0 : void 0) : (c = "hide", _.style.overflowY = "hidden"), f(_, T, w), o = setTimeout(() => {
      o = null, _.style.height = `${_.scrollHeight}px`, u = (y) => {
        i = null, (Object(y) !== y || y.target === _) && h(_, "show");
      }, _.addEventListener("transitionend", u), i = setTimeout(u, e.duration * 1.1);
    }, 100);
  }
  function g(_, w) {
    let T;
    a = _, r === true ? s() : (c = "show", _.style.overflowY = "hidden", T = _.scrollHeight), f(_, T, w), o = setTimeout(() => {
      o = null, _.style.height = 0, u = (y) => {
        i = null, (Object(y) !== y || y.target === _) && h(_, "hide");
      }, _.addEventListener("transitionend", u), i = setTimeout(u, e.duration * 1.1);
    }, 100);
  }
  return We(() => {
    r === true && s();
  }), () => d(Ot, { css: false, appear: e.appear, onEnter: m, onLeave: g }, t.default);
} }), f1 = { true: "inset", item: "item-inset", "item-thumbnail": "item-thumbnail-inset" }, lu = { xs: 2, sm: 4, md: 8, lg: 16, xl: 24 }, Yl = he({ name: "QSeparator", props: { ...nt, spaced: [Boolean, String], inset: [Boolean, String], vertical: Boolean, color: String, size: String }, setup(e) {
  const t = xe(), n = lt(e, t.proxy.$q), r = v(() => e.vertical === true ? "vertical" : "horizontal"), l = v(() => ` q-separator--${r.value}`), a = v(() => e.inset !== false ? `${l.value}-${f1[e.inset]}` : ""), o = v(() => `q-separator${l.value}${a.value}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (n.value === true ? " q-separator--dark" : "")), i = v(() => {
    const u = {};
    if (e.size !== void 0 && (u[e.vertical === true ? "width" : "height"] = e.size), e.spaced !== false) {
      const c = e.spaced === true ? `${lu.md}px` : e.spaced in lu ? `${lu[e.spaced]}px` : e.spaced, s = e.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
      u[`margin${s[0]}`] = u[`margin${s[1]}`] = c;
    }
    return u;
  });
  return () => d("hr", { class: o.value, style: i.value, "aria-orientation": r.value });
} }), Pl = vs({}), v1 = Object.keys($a);
he({ name: "QExpansionItem", props: { ...$a, ...Pr, ...nt, icon: String, label: String, labelLines: [Number, String], caption: String, captionLines: [Number, String], dense: Boolean, toggleAriaLabel: String, expandIcon: String, expandedIcon: String, expandIconClass: [Array, String, Object], duration: {}, headerInsetLevel: Number, contentInsetLevel: Number, expandSeparator: Boolean, defaultOpened: Boolean, hideExpandIcon: Boolean, expandIconToggle: Boolean, switchToggleSide: Boolean, denseToggle: Boolean, group: String, popup: Boolean, headerStyle: [Array, String, Object], headerClass: [Array, String, Object] }, emits: [...$r, "click", "afterShow", "afterHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = lt(e, r), a = W(e.modelValue !== null ? e.modelValue : e.defaultOpened), o = W(null), i = gi(), { show: u, hide: c, toggle: s } = Lr({ showing: a });
  let f, h;
  const m = v(() => `q-expansion-item q-item-type q-expansion-item--${a.value === true ? "expanded" : "collapsed"} q-expansion-item--${e.popup === true ? "popup" : "standard"}`), g = v(() => e.contentInsetLevel === void 0 ? null : { ["padding" + (r.lang.rtl === true ? "Right" : "Left")]: e.contentInsetLevel * 56 + "px" }), _ = v(() => e.disable !== true && (e.href !== void 0 || e.to !== void 0 && e.to !== null && e.to !== "")), w = v(() => {
    const Y = {};
    return v1.forEach((X) => {
      Y[X] = e[X];
    }), Y;
  }), T = v(() => _.value === true || e.expandIconToggle !== true), y = v(() => e.expandedIcon !== void 0 && a.value === true ? e.expandedIcon : e.expandIcon || r.iconSet.expansionItem[e.denseToggle === true ? "denseIcon" : "icon"]), p = v(() => e.disable !== true && (_.value === true || e.expandIconToggle === true)), b = v(() => ({ expanded: a.value === true, detailsId: i.value, toggle: s, show: u, hide: c })), C = v(() => {
    const Y = e.toggleAriaLabel !== void 0 ? e.toggleAriaLabel : r.lang.label[a.value === true ? "collapse" : "expand"](e.label);
    return { role: "button", "aria-expanded": a.value === true ? "true" : "false", "aria-controls": i.value, "aria-label": Y };
  });
  ge(() => e.group, (Y) => {
    h == null ? void 0 : h(), Y !== void 0 && H();
  });
  function P(Y) {
    _.value !== true && s(Y), n("click", Y);
  }
  function F(Y) {
    Y.keyCode === 13 && j(Y, true);
  }
  function j(Y, X) {
    var _a3;
    X !== true && Y.qAvoidFocus !== true && ((_a3 = o.value) == null ? void 0 : _a3.focus()), s(Y), je(Y);
  }
  function $() {
    n("afterShow");
  }
  function L() {
    n("afterHide");
  }
  function H() {
    f === void 0 && (f = Ca()), a.value === true && (Pl[e.group] = f);
    const Y = ge(a, (le) => {
      le === true ? Pl[e.group] = f : Pl[e.group] === f && delete Pl[e.group];
    }), X = ge(() => Pl[e.group], (le, ye) => {
      ye === f && le !== void 0 && le !== f && c();
    });
    h = () => {
      Y(), X(), Pl[e.group] === f && delete Pl[e.group], h = void 0;
    };
  }
  function q() {
    const Y = { class: [`q-focusable relative-position cursor-pointer${e.denseToggle === true && e.switchToggleSide === true ? " items-end" : ""}`, e.expandIconClass], side: e.switchToggleSide !== true, avatar: e.switchToggleSide }, X = [d(et, { class: "q-expansion-item__toggle-icon" + (e.expandedIcon === void 0 && a.value === true ? " q-expansion-item__toggle-icon--rotated" : ""), name: y.value })];
    return p.value === true && (Object.assign(Y, { tabindex: 0, ...C.value, onClick: j, onKeyup: F }), X.unshift(d("div", { ref: o, class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded", tabindex: -1 }))), d(hn, Y, () => X);
  }
  function A() {
    let Y;
    return t.header !== void 0 ? Y = [].concat(t.header(b.value)) : (Y = [d(hn, () => [d(Wu, { lines: e.labelLines }, () => e.label || ""), e.caption ? d(Wu, { lines: e.captionLines, caption: true }, () => e.caption) : null])], e.icon && Y[e.switchToggleSide === true ? "push" : "unshift"](d(hn, { side: e.switchToggleSide === true, avatar: e.switchToggleSide !== true }, () => d(et, { name: e.icon })))), e.disable !== true && e.hideExpandIcon !== true && Y[e.switchToggleSide === true ? "unshift" : "push"](q()), Y;
  }
  function k() {
    const Y = { ref: "item", style: e.headerStyle, class: e.headerClass, dark: l.value, disable: e.disable, dense: e.dense, insetLevel: e.headerInsetLevel };
    return T.value === true && (Y.clickable = true, Y.onClick = P, Object.assign(Y, _.value === true ? w.value : C.value)), d(qr, Y, A);
  }
  function U() {
    return cn(d("div", { key: "e-content", class: "q-expansion-item__content relative-position", style: g.value, id: i.value }, $e(t.default)), [[Zv, a.value]]);
  }
  function Q() {
    const Y = [k(), d(Ws, { duration: e.duration, onShow: $, onHide: L }, U)];
    return e.expandSeparator === true && Y.push(d(Yl, { class: "q-expansion-item__border q-expansion-item__border--top absolute-top", dark: l.value }), d(Yl, { class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom", dark: l.value })), Y;
  }
  return e.group !== void 0 && H(), We(() => {
    h == null ? void 0 : h();
  }), () => d("div", { class: m.value }, [d("div", { class: "q-expansion-item__container relative-position" }, Q())]);
} });
var m1 = ["top", "right", "bottom", "left"], Yu = { type: { type: String, default: "a" }, outline: Boolean, push: Boolean, flat: Boolean, unelevated: Boolean, color: String, textColor: String, glossy: Boolean, square: Boolean, padding: String, label: { type: [String, Number], default: "" }, labelPosition: { type: String, default: "right", validator: (e) => m1.includes(e) }, externalLabel: Boolean, hideLabel: { type: Boolean }, labelClass: [Array, String, Object], labelStyle: [Array, String, Object], disable: Boolean, tabindex: [Number, String] };
function qh(e, t) {
  return { formClass: v(() => `q-fab--form-${e.square === true ? "square" : "rounded"}`), stacked: v(() => e.externalLabel === false && ["top", "bottom"].includes(e.labelPosition)), labelProps: v(() => {
    if (e.externalLabel === true) {
      const n = e.hideLabel === null ? t.value === false : e.hideLabel;
      return { action: "push", data: { class: [e.labelClass, `q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}` + (n === true ? " q-fab__label--external-hidden" : "")], style: e.labelStyle } };
    }
    return { action: ["left", "top"].includes(e.labelPosition) ? "unshift" : "push", data: { class: [e.labelClass, `q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}` + (e.hideLabel === true ? " q-fab__label--internal-hidden" : "")], style: e.labelStyle } };
  }) };
}
var h1 = ["up", "right", "down", "left"], g1 = ["left", "center", "right"];
he({ name: "QFab", props: { ...Yu, ...Pr, icon: String, activeIcon: String, hideIcon: Boolean, hideLabel: { ...Yu.hideLabel, default: null }, direction: { type: String, default: "right", validator: (e) => h1.includes(e) }, persistent: Boolean, verticalActionsAlign: { type: String, default: "center", validator: (e) => g1.includes(e) } }, emits: $r, setup(e, { slots: t }) {
  const n = W(null), r = W(e.modelValue === true), l = gi(), { proxy: { $q: a } } = xe(), { formClass: o, labelProps: i } = qh(e, r), u = v(() => e.persistent !== true), { hide: c, toggle: s } = Lr({ showing: r, hideOnRouteChange: u }), f = v(() => ({ opened: r.value })), h = v(() => `q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${o.value}` + (r.value === true ? " q-fab--opened" : " q-fab--closed")), m = v(() => `q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${r.value === true ? "opened" : "closed"}`), g = v(() => {
    const y = { id: l.value, role: "menu" };
    return r.value !== true && (y["aria-hidden"] = "true"), y;
  }), _ = v(() => `q-fab__icon-holder  q-fab__icon-holder--${r.value === true ? "opened" : "closed"}`);
  function w(y, p) {
    const b = t[y], C = `q-fab__${y} absolute-full`;
    return b === void 0 ? d(et, { class: C, name: e[p] || a.iconSet.fab[p] }) : d("div", { class: C }, b(f.value));
  }
  function T() {
    const y = [];
    return e.hideIcon !== true && y.push(d("div", { class: _.value }, [w("icon", "icon"), w("active-icon", "activeIcon")])), (e.label !== "" || t.label !== void 0) && y[i.value.action](d("div", i.value.data, t.label !== void 0 ? t.label(f.value) : [e.label])), qt(t.tooltip, y);
  }
  return gn(mm, { showing: r, onChildClick(y) {
    var _a3;
    c(y), (y == null ? void 0 : y.qAvoidFocus) !== true && ((_a3 = n.value) == null ? void 0 : _a3.$el.focus());
  } }), () => d("div", { class: h.value }, [d(Je, { ref: n, class: o.value, ...e, noWrap: true, stack: e.stacked, align: void 0, icon: void 0, label: void 0, noCaps: true, fab: true, "aria-expanded": r.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": l.value, onClick: s }, T), d("div", { class: m.value, ...g.value }, $e(t.default))]);
} });
var Mh = { start: "self-end", center: "self-center", end: "self-start" }, b1 = Object.keys(Mh);
he({ name: "QFabAction", props: { ...Yu, icon: { type: String, default: "" }, anchor: { type: String, validator: (e) => b1.includes(e) }, to: [String, Object], replace: Boolean }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const r = Mt(mm, () => ({ showing: { value: true }, onChildClick: xt })), { formClass: l, labelProps: a } = qh(e, r.showing), o = v(() => {
    const f = Mh[e.anchor];
    return l.value + (f !== void 0 ? ` ${f}` : "");
  }), i = v(() => e.disable === true || r.showing.value !== true);
  function u(f) {
    r.onChildClick(f), n("click", f);
  }
  function c() {
    const f = [];
    return t.icon !== void 0 ? f.push(t.icon()) : e.icon !== "" && f.push(d(et, { name: e.icon })), (e.label !== "" || t.label !== void 0) && f[a.value.action](d("div", a.value.data, t.label !== void 0 ? t.label() : [e.label])), qt(t.default, f);
  }
  const s = xe();
  return Object.assign(s.proxy, { click: u }), () => d(Je, { class: o.value, ...e, noWrap: true, stack: e.stacked, icon: void 0, label: void 0, noCaps: true, fabMini: true, disable: i.value, onClick: u }, c);
} });
function p1({ validate: e, resetValidation: t, requiresQForm: n }) {
  const r = Mt(hm, false);
  if (r !== false) {
    const { props: l, proxy: a } = xe();
    Object.assign(a, { validate: e, resetValidation: t }), ge(() => l.disable, (o) => {
      o === true ? (typeof t == "function" && t(), r.unbindComponent(a)) : r.bindComponent(a);
    }), ct(() => {
      l.disable !== true && r.bindComponent(a);
    }), We(() => {
      l.disable !== true && r.unbindComponent(a);
    });
  } else n === true && console.error("Parent QForm not found on useFormChild()!");
}
var y1 = [true, false, "ondemand"], _1 = { modelValue: {}, error: { type: Boolean, default: null }, errorMessage: String, noErrorIcon: Boolean, rules: Array, reactiveRules: Boolean, lazyRules: { type: [Boolean, String], default: false, validator: (e) => y1.includes(e) } };
function w1(e, t) {
  const { props: n, proxy: r } = xe(), l = W(false), a = W(null), o = W(false);
  p1({ validate: _, resetValidation: g });
  let i = 0, u;
  const c = v(() => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0), s = v(() => n.disable !== true && c.value === true && t.value === false), f = v(() => n.error === true || l.value === true), h = v(() => typeof n.errorMessage == "string" && n.errorMessage.length !== 0 ? n.errorMessage : a.value);
  ge(() => n.modelValue, () => {
    o.value = true, s.value === true && n.lazyRules === false && w();
  });
  function m() {
    n.lazyRules !== "ondemand" && s.value === true && o.value === true && w();
  }
  ge(() => n.reactiveRules, (T) => {
    T === true ? u === void 0 && (u = ge(() => n.rules, m, { immediate: true, deep: true })) : u !== void 0 && (u(), u = void 0);
  }, { immediate: true }), ge(() => n.lazyRules, m), ge(e, (T) => {
    T === true ? o.value = true : s.value === true && n.lazyRules !== "ondemand" && w();
  });
  function g() {
    i++, t.value = false, o.value = false, l.value = false, a.value = null, w.cancel();
  }
  function _(T = n.modelValue) {
    if (n.disable === true || c.value === false) return true;
    const y = ++i, p = t.value !== true ? () => {
      o.value = true;
    } : () => {
    }, b = (P, F) => {
      P === true && p(), l.value = P, a.value = F || null, t.value = false;
    }, C = [];
    for (let P = 0; P < n.rules.length; P++) {
      const F = n.rules[P];
      let j;
      if (typeof F == "function" ? j = F(T, co) : typeof F == "string" && co[F] !== void 0 && (j = co[F](T)), j === false || typeof j == "string") return b(true, j), false;
      j !== true && j !== void 0 && C.push(j);
    }
    return C.length === 0 ? (b(false), true) : (t.value = true, Promise.all(C).then((P) => {
      if (P === void 0 || Array.isArray(P) === false || P.length === 0) return y === i && b(false), true;
      const F = P.find((j) => j === false || typeof j == "string");
      return y === i && b(F !== void 0, F), F === void 0;
    }, (P) => (y === i && (console.error(P), b(true)), false)));
  }
  const w = Ar(_, 0);
  return We(() => {
    u == null ? void 0 : u(), w.cancel();
  }), Object.assign(r, { resetValidation: g, validate: _ }), Vt(r, "hasError", () => f.value), { isDirtyModel: o, hasRules: c, hasError: f, errorMessage: h, validate: _, resetValidation: g };
}
function Xl(e) {
  return e != null && ("" + e).length !== 0;
}
var Eh = { ...nt, ..._1, label: String, stackLabel: Boolean, hint: String, hideHint: Boolean, prefix: String, suffix: String, labelColor: String, color: String, bgColor: String, filled: Boolean, outlined: Boolean, borderless: Boolean, standout: [Boolean, String], square: Boolean, loading: Boolean, labelSlot: Boolean, bottomSlots: Boolean, hideBottomSpace: Boolean, rounded: Boolean, dense: Boolean, itemAligned: Boolean, counter: Boolean, clearable: Boolean, clearIcon: String, disable: Boolean, readonly: Boolean, autofocus: Boolean, for: String }, pi = { ...Eh, maxlength: [Number, String] }, yi = ["update:modelValue", "clear", "focus", "blur"];
function _i({ requiredForAttr: e = true, tagProp: t, changeEvent: n = false } = {}) {
  const { props: r, proxy: l } = xe(), a = lt(r, l.$q), o = gi({ required: e, getValue: () => r.for });
  return { requiredForAttr: e, changeEvent: n, tag: t === true ? v(() => r.tag) : { value: "label" }, isDark: a, editable: v(() => r.disable !== true && r.readonly !== true), innerLoading: W(false), focused: W(false), hasPopupOpen: false, splitAttrs: kh(), targetUid: o, rootRef: W(null), targetRef: W(null), controlRef: W(null) };
}
function wi(e) {
  const { props: t, emit: n, slots: r, attrs: l, proxy: a } = xe(), { $q: o } = a;
  let i = null;
  e.hasValue === void 0 && (e.hasValue = v(() => Xl(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (X) => {
    n("update:modelValue", X);
  }), e.controlEvents === void 0 && (e.controlEvents = { onFocusin: $, onFocusout: L }), Object.assign(e, { clearValue: H, onControlFocusin: $, onControlFocusout: L, focus: F }), e.computedCounter === void 0 && (e.computedCounter = v(() => {
    if (t.counter !== false) {
      const X = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === true ? t.modelValue.length : 0, le = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
      return X + (le !== void 0 ? " / " + le : "");
    }
  }));
  const { isDirtyModel: u, hasRules: c, hasError: s, errorMessage: f, resetValidation: h } = w1(e.focused, e.innerLoading), m = e.floatingLabel !== void 0 ? v(() => t.stackLabel === true || e.focused.value === true || e.floatingLabel.value === true) : v(() => t.stackLabel === true || e.focused.value === true || e.hasValue.value === true), g = v(() => t.bottomSlots === true || t.hint !== void 0 || c.value === true || t.counter === true || t.error !== null), _ = v(() => t.filled === true ? "filled" : t.outlined === true ? "outlined" : t.borderless === true ? "borderless" : t.standout ? "standout" : "standard"), w = v(() => `q-field row no-wrap items-start q-field--${_.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === true ? " q-field--rounded" : "") + (t.square === true ? " q-field--square" : "") + (m.value === true ? " q-field--float" : "") + (y.value === true ? " q-field--labeled" : "") + (t.dense === true ? " q-field--dense" : "") + (t.itemAligned === true ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === true ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === true ? " q-field--focused" : "") + (s.value === true ? " q-field--error" : "") + (s.value === true || e.focused.value === true ? " q-field--highlighted" : "") + (t.hideBottomSpace !== true && g.value === true ? " q-field--with-bottom" : "") + (t.disable === true ? " q-field--disabled" : t.readonly === true ? " q-field--readonly" : "")), T = v(() => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (s.value === true ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === true ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")), y = v(() => t.labelSlot === true || t.label !== void 0), p = v(() => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && s.value !== true ? ` text-${t.labelColor}` : "")), b = v(() => ({ id: e.targetUid.value, editable: e.editable.value, focused: e.focused.value, floatingLabel: m.value, modelValue: t.modelValue, emitValue: e.emitValue })), C = v(() => {
    const X = {};
    return e.targetUid.value && (X.for = e.targetUid.value), t.disable === true && (X["aria-disabled"] = "true"), X;
  });
  function P() {
    var _a3;
    const X = document.activeElement;
    let le = (_a3 = e.targetRef) == null ? void 0 : _a3.value;
    le && (X === null || X.id !== e.targetUid.value) && (le.hasAttribute("tabindex") === true || (le = le.querySelector("[tabindex]")), le !== X && (le == null ? void 0 : le.focus({ preventScroll: true })));
  }
  function F() {
    Br(P);
  }
  function j() {
    ty(P);
    const X = document.activeElement;
    X !== null && e.rootRef.value.contains(X) && X.blur();
  }
  function $(X) {
    i !== null && (clearTimeout(i), i = null), e.editable.value === true && e.focused.value === false && (e.focused.value = true, n("focus", X));
  }
  function L(X, le) {
    i !== null && clearTimeout(i), i = setTimeout(() => {
      i = null, !(document.hasFocus() === true && (e.hasPopupOpen === true || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement) !== false)) && (e.focused.value === true && (e.focused.value = false, n("blur", X)), le == null ? void 0 : le());
    });
  }
  function H(X) {
    var _a3;
    je(X), o.platform.is.mobile !== true ? (((_a3 = e.targetRef) == null ? void 0 : _a3.value) || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === true && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), n("update:modelValue", null), e.changeEvent === true && n("change", null), n("clear", t.modelValue), Qe(() => {
      const le = u.value;
      h(), u.value = le;
    });
  }
  function q(X) {
    [13, 32].includes(X.keyCode) && H(X);
  }
  function A() {
    const X = [];
    return r.prepend !== void 0 && X.push(d("div", { class: "q-field__prepend q-field__marginal row no-wrap items-center", key: "prepend", onClick: Dt }, r.prepend())), X.push(d("div", { class: "q-field__control-container col relative-position row no-wrap q-anchor--skip" }, k())), s.value === true && t.noErrorIcon === false && X.push(Q("error", [d(et, { name: o.iconSet.field.error, color: "negative" })])), t.loading === true || e.innerLoading.value === true ? X.push(Q("inner-loading-append", r.loading !== void 0 ? r.loading() : [d(wn, { color: t.color })])) : t.clearable === true && e.hasValue.value === true && e.editable.value === true && X.push(Q("inner-clearable-append", [d(et, { class: "q-field__focusable-action", name: t.clearIcon || o.iconSet.field.clear, tabindex: 0, role: "button", "aria-hidden": "false", "aria-label": o.lang.label.clear, onKeyup: q, onClick: H })])), r.append !== void 0 && X.push(d("div", { class: "q-field__append q-field__marginal row no-wrap items-center", key: "append", onClick: Dt }, r.append())), e.getInnerAppend !== void 0 && X.push(Q("inner-append", e.getInnerAppend())), e.getControlChild !== void 0 && X.push(e.getControlChild()), X;
  }
  function k() {
    const X = [];
    return t.prefix !== void 0 && t.prefix !== null && X.push(d("div", { class: "q-field__prefix no-pointer-events row items-center" }, t.prefix)), e.getShadowControl !== void 0 && e.hasShadow.value === true && X.push(e.getShadowControl()), e.getControl !== void 0 ? X.push(e.getControl()) : r.rawControl !== void 0 ? X.push(r.rawControl()) : r.control !== void 0 && X.push(d("div", { ref: e.targetRef, class: "q-field__native row", tabindex: -1, ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0 }, r.control(b.value))), y.value === true && X.push(d("div", { class: p.value }, $e(r.label, t.label))), t.suffix !== void 0 && t.suffix !== null && X.push(d("div", { class: "q-field__suffix no-pointer-events row items-center" }, t.suffix)), X.concat($e(r.default));
  }
  function U() {
    let X, le;
    s.value === true ? f.value !== null ? (X = [d("div", { role: "alert" }, f.value)], le = `q--slot-error-${f.value}`) : (X = $e(r.error), le = "q--slot-error") : (t.hideHint !== true || e.focused.value === true) && (t.hint !== void 0 ? (X = [d("div", t.hint)], le = `q--slot-hint-${t.hint}`) : (X = $e(r.hint), le = "q--slot-hint"));
    const ye = t.counter === true || r.counter !== void 0;
    if (t.hideBottomSpace === true && ye === false && X === void 0) return;
    const R = d("div", { key: le, class: "q-field__messages col" }, X);
    return d("div", { class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== true ? "animated" : "stale"), onClick: Dt }, [t.hideBottomSpace === true ? R : d(Ot, { name: "q-transition--field-message" }, () => R), ye === true ? d("div", { class: "q-field__counter" }, r.counter !== void 0 ? r.counter() : e.computedCounter.value) : null]);
  }
  function Q(X, le) {
    return le === null ? null : d("div", { key: X, class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip" }, le);
  }
  let Y = false;
  return Dn(() => {
    Y = true;
  }), kl(() => {
    Y === true && t.autofocus === true && a.focus();
  }), t.autofocus === true && ct(() => {
    a.focus();
  }), We(() => {
    i !== null && clearTimeout(i);
  }), Object.assign(a, { focus: F, blur: j }), function() {
    const le = e.getControl === void 0 && r.control === void 0 ? { ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0, ...C.value } : C.value;
    return d(e.tag.value, { ref: e.rootRef, class: [w.value, l.class], style: l.style, ...le }, [r.before !== void 0 ? d("div", { class: "q-field__before q-field__marginal row no-wrap items-center", onClick: Dt }, r.before()) : null, d("div", { class: "q-field__inner relative-position col self-stretch" }, [d("div", { ref: e.controlRef, class: T.value, tabindex: -1, ...e.controlEvents }, A()), g.value === true ? U() : null]), r.after !== void 0 ? d("div", { class: "q-field__after q-field__marginal row no-wrap items-center", onClick: Dt }, r.after()) : null]);
  };
}
var x1 = he({ name: "QField", inheritAttrs: false, props: { ...pi, tag: { type: String, default: "label" } }, emits: yi, setup() {
  return wi(_i({ tagProp: true }));
} });
function ir(e, t, n, r) {
  const l = [];
  return e.forEach((a) => {
    r(a) === true ? l.push(a) : t.push({ failedPropValidation: n, file: a });
  }), l;
}
function Ga(e) {
  (e == null ? void 0 : e.dataTransfer) && (e.dataTransfer.dropEffect = "copy"), je(e);
}
var Rh = { multiple: Boolean, accept: String, capture: String, maxFileSize: [Number, String], maxTotalSize: [Number, String], maxFiles: [Number, String], filter: Function }, Ah = ["rejected"];
function Ph({ editable: e, dnd: t, getFileInput: n, addFilesToQueue: r }) {
  const { props: l, emit: a, proxy: o } = xe(), i = W(null), u = v(() => l.accept !== void 0 ? l.accept.split(",").map((y) => (y = y.trim(), y === "*" ? "*/" : (y.endsWith("/*") && (y = y.slice(0, y.length - 1)), y.toUpperCase()))) : null), c = v(() => parseInt(l.maxFiles, 10)), s = v(() => parseInt(l.maxTotalSize, 10));
  function f(y) {
    var _a3;
    if (e.value) if (y !== Object(y) && (y = { target: null }), ((_a3 = y.target) == null ? void 0 : _a3.matches('input[type="file"]')) === true) y.clientX === 0 && y.clientY === 0 && wt(y);
    else {
      const p = n();
      p !== y.target && (p == null ? void 0 : p.click(y));
    }
  }
  function h(y) {
    e.value && y && r(null, y);
  }
  function m(y, p, b, C) {
    let P = Array.from(p || y.target.files);
    const F = [], j = () => {
      F.length !== 0 && a("rejected", F);
    };
    if (l.accept !== void 0 && u.value.indexOf("*/") === -1 && (P = ir(P, F, "accept", ($) => u.value.some((L) => $.type.toUpperCase().startsWith(L) || $.name.toUpperCase().endsWith(L))), P.length === 0)) return j();
    if (l.maxFileSize !== void 0) {
      const $ = parseInt(l.maxFileSize, 10);
      if (P = ir(P, F, "max-file-size", (L) => L.size <= $), P.length === 0) return j();
    }
    if (l.multiple !== true && P.length !== 0 && (P = [P[0]]), P.forEach(($) => {
      $.__key = $.webkitRelativePath + $.lastModified + $.name + $.size;
    }), C === true) {
      const $ = b.map((L) => L.__key);
      P = ir(P, F, "duplicate", (L) => $.includes(L.__key) === false);
    }
    if (P.length === 0) return j();
    if (l.maxTotalSize !== void 0) {
      let $ = C === true ? b.reduce((L, H) => L + H.size, 0) : 0;
      if (P = ir(P, F, "max-total-size", (L) => ($ += L.size, $ <= s.value)), P.length === 0) return j();
    }
    if (typeof l.filter == "function") {
      const $ = l.filter(P);
      P = ir(P, F, "filter", (L) => $.includes(L));
    }
    if (l.maxFiles !== void 0) {
      let $ = C === true ? b.length : 0;
      if (P = ir(P, F, "max-files", () => ($++, $ <= c.value)), P.length === 0) return j();
    }
    if (j(), P.length !== 0) return P;
  }
  function g(y) {
    Ga(y), t.value !== true && (t.value = true);
  }
  function _(y) {
    je(y), (y.relatedTarget !== null || Ie.is.safari !== true ? y.relatedTarget !== i.value : document.elementsFromPoint(y.clientX, y.clientY).includes(i.value) === false) === true && (t.value = false);
  }
  function w(y) {
    Ga(y);
    const p = y.dataTransfer.files;
    p.length !== 0 && r(null, p), t.value = false;
  }
  function T(y) {
    if (t.value === true) return d("div", { ref: i, class: `q-${y}__dnd absolute-full`, onDragenter: Ga, onDragover: Ga, onDragleave: _, onDrop: w });
  }
  return Object.assign(o, { pickFiles: f, addFiles: h }), { pickFiles: f, addFiles: h, onDragover: g, onDragleave: _, processFiles: m, getDndNode: T, maxFilesNumber: c, maxTotalSizeNumber: s };
}
function $h(e, t) {
  function n() {
    const r = e.modelValue;
    try {
      const l = "DataTransfer" in window ? new DataTransfer() : "ClipboardEvent" in window ? new ClipboardEvent("").clipboardData : void 0;
      return Object(r) === r && ("length" in r ? Array.from(r) : [r]).forEach((a) => {
        l.items.add(a);
      }), { files: l.files };
    } catch {
      return { files: void 0 };
    }
  }
  return v(t === true ? () => {
    if (e.type === "file") return n();
  } : n);
}
he({ name: "QFile", inheritAttrs: false, props: { ...Eh, ...xn, ...Rh, modelValue: [File, FileList, Array], append: Boolean, useChips: Boolean, displayValue: [String, Number], tabindex: { type: [String, Number], default: 0 }, counterLabel: Function, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...yi, ...Ah], setup(e, { slots: t, emit: n, attrs: r }) {
  const { proxy: l } = xe(), a = _i(), o = W(null), i = W(false), u = Bs(e), { pickFiles: c, onDragover: s, onDragleave: f, processFiles: h, getDndNode: m } = Ph({ editable: a.editable, dnd: i, getFileInput: q, addFilesToQueue: A }), g = $h(e), _ = v(() => Object(e.modelValue) === e.modelValue ? "length" in e.modelValue ? Array.from(e.modelValue) : [e.modelValue] : []), w = v(() => Xl(_.value)), T = v(() => _.value.map((Y) => Y.name).join(", ")), y = v(() => Ou(_.value.reduce((Y, X) => Y + X.size, 0))), p = v(() => ({ totalSize: y.value, filesNumber: _.value.length, maxFiles: e.maxFiles })), b = v(() => ({ tabindex: -1, type: "file", title: "", accept: e.accept, capture: e.capture, name: u.value, ...r, id: a.targetUid.value, disabled: a.editable.value !== true })), C = v(() => "q-file q-field--auto-height" + (i.value === true ? " q-file--dnd" : "")), P = v(() => e.multiple === true && e.append === true);
  function F(Y) {
    const X = _.value.slice();
    X.splice(Y, 1), $(X);
  }
  function j(Y) {
    const X = _.value.indexOf(Y);
    X !== -1 && F(X);
  }
  function $(Y) {
    n("update:modelValue", e.multiple === true ? Y : Y[0]);
  }
  function L(Y) {
    Y.keyCode === 13 && Dt(Y);
  }
  function H(Y) {
    (Y.keyCode === 13 || Y.keyCode === 32) && c(Y);
  }
  function q() {
    return o.value;
  }
  function A(Y, X) {
    const le = h(Y, X, _.value, P.value), ye = q();
    ye != null && (ye.value = ""), le !== void 0 && ((e.multiple === true ? e.modelValue && le.every((R) => _.value.includes(R)) : e.modelValue === le[0]) || $(P.value === true ? _.value.concat(le) : le));
  }
  function k() {
    return [d("input", { class: [e.inputClass, "q-file__filler"], style: e.inputStyle })];
  }
  function U() {
    if (t.file !== void 0) return _.value.length === 0 ? k() : _.value.map((X, le) => t.file({ index: le, file: X, ref: this }));
    if (t.selected !== void 0) return _.value.length === 0 ? k() : t.selected({ files: _.value, ref: this });
    if (e.useChips === true) return _.value.length === 0 ? k() : _.value.map((X, le) => d(Xm, { key: "file-" + le, removable: a.editable.value, dense: true, textColor: e.color, tabindex: e.tabindex, onRemove: () => {
      F(le);
    } }, () => d("span", { class: "ellipsis", textContent: X.name })));
    const Y = e.displayValue !== void 0 ? e.displayValue : T.value;
    return Y.length !== 0 ? [d("div", { class: e.inputClass, style: e.inputStyle, textContent: Y })] : k();
  }
  function Q() {
    const Y = { ref: o, ...b.value, ...g.value, class: "q-field__input fit absolute-full cursor-pointer", onChange: A };
    return e.multiple === true && (Y.multiple = true), d("input", Y);
  }
  return Object.assign(a, { fieldClass: C, emitValue: $, hasValue: w, inputRef: o, innerValue: _, floatingLabel: v(() => w.value === true || Xl(e.displayValue)), computedCounter: v(() => {
    if (e.counterLabel !== void 0) return e.counterLabel(p.value);
    const Y = e.maxFiles;
    return `${_.value.length}${Y !== void 0 ? " / " + Y : ""} (${y.value})`;
  }), getControlChild: () => m("file"), getControl: () => {
    const Y = { ref: a.targetRef, class: "q-field__native row items-center cursor-pointer", tabindex: e.tabindex };
    return a.editable.value === true && Object.assign(Y, { onDragover: s, onDragleave: f, onKeydown: L, onKeyup: H }), d("div", Y, [Q()].concat(U()));
  } }), Object.assign(l, { removeAtIndex: F, removeFile: j, getNativeElement: () => o.value }), Vt(l, "nativeEl", () => o.value), wi(a);
} });
var S1 = he({ name: "QFooter", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = Mt(Jl, ot);
  if (l === ot) return console.error("QFooter needs to be child of QLayout"), ot;
  const a = W(parseInt(e.heightHint, 10)), o = W(true), i = W(rn.value === true || l.isContainer.value === true ? 0 : window.innerHeight), u = v(() => e.reveal === true || l.view.value.indexOf("F") !== -1 || r.platform.is.ios && l.isContainer.value === true), c = v(() => l.isContainer.value === true ? l.containerHeight.value : i.value), s = v(() => {
    if (e.modelValue !== true) return 0;
    if (u.value === true) return o.value === true ? a.value : 0;
    const C = l.scroll.value.position + c.value + a.value - l.height.value;
    return C > 0 ? C : 0;
  }), f = v(() => e.modelValue !== true || u.value === true && o.value !== true), h = v(() => e.modelValue === true && f.value === true && e.reveal === true), m = v(() => "q-footer q-layout__section--marginal " + (u.value === true ? "fixed" : "absolute") + "-bottom" + (e.bordered === true ? " q-footer--bordered" : "") + (f.value === true ? " q-footer--hidden" : "") + (e.modelValue !== true ? " q-layout--prevent-focus" + (u.value !== true ? " hidden" : "") : "")), g = v(() => {
    const C = l.rows.value.bottom, P = {};
    return C[0] === "l" && l.left.space === true && (P[r.lang.rtl === true ? "right" : "left"] = `${l.left.size}px`), C[2] === "r" && l.right.space === true && (P[r.lang.rtl === true ? "left" : "right"] = `${l.right.size}px`), P;
  });
  function _(C, P) {
    l.update("footer", C, P);
  }
  function w(C, P) {
    C.value !== P && (C.value = P);
  }
  function T({ height: C }) {
    w(a, C), _("size", C);
  }
  function y() {
    if (e.reveal !== true) return;
    const { direction: C, position: P, inflectionPoint: F } = l.scroll.value;
    w(o, C === "up" || P - F < 100 || l.height.value - c.value - P - a.value < 300);
  }
  function p(C) {
    h.value === true && w(o, true), n("focusin", C);
  }
  ge(() => e.modelValue, (C) => {
    _("space", C), w(o, true), l.animate();
  }), ge(s, (C) => {
    _("offset", C);
  }), ge(() => e.reveal, (C) => {
    C === false && w(o, e.modelValue);
  }), ge(o, (C) => {
    l.animate(), n("reveal", C);
  }), ge([a, l.scroll, l.height], y), ge(() => r.screen.height, (C) => {
    l.isContainer.value !== true && w(i, C);
  });
  const b = {};
  return l.instances.footer = b, e.modelValue === true && _("size", a.value), _("space", e.modelValue), _("offset", s.value), We(() => {
    l.instances.footer === b && (l.instances.footer = void 0, _("size", 0), _("offset", 0), _("space", false));
  }), () => {
    const C = qt(t.default, [d(Wl, { debounce: 0, onResize: T })]);
    return e.elevated === true && C.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), d("footer", { class: m.value, style: g.value, onFocusin: p }, C);
  };
} });
he({ name: "QForm", props: { autofocus: Boolean, noErrorFocus: Boolean, noResetFocus: Boolean, greedy: Boolean, onSubmit: Function }, emits: ["reset", "validationSuccess", "validationError"], setup(e, { slots: t, emit: n }) {
  const r = xe(), l = W(null);
  let a = 0;
  const o = [];
  function i(m) {
    const g = typeof m == "boolean" ? m : e.noErrorFocus !== true, _ = ++a, w = (p, b) => {
      n(`validation${p === true ? "Success" : "Error"}`, b);
    }, T = (p) => {
      const b = p.validate();
      return typeof b.then == "function" ? b.then((C) => ({ valid: C, comp: p }), (C) => ({ valid: false, comp: p, err: C })) : Promise.resolve({ valid: b, comp: p });
    };
    return (e.greedy === true ? Promise.all(o.map(T)).then((p) => p.filter((b) => b.valid !== true)) : o.reduce((p, b) => p.then(() => T(b).then((C) => {
      if (C.valid === false) return Promise.reject(C);
    })), Promise.resolve()).catch((p) => [p])).then((p) => {
      if (p === void 0 || p.length === 0) return _ === a && w(true), true;
      if (_ === a) {
        const { comp: b, err: C } = p[0];
        if (C !== void 0 && console.error(C), w(false, b), g === true) {
          const P = p.find(({ comp: F }) => typeof F.focus == "function" && pl(F.$) === false);
          P !== void 0 && P.comp.focus();
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
    i().then((_) => {
      g === a && _ === true && (e.onSubmit !== void 0 ? n("submit", m) : (m == null ? void 0 : m.target) !== void 0 && typeof m.target.submit == "function" && m.target.submit());
    });
  }
  function s(m) {
    m !== void 0 && je(m), n("reset"), Qe(() => {
      u(), e.autofocus === true && e.noResetFocus !== true && f();
    });
  }
  function f() {
    Br(() => {
      var _a3;
      if (l.value === null) return;
      (_a3 = l.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || l.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || l.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(l.value.querySelectorAll("[tabindex]"), (g) => g.tabIndex !== -1)) == null ? void 0 : _a3.focus({ preventScroll: true });
    });
  }
  gn(hm, { bindComponent(m) {
    o.push(m);
  }, unbindComponent(m) {
    const g = o.indexOf(m);
    g !== -1 && o.splice(g, 1);
  } });
  let h = false;
  return Dn(() => {
    h = true;
  }), kl(() => {
    h === true && e.autofocus === true && f();
  }), ct(() => {
    e.autofocus === true && f();
  }), Object.assign(r.proxy, { validate: i, resetValidation: u, submit: c, reset: s, focus: f, getValidationComponents: () => o }), () => d("form", { class: "q-form", ref: l, onSubmit: c, onReset: s }, $e(t.default));
} });
var C1 = he({ name: "QHeader", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, revealOffset: { type: Number, default: 250 }, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = Mt(Jl, ot);
  if (l === ot) return console.error("QHeader needs to be child of QLayout"), ot;
  const a = W(parseInt(e.heightHint, 10)), o = W(true), i = v(() => e.reveal === true || l.view.value.indexOf("H") !== -1 || r.platform.is.ios && l.isContainer.value === true), u = v(() => {
    if (e.modelValue !== true) return 0;
    if (i.value === true) return o.value === true ? a.value : 0;
    const y = a.value - l.scroll.value.position;
    return y > 0 ? y : 0;
  }), c = v(() => e.modelValue !== true || i.value === true && o.value !== true), s = v(() => e.modelValue === true && c.value === true && e.reveal === true), f = v(() => "q-header q-layout__section--marginal " + (i.value === true ? "fixed" : "absolute") + "-top" + (e.bordered === true ? " q-header--bordered" : "") + (c.value === true ? " q-header--hidden" : "") + (e.modelValue !== true ? " q-layout--prevent-focus" : "")), h = v(() => {
    const y = l.rows.value.top, p = {};
    return y[0] === "l" && l.left.space === true && (p[r.lang.rtl === true ? "right" : "left"] = `${l.left.size}px`), y[2] === "r" && l.right.space === true && (p[r.lang.rtl === true ? "left" : "right"] = `${l.right.size}px`), p;
  });
  function m(y, p) {
    l.update("header", y, p);
  }
  function g(y, p) {
    y.value !== p && (y.value = p);
  }
  function _({ height: y }) {
    g(a, y), m("size", y);
  }
  function w(y) {
    s.value === true && g(o, true), n("focusin", y);
  }
  ge(() => e.modelValue, (y) => {
    m("space", y), g(o, true), l.animate();
  }), ge(u, (y) => {
    m("offset", y);
  }), ge(() => e.reveal, (y) => {
    y === false && g(o, e.modelValue);
  }), ge(o, (y) => {
    l.animate(), n("reveal", y);
  }), ge(l.scroll, (y) => {
    e.reveal === true && g(o, y.direction === "up" || y.position <= e.revealOffset || y.position - y.inflectionPoint < 100);
  });
  const T = {};
  return l.instances.header = T, e.modelValue === true && m("size", a.value), m("space", e.modelValue), m("offset", u.value), We(() => {
    l.instances.header === T && (l.instances.header = void 0, m("size", 0), m("offset", 0), m("space", false));
  }), () => {
    const y = Pa(t.default, []);
    return e.elevated === true && y.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), y.push(d(Wl, { debounce: 0, onResize: _ })), d("header", { class: f.value, style: h.value, onFocusin: w }, y);
  };
} }), Ys = { ratio: [String, Number] };
function Xs(e, t) {
  return v(() => {
    const n = Number(e.ratio || (t !== void 0 ? t.value : void 0));
    return isNaN(n) !== true && n > 0 ? { paddingBottom: `${100 / n}%` } : null;
  });
}
var k1 = 1.7778;
he({ name: "QImg", props: { ...Ys, src: String, srcset: String, sizes: String, alt: String, crossorigin: String, decoding: String, referrerpolicy: String, draggable: Boolean, loading: { type: String, default: "lazy" }, loadingShowDelay: { type: [Number, String], default: 0 }, fetchpriority: { type: String, default: "auto" }, width: String, height: String, initialRatio: { type: [Number, String], default: k1 }, placeholderSrc: String, errorSrc: String, fit: { type: String, default: "cover" }, position: { type: String, default: "50% 50%" }, imgClass: String, imgStyle: Object, noSpinner: Boolean, noNativeMenu: Boolean, noTransition: Boolean, spinnerColor: String, spinnerSize: String }, emits: ["load", "error"], setup(e, { slots: t, emit: n }) {
  const r = W(e.initialRatio), l = Xs(e, r), a = xe(), { registerTimeout: o, removeTimeout: i } = Zn(), { registerTimeout: u, removeTimeout: c } = Zn(), s = v(() => e.placeholderSrc !== void 0 ? { src: e.placeholderSrc } : null), f = v(() => e.errorSrc !== void 0 ? { src: e.errorSrc, __qerror: true } : null), h = [W(null), W(s.value)], m = W(0), g = W(false), _ = W(false), w = v(() => `q-img q-img--${e.noNativeMenu === true ? "no-" : ""}menu`), T = v(() => ({ width: e.width, height: e.height })), y = v(() => `q-img__image ${e.imgClass !== void 0 ? e.imgClass + " " : ""}q-img__image--with${e.noTransition === true ? "out" : ""}-transition q-img__image--`), p = v(() => ({ ...e.imgStyle, objectFit: e.fit, objectPosition: e.position }));
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
  function P({ target: q }) {
    pl(a) === false && (i(), r.value = q.naturalHeight === 0 ? 0.5 : q.naturalWidth / q.naturalHeight, F(q, 1));
  }
  function F(q, A) {
    A === 1e3 || pl(a) === true || (q.complete === true ? j(q) : o(() => {
      F(q, A + 1);
    }, 50));
  }
  function j(q) {
    pl(a) !== true && (m.value = m.value ^ 1, h[m.value].value = null, C(), q.getAttribute("__qerror") !== "true" && (_.value = false), n("load", q.currentSrc || q.src));
  }
  function $(q) {
    i(), C(), _.value = true, h[m.value].value = f.value, h[m.value ^ 1].value = s.value, n("error", q);
  }
  function L(q) {
    const A = h[q].value, k = { key: "img_" + q, class: y.value, style: p.value, alt: e.alt, crossorigin: e.crossorigin, decoding: e.decoding, referrerpolicy: e.referrerpolicy, height: e.height, width: e.width, loading: e.loading, fetchpriority: e.fetchpriority, "aria-hidden": "true", draggable: e.draggable, ...A };
    return m.value === q ? Object.assign(k, { class: k.class + "current", onLoad: P, onError: $ }) : k.class += "loaded", d("div", { class: "q-img__container absolute-full", key: "img" + q }, d("img", k));
  }
  function H() {
    return g.value === false ? d("div", { key: "content", class: "q-img__content absolute-full q-anchor--skip" }, $e(t[_.value === true ? "error" : "default"])) : d("div", { key: "loading", class: "q-img__loading absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : e.noSpinner === true ? void 0 : [d(wn, { color: e.spinnerColor, size: e.spinnerSize })]);
  }
  {
    let q = function() {
      ge(() => e.src || e.srcset || e.sizes ? { src: e.src, srcset: e.srcset, sizes: e.sizes } : null, (A) => {
        i(), _.value = false, A === null ? (C(), h[m.value ^ 1].value = s.value) : b(), h[m.value].value = A;
      }, { immediate: true });
    };
    rn.value === true ? ct(q) : q();
  }
  return () => {
    const q = [];
    return l.value !== null && q.push(d("div", { key: "filler", style: l.value })), h[0].value !== null && q.push(L(0)), h[1].value !== null && q.push(L(1)), q.push(d(Ot, { name: "q-transition--fade" }, H)), d("div", { key: "main", class: w.value, style: T.value, role: "img", "aria-label": e.alt }, q);
  };
} });
var { passive: $l } = ft;
he({ name: "QInfiniteScroll", props: { offset: { type: Number, default: 500 }, debounce: { type: [String, Number], default: 100 }, scrollTarget: er, initialIndex: { type: Number, default: 0 }, disable: Boolean, reverse: Boolean }, emits: ["load"], setup(e, { slots: t, emit: n }) {
  const r = W(false), l = W(true), a = W(null), o = W(null);
  let i = e.initialIndex, u, c;
  const s = v(() => "q-infinite-scroll__loading" + (r.value === true ? "" : " invisible"));
  function f() {
    if (e.disable === true || r.value === true || l.value === false) return;
    const F = Ha(u), j = yl(u), $ = kr(u);
    e.reverse === false ? Math.round(j + $ + e.offset) >= Math.round(F) && h() : Math.round(j) <= e.offset && h();
  }
  function h() {
    if (e.disable === true || r.value === true || l.value === false) return;
    i++, r.value = true;
    const F = Ha(u);
    n("load", i, (j) => {
      l.value === true && (r.value = false, Qe(() => {
        if (e.reverse === true) {
          const $ = Ha(u), L = yl(u), H = $ - F;
          xr(u, L + H);
        }
        j === true ? _() : a.value && a.value.closest("body") && c();
      }));
    });
  }
  function m() {
    i = 0;
  }
  function g() {
    l.value === false && (l.value = true, u.addEventListener("scroll", c, $l)), f();
  }
  function _() {
    var _a3;
    l.value === true && (l.value = false, r.value = false, u.removeEventListener("scroll", c, $l), (_a3 = c == null ? void 0 : c.cancel) == null ? void 0 : _a3.call(c));
  }
  function w() {
    if (u && l.value === true && u.removeEventListener("scroll", c, $l), u = In(a.value, e.scrollTarget), l.value === true) {
      if (u.addEventListener("scroll", c, $l), e.reverse === true) {
        const F = Ha(u), j = kr(u);
        xr(u, F - j);
      }
      f();
    }
  }
  function T(F) {
    i = F;
  }
  function y(F) {
    F = parseInt(F, 10);
    const j = c;
    c = F <= 0 ? f : Ar(f, isNaN(F) === true ? 100 : F), u && l.value === true && (j !== void 0 && u.removeEventListener("scroll", j, $l), u.addEventListener("scroll", c, $l));
  }
  function p(F) {
    if (b.value === true) {
      if (o.value === null) {
        F !== true && Qe(() => {
          p(true);
        });
        return;
      }
      const j = `${r.value === true ? "un" : ""}pauseAnimations`;
      Array.from(o.value.getElementsByTagName("svg")).forEach(($) => {
        $[j]();
      });
    }
  }
  const b = v(() => e.disable !== true && l.value === true);
  ge([r, b], () => {
    p();
  }), ge(() => e.disable, (F) => {
    F === true ? _() : g();
  }), ge(() => e.reverse, () => {
    r.value === false && l.value === true && f();
  }), ge(() => e.scrollTarget, w), ge(() => e.debounce, y);
  let C = false;
  kl(() => {
    C !== false && u && xr(u, C);
  }), Dn(() => {
    C = u ? yl(u) : false;
  }), We(() => {
    l.value === true && u.removeEventListener("scroll", c, $l);
  }), ct(() => {
    y(e.debounce), w(), r.value === false && p();
  });
  const P = xe();
  return Object.assign(P.proxy, { poll: () => {
    c == null ? void 0 : c();
  }, trigger: h, stop: _, reset: m, resume: g, setIndex: T, updateScrollTarget: w }), () => {
    const F = Pa(t.default, []);
    return b.value === true && F[e.reverse === false ? "push" : "unshift"](d("div", { ref: o, class: s.value }, $e(t.loading))), d("div", { class: "q-infinite-scroll", ref: a }, F);
  };
} });
he({ name: "QInnerLoading", props: { ...nt, ...Hl, showing: Boolean, color: String, size: { type: [String, Number], default: "42px" }, label: String, labelClass: String, labelStyle: [String, Array, Object] }, setup(e, { slots: t }) {
  const n = xe(), r = lt(e, n.proxy.$q), { transitionProps: l, transitionStyle: a } = vi(e), o = v(() => "q-inner-loading q--avoid-card-border absolute-full column flex-center" + (r.value === true ? " q-inner-loading--dark" : "")), i = v(() => "q-inner-loading__label" + (e.labelClass !== void 0 ? ` ${e.labelClass}` : ""));
  function u() {
    const s = [d(wn, { size: e.size, color: e.color })];
    return e.label !== void 0 && s.push(d("div", { class: i.value, style: e.labelStyle }, [e.label])), s;
  }
  function c() {
    return e.showing === true ? d("div", { class: o.value, style: a.value }, t.default !== void 0 ? t.default() : u()) : null;
  }
  return () => d(Ot, l.value, c);
} });
var Ld = { date: "####/##/##", datetime: "####/##/## ##:##", time: "##:##", fulltime: "##:##:##", phone: "(###) ### - ####", card: "#### #### #### ####" }, Ho = { "#": { pattern: "[\\d]", negate: "[^\\d]" }, S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" }, N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" }, A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleLowerCase() }, X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleLowerCase() } }, Lh = Object.keys(Ho);
Lh.forEach((e) => {
  Ho[e].regex = new RegExp(Ho[e].pattern);
});
var T1 = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + Lh.join("") + "])|(.)", "g"), Bd = /[.*+?^${}()|[\]\\]/g, Bt = "", q1 = { mask: String, reverseFillMask: Boolean, fillMask: [Boolean, String], unmaskedValue: Boolean };
function M1(e, t, n, r) {
  let l, a, o, i, u, c;
  const s = W(null), f = W(m());
  function h() {
    return e.autogrow === true || ["textarea", "text", "search", "url", "tel", "password"].includes(e.type);
  }
  ge(() => e.type + e.autogrow, _), ge(() => e.mask, ($) => {
    if ($ !== void 0) w(f.value, true);
    else {
      const L = F(f.value);
      _(), e.modelValue !== L && t("update:modelValue", L);
    }
  }), ge(() => e.fillMask + e.reverseFillMask, () => {
    s.value === true && w(f.value, true);
  }), ge(() => e.unmaskedValue, () => {
    s.value === true && w(f.value);
  });
  function m() {
    if (_(), s.value === true) {
      const $ = C(F(e.modelValue));
      return e.fillMask !== false ? j($) : $;
    }
    return e.modelValue;
  }
  function g($) {
    if ($ < l.length) return l.slice(-$);
    let L = "", H = l;
    const q = H.indexOf(Bt);
    if (q !== -1) {
      for (let A = $ - H.length; A > 0; A--) L += Bt;
      H = H.slice(0, q) + L + H.slice(q);
    }
    return H;
  }
  function _() {
    if (s.value = e.mask !== void 0 && e.mask.length !== 0 && h(), s.value === false) {
      i = void 0, l = "", a = "";
      return;
    }
    const $ = Ld[e.mask] === void 0 ? e.mask : Ld[e.mask], L = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_", H = L.replace(Bd, "\\$&"), q = [], A = [], k = [];
    let U = e.reverseFillMask === true, Q = "", Y = "";
    $.replace(T1, (R, x, O, Z, oe) => {
      if (Z !== void 0) {
        const B = Ho[Z];
        k.push(B), Y = B.negate, U === true && (A.push("(?:" + Y + "+)?(" + B.pattern + "+)?(?:" + Y + "+)?(" + B.pattern + "+)?"), U = false), A.push("(?:" + Y + "+)?(" + B.pattern + ")?");
      } else if (O !== void 0) Q = "\\" + (O === "\\" ? "" : O), k.push(O), q.push("([^" + Q + "]+)?" + Q + "?");
      else {
        const B = x !== void 0 ? x : oe;
        Q = B === "\\" ? "\\\\\\\\" : B.replace(Bd, "\\\\$&"), k.push(B), q.push("([^" + Q + "]+)?" + Q + "?");
      }
    });
    const X = new RegExp("^" + q.join("") + "(" + (Q === "" ? "." : "[^" + Q + "]") + "+)?" + (Q === "" ? "" : "[" + Q + "]*") + "$"), le = A.length - 1, ye = A.map((R, x) => x === 0 && e.reverseFillMask === true ? new RegExp("^" + H + "*" + R) : x === le ? new RegExp("^" + R + "(" + (Y === "" ? "." : Y) + "+)?" + (e.reverseFillMask === true ? "$" : H + "*")) : new RegExp("^" + R));
    o = k, i = (R) => {
      const x = X.exec(e.reverseFillMask === true ? R : R.slice(0, k.length + 1));
      x !== null && (R = x.slice(1).join(""));
      const O = [], Z = ye.length;
      for (let oe = 0, B = R; oe < Z; oe++) {
        const M = ye[oe].exec(B);
        if (M === null) break;
        B = B.slice(M.shift().length), O.push(...M);
      }
      return O.length !== 0 ? O.join("") : R;
    }, l = k.map((R) => typeof R == "string" ? R : Bt).join(""), a = l.split(Bt).join(L);
  }
  function w($, L, H) {
    const q = r.value, A = q.selectionEnd, k = q.value.length - A, U = F($);
    L === true && _();
    const Q = C(U), Y = e.fillMask !== false ? j(Q) : Q, X = f.value !== Y;
    q.value !== Y && (q.value = Y), X === true && (f.value = Y), document.activeElement === q && Qe(() => {
      if (Y === a) {
        const ye = e.reverseFillMask === true ? a.length : 0;
        q.setSelectionRange(ye, ye, "forward");
        return;
      }
      if (H === "insertFromPaste" && e.reverseFillMask !== true) {
        const ye = q.selectionEnd;
        let R = A - 1;
        for (let x = u; x <= R && x < ye; x++) l[x] !== Bt && R++;
        y.right(q, R);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(H) !== -1) {
        const ye = e.reverseFillMask === true ? A === 0 ? Y.length > Q.length ? 1 : 0 : Math.max(0, Y.length - (Y === a ? 0 : Math.min(Q.length, k) + 1)) + 1 : A;
        q.setSelectionRange(ye, ye, "forward");
        return;
      }
      if (e.reverseFillMask === true) if (X === true) {
        const ye = Math.max(0, Y.length - (Y === a ? 0 : Math.min(Q.length, k + 1)));
        ye === 1 && A === 1 ? q.setSelectionRange(ye, ye, "forward") : y.rightReverse(q, ye);
      } else {
        const ye = Y.length - k;
        q.setSelectionRange(ye, ye, "backward");
      }
      else if (X === true) {
        const ye = Math.max(0, l.indexOf(Bt), Math.min(Q.length, A) - 1);
        y.right(q, ye);
      } else {
        const ye = A - 1;
        y.right(q, ye);
      }
    });
    const le = e.unmaskedValue === true ? F(Y) : Y;
    String(e.modelValue) !== le && (e.modelValue !== null || le !== "") && n(le, true);
  }
  function T($, L, H) {
    const q = C(F($.value));
    L = Math.max(0, l.indexOf(Bt), Math.min(q.length, L)), u = L, $.setSelectionRange(L, H, "forward");
  }
  const y = { left($, L) {
    const H = l.slice(L - 1).indexOf(Bt) === -1;
    let q = Math.max(0, L - 1);
    for (; q >= 0; q--) if (l[q] === Bt) {
      L = q, H === true && L++;
      break;
    }
    if (q < 0 && l[L] !== void 0 && l[L] !== Bt) return y.right($, 0);
    L >= 0 && $.setSelectionRange(L, L, "backward");
  }, right($, L) {
    const H = $.value.length;
    let q = Math.min(H, L + 1);
    for (; q <= H; q++) if (l[q] === Bt) {
      L = q;
      break;
    } else l[q - 1] === Bt && (L = q);
    if (q > H && l[L - 1] !== void 0 && l[L - 1] !== Bt) return y.left($, H);
    $.setSelectionRange(L, L, "forward");
  }, leftReverse($, L) {
    const H = g($.value.length);
    let q = Math.max(0, L - 1);
    for (; q >= 0; q--) if (H[q - 1] === Bt) {
      L = q;
      break;
    } else if (H[q] === Bt && (L = q, q === 0)) break;
    if (q < 0 && H[L] !== void 0 && H[L] !== Bt) return y.rightReverse($, 0);
    L >= 0 && $.setSelectionRange(L, L, "backward");
  }, rightReverse($, L) {
    const H = $.value.length, q = g(H), A = q.slice(0, L + 1).indexOf(Bt) === -1;
    let k = Math.min(H, L + 1);
    for (; k <= H; k++) if (q[k - 1] === Bt) {
      L = k, L > 0 && A === true && L--;
      break;
    }
    if (k > H && q[L - 1] !== void 0 && q[L - 1] !== Bt) return y.leftReverse($, H);
    $.setSelectionRange(L, L, "forward");
  } };
  function p($) {
    t("click", $), c = void 0;
  }
  function b($) {
    if (t("keydown", $), Zl($) === true || $.altKey === true) return;
    const L = r.value, H = L.selectionStart, q = L.selectionEnd;
    if ($.shiftKey || (c = void 0), $.keyCode === 37 || $.keyCode === 39) {
      $.shiftKey && c === void 0 && (c = L.selectionDirection === "forward" ? H : q);
      const A = y[($.keyCode === 39 ? "right" : "left") + (e.reverseFillMask === true ? "Reverse" : "")];
      if ($.preventDefault(), A(L, c === H ? q : H), $.shiftKey) {
        const k = L.selectionStart;
        L.setSelectionRange(Math.min(c, k), Math.max(c, k), "forward");
      }
    } else $.keyCode === 8 && e.reverseFillMask !== true && H === q ? (y.left(L, H), L.setSelectionRange(L.selectionStart, q, "backward")) : $.keyCode === 46 && e.reverseFillMask === true && H === q && (y.rightReverse(L, q), L.setSelectionRange(H, L.selectionEnd, "forward"));
  }
  function C($) {
    if ($ == null || $ === "") return "";
    if (e.reverseFillMask === true) return P($);
    const L = o;
    let H = 0, q = "";
    for (let A = 0; A < L.length; A++) {
      const k = $[H], U = L[A];
      if (typeof U == "string") q += U, k === U && H++;
      else if (k !== void 0 && U.regex.test(k)) q += U.transform !== void 0 ? U.transform(k) : k, H++;
      else return q;
    }
    return q;
  }
  function P($) {
    const L = o, H = l.indexOf(Bt);
    let q = $.length - 1, A = "";
    for (let k = L.length - 1; k >= 0 && q !== -1; k--) {
      const U = L[k];
      let Q = $[q];
      if (typeof U == "string") A = U + A, Q === U && q--;
      else if (Q !== void 0 && U.regex.test(Q)) do
        A = (U.transform !== void 0 ? U.transform(Q) : Q) + A, q--, Q = $[q];
      while (H === k && Q !== void 0 && U.regex.test(Q));
      else return A;
    }
    return A;
  }
  function F($) {
    return typeof $ != "string" || i === void 0 ? typeof $ == "number" ? i("" + $) : $ : i($);
  }
  function j($) {
    return a.length - $.length <= 0 ? $ : e.reverseFillMask === true && $.length !== 0 ? a.slice(0, -$.length) + $ : $ + a.slice($.length);
  }
  return { innerValue: f, hasMask: s, moveCursorForPaste: T, updateMaskValue: w, onMaskedKeydown: b, onMaskedClick: p };
}
var E1 = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/, R1 = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u, A1 = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/, P1 = /[a-z0-9_ -]$/i;
function Bh(e) {
  return function(n) {
    if (n.type === "compositionend" || n.type === "change") {
      if (n.target.qComposing !== true) return;
      n.target.qComposing = false, e(n);
    } else n.type === "compositionupdate" && n.target.qComposing !== true && typeof n.data == "string" && (Ie.is.firefox === true ? P1.test(n.data) === false : E1.test(n.data) === true || R1.test(n.data) === true || A1.test(n.data) === true) === true && (n.target.qComposing = true);
  };
}
var Fh = he({ name: "QInput", inheritAttrs: false, props: { ...pi, ...q1, ...xn, modelValue: [String, Number, FileList], shadowText: String, type: { type: String, default: "text" }, debounce: [String, Number], autogrow: Boolean, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...yi, "paste", "change", "keydown", "click", "animationend"], setup(e, { emit: t, attrs: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = {};
  let o = NaN, i, u, c = null, s;
  const f = W(null), h = Bs(e), { innerValue: m, hasMask: g, moveCursorForPaste: _, updateMaskValue: w, onMaskedKeydown: T, onMaskedClick: y } = M1(e, t, Q, f), p = $h(e, true), b = v(() => Xl(m.value)), C = Bh(k), P = _i({ changeEvent: true }), F = v(() => e.type === "textarea" || e.autogrow === true), j = v(() => F.value === true || ["text", "search", "url", "tel", "password"].includes(e.type)), $ = v(() => {
    const x = { ...P.splitAttrs.listeners.value, onInput: k, onPaste: A, onChange: X, onBlur: le, onFocus: wt };
    return x.onCompositionstart = x.onCompositionupdate = x.onCompositionend = C, g.value === true && (x.onKeydown = T, x.onClick = y), e.autogrow === true && (x.onAnimationend = U), x;
  }), L = v(() => {
    const x = { tabindex: 0, "data-autofocus": e.autofocus === true || void 0, rows: e.type === "textarea" ? 6 : void 0, "aria-label": e.label, name: h.value, ...P.splitAttrs.attributes.value, id: P.targetUid.value, maxlength: e.maxlength, disabled: e.disable === true, readonly: e.readonly === true };
    return F.value === false && (x.type = e.type), e.autogrow === true && (x.rows = 1), x;
  });
  ge(() => e.type, () => {
    f.value && (f.value.value = e.modelValue);
  }), ge(() => e.modelValue, (x) => {
    if (g.value === true) {
      if (u === true && (u = false, String(x) === o)) return;
      w(x);
    } else m.value !== x && (m.value = x, e.type === "number" && a.hasOwnProperty("value") === true && (i === true ? i = false : delete a.value));
    e.autogrow === true && Qe(Y);
  }), ge(() => e.autogrow, (x) => {
    x === true ? Qe(Y) : f.value !== null && n.rows > 0 && (f.value.style.height = "auto");
  }), ge(() => e.dense, () => {
    e.autogrow === true && Qe(Y);
  });
  function H() {
    Br(() => {
      const x = document.activeElement;
      f.value !== null && f.value !== x && (x === null || x.id !== P.targetUid.value) && f.value.focus({ preventScroll: true });
    });
  }
  function q() {
    var _a3;
    (_a3 = f.value) == null ? void 0 : _a3.select();
  }
  function A(x) {
    if (g.value === true && e.reverseFillMask !== true) {
      const O = x.target;
      _(O, O.selectionStart, O.selectionEnd);
    }
    t("paste", x);
  }
  function k(x) {
    if (!x || !x.target) return;
    if (e.type === "file") {
      t("update:modelValue", x.target.files);
      return;
    }
    const O = x.target.value;
    if (x.target.qComposing === true) {
      a.value = O;
      return;
    }
    if (g.value === true) w(O, false, x.inputType);
    else if (Q(O), j.value === true && x.target === document.activeElement) {
      const { selectionStart: Z, selectionEnd: oe } = x.target;
      Z !== void 0 && oe !== void 0 && Qe(() => {
        x.target === document.activeElement && O.indexOf(x.target.value) === 0 && x.target.setSelectionRange(Z, oe);
      });
    }
    e.autogrow === true && Y();
  }
  function U(x) {
    t("animationend", x), Y();
  }
  function Q(x, O) {
    s = () => {
      c = null, e.type !== "number" && a.hasOwnProperty("value") === true && delete a.value, e.modelValue !== x && o !== x && (o = x, O === true && (u = true), t("update:modelValue", x), Qe(() => {
        o === x && (o = NaN);
      })), s = void 0;
    }, e.type === "number" && (i = true, a.value = x), e.debounce !== void 0 ? (c !== null && clearTimeout(c), a.value = x, c = setTimeout(s, e.debounce)) : s();
  }
  function Y() {
    requestAnimationFrame(() => {
      const x = f.value;
      if (x !== null) {
        const O = x.parentNode.style, { scrollTop: Z } = x, { overflowY: oe, maxHeight: B } = l.platform.is.firefox === true ? {} : window.getComputedStyle(x), M = oe !== void 0 && oe !== "scroll";
        M === true && (x.style.overflowY = "hidden"), O.marginBottom = x.scrollHeight - 1 + "px", x.style.height = "1px", x.style.height = x.scrollHeight + "px", M === true && (x.style.overflowY = parseInt(B, 10) < x.scrollHeight ? "auto" : "hidden"), O.marginBottom = "", x.scrollTop = Z;
      }
    });
  }
  function X(x) {
    C(x), c !== null && (clearTimeout(c), c = null), s == null ? void 0 : s(), t("change", x.target.value);
  }
  function le(x) {
    x !== void 0 && wt(x), c !== null && (clearTimeout(c), c = null), s == null ? void 0 : s(), i = false, u = false, delete a.value, e.type !== "file" && setTimeout(() => {
      f.value !== null && (f.value.value = m.value !== void 0 ? m.value : "");
    });
  }
  function ye() {
    return a.hasOwnProperty("value") === true ? a.value : m.value !== void 0 ? m.value : "";
  }
  We(() => {
    le();
  }), ct(() => {
    e.autogrow === true && Y();
  }), Object.assign(P, { innerValue: m, fieldClass: v(() => `q-${F.value === true ? "textarea" : "input"}` + (e.autogrow === true ? " q-textarea--autogrow" : "")), hasShadow: v(() => e.type !== "file" && typeof e.shadowText == "string" && e.shadowText.length !== 0), inputRef: f, emitValue: Q, hasValue: b, floatingLabel: v(() => b.value === true && (e.type !== "number" || isNaN(m.value) === false) || Xl(e.displayValue)), getControl: () => d(F.value === true ? "textarea" : "input", { ref: f, class: ["q-field__native q-placeholder", e.inputClass], style: e.inputStyle, ...L.value, ...$.value, ...e.type !== "file" ? { value: ye() } : p.value }), getShadowControl: () => d("div", { class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (F.value === true ? "" : " text-no-wrap") }, [d("span", { class: "invisible" }, ye()), d("span", e.shadowText)]) });
  const R = wi(P);
  return Object.assign(r, { focus: H, select: q, getNativeElement: () => f.value }), Vt(r, "nativeEl", () => f.value), R;
} }), Fd = { threshold: 0, root: null, rootMargin: "0px" };
function Od(e, t, n) {
  var _a3;
  let r, l, a;
  typeof n == "function" ? (r = n, l = Fd, a = t.cfg === void 0) : (r = n.handler, l = Object.assign({}, Fd, n.cfg), a = t.cfg === void 0 || qn(t.cfg, l) === false), t.handler !== r && (t.handler = r), a === true && (t.cfg = l, (_a3 = t.observer) == null ? void 0 : _a3.unobserve(e), t.observer = new IntersectionObserver(([o]) => {
    if (typeof t.handler == "function") {
      if (o.rootBounds === null && document.body.contains(e) === true) {
        t.observer.unobserve(e), t.observer.observe(e);
        return;
      }
      (t.handler(o, t.observer) === false || t.once === true && o.isIntersecting === true) && Oh(e);
    }
  }, l), t.observer.observe(e));
}
function Oh(e) {
  var _a3;
  const t = e.__qvisible;
  t !== void 0 && ((_a3 = t.observer) == null ? void 0 : _a3.unobserve(e), delete e.__qvisible);
}
var $1 = $n({ name: "intersection", mounted(e, { modifiers: t, value: n }) {
  const r = { once: t.once === true };
  Od(e, r, n), e.__qvisible = r;
}, updated(e, t) {
  const n = e.__qvisible;
  n !== void 0 && Od(e, n, t.value);
}, beforeUnmount: Oh });
he({ name: "QIntersection", props: { tag: { type: String, default: "div" }, once: Boolean, transition: String, transitionDuration: { type: [String, Number], default: 300 }, ssrPrerender: Boolean, margin: String, threshold: [Number, Array], root: { default: null }, disable: Boolean, onVisibility: Function }, setup(e, { slots: t, emit: n }) {
  const r = W(rn.value === true ? e.ssrPrerender : false), l = v(() => e.root !== void 0 || e.margin !== void 0 || e.threshold !== void 0 ? { handler: u, cfg: { root: e.root, rootMargin: e.margin, threshold: e.threshold } } : u), a = v(() => e.disable !== true && (rn.value !== true || e.once !== true || e.ssrPrerender !== true)), o = v(() => [[$1, l.value, void 0, { once: e.once }]]), i = v(() => `--q-transition-duration: ${e.transitionDuration}ms`);
  function u(s) {
    r.value !== s.isIntersecting && (r.value = s.isIntersecting, e.onVisibility !== void 0 && n("visibility", r.value));
  }
  function c() {
    if (r.value === true) return [d("div", { key: "content", style: i.value }, $e(t.default))];
    if (t.hidden !== void 0) return [d("div", { key: "hidden", style: i.value }, t.hidden())];
  }
  return () => {
    const s = e.transition ? [d(Ot, { name: "q-transition--" + e.transition }, c)] : c();
    return _n(e.tag, { class: "q-intersection" }, s, "main", a.value, () => o.value);
  };
} });
var L1 = ["ul", "ol"], Vh = he({ name: "QList", props: { ...nt, bordered: Boolean, dense: Boolean, separator: Boolean, padding: Boolean, tag: { type: String, default: "div" } }, setup(e, { slots: t }) {
  const n = xe(), r = lt(e, n.proxy.$q), l = v(() => L1.includes(e.tag) ? null : "list"), a = v(() => "q-list" + (e.bordered === true ? " q-list--bordered" : "") + (e.dense === true ? " q-list--dense" : "") + (e.separator === true ? " q-list--separator" : "") + (r.value === true ? " q-list--dark" : "") + (e.padding === true ? " q-list--padding" : ""));
  return () => d(e.tag, { class: a.value, role: l.value }, $e(t.default));
} }), Vd = [34, 37, 40, 33, 39, 38], B1 = Object.keys(js);
he({ name: "QKnob", props: { ...xn, ...js, modelValue: { type: Number, required: true }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, tabindex: { type: [Number, String], default: 0 }, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change", "dragValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = W(e.modelValue), o = W(false), i = v(() => isNaN(e.innerMin) === true || e.innerMin < e.min ? e.min : e.innerMin), u = v(() => isNaN(e.innerMax) === true || e.innerMax > e.max ? e.max : e.innerMax);
  let c;
  function s() {
    a.value = e.modelValue === null ? i.value : dt(e.modelValue, i.value, u.value), H(true);
  }
  ge(() => `${e.modelValue}|${i.value}|${u.value}`, s), s();
  const f = v(() => e.disable === false && e.readonly === false), h = v(() => "q-knob non-selectable" + (f.value === true ? " q-knob--editable" : e.disable === true ? " disabled" : "")), m = v(() => (String(e.step).trim().split(".")[1] || "").length), g = v(() => e.step === 0 ? 1 : e.step), _ = v(() => e.instantFeedback === true || o.value === true), w = l.platform.is.mobile === true ? v(() => f.value === true ? { onClick: F } : {}) : v(() => f.value === true ? { onMousedown: P, onClick: F, onKeydown: j, onKeyup: L } : {}), T = v(() => f.value === true ? { tabindex: e.tabindex } : { [`aria-${e.disable === true ? "disabled" : "readonly"}`]: "true" }), y = v(() => {
    const k = {};
    return B1.forEach((U) => {
      k[U] = e[U];
    }), k;
  });
  function p(k) {
    k.isFinal ? ($(k.evt, true), o.value = false) : (k.isFirst && (C(), o.value = true), $(k.evt));
  }
  const b = v(() => [[bn, p, void 0, { prevent: true, stop: true, mouse: true }]]);
  function C() {
    const { top: k, left: U, width: Q, height: Y } = r.$el.getBoundingClientRect();
    c = { top: k + Y / 2, left: U + Q / 2 };
  }
  function P(k) {
    C(), $(k);
  }
  function F(k) {
    C(), $(k, true);
  }
  function j(k) {
    if (Vd.includes(k.keyCode) === false) return;
    je(k);
    const U = ([34, 33].includes(k.keyCode) ? 10 : 1) * g.value, Q = [34, 37, 40].includes(k.keyCode) ? -U : U;
    a.value = dt(parseFloat((a.value + Q).toFixed(m.value)), i.value, u.value), H();
  }
  function $(k, U) {
    const Q = tn(k), Y = Math.abs(Q.top - c.top), X = Math.sqrt(Y ** 2 + Math.abs(Q.left - c.left) ** 2);
    let le = Math.asin(Y / X) * (180 / Math.PI);
    Q.top < c.top ? le = c.left < Q.left ? 90 - le : 270 + le : le = c.left < Q.left ? le + 90 : 270 - le, l.lang.rtl === true ? le = Ro(-le - e.angle, 0, 360) : e.angle && (le = Ro(le - e.angle, 0, 360)), e.reverse === true && (le = 360 - le);
    let ye = e.min + le / 360 * (e.max - e.min);
    if (g.value !== 0) {
      const R = ye % g.value;
      ye = ye - R + (Math.abs(R) >= g.value / 2 ? (R < 0 ? -1 : 1) * g.value : 0), ye = parseFloat(ye.toFixed(m.value));
    }
    ye = dt(ye, i.value, u.value), n("dragValue", ye), a.value !== ye && (a.value = ye), H(U);
  }
  function L(k) {
    Vd.includes(k.keyCode) && H(true);
  }
  function H(k) {
    e.modelValue !== a.value && n("update:modelValue", a.value), k === true && n("change", a.value);
  }
  const q = Ba(e);
  function A() {
    return d("input", q.value);
  }
  return () => {
    const k = { class: h.value, role: "slider", "aria-valuemin": i.value, "aria-valuemax": u.value, "aria-valuenow": e.modelValue, ...T.value, ...y.value, value: a.value, instantFeedback: _.value, ...w.value }, U = { default: t.default };
    return f.value === true && e.name !== void 0 && (U.internal = A), _n(Jm, k, U, "knob", f.value, () => b.value);
  };
} });
var { passive: Dd } = ft, F1 = ["both", "horizontal", "vertical"], Dh = he({ name: "QScrollObserver", props: { axis: { type: String, validator: (e) => F1.includes(e), default: "vertical" }, debounce: [String, Number], scrollTarget: er }, emits: ["scroll"], setup(e, { emit: t }) {
  const n = { position: { top: 0, left: 0 }, direction: "down", directionChanged: false, delta: { top: 0, left: 0 }, inflectionPoint: { top: 0, left: 0 } };
  let r = null, l, a;
  ge(() => e.scrollTarget, () => {
    u(), i();
  });
  function o() {
    r == null ? void 0 : r();
    const f = Math.max(0, yl(l)), h = mi(l), m = { top: f - n.position.top, left: h - n.position.left };
    if (e.axis === "vertical" && m.top === 0 || e.axis === "horizontal" && m.left === 0) return;
    const g = Math.abs(m.top) >= Math.abs(m.left) ? m.top < 0 ? "up" : "down" : m.left < 0 ? "left" : "right";
    n.position = { top: f, left: h }, n.directionChanged = n.direction !== g, n.delta = m, n.directionChanged === true && (n.direction = g, n.inflectionPoint = n.position), t("scroll", { ...n });
  }
  function i() {
    l = In(a, e.scrollTarget), l.addEventListener("scroll", c, Dd), c(true);
  }
  function u() {
    l !== void 0 && (l.removeEventListener("scroll", c, Dd), l = void 0);
  }
  function c(f) {
    if (f === true || e.debounce === 0 || e.debounce === "0") o();
    else if (r === null) {
      const [h, m] = e.debounce ? [setTimeout(o, e.debounce), clearTimeout] : [requestAnimationFrame(o), cancelAnimationFrame];
      r = () => {
        m(h), r = null;
      };
    }
  }
  const { proxy: s } = xe();
  return ge(() => s.$q.lang.rtl, o), ct(() => {
    a = s.$el.parentNode, i();
  }), We(() => {
    r == null ? void 0 : r(), u();
  }), Object.assign(s, { trigger: c, getPosition: () => n }), xt;
} }), O1 = he({ name: "QLayout", props: { container: Boolean, view: { type: String, default: "hhh lpr fff", validator: (e) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase()) }, onScroll: Function, onScrollHeight: Function, onResize: Function }, setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = W(null), a = W(r.screen.height), o = W(e.container === true ? 0 : r.screen.width), i = W({ position: 0, direction: "down", inflectionPoint: 0 }), u = W(0), c = W(rn.value === true ? 0 : so()), s = v(() => "q-layout q-layout--" + (e.container === true ? "containerized" : "standard")), f = v(() => e.container === false ? { minHeight: r.screen.height + "px" } : null), h = v(() => c.value !== 0 ? { [r.lang.rtl === true ? "left" : "right"]: `${c.value}px` } : null), m = v(() => c.value !== 0 ? { [r.lang.rtl === true ? "right" : "left"]: 0, [r.lang.rtl === true ? "left" : "right"]: `-${c.value}px`, width: `calc(100% + ${c.value}px)` } : null);
  function g(b) {
    if (e.container === true || document.qScrollPrevented !== true) {
      const C = { position: b.position.top, direction: b.direction, directionChanged: b.directionChanged, inflectionPoint: b.inflectionPoint.top, delta: b.delta.top };
      i.value = C, e.onScroll !== void 0 && n("scroll", C);
    }
  }
  function _(b) {
    const { height: C, width: P } = b;
    let F = false;
    a.value !== C && (F = true, a.value = C, e.onScrollHeight !== void 0 && n("scrollHeight", C), T()), o.value !== P && (F = true, o.value = P), F === true && e.onResize !== void 0 && n("resize", b);
  }
  function w({ height: b }) {
    u.value !== b && (u.value = b, T());
  }
  function T() {
    if (e.container === true) {
      const b = a.value > u.value ? so() : 0;
      c.value !== b && (c.value = b);
    }
  }
  let y = null;
  const p = { instances: {}, view: v(() => e.view), isContainer: v(() => e.container), rootRef: l, height: a, containerHeight: u, scrollbarWidth: c, totalWidth: v(() => o.value + c.value), rows: v(() => {
    const b = e.view.toLowerCase().split(" ");
    return { top: b[0].split(""), middle: b[1].split(""), bottom: b[2].split("") };
  }), header: On({ size: 0, offset: 0, space: false }), right: On({ size: 300, offset: 0, space: false }), footer: On({ size: 0, offset: 0, space: false }), left: On({ size: 300, offset: 0, space: false }), scroll: i, animate() {
    y !== null ? clearTimeout(y) : document.body.classList.add("q-body--layout-animate"), y = setTimeout(() => {
      y = null, document.body.classList.remove("q-body--layout-animate");
    }, 155);
  }, update(b, C, P) {
    p[b][C] = P;
  } };
  if (gn(Jl, p), so() > 0) {
    let b = function() {
      F = null, j.classList.remove("hide-scrollbar");
    }, C = function() {
      if (F === null) {
        if (j.scrollHeight > r.screen.height) return;
        j.classList.add("hide-scrollbar");
      } else clearTimeout(F);
      F = setTimeout(b, 300);
    }, P = function($) {
      F !== null && $ === "remove" && (clearTimeout(F), b()), window[`${$}EventListener`]("resize", C);
    }, F = null;
    const j = document.body;
    ge(() => e.container !== true ? "add" : "remove", P), e.container !== true && P("add"), li(() => {
      P("remove");
    });
  }
  return () => {
    const b = qt(t.default, [d(Dh, { onScroll: g }), d(Wl, { onResize: _ })]), C = d("div", { class: s.value, style: f.value, ref: e.container === true ? void 0 : l, tabindex: -1 }, b);
    return e.container === true ? d("div", { class: "q-layout-container overflow-hidden", ref: l }, [d(Wl, { onResize: w }), d("div", { class: "absolute-full", style: h.value }, [d("div", { class: "scroll", style: m.value }, [C])])]) : C;
  };
} }), V1 = ["horizontal", "vertical", "cell", "none"], D1 = he({ name: "QMarkupTable", props: { ...nt, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, wrapCells: Boolean, separator: { type: String, default: "horizontal", validator: (e) => V1.includes(e) } }, setup(e, { slots: t }) {
  const n = xe(), r = lt(e, n.proxy.$q), l = v(() => `q-markup-table q-table__container q-table__card q-table--${e.separator}-separator` + (r.value === true ? " q-table--dark q-table__card--dark q-dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "") + (e.square === true ? " q-table--square" : "") + (e.wrapCells === false ? " q-table--no-wrap" : ""));
  return () => d("div", { class: l.value }, [d("table", { class: "q-table" }, $e(t.default))]);
} });
he({ name: "QNoSsr", props: { tag: { type: String, default: "div" }, placeholder: String }, setup(e, { slots: t }) {
  const { isHydrated: n } = lh();
  return () => {
    if (n.value === true) {
      const a = $e(t.default);
      return a === void 0 ? a : a.length > 1 ? d(e.tag, {}, a) : a[0];
    }
    const r = { class: "q-no-ssr-placeholder" }, l = $e(t.placeholder);
    if (l !== void 0) return l.length > 1 ? d(e.tag, r, l) : l[0];
    if (e.placeholder !== void 0) return d(e.tag, r, e.placeholder);
  };
} });
var I1 = () => d("svg", { key: "svg", class: "q-radio__bg absolute non-selectable", viewBox: "0 0 24 24" }, [d("path", { d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12" }), d("path", { class: "q-radio__check", d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6" })]), z1 = he({ name: "QRadio", props: { ...nt, ...el, ...xn, modelValue: { required: true }, val: { required: true }, label: String, leftLabel: Boolean, checkedIcon: String, uncheckedIcon: String, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), l = lt(e, r.$q), a = tl(e, Qm), o = W(null), { refocusTargetEl: i, refocusTarget: u } = Um(e, o), c = v(() => Ge(e.modelValue) === Ge(e.val)), s = v(() => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (e.disable === true ? " disabled" : "") + (l.value === true ? " q-radio--dark" : "") + (e.dense === true ? " q-radio--dense" : "") + (e.leftLabel === true ? " reverse" : "")), f = v(() => {
    const b = e.color !== void 0 && (e.keepColor === true || c.value === true) ? ` text-${e.color}` : "";
    return `q-radio__inner relative-position q-radio__inner--${c.value === true ? "truthy" : "falsy"}${b}`;
  }), h = v(() => (c.value === true ? e.checkedIcon : e.uncheckedIcon) || null), m = v(() => e.disable === true ? -1 : e.tabindex || 0), g = v(() => {
    const b = { type: "radio" };
    return e.name !== void 0 && Object.assign(b, { ".checked": c.value === true, "^checked": c.value === true ? "checked" : void 0, name: e.name, value: e.val }), b;
  }), _ = ql(g);
  function w(b) {
    b !== void 0 && (je(b), u(b)), e.disable !== true && c.value !== true && n("update:modelValue", e.val, b);
  }
  function T(b) {
    (b.keyCode === 13 || b.keyCode === 32) && je(b);
  }
  function y(b) {
    (b.keyCode === 13 || b.keyCode === 32) && w(b);
  }
  Object.assign(r, { set: w });
  const p = I1();
  return () => {
    const b = h.value !== null ? [d("div", { key: "icon", class: "q-radio__icon-container absolute-full flex flex-center no-wrap" }, [d(et, { class: "q-radio__icon", name: h.value })])] : [p];
    e.disable !== true && _(b, "unshift", " q-radio__native q-ma-none q-pa-none");
    const C = [d("div", { class: f.value, style: a.value, "aria-hidden": "true" }, b)];
    i.value !== null && C.push(i.value);
    const P = e.label !== void 0 ? qt(t.default, [e.label]) : $e(t.default);
    return P !== void 0 && C.push(d("div", { class: "q-radio__label q-anchor--skip" }, P)), d("div", { ref: o, class: s.value, tabindex: m.value, role: "radio", "aria-label": e.label, "aria-checked": c.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: w, onKeydown: T, onKeyup: y }, C);
  };
} }), N1 = he({ name: "QToggle", props: { ...Km, icon: String, iconColor: String }, emits: Wm, setup(e) {
  function t(n, r) {
    const l = v(() => (n.value === true ? e.checkedIcon : r.value === true ? e.indeterminateIcon : e.uncheckedIcon) || e.icon), a = v(() => n.value === true ? e.iconColor : null);
    return () => [d("div", { class: "q-toggle__track" }), d("div", { class: "q-toggle__thumb absolute flex flex-center no-wrap" }, l.value !== void 0 ? [d(et, { name: l.value, color: a.value })] : void 0)];
  }
  return Ym("toggle", t);
} }), Ih = { radio: z1, checkbox: sa, toggle: N1 }, H1 = Object.keys(Ih);
function ru(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (r) => r[n];
}
var j1 = he({ name: "QOptionGroup", props: { ...nt, modelValue: { required: true }, options: { type: Array, validator: (e) => e.every(Lt), default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], name: String, type: { type: String, default: "radio", validator: (e) => H1.includes(e) }, color: String, keepColor: Boolean, dense: Boolean, size: String, leftLabel: Boolean, inline: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { emit: t, slots: n }) {
  const { proxy: { $q: r } } = xe(), l = Array.isArray(e.modelValue);
  e.type === "radio" ? l === true && console.error("q-option-group: model should not be array") : l === false && console.error("q-option-group: model should be array in your case");
  const a = lt(e, r), o = v(() => Ih[e.type]), i = v(() => ru(e.optionValue, "value")), u = v(() => ru(e.optionLabel, "label")), c = v(() => ru(e.optionDisable, "disable")), s = v(() => e.options.map((g) => ({ val: i.value(g), name: g.name === void 0 ? e.name : g.name, disable: e.disable || c.value(g), leftLabel: g.leftLabel === void 0 ? e.leftLabel : g.leftLabel, color: g.color === void 0 ? e.color : g.color, checkedIcon: g.checkedIcon, uncheckedIcon: g.uncheckedIcon, dark: g.dark === void 0 ? a.value : g.dark, size: g.size === void 0 ? e.size : g.size, dense: e.dense, keepColor: g.keepColor === void 0 ? e.keepColor : g.keepColor }))), f = v(() => "q-option-group q-gutter-x-sm" + (e.inline === true ? " q-option-group--inline" : "")), h = v(() => {
    const g = { role: "group" };
    return e.type === "radio" && (g.role = "radiogroup", e.disable === true && (g["aria-disabled"] = "true")), g;
  });
  function m(g) {
    t("update:modelValue", g);
  }
  return () => d("div", { class: f.value, ...h.value }, e.options.map((g, _) => {
    const w = n["label-" + _] !== void 0 ? () => n["label-" + _](g) : n.label !== void 0 ? () => n.label(g) : void 0;
    return d("div", [d(o.value, { label: w === void 0 ? u.value(g) : null, modelValue: e.modelValue, "onUpdate:modelValue": m, ...s.value[_] }, w)]);
  }));
} });
he({ name: "QPage", props: { padding: Boolean, styleFn: Function }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = Mt(Jl, ot);
  if (r === ot) return console.error("QPage needs to be a deep child of QLayout"), ot;
  if (Mt(vm, ot) === ot) return console.error("QPage needs to be child of QPageContainer"), ot;
  const a = v(() => {
    const i = (r.header.space === true ? r.header.size : 0) + (r.footer.space === true ? r.footer.size : 0);
    if (typeof e.styleFn == "function") {
      const u = r.isContainer.value === true ? r.containerHeight.value : n.screen.height;
      return e.styleFn(i, u);
    }
    return { minHeight: r.isContainer.value === true ? r.containerHeight.value - i + "px" : n.screen.height === 0 ? i !== 0 ? `calc(100vh - ${i}px)` : "100vh" : n.screen.height - i + "px" };
  }), o = v(() => `q-page${e.padding === true ? " q-layout-padding" : ""}`);
  return () => d("main", { class: o.value, style: a.value }, $e(t.default));
} });
var U1 = he({ name: "QPageContainer", setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = Mt(Jl, ot);
  if (r === ot) return console.error("QPageContainer needs to be child of QLayout"), ot;
  gn(vm, true);
  const l = v(() => {
    const a = {};
    return r.header.space === true && (a.paddingTop = `${r.header.size}px`), r.right.space === true && (a[`padding${n.lang.rtl === true ? "Left" : "Right"}`] = `${r.right.size}px`), r.footer.space === true && (a.paddingBottom = `${r.footer.size}px`), r.left.space === true && (a[`padding${n.lang.rtl === true ? "Right" : "Left"}`] = `${r.left.size}px`), a;
  });
  return () => d("div", { class: "q-page-container", style: l.value }, $e(t.default));
} }), Xu = { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, validator: (e) => e.length === 2 }, expand: Boolean };
function zh() {
  const { props: e, proxy: { $q: t } } = xe(), n = Mt(Jl, ot);
  if (n === ot) return console.error("QPageSticky needs to be child of QLayout"), ot;
  const r = v(() => {
    const f = e.position;
    return { top: f.indexOf("top") !== -1, right: f.indexOf("right") !== -1, bottom: f.indexOf("bottom") !== -1, left: f.indexOf("left") !== -1, vertical: f === "top" || f === "bottom", horizontal: f === "left" || f === "right" };
  }), l = v(() => n.header.offset), a = v(() => n.right.offset), o = v(() => n.footer.offset), i = v(() => n.left.offset), u = v(() => {
    let f = 0, h = 0;
    const m = r.value, g = t.lang.rtl === true ? -1 : 1;
    m.top === true && l.value !== 0 ? h = `${l.value}px` : m.bottom === true && o.value !== 0 && (h = `${-o.value}px`), m.left === true && i.value !== 0 ? f = `${g * i.value}px` : m.right === true && a.value !== 0 && (f = `${-g * a.value}px`);
    const _ = { transform: `translate(${f}, ${h})` };
    return e.offset && (_.margin = `${e.offset[1]}px ${e.offset[0]}px`), m.vertical === true ? (i.value !== 0 && (_[t.lang.rtl === true ? "right" : "left"] = `${i.value}px`), a.value !== 0 && (_[t.lang.rtl === true ? "left" : "right"] = `${a.value}px`)) : m.horizontal === true && (l.value !== 0 && (_.top = `${l.value}px`), o.value !== 0 && (_.bottom = `${o.value}px`)), _;
  }), c = v(() => `q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand === true ? "expand" : "shrink"}`);
  function s(f) {
    const h = $e(f.default);
    return d("div", { class: c.value, style: u.value }, e.expand === true ? h : [d("div", h)]);
  }
  return { $layout: n, getStickyContent: s };
}
he({ name: "QPageScroller", props: { ...Xu, scrollOffset: { type: Number, default: 1e3 }, reverse: Boolean, duration: { type: Number, default: 300 }, offset: { ...Xu.offset, default: () => [18, 18] } }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), { $layout: l, getStickyContent: a } = zh(), o = W(null);
  let i;
  const u = v(() => l.height.value - (l.isContainer.value === true ? l.containerHeight.value : r.screen.height));
  function c() {
    return e.reverse === true ? u.value - l.scroll.value.position > e.scrollOffset : l.scroll.value.position > e.scrollOffset;
  }
  const s = W(c());
  function f() {
    const w = c();
    s.value !== w && (s.value = w);
  }
  function h() {
    e.reverse === true ? i === void 0 && (i = ge(u, f)) : m();
  }
  ge(l.scroll, f), ge(() => e.reverse, h);
  function m() {
    i !== void 0 && (i(), i = void 0);
  }
  function g(w) {
    const T = In(l.isContainer.value === true ? o.value : l.rootRef.value);
    xr(T, e.reverse === true ? l.height.value : 0, e.duration), n("click", w);
  }
  function _() {
    return s.value === true ? d("div", { ref: o, class: "q-page-scroller", onClick: g }, a(t)) : null;
  }
  return h(), We(m), () => d(Ot, { name: "q-transition--fade" }, _);
} });
he({ name: "QPageSticky", props: Xu, setup(e, { slots: t }) {
  const { getStickyContent: n } = zh();
  return () => n(t);
} });
function Za(e, t) {
  return [true, false].includes(e) ? e : t;
}
he({ name: "QPagination", props: { ...nt, modelValue: { type: Number, required: true }, min: { type: [Number, String], default: 1 }, max: { type: [Number, String], required: true }, maxPages: { type: [Number, String], default: 0, validator: (e) => (typeof e == "string" ? parseInt(e, 10) : e) >= 0 }, inputStyle: [Array, String, Object], inputClass: [Array, String, Object], size: String, disable: Boolean, input: Boolean, iconPrev: String, iconNext: String, iconFirst: String, iconLast: String, toFn: Function, boundaryLinks: { type: Boolean, default: null }, boundaryNumbers: { type: Boolean, default: null }, directionLinks: { type: Boolean, default: null }, ellipses: { type: Boolean, default: null }, ripple: { type: [Boolean, Object], default: null }, round: Boolean, rounded: Boolean, flat: Boolean, outline: Boolean, unelevated: Boolean, push: Boolean, glossy: Boolean, color: { type: String, default: "primary" }, textColor: String, activeDesign: { type: String, default: "", values: (e) => e === "" || Mm.includes(e) }, activeColor: String, activeTextColor: String, gutter: String, padding: { type: String, default: "3px 2px" } }, emits: ["update:modelValue"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), { $q: r } = n, l = lt(e, r), a = v(() => parseInt(e.min, 10)), o = v(() => parseInt(e.max, 10)), i = v(() => parseInt(e.maxPages, 10)), u = v(() => g.value + " / " + o.value), c = v(() => Za(e.boundaryLinks, e.input)), s = v(() => Za(e.boundaryNumbers, !e.input)), f = v(() => Za(e.directionLinks, e.input)), h = v(() => Za(e.ellipses, !e.input)), m = W(null), g = v({ get: () => e.modelValue, set: (A) => {
    if (A = parseInt(A, 10), e.disable || isNaN(A)) return;
    const k = dt(A, a.value, o.value);
    e.modelValue !== k && t("update:modelValue", k);
  } });
  ge(() => `${a.value}|${o.value}`, () => {
    g.value = e.modelValue;
  });
  const _ = v(() => "q-pagination row no-wrap items-center" + (e.disable === true ? " disabled" : "")), w = v(() => e.gutter in $o ? `${$o[e.gutter]}px` : e.gutter || null), T = v(() => w.value !== null ? `--q-pagination-gutter-parent:-${w.value};--q-pagination-gutter-child:${w.value}` : null), y = v(() => {
    const A = [e.iconFirst || r.iconSet.pagination.first, e.iconPrev || r.iconSet.pagination.prev, e.iconNext || r.iconSet.pagination.next, e.iconLast || r.iconSet.pagination.last];
    return r.lang.rtl === true ? A.reverse() : A;
  }), p = v(() => ({ "aria-disabled": e.disable === true ? "true" : "false", role: "navigation" })), b = v(() => Es(e, "flat")), C = v(() => ({ [b.value]: true, round: e.round, rounded: e.rounded, padding: e.padding, color: e.color, textColor: e.textColor, size: e.size, ripple: e.ripple !== null ? e.ripple : true })), P = v(() => {
    const A = { [b.value]: false };
    return e.activeDesign !== "" && (A[e.activeDesign] = true), A;
  }), F = v(() => ({ ...P.value, color: e.activeColor || e.color, textColor: e.activeTextColor || e.textColor })), j = v(() => {
    let A = Math.max(i.value, 1 + (h.value ? 2 : 0) + (s.value ? 2 : 0));
    const k = { pgFrom: a.value, pgTo: o.value, ellipsesStart: false, ellipsesEnd: false, boundaryStart: false, boundaryEnd: false, marginalStyle: { minWidth: `${Math.max(2, String(o.value).length)}em` } };
    return i.value && A < o.value - a.value + 1 && (A = 1 + Math.floor(A / 2) * 2, k.pgFrom = Math.max(a.value, Math.min(o.value - A + 1, e.modelValue - Math.floor(A / 2))), k.pgTo = Math.min(o.value, k.pgFrom + A - 1), s.value && (k.boundaryStart = true, k.pgFrom++), h.value && k.pgFrom > a.value + (s.value ? 1 : 0) && (k.ellipsesStart = true, k.pgFrom++), s.value && (k.boundaryEnd = true, k.pgTo--), h.value && k.pgTo < o.value - (s.value ? 1 : 0) && (k.ellipsesEnd = true, k.pgTo--)), k;
  });
  function $(A) {
    g.value = A;
  }
  function L(A) {
    g.value = g.value + A;
  }
  const H = v(() => {
    function A() {
      g.value = m.value, m.value = null;
    }
    return { "onUpdate:modelValue": (k) => {
      m.value = k;
    }, onKeyup: (k) => {
      yn(k, 13) === true && A();
    }, onBlur: A };
  });
  function q(A, k, U) {
    const Q = { "aria-label": k, "aria-current": "false", ...C.value, ...A };
    return U === true && Object.assign(Q, { "aria-current": "true", ...F.value }), k !== void 0 && (e.toFn !== void 0 ? Q.to = e.toFn(k) : Q.onClick = () => {
      $(k);
    }), d(Je, Q);
  }
  return Object.assign(n, { set: $, setByOffset: L }), () => {
    const A = [], k = [];
    let U;
    if (c.value === true && (A.push(q({ key: "bls", disable: e.disable || e.modelValue <= a.value, icon: y.value[0], "aria-label": r.lang.pagination.first }, a.value)), k.unshift(q({ key: "ble", disable: e.disable || e.modelValue >= o.value, icon: y.value[3], "aria-label": r.lang.pagination.last }, o.value))), f.value === true && (A.push(q({ key: "bdp", disable: e.disable || e.modelValue <= a.value, icon: y.value[1], "aria-label": r.lang.pagination.prev }, e.modelValue - 1)), k.unshift(q({ key: "bdn", disable: e.disable || e.modelValue >= o.value, icon: y.value[2], "aria-label": r.lang.pagination.next }, e.modelValue + 1))), e.input !== true) {
      U = [];
      const { pgFrom: Q, pgTo: Y, marginalStyle: X } = j.value;
      if (j.value.boundaryStart === true) {
        const le = a.value === e.modelValue;
        A.push(q({ key: "bns", style: X, disable: e.disable, label: a.value }, a.value, le));
      }
      if (j.value.boundaryEnd === true) {
        const le = o.value === e.modelValue;
        k.unshift(q({ key: "bne", style: X, disable: e.disable, label: o.value }, o.value, le));
      }
      j.value.ellipsesStart === true && A.push(q({ key: "bes", style: X, disable: e.disable, label: "\u2026", ripple: false }, Q - 1)), j.value.ellipsesEnd === true && k.unshift(q({ key: "bee", style: X, disable: e.disable, label: "\u2026", ripple: false }, Y + 1));
      for (let le = Q; le <= Y; le++) U.push(q({ key: `bpg${le}`, style: X, disable: e.disable, label: le }, le, le === e.modelValue));
    }
    return d("div", { class: _.value, ...p.value }, [d("div", { class: "q-pagination__content row no-wrap items-center", style: T.value }, [...A, e.input === true ? d(Fh, { class: "inline", style: { width: `${u.value.length / 1.5}em` }, type: "number", dense: true, value: m.value, disable: e.disable, dark: l.value, borderless: true, inputClass: e.inputClass, inputStyle: e.inputStyle, placeholder: u.value, min: a.value, max: o.value, ...H.value }) : d("div", { class: "q-pagination__middle row justify-center" }, U), ...k])]);
  };
} });
function au(e) {
  let t = false, n, r;
  function l() {
    r = arguments, t !== true && (t = true, n = window.requestAnimationFrame(() => {
      e.apply(this, r), r = void 0, t = false;
    }));
  }
  return l.cancel = () => {
    window.cancelAnimationFrame(n), t = false;
  }, l;
}
var { passive: Ja } = ft;
he({ name: "QParallax", props: { src: String, height: { type: Number, default: 500 }, speed: { type: Number, default: 1, validator: (e) => e >= 0 && e <= 1 }, scrollTarget: er, onScroll: Function }, setup(e, { slots: t, emit: n }) {
  const r = W(0), l = W(null), a = W(null), o = W(null);
  let i, u, c, s, f, h;
  ge(() => e.height, () => {
    i === true && g();
  }), ge(() => e.scrollTarget, () => {
    i === true && (y(), T());
  });
  let m = (p) => {
    r.value = p, e.onScroll !== void 0 && n("scroll", p);
  };
  function g() {
    let p, b, C;
    h === window ? (p = 0, C = b = window.innerHeight) : (p = Po(h).top, b = kr(h), C = p + b);
    const P = Po(l.value).top, F = P + e.height;
    if (f !== void 0 || F > p && P < C) {
      const j = (C - P) / (e.height + b);
      _((c - e.height) * j * e.speed), m(j);
    }
  }
  let _ = (p) => {
    u.style.transform = `translate3d(-50%,${Math.round(p)}px,0)`;
  };
  function w() {
    c = u.naturalHeight || u.videoHeight || kr(u), i === true && g();
  }
  function T() {
    i = true, h = In(l.value, e.scrollTarget), h.addEventListener("scroll", g, Ja), window.addEventListener("resize", s, Ja), g();
  }
  function y() {
    i === true && (i = false, h.removeEventListener("scroll", g, Ja), window.removeEventListener("resize", s, Ja), h = void 0, _.cancel(), m.cancel(), s.cancel());
  }
  return ct(() => {
    _ = au(_), m = au(m), s = au(w), u = t.media !== void 0 ? a.value.children[0] : o.value, u.onload = u.onloadstart = u.loadedmetadata = w, w(), u.style.display = "initial", window.IntersectionObserver !== void 0 ? (f = new IntersectionObserver((p) => {
      (p[0].isIntersecting === true ? T : y)();
    }), f.observe(l.value)) : T();
  }), We(() => {
    y(), f == null ? void 0 : f.disconnect(), u.onload = u.onloadstart = u.loadedmetadata = null;
  }), () => d("div", { ref: l, class: "q-parallax", style: { height: `${e.height}px` } }, [d("div", { ref: a, class: "q-parallax__media absolute-full" }, t.media !== void 0 ? t.media() : [d("img", { ref: o, src: e.src })]), d("div", { class: "q-parallax__content absolute-full column flex-center" }, t.content !== void 0 ? t.content({ percentScrolled: r.value }) : $e(t.default))]);
} });
function ca(e, t = /* @__PURE__ */ new WeakMap()) {
  if (Object(e) !== e) return e;
  if (t.has(e)) return t.get(e);
  const n = e instanceof Date ? new Date(e) : e instanceof RegExp ? new RegExp(e.source, e.flags) : e instanceof Set ? /* @__PURE__ */ new Set() : e instanceof Map ? /* @__PURE__ */ new Map() : typeof e.constructor != "function" ? /* @__PURE__ */ Object.create(null) : e.prototype !== void 0 && typeof e.prototype.constructor == "function" ? e : new e.constructor();
  if (typeof e.constructor == "function" && typeof e.valueOf == "function") {
    const r = e.valueOf();
    if (Object(r) !== r) {
      const l = new e.constructor(r);
      return t.set(e, l), l;
    }
  }
  return t.set(e, n), e instanceof Set ? e.forEach((r) => {
    n.add(ca(r, t));
  }) : e instanceof Map && e.forEach((r, l) => {
    n.set(l, ca(r, t));
  }), Object.assign(n, ...Object.keys(e).map((r) => ({ [r]: ca(e[r], t) })));
}
he({ name: "QPopupEdit", props: { modelValue: { required: true }, title: String, buttons: Boolean, labelSet: String, labelCancel: String, color: { type: String, default: "primary" }, validate: { type: Function, default: () => true }, autoSave: Boolean, cover: { type: Boolean, default: true }, disable: Boolean }, emits: ["update:modelValue", "save", "cancel", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = W(null), o = W(""), i = W("");
  let u = false;
  const c = v(() => Vt({ initialValue: o.value, validate: e.validate, set: s, cancel: f, updatePosition: h }, "value", () => i.value, (b) => {
    i.value = b;
  }));
  function s() {
    e.validate(i.value) !== false && (m() === true && (n("save", i.value, o.value), n("update:modelValue", i.value)), g());
  }
  function f() {
    m() === true && n("cancel", i.value, o.value), g();
  }
  function h() {
    Qe(() => {
      a.value.updatePosition();
    });
  }
  function m() {
    return qn(i.value, o.value) === false;
  }
  function g() {
    u = true, a.value.hide();
  }
  function _() {
    u = false, o.value = ca(e.modelValue), i.value = ca(e.modelValue), n("beforeShow");
  }
  function w() {
    n("show");
  }
  function T() {
    u === false && m() === true && (e.autoSave === true && e.validate(i.value) === true ? (n("save", i.value, o.value), n("update:modelValue", i.value)) : n("cancel", i.value, o.value)), n("beforeHide");
  }
  function y() {
    n("hide");
  }
  function p() {
    const b = t.default !== void 0 ? [].concat(t.default(c.value)) : [];
    return e.title && b.unshift(d("div", { class: "q-dialog__title q-mt-sm q-mb-sm" }, e.title)), e.buttons === true && b.push(d("div", { class: "q-popup-edit__buttons row justify-center no-wrap" }, [d(Je, { flat: true, color: e.color, label: e.labelCancel || l.lang.label.cancel, onClick: f }), d(Je, { flat: true, color: e.color, label: e.labelSet || l.lang.label.set, onClick: s })])), b;
  }
  return Object.assign(r, { set: s, cancel: f, show(b) {
    var _a3;
    (_a3 = a.value) == null ? void 0 : _a3.show(b);
  }, hide(b) {
    var _a3;
    (_a3 = a.value) == null ? void 0 : _a3.hide(b);
  }, updatePosition: h }), () => {
    if (e.disable !== true) return d(hi, { ref: a, class: "q-popup-edit", cover: e.cover, onBeforeShow: _, onShow: w, onBeforeHide: T, onHide: y, onEscapeKey: f }, p);
  };
} });
he({ name: "QPopupProxy", props: { ...Pm, breakpoint: { type: [String, Number], default: 450 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: n, attrs: r }) {
  const { proxy: l } = xe(), { $q: a } = l, o = W(false), i = W(null), u = v(() => parseInt(e.breakpoint, 10)), { canShow: c } = As({ showing: o });
  function s() {
    return a.screen.width < u.value || a.screen.height < u.value ? "dialog" : "menu";
  }
  const f = W(s()), h = v(() => f.value === "menu" ? { maxHeight: "99vh" } : {});
  ge(() => s(), (_) => {
    o.value !== true && (f.value = _);
  });
  function m(_) {
    o.value = true, n("show", _);
  }
  function g(_) {
    o.value = false, f.value = s(), n("hide", _);
  }
  return Object.assign(l, { show(_) {
    c(_) === true && i.value.show(_);
  }, hide(_) {
    i.value.hide(_);
  }, toggle(_) {
    i.value.toggle(_);
  } }), Vt(l, "currentComponent", () => ({ type: f.value, ref: i.value })), () => {
    const _ = { ref: i, ...h.value, ...r, onShow: m, onHide: g };
    let w;
    return f.value === "dialog" ? w = bi : (w = hi, Object.assign(_, { target: e.target, contextMenu: e.contextMenu, noParentEvent: true, separateClosePopup: true })), d(w, _, t.default);
  };
} });
var Q1 = { xs: 2, sm: 4, md: 6, lg: 10, xl: 14 };
function Id(e, t, n) {
  return { transform: t === true ? `translateX(${n.lang.rtl === true ? "-" : ""}100%) scale3d(${-e},1,1)` : `scale3d(${e},1,1)` };
}
var K1 = he({ name: "QLinearProgress", props: { ...nt, ...el, value: { type: Number, default: 0 }, buffer: Number, color: String, trackColor: String, reverse: Boolean, stripe: Boolean, indeterminate: Boolean, query: Boolean, rounded: Boolean, animationSpeed: { type: [String, Number], default: 2100 }, instantFeedback: Boolean }, setup(e, { slots: t }) {
  const { proxy: n } = xe(), r = lt(e, n.$q), l = tl(e, Q1), a = v(() => e.indeterminate === true || e.query === true), o = v(() => e.reverse !== e.query), i = v(() => ({ ...l.value !== null ? l.value : {}, "--q-linear-progress-speed": `${e.animationSpeed}ms` })), u = v(() => "q-linear-progress" + (e.color !== void 0 ? ` text-${e.color}` : "") + (e.reverse === true || e.query === true ? " q-linear-progress--reverse" : "") + (e.rounded === true ? " rounded-borders" : "")), c = v(() => Id(e.buffer !== void 0 ? e.buffer : 1, o.value, n.$q)), s = v(() => `with${e.instantFeedback === true ? "out" : ""}-transition`), f = v(() => `q-linear-progress__track absolute-full q-linear-progress__track--${s.value} q-linear-progress__track--${r.value === true ? "dark" : "light"}` + (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")), h = v(() => Id(a.value === true ? 1 : e.value, o.value, n.$q)), m = v(() => `q-linear-progress__model absolute-full q-linear-progress__model--${s.value} q-linear-progress__model--${a.value === true ? "in" : ""}determinate`), g = v(() => ({ width: `${e.value * 100}%` })), _ = v(() => `q-linear-progress__stripe absolute-${e.reverse === true ? "right" : "left"} q-linear-progress__stripe--${s.value}`);
  return () => {
    const w = [d("div", { class: f.value, style: c.value }), d("div", { class: m.value, style: h.value })];
    return e.stripe === true && a.value === false && w.push(d("div", { class: _.value, style: g.value })), d("div", { class: u.value, style: i.value, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuenow": e.indeterminate === true ? void 0 : e.value }, qt(t.default, w));
  };
} }), zd = 40, ou = 20;
he({ name: "QPullToRefresh", props: { color: String, bgColor: String, icon: String, noMouse: Boolean, disable: Boolean, scrollTarget: er }, emits: ["refresh"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = W("pull"), o = W(0), i = W(false), u = W(-40), c = W(false), s = W({}), f = v(() => ({ opacity: o.value, transform: `translateY(${u.value}px) rotate(${o.value * 360}deg)` })), h = v(() => "q-pull-to-refresh__puller row flex-center" + (c.value === true ? " q-pull-to-refresh__puller--animating" : "") + (e.bgColor !== void 0 ? ` bg-${e.bgColor}` : ""));
  function m(C) {
    if (C.isFinal === true) {
      i.value === true && (i.value = false, a.value === "pulled" ? (a.value = "refreshing", p({ pos: ou }), w()) : a.value === "pull" && p({ pos: -40, ratio: 0 }));
      return;
    }
    if (c.value === true || a.value === "refreshing") return false;
    if (C.isFirst === true) {
      if (yl(T) !== 0 || C.direction !== "down") return i.value === true && (i.value = false, a.value = "pull", p({ pos: -40, ratio: 0 })), false;
      i.value = true;
      const { top: j, left: $ } = r.$el.getBoundingClientRect();
      s.value = { top: j + "px", left: $ + "px", width: window.getComputedStyle(r.$el).getPropertyValue("width") };
    }
    Dt(C.evt);
    const P = Math.min(140, Math.max(0, C.distance.y));
    u.value = P - zd, o.value = dt(P / (ou + zd), 0, 1);
    const F = u.value > ou ? "pulled" : "pull";
    a.value !== F && (a.value = F);
  }
  const g = v(() => {
    const C = { down: true };
    return e.noMouse !== true && (C.mouse = true), [[bn, m, void 0, C]];
  }), _ = v(() => `q-pull-to-refresh__content${i.value === true ? " no-pointer-events" : ""}`);
  function w() {
    n("refresh", () => {
      p({ pos: -40, ratio: 0 }, () => {
        a.value = "pull";
      });
    });
  }
  let T, y = null;
  function p({ pos: C, ratio: P }, F) {
    c.value = true, u.value = C, P !== void 0 && (o.value = P), y !== null && clearTimeout(y), y = setTimeout(() => {
      y = null, c.value = false, F == null ? void 0 : F();
    }, 300);
  }
  function b() {
    T = In(r.$el, e.scrollTarget);
  }
  return ge(() => e.scrollTarget, b), ct(b), We(() => {
    y !== null && clearTimeout(y);
  }), Object.assign(r, { trigger: w, updateScrollTarget: b }), () => {
    const C = [d("div", { class: _.value }, $e(t.default)), d("div", { class: "q-pull-to-refresh__puller-container fixed row flex-center no-pointer-events z-top", style: s.value }, [d("div", { class: h.value, style: f.value }, [a.value !== "refreshing" ? d(et, { name: e.icon || l.iconSet.pullToRefresh.icon, color: e.color, size: "32px" }) : d(wn, { size: "24px", color: e.color })])])];
    return _n("div", { class: "q-pull-to-refresh" }, C, "main", e.disable === false, () => g.value);
  };
} });
var al = { MIN: 0, RANGE: 1, MAX: 2 };
he({ name: "QRange", props: { ...eh, modelValue: { type: Object, default: () => ({ min: null, max: null }), validator: (e) => "min" in e && "max" in e }, dragRange: Boolean, dragOnlyRange: Boolean, leftLabelColor: String, leftLabelTextColor: String, rightLabelColor: String, rightLabelTextColor: String, leftLabelValue: [String, Number], rightLabelValue: [String, Number], leftThumbColor: String, rightThumbColor: String }, emits: th, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = xe(), { state: r, methods: l } = nh({ updateValue: j, updatePosition: L, getDragging: $, formAttrs: v(() => ({ type: "hidden", name: e.name, value: `${e.modelValue.min}|${e.modelValue.max}` })) }), a = W(null), o = W(0), i = W(0), u = W({ min: 0, max: 0 });
  function c() {
    u.value.min = e.modelValue.min === null ? r.innerMin.value : dt(e.modelValue.min, r.innerMin.value, r.innerMax.value), u.value.max = e.modelValue.max === null ? r.innerMax.value : dt(e.modelValue.max, r.innerMin.value, r.innerMax.value);
  }
  ge(() => `${e.modelValue.min}|${e.modelValue.max}|${r.innerMin.value}|${r.innerMax.value}`, c), c();
  const s = v(() => l.convertModelToRatio(u.value.min)), f = v(() => l.convertModelToRatio(u.value.max)), h = v(() => r.active.value === true ? o.value : s.value), m = v(() => r.active.value === true ? i.value : f.value), g = v(() => {
    const q = { [r.positionProp.value]: `${100 * h.value}%`, [r.sizeProp.value]: `${100 * (m.value - h.value)}%` };
    return e.selectionImg !== void 0 && (q.backgroundImage = `url(${e.selectionImg}) !important`), q;
  }), _ = v(() => {
    if (r.editable.value !== true) return {};
    if (n.platform.is.mobile === true) return { onClick: l.onMobileClick };
    const q = { onMousedown: l.onActivate };
    return (e.dragRange === true || e.dragOnlyRange === true) && Object.assign(q, { onFocus: () => {
      r.focus.value = "both";
    }, onBlur: l.onBlur, onKeydown: H, onKeyup: l.onKeyup }), q;
  });
  function w(q) {
    return n.platform.is.mobile !== true && r.editable.value === true && e.dragOnlyRange !== true ? { onFocus: () => {
      r.focus.value = q;
    }, onBlur: l.onBlur, onKeydown: H, onKeyup: l.onKeyup } : {};
  }
  const T = v(() => e.dragOnlyRange !== true ? r.tabindex.value : null), y = v(() => n.platform.is.mobile !== true && (e.dragRange || e.dragOnlyRange === true) ? r.tabindex.value : null), p = W(null), b = v(() => w("min")), C = l.getThumbRenderFn({ focusValue: "min", getNodeData: () => ({ ref: p, key: "tmin", ...b.value, tabindex: T.value }), ratio: h, label: v(() => e.leftLabelValue !== void 0 ? e.leftLabelValue : u.value.min), thumbColor: v(() => e.leftThumbColor || e.thumbColor || e.color), labelColor: v(() => e.leftLabelColor || e.labelColor), labelTextColor: v(() => e.leftLabelTextColor || e.labelTextColor) }), P = v(() => w("max")), F = l.getThumbRenderFn({ focusValue: "max", getNodeData: () => ({ ...P.value, key: "tmax", tabindex: T.value }), ratio: m, label: v(() => e.rightLabelValue !== void 0 ? e.rightLabelValue : u.value.max), thumbColor: v(() => e.rightThumbColor || e.thumbColor || e.color), labelColor: v(() => e.rightLabelColor || e.labelColor), labelTextColor: v(() => e.rightLabelTextColor || e.labelTextColor) });
  function j(q) {
    (u.value.min !== e.modelValue.min || u.value.max !== e.modelValue.max) && t("update:modelValue", { ...u.value }), q === true && t("change", { ...u.value });
  }
  function $(q) {
    const { left: A, top: k, width: U, height: Q } = a.value.getBoundingClientRect(), Y = e.dragOnlyRange === true ? 0 : e.vertical === true ? p.value.offsetHeight / (2 * Q) : p.value.offsetWidth / (2 * U), X = { left: A, top: k, width: U, height: Q, valueMin: u.value.min, valueMax: u.value.max, ratioMin: s.value, ratioMax: f.value }, le = l.getDraggingRatio(q, X);
    return e.dragOnlyRange !== true && le < X.ratioMin + Y ? X.type = al.MIN : e.dragOnlyRange === true || le < X.ratioMax - Y ? e.dragRange === true || e.dragOnlyRange === true ? (X.type = al.RANGE, Object.assign(X, { offsetRatio: le, offsetModel: l.convertRatioToModel(le), rangeValue: X.valueMax - X.valueMin, rangeRatio: X.ratioMax - X.ratioMin })) : X.type = X.ratioMax - le < le - X.ratioMin ? al.MAX : al.MIN : X.type = al.MAX, X;
  }
  function L(q, A = r.dragging.value) {
    let k;
    const U = l.getDraggingRatio(q, A), Q = l.convertRatioToModel(U);
    switch (A.type) {
      case al.MIN:
        U <= A.ratioMax ? (k = { minR: U, maxR: A.ratioMax, min: Q, max: A.valueMax }, r.focus.value = "min") : (k = { minR: A.ratioMax, maxR: U, min: A.valueMax, max: Q }, r.focus.value = "max");
        break;
      case al.MAX:
        U >= A.ratioMin ? (k = { minR: A.ratioMin, maxR: U, min: A.valueMin, max: Q }, r.focus.value = "max") : (k = { minR: U, maxR: A.ratioMin, min: Q, max: A.valueMin }, r.focus.value = "min");
        break;
      case al.RANGE:
        const Y = U - A.offsetRatio, X = dt(A.ratioMin + Y, r.innerMinRatio.value, r.innerMaxRatio.value - A.rangeRatio), le = Q - A.offsetModel, ye = dt(A.valueMin + le, r.innerMin.value, r.innerMax.value - A.rangeValue);
        k = { minR: X, maxR: X + A.rangeRatio, min: r.roundValueFn.value(ye), max: r.roundValueFn.value(ye + A.rangeValue) }, r.focus.value = "both";
        break;
    }
    u.value = u.value.min === null || u.value.max === null ? { min: k.min || e.min, max: k.max || e.max } : { min: k.min, max: k.max }, e.snap !== true || e.step === 0 ? (o.value = k.minR, i.value = k.maxR) : (o.value = l.convertModelToRatio(u.value.min), i.value = l.convertModelToRatio(u.value.max));
  }
  function H(q) {
    if (Us.includes(q.keyCode) === false) return;
    je(q);
    const A = ([34, 33].includes(q.keyCode) ? 10 : 1) * r.keyStep.value, k = ([34, 37, 40].includes(q.keyCode) ? -1 : 1) * (r.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * A;
    if (r.focus.value === "both") {
      const U = u.value.max - u.value.min, Q = dt(r.roundValueFn.value(u.value.min + k), r.innerMin.value, r.innerMax.value - U);
      u.value = { min: Q, max: r.roundValueFn.value(Q + U) };
    } else {
      if (r.focus.value === false) return;
      {
        const U = r.focus.value;
        u.value = { ...u.value, [U]: dt(r.roundValueFn.value(u.value[U] + k), U === "min" ? r.innerMin.value : u.value.min, U === "max" ? r.innerMax.value : u.value.max) };
      }
    }
    j();
  }
  return () => {
    const q = l.getContent(g, y, _, (A) => {
      A.push(C(), F());
    });
    return d("div", { ref: a, class: "q-range " + r.classes.value + (e.modelValue.min === null || e.modelValue.max === null ? " q-slider--no-value" : ""), ...r.attributes.value, "aria-valuenow": e.modelValue.min + "|" + e.modelValue.max }, q);
  };
} });
he({ name: "QRating", props: { ...el, ...xn, modelValue: { type: Number, required: true }, max: { type: [String, Number], default: 5 }, icon: [String, Array], iconHalf: [String, Array], iconSelected: [String, Array], iconAriaLabel: [String, Array], color: [String, Array], colorHalf: [String, Array], colorSelected: [String, Array], noReset: Boolean, noDimming: Boolean, readonly: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = tl(e), a = Ba(e), o = ql(a), i = W(0);
  let u = {};
  const c = v(() => e.readonly !== true && e.disable !== true), s = v(() => `q-rating row inline items-center q-rating--${c.value === true ? "" : "non-"}editable` + (e.noDimming === true ? " q-rating--no-dimming" : "") + (e.disable === true ? " disabled" : "") + (e.color !== void 0 && Array.isArray(e.color) === false ? ` text-${e.color}` : "")), f = v(() => {
    const p = Array.isArray(e.icon) === true ? e.icon.length : 0, b = Array.isArray(e.iconSelected) === true ? e.iconSelected.length : 0, C = Array.isArray(e.iconHalf) === true ? e.iconHalf.length : 0, P = Array.isArray(e.color) === true ? e.color.length : 0, F = Array.isArray(e.colorSelected) === true ? e.colorSelected.length : 0, j = Array.isArray(e.colorHalf) === true ? e.colorHalf.length : 0;
    return { iconLen: p, icon: p > 0 ? e.icon[p - 1] : e.icon, selIconLen: b, selIcon: b > 0 ? e.iconSelected[b - 1] : e.iconSelected, halfIconLen: C, halfIcon: C > 0 ? e.iconHalf[b - 1] : e.iconHalf, colorLen: P, color: P > 0 ? e.color[P - 1] : e.color, selColorLen: F, selColor: F > 0 ? e.colorSelected[F - 1] : e.colorSelected, halfColorLen: j, halfColor: j > 0 ? e.colorHalf[j - 1] : e.colorHalf };
  }), h = v(() => {
    if (typeof e.iconAriaLabel == "string") {
      const p = e.iconAriaLabel.length !== 0 ? `${e.iconAriaLabel} ` : "";
      return (b) => `${p}${b}`;
    }
    if (Array.isArray(e.iconAriaLabel) === true) {
      const p = e.iconAriaLabel.length;
      if (p > 0) return (b) => e.iconAriaLabel[Math.min(b, p) - 1];
    }
    return (p, b) => `${b} ${p}`;
  }), m = v(() => {
    const p = [], b = f.value, C = Math.ceil(e.modelValue), P = c.value === true ? 0 : null, F = e.iconHalf === void 0 || C === e.modelValue ? -1 : C;
    for (let j = 1; j <= e.max; j++) {
      const $ = i.value === 0 && e.modelValue >= j || i.value > 0 && i.value >= j, L = F === j && i.value < j, H = i.value > 0 && (L === true ? C : e.modelValue) >= j && i.value < j, q = L === true ? j <= b.halfColorLen ? e.colorHalf[j - 1] : b.halfColor : b.selColor !== void 0 && $ === true ? j <= b.selColorLen ? e.colorSelected[j - 1] : b.selColor : j <= b.colorLen ? e.color[j - 1] : b.color, A = (L === true ? j <= b.halfIconLen ? e.iconHalf[j - 1] : b.halfIcon : b.selIcon !== void 0 && ($ === true || H === true) ? j <= b.selIconLen ? e.iconSelected[j - 1] : b.selIcon : j <= b.iconLen ? e.icon[j - 1] : b.icon) || r.iconSet.rating.icon;
      p.push({ name: (L === true ? j <= b.halfIconLen ? e.iconHalf[j - 1] : b.halfIcon : b.selIcon !== void 0 && ($ === true || H === true) ? j <= b.selIconLen ? e.iconSelected[j - 1] : b.selIcon : j <= b.iconLen ? e.icon[j - 1] : b.icon) || r.iconSet.rating.icon, attrs: { tabindex: P, role: "radio", "aria-checked": e.modelValue === j ? "true" : "false", "aria-label": h.value(j, A) }, iconClass: "q-rating__icon" + ($ === true || L === true ? " q-rating__icon--active" : "") + (H === true ? " q-rating__icon--exselected" : "") + (i.value === j ? " q-rating__icon--hovered" : "") + (q !== void 0 ? ` text-${q}` : "") });
    }
    return p;
  }), g = v(() => {
    const p = { role: "radiogroup" };
    return e.disable === true && (p["aria-disabled"] = "true"), e.readonly === true && (p["aria-readonly"] = "true"), p;
  });
  function _(p) {
    if (c.value === true) {
      const b = dt(parseInt(p, 10), 1, parseInt(e.max, 10)), C = e.noReset !== true && e.modelValue === b ? 0 : b;
      C !== e.modelValue && n("update:modelValue", C), i.value = 0;
    }
  }
  function w(p) {
    c.value === true && (i.value = p);
  }
  function T(p, b) {
    switch (p.keyCode) {
      case 13:
      case 32:
        return _(b), je(p);
      case 37:
      case 40:
        return u[`rt${b - 1}`] && u[`rt${b - 1}`].focus(), je(p);
      case 39:
      case 38:
        return u[`rt${b + 1}`] && u[`rt${b + 1}`].focus(), je(p);
    }
  }
  function y() {
    i.value = 0;
  }
  return Rr(() => {
    u = {};
  }), () => {
    const p = [];
    return m.value.forEach(({ iconClass: b, name: C, attrs: P }, F) => {
      const j = F + 1;
      p.push(d("div", { key: j, ref: ($) => {
        u[`rt${j}`] = $;
      }, class: "q-rating__icon-container flex flex-center", ...P, onClick() {
        _(j);
      }, onMouseover() {
        w(j);
      }, onMouseout: y, onFocus() {
        w(j);
      }, onBlur: y, onKeyup($) {
        T($, j);
      } }, qt(t[`tip-${j}`], [d(et, { class: b, name: C })])));
    }), e.name !== void 0 && e.disable !== true && o(p, "push"), d("div", { class: s.value, style: l.value, ...g.value }, p);
  };
} });
he({ name: "QResponsive", props: Ys, setup(e, { slots: t }) {
  const n = Xs(e);
  return () => d("div", { class: "q-responsive" }, [d("div", { class: "q-responsive__filler overflow-hidden" }, [d("div", { style: n.value })]), d("div", { class: "q-responsive__content absolute-full fit" }, $e(t.default))]);
} });
var W1 = he({ props: ["store", "barStyle", "verticalBarStyle", "horizontalBarStyle"], setup(e) {
  return () => [d("div", { class: e.store.scroll.vertical.barClass.value, style: [e.barStyle, e.verticalBarStyle], "aria-hidden": "true", onMousedown: e.store.onVerticalMousedown }), d("div", { class: e.store.scroll.horizontal.barClass.value, style: [e.barStyle, e.horizontalBarStyle], "aria-hidden": "true", onMousedown: e.store.onHorizontalMousedown }), cn(d("div", { ref: e.store.scroll.vertical.ref, class: e.store.scroll.vertical.thumbClass.value, style: e.store.scroll.vertical.style.value, "aria-hidden": "true" }), e.store.thumbVertDir), cn(d("div", { ref: e.store.scroll.horizontal.ref, class: e.store.scroll.horizontal.thumbClass.value, style: e.store.scroll.horizontal.style.value, "aria-hidden": "true" }), e.store.thumbHorizDir)];
} }), Nd = ["vertical", "horizontal"], iu = { vertical: { offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y" }, horizontal: { offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x" } }, Hd = { prevent: true, mouse: true, mouseAllDir: true }, jd = (e) => e >= 250 ? 50 : Math.ceil(e / 5), Y1 = he({ name: "QScrollArea", props: { ...nt, thumbStyle: Object, verticalThumbStyle: Object, horizontalThumbStyle: Object, barStyle: [Array, String, Object], verticalBarStyle: [Array, String, Object], horizontalBarStyle: [Array, String, Object], verticalOffset: { type: Array, default: [0, 0] }, horizontalOffset: { type: Array, default: [0, 0] }, contentStyle: [Array, String, Object], contentActiveStyle: [Array, String, Object], delay: { type: [String, Number], default: 1e3 }, visible: { type: Boolean, default: null }, tabindex: [String, Number], onScroll: Function }, setup(e, { slots: t, emit: n }) {
  const r = W(false), l = W(false), a = W(false), o = { vertical: W(0), horizontal: W(0) }, i = { vertical: { ref: W(null), position: W(0), size: W(0) }, horizontal: { ref: W(null), position: W(0), size: W(0) } }, { proxy: u } = xe(), c = lt(e, u.$q);
  let s = null, f;
  const h = W(null), m = v(() => "q-scrollarea" + (c.value === true ? " q-scrollarea--dark" : ""));
  Object.assign(o, { verticalInner: v(() => o.vertical.value - e.verticalOffset[0] - e.verticalOffset[1]), horizontalInner: v(() => o.horizontal.value - e.horizontalOffset[0] - e.horizontalOffset[1]) }), i.vertical.percentage = v(() => {
    const k = i.vertical.size.value - o.vertical.value;
    if (k <= 0) return 0;
    const U = dt(i.vertical.position.value / k, 0, 1);
    return Math.round(U * 1e4) / 1e4;
  }), i.vertical.thumbHidden = v(() => (e.visible === null ? a.value : e.visible) !== true && r.value === false && l.value === false || i.vertical.size.value <= o.vertical.value + 1), i.vertical.thumbStart = v(() => e.verticalOffset[0] + i.vertical.percentage.value * (o.verticalInner.value - i.vertical.thumbSize.value)), i.vertical.thumbSize = v(() => Math.round(dt(o.verticalInner.value * o.verticalInner.value / i.vertical.size.value, jd(o.verticalInner.value), o.verticalInner.value))), i.vertical.style = v(() => ({ ...e.thumbStyle, ...e.verticalThumbStyle, top: `${i.vertical.thumbStart.value}px`, height: `${i.vertical.thumbSize.value}px`, right: `${e.horizontalOffset[1]}px` })), i.vertical.thumbClass = v(() => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (i.vertical.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), i.vertical.barClass = v(() => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (i.vertical.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : "")), i.horizontal.percentage = v(() => {
    const k = i.horizontal.size.value - o.horizontal.value;
    if (k <= 0) return 0;
    const U = dt(Math.abs(i.horizontal.position.value) / k, 0, 1);
    return Math.round(U * 1e4) / 1e4;
  }), i.horizontal.thumbHidden = v(() => (e.visible === null ? a.value : e.visible) !== true && r.value === false && l.value === false || i.horizontal.size.value <= o.horizontal.value + 1), i.horizontal.thumbStart = v(() => e.horizontalOffset[0] + i.horizontal.percentage.value * (o.horizontalInner.value - i.horizontal.thumbSize.value)), i.horizontal.thumbSize = v(() => Math.round(dt(o.horizontalInner.value * o.horizontalInner.value / i.horizontal.size.value, jd(o.horizontalInner.value), o.horizontalInner.value))), i.horizontal.style = v(() => ({ ...e.thumbStyle, ...e.horizontalThumbStyle, [u.$q.lang.rtl === true ? "right" : "left"]: `${i.horizontal.thumbStart.value}px`, width: `${i.horizontal.thumbSize.value}px`, bottom: `${e.verticalOffset[1]}px` })), i.horizontal.thumbClass = v(() => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (i.horizontal.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), i.horizontal.barClass = v(() => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (i.horizontal.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : ""));
  const g = v(() => i.vertical.thumbHidden.value === true && i.horizontal.thumbHidden.value === true ? e.contentStyle : e.contentActiveStyle);
  function _() {
    const k = {};
    return Nd.forEach((U) => {
      const Q = i[U];
      Object.assign(k, { [U + "Position"]: Q.position.value, [U + "Percentage"]: Q.percentage.value, [U + "Size"]: Q.size.value, [U + "ContainerSize"]: o[U].value, [U + "ContainerInnerSize"]: o[U + "Inner"].value });
    }), k;
  }
  const w = Ar(() => {
    const k = _();
    k.ref = u, n("scroll", k);
  }, 0);
  function T(k, U, Q) {
    if (Nd.includes(k) === false) {
      console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
      return;
    }
    (k === "vertical" ? xr : Ni)(h.value, U, Q);
  }
  function y({ height: k, width: U }) {
    let Q = false;
    o.vertical.value !== k && (o.vertical.value = k, Q = true), o.horizontal.value !== U && (o.horizontal.value = U, Q = true), Q === true && F();
  }
  function p({ position: k }) {
    let U = false;
    i.vertical.position.value !== k.top && (i.vertical.position.value = k.top, U = true), i.horizontal.position.value !== k.left && (i.horizontal.position.value = k.left, U = true), U === true && F();
  }
  function b({ height: k, width: U }) {
    i.horizontal.size.value !== U && (i.horizontal.size.value = U, F()), i.vertical.size.value !== k && (i.vertical.size.value = k, F());
  }
  function C(k, U) {
    const Q = i[U];
    if (k.isFirst === true) {
      if (Q.thumbHidden.value === true) return;
      f = Q.position.value, l.value = true;
    } else if (l.value !== true) return;
    k.isFinal === true && (l.value = false);
    const Y = iu[U], X = (Q.size.value - o[U].value) / (o[U + "Inner"].value - Q.thumbSize.value), le = k.distance[Y.dist], ye = f + (k.direction === Y.dir ? 1 : -1) * le * X;
    j(ye, U);
  }
  function P(k, U) {
    const Q = i[U];
    if (Q.thumbHidden.value !== true) {
      const Y = U === "vertical" ? e.verticalOffset[0] : e.horizontalOffset[0], X = k[iu[U].offset] - Y, le = Q.thumbStart.value - Y;
      if (X < le || X > le + Q.thumbSize.value) {
        const ye = X - Q.thumbSize.value / 2, R = dt(ye / (o[U + "Inner"].value - Q.thumbSize.value), 0, 1);
        j(R * Math.max(0, Q.size.value - o[U].value), U);
      }
      Q.ref.value !== null && Q.ref.value.dispatchEvent(new MouseEvent(k.type, k));
    }
  }
  function F() {
    r.value = true, s !== null && clearTimeout(s), s = setTimeout(() => {
      s = null, r.value = false;
    }, e.delay), e.onScroll !== void 0 && w();
  }
  function j(k, U) {
    h.value[iu[U].scroll] = k;
  }
  let $ = null;
  function L() {
    $ !== null && clearTimeout($), $ = setTimeout(() => {
      $ = null, a.value = true;
    }, u.$q.platform.is.ios ? 50 : 0);
  }
  function H() {
    $ !== null && (clearTimeout($), $ = null), a.value = false;
  }
  let q = null;
  ge(() => u.$q.lang.rtl, (k) => {
    h.value !== null && Ni(h.value, Math.abs(i.horizontal.position.value) * (k === true ? -1 : 1));
  }), Dn(() => {
    q = { top: i.vertical.position.value, left: i.horizontal.position.value };
  }), kl(() => {
    if (q === null) return;
    const k = h.value;
    k !== null && (Ni(k, q.left), xr(k, q.top));
  }), We(w.cancel), Object.assign(u, { getScrollTarget: () => h.value, getScroll: _, getScrollPosition: () => ({ top: i.vertical.position.value, left: i.horizontal.position.value }), getScrollPercentage: () => ({ top: i.vertical.percentage.value, left: i.horizontal.percentage.value }), setScrollPosition: T, setScrollPercentage(k, U, Q) {
    T(k, U * (i[k].size.value - o[k].value) * (k === "horizontal" && u.$q.lang.rtl === true ? -1 : 1), Q);
  } });
  const A = { scroll: i, thumbVertDir: [[bn, (k) => {
    C(k, "vertical");
  }, void 0, { vertical: true, ...Hd }]], thumbHorizDir: [[bn, (k) => {
    C(k, "horizontal");
  }, void 0, { horizontal: true, ...Hd }]], onVerticalMousedown(k) {
    P(k, "vertical");
  }, onHorizontalMousedown(k) {
    P(k, "horizontal");
  } };
  return () => d("div", { class: m.value, onMouseenter: L, onMouseleave: H }, [d("div", { ref: h, class: "q-scrollarea__container scroll relative-position fit hide-scrollbar", tabindex: e.tabindex !== void 0 ? e.tabindex : void 0 }, [d("div", { class: "q-scrollarea__content absolute", style: g.value }, qt(t.default, [d(Wl, { debounce: 0, onResize: b })])), d(Dh, { axis: "both", onScroll: p })]), d(Wl, { debounce: 0, onResize: y }), d(W1, { store: A, barStyle: e.barStyle, verticalBarStyle: e.verticalBarStyle, horizontalBarStyle: e.horizontalBarStyle })]);
} }), kn = 1e3, X1 = ["start", "center", "end", "start-force", "center-force", "end-force"], Nh = Array.prototype.filter, G1 = __QUASAR_SSR__ || window.getComputedStyle(document.body).overflowAnchor === void 0 ? xt : function(e, t) {
  e !== null && (e._qOverflowAnimationFrame !== void 0 && cancelAnimationFrame(e._qOverflowAnimationFrame), e._qOverflowAnimationFrame = requestAnimationFrame(() => {
    if (e === null) return;
    e._qOverflowAnimationFrame = void 0;
    const n = e.children || [];
    Nh.call(n, (l) => l.dataset && l.dataset.qVsAnchor !== void 0).forEach((l) => {
      delete l.dataset.qVsAnchor;
    });
    const r = n[t];
    (r == null ? void 0 : r.dataset) && (r.dataset.qVsAnchor = "");
  }));
};
function Sr(e, t) {
  return e + t;
}
function uu(e, t, n, r, l, a, o, i) {
  const u = e === window ? document.scrollingElement || document.documentElement : e, c = l === true ? "offsetWidth" : "offsetHeight", s = { scrollStart: 0, scrollViewSize: -o - i, scrollMaxSize: 0, offsetStart: -o, offsetEnd: -i };
  if (l === true ? (e === window ? (s.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, s.scrollViewSize += document.documentElement.clientWidth) : (s.scrollStart = u.scrollLeft, s.scrollViewSize += u.clientWidth), s.scrollMaxSize = u.scrollWidth, a === true && (s.scrollStart = (ka === true ? s.scrollMaxSize - s.scrollViewSize : 0) - s.scrollStart)) : (e === window ? (s.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0, s.scrollViewSize += document.documentElement.clientHeight) : (s.scrollStart = u.scrollTop, s.scrollViewSize += u.clientHeight), s.scrollMaxSize = u.scrollHeight), n !== null) for (let f = n.previousElementSibling; f !== null; f = f.previousElementSibling) f.classList.contains("q-virtual-scroll--skip") === false && (s.offsetStart += f[c]);
  if (r !== null) for (let f = r.nextElementSibling; f !== null; f = f.nextElementSibling) f.classList.contains("q-virtual-scroll--skip") === false && (s.offsetEnd += f[c]);
  if (t !== e) {
    const f = u.getBoundingClientRect(), h = t.getBoundingClientRect();
    l === true ? (s.offsetStart += h.left - f.left, s.offsetEnd -= h.width) : (s.offsetStart += h.top - f.top, s.offsetEnd -= h.height), e !== window && (s.offsetStart += s.scrollStart), s.offsetEnd += s.scrollMaxSize - s.offsetStart;
  }
  return s;
}
function Ud(e, t, n, r) {
  t === "end" && (t = (e === window ? document.body : e)[n === true ? "scrollWidth" : "scrollHeight"]), e === window ? n === true ? (r === true && (t = (ka === true ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - t), window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t) : n === true ? (r === true && (t = (ka === true ? e.scrollWidth - e.offsetWidth : 0) - t), e.scrollLeft = t) : e.scrollTop = t;
}
function Nr(e, t, n, r) {
  if (n >= r) return 0;
  const l = t.length, a = Math.floor(n / kn), o = Math.floor((r - 1) / kn) + 1;
  let i = e.slice(a, o).reduce(Sr, 0);
  return n % kn !== 0 && (i -= t.slice(a * kn, n).reduce(Sr, 0)), r % kn !== 0 && r !== l && (i -= t.slice(r, o * kn).reduce(Sr, 0)), i;
}
var Hh = { virtualScrollSliceSize: { type: [Number, String], default: 10 }, virtualScrollSliceRatioBefore: { type: [Number, String], default: 1 }, virtualScrollSliceRatioAfter: { type: [Number, String], default: 1 }, virtualScrollItemSize: { type: [Number, String], default: 24 }, virtualScrollStickySizeStart: { type: [Number, String], default: 0 }, virtualScrollStickySizeEnd: { type: [Number, String], default: 0 }, tableColspan: [Number, String] }, jh = Object.keys(Hh), Gu = { virtualScrollHorizontal: Boolean, onVirtualScroll: Function, ...Hh };
function Uh({ virtualScrollLength: e, getVirtualScrollTarget: t, getVirtualScrollEl: n, virtualScrollItemSizeComputed: r }) {
  const l = xe(), { props: a, emit: o, proxy: i } = l, { $q: u } = i;
  let c, s, f, h = [], m;
  const g = W(0), _ = W(0), w = W({}), T = W(null), y = W(null), p = W(null), b = W({ from: 0, to: 0 }), C = v(() => a.tableColspan !== void 0 ? a.tableColspan : 100);
  r === void 0 && (r = v(() => a.virtualScrollItemSize));
  const P = v(() => r.value + ";" + a.virtualScrollHorizontal), F = v(() => P.value + ";" + a.virtualScrollSliceRatioBefore + ";" + a.virtualScrollSliceRatioAfter);
  ge(F, () => {
    Q();
  }), ge(P, j);
  function j() {
    U(s, true);
  }
  function $(R) {
    U(R === void 0 ? s : R);
  }
  function L(R, x) {
    const O = t();
    if (O == null || O.nodeType === 8) return;
    const Z = uu(O, n(), T.value, y.value, a.virtualScrollHorizontal, u.lang.rtl, a.virtualScrollStickySizeStart, a.virtualScrollStickySizeEnd);
    f !== Z.scrollViewSize && Q(Z.scrollViewSize), q(O, Z, Math.min(e.value - 1, Math.max(0, parseInt(R, 10) || 0)), 0, X1.indexOf(x) !== -1 ? x : s !== -1 && R > s ? "end" : "start");
  }
  function H() {
    const R = t();
    if (R == null || R.nodeType === 8) return;
    const x = uu(R, n(), T.value, y.value, a.virtualScrollHorizontal, u.lang.rtl, a.virtualScrollStickySizeStart, a.virtualScrollStickySizeEnd), O = e.value - 1, Z = x.scrollMaxSize - x.offsetStart - x.offsetEnd - _.value;
    if (c === x.scrollStart) return;
    if (x.scrollMaxSize <= 0) {
      q(R, x, 0, 0);
      return;
    }
    f !== x.scrollViewSize && Q(x.scrollViewSize), A(b.value.from);
    const oe = Math.floor(x.scrollMaxSize - Math.max(x.scrollViewSize, x.offsetEnd) - Math.min(m[O], x.scrollViewSize / 2));
    if (oe > 0 && Math.ceil(x.scrollStart) >= oe) {
      q(R, x, O, x.scrollMaxSize - x.offsetEnd - h.reduce(Sr, 0));
      return;
    }
    let B = 0, M = x.scrollStart - x.offsetStart, ee = M;
    if (M <= Z && M + x.scrollViewSize >= g.value) M -= g.value, B = b.value.from, ee = M;
    else for (let V = 0; M >= h[V] && B < O; V++) M -= h[V], B += kn;
    for (; M > 0 && B < O; ) M -= m[B], M > -x.scrollViewSize ? (B++, ee = M) : ee = m[B] + M;
    q(R, x, B, ee);
  }
  function q(R, x, O, Z, oe) {
    const B = typeof oe == "string" && oe.indexOf("-force") !== -1, M = B === true ? oe.replace("-force", "") : oe, ee = M !== void 0 ? M : "start";
    let V = Math.max(0, O - w.value[ee]), ne = V + w.value.total;
    ne > e.value && (ne = e.value, V = Math.max(0, ne - w.value.total)), c = x.scrollStart;
    const pe = V !== b.value.from || ne !== b.value.to;
    if (pe === false && M === void 0) {
      X(O);
      return;
    }
    const { activeElement: S } = document, E = p.value;
    pe === true && E !== null && E !== S && E.contains(S) === true && (E.addEventListener("focusout", k), setTimeout(() => {
      E == null ? void 0 : E.removeEventListener("focusout", k);
    })), G1(E, O - V);
    const z = M !== void 0 ? m.slice(V, O).reduce(Sr, 0) : 0;
    if (pe === true) {
      const te = ne >= b.value.from && V <= b.value.to ? b.value.to : ne;
      b.value = { from: V, to: te }, g.value = Nr(h, m, 0, V), _.value = Nr(h, m, ne, e.value), requestAnimationFrame(() => {
        b.value.to !== ne && c === x.scrollStart && (b.value = { from: b.value.from, to: ne }, _.value = Nr(h, m, ne, e.value));
      });
    }
    requestAnimationFrame(() => {
      if (c !== x.scrollStart) return;
      pe === true && A(V);
      const te = m.slice(V, O).reduce(Sr, 0), D = te + x.offsetStart + g.value, I = D + m[O];
      let se = D + Z;
      if (M !== void 0) {
        const me = te - z, fe = x.scrollStart + me;
        se = B !== true && fe < D && I < fe + x.scrollViewSize ? fe : M === "end" ? I - x.scrollViewSize : D - (M === "start" ? 0 : Math.round((x.scrollViewSize - m[O]) / 2));
      }
      c = se, Ud(R, se, a.virtualScrollHorizontal, u.lang.rtl), X(O);
    });
  }
  function A(R) {
    const x = p.value;
    if (x) {
      const O = Nh.call(x.children, (V) => V.classList && V.classList.contains("q-virtual-scroll--skip") === false), Z = O.length, oe = a.virtualScrollHorizontal === true ? (V) => V.getBoundingClientRect().width : (V) => V.offsetHeight;
      let B = R, M, ee;
      for (let V = 0; V < Z; ) {
        for (M = oe(O[V]), V++; V < Z && O[V].classList.contains("q-virtual-scroll--with-prev") === true; ) M += oe(O[V]), V++;
        ee = M - m[B], ee !== 0 && (m[B] += ee, h[Math.floor(B / kn)] += ee), B++;
      }
    }
  }
  function k() {
    var _a3;
    (_a3 = p.value) == null ? void 0 : _a3.focus();
  }
  function U(R, x) {
    const O = 1 * r.value;
    (x === true || Array.isArray(m) === false) && (m = []);
    const Z = m.length;
    m.length = e.value;
    for (let B = e.value - 1; B >= Z; B--) m[B] = O;
    const oe = Math.floor((e.value - 1) / kn);
    h = [];
    for (let B = 0; B <= oe; B++) {
      let M = 0;
      const ee = Math.min((B + 1) * kn, e.value);
      for (let V = B * kn; V < ee; V++) M += m[V];
      h.push(M);
    }
    s = -1, c = void 0, g.value = Nr(h, m, 0, b.value.from), _.value = Nr(h, m, b.value.to, e.value), R >= 0 ? (A(b.value.from), Qe(() => {
      L(R);
    })) : le();
  }
  function Q(R) {
    if (R === void 0 && typeof window < "u") {
      const M = t();
      M != null && M.nodeType !== 8 && (R = uu(M, n(), T.value, y.value, a.virtualScrollHorizontal, u.lang.rtl, a.virtualScrollStickySizeStart, a.virtualScrollStickySizeEnd).scrollViewSize);
    }
    f = R;
    const x = parseFloat(a.virtualScrollSliceRatioBefore) || 0, O = parseFloat(a.virtualScrollSliceRatioAfter) || 0, Z = 1 + x + O, oe = R === void 0 || R <= 0 ? 1 : Math.ceil(R / r.value), B = Math.max(1, oe, Math.ceil((a.virtualScrollSliceSize > 0 ? a.virtualScrollSliceSize : 10) / Z));
    w.value = { total: Math.ceil(B * Z), start: Math.ceil(B * x), center: Math.ceil(B * (0.5 + x)), end: Math.ceil(B * (1 + x)), view: oe };
  }
  function Y(R, x) {
    const O = a.virtualScrollHorizontal === true ? "width" : "height", Z = { ["--q-virtual-scroll-item-" + O]: r.value + "px" };
    return [R === "tbody" ? d(R, { class: "q-virtual-scroll__padding", key: "before", ref: T }, [d("tr", [d("td", { style: { [O]: `${g.value}px`, ...Z }, colspan: C.value })])]) : d(R, { class: "q-virtual-scroll__padding", key: "before", ref: T, style: { [O]: `${g.value}px`, ...Z } }), d(R, { class: "q-virtual-scroll__content", key: "content", ref: p, tabindex: -1 }, x.flat()), R === "tbody" ? d(R, { class: "q-virtual-scroll__padding", key: "after", ref: y }, [d("tr", [d("td", { style: { [O]: `${_.value}px`, ...Z }, colspan: C.value })])]) : d(R, { class: "q-virtual-scroll__padding", key: "after", ref: y, style: { [O]: `${_.value}px`, ...Z } })];
  }
  function X(R) {
    s !== R && (a.onVirtualScroll !== void 0 && o("virtualScroll", { index: R, from: b.value.from, to: b.value.to - 1, direction: R < s ? "decrease" : "increase", ref: i }), s = R);
  }
  Q();
  const le = Ar(H, u.platform.is.ios === true ? 120 : 35);
  ti(() => {
    Q();
  });
  let ye = false;
  return Dn(() => {
    ye = true;
  }), kl(() => {
    if (ye !== true) return;
    const R = t();
    c !== void 0 && R !== void 0 && R !== null && R.nodeType !== 8 ? Ud(R, c, a.virtualScrollHorizontal, u.lang.rtl) : L(s);
  }), __QUASAR_SSR__ || We(() => {
    le.cancel();
  }), Object.assign(i, { scrollTo: L, reset: j, refresh: $ }), { virtualScrollSliceRange: b, virtualScrollSliceSizeComputed: w, setVirtualScrollSize: Q, onVirtualScrollEvt: le, localResetVirtualScroll: U, padVirtualScroll: Y, scrollTo: L, reset: j, refresh: $ };
}
var Qd = (e) => ["add", "add-unique", "toggle"].includes(e), Z1 = ".*+?^${}()|[]\\", J1 = Object.keys(pi);
function su(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (r) => r !== null && typeof r == "object" && n in r ? r[n] : r;
}
var e_ = he({ name: "QSelect", inheritAttrs: false, props: { ...Gu, ...xn, ...pi, modelValue: { required: true }, multiple: Boolean, displayValue: [String, Number], displayValueHtml: Boolean, dropdownIcon: String, options: { type: Array, default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], hideSelected: Boolean, hideDropdownIcon: Boolean, fillInput: Boolean, maxValues: [Number, String], optionsDense: Boolean, optionsDark: { type: Boolean, default: null }, optionsSelectedClass: String, optionsHtml: Boolean, optionsCover: Boolean, menuShrink: Boolean, menuAnchor: String, menuSelf: String, menuOffset: Array, popupContentClass: String, popupContentStyle: [String, Array, Object], popupNoRouteDismiss: Boolean, useInput: Boolean, useChips: Boolean, newValueMode: { type: String, validator: Qd }, mapOptions: Boolean, emitValue: Boolean, disableTabSelection: Boolean, inputDebounce: { type: [Number, String], default: 500 }, inputClass: [Array, String, Object], inputStyle: [Array, String, Object], tabindex: { type: [String, Number], default: 0 }, autocomplete: String, transitionShow: {}, transitionHide: {}, transitionDuration: {}, behavior: { type: String, validator: (e) => ["default", "menu", "dialog"].includes(e), default: "default" }, virtualScrollItemSize: Gu.virtualScrollItemSize.type, onNewValue: Function, onFilter: Function }, emits: [...yi, "add", "remove", "inputValue", "keyup", "keypress", "keydown", "popupShow", "popupHide", "filterAbort"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = W(false), o = W(false), i = W(-1), u = W(""), c = W(false), s = W(false);
  let f = null, h = null, m, g, _, w = null, T, y, p, b;
  const C = W(null), P = W(null), F = W(null), j = W(null), $ = W(null), L = Bs(e), H = Bh(ce), q = v(() => Array.isArray(e.options) ? e.options.length : 0), A = v(() => e.virtualScrollItemSize === void 0 ? e.optionsDense === true ? 24 : 48 : e.virtualScrollItemSize), { virtualScrollSliceRange: k, virtualScrollSliceSizeComputed: U, localResetVirtualScroll: Q, padVirtualScroll: Y, onVirtualScrollEvt: X, scrollTo: le, setVirtualScrollSize: ye } = Uh({ virtualScrollLength: q, getVirtualScrollTarget: Ut, getVirtualScrollEl: Ct, virtualScrollItemSizeComputed: A }), R = _i(), x = v(() => {
    const J = e.mapOptions === true && e.multiple !== true, Ae = e.modelValue !== void 0 && (e.modelValue !== null || J === true) ? e.multiple === true && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
    if (e.mapOptions === true && Array.isArray(e.options) === true) {
      const Pe = e.mapOptions === true && m !== void 0 ? m : [], tt = Ae.map((gt) => ae(gt, Pe));
      return e.modelValue === null && J === true ? tt.filter((gt) => gt !== null) : tt;
    }
    return Ae;
  }), O = v(() => {
    const J = {};
    return J1.forEach((Ae) => {
      const Pe = e[Ae];
      Pe !== void 0 && (J[Ae] = Pe);
    }), J;
  }), Z = v(() => e.optionsDark === null ? R.isDark.value : e.optionsDark), oe = v(() => Xl(x.value)), B = v(() => {
    let J = "q-field__input q-placeholder col";
    return e.hideSelected === true || x.value.length === 0 ? [J, e.inputClass] : (J += " q-field__input--padding", e.inputClass === void 0 ? J : [J, e.inputClass]);
  }), M = v(() => (e.virtualScrollHorizontal === true ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")), ee = v(() => q.value === 0), V = v(() => x.value.map((J) => re.value(J)).join(", ")), ne = v(() => e.displayValue !== void 0 ? e.displayValue : V.value), pe = v(() => e.optionsHtml === true ? () => true : (J) => (J == null ? void 0 : J.html) === true), S = v(() => e.displayValueHtml === true || e.displayValue === void 0 && (e.optionsHtml === true || x.value.some(pe.value))), E = v(() => R.focused.value === true ? e.tabindex : -1), z = v(() => {
    const J = { tabindex: e.tabindex, role: "combobox", "aria-label": e.label, "aria-readonly": e.readonly === true ? "true" : "false", "aria-autocomplete": e.useInput === true ? "list" : "none", "aria-expanded": a.value === true ? "true" : "false", "aria-controls": `${R.targetUid.value}_lb` };
    return i.value >= 0 && (J["aria-activedescendant"] = `${R.targetUid.value}_${i.value}`), J;
  }), te = v(() => ({ id: `${R.targetUid.value}_lb`, role: "listbox", "aria-multiselectable": e.multiple === true ? "true" : "false" })), D = v(() => x.value.map((J, Ae) => ({ index: Ae, opt: J, html: pe.value(J), selected: true, removeAtIndex: Me, toggleOption: De, tabindex: E.value }))), I = v(() => {
    if (q.value === 0) return [];
    const { from: J, to: Ae } = k.value;
    return e.options.slice(J, Ae).map((Pe, tt) => {
      const gt = K.value(Pe) === true, vt = _e2(Pe) === true, Nt = J + tt, $t = { clickable: true, active: vt, activeClass: fe.value, manualFocus: true, focused: false, disable: gt, tabindex: -1, dense: e.optionsDense, dark: Z.value, role: "option", "aria-selected": vt === true ? "true" : "false", id: `${R.targetUid.value}_${Nt}`, onClick: () => {
        De(Pe);
      } };
      return gt !== true && (i.value === Nt && ($t.focused = true), l.platform.is.desktop === true && ($t.onMousemove = () => {
        a.value === true && ue(Nt);
      })), { index: Nt, opt: Pe, html: pe.value(Pe), label: re.value(Pe), selected: $t.active, focused: $t.focused, toggleOption: De, setOptionIndex: ue, itemProps: $t };
    });
  }), se = v(() => e.dropdownIcon !== void 0 ? e.dropdownIcon : l.iconSet.arrow.dropdown), me = v(() => e.optionsCover === false && e.outlined !== true && e.standout !== true && e.borderless !== true && e.rounded !== true), fe = v(() => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : ""), de = v(() => su(e.optionValue, "value")), re = v(() => su(e.optionLabel, "label")), K = v(() => su(e.optionDisable, "disable")), ie = v(() => x.value.map(de.value)), we = v(() => {
    const J = { onInput: ce, onChange: H, onKeydown: it, onKeyup: Re, onKeypress: Xe, onFocus: Ce, onClick(Ae) {
      g === true && wt(Ae);
    } };
    return J.onCompositionstart = J.onCompositionupdate = J.onCompositionend = H, J;
  });
  ge(x, (J) => {
    m = J, e.useInput === true && e.fillInput === true && e.multiple !== true && R.innerLoading.value !== true && (o.value !== true && a.value !== true || oe.value !== true) && (_ !== true && dn(), (o.value === true || a.value === true) && Be(""));
  }, { immediate: true }), ge(() => e.fillInput, dn), ge(a, Si), ge(q, Vg);
  function ke(J) {
    return e.emitValue === true ? de.value(J) : J;
  }
  function Te(J) {
    if (J !== -1 && J < x.value.length) if (e.multiple === true) {
      const Ae = e.modelValue.slice();
      n("remove", { index: J, value: Ae.splice(J, 1)[0] }), n("update:modelValue", Ae);
    } else n("update:modelValue", null);
  }
  function Me(J) {
    Te(J), R.focus();
  }
  function He(J, Ae) {
    const Pe = ke(J);
    if (e.multiple !== true) {
      e.fillInput === true && Fe(re.value(J), true, true), n("update:modelValue", Pe);
      return;
    }
    if (x.value.length === 0) {
      n("add", { index: 0, value: Pe }), n("update:modelValue", e.multiple === true ? [Pe] : Pe);
      return;
    }
    if (Ae === true && _e2(J) === true || e.maxValues !== void 0 && e.modelValue.length >= e.maxValues) return;
    const tt = e.modelValue.slice();
    n("add", { index: tt.length, value: Pe }), tt.push(Pe), n("update:modelValue", tt);
  }
  function De(J, Ae) {
    var _a3;
    if (R.editable.value !== true || J === void 0 || K.value(J) === true) return;
    const Pe = de.value(J);
    if (e.multiple !== true) {
      Ae !== true && (Fe(e.fillInput === true ? re.value(J) : "", true, true), rt()), (_a3 = P.value) == null ? void 0 : _a3.focus(), (x.value.length === 0 || qn(de.value(x.value[0]), Pe) !== true) && n("update:modelValue", e.emitValue === true ? Pe : J);
      return;
    }
    if ((g !== true || c.value === true) && R.focus(), Ce(), x.value.length === 0) {
      const vt = e.emitValue === true ? Pe : J;
      n("add", { index: 0, value: vt }), n("update:modelValue", e.multiple === true ? [vt] : vt);
      return;
    }
    const tt = e.modelValue.slice(), gt = ie.value.findIndex((vt) => qn(vt, Pe));
    if (gt !== -1) n("remove", { index: gt, value: tt.splice(gt, 1)[0] });
    else {
      if (e.maxValues !== void 0 && tt.length >= e.maxValues) return;
      const vt = e.emitValue === true ? Pe : J;
      n("add", { index: tt.length, value: vt }), tt.push(vt);
    }
    n("update:modelValue", tt);
  }
  function ue(J) {
    if (l.platform.is.desktop !== true) return;
    const Ae = J !== -1 && J < q.value ? J : -1;
    i.value !== Ae && (i.value = Ae);
  }
  function be(J = 1, Ae) {
    if (a.value === true) {
      let Pe = i.value;
      do
        Pe = Ro(Pe + J, -1, q.value - 1);
      while (Pe !== -1 && Pe !== i.value && K.value(e.options[Pe]) === true);
      i.value !== Pe && (ue(Pe), le(Pe), Ae !== true && e.useInput === true && e.fillInput === true && Se(Pe >= 0 ? re.value(e.options[Pe]) : T, true));
    }
  }
  function ae(J, Ae) {
    const Pe = (tt) => qn(de.value(tt), J);
    return e.options.find(Pe) || Ae.find(Pe) || J;
  }
  function _e2(J) {
    const Ae = de.value(J);
    return ie.value.find((Pe) => qn(Pe, Ae)) !== void 0;
  }
  function Ce(J) {
    e.useInput === true && P.value !== null && (J === void 0 || P.value === J.target && J.target.value === V.value) && P.value.select();
  }
  function Oe(J) {
    yn(J, 27) === true && a.value === true && (wt(J), rt(), dn()), n("keyup", J);
  }
  function Re(J) {
    const { value: Ae } = J.target;
    if (J.keyCode !== void 0) {
      Oe(J);
      return;
    }
    if (J.target.value = "", f !== null && (clearTimeout(f), f = null), h !== null && (clearTimeout(h), h = null), dn(), typeof Ae == "string" && Ae.length !== 0) {
      const Pe = Ae.toLocaleLowerCase(), tt = (vt) => {
        const Nt = e.options.find(($t) => String(vt.value($t)).toLocaleLowerCase() === Pe);
        return Nt === void 0 ? false : (x.value.indexOf(Nt) === -1 ? De(Nt) : rt(), true);
      }, gt = (vt) => {
        tt(de) !== true && vt !== true && tt(re) !== true && Be(Ae, true, () => gt(true));
      };
      gt();
    } else R.clearValue(J);
  }
  function Xe(J) {
    n("keypress", J);
  }
  function it(J) {
    if (n("keydown", J), Zl(J) === true) return;
    const Ae = u.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0), Pe = J.shiftKey !== true && e.disableTabSelection !== true && e.multiple !== true && (i.value !== -1 || Ae === true);
    if (J.keyCode === 27) {
      Dt(J);
      return;
    }
    if (J.keyCode === 9 && Pe === false) {
      Le();
      return;
    }
    if (J.target === void 0 || J.target.id !== R.targetUid.value || R.editable.value !== true) return;
    if (J.keyCode === 40 && R.innerLoading.value !== true && a.value === false) {
      je(J), ze();
      return;
    }
    if (J.keyCode === 8 && (e.useChips === true || e.clearable === true) && e.hideSelected !== true && u.value.length === 0) {
      e.multiple === true && Array.isArray(e.modelValue) === true ? Te(e.modelValue.length - 1) : e.multiple !== true && e.modelValue !== null && n("update:modelValue", null);
      return;
    }
    (J.keyCode === 35 || J.keyCode === 36) && (typeof u.value != "string" || u.value.length === 0) && (je(J), i.value = -1, be(J.keyCode === 36 ? 1 : -1, e.multiple)), (J.keyCode === 33 || J.keyCode === 34) && U.value !== void 0 && (je(J), i.value = Math.max(-1, Math.min(q.value, i.value + (J.keyCode === 33 ? -1 : 1) * U.value.view)), be(J.keyCode === 33 ? 1 : -1, e.multiple)), (J.keyCode === 38 || J.keyCode === 40) && (je(J), be(J.keyCode === 38 ? -1 : 1, e.multiple));
    const tt = q.value;
    if ((p === void 0 || b < Date.now()) && (p = ""), tt > 0 && e.useInput !== true && J.key !== void 0 && J.key.length === 1 && J.altKey === false && J.ctrlKey === false && J.metaKey === false && (J.keyCode !== 32 || p.length !== 0)) {
      a.value !== true && ze(J);
      const gt = J.key.toLocaleLowerCase(), vt = p.length === 1 && p[0] === gt;
      b = Date.now() + 1500, vt === false && (je(J), p += gt);
      const Nt = new RegExp("^" + p.split("").map((Ci) => Z1.indexOf(Ci) !== -1 ? "\\" + Ci : Ci).join(".*"), "i");
      let $t = i.value;
      if (vt === true || $t < 0 || Nt.test(re.value(e.options[$t])) !== true) do
        $t = Ro($t + 1, -1, tt - 1);
      while ($t !== i.value && (K.value(e.options[$t]) === true || Nt.test(re.value(e.options[$t])) !== true));
      i.value !== $t && Qe(() => {
        ue($t), le($t), $t >= 0 && e.useInput === true && e.fillInput === true && Se(re.value(e.options[$t]), true);
      });
      return;
    }
    if (!(J.keyCode !== 13 && (J.keyCode !== 32 || e.useInput === true || p !== "") && (J.keyCode !== 9 || Pe === false))) {
      if (J.keyCode !== 9 && je(J), i.value !== -1 && i.value < tt) {
        De(e.options[i.value]);
        return;
      }
      if (Ae === true) {
        const gt = (vt, Nt) => {
          var _a3;
          if (Nt) {
            if (Qd(Nt) !== true) return;
          } else Nt = e.newValueMode;
          if (Fe("", e.multiple !== true, true), vt == null) return;
          (Nt === "toggle" ? De : He)(vt, Nt === "add-unique"), e.multiple !== true && ((_a3 = P.value) == null ? void 0 : _a3.focus(), rt());
        };
        if (e.onNewValue !== void 0 ? n("newValue", u.value, gt) : gt(u.value), e.multiple !== true) return;
      }
      a.value === true ? Le() : R.innerLoading.value !== true && ze();
    }
  }
  function Ct() {
    return g === true ? $.value : F.value !== null && F.value.contentEl !== null ? F.value.contentEl : void 0;
  }
  function Ut() {
    return Ct();
  }
  function nl() {
    return e.hideSelected === true ? [] : t["selected-item"] !== void 0 ? D.value.map((J) => t["selected-item"](J)).slice() : t.selected !== void 0 ? [].concat(t.selected()) : e.useChips === true ? D.value.map((J, Ae) => d(Xm, { key: "option-" + Ae, removable: R.editable.value === true && K.value(J.opt) !== true, dense: true, textColor: e.color, tabindex: E.value, onRemove() {
      J.removeAtIndex(Ae);
    } }, () => d("span", { class: "ellipsis", [J.html === true ? "innerHTML" : "textContent"]: re.value(J.opt) }))) : [d("span", { class: "ellipsis", [S.value === true ? "innerHTML" : "textContent"]: ne.value })];
  }
  function an() {
    if (ee.value === true) return t["no-option"] !== void 0 ? t["no-option"]({ inputValue: u.value }) : void 0;
    const J = t.option !== void 0 ? t.option : (Pe) => d(qr, { key: Pe.index, ...Pe.itemProps }, () => d(hn, () => d(Wu, () => d("span", { [Pe.html === true ? "innerHTML" : "textContent"]: Pe.label }))));
    let Ae = Y("div", I.value.map(J));
    return t["before-options"] !== void 0 && (Ae = t["before-options"]().concat(Ae)), qt(t["after-options"], Ae);
  }
  function zn(J, Ae) {
    const Pe = Ae === true ? { ...z.value, ...R.splitAttrs.attributes.value } : void 0, tt = { ref: Ae === true ? P : void 0, key: "i_t", class: B.value, style: e.inputStyle, value: u.value !== void 0 ? u.value : "", type: "search", ...Pe, id: Ae === true ? R.targetUid.value : void 0, maxlength: e.maxlength, autocomplete: e.autocomplete, "data-autofocus": J === true || e.autofocus === true || void 0, disabled: e.disable === true, readonly: e.readonly === true, ...we.value };
    return J !== true && g === true && (Array.isArray(tt.class) === true ? tt.class = [...tt.class, "no-pointer-events"] : tt.class += " no-pointer-events"), d("input", tt);
  }
  function ce(J) {
    f !== null && (clearTimeout(f), f = null), h !== null && (clearTimeout(h), h = null), !(J && J.target && J.target.qComposing === true) && (Se(J.target.value || ""), _ = true, T = u.value, R.focused.value !== true && (g !== true || c.value === true) && R.focus(), e.onFilter !== void 0 && (f = setTimeout(() => {
      f = null, Be(u.value);
    }, e.inputDebounce)));
  }
  function Se(J, Ae) {
    u.value !== J && (u.value = J, Ae === true || e.inputDebounce === 0 || e.inputDebounce === "0" ? n("inputValue", J) : h = setTimeout(() => {
      h = null, n("inputValue", J);
    }, e.inputDebounce));
  }
  function Fe(J, Ae, Pe) {
    _ = Pe !== true, e.useInput === true && (Se(J, true), (Ae === true || Pe !== true) && (T = J), Ae !== true && Be(J));
  }
  function Be(J, Ae, Pe) {
    if (e.onFilter === void 0 || Ae !== true && R.focused.value !== true) return;
    R.innerLoading.value === true ? n("filterAbort") : (R.innerLoading.value = true, s.value = true), J !== "" && e.multiple !== true && x.value.length !== 0 && _ !== true && J === re.value(x.value[0]) && (J = "");
    const tt = setTimeout(() => {
      a.value === true && (a.value = false);
    }, 10);
    w !== null && clearTimeout(w), w = tt, n("filter", J, (gt, vt) => {
      (Ae === true || R.focused.value === true) && w === tt && (clearTimeout(w), typeof gt == "function" && gt(), s.value = false, Qe(() => {
        R.innerLoading.value = false, R.editable.value === true && (Ae === true ? a.value === true && rt() : a.value === true ? Si(true) : a.value = true), typeof vt == "function" && Qe(() => {
          vt(r);
        }), typeof Pe == "function" && Qe(() => {
          Pe(r);
        });
      }));
    }, () => {
      R.focused.value === true && w === tt && (clearTimeout(w), R.innerLoading.value = false, s.value = false), a.value === true && (a.value = false);
    });
  }
  function Ue() {
    return d(hi, { ref: F, class: M.value, style: e.popupContentStyle, modelValue: a.value, fit: e.menuShrink !== true, cover: e.optionsCover === true && ee.value !== true && e.useInput !== true, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, dark: Z.value, noParentEvent: true, noRefocus: true, noFocus: true, noRouteDismiss: e.popupNoRouteDismiss, square: me.value, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, separateClosePopup: true, ...te.value, onScrollPassive: X, onBeforeShow: rc, onBeforeHide: pt, onShow: ht }, an);
  }
  function pt(J) {
    ac(J), Le();
  }
  function ht() {
    ye();
  }
  function N(J) {
    var _a3;
    wt(J), (_a3 = P.value) == null ? void 0 : _a3.focus(), c.value = true, window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
  }
  function G(J) {
    wt(J), Qe(() => {
      c.value = false;
    });
  }
  function ve() {
    const J = [d(x1, { class: `col-auto ${R.fieldClass.value}`, ...O.value, for: R.targetUid.value, dark: Z.value, square: true, loading: s.value, itemAligned: false, filled: true, stackLabel: u.value.length !== 0, ...R.splitAttrs.listeners.value, onFocus: N, onBlur: G }, { ...t, rawControl: () => R.getControl(true), before: void 0, after: void 0 })];
    return a.value === true && J.push(d("div", { ref: $, class: M.value + " scroll", style: e.popupContentStyle, ...te.value, onClick: Dt, onScrollPassive: X }, an())), d(bi, { ref: j, modelValue: o.value, position: e.useInput === true ? "top" : void 0, transitionShow: y, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, noRouteDismiss: e.popupNoRouteDismiss, onBeforeShow: rc, onBeforeHide: qe, onHide: Ee, onShow: Ze }, () => d("div", { class: "q-select__dialog" + (Z.value === true ? " q-select__dialog--dark q-dark" : "") + (c.value === true ? " q-select__dialog--focused" : "") }, J));
  }
  function qe(J) {
    ac(J), j.value !== null && j.value.__updateRefocusTarget(R.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")), R.focused.value = false;
  }
  function Ee(J) {
    rt(), R.focused.value === false && n("blur", J), dn();
  }
  function Ze() {
    const J = document.activeElement;
    (J === null || J.id !== R.targetUid.value) && P.value !== null && P.value !== J && P.value.focus(), ye();
  }
  function Le() {
    o.value !== true && (i.value = -1, a.value === true && (a.value = false), R.focused.value === false && (w !== null && (clearTimeout(w), w = null), R.innerLoading.value === true && (n("filterAbort"), R.innerLoading.value = false, s.value = false)));
  }
  function ze(J) {
    R.editable.value === true && (g === true ? (R.onControlFocusin(J), o.value = true, Qe(() => {
      R.focus();
    })) : R.focus(), e.onFilter !== void 0 ? Be(u.value) : (ee.value !== true || t["no-option"] !== void 0) && (a.value = true));
  }
  function rt() {
    o.value = false, Le();
  }
  function dn() {
    e.useInput === true && Fe(e.multiple !== true && e.fillInput === true && x.value.length !== 0 && re.value(x.value[0]) || "", true, true);
  }
  function Si(J) {
    let Ae = -1;
    if (J === true) {
      if (x.value.length !== 0) {
        const Pe = de.value(x.value[0]);
        Ae = e.options.findIndex((tt) => qn(de.value(tt), Pe));
      }
      Q(Ae);
    }
    ue(Ae);
  }
  function Vg(J, Ae) {
    a.value === true && R.innerLoading.value === false && (Q(-1, true), Qe(() => {
      a.value === true && R.innerLoading.value === false && (J > Ae ? Q() : Si(true));
    }));
  }
  function lc() {
    o.value === false && F.value !== null && F.value.updatePosition();
  }
  function rc(J) {
    J !== void 0 && wt(J), n("popupShow", J), R.hasPopupOpen = true, R.onControlFocusin(J);
  }
  function ac(J) {
    J !== void 0 && wt(J), n("popupHide", J), R.hasPopupOpen = false, R.onControlFocusout(J);
  }
  function oc() {
    g = l.platform.is.mobile !== true && e.behavior !== "dialog" ? false : e.behavior !== "menu" && (e.useInput === true ? t["no-option"] !== void 0 || e.onFilter !== void 0 || ee.value === false : true), y = l.platform.is.ios === true && g === true && e.useInput === true ? "fade" : e.transitionShow;
  }
  return Rr(oc), ni(lc), oc(), We(() => {
    f !== null && clearTimeout(f), h !== null && clearTimeout(h);
  }), Object.assign(r, { showPopup: ze, hidePopup: rt, removeAtIndex: Te, add: He, toggleOption: De, getOptionIndex: () => i.value, setOptionIndex: ue, moveOptionSelection: be, filter: Be, updateMenuPosition: lc, updateInputValue: Fe, isOptionSelected: _e2, getEmittingOptionValue: ke, isOptionDisabled: (...J) => K.value.apply(null, J) === true, getOptionValue: (...J) => de.value.apply(null, J), getOptionLabel: (...J) => re.value.apply(null, J) }), Object.assign(R, { innerValue: x, fieldClass: v(() => `q-select q-field--auto-height q-select--with${e.useInput !== true ? "out" : ""}-input q-select--with${e.useChips !== true ? "out" : ""}-chips q-select--${e.multiple === true ? "multiple" : "single"}`), inputRef: C, targetRef: P, hasValue: oe, showPopup: ze, floatingLabel: v(() => e.hideSelected !== true && oe.value === true || typeof u.value == "number" || u.value.length !== 0 || Xl(e.displayValue)), getControlChild: () => {
    if (R.editable.value !== false && (o.value === true || ee.value !== true || t["no-option"] !== void 0)) return g === true ? ve() : Ue();
    R.hasPopupOpen === true && (R.hasPopupOpen = false);
  }, controlEvents: { onFocusin(J) {
    R.onControlFocusin(J);
  }, onFocusout(J) {
    R.onControlFocusout(J, () => {
      dn(), Le();
    });
  }, onClick(J) {
    var _a3;
    if (Dt(J), g !== true && a.value === true) {
      Le(), (_a3 = P.value) == null ? void 0 : _a3.focus();
      return;
    }
    ze(J);
  } }, getControl: (J) => {
    const Ae = nl(), Pe = J === true || o.value !== true || g !== true;
    if (e.useInput === true) Ae.push(zn(J, Pe));
    else if (R.editable.value === true) {
      const gt = Pe === true ? z.value : void 0;
      Ae.push(d("input", { ref: Pe === true ? P : void 0, key: "d_t", class: "q-select__focus-target", id: Pe === true ? R.targetUid.value : void 0, value: ne.value, readonly: true, "data-autofocus": J === true || e.autofocus === true || void 0, ...gt, onKeydown: it, onKeyup: Oe, onKeypress: Xe })), Pe === true && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && Ae.push(d("input", { class: "q-select__autocomplete-input", autocomplete: e.autocomplete, tabindex: -1, onKeyup: Re }));
    }
    if (L.value !== void 0 && e.disable !== true && ie.value.length !== 0) {
      const gt = ie.value.map((vt) => d("option", { value: vt, selected: true }));
      Ae.push(d("select", { class: "hidden", name: L.value, multiple: e.multiple }, gt));
    }
    const tt = e.useInput === true || Pe !== true ? void 0 : R.splitAttrs.attributes.value;
    return d("div", { class: "q-field__native row items-center", ...tt, ...R.splitAttrs.listeners.value }, Ae);
  }, getInnerAppend: () => e.loading !== true && s.value !== true && e.hideDropdownIcon !== true ? [d(et, { class: "q-select__dropdown-icon" + (a.value === true ? " rotate-180" : ""), name: se.value })] : null }), wi(R);
} }), t_ = ["text", "rect", "circle", "QBtn", "QBadge", "QChip", "QToolbar", "QCheckbox", "QRadio", "QToggle", "QSlider", "QRange", "QInput", "QAvatar"], n_ = ["wave", "pulse", "pulse-x", "pulse-y", "fade", "blink", "none"];
he({ name: "QSkeleton", props: { ...nt, tag: { type: String, default: "div" }, type: { type: String, validator: (e) => t_.includes(e), default: "rect" }, animation: { type: String, validator: (e) => n_.includes(e), default: "wave" }, animationSpeed: { type: [String, Number], default: 1500 }, square: Boolean, bordered: Boolean, size: String, width: String, height: String }, setup(e, { slots: t }) {
  const n = xe(), r = lt(e, n.proxy.$q), l = v(() => {
    const o = e.size !== void 0 ? [e.size, e.size] : [e.width, e.height];
    return { "--q-skeleton-speed": `${e.animationSpeed}ms`, width: o[0], height: o[1] };
  }), a = v(() => `q-skeleton q-skeleton--${r.value === true ? "dark" : "light"} q-skeleton--type-${e.type}` + (e.animation !== "none" ? ` q-skeleton--anim q-skeleton--anim-${e.animation}` : "") + (e.square === true ? " q-skeleton--square" : "") + (e.bordered === true ? " q-skeleton--bordered" : ""));
  return () => d(e.tag, { class: a.value, style: l.value }, $e(t.default));
} });
var Kd = [["left", "center", "start", "width"], ["right", "center", "end", "width"], ["top", "start", "center", "height"], ["bottom", "end", "center", "height"]];
he({ name: "QSlideItem", props: { ...nt, leftColor: String, rightColor: String, topColor: String, bottomColor: String, onSlide: Function }, emits: ["action", "top", "right", "bottom", "left"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = lt(e, l), { getCache: o } = Fa(), i = W(null);
  let u = null, c = {}, s = {}, f = {};
  const h = v(() => l.lang.rtl === true ? { left: "right", right: "left" } : { left: "left", right: "right" }), m = v(() => "q-slide-item q-item-type overflow-hidden" + (a.value === true ? " q-slide-item--dark q-dark" : ""));
  function g() {
    i.value.style.transform = "translate(0,0)";
  }
  function _(T, y, p) {
    e.onSlide !== void 0 && n("slide", { side: T, ratio: y, isReset: p });
  }
  function w(T) {
    const y = i.value;
    if (T.isFirst) c = { dir: null, size: { left: 0, right: 0, top: 0, bottom: 0 }, scale: 0 }, y.classList.add("no-transition"), Kd.forEach((P) => {
      if (t[P[0]] !== void 0) {
        const F = f[P[0]];
        F.style.transform = "scale(1)", c.size[P[0]] = F.getBoundingClientRect()[P[3]];
      }
    }), c.axis = T.direction === "up" || T.direction === "down" ? "Y" : "X";
    else if (T.isFinal) {
      y.classList.remove("no-transition"), c.scale === 1 ? (y.style.transform = `translate${c.axis}(${c.dir * 100}%)`, u !== null && clearTimeout(u), u = setTimeout(() => {
        u = null, n(c.showing, { reset: g }), n("action", { side: c.showing, reset: g });
      }, 230)) : (y.style.transform = "translate(0,0)", _(c.showing, 0, true));
      return;
    } else T.direction = c.axis === "X" ? T.offset.x < 0 ? "left" : "right" : T.offset.y < 0 ? "up" : "down";
    if (t.left === void 0 && T.direction === h.value.right || t.right === void 0 && T.direction === h.value.left || t.top === void 0 && T.direction === "down" || t.bottom === void 0 && T.direction === "up") {
      y.style.transform = "translate(0,0)";
      return;
    }
    let p, b, C;
    c.axis === "X" ? (b = T.direction === "left" ? -1 : 1, p = b === 1 ? h.value.left : h.value.right, C = T.distance.x) : (b = T.direction === "up" ? -2 : 2, p = b === 2 ? "top" : "bottom", C = T.distance.y), !(c.dir !== null && Math.abs(b) !== Math.abs(c.dir)) && (c.dir !== b && (["left", "right", "top", "bottom"].forEach((P) => {
      s[P] && (s[P].style.visibility = p === P ? "visible" : "hidden");
    }), c.showing = p, c.dir = b), c.scale = Math.max(0, Math.min(1, (C - 40) / c.size[p])), y.style.transform = `translate${c.axis}(${C * b / Math.abs(b)}px)`, f[p].style.transform = `scale(${c.scale})`, _(p, c.scale, false));
  }
  return Rr(() => {
    s = {}, f = {};
  }), We(() => {
    u !== null && clearTimeout(u);
  }), Object.assign(r, { reset: g }), () => {
    const T = [], y = { left: t[h.value.right] !== void 0, right: t[h.value.left] !== void 0, up: t.bottom !== void 0, down: t.top !== void 0 }, p = Object.keys(y).filter((C) => y[C] === true);
    Kd.forEach((C) => {
      const P = C[0];
      t[P] !== void 0 && T.push(d("div", { key: P, ref: (F) => {
        s[P] = F;
      }, class: `q-slide-item__${P} absolute-full row no-wrap items-${C[1]} justify-${C[2]}` + (e[P + "Color"] !== void 0 ? ` bg-${e[P + "Color"]}` : "") }, [d("div", { ref: (F) => {
        f[P] = F;
      } }, t[P]())]));
    });
    const b = d("div", { key: `${p.length === 0 ? "only-" : ""} content`, ref: i, class: "q-slide-item__content" }, $e(t.default));
    return p.length === 0 ? T.push(b) : T.push(cn(b, o("dir#" + p.join(""), () => {
      const C = { prevent: true, stop: true, mouse: true };
      return p.forEach((P) => {
        C[P] = true;
      }), [[bn, w, void 0, C]];
    }))), d("div", { class: m.value }, T);
  };
} });
he({ name: "QSpace", setup() {
  const e = d("div", { class: "q-space" });
  return () => e;
} });
var l_ = '<g transform="matrix(1 0 0 -1 0 80)"><rect width="10" height="20" rx="3"><animate attributeName="height" begin="0s" dur="4.3s" values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="15" width="10" height="80" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" width="10" height="50" rx="3"><animate attributeName="height" begin="0s" dur="1.4s" values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="45" width="10" height="30" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear" repeatCount="indefinite"></animate></rect></g>';
he({ name: "QSpinnerAudio", props: Et, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 55 80", xmlns: "http://www.w3.org/2000/svg", innerHTML: l_ });
} });
var r_ = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"></animate></circle></g>';
he({ name: "QSpinnerBall", props: Et, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 57 57", xmlns: "http://www.w3.org/2000/svg", innerHTML: r_ });
} });
var a_ = '<rect y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="60" width="15" height="140" rx="6"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="90" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="120" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect>';
he({ name: "QSpinnerBars", props: Et, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 135 140", xmlns: "http://www.w3.org/2000/svg", innerHTML: a_ });
} });
var o_ = '<rect x="25" y="25" width="50" height="50" fill="none" stroke-width="4" stroke="currentColor"><animateTransform id="spinnerBox" attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" dur="0.5s" begin="rectBox.end"></animateTransform></rect><rect x="27" y="27" width="46" height="50" fill="currentColor"><animate id="rectBox" attributeName="height" begin="0s;spinnerBox.end" dur="1.3s" from="50" to="0" fill="freeze"></animate></rect>';
he({ name: "QSpinnerBox", props: Et, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: o_ });
} });
var i_ = '<circle cx="50" cy="50" r="48" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="currentColor"></circle><line stroke-linecap="round" stroke-width="4" stroke-miterlimit="10" stroke="currentColor" x1="50" y1="50" x2="85" y2="50.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2s" repeatCount="indefinite"></animateTransform></line><line stroke-linecap="round" stroke-width="4" stroke-miterlimit="10" stroke="currentColor" x1="50" y1="50" x2="49.5" y2="74"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="15s" repeatCount="indefinite"></animateTransform></line>';
he({ name: "QSpinnerClock", props: Et, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: i_ });
} });
var u_ = '<rect x="0" y="0" width="100" height="100" fill="none"></rect><path d="M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z" fill="currentColor"></path><circle cx="30" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;1;1" keyTimes="0;0.2;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="50" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.2;0.4;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="70" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.4;0.6;1" dur="1s" repeatCount="indefinite"></animate></circle>';
he({ name: "QSpinnerComment", props: Et, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: u_ });
} });
var s_ = '<rect x="0" y="0" width="100" height="100" fill="none"></rect><g transform="translate(25 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.1s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(25 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.7"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.3s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.2s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g>';
he({ name: "QSpinnerCube", props: Et, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: s_ });
} });
var c_ = '<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from=".5" to=".5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';
he({ name: "QSpinnerDots", props: Et, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg", innerHTML: c_ });
} });
var d_ = '<g transform="translate(20 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(50 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.1s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(80 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.2s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g>';
he({ name: "QSpinnerFacebook", props: Et, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid", innerHTML: d_ });
} });
var f_ = '<g transform="translate(-20,-20)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="90 50 50" to="0 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g><g transform="translate(20,20) rotate(15 50 50)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="90 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g>';
he({ name: "QSpinnerGears", props: Et, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: f_ });
} });
var v_ = '<circle cx="12.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="0s" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5"><animate attributeName="fill-opacity" begin="100ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="300ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="600ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="800ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="400ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="700ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="500ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="200ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';
he({ name: "QSpinnerGrid", props: Et, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 105 105", xmlns: "http://www.w3.org/2000/svg", innerHTML: v_ });
} });
var m_ = '<path d="M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.716-6.002 11.47-7.65 17.304-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.593-2.32 17.308 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0.7s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"></path>';
he({ name: "QSpinnerHearts", props: Et, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 140 64", xmlns: "http://www.w3.org/2000/svg", innerHTML: m_ });
} });
var h_ = '<g><path fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10" d="M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"></path><clipPath id="uil-hourglass-clip1"><rect x="15" y="20" width="70" height="25"><animate attributeName="height" from="25" to="0" dur="1s" repeatCount="indefinite" values="25;0;0" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="20" to="45" dur="1s" repeatCount="indefinite" values="20;45;45" keyTimes="0;0.5;1"></animate></rect></clipPath><clipPath id="uil-hourglass-clip2"><rect x="15" y="55" width="70" height="25"><animate attributeName="height" from="0" to="25" dur="1s" repeatCount="indefinite" values="0;25;25" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="80" to="55" dur="1s" repeatCount="indefinite" values="80;55;55" keyTimes="0;0.5;1"></animate></rect></clipPath><path d="M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z" clip-path="url(#uil-hourglass-clip1)" fill="currentColor"></path><path d="M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z" clip-path="url(#uil-hourglass-clip2)" fill="currentColor"></path><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" repeatCount="indefinite" dur="1s" values="0 50 50;0 50 50;180 50 50" keyTimes="0;0.7;1"></animateTransform></g>';
he({ name: "QSpinnerHourglass", props: Et, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: h_ });
} });
var g_ = '<path d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z" fill="none" stroke="currentColor" stroke-width="8" stroke-dasharray="10.691205342610678 10.691205342610678" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" from="0" to="21.382410685221355" begin="0" dur="2s" repeatCount="indefinite" fill="freeze"></animate></path>';
he({ name: "QSpinnerInfinity", props: Et, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: g_ });
} });
var b_ = '<g stroke-width="4" stroke-linecap="round"><line y1="17" y2="29" transform="translate(32,32) rotate(180)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(210)"><animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(240)"><animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(270)"><animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(300)"><animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(330)"><animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(0)"><animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(30)"><animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(60)"><animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(90)"><animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(120)"><animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(150)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line></g>';
he({ name: "QSpinnerIos", props: Et, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, stroke: "currentColor", fill: "currentColor", viewBox: "0 0 64 64", innerHTML: b_ });
} });
var p_ = '<circle cx="50" cy="50" r="44" fill="none" stroke-width="4" stroke-opacity=".5" stroke="currentColor"></circle><circle cx="8" cy="54" r="6" fill="currentColor" stroke-width="3" stroke="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 48" to="360 50 52" dur="2s" repeatCount="indefinite"></animateTransform></circle>';
he({ name: "QSpinnerOrbit", props: Et, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: p_ });
} });
var y_ = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g>';
he({ name: "QSpinnerOval", props: Et, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", innerHTML: y_ });
} });
var __ = '<path d="M0 50A50 50 0 0 1 50 0L50 50L0 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="0.8s" repeatCount="indefinite"></animateTransform></path><path d="M50 0A50 50 0 0 1 100 50L50 50L50 0" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1.6s" repeatCount="indefinite"></animateTransform></path><path d="M100 50A50 50 0 0 1 50 100L50 50L100 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2.4s" repeatCount="indefinite"></animateTransform></path><path d="M50 100A50 50 0 0 1 0 50L50 50L50 100" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="3.2s" repeatCount="indefinite"></animateTransform></path>';
he({ name: "QSpinnerPie", props: Et, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: __ });
} });
var w_ = '<g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g>';
he({ name: "QSpinnerPuff", props: Et, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 44 44", xmlns: "http://www.w3.org/2000/svg", innerHTML: w_ });
} });
var x_ = '<g transform="scale(0.55)"><circle cx="30" cy="150" r="30" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></circle><path d="M90,150h30c0-49.7-40.3-90-90-90v30C63.1,90,90,116.9,90,150z" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.1" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></path><path d="M150,150h30C180,67.2,112.8,0,30,0v30C96.3,30,150,83.7,150,150z" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.2" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></path></g>';
he({ name: "QSpinnerRadio", props: Et, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: x_ });
} });
var S_ = '<g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2"><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="8"><animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"></animate></circle></g>';
he({ name: "QSpinnerRings", props: Et, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 45 45", xmlns: "http://www.w3.org/2000/svg", innerHTML: S_ });
} });
var C_ = '<defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-color="currentColor" stop-opacity="0" offset="0%"></stop><stop stop-color="currentColor" stop-opacity=".631" offset="63.146%"></stop><stop stop-color="currentColor" offset="100%"></stop></linearGradient></defs><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></path><circle fill="currentColor" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></circle></g>';
he({ name: "QSpinnerTail", props: Et, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", innerHTML: C_ });
} });
he({ name: "QSplitter", props: { ...nt, modelValue: { type: Number, required: true }, reverse: Boolean, unit: { type: String, default: "%", validator: (e) => ["%", "px"].includes(e) }, limits: { type: Array, validator: (e) => e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number" ? false : e[0] >= 0 && e[0] <= e[1] }, emitImmediately: Boolean, horizontal: Boolean, disable: Boolean, beforeClass: [Array, String, Object], afterClass: [Array, String, Object], separatorClass: [Array, String, Object], separatorStyle: [Array, String, Object] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = lt(e, r), a = W(null), o = { before: W(null), after: W(null) }, i = v(() => `q-splitter no-wrap ${e.horizontal === true ? "q-splitter--horizontal column" : "q-splitter--vertical row"} q-splitter--${e.disable === true ? "disabled" : "workable"}` + (l.value === true ? " q-splitter--dark" : "")), u = v(() => e.horizontal === true ? "height" : "width"), c = v(() => e.reverse !== true ? "before" : "after"), s = v(() => e.limits !== void 0 ? e.limits : e.unit === "%" ? [10, 90] : [50, 1 / 0]);
  function f(C) {
    return (e.unit === "%" ? C : Math.round(C)) + e.unit;
  }
  const h = v(() => ({ [c.value]: { [u.value]: f(e.modelValue) } }));
  let m, g, _, w, T;
  function y(C) {
    if (C.isFirst === true) {
      const F = a.value.getBoundingClientRect()[u.value];
      m = e.horizontal === true ? "up" : "left", g = e.unit === "%" ? 100 : F, _ = Math.min(g, s.value[1], Math.max(s.value[0], e.modelValue)), w = (e.reverse !== true ? 1 : -1) * (e.horizontal === true ? 1 : r.lang.rtl === true ? -1 : 1) * (e.unit === "%" ? F === 0 ? 0 : 100 / F : 1), a.value.classList.add("q-splitter--active");
      return;
    }
    if (C.isFinal === true) {
      T !== e.modelValue && n("update:modelValue", T), a.value.classList.remove("q-splitter--active");
      return;
    }
    const P = _ + w * (C.direction === m ? -1 : 1) * C.distance[e.horizontal === true ? "y" : "x"];
    T = Math.min(g, s.value[1], Math.max(s.value[0], P)), o[c.value].value.style[u.value] = f(T), e.emitImmediately === true && e.modelValue !== T && n("update:modelValue", T);
  }
  const p = v(() => [[bn, y, void 0, { [e.horizontal === true ? "vertical" : "horizontal"]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
  function b(C, P) {
    C < P[0] ? n("update:modelValue", P[0]) : C > P[1] && n("update:modelValue", P[1]);
  }
  return ge(() => e.modelValue, (C) => {
    b(C, s.value);
  }), ge(() => e.limits, () => {
    Qe(() => {
      b(e.modelValue, s.value);
    });
  }), () => {
    const C = [d("div", { ref: o.before, class: ["q-splitter__panel q-splitter__before" + (e.reverse === true ? " col" : ""), e.beforeClass], style: h.value.before }, $e(t.before)), d("div", { class: ["q-splitter__separator", e.separatorClass], style: e.separatorStyle, "aria-disabled": e.disable === true ? "true" : void 0 }, [_n("div", { class: "q-splitter__separator-area absolute-full" }, $e(t.separator), "sep", e.disable !== true, () => p.value)]), d("div", { ref: o.after, class: ["q-splitter__panel q-splitter__after" + (e.reverse === true ? "" : " col"), e.afterClass], style: h.value.after }, $e(t.after))];
    return d("div", { class: i.value, ref: a }, qt(t.default, C));
  };
} });
var Qh = he({ name: "StepHeader", props: { stepper: {}, step: {}, goToPanel: Function }, setup(e, { attrs: t }) {
  const { proxy: { $q: n } } = xe(), r = W(null), l = v(() => e.stepper.modelValue === e.step.name), a = v(() => {
    const w = e.step.disable;
    return w === true || w === "";
  }), o = v(() => {
    const w = e.step.error;
    return w === true || w === "";
  }), i = v(() => {
    const w = e.step.done;
    return a.value === false && (w === true || w === "");
  }), u = v(() => {
    const w = e.step.headerNav, T = w === true || w === "" || w === void 0;
    return a.value === false && e.stepper.headerNav && T;
  }), c = v(() => e.step.prefix && (l.value === false || e.stepper.activeIcon === "none") && (o.value === false || e.stepper.errorIcon === "none") && (i.value === false || e.stepper.doneIcon === "none")), s = v(() => {
    const w = e.step.icon || e.stepper.inactiveIcon;
    if (l.value === true) {
      const T = e.step.activeIcon || e.stepper.activeIcon;
      return T === "none" ? w : T || n.iconSet.stepper.active;
    }
    if (o.value === true) {
      const T = e.step.errorIcon || e.stepper.errorIcon;
      return T === "none" ? w : T || n.iconSet.stepper.error;
    }
    if (a.value === false && i.value === true) {
      const T = e.step.doneIcon || e.stepper.doneIcon;
      return T === "none" ? w : T || n.iconSet.stepper.done;
    }
    return w;
  }), f = v(() => {
    const w = o.value === true ? e.step.errorColor || e.stepper.errorColor : void 0;
    if (l.value === true) {
      const T = e.step.activeColor || e.stepper.activeColor || e.step.color;
      return T !== void 0 ? T : w;
    }
    return w !== void 0 ? w : a.value === false && i.value === true ? e.step.doneColor || e.stepper.doneColor || e.step.color || e.stepper.inactiveColor : e.step.color || e.stepper.inactiveColor;
  }), h = v(() => "q-stepper__tab col-grow flex items-center no-wrap relative-position" + (f.value !== void 0 ? ` text-${f.value}` : "") + (o.value === true ? " q-stepper__tab--error q-stepper__tab--error-with-" + (c.value === true ? "prefix" : "icon") : "") + (l.value === true ? " q-stepper__tab--active" : "") + (i.value === true ? " q-stepper__tab--done" : "") + (u.value === true ? " q-stepper__tab--navigation q-focusable q-hoverable" : "") + (a.value === true ? " q-stepper__tab--disabled" : "")), m = v(() => e.stepper.headerNav !== true ? false : u.value);
  function g() {
    var _a3;
    (_a3 = r.value) == null ? void 0 : _a3.focus(), l.value === false && e.goToPanel(e.step.name);
  }
  function _(w) {
    w.keyCode === 13 && l.value === false && e.goToPanel(e.step.name);
  }
  return () => {
    const w = { class: h.value };
    u.value === true && (w.onClick = g, w.onKeyup = _, Object.assign(w, a.value === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: t.tabindex || 0 }));
    const T = [d("div", { class: "q-focus-helper", tabindex: -1, ref: r }), d("div", { class: "q-stepper__dot row flex-center q-stepper__line relative-position" }, [d("span", { class: "row flex-center" }, [c.value === true ? e.step.prefix : d(et, { name: s.value })])])];
    if (e.step.title !== void 0 && e.step.title !== null) {
      const y = [d("div", { class: "q-stepper__title" }, e.step.title)];
      e.step.caption !== void 0 && e.step.caption !== null && y.push(d("div", { class: "q-stepper__caption" }, e.step.caption)), T.push(d("div", { class: "q-stepper__label q-stepper__line relative-position" }, y));
    }
    return cn(d("div", w, T), [[fi, m.value]]);
  };
} });
function Kh(e) {
  return d("div", { class: "q-stepper__step-content" }, [d("div", { class: "q-stepper__step-inner" }, $e(e.default))]);
}
var Wd = { setup(e, { slots: t }) {
  return () => Kh(t);
} };
he({ name: "QStep", props: { ...Os, icon: String, color: String, title: { type: String, required: true }, caption: String, prefix: [String, Number], doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String, headerNav: { type: Boolean, default: true }, done: Boolean, error: Boolean, onScroll: [Function, Array] }, setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = Mt(fm, ot);
  if (l === ot) return console.error("QStep needs to be a child of QStepper"), ot;
  const { getCache: a } = Fa(), o = W(null), i = v(() => l.value.modelValue === e.name), u = v(() => r.platform.is.ios !== true && r.platform.is.chrome === true || i.value !== true || l.value.vertical !== true ? {} : { onScroll(f) {
    const { target: h } = f;
    h.scrollTop > 0 && (h.scrollTop = 0), e.onScroll !== void 0 && n("scroll", f);
  } }), c = v(() => typeof e.name == "string" || typeof e.name == "number" ? e.name : String(e.name));
  function s() {
    const f = l.value.vertical;
    return f === true && l.value.keepAlive === true ? d(xv, l.value.keepAliveProps.value, i.value === true ? [d(l.value.needsUniqueKeepAliveWrapper.value === true ? a(c.value, () => ({ ...Wd, name: c.value })) : Wd, { key: c.value }, t.default)] : void 0) : f !== true || i.value === true ? Kh(t) : void 0;
  }
  return () => d("div", { ref: o, class: "q-stepper__step", role: "tabpanel", ...u.value }, l.value.vertical === true ? [d(Qh, { stepper: l.value, step: e, goToPanel: l.value.goToPanel }), l.value.animated === true ? d(Ws, s) : s()] : [s()]);
} });
var k_ = /(-\w)/g;
function T_(e) {
  const t = {};
  for (const n in e) {
    const r = n.replace(k_, (l) => l[1].toUpperCase());
    t[r] = e[n];
  }
  return t;
}
he({ name: "QStepper", props: { ...nt, ...Vs, flat: Boolean, bordered: Boolean, alternativeLabels: Boolean, headerNav: Boolean, contracted: Boolean, headerClass: String, inactiveColor: String, inactiveIcon: String, doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String }, emits: Ds, setup(e, { slots: t }) {
  const n = xe(), r = lt(e, n.proxy.$q), { updatePanelsList: l, isValidPanelName: a, updatePanelIndex: o, getPanelContent: i, getPanels: u, panelDirectives: c, goToPanel: s, keepAliveProps: f, needsUniqueKeepAliveWrapper: h } = Is();
  gn(fm, v(() => ({ goToPanel: s, keepAliveProps: f, needsUniqueKeepAliveWrapper: h, ...e })));
  const m = v(() => `q-stepper q-stepper--${e.vertical === true ? "vertical" : "horizontal"}` + (e.flat === true ? " q-stepper--flat" : "") + (e.bordered === true ? " q-stepper--bordered" : "") + (r.value === true ? " q-stepper--dark q-dark" : "")), g = v(() => `q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels === true ? "alternative" : "standard"}-labels` + (e.flat === false || e.bordered === true ? " q-stepper__header--border" : "") + (e.contracted === true ? " q-stepper__header--contracted" : "") + (e.headerClass !== void 0 ? ` ${e.headerClass}` : ""));
  function _() {
    const w = $e(t.message, []);
    if (e.vertical === true) {
      a(e.modelValue) && o();
      const T = d("div", { class: "q-stepper__content" }, $e(t.default));
      return w === void 0 ? [T] : w.concat(T);
    }
    return [d("div", { class: g.value }, u().map((T) => {
      const y = T_(T.props);
      return d(Qh, { key: y.name, stepper: e, step: y, goToPanel: s });
    })), w, _n("div", { class: "q-stepper__content q-panel-parent" }, i(), "cont", e.swipeable, () => c.value)];
  }
  return () => (l(t), d("div", { class: m.value }, qt(t.navigation, _())));
} });
he({ name: "QStepperNavigation", setup(e, { slots: t }) {
  return () => d("div", { class: "q-stepper__nav" }, $e(t.default));
} });
var q_ = he({ name: "QTh", props: { props: Object, autoWidth: Boolean }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const r = xe(), { proxy: { $q: l } } = r, a = (o) => {
    n("click", o);
  };
  return () => {
    if (e.props === void 0) return d("th", { class: e.autoWidth === true ? "q-table--col-auto-width" : "", onClick: a }, $e(t.default));
    let o, i;
    const u = r.vnode.key;
    if (u) {
      if (o = e.props.colsMap[u], o === void 0) return;
    } else o = e.props.col;
    if (o.sortable === true) {
      const s = o.align === "right" ? "unshift" : "push";
      i = Pa(t.default, []), i[s](d(et, { class: o.__iconClass, name: l.iconSet.table.arrowUp }));
    } else i = $e(t.default);
    const c = { class: o.__thClass + (e.autoWidth === true ? " q-table--col-auto-width" : ""), style: o.headerStyle, onClick: (s) => {
      o.sortable === true && e.props.sort(o), a(s);
    } };
    return d("th", c, i);
  };
} });
function Wh(e, t) {
  return d("div", e, [d("table", { class: "q-table" }, t)]);
}
var M_ = { list: Vh, table: D1 }, E_ = ["list", "table", "__qtable"], R_ = he({ name: "QVirtualScroll", props: { ...Gu, type: { type: String, default: "list", validator: (e) => E_.includes(e) }, items: { type: Array, default: () => [] }, itemsFn: Function, itemsSize: Number, scrollTarget: er }, setup(e, { slots: t, attrs: n }) {
  let r;
  const l = W(null), a = v(() => e.itemsSize >= 0 && e.itemsFn !== void 0 ? parseInt(e.itemsSize, 10) : Array.isArray(e.items) ? e.items.length : 0), { virtualScrollSliceRange: o, localResetVirtualScroll: i, padVirtualScroll: u, onVirtualScrollEvt: c } = Uh({ virtualScrollLength: a, getVirtualScrollTarget: g, getVirtualScrollEl: m }), s = v(() => {
    if (a.value === 0) return [];
    const y = (p, b) => ({ index: o.value.from + b, item: p });
    return e.itemsFn === void 0 ? e.items.slice(o.value.from, o.value.to).map(y) : e.itemsFn(o.value.from, o.value.to - o.value.from).map(y);
  }), f = v(() => "q-virtual-scroll q-virtual-scroll" + (e.virtualScrollHorizontal === true ? "--horizontal" : "--vertical") + (e.scrollTarget !== void 0 ? "" : " scroll")), h = v(() => e.scrollTarget !== void 0 ? {} : { tabindex: 0 });
  ge(a, () => {
    i();
  }), ge(() => e.scrollTarget, () => {
    w(), _();
  });
  function m() {
    return l.value.$el || l.value;
  }
  function g() {
    return r;
  }
  function _() {
    r = In(m(), e.scrollTarget), r.addEventListener("scroll", c, ft.passive);
  }
  function w() {
    r !== void 0 && (r.removeEventListener("scroll", c, ft.passive), r = void 0);
  }
  function T() {
    let y = u(e.type === "list" ? "div" : "tbody", s.value.map(t.default));
    return t.before !== void 0 && (y = t.before().concat(y)), qt(t.after, y);
  }
  return ti(() => {
    i();
  }), ct(() => {
    _();
  }), kl(() => {
    _();
  }), Dn(() => {
    w();
  }), We(() => {
    w();
  }), () => {
    if (t.default === void 0) {
      console.error("QVirtualScroll: default scoped slot is required for rendering");
      return;
    }
    return e.type === "__qtable" ? Wh({ ref: l, class: "q-table__middle " + f.value }, T()) : d(M_[e.type], { ...n, ref: l, class: [n.class, f.value], ...h.value }, T);
  };
} });
function A_(e, t) {
  return new Date(e) - new Date(t);
}
var P_ = { sortMethod: Function, binaryStateSort: Boolean, columnSortOrder: { type: String, validator: (e) => e === "ad" || e === "da", default: "ad" } };
function $_(e, t, n, r) {
  const l = v(() => {
    const { sortBy: i } = t.value;
    return i && n.value.find((u) => u.name === i) || null;
  }), a = v(() => e.sortMethod !== void 0 ? e.sortMethod : (i, u, c) => {
    const s = n.value.find((m) => m.name === u);
    if (s === void 0 || s.field === void 0) return i;
    const f = c === true ? -1 : 1, h = typeof s.field == "function" ? (m) => s.field(m) : (m) => m[s.field];
    return i.sort((m, g) => {
      let _ = h(m), w = h(g);
      return s.rawSort !== void 0 ? s.rawSort(_, w, m, g) * f : _ == null ? -1 * f : w == null ? 1 * f : s.sort !== void 0 ? s.sort(_, w, m, g) * f : xa(_) === true && xa(w) === true ? (_ - w) * f : Fu(_) === true && Fu(w) === true ? A_(_, w) * f : typeof _ == "boolean" && typeof w == "boolean" ? (_ - w) * f : ([_, w] = [_, w].map((T) => (T + "").toLocaleString().toLowerCase()), _ < w ? -1 * f : _ === w ? 0 : f);
    });
  });
  function o(i) {
    let u = e.columnSortOrder;
    if (Lt(i) === true) i.sortOrder && (u = i.sortOrder), i = i.name;
    else {
      const f = n.value.find((h) => h.name === i);
      (f == null ? void 0 : f.sortOrder) && (u = f.sortOrder);
    }
    let { sortBy: c, descending: s } = t.value;
    c !== i ? (c = i, s = u === "da") : e.binaryStateSort === true ? s = !s : s === true ? u === "ad" ? c = null : s = false : u === "ad" ? s = true : c = null, r({ sortBy: c, descending: s, page: 1 });
  }
  return { columnToSort: l, computedSortMethod: a, sort: o };
}
var L_ = { filter: [String, Object], filterMethod: Function };
function B_(e, t) {
  const n = v(() => e.filterMethod !== void 0 ? e.filterMethod : (r, l, a, o) => {
    const i = l ? l.toLowerCase() : "";
    return r.filter((u) => a.some((c) => {
      const s = o(c, u) + "";
      return (s === "undefined" || s === "null" ? "" : s.toLowerCase()).indexOf(i) !== -1;
    }));
  });
  return ge(() => e.filter, () => {
    Qe(() => {
      t({ page: 1 }, true);
    });
  }, { deep: true }), { computedFilterMethod: n };
}
function F_(e, t) {
  for (const n in t) if (t[n] !== e[n]) return false;
  return true;
}
function Yd(e) {
  return e.page < 1 && (e.page = 1), e.rowsPerPage !== void 0 && e.rowsPerPage < 1 && (e.rowsPerPage = 0), e;
}
var O_ = { pagination: Object, rowsPerPageOptions: { type: Array, default: () => [5, 7, 10, 15, 20, 25, 50, 0] }, "onUpdate:pagination": [Function, Array] };
function V_(e, t) {
  const { props: n, emit: r } = e, l = W(Object.assign({ sortBy: null, descending: false, page: 1, rowsPerPage: n.rowsPerPageOptions.length !== 0 ? n.rowsPerPageOptions[0] : 5 }, n.pagination)), a = v(() => {
    const s = n["onUpdate:pagination"] !== void 0 ? { ...l.value, ...n.pagination } : l.value;
    return Yd(s);
  }), o = v(() => a.value.rowsNumber !== void 0);
  function i(s) {
    u({ pagination: s, filter: n.filter });
  }
  function u(s = {}) {
    Qe(() => {
      r("request", { pagination: s.pagination || a.value, filter: s.filter || n.filter, getCellValue: t });
    });
  }
  function c(s, f) {
    const h = Yd({ ...a.value, ...s });
    if (F_(a.value, h) === true) {
      o.value === true && f === true && i(h);
      return;
    }
    if (o.value === true) {
      i(h);
      return;
    }
    n.pagination !== void 0 && n["onUpdate:pagination"] !== void 0 ? r("update:pagination", h) : l.value = h;
  }
  return { innerPagination: l, computedPagination: a, isServerSide: o, requestServerInteraction: u, setPagination: c };
}
function D_(e, t, n, r, l, a) {
  const { props: o, emit: i, proxy: { $q: u } } = e, c = v(() => r.value === true ? n.value.rowsNumber || 0 : a.value), s = v(() => {
    const { page: b, rowsPerPage: C } = n.value;
    return (b - 1) * C;
  }), f = v(() => {
    const { page: b, rowsPerPage: C } = n.value;
    return b * C;
  }), h = v(() => n.value.page === 1), m = v(() => n.value.rowsPerPage === 0 ? 1 : Math.max(1, Math.ceil(c.value / n.value.rowsPerPage))), g = v(() => f.value === 0 ? true : n.value.page >= m.value), _ = v(() => (o.rowsPerPageOptions.includes(t.value.rowsPerPage) ? o.rowsPerPageOptions : [t.value.rowsPerPage].concat(o.rowsPerPageOptions)).map((C) => ({ label: C === 0 ? u.lang.table.allRows : "" + C, value: C })));
  ge(m, (b, C) => {
    if (b === C) return;
    const P = n.value.page;
    b && !P ? l({ page: 1 }) : b < P && l({ page: b });
  });
  function w() {
    l({ page: 1 });
  }
  function T() {
    const { page: b } = n.value;
    b > 1 && l({ page: b - 1 });
  }
  function y() {
    const { page: b, rowsPerPage: C } = n.value;
    f.value > 0 && b * C < c.value && l({ page: b + 1 });
  }
  function p() {
    l({ page: m.value });
  }
  return o["onUpdate:pagination"] !== void 0 && i("update:pagination", { ...n.value }), { firstRowIndex: s, lastRowIndex: f, isFirstPage: h, isLastPage: g, pagesNumber: m, computedRowsPerPageOptions: _, computedRowsNumber: c, firstPage: w, prevPage: T, nextPage: y, lastPage: p };
}
var I_ = { selection: { type: String, default: "none", validator: (e) => ["single", "multiple", "none"].includes(e) }, selected: { type: Array, default: () => [] } }, z_ = ["update:selected", "selection"];
function N_(e, t, n, r) {
  const l = v(() => {
    const g = {};
    return e.selected.map(r.value).forEach((_) => {
      g[_] = true;
    }), g;
  }), a = v(() => e.selection !== "none"), o = v(() => e.selection === "single"), i = v(() => e.selection === "multiple"), u = v(() => n.value.length !== 0 && n.value.every((g) => l.value[r.value(g)] === true)), c = v(() => u.value !== true && n.value.some((g) => l.value[r.value(g)] === true)), s = v(() => e.selected.length);
  function f(g) {
    return l.value[g] === true;
  }
  function h() {
    t("update:selected", []);
  }
  function m(g, _, w, T) {
    t("selection", { rows: _, added: w, keys: g, evt: T });
    const y = o.value === true ? w === true ? _ : [] : w === true ? e.selected.concat(_) : e.selected.filter((p) => g.includes(r.value(p)) === false);
    t("update:selected", y);
  }
  return { hasSelectionMode: a, singleSelection: o, multipleSelection: i, allRowsSelected: u, someRowsSelected: c, rowsSelectedNumber: s, isRowSelected: f, clearSelection: h, updateSelection: m };
}
function Xd(e) {
  return Array.isArray(e) ? e.slice() : [];
}
var H_ = { expanded: Array }, j_ = ["update:expanded"];
function U_(e, t) {
  const n = W(Xd(e.expanded));
  ge(() => e.expanded, (o) => {
    n.value = Xd(o);
  });
  function r(o) {
    return n.value.includes(o);
  }
  function l(o) {
    e.expanded !== void 0 ? t("update:expanded", o) : n.value = o;
  }
  function a(o, i) {
    const u = n.value.slice(), c = u.indexOf(o);
    i === true ? c === -1 && (u.push(o), l(u)) : c !== -1 && (u.splice(c, 1), l(u));
  }
  return { isRowExpanded: r, setExpanded: l, updateExpanded: a };
}
var Q_ = { visibleColumns: Array };
function K_(e, t, n) {
  const r = v(() => {
    if (e.columns !== void 0) return e.columns;
    const i = e.rows[0];
    return i !== void 0 ? Object.keys(i).map((u) => ({ name: u, label: u.toUpperCase(), field: u, align: xa(i[u]) ? "right" : "left", sortable: true })) : [];
  }), l = v(() => {
    const { sortBy: i, descending: u } = t.value;
    return (e.visibleColumns !== void 0 ? r.value.filter((s) => s.required === true || e.visibleColumns.includes(s.name) === true) : r.value).map((s) => {
      const f = s.align || "right", h = `text-${f}`;
      return { ...s, align: f, __iconClass: `q-table__sort-icon q-table__sort-icon--${f}`, __thClass: h + (s.headerClasses !== void 0 ? " " + s.headerClasses : "") + (s.sortable === true ? " sortable" : "") + (s.name === i ? ` sorted ${u === true ? "sort-desc" : ""}` : ""), __tdStyle: s.style !== void 0 ? typeof s.style != "function" ? () => s.style : s.style : () => null, __tdClass: s.classes !== void 0 ? typeof s.classes != "function" ? () => h + " " + s.classes : (m) => h + " " + s.classes(m) : () => h };
    });
  }), a = v(() => {
    const i = {};
    return l.value.forEach((u) => {
      i[u.name] = u;
    }), i;
  }), o = v(() => e.tableColspan !== void 0 ? e.tableColspan : l.value.length + (n.value === true ? 1 : 0));
  return { colList: r, computedCols: l, computedColsMap: a, computedColspan: o };
}
var eo = "q-table__bottom row items-center", Yh = {};
jh.forEach((e) => {
  Yh[e] = {};
});
he({ name: "QTable", props: { rows: { type: Array, required: true }, rowKey: { type: [String, Function], default: "id" }, columns: Array, loading: Boolean, iconFirstPage: String, iconPrevPage: String, iconNextPage: String, iconLastPage: String, title: String, hideHeader: Boolean, grid: Boolean, gridHeader: Boolean, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, separator: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical", "cell", "none"].includes(e) }, wrapCells: Boolean, virtualScroll: Boolean, virtualScrollTarget: {}, ...Yh, noDataLabel: String, noResultsLabel: String, loadingLabel: String, selectedRowsLabel: Function, rowsPerPageLabel: String, paginationLabel: Function, color: { type: String, default: "grey-8" }, titleClass: [String, Array, Object], tableStyle: [String, Array, Object], tableClass: [String, Array, Object], tableHeaderStyle: [String, Array, Object], tableHeaderClass: [String, Array, Object], tableRowStyleFn: Function, tableRowClassFn: Function, cardContainerClass: [String, Array, Object], cardContainerStyle: [String, Array, Object], cardStyle: [String, Array, Object], cardClass: [String, Array, Object], cardStyleFn: Function, cardClassFn: Function, hideBottom: Boolean, hideSelectedBanner: Boolean, hideNoData: Boolean, hidePagination: Boolean, onRowClick: Function, onRowDblclick: Function, onRowContextmenu: Function, ...nt, ...zs, ...Q_, ...L_, ...O_, ...H_, ...I_, ...P_ }, emits: ["request", "virtualScroll", ...Ns, ...j_, ...z_], setup(e, { slots: t, emit: n }) {
  const r = xe(), { proxy: { $q: l } } = r, a = lt(e, l), { inFullscreen: o, toggleFullscreen: i } = Hs(), u = v(() => typeof e.rowKey == "function" ? e.rowKey : (ce) => ce[e.rowKey]), c = W(null), s = W(null), f = v(() => e.grid !== true && e.virtualScroll === true), h = v(() => " q-table__card" + (a.value === true ? " q-table__card--dark q-dark" : "") + (e.square === true ? " q-table--square" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "")), m = v(() => `q-table__container q-table--${e.separator}-separator column no-wrap` + (e.grid === true ? " q-table--grid" : h.value) + (a.value === true ? " q-table--dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.wrapCells === false ? " q-table--no-wrap" : "") + (o.value === true ? " fullscreen scroll" : "")), g = v(() => m.value + (e.loading === true ? " q-table--loading" : ""));
  ge(() => e.tableStyle + e.tableClass + e.tableHeaderStyle + e.tableHeaderClass + m.value, () => {
    var _a3;
    f.value === true && ((_a3 = s.value) == null ? void 0 : _a3.reset());
  });
  const { innerPagination: _, computedPagination: w, isServerSide: T, requestServerInteraction: y, setPagination: p } = V_(r, ue), { computedFilterMethod: b } = B_(e, p), { isRowExpanded: C, setExpanded: P, updateExpanded: F } = U_(e, n), j = v(() => {
    let ce = e.rows;
    if (T.value === true || ce.length === 0) return ce;
    const { sortBy: Se, descending: Fe } = w.value;
    return e.filter && (ce = b.value(ce, e.filter, R.value, ue)), Z.value !== null && (ce = oe.value(e.rows === ce ? ce.slice() : ce, Se, Fe)), ce;
  }), $ = v(() => j.value.length), L = v(() => {
    let ce = j.value;
    if (T.value === true) return ce;
    const { rowsPerPage: Se } = w.value;
    return Se !== 0 && (M.value === 0 && e.rows !== ce ? ce.length > ee.value && (ce = ce.slice(0, ee.value)) : ce = ce.slice(M.value, ee.value)), ce;
  }), { hasSelectionMode: H, singleSelection: q, multipleSelection: A, allRowsSelected: k, someRowsSelected: U, rowsSelectedNumber: Q, isRowSelected: Y, clearSelection: X, updateSelection: le } = N_(e, n, L, u), { colList: ye, computedCols: R, computedColsMap: x, computedColspan: O } = K_(e, w, H), { columnToSort: Z, computedSortMethod: oe, sort: B } = $_(e, w, ye, p), { firstRowIndex: M, lastRowIndex: ee, isFirstPage: V, isLastPage: ne, pagesNumber: pe, computedRowsPerPageOptions: S, computedRowsNumber: E, firstPage: z, prevPage: te, nextPage: D, lastPage: I } = D_(r, _, w, T, p, $), se = v(() => L.value.length === 0), me = v(() => {
    const ce = {};
    return jh.forEach((Se) => {
      ce[Se] = e[Se];
    }), ce.virtualScrollItemSize === void 0 && (ce.virtualScrollItemSize = e.dense === true ? 28 : 48), ce;
  });
  function fe() {
    f.value === true && s.value.reset();
  }
  function de() {
    if (e.grid === true) return zn();
    const ce = e.hideHeader !== true ? Ce : null;
    if (f.value === true) {
      const Fe = t["top-row"], Be = t["bottom-row"], Ue = { default: (pt) => we(pt.item, t.body, pt.index) };
      if (Fe !== void 0) {
        const pt = d("tbody", Fe({ cols: R.value }));
        Ue.before = ce === null ? () => pt : () => [ce()].concat(pt);
      } else ce !== null && (Ue.before = ce);
      return Be !== void 0 && (Ue.after = () => d("tbody", Be({ cols: R.value }))), d(R_, { ref: s, class: e.tableClass, style: e.tableStyle, ...me.value, scrollTarget: e.virtualScrollTarget, items: L.value, type: "__qtable", tableColspan: O.value, onVirtualScroll: K }, Ue);
    }
    const Se = [ke()];
    return ce !== null && Se.unshift(ce()), Wh({ class: ["q-table__middle scroll", e.tableClass], style: e.tableStyle }, Se);
  }
  function re(ce, Se) {
    if (s.value !== null) {
      s.value.scrollTo(ce, Se);
      return;
    }
    ce = parseInt(ce, 10);
    const Fe = c.value.querySelector(`tbody tr:nth-of-type(${ce + 1})`);
    if (Fe !== null) {
      const Be = c.value.querySelector(".q-table__middle.scroll"), Ue = Fe.offsetTop - e.virtualScrollStickySizeStart, pt = Ue < Be.scrollTop ? "decrease" : "increase";
      Be.scrollTop = Ue, n("virtualScroll", { index: ce, from: 0, to: _.value.rowsPerPage - 1, direction: pt });
    }
  }
  function K(ce) {
    n("virtualScroll", ce);
  }
  function ie() {
    return [d(K1, { class: "q-table__linear-progress", color: e.color, dark: a.value, indeterminate: true, trackColor: "transparent" })];
  }
  function we(ce, Se, Fe) {
    const Be = u.value(ce), Ue = Y(Be);
    if (Se !== void 0) {
      const G = { key: Be, row: ce, pageIndex: Fe, __trClass: Ue ? "selected" : "" };
      if (e.tableRowStyleFn !== void 0 && (G.__trStyle = e.tableRowStyleFn(ce)), e.tableRowClassFn !== void 0) {
        const ve = e.tableRowClassFn(ce);
        ve && (G.__trClass = `${ve} ${G.__trClass}`);
      }
      return Se(Te(G));
    }
    const pt = t["body-cell"], ht = R.value.map((G) => {
      const ve = t[`body-cell-${G.name}`], qe = ve !== void 0 ? ve : pt;
      return qe !== void 0 ? qe(Me({ key: Be, row: ce, pageIndex: Fe, col: G })) : d("td", { class: G.__tdClass(ce), style: G.__tdStyle(ce) }, ue(G, ce));
    });
    if (H.value === true) {
      const G = t["body-selection"], ve = G !== void 0 ? G(He({ key: Be, row: ce, pageIndex: Fe })) : [d(sa, { modelValue: Ue, color: e.color, dark: a.value, dense: e.dense, "onUpdate:modelValue": (qe, Ee) => {
        le([Be], [ce], qe, Ee);
      } })];
      ht.unshift(d("td", { class: "q-table--col-auto-width" }, ve));
    }
    const N = { key: Be, class: { selected: Ue } };
    if (e.onRowClick !== void 0 && (N.class["cursor-pointer"] = true, N.onClick = (G) => {
      n("rowClick", G, ce, Fe);
    }), e.onRowDblclick !== void 0 && (N.class["cursor-pointer"] = true, N.onDblclick = (G) => {
      n("rowDblclick", G, ce, Fe);
    }), e.onRowContextmenu !== void 0 && (N.class["cursor-pointer"] = true, N.onContextmenu = (G) => {
      n("rowContextmenu", G, ce, Fe);
    }), e.tableRowStyleFn !== void 0 && (N.style = e.tableRowStyleFn(ce)), e.tableRowClassFn !== void 0) {
      const G = e.tableRowClassFn(ce);
      G && (N.class[G] = true);
    }
    return d("tr", N, ht);
  }
  function ke() {
    const ce = t.body, Se = t["top-row"], Fe = t["bottom-row"];
    let Be = L.value.map((Ue, pt) => we(Ue, ce, pt));
    return Se !== void 0 && (Be = Se({ cols: R.value }).concat(Be)), Fe !== void 0 && (Be = Be.concat(Fe({ cols: R.value }))), d("tbody", Be);
  }
  function Te(ce) {
    return De(ce), ce.cols = ce.cols.map((Se) => Vt({ ...Se }, "value", () => ue(Se, ce.row))), ce;
  }
  function Me(ce) {
    return De(ce), Vt(ce, "value", () => ue(ce.col, ce.row)), ce;
  }
  function He(ce) {
    return De(ce), ce;
  }
  function De(ce) {
    Object.assign(ce, { cols: R.value, colsMap: x.value, sort: B, rowIndex: M.value + ce.pageIndex, color: e.color, dark: a.value, dense: e.dense }), H.value === true && Vt(ce, "selected", () => Y(ce.key), (Se, Fe) => {
      le([ce.key], [ce.row], Se, Fe);
    }), Vt(ce, "expand", () => C(ce.key), (Se) => {
      F(ce.key, Se);
    });
  }
  function ue(ce, Se) {
    const Fe = typeof ce.field == "function" ? ce.field(Se) : Se[ce.field];
    return ce.format !== void 0 ? ce.format(Fe, Se) : Fe;
  }
  const be = v(() => ({ pagination: w.value, pagesNumber: pe.value, isFirstPage: V.value, isLastPage: ne.value, firstPage: z, prevPage: te, nextPage: D, lastPage: I, inFullscreen: o.value, toggleFullscreen: i }));
  function ae() {
    const ce = t.top, Se = t["top-left"], Fe = t["top-right"], Be = t["top-selection"], Ue = H.value === true && Be !== void 0 && Q.value > 0, pt = "q-table__top relative-position row items-center";
    if (ce !== void 0) return d("div", { class: pt }, [ce(be.value)]);
    let ht;
    if (Ue === true ? ht = Be(be.value).slice() : (ht = [], Se !== void 0 ? ht.push(d("div", { class: "q-table__control" }, [Se(be.value)])) : e.title && ht.push(d("div", { class: "q-table__control" }, [d("div", { class: ["q-table__title", e.titleClass] }, e.title)]))), Fe !== void 0 && (ht.push(d("div", { class: "q-table__separator col" })), ht.push(d("div", { class: "q-table__control" }, [Fe(be.value)]))), ht.length !== 0) return d("div", { class: pt }, ht);
  }
  const _e2 = v(() => U.value === true ? null : k.value);
  function Ce() {
    const ce = Oe();
    return e.loading === true && t.loading === void 0 && ce.push(d("tr", { class: "q-table__progress" }, [d("th", { class: "relative-position", colspan: O.value }, ie())])), d("thead", ce);
  }
  function Oe() {
    const ce = t.header, Se = t["header-cell"];
    if (ce !== void 0) return ce(Re({ header: true })).slice();
    const Fe = R.value.map((Be) => {
      const Ue = t[`header-cell-${Be.name}`], pt = Ue !== void 0 ? Ue : Se, ht = Re({ col: Be });
      return pt !== void 0 ? pt(ht) : d(q_, { key: Be.name, props: ht }, () => Be.label);
    });
    if (q.value === true && e.grid !== true) Fe.unshift(d("th", { class: "q-table--col-auto-width" }, " "));
    else if (A.value === true) {
      const Be = t["header-selection"], Ue = Be !== void 0 ? Be(Re({})) : [d(sa, { color: e.color, modelValue: _e2.value, dark: a.value, dense: e.dense, "onUpdate:modelValue": Xe })];
      Fe.unshift(d("th", { class: "q-table--col-auto-width" }, Ue));
    }
    return [d("tr", { class: e.tableHeaderClass, style: e.tableHeaderStyle }, Fe)];
  }
  function Re(ce) {
    return Object.assign(ce, { cols: R.value, sort: B, colsMap: x.value, color: e.color, dark: a.value, dense: e.dense }), A.value === true && Vt(ce, "selected", () => _e2.value, Xe), ce;
  }
  function Xe(ce) {
    U.value === true && (ce = false), le(L.value.map(u.value), L.value, ce);
  }
  const it = v(() => {
    const ce = [e.iconFirstPage || l.iconSet.table.firstPage, e.iconPrevPage || l.iconSet.table.prevPage, e.iconNextPage || l.iconSet.table.nextPage, e.iconLastPage || l.iconSet.table.lastPage];
    return l.lang.rtl === true ? ce.reverse() : ce;
  });
  function Ct() {
    if (e.hideBottom === true) return;
    if (se.value === true) {
      if (e.hideNoData === true) return;
      const Fe = e.loading === true ? e.loadingLabel || l.lang.table.loading : e.filter ? e.noResultsLabel || l.lang.table.noResults : e.noDataLabel || l.lang.table.noData, Be = t["no-data"], Ue = Be !== void 0 ? [Be({ message: Fe, icon: l.iconSet.table.warning, filter: e.filter })] : [d(et, { class: "q-table__bottom-nodata-icon", name: l.iconSet.table.warning }), Fe];
      return d("div", { class: eo + " q-table__bottom--nodata" }, Ue);
    }
    const ce = t.bottom;
    if (ce !== void 0) return d("div", { class: eo }, [ce(be.value)]);
    const Se = e.hideSelectedBanner !== true && H.value === true && Q.value > 0 ? [d("div", { class: "q-table__control" }, [d("div", [(e.selectedRowsLabel || l.lang.table.selectedRecords)(Q.value)])])] : [];
    if (e.hidePagination !== true) return d("div", { class: eo + " justify-end" }, nl(Se));
    if (Se.length !== 0) return d("div", { class: eo }, Se);
  }
  function Ut(ce) {
    p({ page: 1, rowsPerPage: ce.value });
  }
  function nl(ce) {
    let Se;
    const { rowsPerPage: Fe } = w.value, Be = e.paginationLabel || l.lang.table.pagination, Ue = t.pagination, pt = e.rowsPerPageOptions.length > 1;
    if (ce.push(d("div", { class: "q-table__separator col" })), pt === true && ce.push(d("div", { class: "q-table__control" }, [d("span", { class: "q-table__bottom-item" }, [e.rowsPerPageLabel || l.lang.table.recordsPerPage]), d(e_, { class: "q-table__select inline q-table__bottom-item", color: e.color, modelValue: Fe, options: S.value, displayValue: Fe === 0 ? l.lang.table.allRows : Fe, dark: a.value, borderless: true, dense: true, optionsDense: true, optionsCover: true, "onUpdate:modelValue": Ut })])), Ue !== void 0) Se = Ue(be.value);
    else if (Se = [d("span", Fe !== 0 ? { class: "q-table__bottom-item" } : {}, [Fe ? Be(M.value + 1, Math.min(ee.value, E.value), E.value) : Be(1, $.value, E.value)])], Fe !== 0 && pe.value > 1) {
      const ht = { color: e.color, round: true, dense: true, flat: true };
      e.dense === true && (ht.size = "sm"), pe.value > 2 && Se.push(d(Je, { key: "pgFirst", ...ht, icon: it.value[0], disable: V.value, ariaLabel: l.lang.pagination.first, onClick: z })), Se.push(d(Je, { key: "pgPrev", ...ht, icon: it.value[1], disable: V.value, ariaLabel: l.lang.pagination.prev, onClick: te }), d(Je, { key: "pgNext", ...ht, icon: it.value[2], disable: ne.value, ariaLabel: l.lang.pagination.next, onClick: D })), pe.value > 2 && Se.push(d(Je, { key: "pgLast", ...ht, icon: it.value[3], disable: ne.value, ariaLabel: l.lang.pagination.last, onClick: I }));
    }
    return ce.push(d("div", { class: "q-table__control" }, Se)), ce;
  }
  function an() {
    const ce = e.gridHeader === true ? [d("table", { class: "q-table" }, [Ce()])] : e.loading === true && t.loading === void 0 ? ie() : void 0;
    return d("div", { class: "q-table__middle" }, ce);
  }
  function zn() {
    const ce = t.item !== void 0 ? t.item : (Se) => {
      const Fe = Se.cols.map((Ue) => d("div", { class: "q-table__grid-item-row" }, [d("div", { class: "q-table__grid-item-title" }, [Ue.label]), d("div", { class: "q-table__grid-item-value" }, [Ue.value])]));
      if (H.value === true) {
        const Ue = t["body-selection"], pt = Ue !== void 0 ? Ue(Se) : [d(sa, { modelValue: Se.selected, color: e.color, dark: a.value, dense: e.dense, "onUpdate:modelValue": (ht, N) => {
          le([Se.key], [Se.row], ht, N);
        } })];
        Fe.unshift(d("div", { class: "q-table__grid-item-row" }, pt), d(Yl, { dark: a.value }));
      }
      const Be = { class: ["q-table__grid-item-card" + h.value, e.cardClass], style: e.cardStyle };
      if (e.cardStyleFn !== void 0 && (Be.style = [Be.style, e.cardStyleFn(Se.row)]), e.cardClassFn !== void 0) {
        const Ue = e.cardClassFn(Se.row);
        Ue && (Be.class[0] += ` ${Ue}`);
      }
      return (e.onRowClick !== void 0 || e.onRowDblclick !== void 0 || e.onRowContextmenu !== void 0) && (Be.class[0] += " cursor-pointer", e.onRowClick !== void 0 && (Be.onClick = (Ue) => {
        n("RowClick", Ue, Se.row, Se.pageIndex);
      }), e.onRowDblclick !== void 0 && (Be.onDblclick = (Ue) => {
        n("RowDblclick", Ue, Se.row, Se.pageIndex);
      }), e.onRowContextmenu !== void 0 && (Be.onContextmenu = (Ue) => {
        n("rowContextmenu", Ue, Se.row, Se.pageIndex);
      })), d("div", { class: "q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3" + (Se.selected === true ? " q-table__grid-item--selected" : "") }, [d("div", Be, Fe)]);
    };
    return d("div", { class: ["q-table__grid-content row", e.cardContainerClass], style: e.cardContainerStyle }, L.value.map((Se, Fe) => ce(Te({ key: u.value(Se), row: Se, pageIndex: Fe }))));
  }
  return Object.assign(r.proxy, { requestServerInteraction: y, setPagination: p, firstPage: z, prevPage: te, nextPage: D, lastPage: I, isRowSelected: Y, clearSelection: X, isRowExpanded: C, setExpanded: P, sort: B, resetVirtualScroll: fe, scrollTo: re, getCellValue: ue }), nm(r.proxy, { filteredSortedRows: () => j.value, computedRows: () => L.value, computedRowsNumber: () => E.value }), () => {
    const ce = [ae()], Se = { ref: c, class: g.value };
    return e.grid === true ? ce.push(an()) : Object.assign(Se, { class: [Se.class, e.cardClass], style: e.cardStyle }), ce.push(de(), Ct()), e.loading === true && t.loading !== void 0 && ce.push(t.loading()), d("div", Se, ce);
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
  const n = xe(), r = v(() => "q-td" + (e.autoWidth === true ? " q-table--col-auto-width" : "") + (e.noHover === true ? " q-td--no-hover" : "") + " ");
  return () => {
    if (e.props === void 0) return d("td", { class: r.value }, $e(t.default));
    const l = n.vnode.key, a = (e.props.colsMap !== void 0 ? e.props.colsMap[l] : null) || e.props.col;
    if (a === void 0) return;
    const { row: o } = e.props;
    return d("td", { class: r.value + a.__tdClass(o), style: a.__tdStyle(o) }, $e(t.default));
  };
} });
he({ name: "QRouteTab", props: { ...$a, ...oh }, emits: ah, setup(e, { slots: t, emit: n }) {
  const r = di({ useDisableForRouterLinkProps: false }), { renderTab: l, $tabs: a } = ih(e, t, n, { exact: v(() => e.exact), ...r });
  return ge(() => `${e.name} | ${e.exact} | ${(r.resolvedLink.value || {}).href}`, a.verifyRouteModel), () => l(r.linkTag.value, r.linkAttrs.value);
} });
function W_(e, t) {
  return e.hour !== null && e.minute === null ? "minute" : "hour";
}
function Y_() {
  const e = /* @__PURE__ */ new Date();
  return { hour: e.getHours(), minute: e.getMinutes(), second: e.getSeconds(), millisecond: e.getMilliseconds() };
}
he({ name: "QTime", props: { ...nt, ...xn, ...No, modelValue: { required: true, validator: (e) => typeof e == "string" || e === null }, mask: { ...No.mask, default: null }, format24h: { type: Boolean, default: null }, defaultDate: { type: String, validator: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e) }, options: Function, hourOptions: Array, minuteOptions: Array, secondOptions: Array, withSeconds: Boolean, nowBtn: Boolean }, emits: fh, setup(e, { slots: t, emit: n }) {
  const r = xe(), { $q: l } = r.proxy, a = lt(e, l), { tabindex: o, headerClass: i, getLocale: u, getCurrentDate: c } = vh(e, l), s = Ba(e), f = ql(s);
  let h, m;
  const g = W(null), _ = v(() => oe()), w = v(() => u()), T = v(() => B()), y = Yr(e.modelValue, _.value, w.value, e.calendar, T.value), p = W(W_(y)), b = W(y), C = W(y.hour === null || y.hour < 12), P = v(() => `q-time q-time--${e.landscape === true ? "landscape" : "portrait"}` + (a.value === true ? " q-time--dark q-dark" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-time--readonly" : "") + (e.bordered === true ? " q-time--bordered" : "") + (e.square === true ? " q-time--square no-border-radius" : "") + (e.flat === true ? " q-time--flat no-shadow" : "")), F = v(() => {
    const ue = b.value;
    return { hour: ue.hour === null ? "--" : j.value === true ? at(ue.hour) : String(C.value === true ? ue.hour === 0 ? 12 : ue.hour : ue.hour > 12 ? ue.hour - 12 : ue.hour), minute: ue.minute === null ? "--" : at(ue.minute), second: ue.second === null ? "--" : at(ue.second) };
  }), j = v(() => e.format24h !== null ? e.format24h : l.lang.date.format24h), $ = v(() => {
    const ue = p.value === "hour", be = ue === true ? 12 : 60, ae = b.value[p.value];
    let Ce = `rotate(${Math.round(ae * (360 / be)) - 180}deg) translateX(-50%)`;
    return ue === true && j.value === true && b.value.hour >= 12 && (Ce += " scale(.7)"), { transform: Ce };
  }), L = v(() => b.value.hour !== null), H = v(() => L.value === true && b.value.minute !== null), q = v(() => e.hourOptions !== void 0 ? (ue) => e.hourOptions.includes(ue) : e.options !== void 0 ? (ue) => e.options(ue, null, null) : null), A = v(() => e.minuteOptions !== void 0 ? (ue) => e.minuteOptions.includes(ue) : e.options !== void 0 ? (ue) => e.options(b.value.hour, ue, null) : null), k = v(() => e.secondOptions !== void 0 ? (ue) => e.secondOptions.includes(ue) : e.options !== void 0 ? (ue) => e.options(b.value.hour, b.value.minute, ue) : null), U = v(() => {
    if (q.value === null) return null;
    const ue = x(0, 11, q.value), be = x(12, 11, q.value);
    return { am: ue, pm: be, values: ue.values.concat(be.values) };
  }), Q = v(() => A.value !== null ? x(0, 59, A.value) : null), Y = v(() => k.value !== null ? x(0, 59, k.value) : null), X = v(() => {
    switch (p.value) {
      case "hour":
        return U.value;
      case "minute":
        return Q.value;
      case "second":
        return Y.value;
    }
  }), le = v(() => {
    let ue, be, ae = 0, _e2 = 1;
    const Ce = X.value !== null ? X.value.values : void 0;
    p.value === "hour" ? j.value === true ? (ue = 0, be = 23) : (ue = 0, be = 11, C.value === false && (ae = 12)) : (ue = 0, be = 55, _e2 = 5);
    const Oe = [];
    for (let Re = ue, Xe = ue; Re <= be; Re += _e2, Xe++) {
      const it = Re + ae, Ct = (Ce == null ? void 0 : Ce.includes(it)) === false, Ut = p.value === "hour" && Re === 0 ? j.value === true ? "00" : "12" : Re;
      Oe.push({ val: it, index: Xe, disable: Ct, label: Ut });
    }
    return Oe;
  }), ye = v(() => [[bn, V, void 0, { stop: true, prevent: true, mouse: true }]]);
  ge(() => e.modelValue, (ue) => {
    const be = Yr(ue, _.value, w.value, e.calendar, T.value);
    (be.dateHash !== b.value.dateHash || be.timeHash !== b.value.timeHash) && (b.value = be, be.hour === null ? p.value = "hour" : C.value = be.hour < 12);
  }), ge([_, w], () => {
    Qe(() => {
      Me();
    });
  });
  function R() {
    const ue = { ...c(), ...Y_() };
    Me(ue), Object.assign(b.value, ue), p.value = "hour";
  }
  function x(ue, be, ae) {
    const _e2 = Array.apply(null, { length: be + 1 }).map((Ce, Oe) => {
      const Re = Oe + ue;
      return { index: Re, val: ae(Re) === true };
    }).filter((Ce) => Ce.val === true).map((Ce) => Ce.index);
    return { min: _e2[0], max: _e2[_e2.length - 1], values: _e2, threshold: be + 1 };
  }
  function O(ue, be, ae) {
    const _e2 = Math.abs(ue - be);
    return Math.min(_e2, ae - _e2);
  }
  function Z(ue, { min: be, max: ae, values: _e2, threshold: Ce }) {
    if (ue === be) return be;
    if (ue < be || ue > ae) return O(ue, be, Ce) <= O(ue, ae, Ce) ? be : ae;
    const Oe = _e2.findIndex((it) => ue <= it), Re = _e2[Oe - 1], Xe = _e2[Oe];
    return ue - Re <= Xe - ue ? Re : Xe;
  }
  function oe() {
    return e.calendar !== "persian" && e.mask !== null ? e.mask : `HH:mm${e.withSeconds === true ? ":ss" : ""}`;
  }
  function B() {
    if (typeof e.defaultDate != "string") {
      const ue = c(true);
      return ue.dateHash = Qn(ue), ue;
    }
    return Yr(e.defaultDate, "YYYY/MM/DD", void 0, e.calendar);
  }
  function M() {
    return pl(r) === true || X.value !== null && (X.value.values.length === 0 || p.value === "hour" && j.value !== true && U.value[C.value === true ? "am" : "pm"].values.length === 0);
  }
  function ee() {
    const ue = g.value, { top: be, left: ae, width: _e2 } = ue.getBoundingClientRect(), Ce = _e2 / 2;
    return { top: be + Ce, left: ae + Ce, dist: Ce * 0.7 };
  }
  function V(ue) {
    if (M() !== true) {
      if (ue.isFirst === true) {
        h = ee(), m = pe(ue.evt, h);
        return;
      }
      m = pe(ue.evt, h, m), ue.isFinal === true && (h = false, m = null, ne());
    }
  }
  function ne() {
    p.value === "hour" ? p.value = "minute" : e.withSeconds && p.value === "minute" && (p.value = "second");
  }
  function pe(ue, be, ae) {
    const _e2 = tn(ue), Ce = Math.abs(_e2.top - be.top), Oe = Math.sqrt(Math.pow(Math.abs(_e2.top - be.top), 2) + Math.pow(Math.abs(_e2.left - be.left), 2));
    let Re, Xe = Math.asin(Ce / Oe) * (180 / Math.PI);
    if (_e2.top < be.top ? Xe = be.left < _e2.left ? 90 - Xe : 270 + Xe : Xe = be.left < _e2.left ? Xe + 90 : 270 - Xe, p.value === "hour") {
      if (Re = Xe / 30, U.value !== null) {
        const it = j.value !== true ? C.value === true : U.value.am.values.length !== 0 && U.value.pm.values.length !== 0 ? Oe >= be.dist : U.value.am.values.length !== 0;
        Re = Z(Re + (it === true ? 0 : 12), U.value[it === true ? "am" : "pm"]);
      } else Re = Math.round(Re), j.value === true ? Oe < be.dist ? Re < 12 && (Re += 12) : Re === 12 && (Re = 0) : C.value === true && Re === 12 ? Re = 0 : C.value === false && Re !== 12 && (Re += 12);
      j.value === true && (C.value = Re < 12);
    } else Re = Math.round(Xe / 6) % 60, p.value === "minute" && Q.value !== null ? Re = Z(Re, Q.value) : p.value === "second" && Y.value !== null && (Re = Z(Re, Y.value));
    return ae !== Re && K[p.value](Re), Re;
  }
  const S = { hour() {
    p.value = "hour";
  }, minute() {
    p.value = "minute";
  }, second() {
    p.value = "second";
  } };
  function E(ue) {
    ue.keyCode === 13 && ie();
  }
  function z(ue) {
    ue.keyCode === 13 && we();
  }
  function te(ue) {
    M() !== true && (l.platform.is.desktop !== true && pe(ue, ee()), ne());
  }
  function D(ue) {
    M() !== true && pe(ue, ee());
  }
  function I(ue) {
    if (ue.keyCode === 13) p.value = "hour";
    else if ([37, 39].includes(ue.keyCode)) {
      const be = ue.keyCode === 37 ? -1 : 1;
      if (U.value !== null) {
        const ae = j.value === true ? U.value.values : U.value[C.value === true ? "am" : "pm"].values;
        if (ae.length === 0) return;
        if (b.value.hour === null) fe(ae[0]);
        else {
          const _e2 = (ae.length + ae.indexOf(b.value.hour) + be) % ae.length;
          fe(ae[_e2]);
        }
      } else {
        const ae = j.value === true ? 24 : 12, _e2 = j.value !== true && C.value === false ? 12 : 0, Ce = b.value.hour === null ? -be : b.value.hour;
        fe(_e2 + (24 + Ce + be) % ae);
      }
    }
  }
  function se(ue) {
    if (ue.keyCode === 13) p.value = "minute";
    else if ([37, 39].includes(ue.keyCode)) {
      const be = ue.keyCode === 37 ? -1 : 1;
      if (Q.value !== null) {
        const ae = Q.value.values;
        if (ae.length === 0) return;
        if (b.value.minute === null) de(ae[0]);
        else {
          const _e2 = (ae.length + ae.indexOf(b.value.minute) + be) % ae.length;
          de(ae[_e2]);
        }
      } else {
        const ae = b.value.minute === null ? -be : b.value.minute;
        de((60 + ae + be) % 60);
      }
    }
  }
  function me(ue) {
    if (ue.keyCode === 13) p.value = "second";
    else if ([37, 39].includes(ue.keyCode)) {
      const be = ue.keyCode === 37 ? -1 : 1;
      if (Y.value !== null) {
        const ae = Y.value.values;
        if (ae.length === 0) return;
        if (b.value.seconds === null) re(ae[0]);
        else {
          const _e2 = (ae.length + ae.indexOf(b.value.second) + be) % ae.length;
          re(ae[_e2]);
        }
      } else {
        const ae = b.value.second === null ? -be : b.value.second;
        re((60 + ae + be) % 60);
      }
    }
  }
  function fe(ue) {
    b.value.hour !== ue && (b.value.hour = ue, Te());
  }
  function de(ue) {
    b.value.minute !== ue && (b.value.minute = ue, Te());
  }
  function re(ue) {
    b.value.second !== ue && (b.value.second = ue, Te());
  }
  const K = { hour: fe, minute: de, second: re };
  function ie() {
    C.value === false && (C.value = true, b.value.hour !== null && (b.value.hour -= 12, Te()));
  }
  function we() {
    C.value === true && (C.value = false, b.value.hour !== null && (b.value.hour += 12, Te()));
  }
  function ke(ue) {
    const be = e.modelValue;
    p.value !== ue && be !== void 0 && be !== null && be !== "" && typeof be != "string" && (p.value = ue);
  }
  function Te() {
    if (q.value !== null && q.value(b.value.hour) !== true) {
      b.value = Yr(), ke("hour");
      return;
    }
    if (A.value !== null && A.value(b.value.minute) !== true) {
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
    const be = Object.assign({ ...b.value }, ue), ae = e.calendar === "persian" ? at(be.hour) + ":" + at(be.minute) + (e.withSeconds === true ? ":" + at(be.second) : "") : ph(new Date(be.year, be.month === null ? null : be.month - 1, be.day, be.hour, be.minute, be.second, be.millisecond), _.value, w.value, be.year, be.timezoneOffset);
    be.changed = ae !== e.modelValue, n("update:modelValue", ae, be);
  }
  function He() {
    const ue = [d("div", { class: "q-time__link " + (p.value === "hour" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: S.hour, onKeyup: I }, F.value.hour), d("div", ":"), d("div", L.value === true ? { class: "q-time__link " + (p.value === "minute" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onKeyup: se, onClick: S.minute } : { class: "q-time__link" }, F.value.minute)];
    e.withSeconds === true && ue.push(d("div", ":"), d("div", H.value === true ? { class: "q-time__link " + (p.value === "second" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onKeyup: me, onClick: S.second } : { class: "q-time__link" }, F.value.second));
    const be = [d("div", { class: "q-time__header-label row items-center no-wrap", dir: "ltr" }, ue)];
    return j.value === false && be.push(d("div", { class: "q-time__header-ampm column items-between no-wrap" }, [d("div", { class: "q-time__link " + (C.value === true ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: ie, onKeyup: E }, "AM"), d("div", { class: "q-time__link " + (C.value !== true ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: we, onKeyup: z }, "PM")])), d("div", { class: "q-time__header flex flex-center no-wrap " + i.value }, be);
  }
  function De() {
    const ue = b.value[p.value];
    return d("div", { class: "q-time__content col relative-position" }, [d(Ot, { name: "q-transition--scale" }, () => d("div", { key: "clock" + p.value, class: "q-time__container-parent absolute-full" }, [d("div", { ref: g, class: "q-time__container-child fit overflow-hidden" }, [cn(d("div", { class: "q-time__clock cursor-pointer non-selectable", onClick: te, onMousedown: D }, [d("div", { class: "q-time__clock-circle fit" }, [d("div", { class: "q-time__clock-pointer" + (b.value[p.value] === null ? " hidden" : e.color !== void 0 ? ` text-${e.color}` : ""), style: $.value }), le.value.map((be) => d("div", { class: `q-time__clock-position row flex-center q-time__clock-pos-${be.index}` + (be.val === ue ? " q-time__clock-position--active " + i.value : be.disable === true ? " q-time__clock-position--disable" : "") }, [d("span", be.label)]))])]), ye.value)])])), e.nowBtn === true ? d(Je, { class: "q-time__now-button absolute", icon: l.iconSet.datetime.now, unelevated: true, size: "sm", round: true, color: e.color, textColor: e.textColor, tabindex: o.value, onClick: R }) : null]);
  }
  return r.proxy.setNow = R, () => {
    const ue = [De()], be = $e(t.default);
    return be !== void 0 && ue.push(d("div", { class: "q-time__actions" }, be)), e.name !== void 0 && e.disable !== true && f(ue, "push"), d("div", { class: P.value, tabindex: -1 }, [He(), d("div", { class: "q-time__main col overflow-auto" }, ue)]);
  };
} });
he({ name: "QTimeline", props: { ...nt, color: { type: String, default: "primary" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, layout: { type: String, default: "dense", validator: (e) => ["dense", "comfortable", "loose"].includes(e) } }, setup(e, { slots: t }) {
  const n = xe(), r = lt(e, n.proxy.$q);
  gn(dm, e);
  const l = v(() => `q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}` + (r.value === true ? " q-timeline--dark" : ""));
  return () => d("ul", { class: l.value }, $e(t.default));
} });
he({ name: "QTimelineEntry", props: { heading: Boolean, tag: { type: String, default: "h3" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, icon: String, avatar: String, color: String, title: String, subtitle: String, body: String }, setup(e, { slots: t }) {
  const n = Mt(dm, ot);
  if (n === ot) return console.error("QTimelineEntry needs to be child of QTimeline"), ot;
  const r = v(() => `q-timeline__entry q-timeline__entry--${e.side}` + (e.icon !== void 0 || e.avatar !== void 0 ? " q-timeline__entry--icon" : "")), l = v(() => `q-timeline__dot text-${e.color || n.color}`), a = v(() => n.layout === "comfortable" && n.side === "left");
  return () => {
    const o = Pa(t.default, []);
    if (e.body !== void 0 && o.unshift(e.body), e.heading === true) {
      const c = [d("div"), d("div"), d(e.tag, { class: "q-timeline__heading-title" }, o)];
      return d("div", { class: "q-timeline__heading" }, a.value === true ? c.reverse() : c);
    }
    let i;
    e.icon !== void 0 ? i = [d(et, { class: "row items-center justify-center", name: e.icon })] : e.avatar !== void 0 && (i = [d("img", { class: "q-timeline__dot-img", src: e.avatar })]);
    const u = [d("div", { class: "q-timeline__subtitle" }, [d("span", {}, $e(t.subtitle, [e.subtitle]))]), d("div", { class: l.value }, i), d("div", { class: "q-timeline__content" }, [d("h6", { class: "q-timeline__title" }, $e(t.title, [e.title]))].concat(o))];
    return d("li", { class: r.value }, a.value === true ? u.reverse() : u);
  };
} });
var Gd = he({ name: "QToolbar", props: { inset: Boolean }, setup(e, { slots: t }) {
  const n = v(() => "q-toolbar row no-wrap items-center" + (e.inset === true ? " q-toolbar--inset" : ""));
  return () => d("div", { class: n.value, role: "toolbar" }, $e(t.default));
} }), Zd = he({ name: "QToolbarTitle", props: { shrink: Boolean }, setup(e, { slots: t }) {
  const n = v(() => "q-toolbar__title ellipsis" + (e.shrink === true ? " col-shrink" : ""));
  return () => d("div", { class: n.value }, $e(t.default));
} }), X_ = ["none", "strict", "leaf", "leaf-filtered"];
he({ name: "QTree", props: { ...nt, nodes: { type: Array, required: true }, nodeKey: { type: String, required: true }, labelKey: { type: String, default: "label" }, childrenKey: { type: String, default: "children" }, dense: Boolean, color: String, controlColor: String, textColor: String, selectedColor: String, icon: String, tickStrategy: { type: String, default: "none", validator: (e) => X_.includes(e) }, ticked: Array, expanded: Array, selected: {}, noSelectionUnset: Boolean, defaultExpandAll: Boolean, accordion: Boolean, filter: String, filterMethod: Function, duration: {}, noConnectors: Boolean, noTransition: Boolean, noNodesLabel: String, noResultsLabel: String }, emits: ["update:expanded", "update:ticked", "update:selected", "lazyLoad", "afterShow", "afterHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = lt(e, l), o = W({}), i = W(e.ticked || []), u = W(e.expanded || []);
  let c = {};
  Rr(() => {
    c = {};
  });
  const s = v(() => `q-tree q-tree--${e.dense === true ? "dense" : "standard"}` + (e.noConnectors === true ? " q-tree--no-connectors" : "") + (a.value === true ? " q-tree--dark" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), f = v(() => e.selected !== void 0), h = v(() => e.icon || l.iconSet.tree.icon), m = v(() => e.controlColor || e.color), g = v(() => e.textColor !== void 0 ? ` text-${e.textColor}` : ""), _ = v(() => {
    const x = e.selectedColor || e.color;
    return x ? ` text-${x}` : "";
  }), w = v(() => e.filterMethod !== void 0 ? e.filterMethod : (x, O) => {
    const Z = O.toLowerCase();
    return x[e.labelKey] && x[e.labelKey].toLowerCase().indexOf(Z) !== -1;
  }), T = v(() => {
    const x = {}, O = (Z, oe) => {
      const B = Z.tickStrategy || (oe ? oe.tickStrategy : e.tickStrategy), M = Z[e.nodeKey], ee = Z[e.childrenKey] && Array.isArray(Z[e.childrenKey]) && Z[e.childrenKey].length !== 0, V = Z.disabled !== true && f.value === true && Z.selectable !== false, ne = Z.disabled !== true && Z.expandable !== false, pe = B !== "none", S = B === "strict", E = B === "leaf-filtered", z = B === "leaf" || B === "leaf-filtered";
      let te = Z.disabled !== true && Z.tickable !== false;
      z === true && te === true && oe && oe.tickable !== true && (te = false);
      let D = Z.lazy;
      D === true && o.value[M] !== void 0 && Array.isArray(Z[e.childrenKey]) === true && (D = o.value[M]);
      const I = { key: M, parent: oe, isParent: ee, lazy: D, disabled: Z.disabled, link: Z.disabled !== true && (V === true || ne === true && (ee === true || D === true)), children: [], matchesFilter: e.filter ? w.value(Z, e.filter) : true, selected: M === e.selected && V === true, selectable: V, expanded: ee === true ? u.value.includes(M) : false, expandable: ne, noTick: Z.noTick === true || S !== true && D && D !== "loaded", tickable: te, tickStrategy: B, hasTicking: pe, strictTicking: S, leafFilteredTicking: E, leafTicking: z, ticked: S === true ? i.value.includes(M) : ee === true ? false : i.value.includes(M) };
      if (x[M] = I, ee === true && (I.children = Z[e.childrenKey].map((se) => O(se, I)), e.filter && (I.matchesFilter !== true ? I.matchesFilter = I.children.some((se) => se.matchesFilter) : I.noTick !== true && I.disabled !== true && I.tickable === true && E === true && I.children.every((se) => se.matchesFilter !== true || se.noTick === true || se.tickable !== true) === true && (I.tickable = false)), I.matchesFilter === true && (I.noTick !== true && S !== true && I.children.every((se) => se.noTick) === true && (I.noTick = true), z))) {
        if (I.ticked = false, I.indeterminate = I.children.some((se) => se.indeterminate === true), I.tickable = I.tickable === true && I.children.some((se) => se.tickable), I.indeterminate !== true) {
          const se = I.children.reduce((me, fe) => fe.ticked === true ? me + 1 : me, 0);
          se === I.children.length ? I.ticked = true : se > 0 && (I.indeterminate = true);
        }
        I.indeterminate === true && (I.indeterminateNextState = I.children.every((se) => se.tickable !== true || se.ticked !== true));
      }
      return I;
    };
    return e.nodes.forEach((Z) => O(Z, null)), x;
  });
  ge(() => e.ticked, (x) => {
    i.value = x;
  }), ge(() => e.expanded, (x) => {
    u.value = x;
  });
  function y(x) {
    const O = [].reduce, Z = (oe, B) => {
      if (oe || !B) return oe;
      if (Array.isArray(B) === true) return O.call(Object(B), Z, oe);
      if (B[e.nodeKey] === x) return B;
      if (B[e.childrenKey]) return Z(null, B[e.childrenKey]);
    };
    return Z(null, e.nodes);
  }
  function p() {
    return i.value.map((x) => y(x));
  }
  function b() {
    return u.value.map((x) => y(x));
  }
  function C(x) {
    return x && T.value[x] ? T.value[x].expanded : false;
  }
  function P() {
    e.expanded !== void 0 ? n("update:expanded", []) : u.value = [];
  }
  function F() {
    const x = [], O = (Z) => {
      Z[e.childrenKey] && Z[e.childrenKey].length !== 0 && Z.expandable !== false && Z.disabled !== true && (x.push(Z[e.nodeKey]), Z[e.childrenKey].forEach(O));
    };
    e.nodes.forEach(O), e.expanded !== void 0 ? n("update:expanded", x) : u.value = x;
  }
  function j(x, O, Z = y(x), oe = T.value[x]) {
    if (oe.lazy && oe.lazy !== "loaded") {
      if (oe.lazy === "loading") return;
      o.value[x] = "loading", Array.isArray(Z[e.childrenKey]) !== true && (Z[e.childrenKey] = []), n("lazyLoad", { node: Z, key: x, done: (B) => {
        o.value[x] = "loaded", Z[e.childrenKey] = Array.isArray(B) === true ? B : [], Qe(() => {
          var _a3;
          ((_a3 = T.value[x]) == null ? void 0 : _a3.isParent) === true && $(x, true);
        });
      }, fail: () => {
        delete o.value[x], Z[e.childrenKey].length === 0 && delete Z[e.childrenKey];
      } });
    } else oe.isParent === true && oe.expandable === true && $(x, O);
  }
  function $(x, O) {
    let Z = u.value;
    const oe = e.expanded !== void 0;
    if (oe === true && (Z = Z.slice()), O) {
      if (e.accordion && T.value[x]) {
        const B = [];
        T.value[x].parent ? T.value[x].parent.children.forEach((M) => {
          M.key !== x && M.expandable === true && B.push(M.key);
        }) : e.nodes.forEach((M) => {
          const ee = M[e.nodeKey];
          ee !== x && B.push(ee);
        }), B.length !== 0 && (Z = Z.filter((M) => B.includes(M) === false));
      }
      Z = Z.concat([x]).filter((B, M, ee) => ee.indexOf(B) === M);
    } else Z = Z.filter((B) => B !== x);
    oe === true ? n("update:expanded", Z) : u.value = Z;
  }
  function L(x) {
    return x && T.value[x] ? T.value[x].ticked : false;
  }
  function H(x, O) {
    let Z = i.value;
    const oe = e.ticked !== void 0;
    oe === true && (Z = Z.slice()), O ? Z = Z.concat(x).filter((B, M, ee) => ee.indexOf(B) === M) : Z = Z.filter((B) => x.includes(B) === false), oe === true && n("update:ticked", Z);
  }
  function q(x, O, Z) {
    const oe = { tree: r, node: x, key: Z, color: e.color, dark: a.value };
    return Vt(oe, "expanded", () => O.expanded, (B) => {
      B !== O.expanded && j(Z, B);
    }), Vt(oe, "ticked", () => O.ticked, (B) => {
      B !== O.ticked && H([Z], B);
    }), oe;
  }
  function A(x) {
    return (e.filter ? x.filter((O) => T.value[O[e.nodeKey]].matchesFilter) : x).map((O) => Y(O));
  }
  function k(x) {
    if (x.icon !== void 0) return d(et, { class: "q-tree__icon q-mr-sm", name: x.icon, color: x.iconColor });
    const O = x.img || x.avatar;
    if (O) return d("img", { class: `q-tree__${x.img ? "img" : "avatar"} q-mr-sm`, src: O });
  }
  function U() {
    n("afterShow");
  }
  function Q() {
    n("afterHide");
  }
  function Y(x) {
    const O = x[e.nodeKey], Z = T.value[O], oe = x.header && t[`header-${x.header}`] || t["default-header"], B = Z.isParent === true ? A(x[e.childrenKey]) : [], M = B.length !== 0 || Z.lazy && Z.lazy !== "loaded";
    let ee = x.body && t[`body-${x.body}`] || t["default-body"];
    const V = oe !== void 0 || ee !== void 0 ? q(x, Z, O) : null;
    return ee !== void 0 && (ee = d("div", { class: "q-tree__node-body relative-position" }, [d("div", { class: g.value }, [ee(V)])])), d("div", { key: O, class: `q-tree__node relative-position q-tree__node--${M === true ? "parent" : "child"}` }, [d("div", { class: "q-tree__node-header relative-position row no-wrap items-center" + (Z.link === true ? " q-tree__node--link q-hoverable q-focusable" : "") + (Z.selected === true ? " q-tree__node--selected" : "") + (Z.disabled === true ? " q-tree__node--disabled" : ""), tabindex: Z.link === true ? 0 : -1, ariaExpanded: B.length > 0 ? Z.expanded : null, role: "treeitem", onClick: (ne) => {
      le(x, Z, ne);
    }, onKeypress(ne) {
      Zl(ne) !== true && (ne.keyCode === 13 ? le(x, Z, ne, true) : ne.keyCode === 32 && ye(x, Z, ne, true));
    } }, [d("div", { class: "q-focus-helper", tabindex: -1, ref: (ne) => {
      c[Z.key] = ne;
    } }), Z.lazy === "loading" ? d(wn, { class: "q-tree__spinner", color: m.value }) : M === true ? d(et, { class: "q-tree__arrow" + (Z.expanded === true ? " q-tree__arrow--rotate" : ""), name: h.value, onClick(ne) {
      ye(x, Z, ne);
    } }) : null, Z.hasTicking === true && Z.noTick !== true ? d(sa, { class: "q-tree__tickbox", modelValue: Z.indeterminate === true ? null : Z.ticked, color: m.value, dark: a.value, dense: true, keepColor: true, disable: Z.tickable !== true, onKeydown: je, "onUpdate:modelValue": (ne) => {
      R(Z, ne);
    } }) : null, d("div", { class: "q-tree__node-header-content col row no-wrap items-center" + (Z.selected === true ? _.value : g.value) }, [oe ? oe(V) : [k(x), d("div", x[e.labelKey])]])]), M === true ? e.noTransition === true ? Z.expanded === true ? d("div", { class: "q-tree__node-collapsible" + g.value, key: `${O}__q` }, [ee, d("div", { class: "q-tree__children" + (Z.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, B)]) : null : d(Ws, { duration: e.duration, onShow: U, onHide: Q }, () => cn(d("div", { class: "q-tree__node-collapsible" + g.value, key: `${O}__q` }, [ee, d("div", { class: "q-tree__children" + (Z.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, B)]), [[Zv, Z.expanded]])) : ee]);
  }
  function X(x) {
    var _a3;
    (_a3 = c[x]) == null ? void 0 : _a3.focus();
  }
  function le(x, O, Z, oe) {
    oe !== true && O.selectable !== false && X(O.key), f.value && O.selectable ? e.noSelectionUnset === false ? n("update:selected", O.key !== e.selected ? O.key : null) : O.key !== e.selected && n("update:selected", O.key === void 0 ? null : O.key) : ye(x, O, Z, oe), typeof x.handler == "function" && x.handler(x);
  }
  function ye(x, O, Z, oe) {
    Z !== void 0 && je(Z), oe !== true && O.selectable !== false && X(O.key), j(O.key, !O.expanded, x, O);
  }
  function R(x, O) {
    if (x.indeterminate === true && (O = x.indeterminateNextState), x.strictTicking) H([x.key], O);
    else if (x.leafTicking) {
      const Z = [], oe = (B) => {
        B.isParent ? (O !== true && B.noTick !== true && B.tickable === true && Z.push(B.key), B.leafTicking === true && B.children.forEach(oe)) : B.noTick !== true && B.tickable === true && (B.leafFilteredTicking !== true || B.matchesFilter === true) && Z.push(B.key);
      };
      oe(x), H(Z, O);
    }
  }
  return e.defaultExpandAll === true && F(), Object.assign(r, { getNodeByKey: y, getTickedNodes: p, getExpandedNodes: b, isExpanded: C, collapseAll: P, expandAll: F, setExpanded: j, isTicked: L, setTicked: H }), () => {
    const x = A(e.nodes);
    return d("div", { class: s.value, role: "tree" }, x.length === 0 ? e.filter ? e.noResultsLabel || l.lang.tree.noResults : e.noNodesLabel || l.lang.tree.noNodes : x);
  };
} });
function Jd(e) {
  return (e * 100).toFixed(2) + "%";
}
var G_ = { ...nt, ...Rh, label: String, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, noThumbnails: Boolean, thumbnailFit: { type: String, default: "cover" }, autoUpload: Boolean, hideUploadBtn: Boolean, disable: Boolean, readonly: Boolean }, Xh = [...Ah, "start", "finish", "added", "removed"];
function Z_(e, t) {
  const n = xe(), { props: r, slots: l, emit: a, proxy: o } = n, { $q: i } = o, u = lt(r, i);
  function c(V, ne, pe) {
    if (V.__status = ne, ne === "idle") {
      V.__uploaded = 0, V.__progress = 0, V.__sizeLabel = Ou(V.size), V.__progressLabel = "0.00%";
      return;
    }
    if (ne === "failed") {
      o.$forceUpdate();
      return;
    }
    V.__uploaded = ne === "uploaded" ? V.size : pe, V.__progress = ne === "uploaded" ? 1 : Math.min(0.9999, V.__uploaded / V.size), V.__progressLabel = Jd(V.__progress), o.$forceUpdate();
  }
  const s = v(() => r.disable !== true && r.readonly !== true), f = W(false), h = W(null), m = W(null), g = { files: W([]), queuedFiles: W([]), uploadedFiles: W([]), uploadedSize: W(0), updateFileStatus: c, isAlive: () => pl(n) === false }, { pickFiles: _, addFiles: w, onDragover: T, onDragleave: y, processFiles: p, getDndNode: b, maxFilesNumber: C, maxTotalSizeNumber: P } = Ph({ editable: s, dnd: f, getFileInput: R, addFilesToQueue: x });
  Object.assign(g, e({ props: r, slots: l, emit: a, helpers: g, exposeApi: (V) => {
    Object.assign(g, V);
  } })), g.isBusy === void 0 && (g.isBusy = W(false));
  const F = W(0), j = v(() => F.value === 0 ? 0 : g.uploadedSize.value / F.value), $ = v(() => Jd(j.value)), L = v(() => Ou(F.value)), H = v(() => s.value === true && g.isUploading.value !== true && (r.multiple === true || g.queuedFiles.value.length === 0) && (r.maxFiles === void 0 || g.files.value.length < C.value) && (r.maxTotalSize === void 0 || F.value < P.value)), q = v(() => s.value === true && g.isBusy.value !== true && g.isUploading.value !== true && g.queuedFiles.value.length !== 0);
  gn(bm, oe);
  const A = v(() => "q-uploader column no-wrap" + (u.value === true ? " q-uploader--dark q-dark" : "") + (r.bordered === true ? " q-uploader--bordered" : "") + (r.square === true ? " q-uploader--square no-border-radius" : "") + (r.flat === true ? " q-uploader--flat no-shadow" : "") + (r.disable === true ? " disabled q-uploader--disable" : "") + (f.value === true ? " q-uploader--dnd" : "")), k = v(() => "q-uploader__header" + (r.color !== void 0 ? ` bg-${r.color}` : "") + (r.textColor !== void 0 ? ` text-${r.textColor}` : ""));
  ge(g.isUploading, (V, ne) => {
    ne === false && V === true ? a("start") : ne === true && V === false && a("finish");
  });
  function U() {
    r.disable === false && (g.abort(), g.uploadedSize.value = 0, F.value = 0, ye(), g.files.value = [], g.queuedFiles.value = [], g.uploadedFiles.value = []);
  }
  function Q() {
    r.disable === false && X(["uploaded"], () => {
      g.uploadedFiles.value = [];
    });
  }
  function Y() {
    X(["idle", "failed"], ({ size: V }) => {
      F.value -= V, g.queuedFiles.value = [];
    });
  }
  function X(V, ne) {
    if (r.disable === true) return;
    const pe = { files: [], size: 0 }, S = g.files.value.filter((E) => V.indexOf(E.__status) === -1 ? true : (pe.size += E.size, pe.files.push(E), E.__img !== void 0 && window.URL.revokeObjectURL(E.__img.src), false));
    pe.files.length !== 0 && (g.files.value = S, ne(pe), a("removed", pe.files));
  }
  function le(V) {
    r.disable || (V.__status === "uploaded" ? g.uploadedFiles.value = g.uploadedFiles.value.filter((ne) => ne.__key !== V.__key) : V.__status === "uploading" ? V.__abort() : F.value -= V.size, g.files.value = g.files.value.filter((ne) => ne.__key !== V.__key ? true : (ne.__img !== void 0 && window.URL.revokeObjectURL(ne.__img.src), false)), g.queuedFiles.value = g.queuedFiles.value.filter((ne) => ne.__key !== V.__key), a("removed", [V]));
  }
  function ye() {
    g.files.value.forEach((V) => {
      V.__img !== void 0 && window.URL.revokeObjectURL(V.__img.src);
    });
  }
  function R() {
    return m.value || h.value.getElementsByClassName("q-uploader__input")[0];
  }
  function x(V, ne) {
    const pe = p(V, ne, g.files.value, true), S = R();
    S != null && (S.value = ""), pe !== void 0 && (pe.forEach((E) => {
      if (g.updateFileStatus(E, "idle"), F.value += E.size, r.noThumbnails !== true && E.type.toUpperCase().startsWith("IMAGE")) {
        const z = new Image();
        z.src = window.URL.createObjectURL(E), E.__img = z;
      }
    }), g.files.value = g.files.value.concat(pe), g.queuedFiles.value = g.queuedFiles.value.concat(pe), a("added", pe), r.autoUpload === true && g.upload());
  }
  function O() {
    q.value === true && g.upload();
  }
  function Z(V, ne, pe) {
    if (V === true) {
      const S = { type: "a", key: ne, icon: i.iconSet.uploader[ne], flat: true, dense: true };
      let E;
      return ne === "add" ? (S.onClick = _, E = oe) : S.onClick = pe, d(Je, S, E);
    }
  }
  function oe() {
    return d("input", { ref: m, class: "q-uploader__input overflow-hidden absolute-full", tabindex: -1, type: "file", title: "", accept: r.accept, multiple: r.multiple === true ? "multiple" : void 0, capture: r.capture, onMousedown: wt, onClick: _, onChange: x });
  }
  function B() {
    return l.header !== void 0 ? l.header(ee) : [d("div", { class: "q-uploader__header-content column" }, [d("div", { class: "flex flex-center no-wrap q-gutter-xs" }, [Z(g.queuedFiles.value.length !== 0, "removeQueue", Y), Z(g.uploadedFiles.value.length !== 0, "removeUploaded", Q), g.isUploading.value === true ? d(wn, { class: "q-uploader__spinner" }) : null, d("div", { class: "col column justify-center" }, [r.label !== void 0 ? d("div", { class: "q-uploader__title" }, [r.label]) : null, d("div", { class: "q-uploader__subtitle" }, [L.value + " / " + $.value])]), Z(H.value, "add"), Z(r.hideUploadBtn === false && q.value === true, "upload", g.upload), Z(g.isUploading.value, "clear", g.abort)])])];
  }
  function M() {
    return l.list !== void 0 ? l.list(ee) : g.files.value.map((V) => d("div", { key: V.__key, class: "q-uploader__file relative-position" + (r.noThumbnails !== true && V.__img !== void 0 ? " q-uploader__file--img" : "") + (V.__status === "failed" ? " q-uploader__file--failed" : V.__status === "uploaded" ? " q-uploader__file--uploaded" : ""), style: r.noThumbnails !== true && V.__img !== void 0 ? { backgroundImage: 'url("' + V.__img.src + '")', backgroundSize: r.thumbnailFit } : null }, [d("div", { class: "q-uploader__file-header row flex-center no-wrap" }, [V.__status === "failed" ? d(et, { class: "q-uploader__file-status", name: i.iconSet.type.negative, color: "negative" }) : null, d("div", { class: "q-uploader__file-header-content col" }, [d("div", { class: "q-uploader__title" }, [V.name]), d("div", { class: "q-uploader__subtitle row items-center no-wrap" }, [V.__sizeLabel + " / " + V.__progressLabel])]), V.__status === "uploading" ? d(Jm, { value: V.__progress, min: 0, max: 1, indeterminate: V.__progress === 0 }) : d(Je, { round: true, dense: true, flat: true, icon: i.iconSet.uploader[V.__status === "uploaded" ? "done" : "clear"], onClick: () => {
      le(V);
    } })])]));
  }
  We(() => {
    g.isUploading.value === true && g.abort(), g.files.value.length !== 0 && ye();
  });
  const ee = {};
  for (const V in g) yt(g[V]) === true ? Vt(ee, V, () => g[V].value) : ee[V] = g[V];
  return Object.assign(ee, { upload: O, reset: U, removeUploadedFiles: Q, removeQueuedFiles: Y, removeFile: le, pickFiles: _, addFiles: w }), nm(ee, { canAddFiles: () => H.value, canUpload: () => q.value, uploadSizeLabel: () => L.value, uploadProgressLabel: () => $.value }), t({ ...g, upload: O, reset: U, removeUploadedFiles: Q, removeQueuedFiles: Y, removeFile: le, pickFiles: _, addFiles: w, canAddFiles: H, canUpload: q, uploadSizeLabel: L, uploadProgressLabel: $ }), () => {
    const V = [d("div", { class: k.value }, B()), d("div", { class: "q-uploader__list scroll" }, M()), b("uploader")];
    g.isBusy.value === true && V.push(d("div", { class: "q-uploader__overlay absolute-full flex flex-center" }, [d(wn)]));
    const ne = { ref: h, class: A.value };
    return H.value === true && Object.assign(ne, { onDragover: T, onDragleave: y }), d("div", ne, V);
  };
}
var J_ = () => true;
function Gh(e) {
  const t = {};
  return e.forEach((n) => {
    t[n] = J_;
  }), t;
}
var ew = Gh(Xh), tw = ({ name: e, props: t, emits: n, injectPlugin: r }) => he({ name: e, props: { ...G_, ...t }, emits: Lt(n) === true ? { ...ew, ...n } : [...Xh, ...n], setup(l, { expose: a }) {
  return Z_(r, a);
} });
function jn(e) {
  return typeof e == "function" ? e : () => e;
}
var nw = "QUploader", lw = { url: [Function, String], method: { type: [Function, String], default: "POST" }, fieldName: { type: [Function, String], default: () => (e) => e.name }, headers: [Function, Array], formFields: [Function, Array], withCredentials: [Function, Boolean], sendRaw: [Function, Boolean], batch: [Function, Boolean], factory: Function }, rw = ["factoryFailed", "uploaded", "failed", "uploading"];
function aw({ props: e, emit: t, helpers: n }) {
  const r = W([]), l = W([]), a = W(0), o = v(() => ({ url: jn(e.url), method: jn(e.method), headers: jn(e.headers), formFields: jn(e.formFields), fieldName: jn(e.fieldName), withCredentials: jn(e.withCredentials), sendRaw: jn(e.sendRaw), batch: jn(e.batch) })), i = v(() => a.value > 0), u = v(() => l.value.length !== 0);
  let c;
  function s() {
    r.value.forEach((g) => {
      g.abort();
    }), l.value.length !== 0 && (c = true);
  }
  function f() {
    const g = n.queuedFiles.value.slice(0);
    n.queuedFiles.value = [], o.value.batch(g) ? h(g) : g.forEach((_) => {
      h([_]);
    });
  }
  function h(g) {
    if (a.value++, typeof e.factory != "function") {
      m(g, {});
      return;
    }
    const _ = e.factory(g);
    if (!_) t("factoryFailed", new Error("QUploader: factory() does not return properly"), g), a.value--;
    else if (typeof _.catch == "function" && typeof _.then == "function") {
      l.value.push(_);
      const w = (T) => {
        n.isAlive() === true && (l.value = l.value.filter((y) => y !== _), l.value.length === 0 && (c = false), n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach((y) => {
          n.updateFileStatus(y, "failed");
        }), t("factoryFailed", T, g), a.value--);
      };
      _.then((T) => {
        c === true ? w(new Error("Aborted")) : n.isAlive() === true && (l.value = l.value.filter((y) => y !== _), m(g, T));
      }).catch(w);
    } else m(g, _ || {});
  }
  function m(g, _) {
    const w = new FormData(), T = new XMLHttpRequest(), y = (q, A) => _[q] !== void 0 ? jn(_[q])(A) : o.value[q](A), p = y("url", g);
    if (!p) {
      console.error("q-uploader: invalid or no URL specified"), a.value--;
      return;
    }
    const b = y("formFields", g);
    b !== void 0 && b.forEach((q) => {
      w.append(q.name, q.value);
    });
    let C = 0, P = 0, F = 0, j = 0, $;
    T.upload.addEventListener("progress", (q) => {
      if ($ === true) return;
      const A = Math.min(j, q.loaded);
      n.uploadedSize.value += A - F, F = A;
      let k = F - P;
      for (let U = C; k > 0 && U < g.length; U++) {
        const Q = g[U];
        if (k > Q.size) k -= Q.size, C++, P += Q.size, n.updateFileStatus(Q, "uploading", Q.size);
        else {
          n.updateFileStatus(Q, "uploading", k);
          return;
        }
      }
    }, false), T.onreadystatechange = () => {
      T.readyState < 4 || (T.status && T.status < 400 ? (n.uploadedFiles.value = n.uploadedFiles.value.concat(g), g.forEach((q) => {
        n.updateFileStatus(q, "uploaded");
      }), t("uploaded", { files: g, xhr: T })) : ($ = true, n.uploadedSize.value -= F, n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach((q) => {
        n.updateFileStatus(q, "failed");
      }), t("failed", { files: g, xhr: T })), a.value--, r.value = r.value.filter((q) => q !== T));
    }, T.open(y("method", g), p), y("withCredentials", g) === true && (T.withCredentials = true);
    const L = y("headers", g);
    L !== void 0 && L.forEach((q) => {
      T.setRequestHeader(q.name, q.value);
    });
    const H = y("sendRaw", g);
    g.forEach((q) => {
      n.updateFileStatus(q, "uploading", 0), H !== true && w.append(y("fieldName", q), q, q.name), q.xhr = T, q.__abort = () => {
        T.abort();
      }, j += q.size;
    }), t("uploading", { files: g, xhr: T }), r.value.push(T), H === true ? T.send(new Blob(g)) : T.send(w);
  }
  return { isUploading: i, isBusy: u, abort: s, upload: f };
}
var ow = { name: nw, props: lw, emits: rw, injectPlugin: aw };
tw(ow);
he({ name: "QUploaderAddTrigger", setup() {
  const e = Mt(bm, ot);
  return e === ot && console.error("QUploaderAddTrigger needs to be child of QUploader"), e;
} });
he({ name: "QVideo", props: { ...Ys, src: { type: String, required: true }, title: String, fetchpriority: { type: String, default: "auto" }, loading: { type: String, default: "eager" }, referrerpolicy: { type: String, default: "strict-origin-when-cross-origin" } }, setup(e) {
  const t = Xs(e), n = v(() => "q-video" + (e.ratio !== void 0 ? " q-video--responsive" : ""));
  return () => d("div", { class: n.value, style: t.value }, [d("iframe", { src: e.src, title: e.title, fetchpriority: e.fetchpriority, loading: e.loading, referrerpolicy: e.referrerpolicy, frameborder: "0", allowfullscreen: true })]);
} });
function ef(e) {
  if (e === false) return 0;
  if (e === true || e === void 0) return 1;
  const t = parseInt(e, 10);
  return isNaN(t) ? 0 : t;
}
$n({ name: "close-popup", beforeMount(e, { value: t }) {
  const n = { depth: ef(t), handler(r) {
    n.depth !== 0 && setTimeout(() => {
      const l = ry(e);
      l !== void 0 && ay(l, r, n.depth);
    });
  }, handlerKey(r) {
    yn(r, 13) === true && n.handler(r);
  } };
  e.__qclosepopup = n, e.addEventListener("click", n.handler), e.addEventListener("keyup", n.handlerKey);
}, updated(e, { value: t, oldValue: n }) {
  t !== n && (e.__qclosepopup.depth = ef(t));
}, beforeUnmount(e) {
  const t = e.__qclosepopup;
  e.removeEventListener("click", t.handler), e.removeEventListener("keyup", t.handlerKey), delete e.__qclosepopup;
} });
var iw = 0, Hr = void 0;
function tf(e, t) {
  Hr === void 0 && (Hr = document.createElement("div"), Hr.style.cssText = "position: absolute; left: 0; top: 0", document.body.appendChild(Hr));
  const n = e.getBoundingClientRect(), r = Hr.getBoundingClientRect(), { marginLeft: l, marginRight: a, marginTop: o, marginBottom: i } = window.getComputedStyle(e), u = parseInt(l, 10) + parseInt(a, 10), c = parseInt(o, 10) + parseInt(i, 10);
  return { left: n.left - r.left, top: n.top - r.top, width: n.right - n.left, height: n.bottom - n.top, widthM: n.right - n.left + (t === true ? 0 : u), heightM: n.bottom - n.top + (t === true ? 0 : c), marginH: t === true ? u : 0, marginV: t === true ? c : 0 };
}
function to(e) {
  return { width: e.scrollWidth, height: e.scrollHeight };
}
var nf = ["Top", "Right", "Bottom", "Left"], lf = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], uw = /-block|-inline|block-|inline-/, sw = /(-block|-inline|block-|inline-).*:/;
function rf(e, t) {
  const n = window.getComputedStyle(e), r = {};
  for (let l = 0; l < t.length; l++) {
    const a = t[l];
    if (n[a] === "") if (a === "cssText") {
      const o = n.length;
      let i = "";
      for (let u = 0; u < o; u++) uw.test(n[u]) !== true && (i += n[u] + ": " + n[n[u]] + "; ");
      r[a] = i;
    } else if (["borderWidth", "borderStyle", "borderColor"].indexOf(a) !== -1) {
      const o = a.replace("border", "");
      let i = "";
      for (let u = 0; u < nf.length; u++) {
        const c = "border" + nf[u] + o;
        i += n[c] + " ";
      }
      r[a] = i;
    } else if (a === "borderRadius") {
      let o = "", i = "";
      for (let u = 0; u < lf.length; u++) {
        const c = n[lf[u]].split(" ");
        o += c[0] + " ", i += (c[1] === void 0 ? c[0] : c[1]) + " ";
      }
      r[a] = o + "/ " + i;
    } else r[a] = n[a];
    else a === "cssText" ? r[a] = n[a].split(";").filter((o) => sw.test(o) !== true).join(";") : r[a] = n[a];
  }
  return r;
}
var cw = ["absolute", "fixed", "relative", "sticky"];
function af(e) {
  let t = e, n = 0;
  for (; t !== null && t !== document; ) {
    const { position: r, zIndex: l } = window.getComputedStyle(t), a = Number(l);
    a > n && (t === e || cw.includes(r) === true) && (n = a), t = t.parentNode;
  }
  return n;
}
function dw(e) {
  return { from: e.from, to: e.to !== void 0 ? e.to : e.from };
}
function fw(e) {
  return typeof e == "number" ? e = { duration: e } : typeof e == "function" && (e = { onEnd: e }), { ...e, waitFor: e.waitFor === void 0 ? 0 : e.waitFor, duration: isNaN(e.duration) === true ? 300 : parseInt(e.duration, 10), easing: typeof e.easing == "string" && e.easing.length !== 0 ? e.easing : "ease-in-out", delay: isNaN(e.delay) === true ? 0 : parseInt(e.delay, 10), fill: typeof e.fill == "string" && e.fill.length !== 0 ? e.fill : "none", resize: e.resize === true, useCSS: e.useCSS === true || e.usecss === true, hideFromClone: e.hideFromClone === true || e.hidefromclone === true, keepToClone: e.keepToClone === true || e.keeptoclone === true, tween: e.tween === true, tweenFromOpacity: isNaN(e.tweenFromOpacity) === true ? 0.6 : parseFloat(e.tweenFromOpacity), tweenToOpacity: isNaN(e.tweenToOpacity) === true ? 0.5 : parseFloat(e.tweenToOpacity) };
}
function of(e) {
  const t = typeof e;
  return t === "function" ? e() : t === "string" ? document.querySelector(e) : e;
}
function uf(e) {
  return e && e.ownerDocument === document && e.parentNode !== null;
}
function vw(e) {
  let t = () => false, n = false, r = true;
  const l = dw(e), a = fw(e), o = of(l.from);
  if (uf(o) !== true) return t;
  typeof o.qMorphCancel == "function" && o.qMorphCancel();
  let i, u, c, s;
  const f = o.parentNode, h = o.nextElementSibling, m = tf(o, a.resize), { width: g, height: _ } = to(f), { borderWidth: w, borderStyle: T, borderColor: y, borderRadius: p, backgroundColor: b, transform: C, position: P, cssText: F } = rf(o, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), j = o.classList.toString(), $ = o.style.cssText, L = o.cloneNode(true), H = a.tween === true ? o.cloneNode(true) : void 0;
  H !== void 0 && (H.className = H.classList.toString().split(" ").filter((A) => /^bg-/.test(A) === false).join(" ")), a.hideFromClone === true && L.classList.add("q-morph--internal"), L.setAttribute("aria-hidden", "true"), L.style.transition = "none", L.style.animation = "none", L.style.pointerEvents = "none", f.insertBefore(L, h), o.qMorphCancel = () => {
    n = true, L.remove(), H == null ? void 0 : H.remove(), a.hideFromClone === true && L.classList.remove("q-morph--internal"), o.qMorphCancel = void 0;
  };
  const q = () => {
    const A = of(l.to);
    if (n === true || uf(A) !== true) {
      typeof o.qMorphCancel == "function" && o.qMorphCancel();
      return;
    }
    o !== A && typeof A.qMorphCancel == "function" && A.qMorphCancel(), a.keepToClone !== true && A.classList.add("q-morph--internal"), L.classList.add("q-morph--internal");
    const { width: k, height: U } = to(f), { width: Q, height: Y } = to(A.parentNode);
    a.hideFromClone !== true && L.classList.remove("q-morph--internal"), A.qMorphCancel = () => {
      n = true, L.remove(), H == null ? void 0 : H.remove(), a.hideFromClone === true && L.classList.remove("q-morph--internal"), a.keepToClone !== true && A.classList.remove("q-morph--internal"), o.qMorphCancel = void 0, A.qMorphCancel = void 0;
    };
    const X = () => {
      if (n === true) {
        typeof A.qMorphCancel == "function" && A.qMorphCancel();
        return;
      }
      a.hideFromClone !== true && (L.classList.add("q-morph--internal"), L.innerHTML = "", L.style.left = 0, L.style.right = "unset", L.style.top = 0, L.style.bottom = "unset", L.style.transform = "none"), a.keepToClone !== true && A.classList.remove("q-morph--internal");
      const le = A.parentNode, { width: ye, height: R } = to(le), x = A.cloneNode(a.keepToClone);
      x.setAttribute("aria-hidden", "true"), a.keepToClone !== true && (x.style.left = 0, x.style.right = "unset", x.style.top = 0, x.style.bottom = "unset", x.style.transform = "none", x.style.pointerEvents = "none"), x.classList.add("q-morph--internal");
      const O = A === o && f === le ? L : A.nextElementSibling;
      le.insertBefore(x, O);
      const { borderWidth: Z, borderStyle: oe, borderColor: B, borderRadius: M, backgroundColor: ee, transform: V, position: ne, cssText: pe } = rf(A, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), S = A.classList.toString(), E = A.style.cssText;
      A.style.cssText = pe, A.style.transform = "none", A.style.animation = "none", A.style.transition = "none", A.className = S.split(" ").filter((_e2) => /^bg-/.test(_e2) === false).join(" ");
      const z = tf(A, a.resize), te = m.left - z.left, D = m.top - z.top, I = m.width / (z.width > 0 ? z.width : 10), se = m.height / (z.height > 0 ? z.height : 100), me = g - k, fe = _ - U, de = ye - Q, re = R - Y, K = Math.max(m.widthM, me), ie = Math.max(m.heightM, fe), we = Math.max(z.widthM, de), ke = Math.max(z.heightM, re), Te = o === A && ["absolute", "fixed"].includes(ne) === false && ["absolute", "fixed"].includes(P) === false;
      let Me = ne === "fixed", He = le;
      for (; Me !== true && He !== document; ) Me = window.getComputedStyle(He).position === "fixed", He = He.parentNode;
      if (a.hideFromClone !== true && (L.style.display = "block", L.style.flex = "0 0 auto", L.style.opacity = 0, L.style.minWidth = "unset", L.style.maxWidth = "unset", L.style.minHeight = "unset", L.style.maxHeight = "unset", L.classList.remove("q-morph--internal")), a.keepToClone !== true && (x.style.display = "block", x.style.flex = "0 0 auto", x.style.opacity = 0, x.style.minWidth = "unset", x.style.maxWidth = "unset", x.style.minHeight = "unset", x.style.maxHeight = "unset"), x.classList.remove("q-morph--internal"), typeof a.classes == "string" && (A.className += " " + a.classes), typeof a.style == "string") A.style.cssText += " " + a.style;
      else if (Lt(a.style) === true) for (const _e2 in a.style) A.style[_e2] = a.style[_e2];
      const De = af(L), ue = af(A), be = Me === true ? document.documentElement : { scrollLeft: 0, scrollTop: 0 };
      A.style.position = Me === true ? "fixed" : "absolute", A.style.left = `${z.left - be.scrollLeft}px`, A.style.right = "unset", A.style.top = `${z.top - be.scrollTop}px`, A.style.margin = 0, a.resize === true && (A.style.minWidth = "unset", A.style.maxWidth = "unset", A.style.minHeight = "unset", A.style.maxHeight = "unset", A.style.overflow = "hidden", A.style.overflowX = "hidden", A.style.overflowY = "hidden"), document.body.appendChild(A), H !== void 0 && (H.style.cssText = F, H.style.transform = "none", H.style.animation = "none", H.style.transition = "none", H.style.position = A.style.position, H.style.left = `${m.left - be.scrollLeft}px`, H.style.right = "unset", H.style.top = `${m.top - be.scrollTop}px`, H.style.margin = 0, H.style.pointerEvents = "none", a.resize === true && (H.style.minWidth = "unset", H.style.maxWidth = "unset", H.style.minHeight = "unset", H.style.maxHeight = "unset", H.style.overflow = "hidden", H.style.overflowX = "hidden", H.style.overflowY = "hidden"), document.body.appendChild(H));
      const ae = (_e2) => {
        o === A && r !== true ? (A.style.cssText = $, A.className = j) : (A.style.cssText = E, A.className = S), x.parentNode === le && le.insertBefore(A, x), L.remove(), x.remove(), H == null ? void 0 : H.remove(), t = () => false, o.qMorphCancel = void 0, A.qMorphCancel = void 0, typeof a.onEnd == "function" && a.onEnd(r === true ? "to" : "from", _e2 === true);
      };
      if (a.useCSS !== true && typeof A.animate == "function") {
        const _e2 = a.resize === true ? { transform: `translate(${te}px, ${D}px)`, width: `${K}px`, height: `${ie}px` } : { transform: `translate(${te}px, ${D}px) scale(${I}, ${se})` }, Ce = a.resize === true ? { width: `${we}px`, height: `${ke}px` } : {}, Oe = a.resize === true ? { width: `${K}px`, height: `${ie}px` } : {}, Re = a.resize === true ? { transform: `translate(${-1 * te}px, ${-1 * D}px)`, width: `${we}px`, height: `${ke}px` } : { transform: `translate(${-1 * te}px, ${-1 * D}px) scale(${1 / I}, ${1 / se})` }, Xe = H !== void 0 ? { opacity: a.tweenToOpacity } : { backgroundColor: b }, it = H !== void 0 ? { opacity: 1 } : { backgroundColor: ee };
        s = A.animate([{ margin: 0, borderWidth: w, borderStyle: T, borderColor: y, borderRadius: p, zIndex: De, transformOrigin: "0 0", ..._e2, ...Xe }, { margin: 0, borderWidth: Z, borderStyle: oe, borderColor: B, borderRadius: M, zIndex: ue, transformOrigin: "0 0", transform: V, ...Ce, ...it }], { duration: a.duration, easing: a.easing, fill: a.fill, delay: a.delay }), u = H === void 0 ? void 0 : H.animate([{ opacity: a.tweenFromOpacity, margin: 0, borderWidth: w, borderStyle: T, borderColor: y, borderRadius: p, zIndex: De, transformOrigin: "0 0", transform: C, ...Oe }, { opacity: 0, margin: 0, borderWidth: Z, borderStyle: oe, borderColor: B, borderRadius: M, zIndex: ue, transformOrigin: "0 0", ...Re }], { duration: a.duration, easing: a.easing, fill: a.fill, delay: a.delay }), i = a.hideFromClone === true || Te === true ? void 0 : L.animate([{ margin: `${fe < 0 ? fe / 2 : 0}px ${me < 0 ? me / 2 : 0}px`, width: `${K + m.marginH}px`, height: `${ie + m.marginV}px` }, { margin: 0, width: 0, height: 0 }], { duration: a.duration, easing: a.easing, fill: a.fill, delay: a.delay }), c = a.keepToClone === true ? void 0 : x.animate([Te === true ? { margin: `${fe < 0 ? fe / 2 : 0}px ${me < 0 ? me / 2 : 0}px`, width: `${K + m.marginH}px`, height: `${ie + m.marginV}px` } : { margin: 0, width: 0, height: 0 }, { margin: `${re < 0 ? re / 2 : 0}px ${de < 0 ? de / 2 : 0}px`, width: `${we + z.marginH}px`, height: `${ke + z.marginV}px` }], { duration: a.duration, easing: a.easing, fill: a.fill, delay: a.delay });
        const Ct = (Ut) => {
          i == null ? void 0 : i.cancel(), u == null ? void 0 : u.cancel(), c == null ? void 0 : c.cancel(), s.cancel(), s.removeEventListener("finish", Ct), s.removeEventListener("cancel", Ct), ae(Ut), i = void 0, u = void 0, c = void 0, s = void 0;
        };
        o.qMorphCancel = () => {
          o.qMorphCancel = void 0, n = true, Ct();
        }, A.qMorphCancel = () => {
          A.qMorphCancel = void 0, n = true, Ct();
        }, s.addEventListener("finish", Ct), s.addEventListener("cancel", Ct), t = (Ut) => n === true || s === void 0 ? false : Ut === true ? (Ct(true), true) : (r = r !== true, i == null ? void 0 : i.reverse(), u == null ? void 0 : u.reverse(), c == null ? void 0 : c.reverse(), s.reverse(), true);
      } else {
        const _e2 = `q-morph-anim-${++iw}`, Ce = document.createElement("style"), Oe = a.resize === true ? `
            transform: translate(${te}px, ${D}px);
            width: ${K}px;
            height: ${ie}px;
          ` : `transform: translate(${te}px, ${D}px) scale(${I}, ${se});`, Re = a.resize === true ? `
            width: ${we}px;
            height: ${ke}px;
          ` : "", Xe = a.resize === true ? `
            width: ${K}px;
            height: ${ie}px;
          ` : "", it = a.resize === true ? `
            transform: translate(${-1 * te}px, ${-1 * D}px);
            width: ${we}px;
            height: ${ke}px;
          ` : `transform: translate(${-1 * te}px, ${-1 * D}px) scale(${1 / I}, ${1 / se});`, Ct = H !== void 0 ? `opacity: ${a.tweenToOpacity};` : `background-color: ${b};`, Ut = H !== void 0 ? "opacity: 1;" : `background-color: ${ee};`, nl = H === void 0 ? "" : `
            @keyframes ${_e2}-from-tween {
              0% {
                opacity: ${a.tweenFromOpacity};
                margin: 0;
                border-width: ${w};
                border-style: ${T};
                border-color: ${y};
                border-radius: ${p};
                z-index: ${De};
                transform-origin: 0 0;
                transform: ${C};
                ${Xe}
              }

              100% {
                opacity: 0;
                margin: 0;
                border-width: ${Z};
                border-style: ${oe};
                border-color: ${B};
                border-radius: ${M};
                z-index: ${ue};
                transform-origin: 0 0;
                ${it}
              }
            }
          `, an = a.hideFromClone === true || Te === true ? "" : `
            @keyframes ${_e2}-from {
              0% {
                margin: ${fe < 0 ? fe / 2 : 0}px ${me < 0 ? me / 2 : 0}px;
                width: ${K + m.marginH}px;
                height: ${ie + m.marginV}px;
              }

              100% {
                margin: 0;
                width: 0;
                height: 0;
              }
            }
          `, zn = Te === true ? `
            margin: ${fe < 0 ? fe / 2 : 0}px ${me < 0 ? me / 2 : 0}px;
            width: ${K + m.marginH}px;
            height: ${ie + m.marginV}px;
          ` : `
            margin: 0;
            width: 0;
            height: 0;
          `, ce = a.keepToClone === true ? "" : `
            @keyframes ${_e2}-to {
              0% {
                ${zn}
              }

              100% {
                margin: ${re < 0 ? re / 2 : 0}px ${de < 0 ? de / 2 : 0}px;
                width: ${we + z.marginH}px;
                height: ${ke + z.marginV}px;
              }
            }
          `;
        Ce.innerHTML = `
          @keyframes ${_e2} {
            0% {
              margin: 0;
              border-width: ${w};
              border-style: ${T};
              border-color: ${y};
              border-radius: ${p};
              background-color: ${b};
              z-index: ${De};
              transform-origin: 0 0;
              ${Oe}
              ${Ct}
            }

            100% {
              margin: 0;
              border-width: ${Z};
              border-style: ${oe};
              border-color: ${B};
              border-radius: ${M};
              background-color: ${ee};
              z-index: ${ue};
              transform-origin: 0 0;
              transform: ${V};
              ${Re}
              ${Ut}
            }
          }

          ${an}

          ${nl}

          ${ce}
        `, document.head.appendChild(Ce);
        let Se = "normal";
        L.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${Se} ${a.fill} ${_e2}-from`, H !== void 0 && (H.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${Se} ${a.fill} ${_e2}-from-tween`), x.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${Se} ${a.fill} ${_e2}-to`, A.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${Se} ${a.fill} ${_e2}`;
        const Fe = (Be) => {
          Be === Object(Be) && Be.animationName !== _e2 || (A.removeEventListener("animationend", Fe), A.removeEventListener("animationcancel", Fe), ae(), Ce.remove());
        };
        o.qMorphCancel = () => {
          o.qMorphCancel = void 0, n = true, Fe();
        }, A.qMorphCancel = () => {
          A.qMorphCancel = void 0, n = true, Fe();
        }, A.addEventListener("animationend", Fe), A.addEventListener("animationcancel", Fe), t = (Be) => n === true || !A || !L || !x ? false : Be === true ? (Fe(), true) : (r = r !== true, Se = Se === "normal" ? "reverse" : "normal", L.style.animationDirection = Se, H.style.animationDirection = Se, x.style.animationDirection = Se, A.style.animationDirection = Se, true);
      }
    };
    a.waitFor > 0 || a.waitFor === "transitionend" || a.waitFor === Object(a.waitFor) && typeof a.waitFor.then == "function" ? (a.waitFor > 0 ? new Promise((ye) => setTimeout(ye, a.waitFor)) : a.waitFor === "transitionend" ? new Promise((ye) => {
      const R = () => {
        x !== null && (clearTimeout(x), x = null), A && (A.removeEventListener("transitionend", R), A.removeEventListener("transitioncancel", R)), ye();
      };
      let x = setTimeout(R, 400);
      A.addEventListener("transitionend", R), A.addEventListener("transitioncancel", R);
    }) : a.waitFor).then(X).catch(() => {
      typeof A.qMorphCancel == "function" && A.qMorphCancel();
    }) : X();
  };
  return typeof e.onToggle == "function" && e.onToggle(), requestAnimationFrame(q), (A) => t(A);
}
var jo = {}, mw = ["duration", "delay", "easing", "fill", "classes", "style", "duration", "resize", "useCSS", "hideFromClone", "keepToClone", "tween", "tweenFromOpacity", "tweenToOpacity", "waitFor", "onEnd"], hw = ["resize", "useCSS", "hideFromClone", "keepToClone", "tween"];
function fr(e, t) {
  e.clsAction !== t && (e.clsAction = t, e.el.classList[t]("q-morph--invisible"));
}
function Zh(e) {
  if (e.animating === true || e.queue.length < 2) return;
  const [t, n] = e.queue;
  e.animating = true, t.animating = true, n.animating = true, fr(t, "remove"), fr(n, "remove");
  const r = vw({ from: t.el, to: n.el, onToggle() {
    fr(t, "add"), fr(n, "remove");
  }, ...n.opts, onEnd(l, a) {
    var _a3, _b2;
    (_b2 = (_a3 = n.opts).onEnd) == null ? void 0 : _b2.call(_a3, l, a), a !== true && (t.animating = false, n.animating = false, e.animating = false, e.cancel = void 0, e.queue.shift(), Zh(e));
  } });
  e.cancel = () => {
    r(true), e.cancel = void 0;
  };
}
function Jh(e, t) {
  const n = t.opts;
  hw.forEach((r) => {
    n[r] = e[r] === true;
  });
}
function gw(e, t) {
  const n = typeof e == "string" && e.length !== 0 ? e.split(":") : [];
  t.name = n[0], t.group = n[1], Object.assign(t.opts, { duration: isNaN(n[2]) === true ? 300 : parseFloat(n[2]), waitFor: n[3] });
}
function bw(e, t) {
  e.group !== void 0 && (t.group = e.group), e.name !== void 0 && (t.name = e.name);
  const n = t.opts;
  mw.forEach((r) => {
    e[r] !== void 0 && (n[r] = e[r]);
  });
}
function pw(e, t) {
  if (t.name === e) {
    const n = jo[t.group];
    n === void 0 ? (jo[t.group] = { name: t.group, model: e, queue: [t], animating: false }, fr(t, "remove")) : n.model !== e && (n.model = e, n.queue.push(t), n.animating === false && n.queue.length === 2 && Zh(n));
    return;
  }
  t.animating === false && fr(t, "add");
}
function sf(e, t) {
  let n;
  Object(t) === t ? (n = "" + t.model, bw(t, e), Jh(t, e)) : n = "" + t, n !== e.model ? (e.model = n, pw(n, e)) : e.animating === false && e.clsAction !== void 0 && e.el.classList[e.clsAction]("q-morph--invisible");
}
$n({ name: "morph", mounted(e, t) {
  const n = { el: e, animating: false, opts: {} };
  Jh(t.modifiers, n), gw(t.arg, n), sf(n, t.value), e.__qmorph = n;
}, updated(e, t) {
  sf(e.__qmorph, t.value);
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qmorph, n = jo[t.group];
  n !== void 0 && n.queue.indexOf(t) !== -1 && (n.queue = n.queue.filter((l) => l !== t), n.queue.length === 0 && ((_a3 = n.cancel) == null ? void 0 : _a3.call(n), delete jo[t.group])), t.clsAction === "add" && e.classList.remove("q-morph--invisible"), delete e.__qmorph;
} });
var yw = { childList: true, subtree: true, attributes: true, characterData: true, attributeOldValue: true, characterDataOldValue: true };
function cf(e, t, n) {
  var _a3;
  t.handler = n, (_a3 = t.observer) == null ? void 0 : _a3.disconnect(), t.observer = new MutationObserver((r) => {
    typeof t.handler == "function" && (t.handler(r) === false || t.once === true) && eg(e);
  }), t.observer.observe(e, t.opts);
}
function eg(e) {
  var _a3;
  const t = e.__qmutation;
  t !== void 0 && ((_a3 = t.observer) == null ? void 0 : _a3.disconnect(), delete e.__qmutation);
}
$n({ name: "mutation", mounted(e, { modifiers: { once: t, ...n }, value: r }) {
  const l = { once: t, opts: Object.keys(n).length === 0 ? yw : n };
  cf(e, l, r), e.__qmutation = l;
}, updated(e, { oldValue: t, value: n }) {
  const r = e.__qmutation;
  r !== void 0 && t !== n && cf(e, r, n);
}, beforeUnmount: eg });
var { passive: Uo } = ft;
function df(e, { value: t, oldValue: n }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, Uo);
    return;
  }
  e.handler = t, typeof n != "function" && (e.scrollTarget.addEventListener("scroll", e.scroll, Uo), e.scroll());
}
$n({ name: "scroll-fire", mounted(e, t) {
  const n = { scrollTarget: In(e), scroll: Ar(() => {
    let r, l;
    n.scrollTarget === window ? (l = e.getBoundingClientRect().bottom, r = window.innerHeight) : (l = Po(e).top + kr(e), r = Po(n.scrollTarget).top + kr(n.scrollTarget)), l > 0 && l < r && (n.scrollTarget.removeEventListener("scroll", n.scroll, Uo), n.handler(e));
  }, 25) };
  df(n, t), e.__qscrollfire = n;
}, updated(e, t) {
  t.value !== t.oldValue && df(e.__qscrollfire, t);
}, beforeUnmount(e) {
  const t = e.__qscrollfire;
  t.scrollTarget.removeEventListener("scroll", t.scroll, Uo), t.scroll.cancel(), delete e.__qscrollfire;
} });
function ff(e, { value: t, oldValue: n }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, ft.passive);
    return;
  }
  e.handler = t, typeof n != "function" && e.scrollTarget.addEventListener("scroll", e.scroll, ft.passive);
}
$n({ name: "scroll", mounted(e, t) {
  const n = { scrollTarget: In(e), scroll() {
    n.handler(yl(n.scrollTarget), mi(n.scrollTarget));
  } };
  ff(n, t), e.__qscroll = n;
}, updated(e, t) {
  e.__qscroll !== void 0 && t.oldValue !== t.value && ff(e.__qscroll, t);
}, beforeUnmount(e) {
  const t = e.__qscroll;
  t.scrollTarget.removeEventListener("scroll", t.scroll, ft.passive), delete e.__qscroll;
} });
$n({ name: "touch-hold", beforeMount(e, t) {
  const { modifiers: n } = t;
  if (n.mouse !== true && Ie.has.touch !== true) return;
  const r = { handler: t.value, noop: xt, mouseStart(a) {
    typeof r.handler == "function" && ui(a) === true && (Tt(r, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]), r.start(a, true));
  }, touchStart(a) {
    if (a.target !== void 0 && typeof r.handler == "function") {
      const o = a.target;
      Tt(r, "temp", [[o, "touchmove", "move", "passiveCapture"], [o, "touchcancel", "end", "notPassiveCapture"], [o, "touchend", "end", "notPassiveCapture"]]), r.start(a);
    }
  }, start(a, o) {
    r.origin = tn(a);
    const i = Date.now();
    Ie.is.mobile === true && (document.body.classList.add("non-selectable"), Rn(), r.styleCleanup = (u) => {
      r.styleCleanup = void 0;
      const c = () => {
        document.body.classList.remove("non-selectable");
      };
      u === true ? (Rn(), setTimeout(c, 10)) : c();
    }), r.triggered = false, r.sensitivity = o === true ? r.mouseSensitivity : r.touchSensitivity, r.timer = setTimeout(() => {
      r.timer = void 0, Rn(), r.triggered = true, r.handler({ evt: a, touch: o !== true, mouse: o === true, position: r.origin, duration: Date.now() - i });
    }, r.duration);
  }, move(a) {
    const { top: o, left: i } = tn(a);
    r.timer !== void 0 && (Math.abs(i - r.origin.left) >= r.sensitivity || Math.abs(o - r.origin.top) >= r.sensitivity) && (clearTimeout(r.timer), r.timer = void 0);
  }, end(a) {
    var _a3;
    Yt(r, "temp"), (_a3 = r.styleCleanup) == null ? void 0 : _a3.call(r, r.triggered), r.triggered === true ? a !== void 0 && je(a) : r.timer !== void 0 && (clearTimeout(r.timer), r.timer = void 0);
  } }, l = [600, 5, 7];
  if (typeof t.arg == "string" && t.arg.length !== 0 && t.arg.split(":").forEach((a, o) => {
    const i = parseInt(a, 10);
    i && (l[o] = i);
  }), [r.duration, r.touchSensitivity, r.mouseSensitivity] = l, e.__qtouchhold = r, n.mouse === true) {
    const a = n.mouseCapture === true || n.mousecapture === true ? "Capture" : "";
    Tt(r, "main", [[e, "mousedown", "mouseStart", `passive${a}`]]);
  }
  Ie.has.touch === true && Tt(r, "main", [[e, "touchstart", "touchStart", `passive${n.capture === true ? "Capture" : ""}`], [e, "touchend", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const n = e.__qtouchhold;
  n !== void 0 && t.oldValue !== t.value && (typeof t.value != "function" && n.end(), n.handler = t.value);
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qtouchhold;
  t !== void 0 && (Yt(t, "main"), Yt(t, "temp"), t.timer !== void 0 && clearTimeout(t.timer), (_a3 = t.styleCleanup) == null ? void 0 : _a3.call(t), delete e.__qtouchhold);
} });
var tg = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] }, _w = new RegExp(`^([\\d+]+|${Object.keys(tg).join("|")})$`, "i");
function ww(e, t) {
  const { top: n, left: r } = tn(e);
  return Math.abs(r - t.left) >= 7 || Math.abs(n - t.top) >= 7;
}
$n({ name: "touch-repeat", beforeMount(e, { modifiers: t, value: n, arg: r }) {
  const l = Object.keys(t).reduce((u, c) => {
    if (_w.test(c) === true) {
      const s = isNaN(parseInt(c, 10)) ? tg[c.toLowerCase()] : parseInt(c, 10);
      s >= 0 && u.push(s);
    }
    return u;
  }, []);
  if (t.mouse !== true && Ie.has.touch !== true && l.length === 0) return;
  const a = typeof r == "string" && r.length !== 0 ? r.split(":").map((u) => parseInt(u, 10)) : [0, 600, 300], o = a.length - 1, i = { keyboard: l, handler: n, noop: xt, mouseStart(u) {
    i.event === void 0 && typeof i.handler == "function" && ui(u) === true && (Tt(i, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]), i.start(u, true));
  }, keyboardStart(u) {
    if (typeof i.handler == "function" && yn(u, l) === true) {
      if ((a[0] === 0 || i.event !== void 0) && (je(u), e.focus(), i.event !== void 0)) return;
      Tt(i, "temp", [[document, "keyup", "end", "notPassiveCapture"], [document, "click", "end", "notPassiveCapture"]]), i.start(u, false, true);
    }
  }, touchStart(u) {
    if (u.target !== void 0 && typeof i.handler == "function") {
      const c = u.target;
      Tt(i, "temp", [[c, "touchmove", "move", "passiveCapture"], [c, "touchcancel", "end", "notPassiveCapture"], [c, "touchend", "end", "notPassiveCapture"]]), i.start(u);
    }
  }, start(u, c, s) {
    s !== true && (i.origin = tn(u));
    function f(m) {
      i.styleCleanup = void 0, document.documentElement.style.cursor = "";
      const g = () => {
        document.body.classList.remove("non-selectable");
      };
      m === true ? (Rn(), setTimeout(g, 10)) : g();
    }
    Ie.is.mobile === true && (document.body.classList.add("non-selectable"), Rn(), i.styleCleanup = f), i.event = { touch: c !== true && s !== true, mouse: c === true, keyboard: s === true, startTime: Date.now(), repeatCount: 0 };
    const h = () => {
      if (i.timer = void 0, i.event === void 0) return;
      i.event.repeatCount === 0 && (i.event.evt = u, s === true ? i.event.keyCode = u.keyCode : i.event.position = tn(u), Ie.is.mobile !== true && (document.documentElement.style.cursor = "pointer", document.body.classList.add("non-selectable"), Rn(), i.styleCleanup = f)), i.event.duration = Date.now() - i.event.startTime, i.event.repeatCount += 1, i.handler(i.event);
      const m = o < i.event.repeatCount ? o : i.event.repeatCount;
      i.timer = setTimeout(h, a[m]);
    };
    a[0] === 0 ? h() : i.timer = setTimeout(h, a[0]);
  }, move(u) {
    i.event !== void 0 && i.timer !== void 0 && ww(u, i.origin) === true && (clearTimeout(i.timer), i.timer = void 0);
  }, end(u) {
    var _a3;
    i.event !== void 0 && ((_a3 = i.styleCleanup) == null ? void 0 : _a3.call(i, true), u !== void 0 && i.event.repeatCount > 0 && je(u), Yt(i, "temp"), i.timer !== void 0 && (clearTimeout(i.timer), i.timer = void 0), i.event = void 0);
  } };
  if (e.__qtouchrepeat = i, t.mouse === true) {
    const u = t.mouseCapture === true || t.mousecapture === true ? "Capture" : "";
    Tt(i, "main", [[e, "mousedown", "mouseStart", `passive${u}`]]);
  }
  if (Ie.has.touch === true && Tt(i, "main", [[e, "touchstart", "touchStart", `passive${t.capture === true ? "Capture" : ""}`], [e, "touchend", "noop", "passiveCapture"]]), l.length !== 0) {
    const u = t.keyCapture === true || t.keycapture === true ? "Capture" : "";
    Tt(i, "main", [[e, "keydown", "keyboardStart", `notPassive${u}`]]);
  }
}, updated(e, { oldValue: t, value: n }) {
  const r = e.__qtouchrepeat;
  r !== void 0 && t !== n && (typeof n != "function" && r.end(), r.handler = n);
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qtouchrepeat;
  t !== void 0 && (t.timer !== void 0 && clearTimeout(t.timer), Yt(t, "main"), Yt(t, "temp"), (_a3 = t.styleCleanup) == null ? void 0 : _a3.call(t), delete e.__qtouchrepeat);
} });
function xw(e, t = document.body) {
  if (!(t instanceof Element)) throw new TypeError("Expected a DOM element");
  return getComputedStyle(t).getPropertyValue(`--q-${e}`).trim() || null;
}
var no;
function Sw() {
  return Ie.is.winphone ? "msapplication-navbutton-color" : Ie.is.safari ? "apple-mobile-web-app-status-bar-style" : "theme-color";
}
function Cw(e) {
  const t = document.getElementsByTagName("META");
  for (const n in t) if (t[n].name === e) return t[n];
}
function kw(e) {
  no === void 0 && (no = Sw());
  let t = Cw(no);
  const n = t === void 0;
  n && (t = document.createElement("meta"), t.setAttribute("name", no)), t.setAttribute("content", e), n && document.head.appendChild(t);
}
Ie.is.mobile === true && (Ie.is.nativeMobile === true || Ie.is.winphone === true || Ie.is.safari === true || Ie.is.webkit === true || Ie.is.vivaldi);
var jr = {};
function Tw(e) {
  Object.assign(Kt, { request: e, exit: e, toggle: e });
}
function ng() {
  return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || null;
}
function lg() {
  const e = Kt.activeEl = Kt.isActive === false ? null : ng();
  ly(e === null || e === document.documentElement ? document.body : e);
}
function qw() {
  Kt.isActive = Kt.isActive === false, lg();
}
function vf(e, t) {
  try {
    const n = e[t]();
    return n === void 0 ? Promise.resolve() : n;
  } catch (n) {
    return Promise.reject(n);
  }
}
var Kt = Tl({ isActive: false, activeEl: null }, { isCapable: false, install({ $q: e }) {
  e.fullscreen = this;
} });
jr.request = ["requestFullscreen", "msRequestFullscreen", "mozRequestFullScreen", "webkitRequestFullscreen"].find((e) => document.documentElement[e] !== void 0), Kt.isCapable = jr.request !== void 0, Kt.isCapable === false ? Tw(() => Promise.reject("Not capable")) : (Object.assign(Kt, { request(e) {
  const t = e || document.documentElement, { activeEl: n } = Kt;
  return t === n ? Promise.resolve() : (n !== null && t.contains(n) === true ? Kt.exit() : Promise.resolve()).finally(() => vf(t, jr.request));
}, exit() {
  return Kt.isActive === true ? vf(document, jr.exit) : Promise.resolve();
}, toggle(e) {
  return Kt.isActive === true ? Kt.exit() : Kt.request(e);
} }), jr.exit = ["exitFullscreen", "msExitFullscreen", "mozCancelFullScreen", "webkitExitFullscreen"].find((e) => document[e]), Kt.isActive = !!ng(), Kt.isActive === true && lg(), ["onfullscreenchange", "onmsfullscreenchange", "onwebkitfullscreenchange"].forEach((e) => {
  document[e] = qw;
}));
var Mw = Tl({ appVisible: true }, { install({ $q: e }) {
  Vt(e, "appVisible", () => this.appVisible);
} });
{
  let e, t;
  if (typeof document.hidden < "u" ? (e = "hidden", t = "visibilitychange") : typeof document.msHidden < "u" ? (e = "msHidden", t = "msvisibilitychange") : typeof document.webkitHidden < "u" && (e = "webkitHidden", t = "webkitvisibilitychange"), t && typeof document[e] < "u") {
    const n = () => {
      Mw.appVisible = !document[e];
    };
    document.addEventListener(t, n, false);
  }
}
he({ name: "BottomSheetComponent", props: { ...nt, title: String, message: String, actions: Array, grid: Boolean, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), r = lt(e, n.$q), l = W(null);
  function a() {
    l.value.show();
  }
  function o() {
    l.value.hide();
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
      return m.label === void 0 ? d(Yl, { class: "col-all", dark: r.value }) : d("div", { class: ["q-bottom-sheet__item q-hoverable q-focusable cursor-pointer relative-position", m.class], style: m.style, tabindex: 0, role: "listitem", onClick() {
        i(m);
      }, onKeyup(_) {
        _.keyCode === 13 && i(m);
      } }, [d("div", { class: "q-focus-helper" }), m.icon ? d(et, { name: m.icon, color: m.color }) : g ? d("img", { class: m.avatar ? "q-bottom-sheet__avatar" : "", src: g }) : d("div", { class: "q-bottom-sheet__empty-icon" }), d("div", m.label)]);
    });
  }
  function s() {
    return e.actions.map((m) => {
      const g = m.avatar || m.img;
      return m.label === void 0 ? d(Yl, { spaced: true, dark: r.value }) : d(qr, { class: ["q-bottom-sheet__item", m.classes], style: m.style, tabindex: 0, clickable: true, dark: r.value, onClick() {
        i(m);
      } }, () => [d(hn, { avatar: true }, () => m.icon ? d(et, { name: m.icon, color: m.color }) : g ? d("img", { class: m.avatar ? "q-bottom-sheet__avatar" : "", src: g }) : null), d(hn, () => m.label)]);
    });
  }
  function f() {
    const m = [];
    return e.title && m.push(d(Dl, { class: "q-dialog__title" }, () => e.title)), e.message && m.push(d(Dl, { class: "q-dialog__message" }, () => e.message)), m.push(e.grid === true ? d("div", { class: "row items-stretch justify-start", role: "list" }, c()) : d("div", { role: "list" }, s())), m;
  }
  function h() {
    return [d(jm, { class: [`q-bottom-sheet q-bottom-sheet--${e.grid === true ? "grid" : "list"}` + (r.value === true ? " q-bottom-sheet--dark q-dark" : ""), e.cardClass], style: e.cardStyle }, f)];
  }
  return Object.assign(n, { show: a, hide: o }), () => d(bi, { ref: l, position: "bottom", onHide: u }, h);
} });
function rg(e, t) {
  for (const n in t) n !== "spinner" && Object(t[n]) === t[n] ? (e[n] = Object(e[n]) !== e[n] ? {} : { ...e[n] }, rg(e[n], t[n])) : e[n] = t[n];
}
function Ew(e, t, n) {
  return (r) => {
    let l, a;
    const o = r.component !== void 0;
    if (o === true) {
      const { component: y, componentProps: p } = r;
      l = typeof y == "string" ? n.component(y) : y, a = p || {};
    } else {
      const { class: y, style: p, ...b } = r;
      l = e, a = b, y !== void 0 && (b.cardClass = y), p !== void 0 && (b.cardStyle = p);
    }
    let i, u = false;
    const c = W(null), s = La(false, "dialog"), f = (y) => {
      var _a3;
      if (((_a3 = c.value) == null ? void 0 : _a3[y]) !== void 0) {
        c.value[y]();
        return;
      }
      const p = i.$.subTree;
      if (p == null ? void 0 : p.component) {
        if (p.component.proxy && p.component.proxy[y]) {
          p.component.proxy[y]();
          return;
        }
        if (p.component.subTree && p.component.subTree.component && p.component.subTree.component.proxy && p.component.subTree.component.proxy[y]) {
          p.component.subTree.component.proxy[y]();
          return;
        }
      }
      console.error("[Quasar] Incorrectly defined Dialog component");
    }, h = [], m = [], g = { onOk(y) {
      return h.push(y), g;
    }, onCancel(y) {
      return m.push(y), g;
    }, onDismiss(y) {
      return h.push(y), m.push(y), g;
    }, hide() {
      return f("hide"), g;
    }, update(y) {
      if (i !== null) {
        if (o === true) Object.assign(a, y);
        else {
          const { class: p, style: b, ...C } = y;
          p !== void 0 && (C.cardClass = p), b !== void 0 && (C.cardStyle = b), rg(a, C);
        }
        i.$forceUpdate();
      }
      return g;
    } }, _ = (y) => {
      u = true, h.forEach((p) => {
        p(y);
      });
    }, w = () => {
      T.unmount(s), Ps(s), T = null, i = null, u !== true && m.forEach((y) => {
        y();
      });
    };
    let T = ci({ name: "QGlobalDialog", setup: () => () => d(l, { ...a, ref: c, onOk: _, onHide: w, onVnodeMounted(...y) {
      typeof a.onVnodeMounted == "function" && a.onVnodeMounted(...y), Qe(() => f("show"));
    } }) }, n);
    return i = T.mount(s), g;
  };
}
function ag(e) {
  return encodeURIComponent(e);
}
function og(e) {
  return decodeURIComponent(e);
}
function Rw(e) {
  return ag(e === Object(e) ? JSON.stringify(e) : "" + e);
}
function Aw(e) {
  if (e === "") return e;
  e.indexOf('"') === 0 && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), e = og(e.replace(/\+/g, " "));
  try {
    const t = JSON.parse(e);
    (t === Object(t) || Array.isArray(t) === true) && (e = t);
  } catch {
  }
  return e;
}
function ig(e) {
  const t = /* @__PURE__ */ new Date();
  return t.setMilliseconds(t.getMilliseconds() + e), t.toUTCString();
}
function Pw(e) {
  let t = 0;
  const n = e.match(/(\d+)d/), r = e.match(/(\d+)h/), l = e.match(/(\d+)m/), a = e.match(/(\d+)s/);
  return n && (t += n[1] * 864e5), r && (t += r[1] * 36e5), l && (t += l[1] * 6e4), a && (t += a[1] * 1e3), t === 0 ? e : ig(t);
}
function ug(e, t, n = {}, r) {
  let l, a;
  n.expires !== void 0 && (Object.prototype.toString.call(n.expires) === "[object Date]" ? l = n.expires.toUTCString() : typeof n.expires == "string" ? l = Pw(n.expires) : (a = parseFloat(n.expires), l = isNaN(a) === false ? ig(a * 864e5) : n.expires));
  const o = `${ag(e)}=${Rw(t)}`, i = [o, l !== void 0 ? "; Expires=" + l : "", n.path ? "; Path=" + n.path : "", n.domain ? "; Domain=" + n.domain : "", n.sameSite ? "; SameSite=" + n.sameSite : "", n.httpOnly ? "; HttpOnly" : "", n.secure ? "; Secure" : "", n.other ? "; " + n.other : ""].join("");
  if (r) {
    r.req.qCookies ? r.req.qCookies.push(i) : r.req.qCookies = [i], r.res.setHeader("Set-Cookie", r.req.qCookies);
    let u = r.req.headers.cookie || "";
    if (l !== void 0 && a < 0) {
      const c = Qo(e, r);
      c !== void 0 && (u = u.replace(`${e}=${c}; `, "").replace(`; ${e}=${c}`, "").replace(`${e}=${c}`, ""));
    } else u = u ? `${o}; ${u}` : i;
    r.req.headers.cookie = u;
  } else document.cookie = i;
}
function Qo(e, t) {
  const n = t ? t.req.headers : document, r = n.cookie ? n.cookie.split("; ") : [], l = r.length;
  let a = e ? null : {}, o = 0, i, u, c;
  for (; o < l; o++) if (i = r[o].split("="), u = og(i.shift()), c = i.join("="), !e) a[u] = c;
  else if (e === u) {
    a = Aw(c);
    break;
  }
  return a;
}
function $w(e, t, n) {
  ug(e, "", { expires: -1, ...t }, n);
}
function Lw(e, t) {
  return Qo(e, t) !== null;
}
function sg(e) {
  return { get: (t) => Qo(t, e), set: (t, n, r) => ug(t, n, r, e), has: (t) => Lw(t, e), remove: (t, n) => $w(t, n, e), getAll: () => Qo(null, e) };
}
var Gs = { install({ $q: e, ssrContext: t }) {
  e.cookies = this;
} };
__QUASAR_SSR__ && (Gs.parseSSR = (e) => {
  if (e !== void 0) return sg(e);
});
Object.assign(Gs, sg());
var Bw = Gs, Fw = he({ name: "DialogPluginComponent", props: { ...nt, title: String, message: String, prompt: Object, options: Object, progress: [Boolean, Object], html: Boolean, ok: { type: [String, Object, Boolean], default: true }, cancel: [String, Object, Boolean], focus: { type: String, default: "ok", validator: (e) => ["ok", "cancel", "none"].includes(e) }, stackButtons: Boolean, color: String, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), { $q: r } = n, l = lt(e, r), a = W(null), o = W(e.prompt !== void 0 ? e.prompt.model : e.options !== void 0 ? e.options.model : void 0), i = v(() => "q-dialog-plugin" + (l.value === true ? " q-dialog-plugin--dark q-dark" : "") + (e.progress !== false ? " q-dialog-plugin--progress" : "")), u = v(() => e.color || (l.value === true ? "amber" : "primary")), c = v(() => e.progress === false ? null : Lt(e.progress) === true ? { component: e.progress.spinner || wn, props: { color: e.progress.color || u.value } } : { component: wn, props: { color: u.value } }), s = v(() => e.prompt !== void 0 || e.options !== void 0), f = v(() => {
    if (s.value !== true) return {};
    const { model: k, isValid: U, items: Q, ...Y } = e.prompt !== void 0 ? e.prompt : e.options;
    return Y;
  }), h = v(() => Lt(e.ok) === true || e.ok === true ? r.lang.label.ok : e.ok), m = v(() => Lt(e.cancel) === true || e.cancel === true ? r.lang.label.cancel : e.cancel), g = v(() => e.prompt !== void 0 ? e.prompt.isValid !== void 0 && e.prompt.isValid(o.value) !== true : e.options !== void 0 ? e.options.isValid !== void 0 && e.options.isValid(o.value) !== true : false), _ = v(() => ({ color: u.value, label: h.value, ripple: false, disable: g.value, ...Lt(e.ok) === true ? e.ok : { flat: true }, "data-autofocus": e.focus === "ok" && s.value !== true || void 0, onClick: p })), w = v(() => ({ color: u.value, label: m.value, ripple: false, ...Lt(e.cancel) === true ? e.cancel : { flat: true }, "data-autofocus": e.focus === "cancel" && s.value !== true || void 0, onClick: b }));
  ge(() => e.prompt && e.prompt.model, P), ge(() => e.options && e.options.model, P);
  function T() {
    a.value.show();
  }
  function y() {
    a.value.hide();
  }
  function p() {
    t("ok", Ge(o.value)), y();
  }
  function b() {
    y();
  }
  function C() {
    t("hide");
  }
  function P(k) {
    o.value = k;
  }
  function F(k) {
    g.value !== true && e.prompt.type !== "textarea" && yn(k, 13) === true && p();
  }
  function j(k, U) {
    return e.html === true ? d(Dl, { class: k, innerHTML: U }) : d(Dl, { class: k }, () => U);
  }
  function $() {
    return [d(Fh, { color: u.value, dense: true, autofocus: true, dark: l.value, ...f.value, modelValue: o.value, "onUpdate:modelValue": P, onKeyup: F })];
  }
  function L() {
    return [d(j1, { color: u.value, options: e.options.items, dark: l.value, ...f.value, modelValue: o.value, "onUpdate:modelValue": P })];
  }
  function H() {
    const k = [];
    return e.cancel && k.push(d(Je, w.value)), e.ok && k.push(d(Je, _.value)), d(wy, { class: e.stackButtons === true ? "items-end" : "", vertical: e.stackButtons, align: "right" }, () => k);
  }
  function q() {
    const k = [];
    return e.title && k.push(j("q-dialog__title", e.title)), e.progress !== false && k.push(d(Dl, { class: "q-dialog__progress" }, () => d(c.value.component, c.value.props))), e.message && k.push(j("q-dialog__message", e.message)), e.prompt !== void 0 ? k.push(d(Dl, { class: "scroll q-dialog-plugin__form" }, $)) : e.options !== void 0 && k.push(d(Yl, { dark: l.value }), d(Dl, { class: "scroll q-dialog-plugin__form" }, L), d(Yl, { dark: l.value })), (e.ok || e.cancel) && k.push(H()), k;
  }
  function A() {
    return [d(jm, { class: [i.value, e.cardClass], style: e.cardStyle, dark: l.value }, q)];
  }
  return Object.assign(n, { show: T, hide: y }), () => d(bi, { ref: a, onHide: C }, A);
} }), Ow = { install({ $q: e, parentApp: t }) {
  e.dialog = this.create = Ew(Fw, true, t);
} }, ur, cu, mf = 0, Ll = null, zt = {}, zl = {}, cg = { group: "__default_quasar_group__", delay: 0, message: false, html: false, spinnerSize: 80, spinnerColor: "", messageColor: "", backgroundColor: "", boxClass: "", spinner: wn, customClass: "" }, dg = { ...cg };
function Vw(e) {
  if ((e == null ? void 0 : e.group) !== void 0 && zl[e.group] !== void 0) return Object.assign(zl[e.group], e);
  const t = Lt(e) === true && e.ignoreDefaults === true ? { ...cg, ...e } : { ...dg, ...e };
  return zl[t.group] = t, t;
}
var Sn = Tl({ isActive: false }, { show(e) {
  zt = Vw(e);
  const { group: t } = zt;
  return Sn.isActive = true, ur !== void 0 ? (zt.uid = mf, cu.$forceUpdate()) : (zt.uid = ++mf, Ll !== null && clearTimeout(Ll), Ll = setTimeout(() => {
    Ll = null;
    const n = La("q-loading");
    ur = ci({ name: "QLoading", setup() {
      ct(() => {
        Ku(true);
      });
      function r() {
        Sn.isActive !== true && ur !== void 0 && (Ku(false), ur.unmount(n), Ps(n), ur = void 0, cu = void 0);
      }
      function l() {
        if (Sn.isActive !== true) return null;
        const a = [d(zt.spinner, { class: "q-loading__spinner", color: zt.spinnerColor, size: zt.spinnerSize })];
        return zt.message && a.push(d("div", { class: "q-loading__message" + (zt.messageColor ? ` text-${zt.messageColor}` : ""), [zt.html === true ? "innerHTML" : "textContent"]: zt.message })), d("div", { class: "q-loading fullscreen flex flex-center z-max " + zt.customClass.trim(), key: zt.uid }, [d("div", { class: "q-loading__backdrop" + (zt.backgroundColor ? ` bg-${zt.backgroundColor}` : "") }), d("div", { class: "q-loading__box column items-center " + zt.boxClass }, a)]);
      }
      return () => d(Ot, { name: "q-transition--fade", appear: true, onAfterLeave: r }, l);
    } }, Sn.__parentApp), cu = ur.mount(n);
  }, zt.delay)), (n) => {
    if (n === void 0 || Object(n) !== n) {
      Sn.hide(t);
      return;
    }
    Sn.show({ ...n, group: t });
  };
}, hide(e) {
  if (Sn.isActive === true) {
    if (e === void 0) zl = {};
    else {
      if (zl[e] === void 0) return;
      {
        delete zl[e];
        const t = Object.keys(zl);
        if (t.length !== 0) {
          const n = t[t.length - 1];
          Sn.show({ group: n });
          return;
        }
      }
    }
    Ll !== null && (clearTimeout(Ll), Ll = null), Sn.isActive = false;
  }
}, setDefaults(e) {
  Lt(e) === true && Object.assign(dg, e);
}, install({ $q: e, parentApp: t }) {
  e.loading = this, Sn.__parentApp = t, e.config.loading !== void 0 && this.setDefaults(e.config.loading);
} }), Dw = Sn, lo = W(null), hf = Tl({ isActive: false }, { start: xt, stop: xt, increment: xt, setDefaults: xt, install({ $q: e, parentApp: t }) {
  if (e.loadingBar = this, this.__installed === true) {
    e.config.loadingBar !== void 0 && this.setDefaults(e.config.loadingBar);
    return;
  }
  const n = W(e.config.loadingBar !== void 0 ? { ...e.config.loadingBar } : {});
  function r() {
    hf.isActive = true;
  }
  function l() {
    hf.isActive = false;
  }
  const a = La("q-loading-bar");
  ci({ name: "LoadingBar", devtools: { hide: true }, setup: () => () => d(Lp, { ...n.value, onStart: r, onStop: l, ref: lo }) }, t).mount(a), Object.assign(this, { start(o) {
    lo.value.start(o);
  }, stop() {
    lo.value.stop();
  }, increment() {
    lo.value.increment.apply(null, arguments);
  }, setDefaults(o) {
    Lt(o) === true && Object.assign(n.value, o);
  } });
} }), Iw = 0, vo = {}, mo = {}, Cn = {}, fg = {}, zw = /^\s*$/, vg = [], Nw = [void 0, null, true, false, ""], Zs = ["top-left", "top-right", "bottom-left", "bottom-right", "top", "bottom", "left", "right", "center"], Hw = ["top-left", "top-right", "bottom-left", "bottom-right"], Gr = { positive: { icon: (e) => e.iconSet.type.positive, color: "positive" }, negative: { icon: (e) => e.iconSet.type.negative, color: "negative" }, warning: { icon: (e) => e.iconSet.type.warning, color: "warning", textColor: "dark" }, info: { icon: (e) => e.iconSet.type.info, color: "info" }, ongoing: { group: false, timeout: 0, spinner: true, color: "grey-8" } };
function mg(e, t, n) {
  var _a3;
  if (!e) return Ur("parameter required");
  let r;
  const l = { textColor: "white" };
  if (e.ignoreDefaults !== true && Object.assign(l, vo), Lt(e) === false && (l.type && Object.assign(l, Gr[l.type]), e = { message: e }), Object.assign(l, Gr[e.type || l.type], e), typeof l.icon == "function" && (l.icon = l.icon(t)), l.spinner ? (l.spinner === true && (l.spinner = wn), l.spinner = Go(l.spinner)) : l.spinner = false, l.meta = { hasMedia: !!(l.spinner !== false || l.icon || l.avatar), hasText: gf(l.message) || gf(l.caption) }, l.position) {
    if (Zs.includes(l.position) === false) return Ur("wrong position", e);
  } else l.position = "bottom";
  if (Nw.includes(l.timeout) === true) l.timeout = 5e3;
  else {
    const u = Number(l.timeout);
    if (isNaN(u) || u < 0) return Ur("wrong timeout", e);
    l.timeout = Number.isFinite(u) ? u : 0;
  }
  l.timeout === 0 ? l.progress = false : l.progress === true && (l.meta.progressClass = "q-notification__progress" + (l.progressClass ? ` ${l.progressClass}` : ""), l.meta.progressStyle = { animationDuration: `${l.timeout + 1e3}ms` });
  const a = (Array.isArray(e.actions) === true ? e.actions : []).concat(e.ignoreDefaults !== true && Array.isArray(vo.actions) === true ? vo.actions : []).concat(Array.isArray((_a3 = Gr[e.type]) == null ? void 0 : _a3.actions) === true ? Gr[e.type].actions : []), { closeBtn: o } = l;
  if (o && a.push({ label: typeof o == "string" ? o : t.lang.label.close }), l.actions = a.map(({ handler: u, noDismiss: c, ...s }) => ({ flat: true, ...s, onClick: typeof u == "function" ? () => {
    u(), c !== true && i();
  } : () => {
    i();
  } })), l.multiLine === void 0 && (l.multiLine = l.actions.length > 1), Object.assign(l.meta, { class: `q-notification row items-stretch q-notification--${l.multiLine === true ? "multi-line" : "standard"}` + (l.color !== void 0 ? ` bg-${l.color}` : "") + (l.textColor !== void 0 ? ` text-${l.textColor}` : "") + (l.classes !== void 0 ? ` ${l.classes}` : ""), wrapperClass: "q-notification__wrapper col relative-position border-radius-inherit " + (l.multiLine === true ? "column no-wrap justify-center" : "row items-center"), contentClass: "q-notification__content row items-center" + (l.multiLine === true ? "" : " col"), leftClass: l.meta.hasText === true ? "additional" : "single", attrs: { role: "alert", ...l.attrs } }), l.group === false ? (l.group = void 0, l.meta.group = void 0) : ((l.group === void 0 || l.group === true) && (l.group = [l.message, l.caption, l.multiline].concat(l.actions.map((u) => `${u.label}*${u.icon}`)).join("|")), l.meta.group = l.group + "|" + l.position), l.actions.length === 0 ? l.actions = void 0 : l.meta.actionsClass = "q-notification__actions row items-center " + (l.multiLine === true ? "justify-end" : "col-auto") + (l.meta.hasMedia === true ? " q-notification__actions--with-media" : ""), n !== void 0) {
    n.notif.meta.timer && (clearTimeout(n.notif.meta.timer), n.notif.meta.timer = void 0), l.meta.uid = n.notif.meta.uid;
    const u = Cn[l.position].value.indexOf(n.notif);
    Cn[l.position].value[u] = l;
  } else {
    const u = mo[l.meta.group];
    if (u === void 0) {
      if (l.meta.uid = Iw++, l.meta.badge = 1, ["left", "right", "center"].indexOf(l.position) !== -1) Cn[l.position].value.splice(Math.floor(Cn[l.position].value.length / 2), 0, l);
      else {
        const c = l.position.indexOf("top") !== -1 ? "unshift" : "push";
        Cn[l.position].value[c](l);
      }
      l.group !== void 0 && (mo[l.meta.group] = l);
    } else {
      if (u.meta.timer && (clearTimeout(u.meta.timer), u.meta.timer = void 0), l.badgePosition !== void 0) {
        if (Hw.includes(l.badgePosition) === false) return Ur("wrong badgePosition", e);
      } else l.badgePosition = `top-${l.position.indexOf("left") !== -1 ? "right" : "left"}`;
      l.meta.uid = u.meta.uid, l.meta.badge = u.meta.badge + 1, l.meta.badgeClass = `q-notification__badge q-notification__badge--${l.badgePosition}` + (l.badgeColor !== void 0 ? ` bg-${l.badgeColor}` : "") + (l.badgeTextColor !== void 0 ? ` text-${l.badgeTextColor}` : "") + (l.badgeClass ? ` ${l.badgeClass}` : "");
      const c = Cn[l.position].value.indexOf(u);
      Cn[l.position].value[c] = mo[l.meta.group] = l;
    }
  }
  const i = () => {
    jw(l), r = void 0;
  };
  if (l.timeout > 0 && (l.meta.timer = setTimeout(() => {
    l.meta.timer = void 0, i();
  }, l.timeout + 1e3)), l.group !== void 0) return (u) => {
    u !== void 0 ? Ur("trying to update a grouped one which is forbidden", e) : i();
  };
  if (r = { dismiss: i, config: e, notif: l }, n !== void 0) {
    Object.assign(n, r);
    return;
  }
  return (u) => {
    if (r !== void 0) if (u === void 0) r.dismiss();
    else {
      const c = Object.assign({}, r.config, u, { group: false, position: l.position });
      mg(c, t, r);
    }
  };
}
function jw(e) {
  e.meta.timer && (clearTimeout(e.meta.timer), e.meta.timer = void 0);
  const t = Cn[e.position].value.indexOf(e);
  if (t !== -1) {
    e.group !== void 0 && delete mo[e.meta.group];
    const n = vg["" + e.meta.uid];
    if (n) {
      const { width: r, height: l } = getComputedStyle(n);
      n.style.left = `${n.offsetLeft}px`, n.style.width = r, n.style.height = l;
    }
    Cn[e.position].value.splice(t, 1), typeof e.onDismiss == "function" && e.onDismiss();
  }
}
function gf(e) {
  return e != null && zw.test(e) !== true;
}
function Ur(e, t) {
  return console.error(`Notify: ${e}`, t), false;
}
function Uw() {
  return he({ name: "QNotifications", devtools: { hide: true }, setup() {
    return () => d("div", { class: "q-notifications" }, Zs.map((e) => d(ep, { key: e, class: fg[e], tag: "div", name: `q-notification--${e}` }, () => Cn[e].value.map((t) => {
      const n = t.meta, r = [];
      if (n.hasMedia === true && (t.spinner !== false ? r.push(d(t.spinner, { class: "q-notification__spinner q-notification__spinner--" + n.leftClass, color: t.spinnerColor, size: t.spinnerSize })) : t.icon ? r.push(d(et, { class: "q-notification__icon q-notification__icon--" + n.leftClass, name: t.icon, color: t.iconColor, size: t.iconSize, role: "img" })) : t.avatar && r.push(d(Du, { class: "q-notification__avatar q-notification__avatar--" + n.leftClass }, () => d("img", { src: t.avatar, "aria-hidden": "true" })))), n.hasText === true) {
        let a;
        const o = { class: "q-notification__message col" };
        if (t.html === true) o.innerHTML = t.caption ? `<div>${t.message}</div><div class="q-notification__caption">${t.caption}</div>` : t.message;
        else {
          const i = [t.message];
          a = t.caption ? [d("div", i), d("div", { class: "q-notification__caption" }, [t.caption])] : i;
        }
        r.push(d("div", o, a));
      }
      const l = [d("div", { class: n.contentClass }, r)];
      return t.progress === true && l.push(d("div", { key: `${n.uid}|p|${n.badge}`, class: n.progressClass, style: n.progressStyle })), t.actions !== void 0 && l.push(d("div", { class: n.actionsClass }, t.actions.map((a) => d(Je, a)))), n.badge > 1 && l.push(d("div", { key: `${n.uid}|${n.badge}`, class: t.meta.badgeClass, style: t.badgeStyle }, [n.badge])), d("div", { ref: (a) => {
        vg["" + n.uid] = a;
      }, key: n.uid, class: n.class, ...n.attrs }, [d("div", { class: n.wrapperClass }, l)]);
    }))));
  } });
}
var Qw = { setDefaults(e) {
  Lt(e) === true && Object.assign(vo, e);
}, registerType(e, t) {
  Lt(t) === true && (Gr[e] = t);
}, install({ $q: e, parentApp: t }) {
  if (e.notify = this.create = (n) => mg(n, e), e.notify.setDefaults = this.setDefaults, e.notify.registerType = this.registerType, e.config.notify !== void 0 && this.setDefaults(e.config.notify), this.__installed !== true) {
    Zs.forEach((r) => {
      Cn[r] = W([]);
      const l = ["left", "center", "right"].includes(r) === true ? "center" : r.indexOf("top") !== -1 ? "top" : "bottom", a = r.indexOf("left") !== -1 ? "start" : r.indexOf("right") !== -1 ? "end" : "center", o = ["left", "right"].includes(r) ? `items-${r === "left" ? "start" : "end"} justify-center` : r === "center" ? "flex-center" : `items-${a}`;
      fg[r] = `q-notifications__list q-notifications__list--${l} fixed column no-wrap ${o}`;
    });
    const n = La("q-notify");
    ci(Uw(), t).mount(n);
  }
} };
function Kw(e) {
  return Fu(e) === true ? "__q_date|" + e.getTime() : Tp(e) === true ? "__q_expr|" + e.source : typeof e == "number" ? "__q_numb|" + e : typeof e == "boolean" ? "__q_bool|" + (e ? "1" : "0") : typeof e == "string" ? "__q_strn|" + e : typeof e == "function" ? "__q_strn|" + e.toString() : e === Object(e) ? "__q_objt|" + JSON.stringify(e) : e;
}
function Ww(e) {
  if (e.length < 9) return e;
  const n = e.substring(0, 8), r = e.substring(9);
  switch (n) {
    case "__q_date":
      const l = Number(r);
      return new Date(Number.isNaN(l) === true ? r : l);
    case "__q_expr":
      return new RegExp(r);
    case "__q_numb":
      return Number(r);
    case "__q_bool":
      return r === "1";
    case "__q_strn":
      return "" + r;
    case "__q_objt":
      return JSON.parse(r);
    default:
      return e;
  }
}
function hg() {
  const e = () => null;
  return { has: () => false, hasItem: () => false, getLength: () => 0, getItem: e, getIndex: e, getKey: e, getAll: () => {
  }, getAllKeys: () => [], set: xt, setItem: xt, remove: xt, removeItem: xt, clear: xt, isEmpty: () => true };
}
function gg(e) {
  const t = window[e + "Storage"], n = (o) => {
    const i = t.getItem(o);
    return i ? Ww(i) : null;
  }, r = (o) => t.getItem(o) !== null, l = (o, i) => {
    t.setItem(o, Kw(i));
  }, a = (o) => {
    t.removeItem(o);
  };
  return { has: r, hasItem: r, getLength: () => t.length, getItem: n, getIndex: (o) => o < t.length ? n(t.key(o)) : null, getKey: (o) => o < t.length ? t.key(o) : null, getAll: () => {
    let o;
    const i = {}, u = t.length;
    for (let c = 0; c < u; c++) o = t.key(c), i[o] = n(o);
    return i;
  }, getAllKeys: () => {
    const o = [], i = t.length;
    for (let u = 0; u < i; u++) o.push(t.key(u));
    return o;
  }, set: l, setItem: l, remove: a, removeItem: a, clear: () => {
    t.clear();
  }, isEmpty: () => t.length === 0 };
}
var bg = Ie.has.webStorage === false ? hg() : gg("local"), Yw = { install({ $q: e }) {
  e.localStorage = bg;
} };
Object.assign(Yw, bg);
var pg = Ie.has.webStorage === false ? hg() : gg("session"), Xw = { install({ $q: e }) {
  e.sessionStorage = pg;
} };
Object.assign(Xw, pg);
var Gw = ["ok", "hide"];
Gh(Gw);
function Js() {
  return Mt(cm);
}
var Zw = { version: "2.18.1", install: Mp, lang: si, iconSet: sm };
function Jw(e, t) {
  const n = ps("router-view");
  return Tn(), Ol(n, { class: "view" });
}
const yg = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, l] of t) n[r] = l;
  return n;
}, ex = {}, tx = yg(ex, [["render", Jw]]), nx = "M10,2C8.18,2 6.47,2.5 5,3.35C8,5.08 10,8.3 10,12C10,15.7 8,18.92 5,20.65C6.47,21.5 8.18,22 10,22A10,10 0 0,0 20,12A10,10 0 0,0 10,2Z", lx = "M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z", rx = /* @__PURE__ */ Cl({ __name: "Quasar", setup(e) {
  const t = Js();
  let n = W(false), r = W(false), l = W(true);
  const a = "production";
  return (o, i) => {
    const u = ps("router-view"), c = z0("ripple");
    return Tn(), Ol(Ve(O1), { view: "hHh LpR fFf" }, { default: At(() => [Ye(Ve(C1), { class: "bg-primary text-white", elevated: "", id: "header" }, { default: At(() => [Ye(Ve(Gd), null, { default: At(() => [Ye(Ve(Je), { dense: "", flat: "", round: "", icon: "menu", onClick: i[0] || (i[0] = (s) => yt(n) ? n.value = !Ve(n) : n = !Ve(n)) }), Ye(Ve(Zd), null, { default: At(() => [Ye(Ve(Du), null, { default: At(() => i[10] || (i[10] = [kt("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" }, null, -1)])), _: 1 }), i[11] || (i[11] = Vl("\xA0WebGL mtg"))]), _: 1 }), Ve(t).dark.isActive ? (Tn(), Ol(Ve(Je), { key: 0, dense: "", flat: "", round: "", icon: Ve(lx), onClick: i[1] || (i[1] = (s) => Ve(t).dark.set(false)) }, null, 8, ["icon"])) : Cc("", true), Ve(t).dark.isActive ? Cc("", true) : (Tn(), Ol(Ve(Je), { key: 1, dense: "", flat: "", round: "", icon: Ve(nx), onClick: i[2] || (i[2] = (s) => Ve(t).dark.set(true)) }, null, 8, ["icon"])), Ye(Ve(Je), { dense: "", flat: "", round: "", icon: "menu", onClick: i[3] || (i[3] = (s) => yt(r) ? r.value = !Ve(r) : r = !Ve(r)) })]), _: 1 })]), _: 1 }), Ye(Ve(Ad), { modelValue: Ve(n), "onUpdate:modelValue": i[8] || (i[8] = (s) => yt(n) ? n.value = s : n = s), side: "left", bordered: "", mini: Ve(l), overlay: "" }, { default: At(() => [Ye(Ve(Y1), { class: "fit" }, { default: At(() => [Ye(Ve(Vh), { class: "menu-list padding" }, { default: At(() => [cn((Tn(), Ol(Ve(qr), { clickable: "", onMouseover: i[4] || (i[4] = (s) => yt(l) ? l.value = false : l = false), onMouseout: i[5] || (i[5] = (s) => yt(l) ? l.value = true : l = true) }, { default: At(() => [Ye(Ve(hn), { avatar: "" }, { default: At(() => [Ye(Ve(et), { name: "inbox" })]), _: 1 }), Ye(Ve(hn), null, { default: At(() => i[12] || (i[12] = [Vl("inbox")])), _: 1 })]), _: 1 })), [[c]]), cn((Tn(), Ol(Ve(qr), { clickable: "", onMouseover: i[6] || (i[6] = (s) => yt(l) ? l.value = false : l = false), onMouseout: i[7] || (i[7] = (s) => yt(l) ? l.value = true : l = true) }, { default: At(() => [Ye(Ve(hn), { avatar: "" }, { default: At(() => [Ye(Ve(et), { name: "login" })]), _: 1 }), Ye(Ve(hn), null, { default: At(() => i[13] || (i[13] = [Vl("login")])), _: 1 })]), _: 1 })), [[c]])]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["modelValue", "mini"]), Ye(Ve(Ad), { modelValue: Ve(r), "onUpdate:modelValue": i[9] || (i[9] = (s) => yt(r) ? r.value = s : r = s), side: "right", bordered: "", overlay: "" }, { default: At(() => i[14] || (i[14] = [Vl("right")])), _: 1 }, 8, ["modelValue"]), Ye(Ve(U1), null, { default: At(() => [Ye(u)]), _: 1 }), Ye(Ve(S1), { class: "bg-grey-8 text-orange", elevated: "", id: "footer" }, { default: At(() => [Ye(Ve(Gd), null, { default: At(() => [Ye(Ve(Zd), { style: { "font-size": "1.0em" } }, { default: At(() => [Ye(Ve(Du), { class: "q-mr-sm", size: "sm" }, { default: At(() => i[15] || (i[15] = [kt("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" }, null, -1)])), _: 1 }), Vl("\xA0vite / vue / quasar / wasm / webgl mtg \xA0mode: " + po(Ve(a)), 1)]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 });
  };
} });
/*!
* vue-router v4.5.0
* (c) 2024 Eduardo San Martin Morote
* @license MIT
*/
const cr = typeof document < "u";
function _g(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function ax(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && _g(e.default);
}
const ut = Object.assign;
function du(e, t) {
  const n = {};
  for (const r in t) {
    const l = t[r];
    n[r] = Pn(l) ? l.map(e) : e(l);
  }
  return n;
}
const da = () => {
}, Pn = Array.isArray, wg = /#/g, ox = /&/g, ix = /\//g, ux = /=/g, sx = /\?/g, xg = /\+/g, cx = /%5B/g, dx = /%5D/g, Sg = /%5E/g, fx = /%60/g, Cg = /%7B/g, vx = /%7C/g, kg = /%7D/g, mx = /%20/g;
function ec(e) {
  return encodeURI("" + e).replace(vx, "|").replace(cx, "[").replace(dx, "]");
}
function hx(e) {
  return ec(e).replace(Cg, "{").replace(kg, "}").replace(Sg, "^");
}
function Zu(e) {
  return ec(e).replace(xg, "%2B").replace(mx, "+").replace(wg, "%23").replace(ox, "%26").replace(fx, "`").replace(Cg, "{").replace(kg, "}").replace(Sg, "^");
}
function gx(e) {
  return Zu(e).replace(ux, "%3D");
}
function bx(e) {
  return ec(e).replace(wg, "%23").replace(sx, "%3F");
}
function px(e) {
  return e == null ? "" : bx(e).replace(ix, "%2F");
}
function Ta(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const yx = /\/$/, _x = (e) => e.replace(yx, "");
function fu(e, t, n = "/") {
  let r, l = {}, a = "", o = "";
  const i = t.indexOf("#");
  let u = t.indexOf("?");
  return i < u && i >= 0 && (u = -1), u > -1 && (r = t.slice(0, u), a = t.slice(u + 1, i > -1 ? i : t.length), l = e(a)), i > -1 && (r = r || t.slice(0, i), o = t.slice(i, t.length)), r = Cx(r ?? t, n), { fullPath: r + (a && "?") + a + o, path: r, query: l, hash: Ta(o) };
}
function wx(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function bf(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function xx(e, t, n) {
  const r = t.matched.length - 1, l = n.matched.length - 1;
  return r > -1 && r === l && Mr(t.matched[r], n.matched[l]) && Tg(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Mr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Tg(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (const n in e) if (!Sx(e[n], t[n])) return false;
  return true;
}
function Sx(e, t) {
  return Pn(e) ? pf(e, t) : Pn(t) ? pf(t, e) : e === t;
}
function pf(e, t) {
  return Pn(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function Cx(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"), r = e.split("/"), l = r[r.length - 1];
  (l === ".." || l === ".") && r.push("");
  let a = n.length - 1, o, i;
  for (o = 0; o < r.length; o++) if (i = r[o], i !== ".") if (i === "..") a > 1 && a--;
  else break;
  return n.slice(0, a).join("/") + "/" + r.slice(o).join("/");
}
const ol = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
var qa;
(function(e) {
  e.pop = "pop", e.push = "push";
})(qa || (qa = {}));
var fa;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(fa || (fa = {}));
function kx(e) {
  if (!e) if (cr) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), _x(e);
}
const Tx = /^[^#]+#/;
function qx(e, t) {
  return e.replace(Tx, "#") + t;
}
function Mx(e, t) {
  const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return { behavior: t.behavior, left: r.left - n.left - (t.left || 0), top: r.top - n.top - (t.top || 0) };
}
const xi = () => ({ left: window.scrollX, top: window.scrollY });
function Ex(e) {
  let t;
  if ("el" in e) {
    const n = e.el, r = typeof n == "string" && n.startsWith("#"), l = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!l) return;
    t = Mx(l, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function yf(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Ju = /* @__PURE__ */ new Map();
function Rx(e, t) {
  Ju.set(e, t);
}
function Ax(e) {
  const t = Ju.get(e);
  return Ju.delete(e), t;
}
let Px = () => location.protocol + "//" + location.host;
function qg(e, t) {
  const { pathname: n, search: r, hash: l } = t, a = e.indexOf("#");
  if (a > -1) {
    let i = l.includes(e.slice(a)) ? e.slice(a).length : 1, u = l.slice(i);
    return u[0] !== "/" && (u = "/" + u), bf(u, "");
  }
  return bf(n, e) + r + l;
}
function $x(e, t, n, r) {
  let l = [], a = [], o = null;
  const i = ({ state: h }) => {
    const m = qg(e, location), g = n.value, _ = t.value;
    let w = 0;
    if (h) {
      if (n.value = m, t.value = h, o && o === g) {
        o = null;
        return;
      }
      w = _ ? h.position - _.position : 0;
    } else r(m);
    l.forEach((T) => {
      T(n.value, g, { delta: w, type: qa.pop, direction: w ? w > 0 ? fa.forward : fa.back : fa.unknown });
    });
  };
  function u() {
    o = n.value;
  }
  function c(h) {
    l.push(h);
    const m = () => {
      const g = l.indexOf(h);
      g > -1 && l.splice(g, 1);
    };
    return a.push(m), m;
  }
  function s() {
    const { history: h } = window;
    h.state && h.replaceState(ut({}, h.state, { scroll: xi() }), "");
  }
  function f() {
    for (const h of a) h();
    a = [], window.removeEventListener("popstate", i), window.removeEventListener("beforeunload", s);
  }
  return window.addEventListener("popstate", i), window.addEventListener("beforeunload", s, { passive: true }), { pauseListeners: u, listen: c, destroy: f };
}
function _f(e, t, n, r = false, l = false) {
  return { back: e, current: t, forward: n, replaced: r, position: window.history.length, scroll: l ? xi() : null };
}
function Lx(e) {
  const { history: t, location: n } = window, r = { value: qg(e, n) }, l = { value: t.state };
  l.value || a(r.value, { back: null, current: r.value, forward: null, position: t.length - 1, replaced: true, scroll: null }, true);
  function a(u, c, s) {
    const f = e.indexOf("#"), h = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + u : Px() + e + u;
    try {
      t[s ? "replaceState" : "pushState"](c, "", h), l.value = c;
    } catch (m) {
      console.error(m), n[s ? "replace" : "assign"](h);
    }
  }
  function o(u, c) {
    const s = ut({}, t.state, _f(l.value.back, u, l.value.forward, true), c, { position: l.value.position });
    a(u, s, true), r.value = u;
  }
  function i(u, c) {
    const s = ut({}, l.value, t.state, { forward: u, scroll: xi() });
    a(s.current, s, true);
    const f = ut({}, _f(r.value, u, null), { position: s.position + 1 }, c);
    a(u, f, false), r.value = u;
  }
  return { location: r, state: l, push: i, replace: o };
}
function Bx(e) {
  e = kx(e);
  const t = Lx(e), n = $x(e, t.state, t.location, t.replace);
  function r(a, o = true) {
    o || n.pauseListeners(), history.go(a);
  }
  const l = ut({ location: "", base: e, go: r, createHref: qx.bind(null, e) }, t, n);
  return Object.defineProperty(l, "location", { enumerable: true, get: () => t.location.value }), Object.defineProperty(l, "state", { enumerable: true, get: () => t.state.value }), l;
}
function Fx(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), Bx(e);
}
function Ox(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Mg(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Eg = Symbol("");
var wf;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(wf || (wf = {}));
function Er(e, t) {
  return ut(new Error(), { type: e, [Eg]: true }, t);
}
function Un(e, t) {
  return e instanceof Error && Eg in e && (t == null || !!(e.type & t));
}
const xf = "[^/]+?", Vx = { sensitive: false, strict: false, start: true, end: true }, Dx = /[.+*?^${}()[\]/\\]/g;
function Ix(e, t) {
  const n = ut({}, Vx, t), r = [];
  let l = n.start ? "^" : "";
  const a = [];
  for (const c of e) {
    const s = c.length ? [] : [90];
    n.strict && !c.length && (l += "/");
    for (let f = 0; f < c.length; f++) {
      const h = c[f];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0) f || (l += "/"), l += h.value.replace(Dx, "\\$&"), m += 40;
      else if (h.type === 1) {
        const { value: g, repeatable: _, optional: w, regexp: T } = h;
        a.push({ name: g, repeatable: _, optional: w });
        const y = T || xf;
        if (y !== xf) {
          m += 10;
          try {
            new RegExp(`(${y})`);
          } catch (b) {
            throw new Error(`Invalid custom RegExp for param "${g}" (${y}): ` + b.message);
          }
        }
        let p = _ ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`;
        f || (p = w && c.length < 2 ? `(?:/${p})` : "/" + p), w && (p += "?"), l += p, m += 20, w && (m += -8), _ && (m += -20), y === ".*" && (m += -50);
      }
      s.push(m);
    }
    r.push(s);
  }
  if (n.strict && n.end) {
    const c = r.length - 1;
    r[c][r[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (l += "/?"), n.end ? l += "$" : n.strict && !l.endsWith("/") && (l += "(?:/|$)");
  const o = new RegExp(l, n.sensitive ? "" : "i");
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
        const { value: g, repeatable: _, optional: w } = m, T = g in c ? c[g] : "";
        if (Pn(T) && !_) throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
        const y = Pn(T) ? T.join("/") : T;
        if (!y) if (w) h.length < 2 && (s.endsWith("/") ? s = s.slice(0, -1) : f = true);
        else throw new Error(`Missing required param "${g}"`);
        s += y;
      }
    }
    return s || "/";
  }
  return { re: o, score: r, keys: a, parse: i, stringify: u };
}
function zx(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function Rg(e, t) {
  let n = 0;
  const r = e.score, l = t.score;
  for (; n < r.length && n < l.length; ) {
    const a = zx(r[n], l[n]);
    if (a) return a;
    n++;
  }
  if (Math.abs(l.length - r.length) === 1) {
    if (Sf(r)) return 1;
    if (Sf(l)) return -1;
  }
  return l.length - r.length;
}
function Sf(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Nx = { type: 0, value: "" }, Hx = /[a-zA-Z0-9_]/;
function jx(e) {
  if (!e) return [[]];
  if (e === "/") return [[Nx]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${c}": ${m}`);
  }
  let n = 0, r = n;
  const l = [];
  let a;
  function o() {
    a && l.push(a), a = [];
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
      r = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        u === "/" ? (c && f(), o()) : u === ":" ? (f(), n = 1) : h();
        break;
      case 4:
        h(), n = r;
        break;
      case 1:
        u === "(" ? n = 2 : Hx.test(u) ? h() : (f(), n = 0, u !== "*" && u !== "?" && u !== "+" && i--);
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
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), f(), o(), l;
}
function Ux(e, t, n) {
  const r = Ix(jx(e.path), n), l = ut(r, { record: e, parent: t, children: [], alias: [] });
  return t && !l.record.aliasOf == !t.record.aliasOf && t.children.push(l), l;
}
function Qx(e, t) {
  const n = [], r = /* @__PURE__ */ new Map();
  t = qf({ strict: false, end: true, sensitive: false }, t);
  function l(f) {
    return r.get(f);
  }
  function a(f, h, m) {
    const g = !m, _ = kf(f);
    _.aliasOf = m && m.record;
    const w = qf(t, f), T = [_];
    if ("alias" in f) {
      const b = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const C of b) T.push(kf(ut({}, _, { components: m ? m.record.components : _.components, path: C, aliasOf: m ? m.record : _ })));
    }
    let y, p;
    for (const b of T) {
      const { path: C } = b;
      if (h && C[0] !== "/") {
        const P = h.record.path, F = P[P.length - 1] === "/" ? "" : "/";
        b.path = h.record.path + (C && F + C);
      }
      if (y = Ux(b, h, w), m ? m.alias.push(y) : (p = p || y, p !== y && p.alias.push(y), g && f.name && !Tf(y) && o(f.name)), Ag(y) && u(y), _.children) {
        const P = _.children;
        for (let F = 0; F < P.length; F++) a(P[F], y, m && m.children[F]);
      }
      m = m || y;
    }
    return p ? () => {
      o(p);
    } : da;
  }
  function o(f) {
    if (Mg(f)) {
      const h = r.get(f);
      h && (r.delete(f), n.splice(n.indexOf(h), 1), h.children.forEach(o), h.alias.forEach(o));
    } else {
      const h = n.indexOf(f);
      h > -1 && (n.splice(h, 1), f.record.name && r.delete(f.record.name), f.children.forEach(o), f.alias.forEach(o));
    }
  }
  function i() {
    return n;
  }
  function u(f) {
    const h = Yx(f, n);
    n.splice(h, 0, f), f.record.name && !Tf(f) && r.set(f.record.name, f);
  }
  function c(f, h) {
    let m, g = {}, _, w;
    if ("name" in f && f.name) {
      if (m = r.get(f.name), !m) throw Er(1, { location: f });
      w = m.record.name, g = ut(Cf(h.params, m.keys.filter((p) => !p.optional).concat(m.parent ? m.parent.keys.filter((p) => p.optional) : []).map((p) => p.name)), f.params && Cf(f.params, m.keys.map((p) => p.name))), _ = m.stringify(g);
    } else if (f.path != null) _ = f.path, m = n.find((p) => p.re.test(_)), m && (g = m.parse(_), w = m.record.name);
    else {
      if (m = h.name ? r.get(h.name) : n.find((p) => p.re.test(h.path)), !m) throw Er(1, { location: f, currentLocation: h });
      w = m.record.name, g = ut({}, h.params, f.params), _ = m.stringify(g);
    }
    const T = [];
    let y = m;
    for (; y; ) T.unshift(y.record), y = y.parent;
    return { name: w, path: _, params: g, matched: T, meta: Wx(T) };
  }
  e.forEach((f) => a(f));
  function s() {
    n.length = 0, r.clear();
  }
  return { addRoute: a, resolve: c, removeRoute: o, clearRoutes: s, getRoutes: i, getRecordMatcher: l };
}
function Cf(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function kf(e) {
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: Kx(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Kx(e) {
  const t = {}, n = e.props || false;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function Tf(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function Wx(e) {
  return e.reduce((t, n) => ut(t, n.meta), {});
}
function qf(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function Yx(e, t) {
  let n = 0, r = t.length;
  for (; n !== r; ) {
    const a = n + r >> 1;
    Rg(e, t[a]) < 0 ? r = a : n = a + 1;
  }
  const l = Xx(e);
  return l && (r = t.lastIndexOf(l, r - 1)), r;
}
function Xx(e) {
  let t = e;
  for (; t = t.parent; ) if (Ag(t) && Rg(e, t) === 0) return t;
}
function Ag({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Gx(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let l = 0; l < r.length; ++l) {
    const a = r[l].replace(xg, " "), o = a.indexOf("="), i = Ta(o < 0 ? a : a.slice(0, o)), u = o < 0 ? null : Ta(a.slice(o + 1));
    if (i in t) {
      let c = t[i];
      Pn(c) || (c = t[i] = [c]), c.push(u);
    } else t[i] = u;
  }
  return t;
}
function Mf(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (n = gx(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Pn(r) ? r.map((a) => a && Zu(a)) : [r && Zu(r)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function Zx(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = Pn(r) ? r.map((l) => l == null ? null : "" + l) : r == null ? r : "" + r);
  }
  return t;
}
const Jx = Symbol(""), Ef = Symbol(""), tc = Symbol(""), Pg = Symbol(""), es = Symbol("");
function Qr() {
  let e = [];
  function t(r) {
    return e.push(r), () => {
      const l = e.indexOf(r);
      l > -1 && e.splice(l, 1);
    };
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function ml(e, t, n, r, l, a = (o) => o()) {
  const o = r && (r.enterCallbacks[l] = r.enterCallbacks[l] || []);
  return () => new Promise((i, u) => {
    const c = (h) => {
      h === false ? u(Er(4, { from: n, to: t })) : h instanceof Error ? u(h) : Ox(h) ? u(Er(2, { from: t, to: h })) : (o && r.enterCallbacks[l] === o && typeof h == "function" && o.push(h), i());
    }, s = a(() => e.call(r && r.instances[l], t, n, c));
    let f = Promise.resolve(s);
    e.length < 3 && (f = f.then(c)), f.catch((h) => u(h));
  });
}
function vu(e, t, n, r, l = (a) => a()) {
  const a = [];
  for (const o of e) for (const i in o.components) {
    let u = o.components[i];
    if (!(t !== "beforeRouteEnter" && !o.instances[i])) if (_g(u)) {
      const s = (u.__vccOpts || u)[t];
      s && a.push(ml(s, n, r, o, i, l));
    } else {
      let c = u();
      a.push(() => c.then((s) => {
        if (!s) throw new Error(`Couldn't resolve component "${i}" at "${o.path}"`);
        const f = ax(s) ? s.default : s;
        o.mods[i] = s, o.components[i] = f;
        const m = (f.__vccOpts || f)[t];
        return m && ml(m, n, r, o, i, l)();
      }));
    }
  }
  return a;
}
function Rf(e) {
  const t = Mt(tc), n = Mt(Pg), r = v(() => {
    const u = Ve(e.to);
    return t.resolve(u);
  }), l = v(() => {
    const { matched: u } = r.value, { length: c } = u, s = u[c - 1], f = n.matched;
    if (!s || !f.length) return -1;
    const h = f.findIndex(Mr.bind(null, s));
    if (h > -1) return h;
    const m = Af(u[c - 2]);
    return c > 1 && Af(s) === m && f[f.length - 1].path !== m ? f.findIndex(Mr.bind(null, u[c - 2])) : h;
  }), a = v(() => l.value > -1 && rS(n.params, r.value.params)), o = v(() => l.value > -1 && l.value === n.matched.length - 1 && Tg(n.params, r.value.params));
  function i(u = {}) {
    if (lS(u)) {
      const c = t[Ve(e.replace) ? "replace" : "push"](Ve(e.to)).catch(da);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c;
    }
    return Promise.resolve();
  }
  return { route: r, href: v(() => r.value.href), isActive: a, isExactActive: o, navigate: i };
}
function eS(e) {
  return e.length === 1 ? e[0] : e;
}
const tS = /* @__PURE__ */ Cl({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" } }, useLink: Rf, setup(e, { slots: t }) {
  const n = On(Rf(e)), { options: r } = Mt(tc), l = v(() => ({ [Pf(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive, [Pf(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive }));
  return () => {
    const a = t.default && eS(t.default(n));
    return e.custom ? a : d("a", { "aria-current": n.isExactActive ? e.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: l.value }, a);
  };
} }), nS = tS;
function lS(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), true;
  }
}
function rS(e, t) {
  for (const n in t) {
    const r = t[n], l = e[n];
    if (typeof r == "string") {
      if (r !== l) return false;
    } else if (!Pn(l) || l.length !== r.length || r.some((a, o) => a !== l[o])) return false;
  }
  return true;
}
function Af(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Pf = (e, t, n) => e ?? t ?? n, aS = /* @__PURE__ */ Cl({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: n }) {
  const r = Mt(es), l = v(() => e.route || r.value), a = Mt(Ef, 0), o = v(() => {
    let c = Ve(a);
    const { matched: s } = l.value;
    let f;
    for (; (f = s[c]) && !f.components; ) c++;
    return c;
  }), i = v(() => l.value.matched[o.value]);
  gn(Ef, v(() => o.value + 1)), gn(Jx, i), gn(es, l);
  const u = W();
  return ge(() => [u.value, i.value, e.name], ([c, s, f], [h, m, g]) => {
    s && (s.instances[f] = c, m && m !== s && c && c === h && (s.leaveGuards.size || (s.leaveGuards = m.leaveGuards), s.updateGuards.size || (s.updateGuards = m.updateGuards))), c && s && (!m || !Mr(s, m) || !h) && (s.enterCallbacks[f] || []).forEach((_) => _(c));
  }, { flush: "post" }), () => {
    const c = l.value, s = e.name, f = i.value, h = f && f.components[s];
    if (!h) return $f(n.default, { Component: h, route: c });
    const m = f.props[s], g = m ? m === true ? c.params : typeof m == "function" ? m(c) : m : null, w = d(h, ut({}, g, t, { onVnodeUnmounted: (T) => {
      T.component.isUnmounted && (f.instances[s] = null);
    }, ref: u }));
    return $f(n.default, { Component: w, route: c }) || w;
  };
} });
function $f(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const oS = aS;
function iS(e) {
  const t = Qx(e.routes, e), n = e.parseQuery || Gx, r = e.stringifyQuery || Mf, l = e.history, a = Qr(), o = Qr(), i = Qr(), u = y0(ol);
  let c = ol;
  cr && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const s = du.bind(null, (M) => "" + M), f = du.bind(null, px), h = du.bind(null, Ta);
  function m(M, ee) {
    let V, ne;
    return Mg(M) ? (V = t.getRecordMatcher(M), ne = ee) : ne = M, t.addRoute(ne, V);
  }
  function g(M) {
    const ee = t.getRecordMatcher(M);
    ee && t.removeRoute(ee);
  }
  function _() {
    return t.getRoutes().map((M) => M.record);
  }
  function w(M) {
    return !!t.getRecordMatcher(M);
  }
  function T(M, ee) {
    if (ee = ut({}, ee || u.value), typeof M == "string") {
      const z = fu(n, M, ee.path), te = t.resolve({ path: z.path }, ee), D = l.createHref(z.fullPath);
      return ut(z, te, { params: h(te.params), hash: Ta(z.hash), redirectedFrom: void 0, href: D });
    }
    let V;
    if (M.path != null) V = ut({}, M, { path: fu(n, M.path, ee.path).path });
    else {
      const z = ut({}, M.params);
      for (const te in z) z[te] == null && delete z[te];
      V = ut({}, M, { params: f(z) }), ee.params = f(ee.params);
    }
    const ne = t.resolve(V, ee), pe = M.hash || "";
    ne.params = s(h(ne.params));
    const S = wx(r, ut({}, M, { hash: hx(pe), path: ne.path })), E = l.createHref(S);
    return ut({ fullPath: S, hash: pe, query: r === Mf ? Zx(M.query) : M.query || {} }, ne, { redirectedFrom: void 0, href: E });
  }
  function y(M) {
    return typeof M == "string" ? fu(n, M, u.value.path) : ut({}, M);
  }
  function p(M, ee) {
    if (c !== M) return Er(8, { from: ee, to: M });
  }
  function b(M) {
    return F(M);
  }
  function C(M) {
    return b(ut(y(M), { replace: true }));
  }
  function P(M) {
    const ee = M.matched[M.matched.length - 1];
    if (ee && ee.redirect) {
      const { redirect: V } = ee;
      let ne = typeof V == "function" ? V(M) : V;
      return typeof ne == "string" && (ne = ne.includes("?") || ne.includes("#") ? ne = y(ne) : { path: ne }, ne.params = {}), ut({ query: M.query, hash: M.hash, params: ne.path != null ? {} : M.params }, ne);
    }
  }
  function F(M, ee) {
    const V = c = T(M), ne = u.value, pe = M.state, S = M.force, E = M.replace === true, z = P(V);
    if (z) return F(ut(y(z), { state: typeof z == "object" ? ut({}, pe, z.state) : pe, force: S, replace: E }), ee || V);
    const te = V;
    te.redirectedFrom = ee;
    let D;
    return !S && xx(r, ne, V) && (D = Er(16, { to: te, from: ne }), R(ne, ne, true, false)), (D ? Promise.resolve(D) : L(te, ne)).catch((I) => Un(I) ? Un(I, 2) ? I : ye(I) : X(I, te, ne)).then((I) => {
      if (I) {
        if (Un(I, 2)) return F(ut({ replace: E }, y(I.to), { state: typeof I.to == "object" ? ut({}, pe, I.to.state) : pe, force: S }), ee || te);
      } else I = q(te, ne, true, E, pe);
      return H(te, ne, I), I;
    });
  }
  function j(M, ee) {
    const V = p(M, ee);
    return V ? Promise.reject(V) : Promise.resolve();
  }
  function $(M) {
    const ee = Z.values().next().value;
    return ee && typeof ee.runWithContext == "function" ? ee.runWithContext(M) : M();
  }
  function L(M, ee) {
    let V;
    const [ne, pe, S] = uS(M, ee);
    V = vu(ne.reverse(), "beforeRouteLeave", M, ee);
    for (const z of ne) z.leaveGuards.forEach((te) => {
      V.push(ml(te, M, ee));
    });
    const E = j.bind(null, M, ee);
    return V.push(E), B(V).then(() => {
      V = [];
      for (const z of a.list()) V.push(ml(z, M, ee));
      return V.push(E), B(V);
    }).then(() => {
      V = vu(pe, "beforeRouteUpdate", M, ee);
      for (const z of pe) z.updateGuards.forEach((te) => {
        V.push(ml(te, M, ee));
      });
      return V.push(E), B(V);
    }).then(() => {
      V = [];
      for (const z of S) if (z.beforeEnter) if (Pn(z.beforeEnter)) for (const te of z.beforeEnter) V.push(ml(te, M, ee));
      else V.push(ml(z.beforeEnter, M, ee));
      return V.push(E), B(V);
    }).then(() => (M.matched.forEach((z) => z.enterCallbacks = {}), V = vu(S, "beforeRouteEnter", M, ee, $), V.push(E), B(V))).then(() => {
      V = [];
      for (const z of o.list()) V.push(ml(z, M, ee));
      return V.push(E), B(V);
    }).catch((z) => Un(z, 8) ? z : Promise.reject(z));
  }
  function H(M, ee, V) {
    i.list().forEach((ne) => $(() => ne(M, ee, V)));
  }
  function q(M, ee, V, ne, pe) {
    const S = p(M, ee);
    if (S) return S;
    const E = ee === ol, z = cr ? history.state : {};
    V && (ne || E ? l.replace(M.fullPath, ut({ scroll: E && z && z.scroll }, pe)) : l.push(M.fullPath, pe)), u.value = M, R(M, ee, V, E), ye();
  }
  let A;
  function k() {
    A || (A = l.listen((M, ee, V) => {
      if (!oe.listening) return;
      const ne = T(M), pe = P(ne);
      if (pe) {
        F(ut(pe, { replace: true, force: true }), ne).catch(da);
        return;
      }
      c = ne;
      const S = u.value;
      cr && Rx(yf(S.fullPath, V.delta), xi()), L(ne, S).catch((E) => Un(E, 12) ? E : Un(E, 2) ? (F(ut(y(E.to), { force: true }), ne).then((z) => {
        Un(z, 20) && !V.delta && V.type === qa.pop && l.go(-1, false);
      }).catch(da), Promise.reject()) : (V.delta && l.go(-V.delta, false), X(E, ne, S))).then((E) => {
        E = E || q(ne, S, false), E && (V.delta && !Un(E, 8) ? l.go(-V.delta, false) : V.type === qa.pop && Un(E, 20) && l.go(-1, false)), H(ne, S, E);
      }).catch(da);
    }));
  }
  let U = Qr(), Q = Qr(), Y;
  function X(M, ee, V) {
    ye(M);
    const ne = Q.list();
    return ne.length ? ne.forEach((pe) => pe(M, ee, V)) : console.error(M), Promise.reject(M);
  }
  function le() {
    return Y && u.value !== ol ? Promise.resolve() : new Promise((M, ee) => {
      U.add([M, ee]);
    });
  }
  function ye(M) {
    return Y || (Y = !M, k(), U.list().forEach(([ee, V]) => M ? V(M) : ee()), U.reset()), M;
  }
  function R(M, ee, V, ne) {
    const { scrollBehavior: pe } = e;
    if (!cr || !pe) return Promise.resolve();
    const S = !V && Ax(yf(M.fullPath, 0)) || (ne || !V) && history.state && history.state.scroll || null;
    return Qe().then(() => pe(M, ee, S)).then((E) => E && Ex(E)).catch((E) => X(E, M, ee));
  }
  const x = (M) => l.go(M);
  let O;
  const Z = /* @__PURE__ */ new Set(), oe = { currentRoute: u, listening: true, addRoute: m, removeRoute: g, clearRoutes: t.clearRoutes, hasRoute: w, getRoutes: _, resolve: T, options: e, push: b, replace: C, go: x, back: () => x(-1), forward: () => x(1), beforeEach: a.add, beforeResolve: o.add, afterEach: i.add, onError: Q.add, isReady: le, install(M) {
    const ee = this;
    M.component("RouterLink", nS), M.component("RouterView", oS), M.config.globalProperties.$router = ee, Object.defineProperty(M.config.globalProperties, "$route", { enumerable: true, get: () => Ve(u) }), cr && !O && u.value === ol && (O = true, b(l.location).catch((pe) => {
    }));
    const V = {};
    for (const pe in ol) Object.defineProperty(V, pe, { get: () => u.value[pe], enumerable: true });
    M.provide(tc, ee), M.provide(Pg, vs(V)), M.provide(es, u);
    const ne = M.unmount;
    Z.add(M), M.unmount = function() {
      Z.delete(M), Z.size < 1 && (c = ol, A && A(), A = null, u.value = ol, O = false, Y = false), ne();
    };
  } };
  function B(M) {
    return M.reduce((ee, V) => ee.then(() => $(V)), Promise.resolve());
  }
  return oe;
}
function uS(e, t) {
  const n = [], r = [], l = [], a = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < a; o++) {
    const i = t.matched[o];
    i && (e.matched.find((c) => Mr(c, i)) ? r.push(i) : n.push(i));
    const u = e.matched[o];
    u && (t.matched.find((c) => Mr(c, u)) || l.push(u));
  }
  return [n, r, l];
}
let en;
const $g = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && $g.decode();
let Zr = null;
function ho() {
  return (Zr === null || Zr.byteLength === 0) && (Zr = new Uint8Array(en.memory.buffer)), Zr;
}
function mu(e, t) {
  return e = e >>> 0, $g.decode(ho().subarray(e, e + t));
}
function sS(e) {
  const t = en.__externref_table_alloc();
  return en.__wbindgen_export_2.set(t, e), t;
}
function cS(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    const r = sS(n);
    en.__wbindgen_exn_store(r);
  }
}
function dS(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    let r = function() {
      try {
        return n instanceof Error ? `${n.message}

Stack:
${n.stack}` : n.toString();
      } catch {
        return "<failed to stringify thrown value>";
      }
    }();
    throw console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", r), n;
  }
}
let ts = 0;
const go = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, fS = typeof go.encodeInto == "function" ? function(e, t) {
  return go.encodeInto(e, t);
} : function(e, t) {
  const n = go.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function vS(e, t, n) {
  if (typeof e != "string") throw new Error(`expected a string argument, found ${typeof e}`);
  if (n === void 0) {
    const i = go.encode(e), u = t(i.length, 1) >>> 0;
    return ho().subarray(u, u + i.length).set(i), ts = i.length, u;
  }
  let r = e.length, l = t(r, 1) >>> 0;
  const a = ho();
  let o = 0;
  for (; o < r; o++) {
    const i = e.charCodeAt(o);
    if (i > 127) break;
    a[l + o] = i;
  }
  if (o !== r) {
    o !== 0 && (e = e.slice(o)), l = n(l, r, r = o + e.length * 3, 1) >>> 0;
    const i = ho().subarray(l + o, l + r), u = fS(e, i);
    if (u.read !== e.length) throw new Error("failed to pass whole string");
    o += u.written, l = n(l, r, o, 1) >>> 0;
  }
  return ts = o, l;
}
function mS(e) {
  const t = en.__wbindgen_export_2.get(e);
  return en.__externref_table_dealloc(e), t;
}
function hS(e) {
  const t = vS(e, en.__wbindgen_malloc, en.__wbindgen_realloc), n = ts, r = en.mtg(t, n);
  if (r[1]) throw mS(r[0]);
}
async function gS(e, t) {
  if (typeof Response == "function" && e instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(e, t);
    } catch (r) {
      if (e.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
      else throw r;
    }
    const n = await e.arrayBuffer();
    return await WebAssembly.instantiate(n, t);
  } else {
    const n = await WebAssembly.instantiate(e, t);
    return n instanceof WebAssembly.Instance ? { instance: n, module: e } : n;
  }
}
function bS() {
  const e = {};
  return e.wbg = {}, e.wbg.__wbg_cb_d0b9dcdfbbb21123 = function() {
    return cS(function(t, n) {
      cb(mu(t, n));
    }, arguments);
  }, e.wbg.__wbg_log_6eff8ac810e5dae1 = function() {
    return dS(function(t, n) {
      log(mu(t, n));
    }, arguments);
  }, e.wbg.__wbindgen_init_externref_table = function() {
    const t = en.__wbindgen_export_2, n = t.grow(4);
    t.set(0, void 0), t.set(n + 0, void 0), t.set(n + 1, null), t.set(n + 2, true), t.set(n + 3, false);
  }, e.wbg.__wbindgen_throw = function(t, n) {
    throw new Error(mu(t, n));
  }, e;
}
function pS(e, t) {
  return en = e.exports, Lg.__wbindgen_wasm_module = t, Zr = null, en.__wbindgen_start(), en;
}
async function Lg(e) {
  if (en !== void 0) return en;
  typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("" + new URL("wasm_rust_mtg_bg-BXDIYXLZ.wasm", import.meta.url).href, import.meta.url));
  const t = bS();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: r } = await gS(await e, t);
  return pS(n, r);
}
const yS = /* @__PURE__ */ Cl({ __name: "HelloWorld", setup(e) {
  const t = () => {
    hS("test");
  };
  return (n, r) => {
    const l = ps("router-view");
    return Tn(), oi(nn, null, [Ye(Ve(Je), { class: "q-ma-lg", color: "primary", onClick: t }, { default: At(() => r[0] || (r[0] = [Vl("test")])), _: 1 }), Ye(l)], 64);
  };
} }), _S = yg(yS, [["__scopeId", "data-v-17fee452"]]);
var wS = 1e-6, Lf = typeof Float32Array < "u" ? Float32Array : Array;
Math.hypot || (Math.hypot = function() {
  for (var e = 0, t = arguments.length; t--; ) e += arguments[t] * arguments[t];
  return Math.sqrt(e);
});
function hu() {
  var e = new Lf(16);
  return Lf != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e;
}
function xS(e, t) {
  if (e === t) {
    var n = t[1], r = t[2], l = t[3], a = t[6], o = t[7], i = t[11];
    e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = n, e[6] = t[9], e[7] = t[13], e[8] = r, e[9] = a, e[11] = t[14], e[12] = l, e[13] = o, e[14] = i;
  } else e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15];
  return e;
}
function SS(e, t) {
  var n = t[0], r = t[1], l = t[2], a = t[3], o = t[4], i = t[5], u = t[6], c = t[7], s = t[8], f = t[9], h = t[10], m = t[11], g = t[12], _ = t[13], w = t[14], T = t[15], y = n * i - r * o, p = n * u - l * o, b = n * c - a * o, C = r * u - l * i, P = r * c - a * i, F = l * c - a * u, j = s * _ - f * g, $ = s * w - h * g, L = s * T - m * g, H = f * w - h * _, q = f * T - m * _, A = h * T - m * w, k = y * A - p * q + b * H + C * L - P * $ + F * j;
  return k ? (k = 1 / k, e[0] = (i * A - u * q + c * H) * k, e[1] = (l * q - r * A - a * H) * k, e[2] = (_ * F - w * P + T * C) * k, e[3] = (h * P - f * F - m * C) * k, e[4] = (u * L - o * A - c * $) * k, e[5] = (n * A - l * L + a * $) * k, e[6] = (w * b - g * F - T * p) * k, e[7] = (s * F - h * b + m * p) * k, e[8] = (o * q - i * L + c * j) * k, e[9] = (r * L - n * q - a * j) * k, e[10] = (g * P - _ * b + T * y) * k, e[11] = (f * b - s * P - m * y) * k, e[12] = (i * $ - o * H - u * j) * k, e[13] = (n * H - r * $ + l * j) * k, e[14] = (_ * p - g * C - w * y) * k, e[15] = (s * C - f * p + h * y) * k, e) : null;
}
function gu(e, t, n) {
  var r = n[0], l = n[1], a = n[2], o, i, u, c, s, f, h, m, g, _, w, T;
  return t === e ? (e[12] = t[0] * r + t[4] * l + t[8] * a + t[12], e[13] = t[1] * r + t[5] * l + t[9] * a + t[13], e[14] = t[2] * r + t[6] * l + t[10] * a + t[14], e[15] = t[3] * r + t[7] * l + t[11] * a + t[15]) : (o = t[0], i = t[1], u = t[2], c = t[3], s = t[4], f = t[5], h = t[6], m = t[7], g = t[8], _ = t[9], w = t[10], T = t[11], e[0] = o, e[1] = i, e[2] = u, e[3] = c, e[4] = s, e[5] = f, e[6] = h, e[7] = m, e[8] = g, e[9] = _, e[10] = w, e[11] = T, e[12] = o * r + s * l + g * a + t[12], e[13] = i * r + f * l + _ * a + t[13], e[14] = u * r + h * l + w * a + t[14], e[15] = c * r + m * l + T * a + t[15]), e;
}
function bu(e, t, n, r) {
  var l = r[0], a = r[1], o = r[2], i = Math.hypot(l, a, o), u, c, s, f, h, m, g, _, w, T, y, p, b, C, P, F, j, $, L, H, q, A, k, U;
  return i < wS ? null : (i = 1 / i, l *= i, a *= i, o *= i, u = Math.sin(n), c = Math.cos(n), s = 1 - c, f = t[0], h = t[1], m = t[2], g = t[3], _ = t[4], w = t[5], T = t[6], y = t[7], p = t[8], b = t[9], C = t[10], P = t[11], F = l * l * s + c, j = a * l * s + o * u, $ = o * l * s - a * u, L = l * a * s - o * u, H = a * a * s + c, q = o * a * s + l * u, A = l * o * s + a * u, k = a * o * s - l * u, U = o * o * s + c, e[0] = f * F + _ * j + p * $, e[1] = h * F + w * j + b * $, e[2] = m * F + T * j + C * $, e[3] = g * F + y * j + P * $, e[4] = f * L + _ * H + p * q, e[5] = h * L + w * H + b * q, e[6] = m * L + T * H + C * q, e[7] = g * L + y * H + P * q, e[8] = f * A + _ * k + p * U, e[9] = h * A + w * k + b * U, e[10] = m * A + T * k + C * U, e[11] = g * A + y * k + P * U, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e);
}
function CS(e, t, n, r, l) {
  var a = 1 / Math.tan(t / 2), o;
  return e[0] = a / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, l != null && l !== 1 / 0 ? (o = 1 / (r - l), e[10] = (l + r) * o, e[14] = 2 * l * r * o) : (e[10] = -1, e[14] = -2 * r), e;
}
var kS = CS;
function dr(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === true;
}
function va(e) {
  return function t(n) {
    return arguments.length === 0 || dr(n) ? t : e.apply(this, arguments);
  };
}
function TS(e) {
  return function t(n, r) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return dr(n) ? t : va(function(l) {
          return e(n, l);
        });
      default:
        return dr(n) && dr(r) ? t : dr(n) ? va(function(l) {
          return e(l, r);
        }) : dr(r) ? va(function(l) {
          return e(n, l);
        }) : e(n, r);
    }
  };
}
const qS = Array.isArray || function(t) {
  return t != null && t.length >= 0 && Object.prototype.toString.call(t) === "[object Array]";
};
var MS = va(function(t) {
  return t === null ? "Null" : t === void 0 ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1);
});
function ES(e) {
  return new RegExp(e.source, e.flags ? e.flags : (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.sticky ? "y" : "") + (e.unicode ? "u" : "") + (e.dotAll ? "s" : ""));
}
function Bg(e, t, n) {
  if (n || (n = new AS()), RS(e)) return e;
  var r = function(a) {
    var o = n.get(e);
    if (o) return o;
    n.set(e, a);
    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (a[i] = Bg(e[i], true, n));
    return a;
  };
  switch (MS(e)) {
    case "Object":
      return r(Object.create(Object.getPrototypeOf(e)));
    case "Array":
      return r(Array(e.length));
    case "Date":
      return new Date(e.valueOf());
    case "RegExp":
      return ES(e);
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
function RS(e) {
  var t = typeof e;
  return e == null || t != "object" && t != "function";
}
var AS = function() {
  function e() {
    this.map = {}, this.length = 0;
  }
  return e.prototype.set = function(t, n) {
    var r = this.hash(t), l = this.map[r];
    l || (this.map[r] = l = []), l.push([t, n]), this.length += 1;
  }, e.prototype.hash = function(t) {
    var n = [];
    for (var r in t) n.push(Object.prototype.toString.call(t[r]));
    return n.join();
  }, e.prototype.get = function(t) {
    if (this.length <= 180) {
      for (var n in this.map) for (var o = this.map[n], r = 0; r < o.length; r += 1) {
        var l = o[r];
        if (l[0] === t) return l[1];
      }
      return;
    }
    var a = this.hash(t), o = this.map[a];
    if (o) for (var r = 0; r < o.length; r += 1) {
      var l = o[r];
      if (l[0] === t) return l[1];
    }
  }, e;
}(), ro = va(function(t) {
  return t != null && typeof t.clone == "function" ? t.clone() : Bg(t);
});
function PS(e, t) {
  return function() {
    var n = arguments.length;
    if (n === 0) return t();
    var r = arguments[n - 1];
    return qS(r) || typeof r[e] != "function" ? t.apply(this, arguments) : r[e].apply(r, Array.prototype.slice.call(arguments, 0, n - 1));
  };
}
var Bf = TS(PS("forEach", function(t, n) {
  for (var r = n.length, l = 0; l < r; ) t(n[l]), l += 1;
  return n;
}));
function il(e, t, n, r) {
  e /= 360, t /= 100, n /= 100;
  let l = (1 - Math.abs(2 * n - 1)) * t, a = l * (1 - Math.abs(e * 6 % 2 - 1)), o = n - l / 2, i, u, c;
  0 <= e && e < 1 / 6 ? (i = l, u = a, c = 0) : 1 / 6 <= e && e < 2 / 6 ? (i = a, u = l, c = 0) : 2 / 6 <= e && e < 3 / 6 ? (i = 0, u = l, c = a) : 3 / 6 <= e && e < 4 / 6 ? (i = 0, u = a, c = l) : 4 / 6 <= e && e < 5 / 6 ? (i = a, u = 0, c = l) : 5 / 6 <= e && e < 1 && (i = l, u = 0, c = a);
  let s = i + o, f = u + o, h = c + o;
  return [s, f, h, r];
}
const Fg = { zero: [{ pos: [0, 0], color: [0.35, 0.35, 0.35, 1], tex: "home", hover: 0, hot: 1, action: { kind: "home" }, no_fade: true, disb: true }, { pos: [0, -1], color: il(30, 100, 50, 1), tex: "game", hover: 0, hot: 2, action: { kind: "show", page: "page beta" } }, { pos: [0, 1], color: il(90, 100, 50, 1), tex: "numbers", hover: 0, hot: 3, action: { kind: "show", page: "page gamma" } }, { pos: [1, -0.5], color: il(150, 100, 50, 1), tex: "quote", hover: 0, hot: 4, action: { kind: "sub", hexes: "s1" } }, { pos: [-1, 0.5], color: il(210, 100, 50, 1), tex: "cards", hover: 0, hot: 5, action: { kind: "sub", hexes: "s1" } }], s1: [{ pos: [0, 0], color: [0, 1, 0, 1], tex: "home", hover: 0, hot: 1, no_fade: true, action: { kind: "home" } }, { pos: [0, 1], color: il(0, 100, 50, 1), tex: "italic", hover: 0, hot: 2, action: { kind: "show", page: "one" } }, { pos: [0, -1], color: il(180, 100, 50, 1), tex: "happy", hover: 0, hot: 3, action: { kind: "sub", hexes: "s2" } }], s2: [{ pos: [0, 0], color: il(90, 100, 50, 1), tex: "home", hover: 0, hot: 1, no_fade: true, action: { kind: "sub", hexes: "s1" } }, { pos: [-1, 0.5], color: il(270, 100, 50, 1), tex: "one", hover: 0, hot: 2, action: { kind: "show", page: "gamma" } }, { pos: [1, -0.5], color: [1, 1, 1, 1], tex: "two", hover: 0, hot: 3, action: { kind: "show", page: "delta" } }] }, bo = Fg.zero;
class $S {
  constructor(t) {
    __privateAdd(this, _$S_instances);
    __privateAdd(this, _n2, ro(bo));
    __privateAdd(this, _r2, null);
    __privateAdd(this, _e, 1);
    __privateAdd(this, _l2, ro(bo));
    __privateAdd(this, _t2, "in");
    __privateAdd(this, _a2);
    __privateSet(this, _a2, t);
  }
  draw(t) {
    Bf((n) => t(n.pos, n.color, n.tex, n.hot, n.no_fade ? 0 : __privateGet(this, _e), n.hover))(__privateGet(this, _n2));
  }
  step(t) {
    if (__privateGet(this, _t2) == "in") __privateGet(this, _e) > 0 && (__privateSet(this, _e, __privateGet(this, _e) - t / 750), __privateSet(this, _e, Math.max(__privateGet(this, _e), 0))), __privateGet(this, _e) == 0 && __privateSet(this, _t2, "idle");
    else if (__privateGet(this, _t2) == "out") __privateGet(this, _e) < 1 && (__privateSet(this, _e, __privateGet(this, _e) + t / 750), __privateSet(this, _e, Math.min(__privateGet(this, _e), 1))), __privateGet(this, _e) == 1 && (__privateSet(this, _n2, __privateGet(this, _l2)), __privateSet(this, _t2, "in"));
    else for (const n of __privateGet(this, _n2)) n.hot == __privateGet(this, _r2) && !n.disb ? n.hover < 1 ? n.hover += 0.1 : n.hover = Math.min(n.hover, 1) : n.hover > 0 ? n.hover -= 0.1 : n.hover = Math.max(n.hover, 0);
  }
  hover(t) {
    __privateSet(this, _r2, t);
  }
  activate(t) {
    __privateGet(this, _t2) == "idle" && Bf((n) => {
      n.hot == t && __privateMethod(this, _$S_instances, o_fn).call(this, n);
    })(__privateGet(this, _n2));
  }
}
_n2 = new WeakMap();
_r2 = new WeakMap();
_e = new WeakMap();
_l2 = new WeakMap();
_t2 = new WeakMap();
_a2 = new WeakMap();
_$S_instances = new WeakSet();
o_fn = function(t) {
  if (!t.disb && t.action) switch (t.action.kind) {
    case "show":
      __privateGet(this, _a2).call(this, t.action.page);
      break;
    case "home":
      __privateSet(this, _l2, ro(bo)), __privateSet(this, _t2, "out");
      break;
    case "sub":
      __privateSet(this, _l2, ro(Fg[t.action.hexes])), __privateSet(this, _t2, "out");
      break;
  }
};
console.log(bo);
const LS = ["width", "height"], Og = /* @__PURE__ */ Cl({ __name: "WebGLMenu", props: { width: {}, height: {} }, setup(e) {
  const t = Js(), n = W(), r = e;
  let l = null;
  const a = { front_0: null, front_1: null, front_2: null, front_3: null, game: null, home: null, numbers: null, quote: null, cards: null, happy: null, italic: null, one: null, two: null, three: null, body: null };
  let o = null;
  const i = new $S((R) => t.notify({ message: R })), u = W([0, 0]), c = W(""), s = W(0), f = W(0), h = W(null), m = W(1), g = W(-1), _ = W([0, 0, 0, 0]), w = (R, x, O, Z, oe, B, M) => {
    const ee = [];
    for (let V = 0; V < 6; ++V) ee.push(R + (V + Z) % 6 + 1 + M), ee.push(x + (V + oe) % 6 + 1 + M), ee.push(O + (V + B) % 6 + 1 + M);
    return ee;
  }, T = () => {
    if (l === null) throw new Error("no WebGL context");
    let R = [0, 0, 0];
    for (let D = 0; D < 6; ++D) {
      const I = 3.141 * D * 60 / 180;
      R = R.concat([1 * Math.cos(I), 1 * Math.sin(I), 0]);
    }
    for (let D = 0; D < 6; ++D) {
      const I = 3.141 * D * 60 / 180;
      R = R.concat([1 * Math.cos(I), 1 * Math.sin(I), 0]);
    }
    for (let D = 0; D < 6; ++D) {
      const I = 3.141 * D * 60 / 180;
      R = R.concat([1 * Math.cos(I), 1 * Math.sin(I), 0.2]);
    }
    for (let D = 0; D < 6; ++D) {
      const I = 3.141 * D * 60 / 180;
      R = R.concat([1 * Math.cos(I), 1 * Math.sin(I), 0.2]);
    }
    for (let D = 0; D < 6; ++D) {
      const I = 3.141 * D * 60 / 180;
      R = R.concat([1.2 * Math.cos(I), 1.2 * Math.sin(I), 0.2]);
    }
    for (let D = 0; D < 6; ++D) {
      const I = 3.141 * D * 60 / 180;
      R = R.concat([1.2 * Math.cos(I), 1.2 * Math.sin(I), 0.2]);
    }
    for (let D = 0; D < 6; ++D) {
      const I = 3.141 * D * 60 / 180;
      R = R.concat([1 * Math.cos(I), 1 * Math.sin(I), -0.3]);
    }
    for (let D = 0; D < 6; ++D) {
      const I = 3.141 * D * 60 / 180;
      R = R.concat([0.9 * Math.cos(I), 0.9 * Math.sin(I), 0]);
    }
    for (let D = 0; D < 6; ++D) {
      const I = 3.141 * D * 60 / 180;
      R = R.concat([1 * Math.cos(I), 1 * Math.sin(I), -0.3]);
    }
    for (let D = 2; D < R.length; D += 3) R[D] -= 1;
    const x = l.createBuffer();
    l.bindBuffer(l.ARRAY_BUFFER, x), l.bufferData(l.ARRAY_BUFFER, new Float32Array(R), l.STATIC_DRAW);
    let O = [1, 1, 1, 1, 0.5, 0.5, 0.5, 1, 1, 1, 1, 1, 0.5, 0.5, 0.5, 1, 1, 1, 1, 1, 0.5, 0.5, 0.5, 1, 1, 1, 1, 1];
    for (let D = 0; D < 6; ++D) O = O.concat([1, 1, 1, 1]);
    for (let D = 0; D < 6; ++D) O = O.concat([1, 1, 1, 1]);
    for (let D = 0; D < 6; ++D) O = O.concat([1, 1, 1, 1]);
    for (let D = 0; D < 6; ++D) O = O.concat([1, 1, 1, 1]);
    for (let D = 0; D < 6; ++D) O = O.concat([1, 1, 1, 1]);
    for (let D = 0; D < 6; ++D) O = O.concat([1, 1, 1, 1]);
    for (let D = 0; D < 6; ++D) O = O.concat([1, 1, 1, 1]);
    for (let D = 0; D < 6; ++D) O = O.concat([1, 1, 1, 1]);
    const Z = l.createBuffer();
    l.bindBuffer(l.ARRAY_BUFFER, Z), l.bufferData(l.ARRAY_BUFFER, new Float32Array(O), l.STATIC_DRAW);
    let oe = [0.5, 0.5];
    for (let D = 0; D < 6; ++D) {
      const I = 3.141 * D * 60 / 180;
      oe = oe.concat([0.5 + 0.5 * Math.cos(I), 0.5 + 0.5 * Math.sin(I)]);
    }
    for (let D = 0; D < 6; ++D) {
      const I = 3.141 * D * 60 / 180;
      oe = oe.concat([0.5 + 0.4 * Math.cos(I), 0.5 + 0.4 * Math.sin(I)]);
    }
    for (let D = 0; D < 6; ++D) {
      const I = 3.141 * D * 60 / 180;
      oe = oe.concat([0.7 + 0.4 * Math.cos(I), 0.7 + 0.4 * Math.sin(I)]);
    }
    for (let D = 0; D < 6; ++D) {
      const I = 3.141 * D * 60 / 180;
      oe = oe.concat([0.8 + 0.5 * Math.cos(I), 0.8 + 0.5 * Math.sin(I)]);
    }
    for (let D = 0; D < 6; ++D) {
      const I = 3.141 * D * 60 / 180;
      oe = oe.concat([0.5 + 0.5 * Math.cos(I), 0.5 + 0.5 * Math.sin(I)]);
    }
    for (let D = 0; D < 6; ++D) {
      const I = 3.141 * D * 60 / 180;
      oe = oe.concat([0.8 + 0.5 * Math.cos(I), 0.8 + 0.5 * Math.sin(I)]);
    }
    for (let D = 0; D < 6; ++D) {
      const I = 3.141 * D * 60 / 180;
      oe = oe.concat([0.5 + 0.5 * Math.cos(I), 0.5 + 0.5 * Math.sin(I)]);
    }
    for (let D = 0; D < 6; ++D) {
      const I = 3.141 * (D + 1) * 60 / 180;
      oe = oe.concat([0.3 + 0.5 * Math.cos(I + 0), 0.3 + 0.5 * Math.sin(I + 0)]);
    }
    for (let D = 0; D < 6; ++D) {
      const I = 3.141 * (D + 1) * 60 / 180;
      oe = oe.concat([0.3 + 0.5 * Math.cos(I + 0), 0.3 + 0.5 * Math.sin(I + 0)]);
    }
    const B = l.createBuffer();
    l.bindBuffer(l.ARRAY_BUFFER, B), l.bufferData(l.ARRAY_BUFFER, new Float32Array(oe), l.STATIC_DRAW);
    let M = [];
    for (let D = 1; D < 7; ++D) M = M.concat([0, D, 1 + D % 6]);
    M = M.concat(w(0, 0, 6, 0, 1, 0, 6)), M = M.concat(w(6, 6, 0, 0, 1, 1, 6)), M = M.concat(w(6, 6, 12, 0, 1, 0, 12)), M = M.concat(w(12, 12, 6, 0, 1, 1, 12)), M = M.concat(w(12, 18, 12, 1, 0, 0, 18)), M = M.concat(w(18, 18, 12, 0, 1, 1, 18)), M = M.concat(w(24, 30, 24, 1, 0, 0, 18)), M = M.concat(w(30, 30, 24, 0, 1, 1, 18));
    let ee = 0;
    for (let D = 0; D < M.length; ++D) ee = Math.max(ee, M[D]);
    console.log("top", ee);
    const V = l.createBuffer();
    l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, V), l.bufferData(l.ELEMENT_ARRAY_BUFFER, new Uint32Array(M), l.STATIC_DRAW), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, null);
    let ne = [0, 0, 1], pe = [], S = [], E = [];
    for (let D = 0; D < 6; ++D) {
      const I = D * 3.414 / 180 * 60, se = 0 * (90 * 3.414 / 180);
      pe = pe.concat([0, 0, 1]), S = S.concat([-Math.cos(I - se), -Math.sin(I - se), 0]), E = E.concat([Math.cos(I - se), Math.sin(I - se), 0]);
    }
    ne = ne.concat(pe), ne = ne.concat(S), ne = ne.concat(S), ne = ne.concat(pe), ne = ne.concat(pe), ne = ne.concat(E), ne = ne.concat(E), ne = ne.concat(S), ne = ne.concat(S);
    const z = l.createBuffer();
    l.bindBuffer(l.ARRAY_BUFFER, z), l.bufferData(l.ARRAY_BUFFER, new Float32Array(ne), l.STATIC_DRAW);
    const te = l.createBuffer();
    return l.bindBuffer(l.ARRAY_BUFFER, te), l.bufferData(l.ARRAY_BUFFER, new Float32Array([-1, -1, 0.1, 1, -1, -0.1, 1, 1, 0.1, -1, 1, -0.1]), l.STATIC_DRAW), console.log("pctn", R.length / 3, O.length / 4, oe.length / 2, ne.length / 3), [x, Z, B, V, z, te];
  }, y = (R, x) => {
    const O = hu();
    return gu(O, O, [0, 0, -6]), bu(O, O, 1.3 * Math.sin(x) * 3.141 / 6 / 3, [0, 1, 0]), bu(O, O, 1.2 * Math.sin(x * 1.15 + 1) * 3.141 / 4 / 3, [1, 0, 0]), bu(O, O, 1.1 * Math.sin(x * 1.33 + 2) * 3.141 / 5 / 3, [0, 0, 1]), gu(O, O, [R[0], R[1], R[2]]), O;
  }, p = (R) => {
    l !== null && (l.uniform1i(R.unif.sampler, 1), l.uniform1i(R.unif.mode_int, 0), l.drawElements(l.TRIANGLES, 4 * 6 * 6, l.UNSIGNED_INT, 4 * 3 * 6), l.uniform1i(R.unif.sampler, 0), l.uniform1i(R.unif.mode_int, 1), l.drawElements(l.TRIANGLES, 1 * 6 * 3, l.UNSIGNED_INT, 0));
  }, b = (R, x) => {
    if (l === null || n.value === void 0) throw new Error("no WebGL context");
    l.viewport(0, 0, r.width, r.height), l.enable(l.BLEND), l.blendFunc(l.SRC_ALPHA, l.ONE_MINUS_SRC_ALPHA), l.enable(l.DEPTH_TEST), l.depthFunc(l.LEQUAL), l.bindRenderbuffer(l.RENDERBUFFER, null), l.bindFramebuffer(l.FRAMEBUFFER, null), l.bindTexture(l.TEXTURE_2D, R.bufs.double), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.LINEAR), l.bindRenderbuffer(l.RENDERBUFFER, R.bufs.depth), l.renderbufferStorage(l.RENDERBUFFER, l.DEPTH_COMPONENT16, r.width, r.height), l.bindFramebuffer(l.FRAMEBUFFER, R.bufs.frame), l.framebufferRenderbuffer(l.FRAMEBUFFER, l.DEPTH_ATTACHMENT, l.RENDERBUFFER, R.bufs.depth), l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, r.width, r.height, 0, l.RGBA, l.UNSIGNED_BYTE, null), l.framebufferTexture2D(l.FRAMEBUFFER, l.COLOR_ATTACHMENT0, l.TEXTURE_2D, R.bufs.double, 0), l.bindFramebuffer(l.FRAMEBUFFER, R.bufs.frame), l.framebufferTexture2D(l.FRAMEBUFFER, l.COLOR_ATTACHMENT0, l.TEXTURE_2D, R.bufs.double, 0), l.framebufferRenderbuffer(l.FRAMEBUFFER, l.DEPTH_ATTACHMENT, l.RENDERBUFFER, R.bufs.depth), l.clear(l.COLOR_BUFFER_BIT | l.DEPTH_BUFFER_BIT);
    const O = 45 * Math.PI / 180, Z = r.width / r.height, oe = 0.1, B = 100, M = hu();
    kS(M, O, Z, oe, B);
    const ee = x;
    gu(M, M, [Math.sin(ee * 0.3) * 1, Math.cos(ee * 0.4) * 1, Math.cos(0.6 * ee) * 1]), l.useProgram(R.prog_draw), C(R, false), P(R), F(R), j(R), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, R.bufs.index), l.uniform1f(R.unif.time, x), l.uniform2f(R.unif.viewport, r.width, r.height), l.uniformMatrix4fv(R.unif.proj, false, M), l.activeTexture(l.TEXTURE0 + 1), l.bindTexture(l.TEXTURE_2D, a.body), l.activeTexture(l.TEXTURE0);
    const V = (S, E, z, te, D, I) => {
      if (l === null) return;
      const se = [S[0] * 2, S[1] * 2.2, I * 0.5 + D * 10], me = y(se, x);
      switch (l.uniformMatrix4fv(R.unif.model, false, me), l.uniform1f(R.unif.hover, I), l.uniform1f(R.unif.alpha, 1 - D), l.activeTexture(l.TEXTURE0), z) {
        case "clock":
          l.bindTexture(l.TEXTURE_2D, a.front_1);
          break;
        case "tv":
          l.bindTexture(l.TEXTURE_2D, a.front_2);
          break;
        case "phone":
          l.bindTexture(l.TEXTURE_2D, a.front_3);
          break;
        default:
          const de = a[z];
          de != null ? l.bindTexture(l.TEXTURE_2D, de) : l.bindTexture(l.TEXTURE_2D, a.front_0);
          break;
      }
      l.activeTexture(l.TEXTURE0);
      const fe = hu();
      SS(fe, me), xS(fe, fe), l.uniformMatrix4fv(R.unif.normal, false, fe), l.uniform4fv(R.unif.front_color, E), p(R);
    };
    i.draw(V), l.framebufferTexture2D(l.FRAMEBUFFER, l.COLOR_ATTACHMENT0, l.TEXTURE_2D, null, 0), l.framebufferRenderbuffer(l.FRAMEBUFFER, l.DEPTH_ATTACHMENT, l.RENDERBUFFER, null), l.flush(), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, null), l.disableVertexAttribArray(R.attr.pos_model), l.bindFramebuffer(l.FRAMEBUFFER, null), l.bindRenderbuffer(l.RENDERBUFFER, null), l.disable(l.BLEND), l.useProgram(R.prog_copy), l.disable(l.DEPTH_TEST), l.uniform1i(R.unif.copy_tex, 0), l.bindTexture(l.TEXTURE_2D, R.bufs.double), l.bindBuffer(l.ARRAY_BUFFER, R.bufs.copy_pos), h.value != null ? (l.uniform2fv(R.unif.ripple_pos, h.value), l.uniform1f(R.unif.ripple_time, m.value)) : l.uniform1f(R.unif.ripple_time, 1), l.vertexAttribPointer(R.attr.pos_copy, 3, l.FLOAT, false, 0, 0), l.enableVertexAttribArray(R.attr.pos_copy), l.drawArrays(l.TRIANGLE_FAN, 0, 4), l.disableVertexAttribArray(R.attr.pos_copy), l.useProgram(R.prog_pick), l.enable(l.DEPTH_TEST), l.bindTexture(l.TEXTURE_2D, R.pick.tex), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.NEAREST), l.bindRenderbuffer(l.RENDERBUFFER, R.pick.rb), l.renderbufferStorage(l.RENDERBUFFER, l.DEPTH_COMPONENT16, r.width, r.height), l.bindFramebuffer(l.FRAMEBUFFER, R.pick.fb), l.framebufferRenderbuffer(l.FRAMEBUFFER, l.DEPTH_ATTACHMENT, l.RENDERBUFFER, R.pick.rb), l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, r.width, r.height, 0, l.RGBA, l.UNSIGNED_BYTE, null), l.framebufferTexture2D(l.FRAMEBUFFER, l.COLOR_ATTACHMENT0, l.TEXTURE_2D, R.pick.tex, 0), l.uniformMatrix4fv(R.unif.proj_pick, false, M), l.clear(l.COLOR_BUFFER_BIT | l.DEPTH_BUFFER_BIT), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, R.bufs.index), l.enableVertexAttribArray(R.attr.pos_pick), C(R, true);
    const ne = (S, E, z, te, D, I) => {
      if (l === null) return;
      const se = [S[0] * 2, S[1] * 2.2, I * 0.5 + 10 * D];
      y(se, x), l.uniformMatrix4fv(R.unif.model_pick, false, y(se, x)), l.uniform4f(R.unif.id_pick, te / 255, 0, 0, 0), l.drawElements(l.TRIANGLES, 3 * 6, l.UNSIGNED_INT, 0);
    };
    i.draw(ne), l.flush(), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, null), l.disableVertexAttribArray(R.attr.pos_pick);
    let pe = new Uint8Array(4);
    l.readPixels(u.value[0], r.height - u.value[1], 1, 1, l.RGBA, l.UNSIGNED_BYTE, pe), pe.length && (c.value = pe.toString(), i.hover(pe[0]), s.value = pe[0]);
  }, C = (R, x) => {
    if (l === null) throw new Error("setPos - no ctx");
    l.bindBuffer(l.ARRAY_BUFFER, R.bufs.pos), l.vertexAttribPointer(x ? R.attr.pos_pick : R.attr.pos_model, 3, l.FLOAT, false, 0, 0), l.enableVertexAttribArray(x ? R.attr.pos_pick : R.attr.pos_model);
  }, P = (R) => {
    if (l === null) throw new Error("setColor - no ctx");
    l.bindBuffer(l.ARRAY_BUFFER, R.bufs.color), l.vertexAttribPointer(R.attr.color, 4, l.FLOAT, false, 0, 0), l.enableVertexAttribArray(R.attr.color);
  }, F = (R) => {
    if (l === null) throw new Error("setTex crash");
    l.bindBuffer(l.ARRAY_BUFFER, R.bufs.tex), l.vertexAttribPointer(R.attr.texture, 2, l.FLOAT, false, 0, 0), l.enableVertexAttribArray(R.attr.texture);
  }, j = (R) => {
    if (l === null) throw new Error("setNorm crash");
    l.bindBuffer(l.ARRAY_BUFFER, R.bufs.norm), l.vertexAttribPointer(R.attr.norm, 3, l.FLOAT, false, 0, 0), l.enableVertexAttribArray(R.attr.norm);
  };
  let $ = 0;
  const L = () => {
    if (l === null) return;
    const O = A(`
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

            highp vec3 ambientLight = vec3(0.25, 0.25, 0.25);
            highp vec3 directionalLightColor = vec3(1.0, 1.0, 1.0);
            highp vec3 directionalVector = normalize(vec3(0.25, 0.25, 0.5));// normalize(vec3(0, 0, -1));

            // highp vec4 transformedNormal = uNormalMatrix * vec4(normalize(aVertexNormal), 1.0);
            // highp vec4 transformedNormal = uNormalMatrix * uModelViewMatrix * vec4((aVertexNormal), 1.0);
            highp vec4 transformedNormal = uNormalMatrix * vec4(normalize(aVertexNormal), 1.0);

            highp float directional = min(max(
                pow(dot(transformedNormal.xyz, directionalVector), 5.0),
            0.0), 1.0);
            vLighting = ambientLight + (directionalLightColor * directional) * 1.0;

            // vLighting = vec3(1.0, 1.0, 1.0);
        }
    `, `
        uniform sampler2D uSampler;
        uniform int uMode;
        uniform mediump float uAlpha;
        uniform mediump vec4 uFrontColor;

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

            tt[0] = t[0] + (t[0] - 0.5) * (cos(f1 * r * 3.0) / 10.0 + 0.5) * 0.5 * exp(-r * 0.3) * exp(-f1 * 0.15);
            tt[1] = t[1] + (t[1] - 0.5) * (sin(f1 * r * 2.0) / 10.0 + 0.5) * 0.5 * exp(-r * 0.3) * exp(-f1 * 0.15);

            mediump vec4 fragColor;

            if(uMode == 1) { // idle or hover
                mediump vec4 idle = texture2D(uSampler, tt) * vColor;
                idle[0] *= 0.66;
                idle[1] *= 0.66;
                idle[2] *= 0.66;

                mediump vec4 active = texture2D(uSampler, t);
                active[0] *= 0.8;
                active[1] *= 0.8;
                active[2] *= 0.8;
                active += vec4(0.2, 0.2, 0.2, 0.0);

                if(tt.x < 0.0 || tt.y < 0.0 || tt.x > 1.0 || tt.y > 1.0)
                    idle = vec4(0.0, 0.0, 0.0, 0.0);

                if(t.x < 0.0 || t.y < 0.0 || t.x > 1.0 || t.y > 1.0)
                    active = vec4(0.0, 0.0, 0.0, 0.0);

                mediump float a = 1.0 - cos(3.141 * fCurFade / 2.0);

                fragColor = (idle * (1.0 - a) + active * a);
                fragColor = vec4(fragColor.rgb * vLighting, fragColor.a);

                fragColor *= uFrontColor;
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

                // if(fragColor.a == 0.0) {
                    // fragColor.rgba = vec4(1.0, 1.0, 1.0, 1.0);
                // }
                    // else

                fragColor.a *= pow(uAlpha, 5.0);

                // fragColor.a = 1.0;
                gl_FragColor = fragColor;

                // gl_FragColor = vec4(vLighting, 1.0);

        }
    `), Z = `
        attribute vec4 aVertexPosition;
        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;

        void main() {
            vec4 b = aVertexPosition;
            gl_Position = uProjectionMatrix * uModelViewMatrix * b;
        }
    `, oe = `
        precision mediump float;
        
        uniform vec4 uId;
        
        void main() {
            gl_FragColor = uId;
        }
    `, B = `
        attribute vec3 aVertexPos;

        varying mediump vec2 vTexCoord;

        void main() {
            gl_Position = vec4(aVertexPos, 1.0);
            vTexCoord = vec2(0.5 + aVertexPos.x / 2.0, 0.5 + aVertexPos.y / 2.0);
        }
    `, M = `
        varying mediump vec2 vTexCoord;

        uniform sampler2D uTexture;

        uniform mediump vec2 uRipplePos;
        uniform mediump float uRippleTime;

        void main() {
            if(uRippleTime >= 0.99) {
                gl_FragColor = texture2D(uTexture, vTexCoord);
                return;
            }

            mediump vec2 shifted = vTexCoord - uRipplePos;

            mediump float dist = length(shifted);
            mediump vec2 srce = vTexCoord;

            mediump float angle = 0.0;

            if(dist > 0.0)
                angle = atan(shifted.y, shifted.x);

            mediump float scale = sin(dist * 3.141 * 0.75 + uRippleTime * 3.141 -  90.0 * 3.141 / 180.0);
            scale *= (exp(-(dist + 1.0) * 1.5 * (1.0 - uRippleTime)));

            scale *= 0.5;
            // scale = 0.5 - scale;
            angle += 3.141;
            // scale = 1.0 / (1.0 + exp(-scale / 5.0)) * 0.33;

            // scale = 1.0 - scale;

            srce.x += 0.15 * cos(angle) / 1.0 * scale;
            srce.y += 0.15 * sin(angle) / 1.0 * scale;

            if(srce.x < 0.0 || srce.y < 0.0 || srce.x > 1.0 || srce.y > 1.0) {
                gl_FragColor.a = 0.0;
                return;
            }

            // if(uRippleTime < 1.0 && dist < 0.1)
                // gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
            // else
            gl_FragColor = texture2D(uTexture, srce);
        }
    `, ee = T(), V = A(Z, oe), ne = A(B, M), pe = l.createTexture();
    l.bindTexture(l.TEXTURE_2D, pe), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.NEAREST), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.NEAREST), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE), l.bindTexture(l.TEXTURE_2D, null);
    const S = l.createRenderbuffer(), E = l.createFramebuffer(), z = { prog_draw: O, prog_pick: V, prog_copy: ne, attr: { pos_model: l.getAttribLocation(O, "aVertexPosition"), norm: l.getAttribLocation(O, "aVertexNormal"), color: l.getAttribLocation(O, "aVertexColor"), texture: l.getAttribLocation(O, "aTextureCoord"), pos_pick: l.getAttribLocation(V, "aVertexPosition"), pos_copy: l.getAttribLocation(ne, "aVertexPos") }, unif: { proj: l.getUniformLocation(O, "uProjectionMatrix"), model: l.getUniformLocation(O, "uModelViewMatrix"), sampler: l.getUniformLocation(O, "uSampler"), normal: l.getUniformLocation(O, "uNormalMatrix"), time: l.getUniformLocation(O, "fTime"), alpha: l.getUniformLocation(O, "uAlpha"), hover: l.getUniformLocation(O, "fFade"), mode_int: l.getUniformLocation(O, "uMode"), front_color: l.getUniformLocation(O, "uFrontColor"), proj_pick: l.getUniformLocation(V, "uProjectionMatrix"), model_pick: l.getUniformLocation(V, "uModelViewMatrix"), id_pick: l.getUniformLocation(V, "uId"), viewport: l.getUniformLocation(O, "uViewPort"), copy_tex: l.getUniformLocation(ne, "uTexture"), ripple_time: l.getUniformLocation(ne, "uRippleTime"), ripple_pos: l.getUniformLocation(ne, "uRipplePos") }, bufs: { frame: E, depth: S, double: pe, pos: ee[0], color: ee[1], tex: ee[2], index: ee[3], norm: ee[4], copy_pos: ee[5] }, pick: { fb: l.createFramebuffer(), rb: l.createRenderbuffer(), tex: l.createTexture() } };
    for (const te in a) a[te] = U();
    l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL, true), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.LINEAR), o = z;
  }, H = () => {
    if (n.value === void 0 || (l === null && (l = n.value.getContext("webgl2", {})), l === null)) return;
    o === null && L(), console.log("pctn", o == null ? void 0 : o.attr.pos_model, o == null ? void 0 : o.attr.color, o == null ? void 0 : o.attr.texture, o == null ? void 0 : o.attr.norm), console.log("next", o == null ? void 0 : o.attr.pos_copy, o == null ? void 0 : o.attr.pos_pick), console.log("dims", r.width, r.height), l.bindRenderbuffer(l.RENDERBUFFER, o.bufs.depth), l.renderbufferStorage(l.RENDERBUFFER, l.DEPTH_COMPONENT16, r.width, r.height), l.bindRenderbuffer(l.RENDERBUFFER, null);
    const R = l.createTexture();
    l.bindTexture(l.TEXTURE_2D, R), l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, r.width, r.height, 0, l.RGBA, l.UNSIGNED_BYTE, null), o.bufs.double = R, l.bindTexture(l.TEXTURE_2D, null), l.viewport(0, 0, r.width, r.height);
    let x = 0, O = false, Z = Date.now();
    $ = setInterval(() => {
      const oe = Date.now(), B = (oe - Z) / 750;
      O ? (x -= B, x < 0 && (x = 0, O = false)) : (x += B, x > 7.5 && (x = 7.5, O = true)), i.step(oe - Z), f.value > 0 && (i.activate(f.value), f.value = 0), Z = oe, o !== null && (q(), b(o, x)), l !== null && o !== null && h.value != null && (l.uniform1f(o.unif.ripple_time, 1), m.value < 1 && (m.value += 0.1), m.value = Math.min(m.value, 1));
    }, 25);
  }, q = (R) => {
    for (let x = 0; x < 4; ++x) g.value - 1 == x ? _.value[x] < 1 && (_.value[x] += 0.05) : _.value[x] > 0 && (_.value[x] -= 0.05);
  }, A = (R, x) => {
    if (l === null) throw new Error("no webgl");
    const O = k(l.VERTEX_SHADER, R), Z = k(l.FRAGMENT_SHADER, x), oe = l.createProgram();
    return l.attachShader(oe, O), l.attachShader(oe, Z), l.linkProgram(oe), oe;
  }, k = (R, x) => {
    if (l === null) throw new Error("no webgl");
    const O = l.createShader(R);
    if (O === null) throw new Error("bad shader");
    return l.shaderSource(O, x), l.compileShader(O), O;
  }, U = () => {
    if (l === null) return null;
    const R = l.createTexture();
    return l.bindTexture(l.TEXTURE_2D, R), l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, 1, 1, 0, l.RGBA, l.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0])), R;
  }, Q = (R, x) => {
    Qe(() => {
      if (l === null) return;
      const O = x.target;
      l.bindTexture(l.TEXTURE_2D, a[R]), l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, l.RGBA, l.UNSIGNED_BYTE, O), l.hint(l.GENERATE_MIPMAP_HINT, l.NICEST), l.generateMipmap(l.TEXTURE_2D);
    });
  }, Y = (R) => {
    if (l === null || n.value === void 0) return;
    const x = R, O = x.offsetX, Z = x.offsetY;
    u.value = [O, Z];
  }, X = (R) => {
    var _a3;
    const x = R, O = (_a3 = n.value) == null ? void 0 : _a3.getBoundingClientRect();
    O !== void 0 && (u.value = [x.touches.item(0).clientX - O.x, x.touches.item(0).clientY - O.y], R.stopPropagation(), R.preventDefault());
  }, le = () => {
    $ != 0 && clearInterval($), console.log("resize", r.width, r.height), Qe(() => {
      H();
    });
  }, ye = (R) => {
    f.value = s.value, h.value = [u.value[0] / r.width, 1 - u.value[1] / r.height], m.value = 0;
  };
  return ct(() => {
    le(), ge(() => [r.width, r.height], (R, x) => Qe(le));
  }), We(() => {
    clearInterval($);
  }), (R, x) => (Tn(), oi(nn, null, [kt("canvas", { ref_key: "canvas", ref: n, onMousemove: x[0] || (x[0] = (O) => Y(O)), onTouchstart: x[1] || (x[1] = (O) => X(O)), onTouchmove: x[2] || (x[2] = (O) => X(O)), onTouchend: x[3] || (x[3] = (O) => ye()), onMouseup: x[4] || (x[4] = (O) => ye()), width: r.width, height: r.height }, null, 40, LS), kt("img", { src: "img/wood.jpg", onLoad: x[5] || (x[5] = (O) => Q("body", O)), style: { display: "none" } }, null, 32), kt("img", { src: "img/tex.jpg", onLoad: x[6] || (x[6] = (O) => Q("front_0", O)), style: { display: "none" } }, null, 32), kt("img", { src: "img/clock.jpg", onLoad: x[7] || (x[7] = (O) => Q("front_1", O)), style: { display: "none" } }, null, 32), kt("img", { src: "img/tv.jpg", onLoad: x[8] || (x[8] = (O) => Q("front_2", O)), style: { display: "none" } }, null, 32), kt("img", { src: "img/phone.jpg", onLoad: x[9] || (x[9] = (O) => Q("front_3", O)), style: { display: "none" } }, null, 32), kt("img", { src: "img/home-outline.svg", onLoad: x[10] || (x[10] = (O) => Q("home", O)), style: { display: "none" }, width: "1024", height: "1024" }, null, 32), kt("img", { src: "img/format-quote-close.svg", onLoad: x[11] || (x[11] = (O) => Q("quote", O)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), kt("img", { src: "img/gamepad-variant-outline.svg", onLoad: x[12] || (x[12] = (O) => Q("game", O)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), kt("img", { src: "img/numeric.svg", onLoad: x[13] || (x[13] = (O) => Q("numbers", O)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), kt("img", { src: "img/cards-outline.svg", onLoad: x[14] || (x[14] = (O) => Q("cards", O)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), kt("img", { src: "img/emoticon-happy-outline.svg", onLoad: x[15] || (x[15] = (O) => Q("happy", O)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), kt("img", { src: "img/format-italic.svg", onLoad: x[16] || (x[16] = (O) => Q("italic", O)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), kt("img", { src: "img/numeric-1.svg", onLoad: x[17] || (x[17] = (O) => Q("one", O)), style: { display: "none" } }, null, 32), kt("img", { src: "img/numeric-2.svg", onLoad: x[18] || (x[18] = (O) => Q("two", O)), style: { display: "none" } }, null, 32), kt("img", { src: "img/numeric-3.svg", onLoad: x[19] || (x[19] = (O) => Q("three", O)), style: { display: "none" } }, null, 32)], 64));
} }), BS = { class: "sliders q-ma-lg" }, FS = /* @__PURE__ */ Cl({ __name: "Sized", setup(e) {
  const t = W(320), n = W(240);
  return ct(() => {
    t.value = document.body.getBoundingClientRect().width;
    const r = document.getElementById("footer");
    let l = 100;
    r && (l = r.getBoundingClientRect().y);
    const a = document.getElementById("wgl-menu");
    let o = 200;
    a && (o = a.getBoundingClientRect().y), n.value = l - o;
  }), (r, l) => (Tn(), oi(nn, null, [kt("div", BS, [kt("b", null, po(t.value) + " x " + po(n.value), 1), Ye(Ve(vl), { modelValue: t.value, "onUpdate:modelValue": l[0] || (l[0] = (a) => t.value = a), min: 1, max: 1920 }, null, 8, ["modelValue"]), Ye(Ve(vl), { modelValue: n.value, "onUpdate:modelValue": l[1] || (l[1] = (a) => n.value = a), min: 1, max: 1920 }, null, 8, ["modelValue"])]), kt("div", { class: "menu", id: "wgl-menu", style: Xo({ width: t.value + "px", height: n.value + "px" }) }, [Ye(Og, { width: t.value, height: n.value }, null, 8, ["width", "height"])], 4)], 64));
} }), OS = { id: "menu" }, VS = /* @__PURE__ */ Cl({ __name: "MaxSized", setup(e) {
  Js();
  const t = W(256), n = W(192), r = W(100), l = () => {
    const a = document.getElementById("header");
    a !== null && (r.value = a.getBoundingClientRect().bottom);
    let o = 0;
    document.getElementById("footer"), a !== null && (o = a.getBoundingClientRect().height), Qe(() => {
      t.value = window.innerWidth, n.value = window.innerHeight - r.value - o;
    });
  };
  return ct(() => {
    window.addEventListener("resize", l), l();
  }), We(() => {
    window.removeEventListener("resize", l);
  }), (a, o) => (Tn(), oi("div", OS, [Ye(Og, { width: t.value, height: n.value }, null, 8, ["width", "height"])]));
} }), DS = { BASE_URL: "./", DEV: false, MODE: "production", PROD: true, SSR: false, VITE_APP_NAME: "vite mtg", VITE_client_id: "quasar-2fa", VITE_client_secret: "spoon" }, nc = tm(tx);
console.log(DS);
const IS = [{ name: "layout", path: "/", component: rx, children: [{ name: "root", path: "", component: _S }, { name: "webgl", path: "webgl", component: VS }, { name: "sized", path: "sized", component: FS }] }], zS = iS({ history: Fx(), routes: IS });
nc.use(zS);
nc.use(Zw, { plugins: { Dialog: Ow, Dark: am, Loading: Dw, Cookies: Bw, Notify: Qw }, config: { dark: "auto" } });
window.cb = (e) => {
  alert(e);
};
window.log = (e) => {
  console.log("%cwasm>%c %s", "background-color: blue; color: cyan; border: 2px solid blue;", "", e);
};
Lg({}).then(() => {
  nc.mount("#q-app");
});
