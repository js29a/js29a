var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value2) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value2);
var __privateSet = (obj, member, value2, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value2) : member.set(obj, value2), value2);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _n2, _a2, _e, _l2, _t2, _o2, _r2, _PS_instances, i_fn;
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
function ls(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const mt = {}, vr = [], Vn = () => {
}, Dg = () => false, Ko = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), rs = (e) => e.startsWith("onUpdate:"), It = Object.assign, as = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ig = Object.prototype.hasOwnProperty, st = (e, t) => Ig.call(e, t), Ne = Array.isArray, mr = (e) => Ea(e) === "[object Map]", Ff = (e) => Ea(e) === "[object Set]", zg = (e) => Ea(e) === "[object RegExp]", Ke = (e) => typeof e == "function", $t = (e) => typeof e == "string", wl = (e) => typeof e == "symbol", Ct = (e) => e !== null && typeof e == "object", Of = (e) => (Ct(e) || Ke(e)) && Ke(e.then) && Ke(e.catch), Vf = Object.prototype.toString, Ea = (e) => Vf.call(e), Ng = (e) => Ea(e).slice(8, -1), Df = (e) => Ea(e) === "[object Object]", os = (e) => $t(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Jr = /* @__PURE__ */ ls(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Wo = (e) => {
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
  const t = $t(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let uc;
const Ra = () => uc || (uc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Xo(e) {
  if (Ne(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], l = $t(r) ? Xg(r) : Xo(r);
      if (l) for (const a in l) t[a] = l[a];
    }
    return t;
  } else if ($t(e) || Ct(e)) return e;
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
function is(e) {
  let t = "";
  if ($t(e)) t = e;
  else if (Ne(e)) for (let n = 0; n < e.length; n++) {
    const r = is(e[n]);
    r && (t += r + " ");
  }
  else if (Ct(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Gg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Zg = /* @__PURE__ */ ls(Gg);
function zf(e) {
  return !!e || e === "";
}
const Nf = (e) => !!(e && e.__v_isRef === true), ta = (e) => $t(e) ? e : e == null ? "" : Ne(e) || Ct(e) && (e.toString === Vf || !Ke(e.toString)) ? Nf(e) ? ta(e.value) : JSON.stringify(e, Hf, 2) : String(e), Hf = (e, t) => Nf(t) ? Hf(e, t.value) : mr(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, l], a) => (n[Ti(r, a) + " =>"] = l, n), {}) } : Ff(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => Ti(n)) } : wl(t) ? Ti(t) : Ct(t) && !Ne(t) && !Df(t) ? String(t) : t, Ti = (e, t = "") => {
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
    this.flags |= 2, sc(this), Kf(this);
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
      for (let t = this.deps; t; t = t.nextDep) cs(t);
      this.deps = this.depsTail = void 0, sc(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? qi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    yu(this) && this.run();
  }
  get dirty() {
    return yu(this);
  }
}
let Uf = 0, na, la;
function Qf(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = la, la = e;
    return;
  }
  e.next = na, na = e;
}
function us() {
  Uf++;
}
function ss() {
  if (--Uf > 0) return;
  if (la) {
    let t = la;
    for (la = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; na; ) {
    let t = na;
    for (na = void 0; t; ) {
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
    r.version === -1 ? (r === n && (n = l), cs(r), t0(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = l;
  }
  e.deps = t, e.depsTail = n;
}
function yu(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Yf(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function Yf(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ha)) return;
  e.globalVersion = ha;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !yu(e)) {
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
function cs(e, t = false) {
  const { dep: n, prevSub: r, nextSub: l } = e;
  if (r && (r.nextSub = l, e.prevSub = void 0), l && (l.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep) cs(a, true);
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
function sc(e) {
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
let ha = 0;
class n0 {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ds {
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
    this.version++, ha++, this.notify(t);
  }
  notify(t) {
    us();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      ss();
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
const _u = /* @__PURE__ */ new WeakMap(), Nl = Symbol(""), wu = Symbol(""), ga = Symbol("");
function Wt(e, t, n) {
  if (Mn && bt) {
    let r = _u.get(e);
    r || _u.set(e, r = /* @__PURE__ */ new Map());
    let l = r.get(n);
    l || (r.set(n, l = new ds()), l.map = r, l.key = n), l.track();
  }
}
function Yn(e, t, n, r, l, a) {
  const o = _u.get(e);
  if (!o) {
    ha++;
    return;
  }
  const i = (u) => {
    u && u.trigger();
  };
  if (us(), t === "clear") o.forEach(i);
  else {
    const u = Ne(e), c = u && os(n);
    if (u && n === "length") {
      const s = Number(r);
      o.forEach((f, h) => {
        (h === "length" || h === ga || !wl(h) && h >= s) && i(f);
      });
    } else switch ((n !== void 0 || o.has(void 0)) && i(o.get(n)), c && i(o.get(ga)), t) {
      case "add":
        u ? c && i(o.get("length")) : (i(o.get(Nl)), mr(e) && i(o.get(wu)));
        break;
      case "delete":
        u || (i(o.get(Nl)), mr(e) && i(o.get(wu)));
        break;
      case "set":
        mr(e) && i(o.get(Nl));
        break;
    }
  }
  ss();
}
function tr(e) {
  const t = Ge(e);
  return t === e ? t : (Wt(t, "iterate", ga), En(e) ? t : t.map(Gt));
}
function fs(e) {
  return Wt(e = Ge(e), "iterate", ga), e;
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
  return cc(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return cc(this, "reduceRight", e, t);
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
  const r = fs(e), l = r[t]();
  return r !== e && !En(e) && (l._next = l.next, l.next = () => {
    const a = l._next();
    return a.value && (a.value = n(a.value)), a;
  }), l;
}
const r0 = Array.prototype;
function Nn(e, t, n, r, l, a) {
  const o = fs(e), i = o !== e && !En(e), u = o[t];
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
function cc(e, t, n, r) {
  const l = fs(e);
  let a = n;
  return l !== e && (En(e) ? n.length > 3 && (a = function(o, i, u) {
    return n.call(this, o, i, u, e);
  }) : a = function(o, i, u) {
    return n.call(this, o, Gt(i), u, e);
  }), l[t](a, ...r);
}
function Ei(e, t, n) {
  const r = Ge(e);
  Wt(r, "iterate", ga);
  const l = r[t](...n);
  return (l === -1 || l === false) && gs(n[0]) ? (n[0] = Ge(n[0]), r[t](...n)) : l;
}
function Fr(e, t, n = []) {
  xl(), us();
  const r = Ge(e)[t].apply(e, n);
  return ss(), Sl(), r;
}
const a0 = /* @__PURE__ */ ls("__proto__,__v_isRef,__isVue"), Zf = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(wl));
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
    return (wl(n) ? Zf.has(n) : a0(n)) || (l || Wt(t, "get", n), a) ? i : yt(i) ? o && os(n) ? i : i.value : Ct(i) ? l ? rv(i) : On(i) : i;
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
    const o = Ne(t) && os(n) ? Number(n) < t.length : st(t, n), i = Reflect.set(t, n, r, yt(t) ? t : l);
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
const xu = (e) => e, Va = (e) => Reflect.getPrototypeOf(e);
function d0(e, t, n) {
  return function(...r) {
    const l = this.__v_raw, a = Ge(l), o = mr(a), i = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, c = l[e](...r), s = n ? xu : t ? Su : Gt;
    return !t && Wt(a, "iterate", u ? wu : Nl), { next() {
      const { value: f, done: h } = c.next();
      return h ? { value: f, done: h } : { value: i ? [s(f[0]), s(f[1])] : s(f), done: h };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function Da(e) {
  return function(...t) {
    return e === "delete" ? false : e === "clear" ? void 0 : this;
  };
}
function f0(e, t) {
  const n = { get(l) {
    const a = this.__v_raw, o = Ge(a), i = Ge(l);
    e || (bl(l, i) && Wt(o, "get", l), Wt(o, "get", i));
    const { has: u } = Va(o), c = t ? xu : e ? Su : Gt;
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
    const o = this, i = o.__v_raw, u = Ge(i), c = t ? xu : e ? Su : Gt;
    return !e && Wt(u, "iterate", Nl), i.forEach((s, f) => l.call(a, c(s), c(f), o));
  } };
  return It(n, e ? { add: Da("add"), set: Da("set"), delete: Da("delete"), clear: Da("clear") } : { add(l) {
    !t && !En(l) && !Kl(l) && (l = Ge(l));
    const a = Ge(this);
    return Va(a).has.call(a, l) || (a.add(l), Yn(a, "add", l, l)), this;
  }, set(l, a) {
    !t && !En(a) && !Kl(a) && (a = Ge(a));
    const o = Ge(this), { has: i, get: u } = Va(o);
    let c = i.call(o, l);
    c || (l = Ge(l), c = i.call(o, l));
    const s = u.call(o, l);
    return o.set(l, a), c ? bl(a, s) && Yn(o, "set", l, a) : Yn(o, "add", l, a), this;
  }, delete(l) {
    const a = Ge(this), { has: o, get: i } = Va(a);
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
function vs(e, t) {
  const n = f0(e, t);
  return (r, l, a) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? r : Reflect.get(st(n, l) && l in r ? n : r, l, a);
}
const v0 = { get: vs(false, false) }, m0 = { get: vs(false, true) }, h0 = { get: vs(true, false) };
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
  return Kl(e) ? e : hs(e, false, u0, v0, tv);
}
function ms(e) {
  return hs(e, false, c0, m0, nv);
}
function rv(e) {
  return hs(e, true, s0, h0, lv);
}
function hs(e, t, n, r, l) {
  if (!Ct(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const a = l.get(e);
  if (a) return a;
  const o = p0(e);
  if (o === 0) return e;
  const i = new Proxy(e, o === 2 ? r : n);
  return l.set(e, i), i;
}
function ra(e) {
  return Kl(e) ? ra(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Kl(e) {
  return !!(e && e.__v_isReadonly);
}
function En(e) {
  return !!(e && e.__v_isShallow);
}
function gs(e) {
  return e ? !!e.__v_raw : false;
}
function Ge(e) {
  const t = e && e.__v_raw;
  return t ? Ge(t) : e;
}
function Go(e) {
  return !st(e, "__v_skip") && Object.isExtensible(e) && If(e, "__v_skip", true), e;
}
const Gt = (e) => Ct(e) ? On(e) : e, Su = (e) => Ct(e) ? rv(e) : e;
function yt(e) {
  return e ? e.__v_isRef === true : false;
}
function K(e) {
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
    this.dep = new ds(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Ge(t), this._value = n ? t : Gt(t), this.__v_isShallow = n;
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
  return ra(e) ? e : new Proxy(e, w0);
}
class x0 {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ds(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ha - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
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
const Ia = {}, yo = /* @__PURE__ */ new WeakMap();
let Bl;
function C0(e, t = false, n = Bl) {
  if (n) {
    let r = yo.get(n);
    r || yo.set(n, r = []), r.push(e);
  }
}
function k0(e, t, n = mt) {
  const { immediate: r, deep: l, once: a, scheduler: o, augmentJob: i, call: u } = n, c = (b) => l ? b : En(b) || l === false || l === 0 ? Xn(b, 1) : Xn(b);
  let s, f, h, m, g = false, w = false;
  if (yt(e) ? (f = () => e.value, g = En(e)) : ra(e) ? (f = () => c(e), g = true) : Ne(e) ? (w = true, g = e.some((b) => ra(b) || En(b)), f = () => e.map((b) => {
    if (yt(b)) return b.value;
    if (ra(b)) return c(b);
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
  const x = e0(), k = () => {
    s.stop(), x && x.active && as(x.effects, s);
  };
  if (a && t) {
    const b = t;
    t = (...C) => {
      b(...C), k();
    };
  }
  let y = w ? new Array(e.length).fill(Ia) : Ia;
  const p = (b) => {
    if (!(!(s.flags & 1) || !s.dirty && !b)) if (t) {
      const C = s.run();
      if (l || g || (w ? C.some((P, O) => bl(P, y[O])) : bl(C, y))) {
        h && h();
        const P = Bl;
        Bl = s;
        try {
          const O = [C, y === Ia ? void 0 : w && y[0] === Ia ? [] : y, m];
          u ? u(t, 3, O) : t(...O), y = C;
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
  }, t ? r ? p(true) : y = s.run() : o ? o(p.bind(null, true), true) : s.run(), k.pause = s.pause.bind(s), k.resume = s.resume.bind(s), k.stop = k, k;
}
function Xn(e, t = 1 / 0, n) {
  if (t <= 0 || !Ct(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
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
function Aa(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (l) {
    Zo(l, t, n);
  }
}
function An(e, t, n, r) {
  if (Ke(e)) {
    const l = Aa(e, t, n, r);
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
      xl(), Aa(a, null, 10, [e, u, c]), Sl();
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
    const r = t + n >>> 1, l = Zt[r], a = ba(l);
    a < e || a === e && l.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function bs(e) {
  if (!(e.flags & 1)) {
    const t = ba(e), n = Zt[Zt.length - 1];
    !n || !(e.flags & 2) && t >= ba(n) ? Zt.push(e) : Zt.splice(q0(t), 0, e), e.flags |= 1, uv();
  }
}
function uv() {
  _o || (_o = iv.then(cv));
}
function M0(e) {
  Ne(e) ? hr.push(...e) : cl && e.id === -1 ? cl.splice(sr + 1, 0, e) : e.flags & 1 || (hr.push(e), e.flags |= 1), uv();
}
function dc(e, t, n = Bn + 1) {
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
    const t = [...new Set(hr)].sort((n, r) => ba(n) - ba(r));
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
const ba = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function cv(e) {
  try {
    for (Bn = 0; Bn < Zt.length; Bn++) {
      const t = Zt[Bn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Aa(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
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
    r._d && Cc(-1);
    const a = wo(t);
    let o;
    try {
      o = e(...l);
    } finally {
      wo(a), r._d && Cc(1);
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
const fv = Symbol("_vte"), vv = (e) => e.__isTeleport, aa = (e) => e && (e.disabled || e.disabled === ""), fc = (e) => e && (e.defer || e.defer === ""), vc = (e) => typeof SVGElement < "u" && e instanceof SVGElement, mc = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Cu = (e, t) => {
  const n = e && e.to;
  return $t(n) ? t ? t(n) : null : n;
}, mv = { name: "Teleport", __isTeleport: true, process(e, t, n, r, l, a, o, i, u, c) {
  const { mc: s, pc: f, pbc: h, o: { insert: m, querySelector: g, createText: w, createComment: x } } = c, k = aa(t.props);
  let { shapeFlag: y, children: p, dynamicChildren: b } = t;
  if (e == null) {
    const C = t.el = w(""), P = t.anchor = w("");
    m(C, n, r), m(P, n, r);
    const O = (B, L) => {
      y & 16 && (l && l.isCE && (l.ce._teleportTarget = B), s(p, B, L, l, a, o, i, u));
    }, H = () => {
      const B = t.target = Cu(t.props, g), L = hv(B, t, w, m);
      B && (o !== "svg" && vc(B) ? o = "svg" : o !== "mathml" && mc(B) && (o = "mathml"), k || (O(B, L), oo(t, false)));
    };
    k && (O(n, P), oo(t, true)), fc(t.props) ? Ft(() => {
      H(), t.el.__isMounted = true;
    }, a) : H();
  } else {
    if (fc(t.props) && !e.el.__isMounted) {
      Ft(() => {
        mv.process(e, t, n, r, l, a, o, i, u, c), delete e.el.__isMounted;
      }, a);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const C = t.anchor = e.anchor, P = t.target = e.target, O = t.targetAnchor = e.targetAnchor, H = aa(e.props), B = H ? n : P, L = H ? C : O;
    if (o === "svg" || vc(P) ? o = "svg" : (o === "mathml" || mc(P)) && (o = "mathml"), b ? (h(e.dynamicChildren, b, B, l, a, o, i), ws(e, t, true)) : u || f(e, t, B, L, l, a, o, i, false), k) H ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : za(t, n, C, c, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const N = t.target = Cu(t.props, g);
      N && za(t, N, null, c, 0);
    } else H && za(t, P, O, c, 1);
    oo(t, k);
  }
}, remove(e, t, n, { um: r, o: { remove: l } }, a) {
  const { shapeFlag: o, children: i, anchor: u, targetStart: c, targetAnchor: s, target: f, props: h } = e;
  if (f && (l(c), l(s)), a && l(u), o & 16) {
    const m = a || !aa(h);
    for (let g = 0; g < i.length; g++) {
      const w = i[g];
      r(w, t, n, m, !!w.dynamicChildren);
    }
  }
}, move: za, hydrate: E0 };
function za(e, t, n, { o: { insert: r }, m: l }, a = 2) {
  a === 0 && r(e.targetAnchor, t, n);
  const { el: o, anchor: i, shapeFlag: u, children: c, props: s } = e, f = a === 2;
  if (f && r(o, t, n), (!f || aa(s)) && u & 16) for (let h = 0; h < c.length; h++) l(c[h], t, n, 2);
  f && r(i, t, n);
}
function E0(e, t, n, r, l, a, { o: { nextSibling: o, parentNode: i, querySelector: u, insert: c, createText: s } }, f) {
  const h = t.target = Cu(t.props, u);
  if (h) {
    const m = aa(t.props), g = h._lpa || h.firstChild;
    if (t.shapeFlag & 16) if (m) t.anchor = f(o(e), t, i(e), n, r, l, a), t.targetStart = g, t.targetAnchor = g && o(g);
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
      t.targetAnchor || hv(h, t, s, c), f(g && o(g), t, h, n, r, l, a);
    }
    oo(t, m);
  }
  return t.anchor && o(t.anchor);
}
const R0 = mv;
function oo(e, t) {
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
const dl = Symbol("_leaveCb"), Na = Symbol("_enterCb");
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
    const l = t.default && ps(t.default(), true);
    if (!l || !l.length) return;
    const a = yv(l), o = Ge(e), { mode: i } = o;
    if (r.isLeaving) return Ri(a);
    const u = hc(a);
    if (!u) return Ri(a);
    let c = pa(u, o, r, n, (f) => c = f);
    u.type !== Jt && _l(u, c);
    let s = n.subTree && hc(n.subTree);
    if (s && s.type !== Jt && !hl(u, s) && pv(n).type !== Jt) {
      let f = pa(s, o, r, n);
      if (_l(s, f), i === "out-in" && u.type !== Jt) return r.isLeaving = true, f.afterLeave = () => {
        r.isLeaving = false, n.job.flags & 8 || n.update(), delete f.afterLeave, s = void 0;
      }, Ri(a);
      i === "in-out" && u.type !== Jt ? f.delayLeave = (h, m, g) => {
        const w = _v(r, s);
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
const $0 = A0;
function _v(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function pa(e, t, n, r, l) {
  const { appear: a, mode: o, persisted: i = false, onBeforeEnter: u, onEnter: c, onAfterEnter: s, onEnterCancelled: f, onBeforeLeave: h, onLeave: m, onAfterLeave: g, onLeaveCancelled: w, onBeforeAppear: x, onAppear: k, onAfterAppear: y, onAppearCancelled: p } = t, b = String(e.key), C = _v(n, e), P = (B, L) => {
    B && An(B, r, 9, L);
  }, O = (B, L) => {
    const N = L[1];
    P(B, L), Ne(B) ? B.every((q) => q.length <= 1) && N() : B.length <= 1 && N();
  }, H = { mode: o, persisted: i, beforeEnter(B) {
    let L = u;
    if (!n.isMounted) if (a) L = x || u;
    else return;
    B[dl] && B[dl](true);
    const N = C[b];
    N && hl(e, N) && N.el[dl] && N.el[dl](), P(L, [B]);
  }, enter(B) {
    let L = c, N = s, q = f;
    if (!n.isMounted) if (a) L = k || c, N = y || s, q = p || f;
    else return;
    let R = false;
    const T = B[Na] = (j) => {
      R || (R = true, j ? P(q, [B]) : P(N, [B]), H.delayedLeave && H.delayedLeave(), B[Na] = void 0);
    };
    L ? O(L, [B, T]) : T();
  }, leave(B, L) {
    const N = String(e.key);
    if (B[Na] && B[Na](true), n.isUnmounting) return L();
    P(h, [B]);
    let q = false;
    const R = B[dl] = (T) => {
      q || (q = true, L(), T ? P(w, [B]) : P(g, [B]), B[dl] = void 0, C[N] === e && delete C[N]);
    };
    C[N] = e, m ? O(m, [B, R]) : R();
  }, clone(B) {
    const L = pa(B, t, n, r, l);
    return l && l(L), L;
  } };
  return H;
}
function Ri(e) {
  if (Jo(e)) return e = Gn(e), e.children = null, e;
}
function hc(e) {
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
function ps(e, t = false, n) {
  let r = [], l = 0;
  for (let a = 0; a < e.length; a++) {
    let o = e[a];
    const i = n == null ? o.key : String(n) + String(o.key != null ? o.key : a);
    o.type === nn ? (o.patchFlag & 128 && l++, r = r.concat(ps(o.children, t, i))) : (t || o.type !== Jt) && r.push(i != null ? Gn(o, { key: i }) : o);
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
    e.forEach((g, w) => xo(g, t && (Ne(t) ? t[w] : t), n, r, l));
    return;
  }
  if (gr(r) && !l) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && xo(e, t, n, r.component.subTree);
    return;
  }
  const a = r.shapeFlag & 4 ? ii(r.component) : r.el, o = l ? null : a, { i, r: u } = e, c = t && t.r, s = i.refs === mt ? i.refs = {} : i.refs, f = i.setupState, h = Ge(f), m = f === mt ? () => false : (g) => st(h, g);
  if (c != null && c !== u && ($t(c) ? (s[c] = null, m(c) && (f[c] = null)) : yt(c) && (c.value = null)), Ke(u)) Aa(u, i, 12, [o, s]);
  else {
    const g = $t(u), w = yt(u);
    if (g || w) {
      const x = () => {
        if (e.f) {
          const k = g ? m(u) ? f[u] : s[u] : u.value;
          l ? Ne(k) && as(k, a) : Ne(k) ? k.includes(a) || k.push(a) : g ? (s[u] = [a], m(u) && (f[u] = s[u])) : (u.value = [a], e.k && (s[e.k] = u.value));
        } else g ? (s[u] = o, m(u) && (f[u] = o)) : w && (u.value = o, e.k && (s[e.k] = o));
      };
      o ? (x.id = -1, Ft(x, n)) : x();
    }
  }
}
Ra().requestIdleCallback;
Ra().cancelIdleCallback;
const gr = (e) => !!e.type.__asyncLoader, Jo = (e) => e.type.__isKeepAlive, P0 = { name: "KeepAlive", __isKeepAlive: true, props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] }, setup(e, { slots: t }) {
  const n = xe(), r = n.ctx;
  if (!r.renderer) return () => {
    const y = t.default && t.default();
    return y && y.length === 1 ? y[0] : y;
  };
  const l = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
  let o = null;
  const i = n.suspense, { renderer: { p: u, m: c, um: s, o: { createElement: f } } } = r, h = f("div");
  r.activate = (y, p, b, C, P) => {
    const O = y.component;
    c(y, p, b, 0, i), u(O.vnode, y, p, b, O, i, C, y.slotScopeIds, P), Ft(() => {
      O.isDeactivated = false, O.a && ea(O.a);
      const H = y.props && y.props.onVnodeMounted;
      H && mn(H, O.parent, y);
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
      const C = Ru(p.type);
      C && !y(C) && w(b);
    });
  }
  function w(y) {
    const p = l.get(y);
    p && (!o || !hl(p, o)) ? m(p) : o && Ai(o), l.delete(y), a.delete(y);
  }
  ge(() => [e.include, e.exclude], ([y, p]) => {
    y && g((b) => Kr(y, b)), p && g((b) => !Kr(p, b));
  }, { flush: "post", deep: true });
  let x = null;
  const k = () => {
    x != null && (ko(n.subTree.type) ? Ft(() => {
      l.set(x, Ha(n.subTree));
    }, n.subTree.suspense) : l.set(x, Ha(n.subTree)));
  };
  return ct(k), ni(k), We(() => {
    l.forEach((y) => {
      const { subTree: p, suspense: b } = n, C = Ha(p);
      if (y.type === C.type && y.key === C.key) {
        Ai(C);
        const P = C.component.da;
        P && Ft(P, b);
        return;
      }
      m(y);
    });
  }), () => {
    if (x = null, !t.default) return o = null;
    const y = t.default(), p = y[0];
    if (y.length > 1) return o = null, y;
    if (!_a(p) || !(p.shapeFlag & 4) && !(p.shapeFlag & 128)) return o = null, p;
    let b = Ha(p);
    if (b.type === Jt) return o = null, b;
    const C = b.type, P = Ru(gr(b) ? b.type.__asyncResolved || {} : C), { include: O, exclude: H, max: B } = e;
    if (O && (!P || !Kr(O, P)) || H && P && Kr(H, P)) return b.shapeFlag &= -257, o = b, p;
    const L = b.key == null ? C : b.key, N = l.get(L);
    return b.el && (b = Gn(b), p.shapeFlag & 128 && (p.ssContent = b)), x = L, N ? (b.el = N.el, b.component = N.component, b.transition && _l(b, b.transition), b.shapeFlag |= 512, a.delete(L), a.add(L)) : (a.add(L), B && a.size > parseInt(B, 10) && w(a.values().next().value)), b.shapeFlag |= 256, o = b, ko(p.type) ? p : b;
  };
} }, xv = P0;
function Kr(e, t) {
  return Ne(e) ? e.some((n) => Kr(n, t)) : $t(e) ? e.split(",").includes(t) : zg(e) ? (e.lastIndex = 0, e.test(t)) : false;
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
    as(r[t], l);
  }, n);
}
function Ai(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function Ha(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function ei(e, t, n = jt, r = false) {
  if (n) {
    const l = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...o) => {
      xl();
      const i = $a(n), u = An(t, n, e, o);
      return i(), Sl(), u;
    });
    return r ? l.unshift(a) : l.push(a), a;
  }
}
const Jn = (e) => (t, n = jt) => {
  (!wa || e === "sp") && ei(e, (...r) => t(...r), n);
}, ti = Jn("bm"), ct = Jn("m"), Rr = Jn("bu"), ni = Jn("u"), We = Jn("bum"), li = Jn("um"), B0 = Jn("sp"), F0 = Jn("rtg"), O0 = Jn("rtc");
function V0(e, t = jt) {
  ei("ec", e, t);
}
const Cv = "components", D0 = "directives";
function ys(e, t) {
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
      const i = Ru(a, false);
      if (i && (i === t || i === pn(t) || i === Yo(pn(t)))) return a;
    }
    const o = gc(l[e] || a[e], t) || gc(l.appContext[e], t);
    return !o && r ? a : o;
  }
}
function gc(e, t) {
  return e && (e[t] || e[pn(t)] || e[Yo(pn(t))]);
}
const ku = (e) => e ? jv(e) ? ii(e) : ku(e.parent) : null, oa = It(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => ku(e.parent), $root: (e) => ku(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => qv(e), $forceUpdate: (e) => e.f || (e.f = () => {
  bs(e.update);
}), $nextTick: (e) => e.n || (e.n = Qe.bind(e.proxy)), $watch: (e) => sb.bind(e) }), $i = (e, t) => e !== mt && !e.__isScriptSetup && st(e, t), N0 = { get({ _: e }, t) {
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
      if ($i(r, t)) return o[t] = 1, r[t];
      if (l !== mt && st(l, t)) return o[t] = 2, l[t];
      if ((c = e.propsOptions[0]) && st(c, t)) return o[t] = 3, a[t];
      if (n !== mt && st(n, t)) return o[t] = 4, n[t];
      Tu && (o[t] = 0);
    }
  }
  const s = oa[t];
  let f, h;
  if (s) return t === "$attrs" && Wt(e.attrs, "get", ""), s(e);
  if ((f = i.__cssModules) && (f = f[t])) return f;
  if (n !== mt && st(n, t)) return o[t] = 4, n[t];
  if (h = u.config.globalProperties, st(h, t)) return h[t];
}, set({ _: e }, t, n) {
  const { data: r, setupState: l, ctx: a } = e;
  return $i(l, t) ? (l[t] = n, true) : r !== mt && st(r, t) ? (r[t] = n, true) : st(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (a[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: l, propsOptions: a } }, o) {
  let i;
  return !!n[o] || e !== mt && st(e, o) || $i(t, o) || (i = a[0]) && st(i, o) || st(r, o) || st(oa, o) || st(l.config.globalProperties, o);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : st(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function bc(e) {
  return Ne(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let Tu = true;
function H0(e) {
  const t = qv(e), n = e.proxy, r = e.ctx;
  Tu = false, t.beforeCreate && pc(t.beforeCreate, e, "bc");
  const { data: l, computed: a, methods: o, watch: i, provide: u, inject: c, created: s, beforeMount: f, mounted: h, beforeUpdate: m, updated: g, activated: w, deactivated: x, beforeDestroy: k, beforeUnmount: y, destroyed: p, unmounted: b, render: C, renderTracked: P, renderTriggered: O, errorCaptured: H, serverPrefetch: B, expose: L, inheritAttrs: N, components: q, directives: R, filters: T } = t;
  if (c && j0(c, r, null), o) for (const U in o) {
    const Z = o[U];
    Ke(Z) && (r[U] = Z.bind(n));
  }
  if (l) {
    const U = l.call(n, n);
    Ct(U) && (e.data = On(U));
  }
  if (Tu = true, a) for (const U in a) {
    const Z = a[U], ae = Ke(Z) ? Z.bind(n, n) : Ke(Z.get) ? Z.get.bind(n, n) : Vn, ye = !Ke(Z) && Ke(Z.set) ? Z.set.bind(n) : Vn, X = v({ get: ae, set: ye });
    Object.defineProperty(r, U, { enumerable: true, configurable: true, get: () => X.value, set: (_) => X.value = _ });
  }
  if (i) for (const U in i) Tv(i[U], r, n, U);
  if (u) {
    const U = Ke(u) ? u.call(n) : u;
    Reflect.ownKeys(U).forEach((Z) => {
      gn(Z, U[Z]);
    });
  }
  s && pc(s, e, "c");
  function W(U, Z) {
    Ne(Z) ? Z.forEach((ae) => U(ae.bind(n))) : Z && U(Z.bind(n));
  }
  if (W(ti, f), W(ct, h), W(Rr, m), W(ni, g), W(kl, w), W(Dn, x), W(V0, H), W(O0, P), W(F0, O), W(We, y), W(li, b), W(B0, B), Ne(L)) if (L.length) {
    const U = e.exposed || (e.exposed = {});
    L.forEach((Z) => {
      Object.defineProperty(U, Z, { get: () => n[Z], set: (ae) => n[Z] = ae });
    });
  } else e.exposed || (e.exposed = {});
  C && e.render === Vn && (e.render = C), N != null && (e.inheritAttrs = N), q && (e.components = q), R && (e.directives = R), B && wv(e);
}
function j0(e, t, n = Vn) {
  Ne(e) && (e = qu(e));
  for (const r in e) {
    const l = e[r];
    let a;
    Ct(l) ? "default" in l ? a = Mt(l.from || r, l.default, true) : a = Mt(l.from || r) : a = Mt(l), yt(a) ? Object.defineProperty(t, r, { enumerable: true, configurable: true, get: () => a.value, set: (o) => a.value = o }) : t[r] = a;
  }
}
function pc(e, t, n) {
  An(Ne(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Tv(e, t, n, r) {
  let l = r.includes(".") ? Iv(n, r) : () => n[r];
  if ($t(e)) {
    const a = t[e];
    Ke(a) && ge(l, a);
  } else if (Ke(e)) ge(l, e.bind(n));
  else if (Ct(e)) if (Ne(e)) e.forEach((a) => Tv(a, t, n, r));
  else {
    const a = Ke(e.handler) ? e.handler.bind(n) : t[e.handler];
    Ke(a) && ge(l, a, e);
  }
}
function qv(e) {
  const t = e.type, { mixins: n, extends: r } = t, { mixins: l, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, i = a.get(t);
  let u;
  return i ? u = i : !l.length && !n && !r ? u = t : (u = {}, l.length && l.forEach((c) => So(u, c, o, true)), So(u, t, o)), Ct(t) && a.set(t, u), u;
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
const U0 = { data: yc, props: _c, emits: _c, methods: Wr, computed: Wr, beforeCreate: Xt, created: Xt, beforeMount: Xt, mounted: Xt, beforeUpdate: Xt, updated: Xt, beforeDestroy: Xt, beforeUnmount: Xt, destroyed: Xt, unmounted: Xt, activated: Xt, deactivated: Xt, errorCaptured: Xt, serverPrefetch: Xt, components: Wr, directives: Wr, watch: K0, provide: yc, inject: Q0 };
function yc(e, t) {
  return t ? e ? function() {
    return It(Ke(e) ? e.call(this, this) : e, Ke(t) ? t.call(this, this) : t);
  } : t : e;
}
function Q0(e, t) {
  return Wr(qu(e), qu(t));
}
function qu(e) {
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
function _c(e, t) {
  return e ? Ne(e) && Ne(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : It(/* @__PURE__ */ Object.create(null), bc(e), bc(t ?? {})) : t;
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
    Ke(r) || (r = It({}, r)), l != null && !Ct(l) && (l = null);
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
  e.propsDefaults = /* @__PURE__ */ Object.create(null), $v(e, t, l, a);
  for (const o in e.propsOptions[0]) o in l || (l[o] = void 0);
  n ? e.props = r ? l : ms(l) : e.type.props ? e.props = l : e.props = a, e.attrs = a;
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
          l[g] = Mu(u, i, g, m, e, false);
        }
        else m !== a[h] && (a[h] = m, c = true);
      }
    }
  } else {
    $v(e, t, l, a) && (c = true);
    let s;
    for (const f in i) (!t || !st(t, f) && ((s = Gl(f)) === f || !st(t, s))) && (u ? n && (n[f] !== void 0 || n[s] !== void 0) && (l[f] = Mu(u, i, f, void 0, e, true)) : delete l[f]);
    if (a !== i) for (const f in a) (!t || !st(t, f)) && (delete a[f], c = true);
  }
  c && Yn(e.attrs, "set", "");
}
function $v(e, t, n, r) {
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
      n[f] = Mu(l, u, f, c[f], e, !st(c, f));
    }
  }
  return o;
}
function Mu(e, t, n, r, l, a) {
  const o = e[n];
  if (o != null) {
    const i = st(o, "default");
    if (i && r === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && Ke(u)) {
        const { propsDefaults: c } = l;
        if (n in c) r = c[n];
        else {
          const s = $a(l);
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
function Pv(e, t, n = false) {
  const r = n ? Z0 : t.propsCache, l = r.get(e);
  if (l) return l;
  const a = e.props, o = {}, i = [];
  let u = false;
  if (!Ke(e)) {
    const s = (f) => {
      u = true;
      const [h, m] = Pv(f, t, true);
      It(o, h), m && i.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  if (!a && !u) return Ct(e) && r.set(e, vr), vr;
  if (Ne(a)) for (let s = 0; s < a.length; s++) {
    const f = pn(a[s]);
    wc(f) && (o[f] = mt);
  }
  else if (a) for (const s in a) {
    const f = pn(s);
    if (wc(f)) {
      const h = a[s], m = o[f] = Ne(h) || Ke(h) ? { type: h } : It({}, h), g = m.type;
      let w = false, x = true;
      if (Ne(g)) for (let k = 0; k < g.length; ++k) {
        const y = g[k], p = Ke(y) && y.name;
        if (p === "Boolean") {
          w = true;
          break;
        } else p === "String" && (x = false);
      }
      else w = Ke(g) && g.name === "Boolean";
      m[0] = w, m[1] = x, (w || st(m, "default")) && i.push(f);
    }
  }
  const c = [o, i];
  return Ct(e) && r.set(e, c), c;
}
function wc(e) {
  return e[0] !== "$" && !Jr(e);
}
const Lv = (e) => e[0] === "_" || e === "$stable", _s = (e) => Ne(e) ? e.map(Fn) : [Fn(e)], J0 = (e, t, n) => {
  if (t._n) return t;
  const r = At((...l) => _s(t(...l)), n);
  return r._c = false, r;
}, Bv = (e, t, n) => {
  const r = e._ctx;
  for (const l in e) {
    if (Lv(l)) continue;
    const a = e[l];
    if (Ke(a)) t[l] = J0(l, a, r);
    else if (a != null) {
      const o = _s(a);
      t[l] = () => o;
    }
  }
}, Fv = (e, t) => {
  const n = _s(t);
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
  typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && (Ra().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false);
}
const Ft = bb;
function lb(e) {
  return rb(e);
}
function rb(e, t) {
  nb();
  const n = Ra();
  n.__VUE__ = true;
  const { insert: r, remove: l, patchProp: a, createElement: o, createText: i, createComment: u, setText: c, setElementText: s, parentNode: f, nextSibling: h, setScopeId: m = Vn, insertStaticContent: g } = e, w = (S, M, I, te = null, le = null, E = null, ee = void 0, se = null, ve = !!M.dynamicChildren) => {
    if (S === M) return;
    S && !hl(S, M) && (te = A(S), _(S, le, E, true), S = null), M.patchFlag === -2 && (ve = false, M.dynamicChildren = null);
    const { type: ce, ref: re, shapeFlag: Q } = M;
    switch (ce) {
      case ai:
        x(S, M, I, te);
        break;
      case Jt:
        k(S, M, I, te);
        break;
      case Li:
        S == null && y(M, I, te, ee);
        break;
      case nn:
        q(S, M, I, te, le, E, ee, se, ve);
        break;
      default:
        Q & 1 ? C(S, M, I, te, le, E, ee, se, ve) : Q & 6 ? R(S, M, I, te, le, E, ee, se, ve) : (Q & 64 || Q & 128) && ce.process(S, M, I, te, le, E, ee, se, ve, ne);
    }
    re != null && le && xo(re, S && S.ref, E, M || S, !M);
  }, x = (S, M, I, te) => {
    if (S == null) r(M.el = i(M.children), I, te);
    else {
      const le = M.el = S.el;
      M.children !== S.children && c(le, M.children);
    }
  }, k = (S, M, I, te) => {
    S == null ? r(M.el = u(M.children || ""), I, te) : M.el = S.el;
  }, y = (S, M, I, te) => {
    [S.el, S.anchor] = g(S.children, M, I, te, S.el, S.anchor);
  }, p = ({ el: S, anchor: M }, I, te) => {
    let le;
    for (; S && S !== M; ) le = h(S), r(S, I, te), S = le;
    r(M, I, te);
  }, b = ({ el: S, anchor: M }) => {
    let I;
    for (; S && S !== M; ) I = h(S), l(S), S = I;
    l(M);
  }, C = (S, M, I, te, le, E, ee, se, ve) => {
    M.type === "svg" ? ee = "svg" : M.type === "math" && (ee = "mathml"), S == null ? P(M, I, te, le, E, ee, se, ve) : B(S, M, le, E, ee, se, ve);
  }, P = (S, M, I, te, le, E, ee, se) => {
    let ve, ce;
    const { props: re, shapeFlag: Q, transition: ie, dirs: we } = S;
    if (ve = S.el = o(S.type, E, re && re.is, re), Q & 8 ? s(ve, S.children) : Q & 16 && H(S.children, ve, null, te, le, Pi(S, E), ee, se), we && Ml(S, null, te, "created"), O(ve, S, S.scopeId, ee, te), re) {
      for (const Te in re) Te !== "value" && !Jr(Te) && a(ve, Te, null, re[Te], E, te);
      "value" in re && a(ve, "value", null, re.value, E), (ce = re.onVnodeBeforeMount) && mn(ce, te, S);
    }
    we && Ml(S, null, te, "beforeMount");
    const ke = ab(le, ie);
    ke && ie.beforeEnter(ve), r(ve, M, I), ((ce = re && re.onVnodeMounted) || ke || we) && Ft(() => {
      ce && mn(ce, te, S), ke && ie.enter(ve), we && Ml(S, null, te, "mounted");
    }, le);
  }, O = (S, M, I, te, le) => {
    if (I && m(S, I), te) for (let E = 0; E < te.length; E++) m(S, te[E]);
    if (le) {
      let E = le.subTree;
      if (M === E || ko(E.type) && (E.ssContent === M || E.ssFallback === M)) {
        const ee = le.vnode;
        O(S, ee, ee.scopeId, ee.slotScopeIds, le.parent);
      }
    }
  }, H = (S, M, I, te, le, E, ee, se, ve = 0) => {
    for (let ce = ve; ce < S.length; ce++) {
      const re = S[ce] = se ? fl(S[ce]) : Fn(S[ce]);
      w(null, re, M, I, te, le, E, ee, se);
    }
  }, B = (S, M, I, te, le, E, ee) => {
    const se = M.el = S.el;
    let { patchFlag: ve, dynamicChildren: ce, dirs: re } = M;
    ve |= S.patchFlag & 16;
    const Q = S.props || mt, ie = M.props || mt;
    let we;
    if (I && El(I, false), (we = ie.onVnodeBeforeUpdate) && mn(we, I, M, S), re && Ml(M, S, I, "beforeUpdate"), I && El(I, true), (Q.innerHTML && ie.innerHTML == null || Q.textContent && ie.textContent == null) && s(se, ""), ce ? L(S.dynamicChildren, ce, se, I, te, Pi(M, le), E) : ee || Z(S, M, se, null, I, te, Pi(M, le), E, false), ve > 0) {
      if (ve & 16) N(se, Q, ie, I, le);
      else if (ve & 2 && Q.class !== ie.class && a(se, "class", null, ie.class, le), ve & 4 && a(se, "style", Q.style, ie.style, le), ve & 8) {
        const ke = M.dynamicProps;
        for (let Te = 0; Te < ke.length; Te++) {
          const Me = ke[Te], He = Q[Me], De = ie[Me];
          (De !== He || Me === "value") && a(se, Me, He, De, le, I);
        }
      }
      ve & 1 && S.children !== M.children && s(se, M.children);
    } else !ee && ce == null && N(se, Q, ie, I, le);
    ((we = ie.onVnodeUpdated) || re) && Ft(() => {
      we && mn(we, I, M, S), re && Ml(M, S, I, "updated");
    }, te);
  }, L = (S, M, I, te, le, E, ee) => {
    for (let se = 0; se < M.length; se++) {
      const ve = S[se], ce = M[se], re = ve.el && (ve.type === nn || !hl(ve, ce) || ve.shapeFlag & 70) ? f(ve.el) : I;
      w(ve, ce, re, null, te, le, E, ee, true);
    }
  }, N = (S, M, I, te, le) => {
    if (M !== I) {
      if (M !== mt) for (const E in M) !Jr(E) && !(E in I) && a(S, E, M[E], null, le, te);
      for (const E in I) {
        if (Jr(E)) continue;
        const ee = I[E], se = M[E];
        ee !== se && E !== "value" && a(S, E, se, ee, le, te);
      }
      "value" in I && a(S, "value", M.value, I.value, le);
    }
  }, q = (S, M, I, te, le, E, ee, se, ve) => {
    const ce = M.el = S ? S.el : i(""), re = M.anchor = S ? S.anchor : i("");
    let { patchFlag: Q, dynamicChildren: ie, slotScopeIds: we } = M;
    we && (se = se ? se.concat(we) : we), S == null ? (r(ce, I, te), r(re, I, te), H(M.children || [], I, re, le, E, ee, se, ve)) : Q > 0 && Q & 64 && ie && S.dynamicChildren ? (L(S.dynamicChildren, ie, I, le, E, ee, se), (M.key != null || le && M === le.subTree) && ws(S, M, true)) : Z(S, M, I, re, le, E, ee, se, ve);
  }, R = (S, M, I, te, le, E, ee, se, ve) => {
    M.slotScopeIds = se, S == null ? M.shapeFlag & 512 ? le.ctx.activate(M, I, te, ee, ve) : T(M, I, te, le, E, ee, ve) : j(S, M, ve);
  }, T = (S, M, I, te, le, E, ee) => {
    const se = S.component = Cb(S, te, le);
    if (Jo(S) && (se.ctx.renderer = ne), kb(se, false, ee), se.asyncDep) {
      if (le && le.registerDep(se, W, ee), !S.el) {
        const ve = se.subTree = Ye(Jt);
        k(null, ve, M, I);
      }
    } else W(se, S, M, I, le, E, ee);
  }, j = (S, M, I) => {
    const te = M.component = S.component;
    if (hb(S, M, I)) if (te.asyncDep && !te.asyncResolved) {
      U(te, M, I);
      return;
    } else te.next = M, te.update();
    else M.el = S.el, te.vnode = M;
  }, W = (S, M, I, te, le, E, ee) => {
    const se = () => {
      if (S.isMounted) {
        let { next: Q, bu: ie, u: we, parent: ke, vnode: Te } = S;
        {
          const pe = Vv(S);
          if (pe) {
            Q && (Q.el = Te.el, U(S, Q, ee)), pe.asyncDep.then(() => {
              S.isUnmounted || se();
            });
            return;
          }
        }
        let Me = Q, He;
        El(S, false), Q ? (Q.el = Te.el, U(S, Q, ee)) : Q = Te, ie && ea(ie), (He = Q.props && Q.props.onVnodeBeforeUpdate) && mn(He, ke, Q, Te), El(S, true);
        const De = xc(S), ue = S.subTree;
        S.subTree = De, w(ue, De, f(ue.el), A(ue), S, le, E), Q.el = De.el, Me === null && gb(S, De.el), we && Ft(we, le), (He = Q.props && Q.props.onVnodeUpdated) && Ft(() => mn(He, ke, Q, Te), le);
      } else {
        let Q;
        const { el: ie, props: we } = M, { bm: ke, m: Te, parent: Me, root: He, type: De } = S, ue = gr(M);
        El(S, false), ke && ea(ke), !ue && (Q = we && we.onVnodeBeforeMount) && mn(Q, Me, M), El(S, true);
        {
          He.ce && He.ce._injectChildStyle(De);
          const pe = S.subTree = xc(S);
          w(null, pe, I, te, S, le, E), M.el = pe.el;
        }
        if (Te && Ft(Te, le), !ue && (Q = we && we.onVnodeMounted)) {
          const pe = M;
          Ft(() => mn(Q, Me, pe), le);
        }
        (M.shapeFlag & 256 || Me && gr(Me.vnode) && Me.vnode.shapeFlag & 256) && S.a && Ft(S.a, le), S.isMounted = true, M = I = te = null;
      }
    };
    S.scope.on();
    const ve = S.effect = new jf(se);
    S.scope.off();
    const ce = S.update = ve.run.bind(ve), re = S.job = ve.runIfDirty.bind(ve);
    re.i = S, re.id = S.uid, ve.scheduler = () => bs(re), El(S, true), ce();
  }, U = (S, M, I) => {
    M.component = S;
    const te = S.vnode.props;
    S.vnode = M, S.next = null, G0(S, M.props, te, I), tb(S, M.children, I), xl(), dc(S), Sl();
  }, Z = (S, M, I, te, le, E, ee, se, ve = false) => {
    const ce = S && S.children, re = S ? S.shapeFlag : 0, Q = M.children, { patchFlag: ie, shapeFlag: we } = M;
    if (ie > 0) {
      if (ie & 128) {
        ye(ce, Q, I, te, le, E, ee, se, ve);
        return;
      } else if (ie & 256) {
        ae(ce, Q, I, te, le, E, ee, se, ve);
        return;
      }
    }
    we & 8 ? (re & 16 && $(ce, le, E), Q !== ce && s(I, Q)) : re & 16 ? we & 16 ? ye(ce, Q, I, te, le, E, ee, se, ve) : $(ce, le, E, true) : (re & 8 && s(I, ""), we & 16 && H(Q, I, te, le, E, ee, se, ve));
  }, ae = (S, M, I, te, le, E, ee, se, ve) => {
    S = S || vr, M = M || vr;
    const ce = S.length, re = M.length, Q = Math.min(ce, re);
    let ie;
    for (ie = 0; ie < Q; ie++) {
      const we = M[ie] = ve ? fl(M[ie]) : Fn(M[ie]);
      w(S[ie], we, I, null, le, E, ee, se, ve);
    }
    ce > re ? $(S, le, E, true, false, Q) : H(M, I, te, le, E, ee, se, ve, Q);
  }, ye = (S, M, I, te, le, E, ee, se, ve) => {
    let ce = 0;
    const re = M.length;
    let Q = S.length - 1, ie = re - 1;
    for (; ce <= Q && ce <= ie; ) {
      const we = S[ce], ke = M[ce] = ve ? fl(M[ce]) : Fn(M[ce]);
      if (hl(we, ke)) w(we, ke, I, null, le, E, ee, se, ve);
      else break;
      ce++;
    }
    for (; ce <= Q && ce <= ie; ) {
      const we = S[Q], ke = M[ie] = ve ? fl(M[ie]) : Fn(M[ie]);
      if (hl(we, ke)) w(we, ke, I, null, le, E, ee, se, ve);
      else break;
      Q--, ie--;
    }
    if (ce > Q) {
      if (ce <= ie) {
        const we = ie + 1, ke = we < re ? M[we].el : te;
        for (; ce <= ie; ) w(null, M[ce] = ve ? fl(M[ce]) : Fn(M[ce]), I, ke, le, E, ee, se, ve), ce++;
      }
    } else if (ce > ie) for (; ce <= Q; ) _(S[ce], le, E, true), ce++;
    else {
      const we = ce, ke = ce, Te = /* @__PURE__ */ new Map();
      for (ce = ke; ce <= ie; ce++) {
        const Ce = M[ce] = ve ? fl(M[ce]) : Fn(M[ce]);
        Ce.key != null && Te.set(Ce.key, ce);
      }
      let Me, He = 0;
      const De = ie - ke + 1;
      let ue = false, pe = 0;
      const oe = new Array(De);
      for (ce = 0; ce < De; ce++) oe[ce] = 0;
      for (ce = we; ce <= Q; ce++) {
        const Ce = S[ce];
        if (He >= De) {
          _(Ce, le, E, true);
          continue;
        }
        let Oe;
        if (Ce.key != null) Oe = Te.get(Ce.key);
        else for (Me = ke; Me <= ie; Me++) if (oe[Me - ke] === 0 && hl(Ce, M[Me])) {
          Oe = Me;
          break;
        }
        Oe === void 0 ? _(Ce, le, E, true) : (oe[Oe - ke] = ce + 1, Oe >= pe ? pe = Oe : ue = true, w(Ce, M[Oe], I, null, le, E, ee, se, ve), He++);
      }
      const _e2 = ue ? ob(oe) : vr;
      for (Me = _e2.length - 1, ce = De - 1; ce >= 0; ce--) {
        const Ce = ke + ce, Oe = M[Ce], Re = Ce + 1 < re ? M[Ce + 1].el : te;
        oe[ce] === 0 ? w(null, Oe, I, Re, le, E, ee, se, ve) : ue && (Me < 0 || ce !== _e2[Me] ? X(Oe, I, Re, 2) : Me--);
      }
    }
  }, X = (S, M, I, te, le = null) => {
    const { el: E, type: ee, transition: se, children: ve, shapeFlag: ce } = S;
    if (ce & 6) {
      X(S.component.subTree, M, I, te);
      return;
    }
    if (ce & 128) {
      S.suspense.move(M, I, te);
      return;
    }
    if (ce & 64) {
      ee.move(S, M, I, ne);
      return;
    }
    if (ee === nn) {
      r(E, M, I);
      for (let Q = 0; Q < ve.length; Q++) X(ve[Q], M, I, te);
      r(S.anchor, M, I);
      return;
    }
    if (ee === Li) {
      p(S, M, I);
      return;
    }
    if (te !== 2 && ce & 1 && se) if (te === 0) se.beforeEnter(E), r(E, M, I), Ft(() => se.enter(E), le);
    else {
      const { leave: Q, delayLeave: ie, afterLeave: we } = se, ke = () => r(E, M, I), Te = () => {
        Q(E, () => {
          ke(), we && we();
        });
      };
      ie ? ie(E, ke, Te) : Te();
    }
    else r(E, M, I);
  }, _ = (S, M, I, te = false, le = false) => {
    const { type: E, props: ee, ref: se, children: ve, dynamicChildren: ce, shapeFlag: re, patchFlag: Q, dirs: ie, cacheIndex: we } = S;
    if (Q === -2 && (le = false), se != null && xo(se, null, I, S, true), we != null && (M.renderCache[we] = void 0), re & 256) {
      M.ctx.deactivate(S);
      return;
    }
    const ke = re & 1 && ie, Te = !gr(S);
    let Me;
    if (Te && (Me = ee && ee.onVnodeBeforeUnmount) && mn(Me, M, S), re & 6) me(S.component, I, te);
    else {
      if (re & 128) {
        S.suspense.unmount(I, te);
        return;
      }
      ke && Ml(S, null, M, "beforeUnmount"), re & 64 ? S.type.remove(S, M, I, ne, te) : ce && !ce.hasOnce && (E !== nn || Q > 0 && Q & 64) ? $(ce, M, I, false, true) : (E === nn && Q & 384 || !le && re & 16) && $(ve, M, I), te && D(S);
    }
    (Te && (Me = ee && ee.onVnodeUnmounted) || ke) && Ft(() => {
      Me && mn(Me, M, S), ke && Ml(S, null, M, "unmounted");
    }, I);
  }, D = (S) => {
    const { type: M, el: I, anchor: te, transition: le } = S;
    if (M === nn) {
      F(I, te);
      return;
    }
    if (M === Li) {
      b(S);
      return;
    }
    const E = () => {
      l(I), le && !le.persisted && le.afterLeave && le.afterLeave();
    };
    if (S.shapeFlag & 1 && le && !le.persisted) {
      const { leave: ee, delayLeave: se } = le, ve = () => ee(I, E);
      se ? se(S.el, E, ve) : ve();
    } else E();
  }, F = (S, M) => {
    let I;
    for (; S !== M; ) I = h(S), l(S), S = I;
    l(M);
  }, me = (S, M, I) => {
    const { bum: te, scope: le, job: E, subTree: ee, um: se, m: ve, a: ce } = S;
    Co(ve), Co(ce), te && ea(te), le.stop(), E && (E.flags |= 8, _(ee, S, M, I)), se && Ft(se, M), Ft(() => {
      S.isUnmounted = true;
    }, M), M && M.pendingBranch && !M.isUnmounted && S.asyncDep && !S.asyncResolved && S.suspenseId === M.pendingId && (M.deps--, M.deps === 0 && M.resolve());
  }, $ = (S, M, I, te = false, le = false, E = 0) => {
    for (let ee = E; ee < S.length; ee++) _(S[ee], M, I, te, le);
  }, A = (S) => {
    if (S.shapeFlag & 6) return A(S.component.subTree);
    if (S.shapeFlag & 128) return S.suspense.next();
    const M = h(S.anchor || S.el), I = M && M[fv];
    return I ? h(I) : M;
  };
  let Y = false;
  const V = (S, M, I) => {
    S == null ? M._vnode && _(M._vnode, null, null, true) : w(M._vnode || null, S, M, null, null, null, I), M._vnode = S, Y || (Y = true, dc(), sv(), Y = false);
  }, ne = { p: w, um: _, m: X, r: D, mt: T, mc: H, pc: Z, pbc: L, n: A, o: e };
  return { render: V, hydrate: void 0, createApp: Y0(V) };
}
function Pi({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function El({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ab(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ws(e, t, n = false) {
  const r = e.children, l = t.children;
  if (Ne(r) && Ne(l)) for (let a = 0; a < r.length; a++) {
    const o = r[a];
    let i = l[a];
    i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = l[a] = fl(l[a]), i.el = o.el), !n && i.patchFlag !== -2 && ws(o, i)), i.type === ai && (i.el = o.el);
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
  if (wa) {
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
  i.call = (m, g, w) => An(m, s, g, w);
  let f = false;
  a === "post" ? i.scheduler = (m) => {
    Ft(m, s && s.suspense);
  } : a !== "sync" && (f = true, i.scheduler = (m, g) => {
    g ? m() : bs(m);
  }), i.augmentJob = (m) => {
    t && (m.flags |= 4), f && (m.flags |= 2, s && (m.id = s.uid, m.i = s));
  };
  const h = k0(e, t, i);
  return wa && (c ? c.push(h) : u && h()), h;
}
function sb(e, t, n) {
  const r = this.proxy, l = $t(e) ? e.includes(".") ? Iv(r, e) : () => r[e] : e.bind(r, r);
  let a;
  Ke(t) ? a = t : (a = t.handler, n = t);
  const o = $a(this), i = Dv(l, a.bind(r), n);
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
  o && (o.trim && (l = n.map((s) => $t(s) ? s.trim() : s)), o.number && (l = n.map(Ug)));
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
  return !a && !i ? (Ct(e) && r.set(e, null), null) : (Ne(a) ? a.forEach((u) => o[u] = null) : It(o, a), Ct(e) && r.set(e, o), o);
}
function ri(e, t) {
  return !e || !Ko(t) ? false : (t = t.slice(2).replace(/Once$/, ""), st(e, t[0].toLowerCase() + t.slice(1)) || st(e, Gl(t)) || st(e, t));
}
function xc(e) {
  const { type: t, vnode: n, proxy: r, withProxy: l, propsOptions: [a], slots: o, attrs: i, emit: u, render: c, renderCache: s, props: f, data: h, setupState: m, ctx: g, inheritAttrs: w } = e, x = wo(e);
  let k, y;
  try {
    if (n.shapeFlag & 4) {
      const b = l || r, C = b;
      k = Fn(c.call(C, b, s, f, m, h, g)), y = i;
    } else {
      const b = t;
      k = Fn(b.length > 1 ? b(f, { attrs: i, slots: o, emit: u }) : b(f, null)), y = t.props ? i : vb(i);
    }
  } catch (b) {
    ia.length = 0, Zo(b, e, 1), k = Ye(Jt);
  }
  let p = k;
  if (y && w !== false) {
    const b = Object.keys(y), { shapeFlag: C } = p;
    b.length && C & 7 && (a && b.some(rs) && (y = mb(y, a)), p = Gn(p, y, false, true));
  }
  return n.dirs && (p = Gn(p, null, false, true), p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs), n.transition && _l(p, n.transition), k = p, wo(x), k;
}
const vb = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || Ko(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, mb = (e, t) => {
  const n = {};
  for (const r in e) (!rs(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function hb(e, t, n) {
  const { props: r, children: l, component: a } = e, { props: o, children: i, patchFlag: u } = t, c = a.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && u >= 0) {
    if (u & 1024) return true;
    if (u & 16) return r ? Sc(r, o, c) : !!o;
    if (u & 8) {
      const s = t.dynamicProps;
      for (let f = 0; f < s.length; f++) {
        const h = s[f];
        if (o[h] !== r[h] && !ri(c, h)) return true;
      }
    }
  } else return (l || i) && (!i || !i.$stable) ? true : r === o ? false : r ? o ? Sc(r, o, c) : true : !!o;
  return false;
}
function Sc(e, t, n) {
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
const nn = Symbol.for("v-fgt"), ai = Symbol.for("v-txt"), Jt = Symbol.for("v-cmt"), Li = Symbol.for("v-stc"), ia = [];
let sn = null;
function Tn(e = false) {
  ia.push(sn = e ? null : []);
}
function pb() {
  ia.pop(), sn = ia[ia.length - 1] || null;
}
let ya = 1;
function Cc(e, t = false) {
  ya += e, e < 0 && sn && t && (sn.hasOnce = true);
}
function Nv(e) {
  return e.dynamicChildren = ya > 0 ? sn || vr : null, pb(), ya > 0 && sn && sn.push(e), e;
}
function oi(e, t, n, r, l, a) {
  return Nv(wt(e, t, n, r, l, a, true));
}
function Ol(e, t, n, r, l) {
  return Nv(Ye(e, t, n, r, l, true));
}
function _a(e) {
  return e ? e.__v_isVNode === true : false;
}
function hl(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Hv = ({ key: e }) => e ?? null, io = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? $t(e) || yt(e) || Ke(e) ? { i: ln, r: e, k: t, f: !!n } : e : null);
function wt(e, t = null, n = null, r = 0, l = null, a = e === nn ? 0 : 1, o = false, i = false) {
  const u = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && Hv(t), ref: t && io(t), scopeId: dv, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: a, patchFlag: r, dynamicProps: l, dynamicChildren: null, appContext: null, ctx: ln };
  return i ? (xs(u, n), a & 128 && e.normalize(u)) : n && (u.shapeFlag |= $t(n) ? 8 : 16), ya > 0 && !o && sn && (u.patchFlag > 0 || a & 6) && u.patchFlag !== 32 && sn.push(u), u;
}
const Ye = yb;
function yb(e, t = null, n = null, r = 0, l = null, a = false) {
  if ((!e || e === I0) && (e = Jt), _a(e)) {
    const i = Gn(e, t, true);
    return n && xs(i, n), ya > 0 && !a && sn && (i.shapeFlag & 6 ? sn[sn.indexOf(e)] = i : sn.push(i)), i.patchFlag = -2, i;
  }
  if (Eb(e) && (e = e.__vccOpts), t) {
    t = _b(t);
    let { class: i, style: u } = t;
    i && !$t(i) && (t.class = is(i)), Ct(u) && (gs(u) && !Ne(u) && (u = It({}, u)), t.style = Xo(u));
  }
  const o = $t(e) ? 1 : ko(e) ? 128 : vv(e) ? 64 : Ct(e) ? 4 : Ke(e) ? 2 : 0;
  return wt(e, t, n, r, l, o, a, true);
}
function _b(e) {
  return e ? gs(e) || Av(e) ? It({}, e) : e : null;
}
function Gn(e, t, n = false, r = false) {
  const { props: l, ref: a, patchFlag: o, children: i, transition: u } = e, c = t ? wb(l || {}, t) : l, s = { __v_isVNode: true, __v_skip: true, type: e.type, props: c, key: c && Hv(c), ref: t && t.ref ? n && a ? Ne(a) ? a.concat(io(t)) : [a, io(t)] : io(t) : a, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: i, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== nn ? o === -1 ? 16 : o | 16 : o, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: u, component: e.component, suspense: e.suspense, ssContent: e.ssContent && Gn(e.ssContent), ssFallback: e.ssFallback && Gn(e.ssFallback), el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return u && r && _l(s, u.clone(s)), s;
}
function Vl(e = " ", t = 0) {
  return Ye(ai, null, e, t);
}
function kc(e = "", t = false) {
  return t ? (Tn(), Ol(Jt, null, e)) : Ye(Jt, null, e);
}
function Fn(e) {
  return e == null || typeof e == "boolean" ? Ye(Jt) : Ne(e) ? Ye(nn, null, e.slice()) : _a(e) ? fl(e) : Ye(ai, null, String(e));
}
function fl(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Gn(e);
}
function xs(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (Ne(t)) n = 16;
  else if (typeof t == "object") if (r & 65) {
    const l = t.default;
    l && (l._c && (l._d = false), xs(e, l()), l._c && (l._d = true));
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
    for (const l in r) if (l === "class") t.class !== r.class && (t.class = is([t.class, r.class]));
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
  const r = e.type, l = (t ? t.appContext : e.appContext) || xb, a = { uid: Sb++, vnode: e, type: r, parent: t, appContext: l, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new Jg(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(l.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: Pv(r, l), emitsOptions: zv(r, l), emit: null, emitted: null, propsDefaults: mt, inheritAttrs: r.inheritAttrs, ctx: mt, data: mt, props: mt, attrs: mt, slots: mt, refs: mt, setupState: mt, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = fb.bind(null, a), e.ce && e.ce(a), a;
}
let jt = null;
const xe = () => jt || ln;
let To, Eu;
{
  const e = Ra(), t = (n, r) => {
    let l;
    return (l = e[n]) || (l = e[n] = []), l.push(r), (a) => {
      l.length > 1 ? l.forEach((o) => o(a)) : l[0](a);
    };
  };
  To = t("__VUE_INSTANCE_SETTERS__", (n) => jt = n), Eu = t("__VUE_SSR_SETTERS__", (n) => wa = n);
}
const $a = (e) => {
  const t = jt;
  return To(e), e.scope.on(), () => {
    e.scope.off(), To(t);
  };
}, Tc = () => {
  jt && jt.scope.off(), To(null);
};
function jv(e) {
  return e.vnode.shapeFlag & 4;
}
let wa = false;
function kb(e, t = false, n = false) {
  t && Eu(t);
  const { props: r, children: l } = e.vnode, a = jv(e);
  X0(e, r, a, t), eb(e, l, n);
  const o = a ? Tb(e, t) : void 0;
  return t && Eu(false), o;
}
function Tb(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, N0);
  const { setup: r } = n;
  if (r) {
    xl();
    const l = e.setupContext = r.length > 1 ? Mb(e) : null, a = $a(e), o = Aa(r, e, 0, [e.props, l]), i = Of(o);
    if (Sl(), a(), (i || e.sp) && !gr(e) && wv(e), i) {
      if (o.then(Tc, Tc), t) return o.then((u) => {
        qc(e, u);
      }).catch((u) => {
        Zo(u, e, 0);
      });
      e.asyncDep = o;
    } else qc(e, o);
  } else Uv(e);
}
function qc(e, t, n) {
  Ke(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ct(t) && (e.setupState = ov(t)), Uv(e);
}
function Uv(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Vn);
  {
    const l = $a(e);
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
    if (n in oa) return oa[n](e);
  }, has(t, n) {
    return n in t || n in oa;
  } })) : e.proxy;
}
function Ru(e, t = true) {
  return Ke(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Eb(e) {
  return Ke(e) && "__vccOpts" in e;
}
const v = (e, t) => S0(e, t, wa);
function d(e, t, n) {
  const r = arguments.length;
  return r === 2 ? Ct(t) && !Ne(t) ? _a(t) ? Ye(e, null, [t]) : Ye(e, t) : Ye(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && _a(n) && (n = [n]), Ye(e, t, n));
}
const Rb = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Au;
const Mc = typeof window < "u" && window.trustedTypes;
if (Mc) try {
  Au = Mc.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const Qv = Au ? (e) => Au.createHTML(e) : (e) => e, Ab = "http://www.w3.org/2000/svg", $b = "http://www.w3.org/1998/Math/MathML", Wn = typeof document < "u" ? document : null, Ec = Wn && Wn.createElement("template"), Pb = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, r) => {
  const l = t === "svg" ? Wn.createElementNS(Ab, e) : t === "mathml" ? Wn.createElementNS($b, e) : n ? Wn.createElement(e, { is: n }) : Wn.createElement(e);
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
    Ec.innerHTML = Qv(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
    const i = Ec.content;
    if (r === "svg" || r === "mathml") {
      const u = i.firstChild;
      for (; u.firstChild; ) i.appendChild(u.firstChild);
      i.removeChild(u);
    }
    t.insertBefore(i, n);
  }
  return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, ll = "transition", Or = "animation", Cr = Symbol("_vtc"), Kv = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, Wv = It({}, bv, Kv), Lb = (e) => (e.displayName = "Transition", e.props = Wv, e), Ot = Lb((e, { slots: t }) => d($0, Yv(e), t)), Rl = (e, t = []) => {
  Ne(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Rc = (e) => e ? Ne(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function Yv(e) {
  const t = {};
  for (const q in e) q in Kv || (t[q] = e[q]);
  if (e.css === false) return t;
  const { name: n = "v", type: r, duration: l, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: i = `${n}-enter-to`, appearFromClass: u = a, appearActiveClass: c = o, appearToClass: s = i, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: h = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, g = Bb(l), w = g && g[0], x = g && g[1], { onBeforeEnter: k, onEnter: y, onEnterCancelled: p, onLeave: b, onLeaveCancelled: C, onBeforeAppear: P = k, onAppear: O = y, onAppearCancelled: H = p } = t, B = (q, R, T, j) => {
    q._enterCancelled = j, ul(q, R ? s : i), ul(q, R ? c : o), T && T();
  }, L = (q, R) => {
    q._isLeaving = false, ul(q, f), ul(q, m), ul(q, h), R && R();
  }, N = (q) => (R, T) => {
    const j = q ? O : y, W = () => B(R, q, T);
    Rl(j, [R, W]), Ac(() => {
      ul(R, q ? u : a), Ln(R, q ? s : i), Rc(j) || $c(R, r, w, W);
    });
  };
  return It(t, { onBeforeEnter(q) {
    Rl(k, [q]), Ln(q, a), Ln(q, o);
  }, onBeforeAppear(q) {
    Rl(P, [q]), Ln(q, u), Ln(q, c);
  }, onEnter: N(false), onAppear: N(true), onLeave(q, R) {
    q._isLeaving = true;
    const T = () => L(q, R);
    Ln(q, f), q._enterCancelled ? (Ln(q, h), $u()) : ($u(), Ln(q, h)), Ac(() => {
      q._isLeaving && (ul(q, f), Ln(q, m), Rc(b) || $c(q, r, x, T));
    }), Rl(b, [q, T]);
  }, onEnterCancelled(q) {
    B(q, false, void 0, true), Rl(p, [q]);
  }, onAppearCancelled(q) {
    B(q, true, void 0, true), Rl(H, [q]);
  }, onLeaveCancelled(q) {
    L(q), Rl(C, [q]);
  } });
}
function Bb(e) {
  if (e == null) return null;
  if (Ct(e)) return [Bi(e.enter), Bi(e.leave)];
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
function Ac(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Fb = 0;
function $c(e, t, n, r) {
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
  return Math.max(...t.map((n, r) => Lc(n) + Lc(e[r])));
}
function Lc(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function $u() {
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
  const r = e.style, l = $t(n);
  let a = false;
  if (n && !l) {
    if (t) if ($t(t)) for (const o of t.split(";")) {
      const i = o.slice(0, o.indexOf(":")).trim();
      n[i] == null && uo(r, i, "");
    }
    else for (const o in t) n[o] == null && uo(r, o, "");
    for (const o in n) o === "display" && (a = true), uo(r, o, n[o]);
  } else if (l) {
    if (t !== n) {
      const o = r[Vb];
      o && (n += ";" + o), r.cssText = n, a = Db.test(n);
    }
  } else t && e.removeAttribute("style");
  qo in e && (e[qo] = a ? r.display : "", e[Gv] && (r.display = "none"));
}
const Bc = /\s*!important$/;
function uo(e, t, n) {
  if (Ne(n)) n.forEach((r) => uo(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const r = zb(e, t);
    Bc.test(n) ? e.setProperty(Gl(r), n.replace(Bc, ""), "important") : e[r] = n;
  }
}
const Fc = ["Webkit", "Moz", "ms"], Fi = {};
function zb(e, t) {
  const n = Fi[t];
  if (n) return n;
  let r = pn(t);
  if (r !== "filter" && r in e) return Fi[t] = r;
  r = Yo(r);
  for (let l = 0; l < Fc.length; l++) {
    const a = Fc[l] + r;
    if (a in e) return Fi[t] = a;
  }
  return t;
}
const Oc = "http://www.w3.org/1999/xlink";
function Vc(e, t, n, r, l, a = Zg(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Oc, t.slice(6, t.length)) : e.setAttributeNS(Oc, t, n) : n == null || a && !zf(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : wl(n) ? String(n) : n);
}
function Dc(e, t, n, r, l) {
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
const Ic = Symbol("_vei");
function jb(e, t, n, r, l = null) {
  const a = e[Ic] || (e[Ic] = {}), o = a[t];
  if (r && o) o.value = r;
  else {
    const [i, u] = Ub(t);
    if (r) {
      const c = a[t] = Wb(r, l);
      Nb(e, i, c, u);
    } else o && (Hb(e, i, o, u), a[t] = void 0);
  }
}
const zc = /(?:Once|Passive|Capture)$/;
function Ub(e) {
  let t;
  if (zc.test(e)) {
    t = {};
    let r;
    for (; r = e.match(zc); ) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = true;
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
const Nc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Xb = (e, t, n, r, l, a) => {
  const o = l === "svg";
  t === "class" ? Ob(e, r, o) : t === "style" ? Ib(e, n, r) : Ko(t) ? rs(t) || jb(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Gb(e, t, r, o)) ? (Dc(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Vc(e, t, r, o, a, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !$t(r)) ? Dc(e, pn(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Vc(e, t, r, o));
};
function Gb(e, t, n, r) {
  if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Nc(t) && Ke(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE") return false;
  }
  return Nc(t) && $t(n) ? false : t in e;
}
const Jv = /* @__PURE__ */ new WeakMap(), em = /* @__PURE__ */ new WeakMap(), Mo = Symbol("_moveCb"), Hc = Symbol("_enterCb"), Zb = (e) => (delete e.props.mode, e), Jb = Zb({ name: "TransitionGroup", props: It({}, Wv, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = xe(), r = gv();
  let l, a;
  return ni(() => {
    if (!l.length) return;
    const o = e.moveClass || `${e.name || "v"}-move`;
    if (!rp(l[0].el, n.vnode.el, o)) return;
    l.forEach(tp), l.forEach(np);
    const i = l.filter(lp);
    $u(), i.forEach((u) => {
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
      s.el && s.el instanceof Element && (l.push(s), _l(s, pa(s, i, r, n)), Jv.set(s, s.el.getBoundingClientRect()));
    }
    a = t.default ? ps(t.default()) : [];
    for (let c = 0; c < a.length; c++) {
      const s = a[c];
      s.key != null && _l(s, pa(s, i, r, n));
    }
    return Ye(u, null, a);
  };
} }), ep = Jb;
function tp(e) {
  const t = e.el;
  t[Mo] && t[Mo](), t[Hc] && t[Hc]();
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
const ap = It({ patchProp: Xb }, Pb);
let jc;
function op() {
  return jc || (jc = lb(ap));
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
  return $t(e) ? document.querySelector(e) : e;
}
/*!
* Quasar Framework v2.18.1
* (c) 2015-present Razvan Stoenescu
* Released under the MIT License.
*/
var Vi = null;
function Ss() {
  return Vi !== null ? Vi : Vi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
typeof __QUASAR_SSR__ != "boolean" && (Ss().__QUASAR_SSR__ = false);
typeof __QUASAR_SSR_CLIENT__ != "boolean" && (Ss().__QUASAR_SSR_CLIENT__ = false);
typeof __QUASAR_SSR_PWA__ != "boolean" && (Ss().__QUASAR_SSR_PWA__ = false);
function Vt(e, t, n, r) {
  return Object.defineProperty(e, t, { get: n, set: r, enumerable: true }), e;
}
function nm(e, t) {
  for (const n in t) Vt(e, n, t[n]);
  return e;
}
var rn = K(__QUASAR_SSR_CLIENT__ && (__QUASAR_SSR_PWA__ ? document.body.getAttribute("data-server-rendered") !== null : true)), Pu;
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
var Uc = navigator.userAgent || navigator.vendor || window.opera, fp = { has: { touch: false, webStorage: false }, within: { iframe: false } }, Ie = { userAgent: Uc, is: dp(Uc), has: { touch: lm }, within: { iframe: window.self !== window.top } }, Lu = { install(e) {
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
  }), Object.assign(Lu, Ie), rn.value === true && (Object.assign(Lu, Pu, fp), Pu = null);
}
var rm = Lu;
function he(e) {
  return Go(/* @__PURE__ */ Cl(e));
}
function Pn(e) {
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
function St() {
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
function xt(e) {
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
var Di = ["sm", "md", "lg", "xl"], { passive: Qc } = ft, mp = Tl({ width: 0, height: 0, name: "xs", sizes: { sm: 600, md: 1024, lg: 1440, xl: 1920 }, lt: { sm: true, md: true, lg: true, xl: true }, gt: { xs: false, sm: false, md: false, lg: false }, xs: true, sm: false, md: false, lg: false, xl: false }, { setSizes: St, setDebounce: St, install({ $q: e, onSSRHydrated: t }) {
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
      i !== void 0 && r.removeEventListener("resize", i, Qc), i = h > 0 ? Ar(this.__update, h) : this.__update, r.addEventListener("resize", i, Qc);
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
    Ie.is.ios === true && document.body.addEventListener("touchstart", St), window.addEventListener("keydown", gp, true);
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
var xa = { __history: [], add: St, remove: St, install({ $q: e }) {
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
} }, Bu = { isoName: "en-US", nativeName: "English (US)", label: { clear: "Clear", ok: "OK", cancel: "Cancel", close: "Close", set: "Set", select: "Select", reset: "Reset", remove: "Remove", update: "Update", create: "Create", search: "Search", filter: "Filter", refresh: "Refresh", expand: (e) => e ? `Expand "${e}"` : "Expand", collapse: (e) => e ? `Collapse "${e}"` : "Collapse" }, date: { days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), firstDayOfWeek: 0, format24h: false, pluralDay: "days", prevMonth: "Previous month", nextMonth: "Next month", prevYear: "Previous year", nextYear: "Next year", today: "Today", prevRangeYears: (e) => `Previous ${e} years`, nextRangeYears: (e) => `Next ${e} years` }, table: { noData: "No data available", noResults: "No matching records found", loading: "Loading...", selectedRecords: (e) => e === 1 ? "1 record selected." : (e === 0 ? "No" : e) + " records selected.", recordsPerPage: "Records per page:", allRows: "All", pagination: (e, t, n) => e + "-" + t + " of " + n, columns: "Columns" }, pagination: { first: "First page", prev: "Previous page", next: "Next page", last: "Last page" }, editor: { url: "URL", bold: "Bold", italic: "Italic", strikethrough: "Strikethrough", underline: "Underline", unorderedList: "Unordered List", orderedList: "Ordered List", subscript: "Subscript", superscript: "Superscript", hyperlink: "Hyperlink", toggleFullscreen: "Toggle Fullscreen", quote: "Quote", left: "Left align", center: "Center align", right: "Right align", justify: "Justify align", print: "Print", outdent: "Decrease indentation", indent: "Increase indentation", removeFormat: "Remove formatting", formatting: "Formatting", fontSize: "Font Size", align: "Align", hr: "Insert Horizontal Rule", undo: "Undo", redo: "Redo", heading1: "Heading 1", heading2: "Heading 2", heading3: "Heading 3", heading4: "Heading 4", heading5: "Heading 5", heading6: "Heading 6", paragraph: "Paragraph", code: "Code", size1: "Very small", size2: "A bit small", size3: "Normal", size4: "Medium-large", size5: "Big", size6: "Very big", size7: "Maximum", defaultFont: "Default Font", viewSource: "View Source" }, tree: { noNodes: "No nodes available", noResults: "No matching nodes found" } };
function Kc() {
  const e = Array.isArray(navigator.languages) === true && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
  if (typeof e == "string") return e.split(/[-_]/).map((t, n) => n === 0 ? t.toLowerCase() : n > 1 || t.length < 4 ? t.toUpperCase() : t[0].toUpperCase() + t.slice(1).toLowerCase()).join("-");
}
var Fl = Tl({ __qLang: {} }, { getLocale: Kc, set(e = Bu, t) {
  const n = { ...e, rtl: e.rtl === true, getLocale: Kc };
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
  } }), this.set(t || Bu));
} }), si = Fl, Cp = { name: "material-icons", type: { positive: "check_circle", negative: "warning", info: "info", warning: "priority_high" }, arrow: { up: "arrow_upward", right: "arrow_forward", down: "arrow_downward", left: "arrow_back", dropdown: "arrow_drop_down" }, chevron: { left: "chevron_left", right: "chevron_right" }, colorPicker: { spectrum: "gradient", tune: "tune", palette: "style" }, pullToRefresh: { icon: "refresh" }, carousel: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down", navigationIcon: "lens" }, chip: { remove: "cancel", selected: "check" }, datetime: { arrowLeft: "chevron_left", arrowRight: "chevron_right", now: "access_time", today: "today" }, editor: { bold: "format_bold", italic: "format_italic", strikethrough: "strikethrough_s", underline: "format_underlined", unorderedList: "format_list_bulleted", orderedList: "format_list_numbered", subscript: "vertical_align_bottom", superscript: "vertical_align_top", hyperlink: "link", toggleFullscreen: "fullscreen", quote: "format_quote", left: "format_align_left", center: "format_align_center", right: "format_align_right", justify: "format_align_justify", print: "print", outdent: "format_indent_decrease", indent: "format_indent_increase", removeFormat: "format_clear", formatting: "text_format", fontSize: "format_size", align: "format_align_left", hr: "remove", undo: "undo", redo: "redo", heading: "format_size", code: "code", size: "format_size", font: "font_download", viewSource: "code" }, expansionItem: { icon: "keyboard_arrow_down", denseIcon: "arrow_drop_down" }, fab: { icon: "add", activeIcon: "close" }, field: { clear: "cancel", error: "error" }, pagination: { first: "first_page", prev: "keyboard_arrow_left", next: "keyboard_arrow_right", last: "last_page" }, rating: { icon: "grade" }, stepper: { done: "check", active: "edit", error: "warning" }, tabs: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down" }, table: { arrowUp: "arrow_upward", warning: "warning", firstPage: "first_page", prevPage: "chevron_left", nextPage: "chevron_right", lastPage: "last_page" }, tree: { icon: "play_arrow" }, uploader: { done: "done", clear: "clear", add: "add_box", upload: "cloud_upload", removeQueue: "clear_all", removeUploaded: "done_all" } }, Fu = Tl({ iconMapFn: null, __qIconSet: {} }, { set(e, t) {
  const n = { ...e };
  n.set = Fu.set, Object.assign(Fu.__qIconSet, n);
}, install({ $q: e, iconSet: t, ssrContext: n }) {
  e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn), e.iconSet = this.__qIconSet, Vt(e, "iconMapFn", () => this.iconMapFn, (r) => {
    this.iconMapFn = r;
  }), this.__installed === true ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qIconSet, { get() {
    return Reflect.get(...arguments);
  }, ownKeys(r) {
    return Reflect.ownKeys(r).filter((l) => l !== "set");
  } }), this.set(t || Cp));
} }), sm = Fu, cm = "_q_", dm = "_q_t_", fm = "_q_s_", Jl = "_q_l_", vm = "_q_pc_", mm = "_q_f_", hm = "_q_fo_", gm = "_q_tabs_", bm = "_q_u_";
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
function Ou(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Tp(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function Sa(e) {
  return typeof e == "number" && isFinite(e);
}
var Wc = [rm, _p, am, mp, xa, si, sm];
function ci(e, t) {
  const n = tm(e);
  n.config.globalProperties = t.config.globalProperties;
  const { reload: r, ...l } = t._context;
  return Object.assign(n._context, l), n;
}
function Yc(e, t) {
  t.forEach((n) => {
    n.install(e), n.__installed = true;
  });
}
function qp(e, t, n) {
  e.config.globalProperties.$q = n.$q, e.provide(cm, n.$q), Yc(n, Wc), t.components !== void 0 && Object.values(t.components).forEach((r) => {
    Lt(r) === true && r.name !== void 0 && e.component(r.name, r);
  }), t.directives !== void 0 && Object.values(t.directives).forEach((r) => {
    Lt(r) === true && r.name !== void 0 && e.directive(r.name, r);
  }), t.plugins !== void 0 && Yc(n, Object.values(t.plugins).filter((r) => typeof r.install == "function" && Wc.includes(r) === false)), rn.value === true && (n.$q.onSSRHydrated = () => {
    n.onSSRHydrated.forEach((r) => {
      r();
    }), n.$q.onSSRHydrated = () => {
    };
  });
}
var Mp = function(e, t = {}) {
  const n = { version: "2.18.1" };
  pm === false ? (t.config !== void 0 && Object.assign(Eo, t.config), n.config = { ...Eo }, kp()) : n.config = t.config || {}, qp(e, t, { parentApp: e, $q: n, lang: t.lang, iconSet: t.iconSet, onSSRHydrated: [] });
}, Xc = ["B", "KB", "MB", "GB", "TB", "PB"];
function Vu(e, t = 1) {
  let n = 0;
  for (; parseInt(e, 10) >= 1024 && n < Xc.length - 1; ) e /= 1024, ++n;
  return `${e.toFixed(t)}${Xc[n]}`;
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
var Cs = XMLHttpRequest, ym = Cs.prototype.open, Ep = ["top", "right", "bottom", "left"], Ao = [], ua = 0;
function Rp({ p: e, pos: t, active: n, horiz: r, reverse: l, dir: a }) {
  let o = 1, i = 1;
  return r === true ? (l === true && (o = -1), t === "bottom" && (i = -1), { transform: `translate3d(${o * (e - 100)}%,${n ? 0 : i * -200}%,0)` }) : (l === true && (i = -1), t === "right" && (o = -1), { transform: `translate3d(${n ? 0 : a * o * -200}%,${i * (e - 100)}%,0)` });
}
function Ap(e, t) {
  return typeof t != "number" && (e < 25 ? t = Math.random() * 3 + 3 : e < 65 ? t = Math.random() * 3 : e < 85 ? t = Math.random() * 2 : e < 99 ? t = 0.6 : t = 0), dt(e + t, 0, 100);
}
function $p(e) {
  ua++, Ao.push(e), !(ua > 1) && (Cs.prototype.open = function(t, n) {
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
function Pp(e) {
  Ao = Ao.filter((t) => t.start !== e), ua = Math.max(0, ua - 1), ua === 0 && (Cs.prototype.open = ym);
}
var Lp = he({ name: "QAjaxBar", props: { position: { type: String, default: "top", validator: (e) => Ep.includes(e) }, size: { type: String, default: "2px" }, color: String, skipHijack: Boolean, reverse: Boolean, hijackFilter: Function }, emits: ["start", "stop"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), r = K(0), l = K(false), a = K(true);
  let o = 0, i = null, u;
  const c = v(() => `q-loading-bar q-loading-bar--${e.position}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (a.value === true ? "" : " no-transition")), s = v(() => e.position === "top" || e.position === "bottom"), f = v(() => s.value === true ? "height" : "width"), h = v(() => {
    const p = l.value, b = Rp({ p: r.value, pos: e.position, active: p, horiz: s.value, reverse: n.$q.lang.rtl === true && ["top", "bottom"].includes(e.position) ? e.reverse === false : e.reverse, dir: n.$q.lang.rtl === true ? -1 : 1 });
    return b[f.value] = e.size, b.opacity = p ? 1 : 0, b;
  }), m = v(() => l.value === true ? { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": r.value } : { "aria-hidden": "true" });
  function g(p = 300) {
    const b = u;
    return u = Math.max(0, p) || 0, o++, o > 1 ? (b === 0 && p > 0 ? k() : i !== null && b > 0 && p <= 0 && (clearTimeout(i), i = null), o) : (i !== null && clearTimeout(i), t("start"), r.value = 0, i = setTimeout(() => {
      i = null, a.value = true, p > 0 && k();
    }, l._value === true ? 500 : 1), l._value !== true && (l.value = true, a.value = false), o);
  }
  function w(p) {
    return o > 0 && (r.value = Ap(r.value, p)), o;
  }
  function x() {
    if (o = Math.max(0, o - 1), o > 0) return o;
    i !== null && (clearTimeout(i), i = null), t("stop");
    const p = () => {
      a.value = true, r.value = 100, i = setTimeout(() => {
        i = null, l.value = false;
      }, 1e3);
    };
    return r.value === 0 ? i = setTimeout(p, 1) : p(), o;
  }
  function k() {
    r.value < 100 && (i = setTimeout(() => {
      i = null, w(), k();
    }, u));
  }
  let y;
  return ct(() => {
    e.skipHijack !== true && (y = true, $p({ start: g, stop: x, hijackFilter: v(() => e.hijackFilter || null) }));
  }), We(() => {
    i !== null && clearTimeout(i), y === true && Pp(g);
  }), Object.assign(n, { start: g, stop: x, increment: w }), () => d("div", { class: c.value, style: h.value, ...m.value });
} }), Du = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 }, el = { size: String };
function tl(e, t = Du) {
  return v(() => e.size !== void 0 ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size } : null);
}
function Pe(e, t) {
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
function ks(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function _n(e, t, n, r, l, a) {
  t.key = r + l;
  const o = d(e, t, n);
  return l === true ? cn(o, a()) : o;
}
var Gc = "0 0 24 24", Ii = (e) => e, zi = (e) => `ionicons ${e}`, _m = { "mdi-": (e) => `mdi ${e}`, "icon-": Ii, "bt-": (e) => `bt ${e}`, "eva-": (e) => `eva ${e}`, "ion-md": zi, "ion-ios": zi, "ion-logo": zi, "iconfont ": Ii, "ti-": (e) => `themify-icon ${e}`, "bi-": (e) => `bootstrap-icons ${e}`, "i-": Ii }, wm = { o_: "-outlined", r_: "-round", s_: "-sharp" }, xm = { sym_o_: "-outlined", sym_r_: "-rounded", sym_s_: "-sharp" }, Bp = new RegExp("^(" + Object.keys(_m).join("|") + ")"), Fp = new RegExp("^(" + Object.keys(wm).join("|") + ")"), Zc = new RegExp("^(" + Object.keys(xm).join("|") + ")"), Op = /^[Mm]\s?[-+]?\.?\d/, Vp = /^img:/, Dp = /^svguse:/, Ip = /^ion-/, zp = /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, et = he({ name: "QIcon", props: { ...el, tag: { type: String, default: "i" }, name: String, color: String, left: Boolean, right: Boolean }, setup(e, { slots: t }) {
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
      const [s, f = Gc] = i.split("|");
      return { svg: true, viewBox: f, nodes: s.split("&&").map((h) => {
        const [m, g, w] = h.split("@@");
        return d("path", { style: g, d: m, transform: w });
      }) };
    }
    if (Vp.test(i) === true) return { img: true, src: i.substring(4) };
    if (Dp.test(i) === true) {
      const [s, f = Gc] = i.split("|");
      return { svguse: true, src: s.substring(7), viewBox: f };
    }
    let u = " ";
    const c = i.match(Bp);
    if (c !== null) o = _m[c[1]](i);
    else if (zp.test(i) === true) o = i;
    else if (Ip.test(i) === true) o = `ionicons ion-${n.platform.is.ios === true ? "ios" : "md"}${i.substring(3)}`;
    else if (Zc.test(i) === true) {
      o = "notranslate material-symbols";
      const s = i.match(Zc);
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
    return a.value.none === true ? d(e.tag, o, Pe(t.default)) : a.value.img === true ? d(e.tag, o, qt(t.default, [d("img", { src: a.value.src })])) : a.value.svg === true ? d(e.tag, o, qt(t.default, [d("svg", { viewBox: a.value.viewBox || "0 0 24 24" }, a.value.nodes)])) : a.value.svguse === true ? d(e.tag, o, qt(t.default, [d("svg", { viewBox: a.value.viewBox }, [d("use", { "xlink:href": a.value.src })])])) : (a.value.cls !== void 0 && (o.class += " " + a.value.cls), d(e.tag, o, qt(t.default, [a.value.content])));
  };
} }), Iu = he({ name: "QAvatar", props: { ...el, fontSize: String, color: String, textColor: String, icon: String, square: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  const n = tl(e), r = v(() => "q-avatar" + (e.color ? ` bg-${e.color}` : "") + (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") + (e.square === true ? " q-avatar--square" : e.rounded === true ? " rounded-borders" : "")), l = v(() => e.fontSize ? { fontSize: e.fontSize } : null);
  return () => {
    const a = e.icon !== void 0 ? [d(et, { name: e.icon })] : void 0;
    return d("div", { class: r.value, style: n.value }, [d("div", { class: "q-avatar__content row flex-center overflow-hidden", style: l.value }, ks(t.default, a))]);
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
    const o = [d("div", { class: "q-banner__avatar col-auto row items-center self-start" }, Pe(t.avatar)), d("div", { class: "q-banner__content col text-body2" }, Pe(t.default))], i = Pe(t.action);
    return i !== void 0 && o.push(d("div", { class: a.value }, i)), d("div", { class: l.value + (e.inlineActions === false && i !== void 0 ? " q-banner--top-padding" : ""), role: "alert" }, o);
  };
} });
he({ name: "QBar", props: { ...nt, dense: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = lt(e, n), l = v(() => `q-bar row no-wrap items-center q-bar--${e.dense === true ? "dense" : "standard"}  q-bar--${r.value === true ? "dark" : "light"}`);
  return () => d("div", { class: l.value, role: "toolbar" }, Pe(t.default));
} });
var Sm = { left: "start", center: "center", right: "end", between: "between", around: "around", evenly: "evenly", stretch: "stretch" }, Hp = Object.keys(Sm), Ts = { align: { type: String, validator: (e) => Hp.includes(e) } };
function qs(e) {
  return v(() => {
    const t = e.align === void 0 ? e.vertical === true ? "stretch" : "left" : e.align;
    return `${e.vertical === true ? "items" : "justify"}-${Sm[t]}`;
  });
}
function so(e) {
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
function Ms(e) {
  const t = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    Cm(t, n);
  }), Array.from(t);
}
function Es(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function pl(e) {
  return e.isUnmounted === true || e.isDeactivated === true;
}
var jp = ["", true];
he({ name: "QBreadcrumbs", props: { ...Ts, separator: { type: String, default: "/" }, separatorColor: String, activeColor: { type: String, default: "primary" }, gutter: { type: String, validator: (e) => ["none", "xs", "sm", "md", "lg", "xl"].includes(e), default: "sm" } }, setup(e, { slots: t }) {
  const n = qs(e), r = v(() => `flex items-center ${n.value}${e.gutter === "none" ? "" : ` q-gutter-${e.gutter}`}`), l = v(() => e.separatorColor ? ` text-${e.separatorColor}` : ""), a = v(() => ` text-${e.activeColor}`);
  return () => {
    if (t.default === void 0) return;
    const o = Ms(Pe(t.default));
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
function Jc(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
function ed(e, t) {
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
function td(e, t) {
  return Array.isArray(t) === true ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function Qp(e, t) {
  return Array.isArray(e) === true ? td(e, t) : Array.isArray(t) === true ? td(t, e) : e === t;
}
function Kp(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (const n in e) if (Qp(e[n], t[n]) === false) return false;
  return true;
}
var km = { to: [String, Object], replace: Boolean, href: String, target: String, disable: Boolean }, La = { ...km, exact: Boolean, activeClass: { type: String, default: "q-router-link--active" }, exactActiveClass: { type: String, default: "q-router-link--exact-active" } };
function di({ fallbackTag: e, useDisableForRouterLinkProps: t = true } = {}) {
  const n = xe(), { props: r, proxy: l, emit: a } = n, o = Es(n), i = v(() => r.disable !== true && r.href !== void 0), u = v(t === true ? () => o === true && r.disable !== true && i.value !== true && r.to !== void 0 && r.to !== null && r.to !== "" : () => o === true && i.value !== true && r.to !== void 0 && r.to !== null && r.to !== ""), c = v(() => u.value === true ? y(r.to) : null), s = v(() => c.value !== null), f = v(() => i.value === true || s.value === true), h = v(() => r.type === "a" || f.value === true ? "a" : r.tag || e || "div"), m = v(() => i.value === true ? { href: r.href, target: r.target } : s.value === true ? { href: c.value.href, target: r.target } : {}), g = v(() => {
    if (s.value === false) return -1;
    const { matched: C } = c.value, { length: P } = C, O = C[P - 1];
    if (O === void 0) return -1;
    const H = l.$route.matched;
    if (H.length === 0) return -1;
    const B = H.findIndex(ed.bind(null, O));
    if (B !== -1) return B;
    const L = Jc(C[P - 2]);
    return P > 1 && Jc(O) === L && H[H.length - 1].path !== L ? H.findIndex(ed.bind(null, C[P - 2])) : B;
  }), w = v(() => s.value === true && g.value !== -1 && Up(l.$route.params, c.value.params)), x = v(() => w.value === true && g.value === l.$route.matched.length - 1 && Kp(l.$route.params, c.value.params)), k = v(() => s.value === true ? x.value === true ? ` ${r.exactActiveClass} ${r.activeClass}` : r.exact === true ? "" : w.value === true ? ` ${r.activeClass}` : "" : "");
  function y(C) {
    try {
      return l.$router.resolve(C);
    } catch {
    }
    return null;
  }
  function p(C, { returnRouterError: P, to: O = r.to, replace: H = r.replace } = {}) {
    if (r.disable === true) return C.preventDefault(), Promise.resolve(false);
    if (C.metaKey || C.altKey || C.ctrlKey || C.shiftKey || C.button !== void 0 && C.button !== 0 || r.target === "_blank") return Promise.resolve(false);
    C.preventDefault();
    const B = l.$router[H === true ? "replace" : "push"](O);
    return P === true ? B : B.then(() => {
    }).catch(() => {
    });
  }
  function b(C) {
    if (s.value === true) {
      const P = (O) => p(C, O);
      a("click", C, P), C.defaultPrevented !== true && P();
    } else a("click", C);
  }
  return { hasRouterLink: s, hasHrefLink: i, hasLink: f, linkTag: h, resolvedLink: c, linkIsActive: w, linkIsExactActive: x, linkClass: k, linkAttrs: m, getLink: y, navigateToRouterLink: p, navigateOnClick: b };
}
he({ name: "QBreadcrumbsEl", props: { ...La, label: String, icon: String, tag: { type: String, default: "span" } }, emits: ["click"], setup(e, { slots: t }) {
  const { linkTag: n, linkAttrs: r, linkClass: l, navigateOnClick: a } = di(), o = v(() => ({ class: "q-breadcrumbs__el q-link flex inline items-center relative-position " + (e.disable !== true ? "q-link--focusable" + l.value : "q-breadcrumbs__el--disable"), ...r.value, onClick: a })), i = v(() => "q-breadcrumbs__el-icon" + (e.label !== void 0 ? " q-breadcrumbs__el-icon--with-label" : ""));
  return () => {
    const u = [];
    return e.icon !== void 0 && u.push(d(et, { class: i.value, name: e.icon })), e.label !== void 0 && u.push(e.label), d(n.value, { ...o.value }, qt(t.default, u));
  };
} });
var Et = { size: { type: [String, Number], default: "1em" }, color: String };
function Rt(e) {
  return { cSize: v(() => e.size in Du ? `${Du[e.size]}px` : e.size), classes: v(() => "q-spinner" + (e.color ? ` text-${e.color}` : "")) };
}
var wn = he({ name: "QSpinner", props: { ...Et, thickness: { type: Number, default: 5 } }, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => d("svg", { class: n.value + " q-spinner-mat", width: t.value, height: t.value, viewBox: "25 25 50 50" }, [d("circle", { class: "path", cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": e.thickness, "stroke-miterlimit": "10" })]);
} });
function $o(e) {
  if (e === window) return { top: 0, left: 0 };
  const { top: t, left: n } = e.getBoundingClientRect();
  return { top: t, left: n };
}
function kr(e) {
  return e === window ? window.innerHeight : e.getBoundingClientRect().height;
}
function zu(e, t) {
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
function nd(e, t, n, r) {
  n.modifiers.stop === true && xt(e);
  const l = n.modifiers.color;
  let a = n.modifiers.center;
  a = a === true || r === true;
  const o = document.createElement("span"), i = document.createElement("span"), u = tn(e), { left: c, top: s, width: f, height: h } = t.getBoundingClientRect(), m = Math.sqrt(f * f + h * h), g = m / 2, w = `${(f - m) / 2}px`, x = a ? w : `${u.left - c - g}px`, k = `${(h - m) / 2}px`, y = a ? k : `${u.top - s - g}px`;
  i.className = "q-ripple__inner", zu(i, { height: `${m}px`, width: `${m}px`, transform: `translate3d(${x},${y},0) scale3d(.2,.2,1)`, opacity: 0 }), o.className = `q-ripple${l ? " text-" + l : ""}`, o.setAttribute("dir", "ltr"), o.appendChild(i), t.appendChild(o);
  const p = () => {
    o.remove(), clearTimeout(b);
  };
  n.abort.push(p);
  let b = setTimeout(() => {
    i.classList.add("q-ripple__inner--enter"), i.style.transform = `translate3d(${w},${k},0) scale3d(1,1,1)`, i.style.opacity = 0.2, b = setTimeout(() => {
      i.classList.remove("q-ripple__inner--enter"), i.classList.add("q-ripple__inner--leave"), i.style.opacity = 0, b = setTimeout(() => {
        o.remove(), n.abort.splice(n.abort.indexOf(p), 1);
      }, 275);
    }, 250);
  }, 50);
}
function ld(e, { modifiers: t, value: n, arg: r }) {
  const l = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = { early: l.early === true, stop: l.stop === true, center: l.center === true, color: l.color || r, keyCodes: [].concat(l.keyCodes || 13) };
}
var fi = Pn({ name: "ripple", beforeMount(e, t) {
  const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
  if (n.ripple === false) return;
  const r = { cfg: n, enabled: t.value !== false, modifiers: {}, abort: [], start(l) {
    r.enabled === true && l.qSkipRipple !== true && l.type === (r.modifiers.early === true ? "pointerdown" : "click") && nd(l, e, r, l.qKeyEvent === true);
  }, keystart: qm((l) => {
    r.enabled === true && l.qSkipRipple !== true && yn(l, r.modifiers.keyCodes) === true && l.type === `key${r.modifiers.early === true ? "down" : "up"}` && nd(l, e, r, true);
  }, 300) };
  ld(r, t), e.__qripple = r, Tt(r, "main", [[e, "pointerdown", "start", "passive"], [e, "click", "start", "passive"], [e, "keydown", "keystart", "passive"], [e, "keyup", "keystart", "passive"]]);
}, updated(e, t) {
  if (t.oldValue !== t.value) {
    const n = e.__qripple;
    n !== void 0 && (n.enabled = t.value !== false, n.enabled === true && Object(t.value) === t.value && ld(n, t));
  }
}, beforeUnmount(e) {
  const t = e.__qripple;
  t !== void 0 && (t.abort.forEach((n) => {
    n();
  }), Yt(t, "main"), delete e._qripple);
} }), Po = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 }, Yp = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, Xp = ["button", "submit", "reset"], Gp = /[^\s]\/[^\s]/, Mm = ["flat", "outline", "push", "unelevated"];
function Rs(e, t) {
  return e.flat === true ? "flat" : e.outline === true ? "outline" : e.push === true ? "push" : e.unelevated === true ? "unelevated" : t;
}
function Em(e) {
  const t = Rs(e);
  return t !== void 0 ? { [t]: true } : {};
}
var As = { ...el, ...km, type: { type: String, default: "button" }, label: [Number, String], icon: String, iconRight: String, ...Mm.reduce((e, t) => (e[t] = Boolean) && e, {}), square: Boolean, rounded: Boolean, glossy: Boolean, size: String, fab: Boolean, fabMini: Boolean, padding: String, color: String, textColor: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, tabindex: [Number, String], ripple: { type: [Boolean, Object], default: true }, align: { ...Ts.align, default: "center" }, stack: Boolean, stretch: Boolean, loading: { type: Boolean, default: null }, disable: Boolean }, Zp = { ...As, round: Boolean };
function Jp(e) {
  const t = tl(e, Yp), n = qs(e), { hasRouterLink: r, hasLink: l, linkTag: a, linkAttrs: o, navigateOnClick: i } = di({ fallbackTag: "button" }), u = v(() => {
    const x = e.fab === false && e.fabMini === false ? t.value : {};
    return e.padding !== void 0 ? Object.assign({}, x, { padding: e.padding.split(/\s+/).map((k) => k in Po ? Po[k] + "px" : k).join(" "), minWidth: "0", minHeight: "0" }) : x;
  }), c = v(() => e.rounded === true || e.fab === true || e.fabMini === true), s = v(() => e.disable !== true && e.loading !== true), f = v(() => s.value === true ? e.tabindex || 0 : -1), h = v(() => Rs(e, "standard")), m = v(() => {
    const x = { tabindex: f.value };
    return l.value === true ? Object.assign(x, o.value) : Xp.includes(e.type) === true && (x.type = e.type), a.value === "a" ? (e.disable === true ? x["aria-disabled"] = "true" : x.href === void 0 && (x.role = "button"), r.value !== true && Gp.test(e.type) === true && (x.type = e.type)) : e.disable === true && (x.disabled = "", x["aria-disabled"] = "true"), e.loading === true && e.percentage !== void 0 && Object.assign(x, { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": e.percentage }), x;
  }), g = v(() => {
    let x;
    e.color !== void 0 ? e.flat === true || e.outline === true ? x = `text-${e.textColor || e.color}` : x = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (x = `text-${e.textColor}`);
    const k = e.round === true ? "round" : `rectangle${c.value === true ? " q-btn--rounded" : e.square === true ? " q-btn--square" : ""}`;
    return `q-btn--${h.value} q-btn--${k}` + (x !== void 0 ? " " + x : "") + (s.value === true ? " q-btn--actionable q-focusable q-hoverable" : e.disable === true ? " disabled" : "") + (e.fab === true ? " q-btn--fab" : e.fabMini === true ? " q-btn--fab-mini" : "") + (e.noCaps === true ? " q-btn--no-uppercase" : "") + (e.dense === true ? " q-btn--dense" : "") + (e.stretch === true ? " no-border-radius self-stretch" : "") + (e.glossy === true ? " glossy" : "") + (e.square ? " q-btn--square" : "");
  }), w = v(() => n.value + (e.stack === true ? " column" : " row") + (e.noWrap === true ? " no-wrap text-no-wrap" : "") + (e.loading === true ? " q-btn__content--hidden" : ""));
  return { classes: g, style: u, innerClasses: w, attributes: m, hasLink: l, linkTag: a, navigateOnClick: i, isActionable: s };
}
var { passiveCapture: vn } = ft, nr = null, lr = null, rr = null, Je = he({ name: "QBtn", props: { ...Zp, percentage: Number, darkPercentage: Boolean, onTouchstart: [Function, Array] }, emits: ["click", "keydown", "mousedown", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { classes: l, style: a, innerClasses: o, attributes: i, hasLink: u, linkTag: c, navigateOnClick: s, isActionable: f } = Jp(e), h = K(null), m = K(null);
  let g = null, w, x = null;
  const k = v(() => e.label !== void 0 && e.label !== null && e.label !== ""), y = v(() => e.disable === true || e.ripple === false ? false : { keyCodes: u.value === true ? [13, 32] : [13], ...e.ripple === true ? {} : e.ripple }), p = v(() => ({ center: e.round })), b = v(() => {
    const T = Math.max(0, Math.min(100, e.percentage));
    return T > 0 ? { transition: "transform 0.6s", transform: `translateX(${T - 100}%)` } : {};
  }), C = v(() => {
    if (e.loading === true) return { onMousedown: R, onTouchstart: R, onClick: R, onKeydown: R, onKeyup: R };
    if (f.value === true) {
      const T = { onClick: O, onKeydown: H, onMousedown: L };
      if (r.$q.platform.has.touch === true) {
        const j = e.onTouchstart !== void 0 ? "" : "Passive";
        T[`onTouchstart${j}`] = B;
      }
      return T;
    }
    return { onClick: je };
  }), P = v(() => ({ ref: h, class: "q-btn q-btn-item non-selectable no-outline " + l.value, style: a.value, ...i.value, ...C.value }));
  function O(T) {
    if (h.value !== null) {
      if (T !== void 0) {
        if (T.defaultPrevented === true) return;
        const j = document.activeElement;
        if (e.type === "submit" && j !== document.body && h.value.contains(j) === false && j.contains(h.value) === false) {
          T.qAvoidFocus !== true && h.value.focus();
          const W = () => {
            var _a3;
            document.removeEventListener("keydown", je, true), document.removeEventListener("keyup", W, vn), (_a3 = h.value) == null ? void 0 : _a3.removeEventListener("blur", W, vn);
          };
          document.addEventListener("keydown", je, true), document.addEventListener("keyup", W, vn), h.value.addEventListener("blur", W, vn);
        }
      }
      s(T);
    }
  }
  function H(T) {
    h.value !== null && (n("keydown", T), yn(T, [13, 32]) === true && lr !== h.value && (lr !== null && q(), T.defaultPrevented !== true && (T.qAvoidFocus !== true && h.value.focus(), lr = h.value, h.value.classList.add("q-btn--active"), document.addEventListener("keyup", N, true), h.value.addEventListener("blur", N, vn)), je(T)));
  }
  function B(T) {
    h.value !== null && (n("touchstart", T), T.defaultPrevented !== true && (nr !== h.value && (nr !== null && q(), nr = h.value, g = T.target, g.addEventListener("touchcancel", N, vn), g.addEventListener("touchend", N, vn)), w = true, x !== null && clearTimeout(x), x = setTimeout(() => {
      x = null, w = false;
    }, 200)));
  }
  function L(T) {
    h.value !== null && (T.qSkipRipple = w === true, n("mousedown", T), T.defaultPrevented !== true && rr !== h.value && (rr !== null && q(), rr = h.value, h.value.classList.add("q-btn--active"), document.addEventListener("mouseup", N, vn)));
  }
  function N(T) {
    if (h.value !== null && !((T == null ? void 0 : T.type) === "blur" && document.activeElement === h.value)) {
      if ((T == null ? void 0 : T.type) === "keyup") {
        if (lr === h.value && yn(T, [13, 32]) === true) {
          const j = new MouseEvent("click", T);
          j.qKeyEvent = true, T.defaultPrevented === true && Dt(j), T.cancelBubble === true && xt(j), h.value.dispatchEvent(j), je(T), T.qKeyEvent = true;
        }
        n("keyup", T);
      }
      q();
    }
  }
  function q(T) {
    var _a3, _b2;
    const j = m.value;
    T !== true && (nr === h.value || rr === h.value) && j !== null && j !== document.activeElement && (j.setAttribute("tabindex", -1), j.focus()), nr === h.value && (g !== null && (g.removeEventListener("touchcancel", N, vn), g.removeEventListener("touchend", N, vn)), nr = g = null), rr === h.value && (document.removeEventListener("mouseup", N, vn), rr = null), lr === h.value && (document.removeEventListener("keyup", N, true), (_a3 = h.value) == null ? void 0 : _a3.removeEventListener("blur", N, vn), lr = null), (_b2 = h.value) == null ? void 0 : _b2.classList.remove("q-btn--active");
  }
  function R(T) {
    je(T), T.qSkipRipple = true;
  }
  return We(() => {
    q(true);
  }), Object.assign(r, { click: (T) => {
    f.value === true && O(T);
  } }), () => {
    let T = [];
    e.icon !== void 0 && T.push(d(et, { name: e.icon, left: e.stack !== true && k.value === true, role: "img" })), k.value === true && T.push(d("span", { class: "block" }, [e.label])), T = qt(t.default, T), e.iconRight !== void 0 && e.round === false && T.push(d(et, { name: e.iconRight, right: e.stack !== true && k.value === true, role: "img" }));
    const j = [d("span", { class: "q-focus-helper", ref: m })];
    return e.loading === true && e.percentage !== void 0 && j.push(d("span", { class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === true ? " q-btn__progress--dark" : "") }, [d("span", { class: "q-btn__progress-indicator fit block", style: b.value })])), j.push(d("span", { class: "q-btn__content text-center col items-center q-anchor--skip " + o.value }, T)), e.loading !== null && j.push(d(Ot, { name: "q-transition--fade" }, () => e.loading === true ? [d("span", { key: "loading", class: "absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : [d(wn)])] : null)), cn(d(c.value, P.value, j), [[fi, y.value, void 0, p.value]]);
  };
} }), Rm = he({ name: "QBtnGroup", props: { unelevated: Boolean, outline: Boolean, flat: Boolean, rounded: Boolean, square: Boolean, push: Boolean, stretch: Boolean, glossy: Boolean, spread: Boolean }, setup(e, { slots: t }) {
  const n = v(() => {
    const r = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter((l) => e[l] === true).map((l) => `q-btn-group--${l}`).join(" ");
    return `q-btn-group row no-wrap${r.length !== 0 ? " " + r : ""}` + (e.spread === true ? " q-btn-group--spread" : " inline");
  });
  return () => d("div", { class: n.value }, Pe(t.default));
} });
function Rn() {
  if (window.getSelection !== void 0) {
    const e = window.getSelection();
    e.empty !== void 0 ? e.empty() : e.removeAllRanges !== void 0 && (e.removeAllRanges(), rm.is.mobile !== true && e.addRange(document.createRange()));
  } else document.selection !== void 0 && document.selection.empty();
}
var Am = { target: { type: [Boolean, String, Element], default: true }, noParentEvent: Boolean }, $m = { ...Am, contextMenu: Boolean };
function $s({ showing: e, avoidEmit: t, configureAnchorEl: n }) {
  const { props: r, proxy: l, emit: a } = xe(), o = K(null);
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
function Pm(e, t) {
  const n = K(null);
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
var $r = { modelValue: { type: Boolean, default: null }, "onUpdate:modelValue": [Function, Array] }, Pr = ["beforeShow", "show", "beforeHide", "hide"];
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
    })), (i.modelValue === null || p === false) && w(y);
  }
  function w(y) {
    e.value !== false && (e.value = false, u("beforeHide", y), l !== void 0 ? l(y) : u("hide", y));
  }
  function x(y) {
    i.disable === true && y === true ? i["onUpdate:modelValue"] !== void 0 && u("update:modelValue", false) : y === true !== e.value && (y === true ? m : w)(s);
  }
  ge(() => i.modelValue, x), n !== void 0 && Es(o) === true && ge(() => c.$route.fullPath, () => {
    n.value === true && e.value === true && g();
  }), a === true && ct(() => {
    x(i.modelValue);
  });
  const k = { show: h, hide: g, toggle: f };
  return Object.assign(c, k), k;
}
var Il = [], Ca = [];
function Lm(e) {
  Ca = Ca.filter((t) => t !== e);
}
function ey(e) {
  Lm(e), Ca.push(e);
}
function rd(e) {
  Lm(e), Ca.length === 0 && Il.length !== 0 && (Il[Il.length - 1](), Il = []);
}
function Br(e) {
  Ca.length === 0 ? e() : Il.push(e);
}
function ty(e) {
  Il = Il.filter((t) => t !== e);
}
var yr = [], sa = [], ny = 1, sl = document.body;
function Ba(e, t) {
  const n = document.createElement("div");
  if (n.id = t !== void 0 ? `q-portal--${t}--${ny++}` : e, Eo.globalNodes !== void 0) {
    const r = Eo.globalNodes.class;
    r !== void 0 && (n.className = r);
  }
  return sl.appendChild(n), yr.push(n), sa.push(t), n;
}
function Ps(e) {
  const t = yr.indexOf(e);
  yr.splice(t, 1), sa.splice(t, 1), e.remove();
}
function ly(e) {
  if (e === sl) return;
  if (sl = e, sl === document.body || sa.reduce((n, r) => r === "dialog" ? n + 1 : n, 0) < 2) {
    yr.forEach((n) => {
      n.contains(sl) === false && sl.appendChild(n);
    });
    return;
  }
  const t = sa.lastIndexOf("dialog");
  for (let n = 0; n < yr.length; n++) {
    const r = yr[n];
    (n === t || sa[n] !== "dialog") && r.contains(sl) === false && sl.appendChild(r);
  }
}
var _r = [];
function ry(e) {
  return _r.find((t) => t.contentEl !== null && t.contentEl.contains(e));
}
function Bm(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      if (e.hide(t), e.$props.separateClosePopup === true) return so(e);
    } else if (e.__qPortal === true) {
      const n = so(e);
      return (n == null ? void 0 : n.$options.name) === "QPopupProxy" ? (e.hide(t), n) : e;
    }
    e = so(e);
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
    e = so(e);
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
function Ls(e, t, n, r) {
  const l = K(false), a = K(false);
  let o = null;
  const i = {}, u = r === "dialog" && iy(e);
  function c(f) {
    if (f === true) {
      rd(i), a.value = true;
      return;
    }
    a.value = false, l.value === false && (u === false && o === null && (o = Ba(false, r)), l.value = true, _r.push(e.proxy), ey(i));
  }
  function s(f) {
    if (a.value = false, f !== true) return;
    rd(i), l.value = false;
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
function ja(e) {
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
    l !== t && Nu(e, t);
    return;
  }
  requestAnimationFrame((a) => {
    const o = a - r, i = l + (t - l) / Math.max(o, n) * o;
    Nu(e, i), i !== t && Fm(e, t, n - o, a);
  });
}
function Om(e, t, n = 0) {
  const r = arguments[3] === void 0 ? performance.now() : arguments[3], l = mi(e);
  if (n <= 0) {
    l !== t && Hu(e, t);
    return;
  }
  requestAnimationFrame((a) => {
    const o = a - r, i = l + (t - l) / Math.max(o, n) * o;
    Hu(e, i), i !== t && Om(e, t, n - o, a);
  });
}
function Nu(e, t) {
  if (e === window) {
    window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t);
    return;
  }
  e.scrollTop = t;
}
function Hu(e, t) {
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
  Nu(e, t);
}
function Ni(e, t, n) {
  if (n) {
    Om(e, t, n);
    return;
  }
  Hu(e, t);
}
var Ua;
function co() {
  if (Ua !== void 0) return Ua;
  const e = document.createElement("p"), t = document.createElement("div");
  zu(e, { width: "100%", height: "200px" }), zu(t, { position: "absolute", top: "0px", left: "0px", visibility: "hidden", width: "200px", height: "150px", overflow: "hidden" }), t.appendChild(e), document.body.appendChild(t);
  const n = e.offsetWidth;
  t.style.overflow = "scroll";
  let r = e.offsetWidth;
  return n === r && (r = t.clientWidth), t.remove(), Ua = n - r, Ua;
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
function ju(e) {
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
var ad, od;
function Vo(e) {
  const t = e.split(" ");
  return t.length !== 2 ? false : ["top", "center", "bottom"].includes(t[0]) !== true ? (console.error("Anchor/Self position must start with one of top/center/bottom"), false) : ["left", "middle", "right", "start", "end"].includes(t[1]) !== true ? (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), false) : true;
}
function Hm(e) {
  return e ? !(e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number") : true;
}
var Uu = { "start#ltr": "left", "start#rtl": "right", "end#ltr": "right", "end#rtl": "left" };
["left", "middle", "right"].forEach((e) => {
  Uu[`${e}#ltr`] = e, Uu[`${e}#rtl`] = e;
});
function Do(e, t) {
  const n = e.split(" ");
  return { vertical: n[0], horizontal: Uu[`${n[1]}#${t === true ? "rtl" : "ltr"}`] };
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
function id(e, t, n, r) {
  return { top: e[n.vertical] - t[r.vertical], left: e[n.horizontal] - t[r.horizontal] };
}
function Bs(e, t = 0) {
  if (e.targetEl === null || e.anchorEl === null || t > 5) return;
  if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      Bs(e, t + 1);
    }, 10);
    return;
  }
  const { targetEl: n, offset: r, anchorEl: l, anchorOrigin: a, selfOrigin: o, absoluteOffset: i, fit: u, cover: c, maxHeight: s, maxWidth: f } = e;
  if (Ie.is.ios === true && window.visualViewport !== void 0) {
    const P = document.body.style, { offsetLeft: O, offsetTop: H } = window.visualViewport;
    O !== ad && (P.setProperty("--q-pe-left", O + "px"), ad = O), H !== od && (P.setProperty("--q-pe-top", H + "px"), od = H);
  }
  const { scrollLeft: h, scrollTop: m } = n, g = i === void 0 ? vy(l, c === true ? [0, 0] : r) : my(l, i, r);
  Object.assign(n.style, { top: 0, left: 0, minWidth: null, minHeight: null, maxWidth: f, maxHeight: s, visibility: "visible" });
  const { offsetWidth: w, offsetHeight: x } = n, { elWidth: k, elHeight: y } = u === true || c === true ? { elWidth: Math.max(g.width, w), elHeight: c === true ? Math.max(g.height, x) : x } : { elWidth: w, elHeight: x };
  let p = { maxWidth: f, maxHeight: s };
  (u === true || c === true) && (p.minWidth = g.width + "px", c === true && (p.minHeight = g.height + "px")), Object.assign(n.style, p);
  const b = hy(k, y);
  let C = id(g, b, a, o);
  if (i === void 0 || r === void 0) Hi(C, g, b, a, o);
  else {
    const { top: P, left: O } = C;
    Hi(C, g, b, a, o);
    let H = false;
    if (C.top !== P) {
      H = true;
      const B = 2 * r[1];
      g.center = g.top -= B, g.bottom -= B + 2;
    }
    if (C.left !== O) {
      H = true;
      const B = 2 * r[0];
      g.middle = g.left -= B, g.right -= B + 2;
    }
    H === true && (C = id(g, b, a, o), Hi(C, g, b, a, o));
  }
  p = { top: C.top + "px", left: C.left + "px" }, C.maxHeight !== void 0 && (p.maxHeight = C.maxHeight + "px", g.height > C.maxHeight && (p.minHeight = p.maxHeight)), C.maxWidth !== void 0 && (p.maxWidth = C.maxWidth + "px", g.width > C.maxWidth && (p.minWidth = p.maxWidth)), Object.assign(n.style, p), n.scrollTop !== m && (n.scrollTop = m), n.scrollLeft !== h && (n.scrollLeft = h);
}
function Hi(e, t, n, r, l) {
  const a = n.bottom, o = n.right, i = co(), u = window.innerHeight - i, c = document.body.clientWidth;
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
var hi = he({ name: "QMenu", inheritAttrs: false, props: { ...$m, ...$r, ...nt, ...Hl, persistent: Boolean, autoClose: Boolean, separateClosePopup: Boolean, noEscDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, fit: Boolean, cover: Boolean, square: Boolean, anchor: { type: String, validator: Vo }, self: { type: String, validator: Vo }, offset: { type: Array, validator: Hm }, scrollTarget: er, touchPosition: Boolean, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null } }, emits: [...Pr, "click", "escapeKey"], setup(e, { slots: t, emit: n, attrs: r }) {
  let l = null, a, o, i;
  const u = xe(), { proxy: c } = u, { $q: s } = c, f = K(null), h = K(false), m = v(() => e.persistent !== true && e.noRouteDismiss !== true), g = lt(e, s), { registerTick: w, removeTick: x } = wr(), { registerTimeout: k } = Zn(), { transitionProps: y, transitionStyle: p } = vi(e), { localScrollTarget: b, changeScrollEvent: C, unconfigureScrollTarget: P } = Pm(e, D), { anchorEl: O, canShow: H } = $s({ showing: h }), { hide: B } = Lr({ showing: h, canShow: H, handleShow: ye, handleHide: X, hideOnRouteChange: m, processOnMount: true }), { showPortal: L, hidePortal: N, renderPortal: q } = Ls(u, f, Y, "menu"), R = { anchorEl: O, innerRef: f, onClickOutside(V) {
    if (e.persistent !== true && h.value === true) return B(V), (V.type === "touchstart" || V.target.classList.contains("q-dialog__backdrop")) && je(V), true;
  } }, T = v(() => Do(e.anchor || (e.cover === true ? "center middle" : "bottom start"), s.lang.rtl)), j = v(() => e.cover === true ? T.value : Do(e.self || "top start", s.lang.rtl)), W = v(() => (e.square === true ? " q-menu--square" : "") + (g.value === true ? " q-menu--dark q-dark" : "")), U = v(() => e.autoClose === true ? { onClick: F } : {}), Z = v(() => h.value === true && e.persistent !== true);
  ge(Z, (V) => {
    V === true ? (Dm($), Nm(R)) : (Lo($), Oo(R));
  });
  function ae() {
    Br(() => {
      let V = f.value;
      V && V.contains(document.activeElement) !== true && (V = V.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || V.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || V.querySelector("[autofocus], [data-autofocus]") || V, V.focus({ preventScroll: true }));
    });
  }
  function ye(V) {
    if (l = e.noRefocus === false ? document.activeElement : null, zm(me), L(), D(), a = void 0, V !== void 0 && (e.touchPosition || e.contextMenu)) {
      const ne = tn(V);
      if (ne.left !== void 0) {
        const { top: be, left: S } = O.value.getBoundingClientRect();
        a = { left: ne.left - S, top: ne.top - be };
      }
    }
    o === void 0 && (o = ge(() => s.screen.width + "|" + s.screen.height + "|" + e.self + "|" + e.anchor + "|" + s.lang.rtl, A)), e.noFocus !== true && document.activeElement.blur(), w(() => {
      A(), e.noFocus !== true && ae();
    }), k(() => {
      s.platform.is.ios === true && (i = e.autoClose, f.value.click()), A(), L(true), n("show", V);
    }, e.transitionDuration);
  }
  function X(V) {
    x(), N(), _(true), l !== null && (V === void 0 || V.qClickOutside !== true) && ((((V == null ? void 0 : V.type.indexOf("key")) === 0 ? l.closest('[tabindex]:not([tabindex^="-"])') : void 0) || l).focus(), l = null), k(() => {
      N(true), n("hide", V);
    }, e.transitionDuration);
  }
  function _(V) {
    a = void 0, o !== void 0 && (o(), o = void 0), (V === true || h.value === true) && (ju(me), P(), Oo(R), Lo($)), V !== true && (l = null);
  }
  function D() {
    (O.value !== null || e.scrollTarget !== void 0) && (b.value = In(O.value, e.scrollTarget), C(b.value, A));
  }
  function F(V) {
    i !== true ? (Bm(c, V), n("click", V)) : i = false;
  }
  function me(V) {
    Z.value === true && e.noFocus !== true && Tm(f.value, V.target) !== true && ae();
  }
  function $(V) {
    e.noEscDismiss !== true && (n("escapeKey"), B(V));
  }
  function A() {
    Bs({ targetEl: f.value, offset: e.offset, anchorEl: O.value, anchorOrigin: T.value, selfOrigin: j.value, absoluteOffset: a, fit: e.fit, cover: e.cover, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function Y() {
    return d(Ot, y.value, () => h.value === true ? d("div", { role: "menu", ...r, ref: f, tabindex: -1, class: ["q-menu q-position-engine scroll" + W.value, r.class], style: [r.style, p.value], ...U.value }, Pe(t.default)) : null);
  }
  return We(_), Object.assign(c, { focus: ae, updatePosition: A }), q;
} }), ji, Qa = 0, Ht = new Array(256);
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
})(), ud = 4096;
function ka() {
  (ji === void 0 || Qa + 16 > ud) && (Qa = 0, ji = gy(ud));
  const e = Array.prototype.slice.call(ji, Qa, Qa += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, Ht[e[0]] + Ht[e[1]] + Ht[e[2]] + Ht[e[3]] + "-" + Ht[e[4]] + Ht[e[5]] + "-" + Ht[e[6]] + Ht[e[7]] + "-" + Ht[e[8]] + Ht[e[9]] + "-" + Ht[e[10]] + Ht[e[11]] + Ht[e[12]] + Ht[e[13]] + Ht[e[14]] + Ht[e[15]];
}
function by(e) {
  return e ?? null;
}
function sd(e, t) {
  return e ?? (t === true ? `f_${ka()}` : null);
}
function gi({ getValue: e, required: t = true } = {}) {
  if (rn.value === true) {
    const n = K(e !== void 0 ? by(e()) : null);
    return t === true && n.value === null && ct(() => {
      n.value = `f_${ka()}`;
    }), e !== void 0 && ge(e, (r) => {
      n.value = sd(r, t);
    }), n;
  }
  return e !== void 0 ? v(() => sd(e(), t)) : K(`f_${ka()}`);
}
var py = Object.keys(As);
function yy(e) {
  return py.reduce((t, n) => {
    const r = e[n];
    return r !== void 0 && (t[n] = r), t;
  }, {});
}
var _y = he({ name: "QBtnDropdown", props: { ...As, ...Hl, modelValue: Boolean, split: Boolean, dropdownIcon: String, contentClass: [Array, String, Object], contentStyle: [Array, String, Object], cover: Boolean, persistent: Boolean, noEscDismiss: Boolean, noRouteDismiss: Boolean, autoClose: Boolean, noRefocus: Boolean, noFocus: Boolean, menuAnchor: { type: String, default: "bottom end" }, menuSelf: { type: String, default: "top end" }, menuOffset: Array, disableMainBtn: Boolean, disableDropdown: Boolean, noIconAnimation: Boolean, toggleAriaLabel: String }, emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), l = K(e.modelValue), a = K(null), o = gi(), i = v(() => {
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
  function w(b) {
    n("click", b);
  }
  function x(b) {
    xt(b), p(), n("click", b);
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
  return Object.assign(r, { show: y, hide: p, toggle: k }), ct(() => {
    e.modelValue === true && y();
  }), () => {
    const b = [d(et, { class: u.value, name: e.dropdownIcon || r.$q.iconSet.arrow.dropdown })];
    return e.disableDropdown !== true && b.push(d(hi, { ref: a, id: o.value, class: e.contentClass, style: e.contentStyle, cover: e.cover, fit: true, persistent: e.persistent, noEscDismiss: e.noEscDismiss, noRouteDismiss: e.noRouteDismiss, autoClose: e.autoClose, noFocus: e.noFocus, noRefocus: e.noRefocus, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, separateClosePopup: true, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, onBeforeShow: f, onShow: h, onBeforeHide: m, onHide: g }, t.default)), e.split === false ? d(Je, { class: "q-btn-dropdown q-btn-dropdown--simple", ...s.value, ...i.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: w }, { default: () => Pe(t.label, []).concat(b), loading: t.loading }) : d(Rm, { class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item", rounded: e.rounded, square: e.square, ...c.value, glossy: e.glossy, stretch: e.stretch }, () => [d(Je, { class: "q-btn-dropdown--current", ...s.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: x }, { default: t.label, loading: t.loading }), d(Je, { class: "q-btn-dropdown__arrow-container q-anchor--skip", ...i.value, ...c.value, disable: e.disable === true || e.disableDropdown === true, rounded: e.rounded, color: e.color, textColor: e.textColor, dense: e.dense, size: e.size, padding: e.padding, ripple: e.ripple }, () => b)]);
  };
} }), xn = { name: String };
function Fa(e) {
  return v(() => ({ type: "hidden", name: e.name, value: e.modelValue }));
}
function ql(e = {}) {
  return (t, n, r) => {
    t[n](d("input", { class: "hidden" + (r || ""), ...e.value }));
  };
}
function Fs(e) {
  return v(() => e.name || e.for);
}
he({ name: "QBtnToggle", props: { ...xn, modelValue: { required: true }, options: { type: Array, required: true, validator: (e) => e.every((t) => ("label" in t || "icon" in t || "slot" in t) && "value" in t) }, color: String, textColor: String, toggleColor: { type: String, default: "primary" }, toggleTextColor: String, outline: Boolean, flat: Boolean, unelevated: Boolean, rounded: Boolean, push: Boolean, glossy: Boolean, size: String, padding: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, readonly: Boolean, disable: Boolean, stack: Boolean, stretch: Boolean, spread: Boolean, clearable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "clear", "click"], setup(e, { slots: t, emit: n }) {
  const r = v(() => e.options.find((h) => h.value === e.modelValue) !== void 0), l = v(() => ({ type: "hidden", name: e.name, value: e.modelValue })), a = ql(l), o = v(() => Em(e)), i = v(() => ({ rounded: e.rounded, dense: e.dense, ...o.value })), u = v(() => e.options.map((h, m) => {
    const { attrs: g, value: w, slot: x, ...k } = h;
    return { slot: x, props: { key: m, "aria-pressed": w === e.modelValue ? "true" : "false", ...g, ...k, ...i.value, disable: e.disable === true || k.disable === true, color: w === e.modelValue ? s(k, "toggleColor") : s(k, "color"), textColor: w === e.modelValue ? s(k, "toggleTextColor") : s(k, "textColor"), noCaps: s(k, "noCaps") === true, noWrap: s(k, "noWrap") === true, size: s(k, "size"), padding: s(k, "padding"), ripple: s(k, "ripple"), stack: s(k, "stack") === true, stretch: s(k, "stretch") === true, onClick(y) {
      c(w, h, y);
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
  return () => d(e.tag, { class: l.value }, Pe(t.default));
} }), Dl = he({ name: "QCardSection", props: { tag: { type: String, default: "div" }, horizontal: Boolean }, setup(e, { slots: t }) {
  const n = v(() => `q-card__section q-card__section--${e.horizontal === true ? "horiz row no-wrap" : "vert"}`);
  return () => d(e.tag, { class: n.value }, Pe(t.default));
} }), wy = he({ name: "QCardActions", props: { ...Ts, vertical: Boolean }, setup(e, { slots: t }) {
  const n = qs(e), r = v(() => `q-card__actions ${n.value} q-card__actions--${e.vertical === true ? "vert column" : "horiz row"}`);
  return () => d("div", { class: r.value }, Pe(t.default));
} }), Os = { left: true, right: true, up: true, down: true, horizontal: true, vertical: true }, xy = Object.keys(Os);
Os.all = true;
function Io(e) {
  const t = {};
  for (const n of xy) e[n] === true && (t[n] = true);
  return Object.keys(t).length === 0 ? Os : (t.horizontal === true ? t.left = t.right = true : t.left === true && t.right === true && (t.horizontal = true), t.vertical === true ? t.up = t.down = true : t.up === true && t.down === true && (t.vertical = true), t.horizontal === true && t.vertical === true && (t.all = true), t);
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
var ky = Pn({ name: "touch-swipe", beforeMount(e, { value: t, arg: n, modifiers: r }) {
  if (r.mouse !== true && Ie.has.touch !== true) return;
  const l = r.mouseCapture === true ? "Capture" : "", a = { handler: t, sensitivity: Cy(n), direction: Io(r), noop: St, mouseStart(o) {
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
    a.direction.vertical === true && s < h && s < 100 && g > a.sensitivity[0] && (a.event.dir = f < 0 ? "up" : "down"), a.direction.horizontal === true && s > h && h < 100 && m > a.sensitivity[0] && (a.event.dir = c < 0 ? "left" : "right"), a.direction.up === true && s < h && f < 0 && s < 100 && g > a.sensitivity[0] && (a.event.dir = "up"), a.direction.down === true && s < h && f > 0 && s < 100 && g > a.sensitivity[0] && (a.event.dir = "down"), a.direction.left === true && s > h && c < 0 && h < 100 && m > a.sensitivity[0] && (a.event.dir = "left"), a.direction.right === true && s > h && c > 0 && h < 100 && m > a.sensitivity[0] && (a.event.dir = "right"), a.event.dir !== false ? (je(o), a.event.mouse === true && (document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), Rn(), a.styleCleanup = (w) => {
      a.styleCleanup = void 0, document.body.classList.remove("non-selectable");
      const x = () => {
        document.body.classList.remove("no-pointer-events--children");
      };
      w === true ? setTimeout(x, 50) : x();
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
function Oa() {
  let e = /* @__PURE__ */ Object.create(null);
  return { getCache: (t, n) => e[t] === void 0 ? e[t] = typeof n == "function" ? n() : n : e[t], setCache(t, n) {
    e[t] = n;
  }, hasCache(t) {
    return Object.hasOwnProperty.call(e, t);
  }, clearCache(t) {
    t !== void 0 ? delete e[t] : e = /* @__PURE__ */ Object.create(null);
  } };
}
var Vs = { name: { required: true }, disable: Boolean }, cd = { setup(e, { slots: t }) {
  return () => d("div", { class: "q-panel scroll", role: "tabpanel" }, Pe(t.default));
} }, Ds = { modelValue: { required: true }, animated: Boolean, infinite: Boolean, swipeable: Boolean, vertical: Boolean, transitionPrev: String, transitionNext: String, transitionDuration: { type: [String, Number], default: 300 }, keepAlive: Boolean, keepAliveInclude: [String, Array, RegExp], keepAliveExclude: [String, Array, RegExp], keepAliveMax: Number }, Is = ["update:modelValue", "beforeTransition", "transition"];
function zs() {
  const { props: e, emit: t, proxy: n } = xe(), { getCache: r } = Oa(), { registerTimeout: l } = Zn();
  let a, o;
  const i = K(null), u = { value: null };
  function c(T) {
    const j = e.vertical === true ? "up" : "left";
    H((n.$q.lang.rtl === true ? -1 : 1) * (T.direction === j ? 1 : -1));
  }
  const s = v(() => [[ky, c, void 0, { horizontal: e.vertical !== true, vertical: e.vertical, mouse: true }]]), f = v(() => e.transitionPrev || `slide-${e.vertical === true ? "down" : "right"}`), h = v(() => e.transitionNext || `slide-${e.vertical === true ? "up" : "left"}`), m = v(() => `--q-transition-duration: ${e.transitionDuration}ms`), g = v(() => typeof e.modelValue == "string" || typeof e.modelValue == "number" ? e.modelValue : String(e.modelValue)), w = v(() => ({ include: e.keepAliveInclude, exclude: e.keepAliveExclude, max: e.keepAliveMax })), x = v(() => e.keepAliveInclude !== void 0 || e.keepAliveExclude !== void 0);
  ge(() => e.modelValue, (T, j) => {
    const W = b(T) === true ? C(T) : -1;
    o !== true && O(W === -1 ? 0 : W < C(j) ? -1 : 1), u.value !== W && (u.value = W, t("beforeTransition", T, j), l(() => {
      t("transition", T, j);
    }, e.transitionDuration));
  });
  function k() {
    H(1);
  }
  function y() {
    H(-1);
  }
  function p(T) {
    t("update:modelValue", T);
  }
  function b(T) {
    return T != null && T !== "";
  }
  function C(T) {
    return a.findIndex((j) => j.props.name === T && j.props.disable !== "" && j.props.disable !== true);
  }
  function P() {
    return a.filter((T) => T.props.disable !== "" && T.props.disable !== true);
  }
  function O(T) {
    const j = T !== 0 && e.animated === true && u.value !== -1 ? "q-transition--" + (T === -1 ? f.value : h.value) : null;
    i.value !== j && (i.value = j);
  }
  function H(T, j = u.value) {
    let W = j + T;
    for (; W !== -1 && W < a.length; ) {
      const U = a[W];
      if (U !== void 0 && U.props.disable !== "" && U.props.disable !== true) {
        O(T), o = true, t("update:modelValue", U.props.name), setTimeout(() => {
          o = false;
        });
        return;
      }
      W += T;
    }
    e.infinite === true && a.length !== 0 && j !== -1 && j !== a.length && H(T, T === -1 ? a.length : -1);
  }
  function B() {
    const T = C(e.modelValue);
    return u.value !== T && (u.value = T), true;
  }
  function L() {
    const T = b(e.modelValue) === true && B() && a[u.value];
    return e.keepAlive === true ? [d(xv, w.value, [d(x.value === true ? r(g.value, () => ({ ...cd, name: g.value })) : cd, { key: g.value, style: m.value }, () => T)])] : [d("div", { class: "q-panel scroll", style: m.value, key: g.value, role: "tabpanel" }, [T])];
  }
  function N() {
    if (a.length !== 0) return e.animated === true ? [d(Ot, { name: i.value }, L)] : L();
  }
  function q(T) {
    return a = Ms(Pe(T.default, [])).filter((j) => j.props !== null && j.props.slot === void 0 && b(j.props.name) === true), a.length;
  }
  function R() {
    return a;
  }
  return Object.assign(n, { next: k, previous: y, goTo: p }), { panelIndex: u, panelDirectives: s, updatePanelsList: q, updatePanelIndex: B, getPanelContent: N, getEnabledPanels: P, getPanels: R, isValidPanelName: b, keepAliveProps: w, needsUniqueKeepAliveWrapper: x, goToPanelByOffset: H, goToPanel: p, nextPanel: k, previousPanel: y };
}
var Dr = 0, Ns = { fullscreen: Boolean, noRouteFullscreenExit: Boolean }, Hs = ["update:fullscreen", "fullscreen"];
function js() {
  const e = xe(), { props: t, emit: n, proxy: r } = e;
  let l, a, o;
  const i = K(false);
  Es(e) === true && ge(() => r.$route.fullPath, () => {
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
    i.value !== true && (i.value = true, o = r.$el.parentNode, o.replaceChild(a, r.$el), document.body.appendChild(r.$el), Dr++, Dr === 1 && document.body.classList.add("q-body--fullscreen-mixin"), l = { handler: s }, xa.add(l));
  }
  function s() {
    i.value === true && (l !== void 0 && (xa.remove(l), l = void 0), o.replaceChild(r.$el, a), i.value = false, Dr = Math.max(0, Dr - 1), Dr === 0 && (document.body.classList.remove("q-body--fullscreen-mixin"), r.$el.scrollIntoView !== void 0 && setTimeout(() => {
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
he({ name: "QCarousel", props: { ...nt, ...Ds, ...Ns, transitionPrev: { type: String, default: "fade" }, transitionNext: { type: String, default: "fade" }, height: String, padding: Boolean, controlColor: String, controlTextColor: String, controlType: { type: String, validator: (e) => qy.includes(e), default: "flat" }, autoplay: [Number, Boolean], arrows: Boolean, prevIcon: String, nextIcon: String, navigation: Boolean, navigationPosition: { type: String, validator: (e) => Ty.includes(e) }, navigationIcon: String, navigationActiveIcon: String, thumbnails: Boolean }, emits: [...Hs, ...Is], setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = lt(e, n);
  let l = null, a;
  const { updatePanelsList: o, getPanelContent: i, panelDirectives: u, goToPanel: c, previousPanel: s, nextPanel: f, getEnabledPanels: h, panelIndex: m } = zs(), { inFullscreen: g } = js(), w = v(() => g.value !== true && e.height !== void 0 ? { height: e.height } : {}), x = v(() => e.vertical === true ? "vertical" : "horizontal"), k = v(() => e.navigationPosition || (e.vertical === true ? "right" : "bottom")), y = v(() => `q-carousel q-panel-parent q-carousel--with${e.padding === true ? "" : "out"}-padding` + (g.value === true ? " fullscreen" : "") + (r.value === true ? " q-carousel--dark q-dark" : "") + (e.arrows === true ? ` q-carousel--arrows-${x.value}` : "") + (e.navigation === true ? ` q-carousel--navigation-${k.value}` : "")), p = v(() => {
    const L = [e.prevIcon || n.iconSet.carousel[e.vertical === true ? "up" : "left"], e.nextIcon || n.iconSet.carousel[e.vertical === true ? "down" : "right"]];
    return e.vertical === false && n.lang.rtl === true ? L.reverse() : L;
  }), b = v(() => e.navigationIcon || n.iconSet.carousel.navigationIcon), C = v(() => e.navigationActiveIcon || b.value), P = v(() => ({ color: e.controlColor, textColor: e.controlTextColor, round: true, [e.controlType]: true, dense: true }));
  ge(() => e.modelValue, () => {
    e.autoplay && O();
  }), ge(() => e.autoplay, (L) => {
    L ? O() : l !== null && (clearTimeout(l), l = null);
  });
  function O() {
    const L = Sa(e.autoplay) === true ? Math.abs(e.autoplay) : 5e3;
    l !== null && clearTimeout(l), l = setTimeout(() => {
      l = null, L >= 0 ? f() : s();
    }, L);
  }
  ct(() => {
    e.autoplay && O();
  }), We(() => {
    l !== null && clearTimeout(l);
  });
  function H(L, N) {
    return d("div", { class: `q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${L} q-carousel__navigation--${k.value}` + (e.controlColor !== void 0 ? ` text-${e.controlColor}` : "") }, [d("div", { class: "q-carousel__navigation-inner flex flex-center no-wrap" }, h().map(N))]);
  }
  function B() {
    const L = [];
    if (e.navigation === true) {
      const N = t["navigation-icon"] !== void 0 ? t["navigation-icon"] : (R) => d(Je, { key: "nav" + R.name, class: `q-carousel__navigation-icon q-carousel__navigation-icon--${R.active === true ? "" : "in"}active`, ...R.btnProps, onClick: R.onClick }), q = a - 1;
      L.push(H("buttons", (R, T) => {
        const j = R.props.name, W = m.value === T;
        return N({ index: T, maxIndex: q, name: j, active: W, btnProps: { icon: W === true ? C.value : b.value, size: "sm", ...P.value }, onClick: () => {
          c(j);
        } });
      }));
    } else if (e.thumbnails === true) {
      const N = e.controlColor !== void 0 ? ` text-${e.controlColor}` : "";
      L.push(H("thumbnails", (q) => {
        const R = q.props;
        return d("img", { key: "tmb#" + R.name, class: `q-carousel__thumbnail q-carousel__thumbnail--${R.name === e.modelValue ? "" : "in"}active` + N, src: R.imgSrc || R["img-src"], onClick: () => {
          c(R.name);
        } });
      }));
    }
    return e.arrows === true && m.value >= 0 && ((e.infinite === true || m.value > 0) && L.push(d("div", { key: "prev", class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${x.value} absolute flex flex-center` }, [d(Je, { icon: p.value[0], ...P.value, onClick: s })])), (e.infinite === true || m.value < a - 1) && L.push(d("div", { key: "next", class: `q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${x.value} absolute flex flex-center` }, [d(Je, { icon: p.value[1], ...P.value, onClick: f })]))), qt(t.control, L);
  }
  return () => (a = o(t), d("div", { class: y.value, style: w.value }, [_n("div", { class: "q-carousel__slides-container" }, i(), "sl-cont", e.swipeable, () => u.value)].concat(B())));
} });
he({ name: "QCarouselSlide", props: { ...Vs, imgSrc: String }, setup(e, { slots: t }) {
  const n = v(() => e.imgSrc ? { backgroundImage: `url("${e.imgSrc}")` } : {});
  return () => d("div", { class: "q-carousel__slide", style: n.value }, Pe(t.default));
} });
he({ name: "QCarouselControl", props: { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, default: () => [18, 18], validator: (e) => e.length === 2 } }, setup(e, { slots: t }) {
  const n = v(() => `q-carousel__control absolute absolute-${e.position}`), r = v(() => ({ margin: `${e.offset[1]}px ${e.offset[0]}px` }));
  return () => d("div", { class: n.value, style: r.value }, Pe(t.default));
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
    t.name !== void 0 ? f.push(d("div", { class: `q-message-name q-message-name--${n.value}` }, t.name())) : e.name !== void 0 && f.push(d("div", { class: `q-message-name q-message-name--${n.value}`, [i.value.name]: e.name })), t.default !== void 0 ? f.push(c(Ms(t.default()), true)) : e.text !== void 0 && f.push(c(e.text)), s.push(d("div", { class: o.value }, f));
    const h = [];
    return t.label !== void 0 ? h.push(d("div", { class: "q-message-label" }, t.label())) : e.label !== void 0 && h.push(d("div", { class: "q-message-label", [i.value.label]: e.label })), h.push(d("div", { class: a.value }, s)), d("div", { class: `q-message q-message-${n.value}` }, h);
  };
} });
function Um(e, t) {
  const n = K(null), r = v(() => e.disable === true ? null : d("span", { ref: n, class: "no-outline", tabindex: -1 }));
  function l(a) {
    const o = t.value;
    (a == null ? void 0 : a.qAvoidFocus) !== true && ((a == null ? void 0 : a.type.indexOf("key")) === 0 ? document.activeElement !== o && (o == null ? void 0 : o.contains(document.activeElement)) === true && o.focus() : n.value !== null && (a === void 0 || (o == null ? void 0 : o.contains(a.target)) === true) && n.value.focus());
  }
  return { refocusTargetEl: r, refocusTarget: l };
}
var Qm = { xs: 30, sm: 35, md: 40, lg: 50, xl: 60 }, Km = { ...nt, ...el, ...xn, modelValue: { required: true, default: null }, val: {}, trueValue: { default: true }, falseValue: { default: false }, indeterminateValue: { default: null }, checkedIcon: String, uncheckedIcon: String, indeterminateIcon: String, toggleOrder: { type: String, validator: (e) => e === "tf" || e === "ft" }, toggleIndeterminate: Boolean, label: String, leftLabel: Boolean, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, Wm = ["update:modelValue"];
function Ym(e, t) {
  const { props: n, slots: r, emit: l, proxy: a } = xe(), { $q: o } = a, i = lt(n, o), u = K(null), { refocusTargetEl: c, refocusTarget: s } = Um(n, u), f = tl(n, Qm), h = v(() => n.val !== void 0 && Array.isArray(n.modelValue)), m = v(() => {
    const q = Ge(n.val);
    return h.value === true ? n.modelValue.findIndex((R) => Ge(R) === q) : -1;
  }), g = v(() => h.value === true ? m.value !== -1 : Ge(n.modelValue) === Ge(n.trueValue)), w = v(() => h.value === true ? m.value === -1 : Ge(n.modelValue) === Ge(n.falseValue)), x = v(() => g.value === false && w.value === false), k = v(() => n.disable === true ? -1 : n.tabindex || 0), y = v(() => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (n.disable === true ? " disabled" : "") + (i.value === true ? ` q-${e}--dark` : "") + (n.dense === true ? ` q-${e}--dense` : "") + (n.leftLabel === true ? " reverse" : "")), p = v(() => {
    const q = g.value === true ? "truthy" : w.value === true ? "falsy" : "indet", R = n.color !== void 0 && (n.keepColor === true || (e === "toggle" ? g.value === true : w.value !== true)) ? ` text-${n.color}` : "";
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${q}${R}`;
  }), b = v(() => {
    const q = { type: "checkbox" };
    return n.name !== void 0 && Object.assign(q, { ".checked": g.value, "^checked": g.value === true ? "checked" : void 0, name: n.name, value: h.value === true ? n.val : n.trueValue }), q;
  }), C = ql(b), P = v(() => {
    const q = { tabindex: k.value, role: e === "toggle" ? "switch" : "checkbox", "aria-label": n.label, "aria-checked": x.value === true ? "mixed" : g.value === true ? "true" : "false" };
    return n.disable === true && (q["aria-disabled"] = "true"), q;
  });
  function O(q) {
    q !== void 0 && (je(q), s(q)), n.disable !== true && l("update:modelValue", H(), q);
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
  function B(q) {
    (q.keyCode === 13 || q.keyCode === 32) && je(q);
  }
  function L(q) {
    (q.keyCode === 13 || q.keyCode === 32) && O(q);
  }
  const N = t(g, x);
  return Object.assign(a, { toggle: O }), () => {
    const q = N();
    n.disable !== true && C(q, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
    const R = [d("div", { class: p.value, style: f.value, "aria-hidden": "true" }, q)];
    c.value !== null && R.push(c.value);
    const T = n.label !== void 0 ? qt(r.default, [n.label]) : Pe(r.default);
    return T !== void 0 && R.push(d("div", { class: `q-${e}__label q-anchor--skip` }, T)), d("div", { ref: u, class: y.value, ...P.value, onClick: O, onKeydown: B, onKeyup: L }, R);
  };
}
var My = () => d("div", { key: "svg", class: "q-checkbox__bg absolute" }, [d("svg", { class: "q-checkbox__svg fit absolute-full", viewBox: "0 0 24 24" }, [d("path", { class: "q-checkbox__truthy", fill: "none", d: "M1.73,12.91 8.1,19.28 22.79,4.59" }), d("path", { class: "q-checkbox__indet", d: "M4,14H20V10H4" })])]), ca = he({ name: "QCheckbox", props: Km, emits: Wm, setup(e) {
  const t = My();
  function n(r, l) {
    const a = v(() => (r.value === true ? e.checkedIcon : l.value === true ? e.indeterminateIcon : e.uncheckedIcon) || null);
    return () => a.value !== null ? [d("div", { key: "icon", class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap" }, [d(et, { class: "q-checkbox__icon", name: a.value })])] : [t];
  }
  return Ym("checkbox", n);
} }), Ey = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, Xm = he({ name: "QChip", props: { ...nt, ...el, dense: Boolean, icon: String, iconRight: String, iconRemove: String, iconSelected: String, label: [String, Number], color: String, textColor: String, modelValue: { type: Boolean, default: true }, selected: { type: Boolean, default: null }, square: Boolean, outline: Boolean, clickable: Boolean, removable: Boolean, removeAriaLabel: String, tabindex: [String, Number], disable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "update:selected", "remove", "click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = lt(e, r), a = tl(e, Ey), o = v(() => e.selected === true || e.icon !== void 0), i = v(() => e.selected === true ? e.iconSelected || r.iconSet.chip.selected : e.icon), u = v(() => e.iconRemove || r.iconSet.chip.remove), c = v(() => e.disable === false && (e.clickable === true || e.selected !== null)), s = v(() => {
    const x = e.outline === true && e.color || e.textColor;
    return "q-chip row inline no-wrap items-center" + (e.outline === false && e.color !== void 0 ? ` bg-${e.color}` : "") + (x ? ` text-${x} q-chip--colored` : "") + (e.disable === true ? " disabled" : "") + (e.dense === true ? " q-chip--dense" : "") + (e.outline === true ? " q-chip--outline" : "") + (e.selected === true ? " q-chip--selected" : "") + (c.value === true ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (e.square === true ? " q-chip--square" : "") + (l.value === true ? " q-chip--dark q-dark" : "");
  }), f = v(() => {
    const x = e.disable === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: e.tabindex || 0 }, k = { ...x, role: "button", "aria-hidden": "false", "aria-label": e.removeAriaLabel || r.lang.label.remove };
    return { chip: x, remove: k };
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
    const k = e.label !== void 0 ? [d("div", { class: "ellipsis" }, [e.label])] : void 0;
    return x.push(d("div", { class: "q-chip__content col row no-wrap items-center q-anchor--skip" }, ks(t.default, k))), e.iconRight && x.push(d(et, { class: "q-chip__icon q-chip__icon--right", name: e.iconRight })), e.removable === true && x.push(d(et, { class: "q-chip__icon q-chip__icon--remove cursor-pointer", name: u.value, ...f.value.remove, onClick: g, onKeyup: g })), x;
  }
  return () => {
    if (e.modelValue === false) return;
    const x = { class: s.value, style: a.value };
    return c.value === true && Object.assign(x, f.value.chip, { onClick: m, onKeyup: h }), _n("div", x, w(), "ripple", e.ripple !== false && e.disable !== true, () => [[fi, e.ripple]]);
  };
} }), Us = { ...el, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, color: String, centerColor: String, trackColor: String, fontSize: String, rounded: Boolean, thickness: { type: Number, default: 0.2, validator: (e) => e >= 0 && e <= 1 }, angle: { type: Number, default: 0 }, showValue: Boolean, reverse: Boolean, instantFeedback: Boolean }, Qu = 50, Gm = 2 * Qu, Zm = Gm * Math.PI, Ry = Math.round(Zm * 1e3) / 1e3, Jm = he({ name: "QCircularProgress", props: { ...Us, value: { type: Number, default: 0 }, animationSpeed: { type: [String, Number], default: 600 }, indeterminate: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = tl(e), l = v(() => {
    const m = (n.lang.rtl === true ? -1 : 1) * e.angle;
    return { transform: e.reverse !== (n.lang.rtl === true) ? `scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90 - m}deg)` : `rotate3d(0, 0, 1, ${m - 90}deg)` };
  }), a = v(() => e.instantFeedback !== true && e.indeterminate !== true ? { transition: `stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease` } : ""), o = v(() => Gm / (1 - e.thickness / 2)), i = v(() => `${o.value / 2} ${o.value / 2} ${o.value} ${o.value}`), u = v(() => dt(e.value, e.min, e.max)), c = v(() => e.max - e.min), s = v(() => e.thickness / 2 * o.value), f = v(() => {
    const m = (e.max - u.value) / c.value, g = e.rounded === true && u.value < e.max && m < 0.25 ? s.value / 2 * (1 - m / 0.25) : 0;
    return Zm * m + g;
  });
  function h({ thickness: m, offset: g, color: w, cls: x, rounded: k }) {
    return d("circle", { class: "q-circular-progress__" + x + (w !== void 0 ? ` text-${w}` : ""), style: a.value, fill: "transparent", stroke: "currentColor", "stroke-width": m, "stroke-dasharray": Ry, "stroke-dashoffset": g, "stroke-linecap": k, cx: o.value, cy: o.value, r: Qu });
  }
  return () => {
    const m = [];
    e.centerColor !== void 0 && e.centerColor !== "transparent" && m.push(d("circle", { class: `q-circular-progress__center text-${e.centerColor}`, fill: "currentColor", r: Qu - s.value / 2, cx: o.value, cy: o.value })), e.trackColor !== void 0 && e.trackColor !== "transparent" && m.push(h({ cls: "track", thickness: s.value, offset: 0, color: e.trackColor })), m.push(h({ cls: "circle", thickness: s.value, offset: f.value, color: e.color, rounded: e.rounded === true ? "round" : void 0 }));
    const g = [d("svg", { class: "q-circular-progress__svg", style: l.value, viewBox: i.value, "aria-hidden": "true" }, m)];
    return e.showValue === true && g.push(d("div", { class: "q-circular-progress__text absolute-full row flex-center content-center", style: { fontSize: e.fontSize } }, t.default !== void 0 ? t.default() : [d("div", u.value)])), d("div", { class: `q-circular-progress q-circular-progress--${e.indeterminate === true ? "in" : ""}determinate`, style: r.value, role: "progressbar", "aria-valuemin": e.min, "aria-valuemax": e.max, "aria-valuenow": e.indeterminate === true ? void 0 : u.value }, ks(t.internal, g));
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
var Ay = 0, bn = Pn({ name: "touch-pan", beforeMount(e, { value: t, modifiers: n }) {
  if (n.mouse !== true && Ie.has.touch !== true) return;
  function r(a, o) {
    n.mouse === true && o === true ? je(a) : (n.stop === true && xt(a), n.prevent === true && Dt(a));
  }
  const l = { uid: "qvtp_" + Ay++, handler: t, modifiers: n, direction: Io(n), noop: St, mouseStart(a) {
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
        a.defaultPrevented === true && Dt(c), a.cancelBubble === true && xt(c), Object.assign(c, { qKeyEvent: a.qKeyEvent, qClickOutside: a.qClickOutside, qAnchorHandled: a.qAnchorHandled, qClonedBy: a.qClonedBy === void 0 ? [l.uid] : a.qClonedBy.concat(l.uid) }), l.initialEvent = { target: a.target, event: c };
      }
      xt(a);
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
          const w = () => {
            document.body.classList.remove("no-pointer-events--children");
          };
          g !== void 0 ? setTimeout(() => {
            w(), g();
          }, 50) : w();
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
} }), dd = "q-slider__marker-labels", $y = (e) => ({ value: e }), Py = ({ marker: e }) => d("div", { key: e.value, style: e.style, class: e.classes }, e.label), Qs = [34, 37, 40, 33, 39, 38], eh = { ...nt, ...xn, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, snap: Boolean, vertical: Boolean, reverse: Boolean, color: String, markerLabelsClass: String, label: Boolean, labelColor: String, labelTextColor: String, labelAlways: Boolean, switchLabelSide: Boolean, markers: [Boolean, Number], markerLabels: [Boolean, Array, Object, Function], switchMarkerLabelsSide: Boolean, trackImg: String, trackColor: String, innerTrackImg: String, innerTrackColor: String, selectionColor: String, selectionImg: String, thumbSize: { type: String, default: "20px" }, trackSize: { type: String, default: "4px" }, disable: Boolean, readonly: Boolean, dense: Boolean, tabindex: [String, Number], thumbColor: String, thumbPath: { type: String, default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0" } }, th = ["pan", "update:modelValue", "change"];
function nh({ updateValue: e, updatePosition: t, getDragging: n, formAttrs: r }) {
  const { props: l, emit: a, slots: o, proxy: { $q: i } } = xe(), u = lt(l, i), c = ql(r), s = K(false), f = K(false), h = K(false), m = K(false), g = v(() => l.vertical === true ? "--v" : "--h"), w = v(() => "-" + (l.switchLabelSide === true ? "switched" : "standard")), x = v(() => l.vertical === true ? l.reverse === true : l.reverse !== (i.lang.rtl === true)), k = v(() => isNaN(l.innerMin) === true || l.innerMin < l.min ? l.min : l.innerMin), y = v(() => isNaN(l.innerMax) === true || l.innerMax > l.max ? l.max : l.innerMax), p = v(() => l.disable !== true && l.readonly !== true && k.value < y.value), b = v(() => {
    if (l.step === 0) return (_e2) => _e2;
    const oe = (String(l.step).trim().split(".")[1] || "").length;
    return (_e2) => parseFloat(_e2.toFixed(oe));
  }), C = v(() => l.step === 0 ? 1 : l.step), P = v(() => p.value === true ? l.tabindex || 0 : -1), O = v(() => l.max - l.min), H = v(() => y.value - k.value), B = v(() => be(k.value)), L = v(() => be(y.value)), N = v(() => l.vertical === true ? x.value === true ? "bottom" : "top" : x.value === true ? "right" : "left"), q = v(() => l.vertical === true ? "height" : "width"), R = v(() => l.vertical === true ? "width" : "height"), T = v(() => l.vertical === true ? "vertical" : "horizontal"), j = v(() => {
    const oe = { role: "slider", "aria-valuemin": k.value, "aria-valuemax": y.value, "aria-orientation": T.value, "data-step": l.step };
    return l.disable === true ? oe["aria-disabled"] = "true" : l.readonly === true && (oe["aria-readonly"] = "true"), oe;
  }), W = v(() => `q-slider q-slider${g.value} q-slider--${s.value === true ? "" : "in"}active inline no-wrap ` + (l.vertical === true ? "row" : "column") + (l.disable === true ? " disabled" : " q-slider--enabled" + (p.value === true ? " q-slider--editable" : "")) + (h.value === "both" ? " q-slider--focus" : "") + (l.label || l.labelAlways === true ? " q-slider--label" : "") + (l.labelAlways === true ? " q-slider--label-always" : "") + (u.value === true ? " q-slider--dark" : "") + (l.dense === true ? " q-slider--dense q-slider--dense" + g.value : ""));
  function U(oe) {
    const _e2 = "q-slider__" + oe;
    return `${_e2} ${_e2}${g.value} ${_e2}${g.value}${w.value}`;
  }
  function Z(oe) {
    const _e2 = "q-slider__" + oe;
    return `${_e2} ${_e2}${g.value}`;
  }
  const ae = v(() => {
    const oe = l.selectionColor || l.color;
    return "q-slider__selection absolute" + (oe !== void 0 ? ` text-${oe}` : "");
  }), ye = v(() => Z("markers") + " absolute overflow-hidden"), X = v(() => Z("track-container")), _ = v(() => U("pin")), D = v(() => U("label")), F = v(() => U("text-container")), me = v(() => U("marker-labels-container") + (l.markerLabelsClass !== void 0 ? ` ${l.markerLabelsClass}` : "")), $ = v(() => "q-slider__track relative-position no-outline" + (l.trackColor !== void 0 ? ` bg-${l.trackColor}` : "")), A = v(() => {
    const oe = { [R.value]: l.trackSize };
    return l.trackImg !== void 0 && (oe.backgroundImage = `url(${l.trackImg}) !important`), oe;
  }), Y = v(() => "q-slider__inner absolute" + (l.innerTrackColor !== void 0 ? ` bg-${l.innerTrackColor}` : "")), V = v(() => {
    const oe = L.value - B.value, _e2 = { [N.value]: `${100 * B.value}%`, [q.value]: oe === 0 ? "2px" : `${100 * oe}%` };
    return l.innerTrackImg !== void 0 && (_e2.backgroundImage = `url(${l.innerTrackImg}) !important`), _e2;
  });
  function ne(oe) {
    const { min: _e2, max: Ce, step: Oe } = l;
    let Re = _e2 + oe * (Ce - _e2);
    if (Oe > 0) {
      const Xe = (Re - k.value) % Oe;
      Re += (Math.abs(Xe) >= Oe / 2 ? (Xe < 0 ? -1 : 1) * Oe : 0) - Xe;
    }
    return Re = b.value(Re), dt(Re, k.value, y.value);
  }
  function be(oe) {
    return O.value === 0 ? 0 : (oe - l.min) / O.value;
  }
  function S(oe, _e2) {
    const Ce = tn(oe), Oe = l.vertical === true ? dt((Ce.top - _e2.top) / _e2.height, 0, 1) : dt((Ce.left - _e2.left) / _e2.width, 0, 1);
    return dt(x.value === true ? 1 - Oe : Oe, B.value, L.value);
  }
  const M = v(() => Sa(l.markers) === true ? l.markers : C.value), I = v(() => {
    const oe = [], _e2 = M.value, Ce = l.max;
    let Oe = l.min;
    do
      oe.push(Oe), Oe += _e2;
    while (Oe < Ce);
    return oe.push(Ce), oe;
  }), te = v(() => {
    const oe = ` ${dd}${g.value}-`;
    return dd + `${oe}${l.switchMarkerLabelsSide === true ? "switched" : "standard"}${oe}${x.value === true ? "rtl" : "ltr"}`;
  }), le = v(() => l.markerLabels === false ? null : se(l.markerLabels).map((oe, _e2) => ({ index: _e2, value: oe.value, label: oe.label || oe.value, classes: te.value + (oe.classes !== void 0 ? " " + oe.classes : ""), style: { ...ve(oe.value), ...oe.style || {} } }))), E = v(() => ({ markerList: le.value, markerMap: ce.value, classes: te.value, getStyle: ve })), ee = v(() => {
    const oe = H.value === 0 ? "2px" : 100 * M.value / H.value;
    return { ...V.value, backgroundSize: l.vertical === true ? `2px ${oe}%` : `${oe}% 2px` };
  });
  function se(oe) {
    if (oe === false) return null;
    if (oe === true) return I.value.map($y);
    if (typeof oe == "function") return I.value.map((Ce) => {
      const Oe = oe(Ce);
      return Lt(Oe) === true ? { ...Oe, value: Ce } : { value: Ce, label: Oe };
    });
    const _e2 = ({ value: Ce }) => Ce >= l.min && Ce <= l.max;
    return Array.isArray(oe) === true ? oe.map((Ce) => Lt(Ce) === true ? Ce : { value: Ce }).filter(_e2) : Object.keys(oe).map((Ce) => {
      const Oe = oe[Ce], Re = Number(Ce);
      return Lt(Oe) === true ? { ...Oe, value: Re } : { value: Re, label: Oe };
    }).filter(_e2);
  }
  function ve(oe) {
    return { [N.value]: `${100 * (oe - l.min) / O.value}%` };
  }
  const ce = v(() => {
    if (l.markerLabels === false) return null;
    const oe = {};
    return le.value.forEach((_e2) => {
      oe[_e2.value] = _e2;
    }), oe;
  });
  function re() {
    if (o["marker-label-group"] !== void 0) return o["marker-label-group"](E.value);
    const oe = o["marker-label"] || Py;
    return le.value.map((_e2) => oe({ marker: _e2, ...E.value }));
  }
  const Q = v(() => [[bn, ie, void 0, { [T.value]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
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
    Qs.includes(oe.keyCode) && e(true);
  }
  function De(oe) {
    if (l.vertical === true) return null;
    const _e2 = i.lang.rtl !== l.reverse ? 1 - oe : oe;
    return { transform: `translateX(calc(${2 * _e2 - 1} * ${l.thumbSize} / 2 + ${50 - 100 * _e2}%))` };
  }
  function ue(oe) {
    const _e2 = v(() => f.value === false && (h.value === oe.focusValue || h.value === "both") ? " q-slider--focus" : ""), Ce = v(() => `q-slider__thumb q-slider__thumb${g.value} q-slider__thumb${g.value}-${x.value === true ? "rtl" : "ltr"} absolute non-selectable` + _e2.value + (oe.thumbColor.value !== void 0 ? ` text-${oe.thumbColor.value}` : "")), Oe = v(() => ({ width: l.thumbSize, height: l.thumbSize, [N.value]: `${100 * oe.ratio.value}%`, zIndex: h.value === oe.focusValue ? 2 : void 0 })), Re = v(() => oe.labelColor.value !== void 0 ? ` text-${oe.labelColor.value}` : ""), Xe = v(() => De(oe.ratio.value)), it = v(() => "q-slider__text" + (oe.labelTextColor.value !== void 0 ? ` text-${oe.labelTextColor.value}` : ""));
    return () => {
      const kt = [d("svg", { class: "q-slider__thumb-shape absolute-full", viewBox: "0 0 20 20", "aria-hidden": "true" }, [d("path", { d: l.thumbPath })]), d("div", { class: "q-slider__focus-ring fit" })];
      return (l.label === true || l.labelAlways === true) && (kt.push(d("div", { class: _.value + " absolute fit no-pointer-events" + Re.value }, [d("div", { class: D.value, style: { minWidth: l.thumbSize } }, [d("div", { class: F.value, style: Xe.value }, [d("span", { class: it.value }, oe.label.value)])])])), l.name !== void 0 && l.disable !== true && c(kt, "push")), d("div", { class: Ce.value, style: Oe.value, ...oe.getNodeData() }, kt);
    };
  }
  function pe(oe, _e2, Ce, Oe) {
    const Re = [];
    l.innerTrackColor !== "transparent" && Re.push(d("div", { key: "inner", class: Y.value, style: V.value })), l.selectionColor !== "transparent" && Re.push(d("div", { key: "selection", class: ae.value, style: oe.value })), l.markers !== false && Re.push(d("div", { key: "marker", class: ye.value, style: ee.value })), Oe(Re);
    const Xe = [_n("div", { key: "trackC", class: X.value, tabindex: _e2.value, ...Ce.value }, [d("div", { class: $.value, style: A.value }, Re)], "slide", p.value, () => Q.value)];
    if (l.markerLabels !== false) {
      const it = l.switchMarkerLabelsSide === true ? "unshift" : "push";
      Xe[it](d("div", { key: "markerL", class: me.value }, re()));
    }
    return Xe;
  }
  return We(() => {
    document.removeEventListener("mouseup", Te, true);
  }), { state: { active: s, focus: h, preventFocus: f, dragging: m, editable: p, classes: W, tabindex: P, attributes: j, roundValueFn: b, keyStep: C, trackLen: O, innerMin: k, innerMinRatio: B, innerMax: y, innerMaxRatio: L, positionProp: N, sizeProp: q, isReversed: x }, methods: { onActivate: ke, onMobileClick: Me, onBlur: we, onKeyup: He, getContent: pe, getThumbRenderFn: ue, convertRatioToModel: ne, convertModelToRatio: be, getDraggingRatio: S } };
}
var Ly = () => ({}), vl = he({ name: "QSlider", props: { ...eh, modelValue: { required: true, default: null, validator: (e) => typeof e == "number" || e === null }, labelValue: [String, Number] }, emits: th, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = xe(), { state: r, methods: l } = nh({ updateValue: g, updatePosition: x, getDragging: w, formAttrs: Fa(e) }), a = K(null), o = K(0), i = K(0);
  function u() {
    i.value = e.modelValue === null ? r.innerMin.value : dt(e.modelValue, r.innerMin.value, r.innerMax.value);
  }
  ge(() => `${e.modelValue}|${r.innerMin.value}|${r.innerMax.value}`, u), u();
  const c = v(() => l.convertModelToRatio(i.value)), s = v(() => r.active.value === true ? o.value : c.value), f = v(() => {
    const p = { [r.positionProp.value]: `${100 * r.innerMinRatio.value}%`, [r.sizeProp.value]: `${100 * (s.value - r.innerMinRatio.value)}%` };
    return e.selectionImg !== void 0 && (p.backgroundImage = `url(${e.selectionImg}) !important`), p;
  }), h = l.getThumbRenderFn({ focusValue: true, getNodeData: Ly, ratio: s, label: v(() => e.labelValue !== void 0 ? e.labelValue : i.value), thumbColor: v(() => e.thumbColor || e.color), labelColor: v(() => e.labelColor), labelTextColor: v(() => e.labelTextColor) }), m = v(() => r.editable.value !== true ? {} : n.platform.is.mobile === true ? { onClick: l.onMobileClick } : { onMousedown: l.onActivate, onFocus: k, onBlur: l.onBlur, onKeydown: y, onKeyup: l.onKeyup });
  function g(p) {
    i.value !== e.modelValue && t("update:modelValue", i.value), p === true && t("change", i.value);
  }
  function w() {
    return a.value.getBoundingClientRect();
  }
  function x(p, b = r.dragging.value) {
    const C = l.getDraggingRatio(p, b);
    i.value = l.convertRatioToModel(C), o.value = e.snap !== true || e.step === 0 ? C : l.convertModelToRatio(i.value);
  }
  function k() {
    r.focus.value = true;
  }
  function y(p) {
    if (Qs.includes(p.keyCode) === false) return;
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
  const e = K(!rn.value);
  return e.value === false && ct(() => {
    e.value = true;
  }), { isHydrated: e };
}
var rh = typeof ResizeObserver < "u", fd = rh === true ? {} : { style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;", url: "about:blank" }, Wl = he({ name: "QResizeObserver", props: { debounce: { type: [String, Number], default: 100 } }, emits: ["resize"], setup(e, { emit: t }) {
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
    }), St;
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
      if (s.value === true) return d("object", { class: "q--avoid-card-border", style: fd.style, tabindex: -1, type: "text/html", data: fd.url, "aria-hidden": "true", onLoad: c });
    };
  }
} }), Ta = false;
if (!__QUASAR_SSR__) {
  const e = document.createElement("div");
  e.setAttribute("dir", "rtl"), Object.assign(e.style, { width: "1px", height: "1px", overflow: "auto" });
  const t = document.createElement("div");
  Object.assign(t.style, { width: "1000px", height: "1px" }), document.body.appendChild(e), e.appendChild(t), e.scrollLeft = -1e3, Ta = e.scrollLeft >= 0, e.remove();
}
function By(e, t, n) {
  const r = n === true ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${t === true ? r[0] : r[1]}${e ? ` text-${e}` : ""}`;
}
var Fy = ["left", "center", "right", "justify"], vd = he({ name: "QTabs", props: { modelValue: [Number, String], align: { type: String, default: "center", validator: (e) => Fy.includes(e) }, breakpoint: { type: [String, Number], default: 600 }, vertical: Boolean, shrink: Boolean, stretch: Boolean, activeClass: String, activeColor: String, activeBgColor: String, indicatorColor: String, leftIcon: String, rightIcon: String, outsideArrows: Boolean, mobileArrows: Boolean, switchIndicator: Boolean, narrowIndicator: Boolean, inlineLabel: Boolean, noCaps: Boolean, dense: Boolean, contentClass: String, "onUpdate:modelValue": [Function, Array] }, setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, { registerTick: a } = wr(), { registerTick: o } = wr(), { registerTick: i } = wr(), { registerTimeout: u, removeTimeout: c } = Zn(), { registerTimeout: s, removeTimeout: f } = Zn(), h = K(null), m = K(null), g = K(e.modelValue), w = K(false), x = K(true), k = K(false), y = K(false), p = [], b = K(0), C = K(false);
  let P = null, O = null, H;
  const B = v(() => ({ activeClass: e.activeClass, activeColor: e.activeColor, activeBgColor: e.activeBgColor, indicatorClass: By(e.indicatorColor, e.switchIndicator, e.vertical), narrowIndicator: e.narrowIndicator, inlineLabel: e.inlineLabel, noCaps: e.noCaps })), L = v(() => {
    const re = b.value, Q = g.value;
    for (let ie = 0; ie < re; ie++) if (p[ie].name.value === Q) return true;
    return false;
  }), N = v(() => `q-tabs__content--align-${w.value === true ? "left" : y.value === true ? "justify" : e.align}`), q = v(() => `q-tabs row no-wrap items-center q-tabs--${w.value === true ? "" : "not-"}scrollable q-tabs--${e.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${e.outsideArrows === true ? "outside" : "inside"} q-tabs--mobile-with${e.mobileArrows === true ? "" : "out"}-arrows` + (e.dense === true ? " q-tabs--dense" : "") + (e.shrink === true ? " col-shrink" : "") + (e.stretch === true ? " self-stretch" : "")), R = v(() => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + N.value + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), T = v(() => e.vertical === true ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" }), j = v(() => e.vertical !== true && l.lang.rtl === true), W = v(() => Ta === false && j.value === true);
  ge(j, _), ge(() => e.modelValue, (re) => {
    U({ name: re, setCurrent: true, skipEmit: true });
  }), ge(() => e.outsideArrows, Z);
  function U({ name: re, setCurrent: Q, skipEmit: ie }) {
    g.value !== re && (ie !== true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", re), (Q === true || e["onUpdate:modelValue"] === void 0) && (ye(g.value, re), g.value = re));
  }
  function Z() {
    a(() => {
      h.value && ae({ width: h.value.offsetWidth, height: h.value.offsetHeight });
    });
  }
  function ae(re) {
    if (T.value === void 0 || m.value === null) return;
    const Q = re[T.value.container], ie = Math.min(m.value[T.value.scroll], Array.prototype.reduce.call(m.value.children, (ke, Te) => ke + (Te[T.value.content] || 0), 0)), we = Q > 0 && ie > Q;
    w.value = we, we === true && o(_), y.value = Q < parseInt(e.breakpoint, 10);
  }
  function ye(re, Q) {
    const ie = re != null && re !== "" ? p.find((ke) => ke.name.value === re) : null, we = Q != null && Q !== "" ? p.find((ke) => ke.name.value === Q) : null;
    if (ce === true) ce = false;
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
    we && w.value === true && X(we.rootRef.value);
  }
  function X(re) {
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
    j.value === true ? (x.value = Math.ceil(ie + Q.width) < re.scrollWidth - 1, k.value = ie > 0) : (x.value = ie > 0, k.value = e.vertical === true ? Math.ceil(ie + Q.height) < re.scrollHeight : Math.ceil(ie + Q.width) < re.scrollWidth);
  }
  function D(re) {
    O !== null && clearInterval(O), O = setInterval(() => {
      V(re) === true && $();
    }, 5);
  }
  function F() {
    D(W.value === true ? Number.MAX_SAFE_INTEGER : 0);
  }
  function me() {
    D(W.value === true ? 0 : Number.MAX_SAFE_INTEGER);
  }
  function $() {
    O !== null && (clearInterval(O), O = null);
  }
  function A(re, Q) {
    const ie = Array.prototype.filter.call(m.value.children, (He) => He === Q || He.matches && He.matches(".q-tab.q-focusable") === true), we = ie.length;
    if (we === 0) return;
    if (re === 36) return X(ie[0]), ie[0].focus(), true;
    if (re === 35) return X(ie[we - 1]), ie[we - 1].focus(), true;
    const ke = re === (e.vertical === true ? 38 : 37), Te = re === (e.vertical === true ? 40 : 39), Me = ke === true ? -1 : Te === true ? 1 : void 0;
    if (Me !== void 0) {
      const He = j.value === true ? -1 : 1, De = ie.indexOf(Q) + Me * He;
      return De >= 0 && De < we && (X(ie[De]), ie[De].focus({ preventScroll: true })), true;
    }
  }
  const Y = v(() => W.value === true ? { get: (re) => Math.abs(re.scrollLeft), set: (re, Q) => {
    re.scrollLeft = -Q;
  } } : e.vertical === true ? { get: (re) => re.scrollTop, set: (re, Q) => {
    re.scrollTop = Q;
  } } : { get: (re) => re.scrollLeft, set: (re, Q) => {
    re.scrollLeft = Q;
  } });
  function V(re) {
    const Q = m.value, { get: ie, set: we } = Y.value;
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
    const ie = p.filter((Me) => {
      var _a3;
      return ((_a3 = Me.routeData) == null ? void 0 : _a3.hasRouterLink.value) === true;
    }), { hash: we, query: ke } = r.$route, Te = Object.keys(ke).length;
    for (const Me of ie) {
      const He = Me.routeData.exact.value === true;
      if (Me.routeData[He === true ? "linkIsExactActive" : "linkIsActive"].value !== true) continue;
      const { hash: De, query: ue, matched: pe, href: oe } = Me.routeData.resolvedLink.value, _e2 = Object.keys(ue).length;
      if (He === true) {
        if (De !== we || _e2 !== Te || ne(ke, ue) === false) continue;
        re = Me.name.value;
        break;
      }
      if (De !== "" && De !== we || _e2 !== 0 && ne(ue, ke) === false) continue;
      const Ce = { matchedLen: pe.length, queryDiff: Te - _e2, hrefLen: oe.length - De.length };
      if (Ce.matchedLen > Q.matchedLen) {
        re = Me.name.value, Q = Ce;
        continue;
      } else if (Ce.matchedLen !== Q.matchedLen) continue;
      if (Ce.queryDiff < Q.queryDiff) re = Me.name.value, Q = Ce;
      else if (Ce.queryDiff !== Q.queryDiff) continue;
      Ce.hrefLen > Q.hrefLen && (re = Me.name.value, Q = Ce);
    }
    if (re === null && p.some((Me) => Me.routeData === void 0 && Me.name.value === g.value) === true) {
      ce = false;
      return;
    }
    U({ name: re, setCurrent: true });
  }
  function S(re) {
    if (c(), C.value !== true && h.value !== null && re.target && typeof re.target.closest == "function") {
      const Q = re.target.closest(".q-tab");
      Q && h.value.contains(Q) === true && (C.value = true, w.value === true && X(Q));
    }
  }
  function M() {
    u(() => {
      C.value = false;
    }, 30);
  }
  function I() {
    ee.avoidRouteWatcher === false ? s(be) : f();
  }
  function te() {
    if (H === void 0) {
      const re = ge(() => r.$route.fullPath, I);
      H = () => {
        re(), H = void 0;
      };
    }
  }
  function le(re) {
    p.push(re), b.value++, Z(), re.routeData === void 0 || r.$route === void 0 ? s(() => {
      if (w.value === true) {
        const Q = g.value, ie = Q != null && Q !== "" ? p.find((we) => we.name.value === Q) : null;
        ie && X(ie.rootRef.value);
      }
    }) : (te(), re.routeData.hasRouterLink.value === true && I());
  }
  function E(re) {
    p.splice(p.indexOf(re), 1), b.value--, Z(), H !== void 0 && re.routeData !== void 0 && (p.every((Q) => Q.routeData === void 0) === true && H(), I());
  }
  const ee = { currentModel: g, tabProps: B, hasFocus: C, hasActiveTab: L, registerTab: le, unregisterTab: E, verifyRouteModel: I, updateModel: U, onKbdNavigate: A, avoidRouteWatcher: false };
  gn(gm, ee);
  function se() {
    P !== null && clearTimeout(P), $(), H == null ? void 0 : H();
  }
  let ve, ce;
  return We(se), Dn(() => {
    ve = H !== void 0, se();
  }), kl(() => {
    ve === true && (te(), ce = true, I()), Z();
  }), () => d("div", { ref: h, class: q.value, role: "tablist", onFocusin: S, onFocusout: M }, [d(Wl, { onResize: ae }), d("div", { ref: m, class: R.value, onScroll: _ }, Pe(t.default)), d(et, { class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (x.value === true ? "" : " q-tabs__arrow--faded"), name: e.leftIcon || l.iconSet.tabs[e.vertical === true ? "up" : "left"], onMousedownPassive: F, onTouchstartPassive: F, onMouseupPassive: $, onMouseleavePassive: $, onTouchendPassive: $ }), d(et, { class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (k.value === true ? "" : " q-tabs__arrow--faded"), name: e.rightIcon || l.iconSet.tabs[e.vertical === true ? "down" : "right"], onMousedownPassive: me, onTouchstartPassive: me, onMouseupPassive: $, onMouseleavePassive: $, onTouchendPassive: $ })]);
} }), Oy = 0, ah = ["click", "keydown"], oh = { icon: String, label: [Number, String], alert: [Boolean, String], alertIcon: String, name: { type: [Number, String], default: () => `t_${Oy++}` }, noCaps: Boolean, tabindex: [String, Number], disable: Boolean, contentClass: String, ripple: { type: [Boolean, Object], default: true } };
function ih(e, t, n, r) {
  const l = Mt(gm, ot);
  if (l === ot) return console.error("QTab/QRouteTab component needs to be child of QTabs"), ot;
  const { proxy: a } = xe(), o = K(null), i = K(null), u = K(null), c = v(() => e.disable === true || e.ripple === false ? false : Object.assign({ keyCodes: [13, 32], early: true }, e.ripple === true ? {} : e.ripple)), s = v(() => l.currentModel.value === e.name), f = v(() => "q-tab relative-position self-stretch flex flex-center text-center" + (s.value === true ? " q-tab--active" + (l.tabProps.value.activeClass ? " " + l.tabProps.value.activeClass : "") + (l.tabProps.value.activeColor ? ` text-${l.tabProps.value.activeColor}` : "") + (l.tabProps.value.activeBgColor ? ` bg-${l.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (e.icon && e.label && l.tabProps.value.inlineLabel === false ? " q-tab--full" : "") + (e.noCaps === true || l.tabProps.value.noCaps === true ? " q-tab--no-caps" : "") + (e.disable === true ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (r !== void 0 ? r.linkClass.value : "")), h = v(() => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + (l.tabProps.value.inlineLabel === true ? "row no-wrap q-tab__content--inline" : "column") + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), m = v(() => e.disable === true || l.hasFocus.value === true || s.value === false && l.hasActiveTab.value === true ? -1 : e.tabindex || 0);
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
        let O;
        const H = P.to === void 0 || qn(P.to, e.to) === true ? l.avoidRouteWatcher = ka() : null;
        return r.navigateToRouterLink(p, { ...P, returnRouterError: true }).catch((B) => {
          O = B;
        }).then((B) => {
          var _a4;
          if (H === l.avoidRouteWatcher && (l.avoidRouteWatcher = false, O === void 0 && (B === void 0 || ((_a4 = B.message) == null ? void 0 : _a4.startsWith("Avoided redundant navigation")) === true) && l.updateModel({ name: e.name })), P.returnRouterError === true) return O !== void 0 ? Promise.reject(O) : B;
        });
      };
      n("click", p, C), p.defaultPrevented !== true && C();
      return;
    }
    n("click", p);
  }
  function w(p) {
    yn(p, [13, 32]) ? g(p, true) : Zl(p) !== true && p.keyCode >= 35 && p.keyCode <= 40 && p.altKey !== true && p.metaKey !== true && l.onKbdNavigate(p.keyCode, a.$el) === true && je(p), n("keydown", p);
  }
  function x() {
    const p = l.tabProps.value.narrowIndicator, b = [], C = d("div", { ref: u, class: ["q-tab__indicator", l.tabProps.value.indicatorClass] });
    e.icon !== void 0 && b.push(d(et, { class: "q-tab__icon", name: e.icon })), e.label !== void 0 && b.push(d("div", { class: "q-tab__label" }, e.label)), e.alert !== false && b.push(e.alertIcon !== void 0 ? d(et, { class: "q-tab__alert-icon", color: e.alert !== true ? e.alert : void 0, name: e.alertIcon }) : d("div", { class: "q-tab__alert" + (e.alert !== true ? ` text-${e.alert}` : "") })), p === true && b.push(C);
    const P = [d("div", { class: "q-focus-helper", tabindex: -1, ref: o }), d("div", { class: h.value }, qt(t.default, b))];
    return p === false && P.push(C), P;
  }
  const k = { name: v(() => e.name), rootRef: i, tabIndicatorRef: u, routeData: r };
  We(() => {
    l.unregisterTab(k);
  }), ct(() => {
    l.registerTab(k);
  });
  function y(p, b) {
    const C = { ref: i, class: f.value, tabindex: m.value, role: "tab", "aria-selected": s.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: g, onKeydown: w, ...b };
    return cn(d(p, C, x()), [[fi, c.value]]);
  }
  return { renderTab: y, $tabs: l };
}
var Ir = he({ name: "QTab", props: oh, emits: ah, setup(e, { slots: t, emit: n }) {
  const { renderTab: r } = ih(e, t, n);
  return () => r("div");
} }), Vy = he({ name: "QTabPanels", props: { ...Ds, ...nt }, emits: Is, setup(e, { slots: t }) {
  const n = xe(), r = lt(e, n.proxy.$q), { updatePanelsList: l, getPanelContent: a, panelDirectives: o } = zs(), i = v(() => "q-tab-panels q-panel-parent" + (r.value === true ? " q-tab-panels--dark q-dark" : ""));
  return () => (l(t), _n("div", { class: i.value }, a(), "pan", e.swipeable, () => o.value));
} }), Qi = he({ name: "QTabPanel", props: Vs, setup(e, { slots: t }) {
  return () => d("div", { class: "q-tab-panel", role: "tabpanel" }, Pe(t.default));
} }), md = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, hd = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, gd = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, Ka = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, Wa = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, fo = { date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e), time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e), fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e), timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e), email: (e) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e), hexColor: (e) => md.test(e), hexaColor: (e) => hd.test(e), hexOrHexaColor: (e) => gd.test(e), rgbColor: (e) => Ka.test(e), rgbaColor: (e) => Wa.test(e), rgbOrRgbaColor: (e) => Ka.test(e) || Wa.test(e), hexOrRgbColor: (e) => md.test(e) || Ka.test(e), hexaOrRgbaColor: (e) => hd.test(e) || Wa.test(e), anyColor: (e) => gd.test(e) || Ka.test(e) || Wa.test(e) }, Dy = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;
function bd({ r: e, g: t, b: n, a: r }) {
  const l = r !== void 0;
  if (e = Math.round(e), t = Math.round(t), n = Math.round(n), e > 255 || t > 255 || n > 255 || l && r > 100) throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");
  return r = l ? (Math.round(255 * r / 100) | 256).toString(16).slice(1) : "", "#" + (n | t << 8 | e << 16 | 1 << 24).toString(16).slice(1) + r;
}
function pd({ r: e, g: t, b: n, a: r }) {
  return `rgb${r !== void 0 ? "a" : ""}(${e},${t},${n}${r !== void 0 ? "," + r / 100 : ""})`;
}
function uh(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  e = e.replace(/^#/, ""), e.length === 3 ? e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] : e.length === 4 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
  const t = parseInt(e, 16);
  return e.length > 6 ? { r: t >> 24 & 255, g: t >> 16 & 255, b: t >> 8 & 255, a: Math.round((t & 255) / 2.55) } : { r: t >> 16, g: t >> 8 & 255, b: t & 255 };
}
function yd({ h: e, s: t, v: n, a: r }) {
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
var zy = ["rgb(255,204,204)", "rgb(255,230,204)", "rgb(255,255,204)", "rgb(204,255,204)", "rgb(204,255,230)", "rgb(204,255,255)", "rgb(204,230,255)", "rgb(204,204,255)", "rgb(230,204,255)", "rgb(255,204,255)", "rgb(255,153,153)", "rgb(255,204,153)", "rgb(255,255,153)", "rgb(153,255,153)", "rgb(153,255,204)", "rgb(153,255,255)", "rgb(153,204,255)", "rgb(153,153,255)", "rgb(204,153,255)", "rgb(255,153,255)", "rgb(255,102,102)", "rgb(255,179,102)", "rgb(255,255,102)", "rgb(102,255,102)", "rgb(102,255,179)", "rgb(102,255,255)", "rgb(102,179,255)", "rgb(102,102,255)", "rgb(179,102,255)", "rgb(255,102,255)", "rgb(255,51,51)", "rgb(255,153,51)", "rgb(255,255,51)", "rgb(51,255,51)", "rgb(51,255,153)", "rgb(51,255,255)", "rgb(51,153,255)", "rgb(51,51,255)", "rgb(153,51,255)", "rgb(255,51,255)", "rgb(255,0,0)", "rgb(255,128,0)", "rgb(255,255,0)", "rgb(0,255,0)", "rgb(0,255,128)", "rgb(0,255,255)", "rgb(0,128,255)", "rgb(0,0,255)", "rgb(128,0,255)", "rgb(255,0,255)", "rgb(245,0,0)", "rgb(245,123,0)", "rgb(245,245,0)", "rgb(0,245,0)", "rgb(0,245,123)", "rgb(0,245,245)", "rgb(0,123,245)", "rgb(0,0,245)", "rgb(123,0,245)", "rgb(245,0,245)", "rgb(214,0,0)", "rgb(214,108,0)", "rgb(214,214,0)", "rgb(0,214,0)", "rgb(0,214,108)", "rgb(0,214,214)", "rgb(0,108,214)", "rgb(0,0,214)", "rgb(108,0,214)", "rgb(214,0,214)", "rgb(163,0,0)", "rgb(163,82,0)", "rgb(163,163,0)", "rgb(0,163,0)", "rgb(0,163,82)", "rgb(0,163,163)", "rgb(0,82,163)", "rgb(0,0,163)", "rgb(82,0,163)", "rgb(163,0,163)", "rgb(92,0,0)", "rgb(92,46,0)", "rgb(92,92,0)", "rgb(0,92,0)", "rgb(0,92,46)", "rgb(0,92,92)", "rgb(0,46,92)", "rgb(0,0,92)", "rgb(46,0,92)", "rgb(92,0,92)", "rgb(255,255,255)", "rgb(205,205,205)", "rgb(178,178,178)", "rgb(153,153,153)", "rgb(127,127,127)", "rgb(102,102,102)", "rgb(76,76,76)", "rgb(51,51,51)", "rgb(25,25,25)", "rgb(0,0,0)"], _d = "M5 5 h10 v10 h-10 v-10 z", Ny = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==";
he({ name: "QColor", props: { ...nt, ...xn, modelValue: String, defaultValue: String, defaultView: { type: String, default: "spectrum", validator: (e) => ["spectrum", "tune", "palette"].includes(e) }, formatModel: { type: String, default: "auto", validator: (e) => ["auto", "hex", "rgb", "hexa", "rgba"].includes(e) }, palette: Array, noHeader: Boolean, noHeaderTabs: Boolean, noFooter: Boolean, square: Boolean, flat: Boolean, bordered: Boolean, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), { $q: r } = n, l = lt(e, r), { getCache: a } = Oa(), o = K(null), i = K(null), u = v(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("hex") !== -1), c = v(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1), s = K(e.formatModel === "auto" ? e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#") ? "hex" : "rgb" : e.formatModel.startsWith("hex") ? "hex" : "rgb"), f = K(e.defaultView), h = K(q(e.modelValue || e.defaultValue)), m = v(() => e.disable !== true && e.readonly !== true), g = v(() => e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#")), w = v(() => u.value !== null ? u.value : g.value), x = v(() => ({ type: "hidden", name: e.name, value: h.value[w.value === true ? "hex" : "rgb"] })), k = ql(x), y = v(() => c.value !== null ? c.value : h.value.a !== void 0), p = v(() => ({ backgroundColor: h.value.rgb || "#000" })), b = v(() => `q-color-picker__header-content q-color-picker__header-content--${(h.value.a !== void 0 && h.value.a < 65 ? true : Iy(h.value) > 0.4) ? "light" : "dark"}`), C = v(() => ({ background: `hsl(${h.value.h},100%,50%)` })), P = v(() => ({ top: `${100 - h.value.v}%`, [r.lang.rtl === true ? "right" : "left"]: `${h.value.s}%` })), O = v(() => e.palette !== void 0 && e.palette.length !== 0 ? e.palette : zy), H = v(() => "q-color-picker" + (e.bordered === true ? " q-color-picker--bordered" : "") + (e.square === true ? " q-color-picker--square no-border-radius" : "") + (e.flat === true ? " q-color-picker--flat no-shadow" : "") + (e.disable === true ? " disabled" : "") + (l.value === true ? " q-color-picker--dark q-dark" : "")), B = v(() => e.disable === true ? { "aria-disabled": "true" } : {}), L = v(() => [[bn, ae, void 0, { prevent: true, stop: true, mouse: true }]]);
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
    h.value.hex = bd(S), h.value.rgb = pd(S), h.value.r = S.r, h.value.g = S.g, h.value.b = S.b, h.value.a = S.a;
    const I = h.value[w.value === true ? "hex" : "rgb"];
    t("update:modelValue", I), M === true && t("change", I);
  }
  function q(S) {
    const M = c.value !== void 0 ? c.value : e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1;
    if (typeof S != "string" || S.length === 0 || fo.anyColor(S.replace(/ /g, "")) !== true) return { h: 0, s: 0, v: 0, r: 0, g: 0, b: 0, a: M === true ? 100 : void 0, hex: void 0, rgb: void 0 };
    const I = sh(S);
    return M === true && I.a === void 0 && (I.a = 100), I.hex = bd(I), I.rgb = pd(I), Object.assign(I, Ki(I));
  }
  function R(S, M, I) {
    const te = o.value;
    if (te === null) return;
    const le = te.clientWidth, E = te.clientHeight, ee = te.getBoundingClientRect();
    let se = Math.min(le, Math.max(0, S - ee.left));
    r.lang.rtl === true && (se = le - se);
    const ve = Math.min(E, Math.max(0, M - ee.top)), ce = Math.round(100 * se / le), re = Math.round(100 * Math.max(0, Math.min(1, -(ve / E) + 1))), Q = yd({ h: h.value.h, s: ce, v: re, a: y.value === true ? h.value.a : void 0 });
    h.value.s = ce, h.value.v = re, N(Q, I);
  }
  function T(S, M) {
    const I = Math.round(S), te = yd({ h: I, s: h.value.s, v: h.value.v, a: y.value === true ? h.value.a : void 0 });
    h.value.h = I, N(te, M);
  }
  function j(S) {
    T(S, true);
  }
  function W(S, M, I, te, le) {
    if (te !== void 0 && xt(te), !/^[0-9]+$/.test(S)) {
      le === true && n.$forceUpdate();
      return;
    }
    const E = Math.floor(Number(S));
    if (E < 0 || E > I) {
      le === true && n.$forceUpdate();
      return;
    }
    const ee = { r: M === "r" ? E : h.value.r, g: M === "g" ? E : h.value.g, b: M === "b" ? E : h.value.b, a: y.value === true ? M === "a" ? E : h.value.a : void 0 };
    if (M !== "a") {
      const se = Ki(ee);
      h.value.h = se.h, h.value.s = se.s, h.value.v = se.v;
    }
    if (N(ee, le), le !== true && (te == null ? void 0 : te.target.selectionEnd) !== void 0) {
      const se = te.target.selectionEnd;
      Qe(() => {
        te.target.setSelectionRange(se, se);
      });
    }
  }
  function U(S, M) {
    let I;
    const te = S.target.value;
    if (xt(S), s.value === "hex") {
      if (te.length !== (y.value === true ? 9 : 7) || !/^#[0-9A-Fa-f]+$/.test(te)) return true;
      I = uh(te);
    } else {
      let E;
      if (te.endsWith(")")) if (y.value !== true && te.startsWith("rgb(")) {
        if (E = te.substring(4, te.length - 1).split(",").map((ee) => parseInt(ee, 10)), E.length !== 3 || !/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(te)) return true;
      } else if (y.value === true && te.startsWith("rgba(")) {
        if (E = te.substring(5, te.length - 1).split(","), E.length !== 4 || !/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(te)) return true;
        for (let se = 0; se < 3; se++) {
          const ve = parseInt(E[se], 10);
          if (ve < 0 || ve > 255) return true;
          E[se] = ve;
        }
        const ee = parseFloat(E[3]);
        if (ee < 0 || ee > 1) return true;
        E[3] = ee;
      } else return true;
      else return true;
      if (E[0] < 0 || E[0] > 255 || E[1] < 0 || E[1] > 255 || E[2] < 0 || E[2] > 255 || y.value === true && (E[3] < 0 || E[3] > 1)) return true;
      I = { r: E[0], g: E[1], b: E[2], a: y.value === true ? E[3] * 100 : void 0 };
    }
    const le = Ki(I);
    if (h.value.h = le.h, h.value.s = le.s, h.value.v = le.v, N(I, M), M !== true) {
      const E = S.target.selectionEnd;
      Qe(() => {
        S.target.setSelectionRange(E, E);
      });
    }
  }
  function Z(S) {
    const M = q(S), I = { r: M.r, g: M.g, b: M.b, a: M.a };
    I.a === void 0 && (I.a = h.value.a), h.value.h = M.h, h.value.s = M.s, h.value.v = M.v, N(I, true);
  }
  function ae(S) {
    S.isFinal ? R(S.position.left, S.position.top, true) : ye(S);
  }
  const ye = qm((S) => {
    R(S.position.left, S.position.top);
  }, 20);
  function X(S) {
    R(S.pageX - window.pageXOffset, S.pageY - window.pageYOffset, true);
  }
  function _(S) {
    R(S.pageX - window.pageXOffset, S.pageY - window.pageYOffset);
  }
  function D(S) {
    i.value !== null && (i.value.$el.style.opacity = S ? 1 : 0);
  }
  function F(S) {
    s.value = S;
  }
  function me() {
    const S = [];
    return e.noHeaderTabs !== true && S.push(d(vd, { class: "q-color-picker__header-tabs", modelValue: s.value, dense: true, align: "justify", "onUpdate:modelValue": F }, () => [d(Ir, { label: "HEX" + (y.value === true ? "A" : ""), name: "hex", ripple: false }), d(Ir, { label: "RGB" + (y.value === true ? "A" : ""), name: "rgb", ripple: false })])), S.push(d("div", { class: "q-color-picker__header-banner row flex-center no-wrap" }, [d("input", { class: "fit", value: h.value[s.value], ...m.value !== true ? { readonly: true } : {}, ...a("topIn", { onInput: (M) => {
      D(U(M) === true);
    }, onChange: xt, onBlur: (M) => {
      U(M, true) === true && n.$forceUpdate(), D(false);
    } }) }), d(et, { ref: i, class: "q-color-picker__error-icon absolute no-pointer-events", name: r.iconSet.type.negative })])), d("div", { class: "q-color-picker__header relative-position overflow-hidden" }, [d("div", { class: "q-color-picker__header-bg absolute-full" }), d("div", { class: b.value, style: p.value }, S)]);
  }
  function $() {
    return d(Vy, { modelValue: f.value, animated: true }, () => [d(Qi, { class: "q-color-picker__spectrum-tab overflow-hidden", name: "spectrum" }, V), d(Qi, { class: "q-pa-md q-color-picker__tune-tab", name: "tune" }, ne), d(Qi, { class: "q-color-picker__palette-tab", name: "palette" }, be)]);
  }
  function A(S) {
    f.value = S;
  }
  function Y() {
    return d("div", { class: "q-color-picker__footer relative-position overflow-hidden" }, [d(vd, { class: "absolute-full", modelValue: f.value, dense: true, align: "justify", "onUpdate:modelValue": A }, () => [d(Ir, { icon: r.iconSet.colorPicker.spectrum, name: "spectrum", ripple: false }), d(Ir, { icon: r.iconSet.colorPicker.tune, name: "tune", ripple: false }), d(Ir, { icon: r.iconSet.colorPicker.palette, name: "palette", ripple: false })])]);
  }
  function V() {
    const S = { ref: o, class: "q-color-picker__spectrum non-selectable relative-position cursor-pointer" + (m.value !== true ? " readonly" : ""), style: C.value, ...m.value === true ? { onClick: X, onMousedown: _ } : {} }, M = [d("div", { style: { paddingBottom: "100%" } }), d("div", { class: "q-color-picker__spectrum-white absolute-full" }), d("div", { class: "q-color-picker__spectrum-black absolute-full" }), d("div", { class: "absolute", style: P.value }, [h.value.hex !== void 0 ? d("div", { class: "q-color-picker__spectrum-circle" }) : null])], I = [d(vl, { class: "q-color-picker__hue non-selectable", modelValue: h.value.h, min: 0, max: 360, trackSize: "8px", innerTrackColor: "transparent", selectionColor: "transparent", readonly: m.value !== true, thumbPath: _d, "onUpdate:modelValue": T, onChange: j })];
    return y.value === true && I.push(d(vl, { class: "q-color-picker__alpha non-selectable", modelValue: h.value.a, min: 0, max: 100, trackSize: "8px", trackColor: "white", innerTrackColor: "transparent", selectionColor: "transparent", trackImg: Ny, readonly: m.value !== true, hideSelection: true, thumbPath: _d, ...a("alphaSlide", { "onUpdate:modelValue": (te) => W(te, "a", 100), onChange: (te) => W(te, "a", 100, void 0, true) }) })), [_n("div", S, M, "spec", m.value, () => L.value), d("div", { class: "q-color-picker__sliders" }, I)];
  }
  function ne() {
    return [d("div", { class: "row items-center no-wrap" }, [d("div", "R"), d(vl, { modelValue: h.value.r, min: 0, max: 255, color: "red", dark: l.value, readonly: m.value !== true, ...a("rSlide", { "onUpdate:modelValue": (S) => W(S, "r", 255), onChange: (S) => W(S, "r", 255, void 0, true) }) }), d("input", { value: h.value.r, maxlength: 3, readonly: m.value !== true, onChange: xt, ...a("rIn", { onInput: (S) => W(S.target.value, "r", 255, S), onBlur: (S) => W(S.target.value, "r", 255, S, true) }) })]), d("div", { class: "row items-center no-wrap" }, [d("div", "G"), d(vl, { modelValue: h.value.g, min: 0, max: 255, color: "green", dark: l.value, readonly: m.value !== true, ...a("gSlide", { "onUpdate:modelValue": (S) => W(S, "g", 255), onChange: (S) => W(S, "g", 255, void 0, true) }) }), d("input", { value: h.value.g, maxlength: 3, readonly: m.value !== true, onChange: xt, ...a("gIn", { onInput: (S) => W(S.target.value, "g", 255, S), onBlur: (S) => W(S.target.value, "g", 255, S, true) }) })]), d("div", { class: "row items-center no-wrap" }, [d("div", "B"), d(vl, { modelValue: h.value.b, min: 0, max: 255, color: "blue", readonly: m.value !== true, dark: l.value, ...a("bSlide", { "onUpdate:modelValue": (S) => W(S, "b", 255), onChange: (S) => W(S, "b", 255, void 0, true) }) }), d("input", { value: h.value.b, maxlength: 3, readonly: m.value !== true, onChange: xt, ...a("bIn", { onInput: (S) => W(S.target.value, "b", 255, S), onBlur: (S) => W(S.target.value, "b", 255, S, true) }) })]), y.value === true ? d("div", { class: "row items-center no-wrap" }, [d("div", "A"), d(vl, { modelValue: h.value.a, color: "grey", readonly: m.value !== true, dark: l.value, ...a("aSlide", { "onUpdate:modelValue": (S) => W(S, "a", 100), onChange: (S) => W(S, "a", 100, void 0, true) }) }), d("input", { value: h.value.a, maxlength: 3, readonly: m.value !== true, onChange: xt, ...a("aIn", { onInput: (S) => W(S.target.value, "a", 100, S), onBlur: (S) => W(S.target.value, "a", 100, S, true) }) })]) : null];
  }
  function be() {
    const S = (M) => d("div", { class: "q-color-picker__cube col-auto", style: { backgroundColor: M }, ...m.value === true ? a("palette#" + M, { onClick: () => {
      Z(M);
    } }) : {} });
    return [d("div", { class: "row items-center q-color-picker__palette-rows" + (m.value === true ? " q-color-picker__palette-rows--editable" : "") }, O.value.map(S))];
  }
  return () => {
    const S = [$()];
    return e.name !== void 0 && e.disable !== true && k(S, "push"), e.noHeader !== true && S.unshift(me()), e.noFooter !== true && S.push(Y()), d("div", { class: H.value, ...B.value }, S);
  };
} });
var gl = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
function Hy(e, t, n) {
  return Object.prototype.toString.call(e) === "[object Date]" && (n = e.getDate(), t = e.getMonth() + 1, e = e.getFullYear()), Ky(Ks(e, t, n));
}
function wd(e, t, n) {
  return dh(Qy(e, t, n));
}
function jy(e) {
  return Uy(e) === 0;
}
function vo(e, t) {
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
  return Ks(r.gy, 3, r.march) + (t - 1) * 31 - _t(t, 7) * (t - 7) + n - 1;
}
function Ky(e) {
  const t = dh(e).gy;
  let n = t - 621, r, l, a;
  const o = ch(n, false), i = Ks(t, 3, o.march);
  if (a = e - i, a >= 0) {
    if (a <= 185) return l = 1 + _t(a, 31), r = un(a, 31) + 1, { jy: n, jm: l, jd: r };
    a -= 186;
  } else n -= 1, a += 179, o.leap === 1 && (a += 1);
  return l = 7 + _t(a, 30), r = un(a, 30) + 1, { jy: n, jm: l, jd: r };
}
function Ks(e, t, n) {
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
var mh = 864e5, Yy = 36e5, Ku = 6e4, hh = "YYYY-MM-DDTHH:mm:ss.SSSZ", Xy = /\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g, Gy = /(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g, Wi = {};
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
  return e !== void 0 ? e : t !== void 0 ? t.date : Bu.date;
}
function xd(e, t = "") {
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
      const m = r !== "persian" ? new Date(a.year, a.month, 0).getDate() : vo(a.year, a.month);
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
function Ya(e, t, n) {
  return (e.getTime() - e.getTimezoneOffset() * Ku - (t.getTime() - t.getTimezoneOffset() * Ku)) / n;
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
      return Ya(Kn(r, "day"), Kn(l, "day"), mh);
    case "hours":
    case "hour":
      return Ya(Kn(r, "hour"), Kn(l, "hour"), Yy);
    case "minutes":
    case "minute":
      return Ya(Kn(r, "minute"), Kn(l, "minute"), Ku);
    case "seconds":
    case "second":
      return Ya(Kn(r, "second"), Kn(l, "second"), 1e3);
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
var Sd = { YY(e, t, n) {
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
  return xd(l, ":");
}, ZZ(e, t, n, r) {
  const l = r ?? e.getTimezoneOffset();
  return xd(l);
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
  return t.replace(Xy, (i, u) => i in Sd ? Sd[i](a, o, r, l) : u === void 0 ? i : u.split("\\]").join("]"));
}
var Hn = 20, Jy = ["Calendar", "Years", "Months"], Cd = (e) => Jy.includes(e), Gi = (e) => /^-?[\d]+\/[0-1]\d$/.test(e), or = " \u2014 ";
function rl(e) {
  return e.year + "/" + at(e.month);
}
he({ name: "QDate", props: { ...No, ...xn, ...nt, modelValue: { required: true, validator: (e) => typeof e == "string" || Array.isArray(e) === true || Object(e) === e || e === null }, multiple: Boolean, range: Boolean, title: String, subtitle: String, mask: { ...No.mask, default: "YYYY/MM/DD" }, defaultYearMonth: { type: String, validator: Gi }, yearsInMonthView: Boolean, events: [Array, Function], eventColor: [String, Function], emitImmediately: Boolean, options: [Array, Function], navigationMinYearMonth: { type: String, validator: Gi }, navigationMaxYearMonth: { type: String, validator: Gi }, noUnset: Boolean, firstDayOfWeek: [String, Number], todayBtn: Boolean, minimal: Boolean, defaultView: { type: String, default: "Calendar", validator: Cd } }, emits: [...fh, "rangeStart", "rangeEnd", "navigation"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = lt(e, l), { getCache: o } = Oa(), { tabindex: i, headerClass: u, getLocale: c, getCurrentDate: s } = vh(e, l);
  let f;
  const h = Fa(e), m = ql(h), g = K(null), w = K(He()), x = K(c()), k = v(() => He()), y = v(() => c()), p = v(() => s()), b = K(ue(w.value, x.value)), C = K(e.defaultView), P = v(() => l.lang.rtl === true ? "right" : "left"), O = K(P.value), H = K(P.value), B = b.value.year, L = K(B - B % Hn - (B < 0 ? Hn : 0)), N = K(null), q = v(() => {
    const z = e.landscape === true ? "landscape" : "portrait";
    return `q-date q-date--${z} q-date--${z}-${e.minimal === true ? "minimal" : "standard"}` + (a.value === true ? " q-date--dark q-dark" : "") + (e.bordered === true ? " q-date--bordered" : "") + (e.square === true ? " q-date--square no-border-radius" : "") + (e.flat === true ? " q-date--flat no-shadow" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-date--readonly" : "");
  }), R = v(() => e.color || "primary"), T = v(() => e.textColor || "white"), j = v(() => e.emitImmediately === true && e.multiple !== true && e.range !== true), W = v(() => Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue !== null && e.modelValue !== void 0 ? [e.modelValue] : []), U = v(() => W.value.filter((z) => typeof z == "string").map((z) => De(z, w.value, x.value)).filter((z) => z.dateHash !== null && z.day !== null && z.month !== null && z.year !== null)), Z = v(() => {
    const z = (G) => De(G, w.value, x.value);
    return W.value.filter((G) => Lt(G) === true && G.from !== void 0 && G.to !== void 0).map((G) => ({ from: z(G.from), to: z(G.to) })).filter((G) => G.from.dateHash !== null && G.to.dateHash !== null && G.from.dateHash < G.to.dateHash);
  }), ae = v(() => e.calendar !== "persian" ? (z) => new Date(z.year, z.month - 1, z.day) : (z) => {
    const G = wd(z.year, z.month, z.day);
    return new Date(G.gy, G.gm - 1, G.gd);
  }), ye = v(() => e.calendar === "persian" ? Qn : (z, G, fe) => ph(new Date(z.year, z.month - 1, z.day, z.hour, z.minute, z.second, z.millisecond), G === void 0 ? w.value : G, fe === void 0 ? x.value : fe, z.year, z.timezoneOffset)), X = v(() => U.value.length + Z.value.reduce((z, G) => z + 1 + bh(ae.value(G.to), ae.value(G.from)), 0)), _ = v(() => {
    if (e.title !== void 0 && e.title !== null && e.title.length !== 0) return e.title;
    if (N.value !== null) {
      const fe = N.value.init, qe = ae.value(fe);
      return x.value.daysShort[qe.getDay()] + ", " + x.value.monthsShort[fe.month - 1] + " " + fe.day + or + "?";
    }
    if (X.value === 0) return or;
    if (X.value > 1) return `${X.value} ${x.value.pluralDay}`;
    const z = U.value[0], G = ae.value(z);
    return isNaN(G.valueOf()) === true ? or : x.value.headerTitle !== void 0 ? x.value.headerTitle(G, z) : x.value.daysShort[G.getDay()] + ", " + x.value.monthsShort[z.month - 1] + " " + z.day;
  }), D = v(() => U.value.concat(Z.value.map((G) => G.from)).sort((G, fe) => G.year - fe.year || G.month - fe.month)[0]), F = v(() => U.value.concat(Z.value.map((G) => G.to)).sort((G, fe) => fe.year - G.year || fe.month - G.month)[0]), me = v(() => {
    if (e.subtitle !== void 0 && e.subtitle !== null && e.subtitle.length !== 0) return e.subtitle;
    if (X.value === 0) return or;
    if (X.value > 1) {
      const z = D.value, G = F.value, fe = x.value.monthsShort;
      return fe[z.month - 1] + (z.year !== G.year ? " " + z.year + or + fe[G.month - 1] + " " : z.month !== G.month ? or + fe[G.month - 1] : "") + " " + G.year;
    }
    return U.value[0].year;
  }), $ = v(() => {
    const z = [l.iconSet.datetime.arrowLeft, l.iconSet.datetime.arrowRight];
    return l.lang.rtl === true ? z.reverse() : z;
  }), A = v(() => e.firstDayOfWeek !== void 0 ? Number(e.firstDayOfWeek) : x.value.firstDayOfWeek), Y = v(() => {
    const z = x.value.daysShort, G = A.value;
    return G > 0 ? z.slice(G, 7).concat(z.slice(0, G)) : z;
  }), V = v(() => {
    const z = b.value;
    return e.calendar !== "persian" ? new Date(z.year, z.month, 0).getDate() : vo(z.year, z.month);
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
    return U.value.forEach((G) => {
      const fe = rl(G);
      z[fe] === void 0 && (z[fe] = []), z[fe].push(G.day);
    }), z;
  }), te = v(() => {
    const z = {};
    return Z.value.forEach((G) => {
      const fe = rl(G.from), qe = rl(G.to);
      if (z[fe] === void 0 && (z[fe] = []), z[fe].push({ from: G.from.day, to: fe === qe ? G.to.day : void 0, range: G }), fe < qe) {
        let Ee;
        const { year: Ze, month: Le } = G.from, ze = Le < 12 ? { year: Ze, month: Le + 1 } : { year: Ze + 1, month: 1 };
        for (; (Ee = rl(ze)) <= qe; ) z[Ee] === void 0 && (z[Ee] = []), z[Ee].push({ from: void 0, to: Ee === qe ? G.to.day : void 0, range: G }), ze.month++, ze.month > 12 && (ze.year++, ze.month = 1);
      }
    }), z;
  }), le = v(() => {
    if (N.value === null) return;
    const { init: z, initHash: G, final: fe, finalHash: qe } = N.value, [Ee, Ze] = G <= qe ? [z, fe] : [fe, z], Le = rl(Ee), ze = rl(Ze);
    if (Le !== E.value && ze !== E.value) return;
    const rt = {};
    return Le === E.value ? (rt.from = Ee.day, rt.includeFrom = true) : rt.from = 1, ze === E.value ? (rt.to = Ze.day, rt.includeTo = true) : rt.to = V.value, rt;
  }), E = v(() => rl(b.value)), ee = v(() => {
    const z = {};
    if (e.options === void 0) {
      for (let fe = 1; fe <= V.value; fe++) z[fe] = true;
      return z;
    }
    const G = typeof e.options == "function" ? e.options : (fe) => e.options.includes(fe);
    for (let fe = 1; fe <= V.value; fe++) {
      const qe = E.value + "/" + at(fe);
      z[fe] = G(qe);
    }
    return z;
  }), se = v(() => {
    const z = {};
    if (e.events === void 0) for (let G = 1; G <= V.value; G++) z[G] = false;
    else {
      const G = typeof e.events == "function" ? e.events : (fe) => e.events.includes(fe);
      for (let fe = 1; fe <= V.value; fe++) {
        const qe = E.value + "/" + at(fe);
        z[fe] = G(qe) === true && ne.value(qe);
      }
    }
    return z;
  }), ve = v(() => {
    let z, G;
    const { year: fe, month: qe } = b.value;
    if (e.calendar !== "persian") z = new Date(fe, qe - 1, 1), G = new Date(fe, qe - 1, 0).getDate();
    else {
      const Ee = wd(fe, qe, 1);
      z = new Date(Ee.gy, Ee.gm - 1, Ee.gd);
      let Ze = qe - 1, Le = fe;
      Ze === 0 && (Ze = 12, Le--), G = vo(Le, Ze);
    }
    return { days: z.getDay() - A.value - 1, endDay: G };
  }), ce = v(() => {
    const z = [], { days: G, endDay: fe } = ve.value, qe = G < 0 ? G + 7 : G;
    if (qe < 6) for (let Le = fe - qe; Le <= fe; Le++) z.push({ i: Le, fill: true });
    const Ee = z.length;
    for (let Le = 1; Le <= V.value; Le++) {
      const ze = { i: Le, event: se.value[Le], classes: [] };
      ee.value[Le] === true && (ze.in = true, ze.flat = true), z.push(ze);
    }
    if (I.value[E.value] !== void 0 && I.value[E.value].forEach((Le) => {
      const ze = Ee + Le - 1;
      Object.assign(z[ze], { selected: true, unelevated: true, flat: false, color: R.value, textColor: T.value });
    }), te.value[E.value] !== void 0 && te.value[E.value].forEach((Le) => {
      if (Le.from !== void 0) {
        const ze = Ee + Le.from - 1, rt = Ee + (Le.to || V.value) - 1;
        for (let dn = ze; dn <= rt; dn++) Object.assign(z[dn], { range: Le.range, unelevated: true, color: R.value, textColor: T.value });
        Object.assign(z[ze], { rangeFrom: true, flat: false }), Le.to !== void 0 && Object.assign(z[rt], { rangeTo: true, flat: false });
      } else if (Le.to !== void 0) {
        const ze = Ee + Le.to - 1;
        for (let rt = Ee; rt <= ze; rt++) Object.assign(z[rt], { range: Le.range, unelevated: true, color: R.value, textColor: T.value });
        Object.assign(z[ze], { flat: false, rangeTo: true });
      } else {
        const ze = Ee + V.value - 1;
        for (let rt = Ee; rt <= ze; rt++) Object.assign(z[rt], { range: Le.range, unelevated: true, color: R.value, textColor: T.value });
      }
    }), le.value !== void 0) {
      const Le = Ee + le.value.from - 1, ze = Ee + le.value.to - 1;
      for (let rt = Le; rt <= ze; rt++) z[rt].color = R.value, z[rt].editRange = true;
      le.value.includeFrom === true && (z[Le].editRangeFrom = true), le.value.includeTo === true && (z[ze].editRangeTo = true);
    }
    b.value.year === p.value.year && b.value.month === p.value.month && (z[Ee + p.value.day - 1].today = true);
    const Ze = z.length % 7;
    if (Ze > 0) {
      const Le = 7 - Ze;
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
      const G = ue(w.value, x.value);
      it(G.year, G.month, G);
    }
  }), ge(C, () => {
    g.value !== null && r.$el.contains(document.activeElement) === true && g.value.focus();
  }), ge(() => b.value.year + "|" + b.value.month, () => {
    n("navigation", { year: b.value.year, month: b.value.month });
  }), ge(k, (z) => {
    Se(z, x.value, "mask"), w.value = z;
  }), ge(y, (z) => {
    Se(w.value, z, "locale"), x.value = z;
  });
  function Q(z) {
    f = JSON.stringify(z);
  }
  function ie() {
    const { year: z, month: G, day: fe } = p.value, qe = { ...b.value, year: z, month: G, day: fe }, Ee = I.value[rl(qe)];
    (Ee === void 0 || Ee.includes(qe.day) === false) && zn(qe), Te(qe.year, qe.month);
  }
  function we(z) {
    Cd(z) === true && (C.value = z);
  }
  function ke(z, G) {
    ["month", "year"].includes(z) && (z === "month" ? oe : _e2)(G === true ? -1 : 1);
  }
  function Te(z, G) {
    C.value = "Calendar", it(z, G);
  }
  function Me(z, G) {
    if (e.range === false || !z) {
      N.value = null;
      return;
    }
    const fe = Object.assign({ ...b.value }, z), qe = G !== void 0 ? Object.assign({ ...b.value }, G) : fe;
    N.value = { init: fe, initHash: Qn(fe), final: qe, finalHash: Qn(qe) }, Te(fe.year, fe.month);
  }
  function He() {
    return e.calendar === "persian" ? "YYYY/MM/DD" : e.mask;
  }
  function De(z, G, fe) {
    return Yr(z, G, fe, e.calendar, { hour: 0, minute: 0, second: 0, millisecond: 0 });
  }
  function ue(z, G) {
    const fe = Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue ? [e.modelValue] : [];
    if (fe.length === 0) return pe();
    const qe = fe[fe.length - 1], Ee = De(qe.from !== void 0 ? qe.from : qe, z, G);
    return Ee.dateHash === null ? pe() : Ee;
  }
  function pe() {
    let z, G;
    if (e.defaultYearMonth !== void 0) {
      const fe = e.defaultYearMonth.split("/");
      z = parseInt(fe[0], 10), G = parseInt(fe[1], 10);
    } else {
      const fe = p.value !== void 0 ? p.value : s();
      z = fe.year, G = fe.month;
    }
    return { year: z, month: G, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0, dateHash: z + "/" + at(G) + "/01" };
  }
  function oe(z) {
    let G = b.value.year, fe = Number(b.value.month) + z;
    fe === 13 ? (fe = 1, G++) : fe === 0 && (fe = 12, G--), it(G, fe), j.value === true && Ut("month");
  }
  function _e2(z) {
    const G = Number(b.value.year) + z;
    it(G, b.value.month), j.value === true && Ut("year");
  }
  function Ce(z) {
    it(z, b.value.month), C.value = e.defaultView === "Years" ? "Months" : "Calendar", j.value === true && Ut("year");
  }
  function Oe(z) {
    it(b.value.year, z), C.value = "Calendar", j.value === true && Ut("month");
  }
  function Re(z, G) {
    var _a3;
    (((_a3 = I.value[G]) == null ? void 0 : _a3.includes(z.day)) === true ? de : zn)(z);
  }
  function Xe(z) {
    return { year: z.year, month: z.month, day: z.day };
  }
  function it(z, G, fe) {
    if (be.value !== null && z <= be.value.year && ((G < be.value.month || z < be.value.year) && (G = be.value.month), z = be.value.year), S.value !== null && z >= S.value.year && ((G > S.value.month || z > S.value.year) && (G = S.value.month), z = S.value.year), fe !== void 0) {
      const { hour: Ee, minute: Ze, second: Le, millisecond: ze, timezoneOffset: rt, timeHash: dn } = fe;
      Object.assign(b.value, { hour: Ee, minute: Ze, second: Le, millisecond: ze, timezoneOffset: rt, timeHash: dn });
    }
    const qe = z + "/" + at(G) + "/01";
    qe !== b.value.dateHash && (O.value = b.value.dateHash < qe == (l.lang.rtl !== true) ? "left" : "right", z !== b.value.year && (H.value = O.value), Qe(() => {
      L.value = z - z % Hn - (z < 0 ? Hn : 0), Object.assign(b.value, { year: z, month: G, day: 1, dateHash: qe });
    }));
  }
  function kt(z, G, fe) {
    const qe = z !== null && z.length === 1 && e.multiple === false ? z[0] : z, { reason: Ee, details: Ze } = nl(G, fe);
    Q(qe), n("update:modelValue", qe, Ee, Ze);
  }
  function Ut(z) {
    const G = U.value[0] !== void 0 && U.value[0].dateHash !== null ? { ...U.value[0] } : { ...b.value };
    Qe(() => {
      G.year = b.value.year, G.month = b.value.month;
      const fe = e.calendar !== "persian" ? new Date(G.year, G.month, 0).getDate() : vo(G.year, G.month);
      G.day = Math.min(Math.max(1, G.day), fe);
      const qe = an(G), { details: Ee } = nl("", G);
      Q(qe), n("update:modelValue", qe, z, Ee);
    });
  }
  function nl(z, G) {
    return G.from !== void 0 ? { reason: `${z}-range`, details: { ...Xe(G.target), from: Xe(G.from), to: Xe(G.to) } } : { reason: `${z}-day`, details: Xe(G) };
  }
  function an(z, G, fe) {
    return z.from !== void 0 ? { from: ye.value(z.from, G, fe), to: ye.value(z.to, G, fe) } : ye.value(z, G, fe);
  }
  function zn(z) {
    let G;
    if (e.multiple === true) if (z.from !== void 0) {
      const fe = Qn(z.from), qe = Qn(z.to), Ee = U.value.filter((Le) => Le.dateHash < fe || Le.dateHash > qe), Ze = Z.value.filter(({ from: Le, to: ze }) => ze.dateHash < fe || Le.dateHash > qe);
      G = Ee.concat(Ze).concat(z).map((Le) => an(Le));
    } else {
      const fe = W.value.slice();
      fe.push(an(z)), G = fe;
    }
    else G = an(z);
    kt(G, "add", z);
  }
  function de(z) {
    if (e.noUnset === true) return;
    let G = null;
    if (e.multiple === true && Array.isArray(e.modelValue) === true) {
      const fe = an(z);
      z.from !== void 0 ? G = e.modelValue.filter((qe) => qe.from !== void 0 ? qe.from !== fe.from && qe.to !== fe.to : true) : G = e.modelValue.filter((qe) => qe !== fe), G.length === 0 && (G = null);
    }
    kt(G, "remove", z);
  }
  function Se(z, G, fe) {
    const qe = U.value.concat(Z.value).map((Ze) => an(Ze, z, G)).filter((Ze) => Ze.from !== void 0 ? Ze.from.dateHash !== null && Ze.to.dateHash !== null : Ze.dateHash !== null), Ee = (e.multiple === true ? qe : qe[0]) || null;
    Q(Ee), n("update:modelValue", Ee, fe);
  }
  function Fe() {
    if (e.minimal !== true) return d("div", { class: "q-date__header " + u.value }, [d("div", { class: "relative-position" }, [d(Ot, { name: "q-transition--fade" }, () => d("div", { key: "h-yr-" + me.value, class: "q-date__header-subtitle q-date__header-link " + (C.value === "Years" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: i.value, ...o("vY", { onClick() {
      C.value = "Years";
    }, onKeyup(z) {
      z.keyCode === 13 && (C.value = "Years");
    } }) }, [me.value]))]), d("div", { class: "q-date__header-title relative-position flex no-wrap" }, [d("div", { class: "relative-position col" }, [d(Ot, { name: "q-transition--fade" }, () => d("div", { key: "h-sub" + _.value, class: "q-date__header-title-label q-date__header-link " + (C.value === "Calendar" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: i.value, ...o("vC", { onClick() {
      C.value = "Calendar";
    }, onKeyup(z) {
      z.keyCode === 13 && (C.value = "Calendar");
    } }) }, [_.value]))]), e.todayBtn === true ? d(Je, { class: "q-date__header-today self-start", icon: l.iconSet.datetime.today, ariaLabel: l.lang.date.today, flat: true, size: "sm", round: true, tabindex: i.value, onClick: ie }) : null])]);
  }
  function Be({ label: z, type: G, key: fe, dir: qe, goTo: Ee, boundaries: Ze, cls: Le }) {
    return [d("div", { class: "row items-center q-date__arrow" }, [d(Je, { round: true, dense: true, size: "sm", flat: true, icon: $.value[0], ariaLabel: G === "Years" ? l.lang.date.prevYear : l.lang.date.prevMonth, tabindex: i.value, disable: Ze.prev === false, ...o("go-#" + G, { onClick() {
      Ee(-1);
    } }) })]), d("div", { class: "relative-position overflow-hidden flex flex-center" + Le }, [d(Ot, { name: "q-transition--jump-" + qe }, () => d("div", { key: fe }, [d(Je, { flat: true, dense: true, noCaps: true, label: z, tabindex: i.value, ...o("view#" + G, { onClick: () => {
      C.value = G;
    } }) })]))]), d("div", { class: "row items-center q-date__arrow" }, [d(Je, { round: true, dense: true, size: "sm", flat: true, icon: $.value[1], ariaLabel: G === "Years" ? l.lang.date.nextYear : l.lang.date.nextMonth, tabindex: i.value, disable: Ze.next === false, ...o("go+#" + G, { onClick() {
      Ee(1);
    } }) })])];
  }
  const Ue = { Calendar: () => [d("div", { key: "calendar-view", class: "q-date__view q-date__calendar" }, [d("div", { class: "q-date__navigation row items-center no-wrap" }, Be({ label: x.value.months[b.value.month - 1], type: "Months", key: b.value.month, dir: O.value, goTo: oe, boundaries: M.value.month, cls: " col" }).concat(Be({ label: b.value.year, type: "Years", key: b.value.year, dir: H.value, goTo: _e2, boundaries: M.value.year, cls: "" }))), d("div", { class: "q-date__calendar-weekdays row items-center no-wrap" }, Y.value.map((z) => d("div", { class: "q-date__calendar-item" }, [d("div", z)]))), d("div", { class: "q-date__calendar-days-container relative-position overflow-hidden" }, [d(Ot, { name: "q-transition--slide-" + O.value }, () => d("div", { key: E.value, class: "q-date__calendar-days fit" }, ce.value.map((z) => d("div", { class: z.classes }, [z.in === true ? d(Je, { class: z.today === true ? "q-date__today" : "", dense: true, flat: z.flat, unelevated: z.unelevated, color: z.color, textColor: z.textColor, label: z.i, tabindex: i.value, ...o("day#" + z.i, { onClick: () => {
    pt(z.i);
  }, onMouseover: () => {
    ht(z.i);
  } }) }, z.event !== false ? () => d("div", { class: "q-date__event bg-" + z.event }) : null) : d("div", "" + z.i)]))))])])], Months() {
    const z = b.value.year === p.value.year, G = (qe) => be.value !== null && b.value.year === be.value.year && be.value.month > qe || S.value !== null && b.value.year === S.value.year && S.value.month < qe, fe = x.value.monthsShort.map((qe, Ee) => {
      const Ze = b.value.month === Ee + 1;
      return d("div", { class: "q-date__months-item flex flex-center" }, [d(Je, { class: z === true && p.value.month === Ee + 1 ? "q-date__today" : null, flat: Ze !== true, label: qe, unelevated: Ze, color: Ze === true ? R.value : null, textColor: Ze === true ? T.value : null, tabindex: i.value, disable: G(Ee + 1), ...o("month#" + Ee, { onClick: () => {
        Oe(Ee + 1);
      } }) })]);
    });
    return e.yearsInMonthView === true && fe.unshift(d("div", { class: "row no-wrap full-width" }, [Be({ label: b.value.year, type: "Years", key: b.value.year, dir: H.value, goTo: _e2, boundaries: M.value.year, cls: " col" })])), d("div", { key: "months-view", class: "q-date__view q-date__months flex flex-center" }, fe);
  }, Years() {
    const z = L.value, G = z + Hn, fe = [], qe = (Ee) => be.value !== null && be.value.year > Ee || S.value !== null && S.value.year < Ee;
    for (let Ee = z; Ee <= G; Ee++) {
      const Ze = b.value.year === Ee;
      fe.push(d("div", { class: "q-date__years-item flex flex-center" }, [d(Je, { key: "yr" + Ee, class: p.value.year === Ee ? "q-date__today" : null, flat: !Ze, label: Ee, dense: true, unelevated: Ze, color: Ze === true ? R.value : null, textColor: Ze === true ? T.value : null, tabindex: i.value, disable: qe(Ee), ...o("yr#" + Ee, { onClick: () => {
        Ce(Ee);
      } }) })]));
    }
    return d("div", { class: "q-date__view q-date__years flex flex-center" }, [d("div", { class: "col-auto" }, [d(Je, { round: true, dense: true, flat: true, icon: $.value[0], ariaLabel: l.lang.date.prevRangeYears(Hn), tabindex: i.value, disable: qe(z), ...o("y-", { onClick: () => {
      L.value -= Hn;
    } }) })]), d("div", { class: "q-date__years-content col self-stretch row items-center" }, fe), d("div", { class: "col-auto" }, [d(Je, { round: true, dense: true, flat: true, icon: $.value[1], ariaLabel: l.lang.date.nextRangeYears(Hn), tabindex: i.value, disable: qe(G), ...o("y+", { onClick: () => {
      L.value += Hn;
    } }) })])]);
  } };
  function pt(z) {
    const G = { ...b.value, day: z };
    if (e.range === false) {
      Re(G, E.value);
      return;
    }
    if (N.value === null) {
      const fe = ce.value.find((Ee) => Ee.fill !== true && Ee.i === z);
      if (e.noUnset !== true && fe.range !== void 0) {
        de({ target: G, from: fe.range.from, to: fe.range.to });
        return;
      }
      if (fe.selected === true) {
        de(G);
        return;
      }
      const qe = Qn(G);
      N.value = { init: G, initHash: qe, final: G, finalHash: qe }, n("rangeStart", Xe(G));
    } else {
      const fe = N.value.initHash, qe = Qn(G), Ee = fe <= qe ? { from: N.value.init, to: G } : { from: G, to: N.value.init };
      N.value = null, zn(fe === qe ? G : { target: G, ...Ee }), n("rangeEnd", { from: Xe(Ee.from), to: Xe(Ee.to) });
    }
  }
  function ht(z) {
    if (N.value !== null) {
      const G = { ...b.value, day: z };
      Object.assign(N.value, { final: G, finalHash: Qn(G) });
    }
  }
  return Object.assign(r, { setToday: ie, setView: we, offsetCalendar: ke, setCalendarTo: Te, setEditingRange: Me }), () => {
    const z = [d("div", { class: "q-date__content col relative-position" }, [d(Ot, { name: "q-transition--fade" }, Ue[C.value])])], G = Pe(t.default);
    return G !== void 0 && z.push(d("div", { class: "q-date__actions" }, G)), e.name !== void 0 && e.disable !== true && m(z, "push"), d("div", { class: q.value, ...re.value }, [Fe(), d("div", { ref: g, class: "q-date__main col column", tabindex: -1 }, z)]);
  };
} });
function yh(e, t, n) {
  let r;
  function l() {
    r !== void 0 && (xa.remove(r), r = void 0);
  }
  return We(() => {
    e.value === true && l();
  }), { removeFromHistory: l, addToHistory() {
    r = { condition: () => n.value === true, handler: t }, xa.add(r);
  } };
}
var zr = 0, Zi, Ji, Xr, eu = false, kd, Td, qd, Al = null;
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
function Md(e) {
  e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function Xa(e) {
  eu !== true && (eu = true, requestAnimationFrame(() => {
    eu = false;
    const { height: t } = e.target, { clientHeight: n, scrollTop: r } = document.scrollingElement;
    (Xr === void 0 || t !== window.innerHeight) && (Xr = n - t, document.scrollingElement.scrollTop = r), r > Xr && (document.scrollingElement.scrollTop -= Math.ceil((r - Xr) / 8));
  }));
}
function Ed(e) {
  const t = document.body, n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: r, overflowX: l } = window.getComputedStyle(t);
    Zi = mi(window), Ji = yl(window), kd = t.style.left, Td = t.style.top, qd = window.location.href, t.style.left = `-${Zi}px`, t.style.top = `-${Ji}px`, l !== "hidden" && (l === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), r !== "hidden" && (r === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = true, Ie.is.ios === true && (n === true ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", Xa, ft.passiveCapture), window.visualViewport.addEventListener("scroll", Xa, ft.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", Md, ft.passiveCapture));
  }
  Ie.is.desktop === true && Ie.is.mac === true && window[`${e}EventListener`]("wheel", e1, ft.notPassive), e === "remove" && (Ie.is.ios === true && (n === true ? (window.visualViewport.removeEventListener("resize", Xa, ft.passiveCapture), window.visualViewport.removeEventListener("scroll", Xa, ft.passiveCapture)) : window.removeEventListener("scroll", Md, ft.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = false, t.style.left = kd, t.style.top = Td, window.location.href === qd && window.scrollTo(Zi, Ji), Xr = void 0);
}
function Wu(e) {
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
        Ed(t), Al = null;
      }, 100);
      return;
    }
  }
  Ed(t);
}
function _h() {
  let e;
  return { preventBodyScroll(t) {
    t !== e && (e !== void 0 || t === true) && (e = t, Wu(t));
  } };
}
var Ga = 0, n1 = { standard: "fixed-full flex-center", top: "fixed-top justify-center", bottom: "fixed-bottom justify-center", right: "fixed-right items-center", left: "fixed-left items-center" }, Rd = { standard: ["scale", "scale"], top: ["slide-down", "slide-up"], bottom: ["slide-up", "slide-down"], right: ["slide-left", "slide-right"], left: ["slide-right", "slide-left"] }, bi = he({ name: "QDialog", inheritAttrs: false, props: { ...$r, ...Hl, transitionShow: String, transitionHide: String, persistent: Boolean, autoClose: Boolean, allowFocusOutside: Boolean, noEscDismiss: Boolean, noBackdropDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, noShake: Boolean, seamless: Boolean, maximized: Boolean, fullWidth: Boolean, fullHeight: Boolean, square: Boolean, backdropFilter: String, position: { type: String, default: "standard", validator: (e) => ["standard", "top", "bottom", "left", "right"].includes(e) } }, emits: [...Pr, "shake", "click", "escapeKey"], setup(e, { slots: t, emit: n, attrs: r }) {
  const l = xe(), a = K(null), o = K(false), i = K(false);
  let u = null, c = null, s, f;
  const h = v(() => e.persistent !== true && e.noRouteDismiss !== true && e.seamless !== true), { preventBodyScroll: m } = _h(), { registerTimeout: g } = Zn(), { registerTick: w, removeTick: x } = wr(), { transitionProps: k, transitionStyle: y } = vi(e, () => Rd[e.position][0], () => Rd[e.position][1]), p = v(() => y.value + (e.backdropFilter !== void 0 ? `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}` : "")), { showPortal: b, hidePortal: C, portalIsAccessible: P, renderPortal: O } = Ls(l, a, me, "dialog"), { hide: H } = Lr({ showing: o, hideOnRouteChange: h, handleShow: j, handleHide: W, processOnMount: true }), { addToHistory: B, removeFromHistory: L } = yh(o, H, h), N = v(() => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === true ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${n1[e.position]}` + (i.value === true ? " q-dialog__inner--animating" : "") + (e.fullWidth === true ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === true ? " q-dialog__inner--fullheight" : "") + (e.square === true ? " q-dialog__inner--square" : "")), q = v(() => o.value === true && e.seamless !== true), R = v(() => e.autoClose === true ? { onClick: _ } : {}), T = v(() => [`q-dialog fullscreen no-pointer-events q-dialog--${q.value === true ? "modal" : "seamless"}`, r.class]);
  ge(() => e.maximized, ($) => {
    o.value === true && X($);
  }), ge(q, ($) => {
    m($), $ === true ? (zm(F), Dm(ae)) : (ju(F), Lo(ae));
  });
  function j($) {
    var _a3;
    B(), c = e.noRefocus === false && document.activeElement !== null ? document.activeElement : null, X(e.maximized), b(), i.value = true, e.noFocus !== true ? ((_a3 = document.activeElement) == null ? void 0 : _a3.blur(), w(U)) : x(), g(() => {
      if (l.proxy.$q.platform.is.ios === true) {
        if (e.seamless !== true && document.activeElement) {
          const { top: A, bottom: Y } = document.activeElement.getBoundingClientRect(), { innerHeight: V } = window, ne = window.visualViewport !== void 0 ? window.visualViewport.height : V;
          A > 0 && Y > ne / 2 && (document.scrollingElement.scrollTop = Math.min(document.scrollingElement.scrollHeight - ne, Y >= V ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + Y - ne / 2))), document.activeElement.scrollIntoView();
        }
        f = true, a.value.click(), f = false;
      }
      b(true), i.value = false, n("show", $);
    }, e.transitionDuration);
  }
  function W($) {
    x(), L(), ye(true), i.value = true, C(), c !== null && (((($ == null ? void 0 : $.type.indexOf("key")) === 0 ? c.closest('[tabindex]:not([tabindex^="-"])') : void 0) || c).focus(), c = null), g(() => {
      C(true), i.value = false, n("hide", $);
    }, e.transitionDuration);
  }
  function U($) {
    Br(() => {
      let A = a.value;
      if (A !== null) {
        if ($ !== void 0) {
          const Y = A.querySelector($);
          if (Y !== null) {
            Y.focus({ preventScroll: true });
            return;
          }
        }
        A.contains(document.activeElement) !== true && (A = A.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || A.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || A.querySelector("[autofocus], [data-autofocus]") || A, A.focus({ preventScroll: true }));
      }
    });
  }
  function Z($) {
    $ && typeof $.focus == "function" ? $.focus({ preventScroll: true }) : U(), n("shake");
    const A = a.value;
    A !== null && (A.classList.remove("q-animate--scale"), A.classList.add("q-animate--scale"), u !== null && clearTimeout(u), u = setTimeout(() => {
      u = null, a.value !== null && (A.classList.remove("q-animate--scale"), U());
    }, 170));
  }
  function ae() {
    e.seamless !== true && (e.persistent === true || e.noEscDismiss === true ? e.maximized !== true && e.noShake !== true && Z() : (n("escapeKey"), H()));
  }
  function ye($) {
    u !== null && (clearTimeout(u), u = null), ($ === true || o.value === true) && (X(false), e.seamless !== true && (m(false), ju(F), Lo(ae))), $ !== true && (c = null);
  }
  function X($) {
    $ === true ? s !== true && (Ga < 1 && document.body.classList.add("q-body--dialog"), Ga++, s = true) : s === true && (Ga < 2 && document.body.classList.remove("q-body--dialog"), Ga--, s = false);
  }
  function _($) {
    f !== true && (H($), n("click", $));
  }
  function D($) {
    e.persistent !== true && e.noBackdropDismiss !== true ? H($) : e.noShake !== true && Z();
  }
  function F($) {
    e.allowFocusOutside !== true && P.value === true && Tm(a.value, $.target) !== true && U('[tabindex]:not([tabindex="-1"])');
  }
  Object.assign(l.proxy, { focus: U, shake: Z, __updateRefocusTarget($) {
    c = $ || null;
  } }), We(ye);
  function me() {
    return d("div", { role: "dialog", "aria-modal": q.value === true ? "true" : "false", ...r, class: T.value }, [d(Ot, { name: "q-transition--fade", appear: true }, () => q.value === true ? d("div", { class: "q-dialog__backdrop fixed-full", style: p.value, "aria-hidden": "true", tabindex: -1, onClick: D }) : null), d(Ot, k.value, () => o.value === true ? d("div", { ref: a, class: N.value, style: y.value, tabindex: -1, ...R.value }, Pe(t.default)) : null)]);
  }
  return O;
} }), Ad = 150, $d = he({ name: "QDrawer", inheritAttrs: false, props: { ...$r, ...nt, side: { type: String, default: "left", validator: (e) => ["left", "right"].includes(e) }, width: { type: Number, default: 300 }, mini: Boolean, miniToOverlay: Boolean, miniWidth: { type: Number, default: 57 }, noMiniAnimation: Boolean, breakpoint: { type: Number, default: 1023 }, showIfAbove: Boolean, behavior: { type: String, validator: (e) => ["default", "desktop", "mobile"].includes(e), default: "default" }, bordered: Boolean, elevated: Boolean, overlay: Boolean, persistent: Boolean, noSwipeOpen: Boolean, noSwipeClose: Boolean, noSwipeBackdrop: Boolean }, emits: [...Pr, "onLayout", "miniState"], setup(e, { slots: t, emit: n, attrs: r }) {
  const l = xe(), { proxy: { $q: a } } = l, o = lt(e, a), { preventBodyScroll: i } = _h(), { registerTimeout: u, removeTimeout: c } = Zn(), s = Mt(Jl, ot);
  if (s === ot) return console.error("QDrawer needs to be child of QLayout"), ot;
  let f, h = null, m;
  const g = K(e.behavior === "mobile" || e.behavior !== "desktop" && s.totalWidth.value <= e.breakpoint), w = v(() => e.mini === true && g.value !== true), x = v(() => w.value === true ? e.miniWidth : e.width), k = K(e.showIfAbove === true && g.value === false ? true : e.modelValue === true), y = v(() => e.persistent !== true && (g.value === true || ye.value === true));
  function p(Q, ie) {
    if (O(), Q !== false && s.animate(), M(0), g.value === true) {
      const we = s.instances[W.value];
      (we == null ? void 0 : we.belowBreakpoint) === true && we.hide(false), I(1), s.isContainer.value !== true && i(true);
    } else I(0), Q !== false && te(false);
    u(() => {
      Q !== false && te(true), ie !== true && n("show", Q);
    }, Ad);
  }
  function b(Q, ie) {
    H(), Q !== false && s.animate(), I(0), M(N.value * x.value), se(), ie !== true ? u(() => {
      n("hide", Q);
    }, Ad) : c();
  }
  const { show: C, hide: P } = Lr({ showing: k, hideOnRouteChange: y, handleShow: p, handleHide: b }), { addToHistory: O, removeFromHistory: H } = yh(k, P, y), B = { belowBreakpoint: g, hide: P }, L = v(() => e.side === "right"), N = v(() => (a.lang.rtl === true ? -1 : 1) * (L.value === true ? 1 : -1)), q = K(0), R = K(false), T = K(false), j = K(x.value * N.value), W = v(() => L.value === true ? "left" : "right"), U = v(() => k.value === true && g.value === false && e.overlay === false ? e.miniToOverlay === true ? e.miniWidth : x.value : 0), Z = v(() => e.overlay === true || e.miniToOverlay === true || s.view.value.indexOf(L.value ? "R" : "L") !== -1 || a.platform.is.ios === true && s.isContainer.value === true), ae = v(() => e.overlay === false && k.value === true && g.value === false), ye = v(() => e.overlay === true && k.value === true && g.value === false), X = v(() => "fullscreen q-drawer__backdrop" + (k.value === false && R.value === false ? " hidden" : "")), _ = v(() => ({ backgroundColor: `rgba(0,0,0,${q.value * 0.4})` })), D = v(() => L.value === true ? s.rows.value.top[2] === "r" : s.rows.value.top[0] === "l"), F = v(() => L.value === true ? s.rows.value.bottom[2] === "r" : s.rows.value.bottom[0] === "l"), me = v(() => {
    const Q = {};
    return s.header.space === true && D.value === false && (Z.value === true ? Q.top = `${s.header.offset}px` : s.header.space === true && (Q.top = `${s.header.size}px`)), s.footer.space === true && F.value === false && (Z.value === true ? Q.bottom = `${s.footer.offset}px` : s.footer.space === true && (Q.bottom = `${s.footer.size}px`)), Q;
  }), $ = v(() => {
    const Q = { width: `${x.value}px`, transform: `translateX(${j.value}px)` };
    return g.value === true ? Q : Object.assign(Q, me.value);
  }), A = v(() => "q-drawer__content fit " + (s.isContainer.value !== true ? "scroll" : "overflow-auto")), Y = v(() => `q-drawer q-drawer--${e.side}` + (T.value === true ? " q-drawer--mini-animate" : "") + (e.bordered === true ? " q-drawer--bordered" : "") + (o.value === true ? " q-drawer--dark q-dark" : "") + (R.value === true ? " no-transition" : k.value === true ? "" : " q-layout--prevent-focus") + (g.value === true ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${w.value === true ? "mini" : "standard"}` + (Z.value === true || ae.value !== true ? " fixed" : "") + (e.overlay === true || e.miniToOverlay === true ? " q-drawer--on-top" : "") + (D.value === true ? " q-drawer--top-padding" : ""))), V = v(() => {
    const Q = a.lang.rtl === true ? e.side : W.value;
    return [[bn, E, void 0, { [Q]: true, mouse: true }]];
  }), ne = v(() => {
    const Q = a.lang.rtl === true ? W.value : e.side;
    return [[bn, ee, void 0, { [Q]: true, mouse: true }]];
  }), be = v(() => {
    const Q = a.lang.rtl === true ? W.value : e.side;
    return [[bn, ee, void 0, { [Q]: true, mouse: true, mouseAllDir: true }]];
  });
  function S() {
    ce(g, e.behavior === "mobile" || e.behavior !== "desktop" && s.totalWidth.value <= e.breakpoint);
  }
  ge(g, (Q) => {
    Q === true ? (f = k.value, k.value === true && P(false)) : e.overlay === false && e.behavior !== "mobile" && f !== false && (k.value === true ? (M(0), I(0), se()) : C(false));
  }), ge(() => e.side, (Q, ie) => {
    s.instances[ie] === B && (s.instances[ie] = void 0, s[ie].space = false, s[ie].offset = 0), s.instances[Q] = B, s[Q].size = x.value, s[Q].space = ae.value, s[Q].offset = U.value;
  }), ge(s.totalWidth, () => {
    (s.isContainer.value === true || document.qScrollPrevented !== true) && S();
  }), ge(() => e.behavior + e.breakpoint, S), ge(s.isContainer, (Q) => {
    k.value === true && i(Q !== true), Q === true && S();
  }), ge(s.scrollbarWidth, () => {
    M(k.value === true ? 0 : void 0);
  }), ge(U, (Q) => {
    ve("offset", Q);
  }), ge(ae, (Q) => {
    n("onLayout", Q), ve("space", Q);
  }), ge(L, () => {
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
    Q === void 0 ? Qe(() => {
      Q = k.value === true ? 0 : x.value, M(N.value * Q);
    }) : (s.isContainer.value === true && L.value === true && (g.value === true || Math.abs(Q) === x.value) && (Q += N.value * s.scrollbarWidth.value), j.value = Q);
  }
  function I(Q) {
    q.value = Q;
  }
  function te(Q) {
    const ie = Q === true ? "remove" : s.isContainer.value !== true ? "add" : "";
    ie !== "" && document.body.classList[ie]("q-body--drawer-toggle");
  }
  function le() {
    h !== null && clearTimeout(h), l.proxy && l.proxy.$el && l.proxy.$el.classList.add("q-drawer--mini-animate"), T.value = true, h = setTimeout(() => {
      var _a3, _b2;
      h = null, T.value = false, (_b2 = (_a3 = l == null ? void 0 : l.proxy) == null ? void 0 : _a3.$el) == null ? void 0 : _b2.classList.remove("q-drawer--mini-animate");
    }, 150);
  }
  function E(Q) {
    if (k.value !== false) return;
    const ie = x.value, we = dt(Q.distance.x, 0, ie);
    if (Q.isFinal === true) {
      we >= Math.min(75, ie) === true ? C() : (s.animate(), I(0), M(N.value * ie)), R.value = false;
      return;
    }
    M((a.lang.rtl === true ? L.value !== true : L.value) ? Math.max(ie - we, 0) : Math.min(0, we - ie)), I(dt(we / ie, 0, 1)), Q.isFirst === true && (R.value = true);
  }
  function ee(Q) {
    if (k.value !== true) return;
    const ie = x.value, we = Q.direction === e.side, ke = (a.lang.rtl === true ? we !== true : we) ? dt(Q.distance.x, 0, ie) : 0;
    if (Q.isFinal === true) {
      Math.abs(ke) < Math.min(75, ie) === true ? (s.animate(), I(1), M(0)) : P(), R.value = false;
      return;
    }
    M(N.value * ke), I(dt(1 - ke / ie, 0, 1)), Q.isFirst === true && (R.value = true);
  }
  function se() {
    i(false), te(true);
  }
  function ve(Q, ie) {
    s.update(e.side, Q, ie);
  }
  function ce(Q, ie) {
    Q.value !== ie && (Q.value = ie);
  }
  function re(Q, ie) {
    ve("size", Q === true ? e.miniWidth : ie);
  }
  return s.instances[e.side] = B, re(e.miniToOverlay, x.value), ve("space", ae.value), ve("offset", U.value), e.showIfAbove === true && e.modelValue !== true && k.value === true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", true), ct(() => {
    n("onLayout", ae.value), n("miniState", w.value), f = e.showIfAbove === true;
    const Q = () => {
      (k.value === true ? p : b)(false, true);
    };
    if (s.totalWidth.value !== 0) {
      Qe(Q);
      return;
    }
    m = ge(s.totalWidth, () => {
      m(), m = void 0, k.value === false && e.showIfAbove === true && g.value === false ? C(false) : Q();
    });
  }), We(() => {
    m == null ? void 0 : m(), h !== null && (clearTimeout(h), h = null), k.value === true && se(), s.instances[e.side] === B && (s.instances[e.side] = void 0, ve("size", 0), ve("offset", 0), ve("space", false));
  }), () => {
    const Q = [];
    g.value === true && (e.noSwipeOpen === false && Q.push(cn(d("div", { key: "open", class: `q-drawer__opener fixed-${e.side}`, "aria-hidden": "true" }), V.value)), Q.push(_n("div", { ref: "backdrop", class: X.value, style: _.value, "aria-hidden": "true", onClick: P }, void 0, "backdrop", e.noSwipeBackdrop !== true && k.value === true, () => be.value)));
    const ie = w.value === true && t.mini !== void 0, we = [d("div", { ...r, key: "" + ie, class: [A.value, r.class] }, ie === true ? t.mini() : Pe(t.default))];
    return e.elevated === true && k.value === true && we.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), Q.push(_n("aside", { ref: "content", class: Y.value, style: $.value }, we, "contentclose", e.noSwipeClose !== true && g.value === true, () => ne.value)), d("div", { class: "q-drawer-container" }, Q);
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
  apply(e, t, n = St) {
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
}, a1 = he({ name: "QTooltip", inheritAttrs: false, props: { ...Am, ...$r, ...Hl, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null }, transitionShow: { ...Hl.transitionShow, default: "jump-down" }, transitionHide: { ...Hl.transitionHide, default: "jump-up" }, anchor: { type: String, default: "bottom middle", validator: Vo }, self: { type: String, default: "top middle", validator: Vo }, offset: { type: Array, default: () => [14, 14], validator: Hm }, scrollTarget: er, delay: { type: Number, default: 0 }, hideDelay: { type: Number, default: 0 }, persistent: Boolean }, emits: [...Pr], setup(e, { slots: t, emit: n, attrs: r }) {
  let l, a;
  const o = xe(), { proxy: { $q: i } } = o, u = K(null), c = K(false), s = v(() => Do(e.anchor, i.lang.rtl)), f = v(() => Do(e.self, i.lang.rtl)), h = v(() => e.persistent !== true), { registerTick: m, removeTick: g } = wr(), { registerTimeout: w } = Zn(), { transitionProps: x, transitionStyle: k } = vi(e), { localScrollTarget: y, changeScrollEvent: p, unconfigureScrollTarget: b } = Pm(e, ye), { anchorEl: C, canShow: P, anchorEvents: O } = $s({ showing: c, configureAnchorEl: ae }), { show: H, hide: B } = Lr({ showing: c, canShow: P, handleShow: R, handleHide: T, hideOnRouteChange: h, processOnMount: true });
  Object.assign(O, { delayShow: U, delayHide: Z });
  const { showPortal: L, hidePortal: N, renderPortal: q } = Ls(o, u, _, "tooltip");
  if (i.platform.is.mobile === true) {
    const D = { anchorEl: C, innerRef: u, onClickOutside(me) {
      return B(me), me.target.classList.contains("q-dialog__backdrop") && je(me), true;
    } }, F = v(() => e.modelValue === null && e.persistent !== true && c.value === true);
    ge(F, (me) => {
      (me === true ? Nm : Oo)(D);
    }), We(() => {
      Oo(D);
    });
  }
  function R(D) {
    L(), m(() => {
      a = new MutationObserver(() => W()), a.observe(u.value, { attributes: false, childList: true, characterData: true, subtree: true }), W(), ye();
    }), l === void 0 && (l = ge(() => i.screen.width + "|" + i.screen.height + "|" + e.self + "|" + e.anchor + "|" + i.lang.rtl, W)), w(() => {
      L(true), n("show", D);
    }, e.transitionDuration);
  }
  function T(D) {
    g(), N(), j(), w(() => {
      N(true), n("hide", D);
    }, e.transitionDuration);
  }
  function j() {
    a !== void 0 && (a.disconnect(), a = void 0), l !== void 0 && (l(), l = void 0), b(), Yt(O, "tooltipTemp");
  }
  function W() {
    Bs({ targetEl: u.value, offset: e.offset, anchorEl: C.value, anchorOrigin: s.value, selfOrigin: f.value, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function U(D) {
    if (i.platform.is.mobile === true) {
      Rn(), document.body.classList.add("non-selectable");
      const F = C.value, me = ["touchmove", "touchcancel", "touchend", "click"].map(($) => [F, $, "delayHide", "passiveCapture"]);
      Tt(O, "tooltipTemp", me);
    }
    w(() => {
      H(D);
    }, e.delay);
  }
  function Z(D) {
    i.platform.is.mobile === true && (Yt(O, "tooltipTemp"), Rn(), setTimeout(() => {
      document.body.classList.remove("non-selectable");
    }, 10)), w(() => {
      B(D);
    }, e.hideDelay);
  }
  function ae() {
    if (e.noParentEvent === true || C.value === null) return;
    const D = i.platform.is.mobile === true ? [[C.value, "touchstart", "delayShow", "passive"]] : [[C.value, "mouseenter", "delayShow", "passive"], [C.value, "mouseleave", "delayHide", "passive"]];
    Tt(O, "anchor", D);
  }
  function ye() {
    if (C.value !== null || e.scrollTarget !== void 0) {
      y.value = In(C.value, e.scrollTarget);
      const D = e.noParentEvent === true ? W : B;
      p(y.value, D);
    }
  }
  function X() {
    return c.value === true ? d("div", { ...r, ref: u, class: ["q-tooltip q-tooltip--style q-position-engine no-pointer-events", r.class], style: [r.style, k.value], role: "tooltip" }, Pe(t.default)) : null;
  }
  function _() {
    return d(Ot, x.value, X);
  }
  return We(j), Object.assign(o.proxy, { updatePosition: W }), q;
} }), qr = he({ name: "QItem", props: { ...nt, ...La, tag: { type: String, default: "div" }, active: { type: Boolean, default: null }, clickable: Boolean, dense: Boolean, insetLevel: Number, tabindex: [String, Number], focused: Boolean, manualFocus: Boolean }, emits: ["click", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = lt(e, r), { hasLink: a, linkAttrs: o, linkClass: i, linkTag: u, navigateOnClick: c } = di(), s = K(null), f = K(null), h = v(() => e.clickable === true || a.value === true || e.tag === "label"), m = v(() => e.disable !== true && h.value === true), g = v(() => "q-item q-item-type row no-wrap" + (e.dense === true ? " q-item--dense" : "") + (l.value === true ? " q-item--dark" : "") + (a.value === true && e.active === null ? i.value : e.active === true ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === true ? " disabled" : "") + (m.value === true ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === true ? " q-manual-focusable--focused" : "") : "")), w = v(() => e.insetLevel === void 0 ? null : { ["padding" + (r.lang.rtl === true ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px" });
  function x(p) {
    m.value === true && (f.value !== null && p.qAvoidFocus !== true && (p.qKeyEvent !== true && document.activeElement === s.value ? f.value.focus() : document.activeElement === f.value && s.value.focus()), c(p));
  }
  function k(p) {
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
    const p = { ref: s, class: g.value, style: w.value, role: "listitem", onClick: x, onKeyup: k };
    return m.value === true ? (p.tabindex = e.tabindex || "0", Object.assign(p, o.value)) : h.value === true && (p["aria-disabled"] = "true"), d(u.value, p, y());
  };
} }), hn = he({ name: "QItemSection", props: { avatar: Boolean, thumbnail: Boolean, side: Boolean, top: Boolean, noWrap: Boolean }, setup(e, { slots: t }) {
  const n = v(() => `q-item__section column q-item__section--${e.avatar === true || e.side === true || e.thumbnail === true ? "side" : "main"}` + (e.top === true ? " q-item__section--top justify-start" : " justify-center") + (e.avatar === true ? " q-item__section--avatar" : "") + (e.thumbnail === true ? " q-item__section--thumbnail" : "") + (e.noWrap === true ? " q-item__section--nowrap" : ""));
  return () => d("div", { class: n.value }, Pe(t.default));
} });
function Sh(e, t, n) {
  t.handler ? t.handler(e, n, n.caret) : n.runCmd(t.cmd, t.param);
}
function Ws(e) {
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
  }), a = e.toolbarBackgroundClass.value, o = [Ws(o)];
  else {
    const s = e.props.toolbarToggleColor !== void 0 ? `text-${e.props.toolbarToggleColor}` : null, f = e.props.toolbarTextColor !== void 0 ? `text-${e.props.toolbarTextColor}` : null, h = t.list === "no-icons";
    o = t.options.map((m) => {
      const g = m.disable ? m.disable(e) : false, w = m.type === void 0 ? e.caret.is(m.cmd, m.param) : false;
      w && (r = m.tip, l = m.icon !== null ? m.icon : void 0);
      const x = m.htmlTip;
      return d(qr, { active: w, activeClass: s, clickable: true, disable: g, dense: true, onClick(k) {
        var _a3;
        i(), (k == null ? void 0 : k.qAvoidFocus) !== true && ((_a3 = e.contentRef.value) == null ? void 0 : _a3.focus()), e.caret.restore(), Sh(k, m, e);
      } }, () => [h === true ? null : d(hn, { class: w ? s : f, side: true }, () => d(et, { name: m.icon !== null ? m.icon : void 0 })), d(hn, x ? () => d("div", { class: "text-no-wrap", innerHTML: m.htmlTip }) : m.tip ? () => d("div", { class: "text-no-wrap" }, m.tip) : void 0)]);
    }), a = [e.toolbarBackgroundClass.value, f];
  }
  const u = t.highlight && r !== t.label, c = d(_y, { ...e.buttonProps.value, noCaps: true, noWrap: true, color: u ? e.props.toolbarToggleColor : e.props.toolbarColor, textColor: u && !e.props.toolbarPush ? null : e.props.toolbarTextColor, label: t.fixedLabel ? t.label : r, icon: t.fixedIcon ? t.icon !== null ? t.icon : void 0 : l, contentClass: a, onShow: (s) => e.emit("dropdownShow", s), onHide: (s) => e.emit("dropdownHide", s), onBeforeShow: (s) => e.emit("dropdownBeforeShow", s), onBeforeHide: (s) => e.emit("dropdownBeforeHide", s) }, () => o);
  return c;
}
function i1(e) {
  if (e.caret) return e.buttons.value.filter((t) => !e.isViewingSource.value || t.find((n) => n.cmd === "viewsource")).map((t) => Ws(t.map((n) => e.isViewingSource.value && n.cmd !== "viewsource" ? false : n.type === "slot" ? Pe(e.slots[n.slot]) : n.type === "dropdown" ? o1(e, n) : Ch(e, n))));
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
      xt(l), n = l.target.value;
    }, onKeydown: (l) => {
      if (Zl(l) !== true) switch (l.keyCode) {
        case 13:
          return Dt(l), r();
        case 27:
          Dt(l), e.caret.restore(), (!e.editLinkUrl.value || e.editLinkUrl.value === "https://") && document.execCommand("unlink"), e.editLinkUrl.value = null;
          break;
      }
    } }), Ws([d(Je, { key: "qedt_btm_rem", tabindex: -1, ...e.buttonProps.value, label: e.$q.lang.label.remove, noCaps: true, onClick: () => {
      e.caret.restore(), document.execCommand("unlink"), e.editLinkUrl.value = null;
    } }), d(Je, { key: "qedt_btm_upd", ...e.buttonProps.value, label: e.$q.lang.label.update, noCaps: true, onClick: r })])];
  }
}
var Pd = /^on[A-Z]/;
function kh() {
  const { attrs: e, vnode: t } = xe(), n = { listeners: K({}), attributes: K({}) };
  function r() {
    const l = {}, a = {};
    for (const o in e) o !== "class" && o !== "style" && Pd.test(o) === false && (l[o] = e[o]);
    for (const o in t.props) Pd.test(o) === true && (a[o] = t.props[o]);
    n.attributes.value = l, n.listeners.value = a;
  }
  return Rr(r), r(), n;
}
var c1 = Object.prototype.toString, nu = Object.prototype.hasOwnProperty, d1 = new Set(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp"].map((e) => "[object " + e + "]"));
function Ld(e) {
  if (e !== Object(e) || d1.has(c1.call(e)) === true || e.constructor && nu.call(e, "constructor") === false && nu.call(e.constructor.prototype, "isPrototypeOf") === false) return false;
  let t;
  for (t in e) ;
  return t === void 0 || nu.call(e, t);
}
function Th() {
  let e, t, n, r, l, a, o = arguments[0] || {}, i = 1, u = false;
  const c = arguments.length;
  for (typeof o == "boolean" && (u = o, o = arguments[1] || {}, i = 2), Object(o) !== o && typeof o != "function" && (o = {}), c === i && (o = this, i--); i < c; i++) if ((e = arguments[i]) !== null) for (t in e) n = o[t], r = e[t], o !== r && (u === true && r && ((l = Array.isArray(r)) || Ld(r) === true) ? (l === true ? a = Array.isArray(n) === true ? n : [] : a = Ld(n) === true ? n : {}, o[t] = Th(u, a, r)) : r !== void 0 && (o[t] = r));
  return o;
}
he({ name: "QEditor", props: { ...nt, ...Ns, modelValue: { type: String, required: true }, readonly: Boolean, disable: Boolean, minHeight: { type: String, default: "10rem" }, maxHeight: String, height: String, definitions: Object, fonts: Object, placeholder: String, toolbar: { type: Array, validator: (e) => e.length === 0 || e.every((t) => t.length), default: () => [["left", "center", "right", "justify"], ["bold", "italic", "underline", "strike"], ["undo", "redo"]] }, toolbarColor: String, toolbarBg: String, toolbarTextColor: String, toolbarToggleColor: { type: String, default: "primary" }, toolbarOutline: Boolean, toolbarPush: Boolean, toolbarRounded: Boolean, paragraphTag: { type: String, validator: (e) => ["div", "p"].includes(e), default: "div" }, contentStyle: Object, contentClass: [Object, Array, String], square: Boolean, flat: Boolean, dense: Boolean }, emits: [...Hs, "update:modelValue", "keydown", "click", "focus", "blur", "dropdownShow", "dropdownHide", "dropdownBeforeShow", "dropdownBeforeHide", "linkShow", "linkHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = lt(e, l), { inFullscreen: o, toggleFullscreen: i } = js(), u = kh(), c = K(null), s = K(null), f = K(null), h = K(false), m = v(() => !e.readonly && !e.disable);
  let g, w, x = e.modelValue;
  document.execCommand("defaultParagraphSeparator", false, e.paragraphTag), g = window.getComputedStyle(document.body).fontFamily;
  const k = v(() => e.toolbarBg ? ` bg-${e.toolbarBg}` : ""), y = v(() => ({ type: "a", flat: e.toolbarOutline !== true && e.toolbarPush !== true, noWrap: true, outline: e.toolbarOutline, push: e.toolbarPush, rounded: e.toolbarRounded, dense: true, color: e.toolbarColor, disable: !m.value, size: "sm" })), p = v(() => {
    const $ = l.lang.editor, A = l.iconSet.editor;
    return { bold: { cmd: "bold", icon: A.bold, tip: $.bold, key: 66 }, italic: { cmd: "italic", icon: A.italic, tip: $.italic, key: 73 }, strike: { cmd: "strikeThrough", icon: A.strikethrough, tip: $.strikethrough, key: 83 }, underline: { cmd: "underline", icon: A.underline, tip: $.underline, key: 85 }, unordered: { cmd: "insertUnorderedList", icon: A.unorderedList, tip: $.unorderedList }, ordered: { cmd: "insertOrderedList", icon: A.orderedList, tip: $.orderedList }, subscript: { cmd: "subscript", icon: A.subscript, tip: $.subscript, htmlTip: "x<subscript>2</subscript>" }, superscript: { cmd: "superscript", icon: A.superscript, tip: $.superscript, htmlTip: "x<superscript>2</superscript>" }, link: { cmd: "link", disable: (Y) => Y.caret && !Y.caret.can("link"), icon: A.hyperlink, tip: $.hyperlink, key: 76 }, fullscreen: { cmd: "fullscreen", icon: A.toggleFullscreen, tip: $.toggleFullscreen, key: 70 }, viewsource: { cmd: "viewsource", icon: A.viewSource, tip: $.viewSource }, quote: { cmd: "formatBlock", param: "BLOCKQUOTE", icon: A.quote, tip: $.quote, key: 81 }, left: { cmd: "justifyLeft", icon: A.left, tip: $.left }, center: { cmd: "justifyCenter", icon: A.center, tip: $.center }, right: { cmd: "justifyRight", icon: A.right, tip: $.right }, justify: { cmd: "justifyFull", icon: A.justify, tip: $.justify }, print: { type: "no-state", cmd: "print", icon: A.print, tip: $.print, key: 80 }, outdent: { type: "no-state", disable: (Y) => Y.caret && !Y.caret.can("outdent"), cmd: "outdent", icon: A.outdent, tip: $.outdent }, indent: { type: "no-state", disable: (Y) => Y.caret && !Y.caret.can("indent"), cmd: "indent", icon: A.indent, tip: $.indent }, removeFormat: { type: "no-state", cmd: "removeFormat", icon: A.removeFormat, tip: $.removeFormat }, hr: { type: "no-state", cmd: "insertHorizontalRule", icon: A.hr, tip: $.hr }, undo: { type: "no-state", cmd: "undo", icon: A.undo, tip: $.undo, key: 90 }, redo: { type: "no-state", cmd: "redo", icon: A.redo, tip: $.redo, key: 89 }, h1: { cmd: "formatBlock", param: "H1", icon: A.heading1 || A.heading, tip: $.heading1, htmlTip: `<h1 class="q-ma-none">${$.heading1}</h1>` }, h2: { cmd: "formatBlock", param: "H2", icon: A.heading2 || A.heading, tip: $.heading2, htmlTip: `<h2 class="q-ma-none">${$.heading2}</h2>` }, h3: { cmd: "formatBlock", param: "H3", icon: A.heading3 || A.heading, tip: $.heading3, htmlTip: `<h3 class="q-ma-none">${$.heading3}</h3>` }, h4: { cmd: "formatBlock", param: "H4", icon: A.heading4 || A.heading, tip: $.heading4, htmlTip: `<h4 class="q-ma-none">${$.heading4}</h4>` }, h5: { cmd: "formatBlock", param: "H5", icon: A.heading5 || A.heading, tip: $.heading5, htmlTip: `<h5 class="q-ma-none">${$.heading5}</h5>` }, h6: { cmd: "formatBlock", param: "H6", icon: A.heading6 || A.heading, tip: $.heading6, htmlTip: `<h6 class="q-ma-none">${$.heading6}</h6>` }, p: { cmd: "formatBlock", param: e.paragraphTag, icon: A.heading, tip: $.paragraph }, code: { cmd: "formatBlock", param: "PRE", icon: A.code, htmlTip: `<code>${$.code}</code>` }, "size-1": { cmd: "fontSize", param: "1", icon: A.size1 || A.size, tip: $.size1, htmlTip: `<font size="1">${$.size1}</font>` }, "size-2": { cmd: "fontSize", param: "2", icon: A.size2 || A.size, tip: $.size2, htmlTip: `<font size="2">${$.size2}</font>` }, "size-3": { cmd: "fontSize", param: "3", icon: A.size3 || A.size, tip: $.size3, htmlTip: `<font size="3">${$.size3}</font>` }, "size-4": { cmd: "fontSize", param: "4", icon: A.size4 || A.size, tip: $.size4, htmlTip: `<font size="4">${$.size4}</font>` }, "size-5": { cmd: "fontSize", param: "5", icon: A.size5 || A.size, tip: $.size5, htmlTip: `<font size="5">${$.size5}</font>` }, "size-6": { cmd: "fontSize", param: "6", icon: A.size6 || A.size, tip: $.size6, htmlTip: `<font size="6">${$.size6}</font>` }, "size-7": { cmd: "fontSize", param: "7", icon: A.size7 || A.size, tip: $.size7, htmlTip: `<font size="7">${$.size7}</font>` } };
  }), b = v(() => {
    const $ = e.definitions || {}, A = e.definitions || e.fonts ? Th(true, {}, p.value, $, u1(g, l.lang.editor.defaultFont, l.iconSet.editor.font, e.fonts)) : p.value;
    return e.toolbar.map((Y) => Y.map((V) => {
      if (V.options) return { type: "dropdown", icon: V.icon, label: V.label, size: "sm", dense: true, fixedLabel: V.fixedLabel, fixedIcon: V.fixedIcon, highlight: V.highlight, list: V.list, options: V.options.map((be) => A[be]) };
      const ne = A[V];
      return ne ? ne.type === "no-state" || $[V] && (ne.cmd === void 0 || p.value[ne.cmd] && p.value[ne.cmd].type === "no-state") ? ne : Object.assign({ type: "toggle" }, ne) : { type: "slot", slot: V };
    }));
  }), C = { $q: l, props: e, slots: t, emit: n, inFullscreen: o, toggleFullscreen: i, runCmd: _, isViewingSource: h, editLinkUrl: f, toolbarBackgroundClass: k, buttonProps: y, contentRef: s, buttons: b, setContent: X };
  ge(() => e.modelValue, ($) => {
    x !== $ && (x = $, X($, true));
  }), ge(f, ($) => {
    n(`link${$ ? "Show" : "Hide"}`);
  });
  const P = v(() => e.toolbar && e.toolbar.length !== 0), O = v(() => {
    const $ = {}, A = (Y) => {
      Y.key && ($[Y.key] = { cmd: Y.cmd, param: Y.param });
    };
    return b.value.forEach((Y) => {
      Y.forEach((V) => {
        V.options ? V.options.forEach(A) : A(V);
      });
    }), $;
  }), H = v(() => o.value ? e.contentStyle : [{ minHeight: e.minHeight, height: e.height, maxHeight: e.maxHeight }, e.contentStyle]), B = v(() => `q-editor q-editor--${h.value === true ? "source" : "default"}` + (e.disable === true ? " disabled" : "") + (o.value === true ? " fullscreen column" : "") + (e.square === true ? " q-editor--square no-border-radius" : "") + (e.flat === true ? " q-editor--flat" : "") + (e.dense === true ? " q-editor--dense" : "") + (a.value === true ? " q-editor--dark q-dark" : "")), L = v(() => [e.contentClass, "q-editor__content", { col: o.value, "overflow-auto": o.value || e.maxHeight }]), N = v(() => e.disable === true ? { "aria-disabled": "true" } : {});
  function q() {
    if (s.value !== null) {
      const $ = `inner${h.value === true ? "Text" : "HTML"}`, A = s.value[$];
      A !== e.modelValue && (x = A, n("update:modelValue", A));
    }
  }
  function R($) {
    if (n("keydown", $), $.ctrlKey !== true || Zl($) === true) {
      D();
      return;
    }
    const A = $.keyCode, Y = O.value[A];
    if (Y !== void 0) {
      const { cmd: V, param: ne } = Y;
      je($), _(V, ne, false);
    }
  }
  function T($) {
    D(), n("click", $);
  }
  function j($) {
    if (s.value !== null) {
      const { scrollTop: A, scrollHeight: Y } = s.value;
      w = Y - A;
    }
    C.caret.save(), n("blur", $);
  }
  function W($) {
    Qe(() => {
      s.value !== null && w !== void 0 && (s.value.scrollTop = s.value.scrollHeight - w);
    }), n("focus", $);
  }
  function U($) {
    const A = c.value;
    if (A !== null && A.contains($.target) === true && ($.relatedTarget === null || A.contains($.relatedTarget) !== true)) {
      const Y = `inner${h.value === true ? "Text" : "HTML"}`;
      C.caret.restorePosition(s.value[Y].length), D();
    }
  }
  function Z($) {
    const A = c.value;
    A !== null && A.contains($.target) === true && ($.relatedTarget === null || A.contains($.relatedTarget) !== true) && (C.caret.savePosition(), D());
  }
  function ae() {
    w = void 0;
  }
  function ye($) {
    C.caret.save();
  }
  function X($, A) {
    if (s.value !== null) {
      A === true && C.caret.savePosition();
      const Y = `inner${h.value === true ? "Text" : "HTML"}`;
      s.value[Y] = $, A === true && (C.caret.restorePosition(s.value[Y].length), D());
    }
  }
  function _($, A, Y = true) {
    F(), C.caret.restore(), C.caret.apply($, A, () => {
      F(), C.caret.save(), Y && D();
    });
  }
  function D() {
    setTimeout(() => {
      f.value = null, r.$forceUpdate();
    }, 1);
  }
  function F() {
    Br(() => {
      var _a3;
      (_a3 = s.value) == null ? void 0 : _a3.focus({ preventScroll: true });
    });
  }
  function me() {
    return s.value;
  }
  return ct(() => {
    C.caret = r.caret = new r1(s.value, C), X(e.modelValue), D(), document.addEventListener("selectionchange", ye);
  }), We(() => {
    document.removeEventListener("selectionchange", ye);
  }), Object.assign(r, { runCmd: _, refreshToolbar: D, focus: F, getContentEl: me }), () => {
    let $;
    if (P.value) {
      const A = [d("div", { key: "qedt_top", class: "q-editor__toolbar row no-wrap scroll-x" + k.value }, i1(C))];
      f.value !== null && A.push(d("div", { key: "qedt_btm", class: "q-editor__toolbar row no-wrap items-center scroll-x" + k.value }, s1(C))), $ = d("div", { key: "toolbar_ctainer", class: "q-editor__toolbars-container" }, A);
    }
    return d("div", { ref: c, class: B.value, style: { height: o.value === true ? "100%" : null }, ...N.value, onFocusin: U, onFocusout: Z }, [$, d("div", { ref: s, style: H.value, class: L.value, contenteditable: m.value, placeholder: e.placeholder, ...u.listeners.value, onInput: q, onKeydown: R, onClick: T, onBlur: j, onFocus: W, onMousedown: ae, onTouchstartPassive: ae })]);
  };
} });
var Yu = he({ name: "QItemLabel", props: { overline: Boolean, caption: Boolean, header: Boolean, lines: [Number, String] }, setup(e, { slots: t }) {
  const n = v(() => parseInt(e.lines, 10)), r = v(() => "q-item__label" + (e.overline === true ? " q-item__label--overline text-overline" : "") + (e.caption === true ? " q-item__label--caption text-caption" : "") + (e.header === true ? " q-item__label--header" : "") + (n.value === 1 ? " ellipsis" : "")), l = v(() => e.lines !== void 0 && n.value > 1 ? { overflow: "hidden", display: "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": n.value } : null);
  return () => d("div", { style: l.value, class: r.value }, Pe(t.default));
} }), Ys = he({ name: "QSlideTransition", props: { appear: Boolean, duration: { type: Number, default: 300 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: n }) {
  let r = false, l, a, o = null, i = null, u, c;
  function s() {
    l == null ? void 0 : l(), l = null, r = false, o !== null && (clearTimeout(o), o = null), i !== null && (clearTimeout(i), i = null), a == null ? void 0 : a.removeEventListener("transitionend", u), u = null;
  }
  function f(w, x, k) {
    x !== void 0 && (w.style.height = `${x}px`), w.style.transition = `height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`, r = true, l = k;
  }
  function h(w, x) {
    w.style.overflowY = null, w.style.height = null, w.style.transition = null, s(), x !== c && n(x);
  }
  function m(w, x) {
    let k = 0;
    a = w, r === true ? (s(), k = w.offsetHeight === w.scrollHeight ? 0 : void 0) : (c = "hide", w.style.overflowY = "hidden"), f(w, k, x), o = setTimeout(() => {
      o = null, w.style.height = `${w.scrollHeight}px`, u = (y) => {
        i = null, (Object(y) !== y || y.target === w) && h(w, "show");
      }, w.addEventListener("transitionend", u), i = setTimeout(u, e.duration * 1.1);
    }, 100);
  }
  function g(w, x) {
    let k;
    a = w, r === true ? s() : (c = "show", w.style.overflowY = "hidden", k = w.scrollHeight), f(w, k, x), o = setTimeout(() => {
      o = null, w.style.height = 0, u = (y) => {
        i = null, (Object(y) !== y || y.target === w) && h(w, "hide");
      }, w.addEventListener("transitionend", u), i = setTimeout(u, e.duration * 1.1);
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
} }), $l = ms({}), v1 = Object.keys(La);
he({ name: "QExpansionItem", props: { ...La, ...$r, ...nt, icon: String, label: String, labelLines: [Number, String], caption: String, captionLines: [Number, String], dense: Boolean, toggleAriaLabel: String, expandIcon: String, expandedIcon: String, expandIconClass: [Array, String, Object], duration: {}, headerInsetLevel: Number, contentInsetLevel: Number, expandSeparator: Boolean, defaultOpened: Boolean, hideExpandIcon: Boolean, expandIconToggle: Boolean, switchToggleSide: Boolean, denseToggle: Boolean, group: String, popup: Boolean, headerStyle: [Array, String, Object], headerClass: [Array, String, Object] }, emits: [...Pr, "click", "afterShow", "afterHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = lt(e, r), a = K(e.modelValue !== null ? e.modelValue : e.defaultOpened), o = K(null), i = gi(), { show: u, hide: c, toggle: s } = Lr({ showing: a });
  let f, h;
  const m = v(() => `q-expansion-item q-item-type q-expansion-item--${a.value === true ? "expanded" : "collapsed"} q-expansion-item--${e.popup === true ? "popup" : "standard"}`), g = v(() => e.contentInsetLevel === void 0 ? null : { ["padding" + (r.lang.rtl === true ? "Right" : "Left")]: e.contentInsetLevel * 56 + "px" }), w = v(() => e.disable !== true && (e.href !== void 0 || e.to !== void 0 && e.to !== null && e.to !== "")), x = v(() => {
    const U = {};
    return v1.forEach((Z) => {
      U[Z] = e[Z];
    }), U;
  }), k = v(() => w.value === true || e.expandIconToggle !== true), y = v(() => e.expandedIcon !== void 0 && a.value === true ? e.expandedIcon : e.expandIcon || r.iconSet.expansionItem[e.denseToggle === true ? "denseIcon" : "icon"]), p = v(() => e.disable !== true && (w.value === true || e.expandIconToggle === true)), b = v(() => ({ expanded: a.value === true, detailsId: i.value, toggle: s, show: u, hide: c })), C = v(() => {
    const U = e.toggleAriaLabel !== void 0 ? e.toggleAriaLabel : r.lang.label[a.value === true ? "collapse" : "expand"](e.label);
    return { role: "button", "aria-expanded": a.value === true ? "true" : "false", "aria-controls": i.value, "aria-label": U };
  });
  ge(() => e.group, (U) => {
    h == null ? void 0 : h(), U !== void 0 && N();
  });
  function P(U) {
    w.value !== true && s(U), n("click", U);
  }
  function O(U) {
    U.keyCode === 13 && H(U, true);
  }
  function H(U, Z) {
    var _a3;
    Z !== true && U.qAvoidFocus !== true && ((_a3 = o.value) == null ? void 0 : _a3.focus()), s(U), je(U);
  }
  function B() {
    n("afterShow");
  }
  function L() {
    n("afterHide");
  }
  function N() {
    f === void 0 && (f = ka()), a.value === true && ($l[e.group] = f);
    const U = ge(a, (ae) => {
      ae === true ? $l[e.group] = f : $l[e.group] === f && delete $l[e.group];
    }), Z = ge(() => $l[e.group], (ae, ye) => {
      ye === f && ae !== void 0 && ae !== f && c();
    });
    h = () => {
      U(), Z(), $l[e.group] === f && delete $l[e.group], h = void 0;
    };
  }
  function q() {
    const U = { class: [`q-focusable relative-position cursor-pointer${e.denseToggle === true && e.switchToggleSide === true ? " items-end" : ""}`, e.expandIconClass], side: e.switchToggleSide !== true, avatar: e.switchToggleSide }, Z = [d(et, { class: "q-expansion-item__toggle-icon" + (e.expandedIcon === void 0 && a.value === true ? " q-expansion-item__toggle-icon--rotated" : ""), name: y.value })];
    return p.value === true && (Object.assign(U, { tabindex: 0, ...C.value, onClick: H, onKeyup: O }), Z.unshift(d("div", { ref: o, class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded", tabindex: -1 }))), d(hn, U, () => Z);
  }
  function R() {
    let U;
    return t.header !== void 0 ? U = [].concat(t.header(b.value)) : (U = [d(hn, () => [d(Yu, { lines: e.labelLines }, () => e.label || ""), e.caption ? d(Yu, { lines: e.captionLines, caption: true }, () => e.caption) : null])], e.icon && U[e.switchToggleSide === true ? "push" : "unshift"](d(hn, { side: e.switchToggleSide === true, avatar: e.switchToggleSide !== true }, () => d(et, { name: e.icon })))), e.disable !== true && e.hideExpandIcon !== true && U[e.switchToggleSide === true ? "unshift" : "push"](q()), U;
  }
  function T() {
    const U = { ref: "item", style: e.headerStyle, class: e.headerClass, dark: l.value, disable: e.disable, dense: e.dense, insetLevel: e.headerInsetLevel };
    return k.value === true && (U.clickable = true, U.onClick = P, Object.assign(U, w.value === true ? x.value : C.value)), d(qr, U, R);
  }
  function j() {
    return cn(d("div", { key: "e-content", class: "q-expansion-item__content relative-position", style: g.value, id: i.value }, Pe(t.default)), [[Zv, a.value]]);
  }
  function W() {
    const U = [T(), d(Ys, { duration: e.duration, onShow: B, onHide: L }, j)];
    return e.expandSeparator === true && U.push(d(Yl, { class: "q-expansion-item__border q-expansion-item__border--top absolute-top", dark: l.value }), d(Yl, { class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom", dark: l.value })), U;
  }
  return e.group !== void 0 && N(), We(() => {
    h == null ? void 0 : h();
  }), () => d("div", { class: m.value }, [d("div", { class: "q-expansion-item__container relative-position" }, W())]);
} });
var m1 = ["top", "right", "bottom", "left"], Xu = { type: { type: String, default: "a" }, outline: Boolean, push: Boolean, flat: Boolean, unelevated: Boolean, color: String, textColor: String, glossy: Boolean, square: Boolean, padding: String, label: { type: [String, Number], default: "" }, labelPosition: { type: String, default: "right", validator: (e) => m1.includes(e) }, externalLabel: Boolean, hideLabel: { type: Boolean }, labelClass: [Array, String, Object], labelStyle: [Array, String, Object], disable: Boolean, tabindex: [Number, String] };
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
he({ name: "QFab", props: { ...Xu, ...$r, icon: String, activeIcon: String, hideIcon: Boolean, hideLabel: { ...Xu.hideLabel, default: null }, direction: { type: String, default: "right", validator: (e) => h1.includes(e) }, persistent: Boolean, verticalActionsAlign: { type: String, default: "center", validator: (e) => g1.includes(e) } }, emits: Pr, setup(e, { slots: t }) {
  const n = K(null), r = K(e.modelValue === true), l = gi(), { proxy: { $q: a } } = xe(), { formClass: o, labelProps: i } = qh(e, r), u = v(() => e.persistent !== true), { hide: c, toggle: s } = Lr({ showing: r, hideOnRouteChange: u }), f = v(() => ({ opened: r.value })), h = v(() => `q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${o.value}` + (r.value === true ? " q-fab--opened" : " q-fab--closed")), m = v(() => `q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${r.value === true ? "opened" : "closed"}`), g = v(() => {
    const y = { id: l.value, role: "menu" };
    return r.value !== true && (y["aria-hidden"] = "true"), y;
  }), w = v(() => `q-fab__icon-holder  q-fab__icon-holder--${r.value === true ? "opened" : "closed"}`);
  function x(y, p) {
    const b = t[y], C = `q-fab__${y} absolute-full`;
    return b === void 0 ? d(et, { class: C, name: e[p] || a.iconSet.fab[p] }) : d("div", { class: C }, b(f.value));
  }
  function k() {
    const y = [];
    return e.hideIcon !== true && y.push(d("div", { class: w.value }, [x("icon", "icon"), x("active-icon", "activeIcon")])), (e.label !== "" || t.label !== void 0) && y[i.value.action](d("div", i.value.data, t.label !== void 0 ? t.label(f.value) : [e.label])), qt(t.tooltip, y);
  }
  return gn(mm, { showing: r, onChildClick(y) {
    var _a3;
    c(y), (y == null ? void 0 : y.qAvoidFocus) !== true && ((_a3 = n.value) == null ? void 0 : _a3.$el.focus());
  } }), () => d("div", { class: h.value }, [d(Je, { ref: n, class: o.value, ...e, noWrap: true, stack: e.stacked, align: void 0, icon: void 0, label: void 0, noCaps: true, fab: true, "aria-expanded": r.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": l.value, onClick: s }, k), d("div", { class: m.value, ...g.value }, Pe(t.default))]);
} });
var Mh = { start: "self-end", center: "self-center", end: "self-start" }, b1 = Object.keys(Mh);
he({ name: "QFabAction", props: { ...Xu, icon: { type: String, default: "" }, anchor: { type: String, validator: (e) => b1.includes(e) }, to: [String, Object], replace: Boolean }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const r = Mt(mm, () => ({ showing: { value: true }, onChildClick: St })), { formClass: l, labelProps: a } = qh(e, r.showing), o = v(() => {
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
  const { props: n, proxy: r } = xe(), l = K(false), a = K(null), o = K(false);
  p1({ validate: w, resetValidation: g });
  let i = 0, u;
  const c = v(() => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0), s = v(() => n.disable !== true && c.value === true && t.value === false), f = v(() => n.error === true || l.value === true), h = v(() => typeof n.errorMessage == "string" && n.errorMessage.length !== 0 ? n.errorMessage : a.value);
  ge(() => n.modelValue, () => {
    o.value = true, s.value === true && n.lazyRules === false && x();
  });
  function m() {
    n.lazyRules !== "ondemand" && s.value === true && o.value === true && x();
  }
  ge(() => n.reactiveRules, (k) => {
    k === true ? u === void 0 && (u = ge(() => n.rules, m, { immediate: true, deep: true })) : u !== void 0 && (u(), u = void 0);
  }, { immediate: true }), ge(() => n.lazyRules, m), ge(e, (k) => {
    k === true ? o.value = true : s.value === true && n.lazyRules !== "ondemand" && x();
  });
  function g() {
    i++, t.value = false, o.value = false, l.value = false, a.value = null, x.cancel();
  }
  function w(k = n.modelValue) {
    if (n.disable === true || c.value === false) return true;
    const y = ++i, p = t.value !== true ? () => {
      o.value = true;
    } : () => {
    }, b = (P, O) => {
      P === true && p(), l.value = P, a.value = O || null, t.value = false;
    }, C = [];
    for (let P = 0; P < n.rules.length; P++) {
      const O = n.rules[P];
      let H;
      if (typeof O == "function" ? H = O(k, fo) : typeof O == "string" && fo[O] !== void 0 && (H = fo[O](k)), H === false || typeof H == "string") return b(true, H), false;
      H !== true && H !== void 0 && C.push(H);
    }
    return C.length === 0 ? (b(false), true) : (t.value = true, Promise.all(C).then((P) => {
      if (P === void 0 || Array.isArray(P) === false || P.length === 0) return y === i && b(false), true;
      const O = P.find((H) => H === false || typeof H == "string");
      return y === i && b(O !== void 0, O), O === void 0;
    }, (P) => (y === i && (console.error(P), b(true)), false)));
  }
  const x = Ar(w, 0);
  return We(() => {
    u == null ? void 0 : u(), x.cancel();
  }), Object.assign(r, { resetValidation: g, validate: w }), Vt(r, "hasError", () => f.value), { isDirtyModel: o, hasRules: c, hasError: f, errorMessage: h, validate: w, resetValidation: g };
}
function Xl(e) {
  return e != null && ("" + e).length !== 0;
}
var Eh = { ...nt, ..._1, label: String, stackLabel: Boolean, hint: String, hideHint: Boolean, prefix: String, suffix: String, labelColor: String, color: String, bgColor: String, filled: Boolean, outlined: Boolean, borderless: Boolean, standout: [Boolean, String], square: Boolean, loading: Boolean, labelSlot: Boolean, bottomSlots: Boolean, hideBottomSpace: Boolean, rounded: Boolean, dense: Boolean, itemAligned: Boolean, counter: Boolean, clearable: Boolean, clearIcon: String, disable: Boolean, readonly: Boolean, autofocus: Boolean, for: String }, pi = { ...Eh, maxlength: [Number, String] }, yi = ["update:modelValue", "clear", "focus", "blur"];
function _i({ requiredForAttr: e = true, tagProp: t, changeEvent: n = false } = {}) {
  const { props: r, proxy: l } = xe(), a = lt(r, l.$q), o = gi({ required: e, getValue: () => r.for });
  return { requiredForAttr: e, changeEvent: n, tag: t === true ? v(() => r.tag) : { value: "label" }, isDark: a, editable: v(() => r.disable !== true && r.readonly !== true), innerLoading: K(false), focused: K(false), hasPopupOpen: false, splitAttrs: kh(), targetUid: o, rootRef: K(null), targetRef: K(null), controlRef: K(null) };
}
function wi(e) {
  const { props: t, emit: n, slots: r, attrs: l, proxy: a } = xe(), { $q: o } = a;
  let i = null;
  e.hasValue === void 0 && (e.hasValue = v(() => Xl(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (Z) => {
    n("update:modelValue", Z);
  }), e.controlEvents === void 0 && (e.controlEvents = { onFocusin: B, onFocusout: L }), Object.assign(e, { clearValue: N, onControlFocusin: B, onControlFocusout: L, focus: O }), e.computedCounter === void 0 && (e.computedCounter = v(() => {
    if (t.counter !== false) {
      const Z = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === true ? t.modelValue.length : 0, ae = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
      return Z + (ae !== void 0 ? " / " + ae : "");
    }
  }));
  const { isDirtyModel: u, hasRules: c, hasError: s, errorMessage: f, resetValidation: h } = w1(e.focused, e.innerLoading), m = e.floatingLabel !== void 0 ? v(() => t.stackLabel === true || e.focused.value === true || e.floatingLabel.value === true) : v(() => t.stackLabel === true || e.focused.value === true || e.hasValue.value === true), g = v(() => t.bottomSlots === true || t.hint !== void 0 || c.value === true || t.counter === true || t.error !== null), w = v(() => t.filled === true ? "filled" : t.outlined === true ? "outlined" : t.borderless === true ? "borderless" : t.standout ? "standout" : "standard"), x = v(() => `q-field row no-wrap items-start q-field--${w.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === true ? " q-field--rounded" : "") + (t.square === true ? " q-field--square" : "") + (m.value === true ? " q-field--float" : "") + (y.value === true ? " q-field--labeled" : "") + (t.dense === true ? " q-field--dense" : "") + (t.itemAligned === true ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === true ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === true ? " q-field--focused" : "") + (s.value === true ? " q-field--error" : "") + (s.value === true || e.focused.value === true ? " q-field--highlighted" : "") + (t.hideBottomSpace !== true && g.value === true ? " q-field--with-bottom" : "") + (t.disable === true ? " q-field--disabled" : t.readonly === true ? " q-field--readonly" : "")), k = v(() => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (s.value === true ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === true ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")), y = v(() => t.labelSlot === true || t.label !== void 0), p = v(() => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && s.value !== true ? ` text-${t.labelColor}` : "")), b = v(() => ({ id: e.targetUid.value, editable: e.editable.value, focused: e.focused.value, floatingLabel: m.value, modelValue: t.modelValue, emitValue: e.emitValue })), C = v(() => {
    const Z = {};
    return e.targetUid.value && (Z.for = e.targetUid.value), t.disable === true && (Z["aria-disabled"] = "true"), Z;
  });
  function P() {
    var _a3;
    const Z = document.activeElement;
    let ae = (_a3 = e.targetRef) == null ? void 0 : _a3.value;
    ae && (Z === null || Z.id !== e.targetUid.value) && (ae.hasAttribute("tabindex") === true || (ae = ae.querySelector("[tabindex]")), ae !== Z && (ae == null ? void 0 : ae.focus({ preventScroll: true })));
  }
  function O() {
    Br(P);
  }
  function H() {
    ty(P);
    const Z = document.activeElement;
    Z !== null && e.rootRef.value.contains(Z) && Z.blur();
  }
  function B(Z) {
    i !== null && (clearTimeout(i), i = null), e.editable.value === true && e.focused.value === false && (e.focused.value = true, n("focus", Z));
  }
  function L(Z, ae) {
    i !== null && clearTimeout(i), i = setTimeout(() => {
      i = null, !(document.hasFocus() === true && (e.hasPopupOpen === true || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement) !== false)) && (e.focused.value === true && (e.focused.value = false, n("blur", Z)), ae == null ? void 0 : ae());
    });
  }
  function N(Z) {
    var _a3;
    je(Z), o.platform.is.mobile !== true ? (((_a3 = e.targetRef) == null ? void 0 : _a3.value) || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === true && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), n("update:modelValue", null), e.changeEvent === true && n("change", null), n("clear", t.modelValue), Qe(() => {
      const ae = u.value;
      h(), u.value = ae;
    });
  }
  function q(Z) {
    [13, 32].includes(Z.keyCode) && N(Z);
  }
  function R() {
    const Z = [];
    return r.prepend !== void 0 && Z.push(d("div", { class: "q-field__prepend q-field__marginal row no-wrap items-center", key: "prepend", onClick: Dt }, r.prepend())), Z.push(d("div", { class: "q-field__control-container col relative-position row no-wrap q-anchor--skip" }, T())), s.value === true && t.noErrorIcon === false && Z.push(W("error", [d(et, { name: o.iconSet.field.error, color: "negative" })])), t.loading === true || e.innerLoading.value === true ? Z.push(W("inner-loading-append", r.loading !== void 0 ? r.loading() : [d(wn, { color: t.color })])) : t.clearable === true && e.hasValue.value === true && e.editable.value === true && Z.push(W("inner-clearable-append", [d(et, { class: "q-field__focusable-action", name: t.clearIcon || o.iconSet.field.clear, tabindex: 0, role: "button", "aria-hidden": "false", "aria-label": o.lang.label.clear, onKeyup: q, onClick: N })])), r.append !== void 0 && Z.push(d("div", { class: "q-field__append q-field__marginal row no-wrap items-center", key: "append", onClick: Dt }, r.append())), e.getInnerAppend !== void 0 && Z.push(W("inner-append", e.getInnerAppend())), e.getControlChild !== void 0 && Z.push(e.getControlChild()), Z;
  }
  function T() {
    const Z = [];
    return t.prefix !== void 0 && t.prefix !== null && Z.push(d("div", { class: "q-field__prefix no-pointer-events row items-center" }, t.prefix)), e.getShadowControl !== void 0 && e.hasShadow.value === true && Z.push(e.getShadowControl()), e.getControl !== void 0 ? Z.push(e.getControl()) : r.rawControl !== void 0 ? Z.push(r.rawControl()) : r.control !== void 0 && Z.push(d("div", { ref: e.targetRef, class: "q-field__native row", tabindex: -1, ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0 }, r.control(b.value))), y.value === true && Z.push(d("div", { class: p.value }, Pe(r.label, t.label))), t.suffix !== void 0 && t.suffix !== null && Z.push(d("div", { class: "q-field__suffix no-pointer-events row items-center" }, t.suffix)), Z.concat(Pe(r.default));
  }
  function j() {
    let Z, ae;
    s.value === true ? f.value !== null ? (Z = [d("div", { role: "alert" }, f.value)], ae = `q--slot-error-${f.value}`) : (Z = Pe(r.error), ae = "q--slot-error") : (t.hideHint !== true || e.focused.value === true) && (t.hint !== void 0 ? (Z = [d("div", t.hint)], ae = `q--slot-hint-${t.hint}`) : (Z = Pe(r.hint), ae = "q--slot-hint"));
    const ye = t.counter === true || r.counter !== void 0;
    if (t.hideBottomSpace === true && ye === false && Z === void 0) return;
    const X = d("div", { key: ae, class: "q-field__messages col" }, Z);
    return d("div", { class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== true ? "animated" : "stale"), onClick: Dt }, [t.hideBottomSpace === true ? X : d(Ot, { name: "q-transition--field-message" }, () => X), ye === true ? d("div", { class: "q-field__counter" }, r.counter !== void 0 ? r.counter() : e.computedCounter.value) : null]);
  }
  function W(Z, ae) {
    return ae === null ? null : d("div", { key: Z, class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip" }, ae);
  }
  let U = false;
  return Dn(() => {
    U = true;
  }), kl(() => {
    U === true && t.autofocus === true && a.focus();
  }), t.autofocus === true && ct(() => {
    a.focus();
  }), We(() => {
    i !== null && clearTimeout(i);
  }), Object.assign(a, { focus: O, blur: H }), function() {
    const ae = e.getControl === void 0 && r.control === void 0 ? { ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0, ...C.value } : C.value;
    return d(e.tag.value, { ref: e.rootRef, class: [x.value, l.class], style: l.style, ...ae }, [r.before !== void 0 ? d("div", { class: "q-field__before q-field__marginal row no-wrap items-center", onClick: Dt }, r.before()) : null, d("div", { class: "q-field__inner relative-position col self-stretch" }, [d("div", { ref: e.controlRef, class: k.value, tabindex: -1, ...e.controlEvents }, R()), g.value === true ? j() : null]), r.after !== void 0 ? d("div", { class: "q-field__after q-field__marginal row no-wrap items-center", onClick: Dt }, r.after()) : null]);
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
function Za(e) {
  (e == null ? void 0 : e.dataTransfer) && (e.dataTransfer.dropEffect = "copy"), je(e);
}
var Rh = { multiple: Boolean, accept: String, capture: String, maxFileSize: [Number, String], maxTotalSize: [Number, String], maxFiles: [Number, String], filter: Function }, Ah = ["rejected"];
function $h({ editable: e, dnd: t, getFileInput: n, addFilesToQueue: r }) {
  const { props: l, emit: a, proxy: o } = xe(), i = K(null), u = v(() => l.accept !== void 0 ? l.accept.split(",").map((y) => (y = y.trim(), y === "*" ? "*/" : (y.endsWith("/*") && (y = y.slice(0, y.length - 1)), y.toUpperCase()))) : null), c = v(() => parseInt(l.maxFiles, 10)), s = v(() => parseInt(l.maxTotalSize, 10));
  function f(y) {
    var _a3;
    if (e.value) if (y !== Object(y) && (y = { target: null }), ((_a3 = y.target) == null ? void 0 : _a3.matches('input[type="file"]')) === true) y.clientX === 0 && y.clientY === 0 && xt(y);
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
    const O = [], H = () => {
      O.length !== 0 && a("rejected", O);
    };
    if (l.accept !== void 0 && u.value.indexOf("*/") === -1 && (P = ir(P, O, "accept", (B) => u.value.some((L) => B.type.toUpperCase().startsWith(L) || B.name.toUpperCase().endsWith(L))), P.length === 0)) return H();
    if (l.maxFileSize !== void 0) {
      const B = parseInt(l.maxFileSize, 10);
      if (P = ir(P, O, "max-file-size", (L) => L.size <= B), P.length === 0) return H();
    }
    if (l.multiple !== true && P.length !== 0 && (P = [P[0]]), P.forEach((B) => {
      B.__key = B.webkitRelativePath + B.lastModified + B.name + B.size;
    }), C === true) {
      const B = b.map((L) => L.__key);
      P = ir(P, O, "duplicate", (L) => B.includes(L.__key) === false);
    }
    if (P.length === 0) return H();
    if (l.maxTotalSize !== void 0) {
      let B = C === true ? b.reduce((L, N) => L + N.size, 0) : 0;
      if (P = ir(P, O, "max-total-size", (L) => (B += L.size, B <= s.value)), P.length === 0) return H();
    }
    if (typeof l.filter == "function") {
      const B = l.filter(P);
      P = ir(P, O, "filter", (L) => B.includes(L));
    }
    if (l.maxFiles !== void 0) {
      let B = C === true ? b.length : 0;
      if (P = ir(P, O, "max-files", () => (B++, B <= c.value)), P.length === 0) return H();
    }
    if (H(), P.length !== 0) return P;
  }
  function g(y) {
    Za(y), t.value !== true && (t.value = true);
  }
  function w(y) {
    je(y), (y.relatedTarget !== null || Ie.is.safari !== true ? y.relatedTarget !== i.value : document.elementsFromPoint(y.clientX, y.clientY).includes(i.value) === false) === true && (t.value = false);
  }
  function x(y) {
    Za(y);
    const p = y.dataTransfer.files;
    p.length !== 0 && r(null, p), t.value = false;
  }
  function k(y) {
    if (t.value === true) return d("div", { ref: i, class: `q-${y}__dnd absolute-full`, onDragenter: Za, onDragover: Za, onDragleave: w, onDrop: x });
  }
  return Object.assign(o, { pickFiles: f, addFiles: h }), { pickFiles: f, addFiles: h, onDragover: g, onDragleave: w, processFiles: m, getDndNode: k, maxFilesNumber: c, maxTotalSizeNumber: s };
}
function Ph(e, t) {
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
  const { proxy: l } = xe(), a = _i(), o = K(null), i = K(false), u = Fs(e), { pickFiles: c, onDragover: s, onDragleave: f, processFiles: h, getDndNode: m } = $h({ editable: a.editable, dnd: i, getFileInput: q, addFilesToQueue: R }), g = Ph(e), w = v(() => Object(e.modelValue) === e.modelValue ? "length" in e.modelValue ? Array.from(e.modelValue) : [e.modelValue] : []), x = v(() => Xl(w.value)), k = v(() => w.value.map((U) => U.name).join(", ")), y = v(() => Vu(w.value.reduce((U, Z) => U + Z.size, 0))), p = v(() => ({ totalSize: y.value, filesNumber: w.value.length, maxFiles: e.maxFiles })), b = v(() => ({ tabindex: -1, type: "file", title: "", accept: e.accept, capture: e.capture, name: u.value, ...r, id: a.targetUid.value, disabled: a.editable.value !== true })), C = v(() => "q-file q-field--auto-height" + (i.value === true ? " q-file--dnd" : "")), P = v(() => e.multiple === true && e.append === true);
  function O(U) {
    const Z = w.value.slice();
    Z.splice(U, 1), B(Z);
  }
  function H(U) {
    const Z = w.value.indexOf(U);
    Z !== -1 && O(Z);
  }
  function B(U) {
    n("update:modelValue", e.multiple === true ? U : U[0]);
  }
  function L(U) {
    U.keyCode === 13 && Dt(U);
  }
  function N(U) {
    (U.keyCode === 13 || U.keyCode === 32) && c(U);
  }
  function q() {
    return o.value;
  }
  function R(U, Z) {
    const ae = h(U, Z, w.value, P.value), ye = q();
    ye != null && (ye.value = ""), ae !== void 0 && ((e.multiple === true ? e.modelValue && ae.every((X) => w.value.includes(X)) : e.modelValue === ae[0]) || B(P.value === true ? w.value.concat(ae) : ae));
  }
  function T() {
    return [d("input", { class: [e.inputClass, "q-file__filler"], style: e.inputStyle })];
  }
  function j() {
    if (t.file !== void 0) return w.value.length === 0 ? T() : w.value.map((Z, ae) => t.file({ index: ae, file: Z, ref: this }));
    if (t.selected !== void 0) return w.value.length === 0 ? T() : t.selected({ files: w.value, ref: this });
    if (e.useChips === true) return w.value.length === 0 ? T() : w.value.map((Z, ae) => d(Xm, { key: "file-" + ae, removable: a.editable.value, dense: true, textColor: e.color, tabindex: e.tabindex, onRemove: () => {
      O(ae);
    } }, () => d("span", { class: "ellipsis", textContent: Z.name })));
    const U = e.displayValue !== void 0 ? e.displayValue : k.value;
    return U.length !== 0 ? [d("div", { class: e.inputClass, style: e.inputStyle, textContent: U })] : T();
  }
  function W() {
    const U = { ref: o, ...b.value, ...g.value, class: "q-field__input fit absolute-full cursor-pointer", onChange: R };
    return e.multiple === true && (U.multiple = true), d("input", U);
  }
  return Object.assign(a, { fieldClass: C, emitValue: B, hasValue: x, inputRef: o, innerValue: w, floatingLabel: v(() => x.value === true || Xl(e.displayValue)), computedCounter: v(() => {
    if (e.counterLabel !== void 0) return e.counterLabel(p.value);
    const U = e.maxFiles;
    return `${w.value.length}${U !== void 0 ? " / " + U : ""} (${y.value})`;
  }), getControlChild: () => m("file"), getControl: () => {
    const U = { ref: a.targetRef, class: "q-field__native row items-center cursor-pointer", tabindex: e.tabindex };
    return a.editable.value === true && Object.assign(U, { onDragover: s, onDragleave: f, onKeydown: L, onKeyup: N }), d("div", U, [W()].concat(j()));
  } }), Object.assign(l, { removeAtIndex: O, removeFile: H, getNativeElement: () => o.value }), Vt(l, "nativeEl", () => o.value), wi(a);
} });
var S1 = he({ name: "QFooter", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = Mt(Jl, ot);
  if (l === ot) return console.error("QFooter needs to be child of QLayout"), ot;
  const a = K(parseInt(e.heightHint, 10)), o = K(true), i = K(rn.value === true || l.isContainer.value === true ? 0 : window.innerHeight), u = v(() => e.reveal === true || l.view.value.indexOf("F") !== -1 || r.platform.is.ios && l.isContainer.value === true), c = v(() => l.isContainer.value === true ? l.containerHeight.value : i.value), s = v(() => {
    if (e.modelValue !== true) return 0;
    if (u.value === true) return o.value === true ? a.value : 0;
    const C = l.scroll.value.position + c.value + a.value - l.height.value;
    return C > 0 ? C : 0;
  }), f = v(() => e.modelValue !== true || u.value === true && o.value !== true), h = v(() => e.modelValue === true && f.value === true && e.reveal === true), m = v(() => "q-footer q-layout__section--marginal " + (u.value === true ? "fixed" : "absolute") + "-bottom" + (e.bordered === true ? " q-footer--bordered" : "") + (f.value === true ? " q-footer--hidden" : "") + (e.modelValue !== true ? " q-layout--prevent-focus" + (u.value !== true ? " hidden" : "") : "")), g = v(() => {
    const C = l.rows.value.bottom, P = {};
    return C[0] === "l" && l.left.space === true && (P[r.lang.rtl === true ? "right" : "left"] = `${l.left.size}px`), C[2] === "r" && l.right.space === true && (P[r.lang.rtl === true ? "left" : "right"] = `${l.right.size}px`), P;
  });
  function w(C, P) {
    l.update("footer", C, P);
  }
  function x(C, P) {
    C.value !== P && (C.value = P);
  }
  function k({ height: C }) {
    x(a, C), w("size", C);
  }
  function y() {
    if (e.reveal !== true) return;
    const { direction: C, position: P, inflectionPoint: O } = l.scroll.value;
    x(o, C === "up" || P - O < 100 || l.height.value - c.value - P - a.value < 300);
  }
  function p(C) {
    h.value === true && x(o, true), n("focusin", C);
  }
  ge(() => e.modelValue, (C) => {
    w("space", C), x(o, true), l.animate();
  }), ge(s, (C) => {
    w("offset", C);
  }), ge(() => e.reveal, (C) => {
    C === false && x(o, e.modelValue);
  }), ge(o, (C) => {
    l.animate(), n("reveal", C);
  }), ge([a, l.scroll, l.height], y), ge(() => r.screen.height, (C) => {
    l.isContainer.value !== true && x(i, C);
  });
  const b = {};
  return l.instances.footer = b, e.modelValue === true && w("size", a.value), w("space", e.modelValue), w("offset", s.value), We(() => {
    l.instances.footer === b && (l.instances.footer = void 0, w("size", 0), w("offset", 0), w("space", false));
  }), () => {
    const C = qt(t.default, [d(Wl, { debounce: 0, onResize: k })]);
    return e.elevated === true && C.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), d("footer", { class: m.value, style: g.value, onFocusin: p }, C);
  };
} });
he({ name: "QForm", props: { autofocus: Boolean, noErrorFocus: Boolean, noResetFocus: Boolean, greedy: Boolean, onSubmit: Function }, emits: ["reset", "validationSuccess", "validationError"], setup(e, { slots: t, emit: n }) {
  const r = xe(), l = K(null);
  let a = 0;
  const o = [];
  function i(m) {
    const g = typeof m == "boolean" ? m : e.noErrorFocus !== true, w = ++a, x = (p, b) => {
      n(`validation${p === true ? "Success" : "Error"}`, b);
    }, k = (p) => {
      const b = p.validate();
      return typeof b.then == "function" ? b.then((C) => ({ valid: C, comp: p }), (C) => ({ valid: false, comp: p, err: C })) : Promise.resolve({ valid: b, comp: p });
    };
    return (e.greedy === true ? Promise.all(o.map(k)).then((p) => p.filter((b) => b.valid !== true)) : o.reduce((p, b) => p.then(() => k(b).then((C) => {
      if (C.valid === false) return Promise.reject(C);
    })), Promise.resolve()).catch((p) => [p])).then((p) => {
      if (p === void 0 || p.length === 0) return w === a && x(true), true;
      if (w === a) {
        const { comp: b, err: C } = p[0];
        if (C !== void 0 && console.error(C), x(false, b), g === true) {
          const P = p.find(({ comp: O }) => typeof O.focus == "function" && pl(O.$) === false);
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
    i().then((w) => {
      g === a && w === true && (e.onSubmit !== void 0 ? n("submit", m) : (m == null ? void 0 : m.target) !== void 0 && typeof m.target.submit == "function" && m.target.submit());
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
  }), Object.assign(r.proxy, { validate: i, resetValidation: u, submit: c, reset: s, focus: f, getValidationComponents: () => o }), () => d("form", { class: "q-form", ref: l, onSubmit: c, onReset: s }, Pe(t.default));
} });
var C1 = he({ name: "QHeader", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, revealOffset: { type: Number, default: 250 }, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = Mt(Jl, ot);
  if (l === ot) return console.error("QHeader needs to be child of QLayout"), ot;
  const a = K(parseInt(e.heightHint, 10)), o = K(true), i = v(() => e.reveal === true || l.view.value.indexOf("H") !== -1 || r.platform.is.ios && l.isContainer.value === true), u = v(() => {
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
  function w({ height: y }) {
    g(a, y), m("size", y);
  }
  function x(y) {
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
  const k = {};
  return l.instances.header = k, e.modelValue === true && m("size", a.value), m("space", e.modelValue), m("offset", u.value), We(() => {
    l.instances.header === k && (l.instances.header = void 0, m("size", 0), m("offset", 0), m("space", false));
  }), () => {
    const y = Pa(t.default, []);
    return e.elevated === true && y.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), y.push(d(Wl, { debounce: 0, onResize: w })), d("header", { class: f.value, style: h.value, onFocusin: x }, y);
  };
} }), Xs = { ratio: [String, Number] };
function Gs(e, t) {
  return v(() => {
    const n = Number(e.ratio || (t !== void 0 ? t.value : void 0));
    return isNaN(n) !== true && n > 0 ? { paddingBottom: `${100 / n}%` } : null;
  });
}
var k1 = 1.7778;
he({ name: "QImg", props: { ...Xs, src: String, srcset: String, sizes: String, alt: String, crossorigin: String, decoding: String, referrerpolicy: String, draggable: Boolean, loading: { type: String, default: "lazy" }, loadingShowDelay: { type: [Number, String], default: 0 }, fetchpriority: { type: String, default: "auto" }, width: String, height: String, initialRatio: { type: [Number, String], default: k1 }, placeholderSrc: String, errorSrc: String, fit: { type: String, default: "cover" }, position: { type: String, default: "50% 50%" }, imgClass: String, imgStyle: Object, noSpinner: Boolean, noNativeMenu: Boolean, noTransition: Boolean, spinnerColor: String, spinnerSize: String }, emits: ["load", "error"], setup(e, { slots: t, emit: n }) {
  const r = K(e.initialRatio), l = Gs(e, r), a = xe(), { registerTimeout: o, removeTimeout: i } = Zn(), { registerTimeout: u, removeTimeout: c } = Zn(), s = v(() => e.placeholderSrc !== void 0 ? { src: e.placeholderSrc } : null), f = v(() => e.errorSrc !== void 0 ? { src: e.errorSrc, __qerror: true } : null), h = [K(null), K(s.value)], m = K(0), g = K(false), w = K(false), x = v(() => `q-img q-img--${e.noNativeMenu === true ? "no-" : ""}menu`), k = v(() => ({ width: e.width, height: e.height })), y = v(() => `q-img__image ${e.imgClass !== void 0 ? e.imgClass + " " : ""}q-img__image--with${e.noTransition === true ? "out" : ""}-transition q-img__image--`), p = v(() => ({ ...e.imgStyle, objectFit: e.fit, objectPosition: e.position }));
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
    pl(a) === false && (i(), r.value = q.naturalHeight === 0 ? 0.5 : q.naturalWidth / q.naturalHeight, O(q, 1));
  }
  function O(q, R) {
    R === 1e3 || pl(a) === true || (q.complete === true ? H(q) : o(() => {
      O(q, R + 1);
    }, 50));
  }
  function H(q) {
    pl(a) !== true && (m.value = m.value ^ 1, h[m.value].value = null, C(), q.getAttribute("__qerror") !== "true" && (w.value = false), n("load", q.currentSrc || q.src));
  }
  function B(q) {
    i(), C(), w.value = true, h[m.value].value = f.value, h[m.value ^ 1].value = s.value, n("error", q);
  }
  function L(q) {
    const R = h[q].value, T = { key: "img_" + q, class: y.value, style: p.value, alt: e.alt, crossorigin: e.crossorigin, decoding: e.decoding, referrerpolicy: e.referrerpolicy, height: e.height, width: e.width, loading: e.loading, fetchpriority: e.fetchpriority, "aria-hidden": "true", draggable: e.draggable, ...R };
    return m.value === q ? Object.assign(T, { class: T.class + "current", onLoad: P, onError: B }) : T.class += "loaded", d("div", { class: "q-img__container absolute-full", key: "img" + q }, d("img", T));
  }
  function N() {
    return g.value === false ? d("div", { key: "content", class: "q-img__content absolute-full q-anchor--skip" }, Pe(t[w.value === true ? "error" : "default"])) : d("div", { key: "loading", class: "q-img__loading absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : e.noSpinner === true ? void 0 : [d(wn, { color: e.spinnerColor, size: e.spinnerSize })]);
  }
  {
    let q = function() {
      ge(() => e.src || e.srcset || e.sizes ? { src: e.src, srcset: e.srcset, sizes: e.sizes } : null, (R) => {
        i(), w.value = false, R === null ? (C(), h[m.value ^ 1].value = s.value) : b(), h[m.value].value = R;
      }, { immediate: true });
    };
    rn.value === true ? ct(q) : q();
  }
  return () => {
    const q = [];
    return l.value !== null && q.push(d("div", { key: "filler", style: l.value })), h[0].value !== null && q.push(L(0)), h[1].value !== null && q.push(L(1)), q.push(d(Ot, { name: "q-transition--fade" }, N)), d("div", { key: "main", class: x.value, style: k.value, role: "img", "aria-label": e.alt }, q);
  };
} });
var { passive: Pl } = ft;
he({ name: "QInfiniteScroll", props: { offset: { type: Number, default: 500 }, debounce: { type: [String, Number], default: 100 }, scrollTarget: er, initialIndex: { type: Number, default: 0 }, disable: Boolean, reverse: Boolean }, emits: ["load"], setup(e, { slots: t, emit: n }) {
  const r = K(false), l = K(true), a = K(null), o = K(null);
  let i = e.initialIndex, u, c;
  const s = v(() => "q-infinite-scroll__loading" + (r.value === true ? "" : " invisible"));
  function f() {
    if (e.disable === true || r.value === true || l.value === false) return;
    const O = ja(u), H = yl(u), B = kr(u);
    e.reverse === false ? Math.round(H + B + e.offset) >= Math.round(O) && h() : Math.round(H) <= e.offset && h();
  }
  function h() {
    if (e.disable === true || r.value === true || l.value === false) return;
    i++, r.value = true;
    const O = ja(u);
    n("load", i, (H) => {
      l.value === true && (r.value = false, Qe(() => {
        if (e.reverse === true) {
          const B = ja(u), L = yl(u), N = B - O;
          xr(u, L + N);
        }
        H === true ? w() : a.value && a.value.closest("body") && c();
      }));
    });
  }
  function m() {
    i = 0;
  }
  function g() {
    l.value === false && (l.value = true, u.addEventListener("scroll", c, Pl)), f();
  }
  function w() {
    var _a3;
    l.value === true && (l.value = false, r.value = false, u.removeEventListener("scroll", c, Pl), (_a3 = c == null ? void 0 : c.cancel) == null ? void 0 : _a3.call(c));
  }
  function x() {
    if (u && l.value === true && u.removeEventListener("scroll", c, Pl), u = In(a.value, e.scrollTarget), l.value === true) {
      if (u.addEventListener("scroll", c, Pl), e.reverse === true) {
        const O = ja(u), H = kr(u);
        xr(u, O - H);
      }
      f();
    }
  }
  function k(O) {
    i = O;
  }
  function y(O) {
    O = parseInt(O, 10);
    const H = c;
    c = O <= 0 ? f : Ar(f, isNaN(O) === true ? 100 : O), u && l.value === true && (H !== void 0 && u.removeEventListener("scroll", H, Pl), u.addEventListener("scroll", c, Pl));
  }
  function p(O) {
    if (b.value === true) {
      if (o.value === null) {
        O !== true && Qe(() => {
          p(true);
        });
        return;
      }
      const H = `${r.value === true ? "un" : ""}pauseAnimations`;
      Array.from(o.value.getElementsByTagName("svg")).forEach((B) => {
        B[H]();
      });
    }
  }
  const b = v(() => e.disable !== true && l.value === true);
  ge([r, b], () => {
    p();
  }), ge(() => e.disable, (O) => {
    O === true ? w() : g();
  }), ge(() => e.reverse, () => {
    r.value === false && l.value === true && f();
  }), ge(() => e.scrollTarget, x), ge(() => e.debounce, y);
  let C = false;
  kl(() => {
    C !== false && u && xr(u, C);
  }), Dn(() => {
    C = u ? yl(u) : false;
  }), We(() => {
    l.value === true && u.removeEventListener("scroll", c, Pl);
  }), ct(() => {
    y(e.debounce), x(), r.value === false && p();
  });
  const P = xe();
  return Object.assign(P.proxy, { poll: () => {
    c == null ? void 0 : c();
  }, trigger: h, stop: w, reset: m, resume: g, setIndex: k, updateScrollTarget: x }), () => {
    const O = Pa(t.default, []);
    return b.value === true && O[e.reverse === false ? "push" : "unshift"](d("div", { ref: o, class: s.value }, Pe(t.loading))), d("div", { class: "q-infinite-scroll", ref: a }, O);
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
var Bd = { date: "####/##/##", datetime: "####/##/## ##:##", time: "##:##", fulltime: "##:##:##", phone: "(###) ### - ####", card: "#### #### #### ####" }, Ho = { "#": { pattern: "[\\d]", negate: "[^\\d]" }, S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" }, N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" }, A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleLowerCase() }, X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleLowerCase() } }, Lh = Object.keys(Ho);
Lh.forEach((e) => {
  Ho[e].regex = new RegExp(Ho[e].pattern);
});
var T1 = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + Lh.join("") + "])|(.)", "g"), Fd = /[.*+?^${}()|[\]\\]/g, Bt = "", q1 = { mask: String, reverseFillMask: Boolean, fillMask: [Boolean, String], unmaskedValue: Boolean };
function M1(e, t, n, r) {
  let l, a, o, i, u, c;
  const s = K(null), f = K(m());
  function h() {
    return e.autogrow === true || ["textarea", "text", "search", "url", "tel", "password"].includes(e.type);
  }
  ge(() => e.type + e.autogrow, w), ge(() => e.mask, (B) => {
    if (B !== void 0) x(f.value, true);
    else {
      const L = O(f.value);
      w(), e.modelValue !== L && t("update:modelValue", L);
    }
  }), ge(() => e.fillMask + e.reverseFillMask, () => {
    s.value === true && x(f.value, true);
  }), ge(() => e.unmaskedValue, () => {
    s.value === true && x(f.value);
  });
  function m() {
    if (w(), s.value === true) {
      const B = C(O(e.modelValue));
      return e.fillMask !== false ? H(B) : B;
    }
    return e.modelValue;
  }
  function g(B) {
    if (B < l.length) return l.slice(-B);
    let L = "", N = l;
    const q = N.indexOf(Bt);
    if (q !== -1) {
      for (let R = B - N.length; R > 0; R--) L += Bt;
      N = N.slice(0, q) + L + N.slice(q);
    }
    return N;
  }
  function w() {
    if (s.value = e.mask !== void 0 && e.mask.length !== 0 && h(), s.value === false) {
      i = void 0, l = "", a = "";
      return;
    }
    const B = Bd[e.mask] === void 0 ? e.mask : Bd[e.mask], L = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_", N = L.replace(Fd, "\\$&"), q = [], R = [], T = [];
    let j = e.reverseFillMask === true, W = "", U = "";
    B.replace(T1, (X, _, D, F, me) => {
      if (F !== void 0) {
        const $ = Ho[F];
        T.push($), U = $.negate, j === true && (R.push("(?:" + U + "+)?(" + $.pattern + "+)?(?:" + U + "+)?(" + $.pattern + "+)?"), j = false), R.push("(?:" + U + "+)?(" + $.pattern + ")?");
      } else if (D !== void 0) W = "\\" + (D === "\\" ? "" : D), T.push(D), q.push("([^" + W + "]+)?" + W + "?");
      else {
        const $ = _ !== void 0 ? _ : me;
        W = $ === "\\" ? "\\\\\\\\" : $.replace(Fd, "\\\\$&"), T.push($), q.push("([^" + W + "]+)?" + W + "?");
      }
    });
    const Z = new RegExp("^" + q.join("") + "(" + (W === "" ? "." : "[^" + W + "]") + "+)?" + (W === "" ? "" : "[" + W + "]*") + "$"), ae = R.length - 1, ye = R.map((X, _) => _ === 0 && e.reverseFillMask === true ? new RegExp("^" + N + "*" + X) : _ === ae ? new RegExp("^" + X + "(" + (U === "" ? "." : U) + "+)?" + (e.reverseFillMask === true ? "$" : N + "*")) : new RegExp("^" + X));
    o = T, i = (X) => {
      const _ = Z.exec(e.reverseFillMask === true ? X : X.slice(0, T.length + 1));
      _ !== null && (X = _.slice(1).join(""));
      const D = [], F = ye.length;
      for (let me = 0, $ = X; me < F; me++) {
        const A = ye[me].exec($);
        if (A === null) break;
        $ = $.slice(A.shift().length), D.push(...A);
      }
      return D.length !== 0 ? D.join("") : X;
    }, l = T.map((X) => typeof X == "string" ? X : Bt).join(""), a = l.split(Bt).join(L);
  }
  function x(B, L, N) {
    const q = r.value, R = q.selectionEnd, T = q.value.length - R, j = O(B);
    L === true && w();
    const W = C(j), U = e.fillMask !== false ? H(W) : W, Z = f.value !== U;
    q.value !== U && (q.value = U), Z === true && (f.value = U), document.activeElement === q && Qe(() => {
      if (U === a) {
        const ye = e.reverseFillMask === true ? a.length : 0;
        q.setSelectionRange(ye, ye, "forward");
        return;
      }
      if (N === "insertFromPaste" && e.reverseFillMask !== true) {
        const ye = q.selectionEnd;
        let X = R - 1;
        for (let _ = u; _ <= X && _ < ye; _++) l[_] !== Bt && X++;
        y.right(q, X);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(N) !== -1) {
        const ye = e.reverseFillMask === true ? R === 0 ? U.length > W.length ? 1 : 0 : Math.max(0, U.length - (U === a ? 0 : Math.min(W.length, T) + 1)) + 1 : R;
        q.setSelectionRange(ye, ye, "forward");
        return;
      }
      if (e.reverseFillMask === true) if (Z === true) {
        const ye = Math.max(0, U.length - (U === a ? 0 : Math.min(W.length, T + 1)));
        ye === 1 && R === 1 ? q.setSelectionRange(ye, ye, "forward") : y.rightReverse(q, ye);
      } else {
        const ye = U.length - T;
        q.setSelectionRange(ye, ye, "backward");
      }
      else if (Z === true) {
        const ye = Math.max(0, l.indexOf(Bt), Math.min(W.length, R) - 1);
        y.right(q, ye);
      } else {
        const ye = R - 1;
        y.right(q, ye);
      }
    });
    const ae = e.unmaskedValue === true ? O(U) : U;
    String(e.modelValue) !== ae && (e.modelValue !== null || ae !== "") && n(ae, true);
  }
  function k(B, L, N) {
    const q = C(O(B.value));
    L = Math.max(0, l.indexOf(Bt), Math.min(q.length, L)), u = L, B.setSelectionRange(L, N, "forward");
  }
  const y = { left(B, L) {
    const N = l.slice(L - 1).indexOf(Bt) === -1;
    let q = Math.max(0, L - 1);
    for (; q >= 0; q--) if (l[q] === Bt) {
      L = q, N === true && L++;
      break;
    }
    if (q < 0 && l[L] !== void 0 && l[L] !== Bt) return y.right(B, 0);
    L >= 0 && B.setSelectionRange(L, L, "backward");
  }, right(B, L) {
    const N = B.value.length;
    let q = Math.min(N, L + 1);
    for (; q <= N; q++) if (l[q] === Bt) {
      L = q;
      break;
    } else l[q - 1] === Bt && (L = q);
    if (q > N && l[L - 1] !== void 0 && l[L - 1] !== Bt) return y.left(B, N);
    B.setSelectionRange(L, L, "forward");
  }, leftReverse(B, L) {
    const N = g(B.value.length);
    let q = Math.max(0, L - 1);
    for (; q >= 0; q--) if (N[q - 1] === Bt) {
      L = q;
      break;
    } else if (N[q] === Bt && (L = q, q === 0)) break;
    if (q < 0 && N[L] !== void 0 && N[L] !== Bt) return y.rightReverse(B, 0);
    L >= 0 && B.setSelectionRange(L, L, "backward");
  }, rightReverse(B, L) {
    const N = B.value.length, q = g(N), R = q.slice(0, L + 1).indexOf(Bt) === -1;
    let T = Math.min(N, L + 1);
    for (; T <= N; T++) if (q[T - 1] === Bt) {
      L = T, L > 0 && R === true && L--;
      break;
    }
    if (T > N && q[L - 1] !== void 0 && q[L - 1] !== Bt) return y.leftReverse(B, N);
    B.setSelectionRange(L, L, "forward");
  } };
  function p(B) {
    t("click", B), c = void 0;
  }
  function b(B) {
    if (t("keydown", B), Zl(B) === true || B.altKey === true) return;
    const L = r.value, N = L.selectionStart, q = L.selectionEnd;
    if (B.shiftKey || (c = void 0), B.keyCode === 37 || B.keyCode === 39) {
      B.shiftKey && c === void 0 && (c = L.selectionDirection === "forward" ? N : q);
      const R = y[(B.keyCode === 39 ? "right" : "left") + (e.reverseFillMask === true ? "Reverse" : "")];
      if (B.preventDefault(), R(L, c === N ? q : N), B.shiftKey) {
        const T = L.selectionStart;
        L.setSelectionRange(Math.min(c, T), Math.max(c, T), "forward");
      }
    } else B.keyCode === 8 && e.reverseFillMask !== true && N === q ? (y.left(L, N), L.setSelectionRange(L.selectionStart, q, "backward")) : B.keyCode === 46 && e.reverseFillMask === true && N === q && (y.rightReverse(L, q), L.setSelectionRange(N, L.selectionEnd, "forward"));
  }
  function C(B) {
    if (B == null || B === "") return "";
    if (e.reverseFillMask === true) return P(B);
    const L = o;
    let N = 0, q = "";
    for (let R = 0; R < L.length; R++) {
      const T = B[N], j = L[R];
      if (typeof j == "string") q += j, T === j && N++;
      else if (T !== void 0 && j.regex.test(T)) q += j.transform !== void 0 ? j.transform(T) : T, N++;
      else return q;
    }
    return q;
  }
  function P(B) {
    const L = o, N = l.indexOf(Bt);
    let q = B.length - 1, R = "";
    for (let T = L.length - 1; T >= 0 && q !== -1; T--) {
      const j = L[T];
      let W = B[q];
      if (typeof j == "string") R = j + R, W === j && q--;
      else if (W !== void 0 && j.regex.test(W)) do
        R = (j.transform !== void 0 ? j.transform(W) : W) + R, q--, W = B[q];
      while (N === T && W !== void 0 && j.regex.test(W));
      else return R;
    }
    return R;
  }
  function O(B) {
    return typeof B != "string" || i === void 0 ? typeof B == "number" ? i("" + B) : B : i(B);
  }
  function H(B) {
    return a.length - B.length <= 0 ? B : e.reverseFillMask === true && B.length !== 0 ? a.slice(0, -B.length) + B : B + a.slice(B.length);
  }
  return { innerValue: f, hasMask: s, moveCursorForPaste: k, updateMaskValue: x, onMaskedKeydown: b, onMaskedClick: p };
}
var E1 = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/, R1 = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u, A1 = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/, $1 = /[a-z0-9_ -]$/i;
function Bh(e) {
  return function(n) {
    if (n.type === "compositionend" || n.type === "change") {
      if (n.target.qComposing !== true) return;
      n.target.qComposing = false, e(n);
    } else n.type === "compositionupdate" && n.target.qComposing !== true && typeof n.data == "string" && (Ie.is.firefox === true ? $1.test(n.data) === false : E1.test(n.data) === true || R1.test(n.data) === true || A1.test(n.data) === true) === true && (n.target.qComposing = true);
  };
}
var Fh = he({ name: "QInput", inheritAttrs: false, props: { ...pi, ...q1, ...xn, modelValue: [String, Number, FileList], shadowText: String, type: { type: String, default: "text" }, debounce: [String, Number], autogrow: Boolean, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...yi, "paste", "change", "keydown", "click", "animationend"], setup(e, { emit: t, attrs: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = {};
  let o = NaN, i, u, c = null, s;
  const f = K(null), h = Fs(e), { innerValue: m, hasMask: g, moveCursorForPaste: w, updateMaskValue: x, onMaskedKeydown: k, onMaskedClick: y } = M1(e, t, W, f), p = Ph(e, true), b = v(() => Xl(m.value)), C = Bh(T), P = _i({ changeEvent: true }), O = v(() => e.type === "textarea" || e.autogrow === true), H = v(() => O.value === true || ["text", "search", "url", "tel", "password"].includes(e.type)), B = v(() => {
    const _ = { ...P.splitAttrs.listeners.value, onInput: T, onPaste: R, onChange: Z, onBlur: ae, onFocus: xt };
    return _.onCompositionstart = _.onCompositionupdate = _.onCompositionend = C, g.value === true && (_.onKeydown = k, _.onClick = y), e.autogrow === true && (_.onAnimationend = j), _;
  }), L = v(() => {
    const _ = { tabindex: 0, "data-autofocus": e.autofocus === true || void 0, rows: e.type === "textarea" ? 6 : void 0, "aria-label": e.label, name: h.value, ...P.splitAttrs.attributes.value, id: P.targetUid.value, maxlength: e.maxlength, disabled: e.disable === true, readonly: e.readonly === true };
    return O.value === false && (_.type = e.type), e.autogrow === true && (_.rows = 1), _;
  });
  ge(() => e.type, () => {
    f.value && (f.value.value = e.modelValue);
  }), ge(() => e.modelValue, (_) => {
    if (g.value === true) {
      if (u === true && (u = false, String(_) === o)) return;
      x(_);
    } else m.value !== _ && (m.value = _, e.type === "number" && a.hasOwnProperty("value") === true && (i === true ? i = false : delete a.value));
    e.autogrow === true && Qe(U);
  }), ge(() => e.autogrow, (_) => {
    _ === true ? Qe(U) : f.value !== null && n.rows > 0 && (f.value.style.height = "auto");
  }), ge(() => e.dense, () => {
    e.autogrow === true && Qe(U);
  });
  function N() {
    Br(() => {
      const _ = document.activeElement;
      f.value !== null && f.value !== _ && (_ === null || _.id !== P.targetUid.value) && f.value.focus({ preventScroll: true });
    });
  }
  function q() {
    var _a3;
    (_a3 = f.value) == null ? void 0 : _a3.select();
  }
  function R(_) {
    if (g.value === true && e.reverseFillMask !== true) {
      const D = _.target;
      w(D, D.selectionStart, D.selectionEnd);
    }
    t("paste", _);
  }
  function T(_) {
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
    else if (W(D), H.value === true && _.target === document.activeElement) {
      const { selectionStart: F, selectionEnd: me } = _.target;
      F !== void 0 && me !== void 0 && Qe(() => {
        _.target === document.activeElement && D.indexOf(_.target.value) === 0 && _.target.setSelectionRange(F, me);
      });
    }
    e.autogrow === true && U();
  }
  function j(_) {
    t("animationend", _), U();
  }
  function W(_, D) {
    s = () => {
      c = null, e.type !== "number" && a.hasOwnProperty("value") === true && delete a.value, e.modelValue !== _ && o !== _ && (o = _, D === true && (u = true), t("update:modelValue", _), Qe(() => {
        o === _ && (o = NaN);
      })), s = void 0;
    }, e.type === "number" && (i = true, a.value = _), e.debounce !== void 0 ? (c !== null && clearTimeout(c), a.value = _, c = setTimeout(s, e.debounce)) : s();
  }
  function U() {
    requestAnimationFrame(() => {
      const _ = f.value;
      if (_ !== null) {
        const D = _.parentNode.style, { scrollTop: F } = _, { overflowY: me, maxHeight: $ } = l.platform.is.firefox === true ? {} : window.getComputedStyle(_), A = me !== void 0 && me !== "scroll";
        A === true && (_.style.overflowY = "hidden"), D.marginBottom = _.scrollHeight - 1 + "px", _.style.height = "1px", _.style.height = _.scrollHeight + "px", A === true && (_.style.overflowY = parseInt($, 10) < _.scrollHeight ? "auto" : "hidden"), D.marginBottom = "", _.scrollTop = F;
      }
    });
  }
  function Z(_) {
    C(_), c !== null && (clearTimeout(c), c = null), s == null ? void 0 : s(), t("change", _.target.value);
  }
  function ae(_) {
    _ !== void 0 && xt(_), c !== null && (clearTimeout(c), c = null), s == null ? void 0 : s(), i = false, u = false, delete a.value, e.type !== "file" && setTimeout(() => {
      f.value !== null && (f.value.value = m.value !== void 0 ? m.value : "");
    });
  }
  function ye() {
    return a.hasOwnProperty("value") === true ? a.value : m.value !== void 0 ? m.value : "";
  }
  We(() => {
    ae();
  }), ct(() => {
    e.autogrow === true && U();
  }), Object.assign(P, { innerValue: m, fieldClass: v(() => `q-${O.value === true ? "textarea" : "input"}` + (e.autogrow === true ? " q-textarea--autogrow" : "")), hasShadow: v(() => e.type !== "file" && typeof e.shadowText == "string" && e.shadowText.length !== 0), inputRef: f, emitValue: W, hasValue: b, floatingLabel: v(() => b.value === true && (e.type !== "number" || isNaN(m.value) === false) || Xl(e.displayValue)), getControl: () => d(O.value === true ? "textarea" : "input", { ref: f, class: ["q-field__native q-placeholder", e.inputClass], style: e.inputStyle, ...L.value, ...B.value, ...e.type !== "file" ? { value: ye() } : p.value }), getShadowControl: () => d("div", { class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (O.value === true ? "" : " text-no-wrap") }, [d("span", { class: "invisible" }, ye()), d("span", e.shadowText)]) });
  const X = wi(P);
  return Object.assign(r, { focus: N, select: q, getNativeElement: () => f.value }), Vt(r, "nativeEl", () => f.value), X;
} }), Od = { threshold: 0, root: null, rootMargin: "0px" };
function Vd(e, t, n) {
  var _a3;
  let r, l, a;
  typeof n == "function" ? (r = n, l = Od, a = t.cfg === void 0) : (r = n.handler, l = Object.assign({}, Od, n.cfg), a = t.cfg === void 0 || qn(t.cfg, l) === false), t.handler !== r && (t.handler = r), a === true && (t.cfg = l, (_a3 = t.observer) == null ? void 0 : _a3.unobserve(e), t.observer = new IntersectionObserver(([o]) => {
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
var P1 = Pn({ name: "intersection", mounted(e, { modifiers: t, value: n }) {
  const r = { once: t.once === true };
  Vd(e, r, n), e.__qvisible = r;
}, updated(e, t) {
  const n = e.__qvisible;
  n !== void 0 && Vd(e, n, t.value);
}, beforeUnmount: Oh });
he({ name: "QIntersection", props: { tag: { type: String, default: "div" }, once: Boolean, transition: String, transitionDuration: { type: [String, Number], default: 300 }, ssrPrerender: Boolean, margin: String, threshold: [Number, Array], root: { default: null }, disable: Boolean, onVisibility: Function }, setup(e, { slots: t, emit: n }) {
  const r = K(rn.value === true ? e.ssrPrerender : false), l = v(() => e.root !== void 0 || e.margin !== void 0 || e.threshold !== void 0 ? { handler: u, cfg: { root: e.root, rootMargin: e.margin, threshold: e.threshold } } : u), a = v(() => e.disable !== true && (rn.value !== true || e.once !== true || e.ssrPrerender !== true)), o = v(() => [[P1, l.value, void 0, { once: e.once }]]), i = v(() => `--q-transition-duration: ${e.transitionDuration}ms`);
  function u(s) {
    r.value !== s.isIntersecting && (r.value = s.isIntersecting, e.onVisibility !== void 0 && n("visibility", r.value));
  }
  function c() {
    if (r.value === true) return [d("div", { key: "content", style: i.value }, Pe(t.default))];
    if (t.hidden !== void 0) return [d("div", { key: "hidden", style: i.value }, t.hidden())];
  }
  return () => {
    const s = e.transition ? [d(Ot, { name: "q-transition--" + e.transition }, c)] : c();
    return _n(e.tag, { class: "q-intersection" }, s, "main", a.value, () => o.value);
  };
} });
var L1 = ["ul", "ol"], Vh = he({ name: "QList", props: { ...nt, bordered: Boolean, dense: Boolean, separator: Boolean, padding: Boolean, tag: { type: String, default: "div" } }, setup(e, { slots: t }) {
  const n = xe(), r = lt(e, n.proxy.$q), l = v(() => L1.includes(e.tag) ? null : "list"), a = v(() => "q-list" + (e.bordered === true ? " q-list--bordered" : "") + (e.dense === true ? " q-list--dense" : "") + (e.separator === true ? " q-list--separator" : "") + (r.value === true ? " q-list--dark" : "") + (e.padding === true ? " q-list--padding" : ""));
  return () => d(e.tag, { class: a.value, role: l.value }, Pe(t.default));
} }), Dd = [34, 37, 40, 33, 39, 38], B1 = Object.keys(Us);
he({ name: "QKnob", props: { ...xn, ...Us, modelValue: { type: Number, required: true }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, tabindex: { type: [Number, String], default: 0 }, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change", "dragValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = K(e.modelValue), o = K(false), i = v(() => isNaN(e.innerMin) === true || e.innerMin < e.min ? e.min : e.innerMin), u = v(() => isNaN(e.innerMax) === true || e.innerMax > e.max ? e.max : e.innerMax);
  let c;
  function s() {
    a.value = e.modelValue === null ? i.value : dt(e.modelValue, i.value, u.value), N(true);
  }
  ge(() => `${e.modelValue}|${i.value}|${u.value}`, s), s();
  const f = v(() => e.disable === false && e.readonly === false), h = v(() => "q-knob non-selectable" + (f.value === true ? " q-knob--editable" : e.disable === true ? " disabled" : "")), m = v(() => (String(e.step).trim().split(".")[1] || "").length), g = v(() => e.step === 0 ? 1 : e.step), w = v(() => e.instantFeedback === true || o.value === true), x = l.platform.is.mobile === true ? v(() => f.value === true ? { onClick: O } : {}) : v(() => f.value === true ? { onMousedown: P, onClick: O, onKeydown: H, onKeyup: L } : {}), k = v(() => f.value === true ? { tabindex: e.tabindex } : { [`aria-${e.disable === true ? "disabled" : "readonly"}`]: "true" }), y = v(() => {
    const T = {};
    return B1.forEach((j) => {
      T[j] = e[j];
    }), T;
  });
  function p(T) {
    T.isFinal ? (B(T.evt, true), o.value = false) : (T.isFirst && (C(), o.value = true), B(T.evt));
  }
  const b = v(() => [[bn, p, void 0, { prevent: true, stop: true, mouse: true }]]);
  function C() {
    const { top: T, left: j, width: W, height: U } = r.$el.getBoundingClientRect();
    c = { top: T + U / 2, left: j + W / 2 };
  }
  function P(T) {
    C(), B(T);
  }
  function O(T) {
    C(), B(T, true);
  }
  function H(T) {
    if (Dd.includes(T.keyCode) === false) return;
    je(T);
    const j = ([34, 33].includes(T.keyCode) ? 10 : 1) * g.value, W = [34, 37, 40].includes(T.keyCode) ? -j : j;
    a.value = dt(parseFloat((a.value + W).toFixed(m.value)), i.value, u.value), N();
  }
  function B(T, j) {
    const W = tn(T), U = Math.abs(W.top - c.top), Z = Math.sqrt(U ** 2 + Math.abs(W.left - c.left) ** 2);
    let ae = Math.asin(U / Z) * (180 / Math.PI);
    W.top < c.top ? ae = c.left < W.left ? 90 - ae : 270 + ae : ae = c.left < W.left ? ae + 90 : 270 - ae, l.lang.rtl === true ? ae = Ro(-ae - e.angle, 0, 360) : e.angle && (ae = Ro(ae - e.angle, 0, 360)), e.reverse === true && (ae = 360 - ae);
    let ye = e.min + ae / 360 * (e.max - e.min);
    if (g.value !== 0) {
      const X = ye % g.value;
      ye = ye - X + (Math.abs(X) >= g.value / 2 ? (X < 0 ? -1 : 1) * g.value : 0), ye = parseFloat(ye.toFixed(m.value));
    }
    ye = dt(ye, i.value, u.value), n("dragValue", ye), a.value !== ye && (a.value = ye), N(j);
  }
  function L(T) {
    Dd.includes(T.keyCode) && N(true);
  }
  function N(T) {
    e.modelValue !== a.value && n("update:modelValue", a.value), T === true && n("change", a.value);
  }
  const q = Fa(e);
  function R() {
    return d("input", q.value);
  }
  return () => {
    const T = { class: h.value, role: "slider", "aria-valuemin": i.value, "aria-valuemax": u.value, "aria-valuenow": e.modelValue, ...k.value, ...y.value, value: a.value, instantFeedback: w.value, ...x.value }, j = { default: t.default };
    return f.value === true && e.name !== void 0 && (j.internal = R), _n(Jm, T, j, "knob", f.value, () => b.value);
  };
} });
var { passive: Id } = ft, F1 = ["both", "horizontal", "vertical"], Dh = he({ name: "QScrollObserver", props: { axis: { type: String, validator: (e) => F1.includes(e), default: "vertical" }, debounce: [String, Number], scrollTarget: er }, emits: ["scroll"], setup(e, { emit: t }) {
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
    l = In(a, e.scrollTarget), l.addEventListener("scroll", c, Id), c(true);
  }
  function u() {
    l !== void 0 && (l.removeEventListener("scroll", c, Id), l = void 0);
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
  }), Object.assign(s, { trigger: c, getPosition: () => n }), St;
} }), O1 = he({ name: "QLayout", props: { container: Boolean, view: { type: String, default: "hhh lpr fff", validator: (e) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase()) }, onScroll: Function, onScrollHeight: Function, onResize: Function }, setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = K(null), a = K(r.screen.height), o = K(e.container === true ? 0 : r.screen.width), i = K({ position: 0, direction: "down", inflectionPoint: 0 }), u = K(0), c = K(rn.value === true ? 0 : co()), s = v(() => "q-layout q-layout--" + (e.container === true ? "containerized" : "standard")), f = v(() => e.container === false ? { minHeight: r.screen.height + "px" } : null), h = v(() => c.value !== 0 ? { [r.lang.rtl === true ? "left" : "right"]: `${c.value}px` } : null), m = v(() => c.value !== 0 ? { [r.lang.rtl === true ? "right" : "left"]: 0, [r.lang.rtl === true ? "left" : "right"]: `-${c.value}px`, width: `calc(100% + ${c.value}px)` } : null);
  function g(b) {
    if (e.container === true || document.qScrollPrevented !== true) {
      const C = { position: b.position.top, direction: b.direction, directionChanged: b.directionChanged, inflectionPoint: b.inflectionPoint.top, delta: b.delta.top };
      i.value = C, e.onScroll !== void 0 && n("scroll", C);
    }
  }
  function w(b) {
    const { height: C, width: P } = b;
    let O = false;
    a.value !== C && (O = true, a.value = C, e.onScrollHeight !== void 0 && n("scrollHeight", C), k()), o.value !== P && (O = true, o.value = P), O === true && e.onResize !== void 0 && n("resize", b);
  }
  function x({ height: b }) {
    u.value !== b && (u.value = b, k());
  }
  function k() {
    if (e.container === true) {
      const b = a.value > u.value ? co() : 0;
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
  if (gn(Jl, p), co() > 0) {
    let b = function() {
      O = null, H.classList.remove("hide-scrollbar");
    }, C = function() {
      if (O === null) {
        if (H.scrollHeight > r.screen.height) return;
        H.classList.add("hide-scrollbar");
      } else clearTimeout(O);
      O = setTimeout(b, 300);
    }, P = function(B) {
      O !== null && B === "remove" && (clearTimeout(O), b()), window[`${B}EventListener`]("resize", C);
    }, O = null;
    const H = document.body;
    ge(() => e.container !== true ? "add" : "remove", P), e.container !== true && P("add"), li(() => {
      P("remove");
    });
  }
  return () => {
    const b = qt(t.default, [d(Dh, { onScroll: g }), d(Wl, { onResize: w })]), C = d("div", { class: s.value, style: f.value, ref: e.container === true ? void 0 : l, tabindex: -1 }, b);
    return e.container === true ? d("div", { class: "q-layout-container overflow-hidden", ref: l }, [d(Wl, { onResize: x }), d("div", { class: "absolute-full", style: h.value }, [d("div", { class: "scroll", style: m.value }, [C])])]) : C;
  };
} }), V1 = ["horizontal", "vertical", "cell", "none"], D1 = he({ name: "QMarkupTable", props: { ...nt, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, wrapCells: Boolean, separator: { type: String, default: "horizontal", validator: (e) => V1.includes(e) } }, setup(e, { slots: t }) {
  const n = xe(), r = lt(e, n.proxy.$q), l = v(() => `q-markup-table q-table__container q-table__card q-table--${e.separator}-separator` + (r.value === true ? " q-table--dark q-table__card--dark q-dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "") + (e.square === true ? " q-table--square" : "") + (e.wrapCells === false ? " q-table--no-wrap" : ""));
  return () => d("div", { class: l.value }, [d("table", { class: "q-table" }, Pe(t.default))]);
} });
he({ name: "QNoSsr", props: { tag: { type: String, default: "div" }, placeholder: String }, setup(e, { slots: t }) {
  const { isHydrated: n } = lh();
  return () => {
    if (n.value === true) {
      const a = Pe(t.default);
      return a === void 0 ? a : a.length > 1 ? d(e.tag, {}, a) : a[0];
    }
    const r = { class: "q-no-ssr-placeholder" }, l = Pe(t.placeholder);
    if (l !== void 0) return l.length > 1 ? d(e.tag, r, l) : l[0];
    if (e.placeholder !== void 0) return d(e.tag, r, e.placeholder);
  };
} });
var I1 = () => d("svg", { key: "svg", class: "q-radio__bg absolute non-selectable", viewBox: "0 0 24 24" }, [d("path", { d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12" }), d("path", { class: "q-radio__check", d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6" })]), z1 = he({ name: "QRadio", props: { ...nt, ...el, ...xn, modelValue: { required: true }, val: { required: true }, label: String, leftLabel: Boolean, checkedIcon: String, uncheckedIcon: String, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), l = lt(e, r.$q), a = tl(e, Qm), o = K(null), { refocusTargetEl: i, refocusTarget: u } = Um(e, o), c = v(() => Ge(e.modelValue) === Ge(e.val)), s = v(() => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (e.disable === true ? " disabled" : "") + (l.value === true ? " q-radio--dark" : "") + (e.dense === true ? " q-radio--dense" : "") + (e.leftLabel === true ? " reverse" : "")), f = v(() => {
    const b = e.color !== void 0 && (e.keepColor === true || c.value === true) ? ` text-${e.color}` : "";
    return `q-radio__inner relative-position q-radio__inner--${c.value === true ? "truthy" : "falsy"}${b}`;
  }), h = v(() => (c.value === true ? e.checkedIcon : e.uncheckedIcon) || null), m = v(() => e.disable === true ? -1 : e.tabindex || 0), g = v(() => {
    const b = { type: "radio" };
    return e.name !== void 0 && Object.assign(b, { ".checked": c.value === true, "^checked": c.value === true ? "checked" : void 0, name: e.name, value: e.val }), b;
  }), w = ql(g);
  function x(b) {
    b !== void 0 && (je(b), u(b)), e.disable !== true && c.value !== true && n("update:modelValue", e.val, b);
  }
  function k(b) {
    (b.keyCode === 13 || b.keyCode === 32) && je(b);
  }
  function y(b) {
    (b.keyCode === 13 || b.keyCode === 32) && x(b);
  }
  Object.assign(r, { set: x });
  const p = I1();
  return () => {
    const b = h.value !== null ? [d("div", { key: "icon", class: "q-radio__icon-container absolute-full flex flex-center no-wrap" }, [d(et, { class: "q-radio__icon", name: h.value })])] : [p];
    e.disable !== true && w(b, "unshift", " q-radio__native q-ma-none q-pa-none");
    const C = [d("div", { class: f.value, style: a.value, "aria-hidden": "true" }, b)];
    i.value !== null && C.push(i.value);
    const P = e.label !== void 0 ? qt(t.default, [e.label]) : Pe(t.default);
    return P !== void 0 && C.push(d("div", { class: "q-radio__label q-anchor--skip" }, P)), d("div", { ref: o, class: s.value, tabindex: m.value, role: "radio", "aria-label": e.label, "aria-checked": c.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: x, onKeydown: k, onKeyup: y }, C);
  };
} }), N1 = he({ name: "QToggle", props: { ...Km, icon: String, iconColor: String }, emits: Wm, setup(e) {
  function t(n, r) {
    const l = v(() => (n.value === true ? e.checkedIcon : r.value === true ? e.indeterminateIcon : e.uncheckedIcon) || e.icon), a = v(() => n.value === true ? e.iconColor : null);
    return () => [d("div", { class: "q-toggle__track" }), d("div", { class: "q-toggle__thumb absolute flex flex-center no-wrap" }, l.value !== void 0 ? [d(et, { name: l.value, color: a.value })] : void 0)];
  }
  return Ym("toggle", t);
} }), Ih = { radio: z1, checkbox: ca, toggle: N1 }, H1 = Object.keys(Ih);
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
  return () => d("div", { class: f.value, ...h.value }, e.options.map((g, w) => {
    const x = n["label-" + w] !== void 0 ? () => n["label-" + w](g) : n.label !== void 0 ? () => n.label(g) : void 0;
    return d("div", [d(o.value, { label: x === void 0 ? u.value(g) : null, modelValue: e.modelValue, "onUpdate:modelValue": m, ...s.value[w] }, x)]);
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
  return () => d("main", { class: o.value, style: a.value }, Pe(t.default));
} });
var U1 = he({ name: "QPageContainer", setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = Mt(Jl, ot);
  if (r === ot) return console.error("QPageContainer needs to be child of QLayout"), ot;
  gn(vm, true);
  const l = v(() => {
    const a = {};
    return r.header.space === true && (a.paddingTop = `${r.header.size}px`), r.right.space === true && (a[`padding${n.lang.rtl === true ? "Left" : "Right"}`] = `${r.right.size}px`), r.footer.space === true && (a.paddingBottom = `${r.footer.size}px`), r.left.space === true && (a[`padding${n.lang.rtl === true ? "Right" : "Left"}`] = `${r.left.size}px`), a;
  });
  return () => d("div", { class: "q-page-container", style: l.value }, Pe(t.default));
} }), Gu = { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, validator: (e) => e.length === 2 }, expand: Boolean };
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
    const w = { transform: `translate(${f}, ${h})` };
    return e.offset && (w.margin = `${e.offset[1]}px ${e.offset[0]}px`), m.vertical === true ? (i.value !== 0 && (w[t.lang.rtl === true ? "right" : "left"] = `${i.value}px`), a.value !== 0 && (w[t.lang.rtl === true ? "left" : "right"] = `${a.value}px`)) : m.horizontal === true && (l.value !== 0 && (w.top = `${l.value}px`), o.value !== 0 && (w.bottom = `${o.value}px`)), w;
  }), c = v(() => `q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand === true ? "expand" : "shrink"}`);
  function s(f) {
    const h = Pe(f.default);
    return d("div", { class: c.value, style: u.value }, e.expand === true ? h : [d("div", h)]);
  }
  return { $layout: n, getStickyContent: s };
}
he({ name: "QPageScroller", props: { ...Gu, scrollOffset: { type: Number, default: 1e3 }, reverse: Boolean, duration: { type: Number, default: 300 }, offset: { ...Gu.offset, default: () => [18, 18] } }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), { $layout: l, getStickyContent: a } = zh(), o = K(null);
  let i;
  const u = v(() => l.height.value - (l.isContainer.value === true ? l.containerHeight.value : r.screen.height));
  function c() {
    return e.reverse === true ? u.value - l.scroll.value.position > e.scrollOffset : l.scroll.value.position > e.scrollOffset;
  }
  const s = K(c());
  function f() {
    const x = c();
    s.value !== x && (s.value = x);
  }
  function h() {
    e.reverse === true ? i === void 0 && (i = ge(u, f)) : m();
  }
  ge(l.scroll, f), ge(() => e.reverse, h);
  function m() {
    i !== void 0 && (i(), i = void 0);
  }
  function g(x) {
    const k = In(l.isContainer.value === true ? o.value : l.rootRef.value);
    xr(k, e.reverse === true ? l.height.value : 0, e.duration), n("click", x);
  }
  function w() {
    return s.value === true ? d("div", { ref: o, class: "q-page-scroller", onClick: g }, a(t)) : null;
  }
  return h(), We(m), () => d(Ot, { name: "q-transition--fade" }, w);
} });
he({ name: "QPageSticky", props: Gu, setup(e, { slots: t }) {
  const { getStickyContent: n } = zh();
  return () => n(t);
} });
function Ja(e, t) {
  return [true, false].includes(e) ? e : t;
}
he({ name: "QPagination", props: { ...nt, modelValue: { type: Number, required: true }, min: { type: [Number, String], default: 1 }, max: { type: [Number, String], required: true }, maxPages: { type: [Number, String], default: 0, validator: (e) => (typeof e == "string" ? parseInt(e, 10) : e) >= 0 }, inputStyle: [Array, String, Object], inputClass: [Array, String, Object], size: String, disable: Boolean, input: Boolean, iconPrev: String, iconNext: String, iconFirst: String, iconLast: String, toFn: Function, boundaryLinks: { type: Boolean, default: null }, boundaryNumbers: { type: Boolean, default: null }, directionLinks: { type: Boolean, default: null }, ellipses: { type: Boolean, default: null }, ripple: { type: [Boolean, Object], default: null }, round: Boolean, rounded: Boolean, flat: Boolean, outline: Boolean, unelevated: Boolean, push: Boolean, glossy: Boolean, color: { type: String, default: "primary" }, textColor: String, activeDesign: { type: String, default: "", values: (e) => e === "" || Mm.includes(e) }, activeColor: String, activeTextColor: String, gutter: String, padding: { type: String, default: "3px 2px" } }, emits: ["update:modelValue"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), { $q: r } = n, l = lt(e, r), a = v(() => parseInt(e.min, 10)), o = v(() => parseInt(e.max, 10)), i = v(() => parseInt(e.maxPages, 10)), u = v(() => g.value + " / " + o.value), c = v(() => Ja(e.boundaryLinks, e.input)), s = v(() => Ja(e.boundaryNumbers, !e.input)), f = v(() => Ja(e.directionLinks, e.input)), h = v(() => Ja(e.ellipses, !e.input)), m = K(null), g = v({ get: () => e.modelValue, set: (R) => {
    if (R = parseInt(R, 10), e.disable || isNaN(R)) return;
    const T = dt(R, a.value, o.value);
    e.modelValue !== T && t("update:modelValue", T);
  } });
  ge(() => `${a.value}|${o.value}`, () => {
    g.value = e.modelValue;
  });
  const w = v(() => "q-pagination row no-wrap items-center" + (e.disable === true ? " disabled" : "")), x = v(() => e.gutter in Po ? `${Po[e.gutter]}px` : e.gutter || null), k = v(() => x.value !== null ? `--q-pagination-gutter-parent:-${x.value};--q-pagination-gutter-child:${x.value}` : null), y = v(() => {
    const R = [e.iconFirst || r.iconSet.pagination.first, e.iconPrev || r.iconSet.pagination.prev, e.iconNext || r.iconSet.pagination.next, e.iconLast || r.iconSet.pagination.last];
    return r.lang.rtl === true ? R.reverse() : R;
  }), p = v(() => ({ "aria-disabled": e.disable === true ? "true" : "false", role: "navigation" })), b = v(() => Rs(e, "flat")), C = v(() => ({ [b.value]: true, round: e.round, rounded: e.rounded, padding: e.padding, color: e.color, textColor: e.textColor, size: e.size, ripple: e.ripple !== null ? e.ripple : true })), P = v(() => {
    const R = { [b.value]: false };
    return e.activeDesign !== "" && (R[e.activeDesign] = true), R;
  }), O = v(() => ({ ...P.value, color: e.activeColor || e.color, textColor: e.activeTextColor || e.textColor })), H = v(() => {
    let R = Math.max(i.value, 1 + (h.value ? 2 : 0) + (s.value ? 2 : 0));
    const T = { pgFrom: a.value, pgTo: o.value, ellipsesStart: false, ellipsesEnd: false, boundaryStart: false, boundaryEnd: false, marginalStyle: { minWidth: `${Math.max(2, String(o.value).length)}em` } };
    return i.value && R < o.value - a.value + 1 && (R = 1 + Math.floor(R / 2) * 2, T.pgFrom = Math.max(a.value, Math.min(o.value - R + 1, e.modelValue - Math.floor(R / 2))), T.pgTo = Math.min(o.value, T.pgFrom + R - 1), s.value && (T.boundaryStart = true, T.pgFrom++), h.value && T.pgFrom > a.value + (s.value ? 1 : 0) && (T.ellipsesStart = true, T.pgFrom++), s.value && (T.boundaryEnd = true, T.pgTo--), h.value && T.pgTo < o.value - (s.value ? 1 : 0) && (T.ellipsesEnd = true, T.pgTo--)), T;
  });
  function B(R) {
    g.value = R;
  }
  function L(R) {
    g.value = g.value + R;
  }
  const N = v(() => {
    function R() {
      g.value = m.value, m.value = null;
    }
    return { "onUpdate:modelValue": (T) => {
      m.value = T;
    }, onKeyup: (T) => {
      yn(T, 13) === true && R();
    }, onBlur: R };
  });
  function q(R, T, j) {
    const W = { "aria-label": T, "aria-current": "false", ...C.value, ...R };
    return j === true && Object.assign(W, { "aria-current": "true", ...O.value }), T !== void 0 && (e.toFn !== void 0 ? W.to = e.toFn(T) : W.onClick = () => {
      B(T);
    }), d(Je, W);
  }
  return Object.assign(n, { set: B, setByOffset: L }), () => {
    const R = [], T = [];
    let j;
    if (c.value === true && (R.push(q({ key: "bls", disable: e.disable || e.modelValue <= a.value, icon: y.value[0], "aria-label": r.lang.pagination.first }, a.value)), T.unshift(q({ key: "ble", disable: e.disable || e.modelValue >= o.value, icon: y.value[3], "aria-label": r.lang.pagination.last }, o.value))), f.value === true && (R.push(q({ key: "bdp", disable: e.disable || e.modelValue <= a.value, icon: y.value[1], "aria-label": r.lang.pagination.prev }, e.modelValue - 1)), T.unshift(q({ key: "bdn", disable: e.disable || e.modelValue >= o.value, icon: y.value[2], "aria-label": r.lang.pagination.next }, e.modelValue + 1))), e.input !== true) {
      j = [];
      const { pgFrom: W, pgTo: U, marginalStyle: Z } = H.value;
      if (H.value.boundaryStart === true) {
        const ae = a.value === e.modelValue;
        R.push(q({ key: "bns", style: Z, disable: e.disable, label: a.value }, a.value, ae));
      }
      if (H.value.boundaryEnd === true) {
        const ae = o.value === e.modelValue;
        T.unshift(q({ key: "bne", style: Z, disable: e.disable, label: o.value }, o.value, ae));
      }
      H.value.ellipsesStart === true && R.push(q({ key: "bes", style: Z, disable: e.disable, label: "\u2026", ripple: false }, W - 1)), H.value.ellipsesEnd === true && T.unshift(q({ key: "bee", style: Z, disable: e.disable, label: "\u2026", ripple: false }, U + 1));
      for (let ae = W; ae <= U; ae++) j.push(q({ key: `bpg${ae}`, style: Z, disable: e.disable, label: ae }, ae, ae === e.modelValue));
    }
    return d("div", { class: w.value, ...p.value }, [d("div", { class: "q-pagination__content row no-wrap items-center", style: k.value }, [...R, e.input === true ? d(Fh, { class: "inline", style: { width: `${u.value.length / 1.5}em` }, type: "number", dense: true, value: m.value, disable: e.disable, dark: l.value, borderless: true, inputClass: e.inputClass, inputStyle: e.inputStyle, placeholder: u.value, min: a.value, max: o.value, ...N.value }) : d("div", { class: "q-pagination__middle row justify-center" }, j), ...T])]);
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
var { passive: eo } = ft;
he({ name: "QParallax", props: { src: String, height: { type: Number, default: 500 }, speed: { type: Number, default: 1, validator: (e) => e >= 0 && e <= 1 }, scrollTarget: er, onScroll: Function }, setup(e, { slots: t, emit: n }) {
  const r = K(0), l = K(null), a = K(null), o = K(null);
  let i, u, c, s, f, h;
  ge(() => e.height, () => {
    i === true && g();
  }), ge(() => e.scrollTarget, () => {
    i === true && (y(), k());
  });
  let m = (p) => {
    r.value = p, e.onScroll !== void 0 && n("scroll", p);
  };
  function g() {
    let p, b, C;
    h === window ? (p = 0, C = b = window.innerHeight) : (p = $o(h).top, b = kr(h), C = p + b);
    const P = $o(l.value).top, O = P + e.height;
    if (f !== void 0 || O > p && P < C) {
      const H = (C - P) / (e.height + b);
      w((c - e.height) * H * e.speed), m(H);
    }
  }
  let w = (p) => {
    u.style.transform = `translate3d(-50%,${Math.round(p)}px,0)`;
  };
  function x() {
    c = u.naturalHeight || u.videoHeight || kr(u), i === true && g();
  }
  function k() {
    i = true, h = In(l.value, e.scrollTarget), h.addEventListener("scroll", g, eo), window.addEventListener("resize", s, eo), g();
  }
  function y() {
    i === true && (i = false, h.removeEventListener("scroll", g, eo), window.removeEventListener("resize", s, eo), h = void 0, w.cancel(), m.cancel(), s.cancel());
  }
  return ct(() => {
    w = au(w), m = au(m), s = au(x), u = t.media !== void 0 ? a.value.children[0] : o.value, u.onload = u.onloadstart = u.loadedmetadata = x, x(), u.style.display = "initial", window.IntersectionObserver !== void 0 ? (f = new IntersectionObserver((p) => {
      (p[0].isIntersecting === true ? k : y)();
    }), f.observe(l.value)) : k();
  }), We(() => {
    y(), f == null ? void 0 : f.disconnect(), u.onload = u.onloadstart = u.loadedmetadata = null;
  }), () => d("div", { ref: l, class: "q-parallax", style: { height: `${e.height}px` } }, [d("div", { ref: a, class: "q-parallax__media absolute-full" }, t.media !== void 0 ? t.media() : [d("img", { ref: o, src: e.src })]), d("div", { class: "q-parallax__content absolute-full column flex-center" }, t.content !== void 0 ? t.content({ percentScrolled: r.value }) : Pe(t.default))]);
} });
function da(e, t = /* @__PURE__ */ new WeakMap()) {
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
    n.add(da(r, t));
  }) : e instanceof Map && e.forEach((r, l) => {
    n.set(l, da(r, t));
  }), Object.assign(n, ...Object.keys(e).map((r) => ({ [r]: da(e[r], t) })));
}
he({ name: "QPopupEdit", props: { modelValue: { required: true }, title: String, buttons: Boolean, labelSet: String, labelCancel: String, color: { type: String, default: "primary" }, validate: { type: Function, default: () => true }, autoSave: Boolean, cover: { type: Boolean, default: true }, disable: Boolean }, emits: ["update:modelValue", "save", "cancel", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = K(null), o = K(""), i = K("");
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
  function w() {
    u = false, o.value = da(e.modelValue), i.value = da(e.modelValue), n("beforeShow");
  }
  function x() {
    n("show");
  }
  function k() {
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
    if (e.disable !== true) return d(hi, { ref: a, class: "q-popup-edit", cover: e.cover, onBeforeShow: w, onShow: x, onBeforeHide: k, onHide: y, onEscapeKey: f }, p);
  };
} });
he({ name: "QPopupProxy", props: { ...$m, breakpoint: { type: [String, Number], default: 450 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: n, attrs: r }) {
  const { proxy: l } = xe(), { $q: a } = l, o = K(false), i = K(null), u = v(() => parseInt(e.breakpoint, 10)), { canShow: c } = $s({ showing: o });
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
  return Object.assign(l, { show(w) {
    c(w) === true && i.value.show(w);
  }, hide(w) {
    i.value.hide(w);
  }, toggle(w) {
    i.value.toggle(w);
  } }), Vt(l, "currentComponent", () => ({ type: f.value, ref: i.value })), () => {
    const w = { ref: i, ...h.value, ...r, onShow: m, onHide: g };
    let x;
    return f.value === "dialog" ? x = bi : (x = hi, Object.assign(w, { target: e.target, contextMenu: e.contextMenu, noParentEvent: true, separateClosePopup: true })), d(x, w, t.default);
  };
} });
var Q1 = { xs: 2, sm: 4, md: 6, lg: 10, xl: 14 };
function zd(e, t, n) {
  return { transform: t === true ? `translateX(${n.lang.rtl === true ? "-" : ""}100%) scale3d(${-e},1,1)` : `scale3d(${e},1,1)` };
}
var K1 = he({ name: "QLinearProgress", props: { ...nt, ...el, value: { type: Number, default: 0 }, buffer: Number, color: String, trackColor: String, reverse: Boolean, stripe: Boolean, indeterminate: Boolean, query: Boolean, rounded: Boolean, animationSpeed: { type: [String, Number], default: 2100 }, instantFeedback: Boolean }, setup(e, { slots: t }) {
  const { proxy: n } = xe(), r = lt(e, n.$q), l = tl(e, Q1), a = v(() => e.indeterminate === true || e.query === true), o = v(() => e.reverse !== e.query), i = v(() => ({ ...l.value !== null ? l.value : {}, "--q-linear-progress-speed": `${e.animationSpeed}ms` })), u = v(() => "q-linear-progress" + (e.color !== void 0 ? ` text-${e.color}` : "") + (e.reverse === true || e.query === true ? " q-linear-progress--reverse" : "") + (e.rounded === true ? " rounded-borders" : "")), c = v(() => zd(e.buffer !== void 0 ? e.buffer : 1, o.value, n.$q)), s = v(() => `with${e.instantFeedback === true ? "out" : ""}-transition`), f = v(() => `q-linear-progress__track absolute-full q-linear-progress__track--${s.value} q-linear-progress__track--${r.value === true ? "dark" : "light"}` + (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")), h = v(() => zd(a.value === true ? 1 : e.value, o.value, n.$q)), m = v(() => `q-linear-progress__model absolute-full q-linear-progress__model--${s.value} q-linear-progress__model--${a.value === true ? "in" : ""}determinate`), g = v(() => ({ width: `${e.value * 100}%` })), w = v(() => `q-linear-progress__stripe absolute-${e.reverse === true ? "right" : "left"} q-linear-progress__stripe--${s.value}`);
  return () => {
    const x = [d("div", { class: f.value, style: c.value }), d("div", { class: m.value, style: h.value })];
    return e.stripe === true && a.value === false && x.push(d("div", { class: w.value, style: g.value })), d("div", { class: u.value, style: i.value, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuenow": e.indeterminate === true ? void 0 : e.value }, qt(t.default, x));
  };
} }), Nd = 40, ou = 20;
he({ name: "QPullToRefresh", props: { color: String, bgColor: String, icon: String, noMouse: Boolean, disable: Boolean, scrollTarget: er }, emits: ["refresh"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = K("pull"), o = K(0), i = K(false), u = K(-40), c = K(false), s = K({}), f = v(() => ({ opacity: o.value, transform: `translateY(${u.value}px) rotate(${o.value * 360}deg)` })), h = v(() => "q-pull-to-refresh__puller row flex-center" + (c.value === true ? " q-pull-to-refresh__puller--animating" : "") + (e.bgColor !== void 0 ? ` bg-${e.bgColor}` : ""));
  function m(C) {
    if (C.isFinal === true) {
      i.value === true && (i.value = false, a.value === "pulled" ? (a.value = "refreshing", p({ pos: ou }), x()) : a.value === "pull" && p({ pos: -40, ratio: 0 }));
      return;
    }
    if (c.value === true || a.value === "refreshing") return false;
    if (C.isFirst === true) {
      if (yl(k) !== 0 || C.direction !== "down") return i.value === true && (i.value = false, a.value = "pull", p({ pos: -40, ratio: 0 })), false;
      i.value = true;
      const { top: H, left: B } = r.$el.getBoundingClientRect();
      s.value = { top: H + "px", left: B + "px", width: window.getComputedStyle(r.$el).getPropertyValue("width") };
    }
    Dt(C.evt);
    const P = Math.min(140, Math.max(0, C.distance.y));
    u.value = P - Nd, o.value = dt(P / (ou + Nd), 0, 1);
    const O = u.value > ou ? "pulled" : "pull";
    a.value !== O && (a.value = O);
  }
  const g = v(() => {
    const C = { down: true };
    return e.noMouse !== true && (C.mouse = true), [[bn, m, void 0, C]];
  }), w = v(() => `q-pull-to-refresh__content${i.value === true ? " no-pointer-events" : ""}`);
  function x() {
    n("refresh", () => {
      p({ pos: -40, ratio: 0 }, () => {
        a.value = "pull";
      });
    });
  }
  let k, y = null;
  function p({ pos: C, ratio: P }, O) {
    c.value = true, u.value = C, P !== void 0 && (o.value = P), y !== null && clearTimeout(y), y = setTimeout(() => {
      y = null, c.value = false, O == null ? void 0 : O();
    }, 300);
  }
  function b() {
    k = In(r.$el, e.scrollTarget);
  }
  return ge(() => e.scrollTarget, b), ct(b), We(() => {
    y !== null && clearTimeout(y);
  }), Object.assign(r, { trigger: x, updateScrollTarget: b }), () => {
    const C = [d("div", { class: w.value }, Pe(t.default)), d("div", { class: "q-pull-to-refresh__puller-container fixed row flex-center no-pointer-events z-top", style: s.value }, [d("div", { class: h.value, style: f.value }, [a.value !== "refreshing" ? d(et, { name: e.icon || l.iconSet.pullToRefresh.icon, color: e.color, size: "32px" }) : d(wn, { size: "24px", color: e.color })])])];
    return _n("div", { class: "q-pull-to-refresh" }, C, "main", e.disable === false, () => g.value);
  };
} });
var al = { MIN: 0, RANGE: 1, MAX: 2 };
he({ name: "QRange", props: { ...eh, modelValue: { type: Object, default: () => ({ min: null, max: null }), validator: (e) => "min" in e && "max" in e }, dragRange: Boolean, dragOnlyRange: Boolean, leftLabelColor: String, leftLabelTextColor: String, rightLabelColor: String, rightLabelTextColor: String, leftLabelValue: [String, Number], rightLabelValue: [String, Number], leftThumbColor: String, rightThumbColor: String }, emits: th, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = xe(), { state: r, methods: l } = nh({ updateValue: H, updatePosition: L, getDragging: B, formAttrs: v(() => ({ type: "hidden", name: e.name, value: `${e.modelValue.min}|${e.modelValue.max}` })) }), a = K(null), o = K(0), i = K(0), u = K({ min: 0, max: 0 });
  function c() {
    u.value.min = e.modelValue.min === null ? r.innerMin.value : dt(e.modelValue.min, r.innerMin.value, r.innerMax.value), u.value.max = e.modelValue.max === null ? r.innerMax.value : dt(e.modelValue.max, r.innerMin.value, r.innerMax.value);
  }
  ge(() => `${e.modelValue.min}|${e.modelValue.max}|${r.innerMin.value}|${r.innerMax.value}`, c), c();
  const s = v(() => l.convertModelToRatio(u.value.min)), f = v(() => l.convertModelToRatio(u.value.max)), h = v(() => r.active.value === true ? o.value : s.value), m = v(() => r.active.value === true ? i.value : f.value), g = v(() => {
    const q = { [r.positionProp.value]: `${100 * h.value}%`, [r.sizeProp.value]: `${100 * (m.value - h.value)}%` };
    return e.selectionImg !== void 0 && (q.backgroundImage = `url(${e.selectionImg}) !important`), q;
  }), w = v(() => {
    if (r.editable.value !== true) return {};
    if (n.platform.is.mobile === true) return { onClick: l.onMobileClick };
    const q = { onMousedown: l.onActivate };
    return (e.dragRange === true || e.dragOnlyRange === true) && Object.assign(q, { onFocus: () => {
      r.focus.value = "both";
    }, onBlur: l.onBlur, onKeydown: N, onKeyup: l.onKeyup }), q;
  });
  function x(q) {
    return n.platform.is.mobile !== true && r.editable.value === true && e.dragOnlyRange !== true ? { onFocus: () => {
      r.focus.value = q;
    }, onBlur: l.onBlur, onKeydown: N, onKeyup: l.onKeyup } : {};
  }
  const k = v(() => e.dragOnlyRange !== true ? r.tabindex.value : null), y = v(() => n.platform.is.mobile !== true && (e.dragRange || e.dragOnlyRange === true) ? r.tabindex.value : null), p = K(null), b = v(() => x("min")), C = l.getThumbRenderFn({ focusValue: "min", getNodeData: () => ({ ref: p, key: "tmin", ...b.value, tabindex: k.value }), ratio: h, label: v(() => e.leftLabelValue !== void 0 ? e.leftLabelValue : u.value.min), thumbColor: v(() => e.leftThumbColor || e.thumbColor || e.color), labelColor: v(() => e.leftLabelColor || e.labelColor), labelTextColor: v(() => e.leftLabelTextColor || e.labelTextColor) }), P = v(() => x("max")), O = l.getThumbRenderFn({ focusValue: "max", getNodeData: () => ({ ...P.value, key: "tmax", tabindex: k.value }), ratio: m, label: v(() => e.rightLabelValue !== void 0 ? e.rightLabelValue : u.value.max), thumbColor: v(() => e.rightThumbColor || e.thumbColor || e.color), labelColor: v(() => e.rightLabelColor || e.labelColor), labelTextColor: v(() => e.rightLabelTextColor || e.labelTextColor) });
  function H(q) {
    (u.value.min !== e.modelValue.min || u.value.max !== e.modelValue.max) && t("update:modelValue", { ...u.value }), q === true && t("change", { ...u.value });
  }
  function B(q) {
    const { left: R, top: T, width: j, height: W } = a.value.getBoundingClientRect(), U = e.dragOnlyRange === true ? 0 : e.vertical === true ? p.value.offsetHeight / (2 * W) : p.value.offsetWidth / (2 * j), Z = { left: R, top: T, width: j, height: W, valueMin: u.value.min, valueMax: u.value.max, ratioMin: s.value, ratioMax: f.value }, ae = l.getDraggingRatio(q, Z);
    return e.dragOnlyRange !== true && ae < Z.ratioMin + U ? Z.type = al.MIN : e.dragOnlyRange === true || ae < Z.ratioMax - U ? e.dragRange === true || e.dragOnlyRange === true ? (Z.type = al.RANGE, Object.assign(Z, { offsetRatio: ae, offsetModel: l.convertRatioToModel(ae), rangeValue: Z.valueMax - Z.valueMin, rangeRatio: Z.ratioMax - Z.ratioMin })) : Z.type = Z.ratioMax - ae < ae - Z.ratioMin ? al.MAX : al.MIN : Z.type = al.MAX, Z;
  }
  function L(q, R = r.dragging.value) {
    let T;
    const j = l.getDraggingRatio(q, R), W = l.convertRatioToModel(j);
    switch (R.type) {
      case al.MIN:
        j <= R.ratioMax ? (T = { minR: j, maxR: R.ratioMax, min: W, max: R.valueMax }, r.focus.value = "min") : (T = { minR: R.ratioMax, maxR: j, min: R.valueMax, max: W }, r.focus.value = "max");
        break;
      case al.MAX:
        j >= R.ratioMin ? (T = { minR: R.ratioMin, maxR: j, min: R.valueMin, max: W }, r.focus.value = "max") : (T = { minR: j, maxR: R.ratioMin, min: W, max: R.valueMin }, r.focus.value = "min");
        break;
      case al.RANGE:
        const U = j - R.offsetRatio, Z = dt(R.ratioMin + U, r.innerMinRatio.value, r.innerMaxRatio.value - R.rangeRatio), ae = W - R.offsetModel, ye = dt(R.valueMin + ae, r.innerMin.value, r.innerMax.value - R.rangeValue);
        T = { minR: Z, maxR: Z + R.rangeRatio, min: r.roundValueFn.value(ye), max: r.roundValueFn.value(ye + R.rangeValue) }, r.focus.value = "both";
        break;
    }
    u.value = u.value.min === null || u.value.max === null ? { min: T.min || e.min, max: T.max || e.max } : { min: T.min, max: T.max }, e.snap !== true || e.step === 0 ? (o.value = T.minR, i.value = T.maxR) : (o.value = l.convertModelToRatio(u.value.min), i.value = l.convertModelToRatio(u.value.max));
  }
  function N(q) {
    if (Qs.includes(q.keyCode) === false) return;
    je(q);
    const R = ([34, 33].includes(q.keyCode) ? 10 : 1) * r.keyStep.value, T = ([34, 37, 40].includes(q.keyCode) ? -1 : 1) * (r.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * R;
    if (r.focus.value === "both") {
      const j = u.value.max - u.value.min, W = dt(r.roundValueFn.value(u.value.min + T), r.innerMin.value, r.innerMax.value - j);
      u.value = { min: W, max: r.roundValueFn.value(W + j) };
    } else {
      if (r.focus.value === false) return;
      {
        const j = r.focus.value;
        u.value = { ...u.value, [j]: dt(r.roundValueFn.value(u.value[j] + T), j === "min" ? r.innerMin.value : u.value.min, j === "max" ? r.innerMax.value : u.value.max) };
      }
    }
    H();
  }
  return () => {
    const q = l.getContent(g, y, w, (R) => {
      R.push(C(), O());
    });
    return d("div", { ref: a, class: "q-range " + r.classes.value + (e.modelValue.min === null || e.modelValue.max === null ? " q-slider--no-value" : ""), ...r.attributes.value, "aria-valuenow": e.modelValue.min + "|" + e.modelValue.max }, q);
  };
} });
he({ name: "QRating", props: { ...el, ...xn, modelValue: { type: Number, required: true }, max: { type: [String, Number], default: 5 }, icon: [String, Array], iconHalf: [String, Array], iconSelected: [String, Array], iconAriaLabel: [String, Array], color: [String, Array], colorHalf: [String, Array], colorSelected: [String, Array], noReset: Boolean, noDimming: Boolean, readonly: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = tl(e), a = Fa(e), o = ql(a), i = K(0);
  let u = {};
  const c = v(() => e.readonly !== true && e.disable !== true), s = v(() => `q-rating row inline items-center q-rating--${c.value === true ? "" : "non-"}editable` + (e.noDimming === true ? " q-rating--no-dimming" : "") + (e.disable === true ? " disabled" : "") + (e.color !== void 0 && Array.isArray(e.color) === false ? ` text-${e.color}` : "")), f = v(() => {
    const p = Array.isArray(e.icon) === true ? e.icon.length : 0, b = Array.isArray(e.iconSelected) === true ? e.iconSelected.length : 0, C = Array.isArray(e.iconHalf) === true ? e.iconHalf.length : 0, P = Array.isArray(e.color) === true ? e.color.length : 0, O = Array.isArray(e.colorSelected) === true ? e.colorSelected.length : 0, H = Array.isArray(e.colorHalf) === true ? e.colorHalf.length : 0;
    return { iconLen: p, icon: p > 0 ? e.icon[p - 1] : e.icon, selIconLen: b, selIcon: b > 0 ? e.iconSelected[b - 1] : e.iconSelected, halfIconLen: C, halfIcon: C > 0 ? e.iconHalf[b - 1] : e.iconHalf, colorLen: P, color: P > 0 ? e.color[P - 1] : e.color, selColorLen: O, selColor: O > 0 ? e.colorSelected[O - 1] : e.colorSelected, halfColorLen: H, halfColor: H > 0 ? e.colorHalf[H - 1] : e.colorHalf };
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
    const p = [], b = f.value, C = Math.ceil(e.modelValue), P = c.value === true ? 0 : null, O = e.iconHalf === void 0 || C === e.modelValue ? -1 : C;
    for (let H = 1; H <= e.max; H++) {
      const B = i.value === 0 && e.modelValue >= H || i.value > 0 && i.value >= H, L = O === H && i.value < H, N = i.value > 0 && (L === true ? C : e.modelValue) >= H && i.value < H, q = L === true ? H <= b.halfColorLen ? e.colorHalf[H - 1] : b.halfColor : b.selColor !== void 0 && B === true ? H <= b.selColorLen ? e.colorSelected[H - 1] : b.selColor : H <= b.colorLen ? e.color[H - 1] : b.color, R = (L === true ? H <= b.halfIconLen ? e.iconHalf[H - 1] : b.halfIcon : b.selIcon !== void 0 && (B === true || N === true) ? H <= b.selIconLen ? e.iconSelected[H - 1] : b.selIcon : H <= b.iconLen ? e.icon[H - 1] : b.icon) || r.iconSet.rating.icon;
      p.push({ name: (L === true ? H <= b.halfIconLen ? e.iconHalf[H - 1] : b.halfIcon : b.selIcon !== void 0 && (B === true || N === true) ? H <= b.selIconLen ? e.iconSelected[H - 1] : b.selIcon : H <= b.iconLen ? e.icon[H - 1] : b.icon) || r.iconSet.rating.icon, attrs: { tabindex: P, role: "radio", "aria-checked": e.modelValue === H ? "true" : "false", "aria-label": h.value(H, R) }, iconClass: "q-rating__icon" + (B === true || L === true ? " q-rating__icon--active" : "") + (N === true ? " q-rating__icon--exselected" : "") + (i.value === H ? " q-rating__icon--hovered" : "") + (q !== void 0 ? ` text-${q}` : "") });
    }
    return p;
  }), g = v(() => {
    const p = { role: "radiogroup" };
    return e.disable === true && (p["aria-disabled"] = "true"), e.readonly === true && (p["aria-readonly"] = "true"), p;
  });
  function w(p) {
    if (c.value === true) {
      const b = dt(parseInt(p, 10), 1, parseInt(e.max, 10)), C = e.noReset !== true && e.modelValue === b ? 0 : b;
      C !== e.modelValue && n("update:modelValue", C), i.value = 0;
    }
  }
  function x(p) {
    c.value === true && (i.value = p);
  }
  function k(p, b) {
    switch (p.keyCode) {
      case 13:
      case 32:
        return w(b), je(p);
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
    return m.value.forEach(({ iconClass: b, name: C, attrs: P }, O) => {
      const H = O + 1;
      p.push(d("div", { key: H, ref: (B) => {
        u[`rt${H}`] = B;
      }, class: "q-rating__icon-container flex flex-center", ...P, onClick() {
        w(H);
      }, onMouseover() {
        x(H);
      }, onMouseout: y, onFocus() {
        x(H);
      }, onBlur: y, onKeyup(B) {
        k(B, H);
      } }, qt(t[`tip-${H}`], [d(et, { class: b, name: C })])));
    }), e.name !== void 0 && e.disable !== true && o(p, "push"), d("div", { class: s.value, style: l.value, ...g.value }, p);
  };
} });
he({ name: "QResponsive", props: Xs, setup(e, { slots: t }) {
  const n = Gs(e);
  return () => d("div", { class: "q-responsive" }, [d("div", { class: "q-responsive__filler overflow-hidden" }, [d("div", { style: n.value })]), d("div", { class: "q-responsive__content absolute-full fit" }, Pe(t.default))]);
} });
var W1 = he({ props: ["store", "barStyle", "verticalBarStyle", "horizontalBarStyle"], setup(e) {
  return () => [d("div", { class: e.store.scroll.vertical.barClass.value, style: [e.barStyle, e.verticalBarStyle], "aria-hidden": "true", onMousedown: e.store.onVerticalMousedown }), d("div", { class: e.store.scroll.horizontal.barClass.value, style: [e.barStyle, e.horizontalBarStyle], "aria-hidden": "true", onMousedown: e.store.onHorizontalMousedown }), cn(d("div", { ref: e.store.scroll.vertical.ref, class: e.store.scroll.vertical.thumbClass.value, style: e.store.scroll.vertical.style.value, "aria-hidden": "true" }), e.store.thumbVertDir), cn(d("div", { ref: e.store.scroll.horizontal.ref, class: e.store.scroll.horizontal.thumbClass.value, style: e.store.scroll.horizontal.style.value, "aria-hidden": "true" }), e.store.thumbHorizDir)];
} }), Hd = ["vertical", "horizontal"], iu = { vertical: { offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y" }, horizontal: { offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x" } }, jd = { prevent: true, mouse: true, mouseAllDir: true }, Ud = (e) => e >= 250 ? 50 : Math.ceil(e / 5), Y1 = he({ name: "QScrollArea", props: { ...nt, thumbStyle: Object, verticalThumbStyle: Object, horizontalThumbStyle: Object, barStyle: [Array, String, Object], verticalBarStyle: [Array, String, Object], horizontalBarStyle: [Array, String, Object], verticalOffset: { type: Array, default: [0, 0] }, horizontalOffset: { type: Array, default: [0, 0] }, contentStyle: [Array, String, Object], contentActiveStyle: [Array, String, Object], delay: { type: [String, Number], default: 1e3 }, visible: { type: Boolean, default: null }, tabindex: [String, Number], onScroll: Function }, setup(e, { slots: t, emit: n }) {
  const r = K(false), l = K(false), a = K(false), o = { vertical: K(0), horizontal: K(0) }, i = { vertical: { ref: K(null), position: K(0), size: K(0) }, horizontal: { ref: K(null), position: K(0), size: K(0) } }, { proxy: u } = xe(), c = lt(e, u.$q);
  let s = null, f;
  const h = K(null), m = v(() => "q-scrollarea" + (c.value === true ? " q-scrollarea--dark" : ""));
  Object.assign(o, { verticalInner: v(() => o.vertical.value - e.verticalOffset[0] - e.verticalOffset[1]), horizontalInner: v(() => o.horizontal.value - e.horizontalOffset[0] - e.horizontalOffset[1]) }), i.vertical.percentage = v(() => {
    const T = i.vertical.size.value - o.vertical.value;
    if (T <= 0) return 0;
    const j = dt(i.vertical.position.value / T, 0, 1);
    return Math.round(j * 1e4) / 1e4;
  }), i.vertical.thumbHidden = v(() => (e.visible === null ? a.value : e.visible) !== true && r.value === false && l.value === false || i.vertical.size.value <= o.vertical.value + 1), i.vertical.thumbStart = v(() => e.verticalOffset[0] + i.vertical.percentage.value * (o.verticalInner.value - i.vertical.thumbSize.value)), i.vertical.thumbSize = v(() => Math.round(dt(o.verticalInner.value * o.verticalInner.value / i.vertical.size.value, Ud(o.verticalInner.value), o.verticalInner.value))), i.vertical.style = v(() => ({ ...e.thumbStyle, ...e.verticalThumbStyle, top: `${i.vertical.thumbStart.value}px`, height: `${i.vertical.thumbSize.value}px`, right: `${e.horizontalOffset[1]}px` })), i.vertical.thumbClass = v(() => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (i.vertical.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), i.vertical.barClass = v(() => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (i.vertical.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : "")), i.horizontal.percentage = v(() => {
    const T = i.horizontal.size.value - o.horizontal.value;
    if (T <= 0) return 0;
    const j = dt(Math.abs(i.horizontal.position.value) / T, 0, 1);
    return Math.round(j * 1e4) / 1e4;
  }), i.horizontal.thumbHidden = v(() => (e.visible === null ? a.value : e.visible) !== true && r.value === false && l.value === false || i.horizontal.size.value <= o.horizontal.value + 1), i.horizontal.thumbStart = v(() => e.horizontalOffset[0] + i.horizontal.percentage.value * (o.horizontalInner.value - i.horizontal.thumbSize.value)), i.horizontal.thumbSize = v(() => Math.round(dt(o.horizontalInner.value * o.horizontalInner.value / i.horizontal.size.value, Ud(o.horizontalInner.value), o.horizontalInner.value))), i.horizontal.style = v(() => ({ ...e.thumbStyle, ...e.horizontalThumbStyle, [u.$q.lang.rtl === true ? "right" : "left"]: `${i.horizontal.thumbStart.value}px`, width: `${i.horizontal.thumbSize.value}px`, bottom: `${e.verticalOffset[1]}px` })), i.horizontal.thumbClass = v(() => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (i.horizontal.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), i.horizontal.barClass = v(() => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (i.horizontal.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : ""));
  const g = v(() => i.vertical.thumbHidden.value === true && i.horizontal.thumbHidden.value === true ? e.contentStyle : e.contentActiveStyle);
  function w() {
    const T = {};
    return Hd.forEach((j) => {
      const W = i[j];
      Object.assign(T, { [j + "Position"]: W.position.value, [j + "Percentage"]: W.percentage.value, [j + "Size"]: W.size.value, [j + "ContainerSize"]: o[j].value, [j + "ContainerInnerSize"]: o[j + "Inner"].value });
    }), T;
  }
  const x = Ar(() => {
    const T = w();
    T.ref = u, n("scroll", T);
  }, 0);
  function k(T, j, W) {
    if (Hd.includes(T) === false) {
      console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
      return;
    }
    (T === "vertical" ? xr : Ni)(h.value, j, W);
  }
  function y({ height: T, width: j }) {
    let W = false;
    o.vertical.value !== T && (o.vertical.value = T, W = true), o.horizontal.value !== j && (o.horizontal.value = j, W = true), W === true && O();
  }
  function p({ position: T }) {
    let j = false;
    i.vertical.position.value !== T.top && (i.vertical.position.value = T.top, j = true), i.horizontal.position.value !== T.left && (i.horizontal.position.value = T.left, j = true), j === true && O();
  }
  function b({ height: T, width: j }) {
    i.horizontal.size.value !== j && (i.horizontal.size.value = j, O()), i.vertical.size.value !== T && (i.vertical.size.value = T, O());
  }
  function C(T, j) {
    const W = i[j];
    if (T.isFirst === true) {
      if (W.thumbHidden.value === true) return;
      f = W.position.value, l.value = true;
    } else if (l.value !== true) return;
    T.isFinal === true && (l.value = false);
    const U = iu[j], Z = (W.size.value - o[j].value) / (o[j + "Inner"].value - W.thumbSize.value), ae = T.distance[U.dist], ye = f + (T.direction === U.dir ? 1 : -1) * ae * Z;
    H(ye, j);
  }
  function P(T, j) {
    const W = i[j];
    if (W.thumbHidden.value !== true) {
      const U = j === "vertical" ? e.verticalOffset[0] : e.horizontalOffset[0], Z = T[iu[j].offset] - U, ae = W.thumbStart.value - U;
      if (Z < ae || Z > ae + W.thumbSize.value) {
        const ye = Z - W.thumbSize.value / 2, X = dt(ye / (o[j + "Inner"].value - W.thumbSize.value), 0, 1);
        H(X * Math.max(0, W.size.value - o[j].value), j);
      }
      W.ref.value !== null && W.ref.value.dispatchEvent(new MouseEvent(T.type, T));
    }
  }
  function O() {
    r.value = true, s !== null && clearTimeout(s), s = setTimeout(() => {
      s = null, r.value = false;
    }, e.delay), e.onScroll !== void 0 && x();
  }
  function H(T, j) {
    h.value[iu[j].scroll] = T;
  }
  let B = null;
  function L() {
    B !== null && clearTimeout(B), B = setTimeout(() => {
      B = null, a.value = true;
    }, u.$q.platform.is.ios ? 50 : 0);
  }
  function N() {
    B !== null && (clearTimeout(B), B = null), a.value = false;
  }
  let q = null;
  ge(() => u.$q.lang.rtl, (T) => {
    h.value !== null && Ni(h.value, Math.abs(i.horizontal.position.value) * (T === true ? -1 : 1));
  }), Dn(() => {
    q = { top: i.vertical.position.value, left: i.horizontal.position.value };
  }), kl(() => {
    if (q === null) return;
    const T = h.value;
    T !== null && (Ni(T, q.left), xr(T, q.top));
  }), We(x.cancel), Object.assign(u, { getScrollTarget: () => h.value, getScroll: w, getScrollPosition: () => ({ top: i.vertical.position.value, left: i.horizontal.position.value }), getScrollPercentage: () => ({ top: i.vertical.percentage.value, left: i.horizontal.percentage.value }), setScrollPosition: k, setScrollPercentage(T, j, W) {
    k(T, j * (i[T].size.value - o[T].value) * (T === "horizontal" && u.$q.lang.rtl === true ? -1 : 1), W);
  } });
  const R = { scroll: i, thumbVertDir: [[bn, (T) => {
    C(T, "vertical");
  }, void 0, { vertical: true, ...jd }]], thumbHorizDir: [[bn, (T) => {
    C(T, "horizontal");
  }, void 0, { horizontal: true, ...jd }]], onVerticalMousedown(T) {
    P(T, "vertical");
  }, onHorizontalMousedown(T) {
    P(T, "horizontal");
  } };
  return () => d("div", { class: m.value, onMouseenter: L, onMouseleave: N }, [d("div", { ref: h, class: "q-scrollarea__container scroll relative-position fit hide-scrollbar", tabindex: e.tabindex !== void 0 ? e.tabindex : void 0 }, [d("div", { class: "q-scrollarea__content absolute", style: g.value }, qt(t.default, [d(Wl, { debounce: 0, onResize: b })])), d(Dh, { axis: "both", onScroll: p })]), d(Wl, { debounce: 0, onResize: y }), d(W1, { store: R, barStyle: e.barStyle, verticalBarStyle: e.verticalBarStyle, horizontalBarStyle: e.horizontalBarStyle })]);
} }), kn = 1e3, X1 = ["start", "center", "end", "start-force", "center-force", "end-force"], Nh = Array.prototype.filter, G1 = __QUASAR_SSR__ || window.getComputedStyle(document.body).overflowAnchor === void 0 ? St : function(e, t) {
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
  if (l === true ? (e === window ? (s.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, s.scrollViewSize += document.documentElement.clientWidth) : (s.scrollStart = u.scrollLeft, s.scrollViewSize += u.clientWidth), s.scrollMaxSize = u.scrollWidth, a === true && (s.scrollStart = (Ta === true ? s.scrollMaxSize - s.scrollViewSize : 0) - s.scrollStart)) : (e === window ? (s.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0, s.scrollViewSize += document.documentElement.clientHeight) : (s.scrollStart = u.scrollTop, s.scrollViewSize += u.clientHeight), s.scrollMaxSize = u.scrollHeight), n !== null) for (let f = n.previousElementSibling; f !== null; f = f.previousElementSibling) f.classList.contains("q-virtual-scroll--skip") === false && (s.offsetStart += f[c]);
  if (r !== null) for (let f = r.nextElementSibling; f !== null; f = f.nextElementSibling) f.classList.contains("q-virtual-scroll--skip") === false && (s.offsetEnd += f[c]);
  if (t !== e) {
    const f = u.getBoundingClientRect(), h = t.getBoundingClientRect();
    l === true ? (s.offsetStart += h.left - f.left, s.offsetEnd -= h.width) : (s.offsetStart += h.top - f.top, s.offsetEnd -= h.height), e !== window && (s.offsetStart += s.scrollStart), s.offsetEnd += s.scrollMaxSize - s.offsetStart;
  }
  return s;
}
function Qd(e, t, n, r) {
  t === "end" && (t = (e === window ? document.body : e)[n === true ? "scrollWidth" : "scrollHeight"]), e === window ? n === true ? (r === true && (t = (Ta === true ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - t), window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t) : n === true ? (r === true && (t = (Ta === true ? e.scrollWidth - e.offsetWidth : 0) - t), e.scrollLeft = t) : e.scrollTop = t;
}
function Nr(e, t, n, r) {
  if (n >= r) return 0;
  const l = t.length, a = Math.floor(n / kn), o = Math.floor((r - 1) / kn) + 1;
  let i = e.slice(a, o).reduce(Sr, 0);
  return n % kn !== 0 && (i -= t.slice(a * kn, n).reduce(Sr, 0)), r % kn !== 0 && r !== l && (i -= t.slice(r, o * kn).reduce(Sr, 0)), i;
}
var Hh = { virtualScrollSliceSize: { type: [Number, String], default: 10 }, virtualScrollSliceRatioBefore: { type: [Number, String], default: 1 }, virtualScrollSliceRatioAfter: { type: [Number, String], default: 1 }, virtualScrollItemSize: { type: [Number, String], default: 24 }, virtualScrollStickySizeStart: { type: [Number, String], default: 0 }, virtualScrollStickySizeEnd: { type: [Number, String], default: 0 }, tableColspan: [Number, String] }, jh = Object.keys(Hh), Zu = { virtualScrollHorizontal: Boolean, onVirtualScroll: Function, ...Hh };
function Uh({ virtualScrollLength: e, getVirtualScrollTarget: t, getVirtualScrollEl: n, virtualScrollItemSizeComputed: r }) {
  const l = xe(), { props: a, emit: o, proxy: i } = l, { $q: u } = i;
  let c, s, f, h = [], m;
  const g = K(0), w = K(0), x = K({}), k = K(null), y = K(null), p = K(null), b = K({ from: 0, to: 0 }), C = v(() => a.tableColspan !== void 0 ? a.tableColspan : 100);
  r === void 0 && (r = v(() => a.virtualScrollItemSize));
  const P = v(() => r.value + ";" + a.virtualScrollHorizontal), O = v(() => P.value + ";" + a.virtualScrollSliceRatioBefore + ";" + a.virtualScrollSliceRatioAfter);
  ge(O, () => {
    W();
  }), ge(P, H);
  function H() {
    j(s, true);
  }
  function B(X) {
    j(X === void 0 ? s : X);
  }
  function L(X, _) {
    const D = t();
    if (D == null || D.nodeType === 8) return;
    const F = uu(D, n(), k.value, y.value, a.virtualScrollHorizontal, u.lang.rtl, a.virtualScrollStickySizeStart, a.virtualScrollStickySizeEnd);
    f !== F.scrollViewSize && W(F.scrollViewSize), q(D, F, Math.min(e.value - 1, Math.max(0, parseInt(X, 10) || 0)), 0, X1.indexOf(_) !== -1 ? _ : s !== -1 && X > s ? "end" : "start");
  }
  function N() {
    const X = t();
    if (X == null || X.nodeType === 8) return;
    const _ = uu(X, n(), k.value, y.value, a.virtualScrollHorizontal, u.lang.rtl, a.virtualScrollStickySizeStart, a.virtualScrollStickySizeEnd), D = e.value - 1, F = _.scrollMaxSize - _.offsetStart - _.offsetEnd - w.value;
    if (c === _.scrollStart) return;
    if (_.scrollMaxSize <= 0) {
      q(X, _, 0, 0);
      return;
    }
    f !== _.scrollViewSize && W(_.scrollViewSize), R(b.value.from);
    const me = Math.floor(_.scrollMaxSize - Math.max(_.scrollViewSize, _.offsetEnd) - Math.min(m[D], _.scrollViewSize / 2));
    if (me > 0 && Math.ceil(_.scrollStart) >= me) {
      q(X, _, D, _.scrollMaxSize - _.offsetEnd - h.reduce(Sr, 0));
      return;
    }
    let $ = 0, A = _.scrollStart - _.offsetStart, Y = A;
    if (A <= F && A + _.scrollViewSize >= g.value) A -= g.value, $ = b.value.from, Y = A;
    else for (let V = 0; A >= h[V] && $ < D; V++) A -= h[V], $ += kn;
    for (; A > 0 && $ < D; ) A -= m[$], A > -_.scrollViewSize ? ($++, Y = A) : Y = m[$] + A;
    q(X, _, $, Y);
  }
  function q(X, _, D, F, me) {
    const $ = typeof me == "string" && me.indexOf("-force") !== -1, A = $ === true ? me.replace("-force", "") : me, Y = A !== void 0 ? A : "start";
    let V = Math.max(0, D - x.value[Y]), ne = V + x.value.total;
    ne > e.value && (ne = e.value, V = Math.max(0, ne - x.value.total)), c = _.scrollStart;
    const be = V !== b.value.from || ne !== b.value.to;
    if (be === false && A === void 0) {
      Z(D);
      return;
    }
    const { activeElement: S } = document, M = p.value;
    be === true && M !== null && M !== S && M.contains(S) === true && (M.addEventListener("focusout", T), setTimeout(() => {
      M == null ? void 0 : M.removeEventListener("focusout", T);
    })), G1(M, D - V);
    const I = A !== void 0 ? m.slice(V, D).reduce(Sr, 0) : 0;
    if (be === true) {
      const te = ne >= b.value.from && V <= b.value.to ? b.value.to : ne;
      b.value = { from: V, to: te }, g.value = Nr(h, m, 0, V), w.value = Nr(h, m, ne, e.value), requestAnimationFrame(() => {
        b.value.to !== ne && c === _.scrollStart && (b.value = { from: b.value.from, to: ne }, w.value = Nr(h, m, ne, e.value));
      });
    }
    requestAnimationFrame(() => {
      if (c !== _.scrollStart) return;
      be === true && R(V);
      const te = m.slice(V, D).reduce(Sr, 0), le = te + _.offsetStart + g.value, E = le + m[D];
      let ee = le + F;
      if (A !== void 0) {
        const se = te - I, ve = _.scrollStart + se;
        ee = $ !== true && ve < le && E < ve + _.scrollViewSize ? ve : A === "end" ? E - _.scrollViewSize : le - (A === "start" ? 0 : Math.round((_.scrollViewSize - m[D]) / 2));
      }
      c = ee, Qd(X, ee, a.virtualScrollHorizontal, u.lang.rtl), Z(D);
    });
  }
  function R(X) {
    const _ = p.value;
    if (_) {
      const D = Nh.call(_.children, (V) => V.classList && V.classList.contains("q-virtual-scroll--skip") === false), F = D.length, me = a.virtualScrollHorizontal === true ? (V) => V.getBoundingClientRect().width : (V) => V.offsetHeight;
      let $ = X, A, Y;
      for (let V = 0; V < F; ) {
        for (A = me(D[V]), V++; V < F && D[V].classList.contains("q-virtual-scroll--with-prev") === true; ) A += me(D[V]), V++;
        Y = A - m[$], Y !== 0 && (m[$] += Y, h[Math.floor($ / kn)] += Y), $++;
      }
    }
  }
  function T() {
    var _a3;
    (_a3 = p.value) == null ? void 0 : _a3.focus();
  }
  function j(X, _) {
    const D = 1 * r.value;
    (_ === true || Array.isArray(m) === false) && (m = []);
    const F = m.length;
    m.length = e.value;
    for (let $ = e.value - 1; $ >= F; $--) m[$] = D;
    const me = Math.floor((e.value - 1) / kn);
    h = [];
    for (let $ = 0; $ <= me; $++) {
      let A = 0;
      const Y = Math.min(($ + 1) * kn, e.value);
      for (let V = $ * kn; V < Y; V++) A += m[V];
      h.push(A);
    }
    s = -1, c = void 0, g.value = Nr(h, m, 0, b.value.from), w.value = Nr(h, m, b.value.to, e.value), X >= 0 ? (R(b.value.from), Qe(() => {
      L(X);
    })) : ae();
  }
  function W(X) {
    if (X === void 0 && typeof window < "u") {
      const A = t();
      A != null && A.nodeType !== 8 && (X = uu(A, n(), k.value, y.value, a.virtualScrollHorizontal, u.lang.rtl, a.virtualScrollStickySizeStart, a.virtualScrollStickySizeEnd).scrollViewSize);
    }
    f = X;
    const _ = parseFloat(a.virtualScrollSliceRatioBefore) || 0, D = parseFloat(a.virtualScrollSliceRatioAfter) || 0, F = 1 + _ + D, me = X === void 0 || X <= 0 ? 1 : Math.ceil(X / r.value), $ = Math.max(1, me, Math.ceil((a.virtualScrollSliceSize > 0 ? a.virtualScrollSliceSize : 10) / F));
    x.value = { total: Math.ceil($ * F), start: Math.ceil($ * _), center: Math.ceil($ * (0.5 + _)), end: Math.ceil($ * (1 + _)), view: me };
  }
  function U(X, _) {
    const D = a.virtualScrollHorizontal === true ? "width" : "height", F = { ["--q-virtual-scroll-item-" + D]: r.value + "px" };
    return [X === "tbody" ? d(X, { class: "q-virtual-scroll__padding", key: "before", ref: k }, [d("tr", [d("td", { style: { [D]: `${g.value}px`, ...F }, colspan: C.value })])]) : d(X, { class: "q-virtual-scroll__padding", key: "before", ref: k, style: { [D]: `${g.value}px`, ...F } }), d(X, { class: "q-virtual-scroll__content", key: "content", ref: p, tabindex: -1 }, _.flat()), X === "tbody" ? d(X, { class: "q-virtual-scroll__padding", key: "after", ref: y }, [d("tr", [d("td", { style: { [D]: `${w.value}px`, ...F }, colspan: C.value })])]) : d(X, { class: "q-virtual-scroll__padding", key: "after", ref: y, style: { [D]: `${w.value}px`, ...F } })];
  }
  function Z(X) {
    s !== X && (a.onVirtualScroll !== void 0 && o("virtualScroll", { index: X, from: b.value.from, to: b.value.to - 1, direction: X < s ? "decrease" : "increase", ref: i }), s = X);
  }
  W();
  const ae = Ar(N, u.platform.is.ios === true ? 120 : 35);
  ti(() => {
    W();
  });
  let ye = false;
  return Dn(() => {
    ye = true;
  }), kl(() => {
    if (ye !== true) return;
    const X = t();
    c !== void 0 && X !== void 0 && X !== null && X.nodeType !== 8 ? Qd(X, c, a.virtualScrollHorizontal, u.lang.rtl) : L(s);
  }), __QUASAR_SSR__ || We(() => {
    ae.cancel();
  }), Object.assign(i, { scrollTo: L, reset: H, refresh: B }), { virtualScrollSliceRange: b, virtualScrollSliceSizeComputed: x, setVirtualScrollSize: W, onVirtualScrollEvt: ae, localResetVirtualScroll: j, padVirtualScroll: U, scrollTo: L, reset: H, refresh: B };
}
var Kd = (e) => ["add", "add-unique", "toggle"].includes(e), Z1 = ".*+?^${}()|[]\\", J1 = Object.keys(pi);
function su(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (r) => r !== null && typeof r == "object" && n in r ? r[n] : r;
}
var e_ = he({ name: "QSelect", inheritAttrs: false, props: { ...Zu, ...xn, ...pi, modelValue: { required: true }, multiple: Boolean, displayValue: [String, Number], displayValueHtml: Boolean, dropdownIcon: String, options: { type: Array, default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], hideSelected: Boolean, hideDropdownIcon: Boolean, fillInput: Boolean, maxValues: [Number, String], optionsDense: Boolean, optionsDark: { type: Boolean, default: null }, optionsSelectedClass: String, optionsHtml: Boolean, optionsCover: Boolean, menuShrink: Boolean, menuAnchor: String, menuSelf: String, menuOffset: Array, popupContentClass: String, popupContentStyle: [String, Array, Object], popupNoRouteDismiss: Boolean, useInput: Boolean, useChips: Boolean, newValueMode: { type: String, validator: Kd }, mapOptions: Boolean, emitValue: Boolean, disableTabSelection: Boolean, inputDebounce: { type: [Number, String], default: 500 }, inputClass: [Array, String, Object], inputStyle: [Array, String, Object], tabindex: { type: [String, Number], default: 0 }, autocomplete: String, transitionShow: {}, transitionHide: {}, transitionDuration: {}, behavior: { type: String, validator: (e) => ["default", "menu", "dialog"].includes(e), default: "default" }, virtualScrollItemSize: Zu.virtualScrollItemSize.type, onNewValue: Function, onFilter: Function }, emits: [...yi, "add", "remove", "inputValue", "keyup", "keypress", "keydown", "popupShow", "popupHide", "filterAbort"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = K(false), o = K(false), i = K(-1), u = K(""), c = K(false), s = K(false);
  let f = null, h = null, m, g, w, x = null, k, y, p, b;
  const C = K(null), P = K(null), O = K(null), H = K(null), B = K(null), L = Fs(e), N = Bh(de), q = v(() => Array.isArray(e.options) ? e.options.length : 0), R = v(() => e.virtualScrollItemSize === void 0 ? e.optionsDense === true ? 24 : 48 : e.virtualScrollItemSize), { virtualScrollSliceRange: T, virtualScrollSliceSizeComputed: j, localResetVirtualScroll: W, padVirtualScroll: U, onVirtualScrollEvt: Z, scrollTo: ae, setVirtualScrollSize: ye } = Uh({ virtualScrollLength: q, getVirtualScrollTarget: Ut, getVirtualScrollEl: kt, virtualScrollItemSizeComputed: R }), X = _i(), _ = v(() => {
    const J = e.mapOptions === true && e.multiple !== true, Ae = e.modelValue !== void 0 && (e.modelValue !== null || J === true) ? e.multiple === true && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
    if (e.mapOptions === true && Array.isArray(e.options) === true) {
      const $e = e.mapOptions === true && m !== void 0 ? m : [], tt = Ae.map((gt) => oe(gt, $e));
      return e.modelValue === null && J === true ? tt.filter((gt) => gt !== null) : tt;
    }
    return Ae;
  }), D = v(() => {
    const J = {};
    return J1.forEach((Ae) => {
      const $e = e[Ae];
      $e !== void 0 && (J[Ae] = $e);
    }), J;
  }), F = v(() => e.optionsDark === null ? X.isDark.value : e.optionsDark), me = v(() => Xl(_.value)), $ = v(() => {
    let J = "q-field__input q-placeholder col";
    return e.hideSelected === true || _.value.length === 0 ? [J, e.inputClass] : (J += " q-field__input--padding", e.inputClass === void 0 ? J : [J, e.inputClass]);
  }), A = v(() => (e.virtualScrollHorizontal === true ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")), Y = v(() => q.value === 0), V = v(() => _.value.map((J) => re.value(J)).join(", ")), ne = v(() => e.displayValue !== void 0 ? e.displayValue : V.value), be = v(() => e.optionsHtml === true ? () => true : (J) => (J == null ? void 0 : J.html) === true), S = v(() => e.displayValueHtml === true || e.displayValue === void 0 && (e.optionsHtml === true || _.value.some(be.value))), M = v(() => X.focused.value === true ? e.tabindex : -1), I = v(() => {
    const J = { tabindex: e.tabindex, role: "combobox", "aria-label": e.label, "aria-readonly": e.readonly === true ? "true" : "false", "aria-autocomplete": e.useInput === true ? "list" : "none", "aria-expanded": a.value === true ? "true" : "false", "aria-controls": `${X.targetUid.value}_lb` };
    return i.value >= 0 && (J["aria-activedescendant"] = `${X.targetUid.value}_${i.value}`), J;
  }), te = v(() => ({ id: `${X.targetUid.value}_lb`, role: "listbox", "aria-multiselectable": e.multiple === true ? "true" : "false" })), le = v(() => _.value.map((J, Ae) => ({ index: Ae, opt: J, html: be.value(J), selected: true, removeAtIndex: Me, toggleOption: De, tabindex: M.value }))), E = v(() => {
    if (q.value === 0) return [];
    const { from: J, to: Ae } = T.value;
    return e.options.slice(J, Ae).map(($e, tt) => {
      const gt = Q.value($e) === true, vt = _e2($e) === true, Nt = J + tt, Pt = { clickable: true, active: vt, activeClass: ve.value, manualFocus: true, focused: false, disable: gt, tabindex: -1, dense: e.optionsDense, dark: F.value, role: "option", "aria-selected": vt === true ? "true" : "false", id: `${X.targetUid.value}_${Nt}`, onClick: () => {
        De($e);
      } };
      return gt !== true && (i.value === Nt && (Pt.focused = true), l.platform.is.desktop === true && (Pt.onMousemove = () => {
        a.value === true && ue(Nt);
      })), { index: Nt, opt: $e, html: be.value($e), label: re.value($e), selected: Pt.active, focused: Pt.focused, toggleOption: De, setOptionIndex: ue, itemProps: Pt };
    });
  }), ee = v(() => e.dropdownIcon !== void 0 ? e.dropdownIcon : l.iconSet.arrow.dropdown), se = v(() => e.optionsCover === false && e.outlined !== true && e.standout !== true && e.borderless !== true && e.rounded !== true), ve = v(() => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : ""), ce = v(() => su(e.optionValue, "value")), re = v(() => su(e.optionLabel, "label")), Q = v(() => su(e.optionDisable, "disable")), ie = v(() => _.value.map(ce.value)), we = v(() => {
    const J = { onInput: de, onChange: N, onKeydown: it, onKeyup: Re, onKeypress: Xe, onFocus: Ce, onClick(Ae) {
      g === true && xt(Ae);
    } };
    return J.onCompositionstart = J.onCompositionupdate = J.onCompositionend = N, J;
  });
  ge(_, (J) => {
    m = J, e.useInput === true && e.fillInput === true && e.multiple !== true && X.innerLoading.value !== true && (o.value !== true && a.value !== true || me.value !== true) && (w !== true && dn(), (o.value === true || a.value === true) && Be(""));
  }, { immediate: true }), ge(() => e.fillInput, dn), ge(a, Si), ge(q, Vg);
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
    Te(J), X.focus();
  }
  function He(J, Ae) {
    const $e = ke(J);
    if (e.multiple !== true) {
      e.fillInput === true && Fe(re.value(J), true, true), n("update:modelValue", $e);
      return;
    }
    if (_.value.length === 0) {
      n("add", { index: 0, value: $e }), n("update:modelValue", e.multiple === true ? [$e] : $e);
      return;
    }
    if (Ae === true && _e2(J) === true || e.maxValues !== void 0 && e.modelValue.length >= e.maxValues) return;
    const tt = e.modelValue.slice();
    n("add", { index: tt.length, value: $e }), tt.push($e), n("update:modelValue", tt);
  }
  function De(J, Ae) {
    var _a3;
    if (X.editable.value !== true || J === void 0 || Q.value(J) === true) return;
    const $e = ce.value(J);
    if (e.multiple !== true) {
      Ae !== true && (Fe(e.fillInput === true ? re.value(J) : "", true, true), rt()), (_a3 = P.value) == null ? void 0 : _a3.focus(), (_.value.length === 0 || qn(ce.value(_.value[0]), $e) !== true) && n("update:modelValue", e.emitValue === true ? $e : J);
      return;
    }
    if ((g !== true || c.value === true) && X.focus(), Ce(), _.value.length === 0) {
      const vt = e.emitValue === true ? $e : J;
      n("add", { index: 0, value: vt }), n("update:modelValue", e.multiple === true ? [vt] : vt);
      return;
    }
    const tt = e.modelValue.slice(), gt = ie.value.findIndex((vt) => qn(vt, $e));
    if (gt !== -1) n("remove", { index: gt, value: tt.splice(gt, 1)[0] });
    else {
      if (e.maxValues !== void 0 && tt.length >= e.maxValues) return;
      const vt = e.emitValue === true ? $e : J;
      n("add", { index: tt.length, value: vt }), tt.push(vt);
    }
    n("update:modelValue", tt);
  }
  function ue(J) {
    if (l.platform.is.desktop !== true) return;
    const Ae = J !== -1 && J < q.value ? J : -1;
    i.value !== Ae && (i.value = Ae);
  }
  function pe(J = 1, Ae) {
    if (a.value === true) {
      let $e = i.value;
      do
        $e = Ro($e + J, -1, q.value - 1);
      while ($e !== -1 && $e !== i.value && Q.value(e.options[$e]) === true);
      i.value !== $e && (ue($e), ae($e), Ae !== true && e.useInput === true && e.fillInput === true && Se($e >= 0 ? re.value(e.options[$e]) : k, true));
    }
  }
  function oe(J, Ae) {
    const $e = (tt) => qn(ce.value(tt), J);
    return e.options.find($e) || Ae.find($e) || J;
  }
  function _e2(J) {
    const Ae = ce.value(J);
    return ie.value.find(($e) => qn($e, Ae)) !== void 0;
  }
  function Ce(J) {
    e.useInput === true && P.value !== null && (J === void 0 || P.value === J.target && J.target.value === V.value) && P.value.select();
  }
  function Oe(J) {
    yn(J, 27) === true && a.value === true && (xt(J), rt(), dn()), n("keyup", J);
  }
  function Re(J) {
    const { value: Ae } = J.target;
    if (J.keyCode !== void 0) {
      Oe(J);
      return;
    }
    if (J.target.value = "", f !== null && (clearTimeout(f), f = null), h !== null && (clearTimeout(h), h = null), dn(), typeof Ae == "string" && Ae.length !== 0) {
      const $e = Ae.toLocaleLowerCase(), tt = (vt) => {
        const Nt = e.options.find((Pt) => String(vt.value(Pt)).toLocaleLowerCase() === $e);
        return Nt === void 0 ? false : (_.value.indexOf(Nt) === -1 ? De(Nt) : rt(), true);
      }, gt = (vt) => {
        tt(ce) !== true && vt !== true && tt(re) !== true && Be(Ae, true, () => gt(true));
      };
      gt();
    } else X.clearValue(J);
  }
  function Xe(J) {
    n("keypress", J);
  }
  function it(J) {
    if (n("keydown", J), Zl(J) === true) return;
    const Ae = u.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0), $e = J.shiftKey !== true && e.disableTabSelection !== true && e.multiple !== true && (i.value !== -1 || Ae === true);
    if (J.keyCode === 27) {
      Dt(J);
      return;
    }
    if (J.keyCode === 9 && $e === false) {
      Le();
      return;
    }
    if (J.target === void 0 || J.target.id !== X.targetUid.value || X.editable.value !== true) return;
    if (J.keyCode === 40 && X.innerLoading.value !== true && a.value === false) {
      je(J), ze();
      return;
    }
    if (J.keyCode === 8 && (e.useChips === true || e.clearable === true) && e.hideSelected !== true && u.value.length === 0) {
      e.multiple === true && Array.isArray(e.modelValue) === true ? Te(e.modelValue.length - 1) : e.multiple !== true && e.modelValue !== null && n("update:modelValue", null);
      return;
    }
    (J.keyCode === 35 || J.keyCode === 36) && (typeof u.value != "string" || u.value.length === 0) && (je(J), i.value = -1, pe(J.keyCode === 36 ? 1 : -1, e.multiple)), (J.keyCode === 33 || J.keyCode === 34) && j.value !== void 0 && (je(J), i.value = Math.max(-1, Math.min(q.value, i.value + (J.keyCode === 33 ? -1 : 1) * j.value.view)), pe(J.keyCode === 33 ? 1 : -1, e.multiple)), (J.keyCode === 38 || J.keyCode === 40) && (je(J), pe(J.keyCode === 38 ? -1 : 1, e.multiple));
    const tt = q.value;
    if ((p === void 0 || b < Date.now()) && (p = ""), tt > 0 && e.useInput !== true && J.key !== void 0 && J.key.length === 1 && J.altKey === false && J.ctrlKey === false && J.metaKey === false && (J.keyCode !== 32 || p.length !== 0)) {
      a.value !== true && ze(J);
      const gt = J.key.toLocaleLowerCase(), vt = p.length === 1 && p[0] === gt;
      b = Date.now() + 1500, vt === false && (je(J), p += gt);
      const Nt = new RegExp("^" + p.split("").map((Ci) => Z1.indexOf(Ci) !== -1 ? "\\" + Ci : Ci).join(".*"), "i");
      let Pt = i.value;
      if (vt === true || Pt < 0 || Nt.test(re.value(e.options[Pt])) !== true) do
        Pt = Ro(Pt + 1, -1, tt - 1);
      while (Pt !== i.value && (Q.value(e.options[Pt]) === true || Nt.test(re.value(e.options[Pt])) !== true));
      i.value !== Pt && Qe(() => {
        ue(Pt), ae(Pt), Pt >= 0 && e.useInput === true && e.fillInput === true && Se(re.value(e.options[Pt]), true);
      });
      return;
    }
    if (!(J.keyCode !== 13 && (J.keyCode !== 32 || e.useInput === true || p !== "") && (J.keyCode !== 9 || $e === false))) {
      if (J.keyCode !== 9 && je(J), i.value !== -1 && i.value < tt) {
        De(e.options[i.value]);
        return;
      }
      if (Ae === true) {
        const gt = (vt, Nt) => {
          var _a3;
          if (Nt) {
            if (Kd(Nt) !== true) return;
          } else Nt = e.newValueMode;
          if (Fe("", e.multiple !== true, true), vt == null) return;
          (Nt === "toggle" ? De : He)(vt, Nt === "add-unique"), e.multiple !== true && ((_a3 = P.value) == null ? void 0 : _a3.focus(), rt());
        };
        if (e.onNewValue !== void 0 ? n("newValue", u.value, gt) : gt(u.value), e.multiple !== true) return;
      }
      a.value === true ? Le() : X.innerLoading.value !== true && ze();
    }
  }
  function kt() {
    return g === true ? B.value : O.value !== null && O.value.contentEl !== null ? O.value.contentEl : void 0;
  }
  function Ut() {
    return kt();
  }
  function nl() {
    return e.hideSelected === true ? [] : t["selected-item"] !== void 0 ? le.value.map((J) => t["selected-item"](J)).slice() : t.selected !== void 0 ? [].concat(t.selected()) : e.useChips === true ? le.value.map((J, Ae) => d(Xm, { key: "option-" + Ae, removable: X.editable.value === true && Q.value(J.opt) !== true, dense: true, textColor: e.color, tabindex: M.value, onRemove() {
      J.removeAtIndex(Ae);
    } }, () => d("span", { class: "ellipsis", [J.html === true ? "innerHTML" : "textContent"]: re.value(J.opt) }))) : [d("span", { class: "ellipsis", [S.value === true ? "innerHTML" : "textContent"]: ne.value })];
  }
  function an() {
    if (Y.value === true) return t["no-option"] !== void 0 ? t["no-option"]({ inputValue: u.value }) : void 0;
    const J = t.option !== void 0 ? t.option : ($e) => d(qr, { key: $e.index, ...$e.itemProps }, () => d(hn, () => d(Yu, () => d("span", { [$e.html === true ? "innerHTML" : "textContent"]: $e.label }))));
    let Ae = U("div", E.value.map(J));
    return t["before-options"] !== void 0 && (Ae = t["before-options"]().concat(Ae)), qt(t["after-options"], Ae);
  }
  function zn(J, Ae) {
    const $e = Ae === true ? { ...I.value, ...X.splitAttrs.attributes.value } : void 0, tt = { ref: Ae === true ? P : void 0, key: "i_t", class: $.value, style: e.inputStyle, value: u.value !== void 0 ? u.value : "", type: "search", ...$e, id: Ae === true ? X.targetUid.value : void 0, maxlength: e.maxlength, autocomplete: e.autocomplete, "data-autofocus": J === true || e.autofocus === true || void 0, disabled: e.disable === true, readonly: e.readonly === true, ...we.value };
    return J !== true && g === true && (Array.isArray(tt.class) === true ? tt.class = [...tt.class, "no-pointer-events"] : tt.class += " no-pointer-events"), d("input", tt);
  }
  function de(J) {
    f !== null && (clearTimeout(f), f = null), h !== null && (clearTimeout(h), h = null), !(J && J.target && J.target.qComposing === true) && (Se(J.target.value || ""), w = true, k = u.value, X.focused.value !== true && (g !== true || c.value === true) && X.focus(), e.onFilter !== void 0 && (f = setTimeout(() => {
      f = null, Be(u.value);
    }, e.inputDebounce)));
  }
  function Se(J, Ae) {
    u.value !== J && (u.value = J, Ae === true || e.inputDebounce === 0 || e.inputDebounce === "0" ? n("inputValue", J) : h = setTimeout(() => {
      h = null, n("inputValue", J);
    }, e.inputDebounce));
  }
  function Fe(J, Ae, $e) {
    w = $e !== true, e.useInput === true && (Se(J, true), (Ae === true || $e !== true) && (k = J), Ae !== true && Be(J));
  }
  function Be(J, Ae, $e) {
    if (e.onFilter === void 0 || Ae !== true && X.focused.value !== true) return;
    X.innerLoading.value === true ? n("filterAbort") : (X.innerLoading.value = true, s.value = true), J !== "" && e.multiple !== true && _.value.length !== 0 && w !== true && J === re.value(_.value[0]) && (J = "");
    const tt = setTimeout(() => {
      a.value === true && (a.value = false);
    }, 10);
    x !== null && clearTimeout(x), x = tt, n("filter", J, (gt, vt) => {
      (Ae === true || X.focused.value === true) && x === tt && (clearTimeout(x), typeof gt == "function" && gt(), s.value = false, Qe(() => {
        X.innerLoading.value = false, X.editable.value === true && (Ae === true ? a.value === true && rt() : a.value === true ? Si(true) : a.value = true), typeof vt == "function" && Qe(() => {
          vt(r);
        }), typeof $e == "function" && Qe(() => {
          $e(r);
        });
      }));
    }, () => {
      X.focused.value === true && x === tt && (clearTimeout(x), X.innerLoading.value = false, s.value = false), a.value === true && (a.value = false);
    });
  }
  function Ue() {
    return d(hi, { ref: O, class: A.value, style: e.popupContentStyle, modelValue: a.value, fit: e.menuShrink !== true, cover: e.optionsCover === true && Y.value !== true && e.useInput !== true, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, dark: F.value, noParentEvent: true, noRefocus: true, noFocus: true, noRouteDismiss: e.popupNoRouteDismiss, square: se.value, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, separateClosePopup: true, ...te.value, onScrollPassive: Z, onBeforeShow: ac, onBeforeHide: pt, onShow: ht }, an);
  }
  function pt(J) {
    oc(J), Le();
  }
  function ht() {
    ye();
  }
  function z(J) {
    var _a3;
    xt(J), (_a3 = P.value) == null ? void 0 : _a3.focus(), c.value = true, window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
  }
  function G(J) {
    xt(J), Qe(() => {
      c.value = false;
    });
  }
  function fe() {
    const J = [d(x1, { class: `col-auto ${X.fieldClass.value}`, ...D.value, for: X.targetUid.value, dark: F.value, square: true, loading: s.value, itemAligned: false, filled: true, stackLabel: u.value.length !== 0, ...X.splitAttrs.listeners.value, onFocus: z, onBlur: G }, { ...t, rawControl: () => X.getControl(true), before: void 0, after: void 0 })];
    return a.value === true && J.push(d("div", { ref: B, class: A.value + " scroll", style: e.popupContentStyle, ...te.value, onClick: Dt, onScrollPassive: Z }, an())), d(bi, { ref: H, modelValue: o.value, position: e.useInput === true ? "top" : void 0, transitionShow: y, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, noRouteDismiss: e.popupNoRouteDismiss, onBeforeShow: ac, onBeforeHide: qe, onHide: Ee, onShow: Ze }, () => d("div", { class: "q-select__dialog" + (F.value === true ? " q-select__dialog--dark q-dark" : "") + (c.value === true ? " q-select__dialog--focused" : "") }, J));
  }
  function qe(J) {
    oc(J), H.value !== null && H.value.__updateRefocusTarget(X.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")), X.focused.value = false;
  }
  function Ee(J) {
    rt(), X.focused.value === false && n("blur", J), dn();
  }
  function Ze() {
    const J = document.activeElement;
    (J === null || J.id !== X.targetUid.value) && P.value !== null && P.value !== J && P.value.focus(), ye();
  }
  function Le() {
    o.value !== true && (i.value = -1, a.value === true && (a.value = false), X.focused.value === false && (x !== null && (clearTimeout(x), x = null), X.innerLoading.value === true && (n("filterAbort"), X.innerLoading.value = false, s.value = false)));
  }
  function ze(J) {
    X.editable.value === true && (g === true ? (X.onControlFocusin(J), o.value = true, Qe(() => {
      X.focus();
    })) : X.focus(), e.onFilter !== void 0 ? Be(u.value) : (Y.value !== true || t["no-option"] !== void 0) && (a.value = true));
  }
  function rt() {
    o.value = false, Le();
  }
  function dn() {
    e.useInput === true && Fe(e.multiple !== true && e.fillInput === true && _.value.length !== 0 && re.value(_.value[0]) || "", true, true);
  }
  function Si(J) {
    let Ae = -1;
    if (J === true) {
      if (_.value.length !== 0) {
        const $e = ce.value(_.value[0]);
        Ae = e.options.findIndex((tt) => qn(ce.value(tt), $e));
      }
      W(Ae);
    }
    ue(Ae);
  }
  function Vg(J, Ae) {
    a.value === true && X.innerLoading.value === false && (W(-1, true), Qe(() => {
      a.value === true && X.innerLoading.value === false && (J > Ae ? W() : Si(true));
    }));
  }
  function rc() {
    o.value === false && O.value !== null && O.value.updatePosition();
  }
  function ac(J) {
    J !== void 0 && xt(J), n("popupShow", J), X.hasPopupOpen = true, X.onControlFocusin(J);
  }
  function oc(J) {
    J !== void 0 && xt(J), n("popupHide", J), X.hasPopupOpen = false, X.onControlFocusout(J);
  }
  function ic() {
    g = l.platform.is.mobile !== true && e.behavior !== "dialog" ? false : e.behavior !== "menu" && (e.useInput === true ? t["no-option"] !== void 0 || e.onFilter !== void 0 || Y.value === false : true), y = l.platform.is.ios === true && g === true && e.useInput === true ? "fade" : e.transitionShow;
  }
  return Rr(ic), ni(rc), ic(), We(() => {
    f !== null && clearTimeout(f), h !== null && clearTimeout(h);
  }), Object.assign(r, { showPopup: ze, hidePopup: rt, removeAtIndex: Te, add: He, toggleOption: De, getOptionIndex: () => i.value, setOptionIndex: ue, moveOptionSelection: pe, filter: Be, updateMenuPosition: rc, updateInputValue: Fe, isOptionSelected: _e2, getEmittingOptionValue: ke, isOptionDisabled: (...J) => Q.value.apply(null, J) === true, getOptionValue: (...J) => ce.value.apply(null, J), getOptionLabel: (...J) => re.value.apply(null, J) }), Object.assign(X, { innerValue: _, fieldClass: v(() => `q-select q-field--auto-height q-select--with${e.useInput !== true ? "out" : ""}-input q-select--with${e.useChips !== true ? "out" : ""}-chips q-select--${e.multiple === true ? "multiple" : "single"}`), inputRef: C, targetRef: P, hasValue: me, showPopup: ze, floatingLabel: v(() => e.hideSelected !== true && me.value === true || typeof u.value == "number" || u.value.length !== 0 || Xl(e.displayValue)), getControlChild: () => {
    if (X.editable.value !== false && (o.value === true || Y.value !== true || t["no-option"] !== void 0)) return g === true ? fe() : Ue();
    X.hasPopupOpen === true && (X.hasPopupOpen = false);
  }, controlEvents: { onFocusin(J) {
    X.onControlFocusin(J);
  }, onFocusout(J) {
    X.onControlFocusout(J, () => {
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
    const Ae = nl(), $e = J === true || o.value !== true || g !== true;
    if (e.useInput === true) Ae.push(zn(J, $e));
    else if (X.editable.value === true) {
      const gt = $e === true ? I.value : void 0;
      Ae.push(d("input", { ref: $e === true ? P : void 0, key: "d_t", class: "q-select__focus-target", id: $e === true ? X.targetUid.value : void 0, value: ne.value, readonly: true, "data-autofocus": J === true || e.autofocus === true || void 0, ...gt, onKeydown: it, onKeyup: Oe, onKeypress: Xe })), $e === true && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && Ae.push(d("input", { class: "q-select__autocomplete-input", autocomplete: e.autocomplete, tabindex: -1, onKeyup: Re }));
    }
    if (L.value !== void 0 && e.disable !== true && ie.value.length !== 0) {
      const gt = ie.value.map((vt) => d("option", { value: vt, selected: true }));
      Ae.push(d("select", { class: "hidden", name: L.value, multiple: e.multiple }, gt));
    }
    const tt = e.useInput === true || $e !== true ? void 0 : X.splitAttrs.attributes.value;
    return d("div", { class: "q-field__native row items-center", ...tt, ...X.splitAttrs.listeners.value }, Ae);
  }, getInnerAppend: () => e.loading !== true && s.value !== true && e.hideDropdownIcon !== true ? [d(et, { class: "q-select__dropdown-icon" + (a.value === true ? " rotate-180" : ""), name: ee.value })] : null }), wi(X);
} }), t_ = ["text", "rect", "circle", "QBtn", "QBadge", "QChip", "QToolbar", "QCheckbox", "QRadio", "QToggle", "QSlider", "QRange", "QInput", "QAvatar"], n_ = ["wave", "pulse", "pulse-x", "pulse-y", "fade", "blink", "none"];
he({ name: "QSkeleton", props: { ...nt, tag: { type: String, default: "div" }, type: { type: String, validator: (e) => t_.includes(e), default: "rect" }, animation: { type: String, validator: (e) => n_.includes(e), default: "wave" }, animationSpeed: { type: [String, Number], default: 1500 }, square: Boolean, bordered: Boolean, size: String, width: String, height: String }, setup(e, { slots: t }) {
  const n = xe(), r = lt(e, n.proxy.$q), l = v(() => {
    const o = e.size !== void 0 ? [e.size, e.size] : [e.width, e.height];
    return { "--q-skeleton-speed": `${e.animationSpeed}ms`, width: o[0], height: o[1] };
  }), a = v(() => `q-skeleton q-skeleton--${r.value === true ? "dark" : "light"} q-skeleton--type-${e.type}` + (e.animation !== "none" ? ` q-skeleton--anim q-skeleton--anim-${e.animation}` : "") + (e.square === true ? " q-skeleton--square" : "") + (e.bordered === true ? " q-skeleton--bordered" : ""));
  return () => d(e.tag, { class: a.value, style: l.value }, Pe(t.default));
} });
var Wd = [["left", "center", "start", "width"], ["right", "center", "end", "width"], ["top", "start", "center", "height"], ["bottom", "end", "center", "height"]];
he({ name: "QSlideItem", props: { ...nt, leftColor: String, rightColor: String, topColor: String, bottomColor: String, onSlide: Function }, emits: ["action", "top", "right", "bottom", "left"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = lt(e, l), { getCache: o } = Oa(), i = K(null);
  let u = null, c = {}, s = {}, f = {};
  const h = v(() => l.lang.rtl === true ? { left: "right", right: "left" } : { left: "left", right: "right" }), m = v(() => "q-slide-item q-item-type overflow-hidden" + (a.value === true ? " q-slide-item--dark q-dark" : ""));
  function g() {
    i.value.style.transform = "translate(0,0)";
  }
  function w(k, y, p) {
    e.onSlide !== void 0 && n("slide", { side: k, ratio: y, isReset: p });
  }
  function x(k) {
    const y = i.value;
    if (k.isFirst) c = { dir: null, size: { left: 0, right: 0, top: 0, bottom: 0 }, scale: 0 }, y.classList.add("no-transition"), Wd.forEach((P) => {
      if (t[P[0]] !== void 0) {
        const O = f[P[0]];
        O.style.transform = "scale(1)", c.size[P[0]] = O.getBoundingClientRect()[P[3]];
      }
    }), c.axis = k.direction === "up" || k.direction === "down" ? "Y" : "X";
    else if (k.isFinal) {
      y.classList.remove("no-transition"), c.scale === 1 ? (y.style.transform = `translate${c.axis}(${c.dir * 100}%)`, u !== null && clearTimeout(u), u = setTimeout(() => {
        u = null, n(c.showing, { reset: g }), n("action", { side: c.showing, reset: g });
      }, 230)) : (y.style.transform = "translate(0,0)", w(c.showing, 0, true));
      return;
    } else k.direction = c.axis === "X" ? k.offset.x < 0 ? "left" : "right" : k.offset.y < 0 ? "up" : "down";
    if (t.left === void 0 && k.direction === h.value.right || t.right === void 0 && k.direction === h.value.left || t.top === void 0 && k.direction === "down" || t.bottom === void 0 && k.direction === "up") {
      y.style.transform = "translate(0,0)";
      return;
    }
    let p, b, C;
    c.axis === "X" ? (b = k.direction === "left" ? -1 : 1, p = b === 1 ? h.value.left : h.value.right, C = k.distance.x) : (b = k.direction === "up" ? -2 : 2, p = b === 2 ? "top" : "bottom", C = k.distance.y), !(c.dir !== null && Math.abs(b) !== Math.abs(c.dir)) && (c.dir !== b && (["left", "right", "top", "bottom"].forEach((P) => {
      s[P] && (s[P].style.visibility = p === P ? "visible" : "hidden");
    }), c.showing = p, c.dir = b), c.scale = Math.max(0, Math.min(1, (C - 40) / c.size[p])), y.style.transform = `translate${c.axis}(${C * b / Math.abs(b)}px)`, f[p].style.transform = `scale(${c.scale})`, w(p, c.scale, false));
  }
  return Rr(() => {
    s = {}, f = {};
  }), We(() => {
    u !== null && clearTimeout(u);
  }), Object.assign(r, { reset: g }), () => {
    const k = [], y = { left: t[h.value.right] !== void 0, right: t[h.value.left] !== void 0, up: t.bottom !== void 0, down: t.top !== void 0 }, p = Object.keys(y).filter((C) => y[C] === true);
    Wd.forEach((C) => {
      const P = C[0];
      t[P] !== void 0 && k.push(d("div", { key: P, ref: (O) => {
        s[P] = O;
      }, class: `q-slide-item__${P} absolute-full row no-wrap items-${C[1]} justify-${C[2]}` + (e[P + "Color"] !== void 0 ? ` bg-${e[P + "Color"]}` : "") }, [d("div", { ref: (O) => {
        f[P] = O;
      } }, t[P]())]));
    });
    const b = d("div", { key: `${p.length === 0 ? "only-" : ""} content`, ref: i, class: "q-slide-item__content" }, Pe(t.default));
    return p.length === 0 ? k.push(b) : k.push(cn(b, o("dir#" + p.join(""), () => {
      const C = { prevent: true, stop: true, mouse: true };
      return p.forEach((P) => {
        C[P] = true;
      }), [[bn, x, void 0, C]];
    }))), d("div", { class: m.value }, k);
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
  const { proxy: { $q: r } } = xe(), l = lt(e, r), a = K(null), o = { before: K(null), after: K(null) }, i = v(() => `q-splitter no-wrap ${e.horizontal === true ? "q-splitter--horizontal column" : "q-splitter--vertical row"} q-splitter--${e.disable === true ? "disabled" : "workable"}` + (l.value === true ? " q-splitter--dark" : "")), u = v(() => e.horizontal === true ? "height" : "width"), c = v(() => e.reverse !== true ? "before" : "after"), s = v(() => e.limits !== void 0 ? e.limits : e.unit === "%" ? [10, 90] : [50, 1 / 0]);
  function f(C) {
    return (e.unit === "%" ? C : Math.round(C)) + e.unit;
  }
  const h = v(() => ({ [c.value]: { [u.value]: f(e.modelValue) } }));
  let m, g, w, x, k;
  function y(C) {
    if (C.isFirst === true) {
      const O = a.value.getBoundingClientRect()[u.value];
      m = e.horizontal === true ? "up" : "left", g = e.unit === "%" ? 100 : O, w = Math.min(g, s.value[1], Math.max(s.value[0], e.modelValue)), x = (e.reverse !== true ? 1 : -1) * (e.horizontal === true ? 1 : r.lang.rtl === true ? -1 : 1) * (e.unit === "%" ? O === 0 ? 0 : 100 / O : 1), a.value.classList.add("q-splitter--active");
      return;
    }
    if (C.isFinal === true) {
      k !== e.modelValue && n("update:modelValue", k), a.value.classList.remove("q-splitter--active");
      return;
    }
    const P = w + x * (C.direction === m ? -1 : 1) * C.distance[e.horizontal === true ? "y" : "x"];
    k = Math.min(g, s.value[1], Math.max(s.value[0], P)), o[c.value].value.style[u.value] = f(k), e.emitImmediately === true && e.modelValue !== k && n("update:modelValue", k);
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
    const C = [d("div", { ref: o.before, class: ["q-splitter__panel q-splitter__before" + (e.reverse === true ? " col" : ""), e.beforeClass], style: h.value.before }, Pe(t.before)), d("div", { class: ["q-splitter__separator", e.separatorClass], style: e.separatorStyle, "aria-disabled": e.disable === true ? "true" : void 0 }, [_n("div", { class: "q-splitter__separator-area absolute-full" }, Pe(t.separator), "sep", e.disable !== true, () => p.value)]), d("div", { ref: o.after, class: ["q-splitter__panel q-splitter__after" + (e.reverse === true ? "" : " col"), e.afterClass], style: h.value.after }, Pe(t.after))];
    return d("div", { class: i.value, ref: a }, qt(t.default, C));
  };
} });
var Qh = he({ name: "StepHeader", props: { stepper: {}, step: {}, goToPanel: Function }, setup(e, { attrs: t }) {
  const { proxy: { $q: n } } = xe(), r = K(null), l = v(() => e.stepper.modelValue === e.step.name), a = v(() => {
    const x = e.step.disable;
    return x === true || x === "";
  }), o = v(() => {
    const x = e.step.error;
    return x === true || x === "";
  }), i = v(() => {
    const x = e.step.done;
    return a.value === false && (x === true || x === "");
  }), u = v(() => {
    const x = e.step.headerNav, k = x === true || x === "" || x === void 0;
    return a.value === false && e.stepper.headerNav && k;
  }), c = v(() => e.step.prefix && (l.value === false || e.stepper.activeIcon === "none") && (o.value === false || e.stepper.errorIcon === "none") && (i.value === false || e.stepper.doneIcon === "none")), s = v(() => {
    const x = e.step.icon || e.stepper.inactiveIcon;
    if (l.value === true) {
      const k = e.step.activeIcon || e.stepper.activeIcon;
      return k === "none" ? x : k || n.iconSet.stepper.active;
    }
    if (o.value === true) {
      const k = e.step.errorIcon || e.stepper.errorIcon;
      return k === "none" ? x : k || n.iconSet.stepper.error;
    }
    if (a.value === false && i.value === true) {
      const k = e.step.doneIcon || e.stepper.doneIcon;
      return k === "none" ? x : k || n.iconSet.stepper.done;
    }
    return x;
  }), f = v(() => {
    const x = o.value === true ? e.step.errorColor || e.stepper.errorColor : void 0;
    if (l.value === true) {
      const k = e.step.activeColor || e.stepper.activeColor || e.step.color;
      return k !== void 0 ? k : x;
    }
    return x !== void 0 ? x : a.value === false && i.value === true ? e.step.doneColor || e.stepper.doneColor || e.step.color || e.stepper.inactiveColor : e.step.color || e.stepper.inactiveColor;
  }), h = v(() => "q-stepper__tab col-grow flex items-center no-wrap relative-position" + (f.value !== void 0 ? ` text-${f.value}` : "") + (o.value === true ? " q-stepper__tab--error q-stepper__tab--error-with-" + (c.value === true ? "prefix" : "icon") : "") + (l.value === true ? " q-stepper__tab--active" : "") + (i.value === true ? " q-stepper__tab--done" : "") + (u.value === true ? " q-stepper__tab--navigation q-focusable q-hoverable" : "") + (a.value === true ? " q-stepper__tab--disabled" : "")), m = v(() => e.stepper.headerNav !== true ? false : u.value);
  function g() {
    var _a3;
    (_a3 = r.value) == null ? void 0 : _a3.focus(), l.value === false && e.goToPanel(e.step.name);
  }
  function w(x) {
    x.keyCode === 13 && l.value === false && e.goToPanel(e.step.name);
  }
  return () => {
    const x = { class: h.value };
    u.value === true && (x.onClick = g, x.onKeyup = w, Object.assign(x, a.value === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: t.tabindex || 0 }));
    const k = [d("div", { class: "q-focus-helper", tabindex: -1, ref: r }), d("div", { class: "q-stepper__dot row flex-center q-stepper__line relative-position" }, [d("span", { class: "row flex-center" }, [c.value === true ? e.step.prefix : d(et, { name: s.value })])])];
    if (e.step.title !== void 0 && e.step.title !== null) {
      const y = [d("div", { class: "q-stepper__title" }, e.step.title)];
      e.step.caption !== void 0 && e.step.caption !== null && y.push(d("div", { class: "q-stepper__caption" }, e.step.caption)), k.push(d("div", { class: "q-stepper__label q-stepper__line relative-position" }, y));
    }
    return cn(d("div", x, k), [[fi, m.value]]);
  };
} });
function Kh(e) {
  return d("div", { class: "q-stepper__step-content" }, [d("div", { class: "q-stepper__step-inner" }, Pe(e.default))]);
}
var Yd = { setup(e, { slots: t }) {
  return () => Kh(t);
} };
he({ name: "QStep", props: { ...Vs, icon: String, color: String, title: { type: String, required: true }, caption: String, prefix: [String, Number], doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String, headerNav: { type: Boolean, default: true }, done: Boolean, error: Boolean, onScroll: [Function, Array] }, setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = Mt(fm, ot);
  if (l === ot) return console.error("QStep needs to be a child of QStepper"), ot;
  const { getCache: a } = Oa(), o = K(null), i = v(() => l.value.modelValue === e.name), u = v(() => r.platform.is.ios !== true && r.platform.is.chrome === true || i.value !== true || l.value.vertical !== true ? {} : { onScroll(f) {
    const { target: h } = f;
    h.scrollTop > 0 && (h.scrollTop = 0), e.onScroll !== void 0 && n("scroll", f);
  } }), c = v(() => typeof e.name == "string" || typeof e.name == "number" ? e.name : String(e.name));
  function s() {
    const f = l.value.vertical;
    return f === true && l.value.keepAlive === true ? d(xv, l.value.keepAliveProps.value, i.value === true ? [d(l.value.needsUniqueKeepAliveWrapper.value === true ? a(c.value, () => ({ ...Yd, name: c.value })) : Yd, { key: c.value }, t.default)] : void 0) : f !== true || i.value === true ? Kh(t) : void 0;
  }
  return () => d("div", { ref: o, class: "q-stepper__step", role: "tabpanel", ...u.value }, l.value.vertical === true ? [d(Qh, { stepper: l.value, step: e, goToPanel: l.value.goToPanel }), l.value.animated === true ? d(Ys, s) : s()] : [s()]);
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
he({ name: "QStepper", props: { ...nt, ...Ds, flat: Boolean, bordered: Boolean, alternativeLabels: Boolean, headerNav: Boolean, contracted: Boolean, headerClass: String, inactiveColor: String, inactiveIcon: String, doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String }, emits: Is, setup(e, { slots: t }) {
  const n = xe(), r = lt(e, n.proxy.$q), { updatePanelsList: l, isValidPanelName: a, updatePanelIndex: o, getPanelContent: i, getPanels: u, panelDirectives: c, goToPanel: s, keepAliveProps: f, needsUniqueKeepAliveWrapper: h } = zs();
  gn(fm, v(() => ({ goToPanel: s, keepAliveProps: f, needsUniqueKeepAliveWrapper: h, ...e })));
  const m = v(() => `q-stepper q-stepper--${e.vertical === true ? "vertical" : "horizontal"}` + (e.flat === true ? " q-stepper--flat" : "") + (e.bordered === true ? " q-stepper--bordered" : "") + (r.value === true ? " q-stepper--dark q-dark" : "")), g = v(() => `q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels === true ? "alternative" : "standard"}-labels` + (e.flat === false || e.bordered === true ? " q-stepper__header--border" : "") + (e.contracted === true ? " q-stepper__header--contracted" : "") + (e.headerClass !== void 0 ? ` ${e.headerClass}` : ""));
  function w() {
    const x = Pe(t.message, []);
    if (e.vertical === true) {
      a(e.modelValue) && o();
      const k = d("div", { class: "q-stepper__content" }, Pe(t.default));
      return x === void 0 ? [k] : x.concat(k);
    }
    return [d("div", { class: g.value }, u().map((k) => {
      const y = T_(k.props);
      return d(Qh, { key: y.name, stepper: e, step: y, goToPanel: s });
    })), x, _n("div", { class: "q-stepper__content q-panel-parent" }, i(), "cont", e.swipeable, () => c.value)];
  }
  return () => (l(t), d("div", { class: m.value }, qt(t.navigation, w())));
} });
he({ name: "QStepperNavigation", setup(e, { slots: t }) {
  return () => d("div", { class: "q-stepper__nav" }, Pe(t.default));
} });
var q_ = he({ name: "QTh", props: { props: Object, autoWidth: Boolean }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const r = xe(), { proxy: { $q: l } } = r, a = (o) => {
    n("click", o);
  };
  return () => {
    if (e.props === void 0) return d("th", { class: e.autoWidth === true ? "q-table--col-auto-width" : "", onClick: a }, Pe(t.default));
    let o, i;
    const u = r.vnode.key;
    if (u) {
      if (o = e.props.colsMap[u], o === void 0) return;
    } else o = e.props.col;
    if (o.sortable === true) {
      const s = o.align === "right" ? "unshift" : "push";
      i = Pa(t.default, []), i[s](d(et, { class: o.__iconClass, name: l.iconSet.table.arrowUp }));
    } else i = Pe(t.default);
    const c = { class: o.__thClass + (e.autoWidth === true ? " q-table--col-auto-width" : ""), style: o.headerStyle, onClick: (s) => {
      o.sortable === true && e.props.sort(o), a(s);
    } };
    return d("th", c, i);
  };
} });
function Wh(e, t) {
  return d("div", e, [d("table", { class: "q-table" }, t)]);
}
var M_ = { list: Vh, table: D1 }, E_ = ["list", "table", "__qtable"], R_ = he({ name: "QVirtualScroll", props: { ...Zu, type: { type: String, default: "list", validator: (e) => E_.includes(e) }, items: { type: Array, default: () => [] }, itemsFn: Function, itemsSize: Number, scrollTarget: er }, setup(e, { slots: t, attrs: n }) {
  let r;
  const l = K(null), a = v(() => e.itemsSize >= 0 && e.itemsFn !== void 0 ? parseInt(e.itemsSize, 10) : Array.isArray(e.items) ? e.items.length : 0), { virtualScrollSliceRange: o, localResetVirtualScroll: i, padVirtualScroll: u, onVirtualScrollEvt: c } = Uh({ virtualScrollLength: a, getVirtualScrollTarget: g, getVirtualScrollEl: m }), s = v(() => {
    if (a.value === 0) return [];
    const y = (p, b) => ({ index: o.value.from + b, item: p });
    return e.itemsFn === void 0 ? e.items.slice(o.value.from, o.value.to).map(y) : e.itemsFn(o.value.from, o.value.to - o.value.from).map(y);
  }), f = v(() => "q-virtual-scroll q-virtual-scroll" + (e.virtualScrollHorizontal === true ? "--horizontal" : "--vertical") + (e.scrollTarget !== void 0 ? "" : " scroll")), h = v(() => e.scrollTarget !== void 0 ? {} : { tabindex: 0 });
  ge(a, () => {
    i();
  }), ge(() => e.scrollTarget, () => {
    x(), w();
  });
  function m() {
    return l.value.$el || l.value;
  }
  function g() {
    return r;
  }
  function w() {
    r = In(m(), e.scrollTarget), r.addEventListener("scroll", c, ft.passive);
  }
  function x() {
    r !== void 0 && (r.removeEventListener("scroll", c, ft.passive), r = void 0);
  }
  function k() {
    let y = u(e.type === "list" ? "div" : "tbody", s.value.map(t.default));
    return t.before !== void 0 && (y = t.before().concat(y)), qt(t.after, y);
  }
  return ti(() => {
    i();
  }), ct(() => {
    w();
  }), kl(() => {
    w();
  }), Dn(() => {
    x();
  }), We(() => {
    x();
  }), () => {
    if (t.default === void 0) {
      console.error("QVirtualScroll: default scoped slot is required for rendering");
      return;
    }
    return e.type === "__qtable" ? Wh({ ref: l, class: "q-table__middle " + f.value }, k()) : d(M_[e.type], { ...n, ref: l, class: [n.class, f.value], ...h.value }, k);
  };
} });
function A_(e, t) {
  return new Date(e) - new Date(t);
}
var $_ = { sortMethod: Function, binaryStateSort: Boolean, columnSortOrder: { type: String, validator: (e) => e === "ad" || e === "da", default: "ad" } };
function P_(e, t, n, r) {
  const l = v(() => {
    const { sortBy: i } = t.value;
    return i && n.value.find((u) => u.name === i) || null;
  }), a = v(() => e.sortMethod !== void 0 ? e.sortMethod : (i, u, c) => {
    const s = n.value.find((m) => m.name === u);
    if (s === void 0 || s.field === void 0) return i;
    const f = c === true ? -1 : 1, h = typeof s.field == "function" ? (m) => s.field(m) : (m) => m[s.field];
    return i.sort((m, g) => {
      let w = h(m), x = h(g);
      return s.rawSort !== void 0 ? s.rawSort(w, x, m, g) * f : w == null ? -1 * f : x == null ? 1 * f : s.sort !== void 0 ? s.sort(w, x, m, g) * f : Sa(w) === true && Sa(x) === true ? (w - x) * f : Ou(w) === true && Ou(x) === true ? A_(w, x) * f : typeof w == "boolean" && typeof x == "boolean" ? (w - x) * f : ([w, x] = [w, x].map((k) => (k + "").toLocaleString().toLowerCase()), w < x ? -1 * f : w === x ? 0 : f);
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
function Xd(e) {
  return e.page < 1 && (e.page = 1), e.rowsPerPage !== void 0 && e.rowsPerPage < 1 && (e.rowsPerPage = 0), e;
}
var O_ = { pagination: Object, rowsPerPageOptions: { type: Array, default: () => [5, 7, 10, 15, 20, 25, 50, 0] }, "onUpdate:pagination": [Function, Array] };
function V_(e, t) {
  const { props: n, emit: r } = e, l = K(Object.assign({ sortBy: null, descending: false, page: 1, rowsPerPage: n.rowsPerPageOptions.length !== 0 ? n.rowsPerPageOptions[0] : 5 }, n.pagination)), a = v(() => {
    const s = n["onUpdate:pagination"] !== void 0 ? { ...l.value, ...n.pagination } : l.value;
    return Xd(s);
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
    const h = Xd({ ...a.value, ...s });
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
  }), h = v(() => n.value.page === 1), m = v(() => n.value.rowsPerPage === 0 ? 1 : Math.max(1, Math.ceil(c.value / n.value.rowsPerPage))), g = v(() => f.value === 0 ? true : n.value.page >= m.value), w = v(() => (o.rowsPerPageOptions.includes(t.value.rowsPerPage) ? o.rowsPerPageOptions : [t.value.rowsPerPage].concat(o.rowsPerPageOptions)).map((C) => ({ label: C === 0 ? u.lang.table.allRows : "" + C, value: C })));
  ge(m, (b, C) => {
    if (b === C) return;
    const P = n.value.page;
    b && !P ? l({ page: 1 }) : b < P && l({ page: b });
  });
  function x() {
    l({ page: 1 });
  }
  function k() {
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
  return o["onUpdate:pagination"] !== void 0 && i("update:pagination", { ...n.value }), { firstRowIndex: s, lastRowIndex: f, isFirstPage: h, isLastPage: g, pagesNumber: m, computedRowsPerPageOptions: w, computedRowsNumber: c, firstPage: x, prevPage: k, nextPage: y, lastPage: p };
}
var I_ = { selection: { type: String, default: "none", validator: (e) => ["single", "multiple", "none"].includes(e) }, selected: { type: Array, default: () => [] } }, z_ = ["update:selected", "selection"];
function N_(e, t, n, r) {
  const l = v(() => {
    const g = {};
    return e.selected.map(r.value).forEach((w) => {
      g[w] = true;
    }), g;
  }), a = v(() => e.selection !== "none"), o = v(() => e.selection === "single"), i = v(() => e.selection === "multiple"), u = v(() => n.value.length !== 0 && n.value.every((g) => l.value[r.value(g)] === true)), c = v(() => u.value !== true && n.value.some((g) => l.value[r.value(g)] === true)), s = v(() => e.selected.length);
  function f(g) {
    return l.value[g] === true;
  }
  function h() {
    t("update:selected", []);
  }
  function m(g, w, x, k) {
    t("selection", { rows: w, added: x, keys: g, evt: k });
    const y = o.value === true ? x === true ? w : [] : x === true ? e.selected.concat(w) : e.selected.filter((p) => g.includes(r.value(p)) === false);
    t("update:selected", y);
  }
  return { hasSelectionMode: a, singleSelection: o, multipleSelection: i, allRowsSelected: u, someRowsSelected: c, rowsSelectedNumber: s, isRowSelected: f, clearSelection: h, updateSelection: m };
}
function Gd(e) {
  return Array.isArray(e) ? e.slice() : [];
}
var H_ = { expanded: Array }, j_ = ["update:expanded"];
function U_(e, t) {
  const n = K(Gd(e.expanded));
  ge(() => e.expanded, (o) => {
    n.value = Gd(o);
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
    return i !== void 0 ? Object.keys(i).map((u) => ({ name: u, label: u.toUpperCase(), field: u, align: Sa(i[u]) ? "right" : "left", sortable: true })) : [];
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
var to = "q-table__bottom row items-center", Yh = {};
jh.forEach((e) => {
  Yh[e] = {};
});
he({ name: "QTable", props: { rows: { type: Array, required: true }, rowKey: { type: [String, Function], default: "id" }, columns: Array, loading: Boolean, iconFirstPage: String, iconPrevPage: String, iconNextPage: String, iconLastPage: String, title: String, hideHeader: Boolean, grid: Boolean, gridHeader: Boolean, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, separator: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical", "cell", "none"].includes(e) }, wrapCells: Boolean, virtualScroll: Boolean, virtualScrollTarget: {}, ...Yh, noDataLabel: String, noResultsLabel: String, loadingLabel: String, selectedRowsLabel: Function, rowsPerPageLabel: String, paginationLabel: Function, color: { type: String, default: "grey-8" }, titleClass: [String, Array, Object], tableStyle: [String, Array, Object], tableClass: [String, Array, Object], tableHeaderStyle: [String, Array, Object], tableHeaderClass: [String, Array, Object], tableRowStyleFn: Function, tableRowClassFn: Function, cardContainerClass: [String, Array, Object], cardContainerStyle: [String, Array, Object], cardStyle: [String, Array, Object], cardClass: [String, Array, Object], cardStyleFn: Function, cardClassFn: Function, hideBottom: Boolean, hideSelectedBanner: Boolean, hideNoData: Boolean, hidePagination: Boolean, onRowClick: Function, onRowDblclick: Function, onRowContextmenu: Function, ...nt, ...Ns, ...Q_, ...L_, ...O_, ...H_, ...I_, ...$_ }, emits: ["request", "virtualScroll", ...Hs, ...j_, ...z_], setup(e, { slots: t, emit: n }) {
  const r = xe(), { proxy: { $q: l } } = r, a = lt(e, l), { inFullscreen: o, toggleFullscreen: i } = js(), u = v(() => typeof e.rowKey == "function" ? e.rowKey : (de) => de[e.rowKey]), c = K(null), s = K(null), f = v(() => e.grid !== true && e.virtualScroll === true), h = v(() => " q-table__card" + (a.value === true ? " q-table__card--dark q-dark" : "") + (e.square === true ? " q-table--square" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "")), m = v(() => `q-table__container q-table--${e.separator}-separator column no-wrap` + (e.grid === true ? " q-table--grid" : h.value) + (a.value === true ? " q-table--dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.wrapCells === false ? " q-table--no-wrap" : "") + (o.value === true ? " fullscreen scroll" : "")), g = v(() => m.value + (e.loading === true ? " q-table--loading" : ""));
  ge(() => e.tableStyle + e.tableClass + e.tableHeaderStyle + e.tableHeaderClass + m.value, () => {
    var _a3;
    f.value === true && ((_a3 = s.value) == null ? void 0 : _a3.reset());
  });
  const { innerPagination: w, computedPagination: x, isServerSide: k, requestServerInteraction: y, setPagination: p } = V_(r, ue), { computedFilterMethod: b } = B_(e, p), { isRowExpanded: C, setExpanded: P, updateExpanded: O } = U_(e, n), H = v(() => {
    let de = e.rows;
    if (k.value === true || de.length === 0) return de;
    const { sortBy: Se, descending: Fe } = x.value;
    return e.filter && (de = b.value(de, e.filter, X.value, ue)), F.value !== null && (de = me.value(e.rows === de ? de.slice() : de, Se, Fe)), de;
  }), B = v(() => H.value.length), L = v(() => {
    let de = H.value;
    if (k.value === true) return de;
    const { rowsPerPage: Se } = x.value;
    return Se !== 0 && (A.value === 0 && e.rows !== de ? de.length > Y.value && (de = de.slice(0, Y.value)) : de = de.slice(A.value, Y.value)), de;
  }), { hasSelectionMode: N, singleSelection: q, multipleSelection: R, allRowsSelected: T, someRowsSelected: j, rowsSelectedNumber: W, isRowSelected: U, clearSelection: Z, updateSelection: ae } = N_(e, n, L, u), { colList: ye, computedCols: X, computedColsMap: _, computedColspan: D } = K_(e, x, N), { columnToSort: F, computedSortMethod: me, sort: $ } = P_(e, x, ye, p), { firstRowIndex: A, lastRowIndex: Y, isFirstPage: V, isLastPage: ne, pagesNumber: be, computedRowsPerPageOptions: S, computedRowsNumber: M, firstPage: I, prevPage: te, nextPage: le, lastPage: E } = D_(r, w, x, k, p, B), ee = v(() => L.value.length === 0), se = v(() => {
    const de = {};
    return jh.forEach((Se) => {
      de[Se] = e[Se];
    }), de.virtualScrollItemSize === void 0 && (de.virtualScrollItemSize = e.dense === true ? 28 : 48), de;
  });
  function ve() {
    f.value === true && s.value.reset();
  }
  function ce() {
    if (e.grid === true) return zn();
    const de = e.hideHeader !== true ? Ce : null;
    if (f.value === true) {
      const Fe = t["top-row"], Be = t["bottom-row"], Ue = { default: (pt) => we(pt.item, t.body, pt.index) };
      if (Fe !== void 0) {
        const pt = d("tbody", Fe({ cols: X.value }));
        Ue.before = de === null ? () => pt : () => [de()].concat(pt);
      } else de !== null && (Ue.before = de);
      return Be !== void 0 && (Ue.after = () => d("tbody", Be({ cols: X.value }))), d(R_, { ref: s, class: e.tableClass, style: e.tableStyle, ...se.value, scrollTarget: e.virtualScrollTarget, items: L.value, type: "__qtable", tableColspan: D.value, onVirtualScroll: Q }, Ue);
    }
    const Se = [ke()];
    return de !== null && Se.unshift(de()), Wh({ class: ["q-table__middle scroll", e.tableClass], style: e.tableStyle }, Se);
  }
  function re(de, Se) {
    if (s.value !== null) {
      s.value.scrollTo(de, Se);
      return;
    }
    de = parseInt(de, 10);
    const Fe = c.value.querySelector(`tbody tr:nth-of-type(${de + 1})`);
    if (Fe !== null) {
      const Be = c.value.querySelector(".q-table__middle.scroll"), Ue = Fe.offsetTop - e.virtualScrollStickySizeStart, pt = Ue < Be.scrollTop ? "decrease" : "increase";
      Be.scrollTop = Ue, n("virtualScroll", { index: de, from: 0, to: w.value.rowsPerPage - 1, direction: pt });
    }
  }
  function Q(de) {
    n("virtualScroll", de);
  }
  function ie() {
    return [d(K1, { class: "q-table__linear-progress", color: e.color, dark: a.value, indeterminate: true, trackColor: "transparent" })];
  }
  function we(de, Se, Fe) {
    const Be = u.value(de), Ue = U(Be);
    if (Se !== void 0) {
      const G = { key: Be, row: de, pageIndex: Fe, __trClass: Ue ? "selected" : "" };
      if (e.tableRowStyleFn !== void 0 && (G.__trStyle = e.tableRowStyleFn(de)), e.tableRowClassFn !== void 0) {
        const fe = e.tableRowClassFn(de);
        fe && (G.__trClass = `${fe} ${G.__trClass}`);
      }
      return Se(Te(G));
    }
    const pt = t["body-cell"], ht = X.value.map((G) => {
      const fe = t[`body-cell-${G.name}`], qe = fe !== void 0 ? fe : pt;
      return qe !== void 0 ? qe(Me({ key: Be, row: de, pageIndex: Fe, col: G })) : d("td", { class: G.__tdClass(de), style: G.__tdStyle(de) }, ue(G, de));
    });
    if (N.value === true) {
      const G = t["body-selection"], fe = G !== void 0 ? G(He({ key: Be, row: de, pageIndex: Fe })) : [d(ca, { modelValue: Ue, color: e.color, dark: a.value, dense: e.dense, "onUpdate:modelValue": (qe, Ee) => {
        ae([Be], [de], qe, Ee);
      } })];
      ht.unshift(d("td", { class: "q-table--col-auto-width" }, fe));
    }
    const z = { key: Be, class: { selected: Ue } };
    if (e.onRowClick !== void 0 && (z.class["cursor-pointer"] = true, z.onClick = (G) => {
      n("rowClick", G, de, Fe);
    }), e.onRowDblclick !== void 0 && (z.class["cursor-pointer"] = true, z.onDblclick = (G) => {
      n("rowDblclick", G, de, Fe);
    }), e.onRowContextmenu !== void 0 && (z.class["cursor-pointer"] = true, z.onContextmenu = (G) => {
      n("rowContextmenu", G, de, Fe);
    }), e.tableRowStyleFn !== void 0 && (z.style = e.tableRowStyleFn(de)), e.tableRowClassFn !== void 0) {
      const G = e.tableRowClassFn(de);
      G && (z.class[G] = true);
    }
    return d("tr", z, ht);
  }
  function ke() {
    const de = t.body, Se = t["top-row"], Fe = t["bottom-row"];
    let Be = L.value.map((Ue, pt) => we(Ue, de, pt));
    return Se !== void 0 && (Be = Se({ cols: X.value }).concat(Be)), Fe !== void 0 && (Be = Be.concat(Fe({ cols: X.value }))), d("tbody", Be);
  }
  function Te(de) {
    return De(de), de.cols = de.cols.map((Se) => Vt({ ...Se }, "value", () => ue(Se, de.row))), de;
  }
  function Me(de) {
    return De(de), Vt(de, "value", () => ue(de.col, de.row)), de;
  }
  function He(de) {
    return De(de), de;
  }
  function De(de) {
    Object.assign(de, { cols: X.value, colsMap: _.value, sort: $, rowIndex: A.value + de.pageIndex, color: e.color, dark: a.value, dense: e.dense }), N.value === true && Vt(de, "selected", () => U(de.key), (Se, Fe) => {
      ae([de.key], [de.row], Se, Fe);
    }), Vt(de, "expand", () => C(de.key), (Se) => {
      O(de.key, Se);
    });
  }
  function ue(de, Se) {
    const Fe = typeof de.field == "function" ? de.field(Se) : Se[de.field];
    return de.format !== void 0 ? de.format(Fe, Se) : Fe;
  }
  const pe = v(() => ({ pagination: x.value, pagesNumber: be.value, isFirstPage: V.value, isLastPage: ne.value, firstPage: I, prevPage: te, nextPage: le, lastPage: E, inFullscreen: o.value, toggleFullscreen: i }));
  function oe() {
    const de = t.top, Se = t["top-left"], Fe = t["top-right"], Be = t["top-selection"], Ue = N.value === true && Be !== void 0 && W.value > 0, pt = "q-table__top relative-position row items-center";
    if (de !== void 0) return d("div", { class: pt }, [de(pe.value)]);
    let ht;
    if (Ue === true ? ht = Be(pe.value).slice() : (ht = [], Se !== void 0 ? ht.push(d("div", { class: "q-table__control" }, [Se(pe.value)])) : e.title && ht.push(d("div", { class: "q-table__control" }, [d("div", { class: ["q-table__title", e.titleClass] }, e.title)]))), Fe !== void 0 && (ht.push(d("div", { class: "q-table__separator col" })), ht.push(d("div", { class: "q-table__control" }, [Fe(pe.value)]))), ht.length !== 0) return d("div", { class: pt }, ht);
  }
  const _e2 = v(() => j.value === true ? null : T.value);
  function Ce() {
    const de = Oe();
    return e.loading === true && t.loading === void 0 && de.push(d("tr", { class: "q-table__progress" }, [d("th", { class: "relative-position", colspan: D.value }, ie())])), d("thead", de);
  }
  function Oe() {
    const de = t.header, Se = t["header-cell"];
    if (de !== void 0) return de(Re({ header: true })).slice();
    const Fe = X.value.map((Be) => {
      const Ue = t[`header-cell-${Be.name}`], pt = Ue !== void 0 ? Ue : Se, ht = Re({ col: Be });
      return pt !== void 0 ? pt(ht) : d(q_, { key: Be.name, props: ht }, () => Be.label);
    });
    if (q.value === true && e.grid !== true) Fe.unshift(d("th", { class: "q-table--col-auto-width" }, " "));
    else if (R.value === true) {
      const Be = t["header-selection"], Ue = Be !== void 0 ? Be(Re({})) : [d(ca, { color: e.color, modelValue: _e2.value, dark: a.value, dense: e.dense, "onUpdate:modelValue": Xe })];
      Fe.unshift(d("th", { class: "q-table--col-auto-width" }, Ue));
    }
    return [d("tr", { class: e.tableHeaderClass, style: e.tableHeaderStyle }, Fe)];
  }
  function Re(de) {
    return Object.assign(de, { cols: X.value, sort: $, colsMap: _.value, color: e.color, dark: a.value, dense: e.dense }), R.value === true && Vt(de, "selected", () => _e2.value, Xe), de;
  }
  function Xe(de) {
    j.value === true && (de = false), ae(L.value.map(u.value), L.value, de);
  }
  const it = v(() => {
    const de = [e.iconFirstPage || l.iconSet.table.firstPage, e.iconPrevPage || l.iconSet.table.prevPage, e.iconNextPage || l.iconSet.table.nextPage, e.iconLastPage || l.iconSet.table.lastPage];
    return l.lang.rtl === true ? de.reverse() : de;
  });
  function kt() {
    if (e.hideBottom === true) return;
    if (ee.value === true) {
      if (e.hideNoData === true) return;
      const Fe = e.loading === true ? e.loadingLabel || l.lang.table.loading : e.filter ? e.noResultsLabel || l.lang.table.noResults : e.noDataLabel || l.lang.table.noData, Be = t["no-data"], Ue = Be !== void 0 ? [Be({ message: Fe, icon: l.iconSet.table.warning, filter: e.filter })] : [d(et, { class: "q-table__bottom-nodata-icon", name: l.iconSet.table.warning }), Fe];
      return d("div", { class: to + " q-table__bottom--nodata" }, Ue);
    }
    const de = t.bottom;
    if (de !== void 0) return d("div", { class: to }, [de(pe.value)]);
    const Se = e.hideSelectedBanner !== true && N.value === true && W.value > 0 ? [d("div", { class: "q-table__control" }, [d("div", [(e.selectedRowsLabel || l.lang.table.selectedRecords)(W.value)])])] : [];
    if (e.hidePagination !== true) return d("div", { class: to + " justify-end" }, nl(Se));
    if (Se.length !== 0) return d("div", { class: to }, Se);
  }
  function Ut(de) {
    p({ page: 1, rowsPerPage: de.value });
  }
  function nl(de) {
    let Se;
    const { rowsPerPage: Fe } = x.value, Be = e.paginationLabel || l.lang.table.pagination, Ue = t.pagination, pt = e.rowsPerPageOptions.length > 1;
    if (de.push(d("div", { class: "q-table__separator col" })), pt === true && de.push(d("div", { class: "q-table__control" }, [d("span", { class: "q-table__bottom-item" }, [e.rowsPerPageLabel || l.lang.table.recordsPerPage]), d(e_, { class: "q-table__select inline q-table__bottom-item", color: e.color, modelValue: Fe, options: S.value, displayValue: Fe === 0 ? l.lang.table.allRows : Fe, dark: a.value, borderless: true, dense: true, optionsDense: true, optionsCover: true, "onUpdate:modelValue": Ut })])), Ue !== void 0) Se = Ue(pe.value);
    else if (Se = [d("span", Fe !== 0 ? { class: "q-table__bottom-item" } : {}, [Fe ? Be(A.value + 1, Math.min(Y.value, M.value), M.value) : Be(1, B.value, M.value)])], Fe !== 0 && be.value > 1) {
      const ht = { color: e.color, round: true, dense: true, flat: true };
      e.dense === true && (ht.size = "sm"), be.value > 2 && Se.push(d(Je, { key: "pgFirst", ...ht, icon: it.value[0], disable: V.value, ariaLabel: l.lang.pagination.first, onClick: I })), Se.push(d(Je, { key: "pgPrev", ...ht, icon: it.value[1], disable: V.value, ariaLabel: l.lang.pagination.prev, onClick: te }), d(Je, { key: "pgNext", ...ht, icon: it.value[2], disable: ne.value, ariaLabel: l.lang.pagination.next, onClick: le })), be.value > 2 && Se.push(d(Je, { key: "pgLast", ...ht, icon: it.value[3], disable: ne.value, ariaLabel: l.lang.pagination.last, onClick: E }));
    }
    return de.push(d("div", { class: "q-table__control" }, Se)), de;
  }
  function an() {
    const de = e.gridHeader === true ? [d("table", { class: "q-table" }, [Ce()])] : e.loading === true && t.loading === void 0 ? ie() : void 0;
    return d("div", { class: "q-table__middle" }, de);
  }
  function zn() {
    const de = t.item !== void 0 ? t.item : (Se) => {
      const Fe = Se.cols.map((Ue) => d("div", { class: "q-table__grid-item-row" }, [d("div", { class: "q-table__grid-item-title" }, [Ue.label]), d("div", { class: "q-table__grid-item-value" }, [Ue.value])]));
      if (N.value === true) {
        const Ue = t["body-selection"], pt = Ue !== void 0 ? Ue(Se) : [d(ca, { modelValue: Se.selected, color: e.color, dark: a.value, dense: e.dense, "onUpdate:modelValue": (ht, z) => {
          ae([Se.key], [Se.row], ht, z);
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
    return d("div", { class: ["q-table__grid-content row", e.cardContainerClass], style: e.cardContainerStyle }, L.value.map((Se, Fe) => de(Te({ key: u.value(Se), row: Se, pageIndex: Fe }))));
  }
  return Object.assign(r.proxy, { requestServerInteraction: y, setPagination: p, firstPage: I, prevPage: te, nextPage: le, lastPage: E, isRowSelected: U, clearSelection: Z, isRowExpanded: C, setExpanded: P, sort: $, resetVirtualScroll: ve, scrollTo: re, getCellValue: ue }), nm(r.proxy, { filteredSortedRows: () => H.value, computedRows: () => L.value, computedRowsNumber: () => M.value }), () => {
    const de = [oe()], Se = { ref: c, class: g.value };
    return e.grid === true ? de.push(an()) : Object.assign(Se, { class: [Se.class, e.cardClass], style: e.cardStyle }), de.push(ce(), kt()), e.loading === true && t.loading !== void 0 && de.push(t.loading()), d("div", Se, de);
  };
} });
he({ name: "QTr", props: { props: Object, noHover: Boolean }, setup(e, { slots: t }) {
  const n = v(() => "q-tr" + (e.props === void 0 || e.props.header === true ? "" : " " + e.props.__trClass) + (e.noHover === true ? " q-tr--no-hover" : ""));
  return () => {
    var _a3;
    return d("tr", { style: (_a3 = e.props) == null ? void 0 : _a3.__trStyle, class: n.value }, Pe(t.default));
  };
} });
he({ name: "QTd", props: { props: Object, autoWidth: Boolean, noHover: Boolean }, setup(e, { slots: t }) {
  const n = xe(), r = v(() => "q-td" + (e.autoWidth === true ? " q-table--col-auto-width" : "") + (e.noHover === true ? " q-td--no-hover" : "") + " ");
  return () => {
    if (e.props === void 0) return d("td", { class: r.value }, Pe(t.default));
    const l = n.vnode.key, a = (e.props.colsMap !== void 0 ? e.props.colsMap[l] : null) || e.props.col;
    if (a === void 0) return;
    const { row: o } = e.props;
    return d("td", { class: r.value + a.__tdClass(o), style: a.__tdStyle(o) }, Pe(t.default));
  };
} });
he({ name: "QRouteTab", props: { ...La, ...oh }, emits: ah, setup(e, { slots: t, emit: n }) {
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
  const r = xe(), { $q: l } = r.proxy, a = lt(e, l), { tabindex: o, headerClass: i, getLocale: u, getCurrentDate: c } = vh(e, l), s = Fa(e), f = ql(s);
  let h, m;
  const g = K(null), w = v(() => me()), x = v(() => u()), k = v(() => $()), y = Yr(e.modelValue, w.value, x.value, e.calendar, k.value), p = K(W_(y)), b = K(y), C = K(y.hour === null || y.hour < 12), P = v(() => `q-time q-time--${e.landscape === true ? "landscape" : "portrait"}` + (a.value === true ? " q-time--dark q-dark" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-time--readonly" : "") + (e.bordered === true ? " q-time--bordered" : "") + (e.square === true ? " q-time--square no-border-radius" : "") + (e.flat === true ? " q-time--flat no-shadow" : "")), O = v(() => {
    const ue = b.value;
    return { hour: ue.hour === null ? "--" : H.value === true ? at(ue.hour) : String(C.value === true ? ue.hour === 0 ? 12 : ue.hour : ue.hour > 12 ? ue.hour - 12 : ue.hour), minute: ue.minute === null ? "--" : at(ue.minute), second: ue.second === null ? "--" : at(ue.second) };
  }), H = v(() => e.format24h !== null ? e.format24h : l.lang.date.format24h), B = v(() => {
    const ue = p.value === "hour", pe = ue === true ? 12 : 60, oe = b.value[p.value];
    let Ce = `rotate(${Math.round(oe * (360 / pe)) - 180}deg) translateX(-50%)`;
    return ue === true && H.value === true && b.value.hour >= 12 && (Ce += " scale(.7)"), { transform: Ce };
  }), L = v(() => b.value.hour !== null), N = v(() => L.value === true && b.value.minute !== null), q = v(() => e.hourOptions !== void 0 ? (ue) => e.hourOptions.includes(ue) : e.options !== void 0 ? (ue) => e.options(ue, null, null) : null), R = v(() => e.minuteOptions !== void 0 ? (ue) => e.minuteOptions.includes(ue) : e.options !== void 0 ? (ue) => e.options(b.value.hour, ue, null) : null), T = v(() => e.secondOptions !== void 0 ? (ue) => e.secondOptions.includes(ue) : e.options !== void 0 ? (ue) => e.options(b.value.hour, b.value.minute, ue) : null), j = v(() => {
    if (q.value === null) return null;
    const ue = _(0, 11, q.value), pe = _(12, 11, q.value);
    return { am: ue, pm: pe, values: ue.values.concat(pe.values) };
  }), W = v(() => R.value !== null ? _(0, 59, R.value) : null), U = v(() => T.value !== null ? _(0, 59, T.value) : null), Z = v(() => {
    switch (p.value) {
      case "hour":
        return j.value;
      case "minute":
        return W.value;
      case "second":
        return U.value;
    }
  }), ae = v(() => {
    let ue, pe, oe = 0, _e2 = 1;
    const Ce = Z.value !== null ? Z.value.values : void 0;
    p.value === "hour" ? H.value === true ? (ue = 0, pe = 23) : (ue = 0, pe = 11, C.value === false && (oe = 12)) : (ue = 0, pe = 55, _e2 = 5);
    const Oe = [];
    for (let Re = ue, Xe = ue; Re <= pe; Re += _e2, Xe++) {
      const it = Re + oe, kt = (Ce == null ? void 0 : Ce.includes(it)) === false, Ut = p.value === "hour" && Re === 0 ? H.value === true ? "00" : "12" : Re;
      Oe.push({ val: it, index: Xe, disable: kt, label: Ut });
    }
    return Oe;
  }), ye = v(() => [[bn, V, void 0, { stop: true, prevent: true, mouse: true }]]);
  ge(() => e.modelValue, (ue) => {
    const pe = Yr(ue, w.value, x.value, e.calendar, k.value);
    (pe.dateHash !== b.value.dateHash || pe.timeHash !== b.value.timeHash) && (b.value = pe, pe.hour === null ? p.value = "hour" : C.value = pe.hour < 12);
  }), ge([w, x], () => {
    Qe(() => {
      Me();
    });
  });
  function X() {
    const ue = { ...c(), ...Y_() };
    Me(ue), Object.assign(b.value, ue), p.value = "hour";
  }
  function _(ue, pe, oe) {
    const _e2 = Array.apply(null, { length: pe + 1 }).map((Ce, Oe) => {
      const Re = Oe + ue;
      return { index: Re, val: oe(Re) === true };
    }).filter((Ce) => Ce.val === true).map((Ce) => Ce.index);
    return { min: _e2[0], max: _e2[_e2.length - 1], values: _e2, threshold: pe + 1 };
  }
  function D(ue, pe, oe) {
    const _e2 = Math.abs(ue - pe);
    return Math.min(_e2, oe - _e2);
  }
  function F(ue, { min: pe, max: oe, values: _e2, threshold: Ce }) {
    if (ue === pe) return pe;
    if (ue < pe || ue > oe) return D(ue, pe, Ce) <= D(ue, oe, Ce) ? pe : oe;
    const Oe = _e2.findIndex((it) => ue <= it), Re = _e2[Oe - 1], Xe = _e2[Oe];
    return ue - Re <= Xe - ue ? Re : Xe;
  }
  function me() {
    return e.calendar !== "persian" && e.mask !== null ? e.mask : `HH:mm${e.withSeconds === true ? ":ss" : ""}`;
  }
  function $() {
    if (typeof e.defaultDate != "string") {
      const ue = c(true);
      return ue.dateHash = Qn(ue), ue;
    }
    return Yr(e.defaultDate, "YYYY/MM/DD", void 0, e.calendar);
  }
  function A() {
    return pl(r) === true || Z.value !== null && (Z.value.values.length === 0 || p.value === "hour" && H.value !== true && j.value[C.value === true ? "am" : "pm"].values.length === 0);
  }
  function Y() {
    const ue = g.value, { top: pe, left: oe, width: _e2 } = ue.getBoundingClientRect(), Ce = _e2 / 2;
    return { top: pe + Ce, left: oe + Ce, dist: Ce * 0.7 };
  }
  function V(ue) {
    if (A() !== true) {
      if (ue.isFirst === true) {
        h = Y(), m = be(ue.evt, h);
        return;
      }
      m = be(ue.evt, h, m), ue.isFinal === true && (h = false, m = null, ne());
    }
  }
  function ne() {
    p.value === "hour" ? p.value = "minute" : e.withSeconds && p.value === "minute" && (p.value = "second");
  }
  function be(ue, pe, oe) {
    const _e2 = tn(ue), Ce = Math.abs(_e2.top - pe.top), Oe = Math.sqrt(Math.pow(Math.abs(_e2.top - pe.top), 2) + Math.pow(Math.abs(_e2.left - pe.left), 2));
    let Re, Xe = Math.asin(Ce / Oe) * (180 / Math.PI);
    if (_e2.top < pe.top ? Xe = pe.left < _e2.left ? 90 - Xe : 270 + Xe : Xe = pe.left < _e2.left ? Xe + 90 : 270 - Xe, p.value === "hour") {
      if (Re = Xe / 30, j.value !== null) {
        const it = H.value !== true ? C.value === true : j.value.am.values.length !== 0 && j.value.pm.values.length !== 0 ? Oe >= pe.dist : j.value.am.values.length !== 0;
        Re = F(Re + (it === true ? 0 : 12), j.value[it === true ? "am" : "pm"]);
      } else Re = Math.round(Re), H.value === true ? Oe < pe.dist ? Re < 12 && (Re += 12) : Re === 12 && (Re = 0) : C.value === true && Re === 12 ? Re = 0 : C.value === false && Re !== 12 && (Re += 12);
      H.value === true && (C.value = Re < 12);
    } else Re = Math.round(Xe / 6) % 60, p.value === "minute" && W.value !== null ? Re = F(Re, W.value) : p.value === "second" && U.value !== null && (Re = F(Re, U.value));
    return oe !== Re && Q[p.value](Re), Re;
  }
  const S = { hour() {
    p.value = "hour";
  }, minute() {
    p.value = "minute";
  }, second() {
    p.value = "second";
  } };
  function M(ue) {
    ue.keyCode === 13 && ie();
  }
  function I(ue) {
    ue.keyCode === 13 && we();
  }
  function te(ue) {
    A() !== true && (l.platform.is.desktop !== true && be(ue, Y()), ne());
  }
  function le(ue) {
    A() !== true && be(ue, Y());
  }
  function E(ue) {
    if (ue.keyCode === 13) p.value = "hour";
    else if ([37, 39].includes(ue.keyCode)) {
      const pe = ue.keyCode === 37 ? -1 : 1;
      if (j.value !== null) {
        const oe = H.value === true ? j.value.values : j.value[C.value === true ? "am" : "pm"].values;
        if (oe.length === 0) return;
        if (b.value.hour === null) ve(oe[0]);
        else {
          const _e2 = (oe.length + oe.indexOf(b.value.hour) + pe) % oe.length;
          ve(oe[_e2]);
        }
      } else {
        const oe = H.value === true ? 24 : 12, _e2 = H.value !== true && C.value === false ? 12 : 0, Ce = b.value.hour === null ? -pe : b.value.hour;
        ve(_e2 + (24 + Ce + pe) % oe);
      }
    }
  }
  function ee(ue) {
    if (ue.keyCode === 13) p.value = "minute";
    else if ([37, 39].includes(ue.keyCode)) {
      const pe = ue.keyCode === 37 ? -1 : 1;
      if (W.value !== null) {
        const oe = W.value.values;
        if (oe.length === 0) return;
        if (b.value.minute === null) ce(oe[0]);
        else {
          const _e2 = (oe.length + oe.indexOf(b.value.minute) + pe) % oe.length;
          ce(oe[_e2]);
        }
      } else {
        const oe = b.value.minute === null ? -pe : b.value.minute;
        ce((60 + oe + pe) % 60);
      }
    }
  }
  function se(ue) {
    if (ue.keyCode === 13) p.value = "second";
    else if ([37, 39].includes(ue.keyCode)) {
      const pe = ue.keyCode === 37 ? -1 : 1;
      if (U.value !== null) {
        const oe = U.value.values;
        if (oe.length === 0) return;
        if (b.value.seconds === null) re(oe[0]);
        else {
          const _e2 = (oe.length + oe.indexOf(b.value.second) + pe) % oe.length;
          re(oe[_e2]);
        }
      } else {
        const oe = b.value.second === null ? -pe : b.value.second;
        re((60 + oe + pe) % 60);
      }
    }
  }
  function ve(ue) {
    b.value.hour !== ue && (b.value.hour = ue, Te());
  }
  function ce(ue) {
    b.value.minute !== ue && (b.value.minute = ue, Te());
  }
  function re(ue) {
    b.value.second !== ue && (b.value.second = ue, Te());
  }
  const Q = { hour: ve, minute: ce, second: re };
  function ie() {
    C.value === false && (C.value = true, b.value.hour !== null && (b.value.hour -= 12, Te()));
  }
  function we() {
    C.value === true && (C.value = false, b.value.hour !== null && (b.value.hour += 12, Te()));
  }
  function ke(ue) {
    const pe = e.modelValue;
    p.value !== ue && pe !== void 0 && pe !== null && pe !== "" && typeof pe != "string" && (p.value = ue);
  }
  function Te() {
    if (q.value !== null && q.value(b.value.hour) !== true) {
      b.value = Yr(), ke("hour");
      return;
    }
    if (R.value !== null && R.value(b.value.minute) !== true) {
      b.value.minute = null, b.value.second = null, ke("minute");
      return;
    }
    if (e.withSeconds === true && T.value !== null && T.value(b.value.second) !== true) {
      b.value.second = null, ke("second");
      return;
    }
    b.value.hour === null || b.value.minute === null || e.withSeconds === true && b.value.second === null || Me();
  }
  function Me(ue) {
    const pe = Object.assign({ ...b.value }, ue), oe = e.calendar === "persian" ? at(pe.hour) + ":" + at(pe.minute) + (e.withSeconds === true ? ":" + at(pe.second) : "") : ph(new Date(pe.year, pe.month === null ? null : pe.month - 1, pe.day, pe.hour, pe.minute, pe.second, pe.millisecond), w.value, x.value, pe.year, pe.timezoneOffset);
    pe.changed = oe !== e.modelValue, n("update:modelValue", oe, pe);
  }
  function He() {
    const ue = [d("div", { class: "q-time__link " + (p.value === "hour" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: S.hour, onKeyup: E }, O.value.hour), d("div", ":"), d("div", L.value === true ? { class: "q-time__link " + (p.value === "minute" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onKeyup: ee, onClick: S.minute } : { class: "q-time__link" }, O.value.minute)];
    e.withSeconds === true && ue.push(d("div", ":"), d("div", N.value === true ? { class: "q-time__link " + (p.value === "second" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onKeyup: se, onClick: S.second } : { class: "q-time__link" }, O.value.second));
    const pe = [d("div", { class: "q-time__header-label row items-center no-wrap", dir: "ltr" }, ue)];
    return H.value === false && pe.push(d("div", { class: "q-time__header-ampm column items-between no-wrap" }, [d("div", { class: "q-time__link " + (C.value === true ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: ie, onKeyup: M }, "AM"), d("div", { class: "q-time__link " + (C.value !== true ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: we, onKeyup: I }, "PM")])), d("div", { class: "q-time__header flex flex-center no-wrap " + i.value }, pe);
  }
  function De() {
    const ue = b.value[p.value];
    return d("div", { class: "q-time__content col relative-position" }, [d(Ot, { name: "q-transition--scale" }, () => d("div", { key: "clock" + p.value, class: "q-time__container-parent absolute-full" }, [d("div", { ref: g, class: "q-time__container-child fit overflow-hidden" }, [cn(d("div", { class: "q-time__clock cursor-pointer non-selectable", onClick: te, onMousedown: le }, [d("div", { class: "q-time__clock-circle fit" }, [d("div", { class: "q-time__clock-pointer" + (b.value[p.value] === null ? " hidden" : e.color !== void 0 ? ` text-${e.color}` : ""), style: B.value }), ae.value.map((pe) => d("div", { class: `q-time__clock-position row flex-center q-time__clock-pos-${pe.index}` + (pe.val === ue ? " q-time__clock-position--active " + i.value : pe.disable === true ? " q-time__clock-position--disable" : "") }, [d("span", pe.label)]))])]), ye.value)])])), e.nowBtn === true ? d(Je, { class: "q-time__now-button absolute", icon: l.iconSet.datetime.now, unelevated: true, size: "sm", round: true, color: e.color, textColor: e.textColor, tabindex: o.value, onClick: X }) : null]);
  }
  return r.proxy.setNow = X, () => {
    const ue = [De()], pe = Pe(t.default);
    return pe !== void 0 && ue.push(d("div", { class: "q-time__actions" }, pe)), e.name !== void 0 && e.disable !== true && f(ue, "push"), d("div", { class: P.value, tabindex: -1 }, [He(), d("div", { class: "q-time__main col overflow-auto" }, ue)]);
  };
} });
he({ name: "QTimeline", props: { ...nt, color: { type: String, default: "primary" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, layout: { type: String, default: "dense", validator: (e) => ["dense", "comfortable", "loose"].includes(e) } }, setup(e, { slots: t }) {
  const n = xe(), r = lt(e, n.proxy.$q);
  gn(dm, e);
  const l = v(() => `q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}` + (r.value === true ? " q-timeline--dark" : ""));
  return () => d("ul", { class: l.value }, Pe(t.default));
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
    const u = [d("div", { class: "q-timeline__subtitle" }, [d("span", {}, Pe(t.subtitle, [e.subtitle]))]), d("div", { class: l.value }, i), d("div", { class: "q-timeline__content" }, [d("h6", { class: "q-timeline__title" }, Pe(t.title, [e.title]))].concat(o))];
    return d("li", { class: r.value }, a.value === true ? u.reverse() : u);
  };
} });
var Zd = he({ name: "QToolbar", props: { inset: Boolean }, setup(e, { slots: t }) {
  const n = v(() => "q-toolbar row no-wrap items-center" + (e.inset === true ? " q-toolbar--inset" : ""));
  return () => d("div", { class: n.value, role: "toolbar" }, Pe(t.default));
} }), Jd = he({ name: "QToolbarTitle", props: { shrink: Boolean }, setup(e, { slots: t }) {
  const n = v(() => "q-toolbar__title ellipsis" + (e.shrink === true ? " col-shrink" : ""));
  return () => d("div", { class: n.value }, Pe(t.default));
} }), X_ = ["none", "strict", "leaf", "leaf-filtered"];
he({ name: "QTree", props: { ...nt, nodes: { type: Array, required: true }, nodeKey: { type: String, required: true }, labelKey: { type: String, default: "label" }, childrenKey: { type: String, default: "children" }, dense: Boolean, color: String, controlColor: String, textColor: String, selectedColor: String, icon: String, tickStrategy: { type: String, default: "none", validator: (e) => X_.includes(e) }, ticked: Array, expanded: Array, selected: {}, noSelectionUnset: Boolean, defaultExpandAll: Boolean, accordion: Boolean, filter: String, filterMethod: Function, duration: {}, noConnectors: Boolean, noTransition: Boolean, noNodesLabel: String, noResultsLabel: String }, emits: ["update:expanded", "update:ticked", "update:selected", "lazyLoad", "afterShow", "afterHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = lt(e, l), o = K({}), i = K(e.ticked || []), u = K(e.expanded || []);
  let c = {};
  Rr(() => {
    c = {};
  });
  const s = v(() => `q-tree q-tree--${e.dense === true ? "dense" : "standard"}` + (e.noConnectors === true ? " q-tree--no-connectors" : "") + (a.value === true ? " q-tree--dark" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), f = v(() => e.selected !== void 0), h = v(() => e.icon || l.iconSet.tree.icon), m = v(() => e.controlColor || e.color), g = v(() => e.textColor !== void 0 ? ` text-${e.textColor}` : ""), w = v(() => {
    const _ = e.selectedColor || e.color;
    return _ ? ` text-${_}` : "";
  }), x = v(() => e.filterMethod !== void 0 ? e.filterMethod : (_, D) => {
    const F = D.toLowerCase();
    return _[e.labelKey] && _[e.labelKey].toLowerCase().indexOf(F) !== -1;
  }), k = v(() => {
    const _ = {}, D = (F, me) => {
      const $ = F.tickStrategy || (me ? me.tickStrategy : e.tickStrategy), A = F[e.nodeKey], Y = F[e.childrenKey] && Array.isArray(F[e.childrenKey]) && F[e.childrenKey].length !== 0, V = F.disabled !== true && f.value === true && F.selectable !== false, ne = F.disabled !== true && F.expandable !== false, be = $ !== "none", S = $ === "strict", M = $ === "leaf-filtered", I = $ === "leaf" || $ === "leaf-filtered";
      let te = F.disabled !== true && F.tickable !== false;
      I === true && te === true && me && me.tickable !== true && (te = false);
      let le = F.lazy;
      le === true && o.value[A] !== void 0 && Array.isArray(F[e.childrenKey]) === true && (le = o.value[A]);
      const E = { key: A, parent: me, isParent: Y, lazy: le, disabled: F.disabled, link: F.disabled !== true && (V === true || ne === true && (Y === true || le === true)), children: [], matchesFilter: e.filter ? x.value(F, e.filter) : true, selected: A === e.selected && V === true, selectable: V, expanded: Y === true ? u.value.includes(A) : false, expandable: ne, noTick: F.noTick === true || S !== true && le && le !== "loaded", tickable: te, tickStrategy: $, hasTicking: be, strictTicking: S, leafFilteredTicking: M, leafTicking: I, ticked: S === true ? i.value.includes(A) : Y === true ? false : i.value.includes(A) };
      if (_[A] = E, Y === true && (E.children = F[e.childrenKey].map((ee) => D(ee, E)), e.filter && (E.matchesFilter !== true ? E.matchesFilter = E.children.some((ee) => ee.matchesFilter) : E.noTick !== true && E.disabled !== true && E.tickable === true && M === true && E.children.every((ee) => ee.matchesFilter !== true || ee.noTick === true || ee.tickable !== true) === true && (E.tickable = false)), E.matchesFilter === true && (E.noTick !== true && S !== true && E.children.every((ee) => ee.noTick) === true && (E.noTick = true), I))) {
        if (E.ticked = false, E.indeterminate = E.children.some((ee) => ee.indeterminate === true), E.tickable = E.tickable === true && E.children.some((ee) => ee.tickable), E.indeterminate !== true) {
          const ee = E.children.reduce((se, ve) => ve.ticked === true ? se + 1 : se, 0);
          ee === E.children.length ? E.ticked = true : ee > 0 && (E.indeterminate = true);
        }
        E.indeterminate === true && (E.indeterminateNextState = E.children.every((ee) => ee.tickable !== true || ee.ticked !== true));
      }
      return E;
    };
    return e.nodes.forEach((F) => D(F, null)), _;
  });
  ge(() => e.ticked, (_) => {
    i.value = _;
  }), ge(() => e.expanded, (_) => {
    u.value = _;
  });
  function y(_) {
    const D = [].reduce, F = (me, $) => {
      if (me || !$) return me;
      if (Array.isArray($) === true) return D.call(Object($), F, me);
      if ($[e.nodeKey] === _) return $;
      if ($[e.childrenKey]) return F(null, $[e.childrenKey]);
    };
    return F(null, e.nodes);
  }
  function p() {
    return i.value.map((_) => y(_));
  }
  function b() {
    return u.value.map((_) => y(_));
  }
  function C(_) {
    return _ && k.value[_] ? k.value[_].expanded : false;
  }
  function P() {
    e.expanded !== void 0 ? n("update:expanded", []) : u.value = [];
  }
  function O() {
    const _ = [], D = (F) => {
      F[e.childrenKey] && F[e.childrenKey].length !== 0 && F.expandable !== false && F.disabled !== true && (_.push(F[e.nodeKey]), F[e.childrenKey].forEach(D));
    };
    e.nodes.forEach(D), e.expanded !== void 0 ? n("update:expanded", _) : u.value = _;
  }
  function H(_, D, F = y(_), me = k.value[_]) {
    if (me.lazy && me.lazy !== "loaded") {
      if (me.lazy === "loading") return;
      o.value[_] = "loading", Array.isArray(F[e.childrenKey]) !== true && (F[e.childrenKey] = []), n("lazyLoad", { node: F, key: _, done: ($) => {
        o.value[_] = "loaded", F[e.childrenKey] = Array.isArray($) === true ? $ : [], Qe(() => {
          var _a3;
          ((_a3 = k.value[_]) == null ? void 0 : _a3.isParent) === true && B(_, true);
        });
      }, fail: () => {
        delete o.value[_], F[e.childrenKey].length === 0 && delete F[e.childrenKey];
      } });
    } else me.isParent === true && me.expandable === true && B(_, D);
  }
  function B(_, D) {
    let F = u.value;
    const me = e.expanded !== void 0;
    if (me === true && (F = F.slice()), D) {
      if (e.accordion && k.value[_]) {
        const $ = [];
        k.value[_].parent ? k.value[_].parent.children.forEach((A) => {
          A.key !== _ && A.expandable === true && $.push(A.key);
        }) : e.nodes.forEach((A) => {
          const Y = A[e.nodeKey];
          Y !== _ && $.push(Y);
        }), $.length !== 0 && (F = F.filter((A) => $.includes(A) === false));
      }
      F = F.concat([_]).filter(($, A, Y) => Y.indexOf($) === A);
    } else F = F.filter(($) => $ !== _);
    me === true ? n("update:expanded", F) : u.value = F;
  }
  function L(_) {
    return _ && k.value[_] ? k.value[_].ticked : false;
  }
  function N(_, D) {
    let F = i.value;
    const me = e.ticked !== void 0;
    me === true && (F = F.slice()), D ? F = F.concat(_).filter(($, A, Y) => Y.indexOf($) === A) : F = F.filter(($) => _.includes($) === false), me === true && n("update:ticked", F);
  }
  function q(_, D, F) {
    const me = { tree: r, node: _, key: F, color: e.color, dark: a.value };
    return Vt(me, "expanded", () => D.expanded, ($) => {
      $ !== D.expanded && H(F, $);
    }), Vt(me, "ticked", () => D.ticked, ($) => {
      $ !== D.ticked && N([F], $);
    }), me;
  }
  function R(_) {
    return (e.filter ? _.filter((D) => k.value[D[e.nodeKey]].matchesFilter) : _).map((D) => U(D));
  }
  function T(_) {
    if (_.icon !== void 0) return d(et, { class: "q-tree__icon q-mr-sm", name: _.icon, color: _.iconColor });
    const D = _.img || _.avatar;
    if (D) return d("img", { class: `q-tree__${_.img ? "img" : "avatar"} q-mr-sm`, src: D });
  }
  function j() {
    n("afterShow");
  }
  function W() {
    n("afterHide");
  }
  function U(_) {
    const D = _[e.nodeKey], F = k.value[D], me = _.header && t[`header-${_.header}`] || t["default-header"], $ = F.isParent === true ? R(_[e.childrenKey]) : [], A = $.length !== 0 || F.lazy && F.lazy !== "loaded";
    let Y = _.body && t[`body-${_.body}`] || t["default-body"];
    const V = me !== void 0 || Y !== void 0 ? q(_, F, D) : null;
    return Y !== void 0 && (Y = d("div", { class: "q-tree__node-body relative-position" }, [d("div", { class: g.value }, [Y(V)])])), d("div", { key: D, class: `q-tree__node relative-position q-tree__node--${A === true ? "parent" : "child"}` }, [d("div", { class: "q-tree__node-header relative-position row no-wrap items-center" + (F.link === true ? " q-tree__node--link q-hoverable q-focusable" : "") + (F.selected === true ? " q-tree__node--selected" : "") + (F.disabled === true ? " q-tree__node--disabled" : ""), tabindex: F.link === true ? 0 : -1, ariaExpanded: $.length > 0 ? F.expanded : null, role: "treeitem", onClick: (ne) => {
      ae(_, F, ne);
    }, onKeypress(ne) {
      Zl(ne) !== true && (ne.keyCode === 13 ? ae(_, F, ne, true) : ne.keyCode === 32 && ye(_, F, ne, true));
    } }, [d("div", { class: "q-focus-helper", tabindex: -1, ref: (ne) => {
      c[F.key] = ne;
    } }), F.lazy === "loading" ? d(wn, { class: "q-tree__spinner", color: m.value }) : A === true ? d(et, { class: "q-tree__arrow" + (F.expanded === true ? " q-tree__arrow--rotate" : ""), name: h.value, onClick(ne) {
      ye(_, F, ne);
    } }) : null, F.hasTicking === true && F.noTick !== true ? d(ca, { class: "q-tree__tickbox", modelValue: F.indeterminate === true ? null : F.ticked, color: m.value, dark: a.value, dense: true, keepColor: true, disable: F.tickable !== true, onKeydown: je, "onUpdate:modelValue": (ne) => {
      X(F, ne);
    } }) : null, d("div", { class: "q-tree__node-header-content col row no-wrap items-center" + (F.selected === true ? w.value : g.value) }, [me ? me(V) : [T(_), d("div", _[e.labelKey])]])]), A === true ? e.noTransition === true ? F.expanded === true ? d("div", { class: "q-tree__node-collapsible" + g.value, key: `${D}__q` }, [Y, d("div", { class: "q-tree__children" + (F.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, $)]) : null : d(Ys, { duration: e.duration, onShow: j, onHide: W }, () => cn(d("div", { class: "q-tree__node-collapsible" + g.value, key: `${D}__q` }, [Y, d("div", { class: "q-tree__children" + (F.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, $)]), [[Zv, F.expanded]])) : Y]);
  }
  function Z(_) {
    var _a3;
    (_a3 = c[_]) == null ? void 0 : _a3.focus();
  }
  function ae(_, D, F, me) {
    me !== true && D.selectable !== false && Z(D.key), f.value && D.selectable ? e.noSelectionUnset === false ? n("update:selected", D.key !== e.selected ? D.key : null) : D.key !== e.selected && n("update:selected", D.key === void 0 ? null : D.key) : ye(_, D, F, me), typeof _.handler == "function" && _.handler(_);
  }
  function ye(_, D, F, me) {
    F !== void 0 && je(F), me !== true && D.selectable !== false && Z(D.key), H(D.key, !D.expanded, _, D);
  }
  function X(_, D) {
    if (_.indeterminate === true && (D = _.indeterminateNextState), _.strictTicking) N([_.key], D);
    else if (_.leafTicking) {
      const F = [], me = ($) => {
        $.isParent ? (D !== true && $.noTick !== true && $.tickable === true && F.push($.key), $.leafTicking === true && $.children.forEach(me)) : $.noTick !== true && $.tickable === true && ($.leafFilteredTicking !== true || $.matchesFilter === true) && F.push($.key);
      };
      me(_), N(F, D);
    }
  }
  return e.defaultExpandAll === true && O(), Object.assign(r, { getNodeByKey: y, getTickedNodes: p, getExpandedNodes: b, isExpanded: C, collapseAll: P, expandAll: O, setExpanded: H, isTicked: L, setTicked: N }), () => {
    const _ = R(e.nodes);
    return d("div", { class: s.value, role: "tree" }, _.length === 0 ? e.filter ? e.noResultsLabel || l.lang.tree.noResults : e.noNodesLabel || l.lang.tree.noNodes : _);
  };
} });
function ef(e) {
  return (e * 100).toFixed(2) + "%";
}
var G_ = { ...nt, ...Rh, label: String, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, noThumbnails: Boolean, thumbnailFit: { type: String, default: "cover" }, autoUpload: Boolean, hideUploadBtn: Boolean, disable: Boolean, readonly: Boolean }, Xh = [...Ah, "start", "finish", "added", "removed"];
function Z_(e, t) {
  const n = xe(), { props: r, slots: l, emit: a, proxy: o } = n, { $q: i } = o, u = lt(r, i);
  function c(V, ne, be) {
    if (V.__status = ne, ne === "idle") {
      V.__uploaded = 0, V.__progress = 0, V.__sizeLabel = Vu(V.size), V.__progressLabel = "0.00%";
      return;
    }
    if (ne === "failed") {
      o.$forceUpdate();
      return;
    }
    V.__uploaded = ne === "uploaded" ? V.size : be, V.__progress = ne === "uploaded" ? 1 : Math.min(0.9999, V.__uploaded / V.size), V.__progressLabel = ef(V.__progress), o.$forceUpdate();
  }
  const s = v(() => r.disable !== true && r.readonly !== true), f = K(false), h = K(null), m = K(null), g = { files: K([]), queuedFiles: K([]), uploadedFiles: K([]), uploadedSize: K(0), updateFileStatus: c, isAlive: () => pl(n) === false }, { pickFiles: w, addFiles: x, onDragover: k, onDragleave: y, processFiles: p, getDndNode: b, maxFilesNumber: C, maxTotalSizeNumber: P } = $h({ editable: s, dnd: f, getFileInput: X, addFilesToQueue: _ });
  Object.assign(g, e({ props: r, slots: l, emit: a, helpers: g, exposeApi: (V) => {
    Object.assign(g, V);
  } })), g.isBusy === void 0 && (g.isBusy = K(false));
  const O = K(0), H = v(() => O.value === 0 ? 0 : g.uploadedSize.value / O.value), B = v(() => ef(H.value)), L = v(() => Vu(O.value)), N = v(() => s.value === true && g.isUploading.value !== true && (r.multiple === true || g.queuedFiles.value.length === 0) && (r.maxFiles === void 0 || g.files.value.length < C.value) && (r.maxTotalSize === void 0 || O.value < P.value)), q = v(() => s.value === true && g.isBusy.value !== true && g.isUploading.value !== true && g.queuedFiles.value.length !== 0);
  gn(bm, me);
  const R = v(() => "q-uploader column no-wrap" + (u.value === true ? " q-uploader--dark q-dark" : "") + (r.bordered === true ? " q-uploader--bordered" : "") + (r.square === true ? " q-uploader--square no-border-radius" : "") + (r.flat === true ? " q-uploader--flat no-shadow" : "") + (r.disable === true ? " disabled q-uploader--disable" : "") + (f.value === true ? " q-uploader--dnd" : "")), T = v(() => "q-uploader__header" + (r.color !== void 0 ? ` bg-${r.color}` : "") + (r.textColor !== void 0 ? ` text-${r.textColor}` : ""));
  ge(g.isUploading, (V, ne) => {
    ne === false && V === true ? a("start") : ne === true && V === false && a("finish");
  });
  function j() {
    r.disable === false && (g.abort(), g.uploadedSize.value = 0, O.value = 0, ye(), g.files.value = [], g.queuedFiles.value = [], g.uploadedFiles.value = []);
  }
  function W() {
    r.disable === false && Z(["uploaded"], () => {
      g.uploadedFiles.value = [];
    });
  }
  function U() {
    Z(["idle", "failed"], ({ size: V }) => {
      O.value -= V, g.queuedFiles.value = [];
    });
  }
  function Z(V, ne) {
    if (r.disable === true) return;
    const be = { files: [], size: 0 }, S = g.files.value.filter((M) => V.indexOf(M.__status) === -1 ? true : (be.size += M.size, be.files.push(M), M.__img !== void 0 && window.URL.revokeObjectURL(M.__img.src), false));
    be.files.length !== 0 && (g.files.value = S, ne(be), a("removed", be.files));
  }
  function ae(V) {
    r.disable || (V.__status === "uploaded" ? g.uploadedFiles.value = g.uploadedFiles.value.filter((ne) => ne.__key !== V.__key) : V.__status === "uploading" ? V.__abort() : O.value -= V.size, g.files.value = g.files.value.filter((ne) => ne.__key !== V.__key ? true : (ne.__img !== void 0 && window.URL.revokeObjectURL(ne.__img.src), false)), g.queuedFiles.value = g.queuedFiles.value.filter((ne) => ne.__key !== V.__key), a("removed", [V]));
  }
  function ye() {
    g.files.value.forEach((V) => {
      V.__img !== void 0 && window.URL.revokeObjectURL(V.__img.src);
    });
  }
  function X() {
    return m.value || h.value.getElementsByClassName("q-uploader__input")[0];
  }
  function _(V, ne) {
    const be = p(V, ne, g.files.value, true), S = X();
    S != null && (S.value = ""), be !== void 0 && (be.forEach((M) => {
      if (g.updateFileStatus(M, "idle"), O.value += M.size, r.noThumbnails !== true && M.type.toUpperCase().startsWith("IMAGE")) {
        const I = new Image();
        I.src = window.URL.createObjectURL(M), M.__img = I;
      }
    }), g.files.value = g.files.value.concat(be), g.queuedFiles.value = g.queuedFiles.value.concat(be), a("added", be), r.autoUpload === true && g.upload());
  }
  function D() {
    q.value === true && g.upload();
  }
  function F(V, ne, be) {
    if (V === true) {
      const S = { type: "a", key: ne, icon: i.iconSet.uploader[ne], flat: true, dense: true };
      let M;
      return ne === "add" ? (S.onClick = w, M = me) : S.onClick = be, d(Je, S, M);
    }
  }
  function me() {
    return d("input", { ref: m, class: "q-uploader__input overflow-hidden absolute-full", tabindex: -1, type: "file", title: "", accept: r.accept, multiple: r.multiple === true ? "multiple" : void 0, capture: r.capture, onMousedown: xt, onClick: w, onChange: _ });
  }
  function $() {
    return l.header !== void 0 ? l.header(Y) : [d("div", { class: "q-uploader__header-content column" }, [d("div", { class: "flex flex-center no-wrap q-gutter-xs" }, [F(g.queuedFiles.value.length !== 0, "removeQueue", U), F(g.uploadedFiles.value.length !== 0, "removeUploaded", W), g.isUploading.value === true ? d(wn, { class: "q-uploader__spinner" }) : null, d("div", { class: "col column justify-center" }, [r.label !== void 0 ? d("div", { class: "q-uploader__title" }, [r.label]) : null, d("div", { class: "q-uploader__subtitle" }, [L.value + " / " + B.value])]), F(N.value, "add"), F(r.hideUploadBtn === false && q.value === true, "upload", g.upload), F(g.isUploading.value, "clear", g.abort)])])];
  }
  function A() {
    return l.list !== void 0 ? l.list(Y) : g.files.value.map((V) => d("div", { key: V.__key, class: "q-uploader__file relative-position" + (r.noThumbnails !== true && V.__img !== void 0 ? " q-uploader__file--img" : "") + (V.__status === "failed" ? " q-uploader__file--failed" : V.__status === "uploaded" ? " q-uploader__file--uploaded" : ""), style: r.noThumbnails !== true && V.__img !== void 0 ? { backgroundImage: 'url("' + V.__img.src + '")', backgroundSize: r.thumbnailFit } : null }, [d("div", { class: "q-uploader__file-header row flex-center no-wrap" }, [V.__status === "failed" ? d(et, { class: "q-uploader__file-status", name: i.iconSet.type.negative, color: "negative" }) : null, d("div", { class: "q-uploader__file-header-content col" }, [d("div", { class: "q-uploader__title" }, [V.name]), d("div", { class: "q-uploader__subtitle row items-center no-wrap" }, [V.__sizeLabel + " / " + V.__progressLabel])]), V.__status === "uploading" ? d(Jm, { value: V.__progress, min: 0, max: 1, indeterminate: V.__progress === 0 }) : d(Je, { round: true, dense: true, flat: true, icon: i.iconSet.uploader[V.__status === "uploaded" ? "done" : "clear"], onClick: () => {
      ae(V);
    } })])]));
  }
  We(() => {
    g.isUploading.value === true && g.abort(), g.files.value.length !== 0 && ye();
  });
  const Y = {};
  for (const V in g) yt(g[V]) === true ? Vt(Y, V, () => g[V].value) : Y[V] = g[V];
  return Object.assign(Y, { upload: D, reset: j, removeUploadedFiles: W, removeQueuedFiles: U, removeFile: ae, pickFiles: w, addFiles: x }), nm(Y, { canAddFiles: () => N.value, canUpload: () => q.value, uploadSizeLabel: () => L.value, uploadProgressLabel: () => B.value }), t({ ...g, upload: D, reset: j, removeUploadedFiles: W, removeQueuedFiles: U, removeFile: ae, pickFiles: w, addFiles: x, canAddFiles: N, canUpload: q, uploadSizeLabel: L, uploadProgressLabel: B }), () => {
    const V = [d("div", { class: T.value }, $()), d("div", { class: "q-uploader__list scroll" }, A()), b("uploader")];
    g.isBusy.value === true && V.push(d("div", { class: "q-uploader__overlay absolute-full flex flex-center" }, [d(wn)]));
    const ne = { ref: h, class: R.value };
    return N.value === true && Object.assign(ne, { onDragover: k, onDragleave: y }), d("div", ne, V);
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
  const r = K([]), l = K([]), a = K(0), o = v(() => ({ url: jn(e.url), method: jn(e.method), headers: jn(e.headers), formFields: jn(e.formFields), fieldName: jn(e.fieldName), withCredentials: jn(e.withCredentials), sendRaw: jn(e.sendRaw), batch: jn(e.batch) })), i = v(() => a.value > 0), u = v(() => l.value.length !== 0);
  let c;
  function s() {
    r.value.forEach((g) => {
      g.abort();
    }), l.value.length !== 0 && (c = true);
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
      l.value.push(w);
      const x = (k) => {
        n.isAlive() === true && (l.value = l.value.filter((y) => y !== w), l.value.length === 0 && (c = false), n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach((y) => {
          n.updateFileStatus(y, "failed");
        }), t("factoryFailed", k, g), a.value--);
      };
      w.then((k) => {
        c === true ? x(new Error("Aborted")) : n.isAlive() === true && (l.value = l.value.filter((y) => y !== w), m(g, k));
      }).catch(x);
    } else m(g, w || {});
  }
  function m(g, w) {
    const x = new FormData(), k = new XMLHttpRequest(), y = (q, R) => w[q] !== void 0 ? jn(w[q])(R) : o.value[q](R), p = y("url", g);
    if (!p) {
      console.error("q-uploader: invalid or no URL specified"), a.value--;
      return;
    }
    const b = y("formFields", g);
    b !== void 0 && b.forEach((q) => {
      x.append(q.name, q.value);
    });
    let C = 0, P = 0, O = 0, H = 0, B;
    k.upload.addEventListener("progress", (q) => {
      if (B === true) return;
      const R = Math.min(H, q.loaded);
      n.uploadedSize.value += R - O, O = R;
      let T = O - P;
      for (let j = C; T > 0 && j < g.length; j++) {
        const W = g[j];
        if (T > W.size) T -= W.size, C++, P += W.size, n.updateFileStatus(W, "uploading", W.size);
        else {
          n.updateFileStatus(W, "uploading", T);
          return;
        }
      }
    }, false), k.onreadystatechange = () => {
      k.readyState < 4 || (k.status && k.status < 400 ? (n.uploadedFiles.value = n.uploadedFiles.value.concat(g), g.forEach((q) => {
        n.updateFileStatus(q, "uploaded");
      }), t("uploaded", { files: g, xhr: k })) : (B = true, n.uploadedSize.value -= O, n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach((q) => {
        n.updateFileStatus(q, "failed");
      }), t("failed", { files: g, xhr: k })), a.value--, r.value = r.value.filter((q) => q !== k));
    }, k.open(y("method", g), p), y("withCredentials", g) === true && (k.withCredentials = true);
    const L = y("headers", g);
    L !== void 0 && L.forEach((q) => {
      k.setRequestHeader(q.name, q.value);
    });
    const N = y("sendRaw", g);
    g.forEach((q) => {
      n.updateFileStatus(q, "uploading", 0), N !== true && x.append(y("fieldName", q), q, q.name), q.xhr = k, q.__abort = () => {
        k.abort();
      }, H += q.size;
    }), t("uploading", { files: g, xhr: k }), r.value.push(k), N === true ? k.send(new Blob(g)) : k.send(x);
  }
  return { isUploading: i, isBusy: u, abort: s, upload: f };
}
var ow = { name: nw, props: lw, emits: rw, injectPlugin: aw };
tw(ow);
he({ name: "QUploaderAddTrigger", setup() {
  const e = Mt(bm, ot);
  return e === ot && console.error("QUploaderAddTrigger needs to be child of QUploader"), e;
} });
he({ name: "QVideo", props: { ...Xs, src: { type: String, required: true }, title: String, fetchpriority: { type: String, default: "auto" }, loading: { type: String, default: "eager" }, referrerpolicy: { type: String, default: "strict-origin-when-cross-origin" } }, setup(e) {
  const t = Gs(e), n = v(() => "q-video" + (e.ratio !== void 0 ? " q-video--responsive" : ""));
  return () => d("div", { class: n.value, style: t.value }, [d("iframe", { src: e.src, title: e.title, fetchpriority: e.fetchpriority, loading: e.loading, referrerpolicy: e.referrerpolicy, frameborder: "0", allowfullscreen: true })]);
} });
function tf(e) {
  if (e === false) return 0;
  if (e === true || e === void 0) return 1;
  const t = parseInt(e, 10);
  return isNaN(t) ? 0 : t;
}
Pn({ name: "close-popup", beforeMount(e, { value: t }) {
  const n = { depth: tf(t), handler(r) {
    n.depth !== 0 && setTimeout(() => {
      const l = ry(e);
      l !== void 0 && ay(l, r, n.depth);
    });
  }, handlerKey(r) {
    yn(r, 13) === true && n.handler(r);
  } };
  e.__qclosepopup = n, e.addEventListener("click", n.handler), e.addEventListener("keyup", n.handlerKey);
}, updated(e, { value: t, oldValue: n }) {
  t !== n && (e.__qclosepopup.depth = tf(t));
}, beforeUnmount(e) {
  const t = e.__qclosepopup;
  e.removeEventListener("click", t.handler), e.removeEventListener("keyup", t.handlerKey), delete e.__qclosepopup;
} });
var iw = 0, Hr = void 0;
function nf(e, t) {
  Hr === void 0 && (Hr = document.createElement("div"), Hr.style.cssText = "position: absolute; left: 0; top: 0", document.body.appendChild(Hr));
  const n = e.getBoundingClientRect(), r = Hr.getBoundingClientRect(), { marginLeft: l, marginRight: a, marginTop: o, marginBottom: i } = window.getComputedStyle(e), u = parseInt(l, 10) + parseInt(a, 10), c = parseInt(o, 10) + parseInt(i, 10);
  return { left: n.left - r.left, top: n.top - r.top, width: n.right - n.left, height: n.bottom - n.top, widthM: n.right - n.left + (t === true ? 0 : u), heightM: n.bottom - n.top + (t === true ? 0 : c), marginH: t === true ? u : 0, marginV: t === true ? c : 0 };
}
function no(e) {
  return { width: e.scrollWidth, height: e.scrollHeight };
}
var lf = ["Top", "Right", "Bottom", "Left"], rf = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], uw = /-block|-inline|block-|inline-/, sw = /(-block|-inline|block-|inline-).*:/;
function af(e, t) {
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
      for (let u = 0; u < lf.length; u++) {
        const c = "border" + lf[u] + o;
        i += n[c] + " ";
      }
      r[a] = i;
    } else if (a === "borderRadius") {
      let o = "", i = "";
      for (let u = 0; u < rf.length; u++) {
        const c = n[rf[u]].split(" ");
        o += c[0] + " ", i += (c[1] === void 0 ? c[0] : c[1]) + " ";
      }
      r[a] = o + "/ " + i;
    } else r[a] = n[a];
    else a === "cssText" ? r[a] = n[a].split(";").filter((o) => sw.test(o) !== true).join(";") : r[a] = n[a];
  }
  return r;
}
var cw = ["absolute", "fixed", "relative", "sticky"];
function of(e) {
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
function uf(e) {
  const t = typeof e;
  return t === "function" ? e() : t === "string" ? document.querySelector(e) : e;
}
function sf(e) {
  return e && e.ownerDocument === document && e.parentNode !== null;
}
function vw(e) {
  let t = () => false, n = false, r = true;
  const l = dw(e), a = fw(e), o = uf(l.from);
  if (sf(o) !== true) return t;
  typeof o.qMorphCancel == "function" && o.qMorphCancel();
  let i, u, c, s;
  const f = o.parentNode, h = o.nextElementSibling, m = nf(o, a.resize), { width: g, height: w } = no(f), { borderWidth: x, borderStyle: k, borderColor: y, borderRadius: p, backgroundColor: b, transform: C, position: P, cssText: O } = af(o, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), H = o.classList.toString(), B = o.style.cssText, L = o.cloneNode(true), N = a.tween === true ? o.cloneNode(true) : void 0;
  N !== void 0 && (N.className = N.classList.toString().split(" ").filter((R) => /^bg-/.test(R) === false).join(" ")), a.hideFromClone === true && L.classList.add("q-morph--internal"), L.setAttribute("aria-hidden", "true"), L.style.transition = "none", L.style.animation = "none", L.style.pointerEvents = "none", f.insertBefore(L, h), o.qMorphCancel = () => {
    n = true, L.remove(), N == null ? void 0 : N.remove(), a.hideFromClone === true && L.classList.remove("q-morph--internal"), o.qMorphCancel = void 0;
  };
  const q = () => {
    const R = uf(l.to);
    if (n === true || sf(R) !== true) {
      typeof o.qMorphCancel == "function" && o.qMorphCancel();
      return;
    }
    o !== R && typeof R.qMorphCancel == "function" && R.qMorphCancel(), a.keepToClone !== true && R.classList.add("q-morph--internal"), L.classList.add("q-morph--internal");
    const { width: T, height: j } = no(f), { width: W, height: U } = no(R.parentNode);
    a.hideFromClone !== true && L.classList.remove("q-morph--internal"), R.qMorphCancel = () => {
      n = true, L.remove(), N == null ? void 0 : N.remove(), a.hideFromClone === true && L.classList.remove("q-morph--internal"), a.keepToClone !== true && R.classList.remove("q-morph--internal"), o.qMorphCancel = void 0, R.qMorphCancel = void 0;
    };
    const Z = () => {
      if (n === true) {
        typeof R.qMorphCancel == "function" && R.qMorphCancel();
        return;
      }
      a.hideFromClone !== true && (L.classList.add("q-morph--internal"), L.innerHTML = "", L.style.left = 0, L.style.right = "unset", L.style.top = 0, L.style.bottom = "unset", L.style.transform = "none"), a.keepToClone !== true && R.classList.remove("q-morph--internal");
      const ae = R.parentNode, { width: ye, height: X } = no(ae), _ = R.cloneNode(a.keepToClone);
      _.setAttribute("aria-hidden", "true"), a.keepToClone !== true && (_.style.left = 0, _.style.right = "unset", _.style.top = 0, _.style.bottom = "unset", _.style.transform = "none", _.style.pointerEvents = "none"), _.classList.add("q-morph--internal");
      const D = R === o && f === ae ? L : R.nextElementSibling;
      ae.insertBefore(_, D);
      const { borderWidth: F, borderStyle: me, borderColor: $, borderRadius: A, backgroundColor: Y, transform: V, position: ne, cssText: be } = af(R, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), S = R.classList.toString(), M = R.style.cssText;
      R.style.cssText = be, R.style.transform = "none", R.style.animation = "none", R.style.transition = "none", R.className = S.split(" ").filter((_e2) => /^bg-/.test(_e2) === false).join(" ");
      const I = nf(R, a.resize), te = m.left - I.left, le = m.top - I.top, E = m.width / (I.width > 0 ? I.width : 10), ee = m.height / (I.height > 0 ? I.height : 100), se = g - T, ve = w - j, ce = ye - W, re = X - U, Q = Math.max(m.widthM, se), ie = Math.max(m.heightM, ve), we = Math.max(I.widthM, ce), ke = Math.max(I.heightM, re), Te = o === R && ["absolute", "fixed"].includes(ne) === false && ["absolute", "fixed"].includes(P) === false;
      let Me = ne === "fixed", He = ae;
      for (; Me !== true && He !== document; ) Me = window.getComputedStyle(He).position === "fixed", He = He.parentNode;
      if (a.hideFromClone !== true && (L.style.display = "block", L.style.flex = "0 0 auto", L.style.opacity = 0, L.style.minWidth = "unset", L.style.maxWidth = "unset", L.style.minHeight = "unset", L.style.maxHeight = "unset", L.classList.remove("q-morph--internal")), a.keepToClone !== true && (_.style.display = "block", _.style.flex = "0 0 auto", _.style.opacity = 0, _.style.minWidth = "unset", _.style.maxWidth = "unset", _.style.minHeight = "unset", _.style.maxHeight = "unset"), _.classList.remove("q-morph--internal"), typeof a.classes == "string" && (R.className += " " + a.classes), typeof a.style == "string") R.style.cssText += " " + a.style;
      else if (Lt(a.style) === true) for (const _e2 in a.style) R.style[_e2] = a.style[_e2];
      const De = of(L), ue = of(R), pe = Me === true ? document.documentElement : { scrollLeft: 0, scrollTop: 0 };
      R.style.position = Me === true ? "fixed" : "absolute", R.style.left = `${I.left - pe.scrollLeft}px`, R.style.right = "unset", R.style.top = `${I.top - pe.scrollTop}px`, R.style.margin = 0, a.resize === true && (R.style.minWidth = "unset", R.style.maxWidth = "unset", R.style.minHeight = "unset", R.style.maxHeight = "unset", R.style.overflow = "hidden", R.style.overflowX = "hidden", R.style.overflowY = "hidden"), document.body.appendChild(R), N !== void 0 && (N.style.cssText = O, N.style.transform = "none", N.style.animation = "none", N.style.transition = "none", N.style.position = R.style.position, N.style.left = `${m.left - pe.scrollLeft}px`, N.style.right = "unset", N.style.top = `${m.top - pe.scrollTop}px`, N.style.margin = 0, N.style.pointerEvents = "none", a.resize === true && (N.style.minWidth = "unset", N.style.maxWidth = "unset", N.style.minHeight = "unset", N.style.maxHeight = "unset", N.style.overflow = "hidden", N.style.overflowX = "hidden", N.style.overflowY = "hidden"), document.body.appendChild(N));
      const oe = (_e2) => {
        o === R && r !== true ? (R.style.cssText = B, R.className = H) : (R.style.cssText = M, R.className = S), _.parentNode === ae && ae.insertBefore(R, _), L.remove(), _.remove(), N == null ? void 0 : N.remove(), t = () => false, o.qMorphCancel = void 0, R.qMorphCancel = void 0, typeof a.onEnd == "function" && a.onEnd(r === true ? "to" : "from", _e2 === true);
      };
      if (a.useCSS !== true && typeof R.animate == "function") {
        const _e2 = a.resize === true ? { transform: `translate(${te}px, ${le}px)`, width: `${Q}px`, height: `${ie}px` } : { transform: `translate(${te}px, ${le}px) scale(${E}, ${ee})` }, Ce = a.resize === true ? { width: `${we}px`, height: `${ke}px` } : {}, Oe = a.resize === true ? { width: `${Q}px`, height: `${ie}px` } : {}, Re = a.resize === true ? { transform: `translate(${-1 * te}px, ${-1 * le}px)`, width: `${we}px`, height: `${ke}px` } : { transform: `translate(${-1 * te}px, ${-1 * le}px) scale(${1 / E}, ${1 / ee})` }, Xe = N !== void 0 ? { opacity: a.tweenToOpacity } : { backgroundColor: b }, it = N !== void 0 ? { opacity: 1 } : { backgroundColor: Y };
        s = R.animate([{ margin: 0, borderWidth: x, borderStyle: k, borderColor: y, borderRadius: p, zIndex: De, transformOrigin: "0 0", ..._e2, ...Xe }, { margin: 0, borderWidth: F, borderStyle: me, borderColor: $, borderRadius: A, zIndex: ue, transformOrigin: "0 0", transform: V, ...Ce, ...it }], { duration: a.duration, easing: a.easing, fill: a.fill, delay: a.delay }), u = N === void 0 ? void 0 : N.animate([{ opacity: a.tweenFromOpacity, margin: 0, borderWidth: x, borderStyle: k, borderColor: y, borderRadius: p, zIndex: De, transformOrigin: "0 0", transform: C, ...Oe }, { opacity: 0, margin: 0, borderWidth: F, borderStyle: me, borderColor: $, borderRadius: A, zIndex: ue, transformOrigin: "0 0", ...Re }], { duration: a.duration, easing: a.easing, fill: a.fill, delay: a.delay }), i = a.hideFromClone === true || Te === true ? void 0 : L.animate([{ margin: `${ve < 0 ? ve / 2 : 0}px ${se < 0 ? se / 2 : 0}px`, width: `${Q + m.marginH}px`, height: `${ie + m.marginV}px` }, { margin: 0, width: 0, height: 0 }], { duration: a.duration, easing: a.easing, fill: a.fill, delay: a.delay }), c = a.keepToClone === true ? void 0 : _.animate([Te === true ? { margin: `${ve < 0 ? ve / 2 : 0}px ${se < 0 ? se / 2 : 0}px`, width: `${Q + m.marginH}px`, height: `${ie + m.marginV}px` } : { margin: 0, width: 0, height: 0 }, { margin: `${re < 0 ? re / 2 : 0}px ${ce < 0 ? ce / 2 : 0}px`, width: `${we + I.marginH}px`, height: `${ke + I.marginV}px` }], { duration: a.duration, easing: a.easing, fill: a.fill, delay: a.delay });
        const kt = (Ut) => {
          i == null ? void 0 : i.cancel(), u == null ? void 0 : u.cancel(), c == null ? void 0 : c.cancel(), s.cancel(), s.removeEventListener("finish", kt), s.removeEventListener("cancel", kt), oe(Ut), i = void 0, u = void 0, c = void 0, s = void 0;
        };
        o.qMorphCancel = () => {
          o.qMorphCancel = void 0, n = true, kt();
        }, R.qMorphCancel = () => {
          R.qMorphCancel = void 0, n = true, kt();
        }, s.addEventListener("finish", kt), s.addEventListener("cancel", kt), t = (Ut) => n === true || s === void 0 ? false : Ut === true ? (kt(true), true) : (r = r !== true, i == null ? void 0 : i.reverse(), u == null ? void 0 : u.reverse(), c == null ? void 0 : c.reverse(), s.reverse(), true);
      } else {
        const _e2 = `q-morph-anim-${++iw}`, Ce = document.createElement("style"), Oe = a.resize === true ? `
            transform: translate(${te}px, ${le}px);
            width: ${Q}px;
            height: ${ie}px;
          ` : `transform: translate(${te}px, ${le}px) scale(${E}, ${ee});`, Re = a.resize === true ? `
            width: ${we}px;
            height: ${ke}px;
          ` : "", Xe = a.resize === true ? `
            width: ${Q}px;
            height: ${ie}px;
          ` : "", it = a.resize === true ? `
            transform: translate(${-1 * te}px, ${-1 * le}px);
            width: ${we}px;
            height: ${ke}px;
          ` : `transform: translate(${-1 * te}px, ${-1 * le}px) scale(${1 / E}, ${1 / ee});`, kt = N !== void 0 ? `opacity: ${a.tweenToOpacity};` : `background-color: ${b};`, Ut = N !== void 0 ? "opacity: 1;" : `background-color: ${Y};`, nl = N === void 0 ? "" : `
            @keyframes ${_e2}-from-tween {
              0% {
                opacity: ${a.tweenFromOpacity};
                margin: 0;
                border-width: ${x};
                border-style: ${k};
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
                border-width: ${F};
                border-style: ${me};
                border-color: ${$};
                border-radius: ${A};
                z-index: ${ue};
                transform-origin: 0 0;
                ${it}
              }
            }
          `, an = a.hideFromClone === true || Te === true ? "" : `
            @keyframes ${_e2}-from {
              0% {
                margin: ${ve < 0 ? ve / 2 : 0}px ${se < 0 ? se / 2 : 0}px;
                width: ${Q + m.marginH}px;
                height: ${ie + m.marginV}px;
              }

              100% {
                margin: 0;
                width: 0;
                height: 0;
              }
            }
          `, zn = Te === true ? `
            margin: ${ve < 0 ? ve / 2 : 0}px ${se < 0 ? se / 2 : 0}px;
            width: ${Q + m.marginH}px;
            height: ${ie + m.marginV}px;
          ` : `
            margin: 0;
            width: 0;
            height: 0;
          `, de = a.keepToClone === true ? "" : `
            @keyframes ${_e2}-to {
              0% {
                ${zn}
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
              border-style: ${k};
              border-color: ${y};
              border-radius: ${p};
              background-color: ${b};
              z-index: ${De};
              transform-origin: 0 0;
              ${Oe}
              ${kt}
            }

            100% {
              margin: 0;
              border-width: ${F};
              border-style: ${me};
              border-color: ${$};
              border-radius: ${A};
              background-color: ${Y};
              z-index: ${ue};
              transform-origin: 0 0;
              transform: ${V};
              ${Re}
              ${Ut}
            }
          }

          ${an}

          ${nl}

          ${de}
        `, document.head.appendChild(Ce);
        let Se = "normal";
        L.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${Se} ${a.fill} ${_e2}-from`, N !== void 0 && (N.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${Se} ${a.fill} ${_e2}-from-tween`), _.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${Se} ${a.fill} ${_e2}-to`, R.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${Se} ${a.fill} ${_e2}`;
        const Fe = (Be) => {
          Be === Object(Be) && Be.animationName !== _e2 || (R.removeEventListener("animationend", Fe), R.removeEventListener("animationcancel", Fe), oe(), Ce.remove());
        };
        o.qMorphCancel = () => {
          o.qMorphCancel = void 0, n = true, Fe();
        }, R.qMorphCancel = () => {
          R.qMorphCancel = void 0, n = true, Fe();
        }, R.addEventListener("animationend", Fe), R.addEventListener("animationcancel", Fe), t = (Be) => n === true || !R || !L || !_ ? false : Be === true ? (Fe(), true) : (r = r !== true, Se = Se === "normal" ? "reverse" : "normal", L.style.animationDirection = Se, N.style.animationDirection = Se, _.style.animationDirection = Se, R.style.animationDirection = Se, true);
      }
    };
    a.waitFor > 0 || a.waitFor === "transitionend" || a.waitFor === Object(a.waitFor) && typeof a.waitFor.then == "function" ? (a.waitFor > 0 ? new Promise((ye) => setTimeout(ye, a.waitFor)) : a.waitFor === "transitionend" ? new Promise((ye) => {
      const X = () => {
        _ !== null && (clearTimeout(_), _ = null), R && (R.removeEventListener("transitionend", X), R.removeEventListener("transitioncancel", X)), ye();
      };
      let _ = setTimeout(X, 400);
      R.addEventListener("transitionend", X), R.addEventListener("transitioncancel", X);
    }) : a.waitFor).then(Z).catch(() => {
      typeof R.qMorphCancel == "function" && R.qMorphCancel();
    }) : Z();
  };
  return typeof e.onToggle == "function" && e.onToggle(), requestAnimationFrame(q), (R) => t(R);
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
function cf(e, t) {
  let n;
  Object(t) === t ? (n = "" + t.model, bw(t, e), Jh(t, e)) : n = "" + t, n !== e.model ? (e.model = n, pw(n, e)) : e.animating === false && e.clsAction !== void 0 && e.el.classList[e.clsAction]("q-morph--invisible");
}
Pn({ name: "morph", mounted(e, t) {
  const n = { el: e, animating: false, opts: {} };
  Jh(t.modifiers, n), gw(t.arg, n), cf(n, t.value), e.__qmorph = n;
}, updated(e, t) {
  cf(e.__qmorph, t.value);
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qmorph, n = jo[t.group];
  n !== void 0 && n.queue.indexOf(t) !== -1 && (n.queue = n.queue.filter((l) => l !== t), n.queue.length === 0 && ((_a3 = n.cancel) == null ? void 0 : _a3.call(n), delete jo[t.group])), t.clsAction === "add" && e.classList.remove("q-morph--invisible"), delete e.__qmorph;
} });
var yw = { childList: true, subtree: true, attributes: true, characterData: true, attributeOldValue: true, characterDataOldValue: true };
function df(e, t, n) {
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
Pn({ name: "mutation", mounted(e, { modifiers: { once: t, ...n }, value: r }) {
  const l = { once: t, opts: Object.keys(n).length === 0 ? yw : n };
  df(e, l, r), e.__qmutation = l;
}, updated(e, { oldValue: t, value: n }) {
  const r = e.__qmutation;
  r !== void 0 && t !== n && df(e, r, n);
}, beforeUnmount: eg });
var { passive: Uo } = ft;
function ff(e, { value: t, oldValue: n }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, Uo);
    return;
  }
  e.handler = t, typeof n != "function" && (e.scrollTarget.addEventListener("scroll", e.scroll, Uo), e.scroll());
}
Pn({ name: "scroll-fire", mounted(e, t) {
  const n = { scrollTarget: In(e), scroll: Ar(() => {
    let r, l;
    n.scrollTarget === window ? (l = e.getBoundingClientRect().bottom, r = window.innerHeight) : (l = $o(e).top + kr(e), r = $o(n.scrollTarget).top + kr(n.scrollTarget)), l > 0 && l < r && (n.scrollTarget.removeEventListener("scroll", n.scroll, Uo), n.handler(e));
  }, 25) };
  ff(n, t), e.__qscrollfire = n;
}, updated(e, t) {
  t.value !== t.oldValue && ff(e.__qscrollfire, t);
}, beforeUnmount(e) {
  const t = e.__qscrollfire;
  t.scrollTarget.removeEventListener("scroll", t.scroll, Uo), t.scroll.cancel(), delete e.__qscrollfire;
} });
function vf(e, { value: t, oldValue: n }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, ft.passive);
    return;
  }
  e.handler = t, typeof n != "function" && e.scrollTarget.addEventListener("scroll", e.scroll, ft.passive);
}
Pn({ name: "scroll", mounted(e, t) {
  const n = { scrollTarget: In(e), scroll() {
    n.handler(yl(n.scrollTarget), mi(n.scrollTarget));
  } };
  vf(n, t), e.__qscroll = n;
}, updated(e, t) {
  e.__qscroll !== void 0 && t.oldValue !== t.value && vf(e.__qscroll, t);
}, beforeUnmount(e) {
  const t = e.__qscroll;
  t.scrollTarget.removeEventListener("scroll", t.scroll, ft.passive), delete e.__qscroll;
} });
Pn({ name: "touch-hold", beforeMount(e, t) {
  const { modifiers: n } = t;
  if (n.mouse !== true && Ie.has.touch !== true) return;
  const r = { handler: t.value, noop: St, mouseStart(a) {
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
Pn({ name: "touch-repeat", beforeMount(e, { modifiers: t, value: n, arg: r }) {
  const l = Object.keys(t).reduce((u, c) => {
    if (_w.test(c) === true) {
      const s = isNaN(parseInt(c, 10)) ? tg[c.toLowerCase()] : parseInt(c, 10);
      s >= 0 && u.push(s);
    }
    return u;
  }, []);
  if (t.mouse !== true && Ie.has.touch !== true && l.length === 0) return;
  const a = typeof r == "string" && r.length !== 0 ? r.split(":").map((u) => parseInt(u, 10)) : [0, 600, 300], o = a.length - 1, i = { keyboard: l, handler: n, noop: St, mouseStart(u) {
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
var lo;
function Sw() {
  return Ie.is.winphone ? "msapplication-navbutton-color" : Ie.is.safari ? "apple-mobile-web-app-status-bar-style" : "theme-color";
}
function Cw(e) {
  const t = document.getElementsByTagName("META");
  for (const n in t) if (t[n].name === e) return t[n];
}
function kw(e) {
  lo === void 0 && (lo = Sw());
  let t = Cw(lo);
  const n = t === void 0;
  n && (t = document.createElement("meta"), t.setAttribute("name", lo)), t.setAttribute("content", e), n && document.head.appendChild(t);
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
function mf(e, t) {
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
  return t === n ? Promise.resolve() : (n !== null && t.contains(n) === true ? Kt.exit() : Promise.resolve()).finally(() => mf(t, jr.request));
}, exit() {
  return Kt.isActive === true ? mf(document, jr.exit) : Promise.resolve();
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
  const { proxy: n } = xe(), r = lt(e, n.$q), l = K(null);
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
      }, onKeyup(w) {
        w.keyCode === 13 && i(m);
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
    const c = K(null), s = Ba(false, "dialog"), f = (y) => {
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
    } }, w = (y) => {
      u = true, h.forEach((p) => {
        p(y);
      });
    }, x = () => {
      k.unmount(s), Ps(s), k = null, i = null, u !== true && m.forEach((y) => {
        y();
      });
    };
    let k = ci({ name: "QGlobalDialog", setup: () => () => d(l, { ...a, ref: c, onOk: w, onHide: x, onVnodeMounted(...y) {
      typeof a.onVnodeMounted == "function" && a.onVnodeMounted(...y), Qe(() => f("show"));
    } }) }, n);
    return i = k.mount(s), g;
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
function $w(e) {
  let t = 0;
  const n = e.match(/(\d+)d/), r = e.match(/(\d+)h/), l = e.match(/(\d+)m/), a = e.match(/(\d+)s/);
  return n && (t += n[1] * 864e5), r && (t += r[1] * 36e5), l && (t += l[1] * 6e4), a && (t += a[1] * 1e3), t === 0 ? e : ig(t);
}
function ug(e, t, n = {}, r) {
  let l, a;
  n.expires !== void 0 && (Object.prototype.toString.call(n.expires) === "[object Date]" ? l = n.expires.toUTCString() : typeof n.expires == "string" ? l = $w(n.expires) : (a = parseFloat(n.expires), l = isNaN(a) === false ? ig(a * 864e5) : n.expires));
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
function Pw(e, t, n) {
  ug(e, "", { expires: -1, ...t }, n);
}
function Lw(e, t) {
  return Qo(e, t) !== null;
}
function sg(e) {
  return { get: (t) => Qo(t, e), set: (t, n, r) => ug(t, n, r, e), has: (t) => Lw(t, e), remove: (t, n) => Pw(t, n, e), getAll: () => Qo(null, e) };
}
var Zs = { install({ $q: e, ssrContext: t }) {
  e.cookies = this;
} };
__QUASAR_SSR__ && (Zs.parseSSR = (e) => {
  if (e !== void 0) return sg(e);
});
Object.assign(Zs, sg());
var Bw = Zs, Fw = he({ name: "DialogPluginComponent", props: { ...nt, title: String, message: String, prompt: Object, options: Object, progress: [Boolean, Object], html: Boolean, ok: { type: [String, Object, Boolean], default: true }, cancel: [String, Object, Boolean], focus: { type: String, default: "ok", validator: (e) => ["ok", "cancel", "none"].includes(e) }, stackButtons: Boolean, color: String, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), { $q: r } = n, l = lt(e, r), a = K(null), o = K(e.prompt !== void 0 ? e.prompt.model : e.options !== void 0 ? e.options.model : void 0), i = v(() => "q-dialog-plugin" + (l.value === true ? " q-dialog-plugin--dark q-dark" : "") + (e.progress !== false ? " q-dialog-plugin--progress" : "")), u = v(() => e.color || (l.value === true ? "amber" : "primary")), c = v(() => e.progress === false ? null : Lt(e.progress) === true ? { component: e.progress.spinner || wn, props: { color: e.progress.color || u.value } } : { component: wn, props: { color: u.value } }), s = v(() => e.prompt !== void 0 || e.options !== void 0), f = v(() => {
    if (s.value !== true) return {};
    const { model: T, isValid: j, items: W, ...U } = e.prompt !== void 0 ? e.prompt : e.options;
    return U;
  }), h = v(() => Lt(e.ok) === true || e.ok === true ? r.lang.label.ok : e.ok), m = v(() => Lt(e.cancel) === true || e.cancel === true ? r.lang.label.cancel : e.cancel), g = v(() => e.prompt !== void 0 ? e.prompt.isValid !== void 0 && e.prompt.isValid(o.value) !== true : e.options !== void 0 ? e.options.isValid !== void 0 && e.options.isValid(o.value) !== true : false), w = v(() => ({ color: u.value, label: h.value, ripple: false, disable: g.value, ...Lt(e.ok) === true ? e.ok : { flat: true }, "data-autofocus": e.focus === "ok" && s.value !== true || void 0, onClick: p })), x = v(() => ({ color: u.value, label: m.value, ripple: false, ...Lt(e.cancel) === true ? e.cancel : { flat: true }, "data-autofocus": e.focus === "cancel" && s.value !== true || void 0, onClick: b }));
  ge(() => e.prompt && e.prompt.model, P), ge(() => e.options && e.options.model, P);
  function k() {
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
  function P(T) {
    o.value = T;
  }
  function O(T) {
    g.value !== true && e.prompt.type !== "textarea" && yn(T, 13) === true && p();
  }
  function H(T, j) {
    return e.html === true ? d(Dl, { class: T, innerHTML: j }) : d(Dl, { class: T }, () => j);
  }
  function B() {
    return [d(Fh, { color: u.value, dense: true, autofocus: true, dark: l.value, ...f.value, modelValue: o.value, "onUpdate:modelValue": P, onKeyup: O })];
  }
  function L() {
    return [d(j1, { color: u.value, options: e.options.items, dark: l.value, ...f.value, modelValue: o.value, "onUpdate:modelValue": P })];
  }
  function N() {
    const T = [];
    return e.cancel && T.push(d(Je, x.value)), e.ok && T.push(d(Je, w.value)), d(wy, { class: e.stackButtons === true ? "items-end" : "", vertical: e.stackButtons, align: "right" }, () => T);
  }
  function q() {
    const T = [];
    return e.title && T.push(H("q-dialog__title", e.title)), e.progress !== false && T.push(d(Dl, { class: "q-dialog__progress" }, () => d(c.value.component, c.value.props))), e.message && T.push(H("q-dialog__message", e.message)), e.prompt !== void 0 ? T.push(d(Dl, { class: "scroll q-dialog-plugin__form" }, B)) : e.options !== void 0 && T.push(d(Yl, { dark: l.value }), d(Dl, { class: "scroll q-dialog-plugin__form" }, L), d(Yl, { dark: l.value })), (e.ok || e.cancel) && T.push(N()), T;
  }
  function R() {
    return [d(jm, { class: [i.value, e.cardClass], style: e.cardStyle, dark: l.value }, q)];
  }
  return Object.assign(n, { show: k, hide: y }), () => d(bi, { ref: a, onHide: C }, R);
} }), Ow = { install({ $q: e, parentApp: t }) {
  e.dialog = this.create = Ew(Fw, true, t);
} }, ur, cu, hf = 0, Ll = null, zt = {}, zl = {}, cg = { group: "__default_quasar_group__", delay: 0, message: false, html: false, spinnerSize: 80, spinnerColor: "", messageColor: "", backgroundColor: "", boxClass: "", spinner: wn, customClass: "" }, dg = { ...cg };
function Vw(e) {
  if ((e == null ? void 0 : e.group) !== void 0 && zl[e.group] !== void 0) return Object.assign(zl[e.group], e);
  const t = Lt(e) === true && e.ignoreDefaults === true ? { ...cg, ...e } : { ...dg, ...e };
  return zl[t.group] = t, t;
}
var Sn = Tl({ isActive: false }, { show(e) {
  zt = Vw(e);
  const { group: t } = zt;
  return Sn.isActive = true, ur !== void 0 ? (zt.uid = hf, cu.$forceUpdate()) : (zt.uid = ++hf, Ll !== null && clearTimeout(Ll), Ll = setTimeout(() => {
    Ll = null;
    const n = Ba("q-loading");
    ur = ci({ name: "QLoading", setup() {
      ct(() => {
        Wu(true);
      });
      function r() {
        Sn.isActive !== true && ur !== void 0 && (Wu(false), ur.unmount(n), Ps(n), ur = void 0, cu = void 0);
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
} }), Dw = Sn, ro = K(null), gf = Tl({ isActive: false }, { start: St, stop: St, increment: St, setDefaults: St, install({ $q: e, parentApp: t }) {
  if (e.loadingBar = this, this.__installed === true) {
    e.config.loadingBar !== void 0 && this.setDefaults(e.config.loadingBar);
    return;
  }
  const n = K(e.config.loadingBar !== void 0 ? { ...e.config.loadingBar } : {});
  function r() {
    gf.isActive = true;
  }
  function l() {
    gf.isActive = false;
  }
  const a = Ba("q-loading-bar");
  ci({ name: "LoadingBar", devtools: { hide: true }, setup: () => () => d(Lp, { ...n.value, onStart: r, onStop: l, ref: ro }) }, t).mount(a), Object.assign(this, { start(o) {
    ro.value.start(o);
  }, stop() {
    ro.value.stop();
  }, increment() {
    ro.value.increment.apply(null, arguments);
  }, setDefaults(o) {
    Lt(o) === true && Object.assign(n.value, o);
  } });
} }), Iw = 0, mo = {}, ho = {}, Cn = {}, fg = {}, zw = /^\s*$/, vg = [], Nw = [void 0, null, true, false, ""], Js = ["top-left", "top-right", "bottom-left", "bottom-right", "top", "bottom", "left", "right", "center"], Hw = ["top-left", "top-right", "bottom-left", "bottom-right"], Gr = { positive: { icon: (e) => e.iconSet.type.positive, color: "positive" }, negative: { icon: (e) => e.iconSet.type.negative, color: "negative" }, warning: { icon: (e) => e.iconSet.type.warning, color: "warning", textColor: "dark" }, info: { icon: (e) => e.iconSet.type.info, color: "info" }, ongoing: { group: false, timeout: 0, spinner: true, color: "grey-8" } };
function mg(e, t, n) {
  var _a3;
  if (!e) return Ur("parameter required");
  let r;
  const l = { textColor: "white" };
  if (e.ignoreDefaults !== true && Object.assign(l, mo), Lt(e) === false && (l.type && Object.assign(l, Gr[l.type]), e = { message: e }), Object.assign(l, Gr[e.type || l.type], e), typeof l.icon == "function" && (l.icon = l.icon(t)), l.spinner ? (l.spinner === true && (l.spinner = wn), l.spinner = Go(l.spinner)) : l.spinner = false, l.meta = { hasMedia: !!(l.spinner !== false || l.icon || l.avatar), hasText: bf(l.message) || bf(l.caption) }, l.position) {
    if (Js.includes(l.position) === false) return Ur("wrong position", e);
  } else l.position = "bottom";
  if (Nw.includes(l.timeout) === true) l.timeout = 5e3;
  else {
    const u = Number(l.timeout);
    if (isNaN(u) || u < 0) return Ur("wrong timeout", e);
    l.timeout = Number.isFinite(u) ? u : 0;
  }
  l.timeout === 0 ? l.progress = false : l.progress === true && (l.meta.progressClass = "q-notification__progress" + (l.progressClass ? ` ${l.progressClass}` : ""), l.meta.progressStyle = { animationDuration: `${l.timeout + 1e3}ms` });
  const a = (Array.isArray(e.actions) === true ? e.actions : []).concat(e.ignoreDefaults !== true && Array.isArray(mo.actions) === true ? mo.actions : []).concat(Array.isArray((_a3 = Gr[e.type]) == null ? void 0 : _a3.actions) === true ? Gr[e.type].actions : []), { closeBtn: o } = l;
  if (o && a.push({ label: typeof o == "string" ? o : t.lang.label.close }), l.actions = a.map(({ handler: u, noDismiss: c, ...s }) => ({ flat: true, ...s, onClick: typeof u == "function" ? () => {
    u(), c !== true && i();
  } : () => {
    i();
  } })), l.multiLine === void 0 && (l.multiLine = l.actions.length > 1), Object.assign(l.meta, { class: `q-notification row items-stretch q-notification--${l.multiLine === true ? "multi-line" : "standard"}` + (l.color !== void 0 ? ` bg-${l.color}` : "") + (l.textColor !== void 0 ? ` text-${l.textColor}` : "") + (l.classes !== void 0 ? ` ${l.classes}` : ""), wrapperClass: "q-notification__wrapper col relative-position border-radius-inherit " + (l.multiLine === true ? "column no-wrap justify-center" : "row items-center"), contentClass: "q-notification__content row items-center" + (l.multiLine === true ? "" : " col"), leftClass: l.meta.hasText === true ? "additional" : "single", attrs: { role: "alert", ...l.attrs } }), l.group === false ? (l.group = void 0, l.meta.group = void 0) : ((l.group === void 0 || l.group === true) && (l.group = [l.message, l.caption, l.multiline].concat(l.actions.map((u) => `${u.label}*${u.icon}`)).join("|")), l.meta.group = l.group + "|" + l.position), l.actions.length === 0 ? l.actions = void 0 : l.meta.actionsClass = "q-notification__actions row items-center " + (l.multiLine === true ? "justify-end" : "col-auto") + (l.meta.hasMedia === true ? " q-notification__actions--with-media" : ""), n !== void 0) {
    n.notif.meta.timer && (clearTimeout(n.notif.meta.timer), n.notif.meta.timer = void 0), l.meta.uid = n.notif.meta.uid;
    const u = Cn[l.position].value.indexOf(n.notif);
    Cn[l.position].value[u] = l;
  } else {
    const u = ho[l.meta.group];
    if (u === void 0) {
      if (l.meta.uid = Iw++, l.meta.badge = 1, ["left", "right", "center"].indexOf(l.position) !== -1) Cn[l.position].value.splice(Math.floor(Cn[l.position].value.length / 2), 0, l);
      else {
        const c = l.position.indexOf("top") !== -1 ? "unshift" : "push";
        Cn[l.position].value[c](l);
      }
      l.group !== void 0 && (ho[l.meta.group] = l);
    } else {
      if (u.meta.timer && (clearTimeout(u.meta.timer), u.meta.timer = void 0), l.badgePosition !== void 0) {
        if (Hw.includes(l.badgePosition) === false) return Ur("wrong badgePosition", e);
      } else l.badgePosition = `top-${l.position.indexOf("left") !== -1 ? "right" : "left"}`;
      l.meta.uid = u.meta.uid, l.meta.badge = u.meta.badge + 1, l.meta.badgeClass = `q-notification__badge q-notification__badge--${l.badgePosition}` + (l.badgeColor !== void 0 ? ` bg-${l.badgeColor}` : "") + (l.badgeTextColor !== void 0 ? ` text-${l.badgeTextColor}` : "") + (l.badgeClass ? ` ${l.badgeClass}` : "");
      const c = Cn[l.position].value.indexOf(u);
      Cn[l.position].value[c] = ho[l.meta.group] = l;
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
    e.group !== void 0 && delete ho[e.meta.group];
    const n = vg["" + e.meta.uid];
    if (n) {
      const { width: r, height: l } = getComputedStyle(n);
      n.style.left = `${n.offsetLeft}px`, n.style.width = r, n.style.height = l;
    }
    Cn[e.position].value.splice(t, 1), typeof e.onDismiss == "function" && e.onDismiss();
  }
}
function bf(e) {
  return e != null && zw.test(e) !== true;
}
function Ur(e, t) {
  return console.error(`Notify: ${e}`, t), false;
}
function Uw() {
  return he({ name: "QNotifications", devtools: { hide: true }, setup() {
    return () => d("div", { class: "q-notifications" }, Js.map((e) => d(ep, { key: e, class: fg[e], tag: "div", name: `q-notification--${e}` }, () => Cn[e].value.map((t) => {
      const n = t.meta, r = [];
      if (n.hasMedia === true && (t.spinner !== false ? r.push(d(t.spinner, { class: "q-notification__spinner q-notification__spinner--" + n.leftClass, color: t.spinnerColor, size: t.spinnerSize })) : t.icon ? r.push(d(et, { class: "q-notification__icon q-notification__icon--" + n.leftClass, name: t.icon, color: t.iconColor, size: t.iconSize, role: "img" })) : t.avatar && r.push(d(Iu, { class: "q-notification__avatar q-notification__avatar--" + n.leftClass }, () => d("img", { src: t.avatar, "aria-hidden": "true" })))), n.hasText === true) {
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
  Lt(e) === true && Object.assign(mo, e);
}, registerType(e, t) {
  Lt(t) === true && (Gr[e] = t);
}, install({ $q: e, parentApp: t }) {
  if (e.notify = this.create = (n) => mg(n, e), e.notify.setDefaults = this.setDefaults, e.notify.registerType = this.registerType, e.config.notify !== void 0 && this.setDefaults(e.config.notify), this.__installed !== true) {
    Js.forEach((r) => {
      Cn[r] = K([]);
      const l = ["left", "center", "right"].includes(r) === true ? "center" : r.indexOf("top") !== -1 ? "top" : "bottom", a = r.indexOf("left") !== -1 ? "start" : r.indexOf("right") !== -1 ? "end" : "center", o = ["left", "right"].includes(r) ? `items-${r === "left" ? "start" : "end"} justify-center` : r === "center" ? "flex-center" : `items-${a}`;
      fg[r] = `q-notifications__list q-notifications__list--${l} fixed column no-wrap ${o}`;
    });
    const n = Ba("q-notify");
    ci(Uw(), t).mount(n);
  }
} };
function Kw(e) {
  return Ou(e) === true ? "__q_date|" + e.getTime() : Tp(e) === true ? "__q_expr|" + e.source : typeof e == "number" ? "__q_numb|" + e : typeof e == "boolean" ? "__q_bool|" + (e ? "1" : "0") : typeof e == "string" ? "__q_strn|" + e : typeof e == "function" ? "__q_strn|" + e.toString() : e === Object(e) ? "__q_objt|" + JSON.stringify(e) : e;
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
  }, getAllKeys: () => [], set: St, setItem: St, remove: St, removeItem: St, clear: St, isEmpty: () => true };
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
function ec() {
  return Mt(cm);
}
var Zw = { version: "2.18.1", install: Mp, lang: si, iconSet: sm };
function Jw(e, t) {
  const n = ys("router-view");
  return Tn(), Ol(n, { class: "view" });
}
const yg = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, l] of t) n[r] = l;
  return n;
}, ex = {}, tx = yg(ex, [["render", Jw]]), nx = "M10,2C8.18,2 6.47,2.5 5,3.35C8,5.08 10,8.3 10,12C10,15.7 8,18.92 5,20.65C6.47,21.5 8.18,22 10,22A10,10 0 0,0 20,12A10,10 0 0,0 10,2Z", lx = "M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z", rx = /* @__PURE__ */ Cl({ __name: "Quasar", setup(e) {
  const t = ec();
  let n = K(false), r = K(false), l = K(true);
  const a = "production";
  return (o, i) => {
    const u = ys("router-view"), c = z0("ripple");
    return Tn(), Ol(Ve(O1), { view: "hHh LpR fFf" }, { default: At(() => [Ye(Ve(C1), { class: "bg-primary text-white", elevated: "", id: "header" }, { default: At(() => [Ye(Ve(Zd), null, { default: At(() => [Ye(Ve(Je), { dense: "", flat: "", round: "", icon: "menu", onClick: i[0] || (i[0] = (s) => yt(n) ? n.value = !Ve(n) : n = !Ve(n)) }), Ye(Ve(Jd), null, { default: At(() => [Ye(Ve(Iu), null, { default: At(() => i[10] || (i[10] = [wt("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" }, null, -1)])), _: 1 }), i[11] || (i[11] = Vl("\xA0WebGL mtg"))]), _: 1 }), Ve(t).dark.isActive ? (Tn(), Ol(Ve(Je), { key: 0, dense: "", flat: "", round: "", icon: Ve(lx), onClick: i[1] || (i[1] = (s) => Ve(t).dark.set(false)) }, null, 8, ["icon"])) : kc("", true), Ve(t).dark.isActive ? kc("", true) : (Tn(), Ol(Ve(Je), { key: 1, dense: "", flat: "", round: "", icon: Ve(nx), onClick: i[2] || (i[2] = (s) => Ve(t).dark.set(true)) }, null, 8, ["icon"])), Ye(Ve(Je), { dense: "", flat: "", round: "", icon: "menu", onClick: i[3] || (i[3] = (s) => yt(r) ? r.value = !Ve(r) : r = !Ve(r)) })]), _: 1 })]), _: 1 }), Ye(Ve($d), { modelValue: Ve(n), "onUpdate:modelValue": i[8] || (i[8] = (s) => yt(n) ? n.value = s : n = s), side: "left", bordered: "", mini: Ve(l), overlay: "" }, { default: At(() => [Ye(Ve(Y1), { class: "fit" }, { default: At(() => [Ye(Ve(Vh), { class: "menu-list padding" }, { default: At(() => [cn((Tn(), Ol(Ve(qr), { clickable: "", onMouseover: i[4] || (i[4] = (s) => yt(l) ? l.value = false : l = false), onMouseout: i[5] || (i[5] = (s) => yt(l) ? l.value = true : l = true) }, { default: At(() => [Ye(Ve(hn), { avatar: "" }, { default: At(() => [Ye(Ve(et), { name: "inbox" })]), _: 1 }), Ye(Ve(hn), null, { default: At(() => i[12] || (i[12] = [Vl("inbox")])), _: 1 })]), _: 1 })), [[c]]), cn((Tn(), Ol(Ve(qr), { clickable: "", onMouseover: i[6] || (i[6] = (s) => yt(l) ? l.value = false : l = false), onMouseout: i[7] || (i[7] = (s) => yt(l) ? l.value = true : l = true) }, { default: At(() => [Ye(Ve(hn), { avatar: "" }, { default: At(() => [Ye(Ve(et), { name: "login" })]), _: 1 }), Ye(Ve(hn), null, { default: At(() => i[13] || (i[13] = [Vl("login")])), _: 1 })]), _: 1 })), [[c]])]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["modelValue", "mini"]), Ye(Ve($d), { modelValue: Ve(r), "onUpdate:modelValue": i[9] || (i[9] = (s) => yt(r) ? r.value = s : r = s), side: "right", bordered: "", overlay: "" }, { default: At(() => i[14] || (i[14] = [Vl("right")])), _: 1 }, 8, ["modelValue"]), Ye(Ve(U1), null, { default: At(() => [Ye(u)]), _: 1 }), Ye(Ve(S1), { class: "bg-grey-8 text-orange", elevated: "", id: "footer" }, { default: At(() => [Ye(Ve(Zd), null, { default: At(() => [Ye(Ve(Jd), { style: { "font-size": "1.0em" } }, { default: At(() => [Ye(Ve(Iu), { class: "q-mr-sm", size: "sm" }, { default: At(() => i[15] || (i[15] = [wt("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" }, null, -1)])), _: 1 }), Vl("\xA0vite / vue / quasar / wasm / webgl mtg \xA0mode: " + ta(Ve(a)), 1)]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 });
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
    n[r] = $n(l) ? l.map(e) : e(l);
  }
  return n;
}
const fa = () => {
}, $n = Array.isArray, wg = /#/g, ox = /&/g, ix = /\//g, ux = /=/g, sx = /\?/g, xg = /\+/g, cx = /%5B/g, dx = /%5D/g, Sg = /%5E/g, fx = /%60/g, Cg = /%7B/g, vx = /%7C/g, kg = /%7D/g, mx = /%20/g;
function tc(e) {
  return encodeURI("" + e).replace(vx, "|").replace(cx, "[").replace(dx, "]");
}
function hx(e) {
  return tc(e).replace(Cg, "{").replace(kg, "}").replace(Sg, "^");
}
function Ju(e) {
  return tc(e).replace(xg, "%2B").replace(mx, "+").replace(wg, "%23").replace(ox, "%26").replace(fx, "`").replace(Cg, "{").replace(kg, "}").replace(Sg, "^");
}
function gx(e) {
  return Ju(e).replace(ux, "%3D");
}
function bx(e) {
  return tc(e).replace(wg, "%23").replace(sx, "%3F");
}
function px(e) {
  return e == null ? "" : bx(e).replace(ix, "%2F");
}
function qa(e) {
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
  return i < u && i >= 0 && (u = -1), u > -1 && (r = t.slice(0, u), a = t.slice(u + 1, i > -1 ? i : t.length), l = e(a)), i > -1 && (r = r || t.slice(0, i), o = t.slice(i, t.length)), r = Cx(r ?? t, n), { fullPath: r + (a && "?") + a + o, path: r, query: l, hash: qa(o) };
}
function wx(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function pf(e, t) {
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
  return $n(e) ? yf(e, t) : $n(t) ? yf(t, e) : e === t;
}
function yf(e, t) {
  return $n(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
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
var Ma;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Ma || (Ma = {}));
var va;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(va || (va = {}));
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
function _f(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const es = /* @__PURE__ */ new Map();
function Rx(e, t) {
  es.set(e, t);
}
function Ax(e) {
  const t = es.get(e);
  return es.delete(e), t;
}
let $x = () => location.protocol + "//" + location.host;
function qg(e, t) {
  const { pathname: n, search: r, hash: l } = t, a = e.indexOf("#");
  if (a > -1) {
    let i = l.includes(e.slice(a)) ? e.slice(a).length : 1, u = l.slice(i);
    return u[0] !== "/" && (u = "/" + u), pf(u, "");
  }
  return pf(n, e) + r + l;
}
function Px(e, t, n, r) {
  let l = [], a = [], o = null;
  const i = ({ state: h }) => {
    const m = qg(e, location), g = n.value, w = t.value;
    let x = 0;
    if (h) {
      if (n.value = m, t.value = h, o && o === g) {
        o = null;
        return;
      }
      x = w ? h.position - w.position : 0;
    } else r(m);
    l.forEach((k) => {
      k(n.value, g, { delta: x, type: Ma.pop, direction: x ? x > 0 ? va.forward : va.back : va.unknown });
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
function wf(e, t, n, r = false, l = false) {
  return { back: e, current: t, forward: n, replaced: r, position: window.history.length, scroll: l ? xi() : null };
}
function Lx(e) {
  const { history: t, location: n } = window, r = { value: qg(e, n) }, l = { value: t.state };
  l.value || a(r.value, { back: null, current: r.value, forward: null, position: t.length - 1, replaced: true, scroll: null }, true);
  function a(u, c, s) {
    const f = e.indexOf("#"), h = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + u : $x() + e + u;
    try {
      t[s ? "replaceState" : "pushState"](c, "", h), l.value = c;
    } catch (m) {
      console.error(m), n[s ? "replace" : "assign"](h);
    }
  }
  function o(u, c) {
    const s = ut({}, t.state, wf(l.value.back, u, l.value.forward, true), c, { position: l.value.position });
    a(u, s, true), r.value = u;
  }
  function i(u, c) {
    const s = ut({}, l.value, t.state, { forward: u, scroll: xi() });
    a(s.current, s, true);
    const f = ut({}, wf(r.value, u, null), { position: s.position + 1 }, c);
    a(u, f, false), r.value = u;
  }
  return { location: r, state: l, push: i, replace: o };
}
function Bx(e) {
  e = kx(e);
  const t = Lx(e), n = Px(e, t.state, t.location, t.replace);
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
var xf;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(xf || (xf = {}));
function Er(e, t) {
  return ut(new Error(), { type: e, [Eg]: true }, t);
}
function Un(e, t) {
  return e instanceof Error && Eg in e && (t == null || !!(e.type & t));
}
const Sf = "[^/]+?", Vx = { sensitive: false, strict: false, start: true, end: true }, Dx = /[.+*?^${}()[\]/\\]/g;
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
        const { value: g, repeatable: w, optional: x, regexp: k } = h;
        a.push({ name: g, repeatable: w, optional: x });
        const y = k || Sf;
        if (y !== Sf) {
          m += 10;
          try {
            new RegExp(`(${y})`);
          } catch (b) {
            throw new Error(`Invalid custom RegExp for param "${g}" (${y}): ` + b.message);
          }
        }
        let p = w ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`;
        f || (p = x && c.length < 2 ? `(?:/${p})` : "/" + p), x && (p += "?"), l += p, m += 20, x && (m += -8), w && (m += -20), y === ".*" && (m += -50);
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
        const { value: g, repeatable: w, optional: x } = m, k = g in c ? c[g] : "";
        if ($n(k) && !w) throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
        const y = $n(k) ? k.join("/") : k;
        if (!y) if (x) h.length < 2 && (s.endsWith("/") ? s = s.slice(0, -1) : f = true);
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
    if (Cf(r)) return 1;
    if (Cf(l)) return -1;
  }
  return l.length - r.length;
}
function Cf(e) {
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
  t = Mf({ strict: false, end: true, sensitive: false }, t);
  function l(f) {
    return r.get(f);
  }
  function a(f, h, m) {
    const g = !m, w = Tf(f);
    w.aliasOf = m && m.record;
    const x = Mf(t, f), k = [w];
    if ("alias" in f) {
      const b = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const C of b) k.push(Tf(ut({}, w, { components: m ? m.record.components : w.components, path: C, aliasOf: m ? m.record : w })));
    }
    let y, p;
    for (const b of k) {
      const { path: C } = b;
      if (h && C[0] !== "/") {
        const P = h.record.path, O = P[P.length - 1] === "/" ? "" : "/";
        b.path = h.record.path + (C && O + C);
      }
      if (y = Ux(b, h, x), m ? m.alias.push(y) : (p = p || y, p !== y && p.alias.push(y), g && f.name && !qf(y) && o(f.name)), Ag(y) && u(y), w.children) {
        const P = w.children;
        for (let O = 0; O < P.length; O++) a(P[O], y, m && m.children[O]);
      }
      m = m || y;
    }
    return p ? () => {
      o(p);
    } : fa;
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
    n.splice(h, 0, f), f.record.name && !qf(f) && r.set(f.record.name, f);
  }
  function c(f, h) {
    let m, g = {}, w, x;
    if ("name" in f && f.name) {
      if (m = r.get(f.name), !m) throw Er(1, { location: f });
      x = m.record.name, g = ut(kf(h.params, m.keys.filter((p) => !p.optional).concat(m.parent ? m.parent.keys.filter((p) => p.optional) : []).map((p) => p.name)), f.params && kf(f.params, m.keys.map((p) => p.name))), w = m.stringify(g);
    } else if (f.path != null) w = f.path, m = n.find((p) => p.re.test(w)), m && (g = m.parse(w), x = m.record.name);
    else {
      if (m = h.name ? r.get(h.name) : n.find((p) => p.re.test(h.path)), !m) throw Er(1, { location: f, currentLocation: h });
      x = m.record.name, g = ut({}, h.params, f.params), w = m.stringify(g);
    }
    const k = [];
    let y = m;
    for (; y; ) k.unshift(y.record), y = y.parent;
    return { name: x, path: w, params: g, matched: k, meta: Wx(k) };
  }
  e.forEach((f) => a(f));
  function s() {
    n.length = 0, r.clear();
  }
  return { addRoute: a, resolve: c, removeRoute: o, clearRoutes: s, getRoutes: i, getRecordMatcher: l };
}
function kf(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Tf(e) {
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: Kx(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Kx(e) {
  const t = {}, n = e.props || false;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function qf(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function Wx(e) {
  return e.reduce((t, n) => ut(t, n.meta), {});
}
function Mf(e, t) {
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
    const a = r[l].replace(xg, " "), o = a.indexOf("="), i = qa(o < 0 ? a : a.slice(0, o)), u = o < 0 ? null : qa(a.slice(o + 1));
    if (i in t) {
      let c = t[i];
      $n(c) || (c = t[i] = [c]), c.push(u);
    } else t[i] = u;
  }
  return t;
}
function Ef(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (n = gx(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    ($n(r) ? r.map((a) => a && Ju(a)) : [r && Ju(r)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function Zx(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = $n(r) ? r.map((l) => l == null ? null : "" + l) : r == null ? r : "" + r);
  }
  return t;
}
const Jx = Symbol(""), Rf = Symbol(""), nc = Symbol(""), $g = Symbol(""), ts = Symbol("");
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
function Af(e) {
  const t = Mt(nc), n = Mt($g), r = v(() => {
    const u = Ve(e.to);
    return t.resolve(u);
  }), l = v(() => {
    const { matched: u } = r.value, { length: c } = u, s = u[c - 1], f = n.matched;
    if (!s || !f.length) return -1;
    const h = f.findIndex(Mr.bind(null, s));
    if (h > -1) return h;
    const m = $f(u[c - 2]);
    return c > 1 && $f(s) === m && f[f.length - 1].path !== m ? f.findIndex(Mr.bind(null, u[c - 2])) : h;
  }), a = v(() => l.value > -1 && rS(n.params, r.value.params)), o = v(() => l.value > -1 && l.value === n.matched.length - 1 && Tg(n.params, r.value.params));
  function i(u = {}) {
    if (lS(u)) {
      const c = t[Ve(e.replace) ? "replace" : "push"](Ve(e.to)).catch(fa);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c;
    }
    return Promise.resolve();
  }
  return { route: r, href: v(() => r.value.href), isActive: a, isExactActive: o, navigate: i };
}
function eS(e) {
  return e.length === 1 ? e[0] : e;
}
const tS = /* @__PURE__ */ Cl({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" } }, useLink: Af, setup(e, { slots: t }) {
  const n = On(Af(e)), { options: r } = Mt(nc), l = v(() => ({ [Pf(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive, [Pf(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive }));
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
    } else if (!$n(l) || l.length !== r.length || r.some((a, o) => a !== l[o])) return false;
  }
  return true;
}
function $f(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Pf = (e, t, n) => e ?? t ?? n, aS = /* @__PURE__ */ Cl({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: n }) {
  const r = Mt(ts), l = v(() => e.route || r.value), a = Mt(Rf, 0), o = v(() => {
    let c = Ve(a);
    const { matched: s } = l.value;
    let f;
    for (; (f = s[c]) && !f.components; ) c++;
    return c;
  }), i = v(() => l.value.matched[o.value]);
  gn(Rf, v(() => o.value + 1)), gn(Jx, i), gn(ts, l);
  const u = K();
  return ge(() => [u.value, i.value, e.name], ([c, s, f], [h, m, g]) => {
    s && (s.instances[f] = c, m && m !== s && c && c === h && (s.leaveGuards.size || (s.leaveGuards = m.leaveGuards), s.updateGuards.size || (s.updateGuards = m.updateGuards))), c && s && (!m || !Mr(s, m) || !h) && (s.enterCallbacks[f] || []).forEach((w) => w(c));
  }, { flush: "post" }), () => {
    const c = l.value, s = e.name, f = i.value, h = f && f.components[s];
    if (!h) return Lf(n.default, { Component: h, route: c });
    const m = f.props[s], g = m ? m === true ? c.params : typeof m == "function" ? m(c) : m : null, x = d(h, ut({}, g, t, { onVnodeUnmounted: (k) => {
      k.component.isUnmounted && (f.instances[s] = null);
    }, ref: u }));
    return Lf(n.default, { Component: x, route: c }) || x;
  };
} });
function Lf(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const oS = aS;
function iS(e) {
  const t = Qx(e.routes, e), n = e.parseQuery || Gx, r = e.stringifyQuery || Ef, l = e.history, a = Qr(), o = Qr(), i = Qr(), u = y0(ol);
  let c = ol;
  cr && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const s = du.bind(null, (A) => "" + A), f = du.bind(null, px), h = du.bind(null, qa);
  function m(A, Y) {
    let V, ne;
    return Mg(A) ? (V = t.getRecordMatcher(A), ne = Y) : ne = A, t.addRoute(ne, V);
  }
  function g(A) {
    const Y = t.getRecordMatcher(A);
    Y && t.removeRoute(Y);
  }
  function w() {
    return t.getRoutes().map((A) => A.record);
  }
  function x(A) {
    return !!t.getRecordMatcher(A);
  }
  function k(A, Y) {
    if (Y = ut({}, Y || u.value), typeof A == "string") {
      const I = fu(n, A, Y.path), te = t.resolve({ path: I.path }, Y), le = l.createHref(I.fullPath);
      return ut(I, te, { params: h(te.params), hash: qa(I.hash), redirectedFrom: void 0, href: le });
    }
    let V;
    if (A.path != null) V = ut({}, A, { path: fu(n, A.path, Y.path).path });
    else {
      const I = ut({}, A.params);
      for (const te in I) I[te] == null && delete I[te];
      V = ut({}, A, { params: f(I) }), Y.params = f(Y.params);
    }
    const ne = t.resolve(V, Y), be = A.hash || "";
    ne.params = s(h(ne.params));
    const S = wx(r, ut({}, A, { hash: hx(be), path: ne.path })), M = l.createHref(S);
    return ut({ fullPath: S, hash: be, query: r === Ef ? Zx(A.query) : A.query || {} }, ne, { redirectedFrom: void 0, href: M });
  }
  function y(A) {
    return typeof A == "string" ? fu(n, A, u.value.path) : ut({}, A);
  }
  function p(A, Y) {
    if (c !== A) return Er(8, { from: Y, to: A });
  }
  function b(A) {
    return O(A);
  }
  function C(A) {
    return b(ut(y(A), { replace: true }));
  }
  function P(A) {
    const Y = A.matched[A.matched.length - 1];
    if (Y && Y.redirect) {
      const { redirect: V } = Y;
      let ne = typeof V == "function" ? V(A) : V;
      return typeof ne == "string" && (ne = ne.includes("?") || ne.includes("#") ? ne = y(ne) : { path: ne }, ne.params = {}), ut({ query: A.query, hash: A.hash, params: ne.path != null ? {} : A.params }, ne);
    }
  }
  function O(A, Y) {
    const V = c = k(A), ne = u.value, be = A.state, S = A.force, M = A.replace === true, I = P(V);
    if (I) return O(ut(y(I), { state: typeof I == "object" ? ut({}, be, I.state) : be, force: S, replace: M }), Y || V);
    const te = V;
    te.redirectedFrom = Y;
    let le;
    return !S && xx(r, ne, V) && (le = Er(16, { to: te, from: ne }), X(ne, ne, true, false)), (le ? Promise.resolve(le) : L(te, ne)).catch((E) => Un(E) ? Un(E, 2) ? E : ye(E) : Z(E, te, ne)).then((E) => {
      if (E) {
        if (Un(E, 2)) return O(ut({ replace: M }, y(E.to), { state: typeof E.to == "object" ? ut({}, be, E.to.state) : be, force: S }), Y || te);
      } else E = q(te, ne, true, M, be);
      return N(te, ne, E), E;
    });
  }
  function H(A, Y) {
    const V = p(A, Y);
    return V ? Promise.reject(V) : Promise.resolve();
  }
  function B(A) {
    const Y = F.values().next().value;
    return Y && typeof Y.runWithContext == "function" ? Y.runWithContext(A) : A();
  }
  function L(A, Y) {
    let V;
    const [ne, be, S] = uS(A, Y);
    V = vu(ne.reverse(), "beforeRouteLeave", A, Y);
    for (const I of ne) I.leaveGuards.forEach((te) => {
      V.push(ml(te, A, Y));
    });
    const M = H.bind(null, A, Y);
    return V.push(M), $(V).then(() => {
      V = [];
      for (const I of a.list()) V.push(ml(I, A, Y));
      return V.push(M), $(V);
    }).then(() => {
      V = vu(be, "beforeRouteUpdate", A, Y);
      for (const I of be) I.updateGuards.forEach((te) => {
        V.push(ml(te, A, Y));
      });
      return V.push(M), $(V);
    }).then(() => {
      V = [];
      for (const I of S) if (I.beforeEnter) if ($n(I.beforeEnter)) for (const te of I.beforeEnter) V.push(ml(te, A, Y));
      else V.push(ml(I.beforeEnter, A, Y));
      return V.push(M), $(V);
    }).then(() => (A.matched.forEach((I) => I.enterCallbacks = {}), V = vu(S, "beforeRouteEnter", A, Y, B), V.push(M), $(V))).then(() => {
      V = [];
      for (const I of o.list()) V.push(ml(I, A, Y));
      return V.push(M), $(V);
    }).catch((I) => Un(I, 8) ? I : Promise.reject(I));
  }
  function N(A, Y, V) {
    i.list().forEach((ne) => B(() => ne(A, Y, V)));
  }
  function q(A, Y, V, ne, be) {
    const S = p(A, Y);
    if (S) return S;
    const M = Y === ol, I = cr ? history.state : {};
    V && (ne || M ? l.replace(A.fullPath, ut({ scroll: M && I && I.scroll }, be)) : l.push(A.fullPath, be)), u.value = A, X(A, Y, V, M), ye();
  }
  let R;
  function T() {
    R || (R = l.listen((A, Y, V) => {
      if (!me.listening) return;
      const ne = k(A), be = P(ne);
      if (be) {
        O(ut(be, { replace: true, force: true }), ne).catch(fa);
        return;
      }
      c = ne;
      const S = u.value;
      cr && Rx(_f(S.fullPath, V.delta), xi()), L(ne, S).catch((M) => Un(M, 12) ? M : Un(M, 2) ? (O(ut(y(M.to), { force: true }), ne).then((I) => {
        Un(I, 20) && !V.delta && V.type === Ma.pop && l.go(-1, false);
      }).catch(fa), Promise.reject()) : (V.delta && l.go(-V.delta, false), Z(M, ne, S))).then((M) => {
        M = M || q(ne, S, false), M && (V.delta && !Un(M, 8) ? l.go(-V.delta, false) : V.type === Ma.pop && Un(M, 20) && l.go(-1, false)), N(ne, S, M);
      }).catch(fa);
    }));
  }
  let j = Qr(), W = Qr(), U;
  function Z(A, Y, V) {
    ye(A);
    const ne = W.list();
    return ne.length ? ne.forEach((be) => be(A, Y, V)) : console.error(A), Promise.reject(A);
  }
  function ae() {
    return U && u.value !== ol ? Promise.resolve() : new Promise((A, Y) => {
      j.add([A, Y]);
    });
  }
  function ye(A) {
    return U || (U = !A, T(), j.list().forEach(([Y, V]) => A ? V(A) : Y()), j.reset()), A;
  }
  function X(A, Y, V, ne) {
    const { scrollBehavior: be } = e;
    if (!cr || !be) return Promise.resolve();
    const S = !V && Ax(_f(A.fullPath, 0)) || (ne || !V) && history.state && history.state.scroll || null;
    return Qe().then(() => be(A, Y, S)).then((M) => M && Ex(M)).catch((M) => Z(M, A, Y));
  }
  const _ = (A) => l.go(A);
  let D;
  const F = /* @__PURE__ */ new Set(), me = { currentRoute: u, listening: true, addRoute: m, removeRoute: g, clearRoutes: t.clearRoutes, hasRoute: x, getRoutes: w, resolve: k, options: e, push: b, replace: C, go: _, back: () => _(-1), forward: () => _(1), beforeEach: a.add, beforeResolve: o.add, afterEach: i.add, onError: W.add, isReady: ae, install(A) {
    const Y = this;
    A.component("RouterLink", nS), A.component("RouterView", oS), A.config.globalProperties.$router = Y, Object.defineProperty(A.config.globalProperties, "$route", { enumerable: true, get: () => Ve(u) }), cr && !D && u.value === ol && (D = true, b(l.location).catch((be) => {
    }));
    const V = {};
    for (const be in ol) Object.defineProperty(V, be, { get: () => u.value[be], enumerable: true });
    A.provide(nc, Y), A.provide($g, ms(V)), A.provide(ts, u);
    const ne = A.unmount;
    F.add(A), A.unmount = function() {
      F.delete(A), F.size < 1 && (c = ol, R && R(), R = null, u.value = ol, D = false, U = false), ne();
    };
  } };
  function $(A) {
    return A.reduce((Y, V) => Y.then(() => B(V)), Promise.resolve());
  }
  return me;
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
const Pg = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Pg.decode();
let Zr = null;
function go() {
  return (Zr === null || Zr.byteLength === 0) && (Zr = new Uint8Array(en.memory.buffer)), Zr;
}
function mu(e, t) {
  return e = e >>> 0, Pg.decode(go().subarray(e, e + t));
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
let ns = 0;
const bo = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, fS = typeof bo.encodeInto == "function" ? function(e, t) {
  return bo.encodeInto(e, t);
} : function(e, t) {
  const n = bo.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function vS(e, t, n) {
  if (typeof e != "string") throw new Error(`expected a string argument, found ${typeof e}`);
  if (n === void 0) {
    const i = bo.encode(e), u = t(i.length, 1) >>> 0;
    return go().subarray(u, u + i.length).set(i), ns = i.length, u;
  }
  let r = e.length, l = t(r, 1) >>> 0;
  const a = go();
  let o = 0;
  for (; o < r; o++) {
    const i = e.charCodeAt(o);
    if (i > 127) break;
    a[l + o] = i;
  }
  if (o !== r) {
    o !== 0 && (e = e.slice(o)), l = n(l, r, r = o + e.length * 3, 1) >>> 0;
    const i = go().subarray(l + o, l + r), u = fS(e, i);
    if (u.read !== e.length) throw new Error("failed to pass whole string");
    o += u.written, l = n(l, r, o, 1) >>> 0;
  }
  return ns = o, l;
}
function mS(e) {
  const t = en.__wbindgen_export_2.get(e);
  return en.__externref_table_dealloc(e), t;
}
function hS(e) {
  const t = vS(e, en.__wbindgen_malloc, en.__wbindgen_realloc), n = ns, r = en.mtg(t, n);
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
    const l = ys("router-view");
    return Tn(), oi(nn, null, [Ye(Ve(Je), { class: "q-ma-lg", color: "primary", onClick: t }, { default: At(() => r[0] || (r[0] = [Vl("test")])), _: 1 }), Ye(l)], 64);
  };
} }), _S = yg(yS, [["__scopeId", "data-v-17fee452"]]);
var wS = 1e-6, Bf = typeof Float32Array < "u" ? Float32Array : Array;
Math.hypot || (Math.hypot = function() {
  for (var e = 0, t = arguments.length; t--; ) e += arguments[t] * arguments[t];
  return Math.sqrt(e);
});
function hu() {
  var e = new Bf(16);
  return Bf != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e;
}
function xS(e, t) {
  if (e === t) {
    var n = t[1], r = t[2], l = t[3], a = t[6], o = t[7], i = t[11];
    e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = n, e[6] = t[9], e[7] = t[13], e[8] = r, e[9] = a, e[11] = t[14], e[12] = l, e[13] = o, e[14] = i;
  } else e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15];
  return e;
}
function SS(e, t) {
  var n = t[0], r = t[1], l = t[2], a = t[3], o = t[4], i = t[5], u = t[6], c = t[7], s = t[8], f = t[9], h = t[10], m = t[11], g = t[12], w = t[13], x = t[14], k = t[15], y = n * i - r * o, p = n * u - l * o, b = n * c - a * o, C = r * u - l * i, P = r * c - a * i, O = l * c - a * u, H = s * w - f * g, B = s * x - h * g, L = s * k - m * g, N = f * x - h * w, q = f * k - m * w, R = h * k - m * x, T = y * R - p * q + b * N + C * L - P * B + O * H;
  return T ? (T = 1 / T, e[0] = (i * R - u * q + c * N) * T, e[1] = (l * q - r * R - a * N) * T, e[2] = (w * O - x * P + k * C) * T, e[3] = (h * P - f * O - m * C) * T, e[4] = (u * L - o * R - c * B) * T, e[5] = (n * R - l * L + a * B) * T, e[6] = (x * b - g * O - k * p) * T, e[7] = (s * O - h * b + m * p) * T, e[8] = (o * q - i * L + c * H) * T, e[9] = (r * L - n * q - a * H) * T, e[10] = (g * P - w * b + k * y) * T, e[11] = (f * b - s * P - m * y) * T, e[12] = (i * B - o * N - u * H) * T, e[13] = (n * N - r * B + l * H) * T, e[14] = (w * p - g * C - x * y) * T, e[15] = (s * C - f * p + h * y) * T, e) : null;
}
function gu(e, t, n) {
  var r = n[0], l = n[1], a = n[2], o, i, u, c, s, f, h, m, g, w, x, k;
  return t === e ? (e[12] = t[0] * r + t[4] * l + t[8] * a + t[12], e[13] = t[1] * r + t[5] * l + t[9] * a + t[13], e[14] = t[2] * r + t[6] * l + t[10] * a + t[14], e[15] = t[3] * r + t[7] * l + t[11] * a + t[15]) : (o = t[0], i = t[1], u = t[2], c = t[3], s = t[4], f = t[5], h = t[6], m = t[7], g = t[8], w = t[9], x = t[10], k = t[11], e[0] = o, e[1] = i, e[2] = u, e[3] = c, e[4] = s, e[5] = f, e[6] = h, e[7] = m, e[8] = g, e[9] = w, e[10] = x, e[11] = k, e[12] = o * r + s * l + g * a + t[12], e[13] = i * r + f * l + w * a + t[13], e[14] = u * r + h * l + x * a + t[14], e[15] = c * r + m * l + k * a + t[15]), e;
}
function bu(e, t, n, r) {
  var l = r[0], a = r[1], o = r[2], i = Math.hypot(l, a, o), u, c, s, f, h, m, g, w, x, k, y, p, b, C, P, O, H, B, L, N, q, R, T, j;
  return i < wS ? null : (i = 1 / i, l *= i, a *= i, o *= i, u = Math.sin(n), c = Math.cos(n), s = 1 - c, f = t[0], h = t[1], m = t[2], g = t[3], w = t[4], x = t[5], k = t[6], y = t[7], p = t[8], b = t[9], C = t[10], P = t[11], O = l * l * s + c, H = a * l * s + o * u, B = o * l * s - a * u, L = l * a * s - o * u, N = a * a * s + c, q = o * a * s + l * u, R = l * o * s + a * u, T = a * o * s - l * u, j = o * o * s + c, e[0] = f * O + w * H + p * B, e[1] = h * O + x * H + b * B, e[2] = m * O + k * H + C * B, e[3] = g * O + y * H + P * B, e[4] = f * L + w * N + p * q, e[5] = h * L + x * N + b * q, e[6] = m * L + k * N + C * q, e[7] = g * L + y * N + P * q, e[8] = f * R + w * T + p * j, e[9] = h * R + x * T + b * j, e[10] = m * R + k * T + C * j, e[11] = g * R + y * T + P * j, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e);
}
function CS(e, t, n, r, l) {
  var a = 1 / Math.tan(t / 2), o;
  return e[0] = a / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, l != null && l !== 1 / 0 ? (o = 1 / (r - l), e[10] = (l + r) * o, e[14] = 2 * l * r * o) : (e[10] = -1, e[14] = -2 * r), e;
}
var kS = CS;
function dr(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === true;
}
function ma(e) {
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
        return dr(n) ? t : ma(function(l) {
          return e(n, l);
        });
      default:
        return dr(n) && dr(r) ? t : dr(n) ? ma(function(l) {
          return e(l, r);
        }) : dr(r) ? ma(function(l) {
          return e(n, l);
        }) : e(n, r);
    }
  };
}
const qS = Array.isArray || function(t) {
  return t != null && t.length >= 0 && Object.prototype.toString.call(t) === "[object Array]";
};
var MS = ma(function(t) {
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
}(), ao = ma(function(t) {
  return t != null && typeof t.clone == "function" ? t.clone() : Bg(t);
});
function $S(e, t) {
  return function() {
    var n = arguments.length;
    if (n === 0) return t();
    var r = arguments[n - 1];
    return qS(r) || typeof r[e] != "function" ? t.apply(this, arguments) : r[e].apply(r, Array.prototype.slice.call(arguments, 0, n - 1));
  };
}
var pu = TS($S("forEach", function(t, n) {
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
const Fg = { zero: [{ pos: [0, 0], color: [0.35, 0.35, 0.35, 1], tex: "home", hover: 0, hot: 1, action: { kind: "home" }, no_fade: true, disb: true }, { pos: [0, -1], color: il(30, 100, 50, 1), tex: "game", hover: 0, hot: 2, action: { kind: "show", page: "page beta" }, hint: "hint for beta" }, { pos: [0, 1], color: il(90, 100, 50, 1), tex: "numbers", hover: 0, hot: 3, action: { kind: "show", page: "page gamma" }, hint: "hint for gamma" }, { pos: [1, -0.5], color: il(150, 100, 50, 1), tex: "quote", hover: 0, hot: 4, action: { kind: "sub", hexes: "s1" }, hint: "call submenu" }, { pos: [-1, 0.5], color: il(210, 100, 50, 1), tex: "cards", hover: 0, hot: 5, action: { kind: "sub", hexes: "s1" }, hint: "call submenu" }], s1: [{ pos: [0, 0], color: [0, 1, 0, 1], tex: "home", hover: 0, hot: 1, no_fade: true, action: { kind: "home" }, hint: "go home" }, { pos: [0, 1], color: il(0, 100, 50, 1), tex: "italic", hover: 0, hot: 2, action: { kind: "show", page: "one" }, hint: "hint for one" }, { pos: [0, -1], color: il(180, 100, 50, 1), tex: "happy", hover: 0, hot: 3, action: { kind: "sub", hexes: "s2" }, hint: "launch sub-sub menu" }], s2: [{ pos: [0, 0], color: il(90, 100, 50, 1), tex: "home", hover: 0, hot: 1, no_fade: true, action: { kind: "sub", hexes: "s1" }, hint: "go home" }, { pos: [-1, 0.5], color: il(270, 100, 50, 1), tex: "one", hover: 0, hot: 2, action: { kind: "show", page: "gamma" }, hint: "hint for gamma" }, { pos: [1, -0.5], color: [1, 1, 1, 1], tex: "two", hover: 0, hot: 3, action: { kind: "show", page: "delta" }, hint: "hint for delta" }] }, po = Fg.zero;
class PS {
  constructor(t, n) {
    __privateAdd(this, _PS_instances);
    __privateAdd(this, _n2, ao(po));
    __privateAdd(this, _a2, null);
    __privateAdd(this, _e, 1);
    __privateAdd(this, _l2, ao(po));
    __privateAdd(this, _t2, "in");
    __privateAdd(this, _o2);
    __privateAdd(this, _r2);
    __privateSet(this, _o2, t), __privateSet(this, _r2, n);
  }
  draw(t) {
    pu((n) => t(n.pos, n.color, n.tex, n.hot, n.no_fade ? 0 : __privateGet(this, _e), n.hover))(__privateGet(this, _n2));
  }
  step(t) {
    if (__privateGet(this, _t2) == "in") __privateGet(this, _e) > 0 && (__privateSet(this, _e, __privateGet(this, _e) - t / 750), __privateSet(this, _e, Math.max(__privateGet(this, _e), 0))), __privateGet(this, _e) == 0 && __privateSet(this, _t2, "idle");
    else if (__privateGet(this, _t2) == "out") __privateGet(this, _e) < 1 && (__privateSet(this, _e, __privateGet(this, _e) + t / 750), __privateSet(this, _e, Math.min(__privateGet(this, _e), 1))), __privateGet(this, _e) == 1 && (__privateSet(this, _n2, __privateGet(this, _l2)), __privateSet(this, _t2, "in"));
    else for (const n of __privateGet(this, _n2)) n.hot == __privateGet(this, _a2) && !n.disb ? n.hover < 1 ? n.hover += 0.1 : n.hover = Math.min(n.hover, 1) : n.hover > 0 ? n.hover -= 0.1 : n.hover = Math.max(n.hover, 0);
  }
  hover(t) {
    __privateSet(this, _a2, t), t == 0 ? __privateGet(this, _r2).call(this, null) : pu((n) => {
      n.hot == t && __privateGet(this, _r2).call(this, n.hint || null);
    })(__privateGet(this, _n2));
  }
  activate(t) {
    __privateGet(this, _t2) == "idle" && pu((n) => {
      n.hot == t && __privateMethod(this, _PS_instances, i_fn).call(this, n);
    })(__privateGet(this, _n2));
  }
}
_n2 = new WeakMap();
_a2 = new WeakMap();
_e = new WeakMap();
_l2 = new WeakMap();
_t2 = new WeakMap();
_o2 = new WeakMap();
_r2 = new WeakMap();
_PS_instances = new WeakSet();
i_fn = function(t) {
  if (!t.disb && t.action) switch (t.action.kind) {
    case "show":
      __privateGet(this, _o2).call(this, t.action.page);
      break;
    case "home":
      __privateSet(this, _l2, ao(po)), __privateSet(this, _t2, "out");
      break;
    case "sub":
      __privateSet(this, _l2, ao(Fg[t.action.hexes])), __privateSet(this, _t2, "out");
      break;
  }
};
console.log(po);
const LS = ["width", "height"], Og = /* @__PURE__ */ Cl({ __name: "WebGLMenu", props: { width: {}, height: {} }, emits: ["hover", "activate"], setup(e, { emit: t }) {
  ec();
  const n = t, r = K(), l = e;
  let a = null;
  const o = { front_0: null, front_1: null, front_2: null, front_3: null, game: null, home: null, numbers: null, quote: null, cards: null, happy: null, italic: null, one: null, two: null, three: null, body: null };
  let i = null;
  const u = new PS((_) => n("activate", _), (_) => n("hover", _)), c = K([0, 0]), s = K(""), f = K(0), h = K(0), m = K(null), g = K(1), w = K(-1), x = K([0, 0, 0, 0]), k = (_, D, F, me, $, A, Y) => {
    const V = [];
    for (let ne = 0; ne < 6; ++ne) V.push(_ + (ne + me) % 6 + 1 + Y), V.push(D + (ne + $) % 6 + 1 + Y), V.push(F + (ne + A) % 6 + 1 + Y);
    return V;
  }, y = () => {
    if (a === null) throw new Error("no WebGL context");
    let _ = [0, 0, 0];
    for (let E = 0; E < 6; ++E) {
      const ee = 3.141 * E * 60 / 180;
      _ = _.concat([1 * Math.cos(ee), 1 * Math.sin(ee), 0]);
    }
    for (let E = 0; E < 6; ++E) {
      const ee = 3.141 * E * 60 / 180;
      _ = _.concat([1 * Math.cos(ee), 1 * Math.sin(ee), 0]);
    }
    for (let E = 0; E < 6; ++E) {
      const ee = 3.141 * E * 60 / 180;
      _ = _.concat([1 * Math.cos(ee), 1 * Math.sin(ee), 0.2]);
    }
    for (let E = 0; E < 6; ++E) {
      const ee = 3.141 * E * 60 / 180;
      _ = _.concat([1 * Math.cos(ee), 1 * Math.sin(ee), 0.2]);
    }
    for (let E = 0; E < 6; ++E) {
      const ee = 3.141 * E * 60 / 180;
      _ = _.concat([1.2 * Math.cos(ee), 1.2 * Math.sin(ee), 0.2]);
    }
    for (let E = 0; E < 6; ++E) {
      const ee = 3.141 * E * 60 / 180;
      _ = _.concat([1.2 * Math.cos(ee), 1.2 * Math.sin(ee), 0.2]);
    }
    for (let E = 0; E < 6; ++E) {
      const ee = 3.141 * E * 60 / 180;
      _ = _.concat([1 * Math.cos(ee), 1 * Math.sin(ee), -0.3]);
    }
    for (let E = 0; E < 6; ++E) {
      const ee = 3.141 * E * 60 / 180;
      _ = _.concat([0.9 * Math.cos(ee), 0.9 * Math.sin(ee), 0]);
    }
    for (let E = 0; E < 6; ++E) {
      const ee = 3.141 * E * 60 / 180;
      _ = _.concat([1 * Math.cos(ee), 1 * Math.sin(ee), -0.3]);
    }
    for (let E = 2; E < _.length; E += 3) _[E] -= 1;
    const D = a.createBuffer();
    a.bindBuffer(a.ARRAY_BUFFER, D), a.bufferData(a.ARRAY_BUFFER, new Float32Array(_), a.STATIC_DRAW);
    let F = [1, 1, 1, 1, 0.5, 0.5, 0.5, 1, 1, 1, 1, 1, 0.5, 0.5, 0.5, 1, 1, 1, 1, 1, 0.5, 0.5, 0.5, 1, 1, 1, 1, 1];
    for (let E = 0; E < 6; ++E) F = F.concat([1, 1, 1, 1]);
    for (let E = 0; E < 6; ++E) F = F.concat([1, 1, 1, 1]);
    for (let E = 0; E < 6; ++E) F = F.concat([1, 1, 1, 1]);
    for (let E = 0; E < 6; ++E) F = F.concat([1, 1, 1, 1]);
    for (let E = 0; E < 6; ++E) F = F.concat([1, 1, 1, 1]);
    for (let E = 0; E < 6; ++E) F = F.concat([1, 1, 1, 1]);
    for (let E = 0; E < 6; ++E) F = F.concat([1, 1, 1, 1]);
    for (let E = 0; E < 6; ++E) F = F.concat([1, 1, 1, 1]);
    const me = a.createBuffer();
    a.bindBuffer(a.ARRAY_BUFFER, me), a.bufferData(a.ARRAY_BUFFER, new Float32Array(F), a.STATIC_DRAW);
    let $ = [0.5, 0.5];
    for (let E = 0; E < 6; ++E) {
      const ee = 3.141 * E * 60 / 180;
      $ = $.concat([0.5 + 0.5 * Math.cos(ee), 0.5 + 0.5 * Math.sin(ee)]);
    }
    for (let E = 0; E < 6; ++E) {
      const ee = 3.141 * E * 60 / 180;
      $ = $.concat([0.5 + 0.4 * Math.cos(ee), 0.5 + 0.4 * Math.sin(ee)]);
    }
    for (let E = 0; E < 6; ++E) {
      const ee = 3.141 * E * 60 / 180;
      $ = $.concat([0.7 + 0.4 * Math.cos(ee), 0.7 + 0.4 * Math.sin(ee)]);
    }
    for (let E = 0; E < 6; ++E) {
      const ee = 3.141 * E * 60 / 180;
      $ = $.concat([0.8 + 0.5 * Math.cos(ee), 0.8 + 0.5 * Math.sin(ee)]);
    }
    for (let E = 0; E < 6; ++E) {
      const ee = 3.141 * E * 60 / 180;
      $ = $.concat([0.5 + 0.5 * Math.cos(ee), 0.5 + 0.5 * Math.sin(ee)]);
    }
    for (let E = 0; E < 6; ++E) {
      const ee = 3.141 * E * 60 / 180;
      $ = $.concat([0.8 + 0.5 * Math.cos(ee), 0.8 + 0.5 * Math.sin(ee)]);
    }
    for (let E = 0; E < 6; ++E) {
      const ee = 3.141 * E * 60 / 180;
      $ = $.concat([0.5 + 0.5 * Math.cos(ee), 0.5 + 0.5 * Math.sin(ee)]);
    }
    for (let E = 0; E < 6; ++E) {
      const ee = 3.141 * (E + 1) * 60 / 180;
      $ = $.concat([0.3 + 0.5 * Math.cos(ee + 0), 0.3 + 0.5 * Math.sin(ee + 0)]);
    }
    for (let E = 0; E < 6; ++E) {
      const ee = 3.141 * (E + 1) * 60 / 180;
      $ = $.concat([0.3 + 0.5 * Math.cos(ee + 0), 0.3 + 0.5 * Math.sin(ee + 0)]);
    }
    const A = a.createBuffer();
    a.bindBuffer(a.ARRAY_BUFFER, A), a.bufferData(a.ARRAY_BUFFER, new Float32Array($), a.STATIC_DRAW);
    let Y = [];
    for (let E = 1; E < 7; ++E) Y = Y.concat([0, E, 1 + E % 6]);
    Y = Y.concat(k(0, 0, 6, 0, 1, 0, 6)), Y = Y.concat(k(6, 6, 0, 0, 1, 1, 6)), Y = Y.concat(k(6, 6, 12, 0, 1, 0, 12)), Y = Y.concat(k(12, 12, 6, 0, 1, 1, 12)), Y = Y.concat(k(12, 18, 12, 1, 0, 0, 18)), Y = Y.concat(k(18, 18, 12, 0, 1, 1, 18)), Y = Y.concat(k(24, 30, 24, 1, 0, 0, 18)), Y = Y.concat(k(30, 30, 24, 0, 1, 1, 18));
    let V = 0;
    for (let E = 0; E < Y.length; ++E) V = Math.max(V, Y[E]);
    console.log("top", V);
    const ne = a.createBuffer();
    a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, ne), a.bufferData(a.ELEMENT_ARRAY_BUFFER, new Uint32Array(Y), a.STATIC_DRAW), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, null);
    let be = [0, 0, 1], S = [], M = [], I = [];
    for (let E = 0; E < 6; ++E) {
      const ee = E * 3.414 * 60 / 180, se = 0 * (30 * 3.414 / 180);
      S = S.concat([0, 0, 1]), M = M.concat([-Math.cos(ee - se), -Math.sin(ee - se), 0]), I = I.concat([Math.cos(ee - se), Math.sin(ee - se), 0]);
    }
    be = be.concat(S), be = be.concat(M), be = be.concat(M), be = be.concat(S), be = be.concat(S), be = be.concat(I), be = be.concat(I), be = be.concat(M), be = be.concat(M);
    const te = a.createBuffer();
    a.bindBuffer(a.ARRAY_BUFFER, te), a.bufferData(a.ARRAY_BUFFER, new Float32Array(be), a.STATIC_DRAW);
    const le = a.createBuffer();
    return a.bindBuffer(a.ARRAY_BUFFER, le), a.bufferData(a.ARRAY_BUFFER, new Float32Array([-1, -1, 0.1, 1, -1, -0.1, 1, 1, 0.1, -1, 1, -0.1]), a.STATIC_DRAW), console.log("pctn", _.length / 3, F.length / 4, $.length / 2, be.length / 3), [D, me, A, ne, te, le];
  }, p = (_, D) => {
    const F = hu();
    return gu(F, F, [0, 0, -6]), bu(F, F, 1.3 * Math.sin(D) * 3.141 / 6 / 3, [0, 1, 0]), bu(F, F, 1.2 * Math.sin(D * 1.15 + 1) * 3.141 / 4 / 3, [1, 0, 0]), bu(F, F, 1.1 * Math.sin(D * 1.33 + 2) * 3.141 / 5 / 3, [0, 0, 1]), gu(F, F, [_[0], _[1], _[2]]), F;
  }, b = (_) => {
    a !== null && (a.uniform1i(_.unif.sampler, 1), a.uniform1i(_.unif.mode_int, 0), a.drawElements(a.TRIANGLES, 4 * 6 * 6, a.UNSIGNED_INT, 4 * 3 * 6), a.uniform1i(_.unif.sampler, 0), a.uniform1i(_.unif.mode_int, 1), a.drawElements(a.TRIANGLES, 1 * 6 * 3, a.UNSIGNED_INT, 0));
  }, C = (_, D) => {
    if (a === null || r.value === void 0) throw new Error("no WebGL context");
    a.viewport(0, 0, l.width, l.height), a.enable(a.BLEND), a.blendFunc(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA), a.enable(a.DEPTH_TEST), a.depthFunc(a.LEQUAL), a.bindRenderbuffer(a.RENDERBUFFER, null), a.bindFramebuffer(a.FRAMEBUFFER, null), a.bindTexture(a.TEXTURE_2D, _.bufs.double), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR), a.bindRenderbuffer(a.RENDERBUFFER, _.bufs.depth), a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_COMPONENT16, l.width, l.height), a.bindFramebuffer(a.FRAMEBUFFER, _.bufs.frame), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.RENDERBUFFER, _.bufs.depth), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, l.width, l.height, 0, a.RGBA, a.UNSIGNED_BYTE, null), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, _.bufs.double, 0), a.bindFramebuffer(a.FRAMEBUFFER, _.bufs.frame), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, _.bufs.double, 0), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.RENDERBUFFER, _.bufs.depth), a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT);
    const F = 45 * Math.PI / 180, me = l.width / l.height, $ = 0.1, A = 100, Y = hu();
    kS(Y, F, me, $, A);
    const V = D;
    gu(Y, Y, [Math.sin(V * 0.3) * 1, Math.cos(V * 0.4) * 1, Math.cos(0.6 * V) * 1]), a.useProgram(_.prog_draw), P(_, false), O(_), H(_), B(_), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, _.bufs.index), a.uniform1f(_.unif.time, D), a.uniform2f(_.unif.viewport, l.width, l.height), a.uniformMatrix4fv(_.unif.proj, false, Y), a.activeTexture(a.TEXTURE0 + 1), a.bindTexture(a.TEXTURE_2D, o.body), a.activeTexture(a.TEXTURE0);
    const ne = (M, I, te, le, E, ee) => {
      if (a === null) return;
      const se = [M[0] * 2, M[1] * 2.2, ee * 0.5 + Math.pow(E, 1.5) * 5], ve = p(se, D);
      switch (a.uniformMatrix4fv(_.unif.model, false, ve), a.uniform1f(_.unif.hover, ee), a.uniform1f(_.unif.alpha, Math.pow(1 - E, 0.1)), a.activeTexture(a.TEXTURE0), te) {
        case "clock":
          a.bindTexture(a.TEXTURE_2D, o.front_1);
          break;
        case "tv":
          a.bindTexture(a.TEXTURE_2D, o.front_2);
          break;
        case "phone":
          a.bindTexture(a.TEXTURE_2D, o.front_3);
          break;
        default:
          const re = o[te];
          re != null ? a.bindTexture(a.TEXTURE_2D, re) : a.bindTexture(a.TEXTURE_2D, o.front_0);
          break;
      }
      a.activeTexture(a.TEXTURE0);
      const ce = hu();
      SS(ce, ve), xS(ce, ce), a.uniformMatrix4fv(_.unif.normal, false, ce), a.uniform4fv(_.unif.front_color, I), b(_);
    };
    u.draw(ne), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, null, 0), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.RENDERBUFFER, null), a.flush(), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, null), a.disableVertexAttribArray(_.attr.pos_model), a.bindFramebuffer(a.FRAMEBUFFER, null), a.bindRenderbuffer(a.RENDERBUFFER, null), a.disable(a.BLEND), a.useProgram(_.prog_copy), a.disable(a.DEPTH_TEST), a.uniform1i(_.unif.copy_tex, 0), a.bindTexture(a.TEXTURE_2D, _.bufs.double), a.bindBuffer(a.ARRAY_BUFFER, _.bufs.copy_pos), m.value != null ? (a.uniform2fv(_.unif.ripple_pos, m.value), a.uniform1f(_.unif.ripple_time, g.value)) : a.uniform1f(_.unif.ripple_time, 1), a.vertexAttribPointer(_.attr.pos_copy, 3, a.FLOAT, false, 0, 0), a.enableVertexAttribArray(_.attr.pos_copy), a.drawArrays(a.TRIANGLE_FAN, 0, 4), a.disableVertexAttribArray(_.attr.pos_copy), a.useProgram(_.prog_pick), a.enable(a.DEPTH_TEST), a.bindTexture(a.TEXTURE_2D, _.pick.tex), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.NEAREST), a.bindRenderbuffer(a.RENDERBUFFER, _.pick.rb), a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_COMPONENT16, l.width, l.height), a.bindFramebuffer(a.FRAMEBUFFER, _.pick.fb), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.RENDERBUFFER, _.pick.rb), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, l.width, l.height, 0, a.RGBA, a.UNSIGNED_BYTE, null), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, _.pick.tex, 0), a.uniformMatrix4fv(_.unif.proj_pick, false, Y), a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, _.bufs.index), a.enableVertexAttribArray(_.attr.pos_pick), P(_, true);
    const be = (M, I, te, le, E, ee) => {
      if (a === null) return;
      const se = [M[0] * 2, M[1] * 2.2, ee * 0.5 + 10 * E];
      p(se, D), a.uniformMatrix4fv(_.unif.model_pick, false, p(se, D)), a.uniform4f(_.unif.id_pick, le / 255, 0, 0, 0), a.drawElements(a.TRIANGLES, 3 * 6, a.UNSIGNED_INT, 0);
    };
    u.draw(be), a.flush(), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, null), a.disableVertexAttribArray(_.attr.pos_pick);
    let S = new Uint8Array(4);
    a.readPixels(c.value[0], l.height - c.value[1], 1, 1, a.RGBA, a.UNSIGNED_BYTE, S), S.length && (s.value = S.toString(), u.hover(S[0]), f.value = S[0]);
  }, P = (_, D) => {
    if (a === null) throw new Error("setPos - no ctx");
    a.bindBuffer(a.ARRAY_BUFFER, _.bufs.pos), a.vertexAttribPointer(D ? _.attr.pos_pick : _.attr.pos_model, 3, a.FLOAT, false, 0, 0), a.enableVertexAttribArray(D ? _.attr.pos_pick : _.attr.pos_model);
  }, O = (_) => {
    if (a === null) throw new Error("setColor - no ctx");
    a.bindBuffer(a.ARRAY_BUFFER, _.bufs.color), a.vertexAttribPointer(_.attr.color, 4, a.FLOAT, false, 0, 0), a.enableVertexAttribArray(_.attr.color);
  }, H = (_) => {
    if (a === null) throw new Error("setTex crash");
    a.bindBuffer(a.ARRAY_BUFFER, _.bufs.tex), a.vertexAttribPointer(_.attr.texture, 2, a.FLOAT, false, 0, 0), a.enableVertexAttribArray(_.attr.texture);
  }, B = (_) => {
    if (a === null) throw new Error("setNorm crash");
    a.bindBuffer(a.ARRAY_BUFFER, _.bufs.norm), a.vertexAttribPointer(_.attr.norm, 3, a.FLOAT, false, 0, 0), a.enableVertexAttribArray(_.attr.norm);
  };
  let L = 0;
  const N = () => {
    if (a === null) return;
    const F = T(`
        attribute vec4 aVertexPosition;
        attribute vec3 aVertexNormal;
        attribute vec4 aVertexColor;
        attribute vec2 aTextureCoord;

        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;
        uniform mat4 uNormalMatrix;
        uniform float uTime;
        uniform mediump float uFade;

        uniform mediump vec2 uViewPort;

        varying vec4 vColor;
        varying float vDist;
        varying highp vec2 vTextureCoord;
        varying highp float vT;
        varying mediump float vCurFade;
        varying mediump vec3 vLighting;

        varying mediump vec3 vNorm; // for spot light
        varying mediump vec3 vPos; // for spot light

        // float abc(in float f) {
        //     return f * 0.1;
        // }

        void main() {
            vNorm = aVertexNormal;

            vec4 b = aVertexPosition;
            vDist = length(aVertexPosition);

            gl_Position = uProjectionMatrix * uModelViewMatrix * b;

            vPos = gl_Position.xyz;
            vPos[1] /= uViewPort.x / uViewPort.y;

            vColor = aVertexColor;
            vTextureCoord = aTextureCoord;

            vT = uTime;

            vCurFade = uFade;

            highp vec3 ambientLight = vec3(0.15, 0.15, 0.15);
            highp vec3 directionalLightColor = vec3(1.0, 1.0, 1.0);

            highp vec3 dir = vec3(sin(uTime * 1.5), cos(uTime * 1.0), 1.5);

            highp vec3 directionalVector = normalize(dir);

            highp vec4 transformedNormal = uNormalMatrix * vec4(normalize(aVertexNormal), 1.0);

            highp float directional = min(max(
                pow(dot(transformedNormal.xyz, directionalVector), 5.0),
            0.0), 1.0);

            vLighting = ambientLight + (directionalLightColor * directional) * 1.0;
        }
    `, `
        uniform sampler2D uSampler;
        uniform int uMode;
        uniform mediump float uAlpha;
        uniform mediump vec4 uFrontColor;

        varying mediump vec4 vColor;
        varying mediump float vT;
        varying mediump float vDist;
        varying highp vec2 vTextureCoord;
        varying mediump float vCurFade;
        varying mediump vec3 vLighting;

        varying mediump vec3 vNorm; // for spot light
        varying mediump vec3 vPos; // for spot light

        void main() {
            mediump vec2 t = vTextureCoord;

            mediump float x = t[0] - 0.5;
            mediump float y = t[1] - 0.5;

            mediump float r = sqrt(x * x + y * y) * 4.0;

            mediump float f1 = vT;

            mediump vec2 tt;

            mediump float a = vCurFade;

            mediump float scale = 0.5 * exp(-r * 0.3) * exp(-f1 * 0.15);

            tt[0] = t[0] + (t[0] - 0.5) * (cos(f1 * r * 3.0) / 10.0 + 0.5) * scale;
            tt[1] = t[1] + (t[1] - 0.5) * (sin(f1 * r * 2.0) / 10.0 + 0.5) * scale;

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

                mediump float a = 1.0 - cos(3.141 * vCurFade / 2.0);

                fragColor = (idle * (1.0 - a) + active * a);
                fragColor = vec4(fragColor.rgb, fragColor.a);

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
    `), me = `
        attribute vec4 aVertexPosition;

        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;

        void main() {
            vec4 b = aVertexPosition;
            gl_Position = uProjectionMatrix * uModelViewMatrix * b;
        }
    `, $ = `
        precision mediump float;
        
        uniform vec4 uId;
        
        void main() {
            gl_FragColor = uId;
        }
    `, A = `
        attribute vec3 aVertexPosition;

        varying mediump vec2 vTexCoord;

        void main() {
            gl_Position = vec4(aVertexPosition, 1.0);
            vTexCoord = vec2(0.5 + aVertexPosition.x / 2.0, 0.5 + aVertexPosition.y / 2.0);
        }
    `, Y = `
        varying mediump vec2 vTexCoord;

        uniform sampler2D uTexture;

        uniform mediump vec2 uRipplePos;
        uniform mediump float uRippleTime;

        void main() {
            if(uRippleTime >= 0.999) {
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
            angle += 3.141;

            srce.x += 0.15 * cos(angle) / 1.0 * scale;
            srce.y += 0.15 * sin(angle) / 1.0 * scale;

            if(srce.x < 0.0 || srce.y < 0.0 || srce.x > 1.0 || srce.y > 1.0) {
                gl_FragColor.a = 0.0;
                return;
            }

            gl_FragColor = texture2D(uTexture, srce);
        }
    `, V = y(), ne = T(me, $), be = T(A, Y), S = a.createTexture();
    a.bindTexture(a.TEXTURE_2D, S), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.NEAREST), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.NEAREST), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), a.bindTexture(a.TEXTURE_2D, null);
    const M = a.createRenderbuffer(), I = a.createFramebuffer(), te = { prog_draw: F, prog_pick: ne, prog_copy: be, attr: { pos_model: a.getAttribLocation(F, "aVertexPosition"), norm: a.getAttribLocation(F, "aVertexNormal"), color: a.getAttribLocation(F, "aVertexColor"), texture: a.getAttribLocation(F, "aTextureCoord"), pos_pick: a.getAttribLocation(ne, "aVertexPosition"), pos_copy: a.getAttribLocation(be, "aVertexPosition") }, unif: { proj: a.getUniformLocation(F, "uProjectionMatrix"), model: a.getUniformLocation(F, "uModelViewMatrix"), sampler: a.getUniformLocation(F, "uSampler"), normal: a.getUniformLocation(F, "uNormalMatrix"), time: a.getUniformLocation(F, "uTime"), alpha: a.getUniformLocation(F, "uAlpha"), hover: a.getUniformLocation(F, "uFade"), mode_int: a.getUniformLocation(F, "uMode"), front_color: a.getUniformLocation(F, "uFrontColor"), proj_pick: a.getUniformLocation(ne, "uProjectionMatrix"), model_pick: a.getUniformLocation(ne, "uModelViewMatrix"), id_pick: a.getUniformLocation(ne, "uId"), viewport: a.getUniformLocation(F, "uViewPort"), copy_tex: a.getUniformLocation(be, "uTexture"), ripple_time: a.getUniformLocation(be, "uRippleTime"), ripple_pos: a.getUniformLocation(be, "uRipplePos") }, bufs: { frame: I, depth: M, double: S, pos: V[0], color: V[1], tex: V[2], index: V[3], norm: V[4], copy_pos: V[5] }, pick: { fb: a.createFramebuffer(), rb: a.createRenderbuffer(), tex: a.createTexture() } };
    for (const le in o) o[le] = W();
    a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, true), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR), i = te;
  }, q = () => {
    if (r.value === void 0 || (a === null && (a = r.value.getContext("webgl2", {})), a === null)) return;
    i === null && N(), console.log("pctn", i == null ? void 0 : i.attr.pos_model, i == null ? void 0 : i.attr.color, i == null ? void 0 : i.attr.texture, i == null ? void 0 : i.attr.norm), console.log("next", i == null ? void 0 : i.attr.pos_copy, i == null ? void 0 : i.attr.pos_pick), console.log("dims", l.width, l.height), a.bindRenderbuffer(a.RENDERBUFFER, i.bufs.depth), a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_COMPONENT16, l.width, l.height), a.bindRenderbuffer(a.RENDERBUFFER, null);
    const _ = a.createTexture();
    a.bindTexture(a.TEXTURE_2D, _), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, l.width, l.height, 0, a.RGBA, a.UNSIGNED_BYTE, null), i.bufs.double = _, a.bindTexture(a.TEXTURE_2D, null), a.viewport(0, 0, l.width, l.height);
    let D = 0, F = false, me = Date.now();
    L = setInterval(() => {
      const $ = Date.now(), A = ($ - me) / 750;
      F ? (D -= A, D < 0 && (D = 0, F = false)) : (D += A, D > 7.5 && (D = 7.5, F = true)), u.step($ - me), h.value > 0 && (u.activate(h.value), h.value = 0), me = $, i !== null && (R(), C(i, D)), a !== null && i !== null && m.value != null && (g.value < 1 && (g.value += 0.1), g.value = Math.min(g.value, 1));
    }, 25);
  }, R = (_) => {
    for (let D = 0; D < 4; ++D) w.value - 1 == D ? x.value[D] < 1 && (x.value[D] += 0.05) : x.value[D] > 0 && (x.value[D] -= 0.05);
  }, T = (_, D) => {
    if (a === null) throw new Error("no webgl");
    const F = j(a.VERTEX_SHADER, _), me = j(a.FRAGMENT_SHADER, D), $ = a.createProgram();
    return a.attachShader($, F), a.attachShader($, me), a.linkProgram($), $;
  }, j = (_, D) => {
    if (a === null) throw new Error("no webgl");
    const F = a.createShader(_);
    if (F === null) throw new Error("bad shader");
    return a.shaderSource(F, D), a.compileShader(F), F;
  }, W = () => {
    if (a === null) return null;
    const _ = a.createTexture();
    return a.bindTexture(a.TEXTURE_2D, _), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, 1, 1, 0, a.RGBA, a.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0])), _;
  }, U = (_, D) => {
    Qe(() => {
      if (a === null) return;
      const F = D.target;
      a.bindTexture(a.TEXTURE_2D, o[_]), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, F), a.hint(a.GENERATE_MIPMAP_HINT, a.NICEST), a.generateMipmap(a.TEXTURE_2D);
    });
  }, Z = (_) => {
    if (a === null || r.value === void 0) return;
    const D = _, F = D.offsetX, me = D.offsetY;
    c.value = [F, me];
  }, ae = (_) => {
    var _a3;
    const D = _, F = (_a3 = r.value) == null ? void 0 : _a3.getBoundingClientRect();
    F !== void 0 && (c.value = [D.touches.item(0).clientX - F.x, D.touches.item(0).clientY - F.y], _.stopPropagation(), _.preventDefault());
  }, ye = () => {
    L != 0 && clearInterval(L), console.log("resize", l.width, l.height), Qe(() => {
      q();
    });
  }, X = (_) => {
    h.value = f.value, m.value = [c.value[0] / l.width, 1 - c.value[1] / l.height], g.value = 0;
  };
  return ct(() => {
    ye(), ge(() => [l.width, l.height], (_, D) => Qe(ye));
  }), We(() => {
    clearInterval(L);
  }), (_, D) => (Tn(), oi(nn, null, [wt("canvas", { ref_key: "canvas", ref: r, onMousemove: D[0] || (D[0] = (F) => Z(F)), onTouchstart: D[1] || (D[1] = (F) => ae(F)), onTouchmove: D[2] || (D[2] = (F) => ae(F)), onTouchend: D[3] || (D[3] = (F) => X()), onMouseup: D[4] || (D[4] = (F) => X()), width: l.width, height: l.height }, null, 40, LS), wt("img", { src: "img/wood.jpg", onLoad: D[5] || (D[5] = (F) => U("body", F)), style: { display: "none" } }, null, 32), wt("img", { src: "img/tex.jpg", onLoad: D[6] || (D[6] = (F) => U("front_0", F)), style: { display: "none" } }, null, 32), wt("img", { src: "img/clock.jpg", onLoad: D[7] || (D[7] = (F) => U("front_1", F)), style: { display: "none" } }, null, 32), wt("img", { src: "img/tv.jpg", onLoad: D[8] || (D[8] = (F) => U("front_2", F)), style: { display: "none" } }, null, 32), wt("img", { src: "img/phone.jpg", onLoad: D[9] || (D[9] = (F) => U("front_3", F)), style: { display: "none" } }, null, 32), wt("img", { src: "img/home-outline.svg", onLoad: D[10] || (D[10] = (F) => U("home", F)), style: { display: "none" }, width: "1024", height: "1024" }, null, 32), wt("img", { src: "img/format-quote-close.svg", onLoad: D[11] || (D[11] = (F) => U("quote", F)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), wt("img", { src: "img/gamepad-variant-outline.svg", onLoad: D[12] || (D[12] = (F) => U("game", F)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), wt("img", { src: "img/numeric.svg", onLoad: D[13] || (D[13] = (F) => U("numbers", F)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), wt("img", { src: "img/cards-outline.svg", onLoad: D[14] || (D[14] = (F) => U("cards", F)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), wt("img", { src: "img/emoticon-happy-outline.svg", onLoad: D[15] || (D[15] = (F) => U("happy", F)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), wt("img", { src: "img/format-italic.svg", onLoad: D[16] || (D[16] = (F) => U("italic", F)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), wt("img", { src: "img/numeric-1.svg", onLoad: D[17] || (D[17] = (F) => U("one", F)), style: { display: "none" } }, null, 32), wt("img", { src: "img/numeric-2.svg", onLoad: D[18] || (D[18] = (F) => U("two", F)), style: { display: "none" } }, null, 32), wt("img", { src: "img/numeric-3.svg", onLoad: D[19] || (D[19] = (F) => U("three", F)), style: { display: "none" } }, null, 32)], 64));
} }), BS = { class: "sliders q-ma-lg" }, FS = { class: "feedback" }, OS = /* @__PURE__ */ Cl({ __name: "Sized", setup(e) {
  const t = K(320), n = K(240), r = K("no events yet ...");
  return ct(() => {
    t.value = document.body.getBoundingClientRect().width;
    const l = document.getElementById("footer");
    let a = 100;
    l && (a = l.getBoundingClientRect().y);
    const o = document.getElementById("wgl-menu");
    let i = 200;
    o && (i = o.getBoundingClientRect().y), n.value = a - i;
  }), (l, a) => (Tn(), oi(nn, null, [wt("div", BS, [wt("b", null, ta(t.value) + " x " + ta(n.value), 1), Ye(Ve(vl), { modelValue: t.value, "onUpdate:modelValue": a[0] || (a[0] = (o) => t.value = o), min: 1, max: 1920 }, null, 8, ["modelValue"]), Ye(Ve(vl), { modelValue: n.value, "onUpdate:modelValue": a[1] || (a[1] = (o) => n.value = o), min: 1, max: 1920 }, null, 8, ["modelValue"]), wt("div", FS, ta(r.value), 1)]), wt("div", { class: "menu", id: "wgl-menu", style: Xo({ width: t.value + "px", height: n.value + "px" }) }, [Ye(Og, { width: t.value, height: n.value, onActivate: a[2] || (a[2] = (o) => l.$q.notify({ message: o })), onHover: a[3] || (a[3] = (o) => r.value = "hover: " + o) }, null, 8, ["width", "height"])], 4)], 64));
} }), VS = { id: "menu" }, DS = /* @__PURE__ */ Cl({ __name: "MaxSized", setup(e) {
  ec();
  const t = K(256), n = K(192), r = K(100), l = () => {
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
  }), (a, o) => (Tn(), oi("div", VS, [Ye(Og, { width: t.value, height: n.value }, null, 8, ["width", "height"])]));
} }), IS = { BASE_URL: "./", DEV: false, MODE: "production", PROD: true, SSR: false, VITE_APP_NAME: "vite mtg", VITE_client_id: "quasar-2fa", VITE_client_secret: "spoon" }, lc = tm(tx);
console.log(IS);
const zS = [{ name: "layout", path: "/", component: rx, children: [{ name: "root", path: "", component: _S }, { name: "webgl", path: "webgl", component: DS }, { name: "sized", path: "sized", component: OS }] }], NS = iS({ history: Fx(), routes: zS });
lc.use(NS);
lc.use(Zw, { plugins: { Dialog: Ow, Dark: am, Loading: Dw, Cookies: Bw, Notify: Qw }, config: { dark: "auto" } });
window.cb = (e) => {
  alert(e);
};
window.log = (e) => {
  console.log("%cwasm>%c %s", "background-color: blue; color: cyan; border: 2px solid blue;", "", e);
};
Lg({}).then(() => {
  lc.mount("#q-app");
});
