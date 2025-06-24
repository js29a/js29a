var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value2) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value2);
var __privateSet = (obj, member, value2, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value2) : member.set(obj, value2), value2);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _n2, _r2, _e, _l2, _t2, _a2, _PS_instances, o_fn;
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
function es(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const mt = {}, fr = [], On = () => {
}, Vg = () => false, Qo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ts = (e) => e.startsWith("onUpdate:"), It = Object.assign, ns = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Dg = Object.prototype.hasOwnProperty, st = (e, t) => Dg.call(e, t), Ne = Array.isArray, vr = (e) => Ma(e) === "[object Map]", $f = (e) => Ma(e) === "[object Set]", Ig = (e) => Ma(e) === "[object RegExp]", Qe = (e) => typeof e == "function", At = (e) => typeof e == "string", _l = (e) => typeof e == "symbol", St = (e) => e !== null && typeof e == "object", Lf = (e) => (St(e) || Qe(e)) && Qe(e.then) && Qe(e.catch), Bf = Object.prototype.toString, Ma = (e) => Bf.call(e), zg = (e) => Ma(e).slice(8, -1), Ff = (e) => Ma(e) === "[object Object]", ls = (e) => At(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Jr = /* @__PURE__ */ es(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Ko = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ng = /-(\w)/g, yn = Ko((e) => e.replace(Ng, (t, n) => n ? n.toUpperCase() : "")), Hg = /\B([A-Z])/g, Yl = Ko((e) => e.replace(Hg, "-$1").toLowerCase()), Wo = Ko((e) => e.charAt(0).toUpperCase() + e.slice(1)), Si = Ko((e) => e ? `on${Wo(e)}` : ""), gl = (e, t) => !Object.is(e, t), ea = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, Of = (e, t, n, l = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: l, value: n });
}, jg = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ug = (e) => {
  const t = At(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let rc;
const Ea = () => rc || (rc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Yo(e) {
  if (Ne(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const l = e[n], r = At(l) ? Yg(l) : Yo(l);
      if (r) for (const a in r) t[a] = r[a];
    }
    return t;
  } else if (At(e) || St(e)) return e;
}
const Qg = /;(?![^(]*\))/g, Kg = /:([^]+)/, Wg = /\/\*[^]*?\*\//g;
function Yg(e) {
  const t = {};
  return e.replace(Wg, "").split(Qg).forEach((n) => {
    if (n) {
      const l = n.split(Kg);
      l.length > 1 && (t[l[0].trim()] = l[1].trim());
    }
  }), t;
}
function rs(e) {
  let t = "";
  if (At(e)) t = e;
  else if (Ne(e)) for (let n = 0; n < e.length; n++) {
    const l = rs(e[n]);
    l && (t += l + " ");
  }
  else if (St(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Xg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Gg = /* @__PURE__ */ es(Xg);
function Vf(e) {
  return !!e || e === "";
}
const Df = (e) => !!(e && e.__v_isRef === true), If = (e) => At(e) ? e : e == null ? "" : Ne(e) || St(e) && (e.toString === Bf || !Qe(e.toString)) ? Df(e) ? If(e.value) : JSON.stringify(e, zf, 2) : String(e), zf = (e, t) => Df(t) ? zf(e, t.value) : vr(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [l, r], a) => (n[Ci(l, a) + " =>"] = r, n), {}) } : $f(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => Ci(n)) } : _l(t) ? Ci(t) : St(t) && !Ne(t) && !Ff(t) ? String(t) : t, Ci = (e, t = "") => {
  var n;
  return _l(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let an;
class Zg {
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
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Jg() {
  return an;
}
let bt;
const ki = /* @__PURE__ */ new WeakSet();
class Nf {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, an && an.active && an.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ki.has(this) && (ki.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || jf(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, ac(this), Uf(this);
    const t = bt, n = qn;
    bt = this, qn = true;
    try {
      return this.fn();
    } finally {
      Qf(this), bt = t, qn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) is(t);
      this.deps = this.depsTail = void 0, ac(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ki.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    gu(this) && this.run();
  }
  get dirty() {
    return gu(this);
  }
}
let Hf = 0, ta, na;
function jf(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = na, na = e;
    return;
  }
  e.next = ta, ta = e;
}
function as() {
  Hf++;
}
function os() {
  if (--Hf > 0) return;
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
      } catch (l) {
        e || (e = l);
      }
      t = n;
    }
  }
  if (e) throw e;
}
function Uf(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Qf(e) {
  let t, n = e.depsTail, l = n;
  for (; l; ) {
    const r = l.prevDep;
    l.version === -1 ? (l === n && (n = r), is(l), e0(l)) : t = l, l.dep.activeLink = l.prevActiveLink, l.prevActiveLink = void 0, l = r;
  }
  e.deps = t, e.depsTail = n;
}
function gu(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Kf(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function Kf(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ma)) return;
  e.globalVersion = ma;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !gu(e)) {
    e.flags &= -3;
    return;
  }
  const n = bt, l = qn;
  bt = e, qn = true;
  try {
    Uf(e);
    const r = e.fn(e._value);
    (t.version === 0 || gl(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    bt = n, qn = l, Qf(e), e.flags &= -3;
  }
}
function is(e, t = false) {
  const { dep: n, prevSub: l, nextSub: r } = e;
  if (l && (l.nextSub = r, e.prevSub = void 0), r && (r.prevSub = l, e.nextSub = void 0), n.subs === e && (n.subs = l, !l && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep) is(a, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function e0(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let qn = true;
const Wf = [];
function wl() {
  Wf.push(qn), qn = false;
}
function xl() {
  const e = Wf.pop();
  qn = e === void 0 ? true : e;
}
function ac(e) {
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
class t0 {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class us {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!bt || !qn || bt === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== bt) n = this.activeLink = new t0(bt, this), bt.deps ? (n.prevDep = bt.depsTail, bt.depsTail.nextDep = n, bt.depsTail = n) : bt.deps = bt.depsTail = n, Yf(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const l = n.nextDep;
      l.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = l), n.prevDep = bt.depsTail, n.nextDep = void 0, bt.depsTail.nextDep = n, bt.depsTail = n, bt.deps === n && (bt.deps = l);
    }
    return n;
  }
  trigger(t) {
    this.version++, ma++, this.notify(t);
  }
  notify(t) {
    as();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      os();
    }
  }
}
function Yf(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let l = t.deps; l; l = l.nextDep) Yf(l);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const bu = /* @__PURE__ */ new WeakMap(), Il = Symbol(""), yu = Symbol(""), ha = Symbol("");
function Wt(e, t, n) {
  if (qn && bt) {
    let l = bu.get(e);
    l || bu.set(e, l = /* @__PURE__ */ new Map());
    let r = l.get(n);
    r || (l.set(n, r = new us()), r.map = l, r.key = n), r.track();
  }
}
function Wn(e, t, n, l, r, a) {
  const o = bu.get(e);
  if (!o) {
    ma++;
    return;
  }
  const i = (u) => {
    u && u.trigger();
  };
  if (as(), t === "clear") o.forEach(i);
  else {
    const u = Ne(e), c = u && ls(n);
    if (u && n === "length") {
      const s = Number(l);
      o.forEach((f, h) => {
        (h === "length" || h === ha || !_l(h) && h >= s) && i(f);
      });
    } else switch ((n !== void 0 || o.has(void 0)) && i(o.get(n)), c && i(o.get(ha)), t) {
      case "add":
        u ? c && i(o.get("length")) : (i(o.get(Il)), vr(e) && i(o.get(yu)));
        break;
      case "delete":
        u || (i(o.get(Il)), vr(e) && i(o.get(yu)));
        break;
      case "set":
        vr(e) && i(o.get(Il));
        break;
    }
  }
  os();
}
function Jl(e) {
  const t = Xe(e);
  return t === e ? t : (Wt(t, "iterate", ha), Mn(e) ? t : t.map(Gt));
}
function ss(e) {
  return Wt(e = Xe(e), "iterate", ha), e;
}
const n0 = { __proto__: null, [Symbol.iterator]() {
  return Ti(this, Symbol.iterator, Gt);
}, concat(...e) {
  return Jl(this).concat(...e.map((t) => Ne(t) ? Jl(t) : t));
}, entries() {
  return Ti(this, "entries", (e) => (e[1] = Gt(e[1]), e));
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
  return qi(this, "includes", e);
}, indexOf(...e) {
  return qi(this, "indexOf", e);
}, join(e) {
  return Jl(this).join(e);
}, lastIndexOf(...e) {
  return qi(this, "lastIndexOf", e);
}, map(e, t) {
  return zn(this, "map", e, t, void 0, arguments);
}, pop() {
  return Fr(this, "pop");
}, push(...e) {
  return Fr(this, "push", e);
}, reduce(e, ...t) {
  return oc(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return oc(this, "reduceRight", e, t);
}, shift() {
  return Fr(this, "shift");
}, some(e, t) {
  return zn(this, "some", e, t, void 0, arguments);
}, splice(...e) {
  return Fr(this, "splice", e);
}, toReversed() {
  return Jl(this).toReversed();
}, toSorted(e) {
  return Jl(this).toSorted(e);
}, toSpliced(...e) {
  return Jl(this).toSpliced(...e);
}, unshift(...e) {
  return Fr(this, "unshift", e);
}, values() {
  return Ti(this, "values", Gt);
} };
function Ti(e, t, n) {
  const l = ss(e), r = l[t]();
  return l !== e && !Mn(e) && (r._next = r.next, r.next = () => {
    const a = r._next();
    return a.value && (a.value = n(a.value)), a;
  }), r;
}
const l0 = Array.prototype;
function zn(e, t, n, l, r, a) {
  const o = ss(e), i = o !== e && !Mn(e), u = o[t];
  if (u !== l0[t]) {
    const f = u.apply(e, a);
    return i ? Gt(f) : f;
  }
  let c = n;
  o !== e && (i ? c = function(f, h) {
    return n.call(this, Gt(f), h, e);
  } : n.length > 2 && (c = function(f, h) {
    return n.call(this, f, h, e);
  }));
  const s = u.call(o, c, l);
  return i && r ? r(s) : s;
}
function oc(e, t, n, l) {
  const r = ss(e);
  let a = n;
  return r !== e && (Mn(e) ? n.length > 3 && (a = function(o, i, u) {
    return n.call(this, o, i, u, e);
  }) : a = function(o, i, u) {
    return n.call(this, o, Gt(i), u, e);
  }), r[t](a, ...l);
}
function qi(e, t, n) {
  const l = Xe(e);
  Wt(l, "iterate", ha);
  const r = l[t](...n);
  return (r === -1 || r === false) && vs(n[0]) ? (n[0] = Xe(n[0]), l[t](...n)) : r;
}
function Fr(e, t, n = []) {
  wl(), as();
  const l = Xe(e)[t].apply(e, n);
  return os(), xl(), l;
}
const r0 = /* @__PURE__ */ es("__proto__,__v_isRef,__isVue"), Xf = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_l));
function a0(e) {
  _l(e) || (e = String(e));
  const t = Xe(this);
  return Wt(t, "has", e), t.hasOwnProperty(e);
}
class Gf {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, l) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, a = this._isShallow;
    if (n === "__v_isReactive") return !r;
    if (n === "__v_isReadonly") return r;
    if (n === "__v_isShallow") return a;
    if (n === "__v_raw") return l === (r ? a ? h0 : tv : a ? ev : Jf).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(l) ? t : void 0;
    const o = Ne(t);
    if (!r) {
      let u;
      if (o && (u = n0[n])) return u;
      if (n === "hasOwnProperty") return a0;
    }
    const i = Reflect.get(t, n, pt(t) ? t : l);
    return (_l(n) ? Xf.has(n) : r0(n)) || (r || Wt(t, "get", n), a) ? i : pt(i) ? o && ls(n) ? i : i.value : St(i) ? r ? nv(i) : Fn(i) : i;
  }
}
class Zf extends Gf {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, l, r) {
    let a = t[n];
    if (!this._isShallow) {
      const u = Ul(a);
      if (!Mn(l) && !Ul(l) && (a = Xe(a), l = Xe(l)), !Ne(t) && pt(a) && !pt(l)) return u ? false : (a.value = l, true);
    }
    const o = Ne(t) && ls(n) ? Number(n) < t.length : st(t, n), i = Reflect.set(t, n, l, pt(t) ? t : r);
    return t === Xe(r) && (o ? gl(l, a) && Wn(t, "set", n, l) : Wn(t, "add", n, l)), i;
  }
  deleteProperty(t, n) {
    const l = st(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && l && Wn(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const l = Reflect.has(t, n);
    return (!_l(n) || !Xf.has(n)) && Wt(t, "has", n), l;
  }
  ownKeys(t) {
    return Wt(t, "iterate", Ne(t) ? "length" : Il), Reflect.ownKeys(t);
  }
}
class o0 extends Gf {
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
const i0 = new Zf(), u0 = new o0(), s0 = new Zf(true);
const pu = (e) => e, Oa = (e) => Reflect.getPrototypeOf(e);
function c0(e, t, n) {
  return function(...l) {
    const r = this.__v_raw, a = Xe(r), o = vr(a), i = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, c = r[e](...l), s = n ? pu : t ? _u : Gt;
    return !t && Wt(a, "iterate", u ? yu : Il), { next() {
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
function d0(e, t) {
  const n = { get(r) {
    const a = this.__v_raw, o = Xe(a), i = Xe(r);
    e || (gl(r, i) && Wt(o, "get", r), Wt(o, "get", i));
    const { has: u } = Oa(o), c = t ? pu : e ? _u : Gt;
    if (u.call(o, r)) return c(a.get(r));
    if (u.call(o, i)) return c(a.get(i));
    a !== o && a.get(r);
  }, get size() {
    const r = this.__v_raw;
    return !e && Wt(Xe(r), "iterate", Il), Reflect.get(r, "size", r);
  }, has(r) {
    const a = this.__v_raw, o = Xe(a), i = Xe(r);
    return e || (gl(r, i) && Wt(o, "has", r), Wt(o, "has", i)), r === i ? a.has(r) : a.has(r) || a.has(i);
  }, forEach(r, a) {
    const o = this, i = o.__v_raw, u = Xe(i), c = t ? pu : e ? _u : Gt;
    return !e && Wt(u, "iterate", Il), i.forEach((s, f) => r.call(a, c(s), c(f), o));
  } };
  return It(n, e ? { add: Va("add"), set: Va("set"), delete: Va("delete"), clear: Va("clear") } : { add(r) {
    !t && !Mn(r) && !Ul(r) && (r = Xe(r));
    const a = Xe(this);
    return Oa(a).has.call(a, r) || (a.add(r), Wn(a, "add", r, r)), this;
  }, set(r, a) {
    !t && !Mn(a) && !Ul(a) && (a = Xe(a));
    const o = Xe(this), { has: i, get: u } = Oa(o);
    let c = i.call(o, r);
    c || (r = Xe(r), c = i.call(o, r));
    const s = u.call(o, r);
    return o.set(r, a), c ? gl(a, s) && Wn(o, "set", r, a) : Wn(o, "add", r, a), this;
  }, delete(r) {
    const a = Xe(this), { has: o, get: i } = Oa(a);
    let u = o.call(a, r);
    u || (r = Xe(r), u = o.call(a, r)), i && i.call(a, r);
    const c = a.delete(r);
    return u && Wn(a, "delete", r, void 0), c;
  }, clear() {
    const r = Xe(this), a = r.size !== 0, o = r.clear();
    return a && Wn(r, "clear", void 0, void 0), o;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    n[r] = c0(r, e, t);
  }), n;
}
function cs(e, t) {
  const n = d0(e, t);
  return (l, r, a) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? l : Reflect.get(st(n, r) && r in l ? n : l, r, a);
}
const f0 = { get: cs(false, false) }, v0 = { get: cs(false, true) }, m0 = { get: cs(true, false) };
const Jf = /* @__PURE__ */ new WeakMap(), ev = /* @__PURE__ */ new WeakMap(), tv = /* @__PURE__ */ new WeakMap(), h0 = /* @__PURE__ */ new WeakMap();
function g0(e) {
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
function b0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : g0(zg(e));
}
function Fn(e) {
  return Ul(e) ? e : fs(e, false, i0, f0, Jf);
}
function ds(e) {
  return fs(e, false, s0, v0, ev);
}
function nv(e) {
  return fs(e, true, u0, m0, tv);
}
function fs(e, t, n, l, r) {
  if (!St(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const a = r.get(e);
  if (a) return a;
  const o = b0(e);
  if (o === 0) return e;
  const i = new Proxy(e, o === 2 ? l : n);
  return r.set(e, i), i;
}
function la(e) {
  return Ul(e) ? la(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ul(e) {
  return !!(e && e.__v_isReadonly);
}
function Mn(e) {
  return !!(e && e.__v_isShallow);
}
function vs(e) {
  return e ? !!e.__v_raw : false;
}
function Xe(e) {
  const t = e && e.__v_raw;
  return t ? Xe(t) : e;
}
function Xo(e) {
  return !st(e, "__v_skip") && Object.isExtensible(e) && Of(e, "__v_skip", true), e;
}
const Gt = (e) => St(e) ? Fn(e) : e, _u = (e) => St(e) ? nv(e) : e;
function pt(e) {
  return e ? e.__v_isRef === true : false;
}
function K(e) {
  return lv(e, false);
}
function y0(e) {
  return lv(e, true);
}
function lv(e, t) {
  return pt(e) ? e : new p0(e, t);
}
class p0 {
  constructor(t, n) {
    this.dep = new us(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Xe(t), this._value = n ? t : Gt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, l = this.__v_isShallow || Mn(t) || Ul(t);
    t = l ? t : Xe(t), gl(t, n) && (this._rawValue = t, this._value = l ? t : Gt(t), this.dep.trigger());
  }
}
function Ie(e) {
  return pt(e) ? e.value : e;
}
const _0 = { get: (e, t, n) => t === "__v_raw" ? e : Ie(Reflect.get(e, t, n)), set: (e, t, n, l) => {
  const r = e[t];
  return pt(r) && !pt(n) ? (r.value = n, true) : Reflect.set(e, t, n, l);
} };
function rv(e) {
  return la(e) ? e : new Proxy(e, _0);
}
class w0 {
  constructor(t, n, l) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new us(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ma - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = l;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && bt !== this) return jf(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return Kf(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function x0(e, t, n = false) {
  let l, r;
  return Qe(e) ? l = e : (l = e.get, r = e.set), new w0(l, r, n);
}
const Da = {}, yo = /* @__PURE__ */ new WeakMap();
let $l;
function S0(e, t = false, n = $l) {
  if (n) {
    let l = yo.get(n);
    l || yo.set(n, l = []), l.push(e);
  }
}
function C0(e, t, n = mt) {
  const { immediate: l, deep: r, once: a, scheduler: o, augmentJob: i, call: u } = n, c = (b) => r ? b : Mn(b) || r === false || r === 0 ? Yn(b, 1) : Yn(b);
  let s, f, h, m, g = false, w = false;
  if (pt(e) ? (f = () => e.value, g = Mn(e)) : la(e) ? (f = () => c(e), g = true) : Ne(e) ? (w = true, g = e.some((b) => la(b) || Mn(b)), f = () => e.map((b) => {
    if (pt(b)) return b.value;
    if (la(b)) return c(b);
    if (Qe(b)) return u ? u(b, 2) : b();
  })) : Qe(e) ? t ? f = u ? () => u(e, 2) : e : f = () => {
    if (h) {
      wl();
      try {
        h();
      } finally {
        xl();
      }
    }
    const b = $l;
    $l = s;
    try {
      return u ? u(e, 3, [m]) : e(m);
    } finally {
      $l = b;
    }
  } : f = On, t && r) {
    const b = f, C = r === true ? 1 / 0 : r;
    f = () => Yn(b(), C);
  }
  const x = Jg(), T = () => {
    s.stop(), x && x.active && ns(x.effects, s);
  };
  if (a && t) {
    const b = t;
    t = (...C) => {
      b(...C), T();
    };
  }
  let p = w ? new Array(e.length).fill(Da) : Da;
  const y = (b) => {
    if (!(!(s.flags & 1) || !s.dirty && !b)) if (t) {
      const C = s.run();
      if (r || g || (w ? C.some(($, O) => gl($, p[O])) : gl(C, p))) {
        h && h();
        const $ = $l;
        $l = s;
        try {
          const O = [C, p === Da ? void 0 : w && p[0] === Da ? [] : p, m];
          u ? u(t, 3, O) : t(...O), p = C;
        } finally {
          $l = $;
        }
      }
    } else s.run();
  };
  return i && i(y), s = new Nf(f), s.scheduler = o ? () => o(y, false) : y, m = (b) => S0(b, false, s), h = s.onStop = () => {
    const b = yo.get(s);
    if (b) {
      if (u) u(b, 4);
      else for (const C of b) C();
      yo.delete(s);
    }
  }, t ? l ? y(true) : p = s.run() : o ? o(y.bind(null, true), true) : s.run(), T.pause = s.pause.bind(s), T.resume = s.resume.bind(s), T.stop = T, T;
}
function Yn(e, t = 1 / 0, n) {
  if (t <= 0 || !St(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
  if (n.add(e), t--, pt(e)) Yn(e.value, t, n);
  else if (Ne(e)) for (let l = 0; l < e.length; l++) Yn(e[l], t, n);
  else if ($f(e) || vr(e)) e.forEach((l) => {
    Yn(l, t, n);
  });
  else if (Ff(e)) {
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
function Ra(e, t, n, l) {
  try {
    return l ? e(...l) : e();
  } catch (r) {
    Go(r, t, n);
  }
}
function Rn(e, t, n, l) {
  if (Qe(e)) {
    const r = Ra(e, t, n, l);
    return r && Lf(r) && r.catch((a) => {
      Go(a, t, n);
    }), r;
  }
  if (Ne(e)) {
    const r = [];
    for (let a = 0; a < e.length; a++) r.push(Rn(e[a], t, n, l));
    return r;
  }
}
function Go(e, t, n, l = true) {
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
      wl(), Ra(a, null, 10, [e, u, c]), xl();
      return;
    }
  }
  k0(e, n, r, l, o);
}
function k0(e, t, n, l = true, r = false) {
  if (r) throw e;
  console.error(e);
}
const Zt = [];
let Ln = -1;
const mr = [];
let cl = null, ur = 0;
const av = Promise.resolve();
let po = null;
function We(e) {
  const t = po || av;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function T0(e) {
  let t = Ln + 1, n = Zt.length;
  for (; t < n; ) {
    const l = t + n >>> 1, r = Zt[l], a = ga(r);
    a < e || a === e && r.flags & 2 ? t = l + 1 : n = l;
  }
  return t;
}
function ms(e) {
  if (!(e.flags & 1)) {
    const t = ga(e), n = Zt[Zt.length - 1];
    !n || !(e.flags & 2) && t >= ga(n) ? Zt.push(e) : Zt.splice(T0(t), 0, e), e.flags |= 1, ov();
  }
}
function ov() {
  po || (po = av.then(uv));
}
function q0(e) {
  Ne(e) ? mr.push(...e) : cl && e.id === -1 ? cl.splice(ur + 1, 0, e) : e.flags & 1 || (mr.push(e), e.flags |= 1), ov();
}
function ic(e, t, n = Ln + 1) {
  for (; n < Zt.length; n++) {
    const l = Zt[n];
    if (l && l.flags & 2) {
      if (e && l.id !== e.uid) continue;
      Zt.splice(n, 1), n--, l.flags & 4 && (l.flags &= -2), l(), l.flags & 4 || (l.flags &= -2);
    }
  }
}
function iv(e) {
  if (mr.length) {
    const t = [...new Set(mr)].sort((n, l) => ga(n) - ga(l));
    if (mr.length = 0, cl) {
      cl.push(...t);
      return;
    }
    for (cl = t, ur = 0; ur < cl.length; ur++) {
      const n = cl[ur];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    cl = null, ur = 0;
  }
}
const ga = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function uv(e) {
  try {
    for (Ln = 0; Ln < Zt.length; Ln++) {
      const t = Zt[Ln];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ra(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ln < Zt.length; Ln++) {
      const t = Zt[Ln];
      t && (t.flags &= -2);
    }
    Ln = -1, Zt.length = 0, iv(), po = null, (Zt.length || mr.length) && uv();
  }
}
let nn = null, sv = null;
function _o(e) {
  const t = nn;
  return nn = e, sv = e && e.type.__scopeId || null, t;
}
function Rt(e, t = nn, n) {
  if (!t || e._n) return e;
  const l = (...r) => {
    l._d && _c(-1);
    const a = _o(t);
    let o;
    try {
      o = e(...r);
    } finally {
      _o(a), l._d && _c(1);
    }
    return o;
  };
  return l._n = true, l._c = true, l._d = true, l;
}
function cn(e, t) {
  if (nn === null) return e;
  const n = ai(nn), l = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [a, o, i, u = mt] = t[r];
    a && (Qe(a) && (a = { mounted: a, updated: a }), a.deep && Yn(o), l.push({ dir: a, instance: n, value: o, oldValue: void 0, arg: i, modifiers: u }));
  }
  return e;
}
function Tl(e, t, n, l) {
  const r = e.dirs, a = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    a && (i.oldValue = a[o].value);
    let u = i.dir[l];
    u && (wl(), Rn(u, n, 8, [e.el, i, e, t]), xl());
  }
}
const cv = Symbol("_vte"), dv = (e) => e.__isTeleport, ra = (e) => e && (e.disabled || e.disabled === ""), uc = (e) => e && (e.defer || e.defer === ""), sc = (e) => typeof SVGElement < "u" && e instanceof SVGElement, cc = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, wu = (e, t) => {
  const n = e && e.to;
  return At(n) ? t ? t(n) : null : n;
}, fv = { name: "Teleport", __isTeleport: true, process(e, t, n, l, r, a, o, i, u, c) {
  const { mc: s, pc: f, pbc: h, o: { insert: m, querySelector: g, createText: w, createComment: x } } = c, T = ra(t.props);
  let { shapeFlag: p, children: y, dynamicChildren: b } = t;
  if (e == null) {
    const C = t.el = w(""), $ = t.anchor = w("");
    m(C, n, l), m($, n, l);
    const O = (L, B) => {
      p & 16 && (r && r.isCE && (r.ce._teleportTarget = L), s(y, L, B, r, a, o, i, u));
    }, H = () => {
      const L = t.target = wu(t.props, g), B = vv(L, t, w, m);
      L && (o !== "svg" && sc(L) ? o = "svg" : o !== "mathml" && cc(L) && (o = "mathml"), T || (O(L, B), ao(t, false)));
    };
    T && (O(n, $), ao(t, true)), uc(t.props) ? Ft(() => {
      H(), t.el.__isMounted = true;
    }, a) : H();
  } else {
    if (uc(t.props) && !e.el.__isMounted) {
      Ft(() => {
        fv.process(e, t, n, l, r, a, o, i, u, c), delete e.el.__isMounted;
      }, a);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const C = t.anchor = e.anchor, $ = t.target = e.target, O = t.targetAnchor = e.targetAnchor, H = ra(e.props), L = H ? n : $, B = H ? C : O;
    if (o === "svg" || sc($) ? o = "svg" : (o === "mathml" || cc($)) && (o = "mathml"), b ? (h(e.dynamicChildren, b, L, r, a, o, i), ys(e, t, true)) : u || f(e, t, L, B, r, a, o, i, false), T) H ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ia(t, n, C, c, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const N = t.target = wu(t.props, g);
      N && Ia(t, N, null, c, 0);
    } else H && Ia(t, $, O, c, 1);
    ao(t, T);
  }
}, remove(e, t, n, { um: l, o: { remove: r } }, a) {
  const { shapeFlag: o, children: i, anchor: u, targetStart: c, targetAnchor: s, target: f, props: h } = e;
  if (f && (r(c), r(s)), a && r(u), o & 16) {
    const m = a || !ra(h);
    for (let g = 0; g < i.length; g++) {
      const w = i[g];
      l(w, t, n, m, !!w.dynamicChildren);
    }
  }
}, move: Ia, hydrate: M0 };
function Ia(e, t, n, { o: { insert: l }, m: r }, a = 2) {
  a === 0 && l(e.targetAnchor, t, n);
  const { el: o, anchor: i, shapeFlag: u, children: c, props: s } = e, f = a === 2;
  if (f && l(o, t, n), (!f || ra(s)) && u & 16) for (let h = 0; h < c.length; h++) r(c[h], t, n, 2);
  f && l(i, t, n);
}
function M0(e, t, n, l, r, a, { o: { nextSibling: o, parentNode: i, querySelector: u, insert: c, createText: s } }, f) {
  const h = t.target = wu(t.props, u);
  if (h) {
    const m = ra(t.props), g = h._lpa || h.firstChild;
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
      t.targetAnchor || vv(h, t, s, c), f(g && o(g), t, h, n, l, r, a);
    }
    ao(t, m);
  }
  return t.anchor && o(t.anchor);
}
const E0 = fv;
function ao(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let l, r;
    for (t ? (l = e.el, r = e.anchor) : (l = e.targetStart, r = e.targetAnchor); l && l !== r; ) l.nodeType === 1 && l.setAttribute("data-v-owner", n.uid), l = l.nextSibling;
    n.ut();
  }
}
function vv(e, t, n, l) {
  const r = t.targetStart = n(""), a = t.targetAnchor = n("");
  return r[cv] = a, e && (l(r, e), l(a, e)), a;
}
const dl = Symbol("_leaveCb"), za = Symbol("_enterCb");
function mv() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return ft(() => {
    e.isMounted = true;
  }), Ke(() => {
    e.isUnmounting = true;
  }), e;
}
const fn = [Function, Array], hv = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: fn, onEnter: fn, onAfterEnter: fn, onEnterCancelled: fn, onBeforeLeave: fn, onLeave: fn, onAfterLeave: fn, onLeaveCancelled: fn, onBeforeAppear: fn, onAppear: fn, onAfterAppear: fn, onAppearCancelled: fn }, gv = (e) => {
  const t = e.subTree;
  return t.component ? gv(t.component) : t;
}, R0 = { name: "BaseTransition", props: hv, setup(e, { slots: t }) {
  const n = xe(), l = mv();
  return () => {
    const r = t.default && hs(t.default(), true);
    if (!r || !r.length) return;
    const a = bv(r), o = Xe(e), { mode: i } = o;
    if (l.isLeaving) return Mi(a);
    const u = dc(a);
    if (!u) return Mi(a);
    let c = ba(u, o, l, n, (f) => c = f);
    u.type !== Jt && pl(u, c);
    let s = n.subTree && dc(n.subTree);
    if (s && s.type !== Jt && !ml(u, s) && gv(n).type !== Jt) {
      let f = ba(s, o, l, n);
      if (pl(s, f), i === "out-in" && u.type !== Jt) return l.isLeaving = true, f.afterLeave = () => {
        l.isLeaving = false, n.job.flags & 8 || n.update(), delete f.afterLeave, s = void 0;
      }, Mi(a);
      i === "in-out" && u.type !== Jt ? f.delayLeave = (h, m, g) => {
        const w = yv(l, s);
        w[String(s.key)] = s, h[dl] = () => {
          m(), h[dl] = void 0, delete c.delayedLeave, s = void 0;
        }, c.delayedLeave = () => {
          g(), delete c.delayedLeave, s = void 0;
        };
      } : s = void 0;
    } else s && (s = void 0);
    return a;
  };
} };
function bv(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== Jt) {
      t = n;
      break;
    }
  }
  return t;
}
const A0 = R0;
function yv(e, t) {
  const { leavingVNodes: n } = e;
  let l = n.get(t.type);
  return l || (l = /* @__PURE__ */ Object.create(null), n.set(t.type, l)), l;
}
function ba(e, t, n, l, r) {
  const { appear: a, mode: o, persisted: i = false, onBeforeEnter: u, onEnter: c, onAfterEnter: s, onEnterCancelled: f, onBeforeLeave: h, onLeave: m, onAfterLeave: g, onLeaveCancelled: w, onBeforeAppear: x, onAppear: T, onAfterAppear: p, onAppearCancelled: y } = t, b = String(e.key), C = yv(n, e), $ = (L, B) => {
    L && Rn(L, l, 9, B);
  }, O = (L, B) => {
    const N = B[1];
    $(L, B), Ne(L) ? L.every((q) => q.length <= 1) && N() : L.length <= 1 && N();
  }, H = { mode: o, persisted: i, beforeEnter(L) {
    let B = u;
    if (!n.isMounted) if (a) B = x || u;
    else return;
    L[dl] && L[dl](true);
    const N = C[b];
    N && ml(e, N) && N.el[dl] && N.el[dl](), $(B, [L]);
  }, enter(L) {
    let B = c, N = s, q = f;
    if (!n.isMounted) if (a) B = T || c, N = p || s, q = y || f;
    else return;
    let E = false;
    const k = L[za] = (j) => {
      E || (E = true, j ? $(q, [L]) : $(N, [L]), H.delayedLeave && H.delayedLeave(), L[za] = void 0);
    };
    B ? O(B, [L, k]) : k();
  }, leave(L, B) {
    const N = String(e.key);
    if (L[za] && L[za](true), n.isUnmounting) return B();
    $(h, [L]);
    let q = false;
    const E = L[dl] = (k) => {
      q || (q = true, B(), k ? $(w, [L]) : $(g, [L]), L[dl] = void 0, C[N] === e && delete C[N]);
    };
    C[N] = e, m ? O(m, [L, E]) : E();
  }, clone(L) {
    const B = ba(L, t, n, l, r);
    return r && r(B), B;
  } };
  return H;
}
function Mi(e) {
  if (Zo(e)) return e = Gn(e), e.children = null, e;
}
function dc(e) {
  if (!Zo(e)) return dv(e.type) && e.children ? bv(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && Qe(n.default)) return n.default();
  }
}
function pl(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, pl(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function hs(e, t = false, n) {
  let l = [], r = 0;
  for (let a = 0; a < e.length; a++) {
    let o = e[a];
    const i = n == null ? o.key : String(n) + String(o.key != null ? o.key : a);
    o.type === on ? (o.patchFlag & 128 && r++, l = l.concat(hs(o.children, t, i))) : (t || o.type !== Jt) && l.push(i != null ? Gn(o, { key: i }) : o);
  }
  if (r > 1) for (let a = 0; a < l.length; a++) l[a].patchFlag = -2;
  return l;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Er(e, t) {
  return Qe(e) ? It({ name: e.name }, t, { setup: e }) : e;
}
function pv(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function wo(e, t, n, l, r = false) {
  if (Ne(e)) {
    e.forEach((g, w) => wo(g, t && (Ne(t) ? t[w] : t), n, l, r));
    return;
  }
  if (hr(l) && !r) {
    l.shapeFlag & 512 && l.type.__asyncResolved && l.component.subTree.component && wo(e, t, n, l.component.subTree);
    return;
  }
  const a = l.shapeFlag & 4 ? ai(l.component) : l.el, o = r ? null : a, { i, r: u } = e, c = t && t.r, s = i.refs === mt ? i.refs = {} : i.refs, f = i.setupState, h = Xe(f), m = f === mt ? () => false : (g) => st(h, g);
  if (c != null && c !== u && (At(c) ? (s[c] = null, m(c) && (f[c] = null)) : pt(c) && (c.value = null)), Qe(u)) Ra(u, i, 12, [o, s]);
  else {
    const g = At(u), w = pt(u);
    if (g || w) {
      const x = () => {
        if (e.f) {
          const T = g ? m(u) ? f[u] : s[u] : u.value;
          r ? Ne(T) && ns(T, a) : Ne(T) ? T.includes(a) || T.push(a) : g ? (s[u] = [a], m(u) && (f[u] = s[u])) : (u.value = [a], e.k && (s[e.k] = u.value));
        } else g ? (s[u] = o, m(u) && (f[u] = o)) : w && (u.value = o, e.k && (s[e.k] = o));
      };
      o ? (x.id = -1, Ft(x, n)) : x();
    }
  }
}
Ea().requestIdleCallback;
Ea().cancelIdleCallback;
const hr = (e) => !!e.type.__asyncLoader, Zo = (e) => e.type.__isKeepAlive, P0 = { name: "KeepAlive", __isKeepAlive: true, props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] }, setup(e, { slots: t }) {
  const n = xe(), l = n.ctx;
  if (!l.renderer) return () => {
    const p = t.default && t.default();
    return p && p.length === 1 ? p[0] : p;
  };
  const r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
  let o = null;
  const i = n.suspense, { renderer: { p: u, m: c, um: s, o: { createElement: f } } } = l, h = f("div");
  l.activate = (p, y, b, C, $) => {
    const O = p.component;
    c(p, y, b, 0, i), u(O.vnode, p, y, b, O, i, C, p.slotScopeIds, $), Ft(() => {
      O.isDeactivated = false, O.a && ea(O.a);
      const H = p.props && p.props.onVnodeMounted;
      H && mn(H, O.parent, p);
    }, i);
  }, l.deactivate = (p) => {
    const y = p.component;
    So(y.m), So(y.a), c(p, h, null, 1, i), Ft(() => {
      y.da && ea(y.da);
      const b = p.props && p.props.onVnodeUnmounted;
      b && mn(b, y.parent, p), y.isDeactivated = true;
    }, i);
  };
  function m(p) {
    Ei(p), s(p, n, i, true);
  }
  function g(p) {
    r.forEach((y, b) => {
      const C = qu(y.type);
      C && !p(C) && w(b);
    });
  }
  function w(p) {
    const y = r.get(p);
    y && (!o || !ml(y, o)) ? m(y) : o && Ei(o), r.delete(p), a.delete(p);
  }
  ge(() => [e.include, e.exclude], ([p, y]) => {
    p && g((b) => Kr(p, b)), y && g((b) => !Kr(y, b));
  }, { flush: "post", deep: true });
  let x = null;
  const T = () => {
    x != null && (Co(n.subTree.type) ? Ft(() => {
      r.set(x, Na(n.subTree));
    }, n.subTree.suspense) : r.set(x, Na(n.subTree)));
  };
  return ft(T), ti(T), Ke(() => {
    r.forEach((p) => {
      const { subTree: y, suspense: b } = n, C = Na(y);
      if (p.type === C.type && p.key === C.key) {
        Ei(C);
        const $ = C.component.da;
        $ && Ft($, b);
        return;
      }
      m(p);
    });
  }), () => {
    if (x = null, !t.default) return o = null;
    const p = t.default(), y = p[0];
    if (p.length > 1) return o = null, p;
    if (!pa(y) || !(y.shapeFlag & 4) && !(y.shapeFlag & 128)) return o = null, y;
    let b = Na(y);
    if (b.type === Jt) return o = null, b;
    const C = b.type, $ = qu(hr(b) ? b.type.__asyncResolved || {} : C), { include: O, exclude: H, max: L } = e;
    if (O && (!$ || !Kr(O, $)) || H && $ && Kr(H, $)) return b.shapeFlag &= -257, o = b, y;
    const B = b.key == null ? C : b.key, N = r.get(B);
    return b.el && (b = Gn(b), y.shapeFlag & 128 && (y.ssContent = b)), x = B, N ? (b.el = N.el, b.component = N.component, b.transition && pl(b, b.transition), b.shapeFlag |= 512, a.delete(B), a.add(B)) : (a.add(B), L && a.size > parseInt(L, 10) && w(a.values().next().value)), b.shapeFlag |= 256, o = b, Co(y.type) ? y : b;
  };
} }, _v = P0;
function Kr(e, t) {
  return Ne(e) ? e.some((n) => Kr(n, t)) : At(e) ? e.split(",").includes(t) : Ig(e) ? (e.lastIndex = 0, e.test(t)) : false;
}
function Sl(e, t) {
  wv(e, "a", t);
}
function Vn(e, t) {
  wv(e, "da", t);
}
function wv(e, t, n = jt) {
  const l = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated) return;
      r = r.parent;
    }
    return e();
  });
  if (Jo(t, l, n), n) {
    let r = n.parent;
    for (; r && r.parent; ) Zo(r.parent.vnode) && $0(l, t, n, r), r = r.parent;
  }
}
function $0(e, t, n, l) {
  const r = Jo(t, e, l, true);
  ni(() => {
    ns(l[t], r);
  }, n);
}
function Ei(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function Na(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Jo(e, t, n = jt, l = false) {
  if (n) {
    const r = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...o) => {
      wl();
      const i = Aa(n), u = Rn(t, n, e, o);
      return i(), xl(), u;
    });
    return l ? r.unshift(a) : r.push(a), a;
  }
}
const Jn = (e) => (t, n = jt) => {
  (!_a || e === "sp") && Jo(e, (...l) => t(...l), n);
}, ei = Jn("bm"), ft = Jn("m"), Rr = Jn("bu"), ti = Jn("u"), Ke = Jn("bum"), ni = Jn("um"), L0 = Jn("sp"), B0 = Jn("rtg"), F0 = Jn("rtc");
function O0(e, t = jt) {
  Jo("ec", e, t);
}
const xv = "components", V0 = "directives";
function gs(e, t) {
  return Sv(xv, e, true, t) || e;
}
const D0 = Symbol.for("v-ndc");
function I0(e) {
  return Sv(V0, e);
}
function Sv(e, t, n = true, l = false) {
  const r = nn || jt;
  if (r) {
    const a = r.type;
    if (e === xv) {
      const i = qu(a, false);
      if (i && (i === t || i === yn(t) || i === Wo(yn(t)))) return a;
    }
    const o = fc(r[e] || a[e], t) || fc(r.appContext[e], t);
    return !o && l ? a : o;
  }
}
function fc(e, t) {
  return e && (e[t] || e[yn(t)] || e[Wo(yn(t))]);
}
const xu = (e) => e ? Hv(e) ? ai(e) : xu(e.parent) : null, aa = It(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => xu(e.parent), $root: (e) => xu(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => kv(e), $forceUpdate: (e) => e.f || (e.f = () => {
  ms(e.update);
}), $nextTick: (e) => e.n || (e.n = We.bind(e.proxy)), $watch: (e) => ub.bind(e) }), Ri = (e, t) => e !== mt && !e.__isScriptSetup && st(e, t), z0 = { get({ _: e }, t) {
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
      if (Ri(l, t)) return o[t] = 1, l[t];
      if (r !== mt && st(r, t)) return o[t] = 2, r[t];
      if ((c = e.propsOptions[0]) && st(c, t)) return o[t] = 3, a[t];
      if (n !== mt && st(n, t)) return o[t] = 4, n[t];
      Su && (o[t] = 0);
    }
  }
  const s = aa[t];
  let f, h;
  if (s) return t === "$attrs" && Wt(e.attrs, "get", ""), s(e);
  if ((f = i.__cssModules) && (f = f[t])) return f;
  if (n !== mt && st(n, t)) return o[t] = 4, n[t];
  if (h = u.config.globalProperties, st(h, t)) return h[t];
}, set({ _: e }, t, n) {
  const { data: l, setupState: r, ctx: a } = e;
  return Ri(r, t) ? (r[t] = n, true) : l !== mt && st(l, t) ? (l[t] = n, true) : st(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (a[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: l, appContext: r, propsOptions: a } }, o) {
  let i;
  return !!n[o] || e !== mt && st(e, o) || Ri(t, o) || (i = a[0]) && st(i, o) || st(l, o) || st(aa, o) || st(r.config.globalProperties, o);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : st(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function vc(e) {
  return Ne(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let Su = true;
function N0(e) {
  const t = kv(e), n = e.proxy, l = e.ctx;
  Su = false, t.beforeCreate && mc(t.beforeCreate, e, "bc");
  const { data: r, computed: a, methods: o, watch: i, provide: u, inject: c, created: s, beforeMount: f, mounted: h, beforeUpdate: m, updated: g, activated: w, deactivated: x, beforeDestroy: T, beforeUnmount: p, destroyed: y, unmounted: b, render: C, renderTracked: $, renderTriggered: O, errorCaptured: H, serverPrefetch: L, expose: B, inheritAttrs: N, components: q, directives: E, filters: k } = t;
  if (c && H0(c, l, null), o) for (const W in o) {
    const X = o[W];
    Qe(X) && (l[W] = X.bind(n));
  }
  if (r) {
    const W = r.call(n, n);
    St(W) && (e.data = Fn(W));
  }
  if (Su = true, a) for (const W in a) {
    const X = a[W], ae = Qe(X) ? X.bind(n, n) : Qe(X.get) ? X.get.bind(n, n) : On, pe = !Qe(X) && Qe(X.set) ? X.set.bind(n) : On, Y = v({ get: ae, set: pe });
    Object.defineProperty(l, W, { enumerable: true, configurable: true, get: () => Y.value, set: (_) => Y.value = _ });
  }
  if (i) for (const W in i) Cv(i[W], l, n, W);
  if (u) {
    const W = Qe(u) ? u.call(n) : u;
    Reflect.ownKeys(W).forEach((X) => {
      gn(X, W[X]);
    });
  }
  s && mc(s, e, "c");
  function U(W, X) {
    Ne(X) ? X.forEach((ae) => W(ae.bind(n))) : X && W(X.bind(n));
  }
  if (U(ei, f), U(ft, h), U(Rr, m), U(ti, g), U(Sl, w), U(Vn, x), U(O0, H), U(F0, $), U(B0, O), U(Ke, p), U(ni, b), U(L0, L), Ne(B)) if (B.length) {
    const W = e.exposed || (e.exposed = {});
    B.forEach((X) => {
      Object.defineProperty(W, X, { get: () => n[X], set: (ae) => n[X] = ae });
    });
  } else e.exposed || (e.exposed = {});
  C && e.render === On && (e.render = C), N != null && (e.inheritAttrs = N), q && (e.components = q), E && (e.directives = E), L && pv(e);
}
function H0(e, t, n = On) {
  Ne(e) && (e = Cu(e));
  for (const l in e) {
    const r = e[l];
    let a;
    St(r) ? "default" in r ? a = qt(r.from || l, r.default, true) : a = qt(r.from || l) : a = qt(r), pt(a) ? Object.defineProperty(t, l, { enumerable: true, configurable: true, get: () => a.value, set: (o) => a.value = o }) : t[l] = a;
  }
}
function mc(e, t, n) {
  Rn(Ne(e) ? e.map((l) => l.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Cv(e, t, n, l) {
  let r = l.includes(".") ? Vv(n, l) : () => n[l];
  if (At(e)) {
    const a = t[e];
    Qe(a) && ge(r, a);
  } else if (Qe(e)) ge(r, e.bind(n));
  else if (St(e)) if (Ne(e)) e.forEach((a) => Cv(a, t, n, l));
  else {
    const a = Qe(e.handler) ? e.handler.bind(n) : t[e.handler];
    Qe(a) && ge(r, a, e);
  }
}
function kv(e) {
  const t = e.type, { mixins: n, extends: l } = t, { mixins: r, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, i = a.get(t);
  let u;
  return i ? u = i : !r.length && !n && !l ? u = t : (u = {}, r.length && r.forEach((c) => xo(u, c, o, true)), xo(u, t, o)), St(t) && a.set(t, u), u;
}
function xo(e, t, n, l = false) {
  const { mixins: r, extends: a } = t;
  a && xo(e, a, n, true), r && r.forEach((o) => xo(e, o, n, true));
  for (const o in t) if (!(l && o === "expose")) {
    const i = j0[o] || n && n[o];
    e[o] = i ? i(e[o], t[o]) : t[o];
  }
  return e;
}
const j0 = { data: hc, props: gc, emits: gc, methods: Wr, computed: Wr, beforeCreate: Xt, created: Xt, beforeMount: Xt, mounted: Xt, beforeUpdate: Xt, updated: Xt, beforeDestroy: Xt, beforeUnmount: Xt, destroyed: Xt, unmounted: Xt, activated: Xt, deactivated: Xt, errorCaptured: Xt, serverPrefetch: Xt, components: Wr, directives: Wr, watch: Q0, provide: hc, inject: U0 };
function hc(e, t) {
  return t ? e ? function() {
    return It(Qe(e) ? e.call(this, this) : e, Qe(t) ? t.call(this, this) : t);
  } : t : e;
}
function U0(e, t) {
  return Wr(Cu(e), Cu(t));
}
function Cu(e) {
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
function gc(e, t) {
  return e ? Ne(e) && Ne(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : It(/* @__PURE__ */ Object.create(null), vc(e), vc(t ?? {})) : t;
}
function Q0(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = It(/* @__PURE__ */ Object.create(null), e);
  for (const l in t) n[l] = Xt(e[l], t[l]);
  return n;
}
function Tv() {
  return { app: null, config: { isNativeTag: Vg, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let K0 = 0;
function W0(e, t) {
  return function(l, r = null) {
    Qe(l) || (l = It({}, l)), r != null && !St(r) && (r = null);
    const a = Tv(), o = /* @__PURE__ */ new WeakSet(), i = [];
    let u = false;
    const c = a.app = { _uid: K0++, _component: l, _props: r, _container: null, _context: a, _instance: null, version: Eb, get config() {
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
        return m.appContext = a, h === true ? h = "svg" : h === false && (h = void 0), e(m, s, h), u = true, c._container = s, s.__vue_app__ = c, ai(m.component);
      }
    }, onUnmount(s) {
      i.push(s);
    }, unmount() {
      u && (Rn(i, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
    }, provide(s, f) {
      return a.provides[s] = f, c;
    }, runWithContext(s) {
      const f = gr;
      gr = c;
      try {
        return s();
      } finally {
        gr = f;
      }
    } };
    return c;
  };
}
let gr = null;
function gn(e, t) {
  if (jt) {
    let n = jt.provides;
    const l = jt.parent && jt.parent.provides;
    l === n && (n = jt.provides = Object.create(l)), n[e] = t;
  }
}
function qt(e, t, n = false) {
  const l = jt || nn;
  if (l || gr) {
    const r = gr ? gr._context.provides : l ? l.parent == null ? l.vnode.appContext && l.vnode.appContext.provides : l.parent.provides : void 0;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && Qe(t) ? t.call(l && l.proxy) : t;
  }
}
const qv = {}, Mv = () => Object.create(qv), Ev = (e) => Object.getPrototypeOf(e) === qv;
function Y0(e, t, n, l = false) {
  const r = {}, a = Mv();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Rv(e, t, r, a);
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
  n ? e.props = l ? r : ds(r) : e.type.props ? e.props = r : e.props = a, e.attrs = a;
}
function X0(e, t, n, l) {
  const { props: r, attrs: a, vnode: { patchFlag: o } } = e, i = Xe(r), [u] = e.propsOptions;
  let c = false;
  if ((l || o > 0) && !(o & 16)) {
    if (o & 8) {
      const s = e.vnode.dynamicProps;
      for (let f = 0; f < s.length; f++) {
        let h = s[f];
        if (li(e.emitsOptions, h)) continue;
        const m = t[h];
        if (u) if (st(a, h)) m !== a[h] && (a[h] = m, c = true);
        else {
          const g = yn(h);
          r[g] = ku(u, i, g, m, e, false);
        }
        else m !== a[h] && (a[h] = m, c = true);
      }
    }
  } else {
    Rv(e, t, r, a) && (c = true);
    let s;
    for (const f in i) (!t || !st(t, f) && ((s = Yl(f)) === f || !st(t, s))) && (u ? n && (n[f] !== void 0 || n[s] !== void 0) && (r[f] = ku(u, i, f, void 0, e, true)) : delete r[f]);
    if (a !== i) for (const f in a) (!t || !st(t, f)) && (delete a[f], c = true);
  }
  c && Wn(e.attrs, "set", "");
}
function Rv(e, t, n, l) {
  const [r, a] = e.propsOptions;
  let o = false, i;
  if (t) for (let u in t) {
    if (Jr(u)) continue;
    const c = t[u];
    let s;
    r && st(r, s = yn(u)) ? !a || !a.includes(s) ? n[s] = c : (i || (i = {}))[s] = c : li(e.emitsOptions, u) || (!(u in l) || c !== l[u]) && (l[u] = c, o = true);
  }
  if (a) {
    const u = Xe(n), c = i || mt;
    for (let s = 0; s < a.length; s++) {
      const f = a[s];
      n[f] = ku(r, u, f, c[f], e, !st(c, f));
    }
  }
  return o;
}
function ku(e, t, n, l, r, a) {
  const o = e[n];
  if (o != null) {
    const i = st(o, "default");
    if (i && l === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && Qe(u)) {
        const { propsDefaults: c } = r;
        if (n in c) l = c[n];
        else {
          const s = Aa(r);
          l = c[n] = u.call(null, t), s();
        }
      } else l = u;
      r.ce && r.ce._setProp(n, l);
    }
    o[0] && (a && !i ? l = false : o[1] && (l === "" || l === Yl(n)) && (l = true));
  }
  return l;
}
const G0 = /* @__PURE__ */ new WeakMap();
function Av(e, t, n = false) {
  const l = n ? G0 : t.propsCache, r = l.get(e);
  if (r) return r;
  const a = e.props, o = {}, i = [];
  let u = false;
  if (!Qe(e)) {
    const s = (f) => {
      u = true;
      const [h, m] = Av(f, t, true);
      It(o, h), m && i.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  if (!a && !u) return St(e) && l.set(e, fr), fr;
  if (Ne(a)) for (let s = 0; s < a.length; s++) {
    const f = yn(a[s]);
    bc(f) && (o[f] = mt);
  }
  else if (a) for (const s in a) {
    const f = yn(s);
    if (bc(f)) {
      const h = a[s], m = o[f] = Ne(h) || Qe(h) ? { type: h } : It({}, h), g = m.type;
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
function bc(e) {
  return e[0] !== "$" && !Jr(e);
}
const Pv = (e) => e[0] === "_" || e === "$stable", bs = (e) => Ne(e) ? e.map(Bn) : [Bn(e)], Z0 = (e, t, n) => {
  if (t._n) return t;
  const l = Rt((...r) => bs(t(...r)), n);
  return l._c = false, l;
}, $v = (e, t, n) => {
  const l = e._ctx;
  for (const r in e) {
    if (Pv(r)) continue;
    const a = e[r];
    if (Qe(a)) t[r] = Z0(r, a, l);
    else if (a != null) {
      const o = bs(a);
      t[r] = () => o;
    }
  }
}, Lv = (e, t) => {
  const n = bs(t);
  e.slots.default = () => n;
}, Bv = (e, t, n) => {
  for (const l in t) (n || l !== "_") && (e[l] = t[l]);
}, J0 = (e, t, n) => {
  const l = e.slots = Mv();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Bv(l, t, n), n && Of(l, "_", r, true)) : $v(t, l);
  } else t && Lv(e, t);
}, eb = (e, t, n) => {
  const { vnode: l, slots: r } = e;
  let a = true, o = mt;
  if (l.shapeFlag & 32) {
    const i = t._;
    i ? n && i === 1 ? a = false : Bv(r, t, n) : (a = !t.$stable, $v(t, r)), o = t;
  } else t && (Lv(e, t), o = { default: 1 });
  if (a) for (const i in r) !Pv(i) && o[i] == null && delete r[i];
};
function tb() {
  typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && (Ea().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false);
}
const Ft = gb;
function nb(e) {
  return lb(e);
}
function lb(e, t) {
  tb();
  const n = Ea();
  n.__VUE__ = true;
  const { insert: l, remove: r, patchProp: a, createElement: o, createText: i, createComment: u, setText: c, setElementText: s, parentNode: f, nextSibling: h, setScopeId: m = On, insertStaticContent: g } = e, w = (S, M, I, ee = null, le = null, P = null, te = void 0, se = null, me = !!M.dynamicChildren) => {
    if (S === M) return;
    S && !ml(S, M) && (ee = R(S), _(S, le, P, true), S = null), M.patchFlag === -2 && (me = false, M.dynamicChildren = null);
    const { type: ce, ref: re, shapeFlag: Q } = M;
    switch (ce) {
      case ri:
        x(S, M, I, ee);
        break;
      case Jt:
        T(S, M, I, ee);
        break;
      case Pi:
        S == null && p(M, I, ee, te);
        break;
      case on:
        q(S, M, I, ee, le, P, te, se, me);
        break;
      default:
        Q & 1 ? C(S, M, I, ee, le, P, te, se, me) : Q & 6 ? E(S, M, I, ee, le, P, te, se, me) : (Q & 64 || Q & 128) && ce.process(S, M, I, ee, le, P, te, se, me, ne);
    }
    re != null && le && wo(re, S && S.ref, P, M || S, !M);
  }, x = (S, M, I, ee) => {
    if (S == null) l(M.el = i(M.children), I, ee);
    else {
      const le = M.el = S.el;
      M.children !== S.children && c(le, M.children);
    }
  }, T = (S, M, I, ee) => {
    S == null ? l(M.el = u(M.children || ""), I, ee) : M.el = S.el;
  }, p = (S, M, I, ee) => {
    [S.el, S.anchor] = g(S.children, M, I, ee, S.el, S.anchor);
  }, y = ({ el: S, anchor: M }, I, ee) => {
    let le;
    for (; S && S !== M; ) le = h(S), l(S, I, ee), S = le;
    l(M, I, ee);
  }, b = ({ el: S, anchor: M }) => {
    let I;
    for (; S && S !== M; ) I = h(S), r(S), S = I;
    r(M);
  }, C = (S, M, I, ee, le, P, te, se, me) => {
    M.type === "svg" ? te = "svg" : M.type === "math" && (te = "mathml"), S == null ? $(M, I, ee, le, P, te, se, me) : L(S, M, le, P, te, se, me);
  }, $ = (S, M, I, ee, le, P, te, se) => {
    let me, ce;
    const { props: re, shapeFlag: Q, transition: ie, dirs: we } = S;
    if (me = S.el = o(S.type, P, re && re.is, re), Q & 8 ? s(me, S.children) : Q & 16 && H(S.children, me, null, ee, le, Ai(S, P), te, se), we && Tl(S, null, ee, "created"), O(me, S, S.scopeId, te, ee), re) {
      for (const Te in re) Te !== "value" && !Jr(Te) && a(me, Te, null, re[Te], P, ee);
      "value" in re && a(me, "value", null, re.value, P), (ce = re.onVnodeBeforeMount) && mn(ce, ee, S);
    }
    we && Tl(S, null, ee, "beforeMount");
    const ke = rb(le, ie);
    ke && ie.beforeEnter(me), l(me, M, I), ((ce = re && re.onVnodeMounted) || ke || we) && Ft(() => {
      ce && mn(ce, ee, S), ke && ie.enter(me), we && Tl(S, null, ee, "mounted");
    }, le);
  }, O = (S, M, I, ee, le) => {
    if (I && m(S, I), ee) for (let P = 0; P < ee.length; P++) m(S, ee[P]);
    if (le) {
      let P = le.subTree;
      if (M === P || Co(P.type) && (P.ssContent === M || P.ssFallback === M)) {
        const te = le.vnode;
        O(S, te, te.scopeId, te.slotScopeIds, le.parent);
      }
    }
  }, H = (S, M, I, ee, le, P, te, se, me = 0) => {
    for (let ce = me; ce < S.length; ce++) {
      const re = S[ce] = se ? fl(S[ce]) : Bn(S[ce]);
      w(null, re, M, I, ee, le, P, te, se);
    }
  }, L = (S, M, I, ee, le, P, te) => {
    const se = M.el = S.el;
    let { patchFlag: me, dynamicChildren: ce, dirs: re } = M;
    me |= S.patchFlag & 16;
    const Q = S.props || mt, ie = M.props || mt;
    let we;
    if (I && ql(I, false), (we = ie.onVnodeBeforeUpdate) && mn(we, I, M, S), re && Tl(M, S, I, "beforeUpdate"), I && ql(I, true), (Q.innerHTML && ie.innerHTML == null || Q.textContent && ie.textContent == null) && s(se, ""), ce ? B(S.dynamicChildren, ce, se, I, ee, Ai(M, le), P) : te || X(S, M, se, null, I, ee, Ai(M, le), P, false), me > 0) {
      if (me & 16) N(se, Q, ie, I, le);
      else if (me & 2 && Q.class !== ie.class && a(se, "class", null, ie.class, le), me & 4 && a(se, "style", Q.style, ie.style, le), me & 8) {
        const ke = M.dynamicProps;
        for (let Te = 0; Te < ke.length; Te++) {
          const Me = ke[Te], He = Q[Me], Ve = ie[Me];
          (Ve !== He || Me === "value") && a(se, Me, He, Ve, le, I);
        }
      }
      me & 1 && S.children !== M.children && s(se, M.children);
    } else !te && ce == null && N(se, Q, ie, I, le);
    ((we = ie.onVnodeUpdated) || re) && Ft(() => {
      we && mn(we, I, M, S), re && Tl(M, S, I, "updated");
    }, ee);
  }, B = (S, M, I, ee, le, P, te) => {
    for (let se = 0; se < M.length; se++) {
      const me = S[se], ce = M[se], re = me.el && (me.type === on || !ml(me, ce) || me.shapeFlag & 70) ? f(me.el) : I;
      w(me, ce, re, null, ee, le, P, te, true);
    }
  }, N = (S, M, I, ee, le) => {
    if (M !== I) {
      if (M !== mt) for (const P in M) !Jr(P) && !(P in I) && a(S, P, M[P], null, le, ee);
      for (const P in I) {
        if (Jr(P)) continue;
        const te = I[P], se = M[P];
        te !== se && P !== "value" && a(S, P, se, te, le, ee);
      }
      "value" in I && a(S, "value", M.value, I.value, le);
    }
  }, q = (S, M, I, ee, le, P, te, se, me) => {
    const ce = M.el = S ? S.el : i(""), re = M.anchor = S ? S.anchor : i("");
    let { patchFlag: Q, dynamicChildren: ie, slotScopeIds: we } = M;
    we && (se = se ? se.concat(we) : we), S == null ? (l(ce, I, ee), l(re, I, ee), H(M.children || [], I, re, le, P, te, se, me)) : Q > 0 && Q & 64 && ie && S.dynamicChildren ? (B(S.dynamicChildren, ie, I, le, P, te, se), (M.key != null || le && M === le.subTree) && ys(S, M, true)) : X(S, M, I, re, le, P, te, se, me);
  }, E = (S, M, I, ee, le, P, te, se, me) => {
    M.slotScopeIds = se, S == null ? M.shapeFlag & 512 ? le.ctx.activate(M, I, ee, te, me) : k(M, I, ee, le, P, te, me) : j(S, M, me);
  }, k = (S, M, I, ee, le, P, te) => {
    const se = S.component = Sb(S, ee, le);
    if (Zo(S) && (se.ctx.renderer = ne), Cb(se, false, te), se.asyncDep) {
      if (le && le.registerDep(se, U, te), !S.el) {
        const me = se.subTree = Je(Jt);
        T(null, me, M, I);
      }
    } else U(se, S, M, I, le, P, te);
  }, j = (S, M, I) => {
    const ee = M.component = S.component;
    if (mb(S, M, I)) if (ee.asyncDep && !ee.asyncResolved) {
      W(ee, M, I);
      return;
    } else ee.next = M, ee.update();
    else M.el = S.el, ee.vnode = M;
  }, U = (S, M, I, ee, le, P, te) => {
    const se = () => {
      if (S.isMounted) {
        let { next: Q, bu: ie, u: we, parent: ke, vnode: Te } = S;
        {
          const ye = Fv(S);
          if (ye) {
            Q && (Q.el = Te.el, W(S, Q, te)), ye.asyncDep.then(() => {
              S.isUnmounted || se();
            });
            return;
          }
        }
        let Me = Q, He;
        ql(S, false), Q ? (Q.el = Te.el, W(S, Q, te)) : Q = Te, ie && ea(ie), (He = Q.props && Q.props.onVnodeBeforeUpdate) && mn(He, ke, Q, Te), ql(S, true);
        const Ve = yc(S), ue = S.subTree;
        S.subTree = Ve, w(ue, Ve, f(ue.el), R(ue), S, le, P), Q.el = Ve.el, Me === null && hb(S, Ve.el), we && Ft(we, le), (He = Q.props && Q.props.onVnodeUpdated) && Ft(() => mn(He, ke, Q, Te), le);
      } else {
        let Q;
        const { el: ie, props: we } = M, { bm: ke, m: Te, parent: Me, root: He, type: Ve } = S, ue = hr(M);
        ql(S, false), ke && ea(ke), !ue && (Q = we && we.onVnodeBeforeMount) && mn(Q, Me, M), ql(S, true);
        {
          He.ce && He.ce._injectChildStyle(Ve);
          const ye = S.subTree = yc(S);
          w(null, ye, I, ee, S, le, P), M.el = ye.el;
        }
        if (Te && Ft(Te, le), !ue && (Q = we && we.onVnodeMounted)) {
          const ye = M;
          Ft(() => mn(Q, Me, ye), le);
        }
        (M.shapeFlag & 256 || Me && hr(Me.vnode) && Me.vnode.shapeFlag & 256) && S.a && Ft(S.a, le), S.isMounted = true, M = I = ee = null;
      }
    };
    S.scope.on();
    const me = S.effect = new Nf(se);
    S.scope.off();
    const ce = S.update = me.run.bind(me), re = S.job = me.runIfDirty.bind(me);
    re.i = S, re.id = S.uid, me.scheduler = () => ms(re), ql(S, true), ce();
  }, W = (S, M, I) => {
    M.component = S;
    const ee = S.vnode.props;
    S.vnode = M, S.next = null, X0(S, M.props, ee, I), eb(S, M.children, I), wl(), ic(S), xl();
  }, X = (S, M, I, ee, le, P, te, se, me = false) => {
    const ce = S && S.children, re = S ? S.shapeFlag : 0, Q = M.children, { patchFlag: ie, shapeFlag: we } = M;
    if (ie > 0) {
      if (ie & 128) {
        pe(ce, Q, I, ee, le, P, te, se, me);
        return;
      } else if (ie & 256) {
        ae(ce, Q, I, ee, le, P, te, se, me);
        return;
      }
    }
    we & 8 ? (re & 16 && A(ce, le, P), Q !== ce && s(I, Q)) : re & 16 ? we & 16 ? pe(ce, Q, I, ee, le, P, te, se, me) : A(ce, le, P, true) : (re & 8 && s(I, ""), we & 16 && H(Q, I, ee, le, P, te, se, me));
  }, ae = (S, M, I, ee, le, P, te, se, me) => {
    S = S || fr, M = M || fr;
    const ce = S.length, re = M.length, Q = Math.min(ce, re);
    let ie;
    for (ie = 0; ie < Q; ie++) {
      const we = M[ie] = me ? fl(M[ie]) : Bn(M[ie]);
      w(S[ie], we, I, null, le, P, te, se, me);
    }
    ce > re ? A(S, le, P, true, false, Q) : H(M, I, ee, le, P, te, se, me, Q);
  }, pe = (S, M, I, ee, le, P, te, se, me) => {
    let ce = 0;
    const re = M.length;
    let Q = S.length - 1, ie = re - 1;
    for (; ce <= Q && ce <= ie; ) {
      const we = S[ce], ke = M[ce] = me ? fl(M[ce]) : Bn(M[ce]);
      if (ml(we, ke)) w(we, ke, I, null, le, P, te, se, me);
      else break;
      ce++;
    }
    for (; ce <= Q && ce <= ie; ) {
      const we = S[Q], ke = M[ie] = me ? fl(M[ie]) : Bn(M[ie]);
      if (ml(we, ke)) w(we, ke, I, null, le, P, te, se, me);
      else break;
      Q--, ie--;
    }
    if (ce > Q) {
      if (ce <= ie) {
        const we = ie + 1, ke = we < re ? M[we].el : ee;
        for (; ce <= ie; ) w(null, M[ce] = me ? fl(M[ce]) : Bn(M[ce]), I, ke, le, P, te, se, me), ce++;
      }
    } else if (ce > ie) for (; ce <= Q; ) _(S[ce], le, P, true), ce++;
    else {
      const we = ce, ke = ce, Te = /* @__PURE__ */ new Map();
      for (ce = ke; ce <= ie; ce++) {
        const Ce = M[ce] = me ? fl(M[ce]) : Bn(M[ce]);
        Ce.key != null && Te.set(Ce.key, ce);
      }
      let Me, He = 0;
      const Ve = ie - ke + 1;
      let ue = false, ye = 0;
      const oe = new Array(Ve);
      for (ce = 0; ce < Ve; ce++) oe[ce] = 0;
      for (ce = we; ce <= Q; ce++) {
        const Ce = S[ce];
        if (He >= Ve) {
          _(Ce, le, P, true);
          continue;
        }
        let Oe;
        if (Ce.key != null) Oe = Te.get(Ce.key);
        else for (Me = ke; Me <= ie; Me++) if (oe[Me - ke] === 0 && ml(Ce, M[Me])) {
          Oe = Me;
          break;
        }
        Oe === void 0 ? _(Ce, le, P, true) : (oe[Oe - ke] = ce + 1, Oe >= ye ? ye = Oe : ue = true, w(Ce, M[Oe], I, null, le, P, te, se, me), He++);
      }
      const _e2 = ue ? ab(oe) : fr;
      for (Me = _e2.length - 1, ce = Ve - 1; ce >= 0; ce--) {
        const Ce = ke + ce, Oe = M[Ce], Re = Ce + 1 < re ? M[Ce + 1].el : ee;
        oe[ce] === 0 ? w(null, Oe, I, Re, le, P, te, se, me) : ue && (Me < 0 || ce !== _e2[Me] ? Y(Oe, I, Re, 2) : Me--);
      }
    }
  }, Y = (S, M, I, ee, le = null) => {
    const { el: P, type: te, transition: se, children: me, shapeFlag: ce } = S;
    if (ce & 6) {
      Y(S.component.subTree, M, I, ee);
      return;
    }
    if (ce & 128) {
      S.suspense.move(M, I, ee);
      return;
    }
    if (ce & 64) {
      te.move(S, M, I, ne);
      return;
    }
    if (te === on) {
      l(P, M, I);
      for (let Q = 0; Q < me.length; Q++) Y(me[Q], M, I, ee);
      l(S.anchor, M, I);
      return;
    }
    if (te === Pi) {
      y(S, M, I);
      return;
    }
    if (ee !== 2 && ce & 1 && se) if (ee === 0) se.beforeEnter(P), l(P, M, I), Ft(() => se.enter(P), le);
    else {
      const { leave: Q, delayLeave: ie, afterLeave: we } = se, ke = () => l(P, M, I), Te = () => {
        Q(P, () => {
          ke(), we && we();
        });
      };
      ie ? ie(P, ke, Te) : Te();
    }
    else l(P, M, I);
  }, _ = (S, M, I, ee = false, le = false) => {
    const { type: P, props: te, ref: se, children: me, dynamicChildren: ce, shapeFlag: re, patchFlag: Q, dirs: ie, cacheIndex: we } = S;
    if (Q === -2 && (le = false), se != null && wo(se, null, I, S, true), we != null && (M.renderCache[we] = void 0), re & 256) {
      M.ctx.deactivate(S);
      return;
    }
    const ke = re & 1 && ie, Te = !hr(S);
    let Me;
    if (Te && (Me = te && te.onVnodeBeforeUnmount) && mn(Me, M, S), re & 6) fe(S.component, I, ee);
    else {
      if (re & 128) {
        S.suspense.unmount(I, ee);
        return;
      }
      ke && Tl(S, null, M, "beforeUnmount"), re & 64 ? S.type.remove(S, M, I, ne, ee) : ce && !ce.hasOnce && (P !== on || Q > 0 && Q & 64) ? A(ce, M, I, false, true) : (P === on && Q & 384 || !le && re & 16) && A(me, M, I), ee && D(S);
    }
    (Te && (Me = te && te.onVnodeUnmounted) || ke) && Ft(() => {
      Me && mn(Me, M, S), ke && Tl(S, null, M, "unmounted");
    }, I);
  }, D = (S) => {
    const { type: M, el: I, anchor: ee, transition: le } = S;
    if (M === on) {
      F(I, ee);
      return;
    }
    if (M === Pi) {
      b(S);
      return;
    }
    const P = () => {
      r(I), le && !le.persisted && le.afterLeave && le.afterLeave();
    };
    if (S.shapeFlag & 1 && le && !le.persisted) {
      const { leave: te, delayLeave: se } = le, me = () => te(I, P);
      se ? se(S.el, P, me) : me();
    } else P();
  }, F = (S, M) => {
    let I;
    for (; S !== M; ) I = h(S), r(S), S = I;
    r(M);
  }, fe = (S, M, I) => {
    const { bum: ee, scope: le, job: P, subTree: te, um: se, m: me, a: ce } = S;
    So(me), So(ce), ee && ea(ee), le.stop(), P && (P.flags |= 8, _(te, S, M, I)), se && Ft(se, M), Ft(() => {
      S.isUnmounted = true;
    }, M), M && M.pendingBranch && !M.isUnmounted && S.asyncDep && !S.asyncResolved && S.suspenseId === M.pendingId && (M.deps--, M.deps === 0 && M.resolve());
  }, A = (S, M, I, ee = false, le = false, P = 0) => {
    for (let te = P; te < S.length; te++) _(S[te], M, I, ee, le);
  }, R = (S) => {
    if (S.shapeFlag & 6) return R(S.component.subTree);
    if (S.shapeFlag & 128) return S.suspense.next();
    const M = h(S.anchor || S.el), I = M && M[cv];
    return I ? h(I) : M;
  };
  let G = false;
  const V = (S, M, I) => {
    S == null ? M._vnode && _(M._vnode, null, null, true) : w(M._vnode || null, S, M, null, null, null, I), M._vnode = S, G || (G = true, ic(), iv(), G = false);
  }, ne = { p: w, um: _, m: Y, r: D, mt: k, mc: H, pc: X, pbc: B, n: R, o: e };
  return { render: V, hydrate: void 0, createApp: W0(V) };
}
function Ai({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ql({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function rb(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ys(e, t, n = false) {
  const l = e.children, r = t.children;
  if (Ne(l) && Ne(r)) for (let a = 0; a < l.length; a++) {
    const o = l[a];
    let i = r[a];
    i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = r[a] = fl(r[a]), i.el = o.el), !n && i.patchFlag !== -2 && ys(o, i)), i.type === ri && (i.el = o.el);
  }
}
function ab(e) {
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
function Fv(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Fv(t);
}
function So(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const ob = Symbol.for("v-scx"), ib = () => qt(ob);
function ge(e, t, n) {
  return Ov(e, t, n);
}
function Ov(e, t, n = mt) {
  const { immediate: l, deep: r, flush: a, once: o } = n, i = It({}, n), u = t && l || !t && a !== "post";
  let c;
  if (_a) {
    if (a === "sync") {
      const m = ib();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!u) {
      const m = () => {
      };
      return m.stop = On, m.resume = On, m.pause = On, m;
    }
  }
  const s = jt;
  i.call = (m, g, w) => Rn(m, s, g, w);
  let f = false;
  a === "post" ? i.scheduler = (m) => {
    Ft(m, s && s.suspense);
  } : a !== "sync" && (f = true, i.scheduler = (m, g) => {
    g ? m() : ms(m);
  }), i.augmentJob = (m) => {
    t && (m.flags |= 4), f && (m.flags |= 2, s && (m.id = s.uid, m.i = s));
  };
  const h = C0(e, t, i);
  return _a && (c ? c.push(h) : u && h()), h;
}
function ub(e, t, n) {
  const l = this.proxy, r = At(e) ? e.includes(".") ? Vv(l, e) : () => l[e] : e.bind(l, l);
  let a;
  Qe(t) ? a = t : (a = t.handler, n = t);
  const o = Aa(this), i = Ov(r, a.bind(l), n);
  return o(), i;
}
function Vv(e, t) {
  const n = t.split(".");
  return () => {
    let l = e;
    for (let r = 0; r < n.length && l; r++) l = l[n[r]];
    return l;
  };
}
const sb = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${yn(t)}Modifiers`] || e[`${Yl(t)}Modifiers`];
function db(e, t, ...n) {
  if (e.isUnmounted) return;
  const l = e.vnode.props || mt;
  let r = n;
  const a = t.startsWith("update:"), o = a && sb(l, t.slice(7));
  o && (o.trim && (r = n.map((s) => At(s) ? s.trim() : s)), o.number && (r = n.map(jg)));
  let i, u = l[i = Si(t)] || l[i = Si(yn(t))];
  !u && a && (u = l[i = Si(Yl(t))]), u && Rn(u, e, 6, r);
  const c = l[i + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[i]) return;
    e.emitted[i] = true, Rn(c, e, 6, r);
  }
}
function Dv(e, t, n = false) {
  const l = t.emitsCache, r = l.get(e);
  if (r !== void 0) return r;
  const a = e.emits;
  let o = {}, i = false;
  if (!Qe(e)) {
    const u = (c) => {
      const s = Dv(c, t, true);
      s && (i = true, It(o, s));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !a && !i ? (St(e) && l.set(e, null), null) : (Ne(a) ? a.forEach((u) => o[u] = null) : It(o, a), St(e) && l.set(e, o), o);
}
function li(e, t) {
  return !e || !Qo(t) ? false : (t = t.slice(2).replace(/Once$/, ""), st(e, t[0].toLowerCase() + t.slice(1)) || st(e, Yl(t)) || st(e, t));
}
function yc(e) {
  const { type: t, vnode: n, proxy: l, withProxy: r, propsOptions: [a], slots: o, attrs: i, emit: u, render: c, renderCache: s, props: f, data: h, setupState: m, ctx: g, inheritAttrs: w } = e, x = _o(e);
  let T, p;
  try {
    if (n.shapeFlag & 4) {
      const b = r || l, C = b;
      T = Bn(c.call(C, b, s, f, m, h, g)), p = i;
    } else {
      const b = t;
      T = Bn(b.length > 1 ? b(f, { attrs: i, slots: o, emit: u }) : b(f, null)), p = t.props ? i : fb(i);
    }
  } catch (b) {
    oa.length = 0, Go(b, e, 1), T = Je(Jt);
  }
  let y = T;
  if (p && w !== false) {
    const b = Object.keys(p), { shapeFlag: C } = y;
    b.length && C & 7 && (a && b.some(ts) && (p = vb(p, a)), y = Gn(y, p, false, true));
  }
  return n.dirs && (y = Gn(y, null, false, true), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && pl(y, n.transition), T = y, _o(x), T;
}
const fb = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || Qo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, vb = (e, t) => {
  const n = {};
  for (const l in e) (!ts(l) || !(l.slice(9) in t)) && (n[l] = e[l]);
  return n;
};
function mb(e, t, n) {
  const { props: l, children: r, component: a } = e, { props: o, children: i, patchFlag: u } = t, c = a.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && u >= 0) {
    if (u & 1024) return true;
    if (u & 16) return l ? pc(l, o, c) : !!o;
    if (u & 8) {
      const s = t.dynamicProps;
      for (let f = 0; f < s.length; f++) {
        const h = s[f];
        if (o[h] !== l[h] && !li(c, h)) return true;
      }
    }
  } else return (r || i) && (!i || !i.$stable) ? true : l === o ? false : l ? o ? pc(l, o, c) : true : !!o;
  return false;
}
function pc(e, t, n) {
  const l = Object.keys(t);
  if (l.length !== Object.keys(e).length) return true;
  for (let r = 0; r < l.length; r++) {
    const a = l[r];
    if (t[a] !== e[a] && !li(n, a)) return true;
  }
  return false;
}
function hb({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const l = t.subTree;
    if (l.suspense && l.suspense.activeBranch === e && (l.el = e.el), l === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const Co = (e) => e.__isSuspense;
function gb(e, t) {
  t && t.pendingBranch ? Ne(e) ? t.effects.push(...e) : t.effects.push(e) : q0(e);
}
const on = Symbol.for("v-fgt"), ri = Symbol.for("v-txt"), Jt = Symbol.for("v-cmt"), Pi = Symbol.for("v-stc"), oa = [];
let sn = null;
function Xn(e = false) {
  oa.push(sn = e ? null : []);
}
function bb() {
  oa.pop(), sn = oa[oa.length - 1] || null;
}
let ya = 1;
function _c(e, t = false) {
  ya += e, e < 0 && sn && t && (sn.hasOnce = true);
}
function Iv(e) {
  return e.dynamicChildren = ya > 0 ? sn || fr : null, bb(), ya > 0 && sn && sn.push(e), e;
}
function zv(e, t, n, l, r, a) {
  return Iv(Bt(e, t, n, l, r, a, true));
}
function Bl(e, t, n, l, r) {
  return Iv(Je(e, t, n, l, r, true));
}
function pa(e) {
  return e ? e.__v_isVNode === true : false;
}
function ml(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Nv = ({ key: e }) => e ?? null, oo = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? At(e) || pt(e) || Qe(e) ? { i: nn, r: e, k: t, f: !!n } : e : null);
function Bt(e, t = null, n = null, l = 0, r = null, a = e === on ? 0 : 1, o = false, i = false) {
  const u = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && Nv(t), ref: t && oo(t), scopeId: sv, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: a, patchFlag: l, dynamicProps: r, dynamicChildren: null, appContext: null, ctx: nn };
  return i ? (ps(u, n), a & 128 && e.normalize(u)) : n && (u.shapeFlag |= At(n) ? 8 : 16), ya > 0 && !o && sn && (u.patchFlag > 0 || a & 6) && u.patchFlag !== 32 && sn.push(u), u;
}
const Je = yb;
function yb(e, t = null, n = null, l = 0, r = null, a = false) {
  if ((!e || e === D0) && (e = Jt), pa(e)) {
    const i = Gn(e, t, true);
    return n && ps(i, n), ya > 0 && !a && sn && (i.shapeFlag & 6 ? sn[sn.indexOf(e)] = i : sn.push(i)), i.patchFlag = -2, i;
  }
  if (Mb(e) && (e = e.__vccOpts), t) {
    t = pb(t);
    let { class: i, style: u } = t;
    i && !At(i) && (t.class = rs(i)), St(u) && (vs(u) && !Ne(u) && (u = It({}, u)), t.style = Yo(u));
  }
  const o = At(e) ? 1 : Co(e) ? 128 : dv(e) ? 64 : St(e) ? 4 : Qe(e) ? 2 : 0;
  return Bt(e, t, n, l, r, o, a, true);
}
function pb(e) {
  return e ? vs(e) || Ev(e) ? It({}, e) : e : null;
}
function Gn(e, t, n = false, l = false) {
  const { props: r, ref: a, patchFlag: o, children: i, transition: u } = e, c = t ? _b(r || {}, t) : r, s = { __v_isVNode: true, __v_skip: true, type: e.type, props: c, key: c && Nv(c), ref: t && t.ref ? n && a ? Ne(a) ? a.concat(oo(t)) : [a, oo(t)] : oo(t) : a, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: i, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== on ? o === -1 ? 16 : o | 16 : o, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: u, component: e.component, suspense: e.suspense, ssContent: e.ssContent && Gn(e.ssContent), ssFallback: e.ssFallback && Gn(e.ssFallback), el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return u && l && pl(s, u.clone(s)), s;
}
function Fl(e = " ", t = 0) {
  return Je(ri, null, e, t);
}
function wc(e = "", t = false) {
  return t ? (Xn(), Bl(Jt, null, e)) : Je(Jt, null, e);
}
function Bn(e) {
  return e == null || typeof e == "boolean" ? Je(Jt) : Ne(e) ? Je(on, null, e.slice()) : pa(e) ? fl(e) : Je(ri, null, String(e));
}
function fl(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Gn(e);
}
function ps(e, t) {
  let n = 0;
  const { shapeFlag: l } = e;
  if (t == null) t = null;
  else if (Ne(t)) n = 16;
  else if (typeof t == "object") if (l & 65) {
    const r = t.default;
    r && (r._c && (r._d = false), ps(e, r()), r._c && (r._d = true));
    return;
  } else {
    n = 32;
    const r = t._;
    !r && !Ev(t) ? t._ctx = nn : r === 3 && nn && (nn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else Qe(t) ? (t = { default: t, _ctx: nn }, n = 32) : (t = String(t), l & 64 ? (n = 16, t = [Fl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function _b(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const l = e[n];
    for (const r in l) if (r === "class") t.class !== l.class && (t.class = rs([t.class, l.class]));
    else if (r === "style") t.style = Yo([t.style, l.style]);
    else if (Qo(r)) {
      const a = t[r], o = l[r];
      o && a !== o && !(Ne(a) && a.includes(o)) && (t[r] = a ? [].concat(a, o) : o);
    } else r !== "" && (t[r] = l[r]);
  }
  return t;
}
function mn(e, t, n, l = null) {
  Rn(e, t, 7, [n, l]);
}
const wb = Tv();
let xb = 0;
function Sb(e, t, n) {
  const l = e.type, r = (t ? t.appContext : e.appContext) || wb, a = { uid: xb++, vnode: e, type: l, parent: t, appContext: r, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new Zg(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(r.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: Av(l, r), emitsOptions: Dv(l, r), emit: null, emitted: null, propsDefaults: mt, inheritAttrs: l.inheritAttrs, ctx: mt, data: mt, props: mt, attrs: mt, slots: mt, refs: mt, setupState: mt, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = db.bind(null, a), e.ce && e.ce(a), a;
}
let jt = null;
const xe = () => jt || nn;
let ko, Tu;
{
  const e = Ea(), t = (n, l) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(l), (a) => {
      r.length > 1 ? r.forEach((o) => o(a)) : r[0](a);
    };
  };
  ko = t("__VUE_INSTANCE_SETTERS__", (n) => jt = n), Tu = t("__VUE_SSR_SETTERS__", (n) => _a = n);
}
const Aa = (e) => {
  const t = jt;
  return ko(e), e.scope.on(), () => {
    e.scope.off(), ko(t);
  };
}, xc = () => {
  jt && jt.scope.off(), ko(null);
};
function Hv(e) {
  return e.vnode.shapeFlag & 4;
}
let _a = false;
function Cb(e, t = false, n = false) {
  t && Tu(t);
  const { props: l, children: r } = e.vnode, a = Hv(e);
  Y0(e, l, a, t), J0(e, r, n);
  const o = a ? kb(e, t) : void 0;
  return t && Tu(false), o;
}
function kb(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, z0);
  const { setup: l } = n;
  if (l) {
    wl();
    const r = e.setupContext = l.length > 1 ? qb(e) : null, a = Aa(e), o = Ra(l, e, 0, [e.props, r]), i = Lf(o);
    if (xl(), a(), (i || e.sp) && !hr(e) && pv(e), i) {
      if (o.then(xc, xc), t) return o.then((u) => {
        Sc(e, u);
      }).catch((u) => {
        Go(u, e, 0);
      });
      e.asyncDep = o;
    } else Sc(e, o);
  } else jv(e);
}
function Sc(e, t, n) {
  Qe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : St(t) && (e.setupState = rv(t)), jv(e);
}
function jv(e, t, n) {
  const l = e.type;
  e.render || (e.render = l.render || On);
  {
    const r = Aa(e);
    wl();
    try {
      N0(e);
    } finally {
      xl(), r();
    }
  }
}
const Tb = { get(e, t) {
  return Wt(e, "get", ""), e[t];
} };
function qb(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, Tb), slots: e.slots, emit: e.emit, expose: t };
}
function ai(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(rv(Xo(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in aa) return aa[n](e);
  }, has(t, n) {
    return n in t || n in aa;
  } })) : e.proxy;
}
function qu(e, t = true) {
  return Qe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Mb(e) {
  return Qe(e) && "__vccOpts" in e;
}
const v = (e, t) => x0(e, t, _a);
function d(e, t, n) {
  const l = arguments.length;
  return l === 2 ? St(t) && !Ne(t) ? pa(t) ? Je(e, null, [t]) : Je(e, t) : Je(e, null, t) : (l > 3 ? n = Array.prototype.slice.call(arguments, 2) : l === 3 && pa(n) && (n = [n]), Je(e, t, n));
}
const Eb = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Mu;
const Cc = typeof window < "u" && window.trustedTypes;
if (Cc) try {
  Mu = Cc.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const Uv = Mu ? (e) => Mu.createHTML(e) : (e) => e, Rb = "http://www.w3.org/2000/svg", Ab = "http://www.w3.org/1998/Math/MathML", Kn = typeof document < "u" ? document : null, kc = Kn && Kn.createElement("template"), Pb = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, l) => {
  const r = t === "svg" ? Kn.createElementNS(Rb, e) : t === "mathml" ? Kn.createElementNS(Ab, e) : n ? Kn.createElement(e, { is: n }) : Kn.createElement(e);
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
    kc.innerHTML = Uv(l === "svg" ? `<svg>${e}</svg>` : l === "mathml" ? `<math>${e}</math>` : e);
    const i = kc.content;
    if (l === "svg" || l === "mathml") {
      const u = i.firstChild;
      for (; u.firstChild; ) i.appendChild(u.firstChild);
      i.removeChild(u);
    }
    t.insertBefore(i, n);
  }
  return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, ll = "transition", Or = "animation", Sr = Symbol("_vtc"), Qv = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, Kv = It({}, hv, Qv), $b = (e) => (e.displayName = "Transition", e.props = Kv, e), Ot = $b((e, { slots: t }) => d(A0, Wv(e), t)), Ml = (e, t = []) => {
  Ne(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Tc = (e) => e ? Ne(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function Wv(e) {
  const t = {};
  for (const q in e) q in Qv || (t[q] = e[q]);
  if (e.css === false) return t;
  const { name: n = "v", type: l, duration: r, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: i = `${n}-enter-to`, appearFromClass: u = a, appearActiveClass: c = o, appearToClass: s = i, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: h = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, g = Lb(r), w = g && g[0], x = g && g[1], { onBeforeEnter: T, onEnter: p, onEnterCancelled: y, onLeave: b, onLeaveCancelled: C, onBeforeAppear: $ = T, onAppear: O = p, onAppearCancelled: H = y } = t, L = (q, E, k, j) => {
    q._enterCancelled = j, ul(q, E ? s : i), ul(q, E ? c : o), k && k();
  }, B = (q, E) => {
    q._isLeaving = false, ul(q, f), ul(q, m), ul(q, h), E && E();
  }, N = (q) => (E, k) => {
    const j = q ? O : p, U = () => L(E, q, k);
    Ml(j, [E, U]), qc(() => {
      ul(E, q ? u : a), $n(E, q ? s : i), Tc(j) || Mc(E, l, w, U);
    });
  };
  return It(t, { onBeforeEnter(q) {
    Ml(T, [q]), $n(q, a), $n(q, o);
  }, onBeforeAppear(q) {
    Ml($, [q]), $n(q, u), $n(q, c);
  }, onEnter: N(false), onAppear: N(true), onLeave(q, E) {
    q._isLeaving = true;
    const k = () => B(q, E);
    $n(q, f), q._enterCancelled ? ($n(q, h), Eu()) : (Eu(), $n(q, h)), qc(() => {
      q._isLeaving && (ul(q, f), $n(q, m), Tc(b) || Mc(q, l, x, k));
    }), Ml(b, [q, k]);
  }, onEnterCancelled(q) {
    L(q, false, void 0, true), Ml(y, [q]);
  }, onAppearCancelled(q) {
    L(q, true, void 0, true), Ml(H, [q]);
  }, onLeaveCancelled(q) {
    B(q), Ml(C, [q]);
  } });
}
function Lb(e) {
  if (e == null) return null;
  if (St(e)) return [$i(e.enter), $i(e.leave)];
  {
    const t = $i(e);
    return [t, t];
  }
}
function $i(e) {
  return Ug(e);
}
function $n(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Sr] || (e[Sr] = /* @__PURE__ */ new Set())).add(t);
}
function ul(e, t) {
  t.split(/\s+/).forEach((l) => l && e.classList.remove(l));
  const n = e[Sr];
  n && (n.delete(t), n.size || (e[Sr] = void 0));
}
function qc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Bb = 0;
function Mc(e, t, n, l) {
  const r = e._endId = ++Bb, a = () => {
    r === e._endId && l();
  };
  if (n != null) return setTimeout(a, n);
  const { type: o, timeout: i, propCount: u } = Yv(e, t);
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
function Yv(e, t) {
  const n = window.getComputedStyle(e), l = (g) => (n[g] || "").split(", "), r = l(`${ll}Delay`), a = l(`${ll}Duration`), o = Ec(r, a), i = l(`${Or}Delay`), u = l(`${Or}Duration`), c = Ec(i, u);
  let s = null, f = 0, h = 0;
  t === ll ? o > 0 && (s = ll, f = o, h = a.length) : t === Or ? c > 0 && (s = Or, f = c, h = u.length) : (f = Math.max(o, c), s = f > 0 ? o > c ? ll : Or : null, h = s ? s === ll ? a.length : u.length : 0);
  const m = s === ll && /\b(transform|all)(,|$)/.test(l(`${ll}Property`).toString());
  return { type: s, timeout: f, propCount: h, hasTransform: m };
}
function Ec(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, l) => Rc(n) + Rc(e[l])));
}
function Rc(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Eu() {
  return document.body.offsetHeight;
}
function Fb(e, t, n) {
  const l = e[Sr];
  l && (t = (t ? [t, ...l] : [...l]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const To = Symbol("_vod"), Xv = Symbol("_vsh"), Gv = { beforeMount(e, { value: t }, { transition: n }) {
  e[To] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Vr(e, t);
}, mounted(e, { value: t }, { transition: n }) {
  n && t && n.enter(e);
}, updated(e, { value: t, oldValue: n }, { transition: l }) {
  !t != !n && (l ? t ? (l.beforeEnter(e), Vr(e, true), l.enter(e)) : l.leave(e, () => {
    Vr(e, false);
  }) : Vr(e, t));
}, beforeUnmount(e, { value: t }) {
  Vr(e, t);
} };
function Vr(e, t) {
  e.style.display = t ? e[To] : "none", e[Xv] = !t;
}
const Ob = Symbol(""), Vb = /(^|;)\s*display\s*:/;
function Db(e, t, n) {
  const l = e.style, r = At(n);
  let a = false;
  if (n && !r) {
    if (t) if (At(t)) for (const o of t.split(";")) {
      const i = o.slice(0, o.indexOf(":")).trim();
      n[i] == null && io(l, i, "");
    }
    else for (const o in t) n[o] == null && io(l, o, "");
    for (const o in n) o === "display" && (a = true), io(l, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = l[Ob];
      o && (n += ";" + o), l.cssText = n, a = Vb.test(n);
    }
  } else t && e.removeAttribute("style");
  To in e && (e[To] = a ? l.display : "", e[Xv] && (l.display = "none"));
}
const Ac = /\s*!important$/;
function io(e, t, n) {
  if (Ne(n)) n.forEach((l) => io(e, t, l));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const l = Ib(e, t);
    Ac.test(n) ? e.setProperty(Yl(l), n.replace(Ac, ""), "important") : e[l] = n;
  }
}
const Pc = ["Webkit", "Moz", "ms"], Li = {};
function Ib(e, t) {
  const n = Li[t];
  if (n) return n;
  let l = yn(t);
  if (l !== "filter" && l in e) return Li[t] = l;
  l = Wo(l);
  for (let r = 0; r < Pc.length; r++) {
    const a = Pc[r] + l;
    if (a in e) return Li[t] = a;
  }
  return t;
}
const $c = "http://www.w3.org/1999/xlink";
function Lc(e, t, n, l, r, a = Gg(t)) {
  l && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS($c, t.slice(6, t.length)) : e.setAttributeNS($c, t, n) : n == null || a && !Vf(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _l(n) ? String(n) : n);
}
function Bc(e, t, n, l, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Uv(n) : n);
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
    i === "boolean" ? n = Vf(n) : n == null && i === "string" ? (n = "", o = true) : i === "number" && (n = 0, o = true);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function zb(e, t, n, l) {
  e.addEventListener(t, n, l);
}
function Nb(e, t, n, l) {
  e.removeEventListener(t, n, l);
}
const Fc = Symbol("_vei");
function Hb(e, t, n, l, r = null) {
  const a = e[Fc] || (e[Fc] = {}), o = a[t];
  if (l && o) o.value = l;
  else {
    const [i, u] = jb(t);
    if (l) {
      const c = a[t] = Kb(l, r);
      zb(e, i, c, u);
    } else o && (Nb(e, i, o, u), a[t] = void 0);
  }
}
const Oc = /(?:Once|Passive|Capture)$/;
function jb(e) {
  let t;
  if (Oc.test(e)) {
    t = {};
    let l;
    for (; l = e.match(Oc); ) e = e.slice(0, e.length - l[0].length), t[l[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : Yl(e.slice(2)), t];
}
let Bi = 0;
const Ub = Promise.resolve(), Qb = () => Bi || (Ub.then(() => Bi = 0), Bi = Date.now());
function Kb(e, t) {
  const n = (l) => {
    if (!l._vts) l._vts = Date.now();
    else if (l._vts <= n.attached) return;
    Rn(Wb(l, n.value), t, 5, [l]);
  };
  return n.value = e, n.attached = Qb(), n;
}
function Wb(e, t) {
  if (Ne(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((l) => (r) => !r._stopped && l && l(r));
  } else return t;
}
const Vc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Yb = (e, t, n, l, r, a) => {
  const o = r === "svg";
  t === "class" ? Fb(e, l, o) : t === "style" ? Db(e, n, l) : Qo(t) ? ts(t) || Hb(e, t, n, l, a) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Xb(e, t, l, o)) ? (Bc(e, t, l), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Lc(e, t, l, o, a, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !At(l)) ? Bc(e, yn(t), l, a, t) : (t === "true-value" ? e._trueValue = l : t === "false-value" && (e._falseValue = l), Lc(e, t, l, o));
};
function Xb(e, t, n, l) {
  if (l) return !!(t === "innerHTML" || t === "textContent" || t in e && Vc(t) && Qe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return false;
  }
  return Vc(t) && At(n) ? false : t in e;
}
const Zv = /* @__PURE__ */ new WeakMap(), Jv = /* @__PURE__ */ new WeakMap(), qo = Symbol("_moveCb"), Dc = Symbol("_enterCb"), Gb = (e) => (delete e.props.mode, e), Zb = Gb({ name: "TransitionGroup", props: It({}, Kv, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = xe(), l = mv();
  let r, a;
  return ti(() => {
    if (!r.length) return;
    const o = e.moveClass || `${e.name || "v"}-move`;
    if (!ly(r[0].el, n.vnode.el, o)) return;
    r.forEach(ey), r.forEach(ty);
    const i = r.filter(ny);
    Eu(), i.forEach((u) => {
      const c = u.el, s = c.style;
      $n(c, o), s.transform = s.webkitTransform = s.transitionDuration = "";
      const f = c[qo] = (h) => {
        h && h.target !== c || (!h || /transform$/.test(h.propertyName)) && (c.removeEventListener("transitionend", f), c[qo] = null, ul(c, o));
      };
      c.addEventListener("transitionend", f);
    });
  }), () => {
    const o = Xe(e), i = Wv(o);
    let u = o.tag || on;
    if (r = [], a) for (let c = 0; c < a.length; c++) {
      const s = a[c];
      s.el && s.el instanceof Element && (r.push(s), pl(s, ba(s, i, l, n)), Zv.set(s, s.el.getBoundingClientRect()));
    }
    a = t.default ? hs(t.default()) : [];
    for (let c = 0; c < a.length; c++) {
      const s = a[c];
      s.key != null && pl(s, ba(s, i, l, n));
    }
    return Je(u, null, a);
  };
} }), Jb = Zb;
function ey(e) {
  const t = e.el;
  t[qo] && t[qo](), t[Dc] && t[Dc]();
}
function ty(e) {
  Jv.set(e, e.el.getBoundingClientRect());
}
function ny(e) {
  const t = Zv.get(e), n = Jv.get(e), l = t.left - n.left, r = t.top - n.top;
  if (l || r) {
    const a = e.el.style;
    return a.transform = a.webkitTransform = `translate(${l}px,${r}px)`, a.transitionDuration = "0s", e;
  }
}
function ly(e, t, n) {
  const l = e.cloneNode(), r = e[Sr];
  r && r.forEach((i) => {
    i.split(/\s+/).forEach((u) => u && l.classList.remove(u));
  }), n.split(/\s+/).forEach((i) => i && l.classList.add(i)), l.style.display = "none";
  const a = t.nodeType === 1 ? t : t.parentNode;
  a.appendChild(l);
  const { hasTransform: o } = Yv(l);
  return a.removeChild(l), o;
}
const ry = It({ patchProp: Yb }, Pb);
let Ic;
function ay() {
  return Ic || (Ic = nb(ry));
}
const em = (...e) => {
  const t = ay().createApp(...e), { mount: n } = t;
  return t.mount = (l) => {
    const r = iy(l);
    if (!r) return;
    const a = t._component;
    !Qe(a) && !a.render && !a.template && (a.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, false, oy(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
};
function oy(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function iy(e) {
  return At(e) ? document.querySelector(e) : e;
}
/*!
* Quasar Framework v2.18.1
* (c) 2015-present Razvan Stoenescu
* Released under the MIT License.
*/
var Fi = null;
function _s() {
  return Fi !== null ? Fi : Fi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
typeof __QUASAR_SSR__ != "boolean" && (_s().__QUASAR_SSR__ = false);
typeof __QUASAR_SSR_CLIENT__ != "boolean" && (_s().__QUASAR_SSR_CLIENT__ = false);
typeof __QUASAR_SSR_PWA__ != "boolean" && (_s().__QUASAR_SSR_PWA__ = false);
function Vt(e, t, n, l) {
  return Object.defineProperty(e, t, { get: n, set: l, enumerable: true }), e;
}
function tm(e, t) {
  for (const n in t) Vt(e, n, t[n]);
  return e;
}
var ln = K(__QUASAR_SSR_CLIENT__ && (__QUASAR_SSR_PWA__ ? document.body.getAttribute("data-server-rendered") !== null : true)), Ru;
function uy(e, t) {
  const n = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
  return { browser: n[5] || n[3] || n[1] || "", version: n[4] || n[2] || "0", platform: t[0] || "" };
}
function sy(e) {
  return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
}
var nm = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function cy(e) {
  const t = e.toLowerCase(), n = sy(t), l = uy(t, n), r = { mobile: false, desktop: false, cordova: false, capacitor: false, nativeMobile: false, electron: false, bex: false, linux: false, mac: false, win: false, cros: false, chrome: false, firefox: false, opera: false, safari: false, vivaldi: false, edge: false, edgeChromium: false, ie: false, webkit: false, android: false, ios: false, ipad: false, iphone: false, ipod: false, kindle: false, winphone: false, blackberry: false, playbook: false, silk: false };
  l.browser && (r[l.browser] = true, r.version = l.version, r.versionNumber = parseInt(l.version, 10)), l.platform && (r[l.platform] = true);
  const a = r.android || r.ios || r.bb || r.blackberry || r.ipad || r.iphone || r.ipod || r.kindle || r.playbook || r.silk || r["windows phone"];
  if (a === true || t.indexOf("mobile") !== -1 ? r.mobile = true : r.desktop = true, r["windows phone"] && (r.winphone = true, delete r["windows phone"]), r.edga || r.edgios || r.edg ? (r.edge = true, l.browser = "edge") : r.crios ? (r.chrome = true, l.browser = "chrome") : r.fxios && (r.firefox = true, l.browser = "firefox"), (r.ipod || r.ipad || r.iphone) && (r.ios = true), r.vivaldi && (l.browser = "vivaldi", r.vivaldi = true), (r.chrome || r.opr || r.safari || r.vivaldi || r.mobile === true && r.ios !== true && a !== true) && (r.webkit = true), r.opr && (l.browser = "opera", r.opera = true), r.safari && (r.blackberry || r.bb ? (l.browser = "blackberry", r.blackberry = true) : r.playbook ? (l.browser = "playbook", r.playbook = true) : r.android ? (l.browser = "android", r.android = true) : r.kindle ? (l.browser = "kindle", r.kindle = true) : r.silk && (l.browser = "silk", r.silk = true)), r.name = l.browser, r.platform = l.platform, t.indexOf("electron") !== -1) r.electron = true;
  else if (document.location.href.indexOf("-extension://") !== -1) r.bex = true;
  else {
    if (window.Capacitor !== void 0 ? (r.capacitor = true, r.nativeMobile = true, r.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (r.cordova = true, r.nativeMobile = true, r.nativeMobileWrapper = "cordova"), ln.value === true && (Ru = { is: { ...r } }), nm === true && r.mac === true && (r.desktop === true && r.safari === true || r.nativeMobile === true && r.android !== true && r.ios !== true && r.ipad !== true)) {
      delete r.mac, delete r.desktop;
      const o = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
      Object.assign(r, { mobile: true, ios: true, platform: o, [o]: true });
    }
    r.mobile !== true && window.navigator.userAgentData && window.navigator.userAgentData.mobile && (delete r.desktop, r.mobile = true);
  }
  return r;
}
var zc = navigator.userAgent || navigator.vendor || window.opera, dy = { has: { touch: false, webStorage: false }, within: { iframe: false } }, De = { userAgent: zc, is: cy(zc), has: { touch: nm }, within: { iframe: window.self !== window.top } }, Au = { install(e) {
  const { $q: t } = e;
  ln.value === true ? (e.onSSRHydrated.push(() => {
    Object.assign(t.platform, De), ln.value = false;
  }), t.platform = Fn(this)) : t.platform = this;
} };
{
  let e;
  Vt(De.has, "webStorage", () => {
    if (e !== void 0) return e;
    try {
      if (window.localStorage) return e = true, true;
    } catch {
    }
    return e = false, false;
  }), Object.assign(Au, De), ln.value === true && (Object.assign(Au, Ru, dy), Ru = null);
}
var lm = Au;
function he(e) {
  return Xo(/* @__PURE__ */ Er(e));
}
function Pn(e) {
  return Xo(e);
}
var Cl = (e, t) => {
  const n = Fn(e);
  for (const l in e) Vt(t, l, () => n[l], (r) => {
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
function oi(e) {
  return e.button === 0;
}
function tn(e) {
  return e.touches && e.touches[0] ? e = e.touches[0] : e.changedTouches && e.changedTouches[0] ? e = e.changedTouches[0] : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]), { top: e.clientY, left: e.clientX };
}
function fy(e) {
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
function br(e, t) {
  if (e === void 0 || t === true && e.__dragPrevented === true) return;
  const n = t === true ? (l) => {
    l.__dragPrevented = true, l.addEventListener("dragstart", Dt, dt.notPassiveCapture);
  } : (l) => {
    delete l.__dragPrevented, l.removeEventListener("dragstart", Dt, dt.notPassiveCapture);
  };
  e.querySelectorAll("a, img").forEach(n);
}
function kt(e, t, n) {
  const l = `__q_${t}_evt`;
  e[l] = e[l] !== void 0 ? e[l].concat(n) : n, n.forEach((r) => {
    r[0].addEventListener(r[1], e[r[2]], dt[r[3]]);
  });
}
function Yt(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 && (e[n].forEach((l) => {
    l[0].removeEventListener(l[1], e[l[2]], dt[l[3]]);
  }), e[n] = void 0);
}
function Ar(e, t = 250, n) {
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
var Oi = ["sm", "md", "lg", "xl"], { passive: Nc } = dt, vy = Cl({ width: 0, height: 0, name: "xs", sizes: { sm: 600, md: 1024, lg: 1440, xl: 1920 }, lt: { sm: true, md: true, lg: true, xl: true }, gt: { xs: false, sm: false, md: false, lg: false }, xs: true, sm: false, md: false, lg: false, xl: false }, { setSizes: xt, setDebounce: xt, install({ $q: e, onSSRHydrated: t }) {
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
    Oi.forEach((h) => {
      f[h] !== void 0 && (u[h] = f[h]);
    });
  }, this.setDebounce = (f) => {
    c = f;
  };
  const s = () => {
    const f = getComputedStyle(document.body);
    f.getPropertyValue("--q-size-sm") && Oi.forEach((h) => {
      this.sizes[h] = parseInt(f.getPropertyValue(`--q-size-${h}`), 10);
    }), this.setSizes = (h) => {
      Oi.forEach((m) => {
        h[m] && (this.sizes[m] = h[m]);
      }), this.__update(true);
    }, this.setDebounce = (h) => {
      i !== void 0 && l.removeEventListener("resize", i, Nc), i = h > 0 ? Ar(this.__update, h) : this.__update, l.addEventListener("resize", i, Nc);
    }, this.setDebounce(c), Object.keys(u).length !== 0 ? (this.setSizes(u), u = void 0) : this.__update(), o === true && this.name === "xs" && document.body.classList.add("screen--xs");
  };
  ln.value === true ? t.push(s) : s();
} }), Qt = Cl({ isActive: false, mode: false }, { __media: void 0, set(e) {
  Qt.mode = e, e === "auto" ? (Qt.__media === void 0 && (Qt.__media = window.matchMedia("(prefers-color-scheme: dark)"), Qt.__updateMedia = () => {
    Qt.set("auto");
  }, Qt.__media.addListener(Qt.__updateMedia)), e = Qt.__media.matches) : Qt.__media !== void 0 && (Qt.__media.removeListener(Qt.__updateMedia), Qt.__media = void 0), Qt.isActive = e === true, document.body.classList.remove(`body--${e === true ? "light" : "dark"}`), document.body.classList.add(`body--${e === true ? "dark" : "light"}`);
}, toggle() {
  Qt.set(Qt.isActive === false);
}, install({ $q: e, ssrContext: t }) {
  const { dark: n } = e.config;
  e.dark = this, this.__installed !== true && this.set(n !== void 0 ? n : false);
} }), rm = Qt;
function my(e, t, n = document.body) {
  if (typeof e != "string") throw new TypeError("Expected a string as propName");
  if (typeof t != "string") throw new TypeError("Expected a string as value");
  if (!(n instanceof Element)) throw new TypeError("Expected a DOM element");
  n.style.setProperty(`--q-${e}`, t);
}
var am = false;
function hy(e) {
  am = e.isComposing === true;
}
function Xl(e) {
  return am === true || e !== Object(e) || e.isComposing === true || e.qKeyEvent === true;
}
function pn(e, t) {
  return Xl(e) === true ? false : [].concat(t).includes(e.keyCode);
}
function om(e) {
  if (e.ios === true) return "ios";
  if (e.android === true) return "android";
}
function gy({ is: e, has: t, within: n }, l) {
  const r = [e.desktop === true ? "desktop" : "mobile", `${t.touch === false ? "no-" : ""}touch`];
  if (e.mobile === true) {
    const a = om(e);
    a !== void 0 && r.push("platform-" + a);
  }
  if (e.nativeMobile === true) {
    const a = e.nativeMobileWrapper;
    r.push(a), r.push("native-mobile"), e.ios === true && (l[a] === void 0 || l[a].iosStatusBarPadding !== false) && r.push("q-ios-padding");
  } else e.electron === true ? r.push("electron") : e.bex === true && r.push("bex");
  return n.iframe === true && r.push("within-iframe"), r;
}
function by() {
  const { is: e } = De, t = document.body.className, n = new Set(t.replace(/ {2}/g, " ").split(" "));
  if (e.nativeMobile !== true && e.electron !== true && e.bex !== true) {
    if (e.desktop === true) n.delete("mobile"), n.delete("platform-ios"), n.delete("platform-android"), n.add("desktop");
    else if (e.mobile === true) {
      n.delete("desktop"), n.add("mobile"), n.delete("platform-ios"), n.delete("platform-android");
      const r = om(e);
      r !== void 0 && n.add(`platform-${r}`);
    }
  }
  De.has.touch === true && (n.delete("no-touch"), n.add("touch")), De.within.iframe === true && n.add("within-iframe");
  const l = Array.from(n).join(" ");
  t !== l && (document.body.className = l);
}
function yy(e) {
  for (const t in e) my(t, e[t]);
}
var py = { install(e) {
  if (this.__installed !== true) {
    if (ln.value === true) by();
    else {
      const { $q: t } = e;
      t.config.brand !== void 0 && yy(t.config.brand);
      const n = gy(De, t.config);
      document.body.classList.add.apply(document.body.classList, n);
    }
    De.is.ios === true && document.body.addEventListener("touchstart", xt), window.addEventListener("keydown", hy, true);
  }
} }, im = () => true;
function _y(e) {
  return typeof e == "string" && e !== "" && e !== "/" && e !== "#/";
}
function wy(e) {
  return e.startsWith("#") === true && (e = e.substring(1)), e.startsWith("/") === false && (e = "/" + e), e.endsWith("/") === true && (e = e.substring(0, e.length - 1)), "#" + e;
}
function xy(e) {
  if (e.backButtonExit === false) return () => false;
  if (e.backButtonExit === "*") return im;
  const t = ["#/"];
  return Array.isArray(e.backButtonExit) === true && t.push(...e.backButtonExit.filter(_y).map(wy)), () => t.includes(window.location.hash);
}
var wa = { __history: [], add: xt, remove: xt, install({ $q: e }) {
  if (this.__installed === true) return;
  const { cordova: t, capacitor: n } = De.is;
  if (t !== true && n !== true) return;
  const l = e.config[t === true ? "cordova" : "capacitor"];
  if ((l == null ? void 0 : l.backButton) === false || n === true && (window.Capacitor === void 0 || window.Capacitor.Plugins.App === void 0)) return;
  this.add = (o) => {
    o.condition === void 0 && (o.condition = im), this.__history.push(o);
  }, this.remove = (o) => {
    const i = this.__history.indexOf(o);
    i >= 0 && this.__history.splice(i, 1);
  };
  const r = xy(Object.assign({ backButtonExit: true }, l)), a = () => {
    if (this.__history.length) {
      const o = this.__history[this.__history.length - 1];
      o.condition() === true && (this.__history.pop(), o.handler());
    } else r() === true ? navigator.app.exitApp() : window.history.back();
  };
  t === true ? document.addEventListener("deviceready", () => {
    document.addEventListener("backbutton", a, false);
  }) : window.Capacitor.Plugins.App.addListener("backButton", a);
} }, Pu = { isoName: "en-US", nativeName: "English (US)", label: { clear: "Clear", ok: "OK", cancel: "Cancel", close: "Close", set: "Set", select: "Select", reset: "Reset", remove: "Remove", update: "Update", create: "Create", search: "Search", filter: "Filter", refresh: "Refresh", expand: (e) => e ? `Expand "${e}"` : "Expand", collapse: (e) => e ? `Collapse "${e}"` : "Collapse" }, date: { days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), firstDayOfWeek: 0, format24h: false, pluralDay: "days", prevMonth: "Previous month", nextMonth: "Next month", prevYear: "Previous year", nextYear: "Next year", today: "Today", prevRangeYears: (e) => `Previous ${e} years`, nextRangeYears: (e) => `Next ${e} years` }, table: { noData: "No data available", noResults: "No matching records found", loading: "Loading...", selectedRecords: (e) => e === 1 ? "1 record selected." : (e === 0 ? "No" : e) + " records selected.", recordsPerPage: "Records per page:", allRows: "All", pagination: (e, t, n) => e + "-" + t + " of " + n, columns: "Columns" }, pagination: { first: "First page", prev: "Previous page", next: "Next page", last: "Last page" }, editor: { url: "URL", bold: "Bold", italic: "Italic", strikethrough: "Strikethrough", underline: "Underline", unorderedList: "Unordered List", orderedList: "Ordered List", subscript: "Subscript", superscript: "Superscript", hyperlink: "Hyperlink", toggleFullscreen: "Toggle Fullscreen", quote: "Quote", left: "Left align", center: "Center align", right: "Right align", justify: "Justify align", print: "Print", outdent: "Decrease indentation", indent: "Increase indentation", removeFormat: "Remove formatting", formatting: "Formatting", fontSize: "Font Size", align: "Align", hr: "Insert Horizontal Rule", undo: "Undo", redo: "Redo", heading1: "Heading 1", heading2: "Heading 2", heading3: "Heading 3", heading4: "Heading 4", heading5: "Heading 5", heading6: "Heading 6", paragraph: "Paragraph", code: "Code", size1: "Very small", size2: "A bit small", size3: "Normal", size4: "Medium-large", size5: "Big", size6: "Very big", size7: "Maximum", defaultFont: "Default Font", viewSource: "View Source" }, tree: { noNodes: "No nodes available", noResults: "No matching nodes found" } };
function Hc() {
  const e = Array.isArray(navigator.languages) === true && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
  if (typeof e == "string") return e.split(/[-_]/).map((t, n) => n === 0 ? t.toLowerCase() : n > 1 || t.length < 4 ? t.toUpperCase() : t[0].toUpperCase() + t.slice(1).toLowerCase()).join("-");
}
var Ll = Cl({ __qLang: {} }, { getLocale: Hc, set(e = Pu, t) {
  const n = { ...e, rtl: e.rtl === true, getLocale: Hc };
  {
    if (n.set = Ll.set, Ll.__langConfig === void 0 || Ll.__langConfig.noHtmlAttrs !== true) {
      const l = document.documentElement;
      l.setAttribute("dir", n.rtl === true ? "rtl" : "ltr"), l.setAttribute("lang", n.isoName);
    }
    Object.assign(Ll.__qLang, n);
  }
}, install({ $q: e, lang: t, ssrContext: n }) {
  e.lang = Ll.__qLang, Ll.__langConfig = e.config.lang, this.__installed === true ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qLang, { get() {
    return Reflect.get(...arguments);
  }, ownKeys(l) {
    return Reflect.ownKeys(l).filter((r) => r !== "set" && r !== "getLocale");
  } }), this.set(t || Pu));
} }), ii = Ll, Sy = { name: "material-icons", type: { positive: "check_circle", negative: "warning", info: "info", warning: "priority_high" }, arrow: { up: "arrow_upward", right: "arrow_forward", down: "arrow_downward", left: "arrow_back", dropdown: "arrow_drop_down" }, chevron: { left: "chevron_left", right: "chevron_right" }, colorPicker: { spectrum: "gradient", tune: "tune", palette: "style" }, pullToRefresh: { icon: "refresh" }, carousel: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down", navigationIcon: "lens" }, chip: { remove: "cancel", selected: "check" }, datetime: { arrowLeft: "chevron_left", arrowRight: "chevron_right", now: "access_time", today: "today" }, editor: { bold: "format_bold", italic: "format_italic", strikethrough: "strikethrough_s", underline: "format_underlined", unorderedList: "format_list_bulleted", orderedList: "format_list_numbered", subscript: "vertical_align_bottom", superscript: "vertical_align_top", hyperlink: "link", toggleFullscreen: "fullscreen", quote: "format_quote", left: "format_align_left", center: "format_align_center", right: "format_align_right", justify: "format_align_justify", print: "print", outdent: "format_indent_decrease", indent: "format_indent_increase", removeFormat: "format_clear", formatting: "text_format", fontSize: "format_size", align: "format_align_left", hr: "remove", undo: "undo", redo: "redo", heading: "format_size", code: "code", size: "format_size", font: "font_download", viewSource: "code" }, expansionItem: { icon: "keyboard_arrow_down", denseIcon: "arrow_drop_down" }, fab: { icon: "add", activeIcon: "close" }, field: { clear: "cancel", error: "error" }, pagination: { first: "first_page", prev: "keyboard_arrow_left", next: "keyboard_arrow_right", last: "last_page" }, rating: { icon: "grade" }, stepper: { done: "check", active: "edit", error: "warning" }, tabs: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down" }, table: { arrowUp: "arrow_upward", warning: "warning", firstPage: "first_page", prevPage: "chevron_left", nextPage: "chevron_right", lastPage: "last_page" }, tree: { icon: "play_arrow" }, uploader: { done: "done", clear: "clear", add: "add_box", upload: "cloud_upload", removeQueue: "clear_all", removeUploaded: "done_all" } }, $u = Cl({ iconMapFn: null, __qIconSet: {} }, { set(e, t) {
  const n = { ...e };
  n.set = $u.set, Object.assign($u.__qIconSet, n);
}, install({ $q: e, iconSet: t, ssrContext: n }) {
  e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn), e.iconSet = this.__qIconSet, Vt(e, "iconMapFn", () => this.iconMapFn, (l) => {
    this.iconMapFn = l;
  }), this.__installed === true ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qIconSet, { get() {
    return Reflect.get(...arguments);
  }, ownKeys(l) {
    return Reflect.ownKeys(l).filter((r) => r !== "set");
  } }), this.set(t || Sy));
} }), um = $u, sm = "_q_", cm = "_q_t_", dm = "_q_s_", Gl = "_q_l_", fm = "_q_pc_", vm = "_q_f_", mm = "_q_fo_", hm = "_q_tabs_", gm = "_q_u_";
function ot() {
}
var Mo = {}, bm = false;
function Cy() {
  bm = true;
}
function Tn(e, t) {
  if (e === t) return true;
  if (e !== null && t !== null && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return false;
    let n, l;
    if (e.constructor === Array) {
      if (n = e.length, n !== t.length) return false;
      for (l = n; l-- !== 0; ) if (Tn(e[l], t[l]) !== true) return false;
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
        if (Tn(l.value[1], t.get(l.value[0])) !== true) return false;
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
      if (Tn(e[a], t[a]) !== true) return false;
    }
    return true;
  }
  return e !== e && t !== t;
}
function $t(e) {
  return e !== null && typeof e == "object" && Array.isArray(e) !== true;
}
function Lu(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function ky(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function xa(e) {
  return typeof e == "number" && isFinite(e);
}
var jc = [lm, py, rm, vy, wa, ii, um];
function ui(e, t) {
  const n = em(e);
  n.config.globalProperties = t.config.globalProperties;
  const { reload: l, ...r } = t._context;
  return Object.assign(n._context, r), n;
}
function Uc(e, t) {
  t.forEach((n) => {
    n.install(e), n.__installed = true;
  });
}
function Ty(e, t, n) {
  e.config.globalProperties.$q = n.$q, e.provide(sm, n.$q), Uc(n, jc), t.components !== void 0 && Object.values(t.components).forEach((l) => {
    $t(l) === true && l.name !== void 0 && e.component(l.name, l);
  }), t.directives !== void 0 && Object.values(t.directives).forEach((l) => {
    $t(l) === true && l.name !== void 0 && e.directive(l.name, l);
  }), t.plugins !== void 0 && Uc(n, Object.values(t.plugins).filter((l) => typeof l.install == "function" && jc.includes(l) === false)), ln.value === true && (n.$q.onSSRHydrated = () => {
    n.onSSRHydrated.forEach((l) => {
      l();
    }), n.$q.onSSRHydrated = () => {
    };
  });
}
var qy = function(e, t = {}) {
  const n = { version: "2.18.1" };
  bm === false ? (t.config !== void 0 && Object.assign(Mo, t.config), n.config = { ...Mo }, Cy()) : n.config = t.config || {}, Ty(e, t, { parentApp: e, $q: n, lang: t.lang, iconSet: t.iconSet, onSSRHydrated: [] });
}, Qc = ["B", "KB", "MB", "GB", "TB", "PB"];
function Bu(e, t = 1) {
  let n = 0;
  for (; parseInt(e, 10) >= 1024 && n < Qc.length - 1; ) e /= 1024, ++n;
  return `${e.toFixed(t)}${Qc[n]}`;
}
function ct(e, t, n) {
  return n <= t ? t : Math.min(n, Math.max(t, e));
}
function Eo(e, t, n) {
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
var ws = XMLHttpRequest, ym = ws.prototype.open, My = ["top", "right", "bottom", "left"], Ro = [], ia = 0;
function Ey({ p: e, pos: t, active: n, horiz: l, reverse: r, dir: a }) {
  let o = 1, i = 1;
  return l === true ? (r === true && (o = -1), t === "bottom" && (i = -1), { transform: `translate3d(${o * (e - 100)}%,${n ? 0 : i * -200}%,0)` }) : (r === true && (i = -1), t === "right" && (o = -1), { transform: `translate3d(${n ? 0 : a * o * -200}%,${i * (e - 100)}%,0)` });
}
function Ry(e, t) {
  return typeof t != "number" && (e < 25 ? t = Math.random() * 3 + 3 : e < 65 ? t = Math.random() * 3 : e < 85 ? t = Math.random() * 2 : e < 99 ? t = 0.6 : t = 0), ct(e + t, 0, 100);
}
function Ay(e) {
  ia++, Ro.push(e), !(ia > 1) && (ws.prototype.open = function(t, n) {
    const l = [], r = () => {
      Ro.forEach((o) => {
        (o.hijackFilter.value === null || o.hijackFilter.value(n) === true) && (o.start(), l.push(o.stop));
      });
    }, a = () => {
      l.forEach((o) => {
        o();
      });
    };
    this.addEventListener("loadstart", r, { once: true }), this.addEventListener("loadend", a, { once: true }), ym.apply(this, arguments);
  });
}
function Py(e) {
  Ro = Ro.filter((t) => t.start !== e), ia = Math.max(0, ia - 1), ia === 0 && (ws.prototype.open = ym);
}
var $y = he({ name: "QAjaxBar", props: { position: { type: String, default: "top", validator: (e) => My.includes(e) }, size: { type: String, default: "2px" }, color: String, skipHijack: Boolean, reverse: Boolean, hijackFilter: Function }, emits: ["start", "stop"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), l = K(0), r = K(false), a = K(true);
  let o = 0, i = null, u;
  const c = v(() => `q-loading-bar q-loading-bar--${e.position}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (a.value === true ? "" : " no-transition")), s = v(() => e.position === "top" || e.position === "bottom"), f = v(() => s.value === true ? "height" : "width"), h = v(() => {
    const y = r.value, b = Ey({ p: l.value, pos: e.position, active: y, horiz: s.value, reverse: n.$q.lang.rtl === true && ["top", "bottom"].includes(e.position) ? e.reverse === false : e.reverse, dir: n.$q.lang.rtl === true ? -1 : 1 });
    return b[f.value] = e.size, b.opacity = y ? 1 : 0, b;
  }), m = v(() => r.value === true ? { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": l.value } : { "aria-hidden": "true" });
  function g(y = 300) {
    const b = u;
    return u = Math.max(0, y) || 0, o++, o > 1 ? (b === 0 && y > 0 ? T() : i !== null && b > 0 && y <= 0 && (clearTimeout(i), i = null), o) : (i !== null && clearTimeout(i), t("start"), l.value = 0, i = setTimeout(() => {
      i = null, a.value = true, y > 0 && T();
    }, r._value === true ? 500 : 1), r._value !== true && (r.value = true, a.value = false), o);
  }
  function w(y) {
    return o > 0 && (l.value = Ry(l.value, y)), o;
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
    e.skipHijack !== true && (p = true, Ay({ start: g, stop: x, hijackFilter: v(() => e.hijackFilter || null) }));
  }), Ke(() => {
    i !== null && clearTimeout(i), p === true && Py(g);
  }), Object.assign(n, { start: g, stop: x, increment: w }), () => d("div", { class: c.value, style: h.value, ...m.value });
} }), Fu = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 }, el = { size: String };
function tl(e, t = Fu) {
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
function Tt(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function xs(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function _n(e, t, n, l, r, a) {
  t.key = l + r;
  const o = d(e, t, n);
  return r === true ? cn(o, a()) : o;
}
var Kc = "0 0 24 24", Vi = (e) => e, Di = (e) => `ionicons ${e}`, pm = { "mdi-": (e) => `mdi ${e}`, "icon-": Vi, "bt-": (e) => `bt ${e}`, "eva-": (e) => `eva ${e}`, "ion-md": Di, "ion-ios": Di, "ion-logo": Di, "iconfont ": Vi, "ti-": (e) => `themify-icon ${e}`, "bi-": (e) => `bootstrap-icons ${e}`, "i-": Vi }, _m = { o_: "-outlined", r_: "-round", s_: "-sharp" }, wm = { sym_o_: "-outlined", sym_r_: "-rounded", sym_s_: "-sharp" }, Ly = new RegExp("^(" + Object.keys(pm).join("|") + ")"), By = new RegExp("^(" + Object.keys(_m).join("|") + ")"), Wc = new RegExp("^(" + Object.keys(wm).join("|") + ")"), Fy = /^[Mm]\s?[-+]?\.?\d/, Oy = /^img:/, Vy = /^svguse:/, Dy = /^ion-/, Iy = /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, et = he({ name: "QIcon", props: { ...el, tag: { type: String, default: "i" }, name: String, color: String, left: Boolean, right: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), l = tl(e), r = v(() => "q-icon" + (e.left === true ? " on-left" : "") + (e.right === true ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), a = v(() => {
    let o, i = e.name;
    if (i === "none" || !i) return { none: true };
    if (n.iconMapFn !== null) {
      const s = n.iconMapFn(i);
      if (s !== void 0) if (s.icon !== void 0) {
        if (i = s.icon, i === "none" || !i) return { none: true };
      } else return { cls: s.cls, content: s.content !== void 0 ? s.content : " " };
    }
    if (Fy.test(i) === true) {
      const [s, f = Kc] = i.split("|");
      return { svg: true, viewBox: f, nodes: s.split("&&").map((h) => {
        const [m, g, w] = h.split("@@");
        return d("path", { style: g, d: m, transform: w });
      }) };
    }
    if (Oy.test(i) === true) return { img: true, src: i.substring(4) };
    if (Vy.test(i) === true) {
      const [s, f = Kc] = i.split("|");
      return { svguse: true, src: s.substring(7), viewBox: f };
    }
    let u = " ";
    const c = i.match(Ly);
    if (c !== null) o = pm[c[1]](i);
    else if (Iy.test(i) === true) o = i;
    else if (Dy.test(i) === true) o = `ionicons ion-${n.platform.is.ios === true ? "ios" : "md"}${i.substring(3)}`;
    else if (Wc.test(i) === true) {
      o = "notranslate material-symbols";
      const s = i.match(Wc);
      s !== null && (i = i.substring(6), o += wm[s[1]]), u = i;
    } else {
      o = "notranslate material-icons";
      const s = i.match(By);
      s !== null && (i = i.substring(2), o += _m[s[1]]), u = i;
    }
    return { cls: o, content: u };
  });
  return () => {
    const o = { class: r.value, style: l.value, "aria-hidden": "true" };
    return a.value.none === true ? d(e.tag, o, $e(t.default)) : a.value.img === true ? d(e.tag, o, Tt(t.default, [d("img", { src: a.value.src })])) : a.value.svg === true ? d(e.tag, o, Tt(t.default, [d("svg", { viewBox: a.value.viewBox || "0 0 24 24" }, a.value.nodes)])) : a.value.svguse === true ? d(e.tag, o, Tt(t.default, [d("svg", { viewBox: a.value.viewBox }, [d("use", { "xlink:href": a.value.src })])])) : (a.value.cls !== void 0 && (o.class += " " + a.value.cls), d(e.tag, o, Tt(t.default, [a.value.content])));
  };
} }), Ou = he({ name: "QAvatar", props: { ...el, fontSize: String, color: String, textColor: String, icon: String, square: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  const n = tl(e), l = v(() => "q-avatar" + (e.color ? ` bg-${e.color}` : "") + (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") + (e.square === true ? " q-avatar--square" : e.rounded === true ? " rounded-borders" : "")), r = v(() => e.fontSize ? { fontSize: e.fontSize } : null);
  return () => {
    const a = e.icon !== void 0 ? [d(et, { name: e.icon })] : void 0;
    return d("div", { class: l.value, style: n.value }, [d("div", { class: "q-avatar__content row flex-center overflow-hidden", style: r.value }, xs(t.default, a))]);
  };
} }), zy = ["top", "middle", "bottom"];
he({ name: "QBadge", props: { color: String, textColor: String, floating: Boolean, transparent: Boolean, multiLine: Boolean, outline: Boolean, rounded: Boolean, label: [Number, String], align: { type: String, validator: (e) => zy.includes(e) } }, setup(e, { slots: t }) {
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
var xm = { left: "start", center: "center", right: "end", between: "between", around: "around", evenly: "evenly", stretch: "stretch" }, Ny = Object.keys(xm), Ss = { align: { type: String, validator: (e) => Ny.includes(e) } };
function Cs(e) {
  return v(() => {
    const t = e.align === void 0 ? e.vertical === true ? "stretch" : "left" : e.align;
    return `${e.vertical === true ? "items" : "justify"}-${xm[t]}`;
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
function Sm(e, t) {
  typeof t.type == "symbol" ? Array.isArray(t.children) === true && t.children.forEach((n) => {
    Sm(e, n);
  }) : e.add(t);
}
function ks(e) {
  const t = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    Sm(t, n);
  }), Array.from(t);
}
function Ts(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function bl(e) {
  return e.isUnmounted === true || e.isDeactivated === true;
}
var Hy = ["", true];
he({ name: "QBreadcrumbs", props: { ...Ss, separator: { type: String, default: "/" }, separatorColor: String, activeColor: { type: String, default: "primary" }, gutter: { type: String, validator: (e) => ["none", "xs", "sm", "md", "lg", "xl"].includes(e), default: "sm" } }, setup(e, { slots: t }) {
  const n = Cs(e), l = v(() => `flex items-center ${n.value}${e.gutter === "none" ? "" : ` q-gutter-${e.gutter}`}`), r = v(() => e.separatorColor ? ` text-${e.separatorColor}` : ""), a = v(() => ` text-${e.activeColor}`);
  return () => {
    if (t.default === void 0) return;
    const o = ks($e(t.default));
    if (o.length === 0) return;
    let i = 1;
    const u = [], c = o.filter((f) => {
      var _a3;
      return ((_a3 = f.type) == null ? void 0 : _a3.name) === "QBreadcrumbsEl";
    }).length, s = t.separator !== void 0 ? t.separator : () => e.separator;
    return o.forEach((f) => {
      var _a3;
      if (((_a3 = f.type) == null ? void 0 : _a3.name) === "QBreadcrumbsEl") {
        const h = i < c, m = f.props !== null && Hy.includes(f.props.disable), g = (h === true ? "" : " q-breadcrumbs--last") + (m !== true && h === true ? a.value : "");
        i++, u.push(d("div", { class: `flex items-center${g}` }, [f])), h === true && u.push(d("div", { class: "q-breadcrumbs__separator" + r.value }, s()));
      } else u.push(f);
    }), d("div", { class: "q-breadcrumbs" }, [d("div", { class: l.value }, u)]);
  };
} });
function Yc(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
function Xc(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function jy(e, t) {
  for (const n in t) {
    const l = t[n], r = e[n];
    if (typeof l == "string") {
      if (l !== r) return false;
    } else if (Array.isArray(r) === false || r.length !== l.length || l.some((a, o) => a !== r[o])) return false;
  }
  return true;
}
function Gc(e, t) {
  return Array.isArray(t) === true ? e.length === t.length && e.every((n, l) => n === t[l]) : e.length === 1 && e[0] === t;
}
function Uy(e, t) {
  return Array.isArray(e) === true ? Gc(e, t) : Array.isArray(t) === true ? Gc(t, e) : e === t;
}
function Qy(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (const n in e) if (Uy(e[n], t[n]) === false) return false;
  return true;
}
var Cm = { to: [String, Object], replace: Boolean, href: String, target: String, disable: Boolean }, $a = { ...Cm, exact: Boolean, activeClass: { type: String, default: "q-router-link--active" }, exactActiveClass: { type: String, default: "q-router-link--exact-active" } };
function si({ fallbackTag: e, useDisableForRouterLinkProps: t = true } = {}) {
  const n = xe(), { props: l, proxy: r, emit: a } = n, o = Ts(n), i = v(() => l.disable !== true && l.href !== void 0), u = v(t === true ? () => o === true && l.disable !== true && i.value !== true && l.to !== void 0 && l.to !== null && l.to !== "" : () => o === true && i.value !== true && l.to !== void 0 && l.to !== null && l.to !== ""), c = v(() => u.value === true ? p(l.to) : null), s = v(() => c.value !== null), f = v(() => i.value === true || s.value === true), h = v(() => l.type === "a" || f.value === true ? "a" : l.tag || e || "div"), m = v(() => i.value === true ? { href: l.href, target: l.target } : s.value === true ? { href: c.value.href, target: l.target } : {}), g = v(() => {
    if (s.value === false) return -1;
    const { matched: C } = c.value, { length: $ } = C, O = C[$ - 1];
    if (O === void 0) return -1;
    const H = r.$route.matched;
    if (H.length === 0) return -1;
    const L = H.findIndex(Xc.bind(null, O));
    if (L !== -1) return L;
    const B = Yc(C[$ - 2]);
    return $ > 1 && Yc(O) === B && H[H.length - 1].path !== B ? H.findIndex(Xc.bind(null, C[$ - 2])) : L;
  }), w = v(() => s.value === true && g.value !== -1 && jy(r.$route.params, c.value.params)), x = v(() => w.value === true && g.value === r.$route.matched.length - 1 && Qy(r.$route.params, c.value.params)), T = v(() => s.value === true ? x.value === true ? ` ${l.exactActiveClass} ${l.activeClass}` : l.exact === true ? "" : w.value === true ? ` ${l.activeClass}` : "" : "");
  function p(C) {
    try {
      return r.$router.resolve(C);
    } catch {
    }
    return null;
  }
  function y(C, { returnRouterError: $, to: O = l.to, replace: H = l.replace } = {}) {
    if (l.disable === true) return C.preventDefault(), Promise.resolve(false);
    if (C.metaKey || C.altKey || C.ctrlKey || C.shiftKey || C.button !== void 0 && C.button !== 0 || l.target === "_blank") return Promise.resolve(false);
    C.preventDefault();
    const L = r.$router[H === true ? "replace" : "push"](O);
    return $ === true ? L : L.then(() => {
    }).catch(() => {
    });
  }
  function b(C) {
    if (s.value === true) {
      const $ = (O) => y(C, O);
      a("click", C, $), C.defaultPrevented !== true && $();
    } else a("click", C);
  }
  return { hasRouterLink: s, hasHrefLink: i, hasLink: f, linkTag: h, resolvedLink: c, linkIsActive: w, linkIsExactActive: x, linkClass: T, linkAttrs: m, getLink: p, navigateToRouterLink: y, navigateOnClick: b };
}
he({ name: "QBreadcrumbsEl", props: { ...$a, label: String, icon: String, tag: { type: String, default: "span" } }, emits: ["click"], setup(e, { slots: t }) {
  const { linkTag: n, linkAttrs: l, linkClass: r, navigateOnClick: a } = si(), o = v(() => ({ class: "q-breadcrumbs__el q-link flex inline items-center relative-position " + (e.disable !== true ? "q-link--focusable" + r.value : "q-breadcrumbs__el--disable"), ...l.value, onClick: a })), i = v(() => "q-breadcrumbs__el-icon" + (e.label !== void 0 ? " q-breadcrumbs__el-icon--with-label" : ""));
  return () => {
    const u = [];
    return e.icon !== void 0 && u.push(d(et, { class: i.value, name: e.icon })), e.label !== void 0 && u.push(e.label), d(n.value, { ...o.value }, Tt(t.default, u));
  };
} });
var Mt = { size: { type: [String, Number], default: "1em" }, color: String };
function Et(e) {
  return { cSize: v(() => e.size in Fu ? `${Fu[e.size]}px` : e.size), classes: v(() => "q-spinner" + (e.color ? ` text-${e.color}` : "")) };
}
var wn = he({ name: "QSpinner", props: { ...Mt, thickness: { type: Number, default: 5 } }, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value + " q-spinner-mat", width: t.value, height: t.value, viewBox: "25 25 50 50" }, [d("circle", { class: "path", cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": e.thickness, "stroke-miterlimit": "10" })]);
} });
function Ao(e) {
  if (e === window) return { top: 0, left: 0 };
  const { top: t, left: n } = e.getBoundingClientRect();
  return { top: t, left: n };
}
function Cr(e) {
  return e === window ? window.innerHeight : e.getBoundingClientRect().height;
}
function Vu(e, t) {
  const n = e.style;
  for (const l in t) n[l] = t[l];
}
function Ky(e) {
  if (e == null) return;
  if (typeof e == "string") try {
    return document.querySelector(e) || void 0;
  } catch {
    return;
  }
  const t = Ie(e);
  if (t) return t.$el || t;
}
function km(e, t) {
  if (e == null || e.contains(t) === true) return true;
  for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling) if (n.contains(t)) return true;
  return false;
}
function Tm(e, t = 250) {
  let n = false, l;
  return function() {
    return n === false && (n = true, setTimeout(() => {
      n = false;
    }, t), l = e.apply(this, arguments)), l;
  };
}
function Zc(e, t, n, l) {
  n.modifiers.stop === true && wt(e);
  const r = n.modifiers.color;
  let a = n.modifiers.center;
  a = a === true || l === true;
  const o = document.createElement("span"), i = document.createElement("span"), u = tn(e), { left: c, top: s, width: f, height: h } = t.getBoundingClientRect(), m = Math.sqrt(f * f + h * h), g = m / 2, w = `${(f - m) / 2}px`, x = a ? w : `${u.left - c - g}px`, T = `${(h - m) / 2}px`, p = a ? T : `${u.top - s - g}px`;
  i.className = "q-ripple__inner", Vu(i, { height: `${m}px`, width: `${m}px`, transform: `translate3d(${x},${p},0) scale3d(.2,.2,1)`, opacity: 0 }), o.className = `q-ripple${r ? " text-" + r : ""}`, o.setAttribute("dir", "ltr"), o.appendChild(i), t.appendChild(o);
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
function Jc(e, { modifiers: t, value: n, arg: l }) {
  const r = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = { early: r.early === true, stop: r.stop === true, center: r.center === true, color: r.color || l, keyCodes: [].concat(r.keyCodes || 13) };
}
var ci = Pn({ name: "ripple", beforeMount(e, t) {
  const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
  if (n.ripple === false) return;
  const l = { cfg: n, enabled: t.value !== false, modifiers: {}, abort: [], start(r) {
    l.enabled === true && r.qSkipRipple !== true && r.type === (l.modifiers.early === true ? "pointerdown" : "click") && Zc(r, e, l, r.qKeyEvent === true);
  }, keystart: Tm((r) => {
    l.enabled === true && r.qSkipRipple !== true && pn(r, l.modifiers.keyCodes) === true && r.type === `key${l.modifiers.early === true ? "down" : "up"}` && Zc(r, e, l, true);
  }, 300) };
  Jc(l, t), e.__qripple = l, kt(l, "main", [[e, "pointerdown", "start", "passive"], [e, "click", "start", "passive"], [e, "keydown", "keystart", "passive"], [e, "keyup", "keystart", "passive"]]);
}, updated(e, t) {
  if (t.oldValue !== t.value) {
    const n = e.__qripple;
    n !== void 0 && (n.enabled = t.value !== false, n.enabled === true && Object(t.value) === t.value && Jc(n, t));
  }
}, beforeUnmount(e) {
  const t = e.__qripple;
  t !== void 0 && (t.abort.forEach((n) => {
    n();
  }), Yt(t, "main"), delete e._qripple);
} }), Po = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 }, Wy = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, Yy = ["button", "submit", "reset"], Xy = /[^\s]\/[^\s]/, qm = ["flat", "outline", "push", "unelevated"];
function qs(e, t) {
  return e.flat === true ? "flat" : e.outline === true ? "outline" : e.push === true ? "push" : e.unelevated === true ? "unelevated" : t;
}
function Mm(e) {
  const t = qs(e);
  return t !== void 0 ? { [t]: true } : {};
}
var Ms = { ...el, ...Cm, type: { type: String, default: "button" }, label: [Number, String], icon: String, iconRight: String, ...qm.reduce((e, t) => (e[t] = Boolean) && e, {}), square: Boolean, rounded: Boolean, glossy: Boolean, size: String, fab: Boolean, fabMini: Boolean, padding: String, color: String, textColor: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, tabindex: [Number, String], ripple: { type: [Boolean, Object], default: true }, align: { ...Ss.align, default: "center" }, stack: Boolean, stretch: Boolean, loading: { type: Boolean, default: null }, disable: Boolean }, Gy = { ...Ms, round: Boolean };
function Zy(e) {
  const t = tl(e, Wy), n = Cs(e), { hasRouterLink: l, hasLink: r, linkTag: a, linkAttrs: o, navigateOnClick: i } = si({ fallbackTag: "button" }), u = v(() => {
    const x = e.fab === false && e.fabMini === false ? t.value : {};
    return e.padding !== void 0 ? Object.assign({}, x, { padding: e.padding.split(/\s+/).map((T) => T in Po ? Po[T] + "px" : T).join(" "), minWidth: "0", minHeight: "0" }) : x;
  }), c = v(() => e.rounded === true || e.fab === true || e.fabMini === true), s = v(() => e.disable !== true && e.loading !== true), f = v(() => s.value === true ? e.tabindex || 0 : -1), h = v(() => qs(e, "standard")), m = v(() => {
    const x = { tabindex: f.value };
    return r.value === true ? Object.assign(x, o.value) : Yy.includes(e.type) === true && (x.type = e.type), a.value === "a" ? (e.disable === true ? x["aria-disabled"] = "true" : x.href === void 0 && (x.role = "button"), l.value !== true && Xy.test(e.type) === true && (x.type = e.type)) : e.disable === true && (x.disabled = "", x["aria-disabled"] = "true"), e.loading === true && e.percentage !== void 0 && Object.assign(x, { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": e.percentage }), x;
  }), g = v(() => {
    let x;
    e.color !== void 0 ? e.flat === true || e.outline === true ? x = `text-${e.textColor || e.color}` : x = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (x = `text-${e.textColor}`);
    const T = e.round === true ? "round" : `rectangle${c.value === true ? " q-btn--rounded" : e.square === true ? " q-btn--square" : ""}`;
    return `q-btn--${h.value} q-btn--${T}` + (x !== void 0 ? " " + x : "") + (s.value === true ? " q-btn--actionable q-focusable q-hoverable" : e.disable === true ? " disabled" : "") + (e.fab === true ? " q-btn--fab" : e.fabMini === true ? " q-btn--fab-mini" : "") + (e.noCaps === true ? " q-btn--no-uppercase" : "") + (e.dense === true ? " q-btn--dense" : "") + (e.stretch === true ? " no-border-radius self-stretch" : "") + (e.glossy === true ? " glossy" : "") + (e.square ? " q-btn--square" : "");
  }), w = v(() => n.value + (e.stack === true ? " column" : " row") + (e.noWrap === true ? " no-wrap text-no-wrap" : "") + (e.loading === true ? " q-btn__content--hidden" : ""));
  return { classes: g, style: u, innerClasses: w, attributes: m, hasLink: r, linkTag: a, navigateOnClick: i, isActionable: s };
}
var { passiveCapture: vn } = dt, er = null, tr = null, nr = null, Ze = he({ name: "QBtn", props: { ...Gy, percentage: Number, darkPercentage: Boolean, onTouchstart: [Function, Array] }, emits: ["click", "keydown", "mousedown", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), { classes: r, style: a, innerClasses: o, attributes: i, hasLink: u, linkTag: c, navigateOnClick: s, isActionable: f } = Zy(e), h = K(null), m = K(null);
  let g = null, w, x = null;
  const T = v(() => e.label !== void 0 && e.label !== null && e.label !== ""), p = v(() => e.disable === true || e.ripple === false ? false : { keyCodes: u.value === true ? [13, 32] : [13], ...e.ripple === true ? {} : e.ripple }), y = v(() => ({ center: e.round })), b = v(() => {
    const k = Math.max(0, Math.min(100, e.percentage));
    return k > 0 ? { transition: "transform 0.6s", transform: `translateX(${k - 100}%)` } : {};
  }), C = v(() => {
    if (e.loading === true) return { onMousedown: E, onTouchstart: E, onClick: E, onKeydown: E, onKeyup: E };
    if (f.value === true) {
      const k = { onClick: O, onKeydown: H, onMousedown: B };
      if (l.$q.platform.has.touch === true) {
        const j = e.onTouchstart !== void 0 ? "" : "Passive";
        k[`onTouchstart${j}`] = L;
      }
      return k;
    }
    return { onClick: je };
  }), $ = v(() => ({ ref: h, class: "q-btn q-btn-item non-selectable no-outline " + r.value, style: a.value, ...i.value, ...C.value }));
  function O(k) {
    if (h.value !== null) {
      if (k !== void 0) {
        if (k.defaultPrevented === true) return;
        const j = document.activeElement;
        if (e.type === "submit" && j !== document.body && h.value.contains(j) === false && j.contains(h.value) === false) {
          k.qAvoidFocus !== true && h.value.focus();
          const U = () => {
            var _a3;
            document.removeEventListener("keydown", je, true), document.removeEventListener("keyup", U, vn), (_a3 = h.value) == null ? void 0 : _a3.removeEventListener("blur", U, vn);
          };
          document.addEventListener("keydown", je, true), document.addEventListener("keyup", U, vn), h.value.addEventListener("blur", U, vn);
        }
      }
      s(k);
    }
  }
  function H(k) {
    h.value !== null && (n("keydown", k), pn(k, [13, 32]) === true && tr !== h.value && (tr !== null && q(), k.defaultPrevented !== true && (k.qAvoidFocus !== true && h.value.focus(), tr = h.value, h.value.classList.add("q-btn--active"), document.addEventListener("keyup", N, true), h.value.addEventListener("blur", N, vn)), je(k)));
  }
  function L(k) {
    h.value !== null && (n("touchstart", k), k.defaultPrevented !== true && (er !== h.value && (er !== null && q(), er = h.value, g = k.target, g.addEventListener("touchcancel", N, vn), g.addEventListener("touchend", N, vn)), w = true, x !== null && clearTimeout(x), x = setTimeout(() => {
      x = null, w = false;
    }, 200)));
  }
  function B(k) {
    h.value !== null && (k.qSkipRipple = w === true, n("mousedown", k), k.defaultPrevented !== true && nr !== h.value && (nr !== null && q(), nr = h.value, h.value.classList.add("q-btn--active"), document.addEventListener("mouseup", N, vn)));
  }
  function N(k) {
    if (h.value !== null && !((k == null ? void 0 : k.type) === "blur" && document.activeElement === h.value)) {
      if ((k == null ? void 0 : k.type) === "keyup") {
        if (tr === h.value && pn(k, [13, 32]) === true) {
          const j = new MouseEvent("click", k);
          j.qKeyEvent = true, k.defaultPrevented === true && Dt(j), k.cancelBubble === true && wt(j), h.value.dispatchEvent(j), je(k), k.qKeyEvent = true;
        }
        n("keyup", k);
      }
      q();
    }
  }
  function q(k) {
    var _a3, _b2;
    const j = m.value;
    k !== true && (er === h.value || nr === h.value) && j !== null && j !== document.activeElement && (j.setAttribute("tabindex", -1), j.focus()), er === h.value && (g !== null && (g.removeEventListener("touchcancel", N, vn), g.removeEventListener("touchend", N, vn)), er = g = null), nr === h.value && (document.removeEventListener("mouseup", N, vn), nr = null), tr === h.value && (document.removeEventListener("keyup", N, true), (_a3 = h.value) == null ? void 0 : _a3.removeEventListener("blur", N, vn), tr = null), (_b2 = h.value) == null ? void 0 : _b2.classList.remove("q-btn--active");
  }
  function E(k) {
    je(k), k.qSkipRipple = true;
  }
  return Ke(() => {
    q(true);
  }), Object.assign(l, { click: (k) => {
    f.value === true && O(k);
  } }), () => {
    let k = [];
    e.icon !== void 0 && k.push(d(et, { name: e.icon, left: e.stack !== true && T.value === true, role: "img" })), T.value === true && k.push(d("span", { class: "block" }, [e.label])), k = Tt(t.default, k), e.iconRight !== void 0 && e.round === false && k.push(d(et, { name: e.iconRight, right: e.stack !== true && T.value === true, role: "img" }));
    const j = [d("span", { class: "q-focus-helper", ref: m })];
    return e.loading === true && e.percentage !== void 0 && j.push(d("span", { class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === true ? " q-btn__progress--dark" : "") }, [d("span", { class: "q-btn__progress-indicator fit block", style: b.value })])), j.push(d("span", { class: "q-btn__content text-center col items-center q-anchor--skip " + o.value }, k)), e.loading !== null && j.push(d(Ot, { name: "q-transition--fade" }, () => e.loading === true ? [d("span", { key: "loading", class: "absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : [d(wn)])] : null)), cn(d(c.value, $.value, j), [[ci, p.value, void 0, y.value]]);
  };
} }), Em = he({ name: "QBtnGroup", props: { unelevated: Boolean, outline: Boolean, flat: Boolean, rounded: Boolean, square: Boolean, push: Boolean, stretch: Boolean, glossy: Boolean, spread: Boolean }, setup(e, { slots: t }) {
  const n = v(() => {
    const l = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter((r) => e[r] === true).map((r) => `q-btn-group--${r}`).join(" ");
    return `q-btn-group row no-wrap${l.length !== 0 ? " " + l : ""}` + (e.spread === true ? " q-btn-group--spread" : " inline");
  });
  return () => d("div", { class: n.value }, $e(t.default));
} });
function En() {
  if (window.getSelection !== void 0) {
    const e = window.getSelection();
    e.empty !== void 0 ? e.empty() : e.removeAllRanges !== void 0 && (e.removeAllRanges(), lm.is.mobile !== true && e.addRange(document.createRange()));
  } else document.selection !== void 0 && document.selection.empty();
}
var Rm = { target: { type: [Boolean, String, Element], default: true }, noParentEvent: Boolean }, Am = { ...Rm, contextMenu: Boolean };
function Es({ showing: e, avoidEmit: t, configureAnchorEl: n }) {
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
    pn(m, 13) === true && c.toggle(m);
  }, contextClick(m) {
    r.hide(m), Dt(m), We(() => {
      r.show(m), m.qAnchorHandled = true;
    });
  }, prevent: Dt, mobileTouch(m) {
    if (c.mobileCleanup(m), u(m) !== true) return;
    r.hide(m), o.value.classList.add("non-selectable");
    const g = m.target;
    kt(c, "anchor", [[g, "touchmove", "mobileCleanup", "passive"], [g, "touchend", "mobileCleanup", "passive"], [g, "touchcancel", "mobileCleanup", "passive"], [o.value, "contextmenu", "prevent", "notPassive"]]), i = setTimeout(() => {
      i = null, r.show(m), m.qAnchorHandled = true;
    }, 300);
  }, mobileCleanup(m) {
    o.value.classList.remove("non-selectable"), i !== null && (clearTimeout(i), i = null), e.value === true && m !== void 0 && En();
  } }), n = function(m = l.contextMenu) {
    if (l.noParentEvent === true || o.value === null) return;
    let g;
    m === true ? r.$q.platform.is.mobile === true ? g = [[o.value, "touchstart", "mobileTouch", "passive"]] : g = [[o.value, "mousedown", "hide", "passive"], [o.value, "contextmenu", "contextClick", "notPassive"]] : g = [[o.value, "click", "toggle", "passive"], [o.value, "keyup", "toggleKey", "passive"]], kt(c, "anchor", g);
  });
  function s() {
    Yt(c, "anchor");
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
function Pm(e, t) {
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
var Pr = { modelValue: { type: Boolean, default: null }, "onUpdate:modelValue": [Function, Array] }, $r = ["beforeShow", "show", "beforeHide", "hide"];
function Lr({ showing: e, canShow: t, hideOnRouteChange: n, handleShow: l, handleHide: r, processOnMount: a }) {
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
  ge(() => i.modelValue, x), n !== void 0 && Ts(o) === true && ge(() => c.$route.fullPath, () => {
    n.value === true && e.value === true && g();
  }), a === true && ft(() => {
    x(i.modelValue);
  });
  const T = { show: h, hide: g, toggle: f };
  return Object.assign(c, T), T;
}
var Vl = [], Sa = [];
function $m(e) {
  Sa = Sa.filter((t) => t !== e);
}
function Jy(e) {
  $m(e), Sa.push(e);
}
function ed(e) {
  $m(e), Sa.length === 0 && Vl.length !== 0 && (Vl[Vl.length - 1](), Vl = []);
}
function Br(e) {
  Sa.length === 0 ? e() : Vl.push(e);
}
function ep(e) {
  Vl = Vl.filter((t) => t !== e);
}
var yr = [], ua = [], tp = 1, sl = document.body;
function La(e, t) {
  const n = document.createElement("div");
  if (n.id = t !== void 0 ? `q-portal--${t}--${tp++}` : e, Mo.globalNodes !== void 0) {
    const l = Mo.globalNodes.class;
    l !== void 0 && (n.className = l);
  }
  return sl.appendChild(n), yr.push(n), ua.push(t), n;
}
function Rs(e) {
  const t = yr.indexOf(e);
  yr.splice(t, 1), ua.splice(t, 1), e.remove();
}
function np(e) {
  if (e === sl) return;
  if (sl = e, sl === document.body || ua.reduce((n, l) => l === "dialog" ? n + 1 : n, 0) < 2) {
    yr.forEach((n) => {
      n.contains(sl) === false && sl.appendChild(n);
    });
    return;
  }
  const t = ua.lastIndexOf("dialog");
  for (let n = 0; n < yr.length; n++) {
    const l = yr[n];
    (n === t || ua[n] !== "dialog") && l.contains(sl) === false && sl.appendChild(l);
  }
}
var pr = [];
function lp(e) {
  return pr.find((t) => t.contentEl !== null && t.contentEl.contains(e));
}
function Lm(e, t) {
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
function rp(e, t, n) {
  for (; n !== 0 && e !== void 0 && e !== null; ) {
    if (e.__qPortal === true) {
      if (n--, e.$options.name === "QMenu") {
        e = Lm(e, t);
        continue;
      }
      e.hide(t);
    }
    e = uo(e);
  }
}
var ap = he({ name: "QPortal", setup(e, { slots: t }) {
  return () => t.default();
} });
function op(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog") return true;
    if (e.type.name === "QDialog" || e.type.name === "QMenu") return false;
    e = e.parent;
  }
  return false;
}
function As(e, t, n, l) {
  const r = K(false), a = K(false);
  let o = null;
  const i = {}, u = l === "dialog" && op(e);
  function c(f) {
    if (f === true) {
      ed(i), a.value = true;
      return;
    }
    a.value = false, r.value === false && (u === false && o === null && (o = La(false, l)), r.value = true, pr.push(e.proxy), Jy(i));
  }
  function s(f) {
    if (a.value = false, f !== true) return;
    ed(i), r.value = false;
    const h = pr.indexOf(e.proxy);
    h !== -1 && pr.splice(h, 1), o !== null && (Rs(o), o = null);
  }
  return ni(() => {
    s(true);
  }), e.proxy.__qPortal = true, Vt(e.proxy, "contentEl", () => t.value), { showPortal: c, hidePortal: s, portalIsActive: r, portalIsAccessible: a, renderPortal: () => u === true ? n() : r.value === true ? [d(E0, { to: o }, d(ap, n))] : void 0 };
}
var zl = { transitionShow: { type: String, default: "fade" }, transitionHide: { type: String, default: "fade" }, transitionDuration: { type: [String, Number], default: 300 } };
function di(e, t = () => {
}, n = () => {
}) {
  return { transitionProps: v(() => {
    const l = `q-transition--${e.transitionShow || t()}`, r = `q-transition--${e.transitionHide || n()}`;
    return { appear: true, enterFromClass: `${l}-enter-from`, enterActiveClass: `${l}-enter-active`, enterToClass: `${l}-enter-to`, leaveFromClass: `${r}-leave-from`, leaveActiveClass: `${r}-leave-active`, leaveToClass: `${r}-leave-to` };
  }), transitionStyle: v(() => `--q-transition-duration: ${e.transitionDuration}ms`) };
}
function _r() {
  let e;
  const t = xe();
  function n() {
    e = void 0;
  }
  return Vn(n), Ke(n), { removeTick: n, registerTick(l) {
    e = l, We(() => {
      e === l && (bl(t) === false && e(), e = void 0);
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
    n(), bl(t) === false && (e = setTimeout(() => {
      e = null, l();
    }, r));
  } };
}
var Zl = [Element, String], ip = [null, document, document.body, document.scrollingElement, document.documentElement];
function Dn(e, t) {
  let n = Ky(t);
  if (n === void 0) {
    if (e == null) return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return ip.includes(n) ? window : n;
}
function Ha(e) {
  return (e === window ? document.body : e).scrollHeight;
}
function yl(e) {
  return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop;
}
function fi(e) {
  return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft;
}
function Bm(e, t, n = 0) {
  const l = arguments[3] === void 0 ? performance.now() : arguments[3], r = yl(e);
  if (n <= 0) {
    r !== t && Du(e, t);
    return;
  }
  requestAnimationFrame((a) => {
    const o = a - l, i = r + (t - r) / Math.max(o, n) * o;
    Du(e, i), i !== t && Bm(e, t, n - o, a);
  });
}
function Fm(e, t, n = 0) {
  const l = arguments[3] === void 0 ? performance.now() : arguments[3], r = fi(e);
  if (n <= 0) {
    r !== t && Iu(e, t);
    return;
  }
  requestAnimationFrame((a) => {
    const o = a - l, i = r + (t - r) / Math.max(o, n) * o;
    Iu(e, i), i !== t && Fm(e, t, n - o, a);
  });
}
function Du(e, t) {
  if (e === window) {
    window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t);
    return;
  }
  e.scrollTop = t;
}
function Iu(e, t) {
  if (e === window) {
    window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0);
    return;
  }
  e.scrollLeft = t;
}
function wr(e, t, n) {
  if (n) {
    Bm(e, t, n);
    return;
  }
  Du(e, t);
}
function Ii(e, t, n) {
  if (n) {
    Fm(e, t, n);
    return;
  }
  Iu(e, t);
}
var ja;
function so() {
  if (ja !== void 0) return ja;
  const e = document.createElement("p"), t = document.createElement("div");
  Vu(e, { width: "100%", height: "200px" }), Vu(t, { position: "absolute", top: "0px", left: "0px", visibility: "hidden", width: "200px", height: "150px", overflow: "hidden" }), t.appendChild(e), document.body.appendChild(t);
  const n = e.offsetWidth;
  t.style.overflow = "scroll";
  let l = e.offsetWidth;
  return n === l && (l = t.clientWidth), t.remove(), ja = n - l, ja;
}
function up(e, t = true) {
  return !e || e.nodeType !== Node.ELEMENT_NODE ? false : t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]));
}
var Nl = [], kr;
function sp(e) {
  kr = e.keyCode === 27;
}
function cp() {
  kr === true && (kr = false);
}
function dp(e) {
  kr === true && (kr = false, pn(e, 27) === true && Nl[Nl.length - 1](e));
}
function Om(e) {
  window[e]("keydown", sp), window[e]("blur", cp), window[e]("keyup", dp), kr = false;
}
function Vm(e) {
  De.is.desktop === true && (Nl.push(e), Nl.length === 1 && Om("addEventListener"));
}
function $o(e) {
  const t = Nl.indexOf(e);
  t !== -1 && (Nl.splice(t, 1), Nl.length === 0 && Om("removeEventListener"));
}
var Hl = [];
function Dm(e) {
  Hl[Hl.length - 1](e);
}
function Im(e) {
  De.is.desktop === true && (Hl.push(e), Hl.length === 1 && document.body.addEventListener("focusin", Dm));
}
function zu(e) {
  const t = Hl.indexOf(e);
  t !== -1 && (Hl.splice(t, 1), Hl.length === 0 && document.body.removeEventListener("focusin", Dm));
}
var { notPassiveCapture: Lo } = dt, jl = [];
function Bo(e) {
  const t = e.target;
  if (t === void 0 || t.nodeType === 8 || t.classList.contains("no-pointer-events") === true) return;
  let n = pr.length - 1;
  for (; n >= 0; ) {
    const l = pr[n].$;
    if (l.type.name === "QTooltip") {
      n--;
      continue;
    }
    if (l.type.name !== "QDialog") break;
    if (l.props.seamless !== true) return;
    n--;
  }
  for (let l = jl.length - 1; l >= 0; l--) {
    const r = jl[l];
    if ((r.anchorEl.value === null || r.anchorEl.value.contains(t) === false) && (t === document.body || r.innerRef.value !== null && r.innerRef.value.contains(t) === false)) e.qClickOutside = true, r.onClickOutside(e);
    else return;
  }
}
function zm(e) {
  jl.push(e), jl.length === 1 && (document.addEventListener("mousedown", Bo, Lo), document.addEventListener("touchstart", Bo, Lo));
}
function Fo(e) {
  const t = jl.findIndex((n) => n === e);
  t !== -1 && (jl.splice(t, 1), jl.length === 0 && (document.removeEventListener("mousedown", Bo, Lo), document.removeEventListener("touchstart", Bo, Lo)));
}
var td, nd;
function Oo(e) {
  const t = e.split(" ");
  return t.length !== 2 ? false : ["top", "center", "bottom"].includes(t[0]) !== true ? (console.error("Anchor/Self position must start with one of top/center/bottom"), false) : ["left", "middle", "right", "start", "end"].includes(t[1]) !== true ? (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), false) : true;
}
function Nm(e) {
  return e ? !(e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number") : true;
}
var Nu = { "start#ltr": "left", "start#rtl": "right", "end#ltr": "right", "end#rtl": "left" };
["left", "middle", "right"].forEach((e) => {
  Nu[`${e}#ltr`] = e, Nu[`${e}#rtl`] = e;
});
function Vo(e, t) {
  const n = e.split(" ");
  return { vertical: n[0], horizontal: Nu[`${n[1]}#${t === true ? "rtl" : "ltr"}`] };
}
function fp(e, t) {
  let { top: n, left: l, right: r, bottom: a, width: o, height: i } = e.getBoundingClientRect();
  return t !== void 0 && (n -= t[1], l -= t[0], a += t[1], r += t[0], o += t[0], i += t[1]), { top: n, bottom: a, height: i, left: l, right: r, width: o, middle: l + (r - l) / 2, center: n + (a - n) / 2 };
}
function vp(e, t, n) {
  let { top: l, left: r } = e.getBoundingClientRect();
  return l += t.top, r += t.left, n !== void 0 && (l += n[1], r += n[0]), { top: l, bottom: l + 1, height: 1, left: r, right: r + 1, width: 1, middle: r, center: l };
}
function mp(e, t) {
  return { top: 0, center: t / 2, bottom: t, left: 0, middle: e / 2, right: e };
}
function ld(e, t, n, l) {
  return { top: e[n.vertical] - t[l.vertical], left: e[n.horizontal] - t[l.horizontal] };
}
function Ps(e, t = 0) {
  if (e.targetEl === null || e.anchorEl === null || t > 5) return;
  if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      Ps(e, t + 1);
    }, 10);
    return;
  }
  const { targetEl: n, offset: l, anchorEl: r, anchorOrigin: a, selfOrigin: o, absoluteOffset: i, fit: u, cover: c, maxHeight: s, maxWidth: f } = e;
  if (De.is.ios === true && window.visualViewport !== void 0) {
    const $ = document.body.style, { offsetLeft: O, offsetTop: H } = window.visualViewport;
    O !== td && ($.setProperty("--q-pe-left", O + "px"), td = O), H !== nd && ($.setProperty("--q-pe-top", H + "px"), nd = H);
  }
  const { scrollLeft: h, scrollTop: m } = n, g = i === void 0 ? fp(r, c === true ? [0, 0] : l) : vp(r, i, l);
  Object.assign(n.style, { top: 0, left: 0, minWidth: null, minHeight: null, maxWidth: f, maxHeight: s, visibility: "visible" });
  const { offsetWidth: w, offsetHeight: x } = n, { elWidth: T, elHeight: p } = u === true || c === true ? { elWidth: Math.max(g.width, w), elHeight: c === true ? Math.max(g.height, x) : x } : { elWidth: w, elHeight: x };
  let y = { maxWidth: f, maxHeight: s };
  (u === true || c === true) && (y.minWidth = g.width + "px", c === true && (y.minHeight = g.height + "px")), Object.assign(n.style, y);
  const b = mp(T, p);
  let C = ld(g, b, a, o);
  if (i === void 0 || l === void 0) zi(C, g, b, a, o);
  else {
    const { top: $, left: O } = C;
    zi(C, g, b, a, o);
    let H = false;
    if (C.top !== $) {
      H = true;
      const L = 2 * l[1];
      g.center = g.top -= L, g.bottom -= L + 2;
    }
    if (C.left !== O) {
      H = true;
      const L = 2 * l[0];
      g.middle = g.left -= L, g.right -= L + 2;
    }
    H === true && (C = ld(g, b, a, o), zi(C, g, b, a, o));
  }
  y = { top: C.top + "px", left: C.left + "px" }, C.maxHeight !== void 0 && (y.maxHeight = C.maxHeight + "px", g.height > C.maxHeight && (y.minHeight = y.maxHeight)), C.maxWidth !== void 0 && (y.maxWidth = C.maxWidth + "px", g.width > C.maxWidth && (y.minWidth = y.maxWidth)), Object.assign(n.style, y), n.scrollTop !== m && (n.scrollTop = m), n.scrollLeft !== h && (n.scrollLeft = h);
}
function zi(e, t, n, l, r) {
  const a = n.bottom, o = n.right, i = so(), u = window.innerHeight - i, c = document.body.clientWidth;
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
var vi = he({ name: "QMenu", inheritAttrs: false, props: { ...Am, ...Pr, ...nt, ...zl, persistent: Boolean, autoClose: Boolean, separateClosePopup: Boolean, noEscDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, fit: Boolean, cover: Boolean, square: Boolean, anchor: { type: String, validator: Oo }, self: { type: String, validator: Oo }, offset: { type: Array, validator: Nm }, scrollTarget: Zl, touchPosition: Boolean, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null } }, emits: [...$r, "click", "escapeKey"], setup(e, { slots: t, emit: n, attrs: l }) {
  let r = null, a, o, i;
  const u = xe(), { proxy: c } = u, { $q: s } = c, f = K(null), h = K(false), m = v(() => e.persistent !== true && e.noRouteDismiss !== true), g = lt(e, s), { registerTick: w, removeTick: x } = _r(), { registerTimeout: T } = Zn(), { transitionProps: p, transitionStyle: y } = di(e), { localScrollTarget: b, changeScrollEvent: C, unconfigureScrollTarget: $ } = Pm(e, D), { anchorEl: O, canShow: H } = Es({ showing: h }), { hide: L } = Lr({ showing: h, canShow: H, handleShow: pe, handleHide: Y, hideOnRouteChange: m, processOnMount: true }), { showPortal: B, hidePortal: N, renderPortal: q } = As(u, f, G, "menu"), E = { anchorEl: O, innerRef: f, onClickOutside(V) {
    if (e.persistent !== true && h.value === true) return L(V), (V.type === "touchstart" || V.target.classList.contains("q-dialog__backdrop")) && je(V), true;
  } }, k = v(() => Vo(e.anchor || (e.cover === true ? "center middle" : "bottom start"), s.lang.rtl)), j = v(() => e.cover === true ? k.value : Vo(e.self || "top start", s.lang.rtl)), U = v(() => (e.square === true ? " q-menu--square" : "") + (g.value === true ? " q-menu--dark q-dark" : "")), W = v(() => e.autoClose === true ? { onClick: F } : {}), X = v(() => h.value === true && e.persistent !== true);
  ge(X, (V) => {
    V === true ? (Vm(A), zm(E)) : ($o(A), Fo(E));
  });
  function ae() {
    Br(() => {
      let V = f.value;
      V && V.contains(document.activeElement) !== true && (V = V.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || V.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || V.querySelector("[autofocus], [data-autofocus]") || V, V.focus({ preventScroll: true }));
    });
  }
  function pe(V) {
    if (r = e.noRefocus === false ? document.activeElement : null, Im(fe), B(), D(), a = void 0, V !== void 0 && (e.touchPosition || e.contextMenu)) {
      const ne = tn(V);
      if (ne.left !== void 0) {
        const { top: be, left: S } = O.value.getBoundingClientRect();
        a = { left: ne.left - S, top: ne.top - be };
      }
    }
    o === void 0 && (o = ge(() => s.screen.width + "|" + s.screen.height + "|" + e.self + "|" + e.anchor + "|" + s.lang.rtl, R)), e.noFocus !== true && document.activeElement.blur(), w(() => {
      R(), e.noFocus !== true && ae();
    }), T(() => {
      s.platform.is.ios === true && (i = e.autoClose, f.value.click()), R(), B(true), n("show", V);
    }, e.transitionDuration);
  }
  function Y(V) {
    x(), N(), _(true), r !== null && (V === void 0 || V.qClickOutside !== true) && ((((V == null ? void 0 : V.type.indexOf("key")) === 0 ? r.closest('[tabindex]:not([tabindex^="-"])') : void 0) || r).focus(), r = null), T(() => {
      N(true), n("hide", V);
    }, e.transitionDuration);
  }
  function _(V) {
    a = void 0, o !== void 0 && (o(), o = void 0), (V === true || h.value === true) && (zu(fe), $(), Fo(E), $o(A)), V !== true && (r = null);
  }
  function D() {
    (O.value !== null || e.scrollTarget !== void 0) && (b.value = Dn(O.value, e.scrollTarget), C(b.value, R));
  }
  function F(V) {
    i !== true ? (Lm(c, V), n("click", V)) : i = false;
  }
  function fe(V) {
    X.value === true && e.noFocus !== true && km(f.value, V.target) !== true && ae();
  }
  function A(V) {
    e.noEscDismiss !== true && (n("escapeKey"), L(V));
  }
  function R() {
    Ps({ targetEl: f.value, offset: e.offset, anchorEl: O.value, anchorOrigin: k.value, selfOrigin: j.value, absoluteOffset: a, fit: e.fit, cover: e.cover, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function G() {
    return d(Ot, p.value, () => h.value === true ? d("div", { role: "menu", ...l, ref: f, tabindex: -1, class: ["q-menu q-position-engine scroll" + U.value, l.class], style: [l.style, y.value], ...W.value }, $e(t.default)) : null);
  }
  return Ke(_), Object.assign(c, { focus: ae, updatePosition: R }), q;
} }), Ni, Ua = 0, Ht = new Array(256);
for (let e = 0; e < 256; e++) Ht[e] = (e + 256).toString(16).substring(1);
var hp = (() => {
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
})(), rd = 4096;
function Ca() {
  (Ni === void 0 || Ua + 16 > rd) && (Ua = 0, Ni = hp(rd));
  const e = Array.prototype.slice.call(Ni, Ua, Ua += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, Ht[e[0]] + Ht[e[1]] + Ht[e[2]] + Ht[e[3]] + "-" + Ht[e[4]] + Ht[e[5]] + "-" + Ht[e[6]] + Ht[e[7]] + "-" + Ht[e[8]] + Ht[e[9]] + "-" + Ht[e[10]] + Ht[e[11]] + Ht[e[12]] + Ht[e[13]] + Ht[e[14]] + Ht[e[15]];
}
function gp(e) {
  return e ?? null;
}
function ad(e, t) {
  return e ?? (t === true ? `f_${Ca()}` : null);
}
function mi({ getValue: e, required: t = true } = {}) {
  if (ln.value === true) {
    const n = K(e !== void 0 ? gp(e()) : null);
    return t === true && n.value === null && ft(() => {
      n.value = `f_${Ca()}`;
    }), e !== void 0 && ge(e, (l) => {
      n.value = ad(l, t);
    }), n;
  }
  return e !== void 0 ? v(() => ad(e(), t)) : K(`f_${Ca()}`);
}
var bp = Object.keys(Ms);
function yp(e) {
  return bp.reduce((t, n) => {
    const l = e[n];
    return l !== void 0 && (t[n] = l), t;
  }, {});
}
var pp = he({ name: "QBtnDropdown", props: { ...Ms, ...zl, modelValue: Boolean, split: Boolean, dropdownIcon: String, contentClass: [Array, String, Object], contentStyle: [Array, String, Object], cover: Boolean, persistent: Boolean, noEscDismiss: Boolean, noRouteDismiss: Boolean, autoClose: Boolean, noRefocus: Boolean, noFocus: Boolean, menuAnchor: { type: String, default: "bottom end" }, menuSelf: { type: String, default: "top end" }, menuOffset: Array, disableMainBtn: Boolean, disableDropdown: Boolean, noIconAnimation: Boolean, toggleAriaLabel: String }, emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), r = K(e.modelValue), a = K(null), o = mi(), i = v(() => {
    const b = { "aria-expanded": r.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": o.value, "aria-label": e.toggleAriaLabel || l.$q.lang.label[r.value === true ? "collapse" : "expand"](e.label) };
    return (e.disable === true || e.split === false && e.disableMainBtn === true || e.disableDropdown === true) && (b["aria-disabled"] = "true"), b;
  }), u = v(() => "q-btn-dropdown__arrow" + (r.value === true && e.noIconAnimation === false ? " rotate-180" : "") + (e.split === false ? " q-btn-dropdown__arrow-container" : "")), c = v(() => Mm(e)), s = v(() => yp(e));
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
    return e.disableDropdown !== true && b.push(d(vi, { ref: a, id: o.value, class: e.contentClass, style: e.contentStyle, cover: e.cover, fit: true, persistent: e.persistent, noEscDismiss: e.noEscDismiss, noRouteDismiss: e.noRouteDismiss, autoClose: e.autoClose, noFocus: e.noFocus, noRefocus: e.noRefocus, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, separateClosePopup: true, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, onBeforeShow: f, onShow: h, onBeforeHide: m, onHide: g }, t.default)), e.split === false ? d(Ze, { class: "q-btn-dropdown q-btn-dropdown--simple", ...s.value, ...i.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: w }, { default: () => $e(t.label, []).concat(b), loading: t.loading }) : d(Em, { class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item", rounded: e.rounded, square: e.square, ...c.value, glossy: e.glossy, stretch: e.stretch }, () => [d(Ze, { class: "q-btn-dropdown--current", ...s.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: x }, { default: t.label, loading: t.loading }), d(Ze, { class: "q-btn-dropdown__arrow-container q-anchor--skip", ...i.value, ...c.value, disable: e.disable === true || e.disableDropdown === true, rounded: e.rounded, color: e.color, textColor: e.textColor, dense: e.dense, size: e.size, padding: e.padding, ripple: e.ripple }, () => b)]);
  };
} }), xn = { name: String };
function Ba(e) {
  return v(() => ({ type: "hidden", name: e.name, value: e.modelValue }));
}
function kl(e = {}) {
  return (t, n, l) => {
    t[n](d("input", { class: "hidden" + (l || ""), ...e.value }));
  };
}
function $s(e) {
  return v(() => e.name || e.for);
}
he({ name: "QBtnToggle", props: { ...xn, modelValue: { required: true }, options: { type: Array, required: true, validator: (e) => e.every((t) => ("label" in t || "icon" in t || "slot" in t) && "value" in t) }, color: String, textColor: String, toggleColor: { type: String, default: "primary" }, toggleTextColor: String, outline: Boolean, flat: Boolean, unelevated: Boolean, rounded: Boolean, push: Boolean, glossy: Boolean, size: String, padding: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, readonly: Boolean, disable: Boolean, stack: Boolean, stretch: Boolean, spread: Boolean, clearable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "clear", "click"], setup(e, { slots: t, emit: n }) {
  const l = v(() => e.options.find((h) => h.value === e.modelValue) !== void 0), r = v(() => ({ type: "hidden", name: e.name, value: e.modelValue })), a = kl(r), o = v(() => Mm(e)), i = v(() => ({ rounded: e.rounded, dense: e.dense, ...o.value })), u = v(() => e.options.map((h, m) => {
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
  return () => d(Em, { class: "q-btn-toggle", ...o.value, rounded: e.rounded, stretch: e.stretch, glossy: e.glossy, spread: e.spread }, f);
} });
var Hm = he({ name: "QCard", props: { ...nt, tag: { type: String, default: "div" }, square: Boolean, flat: Boolean, bordered: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), l = lt(e, n), r = v(() => "q-card" + (l.value === true ? " q-card--dark q-dark" : "") + (e.bordered === true ? " q-card--bordered" : "") + (e.square === true ? " q-card--square no-border-radius" : "") + (e.flat === true ? " q-card--flat no-shadow" : ""));
  return () => d(e.tag, { class: r.value }, $e(t.default));
} }), Ol = he({ name: "QCardSection", props: { tag: { type: String, default: "div" }, horizontal: Boolean }, setup(e, { slots: t }) {
  const n = v(() => `q-card__section q-card__section--${e.horizontal === true ? "horiz row no-wrap" : "vert"}`);
  return () => d(e.tag, { class: n.value }, $e(t.default));
} }), _p = he({ name: "QCardActions", props: { ...Ss, vertical: Boolean }, setup(e, { slots: t }) {
  const n = Cs(e), l = v(() => `q-card__actions ${n.value} q-card__actions--${e.vertical === true ? "vert column" : "horiz row"}`);
  return () => d("div", { class: l.value }, $e(t.default));
} }), Ls = { left: true, right: true, up: true, down: true, horizontal: true, vertical: true }, wp = Object.keys(Ls);
Ls.all = true;
function Do(e) {
  const t = {};
  for (const n of wp) e[n] === true && (t[n] = true);
  return Object.keys(t).length === 0 ? Ls : (t.horizontal === true ? t.left = t.right = true : t.left === true && t.right === true && (t.horizontal = true), t.vertical === true ? t.up = t.down = true : t.up === true && t.down === true && (t.vertical = true), t.horizontal === true && t.vertical === true && (t.all = true), t);
}
var xp = ["INPUT", "TEXTAREA"];
function Io(e, t) {
  return t.event === void 0 && e.target !== void 0 && e.target.draggable !== true && typeof t.handler == "function" && xp.includes(e.target.nodeName.toUpperCase()) === false && (e.qClonedBy === void 0 || e.qClonedBy.indexOf(t.uid) === -1);
}
function Sp(e) {
  const t = [0.06, 6, 50];
  return typeof e == "string" && e.length && e.split(":").forEach((n, l) => {
    const r = parseFloat(n);
    r && (t[l] = r);
  }), t;
}
var Cp = Pn({ name: "touch-swipe", beforeMount(e, { value: t, arg: n, modifiers: l }) {
  if (l.mouse !== true && De.has.touch !== true) return;
  const r = l.mouseCapture === true ? "Capture" : "", a = { handler: t, sensitivity: Sp(n), direction: Do(l), noop: xt, mouseStart(o) {
    Io(o, a) && oi(o) && (kt(a, "temp", [[document, "mousemove", "move", `notPassive${r}`], [document, "mouseup", "end", "notPassiveCapture"]]), a.start(o, true));
  }, touchStart(o) {
    if (Io(o, a)) {
      const i = o.target;
      kt(a, "temp", [[i, "touchmove", "move", "notPassiveCapture"], [i, "touchcancel", "end", "notPassiveCapture"], [i, "touchend", "end", "notPassiveCapture"]]), a.start(o);
    }
  }, start(o, i) {
    De.is.firefox === true && br(e, true);
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
    a.direction.vertical === true && s < h && s < 100 && g > a.sensitivity[0] && (a.event.dir = f < 0 ? "up" : "down"), a.direction.horizontal === true && s > h && h < 100 && m > a.sensitivity[0] && (a.event.dir = c < 0 ? "left" : "right"), a.direction.up === true && s < h && f < 0 && s < 100 && g > a.sensitivity[0] && (a.event.dir = "up"), a.direction.down === true && s < h && f > 0 && s < 100 && g > a.sensitivity[0] && (a.event.dir = "down"), a.direction.left === true && s > h && c < 0 && h < 100 && m > a.sensitivity[0] && (a.event.dir = "left"), a.direction.right === true && s > h && c > 0 && h < 100 && m > a.sensitivity[0] && (a.event.dir = "right"), a.event.dir !== false ? (je(o), a.event.mouse === true && (document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), En(), a.styleCleanup = (w) => {
      a.styleCleanup = void 0, document.body.classList.remove("non-selectable");
      const x = () => {
        document.body.classList.remove("no-pointer-events--children");
      };
      w === true ? setTimeout(x, 50) : x();
    }), a.handler({ evt: o, touch: a.event.mouse !== true, mouse: a.event.mouse, direction: a.event.dir, duration: i, distance: { x: s, y: h } })) : a.end(o);
  }, end(o) {
    var _a3;
    a.event !== void 0 && (Yt(a, "temp"), De.is.firefox === true && br(e, false), (_a3 = a.styleCleanup) == null ? void 0 : _a3.call(a, true), o !== void 0 && a.event.dir !== false && je(o), a.event = void 0);
  } };
  if (e.__qtouchswipe = a, l.mouse === true) {
    const o = l.mouseCapture === true || l.mousecapture === true ? "Capture" : "";
    kt(a, "main", [[e, "mousedown", "mouseStart", `passive${o}`]]);
  }
  De.has.touch === true && kt(a, "main", [[e, "touchstart", "touchStart", `passive${l.capture === true ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const n = e.__qtouchswipe;
  n !== void 0 && (t.oldValue !== t.value && (typeof t.value != "function" && n.end(), n.handler = t.value), n.direction = Do(t.modifiers));
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qtouchswipe;
  t !== void 0 && (Yt(t, "main"), Yt(t, "temp"), De.is.firefox === true && br(e, false), (_a3 = t.styleCleanup) == null ? void 0 : _a3.call(t), delete e.__qtouchswipe);
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
var Bs = { name: { required: true }, disable: Boolean }, od = { setup(e, { slots: t }) {
  return () => d("div", { class: "q-panel scroll", role: "tabpanel" }, $e(t.default));
} }, Fs = { modelValue: { required: true }, animated: Boolean, infinite: Boolean, swipeable: Boolean, vertical: Boolean, transitionPrev: String, transitionNext: String, transitionDuration: { type: [String, Number], default: 300 }, keepAlive: Boolean, keepAliveInclude: [String, Array, RegExp], keepAliveExclude: [String, Array, RegExp], keepAliveMax: Number }, Os = ["update:modelValue", "beforeTransition", "transition"];
function Vs() {
  const { props: e, emit: t, proxy: n } = xe(), { getCache: l } = Fa(), { registerTimeout: r } = Zn();
  let a, o;
  const i = K(null), u = { value: null };
  function c(k) {
    const j = e.vertical === true ? "up" : "left";
    H((n.$q.lang.rtl === true ? -1 : 1) * (k.direction === j ? 1 : -1));
  }
  const s = v(() => [[Cp, c, void 0, { horizontal: e.vertical !== true, vertical: e.vertical, mouse: true }]]), f = v(() => e.transitionPrev || `slide-${e.vertical === true ? "down" : "right"}`), h = v(() => e.transitionNext || `slide-${e.vertical === true ? "up" : "left"}`), m = v(() => `--q-transition-duration: ${e.transitionDuration}ms`), g = v(() => typeof e.modelValue == "string" || typeof e.modelValue == "number" ? e.modelValue : String(e.modelValue)), w = v(() => ({ include: e.keepAliveInclude, exclude: e.keepAliveExclude, max: e.keepAliveMax })), x = v(() => e.keepAliveInclude !== void 0 || e.keepAliveExclude !== void 0);
  ge(() => e.modelValue, (k, j) => {
    const U = b(k) === true ? C(k) : -1;
    o !== true && O(U === -1 ? 0 : U < C(j) ? -1 : 1), u.value !== U && (u.value = U, t("beforeTransition", k, j), r(() => {
      t("transition", k, j);
    }, e.transitionDuration));
  });
  function T() {
    H(1);
  }
  function p() {
    H(-1);
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
  function O(k) {
    const j = k !== 0 && e.animated === true && u.value !== -1 ? "q-transition--" + (k === -1 ? f.value : h.value) : null;
    i.value !== j && (i.value = j);
  }
  function H(k, j = u.value) {
    let U = j + k;
    for (; U !== -1 && U < a.length; ) {
      const W = a[U];
      if (W !== void 0 && W.props.disable !== "" && W.props.disable !== true) {
        O(k), o = true, t("update:modelValue", W.props.name), setTimeout(() => {
          o = false;
        });
        return;
      }
      U += k;
    }
    e.infinite === true && a.length !== 0 && j !== -1 && j !== a.length && H(k, k === -1 ? a.length : -1);
  }
  function L() {
    const k = C(e.modelValue);
    return u.value !== k && (u.value = k), true;
  }
  function B() {
    const k = b(e.modelValue) === true && L() && a[u.value];
    return e.keepAlive === true ? [d(_v, w.value, [d(x.value === true ? l(g.value, () => ({ ...od, name: g.value })) : od, { key: g.value, style: m.value }, () => k)])] : [d("div", { class: "q-panel scroll", style: m.value, key: g.value, role: "tabpanel" }, [k])];
  }
  function N() {
    if (a.length !== 0) return e.animated === true ? [d(Ot, { name: i.value }, B)] : B();
  }
  function q(k) {
    return a = ks($e(k.default, [])).filter((j) => j.props !== null && j.props.slot === void 0 && b(j.props.name) === true), a.length;
  }
  function E() {
    return a;
  }
  return Object.assign(n, { next: T, previous: p, goTo: y }), { panelIndex: u, panelDirectives: s, updatePanelsList: q, updatePanelIndex: L, getPanelContent: N, getEnabledPanels: $, getPanels: E, isValidPanelName: b, keepAliveProps: w, needsUniqueKeepAliveWrapper: x, goToPanelByOffset: H, goToPanel: y, nextPanel: T, previousPanel: p };
}
var Dr = 0, Ds = { fullscreen: Boolean, noRouteFullscreenExit: Boolean }, Is = ["update:fullscreen", "fullscreen"];
function zs() {
  const e = xe(), { props: t, emit: n, proxy: l } = e;
  let r, a, o;
  const i = K(false);
  Ts(e) === true && ge(() => l.$route.fullPath, () => {
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
    i.value !== true && (i.value = true, o = l.$el.parentNode, o.replaceChild(a, l.$el), document.body.appendChild(l.$el), Dr++, Dr === 1 && document.body.classList.add("q-body--fullscreen-mixin"), r = { handler: s }, wa.add(r));
  }
  function s() {
    i.value === true && (r !== void 0 && (wa.remove(r), r = void 0), o.replaceChild(l.$el, a), i.value = false, Dr = Math.max(0, Dr - 1), Dr === 0 && (document.body.classList.remove("q-body--fullscreen-mixin"), l.$el.scrollIntoView !== void 0 && setTimeout(() => {
      l.$el.scrollIntoView();
    })));
  }
  return ei(() => {
    a = document.createElement("span");
  }), ft(() => {
    t.fullscreen === true && c();
  }), Ke(s), Object.assign(l, { toggleFullscreen: u, setFullscreen: c, exitFullscreen: s }), { inFullscreen: i, toggleFullscreen: u };
}
var kp = ["top", "right", "bottom", "left"], Tp = ["regular", "flat", "outline", "push", "unelevated"];
he({ name: "QCarousel", props: { ...nt, ...Fs, ...Ds, transitionPrev: { type: String, default: "fade" }, transitionNext: { type: String, default: "fade" }, height: String, padding: Boolean, controlColor: String, controlTextColor: String, controlType: { type: String, validator: (e) => Tp.includes(e), default: "flat" }, autoplay: [Number, Boolean], arrows: Boolean, prevIcon: String, nextIcon: String, navigation: Boolean, navigationPosition: { type: String, validator: (e) => kp.includes(e) }, navigationIcon: String, navigationActiveIcon: String, thumbnails: Boolean }, emits: [...Is, ...Os], setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), l = lt(e, n);
  let r = null, a;
  const { updatePanelsList: o, getPanelContent: i, panelDirectives: u, goToPanel: c, previousPanel: s, nextPanel: f, getEnabledPanels: h, panelIndex: m } = Vs(), { inFullscreen: g } = zs(), w = v(() => g.value !== true && e.height !== void 0 ? { height: e.height } : {}), x = v(() => e.vertical === true ? "vertical" : "horizontal"), T = v(() => e.navigationPosition || (e.vertical === true ? "right" : "bottom")), p = v(() => `q-carousel q-panel-parent q-carousel--with${e.padding === true ? "" : "out"}-padding` + (g.value === true ? " fullscreen" : "") + (l.value === true ? " q-carousel--dark q-dark" : "") + (e.arrows === true ? ` q-carousel--arrows-${x.value}` : "") + (e.navigation === true ? ` q-carousel--navigation-${T.value}` : "")), y = v(() => {
    const B = [e.prevIcon || n.iconSet.carousel[e.vertical === true ? "up" : "left"], e.nextIcon || n.iconSet.carousel[e.vertical === true ? "down" : "right"]];
    return e.vertical === false && n.lang.rtl === true ? B.reverse() : B;
  }), b = v(() => e.navigationIcon || n.iconSet.carousel.navigationIcon), C = v(() => e.navigationActiveIcon || b.value), $ = v(() => ({ color: e.controlColor, textColor: e.controlTextColor, round: true, [e.controlType]: true, dense: true }));
  ge(() => e.modelValue, () => {
    e.autoplay && O();
  }), ge(() => e.autoplay, (B) => {
    B ? O() : r !== null && (clearTimeout(r), r = null);
  });
  function O() {
    const B = xa(e.autoplay) === true ? Math.abs(e.autoplay) : 5e3;
    r !== null && clearTimeout(r), r = setTimeout(() => {
      r = null, B >= 0 ? f() : s();
    }, B);
  }
  ft(() => {
    e.autoplay && O();
  }), Ke(() => {
    r !== null && clearTimeout(r);
  });
  function H(B, N) {
    return d("div", { class: `q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${B} q-carousel__navigation--${T.value}` + (e.controlColor !== void 0 ? ` text-${e.controlColor}` : "") }, [d("div", { class: "q-carousel__navigation-inner flex flex-center no-wrap" }, h().map(N))]);
  }
  function L() {
    const B = [];
    if (e.navigation === true) {
      const N = t["navigation-icon"] !== void 0 ? t["navigation-icon"] : (E) => d(Ze, { key: "nav" + E.name, class: `q-carousel__navigation-icon q-carousel__navigation-icon--${E.active === true ? "" : "in"}active`, ...E.btnProps, onClick: E.onClick }), q = a - 1;
      B.push(H("buttons", (E, k) => {
        const j = E.props.name, U = m.value === k;
        return N({ index: k, maxIndex: q, name: j, active: U, btnProps: { icon: U === true ? C.value : b.value, size: "sm", ...$.value }, onClick: () => {
          c(j);
        } });
      }));
    } else if (e.thumbnails === true) {
      const N = e.controlColor !== void 0 ? ` text-${e.controlColor}` : "";
      B.push(H("thumbnails", (q) => {
        const E = q.props;
        return d("img", { key: "tmb#" + E.name, class: `q-carousel__thumbnail q-carousel__thumbnail--${E.name === e.modelValue ? "" : "in"}active` + N, src: E.imgSrc || E["img-src"], onClick: () => {
          c(E.name);
        } });
      }));
    }
    return e.arrows === true && m.value >= 0 && ((e.infinite === true || m.value > 0) && B.push(d("div", { key: "prev", class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${x.value} absolute flex flex-center` }, [d(Ze, { icon: y.value[0], ...$.value, onClick: s })])), (e.infinite === true || m.value < a - 1) && B.push(d("div", { key: "next", class: `q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${x.value} absolute flex flex-center` }, [d(Ze, { icon: y.value[1], ...$.value, onClick: f })]))), Tt(t.control, B);
  }
  return () => (a = o(t), d("div", { class: p.value, style: w.value }, [_n("div", { class: "q-carousel__slides-container" }, i(), "sl-cont", e.swipeable, () => u.value)].concat(L())));
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
    t.name !== void 0 ? f.push(d("div", { class: `q-message-name q-message-name--${n.value}` }, t.name())) : e.name !== void 0 && f.push(d("div", { class: `q-message-name q-message-name--${n.value}`, [i.value.name]: e.name })), t.default !== void 0 ? f.push(c(ks(t.default()), true)) : e.text !== void 0 && f.push(c(e.text)), s.push(d("div", { class: o.value }, f));
    const h = [];
    return t.label !== void 0 ? h.push(d("div", { class: "q-message-label" }, t.label())) : e.label !== void 0 && h.push(d("div", { class: "q-message-label", [i.value.label]: e.label })), h.push(d("div", { class: a.value }, s)), d("div", { class: `q-message q-message-${n.value}` }, h);
  };
} });
function jm(e, t) {
  const n = K(null), l = v(() => e.disable === true ? null : d("span", { ref: n, class: "no-outline", tabindex: -1 }));
  function r(a) {
    const o = t.value;
    (a == null ? void 0 : a.qAvoidFocus) !== true && ((a == null ? void 0 : a.type.indexOf("key")) === 0 ? document.activeElement !== o && (o == null ? void 0 : o.contains(document.activeElement)) === true && o.focus() : n.value !== null && (a === void 0 || (o == null ? void 0 : o.contains(a.target)) === true) && n.value.focus());
  }
  return { refocusTargetEl: l, refocusTarget: r };
}
var Um = { xs: 30, sm: 35, md: 40, lg: 50, xl: 60 }, Qm = { ...nt, ...el, ...xn, modelValue: { required: true, default: null }, val: {}, trueValue: { default: true }, falseValue: { default: false }, indeterminateValue: { default: null }, checkedIcon: String, uncheckedIcon: String, indeterminateIcon: String, toggleOrder: { type: String, validator: (e) => e === "tf" || e === "ft" }, toggleIndeterminate: Boolean, label: String, leftLabel: Boolean, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, Km = ["update:modelValue"];
function Wm(e, t) {
  const { props: n, slots: l, emit: r, proxy: a } = xe(), { $q: o } = a, i = lt(n, o), u = K(null), { refocusTargetEl: c, refocusTarget: s } = jm(n, u), f = tl(n, Um), h = v(() => n.val !== void 0 && Array.isArray(n.modelValue)), m = v(() => {
    const q = Xe(n.val);
    return h.value === true ? n.modelValue.findIndex((E) => Xe(E) === q) : -1;
  }), g = v(() => h.value === true ? m.value !== -1 : Xe(n.modelValue) === Xe(n.trueValue)), w = v(() => h.value === true ? m.value === -1 : Xe(n.modelValue) === Xe(n.falseValue)), x = v(() => g.value === false && w.value === false), T = v(() => n.disable === true ? -1 : n.tabindex || 0), p = v(() => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (n.disable === true ? " disabled" : "") + (i.value === true ? ` q-${e}--dark` : "") + (n.dense === true ? ` q-${e}--dense` : "") + (n.leftLabel === true ? " reverse" : "")), y = v(() => {
    const q = g.value === true ? "truthy" : w.value === true ? "falsy" : "indet", E = n.color !== void 0 && (n.keepColor === true || (e === "toggle" ? g.value === true : w.value !== true)) ? ` text-${n.color}` : "";
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${q}${E}`;
  }), b = v(() => {
    const q = { type: "checkbox" };
    return n.name !== void 0 && Object.assign(q, { ".checked": g.value, "^checked": g.value === true ? "checked" : void 0, name: n.name, value: h.value === true ? n.val : n.trueValue }), q;
  }), C = kl(b), $ = v(() => {
    const q = { tabindex: T.value, role: e === "toggle" ? "switch" : "checkbox", "aria-label": n.label, "aria-checked": x.value === true ? "mixed" : g.value === true ? "true" : "false" };
    return n.disable === true && (q["aria-disabled"] = "true"), q;
  });
  function O(q) {
    q !== void 0 && (je(q), s(q)), n.disable !== true && r("update:modelValue", H(), q);
  }
  function H() {
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
  function L(q) {
    (q.keyCode === 13 || q.keyCode === 32) && je(q);
  }
  function B(q) {
    (q.keyCode === 13 || q.keyCode === 32) && O(q);
  }
  const N = t(g, x);
  return Object.assign(a, { toggle: O }), () => {
    const q = N();
    n.disable !== true && C(q, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
    const E = [d("div", { class: y.value, style: f.value, "aria-hidden": "true" }, q)];
    c.value !== null && E.push(c.value);
    const k = n.label !== void 0 ? Tt(l.default, [n.label]) : $e(l.default);
    return k !== void 0 && E.push(d("div", { class: `q-${e}__label q-anchor--skip` }, k)), d("div", { ref: u, class: p.value, ...$.value, onClick: O, onKeydown: L, onKeyup: B }, E);
  };
}
var qp = () => d("div", { key: "svg", class: "q-checkbox__bg absolute" }, [d("svg", { class: "q-checkbox__svg fit absolute-full", viewBox: "0 0 24 24" }, [d("path", { class: "q-checkbox__truthy", fill: "none", d: "M1.73,12.91 8.1,19.28 22.79,4.59" }), d("path", { class: "q-checkbox__indet", d: "M4,14H20V10H4" })])]), sa = he({ name: "QCheckbox", props: Qm, emits: Km, setup(e) {
  const t = qp();
  function n(l, r) {
    const a = v(() => (l.value === true ? e.checkedIcon : r.value === true ? e.indeterminateIcon : e.uncheckedIcon) || null);
    return () => a.value !== null ? [d("div", { key: "icon", class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap" }, [d(et, { class: "q-checkbox__icon", name: a.value })])] : [t];
  }
  return Wm("checkbox", n);
} }), Mp = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, Ym = he({ name: "QChip", props: { ...nt, ...el, dense: Boolean, icon: String, iconRight: String, iconRemove: String, iconSelected: String, label: [String, Number], color: String, textColor: String, modelValue: { type: Boolean, default: true }, selected: { type: Boolean, default: null }, square: Boolean, outline: Boolean, clickable: Boolean, removable: Boolean, removeAriaLabel: String, tabindex: [String, Number], disable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "update:selected", "remove", "click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = xe(), r = lt(e, l), a = tl(e, Mp), o = v(() => e.selected === true || e.icon !== void 0), i = v(() => e.selected === true ? e.iconSelected || l.iconSet.chip.selected : e.icon), u = v(() => e.iconRemove || l.iconSet.chip.remove), c = v(() => e.disable === false && (e.clickable === true || e.selected !== null)), s = v(() => {
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
    return x.push(d("div", { class: "q-chip__content col row no-wrap items-center q-anchor--skip" }, xs(t.default, T))), e.iconRight && x.push(d(et, { class: "q-chip__icon q-chip__icon--right", name: e.iconRight })), e.removable === true && x.push(d(et, { class: "q-chip__icon q-chip__icon--remove cursor-pointer", name: u.value, ...f.value.remove, onClick: g, onKeyup: g })), x;
  }
  return () => {
    if (e.modelValue === false) return;
    const x = { class: s.value, style: a.value };
    return c.value === true && Object.assign(x, f.value.chip, { onClick: m, onKeyup: h }), _n("div", x, w(), "ripple", e.ripple !== false && e.disable !== true, () => [[ci, e.ripple]]);
  };
} }), Ns = { ...el, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, color: String, centerColor: String, trackColor: String, fontSize: String, rounded: Boolean, thickness: { type: Number, default: 0.2, validator: (e) => e >= 0 && e <= 1 }, angle: { type: Number, default: 0 }, showValue: Boolean, reverse: Boolean, instantFeedback: Boolean }, Hu = 50, Xm = 2 * Hu, Gm = Xm * Math.PI, Ep = Math.round(Gm * 1e3) / 1e3, Zm = he({ name: "QCircularProgress", props: { ...Ns, value: { type: Number, default: 0 }, animationSpeed: { type: [String, Number], default: 600 }, indeterminate: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), l = tl(e), r = v(() => {
    const m = (n.lang.rtl === true ? -1 : 1) * e.angle;
    return { transform: e.reverse !== (n.lang.rtl === true) ? `scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90 - m}deg)` : `rotate3d(0, 0, 1, ${m - 90}deg)` };
  }), a = v(() => e.instantFeedback !== true && e.indeterminate !== true ? { transition: `stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease` } : ""), o = v(() => Xm / (1 - e.thickness / 2)), i = v(() => `${o.value / 2} ${o.value / 2} ${o.value} ${o.value}`), u = v(() => ct(e.value, e.min, e.max)), c = v(() => e.max - e.min), s = v(() => e.thickness / 2 * o.value), f = v(() => {
    const m = (e.max - u.value) / c.value, g = e.rounded === true && u.value < e.max && m < 0.25 ? s.value / 2 * (1 - m / 0.25) : 0;
    return Gm * m + g;
  });
  function h({ thickness: m, offset: g, color: w, cls: x, rounded: T }) {
    return d("circle", { class: "q-circular-progress__" + x + (w !== void 0 ? ` text-${w}` : ""), style: a.value, fill: "transparent", stroke: "currentColor", "stroke-width": m, "stroke-dasharray": Ep, "stroke-dashoffset": g, "stroke-linecap": T, cx: o.value, cy: o.value, r: Hu });
  }
  return () => {
    const m = [];
    e.centerColor !== void 0 && e.centerColor !== "transparent" && m.push(d("circle", { class: `q-circular-progress__center text-${e.centerColor}`, fill: "currentColor", r: Hu - s.value / 2, cx: o.value, cy: o.value })), e.trackColor !== void 0 && e.trackColor !== "transparent" && m.push(h({ cls: "track", thickness: s.value, offset: 0, color: e.trackColor })), m.push(h({ cls: "circle", thickness: s.value, offset: f.value, color: e.color, rounded: e.rounded === true ? "round" : void 0 }));
    const g = [d("svg", { class: "q-circular-progress__svg", style: r.value, viewBox: i.value, "aria-hidden": "true" }, m)];
    return e.showValue === true && g.push(d("div", { class: "q-circular-progress__text absolute-full row flex-center content-center", style: { fontSize: e.fontSize } }, t.default !== void 0 ? t.default() : [d("div", u.value)])), d("div", { class: `q-circular-progress q-circular-progress--${e.indeterminate === true ? "in" : ""}determinate`, style: l.value, role: "progressbar", "aria-valuemin": e.min, "aria-valuemax": e.max, "aria-valuenow": e.indeterminate === true ? void 0 : u.value }, xs(t.internal, g));
  };
} });
function Hi(e, t, n) {
  const l = tn(e);
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
var Rp = 0, bn = Pn({ name: "touch-pan", beforeMount(e, { value: t, modifiers: n }) {
  if (n.mouse !== true && De.has.touch !== true) return;
  function l(a, o) {
    n.mouse === true && o === true ? je(a) : (n.stop === true && wt(a), n.prevent === true && Dt(a));
  }
  const r = { uid: "qvtp_" + Rp++, handler: t, modifiers: n, direction: Do(n), noop: xt, mouseStart(a) {
    Io(a, r) && oi(a) && (kt(r, "temp", [[document, "mousemove", "move", "notPassiveCapture"], [document, "mouseup", "end", "passiveCapture"]]), r.start(a, true));
  }, touchStart(a) {
    if (Io(a, r)) {
      const o = a.target;
      kt(r, "temp", [[o, "touchmove", "move", "notPassiveCapture"], [o, "touchcancel", "end", "passiveCapture"], [o, "touchend", "end", "passiveCapture"]]), r.start(a);
    }
  }, start(a, o) {
    if (De.is.firefox === true && br(e, true), r.lastEvt = a, o === true || n.stop === true) {
      if (r.direction.all !== true && (o !== true || r.modifiers.mouseAllDir !== true && r.modifiers.mousealldir !== true)) {
        const c = a.type.indexOf("mouse") !== -1 ? new MouseEvent(a.type, a) : new TouchEvent(a.type, a);
        a.defaultPrevented === true && Dt(c), a.cancelBubble === true && wt(c), Object.assign(c, { qKeyEvent: a.qKeyEvent, qClickOutside: a.qClickOutside, qAnchorHandled: a.qAnchorHandled, qClonedBy: a.qClonedBy === void 0 ? [r.uid] : a.qClonedBy.concat(r.uid) }), r.initialEvent = { target: a.target, event: c };
      }
      wt(a);
    }
    const { left: i, top: u } = tn(a);
    r.event = { x: i, y: u, time: Date.now(), mouse: o === true, detected: false, isFirst: true, isFinal: false, lastX: i, lastY: u };
  }, move(a) {
    if (r.event === void 0) return;
    const o = tn(a), i = o.left - r.event.x, u = o.top - r.event.y;
    if (i === 0 && u === 0) return;
    r.lastEvt = a;
    const c = r.event.mouse === true, s = () => {
      l(a, c);
      let m;
      n.preserveCursor !== true && n.preservecursor !== true && (m = document.documentElement.style.cursor || "", document.documentElement.style.cursor = "grabbing"), c === true && document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), En(), r.styleCleanup = (g) => {
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
      const { payload: m, synthetic: g } = Hi(a, r, false);
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
      if (Yt(r, "temp"), De.is.firefox === true && br(e, false), o === true) (_a3 = r.styleCleanup) == null ? void 0 : _a3.call(r), r.event.detected !== true && r.initialEvent !== void 0 && r.initialEvent.target.dispatchEvent(r.initialEvent.event);
      else if (r.event.detected === true) {
        r.event.isFirst === true && r.handler(Hi(a === void 0 ? r.lastEvt : a, r).payload);
        const { payload: i } = Hi(a === void 0 ? r.lastEvt : a, r, true), u = () => {
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
  n !== void 0 && (t.oldValue !== t.value && (typeof value != "function" && n.end(), n.handler = t.value), n.direction = Do(t.modifiers));
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qtouchpan;
  t !== void 0 && (t.event !== void 0 && t.end(), Yt(t, "main"), Yt(t, "temp"), De.is.firefox === true && br(e, false), (_a3 = t.styleCleanup) == null ? void 0 : _a3.call(t), delete e.__qtouchpan);
} }), id = "q-slider__marker-labels", Ap = (e) => ({ value: e }), Pp = ({ marker: e }) => d("div", { key: e.value, style: e.style, class: e.classes }, e.label), Hs = [34, 37, 40, 33, 39, 38], Jm = { ...nt, ...xn, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, snap: Boolean, vertical: Boolean, reverse: Boolean, color: String, markerLabelsClass: String, label: Boolean, labelColor: String, labelTextColor: String, labelAlways: Boolean, switchLabelSide: Boolean, markers: [Boolean, Number], markerLabels: [Boolean, Array, Object, Function], switchMarkerLabelsSide: Boolean, trackImg: String, trackColor: String, innerTrackImg: String, innerTrackColor: String, selectionColor: String, selectionImg: String, thumbSize: { type: String, default: "20px" }, trackSize: { type: String, default: "4px" }, disable: Boolean, readonly: Boolean, dense: Boolean, tabindex: [String, Number], thumbColor: String, thumbPath: { type: String, default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0" } }, eh = ["pan", "update:modelValue", "change"];
function th({ updateValue: e, updatePosition: t, getDragging: n, formAttrs: l }) {
  const { props: r, emit: a, slots: o, proxy: { $q: i } } = xe(), u = lt(r, i), c = kl(l), s = K(false), f = K(false), h = K(false), m = K(false), g = v(() => r.vertical === true ? "--v" : "--h"), w = v(() => "-" + (r.switchLabelSide === true ? "switched" : "standard")), x = v(() => r.vertical === true ? r.reverse === true : r.reverse !== (i.lang.rtl === true)), T = v(() => isNaN(r.innerMin) === true || r.innerMin < r.min ? r.min : r.innerMin), p = v(() => isNaN(r.innerMax) === true || r.innerMax > r.max ? r.max : r.innerMax), y = v(() => r.disable !== true && r.readonly !== true && T.value < p.value), b = v(() => {
    if (r.step === 0) return (_e2) => _e2;
    const oe = (String(r.step).trim().split(".")[1] || "").length;
    return (_e2) => parseFloat(_e2.toFixed(oe));
  }), C = v(() => r.step === 0 ? 1 : r.step), $ = v(() => y.value === true ? r.tabindex || 0 : -1), O = v(() => r.max - r.min), H = v(() => p.value - T.value), L = v(() => be(T.value)), B = v(() => be(p.value)), N = v(() => r.vertical === true ? x.value === true ? "bottom" : "top" : x.value === true ? "right" : "left"), q = v(() => r.vertical === true ? "height" : "width"), E = v(() => r.vertical === true ? "width" : "height"), k = v(() => r.vertical === true ? "vertical" : "horizontal"), j = v(() => {
    const oe = { role: "slider", "aria-valuemin": T.value, "aria-valuemax": p.value, "aria-orientation": k.value, "data-step": r.step };
    return r.disable === true ? oe["aria-disabled"] = "true" : r.readonly === true && (oe["aria-readonly"] = "true"), oe;
  }), U = v(() => `q-slider q-slider${g.value} q-slider--${s.value === true ? "" : "in"}active inline no-wrap ` + (r.vertical === true ? "row" : "column") + (r.disable === true ? " disabled" : " q-slider--enabled" + (y.value === true ? " q-slider--editable" : "")) + (h.value === "both" ? " q-slider--focus" : "") + (r.label || r.labelAlways === true ? " q-slider--label" : "") + (r.labelAlways === true ? " q-slider--label-always" : "") + (u.value === true ? " q-slider--dark" : "") + (r.dense === true ? " q-slider--dense q-slider--dense" + g.value : ""));
  function W(oe) {
    const _e2 = "q-slider__" + oe;
    return `${_e2} ${_e2}${g.value} ${_e2}${g.value}${w.value}`;
  }
  function X(oe) {
    const _e2 = "q-slider__" + oe;
    return `${_e2} ${_e2}${g.value}`;
  }
  const ae = v(() => {
    const oe = r.selectionColor || r.color;
    return "q-slider__selection absolute" + (oe !== void 0 ? ` text-${oe}` : "");
  }), pe = v(() => X("markers") + " absolute overflow-hidden"), Y = v(() => X("track-container")), _ = v(() => W("pin")), D = v(() => W("label")), F = v(() => W("text-container")), fe = v(() => W("marker-labels-container") + (r.markerLabelsClass !== void 0 ? ` ${r.markerLabelsClass}` : "")), A = v(() => "q-slider__track relative-position no-outline" + (r.trackColor !== void 0 ? ` bg-${r.trackColor}` : "")), R = v(() => {
    const oe = { [E.value]: r.trackSize };
    return r.trackImg !== void 0 && (oe.backgroundImage = `url(${r.trackImg}) !important`), oe;
  }), G = v(() => "q-slider__inner absolute" + (r.innerTrackColor !== void 0 ? ` bg-${r.innerTrackColor}` : "")), V = v(() => {
    const oe = B.value - L.value, _e2 = { [N.value]: `${100 * L.value}%`, [q.value]: oe === 0 ? "2px" : `${100 * oe}%` };
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
    return O.value === 0 ? 0 : (oe - r.min) / O.value;
  }
  function S(oe, _e2) {
    const Ce = tn(oe), Oe = r.vertical === true ? ct((Ce.top - _e2.top) / _e2.height, 0, 1) : ct((Ce.left - _e2.left) / _e2.width, 0, 1);
    return ct(x.value === true ? 1 - Oe : Oe, L.value, B.value);
  }
  const M = v(() => xa(r.markers) === true ? r.markers : C.value), I = v(() => {
    const oe = [], _e2 = M.value, Ce = r.max;
    let Oe = r.min;
    do
      oe.push(Oe), Oe += _e2;
    while (Oe < Ce);
    return oe.push(Ce), oe;
  }), ee = v(() => {
    const oe = ` ${id}${g.value}-`;
    return id + `${oe}${r.switchMarkerLabelsSide === true ? "switched" : "standard"}${oe}${x.value === true ? "rtl" : "ltr"}`;
  }), le = v(() => r.markerLabels === false ? null : se(r.markerLabels).map((oe, _e2) => ({ index: _e2, value: oe.value, label: oe.label || oe.value, classes: ee.value + (oe.classes !== void 0 ? " " + oe.classes : ""), style: { ...me(oe.value), ...oe.style || {} } }))), P = v(() => ({ markerList: le.value, markerMap: ce.value, classes: ee.value, getStyle: me })), te = v(() => {
    const oe = H.value === 0 ? "2px" : 100 * M.value / H.value;
    return { ...V.value, backgroundSize: r.vertical === true ? `2px ${oe}%` : `${oe}% 2px` };
  });
  function se(oe) {
    if (oe === false) return null;
    if (oe === true) return I.value.map(Ap);
    if (typeof oe == "function") return I.value.map((Ce) => {
      const Oe = oe(Ce);
      return $t(Oe) === true ? { ...Oe, value: Ce } : { value: Ce, label: Oe };
    });
    const _e2 = ({ value: Ce }) => Ce >= r.min && Ce <= r.max;
    return Array.isArray(oe) === true ? oe.map((Ce) => $t(Ce) === true ? Ce : { value: Ce }).filter(_e2) : Object.keys(oe).map((Ce) => {
      const Oe = oe[Ce], Re = Number(Ce);
      return $t(Oe) === true ? { ...Oe, value: Re } : { value: Re, label: Oe };
    }).filter(_e2);
  }
  function me(oe) {
    return { [N.value]: `${100 * (oe - r.min) / O.value}%` };
  }
  const ce = v(() => {
    if (r.markerLabels === false) return null;
    const oe = {};
    return le.value.forEach((_e2) => {
      oe[_e2.value] = _e2;
    }), oe;
  });
  function re() {
    if (o["marker-label-group"] !== void 0) return o["marker-label-group"](P.value);
    const oe = o["marker-label"] || Pp;
    return le.value.map((_e2) => oe({ marker: _e2, ...P.value }));
  }
  const Q = v(() => [[bn, ie, void 0, { [k.value]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
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
    Hs.includes(oe.keyCode) && e(true);
  }
  function Ve(oe) {
    if (r.vertical === true) return null;
    const _e2 = i.lang.rtl !== r.reverse ? 1 - oe : oe;
    return { transform: `translateX(calc(${2 * _e2 - 1} * ${r.thumbSize} / 2 + ${50 - 100 * _e2}%))` };
  }
  function ue(oe) {
    const _e2 = v(() => f.value === false && (h.value === oe.focusValue || h.value === "both") ? " q-slider--focus" : ""), Ce = v(() => `q-slider__thumb q-slider__thumb${g.value} q-slider__thumb${g.value}-${x.value === true ? "rtl" : "ltr"} absolute non-selectable` + _e2.value + (oe.thumbColor.value !== void 0 ? ` text-${oe.thumbColor.value}` : "")), Oe = v(() => ({ width: r.thumbSize, height: r.thumbSize, [N.value]: `${100 * oe.ratio.value}%`, zIndex: h.value === oe.focusValue ? 2 : void 0 })), Re = v(() => oe.labelColor.value !== void 0 ? ` text-${oe.labelColor.value}` : ""), Ye = v(() => Ve(oe.ratio.value)), it = v(() => "q-slider__text" + (oe.labelTextColor.value !== void 0 ? ` text-${oe.labelTextColor.value}` : ""));
    return () => {
      const Ct = [d("svg", { class: "q-slider__thumb-shape absolute-full", viewBox: "0 0 20 20", "aria-hidden": "true" }, [d("path", { d: r.thumbPath })]), d("div", { class: "q-slider__focus-ring fit" })];
      return (r.label === true || r.labelAlways === true) && (Ct.push(d("div", { class: _.value + " absolute fit no-pointer-events" + Re.value }, [d("div", { class: D.value, style: { minWidth: r.thumbSize } }, [d("div", { class: F.value, style: Ye.value }, [d("span", { class: it.value }, oe.label.value)])])])), r.name !== void 0 && r.disable !== true && c(Ct, "push")), d("div", { class: Ce.value, style: Oe.value, ...oe.getNodeData() }, Ct);
    };
  }
  function ye(oe, _e2, Ce, Oe) {
    const Re = [];
    r.innerTrackColor !== "transparent" && Re.push(d("div", { key: "inner", class: G.value, style: V.value })), r.selectionColor !== "transparent" && Re.push(d("div", { key: "selection", class: ae.value, style: oe.value })), r.markers !== false && Re.push(d("div", { key: "marker", class: pe.value, style: te.value })), Oe(Re);
    const Ye = [_n("div", { key: "trackC", class: Y.value, tabindex: _e2.value, ...Ce.value }, [d("div", { class: A.value, style: R.value }, Re)], "slide", y.value, () => Q.value)];
    if (r.markerLabels !== false) {
      const it = r.switchMarkerLabelsSide === true ? "unshift" : "push";
      Ye[it](d("div", { key: "markerL", class: fe.value }, re()));
    }
    return Ye;
  }
  return Ke(() => {
    document.removeEventListener("mouseup", Te, true);
  }), { state: { active: s, focus: h, preventFocus: f, dragging: m, editable: y, classes: U, tabindex: $, attributes: j, roundValueFn: b, keyStep: C, trackLen: O, innerMin: T, innerMinRatio: L, innerMax: p, innerMaxRatio: B, positionProp: N, sizeProp: q, isReversed: x }, methods: { onActivate: ke, onMobileClick: Me, onBlur: we, onKeyup: He, getContent: ye, getThumbRenderFn: ue, convertRatioToModel: ne, convertModelToRatio: be, getDraggingRatio: S } };
}
var $p = () => ({}), lr = he({ name: "QSlider", props: { ...Jm, modelValue: { required: true, default: null, validator: (e) => typeof e == "number" || e === null }, labelValue: [String, Number] }, emits: eh, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = xe(), { state: l, methods: r } = th({ updateValue: g, updatePosition: x, getDragging: w, formAttrs: Ba(e) }), a = K(null), o = K(0), i = K(0);
  function u() {
    i.value = e.modelValue === null ? l.innerMin.value : ct(e.modelValue, l.innerMin.value, l.innerMax.value);
  }
  ge(() => `${e.modelValue}|${l.innerMin.value}|${l.innerMax.value}`, u), u();
  const c = v(() => r.convertModelToRatio(i.value)), s = v(() => l.active.value === true ? o.value : c.value), f = v(() => {
    const y = { [l.positionProp.value]: `${100 * l.innerMinRatio.value}%`, [l.sizeProp.value]: `${100 * (s.value - l.innerMinRatio.value)}%` };
    return e.selectionImg !== void 0 && (y.backgroundImage = `url(${e.selectionImg}) !important`), y;
  }), h = r.getThumbRenderFn({ focusValue: true, getNodeData: $p, ratio: s, label: v(() => e.labelValue !== void 0 ? e.labelValue : i.value), thumbColor: v(() => e.thumbColor || e.color), labelColor: v(() => e.labelColor), labelTextColor: v(() => e.labelTextColor) }), m = v(() => l.editable.value !== true ? {} : n.platform.is.mobile === true ? { onClick: r.onMobileClick } : { onMousedown: r.onActivate, onFocus: T, onBlur: r.onBlur, onKeydown: p, onKeyup: r.onKeyup });
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
    if (Hs.includes(y.keyCode) === false) return;
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
function nh() {
  const e = K(!ln.value);
  return e.value === false && ft(() => {
    e.value = true;
  }), { isHydrated: e };
}
var lh = typeof ResizeObserver < "u", ud = lh === true ? {} : { style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;", url: "about:blank" }, Ql = he({ name: "QResizeObserver", props: { debounce: { type: [String, Number], default: 100 } }, emits: ["resize"], setup(e, { emit: t }) {
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
  if (i.trigger = a, lh === true) {
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
    const { isHydrated: s } = nh();
    let f;
    return ft(() => {
      We(() => {
        l = i.$el, l && c();
      });
    }), Ke(u), () => {
      if (s.value === true) return d("object", { class: "q--avoid-card-border", style: ud.style, tabindex: -1, type: "text/html", data: ud.url, "aria-hidden": "true", onLoad: c });
    };
  }
} }), ka = false;
if (!__QUASAR_SSR__) {
  const e = document.createElement("div");
  e.setAttribute("dir", "rtl"), Object.assign(e.style, { width: "1px", height: "1px", overflow: "auto" });
  const t = document.createElement("div");
  Object.assign(t.style, { width: "1000px", height: "1px" }), document.body.appendChild(e), e.appendChild(t), e.scrollLeft = -1e3, ka = e.scrollLeft >= 0, e.remove();
}
function Lp(e, t, n) {
  const l = n === true ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${t === true ? l[0] : l[1]}${e ? ` text-${e}` : ""}`;
}
var Bp = ["left", "center", "right", "justify"], sd = he({ name: "QTabs", props: { modelValue: [Number, String], align: { type: String, default: "center", validator: (e) => Bp.includes(e) }, breakpoint: { type: [String, Number], default: 600 }, vertical: Boolean, shrink: Boolean, stretch: Boolean, activeClass: String, activeColor: String, activeBgColor: String, indicatorColor: String, leftIcon: String, rightIcon: String, outsideArrows: Boolean, mobileArrows: Boolean, switchIndicator: Boolean, narrowIndicator: Boolean, inlineLabel: Boolean, noCaps: Boolean, dense: Boolean, contentClass: String, "onUpdate:modelValue": [Function, Array] }, setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), { $q: r } = l, { registerTick: a } = _r(), { registerTick: o } = _r(), { registerTick: i } = _r(), { registerTimeout: u, removeTimeout: c } = Zn(), { registerTimeout: s, removeTimeout: f } = Zn(), h = K(null), m = K(null), g = K(e.modelValue), w = K(false), x = K(true), T = K(false), p = K(false), y = [], b = K(0), C = K(false);
  let $ = null, O = null, H;
  const L = v(() => ({ activeClass: e.activeClass, activeColor: e.activeColor, activeBgColor: e.activeBgColor, indicatorClass: Lp(e.indicatorColor, e.switchIndicator, e.vertical), narrowIndicator: e.narrowIndicator, inlineLabel: e.inlineLabel, noCaps: e.noCaps })), B = v(() => {
    const re = b.value, Q = g.value;
    for (let ie = 0; ie < re; ie++) if (y[ie].name.value === Q) return true;
    return false;
  }), N = v(() => `q-tabs__content--align-${w.value === true ? "left" : p.value === true ? "justify" : e.align}`), q = v(() => `q-tabs row no-wrap items-center q-tabs--${w.value === true ? "" : "not-"}scrollable q-tabs--${e.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${e.outsideArrows === true ? "outside" : "inside"} q-tabs--mobile-with${e.mobileArrows === true ? "" : "out"}-arrows` + (e.dense === true ? " q-tabs--dense" : "") + (e.shrink === true ? " col-shrink" : "") + (e.stretch === true ? " self-stretch" : "")), E = v(() => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + N.value + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), k = v(() => e.vertical === true ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" }), j = v(() => e.vertical !== true && r.lang.rtl === true), U = v(() => ka === false && j.value === true);
  ge(j, _), ge(() => e.modelValue, (re) => {
    W({ name: re, setCurrent: true, skipEmit: true });
  }), ge(() => e.outsideArrows, X);
  function W({ name: re, setCurrent: Q, skipEmit: ie }) {
    g.value !== re && (ie !== true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", re), (Q === true || e["onUpdate:modelValue"] === void 0) && (pe(g.value, re), g.value = re));
  }
  function X() {
    a(() => {
      h.value && ae({ width: h.value.offsetWidth, height: h.value.offsetHeight });
    });
  }
  function ae(re) {
    if (k.value === void 0 || m.value === null) return;
    const Q = re[k.value.container], ie = Math.min(m.value[k.value.scroll], Array.prototype.reduce.call(m.value.children, (ke, Te) => ke + (Te[k.value.content] || 0), 0)), we = Q > 0 && ie > Q;
    w.value = we, we === true && o(_), p.value = Q < parseInt(e.breakpoint, 10);
  }
  function pe(re, Q) {
    const ie = re != null && re !== "" ? y.find((ke) => ke.name.value === re) : null, we = Q != null && Q !== "" ? y.find((ke) => ke.name.value === Q) : null;
    if (ce === true) ce = false;
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
  function Y(re) {
    const { left: Q, width: ie, top: we, height: ke } = m.value.getBoundingClientRect(), Te = re.getBoundingClientRect();
    let Me = e.vertical === true ? Te.top - we : Te.left - Q;
    if (Me < 0) {
      m.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.floor(Me), _();
      return;
    }
    Me += e.vertical === true ? Te.height - ke : Te.width - ie, Me > 0 && (m.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.ceil(Me), _());
  }
  function _() {
    const re = m.value;
    if (re === null) return;
    const Q = re.getBoundingClientRect(), ie = e.vertical === true ? re.scrollTop : Math.abs(re.scrollLeft);
    j.value === true ? (x.value = Math.ceil(ie + Q.width) < re.scrollWidth - 1, T.value = ie > 0) : (x.value = ie > 0, T.value = e.vertical === true ? Math.ceil(ie + Q.height) < re.scrollHeight : Math.ceil(ie + Q.width) < re.scrollWidth);
  }
  function D(re) {
    O !== null && clearInterval(O), O = setInterval(() => {
      V(re) === true && A();
    }, 5);
  }
  function F() {
    D(U.value === true ? Number.MAX_SAFE_INTEGER : 0);
  }
  function fe() {
    D(U.value === true ? 0 : Number.MAX_SAFE_INTEGER);
  }
  function A() {
    O !== null && (clearInterval(O), O = null);
  }
  function R(re, Q) {
    const ie = Array.prototype.filter.call(m.value.children, (He) => He === Q || He.matches && He.matches(".q-tab.q-focusable") === true), we = ie.length;
    if (we === 0) return;
    if (re === 36) return Y(ie[0]), ie[0].focus(), true;
    if (re === 35) return Y(ie[we - 1]), ie[we - 1].focus(), true;
    const ke = re === (e.vertical === true ? 38 : 37), Te = re === (e.vertical === true ? 40 : 39), Me = ke === true ? -1 : Te === true ? 1 : void 0;
    if (Me !== void 0) {
      const He = j.value === true ? -1 : 1, Ve = ie.indexOf(Q) + Me * He;
      return Ve >= 0 && Ve < we && (Y(ie[Ve]), ie[Ve].focus({ preventScroll: true })), true;
    }
  }
  const G = v(() => U.value === true ? { get: (re) => Math.abs(re.scrollLeft), set: (re, Q) => {
    re.scrollLeft = -Q;
  } } : e.vertical === true ? { get: (re) => re.scrollTop, set: (re, Q) => {
    re.scrollTop = Q;
  } } : { get: (re) => re.scrollLeft, set: (re, Q) => {
    re.scrollLeft = Q;
  } });
  function V(re) {
    const Q = m.value, { get: ie, set: we } = G.value;
    let ke = false, Te = ie(Q);
    const Me = re < Te ? -1 : 1;
    return Te += Me * 5, Te < 0 ? (ke = true, Te = 0) : (Me === -1 && Te <= re || Me === 1 && Te >= re) && (ke = true, Te = re), we(Q, Te), _(), ke;
  }
  function ne(re, Q) {
    for (const ie in re) if (re[ie] !== Q[ie]) return false;
    return true;
  }
  function be() {
    let re = null, Q = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
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
        re = Me.name.value;
        break;
      }
      if (Ve !== "" && Ve !== we || _e2 !== 0 && ne(ue, ke) === false) continue;
      const Ce = { matchedLen: ye.length, queryDiff: Te - _e2, hrefLen: oe.length - Ve.length };
      if (Ce.matchedLen > Q.matchedLen) {
        re = Me.name.value, Q = Ce;
        continue;
      } else if (Ce.matchedLen !== Q.matchedLen) continue;
      if (Ce.queryDiff < Q.queryDiff) re = Me.name.value, Q = Ce;
      else if (Ce.queryDiff !== Q.queryDiff) continue;
      Ce.hrefLen > Q.hrefLen && (re = Me.name.value, Q = Ce);
    }
    if (re === null && y.some((Me) => Me.routeData === void 0 && Me.name.value === g.value) === true) {
      ce = false;
      return;
    }
    W({ name: re, setCurrent: true });
  }
  function S(re) {
    if (c(), C.value !== true && h.value !== null && re.target && typeof re.target.closest == "function") {
      const Q = re.target.closest(".q-tab");
      Q && h.value.contains(Q) === true && (C.value = true, w.value === true && Y(Q));
    }
  }
  function M() {
    u(() => {
      C.value = false;
    }, 30);
  }
  function I() {
    te.avoidRouteWatcher === false ? s(be) : f();
  }
  function ee() {
    if (H === void 0) {
      const re = ge(() => l.$route.fullPath, I);
      H = () => {
        re(), H = void 0;
      };
    }
  }
  function le(re) {
    y.push(re), b.value++, X(), re.routeData === void 0 || l.$route === void 0 ? s(() => {
      if (w.value === true) {
        const Q = g.value, ie = Q != null && Q !== "" ? y.find((we) => we.name.value === Q) : null;
        ie && Y(ie.rootRef.value);
      }
    }) : (ee(), re.routeData.hasRouterLink.value === true && I());
  }
  function P(re) {
    y.splice(y.indexOf(re), 1), b.value--, X(), H !== void 0 && re.routeData !== void 0 && (y.every((Q) => Q.routeData === void 0) === true && H(), I());
  }
  const te = { currentModel: g, tabProps: L, hasFocus: C, hasActiveTab: B, registerTab: le, unregisterTab: P, verifyRouteModel: I, updateModel: W, onKbdNavigate: R, avoidRouteWatcher: false };
  gn(hm, te);
  function se() {
    $ !== null && clearTimeout($), A(), H == null ? void 0 : H();
  }
  let me, ce;
  return Ke(se), Vn(() => {
    me = H !== void 0, se();
  }), Sl(() => {
    me === true && (ee(), ce = true, I()), X();
  }), () => d("div", { ref: h, class: q.value, role: "tablist", onFocusin: S, onFocusout: M }, [d(Ql, { onResize: ae }), d("div", { ref: m, class: E.value, onScroll: _ }, $e(t.default)), d(et, { class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (x.value === true ? "" : " q-tabs__arrow--faded"), name: e.leftIcon || r.iconSet.tabs[e.vertical === true ? "up" : "left"], onMousedownPassive: F, onTouchstartPassive: F, onMouseupPassive: A, onMouseleavePassive: A, onTouchendPassive: A }), d(et, { class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (T.value === true ? "" : " q-tabs__arrow--faded"), name: e.rightIcon || r.iconSet.tabs[e.vertical === true ? "down" : "right"], onMousedownPassive: fe, onTouchstartPassive: fe, onMouseupPassive: A, onMouseleavePassive: A, onTouchendPassive: A })]);
} }), Fp = 0, rh = ["click", "keydown"], ah = { icon: String, label: [Number, String], alert: [Boolean, String], alertIcon: String, name: { type: [Number, String], default: () => `t_${Fp++}` }, noCaps: Boolean, tabindex: [String, Number], disable: Boolean, contentClass: String, ripple: { type: [Boolean, Object], default: true } };
function oh(e, t, n, l) {
  const r = qt(hm, ot);
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
        let O;
        const H = $.to === void 0 || Tn($.to, e.to) === true ? r.avoidRouteWatcher = Ca() : null;
        return l.navigateToRouterLink(y, { ...$, returnRouterError: true }).catch((L) => {
          O = L;
        }).then((L) => {
          var _a4;
          if (H === r.avoidRouteWatcher && (r.avoidRouteWatcher = false, O === void 0 && (L === void 0 || ((_a4 = L.message) == null ? void 0 : _a4.startsWith("Avoided redundant navigation")) === true) && r.updateModel({ name: e.name })), $.returnRouterError === true) return O !== void 0 ? Promise.reject(O) : L;
        });
      };
      n("click", y, C), y.defaultPrevented !== true && C();
      return;
    }
    n("click", y);
  }
  function w(y) {
    pn(y, [13, 32]) ? g(y, true) : Xl(y) !== true && y.keyCode >= 35 && y.keyCode <= 40 && y.altKey !== true && y.metaKey !== true && r.onKbdNavigate(y.keyCode, a.$el) === true && je(y), n("keydown", y);
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
    return cn(d(y, C, x()), [[ci, c.value]]);
  }
  return { renderTab: p, $tabs: r };
}
var Ir = he({ name: "QTab", props: ah, emits: rh, setup(e, { slots: t, emit: n }) {
  const { renderTab: l } = oh(e, t, n);
  return () => l("div");
} }), Op = he({ name: "QTabPanels", props: { ...Fs, ...nt }, emits: Os, setup(e, { slots: t }) {
  const n = xe(), l = lt(e, n.proxy.$q), { updatePanelsList: r, getPanelContent: a, panelDirectives: o } = Vs(), i = v(() => "q-tab-panels q-panel-parent" + (l.value === true ? " q-tab-panels--dark q-dark" : ""));
  return () => (r(t), _n("div", { class: i.value }, a(), "pan", e.swipeable, () => o.value));
} }), ji = he({ name: "QTabPanel", props: Bs, setup(e, { slots: t }) {
  return () => d("div", { class: "q-tab-panel", role: "tabpanel" }, $e(t.default));
} }), cd = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, dd = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, fd = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, Qa = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, Ka = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, co = { date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e), time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e), fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e), timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e), email: (e) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e), hexColor: (e) => cd.test(e), hexaColor: (e) => dd.test(e), hexOrHexaColor: (e) => fd.test(e), rgbColor: (e) => Qa.test(e), rgbaColor: (e) => Ka.test(e), rgbOrRgbaColor: (e) => Qa.test(e) || Ka.test(e), hexOrRgbColor: (e) => cd.test(e) || Qa.test(e), hexaOrRgbaColor: (e) => dd.test(e) || Ka.test(e), anyColor: (e) => fd.test(e) || Qa.test(e) || Ka.test(e) }, Vp = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;
function vd({ r: e, g: t, b: n, a: l }) {
  const r = l !== void 0;
  if (e = Math.round(e), t = Math.round(t), n = Math.round(n), e > 255 || t > 255 || n > 255 || r && l > 100) throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");
  return l = r ? (Math.round(255 * l / 100) | 256).toString(16).slice(1) : "", "#" + (n | t << 8 | e << 16 | 1 << 24).toString(16).slice(1) + l;
}
function md({ r: e, g: t, b: n, a: l }) {
  return `rgb${l !== void 0 ? "a" : ""}(${e},${t},${n}${l !== void 0 ? "," + l / 100 : ""})`;
}
function ih(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  e = e.replace(/^#/, ""), e.length === 3 ? e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] : e.length === 4 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
  const t = parseInt(e, 16);
  return e.length > 6 ? { r: t >> 24 & 255, g: t >> 16 & 255, b: t >> 8 & 255, a: Math.round((t & 255) / 2.55) } : { r: t >> 16, g: t >> 8 & 255, b: t & 255 };
}
function hd({ h: e, s: t, v: n, a: l }) {
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
function Ui({ r: e, g: t, b: n, a: l }) {
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
function uh(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  const t = e.replace(/ /g, ""), n = Vp.exec(t);
  if (n === null) return ih(t);
  const l = { r: Math.min(255, parseInt(n[2], 10)), g: Math.min(255, parseInt(n[3], 10)), b: Math.min(255, parseInt(n[4], 10)) };
  if (n[1]) {
    const r = parseFloat(n[5]);
    l.a = Math.min(1, isNaN(r) === true ? 1 : r) * 100;
  }
  return l;
}
function Dp(e) {
  if (typeof e != "string" && (!e || e.r === void 0)) throw new TypeError("Expected a string or a {r, g, b} object as color");
  const t = typeof e == "string" ? uh(e) : e, n = t.r / 255, l = t.g / 255, r = t.b / 255, a = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4), o = l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4), i = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  return 0.2126 * a + 0.7152 * o + 0.0722 * i;
}
var Ip = ["rgb(255,204,204)", "rgb(255,230,204)", "rgb(255,255,204)", "rgb(204,255,204)", "rgb(204,255,230)", "rgb(204,255,255)", "rgb(204,230,255)", "rgb(204,204,255)", "rgb(230,204,255)", "rgb(255,204,255)", "rgb(255,153,153)", "rgb(255,204,153)", "rgb(255,255,153)", "rgb(153,255,153)", "rgb(153,255,204)", "rgb(153,255,255)", "rgb(153,204,255)", "rgb(153,153,255)", "rgb(204,153,255)", "rgb(255,153,255)", "rgb(255,102,102)", "rgb(255,179,102)", "rgb(255,255,102)", "rgb(102,255,102)", "rgb(102,255,179)", "rgb(102,255,255)", "rgb(102,179,255)", "rgb(102,102,255)", "rgb(179,102,255)", "rgb(255,102,255)", "rgb(255,51,51)", "rgb(255,153,51)", "rgb(255,255,51)", "rgb(51,255,51)", "rgb(51,255,153)", "rgb(51,255,255)", "rgb(51,153,255)", "rgb(51,51,255)", "rgb(153,51,255)", "rgb(255,51,255)", "rgb(255,0,0)", "rgb(255,128,0)", "rgb(255,255,0)", "rgb(0,255,0)", "rgb(0,255,128)", "rgb(0,255,255)", "rgb(0,128,255)", "rgb(0,0,255)", "rgb(128,0,255)", "rgb(255,0,255)", "rgb(245,0,0)", "rgb(245,123,0)", "rgb(245,245,0)", "rgb(0,245,0)", "rgb(0,245,123)", "rgb(0,245,245)", "rgb(0,123,245)", "rgb(0,0,245)", "rgb(123,0,245)", "rgb(245,0,245)", "rgb(214,0,0)", "rgb(214,108,0)", "rgb(214,214,0)", "rgb(0,214,0)", "rgb(0,214,108)", "rgb(0,214,214)", "rgb(0,108,214)", "rgb(0,0,214)", "rgb(108,0,214)", "rgb(214,0,214)", "rgb(163,0,0)", "rgb(163,82,0)", "rgb(163,163,0)", "rgb(0,163,0)", "rgb(0,163,82)", "rgb(0,163,163)", "rgb(0,82,163)", "rgb(0,0,163)", "rgb(82,0,163)", "rgb(163,0,163)", "rgb(92,0,0)", "rgb(92,46,0)", "rgb(92,92,0)", "rgb(0,92,0)", "rgb(0,92,46)", "rgb(0,92,92)", "rgb(0,46,92)", "rgb(0,0,92)", "rgb(46,0,92)", "rgb(92,0,92)", "rgb(255,255,255)", "rgb(205,205,205)", "rgb(178,178,178)", "rgb(153,153,153)", "rgb(127,127,127)", "rgb(102,102,102)", "rgb(76,76,76)", "rgb(51,51,51)", "rgb(25,25,25)", "rgb(0,0,0)"], gd = "M5 5 h10 v10 h-10 v-10 z", zp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==";
he({ name: "QColor", props: { ...nt, ...xn, modelValue: String, defaultValue: String, defaultView: { type: String, default: "spectrum", validator: (e) => ["spectrum", "tune", "palette"].includes(e) }, formatModel: { type: String, default: "auto", validator: (e) => ["auto", "hex", "rgb", "hexa", "rgba"].includes(e) }, palette: Array, noHeader: Boolean, noHeaderTabs: Boolean, noFooter: Boolean, square: Boolean, flat: Boolean, bordered: Boolean, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), { $q: l } = n, r = lt(e, l), { getCache: a } = Fa(), o = K(null), i = K(null), u = v(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("hex") !== -1), c = v(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1), s = K(e.formatModel === "auto" ? e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#") ? "hex" : "rgb" : e.formatModel.startsWith("hex") ? "hex" : "rgb"), f = K(e.defaultView), h = K(q(e.modelValue || e.defaultValue)), m = v(() => e.disable !== true && e.readonly !== true), g = v(() => e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#")), w = v(() => u.value !== null ? u.value : g.value), x = v(() => ({ type: "hidden", name: e.name, value: h.value[w.value === true ? "hex" : "rgb"] })), T = kl(x), p = v(() => c.value !== null ? c.value : h.value.a !== void 0), y = v(() => ({ backgroundColor: h.value.rgb || "#000" })), b = v(() => `q-color-picker__header-content q-color-picker__header-content--${(h.value.a !== void 0 && h.value.a < 65 ? true : Dp(h.value) > 0.4) ? "light" : "dark"}`), C = v(() => ({ background: `hsl(${h.value.h},100%,50%)` })), $ = v(() => ({ top: `${100 - h.value.v}%`, [l.lang.rtl === true ? "right" : "left"]: `${h.value.s}%` })), O = v(() => e.palette !== void 0 && e.palette.length !== 0 ? e.palette : Ip), H = v(() => "q-color-picker" + (e.bordered === true ? " q-color-picker--bordered" : "") + (e.square === true ? " q-color-picker--square no-border-radius" : "") + (e.flat === true ? " q-color-picker--flat no-shadow" : "") + (e.disable === true ? " disabled" : "") + (r.value === true ? " q-color-picker--dark q-dark" : "")), L = v(() => e.disable === true ? { "aria-disabled": "true" } : {}), B = v(() => [[bn, ae, void 0, { prevent: true, stop: true, mouse: true }]]);
  ge(() => e.modelValue, (S) => {
    const M = q(S || e.defaultValue);
    M.hex !== h.value.hex && (h.value = M);
  }), ge(() => e.defaultValue, (S) => {
    if (!e.modelValue && S) {
      const M = q(S);
      M.hex !== h.value.hex && (h.value = M);
    }
  });
  function N(S, M) {
    h.value.hex = vd(S), h.value.rgb = md(S), h.value.r = S.r, h.value.g = S.g, h.value.b = S.b, h.value.a = S.a;
    const I = h.value[w.value === true ? "hex" : "rgb"];
    t("update:modelValue", I), M === true && t("change", I);
  }
  function q(S) {
    const M = c.value !== void 0 ? c.value : e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1;
    if (typeof S != "string" || S.length === 0 || co.anyColor(S.replace(/ /g, "")) !== true) return { h: 0, s: 0, v: 0, r: 0, g: 0, b: 0, a: M === true ? 100 : void 0, hex: void 0, rgb: void 0 };
    const I = uh(S);
    return M === true && I.a === void 0 && (I.a = 100), I.hex = vd(I), I.rgb = md(I), Object.assign(I, Ui(I));
  }
  function E(S, M, I) {
    const ee = o.value;
    if (ee === null) return;
    const le = ee.clientWidth, P = ee.clientHeight, te = ee.getBoundingClientRect();
    let se = Math.min(le, Math.max(0, S - te.left));
    l.lang.rtl === true && (se = le - se);
    const me = Math.min(P, Math.max(0, M - te.top)), ce = Math.round(100 * se / le), re = Math.round(100 * Math.max(0, Math.min(1, -(me / P) + 1))), Q = hd({ h: h.value.h, s: ce, v: re, a: p.value === true ? h.value.a : void 0 });
    h.value.s = ce, h.value.v = re, N(Q, I);
  }
  function k(S, M) {
    const I = Math.round(S), ee = hd({ h: I, s: h.value.s, v: h.value.v, a: p.value === true ? h.value.a : void 0 });
    h.value.h = I, N(ee, M);
  }
  function j(S) {
    k(S, true);
  }
  function U(S, M, I, ee, le) {
    if (ee !== void 0 && wt(ee), !/^[0-9]+$/.test(S)) {
      le === true && n.$forceUpdate();
      return;
    }
    const P = Math.floor(Number(S));
    if (P < 0 || P > I) {
      le === true && n.$forceUpdate();
      return;
    }
    const te = { r: M === "r" ? P : h.value.r, g: M === "g" ? P : h.value.g, b: M === "b" ? P : h.value.b, a: p.value === true ? M === "a" ? P : h.value.a : void 0 };
    if (M !== "a") {
      const se = Ui(te);
      h.value.h = se.h, h.value.s = se.s, h.value.v = se.v;
    }
    if (N(te, le), le !== true && (ee == null ? void 0 : ee.target.selectionEnd) !== void 0) {
      const se = ee.target.selectionEnd;
      We(() => {
        ee.target.setSelectionRange(se, se);
      });
    }
  }
  function W(S, M) {
    let I;
    const ee = S.target.value;
    if (wt(S), s.value === "hex") {
      if (ee.length !== (p.value === true ? 9 : 7) || !/^#[0-9A-Fa-f]+$/.test(ee)) return true;
      I = ih(ee);
    } else {
      let P;
      if (ee.endsWith(")")) if (p.value !== true && ee.startsWith("rgb(")) {
        if (P = ee.substring(4, ee.length - 1).split(",").map((te) => parseInt(te, 10)), P.length !== 3 || !/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(ee)) return true;
      } else if (p.value === true && ee.startsWith("rgba(")) {
        if (P = ee.substring(5, ee.length - 1).split(","), P.length !== 4 || !/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(ee)) return true;
        for (let se = 0; se < 3; se++) {
          const me = parseInt(P[se], 10);
          if (me < 0 || me > 255) return true;
          P[se] = me;
        }
        const te = parseFloat(P[3]);
        if (te < 0 || te > 1) return true;
        P[3] = te;
      } else return true;
      else return true;
      if (P[0] < 0 || P[0] > 255 || P[1] < 0 || P[1] > 255 || P[2] < 0 || P[2] > 255 || p.value === true && (P[3] < 0 || P[3] > 1)) return true;
      I = { r: P[0], g: P[1], b: P[2], a: p.value === true ? P[3] * 100 : void 0 };
    }
    const le = Ui(I);
    if (h.value.h = le.h, h.value.s = le.s, h.value.v = le.v, N(I, M), M !== true) {
      const P = S.target.selectionEnd;
      We(() => {
        S.target.setSelectionRange(P, P);
      });
    }
  }
  function X(S) {
    const M = q(S), I = { r: M.r, g: M.g, b: M.b, a: M.a };
    I.a === void 0 && (I.a = h.value.a), h.value.h = M.h, h.value.s = M.s, h.value.v = M.v, N(I, true);
  }
  function ae(S) {
    S.isFinal ? E(S.position.left, S.position.top, true) : pe(S);
  }
  const pe = Tm((S) => {
    E(S.position.left, S.position.top);
  }, 20);
  function Y(S) {
    E(S.pageX - window.pageXOffset, S.pageY - window.pageYOffset, true);
  }
  function _(S) {
    E(S.pageX - window.pageXOffset, S.pageY - window.pageYOffset);
  }
  function D(S) {
    i.value !== null && (i.value.$el.style.opacity = S ? 1 : 0);
  }
  function F(S) {
    s.value = S;
  }
  function fe() {
    const S = [];
    return e.noHeaderTabs !== true && S.push(d(sd, { class: "q-color-picker__header-tabs", modelValue: s.value, dense: true, align: "justify", "onUpdate:modelValue": F }, () => [d(Ir, { label: "HEX" + (p.value === true ? "A" : ""), name: "hex", ripple: false }), d(Ir, { label: "RGB" + (p.value === true ? "A" : ""), name: "rgb", ripple: false })])), S.push(d("div", { class: "q-color-picker__header-banner row flex-center no-wrap" }, [d("input", { class: "fit", value: h.value[s.value], ...m.value !== true ? { readonly: true } : {}, ...a("topIn", { onInput: (M) => {
      D(W(M) === true);
    }, onChange: wt, onBlur: (M) => {
      W(M, true) === true && n.$forceUpdate(), D(false);
    } }) }), d(et, { ref: i, class: "q-color-picker__error-icon absolute no-pointer-events", name: l.iconSet.type.negative })])), d("div", { class: "q-color-picker__header relative-position overflow-hidden" }, [d("div", { class: "q-color-picker__header-bg absolute-full" }), d("div", { class: b.value, style: y.value }, S)]);
  }
  function A() {
    return d(Op, { modelValue: f.value, animated: true }, () => [d(ji, { class: "q-color-picker__spectrum-tab overflow-hidden", name: "spectrum" }, V), d(ji, { class: "q-pa-md q-color-picker__tune-tab", name: "tune" }, ne), d(ji, { class: "q-color-picker__palette-tab", name: "palette" }, be)]);
  }
  function R(S) {
    f.value = S;
  }
  function G() {
    return d("div", { class: "q-color-picker__footer relative-position overflow-hidden" }, [d(sd, { class: "absolute-full", modelValue: f.value, dense: true, align: "justify", "onUpdate:modelValue": R }, () => [d(Ir, { icon: l.iconSet.colorPicker.spectrum, name: "spectrum", ripple: false }), d(Ir, { icon: l.iconSet.colorPicker.tune, name: "tune", ripple: false }), d(Ir, { icon: l.iconSet.colorPicker.palette, name: "palette", ripple: false })])]);
  }
  function V() {
    const S = { ref: o, class: "q-color-picker__spectrum non-selectable relative-position cursor-pointer" + (m.value !== true ? " readonly" : ""), style: C.value, ...m.value === true ? { onClick: Y, onMousedown: _ } : {} }, M = [d("div", { style: { paddingBottom: "100%" } }), d("div", { class: "q-color-picker__spectrum-white absolute-full" }), d("div", { class: "q-color-picker__spectrum-black absolute-full" }), d("div", { class: "absolute", style: $.value }, [h.value.hex !== void 0 ? d("div", { class: "q-color-picker__spectrum-circle" }) : null])], I = [d(lr, { class: "q-color-picker__hue non-selectable", modelValue: h.value.h, min: 0, max: 360, trackSize: "8px", innerTrackColor: "transparent", selectionColor: "transparent", readonly: m.value !== true, thumbPath: gd, "onUpdate:modelValue": k, onChange: j })];
    return p.value === true && I.push(d(lr, { class: "q-color-picker__alpha non-selectable", modelValue: h.value.a, min: 0, max: 100, trackSize: "8px", trackColor: "white", innerTrackColor: "transparent", selectionColor: "transparent", trackImg: zp, readonly: m.value !== true, hideSelection: true, thumbPath: gd, ...a("alphaSlide", { "onUpdate:modelValue": (ee) => U(ee, "a", 100), onChange: (ee) => U(ee, "a", 100, void 0, true) }) })), [_n("div", S, M, "spec", m.value, () => B.value), d("div", { class: "q-color-picker__sliders" }, I)];
  }
  function ne() {
    return [d("div", { class: "row items-center no-wrap" }, [d("div", "R"), d(lr, { modelValue: h.value.r, min: 0, max: 255, color: "red", dark: r.value, readonly: m.value !== true, ...a("rSlide", { "onUpdate:modelValue": (S) => U(S, "r", 255), onChange: (S) => U(S, "r", 255, void 0, true) }) }), d("input", { value: h.value.r, maxlength: 3, readonly: m.value !== true, onChange: wt, ...a("rIn", { onInput: (S) => U(S.target.value, "r", 255, S), onBlur: (S) => U(S.target.value, "r", 255, S, true) }) })]), d("div", { class: "row items-center no-wrap" }, [d("div", "G"), d(lr, { modelValue: h.value.g, min: 0, max: 255, color: "green", dark: r.value, readonly: m.value !== true, ...a("gSlide", { "onUpdate:modelValue": (S) => U(S, "g", 255), onChange: (S) => U(S, "g", 255, void 0, true) }) }), d("input", { value: h.value.g, maxlength: 3, readonly: m.value !== true, onChange: wt, ...a("gIn", { onInput: (S) => U(S.target.value, "g", 255, S), onBlur: (S) => U(S.target.value, "g", 255, S, true) }) })]), d("div", { class: "row items-center no-wrap" }, [d("div", "B"), d(lr, { modelValue: h.value.b, min: 0, max: 255, color: "blue", readonly: m.value !== true, dark: r.value, ...a("bSlide", { "onUpdate:modelValue": (S) => U(S, "b", 255), onChange: (S) => U(S, "b", 255, void 0, true) }) }), d("input", { value: h.value.b, maxlength: 3, readonly: m.value !== true, onChange: wt, ...a("bIn", { onInput: (S) => U(S.target.value, "b", 255, S), onBlur: (S) => U(S.target.value, "b", 255, S, true) }) })]), p.value === true ? d("div", { class: "row items-center no-wrap" }, [d("div", "A"), d(lr, { modelValue: h.value.a, color: "grey", readonly: m.value !== true, dark: r.value, ...a("aSlide", { "onUpdate:modelValue": (S) => U(S, "a", 100), onChange: (S) => U(S, "a", 100, void 0, true) }) }), d("input", { value: h.value.a, maxlength: 3, readonly: m.value !== true, onChange: wt, ...a("aIn", { onInput: (S) => U(S.target.value, "a", 100, S), onBlur: (S) => U(S.target.value, "a", 100, S, true) }) })]) : null];
  }
  function be() {
    const S = (M) => d("div", { class: "q-color-picker__cube col-auto", style: { backgroundColor: M }, ...m.value === true ? a("palette#" + M, { onClick: () => {
      X(M);
    } }) : {} });
    return [d("div", { class: "row items-center q-color-picker__palette-rows" + (m.value === true ? " q-color-picker__palette-rows--editable" : "") }, O.value.map(S))];
  }
  return () => {
    const S = [A()];
    return e.name !== void 0 && e.disable !== true && T(S, "push"), e.noHeader !== true && S.unshift(fe()), e.noFooter !== true && S.push(G()), d("div", { class: H.value, ...L.value }, S);
  };
} });
var hl = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
function Np(e, t, n) {
  return Object.prototype.toString.call(e) === "[object Date]" && (n = e.getDate(), t = e.getMonth() + 1, e = e.getFullYear()), Qp(js(e, t, n));
}
function bd(e, t, n) {
  return ch(Up(e, t, n));
}
function Hp(e) {
  return jp(e) === 0;
}
function fo(e, t) {
  return t <= 6 ? 31 : t <= 11 || Hp(e) ? 30 : 29;
}
function jp(e) {
  const t = hl.length;
  let n = hl[0], l, r, a, o, i;
  if (e < n || e >= hl[t - 1]) throw new Error("Invalid Jalaali year " + e);
  for (i = 1; i < t && (l = hl[i], r = l - n, !(e < l)); i += 1) n = l;
  return o = e - n, r - o < 6 && (o = o - r + _t(r + 4, 33) * 33), a = un(un(o + 1, 33) - 1, 4), a === -1 && (a = 4), a;
}
function sh(e, t) {
  const n = hl.length, l = e + 621;
  let r = -14, a = hl[0], o, i, u, c, s;
  if (e < a || e >= hl[n - 1]) throw new Error("Invalid Jalaali year " + e);
  for (s = 1; s < n && (o = hl[s], i = o - a, !(e < o)); s += 1) r = r + _t(i, 33) * 8 + _t(un(i, 33), 4), a = o;
  c = e - a, r = r + _t(c, 33) * 8 + _t(un(c, 33) + 3, 4), un(i, 33) === 4 && i - c === 4 && (r += 1);
  const f = _t(l, 4) - _t((_t(l, 100) + 1) * 3, 4) - 150, h = 20 + r - f;
  return t || (i - c < 6 && (c = c - i + _t(i + 4, 33) * 33), u = un(un(c + 1, 33) - 1, 4), u === -1 && (u = 4)), { leap: u, gy: l, march: h };
}
function Up(e, t, n) {
  const l = sh(e, true);
  return js(l.gy, 3, l.march) + (t - 1) * 31 - _t(t, 7) * (t - 7) + n - 1;
}
function Qp(e) {
  const t = ch(e).gy;
  let n = t - 621, l, r, a;
  const o = sh(n, false), i = js(t, 3, o.march);
  if (a = e - i, a >= 0) {
    if (a <= 185) return r = 1 + _t(a, 31), l = un(a, 31) + 1, { jy: n, jm: r, jd: l };
    a -= 186;
  } else n -= 1, a += 179, o.leap === 1 && (a += 1);
  return r = 7 + _t(a, 30), l = un(a, 30) + 1, { jy: n, jm: r, jd: l };
}
function js(e, t, n) {
  let l = _t((e + _t(t - 8, 6) + 100100) * 1461, 4) + _t(153 * un(t + 9, 12) + 2, 5) + n - 34840408;
  return l = l - _t(_t(e + 100100 + _t(t - 8, 6), 100) * 3, 4) + 752, l;
}
function ch(e) {
  let t = 4 * e + 139361631;
  t = t + _t(_t(4 * e + 183187720, 146097) * 3, 4) * 4 - 3908;
  const n = _t(un(t, 1461), 4) * 5 + 308, l = _t(un(n, 153), 5) + 1, r = un(_t(n, 153), 12) + 1;
  return { gy: _t(t, 1461) - 100100 + _t(8 - r, 6), gm: r, gd: l };
}
function _t(e, t) {
  return ~~(e / t);
}
function un(e, t) {
  return e - ~~(e / t) * t;
}
var Kp = ["gregorian", "persian"], zo = { mask: { type: String }, locale: Object, calendar: { type: String, validator: (e) => Kp.includes(e), default: "gregorian" }, landscape: Boolean, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, readonly: Boolean, disable: Boolean }, dh = ["update:modelValue"];
function Un(e) {
  return e.year + "/" + at(e.month) + "/" + at(e.day);
}
function fh(e, t) {
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
      const s = Np(u);
      return { year: s.jy, month: s.jm, day: s.jd };
    }
    return { year: u.getFullYear(), month: u.getMonth() + 1, day: u.getDate(), hour: c, minute: c, second: c, millisecond: c };
  }
  return { editable: n, tabindex: l, headerClass: r, getLocale: a, getCurrentDate: o };
}
var vh = 864e5, Wp = 36e5, ju = 6e4, mh = "YYYY-MM-DDTHH:mm:ss.SSSZ", Yp = /\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g, Xp = /(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g, Qi = {};
function Gp(e, t) {
  const n = "(" + t.days.join("|") + ")", l = e + n;
  if (Qi[l] !== void 0) return Qi[l];
  const r = "(" + t.daysShort.join("|") + ")", a = "(" + t.months.join("|") + ")", o = "(" + t.monthsShort.join("|") + ")", i = {};
  let u = 0;
  const c = e.replace(Xp, (f) => {
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
  return Qi[l] = s, s;
}
function hh(e, t) {
  return e !== void 0 ? e : t !== void 0 ? t.date : Pu.date;
}
function yd(e, t = "") {
  const n = e > 0 ? "-" : "+", l = Math.abs(e), r = Math.floor(l / 60), a = l % 60;
  return n + at(r) + t + at(a);
}
function Yr(e, t, n, l, r) {
  const a = { year: null, month: null, day: null, hour: null, minute: null, second: null, millisecond: null, timezoneOffset: null, dateHash: null, timeHash: null };
  if (r !== void 0 && Object.assign(a, r), e == null || e === "" || typeof e != "string") return a;
  t === void 0 && (t = mh);
  const o = hh(n, ii.props), i = o.months, u = o.monthsShort, { regex: c, map: s } = Gp(t, o), f = e.match(c);
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
      const m = l !== "persian" ? new Date(a.year, a.month, 0).getDate() : fo(a.year, a.month);
      if (a.day > m) return a;
    }
    s.H !== void 0 ? a.hour = parseInt(f[s.H], 10) % 24 : s.h !== void 0 && (a.hour = parseInt(f[s.h], 10) % 12, (s.A && f[s.A] === "PM" || s.a && f[s.a] === "pm" || s.aa && f[s.aa] === "p.m.") && (a.hour += 12), a.hour = a.hour % 24), s.m !== void 0 && (a.minute = parseInt(f[s.m], 10) % 60), s.s !== void 0 && (a.second = parseInt(f[s.s], 10) % 60), s.S !== void 0 && (a.millisecond = parseInt(f[s.S], 10) * 10 ** (3 - f[s.S].length)), (s.Z !== void 0 || s.ZZ !== void 0) && (h = s.Z !== void 0 ? f[s.Z].replace(":", "") : f[s.ZZ], a.timezoneOffset = (h[0] === "+" ? -1 : 1) * (60 * h.slice(1, 3) + 1 * h.slice(3, 5)));
  }
  return a.dateHash = at(a.year, 6) + "/" + at(a.month) + "/" + at(a.day), a.timeHash = at(a.hour) + ":" + at(a.minute) + ":" + at(a.second) + h, a;
}
function Ki(e) {
  const t = new Date(e.getFullYear(), e.getMonth(), e.getDate());
  t.setDate(t.getDate() - (t.getDay() + 6) % 7 + 3);
  const n = new Date(t.getFullYear(), 0, 4);
  n.setDate(n.getDate() - (n.getDay() + 6) % 7 + 3);
  const l = t.getTimezoneOffset() - n.getTimezoneOffset();
  t.setHours(t.getHours() - l);
  const r = (t - n) / (vh * 7);
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
function Wa(e, t, n) {
  return (e.getTime() - e.getTimezoneOffset() * ju - (t.getTime() - t.getTimezoneOffset() * ju)) / n;
}
function gh(e, t, n = "days") {
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
      return Wa(Qn(l, "day"), Qn(r, "day"), vh);
    case "hours":
    case "hour":
      return Wa(Qn(l, "hour"), Qn(r, "hour"), Wp);
    case "minutes":
    case "minute":
      return Wa(Qn(l, "minute"), Qn(r, "minute"), ju);
    case "seconds":
    case "second":
      return Wa(Qn(l, "second"), Qn(r, "second"), 1e3);
  }
}
function Wi(e) {
  return gh(e, Qn(e, "year"), "days") + 1;
}
function rr(e) {
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
var pd = { YY(e, t, n) {
  const l = this.YYYY(e, t, n) % 100;
  return l >= 0 ? at(l) : "-" + at(Math.abs(l));
}, YYYY(e, t, n) {
  return n ?? e.getFullYear();
}, M(e) {
  return e.getMonth() + 1;
}, Mo(e) {
  return rr(e.getMonth() + 1);
}, MM(e) {
  return at(e.getMonth() + 1);
}, MMM(e, t) {
  return t.monthsShort[e.getMonth()];
}, MMMM(e, t) {
  return t.months[e.getMonth()];
}, Q(e) {
  return Math.ceil((e.getMonth() + 1) / 3);
}, Qo(e) {
  return rr(this.Q(e));
}, D(e) {
  return e.getDate();
}, Do(e) {
  return rr(e.getDate());
}, DD(e) {
  return at(e.getDate());
}, DDD(e) {
  return Wi(e);
}, DDDo(e) {
  return rr(Wi(e));
}, DDDD(e) {
  return at(Wi(e), 3);
}, d(e) {
  return e.getDay();
}, do(e) {
  return rr(e.getDay());
}, dd(e, t) {
  return t.days[e.getDay()].slice(0, 2);
}, ddd(e, t) {
  return t.daysShort[e.getDay()];
}, dddd(e, t) {
  return t.days[e.getDay()];
}, E(e) {
  return e.getDay() || 7;
}, w(e) {
  return Ki(e);
}, wo(e) {
  return rr(Ki(e));
}, ww(e) {
  return at(Ki(e));
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
  return yd(r, ":");
}, ZZ(e, t, n, l) {
  const r = l ?? e.getTimezoneOffset();
  return yd(r);
}, X(e) {
  return Math.floor(e.getTime() / 1e3);
}, x(e) {
  return e.getTime();
} };
function bh(e, t, n, l, r) {
  if (e !== 0 && !e || e === 1 / 0 || e === -1 / 0) return;
  const a = new Date(e);
  if (isNaN(a)) return;
  t === void 0 && (t = mh);
  const o = hh(n, ii.props);
  return t.replace(Yp, (i, u) => i in pd ? pd[i](a, o, l, r) : u === void 0 ? i : u.split("\\]").join("]"));
}
var Nn = 20, Zp = ["Calendar", "Years", "Months"], _d = (e) => Zp.includes(e), Yi = (e) => /^-?[\d]+\/[0-1]\d$/.test(e), ar = " \u2014 ";
function rl(e) {
  return e.year + "/" + at(e.month);
}
he({ name: "QDate", props: { ...zo, ...xn, ...nt, modelValue: { required: true, validator: (e) => typeof e == "string" || Array.isArray(e) === true || Object(e) === e || e === null }, multiple: Boolean, range: Boolean, title: String, subtitle: String, mask: { ...zo.mask, default: "YYYY/MM/DD" }, defaultYearMonth: { type: String, validator: Yi }, yearsInMonthView: Boolean, events: [Array, Function], eventColor: [String, Function], emitImmediately: Boolean, options: [Array, Function], navigationMinYearMonth: { type: String, validator: Yi }, navigationMaxYearMonth: { type: String, validator: Yi }, noUnset: Boolean, firstDayOfWeek: [String, Number], todayBtn: Boolean, minimal: Boolean, defaultView: { type: String, default: "Calendar", validator: _d } }, emits: [...dh, "rangeStart", "rangeEnd", "navigation"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), { $q: r } = l, a = lt(e, r), { getCache: o } = Fa(), { tabindex: i, headerClass: u, getLocale: c, getCurrentDate: s } = fh(e, r);
  let f;
  const h = Ba(e), m = kl(h), g = K(null), w = K(He()), x = K(c()), T = v(() => He()), p = v(() => c()), y = v(() => s()), b = K(ue(w.value, x.value)), C = K(e.defaultView), $ = v(() => r.lang.rtl === true ? "right" : "left"), O = K($.value), H = K($.value), L = b.value.year, B = K(L - L % Nn - (L < 0 ? Nn : 0)), N = K(null), q = v(() => {
    const z = e.landscape === true ? "landscape" : "portrait";
    return `q-date q-date--${z} q-date--${z}-${e.minimal === true ? "minimal" : "standard"}` + (a.value === true ? " q-date--dark q-dark" : "") + (e.bordered === true ? " q-date--bordered" : "") + (e.square === true ? " q-date--square no-border-radius" : "") + (e.flat === true ? " q-date--flat no-shadow" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-date--readonly" : "");
  }), E = v(() => e.color || "primary"), k = v(() => e.textColor || "white"), j = v(() => e.emitImmediately === true && e.multiple !== true && e.range !== true), U = v(() => Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue !== null && e.modelValue !== void 0 ? [e.modelValue] : []), W = v(() => U.value.filter((z) => typeof z == "string").map((z) => Ve(z, w.value, x.value)).filter((z) => z.dateHash !== null && z.day !== null && z.month !== null && z.year !== null)), X = v(() => {
    const z = (Z) => Ve(Z, w.value, x.value);
    return U.value.filter((Z) => $t(Z) === true && Z.from !== void 0 && Z.to !== void 0).map((Z) => ({ from: z(Z.from), to: z(Z.to) })).filter((Z) => Z.from.dateHash !== null && Z.to.dateHash !== null && Z.from.dateHash < Z.to.dateHash);
  }), ae = v(() => e.calendar !== "persian" ? (z) => new Date(z.year, z.month - 1, z.day) : (z) => {
    const Z = bd(z.year, z.month, z.day);
    return new Date(Z.gy, Z.gm - 1, Z.gd);
  }), pe = v(() => e.calendar === "persian" ? Un : (z, Z, ve) => bh(new Date(z.year, z.month - 1, z.day, z.hour, z.minute, z.second, z.millisecond), Z === void 0 ? w.value : Z, ve === void 0 ? x.value : ve, z.year, z.timezoneOffset)), Y = v(() => W.value.length + X.value.reduce((z, Z) => z + 1 + gh(ae.value(Z.to), ae.value(Z.from)), 0)), _ = v(() => {
    if (e.title !== void 0 && e.title !== null && e.title.length !== 0) return e.title;
    if (N.value !== null) {
      const ve = N.value.init, qe = ae.value(ve);
      return x.value.daysShort[qe.getDay()] + ", " + x.value.monthsShort[ve.month - 1] + " " + ve.day + ar + "?";
    }
    if (Y.value === 0) return ar;
    if (Y.value > 1) return `${Y.value} ${x.value.pluralDay}`;
    const z = W.value[0], Z = ae.value(z);
    return isNaN(Z.valueOf()) === true ? ar : x.value.headerTitle !== void 0 ? x.value.headerTitle(Z, z) : x.value.daysShort[Z.getDay()] + ", " + x.value.monthsShort[z.month - 1] + " " + z.day;
  }), D = v(() => W.value.concat(X.value.map((Z) => Z.from)).sort((Z, ve) => Z.year - ve.year || Z.month - ve.month)[0]), F = v(() => W.value.concat(X.value.map((Z) => Z.to)).sort((Z, ve) => ve.year - Z.year || ve.month - Z.month)[0]), fe = v(() => {
    if (e.subtitle !== void 0 && e.subtitle !== null && e.subtitle.length !== 0) return e.subtitle;
    if (Y.value === 0) return ar;
    if (Y.value > 1) {
      const z = D.value, Z = F.value, ve = x.value.monthsShort;
      return ve[z.month - 1] + (z.year !== Z.year ? " " + z.year + ar + ve[Z.month - 1] + " " : z.month !== Z.month ? ar + ve[Z.month - 1] : "") + " " + Z.year;
    }
    return W.value[0].year;
  }), A = v(() => {
    const z = [r.iconSet.datetime.arrowLeft, r.iconSet.datetime.arrowRight];
    return r.lang.rtl === true ? z.reverse() : z;
  }), R = v(() => e.firstDayOfWeek !== void 0 ? Number(e.firstDayOfWeek) : x.value.firstDayOfWeek), G = v(() => {
    const z = x.value.daysShort, Z = R.value;
    return Z > 0 ? z.slice(Z, 7).concat(z.slice(0, Z)) : z;
  }), V = v(() => {
    const z = b.value;
    return e.calendar !== "persian" ? new Date(z.year, z.month, 0).getDate() : fo(z.year, z.month);
  }), ne = v(() => typeof e.eventColor == "function" ? e.eventColor : () => e.eventColor), be = v(() => {
    if (e.navigationMinYearMonth === void 0) return null;
    const z = e.navigationMinYearMonth.split("/");
    return { year: parseInt(z[0], 10), month: parseInt(z[1], 10) };
  }), S = v(() => {
    if (e.navigationMaxYearMonth === void 0) return null;
    const z = e.navigationMaxYearMonth.split("/");
    return { year: parseInt(z[0], 10), month: parseInt(z[1], 10) };
  }), M = v(() => {
    const z = { month: { prev: true, next: true }, year: { prev: true, next: true } };
    return be.value !== null && be.value.year >= b.value.year && (z.year.prev = false, be.value.year === b.value.year && be.value.month >= b.value.month && (z.month.prev = false)), S.value !== null && S.value.year <= b.value.year && (z.year.next = false, S.value.year === b.value.year && S.value.month <= b.value.month && (z.month.next = false)), z;
  }), I = v(() => {
    const z = {};
    return W.value.forEach((Z) => {
      const ve = rl(Z);
      z[ve] === void 0 && (z[ve] = []), z[ve].push(Z.day);
    }), z;
  }), ee = v(() => {
    const z = {};
    return X.value.forEach((Z) => {
      const ve = rl(Z.from), qe = rl(Z.to);
      if (z[ve] === void 0 && (z[ve] = []), z[ve].push({ from: Z.from.day, to: ve === qe ? Z.to.day : void 0, range: Z }), ve < qe) {
        let Ee;
        const { year: Ge, month: Le } = Z.from, ze = Le < 12 ? { year: Ge, month: Le + 1 } : { year: Ge + 1, month: 1 };
        for (; (Ee = rl(ze)) <= qe; ) z[Ee] === void 0 && (z[Ee] = []), z[Ee].push({ from: void 0, to: Ee === qe ? Z.to.day : void 0, range: Z }), ze.month++, ze.month > 12 && (ze.year++, ze.month = 1);
      }
    }), z;
  }), le = v(() => {
    if (N.value === null) return;
    const { init: z, initHash: Z, final: ve, finalHash: qe } = N.value, [Ee, Ge] = Z <= qe ? [z, ve] : [ve, z], Le = rl(Ee), ze = rl(Ge);
    if (Le !== P.value && ze !== P.value) return;
    const rt = {};
    return Le === P.value ? (rt.from = Ee.day, rt.includeFrom = true) : rt.from = 1, ze === P.value ? (rt.to = Ge.day, rt.includeTo = true) : rt.to = V.value, rt;
  }), P = v(() => rl(b.value)), te = v(() => {
    const z = {};
    if (e.options === void 0) {
      for (let ve = 1; ve <= V.value; ve++) z[ve] = true;
      return z;
    }
    const Z = typeof e.options == "function" ? e.options : (ve) => e.options.includes(ve);
    for (let ve = 1; ve <= V.value; ve++) {
      const qe = P.value + "/" + at(ve);
      z[ve] = Z(qe);
    }
    return z;
  }), se = v(() => {
    const z = {};
    if (e.events === void 0) for (let Z = 1; Z <= V.value; Z++) z[Z] = false;
    else {
      const Z = typeof e.events == "function" ? e.events : (ve) => e.events.includes(ve);
      for (let ve = 1; ve <= V.value; ve++) {
        const qe = P.value + "/" + at(ve);
        z[ve] = Z(qe) === true && ne.value(qe);
      }
    }
    return z;
  }), me = v(() => {
    let z, Z;
    const { year: ve, month: qe } = b.value;
    if (e.calendar !== "persian") z = new Date(ve, qe - 1, 1), Z = new Date(ve, qe - 1, 0).getDate();
    else {
      const Ee = bd(ve, qe, 1);
      z = new Date(Ee.gy, Ee.gm - 1, Ee.gd);
      let Ge = qe - 1, Le = ve;
      Ge === 0 && (Ge = 12, Le--), Z = fo(Le, Ge);
    }
    return { days: z.getDay() - R.value - 1, endDay: Z };
  }), ce = v(() => {
    const z = [], { days: Z, endDay: ve } = me.value, qe = Z < 0 ? Z + 7 : Z;
    if (qe < 6) for (let Le = ve - qe; Le <= ve; Le++) z.push({ i: Le, fill: true });
    const Ee = z.length;
    for (let Le = 1; Le <= V.value; Le++) {
      const ze = { i: Le, event: se.value[Le], classes: [] };
      te.value[Le] === true && (ze.in = true, ze.flat = true), z.push(ze);
    }
    if (I.value[P.value] !== void 0 && I.value[P.value].forEach((Le) => {
      const ze = Ee + Le - 1;
      Object.assign(z[ze], { selected: true, unelevated: true, flat: false, color: E.value, textColor: k.value });
    }), ee.value[P.value] !== void 0 && ee.value[P.value].forEach((Le) => {
      if (Le.from !== void 0) {
        const ze = Ee + Le.from - 1, rt = Ee + (Le.to || V.value) - 1;
        for (let dn = ze; dn <= rt; dn++) Object.assign(z[dn], { range: Le.range, unelevated: true, color: E.value, textColor: k.value });
        Object.assign(z[ze], { rangeFrom: true, flat: false }), Le.to !== void 0 && Object.assign(z[rt], { rangeTo: true, flat: false });
      } else if (Le.to !== void 0) {
        const ze = Ee + Le.to - 1;
        for (let rt = Ee; rt <= ze; rt++) Object.assign(z[rt], { range: Le.range, unelevated: true, color: E.value, textColor: k.value });
        Object.assign(z[ze], { flat: false, rangeTo: true });
      } else {
        const ze = Ee + V.value - 1;
        for (let rt = Ee; rt <= ze; rt++) Object.assign(z[rt], { range: Le.range, unelevated: true, color: E.value, textColor: k.value });
      }
    }), le.value !== void 0) {
      const Le = Ee + le.value.from - 1, ze = Ee + le.value.to - 1;
      for (let rt = Le; rt <= ze; rt++) z[rt].color = E.value, z[rt].editRange = true;
      le.value.includeFrom === true && (z[Le].editRangeFrom = true), le.value.includeTo === true && (z[ze].editRangeTo = true);
    }
    b.value.year === y.value.year && b.value.month === y.value.month && (z[Ee + y.value.day - 1].today = true);
    const Ge = z.length % 7;
    if (Ge > 0) {
      const Le = 7 - Ge;
      for (let ze = 1; ze <= Le; ze++) z.push({ i: ze, fill: true });
    }
    return z.forEach((Le) => {
      let ze = "q-date__calendar-item ";
      Le.fill === true ? ze += "q-date__calendar-item--fill" : (ze += `q-date__calendar-item--${Le.in === true ? "in" : "out"}`, Le.range !== void 0 && (ze += ` q-date__range${Le.rangeTo === true ? "-to" : Le.rangeFrom === true ? "-from" : ""}`), Le.editRange === true && (ze += ` q-date__edit-range${Le.editRangeFrom === true ? "-from" : ""}${Le.editRangeTo === true ? "-to" : ""}`), (Le.range !== void 0 || Le.editRange === true) && (ze += ` text-${Le.color}`)), Le.classes = ze;
    }), z;
  }), re = v(() => e.disable === true ? { "aria-disabled": "true" } : {});
  ge(() => e.modelValue, (z) => {
    if (f === JSON.stringify(z)) f = 0;
    else {
      const Z = ue(w.value, x.value);
      it(Z.year, Z.month, Z);
    }
  }), ge(C, () => {
    g.value !== null && l.$el.contains(document.activeElement) === true && g.value.focus();
  }), ge(() => b.value.year + "|" + b.value.month, () => {
    n("navigation", { year: b.value.year, month: b.value.month });
  }), ge(T, (z) => {
    Se(z, x.value, "mask"), w.value = z;
  }), ge(p, (z) => {
    Se(w.value, z, "locale"), x.value = z;
  });
  function Q(z) {
    f = JSON.stringify(z);
  }
  function ie() {
    const { year: z, month: Z, day: ve } = y.value, qe = { ...b.value, year: z, month: Z, day: ve }, Ee = I.value[rl(qe)];
    (Ee === void 0 || Ee.includes(qe.day) === false) && In(qe), Te(qe.year, qe.month);
  }
  function we(z) {
    _d(z) === true && (C.value = z);
  }
  function ke(z, Z) {
    ["month", "year"].includes(z) && (z === "month" ? oe : _e2)(Z === true ? -1 : 1);
  }
  function Te(z, Z) {
    C.value = "Calendar", it(z, Z);
  }
  function Me(z, Z) {
    if (e.range === false || !z) {
      N.value = null;
      return;
    }
    const ve = Object.assign({ ...b.value }, z), qe = Z !== void 0 ? Object.assign({ ...b.value }, Z) : ve;
    N.value = { init: ve, initHash: Un(ve), final: qe, finalHash: Un(qe) }, Te(ve.year, ve.month);
  }
  function He() {
    return e.calendar === "persian" ? "YYYY/MM/DD" : e.mask;
  }
  function Ve(z, Z, ve) {
    return Yr(z, Z, ve, e.calendar, { hour: 0, minute: 0, second: 0, millisecond: 0 });
  }
  function ue(z, Z) {
    const ve = Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue ? [e.modelValue] : [];
    if (ve.length === 0) return ye();
    const qe = ve[ve.length - 1], Ee = Ve(qe.from !== void 0 ? qe.from : qe, z, Z);
    return Ee.dateHash === null ? ye() : Ee;
  }
  function ye() {
    let z, Z;
    if (e.defaultYearMonth !== void 0) {
      const ve = e.defaultYearMonth.split("/");
      z = parseInt(ve[0], 10), Z = parseInt(ve[1], 10);
    } else {
      const ve = y.value !== void 0 ? y.value : s();
      z = ve.year, Z = ve.month;
    }
    return { year: z, month: Z, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0, dateHash: z + "/" + at(Z) + "/01" };
  }
  function oe(z) {
    let Z = b.value.year, ve = Number(b.value.month) + z;
    ve === 13 ? (ve = 1, Z++) : ve === 0 && (ve = 12, Z--), it(Z, ve), j.value === true && Ut("month");
  }
  function _e2(z) {
    const Z = Number(b.value.year) + z;
    it(Z, b.value.month), j.value === true && Ut("year");
  }
  function Ce(z) {
    it(z, b.value.month), C.value = e.defaultView === "Years" ? "Months" : "Calendar", j.value === true && Ut("year");
  }
  function Oe(z) {
    it(b.value.year, z), C.value = "Calendar", j.value === true && Ut("month");
  }
  function Re(z, Z) {
    var _a3;
    (((_a3 = I.value[Z]) == null ? void 0 : _a3.includes(z.day)) === true ? de : In)(z);
  }
  function Ye(z) {
    return { year: z.year, month: z.month, day: z.day };
  }
  function it(z, Z, ve) {
    if (be.value !== null && z <= be.value.year && ((Z < be.value.month || z < be.value.year) && (Z = be.value.month), z = be.value.year), S.value !== null && z >= S.value.year && ((Z > S.value.month || z > S.value.year) && (Z = S.value.month), z = S.value.year), ve !== void 0) {
      const { hour: Ee, minute: Ge, second: Le, millisecond: ze, timezoneOffset: rt, timeHash: dn } = ve;
      Object.assign(b.value, { hour: Ee, minute: Ge, second: Le, millisecond: ze, timezoneOffset: rt, timeHash: dn });
    }
    const qe = z + "/" + at(Z) + "/01";
    qe !== b.value.dateHash && (O.value = b.value.dateHash < qe == (r.lang.rtl !== true) ? "left" : "right", z !== b.value.year && (H.value = O.value), We(() => {
      B.value = z - z % Nn - (z < 0 ? Nn : 0), Object.assign(b.value, { year: z, month: Z, day: 1, dateHash: qe });
    }));
  }
  function Ct(z, Z, ve) {
    const qe = z !== null && z.length === 1 && e.multiple === false ? z[0] : z, { reason: Ee, details: Ge } = nl(Z, ve);
    Q(qe), n("update:modelValue", qe, Ee, Ge);
  }
  function Ut(z) {
    const Z = W.value[0] !== void 0 && W.value[0].dateHash !== null ? { ...W.value[0] } : { ...b.value };
    We(() => {
      Z.year = b.value.year, Z.month = b.value.month;
      const ve = e.calendar !== "persian" ? new Date(Z.year, Z.month, 0).getDate() : fo(Z.year, Z.month);
      Z.day = Math.min(Math.max(1, Z.day), ve);
      const qe = rn(Z), { details: Ee } = nl("", Z);
      Q(qe), n("update:modelValue", qe, z, Ee);
    });
  }
  function nl(z, Z) {
    return Z.from !== void 0 ? { reason: `${z}-range`, details: { ...Ye(Z.target), from: Ye(Z.from), to: Ye(Z.to) } } : { reason: `${z}-day`, details: Ye(Z) };
  }
  function rn(z, Z, ve) {
    return z.from !== void 0 ? { from: pe.value(z.from, Z, ve), to: pe.value(z.to, Z, ve) } : pe.value(z, Z, ve);
  }
  function In(z) {
    let Z;
    if (e.multiple === true) if (z.from !== void 0) {
      const ve = Un(z.from), qe = Un(z.to), Ee = W.value.filter((Le) => Le.dateHash < ve || Le.dateHash > qe), Ge = X.value.filter(({ from: Le, to: ze }) => ze.dateHash < ve || Le.dateHash > qe);
      Z = Ee.concat(Ge).concat(z).map((Le) => rn(Le));
    } else {
      const ve = U.value.slice();
      ve.push(rn(z)), Z = ve;
    }
    else Z = rn(z);
    Ct(Z, "add", z);
  }
  function de(z) {
    if (e.noUnset === true) return;
    let Z = null;
    if (e.multiple === true && Array.isArray(e.modelValue) === true) {
      const ve = rn(z);
      z.from !== void 0 ? Z = e.modelValue.filter((qe) => qe.from !== void 0 ? qe.from !== ve.from && qe.to !== ve.to : true) : Z = e.modelValue.filter((qe) => qe !== ve), Z.length === 0 && (Z = null);
    }
    Ct(Z, "remove", z);
  }
  function Se(z, Z, ve) {
    const qe = W.value.concat(X.value).map((Ge) => rn(Ge, z, Z)).filter((Ge) => Ge.from !== void 0 ? Ge.from.dateHash !== null && Ge.to.dateHash !== null : Ge.dateHash !== null), Ee = (e.multiple === true ? qe : qe[0]) || null;
    Q(Ee), n("update:modelValue", Ee, ve);
  }
  function Fe() {
    if (e.minimal !== true) return d("div", { class: "q-date__header " + u.value }, [d("div", { class: "relative-position" }, [d(Ot, { name: "q-transition--fade" }, () => d("div", { key: "h-yr-" + fe.value, class: "q-date__header-subtitle q-date__header-link " + (C.value === "Years" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: i.value, ...o("vY", { onClick() {
      C.value = "Years";
    }, onKeyup(z) {
      z.keyCode === 13 && (C.value = "Years");
    } }) }, [fe.value]))]), d("div", { class: "q-date__header-title relative-position flex no-wrap" }, [d("div", { class: "relative-position col" }, [d(Ot, { name: "q-transition--fade" }, () => d("div", { key: "h-sub" + _.value, class: "q-date__header-title-label q-date__header-link " + (C.value === "Calendar" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: i.value, ...o("vC", { onClick() {
      C.value = "Calendar";
    }, onKeyup(z) {
      z.keyCode === 13 && (C.value = "Calendar");
    } }) }, [_.value]))]), e.todayBtn === true ? d(Ze, { class: "q-date__header-today self-start", icon: r.iconSet.datetime.today, ariaLabel: r.lang.date.today, flat: true, size: "sm", round: true, tabindex: i.value, onClick: ie }) : null])]);
  }
  function Be({ label: z, type: Z, key: ve, dir: qe, goTo: Ee, boundaries: Ge, cls: Le }) {
    return [d("div", { class: "row items-center q-date__arrow" }, [d(Ze, { round: true, dense: true, size: "sm", flat: true, icon: A.value[0], ariaLabel: Z === "Years" ? r.lang.date.prevYear : r.lang.date.prevMonth, tabindex: i.value, disable: Ge.prev === false, ...o("go-#" + Z, { onClick() {
      Ee(-1);
    } }) })]), d("div", { class: "relative-position overflow-hidden flex flex-center" + Le }, [d(Ot, { name: "q-transition--jump-" + qe }, () => d("div", { key: ve }, [d(Ze, { flat: true, dense: true, noCaps: true, label: z, tabindex: i.value, ...o("view#" + Z, { onClick: () => {
      C.value = Z;
    } }) })]))]), d("div", { class: "row items-center q-date__arrow" }, [d(Ze, { round: true, dense: true, size: "sm", flat: true, icon: A.value[1], ariaLabel: Z === "Years" ? r.lang.date.nextYear : r.lang.date.nextMonth, tabindex: i.value, disable: Ge.next === false, ...o("go+#" + Z, { onClick() {
      Ee(1);
    } }) })])];
  }
  const Ue = { Calendar: () => [d("div", { key: "calendar-view", class: "q-date__view q-date__calendar" }, [d("div", { class: "q-date__navigation row items-center no-wrap" }, Be({ label: x.value.months[b.value.month - 1], type: "Months", key: b.value.month, dir: O.value, goTo: oe, boundaries: M.value.month, cls: " col" }).concat(Be({ label: b.value.year, type: "Years", key: b.value.year, dir: H.value, goTo: _e2, boundaries: M.value.year, cls: "" }))), d("div", { class: "q-date__calendar-weekdays row items-center no-wrap" }, G.value.map((z) => d("div", { class: "q-date__calendar-item" }, [d("div", z)]))), d("div", { class: "q-date__calendar-days-container relative-position overflow-hidden" }, [d(Ot, { name: "q-transition--slide-" + O.value }, () => d("div", { key: P.value, class: "q-date__calendar-days fit" }, ce.value.map((z) => d("div", { class: z.classes }, [z.in === true ? d(Ze, { class: z.today === true ? "q-date__today" : "", dense: true, flat: z.flat, unelevated: z.unelevated, color: z.color, textColor: z.textColor, label: z.i, tabindex: i.value, ...o("day#" + z.i, { onClick: () => {
    yt(z.i);
  }, onMouseover: () => {
    ht(z.i);
  } }) }, z.event !== false ? () => d("div", { class: "q-date__event bg-" + z.event }) : null) : d("div", "" + z.i)]))))])])], Months() {
    const z = b.value.year === y.value.year, Z = (qe) => be.value !== null && b.value.year === be.value.year && be.value.month > qe || S.value !== null && b.value.year === S.value.year && S.value.month < qe, ve = x.value.monthsShort.map((qe, Ee) => {
      const Ge = b.value.month === Ee + 1;
      return d("div", { class: "q-date__months-item flex flex-center" }, [d(Ze, { class: z === true && y.value.month === Ee + 1 ? "q-date__today" : null, flat: Ge !== true, label: qe, unelevated: Ge, color: Ge === true ? E.value : null, textColor: Ge === true ? k.value : null, tabindex: i.value, disable: Z(Ee + 1), ...o("month#" + Ee, { onClick: () => {
        Oe(Ee + 1);
      } }) })]);
    });
    return e.yearsInMonthView === true && ve.unshift(d("div", { class: "row no-wrap full-width" }, [Be({ label: b.value.year, type: "Years", key: b.value.year, dir: H.value, goTo: _e2, boundaries: M.value.year, cls: " col" })])), d("div", { key: "months-view", class: "q-date__view q-date__months flex flex-center" }, ve);
  }, Years() {
    const z = B.value, Z = z + Nn, ve = [], qe = (Ee) => be.value !== null && be.value.year > Ee || S.value !== null && S.value.year < Ee;
    for (let Ee = z; Ee <= Z; Ee++) {
      const Ge = b.value.year === Ee;
      ve.push(d("div", { class: "q-date__years-item flex flex-center" }, [d(Ze, { key: "yr" + Ee, class: y.value.year === Ee ? "q-date__today" : null, flat: !Ge, label: Ee, dense: true, unelevated: Ge, color: Ge === true ? E.value : null, textColor: Ge === true ? k.value : null, tabindex: i.value, disable: qe(Ee), ...o("yr#" + Ee, { onClick: () => {
        Ce(Ee);
      } }) })]));
    }
    return d("div", { class: "q-date__view q-date__years flex flex-center" }, [d("div", { class: "col-auto" }, [d(Ze, { round: true, dense: true, flat: true, icon: A.value[0], ariaLabel: r.lang.date.prevRangeYears(Nn), tabindex: i.value, disable: qe(z), ...o("y-", { onClick: () => {
      B.value -= Nn;
    } }) })]), d("div", { class: "q-date__years-content col self-stretch row items-center" }, ve), d("div", { class: "col-auto" }, [d(Ze, { round: true, dense: true, flat: true, icon: A.value[1], ariaLabel: r.lang.date.nextRangeYears(Nn), tabindex: i.value, disable: qe(Z), ...o("y+", { onClick: () => {
      B.value += Nn;
    } }) })])]);
  } };
  function yt(z) {
    const Z = { ...b.value, day: z };
    if (e.range === false) {
      Re(Z, P.value);
      return;
    }
    if (N.value === null) {
      const ve = ce.value.find((Ee) => Ee.fill !== true && Ee.i === z);
      if (e.noUnset !== true && ve.range !== void 0) {
        de({ target: Z, from: ve.range.from, to: ve.range.to });
        return;
      }
      if (ve.selected === true) {
        de(Z);
        return;
      }
      const qe = Un(Z);
      N.value = { init: Z, initHash: qe, final: Z, finalHash: qe }, n("rangeStart", Ye(Z));
    } else {
      const ve = N.value.initHash, qe = Un(Z), Ee = ve <= qe ? { from: N.value.init, to: Z } : { from: Z, to: N.value.init };
      N.value = null, In(ve === qe ? Z : { target: Z, ...Ee }), n("rangeEnd", { from: Ye(Ee.from), to: Ye(Ee.to) });
    }
  }
  function ht(z) {
    if (N.value !== null) {
      const Z = { ...b.value, day: z };
      Object.assign(N.value, { final: Z, finalHash: Un(Z) });
    }
  }
  return Object.assign(l, { setToday: ie, setView: we, offsetCalendar: ke, setCalendarTo: Te, setEditingRange: Me }), () => {
    const z = [d("div", { class: "q-date__content col relative-position" }, [d(Ot, { name: "q-transition--fade" }, Ue[C.value])])], Z = $e(t.default);
    return Z !== void 0 && z.push(d("div", { class: "q-date__actions" }, Z)), e.name !== void 0 && e.disable !== true && m(z, "push"), d("div", { class: q.value, ...re.value }, [Fe(), d("div", { ref: g, class: "q-date__main col column", tabindex: -1 }, z)]);
  };
} });
function yh(e, t, n) {
  let l;
  function r() {
    l !== void 0 && (wa.remove(l), l = void 0);
  }
  return Ke(() => {
    e.value === true && r();
  }), { removeFromHistory: r, addToHistory() {
    l = { condition: () => n.value === true, handler: t }, wa.add(l);
  } };
}
var zr = 0, Xi, Gi, Xr, Zi = false, wd, xd, Sd, El = null;
function Jp(e) {
  e1(e) && je(e);
}
function e1(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop")) return true;
  const t = fy(e), n = e.shiftKey && !e.deltaX, l = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY), r = n || l ? e.deltaY : e.deltaX;
  for (let a = 0; a < t.length; a++) {
    const o = t[a];
    if (up(o, l)) return l ? r < 0 && o.scrollTop === 0 ? true : r > 0 && o.scrollTop + o.clientHeight === o.scrollHeight : r < 0 && o.scrollLeft === 0 ? true : r > 0 && o.scrollLeft + o.clientWidth === o.scrollWidth;
  }
  return true;
}
function Cd(e) {
  e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function Ya(e) {
  Zi !== true && (Zi = true, requestAnimationFrame(() => {
    Zi = false;
    const { height: t } = e.target, { clientHeight: n, scrollTop: l } = document.scrollingElement;
    (Xr === void 0 || t !== window.innerHeight) && (Xr = n - t, document.scrollingElement.scrollTop = l), l > Xr && (document.scrollingElement.scrollTop -= Math.ceil((l - Xr) / 8));
  }));
}
function kd(e) {
  const t = document.body, n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: l, overflowX: r } = window.getComputedStyle(t);
    Xi = fi(window), Gi = yl(window), wd = t.style.left, xd = t.style.top, Sd = window.location.href, t.style.left = `-${Xi}px`, t.style.top = `-${Gi}px`, r !== "hidden" && (r === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), l !== "hidden" && (l === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = true, De.is.ios === true && (n === true ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", Ya, dt.passiveCapture), window.visualViewport.addEventListener("scroll", Ya, dt.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", Cd, dt.passiveCapture));
  }
  De.is.desktop === true && De.is.mac === true && window[`${e}EventListener`]("wheel", Jp, dt.notPassive), e === "remove" && (De.is.ios === true && (n === true ? (window.visualViewport.removeEventListener("resize", Ya, dt.passiveCapture), window.visualViewport.removeEventListener("scroll", Ya, dt.passiveCapture)) : window.removeEventListener("scroll", Cd, dt.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = false, t.style.left = wd, t.style.top = xd, window.location.href === Sd && window.scrollTo(Xi, Gi), Xr = void 0);
}
function Uu(e) {
  let t = "add";
  if (e === true) {
    if (zr++, El !== null) {
      clearTimeout(El), El = null;
      return;
    }
    if (zr > 1) return;
  } else {
    if (zr === 0 || (zr--, zr > 0)) return;
    if (t = "remove", De.is.ios === true && De.is.nativeMobile === true) {
      El !== null && clearTimeout(El), El = setTimeout(() => {
        kd(t), El = null;
      }, 100);
      return;
    }
  }
  kd(t);
}
function ph() {
  let e;
  return { preventBodyScroll(t) {
    t !== e && (e !== void 0 || t === true) && (e = t, Uu(t));
  } };
}
var Xa = 0, t1 = { standard: "fixed-full flex-center", top: "fixed-top justify-center", bottom: "fixed-bottom justify-center", right: "fixed-right items-center", left: "fixed-left items-center" }, Td = { standard: ["scale", "scale"], top: ["slide-down", "slide-up"], bottom: ["slide-up", "slide-down"], right: ["slide-left", "slide-right"], left: ["slide-right", "slide-left"] }, hi = he({ name: "QDialog", inheritAttrs: false, props: { ...Pr, ...zl, transitionShow: String, transitionHide: String, persistent: Boolean, autoClose: Boolean, allowFocusOutside: Boolean, noEscDismiss: Boolean, noBackdropDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, noShake: Boolean, seamless: Boolean, maximized: Boolean, fullWidth: Boolean, fullHeight: Boolean, square: Boolean, backdropFilter: String, position: { type: String, default: "standard", validator: (e) => ["standard", "top", "bottom", "left", "right"].includes(e) } }, emits: [...$r, "shake", "click", "escapeKey"], setup(e, { slots: t, emit: n, attrs: l }) {
  const r = xe(), a = K(null), o = K(false), i = K(false);
  let u = null, c = null, s, f;
  const h = v(() => e.persistent !== true && e.noRouteDismiss !== true && e.seamless !== true), { preventBodyScroll: m } = ph(), { registerTimeout: g } = Zn(), { registerTick: w, removeTick: x } = _r(), { transitionProps: T, transitionStyle: p } = di(e, () => Td[e.position][0], () => Td[e.position][1]), y = v(() => p.value + (e.backdropFilter !== void 0 ? `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}` : "")), { showPortal: b, hidePortal: C, portalIsAccessible: $, renderPortal: O } = As(r, a, fe, "dialog"), { hide: H } = Lr({ showing: o, hideOnRouteChange: h, handleShow: j, handleHide: U, processOnMount: true }), { addToHistory: L, removeFromHistory: B } = yh(o, H, h), N = v(() => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === true ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${t1[e.position]}` + (i.value === true ? " q-dialog__inner--animating" : "") + (e.fullWidth === true ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === true ? " q-dialog__inner--fullheight" : "") + (e.square === true ? " q-dialog__inner--square" : "")), q = v(() => o.value === true && e.seamless !== true), E = v(() => e.autoClose === true ? { onClick: _ } : {}), k = v(() => [`q-dialog fullscreen no-pointer-events q-dialog--${q.value === true ? "modal" : "seamless"}`, l.class]);
  ge(() => e.maximized, (A) => {
    o.value === true && Y(A);
  }), ge(q, (A) => {
    m(A), A === true ? (Im(F), Vm(ae)) : (zu(F), $o(ae));
  });
  function j(A) {
    var _a3;
    L(), c = e.noRefocus === false && document.activeElement !== null ? document.activeElement : null, Y(e.maximized), b(), i.value = true, e.noFocus !== true ? ((_a3 = document.activeElement) == null ? void 0 : _a3.blur(), w(W)) : x(), g(() => {
      if (r.proxy.$q.platform.is.ios === true) {
        if (e.seamless !== true && document.activeElement) {
          const { top: R, bottom: G } = document.activeElement.getBoundingClientRect(), { innerHeight: V } = window, ne = window.visualViewport !== void 0 ? window.visualViewport.height : V;
          R > 0 && G > ne / 2 && (document.scrollingElement.scrollTop = Math.min(document.scrollingElement.scrollHeight - ne, G >= V ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + G - ne / 2))), document.activeElement.scrollIntoView();
        }
        f = true, a.value.click(), f = false;
      }
      b(true), i.value = false, n("show", A);
    }, e.transitionDuration);
  }
  function U(A) {
    x(), B(), pe(true), i.value = true, C(), c !== null && ((((A == null ? void 0 : A.type.indexOf("key")) === 0 ? c.closest('[tabindex]:not([tabindex^="-"])') : void 0) || c).focus(), c = null), g(() => {
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
  function ae() {
    e.seamless !== true && (e.persistent === true || e.noEscDismiss === true ? e.maximized !== true && e.noShake !== true && X() : (n("escapeKey"), H()));
  }
  function pe(A) {
    u !== null && (clearTimeout(u), u = null), (A === true || o.value === true) && (Y(false), e.seamless !== true && (m(false), zu(F), $o(ae))), A !== true && (c = null);
  }
  function Y(A) {
    A === true ? s !== true && (Xa < 1 && document.body.classList.add("q-body--dialog"), Xa++, s = true) : s === true && (Xa < 2 && document.body.classList.remove("q-body--dialog"), Xa--, s = false);
  }
  function _(A) {
    f !== true && (H(A), n("click", A));
  }
  function D(A) {
    e.persistent !== true && e.noBackdropDismiss !== true ? H(A) : e.noShake !== true && X();
  }
  function F(A) {
    e.allowFocusOutside !== true && $.value === true && km(a.value, A.target) !== true && W('[tabindex]:not([tabindex="-1"])');
  }
  Object.assign(r.proxy, { focus: W, shake: X, __updateRefocusTarget(A) {
    c = A || null;
  } }), Ke(pe);
  function fe() {
    return d("div", { role: "dialog", "aria-modal": q.value === true ? "true" : "false", ...l, class: k.value }, [d(Ot, { name: "q-transition--fade", appear: true }, () => q.value === true ? d("div", { class: "q-dialog__backdrop fixed-full", style: y.value, "aria-hidden": "true", tabindex: -1, onClick: D }) : null), d(Ot, T.value, () => o.value === true ? d("div", { ref: a, class: N.value, style: p.value, tabindex: -1, ...E.value }, $e(t.default)) : null)]);
  }
  return O;
} }), qd = 150, Md = he({ name: "QDrawer", inheritAttrs: false, props: { ...Pr, ...nt, side: { type: String, default: "left", validator: (e) => ["left", "right"].includes(e) }, width: { type: Number, default: 300 }, mini: Boolean, miniToOverlay: Boolean, miniWidth: { type: Number, default: 57 }, noMiniAnimation: Boolean, breakpoint: { type: Number, default: 1023 }, showIfAbove: Boolean, behavior: { type: String, validator: (e) => ["default", "desktop", "mobile"].includes(e), default: "default" }, bordered: Boolean, elevated: Boolean, overlay: Boolean, persistent: Boolean, noSwipeOpen: Boolean, noSwipeClose: Boolean, noSwipeBackdrop: Boolean }, emits: [...$r, "onLayout", "miniState"], setup(e, { slots: t, emit: n, attrs: l }) {
  const r = xe(), { proxy: { $q: a } } = r, o = lt(e, a), { preventBodyScroll: i } = ph(), { registerTimeout: u, removeTimeout: c } = Zn(), s = qt(Gl, ot);
  if (s === ot) return console.error("QDrawer needs to be child of QLayout"), ot;
  let f, h = null, m;
  const g = K(e.behavior === "mobile" || e.behavior !== "desktop" && s.totalWidth.value <= e.breakpoint), w = v(() => e.mini === true && g.value !== true), x = v(() => w.value === true ? e.miniWidth : e.width), T = K(e.showIfAbove === true && g.value === false ? true : e.modelValue === true), p = v(() => e.persistent !== true && (g.value === true || pe.value === true));
  function y(Q, ie) {
    if (O(), Q !== false && s.animate(), M(0), g.value === true) {
      const we = s.instances[U.value];
      (we == null ? void 0 : we.belowBreakpoint) === true && we.hide(false), I(1), s.isContainer.value !== true && i(true);
    } else I(0), Q !== false && ee(false);
    u(() => {
      Q !== false && ee(true), ie !== true && n("show", Q);
    }, qd);
  }
  function b(Q, ie) {
    H(), Q !== false && s.animate(), I(0), M(N.value * x.value), se(), ie !== true ? u(() => {
      n("hide", Q);
    }, qd) : c();
  }
  const { show: C, hide: $ } = Lr({ showing: T, hideOnRouteChange: p, handleShow: y, handleHide: b }), { addToHistory: O, removeFromHistory: H } = yh(T, $, p), L = { belowBreakpoint: g, hide: $ }, B = v(() => e.side === "right"), N = v(() => (a.lang.rtl === true ? -1 : 1) * (B.value === true ? 1 : -1)), q = K(0), E = K(false), k = K(false), j = K(x.value * N.value), U = v(() => B.value === true ? "left" : "right"), W = v(() => T.value === true && g.value === false && e.overlay === false ? e.miniToOverlay === true ? e.miniWidth : x.value : 0), X = v(() => e.overlay === true || e.miniToOverlay === true || s.view.value.indexOf(B.value ? "R" : "L") !== -1 || a.platform.is.ios === true && s.isContainer.value === true), ae = v(() => e.overlay === false && T.value === true && g.value === false), pe = v(() => e.overlay === true && T.value === true && g.value === false), Y = v(() => "fullscreen q-drawer__backdrop" + (T.value === false && E.value === false ? " hidden" : "")), _ = v(() => ({ backgroundColor: `rgba(0,0,0,${q.value * 0.4})` })), D = v(() => B.value === true ? s.rows.value.top[2] === "r" : s.rows.value.top[0] === "l"), F = v(() => B.value === true ? s.rows.value.bottom[2] === "r" : s.rows.value.bottom[0] === "l"), fe = v(() => {
    const Q = {};
    return s.header.space === true && D.value === false && (X.value === true ? Q.top = `${s.header.offset}px` : s.header.space === true && (Q.top = `${s.header.size}px`)), s.footer.space === true && F.value === false && (X.value === true ? Q.bottom = `${s.footer.offset}px` : s.footer.space === true && (Q.bottom = `${s.footer.size}px`)), Q;
  }), A = v(() => {
    const Q = { width: `${x.value}px`, transform: `translateX(${j.value}px)` };
    return g.value === true ? Q : Object.assign(Q, fe.value);
  }), R = v(() => "q-drawer__content fit " + (s.isContainer.value !== true ? "scroll" : "overflow-auto")), G = v(() => `q-drawer q-drawer--${e.side}` + (k.value === true ? " q-drawer--mini-animate" : "") + (e.bordered === true ? " q-drawer--bordered" : "") + (o.value === true ? " q-drawer--dark q-dark" : "") + (E.value === true ? " no-transition" : T.value === true ? "" : " q-layout--prevent-focus") + (g.value === true ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${w.value === true ? "mini" : "standard"}` + (X.value === true || ae.value !== true ? " fixed" : "") + (e.overlay === true || e.miniToOverlay === true ? " q-drawer--on-top" : "") + (D.value === true ? " q-drawer--top-padding" : ""))), V = v(() => {
    const Q = a.lang.rtl === true ? e.side : U.value;
    return [[bn, P, void 0, { [Q]: true, mouse: true }]];
  }), ne = v(() => {
    const Q = a.lang.rtl === true ? U.value : e.side;
    return [[bn, te, void 0, { [Q]: true, mouse: true }]];
  }), be = v(() => {
    const Q = a.lang.rtl === true ? U.value : e.side;
    return [[bn, te, void 0, { [Q]: true, mouse: true, mouseAllDir: true }]];
  });
  function S() {
    ce(g, e.behavior === "mobile" || e.behavior !== "desktop" && s.totalWidth.value <= e.breakpoint);
  }
  ge(g, (Q) => {
    Q === true ? (f = T.value, T.value === true && $(false)) : e.overlay === false && e.behavior !== "mobile" && f !== false && (T.value === true ? (M(0), I(0), se()) : C(false));
  }), ge(() => e.side, (Q, ie) => {
    s.instances[ie] === L && (s.instances[ie] = void 0, s[ie].space = false, s[ie].offset = 0), s.instances[Q] = L, s[Q].size = x.value, s[Q].space = ae.value, s[Q].offset = W.value;
  }), ge(s.totalWidth, () => {
    (s.isContainer.value === true || document.qScrollPrevented !== true) && S();
  }), ge(() => e.behavior + e.breakpoint, S), ge(s.isContainer, (Q) => {
    T.value === true && i(Q !== true), Q === true && S();
  }), ge(s.scrollbarWidth, () => {
    M(T.value === true ? 0 : void 0);
  }), ge(W, (Q) => {
    me("offset", Q);
  }), ge(ae, (Q) => {
    n("onLayout", Q), me("space", Q);
  }), ge(B, () => {
    M();
  }), ge(x, (Q) => {
    M(), re(e.miniToOverlay, Q);
  }), ge(() => e.miniToOverlay, (Q) => {
    re(Q, x.value);
  }), ge(() => a.lang.rtl, () => {
    M();
  }), ge(() => e.mini, () => {
    e.noMiniAnimation || e.modelValue === true && (le(), s.animate());
  }), ge(w, (Q) => {
    n("miniState", Q);
  });
  function M(Q) {
    Q === void 0 ? We(() => {
      Q = T.value === true ? 0 : x.value, M(N.value * Q);
    }) : (s.isContainer.value === true && B.value === true && (g.value === true || Math.abs(Q) === x.value) && (Q += N.value * s.scrollbarWidth.value), j.value = Q);
  }
  function I(Q) {
    q.value = Q;
  }
  function ee(Q) {
    const ie = Q === true ? "remove" : s.isContainer.value !== true ? "add" : "";
    ie !== "" && document.body.classList[ie]("q-body--drawer-toggle");
  }
  function le() {
    h !== null && clearTimeout(h), r.proxy && r.proxy.$el && r.proxy.$el.classList.add("q-drawer--mini-animate"), k.value = true, h = setTimeout(() => {
      var _a3, _b2;
      h = null, k.value = false, (_b2 = (_a3 = r == null ? void 0 : r.proxy) == null ? void 0 : _a3.$el) == null ? void 0 : _b2.classList.remove("q-drawer--mini-animate");
    }, 150);
  }
  function P(Q) {
    if (T.value !== false) return;
    const ie = x.value, we = ct(Q.distance.x, 0, ie);
    if (Q.isFinal === true) {
      we >= Math.min(75, ie) === true ? C() : (s.animate(), I(0), M(N.value * ie)), E.value = false;
      return;
    }
    M((a.lang.rtl === true ? B.value !== true : B.value) ? Math.max(ie - we, 0) : Math.min(0, we - ie)), I(ct(we / ie, 0, 1)), Q.isFirst === true && (E.value = true);
  }
  function te(Q) {
    if (T.value !== true) return;
    const ie = x.value, we = Q.direction === e.side, ke = (a.lang.rtl === true ? we !== true : we) ? ct(Q.distance.x, 0, ie) : 0;
    if (Q.isFinal === true) {
      Math.abs(ke) < Math.min(75, ie) === true ? (s.animate(), I(1), M(0)) : $(), E.value = false;
      return;
    }
    M(N.value * ke), I(ct(1 - ke / ie, 0, 1)), Q.isFirst === true && (E.value = true);
  }
  function se() {
    i(false), ee(true);
  }
  function me(Q, ie) {
    s.update(e.side, Q, ie);
  }
  function ce(Q, ie) {
    Q.value !== ie && (Q.value = ie);
  }
  function re(Q, ie) {
    me("size", Q === true ? e.miniWidth : ie);
  }
  return s.instances[e.side] = L, re(e.miniToOverlay, x.value), me("space", ae.value), me("offset", W.value), e.showIfAbove === true && e.modelValue !== true && T.value === true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", true), ft(() => {
    n("onLayout", ae.value), n("miniState", w.value), f = e.showIfAbove === true;
    const Q = () => {
      (T.value === true ? y : b)(false, true);
    };
    if (s.totalWidth.value !== 0) {
      We(Q);
      return;
    }
    m = ge(s.totalWidth, () => {
      m(), m = void 0, T.value === false && e.showIfAbove === true && g.value === false ? C(false) : Q();
    });
  }), Ke(() => {
    m == null ? void 0 : m(), h !== null && (clearTimeout(h), h = null), T.value === true && se(), s.instances[e.side] === L && (s.instances[e.side] = void 0, me("size", 0), me("offset", 0), me("space", false));
  }), () => {
    const Q = [];
    g.value === true && (e.noSwipeOpen === false && Q.push(cn(d("div", { key: "open", class: `q-drawer__opener fixed-${e.side}`, "aria-hidden": "true" }), V.value)), Q.push(_n("div", { ref: "backdrop", class: Y.value, style: _.value, "aria-hidden": "true", onClick: $ }, void 0, "backdrop", e.noSwipeBackdrop !== true && T.value === true, () => be.value)));
    const ie = w.value === true && t.mini !== void 0, we = [d("div", { ...l, key: "" + ie, class: [R.value, l.class] }, ie === true ? t.mini() : $e(t.default))];
    return e.elevated === true && T.value === true && we.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), Q.push(_n("aside", { ref: "content", class: G.value, style: A.value }, we, "contentclose", e.noSwipeClose !== true && g.value === true, () => ne.value)), d("div", { class: "q-drawer-container" }, Q);
  };
} });
function _h(e, t) {
  if (t && e === t) return null;
  const n = e.nodeName.toLowerCase();
  if (["div", "li", "ul", "ol", "blockquote"].includes(n) === true) return e;
  const l = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle, r = l.display;
  return r === "block" || r === "table" ? e : _h(e.parentNode);
}
function Ji(e, t, n) {
  return !e || e === document.body ? false : n === true && e === t || (t === document ? document.body : t).contains(e.parentNode);
}
function wh(e, t, n) {
  if (n || (n = document.createRange(), n.selectNode(e), n.setStart(e, 0)), t.count === 0) n.setEnd(e, t.count);
  else if (t.count > 0) if (e.nodeType === Node.TEXT_NODE) e.textContent.length < t.count ? t.count -= e.textContent.length : (n.setEnd(e, t.count), t.count = 0);
  else for (let l = 0; t.count !== 0 && l < e.childNodes.length; l++) n = wh(e.childNodes[l], t, n);
  return n;
}
var n1 = /^https?:\/\//, l1 = class {
  constructor(e, t) {
    this.el = e, this.eVm = t, this._range = null;
  }
  get selection() {
    if (this.el) {
      const e = document.getSelection();
      if (Ji(e.anchorNode, this.el, true) && Ji(e.focusNode, this.el, true)) return e;
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
    return e !== null ? _h(e, this.el) : null;
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
    if (n.focusNode && Ji(n.focusNode, l)) for (t = n.focusNode, e = n.focusOffset; t && t !== l; ) t !== this.el && t.previousSibling ? (t = t.previousSibling, e += t.textContent.length) : t = t.parentNode;
    this.savedPos = e;
  }
  restorePosition(e = 0) {
    if (this.savedPos > 0 && this.savedPos < e) {
      const t = window.getSelection(), n = wh(this.el, { count: this.savedPos });
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
        this.eVm.editLinkUrl.value = n1.test(a) ? a : "https://", document.execCommand("createLink", false, this.eVm.editLinkUrl.value), this.save(r.getRangeAt(0));
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
}, r1 = he({ name: "QTooltip", inheritAttrs: false, props: { ...Rm, ...Pr, ...zl, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null }, transitionShow: { ...zl.transitionShow, default: "jump-down" }, transitionHide: { ...zl.transitionHide, default: "jump-up" }, anchor: { type: String, default: "bottom middle", validator: Oo }, self: { type: String, default: "top middle", validator: Oo }, offset: { type: Array, default: () => [14, 14], validator: Nm }, scrollTarget: Zl, delay: { type: Number, default: 0 }, hideDelay: { type: Number, default: 0 }, persistent: Boolean }, emits: [...$r], setup(e, { slots: t, emit: n, attrs: l }) {
  let r, a;
  const o = xe(), { proxy: { $q: i } } = o, u = K(null), c = K(false), s = v(() => Vo(e.anchor, i.lang.rtl)), f = v(() => Vo(e.self, i.lang.rtl)), h = v(() => e.persistent !== true), { registerTick: m, removeTick: g } = _r(), { registerTimeout: w } = Zn(), { transitionProps: x, transitionStyle: T } = di(e), { localScrollTarget: p, changeScrollEvent: y, unconfigureScrollTarget: b } = Pm(e, pe), { anchorEl: C, canShow: $, anchorEvents: O } = Es({ showing: c, configureAnchorEl: ae }), { show: H, hide: L } = Lr({ showing: c, canShow: $, handleShow: E, handleHide: k, hideOnRouteChange: h, processOnMount: true });
  Object.assign(O, { delayShow: W, delayHide: X });
  const { showPortal: B, hidePortal: N, renderPortal: q } = As(o, u, _, "tooltip");
  if (i.platform.is.mobile === true) {
    const D = { anchorEl: C, innerRef: u, onClickOutside(fe) {
      return L(fe), fe.target.classList.contains("q-dialog__backdrop") && je(fe), true;
    } }, F = v(() => e.modelValue === null && e.persistent !== true && c.value === true);
    ge(F, (fe) => {
      (fe === true ? zm : Fo)(D);
    }), Ke(() => {
      Fo(D);
    });
  }
  function E(D) {
    B(), m(() => {
      a = new MutationObserver(() => U()), a.observe(u.value, { attributes: false, childList: true, characterData: true, subtree: true }), U(), pe();
    }), r === void 0 && (r = ge(() => i.screen.width + "|" + i.screen.height + "|" + e.self + "|" + e.anchor + "|" + i.lang.rtl, U)), w(() => {
      B(true), n("show", D);
    }, e.transitionDuration);
  }
  function k(D) {
    g(), N(), j(), w(() => {
      N(true), n("hide", D);
    }, e.transitionDuration);
  }
  function j() {
    a !== void 0 && (a.disconnect(), a = void 0), r !== void 0 && (r(), r = void 0), b(), Yt(O, "tooltipTemp");
  }
  function U() {
    Ps({ targetEl: u.value, offset: e.offset, anchorEl: C.value, anchorOrigin: s.value, selfOrigin: f.value, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function W(D) {
    if (i.platform.is.mobile === true) {
      En(), document.body.classList.add("non-selectable");
      const F = C.value, fe = ["touchmove", "touchcancel", "touchend", "click"].map((A) => [F, A, "delayHide", "passiveCapture"]);
      kt(O, "tooltipTemp", fe);
    }
    w(() => {
      H(D);
    }, e.delay);
  }
  function X(D) {
    i.platform.is.mobile === true && (Yt(O, "tooltipTemp"), En(), setTimeout(() => {
      document.body.classList.remove("non-selectable");
    }, 10)), w(() => {
      L(D);
    }, e.hideDelay);
  }
  function ae() {
    if (e.noParentEvent === true || C.value === null) return;
    const D = i.platform.is.mobile === true ? [[C.value, "touchstart", "delayShow", "passive"]] : [[C.value, "mouseenter", "delayShow", "passive"], [C.value, "mouseleave", "delayHide", "passive"]];
    kt(O, "anchor", D);
  }
  function pe() {
    if (C.value !== null || e.scrollTarget !== void 0) {
      p.value = Dn(C.value, e.scrollTarget);
      const D = e.noParentEvent === true ? U : L;
      y(p.value, D);
    }
  }
  function Y() {
    return c.value === true ? d("div", { ...l, ref: u, class: ["q-tooltip q-tooltip--style q-position-engine no-pointer-events", l.class], style: [l.style, T.value], role: "tooltip" }, $e(t.default)) : null;
  }
  function _() {
    return d(Ot, x.value, Y);
  }
  return Ke(j), Object.assign(o.proxy, { updatePosition: U }), q;
} }), Tr = he({ name: "QItem", props: { ...nt, ...$a, tag: { type: String, default: "div" }, active: { type: Boolean, default: null }, clickable: Boolean, dense: Boolean, insetLevel: Number, tabindex: [String, Number], focused: Boolean, manualFocus: Boolean }, emits: ["click", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = xe(), r = lt(e, l), { hasLink: a, linkAttrs: o, linkClass: i, linkTag: u, navigateOnClick: c } = si(), s = K(null), f = K(null), h = v(() => e.clickable === true || a.value === true || e.tag === "label"), m = v(() => e.disable !== true && h.value === true), g = v(() => "q-item q-item-type row no-wrap" + (e.dense === true ? " q-item--dense" : "") + (r.value === true ? " q-item--dark" : "") + (a.value === true && e.active === null ? i.value : e.active === true ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === true ? " disabled" : "") + (m.value === true ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === true ? " q-manual-focusable--focused" : "") : "")), w = v(() => e.insetLevel === void 0 ? null : { ["padding" + (l.lang.rtl === true ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px" });
  function x(y) {
    m.value === true && (f.value !== null && y.qAvoidFocus !== true && (y.qKeyEvent !== true && document.activeElement === s.value ? f.value.focus() : document.activeElement === f.value && s.value.focus()), c(y));
  }
  function T(y) {
    if (m.value === true && pn(y, [13, 32]) === true) {
      je(y), y.qKeyEvent = true;
      const b = new MouseEvent("click", y);
      b.qKeyEvent = true, s.value.dispatchEvent(b);
    }
    n("keyup", y);
  }
  function p() {
    const y = Pa(t.default, []);
    return m.value === true && y.unshift(d("div", { class: "q-focus-helper", tabindex: -1, ref: f })), y;
  }
  return () => {
    const y = { ref: s, class: g.value, style: w.value, role: "listitem", onClick: x, onKeyup: T };
    return m.value === true ? (y.tabindex = e.tabindex || "0", Object.assign(y, o.value)) : h.value === true && (y["aria-disabled"] = "true"), d(u.value, y, p());
  };
} }), hn = he({ name: "QItemSection", props: { avatar: Boolean, thumbnail: Boolean, side: Boolean, top: Boolean, noWrap: Boolean }, setup(e, { slots: t }) {
  const n = v(() => `q-item__section column q-item__section--${e.avatar === true || e.side === true || e.thumbnail === true ? "side" : "main"}` + (e.top === true ? " q-item__section--top justify-start" : " justify-center") + (e.avatar === true ? " q-item__section--avatar" : "") + (e.thumbnail === true ? " q-item__section--thumbnail" : "") + (e.noWrap === true ? " q-item__section--nowrap" : ""));
  return () => d("div", { class: n.value }, $e(t.default));
} });
function xh(e, t, n) {
  t.handler ? t.handler(e, n, n.caret) : n.runCmd(t.cmd, t.param);
}
function Us(e) {
  return d("div", { class: "q-editor__toolbar-group" }, e);
}
function Sh(e, t, n, l = false) {
  const r = l || (t.type === "toggle" ? t.toggled ? t.toggled(e) : t.cmd && e.caret.is(t.cmd, t.param) : false), a = [];
  if (t.tip && e.$q.platform.is.desktop) {
    const o = t.key ? d("div", [d("small", `(CTRL + ${String.fromCharCode(t.key)})`)]) : null;
    a.push(d(r1, { delay: 1e3 }, () => [d("div", { innerHTML: t.tip }), o]));
  }
  return d(Ze, { ...e.buttonProps.value, icon: t.icon !== null ? t.icon : void 0, color: r ? t.toggleColor || e.props.toolbarToggleColor : t.color || e.props.toolbarColor, textColor: r && !e.props.toolbarPush ? null : t.textColor || e.props.toolbarTextColor, label: t.label, disable: t.disable ? typeof t.disable == "function" ? t.disable(e) : true : false, size: "sm", onClick(o) {
    n == null ? void 0 : n(), xh(o, t, e);
  } }, () => a);
}
function a1(e, t) {
  const n = t.list === "only-icons";
  let l = t.label, r = t.icon !== null ? t.icon : void 0, a, o;
  function i() {
    c.component.proxy.hide();
  }
  if (n) o = t.options.map((s) => {
    const f = s.type === void 0 ? e.caret.is(s.cmd, s.param) : false;
    return f && (l = s.tip, r = s.icon !== null ? s.icon : void 0), Sh(e, s, i, f);
  }), a = e.toolbarBackgroundClass.value, o = [Us(o)];
  else {
    const s = e.props.toolbarToggleColor !== void 0 ? `text-${e.props.toolbarToggleColor}` : null, f = e.props.toolbarTextColor !== void 0 ? `text-${e.props.toolbarTextColor}` : null, h = t.list === "no-icons";
    o = t.options.map((m) => {
      const g = m.disable ? m.disable(e) : false, w = m.type === void 0 ? e.caret.is(m.cmd, m.param) : false;
      w && (l = m.tip, r = m.icon !== null ? m.icon : void 0);
      const x = m.htmlTip;
      return d(Tr, { active: w, activeClass: s, clickable: true, disable: g, dense: true, onClick(T) {
        var _a3;
        i(), (T == null ? void 0 : T.qAvoidFocus) !== true && ((_a3 = e.contentRef.value) == null ? void 0 : _a3.focus()), e.caret.restore(), xh(T, m, e);
      } }, () => [h === true ? null : d(hn, { class: w ? s : f, side: true }, () => d(et, { name: m.icon !== null ? m.icon : void 0 })), d(hn, x ? () => d("div", { class: "text-no-wrap", innerHTML: m.htmlTip }) : m.tip ? () => d("div", { class: "text-no-wrap" }, m.tip) : void 0)]);
    }), a = [e.toolbarBackgroundClass.value, f];
  }
  const u = t.highlight && l !== t.label, c = d(pp, { ...e.buttonProps.value, noCaps: true, noWrap: true, color: u ? e.props.toolbarToggleColor : e.props.toolbarColor, textColor: u && !e.props.toolbarPush ? null : e.props.toolbarTextColor, label: t.fixedLabel ? t.label : l, icon: t.fixedIcon ? t.icon !== null ? t.icon : void 0 : r, contentClass: a, onShow: (s) => e.emit("dropdownShow", s), onHide: (s) => e.emit("dropdownHide", s), onBeforeShow: (s) => e.emit("dropdownBeforeShow", s), onBeforeHide: (s) => e.emit("dropdownBeforeHide", s) }, () => o);
  return c;
}
function o1(e) {
  if (e.caret) return e.buttons.value.filter((t) => !e.isViewingSource.value || t.find((n) => n.cmd === "viewsource")).map((t) => Us(t.map((n) => e.isViewingSource.value && n.cmd !== "viewsource" ? false : n.type === "slot" ? $e(e.slots[n.slot]) : n.type === "dropdown" ? a1(e, n) : Sh(e, n))));
}
function i1(e, t, n, l = {}) {
  const r = Object.keys(l);
  if (r.length === 0) return {};
  const a = { default_font: { cmd: "fontName", param: e, icon: n, tip: t } };
  return r.forEach((o) => {
    const i = l[o];
    a[o] = { cmd: "fontName", param: i, icon: n, tip: i, htmlTip: `<font face="${i}">${i}</font>` };
  }), a;
}
function u1(e) {
  if (e.caret) {
    const t = e.props.toolbarColor || e.props.toolbarTextColor;
    let n = e.editLinkUrl.value;
    const l = () => {
      e.caret.restore(), n !== e.editLinkUrl.value && document.execCommand("createLink", false, n === "" ? " " : n), e.editLinkUrl.value = null;
    };
    return [d("div", { class: `q-mx-xs text-${t}` }, `${e.$q.lang.editor.url}: `), d("input", { key: "qedt_btm_input", class: "col q-editor__link-input", value: n, onInput: (r) => {
      wt(r), n = r.target.value;
    }, onKeydown: (r) => {
      if (Xl(r) !== true) switch (r.keyCode) {
        case 13:
          return Dt(r), l();
        case 27:
          Dt(r), e.caret.restore(), (!e.editLinkUrl.value || e.editLinkUrl.value === "https://") && document.execCommand("unlink"), e.editLinkUrl.value = null;
          break;
      }
    } }), Us([d(Ze, { key: "qedt_btm_rem", tabindex: -1, ...e.buttonProps.value, label: e.$q.lang.label.remove, noCaps: true, onClick: () => {
      e.caret.restore(), document.execCommand("unlink"), e.editLinkUrl.value = null;
    } }), d(Ze, { key: "qedt_btm_upd", ...e.buttonProps.value, label: e.$q.lang.label.update, noCaps: true, onClick: l })])];
  }
}
var Ed = /^on[A-Z]/;
function Ch() {
  const { attrs: e, vnode: t } = xe(), n = { listeners: K({}), attributes: K({}) };
  function l() {
    const r = {}, a = {};
    for (const o in e) o !== "class" && o !== "style" && Ed.test(o) === false && (r[o] = e[o]);
    for (const o in t.props) Ed.test(o) === true && (a[o] = t.props[o]);
    n.attributes.value = r, n.listeners.value = a;
  }
  return Rr(l), l(), n;
}
var s1 = Object.prototype.toString, eu = Object.prototype.hasOwnProperty, c1 = new Set(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp"].map((e) => "[object " + e + "]"));
function Rd(e) {
  if (e !== Object(e) || c1.has(s1.call(e)) === true || e.constructor && eu.call(e, "constructor") === false && eu.call(e.constructor.prototype, "isPrototypeOf") === false) return false;
  let t;
  for (t in e) ;
  return t === void 0 || eu.call(e, t);
}
function kh() {
  let e, t, n, l, r, a, o = arguments[0] || {}, i = 1, u = false;
  const c = arguments.length;
  for (typeof o == "boolean" && (u = o, o = arguments[1] || {}, i = 2), Object(o) !== o && typeof o != "function" && (o = {}), c === i && (o = this, i--); i < c; i++) if ((e = arguments[i]) !== null) for (t in e) n = o[t], l = e[t], o !== l && (u === true && l && ((r = Array.isArray(l)) || Rd(l) === true) ? (r === true ? a = Array.isArray(n) === true ? n : [] : a = Rd(n) === true ? n : {}, o[t] = kh(u, a, l)) : l !== void 0 && (o[t] = l));
  return o;
}
he({ name: "QEditor", props: { ...nt, ...Ds, modelValue: { type: String, required: true }, readonly: Boolean, disable: Boolean, minHeight: { type: String, default: "10rem" }, maxHeight: String, height: String, definitions: Object, fonts: Object, placeholder: String, toolbar: { type: Array, validator: (e) => e.length === 0 || e.every((t) => t.length), default: () => [["left", "center", "right", "justify"], ["bold", "italic", "underline", "strike"], ["undo", "redo"]] }, toolbarColor: String, toolbarBg: String, toolbarTextColor: String, toolbarToggleColor: { type: String, default: "primary" }, toolbarOutline: Boolean, toolbarPush: Boolean, toolbarRounded: Boolean, paragraphTag: { type: String, validator: (e) => ["div", "p"].includes(e), default: "div" }, contentStyle: Object, contentClass: [Object, Array, String], square: Boolean, flat: Boolean, dense: Boolean }, emits: [...Is, "update:modelValue", "keydown", "click", "focus", "blur", "dropdownShow", "dropdownHide", "dropdownBeforeShow", "dropdownBeforeHide", "linkShow", "linkHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), { $q: r } = l, a = lt(e, r), { inFullscreen: o, toggleFullscreen: i } = zs(), u = Ch(), c = K(null), s = K(null), f = K(null), h = K(false), m = v(() => !e.readonly && !e.disable);
  let g, w, x = e.modelValue;
  document.execCommand("defaultParagraphSeparator", false, e.paragraphTag), g = window.getComputedStyle(document.body).fontFamily;
  const T = v(() => e.toolbarBg ? ` bg-${e.toolbarBg}` : ""), p = v(() => ({ type: "a", flat: e.toolbarOutline !== true && e.toolbarPush !== true, noWrap: true, outline: e.toolbarOutline, push: e.toolbarPush, rounded: e.toolbarRounded, dense: true, color: e.toolbarColor, disable: !m.value, size: "sm" })), y = v(() => {
    const A = r.lang.editor, R = r.iconSet.editor;
    return { bold: { cmd: "bold", icon: R.bold, tip: A.bold, key: 66 }, italic: { cmd: "italic", icon: R.italic, tip: A.italic, key: 73 }, strike: { cmd: "strikeThrough", icon: R.strikethrough, tip: A.strikethrough, key: 83 }, underline: { cmd: "underline", icon: R.underline, tip: A.underline, key: 85 }, unordered: { cmd: "insertUnorderedList", icon: R.unorderedList, tip: A.unorderedList }, ordered: { cmd: "insertOrderedList", icon: R.orderedList, tip: A.orderedList }, subscript: { cmd: "subscript", icon: R.subscript, tip: A.subscript, htmlTip: "x<subscript>2</subscript>" }, superscript: { cmd: "superscript", icon: R.superscript, tip: A.superscript, htmlTip: "x<superscript>2</superscript>" }, link: { cmd: "link", disable: (G) => G.caret && !G.caret.can("link"), icon: R.hyperlink, tip: A.hyperlink, key: 76 }, fullscreen: { cmd: "fullscreen", icon: R.toggleFullscreen, tip: A.toggleFullscreen, key: 70 }, viewsource: { cmd: "viewsource", icon: R.viewSource, tip: A.viewSource }, quote: { cmd: "formatBlock", param: "BLOCKQUOTE", icon: R.quote, tip: A.quote, key: 81 }, left: { cmd: "justifyLeft", icon: R.left, tip: A.left }, center: { cmd: "justifyCenter", icon: R.center, tip: A.center }, right: { cmd: "justifyRight", icon: R.right, tip: A.right }, justify: { cmd: "justifyFull", icon: R.justify, tip: A.justify }, print: { type: "no-state", cmd: "print", icon: R.print, tip: A.print, key: 80 }, outdent: { type: "no-state", disable: (G) => G.caret && !G.caret.can("outdent"), cmd: "outdent", icon: R.outdent, tip: A.outdent }, indent: { type: "no-state", disable: (G) => G.caret && !G.caret.can("indent"), cmd: "indent", icon: R.indent, tip: A.indent }, removeFormat: { type: "no-state", cmd: "removeFormat", icon: R.removeFormat, tip: A.removeFormat }, hr: { type: "no-state", cmd: "insertHorizontalRule", icon: R.hr, tip: A.hr }, undo: { type: "no-state", cmd: "undo", icon: R.undo, tip: A.undo, key: 90 }, redo: { type: "no-state", cmd: "redo", icon: R.redo, tip: A.redo, key: 89 }, h1: { cmd: "formatBlock", param: "H1", icon: R.heading1 || R.heading, tip: A.heading1, htmlTip: `<h1 class="q-ma-none">${A.heading1}</h1>` }, h2: { cmd: "formatBlock", param: "H2", icon: R.heading2 || R.heading, tip: A.heading2, htmlTip: `<h2 class="q-ma-none">${A.heading2}</h2>` }, h3: { cmd: "formatBlock", param: "H3", icon: R.heading3 || R.heading, tip: A.heading3, htmlTip: `<h3 class="q-ma-none">${A.heading3}</h3>` }, h4: { cmd: "formatBlock", param: "H4", icon: R.heading4 || R.heading, tip: A.heading4, htmlTip: `<h4 class="q-ma-none">${A.heading4}</h4>` }, h5: { cmd: "formatBlock", param: "H5", icon: R.heading5 || R.heading, tip: A.heading5, htmlTip: `<h5 class="q-ma-none">${A.heading5}</h5>` }, h6: { cmd: "formatBlock", param: "H6", icon: R.heading6 || R.heading, tip: A.heading6, htmlTip: `<h6 class="q-ma-none">${A.heading6}</h6>` }, p: { cmd: "formatBlock", param: e.paragraphTag, icon: R.heading, tip: A.paragraph }, code: { cmd: "formatBlock", param: "PRE", icon: R.code, htmlTip: `<code>${A.code}</code>` }, "size-1": { cmd: "fontSize", param: "1", icon: R.size1 || R.size, tip: A.size1, htmlTip: `<font size="1">${A.size1}</font>` }, "size-2": { cmd: "fontSize", param: "2", icon: R.size2 || R.size, tip: A.size2, htmlTip: `<font size="2">${A.size2}</font>` }, "size-3": { cmd: "fontSize", param: "3", icon: R.size3 || R.size, tip: A.size3, htmlTip: `<font size="3">${A.size3}</font>` }, "size-4": { cmd: "fontSize", param: "4", icon: R.size4 || R.size, tip: A.size4, htmlTip: `<font size="4">${A.size4}</font>` }, "size-5": { cmd: "fontSize", param: "5", icon: R.size5 || R.size, tip: A.size5, htmlTip: `<font size="5">${A.size5}</font>` }, "size-6": { cmd: "fontSize", param: "6", icon: R.size6 || R.size, tip: A.size6, htmlTip: `<font size="6">${A.size6}</font>` }, "size-7": { cmd: "fontSize", param: "7", icon: R.size7 || R.size, tip: A.size7, htmlTip: `<font size="7">${A.size7}</font>` } };
  }), b = v(() => {
    const A = e.definitions || {}, R = e.definitions || e.fonts ? kh(true, {}, y.value, A, i1(g, r.lang.editor.defaultFont, r.iconSet.editor.font, e.fonts)) : y.value;
    return e.toolbar.map((G) => G.map((V) => {
      if (V.options) return { type: "dropdown", icon: V.icon, label: V.label, size: "sm", dense: true, fixedLabel: V.fixedLabel, fixedIcon: V.fixedIcon, highlight: V.highlight, list: V.list, options: V.options.map((be) => R[be]) };
      const ne = R[V];
      return ne ? ne.type === "no-state" || A[V] && (ne.cmd === void 0 || y.value[ne.cmd] && y.value[ne.cmd].type === "no-state") ? ne : Object.assign({ type: "toggle" }, ne) : { type: "slot", slot: V };
    }));
  }), C = { $q: r, props: e, slots: t, emit: n, inFullscreen: o, toggleFullscreen: i, runCmd: _, isViewingSource: h, editLinkUrl: f, toolbarBackgroundClass: T, buttonProps: p, contentRef: s, buttons: b, setContent: Y };
  ge(() => e.modelValue, (A) => {
    x !== A && (x = A, Y(A, true));
  }), ge(f, (A) => {
    n(`link${A ? "Show" : "Hide"}`);
  });
  const $ = v(() => e.toolbar && e.toolbar.length !== 0), O = v(() => {
    const A = {}, R = (G) => {
      G.key && (A[G.key] = { cmd: G.cmd, param: G.param });
    };
    return b.value.forEach((G) => {
      G.forEach((V) => {
        V.options ? V.options.forEach(R) : R(V);
      });
    }), A;
  }), H = v(() => o.value ? e.contentStyle : [{ minHeight: e.minHeight, height: e.height, maxHeight: e.maxHeight }, e.contentStyle]), L = v(() => `q-editor q-editor--${h.value === true ? "source" : "default"}` + (e.disable === true ? " disabled" : "") + (o.value === true ? " fullscreen column" : "") + (e.square === true ? " q-editor--square no-border-radius" : "") + (e.flat === true ? " q-editor--flat" : "") + (e.dense === true ? " q-editor--dense" : "") + (a.value === true ? " q-editor--dark q-dark" : "")), B = v(() => [e.contentClass, "q-editor__content", { col: o.value, "overflow-auto": o.value || e.maxHeight }]), N = v(() => e.disable === true ? { "aria-disabled": "true" } : {});
  function q() {
    if (s.value !== null) {
      const A = `inner${h.value === true ? "Text" : "HTML"}`, R = s.value[A];
      R !== e.modelValue && (x = R, n("update:modelValue", R));
    }
  }
  function E(A) {
    if (n("keydown", A), A.ctrlKey !== true || Xl(A) === true) {
      D();
      return;
    }
    const R = A.keyCode, G = O.value[R];
    if (G !== void 0) {
      const { cmd: V, param: ne } = G;
      je(A), _(V, ne, false);
    }
  }
  function k(A) {
    D(), n("click", A);
  }
  function j(A) {
    if (s.value !== null) {
      const { scrollTop: R, scrollHeight: G } = s.value;
      w = G - R;
    }
    C.caret.save(), n("blur", A);
  }
  function U(A) {
    We(() => {
      s.value !== null && w !== void 0 && (s.value.scrollTop = s.value.scrollHeight - w);
    }), n("focus", A);
  }
  function W(A) {
    const R = c.value;
    if (R !== null && R.contains(A.target) === true && (A.relatedTarget === null || R.contains(A.relatedTarget) !== true)) {
      const G = `inner${h.value === true ? "Text" : "HTML"}`;
      C.caret.restorePosition(s.value[G].length), D();
    }
  }
  function X(A) {
    const R = c.value;
    R !== null && R.contains(A.target) === true && (A.relatedTarget === null || R.contains(A.relatedTarget) !== true) && (C.caret.savePosition(), D());
  }
  function ae() {
    w = void 0;
  }
  function pe(A) {
    C.caret.save();
  }
  function Y(A, R) {
    if (s.value !== null) {
      R === true && C.caret.savePosition();
      const G = `inner${h.value === true ? "Text" : "HTML"}`;
      s.value[G] = A, R === true && (C.caret.restorePosition(s.value[G].length), D());
    }
  }
  function _(A, R, G = true) {
    F(), C.caret.restore(), C.caret.apply(A, R, () => {
      F(), C.caret.save(), G && D();
    });
  }
  function D() {
    setTimeout(() => {
      f.value = null, l.$forceUpdate();
    }, 1);
  }
  function F() {
    Br(() => {
      var _a3;
      (_a3 = s.value) == null ? void 0 : _a3.focus({ preventScroll: true });
    });
  }
  function fe() {
    return s.value;
  }
  return ft(() => {
    C.caret = l.caret = new l1(s.value, C), Y(e.modelValue), D(), document.addEventListener("selectionchange", pe);
  }), Ke(() => {
    document.removeEventListener("selectionchange", pe);
  }), Object.assign(l, { runCmd: _, refreshToolbar: D, focus: F, getContentEl: fe }), () => {
    let A;
    if ($.value) {
      const R = [d("div", { key: "qedt_top", class: "q-editor__toolbar row no-wrap scroll-x" + T.value }, o1(C))];
      f.value !== null && R.push(d("div", { key: "qedt_btm", class: "q-editor__toolbar row no-wrap items-center scroll-x" + T.value }, u1(C))), A = d("div", { key: "toolbar_ctainer", class: "q-editor__toolbars-container" }, R);
    }
    return d("div", { ref: c, class: L.value, style: { height: o.value === true ? "100%" : null }, ...N.value, onFocusin: W, onFocusout: X }, [A, d("div", { ref: s, style: H.value, class: B.value, contenteditable: m.value, placeholder: e.placeholder, ...u.listeners.value, onInput: q, onKeydown: E, onClick: k, onBlur: j, onFocus: U, onMousedown: ae, onTouchstartPassive: ae })]);
  };
} });
var Qu = he({ name: "QItemLabel", props: { overline: Boolean, caption: Boolean, header: Boolean, lines: [Number, String] }, setup(e, { slots: t }) {
  const n = v(() => parseInt(e.lines, 10)), l = v(() => "q-item__label" + (e.overline === true ? " q-item__label--overline text-overline" : "") + (e.caption === true ? " q-item__label--caption text-caption" : "") + (e.header === true ? " q-item__label--header" : "") + (n.value === 1 ? " ellipsis" : "")), r = v(() => e.lines !== void 0 && n.value > 1 ? { overflow: "hidden", display: "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": n.value } : null);
  return () => d("div", { style: r.value, class: l.value }, $e(t.default));
} }), Qs = he({ name: "QSlideTransition", props: { appear: Boolean, duration: { type: Number, default: 300 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: n }) {
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
  }), () => d(Ot, { css: false, appear: e.appear, onEnter: m, onLeave: g }, t.default);
} }), d1 = { true: "inset", item: "item-inset", "item-thumbnail": "item-thumbnail-inset" }, tu = { xs: 2, sm: 4, md: 8, lg: 16, xl: 24 }, Kl = he({ name: "QSeparator", props: { ...nt, spaced: [Boolean, String], inset: [Boolean, String], vertical: Boolean, color: String, size: String }, setup(e) {
  const t = xe(), n = lt(e, t.proxy.$q), l = v(() => e.vertical === true ? "vertical" : "horizontal"), r = v(() => ` q-separator--${l.value}`), a = v(() => e.inset !== false ? `${r.value}-${d1[e.inset]}` : ""), o = v(() => `q-separator${r.value}${a.value}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (n.value === true ? " q-separator--dark" : "")), i = v(() => {
    const u = {};
    if (e.size !== void 0 && (u[e.vertical === true ? "width" : "height"] = e.size), e.spaced !== false) {
      const c = e.spaced === true ? `${tu.md}px` : e.spaced in tu ? `${tu[e.spaced]}px` : e.spaced, s = e.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
      u[`margin${s[0]}`] = u[`margin${s[1]}`] = c;
    }
    return u;
  });
  return () => d("hr", { class: o.value, style: i.value, "aria-orientation": l.value });
} }), Rl = ds({}), f1 = Object.keys($a);
he({ name: "QExpansionItem", props: { ...$a, ...Pr, ...nt, icon: String, label: String, labelLines: [Number, String], caption: String, captionLines: [Number, String], dense: Boolean, toggleAriaLabel: String, expandIcon: String, expandedIcon: String, expandIconClass: [Array, String, Object], duration: {}, headerInsetLevel: Number, contentInsetLevel: Number, expandSeparator: Boolean, defaultOpened: Boolean, hideExpandIcon: Boolean, expandIconToggle: Boolean, switchToggleSide: Boolean, denseToggle: Boolean, group: String, popup: Boolean, headerStyle: [Array, String, Object], headerClass: [Array, String, Object] }, emits: [...$r, "click", "afterShow", "afterHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = xe(), r = lt(e, l), a = K(e.modelValue !== null ? e.modelValue : e.defaultOpened), o = K(null), i = mi(), { show: u, hide: c, toggle: s } = Lr({ showing: a });
  let f, h;
  const m = v(() => `q-expansion-item q-item-type q-expansion-item--${a.value === true ? "expanded" : "collapsed"} q-expansion-item--${e.popup === true ? "popup" : "standard"}`), g = v(() => e.contentInsetLevel === void 0 ? null : { ["padding" + (l.lang.rtl === true ? "Right" : "Left")]: e.contentInsetLevel * 56 + "px" }), w = v(() => e.disable !== true && (e.href !== void 0 || e.to !== void 0 && e.to !== null && e.to !== "")), x = v(() => {
    const W = {};
    return f1.forEach((X) => {
      W[X] = e[X];
    }), W;
  }), T = v(() => w.value === true || e.expandIconToggle !== true), p = v(() => e.expandedIcon !== void 0 && a.value === true ? e.expandedIcon : e.expandIcon || l.iconSet.expansionItem[e.denseToggle === true ? "denseIcon" : "icon"]), y = v(() => e.disable !== true && (w.value === true || e.expandIconToggle === true)), b = v(() => ({ expanded: a.value === true, detailsId: i.value, toggle: s, show: u, hide: c })), C = v(() => {
    const W = e.toggleAriaLabel !== void 0 ? e.toggleAriaLabel : l.lang.label[a.value === true ? "collapse" : "expand"](e.label);
    return { role: "button", "aria-expanded": a.value === true ? "true" : "false", "aria-controls": i.value, "aria-label": W };
  });
  ge(() => e.group, (W) => {
    h == null ? void 0 : h(), W !== void 0 && N();
  });
  function $(W) {
    w.value !== true && s(W), n("click", W);
  }
  function O(W) {
    W.keyCode === 13 && H(W, true);
  }
  function H(W, X) {
    var _a3;
    X !== true && W.qAvoidFocus !== true && ((_a3 = o.value) == null ? void 0 : _a3.focus()), s(W), je(W);
  }
  function L() {
    n("afterShow");
  }
  function B() {
    n("afterHide");
  }
  function N() {
    f === void 0 && (f = Ca()), a.value === true && (Rl[e.group] = f);
    const W = ge(a, (ae) => {
      ae === true ? Rl[e.group] = f : Rl[e.group] === f && delete Rl[e.group];
    }), X = ge(() => Rl[e.group], (ae, pe) => {
      pe === f && ae !== void 0 && ae !== f && c();
    });
    h = () => {
      W(), X(), Rl[e.group] === f && delete Rl[e.group], h = void 0;
    };
  }
  function q() {
    const W = { class: [`q-focusable relative-position cursor-pointer${e.denseToggle === true && e.switchToggleSide === true ? " items-end" : ""}`, e.expandIconClass], side: e.switchToggleSide !== true, avatar: e.switchToggleSide }, X = [d(et, { class: "q-expansion-item__toggle-icon" + (e.expandedIcon === void 0 && a.value === true ? " q-expansion-item__toggle-icon--rotated" : ""), name: p.value })];
    return y.value === true && (Object.assign(W, { tabindex: 0, ...C.value, onClick: H, onKeyup: O }), X.unshift(d("div", { ref: o, class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded", tabindex: -1 }))), d(hn, W, () => X);
  }
  function E() {
    let W;
    return t.header !== void 0 ? W = [].concat(t.header(b.value)) : (W = [d(hn, () => [d(Qu, { lines: e.labelLines }, () => e.label || ""), e.caption ? d(Qu, { lines: e.captionLines, caption: true }, () => e.caption) : null])], e.icon && W[e.switchToggleSide === true ? "push" : "unshift"](d(hn, { side: e.switchToggleSide === true, avatar: e.switchToggleSide !== true }, () => d(et, { name: e.icon })))), e.disable !== true && e.hideExpandIcon !== true && W[e.switchToggleSide === true ? "unshift" : "push"](q()), W;
  }
  function k() {
    const W = { ref: "item", style: e.headerStyle, class: e.headerClass, dark: r.value, disable: e.disable, dense: e.dense, insetLevel: e.headerInsetLevel };
    return T.value === true && (W.clickable = true, W.onClick = $, Object.assign(W, w.value === true ? x.value : C.value)), d(Tr, W, E);
  }
  function j() {
    return cn(d("div", { key: "e-content", class: "q-expansion-item__content relative-position", style: g.value, id: i.value }, $e(t.default)), [[Gv, a.value]]);
  }
  function U() {
    const W = [k(), d(Qs, { duration: e.duration, onShow: L, onHide: B }, j)];
    return e.expandSeparator === true && W.push(d(Kl, { class: "q-expansion-item__border q-expansion-item__border--top absolute-top", dark: r.value }), d(Kl, { class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom", dark: r.value })), W;
  }
  return e.group !== void 0 && N(), Ke(() => {
    h == null ? void 0 : h();
  }), () => d("div", { class: m.value }, [d("div", { class: "q-expansion-item__container relative-position" }, U())]);
} });
var v1 = ["top", "right", "bottom", "left"], Ku = { type: { type: String, default: "a" }, outline: Boolean, push: Boolean, flat: Boolean, unelevated: Boolean, color: String, textColor: String, glossy: Boolean, square: Boolean, padding: String, label: { type: [String, Number], default: "" }, labelPosition: { type: String, default: "right", validator: (e) => v1.includes(e) }, externalLabel: Boolean, hideLabel: { type: Boolean }, labelClass: [Array, String, Object], labelStyle: [Array, String, Object], disable: Boolean, tabindex: [Number, String] };
function Th(e, t) {
  return { formClass: v(() => `q-fab--form-${e.square === true ? "square" : "rounded"}`), stacked: v(() => e.externalLabel === false && ["top", "bottom"].includes(e.labelPosition)), labelProps: v(() => {
    if (e.externalLabel === true) {
      const n = e.hideLabel === null ? t.value === false : e.hideLabel;
      return { action: "push", data: { class: [e.labelClass, `q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}` + (n === true ? " q-fab__label--external-hidden" : "")], style: e.labelStyle } };
    }
    return { action: ["left", "top"].includes(e.labelPosition) ? "unshift" : "push", data: { class: [e.labelClass, `q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}` + (e.hideLabel === true ? " q-fab__label--internal-hidden" : "")], style: e.labelStyle } };
  }) };
}
var m1 = ["up", "right", "down", "left"], h1 = ["left", "center", "right"];
he({ name: "QFab", props: { ...Ku, ...Pr, icon: String, activeIcon: String, hideIcon: Boolean, hideLabel: { ...Ku.hideLabel, default: null }, direction: { type: String, default: "right", validator: (e) => m1.includes(e) }, persistent: Boolean, verticalActionsAlign: { type: String, default: "center", validator: (e) => h1.includes(e) } }, emits: $r, setup(e, { slots: t }) {
  const n = K(null), l = K(e.modelValue === true), r = mi(), { proxy: { $q: a } } = xe(), { formClass: o, labelProps: i } = Th(e, l), u = v(() => e.persistent !== true), { hide: c, toggle: s } = Lr({ showing: l, hideOnRouteChange: u }), f = v(() => ({ opened: l.value })), h = v(() => `q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${o.value}` + (l.value === true ? " q-fab--opened" : " q-fab--closed")), m = v(() => `q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${l.value === true ? "opened" : "closed"}`), g = v(() => {
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
  return gn(vm, { showing: l, onChildClick(p) {
    var _a3;
    c(p), (p == null ? void 0 : p.qAvoidFocus) !== true && ((_a3 = n.value) == null ? void 0 : _a3.$el.focus());
  } }), () => d("div", { class: h.value }, [d(Ze, { ref: n, class: o.value, ...e, noWrap: true, stack: e.stacked, align: void 0, icon: void 0, label: void 0, noCaps: true, fab: true, "aria-expanded": l.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": r.value, onClick: s }, T), d("div", { class: m.value, ...g.value }, $e(t.default))]);
} });
var qh = { start: "self-end", center: "self-center", end: "self-start" }, g1 = Object.keys(qh);
he({ name: "QFabAction", props: { ...Ku, icon: { type: String, default: "" }, anchor: { type: String, validator: (e) => g1.includes(e) }, to: [String, Object], replace: Boolean }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const l = qt(vm, () => ({ showing: { value: true }, onChildClick: xt })), { formClass: r, labelProps: a } = Th(e, l.showing), o = v(() => {
    const f = qh[e.anchor];
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
function b1({ validate: e, resetValidation: t, requiresQForm: n }) {
  const l = qt(mm, false);
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
var y1 = [true, false, "ondemand"], p1 = { modelValue: {}, error: { type: Boolean, default: null }, errorMessage: String, noErrorIcon: Boolean, rules: Array, reactiveRules: Boolean, lazyRules: { type: [Boolean, String], default: false, validator: (e) => y1.includes(e) } };
function _1(e, t) {
  const { props: n, proxy: l } = xe(), r = K(false), a = K(null), o = K(false);
  b1({ validate: w, resetValidation: g });
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
    }, b = ($, O) => {
      $ === true && y(), r.value = $, a.value = O || null, t.value = false;
    }, C = [];
    for (let $ = 0; $ < n.rules.length; $++) {
      const O = n.rules[$];
      let H;
      if (typeof O == "function" ? H = O(T, co) : typeof O == "string" && co[O] !== void 0 && (H = co[O](T)), H === false || typeof H == "string") return b(true, H), false;
      H !== true && H !== void 0 && C.push(H);
    }
    return C.length === 0 ? (b(false), true) : (t.value = true, Promise.all(C).then(($) => {
      if ($ === void 0 || Array.isArray($) === false || $.length === 0) return p === i && b(false), true;
      const O = $.find((H) => H === false || typeof H == "string");
      return p === i && b(O !== void 0, O), O === void 0;
    }, ($) => (p === i && (console.error($), b(true)), false)));
  }
  const x = Ar(w, 0);
  return Ke(() => {
    u == null ? void 0 : u(), x.cancel();
  }), Object.assign(l, { resetValidation: g, validate: w }), Vt(l, "hasError", () => f.value), { isDirtyModel: o, hasRules: c, hasError: f, errorMessage: h, validate: w, resetValidation: g };
}
function Wl(e) {
  return e != null && ("" + e).length !== 0;
}
var Mh = { ...nt, ...p1, label: String, stackLabel: Boolean, hint: String, hideHint: Boolean, prefix: String, suffix: String, labelColor: String, color: String, bgColor: String, filled: Boolean, outlined: Boolean, borderless: Boolean, standout: [Boolean, String], square: Boolean, loading: Boolean, labelSlot: Boolean, bottomSlots: Boolean, hideBottomSpace: Boolean, rounded: Boolean, dense: Boolean, itemAligned: Boolean, counter: Boolean, clearable: Boolean, clearIcon: String, disable: Boolean, readonly: Boolean, autofocus: Boolean, for: String }, gi = { ...Mh, maxlength: [Number, String] }, bi = ["update:modelValue", "clear", "focus", "blur"];
function yi({ requiredForAttr: e = true, tagProp: t, changeEvent: n = false } = {}) {
  const { props: l, proxy: r } = xe(), a = lt(l, r.$q), o = mi({ required: e, getValue: () => l.for });
  return { requiredForAttr: e, changeEvent: n, tag: t === true ? v(() => l.tag) : { value: "label" }, isDark: a, editable: v(() => l.disable !== true && l.readonly !== true), innerLoading: K(false), focused: K(false), hasPopupOpen: false, splitAttrs: Ch(), targetUid: o, rootRef: K(null), targetRef: K(null), controlRef: K(null) };
}
function pi(e) {
  const { props: t, emit: n, slots: l, attrs: r, proxy: a } = xe(), { $q: o } = a;
  let i = null;
  e.hasValue === void 0 && (e.hasValue = v(() => Wl(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (X) => {
    n("update:modelValue", X);
  }), e.controlEvents === void 0 && (e.controlEvents = { onFocusin: L, onFocusout: B }), Object.assign(e, { clearValue: N, onControlFocusin: L, onControlFocusout: B, focus: O }), e.computedCounter === void 0 && (e.computedCounter = v(() => {
    if (t.counter !== false) {
      const X = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === true ? t.modelValue.length : 0, ae = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
      return X + (ae !== void 0 ? " / " + ae : "");
    }
  }));
  const { isDirtyModel: u, hasRules: c, hasError: s, errorMessage: f, resetValidation: h } = _1(e.focused, e.innerLoading), m = e.floatingLabel !== void 0 ? v(() => t.stackLabel === true || e.focused.value === true || e.floatingLabel.value === true) : v(() => t.stackLabel === true || e.focused.value === true || e.hasValue.value === true), g = v(() => t.bottomSlots === true || t.hint !== void 0 || c.value === true || t.counter === true || t.error !== null), w = v(() => t.filled === true ? "filled" : t.outlined === true ? "outlined" : t.borderless === true ? "borderless" : t.standout ? "standout" : "standard"), x = v(() => `q-field row no-wrap items-start q-field--${w.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === true ? " q-field--rounded" : "") + (t.square === true ? " q-field--square" : "") + (m.value === true ? " q-field--float" : "") + (p.value === true ? " q-field--labeled" : "") + (t.dense === true ? " q-field--dense" : "") + (t.itemAligned === true ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === true ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === true ? " q-field--focused" : "") + (s.value === true ? " q-field--error" : "") + (s.value === true || e.focused.value === true ? " q-field--highlighted" : "") + (t.hideBottomSpace !== true && g.value === true ? " q-field--with-bottom" : "") + (t.disable === true ? " q-field--disabled" : t.readonly === true ? " q-field--readonly" : "")), T = v(() => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (s.value === true ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === true ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")), p = v(() => t.labelSlot === true || t.label !== void 0), y = v(() => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && s.value !== true ? ` text-${t.labelColor}` : "")), b = v(() => ({ id: e.targetUid.value, editable: e.editable.value, focused: e.focused.value, floatingLabel: m.value, modelValue: t.modelValue, emitValue: e.emitValue })), C = v(() => {
    const X = {};
    return e.targetUid.value && (X.for = e.targetUid.value), t.disable === true && (X["aria-disabled"] = "true"), X;
  });
  function $() {
    var _a3;
    const X = document.activeElement;
    let ae = (_a3 = e.targetRef) == null ? void 0 : _a3.value;
    ae && (X === null || X.id !== e.targetUid.value) && (ae.hasAttribute("tabindex") === true || (ae = ae.querySelector("[tabindex]")), ae !== X && (ae == null ? void 0 : ae.focus({ preventScroll: true })));
  }
  function O() {
    Br($);
  }
  function H() {
    ep($);
    const X = document.activeElement;
    X !== null && e.rootRef.value.contains(X) && X.blur();
  }
  function L(X) {
    i !== null && (clearTimeout(i), i = null), e.editable.value === true && e.focused.value === false && (e.focused.value = true, n("focus", X));
  }
  function B(X, ae) {
    i !== null && clearTimeout(i), i = setTimeout(() => {
      i = null, !(document.hasFocus() === true && (e.hasPopupOpen === true || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement) !== false)) && (e.focused.value === true && (e.focused.value = false, n("blur", X)), ae == null ? void 0 : ae());
    });
  }
  function N(X) {
    var _a3;
    je(X), o.platform.is.mobile !== true ? (((_a3 = e.targetRef) == null ? void 0 : _a3.value) || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === true && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), n("update:modelValue", null), e.changeEvent === true && n("change", null), n("clear", t.modelValue), We(() => {
      const ae = u.value;
      h(), u.value = ae;
    });
  }
  function q(X) {
    [13, 32].includes(X.keyCode) && N(X);
  }
  function E() {
    const X = [];
    return l.prepend !== void 0 && X.push(d("div", { class: "q-field__prepend q-field__marginal row no-wrap items-center", key: "prepend", onClick: Dt }, l.prepend())), X.push(d("div", { class: "q-field__control-container col relative-position row no-wrap q-anchor--skip" }, k())), s.value === true && t.noErrorIcon === false && X.push(U("error", [d(et, { name: o.iconSet.field.error, color: "negative" })])), t.loading === true || e.innerLoading.value === true ? X.push(U("inner-loading-append", l.loading !== void 0 ? l.loading() : [d(wn, { color: t.color })])) : t.clearable === true && e.hasValue.value === true && e.editable.value === true && X.push(U("inner-clearable-append", [d(et, { class: "q-field__focusable-action", name: t.clearIcon || o.iconSet.field.clear, tabindex: 0, role: "button", "aria-hidden": "false", "aria-label": o.lang.label.clear, onKeyup: q, onClick: N })])), l.append !== void 0 && X.push(d("div", { class: "q-field__append q-field__marginal row no-wrap items-center", key: "append", onClick: Dt }, l.append())), e.getInnerAppend !== void 0 && X.push(U("inner-append", e.getInnerAppend())), e.getControlChild !== void 0 && X.push(e.getControlChild()), X;
  }
  function k() {
    const X = [];
    return t.prefix !== void 0 && t.prefix !== null && X.push(d("div", { class: "q-field__prefix no-pointer-events row items-center" }, t.prefix)), e.getShadowControl !== void 0 && e.hasShadow.value === true && X.push(e.getShadowControl()), e.getControl !== void 0 ? X.push(e.getControl()) : l.rawControl !== void 0 ? X.push(l.rawControl()) : l.control !== void 0 && X.push(d("div", { ref: e.targetRef, class: "q-field__native row", tabindex: -1, ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0 }, l.control(b.value))), p.value === true && X.push(d("div", { class: y.value }, $e(l.label, t.label))), t.suffix !== void 0 && t.suffix !== null && X.push(d("div", { class: "q-field__suffix no-pointer-events row items-center" }, t.suffix)), X.concat($e(l.default));
  }
  function j() {
    let X, ae;
    s.value === true ? f.value !== null ? (X = [d("div", { role: "alert" }, f.value)], ae = `q--slot-error-${f.value}`) : (X = $e(l.error), ae = "q--slot-error") : (t.hideHint !== true || e.focused.value === true) && (t.hint !== void 0 ? (X = [d("div", t.hint)], ae = `q--slot-hint-${t.hint}`) : (X = $e(l.hint), ae = "q--slot-hint"));
    const pe = t.counter === true || l.counter !== void 0;
    if (t.hideBottomSpace === true && pe === false && X === void 0) return;
    const Y = d("div", { key: ae, class: "q-field__messages col" }, X);
    return d("div", { class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== true ? "animated" : "stale"), onClick: Dt }, [t.hideBottomSpace === true ? Y : d(Ot, { name: "q-transition--field-message" }, () => Y), pe === true ? d("div", { class: "q-field__counter" }, l.counter !== void 0 ? l.counter() : e.computedCounter.value) : null]);
  }
  function U(X, ae) {
    return ae === null ? null : d("div", { key: X, class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip" }, ae);
  }
  let W = false;
  return Vn(() => {
    W = true;
  }), Sl(() => {
    W === true && t.autofocus === true && a.focus();
  }), t.autofocus === true && ft(() => {
    a.focus();
  }), Ke(() => {
    i !== null && clearTimeout(i);
  }), Object.assign(a, { focus: O, blur: H }), function() {
    const ae = e.getControl === void 0 && l.control === void 0 ? { ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0, ...C.value } : C.value;
    return d(e.tag.value, { ref: e.rootRef, class: [x.value, r.class], style: r.style, ...ae }, [l.before !== void 0 ? d("div", { class: "q-field__before q-field__marginal row no-wrap items-center", onClick: Dt }, l.before()) : null, d("div", { class: "q-field__inner relative-position col self-stretch" }, [d("div", { ref: e.controlRef, class: T.value, tabindex: -1, ...e.controlEvents }, E()), g.value === true ? j() : null]), l.after !== void 0 ? d("div", { class: "q-field__after q-field__marginal row no-wrap items-center", onClick: Dt }, l.after()) : null]);
  };
}
var w1 = he({ name: "QField", inheritAttrs: false, props: { ...gi, tag: { type: String, default: "label" } }, emits: bi, setup() {
  return pi(yi({ tagProp: true }));
} });
function or(e, t, n, l) {
  const r = [];
  return e.forEach((a) => {
    l(a) === true ? r.push(a) : t.push({ failedPropValidation: n, file: a });
  }), r;
}
function Ga(e) {
  (e == null ? void 0 : e.dataTransfer) && (e.dataTransfer.dropEffect = "copy"), je(e);
}
var Eh = { multiple: Boolean, accept: String, capture: String, maxFileSize: [Number, String], maxTotalSize: [Number, String], maxFiles: [Number, String], filter: Function }, Rh = ["rejected"];
function Ah({ editable: e, dnd: t, getFileInput: n, addFilesToQueue: l }) {
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
    const O = [], H = () => {
      O.length !== 0 && a("rejected", O);
    };
    if (r.accept !== void 0 && u.value.indexOf("*/") === -1 && ($ = or($, O, "accept", (L) => u.value.some((B) => L.type.toUpperCase().startsWith(B) || L.name.toUpperCase().endsWith(B))), $.length === 0)) return H();
    if (r.maxFileSize !== void 0) {
      const L = parseInt(r.maxFileSize, 10);
      if ($ = or($, O, "max-file-size", (B) => B.size <= L), $.length === 0) return H();
    }
    if (r.multiple !== true && $.length !== 0 && ($ = [$[0]]), $.forEach((L) => {
      L.__key = L.webkitRelativePath + L.lastModified + L.name + L.size;
    }), C === true) {
      const L = b.map((B) => B.__key);
      $ = or($, O, "duplicate", (B) => L.includes(B.__key) === false);
    }
    if ($.length === 0) return H();
    if (r.maxTotalSize !== void 0) {
      let L = C === true ? b.reduce((B, N) => B + N.size, 0) : 0;
      if ($ = or($, O, "max-total-size", (B) => (L += B.size, L <= s.value)), $.length === 0) return H();
    }
    if (typeof r.filter == "function") {
      const L = r.filter($);
      $ = or($, O, "filter", (B) => L.includes(B));
    }
    if (r.maxFiles !== void 0) {
      let L = C === true ? b.length : 0;
      if ($ = or($, O, "max-files", () => (L++, L <= c.value)), $.length === 0) return H();
    }
    if (H(), $.length !== 0) return $;
  }
  function g(p) {
    Ga(p), t.value !== true && (t.value = true);
  }
  function w(p) {
    je(p), (p.relatedTarget !== null || De.is.safari !== true ? p.relatedTarget !== i.value : document.elementsFromPoint(p.clientX, p.clientY).includes(i.value) === false) === true && (t.value = false);
  }
  function x(p) {
    Ga(p);
    const y = p.dataTransfer.files;
    y.length !== 0 && l(null, y), t.value = false;
  }
  function T(p) {
    if (t.value === true) return d("div", { ref: i, class: `q-${p}__dnd absolute-full`, onDragenter: Ga, onDragover: Ga, onDragleave: w, onDrop: x });
  }
  return Object.assign(o, { pickFiles: f, addFiles: h }), { pickFiles: f, addFiles: h, onDragover: g, onDragleave: w, processFiles: m, getDndNode: T, maxFilesNumber: c, maxTotalSizeNumber: s };
}
function Ph(e, t) {
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
he({ name: "QFile", inheritAttrs: false, props: { ...Mh, ...xn, ...Eh, modelValue: [File, FileList, Array], append: Boolean, useChips: Boolean, displayValue: [String, Number], tabindex: { type: [String, Number], default: 0 }, counterLabel: Function, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...bi, ...Rh], setup(e, { slots: t, emit: n, attrs: l }) {
  const { proxy: r } = xe(), a = yi(), o = K(null), i = K(false), u = $s(e), { pickFiles: c, onDragover: s, onDragleave: f, processFiles: h, getDndNode: m } = Ah({ editable: a.editable, dnd: i, getFileInput: q, addFilesToQueue: E }), g = Ph(e), w = v(() => Object(e.modelValue) === e.modelValue ? "length" in e.modelValue ? Array.from(e.modelValue) : [e.modelValue] : []), x = v(() => Wl(w.value)), T = v(() => w.value.map((W) => W.name).join(", ")), p = v(() => Bu(w.value.reduce((W, X) => W + X.size, 0))), y = v(() => ({ totalSize: p.value, filesNumber: w.value.length, maxFiles: e.maxFiles })), b = v(() => ({ tabindex: -1, type: "file", title: "", accept: e.accept, capture: e.capture, name: u.value, ...l, id: a.targetUid.value, disabled: a.editable.value !== true })), C = v(() => "q-file q-field--auto-height" + (i.value === true ? " q-file--dnd" : "")), $ = v(() => e.multiple === true && e.append === true);
  function O(W) {
    const X = w.value.slice();
    X.splice(W, 1), L(X);
  }
  function H(W) {
    const X = w.value.indexOf(W);
    X !== -1 && O(X);
  }
  function L(W) {
    n("update:modelValue", e.multiple === true ? W : W[0]);
  }
  function B(W) {
    W.keyCode === 13 && Dt(W);
  }
  function N(W) {
    (W.keyCode === 13 || W.keyCode === 32) && c(W);
  }
  function q() {
    return o.value;
  }
  function E(W, X) {
    const ae = h(W, X, w.value, $.value), pe = q();
    pe != null && (pe.value = ""), ae !== void 0 && ((e.multiple === true ? e.modelValue && ae.every((Y) => w.value.includes(Y)) : e.modelValue === ae[0]) || L($.value === true ? w.value.concat(ae) : ae));
  }
  function k() {
    return [d("input", { class: [e.inputClass, "q-file__filler"], style: e.inputStyle })];
  }
  function j() {
    if (t.file !== void 0) return w.value.length === 0 ? k() : w.value.map((X, ae) => t.file({ index: ae, file: X, ref: this }));
    if (t.selected !== void 0) return w.value.length === 0 ? k() : t.selected({ files: w.value, ref: this });
    if (e.useChips === true) return w.value.length === 0 ? k() : w.value.map((X, ae) => d(Ym, { key: "file-" + ae, removable: a.editable.value, dense: true, textColor: e.color, tabindex: e.tabindex, onRemove: () => {
      O(ae);
    } }, () => d("span", { class: "ellipsis", textContent: X.name })));
    const W = e.displayValue !== void 0 ? e.displayValue : T.value;
    return W.length !== 0 ? [d("div", { class: e.inputClass, style: e.inputStyle, textContent: W })] : k();
  }
  function U() {
    const W = { ref: o, ...b.value, ...g.value, class: "q-field__input fit absolute-full cursor-pointer", onChange: E };
    return e.multiple === true && (W.multiple = true), d("input", W);
  }
  return Object.assign(a, { fieldClass: C, emitValue: L, hasValue: x, inputRef: o, innerValue: w, floatingLabel: v(() => x.value === true || Wl(e.displayValue)), computedCounter: v(() => {
    if (e.counterLabel !== void 0) return e.counterLabel(y.value);
    const W = e.maxFiles;
    return `${w.value.length}${W !== void 0 ? " / " + W : ""} (${p.value})`;
  }), getControlChild: () => m("file"), getControl: () => {
    const W = { ref: a.targetRef, class: "q-field__native row items-center cursor-pointer", tabindex: e.tabindex };
    return a.editable.value === true && Object.assign(W, { onDragover: s, onDragleave: f, onKeydown: B, onKeyup: N }), d("div", W, [U()].concat(j()));
  } }), Object.assign(r, { removeAtIndex: O, removeFile: H, getNativeElement: () => o.value }), Vt(r, "nativeEl", () => o.value), pi(a);
} });
var x1 = he({ name: "QFooter", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = xe(), r = qt(Gl, ot);
  if (r === ot) return console.error("QFooter needs to be child of QLayout"), ot;
  const a = K(parseInt(e.heightHint, 10)), o = K(true), i = K(ln.value === true || r.isContainer.value === true ? 0 : window.innerHeight), u = v(() => e.reveal === true || r.view.value.indexOf("F") !== -1 || l.platform.is.ios && r.isContainer.value === true), c = v(() => r.isContainer.value === true ? r.containerHeight.value : i.value), s = v(() => {
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
    const { direction: C, position: $, inflectionPoint: O } = r.scroll.value;
    x(o, C === "up" || $ - O < 100 || r.height.value - c.value - $ - a.value < 300);
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
    const C = Tt(t.default, [d(Ql, { debounce: 0, onResize: T })]);
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
          const $ = y.find(({ comp: O }) => typeof O.focus == "function" && bl(O.$) === false);
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
  gn(mm, { bindComponent(m) {
    o.push(m);
  }, unbindComponent(m) {
    const g = o.indexOf(m);
    g !== -1 && o.splice(g, 1);
  } });
  let h = false;
  return Vn(() => {
    h = true;
  }), Sl(() => {
    h === true && e.autofocus === true && f();
  }), ft(() => {
    e.autofocus === true && f();
  }), Object.assign(l.proxy, { validate: i, resetValidation: u, submit: c, reset: s, focus: f, getValidationComponents: () => o }), () => d("form", { class: "q-form", ref: r, onSubmit: c, onReset: s }, $e(t.default));
} });
var S1 = he({ name: "QHeader", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, revealOffset: { type: Number, default: 250 }, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = xe(), r = qt(Gl, ot);
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
    const p = Pa(t.default, []);
    return e.elevated === true && p.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), p.push(d(Ql, { debounce: 0, onResize: w })), d("header", { class: f.value, style: h.value, onFocusin: x }, p);
  };
} }), Ks = { ratio: [String, Number] };
function Ws(e, t) {
  return v(() => {
    const n = Number(e.ratio || (t !== void 0 ? t.value : void 0));
    return isNaN(n) !== true && n > 0 ? { paddingBottom: `${100 / n}%` } : null;
  });
}
var C1 = 1.7778;
he({ name: "QImg", props: { ...Ks, src: String, srcset: String, sizes: String, alt: String, crossorigin: String, decoding: String, referrerpolicy: String, draggable: Boolean, loading: { type: String, default: "lazy" }, loadingShowDelay: { type: [Number, String], default: 0 }, fetchpriority: { type: String, default: "auto" }, width: String, height: String, initialRatio: { type: [Number, String], default: C1 }, placeholderSrc: String, errorSrc: String, fit: { type: String, default: "cover" }, position: { type: String, default: "50% 50%" }, imgClass: String, imgStyle: Object, noSpinner: Boolean, noNativeMenu: Boolean, noTransition: Boolean, spinnerColor: String, spinnerSize: String }, emits: ["load", "error"], setup(e, { slots: t, emit: n }) {
  const l = K(e.initialRatio), r = Ws(e, l), a = xe(), { registerTimeout: o, removeTimeout: i } = Zn(), { registerTimeout: u, removeTimeout: c } = Zn(), s = v(() => e.placeholderSrc !== void 0 ? { src: e.placeholderSrc } : null), f = v(() => e.errorSrc !== void 0 ? { src: e.errorSrc, __qerror: true } : null), h = [K(null), K(s.value)], m = K(0), g = K(false), w = K(false), x = v(() => `q-img q-img--${e.noNativeMenu === true ? "no-" : ""}menu`), T = v(() => ({ width: e.width, height: e.height })), p = v(() => `q-img__image ${e.imgClass !== void 0 ? e.imgClass + " " : ""}q-img__image--with${e.noTransition === true ? "out" : ""}-transition q-img__image--`), y = v(() => ({ ...e.imgStyle, objectFit: e.fit, objectPosition: e.position }));
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
    bl(a) === false && (i(), l.value = q.naturalHeight === 0 ? 0.5 : q.naturalWidth / q.naturalHeight, O(q, 1));
  }
  function O(q, E) {
    E === 1e3 || bl(a) === true || (q.complete === true ? H(q) : o(() => {
      O(q, E + 1);
    }, 50));
  }
  function H(q) {
    bl(a) !== true && (m.value = m.value ^ 1, h[m.value].value = null, C(), q.getAttribute("__qerror") !== "true" && (w.value = false), n("load", q.currentSrc || q.src));
  }
  function L(q) {
    i(), C(), w.value = true, h[m.value].value = f.value, h[m.value ^ 1].value = s.value, n("error", q);
  }
  function B(q) {
    const E = h[q].value, k = { key: "img_" + q, class: p.value, style: y.value, alt: e.alt, crossorigin: e.crossorigin, decoding: e.decoding, referrerpolicy: e.referrerpolicy, height: e.height, width: e.width, loading: e.loading, fetchpriority: e.fetchpriority, "aria-hidden": "true", draggable: e.draggable, ...E };
    return m.value === q ? Object.assign(k, { class: k.class + "current", onLoad: $, onError: L }) : k.class += "loaded", d("div", { class: "q-img__container absolute-full", key: "img" + q }, d("img", k));
  }
  function N() {
    return g.value === false ? d("div", { key: "content", class: "q-img__content absolute-full q-anchor--skip" }, $e(t[w.value === true ? "error" : "default"])) : d("div", { key: "loading", class: "q-img__loading absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : e.noSpinner === true ? void 0 : [d(wn, { color: e.spinnerColor, size: e.spinnerSize })]);
  }
  {
    let q = function() {
      ge(() => e.src || e.srcset || e.sizes ? { src: e.src, srcset: e.srcset, sizes: e.sizes } : null, (E) => {
        i(), w.value = false, E === null ? (C(), h[m.value ^ 1].value = s.value) : b(), h[m.value].value = E;
      }, { immediate: true });
    };
    ln.value === true ? ft(q) : q();
  }
  return () => {
    const q = [];
    return r.value !== null && q.push(d("div", { key: "filler", style: r.value })), h[0].value !== null && q.push(B(0)), h[1].value !== null && q.push(B(1)), q.push(d(Ot, { name: "q-transition--fade" }, N)), d("div", { key: "main", class: x.value, style: T.value, role: "img", "aria-label": e.alt }, q);
  };
} });
var { passive: Al } = dt;
he({ name: "QInfiniteScroll", props: { offset: { type: Number, default: 500 }, debounce: { type: [String, Number], default: 100 }, scrollTarget: Zl, initialIndex: { type: Number, default: 0 }, disable: Boolean, reverse: Boolean }, emits: ["load"], setup(e, { slots: t, emit: n }) {
  const l = K(false), r = K(true), a = K(null), o = K(null);
  let i = e.initialIndex, u, c;
  const s = v(() => "q-infinite-scroll__loading" + (l.value === true ? "" : " invisible"));
  function f() {
    if (e.disable === true || l.value === true || r.value === false) return;
    const O = Ha(u), H = yl(u), L = Cr(u);
    e.reverse === false ? Math.round(H + L + e.offset) >= Math.round(O) && h() : Math.round(H) <= e.offset && h();
  }
  function h() {
    if (e.disable === true || l.value === true || r.value === false) return;
    i++, l.value = true;
    const O = Ha(u);
    n("load", i, (H) => {
      r.value === true && (l.value = false, We(() => {
        if (e.reverse === true) {
          const L = Ha(u), B = yl(u), N = L - O;
          wr(u, B + N);
        }
        H === true ? w() : a.value && a.value.closest("body") && c();
      }));
    });
  }
  function m() {
    i = 0;
  }
  function g() {
    r.value === false && (r.value = true, u.addEventListener("scroll", c, Al)), f();
  }
  function w() {
    var _a3;
    r.value === true && (r.value = false, l.value = false, u.removeEventListener("scroll", c, Al), (_a3 = c == null ? void 0 : c.cancel) == null ? void 0 : _a3.call(c));
  }
  function x() {
    if (u && r.value === true && u.removeEventListener("scroll", c, Al), u = Dn(a.value, e.scrollTarget), r.value === true) {
      if (u.addEventListener("scroll", c, Al), e.reverse === true) {
        const O = Ha(u), H = Cr(u);
        wr(u, O - H);
      }
      f();
    }
  }
  function T(O) {
    i = O;
  }
  function p(O) {
    O = parseInt(O, 10);
    const H = c;
    c = O <= 0 ? f : Ar(f, isNaN(O) === true ? 100 : O), u && r.value === true && (H !== void 0 && u.removeEventListener("scroll", H, Al), u.addEventListener("scroll", c, Al));
  }
  function y(O) {
    if (b.value === true) {
      if (o.value === null) {
        O !== true && We(() => {
          y(true);
        });
        return;
      }
      const H = `${l.value === true ? "un" : ""}pauseAnimations`;
      Array.from(o.value.getElementsByTagName("svg")).forEach((L) => {
        L[H]();
      });
    }
  }
  const b = v(() => e.disable !== true && r.value === true);
  ge([l, b], () => {
    y();
  }), ge(() => e.disable, (O) => {
    O === true ? w() : g();
  }), ge(() => e.reverse, () => {
    l.value === false && r.value === true && f();
  }), ge(() => e.scrollTarget, x), ge(() => e.debounce, p);
  let C = false;
  Sl(() => {
    C !== false && u && wr(u, C);
  }), Vn(() => {
    C = u ? yl(u) : false;
  }), Ke(() => {
    r.value === true && u.removeEventListener("scroll", c, Al);
  }), ft(() => {
    p(e.debounce), x(), l.value === false && y();
  });
  const $ = xe();
  return Object.assign($.proxy, { poll: () => {
    c == null ? void 0 : c();
  }, trigger: h, stop: w, reset: m, resume: g, setIndex: T, updateScrollTarget: x }), () => {
    const O = Pa(t.default, []);
    return b.value === true && O[e.reverse === false ? "push" : "unshift"](d("div", { ref: o, class: s.value }, $e(t.loading))), d("div", { class: "q-infinite-scroll", ref: a }, O);
  };
} });
he({ name: "QInnerLoading", props: { ...nt, ...zl, showing: Boolean, color: String, size: { type: [String, Number], default: "42px" }, label: String, labelClass: String, labelStyle: [String, Array, Object] }, setup(e, { slots: t }) {
  const n = xe(), l = lt(e, n.proxy.$q), { transitionProps: r, transitionStyle: a } = di(e), o = v(() => "q-inner-loading q--avoid-card-border absolute-full column flex-center" + (l.value === true ? " q-inner-loading--dark" : "")), i = v(() => "q-inner-loading__label" + (e.labelClass !== void 0 ? ` ${e.labelClass}` : ""));
  function u() {
    const s = [d(wn, { size: e.size, color: e.color })];
    return e.label !== void 0 && s.push(d("div", { class: i.value, style: e.labelStyle }, [e.label])), s;
  }
  function c() {
    return e.showing === true ? d("div", { class: o.value, style: a.value }, t.default !== void 0 ? t.default() : u()) : null;
  }
  return () => d(Ot, r.value, c);
} });
var Ad = { date: "####/##/##", datetime: "####/##/## ##:##", time: "##:##", fulltime: "##:##:##", phone: "(###) ### - ####", card: "#### #### #### ####" }, No = { "#": { pattern: "[\\d]", negate: "[^\\d]" }, S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" }, N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" }, A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleLowerCase() }, X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleLowerCase() } }, $h = Object.keys(No);
$h.forEach((e) => {
  No[e].regex = new RegExp(No[e].pattern);
});
var k1 = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + $h.join("") + "])|(.)", "g"), Pd = /[.*+?^${}()|[\]\\]/g, Lt = "", T1 = { mask: String, reverseFillMask: Boolean, fillMask: [Boolean, String], unmaskedValue: Boolean };
function q1(e, t, n, l) {
  let r, a, o, i, u, c;
  const s = K(null), f = K(m());
  function h() {
    return e.autogrow === true || ["textarea", "text", "search", "url", "tel", "password"].includes(e.type);
  }
  ge(() => e.type + e.autogrow, w), ge(() => e.mask, (L) => {
    if (L !== void 0) x(f.value, true);
    else {
      const B = O(f.value);
      w(), e.modelValue !== B && t("update:modelValue", B);
    }
  }), ge(() => e.fillMask + e.reverseFillMask, () => {
    s.value === true && x(f.value, true);
  }), ge(() => e.unmaskedValue, () => {
    s.value === true && x(f.value);
  });
  function m() {
    if (w(), s.value === true) {
      const L = C(O(e.modelValue));
      return e.fillMask !== false ? H(L) : L;
    }
    return e.modelValue;
  }
  function g(L) {
    if (L < r.length) return r.slice(-L);
    let B = "", N = r;
    const q = N.indexOf(Lt);
    if (q !== -1) {
      for (let E = L - N.length; E > 0; E--) B += Lt;
      N = N.slice(0, q) + B + N.slice(q);
    }
    return N;
  }
  function w() {
    if (s.value = e.mask !== void 0 && e.mask.length !== 0 && h(), s.value === false) {
      i = void 0, r = "", a = "";
      return;
    }
    const L = Ad[e.mask] === void 0 ? e.mask : Ad[e.mask], B = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_", N = B.replace(Pd, "\\$&"), q = [], E = [], k = [];
    let j = e.reverseFillMask === true, U = "", W = "";
    L.replace(k1, (Y, _, D, F, fe) => {
      if (F !== void 0) {
        const A = No[F];
        k.push(A), W = A.negate, j === true && (E.push("(?:" + W + "+)?(" + A.pattern + "+)?(?:" + W + "+)?(" + A.pattern + "+)?"), j = false), E.push("(?:" + W + "+)?(" + A.pattern + ")?");
      } else if (D !== void 0) U = "\\" + (D === "\\" ? "" : D), k.push(D), q.push("([^" + U + "]+)?" + U + "?");
      else {
        const A = _ !== void 0 ? _ : fe;
        U = A === "\\" ? "\\\\\\\\" : A.replace(Pd, "\\\\$&"), k.push(A), q.push("([^" + U + "]+)?" + U + "?");
      }
    });
    const X = new RegExp("^" + q.join("") + "(" + (U === "" ? "." : "[^" + U + "]") + "+)?" + (U === "" ? "" : "[" + U + "]*") + "$"), ae = E.length - 1, pe = E.map((Y, _) => _ === 0 && e.reverseFillMask === true ? new RegExp("^" + N + "*" + Y) : _ === ae ? new RegExp("^" + Y + "(" + (W === "" ? "." : W) + "+)?" + (e.reverseFillMask === true ? "$" : N + "*")) : new RegExp("^" + Y));
    o = k, i = (Y) => {
      const _ = X.exec(e.reverseFillMask === true ? Y : Y.slice(0, k.length + 1));
      _ !== null && (Y = _.slice(1).join(""));
      const D = [], F = pe.length;
      for (let fe = 0, A = Y; fe < F; fe++) {
        const R = pe[fe].exec(A);
        if (R === null) break;
        A = A.slice(R.shift().length), D.push(...R);
      }
      return D.length !== 0 ? D.join("") : Y;
    }, r = k.map((Y) => typeof Y == "string" ? Y : Lt).join(""), a = r.split(Lt).join(B);
  }
  function x(L, B, N) {
    const q = l.value, E = q.selectionEnd, k = q.value.length - E, j = O(L);
    B === true && w();
    const U = C(j), W = e.fillMask !== false ? H(U) : U, X = f.value !== W;
    q.value !== W && (q.value = W), X === true && (f.value = W), document.activeElement === q && We(() => {
      if (W === a) {
        const pe = e.reverseFillMask === true ? a.length : 0;
        q.setSelectionRange(pe, pe, "forward");
        return;
      }
      if (N === "insertFromPaste" && e.reverseFillMask !== true) {
        const pe = q.selectionEnd;
        let Y = E - 1;
        for (let _ = u; _ <= Y && _ < pe; _++) r[_] !== Lt && Y++;
        p.right(q, Y);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(N) !== -1) {
        const pe = e.reverseFillMask === true ? E === 0 ? W.length > U.length ? 1 : 0 : Math.max(0, W.length - (W === a ? 0 : Math.min(U.length, k) + 1)) + 1 : E;
        q.setSelectionRange(pe, pe, "forward");
        return;
      }
      if (e.reverseFillMask === true) if (X === true) {
        const pe = Math.max(0, W.length - (W === a ? 0 : Math.min(U.length, k + 1)));
        pe === 1 && E === 1 ? q.setSelectionRange(pe, pe, "forward") : p.rightReverse(q, pe);
      } else {
        const pe = W.length - k;
        q.setSelectionRange(pe, pe, "backward");
      }
      else if (X === true) {
        const pe = Math.max(0, r.indexOf(Lt), Math.min(U.length, E) - 1);
        p.right(q, pe);
      } else {
        const pe = E - 1;
        p.right(q, pe);
      }
    });
    const ae = e.unmaskedValue === true ? O(W) : W;
    String(e.modelValue) !== ae && (e.modelValue !== null || ae !== "") && n(ae, true);
  }
  function T(L, B, N) {
    const q = C(O(L.value));
    B = Math.max(0, r.indexOf(Lt), Math.min(q.length, B)), u = B, L.setSelectionRange(B, N, "forward");
  }
  const p = { left(L, B) {
    const N = r.slice(B - 1).indexOf(Lt) === -1;
    let q = Math.max(0, B - 1);
    for (; q >= 0; q--) if (r[q] === Lt) {
      B = q, N === true && B++;
      break;
    }
    if (q < 0 && r[B] !== void 0 && r[B] !== Lt) return p.right(L, 0);
    B >= 0 && L.setSelectionRange(B, B, "backward");
  }, right(L, B) {
    const N = L.value.length;
    let q = Math.min(N, B + 1);
    for (; q <= N; q++) if (r[q] === Lt) {
      B = q;
      break;
    } else r[q - 1] === Lt && (B = q);
    if (q > N && r[B - 1] !== void 0 && r[B - 1] !== Lt) return p.left(L, N);
    L.setSelectionRange(B, B, "forward");
  }, leftReverse(L, B) {
    const N = g(L.value.length);
    let q = Math.max(0, B - 1);
    for (; q >= 0; q--) if (N[q - 1] === Lt) {
      B = q;
      break;
    } else if (N[q] === Lt && (B = q, q === 0)) break;
    if (q < 0 && N[B] !== void 0 && N[B] !== Lt) return p.rightReverse(L, 0);
    B >= 0 && L.setSelectionRange(B, B, "backward");
  }, rightReverse(L, B) {
    const N = L.value.length, q = g(N), E = q.slice(0, B + 1).indexOf(Lt) === -1;
    let k = Math.min(N, B + 1);
    for (; k <= N; k++) if (q[k - 1] === Lt) {
      B = k, B > 0 && E === true && B--;
      break;
    }
    if (k > N && q[B - 1] !== void 0 && q[B - 1] !== Lt) return p.leftReverse(L, N);
    L.setSelectionRange(B, B, "forward");
  } };
  function y(L) {
    t("click", L), c = void 0;
  }
  function b(L) {
    if (t("keydown", L), Xl(L) === true || L.altKey === true) return;
    const B = l.value, N = B.selectionStart, q = B.selectionEnd;
    if (L.shiftKey || (c = void 0), L.keyCode === 37 || L.keyCode === 39) {
      L.shiftKey && c === void 0 && (c = B.selectionDirection === "forward" ? N : q);
      const E = p[(L.keyCode === 39 ? "right" : "left") + (e.reverseFillMask === true ? "Reverse" : "")];
      if (L.preventDefault(), E(B, c === N ? q : N), L.shiftKey) {
        const k = B.selectionStart;
        B.setSelectionRange(Math.min(c, k), Math.max(c, k), "forward");
      }
    } else L.keyCode === 8 && e.reverseFillMask !== true && N === q ? (p.left(B, N), B.setSelectionRange(B.selectionStart, q, "backward")) : L.keyCode === 46 && e.reverseFillMask === true && N === q && (p.rightReverse(B, q), B.setSelectionRange(N, B.selectionEnd, "forward"));
  }
  function C(L) {
    if (L == null || L === "") return "";
    if (e.reverseFillMask === true) return $(L);
    const B = o;
    let N = 0, q = "";
    for (let E = 0; E < B.length; E++) {
      const k = L[N], j = B[E];
      if (typeof j == "string") q += j, k === j && N++;
      else if (k !== void 0 && j.regex.test(k)) q += j.transform !== void 0 ? j.transform(k) : k, N++;
      else return q;
    }
    return q;
  }
  function $(L) {
    const B = o, N = r.indexOf(Lt);
    let q = L.length - 1, E = "";
    for (let k = B.length - 1; k >= 0 && q !== -1; k--) {
      const j = B[k];
      let U = L[q];
      if (typeof j == "string") E = j + E, U === j && q--;
      else if (U !== void 0 && j.regex.test(U)) do
        E = (j.transform !== void 0 ? j.transform(U) : U) + E, q--, U = L[q];
      while (N === k && U !== void 0 && j.regex.test(U));
      else return E;
    }
    return E;
  }
  function O(L) {
    return typeof L != "string" || i === void 0 ? typeof L == "number" ? i("" + L) : L : i(L);
  }
  function H(L) {
    return a.length - L.length <= 0 ? L : e.reverseFillMask === true && L.length !== 0 ? a.slice(0, -L.length) + L : L + a.slice(L.length);
  }
  return { innerValue: f, hasMask: s, moveCursorForPaste: T, updateMaskValue: x, onMaskedKeydown: b, onMaskedClick: y };
}
var M1 = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/, E1 = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u, R1 = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/, A1 = /[a-z0-9_ -]$/i;
function Lh(e) {
  return function(n) {
    if (n.type === "compositionend" || n.type === "change") {
      if (n.target.qComposing !== true) return;
      n.target.qComposing = false, e(n);
    } else n.type === "compositionupdate" && n.target.qComposing !== true && typeof n.data == "string" && (De.is.firefox === true ? A1.test(n.data) === false : M1.test(n.data) === true || E1.test(n.data) === true || R1.test(n.data) === true) === true && (n.target.qComposing = true);
  };
}
var Bh = he({ name: "QInput", inheritAttrs: false, props: { ...gi, ...T1, ...xn, modelValue: [String, Number, FileList], shadowText: String, type: { type: String, default: "text" }, debounce: [String, Number], autogrow: Boolean, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...bi, "paste", "change", "keydown", "click", "animationend"], setup(e, { emit: t, attrs: n }) {
  const { proxy: l } = xe(), { $q: r } = l, a = {};
  let o = NaN, i, u, c = null, s;
  const f = K(null), h = $s(e), { innerValue: m, hasMask: g, moveCursorForPaste: w, updateMaskValue: x, onMaskedKeydown: T, onMaskedClick: p } = q1(e, t, U, f), y = Ph(e, true), b = v(() => Wl(m.value)), C = Lh(k), $ = yi({ changeEvent: true }), O = v(() => e.type === "textarea" || e.autogrow === true), H = v(() => O.value === true || ["text", "search", "url", "tel", "password"].includes(e.type)), L = v(() => {
    const _ = { ...$.splitAttrs.listeners.value, onInput: k, onPaste: E, onChange: X, onBlur: ae, onFocus: wt };
    return _.onCompositionstart = _.onCompositionupdate = _.onCompositionend = C, g.value === true && (_.onKeydown = T, _.onClick = p), e.autogrow === true && (_.onAnimationend = j), _;
  }), B = v(() => {
    const _ = { tabindex: 0, "data-autofocus": e.autofocus === true || void 0, rows: e.type === "textarea" ? 6 : void 0, "aria-label": e.label, name: h.value, ...$.splitAttrs.attributes.value, id: $.targetUid.value, maxlength: e.maxlength, disabled: e.disable === true, readonly: e.readonly === true };
    return O.value === false && (_.type = e.type), e.autogrow === true && (_.rows = 1), _;
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
  function N() {
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
      const D = _.target;
      w(D, D.selectionStart, D.selectionEnd);
    }
    t("paste", _);
  }
  function k(_) {
    if (!_ || !_.target) return;
    if (e.type === "file") {
      t("update:modelValue", _.target.files);
      return;
    }
    const D = _.target.value;
    if (_.target.qComposing === true) {
      a.value = D;
      return;
    }
    if (g.value === true) x(D, false, _.inputType);
    else if (U(D), H.value === true && _.target === document.activeElement) {
      const { selectionStart: F, selectionEnd: fe } = _.target;
      F !== void 0 && fe !== void 0 && We(() => {
        _.target === document.activeElement && D.indexOf(_.target.value) === 0 && _.target.setSelectionRange(F, fe);
      });
    }
    e.autogrow === true && W();
  }
  function j(_) {
    t("animationend", _), W();
  }
  function U(_, D) {
    s = () => {
      c = null, e.type !== "number" && a.hasOwnProperty("value") === true && delete a.value, e.modelValue !== _ && o !== _ && (o = _, D === true && (u = true), t("update:modelValue", _), We(() => {
        o === _ && (o = NaN);
      })), s = void 0;
    }, e.type === "number" && (i = true, a.value = _), e.debounce !== void 0 ? (c !== null && clearTimeout(c), a.value = _, c = setTimeout(s, e.debounce)) : s();
  }
  function W() {
    requestAnimationFrame(() => {
      const _ = f.value;
      if (_ !== null) {
        const D = _.parentNode.style, { scrollTop: F } = _, { overflowY: fe, maxHeight: A } = r.platform.is.firefox === true ? {} : window.getComputedStyle(_), R = fe !== void 0 && fe !== "scroll";
        R === true && (_.style.overflowY = "hidden"), D.marginBottom = _.scrollHeight - 1 + "px", _.style.height = "1px", _.style.height = _.scrollHeight + "px", R === true && (_.style.overflowY = parseInt(A, 10) < _.scrollHeight ? "auto" : "hidden"), D.marginBottom = "", _.scrollTop = F;
      }
    });
  }
  function X(_) {
    C(_), c !== null && (clearTimeout(c), c = null), s == null ? void 0 : s(), t("change", _.target.value);
  }
  function ae(_) {
    _ !== void 0 && wt(_), c !== null && (clearTimeout(c), c = null), s == null ? void 0 : s(), i = false, u = false, delete a.value, e.type !== "file" && setTimeout(() => {
      f.value !== null && (f.value.value = m.value !== void 0 ? m.value : "");
    });
  }
  function pe() {
    return a.hasOwnProperty("value") === true ? a.value : m.value !== void 0 ? m.value : "";
  }
  Ke(() => {
    ae();
  }), ft(() => {
    e.autogrow === true && W();
  }), Object.assign($, { innerValue: m, fieldClass: v(() => `q-${O.value === true ? "textarea" : "input"}` + (e.autogrow === true ? " q-textarea--autogrow" : "")), hasShadow: v(() => e.type !== "file" && typeof e.shadowText == "string" && e.shadowText.length !== 0), inputRef: f, emitValue: U, hasValue: b, floatingLabel: v(() => b.value === true && (e.type !== "number" || isNaN(m.value) === false) || Wl(e.displayValue)), getControl: () => d(O.value === true ? "textarea" : "input", { ref: f, class: ["q-field__native q-placeholder", e.inputClass], style: e.inputStyle, ...B.value, ...L.value, ...e.type !== "file" ? { value: pe() } : y.value }), getShadowControl: () => d("div", { class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (O.value === true ? "" : " text-no-wrap") }, [d("span", { class: "invisible" }, pe()), d("span", e.shadowText)]) });
  const Y = pi($);
  return Object.assign(l, { focus: N, select: q, getNativeElement: () => f.value }), Vt(l, "nativeEl", () => f.value), Y;
} }), $d = { threshold: 0, root: null, rootMargin: "0px" };
function Ld(e, t, n) {
  var _a3;
  let l, r, a;
  typeof n == "function" ? (l = n, r = $d, a = t.cfg === void 0) : (l = n.handler, r = Object.assign({}, $d, n.cfg), a = t.cfg === void 0 || Tn(t.cfg, r) === false), t.handler !== l && (t.handler = l), a === true && (t.cfg = r, (_a3 = t.observer) == null ? void 0 : _a3.unobserve(e), t.observer = new IntersectionObserver(([o]) => {
    if (typeof t.handler == "function") {
      if (o.rootBounds === null && document.body.contains(e) === true) {
        t.observer.unobserve(e), t.observer.observe(e);
        return;
      }
      (t.handler(o, t.observer) === false || t.once === true && o.isIntersecting === true) && Fh(e);
    }
  }, r), t.observer.observe(e));
}
function Fh(e) {
  var _a3;
  const t = e.__qvisible;
  t !== void 0 && ((_a3 = t.observer) == null ? void 0 : _a3.unobserve(e), delete e.__qvisible);
}
var P1 = Pn({ name: "intersection", mounted(e, { modifiers: t, value: n }) {
  const l = { once: t.once === true };
  Ld(e, l, n), e.__qvisible = l;
}, updated(e, t) {
  const n = e.__qvisible;
  n !== void 0 && Ld(e, n, t.value);
}, beforeUnmount: Fh });
he({ name: "QIntersection", props: { tag: { type: String, default: "div" }, once: Boolean, transition: String, transitionDuration: { type: [String, Number], default: 300 }, ssrPrerender: Boolean, margin: String, threshold: [Number, Array], root: { default: null }, disable: Boolean, onVisibility: Function }, setup(e, { slots: t, emit: n }) {
  const l = K(ln.value === true ? e.ssrPrerender : false), r = v(() => e.root !== void 0 || e.margin !== void 0 || e.threshold !== void 0 ? { handler: u, cfg: { root: e.root, rootMargin: e.margin, threshold: e.threshold } } : u), a = v(() => e.disable !== true && (ln.value !== true || e.once !== true || e.ssrPrerender !== true)), o = v(() => [[P1, r.value, void 0, { once: e.once }]]), i = v(() => `--q-transition-duration: ${e.transitionDuration}ms`);
  function u(s) {
    l.value !== s.isIntersecting && (l.value = s.isIntersecting, e.onVisibility !== void 0 && n("visibility", l.value));
  }
  function c() {
    if (l.value === true) return [d("div", { key: "content", style: i.value }, $e(t.default))];
    if (t.hidden !== void 0) return [d("div", { key: "hidden", style: i.value }, t.hidden())];
  }
  return () => {
    const s = e.transition ? [d(Ot, { name: "q-transition--" + e.transition }, c)] : c();
    return _n(e.tag, { class: "q-intersection" }, s, "main", a.value, () => o.value);
  };
} });
var $1 = ["ul", "ol"], Oh = he({ name: "QList", props: { ...nt, bordered: Boolean, dense: Boolean, separator: Boolean, padding: Boolean, tag: { type: String, default: "div" } }, setup(e, { slots: t }) {
  const n = xe(), l = lt(e, n.proxy.$q), r = v(() => $1.includes(e.tag) ? null : "list"), a = v(() => "q-list" + (e.bordered === true ? " q-list--bordered" : "") + (e.dense === true ? " q-list--dense" : "") + (e.separator === true ? " q-list--separator" : "") + (l.value === true ? " q-list--dark" : "") + (e.padding === true ? " q-list--padding" : ""));
  return () => d(e.tag, { class: a.value, role: r.value }, $e(t.default));
} }), Bd = [34, 37, 40, 33, 39, 38], L1 = Object.keys(Ns);
he({ name: "QKnob", props: { ...xn, ...Ns, modelValue: { type: Number, required: true }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, tabindex: { type: [Number, String], default: 0 }, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change", "dragValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), { $q: r } = l, a = K(e.modelValue), o = K(false), i = v(() => isNaN(e.innerMin) === true || e.innerMin < e.min ? e.min : e.innerMin), u = v(() => isNaN(e.innerMax) === true || e.innerMax > e.max ? e.max : e.innerMax);
  let c;
  function s() {
    a.value = e.modelValue === null ? i.value : ct(e.modelValue, i.value, u.value), N(true);
  }
  ge(() => `${e.modelValue}|${i.value}|${u.value}`, s), s();
  const f = v(() => e.disable === false && e.readonly === false), h = v(() => "q-knob non-selectable" + (f.value === true ? " q-knob--editable" : e.disable === true ? " disabled" : "")), m = v(() => (String(e.step).trim().split(".")[1] || "").length), g = v(() => e.step === 0 ? 1 : e.step), w = v(() => e.instantFeedback === true || o.value === true), x = r.platform.is.mobile === true ? v(() => f.value === true ? { onClick: O } : {}) : v(() => f.value === true ? { onMousedown: $, onClick: O, onKeydown: H, onKeyup: B } : {}), T = v(() => f.value === true ? { tabindex: e.tabindex } : { [`aria-${e.disable === true ? "disabled" : "readonly"}`]: "true" }), p = v(() => {
    const k = {};
    return L1.forEach((j) => {
      k[j] = e[j];
    }), k;
  });
  function y(k) {
    k.isFinal ? (L(k.evt, true), o.value = false) : (k.isFirst && (C(), o.value = true), L(k.evt));
  }
  const b = v(() => [[bn, y, void 0, { prevent: true, stop: true, mouse: true }]]);
  function C() {
    const { top: k, left: j, width: U, height: W } = l.$el.getBoundingClientRect();
    c = { top: k + W / 2, left: j + U / 2 };
  }
  function $(k) {
    C(), L(k);
  }
  function O(k) {
    C(), L(k, true);
  }
  function H(k) {
    if (Bd.includes(k.keyCode) === false) return;
    je(k);
    const j = ([34, 33].includes(k.keyCode) ? 10 : 1) * g.value, U = [34, 37, 40].includes(k.keyCode) ? -j : j;
    a.value = ct(parseFloat((a.value + U).toFixed(m.value)), i.value, u.value), N();
  }
  function L(k, j) {
    const U = tn(k), W = Math.abs(U.top - c.top), X = Math.sqrt(W ** 2 + Math.abs(U.left - c.left) ** 2);
    let ae = Math.asin(W / X) * (180 / Math.PI);
    U.top < c.top ? ae = c.left < U.left ? 90 - ae : 270 + ae : ae = c.left < U.left ? ae + 90 : 270 - ae, r.lang.rtl === true ? ae = Eo(-ae - e.angle, 0, 360) : e.angle && (ae = Eo(ae - e.angle, 0, 360)), e.reverse === true && (ae = 360 - ae);
    let pe = e.min + ae / 360 * (e.max - e.min);
    if (g.value !== 0) {
      const Y = pe % g.value;
      pe = pe - Y + (Math.abs(Y) >= g.value / 2 ? (Y < 0 ? -1 : 1) * g.value : 0), pe = parseFloat(pe.toFixed(m.value));
    }
    pe = ct(pe, i.value, u.value), n("dragValue", pe), a.value !== pe && (a.value = pe), N(j);
  }
  function B(k) {
    Bd.includes(k.keyCode) && N(true);
  }
  function N(k) {
    e.modelValue !== a.value && n("update:modelValue", a.value), k === true && n("change", a.value);
  }
  const q = Ba(e);
  function E() {
    return d("input", q.value);
  }
  return () => {
    const k = { class: h.value, role: "slider", "aria-valuemin": i.value, "aria-valuemax": u.value, "aria-valuenow": e.modelValue, ...T.value, ...p.value, value: a.value, instantFeedback: w.value, ...x.value }, j = { default: t.default };
    return f.value === true && e.name !== void 0 && (j.internal = E), _n(Zm, k, j, "knob", f.value, () => b.value);
  };
} });
var { passive: Fd } = dt, B1 = ["both", "horizontal", "vertical"], Vh = he({ name: "QScrollObserver", props: { axis: { type: String, validator: (e) => B1.includes(e), default: "vertical" }, debounce: [String, Number], scrollTarget: Zl }, emits: ["scroll"], setup(e, { emit: t }) {
  const n = { position: { top: 0, left: 0 }, direction: "down", directionChanged: false, delta: { top: 0, left: 0 }, inflectionPoint: { top: 0, left: 0 } };
  let l = null, r, a;
  ge(() => e.scrollTarget, () => {
    u(), i();
  });
  function o() {
    l == null ? void 0 : l();
    const f = Math.max(0, yl(r)), h = fi(r), m = { top: f - n.position.top, left: h - n.position.left };
    if (e.axis === "vertical" && m.top === 0 || e.axis === "horizontal" && m.left === 0) return;
    const g = Math.abs(m.top) >= Math.abs(m.left) ? m.top < 0 ? "up" : "down" : m.left < 0 ? "left" : "right";
    n.position = { top: f, left: h }, n.directionChanged = n.direction !== g, n.delta = m, n.directionChanged === true && (n.direction = g, n.inflectionPoint = n.position), t("scroll", { ...n });
  }
  function i() {
    r = Dn(a, e.scrollTarget), r.addEventListener("scroll", c, Fd), c(true);
  }
  function u() {
    r !== void 0 && (r.removeEventListener("scroll", c, Fd), r = void 0);
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
} }), F1 = he({ name: "QLayout", props: { container: Boolean, view: { type: String, default: "hhh lpr fff", validator: (e) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase()) }, onScroll: Function, onScrollHeight: Function, onResize: Function }, setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = xe(), r = K(null), a = K(l.screen.height), o = K(e.container === true ? 0 : l.screen.width), i = K({ position: 0, direction: "down", inflectionPoint: 0 }), u = K(0), c = K(ln.value === true ? 0 : so()), s = v(() => "q-layout q-layout--" + (e.container === true ? "containerized" : "standard")), f = v(() => e.container === false ? { minHeight: l.screen.height + "px" } : null), h = v(() => c.value !== 0 ? { [l.lang.rtl === true ? "left" : "right"]: `${c.value}px` } : null), m = v(() => c.value !== 0 ? { [l.lang.rtl === true ? "right" : "left"]: 0, [l.lang.rtl === true ? "left" : "right"]: `-${c.value}px`, width: `calc(100% + ${c.value}px)` } : null);
  function g(b) {
    if (e.container === true || document.qScrollPrevented !== true) {
      const C = { position: b.position.top, direction: b.direction, directionChanged: b.directionChanged, inflectionPoint: b.inflectionPoint.top, delta: b.delta.top };
      i.value = C, e.onScroll !== void 0 && n("scroll", C);
    }
  }
  function w(b) {
    const { height: C, width: $ } = b;
    let O = false;
    a.value !== C && (O = true, a.value = C, e.onScrollHeight !== void 0 && n("scrollHeight", C), T()), o.value !== $ && (O = true, o.value = $), O === true && e.onResize !== void 0 && n("resize", b);
  }
  function x({ height: b }) {
    u.value !== b && (u.value = b, T());
  }
  function T() {
    if (e.container === true) {
      const b = a.value > u.value ? so() : 0;
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
  if (gn(Gl, y), so() > 0) {
    let b = function() {
      O = null, H.classList.remove("hide-scrollbar");
    }, C = function() {
      if (O === null) {
        if (H.scrollHeight > l.screen.height) return;
        H.classList.add("hide-scrollbar");
      } else clearTimeout(O);
      O = setTimeout(b, 300);
    }, $ = function(L) {
      O !== null && L === "remove" && (clearTimeout(O), b()), window[`${L}EventListener`]("resize", C);
    }, O = null;
    const H = document.body;
    ge(() => e.container !== true ? "add" : "remove", $), e.container !== true && $("add"), ni(() => {
      $("remove");
    });
  }
  return () => {
    const b = Tt(t.default, [d(Vh, { onScroll: g }), d(Ql, { onResize: w })]), C = d("div", { class: s.value, style: f.value, ref: e.container === true ? void 0 : r, tabindex: -1 }, b);
    return e.container === true ? d("div", { class: "q-layout-container overflow-hidden", ref: r }, [d(Ql, { onResize: x }), d("div", { class: "absolute-full", style: h.value }, [d("div", { class: "scroll", style: m.value }, [C])])]) : C;
  };
} }), O1 = ["horizontal", "vertical", "cell", "none"], V1 = he({ name: "QMarkupTable", props: { ...nt, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, wrapCells: Boolean, separator: { type: String, default: "horizontal", validator: (e) => O1.includes(e) } }, setup(e, { slots: t }) {
  const n = xe(), l = lt(e, n.proxy.$q), r = v(() => `q-markup-table q-table__container q-table__card q-table--${e.separator}-separator` + (l.value === true ? " q-table--dark q-table__card--dark q-dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "") + (e.square === true ? " q-table--square" : "") + (e.wrapCells === false ? " q-table--no-wrap" : ""));
  return () => d("div", { class: r.value }, [d("table", { class: "q-table" }, $e(t.default))]);
} });
he({ name: "QNoSsr", props: { tag: { type: String, default: "div" }, placeholder: String }, setup(e, { slots: t }) {
  const { isHydrated: n } = nh();
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
var D1 = () => d("svg", { key: "svg", class: "q-radio__bg absolute non-selectable", viewBox: "0 0 24 24" }, [d("path", { d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12" }), d("path", { class: "q-radio__check", d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6" })]), I1 = he({ name: "QRadio", props: { ...nt, ...el, ...xn, modelValue: { required: true }, val: { required: true }, label: String, leftLabel: Boolean, checkedIcon: String, uncheckedIcon: String, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), r = lt(e, l.$q), a = tl(e, Um), o = K(null), { refocusTargetEl: i, refocusTarget: u } = jm(e, o), c = v(() => Xe(e.modelValue) === Xe(e.val)), s = v(() => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (e.disable === true ? " disabled" : "") + (r.value === true ? " q-radio--dark" : "") + (e.dense === true ? " q-radio--dense" : "") + (e.leftLabel === true ? " reverse" : "")), f = v(() => {
    const b = e.color !== void 0 && (e.keepColor === true || c.value === true) ? ` text-${e.color}` : "";
    return `q-radio__inner relative-position q-radio__inner--${c.value === true ? "truthy" : "falsy"}${b}`;
  }), h = v(() => (c.value === true ? e.checkedIcon : e.uncheckedIcon) || null), m = v(() => e.disable === true ? -1 : e.tabindex || 0), g = v(() => {
    const b = { type: "radio" };
    return e.name !== void 0 && Object.assign(b, { ".checked": c.value === true, "^checked": c.value === true ? "checked" : void 0, name: e.name, value: e.val }), b;
  }), w = kl(g);
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
  const y = D1();
  return () => {
    const b = h.value !== null ? [d("div", { key: "icon", class: "q-radio__icon-container absolute-full flex flex-center no-wrap" }, [d(et, { class: "q-radio__icon", name: h.value })])] : [y];
    e.disable !== true && w(b, "unshift", " q-radio__native q-ma-none q-pa-none");
    const C = [d("div", { class: f.value, style: a.value, "aria-hidden": "true" }, b)];
    i.value !== null && C.push(i.value);
    const $ = e.label !== void 0 ? Tt(t.default, [e.label]) : $e(t.default);
    return $ !== void 0 && C.push(d("div", { class: "q-radio__label q-anchor--skip" }, $)), d("div", { ref: o, class: s.value, tabindex: m.value, role: "radio", "aria-label": e.label, "aria-checked": c.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: x, onKeydown: T, onKeyup: p }, C);
  };
} }), z1 = he({ name: "QToggle", props: { ...Qm, icon: String, iconColor: String }, emits: Km, setup(e) {
  function t(n, l) {
    const r = v(() => (n.value === true ? e.checkedIcon : l.value === true ? e.indeterminateIcon : e.uncheckedIcon) || e.icon), a = v(() => n.value === true ? e.iconColor : null);
    return () => [d("div", { class: "q-toggle__track" }), d("div", { class: "q-toggle__thumb absolute flex flex-center no-wrap" }, r.value !== void 0 ? [d(et, { name: r.value, color: a.value })] : void 0)];
  }
  return Wm("toggle", t);
} }), Dh = { radio: I1, checkbox: sa, toggle: z1 }, N1 = Object.keys(Dh);
function nu(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (l) => l[n];
}
var H1 = he({ name: "QOptionGroup", props: { ...nt, modelValue: { required: true }, options: { type: Array, validator: (e) => e.every($t), default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], name: String, type: { type: String, default: "radio", validator: (e) => N1.includes(e) }, color: String, keepColor: Boolean, dense: Boolean, size: String, leftLabel: Boolean, inline: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { emit: t, slots: n }) {
  const { proxy: { $q: l } } = xe(), r = Array.isArray(e.modelValue);
  e.type === "radio" ? r === true && console.error("q-option-group: model should not be array") : r === false && console.error("q-option-group: model should be array in your case");
  const a = lt(e, l), o = v(() => Dh[e.type]), i = v(() => nu(e.optionValue, "value")), u = v(() => nu(e.optionLabel, "label")), c = v(() => nu(e.optionDisable, "disable")), s = v(() => e.options.map((g) => ({ val: i.value(g), name: g.name === void 0 ? e.name : g.name, disable: e.disable || c.value(g), leftLabel: g.leftLabel === void 0 ? e.leftLabel : g.leftLabel, color: g.color === void 0 ? e.color : g.color, checkedIcon: g.checkedIcon, uncheckedIcon: g.uncheckedIcon, dark: g.dark === void 0 ? a.value : g.dark, size: g.size === void 0 ? e.size : g.size, dense: e.dense, keepColor: g.keepColor === void 0 ? e.keepColor : g.keepColor }))), f = v(() => "q-option-group q-gutter-x-sm" + (e.inline === true ? " q-option-group--inline" : "")), h = v(() => {
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
  const { proxy: { $q: n } } = xe(), l = qt(Gl, ot);
  if (l === ot) return console.error("QPage needs to be a deep child of QLayout"), ot;
  if (qt(fm, ot) === ot) return console.error("QPage needs to be child of QPageContainer"), ot;
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
var j1 = he({ name: "QPageContainer", setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), l = qt(Gl, ot);
  if (l === ot) return console.error("QPageContainer needs to be child of QLayout"), ot;
  gn(fm, true);
  const r = v(() => {
    const a = {};
    return l.header.space === true && (a.paddingTop = `${l.header.size}px`), l.right.space === true && (a[`padding${n.lang.rtl === true ? "Left" : "Right"}`] = `${l.right.size}px`), l.footer.space === true && (a.paddingBottom = `${l.footer.size}px`), l.left.space === true && (a[`padding${n.lang.rtl === true ? "Right" : "Left"}`] = `${l.left.size}px`), a;
  });
  return () => d("div", { class: "q-page-container", style: r.value }, $e(t.default));
} }), Wu = { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, validator: (e) => e.length === 2 }, expand: Boolean };
function Ih() {
  const { props: e, proxy: { $q: t } } = xe(), n = qt(Gl, ot);
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
he({ name: "QPageScroller", props: { ...Wu, scrollOffset: { type: Number, default: 1e3 }, reverse: Boolean, duration: { type: Number, default: 300 }, offset: { ...Wu.offset, default: () => [18, 18] } }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = xe(), { $layout: r, getStickyContent: a } = Ih(), o = K(null);
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
    wr(T, e.reverse === true ? r.height.value : 0, e.duration), n("click", x);
  }
  function w() {
    return s.value === true ? d("div", { ref: o, class: "q-page-scroller", onClick: g }, a(t)) : null;
  }
  return h(), Ke(m), () => d(Ot, { name: "q-transition--fade" }, w);
} });
he({ name: "QPageSticky", props: Wu, setup(e, { slots: t }) {
  const { getStickyContent: n } = Ih();
  return () => n(t);
} });
function Za(e, t) {
  return [true, false].includes(e) ? e : t;
}
he({ name: "QPagination", props: { ...nt, modelValue: { type: Number, required: true }, min: { type: [Number, String], default: 1 }, max: { type: [Number, String], required: true }, maxPages: { type: [Number, String], default: 0, validator: (e) => (typeof e == "string" ? parseInt(e, 10) : e) >= 0 }, inputStyle: [Array, String, Object], inputClass: [Array, String, Object], size: String, disable: Boolean, input: Boolean, iconPrev: String, iconNext: String, iconFirst: String, iconLast: String, toFn: Function, boundaryLinks: { type: Boolean, default: null }, boundaryNumbers: { type: Boolean, default: null }, directionLinks: { type: Boolean, default: null }, ellipses: { type: Boolean, default: null }, ripple: { type: [Boolean, Object], default: null }, round: Boolean, rounded: Boolean, flat: Boolean, outline: Boolean, unelevated: Boolean, push: Boolean, glossy: Boolean, color: { type: String, default: "primary" }, textColor: String, activeDesign: { type: String, default: "", values: (e) => e === "" || qm.includes(e) }, activeColor: String, activeTextColor: String, gutter: String, padding: { type: String, default: "3px 2px" } }, emits: ["update:modelValue"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), { $q: l } = n, r = lt(e, l), a = v(() => parseInt(e.min, 10)), o = v(() => parseInt(e.max, 10)), i = v(() => parseInt(e.maxPages, 10)), u = v(() => g.value + " / " + o.value), c = v(() => Za(e.boundaryLinks, e.input)), s = v(() => Za(e.boundaryNumbers, !e.input)), f = v(() => Za(e.directionLinks, e.input)), h = v(() => Za(e.ellipses, !e.input)), m = K(null), g = v({ get: () => e.modelValue, set: (E) => {
    if (E = parseInt(E, 10), e.disable || isNaN(E)) return;
    const k = ct(E, a.value, o.value);
    e.modelValue !== k && t("update:modelValue", k);
  } });
  ge(() => `${a.value}|${o.value}`, () => {
    g.value = e.modelValue;
  });
  const w = v(() => "q-pagination row no-wrap items-center" + (e.disable === true ? " disabled" : "")), x = v(() => e.gutter in Po ? `${Po[e.gutter]}px` : e.gutter || null), T = v(() => x.value !== null ? `--q-pagination-gutter-parent:-${x.value};--q-pagination-gutter-child:${x.value}` : null), p = v(() => {
    const E = [e.iconFirst || l.iconSet.pagination.first, e.iconPrev || l.iconSet.pagination.prev, e.iconNext || l.iconSet.pagination.next, e.iconLast || l.iconSet.pagination.last];
    return l.lang.rtl === true ? E.reverse() : E;
  }), y = v(() => ({ "aria-disabled": e.disable === true ? "true" : "false", role: "navigation" })), b = v(() => qs(e, "flat")), C = v(() => ({ [b.value]: true, round: e.round, rounded: e.rounded, padding: e.padding, color: e.color, textColor: e.textColor, size: e.size, ripple: e.ripple !== null ? e.ripple : true })), $ = v(() => {
    const E = { [b.value]: false };
    return e.activeDesign !== "" && (E[e.activeDesign] = true), E;
  }), O = v(() => ({ ...$.value, color: e.activeColor || e.color, textColor: e.activeTextColor || e.textColor })), H = v(() => {
    let E = Math.max(i.value, 1 + (h.value ? 2 : 0) + (s.value ? 2 : 0));
    const k = { pgFrom: a.value, pgTo: o.value, ellipsesStart: false, ellipsesEnd: false, boundaryStart: false, boundaryEnd: false, marginalStyle: { minWidth: `${Math.max(2, String(o.value).length)}em` } };
    return i.value && E < o.value - a.value + 1 && (E = 1 + Math.floor(E / 2) * 2, k.pgFrom = Math.max(a.value, Math.min(o.value - E + 1, e.modelValue - Math.floor(E / 2))), k.pgTo = Math.min(o.value, k.pgFrom + E - 1), s.value && (k.boundaryStart = true, k.pgFrom++), h.value && k.pgFrom > a.value + (s.value ? 1 : 0) && (k.ellipsesStart = true, k.pgFrom++), s.value && (k.boundaryEnd = true, k.pgTo--), h.value && k.pgTo < o.value - (s.value ? 1 : 0) && (k.ellipsesEnd = true, k.pgTo--)), k;
  });
  function L(E) {
    g.value = E;
  }
  function B(E) {
    g.value = g.value + E;
  }
  const N = v(() => {
    function E() {
      g.value = m.value, m.value = null;
    }
    return { "onUpdate:modelValue": (k) => {
      m.value = k;
    }, onKeyup: (k) => {
      pn(k, 13) === true && E();
    }, onBlur: E };
  });
  function q(E, k, j) {
    const U = { "aria-label": k, "aria-current": "false", ...C.value, ...E };
    return j === true && Object.assign(U, { "aria-current": "true", ...O.value }), k !== void 0 && (e.toFn !== void 0 ? U.to = e.toFn(k) : U.onClick = () => {
      L(k);
    }), d(Ze, U);
  }
  return Object.assign(n, { set: L, setByOffset: B }), () => {
    const E = [], k = [];
    let j;
    if (c.value === true && (E.push(q({ key: "bls", disable: e.disable || e.modelValue <= a.value, icon: p.value[0], "aria-label": l.lang.pagination.first }, a.value)), k.unshift(q({ key: "ble", disable: e.disable || e.modelValue >= o.value, icon: p.value[3], "aria-label": l.lang.pagination.last }, o.value))), f.value === true && (E.push(q({ key: "bdp", disable: e.disable || e.modelValue <= a.value, icon: p.value[1], "aria-label": l.lang.pagination.prev }, e.modelValue - 1)), k.unshift(q({ key: "bdn", disable: e.disable || e.modelValue >= o.value, icon: p.value[2], "aria-label": l.lang.pagination.next }, e.modelValue + 1))), e.input !== true) {
      j = [];
      const { pgFrom: U, pgTo: W, marginalStyle: X } = H.value;
      if (H.value.boundaryStart === true) {
        const ae = a.value === e.modelValue;
        E.push(q({ key: "bns", style: X, disable: e.disable, label: a.value }, a.value, ae));
      }
      if (H.value.boundaryEnd === true) {
        const ae = o.value === e.modelValue;
        k.unshift(q({ key: "bne", style: X, disable: e.disable, label: o.value }, o.value, ae));
      }
      H.value.ellipsesStart === true && E.push(q({ key: "bes", style: X, disable: e.disable, label: "\u2026", ripple: false }, U - 1)), H.value.ellipsesEnd === true && k.unshift(q({ key: "bee", style: X, disable: e.disable, label: "\u2026", ripple: false }, W + 1));
      for (let ae = U; ae <= W; ae++) j.push(q({ key: `bpg${ae}`, style: X, disable: e.disable, label: ae }, ae, ae === e.modelValue));
    }
    return d("div", { class: w.value, ...y.value }, [d("div", { class: "q-pagination__content row no-wrap items-center", style: T.value }, [...E, e.input === true ? d(Bh, { class: "inline", style: { width: `${u.value.length / 1.5}em` }, type: "number", dense: true, value: m.value, disable: e.disable, dark: r.value, borderless: true, inputClass: e.inputClass, inputStyle: e.inputStyle, placeholder: u.value, min: a.value, max: o.value, ...N.value }) : d("div", { class: "q-pagination__middle row justify-center" }, j), ...k])]);
  };
} });
function lu(e) {
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
var { passive: Ja } = dt;
he({ name: "QParallax", props: { src: String, height: { type: Number, default: 500 }, speed: { type: Number, default: 1, validator: (e) => e >= 0 && e <= 1 }, scrollTarget: Zl, onScroll: Function }, setup(e, { slots: t, emit: n }) {
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
    h === window ? (y = 0, C = b = window.innerHeight) : (y = Ao(h).top, b = Cr(h), C = y + b);
    const $ = Ao(r.value).top, O = $ + e.height;
    if (f !== void 0 || O > y && $ < C) {
      const H = (C - $) / (e.height + b);
      w((c - e.height) * H * e.speed), m(H);
    }
  }
  let w = (y) => {
    u.style.transform = `translate3d(-50%,${Math.round(y)}px,0)`;
  };
  function x() {
    c = u.naturalHeight || u.videoHeight || Cr(u), i === true && g();
  }
  function T() {
    i = true, h = Dn(r.value, e.scrollTarget), h.addEventListener("scroll", g, Ja), window.addEventListener("resize", s, Ja), g();
  }
  function p() {
    i === true && (i = false, h.removeEventListener("scroll", g, Ja), window.removeEventListener("resize", s, Ja), h = void 0, w.cancel(), m.cancel(), s.cancel());
  }
  return ft(() => {
    w = lu(w), m = lu(m), s = lu(x), u = t.media !== void 0 ? a.value.children[0] : o.value, u.onload = u.onloadstart = u.loadedmetadata = x, x(), u.style.display = "initial", window.IntersectionObserver !== void 0 ? (f = new IntersectionObserver((y) => {
      (y[0].isIntersecting === true ? T : p)();
    }), f.observe(r.value)) : T();
  }), Ke(() => {
    p(), f == null ? void 0 : f.disconnect(), u.onload = u.onloadstart = u.loadedmetadata = null;
  }), () => d("div", { ref: r, class: "q-parallax", style: { height: `${e.height}px` } }, [d("div", { ref: a, class: "q-parallax__media absolute-full" }, t.media !== void 0 ? t.media() : [d("img", { ref: o, src: e.src })]), d("div", { class: "q-parallax__content absolute-full column flex-center" }, t.content !== void 0 ? t.content({ percentScrolled: l.value }) : $e(t.default))]);
} });
function ca(e, t = /* @__PURE__ */ new WeakMap()) {
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
    n.add(ca(l, t));
  }) : e instanceof Map && e.forEach((l, r) => {
    n.set(r, ca(l, t));
  }), Object.assign(n, ...Object.keys(e).map((l) => ({ [l]: ca(e[l], t) })));
}
he({ name: "QPopupEdit", props: { modelValue: { required: true }, title: String, buttons: Boolean, labelSet: String, labelCancel: String, color: { type: String, default: "primary" }, validate: { type: Function, default: () => true }, autoSave: Boolean, cover: { type: Boolean, default: true }, disable: Boolean }, emits: ["update:modelValue", "save", "cancel", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), { $q: r } = l, a = K(null), o = K(""), i = K("");
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
    We(() => {
      a.value.updatePosition();
    });
  }
  function m() {
    return Tn(i.value, o.value) === false;
  }
  function g() {
    u = true, a.value.hide();
  }
  function w() {
    u = false, o.value = ca(e.modelValue), i.value = ca(e.modelValue), n("beforeShow");
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
    if (e.disable !== true) return d(vi, { ref: a, class: "q-popup-edit", cover: e.cover, onBeforeShow: w, onShow: x, onBeforeHide: T, onHide: p, onEscapeKey: f }, y);
  };
} });
he({ name: "QPopupProxy", props: { ...Am, breakpoint: { type: [String, Number], default: 450 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: n, attrs: l }) {
  const { proxy: r } = xe(), { $q: a } = r, o = K(false), i = K(null), u = v(() => parseInt(e.breakpoint, 10)), { canShow: c } = Es({ showing: o });
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
  } }), Vt(r, "currentComponent", () => ({ type: f.value, ref: i.value })), () => {
    const w = { ref: i, ...h.value, ...l, onShow: m, onHide: g };
    let x;
    return f.value === "dialog" ? x = hi : (x = vi, Object.assign(w, { target: e.target, contextMenu: e.contextMenu, noParentEvent: true, separateClosePopup: true })), d(x, w, t.default);
  };
} });
var U1 = { xs: 2, sm: 4, md: 6, lg: 10, xl: 14 };
function Od(e, t, n) {
  return { transform: t === true ? `translateX(${n.lang.rtl === true ? "-" : ""}100%) scale3d(${-e},1,1)` : `scale3d(${e},1,1)` };
}
var Q1 = he({ name: "QLinearProgress", props: { ...nt, ...el, value: { type: Number, default: 0 }, buffer: Number, color: String, trackColor: String, reverse: Boolean, stripe: Boolean, indeterminate: Boolean, query: Boolean, rounded: Boolean, animationSpeed: { type: [String, Number], default: 2100 }, instantFeedback: Boolean }, setup(e, { slots: t }) {
  const { proxy: n } = xe(), l = lt(e, n.$q), r = tl(e, U1), a = v(() => e.indeterminate === true || e.query === true), o = v(() => e.reverse !== e.query), i = v(() => ({ ...r.value !== null ? r.value : {}, "--q-linear-progress-speed": `${e.animationSpeed}ms` })), u = v(() => "q-linear-progress" + (e.color !== void 0 ? ` text-${e.color}` : "") + (e.reverse === true || e.query === true ? " q-linear-progress--reverse" : "") + (e.rounded === true ? " rounded-borders" : "")), c = v(() => Od(e.buffer !== void 0 ? e.buffer : 1, o.value, n.$q)), s = v(() => `with${e.instantFeedback === true ? "out" : ""}-transition`), f = v(() => `q-linear-progress__track absolute-full q-linear-progress__track--${s.value} q-linear-progress__track--${l.value === true ? "dark" : "light"}` + (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")), h = v(() => Od(a.value === true ? 1 : e.value, o.value, n.$q)), m = v(() => `q-linear-progress__model absolute-full q-linear-progress__model--${s.value} q-linear-progress__model--${a.value === true ? "in" : ""}determinate`), g = v(() => ({ width: `${e.value * 100}%` })), w = v(() => `q-linear-progress__stripe absolute-${e.reverse === true ? "right" : "left"} q-linear-progress__stripe--${s.value}`);
  return () => {
    const x = [d("div", { class: f.value, style: c.value }), d("div", { class: m.value, style: h.value })];
    return e.stripe === true && a.value === false && x.push(d("div", { class: w.value, style: g.value })), d("div", { class: u.value, style: i.value, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuenow": e.indeterminate === true ? void 0 : e.value }, Tt(t.default, x));
  };
} }), Vd = 40, ru = 20;
he({ name: "QPullToRefresh", props: { color: String, bgColor: String, icon: String, noMouse: Boolean, disable: Boolean, scrollTarget: Zl }, emits: ["refresh"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), { $q: r } = l, a = K("pull"), o = K(0), i = K(false), u = K(-40), c = K(false), s = K({}), f = v(() => ({ opacity: o.value, transform: `translateY(${u.value}px) rotate(${o.value * 360}deg)` })), h = v(() => "q-pull-to-refresh__puller row flex-center" + (c.value === true ? " q-pull-to-refresh__puller--animating" : "") + (e.bgColor !== void 0 ? ` bg-${e.bgColor}` : ""));
  function m(C) {
    if (C.isFinal === true) {
      i.value === true && (i.value = false, a.value === "pulled" ? (a.value = "refreshing", y({ pos: ru }), x()) : a.value === "pull" && y({ pos: -40, ratio: 0 }));
      return;
    }
    if (c.value === true || a.value === "refreshing") return false;
    if (C.isFirst === true) {
      if (yl(T) !== 0 || C.direction !== "down") return i.value === true && (i.value = false, a.value = "pull", y({ pos: -40, ratio: 0 })), false;
      i.value = true;
      const { top: H, left: L } = l.$el.getBoundingClientRect();
      s.value = { top: H + "px", left: L + "px", width: window.getComputedStyle(l.$el).getPropertyValue("width") };
    }
    Dt(C.evt);
    const $ = Math.min(140, Math.max(0, C.distance.y));
    u.value = $ - Vd, o.value = ct($ / (ru + Vd), 0, 1);
    const O = u.value > ru ? "pulled" : "pull";
    a.value !== O && (a.value = O);
  }
  const g = v(() => {
    const C = { down: true };
    return e.noMouse !== true && (C.mouse = true), [[bn, m, void 0, C]];
  }), w = v(() => `q-pull-to-refresh__content${i.value === true ? " no-pointer-events" : ""}`);
  function x() {
    n("refresh", () => {
      y({ pos: -40, ratio: 0 }, () => {
        a.value = "pull";
      });
    });
  }
  let T, p = null;
  function y({ pos: C, ratio: $ }, O) {
    c.value = true, u.value = C, $ !== void 0 && (o.value = $), p !== null && clearTimeout(p), p = setTimeout(() => {
      p = null, c.value = false, O == null ? void 0 : O();
    }, 300);
  }
  function b() {
    T = Dn(l.$el, e.scrollTarget);
  }
  return ge(() => e.scrollTarget, b), ft(b), Ke(() => {
    p !== null && clearTimeout(p);
  }), Object.assign(l, { trigger: x, updateScrollTarget: b }), () => {
    const C = [d("div", { class: w.value }, $e(t.default)), d("div", { class: "q-pull-to-refresh__puller-container fixed row flex-center no-pointer-events z-top", style: s.value }, [d("div", { class: h.value, style: f.value }, [a.value !== "refreshing" ? d(et, { name: e.icon || r.iconSet.pullToRefresh.icon, color: e.color, size: "32px" }) : d(wn, { size: "24px", color: e.color })])])];
    return _n("div", { class: "q-pull-to-refresh" }, C, "main", e.disable === false, () => g.value);
  };
} });
var al = { MIN: 0, RANGE: 1, MAX: 2 };
he({ name: "QRange", props: { ...Jm, modelValue: { type: Object, default: () => ({ min: null, max: null }), validator: (e) => "min" in e && "max" in e }, dragRange: Boolean, dragOnlyRange: Boolean, leftLabelColor: String, leftLabelTextColor: String, rightLabelColor: String, rightLabelTextColor: String, leftLabelValue: [String, Number], rightLabelValue: [String, Number], leftThumbColor: String, rightThumbColor: String }, emits: eh, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = xe(), { state: l, methods: r } = th({ updateValue: H, updatePosition: B, getDragging: L, formAttrs: v(() => ({ type: "hidden", name: e.name, value: `${e.modelValue.min}|${e.modelValue.max}` })) }), a = K(null), o = K(0), i = K(0), u = K({ min: 0, max: 0 });
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
    }, onBlur: r.onBlur, onKeydown: N, onKeyup: r.onKeyup }), q;
  });
  function x(q) {
    return n.platform.is.mobile !== true && l.editable.value === true && e.dragOnlyRange !== true ? { onFocus: () => {
      l.focus.value = q;
    }, onBlur: r.onBlur, onKeydown: N, onKeyup: r.onKeyup } : {};
  }
  const T = v(() => e.dragOnlyRange !== true ? l.tabindex.value : null), p = v(() => n.platform.is.mobile !== true && (e.dragRange || e.dragOnlyRange === true) ? l.tabindex.value : null), y = K(null), b = v(() => x("min")), C = r.getThumbRenderFn({ focusValue: "min", getNodeData: () => ({ ref: y, key: "tmin", ...b.value, tabindex: T.value }), ratio: h, label: v(() => e.leftLabelValue !== void 0 ? e.leftLabelValue : u.value.min), thumbColor: v(() => e.leftThumbColor || e.thumbColor || e.color), labelColor: v(() => e.leftLabelColor || e.labelColor), labelTextColor: v(() => e.leftLabelTextColor || e.labelTextColor) }), $ = v(() => x("max")), O = r.getThumbRenderFn({ focusValue: "max", getNodeData: () => ({ ...$.value, key: "tmax", tabindex: T.value }), ratio: m, label: v(() => e.rightLabelValue !== void 0 ? e.rightLabelValue : u.value.max), thumbColor: v(() => e.rightThumbColor || e.thumbColor || e.color), labelColor: v(() => e.rightLabelColor || e.labelColor), labelTextColor: v(() => e.rightLabelTextColor || e.labelTextColor) });
  function H(q) {
    (u.value.min !== e.modelValue.min || u.value.max !== e.modelValue.max) && t("update:modelValue", { ...u.value }), q === true && t("change", { ...u.value });
  }
  function L(q) {
    const { left: E, top: k, width: j, height: U } = a.value.getBoundingClientRect(), W = e.dragOnlyRange === true ? 0 : e.vertical === true ? y.value.offsetHeight / (2 * U) : y.value.offsetWidth / (2 * j), X = { left: E, top: k, width: j, height: U, valueMin: u.value.min, valueMax: u.value.max, ratioMin: s.value, ratioMax: f.value }, ae = r.getDraggingRatio(q, X);
    return e.dragOnlyRange !== true && ae < X.ratioMin + W ? X.type = al.MIN : e.dragOnlyRange === true || ae < X.ratioMax - W ? e.dragRange === true || e.dragOnlyRange === true ? (X.type = al.RANGE, Object.assign(X, { offsetRatio: ae, offsetModel: r.convertRatioToModel(ae), rangeValue: X.valueMax - X.valueMin, rangeRatio: X.ratioMax - X.ratioMin })) : X.type = X.ratioMax - ae < ae - X.ratioMin ? al.MAX : al.MIN : X.type = al.MAX, X;
  }
  function B(q, E = l.dragging.value) {
    let k;
    const j = r.getDraggingRatio(q, E), U = r.convertRatioToModel(j);
    switch (E.type) {
      case al.MIN:
        j <= E.ratioMax ? (k = { minR: j, maxR: E.ratioMax, min: U, max: E.valueMax }, l.focus.value = "min") : (k = { minR: E.ratioMax, maxR: j, min: E.valueMax, max: U }, l.focus.value = "max");
        break;
      case al.MAX:
        j >= E.ratioMin ? (k = { minR: E.ratioMin, maxR: j, min: E.valueMin, max: U }, l.focus.value = "max") : (k = { minR: j, maxR: E.ratioMin, min: U, max: E.valueMin }, l.focus.value = "min");
        break;
      case al.RANGE:
        const W = j - E.offsetRatio, X = ct(E.ratioMin + W, l.innerMinRatio.value, l.innerMaxRatio.value - E.rangeRatio), ae = U - E.offsetModel, pe = ct(E.valueMin + ae, l.innerMin.value, l.innerMax.value - E.rangeValue);
        k = { minR: X, maxR: X + E.rangeRatio, min: l.roundValueFn.value(pe), max: l.roundValueFn.value(pe + E.rangeValue) }, l.focus.value = "both";
        break;
    }
    u.value = u.value.min === null || u.value.max === null ? { min: k.min || e.min, max: k.max || e.max } : { min: k.min, max: k.max }, e.snap !== true || e.step === 0 ? (o.value = k.minR, i.value = k.maxR) : (o.value = r.convertModelToRatio(u.value.min), i.value = r.convertModelToRatio(u.value.max));
  }
  function N(q) {
    if (Hs.includes(q.keyCode) === false) return;
    je(q);
    const E = ([34, 33].includes(q.keyCode) ? 10 : 1) * l.keyStep.value, k = ([34, 37, 40].includes(q.keyCode) ? -1 : 1) * (l.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * E;
    if (l.focus.value === "both") {
      const j = u.value.max - u.value.min, U = ct(l.roundValueFn.value(u.value.min + k), l.innerMin.value, l.innerMax.value - j);
      u.value = { min: U, max: l.roundValueFn.value(U + j) };
    } else {
      if (l.focus.value === false) return;
      {
        const j = l.focus.value;
        u.value = { ...u.value, [j]: ct(l.roundValueFn.value(u.value[j] + k), j === "min" ? l.innerMin.value : u.value.min, j === "max" ? l.innerMax.value : u.value.max) };
      }
    }
    H();
  }
  return () => {
    const q = r.getContent(g, p, w, (E) => {
      E.push(C(), O());
    });
    return d("div", { ref: a, class: "q-range " + l.classes.value + (e.modelValue.min === null || e.modelValue.max === null ? " q-slider--no-value" : ""), ...l.attributes.value, "aria-valuenow": e.modelValue.min + "|" + e.modelValue.max }, q);
  };
} });
he({ name: "QRating", props: { ...el, ...xn, modelValue: { type: Number, required: true }, max: { type: [String, Number], default: 5 }, icon: [String, Array], iconHalf: [String, Array], iconSelected: [String, Array], iconAriaLabel: [String, Array], color: [String, Array], colorHalf: [String, Array], colorSelected: [String, Array], noReset: Boolean, noDimming: Boolean, readonly: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = xe(), r = tl(e), a = Ba(e), o = kl(a), i = K(0);
  let u = {};
  const c = v(() => e.readonly !== true && e.disable !== true), s = v(() => `q-rating row inline items-center q-rating--${c.value === true ? "" : "non-"}editable` + (e.noDimming === true ? " q-rating--no-dimming" : "") + (e.disable === true ? " disabled" : "") + (e.color !== void 0 && Array.isArray(e.color) === false ? ` text-${e.color}` : "")), f = v(() => {
    const y = Array.isArray(e.icon) === true ? e.icon.length : 0, b = Array.isArray(e.iconSelected) === true ? e.iconSelected.length : 0, C = Array.isArray(e.iconHalf) === true ? e.iconHalf.length : 0, $ = Array.isArray(e.color) === true ? e.color.length : 0, O = Array.isArray(e.colorSelected) === true ? e.colorSelected.length : 0, H = Array.isArray(e.colorHalf) === true ? e.colorHalf.length : 0;
    return { iconLen: y, icon: y > 0 ? e.icon[y - 1] : e.icon, selIconLen: b, selIcon: b > 0 ? e.iconSelected[b - 1] : e.iconSelected, halfIconLen: C, halfIcon: C > 0 ? e.iconHalf[b - 1] : e.iconHalf, colorLen: $, color: $ > 0 ? e.color[$ - 1] : e.color, selColorLen: O, selColor: O > 0 ? e.colorSelected[O - 1] : e.colorSelected, halfColorLen: H, halfColor: H > 0 ? e.colorHalf[H - 1] : e.colorHalf };
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
    const y = [], b = f.value, C = Math.ceil(e.modelValue), $ = c.value === true ? 0 : null, O = e.iconHalf === void 0 || C === e.modelValue ? -1 : C;
    for (let H = 1; H <= e.max; H++) {
      const L = i.value === 0 && e.modelValue >= H || i.value > 0 && i.value >= H, B = O === H && i.value < H, N = i.value > 0 && (B === true ? C : e.modelValue) >= H && i.value < H, q = B === true ? H <= b.halfColorLen ? e.colorHalf[H - 1] : b.halfColor : b.selColor !== void 0 && L === true ? H <= b.selColorLen ? e.colorSelected[H - 1] : b.selColor : H <= b.colorLen ? e.color[H - 1] : b.color, E = (B === true ? H <= b.halfIconLen ? e.iconHalf[H - 1] : b.halfIcon : b.selIcon !== void 0 && (L === true || N === true) ? H <= b.selIconLen ? e.iconSelected[H - 1] : b.selIcon : H <= b.iconLen ? e.icon[H - 1] : b.icon) || l.iconSet.rating.icon;
      y.push({ name: (B === true ? H <= b.halfIconLen ? e.iconHalf[H - 1] : b.halfIcon : b.selIcon !== void 0 && (L === true || N === true) ? H <= b.selIconLen ? e.iconSelected[H - 1] : b.selIcon : H <= b.iconLen ? e.icon[H - 1] : b.icon) || l.iconSet.rating.icon, attrs: { tabindex: $, role: "radio", "aria-checked": e.modelValue === H ? "true" : "false", "aria-label": h.value(H, E) }, iconClass: "q-rating__icon" + (L === true || B === true ? " q-rating__icon--active" : "") + (N === true ? " q-rating__icon--exselected" : "") + (i.value === H ? " q-rating__icon--hovered" : "") + (q !== void 0 ? ` text-${q}` : "") });
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
  return Rr(() => {
    u = {};
  }), () => {
    const y = [];
    return m.value.forEach(({ iconClass: b, name: C, attrs: $ }, O) => {
      const H = O + 1;
      y.push(d("div", { key: H, ref: (L) => {
        u[`rt${H}`] = L;
      }, class: "q-rating__icon-container flex flex-center", ...$, onClick() {
        w(H);
      }, onMouseover() {
        x(H);
      }, onMouseout: p, onFocus() {
        x(H);
      }, onBlur: p, onKeyup(L) {
        T(L, H);
      } }, Tt(t[`tip-${H}`], [d(et, { class: b, name: C })])));
    }), e.name !== void 0 && e.disable !== true && o(y, "push"), d("div", { class: s.value, style: r.value, ...g.value }, y);
  };
} });
he({ name: "QResponsive", props: Ks, setup(e, { slots: t }) {
  const n = Ws(e);
  return () => d("div", { class: "q-responsive" }, [d("div", { class: "q-responsive__filler overflow-hidden" }, [d("div", { style: n.value })]), d("div", { class: "q-responsive__content absolute-full fit" }, $e(t.default))]);
} });
var K1 = he({ props: ["store", "barStyle", "verticalBarStyle", "horizontalBarStyle"], setup(e) {
  return () => [d("div", { class: e.store.scroll.vertical.barClass.value, style: [e.barStyle, e.verticalBarStyle], "aria-hidden": "true", onMousedown: e.store.onVerticalMousedown }), d("div", { class: e.store.scroll.horizontal.barClass.value, style: [e.barStyle, e.horizontalBarStyle], "aria-hidden": "true", onMousedown: e.store.onHorizontalMousedown }), cn(d("div", { ref: e.store.scroll.vertical.ref, class: e.store.scroll.vertical.thumbClass.value, style: e.store.scroll.vertical.style.value, "aria-hidden": "true" }), e.store.thumbVertDir), cn(d("div", { ref: e.store.scroll.horizontal.ref, class: e.store.scroll.horizontal.thumbClass.value, style: e.store.scroll.horizontal.style.value, "aria-hidden": "true" }), e.store.thumbHorizDir)];
} }), Dd = ["vertical", "horizontal"], au = { vertical: { offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y" }, horizontal: { offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x" } }, Id = { prevent: true, mouse: true, mouseAllDir: true }, zd = (e) => e >= 250 ? 50 : Math.ceil(e / 5), W1 = he({ name: "QScrollArea", props: { ...nt, thumbStyle: Object, verticalThumbStyle: Object, horizontalThumbStyle: Object, barStyle: [Array, String, Object], verticalBarStyle: [Array, String, Object], horizontalBarStyle: [Array, String, Object], verticalOffset: { type: Array, default: [0, 0] }, horizontalOffset: { type: Array, default: [0, 0] }, contentStyle: [Array, String, Object], contentActiveStyle: [Array, String, Object], delay: { type: [String, Number], default: 1e3 }, visible: { type: Boolean, default: null }, tabindex: [String, Number], onScroll: Function }, setup(e, { slots: t, emit: n }) {
  const l = K(false), r = K(false), a = K(false), o = { vertical: K(0), horizontal: K(0) }, i = { vertical: { ref: K(null), position: K(0), size: K(0) }, horizontal: { ref: K(null), position: K(0), size: K(0) } }, { proxy: u } = xe(), c = lt(e, u.$q);
  let s = null, f;
  const h = K(null), m = v(() => "q-scrollarea" + (c.value === true ? " q-scrollarea--dark" : ""));
  Object.assign(o, { verticalInner: v(() => o.vertical.value - e.verticalOffset[0] - e.verticalOffset[1]), horizontalInner: v(() => o.horizontal.value - e.horizontalOffset[0] - e.horizontalOffset[1]) }), i.vertical.percentage = v(() => {
    const k = i.vertical.size.value - o.vertical.value;
    if (k <= 0) return 0;
    const j = ct(i.vertical.position.value / k, 0, 1);
    return Math.round(j * 1e4) / 1e4;
  }), i.vertical.thumbHidden = v(() => (e.visible === null ? a.value : e.visible) !== true && l.value === false && r.value === false || i.vertical.size.value <= o.vertical.value + 1), i.vertical.thumbStart = v(() => e.verticalOffset[0] + i.vertical.percentage.value * (o.verticalInner.value - i.vertical.thumbSize.value)), i.vertical.thumbSize = v(() => Math.round(ct(o.verticalInner.value * o.verticalInner.value / i.vertical.size.value, zd(o.verticalInner.value), o.verticalInner.value))), i.vertical.style = v(() => ({ ...e.thumbStyle, ...e.verticalThumbStyle, top: `${i.vertical.thumbStart.value}px`, height: `${i.vertical.thumbSize.value}px`, right: `${e.horizontalOffset[1]}px` })), i.vertical.thumbClass = v(() => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (i.vertical.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), i.vertical.barClass = v(() => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (i.vertical.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : "")), i.horizontal.percentage = v(() => {
    const k = i.horizontal.size.value - o.horizontal.value;
    if (k <= 0) return 0;
    const j = ct(Math.abs(i.horizontal.position.value) / k, 0, 1);
    return Math.round(j * 1e4) / 1e4;
  }), i.horizontal.thumbHidden = v(() => (e.visible === null ? a.value : e.visible) !== true && l.value === false && r.value === false || i.horizontal.size.value <= o.horizontal.value + 1), i.horizontal.thumbStart = v(() => e.horizontalOffset[0] + i.horizontal.percentage.value * (o.horizontalInner.value - i.horizontal.thumbSize.value)), i.horizontal.thumbSize = v(() => Math.round(ct(o.horizontalInner.value * o.horizontalInner.value / i.horizontal.size.value, zd(o.horizontalInner.value), o.horizontalInner.value))), i.horizontal.style = v(() => ({ ...e.thumbStyle, ...e.horizontalThumbStyle, [u.$q.lang.rtl === true ? "right" : "left"]: `${i.horizontal.thumbStart.value}px`, width: `${i.horizontal.thumbSize.value}px`, bottom: `${e.verticalOffset[1]}px` })), i.horizontal.thumbClass = v(() => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (i.horizontal.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), i.horizontal.barClass = v(() => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (i.horizontal.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : ""));
  const g = v(() => i.vertical.thumbHidden.value === true && i.horizontal.thumbHidden.value === true ? e.contentStyle : e.contentActiveStyle);
  function w() {
    const k = {};
    return Dd.forEach((j) => {
      const U = i[j];
      Object.assign(k, { [j + "Position"]: U.position.value, [j + "Percentage"]: U.percentage.value, [j + "Size"]: U.size.value, [j + "ContainerSize"]: o[j].value, [j + "ContainerInnerSize"]: o[j + "Inner"].value });
    }), k;
  }
  const x = Ar(() => {
    const k = w();
    k.ref = u, n("scroll", k);
  }, 0);
  function T(k, j, U) {
    if (Dd.includes(k) === false) {
      console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
      return;
    }
    (k === "vertical" ? wr : Ii)(h.value, j, U);
  }
  function p({ height: k, width: j }) {
    let U = false;
    o.vertical.value !== k && (o.vertical.value = k, U = true), o.horizontal.value !== j && (o.horizontal.value = j, U = true), U === true && O();
  }
  function y({ position: k }) {
    let j = false;
    i.vertical.position.value !== k.top && (i.vertical.position.value = k.top, j = true), i.horizontal.position.value !== k.left && (i.horizontal.position.value = k.left, j = true), j === true && O();
  }
  function b({ height: k, width: j }) {
    i.horizontal.size.value !== j && (i.horizontal.size.value = j, O()), i.vertical.size.value !== k && (i.vertical.size.value = k, O());
  }
  function C(k, j) {
    const U = i[j];
    if (k.isFirst === true) {
      if (U.thumbHidden.value === true) return;
      f = U.position.value, r.value = true;
    } else if (r.value !== true) return;
    k.isFinal === true && (r.value = false);
    const W = au[j], X = (U.size.value - o[j].value) / (o[j + "Inner"].value - U.thumbSize.value), ae = k.distance[W.dist], pe = f + (k.direction === W.dir ? 1 : -1) * ae * X;
    H(pe, j);
  }
  function $(k, j) {
    const U = i[j];
    if (U.thumbHidden.value !== true) {
      const W = j === "vertical" ? e.verticalOffset[0] : e.horizontalOffset[0], X = k[au[j].offset] - W, ae = U.thumbStart.value - W;
      if (X < ae || X > ae + U.thumbSize.value) {
        const pe = X - U.thumbSize.value / 2, Y = ct(pe / (o[j + "Inner"].value - U.thumbSize.value), 0, 1);
        H(Y * Math.max(0, U.size.value - o[j].value), j);
      }
      U.ref.value !== null && U.ref.value.dispatchEvent(new MouseEvent(k.type, k));
    }
  }
  function O() {
    l.value = true, s !== null && clearTimeout(s), s = setTimeout(() => {
      s = null, l.value = false;
    }, e.delay), e.onScroll !== void 0 && x();
  }
  function H(k, j) {
    h.value[au[j].scroll] = k;
  }
  let L = null;
  function B() {
    L !== null && clearTimeout(L), L = setTimeout(() => {
      L = null, a.value = true;
    }, u.$q.platform.is.ios ? 50 : 0);
  }
  function N() {
    L !== null && (clearTimeout(L), L = null), a.value = false;
  }
  let q = null;
  ge(() => u.$q.lang.rtl, (k) => {
    h.value !== null && Ii(h.value, Math.abs(i.horizontal.position.value) * (k === true ? -1 : 1));
  }), Vn(() => {
    q = { top: i.vertical.position.value, left: i.horizontal.position.value };
  }), Sl(() => {
    if (q === null) return;
    const k = h.value;
    k !== null && (Ii(k, q.left), wr(k, q.top));
  }), Ke(x.cancel), Object.assign(u, { getScrollTarget: () => h.value, getScroll: w, getScrollPosition: () => ({ top: i.vertical.position.value, left: i.horizontal.position.value }), getScrollPercentage: () => ({ top: i.vertical.percentage.value, left: i.horizontal.percentage.value }), setScrollPosition: T, setScrollPercentage(k, j, U) {
    T(k, j * (i[k].size.value - o[k].value) * (k === "horizontal" && u.$q.lang.rtl === true ? -1 : 1), U);
  } });
  const E = { scroll: i, thumbVertDir: [[bn, (k) => {
    C(k, "vertical");
  }, void 0, { vertical: true, ...Id }]], thumbHorizDir: [[bn, (k) => {
    C(k, "horizontal");
  }, void 0, { horizontal: true, ...Id }]], onVerticalMousedown(k) {
    $(k, "vertical");
  }, onHorizontalMousedown(k) {
    $(k, "horizontal");
  } };
  return () => d("div", { class: m.value, onMouseenter: B, onMouseleave: N }, [d("div", { ref: h, class: "q-scrollarea__container scroll relative-position fit hide-scrollbar", tabindex: e.tabindex !== void 0 ? e.tabindex : void 0 }, [d("div", { class: "q-scrollarea__content absolute", style: g.value }, Tt(t.default, [d(Ql, { debounce: 0, onResize: b })])), d(Vh, { axis: "both", onScroll: y })]), d(Ql, { debounce: 0, onResize: p }), d(K1, { store: E, barStyle: e.barStyle, verticalBarStyle: e.verticalBarStyle, horizontalBarStyle: e.horizontalBarStyle })]);
} }), kn = 1e3, Y1 = ["start", "center", "end", "start-force", "center-force", "end-force"], zh = Array.prototype.filter, X1 = __QUASAR_SSR__ || window.getComputedStyle(document.body).overflowAnchor === void 0 ? xt : function(e, t) {
  e !== null && (e._qOverflowAnimationFrame !== void 0 && cancelAnimationFrame(e._qOverflowAnimationFrame), e._qOverflowAnimationFrame = requestAnimationFrame(() => {
    if (e === null) return;
    e._qOverflowAnimationFrame = void 0;
    const n = e.children || [];
    zh.call(n, (r) => r.dataset && r.dataset.qVsAnchor !== void 0).forEach((r) => {
      delete r.dataset.qVsAnchor;
    });
    const l = n[t];
    (l == null ? void 0 : l.dataset) && (l.dataset.qVsAnchor = "");
  }));
};
function xr(e, t) {
  return e + t;
}
function ou(e, t, n, l, r, a, o, i) {
  const u = e === window ? document.scrollingElement || document.documentElement : e, c = r === true ? "offsetWidth" : "offsetHeight", s = { scrollStart: 0, scrollViewSize: -o - i, scrollMaxSize: 0, offsetStart: -o, offsetEnd: -i };
  if (r === true ? (e === window ? (s.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, s.scrollViewSize += document.documentElement.clientWidth) : (s.scrollStart = u.scrollLeft, s.scrollViewSize += u.clientWidth), s.scrollMaxSize = u.scrollWidth, a === true && (s.scrollStart = (ka === true ? s.scrollMaxSize - s.scrollViewSize : 0) - s.scrollStart)) : (e === window ? (s.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0, s.scrollViewSize += document.documentElement.clientHeight) : (s.scrollStart = u.scrollTop, s.scrollViewSize += u.clientHeight), s.scrollMaxSize = u.scrollHeight), n !== null) for (let f = n.previousElementSibling; f !== null; f = f.previousElementSibling) f.classList.contains("q-virtual-scroll--skip") === false && (s.offsetStart += f[c]);
  if (l !== null) for (let f = l.nextElementSibling; f !== null; f = f.nextElementSibling) f.classList.contains("q-virtual-scroll--skip") === false && (s.offsetEnd += f[c]);
  if (t !== e) {
    const f = u.getBoundingClientRect(), h = t.getBoundingClientRect();
    r === true ? (s.offsetStart += h.left - f.left, s.offsetEnd -= h.width) : (s.offsetStart += h.top - f.top, s.offsetEnd -= h.height), e !== window && (s.offsetStart += s.scrollStart), s.offsetEnd += s.scrollMaxSize - s.offsetStart;
  }
  return s;
}
function Nd(e, t, n, l) {
  t === "end" && (t = (e === window ? document.body : e)[n === true ? "scrollWidth" : "scrollHeight"]), e === window ? n === true ? (l === true && (t = (ka === true ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - t), window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t) : n === true ? (l === true && (t = (ka === true ? e.scrollWidth - e.offsetWidth : 0) - t), e.scrollLeft = t) : e.scrollTop = t;
}
function Nr(e, t, n, l) {
  if (n >= l) return 0;
  const r = t.length, a = Math.floor(n / kn), o = Math.floor((l - 1) / kn) + 1;
  let i = e.slice(a, o).reduce(xr, 0);
  return n % kn !== 0 && (i -= t.slice(a * kn, n).reduce(xr, 0)), l % kn !== 0 && l !== r && (i -= t.slice(l, o * kn).reduce(xr, 0)), i;
}
var Nh = { virtualScrollSliceSize: { type: [Number, String], default: 10 }, virtualScrollSliceRatioBefore: { type: [Number, String], default: 1 }, virtualScrollSliceRatioAfter: { type: [Number, String], default: 1 }, virtualScrollItemSize: { type: [Number, String], default: 24 }, virtualScrollStickySizeStart: { type: [Number, String], default: 0 }, virtualScrollStickySizeEnd: { type: [Number, String], default: 0 }, tableColspan: [Number, String] }, Hh = Object.keys(Nh), Yu = { virtualScrollHorizontal: Boolean, onVirtualScroll: Function, ...Nh };
function jh({ virtualScrollLength: e, getVirtualScrollTarget: t, getVirtualScrollEl: n, virtualScrollItemSizeComputed: l }) {
  const r = xe(), { props: a, emit: o, proxy: i } = r, { $q: u } = i;
  let c, s, f, h = [], m;
  const g = K(0), w = K(0), x = K({}), T = K(null), p = K(null), y = K(null), b = K({ from: 0, to: 0 }), C = v(() => a.tableColspan !== void 0 ? a.tableColspan : 100);
  l === void 0 && (l = v(() => a.virtualScrollItemSize));
  const $ = v(() => l.value + ";" + a.virtualScrollHorizontal), O = v(() => $.value + ";" + a.virtualScrollSliceRatioBefore + ";" + a.virtualScrollSliceRatioAfter);
  ge(O, () => {
    U();
  }), ge($, H);
  function H() {
    j(s, true);
  }
  function L(Y) {
    j(Y === void 0 ? s : Y);
  }
  function B(Y, _) {
    const D = t();
    if (D == null || D.nodeType === 8) return;
    const F = ou(D, n(), T.value, p.value, a.virtualScrollHorizontal, u.lang.rtl, a.virtualScrollStickySizeStart, a.virtualScrollStickySizeEnd);
    f !== F.scrollViewSize && U(F.scrollViewSize), q(D, F, Math.min(e.value - 1, Math.max(0, parseInt(Y, 10) || 0)), 0, Y1.indexOf(_) !== -1 ? _ : s !== -1 && Y > s ? "end" : "start");
  }
  function N() {
    const Y = t();
    if (Y == null || Y.nodeType === 8) return;
    const _ = ou(Y, n(), T.value, p.value, a.virtualScrollHorizontal, u.lang.rtl, a.virtualScrollStickySizeStart, a.virtualScrollStickySizeEnd), D = e.value - 1, F = _.scrollMaxSize - _.offsetStart - _.offsetEnd - w.value;
    if (c === _.scrollStart) return;
    if (_.scrollMaxSize <= 0) {
      q(Y, _, 0, 0);
      return;
    }
    f !== _.scrollViewSize && U(_.scrollViewSize), E(b.value.from);
    const fe = Math.floor(_.scrollMaxSize - Math.max(_.scrollViewSize, _.offsetEnd) - Math.min(m[D], _.scrollViewSize / 2));
    if (fe > 0 && Math.ceil(_.scrollStart) >= fe) {
      q(Y, _, D, _.scrollMaxSize - _.offsetEnd - h.reduce(xr, 0));
      return;
    }
    let A = 0, R = _.scrollStart - _.offsetStart, G = R;
    if (R <= F && R + _.scrollViewSize >= g.value) R -= g.value, A = b.value.from, G = R;
    else for (let V = 0; R >= h[V] && A < D; V++) R -= h[V], A += kn;
    for (; R > 0 && A < D; ) R -= m[A], R > -_.scrollViewSize ? (A++, G = R) : G = m[A] + R;
    q(Y, _, A, G);
  }
  function q(Y, _, D, F, fe) {
    const A = typeof fe == "string" && fe.indexOf("-force") !== -1, R = A === true ? fe.replace("-force", "") : fe, G = R !== void 0 ? R : "start";
    let V = Math.max(0, D - x.value[G]), ne = V + x.value.total;
    ne > e.value && (ne = e.value, V = Math.max(0, ne - x.value.total)), c = _.scrollStart;
    const be = V !== b.value.from || ne !== b.value.to;
    if (be === false && R === void 0) {
      X(D);
      return;
    }
    const { activeElement: S } = document, M = y.value;
    be === true && M !== null && M !== S && M.contains(S) === true && (M.addEventListener("focusout", k), setTimeout(() => {
      M == null ? void 0 : M.removeEventListener("focusout", k);
    })), X1(M, D - V);
    const I = R !== void 0 ? m.slice(V, D).reduce(xr, 0) : 0;
    if (be === true) {
      const ee = ne >= b.value.from && V <= b.value.to ? b.value.to : ne;
      b.value = { from: V, to: ee }, g.value = Nr(h, m, 0, V), w.value = Nr(h, m, ne, e.value), requestAnimationFrame(() => {
        b.value.to !== ne && c === _.scrollStart && (b.value = { from: b.value.from, to: ne }, w.value = Nr(h, m, ne, e.value));
      });
    }
    requestAnimationFrame(() => {
      if (c !== _.scrollStart) return;
      be === true && E(V);
      const ee = m.slice(V, D).reduce(xr, 0), le = ee + _.offsetStart + g.value, P = le + m[D];
      let te = le + F;
      if (R !== void 0) {
        const se = ee - I, me = _.scrollStart + se;
        te = A !== true && me < le && P < me + _.scrollViewSize ? me : R === "end" ? P - _.scrollViewSize : le - (R === "start" ? 0 : Math.round((_.scrollViewSize - m[D]) / 2));
      }
      c = te, Nd(Y, te, a.virtualScrollHorizontal, u.lang.rtl), X(D);
    });
  }
  function E(Y) {
    const _ = y.value;
    if (_) {
      const D = zh.call(_.children, (V) => V.classList && V.classList.contains("q-virtual-scroll--skip") === false), F = D.length, fe = a.virtualScrollHorizontal === true ? (V) => V.getBoundingClientRect().width : (V) => V.offsetHeight;
      let A = Y, R, G;
      for (let V = 0; V < F; ) {
        for (R = fe(D[V]), V++; V < F && D[V].classList.contains("q-virtual-scroll--with-prev") === true; ) R += fe(D[V]), V++;
        G = R - m[A], G !== 0 && (m[A] += G, h[Math.floor(A / kn)] += G), A++;
      }
    }
  }
  function k() {
    var _a3;
    (_a3 = y.value) == null ? void 0 : _a3.focus();
  }
  function j(Y, _) {
    const D = 1 * l.value;
    (_ === true || Array.isArray(m) === false) && (m = []);
    const F = m.length;
    m.length = e.value;
    for (let A = e.value - 1; A >= F; A--) m[A] = D;
    const fe = Math.floor((e.value - 1) / kn);
    h = [];
    for (let A = 0; A <= fe; A++) {
      let R = 0;
      const G = Math.min((A + 1) * kn, e.value);
      for (let V = A * kn; V < G; V++) R += m[V];
      h.push(R);
    }
    s = -1, c = void 0, g.value = Nr(h, m, 0, b.value.from), w.value = Nr(h, m, b.value.to, e.value), Y >= 0 ? (E(b.value.from), We(() => {
      B(Y);
    })) : ae();
  }
  function U(Y) {
    if (Y === void 0 && typeof window < "u") {
      const R = t();
      R != null && R.nodeType !== 8 && (Y = ou(R, n(), T.value, p.value, a.virtualScrollHorizontal, u.lang.rtl, a.virtualScrollStickySizeStart, a.virtualScrollStickySizeEnd).scrollViewSize);
    }
    f = Y;
    const _ = parseFloat(a.virtualScrollSliceRatioBefore) || 0, D = parseFloat(a.virtualScrollSliceRatioAfter) || 0, F = 1 + _ + D, fe = Y === void 0 || Y <= 0 ? 1 : Math.ceil(Y / l.value), A = Math.max(1, fe, Math.ceil((a.virtualScrollSliceSize > 0 ? a.virtualScrollSliceSize : 10) / F));
    x.value = { total: Math.ceil(A * F), start: Math.ceil(A * _), center: Math.ceil(A * (0.5 + _)), end: Math.ceil(A * (1 + _)), view: fe };
  }
  function W(Y, _) {
    const D = a.virtualScrollHorizontal === true ? "width" : "height", F = { ["--q-virtual-scroll-item-" + D]: l.value + "px" };
    return [Y === "tbody" ? d(Y, { class: "q-virtual-scroll__padding", key: "before", ref: T }, [d("tr", [d("td", { style: { [D]: `${g.value}px`, ...F }, colspan: C.value })])]) : d(Y, { class: "q-virtual-scroll__padding", key: "before", ref: T, style: { [D]: `${g.value}px`, ...F } }), d(Y, { class: "q-virtual-scroll__content", key: "content", ref: y, tabindex: -1 }, _.flat()), Y === "tbody" ? d(Y, { class: "q-virtual-scroll__padding", key: "after", ref: p }, [d("tr", [d("td", { style: { [D]: `${w.value}px`, ...F }, colspan: C.value })])]) : d(Y, { class: "q-virtual-scroll__padding", key: "after", ref: p, style: { [D]: `${w.value}px`, ...F } })];
  }
  function X(Y) {
    s !== Y && (a.onVirtualScroll !== void 0 && o("virtualScroll", { index: Y, from: b.value.from, to: b.value.to - 1, direction: Y < s ? "decrease" : "increase", ref: i }), s = Y);
  }
  U();
  const ae = Ar(N, u.platform.is.ios === true ? 120 : 35);
  ei(() => {
    U();
  });
  let pe = false;
  return Vn(() => {
    pe = true;
  }), Sl(() => {
    if (pe !== true) return;
    const Y = t();
    c !== void 0 && Y !== void 0 && Y !== null && Y.nodeType !== 8 ? Nd(Y, c, a.virtualScrollHorizontal, u.lang.rtl) : B(s);
  }), __QUASAR_SSR__ || Ke(() => {
    ae.cancel();
  }), Object.assign(i, { scrollTo: B, reset: H, refresh: L }), { virtualScrollSliceRange: b, virtualScrollSliceSizeComputed: x, setVirtualScrollSize: U, onVirtualScrollEvt: ae, localResetVirtualScroll: j, padVirtualScroll: W, scrollTo: B, reset: H, refresh: L };
}
var Hd = (e) => ["add", "add-unique", "toggle"].includes(e), G1 = ".*+?^${}()|[]\\", Z1 = Object.keys(gi);
function iu(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (l) => l !== null && typeof l == "object" && n in l ? l[n] : l;
}
var J1 = he({ name: "QSelect", inheritAttrs: false, props: { ...Yu, ...xn, ...gi, modelValue: { required: true }, multiple: Boolean, displayValue: [String, Number], displayValueHtml: Boolean, dropdownIcon: String, options: { type: Array, default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], hideSelected: Boolean, hideDropdownIcon: Boolean, fillInput: Boolean, maxValues: [Number, String], optionsDense: Boolean, optionsDark: { type: Boolean, default: null }, optionsSelectedClass: String, optionsHtml: Boolean, optionsCover: Boolean, menuShrink: Boolean, menuAnchor: String, menuSelf: String, menuOffset: Array, popupContentClass: String, popupContentStyle: [String, Array, Object], popupNoRouteDismiss: Boolean, useInput: Boolean, useChips: Boolean, newValueMode: { type: String, validator: Hd }, mapOptions: Boolean, emitValue: Boolean, disableTabSelection: Boolean, inputDebounce: { type: [Number, String], default: 500 }, inputClass: [Array, String, Object], inputStyle: [Array, String, Object], tabindex: { type: [String, Number], default: 0 }, autocomplete: String, transitionShow: {}, transitionHide: {}, transitionDuration: {}, behavior: { type: String, validator: (e) => ["default", "menu", "dialog"].includes(e), default: "default" }, virtualScrollItemSize: Yu.virtualScrollItemSize.type, onNewValue: Function, onFilter: Function }, emits: [...bi, "add", "remove", "inputValue", "keyup", "keypress", "keydown", "popupShow", "popupHide", "filterAbort"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), { $q: r } = l, a = K(false), o = K(false), i = K(-1), u = K(""), c = K(false), s = K(false);
  let f = null, h = null, m, g, w, x = null, T, p, y, b;
  const C = K(null), $ = K(null), O = K(null), H = K(null), L = K(null), B = $s(e), N = Lh(de), q = v(() => Array.isArray(e.options) ? e.options.length : 0), E = v(() => e.virtualScrollItemSize === void 0 ? e.optionsDense === true ? 24 : 48 : e.virtualScrollItemSize), { virtualScrollSliceRange: k, virtualScrollSliceSizeComputed: j, localResetVirtualScroll: U, padVirtualScroll: W, onVirtualScrollEvt: X, scrollTo: ae, setVirtualScrollSize: pe } = jh({ virtualScrollLength: q, getVirtualScrollTarget: Ut, getVirtualScrollEl: Ct, virtualScrollItemSizeComputed: E }), Y = yi(), _ = v(() => {
    const J = e.mapOptions === true && e.multiple !== true, Ae = e.modelValue !== void 0 && (e.modelValue !== null || J === true) ? e.multiple === true && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
    if (e.mapOptions === true && Array.isArray(e.options) === true) {
      const Pe = e.mapOptions === true && m !== void 0 ? m : [], tt = Ae.map((gt) => oe(gt, Pe));
      return e.modelValue === null && J === true ? tt.filter((gt) => gt !== null) : tt;
    }
    return Ae;
  }), D = v(() => {
    const J = {};
    return Z1.forEach((Ae) => {
      const Pe = e[Ae];
      Pe !== void 0 && (J[Ae] = Pe);
    }), J;
  }), F = v(() => e.optionsDark === null ? Y.isDark.value : e.optionsDark), fe = v(() => Wl(_.value)), A = v(() => {
    let J = "q-field__input q-placeholder col";
    return e.hideSelected === true || _.value.length === 0 ? [J, e.inputClass] : (J += " q-field__input--padding", e.inputClass === void 0 ? J : [J, e.inputClass]);
  }), R = v(() => (e.virtualScrollHorizontal === true ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")), G = v(() => q.value === 0), V = v(() => _.value.map((J) => re.value(J)).join(", ")), ne = v(() => e.displayValue !== void 0 ? e.displayValue : V.value), be = v(() => e.optionsHtml === true ? () => true : (J) => (J == null ? void 0 : J.html) === true), S = v(() => e.displayValueHtml === true || e.displayValue === void 0 && (e.optionsHtml === true || _.value.some(be.value))), M = v(() => Y.focused.value === true ? e.tabindex : -1), I = v(() => {
    const J = { tabindex: e.tabindex, role: "combobox", "aria-label": e.label, "aria-readonly": e.readonly === true ? "true" : "false", "aria-autocomplete": e.useInput === true ? "list" : "none", "aria-expanded": a.value === true ? "true" : "false", "aria-controls": `${Y.targetUid.value}_lb` };
    return i.value >= 0 && (J["aria-activedescendant"] = `${Y.targetUid.value}_${i.value}`), J;
  }), ee = v(() => ({ id: `${Y.targetUid.value}_lb`, role: "listbox", "aria-multiselectable": e.multiple === true ? "true" : "false" })), le = v(() => _.value.map((J, Ae) => ({ index: Ae, opt: J, html: be.value(J), selected: true, removeAtIndex: Me, toggleOption: Ve, tabindex: M.value }))), P = v(() => {
    if (q.value === 0) return [];
    const { from: J, to: Ae } = k.value;
    return e.options.slice(J, Ae).map((Pe, tt) => {
      const gt = Q.value(Pe) === true, vt = _e2(Pe) === true, Nt = J + tt, Pt = { clickable: true, active: vt, activeClass: me.value, manualFocus: true, focused: false, disable: gt, tabindex: -1, dense: e.optionsDense, dark: F.value, role: "option", "aria-selected": vt === true ? "true" : "false", id: `${Y.targetUid.value}_${Nt}`, onClick: () => {
        Ve(Pe);
      } };
      return gt !== true && (i.value === Nt && (Pt.focused = true), r.platform.is.desktop === true && (Pt.onMousemove = () => {
        a.value === true && ue(Nt);
      })), { index: Nt, opt: Pe, html: be.value(Pe), label: re.value(Pe), selected: Pt.active, focused: Pt.focused, toggleOption: Ve, setOptionIndex: ue, itemProps: Pt };
    });
  }), te = v(() => e.dropdownIcon !== void 0 ? e.dropdownIcon : r.iconSet.arrow.dropdown), se = v(() => e.optionsCover === false && e.outlined !== true && e.standout !== true && e.borderless !== true && e.rounded !== true), me = v(() => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : ""), ce = v(() => iu(e.optionValue, "value")), re = v(() => iu(e.optionLabel, "label")), Q = v(() => iu(e.optionDisable, "disable")), ie = v(() => _.value.map(ce.value)), we = v(() => {
    const J = { onInput: de, onChange: N, onKeydown: it, onKeyup: Re, onKeypress: Ye, onFocus: Ce, onClick(Ae) {
      g === true && wt(Ae);
    } };
    return J.onCompositionstart = J.onCompositionupdate = J.onCompositionend = N, J;
  });
  ge(_, (J) => {
    m = J, e.useInput === true && e.fillInput === true && e.multiple !== true && Y.innerLoading.value !== true && (o.value !== true && a.value !== true || fe.value !== true) && (w !== true && dn(), (o.value === true || a.value === true) && Be(""));
  }, { immediate: true }), ge(() => e.fillInput, dn), ge(a, wi), ge(q, Og);
  function ke(J) {
    return e.emitValue === true ? ce.value(J) : J;
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
      e.fillInput === true && Fe(re.value(J), true, true), n("update:modelValue", Pe);
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
    if (Y.editable.value !== true || J === void 0 || Q.value(J) === true) return;
    const Pe = ce.value(J);
    if (e.multiple !== true) {
      Ae !== true && (Fe(e.fillInput === true ? re.value(J) : "", true, true), rt()), (_a3 = $.value) == null ? void 0 : _a3.focus(), (_.value.length === 0 || Tn(ce.value(_.value[0]), Pe) !== true) && n("update:modelValue", e.emitValue === true ? Pe : J);
      return;
    }
    if ((g !== true || c.value === true) && Y.focus(), Ce(), _.value.length === 0) {
      const vt = e.emitValue === true ? Pe : J;
      n("add", { index: 0, value: vt }), n("update:modelValue", e.multiple === true ? [vt] : vt);
      return;
    }
    const tt = e.modelValue.slice(), gt = ie.value.findIndex((vt) => Tn(vt, Pe));
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
        Pe = Eo(Pe + J, -1, q.value - 1);
      while (Pe !== -1 && Pe !== i.value && Q.value(e.options[Pe]) === true);
      i.value !== Pe && (ue(Pe), ae(Pe), Ae !== true && e.useInput === true && e.fillInput === true && Se(Pe >= 0 ? re.value(e.options[Pe]) : T, true));
    }
  }
  function oe(J, Ae) {
    const Pe = (tt) => Tn(ce.value(tt), J);
    return e.options.find(Pe) || Ae.find(Pe) || J;
  }
  function _e2(J) {
    const Ae = ce.value(J);
    return ie.value.find((Pe) => Tn(Pe, Ae)) !== void 0;
  }
  function Ce(J) {
    e.useInput === true && $.value !== null && (J === void 0 || $.value === J.target && J.target.value === V.value) && $.value.select();
  }
  function Oe(J) {
    pn(J, 27) === true && a.value === true && (wt(J), rt(), dn()), n("keyup", J);
  }
  function Re(J) {
    const { value: Ae } = J.target;
    if (J.keyCode !== void 0) {
      Oe(J);
      return;
    }
    if (J.target.value = "", f !== null && (clearTimeout(f), f = null), h !== null && (clearTimeout(h), h = null), dn(), typeof Ae == "string" && Ae.length !== 0) {
      const Pe = Ae.toLocaleLowerCase(), tt = (vt) => {
        const Nt = e.options.find((Pt) => String(vt.value(Pt)).toLocaleLowerCase() === Pe);
        return Nt === void 0 ? false : (_.value.indexOf(Nt) === -1 ? Ve(Nt) : rt(), true);
      }, gt = (vt) => {
        tt(ce) !== true && vt !== true && tt(re) !== true && Be(Ae, true, () => gt(true));
      };
      gt();
    } else Y.clearValue(J);
  }
  function Ye(J) {
    n("keypress", J);
  }
  function it(J) {
    if (n("keydown", J), Xl(J) === true) return;
    const Ae = u.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0), Pe = J.shiftKey !== true && e.disableTabSelection !== true && e.multiple !== true && (i.value !== -1 || Ae === true);
    if (J.keyCode === 27) {
      Dt(J);
      return;
    }
    if (J.keyCode === 9 && Pe === false) {
      Le();
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
      const Nt = new RegExp("^" + y.split("").map((xi) => G1.indexOf(xi) !== -1 ? "\\" + xi : xi).join(".*"), "i");
      let Pt = i.value;
      if (vt === true || Pt < 0 || Nt.test(re.value(e.options[Pt])) !== true) do
        Pt = Eo(Pt + 1, -1, tt - 1);
      while (Pt !== i.value && (Q.value(e.options[Pt]) === true || Nt.test(re.value(e.options[Pt])) !== true));
      i.value !== Pt && We(() => {
        ue(Pt), ae(Pt), Pt >= 0 && e.useInput === true && e.fillInput === true && Se(re.value(e.options[Pt]), true);
      });
      return;
    }
    if (!(J.keyCode !== 13 && (J.keyCode !== 32 || e.useInput === true || y !== "") && (J.keyCode !== 9 || Pe === false))) {
      if (J.keyCode !== 9 && je(J), i.value !== -1 && i.value < tt) {
        Ve(e.options[i.value]);
        return;
      }
      if (Ae === true) {
        const gt = (vt, Nt) => {
          var _a3;
          if (Nt) {
            if (Hd(Nt) !== true) return;
          } else Nt = e.newValueMode;
          if (Fe("", e.multiple !== true, true), vt == null) return;
          (Nt === "toggle" ? Ve : He)(vt, Nt === "add-unique"), e.multiple !== true && ((_a3 = $.value) == null ? void 0 : _a3.focus(), rt());
        };
        if (e.onNewValue !== void 0 ? n("newValue", u.value, gt) : gt(u.value), e.multiple !== true) return;
      }
      a.value === true ? Le() : Y.innerLoading.value !== true && ze();
    }
  }
  function Ct() {
    return g === true ? L.value : O.value !== null && O.value.contentEl !== null ? O.value.contentEl : void 0;
  }
  function Ut() {
    return Ct();
  }
  function nl() {
    return e.hideSelected === true ? [] : t["selected-item"] !== void 0 ? le.value.map((J) => t["selected-item"](J)).slice() : t.selected !== void 0 ? [].concat(t.selected()) : e.useChips === true ? le.value.map((J, Ae) => d(Ym, { key: "option-" + Ae, removable: Y.editable.value === true && Q.value(J.opt) !== true, dense: true, textColor: e.color, tabindex: M.value, onRemove() {
      J.removeAtIndex(Ae);
    } }, () => d("span", { class: "ellipsis", [J.html === true ? "innerHTML" : "textContent"]: re.value(J.opt) }))) : [d("span", { class: "ellipsis", [S.value === true ? "innerHTML" : "textContent"]: ne.value })];
  }
  function rn() {
    if (G.value === true) return t["no-option"] !== void 0 ? t["no-option"]({ inputValue: u.value }) : void 0;
    const J = t.option !== void 0 ? t.option : (Pe) => d(Tr, { key: Pe.index, ...Pe.itemProps }, () => d(hn, () => d(Qu, () => d("span", { [Pe.html === true ? "innerHTML" : "textContent"]: Pe.label }))));
    let Ae = W("div", P.value.map(J));
    return t["before-options"] !== void 0 && (Ae = t["before-options"]().concat(Ae)), Tt(t["after-options"], Ae);
  }
  function In(J, Ae) {
    const Pe = Ae === true ? { ...I.value, ...Y.splitAttrs.attributes.value } : void 0, tt = { ref: Ae === true ? $ : void 0, key: "i_t", class: A.value, style: e.inputStyle, value: u.value !== void 0 ? u.value : "", type: "search", ...Pe, id: Ae === true ? Y.targetUid.value : void 0, maxlength: e.maxlength, autocomplete: e.autocomplete, "data-autofocus": J === true || e.autofocus === true || void 0, disabled: e.disable === true, readonly: e.readonly === true, ...we.value };
    return J !== true && g === true && (Array.isArray(tt.class) === true ? tt.class = [...tt.class, "no-pointer-events"] : tt.class += " no-pointer-events"), d("input", tt);
  }
  function de(J) {
    f !== null && (clearTimeout(f), f = null), h !== null && (clearTimeout(h), h = null), !(J && J.target && J.target.qComposing === true) && (Se(J.target.value || ""), w = true, T = u.value, Y.focused.value !== true && (g !== true || c.value === true) && Y.focus(), e.onFilter !== void 0 && (f = setTimeout(() => {
      f = null, Be(u.value);
    }, e.inputDebounce)));
  }
  function Se(J, Ae) {
    u.value !== J && (u.value = J, Ae === true || e.inputDebounce === 0 || e.inputDebounce === "0" ? n("inputValue", J) : h = setTimeout(() => {
      h = null, n("inputValue", J);
    }, e.inputDebounce));
  }
  function Fe(J, Ae, Pe) {
    w = Pe !== true, e.useInput === true && (Se(J, true), (Ae === true || Pe !== true) && (T = J), Ae !== true && Be(J));
  }
  function Be(J, Ae, Pe) {
    if (e.onFilter === void 0 || Ae !== true && Y.focused.value !== true) return;
    Y.innerLoading.value === true ? n("filterAbort") : (Y.innerLoading.value = true, s.value = true), J !== "" && e.multiple !== true && _.value.length !== 0 && w !== true && J === re.value(_.value[0]) && (J = "");
    const tt = setTimeout(() => {
      a.value === true && (a.value = false);
    }, 10);
    x !== null && clearTimeout(x), x = tt, n("filter", J, (gt, vt) => {
      (Ae === true || Y.focused.value === true) && x === tt && (clearTimeout(x), typeof gt == "function" && gt(), s.value = false, We(() => {
        Y.innerLoading.value = false, Y.editable.value === true && (Ae === true ? a.value === true && rt() : a.value === true ? wi(true) : a.value = true), typeof vt == "function" && We(() => {
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
    return d(vi, { ref: O, class: R.value, style: e.popupContentStyle, modelValue: a.value, fit: e.menuShrink !== true, cover: e.optionsCover === true && G.value !== true && e.useInput !== true, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, dark: F.value, noParentEvent: true, noRefocus: true, noFocus: true, noRouteDismiss: e.popupNoRouteDismiss, square: se.value, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, separateClosePopup: true, ...ee.value, onScrollPassive: X, onBeforeShow: tc, onBeforeHide: yt, onShow: ht }, rn);
  }
  function yt(J) {
    nc(J), Le();
  }
  function ht() {
    pe();
  }
  function z(J) {
    var _a3;
    wt(J), (_a3 = $.value) == null ? void 0 : _a3.focus(), c.value = true, window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
  }
  function Z(J) {
    wt(J), We(() => {
      c.value = false;
    });
  }
  function ve() {
    const J = [d(w1, { class: `col-auto ${Y.fieldClass.value}`, ...D.value, for: Y.targetUid.value, dark: F.value, square: true, loading: s.value, itemAligned: false, filled: true, stackLabel: u.value.length !== 0, ...Y.splitAttrs.listeners.value, onFocus: z, onBlur: Z }, { ...t, rawControl: () => Y.getControl(true), before: void 0, after: void 0 })];
    return a.value === true && J.push(d("div", { ref: L, class: R.value + " scroll", style: e.popupContentStyle, ...ee.value, onClick: Dt, onScrollPassive: X }, rn())), d(hi, { ref: H, modelValue: o.value, position: e.useInput === true ? "top" : void 0, transitionShow: p, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, noRouteDismiss: e.popupNoRouteDismiss, onBeforeShow: tc, onBeforeHide: qe, onHide: Ee, onShow: Ge }, () => d("div", { class: "q-select__dialog" + (F.value === true ? " q-select__dialog--dark q-dark" : "") + (c.value === true ? " q-select__dialog--focused" : "") }, J));
  }
  function qe(J) {
    nc(J), H.value !== null && H.value.__updateRefocusTarget(Y.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")), Y.focused.value = false;
  }
  function Ee(J) {
    rt(), Y.focused.value === false && n("blur", J), dn();
  }
  function Ge() {
    const J = document.activeElement;
    (J === null || J.id !== Y.targetUid.value) && $.value !== null && $.value !== J && $.value.focus(), pe();
  }
  function Le() {
    o.value !== true && (i.value = -1, a.value === true && (a.value = false), Y.focused.value === false && (x !== null && (clearTimeout(x), x = null), Y.innerLoading.value === true && (n("filterAbort"), Y.innerLoading.value = false, s.value = false)));
  }
  function ze(J) {
    Y.editable.value === true && (g === true ? (Y.onControlFocusin(J), o.value = true, We(() => {
      Y.focus();
    })) : Y.focus(), e.onFilter !== void 0 ? Be(u.value) : (G.value !== true || t["no-option"] !== void 0) && (a.value = true));
  }
  function rt() {
    o.value = false, Le();
  }
  function dn() {
    e.useInput === true && Fe(e.multiple !== true && e.fillInput === true && _.value.length !== 0 && re.value(_.value[0]) || "", true, true);
  }
  function wi(J) {
    let Ae = -1;
    if (J === true) {
      if (_.value.length !== 0) {
        const Pe = ce.value(_.value[0]);
        Ae = e.options.findIndex((tt) => Tn(ce.value(tt), Pe));
      }
      U(Ae);
    }
    ue(Ae);
  }
  function Og(J, Ae) {
    a.value === true && Y.innerLoading.value === false && (U(-1, true), We(() => {
      a.value === true && Y.innerLoading.value === false && (J > Ae ? U() : wi(true));
    }));
  }
  function ec() {
    o.value === false && O.value !== null && O.value.updatePosition();
  }
  function tc(J) {
    J !== void 0 && wt(J), n("popupShow", J), Y.hasPopupOpen = true, Y.onControlFocusin(J);
  }
  function nc(J) {
    J !== void 0 && wt(J), n("popupHide", J), Y.hasPopupOpen = false, Y.onControlFocusout(J);
  }
  function lc() {
    g = r.platform.is.mobile !== true && e.behavior !== "dialog" ? false : e.behavior !== "menu" && (e.useInput === true ? t["no-option"] !== void 0 || e.onFilter !== void 0 || G.value === false : true), p = r.platform.is.ios === true && g === true && e.useInput === true ? "fade" : e.transitionShow;
  }
  return Rr(lc), ti(ec), lc(), Ke(() => {
    f !== null && clearTimeout(f), h !== null && clearTimeout(h);
  }), Object.assign(l, { showPopup: ze, hidePopup: rt, removeAtIndex: Te, add: He, toggleOption: Ve, getOptionIndex: () => i.value, setOptionIndex: ue, moveOptionSelection: ye, filter: Be, updateMenuPosition: ec, updateInputValue: Fe, isOptionSelected: _e2, getEmittingOptionValue: ke, isOptionDisabled: (...J) => Q.value.apply(null, J) === true, getOptionValue: (...J) => ce.value.apply(null, J), getOptionLabel: (...J) => re.value.apply(null, J) }), Object.assign(Y, { innerValue: _, fieldClass: v(() => `q-select q-field--auto-height q-select--with${e.useInput !== true ? "out" : ""}-input q-select--with${e.useChips !== true ? "out" : ""}-chips q-select--${e.multiple === true ? "multiple" : "single"}`), inputRef: C, targetRef: $, hasValue: fe, showPopup: ze, floatingLabel: v(() => e.hideSelected !== true && fe.value === true || typeof u.value == "number" || u.value.length !== 0 || Wl(e.displayValue)), getControlChild: () => {
    if (Y.editable.value !== false && (o.value === true || G.value !== true || t["no-option"] !== void 0)) return g === true ? ve() : Ue();
    Y.hasPopupOpen === true && (Y.hasPopupOpen = false);
  }, controlEvents: { onFocusin(J) {
    Y.onControlFocusin(J);
  }, onFocusout(J) {
    Y.onControlFocusout(J, () => {
      dn(), Le();
    });
  }, onClick(J) {
    var _a3;
    if (Dt(J), g !== true && a.value === true) {
      Le(), (_a3 = $.value) == null ? void 0 : _a3.focus();
      return;
    }
    ze(J);
  } }, getControl: (J) => {
    const Ae = nl(), Pe = J === true || o.value !== true || g !== true;
    if (e.useInput === true) Ae.push(In(J, Pe));
    else if (Y.editable.value === true) {
      const gt = Pe === true ? I.value : void 0;
      Ae.push(d("input", { ref: Pe === true ? $ : void 0, key: "d_t", class: "q-select__focus-target", id: Pe === true ? Y.targetUid.value : void 0, value: ne.value, readonly: true, "data-autofocus": J === true || e.autofocus === true || void 0, ...gt, onKeydown: it, onKeyup: Oe, onKeypress: Ye })), Pe === true && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && Ae.push(d("input", { class: "q-select__autocomplete-input", autocomplete: e.autocomplete, tabindex: -1, onKeyup: Re }));
    }
    if (B.value !== void 0 && e.disable !== true && ie.value.length !== 0) {
      const gt = ie.value.map((vt) => d("option", { value: vt, selected: true }));
      Ae.push(d("select", { class: "hidden", name: B.value, multiple: e.multiple }, gt));
    }
    const tt = e.useInput === true || Pe !== true ? void 0 : Y.splitAttrs.attributes.value;
    return d("div", { class: "q-field__native row items-center", ...tt, ...Y.splitAttrs.listeners.value }, Ae);
  }, getInnerAppend: () => e.loading !== true && s.value !== true && e.hideDropdownIcon !== true ? [d(et, { class: "q-select__dropdown-icon" + (a.value === true ? " rotate-180" : ""), name: te.value })] : null }), pi(Y);
} }), e_ = ["text", "rect", "circle", "QBtn", "QBadge", "QChip", "QToolbar", "QCheckbox", "QRadio", "QToggle", "QSlider", "QRange", "QInput", "QAvatar"], t_ = ["wave", "pulse", "pulse-x", "pulse-y", "fade", "blink", "none"];
he({ name: "QSkeleton", props: { ...nt, tag: { type: String, default: "div" }, type: { type: String, validator: (e) => e_.includes(e), default: "rect" }, animation: { type: String, validator: (e) => t_.includes(e), default: "wave" }, animationSpeed: { type: [String, Number], default: 1500 }, square: Boolean, bordered: Boolean, size: String, width: String, height: String }, setup(e, { slots: t }) {
  const n = xe(), l = lt(e, n.proxy.$q), r = v(() => {
    const o = e.size !== void 0 ? [e.size, e.size] : [e.width, e.height];
    return { "--q-skeleton-speed": `${e.animationSpeed}ms`, width: o[0], height: o[1] };
  }), a = v(() => `q-skeleton q-skeleton--${l.value === true ? "dark" : "light"} q-skeleton--type-${e.type}` + (e.animation !== "none" ? ` q-skeleton--anim q-skeleton--anim-${e.animation}` : "") + (e.square === true ? " q-skeleton--square" : "") + (e.bordered === true ? " q-skeleton--bordered" : ""));
  return () => d(e.tag, { class: a.value, style: r.value }, $e(t.default));
} });
var jd = [["left", "center", "start", "width"], ["right", "center", "end", "width"], ["top", "start", "center", "height"], ["bottom", "end", "center", "height"]];
he({ name: "QSlideItem", props: { ...nt, leftColor: String, rightColor: String, topColor: String, bottomColor: String, onSlide: Function }, emits: ["action", "top", "right", "bottom", "left"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), { $q: r } = l, a = lt(e, r), { getCache: o } = Fa(), i = K(null);
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
    if (T.isFirst) c = { dir: null, size: { left: 0, right: 0, top: 0, bottom: 0 }, scale: 0 }, p.classList.add("no-transition"), jd.forEach(($) => {
      if (t[$[0]] !== void 0) {
        const O = f[$[0]];
        O.style.transform = "scale(1)", c.size[$[0]] = O.getBoundingClientRect()[$[3]];
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
  return Rr(() => {
    s = {}, f = {};
  }), Ke(() => {
    u !== null && clearTimeout(u);
  }), Object.assign(l, { reset: g }), () => {
    const T = [], p = { left: t[h.value.right] !== void 0, right: t[h.value.left] !== void 0, up: t.bottom !== void 0, down: t.top !== void 0 }, y = Object.keys(p).filter((C) => p[C] === true);
    jd.forEach((C) => {
      const $ = C[0];
      t[$] !== void 0 && T.push(d("div", { key: $, ref: (O) => {
        s[$] = O;
      }, class: `q-slide-item__${$} absolute-full row no-wrap items-${C[1]} justify-${C[2]}` + (e[$ + "Color"] !== void 0 ? ` bg-${e[$ + "Color"]}` : "") }, [d("div", { ref: (O) => {
        f[$] = O;
      } }, t[$]())]));
    });
    const b = d("div", { key: `${y.length === 0 ? "only-" : ""} content`, ref: i, class: "q-slide-item__content" }, $e(t.default));
    return y.length === 0 ? T.push(b) : T.push(cn(b, o("dir#" + y.join(""), () => {
      const C = { prevent: true, stop: true, mouse: true };
      return y.forEach(($) => {
        C[$] = true;
      }), [[bn, x, void 0, C]];
    }))), d("div", { class: m.value }, T);
  };
} });
he({ name: "QSpace", setup() {
  const e = d("div", { class: "q-space" });
  return () => e;
} });
var n_ = '<g transform="matrix(1 0 0 -1 0 80)"><rect width="10" height="20" rx="3"><animate attributeName="height" begin="0s" dur="4.3s" values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="15" width="10" height="80" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" width="10" height="50" rx="3"><animate attributeName="height" begin="0s" dur="1.4s" values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="45" width="10" height="30" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear" repeatCount="indefinite"></animate></rect></g>';
he({ name: "QSpinnerAudio", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 55 80", xmlns: "http://www.w3.org/2000/svg", innerHTML: n_ });
} });
var l_ = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"></animate></circle></g>';
he({ name: "QSpinnerBall", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 57 57", xmlns: "http://www.w3.org/2000/svg", innerHTML: l_ });
} });
var r_ = '<rect y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="60" width="15" height="140" rx="6"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="90" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="120" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect>';
he({ name: "QSpinnerBars", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 135 140", xmlns: "http://www.w3.org/2000/svg", innerHTML: r_ });
} });
var a_ = '<rect x="25" y="25" width="50" height="50" fill="none" stroke-width="4" stroke="currentColor"><animateTransform id="spinnerBox" attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" dur="0.5s" begin="rectBox.end"></animateTransform></rect><rect x="27" y="27" width="46" height="50" fill="currentColor"><animate id="rectBox" attributeName="height" begin="0s;spinnerBox.end" dur="1.3s" from="50" to="0" fill="freeze"></animate></rect>';
he({ name: "QSpinnerBox", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: a_ });
} });
var o_ = '<circle cx="50" cy="50" r="48" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="currentColor"></circle><line stroke-linecap="round" stroke-width="4" stroke-miterlimit="10" stroke="currentColor" x1="50" y1="50" x2="85" y2="50.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2s" repeatCount="indefinite"></animateTransform></line><line stroke-linecap="round" stroke-width="4" stroke-miterlimit="10" stroke="currentColor" x1="50" y1="50" x2="49.5" y2="74"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="15s" repeatCount="indefinite"></animateTransform></line>';
he({ name: "QSpinnerClock", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: o_ });
} });
var i_ = '<rect x="0" y="0" width="100" height="100" fill="none"></rect><path d="M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z" fill="currentColor"></path><circle cx="30" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;1;1" keyTimes="0;0.2;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="50" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.2;0.4;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="70" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.4;0.6;1" dur="1s" repeatCount="indefinite"></animate></circle>';
he({ name: "QSpinnerComment", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: i_ });
} });
var u_ = '<rect x="0" y="0" width="100" height="100" fill="none"></rect><g transform="translate(25 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.1s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(25 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.7"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.3s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.2s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g>';
he({ name: "QSpinnerCube", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: u_ });
} });
var s_ = '<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from=".5" to=".5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';
he({ name: "QSpinnerDots", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg", innerHTML: s_ });
} });
var c_ = '<g transform="translate(20 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(50 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.1s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(80 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.2s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g>';
he({ name: "QSpinnerFacebook", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid", innerHTML: c_ });
} });
var d_ = '<g transform="translate(-20,-20)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="90 50 50" to="0 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g><g transform="translate(20,20) rotate(15 50 50)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="90 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g>';
he({ name: "QSpinnerGears", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: d_ });
} });
var f_ = '<circle cx="12.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="0s" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5"><animate attributeName="fill-opacity" begin="100ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="300ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="600ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="800ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="400ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="700ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="500ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="200ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';
he({ name: "QSpinnerGrid", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 105 105", xmlns: "http://www.w3.org/2000/svg", innerHTML: f_ });
} });
var v_ = '<path d="M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.716-6.002 11.47-7.65 17.304-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.593-2.32 17.308 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0.7s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"></path>';
he({ name: "QSpinnerHearts", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 140 64", xmlns: "http://www.w3.org/2000/svg", innerHTML: v_ });
} });
var m_ = '<g><path fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10" d="M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"></path><clipPath id="uil-hourglass-clip1"><rect x="15" y="20" width="70" height="25"><animate attributeName="height" from="25" to="0" dur="1s" repeatCount="indefinite" values="25;0;0" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="20" to="45" dur="1s" repeatCount="indefinite" values="20;45;45" keyTimes="0;0.5;1"></animate></rect></clipPath><clipPath id="uil-hourglass-clip2"><rect x="15" y="55" width="70" height="25"><animate attributeName="height" from="0" to="25" dur="1s" repeatCount="indefinite" values="0;25;25" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="80" to="55" dur="1s" repeatCount="indefinite" values="80;55;55" keyTimes="0;0.5;1"></animate></rect></clipPath><path d="M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z" clip-path="url(#uil-hourglass-clip1)" fill="currentColor"></path><path d="M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z" clip-path="url(#uil-hourglass-clip2)" fill="currentColor"></path><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" repeatCount="indefinite" dur="1s" values="0 50 50;0 50 50;180 50 50" keyTimes="0;0.7;1"></animateTransform></g>';
he({ name: "QSpinnerHourglass", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: m_ });
} });
var h_ = '<path d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z" fill="none" stroke="currentColor" stroke-width="8" stroke-dasharray="10.691205342610678 10.691205342610678" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" from="0" to="21.382410685221355" begin="0" dur="2s" repeatCount="indefinite" fill="freeze"></animate></path>';
he({ name: "QSpinnerInfinity", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: h_ });
} });
var g_ = '<g stroke-width="4" stroke-linecap="round"><line y1="17" y2="29" transform="translate(32,32) rotate(180)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(210)"><animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(240)"><animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(270)"><animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(300)"><animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(330)"><animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(0)"><animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(30)"><animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(60)"><animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(90)"><animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(120)"><animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(150)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line></g>';
he({ name: "QSpinnerIos", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, stroke: "currentColor", fill: "currentColor", viewBox: "0 0 64 64", innerHTML: g_ });
} });
var b_ = '<circle cx="50" cy="50" r="44" fill="none" stroke-width="4" stroke-opacity=".5" stroke="currentColor"></circle><circle cx="8" cy="54" r="6" fill="currentColor" stroke-width="3" stroke="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 48" to="360 50 52" dur="2s" repeatCount="indefinite"></animateTransform></circle>';
he({ name: "QSpinnerOrbit", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: b_ });
} });
var y_ = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g>';
he({ name: "QSpinnerOval", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", innerHTML: y_ });
} });
var p_ = '<path d="M0 50A50 50 0 0 1 50 0L50 50L0 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="0.8s" repeatCount="indefinite"></animateTransform></path><path d="M50 0A50 50 0 0 1 100 50L50 50L50 0" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1.6s" repeatCount="indefinite"></animateTransform></path><path d="M100 50A50 50 0 0 1 50 100L50 50L100 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2.4s" repeatCount="indefinite"></animateTransform></path><path d="M50 100A50 50 0 0 1 0 50L50 50L50 100" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="3.2s" repeatCount="indefinite"></animateTransform></path>';
he({ name: "QSpinnerPie", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: p_ });
} });
var __ = '<g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g>';
he({ name: "QSpinnerPuff", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 44 44", xmlns: "http://www.w3.org/2000/svg", innerHTML: __ });
} });
var w_ = '<g transform="scale(0.55)"><circle cx="30" cy="150" r="30" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></circle><path d="M90,150h30c0-49.7-40.3-90-90-90v30C63.1,90,90,116.9,90,150z" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.1" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></path><path d="M150,150h30C180,67.2,112.8,0,30,0v30C96.3,30,150,83.7,150,150z" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.2" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></path></g>';
he({ name: "QSpinnerRadio", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: w_ });
} });
var x_ = '<g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2"><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="8"><animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"></animate></circle></g>';
he({ name: "QSpinnerRings", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 45 45", xmlns: "http://www.w3.org/2000/svg", innerHTML: x_ });
} });
var S_ = '<defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-color="currentColor" stop-opacity="0" offset="0%"></stop><stop stop-color="currentColor" stop-opacity=".631" offset="63.146%"></stop><stop stop-color="currentColor" offset="100%"></stop></linearGradient></defs><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></path><circle fill="currentColor" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></circle></g>';
he({ name: "QSpinnerTail", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", innerHTML: S_ });
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
      const O = a.value.getBoundingClientRect()[u.value];
      m = e.horizontal === true ? "up" : "left", g = e.unit === "%" ? 100 : O, w = Math.min(g, s.value[1], Math.max(s.value[0], e.modelValue)), x = (e.reverse !== true ? 1 : -1) * (e.horizontal === true ? 1 : l.lang.rtl === true ? -1 : 1) * (e.unit === "%" ? O === 0 ? 0 : 100 / O : 1), a.value.classList.add("q-splitter--active");
      return;
    }
    if (C.isFinal === true) {
      T !== e.modelValue && n("update:modelValue", T), a.value.classList.remove("q-splitter--active");
      return;
    }
    const $ = w + x * (C.direction === m ? -1 : 1) * C.distance[e.horizontal === true ? "y" : "x"];
    T = Math.min(g, s.value[1], Math.max(s.value[0], $)), o[c.value].value.style[u.value] = f(T), e.emitImmediately === true && e.modelValue !== T && n("update:modelValue", T);
  }
  const y = v(() => [[bn, p, void 0, { [e.horizontal === true ? "vertical" : "horizontal"]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
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
    const C = [d("div", { ref: o.before, class: ["q-splitter__panel q-splitter__before" + (e.reverse === true ? " col" : ""), e.beforeClass], style: h.value.before }, $e(t.before)), d("div", { class: ["q-splitter__separator", e.separatorClass], style: e.separatorStyle, "aria-disabled": e.disable === true ? "true" : void 0 }, [_n("div", { class: "q-splitter__separator-area absolute-full" }, $e(t.separator), "sep", e.disable !== true, () => y.value)]), d("div", { ref: o.after, class: ["q-splitter__panel q-splitter__after" + (e.reverse === true ? "" : " col"), e.afterClass], style: h.value.after }, $e(t.after))];
    return d("div", { class: i.value, ref: a }, Tt(t.default, C));
  };
} });
var Uh = he({ name: "StepHeader", props: { stepper: {}, step: {}, goToPanel: Function }, setup(e, { attrs: t }) {
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
    return cn(d("div", x, T), [[ci, m.value]]);
  };
} });
function Qh(e) {
  return d("div", { class: "q-stepper__step-content" }, [d("div", { class: "q-stepper__step-inner" }, $e(e.default))]);
}
var Ud = { setup(e, { slots: t }) {
  return () => Qh(t);
} };
he({ name: "QStep", props: { ...Bs, icon: String, color: String, title: { type: String, required: true }, caption: String, prefix: [String, Number], doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String, headerNav: { type: Boolean, default: true }, done: Boolean, error: Boolean, onScroll: [Function, Array] }, setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = xe(), r = qt(dm, ot);
  if (r === ot) return console.error("QStep needs to be a child of QStepper"), ot;
  const { getCache: a } = Fa(), o = K(null), i = v(() => r.value.modelValue === e.name), u = v(() => l.platform.is.ios !== true && l.platform.is.chrome === true || i.value !== true || r.value.vertical !== true ? {} : { onScroll(f) {
    const { target: h } = f;
    h.scrollTop > 0 && (h.scrollTop = 0), e.onScroll !== void 0 && n("scroll", f);
  } }), c = v(() => typeof e.name == "string" || typeof e.name == "number" ? e.name : String(e.name));
  function s() {
    const f = r.value.vertical;
    return f === true && r.value.keepAlive === true ? d(_v, r.value.keepAliveProps.value, i.value === true ? [d(r.value.needsUniqueKeepAliveWrapper.value === true ? a(c.value, () => ({ ...Ud, name: c.value })) : Ud, { key: c.value }, t.default)] : void 0) : f !== true || i.value === true ? Qh(t) : void 0;
  }
  return () => d("div", { ref: o, class: "q-stepper__step", role: "tabpanel", ...u.value }, r.value.vertical === true ? [d(Uh, { stepper: r.value, step: e, goToPanel: r.value.goToPanel }), r.value.animated === true ? d(Qs, s) : s()] : [s()]);
} });
var C_ = /(-\w)/g;
function k_(e) {
  const t = {};
  for (const n in e) {
    const l = n.replace(C_, (r) => r[1].toUpperCase());
    t[l] = e[n];
  }
  return t;
}
he({ name: "QStepper", props: { ...nt, ...Fs, flat: Boolean, bordered: Boolean, alternativeLabels: Boolean, headerNav: Boolean, contracted: Boolean, headerClass: String, inactiveColor: String, inactiveIcon: String, doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String }, emits: Os, setup(e, { slots: t }) {
  const n = xe(), l = lt(e, n.proxy.$q), { updatePanelsList: r, isValidPanelName: a, updatePanelIndex: o, getPanelContent: i, getPanels: u, panelDirectives: c, goToPanel: s, keepAliveProps: f, needsUniqueKeepAliveWrapper: h } = Vs();
  gn(dm, v(() => ({ goToPanel: s, keepAliveProps: f, needsUniqueKeepAliveWrapper: h, ...e })));
  const m = v(() => `q-stepper q-stepper--${e.vertical === true ? "vertical" : "horizontal"}` + (e.flat === true ? " q-stepper--flat" : "") + (e.bordered === true ? " q-stepper--bordered" : "") + (l.value === true ? " q-stepper--dark q-dark" : "")), g = v(() => `q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels === true ? "alternative" : "standard"}-labels` + (e.flat === false || e.bordered === true ? " q-stepper__header--border" : "") + (e.contracted === true ? " q-stepper__header--contracted" : "") + (e.headerClass !== void 0 ? ` ${e.headerClass}` : ""));
  function w() {
    const x = $e(t.message, []);
    if (e.vertical === true) {
      a(e.modelValue) && o();
      const T = d("div", { class: "q-stepper__content" }, $e(t.default));
      return x === void 0 ? [T] : x.concat(T);
    }
    return [d("div", { class: g.value }, u().map((T) => {
      const p = k_(T.props);
      return d(Uh, { key: p.name, stepper: e, step: p, goToPanel: s });
    })), x, _n("div", { class: "q-stepper__content q-panel-parent" }, i(), "cont", e.swipeable, () => c.value)];
  }
  return () => (r(t), d("div", { class: m.value }, Tt(t.navigation, w())));
} });
he({ name: "QStepperNavigation", setup(e, { slots: t }) {
  return () => d("div", { class: "q-stepper__nav" }, $e(t.default));
} });
var T_ = he({ name: "QTh", props: { props: Object, autoWidth: Boolean }, emits: ["click"], setup(e, { slots: t, emit: n }) {
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
      i = Pa(t.default, []), i[s](d(et, { class: o.__iconClass, name: r.iconSet.table.arrowUp }));
    } else i = $e(t.default);
    const c = { class: o.__thClass + (e.autoWidth === true ? " q-table--col-auto-width" : ""), style: o.headerStyle, onClick: (s) => {
      o.sortable === true && e.props.sort(o), a(s);
    } };
    return d("th", c, i);
  };
} });
function Kh(e, t) {
  return d("div", e, [d("table", { class: "q-table" }, t)]);
}
var q_ = { list: Oh, table: V1 }, M_ = ["list", "table", "__qtable"], E_ = he({ name: "QVirtualScroll", props: { ...Yu, type: { type: String, default: "list", validator: (e) => M_.includes(e) }, items: { type: Array, default: () => [] }, itemsFn: Function, itemsSize: Number, scrollTarget: Zl }, setup(e, { slots: t, attrs: n }) {
  let l;
  const r = K(null), a = v(() => e.itemsSize >= 0 && e.itemsFn !== void 0 ? parseInt(e.itemsSize, 10) : Array.isArray(e.items) ? e.items.length : 0), { virtualScrollSliceRange: o, localResetVirtualScroll: i, padVirtualScroll: u, onVirtualScrollEvt: c } = jh({ virtualScrollLength: a, getVirtualScrollTarget: g, getVirtualScrollEl: m }), s = v(() => {
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
  return ei(() => {
    i();
  }), ft(() => {
    w();
  }), Sl(() => {
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
    return e.type === "__qtable" ? Kh({ ref: r, class: "q-table__middle " + f.value }, T()) : d(q_[e.type], { ...n, ref: r, class: [n.class, f.value], ...h.value }, T);
  };
} });
function R_(e, t) {
  return new Date(e) - new Date(t);
}
var A_ = { sortMethod: Function, binaryStateSort: Boolean, columnSortOrder: { type: String, validator: (e) => e === "ad" || e === "da", default: "ad" } };
function P_(e, t, n, l) {
  const r = v(() => {
    const { sortBy: i } = t.value;
    return i && n.value.find((u) => u.name === i) || null;
  }), a = v(() => e.sortMethod !== void 0 ? e.sortMethod : (i, u, c) => {
    const s = n.value.find((m) => m.name === u);
    if (s === void 0 || s.field === void 0) return i;
    const f = c === true ? -1 : 1, h = typeof s.field == "function" ? (m) => s.field(m) : (m) => m[s.field];
    return i.sort((m, g) => {
      let w = h(m), x = h(g);
      return s.rawSort !== void 0 ? s.rawSort(w, x, m, g) * f : w == null ? -1 * f : x == null ? 1 * f : s.sort !== void 0 ? s.sort(w, x, m, g) * f : xa(w) === true && xa(x) === true ? (w - x) * f : Lu(w) === true && Lu(x) === true ? R_(w, x) * f : typeof w == "boolean" && typeof x == "boolean" ? (w - x) * f : ([w, x] = [w, x].map((T) => (T + "").toLocaleString().toLowerCase()), w < x ? -1 * f : w === x ? 0 : f);
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
var $_ = { filter: [String, Object], filterMethod: Function };
function L_(e, t) {
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
function Qd(e) {
  return e.page < 1 && (e.page = 1), e.rowsPerPage !== void 0 && e.rowsPerPage < 1 && (e.rowsPerPage = 0), e;
}
var F_ = { pagination: Object, rowsPerPageOptions: { type: Array, default: () => [5, 7, 10, 15, 20, 25, 50, 0] }, "onUpdate:pagination": [Function, Array] };
function O_(e, t) {
  const { props: n, emit: l } = e, r = K(Object.assign({ sortBy: null, descending: false, page: 1, rowsPerPage: n.rowsPerPageOptions.length !== 0 ? n.rowsPerPageOptions[0] : 5 }, n.pagination)), a = v(() => {
    const s = n["onUpdate:pagination"] !== void 0 ? { ...r.value, ...n.pagination } : r.value;
    return Qd(s);
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
    const h = Qd({ ...a.value, ...s });
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
function V_(e, t, n, l, r, a) {
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
var D_ = { selection: { type: String, default: "none", validator: (e) => ["single", "multiple", "none"].includes(e) }, selected: { type: Array, default: () => [] } }, I_ = ["update:selected", "selection"];
function z_(e, t, n, l) {
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
function Kd(e) {
  return Array.isArray(e) ? e.slice() : [];
}
var N_ = { expanded: Array }, H_ = ["update:expanded"];
function j_(e, t) {
  const n = K(Kd(e.expanded));
  ge(() => e.expanded, (o) => {
    n.value = Kd(o);
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
var U_ = { visibleColumns: Array };
function Q_(e, t, n) {
  const l = v(() => {
    if (e.columns !== void 0) return e.columns;
    const i = e.rows[0];
    return i !== void 0 ? Object.keys(i).map((u) => ({ name: u, label: u.toUpperCase(), field: u, align: xa(i[u]) ? "right" : "left", sortable: true })) : [];
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
var eo = "q-table__bottom row items-center", Wh = {};
Hh.forEach((e) => {
  Wh[e] = {};
});
he({ name: "QTable", props: { rows: { type: Array, required: true }, rowKey: { type: [String, Function], default: "id" }, columns: Array, loading: Boolean, iconFirstPage: String, iconPrevPage: String, iconNextPage: String, iconLastPage: String, title: String, hideHeader: Boolean, grid: Boolean, gridHeader: Boolean, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, separator: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical", "cell", "none"].includes(e) }, wrapCells: Boolean, virtualScroll: Boolean, virtualScrollTarget: {}, ...Wh, noDataLabel: String, noResultsLabel: String, loadingLabel: String, selectedRowsLabel: Function, rowsPerPageLabel: String, paginationLabel: Function, color: { type: String, default: "grey-8" }, titleClass: [String, Array, Object], tableStyle: [String, Array, Object], tableClass: [String, Array, Object], tableHeaderStyle: [String, Array, Object], tableHeaderClass: [String, Array, Object], tableRowStyleFn: Function, tableRowClassFn: Function, cardContainerClass: [String, Array, Object], cardContainerStyle: [String, Array, Object], cardStyle: [String, Array, Object], cardClass: [String, Array, Object], cardStyleFn: Function, cardClassFn: Function, hideBottom: Boolean, hideSelectedBanner: Boolean, hideNoData: Boolean, hidePagination: Boolean, onRowClick: Function, onRowDblclick: Function, onRowContextmenu: Function, ...nt, ...Ds, ...U_, ...$_, ...F_, ...N_, ...D_, ...A_ }, emits: ["request", "virtualScroll", ...Is, ...H_, ...I_], setup(e, { slots: t, emit: n }) {
  const l = xe(), { proxy: { $q: r } } = l, a = lt(e, r), { inFullscreen: o, toggleFullscreen: i } = zs(), u = v(() => typeof e.rowKey == "function" ? e.rowKey : (de) => de[e.rowKey]), c = K(null), s = K(null), f = v(() => e.grid !== true && e.virtualScroll === true), h = v(() => " q-table__card" + (a.value === true ? " q-table__card--dark q-dark" : "") + (e.square === true ? " q-table--square" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "")), m = v(() => `q-table__container q-table--${e.separator}-separator column no-wrap` + (e.grid === true ? " q-table--grid" : h.value) + (a.value === true ? " q-table--dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.wrapCells === false ? " q-table--no-wrap" : "") + (o.value === true ? " fullscreen scroll" : "")), g = v(() => m.value + (e.loading === true ? " q-table--loading" : ""));
  ge(() => e.tableStyle + e.tableClass + e.tableHeaderStyle + e.tableHeaderClass + m.value, () => {
    var _a3;
    f.value === true && ((_a3 = s.value) == null ? void 0 : _a3.reset());
  });
  const { innerPagination: w, computedPagination: x, isServerSide: T, requestServerInteraction: p, setPagination: y } = O_(l, ue), { computedFilterMethod: b } = L_(e, y), { isRowExpanded: C, setExpanded: $, updateExpanded: O } = j_(e, n), H = v(() => {
    let de = e.rows;
    if (T.value === true || de.length === 0) return de;
    const { sortBy: Se, descending: Fe } = x.value;
    return e.filter && (de = b.value(de, e.filter, Y.value, ue)), F.value !== null && (de = fe.value(e.rows === de ? de.slice() : de, Se, Fe)), de;
  }), L = v(() => H.value.length), B = v(() => {
    let de = H.value;
    if (T.value === true) return de;
    const { rowsPerPage: Se } = x.value;
    return Se !== 0 && (R.value === 0 && e.rows !== de ? de.length > G.value && (de = de.slice(0, G.value)) : de = de.slice(R.value, G.value)), de;
  }), { hasSelectionMode: N, singleSelection: q, multipleSelection: E, allRowsSelected: k, someRowsSelected: j, rowsSelectedNumber: U, isRowSelected: W, clearSelection: X, updateSelection: ae } = z_(e, n, B, u), { colList: pe, computedCols: Y, computedColsMap: _, computedColspan: D } = Q_(e, x, N), { columnToSort: F, computedSortMethod: fe, sort: A } = P_(e, x, pe, y), { firstRowIndex: R, lastRowIndex: G, isFirstPage: V, isLastPage: ne, pagesNumber: be, computedRowsPerPageOptions: S, computedRowsNumber: M, firstPage: I, prevPage: ee, nextPage: le, lastPage: P } = V_(l, w, x, T, y, L), te = v(() => B.value.length === 0), se = v(() => {
    const de = {};
    return Hh.forEach((Se) => {
      de[Se] = e[Se];
    }), de.virtualScrollItemSize === void 0 && (de.virtualScrollItemSize = e.dense === true ? 28 : 48), de;
  });
  function me() {
    f.value === true && s.value.reset();
  }
  function ce() {
    if (e.grid === true) return In();
    const de = e.hideHeader !== true ? Ce : null;
    if (f.value === true) {
      const Fe = t["top-row"], Be = t["bottom-row"], Ue = { default: (yt) => we(yt.item, t.body, yt.index) };
      if (Fe !== void 0) {
        const yt = d("tbody", Fe({ cols: Y.value }));
        Ue.before = de === null ? () => yt : () => [de()].concat(yt);
      } else de !== null && (Ue.before = de);
      return Be !== void 0 && (Ue.after = () => d("tbody", Be({ cols: Y.value }))), d(E_, { ref: s, class: e.tableClass, style: e.tableStyle, ...se.value, scrollTarget: e.virtualScrollTarget, items: B.value, type: "__qtable", tableColspan: D.value, onVirtualScroll: Q }, Ue);
    }
    const Se = [ke()];
    return de !== null && Se.unshift(de()), Kh({ class: ["q-table__middle scroll", e.tableClass], style: e.tableStyle }, Se);
  }
  function re(de, Se) {
    if (s.value !== null) {
      s.value.scrollTo(de, Se);
      return;
    }
    de = parseInt(de, 10);
    const Fe = c.value.querySelector(`tbody tr:nth-of-type(${de + 1})`);
    if (Fe !== null) {
      const Be = c.value.querySelector(".q-table__middle.scroll"), Ue = Fe.offsetTop - e.virtualScrollStickySizeStart, yt = Ue < Be.scrollTop ? "decrease" : "increase";
      Be.scrollTop = Ue, n("virtualScroll", { index: de, from: 0, to: w.value.rowsPerPage - 1, direction: yt });
    }
  }
  function Q(de) {
    n("virtualScroll", de);
  }
  function ie() {
    return [d(Q1, { class: "q-table__linear-progress", color: e.color, dark: a.value, indeterminate: true, trackColor: "transparent" })];
  }
  function we(de, Se, Fe) {
    const Be = u.value(de), Ue = W(Be);
    if (Se !== void 0) {
      const Z = { key: Be, row: de, pageIndex: Fe, __trClass: Ue ? "selected" : "" };
      if (e.tableRowStyleFn !== void 0 && (Z.__trStyle = e.tableRowStyleFn(de)), e.tableRowClassFn !== void 0) {
        const ve = e.tableRowClassFn(de);
        ve && (Z.__trClass = `${ve} ${Z.__trClass}`);
      }
      return Se(Te(Z));
    }
    const yt = t["body-cell"], ht = Y.value.map((Z) => {
      const ve = t[`body-cell-${Z.name}`], qe = ve !== void 0 ? ve : yt;
      return qe !== void 0 ? qe(Me({ key: Be, row: de, pageIndex: Fe, col: Z })) : d("td", { class: Z.__tdClass(de), style: Z.__tdStyle(de) }, ue(Z, de));
    });
    if (N.value === true) {
      const Z = t["body-selection"], ve = Z !== void 0 ? Z(He({ key: Be, row: de, pageIndex: Fe })) : [d(sa, { modelValue: Ue, color: e.color, dark: a.value, dense: e.dense, "onUpdate:modelValue": (qe, Ee) => {
        ae([Be], [de], qe, Ee);
      } })];
      ht.unshift(d("td", { class: "q-table--col-auto-width" }, ve));
    }
    const z = { key: Be, class: { selected: Ue } };
    if (e.onRowClick !== void 0 && (z.class["cursor-pointer"] = true, z.onClick = (Z) => {
      n("rowClick", Z, de, Fe);
    }), e.onRowDblclick !== void 0 && (z.class["cursor-pointer"] = true, z.onDblclick = (Z) => {
      n("rowDblclick", Z, de, Fe);
    }), e.onRowContextmenu !== void 0 && (z.class["cursor-pointer"] = true, z.onContextmenu = (Z) => {
      n("rowContextmenu", Z, de, Fe);
    }), e.tableRowStyleFn !== void 0 && (z.style = e.tableRowStyleFn(de)), e.tableRowClassFn !== void 0) {
      const Z = e.tableRowClassFn(de);
      Z && (z.class[Z] = true);
    }
    return d("tr", z, ht);
  }
  function ke() {
    const de = t.body, Se = t["top-row"], Fe = t["bottom-row"];
    let Be = B.value.map((Ue, yt) => we(Ue, de, yt));
    return Se !== void 0 && (Be = Se({ cols: Y.value }).concat(Be)), Fe !== void 0 && (Be = Be.concat(Fe({ cols: Y.value }))), d("tbody", Be);
  }
  function Te(de) {
    return Ve(de), de.cols = de.cols.map((Se) => Vt({ ...Se }, "value", () => ue(Se, de.row))), de;
  }
  function Me(de) {
    return Ve(de), Vt(de, "value", () => ue(de.col, de.row)), de;
  }
  function He(de) {
    return Ve(de), de;
  }
  function Ve(de) {
    Object.assign(de, { cols: Y.value, colsMap: _.value, sort: A, rowIndex: R.value + de.pageIndex, color: e.color, dark: a.value, dense: e.dense }), N.value === true && Vt(de, "selected", () => W(de.key), (Se, Fe) => {
      ae([de.key], [de.row], Se, Fe);
    }), Vt(de, "expand", () => C(de.key), (Se) => {
      O(de.key, Se);
    });
  }
  function ue(de, Se) {
    const Fe = typeof de.field == "function" ? de.field(Se) : Se[de.field];
    return de.format !== void 0 ? de.format(Fe, Se) : Fe;
  }
  const ye = v(() => ({ pagination: x.value, pagesNumber: be.value, isFirstPage: V.value, isLastPage: ne.value, firstPage: I, prevPage: ee, nextPage: le, lastPage: P, inFullscreen: o.value, toggleFullscreen: i }));
  function oe() {
    const de = t.top, Se = t["top-left"], Fe = t["top-right"], Be = t["top-selection"], Ue = N.value === true && Be !== void 0 && U.value > 0, yt = "q-table__top relative-position row items-center";
    if (de !== void 0) return d("div", { class: yt }, [de(ye.value)]);
    let ht;
    if (Ue === true ? ht = Be(ye.value).slice() : (ht = [], Se !== void 0 ? ht.push(d("div", { class: "q-table__control" }, [Se(ye.value)])) : e.title && ht.push(d("div", { class: "q-table__control" }, [d("div", { class: ["q-table__title", e.titleClass] }, e.title)]))), Fe !== void 0 && (ht.push(d("div", { class: "q-table__separator col" })), ht.push(d("div", { class: "q-table__control" }, [Fe(ye.value)]))), ht.length !== 0) return d("div", { class: yt }, ht);
  }
  const _e2 = v(() => j.value === true ? null : k.value);
  function Ce() {
    const de = Oe();
    return e.loading === true && t.loading === void 0 && de.push(d("tr", { class: "q-table__progress" }, [d("th", { class: "relative-position", colspan: D.value }, ie())])), d("thead", de);
  }
  function Oe() {
    const de = t.header, Se = t["header-cell"];
    if (de !== void 0) return de(Re({ header: true })).slice();
    const Fe = Y.value.map((Be) => {
      const Ue = t[`header-cell-${Be.name}`], yt = Ue !== void 0 ? Ue : Se, ht = Re({ col: Be });
      return yt !== void 0 ? yt(ht) : d(T_, { key: Be.name, props: ht }, () => Be.label);
    });
    if (q.value === true && e.grid !== true) Fe.unshift(d("th", { class: "q-table--col-auto-width" }, " "));
    else if (E.value === true) {
      const Be = t["header-selection"], Ue = Be !== void 0 ? Be(Re({})) : [d(sa, { color: e.color, modelValue: _e2.value, dark: a.value, dense: e.dense, "onUpdate:modelValue": Ye })];
      Fe.unshift(d("th", { class: "q-table--col-auto-width" }, Ue));
    }
    return [d("tr", { class: e.tableHeaderClass, style: e.tableHeaderStyle }, Fe)];
  }
  function Re(de) {
    return Object.assign(de, { cols: Y.value, sort: A, colsMap: _.value, color: e.color, dark: a.value, dense: e.dense }), E.value === true && Vt(de, "selected", () => _e2.value, Ye), de;
  }
  function Ye(de) {
    j.value === true && (de = false), ae(B.value.map(u.value), B.value, de);
  }
  const it = v(() => {
    const de = [e.iconFirstPage || r.iconSet.table.firstPage, e.iconPrevPage || r.iconSet.table.prevPage, e.iconNextPage || r.iconSet.table.nextPage, e.iconLastPage || r.iconSet.table.lastPage];
    return r.lang.rtl === true ? de.reverse() : de;
  });
  function Ct() {
    if (e.hideBottom === true) return;
    if (te.value === true) {
      if (e.hideNoData === true) return;
      const Fe = e.loading === true ? e.loadingLabel || r.lang.table.loading : e.filter ? e.noResultsLabel || r.lang.table.noResults : e.noDataLabel || r.lang.table.noData, Be = t["no-data"], Ue = Be !== void 0 ? [Be({ message: Fe, icon: r.iconSet.table.warning, filter: e.filter })] : [d(et, { class: "q-table__bottom-nodata-icon", name: r.iconSet.table.warning }), Fe];
      return d("div", { class: eo + " q-table__bottom--nodata" }, Ue);
    }
    const de = t.bottom;
    if (de !== void 0) return d("div", { class: eo }, [de(ye.value)]);
    const Se = e.hideSelectedBanner !== true && N.value === true && U.value > 0 ? [d("div", { class: "q-table__control" }, [d("div", [(e.selectedRowsLabel || r.lang.table.selectedRecords)(U.value)])])] : [];
    if (e.hidePagination !== true) return d("div", { class: eo + " justify-end" }, nl(Se));
    if (Se.length !== 0) return d("div", { class: eo }, Se);
  }
  function Ut(de) {
    y({ page: 1, rowsPerPage: de.value });
  }
  function nl(de) {
    let Se;
    const { rowsPerPage: Fe } = x.value, Be = e.paginationLabel || r.lang.table.pagination, Ue = t.pagination, yt = e.rowsPerPageOptions.length > 1;
    if (de.push(d("div", { class: "q-table__separator col" })), yt === true && de.push(d("div", { class: "q-table__control" }, [d("span", { class: "q-table__bottom-item" }, [e.rowsPerPageLabel || r.lang.table.recordsPerPage]), d(J1, { class: "q-table__select inline q-table__bottom-item", color: e.color, modelValue: Fe, options: S.value, displayValue: Fe === 0 ? r.lang.table.allRows : Fe, dark: a.value, borderless: true, dense: true, optionsDense: true, optionsCover: true, "onUpdate:modelValue": Ut })])), Ue !== void 0) Se = Ue(ye.value);
    else if (Se = [d("span", Fe !== 0 ? { class: "q-table__bottom-item" } : {}, [Fe ? Be(R.value + 1, Math.min(G.value, M.value), M.value) : Be(1, L.value, M.value)])], Fe !== 0 && be.value > 1) {
      const ht = { color: e.color, round: true, dense: true, flat: true };
      e.dense === true && (ht.size = "sm"), be.value > 2 && Se.push(d(Ze, { key: "pgFirst", ...ht, icon: it.value[0], disable: V.value, ariaLabel: r.lang.pagination.first, onClick: I })), Se.push(d(Ze, { key: "pgPrev", ...ht, icon: it.value[1], disable: V.value, ariaLabel: r.lang.pagination.prev, onClick: ee }), d(Ze, { key: "pgNext", ...ht, icon: it.value[2], disable: ne.value, ariaLabel: r.lang.pagination.next, onClick: le })), be.value > 2 && Se.push(d(Ze, { key: "pgLast", ...ht, icon: it.value[3], disable: ne.value, ariaLabel: r.lang.pagination.last, onClick: P }));
    }
    return de.push(d("div", { class: "q-table__control" }, Se)), de;
  }
  function rn() {
    const de = e.gridHeader === true ? [d("table", { class: "q-table" }, [Ce()])] : e.loading === true && t.loading === void 0 ? ie() : void 0;
    return d("div", { class: "q-table__middle" }, de);
  }
  function In() {
    const de = t.item !== void 0 ? t.item : (Se) => {
      const Fe = Se.cols.map((Ue) => d("div", { class: "q-table__grid-item-row" }, [d("div", { class: "q-table__grid-item-title" }, [Ue.label]), d("div", { class: "q-table__grid-item-value" }, [Ue.value])]));
      if (N.value === true) {
        const Ue = t["body-selection"], yt = Ue !== void 0 ? Ue(Se) : [d(sa, { modelValue: Se.selected, color: e.color, dark: a.value, dense: e.dense, "onUpdate:modelValue": (ht, z) => {
          ae([Se.key], [Se.row], ht, z);
        } })];
        Fe.unshift(d("div", { class: "q-table__grid-item-row" }, yt), d(Kl, { dark: a.value }));
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
    return d("div", { class: ["q-table__grid-content row", e.cardContainerClass], style: e.cardContainerStyle }, B.value.map((Se, Fe) => de(Te({ key: u.value(Se), row: Se, pageIndex: Fe }))));
  }
  return Object.assign(l.proxy, { requestServerInteraction: p, setPagination: y, firstPage: I, prevPage: ee, nextPage: le, lastPage: P, isRowSelected: W, clearSelection: X, isRowExpanded: C, setExpanded: $, sort: A, resetVirtualScroll: me, scrollTo: re, getCellValue: ue }), tm(l.proxy, { filteredSortedRows: () => H.value, computedRows: () => B.value, computedRowsNumber: () => M.value }), () => {
    const de = [oe()], Se = { ref: c, class: g.value };
    return e.grid === true ? de.push(rn()) : Object.assign(Se, { class: [Se.class, e.cardClass], style: e.cardStyle }), de.push(ce(), Ct()), e.loading === true && t.loading !== void 0 && de.push(t.loading()), d("div", Se, de);
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
he({ name: "QRouteTab", props: { ...$a, ...ah }, emits: rh, setup(e, { slots: t, emit: n }) {
  const l = si({ useDisableForRouterLinkProps: false }), { renderTab: r, $tabs: a } = oh(e, t, n, { exact: v(() => e.exact), ...l });
  return ge(() => `${e.name} | ${e.exact} | ${(l.resolvedLink.value || {}).href}`, a.verifyRouteModel), () => r(l.linkTag.value, l.linkAttrs.value);
} });
function K_(e, t) {
  return e.hour !== null && e.minute === null ? "minute" : "hour";
}
function W_() {
  const e = /* @__PURE__ */ new Date();
  return { hour: e.getHours(), minute: e.getMinutes(), second: e.getSeconds(), millisecond: e.getMilliseconds() };
}
he({ name: "QTime", props: { ...nt, ...xn, ...zo, modelValue: { required: true, validator: (e) => typeof e == "string" || e === null }, mask: { ...zo.mask, default: null }, format24h: { type: Boolean, default: null }, defaultDate: { type: String, validator: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e) }, options: Function, hourOptions: Array, minuteOptions: Array, secondOptions: Array, withSeconds: Boolean, nowBtn: Boolean }, emits: dh, setup(e, { slots: t, emit: n }) {
  const l = xe(), { $q: r } = l.proxy, a = lt(e, r), { tabindex: o, headerClass: i, getLocale: u, getCurrentDate: c } = fh(e, r), s = Ba(e), f = kl(s);
  let h, m;
  const g = K(null), w = v(() => fe()), x = v(() => u()), T = v(() => A()), p = Yr(e.modelValue, w.value, x.value, e.calendar, T.value), y = K(K_(p)), b = K(p), C = K(p.hour === null || p.hour < 12), $ = v(() => `q-time q-time--${e.landscape === true ? "landscape" : "portrait"}` + (a.value === true ? " q-time--dark q-dark" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-time--readonly" : "") + (e.bordered === true ? " q-time--bordered" : "") + (e.square === true ? " q-time--square no-border-radius" : "") + (e.flat === true ? " q-time--flat no-shadow" : "")), O = v(() => {
    const ue = b.value;
    return { hour: ue.hour === null ? "--" : H.value === true ? at(ue.hour) : String(C.value === true ? ue.hour === 0 ? 12 : ue.hour : ue.hour > 12 ? ue.hour - 12 : ue.hour), minute: ue.minute === null ? "--" : at(ue.minute), second: ue.second === null ? "--" : at(ue.second) };
  }), H = v(() => e.format24h !== null ? e.format24h : r.lang.date.format24h), L = v(() => {
    const ue = y.value === "hour", ye = ue === true ? 12 : 60, oe = b.value[y.value];
    let Ce = `rotate(${Math.round(oe * (360 / ye)) - 180}deg) translateX(-50%)`;
    return ue === true && H.value === true && b.value.hour >= 12 && (Ce += " scale(.7)"), { transform: Ce };
  }), B = v(() => b.value.hour !== null), N = v(() => B.value === true && b.value.minute !== null), q = v(() => e.hourOptions !== void 0 ? (ue) => e.hourOptions.includes(ue) : e.options !== void 0 ? (ue) => e.options(ue, null, null) : null), E = v(() => e.minuteOptions !== void 0 ? (ue) => e.minuteOptions.includes(ue) : e.options !== void 0 ? (ue) => e.options(b.value.hour, ue, null) : null), k = v(() => e.secondOptions !== void 0 ? (ue) => e.secondOptions.includes(ue) : e.options !== void 0 ? (ue) => e.options(b.value.hour, b.value.minute, ue) : null), j = v(() => {
    if (q.value === null) return null;
    const ue = _(0, 11, q.value), ye = _(12, 11, q.value);
    return { am: ue, pm: ye, values: ue.values.concat(ye.values) };
  }), U = v(() => E.value !== null ? _(0, 59, E.value) : null), W = v(() => k.value !== null ? _(0, 59, k.value) : null), X = v(() => {
    switch (y.value) {
      case "hour":
        return j.value;
      case "minute":
        return U.value;
      case "second":
        return W.value;
    }
  }), ae = v(() => {
    let ue, ye, oe = 0, _e2 = 1;
    const Ce = X.value !== null ? X.value.values : void 0;
    y.value === "hour" ? H.value === true ? (ue = 0, ye = 23) : (ue = 0, ye = 11, C.value === false && (oe = 12)) : (ue = 0, ye = 55, _e2 = 5);
    const Oe = [];
    for (let Re = ue, Ye = ue; Re <= ye; Re += _e2, Ye++) {
      const it = Re + oe, Ct = (Ce == null ? void 0 : Ce.includes(it)) === false, Ut = y.value === "hour" && Re === 0 ? H.value === true ? "00" : "12" : Re;
      Oe.push({ val: it, index: Ye, disable: Ct, label: Ut });
    }
    return Oe;
  }), pe = v(() => [[bn, V, void 0, { stop: true, prevent: true, mouse: true }]]);
  ge(() => e.modelValue, (ue) => {
    const ye = Yr(ue, w.value, x.value, e.calendar, T.value);
    (ye.dateHash !== b.value.dateHash || ye.timeHash !== b.value.timeHash) && (b.value = ye, ye.hour === null ? y.value = "hour" : C.value = ye.hour < 12);
  }), ge([w, x], () => {
    We(() => {
      Me();
    });
  });
  function Y() {
    const ue = { ...c(), ...W_() };
    Me(ue), Object.assign(b.value, ue), y.value = "hour";
  }
  function _(ue, ye, oe) {
    const _e2 = Array.apply(null, { length: ye + 1 }).map((Ce, Oe) => {
      const Re = Oe + ue;
      return { index: Re, val: oe(Re) === true };
    }).filter((Ce) => Ce.val === true).map((Ce) => Ce.index);
    return { min: _e2[0], max: _e2[_e2.length - 1], values: _e2, threshold: ye + 1 };
  }
  function D(ue, ye, oe) {
    const _e2 = Math.abs(ue - ye);
    return Math.min(_e2, oe - _e2);
  }
  function F(ue, { min: ye, max: oe, values: _e2, threshold: Ce }) {
    if (ue === ye) return ye;
    if (ue < ye || ue > oe) return D(ue, ye, Ce) <= D(ue, oe, Ce) ? ye : oe;
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
    return Yr(e.defaultDate, "YYYY/MM/DD", void 0, e.calendar);
  }
  function R() {
    return bl(l) === true || X.value !== null && (X.value.values.length === 0 || y.value === "hour" && H.value !== true && j.value[C.value === true ? "am" : "pm"].values.length === 0);
  }
  function G() {
    const ue = g.value, { top: ye, left: oe, width: _e2 } = ue.getBoundingClientRect(), Ce = _e2 / 2;
    return { top: ye + Ce, left: oe + Ce, dist: Ce * 0.7 };
  }
  function V(ue) {
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
    const _e2 = tn(ue), Ce = Math.abs(_e2.top - ye.top), Oe = Math.sqrt(Math.pow(Math.abs(_e2.top - ye.top), 2) + Math.pow(Math.abs(_e2.left - ye.left), 2));
    let Re, Ye = Math.asin(Ce / Oe) * (180 / Math.PI);
    if (_e2.top < ye.top ? Ye = ye.left < _e2.left ? 90 - Ye : 270 + Ye : Ye = ye.left < _e2.left ? Ye + 90 : 270 - Ye, y.value === "hour") {
      if (Re = Ye / 30, j.value !== null) {
        const it = H.value !== true ? C.value === true : j.value.am.values.length !== 0 && j.value.pm.values.length !== 0 ? Oe >= ye.dist : j.value.am.values.length !== 0;
        Re = F(Re + (it === true ? 0 : 12), j.value[it === true ? "am" : "pm"]);
      } else Re = Math.round(Re), H.value === true ? Oe < ye.dist ? Re < 12 && (Re += 12) : Re === 12 && (Re = 0) : C.value === true && Re === 12 ? Re = 0 : C.value === false && Re !== 12 && (Re += 12);
      H.value === true && (C.value = Re < 12);
    } else Re = Math.round(Ye / 6) % 60, y.value === "minute" && U.value !== null ? Re = F(Re, U.value) : y.value === "second" && W.value !== null && (Re = F(Re, W.value));
    return oe !== Re && Q[y.value](Re), Re;
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
  function I(ue) {
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
        const oe = H.value === true ? j.value.values : j.value[C.value === true ? "am" : "pm"].values;
        if (oe.length === 0) return;
        if (b.value.hour === null) me(oe[0]);
        else {
          const _e2 = (oe.length + oe.indexOf(b.value.hour) + ye) % oe.length;
          me(oe[_e2]);
        }
      } else {
        const oe = H.value === true ? 24 : 12, _e2 = H.value !== true && C.value === false ? 12 : 0, Ce = b.value.hour === null ? -ye : b.value.hour;
        me(_e2 + (24 + Ce + ye) % oe);
      }
    }
  }
  function te(ue) {
    if (ue.keyCode === 13) y.value = "minute";
    else if ([37, 39].includes(ue.keyCode)) {
      const ye = ue.keyCode === 37 ? -1 : 1;
      if (U.value !== null) {
        const oe = U.value.values;
        if (oe.length === 0) return;
        if (b.value.minute === null) ce(oe[0]);
        else {
          const _e2 = (oe.length + oe.indexOf(b.value.minute) + ye) % oe.length;
          ce(oe[_e2]);
        }
      } else {
        const oe = b.value.minute === null ? -ye : b.value.minute;
        ce((60 + oe + ye) % 60);
      }
    }
  }
  function se(ue) {
    if (ue.keyCode === 13) y.value = "second";
    else if ([37, 39].includes(ue.keyCode)) {
      const ye = ue.keyCode === 37 ? -1 : 1;
      if (W.value !== null) {
        const oe = W.value.values;
        if (oe.length === 0) return;
        if (b.value.seconds === null) re(oe[0]);
        else {
          const _e2 = (oe.length + oe.indexOf(b.value.second) + ye) % oe.length;
          re(oe[_e2]);
        }
      } else {
        const oe = b.value.second === null ? -ye : b.value.second;
        re((60 + oe + ye) % 60);
      }
    }
  }
  function me(ue) {
    b.value.hour !== ue && (b.value.hour = ue, Te());
  }
  function ce(ue) {
    b.value.minute !== ue && (b.value.minute = ue, Te());
  }
  function re(ue) {
    b.value.second !== ue && (b.value.second = ue, Te());
  }
  const Q = { hour: me, minute: ce, second: re };
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
      b.value = Yr(), ke("hour");
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
    const ye = Object.assign({ ...b.value }, ue), oe = e.calendar === "persian" ? at(ye.hour) + ":" + at(ye.minute) + (e.withSeconds === true ? ":" + at(ye.second) : "") : bh(new Date(ye.year, ye.month === null ? null : ye.month - 1, ye.day, ye.hour, ye.minute, ye.second, ye.millisecond), w.value, x.value, ye.year, ye.timezoneOffset);
    ye.changed = oe !== e.modelValue, n("update:modelValue", oe, ye);
  }
  function He() {
    const ue = [d("div", { class: "q-time__link " + (y.value === "hour" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: S.hour, onKeyup: P }, O.value.hour), d("div", ":"), d("div", B.value === true ? { class: "q-time__link " + (y.value === "minute" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onKeyup: te, onClick: S.minute } : { class: "q-time__link" }, O.value.minute)];
    e.withSeconds === true && ue.push(d("div", ":"), d("div", N.value === true ? { class: "q-time__link " + (y.value === "second" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onKeyup: se, onClick: S.second } : { class: "q-time__link" }, O.value.second));
    const ye = [d("div", { class: "q-time__header-label row items-center no-wrap", dir: "ltr" }, ue)];
    return H.value === false && ye.push(d("div", { class: "q-time__header-ampm column items-between no-wrap" }, [d("div", { class: "q-time__link " + (C.value === true ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: ie, onKeyup: M }, "AM"), d("div", { class: "q-time__link " + (C.value !== true ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: we, onKeyup: I }, "PM")])), d("div", { class: "q-time__header flex flex-center no-wrap " + i.value }, ye);
  }
  function Ve() {
    const ue = b.value[y.value];
    return d("div", { class: "q-time__content col relative-position" }, [d(Ot, { name: "q-transition--scale" }, () => d("div", { key: "clock" + y.value, class: "q-time__container-parent absolute-full" }, [d("div", { ref: g, class: "q-time__container-child fit overflow-hidden" }, [cn(d("div", { class: "q-time__clock cursor-pointer non-selectable", onClick: ee, onMousedown: le }, [d("div", { class: "q-time__clock-circle fit" }, [d("div", { class: "q-time__clock-pointer" + (b.value[y.value] === null ? " hidden" : e.color !== void 0 ? ` text-${e.color}` : ""), style: L.value }), ae.value.map((ye) => d("div", { class: `q-time__clock-position row flex-center q-time__clock-pos-${ye.index}` + (ye.val === ue ? " q-time__clock-position--active " + i.value : ye.disable === true ? " q-time__clock-position--disable" : "") }, [d("span", ye.label)]))])]), pe.value)])])), e.nowBtn === true ? d(Ze, { class: "q-time__now-button absolute", icon: r.iconSet.datetime.now, unelevated: true, size: "sm", round: true, color: e.color, textColor: e.textColor, tabindex: o.value, onClick: Y }) : null]);
  }
  return l.proxy.setNow = Y, () => {
    const ue = [Ve()], ye = $e(t.default);
    return ye !== void 0 && ue.push(d("div", { class: "q-time__actions" }, ye)), e.name !== void 0 && e.disable !== true && f(ue, "push"), d("div", { class: $.value, tabindex: -1 }, [He(), d("div", { class: "q-time__main col overflow-auto" }, ue)]);
  };
} });
he({ name: "QTimeline", props: { ...nt, color: { type: String, default: "primary" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, layout: { type: String, default: "dense", validator: (e) => ["dense", "comfortable", "loose"].includes(e) } }, setup(e, { slots: t }) {
  const n = xe(), l = lt(e, n.proxy.$q);
  gn(cm, e);
  const r = v(() => `q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}` + (l.value === true ? " q-timeline--dark" : ""));
  return () => d("ul", { class: r.value }, $e(t.default));
} });
he({ name: "QTimelineEntry", props: { heading: Boolean, tag: { type: String, default: "h3" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, icon: String, avatar: String, color: String, title: String, subtitle: String, body: String }, setup(e, { slots: t }) {
  const n = qt(cm, ot);
  if (n === ot) return console.error("QTimelineEntry needs to be child of QTimeline"), ot;
  const l = v(() => `q-timeline__entry q-timeline__entry--${e.side}` + (e.icon !== void 0 || e.avatar !== void 0 ? " q-timeline__entry--icon" : "")), r = v(() => `q-timeline__dot text-${e.color || n.color}`), a = v(() => n.layout === "comfortable" && n.side === "left");
  return () => {
    const o = Pa(t.default, []);
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
var Wd = he({ name: "QToolbar", props: { inset: Boolean }, setup(e, { slots: t }) {
  const n = v(() => "q-toolbar row no-wrap items-center" + (e.inset === true ? " q-toolbar--inset" : ""));
  return () => d("div", { class: n.value, role: "toolbar" }, $e(t.default));
} }), Yd = he({ name: "QToolbarTitle", props: { shrink: Boolean }, setup(e, { slots: t }) {
  const n = v(() => "q-toolbar__title ellipsis" + (e.shrink === true ? " col-shrink" : ""));
  return () => d("div", { class: n.value }, $e(t.default));
} }), Y_ = ["none", "strict", "leaf", "leaf-filtered"];
he({ name: "QTree", props: { ...nt, nodes: { type: Array, required: true }, nodeKey: { type: String, required: true }, labelKey: { type: String, default: "label" }, childrenKey: { type: String, default: "children" }, dense: Boolean, color: String, controlColor: String, textColor: String, selectedColor: String, icon: String, tickStrategy: { type: String, default: "none", validator: (e) => Y_.includes(e) }, ticked: Array, expanded: Array, selected: {}, noSelectionUnset: Boolean, defaultExpandAll: Boolean, accordion: Boolean, filter: String, filterMethod: Function, duration: {}, noConnectors: Boolean, noTransition: Boolean, noNodesLabel: String, noResultsLabel: String }, emits: ["update:expanded", "update:ticked", "update:selected", "lazyLoad", "afterShow", "afterHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), { $q: r } = l, a = lt(e, r), o = K({}), i = K(e.ticked || []), u = K(e.expanded || []);
  let c = {};
  Rr(() => {
    c = {};
  });
  const s = v(() => `q-tree q-tree--${e.dense === true ? "dense" : "standard"}` + (e.noConnectors === true ? " q-tree--no-connectors" : "") + (a.value === true ? " q-tree--dark" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), f = v(() => e.selected !== void 0), h = v(() => e.icon || r.iconSet.tree.icon), m = v(() => e.controlColor || e.color), g = v(() => e.textColor !== void 0 ? ` text-${e.textColor}` : ""), w = v(() => {
    const _ = e.selectedColor || e.color;
    return _ ? ` text-${_}` : "";
  }), x = v(() => e.filterMethod !== void 0 ? e.filterMethod : (_, D) => {
    const F = D.toLowerCase();
    return _[e.labelKey] && _[e.labelKey].toLowerCase().indexOf(F) !== -1;
  }), T = v(() => {
    const _ = {}, D = (F, fe) => {
      const A = F.tickStrategy || (fe ? fe.tickStrategy : e.tickStrategy), R = F[e.nodeKey], G = F[e.childrenKey] && Array.isArray(F[e.childrenKey]) && F[e.childrenKey].length !== 0, V = F.disabled !== true && f.value === true && F.selectable !== false, ne = F.disabled !== true && F.expandable !== false, be = A !== "none", S = A === "strict", M = A === "leaf-filtered", I = A === "leaf" || A === "leaf-filtered";
      let ee = F.disabled !== true && F.tickable !== false;
      I === true && ee === true && fe && fe.tickable !== true && (ee = false);
      let le = F.lazy;
      le === true && o.value[R] !== void 0 && Array.isArray(F[e.childrenKey]) === true && (le = o.value[R]);
      const P = { key: R, parent: fe, isParent: G, lazy: le, disabled: F.disabled, link: F.disabled !== true && (V === true || ne === true && (G === true || le === true)), children: [], matchesFilter: e.filter ? x.value(F, e.filter) : true, selected: R === e.selected && V === true, selectable: V, expanded: G === true ? u.value.includes(R) : false, expandable: ne, noTick: F.noTick === true || S !== true && le && le !== "loaded", tickable: ee, tickStrategy: A, hasTicking: be, strictTicking: S, leafFilteredTicking: M, leafTicking: I, ticked: S === true ? i.value.includes(R) : G === true ? false : i.value.includes(R) };
      if (_[R] = P, G === true && (P.children = F[e.childrenKey].map((te) => D(te, P)), e.filter && (P.matchesFilter !== true ? P.matchesFilter = P.children.some((te) => te.matchesFilter) : P.noTick !== true && P.disabled !== true && P.tickable === true && M === true && P.children.every((te) => te.matchesFilter !== true || te.noTick === true || te.tickable !== true) === true && (P.tickable = false)), P.matchesFilter === true && (P.noTick !== true && S !== true && P.children.every((te) => te.noTick) === true && (P.noTick = true), I))) {
        if (P.ticked = false, P.indeterminate = P.children.some((te) => te.indeterminate === true), P.tickable = P.tickable === true && P.children.some((te) => te.tickable), P.indeterminate !== true) {
          const te = P.children.reduce((se, me) => me.ticked === true ? se + 1 : se, 0);
          te === P.children.length ? P.ticked = true : te > 0 && (P.indeterminate = true);
        }
        P.indeterminate === true && (P.indeterminateNextState = P.children.every((te) => te.tickable !== true || te.ticked !== true));
      }
      return P;
    };
    return e.nodes.forEach((F) => D(F, null)), _;
  });
  ge(() => e.ticked, (_) => {
    i.value = _;
  }), ge(() => e.expanded, (_) => {
    u.value = _;
  });
  function p(_) {
    const D = [].reduce, F = (fe, A) => {
      if (fe || !A) return fe;
      if (Array.isArray(A) === true) return D.call(Object(A), F, fe);
      if (A[e.nodeKey] === _) return A;
      if (A[e.childrenKey]) return F(null, A[e.childrenKey]);
    };
    return F(null, e.nodes);
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
  function O() {
    const _ = [], D = (F) => {
      F[e.childrenKey] && F[e.childrenKey].length !== 0 && F.expandable !== false && F.disabled !== true && (_.push(F[e.nodeKey]), F[e.childrenKey].forEach(D));
    };
    e.nodes.forEach(D), e.expanded !== void 0 ? n("update:expanded", _) : u.value = _;
  }
  function H(_, D, F = p(_), fe = T.value[_]) {
    if (fe.lazy && fe.lazy !== "loaded") {
      if (fe.lazy === "loading") return;
      o.value[_] = "loading", Array.isArray(F[e.childrenKey]) !== true && (F[e.childrenKey] = []), n("lazyLoad", { node: F, key: _, done: (A) => {
        o.value[_] = "loaded", F[e.childrenKey] = Array.isArray(A) === true ? A : [], We(() => {
          var _a3;
          ((_a3 = T.value[_]) == null ? void 0 : _a3.isParent) === true && L(_, true);
        });
      }, fail: () => {
        delete o.value[_], F[e.childrenKey].length === 0 && delete F[e.childrenKey];
      } });
    } else fe.isParent === true && fe.expandable === true && L(_, D);
  }
  function L(_, D) {
    let F = u.value;
    const fe = e.expanded !== void 0;
    if (fe === true && (F = F.slice()), D) {
      if (e.accordion && T.value[_]) {
        const A = [];
        T.value[_].parent ? T.value[_].parent.children.forEach((R) => {
          R.key !== _ && R.expandable === true && A.push(R.key);
        }) : e.nodes.forEach((R) => {
          const G = R[e.nodeKey];
          G !== _ && A.push(G);
        }), A.length !== 0 && (F = F.filter((R) => A.includes(R) === false));
      }
      F = F.concat([_]).filter((A, R, G) => G.indexOf(A) === R);
    } else F = F.filter((A) => A !== _);
    fe === true ? n("update:expanded", F) : u.value = F;
  }
  function B(_) {
    return _ && T.value[_] ? T.value[_].ticked : false;
  }
  function N(_, D) {
    let F = i.value;
    const fe = e.ticked !== void 0;
    fe === true && (F = F.slice()), D ? F = F.concat(_).filter((A, R, G) => G.indexOf(A) === R) : F = F.filter((A) => _.includes(A) === false), fe === true && n("update:ticked", F);
  }
  function q(_, D, F) {
    const fe = { tree: l, node: _, key: F, color: e.color, dark: a.value };
    return Vt(fe, "expanded", () => D.expanded, (A) => {
      A !== D.expanded && H(F, A);
    }), Vt(fe, "ticked", () => D.ticked, (A) => {
      A !== D.ticked && N([F], A);
    }), fe;
  }
  function E(_) {
    return (e.filter ? _.filter((D) => T.value[D[e.nodeKey]].matchesFilter) : _).map((D) => W(D));
  }
  function k(_) {
    if (_.icon !== void 0) return d(et, { class: "q-tree__icon q-mr-sm", name: _.icon, color: _.iconColor });
    const D = _.img || _.avatar;
    if (D) return d("img", { class: `q-tree__${_.img ? "img" : "avatar"} q-mr-sm`, src: D });
  }
  function j() {
    n("afterShow");
  }
  function U() {
    n("afterHide");
  }
  function W(_) {
    const D = _[e.nodeKey], F = T.value[D], fe = _.header && t[`header-${_.header}`] || t["default-header"], A = F.isParent === true ? E(_[e.childrenKey]) : [], R = A.length !== 0 || F.lazy && F.lazy !== "loaded";
    let G = _.body && t[`body-${_.body}`] || t["default-body"];
    const V = fe !== void 0 || G !== void 0 ? q(_, F, D) : null;
    return G !== void 0 && (G = d("div", { class: "q-tree__node-body relative-position" }, [d("div", { class: g.value }, [G(V)])])), d("div", { key: D, class: `q-tree__node relative-position q-tree__node--${R === true ? "parent" : "child"}` }, [d("div", { class: "q-tree__node-header relative-position row no-wrap items-center" + (F.link === true ? " q-tree__node--link q-hoverable q-focusable" : "") + (F.selected === true ? " q-tree__node--selected" : "") + (F.disabled === true ? " q-tree__node--disabled" : ""), tabindex: F.link === true ? 0 : -1, ariaExpanded: A.length > 0 ? F.expanded : null, role: "treeitem", onClick: (ne) => {
      ae(_, F, ne);
    }, onKeypress(ne) {
      Xl(ne) !== true && (ne.keyCode === 13 ? ae(_, F, ne, true) : ne.keyCode === 32 && pe(_, F, ne, true));
    } }, [d("div", { class: "q-focus-helper", tabindex: -1, ref: (ne) => {
      c[F.key] = ne;
    } }), F.lazy === "loading" ? d(wn, { class: "q-tree__spinner", color: m.value }) : R === true ? d(et, { class: "q-tree__arrow" + (F.expanded === true ? " q-tree__arrow--rotate" : ""), name: h.value, onClick(ne) {
      pe(_, F, ne);
    } }) : null, F.hasTicking === true && F.noTick !== true ? d(sa, { class: "q-tree__tickbox", modelValue: F.indeterminate === true ? null : F.ticked, color: m.value, dark: a.value, dense: true, keepColor: true, disable: F.tickable !== true, onKeydown: je, "onUpdate:modelValue": (ne) => {
      Y(F, ne);
    } }) : null, d("div", { class: "q-tree__node-header-content col row no-wrap items-center" + (F.selected === true ? w.value : g.value) }, [fe ? fe(V) : [k(_), d("div", _[e.labelKey])]])]), R === true ? e.noTransition === true ? F.expanded === true ? d("div", { class: "q-tree__node-collapsible" + g.value, key: `${D}__q` }, [G, d("div", { class: "q-tree__children" + (F.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, A)]) : null : d(Qs, { duration: e.duration, onShow: j, onHide: U }, () => cn(d("div", { class: "q-tree__node-collapsible" + g.value, key: `${D}__q` }, [G, d("div", { class: "q-tree__children" + (F.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, A)]), [[Gv, F.expanded]])) : G]);
  }
  function X(_) {
    var _a3;
    (_a3 = c[_]) == null ? void 0 : _a3.focus();
  }
  function ae(_, D, F, fe) {
    fe !== true && D.selectable !== false && X(D.key), f.value && D.selectable ? e.noSelectionUnset === false ? n("update:selected", D.key !== e.selected ? D.key : null) : D.key !== e.selected && n("update:selected", D.key === void 0 ? null : D.key) : pe(_, D, F, fe), typeof _.handler == "function" && _.handler(_);
  }
  function pe(_, D, F, fe) {
    F !== void 0 && je(F), fe !== true && D.selectable !== false && X(D.key), H(D.key, !D.expanded, _, D);
  }
  function Y(_, D) {
    if (_.indeterminate === true && (D = _.indeterminateNextState), _.strictTicking) N([_.key], D);
    else if (_.leafTicking) {
      const F = [], fe = (A) => {
        A.isParent ? (D !== true && A.noTick !== true && A.tickable === true && F.push(A.key), A.leafTicking === true && A.children.forEach(fe)) : A.noTick !== true && A.tickable === true && (A.leafFilteredTicking !== true || A.matchesFilter === true) && F.push(A.key);
      };
      fe(_), N(F, D);
    }
  }
  return e.defaultExpandAll === true && O(), Object.assign(l, { getNodeByKey: p, getTickedNodes: y, getExpandedNodes: b, isExpanded: C, collapseAll: $, expandAll: O, setExpanded: H, isTicked: B, setTicked: N }), () => {
    const _ = E(e.nodes);
    return d("div", { class: s.value, role: "tree" }, _.length === 0 ? e.filter ? e.noResultsLabel || r.lang.tree.noResults : e.noNodesLabel || r.lang.tree.noNodes : _);
  };
} });
function Xd(e) {
  return (e * 100).toFixed(2) + "%";
}
var X_ = { ...nt, ...Eh, label: String, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, noThumbnails: Boolean, thumbnailFit: { type: String, default: "cover" }, autoUpload: Boolean, hideUploadBtn: Boolean, disable: Boolean, readonly: Boolean }, Yh = [...Rh, "start", "finish", "added", "removed"];
function G_(e, t) {
  const n = xe(), { props: l, slots: r, emit: a, proxy: o } = n, { $q: i } = o, u = lt(l, i);
  function c(V, ne, be) {
    if (V.__status = ne, ne === "idle") {
      V.__uploaded = 0, V.__progress = 0, V.__sizeLabel = Bu(V.size), V.__progressLabel = "0.00%";
      return;
    }
    if (ne === "failed") {
      o.$forceUpdate();
      return;
    }
    V.__uploaded = ne === "uploaded" ? V.size : be, V.__progress = ne === "uploaded" ? 1 : Math.min(0.9999, V.__uploaded / V.size), V.__progressLabel = Xd(V.__progress), o.$forceUpdate();
  }
  const s = v(() => l.disable !== true && l.readonly !== true), f = K(false), h = K(null), m = K(null), g = { files: K([]), queuedFiles: K([]), uploadedFiles: K([]), uploadedSize: K(0), updateFileStatus: c, isAlive: () => bl(n) === false }, { pickFiles: w, addFiles: x, onDragover: T, onDragleave: p, processFiles: y, getDndNode: b, maxFilesNumber: C, maxTotalSizeNumber: $ } = Ah({ editable: s, dnd: f, getFileInput: Y, addFilesToQueue: _ });
  Object.assign(g, e({ props: l, slots: r, emit: a, helpers: g, exposeApi: (V) => {
    Object.assign(g, V);
  } })), g.isBusy === void 0 && (g.isBusy = K(false));
  const O = K(0), H = v(() => O.value === 0 ? 0 : g.uploadedSize.value / O.value), L = v(() => Xd(H.value)), B = v(() => Bu(O.value)), N = v(() => s.value === true && g.isUploading.value !== true && (l.multiple === true || g.queuedFiles.value.length === 0) && (l.maxFiles === void 0 || g.files.value.length < C.value) && (l.maxTotalSize === void 0 || O.value < $.value)), q = v(() => s.value === true && g.isBusy.value !== true && g.isUploading.value !== true && g.queuedFiles.value.length !== 0);
  gn(gm, fe);
  const E = v(() => "q-uploader column no-wrap" + (u.value === true ? " q-uploader--dark q-dark" : "") + (l.bordered === true ? " q-uploader--bordered" : "") + (l.square === true ? " q-uploader--square no-border-radius" : "") + (l.flat === true ? " q-uploader--flat no-shadow" : "") + (l.disable === true ? " disabled q-uploader--disable" : "") + (f.value === true ? " q-uploader--dnd" : "")), k = v(() => "q-uploader__header" + (l.color !== void 0 ? ` bg-${l.color}` : "") + (l.textColor !== void 0 ? ` text-${l.textColor}` : ""));
  ge(g.isUploading, (V, ne) => {
    ne === false && V === true ? a("start") : ne === true && V === false && a("finish");
  });
  function j() {
    l.disable === false && (g.abort(), g.uploadedSize.value = 0, O.value = 0, pe(), g.files.value = [], g.queuedFiles.value = [], g.uploadedFiles.value = []);
  }
  function U() {
    l.disable === false && X(["uploaded"], () => {
      g.uploadedFiles.value = [];
    });
  }
  function W() {
    X(["idle", "failed"], ({ size: V }) => {
      O.value -= V, g.queuedFiles.value = [];
    });
  }
  function X(V, ne) {
    if (l.disable === true) return;
    const be = { files: [], size: 0 }, S = g.files.value.filter((M) => V.indexOf(M.__status) === -1 ? true : (be.size += M.size, be.files.push(M), M.__img !== void 0 && window.URL.revokeObjectURL(M.__img.src), false));
    be.files.length !== 0 && (g.files.value = S, ne(be), a("removed", be.files));
  }
  function ae(V) {
    l.disable || (V.__status === "uploaded" ? g.uploadedFiles.value = g.uploadedFiles.value.filter((ne) => ne.__key !== V.__key) : V.__status === "uploading" ? V.__abort() : O.value -= V.size, g.files.value = g.files.value.filter((ne) => ne.__key !== V.__key ? true : (ne.__img !== void 0 && window.URL.revokeObjectURL(ne.__img.src), false)), g.queuedFiles.value = g.queuedFiles.value.filter((ne) => ne.__key !== V.__key), a("removed", [V]));
  }
  function pe() {
    g.files.value.forEach((V) => {
      V.__img !== void 0 && window.URL.revokeObjectURL(V.__img.src);
    });
  }
  function Y() {
    return m.value || h.value.getElementsByClassName("q-uploader__input")[0];
  }
  function _(V, ne) {
    const be = y(V, ne, g.files.value, true), S = Y();
    S != null && (S.value = ""), be !== void 0 && (be.forEach((M) => {
      if (g.updateFileStatus(M, "idle"), O.value += M.size, l.noThumbnails !== true && M.type.toUpperCase().startsWith("IMAGE")) {
        const I = new Image();
        I.src = window.URL.createObjectURL(M), M.__img = I;
      }
    }), g.files.value = g.files.value.concat(be), g.queuedFiles.value = g.queuedFiles.value.concat(be), a("added", be), l.autoUpload === true && g.upload());
  }
  function D() {
    q.value === true && g.upload();
  }
  function F(V, ne, be) {
    if (V === true) {
      const S = { type: "a", key: ne, icon: i.iconSet.uploader[ne], flat: true, dense: true };
      let M;
      return ne === "add" ? (S.onClick = w, M = fe) : S.onClick = be, d(Ze, S, M);
    }
  }
  function fe() {
    return d("input", { ref: m, class: "q-uploader__input overflow-hidden absolute-full", tabindex: -1, type: "file", title: "", accept: l.accept, multiple: l.multiple === true ? "multiple" : void 0, capture: l.capture, onMousedown: wt, onClick: w, onChange: _ });
  }
  function A() {
    return r.header !== void 0 ? r.header(G) : [d("div", { class: "q-uploader__header-content column" }, [d("div", { class: "flex flex-center no-wrap q-gutter-xs" }, [F(g.queuedFiles.value.length !== 0, "removeQueue", W), F(g.uploadedFiles.value.length !== 0, "removeUploaded", U), g.isUploading.value === true ? d(wn, { class: "q-uploader__spinner" }) : null, d("div", { class: "col column justify-center" }, [l.label !== void 0 ? d("div", { class: "q-uploader__title" }, [l.label]) : null, d("div", { class: "q-uploader__subtitle" }, [B.value + " / " + L.value])]), F(N.value, "add"), F(l.hideUploadBtn === false && q.value === true, "upload", g.upload), F(g.isUploading.value, "clear", g.abort)])])];
  }
  function R() {
    return r.list !== void 0 ? r.list(G) : g.files.value.map((V) => d("div", { key: V.__key, class: "q-uploader__file relative-position" + (l.noThumbnails !== true && V.__img !== void 0 ? " q-uploader__file--img" : "") + (V.__status === "failed" ? " q-uploader__file--failed" : V.__status === "uploaded" ? " q-uploader__file--uploaded" : ""), style: l.noThumbnails !== true && V.__img !== void 0 ? { backgroundImage: 'url("' + V.__img.src + '")', backgroundSize: l.thumbnailFit } : null }, [d("div", { class: "q-uploader__file-header row flex-center no-wrap" }, [V.__status === "failed" ? d(et, { class: "q-uploader__file-status", name: i.iconSet.type.negative, color: "negative" }) : null, d("div", { class: "q-uploader__file-header-content col" }, [d("div", { class: "q-uploader__title" }, [V.name]), d("div", { class: "q-uploader__subtitle row items-center no-wrap" }, [V.__sizeLabel + " / " + V.__progressLabel])]), V.__status === "uploading" ? d(Zm, { value: V.__progress, min: 0, max: 1, indeterminate: V.__progress === 0 }) : d(Ze, { round: true, dense: true, flat: true, icon: i.iconSet.uploader[V.__status === "uploaded" ? "done" : "clear"], onClick: () => {
      ae(V);
    } })])]));
  }
  Ke(() => {
    g.isUploading.value === true && g.abort(), g.files.value.length !== 0 && pe();
  });
  const G = {};
  for (const V in g) pt(g[V]) === true ? Vt(G, V, () => g[V].value) : G[V] = g[V];
  return Object.assign(G, { upload: D, reset: j, removeUploadedFiles: U, removeQueuedFiles: W, removeFile: ae, pickFiles: w, addFiles: x }), tm(G, { canAddFiles: () => N.value, canUpload: () => q.value, uploadSizeLabel: () => B.value, uploadProgressLabel: () => L.value }), t({ ...g, upload: D, reset: j, removeUploadedFiles: U, removeQueuedFiles: W, removeFile: ae, pickFiles: w, addFiles: x, canAddFiles: N, canUpload: q, uploadSizeLabel: B, uploadProgressLabel: L }), () => {
    const V = [d("div", { class: k.value }, A()), d("div", { class: "q-uploader__list scroll" }, R()), b("uploader")];
    g.isBusy.value === true && V.push(d("div", { class: "q-uploader__overlay absolute-full flex flex-center" }, [d(wn)]));
    const ne = { ref: h, class: E.value };
    return N.value === true && Object.assign(ne, { onDragover: T, onDragleave: p }), d("div", ne, V);
  };
}
var Z_ = () => true;
function Xh(e) {
  const t = {};
  return e.forEach((n) => {
    t[n] = Z_;
  }), t;
}
var J_ = Xh(Yh), ew = ({ name: e, props: t, emits: n, injectPlugin: l }) => he({ name: e, props: { ...X_, ...t }, emits: $t(n) === true ? { ...J_, ...n } : [...Yh, ...n], setup(r, { expose: a }) {
  return G_(l, a);
} });
function Hn(e) {
  return typeof e == "function" ? e : () => e;
}
var tw = "QUploader", nw = { url: [Function, String], method: { type: [Function, String], default: "POST" }, fieldName: { type: [Function, String], default: () => (e) => e.name }, headers: [Function, Array], formFields: [Function, Array], withCredentials: [Function, Boolean], sendRaw: [Function, Boolean], batch: [Function, Boolean], factory: Function }, lw = ["factoryFailed", "uploaded", "failed", "uploading"];
function rw({ props: e, emit: t, helpers: n }) {
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
    let C = 0, $ = 0, O = 0, H = 0, L;
    T.upload.addEventListener("progress", (q) => {
      if (L === true) return;
      const E = Math.min(H, q.loaded);
      n.uploadedSize.value += E - O, O = E;
      let k = O - $;
      for (let j = C; k > 0 && j < g.length; j++) {
        const U = g[j];
        if (k > U.size) k -= U.size, C++, $ += U.size, n.updateFileStatus(U, "uploading", U.size);
        else {
          n.updateFileStatus(U, "uploading", k);
          return;
        }
      }
    }, false), T.onreadystatechange = () => {
      T.readyState < 4 || (T.status && T.status < 400 ? (n.uploadedFiles.value = n.uploadedFiles.value.concat(g), g.forEach((q) => {
        n.updateFileStatus(q, "uploaded");
      }), t("uploaded", { files: g, xhr: T })) : (L = true, n.uploadedSize.value -= O, n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach((q) => {
        n.updateFileStatus(q, "failed");
      }), t("failed", { files: g, xhr: T })), a.value--, l.value = l.value.filter((q) => q !== T));
    }, T.open(p("method", g), y), p("withCredentials", g) === true && (T.withCredentials = true);
    const B = p("headers", g);
    B !== void 0 && B.forEach((q) => {
      T.setRequestHeader(q.name, q.value);
    });
    const N = p("sendRaw", g);
    g.forEach((q) => {
      n.updateFileStatus(q, "uploading", 0), N !== true && x.append(p("fieldName", q), q, q.name), q.xhr = T, q.__abort = () => {
        T.abort();
      }, H += q.size;
    }), t("uploading", { files: g, xhr: T }), l.value.push(T), N === true ? T.send(new Blob(g)) : T.send(x);
  }
  return { isUploading: i, isBusy: u, abort: s, upload: f };
}
var aw = { name: tw, props: nw, emits: lw, injectPlugin: rw };
ew(aw);
he({ name: "QUploaderAddTrigger", setup() {
  const e = qt(gm, ot);
  return e === ot && console.error("QUploaderAddTrigger needs to be child of QUploader"), e;
} });
he({ name: "QVideo", props: { ...Ks, src: { type: String, required: true }, title: String, fetchpriority: { type: String, default: "auto" }, loading: { type: String, default: "eager" }, referrerpolicy: { type: String, default: "strict-origin-when-cross-origin" } }, setup(e) {
  const t = Ws(e), n = v(() => "q-video" + (e.ratio !== void 0 ? " q-video--responsive" : ""));
  return () => d("div", { class: n.value, style: t.value }, [d("iframe", { src: e.src, title: e.title, fetchpriority: e.fetchpriority, loading: e.loading, referrerpolicy: e.referrerpolicy, frameborder: "0", allowfullscreen: true })]);
} });
function Gd(e) {
  if (e === false) return 0;
  if (e === true || e === void 0) return 1;
  const t = parseInt(e, 10);
  return isNaN(t) ? 0 : t;
}
Pn({ name: "close-popup", beforeMount(e, { value: t }) {
  const n = { depth: Gd(t), handler(l) {
    n.depth !== 0 && setTimeout(() => {
      const r = lp(e);
      r !== void 0 && rp(r, l, n.depth);
    });
  }, handlerKey(l) {
    pn(l, 13) === true && n.handler(l);
  } };
  e.__qclosepopup = n, e.addEventListener("click", n.handler), e.addEventListener("keyup", n.handlerKey);
}, updated(e, { value: t, oldValue: n }) {
  t !== n && (e.__qclosepopup.depth = Gd(t));
}, beforeUnmount(e) {
  const t = e.__qclosepopup;
  e.removeEventListener("click", t.handler), e.removeEventListener("keyup", t.handlerKey), delete e.__qclosepopup;
} });
var ow = 0, Hr = void 0;
function Zd(e, t) {
  Hr === void 0 && (Hr = document.createElement("div"), Hr.style.cssText = "position: absolute; left: 0; top: 0", document.body.appendChild(Hr));
  const n = e.getBoundingClientRect(), l = Hr.getBoundingClientRect(), { marginLeft: r, marginRight: a, marginTop: o, marginBottom: i } = window.getComputedStyle(e), u = parseInt(r, 10) + parseInt(a, 10), c = parseInt(o, 10) + parseInt(i, 10);
  return { left: n.left - l.left, top: n.top - l.top, width: n.right - n.left, height: n.bottom - n.top, widthM: n.right - n.left + (t === true ? 0 : u), heightM: n.bottom - n.top + (t === true ? 0 : c), marginH: t === true ? u : 0, marginV: t === true ? c : 0 };
}
function to(e) {
  return { width: e.scrollWidth, height: e.scrollHeight };
}
var Jd = ["Top", "Right", "Bottom", "Left"], ef = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], iw = /-block|-inline|block-|inline-/, uw = /(-block|-inline|block-|inline-).*:/;
function tf(e, t) {
  const n = window.getComputedStyle(e), l = {};
  for (let r = 0; r < t.length; r++) {
    const a = t[r];
    if (n[a] === "") if (a === "cssText") {
      const o = n.length;
      let i = "";
      for (let u = 0; u < o; u++) iw.test(n[u]) !== true && (i += n[u] + ": " + n[n[u]] + "; ");
      l[a] = i;
    } else if (["borderWidth", "borderStyle", "borderColor"].indexOf(a) !== -1) {
      const o = a.replace("border", "");
      let i = "";
      for (let u = 0; u < Jd.length; u++) {
        const c = "border" + Jd[u] + o;
        i += n[c] + " ";
      }
      l[a] = i;
    } else if (a === "borderRadius") {
      let o = "", i = "";
      for (let u = 0; u < ef.length; u++) {
        const c = n[ef[u]].split(" ");
        o += c[0] + " ", i += (c[1] === void 0 ? c[0] : c[1]) + " ";
      }
      l[a] = o + "/ " + i;
    } else l[a] = n[a];
    else a === "cssText" ? l[a] = n[a].split(";").filter((o) => uw.test(o) !== true).join(";") : l[a] = n[a];
  }
  return l;
}
var sw = ["absolute", "fixed", "relative", "sticky"];
function nf(e) {
  let t = e, n = 0;
  for (; t !== null && t !== document; ) {
    const { position: l, zIndex: r } = window.getComputedStyle(t), a = Number(r);
    a > n && (t === e || sw.includes(l) === true) && (n = a), t = t.parentNode;
  }
  return n;
}
function cw(e) {
  return { from: e.from, to: e.to !== void 0 ? e.to : e.from };
}
function dw(e) {
  return typeof e == "number" ? e = { duration: e } : typeof e == "function" && (e = { onEnd: e }), { ...e, waitFor: e.waitFor === void 0 ? 0 : e.waitFor, duration: isNaN(e.duration) === true ? 300 : parseInt(e.duration, 10), easing: typeof e.easing == "string" && e.easing.length !== 0 ? e.easing : "ease-in-out", delay: isNaN(e.delay) === true ? 0 : parseInt(e.delay, 10), fill: typeof e.fill == "string" && e.fill.length !== 0 ? e.fill : "none", resize: e.resize === true, useCSS: e.useCSS === true || e.usecss === true, hideFromClone: e.hideFromClone === true || e.hidefromclone === true, keepToClone: e.keepToClone === true || e.keeptoclone === true, tween: e.tween === true, tweenFromOpacity: isNaN(e.tweenFromOpacity) === true ? 0.6 : parseFloat(e.tweenFromOpacity), tweenToOpacity: isNaN(e.tweenToOpacity) === true ? 0.5 : parseFloat(e.tweenToOpacity) };
}
function lf(e) {
  const t = typeof e;
  return t === "function" ? e() : t === "string" ? document.querySelector(e) : e;
}
function rf(e) {
  return e && e.ownerDocument === document && e.parentNode !== null;
}
function fw(e) {
  let t = () => false, n = false, l = true;
  const r = cw(e), a = dw(e), o = lf(r.from);
  if (rf(o) !== true) return t;
  typeof o.qMorphCancel == "function" && o.qMorphCancel();
  let i, u, c, s;
  const f = o.parentNode, h = o.nextElementSibling, m = Zd(o, a.resize), { width: g, height: w } = to(f), { borderWidth: x, borderStyle: T, borderColor: p, borderRadius: y, backgroundColor: b, transform: C, position: $, cssText: O } = tf(o, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), H = o.classList.toString(), L = o.style.cssText, B = o.cloneNode(true), N = a.tween === true ? o.cloneNode(true) : void 0;
  N !== void 0 && (N.className = N.classList.toString().split(" ").filter((E) => /^bg-/.test(E) === false).join(" ")), a.hideFromClone === true && B.classList.add("q-morph--internal"), B.setAttribute("aria-hidden", "true"), B.style.transition = "none", B.style.animation = "none", B.style.pointerEvents = "none", f.insertBefore(B, h), o.qMorphCancel = () => {
    n = true, B.remove(), N == null ? void 0 : N.remove(), a.hideFromClone === true && B.classList.remove("q-morph--internal"), o.qMorphCancel = void 0;
  };
  const q = () => {
    const E = lf(r.to);
    if (n === true || rf(E) !== true) {
      typeof o.qMorphCancel == "function" && o.qMorphCancel();
      return;
    }
    o !== E && typeof E.qMorphCancel == "function" && E.qMorphCancel(), a.keepToClone !== true && E.classList.add("q-morph--internal"), B.classList.add("q-morph--internal");
    const { width: k, height: j } = to(f), { width: U, height: W } = to(E.parentNode);
    a.hideFromClone !== true && B.classList.remove("q-morph--internal"), E.qMorphCancel = () => {
      n = true, B.remove(), N == null ? void 0 : N.remove(), a.hideFromClone === true && B.classList.remove("q-morph--internal"), a.keepToClone !== true && E.classList.remove("q-morph--internal"), o.qMorphCancel = void 0, E.qMorphCancel = void 0;
    };
    const X = () => {
      if (n === true) {
        typeof E.qMorphCancel == "function" && E.qMorphCancel();
        return;
      }
      a.hideFromClone !== true && (B.classList.add("q-morph--internal"), B.innerHTML = "", B.style.left = 0, B.style.right = "unset", B.style.top = 0, B.style.bottom = "unset", B.style.transform = "none"), a.keepToClone !== true && E.classList.remove("q-morph--internal");
      const ae = E.parentNode, { width: pe, height: Y } = to(ae), _ = E.cloneNode(a.keepToClone);
      _.setAttribute("aria-hidden", "true"), a.keepToClone !== true && (_.style.left = 0, _.style.right = "unset", _.style.top = 0, _.style.bottom = "unset", _.style.transform = "none", _.style.pointerEvents = "none"), _.classList.add("q-morph--internal");
      const D = E === o && f === ae ? B : E.nextElementSibling;
      ae.insertBefore(_, D);
      const { borderWidth: F, borderStyle: fe, borderColor: A, borderRadius: R, backgroundColor: G, transform: V, position: ne, cssText: be } = tf(E, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), S = E.classList.toString(), M = E.style.cssText;
      E.style.cssText = be, E.style.transform = "none", E.style.animation = "none", E.style.transition = "none", E.className = S.split(" ").filter((_e2) => /^bg-/.test(_e2) === false).join(" ");
      const I = Zd(E, a.resize), ee = m.left - I.left, le = m.top - I.top, P = m.width / (I.width > 0 ? I.width : 10), te = m.height / (I.height > 0 ? I.height : 100), se = g - k, me = w - j, ce = pe - U, re = Y - W, Q = Math.max(m.widthM, se), ie = Math.max(m.heightM, me), we = Math.max(I.widthM, ce), ke = Math.max(I.heightM, re), Te = o === E && ["absolute", "fixed"].includes(ne) === false && ["absolute", "fixed"].includes($) === false;
      let Me = ne === "fixed", He = ae;
      for (; Me !== true && He !== document; ) Me = window.getComputedStyle(He).position === "fixed", He = He.parentNode;
      if (a.hideFromClone !== true && (B.style.display = "block", B.style.flex = "0 0 auto", B.style.opacity = 0, B.style.minWidth = "unset", B.style.maxWidth = "unset", B.style.minHeight = "unset", B.style.maxHeight = "unset", B.classList.remove("q-morph--internal")), a.keepToClone !== true && (_.style.display = "block", _.style.flex = "0 0 auto", _.style.opacity = 0, _.style.minWidth = "unset", _.style.maxWidth = "unset", _.style.minHeight = "unset", _.style.maxHeight = "unset"), _.classList.remove("q-morph--internal"), typeof a.classes == "string" && (E.className += " " + a.classes), typeof a.style == "string") E.style.cssText += " " + a.style;
      else if ($t(a.style) === true) for (const _e2 in a.style) E.style[_e2] = a.style[_e2];
      const Ve = nf(B), ue = nf(E), ye = Me === true ? document.documentElement : { scrollLeft: 0, scrollTop: 0 };
      E.style.position = Me === true ? "fixed" : "absolute", E.style.left = `${I.left - ye.scrollLeft}px`, E.style.right = "unset", E.style.top = `${I.top - ye.scrollTop}px`, E.style.margin = 0, a.resize === true && (E.style.minWidth = "unset", E.style.maxWidth = "unset", E.style.minHeight = "unset", E.style.maxHeight = "unset", E.style.overflow = "hidden", E.style.overflowX = "hidden", E.style.overflowY = "hidden"), document.body.appendChild(E), N !== void 0 && (N.style.cssText = O, N.style.transform = "none", N.style.animation = "none", N.style.transition = "none", N.style.position = E.style.position, N.style.left = `${m.left - ye.scrollLeft}px`, N.style.right = "unset", N.style.top = `${m.top - ye.scrollTop}px`, N.style.margin = 0, N.style.pointerEvents = "none", a.resize === true && (N.style.minWidth = "unset", N.style.maxWidth = "unset", N.style.minHeight = "unset", N.style.maxHeight = "unset", N.style.overflow = "hidden", N.style.overflowX = "hidden", N.style.overflowY = "hidden"), document.body.appendChild(N));
      const oe = (_e2) => {
        o === E && l !== true ? (E.style.cssText = L, E.className = H) : (E.style.cssText = M, E.className = S), _.parentNode === ae && ae.insertBefore(E, _), B.remove(), _.remove(), N == null ? void 0 : N.remove(), t = () => false, o.qMorphCancel = void 0, E.qMorphCancel = void 0, typeof a.onEnd == "function" && a.onEnd(l === true ? "to" : "from", _e2 === true);
      };
      if (a.useCSS !== true && typeof E.animate == "function") {
        const _e2 = a.resize === true ? { transform: `translate(${ee}px, ${le}px)`, width: `${Q}px`, height: `${ie}px` } : { transform: `translate(${ee}px, ${le}px) scale(${P}, ${te})` }, Ce = a.resize === true ? { width: `${we}px`, height: `${ke}px` } : {}, Oe = a.resize === true ? { width: `${Q}px`, height: `${ie}px` } : {}, Re = a.resize === true ? { transform: `translate(${-1 * ee}px, ${-1 * le}px)`, width: `${we}px`, height: `${ke}px` } : { transform: `translate(${-1 * ee}px, ${-1 * le}px) scale(${1 / P}, ${1 / te})` }, Ye = N !== void 0 ? { opacity: a.tweenToOpacity } : { backgroundColor: b }, it = N !== void 0 ? { opacity: 1 } : { backgroundColor: G };
        s = E.animate([{ margin: 0, borderWidth: x, borderStyle: T, borderColor: p, borderRadius: y, zIndex: Ve, transformOrigin: "0 0", ..._e2, ...Ye }, { margin: 0, borderWidth: F, borderStyle: fe, borderColor: A, borderRadius: R, zIndex: ue, transformOrigin: "0 0", transform: V, ...Ce, ...it }], { duration: a.duration, easing: a.easing, fill: a.fill, delay: a.delay }), u = N === void 0 ? void 0 : N.animate([{ opacity: a.tweenFromOpacity, margin: 0, borderWidth: x, borderStyle: T, borderColor: p, borderRadius: y, zIndex: Ve, transformOrigin: "0 0", transform: C, ...Oe }, { opacity: 0, margin: 0, borderWidth: F, borderStyle: fe, borderColor: A, borderRadius: R, zIndex: ue, transformOrigin: "0 0", ...Re }], { duration: a.duration, easing: a.easing, fill: a.fill, delay: a.delay }), i = a.hideFromClone === true || Te === true ? void 0 : B.animate([{ margin: `${me < 0 ? me / 2 : 0}px ${se < 0 ? se / 2 : 0}px`, width: `${Q + m.marginH}px`, height: `${ie + m.marginV}px` }, { margin: 0, width: 0, height: 0 }], { duration: a.duration, easing: a.easing, fill: a.fill, delay: a.delay }), c = a.keepToClone === true ? void 0 : _.animate([Te === true ? { margin: `${me < 0 ? me / 2 : 0}px ${se < 0 ? se / 2 : 0}px`, width: `${Q + m.marginH}px`, height: `${ie + m.marginV}px` } : { margin: 0, width: 0, height: 0 }, { margin: `${re < 0 ? re / 2 : 0}px ${ce < 0 ? ce / 2 : 0}px`, width: `${we + I.marginH}px`, height: `${ke + I.marginV}px` }], { duration: a.duration, easing: a.easing, fill: a.fill, delay: a.delay });
        const Ct = (Ut) => {
          i == null ? void 0 : i.cancel(), u == null ? void 0 : u.cancel(), c == null ? void 0 : c.cancel(), s.cancel(), s.removeEventListener("finish", Ct), s.removeEventListener("cancel", Ct), oe(Ut), i = void 0, u = void 0, c = void 0, s = void 0;
        };
        o.qMorphCancel = () => {
          o.qMorphCancel = void 0, n = true, Ct();
        }, E.qMorphCancel = () => {
          E.qMorphCancel = void 0, n = true, Ct();
        }, s.addEventListener("finish", Ct), s.addEventListener("cancel", Ct), t = (Ut) => n === true || s === void 0 ? false : Ut === true ? (Ct(true), true) : (l = l !== true, i == null ? void 0 : i.reverse(), u == null ? void 0 : u.reverse(), c == null ? void 0 : c.reverse(), s.reverse(), true);
      } else {
        const _e2 = `q-morph-anim-${++ow}`, Ce = document.createElement("style"), Oe = a.resize === true ? `
            transform: translate(${ee}px, ${le}px);
            width: ${Q}px;
            height: ${ie}px;
          ` : `transform: translate(${ee}px, ${le}px) scale(${P}, ${te});`, Re = a.resize === true ? `
            width: ${we}px;
            height: ${ke}px;
          ` : "", Ye = a.resize === true ? `
            width: ${Q}px;
            height: ${ie}px;
          ` : "", it = a.resize === true ? `
            transform: translate(${-1 * ee}px, ${-1 * le}px);
            width: ${we}px;
            height: ${ke}px;
          ` : `transform: translate(${-1 * ee}px, ${-1 * le}px) scale(${1 / P}, ${1 / te});`, Ct = N !== void 0 ? `opacity: ${a.tweenToOpacity};` : `background-color: ${b};`, Ut = N !== void 0 ? "opacity: 1;" : `background-color: ${G};`, nl = N === void 0 ? "" : `
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
                border-width: ${F};
                border-style: ${fe};
                border-color: ${A};
                border-radius: ${R};
                z-index: ${ue};
                transform-origin: 0 0;
                ${it}
              }
            }
          `, rn = a.hideFromClone === true || Te === true ? "" : `
            @keyframes ${_e2}-from {
              0% {
                margin: ${me < 0 ? me / 2 : 0}px ${se < 0 ? se / 2 : 0}px;
                width: ${Q + m.marginH}px;
                height: ${ie + m.marginV}px;
              }

              100% {
                margin: 0;
                width: 0;
                height: 0;
              }
            }
          `, In = Te === true ? `
            margin: ${me < 0 ? me / 2 : 0}px ${se < 0 ? se / 2 : 0}px;
            width: ${Q + m.marginH}px;
            height: ${ie + m.marginV}px;
          ` : `
            margin: 0;
            width: 0;
            height: 0;
          `, de = a.keepToClone === true ? "" : `
            @keyframes ${_e2}-to {
              0% {
                ${In}
              }

              100% {
                margin: ${re < 0 ? re / 2 : 0}px ${ce < 0 ? ce / 2 : 0}px;
                width: ${we + I.marginH}px;
                height: ${ke + I.marginV}px;
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
              border-width: ${F};
              border-style: ${fe};
              border-color: ${A};
              border-radius: ${R};
              background-color: ${G};
              z-index: ${ue};
              transform-origin: 0 0;
              transform: ${V};
              ${Re}
              ${Ut}
            }
          }

          ${rn}

          ${nl}

          ${de}
        `, document.head.appendChild(Ce);
        let Se = "normal";
        B.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${Se} ${a.fill} ${_e2}-from`, N !== void 0 && (N.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${Se} ${a.fill} ${_e2}-from-tween`), _.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${Se} ${a.fill} ${_e2}-to`, E.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${Se} ${a.fill} ${_e2}`;
        const Fe = (Be) => {
          Be === Object(Be) && Be.animationName !== _e2 || (E.removeEventListener("animationend", Fe), E.removeEventListener("animationcancel", Fe), oe(), Ce.remove());
        };
        o.qMorphCancel = () => {
          o.qMorphCancel = void 0, n = true, Fe();
        }, E.qMorphCancel = () => {
          E.qMorphCancel = void 0, n = true, Fe();
        }, E.addEventListener("animationend", Fe), E.addEventListener("animationcancel", Fe), t = (Be) => n === true || !E || !B || !_ ? false : Be === true ? (Fe(), true) : (l = l !== true, Se = Se === "normal" ? "reverse" : "normal", B.style.animationDirection = Se, N.style.animationDirection = Se, _.style.animationDirection = Se, E.style.animationDirection = Se, true);
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
var Ho = {}, vw = ["duration", "delay", "easing", "fill", "classes", "style", "duration", "resize", "useCSS", "hideFromClone", "keepToClone", "tween", "tweenFromOpacity", "tweenToOpacity", "waitFor", "onEnd"], mw = ["resize", "useCSS", "hideFromClone", "keepToClone", "tween"];
function dr(e, t) {
  e.clsAction !== t && (e.clsAction = t, e.el.classList[t]("q-morph--invisible"));
}
function Gh(e) {
  if (e.animating === true || e.queue.length < 2) return;
  const [t, n] = e.queue;
  e.animating = true, t.animating = true, n.animating = true, dr(t, "remove"), dr(n, "remove");
  const l = fw({ from: t.el, to: n.el, onToggle() {
    dr(t, "add"), dr(n, "remove");
  }, ...n.opts, onEnd(r, a) {
    var _a3, _b2;
    (_b2 = (_a3 = n.opts).onEnd) == null ? void 0 : _b2.call(_a3, r, a), a !== true && (t.animating = false, n.animating = false, e.animating = false, e.cancel = void 0, e.queue.shift(), Gh(e));
  } });
  e.cancel = () => {
    l(true), e.cancel = void 0;
  };
}
function Zh(e, t) {
  const n = t.opts;
  mw.forEach((l) => {
    n[l] = e[l] === true;
  });
}
function hw(e, t) {
  const n = typeof e == "string" && e.length !== 0 ? e.split(":") : [];
  t.name = n[0], t.group = n[1], Object.assign(t.opts, { duration: isNaN(n[2]) === true ? 300 : parseFloat(n[2]), waitFor: n[3] });
}
function gw(e, t) {
  e.group !== void 0 && (t.group = e.group), e.name !== void 0 && (t.name = e.name);
  const n = t.opts;
  vw.forEach((l) => {
    e[l] !== void 0 && (n[l] = e[l]);
  });
}
function bw(e, t) {
  if (t.name === e) {
    const n = Ho[t.group];
    n === void 0 ? (Ho[t.group] = { name: t.group, model: e, queue: [t], animating: false }, dr(t, "remove")) : n.model !== e && (n.model = e, n.queue.push(t), n.animating === false && n.queue.length === 2 && Gh(n));
    return;
  }
  t.animating === false && dr(t, "add");
}
function af(e, t) {
  let n;
  Object(t) === t ? (n = "" + t.model, gw(t, e), Zh(t, e)) : n = "" + t, n !== e.model ? (e.model = n, bw(n, e)) : e.animating === false && e.clsAction !== void 0 && e.el.classList[e.clsAction]("q-morph--invisible");
}
Pn({ name: "morph", mounted(e, t) {
  const n = { el: e, animating: false, opts: {} };
  Zh(t.modifiers, n), hw(t.arg, n), af(n, t.value), e.__qmorph = n;
}, updated(e, t) {
  af(e.__qmorph, t.value);
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qmorph, n = Ho[t.group];
  n !== void 0 && n.queue.indexOf(t) !== -1 && (n.queue = n.queue.filter((r) => r !== t), n.queue.length === 0 && ((_a3 = n.cancel) == null ? void 0 : _a3.call(n), delete Ho[t.group])), t.clsAction === "add" && e.classList.remove("q-morph--invisible"), delete e.__qmorph;
} });
var yw = { childList: true, subtree: true, attributes: true, characterData: true, attributeOldValue: true, characterDataOldValue: true };
function of(e, t, n) {
  var _a3;
  t.handler = n, (_a3 = t.observer) == null ? void 0 : _a3.disconnect(), t.observer = new MutationObserver((l) => {
    typeof t.handler == "function" && (t.handler(l) === false || t.once === true) && Jh(e);
  }), t.observer.observe(e, t.opts);
}
function Jh(e) {
  var _a3;
  const t = e.__qmutation;
  t !== void 0 && ((_a3 = t.observer) == null ? void 0 : _a3.disconnect(), delete e.__qmutation);
}
Pn({ name: "mutation", mounted(e, { modifiers: { once: t, ...n }, value: l }) {
  const r = { once: t, opts: Object.keys(n).length === 0 ? yw : n };
  of(e, r, l), e.__qmutation = r;
}, updated(e, { oldValue: t, value: n }) {
  const l = e.__qmutation;
  l !== void 0 && t !== n && of(e, l, n);
}, beforeUnmount: Jh });
var { passive: jo } = dt;
function uf(e, { value: t, oldValue: n }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, jo);
    return;
  }
  e.handler = t, typeof n != "function" && (e.scrollTarget.addEventListener("scroll", e.scroll, jo), e.scroll());
}
Pn({ name: "scroll-fire", mounted(e, t) {
  const n = { scrollTarget: Dn(e), scroll: Ar(() => {
    let l, r;
    n.scrollTarget === window ? (r = e.getBoundingClientRect().bottom, l = window.innerHeight) : (r = Ao(e).top + Cr(e), l = Ao(n.scrollTarget).top + Cr(n.scrollTarget)), r > 0 && r < l && (n.scrollTarget.removeEventListener("scroll", n.scroll, jo), n.handler(e));
  }, 25) };
  uf(n, t), e.__qscrollfire = n;
}, updated(e, t) {
  t.value !== t.oldValue && uf(e.__qscrollfire, t);
}, beforeUnmount(e) {
  const t = e.__qscrollfire;
  t.scrollTarget.removeEventListener("scroll", t.scroll, jo), t.scroll.cancel(), delete e.__qscrollfire;
} });
function sf(e, { value: t, oldValue: n }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, dt.passive);
    return;
  }
  e.handler = t, typeof n != "function" && e.scrollTarget.addEventListener("scroll", e.scroll, dt.passive);
}
Pn({ name: "scroll", mounted(e, t) {
  const n = { scrollTarget: Dn(e), scroll() {
    n.handler(yl(n.scrollTarget), fi(n.scrollTarget));
  } };
  sf(n, t), e.__qscroll = n;
}, updated(e, t) {
  e.__qscroll !== void 0 && t.oldValue !== t.value && sf(e.__qscroll, t);
}, beforeUnmount(e) {
  const t = e.__qscroll;
  t.scrollTarget.removeEventListener("scroll", t.scroll, dt.passive), delete e.__qscroll;
} });
Pn({ name: "touch-hold", beforeMount(e, t) {
  const { modifiers: n } = t;
  if (n.mouse !== true && De.has.touch !== true) return;
  const l = { handler: t.value, noop: xt, mouseStart(a) {
    typeof l.handler == "function" && oi(a) === true && (kt(l, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]), l.start(a, true));
  }, touchStart(a) {
    if (a.target !== void 0 && typeof l.handler == "function") {
      const o = a.target;
      kt(l, "temp", [[o, "touchmove", "move", "passiveCapture"], [o, "touchcancel", "end", "notPassiveCapture"], [o, "touchend", "end", "notPassiveCapture"]]), l.start(a);
    }
  }, start(a, o) {
    l.origin = tn(a);
    const i = Date.now();
    De.is.mobile === true && (document.body.classList.add("non-selectable"), En(), l.styleCleanup = (u) => {
      l.styleCleanup = void 0;
      const c = () => {
        document.body.classList.remove("non-selectable");
      };
      u === true ? (En(), setTimeout(c, 10)) : c();
    }), l.triggered = false, l.sensitivity = o === true ? l.mouseSensitivity : l.touchSensitivity, l.timer = setTimeout(() => {
      l.timer = void 0, En(), l.triggered = true, l.handler({ evt: a, touch: o !== true, mouse: o === true, position: l.origin, duration: Date.now() - i });
    }, l.duration);
  }, move(a) {
    const { top: o, left: i } = tn(a);
    l.timer !== void 0 && (Math.abs(i - l.origin.left) >= l.sensitivity || Math.abs(o - l.origin.top) >= l.sensitivity) && (clearTimeout(l.timer), l.timer = void 0);
  }, end(a) {
    var _a3;
    Yt(l, "temp"), (_a3 = l.styleCleanup) == null ? void 0 : _a3.call(l, l.triggered), l.triggered === true ? a !== void 0 && je(a) : l.timer !== void 0 && (clearTimeout(l.timer), l.timer = void 0);
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
  t !== void 0 && (Yt(t, "main"), Yt(t, "temp"), t.timer !== void 0 && clearTimeout(t.timer), (_a3 = t.styleCleanup) == null ? void 0 : _a3.call(t), delete e.__qtouchhold);
} });
var eg = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] }, pw = new RegExp(`^([\\d+]+|${Object.keys(eg).join("|")})$`, "i");
function _w(e, t) {
  const { top: n, left: l } = tn(e);
  return Math.abs(l - t.left) >= 7 || Math.abs(n - t.top) >= 7;
}
Pn({ name: "touch-repeat", beforeMount(e, { modifiers: t, value: n, arg: l }) {
  const r = Object.keys(t).reduce((u, c) => {
    if (pw.test(c) === true) {
      const s = isNaN(parseInt(c, 10)) ? eg[c.toLowerCase()] : parseInt(c, 10);
      s >= 0 && u.push(s);
    }
    return u;
  }, []);
  if (t.mouse !== true && De.has.touch !== true && r.length === 0) return;
  const a = typeof l == "string" && l.length !== 0 ? l.split(":").map((u) => parseInt(u, 10)) : [0, 600, 300], o = a.length - 1, i = { keyboard: r, handler: n, noop: xt, mouseStart(u) {
    i.event === void 0 && typeof i.handler == "function" && oi(u) === true && (kt(i, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]), i.start(u, true));
  }, keyboardStart(u) {
    if (typeof i.handler == "function" && pn(u, r) === true) {
      if ((a[0] === 0 || i.event !== void 0) && (je(u), e.focus(), i.event !== void 0)) return;
      kt(i, "temp", [[document, "keyup", "end", "notPassiveCapture"], [document, "click", "end", "notPassiveCapture"]]), i.start(u, false, true);
    }
  }, touchStart(u) {
    if (u.target !== void 0 && typeof i.handler == "function") {
      const c = u.target;
      kt(i, "temp", [[c, "touchmove", "move", "passiveCapture"], [c, "touchcancel", "end", "notPassiveCapture"], [c, "touchend", "end", "notPassiveCapture"]]), i.start(u);
    }
  }, start(u, c, s) {
    s !== true && (i.origin = tn(u));
    function f(m) {
      i.styleCleanup = void 0, document.documentElement.style.cursor = "";
      const g = () => {
        document.body.classList.remove("non-selectable");
      };
      m === true ? (En(), setTimeout(g, 10)) : g();
    }
    De.is.mobile === true && (document.body.classList.add("non-selectable"), En(), i.styleCleanup = f), i.event = { touch: c !== true && s !== true, mouse: c === true, keyboard: s === true, startTime: Date.now(), repeatCount: 0 };
    const h = () => {
      if (i.timer = void 0, i.event === void 0) return;
      i.event.repeatCount === 0 && (i.event.evt = u, s === true ? i.event.keyCode = u.keyCode : i.event.position = tn(u), De.is.mobile !== true && (document.documentElement.style.cursor = "pointer", document.body.classList.add("non-selectable"), En(), i.styleCleanup = f)), i.event.duration = Date.now() - i.event.startTime, i.event.repeatCount += 1, i.handler(i.event);
      const m = o < i.event.repeatCount ? o : i.event.repeatCount;
      i.timer = setTimeout(h, a[m]);
    };
    a[0] === 0 ? h() : i.timer = setTimeout(h, a[0]);
  }, move(u) {
    i.event !== void 0 && i.timer !== void 0 && _w(u, i.origin) === true && (clearTimeout(i.timer), i.timer = void 0);
  }, end(u) {
    var _a3;
    i.event !== void 0 && ((_a3 = i.styleCleanup) == null ? void 0 : _a3.call(i, true), u !== void 0 && i.event.repeatCount > 0 && je(u), Yt(i, "temp"), i.timer !== void 0 && (clearTimeout(i.timer), i.timer = void 0), i.event = void 0);
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
  t !== void 0 && (t.timer !== void 0 && clearTimeout(t.timer), Yt(t, "main"), Yt(t, "temp"), (_a3 = t.styleCleanup) == null ? void 0 : _a3.call(t), delete e.__qtouchrepeat);
} });
function ww(e, t = document.body) {
  if (!(t instanceof Element)) throw new TypeError("Expected a DOM element");
  return getComputedStyle(t).getPropertyValue(`--q-${e}`).trim() || null;
}
var no;
function xw() {
  return De.is.winphone ? "msapplication-navbutton-color" : De.is.safari ? "apple-mobile-web-app-status-bar-style" : "theme-color";
}
function Sw(e) {
  const t = document.getElementsByTagName("META");
  for (const n in t) if (t[n].name === e) return t[n];
}
function Cw(e) {
  no === void 0 && (no = xw());
  let t = Sw(no);
  const n = t === void 0;
  n && (t = document.createElement("meta"), t.setAttribute("name", no)), t.setAttribute("content", e), n && document.head.appendChild(t);
}
De.is.mobile === true && (De.is.nativeMobile === true || De.is.winphone === true || De.is.safari === true || De.is.webkit === true || De.is.vivaldi);
var jr = {};
function kw(e) {
  Object.assign(Kt, { request: e, exit: e, toggle: e });
}
function tg() {
  return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || null;
}
function ng() {
  const e = Kt.activeEl = Kt.isActive === false ? null : tg();
  np(e === null || e === document.documentElement ? document.body : e);
}
function Tw() {
  Kt.isActive = Kt.isActive === false, ng();
}
function cf(e, t) {
  try {
    const n = e[t]();
    return n === void 0 ? Promise.resolve() : n;
  } catch (n) {
    return Promise.reject(n);
  }
}
var Kt = Cl({ isActive: false, activeEl: null }, { isCapable: false, install({ $q: e }) {
  e.fullscreen = this;
} });
jr.request = ["requestFullscreen", "msRequestFullscreen", "mozRequestFullScreen", "webkitRequestFullscreen"].find((e) => document.documentElement[e] !== void 0), Kt.isCapable = jr.request !== void 0, Kt.isCapable === false ? kw(() => Promise.reject("Not capable")) : (Object.assign(Kt, { request(e) {
  const t = e || document.documentElement, { activeEl: n } = Kt;
  return t === n ? Promise.resolve() : (n !== null && t.contains(n) === true ? Kt.exit() : Promise.resolve()).finally(() => cf(t, jr.request));
}, exit() {
  return Kt.isActive === true ? cf(document, jr.exit) : Promise.resolve();
}, toggle(e) {
  return Kt.isActive === true ? Kt.exit() : Kt.request(e);
} }), jr.exit = ["exitFullscreen", "msExitFullscreen", "mozCancelFullScreen", "webkitExitFullscreen"].find((e) => document[e]), Kt.isActive = !!tg(), Kt.isActive === true && ng(), ["onfullscreenchange", "onmsfullscreenchange", "onwebkitfullscreenchange"].forEach((e) => {
  document[e] = Tw;
}));
var qw = Cl({ appVisible: true }, { install({ $q: e }) {
  Vt(e, "appVisible", () => this.appVisible);
} });
{
  let e, t;
  if (typeof document.hidden < "u" ? (e = "hidden", t = "visibilitychange") : typeof document.msHidden < "u" ? (e = "msHidden", t = "msvisibilitychange") : typeof document.webkitHidden < "u" && (e = "webkitHidden", t = "webkitvisibilitychange"), t && typeof document[e] < "u") {
    const n = () => {
      qw.appVisible = !document[e];
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
      return m.label === void 0 ? d(Kl, { class: "col-all", dark: l.value }) : d("div", { class: ["q-bottom-sheet__item q-hoverable q-focusable cursor-pointer relative-position", m.class], style: m.style, tabindex: 0, role: "listitem", onClick() {
        i(m);
      }, onKeyup(w) {
        w.keyCode === 13 && i(m);
      } }, [d("div", { class: "q-focus-helper" }), m.icon ? d(et, { name: m.icon, color: m.color }) : g ? d("img", { class: m.avatar ? "q-bottom-sheet__avatar" : "", src: g }) : d("div", { class: "q-bottom-sheet__empty-icon" }), d("div", m.label)]);
    });
  }
  function s() {
    return e.actions.map((m) => {
      const g = m.avatar || m.img;
      return m.label === void 0 ? d(Kl, { spaced: true, dark: l.value }) : d(Tr, { class: ["q-bottom-sheet__item", m.classes], style: m.style, tabindex: 0, clickable: true, dark: l.value, onClick() {
        i(m);
      } }, () => [d(hn, { avatar: true }, () => m.icon ? d(et, { name: m.icon, color: m.color }) : g ? d("img", { class: m.avatar ? "q-bottom-sheet__avatar" : "", src: g }) : null), d(hn, () => m.label)]);
    });
  }
  function f() {
    const m = [];
    return e.title && m.push(d(Ol, { class: "q-dialog__title" }, () => e.title)), e.message && m.push(d(Ol, { class: "q-dialog__message" }, () => e.message)), m.push(e.grid === true ? d("div", { class: "row items-stretch justify-start", role: "list" }, c()) : d("div", { role: "list" }, s())), m;
  }
  function h() {
    return [d(Hm, { class: [`q-bottom-sheet q-bottom-sheet--${e.grid === true ? "grid" : "list"}` + (l.value === true ? " q-bottom-sheet--dark q-dark" : ""), e.cardClass], style: e.cardStyle }, f)];
  }
  return Object.assign(n, { show: a, hide: o }), () => d(hi, { ref: r, position: "bottom", onHide: u }, h);
} });
function lg(e, t) {
  for (const n in t) n !== "spinner" && Object(t[n]) === t[n] ? (e[n] = Object(e[n]) !== e[n] ? {} : { ...e[n] }, lg(e[n], t[n])) : e[n] = t[n];
}
function Mw(e, t, n) {
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
    const c = K(null), s = La(false, "dialog"), f = (p) => {
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
          y !== void 0 && (C.cardClass = y), b !== void 0 && (C.cardStyle = b), lg(a, C);
        }
        i.$forceUpdate();
      }
      return g;
    } }, w = (p) => {
      u = true, h.forEach((y) => {
        y(p);
      });
    }, x = () => {
      T.unmount(s), Rs(s), T = null, i = null, u !== true && m.forEach((p) => {
        p();
      });
    };
    let T = ui({ name: "QGlobalDialog", setup: () => () => d(r, { ...a, ref: c, onOk: w, onHide: x, onVnodeMounted(...p) {
      typeof a.onVnodeMounted == "function" && a.onVnodeMounted(...p), We(() => f("show"));
    } }) }, n);
    return i = T.mount(s), g;
  };
}
function rg(e) {
  return encodeURIComponent(e);
}
function ag(e) {
  return decodeURIComponent(e);
}
function Ew(e) {
  return rg(e === Object(e) ? JSON.stringify(e) : "" + e);
}
function Rw(e) {
  if (e === "") return e;
  e.indexOf('"') === 0 && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), e = ag(e.replace(/\+/g, " "));
  try {
    const t = JSON.parse(e);
    (t === Object(t) || Array.isArray(t) === true) && (e = t);
  } catch {
  }
  return e;
}
function og(e) {
  const t = /* @__PURE__ */ new Date();
  return t.setMilliseconds(t.getMilliseconds() + e), t.toUTCString();
}
function Aw(e) {
  let t = 0;
  const n = e.match(/(\d+)d/), l = e.match(/(\d+)h/), r = e.match(/(\d+)m/), a = e.match(/(\d+)s/);
  return n && (t += n[1] * 864e5), l && (t += l[1] * 36e5), r && (t += r[1] * 6e4), a && (t += a[1] * 1e3), t === 0 ? e : og(t);
}
function ig(e, t, n = {}, l) {
  let r, a;
  n.expires !== void 0 && (Object.prototype.toString.call(n.expires) === "[object Date]" ? r = n.expires.toUTCString() : typeof n.expires == "string" ? r = Aw(n.expires) : (a = parseFloat(n.expires), r = isNaN(a) === false ? og(a * 864e5) : n.expires));
  const o = `${rg(e)}=${Ew(t)}`, i = [o, r !== void 0 ? "; Expires=" + r : "", n.path ? "; Path=" + n.path : "", n.domain ? "; Domain=" + n.domain : "", n.sameSite ? "; SameSite=" + n.sameSite : "", n.httpOnly ? "; HttpOnly" : "", n.secure ? "; Secure" : "", n.other ? "; " + n.other : ""].join("");
  if (l) {
    l.req.qCookies ? l.req.qCookies.push(i) : l.req.qCookies = [i], l.res.setHeader("Set-Cookie", l.req.qCookies);
    let u = l.req.headers.cookie || "";
    if (r !== void 0 && a < 0) {
      const c = Uo(e, l);
      c !== void 0 && (u = u.replace(`${e}=${c}; `, "").replace(`; ${e}=${c}`, "").replace(`${e}=${c}`, ""));
    } else u = u ? `${o}; ${u}` : i;
    l.req.headers.cookie = u;
  } else document.cookie = i;
}
function Uo(e, t) {
  const n = t ? t.req.headers : document, l = n.cookie ? n.cookie.split("; ") : [], r = l.length;
  let a = e ? null : {}, o = 0, i, u, c;
  for (; o < r; o++) if (i = l[o].split("="), u = ag(i.shift()), c = i.join("="), !e) a[u] = c;
  else if (e === u) {
    a = Rw(c);
    break;
  }
  return a;
}
function Pw(e, t, n) {
  ig(e, "", { expires: -1, ...t }, n);
}
function $w(e, t) {
  return Uo(e, t) !== null;
}
function ug(e) {
  return { get: (t) => Uo(t, e), set: (t, n, l) => ig(t, n, l, e), has: (t) => $w(t, e), remove: (t, n) => Pw(t, n, e), getAll: () => Uo(null, e) };
}
var Ys = { install({ $q: e, ssrContext: t }) {
  e.cookies = this;
} };
__QUASAR_SSR__ && (Ys.parseSSR = (e) => {
  if (e !== void 0) return ug(e);
});
Object.assign(Ys, ug());
var Lw = Ys, Bw = he({ name: "DialogPluginComponent", props: { ...nt, title: String, message: String, prompt: Object, options: Object, progress: [Boolean, Object], html: Boolean, ok: { type: [String, Object, Boolean], default: true }, cancel: [String, Object, Boolean], focus: { type: String, default: "ok", validator: (e) => ["ok", "cancel", "none"].includes(e) }, stackButtons: Boolean, color: String, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), { $q: l } = n, r = lt(e, l), a = K(null), o = K(e.prompt !== void 0 ? e.prompt.model : e.options !== void 0 ? e.options.model : void 0), i = v(() => "q-dialog-plugin" + (r.value === true ? " q-dialog-plugin--dark q-dark" : "") + (e.progress !== false ? " q-dialog-plugin--progress" : "")), u = v(() => e.color || (r.value === true ? "amber" : "primary")), c = v(() => e.progress === false ? null : $t(e.progress) === true ? { component: e.progress.spinner || wn, props: { color: e.progress.color || u.value } } : { component: wn, props: { color: u.value } }), s = v(() => e.prompt !== void 0 || e.options !== void 0), f = v(() => {
    if (s.value !== true) return {};
    const { model: k, isValid: j, items: U, ...W } = e.prompt !== void 0 ? e.prompt : e.options;
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
  function O(k) {
    g.value !== true && e.prompt.type !== "textarea" && pn(k, 13) === true && y();
  }
  function H(k, j) {
    return e.html === true ? d(Ol, { class: k, innerHTML: j }) : d(Ol, { class: k }, () => j);
  }
  function L() {
    return [d(Bh, { color: u.value, dense: true, autofocus: true, dark: r.value, ...f.value, modelValue: o.value, "onUpdate:modelValue": $, onKeyup: O })];
  }
  function B() {
    return [d(H1, { color: u.value, options: e.options.items, dark: r.value, ...f.value, modelValue: o.value, "onUpdate:modelValue": $ })];
  }
  function N() {
    const k = [];
    return e.cancel && k.push(d(Ze, x.value)), e.ok && k.push(d(Ze, w.value)), d(_p, { class: e.stackButtons === true ? "items-end" : "", vertical: e.stackButtons, align: "right" }, () => k);
  }
  function q() {
    const k = [];
    return e.title && k.push(H("q-dialog__title", e.title)), e.progress !== false && k.push(d(Ol, { class: "q-dialog__progress" }, () => d(c.value.component, c.value.props))), e.message && k.push(H("q-dialog__message", e.message)), e.prompt !== void 0 ? k.push(d(Ol, { class: "scroll q-dialog-plugin__form" }, L)) : e.options !== void 0 && k.push(d(Kl, { dark: r.value }), d(Ol, { class: "scroll q-dialog-plugin__form" }, B), d(Kl, { dark: r.value })), (e.ok || e.cancel) && k.push(N()), k;
  }
  function E() {
    return [d(Hm, { class: [i.value, e.cardClass], style: e.cardStyle, dark: r.value }, q)];
  }
  return Object.assign(n, { show: T, hide: p }), () => d(hi, { ref: a, onHide: C }, E);
} }), Fw = { install({ $q: e, parentApp: t }) {
  e.dialog = this.create = Mw(Bw, true, t);
} }, ir, uu, df = 0, Pl = null, zt = {}, Dl = {}, sg = { group: "__default_quasar_group__", delay: 0, message: false, html: false, spinnerSize: 80, spinnerColor: "", messageColor: "", backgroundColor: "", boxClass: "", spinner: wn, customClass: "" }, cg = { ...sg };
function Ow(e) {
  if ((e == null ? void 0 : e.group) !== void 0 && Dl[e.group] !== void 0) return Object.assign(Dl[e.group], e);
  const t = $t(e) === true && e.ignoreDefaults === true ? { ...sg, ...e } : { ...cg, ...e };
  return Dl[t.group] = t, t;
}
var Sn = Cl({ isActive: false }, { show(e) {
  zt = Ow(e);
  const { group: t } = zt;
  return Sn.isActive = true, ir !== void 0 ? (zt.uid = df, uu.$forceUpdate()) : (zt.uid = ++df, Pl !== null && clearTimeout(Pl), Pl = setTimeout(() => {
    Pl = null;
    const n = La("q-loading");
    ir = ui({ name: "QLoading", setup() {
      ft(() => {
        Uu(true);
      });
      function l() {
        Sn.isActive !== true && ir !== void 0 && (Uu(false), ir.unmount(n), Rs(n), ir = void 0, uu = void 0);
      }
      function r() {
        if (Sn.isActive !== true) return null;
        const a = [d(zt.spinner, { class: "q-loading__spinner", color: zt.spinnerColor, size: zt.spinnerSize })];
        return zt.message && a.push(d("div", { class: "q-loading__message" + (zt.messageColor ? ` text-${zt.messageColor}` : ""), [zt.html === true ? "innerHTML" : "textContent"]: zt.message })), d("div", { class: "q-loading fullscreen flex flex-center z-max " + zt.customClass.trim(), key: zt.uid }, [d("div", { class: "q-loading__backdrop" + (zt.backgroundColor ? ` bg-${zt.backgroundColor}` : "") }), d("div", { class: "q-loading__box column items-center " + zt.boxClass }, a)]);
      }
      return () => d(Ot, { name: "q-transition--fade", appear: true, onAfterLeave: l }, r);
    } }, Sn.__parentApp), uu = ir.mount(n);
  }, zt.delay)), (n) => {
    if (n === void 0 || Object(n) !== n) {
      Sn.hide(t);
      return;
    }
    Sn.show({ ...n, group: t });
  };
}, hide(e) {
  if (Sn.isActive === true) {
    if (e === void 0) Dl = {};
    else {
      if (Dl[e] === void 0) return;
      {
        delete Dl[e];
        const t = Object.keys(Dl);
        if (t.length !== 0) {
          const n = t[t.length - 1];
          Sn.show({ group: n });
          return;
        }
      }
    }
    Pl !== null && (clearTimeout(Pl), Pl = null), Sn.isActive = false;
  }
}, setDefaults(e) {
  $t(e) === true && Object.assign(cg, e);
}, install({ $q: e, parentApp: t }) {
  e.loading = this, Sn.__parentApp = t, e.config.loading !== void 0 && this.setDefaults(e.config.loading);
} }), Vw = Sn, lo = K(null), ff = Cl({ isActive: false }, { start: xt, stop: xt, increment: xt, setDefaults: xt, install({ $q: e, parentApp: t }) {
  if (e.loadingBar = this, this.__installed === true) {
    e.config.loadingBar !== void 0 && this.setDefaults(e.config.loadingBar);
    return;
  }
  const n = K(e.config.loadingBar !== void 0 ? { ...e.config.loadingBar } : {});
  function l() {
    ff.isActive = true;
  }
  function r() {
    ff.isActive = false;
  }
  const a = La("q-loading-bar");
  ui({ name: "LoadingBar", devtools: { hide: true }, setup: () => () => d($y, { ...n.value, onStart: l, onStop: r, ref: lo }) }, t).mount(a), Object.assign(this, { start(o) {
    lo.value.start(o);
  }, stop() {
    lo.value.stop();
  }, increment() {
    lo.value.increment.apply(null, arguments);
  }, setDefaults(o) {
    $t(o) === true && Object.assign(n.value, o);
  } });
} }), Dw = 0, vo = {}, mo = {}, Cn = {}, dg = {}, Iw = /^\s*$/, fg = [], zw = [void 0, null, true, false, ""], Xs = ["top-left", "top-right", "bottom-left", "bottom-right", "top", "bottom", "left", "right", "center"], Nw = ["top-left", "top-right", "bottom-left", "bottom-right"], Gr = { positive: { icon: (e) => e.iconSet.type.positive, color: "positive" }, negative: { icon: (e) => e.iconSet.type.negative, color: "negative" }, warning: { icon: (e) => e.iconSet.type.warning, color: "warning", textColor: "dark" }, info: { icon: (e) => e.iconSet.type.info, color: "info" }, ongoing: { group: false, timeout: 0, spinner: true, color: "grey-8" } };
function vg(e, t, n) {
  var _a3;
  if (!e) return Ur("parameter required");
  let l;
  const r = { textColor: "white" };
  if (e.ignoreDefaults !== true && Object.assign(r, vo), $t(e) === false && (r.type && Object.assign(r, Gr[r.type]), e = { message: e }), Object.assign(r, Gr[e.type || r.type], e), typeof r.icon == "function" && (r.icon = r.icon(t)), r.spinner ? (r.spinner === true && (r.spinner = wn), r.spinner = Xo(r.spinner)) : r.spinner = false, r.meta = { hasMedia: !!(r.spinner !== false || r.icon || r.avatar), hasText: vf(r.message) || vf(r.caption) }, r.position) {
    if (Xs.includes(r.position) === false) return Ur("wrong position", e);
  } else r.position = "bottom";
  if (zw.includes(r.timeout) === true) r.timeout = 5e3;
  else {
    const u = Number(r.timeout);
    if (isNaN(u) || u < 0) return Ur("wrong timeout", e);
    r.timeout = Number.isFinite(u) ? u : 0;
  }
  r.timeout === 0 ? r.progress = false : r.progress === true && (r.meta.progressClass = "q-notification__progress" + (r.progressClass ? ` ${r.progressClass}` : ""), r.meta.progressStyle = { animationDuration: `${r.timeout + 1e3}ms` });
  const a = (Array.isArray(e.actions) === true ? e.actions : []).concat(e.ignoreDefaults !== true && Array.isArray(vo.actions) === true ? vo.actions : []).concat(Array.isArray((_a3 = Gr[e.type]) == null ? void 0 : _a3.actions) === true ? Gr[e.type].actions : []), { closeBtn: o } = r;
  if (o && a.push({ label: typeof o == "string" ? o : t.lang.label.close }), r.actions = a.map(({ handler: u, noDismiss: c, ...s }) => ({ flat: true, ...s, onClick: typeof u == "function" ? () => {
    u(), c !== true && i();
  } : () => {
    i();
  } })), r.multiLine === void 0 && (r.multiLine = r.actions.length > 1), Object.assign(r.meta, { class: `q-notification row items-stretch q-notification--${r.multiLine === true ? "multi-line" : "standard"}` + (r.color !== void 0 ? ` bg-${r.color}` : "") + (r.textColor !== void 0 ? ` text-${r.textColor}` : "") + (r.classes !== void 0 ? ` ${r.classes}` : ""), wrapperClass: "q-notification__wrapper col relative-position border-radius-inherit " + (r.multiLine === true ? "column no-wrap justify-center" : "row items-center"), contentClass: "q-notification__content row items-center" + (r.multiLine === true ? "" : " col"), leftClass: r.meta.hasText === true ? "additional" : "single", attrs: { role: "alert", ...r.attrs } }), r.group === false ? (r.group = void 0, r.meta.group = void 0) : ((r.group === void 0 || r.group === true) && (r.group = [r.message, r.caption, r.multiline].concat(r.actions.map((u) => `${u.label}*${u.icon}`)).join("|")), r.meta.group = r.group + "|" + r.position), r.actions.length === 0 ? r.actions = void 0 : r.meta.actionsClass = "q-notification__actions row items-center " + (r.multiLine === true ? "justify-end" : "col-auto") + (r.meta.hasMedia === true ? " q-notification__actions--with-media" : ""), n !== void 0) {
    n.notif.meta.timer && (clearTimeout(n.notif.meta.timer), n.notif.meta.timer = void 0), r.meta.uid = n.notif.meta.uid;
    const u = Cn[r.position].value.indexOf(n.notif);
    Cn[r.position].value[u] = r;
  } else {
    const u = mo[r.meta.group];
    if (u === void 0) {
      if (r.meta.uid = Dw++, r.meta.badge = 1, ["left", "right", "center"].indexOf(r.position) !== -1) Cn[r.position].value.splice(Math.floor(Cn[r.position].value.length / 2), 0, r);
      else {
        const c = r.position.indexOf("top") !== -1 ? "unshift" : "push";
        Cn[r.position].value[c](r);
      }
      r.group !== void 0 && (mo[r.meta.group] = r);
    } else {
      if (u.meta.timer && (clearTimeout(u.meta.timer), u.meta.timer = void 0), r.badgePosition !== void 0) {
        if (Nw.includes(r.badgePosition) === false) return Ur("wrong badgePosition", e);
      } else r.badgePosition = `top-${r.position.indexOf("left") !== -1 ? "right" : "left"}`;
      r.meta.uid = u.meta.uid, r.meta.badge = u.meta.badge + 1, r.meta.badgeClass = `q-notification__badge q-notification__badge--${r.badgePosition}` + (r.badgeColor !== void 0 ? ` bg-${r.badgeColor}` : "") + (r.badgeTextColor !== void 0 ? ` text-${r.badgeTextColor}` : "") + (r.badgeClass ? ` ${r.badgeClass}` : "");
      const c = Cn[r.position].value.indexOf(u);
      Cn[r.position].value[c] = mo[r.meta.group] = r;
    }
  }
  const i = () => {
    Hw(r), l = void 0;
  };
  if (r.timeout > 0 && (r.meta.timer = setTimeout(() => {
    r.meta.timer = void 0, i();
  }, r.timeout + 1e3)), r.group !== void 0) return (u) => {
    u !== void 0 ? Ur("trying to update a grouped one which is forbidden", e) : i();
  };
  if (l = { dismiss: i, config: e, notif: r }, n !== void 0) {
    Object.assign(n, l);
    return;
  }
  return (u) => {
    if (l !== void 0) if (u === void 0) l.dismiss();
    else {
      const c = Object.assign({}, l.config, u, { group: false, position: r.position });
      vg(c, t, l);
    }
  };
}
function Hw(e) {
  e.meta.timer && (clearTimeout(e.meta.timer), e.meta.timer = void 0);
  const t = Cn[e.position].value.indexOf(e);
  if (t !== -1) {
    e.group !== void 0 && delete mo[e.meta.group];
    const n = fg["" + e.meta.uid];
    if (n) {
      const { width: l, height: r } = getComputedStyle(n);
      n.style.left = `${n.offsetLeft}px`, n.style.width = l, n.style.height = r;
    }
    Cn[e.position].value.splice(t, 1), typeof e.onDismiss == "function" && e.onDismiss();
  }
}
function vf(e) {
  return e != null && Iw.test(e) !== true;
}
function Ur(e, t) {
  return console.error(`Notify: ${e}`, t), false;
}
function jw() {
  return he({ name: "QNotifications", devtools: { hide: true }, setup() {
    return () => d("div", { class: "q-notifications" }, Xs.map((e) => d(Jb, { key: e, class: dg[e], tag: "div", name: `q-notification--${e}` }, () => Cn[e].value.map((t) => {
      const n = t.meta, l = [];
      if (n.hasMedia === true && (t.spinner !== false ? l.push(d(t.spinner, { class: "q-notification__spinner q-notification__spinner--" + n.leftClass, color: t.spinnerColor, size: t.spinnerSize })) : t.icon ? l.push(d(et, { class: "q-notification__icon q-notification__icon--" + n.leftClass, name: t.icon, color: t.iconColor, size: t.iconSize, role: "img" })) : t.avatar && l.push(d(Ou, { class: "q-notification__avatar q-notification__avatar--" + n.leftClass }, () => d("img", { src: t.avatar, "aria-hidden": "true" })))), n.hasText === true) {
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
        fg["" + n.uid] = a;
      }, key: n.uid, class: n.class, ...n.attrs }, [d("div", { class: n.wrapperClass }, r)]);
    }))));
  } });
}
var Uw = { setDefaults(e) {
  $t(e) === true && Object.assign(vo, e);
}, registerType(e, t) {
  $t(t) === true && (Gr[e] = t);
}, install({ $q: e, parentApp: t }) {
  if (e.notify = this.create = (n) => vg(n, e), e.notify.setDefaults = this.setDefaults, e.notify.registerType = this.registerType, e.config.notify !== void 0 && this.setDefaults(e.config.notify), this.__installed !== true) {
    Xs.forEach((l) => {
      Cn[l] = K([]);
      const r = ["left", "center", "right"].includes(l) === true ? "center" : l.indexOf("top") !== -1 ? "top" : "bottom", a = l.indexOf("left") !== -1 ? "start" : l.indexOf("right") !== -1 ? "end" : "center", o = ["left", "right"].includes(l) ? `items-${l === "left" ? "start" : "end"} justify-center` : l === "center" ? "flex-center" : `items-${a}`;
      dg[l] = `q-notifications__list q-notifications__list--${r} fixed column no-wrap ${o}`;
    });
    const n = La("q-notify");
    ui(jw(), t).mount(n);
  }
} };
function Qw(e) {
  return Lu(e) === true ? "__q_date|" + e.getTime() : ky(e) === true ? "__q_expr|" + e.source : typeof e == "number" ? "__q_numb|" + e : typeof e == "boolean" ? "__q_bool|" + (e ? "1" : "0") : typeof e == "string" ? "__q_strn|" + e : typeof e == "function" ? "__q_strn|" + e.toString() : e === Object(e) ? "__q_objt|" + JSON.stringify(e) : e;
}
function Kw(e) {
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
function mg() {
  const e = () => null;
  return { has: () => false, hasItem: () => false, getLength: () => 0, getItem: e, getIndex: e, getKey: e, getAll: () => {
  }, getAllKeys: () => [], set: xt, setItem: xt, remove: xt, removeItem: xt, clear: xt, isEmpty: () => true };
}
function hg(e) {
  const t = window[e + "Storage"], n = (o) => {
    const i = t.getItem(o);
    return i ? Kw(i) : null;
  }, l = (o) => t.getItem(o) !== null, r = (o, i) => {
    t.setItem(o, Qw(i));
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
var gg = De.has.webStorage === false ? mg() : hg("local"), Ww = { install({ $q: e }) {
  e.localStorage = gg;
} };
Object.assign(Ww, gg);
var bg = De.has.webStorage === false ? mg() : hg("session"), Yw = { install({ $q: e }) {
  e.sessionStorage = bg;
} };
Object.assign(Yw, bg);
var Xw = ["ok", "hide"];
Xh(Xw);
function yg() {
  return qt(sm);
}
var Gw = { version: "2.18.1", install: qy, lang: ii, iconSet: um };
function Zw(e, t) {
  const n = gs("router-view");
  return Xn(), Bl(n, { class: "view" });
}
const pg = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, r] of t) n[l] = r;
  return n;
}, Jw = {}, ex = pg(Jw, [["render", Zw]]), tx = "M10,2C8.18,2 6.47,2.5 5,3.35C8,5.08 10,8.3 10,12C10,15.7 8,18.92 5,20.65C6.47,21.5 8.18,22 10,22A10,10 0 0,0 20,12A10,10 0 0,0 10,2Z", nx = "M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z", lx = /* @__PURE__ */ Er({ __name: "Quasar", setup(e) {
  const t = yg();
  let n = K(false), l = K(false), r = K(true);
  const a = "production";
  return (o, i) => {
    const u = gs("router-view"), c = I0("ripple");
    return Xn(), Bl(Ie(F1), { view: "hHh LpR fFf" }, { default: Rt(() => [Je(Ie(S1), { class: "bg-primary text-white", elevated: "", id: "header" }, { default: Rt(() => [Je(Ie(Wd), null, { default: Rt(() => [Je(Ie(Ze), { dense: "", flat: "", round: "", icon: "menu", onClick: i[0] || (i[0] = (s) => pt(n) ? n.value = !Ie(n) : n = !Ie(n)) }), Je(Ie(Yd), null, { default: Rt(() => [Je(Ie(Ou), null, { default: Rt(() => i[10] || (i[10] = [Bt("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" }, null, -1)])), _: 1 }), i[11] || (i[11] = Fl("\xA0WebGL mtg"))]), _: 1 }), Ie(t).dark.isActive ? (Xn(), Bl(Ie(Ze), { key: 0, dense: "", flat: "", round: "", icon: Ie(nx), onClick: i[1] || (i[1] = (s) => Ie(t).dark.set(false)) }, null, 8, ["icon"])) : wc("", true), Ie(t).dark.isActive ? wc("", true) : (Xn(), Bl(Ie(Ze), { key: 1, dense: "", flat: "", round: "", icon: Ie(tx), onClick: i[2] || (i[2] = (s) => Ie(t).dark.set(true)) }, null, 8, ["icon"])), Je(Ie(Ze), { dense: "", flat: "", round: "", icon: "menu", onClick: i[3] || (i[3] = (s) => pt(l) ? l.value = !Ie(l) : l = !Ie(l)) })]), _: 1 })]), _: 1 }), Je(Ie(Md), { modelValue: Ie(n), "onUpdate:modelValue": i[8] || (i[8] = (s) => pt(n) ? n.value = s : n = s), side: "left", bordered: "", mini: Ie(r), overlay: "" }, { default: Rt(() => [Je(Ie(W1), { class: "fit" }, { default: Rt(() => [Je(Ie(Oh), { class: "menu-list padding" }, { default: Rt(() => [cn((Xn(), Bl(Ie(Tr), { clickable: "", onMouseover: i[4] || (i[4] = (s) => pt(r) ? r.value = false : r = false), onMouseout: i[5] || (i[5] = (s) => pt(r) ? r.value = true : r = true) }, { default: Rt(() => [Je(Ie(hn), { avatar: "" }, { default: Rt(() => [Je(Ie(et), { name: "inbox" })]), _: 1 }), Je(Ie(hn), null, { default: Rt(() => i[12] || (i[12] = [Fl("inbox")])), _: 1 })]), _: 1 })), [[c]]), cn((Xn(), Bl(Ie(Tr), { clickable: "", onMouseover: i[6] || (i[6] = (s) => pt(r) ? r.value = false : r = false), onMouseout: i[7] || (i[7] = (s) => pt(r) ? r.value = true : r = true) }, { default: Rt(() => [Je(Ie(hn), { avatar: "" }, { default: Rt(() => [Je(Ie(et), { name: "login" })]), _: 1 }), Je(Ie(hn), null, { default: Rt(() => i[13] || (i[13] = [Fl("login")])), _: 1 })]), _: 1 })), [[c]])]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["modelValue", "mini"]), Je(Ie(Md), { modelValue: Ie(l), "onUpdate:modelValue": i[9] || (i[9] = (s) => pt(l) ? l.value = s : l = s), side: "right", bordered: "", overlay: "" }, { default: Rt(() => i[14] || (i[14] = [Fl("right")])), _: 1 }, 8, ["modelValue"]), Je(Ie(j1), null, { default: Rt(() => [Je(u)]), _: 1 }), Je(Ie(x1), { class: "bg-grey-8 text-orange", elevated: "", id: "footer" }, { default: Rt(() => [Je(Ie(Wd), null, { default: Rt(() => [Je(Ie(Yd), { style: { "font-size": "1.0em" } }, { default: Rt(() => [Je(Ie(Ou), { class: "q-mr-sm", size: "sm" }, { default: Rt(() => i[15] || (i[15] = [Bt("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" }, null, -1)])), _: 1 }), Fl("\xA0vite / vue / quasar / wasm / webgl mtg \xA0mode: " + If(Ie(a)), 1)]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 });
  };
} });
/*!
* vue-router v4.5.0
* (c) 2024 Eduardo San Martin Morote
* @license MIT
*/
const sr = typeof document < "u";
function _g(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function rx(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && _g(e.default);
}
const ut = Object.assign;
function su(e, t) {
  const n = {};
  for (const l in t) {
    const r = t[l];
    n[l] = An(r) ? r.map(e) : e(r);
  }
  return n;
}
const da = () => {
}, An = Array.isArray, wg = /#/g, ax = /&/g, ox = /\//g, ix = /=/g, ux = /\?/g, xg = /\+/g, sx = /%5B/g, cx = /%5D/g, Sg = /%5E/g, dx = /%60/g, Cg = /%7B/g, fx = /%7C/g, kg = /%7D/g, vx = /%20/g;
function Gs(e) {
  return encodeURI("" + e).replace(fx, "|").replace(sx, "[").replace(cx, "]");
}
function mx(e) {
  return Gs(e).replace(Cg, "{").replace(kg, "}").replace(Sg, "^");
}
function Xu(e) {
  return Gs(e).replace(xg, "%2B").replace(vx, "+").replace(wg, "%23").replace(ax, "%26").replace(dx, "`").replace(Cg, "{").replace(kg, "}").replace(Sg, "^");
}
function hx(e) {
  return Xu(e).replace(ix, "%3D");
}
function gx(e) {
  return Gs(e).replace(wg, "%23").replace(ux, "%3F");
}
function bx(e) {
  return e == null ? "" : gx(e).replace(ox, "%2F");
}
function Ta(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const yx = /\/$/, px = (e) => e.replace(yx, "");
function cu(e, t, n = "/") {
  let l, r = {}, a = "", o = "";
  const i = t.indexOf("#");
  let u = t.indexOf("?");
  return i < u && i >= 0 && (u = -1), u > -1 && (l = t.slice(0, u), a = t.slice(u + 1, i > -1 ? i : t.length), r = e(a)), i > -1 && (l = l || t.slice(0, i), o = t.slice(i, t.length)), l = Sx(l ?? t, n), { fullPath: l + (a && "?") + a + o, path: l, query: r, hash: Ta(o) };
}
function _x(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function mf(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function wx(e, t, n) {
  const l = t.matched.length - 1, r = n.matched.length - 1;
  return l > -1 && l === r && qr(t.matched[l], n.matched[r]) && Tg(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function qr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Tg(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (const n in e) if (!xx(e[n], t[n])) return false;
  return true;
}
function xx(e, t) {
  return An(e) ? hf(e, t) : An(t) ? hf(t, e) : e === t;
}
function hf(e, t) {
  return An(t) ? e.length === t.length && e.every((n, l) => n === t[l]) : e.length === 1 && e[0] === t;
}
function Sx(e, t) {
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
var qa;
(function(e) {
  e.pop = "pop", e.push = "push";
})(qa || (qa = {}));
var fa;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(fa || (fa = {}));
function Cx(e) {
  if (!e) if (sr) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), px(e);
}
const kx = /^[^#]+#/;
function Tx(e, t) {
  return e.replace(kx, "#") + t;
}
function qx(e, t) {
  const n = document.documentElement.getBoundingClientRect(), l = e.getBoundingClientRect();
  return { behavior: t.behavior, left: l.left - n.left - (t.left || 0), top: l.top - n.top - (t.top || 0) };
}
const _i = () => ({ left: window.scrollX, top: window.scrollY });
function Mx(e) {
  let t;
  if ("el" in e) {
    const n = e.el, l = typeof n == "string" && n.startsWith("#"), r = typeof n == "string" ? l ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!r) return;
    t = qx(r, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function gf(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Gu = /* @__PURE__ */ new Map();
function Ex(e, t) {
  Gu.set(e, t);
}
function Rx(e) {
  const t = Gu.get(e);
  return Gu.delete(e), t;
}
let Ax = () => location.protocol + "//" + location.host;
function qg(e, t) {
  const { pathname: n, search: l, hash: r } = t, a = e.indexOf("#");
  if (a > -1) {
    let i = r.includes(e.slice(a)) ? e.slice(a).length : 1, u = r.slice(i);
    return u[0] !== "/" && (u = "/" + u), mf(u, "");
  }
  return mf(n, e) + l + r;
}
function Px(e, t, n, l) {
  let r = [], a = [], o = null;
  const i = ({ state: h }) => {
    const m = qg(e, location), g = n.value, w = t.value;
    let x = 0;
    if (h) {
      if (n.value = m, t.value = h, o && o === g) {
        o = null;
        return;
      }
      x = w ? h.position - w.position : 0;
    } else l(m);
    r.forEach((T) => {
      T(n.value, g, { delta: x, type: qa.pop, direction: x ? x > 0 ? fa.forward : fa.back : fa.unknown });
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
    h.state && h.replaceState(ut({}, h.state, { scroll: _i() }), "");
  }
  function f() {
    for (const h of a) h();
    a = [], window.removeEventListener("popstate", i), window.removeEventListener("beforeunload", s);
  }
  return window.addEventListener("popstate", i), window.addEventListener("beforeunload", s, { passive: true }), { pauseListeners: u, listen: c, destroy: f };
}
function bf(e, t, n, l = false, r = false) {
  return { back: e, current: t, forward: n, replaced: l, position: window.history.length, scroll: r ? _i() : null };
}
function $x(e) {
  const { history: t, location: n } = window, l = { value: qg(e, n) }, r = { value: t.state };
  r.value || a(l.value, { back: null, current: l.value, forward: null, position: t.length - 1, replaced: true, scroll: null }, true);
  function a(u, c, s) {
    const f = e.indexOf("#"), h = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + u : Ax() + e + u;
    try {
      t[s ? "replaceState" : "pushState"](c, "", h), r.value = c;
    } catch (m) {
      console.error(m), n[s ? "replace" : "assign"](h);
    }
  }
  function o(u, c) {
    const s = ut({}, t.state, bf(r.value.back, u, r.value.forward, true), c, { position: r.value.position });
    a(u, s, true), l.value = u;
  }
  function i(u, c) {
    const s = ut({}, r.value, t.state, { forward: u, scroll: _i() });
    a(s.current, s, true);
    const f = ut({}, bf(l.value, u, null), { position: s.position + 1 }, c);
    a(u, f, false), l.value = u;
  }
  return { location: l, state: r, push: i, replace: o };
}
function Lx(e) {
  e = Cx(e);
  const t = $x(e), n = Px(e, t.state, t.location, t.replace);
  function l(a, o = true) {
    o || n.pauseListeners(), history.go(a);
  }
  const r = ut({ location: "", base: e, go: l, createHref: Tx.bind(null, e) }, t, n);
  return Object.defineProperty(r, "location", { enumerable: true, get: () => t.location.value }), Object.defineProperty(r, "state", { enumerable: true, get: () => t.state.value }), r;
}
function Bx(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), Lx(e);
}
function Fx(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Mg(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Eg = Symbol("");
var yf;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(yf || (yf = {}));
function Mr(e, t) {
  return ut(new Error(), { type: e, [Eg]: true }, t);
}
function jn(e, t) {
  return e instanceof Error && Eg in e && (t == null || !!(e.type & t));
}
const pf = "[^/]+?", Ox = { sensitive: false, strict: false, start: true, end: true }, Vx = /[.+*?^${}()[\]/\\]/g;
function Dx(e, t) {
  const n = ut({}, Ox, t), l = [];
  let r = n.start ? "^" : "";
  const a = [];
  for (const c of e) {
    const s = c.length ? [] : [90];
    n.strict && !c.length && (r += "/");
    for (let f = 0; f < c.length; f++) {
      const h = c[f];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0) f || (r += "/"), r += h.value.replace(Vx, "\\$&"), m += 40;
      else if (h.type === 1) {
        const { value: g, repeatable: w, optional: x, regexp: T } = h;
        a.push({ name: g, repeatable: w, optional: x });
        const p = T || pf;
        if (p !== pf) {
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
        if (An(T) && !w) throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
        const p = An(T) ? T.join("/") : T;
        if (!p) if (x) h.length < 2 && (s.endsWith("/") ? s = s.slice(0, -1) : f = true);
        else throw new Error(`Missing required param "${g}"`);
        s += p;
      }
    }
    return s || "/";
  }
  return { re: o, score: l, keys: a, parse: i, stringify: u };
}
function Ix(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const l = t[n] - e[n];
    if (l) return l;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function Rg(e, t) {
  let n = 0;
  const l = e.score, r = t.score;
  for (; n < l.length && n < r.length; ) {
    const a = Ix(l[n], r[n]);
    if (a) return a;
    n++;
  }
  if (Math.abs(r.length - l.length) === 1) {
    if (_f(l)) return 1;
    if (_f(r)) return -1;
  }
  return r.length - l.length;
}
function _f(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const zx = { type: 0, value: "" }, Nx = /[a-zA-Z0-9_]/;
function Hx(e) {
  if (!e) return [[]];
  if (e === "/") return [[zx]];
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
        u === "(" ? n = 2 : Nx.test(u) ? h() : (f(), n = 0, u !== "*" && u !== "?" && u !== "+" && i--);
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
function jx(e, t, n) {
  const l = Dx(Hx(e.path), n), r = ut(l, { record: e, parent: t, children: [], alias: [] });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function Ux(e, t) {
  const n = [], l = /* @__PURE__ */ new Map();
  t = Cf({ strict: false, end: true, sensitive: false }, t);
  function r(f) {
    return l.get(f);
  }
  function a(f, h, m) {
    const g = !m, w = xf(f);
    w.aliasOf = m && m.record;
    const x = Cf(t, f), T = [w];
    if ("alias" in f) {
      const b = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const C of b) T.push(xf(ut({}, w, { components: m ? m.record.components : w.components, path: C, aliasOf: m ? m.record : w })));
    }
    let p, y;
    for (const b of T) {
      const { path: C } = b;
      if (h && C[0] !== "/") {
        const $ = h.record.path, O = $[$.length - 1] === "/" ? "" : "/";
        b.path = h.record.path + (C && O + C);
      }
      if (p = jx(b, h, x), m ? m.alias.push(p) : (y = y || p, y !== p && y.alias.push(p), g && f.name && !Sf(p) && o(f.name)), Ag(p) && u(p), w.children) {
        const $ = w.children;
        for (let O = 0; O < $.length; O++) a($[O], p, m && m.children[O]);
      }
      m = m || p;
    }
    return y ? () => {
      o(y);
    } : da;
  }
  function o(f) {
    if (Mg(f)) {
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
    const h = Wx(f, n);
    n.splice(h, 0, f), f.record.name && !Sf(f) && l.set(f.record.name, f);
  }
  function c(f, h) {
    let m, g = {}, w, x;
    if ("name" in f && f.name) {
      if (m = l.get(f.name), !m) throw Mr(1, { location: f });
      x = m.record.name, g = ut(wf(h.params, m.keys.filter((y) => !y.optional).concat(m.parent ? m.parent.keys.filter((y) => y.optional) : []).map((y) => y.name)), f.params && wf(f.params, m.keys.map((y) => y.name))), w = m.stringify(g);
    } else if (f.path != null) w = f.path, m = n.find((y) => y.re.test(w)), m && (g = m.parse(w), x = m.record.name);
    else {
      if (m = h.name ? l.get(h.name) : n.find((y) => y.re.test(h.path)), !m) throw Mr(1, { location: f, currentLocation: h });
      x = m.record.name, g = ut({}, h.params, f.params), w = m.stringify(g);
    }
    const T = [];
    let p = m;
    for (; p; ) T.unshift(p.record), p = p.parent;
    return { name: x, path: w, params: g, matched: T, meta: Kx(T) };
  }
  e.forEach((f) => a(f));
  function s() {
    n.length = 0, l.clear();
  }
  return { addRoute: a, resolve: c, removeRoute: o, clearRoutes: s, getRoutes: i, getRecordMatcher: r };
}
function wf(e, t) {
  const n = {};
  for (const l of t) l in e && (n[l] = e[l]);
  return n;
}
function xf(e) {
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: Qx(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Qx(e) {
  const t = {}, n = e.props || false;
  if ("component" in e) t.default = n;
  else for (const l in e.components) t[l] = typeof n == "object" ? n[l] : n;
  return t;
}
function Sf(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function Kx(e) {
  return e.reduce((t, n) => ut(t, n.meta), {});
}
function Cf(e, t) {
  const n = {};
  for (const l in e) n[l] = l in t ? t[l] : e[l];
  return n;
}
function Wx(e, t) {
  let n = 0, l = t.length;
  for (; n !== l; ) {
    const a = n + l >> 1;
    Rg(e, t[a]) < 0 ? l = a : n = a + 1;
  }
  const r = Yx(e);
  return r && (l = t.lastIndexOf(r, l - 1)), l;
}
function Yx(e) {
  let t = e;
  for (; t = t.parent; ) if (Ag(t) && Rg(e, t) === 0) return t;
}
function Ag({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Xx(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const l = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < l.length; ++r) {
    const a = l[r].replace(xg, " "), o = a.indexOf("="), i = Ta(o < 0 ? a : a.slice(0, o)), u = o < 0 ? null : Ta(a.slice(o + 1));
    if (i in t) {
      let c = t[i];
      An(c) || (c = t[i] = [c]), c.push(u);
    } else t[i] = u;
  }
  return t;
}
function kf(e) {
  let t = "";
  for (let n in e) {
    const l = e[n];
    if (n = hx(n), l == null) {
      l !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (An(l) ? l.map((a) => a && Xu(a)) : [l && Xu(l)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function Gx(e) {
  const t = {};
  for (const n in e) {
    const l = e[n];
    l !== void 0 && (t[n] = An(l) ? l.map((r) => r == null ? null : "" + r) : l == null ? l : "" + l);
  }
  return t;
}
const Zx = Symbol(""), Tf = Symbol(""), Zs = Symbol(""), Pg = Symbol(""), Zu = Symbol("");
function Qr() {
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
function vl(e, t, n, l, r, a = (o) => o()) {
  const o = l && (l.enterCallbacks[r] = l.enterCallbacks[r] || []);
  return () => new Promise((i, u) => {
    const c = (h) => {
      h === false ? u(Mr(4, { from: n, to: t })) : h instanceof Error ? u(h) : Fx(h) ? u(Mr(2, { from: t, to: h })) : (o && l.enterCallbacks[r] === o && typeof h == "function" && o.push(h), i());
    }, s = a(() => e.call(l && l.instances[r], t, n, c));
    let f = Promise.resolve(s);
    e.length < 3 && (f = f.then(c)), f.catch((h) => u(h));
  });
}
function du(e, t, n, l, r = (a) => a()) {
  const a = [];
  for (const o of e) for (const i in o.components) {
    let u = o.components[i];
    if (!(t !== "beforeRouteEnter" && !o.instances[i])) if (_g(u)) {
      const s = (u.__vccOpts || u)[t];
      s && a.push(vl(s, n, l, o, i, r));
    } else {
      let c = u();
      a.push(() => c.then((s) => {
        if (!s) throw new Error(`Couldn't resolve component "${i}" at "${o.path}"`);
        const f = rx(s) ? s.default : s;
        o.mods[i] = s, o.components[i] = f;
        const m = (f.__vccOpts || f)[t];
        return m && vl(m, n, l, o, i, r)();
      }));
    }
  }
  return a;
}
function qf(e) {
  const t = qt(Zs), n = qt(Pg), l = v(() => {
    const u = Ie(e.to);
    return t.resolve(u);
  }), r = v(() => {
    const { matched: u } = l.value, { length: c } = u, s = u[c - 1], f = n.matched;
    if (!s || !f.length) return -1;
    const h = f.findIndex(qr.bind(null, s));
    if (h > -1) return h;
    const m = Mf(u[c - 2]);
    return c > 1 && Mf(s) === m && f[f.length - 1].path !== m ? f.findIndex(qr.bind(null, u[c - 2])) : h;
  }), a = v(() => r.value > -1 && lS(n.params, l.value.params)), o = v(() => r.value > -1 && r.value === n.matched.length - 1 && Tg(n.params, l.value.params));
  function i(u = {}) {
    if (nS(u)) {
      const c = t[Ie(e.replace) ? "replace" : "push"](Ie(e.to)).catch(da);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c;
    }
    return Promise.resolve();
  }
  return { route: l, href: v(() => l.value.href), isActive: a, isExactActive: o, navigate: i };
}
function Jx(e) {
  return e.length === 1 ? e[0] : e;
}
const eS = /* @__PURE__ */ Er({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" } }, useLink: qf, setup(e, { slots: t }) {
  const n = Fn(qf(e)), { options: l } = qt(Zs), r = v(() => ({ [Ef(e.activeClass, l.linkActiveClass, "router-link-active")]: n.isActive, [Ef(e.exactActiveClass, l.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive }));
  return () => {
    const a = t.default && Jx(t.default(n));
    return e.custom ? a : d("a", { "aria-current": n.isExactActive ? e.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: r.value }, a);
  };
} }), tS = eS;
function nS(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), true;
  }
}
function lS(e, t) {
  for (const n in t) {
    const l = t[n], r = e[n];
    if (typeof l == "string") {
      if (l !== r) return false;
    } else if (!An(r) || r.length !== l.length || l.some((a, o) => a !== r[o])) return false;
  }
  return true;
}
function Mf(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Ef = (e, t, n) => e ?? t ?? n, rS = /* @__PURE__ */ Er({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: n }) {
  const l = qt(Zu), r = v(() => e.route || l.value), a = qt(Tf, 0), o = v(() => {
    let c = Ie(a);
    const { matched: s } = r.value;
    let f;
    for (; (f = s[c]) && !f.components; ) c++;
    return c;
  }), i = v(() => r.value.matched[o.value]);
  gn(Tf, v(() => o.value + 1)), gn(Zx, i), gn(Zu, r);
  const u = K();
  return ge(() => [u.value, i.value, e.name], ([c, s, f], [h, m, g]) => {
    s && (s.instances[f] = c, m && m !== s && c && c === h && (s.leaveGuards.size || (s.leaveGuards = m.leaveGuards), s.updateGuards.size || (s.updateGuards = m.updateGuards))), c && s && (!m || !qr(s, m) || !h) && (s.enterCallbacks[f] || []).forEach((w) => w(c));
  }, { flush: "post" }), () => {
    const c = r.value, s = e.name, f = i.value, h = f && f.components[s];
    if (!h) return Rf(n.default, { Component: h, route: c });
    const m = f.props[s], g = m ? m === true ? c.params : typeof m == "function" ? m(c) : m : null, x = d(h, ut({}, g, t, { onVnodeUnmounted: (T) => {
      T.component.isUnmounted && (f.instances[s] = null);
    }, ref: u }));
    return Rf(n.default, { Component: x, route: c }) || x;
  };
} });
function Rf(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const aS = rS;
function oS(e) {
  const t = Ux(e.routes, e), n = e.parseQuery || Xx, l = e.stringifyQuery || kf, r = e.history, a = Qr(), o = Qr(), i = Qr(), u = y0(ol);
  let c = ol;
  sr && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const s = su.bind(null, (R) => "" + R), f = su.bind(null, bx), h = su.bind(null, Ta);
  function m(R, G) {
    let V, ne;
    return Mg(R) ? (V = t.getRecordMatcher(R), ne = G) : ne = R, t.addRoute(ne, V);
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
      const I = cu(n, R, G.path), ee = t.resolve({ path: I.path }, G), le = r.createHref(I.fullPath);
      return ut(I, ee, { params: h(ee.params), hash: Ta(I.hash), redirectedFrom: void 0, href: le });
    }
    let V;
    if (R.path != null) V = ut({}, R, { path: cu(n, R.path, G.path).path });
    else {
      const I = ut({}, R.params);
      for (const ee in I) I[ee] == null && delete I[ee];
      V = ut({}, R, { params: f(I) }), G.params = f(G.params);
    }
    const ne = t.resolve(V, G), be = R.hash || "";
    ne.params = s(h(ne.params));
    const S = _x(l, ut({}, R, { hash: mx(be), path: ne.path })), M = r.createHref(S);
    return ut({ fullPath: S, hash: be, query: l === kf ? Gx(R.query) : R.query || {} }, ne, { redirectedFrom: void 0, href: M });
  }
  function p(R) {
    return typeof R == "string" ? cu(n, R, u.value.path) : ut({}, R);
  }
  function y(R, G) {
    if (c !== R) return Mr(8, { from: G, to: R });
  }
  function b(R) {
    return O(R);
  }
  function C(R) {
    return b(ut(p(R), { replace: true }));
  }
  function $(R) {
    const G = R.matched[R.matched.length - 1];
    if (G && G.redirect) {
      const { redirect: V } = G;
      let ne = typeof V == "function" ? V(R) : V;
      return typeof ne == "string" && (ne = ne.includes("?") || ne.includes("#") ? ne = p(ne) : { path: ne }, ne.params = {}), ut({ query: R.query, hash: R.hash, params: ne.path != null ? {} : R.params }, ne);
    }
  }
  function O(R, G) {
    const V = c = T(R), ne = u.value, be = R.state, S = R.force, M = R.replace === true, I = $(V);
    if (I) return O(ut(p(I), { state: typeof I == "object" ? ut({}, be, I.state) : be, force: S, replace: M }), G || V);
    const ee = V;
    ee.redirectedFrom = G;
    let le;
    return !S && wx(l, ne, V) && (le = Mr(16, { to: ee, from: ne }), Y(ne, ne, true, false)), (le ? Promise.resolve(le) : B(ee, ne)).catch((P) => jn(P) ? jn(P, 2) ? P : pe(P) : X(P, ee, ne)).then((P) => {
      if (P) {
        if (jn(P, 2)) return O(ut({ replace: M }, p(P.to), { state: typeof P.to == "object" ? ut({}, be, P.to.state) : be, force: S }), G || ee);
      } else P = q(ee, ne, true, M, be);
      return N(ee, ne, P), P;
    });
  }
  function H(R, G) {
    const V = y(R, G);
    return V ? Promise.reject(V) : Promise.resolve();
  }
  function L(R) {
    const G = F.values().next().value;
    return G && typeof G.runWithContext == "function" ? G.runWithContext(R) : R();
  }
  function B(R, G) {
    let V;
    const [ne, be, S] = iS(R, G);
    V = du(ne.reverse(), "beforeRouteLeave", R, G);
    for (const I of ne) I.leaveGuards.forEach((ee) => {
      V.push(vl(ee, R, G));
    });
    const M = H.bind(null, R, G);
    return V.push(M), A(V).then(() => {
      V = [];
      for (const I of a.list()) V.push(vl(I, R, G));
      return V.push(M), A(V);
    }).then(() => {
      V = du(be, "beforeRouteUpdate", R, G);
      for (const I of be) I.updateGuards.forEach((ee) => {
        V.push(vl(ee, R, G));
      });
      return V.push(M), A(V);
    }).then(() => {
      V = [];
      for (const I of S) if (I.beforeEnter) if (An(I.beforeEnter)) for (const ee of I.beforeEnter) V.push(vl(ee, R, G));
      else V.push(vl(I.beforeEnter, R, G));
      return V.push(M), A(V);
    }).then(() => (R.matched.forEach((I) => I.enterCallbacks = {}), V = du(S, "beforeRouteEnter", R, G, L), V.push(M), A(V))).then(() => {
      V = [];
      for (const I of o.list()) V.push(vl(I, R, G));
      return V.push(M), A(V);
    }).catch((I) => jn(I, 8) ? I : Promise.reject(I));
  }
  function N(R, G, V) {
    i.list().forEach((ne) => L(() => ne(R, G, V)));
  }
  function q(R, G, V, ne, be) {
    const S = y(R, G);
    if (S) return S;
    const M = G === ol, I = sr ? history.state : {};
    V && (ne || M ? r.replace(R.fullPath, ut({ scroll: M && I && I.scroll }, be)) : r.push(R.fullPath, be)), u.value = R, Y(R, G, V, M), pe();
  }
  let E;
  function k() {
    E || (E = r.listen((R, G, V) => {
      if (!fe.listening) return;
      const ne = T(R), be = $(ne);
      if (be) {
        O(ut(be, { replace: true, force: true }), ne).catch(da);
        return;
      }
      c = ne;
      const S = u.value;
      sr && Ex(gf(S.fullPath, V.delta), _i()), B(ne, S).catch((M) => jn(M, 12) ? M : jn(M, 2) ? (O(ut(p(M.to), { force: true }), ne).then((I) => {
        jn(I, 20) && !V.delta && V.type === qa.pop && r.go(-1, false);
      }).catch(da), Promise.reject()) : (V.delta && r.go(-V.delta, false), X(M, ne, S))).then((M) => {
        M = M || q(ne, S, false), M && (V.delta && !jn(M, 8) ? r.go(-V.delta, false) : V.type === qa.pop && jn(M, 20) && r.go(-1, false)), N(ne, S, M);
      }).catch(da);
    }));
  }
  let j = Qr(), U = Qr(), W;
  function X(R, G, V) {
    pe(R);
    const ne = U.list();
    return ne.length ? ne.forEach((be) => be(R, G, V)) : console.error(R), Promise.reject(R);
  }
  function ae() {
    return W && u.value !== ol ? Promise.resolve() : new Promise((R, G) => {
      j.add([R, G]);
    });
  }
  function pe(R) {
    return W || (W = !R, k(), j.list().forEach(([G, V]) => R ? V(R) : G()), j.reset()), R;
  }
  function Y(R, G, V, ne) {
    const { scrollBehavior: be } = e;
    if (!sr || !be) return Promise.resolve();
    const S = !V && Rx(gf(R.fullPath, 0)) || (ne || !V) && history.state && history.state.scroll || null;
    return We().then(() => be(R, G, S)).then((M) => M && Mx(M)).catch((M) => X(M, R, G));
  }
  const _ = (R) => r.go(R);
  let D;
  const F = /* @__PURE__ */ new Set(), fe = { currentRoute: u, listening: true, addRoute: m, removeRoute: g, clearRoutes: t.clearRoutes, hasRoute: x, getRoutes: w, resolve: T, options: e, push: b, replace: C, go: _, back: () => _(-1), forward: () => _(1), beforeEach: a.add, beforeResolve: o.add, afterEach: i.add, onError: U.add, isReady: ae, install(R) {
    const G = this;
    R.component("RouterLink", tS), R.component("RouterView", aS), R.config.globalProperties.$router = G, Object.defineProperty(R.config.globalProperties, "$route", { enumerable: true, get: () => Ie(u) }), sr && !D && u.value === ol && (D = true, b(r.location).catch((be) => {
    }));
    const V = {};
    for (const be in ol) Object.defineProperty(V, be, { get: () => u.value[be], enumerable: true });
    R.provide(Zs, G), R.provide(Pg, ds(V)), R.provide(Zu, u);
    const ne = R.unmount;
    F.add(R), R.unmount = function() {
      F.delete(R), F.size < 1 && (c = ol, E && E(), E = null, u.value = ol, D = false, W = false), ne();
    };
  } };
  function A(R) {
    return R.reduce((G, V) => G.then(() => L(V)), Promise.resolve());
  }
  return fe;
}
function iS(e, t) {
  const n = [], l = [], r = [], a = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < a; o++) {
    const i = t.matched[o];
    i && (e.matched.find((c) => qr(c, i)) ? l.push(i) : n.push(i));
    const u = e.matched[o];
    u && (t.matched.find((c) => qr(c, u)) || r.push(u));
  }
  return [n, l, r];
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
function fu(e, t) {
  return e = e >>> 0, $g.decode(ho().subarray(e, e + t));
}
function uS(e) {
  const t = en.__externref_table_alloc();
  return en.__wbindgen_export_2.set(t, e), t;
}
function sS(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    const l = uS(n);
    en.__wbindgen_exn_store(l);
  }
}
function cS(e, t) {
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
let Ju = 0;
const go = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, dS = typeof go.encodeInto == "function" ? function(e, t) {
  return go.encodeInto(e, t);
} : function(e, t) {
  const n = go.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function fS(e, t, n) {
  if (typeof e != "string") throw new Error(`expected a string argument, found ${typeof e}`);
  if (n === void 0) {
    const i = go.encode(e), u = t(i.length, 1) >>> 0;
    return ho().subarray(u, u + i.length).set(i), Ju = i.length, u;
  }
  let l = e.length, r = t(l, 1) >>> 0;
  const a = ho();
  let o = 0;
  for (; o < l; o++) {
    const i = e.charCodeAt(o);
    if (i > 127) break;
    a[r + o] = i;
  }
  if (o !== l) {
    o !== 0 && (e = e.slice(o)), r = n(r, l, l = o + e.length * 3, 1) >>> 0;
    const i = ho().subarray(r + o, r + l), u = dS(e, i);
    if (u.read !== e.length) throw new Error("failed to pass whole string");
    o += u.written, r = n(r, l, o, 1) >>> 0;
  }
  return Ju = o, r;
}
function vS(e) {
  const t = en.__wbindgen_export_2.get(e);
  return en.__externref_table_dealloc(e), t;
}
function mS(e) {
  const t = fS(e, en.__wbindgen_malloc, en.__wbindgen_realloc), n = Ju, l = en.mtg(t, n);
  if (l[1]) throw vS(l[0]);
}
async function hS(e, t) {
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
function gS() {
  const e = {};
  return e.wbg = {}, e.wbg.__wbg_cb_d0b9dcdfbbb21123 = function() {
    return sS(function(t, n) {
      cb(fu(t, n));
    }, arguments);
  }, e.wbg.__wbg_log_6eff8ac810e5dae1 = function() {
    return cS(function(t, n) {
      log(fu(t, n));
    }, arguments);
  }, e.wbg.__wbindgen_init_externref_table = function() {
    const t = en.__wbindgen_export_2, n = t.grow(4);
    t.set(0, void 0), t.set(n + 0, void 0), t.set(n + 1, null), t.set(n + 2, true), t.set(n + 3, false);
  }, e.wbg.__wbindgen_throw = function(t, n) {
    throw new Error(fu(t, n));
  }, e;
}
function bS(e, t) {
  return en = e.exports, Lg.__wbindgen_wasm_module = t, Zr = null, en.__wbindgen_start(), en;
}
async function Lg(e) {
  if (en !== void 0) return en;
  typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("" + new URL("wasm_rust_mtg_bg-BXDIYXLZ.wasm", import.meta.url).href, import.meta.url));
  const t = gS();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: l } = await hS(await e, t);
  return bS(n, l);
}
const yS = /* @__PURE__ */ Er({ __name: "HelloWorld", setup(e) {
  const t = () => {
    mS("test");
  };
  return (n, l) => {
    const r = gs("router-view");
    return Xn(), zv(on, null, [Je(Ie(Ze), { class: "q-ma-lg", color: "primary", onClick: t }, { default: Rt(() => l[0] || (l[0] = [Fl("test")])), _: 1 }), Je(r)], 64);
  };
} }), pS = pg(yS, [["__scopeId", "data-v-17fee452"]]);
var _S = 1e-6, Af = typeof Float32Array < "u" ? Float32Array : Array;
Math.hypot || (Math.hypot = function() {
  for (var e = 0, t = arguments.length; t--; ) e += arguments[t] * arguments[t];
  return Math.sqrt(e);
});
function vu() {
  var e = new Af(16);
  return Af != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e;
}
function wS(e, t) {
  if (e === t) {
    var n = t[1], l = t[2], r = t[3], a = t[6], o = t[7], i = t[11];
    e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = n, e[6] = t[9], e[7] = t[13], e[8] = l, e[9] = a, e[11] = t[14], e[12] = r, e[13] = o, e[14] = i;
  } else e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15];
  return e;
}
function xS(e, t) {
  var n = t[0], l = t[1], r = t[2], a = t[3], o = t[4], i = t[5], u = t[6], c = t[7], s = t[8], f = t[9], h = t[10], m = t[11], g = t[12], w = t[13], x = t[14], T = t[15], p = n * i - l * o, y = n * u - r * o, b = n * c - a * o, C = l * u - r * i, $ = l * c - a * i, O = r * c - a * u, H = s * w - f * g, L = s * x - h * g, B = s * T - m * g, N = f * x - h * w, q = f * T - m * w, E = h * T - m * x, k = p * E - y * q + b * N + C * B - $ * L + O * H;
  return k ? (k = 1 / k, e[0] = (i * E - u * q + c * N) * k, e[1] = (r * q - l * E - a * N) * k, e[2] = (w * O - x * $ + T * C) * k, e[3] = (h * $ - f * O - m * C) * k, e[4] = (u * B - o * E - c * L) * k, e[5] = (n * E - r * B + a * L) * k, e[6] = (x * b - g * O - T * y) * k, e[7] = (s * O - h * b + m * y) * k, e[8] = (o * q - i * B + c * H) * k, e[9] = (l * B - n * q - a * H) * k, e[10] = (g * $ - w * b + T * p) * k, e[11] = (f * b - s * $ - m * p) * k, e[12] = (i * L - o * N - u * H) * k, e[13] = (n * N - l * L + r * H) * k, e[14] = (w * y - g * C - x * p) * k, e[15] = (s * C - f * y + h * p) * k, e) : null;
}
function mu(e, t, n) {
  var l = n[0], r = n[1], a = n[2], o, i, u, c, s, f, h, m, g, w, x, T;
  return t === e ? (e[12] = t[0] * l + t[4] * r + t[8] * a + t[12], e[13] = t[1] * l + t[5] * r + t[9] * a + t[13], e[14] = t[2] * l + t[6] * r + t[10] * a + t[14], e[15] = t[3] * l + t[7] * r + t[11] * a + t[15]) : (o = t[0], i = t[1], u = t[2], c = t[3], s = t[4], f = t[5], h = t[6], m = t[7], g = t[8], w = t[9], x = t[10], T = t[11], e[0] = o, e[1] = i, e[2] = u, e[3] = c, e[4] = s, e[5] = f, e[6] = h, e[7] = m, e[8] = g, e[9] = w, e[10] = x, e[11] = T, e[12] = o * l + s * r + g * a + t[12], e[13] = i * l + f * r + w * a + t[13], e[14] = u * l + h * r + x * a + t[14], e[15] = c * l + m * r + T * a + t[15]), e;
}
function hu(e, t, n, l) {
  var r = l[0], a = l[1], o = l[2], i = Math.hypot(r, a, o), u, c, s, f, h, m, g, w, x, T, p, y, b, C, $, O, H, L, B, N, q, E, k, j;
  return i < _S ? null : (i = 1 / i, r *= i, a *= i, o *= i, u = Math.sin(n), c = Math.cos(n), s = 1 - c, f = t[0], h = t[1], m = t[2], g = t[3], w = t[4], x = t[5], T = t[6], p = t[7], y = t[8], b = t[9], C = t[10], $ = t[11], O = r * r * s + c, H = a * r * s + o * u, L = o * r * s - a * u, B = r * a * s - o * u, N = a * a * s + c, q = o * a * s + r * u, E = r * o * s + a * u, k = a * o * s - r * u, j = o * o * s + c, e[0] = f * O + w * H + y * L, e[1] = h * O + x * H + b * L, e[2] = m * O + T * H + C * L, e[3] = g * O + p * H + $ * L, e[4] = f * B + w * N + y * q, e[5] = h * B + x * N + b * q, e[6] = m * B + T * N + C * q, e[7] = g * B + p * N + $ * q, e[8] = f * E + w * k + y * j, e[9] = h * E + x * k + b * j, e[10] = m * E + T * k + C * j, e[11] = g * E + p * k + $ * j, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e);
}
function SS(e, t, n, l, r) {
  var a = 1 / Math.tan(t / 2), o;
  return e[0] = a / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, r != null && r !== 1 / 0 ? (o = 1 / (l - r), e[10] = (r + l) * o, e[14] = 2 * r * l * o) : (e[10] = -1, e[14] = -2 * l), e;
}
var CS = SS;
function cr(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === true;
}
function va(e) {
  return function t(n) {
    return arguments.length === 0 || cr(n) ? t : e.apply(this, arguments);
  };
}
function kS(e) {
  return function t(n, l) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return cr(n) ? t : va(function(r) {
          return e(n, r);
        });
      default:
        return cr(n) && cr(l) ? t : cr(n) ? va(function(r) {
          return e(r, l);
        }) : cr(l) ? va(function(r) {
          return e(n, r);
        }) : e(n, l);
    }
  };
}
const TS = Array.isArray || function(t) {
  return t != null && t.length >= 0 && Object.prototype.toString.call(t) === "[object Array]";
};
var qS = va(function(t) {
  return t === null ? "Null" : t === void 0 ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1);
});
function MS(e) {
  return new RegExp(e.source, e.flags ? e.flags : (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.sticky ? "y" : "") + (e.unicode ? "u" : "") + (e.dotAll ? "s" : ""));
}
function Bg(e, t, n) {
  if (n || (n = new RS()), ES(e)) return e;
  var l = function(a) {
    var o = n.get(e);
    if (o) return o;
    n.set(e, a);
    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (a[i] = Bg(e[i], true, n));
    return a;
  };
  switch (qS(e)) {
    case "Object":
      return l(Object.create(Object.getPrototypeOf(e)));
    case "Array":
      return l(Array(e.length));
    case "Date":
      return new Date(e.valueOf());
    case "RegExp":
      return MS(e);
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
function ES(e) {
  var t = typeof e;
  return e == null || t != "object" && t != "function";
}
var RS = function() {
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
}(), ro = va(function(t) {
  return t != null && typeof t.clone == "function" ? t.clone() : Bg(t);
});
function AS(e, t) {
  return function() {
    var n = arguments.length;
    if (n === 0) return t();
    var l = arguments[n - 1];
    return TS(l) || typeof l[e] != "function" ? t.apply(this, arguments) : l[e].apply(l, Array.prototype.slice.call(arguments, 0, n - 1));
  };
}
var Pf = kS(AS("forEach", function(t, n) {
  for (var l = n.length, r = 0; r < l; ) t(n[r]), r += 1;
  return n;
}));
function il(e, t, n, l) {
  e /= 360, t /= 100, n /= 100;
  let r = (1 - Math.abs(2 * n - 1)) * t, a = r * (1 - Math.abs(e * 6 % 2 - 1)), o = n - r / 2, i, u, c;
  0 <= e && e < 1 / 6 ? (i = r, u = a, c = 0) : 1 / 6 <= e && e < 2 / 6 ? (i = a, u = r, c = 0) : 2 / 6 <= e && e < 3 / 6 ? (i = 0, u = r, c = a) : 3 / 6 <= e && e < 4 / 6 ? (i = 0, u = a, c = r) : 4 / 6 <= e && e < 5 / 6 ? (i = a, u = 0, c = r) : 5 / 6 <= e && e < 1 && (i = r, u = 0, c = a);
  let s = i + o, f = u + o, h = c + o;
  return [s, f, h, l];
}
const Fg = { zero: [{ pos: [0, 0], color: [0.35, 0.35, 0.35, 1], tex: "home", hover: 0, hot: 1, action: { kind: "home" }, no_fade: true, disb: true }, { pos: [0, -1], color: il(30, 100, 50, 1), tex: "game", hover: 0, hot: 2, action: { kind: "show", page: "page beta" } }, { pos: [0, 1], color: il(90, 100, 50, 1), tex: "numbers", hover: 0, hot: 3, action: { kind: "show", page: "page gamma" } }, { pos: [1, -0.5], color: il(150, 100, 50, 1), tex: "quote", hover: 0, hot: 4, action: { kind: "sub", hexes: "s1" } }, { pos: [-1, 0.5], color: il(210, 100, 50, 1), tex: "cards", hover: 0, hot: 5, action: { kind: "sub", hexes: "s1" } }], s1: [{ pos: [0, 0], color: [0, 1, 0, 1], tex: "home", hover: 0, hot: 1, no_fade: true, action: { kind: "home" } }, { pos: [0, 1], color: il(0, 100, 50, 1), tex: "italic", hover: 0, hot: 2, action: { kind: "show", page: "one" } }, { pos: [0, -1], color: il(180, 100, 50, 1), tex: "happy", hover: 0, hot: 3, action: { kind: "sub", hexes: "s2" } }], s2: [{ pos: [0, 0], color: il(90, 100, 50, 1), tex: "home", hover: 0, hot: 1, no_fade: true, action: { kind: "sub", hexes: "s1" } }, { pos: [-1, 0.5], color: il(270, 100, 50, 1), tex: "one", hover: 0, hot: 2, action: { kind: "show", page: "gamma" } }, { pos: [1, -0.5], color: [1, 1, 1, 1], tex: "two", hover: 0, hot: 3, action: { kind: "show", page: "delta" } }] }, bo = Fg.zero;
class PS {
  constructor(t) {
    __privateAdd(this, _PS_instances);
    __privateAdd(this, _n2, ro(bo));
    __privateAdd(this, _r2, null);
    __privateAdd(this, _e, 1);
    __privateAdd(this, _l2, ro(bo));
    __privateAdd(this, _t2, "in");
    __privateAdd(this, _a2);
    __privateSet(this, _a2, t);
  }
  draw(t) {
    Pf((n) => t(n.pos, n.color, n.tex, n.hot, n.no_fade ? 0 : __privateGet(this, _e), n.hover))(__privateGet(this, _n2));
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
    __privateGet(this, _t2) == "idle" && Pf((n) => {
      n.hot == t && __privateMethod(this, _PS_instances, o_fn).call(this, n);
    })(__privateGet(this, _n2));
  }
}
_n2 = new WeakMap();
_r2 = new WeakMap();
_e = new WeakMap();
_l2 = new WeakMap();
_t2 = new WeakMap();
_a2 = new WeakMap();
_PS_instances = new WeakSet();
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
const $S = ["width", "height"], LS = /* @__PURE__ */ Er({ __name: "WebGL", setup(e) {
  const t = yg(), n = K();
  let l = null;
  const r = { front_0: null, front_1: null, front_2: null, front_3: null, game: null, home: null, numbers: null, quote: null, cards: null, happy: null, italic: null, one: null, two: null, three: null, body: null };
  let a = null;
  const o = new PS((_) => t.notify({ message: _ })), i = K([0, 0]), u = K(""), c = K(0), s = K(0), f = K(-1), h = K([0, 0, 0, 0]), m = K(640), g = K(480), w = K(0), x = (_, D, F, fe, A, R, G) => {
    const V = [];
    for (let ne = 0; ne < 6; ++ne) V.push(_ + (ne + fe) % 6 + 1 + G), V.push(D + (ne + A) % 6 + 1 + G), V.push(F + (ne + R) % 6 + 1 + G);
    return V;
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
    const D = l.createBuffer();
    l.bindBuffer(l.ARRAY_BUFFER, D), l.bufferData(l.ARRAY_BUFFER, new Float32Array(_), l.STATIC_DRAW);
    let F = [1, 1, 1, 1, 0.5, 0.5, 0.5, 1, 1, 1, 1, 1, 0.5, 0.5, 0.5, 1, 1, 1, 1, 1, 0.5, 0.5, 0.5, 1, 1, 1, 1, 1];
    for (let P = 0; P < 6; ++P) F = F.concat([1, 1, 1, 1]);
    for (let P = 0; P < 6; ++P) F = F.concat([1, 1, 1, 1]);
    for (let P = 0; P < 6; ++P) F = F.concat([1, 1, 1, 1]);
    for (let P = 0; P < 6; ++P) F = F.concat([1, 1, 1, 1]);
    for (let P = 0; P < 6; ++P) F = F.concat([1, 1, 1, 1]);
    for (let P = 0; P < 6; ++P) F = F.concat([1, 1, 1, 1]);
    const fe = l.createBuffer();
    l.bindBuffer(l.ARRAY_BUFFER, fe), l.bufferData(l.ARRAY_BUFFER, new Float32Array(F), l.STATIC_DRAW);
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
    let V = 0;
    for (let P = 0; P < G.length; ++P) V = Math.max(V, G[P]);
    console.log("top", V);
    const ne = l.createBuffer();
    l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, ne), l.bufferData(l.ELEMENT_ARRAY_BUFFER, new Uint32Array(G), l.STATIC_DRAW), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, null);
    let be = [0, 0, 1], S = [], M = [], I = [];
    for (let P = 0; P < 6; ++P) {
      const te = P * 3.414 / 180 * 60, se = 0 * (90 * 3.414 / 180);
      S = S.concat([0, 0, 1]), M = M.concat([-Math.cos(te - se), -Math.sin(te - se), 0]), I = I.concat([Math.cos(te - se), Math.sin(te - se), 0]);
    }
    be = be.concat(S), be = be.concat(M), be = be.concat(M), be = be.concat(S), be = be.concat(S), be = be.concat(I), be = be.concat(I);
    const ee = l.createBuffer();
    l.bindBuffer(l.ARRAY_BUFFER, ee), l.bufferData(l.ARRAY_BUFFER, new Float32Array(be), l.STATIC_DRAW);
    const le = l.createBuffer();
    return l.bindBuffer(l.ARRAY_BUFFER, le), l.bufferData(l.ARRAY_BUFFER, new Float32Array([-1, -1, 0.1, 1, -1, -0.1, 1, 1, 0.1, -1, 1, -0.1]), l.STATIC_DRAW), console.log("pctn", _.length / 3, F.length / 4, A.length / 2, be.length / 3), [D, fe, R, ne, ee, le];
  }, p = (_, D) => {
    const F = vu();
    return mu(F, F, [0, 0, -6]), hu(F, F, 1.3 * Math.sin(D) * 3.141 / 6 / 3, [0, 1, 0]), hu(F, F, 1.2 * Math.sin(D * 1.15 + 1) * 3.141 / 4 / 3, [1, 0, 0]), hu(F, F, 1.1 * Math.sin(D * 1.33 + 2) * 3.141 / 5 / 3, [0, 0, 1]), mu(F, F, [_[0], _[1], _[2]]), F;
  }, y = (_) => {
    l !== null && (l.uniform1i(_.unif.sampler, 0), l.uniform1i(_.unif.mode_int, 1), l.drawElements(l.TRIANGLES, 3 * 6 * 3, l.UNSIGNED_INT, 0), l.uniform1i(_.unif.sampler, 1), l.uniform1i(_.unif.mode_int, 0), l.drawElements(l.TRIANGLES, 3 * 6 * 6, l.UNSIGNED_INT, 4 * 3 * 6));
  }, b = (_, D) => {
    if (l === null || n.value === void 0) throw new Error("no WebGL context");
    l.viewport(0, 0, m.value, g.value), l.enable(l.DEPTH_TEST), l.depthFunc(l.LEQUAL), l.bindRenderbuffer(l.RENDERBUFFER, null), l.bindFramebuffer(l.FRAMEBUFFER, null), l.bindTexture(l.TEXTURE_2D, _.bufs.double), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.LINEAR), l.bindRenderbuffer(l.RENDERBUFFER, _.bufs.depth), l.renderbufferStorage(l.RENDERBUFFER, l.DEPTH_COMPONENT16, l.canvas.width, l.canvas.height), l.bindFramebuffer(l.FRAMEBUFFER, _.bufs.frame), l.framebufferRenderbuffer(l.FRAMEBUFFER, l.DEPTH_ATTACHMENT, l.RENDERBUFFER, _.bufs.depth), l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, l.canvas.width, l.canvas.height, 0, l.RGBA, l.UNSIGNED_BYTE, null), l.framebufferTexture2D(l.FRAMEBUFFER, l.COLOR_ATTACHMENT0, l.TEXTURE_2D, _.bufs.double, 0), l.bindFramebuffer(l.FRAMEBUFFER, _.bufs.frame), l.framebufferTexture2D(l.FRAMEBUFFER, l.COLOR_ATTACHMENT0, l.TEXTURE_2D, _.bufs.double, 0), l.framebufferRenderbuffer(l.FRAMEBUFFER, l.DEPTH_ATTACHMENT, l.RENDERBUFFER, _.bufs.depth), l.clear(l.COLOR_BUFFER_BIT | l.DEPTH_BUFFER_BIT);
    const F = 45 * Math.PI / 180, fe = m.value / g.value, A = 0.1, R = 100, G = vu();
    CS(G, F, fe, A, R);
    const V = D;
    mu(G, G, [Math.sin(V * 0.3) * 1, Math.cos(V * 0.4) * 1, Math.cos(0.6 * V) * 1]), l.useProgram(_.prog_draw), C(_, false), $(_), O(_), H(_), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, _.bufs.index), l.uniform1f(_.unif.time, D), l.uniform2f(_.unif.viewport, m.value, g.value), l.uniformMatrix4fv(_.unif.proj, false, G), l.activeTexture(l.TEXTURE0 + 1), l.bindTexture(l.TEXTURE_2D, r.body), l.activeTexture(l.TEXTURE0);
    const ne = (M, I, ee, le, P, te) => {
      if (l === null) return;
      const se = [M[0] * 2, M[1] * 2.2, te * 0.5 + P * 10], me = p(se, D);
      switch (l.uniformMatrix4fv(_.unif.model, false, me), l.uniform1f(_.unif.hover, te), l.uniform1f(_.unif.alpha, 1 - P), l.activeTexture(l.TEXTURE0), ee) {
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
          const re = r[ee];
          re != null ? l.bindTexture(l.TEXTURE_2D, re) : l.bindTexture(l.TEXTURE_2D, r.front_0);
          break;
      }
      l.activeTexture(l.TEXTURE0);
      const ce = vu();
      xS(ce, me), wS(ce, ce), l.uniformMatrix4fv(_.unif.normal, false, ce), l.uniform4fv(_.unif.front_color, I), y(_);
    };
    o.draw(ne), l.framebufferTexture2D(l.FRAMEBUFFER, l.COLOR_ATTACHMENT0, l.TEXTURE_2D, null, 0), l.framebufferRenderbuffer(l.FRAMEBUFFER, l.DEPTH_ATTACHMENT, l.RENDERBUFFER, null), l.flush(), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, null), l.disableVertexAttribArray(_.attr.pos_model), l.bindFramebuffer(l.FRAMEBUFFER, null), l.bindRenderbuffer(l.RENDERBUFFER, null), l.useProgram(_.prog_copy), l.disable(l.DEPTH_TEST), l.uniform1i(_.unif.copy_tex, 0), l.bindTexture(l.TEXTURE_2D, _.bufs.double), l.bindBuffer(l.ARRAY_BUFFER, _.bufs.copy_pos), l.vertexAttribPointer(_.attr.pos_copy, 3, l.FLOAT, false, 0, 0), l.enableVertexAttribArray(_.attr.pos_copy), l.drawArrays(l.TRIANGLE_FAN, 0, 4), l.disableVertexAttribArray(_.attr.pos_copy), l.useProgram(_.prog_pick), l.enable(l.DEPTH_TEST), l.bindTexture(l.TEXTURE_2D, _.pick.tex), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.NEAREST), l.bindRenderbuffer(l.RENDERBUFFER, _.pick.rb), l.renderbufferStorage(l.RENDERBUFFER, l.DEPTH_COMPONENT16, l.canvas.width, l.canvas.height), l.bindFramebuffer(l.FRAMEBUFFER, _.pick.fb), l.framebufferRenderbuffer(l.FRAMEBUFFER, l.DEPTH_ATTACHMENT, l.RENDERBUFFER, _.pick.rb), l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, l.canvas.width, l.canvas.height, 0, l.RGBA, l.UNSIGNED_BYTE, null), l.framebufferTexture2D(l.FRAMEBUFFER, l.COLOR_ATTACHMENT0, l.TEXTURE_2D, _.pick.tex, 0), l.uniformMatrix4fv(_.unif.proj_pick, false, G), l.clear(l.COLOR_BUFFER_BIT | l.DEPTH_BUFFER_BIT), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, _.bufs.index), l.enableVertexAttribArray(_.attr.pos_pick), C(_, true);
    const be = (M, I, ee, le, P, te) => {
      if (l === null) return;
      const se = [M[0] * 2, M[1] * 2.2, te * 0.5 + 10 * P];
      p(se, D), l.uniformMatrix4fv(_.unif.model_pick, false, p(se, D)), l.uniform4f(_.unif.id_pick, le / 255, 0, 0, 0), l.drawElements(l.TRIANGLES, 3 * 6, l.UNSIGNED_INT, 0);
    };
    o.draw(be), l.flush(), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, null), l.disableVertexAttribArray(_.attr.pos_pick);
    let S = new Uint8Array(4);
    l.readPixels(i.value[0], g.value - i.value[1], 1, 1, l.RGBA, l.UNSIGNED_BYTE, S), S.length && (u.value = S.toString(), o.hover(S[0]), c.value = S[0]);
  }, C = (_, D) => {
    if (l === null) throw new Error("setPos - no ctx");
    l.bindBuffer(l.ARRAY_BUFFER, _.bufs.pos), l.vertexAttribPointer(D ? _.attr.pos_pick : _.attr.pos_model, 3, l.FLOAT, false, 0, 0), l.enableVertexAttribArray(D ? _.attr.pos_pick : _.attr.pos_model);
  }, $ = (_) => {
    if (l === null) throw new Error("setColor - no ctx");
    l.bindBuffer(l.ARRAY_BUFFER, _.bufs.color), l.vertexAttribPointer(_.attr.color, 4, l.FLOAT, false, 0, 0), l.enableVertexAttribArray(_.attr.color);
  }, O = (_) => {
    if (l === null) throw new Error("setTex crash");
    l.bindBuffer(l.ARRAY_BUFFER, _.bufs.tex), l.vertexAttribPointer(_.attr.texture, 2, l.FLOAT, false, 0, 0), l.enableVertexAttribArray(_.attr.texture);
  }, H = (_) => {
    if (l === null) throw new Error("setNorm crash");
    l.bindBuffer(l.ARRAY_BUFFER, _.bufs.norm), l.vertexAttribPointer(_.attr.norm, 3, l.FLOAT, false, 0, 0), l.enableVertexAttribArray(_.attr.norm);
  };
  let L = 0;
  const B = () => {
    if (l === null) return;
    const F = E(`
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
    `, V = T(), ne = E(fe, A), be = E(R, G), S = l.createTexture();
    l.bindTexture(l.TEXTURE_2D, S), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.NEAREST), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.NEAREST), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE), l.bindTexture(l.TEXTURE_2D, null);
    const M = l.createRenderbuffer(), I = l.createFramebuffer(), ee = { prog_draw: F, prog_pick: ne, prog_copy: be, attr: { pos_model: l.getAttribLocation(F, "aVertexPosition"), norm: l.getAttribLocation(F, "aVertexNormal"), color: l.getAttribLocation(F, "aVertexColor"), texture: l.getAttribLocation(F, "aTextureCoord"), pos_pick: l.getAttribLocation(ne, "aVertexPosition"), pos_copy: l.getAttribLocation(be, "aVertexPos") }, unif: { proj: l.getUniformLocation(F, "uProjectionMatrix"), model: l.getUniformLocation(F, "uModelViewMatrix"), sampler: l.getUniformLocation(F, "uSampler"), normal: l.getUniformLocation(F, "uNormalMatrix"), time: l.getUniformLocation(F, "fTime"), alpha: l.getUniformLocation(F, "uAlpha"), hover: l.getUniformLocation(F, "fFade"), mode_int: l.getUniformLocation(F, "uMode"), front_color: l.getUniformLocation(F, "uFrontColor"), proj_pick: l.getUniformLocation(ne, "uProjectionMatrix"), model_pick: l.getUniformLocation(ne, "uModelViewMatrix"), id_pick: l.getUniformLocation(ne, "uId"), viewport: l.getUniformLocation(F, "uViewPort"), copy_tex: l.getUniformLocation(be, "uTexture") }, bufs: { frame: I, depth: M, double: S, pos: V[0], color: V[1], tex: V[2], index: V[3], norm: V[4], copy_pos: V[5] }, pick: { fb: l.createFramebuffer(), rb: l.createRenderbuffer(), tex: l.createTexture() } };
    for (const le in r) r[le] = j();
    l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL, true), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.LINEAR), a = ee;
  }, N = () => {
    if (n.value === void 0 || (l === null && (l = n.value.getContext("webgl2", {})), l === null)) return;
    a === null && B(), console.log("pctn", a == null ? void 0 : a.attr.pos_model, a == null ? void 0 : a.attr.color, a == null ? void 0 : a.attr.texture, a == null ? void 0 : a.attr.norm), console.log("next", a == null ? void 0 : a.attr.pos_copy, a == null ? void 0 : a.attr.pos_pick), l.bindRenderbuffer(l.RENDERBUFFER, a.bufs.depth), l.renderbufferStorage(l.RENDERBUFFER, l.DEPTH_COMPONENT16, m.value, g.value), l.bindRenderbuffer(l.RENDERBUFFER, null);
    const _ = l.createTexture();
    l.bindTexture(l.TEXTURE_2D, _), l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, m.value, g.value, 0, l.RGBA, l.UNSIGNED_BYTE, null), a.bufs.double = _, l.bindTexture(l.TEXTURE_2D, null), l.viewport(0, 0, m.value, g.value);
    let D = 0, F = false, fe = Date.now();
    L = setInterval(() => {
      const A = Date.now(), R = (A - fe) / 750;
      F ? (D -= R, D < 0 && (D = 0, F = false)) : (D += R, D > 7.5 && (D = 7.5, F = true)), o.step(A - fe), s.value > 0 && (o.activate(s.value), s.value = 0), fe = A, a !== null && (q(), b(a, D));
    }, 25);
  }, q = (_) => {
    for (let D = 0; D < 4; ++D) f.value - 1 == D ? h.value[D] < 1 && (h.value[D] += 0.05) : h.value[D] > 0 && (h.value[D] -= 0.05);
  }, E = (_, D) => {
    if (l === null) throw new Error("no webgl");
    const F = k(l.VERTEX_SHADER, _), fe = k(l.FRAGMENT_SHADER, D), A = l.createProgram();
    return l.attachShader(A, F), l.attachShader(A, fe), l.linkProgram(A), A;
  }, k = (_, D) => {
    if (l === null) throw new Error("no webgl");
    const F = l.createShader(_);
    if (F === null) throw new Error("bad shader");
    return l.shaderSource(F, D), l.compileShader(F), F;
  }, j = () => {
    if (l === null) return null;
    const _ = l.createTexture();
    return l.bindTexture(l.TEXTURE_2D, _), l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, 1, 1, 0, l.RGBA, l.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0])), _;
  }, U = (_, D) => {
    if (l === null) return;
    const F = D.target;
    l.bindTexture(l.TEXTURE_2D, r[_]), l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, l.RGBA, l.UNSIGNED_BYTE, F), l.hint(l.GENERATE_MIPMAP_HINT, l.NICEST), l.generateMipmap(l.TEXTURE_2D);
  }, W = (_) => {
    if (l === null || n.value === void 0) return;
    const D = _, F = D.offsetX, fe = D.offsetY;
    F - n.value.clientWidth / 2, fe - n.value.clientHeight / 2, (F - l.canvas.width / 2) / 2, (fe - l.canvas.height / 2) / 2, i.value = [F, fe];
  }, X = (_) => {
    const D = _;
    i.value = [D.touches.item(0).clientX, D.touches.item(0).clientY], _.stopPropagation(), _.preventDefault();
  }, ae = () => {
    L != 0 && clearInterval(L);
    const _ = document.getElementById("header");
    _ !== null && (w.value = _.getBoundingClientRect().bottom);
    let D = 0;
    document.getElementById("footer"), _ !== null && (D = _.getBoundingClientRect().height), We(() => {
      m.value = window.innerWidth, g.value = window.innerHeight - w.value - D, We(N);
    });
  }, pe = (_) => {
    s.value = c.value;
  };
  ft(() => {
    window.addEventListener("resize", ae), ae();
  }), Ke(() => {
    clearInterval(L), window.removeEventListener("resize", ae);
  });
  const Y = () => ({ top: w.value + "px" });
  return (_, D) => (Xn(), zv(on, null, [Bt("canvas", { id: "canvas", ref_key: "canvas", ref: n, onMousemove: D[0] || (D[0] = (F) => W(F)), onTouchstart: D[1] || (D[1] = (F) => X(F)), onTouchmove: D[2] || (D[2] = (F) => X(F)), onTouchend: D[3] || (D[3] = (F) => pe()), onMouseup: D[4] || (D[4] = (F) => pe()), width: m.value, height: g.value, style: Yo(Y()) }, null, 44, $S), Bt("img", { src: "img/wood.jpg", onLoad: D[5] || (D[5] = (F) => U("body", F)), style: { display: "none" } }, null, 32), Bt("img", { src: "img/tex.jpg", onLoad: D[6] || (D[6] = (F) => U("front_0", F)), style: { display: "none" } }, null, 32), Bt("img", { src: "img/clock.jpg", onLoad: D[7] || (D[7] = (F) => U("front_1", F)), style: { display: "none" } }, null, 32), Bt("img", { src: "img/tv.jpg", onLoad: D[8] || (D[8] = (F) => U("front_2", F)), style: { display: "none" } }, null, 32), Bt("img", { src: "img/phone.jpg", onLoad: D[9] || (D[9] = (F) => U("front_3", F)), style: { display: "none" } }, null, 32), Bt("img", { src: "img/home-outline.svg", onLoad: D[10] || (D[10] = (F) => U("home", F)), style: { display: "none" }, width: "1024", height: "1024" }, null, 32), Bt("img", { src: "img/format-quote-close.svg", onLoad: D[11] || (D[11] = (F) => U("quote", F)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), Bt("img", { src: "img/gamepad-variant-outline.svg", onLoad: D[12] || (D[12] = (F) => U("game", F)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), Bt("img", { src: "img/numeric.svg", onLoad: D[13] || (D[13] = (F) => U("numbers", F)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), Bt("img", { src: "img/cards-outline.svg", onLoad: D[14] || (D[14] = (F) => U("cards", F)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), Bt("img", { src: "img/emoticon-happy-outline.svg", onLoad: D[15] || (D[15] = (F) => U("happy", F)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), Bt("img", { src: "img/format-italic.svg", onLoad: D[16] || (D[16] = (F) => U("italic", F)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), Bt("img", { src: "img/numeric-1.png", onLoad: D[17] || (D[17] = (F) => U("one", F)), style: { display: "none" } }, null, 32), Bt("img", { src: "img/numeric-2.png", onLoad: D[18] || (D[18] = (F) => U("two", F)), style: { display: "none" } }, null, 32), Bt("img", { src: "img/numeric-3.png", onLoad: D[19] || (D[19] = (F) => U("three", F)), style: { display: "none" } }, null, 32)], 64));
} }), BS = { BASE_URL: "./", DEV: false, MODE: "production", PROD: true, SSR: false, VITE_APP_NAME: "vite mtg", VITE_client_id: "quasar-2fa", VITE_client_secret: "spoon" }, Js = em(ex);
console.log(BS);
const FS = [{ name: "layout", path: "/", component: lx, children: [{ name: "root", path: "", component: pS }, { name: "webgl", path: "webgl", component: LS }] }], OS = oS({ history: Bx(), routes: FS });
Js.use(OS);
Js.use(Gw, { plugins: { Dialog: Fw, Dark: rm, Loading: Vw, Cookies: Lw, Notify: Uw }, config: { dark: "auto" } });
window.cb = (e) => {
  alert(e);
};
window.log = (e) => {
  console.log("%cwasm>%c %s", "background-color: blue; color: cyan; border: 2px solid blue;", "", e);
};
Lg({}).then(() => {
  Js.mount("#q-app");
});
