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
}, Ng = /-(\w)/g, pn = Ko((e) => e.replace(Ng, (t, n) => n ? n.toUpperCase() : "")), Hg = /\B([A-Z])/g, Yl = Ko((e) => e.replace(Hg, "-$1").toLowerCase()), Wo = Ko((e) => e.charAt(0).toUpperCase() + e.slice(1)), Si = Ko((e) => e ? `on${Wo(e)}` : ""), gl = (e, t) => !Object.is(e, t), ea = (e, ...t) => {
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
const bu = /* @__PURE__ */ new WeakMap(), Il = Symbol(""), pu = Symbol(""), ha = Symbol("");
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
      o.forEach((f, m) => {
        (m === "length" || m === ha || !_l(m) && m >= s) && i(f);
      });
    } else switch ((n !== void 0 || o.has(void 0)) && i(o.get(n)), c && i(o.get(ha)), t) {
      case "add":
        u ? c && i(o.get("length")) : (i(o.get(Il)), vr(e) && i(o.get(pu)));
        break;
      case "delete":
        u || (i(o.get(Il)), vr(e) && i(o.get(pu)));
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
  o !== e && (i ? c = function(f, m) {
    return n.call(this, Gt(f), m, e);
  } : n.length > 2 && (c = function(f, m) {
    return n.call(this, f, m, e);
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
    const i = Reflect.get(t, n, yt(t) ? t : l);
    return (_l(n) ? Xf.has(n) : r0(n)) || (r || Wt(t, "get", n), a) ? i : yt(i) ? o && ls(n) ? i : i.value : St(i) ? r ? nv(i) : Fn(i) : i;
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
      if (!Mn(l) && !Ul(l) && (a = Xe(a), l = Xe(l)), !Ne(t) && yt(a) && !yt(l)) return u ? false : (a.value = l, true);
    }
    const o = Ne(t) && ls(n) ? Number(n) < t.length : st(t, n), i = Reflect.set(t, n, l, yt(t) ? t : r);
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
const yu = (e) => e, Oa = (e) => Reflect.getPrototypeOf(e);
function c0(e, t, n) {
  return function(...l) {
    const r = this.__v_raw, a = Xe(r), o = vr(a), i = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, c = r[e](...l), s = n ? yu : t ? _u : Gt;
    return !t && Wt(a, "iterate", u ? pu : Il), { next() {
      const { value: f, done: m } = c.next();
      return m ? { value: f, done: m } : { value: i ? [s(f[0]), s(f[1])] : s(f), done: m };
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
    const { has: u } = Oa(o), c = t ? yu : e ? _u : Gt;
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
    const o = this, i = o.__v_raw, u = Xe(i), c = t ? yu : e ? _u : Gt;
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
function yt(e) {
  return e ? e.__v_isRef === true : false;
}
function U(e) {
  return lv(e, false);
}
function p0(e) {
  return lv(e, true);
}
function lv(e, t) {
  return yt(e) ? e : new y0(e, t);
}
class y0 {
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
  return yt(e) ? e.value : e;
}
const _0 = { get: (e, t, n) => t === "__v_raw" ? e : Ie(Reflect.get(e, t, n)), set: (e, t, n, l) => {
  const r = e[t];
  return yt(r) && !yt(n) ? (r.value = n, true) : Reflect.set(e, t, n, l);
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
const Da = {}, po = /* @__PURE__ */ new WeakMap();
let $l;
function S0(e, t = false, n = $l) {
  if (n) {
    let l = po.get(n);
    l || po.set(n, l = []), l.push(e);
  }
}
function C0(e, t, n = mt) {
  const { immediate: l, deep: r, once: a, scheduler: o, augmentJob: i, call: u } = n, c = (b) => r ? b : Mn(b) || r === false || r === 0 ? Yn(b, 1) : Yn(b);
  let s, f, m, h, g = false, _ = false;
  if (yt(e) ? (f = () => e.value, g = Mn(e)) : la(e) ? (f = () => c(e), g = true) : Ne(e) ? (_ = true, g = e.some((b) => la(b) || Mn(b)), f = () => e.map((b) => {
    if (yt(b)) return b.value;
    if (la(b)) return c(b);
    if (Qe(b)) return u ? u(b, 2) : b();
  })) : Qe(e) ? t ? f = u ? () => u(e, 2) : e : f = () => {
    if (m) {
      wl();
      try {
        m();
      } finally {
        xl();
      }
    }
    const b = $l;
    $l = s;
    try {
      return u ? u(e, 3, [h]) : e(h);
    } finally {
      $l = b;
    }
  } : f = On, t && r) {
    const b = f, S = r === true ? 1 / 0 : r;
    f = () => Yn(b(), S);
  }
  const w = Jg(), k = () => {
    s.stop(), w && w.active && ns(w.effects, s);
  };
  if (a && t) {
    const b = t;
    t = (...S) => {
      b(...S), k();
    };
  }
  let y = _ ? new Array(e.length).fill(Da) : Da;
  const p = (b) => {
    if (!(!(s.flags & 1) || !s.dirty && !b)) if (t) {
      const S = s.run();
      if (r || g || (_ ? S.some(($, F) => gl($, y[F])) : gl(S, y))) {
        m && m();
        const $ = $l;
        $l = s;
        try {
          const F = [S, y === Da ? void 0 : _ && y[0] === Da ? [] : y, h];
          u ? u(t, 3, F) : t(...F), y = S;
        } finally {
          $l = $;
        }
      }
    } else s.run();
  };
  return i && i(p), s = new Nf(f), s.scheduler = o ? () => o(p, false) : p, h = (b) => S0(b, false, s), m = s.onStop = () => {
    const b = po.get(s);
    if (b) {
      if (u) u(b, 4);
      else for (const S of b) S();
      po.delete(s);
    }
  }, t ? l ? p(true) : y = s.run() : o ? o(p.bind(null, true), true) : s.run(), k.pause = s.pause.bind(s), k.resume = s.resume.bind(s), k.stop = k, k;
}
function Yn(e, t = 1 / 0, n) {
  if (t <= 0 || !St(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
  if (n.add(e), t--, yt(e)) Yn(e.value, t, n);
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
let yo = null;
function We(e) {
  const t = yo || av;
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
  yo || (yo = av.then(uv));
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
    Ln = -1, Zt.length = 0, iv(), yo = null, (Zt.length || mr.length) && uv();
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
  const { mc: s, pc: f, pbc: m, o: { insert: h, querySelector: g, createText: _, createComment: w } } = c, k = ra(t.props);
  let { shapeFlag: y, children: p, dynamicChildren: b } = t;
  if (e == null) {
    const S = t.el = _(""), $ = t.anchor = _("");
    h(S, n, l), h($, n, l);
    const F = (B, L) => {
      y & 16 && (r && r.isCE && (r.ce._teleportTarget = B), s(p, B, L, r, a, o, i, u));
    }, z = () => {
      const B = t.target = wu(t.props, g), L = vv(B, t, _, h);
      B && (o !== "svg" && sc(B) ? o = "svg" : o !== "mathml" && cc(B) && (o = "mathml"), k || (F(B, L), ao(t, false)));
    };
    k && (F(n, $), ao(t, true)), uc(t.props) ? Ft(() => {
      z(), t.el.__isMounted = true;
    }, a) : z();
  } else {
    if (uc(t.props) && !e.el.__isMounted) {
      Ft(() => {
        fv.process(e, t, n, l, r, a, o, i, u, c), delete e.el.__isMounted;
      }, a);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const S = t.anchor = e.anchor, $ = t.target = e.target, F = t.targetAnchor = e.targetAnchor, z = ra(e.props), B = z ? n : $, L = z ? S : F;
    if (o === "svg" || sc($) ? o = "svg" : (o === "mathml" || cc($)) && (o = "mathml"), b ? (m(e.dynamicChildren, b, B, r, a, o, i), ps(e, t, true)) : u || f(e, t, B, L, r, a, o, i, false), k) z ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ia(t, n, S, c, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const D = t.target = wu(t.props, g);
      D && Ia(t, D, null, c, 0);
    } else z && Ia(t, $, F, c, 1);
    ao(t, k);
  }
}, remove(e, t, n, { um: l, o: { remove: r } }, a) {
  const { shapeFlag: o, children: i, anchor: u, targetStart: c, targetAnchor: s, target: f, props: m } = e;
  if (f && (r(c), r(s)), a && r(u), o & 16) {
    const h = a || !ra(m);
    for (let g = 0; g < i.length; g++) {
      const _ = i[g];
      l(_, t, n, h, !!_.dynamicChildren);
    }
  }
}, move: Ia, hydrate: M0 };
function Ia(e, t, n, { o: { insert: l }, m: r }, a = 2) {
  a === 0 && l(e.targetAnchor, t, n);
  const { el: o, anchor: i, shapeFlag: u, children: c, props: s } = e, f = a === 2;
  if (f && l(o, t, n), (!f || ra(s)) && u & 16) for (let m = 0; m < c.length; m++) r(c[m], t, n, 2);
  f && l(i, t, n);
}
function M0(e, t, n, l, r, a, { o: { nextSibling: o, parentNode: i, querySelector: u, insert: c, createText: s } }, f) {
  const m = t.target = wu(t.props, u);
  if (m) {
    const h = ra(t.props), g = m._lpa || m.firstChild;
    if (t.shapeFlag & 16) if (h) t.anchor = f(o(e), t, i(e), n, l, r, a), t.targetStart = g, t.targetAnchor = g && o(g);
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
      t.targetAnchor || vv(m, t, s, c), f(g && o(g), t, m, n, l, r, a);
    }
    ao(t, h);
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
    u.type !== Jt && yl(u, c);
    let s = n.subTree && dc(n.subTree);
    if (s && s.type !== Jt && !ml(u, s) && gv(n).type !== Jt) {
      let f = ba(s, o, l, n);
      if (yl(s, f), i === "out-in" && u.type !== Jt) return l.isLeaving = true, f.afterLeave = () => {
        l.isLeaving = false, n.job.flags & 8 || n.update(), delete f.afterLeave, s = void 0;
      }, Mi(a);
      i === "in-out" && u.type !== Jt ? f.delayLeave = (m, h, g) => {
        const _ = pv(l, s);
        _[String(s.key)] = s, m[dl] = () => {
          h(), m[dl] = void 0, delete c.delayedLeave, s = void 0;
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
function pv(e, t) {
  const { leavingVNodes: n } = e;
  let l = n.get(t.type);
  return l || (l = /* @__PURE__ */ Object.create(null), n.set(t.type, l)), l;
}
function ba(e, t, n, l, r) {
  const { appear: a, mode: o, persisted: i = false, onBeforeEnter: u, onEnter: c, onAfterEnter: s, onEnterCancelled: f, onBeforeLeave: m, onLeave: h, onAfterLeave: g, onLeaveCancelled: _, onBeforeAppear: w, onAppear: k, onAfterAppear: y, onAppearCancelled: p } = t, b = String(e.key), S = pv(n, e), $ = (B, L) => {
    B && Rn(B, l, 9, L);
  }, F = (B, L) => {
    const D = L[1];
    $(B, L), Ne(B) ? B.every((M) => M.length <= 1) && D() : B.length <= 1 && D();
  }, z = { mode: o, persisted: i, beforeEnter(B) {
    let L = u;
    if (!n.isMounted) if (a) L = w || u;
    else return;
    B[dl] && B[dl](true);
    const D = S[b];
    D && ml(e, D) && D.el[dl] && D.el[dl](), $(L, [B]);
  }, enter(B) {
    let L = c, D = s, M = f;
    if (!n.isMounted) if (a) L = k || c, D = y || s, M = p || f;
    else return;
    let A = false;
    const C = B[za] = (H) => {
      A || (A = true, H ? $(M, [B]) : $(D, [B]), z.delayedLeave && z.delayedLeave(), B[za] = void 0);
    };
    L ? F(L, [B, C]) : C();
  }, leave(B, L) {
    const D = String(e.key);
    if (B[za] && B[za](true), n.isUnmounting) return L();
    $(m, [B]);
    let M = false;
    const A = B[dl] = (C) => {
      M || (M = true, L(), C ? $(_, [B]) : $(g, [B]), B[dl] = void 0, S[D] === e && delete S[D]);
    };
    S[D] = e, h ? F(h, [B, A]) : A();
  }, clone(B) {
    const L = ba(B, t, n, l, r);
    return r && r(L), L;
  } };
  return z;
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
function yl(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, yl(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
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
function yv(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function wo(e, t, n, l, r = false) {
  if (Ne(e)) {
    e.forEach((g, _) => wo(g, t && (Ne(t) ? t[_] : t), n, l, r));
    return;
  }
  if (hr(l) && !r) {
    l.shapeFlag & 512 && l.type.__asyncResolved && l.component.subTree.component && wo(e, t, n, l.component.subTree);
    return;
  }
  const a = l.shapeFlag & 4 ? ai(l.component) : l.el, o = r ? null : a, { i, r: u } = e, c = t && t.r, s = i.refs === mt ? i.refs = {} : i.refs, f = i.setupState, m = Xe(f), h = f === mt ? () => false : (g) => st(m, g);
  if (c != null && c !== u && (At(c) ? (s[c] = null, h(c) && (f[c] = null)) : yt(c) && (c.value = null)), Qe(u)) Ra(u, i, 12, [o, s]);
  else {
    const g = At(u), _ = yt(u);
    if (g || _) {
      const w = () => {
        if (e.f) {
          const k = g ? h(u) ? f[u] : s[u] : u.value;
          r ? Ne(k) && ns(k, a) : Ne(k) ? k.includes(a) || k.push(a) : g ? (s[u] = [a], h(u) && (f[u] = s[u])) : (u.value = [a], e.k && (s[e.k] = u.value));
        } else g ? (s[u] = o, h(u) && (f[u] = o)) : _ && (u.value = o, e.k && (s[e.k] = o));
      };
      o ? (w.id = -1, Ft(w, n)) : w();
    }
  }
}
Ea().requestIdleCallback;
Ea().cancelIdleCallback;
const hr = (e) => !!e.type.__asyncLoader, Zo = (e) => e.type.__isKeepAlive, P0 = { name: "KeepAlive", __isKeepAlive: true, props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] }, setup(e, { slots: t }) {
  const n = xe(), l = n.ctx;
  if (!l.renderer) return () => {
    const y = t.default && t.default();
    return y && y.length === 1 ? y[0] : y;
  };
  const r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
  let o = null;
  const i = n.suspense, { renderer: { p: u, m: c, um: s, o: { createElement: f } } } = l, m = f("div");
  l.activate = (y, p, b, S, $) => {
    const F = y.component;
    c(y, p, b, 0, i), u(F.vnode, y, p, b, F, i, S, y.slotScopeIds, $), Ft(() => {
      F.isDeactivated = false, F.a && ea(F.a);
      const z = y.props && y.props.onVnodeMounted;
      z && mn(z, F.parent, y);
    }, i);
  }, l.deactivate = (y) => {
    const p = y.component;
    So(p.m), So(p.a), c(y, m, null, 1, i), Ft(() => {
      p.da && ea(p.da);
      const b = y.props && y.props.onVnodeUnmounted;
      b && mn(b, p.parent, y), p.isDeactivated = true;
    }, i);
  };
  function h(y) {
    Ei(y), s(y, n, i, true);
  }
  function g(y) {
    r.forEach((p, b) => {
      const S = qu(p.type);
      S && !y(S) && _(b);
    });
  }
  function _(y) {
    const p = r.get(y);
    p && (!o || !ml(p, o)) ? h(p) : o && Ei(o), r.delete(y), a.delete(y);
  }
  ge(() => [e.include, e.exclude], ([y, p]) => {
    y && g((b) => Kr(y, b)), p && g((b) => !Kr(p, b));
  }, { flush: "post", deep: true });
  let w = null;
  const k = () => {
    w != null && (Co(n.subTree.type) ? Ft(() => {
      r.set(w, Na(n.subTree));
    }, n.subTree.suspense) : r.set(w, Na(n.subTree)));
  };
  return ft(k), ti(k), Ke(() => {
    r.forEach((y) => {
      const { subTree: p, suspense: b } = n, S = Na(p);
      if (y.type === S.type && y.key === S.key) {
        Ei(S);
        const $ = S.component.da;
        $ && Ft($, b);
        return;
      }
      h(y);
    });
  }), () => {
    if (w = null, !t.default) return o = null;
    const y = t.default(), p = y[0];
    if (y.length > 1) return o = null, y;
    if (!ya(p) || !(p.shapeFlag & 4) && !(p.shapeFlag & 128)) return o = null, p;
    let b = Na(p);
    if (b.type === Jt) return o = null, b;
    const S = b.type, $ = qu(hr(b) ? b.type.__asyncResolved || {} : S), { include: F, exclude: z, max: B } = e;
    if (F && (!$ || !Kr(F, $)) || z && $ && Kr(z, $)) return b.shapeFlag &= -257, o = b, p;
    const L = b.key == null ? S : b.key, D = r.get(L);
    return b.el && (b = Gn(b), p.shapeFlag & 128 && (p.ssContent = b)), w = L, D ? (b.el = D.el, b.component = D.component, b.transition && yl(b, b.transition), b.shapeFlag |= 512, a.delete(L), a.add(L)) : (a.add(L), B && a.size > parseInt(B, 10) && _(a.values().next().value)), b.shapeFlag |= 256, o = b, Co(p.type) ? p : b;
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
      if (i && (i === t || i === pn(t) || i === Wo(pn(t)))) return a;
    }
    const o = fc(r[e] || a[e], t) || fc(r.appContext[e], t);
    return !o && l ? a : o;
  }
}
function fc(e, t) {
  return e && (e[t] || e[pn(t)] || e[Wo(pn(t))]);
}
const xu = (e) => e ? Hv(e) ? ai(e) : xu(e.parent) : null, aa = It(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => xu(e.parent), $root: (e) => xu(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => kv(e), $forceUpdate: (e) => e.f || (e.f = () => {
  ms(e.update);
}), $nextTick: (e) => e.n || (e.n = We.bind(e.proxy)), $watch: (e) => ub.bind(e) }), Ri = (e, t) => e !== mt && !e.__isScriptSetup && st(e, t), z0 = { get({ _: e }, t) {
  if (t === "__v_skip") return true;
  const { ctx: n, setupState: l, data: r, props: a, accessCache: o, type: i, appContext: u } = e;
  let c;
  if (t[0] !== "$") {
    const h = o[t];
    if (h !== void 0) switch (h) {
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
  let f, m;
  if (s) return t === "$attrs" && Wt(e.attrs, "get", ""), s(e);
  if ((f = i.__cssModules) && (f = f[t])) return f;
  if (n !== mt && st(n, t)) return o[t] = 4, n[t];
  if (m = u.config.globalProperties, st(m, t)) return m[t];
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
  const { data: r, computed: a, methods: o, watch: i, provide: u, inject: c, created: s, beforeMount: f, mounted: m, beforeUpdate: h, updated: g, activated: _, deactivated: w, beforeDestroy: k, beforeUnmount: y, destroyed: p, unmounted: b, render: S, renderTracked: $, renderTriggered: F, errorCaptured: z, serverPrefetch: B, expose: L, inheritAttrs: D, components: M, directives: A, filters: C } = t;
  if (c && H0(c, l, null), o) for (const K in o) {
    const W = o[K];
    Qe(W) && (l[K] = W.bind(n));
  }
  if (r) {
    const K = r.call(n, n);
    St(K) && (e.data = Fn(K));
  }
  if (Su = true, a) for (const K in a) {
    const W = a[K], ie = Qe(W) ? W.bind(n, n) : Qe(W.get) ? W.get.bind(n, n) : On, ye = !Qe(W) && Qe(W.set) ? W.set.bind(n) : On, G = v({ get: ie, set: ye });
    Object.defineProperty(l, K, { enumerable: true, configurable: true, get: () => G.value, set: (R) => G.value = R });
  }
  if (i) for (const K in i) Cv(i[K], l, n, K);
  if (u) {
    const K = Qe(u) ? u.call(n) : u;
    Reflect.ownKeys(K).forEach((W) => {
      gn(W, K[W]);
    });
  }
  s && mc(s, e, "c");
  function Q(K, W) {
    Ne(W) ? W.forEach((ie) => K(ie.bind(n))) : W && K(W.bind(n));
  }
  if (Q(ei, f), Q(ft, m), Q(Rr, h), Q(ti, g), Q(Sl, _), Q(Vn, w), Q(O0, z), Q(F0, $), Q(B0, F), Q(Ke, y), Q(ni, b), Q(L0, B), Ne(L)) if (L.length) {
    const K = e.exposed || (e.exposed = {});
    L.forEach((W) => {
      Object.defineProperty(K, W, { get: () => n[W], set: (ie) => n[W] = ie });
    });
  } else e.exposed || (e.exposed = {});
  S && e.render === On && (e.render = S), D != null && (e.inheritAttrs = D), M && (e.components = M), A && (e.directives = A), B && yv(e);
}
function H0(e, t, n = On) {
  Ne(e) && (e = Cu(e));
  for (const l in e) {
    const r = e[l];
    let a;
    St(r) ? "default" in r ? a = qt(r.from || l, r.default, true) : a = qt(r.from || l) : a = qt(r), yt(a) ? Object.defineProperty(t, l, { enumerable: true, configurable: true, get: () => a.value, set: (o) => a.value = o }) : t[l] = a;
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
    }, mount(s, f, m) {
      if (!u) {
        const h = c._ceVNode || Je(l, r);
        return h.appContext = a, m === true ? m = "svg" : m === false && (m = void 0), e(h, s, m), u = true, c._container = s, s.__vue_app__ = c, ai(h.component);
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
        let m = s[f];
        if (li(e.emitsOptions, m)) continue;
        const h = t[m];
        if (u) if (st(a, m)) h !== a[m] && (a[m] = h, c = true);
        else {
          const g = pn(m);
          r[g] = ku(u, i, g, h, e, false);
        }
        else h !== a[m] && (a[m] = h, c = true);
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
    r && st(r, s = pn(u)) ? !a || !a.includes(s) ? n[s] = c : (i || (i = {}))[s] = c : li(e.emitsOptions, u) || (!(u in l) || c !== l[u]) && (l[u] = c, o = true);
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
      const [m, h] = Av(f, t, true);
      It(o, m), h && i.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  if (!a && !u) return St(e) && l.set(e, fr), fr;
  if (Ne(a)) for (let s = 0; s < a.length; s++) {
    const f = pn(a[s]);
    bc(f) && (o[f] = mt);
  }
  else if (a) for (const s in a) {
    const f = pn(s);
    if (bc(f)) {
      const m = a[s], h = o[f] = Ne(m) || Qe(m) ? { type: m } : It({}, m), g = h.type;
      let _ = false, w = true;
      if (Ne(g)) for (let k = 0; k < g.length; ++k) {
        const y = g[k], p = Qe(y) && y.name;
        if (p === "Boolean") {
          _ = true;
          break;
        } else p === "String" && (w = false);
      }
      else _ = Qe(g) && g.name === "Boolean";
      h[0] = _, h[1] = w, (_ || st(h, "default")) && i.push(f);
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
  const { insert: l, remove: r, patchProp: a, createElement: o, createText: i, createComment: u, setText: c, setElementText: s, parentNode: f, nextSibling: m, setScopeId: h = On, insertStaticContent: g } = e, _ = (x, q, V, te = null, ae = null, Y = null, fe = void 0, N = null, ne = !!q.dynamicChildren) => {
    if (x === q) return;
    x && !ml(x, q) && (te = E(x), R(x, ae, Y, true), x = null), q.patchFlag === -2 && (ne = false, q.dynamicChildren = null);
    const { type: de, ref: oe, shapeFlag: j } = q;
    switch (de) {
      case ri:
        w(x, q, V, te);
        break;
      case Jt:
        k(x, q, V, te);
        break;
      case Pi:
        x == null && y(q, V, te, fe);
        break;
      case on:
        M(x, q, V, te, ae, Y, fe, N, ne);
        break;
      default:
        j & 1 ? S(x, q, V, te, ae, Y, fe, N, ne) : j & 6 ? A(x, q, V, te, ae, Y, fe, N, ne) : (j & 64 || j & 128) && de.process(x, q, V, te, ae, Y, fe, N, ne, le);
    }
    oe != null && ae && wo(oe, x && x.ref, Y, q || x, !q);
  }, w = (x, q, V, te) => {
    if (x == null) l(q.el = i(q.children), V, te);
    else {
      const ae = q.el = x.el;
      q.children !== x.children && c(ae, q.children);
    }
  }, k = (x, q, V, te) => {
    x == null ? l(q.el = u(q.children || ""), V, te) : q.el = x.el;
  }, y = (x, q, V, te) => {
    [x.el, x.anchor] = g(x.children, q, V, te, x.el, x.anchor);
  }, p = ({ el: x, anchor: q }, V, te) => {
    let ae;
    for (; x && x !== q; ) ae = m(x), l(x, V, te), x = ae;
    l(q, V, te);
  }, b = ({ el: x, anchor: q }) => {
    let V;
    for (; x && x !== q; ) V = m(x), r(x), x = V;
    r(q);
  }, S = (x, q, V, te, ae, Y, fe, N, ne) => {
    q.type === "svg" ? fe = "svg" : q.type === "math" && (fe = "mathml"), x == null ? $(q, V, te, ae, Y, fe, N, ne) : B(x, q, ae, Y, fe, N, ne);
  }, $ = (x, q, V, te, ae, Y, fe, N) => {
    let ne, de;
    const { props: oe, shapeFlag: j, transition: se, dirs: we } = x;
    if (ne = x.el = o(x.type, Y, oe && oe.is, oe), j & 8 ? s(ne, x.children) : j & 16 && z(x.children, ne, null, te, ae, Ai(x, Y), fe, N), we && Tl(x, null, te, "created"), F(ne, x, x.scopeId, fe, te), oe) {
      for (const Te in oe) Te !== "value" && !Jr(Te) && a(ne, Te, null, oe[Te], Y, te);
      "value" in oe && a(ne, "value", null, oe.value, Y), (de = oe.onVnodeBeforeMount) && mn(de, te, x);
    }
    we && Tl(x, null, te, "beforeMount");
    const ke = rb(ae, se);
    ke && se.beforeEnter(ne), l(ne, q, V), ((de = oe && oe.onVnodeMounted) || ke || we) && Ft(() => {
      de && mn(de, te, x), ke && se.enter(ne), we && Tl(x, null, te, "mounted");
    }, ae);
  }, F = (x, q, V, te, ae) => {
    if (V && h(x, V), te) for (let Y = 0; Y < te.length; Y++) h(x, te[Y]);
    if (ae) {
      let Y = ae.subTree;
      if (q === Y || Co(Y.type) && (Y.ssContent === q || Y.ssFallback === q)) {
        const fe = ae.vnode;
        F(x, fe, fe.scopeId, fe.slotScopeIds, ae.parent);
      }
    }
  }, z = (x, q, V, te, ae, Y, fe, N, ne = 0) => {
    for (let de = ne; de < x.length; de++) {
      const oe = x[de] = N ? fl(x[de]) : Bn(x[de]);
      _(null, oe, q, V, te, ae, Y, fe, N);
    }
  }, B = (x, q, V, te, ae, Y, fe) => {
    const N = q.el = x.el;
    let { patchFlag: ne, dynamicChildren: de, dirs: oe } = q;
    ne |= x.patchFlag & 16;
    const j = x.props || mt, se = q.props || mt;
    let we;
    if (V && ql(V, false), (we = se.onVnodeBeforeUpdate) && mn(we, V, q, x), oe && Tl(q, x, V, "beforeUpdate"), V && ql(V, true), (j.innerHTML && se.innerHTML == null || j.textContent && se.textContent == null) && s(N, ""), de ? L(x.dynamicChildren, de, N, V, te, Ai(q, ae), Y) : fe || W(x, q, N, null, V, te, Ai(q, ae), Y, false), ne > 0) {
      if (ne & 16) D(N, j, se, V, ae);
      else if (ne & 2 && j.class !== se.class && a(N, "class", null, se.class, ae), ne & 4 && a(N, "style", j.style, se.style, ae), ne & 8) {
        const ke = q.dynamicProps;
        for (let Te = 0; Te < ke.length; Te++) {
          const Me = ke[Te], He = j[Me], Ve = se[Me];
          (Ve !== He || Me === "value") && a(N, Me, He, Ve, ae, V);
        }
      }
      ne & 1 && x.children !== q.children && s(N, q.children);
    } else !fe && de == null && D(N, j, se, V, ae);
    ((we = se.onVnodeUpdated) || oe) && Ft(() => {
      we && mn(we, V, q, x), oe && Tl(q, x, V, "updated");
    }, te);
  }, L = (x, q, V, te, ae, Y, fe) => {
    for (let N = 0; N < q.length; N++) {
      const ne = x[N], de = q[N], oe = ne.el && (ne.type === on || !ml(ne, de) || ne.shapeFlag & 70) ? f(ne.el) : V;
      _(ne, de, oe, null, te, ae, Y, fe, true);
    }
  }, D = (x, q, V, te, ae) => {
    if (q !== V) {
      if (q !== mt) for (const Y in q) !Jr(Y) && !(Y in V) && a(x, Y, q[Y], null, ae, te);
      for (const Y in V) {
        if (Jr(Y)) continue;
        const fe = V[Y], N = q[Y];
        fe !== N && Y !== "value" && a(x, Y, N, fe, ae, te);
      }
      "value" in V && a(x, "value", q.value, V.value, ae);
    }
  }, M = (x, q, V, te, ae, Y, fe, N, ne) => {
    const de = q.el = x ? x.el : i(""), oe = q.anchor = x ? x.anchor : i("");
    let { patchFlag: j, dynamicChildren: se, slotScopeIds: we } = q;
    we && (N = N ? N.concat(we) : we), x == null ? (l(de, V, te), l(oe, V, te), z(q.children || [], V, oe, ae, Y, fe, N, ne)) : j > 0 && j & 64 && se && x.dynamicChildren ? (L(x.dynamicChildren, se, V, ae, Y, fe, N), (q.key != null || ae && q === ae.subTree) && ps(x, q, true)) : W(x, q, V, oe, ae, Y, fe, N, ne);
  }, A = (x, q, V, te, ae, Y, fe, N, ne) => {
    q.slotScopeIds = N, x == null ? q.shapeFlag & 512 ? ae.ctx.activate(q, V, te, fe, ne) : C(q, V, te, ae, Y, fe, ne) : H(x, q, ne);
  }, C = (x, q, V, te, ae, Y, fe) => {
    const N = x.component = Sb(x, te, ae);
    if (Zo(x) && (N.ctx.renderer = le), Cb(N, false, fe), N.asyncDep) {
      if (ae && ae.registerDep(N, Q, fe), !x.el) {
        const ne = N.subTree = Je(Jt);
        k(null, ne, q, V);
      }
    } else Q(N, x, q, V, ae, Y, fe);
  }, H = (x, q, V) => {
    const te = q.component = x.component;
    if (mb(x, q, V)) if (te.asyncDep && !te.asyncResolved) {
      K(te, q, V);
      return;
    } else te.next = q, te.update();
    else q.el = x.el, te.vnode = q;
  }, Q = (x, q, V, te, ae, Y, fe) => {
    const N = () => {
      if (x.isMounted) {
        let { next: j, bu: se, u: we, parent: ke, vnode: Te } = x;
        {
          const pe = Fv(x);
          if (pe) {
            j && (j.el = Te.el, K(x, j, fe)), pe.asyncDep.then(() => {
              x.isUnmounted || N();
            });
            return;
          }
        }
        let Me = j, He;
        ql(x, false), j ? (j.el = Te.el, K(x, j, fe)) : j = Te, se && ea(se), (He = j.props && j.props.onVnodeBeforeUpdate) && mn(He, ke, j, Te), ql(x, true);
        const Ve = pc(x), ce = x.subTree;
        x.subTree = Ve, _(ce, Ve, f(ce.el), E(ce), x, ae, Y), j.el = Ve.el, Me === null && hb(x, Ve.el), we && Ft(we, ae), (He = j.props && j.props.onVnodeUpdated) && Ft(() => mn(He, ke, j, Te), ae);
      } else {
        let j;
        const { el: se, props: we } = q, { bm: ke, m: Te, parent: Me, root: He, type: Ve } = x, ce = hr(q);
        ql(x, false), ke && ea(ke), !ce && (j = we && we.onVnodeBeforeMount) && mn(j, Me, q), ql(x, true);
        {
          He.ce && He.ce._injectChildStyle(Ve);
          const pe = x.subTree = pc(x);
          _(null, pe, V, te, x, ae, Y), q.el = pe.el;
        }
        if (Te && Ft(Te, ae), !ce && (j = we && we.onVnodeMounted)) {
          const pe = q;
          Ft(() => mn(j, Me, pe), ae);
        }
        (q.shapeFlag & 256 || Me && hr(Me.vnode) && Me.vnode.shapeFlag & 256) && x.a && Ft(x.a, ae), x.isMounted = true, q = V = te = null;
      }
    };
    x.scope.on();
    const ne = x.effect = new Nf(N);
    x.scope.off();
    const de = x.update = ne.run.bind(ne), oe = x.job = ne.runIfDirty.bind(ne);
    oe.i = x, oe.id = x.uid, ne.scheduler = () => ms(oe), ql(x, true), de();
  }, K = (x, q, V) => {
    q.component = x;
    const te = x.vnode.props;
    x.vnode = q, x.next = null, X0(x, q.props, te, V), eb(x, q.children, V), wl(), ic(x), xl();
  }, W = (x, q, V, te, ae, Y, fe, N, ne = false) => {
    const de = x && x.children, oe = x ? x.shapeFlag : 0, j = q.children, { patchFlag: se, shapeFlag: we } = q;
    if (se > 0) {
      if (se & 128) {
        ye(de, j, V, te, ae, Y, fe, N, ne);
        return;
      } else if (se & 256) {
        ie(de, j, V, te, ae, Y, fe, N, ne);
        return;
      }
    }
    we & 8 ? (oe & 16 && T(de, ae, Y), j !== de && s(V, j)) : oe & 16 ? we & 16 ? ye(de, j, V, te, ae, Y, fe, N, ne) : T(de, ae, Y, true) : (oe & 8 && s(V, ""), we & 16 && z(j, V, te, ae, Y, fe, N, ne));
  }, ie = (x, q, V, te, ae, Y, fe, N, ne) => {
    x = x || fr, q = q || fr;
    const de = x.length, oe = q.length, j = Math.min(de, oe);
    let se;
    for (se = 0; se < j; se++) {
      const we = q[se] = ne ? fl(q[se]) : Bn(q[se]);
      _(x[se], we, V, null, ae, Y, fe, N, ne);
    }
    de > oe ? T(x, ae, Y, true, false, j) : z(q, V, te, ae, Y, fe, N, ne, j);
  }, ye = (x, q, V, te, ae, Y, fe, N, ne) => {
    let de = 0;
    const oe = q.length;
    let j = x.length - 1, se = oe - 1;
    for (; de <= j && de <= se; ) {
      const we = x[de], ke = q[de] = ne ? fl(q[de]) : Bn(q[de]);
      if (ml(we, ke)) _(we, ke, V, null, ae, Y, fe, N, ne);
      else break;
      de++;
    }
    for (; de <= j && de <= se; ) {
      const we = x[j], ke = q[se] = ne ? fl(q[se]) : Bn(q[se]);
      if (ml(we, ke)) _(we, ke, V, null, ae, Y, fe, N, ne);
      else break;
      j--, se--;
    }
    if (de > j) {
      if (de <= se) {
        const we = se + 1, ke = we < oe ? q[we].el : te;
        for (; de <= se; ) _(null, q[de] = ne ? fl(q[de]) : Bn(q[de]), V, ke, ae, Y, fe, N, ne), de++;
      }
    } else if (de > se) for (; de <= j; ) R(x[de], ae, Y, true), de++;
    else {
      const we = de, ke = de, Te = /* @__PURE__ */ new Map();
      for (de = ke; de <= se; de++) {
        const Ce = q[de] = ne ? fl(q[de]) : Bn(q[de]);
        Ce.key != null && Te.set(Ce.key, de);
      }
      let Me, He = 0;
      const Ve = se - ke + 1;
      let ce = false, pe = 0;
      const ue = new Array(Ve);
      for (de = 0; de < Ve; de++) ue[de] = 0;
      for (de = we; de <= j; de++) {
        const Ce = x[de];
        if (He >= Ve) {
          R(Ce, ae, Y, true);
          continue;
        }
        let Oe;
        if (Ce.key != null) Oe = Te.get(Ce.key);
        else for (Me = ke; Me <= se; Me++) if (ue[Me - ke] === 0 && ml(Ce, q[Me])) {
          Oe = Me;
          break;
        }
        Oe === void 0 ? R(Ce, ae, Y, true) : (ue[Oe - ke] = de + 1, Oe >= pe ? pe = Oe : ce = true, _(Ce, q[Oe], V, null, ae, Y, fe, N, ne), He++);
      }
      const _e2 = ce ? ab(ue) : fr;
      for (Me = _e2.length - 1, de = Ve - 1; de >= 0; de--) {
        const Ce = ke + de, Oe = q[Ce], Re = Ce + 1 < oe ? q[Ce + 1].el : te;
        ue[de] === 0 ? _(null, Oe, V, Re, ae, Y, fe, N, ne) : ce && (Me < 0 || de !== _e2[Me] ? G(Oe, V, Re, 2) : Me--);
      }
    }
  }, G = (x, q, V, te, ae = null) => {
    const { el: Y, type: fe, transition: N, children: ne, shapeFlag: de } = x;
    if (de & 6) {
      G(x.component.subTree, q, V, te);
      return;
    }
    if (de & 128) {
      x.suspense.move(q, V, te);
      return;
    }
    if (de & 64) {
      fe.move(x, q, V, le);
      return;
    }
    if (fe === on) {
      l(Y, q, V);
      for (let j = 0; j < ne.length; j++) G(ne[j], q, V, te);
      l(x.anchor, q, V);
      return;
    }
    if (fe === Pi) {
      p(x, q, V);
      return;
    }
    if (te !== 2 && de & 1 && N) if (te === 0) N.beforeEnter(Y), l(Y, q, V), Ft(() => N.enter(Y), ae);
    else {
      const { leave: j, delayLeave: se, afterLeave: we } = N, ke = () => l(Y, q, V), Te = () => {
        j(Y, () => {
          ke(), we && we();
        });
      };
      se ? se(Y, ke, Te) : Te();
    }
    else l(Y, q, V);
  }, R = (x, q, V, te = false, ae = false) => {
    const { type: Y, props: fe, ref: N, children: ne, dynamicChildren: de, shapeFlag: oe, patchFlag: j, dirs: se, cacheIndex: we } = x;
    if (j === -2 && (ae = false), N != null && wo(N, null, V, x, true), we != null && (q.renderCache[we] = void 0), oe & 256) {
      q.ctx.deactivate(x);
      return;
    }
    const ke = oe & 1 && se, Te = !hr(x);
    let Me;
    if (Te && (Me = fe && fe.onVnodeBeforeUnmount) && mn(Me, q, x), oe & 6) J(x.component, V, te);
    else {
      if (oe & 128) {
        x.suspense.unmount(V, te);
        return;
      }
      ke && Tl(x, null, q, "beforeUnmount"), oe & 64 ? x.type.remove(x, q, V, le, te) : de && !de.hasOnce && (Y !== on || j > 0 && j & 64) ? T(de, q, V, false, true) : (Y === on && j & 384 || !ae && oe & 16) && T(ne, q, V), te && re(x);
    }
    (Te && (Me = fe && fe.onVnodeUnmounted) || ke) && Ft(() => {
      Me && mn(Me, q, x), ke && Tl(x, null, q, "unmounted");
    }, V);
  }, re = (x) => {
    const { type: q, el: V, anchor: te, transition: ae } = x;
    if (q === on) {
      P(V, te);
      return;
    }
    if (q === Pi) {
      b(x);
      return;
    }
    const Y = () => {
      r(V), ae && !ae.persisted && ae.afterLeave && ae.afterLeave();
    };
    if (x.shapeFlag & 1 && ae && !ae.persisted) {
      const { leave: fe, delayLeave: N } = ae, ne = () => fe(V, Y);
      N ? N(x.el, Y, ne) : ne();
    } else Y();
  }, P = (x, q) => {
    let V;
    for (; x !== q; ) V = m(x), r(x), x = V;
    r(q);
  }, J = (x, q, V) => {
    const { bum: te, scope: ae, job: Y, subTree: fe, um: N, m: ne, a: de } = x;
    So(ne), So(de), te && ea(te), ae.stop(), Y && (Y.flags |= 8, R(fe, x, q, V)), N && Ft(N, q), Ft(() => {
      x.isUnmounted = true;
    }, q), q && q.pendingBranch && !q.isUnmounted && x.asyncDep && !x.asyncResolved && x.suspenseId === q.pendingId && (q.deps--, q.deps === 0 && q.resolve());
  }, T = (x, q, V, te = false, ae = false, Y = 0) => {
    for (let fe = Y; fe < x.length; fe++) R(x[fe], q, V, te, ae);
  }, E = (x) => {
    if (x.shapeFlag & 6) return E(x.component.subTree);
    if (x.shapeFlag & 128) return x.suspense.next();
    const q = m(x.anchor || x.el), V = q && q[cv];
    return V ? m(V) : q;
  };
  let X = false;
  const O = (x, q, V) => {
    x == null ? q._vnode && R(q._vnode, null, null, true) : _(q._vnode || null, x, q, null, null, null, V), q._vnode = x, X || (X = true, ic(), iv(), X = false);
  }, le = { p: _, um: R, m: G, r: re, mt: C, mc: z, pc: W, pbc: L, n: E, o: e };
  return { render: O, hydrate: void 0, createApp: W0(O) };
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
function ps(e, t, n = false) {
  const l = e.children, r = t.children;
  if (Ne(l) && Ne(r)) for (let a = 0; a < l.length; a++) {
    const o = l[a];
    let i = r[a];
    i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = r[a] = fl(r[a]), i.el = o.el), !n && i.patchFlag !== -2 && ps(o, i)), i.type === ri && (i.el = o.el);
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
      const h = ib();
      c = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!u) {
      const h = () => {
      };
      return h.stop = On, h.resume = On, h.pause = On, h;
    }
  }
  const s = jt;
  i.call = (h, g, _) => Rn(h, s, g, _);
  let f = false;
  a === "post" ? i.scheduler = (h) => {
    Ft(h, s && s.suspense);
  } : a !== "sync" && (f = true, i.scheduler = (h, g) => {
    g ? h() : ms(h);
  }), i.augmentJob = (h) => {
    t && (h.flags |= 4), f && (h.flags |= 2, s && (h.id = s.uid, h.i = s));
  };
  const m = C0(e, t, i);
  return _a && (c ? c.push(m) : u && m()), m;
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
const sb = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${pn(t)}Modifiers`] || e[`${Yl(t)}Modifiers`];
function db(e, t, ...n) {
  if (e.isUnmounted) return;
  const l = e.vnode.props || mt;
  let r = n;
  const a = t.startsWith("update:"), o = a && sb(l, t.slice(7));
  o && (o.trim && (r = n.map((s) => At(s) ? s.trim() : s)), o.number && (r = n.map(jg)));
  let i, u = l[i = Si(t)] || l[i = Si(pn(t))];
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
function pc(e) {
  const { type: t, vnode: n, proxy: l, withProxy: r, propsOptions: [a], slots: o, attrs: i, emit: u, render: c, renderCache: s, props: f, data: m, setupState: h, ctx: g, inheritAttrs: _ } = e, w = _o(e);
  let k, y;
  try {
    if (n.shapeFlag & 4) {
      const b = r || l, S = b;
      k = Bn(c.call(S, b, s, f, h, m, g)), y = i;
    } else {
      const b = t;
      k = Bn(b.length > 1 ? b(f, { attrs: i, slots: o, emit: u }) : b(f, null)), y = t.props ? i : fb(i);
    }
  } catch (b) {
    oa.length = 0, Go(b, e, 1), k = Je(Jt);
  }
  let p = k;
  if (y && _ !== false) {
    const b = Object.keys(y), { shapeFlag: S } = p;
    b.length && S & 7 && (a && b.some(ts) && (y = vb(y, a)), p = Gn(p, y, false, true));
  }
  return n.dirs && (p = Gn(p, null, false, true), p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs), n.transition && yl(p, n.transition), k = p, _o(w), k;
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
    if (u & 16) return l ? yc(l, o, c) : !!o;
    if (u & 8) {
      const s = t.dynamicProps;
      for (let f = 0; f < s.length; f++) {
        const m = s[f];
        if (o[m] !== l[m] && !li(c, m)) return true;
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
let pa = 1;
function _c(e, t = false) {
  pa += e, e < 0 && sn && t && (sn.hasOnce = true);
}
function Iv(e) {
  return e.dynamicChildren = pa > 0 ? sn || fr : null, bb(), pa > 0 && sn && sn.push(e), e;
}
function zv(e, t, n, l, r, a) {
  return Iv(Bt(e, t, n, l, r, a, true));
}
function Bl(e, t, n, l, r) {
  return Iv(Je(e, t, n, l, r, true));
}
function ya(e) {
  return e ? e.__v_isVNode === true : false;
}
function ml(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Nv = ({ key: e }) => e ?? null, oo = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? At(e) || yt(e) || Qe(e) ? { i: nn, r: e, k: t, f: !!n } : e : null);
function Bt(e, t = null, n = null, l = 0, r = null, a = e === on ? 0 : 1, o = false, i = false) {
  const u = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && Nv(t), ref: t && oo(t), scopeId: sv, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: a, patchFlag: l, dynamicProps: r, dynamicChildren: null, appContext: null, ctx: nn };
  return i ? (ys(u, n), a & 128 && e.normalize(u)) : n && (u.shapeFlag |= At(n) ? 8 : 16), pa > 0 && !o && sn && (u.patchFlag > 0 || a & 6) && u.patchFlag !== 32 && sn.push(u), u;
}
const Je = pb;
function pb(e, t = null, n = null, l = 0, r = null, a = false) {
  if ((!e || e === D0) && (e = Jt), ya(e)) {
    const i = Gn(e, t, true);
    return n && ys(i, n), pa > 0 && !a && sn && (i.shapeFlag & 6 ? sn[sn.indexOf(e)] = i : sn.push(i)), i.patchFlag = -2, i;
  }
  if (Mb(e) && (e = e.__vccOpts), t) {
    t = yb(t);
    let { class: i, style: u } = t;
    i && !At(i) && (t.class = rs(i)), St(u) && (vs(u) && !Ne(u) && (u = It({}, u)), t.style = Yo(u));
  }
  const o = At(e) ? 1 : Co(e) ? 128 : dv(e) ? 64 : St(e) ? 4 : Qe(e) ? 2 : 0;
  return Bt(e, t, n, l, r, o, a, true);
}
function yb(e) {
  return e ? vs(e) || Ev(e) ? It({}, e) : e : null;
}
function Gn(e, t, n = false, l = false) {
  const { props: r, ref: a, patchFlag: o, children: i, transition: u } = e, c = t ? _b(r || {}, t) : r, s = { __v_isVNode: true, __v_skip: true, type: e.type, props: c, key: c && Nv(c), ref: t && t.ref ? n && a ? Ne(a) ? a.concat(oo(t)) : [a, oo(t)] : oo(t) : a, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: i, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== on ? o === -1 ? 16 : o | 16 : o, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: u, component: e.component, suspense: e.suspense, ssContent: e.ssContent && Gn(e.ssContent), ssFallback: e.ssFallback && Gn(e.ssFallback), el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return u && l && yl(s, u.clone(s)), s;
}
function Fl(e = " ", t = 0) {
  return Je(ri, null, e, t);
}
function wc(e = "", t = false) {
  return t ? (Xn(), Bl(Jt, null, e)) : Je(Jt, null, e);
}
function Bn(e) {
  return e == null || typeof e == "boolean" ? Je(Jt) : Ne(e) ? Je(on, null, e.slice()) : ya(e) ? fl(e) : Je(ri, null, String(e));
}
function fl(e) {
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
    if (xl(), a(), (i || e.sp) && !hr(e) && yv(e), i) {
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
  return l === 2 ? St(t) && !Ne(t) ? ya(t) ? Je(e, null, [t]) : Je(e, t) : Je(e, null, t) : (l > 3 ? n = Array.prototype.slice.call(arguments, 2) : l === 3 && ya(n) && (n = [n]), Je(e, t, n));
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
  for (const M in e) M in Qv || (t[M] = e[M]);
  if (e.css === false) return t;
  const { name: n = "v", type: l, duration: r, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: i = `${n}-enter-to`, appearFromClass: u = a, appearActiveClass: c = o, appearToClass: s = i, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: m = `${n}-leave-active`, leaveToClass: h = `${n}-leave-to` } = e, g = Lb(r), _ = g && g[0], w = g && g[1], { onBeforeEnter: k, onEnter: y, onEnterCancelled: p, onLeave: b, onLeaveCancelled: S, onBeforeAppear: $ = k, onAppear: F = y, onAppearCancelled: z = p } = t, B = (M, A, C, H) => {
    M._enterCancelled = H, ul(M, A ? s : i), ul(M, A ? c : o), C && C();
  }, L = (M, A) => {
    M._isLeaving = false, ul(M, f), ul(M, h), ul(M, m), A && A();
  }, D = (M) => (A, C) => {
    const H = M ? F : y, Q = () => B(A, M, C);
    Ml(H, [A, Q]), qc(() => {
      ul(A, M ? u : a), $n(A, M ? s : i), Tc(H) || Mc(A, l, _, Q);
    });
  };
  return It(t, { onBeforeEnter(M) {
    Ml(k, [M]), $n(M, a), $n(M, o);
  }, onBeforeAppear(M) {
    Ml($, [M]), $n(M, u), $n(M, c);
  }, onEnter: D(false), onAppear: D(true), onLeave(M, A) {
    M._isLeaving = true;
    const C = () => L(M, A);
    $n(M, f), M._enterCancelled ? ($n(M, m), Eu()) : (Eu(), $n(M, m)), qc(() => {
      M._isLeaving && (ul(M, f), $n(M, h), Tc(b) || Mc(M, l, w, C));
    }), Ml(b, [M, C]);
  }, onEnterCancelled(M) {
    B(M, false, void 0, true), Ml(p, [M]);
  }, onAppearCancelled(M) {
    B(M, true, void 0, true), Ml(z, [M]);
  }, onLeaveCancelled(M) {
    L(M), Ml(S, [M]);
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
    e.removeEventListener(c, m), a();
  }, m = (h) => {
    h.target === e && ++s >= u && f();
  };
  setTimeout(() => {
    s < u && f();
  }, i + 1), e.addEventListener(c, m);
}
function Yv(e, t) {
  const n = window.getComputedStyle(e), l = (g) => (n[g] || "").split(", "), r = l(`${ll}Delay`), a = l(`${ll}Duration`), o = Ec(r, a), i = l(`${Or}Delay`), u = l(`${Or}Duration`), c = Ec(i, u);
  let s = null, f = 0, m = 0;
  t === ll ? o > 0 && (s = ll, f = o, m = a.length) : t === Or ? c > 0 && (s = Or, f = c, m = u.length) : (f = Math.max(o, c), s = f > 0 ? o > c ? ll : Or : null, m = s ? s === ll ? a.length : u.length : 0);
  const h = s === ll && /\b(transform|all)(,|$)/.test(l(`${ll}Property`).toString());
  return { type: s, timeout: f, propCount: m, hasTransform: h };
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
  let l = pn(t);
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
  t === "class" ? Fb(e, l, o) : t === "style" ? Db(e, n, l) : Qo(t) ? ts(t) || Hb(e, t, n, l, a) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Xb(e, t, l, o)) ? (Bc(e, t, l), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Lc(e, t, l, o, a, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !At(l)) ? Bc(e, pn(t), l, a, t) : (t === "true-value" ? e._trueValue = l : t === "false-value" && (e._falseValue = l), Lc(e, t, l, o));
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
    if (!lp(r[0].el, n.vnode.el, o)) return;
    r.forEach(ep), r.forEach(tp);
    const i = r.filter(np);
    Eu(), i.forEach((u) => {
      const c = u.el, s = c.style;
      $n(c, o), s.transform = s.webkitTransform = s.transitionDuration = "";
      const f = c[qo] = (m) => {
        m && m.target !== c || (!m || /transform$/.test(m.propertyName)) && (c.removeEventListener("transitionend", f), c[qo] = null, ul(c, o));
      };
      c.addEventListener("transitionend", f);
    });
  }), () => {
    const o = Xe(e), i = Wv(o);
    let u = o.tag || on;
    if (r = [], a) for (let c = 0; c < a.length; c++) {
      const s = a[c];
      s.el && s.el instanceof Element && (r.push(s), yl(s, ba(s, i, l, n)), Zv.set(s, s.el.getBoundingClientRect()));
    }
    a = t.default ? hs(t.default()) : [];
    for (let c = 0; c < a.length; c++) {
      const s = a[c];
      s.key != null && yl(s, ba(s, i, l, n));
    }
    return Je(u, null, a);
  };
} }), Jb = Zb;
function ep(e) {
  const t = e.el;
  t[qo] && t[qo](), t[Dc] && t[Dc]();
}
function tp(e) {
  Jv.set(e, e.el.getBoundingClientRect());
}
function np(e) {
  const t = Zv.get(e), n = Jv.get(e), l = t.left - n.left, r = t.top - n.top;
  if (l || r) {
    const a = e.el.style;
    return a.transform = a.webkitTransform = `translate(${l}px,${r}px)`, a.transitionDuration = "0s", e;
  }
}
function lp(e, t, n) {
  const l = e.cloneNode(), r = e[Sr];
  r && r.forEach((i) => {
    i.split(/\s+/).forEach((u) => u && l.classList.remove(u));
  }), n.split(/\s+/).forEach((i) => i && l.classList.add(i)), l.style.display = "none";
  const a = t.nodeType === 1 ? t : t.parentNode;
  a.appendChild(l);
  const { hasTransform: o } = Yv(l);
  return a.removeChild(l), o;
}
const rp = It({ patchProp: Yb }, Pb);
let Ic;
function ap() {
  return Ic || (Ic = nb(rp));
}
const em = (...e) => {
  const t = ap().createApp(...e), { mount: n } = t;
  return t.mount = (l) => {
    const r = ip(l);
    if (!r) return;
    const a = t._component;
    !Qe(a) && !a.render && !a.template && (a.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, false, op(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
};
function op(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function ip(e) {
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
var ln = U(__QUASAR_SSR_CLIENT__ && (__QUASAR_SSR_PWA__ ? document.body.getAttribute("data-server-rendered") !== null : true)), Ru;
function up(e, t) {
  const n = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
  return { browser: n[5] || n[3] || n[1] || "", version: n[4] || n[2] || "0", platform: t[0] || "" };
}
function sp(e) {
  return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
}
var nm = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function cp(e) {
  const t = e.toLowerCase(), n = sp(t), l = up(t, n), r = { mobile: false, desktop: false, cordova: false, capacitor: false, nativeMobile: false, electron: false, bex: false, linux: false, mac: false, win: false, cros: false, chrome: false, firefox: false, opera: false, safari: false, vivaldi: false, edge: false, edgeChromium: false, ie: false, webkit: false, android: false, ios: false, ipad: false, iphone: false, ipod: false, kindle: false, winphone: false, blackberry: false, playbook: false, silk: false };
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
var zc = navigator.userAgent || navigator.vendor || window.opera, dp = { has: { touch: false, webStorage: false }, within: { iframe: false } }, De = { userAgent: zc, is: cp(zc), has: { touch: nm }, within: { iframe: window.self !== window.top } }, Au = { install(e) {
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
  }), Object.assign(Au, De), ln.value === true && (Object.assign(Au, Ru, dp), Ru = null);
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
function fp(e) {
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
var Oi = ["sm", "md", "lg", "xl"], { passive: Nc } = dt, vp = Cl({ width: 0, height: 0, name: "xs", sizes: { sm: 600, md: 1024, lg: 1440, xl: 1920 }, lt: { sm: true, md: true, lg: true, xl: true }, gt: { xs: false, sm: false, md: false, lg: false }, xs: true, sm: false, md: false, lg: false, xl: false }, { setSizes: xt, setDebounce: xt, install({ $q: e, onSSRHydrated: t }) {
  var _a3;
  if (e.screen = this, this.__installed === true) {
    e.config.screen !== void 0 && (e.config.screen.bodyClasses === false ? document.body.classList.remove(`screen--${this.name}`) : this.__update(true));
    return;
  }
  const { visualViewport: n } = window, l = n || window, r = document.scrollingElement || document.documentElement, a = n === void 0 || De.is.mobile === true ? () => [Math.max(window.innerWidth, r.clientWidth), Math.max(window.innerHeight, r.clientHeight)] : () => [n.width * n.scale + window.innerWidth - r.clientWidth, n.height * n.scale + window.innerHeight - r.clientHeight], o = ((_a3 = e.config.screen) == null ? void 0 : _a3.bodyClasses) === true;
  this.__update = (f) => {
    const [m, h] = a();
    if (h !== this.height && (this.height = h), m !== this.width) this.width = m;
    else if (f !== true) return;
    let g = this.sizes;
    this.gt.xs = m >= g.sm, this.gt.sm = m >= g.md, this.gt.md = m >= g.lg, this.gt.lg = m >= g.xl, this.lt.sm = m < g.sm, this.lt.md = m < g.md, this.lt.lg = m < g.lg, this.lt.xl = m < g.xl, this.xs = this.lt.sm, this.sm = this.gt.xs === true && this.lt.md === true, this.md = this.gt.sm === true && this.lt.lg === true, this.lg = this.gt.md === true && this.lt.xl === true, this.xl = this.gt.lg, g = this.xs === true && "xs" || this.sm === true && "sm" || this.md === true && "md" || this.lg === true && "lg" || "xl", g !== this.name && (o === true && (document.body.classList.remove(`screen--${this.name}`), document.body.classList.add(`screen--${g}`)), this.name = g);
  };
  let i, u = {}, c = 16;
  this.setSizes = (f) => {
    Oi.forEach((m) => {
      f[m] !== void 0 && (u[m] = f[m]);
    });
  }, this.setDebounce = (f) => {
    c = f;
  };
  const s = () => {
    const f = getComputedStyle(document.body);
    f.getPropertyValue("--q-size-sm") && Oi.forEach((m) => {
      this.sizes[m] = parseInt(f.getPropertyValue(`--q-size-${m}`), 10);
    }), this.setSizes = (m) => {
      Oi.forEach((h) => {
        m[h] && (this.sizes[h] = m[h]);
      }), this.__update(true);
    }, this.setDebounce = (m) => {
      i !== void 0 && l.removeEventListener("resize", i, Nc), i = m > 0 ? Ar(this.__update, m) : this.__update, l.addEventListener("resize", i, Nc);
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
function mp(e, t, n = document.body) {
  if (typeof e != "string") throw new TypeError("Expected a string as propName");
  if (typeof t != "string") throw new TypeError("Expected a string as value");
  if (!(n instanceof Element)) throw new TypeError("Expected a DOM element");
  n.style.setProperty(`--q-${e}`, t);
}
var am = false;
function hp(e) {
  am = e.isComposing === true;
}
function Xl(e) {
  return am === true || e !== Object(e) || e.isComposing === true || e.qKeyEvent === true;
}
function yn(e, t) {
  return Xl(e) === true ? false : [].concat(t).includes(e.keyCode);
}
function om(e) {
  if (e.ios === true) return "ios";
  if (e.android === true) return "android";
}
function gp({ is: e, has: t, within: n }, l) {
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
function bp() {
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
function pp(e) {
  for (const t in e) mp(t, e[t]);
}
var yp = { install(e) {
  if (this.__installed !== true) {
    if (ln.value === true) bp();
    else {
      const { $q: t } = e;
      t.config.brand !== void 0 && pp(t.config.brand);
      const n = gp(De, t.config);
      document.body.classList.add.apply(document.body.classList, n);
    }
    De.is.ios === true && document.body.addEventListener("touchstart", xt), window.addEventListener("keydown", hp, true);
  }
} }, im = () => true;
function _p(e) {
  return typeof e == "string" && e !== "" && e !== "/" && e !== "#/";
}
function wp(e) {
  return e.startsWith("#") === true && (e = e.substring(1)), e.startsWith("/") === false && (e = "/" + e), e.endsWith("/") === true && (e = e.substring(0, e.length - 1)), "#" + e;
}
function xp(e) {
  if (e.backButtonExit === false) return () => false;
  if (e.backButtonExit === "*") return im;
  const t = ["#/"];
  return Array.isArray(e.backButtonExit) === true && t.push(...e.backButtonExit.filter(_p).map(wp)), () => t.includes(window.location.hash);
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
  const r = xp(Object.assign({ backButtonExit: true }, l)), a = () => {
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
} }), ii = Ll, Sp = { name: "material-icons", type: { positive: "check_circle", negative: "warning", info: "info", warning: "priority_high" }, arrow: { up: "arrow_upward", right: "arrow_forward", down: "arrow_downward", left: "arrow_back", dropdown: "arrow_drop_down" }, chevron: { left: "chevron_left", right: "chevron_right" }, colorPicker: { spectrum: "gradient", tune: "tune", palette: "style" }, pullToRefresh: { icon: "refresh" }, carousel: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down", navigationIcon: "lens" }, chip: { remove: "cancel", selected: "check" }, datetime: { arrowLeft: "chevron_left", arrowRight: "chevron_right", now: "access_time", today: "today" }, editor: { bold: "format_bold", italic: "format_italic", strikethrough: "strikethrough_s", underline: "format_underlined", unorderedList: "format_list_bulleted", orderedList: "format_list_numbered", subscript: "vertical_align_bottom", superscript: "vertical_align_top", hyperlink: "link", toggleFullscreen: "fullscreen", quote: "format_quote", left: "format_align_left", center: "format_align_center", right: "format_align_right", justify: "format_align_justify", print: "print", outdent: "format_indent_decrease", indent: "format_indent_increase", removeFormat: "format_clear", formatting: "text_format", fontSize: "format_size", align: "format_align_left", hr: "remove", undo: "undo", redo: "redo", heading: "format_size", code: "code", size: "format_size", font: "font_download", viewSource: "code" }, expansionItem: { icon: "keyboard_arrow_down", denseIcon: "arrow_drop_down" }, fab: { icon: "add", activeIcon: "close" }, field: { clear: "cancel", error: "error" }, pagination: { first: "first_page", prev: "keyboard_arrow_left", next: "keyboard_arrow_right", last: "last_page" }, rating: { icon: "grade" }, stepper: { done: "check", active: "edit", error: "warning" }, tabs: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down" }, table: { arrowUp: "arrow_upward", warning: "warning", firstPage: "first_page", prevPage: "chevron_left", nextPage: "chevron_right", lastPage: "last_page" }, tree: { icon: "play_arrow" }, uploader: { done: "done", clear: "clear", add: "add_box", upload: "cloud_upload", removeQueue: "clear_all", removeUploaded: "done_all" } }, $u = Cl({ iconMapFn: null, __qIconSet: {} }, { set(e, t) {
  const n = { ...e };
  n.set = $u.set, Object.assign($u.__qIconSet, n);
}, install({ $q: e, iconSet: t, ssrContext: n }) {
  e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn), e.iconSet = this.__qIconSet, Vt(e, "iconMapFn", () => this.iconMapFn, (l) => {
    this.iconMapFn = l;
  }), this.__installed === true ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qIconSet, { get() {
    return Reflect.get(...arguments);
  }, ownKeys(l) {
    return Reflect.ownKeys(l).filter((r) => r !== "set");
  } }), this.set(t || Sp));
} }), um = $u, sm = "_q_", cm = "_q_t_", dm = "_q_s_", Gl = "_q_l_", fm = "_q_pc_", vm = "_q_f_", mm = "_q_fo_", hm = "_q_tabs_", gm = "_q_u_";
function ot() {
}
var Mo = {}, bm = false;
function Cp() {
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
function kp(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function xa(e) {
  return typeof e == "number" && isFinite(e);
}
var jc = [lm, yp, rm, vp, wa, ii, um];
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
function Tp(e, t, n) {
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
var qp = function(e, t = {}) {
  const n = { version: "2.18.1" };
  bm === false ? (t.config !== void 0 && Object.assign(Mo, t.config), n.config = { ...Mo }, Cp()) : n.config = t.config || {}, Tp(e, t, { parentApp: e, $q: n, lang: t.lang, iconSet: t.iconSet, onSSRHydrated: [] });
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
var ws = XMLHttpRequest, pm = ws.prototype.open, Mp = ["top", "right", "bottom", "left"], Ro = [], ia = 0;
function Ep({ p: e, pos: t, active: n, horiz: l, reverse: r, dir: a }) {
  let o = 1, i = 1;
  return l === true ? (r === true && (o = -1), t === "bottom" && (i = -1), { transform: `translate3d(${o * (e - 100)}%,${n ? 0 : i * -200}%,0)` }) : (r === true && (i = -1), t === "right" && (o = -1), { transform: `translate3d(${n ? 0 : a * o * -200}%,${i * (e - 100)}%,0)` });
}
function Rp(e, t) {
  return typeof t != "number" && (e < 25 ? t = Math.random() * 3 + 3 : e < 65 ? t = Math.random() * 3 : e < 85 ? t = Math.random() * 2 : e < 99 ? t = 0.6 : t = 0), ct(e + t, 0, 100);
}
function Ap(e) {
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
    this.addEventListener("loadstart", r, { once: true }), this.addEventListener("loadend", a, { once: true }), pm.apply(this, arguments);
  });
}
function Pp(e) {
  Ro = Ro.filter((t) => t.start !== e), ia = Math.max(0, ia - 1), ia === 0 && (ws.prototype.open = pm);
}
var $p = he({ name: "QAjaxBar", props: { position: { type: String, default: "top", validator: (e) => Mp.includes(e) }, size: { type: String, default: "2px" }, color: String, skipHijack: Boolean, reverse: Boolean, hijackFilter: Function }, emits: ["start", "stop"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), l = U(0), r = U(false), a = U(true);
  let o = 0, i = null, u;
  const c = v(() => `q-loading-bar q-loading-bar--${e.position}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (a.value === true ? "" : " no-transition")), s = v(() => e.position === "top" || e.position === "bottom"), f = v(() => s.value === true ? "height" : "width"), m = v(() => {
    const p = r.value, b = Ep({ p: l.value, pos: e.position, active: p, horiz: s.value, reverse: n.$q.lang.rtl === true && ["top", "bottom"].includes(e.position) ? e.reverse === false : e.reverse, dir: n.$q.lang.rtl === true ? -1 : 1 });
    return b[f.value] = e.size, b.opacity = p ? 1 : 0, b;
  }), h = v(() => r.value === true ? { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": l.value } : { "aria-hidden": "true" });
  function g(p = 300) {
    const b = u;
    return u = Math.max(0, p) || 0, o++, o > 1 ? (b === 0 && p > 0 ? k() : i !== null && b > 0 && p <= 0 && (clearTimeout(i), i = null), o) : (i !== null && clearTimeout(i), t("start"), l.value = 0, i = setTimeout(() => {
      i = null, a.value = true, p > 0 && k();
    }, r._value === true ? 500 : 1), r._value !== true && (r.value = true, a.value = false), o);
  }
  function _(p) {
    return o > 0 && (l.value = Rp(l.value, p)), o;
  }
  function w() {
    if (o = Math.max(0, o - 1), o > 0) return o;
    i !== null && (clearTimeout(i), i = null), t("stop");
    const p = () => {
      a.value = true, l.value = 100, i = setTimeout(() => {
        i = null, r.value = false;
      }, 1e3);
    };
    return l.value === 0 ? i = setTimeout(p, 1) : p(), o;
  }
  function k() {
    l.value < 100 && (i = setTimeout(() => {
      i = null, _(), k();
    }, u));
  }
  let y;
  return ft(() => {
    e.skipHijack !== true && (y = true, Ap({ start: g, stop: w, hijackFilter: v(() => e.hijackFilter || null) }));
  }), Ke(() => {
    i !== null && clearTimeout(i), y === true && Pp(g);
  }), Object.assign(n, { start: g, stop: w, increment: _ }), () => d("div", { class: c.value, style: m.value, ...h.value });
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
var Kc = "0 0 24 24", Vi = (e) => e, Di = (e) => `ionicons ${e}`, ym = { "mdi-": (e) => `mdi ${e}`, "icon-": Vi, "bt-": (e) => `bt ${e}`, "eva-": (e) => `eva ${e}`, "ion-md": Di, "ion-ios": Di, "ion-logo": Di, "iconfont ": Vi, "ti-": (e) => `themify-icon ${e}`, "bi-": (e) => `bootstrap-icons ${e}`, "i-": Vi }, _m = { o_: "-outlined", r_: "-round", s_: "-sharp" }, wm = { sym_o_: "-outlined", sym_r_: "-rounded", sym_s_: "-sharp" }, Lp = new RegExp("^(" + Object.keys(ym).join("|") + ")"), Bp = new RegExp("^(" + Object.keys(_m).join("|") + ")"), Wc = new RegExp("^(" + Object.keys(wm).join("|") + ")"), Fp = /^[Mm]\s?[-+]?\.?\d/, Op = /^img:/, Vp = /^svguse:/, Dp = /^ion-/, Ip = /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, et = he({ name: "QIcon", props: { ...el, tag: { type: String, default: "i" }, name: String, color: String, left: Boolean, right: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), l = tl(e), r = v(() => "q-icon" + (e.left === true ? " on-left" : "") + (e.right === true ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), a = v(() => {
    let o, i = e.name;
    if (i === "none" || !i) return { none: true };
    if (n.iconMapFn !== null) {
      const s = n.iconMapFn(i);
      if (s !== void 0) if (s.icon !== void 0) {
        if (i = s.icon, i === "none" || !i) return { none: true };
      } else return { cls: s.cls, content: s.content !== void 0 ? s.content : " " };
    }
    if (Fp.test(i) === true) {
      const [s, f = Kc] = i.split("|");
      return { svg: true, viewBox: f, nodes: s.split("&&").map((m) => {
        const [h, g, _] = m.split("@@");
        return d("path", { style: g, d: h, transform: _ });
      }) };
    }
    if (Op.test(i) === true) return { img: true, src: i.substring(4) };
    if (Vp.test(i) === true) {
      const [s, f = Kc] = i.split("|");
      return { svguse: true, src: s.substring(7), viewBox: f };
    }
    let u = " ";
    const c = i.match(Lp);
    if (c !== null) o = ym[c[1]](i);
    else if (Ip.test(i) === true) o = i;
    else if (Dp.test(i) === true) o = `ionicons ion-${n.platform.is.ios === true ? "ios" : "md"}${i.substring(3)}`;
    else if (Wc.test(i) === true) {
      o = "notranslate material-symbols";
      const s = i.match(Wc);
      s !== null && (i = i.substring(6), o += wm[s[1]]), u = i;
    } else {
      o = "notranslate material-icons";
      const s = i.match(Bp);
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
} }), zp = ["top", "middle", "bottom"];
he({ name: "QBadge", props: { color: String, textColor: String, floating: Boolean, transparent: Boolean, multiLine: Boolean, outline: Boolean, rounded: Boolean, label: [Number, String], align: { type: String, validator: (e) => zp.includes(e) } }, setup(e, { slots: t }) {
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
var xm = { left: "start", center: "center", right: "end", between: "between", around: "around", evenly: "evenly", stretch: "stretch" }, Np = Object.keys(xm), Ss = { align: { type: String, validator: (e) => Np.includes(e) } };
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
var Hp = ["", true];
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
        const m = i < c, h = f.props !== null && Hp.includes(f.props.disable), g = (m === true ? "" : " q-breadcrumbs--last") + (h !== true && m === true ? a.value : "");
        i++, u.push(d("div", { class: `flex items-center${g}` }, [f])), m === true && u.push(d("div", { class: "q-breadcrumbs__separator" + r.value }, s()));
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
function jp(e, t) {
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
function Up(e, t) {
  return Array.isArray(e) === true ? Gc(e, t) : Array.isArray(t) === true ? Gc(t, e) : e === t;
}
function Qp(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (const n in e) if (Up(e[n], t[n]) === false) return false;
  return true;
}
var Cm = { to: [String, Object], replace: Boolean, href: String, target: String, disable: Boolean }, $a = { ...Cm, exact: Boolean, activeClass: { type: String, default: "q-router-link--active" }, exactActiveClass: { type: String, default: "q-router-link--exact-active" } };
function si({ fallbackTag: e, useDisableForRouterLinkProps: t = true } = {}) {
  const n = xe(), { props: l, proxy: r, emit: a } = n, o = Ts(n), i = v(() => l.disable !== true && l.href !== void 0), u = v(t === true ? () => o === true && l.disable !== true && i.value !== true && l.to !== void 0 && l.to !== null && l.to !== "" : () => o === true && i.value !== true && l.to !== void 0 && l.to !== null && l.to !== ""), c = v(() => u.value === true ? y(l.to) : null), s = v(() => c.value !== null), f = v(() => i.value === true || s.value === true), m = v(() => l.type === "a" || f.value === true ? "a" : l.tag || e || "div"), h = v(() => i.value === true ? { href: l.href, target: l.target } : s.value === true ? { href: c.value.href, target: l.target } : {}), g = v(() => {
    if (s.value === false) return -1;
    const { matched: S } = c.value, { length: $ } = S, F = S[$ - 1];
    if (F === void 0) return -1;
    const z = r.$route.matched;
    if (z.length === 0) return -1;
    const B = z.findIndex(Xc.bind(null, F));
    if (B !== -1) return B;
    const L = Yc(S[$ - 2]);
    return $ > 1 && Yc(F) === L && z[z.length - 1].path !== L ? z.findIndex(Xc.bind(null, S[$ - 2])) : B;
  }), _ = v(() => s.value === true && g.value !== -1 && jp(r.$route.params, c.value.params)), w = v(() => _.value === true && g.value === r.$route.matched.length - 1 && Qp(r.$route.params, c.value.params)), k = v(() => s.value === true ? w.value === true ? ` ${l.exactActiveClass} ${l.activeClass}` : l.exact === true ? "" : _.value === true ? ` ${l.activeClass}` : "" : "");
  function y(S) {
    try {
      return r.$router.resolve(S);
    } catch {
    }
    return null;
  }
  function p(S, { returnRouterError: $, to: F = l.to, replace: z = l.replace } = {}) {
    if (l.disable === true) return S.preventDefault(), Promise.resolve(false);
    if (S.metaKey || S.altKey || S.ctrlKey || S.shiftKey || S.button !== void 0 && S.button !== 0 || l.target === "_blank") return Promise.resolve(false);
    S.preventDefault();
    const B = r.$router[z === true ? "replace" : "push"](F);
    return $ === true ? B : B.then(() => {
    }).catch(() => {
    });
  }
  function b(S) {
    if (s.value === true) {
      const $ = (F) => p(S, F);
      a("click", S, $), S.defaultPrevented !== true && $();
    } else a("click", S);
  }
  return { hasRouterLink: s, hasHrefLink: i, hasLink: f, linkTag: m, resolvedLink: c, linkIsActive: _, linkIsExactActive: w, linkClass: k, linkAttrs: h, getLink: y, navigateToRouterLink: p, navigateOnClick: b };
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
function Kp(e) {
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
  const o = document.createElement("span"), i = document.createElement("span"), u = tn(e), { left: c, top: s, width: f, height: m } = t.getBoundingClientRect(), h = Math.sqrt(f * f + m * m), g = h / 2, _ = `${(f - h) / 2}px`, w = a ? _ : `${u.left - c - g}px`, k = `${(m - h) / 2}px`, y = a ? k : `${u.top - s - g}px`;
  i.className = "q-ripple__inner", Vu(i, { height: `${h}px`, width: `${h}px`, transform: `translate3d(${w},${y},0) scale3d(.2,.2,1)`, opacity: 0 }), o.className = `q-ripple${r ? " text-" + r : ""}`, o.setAttribute("dir", "ltr"), o.appendChild(i), t.appendChild(o);
  const p = () => {
    o.remove(), clearTimeout(b);
  };
  n.abort.push(p);
  let b = setTimeout(() => {
    i.classList.add("q-ripple__inner--enter"), i.style.transform = `translate3d(${_},${k},0) scale3d(1,1,1)`, i.style.opacity = 0.2, b = setTimeout(() => {
      i.classList.remove("q-ripple__inner--enter"), i.classList.add("q-ripple__inner--leave"), i.style.opacity = 0, b = setTimeout(() => {
        o.remove(), n.abort.splice(n.abort.indexOf(p), 1);
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
    l.enabled === true && r.qSkipRipple !== true && yn(r, l.modifiers.keyCodes) === true && r.type === `key${l.modifiers.early === true ? "down" : "up"}` && Zc(r, e, l, true);
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
} }), Po = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 }, Wp = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, Yp = ["button", "submit", "reset"], Xp = /[^\s]\/[^\s]/, qm = ["flat", "outline", "push", "unelevated"];
function qs(e, t) {
  return e.flat === true ? "flat" : e.outline === true ? "outline" : e.push === true ? "push" : e.unelevated === true ? "unelevated" : t;
}
function Mm(e) {
  const t = qs(e);
  return t !== void 0 ? { [t]: true } : {};
}
var Ms = { ...el, ...Cm, type: { type: String, default: "button" }, label: [Number, String], icon: String, iconRight: String, ...qm.reduce((e, t) => (e[t] = Boolean) && e, {}), square: Boolean, rounded: Boolean, glossy: Boolean, size: String, fab: Boolean, fabMini: Boolean, padding: String, color: String, textColor: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, tabindex: [Number, String], ripple: { type: [Boolean, Object], default: true }, align: { ...Ss.align, default: "center" }, stack: Boolean, stretch: Boolean, loading: { type: Boolean, default: null }, disable: Boolean }, Gp = { ...Ms, round: Boolean };
function Zp(e) {
  const t = tl(e, Wp), n = Cs(e), { hasRouterLink: l, hasLink: r, linkTag: a, linkAttrs: o, navigateOnClick: i } = si({ fallbackTag: "button" }), u = v(() => {
    const w = e.fab === false && e.fabMini === false ? t.value : {};
    return e.padding !== void 0 ? Object.assign({}, w, { padding: e.padding.split(/\s+/).map((k) => k in Po ? Po[k] + "px" : k).join(" "), minWidth: "0", minHeight: "0" }) : w;
  }), c = v(() => e.rounded === true || e.fab === true || e.fabMini === true), s = v(() => e.disable !== true && e.loading !== true), f = v(() => s.value === true ? e.tabindex || 0 : -1), m = v(() => qs(e, "standard")), h = v(() => {
    const w = { tabindex: f.value };
    return r.value === true ? Object.assign(w, o.value) : Yp.includes(e.type) === true && (w.type = e.type), a.value === "a" ? (e.disable === true ? w["aria-disabled"] = "true" : w.href === void 0 && (w.role = "button"), l.value !== true && Xp.test(e.type) === true && (w.type = e.type)) : e.disable === true && (w.disabled = "", w["aria-disabled"] = "true"), e.loading === true && e.percentage !== void 0 && Object.assign(w, { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": e.percentage }), w;
  }), g = v(() => {
    let w;
    e.color !== void 0 ? e.flat === true || e.outline === true ? w = `text-${e.textColor || e.color}` : w = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (w = `text-${e.textColor}`);
    const k = e.round === true ? "round" : `rectangle${c.value === true ? " q-btn--rounded" : e.square === true ? " q-btn--square" : ""}`;
    return `q-btn--${m.value} q-btn--${k}` + (w !== void 0 ? " " + w : "") + (s.value === true ? " q-btn--actionable q-focusable q-hoverable" : e.disable === true ? " disabled" : "") + (e.fab === true ? " q-btn--fab" : e.fabMini === true ? " q-btn--fab-mini" : "") + (e.noCaps === true ? " q-btn--no-uppercase" : "") + (e.dense === true ? " q-btn--dense" : "") + (e.stretch === true ? " no-border-radius self-stretch" : "") + (e.glossy === true ? " glossy" : "") + (e.square ? " q-btn--square" : "");
  }), _ = v(() => n.value + (e.stack === true ? " column" : " row") + (e.noWrap === true ? " no-wrap text-no-wrap" : "") + (e.loading === true ? " q-btn__content--hidden" : ""));
  return { classes: g, style: u, innerClasses: _, attributes: h, hasLink: r, linkTag: a, navigateOnClick: i, isActionable: s };
}
var { passiveCapture: vn } = dt, er = null, tr = null, nr = null, Ze = he({ name: "QBtn", props: { ...Gp, percentage: Number, darkPercentage: Boolean, onTouchstart: [Function, Array] }, emits: ["click", "keydown", "mousedown", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), { classes: r, style: a, innerClasses: o, attributes: i, hasLink: u, linkTag: c, navigateOnClick: s, isActionable: f } = Zp(e), m = U(null), h = U(null);
  let g = null, _, w = null;
  const k = v(() => e.label !== void 0 && e.label !== null && e.label !== ""), y = v(() => e.disable === true || e.ripple === false ? false : { keyCodes: u.value === true ? [13, 32] : [13], ...e.ripple === true ? {} : e.ripple }), p = v(() => ({ center: e.round })), b = v(() => {
    const C = Math.max(0, Math.min(100, e.percentage));
    return C > 0 ? { transition: "transform 0.6s", transform: `translateX(${C - 100}%)` } : {};
  }), S = v(() => {
    if (e.loading === true) return { onMousedown: A, onTouchstart: A, onClick: A, onKeydown: A, onKeyup: A };
    if (f.value === true) {
      const C = { onClick: F, onKeydown: z, onMousedown: L };
      if (l.$q.platform.has.touch === true) {
        const H = e.onTouchstart !== void 0 ? "" : "Passive";
        C[`onTouchstart${H}`] = B;
      }
      return C;
    }
    return { onClick: je };
  }), $ = v(() => ({ ref: m, class: "q-btn q-btn-item non-selectable no-outline " + r.value, style: a.value, ...i.value, ...S.value }));
  function F(C) {
    if (m.value !== null) {
      if (C !== void 0) {
        if (C.defaultPrevented === true) return;
        const H = document.activeElement;
        if (e.type === "submit" && H !== document.body && m.value.contains(H) === false && H.contains(m.value) === false) {
          C.qAvoidFocus !== true && m.value.focus();
          const Q = () => {
            var _a3;
            document.removeEventListener("keydown", je, true), document.removeEventListener("keyup", Q, vn), (_a3 = m.value) == null ? void 0 : _a3.removeEventListener("blur", Q, vn);
          };
          document.addEventListener("keydown", je, true), document.addEventListener("keyup", Q, vn), m.value.addEventListener("blur", Q, vn);
        }
      }
      s(C);
    }
  }
  function z(C) {
    m.value !== null && (n("keydown", C), yn(C, [13, 32]) === true && tr !== m.value && (tr !== null && M(), C.defaultPrevented !== true && (C.qAvoidFocus !== true && m.value.focus(), tr = m.value, m.value.classList.add("q-btn--active"), document.addEventListener("keyup", D, true), m.value.addEventListener("blur", D, vn)), je(C)));
  }
  function B(C) {
    m.value !== null && (n("touchstart", C), C.defaultPrevented !== true && (er !== m.value && (er !== null && M(), er = m.value, g = C.target, g.addEventListener("touchcancel", D, vn), g.addEventListener("touchend", D, vn)), _ = true, w !== null && clearTimeout(w), w = setTimeout(() => {
      w = null, _ = false;
    }, 200)));
  }
  function L(C) {
    m.value !== null && (C.qSkipRipple = _ === true, n("mousedown", C), C.defaultPrevented !== true && nr !== m.value && (nr !== null && M(), nr = m.value, m.value.classList.add("q-btn--active"), document.addEventListener("mouseup", D, vn)));
  }
  function D(C) {
    if (m.value !== null && !((C == null ? void 0 : C.type) === "blur" && document.activeElement === m.value)) {
      if ((C == null ? void 0 : C.type) === "keyup") {
        if (tr === m.value && yn(C, [13, 32]) === true) {
          const H = new MouseEvent("click", C);
          H.qKeyEvent = true, C.defaultPrevented === true && Dt(H), C.cancelBubble === true && wt(H), m.value.dispatchEvent(H), je(C), C.qKeyEvent = true;
        }
        n("keyup", C);
      }
      M();
    }
  }
  function M(C) {
    var _a3, _b2;
    const H = h.value;
    C !== true && (er === m.value || nr === m.value) && H !== null && H !== document.activeElement && (H.setAttribute("tabindex", -1), H.focus()), er === m.value && (g !== null && (g.removeEventListener("touchcancel", D, vn), g.removeEventListener("touchend", D, vn)), er = g = null), nr === m.value && (document.removeEventListener("mouseup", D, vn), nr = null), tr === m.value && (document.removeEventListener("keyup", D, true), (_a3 = m.value) == null ? void 0 : _a3.removeEventListener("blur", D, vn), tr = null), (_b2 = m.value) == null ? void 0 : _b2.classList.remove("q-btn--active");
  }
  function A(C) {
    je(C), C.qSkipRipple = true;
  }
  return Ke(() => {
    M(true);
  }), Object.assign(l, { click: (C) => {
    f.value === true && F(C);
  } }), () => {
    let C = [];
    e.icon !== void 0 && C.push(d(et, { name: e.icon, left: e.stack !== true && k.value === true, role: "img" })), k.value === true && C.push(d("span", { class: "block" }, [e.label])), C = Tt(t.default, C), e.iconRight !== void 0 && e.round === false && C.push(d(et, { name: e.iconRight, right: e.stack !== true && k.value === true, role: "img" }));
    const H = [d("span", { class: "q-focus-helper", ref: h })];
    return e.loading === true && e.percentage !== void 0 && H.push(d("span", { class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === true ? " q-btn__progress--dark" : "") }, [d("span", { class: "q-btn__progress-indicator fit block", style: b.value })])), H.push(d("span", { class: "q-btn__content text-center col items-center q-anchor--skip " + o.value }, C)), e.loading !== null && H.push(d(Ot, { name: "q-transition--fade" }, () => e.loading === true ? [d("span", { key: "loading", class: "absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : [d(wn)])] : null)), cn(d(c.value, $.value, H), [[ci, y.value, void 0, p.value]]);
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
  const { props: l, proxy: r, emit: a } = xe(), o = U(null);
  let i = null;
  function u(h) {
    return o.value === null ? false : h === void 0 || h.touches === void 0 || h.touches.length <= 1;
  }
  const c = {};
  n === void 0 && (Object.assign(c, { hide(h) {
    r.hide(h);
  }, toggle(h) {
    r.toggle(h), h.qAnchorHandled = true;
  }, toggleKey(h) {
    yn(h, 13) === true && c.toggle(h);
  }, contextClick(h) {
    r.hide(h), Dt(h), We(() => {
      r.show(h), h.qAnchorHandled = true;
    });
  }, prevent: Dt, mobileTouch(h) {
    if (c.mobileCleanup(h), u(h) !== true) return;
    r.hide(h), o.value.classList.add("non-selectable");
    const g = h.target;
    kt(c, "anchor", [[g, "touchmove", "mobileCleanup", "passive"], [g, "touchend", "mobileCleanup", "passive"], [g, "touchcancel", "mobileCleanup", "passive"], [o.value, "contextmenu", "prevent", "notPassive"]]), i = setTimeout(() => {
      i = null, r.show(h), h.qAnchorHandled = true;
    }, 300);
  }, mobileCleanup(h) {
    o.value.classList.remove("non-selectable"), i !== null && (clearTimeout(i), i = null), e.value === true && h !== void 0 && En();
  } }), n = function(h = l.contextMenu) {
    if (l.noParentEvent === true || o.value === null) return;
    let g;
    h === true ? r.$q.platform.is.mobile === true ? g = [[o.value, "touchstart", "mobileTouch", "passive"]] : g = [[o.value, "mousedown", "hide", "passive"], [o.value, "contextmenu", "contextClick", "notPassive"]] : g = [[o.value, "click", "toggle", "passive"], [o.value, "keyup", "toggleKey", "passive"]], kt(c, "anchor", g);
  });
  function s() {
    Yt(c, "anchor");
  }
  function f(h) {
    for (o.value = h; o.value.classList.contains("q-anchor--skip"); ) o.value = o.value.parentNode;
    n();
  }
  function m() {
    if (l.target === false || l.target === "" || r.$el.parentNode === null) o.value = null;
    else if (l.target === true) f(r.$el.parentNode);
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
  return ge(() => l.contextMenu, (h) => {
    o.value !== null && (s(), n(h));
  }), ge(() => l.target, () => {
    o.value !== null && s(), m();
  }), ge(() => l.noParentEvent, (h) => {
    o.value !== null && (h === true ? s() : n());
  }), ft(() => {
    m(), t !== true && l.modelValue === true && o.value === null && a("update:modelValue", false);
  }), Ke(() => {
    i !== null && clearTimeout(i), s();
  }), { anchorEl: o, canShow: u, anchorEvents: c };
}
function Pm(e, t) {
  const n = U(null);
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
  function f(y) {
    e.value === true ? g(y) : m(y);
  }
  function m(y) {
    if (i.disable === true || (y == null ? void 0 : y.qAnchorHandled) === true || t !== void 0 && t(y) !== true) return;
    const p = i["onUpdate:modelValue"] !== void 0;
    p === true && (u("update:modelValue", true), s = y, We(() => {
      s === y && (s = void 0);
    })), (i.modelValue === null || p === false) && h(y);
  }
  function h(y) {
    e.value !== true && (e.value = true, u("beforeShow", y), l !== void 0 ? l(y) : u("show", y));
  }
  function g(y) {
    if (i.disable === true) return;
    const p = i["onUpdate:modelValue"] !== void 0;
    p === true && (u("update:modelValue", false), s = y, We(() => {
      s === y && (s = void 0);
    })), (i.modelValue === null || p === false) && _(y);
  }
  function _(y) {
    e.value !== false && (e.value = false, u("beforeHide", y), r !== void 0 ? r(y) : u("hide", y));
  }
  function w(y) {
    i.disable === true && y === true ? i["onUpdate:modelValue"] !== void 0 && u("update:modelValue", false) : y === true !== e.value && (y === true ? h : _)(s);
  }
  ge(() => i.modelValue, w), n !== void 0 && Ts(o) === true && ge(() => c.$route.fullPath, () => {
    n.value === true && e.value === true && g();
  }), a === true && ft(() => {
    w(i.modelValue);
  });
  const k = { show: m, hide: g, toggle: f };
  return Object.assign(c, k), k;
}
var Vl = [], Sa = [];
function $m(e) {
  Sa = Sa.filter((t) => t !== e);
}
function Jp(e) {
  $m(e), Sa.push(e);
}
function ed(e) {
  $m(e), Sa.length === 0 && Vl.length !== 0 && (Vl[Vl.length - 1](), Vl = []);
}
function Br(e) {
  Sa.length === 0 ? e() : Vl.push(e);
}
function ey(e) {
  Vl = Vl.filter((t) => t !== e);
}
var pr = [], ua = [], ty = 1, sl = document.body;
function La(e, t) {
  const n = document.createElement("div");
  if (n.id = t !== void 0 ? `q-portal--${t}--${ty++}` : e, Mo.globalNodes !== void 0) {
    const l = Mo.globalNodes.class;
    l !== void 0 && (n.className = l);
  }
  return sl.appendChild(n), pr.push(n), ua.push(t), n;
}
function Rs(e) {
  const t = pr.indexOf(e);
  pr.splice(t, 1), ua.splice(t, 1), e.remove();
}
function ny(e) {
  if (e === sl) return;
  if (sl = e, sl === document.body || ua.reduce((n, l) => l === "dialog" ? n + 1 : n, 0) < 2) {
    pr.forEach((n) => {
      n.contains(sl) === false && sl.appendChild(n);
    });
    return;
  }
  const t = ua.lastIndexOf("dialog");
  for (let n = 0; n < pr.length; n++) {
    const l = pr[n];
    (n === t || ua[n] !== "dialog") && l.contains(sl) === false && sl.appendChild(l);
  }
}
var yr = [];
function ly(e) {
  return yr.find((t) => t.contentEl !== null && t.contentEl.contains(e));
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
function ry(e, t, n) {
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
var ay = he({ name: "QPortal", setup(e, { slots: t }) {
  return () => t.default();
} });
function oy(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog") return true;
    if (e.type.name === "QDialog" || e.type.name === "QMenu") return false;
    e = e.parent;
  }
  return false;
}
function As(e, t, n, l) {
  const r = U(false), a = U(false);
  let o = null;
  const i = {}, u = l === "dialog" && oy(e);
  function c(f) {
    if (f === true) {
      ed(i), a.value = true;
      return;
    }
    a.value = false, r.value === false && (u === false && o === null && (o = La(false, l)), r.value = true, yr.push(e.proxy), Jp(i));
  }
  function s(f) {
    if (a.value = false, f !== true) return;
    ed(i), r.value = false;
    const m = yr.indexOf(e.proxy);
    m !== -1 && yr.splice(m, 1), o !== null && (Rs(o), o = null);
  }
  return ni(() => {
    s(true);
  }), e.proxy.__qPortal = true, Vt(e.proxy, "contentEl", () => t.value), { showPortal: c, hidePortal: s, portalIsActive: r, portalIsAccessible: a, renderPortal: () => u === true ? n() : r.value === true ? [d(E0, { to: o }, d(ay, n))] : void 0 };
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
var Zl = [Element, String], iy = [null, document, document.body, document.scrollingElement, document.documentElement];
function Dn(e, t) {
  let n = Kp(t);
  if (n === void 0) {
    if (e == null) return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return iy.includes(n) ? window : n;
}
function Ha(e) {
  return (e === window ? document.body : e).scrollHeight;
}
function pl(e) {
  return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop;
}
function fi(e) {
  return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft;
}
function Bm(e, t, n = 0) {
  const l = arguments[3] === void 0 ? performance.now() : arguments[3], r = pl(e);
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
function uy(e, t = true) {
  return !e || e.nodeType !== Node.ELEMENT_NODE ? false : t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]));
}
var Nl = [], kr;
function sy(e) {
  kr = e.keyCode === 27;
}
function cy() {
  kr === true && (kr = false);
}
function dy(e) {
  kr === true && (kr = false, yn(e, 27) === true && Nl[Nl.length - 1](e));
}
function Om(e) {
  window[e]("keydown", sy), window[e]("blur", cy), window[e]("keyup", dy), kr = false;
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
function fy(e, t) {
  let { top: n, left: l, right: r, bottom: a, width: o, height: i } = e.getBoundingClientRect();
  return t !== void 0 && (n -= t[1], l -= t[0], a += t[1], r += t[0], o += t[0], i += t[1]), { top: n, bottom: a, height: i, left: l, right: r, width: o, middle: l + (r - l) / 2, center: n + (a - n) / 2 };
}
function vy(e, t, n) {
  let { top: l, left: r } = e.getBoundingClientRect();
  return l += t.top, r += t.left, n !== void 0 && (l += n[1], r += n[0]), { top: l, bottom: l + 1, height: 1, left: r, right: r + 1, width: 1, middle: r, center: l };
}
function my(e, t) {
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
    const $ = document.body.style, { offsetLeft: F, offsetTop: z } = window.visualViewport;
    F !== td && ($.setProperty("--q-pe-left", F + "px"), td = F), z !== nd && ($.setProperty("--q-pe-top", z + "px"), nd = z);
  }
  const { scrollLeft: m, scrollTop: h } = n, g = i === void 0 ? fy(r, c === true ? [0, 0] : l) : vy(r, i, l);
  Object.assign(n.style, { top: 0, left: 0, minWidth: null, minHeight: null, maxWidth: f, maxHeight: s, visibility: "visible" });
  const { offsetWidth: _, offsetHeight: w } = n, { elWidth: k, elHeight: y } = u === true || c === true ? { elWidth: Math.max(g.width, _), elHeight: c === true ? Math.max(g.height, w) : w } : { elWidth: _, elHeight: w };
  let p = { maxWidth: f, maxHeight: s };
  (u === true || c === true) && (p.minWidth = g.width + "px", c === true && (p.minHeight = g.height + "px")), Object.assign(n.style, p);
  const b = my(k, y);
  let S = ld(g, b, a, o);
  if (i === void 0 || l === void 0) zi(S, g, b, a, o);
  else {
    const { top: $, left: F } = S;
    zi(S, g, b, a, o);
    let z = false;
    if (S.top !== $) {
      z = true;
      const B = 2 * l[1];
      g.center = g.top -= B, g.bottom -= B + 2;
    }
    if (S.left !== F) {
      z = true;
      const B = 2 * l[0];
      g.middle = g.left -= B, g.right -= B + 2;
    }
    z === true && (S = ld(g, b, a, o), zi(S, g, b, a, o));
  }
  p = { top: S.top + "px", left: S.left + "px" }, S.maxHeight !== void 0 && (p.maxHeight = S.maxHeight + "px", g.height > S.maxHeight && (p.minHeight = p.maxHeight)), S.maxWidth !== void 0 && (p.maxWidth = S.maxWidth + "px", g.width > S.maxWidth && (p.minWidth = p.maxWidth)), Object.assign(n.style, p), n.scrollTop !== h && (n.scrollTop = h), n.scrollLeft !== m && (n.scrollLeft = m);
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
  const u = xe(), { proxy: c } = u, { $q: s } = c, f = U(null), m = U(false), h = v(() => e.persistent !== true && e.noRouteDismiss !== true), g = lt(e, s), { registerTick: _, removeTick: w } = _r(), { registerTimeout: k } = Zn(), { transitionProps: y, transitionStyle: p } = di(e), { localScrollTarget: b, changeScrollEvent: S, unconfigureScrollTarget: $ } = Pm(e, re), { anchorEl: F, canShow: z } = Es({ showing: m }), { hide: B } = Lr({ showing: m, canShow: z, handleShow: ye, handleHide: G, hideOnRouteChange: h, processOnMount: true }), { showPortal: L, hidePortal: D, renderPortal: M } = As(u, f, X, "menu"), A = { anchorEl: F, innerRef: f, onClickOutside(O) {
    if (e.persistent !== true && m.value === true) return B(O), (O.type === "touchstart" || O.target.classList.contains("q-dialog__backdrop")) && je(O), true;
  } }, C = v(() => Vo(e.anchor || (e.cover === true ? "center middle" : "bottom start"), s.lang.rtl)), H = v(() => e.cover === true ? C.value : Vo(e.self || "top start", s.lang.rtl)), Q = v(() => (e.square === true ? " q-menu--square" : "") + (g.value === true ? " q-menu--dark q-dark" : "")), K = v(() => e.autoClose === true ? { onClick: P } : {}), W = v(() => m.value === true && e.persistent !== true);
  ge(W, (O) => {
    O === true ? (Vm(T), zm(A)) : ($o(T), Fo(A));
  });
  function ie() {
    Br(() => {
      let O = f.value;
      O && O.contains(document.activeElement) !== true && (O = O.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || O.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || O.querySelector("[autofocus], [data-autofocus]") || O, O.focus({ preventScroll: true }));
    });
  }
  function ye(O) {
    if (r = e.noRefocus === false ? document.activeElement : null, Im(J), L(), re(), a = void 0, O !== void 0 && (e.touchPosition || e.contextMenu)) {
      const le = tn(O);
      if (le.left !== void 0) {
        const { top: be, left: x } = F.value.getBoundingClientRect();
        a = { left: le.left - x, top: le.top - be };
      }
    }
    o === void 0 && (o = ge(() => s.screen.width + "|" + s.screen.height + "|" + e.self + "|" + e.anchor + "|" + s.lang.rtl, E)), e.noFocus !== true && document.activeElement.blur(), _(() => {
      E(), e.noFocus !== true && ie();
    }), k(() => {
      s.platform.is.ios === true && (i = e.autoClose, f.value.click()), E(), L(true), n("show", O);
    }, e.transitionDuration);
  }
  function G(O) {
    w(), D(), R(true), r !== null && (O === void 0 || O.qClickOutside !== true) && ((((O == null ? void 0 : O.type.indexOf("key")) === 0 ? r.closest('[tabindex]:not([tabindex^="-"])') : void 0) || r).focus(), r = null), k(() => {
      D(true), n("hide", O);
    }, e.transitionDuration);
  }
  function R(O) {
    a = void 0, o !== void 0 && (o(), o = void 0), (O === true || m.value === true) && (zu(J), $(), Fo(A), $o(T)), O !== true && (r = null);
  }
  function re() {
    (F.value !== null || e.scrollTarget !== void 0) && (b.value = Dn(F.value, e.scrollTarget), S(b.value, E));
  }
  function P(O) {
    i !== true ? (Lm(c, O), n("click", O)) : i = false;
  }
  function J(O) {
    W.value === true && e.noFocus !== true && km(f.value, O.target) !== true && ie();
  }
  function T(O) {
    e.noEscDismiss !== true && (n("escapeKey"), B(O));
  }
  function E() {
    Ps({ targetEl: f.value, offset: e.offset, anchorEl: F.value, anchorOrigin: C.value, selfOrigin: H.value, absoluteOffset: a, fit: e.fit, cover: e.cover, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function X() {
    return d(Ot, y.value, () => m.value === true ? d("div", { role: "menu", ...l, ref: f, tabindex: -1, class: ["q-menu q-position-engine scroll" + Q.value, l.class], style: [l.style, p.value], ...K.value }, $e(t.default)) : null);
  }
  return Ke(R), Object.assign(c, { focus: ie, updatePosition: E }), M;
} }), Ni, Ua = 0, Ht = new Array(256);
for (let e = 0; e < 256; e++) Ht[e] = (e + 256).toString(16).substring(1);
var hy = (() => {
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
  (Ni === void 0 || Ua + 16 > rd) && (Ua = 0, Ni = hy(rd));
  const e = Array.prototype.slice.call(Ni, Ua, Ua += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, Ht[e[0]] + Ht[e[1]] + Ht[e[2]] + Ht[e[3]] + "-" + Ht[e[4]] + Ht[e[5]] + "-" + Ht[e[6]] + Ht[e[7]] + "-" + Ht[e[8]] + Ht[e[9]] + "-" + Ht[e[10]] + Ht[e[11]] + Ht[e[12]] + Ht[e[13]] + Ht[e[14]] + Ht[e[15]];
}
function gy(e) {
  return e ?? null;
}
function ad(e, t) {
  return e ?? (t === true ? `f_${Ca()}` : null);
}
function mi({ getValue: e, required: t = true } = {}) {
  if (ln.value === true) {
    const n = U(e !== void 0 ? gy(e()) : null);
    return t === true && n.value === null && ft(() => {
      n.value = `f_${Ca()}`;
    }), e !== void 0 && ge(e, (l) => {
      n.value = ad(l, t);
    }), n;
  }
  return e !== void 0 ? v(() => ad(e(), t)) : U(`f_${Ca()}`);
}
var by = Object.keys(Ms);
function py(e) {
  return by.reduce((t, n) => {
    const l = e[n];
    return l !== void 0 && (t[n] = l), t;
  }, {});
}
var yy = he({ name: "QBtnDropdown", props: { ...Ms, ...zl, modelValue: Boolean, split: Boolean, dropdownIcon: String, contentClass: [Array, String, Object], contentStyle: [Array, String, Object], cover: Boolean, persistent: Boolean, noEscDismiss: Boolean, noRouteDismiss: Boolean, autoClose: Boolean, noRefocus: Boolean, noFocus: Boolean, menuAnchor: { type: String, default: "bottom end" }, menuSelf: { type: String, default: "top end" }, menuOffset: Array, disableMainBtn: Boolean, disableDropdown: Boolean, noIconAnimation: Boolean, toggleAriaLabel: String }, emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), r = U(e.modelValue), a = U(null), o = mi(), i = v(() => {
    const b = { "aria-expanded": r.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": o.value, "aria-label": e.toggleAriaLabel || l.$q.lang.label[r.value === true ? "collapse" : "expand"](e.label) };
    return (e.disable === true || e.split === false && e.disableMainBtn === true || e.disableDropdown === true) && (b["aria-disabled"] = "true"), b;
  }), u = v(() => "q-btn-dropdown__arrow" + (r.value === true && e.noIconAnimation === false ? " rotate-180" : "") + (e.split === false ? " q-btn-dropdown__arrow-container" : "")), c = v(() => Mm(e)), s = v(() => py(e));
  ge(() => e.modelValue, (b) => {
    var _a3;
    (_a3 = a.value) == null ? void 0 : _a3[b ? "show" : "hide"]();
  }), ge(() => e.split, p);
  function f(b) {
    r.value = true, n("beforeShow", b);
  }
  function m(b) {
    n("show", b), n("update:modelValue", true);
  }
  function h(b) {
    r.value = false, n("beforeHide", b);
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
  function k(b) {
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
  return Object.assign(l, { show: y, hide: p, toggle: k }), ft(() => {
    e.modelValue === true && y();
  }), () => {
    const b = [d(et, { class: u.value, name: e.dropdownIcon || l.$q.iconSet.arrow.dropdown })];
    return e.disableDropdown !== true && b.push(d(vi, { ref: a, id: o.value, class: e.contentClass, style: e.contentStyle, cover: e.cover, fit: true, persistent: e.persistent, noEscDismiss: e.noEscDismiss, noRouteDismiss: e.noRouteDismiss, autoClose: e.autoClose, noFocus: e.noFocus, noRefocus: e.noRefocus, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, separateClosePopup: true, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, onBeforeShow: f, onShow: m, onBeforeHide: h, onHide: g }, t.default)), e.split === false ? d(Ze, { class: "q-btn-dropdown q-btn-dropdown--simple", ...s.value, ...i.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: _ }, { default: () => $e(t.label, []).concat(b), loading: t.loading }) : d(Em, { class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item", rounded: e.rounded, square: e.square, ...c.value, glossy: e.glossy, stretch: e.stretch }, () => [d(Ze, { class: "q-btn-dropdown--current", ...s.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: w }, { default: t.label, loading: t.loading }), d(Ze, { class: "q-btn-dropdown__arrow-container q-anchor--skip", ...i.value, ...c.value, disable: e.disable === true || e.disableDropdown === true, rounded: e.rounded, color: e.color, textColor: e.textColor, dense: e.dense, size: e.size, padding: e.padding, ripple: e.ripple }, () => b)]);
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
  const l = v(() => e.options.find((m) => m.value === e.modelValue) !== void 0), r = v(() => ({ type: "hidden", name: e.name, value: e.modelValue })), a = kl(r), o = v(() => Mm(e)), i = v(() => ({ rounded: e.rounded, dense: e.dense, ...o.value })), u = v(() => e.options.map((m, h) => {
    const { attrs: g, value: _, slot: w, ...k } = m;
    return { slot: w, props: { key: h, "aria-pressed": _ === e.modelValue ? "true" : "false", ...g, ...k, ...i.value, disable: e.disable === true || k.disable === true, color: _ === e.modelValue ? s(k, "toggleColor") : s(k, "color"), textColor: _ === e.modelValue ? s(k, "toggleTextColor") : s(k, "textColor"), noCaps: s(k, "noCaps") === true, noWrap: s(k, "noWrap") === true, size: s(k, "size"), padding: s(k, "padding"), ripple: s(k, "ripple"), stack: s(k, "stack") === true, stretch: s(k, "stretch") === true, onClick(y) {
      c(_, m, y);
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
    return e.name !== void 0 && e.disable !== true && l.value === true && a(m, "push"), Tt(t.default, m);
  }
  return () => d(Em, { class: "q-btn-toggle", ...o.value, rounded: e.rounded, stretch: e.stretch, glossy: e.glossy, spread: e.spread }, f);
} });
var Hm = he({ name: "QCard", props: { ...nt, tag: { type: String, default: "div" }, square: Boolean, flat: Boolean, bordered: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), l = lt(e, n), r = v(() => "q-card" + (l.value === true ? " q-card--dark q-dark" : "") + (e.bordered === true ? " q-card--bordered" : "") + (e.square === true ? " q-card--square no-border-radius" : "") + (e.flat === true ? " q-card--flat no-shadow" : ""));
  return () => d(e.tag, { class: r.value }, $e(t.default));
} }), Ol = he({ name: "QCardSection", props: { tag: { type: String, default: "div" }, horizontal: Boolean }, setup(e, { slots: t }) {
  const n = v(() => `q-card__section q-card__section--${e.horizontal === true ? "horiz row no-wrap" : "vert"}`);
  return () => d(e.tag, { class: n.value }, $e(t.default));
} }), _y = he({ name: "QCardActions", props: { ...Ss, vertical: Boolean }, setup(e, { slots: t }) {
  const n = Cs(e), l = v(() => `q-card__actions ${n.value} q-card__actions--${e.vertical === true ? "vert column" : "horiz row"}`);
  return () => d("div", { class: l.value }, $e(t.default));
} }), Ls = { left: true, right: true, up: true, down: true, horizontal: true, vertical: true }, wy = Object.keys(Ls);
Ls.all = true;
function Do(e) {
  const t = {};
  for (const n of wy) e[n] === true && (t[n] = true);
  return Object.keys(t).length === 0 ? Ls : (t.horizontal === true ? t.left = t.right = true : t.left === true && t.right === true && (t.horizontal = true), t.vertical === true ? t.up = t.down = true : t.up === true && t.down === true && (t.vertical = true), t.horizontal === true && t.vertical === true && (t.all = true), t);
}
var xy = ["INPUT", "TEXTAREA"];
function Io(e, t) {
  return t.event === void 0 && e.target !== void 0 && e.target.draggable !== true && typeof t.handler == "function" && xy.includes(e.target.nodeName.toUpperCase()) === false && (e.qClonedBy === void 0 || e.qClonedBy.indexOf(t.uid) === -1);
}
function Sy(e) {
  const t = [0.06, 6, 50];
  return typeof e == "string" && e.length && e.split(":").forEach((n, l) => {
    const r = parseFloat(n);
    r && (t[l] = r);
  }), t;
}
var Cy = Pn({ name: "touch-swipe", beforeMount(e, { value: t, arg: n, modifiers: l }) {
  if (l.mouse !== true && De.has.touch !== true) return;
  const r = l.mouseCapture === true ? "Capture" : "", a = { handler: t, sensitivity: Sy(n), direction: Do(l), noop: xt, mouseStart(o) {
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
    const u = tn(o), c = u.left - a.event.x, s = Math.abs(c), f = u.top - a.event.y, m = Math.abs(f);
    if (a.event.mouse !== true) {
      if (s < a.sensitivity[1] && m < a.sensitivity[1]) {
        a.end(o);
        return;
      }
    } else if (window.getSelection().toString() !== "") {
      a.end(o);
      return;
    } else if (s < a.sensitivity[2] && m < a.sensitivity[2]) return;
    const h = s / i, g = m / i;
    a.direction.vertical === true && s < m && s < 100 && g > a.sensitivity[0] && (a.event.dir = f < 0 ? "up" : "down"), a.direction.horizontal === true && s > m && m < 100 && h > a.sensitivity[0] && (a.event.dir = c < 0 ? "left" : "right"), a.direction.up === true && s < m && f < 0 && s < 100 && g > a.sensitivity[0] && (a.event.dir = "up"), a.direction.down === true && s < m && f > 0 && s < 100 && g > a.sensitivity[0] && (a.event.dir = "down"), a.direction.left === true && s > m && c < 0 && m < 100 && h > a.sensitivity[0] && (a.event.dir = "left"), a.direction.right === true && s > m && c > 0 && m < 100 && h > a.sensitivity[0] && (a.event.dir = "right"), a.event.dir !== false ? (je(o), a.event.mouse === true && (document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), En(), a.styleCleanup = (_) => {
      a.styleCleanup = void 0, document.body.classList.remove("non-selectable");
      const w = () => {
        document.body.classList.remove("no-pointer-events--children");
      };
      _ === true ? setTimeout(w, 50) : w();
    }), a.handler({ evt: o, touch: a.event.mouse !== true, mouse: a.event.mouse, direction: a.event.dir, duration: i, distance: { x: s, y: m } })) : a.end(o);
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
  const i = U(null), u = { value: null };
  function c(C) {
    const H = e.vertical === true ? "up" : "left";
    z((n.$q.lang.rtl === true ? -1 : 1) * (C.direction === H ? 1 : -1));
  }
  const s = v(() => [[Cy, c, void 0, { horizontal: e.vertical !== true, vertical: e.vertical, mouse: true }]]), f = v(() => e.transitionPrev || `slide-${e.vertical === true ? "down" : "right"}`), m = v(() => e.transitionNext || `slide-${e.vertical === true ? "up" : "left"}`), h = v(() => `--q-transition-duration: ${e.transitionDuration}ms`), g = v(() => typeof e.modelValue == "string" || typeof e.modelValue == "number" ? e.modelValue : String(e.modelValue)), _ = v(() => ({ include: e.keepAliveInclude, exclude: e.keepAliveExclude, max: e.keepAliveMax })), w = v(() => e.keepAliveInclude !== void 0 || e.keepAliveExclude !== void 0);
  ge(() => e.modelValue, (C, H) => {
    const Q = b(C) === true ? S(C) : -1;
    o !== true && F(Q === -1 ? 0 : Q < S(H) ? -1 : 1), u.value !== Q && (u.value = Q, t("beforeTransition", C, H), r(() => {
      t("transition", C, H);
    }, e.transitionDuration));
  });
  function k() {
    z(1);
  }
  function y() {
    z(-1);
  }
  function p(C) {
    t("update:modelValue", C);
  }
  function b(C) {
    return C != null && C !== "";
  }
  function S(C) {
    return a.findIndex((H) => H.props.name === C && H.props.disable !== "" && H.props.disable !== true);
  }
  function $() {
    return a.filter((C) => C.props.disable !== "" && C.props.disable !== true);
  }
  function F(C) {
    const H = C !== 0 && e.animated === true && u.value !== -1 ? "q-transition--" + (C === -1 ? f.value : m.value) : null;
    i.value !== H && (i.value = H);
  }
  function z(C, H = u.value) {
    let Q = H + C;
    for (; Q !== -1 && Q < a.length; ) {
      const K = a[Q];
      if (K !== void 0 && K.props.disable !== "" && K.props.disable !== true) {
        F(C), o = true, t("update:modelValue", K.props.name), setTimeout(() => {
          o = false;
        });
        return;
      }
      Q += C;
    }
    e.infinite === true && a.length !== 0 && H !== -1 && H !== a.length && z(C, C === -1 ? a.length : -1);
  }
  function B() {
    const C = S(e.modelValue);
    return u.value !== C && (u.value = C), true;
  }
  function L() {
    const C = b(e.modelValue) === true && B() && a[u.value];
    return e.keepAlive === true ? [d(_v, _.value, [d(w.value === true ? l(g.value, () => ({ ...od, name: g.value })) : od, { key: g.value, style: h.value }, () => C)])] : [d("div", { class: "q-panel scroll", style: h.value, key: g.value, role: "tabpanel" }, [C])];
  }
  function D() {
    if (a.length !== 0) return e.animated === true ? [d(Ot, { name: i.value }, L)] : L();
  }
  function M(C) {
    return a = ks($e(C.default, [])).filter((H) => H.props !== null && H.props.slot === void 0 && b(H.props.name) === true), a.length;
  }
  function A() {
    return a;
  }
  return Object.assign(n, { next: k, previous: y, goTo: p }), { panelIndex: u, panelDirectives: s, updatePanelsList: M, updatePanelIndex: B, getPanelContent: D, getEnabledPanels: $, getPanels: A, isValidPanelName: b, keepAliveProps: _, needsUniqueKeepAliveWrapper: w, goToPanelByOffset: z, goToPanel: p, nextPanel: k, previousPanel: y };
}
var Dr = 0, Ds = { fullscreen: Boolean, noRouteFullscreenExit: Boolean }, Is = ["update:fullscreen", "fullscreen"];
function zs() {
  const e = xe(), { props: t, emit: n, proxy: l } = e;
  let r, a, o;
  const i = U(false);
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
var ky = ["top", "right", "bottom", "left"], Ty = ["regular", "flat", "outline", "push", "unelevated"];
he({ name: "QCarousel", props: { ...nt, ...Fs, ...Ds, transitionPrev: { type: String, default: "fade" }, transitionNext: { type: String, default: "fade" }, height: String, padding: Boolean, controlColor: String, controlTextColor: String, controlType: { type: String, validator: (e) => Ty.includes(e), default: "flat" }, autoplay: [Number, Boolean], arrows: Boolean, prevIcon: String, nextIcon: String, navigation: Boolean, navigationPosition: { type: String, validator: (e) => ky.includes(e) }, navigationIcon: String, navigationActiveIcon: String, thumbnails: Boolean }, emits: [...Is, ...Os], setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), l = lt(e, n);
  let r = null, a;
  const { updatePanelsList: o, getPanelContent: i, panelDirectives: u, goToPanel: c, previousPanel: s, nextPanel: f, getEnabledPanels: m, panelIndex: h } = Vs(), { inFullscreen: g } = zs(), _ = v(() => g.value !== true && e.height !== void 0 ? { height: e.height } : {}), w = v(() => e.vertical === true ? "vertical" : "horizontal"), k = v(() => e.navigationPosition || (e.vertical === true ? "right" : "bottom")), y = v(() => `q-carousel q-panel-parent q-carousel--with${e.padding === true ? "" : "out"}-padding` + (g.value === true ? " fullscreen" : "") + (l.value === true ? " q-carousel--dark q-dark" : "") + (e.arrows === true ? ` q-carousel--arrows-${w.value}` : "") + (e.navigation === true ? ` q-carousel--navigation-${k.value}` : "")), p = v(() => {
    const L = [e.prevIcon || n.iconSet.carousel[e.vertical === true ? "up" : "left"], e.nextIcon || n.iconSet.carousel[e.vertical === true ? "down" : "right"]];
    return e.vertical === false && n.lang.rtl === true ? L.reverse() : L;
  }), b = v(() => e.navigationIcon || n.iconSet.carousel.navigationIcon), S = v(() => e.navigationActiveIcon || b.value), $ = v(() => ({ color: e.controlColor, textColor: e.controlTextColor, round: true, [e.controlType]: true, dense: true }));
  ge(() => e.modelValue, () => {
    e.autoplay && F();
  }), ge(() => e.autoplay, (L) => {
    L ? F() : r !== null && (clearTimeout(r), r = null);
  });
  function F() {
    const L = xa(e.autoplay) === true ? Math.abs(e.autoplay) : 5e3;
    r !== null && clearTimeout(r), r = setTimeout(() => {
      r = null, L >= 0 ? f() : s();
    }, L);
  }
  ft(() => {
    e.autoplay && F();
  }), Ke(() => {
    r !== null && clearTimeout(r);
  });
  function z(L, D) {
    return d("div", { class: `q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${L} q-carousel__navigation--${k.value}` + (e.controlColor !== void 0 ? ` text-${e.controlColor}` : "") }, [d("div", { class: "q-carousel__navigation-inner flex flex-center no-wrap" }, m().map(D))]);
  }
  function B() {
    const L = [];
    if (e.navigation === true) {
      const D = t["navigation-icon"] !== void 0 ? t["navigation-icon"] : (A) => d(Ze, { key: "nav" + A.name, class: `q-carousel__navigation-icon q-carousel__navigation-icon--${A.active === true ? "" : "in"}active`, ...A.btnProps, onClick: A.onClick }), M = a - 1;
      L.push(z("buttons", (A, C) => {
        const H = A.props.name, Q = h.value === C;
        return D({ index: C, maxIndex: M, name: H, active: Q, btnProps: { icon: Q === true ? S.value : b.value, size: "sm", ...$.value }, onClick: () => {
          c(H);
        } });
      }));
    } else if (e.thumbnails === true) {
      const D = e.controlColor !== void 0 ? ` text-${e.controlColor}` : "";
      L.push(z("thumbnails", (M) => {
        const A = M.props;
        return d("img", { key: "tmb#" + A.name, class: `q-carousel__thumbnail q-carousel__thumbnail--${A.name === e.modelValue ? "" : "in"}active` + D, src: A.imgSrc || A["img-src"], onClick: () => {
          c(A.name);
        } });
      }));
    }
    return e.arrows === true && h.value >= 0 && ((e.infinite === true || h.value > 0) && L.push(d("div", { key: "prev", class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${w.value} absolute flex flex-center` }, [d(Ze, { icon: p.value[0], ...$.value, onClick: s })])), (e.infinite === true || h.value < a - 1) && L.push(d("div", { key: "next", class: `q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${w.value} absolute flex flex-center` }, [d(Ze, { icon: p.value[1], ...$.value, onClick: f })]))), Tt(t.control, L);
  }
  return () => (a = o(t), d("div", { class: y.value, style: _.value }, [_n("div", { class: "q-carousel__slides-container" }, i(), "sl-cont", e.swipeable, () => u.value)].concat(B())));
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
    const m = f === true ? s.length > 1 ? (h) => h : (h) => d("div", [h]) : (h) => d("div", { [i.value.msg]: h });
    return s.map((h, g) => d("div", { key: g, class: r.value }, [d("div", { class: l.value }, u(m(h)))]));
  }
  return () => {
    const s = [];
    t.avatar !== void 0 ? s.push(t.avatar()) : e.avatar !== void 0 && s.push(d("img", { class: `q-message-avatar q-message-avatar--${n.value}`, src: e.avatar, "aria-hidden": "true" }));
    const f = [];
    t.name !== void 0 ? f.push(d("div", { class: `q-message-name q-message-name--${n.value}` }, t.name())) : e.name !== void 0 && f.push(d("div", { class: `q-message-name q-message-name--${n.value}`, [i.value.name]: e.name })), t.default !== void 0 ? f.push(c(ks(t.default()), true)) : e.text !== void 0 && f.push(c(e.text)), s.push(d("div", { class: o.value }, f));
    const m = [];
    return t.label !== void 0 ? m.push(d("div", { class: "q-message-label" }, t.label())) : e.label !== void 0 && m.push(d("div", { class: "q-message-label", [i.value.label]: e.label })), m.push(d("div", { class: a.value }, s)), d("div", { class: `q-message q-message-${n.value}` }, m);
  };
} });
function jm(e, t) {
  const n = U(null), l = v(() => e.disable === true ? null : d("span", { ref: n, class: "no-outline", tabindex: -1 }));
  function r(a) {
    const o = t.value;
    (a == null ? void 0 : a.qAvoidFocus) !== true && ((a == null ? void 0 : a.type.indexOf("key")) === 0 ? document.activeElement !== o && (o == null ? void 0 : o.contains(document.activeElement)) === true && o.focus() : n.value !== null && (a === void 0 || (o == null ? void 0 : o.contains(a.target)) === true) && n.value.focus());
  }
  return { refocusTargetEl: l, refocusTarget: r };
}
var Um = { xs: 30, sm: 35, md: 40, lg: 50, xl: 60 }, Qm = { ...nt, ...el, ...xn, modelValue: { required: true, default: null }, val: {}, trueValue: { default: true }, falseValue: { default: false }, indeterminateValue: { default: null }, checkedIcon: String, uncheckedIcon: String, indeterminateIcon: String, toggleOrder: { type: String, validator: (e) => e === "tf" || e === "ft" }, toggleIndeterminate: Boolean, label: String, leftLabel: Boolean, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, Km = ["update:modelValue"];
function Wm(e, t) {
  const { props: n, slots: l, emit: r, proxy: a } = xe(), { $q: o } = a, i = lt(n, o), u = U(null), { refocusTargetEl: c, refocusTarget: s } = jm(n, u), f = tl(n, Um), m = v(() => n.val !== void 0 && Array.isArray(n.modelValue)), h = v(() => {
    const M = Xe(n.val);
    return m.value === true ? n.modelValue.findIndex((A) => Xe(A) === M) : -1;
  }), g = v(() => m.value === true ? h.value !== -1 : Xe(n.modelValue) === Xe(n.trueValue)), _ = v(() => m.value === true ? h.value === -1 : Xe(n.modelValue) === Xe(n.falseValue)), w = v(() => g.value === false && _.value === false), k = v(() => n.disable === true ? -1 : n.tabindex || 0), y = v(() => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (n.disable === true ? " disabled" : "") + (i.value === true ? ` q-${e}--dark` : "") + (n.dense === true ? ` q-${e}--dense` : "") + (n.leftLabel === true ? " reverse" : "")), p = v(() => {
    const M = g.value === true ? "truthy" : _.value === true ? "falsy" : "indet", A = n.color !== void 0 && (n.keepColor === true || (e === "toggle" ? g.value === true : _.value !== true)) ? ` text-${n.color}` : "";
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${M}${A}`;
  }), b = v(() => {
    const M = { type: "checkbox" };
    return n.name !== void 0 && Object.assign(M, { ".checked": g.value, "^checked": g.value === true ? "checked" : void 0, name: n.name, value: m.value === true ? n.val : n.trueValue }), M;
  }), S = kl(b), $ = v(() => {
    const M = { tabindex: k.value, role: e === "toggle" ? "switch" : "checkbox", "aria-label": n.label, "aria-checked": w.value === true ? "mixed" : g.value === true ? "true" : "false" };
    return n.disable === true && (M["aria-disabled"] = "true"), M;
  });
  function F(M) {
    M !== void 0 && (je(M), s(M)), n.disable !== true && r("update:modelValue", z(), M);
  }
  function z() {
    if (m.value === true) {
      if (g.value === true) {
        const M = n.modelValue.slice();
        return M.splice(h.value, 1), M;
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
  function B(M) {
    (M.keyCode === 13 || M.keyCode === 32) && je(M);
  }
  function L(M) {
    (M.keyCode === 13 || M.keyCode === 32) && F(M);
  }
  const D = t(g, w);
  return Object.assign(a, { toggle: F }), () => {
    const M = D();
    n.disable !== true && S(M, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
    const A = [d("div", { class: p.value, style: f.value, "aria-hidden": "true" }, M)];
    c.value !== null && A.push(c.value);
    const C = n.label !== void 0 ? Tt(l.default, [n.label]) : $e(l.default);
    return C !== void 0 && A.push(d("div", { class: `q-${e}__label q-anchor--skip` }, C)), d("div", { ref: u, class: y.value, ...$.value, onClick: F, onKeydown: B, onKeyup: L }, A);
  };
}
var qy = () => d("div", { key: "svg", class: "q-checkbox__bg absolute" }, [d("svg", { class: "q-checkbox__svg fit absolute-full", viewBox: "0 0 24 24" }, [d("path", { class: "q-checkbox__truthy", fill: "none", d: "M1.73,12.91 8.1,19.28 22.79,4.59" }), d("path", { class: "q-checkbox__indet", d: "M4,14H20V10H4" })])]), sa = he({ name: "QCheckbox", props: Qm, emits: Km, setup(e) {
  const t = qy();
  function n(l, r) {
    const a = v(() => (l.value === true ? e.checkedIcon : r.value === true ? e.indeterminateIcon : e.uncheckedIcon) || null);
    return () => a.value !== null ? [d("div", { key: "icon", class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap" }, [d(et, { class: "q-checkbox__icon", name: a.value })])] : [t];
  }
  return Wm("checkbox", n);
} }), My = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, Ym = he({ name: "QChip", props: { ...nt, ...el, dense: Boolean, icon: String, iconRight: String, iconRemove: String, iconSelected: String, label: [String, Number], color: String, textColor: String, modelValue: { type: Boolean, default: true }, selected: { type: Boolean, default: null }, square: Boolean, outline: Boolean, clickable: Boolean, removable: Boolean, removeAriaLabel: String, tabindex: [String, Number], disable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "update:selected", "remove", "click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = xe(), r = lt(e, l), a = tl(e, My), o = v(() => e.selected === true || e.icon !== void 0), i = v(() => e.selected === true ? e.iconSelected || l.iconSet.chip.selected : e.icon), u = v(() => e.iconRemove || l.iconSet.chip.remove), c = v(() => e.disable === false && (e.clickable === true || e.selected !== null)), s = v(() => {
    const w = e.outline === true && e.color || e.textColor;
    return "q-chip row inline no-wrap items-center" + (e.outline === false && e.color !== void 0 ? ` bg-${e.color}` : "") + (w ? ` text-${w} q-chip--colored` : "") + (e.disable === true ? " disabled" : "") + (e.dense === true ? " q-chip--dense" : "") + (e.outline === true ? " q-chip--outline" : "") + (e.selected === true ? " q-chip--selected" : "") + (c.value === true ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (e.square === true ? " q-chip--square" : "") + (r.value === true ? " q-chip--dark q-dark" : "");
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
    return w.push(d("div", { class: "q-chip__content col row no-wrap items-center q-anchor--skip" }, xs(t.default, k))), e.iconRight && w.push(d(et, { class: "q-chip__icon q-chip__icon--right", name: e.iconRight })), e.removable === true && w.push(d(et, { class: "q-chip__icon q-chip__icon--remove cursor-pointer", name: u.value, ...f.value.remove, onClick: g, onKeyup: g })), w;
  }
  return () => {
    if (e.modelValue === false) return;
    const w = { class: s.value, style: a.value };
    return c.value === true && Object.assign(w, f.value.chip, { onClick: h, onKeyup: m }), _n("div", w, _(), "ripple", e.ripple !== false && e.disable !== true, () => [[ci, e.ripple]]);
  };
} }), Ns = { ...el, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, color: String, centerColor: String, trackColor: String, fontSize: String, rounded: Boolean, thickness: { type: Number, default: 0.2, validator: (e) => e >= 0 && e <= 1 }, angle: { type: Number, default: 0 }, showValue: Boolean, reverse: Boolean, instantFeedback: Boolean }, Hu = 50, Xm = 2 * Hu, Gm = Xm * Math.PI, Ey = Math.round(Gm * 1e3) / 1e3, Zm = he({ name: "QCircularProgress", props: { ...Ns, value: { type: Number, default: 0 }, animationSpeed: { type: [String, Number], default: 600 }, indeterminate: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), l = tl(e), r = v(() => {
    const h = (n.lang.rtl === true ? -1 : 1) * e.angle;
    return { transform: e.reverse !== (n.lang.rtl === true) ? `scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90 - h}deg)` : `rotate3d(0, 0, 1, ${h - 90}deg)` };
  }), a = v(() => e.instantFeedback !== true && e.indeterminate !== true ? { transition: `stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease` } : ""), o = v(() => Xm / (1 - e.thickness / 2)), i = v(() => `${o.value / 2} ${o.value / 2} ${o.value} ${o.value}`), u = v(() => ct(e.value, e.min, e.max)), c = v(() => e.max - e.min), s = v(() => e.thickness / 2 * o.value), f = v(() => {
    const h = (e.max - u.value) / c.value, g = e.rounded === true && u.value < e.max && h < 0.25 ? s.value / 2 * (1 - h / 0.25) : 0;
    return Gm * h + g;
  });
  function m({ thickness: h, offset: g, color: _, cls: w, rounded: k }) {
    return d("circle", { class: "q-circular-progress__" + w + (_ !== void 0 ? ` text-${_}` : ""), style: a.value, fill: "transparent", stroke: "currentColor", "stroke-width": h, "stroke-dasharray": Ey, "stroke-dashoffset": g, "stroke-linecap": k, cx: o.value, cy: o.value, r: Hu });
  }
  return () => {
    const h = [];
    e.centerColor !== void 0 && e.centerColor !== "transparent" && h.push(d("circle", { class: `q-circular-progress__center text-${e.centerColor}`, fill: "currentColor", r: Hu - s.value / 2, cx: o.value, cy: o.value })), e.trackColor !== void 0 && e.trackColor !== "transparent" && h.push(m({ cls: "track", thickness: s.value, offset: 0, color: e.trackColor })), h.push(m({ cls: "circle", thickness: s.value, offset: f.value, color: e.color, rounded: e.rounded === true ? "round" : void 0 }));
    const g = [d("svg", { class: "q-circular-progress__svg", style: r.value, viewBox: i.value, "aria-hidden": "true" }, h)];
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
var Ry = 0, bn = Pn({ name: "touch-pan", beforeMount(e, { value: t, modifiers: n }) {
  if (n.mouse !== true && De.has.touch !== true) return;
  function l(a, o) {
    n.mouse === true && o === true ? je(a) : (n.stop === true && wt(a), n.prevent === true && Dt(a));
  }
  const r = { uid: "qvtp_" + Ry++, handler: t, modifiers: n, direction: Do(n), noop: xt, mouseStart(a) {
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
      let h;
      n.preserveCursor !== true && n.preservecursor !== true && (h = document.documentElement.style.cursor || "", document.documentElement.style.cursor = "grabbing"), c === true && document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), En(), r.styleCleanup = (g) => {
        if (r.styleCleanup = void 0, h !== void 0 && (document.documentElement.style.cursor = h), document.body.classList.remove("non-selectable"), c === true) {
          const _ = () => {
            document.body.classList.remove("no-pointer-events--children");
          };
          g !== void 0 ? setTimeout(() => {
            _(), g();
          }, 50) : _();
        } else g !== void 0 && g();
      };
    };
    if (r.event.detected === true) {
      r.event.isFirst !== true && l(a, r.event.mouse);
      const { payload: h, synthetic: g } = Hi(a, r, false);
      h !== void 0 && (r.handler(h) === false ? r.end(a) : (r.styleCleanup === void 0 && r.event.isFirst === true && s(), r.event.lastX = h.position.left, r.event.lastY = h.position.top, r.event.lastDir = g === true ? void 0 : h.direction, r.event.isFirst = false));
      return;
    }
    if (r.direction.all === true || c === true && (r.modifiers.mouseAllDir === true || r.modifiers.mousealldir === true)) {
      s(), r.event.detected = true, r.move(a);
      return;
    }
    const f = Math.abs(i), m = Math.abs(u);
    f !== m && (r.direction.horizontal === true && f > m || r.direction.vertical === true && f < m || r.direction.up === true && f < m && u < 0 || r.direction.down === true && f < m && u > 0 || r.direction.left === true && f > m && i < 0 || r.direction.right === true && f > m && i > 0 ? (r.event.detected = true, r.move(a)) : r.end(a, true));
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
} }), id = "q-slider__marker-labels", Ay = (e) => ({ value: e }), Py = ({ marker: e }) => d("div", { key: e.value, style: e.style, class: e.classes }, e.label), Hs = [34, 37, 40, 33, 39, 38], Jm = { ...nt, ...xn, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, snap: Boolean, vertical: Boolean, reverse: Boolean, color: String, markerLabelsClass: String, label: Boolean, labelColor: String, labelTextColor: String, labelAlways: Boolean, switchLabelSide: Boolean, markers: [Boolean, Number], markerLabels: [Boolean, Array, Object, Function], switchMarkerLabelsSide: Boolean, trackImg: String, trackColor: String, innerTrackImg: String, innerTrackColor: String, selectionColor: String, selectionImg: String, thumbSize: { type: String, default: "20px" }, trackSize: { type: String, default: "4px" }, disable: Boolean, readonly: Boolean, dense: Boolean, tabindex: [String, Number], thumbColor: String, thumbPath: { type: String, default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0" } }, eh = ["pan", "update:modelValue", "change"];
function th({ updateValue: e, updatePosition: t, getDragging: n, formAttrs: l }) {
  const { props: r, emit: a, slots: o, proxy: { $q: i } } = xe(), u = lt(r, i), c = kl(l), s = U(false), f = U(false), m = U(false), h = U(false), g = v(() => r.vertical === true ? "--v" : "--h"), _ = v(() => "-" + (r.switchLabelSide === true ? "switched" : "standard")), w = v(() => r.vertical === true ? r.reverse === true : r.reverse !== (i.lang.rtl === true)), k = v(() => isNaN(r.innerMin) === true || r.innerMin < r.min ? r.min : r.innerMin), y = v(() => isNaN(r.innerMax) === true || r.innerMax > r.max ? r.max : r.innerMax), p = v(() => r.disable !== true && r.readonly !== true && k.value < y.value), b = v(() => {
    if (r.step === 0) return (_e2) => _e2;
    const ue = (String(r.step).trim().split(".")[1] || "").length;
    return (_e2) => parseFloat(_e2.toFixed(ue));
  }), S = v(() => r.step === 0 ? 1 : r.step), $ = v(() => p.value === true ? r.tabindex || 0 : -1), F = v(() => r.max - r.min), z = v(() => y.value - k.value), B = v(() => be(k.value)), L = v(() => be(y.value)), D = v(() => r.vertical === true ? w.value === true ? "bottom" : "top" : w.value === true ? "right" : "left"), M = v(() => r.vertical === true ? "height" : "width"), A = v(() => r.vertical === true ? "width" : "height"), C = v(() => r.vertical === true ? "vertical" : "horizontal"), H = v(() => {
    const ue = { role: "slider", "aria-valuemin": k.value, "aria-valuemax": y.value, "aria-orientation": C.value, "data-step": r.step };
    return r.disable === true ? ue["aria-disabled"] = "true" : r.readonly === true && (ue["aria-readonly"] = "true"), ue;
  }), Q = v(() => `q-slider q-slider${g.value} q-slider--${s.value === true ? "" : "in"}active inline no-wrap ` + (r.vertical === true ? "row" : "column") + (r.disable === true ? " disabled" : " q-slider--enabled" + (p.value === true ? " q-slider--editable" : "")) + (m.value === "both" ? " q-slider--focus" : "") + (r.label || r.labelAlways === true ? " q-slider--label" : "") + (r.labelAlways === true ? " q-slider--label-always" : "") + (u.value === true ? " q-slider--dark" : "") + (r.dense === true ? " q-slider--dense q-slider--dense" + g.value : ""));
  function K(ue) {
    const _e2 = "q-slider__" + ue;
    return `${_e2} ${_e2}${g.value} ${_e2}${g.value}${_.value}`;
  }
  function W(ue) {
    const _e2 = "q-slider__" + ue;
    return `${_e2} ${_e2}${g.value}`;
  }
  const ie = v(() => {
    const ue = r.selectionColor || r.color;
    return "q-slider__selection absolute" + (ue !== void 0 ? ` text-${ue}` : "");
  }), ye = v(() => W("markers") + " absolute overflow-hidden"), G = v(() => W("track-container")), R = v(() => K("pin")), re = v(() => K("label")), P = v(() => K("text-container")), J = v(() => K("marker-labels-container") + (r.markerLabelsClass !== void 0 ? ` ${r.markerLabelsClass}` : "")), T = v(() => "q-slider__track relative-position no-outline" + (r.trackColor !== void 0 ? ` bg-${r.trackColor}` : "")), E = v(() => {
    const ue = { [A.value]: r.trackSize };
    return r.trackImg !== void 0 && (ue.backgroundImage = `url(${r.trackImg}) !important`), ue;
  }), X = v(() => "q-slider__inner absolute" + (r.innerTrackColor !== void 0 ? ` bg-${r.innerTrackColor}` : "")), O = v(() => {
    const ue = L.value - B.value, _e2 = { [D.value]: `${100 * B.value}%`, [M.value]: ue === 0 ? "2px" : `${100 * ue}%` };
    return r.innerTrackImg !== void 0 && (_e2.backgroundImage = `url(${r.innerTrackImg}) !important`), _e2;
  });
  function le(ue) {
    const { min: _e2, max: Ce, step: Oe } = r;
    let Re = _e2 + ue * (Ce - _e2);
    if (Oe > 0) {
      const Ye = (Re - k.value) % Oe;
      Re += (Math.abs(Ye) >= Oe / 2 ? (Ye < 0 ? -1 : 1) * Oe : 0) - Ye;
    }
    return Re = b.value(Re), ct(Re, k.value, y.value);
  }
  function be(ue) {
    return F.value === 0 ? 0 : (ue - r.min) / F.value;
  }
  function x(ue, _e2) {
    const Ce = tn(ue), Oe = r.vertical === true ? ct((Ce.top - _e2.top) / _e2.height, 0, 1) : ct((Ce.left - _e2.left) / _e2.width, 0, 1);
    return ct(w.value === true ? 1 - Oe : Oe, B.value, L.value);
  }
  const q = v(() => xa(r.markers) === true ? r.markers : S.value), V = v(() => {
    const ue = [], _e2 = q.value, Ce = r.max;
    let Oe = r.min;
    do
      ue.push(Oe), Oe += _e2;
    while (Oe < Ce);
    return ue.push(Ce), ue;
  }), te = v(() => {
    const ue = ` ${id}${g.value}-`;
    return id + `${ue}${r.switchMarkerLabelsSide === true ? "switched" : "standard"}${ue}${w.value === true ? "rtl" : "ltr"}`;
  }), ae = v(() => r.markerLabels === false ? null : N(r.markerLabels).map((ue, _e2) => ({ index: _e2, value: ue.value, label: ue.label || ue.value, classes: te.value + (ue.classes !== void 0 ? " " + ue.classes : ""), style: { ...ne(ue.value), ...ue.style || {} } }))), Y = v(() => ({ markerList: ae.value, markerMap: de.value, classes: te.value, getStyle: ne })), fe = v(() => {
    const ue = z.value === 0 ? "2px" : 100 * q.value / z.value;
    return { ...O.value, backgroundSize: r.vertical === true ? `2px ${ue}%` : `${ue}% 2px` };
  });
  function N(ue) {
    if (ue === false) return null;
    if (ue === true) return V.value.map(Ay);
    if (typeof ue == "function") return V.value.map((Ce) => {
      const Oe = ue(Ce);
      return $t(Oe) === true ? { ...Oe, value: Ce } : { value: Ce, label: Oe };
    });
    const _e2 = ({ value: Ce }) => Ce >= r.min && Ce <= r.max;
    return Array.isArray(ue) === true ? ue.map((Ce) => $t(Ce) === true ? Ce : { value: Ce }).filter(_e2) : Object.keys(ue).map((Ce) => {
      const Oe = ue[Ce], Re = Number(Ce);
      return $t(Oe) === true ? { ...Oe, value: Re } : { value: Re, label: Oe };
    }).filter(_e2);
  }
  function ne(ue) {
    return { [D.value]: `${100 * (ue - r.min) / F.value}%` };
  }
  const de = v(() => {
    if (r.markerLabels === false) return null;
    const ue = {};
    return ae.value.forEach((_e2) => {
      ue[_e2.value] = _e2;
    }), ue;
  });
  function oe() {
    if (o["marker-label-group"] !== void 0) return o["marker-label-group"](Y.value);
    const ue = o["marker-label"] || Py;
    return ae.value.map((_e2) => ue({ marker: _e2, ...Y.value }));
  }
  const j = v(() => [[bn, se, void 0, { [C.value]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
  function se(ue) {
    ue.isFinal === true ? (h.value !== void 0 && (t(ue.evt), ue.touch === true && e(true), h.value = void 0, a("pan", "end")), s.value = false, m.value = false) : ue.isFirst === true ? (h.value = n(ue.evt), t(ue.evt), e(), s.value = true, a("pan", "start")) : (t(ue.evt), e());
  }
  function we() {
    m.value = false;
  }
  function ke(ue) {
    t(ue, n(ue)), e(), f.value = true, s.value = true, document.addEventListener("mouseup", Te, true);
  }
  function Te() {
    f.value = false, s.value = false, e(true), we(), document.removeEventListener("mouseup", Te, true);
  }
  function Me(ue) {
    t(ue, n(ue)), e(true);
  }
  function He(ue) {
    Hs.includes(ue.keyCode) && e(true);
  }
  function Ve(ue) {
    if (r.vertical === true) return null;
    const _e2 = i.lang.rtl !== r.reverse ? 1 - ue : ue;
    return { transform: `translateX(calc(${2 * _e2 - 1} * ${r.thumbSize} / 2 + ${50 - 100 * _e2}%))` };
  }
  function ce(ue) {
    const _e2 = v(() => f.value === false && (m.value === ue.focusValue || m.value === "both") ? " q-slider--focus" : ""), Ce = v(() => `q-slider__thumb q-slider__thumb${g.value} q-slider__thumb${g.value}-${w.value === true ? "rtl" : "ltr"} absolute non-selectable` + _e2.value + (ue.thumbColor.value !== void 0 ? ` text-${ue.thumbColor.value}` : "")), Oe = v(() => ({ width: r.thumbSize, height: r.thumbSize, [D.value]: `${100 * ue.ratio.value}%`, zIndex: m.value === ue.focusValue ? 2 : void 0 })), Re = v(() => ue.labelColor.value !== void 0 ? ` text-${ue.labelColor.value}` : ""), Ye = v(() => Ve(ue.ratio.value)), it = v(() => "q-slider__text" + (ue.labelTextColor.value !== void 0 ? ` text-${ue.labelTextColor.value}` : ""));
    return () => {
      const Ct = [d("svg", { class: "q-slider__thumb-shape absolute-full", viewBox: "0 0 20 20", "aria-hidden": "true" }, [d("path", { d: r.thumbPath })]), d("div", { class: "q-slider__focus-ring fit" })];
      return (r.label === true || r.labelAlways === true) && (Ct.push(d("div", { class: R.value + " absolute fit no-pointer-events" + Re.value }, [d("div", { class: re.value, style: { minWidth: r.thumbSize } }, [d("div", { class: P.value, style: Ye.value }, [d("span", { class: it.value }, ue.label.value)])])])), r.name !== void 0 && r.disable !== true && c(Ct, "push")), d("div", { class: Ce.value, style: Oe.value, ...ue.getNodeData() }, Ct);
    };
  }
  function pe(ue, _e2, Ce, Oe) {
    const Re = [];
    r.innerTrackColor !== "transparent" && Re.push(d("div", { key: "inner", class: X.value, style: O.value })), r.selectionColor !== "transparent" && Re.push(d("div", { key: "selection", class: ie.value, style: ue.value })), r.markers !== false && Re.push(d("div", { key: "marker", class: ye.value, style: fe.value })), Oe(Re);
    const Ye = [_n("div", { key: "trackC", class: G.value, tabindex: _e2.value, ...Ce.value }, [d("div", { class: T.value, style: E.value }, Re)], "slide", p.value, () => j.value)];
    if (r.markerLabels !== false) {
      const it = r.switchMarkerLabelsSide === true ? "unshift" : "push";
      Ye[it](d("div", { key: "markerL", class: J.value }, oe()));
    }
    return Ye;
  }
  return Ke(() => {
    document.removeEventListener("mouseup", Te, true);
  }), { state: { active: s, focus: m, preventFocus: f, dragging: h, editable: p, classes: Q, tabindex: $, attributes: H, roundValueFn: b, keyStep: S, trackLen: F, innerMin: k, innerMinRatio: B, innerMax: y, innerMaxRatio: L, positionProp: D, sizeProp: M, isReversed: w }, methods: { onActivate: ke, onMobileClick: Me, onBlur: we, onKeyup: He, getContent: pe, getThumbRenderFn: ce, convertRatioToModel: le, convertModelToRatio: be, getDraggingRatio: x } };
}
var $y = () => ({}), lr = he({ name: "QSlider", props: { ...Jm, modelValue: { required: true, default: null, validator: (e) => typeof e == "number" || e === null }, labelValue: [String, Number] }, emits: eh, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = xe(), { state: l, methods: r } = th({ updateValue: g, updatePosition: w, getDragging: _, formAttrs: Ba(e) }), a = U(null), o = U(0), i = U(0);
  function u() {
    i.value = e.modelValue === null ? l.innerMin.value : ct(e.modelValue, l.innerMin.value, l.innerMax.value);
  }
  ge(() => `${e.modelValue}|${l.innerMin.value}|${l.innerMax.value}`, u), u();
  const c = v(() => r.convertModelToRatio(i.value)), s = v(() => l.active.value === true ? o.value : c.value), f = v(() => {
    const p = { [l.positionProp.value]: `${100 * l.innerMinRatio.value}%`, [l.sizeProp.value]: `${100 * (s.value - l.innerMinRatio.value)}%` };
    return e.selectionImg !== void 0 && (p.backgroundImage = `url(${e.selectionImg}) !important`), p;
  }), m = r.getThumbRenderFn({ focusValue: true, getNodeData: $y, ratio: s, label: v(() => e.labelValue !== void 0 ? e.labelValue : i.value), thumbColor: v(() => e.thumbColor || e.color), labelColor: v(() => e.labelColor), labelTextColor: v(() => e.labelTextColor) }), h = v(() => l.editable.value !== true ? {} : n.platform.is.mobile === true ? { onClick: r.onMobileClick } : { onMousedown: r.onActivate, onFocus: k, onBlur: r.onBlur, onKeydown: y, onKeyup: r.onKeyup });
  function g(p) {
    i.value !== e.modelValue && t("update:modelValue", i.value), p === true && t("change", i.value);
  }
  function _() {
    return a.value.getBoundingClientRect();
  }
  function w(p, b = l.dragging.value) {
    const S = r.getDraggingRatio(p, b);
    i.value = r.convertRatioToModel(S), o.value = e.snap !== true || e.step === 0 ? S : r.convertModelToRatio(i.value);
  }
  function k() {
    l.focus.value = true;
  }
  function y(p) {
    if (Hs.includes(p.keyCode) === false) return;
    je(p);
    const b = ([34, 33].includes(p.keyCode) ? 10 : 1) * l.keyStep.value, S = ([34, 37, 40].includes(p.keyCode) ? -1 : 1) * (l.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * b;
    i.value = ct(l.roundValueFn.value(i.value + S), l.innerMin.value, l.innerMax.value), g();
  }
  return () => {
    const p = r.getContent(f, l.tabindex, h, (b) => {
      b.push(m());
    });
    return d("div", { ref: a, class: l.classes.value + (e.modelValue === null ? " q-slider--no-value" : ""), ...l.attributes.value, "aria-valuenow": e.modelValue }, p);
  };
} });
function nh() {
  const e = U(!ln.value);
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
function Ly(e, t, n) {
  const l = n === true ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${t === true ? l[0] : l[1]}${e ? ` text-${e}` : ""}`;
}
var By = ["left", "center", "right", "justify"], sd = he({ name: "QTabs", props: { modelValue: [Number, String], align: { type: String, default: "center", validator: (e) => By.includes(e) }, breakpoint: { type: [String, Number], default: 600 }, vertical: Boolean, shrink: Boolean, stretch: Boolean, activeClass: String, activeColor: String, activeBgColor: String, indicatorColor: String, leftIcon: String, rightIcon: String, outsideArrows: Boolean, mobileArrows: Boolean, switchIndicator: Boolean, narrowIndicator: Boolean, inlineLabel: Boolean, noCaps: Boolean, dense: Boolean, contentClass: String, "onUpdate:modelValue": [Function, Array] }, setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), { $q: r } = l, { registerTick: a } = _r(), { registerTick: o } = _r(), { registerTick: i } = _r(), { registerTimeout: u, removeTimeout: c } = Zn(), { registerTimeout: s, removeTimeout: f } = Zn(), m = U(null), h = U(null), g = U(e.modelValue), _ = U(false), w = U(true), k = U(false), y = U(false), p = [], b = U(0), S = U(false);
  let $ = null, F = null, z;
  const B = v(() => ({ activeClass: e.activeClass, activeColor: e.activeColor, activeBgColor: e.activeBgColor, indicatorClass: Ly(e.indicatorColor, e.switchIndicator, e.vertical), narrowIndicator: e.narrowIndicator, inlineLabel: e.inlineLabel, noCaps: e.noCaps })), L = v(() => {
    const oe = b.value, j = g.value;
    for (let se = 0; se < oe; se++) if (p[se].name.value === j) return true;
    return false;
  }), D = v(() => `q-tabs__content--align-${_.value === true ? "left" : y.value === true ? "justify" : e.align}`), M = v(() => `q-tabs row no-wrap items-center q-tabs--${_.value === true ? "" : "not-"}scrollable q-tabs--${e.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${e.outsideArrows === true ? "outside" : "inside"} q-tabs--mobile-with${e.mobileArrows === true ? "" : "out"}-arrows` + (e.dense === true ? " q-tabs--dense" : "") + (e.shrink === true ? " col-shrink" : "") + (e.stretch === true ? " self-stretch" : "")), A = v(() => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + D.value + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), C = v(() => e.vertical === true ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" }), H = v(() => e.vertical !== true && r.lang.rtl === true), Q = v(() => ka === false && H.value === true);
  ge(H, R), ge(() => e.modelValue, (oe) => {
    K({ name: oe, setCurrent: true, skipEmit: true });
  }), ge(() => e.outsideArrows, W);
  function K({ name: oe, setCurrent: j, skipEmit: se }) {
    g.value !== oe && (se !== true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", oe), (j === true || e["onUpdate:modelValue"] === void 0) && (ye(g.value, oe), g.value = oe));
  }
  function W() {
    a(() => {
      m.value && ie({ width: m.value.offsetWidth, height: m.value.offsetHeight });
    });
  }
  function ie(oe) {
    if (C.value === void 0 || h.value === null) return;
    const j = oe[C.value.container], se = Math.min(h.value[C.value.scroll], Array.prototype.reduce.call(h.value.children, (ke, Te) => ke + (Te[C.value.content] || 0), 0)), we = j > 0 && se > j;
    _.value = we, we === true && o(R), y.value = j < parseInt(e.breakpoint, 10);
  }
  function ye(oe, j) {
    const se = oe != null && oe !== "" ? p.find((ke) => ke.name.value === oe) : null, we = j != null && j !== "" ? p.find((ke) => ke.name.value === j) : null;
    if (de === true) de = false;
    else if (se && we) {
      const ke = se.tabIndicatorRef.value, Te = we.tabIndicatorRef.value;
      $ !== null && (clearTimeout($), $ = null), ke.style.transition = "none", ke.style.transform = "none", Te.style.transition = "none", Te.style.transform = "none";
      const Me = ke.getBoundingClientRect(), He = Te.getBoundingClientRect();
      Te.style.transform = e.vertical === true ? `translate3d(0,${Me.top - He.top}px,0) scale3d(1,${He.height ? Me.height / He.height : 1},1)` : `translate3d(${Me.left - He.left}px,0,0) scale3d(${He.width ? Me.width / He.width : 1},1,1)`, i(() => {
        $ = setTimeout(() => {
          $ = null, Te.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)", Te.style.transform = "none";
        }, 70);
      });
    }
    we && _.value === true && G(we.rootRef.value);
  }
  function G(oe) {
    const { left: j, width: se, top: we, height: ke } = h.value.getBoundingClientRect(), Te = oe.getBoundingClientRect();
    let Me = e.vertical === true ? Te.top - we : Te.left - j;
    if (Me < 0) {
      h.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.floor(Me), R();
      return;
    }
    Me += e.vertical === true ? Te.height - ke : Te.width - se, Me > 0 && (h.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.ceil(Me), R());
  }
  function R() {
    const oe = h.value;
    if (oe === null) return;
    const j = oe.getBoundingClientRect(), se = e.vertical === true ? oe.scrollTop : Math.abs(oe.scrollLeft);
    H.value === true ? (w.value = Math.ceil(se + j.width) < oe.scrollWidth - 1, k.value = se > 0) : (w.value = se > 0, k.value = e.vertical === true ? Math.ceil(se + j.height) < oe.scrollHeight : Math.ceil(se + j.width) < oe.scrollWidth);
  }
  function re(oe) {
    F !== null && clearInterval(F), F = setInterval(() => {
      O(oe) === true && T();
    }, 5);
  }
  function P() {
    re(Q.value === true ? Number.MAX_SAFE_INTEGER : 0);
  }
  function J() {
    re(Q.value === true ? 0 : Number.MAX_SAFE_INTEGER);
  }
  function T() {
    F !== null && (clearInterval(F), F = null);
  }
  function E(oe, j) {
    const se = Array.prototype.filter.call(h.value.children, (He) => He === j || He.matches && He.matches(".q-tab.q-focusable") === true), we = se.length;
    if (we === 0) return;
    if (oe === 36) return G(se[0]), se[0].focus(), true;
    if (oe === 35) return G(se[we - 1]), se[we - 1].focus(), true;
    const ke = oe === (e.vertical === true ? 38 : 37), Te = oe === (e.vertical === true ? 40 : 39), Me = ke === true ? -1 : Te === true ? 1 : void 0;
    if (Me !== void 0) {
      const He = H.value === true ? -1 : 1, Ve = se.indexOf(j) + Me * He;
      return Ve >= 0 && Ve < we && (G(se[Ve]), se[Ve].focus({ preventScroll: true })), true;
    }
  }
  const X = v(() => Q.value === true ? { get: (oe) => Math.abs(oe.scrollLeft), set: (oe, j) => {
    oe.scrollLeft = -j;
  } } : e.vertical === true ? { get: (oe) => oe.scrollTop, set: (oe, j) => {
    oe.scrollTop = j;
  } } : { get: (oe) => oe.scrollLeft, set: (oe, j) => {
    oe.scrollLeft = j;
  } });
  function O(oe) {
    const j = h.value, { get: se, set: we } = X.value;
    let ke = false, Te = se(j);
    const Me = oe < Te ? -1 : 1;
    return Te += Me * 5, Te < 0 ? (ke = true, Te = 0) : (Me === -1 && Te <= oe || Me === 1 && Te >= oe) && (ke = true, Te = oe), we(j, Te), R(), ke;
  }
  function le(oe, j) {
    for (const se in oe) if (oe[se] !== j[se]) return false;
    return true;
  }
  function be() {
    let oe = null, j = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
    const se = p.filter((Me) => {
      var _a3;
      return ((_a3 = Me.routeData) == null ? void 0 : _a3.hasRouterLink.value) === true;
    }), { hash: we, query: ke } = l.$route, Te = Object.keys(ke).length;
    for (const Me of se) {
      const He = Me.routeData.exact.value === true;
      if (Me.routeData[He === true ? "linkIsExactActive" : "linkIsActive"].value !== true) continue;
      const { hash: Ve, query: ce, matched: pe, href: ue } = Me.routeData.resolvedLink.value, _e2 = Object.keys(ce).length;
      if (He === true) {
        if (Ve !== we || _e2 !== Te || le(ke, ce) === false) continue;
        oe = Me.name.value;
        break;
      }
      if (Ve !== "" && Ve !== we || _e2 !== 0 && le(ce, ke) === false) continue;
      const Ce = { matchedLen: pe.length, queryDiff: Te - _e2, hrefLen: ue.length - Ve.length };
      if (Ce.matchedLen > j.matchedLen) {
        oe = Me.name.value, j = Ce;
        continue;
      } else if (Ce.matchedLen !== j.matchedLen) continue;
      if (Ce.queryDiff < j.queryDiff) oe = Me.name.value, j = Ce;
      else if (Ce.queryDiff !== j.queryDiff) continue;
      Ce.hrefLen > j.hrefLen && (oe = Me.name.value, j = Ce);
    }
    if (oe === null && p.some((Me) => Me.routeData === void 0 && Me.name.value === g.value) === true) {
      de = false;
      return;
    }
    K({ name: oe, setCurrent: true });
  }
  function x(oe) {
    if (c(), S.value !== true && m.value !== null && oe.target && typeof oe.target.closest == "function") {
      const j = oe.target.closest(".q-tab");
      j && m.value.contains(j) === true && (S.value = true, _.value === true && G(j));
    }
  }
  function q() {
    u(() => {
      S.value = false;
    }, 30);
  }
  function V() {
    fe.avoidRouteWatcher === false ? s(be) : f();
  }
  function te() {
    if (z === void 0) {
      const oe = ge(() => l.$route.fullPath, V);
      z = () => {
        oe(), z = void 0;
      };
    }
  }
  function ae(oe) {
    p.push(oe), b.value++, W(), oe.routeData === void 0 || l.$route === void 0 ? s(() => {
      if (_.value === true) {
        const j = g.value, se = j != null && j !== "" ? p.find((we) => we.name.value === j) : null;
        se && G(se.rootRef.value);
      }
    }) : (te(), oe.routeData.hasRouterLink.value === true && V());
  }
  function Y(oe) {
    p.splice(p.indexOf(oe), 1), b.value--, W(), z !== void 0 && oe.routeData !== void 0 && (p.every((j) => j.routeData === void 0) === true && z(), V());
  }
  const fe = { currentModel: g, tabProps: B, hasFocus: S, hasActiveTab: L, registerTab: ae, unregisterTab: Y, verifyRouteModel: V, updateModel: K, onKbdNavigate: E, avoidRouteWatcher: false };
  gn(hm, fe);
  function N() {
    $ !== null && clearTimeout($), T(), z == null ? void 0 : z();
  }
  let ne, de;
  return Ke(N), Vn(() => {
    ne = z !== void 0, N();
  }), Sl(() => {
    ne === true && (te(), de = true, V()), W();
  }), () => d("div", { ref: m, class: M.value, role: "tablist", onFocusin: x, onFocusout: q }, [d(Ql, { onResize: ie }), d("div", { ref: h, class: A.value, onScroll: R }, $e(t.default)), d(et, { class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (w.value === true ? "" : " q-tabs__arrow--faded"), name: e.leftIcon || r.iconSet.tabs[e.vertical === true ? "up" : "left"], onMousedownPassive: P, onTouchstartPassive: P, onMouseupPassive: T, onMouseleavePassive: T, onTouchendPassive: T }), d(et, { class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (k.value === true ? "" : " q-tabs__arrow--faded"), name: e.rightIcon || r.iconSet.tabs[e.vertical === true ? "down" : "right"], onMousedownPassive: J, onTouchstartPassive: J, onMouseupPassive: T, onMouseleavePassive: T, onTouchendPassive: T })]);
} }), Fy = 0, rh = ["click", "keydown"], ah = { icon: String, label: [Number, String], alert: [Boolean, String], alertIcon: String, name: { type: [Number, String], default: () => `t_${Fy++}` }, noCaps: Boolean, tabindex: [String, Number], disable: Boolean, contentClass: String, ripple: { type: [Boolean, Object], default: true } };
function oh(e, t, n, l) {
  const r = qt(hm, ot);
  if (r === ot) return console.error("QTab/QRouteTab component needs to be child of QTabs"), ot;
  const { proxy: a } = xe(), o = U(null), i = U(null), u = U(null), c = v(() => e.disable === true || e.ripple === false ? false : Object.assign({ keyCodes: [13, 32], early: true }, e.ripple === true ? {} : e.ripple)), s = v(() => r.currentModel.value === e.name), f = v(() => "q-tab relative-position self-stretch flex flex-center text-center" + (s.value === true ? " q-tab--active" + (r.tabProps.value.activeClass ? " " + r.tabProps.value.activeClass : "") + (r.tabProps.value.activeColor ? ` text-${r.tabProps.value.activeColor}` : "") + (r.tabProps.value.activeBgColor ? ` bg-${r.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (e.icon && e.label && r.tabProps.value.inlineLabel === false ? " q-tab--full" : "") + (e.noCaps === true || r.tabProps.value.noCaps === true ? " q-tab--no-caps" : "") + (e.disable === true ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (l !== void 0 ? l.linkClass.value : "")), m = v(() => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + (r.tabProps.value.inlineLabel === true ? "row no-wrap q-tab__content--inline" : "column") + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), h = v(() => e.disable === true || r.hasFocus.value === true || s.value === false && r.hasActiveTab.value === true ? -1 : e.tabindex || 0);
  function g(p, b) {
    var _a3;
    if (b !== true && (p == null ? void 0 : p.qAvoidFocus) !== true && ((_a3 = o.value) == null ? void 0 : _a3.focus()), e.disable === true) {
      (l == null ? void 0 : l.hasRouterLink.value) === true && je(p);
      return;
    }
    if (l === void 0) {
      r.updateModel({ name: e.name }), n("click", p);
      return;
    }
    if (l.hasRouterLink.value === true) {
      const S = ($ = {}) => {
        let F;
        const z = $.to === void 0 || Tn($.to, e.to) === true ? r.avoidRouteWatcher = Ca() : null;
        return l.navigateToRouterLink(p, { ...$, returnRouterError: true }).catch((B) => {
          F = B;
        }).then((B) => {
          var _a4;
          if (z === r.avoidRouteWatcher && (r.avoidRouteWatcher = false, F === void 0 && (B === void 0 || ((_a4 = B.message) == null ? void 0 : _a4.startsWith("Avoided redundant navigation")) === true) && r.updateModel({ name: e.name })), $.returnRouterError === true) return F !== void 0 ? Promise.reject(F) : B;
        });
      };
      n("click", p, S), p.defaultPrevented !== true && S();
      return;
    }
    n("click", p);
  }
  function _(p) {
    yn(p, [13, 32]) ? g(p, true) : Xl(p) !== true && p.keyCode >= 35 && p.keyCode <= 40 && p.altKey !== true && p.metaKey !== true && r.onKbdNavigate(p.keyCode, a.$el) === true && je(p), n("keydown", p);
  }
  function w() {
    const p = r.tabProps.value.narrowIndicator, b = [], S = d("div", { ref: u, class: ["q-tab__indicator", r.tabProps.value.indicatorClass] });
    e.icon !== void 0 && b.push(d(et, { class: "q-tab__icon", name: e.icon })), e.label !== void 0 && b.push(d("div", { class: "q-tab__label" }, e.label)), e.alert !== false && b.push(e.alertIcon !== void 0 ? d(et, { class: "q-tab__alert-icon", color: e.alert !== true ? e.alert : void 0, name: e.alertIcon }) : d("div", { class: "q-tab__alert" + (e.alert !== true ? ` text-${e.alert}` : "") })), p === true && b.push(S);
    const $ = [d("div", { class: "q-focus-helper", tabindex: -1, ref: o }), d("div", { class: m.value }, Tt(t.default, b))];
    return p === false && $.push(S), $;
  }
  const k = { name: v(() => e.name), rootRef: i, tabIndicatorRef: u, routeData: l };
  Ke(() => {
    r.unregisterTab(k);
  }), ft(() => {
    r.registerTab(k);
  });
  function y(p, b) {
    const S = { ref: i, class: f.value, tabindex: h.value, role: "tab", "aria-selected": s.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: g, onKeydown: _, ...b };
    return cn(d(p, S, w()), [[ci, c.value]]);
  }
  return { renderTab: y, $tabs: r };
}
var Ir = he({ name: "QTab", props: ah, emits: rh, setup(e, { slots: t, emit: n }) {
  const { renderTab: l } = oh(e, t, n);
  return () => l("div");
} }), Oy = he({ name: "QTabPanels", props: { ...Fs, ...nt }, emits: Os, setup(e, { slots: t }) {
  const n = xe(), l = lt(e, n.proxy.$q), { updatePanelsList: r, getPanelContent: a, panelDirectives: o } = Vs(), i = v(() => "q-tab-panels q-panel-parent" + (l.value === true ? " q-tab-panels--dark q-dark" : ""));
  return () => (r(t), _n("div", { class: i.value }, a(), "pan", e.swipeable, () => o.value));
} }), ji = he({ name: "QTabPanel", props: Bs, setup(e, { slots: t }) {
  return () => d("div", { class: "q-tab-panel", role: "tabpanel" }, $e(t.default));
} }), cd = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, dd = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, fd = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, Qa = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, Ka = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, co = { date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e), time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e), fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e), timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e), email: (e) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e), hexColor: (e) => cd.test(e), hexaColor: (e) => dd.test(e), hexOrHexaColor: (e) => fd.test(e), rgbColor: (e) => Qa.test(e), rgbaColor: (e) => Ka.test(e), rgbOrRgbaColor: (e) => Qa.test(e) || Ka.test(e), hexOrRgbColor: (e) => cd.test(e) || Qa.test(e), hexaOrRgbaColor: (e) => dd.test(e) || Ka.test(e), anyColor: (e) => fd.test(e) || Qa.test(e) || Ka.test(e) }, Vy = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;
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
  const t = e.replace(/ /g, ""), n = Vy.exec(t);
  if (n === null) return ih(t);
  const l = { r: Math.min(255, parseInt(n[2], 10)), g: Math.min(255, parseInt(n[3], 10)), b: Math.min(255, parseInt(n[4], 10)) };
  if (n[1]) {
    const r = parseFloat(n[5]);
    l.a = Math.min(1, isNaN(r) === true ? 1 : r) * 100;
  }
  return l;
}
function Dy(e) {
  if (typeof e != "string" && (!e || e.r === void 0)) throw new TypeError("Expected a string or a {r, g, b} object as color");
  const t = typeof e == "string" ? uh(e) : e, n = t.r / 255, l = t.g / 255, r = t.b / 255, a = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4), o = l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4), i = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  return 0.2126 * a + 0.7152 * o + 0.0722 * i;
}
var Iy = ["rgb(255,204,204)", "rgb(255,230,204)", "rgb(255,255,204)", "rgb(204,255,204)", "rgb(204,255,230)", "rgb(204,255,255)", "rgb(204,230,255)", "rgb(204,204,255)", "rgb(230,204,255)", "rgb(255,204,255)", "rgb(255,153,153)", "rgb(255,204,153)", "rgb(255,255,153)", "rgb(153,255,153)", "rgb(153,255,204)", "rgb(153,255,255)", "rgb(153,204,255)", "rgb(153,153,255)", "rgb(204,153,255)", "rgb(255,153,255)", "rgb(255,102,102)", "rgb(255,179,102)", "rgb(255,255,102)", "rgb(102,255,102)", "rgb(102,255,179)", "rgb(102,255,255)", "rgb(102,179,255)", "rgb(102,102,255)", "rgb(179,102,255)", "rgb(255,102,255)", "rgb(255,51,51)", "rgb(255,153,51)", "rgb(255,255,51)", "rgb(51,255,51)", "rgb(51,255,153)", "rgb(51,255,255)", "rgb(51,153,255)", "rgb(51,51,255)", "rgb(153,51,255)", "rgb(255,51,255)", "rgb(255,0,0)", "rgb(255,128,0)", "rgb(255,255,0)", "rgb(0,255,0)", "rgb(0,255,128)", "rgb(0,255,255)", "rgb(0,128,255)", "rgb(0,0,255)", "rgb(128,0,255)", "rgb(255,0,255)", "rgb(245,0,0)", "rgb(245,123,0)", "rgb(245,245,0)", "rgb(0,245,0)", "rgb(0,245,123)", "rgb(0,245,245)", "rgb(0,123,245)", "rgb(0,0,245)", "rgb(123,0,245)", "rgb(245,0,245)", "rgb(214,0,0)", "rgb(214,108,0)", "rgb(214,214,0)", "rgb(0,214,0)", "rgb(0,214,108)", "rgb(0,214,214)", "rgb(0,108,214)", "rgb(0,0,214)", "rgb(108,0,214)", "rgb(214,0,214)", "rgb(163,0,0)", "rgb(163,82,0)", "rgb(163,163,0)", "rgb(0,163,0)", "rgb(0,163,82)", "rgb(0,163,163)", "rgb(0,82,163)", "rgb(0,0,163)", "rgb(82,0,163)", "rgb(163,0,163)", "rgb(92,0,0)", "rgb(92,46,0)", "rgb(92,92,0)", "rgb(0,92,0)", "rgb(0,92,46)", "rgb(0,92,92)", "rgb(0,46,92)", "rgb(0,0,92)", "rgb(46,0,92)", "rgb(92,0,92)", "rgb(255,255,255)", "rgb(205,205,205)", "rgb(178,178,178)", "rgb(153,153,153)", "rgb(127,127,127)", "rgb(102,102,102)", "rgb(76,76,76)", "rgb(51,51,51)", "rgb(25,25,25)", "rgb(0,0,0)"], gd = "M5 5 h10 v10 h-10 v-10 z", zy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==";
he({ name: "QColor", props: { ...nt, ...xn, modelValue: String, defaultValue: String, defaultView: { type: String, default: "spectrum", validator: (e) => ["spectrum", "tune", "palette"].includes(e) }, formatModel: { type: String, default: "auto", validator: (e) => ["auto", "hex", "rgb", "hexa", "rgba"].includes(e) }, palette: Array, noHeader: Boolean, noHeaderTabs: Boolean, noFooter: Boolean, square: Boolean, flat: Boolean, bordered: Boolean, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), { $q: l } = n, r = lt(e, l), { getCache: a } = Fa(), o = U(null), i = U(null), u = v(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("hex") !== -1), c = v(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1), s = U(e.formatModel === "auto" ? e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#") ? "hex" : "rgb" : e.formatModel.startsWith("hex") ? "hex" : "rgb"), f = U(e.defaultView), m = U(M(e.modelValue || e.defaultValue)), h = v(() => e.disable !== true && e.readonly !== true), g = v(() => e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#")), _ = v(() => u.value !== null ? u.value : g.value), w = v(() => ({ type: "hidden", name: e.name, value: m.value[_.value === true ? "hex" : "rgb"] })), k = kl(w), y = v(() => c.value !== null ? c.value : m.value.a !== void 0), p = v(() => ({ backgroundColor: m.value.rgb || "#000" })), b = v(() => `q-color-picker__header-content q-color-picker__header-content--${(m.value.a !== void 0 && m.value.a < 65 ? true : Dy(m.value) > 0.4) ? "light" : "dark"}`), S = v(() => ({ background: `hsl(${m.value.h},100%,50%)` })), $ = v(() => ({ top: `${100 - m.value.v}%`, [l.lang.rtl === true ? "right" : "left"]: `${m.value.s}%` })), F = v(() => e.palette !== void 0 && e.palette.length !== 0 ? e.palette : Iy), z = v(() => "q-color-picker" + (e.bordered === true ? " q-color-picker--bordered" : "") + (e.square === true ? " q-color-picker--square no-border-radius" : "") + (e.flat === true ? " q-color-picker--flat no-shadow" : "") + (e.disable === true ? " disabled" : "") + (r.value === true ? " q-color-picker--dark q-dark" : "")), B = v(() => e.disable === true ? { "aria-disabled": "true" } : {}), L = v(() => [[bn, ie, void 0, { prevent: true, stop: true, mouse: true }]]);
  ge(() => e.modelValue, (x) => {
    const q = M(x || e.defaultValue);
    q.hex !== m.value.hex && (m.value = q);
  }), ge(() => e.defaultValue, (x) => {
    if (!e.modelValue && x) {
      const q = M(x);
      q.hex !== m.value.hex && (m.value = q);
    }
  });
  function D(x, q) {
    m.value.hex = vd(x), m.value.rgb = md(x), m.value.r = x.r, m.value.g = x.g, m.value.b = x.b, m.value.a = x.a;
    const V = m.value[_.value === true ? "hex" : "rgb"];
    t("update:modelValue", V), q === true && t("change", V);
  }
  function M(x) {
    const q = c.value !== void 0 ? c.value : e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1;
    if (typeof x != "string" || x.length === 0 || co.anyColor(x.replace(/ /g, "")) !== true) return { h: 0, s: 0, v: 0, r: 0, g: 0, b: 0, a: q === true ? 100 : void 0, hex: void 0, rgb: void 0 };
    const V = uh(x);
    return q === true && V.a === void 0 && (V.a = 100), V.hex = vd(V), V.rgb = md(V), Object.assign(V, Ui(V));
  }
  function A(x, q, V) {
    const te = o.value;
    if (te === null) return;
    const ae = te.clientWidth, Y = te.clientHeight, fe = te.getBoundingClientRect();
    let N = Math.min(ae, Math.max(0, x - fe.left));
    l.lang.rtl === true && (N = ae - N);
    const ne = Math.min(Y, Math.max(0, q - fe.top)), de = Math.round(100 * N / ae), oe = Math.round(100 * Math.max(0, Math.min(1, -(ne / Y) + 1))), j = hd({ h: m.value.h, s: de, v: oe, a: y.value === true ? m.value.a : void 0 });
    m.value.s = de, m.value.v = oe, D(j, V);
  }
  function C(x, q) {
    const V = Math.round(x), te = hd({ h: V, s: m.value.s, v: m.value.v, a: y.value === true ? m.value.a : void 0 });
    m.value.h = V, D(te, q);
  }
  function H(x) {
    C(x, true);
  }
  function Q(x, q, V, te, ae) {
    if (te !== void 0 && wt(te), !/^[0-9]+$/.test(x)) {
      ae === true && n.$forceUpdate();
      return;
    }
    const Y = Math.floor(Number(x));
    if (Y < 0 || Y > V) {
      ae === true && n.$forceUpdate();
      return;
    }
    const fe = { r: q === "r" ? Y : m.value.r, g: q === "g" ? Y : m.value.g, b: q === "b" ? Y : m.value.b, a: y.value === true ? q === "a" ? Y : m.value.a : void 0 };
    if (q !== "a") {
      const N = Ui(fe);
      m.value.h = N.h, m.value.s = N.s, m.value.v = N.v;
    }
    if (D(fe, ae), ae !== true && (te == null ? void 0 : te.target.selectionEnd) !== void 0) {
      const N = te.target.selectionEnd;
      We(() => {
        te.target.setSelectionRange(N, N);
      });
    }
  }
  function K(x, q) {
    let V;
    const te = x.target.value;
    if (wt(x), s.value === "hex") {
      if (te.length !== (y.value === true ? 9 : 7) || !/^#[0-9A-Fa-f]+$/.test(te)) return true;
      V = ih(te);
    } else {
      let Y;
      if (te.endsWith(")")) if (y.value !== true && te.startsWith("rgb(")) {
        if (Y = te.substring(4, te.length - 1).split(",").map((fe) => parseInt(fe, 10)), Y.length !== 3 || !/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(te)) return true;
      } else if (y.value === true && te.startsWith("rgba(")) {
        if (Y = te.substring(5, te.length - 1).split(","), Y.length !== 4 || !/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(te)) return true;
        for (let N = 0; N < 3; N++) {
          const ne = parseInt(Y[N], 10);
          if (ne < 0 || ne > 255) return true;
          Y[N] = ne;
        }
        const fe = parseFloat(Y[3]);
        if (fe < 0 || fe > 1) return true;
        Y[3] = fe;
      } else return true;
      else return true;
      if (Y[0] < 0 || Y[0] > 255 || Y[1] < 0 || Y[1] > 255 || Y[2] < 0 || Y[2] > 255 || y.value === true && (Y[3] < 0 || Y[3] > 1)) return true;
      V = { r: Y[0], g: Y[1], b: Y[2], a: y.value === true ? Y[3] * 100 : void 0 };
    }
    const ae = Ui(V);
    if (m.value.h = ae.h, m.value.s = ae.s, m.value.v = ae.v, D(V, q), q !== true) {
      const Y = x.target.selectionEnd;
      We(() => {
        x.target.setSelectionRange(Y, Y);
      });
    }
  }
  function W(x) {
    const q = M(x), V = { r: q.r, g: q.g, b: q.b, a: q.a };
    V.a === void 0 && (V.a = m.value.a), m.value.h = q.h, m.value.s = q.s, m.value.v = q.v, D(V, true);
  }
  function ie(x) {
    x.isFinal ? A(x.position.left, x.position.top, true) : ye(x);
  }
  const ye = Tm((x) => {
    A(x.position.left, x.position.top);
  }, 20);
  function G(x) {
    A(x.pageX - window.pageXOffset, x.pageY - window.pageYOffset, true);
  }
  function R(x) {
    A(x.pageX - window.pageXOffset, x.pageY - window.pageYOffset);
  }
  function re(x) {
    i.value !== null && (i.value.$el.style.opacity = x ? 1 : 0);
  }
  function P(x) {
    s.value = x;
  }
  function J() {
    const x = [];
    return e.noHeaderTabs !== true && x.push(d(sd, { class: "q-color-picker__header-tabs", modelValue: s.value, dense: true, align: "justify", "onUpdate:modelValue": P }, () => [d(Ir, { label: "HEX" + (y.value === true ? "A" : ""), name: "hex", ripple: false }), d(Ir, { label: "RGB" + (y.value === true ? "A" : ""), name: "rgb", ripple: false })])), x.push(d("div", { class: "q-color-picker__header-banner row flex-center no-wrap" }, [d("input", { class: "fit", value: m.value[s.value], ...h.value !== true ? { readonly: true } : {}, ...a("topIn", { onInput: (q) => {
      re(K(q) === true);
    }, onChange: wt, onBlur: (q) => {
      K(q, true) === true && n.$forceUpdate(), re(false);
    } }) }), d(et, { ref: i, class: "q-color-picker__error-icon absolute no-pointer-events", name: l.iconSet.type.negative })])), d("div", { class: "q-color-picker__header relative-position overflow-hidden" }, [d("div", { class: "q-color-picker__header-bg absolute-full" }), d("div", { class: b.value, style: p.value }, x)]);
  }
  function T() {
    return d(Oy, { modelValue: f.value, animated: true }, () => [d(ji, { class: "q-color-picker__spectrum-tab overflow-hidden", name: "spectrum" }, O), d(ji, { class: "q-pa-md q-color-picker__tune-tab", name: "tune" }, le), d(ji, { class: "q-color-picker__palette-tab", name: "palette" }, be)]);
  }
  function E(x) {
    f.value = x;
  }
  function X() {
    return d("div", { class: "q-color-picker__footer relative-position overflow-hidden" }, [d(sd, { class: "absolute-full", modelValue: f.value, dense: true, align: "justify", "onUpdate:modelValue": E }, () => [d(Ir, { icon: l.iconSet.colorPicker.spectrum, name: "spectrum", ripple: false }), d(Ir, { icon: l.iconSet.colorPicker.tune, name: "tune", ripple: false }), d(Ir, { icon: l.iconSet.colorPicker.palette, name: "palette", ripple: false })])]);
  }
  function O() {
    const x = { ref: o, class: "q-color-picker__spectrum non-selectable relative-position cursor-pointer" + (h.value !== true ? " readonly" : ""), style: S.value, ...h.value === true ? { onClick: G, onMousedown: R } : {} }, q = [d("div", { style: { paddingBottom: "100%" } }), d("div", { class: "q-color-picker__spectrum-white absolute-full" }), d("div", { class: "q-color-picker__spectrum-black absolute-full" }), d("div", { class: "absolute", style: $.value }, [m.value.hex !== void 0 ? d("div", { class: "q-color-picker__spectrum-circle" }) : null])], V = [d(lr, { class: "q-color-picker__hue non-selectable", modelValue: m.value.h, min: 0, max: 360, trackSize: "8px", innerTrackColor: "transparent", selectionColor: "transparent", readonly: h.value !== true, thumbPath: gd, "onUpdate:modelValue": C, onChange: H })];
    return y.value === true && V.push(d(lr, { class: "q-color-picker__alpha non-selectable", modelValue: m.value.a, min: 0, max: 100, trackSize: "8px", trackColor: "white", innerTrackColor: "transparent", selectionColor: "transparent", trackImg: zy, readonly: h.value !== true, hideSelection: true, thumbPath: gd, ...a("alphaSlide", { "onUpdate:modelValue": (te) => Q(te, "a", 100), onChange: (te) => Q(te, "a", 100, void 0, true) }) })), [_n("div", x, q, "spec", h.value, () => L.value), d("div", { class: "q-color-picker__sliders" }, V)];
  }
  function le() {
    return [d("div", { class: "row items-center no-wrap" }, [d("div", "R"), d(lr, { modelValue: m.value.r, min: 0, max: 255, color: "red", dark: r.value, readonly: h.value !== true, ...a("rSlide", { "onUpdate:modelValue": (x) => Q(x, "r", 255), onChange: (x) => Q(x, "r", 255, void 0, true) }) }), d("input", { value: m.value.r, maxlength: 3, readonly: h.value !== true, onChange: wt, ...a("rIn", { onInput: (x) => Q(x.target.value, "r", 255, x), onBlur: (x) => Q(x.target.value, "r", 255, x, true) }) })]), d("div", { class: "row items-center no-wrap" }, [d("div", "G"), d(lr, { modelValue: m.value.g, min: 0, max: 255, color: "green", dark: r.value, readonly: h.value !== true, ...a("gSlide", { "onUpdate:modelValue": (x) => Q(x, "g", 255), onChange: (x) => Q(x, "g", 255, void 0, true) }) }), d("input", { value: m.value.g, maxlength: 3, readonly: h.value !== true, onChange: wt, ...a("gIn", { onInput: (x) => Q(x.target.value, "g", 255, x), onBlur: (x) => Q(x.target.value, "g", 255, x, true) }) })]), d("div", { class: "row items-center no-wrap" }, [d("div", "B"), d(lr, { modelValue: m.value.b, min: 0, max: 255, color: "blue", readonly: h.value !== true, dark: r.value, ...a("bSlide", { "onUpdate:modelValue": (x) => Q(x, "b", 255), onChange: (x) => Q(x, "b", 255, void 0, true) }) }), d("input", { value: m.value.b, maxlength: 3, readonly: h.value !== true, onChange: wt, ...a("bIn", { onInput: (x) => Q(x.target.value, "b", 255, x), onBlur: (x) => Q(x.target.value, "b", 255, x, true) }) })]), y.value === true ? d("div", { class: "row items-center no-wrap" }, [d("div", "A"), d(lr, { modelValue: m.value.a, color: "grey", readonly: h.value !== true, dark: r.value, ...a("aSlide", { "onUpdate:modelValue": (x) => Q(x, "a", 100), onChange: (x) => Q(x, "a", 100, void 0, true) }) }), d("input", { value: m.value.a, maxlength: 3, readonly: h.value !== true, onChange: wt, ...a("aIn", { onInput: (x) => Q(x.target.value, "a", 100, x), onBlur: (x) => Q(x.target.value, "a", 100, x, true) }) })]) : null];
  }
  function be() {
    const x = (q) => d("div", { class: "q-color-picker__cube col-auto", style: { backgroundColor: q }, ...h.value === true ? a("palette#" + q, { onClick: () => {
      W(q);
    } }) : {} });
    return [d("div", { class: "row items-center q-color-picker__palette-rows" + (h.value === true ? " q-color-picker__palette-rows--editable" : "") }, F.value.map(x))];
  }
  return () => {
    const x = [T()];
    return e.name !== void 0 && e.disable !== true && k(x, "push"), e.noHeader !== true && x.unshift(J()), e.noFooter !== true && x.push(X()), d("div", { class: z.value, ...B.value }, x);
  };
} });
var hl = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
function Ny(e, t, n) {
  return Object.prototype.toString.call(e) === "[object Date]" && (n = e.getDate(), t = e.getMonth() + 1, e = e.getFullYear()), Qy(js(e, t, n));
}
function bd(e, t, n) {
  return ch(Uy(e, t, n));
}
function Hy(e) {
  return jy(e) === 0;
}
function fo(e, t) {
  return t <= 6 ? 31 : t <= 11 || Hy(e) ? 30 : 29;
}
function jy(e) {
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
  const f = _t(l, 4) - _t((_t(l, 100) + 1) * 3, 4) - 150, m = 20 + r - f;
  return t || (i - c < 6 && (c = c - i + _t(i + 4, 33) * 33), u = un(un(c + 1, 33) - 1, 4), u === -1 && (u = 4)), { leap: u, gy: l, march: m };
}
function Uy(e, t, n) {
  const l = sh(e, true);
  return js(l.gy, 3, l.march) + (t - 1) * 31 - _t(t, 7) * (t - 7) + n - 1;
}
function Qy(e) {
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
var Ky = ["gregorian", "persian"], zo = { mask: { type: String }, locale: Object, calendar: { type: String, validator: (e) => Ky.includes(e), default: "gregorian" }, landscape: Boolean, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, readonly: Boolean, disable: Boolean }, dh = ["update:modelValue"];
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
      const s = Ny(u);
      return { year: s.jy, month: s.jm, day: s.jd };
    }
    return { year: u.getFullYear(), month: u.getMonth() + 1, day: u.getDate(), hour: c, minute: c, second: c, millisecond: c };
  }
  return { editable: n, tabindex: l, headerClass: r, getLocale: a, getCurrentDate: o };
}
var vh = 864e5, Wy = 36e5, ju = 6e4, mh = "YYYY-MM-DDTHH:mm:ss.SSSZ", Yy = /\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g, Xy = /(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g, Qi = {};
function Gy(e, t) {
  const n = "(" + t.days.join("|") + ")", l = e + n;
  if (Qi[l] !== void 0) return Qi[l];
  const r = "(" + t.daysShort.join("|") + ")", a = "(" + t.months.join("|") + ")", o = "(" + t.monthsShort.join("|") + ")", i = {};
  let u = 0;
  const c = e.replace(Xy, (f) => {
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
function pd(e, t = "") {
  const n = e > 0 ? "-" : "+", l = Math.abs(e), r = Math.floor(l / 60), a = l % 60;
  return n + at(r) + t + at(a);
}
function Yr(e, t, n, l, r) {
  const a = { year: null, month: null, day: null, hour: null, minute: null, second: null, millisecond: null, timezoneOffset: null, dateHash: null, timeHash: null };
  if (r !== void 0 && Object.assign(a, r), e == null || e === "" || typeof e != "string") return a;
  t === void 0 && (t = mh);
  const o = hh(n, ii.props), i = o.months, u = o.monthsShort, { regex: c, map: s } = Gy(t, o), f = e.match(c);
  if (f === null) return a;
  let m = "";
  if (s.X !== void 0 || s.x !== void 0) {
    const h = parseInt(f[s.X !== void 0 ? s.X : s.x], 10);
    if (isNaN(h) === true || h < 0) return a;
    const g = new Date(h * (s.X !== void 0 ? 1e3 : 1));
    a.year = g.getFullYear(), a.month = g.getMonth() + 1, a.day = g.getDate(), a.hour = g.getHours(), a.minute = g.getMinutes(), a.second = g.getSeconds(), a.millisecond = g.getMilliseconds();
  } else {
    if (s.YYYY !== void 0) a.year = parseInt(f[s.YYYY], 10);
    else if (s.YY !== void 0) {
      const h = parseInt(f[s.YY], 10);
      a.year = h < 0 ? h : 2e3 + h;
    }
    if (s.M !== void 0) {
      if (a.month = parseInt(f[s.M], 10), a.month < 1 || a.month > 12) return a;
    } else s.MMM !== void 0 ? a.month = u.indexOf(f[s.MMM]) + 1 : s.MMMM !== void 0 && (a.month = i.indexOf(f[s.MMMM]) + 1);
    if (s.D !== void 0) {
      if (a.day = parseInt(f[s.D], 10), a.year === null || a.month === null || a.day < 1) return a;
      const h = l !== "persian" ? new Date(a.year, a.month, 0).getDate() : fo(a.year, a.month);
      if (a.day > h) return a;
    }
    s.H !== void 0 ? a.hour = parseInt(f[s.H], 10) % 24 : s.h !== void 0 && (a.hour = parseInt(f[s.h], 10) % 12, (s.A && f[s.A] === "PM" || s.a && f[s.a] === "pm" || s.aa && f[s.aa] === "p.m.") && (a.hour += 12), a.hour = a.hour % 24), s.m !== void 0 && (a.minute = parseInt(f[s.m], 10) % 60), s.s !== void 0 && (a.second = parseInt(f[s.s], 10) % 60), s.S !== void 0 && (a.millisecond = parseInt(f[s.S], 10) * 10 ** (3 - f[s.S].length)), (s.Z !== void 0 || s.ZZ !== void 0) && (m = s.Z !== void 0 ? f[s.Z].replace(":", "") : f[s.ZZ], a.timezoneOffset = (m[0] === "+" ? -1 : 1) * (60 * m.slice(1, 3) + 1 * m.slice(3, 5)));
  }
  return a.dateHash = at(a.year, 6) + "/" + at(a.month) + "/" + at(a.day), a.timeHash = at(a.hour) + ":" + at(a.minute) + ":" + at(a.second) + m, a;
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
      return Wa(Qn(l, "hour"), Qn(r, "hour"), Wy);
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
var yd = { YY(e, t, n) {
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
  return pd(r, ":");
}, ZZ(e, t, n, l) {
  const r = l ?? e.getTimezoneOffset();
  return pd(r);
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
  return t.replace(Yy, (i, u) => i in yd ? yd[i](a, o, l, r) : u === void 0 ? i : u.split("\\]").join("]"));
}
var Nn = 20, Zy = ["Calendar", "Years", "Months"], _d = (e) => Zy.includes(e), Yi = (e) => /^-?[\d]+\/[0-1]\d$/.test(e), ar = " \u2014 ";
function rl(e) {
  return e.year + "/" + at(e.month);
}
he({ name: "QDate", props: { ...zo, ...xn, ...nt, modelValue: { required: true, validator: (e) => typeof e == "string" || Array.isArray(e) === true || Object(e) === e || e === null }, multiple: Boolean, range: Boolean, title: String, subtitle: String, mask: { ...zo.mask, default: "YYYY/MM/DD" }, defaultYearMonth: { type: String, validator: Yi }, yearsInMonthView: Boolean, events: [Array, Function], eventColor: [String, Function], emitImmediately: Boolean, options: [Array, Function], navigationMinYearMonth: { type: String, validator: Yi }, navigationMaxYearMonth: { type: String, validator: Yi }, noUnset: Boolean, firstDayOfWeek: [String, Number], todayBtn: Boolean, minimal: Boolean, defaultView: { type: String, default: "Calendar", validator: _d } }, emits: [...dh, "rangeStart", "rangeEnd", "navigation"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), { $q: r } = l, a = lt(e, r), { getCache: o } = Fa(), { tabindex: i, headerClass: u, getLocale: c, getCurrentDate: s } = fh(e, r);
  let f;
  const m = Ba(e), h = kl(m), g = U(null), _ = U(He()), w = U(c()), k = v(() => He()), y = v(() => c()), p = v(() => s()), b = U(ce(_.value, w.value)), S = U(e.defaultView), $ = v(() => r.lang.rtl === true ? "right" : "left"), F = U($.value), z = U($.value), B = b.value.year, L = U(B - B % Nn - (B < 0 ? Nn : 0)), D = U(null), M = v(() => {
    const I = e.landscape === true ? "landscape" : "portrait";
    return `q-date q-date--${I} q-date--${I}-${e.minimal === true ? "minimal" : "standard"}` + (a.value === true ? " q-date--dark q-dark" : "") + (e.bordered === true ? " q-date--bordered" : "") + (e.square === true ? " q-date--square no-border-radius" : "") + (e.flat === true ? " q-date--flat no-shadow" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-date--readonly" : "");
  }), A = v(() => e.color || "primary"), C = v(() => e.textColor || "white"), H = v(() => e.emitImmediately === true && e.multiple !== true && e.range !== true), Q = v(() => Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue !== null && e.modelValue !== void 0 ? [e.modelValue] : []), K = v(() => Q.value.filter((I) => typeof I == "string").map((I) => Ve(I, _.value, w.value)).filter((I) => I.dateHash !== null && I.day !== null && I.month !== null && I.year !== null)), W = v(() => {
    const I = (Z) => Ve(Z, _.value, w.value);
    return Q.value.filter((Z) => $t(Z) === true && Z.from !== void 0 && Z.to !== void 0).map((Z) => ({ from: I(Z.from), to: I(Z.to) })).filter((Z) => Z.from.dateHash !== null && Z.to.dateHash !== null && Z.from.dateHash < Z.to.dateHash);
  }), ie = v(() => e.calendar !== "persian" ? (I) => new Date(I.year, I.month - 1, I.day) : (I) => {
    const Z = bd(I.year, I.month, I.day);
    return new Date(Z.gy, Z.gm - 1, Z.gd);
  }), ye = v(() => e.calendar === "persian" ? Un : (I, Z, me) => bh(new Date(I.year, I.month - 1, I.day, I.hour, I.minute, I.second, I.millisecond), Z === void 0 ? _.value : Z, me === void 0 ? w.value : me, I.year, I.timezoneOffset)), G = v(() => K.value.length + W.value.reduce((I, Z) => I + 1 + gh(ie.value(Z.to), ie.value(Z.from)), 0)), R = v(() => {
    if (e.title !== void 0 && e.title !== null && e.title.length !== 0) return e.title;
    if (D.value !== null) {
      const me = D.value.init, qe = ie.value(me);
      return w.value.daysShort[qe.getDay()] + ", " + w.value.monthsShort[me.month - 1] + " " + me.day + ar + "?";
    }
    if (G.value === 0) return ar;
    if (G.value > 1) return `${G.value} ${w.value.pluralDay}`;
    const I = K.value[0], Z = ie.value(I);
    return isNaN(Z.valueOf()) === true ? ar : w.value.headerTitle !== void 0 ? w.value.headerTitle(Z, I) : w.value.daysShort[Z.getDay()] + ", " + w.value.monthsShort[I.month - 1] + " " + I.day;
  }), re = v(() => K.value.concat(W.value.map((Z) => Z.from)).sort((Z, me) => Z.year - me.year || Z.month - me.month)[0]), P = v(() => K.value.concat(W.value.map((Z) => Z.to)).sort((Z, me) => me.year - Z.year || me.month - Z.month)[0]), J = v(() => {
    if (e.subtitle !== void 0 && e.subtitle !== null && e.subtitle.length !== 0) return e.subtitle;
    if (G.value === 0) return ar;
    if (G.value > 1) {
      const I = re.value, Z = P.value, me = w.value.monthsShort;
      return me[I.month - 1] + (I.year !== Z.year ? " " + I.year + ar + me[Z.month - 1] + " " : I.month !== Z.month ? ar + me[Z.month - 1] : "") + " " + Z.year;
    }
    return K.value[0].year;
  }), T = v(() => {
    const I = [r.iconSet.datetime.arrowLeft, r.iconSet.datetime.arrowRight];
    return r.lang.rtl === true ? I.reverse() : I;
  }), E = v(() => e.firstDayOfWeek !== void 0 ? Number(e.firstDayOfWeek) : w.value.firstDayOfWeek), X = v(() => {
    const I = w.value.daysShort, Z = E.value;
    return Z > 0 ? I.slice(Z, 7).concat(I.slice(0, Z)) : I;
  }), O = v(() => {
    const I = b.value;
    return e.calendar !== "persian" ? new Date(I.year, I.month, 0).getDate() : fo(I.year, I.month);
  }), le = v(() => typeof e.eventColor == "function" ? e.eventColor : () => e.eventColor), be = v(() => {
    if (e.navigationMinYearMonth === void 0) return null;
    const I = e.navigationMinYearMonth.split("/");
    return { year: parseInt(I[0], 10), month: parseInt(I[1], 10) };
  }), x = v(() => {
    if (e.navigationMaxYearMonth === void 0) return null;
    const I = e.navigationMaxYearMonth.split("/");
    return { year: parseInt(I[0], 10), month: parseInt(I[1], 10) };
  }), q = v(() => {
    const I = { month: { prev: true, next: true }, year: { prev: true, next: true } };
    return be.value !== null && be.value.year >= b.value.year && (I.year.prev = false, be.value.year === b.value.year && be.value.month >= b.value.month && (I.month.prev = false)), x.value !== null && x.value.year <= b.value.year && (I.year.next = false, x.value.year === b.value.year && x.value.month <= b.value.month && (I.month.next = false)), I;
  }), V = v(() => {
    const I = {};
    return K.value.forEach((Z) => {
      const me = rl(Z);
      I[me] === void 0 && (I[me] = []), I[me].push(Z.day);
    }), I;
  }), te = v(() => {
    const I = {};
    return W.value.forEach((Z) => {
      const me = rl(Z.from), qe = rl(Z.to);
      if (I[me] === void 0 && (I[me] = []), I[me].push({ from: Z.from.day, to: me === qe ? Z.to.day : void 0, range: Z }), me < qe) {
        let Ee;
        const { year: Ge, month: Le } = Z.from, ze = Le < 12 ? { year: Ge, month: Le + 1 } : { year: Ge + 1, month: 1 };
        for (; (Ee = rl(ze)) <= qe; ) I[Ee] === void 0 && (I[Ee] = []), I[Ee].push({ from: void 0, to: Ee === qe ? Z.to.day : void 0, range: Z }), ze.month++, ze.month > 12 && (ze.year++, ze.month = 1);
      }
    }), I;
  }), ae = v(() => {
    if (D.value === null) return;
    const { init: I, initHash: Z, final: me, finalHash: qe } = D.value, [Ee, Ge] = Z <= qe ? [I, me] : [me, I], Le = rl(Ee), ze = rl(Ge);
    if (Le !== Y.value && ze !== Y.value) return;
    const rt = {};
    return Le === Y.value ? (rt.from = Ee.day, rt.includeFrom = true) : rt.from = 1, ze === Y.value ? (rt.to = Ge.day, rt.includeTo = true) : rt.to = O.value, rt;
  }), Y = v(() => rl(b.value)), fe = v(() => {
    const I = {};
    if (e.options === void 0) {
      for (let me = 1; me <= O.value; me++) I[me] = true;
      return I;
    }
    const Z = typeof e.options == "function" ? e.options : (me) => e.options.includes(me);
    for (let me = 1; me <= O.value; me++) {
      const qe = Y.value + "/" + at(me);
      I[me] = Z(qe);
    }
    return I;
  }), N = v(() => {
    const I = {};
    if (e.events === void 0) for (let Z = 1; Z <= O.value; Z++) I[Z] = false;
    else {
      const Z = typeof e.events == "function" ? e.events : (me) => e.events.includes(me);
      for (let me = 1; me <= O.value; me++) {
        const qe = Y.value + "/" + at(me);
        I[me] = Z(qe) === true && le.value(qe);
      }
    }
    return I;
  }), ne = v(() => {
    let I, Z;
    const { year: me, month: qe } = b.value;
    if (e.calendar !== "persian") I = new Date(me, qe - 1, 1), Z = new Date(me, qe - 1, 0).getDate();
    else {
      const Ee = bd(me, qe, 1);
      I = new Date(Ee.gy, Ee.gm - 1, Ee.gd);
      let Ge = qe - 1, Le = me;
      Ge === 0 && (Ge = 12, Le--), Z = fo(Le, Ge);
    }
    return { days: I.getDay() - E.value - 1, endDay: Z };
  }), de = v(() => {
    const I = [], { days: Z, endDay: me } = ne.value, qe = Z < 0 ? Z + 7 : Z;
    if (qe < 6) for (let Le = me - qe; Le <= me; Le++) I.push({ i: Le, fill: true });
    const Ee = I.length;
    for (let Le = 1; Le <= O.value; Le++) {
      const ze = { i: Le, event: N.value[Le], classes: [] };
      fe.value[Le] === true && (ze.in = true, ze.flat = true), I.push(ze);
    }
    if (V.value[Y.value] !== void 0 && V.value[Y.value].forEach((Le) => {
      const ze = Ee + Le - 1;
      Object.assign(I[ze], { selected: true, unelevated: true, flat: false, color: A.value, textColor: C.value });
    }), te.value[Y.value] !== void 0 && te.value[Y.value].forEach((Le) => {
      if (Le.from !== void 0) {
        const ze = Ee + Le.from - 1, rt = Ee + (Le.to || O.value) - 1;
        for (let dn = ze; dn <= rt; dn++) Object.assign(I[dn], { range: Le.range, unelevated: true, color: A.value, textColor: C.value });
        Object.assign(I[ze], { rangeFrom: true, flat: false }), Le.to !== void 0 && Object.assign(I[rt], { rangeTo: true, flat: false });
      } else if (Le.to !== void 0) {
        const ze = Ee + Le.to - 1;
        for (let rt = Ee; rt <= ze; rt++) Object.assign(I[rt], { range: Le.range, unelevated: true, color: A.value, textColor: C.value });
        Object.assign(I[ze], { flat: false, rangeTo: true });
      } else {
        const ze = Ee + O.value - 1;
        for (let rt = Ee; rt <= ze; rt++) Object.assign(I[rt], { range: Le.range, unelevated: true, color: A.value, textColor: C.value });
      }
    }), ae.value !== void 0) {
      const Le = Ee + ae.value.from - 1, ze = Ee + ae.value.to - 1;
      for (let rt = Le; rt <= ze; rt++) I[rt].color = A.value, I[rt].editRange = true;
      ae.value.includeFrom === true && (I[Le].editRangeFrom = true), ae.value.includeTo === true && (I[ze].editRangeTo = true);
    }
    b.value.year === p.value.year && b.value.month === p.value.month && (I[Ee + p.value.day - 1].today = true);
    const Ge = I.length % 7;
    if (Ge > 0) {
      const Le = 7 - Ge;
      for (let ze = 1; ze <= Le; ze++) I.push({ i: ze, fill: true });
    }
    return I.forEach((Le) => {
      let ze = "q-date__calendar-item ";
      Le.fill === true ? ze += "q-date__calendar-item--fill" : (ze += `q-date__calendar-item--${Le.in === true ? "in" : "out"}`, Le.range !== void 0 && (ze += ` q-date__range${Le.rangeTo === true ? "-to" : Le.rangeFrom === true ? "-from" : ""}`), Le.editRange === true && (ze += ` q-date__edit-range${Le.editRangeFrom === true ? "-from" : ""}${Le.editRangeTo === true ? "-to" : ""}`), (Le.range !== void 0 || Le.editRange === true) && (ze += ` text-${Le.color}`)), Le.classes = ze;
    }), I;
  }), oe = v(() => e.disable === true ? { "aria-disabled": "true" } : {});
  ge(() => e.modelValue, (I) => {
    if (f === JSON.stringify(I)) f = 0;
    else {
      const Z = ce(_.value, w.value);
      it(Z.year, Z.month, Z);
    }
  }), ge(S, () => {
    g.value !== null && l.$el.contains(document.activeElement) === true && g.value.focus();
  }), ge(() => b.value.year + "|" + b.value.month, () => {
    n("navigation", { year: b.value.year, month: b.value.month });
  }), ge(k, (I) => {
    Se(I, w.value, "mask"), _.value = I;
  }), ge(y, (I) => {
    Se(_.value, I, "locale"), w.value = I;
  });
  function j(I) {
    f = JSON.stringify(I);
  }
  function se() {
    const { year: I, month: Z, day: me } = p.value, qe = { ...b.value, year: I, month: Z, day: me }, Ee = V.value[rl(qe)];
    (Ee === void 0 || Ee.includes(qe.day) === false) && In(qe), Te(qe.year, qe.month);
  }
  function we(I) {
    _d(I) === true && (S.value = I);
  }
  function ke(I, Z) {
    ["month", "year"].includes(I) && (I === "month" ? ue : _e2)(Z === true ? -1 : 1);
  }
  function Te(I, Z) {
    S.value = "Calendar", it(I, Z);
  }
  function Me(I, Z) {
    if (e.range === false || !I) {
      D.value = null;
      return;
    }
    const me = Object.assign({ ...b.value }, I), qe = Z !== void 0 ? Object.assign({ ...b.value }, Z) : me;
    D.value = { init: me, initHash: Un(me), final: qe, finalHash: Un(qe) }, Te(me.year, me.month);
  }
  function He() {
    return e.calendar === "persian" ? "YYYY/MM/DD" : e.mask;
  }
  function Ve(I, Z, me) {
    return Yr(I, Z, me, e.calendar, { hour: 0, minute: 0, second: 0, millisecond: 0 });
  }
  function ce(I, Z) {
    const me = Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue ? [e.modelValue] : [];
    if (me.length === 0) return pe();
    const qe = me[me.length - 1], Ee = Ve(qe.from !== void 0 ? qe.from : qe, I, Z);
    return Ee.dateHash === null ? pe() : Ee;
  }
  function pe() {
    let I, Z;
    if (e.defaultYearMonth !== void 0) {
      const me = e.defaultYearMonth.split("/");
      I = parseInt(me[0], 10), Z = parseInt(me[1], 10);
    } else {
      const me = p.value !== void 0 ? p.value : s();
      I = me.year, Z = me.month;
    }
    return { year: I, month: Z, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0, dateHash: I + "/" + at(Z) + "/01" };
  }
  function ue(I) {
    let Z = b.value.year, me = Number(b.value.month) + I;
    me === 13 ? (me = 1, Z++) : me === 0 && (me = 12, Z--), it(Z, me), H.value === true && Ut("month");
  }
  function _e2(I) {
    const Z = Number(b.value.year) + I;
    it(Z, b.value.month), H.value === true && Ut("year");
  }
  function Ce(I) {
    it(I, b.value.month), S.value = e.defaultView === "Years" ? "Months" : "Calendar", H.value === true && Ut("year");
  }
  function Oe(I) {
    it(b.value.year, I), S.value = "Calendar", H.value === true && Ut("month");
  }
  function Re(I, Z) {
    var _a3;
    (((_a3 = V.value[Z]) == null ? void 0 : _a3.includes(I.day)) === true ? ve : In)(I);
  }
  function Ye(I) {
    return { year: I.year, month: I.month, day: I.day };
  }
  function it(I, Z, me) {
    if (be.value !== null && I <= be.value.year && ((Z < be.value.month || I < be.value.year) && (Z = be.value.month), I = be.value.year), x.value !== null && I >= x.value.year && ((Z > x.value.month || I > x.value.year) && (Z = x.value.month), I = x.value.year), me !== void 0) {
      const { hour: Ee, minute: Ge, second: Le, millisecond: ze, timezoneOffset: rt, timeHash: dn } = me;
      Object.assign(b.value, { hour: Ee, minute: Ge, second: Le, millisecond: ze, timezoneOffset: rt, timeHash: dn });
    }
    const qe = I + "/" + at(Z) + "/01";
    qe !== b.value.dateHash && (F.value = b.value.dateHash < qe == (r.lang.rtl !== true) ? "left" : "right", I !== b.value.year && (z.value = F.value), We(() => {
      L.value = I - I % Nn - (I < 0 ? Nn : 0), Object.assign(b.value, { year: I, month: Z, day: 1, dateHash: qe });
    }));
  }
  function Ct(I, Z, me) {
    const qe = I !== null && I.length === 1 && e.multiple === false ? I[0] : I, { reason: Ee, details: Ge } = nl(Z, me);
    j(qe), n("update:modelValue", qe, Ee, Ge);
  }
  function Ut(I) {
    const Z = K.value[0] !== void 0 && K.value[0].dateHash !== null ? { ...K.value[0] } : { ...b.value };
    We(() => {
      Z.year = b.value.year, Z.month = b.value.month;
      const me = e.calendar !== "persian" ? new Date(Z.year, Z.month, 0).getDate() : fo(Z.year, Z.month);
      Z.day = Math.min(Math.max(1, Z.day), me);
      const qe = rn(Z), { details: Ee } = nl("", Z);
      j(qe), n("update:modelValue", qe, I, Ee);
    });
  }
  function nl(I, Z) {
    return Z.from !== void 0 ? { reason: `${I}-range`, details: { ...Ye(Z.target), from: Ye(Z.from), to: Ye(Z.to) } } : { reason: `${I}-day`, details: Ye(Z) };
  }
  function rn(I, Z, me) {
    return I.from !== void 0 ? { from: ye.value(I.from, Z, me), to: ye.value(I.to, Z, me) } : ye.value(I, Z, me);
  }
  function In(I) {
    let Z;
    if (e.multiple === true) if (I.from !== void 0) {
      const me = Un(I.from), qe = Un(I.to), Ee = K.value.filter((Le) => Le.dateHash < me || Le.dateHash > qe), Ge = W.value.filter(({ from: Le, to: ze }) => ze.dateHash < me || Le.dateHash > qe);
      Z = Ee.concat(Ge).concat(I).map((Le) => rn(Le));
    } else {
      const me = Q.value.slice();
      me.push(rn(I)), Z = me;
    }
    else Z = rn(I);
    Ct(Z, "add", I);
  }
  function ve(I) {
    if (e.noUnset === true) return;
    let Z = null;
    if (e.multiple === true && Array.isArray(e.modelValue) === true) {
      const me = rn(I);
      I.from !== void 0 ? Z = e.modelValue.filter((qe) => qe.from !== void 0 ? qe.from !== me.from && qe.to !== me.to : true) : Z = e.modelValue.filter((qe) => qe !== me), Z.length === 0 && (Z = null);
    }
    Ct(Z, "remove", I);
  }
  function Se(I, Z, me) {
    const qe = K.value.concat(W.value).map((Ge) => rn(Ge, I, Z)).filter((Ge) => Ge.from !== void 0 ? Ge.from.dateHash !== null && Ge.to.dateHash !== null : Ge.dateHash !== null), Ee = (e.multiple === true ? qe : qe[0]) || null;
    j(Ee), n("update:modelValue", Ee, me);
  }
  function Fe() {
    if (e.minimal !== true) return d("div", { class: "q-date__header " + u.value }, [d("div", { class: "relative-position" }, [d(Ot, { name: "q-transition--fade" }, () => d("div", { key: "h-yr-" + J.value, class: "q-date__header-subtitle q-date__header-link " + (S.value === "Years" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: i.value, ...o("vY", { onClick() {
      S.value = "Years";
    }, onKeyup(I) {
      I.keyCode === 13 && (S.value = "Years");
    } }) }, [J.value]))]), d("div", { class: "q-date__header-title relative-position flex no-wrap" }, [d("div", { class: "relative-position col" }, [d(Ot, { name: "q-transition--fade" }, () => d("div", { key: "h-sub" + R.value, class: "q-date__header-title-label q-date__header-link " + (S.value === "Calendar" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: i.value, ...o("vC", { onClick() {
      S.value = "Calendar";
    }, onKeyup(I) {
      I.keyCode === 13 && (S.value = "Calendar");
    } }) }, [R.value]))]), e.todayBtn === true ? d(Ze, { class: "q-date__header-today self-start", icon: r.iconSet.datetime.today, ariaLabel: r.lang.date.today, flat: true, size: "sm", round: true, tabindex: i.value, onClick: se }) : null])]);
  }
  function Be({ label: I, type: Z, key: me, dir: qe, goTo: Ee, boundaries: Ge, cls: Le }) {
    return [d("div", { class: "row items-center q-date__arrow" }, [d(Ze, { round: true, dense: true, size: "sm", flat: true, icon: T.value[0], ariaLabel: Z === "Years" ? r.lang.date.prevYear : r.lang.date.prevMonth, tabindex: i.value, disable: Ge.prev === false, ...o("go-#" + Z, { onClick() {
      Ee(-1);
    } }) })]), d("div", { class: "relative-position overflow-hidden flex flex-center" + Le }, [d(Ot, { name: "q-transition--jump-" + qe }, () => d("div", { key: me }, [d(Ze, { flat: true, dense: true, noCaps: true, label: I, tabindex: i.value, ...o("view#" + Z, { onClick: () => {
      S.value = Z;
    } }) })]))]), d("div", { class: "row items-center q-date__arrow" }, [d(Ze, { round: true, dense: true, size: "sm", flat: true, icon: T.value[1], ariaLabel: Z === "Years" ? r.lang.date.nextYear : r.lang.date.nextMonth, tabindex: i.value, disable: Ge.next === false, ...o("go+#" + Z, { onClick() {
      Ee(1);
    } }) })])];
  }
  const Ue = { Calendar: () => [d("div", { key: "calendar-view", class: "q-date__view q-date__calendar" }, [d("div", { class: "q-date__navigation row items-center no-wrap" }, Be({ label: w.value.months[b.value.month - 1], type: "Months", key: b.value.month, dir: F.value, goTo: ue, boundaries: q.value.month, cls: " col" }).concat(Be({ label: b.value.year, type: "Years", key: b.value.year, dir: z.value, goTo: _e2, boundaries: q.value.year, cls: "" }))), d("div", { class: "q-date__calendar-weekdays row items-center no-wrap" }, X.value.map((I) => d("div", { class: "q-date__calendar-item" }, [d("div", I)]))), d("div", { class: "q-date__calendar-days-container relative-position overflow-hidden" }, [d(Ot, { name: "q-transition--slide-" + F.value }, () => d("div", { key: Y.value, class: "q-date__calendar-days fit" }, de.value.map((I) => d("div", { class: I.classes }, [I.in === true ? d(Ze, { class: I.today === true ? "q-date__today" : "", dense: true, flat: I.flat, unelevated: I.unelevated, color: I.color, textColor: I.textColor, label: I.i, tabindex: i.value, ...o("day#" + I.i, { onClick: () => {
    pt(I.i);
  }, onMouseover: () => {
    ht(I.i);
  } }) }, I.event !== false ? () => d("div", { class: "q-date__event bg-" + I.event }) : null) : d("div", "" + I.i)]))))])])], Months() {
    const I = b.value.year === p.value.year, Z = (qe) => be.value !== null && b.value.year === be.value.year && be.value.month > qe || x.value !== null && b.value.year === x.value.year && x.value.month < qe, me = w.value.monthsShort.map((qe, Ee) => {
      const Ge = b.value.month === Ee + 1;
      return d("div", { class: "q-date__months-item flex flex-center" }, [d(Ze, { class: I === true && p.value.month === Ee + 1 ? "q-date__today" : null, flat: Ge !== true, label: qe, unelevated: Ge, color: Ge === true ? A.value : null, textColor: Ge === true ? C.value : null, tabindex: i.value, disable: Z(Ee + 1), ...o("month#" + Ee, { onClick: () => {
        Oe(Ee + 1);
      } }) })]);
    });
    return e.yearsInMonthView === true && me.unshift(d("div", { class: "row no-wrap full-width" }, [Be({ label: b.value.year, type: "Years", key: b.value.year, dir: z.value, goTo: _e2, boundaries: q.value.year, cls: " col" })])), d("div", { key: "months-view", class: "q-date__view q-date__months flex flex-center" }, me);
  }, Years() {
    const I = L.value, Z = I + Nn, me = [], qe = (Ee) => be.value !== null && be.value.year > Ee || x.value !== null && x.value.year < Ee;
    for (let Ee = I; Ee <= Z; Ee++) {
      const Ge = b.value.year === Ee;
      me.push(d("div", { class: "q-date__years-item flex flex-center" }, [d(Ze, { key: "yr" + Ee, class: p.value.year === Ee ? "q-date__today" : null, flat: !Ge, label: Ee, dense: true, unelevated: Ge, color: Ge === true ? A.value : null, textColor: Ge === true ? C.value : null, tabindex: i.value, disable: qe(Ee), ...o("yr#" + Ee, { onClick: () => {
        Ce(Ee);
      } }) })]));
    }
    return d("div", { class: "q-date__view q-date__years flex flex-center" }, [d("div", { class: "col-auto" }, [d(Ze, { round: true, dense: true, flat: true, icon: T.value[0], ariaLabel: r.lang.date.prevRangeYears(Nn), tabindex: i.value, disable: qe(I), ...o("y-", { onClick: () => {
      L.value -= Nn;
    } }) })]), d("div", { class: "q-date__years-content col self-stretch row items-center" }, me), d("div", { class: "col-auto" }, [d(Ze, { round: true, dense: true, flat: true, icon: T.value[1], ariaLabel: r.lang.date.nextRangeYears(Nn), tabindex: i.value, disable: qe(Z), ...o("y+", { onClick: () => {
      L.value += Nn;
    } }) })])]);
  } };
  function pt(I) {
    const Z = { ...b.value, day: I };
    if (e.range === false) {
      Re(Z, Y.value);
      return;
    }
    if (D.value === null) {
      const me = de.value.find((Ee) => Ee.fill !== true && Ee.i === I);
      if (e.noUnset !== true && me.range !== void 0) {
        ve({ target: Z, from: me.range.from, to: me.range.to });
        return;
      }
      if (me.selected === true) {
        ve(Z);
        return;
      }
      const qe = Un(Z);
      D.value = { init: Z, initHash: qe, final: Z, finalHash: qe }, n("rangeStart", Ye(Z));
    } else {
      const me = D.value.initHash, qe = Un(Z), Ee = me <= qe ? { from: D.value.init, to: Z } : { from: Z, to: D.value.init };
      D.value = null, In(me === qe ? Z : { target: Z, ...Ee }), n("rangeEnd", { from: Ye(Ee.from), to: Ye(Ee.to) });
    }
  }
  function ht(I) {
    if (D.value !== null) {
      const Z = { ...b.value, day: I };
      Object.assign(D.value, { final: Z, finalHash: Un(Z) });
    }
  }
  return Object.assign(l, { setToday: se, setView: we, offsetCalendar: ke, setCalendarTo: Te, setEditingRange: Me }), () => {
    const I = [d("div", { class: "q-date__content col relative-position" }, [d(Ot, { name: "q-transition--fade" }, Ue[S.value])])], Z = $e(t.default);
    return Z !== void 0 && I.push(d("div", { class: "q-date__actions" }, Z)), e.name !== void 0 && e.disable !== true && h(I, "push"), d("div", { class: M.value, ...oe.value }, [Fe(), d("div", { ref: g, class: "q-date__main col column", tabindex: -1 }, I)]);
  };
} });
function ph(e, t, n) {
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
function Jy(e) {
  e1(e) && je(e);
}
function e1(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop")) return true;
  const t = fp(e), n = e.shiftKey && !e.deltaX, l = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY), r = n || l ? e.deltaY : e.deltaX;
  for (let a = 0; a < t.length; a++) {
    const o = t[a];
    if (uy(o, l)) return l ? r < 0 && o.scrollTop === 0 ? true : r > 0 && o.scrollTop + o.clientHeight === o.scrollHeight : r < 0 && o.scrollLeft === 0 ? true : r > 0 && o.scrollLeft + o.clientWidth === o.scrollWidth;
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
    Xi = fi(window), Gi = pl(window), wd = t.style.left, xd = t.style.top, Sd = window.location.href, t.style.left = `-${Xi}px`, t.style.top = `-${Gi}px`, r !== "hidden" && (r === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), l !== "hidden" && (l === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = true, De.is.ios === true && (n === true ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", Ya, dt.passiveCapture), window.visualViewport.addEventListener("scroll", Ya, dt.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", Cd, dt.passiveCapture));
  }
  De.is.desktop === true && De.is.mac === true && window[`${e}EventListener`]("wheel", Jy, dt.notPassive), e === "remove" && (De.is.ios === true && (n === true ? (window.visualViewport.removeEventListener("resize", Ya, dt.passiveCapture), window.visualViewport.removeEventListener("scroll", Ya, dt.passiveCapture)) : window.removeEventListener("scroll", Cd, dt.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = false, t.style.left = wd, t.style.top = xd, window.location.href === Sd && window.scrollTo(Xi, Gi), Xr = void 0);
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
function yh() {
  let e;
  return { preventBodyScroll(t) {
    t !== e && (e !== void 0 || t === true) && (e = t, Uu(t));
  } };
}
var Xa = 0, t1 = { standard: "fixed-full flex-center", top: "fixed-top justify-center", bottom: "fixed-bottom justify-center", right: "fixed-right items-center", left: "fixed-left items-center" }, Td = { standard: ["scale", "scale"], top: ["slide-down", "slide-up"], bottom: ["slide-up", "slide-down"], right: ["slide-left", "slide-right"], left: ["slide-right", "slide-left"] }, hi = he({ name: "QDialog", inheritAttrs: false, props: { ...Pr, ...zl, transitionShow: String, transitionHide: String, persistent: Boolean, autoClose: Boolean, allowFocusOutside: Boolean, noEscDismiss: Boolean, noBackdropDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, noShake: Boolean, seamless: Boolean, maximized: Boolean, fullWidth: Boolean, fullHeight: Boolean, square: Boolean, backdropFilter: String, position: { type: String, default: "standard", validator: (e) => ["standard", "top", "bottom", "left", "right"].includes(e) } }, emits: [...$r, "shake", "click", "escapeKey"], setup(e, { slots: t, emit: n, attrs: l }) {
  const r = xe(), a = U(null), o = U(false), i = U(false);
  let u = null, c = null, s, f;
  const m = v(() => e.persistent !== true && e.noRouteDismiss !== true && e.seamless !== true), { preventBodyScroll: h } = yh(), { registerTimeout: g } = Zn(), { registerTick: _, removeTick: w } = _r(), { transitionProps: k, transitionStyle: y } = di(e, () => Td[e.position][0], () => Td[e.position][1]), p = v(() => y.value + (e.backdropFilter !== void 0 ? `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}` : "")), { showPortal: b, hidePortal: S, portalIsAccessible: $, renderPortal: F } = As(r, a, J, "dialog"), { hide: z } = Lr({ showing: o, hideOnRouteChange: m, handleShow: H, handleHide: Q, processOnMount: true }), { addToHistory: B, removeFromHistory: L } = ph(o, z, m), D = v(() => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === true ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${t1[e.position]}` + (i.value === true ? " q-dialog__inner--animating" : "") + (e.fullWidth === true ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === true ? " q-dialog__inner--fullheight" : "") + (e.square === true ? " q-dialog__inner--square" : "")), M = v(() => o.value === true && e.seamless !== true), A = v(() => e.autoClose === true ? { onClick: R } : {}), C = v(() => [`q-dialog fullscreen no-pointer-events q-dialog--${M.value === true ? "modal" : "seamless"}`, l.class]);
  ge(() => e.maximized, (T) => {
    o.value === true && G(T);
  }), ge(M, (T) => {
    h(T), T === true ? (Im(P), Vm(ie)) : (zu(P), $o(ie));
  });
  function H(T) {
    var _a3;
    B(), c = e.noRefocus === false && document.activeElement !== null ? document.activeElement : null, G(e.maximized), b(), i.value = true, e.noFocus !== true ? ((_a3 = document.activeElement) == null ? void 0 : _a3.blur(), _(K)) : w(), g(() => {
      if (r.proxy.$q.platform.is.ios === true) {
        if (e.seamless !== true && document.activeElement) {
          const { top: E, bottom: X } = document.activeElement.getBoundingClientRect(), { innerHeight: O } = window, le = window.visualViewport !== void 0 ? window.visualViewport.height : O;
          E > 0 && X > le / 2 && (document.scrollingElement.scrollTop = Math.min(document.scrollingElement.scrollHeight - le, X >= O ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + X - le / 2))), document.activeElement.scrollIntoView();
        }
        f = true, a.value.click(), f = false;
      }
      b(true), i.value = false, n("show", T);
    }, e.transitionDuration);
  }
  function Q(T) {
    w(), L(), ye(true), i.value = true, S(), c !== null && ((((T == null ? void 0 : T.type.indexOf("key")) === 0 ? c.closest('[tabindex]:not([tabindex^="-"])') : void 0) || c).focus(), c = null), g(() => {
      S(true), i.value = false, n("hide", T);
    }, e.transitionDuration);
  }
  function K(T) {
    Br(() => {
      let E = a.value;
      if (E !== null) {
        if (T !== void 0) {
          const X = E.querySelector(T);
          if (X !== null) {
            X.focus({ preventScroll: true });
            return;
          }
        }
        E.contains(document.activeElement) !== true && (E = E.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || E.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || E.querySelector("[autofocus], [data-autofocus]") || E, E.focus({ preventScroll: true }));
      }
    });
  }
  function W(T) {
    T && typeof T.focus == "function" ? T.focus({ preventScroll: true }) : K(), n("shake");
    const E = a.value;
    E !== null && (E.classList.remove("q-animate--scale"), E.classList.add("q-animate--scale"), u !== null && clearTimeout(u), u = setTimeout(() => {
      u = null, a.value !== null && (E.classList.remove("q-animate--scale"), K());
    }, 170));
  }
  function ie() {
    e.seamless !== true && (e.persistent === true || e.noEscDismiss === true ? e.maximized !== true && e.noShake !== true && W() : (n("escapeKey"), z()));
  }
  function ye(T) {
    u !== null && (clearTimeout(u), u = null), (T === true || o.value === true) && (G(false), e.seamless !== true && (h(false), zu(P), $o(ie))), T !== true && (c = null);
  }
  function G(T) {
    T === true ? s !== true && (Xa < 1 && document.body.classList.add("q-body--dialog"), Xa++, s = true) : s === true && (Xa < 2 && document.body.classList.remove("q-body--dialog"), Xa--, s = false);
  }
  function R(T) {
    f !== true && (z(T), n("click", T));
  }
  function re(T) {
    e.persistent !== true && e.noBackdropDismiss !== true ? z(T) : e.noShake !== true && W();
  }
  function P(T) {
    e.allowFocusOutside !== true && $.value === true && km(a.value, T.target) !== true && K('[tabindex]:not([tabindex="-1"])');
  }
  Object.assign(r.proxy, { focus: K, shake: W, __updateRefocusTarget(T) {
    c = T || null;
  } }), Ke(ye);
  function J() {
    return d("div", { role: "dialog", "aria-modal": M.value === true ? "true" : "false", ...l, class: C.value }, [d(Ot, { name: "q-transition--fade", appear: true }, () => M.value === true ? d("div", { class: "q-dialog__backdrop fixed-full", style: p.value, "aria-hidden": "true", tabindex: -1, onClick: re }) : null), d(Ot, k.value, () => o.value === true ? d("div", { ref: a, class: D.value, style: y.value, tabindex: -1, ...A.value }, $e(t.default)) : null)]);
  }
  return F;
} }), qd = 150, Md = he({ name: "QDrawer", inheritAttrs: false, props: { ...Pr, ...nt, side: { type: String, default: "left", validator: (e) => ["left", "right"].includes(e) }, width: { type: Number, default: 300 }, mini: Boolean, miniToOverlay: Boolean, miniWidth: { type: Number, default: 57 }, noMiniAnimation: Boolean, breakpoint: { type: Number, default: 1023 }, showIfAbove: Boolean, behavior: { type: String, validator: (e) => ["default", "desktop", "mobile"].includes(e), default: "default" }, bordered: Boolean, elevated: Boolean, overlay: Boolean, persistent: Boolean, noSwipeOpen: Boolean, noSwipeClose: Boolean, noSwipeBackdrop: Boolean }, emits: [...$r, "onLayout", "miniState"], setup(e, { slots: t, emit: n, attrs: l }) {
  const r = xe(), { proxy: { $q: a } } = r, o = lt(e, a), { preventBodyScroll: i } = yh(), { registerTimeout: u, removeTimeout: c } = Zn(), s = qt(Gl, ot);
  if (s === ot) return console.error("QDrawer needs to be child of QLayout"), ot;
  let f, m = null, h;
  const g = U(e.behavior === "mobile" || e.behavior !== "desktop" && s.totalWidth.value <= e.breakpoint), _ = v(() => e.mini === true && g.value !== true), w = v(() => _.value === true ? e.miniWidth : e.width), k = U(e.showIfAbove === true && g.value === false ? true : e.modelValue === true), y = v(() => e.persistent !== true && (g.value === true || ye.value === true));
  function p(j, se) {
    if (F(), j !== false && s.animate(), q(0), g.value === true) {
      const we = s.instances[Q.value];
      (we == null ? void 0 : we.belowBreakpoint) === true && we.hide(false), V(1), s.isContainer.value !== true && i(true);
    } else V(0), j !== false && te(false);
    u(() => {
      j !== false && te(true), se !== true && n("show", j);
    }, qd);
  }
  function b(j, se) {
    z(), j !== false && s.animate(), V(0), q(D.value * w.value), N(), se !== true ? u(() => {
      n("hide", j);
    }, qd) : c();
  }
  const { show: S, hide: $ } = Lr({ showing: k, hideOnRouteChange: y, handleShow: p, handleHide: b }), { addToHistory: F, removeFromHistory: z } = ph(k, $, y), B = { belowBreakpoint: g, hide: $ }, L = v(() => e.side === "right"), D = v(() => (a.lang.rtl === true ? -1 : 1) * (L.value === true ? 1 : -1)), M = U(0), A = U(false), C = U(false), H = U(w.value * D.value), Q = v(() => L.value === true ? "left" : "right"), K = v(() => k.value === true && g.value === false && e.overlay === false ? e.miniToOverlay === true ? e.miniWidth : w.value : 0), W = v(() => e.overlay === true || e.miniToOverlay === true || s.view.value.indexOf(L.value ? "R" : "L") !== -1 || a.platform.is.ios === true && s.isContainer.value === true), ie = v(() => e.overlay === false && k.value === true && g.value === false), ye = v(() => e.overlay === true && k.value === true && g.value === false), G = v(() => "fullscreen q-drawer__backdrop" + (k.value === false && A.value === false ? " hidden" : "")), R = v(() => ({ backgroundColor: `rgba(0,0,0,${M.value * 0.4})` })), re = v(() => L.value === true ? s.rows.value.top[2] === "r" : s.rows.value.top[0] === "l"), P = v(() => L.value === true ? s.rows.value.bottom[2] === "r" : s.rows.value.bottom[0] === "l"), J = v(() => {
    const j = {};
    return s.header.space === true && re.value === false && (W.value === true ? j.top = `${s.header.offset}px` : s.header.space === true && (j.top = `${s.header.size}px`)), s.footer.space === true && P.value === false && (W.value === true ? j.bottom = `${s.footer.offset}px` : s.footer.space === true && (j.bottom = `${s.footer.size}px`)), j;
  }), T = v(() => {
    const j = { width: `${w.value}px`, transform: `translateX(${H.value}px)` };
    return g.value === true ? j : Object.assign(j, J.value);
  }), E = v(() => "q-drawer__content fit " + (s.isContainer.value !== true ? "scroll" : "overflow-auto")), X = v(() => `q-drawer q-drawer--${e.side}` + (C.value === true ? " q-drawer--mini-animate" : "") + (e.bordered === true ? " q-drawer--bordered" : "") + (o.value === true ? " q-drawer--dark q-dark" : "") + (A.value === true ? " no-transition" : k.value === true ? "" : " q-layout--prevent-focus") + (g.value === true ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${_.value === true ? "mini" : "standard"}` + (W.value === true || ie.value !== true ? " fixed" : "") + (e.overlay === true || e.miniToOverlay === true ? " q-drawer--on-top" : "") + (re.value === true ? " q-drawer--top-padding" : ""))), O = v(() => {
    const j = a.lang.rtl === true ? e.side : Q.value;
    return [[bn, Y, void 0, { [j]: true, mouse: true }]];
  }), le = v(() => {
    const j = a.lang.rtl === true ? Q.value : e.side;
    return [[bn, fe, void 0, { [j]: true, mouse: true }]];
  }), be = v(() => {
    const j = a.lang.rtl === true ? Q.value : e.side;
    return [[bn, fe, void 0, { [j]: true, mouse: true, mouseAllDir: true }]];
  });
  function x() {
    de(g, e.behavior === "mobile" || e.behavior !== "desktop" && s.totalWidth.value <= e.breakpoint);
  }
  ge(g, (j) => {
    j === true ? (f = k.value, k.value === true && $(false)) : e.overlay === false && e.behavior !== "mobile" && f !== false && (k.value === true ? (q(0), V(0), N()) : S(false));
  }), ge(() => e.side, (j, se) => {
    s.instances[se] === B && (s.instances[se] = void 0, s[se].space = false, s[se].offset = 0), s.instances[j] = B, s[j].size = w.value, s[j].space = ie.value, s[j].offset = K.value;
  }), ge(s.totalWidth, () => {
    (s.isContainer.value === true || document.qScrollPrevented !== true) && x();
  }), ge(() => e.behavior + e.breakpoint, x), ge(s.isContainer, (j) => {
    k.value === true && i(j !== true), j === true && x();
  }), ge(s.scrollbarWidth, () => {
    q(k.value === true ? 0 : void 0);
  }), ge(K, (j) => {
    ne("offset", j);
  }), ge(ie, (j) => {
    n("onLayout", j), ne("space", j);
  }), ge(L, () => {
    q();
  }), ge(w, (j) => {
    q(), oe(e.miniToOverlay, j);
  }), ge(() => e.miniToOverlay, (j) => {
    oe(j, w.value);
  }), ge(() => a.lang.rtl, () => {
    q();
  }), ge(() => e.mini, () => {
    e.noMiniAnimation || e.modelValue === true && (ae(), s.animate());
  }), ge(_, (j) => {
    n("miniState", j);
  });
  function q(j) {
    j === void 0 ? We(() => {
      j = k.value === true ? 0 : w.value, q(D.value * j);
    }) : (s.isContainer.value === true && L.value === true && (g.value === true || Math.abs(j) === w.value) && (j += D.value * s.scrollbarWidth.value), H.value = j);
  }
  function V(j) {
    M.value = j;
  }
  function te(j) {
    const se = j === true ? "remove" : s.isContainer.value !== true ? "add" : "";
    se !== "" && document.body.classList[se]("q-body--drawer-toggle");
  }
  function ae() {
    m !== null && clearTimeout(m), r.proxy && r.proxy.$el && r.proxy.$el.classList.add("q-drawer--mini-animate"), C.value = true, m = setTimeout(() => {
      var _a3, _b2;
      m = null, C.value = false, (_b2 = (_a3 = r == null ? void 0 : r.proxy) == null ? void 0 : _a3.$el) == null ? void 0 : _b2.classList.remove("q-drawer--mini-animate");
    }, 150);
  }
  function Y(j) {
    if (k.value !== false) return;
    const se = w.value, we = ct(j.distance.x, 0, se);
    if (j.isFinal === true) {
      we >= Math.min(75, se) === true ? S() : (s.animate(), V(0), q(D.value * se)), A.value = false;
      return;
    }
    q((a.lang.rtl === true ? L.value !== true : L.value) ? Math.max(se - we, 0) : Math.min(0, we - se)), V(ct(we / se, 0, 1)), j.isFirst === true && (A.value = true);
  }
  function fe(j) {
    if (k.value !== true) return;
    const se = w.value, we = j.direction === e.side, ke = (a.lang.rtl === true ? we !== true : we) ? ct(j.distance.x, 0, se) : 0;
    if (j.isFinal === true) {
      Math.abs(ke) < Math.min(75, se) === true ? (s.animate(), V(1), q(0)) : $(), A.value = false;
      return;
    }
    q(D.value * ke), V(ct(1 - ke / se, 0, 1)), j.isFirst === true && (A.value = true);
  }
  function N() {
    i(false), te(true);
  }
  function ne(j, se) {
    s.update(e.side, j, se);
  }
  function de(j, se) {
    j.value !== se && (j.value = se);
  }
  function oe(j, se) {
    ne("size", j === true ? e.miniWidth : se);
  }
  return s.instances[e.side] = B, oe(e.miniToOverlay, w.value), ne("space", ie.value), ne("offset", K.value), e.showIfAbove === true && e.modelValue !== true && k.value === true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", true), ft(() => {
    n("onLayout", ie.value), n("miniState", _.value), f = e.showIfAbove === true;
    const j = () => {
      (k.value === true ? p : b)(false, true);
    };
    if (s.totalWidth.value !== 0) {
      We(j);
      return;
    }
    h = ge(s.totalWidth, () => {
      h(), h = void 0, k.value === false && e.showIfAbove === true && g.value === false ? S(false) : j();
    });
  }), Ke(() => {
    h == null ? void 0 : h(), m !== null && (clearTimeout(m), m = null), k.value === true && N(), s.instances[e.side] === B && (s.instances[e.side] = void 0, ne("size", 0), ne("offset", 0), ne("space", false));
  }), () => {
    const j = [];
    g.value === true && (e.noSwipeOpen === false && j.push(cn(d("div", { key: "open", class: `q-drawer__opener fixed-${e.side}`, "aria-hidden": "true" }), O.value)), j.push(_n("div", { ref: "backdrop", class: G.value, style: R.value, "aria-hidden": "true", onClick: $ }, void 0, "backdrop", e.noSwipeBackdrop !== true && k.value === true, () => be.value)));
    const se = _.value === true && t.mini !== void 0, we = [d("div", { ...l, key: "" + se, class: [E.value, l.class] }, se === true ? t.mini() : $e(t.default))];
    return e.elevated === true && k.value === true && we.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), j.push(_n("aside", { ref: "content", class: X.value, style: T.value }, we, "contentclose", e.noSwipeClose !== true && g.value === true, () => le.value)), d("div", { class: "q-drawer-container" }, j);
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
  const o = xe(), { proxy: { $q: i } } = o, u = U(null), c = U(false), s = v(() => Vo(e.anchor, i.lang.rtl)), f = v(() => Vo(e.self, i.lang.rtl)), m = v(() => e.persistent !== true), { registerTick: h, removeTick: g } = _r(), { registerTimeout: _ } = Zn(), { transitionProps: w, transitionStyle: k } = di(e), { localScrollTarget: y, changeScrollEvent: p, unconfigureScrollTarget: b } = Pm(e, ye), { anchorEl: S, canShow: $, anchorEvents: F } = Es({ showing: c, configureAnchorEl: ie }), { show: z, hide: B } = Lr({ showing: c, canShow: $, handleShow: A, handleHide: C, hideOnRouteChange: m, processOnMount: true });
  Object.assign(F, { delayShow: K, delayHide: W });
  const { showPortal: L, hidePortal: D, renderPortal: M } = As(o, u, R, "tooltip");
  if (i.platform.is.mobile === true) {
    const re = { anchorEl: S, innerRef: u, onClickOutside(J) {
      return B(J), J.target.classList.contains("q-dialog__backdrop") && je(J), true;
    } }, P = v(() => e.modelValue === null && e.persistent !== true && c.value === true);
    ge(P, (J) => {
      (J === true ? zm : Fo)(re);
    }), Ke(() => {
      Fo(re);
    });
  }
  function A(re) {
    L(), h(() => {
      a = new MutationObserver(() => Q()), a.observe(u.value, { attributes: false, childList: true, characterData: true, subtree: true }), Q(), ye();
    }), r === void 0 && (r = ge(() => i.screen.width + "|" + i.screen.height + "|" + e.self + "|" + e.anchor + "|" + i.lang.rtl, Q)), _(() => {
      L(true), n("show", re);
    }, e.transitionDuration);
  }
  function C(re) {
    g(), D(), H(), _(() => {
      D(true), n("hide", re);
    }, e.transitionDuration);
  }
  function H() {
    a !== void 0 && (a.disconnect(), a = void 0), r !== void 0 && (r(), r = void 0), b(), Yt(F, "tooltipTemp");
  }
  function Q() {
    Ps({ targetEl: u.value, offset: e.offset, anchorEl: S.value, anchorOrigin: s.value, selfOrigin: f.value, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function K(re) {
    if (i.platform.is.mobile === true) {
      En(), document.body.classList.add("non-selectable");
      const P = S.value, J = ["touchmove", "touchcancel", "touchend", "click"].map((T) => [P, T, "delayHide", "passiveCapture"]);
      kt(F, "tooltipTemp", J);
    }
    _(() => {
      z(re);
    }, e.delay);
  }
  function W(re) {
    i.platform.is.mobile === true && (Yt(F, "tooltipTemp"), En(), setTimeout(() => {
      document.body.classList.remove("non-selectable");
    }, 10)), _(() => {
      B(re);
    }, e.hideDelay);
  }
  function ie() {
    if (e.noParentEvent === true || S.value === null) return;
    const re = i.platform.is.mobile === true ? [[S.value, "touchstart", "delayShow", "passive"]] : [[S.value, "mouseenter", "delayShow", "passive"], [S.value, "mouseleave", "delayHide", "passive"]];
    kt(F, "anchor", re);
  }
  function ye() {
    if (S.value !== null || e.scrollTarget !== void 0) {
      y.value = Dn(S.value, e.scrollTarget);
      const re = e.noParentEvent === true ? Q : B;
      p(y.value, re);
    }
  }
  function G() {
    return c.value === true ? d("div", { ...l, ref: u, class: ["q-tooltip q-tooltip--style q-position-engine no-pointer-events", l.class], style: [l.style, k.value], role: "tooltip" }, $e(t.default)) : null;
  }
  function R() {
    return d(Ot, w.value, G);
  }
  return Ke(H), Object.assign(o.proxy, { updatePosition: Q }), M;
} }), Tr = he({ name: "QItem", props: { ...nt, ...$a, tag: { type: String, default: "div" }, active: { type: Boolean, default: null }, clickable: Boolean, dense: Boolean, insetLevel: Number, tabindex: [String, Number], focused: Boolean, manualFocus: Boolean }, emits: ["click", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = xe(), r = lt(e, l), { hasLink: a, linkAttrs: o, linkClass: i, linkTag: u, navigateOnClick: c } = si(), s = U(null), f = U(null), m = v(() => e.clickable === true || a.value === true || e.tag === "label"), h = v(() => e.disable !== true && m.value === true), g = v(() => "q-item q-item-type row no-wrap" + (e.dense === true ? " q-item--dense" : "") + (r.value === true ? " q-item--dark" : "") + (a.value === true && e.active === null ? i.value : e.active === true ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === true ? " disabled" : "") + (h.value === true ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === true ? " q-manual-focusable--focused" : "") : "")), _ = v(() => e.insetLevel === void 0 ? null : { ["padding" + (l.lang.rtl === true ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px" });
  function w(p) {
    h.value === true && (f.value !== null && p.qAvoidFocus !== true && (p.qKeyEvent !== true && document.activeElement === s.value ? f.value.focus() : document.activeElement === f.value && s.value.focus()), c(p));
  }
  function k(p) {
    if (h.value === true && yn(p, [13, 32]) === true) {
      je(p), p.qKeyEvent = true;
      const b = new MouseEvent("click", p);
      b.qKeyEvent = true, s.value.dispatchEvent(b);
    }
    n("keyup", p);
  }
  function y() {
    const p = Pa(t.default, []);
    return h.value === true && p.unshift(d("div", { class: "q-focus-helper", tabindex: -1, ref: f })), p;
  }
  return () => {
    const p = { ref: s, class: g.value, style: _.value, role: "listitem", onClick: w, onKeyup: k };
    return h.value === true ? (p.tabindex = e.tabindex || "0", Object.assign(p, o.value)) : m.value === true && (p["aria-disabled"] = "true"), d(u.value, p, y());
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
    const s = e.props.toolbarToggleColor !== void 0 ? `text-${e.props.toolbarToggleColor}` : null, f = e.props.toolbarTextColor !== void 0 ? `text-${e.props.toolbarTextColor}` : null, m = t.list === "no-icons";
    o = t.options.map((h) => {
      const g = h.disable ? h.disable(e) : false, _ = h.type === void 0 ? e.caret.is(h.cmd, h.param) : false;
      _ && (l = h.tip, r = h.icon !== null ? h.icon : void 0);
      const w = h.htmlTip;
      return d(Tr, { active: _, activeClass: s, clickable: true, disable: g, dense: true, onClick(k) {
        var _a3;
        i(), (k == null ? void 0 : k.qAvoidFocus) !== true && ((_a3 = e.contentRef.value) == null ? void 0 : _a3.focus()), e.caret.restore(), xh(k, h, e);
      } }, () => [m === true ? null : d(hn, { class: _ ? s : f, side: true }, () => d(et, { name: h.icon !== null ? h.icon : void 0 })), d(hn, w ? () => d("div", { class: "text-no-wrap", innerHTML: h.htmlTip }) : h.tip ? () => d("div", { class: "text-no-wrap" }, h.tip) : void 0)]);
    }), a = [e.toolbarBackgroundClass.value, f];
  }
  const u = t.highlight && l !== t.label, c = d(yy, { ...e.buttonProps.value, noCaps: true, noWrap: true, color: u ? e.props.toolbarToggleColor : e.props.toolbarColor, textColor: u && !e.props.toolbarPush ? null : e.props.toolbarTextColor, label: t.fixedLabel ? t.label : l, icon: t.fixedIcon ? t.icon !== null ? t.icon : void 0 : r, contentClass: a, onShow: (s) => e.emit("dropdownShow", s), onHide: (s) => e.emit("dropdownHide", s), onBeforeShow: (s) => e.emit("dropdownBeforeShow", s), onBeforeHide: (s) => e.emit("dropdownBeforeHide", s) }, () => o);
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
  const { attrs: e, vnode: t } = xe(), n = { listeners: U({}), attributes: U({}) };
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
  const { proxy: l } = xe(), { $q: r } = l, a = lt(e, r), { inFullscreen: o, toggleFullscreen: i } = zs(), u = Ch(), c = U(null), s = U(null), f = U(null), m = U(false), h = v(() => !e.readonly && !e.disable);
  let g, _, w = e.modelValue;
  document.execCommand("defaultParagraphSeparator", false, e.paragraphTag), g = window.getComputedStyle(document.body).fontFamily;
  const k = v(() => e.toolbarBg ? ` bg-${e.toolbarBg}` : ""), y = v(() => ({ type: "a", flat: e.toolbarOutline !== true && e.toolbarPush !== true, noWrap: true, outline: e.toolbarOutline, push: e.toolbarPush, rounded: e.toolbarRounded, dense: true, color: e.toolbarColor, disable: !h.value, size: "sm" })), p = v(() => {
    const T = r.lang.editor, E = r.iconSet.editor;
    return { bold: { cmd: "bold", icon: E.bold, tip: T.bold, key: 66 }, italic: { cmd: "italic", icon: E.italic, tip: T.italic, key: 73 }, strike: { cmd: "strikeThrough", icon: E.strikethrough, tip: T.strikethrough, key: 83 }, underline: { cmd: "underline", icon: E.underline, tip: T.underline, key: 85 }, unordered: { cmd: "insertUnorderedList", icon: E.unorderedList, tip: T.unorderedList }, ordered: { cmd: "insertOrderedList", icon: E.orderedList, tip: T.orderedList }, subscript: { cmd: "subscript", icon: E.subscript, tip: T.subscript, htmlTip: "x<subscript>2</subscript>" }, superscript: { cmd: "superscript", icon: E.superscript, tip: T.superscript, htmlTip: "x<superscript>2</superscript>" }, link: { cmd: "link", disable: (X) => X.caret && !X.caret.can("link"), icon: E.hyperlink, tip: T.hyperlink, key: 76 }, fullscreen: { cmd: "fullscreen", icon: E.toggleFullscreen, tip: T.toggleFullscreen, key: 70 }, viewsource: { cmd: "viewsource", icon: E.viewSource, tip: T.viewSource }, quote: { cmd: "formatBlock", param: "BLOCKQUOTE", icon: E.quote, tip: T.quote, key: 81 }, left: { cmd: "justifyLeft", icon: E.left, tip: T.left }, center: { cmd: "justifyCenter", icon: E.center, tip: T.center }, right: { cmd: "justifyRight", icon: E.right, tip: T.right }, justify: { cmd: "justifyFull", icon: E.justify, tip: T.justify }, print: { type: "no-state", cmd: "print", icon: E.print, tip: T.print, key: 80 }, outdent: { type: "no-state", disable: (X) => X.caret && !X.caret.can("outdent"), cmd: "outdent", icon: E.outdent, tip: T.outdent }, indent: { type: "no-state", disable: (X) => X.caret && !X.caret.can("indent"), cmd: "indent", icon: E.indent, tip: T.indent }, removeFormat: { type: "no-state", cmd: "removeFormat", icon: E.removeFormat, tip: T.removeFormat }, hr: { type: "no-state", cmd: "insertHorizontalRule", icon: E.hr, tip: T.hr }, undo: { type: "no-state", cmd: "undo", icon: E.undo, tip: T.undo, key: 90 }, redo: { type: "no-state", cmd: "redo", icon: E.redo, tip: T.redo, key: 89 }, h1: { cmd: "formatBlock", param: "H1", icon: E.heading1 || E.heading, tip: T.heading1, htmlTip: `<h1 class="q-ma-none">${T.heading1}</h1>` }, h2: { cmd: "formatBlock", param: "H2", icon: E.heading2 || E.heading, tip: T.heading2, htmlTip: `<h2 class="q-ma-none">${T.heading2}</h2>` }, h3: { cmd: "formatBlock", param: "H3", icon: E.heading3 || E.heading, tip: T.heading3, htmlTip: `<h3 class="q-ma-none">${T.heading3}</h3>` }, h4: { cmd: "formatBlock", param: "H4", icon: E.heading4 || E.heading, tip: T.heading4, htmlTip: `<h4 class="q-ma-none">${T.heading4}</h4>` }, h5: { cmd: "formatBlock", param: "H5", icon: E.heading5 || E.heading, tip: T.heading5, htmlTip: `<h5 class="q-ma-none">${T.heading5}</h5>` }, h6: { cmd: "formatBlock", param: "H6", icon: E.heading6 || E.heading, tip: T.heading6, htmlTip: `<h6 class="q-ma-none">${T.heading6}</h6>` }, p: { cmd: "formatBlock", param: e.paragraphTag, icon: E.heading, tip: T.paragraph }, code: { cmd: "formatBlock", param: "PRE", icon: E.code, htmlTip: `<code>${T.code}</code>` }, "size-1": { cmd: "fontSize", param: "1", icon: E.size1 || E.size, tip: T.size1, htmlTip: `<font size="1">${T.size1}</font>` }, "size-2": { cmd: "fontSize", param: "2", icon: E.size2 || E.size, tip: T.size2, htmlTip: `<font size="2">${T.size2}</font>` }, "size-3": { cmd: "fontSize", param: "3", icon: E.size3 || E.size, tip: T.size3, htmlTip: `<font size="3">${T.size3}</font>` }, "size-4": { cmd: "fontSize", param: "4", icon: E.size4 || E.size, tip: T.size4, htmlTip: `<font size="4">${T.size4}</font>` }, "size-5": { cmd: "fontSize", param: "5", icon: E.size5 || E.size, tip: T.size5, htmlTip: `<font size="5">${T.size5}</font>` }, "size-6": { cmd: "fontSize", param: "6", icon: E.size6 || E.size, tip: T.size6, htmlTip: `<font size="6">${T.size6}</font>` }, "size-7": { cmd: "fontSize", param: "7", icon: E.size7 || E.size, tip: T.size7, htmlTip: `<font size="7">${T.size7}</font>` } };
  }), b = v(() => {
    const T = e.definitions || {}, E = e.definitions || e.fonts ? kh(true, {}, p.value, T, i1(g, r.lang.editor.defaultFont, r.iconSet.editor.font, e.fonts)) : p.value;
    return e.toolbar.map((X) => X.map((O) => {
      if (O.options) return { type: "dropdown", icon: O.icon, label: O.label, size: "sm", dense: true, fixedLabel: O.fixedLabel, fixedIcon: O.fixedIcon, highlight: O.highlight, list: O.list, options: O.options.map((be) => E[be]) };
      const le = E[O];
      return le ? le.type === "no-state" || T[O] && (le.cmd === void 0 || p.value[le.cmd] && p.value[le.cmd].type === "no-state") ? le : Object.assign({ type: "toggle" }, le) : { type: "slot", slot: O };
    }));
  }), S = { $q: r, props: e, slots: t, emit: n, inFullscreen: o, toggleFullscreen: i, runCmd: R, isViewingSource: m, editLinkUrl: f, toolbarBackgroundClass: k, buttonProps: y, contentRef: s, buttons: b, setContent: G };
  ge(() => e.modelValue, (T) => {
    w !== T && (w = T, G(T, true));
  }), ge(f, (T) => {
    n(`link${T ? "Show" : "Hide"}`);
  });
  const $ = v(() => e.toolbar && e.toolbar.length !== 0), F = v(() => {
    const T = {}, E = (X) => {
      X.key && (T[X.key] = { cmd: X.cmd, param: X.param });
    };
    return b.value.forEach((X) => {
      X.forEach((O) => {
        O.options ? O.options.forEach(E) : E(O);
      });
    }), T;
  }), z = v(() => o.value ? e.contentStyle : [{ minHeight: e.minHeight, height: e.height, maxHeight: e.maxHeight }, e.contentStyle]), B = v(() => `q-editor q-editor--${m.value === true ? "source" : "default"}` + (e.disable === true ? " disabled" : "") + (o.value === true ? " fullscreen column" : "") + (e.square === true ? " q-editor--square no-border-radius" : "") + (e.flat === true ? " q-editor--flat" : "") + (e.dense === true ? " q-editor--dense" : "") + (a.value === true ? " q-editor--dark q-dark" : "")), L = v(() => [e.contentClass, "q-editor__content", { col: o.value, "overflow-auto": o.value || e.maxHeight }]), D = v(() => e.disable === true ? { "aria-disabled": "true" } : {});
  function M() {
    if (s.value !== null) {
      const T = `inner${m.value === true ? "Text" : "HTML"}`, E = s.value[T];
      E !== e.modelValue && (w = E, n("update:modelValue", E));
    }
  }
  function A(T) {
    if (n("keydown", T), T.ctrlKey !== true || Xl(T) === true) {
      re();
      return;
    }
    const E = T.keyCode, X = F.value[E];
    if (X !== void 0) {
      const { cmd: O, param: le } = X;
      je(T), R(O, le, false);
    }
  }
  function C(T) {
    re(), n("click", T);
  }
  function H(T) {
    if (s.value !== null) {
      const { scrollTop: E, scrollHeight: X } = s.value;
      _ = X - E;
    }
    S.caret.save(), n("blur", T);
  }
  function Q(T) {
    We(() => {
      s.value !== null && _ !== void 0 && (s.value.scrollTop = s.value.scrollHeight - _);
    }), n("focus", T);
  }
  function K(T) {
    const E = c.value;
    if (E !== null && E.contains(T.target) === true && (T.relatedTarget === null || E.contains(T.relatedTarget) !== true)) {
      const X = `inner${m.value === true ? "Text" : "HTML"}`;
      S.caret.restorePosition(s.value[X].length), re();
    }
  }
  function W(T) {
    const E = c.value;
    E !== null && E.contains(T.target) === true && (T.relatedTarget === null || E.contains(T.relatedTarget) !== true) && (S.caret.savePosition(), re());
  }
  function ie() {
    _ = void 0;
  }
  function ye(T) {
    S.caret.save();
  }
  function G(T, E) {
    if (s.value !== null) {
      E === true && S.caret.savePosition();
      const X = `inner${m.value === true ? "Text" : "HTML"}`;
      s.value[X] = T, E === true && (S.caret.restorePosition(s.value[X].length), re());
    }
  }
  function R(T, E, X = true) {
    P(), S.caret.restore(), S.caret.apply(T, E, () => {
      P(), S.caret.save(), X && re();
    });
  }
  function re() {
    setTimeout(() => {
      f.value = null, l.$forceUpdate();
    }, 1);
  }
  function P() {
    Br(() => {
      var _a3;
      (_a3 = s.value) == null ? void 0 : _a3.focus({ preventScroll: true });
    });
  }
  function J() {
    return s.value;
  }
  return ft(() => {
    S.caret = l.caret = new l1(s.value, S), G(e.modelValue), re(), document.addEventListener("selectionchange", ye);
  }), Ke(() => {
    document.removeEventListener("selectionchange", ye);
  }), Object.assign(l, { runCmd: R, refreshToolbar: re, focus: P, getContentEl: J }), () => {
    let T;
    if ($.value) {
      const E = [d("div", { key: "qedt_top", class: "q-editor__toolbar row no-wrap scroll-x" + k.value }, o1(S))];
      f.value !== null && E.push(d("div", { key: "qedt_btm", class: "q-editor__toolbar row no-wrap items-center scroll-x" + k.value }, u1(S))), T = d("div", { key: "toolbar_ctainer", class: "q-editor__toolbars-container" }, E);
    }
    return d("div", { ref: c, class: B.value, style: { height: o.value === true ? "100%" : null }, ...D.value, onFocusin: K, onFocusout: W }, [T, d("div", { ref: s, style: z.value, class: L.value, contenteditable: h.value, placeholder: e.placeholder, ...u.listeners.value, onInput: M, onKeydown: A, onClick: C, onBlur: H, onFocus: Q, onMousedown: ie, onTouchstartPassive: ie })]);
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
  function f(_, w, k) {
    w !== void 0 && (_.style.height = `${w}px`), _.style.transition = `height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`, l = true, r = k;
  }
  function m(_, w) {
    _.style.overflowY = null, _.style.height = null, _.style.transition = null, s(), w !== c && n(w);
  }
  function h(_, w) {
    let k = 0;
    a = _, l === true ? (s(), k = _.offsetHeight === _.scrollHeight ? 0 : void 0) : (c = "hide", _.style.overflowY = "hidden"), f(_, k, w), o = setTimeout(() => {
      o = null, _.style.height = `${_.scrollHeight}px`, u = (y) => {
        i = null, (Object(y) !== y || y.target === _) && m(_, "show");
      }, _.addEventListener("transitionend", u), i = setTimeout(u, e.duration * 1.1);
    }, 100);
  }
  function g(_, w) {
    let k;
    a = _, l === true ? s() : (c = "show", _.style.overflowY = "hidden", k = _.scrollHeight), f(_, k, w), o = setTimeout(() => {
      o = null, _.style.height = 0, u = (y) => {
        i = null, (Object(y) !== y || y.target === _) && m(_, "hide");
      }, _.addEventListener("transitionend", u), i = setTimeout(u, e.duration * 1.1);
    }, 100);
  }
  return Ke(() => {
    l === true && s();
  }), () => d(Ot, { css: false, appear: e.appear, onEnter: h, onLeave: g }, t.default);
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
  const { proxy: { $q: l } } = xe(), r = lt(e, l), a = U(e.modelValue !== null ? e.modelValue : e.defaultOpened), o = U(null), i = mi(), { show: u, hide: c, toggle: s } = Lr({ showing: a });
  let f, m;
  const h = v(() => `q-expansion-item q-item-type q-expansion-item--${a.value === true ? "expanded" : "collapsed"} q-expansion-item--${e.popup === true ? "popup" : "standard"}`), g = v(() => e.contentInsetLevel === void 0 ? null : { ["padding" + (l.lang.rtl === true ? "Right" : "Left")]: e.contentInsetLevel * 56 + "px" }), _ = v(() => e.disable !== true && (e.href !== void 0 || e.to !== void 0 && e.to !== null && e.to !== "")), w = v(() => {
    const K = {};
    return f1.forEach((W) => {
      K[W] = e[W];
    }), K;
  }), k = v(() => _.value === true || e.expandIconToggle !== true), y = v(() => e.expandedIcon !== void 0 && a.value === true ? e.expandedIcon : e.expandIcon || l.iconSet.expansionItem[e.denseToggle === true ? "denseIcon" : "icon"]), p = v(() => e.disable !== true && (_.value === true || e.expandIconToggle === true)), b = v(() => ({ expanded: a.value === true, detailsId: i.value, toggle: s, show: u, hide: c })), S = v(() => {
    const K = e.toggleAriaLabel !== void 0 ? e.toggleAriaLabel : l.lang.label[a.value === true ? "collapse" : "expand"](e.label);
    return { role: "button", "aria-expanded": a.value === true ? "true" : "false", "aria-controls": i.value, "aria-label": K };
  });
  ge(() => e.group, (K) => {
    m == null ? void 0 : m(), K !== void 0 && D();
  });
  function $(K) {
    _.value !== true && s(K), n("click", K);
  }
  function F(K) {
    K.keyCode === 13 && z(K, true);
  }
  function z(K, W) {
    var _a3;
    W !== true && K.qAvoidFocus !== true && ((_a3 = o.value) == null ? void 0 : _a3.focus()), s(K), je(K);
  }
  function B() {
    n("afterShow");
  }
  function L() {
    n("afterHide");
  }
  function D() {
    f === void 0 && (f = Ca()), a.value === true && (Rl[e.group] = f);
    const K = ge(a, (ie) => {
      ie === true ? Rl[e.group] = f : Rl[e.group] === f && delete Rl[e.group];
    }), W = ge(() => Rl[e.group], (ie, ye) => {
      ye === f && ie !== void 0 && ie !== f && c();
    });
    m = () => {
      K(), W(), Rl[e.group] === f && delete Rl[e.group], m = void 0;
    };
  }
  function M() {
    const K = { class: [`q-focusable relative-position cursor-pointer${e.denseToggle === true && e.switchToggleSide === true ? " items-end" : ""}`, e.expandIconClass], side: e.switchToggleSide !== true, avatar: e.switchToggleSide }, W = [d(et, { class: "q-expansion-item__toggle-icon" + (e.expandedIcon === void 0 && a.value === true ? " q-expansion-item__toggle-icon--rotated" : ""), name: y.value })];
    return p.value === true && (Object.assign(K, { tabindex: 0, ...S.value, onClick: z, onKeyup: F }), W.unshift(d("div", { ref: o, class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded", tabindex: -1 }))), d(hn, K, () => W);
  }
  function A() {
    let K;
    return t.header !== void 0 ? K = [].concat(t.header(b.value)) : (K = [d(hn, () => [d(Qu, { lines: e.labelLines }, () => e.label || ""), e.caption ? d(Qu, { lines: e.captionLines, caption: true }, () => e.caption) : null])], e.icon && K[e.switchToggleSide === true ? "push" : "unshift"](d(hn, { side: e.switchToggleSide === true, avatar: e.switchToggleSide !== true }, () => d(et, { name: e.icon })))), e.disable !== true && e.hideExpandIcon !== true && K[e.switchToggleSide === true ? "unshift" : "push"](M()), K;
  }
  function C() {
    const K = { ref: "item", style: e.headerStyle, class: e.headerClass, dark: r.value, disable: e.disable, dense: e.dense, insetLevel: e.headerInsetLevel };
    return k.value === true && (K.clickable = true, K.onClick = $, Object.assign(K, _.value === true ? w.value : S.value)), d(Tr, K, A);
  }
  function H() {
    return cn(d("div", { key: "e-content", class: "q-expansion-item__content relative-position", style: g.value, id: i.value }, $e(t.default)), [[Gv, a.value]]);
  }
  function Q() {
    const K = [C(), d(Qs, { duration: e.duration, onShow: B, onHide: L }, H)];
    return e.expandSeparator === true && K.push(d(Kl, { class: "q-expansion-item__border q-expansion-item__border--top absolute-top", dark: r.value }), d(Kl, { class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom", dark: r.value })), K;
  }
  return e.group !== void 0 && D(), Ke(() => {
    m == null ? void 0 : m();
  }), () => d("div", { class: h.value }, [d("div", { class: "q-expansion-item__container relative-position" }, Q())]);
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
  const n = U(null), l = U(e.modelValue === true), r = mi(), { proxy: { $q: a } } = xe(), { formClass: o, labelProps: i } = Th(e, l), u = v(() => e.persistent !== true), { hide: c, toggle: s } = Lr({ showing: l, hideOnRouteChange: u }), f = v(() => ({ opened: l.value })), m = v(() => `q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${o.value}` + (l.value === true ? " q-fab--opened" : " q-fab--closed")), h = v(() => `q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${l.value === true ? "opened" : "closed"}`), g = v(() => {
    const y = { id: r.value, role: "menu" };
    return l.value !== true && (y["aria-hidden"] = "true"), y;
  }), _ = v(() => `q-fab__icon-holder  q-fab__icon-holder--${l.value === true ? "opened" : "closed"}`);
  function w(y, p) {
    const b = t[y], S = `q-fab__${y} absolute-full`;
    return b === void 0 ? d(et, { class: S, name: e[p] || a.iconSet.fab[p] }) : d("div", { class: S }, b(f.value));
  }
  function k() {
    const y = [];
    return e.hideIcon !== true && y.push(d("div", { class: _.value }, [w("icon", "icon"), w("active-icon", "activeIcon")])), (e.label !== "" || t.label !== void 0) && y[i.value.action](d("div", i.value.data, t.label !== void 0 ? t.label(f.value) : [e.label])), Tt(t.tooltip, y);
  }
  return gn(vm, { showing: l, onChildClick(y) {
    var _a3;
    c(y), (y == null ? void 0 : y.qAvoidFocus) !== true && ((_a3 = n.value) == null ? void 0 : _a3.$el.focus());
  } }), () => d("div", { class: m.value }, [d(Ze, { ref: n, class: o.value, ...e, noWrap: true, stack: e.stacked, align: void 0, icon: void 0, label: void 0, noCaps: true, fab: true, "aria-expanded": l.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": r.value, onClick: s }, k), d("div", { class: h.value, ...g.value }, $e(t.default))]);
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
var p1 = [true, false, "ondemand"], y1 = { modelValue: {}, error: { type: Boolean, default: null }, errorMessage: String, noErrorIcon: Boolean, rules: Array, reactiveRules: Boolean, lazyRules: { type: [Boolean, String], default: false, validator: (e) => p1.includes(e) } };
function _1(e, t) {
  const { props: n, proxy: l } = xe(), r = U(false), a = U(null), o = U(false);
  b1({ validate: _, resetValidation: g });
  let i = 0, u;
  const c = v(() => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0), s = v(() => n.disable !== true && c.value === true && t.value === false), f = v(() => n.error === true || r.value === true), m = v(() => typeof n.errorMessage == "string" && n.errorMessage.length !== 0 ? n.errorMessage : a.value);
  ge(() => n.modelValue, () => {
    o.value = true, s.value === true && n.lazyRules === false && w();
  });
  function h() {
    n.lazyRules !== "ondemand" && s.value === true && o.value === true && w();
  }
  ge(() => n.reactiveRules, (k) => {
    k === true ? u === void 0 && (u = ge(() => n.rules, h, { immediate: true, deep: true })) : u !== void 0 && (u(), u = void 0);
  }, { immediate: true }), ge(() => n.lazyRules, h), ge(e, (k) => {
    k === true ? o.value = true : s.value === true && n.lazyRules !== "ondemand" && w();
  });
  function g() {
    i++, t.value = false, o.value = false, r.value = false, a.value = null, w.cancel();
  }
  function _(k = n.modelValue) {
    if (n.disable === true || c.value === false) return true;
    const y = ++i, p = t.value !== true ? () => {
      o.value = true;
    } : () => {
    }, b = ($, F) => {
      $ === true && p(), r.value = $, a.value = F || null, t.value = false;
    }, S = [];
    for (let $ = 0; $ < n.rules.length; $++) {
      const F = n.rules[$];
      let z;
      if (typeof F == "function" ? z = F(k, co) : typeof F == "string" && co[F] !== void 0 && (z = co[F](k)), z === false || typeof z == "string") return b(true, z), false;
      z !== true && z !== void 0 && S.push(z);
    }
    return S.length === 0 ? (b(false), true) : (t.value = true, Promise.all(S).then(($) => {
      if ($ === void 0 || Array.isArray($) === false || $.length === 0) return y === i && b(false), true;
      const F = $.find((z) => z === false || typeof z == "string");
      return y === i && b(F !== void 0, F), F === void 0;
    }, ($) => (y === i && (console.error($), b(true)), false)));
  }
  const w = Ar(_, 0);
  return Ke(() => {
    u == null ? void 0 : u(), w.cancel();
  }), Object.assign(l, { resetValidation: g, validate: _ }), Vt(l, "hasError", () => f.value), { isDirtyModel: o, hasRules: c, hasError: f, errorMessage: m, validate: _, resetValidation: g };
}
function Wl(e) {
  return e != null && ("" + e).length !== 0;
}
var Mh = { ...nt, ...y1, label: String, stackLabel: Boolean, hint: String, hideHint: Boolean, prefix: String, suffix: String, labelColor: String, color: String, bgColor: String, filled: Boolean, outlined: Boolean, borderless: Boolean, standout: [Boolean, String], square: Boolean, loading: Boolean, labelSlot: Boolean, bottomSlots: Boolean, hideBottomSpace: Boolean, rounded: Boolean, dense: Boolean, itemAligned: Boolean, counter: Boolean, clearable: Boolean, clearIcon: String, disable: Boolean, readonly: Boolean, autofocus: Boolean, for: String }, gi = { ...Mh, maxlength: [Number, String] }, bi = ["update:modelValue", "clear", "focus", "blur"];
function pi({ requiredForAttr: e = true, tagProp: t, changeEvent: n = false } = {}) {
  const { props: l, proxy: r } = xe(), a = lt(l, r.$q), o = mi({ required: e, getValue: () => l.for });
  return { requiredForAttr: e, changeEvent: n, tag: t === true ? v(() => l.tag) : { value: "label" }, isDark: a, editable: v(() => l.disable !== true && l.readonly !== true), innerLoading: U(false), focused: U(false), hasPopupOpen: false, splitAttrs: Ch(), targetUid: o, rootRef: U(null), targetRef: U(null), controlRef: U(null) };
}
function yi(e) {
  const { props: t, emit: n, slots: l, attrs: r, proxy: a } = xe(), { $q: o } = a;
  let i = null;
  e.hasValue === void 0 && (e.hasValue = v(() => Wl(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (W) => {
    n("update:modelValue", W);
  }), e.controlEvents === void 0 && (e.controlEvents = { onFocusin: B, onFocusout: L }), Object.assign(e, { clearValue: D, onControlFocusin: B, onControlFocusout: L, focus: F }), e.computedCounter === void 0 && (e.computedCounter = v(() => {
    if (t.counter !== false) {
      const W = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === true ? t.modelValue.length : 0, ie = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
      return W + (ie !== void 0 ? " / " + ie : "");
    }
  }));
  const { isDirtyModel: u, hasRules: c, hasError: s, errorMessage: f, resetValidation: m } = _1(e.focused, e.innerLoading), h = e.floatingLabel !== void 0 ? v(() => t.stackLabel === true || e.focused.value === true || e.floatingLabel.value === true) : v(() => t.stackLabel === true || e.focused.value === true || e.hasValue.value === true), g = v(() => t.bottomSlots === true || t.hint !== void 0 || c.value === true || t.counter === true || t.error !== null), _ = v(() => t.filled === true ? "filled" : t.outlined === true ? "outlined" : t.borderless === true ? "borderless" : t.standout ? "standout" : "standard"), w = v(() => `q-field row no-wrap items-start q-field--${_.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === true ? " q-field--rounded" : "") + (t.square === true ? " q-field--square" : "") + (h.value === true ? " q-field--float" : "") + (y.value === true ? " q-field--labeled" : "") + (t.dense === true ? " q-field--dense" : "") + (t.itemAligned === true ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === true ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === true ? " q-field--focused" : "") + (s.value === true ? " q-field--error" : "") + (s.value === true || e.focused.value === true ? " q-field--highlighted" : "") + (t.hideBottomSpace !== true && g.value === true ? " q-field--with-bottom" : "") + (t.disable === true ? " q-field--disabled" : t.readonly === true ? " q-field--readonly" : "")), k = v(() => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (s.value === true ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === true ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")), y = v(() => t.labelSlot === true || t.label !== void 0), p = v(() => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && s.value !== true ? ` text-${t.labelColor}` : "")), b = v(() => ({ id: e.targetUid.value, editable: e.editable.value, focused: e.focused.value, floatingLabel: h.value, modelValue: t.modelValue, emitValue: e.emitValue })), S = v(() => {
    const W = {};
    return e.targetUid.value && (W.for = e.targetUid.value), t.disable === true && (W["aria-disabled"] = "true"), W;
  });
  function $() {
    var _a3;
    const W = document.activeElement;
    let ie = (_a3 = e.targetRef) == null ? void 0 : _a3.value;
    ie && (W === null || W.id !== e.targetUid.value) && (ie.hasAttribute("tabindex") === true || (ie = ie.querySelector("[tabindex]")), ie !== W && (ie == null ? void 0 : ie.focus({ preventScroll: true })));
  }
  function F() {
    Br($);
  }
  function z() {
    ey($);
    const W = document.activeElement;
    W !== null && e.rootRef.value.contains(W) && W.blur();
  }
  function B(W) {
    i !== null && (clearTimeout(i), i = null), e.editable.value === true && e.focused.value === false && (e.focused.value = true, n("focus", W));
  }
  function L(W, ie) {
    i !== null && clearTimeout(i), i = setTimeout(() => {
      i = null, !(document.hasFocus() === true && (e.hasPopupOpen === true || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement) !== false)) && (e.focused.value === true && (e.focused.value = false, n("blur", W)), ie == null ? void 0 : ie());
    });
  }
  function D(W) {
    var _a3;
    je(W), o.platform.is.mobile !== true ? (((_a3 = e.targetRef) == null ? void 0 : _a3.value) || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === true && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), n("update:modelValue", null), e.changeEvent === true && n("change", null), n("clear", t.modelValue), We(() => {
      const ie = u.value;
      m(), u.value = ie;
    });
  }
  function M(W) {
    [13, 32].includes(W.keyCode) && D(W);
  }
  function A() {
    const W = [];
    return l.prepend !== void 0 && W.push(d("div", { class: "q-field__prepend q-field__marginal row no-wrap items-center", key: "prepend", onClick: Dt }, l.prepend())), W.push(d("div", { class: "q-field__control-container col relative-position row no-wrap q-anchor--skip" }, C())), s.value === true && t.noErrorIcon === false && W.push(Q("error", [d(et, { name: o.iconSet.field.error, color: "negative" })])), t.loading === true || e.innerLoading.value === true ? W.push(Q("inner-loading-append", l.loading !== void 0 ? l.loading() : [d(wn, { color: t.color })])) : t.clearable === true && e.hasValue.value === true && e.editable.value === true && W.push(Q("inner-clearable-append", [d(et, { class: "q-field__focusable-action", name: t.clearIcon || o.iconSet.field.clear, tabindex: 0, role: "button", "aria-hidden": "false", "aria-label": o.lang.label.clear, onKeyup: M, onClick: D })])), l.append !== void 0 && W.push(d("div", { class: "q-field__append q-field__marginal row no-wrap items-center", key: "append", onClick: Dt }, l.append())), e.getInnerAppend !== void 0 && W.push(Q("inner-append", e.getInnerAppend())), e.getControlChild !== void 0 && W.push(e.getControlChild()), W;
  }
  function C() {
    const W = [];
    return t.prefix !== void 0 && t.prefix !== null && W.push(d("div", { class: "q-field__prefix no-pointer-events row items-center" }, t.prefix)), e.getShadowControl !== void 0 && e.hasShadow.value === true && W.push(e.getShadowControl()), e.getControl !== void 0 ? W.push(e.getControl()) : l.rawControl !== void 0 ? W.push(l.rawControl()) : l.control !== void 0 && W.push(d("div", { ref: e.targetRef, class: "q-field__native row", tabindex: -1, ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0 }, l.control(b.value))), y.value === true && W.push(d("div", { class: p.value }, $e(l.label, t.label))), t.suffix !== void 0 && t.suffix !== null && W.push(d("div", { class: "q-field__suffix no-pointer-events row items-center" }, t.suffix)), W.concat($e(l.default));
  }
  function H() {
    let W, ie;
    s.value === true ? f.value !== null ? (W = [d("div", { role: "alert" }, f.value)], ie = `q--slot-error-${f.value}`) : (W = $e(l.error), ie = "q--slot-error") : (t.hideHint !== true || e.focused.value === true) && (t.hint !== void 0 ? (W = [d("div", t.hint)], ie = `q--slot-hint-${t.hint}`) : (W = $e(l.hint), ie = "q--slot-hint"));
    const ye = t.counter === true || l.counter !== void 0;
    if (t.hideBottomSpace === true && ye === false && W === void 0) return;
    const G = d("div", { key: ie, class: "q-field__messages col" }, W);
    return d("div", { class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== true ? "animated" : "stale"), onClick: Dt }, [t.hideBottomSpace === true ? G : d(Ot, { name: "q-transition--field-message" }, () => G), ye === true ? d("div", { class: "q-field__counter" }, l.counter !== void 0 ? l.counter() : e.computedCounter.value) : null]);
  }
  function Q(W, ie) {
    return ie === null ? null : d("div", { key: W, class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip" }, ie);
  }
  let K = false;
  return Vn(() => {
    K = true;
  }), Sl(() => {
    K === true && t.autofocus === true && a.focus();
  }), t.autofocus === true && ft(() => {
    a.focus();
  }), Ke(() => {
    i !== null && clearTimeout(i);
  }), Object.assign(a, { focus: F, blur: z }), function() {
    const ie = e.getControl === void 0 && l.control === void 0 ? { ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0, ...S.value } : S.value;
    return d(e.tag.value, { ref: e.rootRef, class: [w.value, r.class], style: r.style, ...ie }, [l.before !== void 0 ? d("div", { class: "q-field__before q-field__marginal row no-wrap items-center", onClick: Dt }, l.before()) : null, d("div", { class: "q-field__inner relative-position col self-stretch" }, [d("div", { ref: e.controlRef, class: k.value, tabindex: -1, ...e.controlEvents }, A()), g.value === true ? H() : null]), l.after !== void 0 ? d("div", { class: "q-field__after q-field__marginal row no-wrap items-center", onClick: Dt }, l.after()) : null]);
  };
}
var w1 = he({ name: "QField", inheritAttrs: false, props: { ...gi, tag: { type: String, default: "label" } }, emits: bi, setup() {
  return yi(pi({ tagProp: true }));
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
  const { props: r, emit: a, proxy: o } = xe(), i = U(null), u = v(() => r.accept !== void 0 ? r.accept.split(",").map((y) => (y = y.trim(), y === "*" ? "*/" : (y.endsWith("/*") && (y = y.slice(0, y.length - 1)), y.toUpperCase()))) : null), c = v(() => parseInt(r.maxFiles, 10)), s = v(() => parseInt(r.maxTotalSize, 10));
  function f(y) {
    var _a3;
    if (e.value) if (y !== Object(y) && (y = { target: null }), ((_a3 = y.target) == null ? void 0 : _a3.matches('input[type="file"]')) === true) y.clientX === 0 && y.clientY === 0 && wt(y);
    else {
      const p = n();
      p !== y.target && (p == null ? void 0 : p.click(y));
    }
  }
  function m(y) {
    e.value && y && l(null, y);
  }
  function h(y, p, b, S) {
    let $ = Array.from(p || y.target.files);
    const F = [], z = () => {
      F.length !== 0 && a("rejected", F);
    };
    if (r.accept !== void 0 && u.value.indexOf("*/") === -1 && ($ = or($, F, "accept", (B) => u.value.some((L) => B.type.toUpperCase().startsWith(L) || B.name.toUpperCase().endsWith(L))), $.length === 0)) return z();
    if (r.maxFileSize !== void 0) {
      const B = parseInt(r.maxFileSize, 10);
      if ($ = or($, F, "max-file-size", (L) => L.size <= B), $.length === 0) return z();
    }
    if (r.multiple !== true && $.length !== 0 && ($ = [$[0]]), $.forEach((B) => {
      B.__key = B.webkitRelativePath + B.lastModified + B.name + B.size;
    }), S === true) {
      const B = b.map((L) => L.__key);
      $ = or($, F, "duplicate", (L) => B.includes(L.__key) === false);
    }
    if ($.length === 0) return z();
    if (r.maxTotalSize !== void 0) {
      let B = S === true ? b.reduce((L, D) => L + D.size, 0) : 0;
      if ($ = or($, F, "max-total-size", (L) => (B += L.size, B <= s.value)), $.length === 0) return z();
    }
    if (typeof r.filter == "function") {
      const B = r.filter($);
      $ = or($, F, "filter", (L) => B.includes(L));
    }
    if (r.maxFiles !== void 0) {
      let B = S === true ? b.length : 0;
      if ($ = or($, F, "max-files", () => (B++, B <= c.value)), $.length === 0) return z();
    }
    if (z(), $.length !== 0) return $;
  }
  function g(y) {
    Ga(y), t.value !== true && (t.value = true);
  }
  function _(y) {
    je(y), (y.relatedTarget !== null || De.is.safari !== true ? y.relatedTarget !== i.value : document.elementsFromPoint(y.clientX, y.clientY).includes(i.value) === false) === true && (t.value = false);
  }
  function w(y) {
    Ga(y);
    const p = y.dataTransfer.files;
    p.length !== 0 && l(null, p), t.value = false;
  }
  function k(y) {
    if (t.value === true) return d("div", { ref: i, class: `q-${y}__dnd absolute-full`, onDragenter: Ga, onDragover: Ga, onDragleave: _, onDrop: w });
  }
  return Object.assign(o, { pickFiles: f, addFiles: m }), { pickFiles: f, addFiles: m, onDragover: g, onDragleave: _, processFiles: h, getDndNode: k, maxFilesNumber: c, maxTotalSizeNumber: s };
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
  const { proxy: r } = xe(), a = pi(), o = U(null), i = U(false), u = $s(e), { pickFiles: c, onDragover: s, onDragleave: f, processFiles: m, getDndNode: h } = Ah({ editable: a.editable, dnd: i, getFileInput: M, addFilesToQueue: A }), g = Ph(e), _ = v(() => Object(e.modelValue) === e.modelValue ? "length" in e.modelValue ? Array.from(e.modelValue) : [e.modelValue] : []), w = v(() => Wl(_.value)), k = v(() => _.value.map((K) => K.name).join(", ")), y = v(() => Bu(_.value.reduce((K, W) => K + W.size, 0))), p = v(() => ({ totalSize: y.value, filesNumber: _.value.length, maxFiles: e.maxFiles })), b = v(() => ({ tabindex: -1, type: "file", title: "", accept: e.accept, capture: e.capture, name: u.value, ...l, id: a.targetUid.value, disabled: a.editable.value !== true })), S = v(() => "q-file q-field--auto-height" + (i.value === true ? " q-file--dnd" : "")), $ = v(() => e.multiple === true && e.append === true);
  function F(K) {
    const W = _.value.slice();
    W.splice(K, 1), B(W);
  }
  function z(K) {
    const W = _.value.indexOf(K);
    W !== -1 && F(W);
  }
  function B(K) {
    n("update:modelValue", e.multiple === true ? K : K[0]);
  }
  function L(K) {
    K.keyCode === 13 && Dt(K);
  }
  function D(K) {
    (K.keyCode === 13 || K.keyCode === 32) && c(K);
  }
  function M() {
    return o.value;
  }
  function A(K, W) {
    const ie = m(K, W, _.value, $.value), ye = M();
    ye != null && (ye.value = ""), ie !== void 0 && ((e.multiple === true ? e.modelValue && ie.every((G) => _.value.includes(G)) : e.modelValue === ie[0]) || B($.value === true ? _.value.concat(ie) : ie));
  }
  function C() {
    return [d("input", { class: [e.inputClass, "q-file__filler"], style: e.inputStyle })];
  }
  function H() {
    if (t.file !== void 0) return _.value.length === 0 ? C() : _.value.map((W, ie) => t.file({ index: ie, file: W, ref: this }));
    if (t.selected !== void 0) return _.value.length === 0 ? C() : t.selected({ files: _.value, ref: this });
    if (e.useChips === true) return _.value.length === 0 ? C() : _.value.map((W, ie) => d(Ym, { key: "file-" + ie, removable: a.editable.value, dense: true, textColor: e.color, tabindex: e.tabindex, onRemove: () => {
      F(ie);
    } }, () => d("span", { class: "ellipsis", textContent: W.name })));
    const K = e.displayValue !== void 0 ? e.displayValue : k.value;
    return K.length !== 0 ? [d("div", { class: e.inputClass, style: e.inputStyle, textContent: K })] : C();
  }
  function Q() {
    const K = { ref: o, ...b.value, ...g.value, class: "q-field__input fit absolute-full cursor-pointer", onChange: A };
    return e.multiple === true && (K.multiple = true), d("input", K);
  }
  return Object.assign(a, { fieldClass: S, emitValue: B, hasValue: w, inputRef: o, innerValue: _, floatingLabel: v(() => w.value === true || Wl(e.displayValue)), computedCounter: v(() => {
    if (e.counterLabel !== void 0) return e.counterLabel(p.value);
    const K = e.maxFiles;
    return `${_.value.length}${K !== void 0 ? " / " + K : ""} (${y.value})`;
  }), getControlChild: () => h("file"), getControl: () => {
    const K = { ref: a.targetRef, class: "q-field__native row items-center cursor-pointer", tabindex: e.tabindex };
    return a.editable.value === true && Object.assign(K, { onDragover: s, onDragleave: f, onKeydown: L, onKeyup: D }), d("div", K, [Q()].concat(H()));
  } }), Object.assign(r, { removeAtIndex: F, removeFile: z, getNativeElement: () => o.value }), Vt(r, "nativeEl", () => o.value), yi(a);
} });
var x1 = he({ name: "QFooter", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = xe(), r = qt(Gl, ot);
  if (r === ot) return console.error("QFooter needs to be child of QLayout"), ot;
  const a = U(parseInt(e.heightHint, 10)), o = U(true), i = U(ln.value === true || r.isContainer.value === true ? 0 : window.innerHeight), u = v(() => e.reveal === true || r.view.value.indexOf("F") !== -1 || l.platform.is.ios && r.isContainer.value === true), c = v(() => r.isContainer.value === true ? r.containerHeight.value : i.value), s = v(() => {
    if (e.modelValue !== true) return 0;
    if (u.value === true) return o.value === true ? a.value : 0;
    const S = r.scroll.value.position + c.value + a.value - r.height.value;
    return S > 0 ? S : 0;
  }), f = v(() => e.modelValue !== true || u.value === true && o.value !== true), m = v(() => e.modelValue === true && f.value === true && e.reveal === true), h = v(() => "q-footer q-layout__section--marginal " + (u.value === true ? "fixed" : "absolute") + "-bottom" + (e.bordered === true ? " q-footer--bordered" : "") + (f.value === true ? " q-footer--hidden" : "") + (e.modelValue !== true ? " q-layout--prevent-focus" + (u.value !== true ? " hidden" : "") : "")), g = v(() => {
    const S = r.rows.value.bottom, $ = {};
    return S[0] === "l" && r.left.space === true && ($[l.lang.rtl === true ? "right" : "left"] = `${r.left.size}px`), S[2] === "r" && r.right.space === true && ($[l.lang.rtl === true ? "left" : "right"] = `${r.right.size}px`), $;
  });
  function _(S, $) {
    r.update("footer", S, $);
  }
  function w(S, $) {
    S.value !== $ && (S.value = $);
  }
  function k({ height: S }) {
    w(a, S), _("size", S);
  }
  function y() {
    if (e.reveal !== true) return;
    const { direction: S, position: $, inflectionPoint: F } = r.scroll.value;
    w(o, S === "up" || $ - F < 100 || r.height.value - c.value - $ - a.value < 300);
  }
  function p(S) {
    m.value === true && w(o, true), n("focusin", S);
  }
  ge(() => e.modelValue, (S) => {
    _("space", S), w(o, true), r.animate();
  }), ge(s, (S) => {
    _("offset", S);
  }), ge(() => e.reveal, (S) => {
    S === false && w(o, e.modelValue);
  }), ge(o, (S) => {
    r.animate(), n("reveal", S);
  }), ge([a, r.scroll, r.height], y), ge(() => l.screen.height, (S) => {
    r.isContainer.value !== true && w(i, S);
  });
  const b = {};
  return r.instances.footer = b, e.modelValue === true && _("size", a.value), _("space", e.modelValue), _("offset", s.value), Ke(() => {
    r.instances.footer === b && (r.instances.footer = void 0, _("size", 0), _("offset", 0), _("space", false));
  }), () => {
    const S = Tt(t.default, [d(Ql, { debounce: 0, onResize: k })]);
    return e.elevated === true && S.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), d("footer", { class: h.value, style: g.value, onFocusin: p }, S);
  };
} });
he({ name: "QForm", props: { autofocus: Boolean, noErrorFocus: Boolean, noResetFocus: Boolean, greedy: Boolean, onSubmit: Function }, emits: ["reset", "validationSuccess", "validationError"], setup(e, { slots: t, emit: n }) {
  const l = xe(), r = U(null);
  let a = 0;
  const o = [];
  function i(h) {
    const g = typeof h == "boolean" ? h : e.noErrorFocus !== true, _ = ++a, w = (p, b) => {
      n(`validation${p === true ? "Success" : "Error"}`, b);
    }, k = (p) => {
      const b = p.validate();
      return typeof b.then == "function" ? b.then((S) => ({ valid: S, comp: p }), (S) => ({ valid: false, comp: p, err: S })) : Promise.resolve({ valid: b, comp: p });
    };
    return (e.greedy === true ? Promise.all(o.map(k)).then((p) => p.filter((b) => b.valid !== true)) : o.reduce((p, b) => p.then(() => k(b).then((S) => {
      if (S.valid === false) return Promise.reject(S);
    })), Promise.resolve()).catch((p) => [p])).then((p) => {
      if (p === void 0 || p.length === 0) return _ === a && w(true), true;
      if (_ === a) {
        const { comp: b, err: S } = p[0];
        if (S !== void 0 && console.error(S), w(false, b), g === true) {
          const $ = p.find(({ comp: F }) => typeof F.focus == "function" && bl(F.$) === false);
          $ !== void 0 && $.comp.focus();
        }
      }
      return false;
    });
  }
  function u() {
    a++, o.forEach((h) => {
      typeof h.resetValidation == "function" && h.resetValidation();
    });
  }
  function c(h) {
    h !== void 0 && je(h);
    const g = a + 1;
    i().then((_) => {
      g === a && _ === true && (e.onSubmit !== void 0 ? n("submit", h) : (h == null ? void 0 : h.target) !== void 0 && typeof h.target.submit == "function" && h.target.submit());
    });
  }
  function s(h) {
    h !== void 0 && je(h), n("reset"), We(() => {
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
  gn(mm, { bindComponent(h) {
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
  }), Object.assign(l.proxy, { validate: i, resetValidation: u, submit: c, reset: s, focus: f, getValidationComponents: () => o }), () => d("form", { class: "q-form", ref: r, onSubmit: c, onReset: s }, $e(t.default));
} });
var S1 = he({ name: "QHeader", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, revealOffset: { type: Number, default: 250 }, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = xe(), r = qt(Gl, ot);
  if (r === ot) return console.error("QHeader needs to be child of QLayout"), ot;
  const a = U(parseInt(e.heightHint, 10)), o = U(true), i = v(() => e.reveal === true || r.view.value.indexOf("H") !== -1 || l.platform.is.ios && r.isContainer.value === true), u = v(() => {
    if (e.modelValue !== true) return 0;
    if (i.value === true) return o.value === true ? a.value : 0;
    const y = a.value - r.scroll.value.position;
    return y > 0 ? y : 0;
  }), c = v(() => e.modelValue !== true || i.value === true && o.value !== true), s = v(() => e.modelValue === true && c.value === true && e.reveal === true), f = v(() => "q-header q-layout__section--marginal " + (i.value === true ? "fixed" : "absolute") + "-top" + (e.bordered === true ? " q-header--bordered" : "") + (c.value === true ? " q-header--hidden" : "") + (e.modelValue !== true ? " q-layout--prevent-focus" : "")), m = v(() => {
    const y = r.rows.value.top, p = {};
    return y[0] === "l" && r.left.space === true && (p[l.lang.rtl === true ? "right" : "left"] = `${r.left.size}px`), y[2] === "r" && r.right.space === true && (p[l.lang.rtl === true ? "left" : "right"] = `${r.right.size}px`), p;
  });
  function h(y, p) {
    r.update("header", y, p);
  }
  function g(y, p) {
    y.value !== p && (y.value = p);
  }
  function _({ height: y }) {
    g(a, y), h("size", y);
  }
  function w(y) {
    s.value === true && g(o, true), n("focusin", y);
  }
  ge(() => e.modelValue, (y) => {
    h("space", y), g(o, true), r.animate();
  }), ge(u, (y) => {
    h("offset", y);
  }), ge(() => e.reveal, (y) => {
    y === false && g(o, e.modelValue);
  }), ge(o, (y) => {
    r.animate(), n("reveal", y);
  }), ge(r.scroll, (y) => {
    e.reveal === true && g(o, y.direction === "up" || y.position <= e.revealOffset || y.position - y.inflectionPoint < 100);
  });
  const k = {};
  return r.instances.header = k, e.modelValue === true && h("size", a.value), h("space", e.modelValue), h("offset", u.value), Ke(() => {
    r.instances.header === k && (r.instances.header = void 0, h("size", 0), h("offset", 0), h("space", false));
  }), () => {
    const y = Pa(t.default, []);
    return e.elevated === true && y.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), y.push(d(Ql, { debounce: 0, onResize: _ })), d("header", { class: f.value, style: m.value, onFocusin: w }, y);
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
  const l = U(e.initialRatio), r = Ws(e, l), a = xe(), { registerTimeout: o, removeTimeout: i } = Zn(), { registerTimeout: u, removeTimeout: c } = Zn(), s = v(() => e.placeholderSrc !== void 0 ? { src: e.placeholderSrc } : null), f = v(() => e.errorSrc !== void 0 ? { src: e.errorSrc, __qerror: true } : null), m = [U(null), U(s.value)], h = U(0), g = U(false), _ = U(false), w = v(() => `q-img q-img--${e.noNativeMenu === true ? "no-" : ""}menu`), k = v(() => ({ width: e.width, height: e.height })), y = v(() => `q-img__image ${e.imgClass !== void 0 ? e.imgClass + " " : ""}q-img__image--with${e.noTransition === true ? "out" : ""}-transition q-img__image--`), p = v(() => ({ ...e.imgStyle, objectFit: e.fit, objectPosition: e.position }));
  function b() {
    if (c(), e.loadingShowDelay === 0) {
      g.value = true;
      return;
    }
    u(() => {
      g.value = true;
    }, e.loadingShowDelay);
  }
  function S() {
    c(), g.value = false;
  }
  function $({ target: M }) {
    bl(a) === false && (i(), l.value = M.naturalHeight === 0 ? 0.5 : M.naturalWidth / M.naturalHeight, F(M, 1));
  }
  function F(M, A) {
    A === 1e3 || bl(a) === true || (M.complete === true ? z(M) : o(() => {
      F(M, A + 1);
    }, 50));
  }
  function z(M) {
    bl(a) !== true && (h.value = h.value ^ 1, m[h.value].value = null, S(), M.getAttribute("__qerror") !== "true" && (_.value = false), n("load", M.currentSrc || M.src));
  }
  function B(M) {
    i(), S(), _.value = true, m[h.value].value = f.value, m[h.value ^ 1].value = s.value, n("error", M);
  }
  function L(M) {
    const A = m[M].value, C = { key: "img_" + M, class: y.value, style: p.value, alt: e.alt, crossorigin: e.crossorigin, decoding: e.decoding, referrerpolicy: e.referrerpolicy, height: e.height, width: e.width, loading: e.loading, fetchpriority: e.fetchpriority, "aria-hidden": "true", draggable: e.draggable, ...A };
    return h.value === M ? Object.assign(C, { class: C.class + "current", onLoad: $, onError: B }) : C.class += "loaded", d("div", { class: "q-img__container absolute-full", key: "img" + M }, d("img", C));
  }
  function D() {
    return g.value === false ? d("div", { key: "content", class: "q-img__content absolute-full q-anchor--skip" }, $e(t[_.value === true ? "error" : "default"])) : d("div", { key: "loading", class: "q-img__loading absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : e.noSpinner === true ? void 0 : [d(wn, { color: e.spinnerColor, size: e.spinnerSize })]);
  }
  {
    let M = function() {
      ge(() => e.src || e.srcset || e.sizes ? { src: e.src, srcset: e.srcset, sizes: e.sizes } : null, (A) => {
        i(), _.value = false, A === null ? (S(), m[h.value ^ 1].value = s.value) : b(), m[h.value].value = A;
      }, { immediate: true });
    };
    ln.value === true ? ft(M) : M();
  }
  return () => {
    const M = [];
    return r.value !== null && M.push(d("div", { key: "filler", style: r.value })), m[0].value !== null && M.push(L(0)), m[1].value !== null && M.push(L(1)), M.push(d(Ot, { name: "q-transition--fade" }, D)), d("div", { key: "main", class: w.value, style: k.value, role: "img", "aria-label": e.alt }, M);
  };
} });
var { passive: Al } = dt;
he({ name: "QInfiniteScroll", props: { offset: { type: Number, default: 500 }, debounce: { type: [String, Number], default: 100 }, scrollTarget: Zl, initialIndex: { type: Number, default: 0 }, disable: Boolean, reverse: Boolean }, emits: ["load"], setup(e, { slots: t, emit: n }) {
  const l = U(false), r = U(true), a = U(null), o = U(null);
  let i = e.initialIndex, u, c;
  const s = v(() => "q-infinite-scroll__loading" + (l.value === true ? "" : " invisible"));
  function f() {
    if (e.disable === true || l.value === true || r.value === false) return;
    const F = Ha(u), z = pl(u), B = Cr(u);
    e.reverse === false ? Math.round(z + B + e.offset) >= Math.round(F) && m() : Math.round(z) <= e.offset && m();
  }
  function m() {
    if (e.disable === true || l.value === true || r.value === false) return;
    i++, l.value = true;
    const F = Ha(u);
    n("load", i, (z) => {
      r.value === true && (l.value = false, We(() => {
        if (e.reverse === true) {
          const B = Ha(u), L = pl(u), D = B - F;
          wr(u, L + D);
        }
        z === true ? _() : a.value && a.value.closest("body") && c();
      }));
    });
  }
  function h() {
    i = 0;
  }
  function g() {
    r.value === false && (r.value = true, u.addEventListener("scroll", c, Al)), f();
  }
  function _() {
    var _a3;
    r.value === true && (r.value = false, l.value = false, u.removeEventListener("scroll", c, Al), (_a3 = c == null ? void 0 : c.cancel) == null ? void 0 : _a3.call(c));
  }
  function w() {
    if (u && r.value === true && u.removeEventListener("scroll", c, Al), u = Dn(a.value, e.scrollTarget), r.value === true) {
      if (u.addEventListener("scroll", c, Al), e.reverse === true) {
        const F = Ha(u), z = Cr(u);
        wr(u, F - z);
      }
      f();
    }
  }
  function k(F) {
    i = F;
  }
  function y(F) {
    F = parseInt(F, 10);
    const z = c;
    c = F <= 0 ? f : Ar(f, isNaN(F) === true ? 100 : F), u && r.value === true && (z !== void 0 && u.removeEventListener("scroll", z, Al), u.addEventListener("scroll", c, Al));
  }
  function p(F) {
    if (b.value === true) {
      if (o.value === null) {
        F !== true && We(() => {
          p(true);
        });
        return;
      }
      const z = `${l.value === true ? "un" : ""}pauseAnimations`;
      Array.from(o.value.getElementsByTagName("svg")).forEach((B) => {
        B[z]();
      });
    }
  }
  const b = v(() => e.disable !== true && r.value === true);
  ge([l, b], () => {
    p();
  }), ge(() => e.disable, (F) => {
    F === true ? _() : g();
  }), ge(() => e.reverse, () => {
    l.value === false && r.value === true && f();
  }), ge(() => e.scrollTarget, w), ge(() => e.debounce, y);
  let S = false;
  Sl(() => {
    S !== false && u && wr(u, S);
  }), Vn(() => {
    S = u ? pl(u) : false;
  }), Ke(() => {
    r.value === true && u.removeEventListener("scroll", c, Al);
  }), ft(() => {
    y(e.debounce), w(), l.value === false && p();
  });
  const $ = xe();
  return Object.assign($.proxy, { poll: () => {
    c == null ? void 0 : c();
  }, trigger: m, stop: _, reset: h, resume: g, setIndex: k, updateScrollTarget: w }), () => {
    const F = Pa(t.default, []);
    return b.value === true && F[e.reverse === false ? "push" : "unshift"](d("div", { ref: o, class: s.value }, $e(t.loading))), d("div", { class: "q-infinite-scroll", ref: a }, F);
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
  const s = U(null), f = U(h());
  function m() {
    return e.autogrow === true || ["textarea", "text", "search", "url", "tel", "password"].includes(e.type);
  }
  ge(() => e.type + e.autogrow, _), ge(() => e.mask, (B) => {
    if (B !== void 0) w(f.value, true);
    else {
      const L = F(f.value);
      _(), e.modelValue !== L && t("update:modelValue", L);
    }
  }), ge(() => e.fillMask + e.reverseFillMask, () => {
    s.value === true && w(f.value, true);
  }), ge(() => e.unmaskedValue, () => {
    s.value === true && w(f.value);
  });
  function h() {
    if (_(), s.value === true) {
      const B = S(F(e.modelValue));
      return e.fillMask !== false ? z(B) : B;
    }
    return e.modelValue;
  }
  function g(B) {
    if (B < r.length) return r.slice(-B);
    let L = "", D = r;
    const M = D.indexOf(Lt);
    if (M !== -1) {
      for (let A = B - D.length; A > 0; A--) L += Lt;
      D = D.slice(0, M) + L + D.slice(M);
    }
    return D;
  }
  function _() {
    if (s.value = e.mask !== void 0 && e.mask.length !== 0 && m(), s.value === false) {
      i = void 0, r = "", a = "";
      return;
    }
    const B = Ad[e.mask] === void 0 ? e.mask : Ad[e.mask], L = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_", D = L.replace(Pd, "\\$&"), M = [], A = [], C = [];
    let H = e.reverseFillMask === true, Q = "", K = "";
    B.replace(k1, (G, R, re, P, J) => {
      if (P !== void 0) {
        const T = No[P];
        C.push(T), K = T.negate, H === true && (A.push("(?:" + K + "+)?(" + T.pattern + "+)?(?:" + K + "+)?(" + T.pattern + "+)?"), H = false), A.push("(?:" + K + "+)?(" + T.pattern + ")?");
      } else if (re !== void 0) Q = "\\" + (re === "\\" ? "" : re), C.push(re), M.push("([^" + Q + "]+)?" + Q + "?");
      else {
        const T = R !== void 0 ? R : J;
        Q = T === "\\" ? "\\\\\\\\" : T.replace(Pd, "\\\\$&"), C.push(T), M.push("([^" + Q + "]+)?" + Q + "?");
      }
    });
    const W = new RegExp("^" + M.join("") + "(" + (Q === "" ? "." : "[^" + Q + "]") + "+)?" + (Q === "" ? "" : "[" + Q + "]*") + "$"), ie = A.length - 1, ye = A.map((G, R) => R === 0 && e.reverseFillMask === true ? new RegExp("^" + D + "*" + G) : R === ie ? new RegExp("^" + G + "(" + (K === "" ? "." : K) + "+)?" + (e.reverseFillMask === true ? "$" : D + "*")) : new RegExp("^" + G));
    o = C, i = (G) => {
      const R = W.exec(e.reverseFillMask === true ? G : G.slice(0, C.length + 1));
      R !== null && (G = R.slice(1).join(""));
      const re = [], P = ye.length;
      for (let J = 0, T = G; J < P; J++) {
        const E = ye[J].exec(T);
        if (E === null) break;
        T = T.slice(E.shift().length), re.push(...E);
      }
      return re.length !== 0 ? re.join("") : G;
    }, r = C.map((G) => typeof G == "string" ? G : Lt).join(""), a = r.split(Lt).join(L);
  }
  function w(B, L, D) {
    const M = l.value, A = M.selectionEnd, C = M.value.length - A, H = F(B);
    L === true && _();
    const Q = S(H), K = e.fillMask !== false ? z(Q) : Q, W = f.value !== K;
    M.value !== K && (M.value = K), W === true && (f.value = K), document.activeElement === M && We(() => {
      if (K === a) {
        const ye = e.reverseFillMask === true ? a.length : 0;
        M.setSelectionRange(ye, ye, "forward");
        return;
      }
      if (D === "insertFromPaste" && e.reverseFillMask !== true) {
        const ye = M.selectionEnd;
        let G = A - 1;
        for (let R = u; R <= G && R < ye; R++) r[R] !== Lt && G++;
        y.right(M, G);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(D) !== -1) {
        const ye = e.reverseFillMask === true ? A === 0 ? K.length > Q.length ? 1 : 0 : Math.max(0, K.length - (K === a ? 0 : Math.min(Q.length, C) + 1)) + 1 : A;
        M.setSelectionRange(ye, ye, "forward");
        return;
      }
      if (e.reverseFillMask === true) if (W === true) {
        const ye = Math.max(0, K.length - (K === a ? 0 : Math.min(Q.length, C + 1)));
        ye === 1 && A === 1 ? M.setSelectionRange(ye, ye, "forward") : y.rightReverse(M, ye);
      } else {
        const ye = K.length - C;
        M.setSelectionRange(ye, ye, "backward");
      }
      else if (W === true) {
        const ye = Math.max(0, r.indexOf(Lt), Math.min(Q.length, A) - 1);
        y.right(M, ye);
      } else {
        const ye = A - 1;
        y.right(M, ye);
      }
    });
    const ie = e.unmaskedValue === true ? F(K) : K;
    String(e.modelValue) !== ie && (e.modelValue !== null || ie !== "") && n(ie, true);
  }
  function k(B, L, D) {
    const M = S(F(B.value));
    L = Math.max(0, r.indexOf(Lt), Math.min(M.length, L)), u = L, B.setSelectionRange(L, D, "forward");
  }
  const y = { left(B, L) {
    const D = r.slice(L - 1).indexOf(Lt) === -1;
    let M = Math.max(0, L - 1);
    for (; M >= 0; M--) if (r[M] === Lt) {
      L = M, D === true && L++;
      break;
    }
    if (M < 0 && r[L] !== void 0 && r[L] !== Lt) return y.right(B, 0);
    L >= 0 && B.setSelectionRange(L, L, "backward");
  }, right(B, L) {
    const D = B.value.length;
    let M = Math.min(D, L + 1);
    for (; M <= D; M++) if (r[M] === Lt) {
      L = M;
      break;
    } else r[M - 1] === Lt && (L = M);
    if (M > D && r[L - 1] !== void 0 && r[L - 1] !== Lt) return y.left(B, D);
    B.setSelectionRange(L, L, "forward");
  }, leftReverse(B, L) {
    const D = g(B.value.length);
    let M = Math.max(0, L - 1);
    for (; M >= 0; M--) if (D[M - 1] === Lt) {
      L = M;
      break;
    } else if (D[M] === Lt && (L = M, M === 0)) break;
    if (M < 0 && D[L] !== void 0 && D[L] !== Lt) return y.rightReverse(B, 0);
    L >= 0 && B.setSelectionRange(L, L, "backward");
  }, rightReverse(B, L) {
    const D = B.value.length, M = g(D), A = M.slice(0, L + 1).indexOf(Lt) === -1;
    let C = Math.min(D, L + 1);
    for (; C <= D; C++) if (M[C - 1] === Lt) {
      L = C, L > 0 && A === true && L--;
      break;
    }
    if (C > D && M[L - 1] !== void 0 && M[L - 1] !== Lt) return y.leftReverse(B, D);
    B.setSelectionRange(L, L, "forward");
  } };
  function p(B) {
    t("click", B), c = void 0;
  }
  function b(B) {
    if (t("keydown", B), Xl(B) === true || B.altKey === true) return;
    const L = l.value, D = L.selectionStart, M = L.selectionEnd;
    if (B.shiftKey || (c = void 0), B.keyCode === 37 || B.keyCode === 39) {
      B.shiftKey && c === void 0 && (c = L.selectionDirection === "forward" ? D : M);
      const A = y[(B.keyCode === 39 ? "right" : "left") + (e.reverseFillMask === true ? "Reverse" : "")];
      if (B.preventDefault(), A(L, c === D ? M : D), B.shiftKey) {
        const C = L.selectionStart;
        L.setSelectionRange(Math.min(c, C), Math.max(c, C), "forward");
      }
    } else B.keyCode === 8 && e.reverseFillMask !== true && D === M ? (y.left(L, D), L.setSelectionRange(L.selectionStart, M, "backward")) : B.keyCode === 46 && e.reverseFillMask === true && D === M && (y.rightReverse(L, M), L.setSelectionRange(D, L.selectionEnd, "forward"));
  }
  function S(B) {
    if (B == null || B === "") return "";
    if (e.reverseFillMask === true) return $(B);
    const L = o;
    let D = 0, M = "";
    for (let A = 0; A < L.length; A++) {
      const C = B[D], H = L[A];
      if (typeof H == "string") M += H, C === H && D++;
      else if (C !== void 0 && H.regex.test(C)) M += H.transform !== void 0 ? H.transform(C) : C, D++;
      else return M;
    }
    return M;
  }
  function $(B) {
    const L = o, D = r.indexOf(Lt);
    let M = B.length - 1, A = "";
    for (let C = L.length - 1; C >= 0 && M !== -1; C--) {
      const H = L[C];
      let Q = B[M];
      if (typeof H == "string") A = H + A, Q === H && M--;
      else if (Q !== void 0 && H.regex.test(Q)) do
        A = (H.transform !== void 0 ? H.transform(Q) : Q) + A, M--, Q = B[M];
      while (D === C && Q !== void 0 && H.regex.test(Q));
      else return A;
    }
    return A;
  }
  function F(B) {
    return typeof B != "string" || i === void 0 ? typeof B == "number" ? i("" + B) : B : i(B);
  }
  function z(B) {
    return a.length - B.length <= 0 ? B : e.reverseFillMask === true && B.length !== 0 ? a.slice(0, -B.length) + B : B + a.slice(B.length);
  }
  return { innerValue: f, hasMask: s, moveCursorForPaste: k, updateMaskValue: w, onMaskedKeydown: b, onMaskedClick: p };
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
  const f = U(null), m = $s(e), { innerValue: h, hasMask: g, moveCursorForPaste: _, updateMaskValue: w, onMaskedKeydown: k, onMaskedClick: y } = q1(e, t, Q, f), p = Ph(e, true), b = v(() => Wl(h.value)), S = Lh(C), $ = pi({ changeEvent: true }), F = v(() => e.type === "textarea" || e.autogrow === true), z = v(() => F.value === true || ["text", "search", "url", "tel", "password"].includes(e.type)), B = v(() => {
    const R = { ...$.splitAttrs.listeners.value, onInput: C, onPaste: A, onChange: W, onBlur: ie, onFocus: wt };
    return R.onCompositionstart = R.onCompositionupdate = R.onCompositionend = S, g.value === true && (R.onKeydown = k, R.onClick = y), e.autogrow === true && (R.onAnimationend = H), R;
  }), L = v(() => {
    const R = { tabindex: 0, "data-autofocus": e.autofocus === true || void 0, rows: e.type === "textarea" ? 6 : void 0, "aria-label": e.label, name: m.value, ...$.splitAttrs.attributes.value, id: $.targetUid.value, maxlength: e.maxlength, disabled: e.disable === true, readonly: e.readonly === true };
    return F.value === false && (R.type = e.type), e.autogrow === true && (R.rows = 1), R;
  });
  ge(() => e.type, () => {
    f.value && (f.value.value = e.modelValue);
  }), ge(() => e.modelValue, (R) => {
    if (g.value === true) {
      if (u === true && (u = false, String(R) === o)) return;
      w(R);
    } else h.value !== R && (h.value = R, e.type === "number" && a.hasOwnProperty("value") === true && (i === true ? i = false : delete a.value));
    e.autogrow === true && We(K);
  }), ge(() => e.autogrow, (R) => {
    R === true ? We(K) : f.value !== null && n.rows > 0 && (f.value.style.height = "auto");
  }), ge(() => e.dense, () => {
    e.autogrow === true && We(K);
  });
  function D() {
    Br(() => {
      const R = document.activeElement;
      f.value !== null && f.value !== R && (R === null || R.id !== $.targetUid.value) && f.value.focus({ preventScroll: true });
    });
  }
  function M() {
    var _a3;
    (_a3 = f.value) == null ? void 0 : _a3.select();
  }
  function A(R) {
    if (g.value === true && e.reverseFillMask !== true) {
      const re = R.target;
      _(re, re.selectionStart, re.selectionEnd);
    }
    t("paste", R);
  }
  function C(R) {
    if (!R || !R.target) return;
    if (e.type === "file") {
      t("update:modelValue", R.target.files);
      return;
    }
    const re = R.target.value;
    if (R.target.qComposing === true) {
      a.value = re;
      return;
    }
    if (g.value === true) w(re, false, R.inputType);
    else if (Q(re), z.value === true && R.target === document.activeElement) {
      const { selectionStart: P, selectionEnd: J } = R.target;
      P !== void 0 && J !== void 0 && We(() => {
        R.target === document.activeElement && re.indexOf(R.target.value) === 0 && R.target.setSelectionRange(P, J);
      });
    }
    e.autogrow === true && K();
  }
  function H(R) {
    t("animationend", R), K();
  }
  function Q(R, re) {
    s = () => {
      c = null, e.type !== "number" && a.hasOwnProperty("value") === true && delete a.value, e.modelValue !== R && o !== R && (o = R, re === true && (u = true), t("update:modelValue", R), We(() => {
        o === R && (o = NaN);
      })), s = void 0;
    }, e.type === "number" && (i = true, a.value = R), e.debounce !== void 0 ? (c !== null && clearTimeout(c), a.value = R, c = setTimeout(s, e.debounce)) : s();
  }
  function K() {
    requestAnimationFrame(() => {
      const R = f.value;
      if (R !== null) {
        const re = R.parentNode.style, { scrollTop: P } = R, { overflowY: J, maxHeight: T } = r.platform.is.firefox === true ? {} : window.getComputedStyle(R), E = J !== void 0 && J !== "scroll";
        E === true && (R.style.overflowY = "hidden"), re.marginBottom = R.scrollHeight - 1 + "px", R.style.height = "1px", R.style.height = R.scrollHeight + "px", E === true && (R.style.overflowY = parseInt(T, 10) < R.scrollHeight ? "auto" : "hidden"), re.marginBottom = "", R.scrollTop = P;
      }
    });
  }
  function W(R) {
    S(R), c !== null && (clearTimeout(c), c = null), s == null ? void 0 : s(), t("change", R.target.value);
  }
  function ie(R) {
    R !== void 0 && wt(R), c !== null && (clearTimeout(c), c = null), s == null ? void 0 : s(), i = false, u = false, delete a.value, e.type !== "file" && setTimeout(() => {
      f.value !== null && (f.value.value = h.value !== void 0 ? h.value : "");
    });
  }
  function ye() {
    return a.hasOwnProperty("value") === true ? a.value : h.value !== void 0 ? h.value : "";
  }
  Ke(() => {
    ie();
  }), ft(() => {
    e.autogrow === true && K();
  }), Object.assign($, { innerValue: h, fieldClass: v(() => `q-${F.value === true ? "textarea" : "input"}` + (e.autogrow === true ? " q-textarea--autogrow" : "")), hasShadow: v(() => e.type !== "file" && typeof e.shadowText == "string" && e.shadowText.length !== 0), inputRef: f, emitValue: Q, hasValue: b, floatingLabel: v(() => b.value === true && (e.type !== "number" || isNaN(h.value) === false) || Wl(e.displayValue)), getControl: () => d(F.value === true ? "textarea" : "input", { ref: f, class: ["q-field__native q-placeholder", e.inputClass], style: e.inputStyle, ...L.value, ...B.value, ...e.type !== "file" ? { value: ye() } : p.value }), getShadowControl: () => d("div", { class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (F.value === true ? "" : " text-no-wrap") }, [d("span", { class: "invisible" }, ye()), d("span", e.shadowText)]) });
  const G = yi($);
  return Object.assign(l, { focus: D, select: M, getNativeElement: () => f.value }), Vt(l, "nativeEl", () => f.value), G;
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
  const l = U(ln.value === true ? e.ssrPrerender : false), r = v(() => e.root !== void 0 || e.margin !== void 0 || e.threshold !== void 0 ? { handler: u, cfg: { root: e.root, rootMargin: e.margin, threshold: e.threshold } } : u), a = v(() => e.disable !== true && (ln.value !== true || e.once !== true || e.ssrPrerender !== true)), o = v(() => [[P1, r.value, void 0, { once: e.once }]]), i = v(() => `--q-transition-duration: ${e.transitionDuration}ms`);
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
  const { proxy: l } = xe(), { $q: r } = l, a = U(e.modelValue), o = U(false), i = v(() => isNaN(e.innerMin) === true || e.innerMin < e.min ? e.min : e.innerMin), u = v(() => isNaN(e.innerMax) === true || e.innerMax > e.max ? e.max : e.innerMax);
  let c;
  function s() {
    a.value = e.modelValue === null ? i.value : ct(e.modelValue, i.value, u.value), D(true);
  }
  ge(() => `${e.modelValue}|${i.value}|${u.value}`, s), s();
  const f = v(() => e.disable === false && e.readonly === false), m = v(() => "q-knob non-selectable" + (f.value === true ? " q-knob--editable" : e.disable === true ? " disabled" : "")), h = v(() => (String(e.step).trim().split(".")[1] || "").length), g = v(() => e.step === 0 ? 1 : e.step), _ = v(() => e.instantFeedback === true || o.value === true), w = r.platform.is.mobile === true ? v(() => f.value === true ? { onClick: F } : {}) : v(() => f.value === true ? { onMousedown: $, onClick: F, onKeydown: z, onKeyup: L } : {}), k = v(() => f.value === true ? { tabindex: e.tabindex } : { [`aria-${e.disable === true ? "disabled" : "readonly"}`]: "true" }), y = v(() => {
    const C = {};
    return L1.forEach((H) => {
      C[H] = e[H];
    }), C;
  });
  function p(C) {
    C.isFinal ? (B(C.evt, true), o.value = false) : (C.isFirst && (S(), o.value = true), B(C.evt));
  }
  const b = v(() => [[bn, p, void 0, { prevent: true, stop: true, mouse: true }]]);
  function S() {
    const { top: C, left: H, width: Q, height: K } = l.$el.getBoundingClientRect();
    c = { top: C + K / 2, left: H + Q / 2 };
  }
  function $(C) {
    S(), B(C);
  }
  function F(C) {
    S(), B(C, true);
  }
  function z(C) {
    if (Bd.includes(C.keyCode) === false) return;
    je(C);
    const H = ([34, 33].includes(C.keyCode) ? 10 : 1) * g.value, Q = [34, 37, 40].includes(C.keyCode) ? -H : H;
    a.value = ct(parseFloat((a.value + Q).toFixed(h.value)), i.value, u.value), D();
  }
  function B(C, H) {
    const Q = tn(C), K = Math.abs(Q.top - c.top), W = Math.sqrt(K ** 2 + Math.abs(Q.left - c.left) ** 2);
    let ie = Math.asin(K / W) * (180 / Math.PI);
    Q.top < c.top ? ie = c.left < Q.left ? 90 - ie : 270 + ie : ie = c.left < Q.left ? ie + 90 : 270 - ie, r.lang.rtl === true ? ie = Eo(-ie - e.angle, 0, 360) : e.angle && (ie = Eo(ie - e.angle, 0, 360)), e.reverse === true && (ie = 360 - ie);
    let ye = e.min + ie / 360 * (e.max - e.min);
    if (g.value !== 0) {
      const G = ye % g.value;
      ye = ye - G + (Math.abs(G) >= g.value / 2 ? (G < 0 ? -1 : 1) * g.value : 0), ye = parseFloat(ye.toFixed(h.value));
    }
    ye = ct(ye, i.value, u.value), n("dragValue", ye), a.value !== ye && (a.value = ye), D(H);
  }
  function L(C) {
    Bd.includes(C.keyCode) && D(true);
  }
  function D(C) {
    e.modelValue !== a.value && n("update:modelValue", a.value), C === true && n("change", a.value);
  }
  const M = Ba(e);
  function A() {
    return d("input", M.value);
  }
  return () => {
    const C = { class: m.value, role: "slider", "aria-valuemin": i.value, "aria-valuemax": u.value, "aria-valuenow": e.modelValue, ...k.value, ...y.value, value: a.value, instantFeedback: _.value, ...w.value }, H = { default: t.default };
    return f.value === true && e.name !== void 0 && (H.internal = A), _n(Zm, C, H, "knob", f.value, () => b.value);
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
    const f = Math.max(0, pl(r)), m = fi(r), h = { top: f - n.position.top, left: m - n.position.left };
    if (e.axis === "vertical" && h.top === 0 || e.axis === "horizontal" && h.left === 0) return;
    const g = Math.abs(h.top) >= Math.abs(h.left) ? h.top < 0 ? "up" : "down" : h.left < 0 ? "left" : "right";
    n.position = { top: f, left: m }, n.directionChanged = n.direction !== g, n.delta = h, n.directionChanged === true && (n.direction = g, n.inflectionPoint = n.position), t("scroll", { ...n });
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
      const [m, h] = e.debounce ? [setTimeout(o, e.debounce), clearTimeout] : [requestAnimationFrame(o), cancelAnimationFrame];
      l = () => {
        h(m), l = null;
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
  const { proxy: { $q: l } } = xe(), r = U(null), a = U(l.screen.height), o = U(e.container === true ? 0 : l.screen.width), i = U({ position: 0, direction: "down", inflectionPoint: 0 }), u = U(0), c = U(ln.value === true ? 0 : so()), s = v(() => "q-layout q-layout--" + (e.container === true ? "containerized" : "standard")), f = v(() => e.container === false ? { minHeight: l.screen.height + "px" } : null), m = v(() => c.value !== 0 ? { [l.lang.rtl === true ? "left" : "right"]: `${c.value}px` } : null), h = v(() => c.value !== 0 ? { [l.lang.rtl === true ? "right" : "left"]: 0, [l.lang.rtl === true ? "left" : "right"]: `-${c.value}px`, width: `calc(100% + ${c.value}px)` } : null);
  function g(b) {
    if (e.container === true || document.qScrollPrevented !== true) {
      const S = { position: b.position.top, direction: b.direction, directionChanged: b.directionChanged, inflectionPoint: b.inflectionPoint.top, delta: b.delta.top };
      i.value = S, e.onScroll !== void 0 && n("scroll", S);
    }
  }
  function _(b) {
    const { height: S, width: $ } = b;
    let F = false;
    a.value !== S && (F = true, a.value = S, e.onScrollHeight !== void 0 && n("scrollHeight", S), k()), o.value !== $ && (F = true, o.value = $), F === true && e.onResize !== void 0 && n("resize", b);
  }
  function w({ height: b }) {
    u.value !== b && (u.value = b, k());
  }
  function k() {
    if (e.container === true) {
      const b = a.value > u.value ? so() : 0;
      c.value !== b && (c.value = b);
    }
  }
  let y = null;
  const p = { instances: {}, view: v(() => e.view), isContainer: v(() => e.container), rootRef: r, height: a, containerHeight: u, scrollbarWidth: c, totalWidth: v(() => o.value + c.value), rows: v(() => {
    const b = e.view.toLowerCase().split(" ");
    return { top: b[0].split(""), middle: b[1].split(""), bottom: b[2].split("") };
  }), header: Fn({ size: 0, offset: 0, space: false }), right: Fn({ size: 300, offset: 0, space: false }), footer: Fn({ size: 0, offset: 0, space: false }), left: Fn({ size: 300, offset: 0, space: false }), scroll: i, animate() {
    y !== null ? clearTimeout(y) : document.body.classList.add("q-body--layout-animate"), y = setTimeout(() => {
      y = null, document.body.classList.remove("q-body--layout-animate");
    }, 155);
  }, update(b, S, $) {
    p[b][S] = $;
  } };
  if (gn(Gl, p), so() > 0) {
    let b = function() {
      F = null, z.classList.remove("hide-scrollbar");
    }, S = function() {
      if (F === null) {
        if (z.scrollHeight > l.screen.height) return;
        z.classList.add("hide-scrollbar");
      } else clearTimeout(F);
      F = setTimeout(b, 300);
    }, $ = function(B) {
      F !== null && B === "remove" && (clearTimeout(F), b()), window[`${B}EventListener`]("resize", S);
    }, F = null;
    const z = document.body;
    ge(() => e.container !== true ? "add" : "remove", $), e.container !== true && $("add"), ni(() => {
      $("remove");
    });
  }
  return () => {
    const b = Tt(t.default, [d(Vh, { onScroll: g }), d(Ql, { onResize: _ })]), S = d("div", { class: s.value, style: f.value, ref: e.container === true ? void 0 : r, tabindex: -1 }, b);
    return e.container === true ? d("div", { class: "q-layout-container overflow-hidden", ref: r }, [d(Ql, { onResize: w }), d("div", { class: "absolute-full", style: m.value }, [d("div", { class: "scroll", style: h.value }, [S])])]) : S;
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
  const { proxy: l } = xe(), r = lt(e, l.$q), a = tl(e, Um), o = U(null), { refocusTargetEl: i, refocusTarget: u } = jm(e, o), c = v(() => Xe(e.modelValue) === Xe(e.val)), s = v(() => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (e.disable === true ? " disabled" : "") + (r.value === true ? " q-radio--dark" : "") + (e.dense === true ? " q-radio--dense" : "") + (e.leftLabel === true ? " reverse" : "")), f = v(() => {
    const b = e.color !== void 0 && (e.keepColor === true || c.value === true) ? ` text-${e.color}` : "";
    return `q-radio__inner relative-position q-radio__inner--${c.value === true ? "truthy" : "falsy"}${b}`;
  }), m = v(() => (c.value === true ? e.checkedIcon : e.uncheckedIcon) || null), h = v(() => e.disable === true ? -1 : e.tabindex || 0), g = v(() => {
    const b = { type: "radio" };
    return e.name !== void 0 && Object.assign(b, { ".checked": c.value === true, "^checked": c.value === true ? "checked" : void 0, name: e.name, value: e.val }), b;
  }), _ = kl(g);
  function w(b) {
    b !== void 0 && (je(b), u(b)), e.disable !== true && c.value !== true && n("update:modelValue", e.val, b);
  }
  function k(b) {
    (b.keyCode === 13 || b.keyCode === 32) && je(b);
  }
  function y(b) {
    (b.keyCode === 13 || b.keyCode === 32) && w(b);
  }
  Object.assign(l, { set: w });
  const p = D1();
  return () => {
    const b = m.value !== null ? [d("div", { key: "icon", class: "q-radio__icon-container absolute-full flex flex-center no-wrap" }, [d(et, { class: "q-radio__icon", name: m.value })])] : [p];
    e.disable !== true && _(b, "unshift", " q-radio__native q-ma-none q-pa-none");
    const S = [d("div", { class: f.value, style: a.value, "aria-hidden": "true" }, b)];
    i.value !== null && S.push(i.value);
    const $ = e.label !== void 0 ? Tt(t.default, [e.label]) : $e(t.default);
    return $ !== void 0 && S.push(d("div", { class: "q-radio__label q-anchor--skip" }, $)), d("div", { ref: o, class: s.value, tabindex: h.value, role: "radio", "aria-label": e.label, "aria-checked": c.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: w, onKeydown: k, onKeyup: y }, S);
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
  const a = lt(e, l), o = v(() => Dh[e.type]), i = v(() => nu(e.optionValue, "value")), u = v(() => nu(e.optionLabel, "label")), c = v(() => nu(e.optionDisable, "disable")), s = v(() => e.options.map((g) => ({ val: i.value(g), name: g.name === void 0 ? e.name : g.name, disable: e.disable || c.value(g), leftLabel: g.leftLabel === void 0 ? e.leftLabel : g.leftLabel, color: g.color === void 0 ? e.color : g.color, checkedIcon: g.checkedIcon, uncheckedIcon: g.uncheckedIcon, dark: g.dark === void 0 ? a.value : g.dark, size: g.size === void 0 ? e.size : g.size, dense: e.dense, keepColor: g.keepColor === void 0 ? e.keepColor : g.keepColor }))), f = v(() => "q-option-group q-gutter-x-sm" + (e.inline === true ? " q-option-group--inline" : "")), m = v(() => {
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
    let f = 0, m = 0;
    const h = l.value, g = t.lang.rtl === true ? -1 : 1;
    h.top === true && r.value !== 0 ? m = `${r.value}px` : h.bottom === true && o.value !== 0 && (m = `${-o.value}px`), h.left === true && i.value !== 0 ? f = `${g * i.value}px` : h.right === true && a.value !== 0 && (f = `${-g * a.value}px`);
    const _ = { transform: `translate(${f}, ${m})` };
    return e.offset && (_.margin = `${e.offset[1]}px ${e.offset[0]}px`), h.vertical === true ? (i.value !== 0 && (_[t.lang.rtl === true ? "right" : "left"] = `${i.value}px`), a.value !== 0 && (_[t.lang.rtl === true ? "left" : "right"] = `${a.value}px`)) : h.horizontal === true && (r.value !== 0 && (_.top = `${r.value}px`), o.value !== 0 && (_.bottom = `${o.value}px`)), _;
  }), c = v(() => `q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand === true ? "expand" : "shrink"}`);
  function s(f) {
    const m = $e(f.default);
    return d("div", { class: c.value, style: u.value }, e.expand === true ? m : [d("div", m)]);
  }
  return { $layout: n, getStickyContent: s };
}
he({ name: "QPageScroller", props: { ...Wu, scrollOffset: { type: Number, default: 1e3 }, reverse: Boolean, duration: { type: Number, default: 300 }, offset: { ...Wu.offset, default: () => [18, 18] } }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = xe(), { $layout: r, getStickyContent: a } = Ih(), o = U(null);
  let i;
  const u = v(() => r.height.value - (r.isContainer.value === true ? r.containerHeight.value : l.screen.height));
  function c() {
    return e.reverse === true ? u.value - r.scroll.value.position > e.scrollOffset : r.scroll.value.position > e.scrollOffset;
  }
  const s = U(c());
  function f() {
    const w = c();
    s.value !== w && (s.value = w);
  }
  function m() {
    e.reverse === true ? i === void 0 && (i = ge(u, f)) : h();
  }
  ge(r.scroll, f), ge(() => e.reverse, m);
  function h() {
    i !== void 0 && (i(), i = void 0);
  }
  function g(w) {
    const k = Dn(r.isContainer.value === true ? o.value : r.rootRef.value);
    wr(k, e.reverse === true ? r.height.value : 0, e.duration), n("click", w);
  }
  function _() {
    return s.value === true ? d("div", { ref: o, class: "q-page-scroller", onClick: g }, a(t)) : null;
  }
  return m(), Ke(h), () => d(Ot, { name: "q-transition--fade" }, _);
} });
he({ name: "QPageSticky", props: Wu, setup(e, { slots: t }) {
  const { getStickyContent: n } = Ih();
  return () => n(t);
} });
function Za(e, t) {
  return [true, false].includes(e) ? e : t;
}
he({ name: "QPagination", props: { ...nt, modelValue: { type: Number, required: true }, min: { type: [Number, String], default: 1 }, max: { type: [Number, String], required: true }, maxPages: { type: [Number, String], default: 0, validator: (e) => (typeof e == "string" ? parseInt(e, 10) : e) >= 0 }, inputStyle: [Array, String, Object], inputClass: [Array, String, Object], size: String, disable: Boolean, input: Boolean, iconPrev: String, iconNext: String, iconFirst: String, iconLast: String, toFn: Function, boundaryLinks: { type: Boolean, default: null }, boundaryNumbers: { type: Boolean, default: null }, directionLinks: { type: Boolean, default: null }, ellipses: { type: Boolean, default: null }, ripple: { type: [Boolean, Object], default: null }, round: Boolean, rounded: Boolean, flat: Boolean, outline: Boolean, unelevated: Boolean, push: Boolean, glossy: Boolean, color: { type: String, default: "primary" }, textColor: String, activeDesign: { type: String, default: "", values: (e) => e === "" || qm.includes(e) }, activeColor: String, activeTextColor: String, gutter: String, padding: { type: String, default: "3px 2px" } }, emits: ["update:modelValue"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), { $q: l } = n, r = lt(e, l), a = v(() => parseInt(e.min, 10)), o = v(() => parseInt(e.max, 10)), i = v(() => parseInt(e.maxPages, 10)), u = v(() => g.value + " / " + o.value), c = v(() => Za(e.boundaryLinks, e.input)), s = v(() => Za(e.boundaryNumbers, !e.input)), f = v(() => Za(e.directionLinks, e.input)), m = v(() => Za(e.ellipses, !e.input)), h = U(null), g = v({ get: () => e.modelValue, set: (A) => {
    if (A = parseInt(A, 10), e.disable || isNaN(A)) return;
    const C = ct(A, a.value, o.value);
    e.modelValue !== C && t("update:modelValue", C);
  } });
  ge(() => `${a.value}|${o.value}`, () => {
    g.value = e.modelValue;
  });
  const _ = v(() => "q-pagination row no-wrap items-center" + (e.disable === true ? " disabled" : "")), w = v(() => e.gutter in Po ? `${Po[e.gutter]}px` : e.gutter || null), k = v(() => w.value !== null ? `--q-pagination-gutter-parent:-${w.value};--q-pagination-gutter-child:${w.value}` : null), y = v(() => {
    const A = [e.iconFirst || l.iconSet.pagination.first, e.iconPrev || l.iconSet.pagination.prev, e.iconNext || l.iconSet.pagination.next, e.iconLast || l.iconSet.pagination.last];
    return l.lang.rtl === true ? A.reverse() : A;
  }), p = v(() => ({ "aria-disabled": e.disable === true ? "true" : "false", role: "navigation" })), b = v(() => qs(e, "flat")), S = v(() => ({ [b.value]: true, round: e.round, rounded: e.rounded, padding: e.padding, color: e.color, textColor: e.textColor, size: e.size, ripple: e.ripple !== null ? e.ripple : true })), $ = v(() => {
    const A = { [b.value]: false };
    return e.activeDesign !== "" && (A[e.activeDesign] = true), A;
  }), F = v(() => ({ ...$.value, color: e.activeColor || e.color, textColor: e.activeTextColor || e.textColor })), z = v(() => {
    let A = Math.max(i.value, 1 + (m.value ? 2 : 0) + (s.value ? 2 : 0));
    const C = { pgFrom: a.value, pgTo: o.value, ellipsesStart: false, ellipsesEnd: false, boundaryStart: false, boundaryEnd: false, marginalStyle: { minWidth: `${Math.max(2, String(o.value).length)}em` } };
    return i.value && A < o.value - a.value + 1 && (A = 1 + Math.floor(A / 2) * 2, C.pgFrom = Math.max(a.value, Math.min(o.value - A + 1, e.modelValue - Math.floor(A / 2))), C.pgTo = Math.min(o.value, C.pgFrom + A - 1), s.value && (C.boundaryStart = true, C.pgFrom++), m.value && C.pgFrom > a.value + (s.value ? 1 : 0) && (C.ellipsesStart = true, C.pgFrom++), s.value && (C.boundaryEnd = true, C.pgTo--), m.value && C.pgTo < o.value - (s.value ? 1 : 0) && (C.ellipsesEnd = true, C.pgTo--)), C;
  });
  function B(A) {
    g.value = A;
  }
  function L(A) {
    g.value = g.value + A;
  }
  const D = v(() => {
    function A() {
      g.value = h.value, h.value = null;
    }
    return { "onUpdate:modelValue": (C) => {
      h.value = C;
    }, onKeyup: (C) => {
      yn(C, 13) === true && A();
    }, onBlur: A };
  });
  function M(A, C, H) {
    const Q = { "aria-label": C, "aria-current": "false", ...S.value, ...A };
    return H === true && Object.assign(Q, { "aria-current": "true", ...F.value }), C !== void 0 && (e.toFn !== void 0 ? Q.to = e.toFn(C) : Q.onClick = () => {
      B(C);
    }), d(Ze, Q);
  }
  return Object.assign(n, { set: B, setByOffset: L }), () => {
    const A = [], C = [];
    let H;
    if (c.value === true && (A.push(M({ key: "bls", disable: e.disable || e.modelValue <= a.value, icon: y.value[0], "aria-label": l.lang.pagination.first }, a.value)), C.unshift(M({ key: "ble", disable: e.disable || e.modelValue >= o.value, icon: y.value[3], "aria-label": l.lang.pagination.last }, o.value))), f.value === true && (A.push(M({ key: "bdp", disable: e.disable || e.modelValue <= a.value, icon: y.value[1], "aria-label": l.lang.pagination.prev }, e.modelValue - 1)), C.unshift(M({ key: "bdn", disable: e.disable || e.modelValue >= o.value, icon: y.value[2], "aria-label": l.lang.pagination.next }, e.modelValue + 1))), e.input !== true) {
      H = [];
      const { pgFrom: Q, pgTo: K, marginalStyle: W } = z.value;
      if (z.value.boundaryStart === true) {
        const ie = a.value === e.modelValue;
        A.push(M({ key: "bns", style: W, disable: e.disable, label: a.value }, a.value, ie));
      }
      if (z.value.boundaryEnd === true) {
        const ie = o.value === e.modelValue;
        C.unshift(M({ key: "bne", style: W, disable: e.disable, label: o.value }, o.value, ie));
      }
      z.value.ellipsesStart === true && A.push(M({ key: "bes", style: W, disable: e.disable, label: "\u2026", ripple: false }, Q - 1)), z.value.ellipsesEnd === true && C.unshift(M({ key: "bee", style: W, disable: e.disable, label: "\u2026", ripple: false }, K + 1));
      for (let ie = Q; ie <= K; ie++) H.push(M({ key: `bpg${ie}`, style: W, disable: e.disable, label: ie }, ie, ie === e.modelValue));
    }
    return d("div", { class: _.value, ...p.value }, [d("div", { class: "q-pagination__content row no-wrap items-center", style: k.value }, [...A, e.input === true ? d(Bh, { class: "inline", style: { width: `${u.value.length / 1.5}em` }, type: "number", dense: true, value: h.value, disable: e.disable, dark: r.value, borderless: true, inputClass: e.inputClass, inputStyle: e.inputStyle, placeholder: u.value, min: a.value, max: o.value, ...D.value }) : d("div", { class: "q-pagination__middle row justify-center" }, H), ...C])]);
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
  const l = U(0), r = U(null), a = U(null), o = U(null);
  let i, u, c, s, f, m;
  ge(() => e.height, () => {
    i === true && g();
  }), ge(() => e.scrollTarget, () => {
    i === true && (y(), k());
  });
  let h = (p) => {
    l.value = p, e.onScroll !== void 0 && n("scroll", p);
  };
  function g() {
    let p, b, S;
    m === window ? (p = 0, S = b = window.innerHeight) : (p = Ao(m).top, b = Cr(m), S = p + b);
    const $ = Ao(r.value).top, F = $ + e.height;
    if (f !== void 0 || F > p && $ < S) {
      const z = (S - $) / (e.height + b);
      _((c - e.height) * z * e.speed), h(z);
    }
  }
  let _ = (p) => {
    u.style.transform = `translate3d(-50%,${Math.round(p)}px,0)`;
  };
  function w() {
    c = u.naturalHeight || u.videoHeight || Cr(u), i === true && g();
  }
  function k() {
    i = true, m = Dn(r.value, e.scrollTarget), m.addEventListener("scroll", g, Ja), window.addEventListener("resize", s, Ja), g();
  }
  function y() {
    i === true && (i = false, m.removeEventListener("scroll", g, Ja), window.removeEventListener("resize", s, Ja), m = void 0, _.cancel(), h.cancel(), s.cancel());
  }
  return ft(() => {
    _ = lu(_), h = lu(h), s = lu(w), u = t.media !== void 0 ? a.value.children[0] : o.value, u.onload = u.onloadstart = u.loadedmetadata = w, w(), u.style.display = "initial", window.IntersectionObserver !== void 0 ? (f = new IntersectionObserver((p) => {
      (p[0].isIntersecting === true ? k : y)();
    }), f.observe(r.value)) : k();
  }), Ke(() => {
    y(), f == null ? void 0 : f.disconnect(), u.onload = u.onloadstart = u.loadedmetadata = null;
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
  const { proxy: l } = xe(), { $q: r } = l, a = U(null), o = U(""), i = U("");
  let u = false;
  const c = v(() => Vt({ initialValue: o.value, validate: e.validate, set: s, cancel: f, updatePosition: m }, "value", () => i.value, (b) => {
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
      a.value.updatePosition();
    });
  }
  function h() {
    return Tn(i.value, o.value) === false;
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
  function k() {
    u === false && h() === true && (e.autoSave === true && e.validate(i.value) === true ? (n("save", i.value, o.value), n("update:modelValue", i.value)) : n("cancel", i.value, o.value)), n("beforeHide");
  }
  function y() {
    n("hide");
  }
  function p() {
    const b = t.default !== void 0 ? [].concat(t.default(c.value)) : [];
    return e.title && b.unshift(d("div", { class: "q-dialog__title q-mt-sm q-mb-sm" }, e.title)), e.buttons === true && b.push(d("div", { class: "q-popup-edit__buttons row justify-center no-wrap" }, [d(Ze, { flat: true, color: e.color, label: e.labelCancel || r.lang.label.cancel, onClick: f }), d(Ze, { flat: true, color: e.color, label: e.labelSet || r.lang.label.set, onClick: s })])), b;
  }
  return Object.assign(l, { set: s, cancel: f, show(b) {
    var _a3;
    (_a3 = a.value) == null ? void 0 : _a3.show(b);
  }, hide(b) {
    var _a3;
    (_a3 = a.value) == null ? void 0 : _a3.hide(b);
  }, updatePosition: m }), () => {
    if (e.disable !== true) return d(vi, { ref: a, class: "q-popup-edit", cover: e.cover, onBeforeShow: _, onShow: w, onBeforeHide: k, onHide: y, onEscapeKey: f }, p);
  };
} });
he({ name: "QPopupProxy", props: { ...Am, breakpoint: { type: [String, Number], default: 450 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: n, attrs: l }) {
  const { proxy: r } = xe(), { $q: a } = r, o = U(false), i = U(null), u = v(() => parseInt(e.breakpoint, 10)), { canShow: c } = Es({ showing: o });
  function s() {
    return a.screen.width < u.value || a.screen.height < u.value ? "dialog" : "menu";
  }
  const f = U(s()), m = v(() => f.value === "menu" ? { maxHeight: "99vh" } : {});
  ge(() => s(), (_) => {
    o.value !== true && (f.value = _);
  });
  function h(_) {
    o.value = true, n("show", _);
  }
  function g(_) {
    o.value = false, f.value = s(), n("hide", _);
  }
  return Object.assign(r, { show(_) {
    c(_) === true && i.value.show(_);
  }, hide(_) {
    i.value.hide(_);
  }, toggle(_) {
    i.value.toggle(_);
  } }), Vt(r, "currentComponent", () => ({ type: f.value, ref: i.value })), () => {
    const _ = { ref: i, ...m.value, ...l, onShow: h, onHide: g };
    let w;
    return f.value === "dialog" ? w = hi : (w = vi, Object.assign(_, { target: e.target, contextMenu: e.contextMenu, noParentEvent: true, separateClosePopup: true })), d(w, _, t.default);
  };
} });
var U1 = { xs: 2, sm: 4, md: 6, lg: 10, xl: 14 };
function Od(e, t, n) {
  return { transform: t === true ? `translateX(${n.lang.rtl === true ? "-" : ""}100%) scale3d(${-e},1,1)` : `scale3d(${e},1,1)` };
}
var Q1 = he({ name: "QLinearProgress", props: { ...nt, ...el, value: { type: Number, default: 0 }, buffer: Number, color: String, trackColor: String, reverse: Boolean, stripe: Boolean, indeterminate: Boolean, query: Boolean, rounded: Boolean, animationSpeed: { type: [String, Number], default: 2100 }, instantFeedback: Boolean }, setup(e, { slots: t }) {
  const { proxy: n } = xe(), l = lt(e, n.$q), r = tl(e, U1), a = v(() => e.indeterminate === true || e.query === true), o = v(() => e.reverse !== e.query), i = v(() => ({ ...r.value !== null ? r.value : {}, "--q-linear-progress-speed": `${e.animationSpeed}ms` })), u = v(() => "q-linear-progress" + (e.color !== void 0 ? ` text-${e.color}` : "") + (e.reverse === true || e.query === true ? " q-linear-progress--reverse" : "") + (e.rounded === true ? " rounded-borders" : "")), c = v(() => Od(e.buffer !== void 0 ? e.buffer : 1, o.value, n.$q)), s = v(() => `with${e.instantFeedback === true ? "out" : ""}-transition`), f = v(() => `q-linear-progress__track absolute-full q-linear-progress__track--${s.value} q-linear-progress__track--${l.value === true ? "dark" : "light"}` + (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")), m = v(() => Od(a.value === true ? 1 : e.value, o.value, n.$q)), h = v(() => `q-linear-progress__model absolute-full q-linear-progress__model--${s.value} q-linear-progress__model--${a.value === true ? "in" : ""}determinate`), g = v(() => ({ width: `${e.value * 100}%` })), _ = v(() => `q-linear-progress__stripe absolute-${e.reverse === true ? "right" : "left"} q-linear-progress__stripe--${s.value}`);
  return () => {
    const w = [d("div", { class: f.value, style: c.value }), d("div", { class: h.value, style: m.value })];
    return e.stripe === true && a.value === false && w.push(d("div", { class: _.value, style: g.value })), d("div", { class: u.value, style: i.value, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuenow": e.indeterminate === true ? void 0 : e.value }, Tt(t.default, w));
  };
} }), Vd = 40, ru = 20;
he({ name: "QPullToRefresh", props: { color: String, bgColor: String, icon: String, noMouse: Boolean, disable: Boolean, scrollTarget: Zl }, emits: ["refresh"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), { $q: r } = l, a = U("pull"), o = U(0), i = U(false), u = U(-40), c = U(false), s = U({}), f = v(() => ({ opacity: o.value, transform: `translateY(${u.value}px) rotate(${o.value * 360}deg)` })), m = v(() => "q-pull-to-refresh__puller row flex-center" + (c.value === true ? " q-pull-to-refresh__puller--animating" : "") + (e.bgColor !== void 0 ? ` bg-${e.bgColor}` : ""));
  function h(S) {
    if (S.isFinal === true) {
      i.value === true && (i.value = false, a.value === "pulled" ? (a.value = "refreshing", p({ pos: ru }), w()) : a.value === "pull" && p({ pos: -40, ratio: 0 }));
      return;
    }
    if (c.value === true || a.value === "refreshing") return false;
    if (S.isFirst === true) {
      if (pl(k) !== 0 || S.direction !== "down") return i.value === true && (i.value = false, a.value = "pull", p({ pos: -40, ratio: 0 })), false;
      i.value = true;
      const { top: z, left: B } = l.$el.getBoundingClientRect();
      s.value = { top: z + "px", left: B + "px", width: window.getComputedStyle(l.$el).getPropertyValue("width") };
    }
    Dt(S.evt);
    const $ = Math.min(140, Math.max(0, S.distance.y));
    u.value = $ - Vd, o.value = ct($ / (ru + Vd), 0, 1);
    const F = u.value > ru ? "pulled" : "pull";
    a.value !== F && (a.value = F);
  }
  const g = v(() => {
    const S = { down: true };
    return e.noMouse !== true && (S.mouse = true), [[bn, h, void 0, S]];
  }), _ = v(() => `q-pull-to-refresh__content${i.value === true ? " no-pointer-events" : ""}`);
  function w() {
    n("refresh", () => {
      p({ pos: -40, ratio: 0 }, () => {
        a.value = "pull";
      });
    });
  }
  let k, y = null;
  function p({ pos: S, ratio: $ }, F) {
    c.value = true, u.value = S, $ !== void 0 && (o.value = $), y !== null && clearTimeout(y), y = setTimeout(() => {
      y = null, c.value = false, F == null ? void 0 : F();
    }, 300);
  }
  function b() {
    k = Dn(l.$el, e.scrollTarget);
  }
  return ge(() => e.scrollTarget, b), ft(b), Ke(() => {
    y !== null && clearTimeout(y);
  }), Object.assign(l, { trigger: w, updateScrollTarget: b }), () => {
    const S = [d("div", { class: _.value }, $e(t.default)), d("div", { class: "q-pull-to-refresh__puller-container fixed row flex-center no-pointer-events z-top", style: s.value }, [d("div", { class: m.value, style: f.value }, [a.value !== "refreshing" ? d(et, { name: e.icon || r.iconSet.pullToRefresh.icon, color: e.color, size: "32px" }) : d(wn, { size: "24px", color: e.color })])])];
    return _n("div", { class: "q-pull-to-refresh" }, S, "main", e.disable === false, () => g.value);
  };
} });
var al = { MIN: 0, RANGE: 1, MAX: 2 };
he({ name: "QRange", props: { ...Jm, modelValue: { type: Object, default: () => ({ min: null, max: null }), validator: (e) => "min" in e && "max" in e }, dragRange: Boolean, dragOnlyRange: Boolean, leftLabelColor: String, leftLabelTextColor: String, rightLabelColor: String, rightLabelTextColor: String, leftLabelValue: [String, Number], rightLabelValue: [String, Number], leftThumbColor: String, rightThumbColor: String }, emits: eh, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = xe(), { state: l, methods: r } = th({ updateValue: z, updatePosition: L, getDragging: B, formAttrs: v(() => ({ type: "hidden", name: e.name, value: `${e.modelValue.min}|${e.modelValue.max}` })) }), a = U(null), o = U(0), i = U(0), u = U({ min: 0, max: 0 });
  function c() {
    u.value.min = e.modelValue.min === null ? l.innerMin.value : ct(e.modelValue.min, l.innerMin.value, l.innerMax.value), u.value.max = e.modelValue.max === null ? l.innerMax.value : ct(e.modelValue.max, l.innerMin.value, l.innerMax.value);
  }
  ge(() => `${e.modelValue.min}|${e.modelValue.max}|${l.innerMin.value}|${l.innerMax.value}`, c), c();
  const s = v(() => r.convertModelToRatio(u.value.min)), f = v(() => r.convertModelToRatio(u.value.max)), m = v(() => l.active.value === true ? o.value : s.value), h = v(() => l.active.value === true ? i.value : f.value), g = v(() => {
    const M = { [l.positionProp.value]: `${100 * m.value}%`, [l.sizeProp.value]: `${100 * (h.value - m.value)}%` };
    return e.selectionImg !== void 0 && (M.backgroundImage = `url(${e.selectionImg}) !important`), M;
  }), _ = v(() => {
    if (l.editable.value !== true) return {};
    if (n.platform.is.mobile === true) return { onClick: r.onMobileClick };
    const M = { onMousedown: r.onActivate };
    return (e.dragRange === true || e.dragOnlyRange === true) && Object.assign(M, { onFocus: () => {
      l.focus.value = "both";
    }, onBlur: r.onBlur, onKeydown: D, onKeyup: r.onKeyup }), M;
  });
  function w(M) {
    return n.platform.is.mobile !== true && l.editable.value === true && e.dragOnlyRange !== true ? { onFocus: () => {
      l.focus.value = M;
    }, onBlur: r.onBlur, onKeydown: D, onKeyup: r.onKeyup } : {};
  }
  const k = v(() => e.dragOnlyRange !== true ? l.tabindex.value : null), y = v(() => n.platform.is.mobile !== true && (e.dragRange || e.dragOnlyRange === true) ? l.tabindex.value : null), p = U(null), b = v(() => w("min")), S = r.getThumbRenderFn({ focusValue: "min", getNodeData: () => ({ ref: p, key: "tmin", ...b.value, tabindex: k.value }), ratio: m, label: v(() => e.leftLabelValue !== void 0 ? e.leftLabelValue : u.value.min), thumbColor: v(() => e.leftThumbColor || e.thumbColor || e.color), labelColor: v(() => e.leftLabelColor || e.labelColor), labelTextColor: v(() => e.leftLabelTextColor || e.labelTextColor) }), $ = v(() => w("max")), F = r.getThumbRenderFn({ focusValue: "max", getNodeData: () => ({ ...$.value, key: "tmax", tabindex: k.value }), ratio: h, label: v(() => e.rightLabelValue !== void 0 ? e.rightLabelValue : u.value.max), thumbColor: v(() => e.rightThumbColor || e.thumbColor || e.color), labelColor: v(() => e.rightLabelColor || e.labelColor), labelTextColor: v(() => e.rightLabelTextColor || e.labelTextColor) });
  function z(M) {
    (u.value.min !== e.modelValue.min || u.value.max !== e.modelValue.max) && t("update:modelValue", { ...u.value }), M === true && t("change", { ...u.value });
  }
  function B(M) {
    const { left: A, top: C, width: H, height: Q } = a.value.getBoundingClientRect(), K = e.dragOnlyRange === true ? 0 : e.vertical === true ? p.value.offsetHeight / (2 * Q) : p.value.offsetWidth / (2 * H), W = { left: A, top: C, width: H, height: Q, valueMin: u.value.min, valueMax: u.value.max, ratioMin: s.value, ratioMax: f.value }, ie = r.getDraggingRatio(M, W);
    return e.dragOnlyRange !== true && ie < W.ratioMin + K ? W.type = al.MIN : e.dragOnlyRange === true || ie < W.ratioMax - K ? e.dragRange === true || e.dragOnlyRange === true ? (W.type = al.RANGE, Object.assign(W, { offsetRatio: ie, offsetModel: r.convertRatioToModel(ie), rangeValue: W.valueMax - W.valueMin, rangeRatio: W.ratioMax - W.ratioMin })) : W.type = W.ratioMax - ie < ie - W.ratioMin ? al.MAX : al.MIN : W.type = al.MAX, W;
  }
  function L(M, A = l.dragging.value) {
    let C;
    const H = r.getDraggingRatio(M, A), Q = r.convertRatioToModel(H);
    switch (A.type) {
      case al.MIN:
        H <= A.ratioMax ? (C = { minR: H, maxR: A.ratioMax, min: Q, max: A.valueMax }, l.focus.value = "min") : (C = { minR: A.ratioMax, maxR: H, min: A.valueMax, max: Q }, l.focus.value = "max");
        break;
      case al.MAX:
        H >= A.ratioMin ? (C = { minR: A.ratioMin, maxR: H, min: A.valueMin, max: Q }, l.focus.value = "max") : (C = { minR: H, maxR: A.ratioMin, min: Q, max: A.valueMin }, l.focus.value = "min");
        break;
      case al.RANGE:
        const K = H - A.offsetRatio, W = ct(A.ratioMin + K, l.innerMinRatio.value, l.innerMaxRatio.value - A.rangeRatio), ie = Q - A.offsetModel, ye = ct(A.valueMin + ie, l.innerMin.value, l.innerMax.value - A.rangeValue);
        C = { minR: W, maxR: W + A.rangeRatio, min: l.roundValueFn.value(ye), max: l.roundValueFn.value(ye + A.rangeValue) }, l.focus.value = "both";
        break;
    }
    u.value = u.value.min === null || u.value.max === null ? { min: C.min || e.min, max: C.max || e.max } : { min: C.min, max: C.max }, e.snap !== true || e.step === 0 ? (o.value = C.minR, i.value = C.maxR) : (o.value = r.convertModelToRatio(u.value.min), i.value = r.convertModelToRatio(u.value.max));
  }
  function D(M) {
    if (Hs.includes(M.keyCode) === false) return;
    je(M);
    const A = ([34, 33].includes(M.keyCode) ? 10 : 1) * l.keyStep.value, C = ([34, 37, 40].includes(M.keyCode) ? -1 : 1) * (l.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * A;
    if (l.focus.value === "both") {
      const H = u.value.max - u.value.min, Q = ct(l.roundValueFn.value(u.value.min + C), l.innerMin.value, l.innerMax.value - H);
      u.value = { min: Q, max: l.roundValueFn.value(Q + H) };
    } else {
      if (l.focus.value === false) return;
      {
        const H = l.focus.value;
        u.value = { ...u.value, [H]: ct(l.roundValueFn.value(u.value[H] + C), H === "min" ? l.innerMin.value : u.value.min, H === "max" ? l.innerMax.value : u.value.max) };
      }
    }
    z();
  }
  return () => {
    const M = r.getContent(g, y, _, (A) => {
      A.push(S(), F());
    });
    return d("div", { ref: a, class: "q-range " + l.classes.value + (e.modelValue.min === null || e.modelValue.max === null ? " q-slider--no-value" : ""), ...l.attributes.value, "aria-valuenow": e.modelValue.min + "|" + e.modelValue.max }, M);
  };
} });
he({ name: "QRating", props: { ...el, ...xn, modelValue: { type: Number, required: true }, max: { type: [String, Number], default: 5 }, icon: [String, Array], iconHalf: [String, Array], iconSelected: [String, Array], iconAriaLabel: [String, Array], color: [String, Array], colorHalf: [String, Array], colorSelected: [String, Array], noReset: Boolean, noDimming: Boolean, readonly: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = xe(), r = tl(e), a = Ba(e), o = kl(a), i = U(0);
  let u = {};
  const c = v(() => e.readonly !== true && e.disable !== true), s = v(() => `q-rating row inline items-center q-rating--${c.value === true ? "" : "non-"}editable` + (e.noDimming === true ? " q-rating--no-dimming" : "") + (e.disable === true ? " disabled" : "") + (e.color !== void 0 && Array.isArray(e.color) === false ? ` text-${e.color}` : "")), f = v(() => {
    const p = Array.isArray(e.icon) === true ? e.icon.length : 0, b = Array.isArray(e.iconSelected) === true ? e.iconSelected.length : 0, S = Array.isArray(e.iconHalf) === true ? e.iconHalf.length : 0, $ = Array.isArray(e.color) === true ? e.color.length : 0, F = Array.isArray(e.colorSelected) === true ? e.colorSelected.length : 0, z = Array.isArray(e.colorHalf) === true ? e.colorHalf.length : 0;
    return { iconLen: p, icon: p > 0 ? e.icon[p - 1] : e.icon, selIconLen: b, selIcon: b > 0 ? e.iconSelected[b - 1] : e.iconSelected, halfIconLen: S, halfIcon: S > 0 ? e.iconHalf[b - 1] : e.iconHalf, colorLen: $, color: $ > 0 ? e.color[$ - 1] : e.color, selColorLen: F, selColor: F > 0 ? e.colorSelected[F - 1] : e.colorSelected, halfColorLen: z, halfColor: z > 0 ? e.colorHalf[z - 1] : e.colorHalf };
  }), m = v(() => {
    if (typeof e.iconAriaLabel == "string") {
      const p = e.iconAriaLabel.length !== 0 ? `${e.iconAriaLabel} ` : "";
      return (b) => `${p}${b}`;
    }
    if (Array.isArray(e.iconAriaLabel) === true) {
      const p = e.iconAriaLabel.length;
      if (p > 0) return (b) => e.iconAriaLabel[Math.min(b, p) - 1];
    }
    return (p, b) => `${b} ${p}`;
  }), h = v(() => {
    const p = [], b = f.value, S = Math.ceil(e.modelValue), $ = c.value === true ? 0 : null, F = e.iconHalf === void 0 || S === e.modelValue ? -1 : S;
    for (let z = 1; z <= e.max; z++) {
      const B = i.value === 0 && e.modelValue >= z || i.value > 0 && i.value >= z, L = F === z && i.value < z, D = i.value > 0 && (L === true ? S : e.modelValue) >= z && i.value < z, M = L === true ? z <= b.halfColorLen ? e.colorHalf[z - 1] : b.halfColor : b.selColor !== void 0 && B === true ? z <= b.selColorLen ? e.colorSelected[z - 1] : b.selColor : z <= b.colorLen ? e.color[z - 1] : b.color, A = (L === true ? z <= b.halfIconLen ? e.iconHalf[z - 1] : b.halfIcon : b.selIcon !== void 0 && (B === true || D === true) ? z <= b.selIconLen ? e.iconSelected[z - 1] : b.selIcon : z <= b.iconLen ? e.icon[z - 1] : b.icon) || l.iconSet.rating.icon;
      p.push({ name: (L === true ? z <= b.halfIconLen ? e.iconHalf[z - 1] : b.halfIcon : b.selIcon !== void 0 && (B === true || D === true) ? z <= b.selIconLen ? e.iconSelected[z - 1] : b.selIcon : z <= b.iconLen ? e.icon[z - 1] : b.icon) || l.iconSet.rating.icon, attrs: { tabindex: $, role: "radio", "aria-checked": e.modelValue === z ? "true" : "false", "aria-label": m.value(z, A) }, iconClass: "q-rating__icon" + (B === true || L === true ? " q-rating__icon--active" : "") + (D === true ? " q-rating__icon--exselected" : "") + (i.value === z ? " q-rating__icon--hovered" : "") + (M !== void 0 ? ` text-${M}` : "") });
    }
    return p;
  }), g = v(() => {
    const p = { role: "radiogroup" };
    return e.disable === true && (p["aria-disabled"] = "true"), e.readonly === true && (p["aria-readonly"] = "true"), p;
  });
  function _(p) {
    if (c.value === true) {
      const b = ct(parseInt(p, 10), 1, parseInt(e.max, 10)), S = e.noReset !== true && e.modelValue === b ? 0 : b;
      S !== e.modelValue && n("update:modelValue", S), i.value = 0;
    }
  }
  function w(p) {
    c.value === true && (i.value = p);
  }
  function k(p, b) {
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
    return h.value.forEach(({ iconClass: b, name: S, attrs: $ }, F) => {
      const z = F + 1;
      p.push(d("div", { key: z, ref: (B) => {
        u[`rt${z}`] = B;
      }, class: "q-rating__icon-container flex flex-center", ...$, onClick() {
        _(z);
      }, onMouseover() {
        w(z);
      }, onMouseout: y, onFocus() {
        w(z);
      }, onBlur: y, onKeyup(B) {
        k(B, z);
      } }, Tt(t[`tip-${z}`], [d(et, { class: b, name: S })])));
    }), e.name !== void 0 && e.disable !== true && o(p, "push"), d("div", { class: s.value, style: r.value, ...g.value }, p);
  };
} });
he({ name: "QResponsive", props: Ks, setup(e, { slots: t }) {
  const n = Ws(e);
  return () => d("div", { class: "q-responsive" }, [d("div", { class: "q-responsive__filler overflow-hidden" }, [d("div", { style: n.value })]), d("div", { class: "q-responsive__content absolute-full fit" }, $e(t.default))]);
} });
var K1 = he({ props: ["store", "barStyle", "verticalBarStyle", "horizontalBarStyle"], setup(e) {
  return () => [d("div", { class: e.store.scroll.vertical.barClass.value, style: [e.barStyle, e.verticalBarStyle], "aria-hidden": "true", onMousedown: e.store.onVerticalMousedown }), d("div", { class: e.store.scroll.horizontal.barClass.value, style: [e.barStyle, e.horizontalBarStyle], "aria-hidden": "true", onMousedown: e.store.onHorizontalMousedown }), cn(d("div", { ref: e.store.scroll.vertical.ref, class: e.store.scroll.vertical.thumbClass.value, style: e.store.scroll.vertical.style.value, "aria-hidden": "true" }), e.store.thumbVertDir), cn(d("div", { ref: e.store.scroll.horizontal.ref, class: e.store.scroll.horizontal.thumbClass.value, style: e.store.scroll.horizontal.style.value, "aria-hidden": "true" }), e.store.thumbHorizDir)];
} }), Dd = ["vertical", "horizontal"], au = { vertical: { offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y" }, horizontal: { offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x" } }, Id = { prevent: true, mouse: true, mouseAllDir: true }, zd = (e) => e >= 250 ? 50 : Math.ceil(e / 5), W1 = he({ name: "QScrollArea", props: { ...nt, thumbStyle: Object, verticalThumbStyle: Object, horizontalThumbStyle: Object, barStyle: [Array, String, Object], verticalBarStyle: [Array, String, Object], horizontalBarStyle: [Array, String, Object], verticalOffset: { type: Array, default: [0, 0] }, horizontalOffset: { type: Array, default: [0, 0] }, contentStyle: [Array, String, Object], contentActiveStyle: [Array, String, Object], delay: { type: [String, Number], default: 1e3 }, visible: { type: Boolean, default: null }, tabindex: [String, Number], onScroll: Function }, setup(e, { slots: t, emit: n }) {
  const l = U(false), r = U(false), a = U(false), o = { vertical: U(0), horizontal: U(0) }, i = { vertical: { ref: U(null), position: U(0), size: U(0) }, horizontal: { ref: U(null), position: U(0), size: U(0) } }, { proxy: u } = xe(), c = lt(e, u.$q);
  let s = null, f;
  const m = U(null), h = v(() => "q-scrollarea" + (c.value === true ? " q-scrollarea--dark" : ""));
  Object.assign(o, { verticalInner: v(() => o.vertical.value - e.verticalOffset[0] - e.verticalOffset[1]), horizontalInner: v(() => o.horizontal.value - e.horizontalOffset[0] - e.horizontalOffset[1]) }), i.vertical.percentage = v(() => {
    const C = i.vertical.size.value - o.vertical.value;
    if (C <= 0) return 0;
    const H = ct(i.vertical.position.value / C, 0, 1);
    return Math.round(H * 1e4) / 1e4;
  }), i.vertical.thumbHidden = v(() => (e.visible === null ? a.value : e.visible) !== true && l.value === false && r.value === false || i.vertical.size.value <= o.vertical.value + 1), i.vertical.thumbStart = v(() => e.verticalOffset[0] + i.vertical.percentage.value * (o.verticalInner.value - i.vertical.thumbSize.value)), i.vertical.thumbSize = v(() => Math.round(ct(o.verticalInner.value * o.verticalInner.value / i.vertical.size.value, zd(o.verticalInner.value), o.verticalInner.value))), i.vertical.style = v(() => ({ ...e.thumbStyle, ...e.verticalThumbStyle, top: `${i.vertical.thumbStart.value}px`, height: `${i.vertical.thumbSize.value}px`, right: `${e.horizontalOffset[1]}px` })), i.vertical.thumbClass = v(() => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (i.vertical.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), i.vertical.barClass = v(() => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (i.vertical.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : "")), i.horizontal.percentage = v(() => {
    const C = i.horizontal.size.value - o.horizontal.value;
    if (C <= 0) return 0;
    const H = ct(Math.abs(i.horizontal.position.value) / C, 0, 1);
    return Math.round(H * 1e4) / 1e4;
  }), i.horizontal.thumbHidden = v(() => (e.visible === null ? a.value : e.visible) !== true && l.value === false && r.value === false || i.horizontal.size.value <= o.horizontal.value + 1), i.horizontal.thumbStart = v(() => e.horizontalOffset[0] + i.horizontal.percentage.value * (o.horizontalInner.value - i.horizontal.thumbSize.value)), i.horizontal.thumbSize = v(() => Math.round(ct(o.horizontalInner.value * o.horizontalInner.value / i.horizontal.size.value, zd(o.horizontalInner.value), o.horizontalInner.value))), i.horizontal.style = v(() => ({ ...e.thumbStyle, ...e.horizontalThumbStyle, [u.$q.lang.rtl === true ? "right" : "left"]: `${i.horizontal.thumbStart.value}px`, width: `${i.horizontal.thumbSize.value}px`, bottom: `${e.verticalOffset[1]}px` })), i.horizontal.thumbClass = v(() => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (i.horizontal.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), i.horizontal.barClass = v(() => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (i.horizontal.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : ""));
  const g = v(() => i.vertical.thumbHidden.value === true && i.horizontal.thumbHidden.value === true ? e.contentStyle : e.contentActiveStyle);
  function _() {
    const C = {};
    return Dd.forEach((H) => {
      const Q = i[H];
      Object.assign(C, { [H + "Position"]: Q.position.value, [H + "Percentage"]: Q.percentage.value, [H + "Size"]: Q.size.value, [H + "ContainerSize"]: o[H].value, [H + "ContainerInnerSize"]: o[H + "Inner"].value });
    }), C;
  }
  const w = Ar(() => {
    const C = _();
    C.ref = u, n("scroll", C);
  }, 0);
  function k(C, H, Q) {
    if (Dd.includes(C) === false) {
      console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
      return;
    }
    (C === "vertical" ? wr : Ii)(m.value, H, Q);
  }
  function y({ height: C, width: H }) {
    let Q = false;
    o.vertical.value !== C && (o.vertical.value = C, Q = true), o.horizontal.value !== H && (o.horizontal.value = H, Q = true), Q === true && F();
  }
  function p({ position: C }) {
    let H = false;
    i.vertical.position.value !== C.top && (i.vertical.position.value = C.top, H = true), i.horizontal.position.value !== C.left && (i.horizontal.position.value = C.left, H = true), H === true && F();
  }
  function b({ height: C, width: H }) {
    i.horizontal.size.value !== H && (i.horizontal.size.value = H, F()), i.vertical.size.value !== C && (i.vertical.size.value = C, F());
  }
  function S(C, H) {
    const Q = i[H];
    if (C.isFirst === true) {
      if (Q.thumbHidden.value === true) return;
      f = Q.position.value, r.value = true;
    } else if (r.value !== true) return;
    C.isFinal === true && (r.value = false);
    const K = au[H], W = (Q.size.value - o[H].value) / (o[H + "Inner"].value - Q.thumbSize.value), ie = C.distance[K.dist], ye = f + (C.direction === K.dir ? 1 : -1) * ie * W;
    z(ye, H);
  }
  function $(C, H) {
    const Q = i[H];
    if (Q.thumbHidden.value !== true) {
      const K = H === "vertical" ? e.verticalOffset[0] : e.horizontalOffset[0], W = C[au[H].offset] - K, ie = Q.thumbStart.value - K;
      if (W < ie || W > ie + Q.thumbSize.value) {
        const ye = W - Q.thumbSize.value / 2, G = ct(ye / (o[H + "Inner"].value - Q.thumbSize.value), 0, 1);
        z(G * Math.max(0, Q.size.value - o[H].value), H);
      }
      Q.ref.value !== null && Q.ref.value.dispatchEvent(new MouseEvent(C.type, C));
    }
  }
  function F() {
    l.value = true, s !== null && clearTimeout(s), s = setTimeout(() => {
      s = null, l.value = false;
    }, e.delay), e.onScroll !== void 0 && w();
  }
  function z(C, H) {
    m.value[au[H].scroll] = C;
  }
  let B = null;
  function L() {
    B !== null && clearTimeout(B), B = setTimeout(() => {
      B = null, a.value = true;
    }, u.$q.platform.is.ios ? 50 : 0);
  }
  function D() {
    B !== null && (clearTimeout(B), B = null), a.value = false;
  }
  let M = null;
  ge(() => u.$q.lang.rtl, (C) => {
    m.value !== null && Ii(m.value, Math.abs(i.horizontal.position.value) * (C === true ? -1 : 1));
  }), Vn(() => {
    M = { top: i.vertical.position.value, left: i.horizontal.position.value };
  }), Sl(() => {
    if (M === null) return;
    const C = m.value;
    C !== null && (Ii(C, M.left), wr(C, M.top));
  }), Ke(w.cancel), Object.assign(u, { getScrollTarget: () => m.value, getScroll: _, getScrollPosition: () => ({ top: i.vertical.position.value, left: i.horizontal.position.value }), getScrollPercentage: () => ({ top: i.vertical.percentage.value, left: i.horizontal.percentage.value }), setScrollPosition: k, setScrollPercentage(C, H, Q) {
    k(C, H * (i[C].size.value - o[C].value) * (C === "horizontal" && u.$q.lang.rtl === true ? -1 : 1), Q);
  } });
  const A = { scroll: i, thumbVertDir: [[bn, (C) => {
    S(C, "vertical");
  }, void 0, { vertical: true, ...Id }]], thumbHorizDir: [[bn, (C) => {
    S(C, "horizontal");
  }, void 0, { horizontal: true, ...Id }]], onVerticalMousedown(C) {
    $(C, "vertical");
  }, onHorizontalMousedown(C) {
    $(C, "horizontal");
  } };
  return () => d("div", { class: h.value, onMouseenter: L, onMouseleave: D }, [d("div", { ref: m, class: "q-scrollarea__container scroll relative-position fit hide-scrollbar", tabindex: e.tabindex !== void 0 ? e.tabindex : void 0 }, [d("div", { class: "q-scrollarea__content absolute", style: g.value }, Tt(t.default, [d(Ql, { debounce: 0, onResize: b })])), d(Vh, { axis: "both", onScroll: p })]), d(Ql, { debounce: 0, onResize: y }), d(K1, { store: A, barStyle: e.barStyle, verticalBarStyle: e.verticalBarStyle, horizontalBarStyle: e.horizontalBarStyle })]);
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
    const f = u.getBoundingClientRect(), m = t.getBoundingClientRect();
    r === true ? (s.offsetStart += m.left - f.left, s.offsetEnd -= m.width) : (s.offsetStart += m.top - f.top, s.offsetEnd -= m.height), e !== window && (s.offsetStart += s.scrollStart), s.offsetEnd += s.scrollMaxSize - s.offsetStart;
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
  let c, s, f, m = [], h;
  const g = U(0), _ = U(0), w = U({}), k = U(null), y = U(null), p = U(null), b = U({ from: 0, to: 0 }), S = v(() => a.tableColspan !== void 0 ? a.tableColspan : 100);
  l === void 0 && (l = v(() => a.virtualScrollItemSize));
  const $ = v(() => l.value + ";" + a.virtualScrollHorizontal), F = v(() => $.value + ";" + a.virtualScrollSliceRatioBefore + ";" + a.virtualScrollSliceRatioAfter);
  ge(F, () => {
    Q();
  }), ge($, z);
  function z() {
    H(s, true);
  }
  function B(G) {
    H(G === void 0 ? s : G);
  }
  function L(G, R) {
    const re = t();
    if (re == null || re.nodeType === 8) return;
    const P = ou(re, n(), k.value, y.value, a.virtualScrollHorizontal, u.lang.rtl, a.virtualScrollStickySizeStart, a.virtualScrollStickySizeEnd);
    f !== P.scrollViewSize && Q(P.scrollViewSize), M(re, P, Math.min(e.value - 1, Math.max(0, parseInt(G, 10) || 0)), 0, Y1.indexOf(R) !== -1 ? R : s !== -1 && G > s ? "end" : "start");
  }
  function D() {
    const G = t();
    if (G == null || G.nodeType === 8) return;
    const R = ou(G, n(), k.value, y.value, a.virtualScrollHorizontal, u.lang.rtl, a.virtualScrollStickySizeStart, a.virtualScrollStickySizeEnd), re = e.value - 1, P = R.scrollMaxSize - R.offsetStart - R.offsetEnd - _.value;
    if (c === R.scrollStart) return;
    if (R.scrollMaxSize <= 0) {
      M(G, R, 0, 0);
      return;
    }
    f !== R.scrollViewSize && Q(R.scrollViewSize), A(b.value.from);
    const J = Math.floor(R.scrollMaxSize - Math.max(R.scrollViewSize, R.offsetEnd) - Math.min(h[re], R.scrollViewSize / 2));
    if (J > 0 && Math.ceil(R.scrollStart) >= J) {
      M(G, R, re, R.scrollMaxSize - R.offsetEnd - m.reduce(xr, 0));
      return;
    }
    let T = 0, E = R.scrollStart - R.offsetStart, X = E;
    if (E <= P && E + R.scrollViewSize >= g.value) E -= g.value, T = b.value.from, X = E;
    else for (let O = 0; E >= m[O] && T < re; O++) E -= m[O], T += kn;
    for (; E > 0 && T < re; ) E -= h[T], E > -R.scrollViewSize ? (T++, X = E) : X = h[T] + E;
    M(G, R, T, X);
  }
  function M(G, R, re, P, J) {
    const T = typeof J == "string" && J.indexOf("-force") !== -1, E = T === true ? J.replace("-force", "") : J, X = E !== void 0 ? E : "start";
    let O = Math.max(0, re - w.value[X]), le = O + w.value.total;
    le > e.value && (le = e.value, O = Math.max(0, le - w.value.total)), c = R.scrollStart;
    const be = O !== b.value.from || le !== b.value.to;
    if (be === false && E === void 0) {
      W(re);
      return;
    }
    const { activeElement: x } = document, q = p.value;
    be === true && q !== null && q !== x && q.contains(x) === true && (q.addEventListener("focusout", C), setTimeout(() => {
      q == null ? void 0 : q.removeEventListener("focusout", C);
    })), X1(q, re - O);
    const V = E !== void 0 ? h.slice(O, re).reduce(xr, 0) : 0;
    if (be === true) {
      const te = le >= b.value.from && O <= b.value.to ? b.value.to : le;
      b.value = { from: O, to: te }, g.value = Nr(m, h, 0, O), _.value = Nr(m, h, le, e.value), requestAnimationFrame(() => {
        b.value.to !== le && c === R.scrollStart && (b.value = { from: b.value.from, to: le }, _.value = Nr(m, h, le, e.value));
      });
    }
    requestAnimationFrame(() => {
      if (c !== R.scrollStart) return;
      be === true && A(O);
      const te = h.slice(O, re).reduce(xr, 0), ae = te + R.offsetStart + g.value, Y = ae + h[re];
      let fe = ae + P;
      if (E !== void 0) {
        const N = te - V, ne = R.scrollStart + N;
        fe = T !== true && ne < ae && Y < ne + R.scrollViewSize ? ne : E === "end" ? Y - R.scrollViewSize : ae - (E === "start" ? 0 : Math.round((R.scrollViewSize - h[re]) / 2));
      }
      c = fe, Nd(G, fe, a.virtualScrollHorizontal, u.lang.rtl), W(re);
    });
  }
  function A(G) {
    const R = p.value;
    if (R) {
      const re = zh.call(R.children, (O) => O.classList && O.classList.contains("q-virtual-scroll--skip") === false), P = re.length, J = a.virtualScrollHorizontal === true ? (O) => O.getBoundingClientRect().width : (O) => O.offsetHeight;
      let T = G, E, X;
      for (let O = 0; O < P; ) {
        for (E = J(re[O]), O++; O < P && re[O].classList.contains("q-virtual-scroll--with-prev") === true; ) E += J(re[O]), O++;
        X = E - h[T], X !== 0 && (h[T] += X, m[Math.floor(T / kn)] += X), T++;
      }
    }
  }
  function C() {
    var _a3;
    (_a3 = p.value) == null ? void 0 : _a3.focus();
  }
  function H(G, R) {
    const re = 1 * l.value;
    (R === true || Array.isArray(h) === false) && (h = []);
    const P = h.length;
    h.length = e.value;
    for (let T = e.value - 1; T >= P; T--) h[T] = re;
    const J = Math.floor((e.value - 1) / kn);
    m = [];
    for (let T = 0; T <= J; T++) {
      let E = 0;
      const X = Math.min((T + 1) * kn, e.value);
      for (let O = T * kn; O < X; O++) E += h[O];
      m.push(E);
    }
    s = -1, c = void 0, g.value = Nr(m, h, 0, b.value.from), _.value = Nr(m, h, b.value.to, e.value), G >= 0 ? (A(b.value.from), We(() => {
      L(G);
    })) : ie();
  }
  function Q(G) {
    if (G === void 0 && typeof window < "u") {
      const E = t();
      E != null && E.nodeType !== 8 && (G = ou(E, n(), k.value, y.value, a.virtualScrollHorizontal, u.lang.rtl, a.virtualScrollStickySizeStart, a.virtualScrollStickySizeEnd).scrollViewSize);
    }
    f = G;
    const R = parseFloat(a.virtualScrollSliceRatioBefore) || 0, re = parseFloat(a.virtualScrollSliceRatioAfter) || 0, P = 1 + R + re, J = G === void 0 || G <= 0 ? 1 : Math.ceil(G / l.value), T = Math.max(1, J, Math.ceil((a.virtualScrollSliceSize > 0 ? a.virtualScrollSliceSize : 10) / P));
    w.value = { total: Math.ceil(T * P), start: Math.ceil(T * R), center: Math.ceil(T * (0.5 + R)), end: Math.ceil(T * (1 + R)), view: J };
  }
  function K(G, R) {
    const re = a.virtualScrollHorizontal === true ? "width" : "height", P = { ["--q-virtual-scroll-item-" + re]: l.value + "px" };
    return [G === "tbody" ? d(G, { class: "q-virtual-scroll__padding", key: "before", ref: k }, [d("tr", [d("td", { style: { [re]: `${g.value}px`, ...P }, colspan: S.value })])]) : d(G, { class: "q-virtual-scroll__padding", key: "before", ref: k, style: { [re]: `${g.value}px`, ...P } }), d(G, { class: "q-virtual-scroll__content", key: "content", ref: p, tabindex: -1 }, R.flat()), G === "tbody" ? d(G, { class: "q-virtual-scroll__padding", key: "after", ref: y }, [d("tr", [d("td", { style: { [re]: `${_.value}px`, ...P }, colspan: S.value })])]) : d(G, { class: "q-virtual-scroll__padding", key: "after", ref: y, style: { [re]: `${_.value}px`, ...P } })];
  }
  function W(G) {
    s !== G && (a.onVirtualScroll !== void 0 && o("virtualScroll", { index: G, from: b.value.from, to: b.value.to - 1, direction: G < s ? "decrease" : "increase", ref: i }), s = G);
  }
  Q();
  const ie = Ar(D, u.platform.is.ios === true ? 120 : 35);
  ei(() => {
    Q();
  });
  let ye = false;
  return Vn(() => {
    ye = true;
  }), Sl(() => {
    if (ye !== true) return;
    const G = t();
    c !== void 0 && G !== void 0 && G !== null && G.nodeType !== 8 ? Nd(G, c, a.virtualScrollHorizontal, u.lang.rtl) : L(s);
  }), __QUASAR_SSR__ || Ke(() => {
    ie.cancel();
  }), Object.assign(i, { scrollTo: L, reset: z, refresh: B }), { virtualScrollSliceRange: b, virtualScrollSliceSizeComputed: w, setVirtualScrollSize: Q, onVirtualScrollEvt: ie, localResetVirtualScroll: H, padVirtualScroll: K, scrollTo: L, reset: z, refresh: B };
}
var Hd = (e) => ["add", "add-unique", "toggle"].includes(e), G1 = ".*+?^${}()|[]\\", Z1 = Object.keys(gi);
function iu(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (l) => l !== null && typeof l == "object" && n in l ? l[n] : l;
}
var J1 = he({ name: "QSelect", inheritAttrs: false, props: { ...Yu, ...xn, ...gi, modelValue: { required: true }, multiple: Boolean, displayValue: [String, Number], displayValueHtml: Boolean, dropdownIcon: String, options: { type: Array, default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], hideSelected: Boolean, hideDropdownIcon: Boolean, fillInput: Boolean, maxValues: [Number, String], optionsDense: Boolean, optionsDark: { type: Boolean, default: null }, optionsSelectedClass: String, optionsHtml: Boolean, optionsCover: Boolean, menuShrink: Boolean, menuAnchor: String, menuSelf: String, menuOffset: Array, popupContentClass: String, popupContentStyle: [String, Array, Object], popupNoRouteDismiss: Boolean, useInput: Boolean, useChips: Boolean, newValueMode: { type: String, validator: Hd }, mapOptions: Boolean, emitValue: Boolean, disableTabSelection: Boolean, inputDebounce: { type: [Number, String], default: 500 }, inputClass: [Array, String, Object], inputStyle: [Array, String, Object], tabindex: { type: [String, Number], default: 0 }, autocomplete: String, transitionShow: {}, transitionHide: {}, transitionDuration: {}, behavior: { type: String, validator: (e) => ["default", "menu", "dialog"].includes(e), default: "default" }, virtualScrollItemSize: Yu.virtualScrollItemSize.type, onNewValue: Function, onFilter: Function }, emits: [...bi, "add", "remove", "inputValue", "keyup", "keypress", "keydown", "popupShow", "popupHide", "filterAbort"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = xe(), { $q: r } = l, a = U(false), o = U(false), i = U(-1), u = U(""), c = U(false), s = U(false);
  let f = null, m = null, h, g, _, w = null, k, y, p, b;
  const S = U(null), $ = U(null), F = U(null), z = U(null), B = U(null), L = $s(e), D = Lh(ve), M = v(() => Array.isArray(e.options) ? e.options.length : 0), A = v(() => e.virtualScrollItemSize === void 0 ? e.optionsDense === true ? 24 : 48 : e.virtualScrollItemSize), { virtualScrollSliceRange: C, virtualScrollSliceSizeComputed: H, localResetVirtualScroll: Q, padVirtualScroll: K, onVirtualScrollEvt: W, scrollTo: ie, setVirtualScrollSize: ye } = jh({ virtualScrollLength: M, getVirtualScrollTarget: Ut, getVirtualScrollEl: Ct, virtualScrollItemSizeComputed: A }), G = pi(), R = v(() => {
    const ee = e.mapOptions === true && e.multiple !== true, Ae = e.modelValue !== void 0 && (e.modelValue !== null || ee === true) ? e.multiple === true && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
    if (e.mapOptions === true && Array.isArray(e.options) === true) {
      const Pe = e.mapOptions === true && h !== void 0 ? h : [], tt = Ae.map((gt) => ue(gt, Pe));
      return e.modelValue === null && ee === true ? tt.filter((gt) => gt !== null) : tt;
    }
    return Ae;
  }), re = v(() => {
    const ee = {};
    return Z1.forEach((Ae) => {
      const Pe = e[Ae];
      Pe !== void 0 && (ee[Ae] = Pe);
    }), ee;
  }), P = v(() => e.optionsDark === null ? G.isDark.value : e.optionsDark), J = v(() => Wl(R.value)), T = v(() => {
    let ee = "q-field__input q-placeholder col";
    return e.hideSelected === true || R.value.length === 0 ? [ee, e.inputClass] : (ee += " q-field__input--padding", e.inputClass === void 0 ? ee : [ee, e.inputClass]);
  }), E = v(() => (e.virtualScrollHorizontal === true ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")), X = v(() => M.value === 0), O = v(() => R.value.map((ee) => oe.value(ee)).join(", ")), le = v(() => e.displayValue !== void 0 ? e.displayValue : O.value), be = v(() => e.optionsHtml === true ? () => true : (ee) => (ee == null ? void 0 : ee.html) === true), x = v(() => e.displayValueHtml === true || e.displayValue === void 0 && (e.optionsHtml === true || R.value.some(be.value))), q = v(() => G.focused.value === true ? e.tabindex : -1), V = v(() => {
    const ee = { tabindex: e.tabindex, role: "combobox", "aria-label": e.label, "aria-readonly": e.readonly === true ? "true" : "false", "aria-autocomplete": e.useInput === true ? "list" : "none", "aria-expanded": a.value === true ? "true" : "false", "aria-controls": `${G.targetUid.value}_lb` };
    return i.value >= 0 && (ee["aria-activedescendant"] = `${G.targetUid.value}_${i.value}`), ee;
  }), te = v(() => ({ id: `${G.targetUid.value}_lb`, role: "listbox", "aria-multiselectable": e.multiple === true ? "true" : "false" })), ae = v(() => R.value.map((ee, Ae) => ({ index: Ae, opt: ee, html: be.value(ee), selected: true, removeAtIndex: Me, toggleOption: Ve, tabindex: q.value }))), Y = v(() => {
    if (M.value === 0) return [];
    const { from: ee, to: Ae } = C.value;
    return e.options.slice(ee, Ae).map((Pe, tt) => {
      const gt = j.value(Pe) === true, vt = _e2(Pe) === true, Nt = ee + tt, Pt = { clickable: true, active: vt, activeClass: ne.value, manualFocus: true, focused: false, disable: gt, tabindex: -1, dense: e.optionsDense, dark: P.value, role: "option", "aria-selected": vt === true ? "true" : "false", id: `${G.targetUid.value}_${Nt}`, onClick: () => {
        Ve(Pe);
      } };
      return gt !== true && (i.value === Nt && (Pt.focused = true), r.platform.is.desktop === true && (Pt.onMousemove = () => {
        a.value === true && ce(Nt);
      })), { index: Nt, opt: Pe, html: be.value(Pe), label: oe.value(Pe), selected: Pt.active, focused: Pt.focused, toggleOption: Ve, setOptionIndex: ce, itemProps: Pt };
    });
  }), fe = v(() => e.dropdownIcon !== void 0 ? e.dropdownIcon : r.iconSet.arrow.dropdown), N = v(() => e.optionsCover === false && e.outlined !== true && e.standout !== true && e.borderless !== true && e.rounded !== true), ne = v(() => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : ""), de = v(() => iu(e.optionValue, "value")), oe = v(() => iu(e.optionLabel, "label")), j = v(() => iu(e.optionDisable, "disable")), se = v(() => R.value.map(de.value)), we = v(() => {
    const ee = { onInput: ve, onChange: D, onKeydown: it, onKeyup: Re, onKeypress: Ye, onFocus: Ce, onClick(Ae) {
      g === true && wt(Ae);
    } };
    return ee.onCompositionstart = ee.onCompositionupdate = ee.onCompositionend = D, ee;
  });
  ge(R, (ee) => {
    h = ee, e.useInput === true && e.fillInput === true && e.multiple !== true && G.innerLoading.value !== true && (o.value !== true && a.value !== true || J.value !== true) && (_ !== true && dn(), (o.value === true || a.value === true) && Be(""));
  }, { immediate: true }), ge(() => e.fillInput, dn), ge(a, wi), ge(M, Og);
  function ke(ee) {
    return e.emitValue === true ? de.value(ee) : ee;
  }
  function Te(ee) {
    if (ee !== -1 && ee < R.value.length) if (e.multiple === true) {
      const Ae = e.modelValue.slice();
      n("remove", { index: ee, value: Ae.splice(ee, 1)[0] }), n("update:modelValue", Ae);
    } else n("update:modelValue", null);
  }
  function Me(ee) {
    Te(ee), G.focus();
  }
  function He(ee, Ae) {
    const Pe = ke(ee);
    if (e.multiple !== true) {
      e.fillInput === true && Fe(oe.value(ee), true, true), n("update:modelValue", Pe);
      return;
    }
    if (R.value.length === 0) {
      n("add", { index: 0, value: Pe }), n("update:modelValue", e.multiple === true ? [Pe] : Pe);
      return;
    }
    if (Ae === true && _e2(ee) === true || e.maxValues !== void 0 && e.modelValue.length >= e.maxValues) return;
    const tt = e.modelValue.slice();
    n("add", { index: tt.length, value: Pe }), tt.push(Pe), n("update:modelValue", tt);
  }
  function Ve(ee, Ae) {
    var _a3;
    if (G.editable.value !== true || ee === void 0 || j.value(ee) === true) return;
    const Pe = de.value(ee);
    if (e.multiple !== true) {
      Ae !== true && (Fe(e.fillInput === true ? oe.value(ee) : "", true, true), rt()), (_a3 = $.value) == null ? void 0 : _a3.focus(), (R.value.length === 0 || Tn(de.value(R.value[0]), Pe) !== true) && n("update:modelValue", e.emitValue === true ? Pe : ee);
      return;
    }
    if ((g !== true || c.value === true) && G.focus(), Ce(), R.value.length === 0) {
      const vt = e.emitValue === true ? Pe : ee;
      n("add", { index: 0, value: vt }), n("update:modelValue", e.multiple === true ? [vt] : vt);
      return;
    }
    const tt = e.modelValue.slice(), gt = se.value.findIndex((vt) => Tn(vt, Pe));
    if (gt !== -1) n("remove", { index: gt, value: tt.splice(gt, 1)[0] });
    else {
      if (e.maxValues !== void 0 && tt.length >= e.maxValues) return;
      const vt = e.emitValue === true ? Pe : ee;
      n("add", { index: tt.length, value: vt }), tt.push(vt);
    }
    n("update:modelValue", tt);
  }
  function ce(ee) {
    if (r.platform.is.desktop !== true) return;
    const Ae = ee !== -1 && ee < M.value ? ee : -1;
    i.value !== Ae && (i.value = Ae);
  }
  function pe(ee = 1, Ae) {
    if (a.value === true) {
      let Pe = i.value;
      do
        Pe = Eo(Pe + ee, -1, M.value - 1);
      while (Pe !== -1 && Pe !== i.value && j.value(e.options[Pe]) === true);
      i.value !== Pe && (ce(Pe), ie(Pe), Ae !== true && e.useInput === true && e.fillInput === true && Se(Pe >= 0 ? oe.value(e.options[Pe]) : k, true));
    }
  }
  function ue(ee, Ae) {
    const Pe = (tt) => Tn(de.value(tt), ee);
    return e.options.find(Pe) || Ae.find(Pe) || ee;
  }
  function _e2(ee) {
    const Ae = de.value(ee);
    return se.value.find((Pe) => Tn(Pe, Ae)) !== void 0;
  }
  function Ce(ee) {
    e.useInput === true && $.value !== null && (ee === void 0 || $.value === ee.target && ee.target.value === O.value) && $.value.select();
  }
  function Oe(ee) {
    yn(ee, 27) === true && a.value === true && (wt(ee), rt(), dn()), n("keyup", ee);
  }
  function Re(ee) {
    const { value: Ae } = ee.target;
    if (ee.keyCode !== void 0) {
      Oe(ee);
      return;
    }
    if (ee.target.value = "", f !== null && (clearTimeout(f), f = null), m !== null && (clearTimeout(m), m = null), dn(), typeof Ae == "string" && Ae.length !== 0) {
      const Pe = Ae.toLocaleLowerCase(), tt = (vt) => {
        const Nt = e.options.find((Pt) => String(vt.value(Pt)).toLocaleLowerCase() === Pe);
        return Nt === void 0 ? false : (R.value.indexOf(Nt) === -1 ? Ve(Nt) : rt(), true);
      }, gt = (vt) => {
        tt(de) !== true && vt !== true && tt(oe) !== true && Be(Ae, true, () => gt(true));
      };
      gt();
    } else G.clearValue(ee);
  }
  function Ye(ee) {
    n("keypress", ee);
  }
  function it(ee) {
    if (n("keydown", ee), Xl(ee) === true) return;
    const Ae = u.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0), Pe = ee.shiftKey !== true && e.disableTabSelection !== true && e.multiple !== true && (i.value !== -1 || Ae === true);
    if (ee.keyCode === 27) {
      Dt(ee);
      return;
    }
    if (ee.keyCode === 9 && Pe === false) {
      Le();
      return;
    }
    if (ee.target === void 0 || ee.target.id !== G.targetUid.value || G.editable.value !== true) return;
    if (ee.keyCode === 40 && G.innerLoading.value !== true && a.value === false) {
      je(ee), ze();
      return;
    }
    if (ee.keyCode === 8 && (e.useChips === true || e.clearable === true) && e.hideSelected !== true && u.value.length === 0) {
      e.multiple === true && Array.isArray(e.modelValue) === true ? Te(e.modelValue.length - 1) : e.multiple !== true && e.modelValue !== null && n("update:modelValue", null);
      return;
    }
    (ee.keyCode === 35 || ee.keyCode === 36) && (typeof u.value != "string" || u.value.length === 0) && (je(ee), i.value = -1, pe(ee.keyCode === 36 ? 1 : -1, e.multiple)), (ee.keyCode === 33 || ee.keyCode === 34) && H.value !== void 0 && (je(ee), i.value = Math.max(-1, Math.min(M.value, i.value + (ee.keyCode === 33 ? -1 : 1) * H.value.view)), pe(ee.keyCode === 33 ? 1 : -1, e.multiple)), (ee.keyCode === 38 || ee.keyCode === 40) && (je(ee), pe(ee.keyCode === 38 ? -1 : 1, e.multiple));
    const tt = M.value;
    if ((p === void 0 || b < Date.now()) && (p = ""), tt > 0 && e.useInput !== true && ee.key !== void 0 && ee.key.length === 1 && ee.altKey === false && ee.ctrlKey === false && ee.metaKey === false && (ee.keyCode !== 32 || p.length !== 0)) {
      a.value !== true && ze(ee);
      const gt = ee.key.toLocaleLowerCase(), vt = p.length === 1 && p[0] === gt;
      b = Date.now() + 1500, vt === false && (je(ee), p += gt);
      const Nt = new RegExp("^" + p.split("").map((xi) => G1.indexOf(xi) !== -1 ? "\\" + xi : xi).join(".*"), "i");
      let Pt = i.value;
      if (vt === true || Pt < 0 || Nt.test(oe.value(e.options[Pt])) !== true) do
        Pt = Eo(Pt + 1, -1, tt - 1);
      while (Pt !== i.value && (j.value(e.options[Pt]) === true || Nt.test(oe.value(e.options[Pt])) !== true));
      i.value !== Pt && We(() => {
        ce(Pt), ie(Pt), Pt >= 0 && e.useInput === true && e.fillInput === true && Se(oe.value(e.options[Pt]), true);
      });
      return;
    }
    if (!(ee.keyCode !== 13 && (ee.keyCode !== 32 || e.useInput === true || p !== "") && (ee.keyCode !== 9 || Pe === false))) {
      if (ee.keyCode !== 9 && je(ee), i.value !== -1 && i.value < tt) {
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
      a.value === true ? Le() : G.innerLoading.value !== true && ze();
    }
  }
  function Ct() {
    return g === true ? B.value : F.value !== null && F.value.contentEl !== null ? F.value.contentEl : void 0;
  }
  function Ut() {
    return Ct();
  }
  function nl() {
    return e.hideSelected === true ? [] : t["selected-item"] !== void 0 ? ae.value.map((ee) => t["selected-item"](ee)).slice() : t.selected !== void 0 ? [].concat(t.selected()) : e.useChips === true ? ae.value.map((ee, Ae) => d(Ym, { key: "option-" + Ae, removable: G.editable.value === true && j.value(ee.opt) !== true, dense: true, textColor: e.color, tabindex: q.value, onRemove() {
      ee.removeAtIndex(Ae);
    } }, () => d("span", { class: "ellipsis", [ee.html === true ? "innerHTML" : "textContent"]: oe.value(ee.opt) }))) : [d("span", { class: "ellipsis", [x.value === true ? "innerHTML" : "textContent"]: le.value })];
  }
  function rn() {
    if (X.value === true) return t["no-option"] !== void 0 ? t["no-option"]({ inputValue: u.value }) : void 0;
    const ee = t.option !== void 0 ? t.option : (Pe) => d(Tr, { key: Pe.index, ...Pe.itemProps }, () => d(hn, () => d(Qu, () => d("span", { [Pe.html === true ? "innerHTML" : "textContent"]: Pe.label }))));
    let Ae = K("div", Y.value.map(ee));
    return t["before-options"] !== void 0 && (Ae = t["before-options"]().concat(Ae)), Tt(t["after-options"], Ae);
  }
  function In(ee, Ae) {
    const Pe = Ae === true ? { ...V.value, ...G.splitAttrs.attributes.value } : void 0, tt = { ref: Ae === true ? $ : void 0, key: "i_t", class: T.value, style: e.inputStyle, value: u.value !== void 0 ? u.value : "", type: "search", ...Pe, id: Ae === true ? G.targetUid.value : void 0, maxlength: e.maxlength, autocomplete: e.autocomplete, "data-autofocus": ee === true || e.autofocus === true || void 0, disabled: e.disable === true, readonly: e.readonly === true, ...we.value };
    return ee !== true && g === true && (Array.isArray(tt.class) === true ? tt.class = [...tt.class, "no-pointer-events"] : tt.class += " no-pointer-events"), d("input", tt);
  }
  function ve(ee) {
    f !== null && (clearTimeout(f), f = null), m !== null && (clearTimeout(m), m = null), !(ee && ee.target && ee.target.qComposing === true) && (Se(ee.target.value || ""), _ = true, k = u.value, G.focused.value !== true && (g !== true || c.value === true) && G.focus(), e.onFilter !== void 0 && (f = setTimeout(() => {
      f = null, Be(u.value);
    }, e.inputDebounce)));
  }
  function Se(ee, Ae) {
    u.value !== ee && (u.value = ee, Ae === true || e.inputDebounce === 0 || e.inputDebounce === "0" ? n("inputValue", ee) : m = setTimeout(() => {
      m = null, n("inputValue", ee);
    }, e.inputDebounce));
  }
  function Fe(ee, Ae, Pe) {
    _ = Pe !== true, e.useInput === true && (Se(ee, true), (Ae === true || Pe !== true) && (k = ee), Ae !== true && Be(ee));
  }
  function Be(ee, Ae, Pe) {
    if (e.onFilter === void 0 || Ae !== true && G.focused.value !== true) return;
    G.innerLoading.value === true ? n("filterAbort") : (G.innerLoading.value = true, s.value = true), ee !== "" && e.multiple !== true && R.value.length !== 0 && _ !== true && ee === oe.value(R.value[0]) && (ee = "");
    const tt = setTimeout(() => {
      a.value === true && (a.value = false);
    }, 10);
    w !== null && clearTimeout(w), w = tt, n("filter", ee, (gt, vt) => {
      (Ae === true || G.focused.value === true) && w === tt && (clearTimeout(w), typeof gt == "function" && gt(), s.value = false, We(() => {
        G.innerLoading.value = false, G.editable.value === true && (Ae === true ? a.value === true && rt() : a.value === true ? wi(true) : a.value = true), typeof vt == "function" && We(() => {
          vt(l);
        }), typeof Pe == "function" && We(() => {
          Pe(l);
        });
      }));
    }, () => {
      G.focused.value === true && w === tt && (clearTimeout(w), G.innerLoading.value = false, s.value = false), a.value === true && (a.value = false);
    });
  }
  function Ue() {
    return d(vi, { ref: F, class: E.value, style: e.popupContentStyle, modelValue: a.value, fit: e.menuShrink !== true, cover: e.optionsCover === true && X.value !== true && e.useInput !== true, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, dark: P.value, noParentEvent: true, noRefocus: true, noFocus: true, noRouteDismiss: e.popupNoRouteDismiss, square: N.value, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, separateClosePopup: true, ...te.value, onScrollPassive: W, onBeforeShow: tc, onBeforeHide: pt, onShow: ht }, rn);
  }
  function pt(ee) {
    nc(ee), Le();
  }
  function ht() {
    ye();
  }
  function I(ee) {
    var _a3;
    wt(ee), (_a3 = $.value) == null ? void 0 : _a3.focus(), c.value = true, window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
  }
  function Z(ee) {
    wt(ee), We(() => {
      c.value = false;
    });
  }
  function me() {
    const ee = [d(w1, { class: `col-auto ${G.fieldClass.value}`, ...re.value, for: G.targetUid.value, dark: P.value, square: true, loading: s.value, itemAligned: false, filled: true, stackLabel: u.value.length !== 0, ...G.splitAttrs.listeners.value, onFocus: I, onBlur: Z }, { ...t, rawControl: () => G.getControl(true), before: void 0, after: void 0 })];
    return a.value === true && ee.push(d("div", { ref: B, class: E.value + " scroll", style: e.popupContentStyle, ...te.value, onClick: Dt, onScrollPassive: W }, rn())), d(hi, { ref: z, modelValue: o.value, position: e.useInput === true ? "top" : void 0, transitionShow: y, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, noRouteDismiss: e.popupNoRouteDismiss, onBeforeShow: tc, onBeforeHide: qe, onHide: Ee, onShow: Ge }, () => d("div", { class: "q-select__dialog" + (P.value === true ? " q-select__dialog--dark q-dark" : "") + (c.value === true ? " q-select__dialog--focused" : "") }, ee));
  }
  function qe(ee) {
    nc(ee), z.value !== null && z.value.__updateRefocusTarget(G.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")), G.focused.value = false;
  }
  function Ee(ee) {
    rt(), G.focused.value === false && n("blur", ee), dn();
  }
  function Ge() {
    const ee = document.activeElement;
    (ee === null || ee.id !== G.targetUid.value) && $.value !== null && $.value !== ee && $.value.focus(), ye();
  }
  function Le() {
    o.value !== true && (i.value = -1, a.value === true && (a.value = false), G.focused.value === false && (w !== null && (clearTimeout(w), w = null), G.innerLoading.value === true && (n("filterAbort"), G.innerLoading.value = false, s.value = false)));
  }
  function ze(ee) {
    G.editable.value === true && (g === true ? (G.onControlFocusin(ee), o.value = true, We(() => {
      G.focus();
    })) : G.focus(), e.onFilter !== void 0 ? Be(u.value) : (X.value !== true || t["no-option"] !== void 0) && (a.value = true));
  }
  function rt() {
    o.value = false, Le();
  }
  function dn() {
    e.useInput === true && Fe(e.multiple !== true && e.fillInput === true && R.value.length !== 0 && oe.value(R.value[0]) || "", true, true);
  }
  function wi(ee) {
    let Ae = -1;
    if (ee === true) {
      if (R.value.length !== 0) {
        const Pe = de.value(R.value[0]);
        Ae = e.options.findIndex((tt) => Tn(de.value(tt), Pe));
      }
      Q(Ae);
    }
    ce(Ae);
  }
  function Og(ee, Ae) {
    a.value === true && G.innerLoading.value === false && (Q(-1, true), We(() => {
      a.value === true && G.innerLoading.value === false && (ee > Ae ? Q() : wi(true));
    }));
  }
  function ec() {
    o.value === false && F.value !== null && F.value.updatePosition();
  }
  function tc(ee) {
    ee !== void 0 && wt(ee), n("popupShow", ee), G.hasPopupOpen = true, G.onControlFocusin(ee);
  }
  function nc(ee) {
    ee !== void 0 && wt(ee), n("popupHide", ee), G.hasPopupOpen = false, G.onControlFocusout(ee);
  }
  function lc() {
    g = r.platform.is.mobile !== true && e.behavior !== "dialog" ? false : e.behavior !== "menu" && (e.useInput === true ? t["no-option"] !== void 0 || e.onFilter !== void 0 || X.value === false : true), y = r.platform.is.ios === true && g === true && e.useInput === true ? "fade" : e.transitionShow;
  }
  return Rr(lc), ti(ec), lc(), Ke(() => {
    f !== null && clearTimeout(f), m !== null && clearTimeout(m);
  }), Object.assign(l, { showPopup: ze, hidePopup: rt, removeAtIndex: Te, add: He, toggleOption: Ve, getOptionIndex: () => i.value, setOptionIndex: ce, moveOptionSelection: pe, filter: Be, updateMenuPosition: ec, updateInputValue: Fe, isOptionSelected: _e2, getEmittingOptionValue: ke, isOptionDisabled: (...ee) => j.value.apply(null, ee) === true, getOptionValue: (...ee) => de.value.apply(null, ee), getOptionLabel: (...ee) => oe.value.apply(null, ee) }), Object.assign(G, { innerValue: R, fieldClass: v(() => `q-select q-field--auto-height q-select--with${e.useInput !== true ? "out" : ""}-input q-select--with${e.useChips !== true ? "out" : ""}-chips q-select--${e.multiple === true ? "multiple" : "single"}`), inputRef: S, targetRef: $, hasValue: J, showPopup: ze, floatingLabel: v(() => e.hideSelected !== true && J.value === true || typeof u.value == "number" || u.value.length !== 0 || Wl(e.displayValue)), getControlChild: () => {
    if (G.editable.value !== false && (o.value === true || X.value !== true || t["no-option"] !== void 0)) return g === true ? me() : Ue();
    G.hasPopupOpen === true && (G.hasPopupOpen = false);
  }, controlEvents: { onFocusin(ee) {
    G.onControlFocusin(ee);
  }, onFocusout(ee) {
    G.onControlFocusout(ee, () => {
      dn(), Le();
    });
  }, onClick(ee) {
    var _a3;
    if (Dt(ee), g !== true && a.value === true) {
      Le(), (_a3 = $.value) == null ? void 0 : _a3.focus();
      return;
    }
    ze(ee);
  } }, getControl: (ee) => {
    const Ae = nl(), Pe = ee === true || o.value !== true || g !== true;
    if (e.useInput === true) Ae.push(In(ee, Pe));
    else if (G.editable.value === true) {
      const gt = Pe === true ? V.value : void 0;
      Ae.push(d("input", { ref: Pe === true ? $ : void 0, key: "d_t", class: "q-select__focus-target", id: Pe === true ? G.targetUid.value : void 0, value: le.value, readonly: true, "data-autofocus": ee === true || e.autofocus === true || void 0, ...gt, onKeydown: it, onKeyup: Oe, onKeypress: Ye })), Pe === true && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && Ae.push(d("input", { class: "q-select__autocomplete-input", autocomplete: e.autocomplete, tabindex: -1, onKeyup: Re }));
    }
    if (L.value !== void 0 && e.disable !== true && se.value.length !== 0) {
      const gt = se.value.map((vt) => d("option", { value: vt, selected: true }));
      Ae.push(d("select", { class: "hidden", name: L.value, multiple: e.multiple }, gt));
    }
    const tt = e.useInput === true || Pe !== true ? void 0 : G.splitAttrs.attributes.value;
    return d("div", { class: "q-field__native row items-center", ...tt, ...G.splitAttrs.listeners.value }, Ae);
  }, getInnerAppend: () => e.loading !== true && s.value !== true && e.hideDropdownIcon !== true ? [d(et, { class: "q-select__dropdown-icon" + (a.value === true ? " rotate-180" : ""), name: fe.value })] : null }), yi(G);
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
  const { proxy: l } = xe(), { $q: r } = l, a = lt(e, r), { getCache: o } = Fa(), i = U(null);
  let u = null, c = {}, s = {}, f = {};
  const m = v(() => r.lang.rtl === true ? { left: "right", right: "left" } : { left: "left", right: "right" }), h = v(() => "q-slide-item q-item-type overflow-hidden" + (a.value === true ? " q-slide-item--dark q-dark" : ""));
  function g() {
    i.value.style.transform = "translate(0,0)";
  }
  function _(k, y, p) {
    e.onSlide !== void 0 && n("slide", { side: k, ratio: y, isReset: p });
  }
  function w(k) {
    const y = i.value;
    if (k.isFirst) c = { dir: null, size: { left: 0, right: 0, top: 0, bottom: 0 }, scale: 0 }, y.classList.add("no-transition"), jd.forEach(($) => {
      if (t[$[0]] !== void 0) {
        const F = f[$[0]];
        F.style.transform = "scale(1)", c.size[$[0]] = F.getBoundingClientRect()[$[3]];
      }
    }), c.axis = k.direction === "up" || k.direction === "down" ? "Y" : "X";
    else if (k.isFinal) {
      y.classList.remove("no-transition"), c.scale === 1 ? (y.style.transform = `translate${c.axis}(${c.dir * 100}%)`, u !== null && clearTimeout(u), u = setTimeout(() => {
        u = null, n(c.showing, { reset: g }), n("action", { side: c.showing, reset: g });
      }, 230)) : (y.style.transform = "translate(0,0)", _(c.showing, 0, true));
      return;
    } else k.direction = c.axis === "X" ? k.offset.x < 0 ? "left" : "right" : k.offset.y < 0 ? "up" : "down";
    if (t.left === void 0 && k.direction === m.value.right || t.right === void 0 && k.direction === m.value.left || t.top === void 0 && k.direction === "down" || t.bottom === void 0 && k.direction === "up") {
      y.style.transform = "translate(0,0)";
      return;
    }
    let p, b, S;
    c.axis === "X" ? (b = k.direction === "left" ? -1 : 1, p = b === 1 ? m.value.left : m.value.right, S = k.distance.x) : (b = k.direction === "up" ? -2 : 2, p = b === 2 ? "top" : "bottom", S = k.distance.y), !(c.dir !== null && Math.abs(b) !== Math.abs(c.dir)) && (c.dir !== b && (["left", "right", "top", "bottom"].forEach(($) => {
      s[$] && (s[$].style.visibility = p === $ ? "visible" : "hidden");
    }), c.showing = p, c.dir = b), c.scale = Math.max(0, Math.min(1, (S - 40) / c.size[p])), y.style.transform = `translate${c.axis}(${S * b / Math.abs(b)}px)`, f[p].style.transform = `scale(${c.scale})`, _(p, c.scale, false));
  }
  return Rr(() => {
    s = {}, f = {};
  }), Ke(() => {
    u !== null && clearTimeout(u);
  }), Object.assign(l, { reset: g }), () => {
    const k = [], y = { left: t[m.value.right] !== void 0, right: t[m.value.left] !== void 0, up: t.bottom !== void 0, down: t.top !== void 0 }, p = Object.keys(y).filter((S) => y[S] === true);
    jd.forEach((S) => {
      const $ = S[0];
      t[$] !== void 0 && k.push(d("div", { key: $, ref: (F) => {
        s[$] = F;
      }, class: `q-slide-item__${$} absolute-full row no-wrap items-${S[1]} justify-${S[2]}` + (e[$ + "Color"] !== void 0 ? ` bg-${e[$ + "Color"]}` : "") }, [d("div", { ref: (F) => {
        f[$] = F;
      } }, t[$]())]));
    });
    const b = d("div", { key: `${p.length === 0 ? "only-" : ""} content`, ref: i, class: "q-slide-item__content" }, $e(t.default));
    return p.length === 0 ? k.push(b) : k.push(cn(b, o("dir#" + p.join(""), () => {
      const S = { prevent: true, stop: true, mouse: true };
      return p.forEach(($) => {
        S[$] = true;
      }), [[bn, w, void 0, S]];
    }))), d("div", { class: h.value }, k);
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
var p_ = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g>';
he({ name: "QSpinnerOval", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", innerHTML: p_ });
} });
var y_ = '<path d="M0 50A50 50 0 0 1 50 0L50 50L0 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="0.8s" repeatCount="indefinite"></animateTransform></path><path d="M50 0A50 50 0 0 1 100 50L50 50L50 0" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1.6s" repeatCount="indefinite"></animateTransform></path><path d="M100 50A50 50 0 0 1 50 100L50 50L100 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2.4s" repeatCount="indefinite"></animateTransform></path><path d="M50 100A50 50 0 0 1 0 50L50 50L50 100" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="3.2s" repeatCount="indefinite"></animateTransform></path>';
he({ name: "QSpinnerPie", props: Mt, setup(e) {
  const { cSize: t, classes: n } = Et(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: y_ });
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
  const { proxy: { $q: l } } = xe(), r = lt(e, l), a = U(null), o = { before: U(null), after: U(null) }, i = v(() => `q-splitter no-wrap ${e.horizontal === true ? "q-splitter--horizontal column" : "q-splitter--vertical row"} q-splitter--${e.disable === true ? "disabled" : "workable"}` + (r.value === true ? " q-splitter--dark" : "")), u = v(() => e.horizontal === true ? "height" : "width"), c = v(() => e.reverse !== true ? "before" : "after"), s = v(() => e.limits !== void 0 ? e.limits : e.unit === "%" ? [10, 90] : [50, 1 / 0]);
  function f(S) {
    return (e.unit === "%" ? S : Math.round(S)) + e.unit;
  }
  const m = v(() => ({ [c.value]: { [u.value]: f(e.modelValue) } }));
  let h, g, _, w, k;
  function y(S) {
    if (S.isFirst === true) {
      const F = a.value.getBoundingClientRect()[u.value];
      h = e.horizontal === true ? "up" : "left", g = e.unit === "%" ? 100 : F, _ = Math.min(g, s.value[1], Math.max(s.value[0], e.modelValue)), w = (e.reverse !== true ? 1 : -1) * (e.horizontal === true ? 1 : l.lang.rtl === true ? -1 : 1) * (e.unit === "%" ? F === 0 ? 0 : 100 / F : 1), a.value.classList.add("q-splitter--active");
      return;
    }
    if (S.isFinal === true) {
      k !== e.modelValue && n("update:modelValue", k), a.value.classList.remove("q-splitter--active");
      return;
    }
    const $ = _ + w * (S.direction === h ? -1 : 1) * S.distance[e.horizontal === true ? "y" : "x"];
    k = Math.min(g, s.value[1], Math.max(s.value[0], $)), o[c.value].value.style[u.value] = f(k), e.emitImmediately === true && e.modelValue !== k && n("update:modelValue", k);
  }
  const p = v(() => [[bn, y, void 0, { [e.horizontal === true ? "vertical" : "horizontal"]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
  function b(S, $) {
    S < $[0] ? n("update:modelValue", $[0]) : S > $[1] && n("update:modelValue", $[1]);
  }
  return ge(() => e.modelValue, (S) => {
    b(S, s.value);
  }), ge(() => e.limits, () => {
    We(() => {
      b(e.modelValue, s.value);
    });
  }), () => {
    const S = [d("div", { ref: o.before, class: ["q-splitter__panel q-splitter__before" + (e.reverse === true ? " col" : ""), e.beforeClass], style: m.value.before }, $e(t.before)), d("div", { class: ["q-splitter__separator", e.separatorClass], style: e.separatorStyle, "aria-disabled": e.disable === true ? "true" : void 0 }, [_n("div", { class: "q-splitter__separator-area absolute-full" }, $e(t.separator), "sep", e.disable !== true, () => p.value)]), d("div", { ref: o.after, class: ["q-splitter__panel q-splitter__after" + (e.reverse === true ? "" : " col"), e.afterClass], style: m.value.after }, $e(t.after))];
    return d("div", { class: i.value, ref: a }, Tt(t.default, S));
  };
} });
var Uh = he({ name: "StepHeader", props: { stepper: {}, step: {}, goToPanel: Function }, setup(e, { attrs: t }) {
  const { proxy: { $q: n } } = xe(), l = U(null), r = v(() => e.stepper.modelValue === e.step.name), a = v(() => {
    const w = e.step.disable;
    return w === true || w === "";
  }), o = v(() => {
    const w = e.step.error;
    return w === true || w === "";
  }), i = v(() => {
    const w = e.step.done;
    return a.value === false && (w === true || w === "");
  }), u = v(() => {
    const w = e.step.headerNav, k = w === true || w === "" || w === void 0;
    return a.value === false && e.stepper.headerNav && k;
  }), c = v(() => e.step.prefix && (r.value === false || e.stepper.activeIcon === "none") && (o.value === false || e.stepper.errorIcon === "none") && (i.value === false || e.stepper.doneIcon === "none")), s = v(() => {
    const w = e.step.icon || e.stepper.inactiveIcon;
    if (r.value === true) {
      const k = e.step.activeIcon || e.stepper.activeIcon;
      return k === "none" ? w : k || n.iconSet.stepper.active;
    }
    if (o.value === true) {
      const k = e.step.errorIcon || e.stepper.errorIcon;
      return k === "none" ? w : k || n.iconSet.stepper.error;
    }
    if (a.value === false && i.value === true) {
      const k = e.step.doneIcon || e.stepper.doneIcon;
      return k === "none" ? w : k || n.iconSet.stepper.done;
    }
    return w;
  }), f = v(() => {
    const w = o.value === true ? e.step.errorColor || e.stepper.errorColor : void 0;
    if (r.value === true) {
      const k = e.step.activeColor || e.stepper.activeColor || e.step.color;
      return k !== void 0 ? k : w;
    }
    return w !== void 0 ? w : a.value === false && i.value === true ? e.step.doneColor || e.stepper.doneColor || e.step.color || e.stepper.inactiveColor : e.step.color || e.stepper.inactiveColor;
  }), m = v(() => "q-stepper__tab col-grow flex items-center no-wrap relative-position" + (f.value !== void 0 ? ` text-${f.value}` : "") + (o.value === true ? " q-stepper__tab--error q-stepper__tab--error-with-" + (c.value === true ? "prefix" : "icon") : "") + (r.value === true ? " q-stepper__tab--active" : "") + (i.value === true ? " q-stepper__tab--done" : "") + (u.value === true ? " q-stepper__tab--navigation q-focusable q-hoverable" : "") + (a.value === true ? " q-stepper__tab--disabled" : "")), h = v(() => e.stepper.headerNav !== true ? false : u.value);
  function g() {
    var _a3;
    (_a3 = l.value) == null ? void 0 : _a3.focus(), r.value === false && e.goToPanel(e.step.name);
  }
  function _(w) {
    w.keyCode === 13 && r.value === false && e.goToPanel(e.step.name);
  }
  return () => {
    const w = { class: m.value };
    u.value === true && (w.onClick = g, w.onKeyup = _, Object.assign(w, a.value === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: t.tabindex || 0 }));
    const k = [d("div", { class: "q-focus-helper", tabindex: -1, ref: l }), d("div", { class: "q-stepper__dot row flex-center q-stepper__line relative-position" }, [d("span", { class: "row flex-center" }, [c.value === true ? e.step.prefix : d(et, { name: s.value })])])];
    if (e.step.title !== void 0 && e.step.title !== null) {
      const y = [d("div", { class: "q-stepper__title" }, e.step.title)];
      e.step.caption !== void 0 && e.step.caption !== null && y.push(d("div", { class: "q-stepper__caption" }, e.step.caption)), k.push(d("div", { class: "q-stepper__label q-stepper__line relative-position" }, y));
    }
    return cn(d("div", w, k), [[ci, h.value]]);
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
  const { getCache: a } = Fa(), o = U(null), i = v(() => r.value.modelValue === e.name), u = v(() => l.platform.is.ios !== true && l.platform.is.chrome === true || i.value !== true || r.value.vertical !== true ? {} : { onScroll(f) {
    const { target: m } = f;
    m.scrollTop > 0 && (m.scrollTop = 0), e.onScroll !== void 0 && n("scroll", f);
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
  const n = xe(), l = lt(e, n.proxy.$q), { updatePanelsList: r, isValidPanelName: a, updatePanelIndex: o, getPanelContent: i, getPanels: u, panelDirectives: c, goToPanel: s, keepAliveProps: f, needsUniqueKeepAliveWrapper: m } = Vs();
  gn(dm, v(() => ({ goToPanel: s, keepAliveProps: f, needsUniqueKeepAliveWrapper: m, ...e })));
  const h = v(() => `q-stepper q-stepper--${e.vertical === true ? "vertical" : "horizontal"}` + (e.flat === true ? " q-stepper--flat" : "") + (e.bordered === true ? " q-stepper--bordered" : "") + (l.value === true ? " q-stepper--dark q-dark" : "")), g = v(() => `q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels === true ? "alternative" : "standard"}-labels` + (e.flat === false || e.bordered === true ? " q-stepper__header--border" : "") + (e.contracted === true ? " q-stepper__header--contracted" : "") + (e.headerClass !== void 0 ? ` ${e.headerClass}` : ""));
  function _() {
    const w = $e(t.message, []);
    if (e.vertical === true) {
      a(e.modelValue) && o();
      const k = d("div", { class: "q-stepper__content" }, $e(t.default));
      return w === void 0 ? [k] : w.concat(k);
    }
    return [d("div", { class: g.value }, u().map((k) => {
      const y = k_(k.props);
      return d(Uh, { key: y.name, stepper: e, step: y, goToPanel: s });
    })), w, _n("div", { class: "q-stepper__content q-panel-parent" }, i(), "cont", e.swipeable, () => c.value)];
  }
  return () => (r(t), d("div", { class: h.value }, Tt(t.navigation, _())));
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
  const r = U(null), a = v(() => e.itemsSize >= 0 && e.itemsFn !== void 0 ? parseInt(e.itemsSize, 10) : Array.isArray(e.items) ? e.items.length : 0), { virtualScrollSliceRange: o, localResetVirtualScroll: i, padVirtualScroll: u, onVirtualScrollEvt: c } = jh({ virtualScrollLength: a, getVirtualScrollTarget: g, getVirtualScrollEl: h }), s = v(() => {
    if (a.value === 0) return [];
    const y = (p, b) => ({ index: o.value.from + b, item: p });
    return e.itemsFn === void 0 ? e.items.slice(o.value.from, o.value.to).map(y) : e.itemsFn(o.value.from, o.value.to - o.value.from).map(y);
  }), f = v(() => "q-virtual-scroll q-virtual-scroll" + (e.virtualScrollHorizontal === true ? "--horizontal" : "--vertical") + (e.scrollTarget !== void 0 ? "" : " scroll")), m = v(() => e.scrollTarget !== void 0 ? {} : { tabindex: 0 });
  ge(a, () => {
    i();
  }), ge(() => e.scrollTarget, () => {
    w(), _();
  });
  function h() {
    return r.value.$el || r.value;
  }
  function g() {
    return l;
  }
  function _() {
    l = Dn(h(), e.scrollTarget), l.addEventListener("scroll", c, dt.passive);
  }
  function w() {
    l !== void 0 && (l.removeEventListener("scroll", c, dt.passive), l = void 0);
  }
  function k() {
    let y = u(e.type === "list" ? "div" : "tbody", s.value.map(t.default));
    return t.before !== void 0 && (y = t.before().concat(y)), Tt(t.after, y);
  }
  return ei(() => {
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
    return e.type === "__qtable" ? Kh({ ref: r, class: "q-table__middle " + f.value }, k()) : d(q_[e.type], { ...n, ref: r, class: [n.class, f.value], ...m.value }, k);
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
    const s = n.value.find((h) => h.name === u);
    if (s === void 0 || s.field === void 0) return i;
    const f = c === true ? -1 : 1, m = typeof s.field == "function" ? (h) => s.field(h) : (h) => h[s.field];
    return i.sort((h, g) => {
      let _ = m(h), w = m(g);
      return s.rawSort !== void 0 ? s.rawSort(_, w, h, g) * f : _ == null ? -1 * f : w == null ? 1 * f : s.sort !== void 0 ? s.sort(_, w, h, g) * f : xa(_) === true && xa(w) === true ? (_ - w) * f : Lu(_) === true && Lu(w) === true ? R_(_, w) * f : typeof _ == "boolean" && typeof w == "boolean" ? (_ - w) * f : ([_, w] = [_, w].map((k) => (k + "").toLocaleString().toLowerCase()), _ < w ? -1 * f : _ === w ? 0 : f);
    });
  });
  function o(i) {
    let u = e.columnSortOrder;
    if ($t(i) === true) i.sortOrder && (u = i.sortOrder), i = i.name;
    else {
      const f = n.value.find((m) => m.name === i);
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
  const { props: n, emit: l } = e, r = U(Object.assign({ sortBy: null, descending: false, page: 1, rowsPerPage: n.rowsPerPageOptions.length !== 0 ? n.rowsPerPageOptions[0] : 5 }, n.pagination)), a = v(() => {
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
    const m = Qd({ ...a.value, ...s });
    if (B_(a.value, m) === true) {
      o.value === true && f === true && i(m);
      return;
    }
    if (o.value === true) {
      i(m);
      return;
    }
    n.pagination !== void 0 && n["onUpdate:pagination"] !== void 0 ? l("update:pagination", m) : r.value = m;
  }
  return { innerPagination: r, computedPagination: a, isServerSide: o, requestServerInteraction: u, setPagination: c };
}
function V_(e, t, n, l, r, a) {
  const { props: o, emit: i, proxy: { $q: u } } = e, c = v(() => l.value === true ? n.value.rowsNumber || 0 : a.value), s = v(() => {
    const { page: b, rowsPerPage: S } = n.value;
    return (b - 1) * S;
  }), f = v(() => {
    const { page: b, rowsPerPage: S } = n.value;
    return b * S;
  }), m = v(() => n.value.page === 1), h = v(() => n.value.rowsPerPage === 0 ? 1 : Math.max(1, Math.ceil(c.value / n.value.rowsPerPage))), g = v(() => f.value === 0 ? true : n.value.page >= h.value), _ = v(() => (o.rowsPerPageOptions.includes(t.value.rowsPerPage) ? o.rowsPerPageOptions : [t.value.rowsPerPage].concat(o.rowsPerPageOptions)).map((S) => ({ label: S === 0 ? u.lang.table.allRows : "" + S, value: S })));
  ge(h, (b, S) => {
    if (b === S) return;
    const $ = n.value.page;
    b && !$ ? r({ page: 1 }) : b < $ && r({ page: b });
  });
  function w() {
    r({ page: 1 });
  }
  function k() {
    const { page: b } = n.value;
    b > 1 && r({ page: b - 1 });
  }
  function y() {
    const { page: b, rowsPerPage: S } = n.value;
    f.value > 0 && b * S < c.value && r({ page: b + 1 });
  }
  function p() {
    r({ page: h.value });
  }
  return o["onUpdate:pagination"] !== void 0 && i("update:pagination", { ...n.value }), { firstRowIndex: s, lastRowIndex: f, isFirstPage: m, isLastPage: g, pagesNumber: h, computedRowsPerPageOptions: _, computedRowsNumber: c, firstPage: w, prevPage: k, nextPage: y, lastPage: p };
}
var D_ = { selection: { type: String, default: "none", validator: (e) => ["single", "multiple", "none"].includes(e) }, selected: { type: Array, default: () => [] } }, I_ = ["update:selected", "selection"];
function z_(e, t, n, l) {
  const r = v(() => {
    const g = {};
    return e.selected.map(l.value).forEach((_) => {
      g[_] = true;
    }), g;
  }), a = v(() => e.selection !== "none"), o = v(() => e.selection === "single"), i = v(() => e.selection === "multiple"), u = v(() => n.value.length !== 0 && n.value.every((g) => r.value[l.value(g)] === true)), c = v(() => u.value !== true && n.value.some((g) => r.value[l.value(g)] === true)), s = v(() => e.selected.length);
  function f(g) {
    return r.value[g] === true;
  }
  function m() {
    t("update:selected", []);
  }
  function h(g, _, w, k) {
    t("selection", { rows: _, added: w, keys: g, evt: k });
    const y = o.value === true ? w === true ? _ : [] : w === true ? e.selected.concat(_) : e.selected.filter((p) => g.includes(l.value(p)) === false);
    t("update:selected", y);
  }
  return { hasSelectionMode: a, singleSelection: o, multipleSelection: i, allRowsSelected: u, someRowsSelected: c, rowsSelectedNumber: s, isRowSelected: f, clearSelection: m, updateSelection: h };
}
function Kd(e) {
  return Array.isArray(e) ? e.slice() : [];
}
var N_ = { expanded: Array }, H_ = ["update:expanded"];
function j_(e, t) {
  const n = U(Kd(e.expanded));
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
      const f = s.align || "right", m = `text-${f}`;
      return { ...s, align: f, __iconClass: `q-table__sort-icon q-table__sort-icon--${f}`, __thClass: m + (s.headerClasses !== void 0 ? " " + s.headerClasses : "") + (s.sortable === true ? " sortable" : "") + (s.name === i ? ` sorted ${u === true ? "sort-desc" : ""}` : ""), __tdStyle: s.style !== void 0 ? typeof s.style != "function" ? () => s.style : s.style : () => null, __tdClass: s.classes !== void 0 ? typeof s.classes != "function" ? () => m + " " + s.classes : (h) => m + " " + s.classes(h) : () => m };
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
  const l = xe(), { proxy: { $q: r } } = l, a = lt(e, r), { inFullscreen: o, toggleFullscreen: i } = zs(), u = v(() => typeof e.rowKey == "function" ? e.rowKey : (ve) => ve[e.rowKey]), c = U(null), s = U(null), f = v(() => e.grid !== true && e.virtualScroll === true), m = v(() => " q-table__card" + (a.value === true ? " q-table__card--dark q-dark" : "") + (e.square === true ? " q-table--square" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "")), h = v(() => `q-table__container q-table--${e.separator}-separator column no-wrap` + (e.grid === true ? " q-table--grid" : m.value) + (a.value === true ? " q-table--dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.wrapCells === false ? " q-table--no-wrap" : "") + (o.value === true ? " fullscreen scroll" : "")), g = v(() => h.value + (e.loading === true ? " q-table--loading" : ""));
  ge(() => e.tableStyle + e.tableClass + e.tableHeaderStyle + e.tableHeaderClass + h.value, () => {
    var _a3;
    f.value === true && ((_a3 = s.value) == null ? void 0 : _a3.reset());
  });
  const { innerPagination: _, computedPagination: w, isServerSide: k, requestServerInteraction: y, setPagination: p } = O_(l, ce), { computedFilterMethod: b } = L_(e, p), { isRowExpanded: S, setExpanded: $, updateExpanded: F } = j_(e, n), z = v(() => {
    let ve = e.rows;
    if (k.value === true || ve.length === 0) return ve;
    const { sortBy: Se, descending: Fe } = w.value;
    return e.filter && (ve = b.value(ve, e.filter, G.value, ce)), P.value !== null && (ve = J.value(e.rows === ve ? ve.slice() : ve, Se, Fe)), ve;
  }), B = v(() => z.value.length), L = v(() => {
    let ve = z.value;
    if (k.value === true) return ve;
    const { rowsPerPage: Se } = w.value;
    return Se !== 0 && (E.value === 0 && e.rows !== ve ? ve.length > X.value && (ve = ve.slice(0, X.value)) : ve = ve.slice(E.value, X.value)), ve;
  }), { hasSelectionMode: D, singleSelection: M, multipleSelection: A, allRowsSelected: C, someRowsSelected: H, rowsSelectedNumber: Q, isRowSelected: K, clearSelection: W, updateSelection: ie } = z_(e, n, L, u), { colList: ye, computedCols: G, computedColsMap: R, computedColspan: re } = Q_(e, w, D), { columnToSort: P, computedSortMethod: J, sort: T } = P_(e, w, ye, p), { firstRowIndex: E, lastRowIndex: X, isFirstPage: O, isLastPage: le, pagesNumber: be, computedRowsPerPageOptions: x, computedRowsNumber: q, firstPage: V, prevPage: te, nextPage: ae, lastPage: Y } = V_(l, _, w, k, p, B), fe = v(() => L.value.length === 0), N = v(() => {
    const ve = {};
    return Hh.forEach((Se) => {
      ve[Se] = e[Se];
    }), ve.virtualScrollItemSize === void 0 && (ve.virtualScrollItemSize = e.dense === true ? 28 : 48), ve;
  });
  function ne() {
    f.value === true && s.value.reset();
  }
  function de() {
    if (e.grid === true) return In();
    const ve = e.hideHeader !== true ? Ce : null;
    if (f.value === true) {
      const Fe = t["top-row"], Be = t["bottom-row"], Ue = { default: (pt) => we(pt.item, t.body, pt.index) };
      if (Fe !== void 0) {
        const pt = d("tbody", Fe({ cols: G.value }));
        Ue.before = ve === null ? () => pt : () => [ve()].concat(pt);
      } else ve !== null && (Ue.before = ve);
      return Be !== void 0 && (Ue.after = () => d("tbody", Be({ cols: G.value }))), d(E_, { ref: s, class: e.tableClass, style: e.tableStyle, ...N.value, scrollTarget: e.virtualScrollTarget, items: L.value, type: "__qtable", tableColspan: re.value, onVirtualScroll: j }, Ue);
    }
    const Se = [ke()];
    return ve !== null && Se.unshift(ve()), Kh({ class: ["q-table__middle scroll", e.tableClass], style: e.tableStyle }, Se);
  }
  function oe(ve, Se) {
    if (s.value !== null) {
      s.value.scrollTo(ve, Se);
      return;
    }
    ve = parseInt(ve, 10);
    const Fe = c.value.querySelector(`tbody tr:nth-of-type(${ve + 1})`);
    if (Fe !== null) {
      const Be = c.value.querySelector(".q-table__middle.scroll"), Ue = Fe.offsetTop - e.virtualScrollStickySizeStart, pt = Ue < Be.scrollTop ? "decrease" : "increase";
      Be.scrollTop = Ue, n("virtualScroll", { index: ve, from: 0, to: _.value.rowsPerPage - 1, direction: pt });
    }
  }
  function j(ve) {
    n("virtualScroll", ve);
  }
  function se() {
    return [d(Q1, { class: "q-table__linear-progress", color: e.color, dark: a.value, indeterminate: true, trackColor: "transparent" })];
  }
  function we(ve, Se, Fe) {
    const Be = u.value(ve), Ue = K(Be);
    if (Se !== void 0) {
      const Z = { key: Be, row: ve, pageIndex: Fe, __trClass: Ue ? "selected" : "" };
      if (e.tableRowStyleFn !== void 0 && (Z.__trStyle = e.tableRowStyleFn(ve)), e.tableRowClassFn !== void 0) {
        const me = e.tableRowClassFn(ve);
        me && (Z.__trClass = `${me} ${Z.__trClass}`);
      }
      return Se(Te(Z));
    }
    const pt = t["body-cell"], ht = G.value.map((Z) => {
      const me = t[`body-cell-${Z.name}`], qe = me !== void 0 ? me : pt;
      return qe !== void 0 ? qe(Me({ key: Be, row: ve, pageIndex: Fe, col: Z })) : d("td", { class: Z.__tdClass(ve), style: Z.__tdStyle(ve) }, ce(Z, ve));
    });
    if (D.value === true) {
      const Z = t["body-selection"], me = Z !== void 0 ? Z(He({ key: Be, row: ve, pageIndex: Fe })) : [d(sa, { modelValue: Ue, color: e.color, dark: a.value, dense: e.dense, "onUpdate:modelValue": (qe, Ee) => {
        ie([Be], [ve], qe, Ee);
      } })];
      ht.unshift(d("td", { class: "q-table--col-auto-width" }, me));
    }
    const I = { key: Be, class: { selected: Ue } };
    if (e.onRowClick !== void 0 && (I.class["cursor-pointer"] = true, I.onClick = (Z) => {
      n("rowClick", Z, ve, Fe);
    }), e.onRowDblclick !== void 0 && (I.class["cursor-pointer"] = true, I.onDblclick = (Z) => {
      n("rowDblclick", Z, ve, Fe);
    }), e.onRowContextmenu !== void 0 && (I.class["cursor-pointer"] = true, I.onContextmenu = (Z) => {
      n("rowContextmenu", Z, ve, Fe);
    }), e.tableRowStyleFn !== void 0 && (I.style = e.tableRowStyleFn(ve)), e.tableRowClassFn !== void 0) {
      const Z = e.tableRowClassFn(ve);
      Z && (I.class[Z] = true);
    }
    return d("tr", I, ht);
  }
  function ke() {
    const ve = t.body, Se = t["top-row"], Fe = t["bottom-row"];
    let Be = L.value.map((Ue, pt) => we(Ue, ve, pt));
    return Se !== void 0 && (Be = Se({ cols: G.value }).concat(Be)), Fe !== void 0 && (Be = Be.concat(Fe({ cols: G.value }))), d("tbody", Be);
  }
  function Te(ve) {
    return Ve(ve), ve.cols = ve.cols.map((Se) => Vt({ ...Se }, "value", () => ce(Se, ve.row))), ve;
  }
  function Me(ve) {
    return Ve(ve), Vt(ve, "value", () => ce(ve.col, ve.row)), ve;
  }
  function He(ve) {
    return Ve(ve), ve;
  }
  function Ve(ve) {
    Object.assign(ve, { cols: G.value, colsMap: R.value, sort: T, rowIndex: E.value + ve.pageIndex, color: e.color, dark: a.value, dense: e.dense }), D.value === true && Vt(ve, "selected", () => K(ve.key), (Se, Fe) => {
      ie([ve.key], [ve.row], Se, Fe);
    }), Vt(ve, "expand", () => S(ve.key), (Se) => {
      F(ve.key, Se);
    });
  }
  function ce(ve, Se) {
    const Fe = typeof ve.field == "function" ? ve.field(Se) : Se[ve.field];
    return ve.format !== void 0 ? ve.format(Fe, Se) : Fe;
  }
  const pe = v(() => ({ pagination: w.value, pagesNumber: be.value, isFirstPage: O.value, isLastPage: le.value, firstPage: V, prevPage: te, nextPage: ae, lastPage: Y, inFullscreen: o.value, toggleFullscreen: i }));
  function ue() {
    const ve = t.top, Se = t["top-left"], Fe = t["top-right"], Be = t["top-selection"], Ue = D.value === true && Be !== void 0 && Q.value > 0, pt = "q-table__top relative-position row items-center";
    if (ve !== void 0) return d("div", { class: pt }, [ve(pe.value)]);
    let ht;
    if (Ue === true ? ht = Be(pe.value).slice() : (ht = [], Se !== void 0 ? ht.push(d("div", { class: "q-table__control" }, [Se(pe.value)])) : e.title && ht.push(d("div", { class: "q-table__control" }, [d("div", { class: ["q-table__title", e.titleClass] }, e.title)]))), Fe !== void 0 && (ht.push(d("div", { class: "q-table__separator col" })), ht.push(d("div", { class: "q-table__control" }, [Fe(pe.value)]))), ht.length !== 0) return d("div", { class: pt }, ht);
  }
  const _e2 = v(() => H.value === true ? null : C.value);
  function Ce() {
    const ve = Oe();
    return e.loading === true && t.loading === void 0 && ve.push(d("tr", { class: "q-table__progress" }, [d("th", { class: "relative-position", colspan: re.value }, se())])), d("thead", ve);
  }
  function Oe() {
    const ve = t.header, Se = t["header-cell"];
    if (ve !== void 0) return ve(Re({ header: true })).slice();
    const Fe = G.value.map((Be) => {
      const Ue = t[`header-cell-${Be.name}`], pt = Ue !== void 0 ? Ue : Se, ht = Re({ col: Be });
      return pt !== void 0 ? pt(ht) : d(T_, { key: Be.name, props: ht }, () => Be.label);
    });
    if (M.value === true && e.grid !== true) Fe.unshift(d("th", { class: "q-table--col-auto-width" }, " "));
    else if (A.value === true) {
      const Be = t["header-selection"], Ue = Be !== void 0 ? Be(Re({})) : [d(sa, { color: e.color, modelValue: _e2.value, dark: a.value, dense: e.dense, "onUpdate:modelValue": Ye })];
      Fe.unshift(d("th", { class: "q-table--col-auto-width" }, Ue));
    }
    return [d("tr", { class: e.tableHeaderClass, style: e.tableHeaderStyle }, Fe)];
  }
  function Re(ve) {
    return Object.assign(ve, { cols: G.value, sort: T, colsMap: R.value, color: e.color, dark: a.value, dense: e.dense }), A.value === true && Vt(ve, "selected", () => _e2.value, Ye), ve;
  }
  function Ye(ve) {
    H.value === true && (ve = false), ie(L.value.map(u.value), L.value, ve);
  }
  const it = v(() => {
    const ve = [e.iconFirstPage || r.iconSet.table.firstPage, e.iconPrevPage || r.iconSet.table.prevPage, e.iconNextPage || r.iconSet.table.nextPage, e.iconLastPage || r.iconSet.table.lastPage];
    return r.lang.rtl === true ? ve.reverse() : ve;
  });
  function Ct() {
    if (e.hideBottom === true) return;
    if (fe.value === true) {
      if (e.hideNoData === true) return;
      const Fe = e.loading === true ? e.loadingLabel || r.lang.table.loading : e.filter ? e.noResultsLabel || r.lang.table.noResults : e.noDataLabel || r.lang.table.noData, Be = t["no-data"], Ue = Be !== void 0 ? [Be({ message: Fe, icon: r.iconSet.table.warning, filter: e.filter })] : [d(et, { class: "q-table__bottom-nodata-icon", name: r.iconSet.table.warning }), Fe];
      return d("div", { class: eo + " q-table__bottom--nodata" }, Ue);
    }
    const ve = t.bottom;
    if (ve !== void 0) return d("div", { class: eo }, [ve(pe.value)]);
    const Se = e.hideSelectedBanner !== true && D.value === true && Q.value > 0 ? [d("div", { class: "q-table__control" }, [d("div", [(e.selectedRowsLabel || r.lang.table.selectedRecords)(Q.value)])])] : [];
    if (e.hidePagination !== true) return d("div", { class: eo + " justify-end" }, nl(Se));
    if (Se.length !== 0) return d("div", { class: eo }, Se);
  }
  function Ut(ve) {
    p({ page: 1, rowsPerPage: ve.value });
  }
  function nl(ve) {
    let Se;
    const { rowsPerPage: Fe } = w.value, Be = e.paginationLabel || r.lang.table.pagination, Ue = t.pagination, pt = e.rowsPerPageOptions.length > 1;
    if (ve.push(d("div", { class: "q-table__separator col" })), pt === true && ve.push(d("div", { class: "q-table__control" }, [d("span", { class: "q-table__bottom-item" }, [e.rowsPerPageLabel || r.lang.table.recordsPerPage]), d(J1, { class: "q-table__select inline q-table__bottom-item", color: e.color, modelValue: Fe, options: x.value, displayValue: Fe === 0 ? r.lang.table.allRows : Fe, dark: a.value, borderless: true, dense: true, optionsDense: true, optionsCover: true, "onUpdate:modelValue": Ut })])), Ue !== void 0) Se = Ue(pe.value);
    else if (Se = [d("span", Fe !== 0 ? { class: "q-table__bottom-item" } : {}, [Fe ? Be(E.value + 1, Math.min(X.value, q.value), q.value) : Be(1, B.value, q.value)])], Fe !== 0 && be.value > 1) {
      const ht = { color: e.color, round: true, dense: true, flat: true };
      e.dense === true && (ht.size = "sm"), be.value > 2 && Se.push(d(Ze, { key: "pgFirst", ...ht, icon: it.value[0], disable: O.value, ariaLabel: r.lang.pagination.first, onClick: V })), Se.push(d(Ze, { key: "pgPrev", ...ht, icon: it.value[1], disable: O.value, ariaLabel: r.lang.pagination.prev, onClick: te }), d(Ze, { key: "pgNext", ...ht, icon: it.value[2], disable: le.value, ariaLabel: r.lang.pagination.next, onClick: ae })), be.value > 2 && Se.push(d(Ze, { key: "pgLast", ...ht, icon: it.value[3], disable: le.value, ariaLabel: r.lang.pagination.last, onClick: Y }));
    }
    return ve.push(d("div", { class: "q-table__control" }, Se)), ve;
  }
  function rn() {
    const ve = e.gridHeader === true ? [d("table", { class: "q-table" }, [Ce()])] : e.loading === true && t.loading === void 0 ? se() : void 0;
    return d("div", { class: "q-table__middle" }, ve);
  }
  function In() {
    const ve = t.item !== void 0 ? t.item : (Se) => {
      const Fe = Se.cols.map((Ue) => d("div", { class: "q-table__grid-item-row" }, [d("div", { class: "q-table__grid-item-title" }, [Ue.label]), d("div", { class: "q-table__grid-item-value" }, [Ue.value])]));
      if (D.value === true) {
        const Ue = t["body-selection"], pt = Ue !== void 0 ? Ue(Se) : [d(sa, { modelValue: Se.selected, color: e.color, dark: a.value, dense: e.dense, "onUpdate:modelValue": (ht, I) => {
          ie([Se.key], [Se.row], ht, I);
        } })];
        Fe.unshift(d("div", { class: "q-table__grid-item-row" }, pt), d(Kl, { dark: a.value }));
      }
      const Be = { class: ["q-table__grid-item-card" + m.value, e.cardClass], style: e.cardStyle };
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
    return d("div", { class: ["q-table__grid-content row", e.cardContainerClass], style: e.cardContainerStyle }, L.value.map((Se, Fe) => ve(Te({ key: u.value(Se), row: Se, pageIndex: Fe }))));
  }
  return Object.assign(l.proxy, { requestServerInteraction: y, setPagination: p, firstPage: V, prevPage: te, nextPage: ae, lastPage: Y, isRowSelected: K, clearSelection: W, isRowExpanded: S, setExpanded: $, sort: T, resetVirtualScroll: ne, scrollTo: oe, getCellValue: ce }), tm(l.proxy, { filteredSortedRows: () => z.value, computedRows: () => L.value, computedRowsNumber: () => q.value }), () => {
    const ve = [ue()], Se = { ref: c, class: g.value };
    return e.grid === true ? ve.push(rn()) : Object.assign(Se, { class: [Se.class, e.cardClass], style: e.cardStyle }), ve.push(de(), Ct()), e.loading === true && t.loading !== void 0 && ve.push(t.loading()), d("div", Se, ve);
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
  let m, h;
  const g = U(null), _ = v(() => J()), w = v(() => u()), k = v(() => T()), y = Yr(e.modelValue, _.value, w.value, e.calendar, k.value), p = U(K_(y)), b = U(y), S = U(y.hour === null || y.hour < 12), $ = v(() => `q-time q-time--${e.landscape === true ? "landscape" : "portrait"}` + (a.value === true ? " q-time--dark q-dark" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-time--readonly" : "") + (e.bordered === true ? " q-time--bordered" : "") + (e.square === true ? " q-time--square no-border-radius" : "") + (e.flat === true ? " q-time--flat no-shadow" : "")), F = v(() => {
    const ce = b.value;
    return { hour: ce.hour === null ? "--" : z.value === true ? at(ce.hour) : String(S.value === true ? ce.hour === 0 ? 12 : ce.hour : ce.hour > 12 ? ce.hour - 12 : ce.hour), minute: ce.minute === null ? "--" : at(ce.minute), second: ce.second === null ? "--" : at(ce.second) };
  }), z = v(() => e.format24h !== null ? e.format24h : r.lang.date.format24h), B = v(() => {
    const ce = p.value === "hour", pe = ce === true ? 12 : 60, ue = b.value[p.value];
    let Ce = `rotate(${Math.round(ue * (360 / pe)) - 180}deg) translateX(-50%)`;
    return ce === true && z.value === true && b.value.hour >= 12 && (Ce += " scale(.7)"), { transform: Ce };
  }), L = v(() => b.value.hour !== null), D = v(() => L.value === true && b.value.minute !== null), M = v(() => e.hourOptions !== void 0 ? (ce) => e.hourOptions.includes(ce) : e.options !== void 0 ? (ce) => e.options(ce, null, null) : null), A = v(() => e.minuteOptions !== void 0 ? (ce) => e.minuteOptions.includes(ce) : e.options !== void 0 ? (ce) => e.options(b.value.hour, ce, null) : null), C = v(() => e.secondOptions !== void 0 ? (ce) => e.secondOptions.includes(ce) : e.options !== void 0 ? (ce) => e.options(b.value.hour, b.value.minute, ce) : null), H = v(() => {
    if (M.value === null) return null;
    const ce = R(0, 11, M.value), pe = R(12, 11, M.value);
    return { am: ce, pm: pe, values: ce.values.concat(pe.values) };
  }), Q = v(() => A.value !== null ? R(0, 59, A.value) : null), K = v(() => C.value !== null ? R(0, 59, C.value) : null), W = v(() => {
    switch (p.value) {
      case "hour":
        return H.value;
      case "minute":
        return Q.value;
      case "second":
        return K.value;
    }
  }), ie = v(() => {
    let ce, pe, ue = 0, _e2 = 1;
    const Ce = W.value !== null ? W.value.values : void 0;
    p.value === "hour" ? z.value === true ? (ce = 0, pe = 23) : (ce = 0, pe = 11, S.value === false && (ue = 12)) : (ce = 0, pe = 55, _e2 = 5);
    const Oe = [];
    for (let Re = ce, Ye = ce; Re <= pe; Re += _e2, Ye++) {
      const it = Re + ue, Ct = (Ce == null ? void 0 : Ce.includes(it)) === false, Ut = p.value === "hour" && Re === 0 ? z.value === true ? "00" : "12" : Re;
      Oe.push({ val: it, index: Ye, disable: Ct, label: Ut });
    }
    return Oe;
  }), ye = v(() => [[bn, O, void 0, { stop: true, prevent: true, mouse: true }]]);
  ge(() => e.modelValue, (ce) => {
    const pe = Yr(ce, _.value, w.value, e.calendar, k.value);
    (pe.dateHash !== b.value.dateHash || pe.timeHash !== b.value.timeHash) && (b.value = pe, pe.hour === null ? p.value = "hour" : S.value = pe.hour < 12);
  }), ge([_, w], () => {
    We(() => {
      Me();
    });
  });
  function G() {
    const ce = { ...c(), ...W_() };
    Me(ce), Object.assign(b.value, ce), p.value = "hour";
  }
  function R(ce, pe, ue) {
    const _e2 = Array.apply(null, { length: pe + 1 }).map((Ce, Oe) => {
      const Re = Oe + ce;
      return { index: Re, val: ue(Re) === true };
    }).filter((Ce) => Ce.val === true).map((Ce) => Ce.index);
    return { min: _e2[0], max: _e2[_e2.length - 1], values: _e2, threshold: pe + 1 };
  }
  function re(ce, pe, ue) {
    const _e2 = Math.abs(ce - pe);
    return Math.min(_e2, ue - _e2);
  }
  function P(ce, { min: pe, max: ue, values: _e2, threshold: Ce }) {
    if (ce === pe) return pe;
    if (ce < pe || ce > ue) return re(ce, pe, Ce) <= re(ce, ue, Ce) ? pe : ue;
    const Oe = _e2.findIndex((it) => ce <= it), Re = _e2[Oe - 1], Ye = _e2[Oe];
    return ce - Re <= Ye - ce ? Re : Ye;
  }
  function J() {
    return e.calendar !== "persian" && e.mask !== null ? e.mask : `HH:mm${e.withSeconds === true ? ":ss" : ""}`;
  }
  function T() {
    if (typeof e.defaultDate != "string") {
      const ce = c(true);
      return ce.dateHash = Un(ce), ce;
    }
    return Yr(e.defaultDate, "YYYY/MM/DD", void 0, e.calendar);
  }
  function E() {
    return bl(l) === true || W.value !== null && (W.value.values.length === 0 || p.value === "hour" && z.value !== true && H.value[S.value === true ? "am" : "pm"].values.length === 0);
  }
  function X() {
    const ce = g.value, { top: pe, left: ue, width: _e2 } = ce.getBoundingClientRect(), Ce = _e2 / 2;
    return { top: pe + Ce, left: ue + Ce, dist: Ce * 0.7 };
  }
  function O(ce) {
    if (E() !== true) {
      if (ce.isFirst === true) {
        m = X(), h = be(ce.evt, m);
        return;
      }
      h = be(ce.evt, m, h), ce.isFinal === true && (m = false, h = null, le());
    }
  }
  function le() {
    p.value === "hour" ? p.value = "minute" : e.withSeconds && p.value === "minute" && (p.value = "second");
  }
  function be(ce, pe, ue) {
    const _e2 = tn(ce), Ce = Math.abs(_e2.top - pe.top), Oe = Math.sqrt(Math.pow(Math.abs(_e2.top - pe.top), 2) + Math.pow(Math.abs(_e2.left - pe.left), 2));
    let Re, Ye = Math.asin(Ce / Oe) * (180 / Math.PI);
    if (_e2.top < pe.top ? Ye = pe.left < _e2.left ? 90 - Ye : 270 + Ye : Ye = pe.left < _e2.left ? Ye + 90 : 270 - Ye, p.value === "hour") {
      if (Re = Ye / 30, H.value !== null) {
        const it = z.value !== true ? S.value === true : H.value.am.values.length !== 0 && H.value.pm.values.length !== 0 ? Oe >= pe.dist : H.value.am.values.length !== 0;
        Re = P(Re + (it === true ? 0 : 12), H.value[it === true ? "am" : "pm"]);
      } else Re = Math.round(Re), z.value === true ? Oe < pe.dist ? Re < 12 && (Re += 12) : Re === 12 && (Re = 0) : S.value === true && Re === 12 ? Re = 0 : S.value === false && Re !== 12 && (Re += 12);
      z.value === true && (S.value = Re < 12);
    } else Re = Math.round(Ye / 6) % 60, p.value === "minute" && Q.value !== null ? Re = P(Re, Q.value) : p.value === "second" && K.value !== null && (Re = P(Re, K.value));
    return ue !== Re && j[p.value](Re), Re;
  }
  const x = { hour() {
    p.value = "hour";
  }, minute() {
    p.value = "minute";
  }, second() {
    p.value = "second";
  } };
  function q(ce) {
    ce.keyCode === 13 && se();
  }
  function V(ce) {
    ce.keyCode === 13 && we();
  }
  function te(ce) {
    E() !== true && (r.platform.is.desktop !== true && be(ce, X()), le());
  }
  function ae(ce) {
    E() !== true && be(ce, X());
  }
  function Y(ce) {
    if (ce.keyCode === 13) p.value = "hour";
    else if ([37, 39].includes(ce.keyCode)) {
      const pe = ce.keyCode === 37 ? -1 : 1;
      if (H.value !== null) {
        const ue = z.value === true ? H.value.values : H.value[S.value === true ? "am" : "pm"].values;
        if (ue.length === 0) return;
        if (b.value.hour === null) ne(ue[0]);
        else {
          const _e2 = (ue.length + ue.indexOf(b.value.hour) + pe) % ue.length;
          ne(ue[_e2]);
        }
      } else {
        const ue = z.value === true ? 24 : 12, _e2 = z.value !== true && S.value === false ? 12 : 0, Ce = b.value.hour === null ? -pe : b.value.hour;
        ne(_e2 + (24 + Ce + pe) % ue);
      }
    }
  }
  function fe(ce) {
    if (ce.keyCode === 13) p.value = "minute";
    else if ([37, 39].includes(ce.keyCode)) {
      const pe = ce.keyCode === 37 ? -1 : 1;
      if (Q.value !== null) {
        const ue = Q.value.values;
        if (ue.length === 0) return;
        if (b.value.minute === null) de(ue[0]);
        else {
          const _e2 = (ue.length + ue.indexOf(b.value.minute) + pe) % ue.length;
          de(ue[_e2]);
        }
      } else {
        const ue = b.value.minute === null ? -pe : b.value.minute;
        de((60 + ue + pe) % 60);
      }
    }
  }
  function N(ce) {
    if (ce.keyCode === 13) p.value = "second";
    else if ([37, 39].includes(ce.keyCode)) {
      const pe = ce.keyCode === 37 ? -1 : 1;
      if (K.value !== null) {
        const ue = K.value.values;
        if (ue.length === 0) return;
        if (b.value.seconds === null) oe(ue[0]);
        else {
          const _e2 = (ue.length + ue.indexOf(b.value.second) + pe) % ue.length;
          oe(ue[_e2]);
        }
      } else {
        const ue = b.value.second === null ? -pe : b.value.second;
        oe((60 + ue + pe) % 60);
      }
    }
  }
  function ne(ce) {
    b.value.hour !== ce && (b.value.hour = ce, Te());
  }
  function de(ce) {
    b.value.minute !== ce && (b.value.minute = ce, Te());
  }
  function oe(ce) {
    b.value.second !== ce && (b.value.second = ce, Te());
  }
  const j = { hour: ne, minute: de, second: oe };
  function se() {
    S.value === false && (S.value = true, b.value.hour !== null && (b.value.hour -= 12, Te()));
  }
  function we() {
    S.value === true && (S.value = false, b.value.hour !== null && (b.value.hour += 12, Te()));
  }
  function ke(ce) {
    const pe = e.modelValue;
    p.value !== ce && pe !== void 0 && pe !== null && pe !== "" && typeof pe != "string" && (p.value = ce);
  }
  function Te() {
    if (M.value !== null && M.value(b.value.hour) !== true) {
      b.value = Yr(), ke("hour");
      return;
    }
    if (A.value !== null && A.value(b.value.minute) !== true) {
      b.value.minute = null, b.value.second = null, ke("minute");
      return;
    }
    if (e.withSeconds === true && C.value !== null && C.value(b.value.second) !== true) {
      b.value.second = null, ke("second");
      return;
    }
    b.value.hour === null || b.value.minute === null || e.withSeconds === true && b.value.second === null || Me();
  }
  function Me(ce) {
    const pe = Object.assign({ ...b.value }, ce), ue = e.calendar === "persian" ? at(pe.hour) + ":" + at(pe.minute) + (e.withSeconds === true ? ":" + at(pe.second) : "") : bh(new Date(pe.year, pe.month === null ? null : pe.month - 1, pe.day, pe.hour, pe.minute, pe.second, pe.millisecond), _.value, w.value, pe.year, pe.timezoneOffset);
    pe.changed = ue !== e.modelValue, n("update:modelValue", ue, pe);
  }
  function He() {
    const ce = [d("div", { class: "q-time__link " + (p.value === "hour" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: x.hour, onKeyup: Y }, F.value.hour), d("div", ":"), d("div", L.value === true ? { class: "q-time__link " + (p.value === "minute" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onKeyup: fe, onClick: x.minute } : { class: "q-time__link" }, F.value.minute)];
    e.withSeconds === true && ce.push(d("div", ":"), d("div", D.value === true ? { class: "q-time__link " + (p.value === "second" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onKeyup: N, onClick: x.second } : { class: "q-time__link" }, F.value.second));
    const pe = [d("div", { class: "q-time__header-label row items-center no-wrap", dir: "ltr" }, ce)];
    return z.value === false && pe.push(d("div", { class: "q-time__header-ampm column items-between no-wrap" }, [d("div", { class: "q-time__link " + (S.value === true ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: se, onKeyup: q }, "AM"), d("div", { class: "q-time__link " + (S.value !== true ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: we, onKeyup: V }, "PM")])), d("div", { class: "q-time__header flex flex-center no-wrap " + i.value }, pe);
  }
  function Ve() {
    const ce = b.value[p.value];
    return d("div", { class: "q-time__content col relative-position" }, [d(Ot, { name: "q-transition--scale" }, () => d("div", { key: "clock" + p.value, class: "q-time__container-parent absolute-full" }, [d("div", { ref: g, class: "q-time__container-child fit overflow-hidden" }, [cn(d("div", { class: "q-time__clock cursor-pointer non-selectable", onClick: te, onMousedown: ae }, [d("div", { class: "q-time__clock-circle fit" }, [d("div", { class: "q-time__clock-pointer" + (b.value[p.value] === null ? " hidden" : e.color !== void 0 ? ` text-${e.color}` : ""), style: B.value }), ie.value.map((pe) => d("div", { class: `q-time__clock-position row flex-center q-time__clock-pos-${pe.index}` + (pe.val === ce ? " q-time__clock-position--active " + i.value : pe.disable === true ? " q-time__clock-position--disable" : "") }, [d("span", pe.label)]))])]), ye.value)])])), e.nowBtn === true ? d(Ze, { class: "q-time__now-button absolute", icon: r.iconSet.datetime.now, unelevated: true, size: "sm", round: true, color: e.color, textColor: e.textColor, tabindex: o.value, onClick: G }) : null]);
  }
  return l.proxy.setNow = G, () => {
    const ce = [Ve()], pe = $e(t.default);
    return pe !== void 0 && ce.push(d("div", { class: "q-time__actions" }, pe)), e.name !== void 0 && e.disable !== true && f(ce, "push"), d("div", { class: $.value, tabindex: -1 }, [He(), d("div", { class: "q-time__main col overflow-auto" }, ce)]);
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
  const { proxy: l } = xe(), { $q: r } = l, a = lt(e, r), o = U({}), i = U(e.ticked || []), u = U(e.expanded || []);
  let c = {};
  Rr(() => {
    c = {};
  });
  const s = v(() => `q-tree q-tree--${e.dense === true ? "dense" : "standard"}` + (e.noConnectors === true ? " q-tree--no-connectors" : "") + (a.value === true ? " q-tree--dark" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), f = v(() => e.selected !== void 0), m = v(() => e.icon || r.iconSet.tree.icon), h = v(() => e.controlColor || e.color), g = v(() => e.textColor !== void 0 ? ` text-${e.textColor}` : ""), _ = v(() => {
    const R = e.selectedColor || e.color;
    return R ? ` text-${R}` : "";
  }), w = v(() => e.filterMethod !== void 0 ? e.filterMethod : (R, re) => {
    const P = re.toLowerCase();
    return R[e.labelKey] && R[e.labelKey].toLowerCase().indexOf(P) !== -1;
  }), k = v(() => {
    const R = {}, re = (P, J) => {
      const T = P.tickStrategy || (J ? J.tickStrategy : e.tickStrategy), E = P[e.nodeKey], X = P[e.childrenKey] && Array.isArray(P[e.childrenKey]) && P[e.childrenKey].length !== 0, O = P.disabled !== true && f.value === true && P.selectable !== false, le = P.disabled !== true && P.expandable !== false, be = T !== "none", x = T === "strict", q = T === "leaf-filtered", V = T === "leaf" || T === "leaf-filtered";
      let te = P.disabled !== true && P.tickable !== false;
      V === true && te === true && J && J.tickable !== true && (te = false);
      let ae = P.lazy;
      ae === true && o.value[E] !== void 0 && Array.isArray(P[e.childrenKey]) === true && (ae = o.value[E]);
      const Y = { key: E, parent: J, isParent: X, lazy: ae, disabled: P.disabled, link: P.disabled !== true && (O === true || le === true && (X === true || ae === true)), children: [], matchesFilter: e.filter ? w.value(P, e.filter) : true, selected: E === e.selected && O === true, selectable: O, expanded: X === true ? u.value.includes(E) : false, expandable: le, noTick: P.noTick === true || x !== true && ae && ae !== "loaded", tickable: te, tickStrategy: T, hasTicking: be, strictTicking: x, leafFilteredTicking: q, leafTicking: V, ticked: x === true ? i.value.includes(E) : X === true ? false : i.value.includes(E) };
      if (R[E] = Y, X === true && (Y.children = P[e.childrenKey].map((fe) => re(fe, Y)), e.filter && (Y.matchesFilter !== true ? Y.matchesFilter = Y.children.some((fe) => fe.matchesFilter) : Y.noTick !== true && Y.disabled !== true && Y.tickable === true && q === true && Y.children.every((fe) => fe.matchesFilter !== true || fe.noTick === true || fe.tickable !== true) === true && (Y.tickable = false)), Y.matchesFilter === true && (Y.noTick !== true && x !== true && Y.children.every((fe) => fe.noTick) === true && (Y.noTick = true), V))) {
        if (Y.ticked = false, Y.indeterminate = Y.children.some((fe) => fe.indeterminate === true), Y.tickable = Y.tickable === true && Y.children.some((fe) => fe.tickable), Y.indeterminate !== true) {
          const fe = Y.children.reduce((N, ne) => ne.ticked === true ? N + 1 : N, 0);
          fe === Y.children.length ? Y.ticked = true : fe > 0 && (Y.indeterminate = true);
        }
        Y.indeterminate === true && (Y.indeterminateNextState = Y.children.every((fe) => fe.tickable !== true || fe.ticked !== true));
      }
      return Y;
    };
    return e.nodes.forEach((P) => re(P, null)), R;
  });
  ge(() => e.ticked, (R) => {
    i.value = R;
  }), ge(() => e.expanded, (R) => {
    u.value = R;
  });
  function y(R) {
    const re = [].reduce, P = (J, T) => {
      if (J || !T) return J;
      if (Array.isArray(T) === true) return re.call(Object(T), P, J);
      if (T[e.nodeKey] === R) return T;
      if (T[e.childrenKey]) return P(null, T[e.childrenKey]);
    };
    return P(null, e.nodes);
  }
  function p() {
    return i.value.map((R) => y(R));
  }
  function b() {
    return u.value.map((R) => y(R));
  }
  function S(R) {
    return R && k.value[R] ? k.value[R].expanded : false;
  }
  function $() {
    e.expanded !== void 0 ? n("update:expanded", []) : u.value = [];
  }
  function F() {
    const R = [], re = (P) => {
      P[e.childrenKey] && P[e.childrenKey].length !== 0 && P.expandable !== false && P.disabled !== true && (R.push(P[e.nodeKey]), P[e.childrenKey].forEach(re));
    };
    e.nodes.forEach(re), e.expanded !== void 0 ? n("update:expanded", R) : u.value = R;
  }
  function z(R, re, P = y(R), J = k.value[R]) {
    if (J.lazy && J.lazy !== "loaded") {
      if (J.lazy === "loading") return;
      o.value[R] = "loading", Array.isArray(P[e.childrenKey]) !== true && (P[e.childrenKey] = []), n("lazyLoad", { node: P, key: R, done: (T) => {
        o.value[R] = "loaded", P[e.childrenKey] = Array.isArray(T) === true ? T : [], We(() => {
          var _a3;
          ((_a3 = k.value[R]) == null ? void 0 : _a3.isParent) === true && B(R, true);
        });
      }, fail: () => {
        delete o.value[R], P[e.childrenKey].length === 0 && delete P[e.childrenKey];
      } });
    } else J.isParent === true && J.expandable === true && B(R, re);
  }
  function B(R, re) {
    let P = u.value;
    const J = e.expanded !== void 0;
    if (J === true && (P = P.slice()), re) {
      if (e.accordion && k.value[R]) {
        const T = [];
        k.value[R].parent ? k.value[R].parent.children.forEach((E) => {
          E.key !== R && E.expandable === true && T.push(E.key);
        }) : e.nodes.forEach((E) => {
          const X = E[e.nodeKey];
          X !== R && T.push(X);
        }), T.length !== 0 && (P = P.filter((E) => T.includes(E) === false));
      }
      P = P.concat([R]).filter((T, E, X) => X.indexOf(T) === E);
    } else P = P.filter((T) => T !== R);
    J === true ? n("update:expanded", P) : u.value = P;
  }
  function L(R) {
    return R && k.value[R] ? k.value[R].ticked : false;
  }
  function D(R, re) {
    let P = i.value;
    const J = e.ticked !== void 0;
    J === true && (P = P.slice()), re ? P = P.concat(R).filter((T, E, X) => X.indexOf(T) === E) : P = P.filter((T) => R.includes(T) === false), J === true && n("update:ticked", P);
  }
  function M(R, re, P) {
    const J = { tree: l, node: R, key: P, color: e.color, dark: a.value };
    return Vt(J, "expanded", () => re.expanded, (T) => {
      T !== re.expanded && z(P, T);
    }), Vt(J, "ticked", () => re.ticked, (T) => {
      T !== re.ticked && D([P], T);
    }), J;
  }
  function A(R) {
    return (e.filter ? R.filter((re) => k.value[re[e.nodeKey]].matchesFilter) : R).map((re) => K(re));
  }
  function C(R) {
    if (R.icon !== void 0) return d(et, { class: "q-tree__icon q-mr-sm", name: R.icon, color: R.iconColor });
    const re = R.img || R.avatar;
    if (re) return d("img", { class: `q-tree__${R.img ? "img" : "avatar"} q-mr-sm`, src: re });
  }
  function H() {
    n("afterShow");
  }
  function Q() {
    n("afterHide");
  }
  function K(R) {
    const re = R[e.nodeKey], P = k.value[re], J = R.header && t[`header-${R.header}`] || t["default-header"], T = P.isParent === true ? A(R[e.childrenKey]) : [], E = T.length !== 0 || P.lazy && P.lazy !== "loaded";
    let X = R.body && t[`body-${R.body}`] || t["default-body"];
    const O = J !== void 0 || X !== void 0 ? M(R, P, re) : null;
    return X !== void 0 && (X = d("div", { class: "q-tree__node-body relative-position" }, [d("div", { class: g.value }, [X(O)])])), d("div", { key: re, class: `q-tree__node relative-position q-tree__node--${E === true ? "parent" : "child"}` }, [d("div", { class: "q-tree__node-header relative-position row no-wrap items-center" + (P.link === true ? " q-tree__node--link q-hoverable q-focusable" : "") + (P.selected === true ? " q-tree__node--selected" : "") + (P.disabled === true ? " q-tree__node--disabled" : ""), tabindex: P.link === true ? 0 : -1, ariaExpanded: T.length > 0 ? P.expanded : null, role: "treeitem", onClick: (le) => {
      ie(R, P, le);
    }, onKeypress(le) {
      Xl(le) !== true && (le.keyCode === 13 ? ie(R, P, le, true) : le.keyCode === 32 && ye(R, P, le, true));
    } }, [d("div", { class: "q-focus-helper", tabindex: -1, ref: (le) => {
      c[P.key] = le;
    } }), P.lazy === "loading" ? d(wn, { class: "q-tree__spinner", color: h.value }) : E === true ? d(et, { class: "q-tree__arrow" + (P.expanded === true ? " q-tree__arrow--rotate" : ""), name: m.value, onClick(le) {
      ye(R, P, le);
    } }) : null, P.hasTicking === true && P.noTick !== true ? d(sa, { class: "q-tree__tickbox", modelValue: P.indeterminate === true ? null : P.ticked, color: h.value, dark: a.value, dense: true, keepColor: true, disable: P.tickable !== true, onKeydown: je, "onUpdate:modelValue": (le) => {
      G(P, le);
    } }) : null, d("div", { class: "q-tree__node-header-content col row no-wrap items-center" + (P.selected === true ? _.value : g.value) }, [J ? J(O) : [C(R), d("div", R[e.labelKey])]])]), E === true ? e.noTransition === true ? P.expanded === true ? d("div", { class: "q-tree__node-collapsible" + g.value, key: `${re}__q` }, [X, d("div", { class: "q-tree__children" + (P.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, T)]) : null : d(Qs, { duration: e.duration, onShow: H, onHide: Q }, () => cn(d("div", { class: "q-tree__node-collapsible" + g.value, key: `${re}__q` }, [X, d("div", { class: "q-tree__children" + (P.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, T)]), [[Gv, P.expanded]])) : X]);
  }
  function W(R) {
    var _a3;
    (_a3 = c[R]) == null ? void 0 : _a3.focus();
  }
  function ie(R, re, P, J) {
    J !== true && re.selectable !== false && W(re.key), f.value && re.selectable ? e.noSelectionUnset === false ? n("update:selected", re.key !== e.selected ? re.key : null) : re.key !== e.selected && n("update:selected", re.key === void 0 ? null : re.key) : ye(R, re, P, J), typeof R.handler == "function" && R.handler(R);
  }
  function ye(R, re, P, J) {
    P !== void 0 && je(P), J !== true && re.selectable !== false && W(re.key), z(re.key, !re.expanded, R, re);
  }
  function G(R, re) {
    if (R.indeterminate === true && (re = R.indeterminateNextState), R.strictTicking) D([R.key], re);
    else if (R.leafTicking) {
      const P = [], J = (T) => {
        T.isParent ? (re !== true && T.noTick !== true && T.tickable === true && P.push(T.key), T.leafTicking === true && T.children.forEach(J)) : T.noTick !== true && T.tickable === true && (T.leafFilteredTicking !== true || T.matchesFilter === true) && P.push(T.key);
      };
      J(R), D(P, re);
    }
  }
  return e.defaultExpandAll === true && F(), Object.assign(l, { getNodeByKey: y, getTickedNodes: p, getExpandedNodes: b, isExpanded: S, collapseAll: $, expandAll: F, setExpanded: z, isTicked: L, setTicked: D }), () => {
    const R = A(e.nodes);
    return d("div", { class: s.value, role: "tree" }, R.length === 0 ? e.filter ? e.noResultsLabel || r.lang.tree.noResults : e.noNodesLabel || r.lang.tree.noNodes : R);
  };
} });
function Xd(e) {
  return (e * 100).toFixed(2) + "%";
}
var X_ = { ...nt, ...Eh, label: String, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, noThumbnails: Boolean, thumbnailFit: { type: String, default: "cover" }, autoUpload: Boolean, hideUploadBtn: Boolean, disable: Boolean, readonly: Boolean }, Yh = [...Rh, "start", "finish", "added", "removed"];
function G_(e, t) {
  const n = xe(), { props: l, slots: r, emit: a, proxy: o } = n, { $q: i } = o, u = lt(l, i);
  function c(O, le, be) {
    if (O.__status = le, le === "idle") {
      O.__uploaded = 0, O.__progress = 0, O.__sizeLabel = Bu(O.size), O.__progressLabel = "0.00%";
      return;
    }
    if (le === "failed") {
      o.$forceUpdate();
      return;
    }
    O.__uploaded = le === "uploaded" ? O.size : be, O.__progress = le === "uploaded" ? 1 : Math.min(0.9999, O.__uploaded / O.size), O.__progressLabel = Xd(O.__progress), o.$forceUpdate();
  }
  const s = v(() => l.disable !== true && l.readonly !== true), f = U(false), m = U(null), h = U(null), g = { files: U([]), queuedFiles: U([]), uploadedFiles: U([]), uploadedSize: U(0), updateFileStatus: c, isAlive: () => bl(n) === false }, { pickFiles: _, addFiles: w, onDragover: k, onDragleave: y, processFiles: p, getDndNode: b, maxFilesNumber: S, maxTotalSizeNumber: $ } = Ah({ editable: s, dnd: f, getFileInput: G, addFilesToQueue: R });
  Object.assign(g, e({ props: l, slots: r, emit: a, helpers: g, exposeApi: (O) => {
    Object.assign(g, O);
  } })), g.isBusy === void 0 && (g.isBusy = U(false));
  const F = U(0), z = v(() => F.value === 0 ? 0 : g.uploadedSize.value / F.value), B = v(() => Xd(z.value)), L = v(() => Bu(F.value)), D = v(() => s.value === true && g.isUploading.value !== true && (l.multiple === true || g.queuedFiles.value.length === 0) && (l.maxFiles === void 0 || g.files.value.length < S.value) && (l.maxTotalSize === void 0 || F.value < $.value)), M = v(() => s.value === true && g.isBusy.value !== true && g.isUploading.value !== true && g.queuedFiles.value.length !== 0);
  gn(gm, J);
  const A = v(() => "q-uploader column no-wrap" + (u.value === true ? " q-uploader--dark q-dark" : "") + (l.bordered === true ? " q-uploader--bordered" : "") + (l.square === true ? " q-uploader--square no-border-radius" : "") + (l.flat === true ? " q-uploader--flat no-shadow" : "") + (l.disable === true ? " disabled q-uploader--disable" : "") + (f.value === true ? " q-uploader--dnd" : "")), C = v(() => "q-uploader__header" + (l.color !== void 0 ? ` bg-${l.color}` : "") + (l.textColor !== void 0 ? ` text-${l.textColor}` : ""));
  ge(g.isUploading, (O, le) => {
    le === false && O === true ? a("start") : le === true && O === false && a("finish");
  });
  function H() {
    l.disable === false && (g.abort(), g.uploadedSize.value = 0, F.value = 0, ye(), g.files.value = [], g.queuedFiles.value = [], g.uploadedFiles.value = []);
  }
  function Q() {
    l.disable === false && W(["uploaded"], () => {
      g.uploadedFiles.value = [];
    });
  }
  function K() {
    W(["idle", "failed"], ({ size: O }) => {
      F.value -= O, g.queuedFiles.value = [];
    });
  }
  function W(O, le) {
    if (l.disable === true) return;
    const be = { files: [], size: 0 }, x = g.files.value.filter((q) => O.indexOf(q.__status) === -1 ? true : (be.size += q.size, be.files.push(q), q.__img !== void 0 && window.URL.revokeObjectURL(q.__img.src), false));
    be.files.length !== 0 && (g.files.value = x, le(be), a("removed", be.files));
  }
  function ie(O) {
    l.disable || (O.__status === "uploaded" ? g.uploadedFiles.value = g.uploadedFiles.value.filter((le) => le.__key !== O.__key) : O.__status === "uploading" ? O.__abort() : F.value -= O.size, g.files.value = g.files.value.filter((le) => le.__key !== O.__key ? true : (le.__img !== void 0 && window.URL.revokeObjectURL(le.__img.src), false)), g.queuedFiles.value = g.queuedFiles.value.filter((le) => le.__key !== O.__key), a("removed", [O]));
  }
  function ye() {
    g.files.value.forEach((O) => {
      O.__img !== void 0 && window.URL.revokeObjectURL(O.__img.src);
    });
  }
  function G() {
    return h.value || m.value.getElementsByClassName("q-uploader__input")[0];
  }
  function R(O, le) {
    const be = p(O, le, g.files.value, true), x = G();
    x != null && (x.value = ""), be !== void 0 && (be.forEach((q) => {
      if (g.updateFileStatus(q, "idle"), F.value += q.size, l.noThumbnails !== true && q.type.toUpperCase().startsWith("IMAGE")) {
        const V = new Image();
        V.src = window.URL.createObjectURL(q), q.__img = V;
      }
    }), g.files.value = g.files.value.concat(be), g.queuedFiles.value = g.queuedFiles.value.concat(be), a("added", be), l.autoUpload === true && g.upload());
  }
  function re() {
    M.value === true && g.upload();
  }
  function P(O, le, be) {
    if (O === true) {
      const x = { type: "a", key: le, icon: i.iconSet.uploader[le], flat: true, dense: true };
      let q;
      return le === "add" ? (x.onClick = _, q = J) : x.onClick = be, d(Ze, x, q);
    }
  }
  function J() {
    return d("input", { ref: h, class: "q-uploader__input overflow-hidden absolute-full", tabindex: -1, type: "file", title: "", accept: l.accept, multiple: l.multiple === true ? "multiple" : void 0, capture: l.capture, onMousedown: wt, onClick: _, onChange: R });
  }
  function T() {
    return r.header !== void 0 ? r.header(X) : [d("div", { class: "q-uploader__header-content column" }, [d("div", { class: "flex flex-center no-wrap q-gutter-xs" }, [P(g.queuedFiles.value.length !== 0, "removeQueue", K), P(g.uploadedFiles.value.length !== 0, "removeUploaded", Q), g.isUploading.value === true ? d(wn, { class: "q-uploader__spinner" }) : null, d("div", { class: "col column justify-center" }, [l.label !== void 0 ? d("div", { class: "q-uploader__title" }, [l.label]) : null, d("div", { class: "q-uploader__subtitle" }, [L.value + " / " + B.value])]), P(D.value, "add"), P(l.hideUploadBtn === false && M.value === true, "upload", g.upload), P(g.isUploading.value, "clear", g.abort)])])];
  }
  function E() {
    return r.list !== void 0 ? r.list(X) : g.files.value.map((O) => d("div", { key: O.__key, class: "q-uploader__file relative-position" + (l.noThumbnails !== true && O.__img !== void 0 ? " q-uploader__file--img" : "") + (O.__status === "failed" ? " q-uploader__file--failed" : O.__status === "uploaded" ? " q-uploader__file--uploaded" : ""), style: l.noThumbnails !== true && O.__img !== void 0 ? { backgroundImage: 'url("' + O.__img.src + '")', backgroundSize: l.thumbnailFit } : null }, [d("div", { class: "q-uploader__file-header row flex-center no-wrap" }, [O.__status === "failed" ? d(et, { class: "q-uploader__file-status", name: i.iconSet.type.negative, color: "negative" }) : null, d("div", { class: "q-uploader__file-header-content col" }, [d("div", { class: "q-uploader__title" }, [O.name]), d("div", { class: "q-uploader__subtitle row items-center no-wrap" }, [O.__sizeLabel + " / " + O.__progressLabel])]), O.__status === "uploading" ? d(Zm, { value: O.__progress, min: 0, max: 1, indeterminate: O.__progress === 0 }) : d(Ze, { round: true, dense: true, flat: true, icon: i.iconSet.uploader[O.__status === "uploaded" ? "done" : "clear"], onClick: () => {
      ie(O);
    } })])]));
  }
  Ke(() => {
    g.isUploading.value === true && g.abort(), g.files.value.length !== 0 && ye();
  });
  const X = {};
  for (const O in g) yt(g[O]) === true ? Vt(X, O, () => g[O].value) : X[O] = g[O];
  return Object.assign(X, { upload: re, reset: H, removeUploadedFiles: Q, removeQueuedFiles: K, removeFile: ie, pickFiles: _, addFiles: w }), tm(X, { canAddFiles: () => D.value, canUpload: () => M.value, uploadSizeLabel: () => L.value, uploadProgressLabel: () => B.value }), t({ ...g, upload: re, reset: H, removeUploadedFiles: Q, removeQueuedFiles: K, removeFile: ie, pickFiles: _, addFiles: w, canAddFiles: D, canUpload: M, uploadSizeLabel: L, uploadProgressLabel: B }), () => {
    const O = [d("div", { class: C.value }, T()), d("div", { class: "q-uploader__list scroll" }, E()), b("uploader")];
    g.isBusy.value === true && O.push(d("div", { class: "q-uploader__overlay absolute-full flex flex-center" }, [d(wn)]));
    const le = { ref: m, class: A.value };
    return D.value === true && Object.assign(le, { onDragover: k, onDragleave: y }), d("div", le, O);
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
  const l = U([]), r = U([]), a = U(0), o = v(() => ({ url: Hn(e.url), method: Hn(e.method), headers: Hn(e.headers), formFields: Hn(e.formFields), fieldName: Hn(e.fieldName), withCredentials: Hn(e.withCredentials), sendRaw: Hn(e.sendRaw), batch: Hn(e.batch) })), i = v(() => a.value > 0), u = v(() => r.value.length !== 0);
  let c;
  function s() {
    l.value.forEach((g) => {
      g.abort();
    }), r.value.length !== 0 && (c = true);
  }
  function f() {
    const g = n.queuedFiles.value.slice(0);
    n.queuedFiles.value = [], o.value.batch(g) ? m(g) : g.forEach((_) => {
      m([_]);
    });
  }
  function m(g) {
    if (a.value++, typeof e.factory != "function") {
      h(g, {});
      return;
    }
    const _ = e.factory(g);
    if (!_) t("factoryFailed", new Error("QUploader: factory() does not return properly"), g), a.value--;
    else if (typeof _.catch == "function" && typeof _.then == "function") {
      r.value.push(_);
      const w = (k) => {
        n.isAlive() === true && (r.value = r.value.filter((y) => y !== _), r.value.length === 0 && (c = false), n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach((y) => {
          n.updateFileStatus(y, "failed");
        }), t("factoryFailed", k, g), a.value--);
      };
      _.then((k) => {
        c === true ? w(new Error("Aborted")) : n.isAlive() === true && (r.value = r.value.filter((y) => y !== _), h(g, k));
      }).catch(w);
    } else h(g, _ || {});
  }
  function h(g, _) {
    const w = new FormData(), k = new XMLHttpRequest(), y = (M, A) => _[M] !== void 0 ? Hn(_[M])(A) : o.value[M](A), p = y("url", g);
    if (!p) {
      console.error("q-uploader: invalid or no URL specified"), a.value--;
      return;
    }
    const b = y("formFields", g);
    b !== void 0 && b.forEach((M) => {
      w.append(M.name, M.value);
    });
    let S = 0, $ = 0, F = 0, z = 0, B;
    k.upload.addEventListener("progress", (M) => {
      if (B === true) return;
      const A = Math.min(z, M.loaded);
      n.uploadedSize.value += A - F, F = A;
      let C = F - $;
      for (let H = S; C > 0 && H < g.length; H++) {
        const Q = g[H];
        if (C > Q.size) C -= Q.size, S++, $ += Q.size, n.updateFileStatus(Q, "uploading", Q.size);
        else {
          n.updateFileStatus(Q, "uploading", C);
          return;
        }
      }
    }, false), k.onreadystatechange = () => {
      k.readyState < 4 || (k.status && k.status < 400 ? (n.uploadedFiles.value = n.uploadedFiles.value.concat(g), g.forEach((M) => {
        n.updateFileStatus(M, "uploaded");
      }), t("uploaded", { files: g, xhr: k })) : (B = true, n.uploadedSize.value -= F, n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach((M) => {
        n.updateFileStatus(M, "failed");
      }), t("failed", { files: g, xhr: k })), a.value--, l.value = l.value.filter((M) => M !== k));
    }, k.open(y("method", g), p), y("withCredentials", g) === true && (k.withCredentials = true);
    const L = y("headers", g);
    L !== void 0 && L.forEach((M) => {
      k.setRequestHeader(M.name, M.value);
    });
    const D = y("sendRaw", g);
    g.forEach((M) => {
      n.updateFileStatus(M, "uploading", 0), D !== true && w.append(y("fieldName", M), M, M.name), M.xhr = k, M.__abort = () => {
        k.abort();
      }, z += M.size;
    }), t("uploading", { files: g, xhr: k }), l.value.push(k), D === true ? k.send(new Blob(g)) : k.send(w);
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
      const r = ly(e);
      r !== void 0 && ry(r, l, n.depth);
    });
  }, handlerKey(l) {
    yn(l, 13) === true && n.handler(l);
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
  const f = o.parentNode, m = o.nextElementSibling, h = Zd(o, a.resize), { width: g, height: _ } = to(f), { borderWidth: w, borderStyle: k, borderColor: y, borderRadius: p, backgroundColor: b, transform: S, position: $, cssText: F } = tf(o, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), z = o.classList.toString(), B = o.style.cssText, L = o.cloneNode(true), D = a.tween === true ? o.cloneNode(true) : void 0;
  D !== void 0 && (D.className = D.classList.toString().split(" ").filter((A) => /^bg-/.test(A) === false).join(" ")), a.hideFromClone === true && L.classList.add("q-morph--internal"), L.setAttribute("aria-hidden", "true"), L.style.transition = "none", L.style.animation = "none", L.style.pointerEvents = "none", f.insertBefore(L, m), o.qMorphCancel = () => {
    n = true, L.remove(), D == null ? void 0 : D.remove(), a.hideFromClone === true && L.classList.remove("q-morph--internal"), o.qMorphCancel = void 0;
  };
  const M = () => {
    const A = lf(r.to);
    if (n === true || rf(A) !== true) {
      typeof o.qMorphCancel == "function" && o.qMorphCancel();
      return;
    }
    o !== A && typeof A.qMorphCancel == "function" && A.qMorphCancel(), a.keepToClone !== true && A.classList.add("q-morph--internal"), L.classList.add("q-morph--internal");
    const { width: C, height: H } = to(f), { width: Q, height: K } = to(A.parentNode);
    a.hideFromClone !== true && L.classList.remove("q-morph--internal"), A.qMorphCancel = () => {
      n = true, L.remove(), D == null ? void 0 : D.remove(), a.hideFromClone === true && L.classList.remove("q-morph--internal"), a.keepToClone !== true && A.classList.remove("q-morph--internal"), o.qMorphCancel = void 0, A.qMorphCancel = void 0;
    };
    const W = () => {
      if (n === true) {
        typeof A.qMorphCancel == "function" && A.qMorphCancel();
        return;
      }
      a.hideFromClone !== true && (L.classList.add("q-morph--internal"), L.innerHTML = "", L.style.left = 0, L.style.right = "unset", L.style.top = 0, L.style.bottom = "unset", L.style.transform = "none"), a.keepToClone !== true && A.classList.remove("q-morph--internal");
      const ie = A.parentNode, { width: ye, height: G } = to(ie), R = A.cloneNode(a.keepToClone);
      R.setAttribute("aria-hidden", "true"), a.keepToClone !== true && (R.style.left = 0, R.style.right = "unset", R.style.top = 0, R.style.bottom = "unset", R.style.transform = "none", R.style.pointerEvents = "none"), R.classList.add("q-morph--internal");
      const re = A === o && f === ie ? L : A.nextElementSibling;
      ie.insertBefore(R, re);
      const { borderWidth: P, borderStyle: J, borderColor: T, borderRadius: E, backgroundColor: X, transform: O, position: le, cssText: be } = tf(A, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), x = A.classList.toString(), q = A.style.cssText;
      A.style.cssText = be, A.style.transform = "none", A.style.animation = "none", A.style.transition = "none", A.className = x.split(" ").filter((_e2) => /^bg-/.test(_e2) === false).join(" ");
      const V = Zd(A, a.resize), te = h.left - V.left, ae = h.top - V.top, Y = h.width / (V.width > 0 ? V.width : 10), fe = h.height / (V.height > 0 ? V.height : 100), N = g - C, ne = _ - H, de = ye - Q, oe = G - K, j = Math.max(h.widthM, N), se = Math.max(h.heightM, ne), we = Math.max(V.widthM, de), ke = Math.max(V.heightM, oe), Te = o === A && ["absolute", "fixed"].includes(le) === false && ["absolute", "fixed"].includes($) === false;
      let Me = le === "fixed", He = ie;
      for (; Me !== true && He !== document; ) Me = window.getComputedStyle(He).position === "fixed", He = He.parentNode;
      if (a.hideFromClone !== true && (L.style.display = "block", L.style.flex = "0 0 auto", L.style.opacity = 0, L.style.minWidth = "unset", L.style.maxWidth = "unset", L.style.minHeight = "unset", L.style.maxHeight = "unset", L.classList.remove("q-morph--internal")), a.keepToClone !== true && (R.style.display = "block", R.style.flex = "0 0 auto", R.style.opacity = 0, R.style.minWidth = "unset", R.style.maxWidth = "unset", R.style.minHeight = "unset", R.style.maxHeight = "unset"), R.classList.remove("q-morph--internal"), typeof a.classes == "string" && (A.className += " " + a.classes), typeof a.style == "string") A.style.cssText += " " + a.style;
      else if ($t(a.style) === true) for (const _e2 in a.style) A.style[_e2] = a.style[_e2];
      const Ve = nf(L), ce = nf(A), pe = Me === true ? document.documentElement : { scrollLeft: 0, scrollTop: 0 };
      A.style.position = Me === true ? "fixed" : "absolute", A.style.left = `${V.left - pe.scrollLeft}px`, A.style.right = "unset", A.style.top = `${V.top - pe.scrollTop}px`, A.style.margin = 0, a.resize === true && (A.style.minWidth = "unset", A.style.maxWidth = "unset", A.style.minHeight = "unset", A.style.maxHeight = "unset", A.style.overflow = "hidden", A.style.overflowX = "hidden", A.style.overflowY = "hidden"), document.body.appendChild(A), D !== void 0 && (D.style.cssText = F, D.style.transform = "none", D.style.animation = "none", D.style.transition = "none", D.style.position = A.style.position, D.style.left = `${h.left - pe.scrollLeft}px`, D.style.right = "unset", D.style.top = `${h.top - pe.scrollTop}px`, D.style.margin = 0, D.style.pointerEvents = "none", a.resize === true && (D.style.minWidth = "unset", D.style.maxWidth = "unset", D.style.minHeight = "unset", D.style.maxHeight = "unset", D.style.overflow = "hidden", D.style.overflowX = "hidden", D.style.overflowY = "hidden"), document.body.appendChild(D));
      const ue = (_e2) => {
        o === A && l !== true ? (A.style.cssText = B, A.className = z) : (A.style.cssText = q, A.className = x), R.parentNode === ie && ie.insertBefore(A, R), L.remove(), R.remove(), D == null ? void 0 : D.remove(), t = () => false, o.qMorphCancel = void 0, A.qMorphCancel = void 0, typeof a.onEnd == "function" && a.onEnd(l === true ? "to" : "from", _e2 === true);
      };
      if (a.useCSS !== true && typeof A.animate == "function") {
        const _e2 = a.resize === true ? { transform: `translate(${te}px, ${ae}px)`, width: `${j}px`, height: `${se}px` } : { transform: `translate(${te}px, ${ae}px) scale(${Y}, ${fe})` }, Ce = a.resize === true ? { width: `${we}px`, height: `${ke}px` } : {}, Oe = a.resize === true ? { width: `${j}px`, height: `${se}px` } : {}, Re = a.resize === true ? { transform: `translate(${-1 * te}px, ${-1 * ae}px)`, width: `${we}px`, height: `${ke}px` } : { transform: `translate(${-1 * te}px, ${-1 * ae}px) scale(${1 / Y}, ${1 / fe})` }, Ye = D !== void 0 ? { opacity: a.tweenToOpacity } : { backgroundColor: b }, it = D !== void 0 ? { opacity: 1 } : { backgroundColor: X };
        s = A.animate([{ margin: 0, borderWidth: w, borderStyle: k, borderColor: y, borderRadius: p, zIndex: Ve, transformOrigin: "0 0", ..._e2, ...Ye }, { margin: 0, borderWidth: P, borderStyle: J, borderColor: T, borderRadius: E, zIndex: ce, transformOrigin: "0 0", transform: O, ...Ce, ...it }], { duration: a.duration, easing: a.easing, fill: a.fill, delay: a.delay }), u = D === void 0 ? void 0 : D.animate([{ opacity: a.tweenFromOpacity, margin: 0, borderWidth: w, borderStyle: k, borderColor: y, borderRadius: p, zIndex: Ve, transformOrigin: "0 0", transform: S, ...Oe }, { opacity: 0, margin: 0, borderWidth: P, borderStyle: J, borderColor: T, borderRadius: E, zIndex: ce, transformOrigin: "0 0", ...Re }], { duration: a.duration, easing: a.easing, fill: a.fill, delay: a.delay }), i = a.hideFromClone === true || Te === true ? void 0 : L.animate([{ margin: `${ne < 0 ? ne / 2 : 0}px ${N < 0 ? N / 2 : 0}px`, width: `${j + h.marginH}px`, height: `${se + h.marginV}px` }, { margin: 0, width: 0, height: 0 }], { duration: a.duration, easing: a.easing, fill: a.fill, delay: a.delay }), c = a.keepToClone === true ? void 0 : R.animate([Te === true ? { margin: `${ne < 0 ? ne / 2 : 0}px ${N < 0 ? N / 2 : 0}px`, width: `${j + h.marginH}px`, height: `${se + h.marginV}px` } : { margin: 0, width: 0, height: 0 }, { margin: `${oe < 0 ? oe / 2 : 0}px ${de < 0 ? de / 2 : 0}px`, width: `${we + V.marginH}px`, height: `${ke + V.marginV}px` }], { duration: a.duration, easing: a.easing, fill: a.fill, delay: a.delay });
        const Ct = (Ut) => {
          i == null ? void 0 : i.cancel(), u == null ? void 0 : u.cancel(), c == null ? void 0 : c.cancel(), s.cancel(), s.removeEventListener("finish", Ct), s.removeEventListener("cancel", Ct), ue(Ut), i = void 0, u = void 0, c = void 0, s = void 0;
        };
        o.qMorphCancel = () => {
          o.qMorphCancel = void 0, n = true, Ct();
        }, A.qMorphCancel = () => {
          A.qMorphCancel = void 0, n = true, Ct();
        }, s.addEventListener("finish", Ct), s.addEventListener("cancel", Ct), t = (Ut) => n === true || s === void 0 ? false : Ut === true ? (Ct(true), true) : (l = l !== true, i == null ? void 0 : i.reverse(), u == null ? void 0 : u.reverse(), c == null ? void 0 : c.reverse(), s.reverse(), true);
      } else {
        const _e2 = `q-morph-anim-${++ow}`, Ce = document.createElement("style"), Oe = a.resize === true ? `
            transform: translate(${te}px, ${ae}px);
            width: ${j}px;
            height: ${se}px;
          ` : `transform: translate(${te}px, ${ae}px) scale(${Y}, ${fe});`, Re = a.resize === true ? `
            width: ${we}px;
            height: ${ke}px;
          ` : "", Ye = a.resize === true ? `
            width: ${j}px;
            height: ${se}px;
          ` : "", it = a.resize === true ? `
            transform: translate(${-1 * te}px, ${-1 * ae}px);
            width: ${we}px;
            height: ${ke}px;
          ` : `transform: translate(${-1 * te}px, ${-1 * ae}px) scale(${1 / Y}, ${1 / fe});`, Ct = D !== void 0 ? `opacity: ${a.tweenToOpacity};` : `background-color: ${b};`, Ut = D !== void 0 ? "opacity: 1;" : `background-color: ${X};`, nl = D === void 0 ? "" : `
            @keyframes ${_e2}-from-tween {
              0% {
                opacity: ${a.tweenFromOpacity};
                margin: 0;
                border-width: ${w};
                border-style: ${k};
                border-color: ${y};
                border-radius: ${p};
                z-index: ${Ve};
                transform-origin: 0 0;
                transform: ${S};
                ${Ye}
              }

              100% {
                opacity: 0;
                margin: 0;
                border-width: ${P};
                border-style: ${J};
                border-color: ${T};
                border-radius: ${E};
                z-index: ${ce};
                transform-origin: 0 0;
                ${it}
              }
            }
          `, rn = a.hideFromClone === true || Te === true ? "" : `
            @keyframes ${_e2}-from {
              0% {
                margin: ${ne < 0 ? ne / 2 : 0}px ${N < 0 ? N / 2 : 0}px;
                width: ${j + h.marginH}px;
                height: ${se + h.marginV}px;
              }

              100% {
                margin: 0;
                width: 0;
                height: 0;
              }
            }
          `, In = Te === true ? `
            margin: ${ne < 0 ? ne / 2 : 0}px ${N < 0 ? N / 2 : 0}px;
            width: ${j + h.marginH}px;
            height: ${se + h.marginV}px;
          ` : `
            margin: 0;
            width: 0;
            height: 0;
          `, ve = a.keepToClone === true ? "" : `
            @keyframes ${_e2}-to {
              0% {
                ${In}
              }

              100% {
                margin: ${oe < 0 ? oe / 2 : 0}px ${de < 0 ? de / 2 : 0}px;
                width: ${we + V.marginH}px;
                height: ${ke + V.marginV}px;
              }
            }
          `;
        Ce.innerHTML = `
          @keyframes ${_e2} {
            0% {
              margin: 0;
              border-width: ${w};
              border-style: ${k};
              border-color: ${y};
              border-radius: ${p};
              background-color: ${b};
              z-index: ${Ve};
              transform-origin: 0 0;
              ${Oe}
              ${Ct}
            }

            100% {
              margin: 0;
              border-width: ${P};
              border-style: ${J};
              border-color: ${T};
              border-radius: ${E};
              background-color: ${X};
              z-index: ${ce};
              transform-origin: 0 0;
              transform: ${O};
              ${Re}
              ${Ut}
            }
          }

          ${rn}

          ${nl}

          ${ve}
        `, document.head.appendChild(Ce);
        let Se = "normal";
        L.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${Se} ${a.fill} ${_e2}-from`, D !== void 0 && (D.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${Se} ${a.fill} ${_e2}-from-tween`), R.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${Se} ${a.fill} ${_e2}-to`, A.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${Se} ${a.fill} ${_e2}`;
        const Fe = (Be) => {
          Be === Object(Be) && Be.animationName !== _e2 || (A.removeEventListener("animationend", Fe), A.removeEventListener("animationcancel", Fe), ue(), Ce.remove());
        };
        o.qMorphCancel = () => {
          o.qMorphCancel = void 0, n = true, Fe();
        }, A.qMorphCancel = () => {
          A.qMorphCancel = void 0, n = true, Fe();
        }, A.addEventListener("animationend", Fe), A.addEventListener("animationcancel", Fe), t = (Be) => n === true || !A || !L || !R ? false : Be === true ? (Fe(), true) : (l = l !== true, Se = Se === "normal" ? "reverse" : "normal", L.style.animationDirection = Se, D.style.animationDirection = Se, R.style.animationDirection = Se, A.style.animationDirection = Se, true);
      }
    };
    a.waitFor > 0 || a.waitFor === "transitionend" || a.waitFor === Object(a.waitFor) && typeof a.waitFor.then == "function" ? (a.waitFor > 0 ? new Promise((ye) => setTimeout(ye, a.waitFor)) : a.waitFor === "transitionend" ? new Promise((ye) => {
      const G = () => {
        R !== null && (clearTimeout(R), R = null), A && (A.removeEventListener("transitionend", G), A.removeEventListener("transitioncancel", G)), ye();
      };
      let R = setTimeout(G, 400);
      A.addEventListener("transitionend", G), A.addEventListener("transitioncancel", G);
    }) : a.waitFor).then(W).catch(() => {
      typeof A.qMorphCancel == "function" && A.qMorphCancel();
    }) : W();
  };
  return typeof e.onToggle == "function" && e.onToggle(), requestAnimationFrame(M), (A) => t(A);
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
var pw = { childList: true, subtree: true, attributes: true, characterData: true, attributeOldValue: true, characterDataOldValue: true };
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
  const r = { once: t, opts: Object.keys(n).length === 0 ? pw : n };
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
    n.handler(pl(n.scrollTarget), fi(n.scrollTarget));
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
var eg = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] }, yw = new RegExp(`^([\\d+]+|${Object.keys(eg).join("|")})$`, "i");
function _w(e, t) {
  const { top: n, left: l } = tn(e);
  return Math.abs(l - t.left) >= 7 || Math.abs(n - t.top) >= 7;
}
Pn({ name: "touch-repeat", beforeMount(e, { modifiers: t, value: n, arg: l }) {
  const r = Object.keys(t).reduce((u, c) => {
    if (yw.test(c) === true) {
      const s = isNaN(parseInt(c, 10)) ? eg[c.toLowerCase()] : parseInt(c, 10);
      s >= 0 && u.push(s);
    }
    return u;
  }, []);
  if (t.mouse !== true && De.has.touch !== true && r.length === 0) return;
  const a = typeof l == "string" && l.length !== 0 ? l.split(":").map((u) => parseInt(u, 10)) : [0, 600, 300], o = a.length - 1, i = { keyboard: r, handler: n, noop: xt, mouseStart(u) {
    i.event === void 0 && typeof i.handler == "function" && oi(u) === true && (kt(i, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]), i.start(u, true));
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
    s !== true && (i.origin = tn(u));
    function f(h) {
      i.styleCleanup = void 0, document.documentElement.style.cursor = "";
      const g = () => {
        document.body.classList.remove("non-selectable");
      };
      h === true ? (En(), setTimeout(g, 10)) : g();
    }
    De.is.mobile === true && (document.body.classList.add("non-selectable"), En(), i.styleCleanup = f), i.event = { touch: c !== true && s !== true, mouse: c === true, keyboard: s === true, startTime: Date.now(), repeatCount: 0 };
    const m = () => {
      if (i.timer = void 0, i.event === void 0) return;
      i.event.repeatCount === 0 && (i.event.evt = u, s === true ? i.event.keyCode = u.keyCode : i.event.position = tn(u), De.is.mobile !== true && (document.documentElement.style.cursor = "pointer", document.body.classList.add("non-selectable"), En(), i.styleCleanup = f)), i.event.duration = Date.now() - i.event.startTime, i.event.repeatCount += 1, i.handler(i.event);
      const h = o < i.event.repeatCount ? o : i.event.repeatCount;
      i.timer = setTimeout(m, a[h]);
    };
    a[0] === 0 ? m() : i.timer = setTimeout(m, a[0]);
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
  ny(e === null || e === document.documentElement ? document.body : e);
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
  const { proxy: n } = xe(), l = lt(e, n.$q), r = U(null);
  function a() {
    r.value.show();
  }
  function o() {
    r.value.hide();
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
      return h.label === void 0 ? d(Kl, { class: "col-all", dark: l.value }) : d("div", { class: ["q-bottom-sheet__item q-hoverable q-focusable cursor-pointer relative-position", h.class], style: h.style, tabindex: 0, role: "listitem", onClick() {
        i(h);
      }, onKeyup(_) {
        _.keyCode === 13 && i(h);
      } }, [d("div", { class: "q-focus-helper" }), h.icon ? d(et, { name: h.icon, color: h.color }) : g ? d("img", { class: h.avatar ? "q-bottom-sheet__avatar" : "", src: g }) : d("div", { class: "q-bottom-sheet__empty-icon" }), d("div", h.label)]);
    });
  }
  function s() {
    return e.actions.map((h) => {
      const g = h.avatar || h.img;
      return h.label === void 0 ? d(Kl, { spaced: true, dark: l.value }) : d(Tr, { class: ["q-bottom-sheet__item", h.classes], style: h.style, tabindex: 0, clickable: true, dark: l.value, onClick() {
        i(h);
      } }, () => [d(hn, { avatar: true }, () => h.icon ? d(et, { name: h.icon, color: h.color }) : g ? d("img", { class: h.avatar ? "q-bottom-sheet__avatar" : "", src: g }) : null), d(hn, () => h.label)]);
    });
  }
  function f() {
    const h = [];
    return e.title && h.push(d(Ol, { class: "q-dialog__title" }, () => e.title)), e.message && h.push(d(Ol, { class: "q-dialog__message" }, () => e.message)), h.push(e.grid === true ? d("div", { class: "row items-stretch justify-start", role: "list" }, c()) : d("div", { role: "list" }, s())), h;
  }
  function m() {
    return [d(Hm, { class: [`q-bottom-sheet q-bottom-sheet--${e.grid === true ? "grid" : "list"}` + (l.value === true ? " q-bottom-sheet--dark q-dark" : ""), e.cardClass], style: e.cardStyle }, f)];
  }
  return Object.assign(n, { show: a, hide: o }), () => d(hi, { ref: r, position: "bottom", onHide: u }, m);
} });
function lg(e, t) {
  for (const n in t) n !== "spinner" && Object(t[n]) === t[n] ? (e[n] = Object(e[n]) !== e[n] ? {} : { ...e[n] }, lg(e[n], t[n])) : e[n] = t[n];
}
function Mw(e, t, n) {
  return (l) => {
    let r, a;
    const o = l.component !== void 0;
    if (o === true) {
      const { component: y, componentProps: p } = l;
      r = typeof y == "string" ? n.component(y) : y, a = p || {};
    } else {
      const { class: y, style: p, ...b } = l;
      r = e, a = b, y !== void 0 && (b.cardClass = y), p !== void 0 && (b.cardStyle = p);
    }
    let i, u = false;
    const c = U(null), s = La(false, "dialog"), f = (y) => {
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
    }, m = [], h = [], g = { onOk(y) {
      return m.push(y), g;
    }, onCancel(y) {
      return h.push(y), g;
    }, onDismiss(y) {
      return m.push(y), h.push(y), g;
    }, hide() {
      return f("hide"), g;
    }, update(y) {
      if (i !== null) {
        if (o === true) Object.assign(a, y);
        else {
          const { class: p, style: b, ...S } = y;
          p !== void 0 && (S.cardClass = p), b !== void 0 && (S.cardStyle = b), lg(a, S);
        }
        i.$forceUpdate();
      }
      return g;
    } }, _ = (y) => {
      u = true, m.forEach((p) => {
        p(y);
      });
    }, w = () => {
      k.unmount(s), Rs(s), k = null, i = null, u !== true && h.forEach((y) => {
        y();
      });
    };
    let k = ui({ name: "QGlobalDialog", setup: () => () => d(r, { ...a, ref: c, onOk: _, onHide: w, onVnodeMounted(...y) {
      typeof a.onVnodeMounted == "function" && a.onVnodeMounted(...y), We(() => f("show"));
    } }) }, n);
    return i = k.mount(s), g;
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
  const { proxy: n } = xe(), { $q: l } = n, r = lt(e, l), a = U(null), o = U(e.prompt !== void 0 ? e.prompt.model : e.options !== void 0 ? e.options.model : void 0), i = v(() => "q-dialog-plugin" + (r.value === true ? " q-dialog-plugin--dark q-dark" : "") + (e.progress !== false ? " q-dialog-plugin--progress" : "")), u = v(() => e.color || (r.value === true ? "amber" : "primary")), c = v(() => e.progress === false ? null : $t(e.progress) === true ? { component: e.progress.spinner || wn, props: { color: e.progress.color || u.value } } : { component: wn, props: { color: u.value } }), s = v(() => e.prompt !== void 0 || e.options !== void 0), f = v(() => {
    if (s.value !== true) return {};
    const { model: C, isValid: H, items: Q, ...K } = e.prompt !== void 0 ? e.prompt : e.options;
    return K;
  }), m = v(() => $t(e.ok) === true || e.ok === true ? l.lang.label.ok : e.ok), h = v(() => $t(e.cancel) === true || e.cancel === true ? l.lang.label.cancel : e.cancel), g = v(() => e.prompt !== void 0 ? e.prompt.isValid !== void 0 && e.prompt.isValid(o.value) !== true : e.options !== void 0 ? e.options.isValid !== void 0 && e.options.isValid(o.value) !== true : false), _ = v(() => ({ color: u.value, label: m.value, ripple: false, disable: g.value, ...$t(e.ok) === true ? e.ok : { flat: true }, "data-autofocus": e.focus === "ok" && s.value !== true || void 0, onClick: p })), w = v(() => ({ color: u.value, label: h.value, ripple: false, ...$t(e.cancel) === true ? e.cancel : { flat: true }, "data-autofocus": e.focus === "cancel" && s.value !== true || void 0, onClick: b }));
  ge(() => e.prompt && e.prompt.model, $), ge(() => e.options && e.options.model, $);
  function k() {
    a.value.show();
  }
  function y() {
    a.value.hide();
  }
  function p() {
    t("ok", Xe(o.value)), y();
  }
  function b() {
    y();
  }
  function S() {
    t("hide");
  }
  function $(C) {
    o.value = C;
  }
  function F(C) {
    g.value !== true && e.prompt.type !== "textarea" && yn(C, 13) === true && p();
  }
  function z(C, H) {
    return e.html === true ? d(Ol, { class: C, innerHTML: H }) : d(Ol, { class: C }, () => H);
  }
  function B() {
    return [d(Bh, { color: u.value, dense: true, autofocus: true, dark: r.value, ...f.value, modelValue: o.value, "onUpdate:modelValue": $, onKeyup: F })];
  }
  function L() {
    return [d(H1, { color: u.value, options: e.options.items, dark: r.value, ...f.value, modelValue: o.value, "onUpdate:modelValue": $ })];
  }
  function D() {
    const C = [];
    return e.cancel && C.push(d(Ze, w.value)), e.ok && C.push(d(Ze, _.value)), d(_y, { class: e.stackButtons === true ? "items-end" : "", vertical: e.stackButtons, align: "right" }, () => C);
  }
  function M() {
    const C = [];
    return e.title && C.push(z("q-dialog__title", e.title)), e.progress !== false && C.push(d(Ol, { class: "q-dialog__progress" }, () => d(c.value.component, c.value.props))), e.message && C.push(z("q-dialog__message", e.message)), e.prompt !== void 0 ? C.push(d(Ol, { class: "scroll q-dialog-plugin__form" }, B)) : e.options !== void 0 && C.push(d(Kl, { dark: r.value }), d(Ol, { class: "scroll q-dialog-plugin__form" }, L), d(Kl, { dark: r.value })), (e.ok || e.cancel) && C.push(D()), C;
  }
  function A() {
    return [d(Hm, { class: [i.value, e.cardClass], style: e.cardStyle, dark: r.value }, M)];
  }
  return Object.assign(n, { show: k, hide: y }), () => d(hi, { ref: a, onHide: S }, A);
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
} }), Vw = Sn, lo = U(null), ff = Cl({ isActive: false }, { start: xt, stop: xt, increment: xt, setDefaults: xt, install({ $q: e, parentApp: t }) {
  if (e.loadingBar = this, this.__installed === true) {
    e.config.loadingBar !== void 0 && this.setDefaults(e.config.loadingBar);
    return;
  }
  const n = U(e.config.loadingBar !== void 0 ? { ...e.config.loadingBar } : {});
  function l() {
    ff.isActive = true;
  }
  function r() {
    ff.isActive = false;
  }
  const a = La("q-loading-bar");
  ui({ name: "LoadingBar", devtools: { hide: true }, setup: () => () => d($p, { ...n.value, onStart: l, onStop: r, ref: lo }) }, t).mount(a), Object.assign(this, { start(o) {
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
      Cn[l] = U([]);
      const r = ["left", "center", "right"].includes(l) === true ? "center" : l.indexOf("top") !== -1 ? "top" : "bottom", a = l.indexOf("left") !== -1 ? "start" : l.indexOf("right") !== -1 ? "end" : "center", o = ["left", "right"].includes(l) ? `items-${l === "left" ? "start" : "end"} justify-center` : l === "center" ? "flex-center" : `items-${a}`;
      dg[l] = `q-notifications__list q-notifications__list--${r} fixed column no-wrap ${o}`;
    });
    const n = La("q-notify");
    ui(jw(), t).mount(n);
  }
} };
function Qw(e) {
  return Lu(e) === true ? "__q_date|" + e.getTime() : kp(e) === true ? "__q_expr|" + e.source : typeof e == "number" ? "__q_numb|" + e : typeof e == "boolean" ? "__q_bool|" + (e ? "1" : "0") : typeof e == "string" ? "__q_strn|" + e : typeof e == "function" ? "__q_strn|" + e.toString() : e === Object(e) ? "__q_objt|" + JSON.stringify(e) : e;
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
function pg() {
  return qt(sm);
}
var Gw = { version: "2.18.1", install: qp, lang: ii, iconSet: um };
function Zw(e, t) {
  const n = gs("router-view");
  return Xn(), Bl(n, { class: "view" });
}
const yg = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, r] of t) n[l] = r;
  return n;
}, Jw = {}, ex = yg(Jw, [["render", Zw]]), tx = "M10,2C8.18,2 6.47,2.5 5,3.35C8,5.08 10,8.3 10,12C10,15.7 8,18.92 5,20.65C6.47,21.5 8.18,22 10,22A10,10 0 0,0 20,12A10,10 0 0,0 10,2Z", nx = "M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z", lx = /* @__PURE__ */ Er({ __name: "Quasar", setup(e) {
  const t = pg();
  let n = U(false), l = U(false), r = U(true);
  const a = "production";
  return (o, i) => {
    const u = gs("router-view"), c = I0("ripple");
    return Xn(), Bl(Ie(F1), { view: "hHh LpR fFf" }, { default: Rt(() => [Je(Ie(S1), { class: "bg-primary text-white", elevated: "", id: "header" }, { default: Rt(() => [Je(Ie(Wd), null, { default: Rt(() => [Je(Ie(Ze), { dense: "", flat: "", round: "", icon: "menu", onClick: i[0] || (i[0] = (s) => yt(n) ? n.value = !Ie(n) : n = !Ie(n)) }), Je(Ie(Yd), null, { default: Rt(() => [Je(Ie(Ou), null, { default: Rt(() => i[10] || (i[10] = [Bt("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" }, null, -1)])), _: 1 }), i[11] || (i[11] = Fl("\xA0WebGL mtg"))]), _: 1 }), Ie(t).dark.isActive ? (Xn(), Bl(Ie(Ze), { key: 0, dense: "", flat: "", round: "", icon: Ie(nx), onClick: i[1] || (i[1] = (s) => Ie(t).dark.set(false)) }, null, 8, ["icon"])) : wc("", true), Ie(t).dark.isActive ? wc("", true) : (Xn(), Bl(Ie(Ze), { key: 1, dense: "", flat: "", round: "", icon: Ie(tx), onClick: i[2] || (i[2] = (s) => Ie(t).dark.set(true)) }, null, 8, ["icon"])), Je(Ie(Ze), { dense: "", flat: "", round: "", icon: "menu", onClick: i[3] || (i[3] = (s) => yt(l) ? l.value = !Ie(l) : l = !Ie(l)) })]), _: 1 })]), _: 1 }), Je(Ie(Md), { modelValue: Ie(n), "onUpdate:modelValue": i[8] || (i[8] = (s) => yt(n) ? n.value = s : n = s), side: "left", bordered: "", mini: Ie(r), overlay: "" }, { default: Rt(() => [Je(Ie(W1), { class: "fit" }, { default: Rt(() => [Je(Ie(Oh), { class: "menu-list padding" }, { default: Rt(() => [cn((Xn(), Bl(Ie(Tr), { clickable: "", onMouseover: i[4] || (i[4] = (s) => yt(r) ? r.value = false : r = false), onMouseout: i[5] || (i[5] = (s) => yt(r) ? r.value = true : r = true) }, { default: Rt(() => [Je(Ie(hn), { avatar: "" }, { default: Rt(() => [Je(Ie(et), { name: "inbox" })]), _: 1 }), Je(Ie(hn), null, { default: Rt(() => i[12] || (i[12] = [Fl("inbox")])), _: 1 })]), _: 1 })), [[c]]), cn((Xn(), Bl(Ie(Tr), { clickable: "", onMouseover: i[6] || (i[6] = (s) => yt(r) ? r.value = false : r = false), onMouseout: i[7] || (i[7] = (s) => yt(r) ? r.value = true : r = true) }, { default: Rt(() => [Je(Ie(hn), { avatar: "" }, { default: Rt(() => [Je(Ie(et), { name: "login" })]), _: 1 }), Je(Ie(hn), null, { default: Rt(() => i[13] || (i[13] = [Fl("login")])), _: 1 })]), _: 1 })), [[c]])]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["modelValue", "mini"]), Je(Ie(Md), { modelValue: Ie(l), "onUpdate:modelValue": i[9] || (i[9] = (s) => yt(l) ? l.value = s : l = s), side: "right", bordered: "", overlay: "" }, { default: Rt(() => i[14] || (i[14] = [Fl("right")])), _: 1 }, 8, ["modelValue"]), Je(Ie(j1), null, { default: Rt(() => [Je(u)]), _: 1 }), Je(Ie(x1), { class: "bg-grey-8 text-orange", elevated: "", id: "footer" }, { default: Rt(() => [Je(Ie(Wd), null, { default: Rt(() => [Je(Ie(Yd), { style: { "font-size": "1.0em" } }, { default: Rt(() => [Je(Ie(Ou), { class: "q-mr-sm", size: "sm" }, { default: Rt(() => i[15] || (i[15] = [Bt("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" }, null, -1)])), _: 1 }), Fl("\xA0vite / vue / quasar / wasm / webgl mtg \xA0mode: " + If(Ie(a)), 1)]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 });
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
const px = /\/$/, yx = (e) => e.replace(px, "");
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
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), yx(e);
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
  const i = ({ state: m }) => {
    const h = qg(e, location), g = n.value, _ = t.value;
    let w = 0;
    if (m) {
      if (n.value = h, t.value = m, o && o === g) {
        o = null;
        return;
      }
      w = _ ? m.position - _.position : 0;
    } else l(h);
    r.forEach((k) => {
      k(n.value, g, { delta: w, type: qa.pop, direction: w ? w > 0 ? fa.forward : fa.back : fa.unknown });
    });
  };
  function u() {
    o = n.value;
  }
  function c(m) {
    r.push(m);
    const h = () => {
      const g = r.indexOf(m);
      g > -1 && r.splice(g, 1);
    };
    return a.push(h), h;
  }
  function s() {
    const { history: m } = window;
    m.state && m.replaceState(ut({}, m.state, { scroll: _i() }), "");
  }
  function f() {
    for (const m of a) m();
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
    const f = e.indexOf("#"), m = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + u : Ax() + e + u;
    try {
      t[s ? "replaceState" : "pushState"](c, "", m), r.value = c;
    } catch (h) {
      console.error(h), n[s ? "replace" : "assign"](m);
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
var pf;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(pf || (pf = {}));
function Mr(e, t) {
  return ut(new Error(), { type: e, [Eg]: true }, t);
}
function jn(e, t) {
  return e instanceof Error && Eg in e && (t == null || !!(e.type & t));
}
const yf = "[^/]+?", Ox = { sensitive: false, strict: false, start: true, end: true }, Vx = /[.+*?^${}()[\]/\\]/g;
function Dx(e, t) {
  const n = ut({}, Ox, t), l = [];
  let r = n.start ? "^" : "";
  const a = [];
  for (const c of e) {
    const s = c.length ? [] : [90];
    n.strict && !c.length && (r += "/");
    for (let f = 0; f < c.length; f++) {
      const m = c[f];
      let h = 40 + (n.sensitive ? 0.25 : 0);
      if (m.type === 0) f || (r += "/"), r += m.value.replace(Vx, "\\$&"), h += 40;
      else if (m.type === 1) {
        const { value: g, repeatable: _, optional: w, regexp: k } = m;
        a.push({ name: g, repeatable: _, optional: w });
        const y = k || yf;
        if (y !== yf) {
          h += 10;
          try {
            new RegExp(`(${y})`);
          } catch (b) {
            throw new Error(`Invalid custom RegExp for param "${g}" (${y}): ` + b.message);
          }
        }
        let p = _ ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`;
        f || (p = w && c.length < 2 ? `(?:/${p})` : "/" + p), w && (p += "?"), r += p, h += 20, w && (h += -8), _ && (h += -20), y === ".*" && (h += -50);
      }
      s.push(h);
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
    for (let m = 1; m < s.length; m++) {
      const h = s[m] || "", g = a[m - 1];
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
        const y = An(k) ? k.join("/") : k;
        if (!y) if (w) m.length < 2 && (s.endsWith("/") ? s = s.slice(0, -1) : f = true);
        else throw new Error(`Missing required param "${g}"`);
        s += y;
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
  function t(h) {
    throw new Error(`ERR (${n})/"${c}": ${h}`);
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
        u === "(" ? n = 2 : Nx.test(u) ? m() : (f(), n = 0, u !== "*" && u !== "?" && u !== "+" && i--);
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
  function a(f, m, h) {
    const g = !h, _ = xf(f);
    _.aliasOf = h && h.record;
    const w = Cf(t, f), k = [_];
    if ("alias" in f) {
      const b = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const S of b) k.push(xf(ut({}, _, { components: h ? h.record.components : _.components, path: S, aliasOf: h ? h.record : _ })));
    }
    let y, p;
    for (const b of k) {
      const { path: S } = b;
      if (m && S[0] !== "/") {
        const $ = m.record.path, F = $[$.length - 1] === "/" ? "" : "/";
        b.path = m.record.path + (S && F + S);
      }
      if (y = jx(b, m, w), h ? h.alias.push(y) : (p = p || y, p !== y && p.alias.push(y), g && f.name && !Sf(y) && o(f.name)), Ag(y) && u(y), _.children) {
        const $ = _.children;
        for (let F = 0; F < $.length; F++) a($[F], y, h && h.children[F]);
      }
      h = h || y;
    }
    return p ? () => {
      o(p);
    } : da;
  }
  function o(f) {
    if (Mg(f)) {
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
    const m = Wx(f, n);
    n.splice(m, 0, f), f.record.name && !Sf(f) && l.set(f.record.name, f);
  }
  function c(f, m) {
    let h, g = {}, _, w;
    if ("name" in f && f.name) {
      if (h = l.get(f.name), !h) throw Mr(1, { location: f });
      w = h.record.name, g = ut(wf(m.params, h.keys.filter((p) => !p.optional).concat(h.parent ? h.parent.keys.filter((p) => p.optional) : []).map((p) => p.name)), f.params && wf(f.params, h.keys.map((p) => p.name))), _ = h.stringify(g);
    } else if (f.path != null) _ = f.path, h = n.find((p) => p.re.test(_)), h && (g = h.parse(_), w = h.record.name);
    else {
      if (h = m.name ? l.get(m.name) : n.find((p) => p.re.test(m.path)), !h) throw Mr(1, { location: f, currentLocation: m });
      w = h.record.name, g = ut({}, m.params, f.params), _ = h.stringify(g);
    }
    const k = [];
    let y = h;
    for (; y; ) k.unshift(y.record), y = y.parent;
    return { name: w, path: _, params: g, matched: k, meta: Kx(k) };
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
    const c = (m) => {
      m === false ? u(Mr(4, { from: n, to: t })) : m instanceof Error ? u(m) : Fx(m) ? u(Mr(2, { from: t, to: m })) : (o && l.enterCallbacks[r] === o && typeof m == "function" && o.push(m), i());
    }, s = a(() => e.call(l && l.instances[r], t, n, c));
    let f = Promise.resolve(s);
    e.length < 3 && (f = f.then(c)), f.catch((m) => u(m));
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
        const h = (f.__vccOpts || f)[t];
        return h && vl(h, n, l, o, i, r)();
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
    const m = f.findIndex(qr.bind(null, s));
    if (m > -1) return m;
    const h = Mf(u[c - 2]);
    return c > 1 && Mf(s) === h && f[f.length - 1].path !== h ? f.findIndex(qr.bind(null, u[c - 2])) : m;
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
  const u = U();
  return ge(() => [u.value, i.value, e.name], ([c, s, f], [m, h, g]) => {
    s && (s.instances[f] = c, h && h !== s && c && c === m && (s.leaveGuards.size || (s.leaveGuards = h.leaveGuards), s.updateGuards.size || (s.updateGuards = h.updateGuards))), c && s && (!h || !qr(s, h) || !m) && (s.enterCallbacks[f] || []).forEach((_) => _(c));
  }, { flush: "post" }), () => {
    const c = r.value, s = e.name, f = i.value, m = f && f.components[s];
    if (!m) return Rf(n.default, { Component: m, route: c });
    const h = f.props[s], g = h ? h === true ? c.params : typeof h == "function" ? h(c) : h : null, w = d(m, ut({}, g, t, { onVnodeUnmounted: (k) => {
      k.component.isUnmounted && (f.instances[s] = null);
    }, ref: u }));
    return Rf(n.default, { Component: w, route: c }) || w;
  };
} });
function Rf(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const aS = rS;
function oS(e) {
  const t = Ux(e.routes, e), n = e.parseQuery || Xx, l = e.stringifyQuery || kf, r = e.history, a = Qr(), o = Qr(), i = Qr(), u = p0(ol);
  let c = ol;
  sr && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const s = su.bind(null, (E) => "" + E), f = su.bind(null, bx), m = su.bind(null, Ta);
  function h(E, X) {
    let O, le;
    return Mg(E) ? (O = t.getRecordMatcher(E), le = X) : le = E, t.addRoute(le, O);
  }
  function g(E) {
    const X = t.getRecordMatcher(E);
    X && t.removeRoute(X);
  }
  function _() {
    return t.getRoutes().map((E) => E.record);
  }
  function w(E) {
    return !!t.getRecordMatcher(E);
  }
  function k(E, X) {
    if (X = ut({}, X || u.value), typeof E == "string") {
      const V = cu(n, E, X.path), te = t.resolve({ path: V.path }, X), ae = r.createHref(V.fullPath);
      return ut(V, te, { params: m(te.params), hash: Ta(V.hash), redirectedFrom: void 0, href: ae });
    }
    let O;
    if (E.path != null) O = ut({}, E, { path: cu(n, E.path, X.path).path });
    else {
      const V = ut({}, E.params);
      for (const te in V) V[te] == null && delete V[te];
      O = ut({}, E, { params: f(V) }), X.params = f(X.params);
    }
    const le = t.resolve(O, X), be = E.hash || "";
    le.params = s(m(le.params));
    const x = _x(l, ut({}, E, { hash: mx(be), path: le.path })), q = r.createHref(x);
    return ut({ fullPath: x, hash: be, query: l === kf ? Gx(E.query) : E.query || {} }, le, { redirectedFrom: void 0, href: q });
  }
  function y(E) {
    return typeof E == "string" ? cu(n, E, u.value.path) : ut({}, E);
  }
  function p(E, X) {
    if (c !== E) return Mr(8, { from: X, to: E });
  }
  function b(E) {
    return F(E);
  }
  function S(E) {
    return b(ut(y(E), { replace: true }));
  }
  function $(E) {
    const X = E.matched[E.matched.length - 1];
    if (X && X.redirect) {
      const { redirect: O } = X;
      let le = typeof O == "function" ? O(E) : O;
      return typeof le == "string" && (le = le.includes("?") || le.includes("#") ? le = y(le) : { path: le }, le.params = {}), ut({ query: E.query, hash: E.hash, params: le.path != null ? {} : E.params }, le);
    }
  }
  function F(E, X) {
    const O = c = k(E), le = u.value, be = E.state, x = E.force, q = E.replace === true, V = $(O);
    if (V) return F(ut(y(V), { state: typeof V == "object" ? ut({}, be, V.state) : be, force: x, replace: q }), X || O);
    const te = O;
    te.redirectedFrom = X;
    let ae;
    return !x && wx(l, le, O) && (ae = Mr(16, { to: te, from: le }), G(le, le, true, false)), (ae ? Promise.resolve(ae) : L(te, le)).catch((Y) => jn(Y) ? jn(Y, 2) ? Y : ye(Y) : W(Y, te, le)).then((Y) => {
      if (Y) {
        if (jn(Y, 2)) return F(ut({ replace: q }, y(Y.to), { state: typeof Y.to == "object" ? ut({}, be, Y.to.state) : be, force: x }), X || te);
      } else Y = M(te, le, true, q, be);
      return D(te, le, Y), Y;
    });
  }
  function z(E, X) {
    const O = p(E, X);
    return O ? Promise.reject(O) : Promise.resolve();
  }
  function B(E) {
    const X = P.values().next().value;
    return X && typeof X.runWithContext == "function" ? X.runWithContext(E) : E();
  }
  function L(E, X) {
    let O;
    const [le, be, x] = iS(E, X);
    O = du(le.reverse(), "beforeRouteLeave", E, X);
    for (const V of le) V.leaveGuards.forEach((te) => {
      O.push(vl(te, E, X));
    });
    const q = z.bind(null, E, X);
    return O.push(q), T(O).then(() => {
      O = [];
      for (const V of a.list()) O.push(vl(V, E, X));
      return O.push(q), T(O);
    }).then(() => {
      O = du(be, "beforeRouteUpdate", E, X);
      for (const V of be) V.updateGuards.forEach((te) => {
        O.push(vl(te, E, X));
      });
      return O.push(q), T(O);
    }).then(() => {
      O = [];
      for (const V of x) if (V.beforeEnter) if (An(V.beforeEnter)) for (const te of V.beforeEnter) O.push(vl(te, E, X));
      else O.push(vl(V.beforeEnter, E, X));
      return O.push(q), T(O);
    }).then(() => (E.matched.forEach((V) => V.enterCallbacks = {}), O = du(x, "beforeRouteEnter", E, X, B), O.push(q), T(O))).then(() => {
      O = [];
      for (const V of o.list()) O.push(vl(V, E, X));
      return O.push(q), T(O);
    }).catch((V) => jn(V, 8) ? V : Promise.reject(V));
  }
  function D(E, X, O) {
    i.list().forEach((le) => B(() => le(E, X, O)));
  }
  function M(E, X, O, le, be) {
    const x = p(E, X);
    if (x) return x;
    const q = X === ol, V = sr ? history.state : {};
    O && (le || q ? r.replace(E.fullPath, ut({ scroll: q && V && V.scroll }, be)) : r.push(E.fullPath, be)), u.value = E, G(E, X, O, q), ye();
  }
  let A;
  function C() {
    A || (A = r.listen((E, X, O) => {
      if (!J.listening) return;
      const le = k(E), be = $(le);
      if (be) {
        F(ut(be, { replace: true, force: true }), le).catch(da);
        return;
      }
      c = le;
      const x = u.value;
      sr && Ex(gf(x.fullPath, O.delta), _i()), L(le, x).catch((q) => jn(q, 12) ? q : jn(q, 2) ? (F(ut(y(q.to), { force: true }), le).then((V) => {
        jn(V, 20) && !O.delta && O.type === qa.pop && r.go(-1, false);
      }).catch(da), Promise.reject()) : (O.delta && r.go(-O.delta, false), W(q, le, x))).then((q) => {
        q = q || M(le, x, false), q && (O.delta && !jn(q, 8) ? r.go(-O.delta, false) : O.type === qa.pop && jn(q, 20) && r.go(-1, false)), D(le, x, q);
      }).catch(da);
    }));
  }
  let H = Qr(), Q = Qr(), K;
  function W(E, X, O) {
    ye(E);
    const le = Q.list();
    return le.length ? le.forEach((be) => be(E, X, O)) : console.error(E), Promise.reject(E);
  }
  function ie() {
    return K && u.value !== ol ? Promise.resolve() : new Promise((E, X) => {
      H.add([E, X]);
    });
  }
  function ye(E) {
    return K || (K = !E, C(), H.list().forEach(([X, O]) => E ? O(E) : X()), H.reset()), E;
  }
  function G(E, X, O, le) {
    const { scrollBehavior: be } = e;
    if (!sr || !be) return Promise.resolve();
    const x = !O && Rx(gf(E.fullPath, 0)) || (le || !O) && history.state && history.state.scroll || null;
    return We().then(() => be(E, X, x)).then((q) => q && Mx(q)).catch((q) => W(q, E, X));
  }
  const R = (E) => r.go(E);
  let re;
  const P = /* @__PURE__ */ new Set(), J = { currentRoute: u, listening: true, addRoute: h, removeRoute: g, clearRoutes: t.clearRoutes, hasRoute: w, getRoutes: _, resolve: k, options: e, push: b, replace: S, go: R, back: () => R(-1), forward: () => R(1), beforeEach: a.add, beforeResolve: o.add, afterEach: i.add, onError: Q.add, isReady: ie, install(E) {
    const X = this;
    E.component("RouterLink", tS), E.component("RouterView", aS), E.config.globalProperties.$router = X, Object.defineProperty(E.config.globalProperties, "$route", { enumerable: true, get: () => Ie(u) }), sr && !re && u.value === ol && (re = true, b(r.location).catch((be) => {
    }));
    const O = {};
    for (const be in ol) Object.defineProperty(O, be, { get: () => u.value[be], enumerable: true });
    E.provide(Zs, X), E.provide(Pg, ds(O)), E.provide(Zu, u);
    const le = E.unmount;
    P.add(E), E.unmount = function() {
      P.delete(E), P.size < 1 && (c = ol, A && A(), A = null, u.value = ol, re = false, K = false), le();
    };
  } };
  function T(E) {
    return E.reduce((X, O) => X.then(() => B(O)), Promise.resolve());
  }
  return J;
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
const pS = /* @__PURE__ */ Er({ __name: "HelloWorld", setup(e) {
  const t = () => {
    mS("test");
  };
  return (n, l) => {
    const r = gs("router-view");
    return Xn(), zv(on, null, [Je(Ie(Ze), { class: "q-ma-lg", color: "primary", onClick: t }, { default: Rt(() => l[0] || (l[0] = [Fl("test")])), _: 1 }), Je(r)], 64);
  };
} }), yS = yg(pS, [["__scopeId", "data-v-17fee452"]]);
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
  var n = t[0], l = t[1], r = t[2], a = t[3], o = t[4], i = t[5], u = t[6], c = t[7], s = t[8], f = t[9], m = t[10], h = t[11], g = t[12], _ = t[13], w = t[14], k = t[15], y = n * i - l * o, p = n * u - r * o, b = n * c - a * o, S = l * u - r * i, $ = l * c - a * i, F = r * c - a * u, z = s * _ - f * g, B = s * w - m * g, L = s * k - h * g, D = f * w - m * _, M = f * k - h * _, A = m * k - h * w, C = y * A - p * M + b * D + S * L - $ * B + F * z;
  return C ? (C = 1 / C, e[0] = (i * A - u * M + c * D) * C, e[1] = (r * M - l * A - a * D) * C, e[2] = (_ * F - w * $ + k * S) * C, e[3] = (m * $ - f * F - h * S) * C, e[4] = (u * L - o * A - c * B) * C, e[5] = (n * A - r * L + a * B) * C, e[6] = (w * b - g * F - k * p) * C, e[7] = (s * F - m * b + h * p) * C, e[8] = (o * M - i * L + c * z) * C, e[9] = (l * L - n * M - a * z) * C, e[10] = (g * $ - _ * b + k * y) * C, e[11] = (f * b - s * $ - h * y) * C, e[12] = (i * B - o * D - u * z) * C, e[13] = (n * D - l * B + r * z) * C, e[14] = (_ * p - g * S - w * y) * C, e[15] = (s * S - f * p + m * y) * C, e) : null;
}
function mu(e, t, n) {
  var l = n[0], r = n[1], a = n[2], o, i, u, c, s, f, m, h, g, _, w, k;
  return t === e ? (e[12] = t[0] * l + t[4] * r + t[8] * a + t[12], e[13] = t[1] * l + t[5] * r + t[9] * a + t[13], e[14] = t[2] * l + t[6] * r + t[10] * a + t[14], e[15] = t[3] * l + t[7] * r + t[11] * a + t[15]) : (o = t[0], i = t[1], u = t[2], c = t[3], s = t[4], f = t[5], m = t[6], h = t[7], g = t[8], _ = t[9], w = t[10], k = t[11], e[0] = o, e[1] = i, e[2] = u, e[3] = c, e[4] = s, e[5] = f, e[6] = m, e[7] = h, e[8] = g, e[9] = _, e[10] = w, e[11] = k, e[12] = o * l + s * r + g * a + t[12], e[13] = i * l + f * r + _ * a + t[13], e[14] = u * l + m * r + w * a + t[14], e[15] = c * l + h * r + k * a + t[15]), e;
}
function hu(e, t, n, l) {
  var r = l[0], a = l[1], o = l[2], i = Math.hypot(r, a, o), u, c, s, f, m, h, g, _, w, k, y, p, b, S, $, F, z, B, L, D, M, A, C, H;
  return i < _S ? null : (i = 1 / i, r *= i, a *= i, o *= i, u = Math.sin(n), c = Math.cos(n), s = 1 - c, f = t[0], m = t[1], h = t[2], g = t[3], _ = t[4], w = t[5], k = t[6], y = t[7], p = t[8], b = t[9], S = t[10], $ = t[11], F = r * r * s + c, z = a * r * s + o * u, B = o * r * s - a * u, L = r * a * s - o * u, D = a * a * s + c, M = o * a * s + r * u, A = r * o * s + a * u, C = a * o * s - r * u, H = o * o * s + c, e[0] = f * F + _ * z + p * B, e[1] = m * F + w * z + b * B, e[2] = h * F + k * z + S * B, e[3] = g * F + y * z + $ * B, e[4] = f * L + _ * D + p * M, e[5] = m * L + w * D + b * M, e[6] = h * L + k * D + S * M, e[7] = g * L + y * D + $ * M, e[8] = f * A + _ * C + p * H, e[9] = m * A + w * C + b * H, e[10] = h * A + k * C + S * H, e[11] = g * A + y * C + $ * H, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e);
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
  let s = i + o, f = u + o, m = c + o;
  return [s, f, m, l];
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
  const t = pg(), n = U();
  let l = null;
  const r = { front_0: null, front_1: null, front_2: null, front_3: null, game: null, home: null, numbers: null, quote: null, cards: null, happy: null, italic: null, one: null, two: null, three: null, body: null };
  let a = null;
  const o = new PS((P) => t.notify({ message: P })), i = U([0, 0]), u = U(""), c = U(0), s = U(0), f = U(null), m = U(1), h = U(-1), g = U([0, 0, 0, 0]), _ = U(640), w = U(480), k = U(0), y = (P, J, T, E, X, O, le) => {
    const be = [];
    for (let x = 0; x < 6; ++x) be.push(P + (x + E) % 6 + 1 + le), be.push(J + (x + X) % 6 + 1 + le), be.push(T + (x + O) % 6 + 1 + le);
    return be;
  }, p = () => {
    if (l === null) throw new Error("no WebGL context");
    let P = [0, 0, 0];
    for (let N = 0; N < 6; ++N) {
      const ne = 3.141 * N * 60 / 180;
      P = P.concat([1 * Math.cos(ne), 1 * Math.sin(ne), 0]);
    }
    for (let N = 0; N < 6; ++N) {
      const ne = 3.141 * N * 60 / 180;
      P = P.concat([1 * Math.cos(ne), 1 * Math.sin(ne), 0]);
    }
    for (let N = 0; N < 6; ++N) {
      const ne = 3.141 * N * 60 / 180;
      P = P.concat([1 * Math.cos(ne), 1 * Math.sin(ne), 0.2]);
    }
    for (let N = 0; N < 6; ++N) {
      const ne = 3.141 * N * 60 / 180;
      P = P.concat([1 * Math.cos(ne), 1 * Math.sin(ne), 0.2]);
    }
    for (let N = 0; N < 6; ++N) {
      const ne = 3.141 * N * 60 / 180;
      P = P.concat([1.2 * Math.cos(ne), 1.2 * Math.sin(ne), 0.2]);
    }
    for (let N = 0; N < 6; ++N) {
      const ne = 3.141 * N * 60 / 180;
      P = P.concat([1.2 * Math.cos(ne), 1.2 * Math.sin(ne), 0.2]);
    }
    for (let N = 0; N < 6; ++N) {
      const ne = 3.141 * N * 60 / 180;
      P = P.concat([1 * Math.cos(ne), 1 * Math.sin(ne), -1]);
    }
    for (let N = 0; N < 6; ++N) {
      const ne = 3.141 * N * 60 / 180;
      P = P.concat([1 * Math.cos(ne), 1 * Math.sin(ne), 0.15]);
    }
    for (let N = 0; N < 6; ++N) {
      const ne = 3.141 * N * 60 / 180;
      P = P.concat([0.9 * Math.cos(ne), 0.9 * Math.sin(ne), -1]);
    }
    for (let N = 2; N < P.length; N += 3) P[N] -= 1;
    const J = l.createBuffer();
    l.bindBuffer(l.ARRAY_BUFFER, J), l.bufferData(l.ARRAY_BUFFER, new Float32Array(P), l.STATIC_DRAW);
    let T = [1, 1, 1, 1, 0.5, 0.5, 0.5, 1, 1, 1, 1, 1, 0.5, 0.5, 0.5, 1, 1, 1, 1, 1, 0.5, 0.5, 0.5, 1, 1, 1, 1, 1];
    for (let N = 0; N < 6; ++N) T = T.concat([1, 1, 1, 1]);
    for (let N = 0; N < 6; ++N) T = T.concat([1, 1, 1, 1]);
    for (let N = 0; N < 6; ++N) T = T.concat([1, 1, 1, 1]);
    for (let N = 0; N < 6; ++N) T = T.concat([1, 1, 1, 1]);
    for (let N = 0; N < 6; ++N) T = T.concat([1, 1, 1, 1]);
    for (let N = 0; N < 6; ++N) T = T.concat([1, 1, 1, 1]);
    for (let N = 0; N < 6; ++N) T = T.concat([0.8, 0.8, 0.8, 1]);
    for (let N = 0; N < 6; ++N) T = T.concat([0.8, 0.8, 0.8, 1]);
    const E = l.createBuffer();
    l.bindBuffer(l.ARRAY_BUFFER, E), l.bufferData(l.ARRAY_BUFFER, new Float32Array(T), l.STATIC_DRAW);
    let X = [0.5, 0.5];
    for (let N = 0; N < 6; ++N) {
      const ne = 3.141 * N * 60 / 180;
      X = X.concat([0.5 + 0.5 * Math.cos(ne), 0.5 + 0.5 * Math.sin(ne)]);
    }
    for (let N = 0; N < 6; ++N) {
      const ne = 3.141 * N * 60 / 180;
      X = X.concat([0.5 + 0.4 * Math.cos(ne), 0.5 + 0.4 * Math.sin(ne)]);
    }
    for (let N = 0; N < 6; ++N) {
      const ne = 3.141 * N * 60 / 180;
      X = X.concat([0.7 + 0.4 * Math.cos(ne), 0.7 + 0.4 * Math.sin(ne)]);
    }
    for (let N = 0; N < 6; ++N) {
      const ne = 3.141 * N * 60 / 180;
      X = X.concat([0.8 + 0.5 * Math.cos(ne), 0.8 + 0.5 * Math.sin(ne)]);
    }
    for (let N = 0; N < 6; ++N) {
      const ne = 3.141 * N * 60 / 180;
      X = X.concat([0.5 + 0.5 * Math.cos(ne), 0.5 + 0.5 * Math.sin(ne)]);
    }
    for (let N = 0; N < 6; ++N) {
      const ne = 3.141 * N * 60 / 180;
      X = X.concat([0.8 + 0.5 * Math.cos(ne), 0.8 + 0.5 * Math.sin(ne)]);
    }
    for (let N = 0; N < 6; ++N) {
      const ne = 3.141 * N * 60 / 180;
      X = X.concat([0.5 + 0.5 * Math.cos(ne), 0.5 + 0.5 * Math.sin(ne)]);
    }
    for (let N = 0; N < 6; ++N) {
      const ne = 3.141 * (N + 1) * 60 / 180;
      X = X.concat([0.3 + 0.5 * Math.cos(ne + 0), 0.3 + 0.5 * Math.sin(ne + 0)]);
    }
    for (let N = 0; N < 6; ++N) {
      const ne = 3.141 * (N + 1) * 60 / 180;
      X = X.concat([0.3 + 0.5 * Math.cos(ne + 0), 0.3 + 0.5 * Math.sin(ne + 0)]);
    }
    const O = l.createBuffer();
    l.bindBuffer(l.ARRAY_BUFFER, O), l.bufferData(l.ARRAY_BUFFER, new Float32Array(X), l.STATIC_DRAW);
    let le = [];
    for (let N = 1; N < 7; ++N) le = le.concat([0, N, 1 + N % 6]);
    le = le.concat(y(0, 0, 6, 0, 1, 0, 6)), le = le.concat(y(6, 6, 0, 0, 1, 1, 6)), le = le.concat(y(6, 6, 12, 0, 1, 0, 12)), le = le.concat(y(12, 12, 6, 0, 1, 1, 12)), le = le.concat(y(12, 18, 12, 1, 0, 0, 18)), le = le.concat(y(18, 18, 12, 0, 1, 1, 18)), le = le.concat(y(24, 30, 24, 1, 0, 0, 18)), le = le.concat(y(30, 30, 24, 0, 1, 1, 18));
    let be = 0;
    for (let N = 0; N < le.length; ++N) be = Math.max(be, le[N]);
    console.log("top", be);
    const x = l.createBuffer();
    l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, x), l.bufferData(l.ELEMENT_ARRAY_BUFFER, new Uint32Array(le), l.STATIC_DRAW), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, null);
    let q = [0, 0, 1], V = [], te = [], ae = [];
    for (let N = 0; N < 6; ++N) {
      const ne = N * 3.414 / 180 * 60, de = 0 * (90 * 3.414 / 180);
      V = V.concat([0, 0, 1]), te = te.concat([-Math.cos(ne - de), -Math.sin(ne - de), 0]), ae = ae.concat([Math.cos(ne - de), Math.sin(ne - de), 0]);
    }
    q = q.concat(V), q = q.concat(te), q = q.concat(te), q = q.concat(V), q = q.concat(V), q = q.concat(ae), q = q.concat(ae), q = q.concat(te), q = q.concat(te);
    const Y = l.createBuffer();
    l.bindBuffer(l.ARRAY_BUFFER, Y), l.bufferData(l.ARRAY_BUFFER, new Float32Array(q), l.STATIC_DRAW);
    const fe = l.createBuffer();
    return l.bindBuffer(l.ARRAY_BUFFER, fe), l.bufferData(l.ARRAY_BUFFER, new Float32Array([-1, -1, 0.1, 1, -1, -0.1, 1, 1, 0.1, -1, 1, -0.1]), l.STATIC_DRAW), console.log("pctn", P.length / 3, T.length / 4, X.length / 2, q.length / 3), [J, E, O, x, Y, fe];
  }, b = (P, J) => {
    const T = vu();
    return mu(T, T, [0, 0, -6]), hu(T, T, 1.3 * Math.sin(J) * 3.141 / 6 / 3, [0, 1, 0]), hu(T, T, 1.2 * Math.sin(J * 1.15 + 1) * 3.141 / 4 / 3, [1, 0, 0]), hu(T, T, 1.1 * Math.sin(J * 1.33 + 2) * 3.141 / 5 / 3, [0, 0, 1]), mu(T, T, [P[0], P[1], P[2]]), T;
  }, S = (P) => {
    l !== null && (l.uniform1i(P.unif.sampler, 0), l.uniform1i(P.unif.mode_int, 1), l.drawElements(l.TRIANGLES, 3 * 6 * 3, l.UNSIGNED_INT, 0), l.uniform1i(P.unif.sampler, 1), l.uniform1i(P.unif.mode_int, 0), l.drawElements(l.TRIANGLES, 4 * 6 * 6, l.UNSIGNED_INT, 4 * 3 * 6));
  }, $ = (P, J) => {
    if (l === null || n.value === void 0) throw new Error("no WebGL context");
    l.viewport(0, 0, _.value, w.value), l.enable(l.BLEND), l.blendFunc(l.SRC_ALPHA, l.ONE_MINUS_SRC_ALPHA), l.enable(l.DEPTH_TEST), l.depthFunc(l.LEQUAL), l.bindRenderbuffer(l.RENDERBUFFER, null), l.bindFramebuffer(l.FRAMEBUFFER, null), l.bindTexture(l.TEXTURE_2D, P.bufs.double), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.LINEAR), l.bindRenderbuffer(l.RENDERBUFFER, P.bufs.depth), l.renderbufferStorage(l.RENDERBUFFER, l.DEPTH_COMPONENT16, l.canvas.width, l.canvas.height), l.bindFramebuffer(l.FRAMEBUFFER, P.bufs.frame), l.framebufferRenderbuffer(l.FRAMEBUFFER, l.DEPTH_ATTACHMENT, l.RENDERBUFFER, P.bufs.depth), l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, l.canvas.width, l.canvas.height, 0, l.RGBA, l.UNSIGNED_BYTE, null), l.framebufferTexture2D(l.FRAMEBUFFER, l.COLOR_ATTACHMENT0, l.TEXTURE_2D, P.bufs.double, 0), l.bindFramebuffer(l.FRAMEBUFFER, P.bufs.frame), l.framebufferTexture2D(l.FRAMEBUFFER, l.COLOR_ATTACHMENT0, l.TEXTURE_2D, P.bufs.double, 0), l.framebufferRenderbuffer(l.FRAMEBUFFER, l.DEPTH_ATTACHMENT, l.RENDERBUFFER, P.bufs.depth), l.clear(l.COLOR_BUFFER_BIT | l.DEPTH_BUFFER_BIT);
    const T = 45 * Math.PI / 180, E = _.value / w.value, X = 0.1, O = 100, le = vu();
    CS(le, T, E, X, O);
    const be = J;
    mu(le, le, [Math.sin(be * 0.3) * 1, Math.cos(be * 0.4) * 1, Math.cos(0.6 * be) * 1]), l.useProgram(P.prog_draw), F(P, false), z(P), B(P), L(P), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, P.bufs.index), l.uniform1f(P.unif.time, J), l.uniform2f(P.unif.viewport, _.value, w.value), l.uniformMatrix4fv(P.unif.proj, false, le), l.activeTexture(l.TEXTURE0 + 1), l.bindTexture(l.TEXTURE_2D, r.body), l.activeTexture(l.TEXTURE0);
    const x = (te, ae, Y, fe, N, ne) => {
      if (l === null) return;
      const de = [te[0] * 2, te[1] * 2.2, ne * 0.5 + N * 10], oe = b(de, J);
      switch (l.uniformMatrix4fv(P.unif.model, false, oe), l.uniform1f(P.unif.hover, ne), l.uniform1f(P.unif.alpha, 1 - N), l.activeTexture(l.TEXTURE0), Y) {
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
          const se = r[Y];
          se != null ? l.bindTexture(l.TEXTURE_2D, se) : l.bindTexture(l.TEXTURE_2D, r.front_0);
          break;
      }
      l.activeTexture(l.TEXTURE0);
      const j = vu();
      xS(j, oe), wS(j, j), l.uniformMatrix4fv(P.unif.normal, false, j), l.uniform4fv(P.unif.front_color, ae), S(P);
    };
    o.draw(x), l.framebufferTexture2D(l.FRAMEBUFFER, l.COLOR_ATTACHMENT0, l.TEXTURE_2D, null, 0), l.framebufferRenderbuffer(l.FRAMEBUFFER, l.DEPTH_ATTACHMENT, l.RENDERBUFFER, null), l.flush(), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, null), l.disableVertexAttribArray(P.attr.pos_model), l.bindFramebuffer(l.FRAMEBUFFER, null), l.bindRenderbuffer(l.RENDERBUFFER, null), l.disable(l.BLEND), l.useProgram(P.prog_copy), l.disable(l.DEPTH_TEST), l.uniform1i(P.unif.copy_tex, 0), l.bindTexture(l.TEXTURE_2D, P.bufs.double), l.bindBuffer(l.ARRAY_BUFFER, P.bufs.copy_pos), f.value != null ? (l.uniform2fv(P.unif.ripple_pos, f.value), l.uniform1f(P.unif.ripple_time, m.value)) : l.uniform1f(P.unif.ripple_time, 1), l.vertexAttribPointer(P.attr.pos_copy, 3, l.FLOAT, false, 0, 0), l.enableVertexAttribArray(P.attr.pos_copy), l.drawArrays(l.TRIANGLE_FAN, 0, 4), l.disableVertexAttribArray(P.attr.pos_copy), l.useProgram(P.prog_pick), l.enable(l.DEPTH_TEST), l.bindTexture(l.TEXTURE_2D, P.pick.tex), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.NEAREST), l.bindRenderbuffer(l.RENDERBUFFER, P.pick.rb), l.renderbufferStorage(l.RENDERBUFFER, l.DEPTH_COMPONENT16, l.canvas.width, l.canvas.height), l.bindFramebuffer(l.FRAMEBUFFER, P.pick.fb), l.framebufferRenderbuffer(l.FRAMEBUFFER, l.DEPTH_ATTACHMENT, l.RENDERBUFFER, P.pick.rb), l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, l.canvas.width, l.canvas.height, 0, l.RGBA, l.UNSIGNED_BYTE, null), l.framebufferTexture2D(l.FRAMEBUFFER, l.COLOR_ATTACHMENT0, l.TEXTURE_2D, P.pick.tex, 0), l.uniformMatrix4fv(P.unif.proj_pick, false, le), l.clear(l.COLOR_BUFFER_BIT | l.DEPTH_BUFFER_BIT), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, P.bufs.index), l.enableVertexAttribArray(P.attr.pos_pick), F(P, true);
    const q = (te, ae, Y, fe, N, ne) => {
      if (l === null) return;
      const de = [te[0] * 2, te[1] * 2.2, ne * 0.5 + 10 * N];
      b(de, J), l.uniformMatrix4fv(P.unif.model_pick, false, b(de, J)), l.uniform4f(P.unif.id_pick, fe / 255, 0, 0, 0), l.drawElements(l.TRIANGLES, 3 * 6, l.UNSIGNED_INT, 0);
    };
    o.draw(q), l.flush(), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, null), l.disableVertexAttribArray(P.attr.pos_pick);
    let V = new Uint8Array(4);
    l.readPixels(i.value[0], w.value - i.value[1], 1, 1, l.RGBA, l.UNSIGNED_BYTE, V), V.length && (u.value = V.toString(), o.hover(V[0]), c.value = V[0]);
  }, F = (P, J) => {
    if (l === null) throw new Error("setPos - no ctx");
    l.bindBuffer(l.ARRAY_BUFFER, P.bufs.pos), l.vertexAttribPointer(J ? P.attr.pos_pick : P.attr.pos_model, 3, l.FLOAT, false, 0, 0), l.enableVertexAttribArray(J ? P.attr.pos_pick : P.attr.pos_model);
  }, z = (P) => {
    if (l === null) throw new Error("setColor - no ctx");
    l.bindBuffer(l.ARRAY_BUFFER, P.bufs.color), l.vertexAttribPointer(P.attr.color, 4, l.FLOAT, false, 0, 0), l.enableVertexAttribArray(P.attr.color);
  }, B = (P) => {
    if (l === null) throw new Error("setTex crash");
    l.bindBuffer(l.ARRAY_BUFFER, P.bufs.tex), l.vertexAttribPointer(P.attr.texture, 2, l.FLOAT, false, 0, 0), l.enableVertexAttribArray(P.attr.texture);
  }, L = (P) => {
    if (l === null) throw new Error("setNorm crash");
    l.bindBuffer(l.ARRAY_BUFFER, P.bufs.norm), l.vertexAttribPointer(P.attr.norm, 3, l.FLOAT, false, 0, 0), l.enableVertexAttribArray(P.attr.norm);
  };
  let D = 0;
  const M = () => {
    if (l === null) return;
    const T = H(`
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

                fragColor.a *= pow(uAlpha, 5.0);

                // fragColor.a = 1.0;
                gl_FragColor = fragColor;

                // gl_FragColor = vec4(vLighting, 1.0);

        }
    `), E = `
        attribute vec4 aVertexPosition;
        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;

        void main() {
            vec4 b = aVertexPosition;
            gl_Position = uProjectionMatrix * uModelViewMatrix * b;
        }
    `, X = `
        precision mediump float;
        
        uniform vec4 uId;
        
        void main() {
            gl_FragColor = uId;
        }
    `, O = `
        attribute vec3 aVertexPos;

        varying mediump vec2 vTexCoord;

        void main() {
            gl_Position = vec4(aVertexPos, 1.0);
            vTexCoord = vec2(0.5 + aVertexPos.x / 2.0, 0.5 + aVertexPos.y / 2.0);
        }
    `, le = `
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

            srce.x += 0.3 * cos(angle) / 1.0 * (exp(-dist * 2.0 * (1.0 - uRippleTime)) - 1.0) * sin(dist * 3.141 * 2.0 + uRippleTime);
            srce.y += 0.3 * sin(angle) / 1.0 * (exp(-dist * 2.0 * (1.0 - uRippleTime)) - 1.0) * sin(dist * 3.141 * 2.0 + uRippleTime);

            if(srce.x < 0.0 || srce.y < 0.0 || srce.x > 1.0 || srce.y > 1.0) {
                gl_FragColor.a = 0.0;
                return;
            }

            // if(uRippleTime < 1.0 && dist < 0.1)
                // gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
            // else
            gl_FragColor = texture2D(uTexture, srce);
        }
    `, be = p(), x = H(E, X), q = H(O, le), V = l.createTexture();
    l.bindTexture(l.TEXTURE_2D, V), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.NEAREST), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.NEAREST), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE), l.bindTexture(l.TEXTURE_2D, null);
    const te = l.createRenderbuffer(), ae = l.createFramebuffer(), Y = { prog_draw: T, prog_pick: x, prog_copy: q, attr: { pos_model: l.getAttribLocation(T, "aVertexPosition"), norm: l.getAttribLocation(T, "aVertexNormal"), color: l.getAttribLocation(T, "aVertexColor"), texture: l.getAttribLocation(T, "aTextureCoord"), pos_pick: l.getAttribLocation(x, "aVertexPosition"), pos_copy: l.getAttribLocation(q, "aVertexPos") }, unif: { proj: l.getUniformLocation(T, "uProjectionMatrix"), model: l.getUniformLocation(T, "uModelViewMatrix"), sampler: l.getUniformLocation(T, "uSampler"), normal: l.getUniformLocation(T, "uNormalMatrix"), time: l.getUniformLocation(T, "fTime"), alpha: l.getUniformLocation(T, "uAlpha"), hover: l.getUniformLocation(T, "fFade"), mode_int: l.getUniformLocation(T, "uMode"), front_color: l.getUniformLocation(T, "uFrontColor"), proj_pick: l.getUniformLocation(x, "uProjectionMatrix"), model_pick: l.getUniformLocation(x, "uModelViewMatrix"), id_pick: l.getUniformLocation(x, "uId"), viewport: l.getUniformLocation(T, "uViewPort"), copy_tex: l.getUniformLocation(q, "uTexture"), ripple_time: l.getUniformLocation(q, "uRippleTime"), ripple_pos: l.getUniformLocation(q, "uRipplePos") }, bufs: { frame: ae, depth: te, double: V, pos: be[0], color: be[1], tex: be[2], index: be[3], norm: be[4], copy_pos: be[5] }, pick: { fb: l.createFramebuffer(), rb: l.createRenderbuffer(), tex: l.createTexture() } };
    for (const fe in r) r[fe] = K();
    l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL, true), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.LINEAR), a = Y;
  }, A = () => {
    if (n.value === void 0 || (l === null && (l = n.value.getContext("webgl2", {})), l === null)) return;
    a === null && M(), console.log("pctn", a == null ? void 0 : a.attr.pos_model, a == null ? void 0 : a.attr.color, a == null ? void 0 : a.attr.texture, a == null ? void 0 : a.attr.norm), console.log("next", a == null ? void 0 : a.attr.pos_copy, a == null ? void 0 : a.attr.pos_pick), l.bindRenderbuffer(l.RENDERBUFFER, a.bufs.depth), l.renderbufferStorage(l.RENDERBUFFER, l.DEPTH_COMPONENT16, _.value, w.value), l.bindRenderbuffer(l.RENDERBUFFER, null);
    const P = l.createTexture();
    l.bindTexture(l.TEXTURE_2D, P), l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, _.value, w.value, 0, l.RGBA, l.UNSIGNED_BYTE, null), a.bufs.double = P, l.bindTexture(l.TEXTURE_2D, null), l.viewport(0, 0, _.value, w.value);
    let J = 0, T = false, E = Date.now();
    D = setInterval(() => {
      const X = Date.now(), O = (X - E) / 750;
      T ? (J -= O, J < 0 && (J = 0, T = false)) : (J += O, J > 7.5 && (J = 7.5, T = true)), o.step(X - E), s.value > 0 && (o.activate(s.value), s.value = 0), E = X, a !== null && (C(), $(a, J)), l !== null && a !== null && f.value != null && (l.uniform1f(a.unif.ripple_time, 1), m.value < 1 && (m.value += 0.1), m.value = Math.min(m.value, 1));
    }, 25);
  }, C = (P) => {
    for (let J = 0; J < 4; ++J) h.value - 1 == J ? g.value[J] < 1 && (g.value[J] += 0.05) : g.value[J] > 0 && (g.value[J] -= 0.05);
  }, H = (P, J) => {
    if (l === null) throw new Error("no webgl");
    const T = Q(l.VERTEX_SHADER, P), E = Q(l.FRAGMENT_SHADER, J), X = l.createProgram();
    return l.attachShader(X, T), l.attachShader(X, E), l.linkProgram(X), X;
  }, Q = (P, J) => {
    if (l === null) throw new Error("no webgl");
    const T = l.createShader(P);
    if (T === null) throw new Error("bad shader");
    return l.shaderSource(T, J), l.compileShader(T), T;
  }, K = () => {
    if (l === null) return null;
    const P = l.createTexture();
    return l.bindTexture(l.TEXTURE_2D, P), l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, 1, 1, 0, l.RGBA, l.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0])), P;
  }, W = (P, J) => {
    if (l === null) return;
    const T = J.target;
    l.bindTexture(l.TEXTURE_2D, r[P]), l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, l.RGBA, l.UNSIGNED_BYTE, T), l.hint(l.GENERATE_MIPMAP_HINT, l.NICEST), l.generateMipmap(l.TEXTURE_2D);
  }, ie = (P) => {
    if (l === null || n.value === void 0) return;
    const J = P, T = J.offsetX, E = J.offsetY;
    T - n.value.clientWidth / 2, E - n.value.clientHeight / 2, (T - l.canvas.width / 2) / 2, (E - l.canvas.height / 2) / 2, i.value = [T, E];
  }, ye = (P) => {
    const J = P;
    i.value = [J.touches.item(0).clientX, J.touches.item(0).clientY], P.stopPropagation(), P.preventDefault();
  }, G = () => {
    D != 0 && clearInterval(D);
    const P = document.getElementById("header");
    P !== null && (k.value = P.getBoundingClientRect().bottom);
    let J = 0;
    document.getElementById("footer"), P !== null && (J = P.getBoundingClientRect().height), We(() => {
      _.value = window.innerWidth, w.value = window.innerHeight - k.value - J, We(A);
    });
  }, R = (P) => {
    s.value = c.value, f.value = [i.value[0] / _.value, 1 - i.value[1] / w.value], m.value = 0;
  };
  ft(() => {
    window.addEventListener("resize", G), G();
  }), Ke(() => {
    clearInterval(D), window.removeEventListener("resize", G);
  });
  const re = () => ({ top: k.value + "px" });
  return (P, J) => (Xn(), zv(on, null, [Bt("canvas", { id: "canvas", ref_key: "canvas", ref: n, onMousemove: J[0] || (J[0] = (T) => ie(T)), onTouchstart: J[1] || (J[1] = (T) => ye(T)), onTouchmove: J[2] || (J[2] = (T) => ye(T)), onTouchend: J[3] || (J[3] = (T) => R()), onMouseup: J[4] || (J[4] = (T) => R()), width: _.value, height: w.value, style: Yo(re()) }, null, 44, $S), Bt("img", { src: "img/wood.jpg", onLoad: J[5] || (J[5] = (T) => W("body", T)), style: { display: "none" } }, null, 32), Bt("img", { src: "img/tex.jpg", onLoad: J[6] || (J[6] = (T) => W("front_0", T)), style: { display: "none" } }, null, 32), Bt("img", { src: "img/clock.jpg", onLoad: J[7] || (J[7] = (T) => W("front_1", T)), style: { display: "none" } }, null, 32), Bt("img", { src: "img/tv.jpg", onLoad: J[8] || (J[8] = (T) => W("front_2", T)), style: { display: "none" } }, null, 32), Bt("img", { src: "img/phone.jpg", onLoad: J[9] || (J[9] = (T) => W("front_3", T)), style: { display: "none" } }, null, 32), Bt("img", { src: "img/home-outline.svg", onLoad: J[10] || (J[10] = (T) => W("home", T)), style: { display: "none" }, width: "1024", height: "1024" }, null, 32), Bt("img", { src: "img/format-quote-close.svg", onLoad: J[11] || (J[11] = (T) => W("quote", T)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), Bt("img", { src: "img/gamepad-variant-outline.svg", onLoad: J[12] || (J[12] = (T) => W("game", T)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), Bt("img", { src: "img/numeric.svg", onLoad: J[13] || (J[13] = (T) => W("numbers", T)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), Bt("img", { src: "img/cards-outline.svg", onLoad: J[14] || (J[14] = (T) => W("cards", T)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), Bt("img", { src: "img/emoticon-happy-outline.svg", onLoad: J[15] || (J[15] = (T) => W("happy", T)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), Bt("img", { src: "img/format-italic.svg", onLoad: J[16] || (J[16] = (T) => W("italic", T)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), Bt("img", { src: "img/numeric-1.svg", onLoad: J[17] || (J[17] = (T) => W("one", T)), style: { display: "none" } }, null, 32), Bt("img", { src: "img/numeric-2.svg", onLoad: J[18] || (J[18] = (T) => W("two", T)), style: { display: "none" } }, null, 32), Bt("img", { src: "img/numeric-3.svg", onLoad: J[19] || (J[19] = (T) => W("three", T)), style: { display: "none" } }, null, 32)], 64));
} }), BS = { BASE_URL: "./", DEV: false, MODE: "production", PROD: true, SSR: false, VITE_APP_NAME: "vite mtg", VITE_client_id: "quasar-2fa", VITE_client_secret: "spoon" }, Js = em(ex);
console.log(BS);
const FS = [{ name: "layout", path: "/", component: lx, children: [{ name: "root", path: "", component: yS }, { name: "webgl", path: "webgl", component: LS }] }], OS = oS({ history: Bx(), routes: FS });
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
