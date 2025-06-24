var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value2) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value2);
var __privateSet = (obj, member, value2, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value2) : member.set(obj, value2), value2);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _n2, _a2, _e, _l2, _t, _o2, _r2, _HS_instances, i_fn;
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
function ss(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const gt = {}, hr = [], Dn = () => {
}, Qg = () => false, Zo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), cs = (e) => e.startsWith("onUpdate:"), zt = Object.assign, ds = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Kg = Object.prototype.hasOwnProperty, dt = (e, t) => Kg.call(e, t), He = Array.isArray, gr = (e) => Pa(e) === "[object Map]", Hf = (e) => Pa(e) === "[object Set]", Wg = (e) => Pa(e) === "[object RegExp]", Ye = (e) => typeof e == "function", Pt = (e) => typeof e == "string", Sl = (e) => typeof e == "symbol", kt = (e) => e !== null && typeof e == "object", jf = (e) => (kt(e) || Ye(e)) && Ye(e.then) && Ye(e.catch), Uf = Object.prototype.toString, Pa = (e) => Uf.call(e), Yg = (e) => Pa(e).slice(8, -1), Qf = (e) => Pa(e) === "[object Object]", fs = (e) => Pt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, la = /* @__PURE__ */ ss(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Jo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Xg = /-(\w)/g, _n = Jo((e) => e.replace(Xg, (t, n) => n ? n.toUpperCase() : "")), Gg = /\B([A-Z])/g, Jl = Jo((e) => e.replace(Gg, "-$1").toLowerCase()), ei = Jo((e) => e.charAt(0).toUpperCase() + e.slice(1)), Mi = Jo((e) => e ? `on${ei(e)}` : ""), yl = (e, t) => !Object.is(e, t), ra = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, Kf = (e, t, n, r = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: r, value: n });
}, Zg = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Jg = (e) => {
  const t = Pt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let hc;
const La = () => hc || (hc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ti(e) {
  if (He(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], l = Pt(r) ? l0(r) : ti(r);
      if (l) for (const a in l) t[a] = l[a];
    }
    return t;
  } else if (Pt(e) || kt(e)) return e;
}
const e0 = /;(?![^(]*\))/g, t0 = /:([^]+)/, n0 = /\/\*[^]*?\*\//g;
function l0(e) {
  const t = {};
  return e.replace(n0, "").split(e0).forEach((n) => {
    if (n) {
      const r = n.split(t0);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function vs(e) {
  let t = "";
  if (Pt(e)) t = e;
  else if (He(e)) for (let n = 0; n < e.length; n++) {
    const r = vs(e[n]);
    r && (t += r + " ");
  }
  else if (kt(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const r0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", a0 = /* @__PURE__ */ ss(r0);
function Wf(e) {
  return !!e || e === "";
}
const Yf = (e) => !!(e && e.__v_isRef === true), Yt = (e) => Pt(e) ? e : e == null ? "" : He(e) || kt(e) && (e.toString === Uf || !Ye(e.toString)) ? Yf(e) ? Yt(e.value) : JSON.stringify(e, Xf, 2) : String(e), Xf = (e, t) => Yf(t) ? Xf(e, t.value) : gr(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, l], a) => (n[Ri(r, a) + " =>"] = l, n), {}) } : Hf(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => Ri(n)) } : Sl(t) ? Ri(t) : kt(t) && !He(t) && !Qf(t) ? String(t) : t, Ri = (e, t = "") => {
  var n;
  return Sl(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let un;
class o0 {
  constructor(t = false) {
    this.detached = t, this._active = true, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = un, !t && un && (this.index = (un.scopes || (un.scopes = [])).push(this) - 1);
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
      const n = un;
      try {
        return un = this, t();
      } finally {
        un = n;
      }
    }
  }
  on() {
    un = this;
  }
  off() {
    un = this.parent;
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
function i0() {
  return un;
}
let yt;
const Ai = /* @__PURE__ */ new WeakSet();
class Gf {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, un && un.active && un.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ai.has(this) && (Ai.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Jf(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, gc(this), ev(this);
    const t = yt, n = Mn;
    yt = this, Mn = true;
    try {
      return this.fn();
    } finally {
      tv(this), yt = t, Mn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) gs(t);
      this.deps = this.depsTail = void 0, gc(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ai.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    Cu(this) && this.run();
  }
  get dirty() {
    return Cu(this);
  }
}
let Zf = 0, aa, oa;
function Jf(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = oa, oa = e;
    return;
  }
  e.next = aa, aa = e;
}
function ms() {
  Zf++;
}
function hs() {
  if (--Zf > 0) return;
  if (oa) {
    let t = oa;
    for (oa = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; aa; ) {
    let t = aa;
    for (aa = void 0; t; ) {
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
function ev(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function tv(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const l = r.prevDep;
    r.version === -1 ? (r === n && (n = l), gs(r), u0(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = l;
  }
  e.deps = t, e.depsTail = n;
}
function Cu(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (nv(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function nv(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === pa)) return;
  e.globalVersion = pa;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Cu(e)) {
    e.flags &= -3;
    return;
  }
  const n = yt, r = Mn;
  yt = e, Mn = true;
  try {
    ev(e);
    const l = e.fn(e._value);
    (t.version === 0 || yl(l, e._value)) && (e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    yt = n, Mn = r, tv(e), e.flags &= -3;
  }
}
function gs(e, t = false) {
  const { dep: n, prevSub: r, nextSub: l } = e;
  if (r && (r.nextSub = l, e.prevSub = void 0), l && (l.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep) gs(a, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function u0(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Mn = true;
const lv = [];
function Cl() {
  lv.push(Mn), Mn = false;
}
function kl() {
  const e = lv.pop();
  Mn = e === void 0 ? true : e;
}
function gc(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = yt;
    yt = void 0;
    try {
      t();
    } finally {
      yt = n;
    }
  }
}
let pa = 0;
class s0 {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class bs {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!yt || !Mn || yt === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== yt) n = this.activeLink = new s0(yt, this), yt.deps ? (n.prevDep = yt.depsTail, yt.depsTail.nextDep = n, yt.depsTail = n) : yt.deps = yt.depsTail = n, rv(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = yt.depsTail, n.nextDep = void 0, yt.depsTail.nextDep = n, yt.depsTail = n, yt.deps === n && (yt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, pa++, this.notify(t);
  }
  notify(t) {
    ms();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      hs();
    }
  }
}
function rv(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) rv(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ku = /* @__PURE__ */ new WeakMap(), jl = Symbol(""), Tu = Symbol(""), ya = Symbol("");
function Xt(e, t, n) {
  if (Mn && yt) {
    let r = ku.get(e);
    r || ku.set(e, r = /* @__PURE__ */ new Map());
    let l = r.get(n);
    l || (r.set(n, l = new bs()), l.map = r, l.key = n), l.track();
  }
}
function Gn(e, t, n, r, l, a) {
  const o = ku.get(e);
  if (!o) {
    pa++;
    return;
  }
  const i = (s) => {
    s && s.trigger();
  };
  if (ms(), t === "clear") o.forEach(i);
  else {
    const s = He(e), d = s && fs(n);
    if (s && n === "length") {
      const c = Number(r);
      o.forEach((v, u) => {
        (u === "length" || u === ya || !Sl(u) && u >= c) && i(v);
      });
    } else switch ((n !== void 0 || o.has(void 0)) && i(o.get(n)), d && i(o.get(ya)), t) {
      case "add":
        s ? d && i(o.get("length")) : (i(o.get(jl)), gr(e) && i(o.get(Tu)));
        break;
      case "delete":
        s || (i(o.get(jl)), gr(e) && i(o.get(Tu)));
        break;
      case "set":
        gr(e) && i(o.get(jl));
        break;
    }
  }
  hs();
}
function lr(e) {
  const t = Ze(e);
  return t === e ? t : (Xt(t, "iterate", ya), Rn(e) ? t : t.map(Jt));
}
function ps(e) {
  return Xt(e = Ze(e), "iterate", ya), e;
}
const c0 = { __proto__: null, [Symbol.iterator]() {
  return $i(this, Symbol.iterator, Jt);
}, concat(...e) {
  return lr(this).concat(...e.map((t) => He(t) ? lr(t) : t));
}, entries() {
  return $i(this, "entries", (e) => (e[1] = Jt(e[1]), e));
}, every(e, t) {
  return Hn(this, "every", e, t, void 0, arguments);
}, filter(e, t) {
  return Hn(this, "filter", e, t, (n) => n.map(Jt), arguments);
}, find(e, t) {
  return Hn(this, "find", e, t, Jt, arguments);
}, findIndex(e, t) {
  return Hn(this, "findIndex", e, t, void 0, arguments);
}, findLast(e, t) {
  return Hn(this, "findLast", e, t, Jt, arguments);
}, findLastIndex(e, t) {
  return Hn(this, "findLastIndex", e, t, void 0, arguments);
}, forEach(e, t) {
  return Hn(this, "forEach", e, t, void 0, arguments);
}, includes(...e) {
  return Pi(this, "includes", e);
}, indexOf(...e) {
  return Pi(this, "indexOf", e);
}, join(e) {
  return lr(this).join(e);
}, lastIndexOf(...e) {
  return Pi(this, "lastIndexOf", e);
}, map(e, t) {
  return Hn(this, "map", e, t, void 0, arguments);
}, pop() {
  return Vr(this, "pop");
}, push(...e) {
  return Vr(this, "push", e);
}, reduce(e, ...t) {
  return bc(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return bc(this, "reduceRight", e, t);
}, shift() {
  return Vr(this, "shift");
}, some(e, t) {
  return Hn(this, "some", e, t, void 0, arguments);
}, splice(...e) {
  return Vr(this, "splice", e);
}, toReversed() {
  return lr(this).toReversed();
}, toSorted(e) {
  return lr(this).toSorted(e);
}, toSpliced(...e) {
  return lr(this).toSpliced(...e);
}, unshift(...e) {
  return Vr(this, "unshift", e);
}, values() {
  return $i(this, "values", Jt);
} };
function $i(e, t, n) {
  const r = ps(e), l = r[t]();
  return r !== e && !Rn(e) && (l._next = l.next, l.next = () => {
    const a = l._next();
    return a.value && (a.value = n(a.value)), a;
  }), l;
}
const d0 = Array.prototype;
function Hn(e, t, n, r, l, a) {
  const o = ps(e), i = o !== e && !Rn(e), s = o[t];
  if (s !== d0[t]) {
    const v = s.apply(e, a);
    return i ? Jt(v) : v;
  }
  let d = n;
  o !== e && (i ? d = function(v, u) {
    return n.call(this, Jt(v), u, e);
  } : n.length > 2 && (d = function(v, u) {
    return n.call(this, v, u, e);
  }));
  const c = s.call(o, d, r);
  return i && l ? l(c) : c;
}
function bc(e, t, n, r) {
  const l = ps(e);
  let a = n;
  return l !== e && (Rn(e) ? n.length > 3 && (a = function(o, i, s) {
    return n.call(this, o, i, s, e);
  }) : a = function(o, i, s) {
    return n.call(this, o, Jt(i), s, e);
  }), l[t](a, ...r);
}
function Pi(e, t, n) {
  const r = Ze(e);
  Xt(r, "iterate", ya);
  const l = r[t](...n);
  return (l === -1 || l === false) && xs(n[0]) ? (n[0] = Ze(n[0]), r[t](...n)) : l;
}
function Vr(e, t, n = []) {
  Cl(), ms();
  const r = Ze(e)[t].apply(e, n);
  return hs(), kl(), r;
}
const f0 = /* @__PURE__ */ ss("__proto__,__v_isRef,__isVue"), av = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Sl));
function v0(e) {
  Sl(e) || (e = String(e));
  const t = Ze(this);
  return Xt(t, "has", e), t.hasOwnProperty(e);
}
class ov {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const l = this._isReadonly, a = this._isShallow;
    if (n === "__v_isReactive") return !l;
    if (n === "__v_isReadonly") return l;
    if (n === "__v_isShallow") return a;
    if (n === "__v_raw") return r === (l ? a ? S0 : cv : a ? sv : uv).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = He(t);
    if (!l) {
      let s;
      if (o && (s = c0[n])) return s;
      if (n === "hasOwnProperty") return v0;
    }
    const i = Reflect.get(t, n, wt(t) ? t : r);
    return (Sl(n) ? av.has(n) : f0(n)) || (l || Xt(t, "get", n), a) ? i : wt(i) ? o && fs(n) ? i : i.value : kt(i) ? l ? dv(i) : Vn(i) : i;
  }
}
class iv extends ov {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, r, l) {
    let a = t[n];
    if (!this._isShallow) {
      const s = Yl(a);
      if (!Rn(r) && !Yl(r) && (a = Ze(a), r = Ze(r)), !He(t) && wt(a) && !wt(r)) return s ? false : (a.value = r, true);
    }
    const o = He(t) && fs(n) ? Number(n) < t.length : dt(t, n), i = Reflect.set(t, n, r, wt(t) ? t : l);
    return t === Ze(l) && (o ? yl(r, a) && Gn(t, "set", n, r) : Gn(t, "add", n, r)), i;
  }
  deleteProperty(t, n) {
    const r = dt(t, n);
    t[n];
    const l = Reflect.deleteProperty(t, n);
    return l && r && Gn(t, "delete", n, void 0), l;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Sl(n) || !av.has(n)) && Xt(t, "has", n), r;
  }
  ownKeys(t) {
    return Xt(t, "iterate", He(t) ? "length" : jl), Reflect.ownKeys(t);
  }
}
class m0 extends ov {
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
const h0 = new iv(), g0 = new m0(), b0 = new iv(true);
const qu = (e) => e, Na = (e) => Reflect.getPrototypeOf(e);
function p0(e, t, n) {
  return function(...r) {
    const l = this.__v_raw, a = Ze(l), o = gr(a), i = e === "entries" || e === Symbol.iterator && o, s = e === "keys" && o, d = l[e](...r), c = n ? qu : t ? Eu : Jt;
    return !t && Xt(a, "iterate", s ? Tu : jl), { next() {
      const { value: v, done: u } = d.next();
      return u ? { value: v, done: u } : { value: i ? [c(v[0]), c(v[1])] : c(v), done: u };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function Ha(e) {
  return function(...t) {
    return e === "delete" ? false : e === "clear" ? void 0 : this;
  };
}
function y0(e, t) {
  const n = { get(l) {
    const a = this.__v_raw, o = Ze(a), i = Ze(l);
    e || (yl(l, i) && Xt(o, "get", l), Xt(o, "get", i));
    const { has: s } = Na(o), d = t ? qu : e ? Eu : Jt;
    if (s.call(o, l)) return d(a.get(l));
    if (s.call(o, i)) return d(a.get(i));
    a !== o && a.get(l);
  }, get size() {
    const l = this.__v_raw;
    return !e && Xt(Ze(l), "iterate", jl), Reflect.get(l, "size", l);
  }, has(l) {
    const a = this.__v_raw, o = Ze(a), i = Ze(l);
    return e || (yl(l, i) && Xt(o, "has", l), Xt(o, "has", i)), l === i ? a.has(l) : a.has(l) || a.has(i);
  }, forEach(l, a) {
    const o = this, i = o.__v_raw, s = Ze(i), d = t ? qu : e ? Eu : Jt;
    return !e && Xt(s, "iterate", jl), i.forEach((c, v) => l.call(a, d(c), d(v), o));
  } };
  return zt(n, e ? { add: Ha("add"), set: Ha("set"), delete: Ha("delete"), clear: Ha("clear") } : { add(l) {
    !t && !Rn(l) && !Yl(l) && (l = Ze(l));
    const a = Ze(this);
    return Na(a).has.call(a, l) || (a.add(l), Gn(a, "add", l, l)), this;
  }, set(l, a) {
    !t && !Rn(a) && !Yl(a) && (a = Ze(a));
    const o = Ze(this), { has: i, get: s } = Na(o);
    let d = i.call(o, l);
    d || (l = Ze(l), d = i.call(o, l));
    const c = s.call(o, l);
    return o.set(l, a), d ? yl(a, c) && Gn(o, "set", l, a) : Gn(o, "add", l, a), this;
  }, delete(l) {
    const a = Ze(this), { has: o, get: i } = Na(a);
    let s = o.call(a, l);
    s || (l = Ze(l), s = o.call(a, l)), i && i.call(a, l);
    const d = a.delete(l);
    return s && Gn(a, "delete", l, void 0), d;
  }, clear() {
    const l = Ze(this), a = l.size !== 0, o = l.clear();
    return a && Gn(l, "clear", void 0, void 0), o;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
    n[l] = p0(l, e, t);
  }), n;
}
function ys(e, t) {
  const n = y0(e, t);
  return (r, l, a) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? r : Reflect.get(dt(n, l) && l in r ? n : r, l, a);
}
const _0 = { get: ys(false, false) }, w0 = { get: ys(false, true) }, x0 = { get: ys(true, false) };
const uv = /* @__PURE__ */ new WeakMap(), sv = /* @__PURE__ */ new WeakMap(), cv = /* @__PURE__ */ new WeakMap(), S0 = /* @__PURE__ */ new WeakMap();
function C0(e) {
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
function k0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : C0(Yg(e));
}
function Vn(e) {
  return Yl(e) ? e : ws(e, false, h0, _0, uv);
}
function _s(e) {
  return ws(e, false, b0, w0, sv);
}
function dv(e) {
  return ws(e, true, g0, x0, cv);
}
function ws(e, t, n, r, l) {
  if (!kt(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const a = l.get(e);
  if (a) return a;
  const o = k0(e);
  if (o === 0) return e;
  const i = new Proxy(e, o === 2 ? r : n);
  return l.set(e, i), i;
}
function ia(e) {
  return Yl(e) ? ia(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Yl(e) {
  return !!(e && e.__v_isReadonly);
}
function Rn(e) {
  return !!(e && e.__v_isShallow);
}
function xs(e) {
  return e ? !!e.__v_raw : false;
}
function Ze(e) {
  const t = e && e.__v_raw;
  return t ? Ze(t) : e;
}
function ni(e) {
  return !dt(e, "__v_skip") && Object.isExtensible(e) && Kf(e, "__v_skip", true), e;
}
const Jt = (e) => kt(e) ? Vn(e) : e, Eu = (e) => kt(e) ? dv(e) : e;
function wt(e) {
  return e ? e.__v_isRef === true : false;
}
function U(e) {
  return fv(e, false);
}
function T0(e) {
  return fv(e, true);
}
function fv(e, t) {
  return wt(e) ? e : new q0(e, t);
}
class q0 {
  constructor(t, n) {
    this.dep = new bs(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Ze(t), this._value = n ? t : Jt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || Rn(t) || Yl(t);
    t = r ? t : Ze(t), yl(t, n) && (this._rawValue = t, this._value = r ? t : Jt(t), this.dep.trigger());
  }
}
function Ve(e) {
  return wt(e) ? e.value : e;
}
const E0 = { get: (e, t, n) => t === "__v_raw" ? e : Ve(Reflect.get(e, t, n)), set: (e, t, n, r) => {
  const l = e[t];
  return wt(l) && !wt(n) ? (l.value = n, true) : Reflect.set(e, t, n, r);
} };
function vv(e) {
  return ia(e) ? e : new Proxy(e, E0);
}
class M0 {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new bs(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = pa - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && yt !== this) return Jf(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return nv(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function R0(e, t, n = false) {
  let r, l;
  return Ye(e) ? r = e : (r = e.get, l = e.set), new M0(r, l, n);
}
const ja = {}, Co = /* @__PURE__ */ new WeakMap();
let Vl;
function A0(e, t = false, n = Vl) {
  if (n) {
    let r = Co.get(n);
    r || Co.set(n, r = []), r.push(e);
  }
}
function $0(e, t, n = gt) {
  const { immediate: r, deep: l, once: a, scheduler: o, augmentJob: i, call: s } = n, d = (b) => l ? b : Rn(b) || l === false || l === 0 ? Zn(b, 1) : Zn(b);
  let c, v, u, h, g = false, _ = false;
  if (wt(e) ? (v = () => e.value, g = Rn(e)) : ia(e) ? (v = () => d(e), g = true) : He(e) ? (_ = true, g = e.some((b) => ia(b) || Rn(b)), v = () => e.map((b) => {
    if (wt(b)) return b.value;
    if (ia(b)) return d(b);
    if (Ye(b)) return s ? s(b, 2) : b();
  })) : Ye(e) ? t ? v = s ? () => s(e, 2) : e : v = () => {
    if (u) {
      Cl();
      try {
        u();
      } finally {
        kl();
      }
    }
    const b = Vl;
    Vl = c;
    try {
      return s ? s(e, 3, [h]) : e(h);
    } finally {
      Vl = b;
    }
  } : v = Dn, t && l) {
    const b = v, S = l === true ? 1 / 0 : l;
    v = () => Zn(b(), S);
  }
  const w = i0(), k = () => {
    c.stop(), w && w.active && ds(w.effects, c);
  };
  if (a && t) {
    const b = t;
    t = (...S) => {
      b(...S), k();
    };
  }
  let y = _ ? new Array(e.length).fill(ja) : ja;
  const p = (b) => {
    if (!(!(c.flags & 1) || !c.dirty && !b)) if (t) {
      const S = c.run();
      if (l || g || (_ ? S.some((P, F) => yl(P, y[F])) : yl(S, y))) {
        u && u();
        const P = Vl;
        Vl = c;
        try {
          const F = [S, y === ja ? void 0 : _ && y[0] === ja ? [] : y, h];
          s ? s(t, 3, F) : t(...F), y = S;
        } finally {
          Vl = P;
        }
      }
    } else c.run();
  };
  return i && i(p), c = new Gf(v), c.scheduler = o ? () => o(p, false) : p, h = (b) => A0(b, false, c), u = c.onStop = () => {
    const b = Co.get(c);
    if (b) {
      if (s) s(b, 4);
      else for (const S of b) S();
      Co.delete(c);
    }
  }, t ? r ? p(true) : y = c.run() : o ? o(p.bind(null, true), true) : c.run(), k.pause = c.pause.bind(c), k.resume = c.resume.bind(c), k.stop = k, k;
}
function Zn(e, t = 1 / 0, n) {
  if (t <= 0 || !kt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
  if (n.add(e), t--, wt(e)) Zn(e.value, t, n);
  else if (He(e)) for (let r = 0; r < e.length; r++) Zn(e[r], t, n);
  else if (Hf(e) || gr(e)) e.forEach((r) => {
    Zn(r, t, n);
  });
  else if (Qf(e)) {
    for (const r in e) Zn(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Zn(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ba(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (l) {
    li(l, t, n);
  }
}
function $n(e, t, n, r) {
  if (Ye(e)) {
    const l = Ba(e, t, n, r);
    return l && jf(l) && l.catch((a) => {
      li(a, t, n);
    }), l;
  }
  if (He(e)) {
    const l = [];
    for (let a = 0; a < e.length; a++) l.push($n(e[a], t, n, r));
    return l;
  }
}
function li(e, t, n, r = true) {
  const l = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: o } = t && t.appContext.config || gt;
  if (t) {
    let i = t.parent;
    const s = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; i; ) {
      const c = i.ec;
      if (c) {
        for (let v = 0; v < c.length; v++) if (c[v](e, s, d) === false) return;
      }
      i = i.parent;
    }
    if (a) {
      Cl(), Ba(a, null, 10, [e, s, d]), kl();
      return;
    }
  }
  P0(e, n, l, r, o);
}
function P0(e, t, n, r = true, l = false) {
  if (l) throw e;
  console.error(e);
}
const en = [];
let Fn = -1;
const br = [];
let fl = null, dr = 0;
const mv = Promise.resolve();
let ko = null;
function We(e) {
  const t = ko || mv;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function L0(e) {
  let t = Fn + 1, n = en.length;
  for (; t < n; ) {
    const r = t + n >>> 1, l = en[r], a = _a(l);
    a < e || a === e && l.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Ss(e) {
  if (!(e.flags & 1)) {
    const t = _a(e), n = en[en.length - 1];
    !n || !(e.flags & 2) && t >= _a(n) ? en.push(e) : en.splice(L0(t), 0, e), e.flags |= 1, hv();
  }
}
function hv() {
  ko || (ko = mv.then(bv));
}
function B0(e) {
  He(e) ? br.push(...e) : fl && e.id === -1 ? fl.splice(dr + 1, 0, e) : e.flags & 1 || (br.push(e), e.flags |= 1), hv();
}
function pc(e, t, n = Fn + 1) {
  for (; n < en.length; n++) {
    const r = en[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      en.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function gv(e) {
  if (br.length) {
    const t = [...new Set(br)].sort((n, r) => _a(n) - _a(r));
    if (br.length = 0, fl) {
      fl.push(...t);
      return;
    }
    for (fl = t, dr = 0; dr < fl.length; dr++) {
      const n = fl[dr];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    fl = null, dr = 0;
  }
}
const _a = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function bv(e) {
  try {
    for (Fn = 0; Fn < en.length; Fn++) {
      const t = en[Fn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ba(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Fn < en.length; Fn++) {
      const t = en[Fn];
      t && (t.flags &= -2);
    }
    Fn = -1, en.length = 0, gv(), ko = null, (en.length || br.length) && bv();
  }
}
let rn = null, pv = null;
function To(e) {
  const t = rn;
  return rn = e, pv = e && e.type.__scopeId || null, t;
}
function qt(e, t = rn, n) {
  if (!t || e._n) return e;
  const r = (...l) => {
    r._d && Ac(-1);
    const a = To(t);
    let o;
    try {
      o = e(...l);
    } finally {
      To(a), r._d && Ac(1);
    }
    return o;
  };
  return r._n = true, r._c = true, r._d = true, r;
}
function dn(e, t) {
  if (rn === null) return e;
  const n = di(rn), r = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [a, o, i, s = gt] = t[l];
    a && (Ye(a) && (a = { mounted: a, updated: a }), a.deep && Zn(o), r.push({ dir: a, instance: n, value: o, oldValue: void 0, arg: i, modifiers: s }));
  }
  return e;
}
function Rl(e, t, n, r) {
  const l = e.dirs, a = t && t.dirs;
  for (let o = 0; o < l.length; o++) {
    const i = l[o];
    a && (i.oldValue = a[o].value);
    let s = i.dir[r];
    s && (Cl(), $n(s, n, 8, [e.el, i, e, t]), kl());
  }
}
const yv = Symbol("_vte"), _v = (e) => e.__isTeleport, ua = (e) => e && (e.disabled || e.disabled === ""), yc = (e) => e && (e.defer || e.defer === ""), _c = (e) => typeof SVGElement < "u" && e instanceof SVGElement, wc = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Mu = (e, t) => {
  const n = e && e.to;
  return Pt(n) ? t ? t(n) : null : n;
}, wv = { name: "Teleport", __isTeleport: true, process(e, t, n, r, l, a, o, i, s, d) {
  const { mc: c, pc: v, pbc: u, o: { insert: h, querySelector: g, createText: _, createComment: w } } = d, k = ua(t.props);
  let { shapeFlag: y, children: p, dynamicChildren: b } = t;
  if (e == null) {
    const S = t.el = _(""), P = t.anchor = _("");
    h(S, n, r), h(P, n, r);
    const F = (L, B) => {
      y & 16 && (l && l.isCE && (l.ce._teleportTarget = L), c(p, L, B, l, a, o, i, s));
    }, z = () => {
      const L = t.target = Mu(t.props, g), B = xv(L, t, _, h);
      L && (o !== "svg" && _c(L) ? o = "svg" : o !== "mathml" && wc(L) && (o = "mathml"), k || (F(L, B), fo(t, false)));
    };
    k && (F(n, P), fo(t, true)), yc(t.props) ? Ot(() => {
      z(), t.el.__isMounted = true;
    }, a) : z();
  } else {
    if (yc(t.props) && !e.el.__isMounted) {
      Ot(() => {
        wv.process(e, t, n, r, l, a, o, i, s, d), delete e.el.__isMounted;
      }, a);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const S = t.anchor = e.anchor, P = t.target = e.target, F = t.targetAnchor = e.targetAnchor, z = ua(e.props), L = z ? n : P, B = z ? S : F;
    if (o === "svg" || _c(P) ? o = "svg" : (o === "mathml" || wc(P)) && (o = "mathml"), b ? (u(e.dynamicChildren, b, L, l, a, o, i), qs(e, t, true)) : s || v(e, t, L, B, l, a, o, i, false), k) z ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ua(t, n, S, d, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const D = t.target = Mu(t.props, g);
      D && Ua(t, D, null, d, 0);
    } else z && Ua(t, P, F, d, 1);
    fo(t, k);
  }
}, remove(e, t, n, { um: r, o: { remove: l } }, a) {
  const { shapeFlag: o, children: i, anchor: s, targetStart: d, targetAnchor: c, target: v, props: u } = e;
  if (v && (l(d), l(c)), a && l(s), o & 16) {
    const h = a || !ua(u);
    for (let g = 0; g < i.length; g++) {
      const _ = i[g];
      r(_, t, n, h, !!_.dynamicChildren);
    }
  }
}, move: Ua, hydrate: F0 };
function Ua(e, t, n, { o: { insert: r }, m: l }, a = 2) {
  a === 0 && r(e.targetAnchor, t, n);
  const { el: o, anchor: i, shapeFlag: s, children: d, props: c } = e, v = a === 2;
  if (v && r(o, t, n), (!v || ua(c)) && s & 16) for (let u = 0; u < d.length; u++) l(d[u], t, n, 2);
  v && r(i, t, n);
}
function F0(e, t, n, r, l, a, { o: { nextSibling: o, parentNode: i, querySelector: s, insert: d, createText: c } }, v) {
  const u = t.target = Mu(t.props, s);
  if (u) {
    const h = ua(t.props), g = u._lpa || u.firstChild;
    if (t.shapeFlag & 16) if (h) t.anchor = v(o(e), t, i(e), n, r, l, a), t.targetStart = g, t.targetAnchor = g && o(g);
    else {
      t.anchor = o(e);
      let _ = g;
      for (; _; ) {
        if (_ && _.nodeType === 8) {
          if (_.data === "teleport start anchor") t.targetStart = _;
          else if (_.data === "teleport anchor") {
            t.targetAnchor = _, u._lpa = t.targetAnchor && o(t.targetAnchor);
            break;
          }
        }
        _ = o(_);
      }
      t.targetAnchor || xv(u, t, c, d), v(g && o(g), t, u, n, r, l, a);
    }
    fo(t, h);
  }
  return t.anchor && o(t.anchor);
}
const O0 = wv;
function fo(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, l;
    for (t ? (r = e.el, l = e.anchor) : (r = e.targetStart, l = e.targetAnchor); r && r !== l; ) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function xv(e, t, n, r) {
  const l = t.targetStart = n(""), a = t.targetAnchor = n("");
  return l[yv] = a, e && (r(l, e), r(a, e)), a;
}
const vl = Symbol("_leaveCb"), Qa = Symbol("_enterCb");
function Sv() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return ft(() => {
    e.isMounted = true;
  }), Xe(() => {
    e.isUnmounting = true;
  }), e;
}
const vn = [Function, Array], Cv = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: vn, onEnter: vn, onAfterEnter: vn, onEnterCancelled: vn, onBeforeLeave: vn, onLeave: vn, onAfterLeave: vn, onLeaveCancelled: vn, onBeforeAppear: vn, onAppear: vn, onAfterAppear: vn, onAppearCancelled: vn }, kv = (e) => {
  const t = e.subTree;
  return t.component ? kv(t.component) : t;
}, V0 = { name: "BaseTransition", props: Cv, setup(e, { slots: t }) {
  const n = xe(), r = Sv();
  return () => {
    const l = t.default && Cs(t.default(), true);
    if (!l || !l.length) return;
    const a = Tv(l), o = Ze(e), { mode: i } = o;
    if (r.isLeaving) return Li(a);
    const s = xc(a);
    if (!s) return Li(a);
    let d = wa(s, o, r, n, (v) => d = v);
    s.type !== tn && xl(s, d);
    let c = n.subTree && xc(n.subTree);
    if (c && c.type !== tn && !gl(s, c) && kv(n).type !== tn) {
      let v = wa(c, o, r, n);
      if (xl(c, v), i === "out-in" && s.type !== tn) return r.isLeaving = true, v.afterLeave = () => {
        r.isLeaving = false, n.job.flags & 8 || n.update(), delete v.afterLeave, c = void 0;
      }, Li(a);
      i === "in-out" && s.type !== tn ? v.delayLeave = (u, h, g) => {
        const _ = qv(r, c);
        _[String(c.key)] = c, u[vl] = () => {
          h(), u[vl] = void 0, delete d.delayedLeave, c = void 0;
        }, d.delayedLeave = () => {
          g(), delete d.delayedLeave, c = void 0;
        };
      } : c = void 0;
    } else c && (c = void 0);
    return a;
  };
} };
function Tv(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== tn) {
      t = n;
      break;
    }
  }
  return t;
}
const D0 = V0;
function qv(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function wa(e, t, n, r, l) {
  const { appear: a, mode: o, persisted: i = false, onBeforeEnter: s, onEnter: d, onAfterEnter: c, onEnterCancelled: v, onBeforeLeave: u, onLeave: h, onAfterLeave: g, onLeaveCancelled: _, onBeforeAppear: w, onAppear: k, onAfterAppear: y, onAppearCancelled: p } = t, b = String(e.key), S = qv(n, e), P = (L, B) => {
    L && $n(L, r, 9, B);
  }, F = (L, B) => {
    const D = B[1];
    P(L, B), He(L) ? L.every((q) => q.length <= 1) && D() : L.length <= 1 && D();
  }, z = { mode: o, persisted: i, beforeEnter(L) {
    let B = s;
    if (!n.isMounted) if (a) B = w || s;
    else return;
    L[vl] && L[vl](true);
    const D = S[b];
    D && gl(e, D) && D.el[vl] && D.el[vl](), P(B, [L]);
  }, enter(L) {
    let B = d, D = c, q = v;
    if (!n.isMounted) if (a) B = k || d, D = y || c, q = p || v;
    else return;
    let R = false;
    const C = L[Qa] = (H) => {
      R || (R = true, H ? P(q, [L]) : P(D, [L]), z.delayedLeave && z.delayedLeave(), L[Qa] = void 0);
    };
    B ? F(B, [L, C]) : C();
  }, leave(L, B) {
    const D = String(e.key);
    if (L[Qa] && L[Qa](true), n.isUnmounting) return B();
    P(u, [L]);
    let q = false;
    const R = L[vl] = (C) => {
      q || (q = true, B(), C ? P(_, [L]) : P(g, [L]), L[vl] = void 0, S[D] === e && delete S[D]);
    };
    S[D] = e, h ? F(h, [L, R]) : R();
  }, clone(L) {
    const B = wa(L, t, n, r, l);
    return l && l(B), B;
  } };
  return z;
}
function Li(e) {
  if (ri(e)) return e = Jn(e), e.children = null, e;
}
function xc(e) {
  if (!ri(e)) return _v(e.type) && e.children ? Tv(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && Ye(n.default)) return n.default();
  }
}
function xl(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, xl(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Cs(e, t = false, n) {
  let r = [], l = 0;
  for (let a = 0; a < e.length; a++) {
    let o = e[a];
    const i = n == null ? o.key : String(n) + String(o.key != null ? o.key : a);
    o.type === ln ? (o.patchFlag & 128 && l++, r = r.concat(Cs(o.children, t, i))) : (t || o.type !== tn) && r.push(i != null ? Jn(o, { key: i }) : o);
  }
  if (l > 1) for (let a = 0; a < r.length; a++) r[a].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Tl(e, t) {
  return Ye(e) ? zt({ name: e.name }, t, { setup: e }) : e;
}
function Ev(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function qo(e, t, n, r, l = false) {
  if (He(e)) {
    e.forEach((g, _) => qo(g, t && (He(t) ? t[_] : t), n, r, l));
    return;
  }
  if (pr(r) && !l) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && qo(e, t, n, r.component.subTree);
    return;
  }
  const a = r.shapeFlag & 4 ? di(r.component) : r.el, o = l ? null : a, { i, r: s } = e, d = t && t.r, c = i.refs === gt ? i.refs = {} : i.refs, v = i.setupState, u = Ze(v), h = v === gt ? () => false : (g) => dt(u, g);
  if (d != null && d !== s && (Pt(d) ? (c[d] = null, h(d) && (v[d] = null)) : wt(d) && (d.value = null)), Ye(s)) Ba(s, i, 12, [o, c]);
  else {
    const g = Pt(s), _ = wt(s);
    if (g || _) {
      const w = () => {
        if (e.f) {
          const k = g ? h(s) ? v[s] : c[s] : s.value;
          l ? He(k) && ds(k, a) : He(k) ? k.includes(a) || k.push(a) : g ? (c[s] = [a], h(s) && (v[s] = c[s])) : (s.value = [a], e.k && (c[e.k] = s.value));
        } else g ? (c[s] = o, h(s) && (v[s] = o)) : _ && (s.value = o, e.k && (c[e.k] = o));
      };
      o ? (w.id = -1, Ot(w, n)) : w();
    }
  }
}
La().requestIdleCallback;
La().cancelIdleCallback;
const pr = (e) => !!e.type.__asyncLoader, ri = (e) => e.type.__isKeepAlive, I0 = { name: "KeepAlive", __isKeepAlive: true, props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] }, setup(e, { slots: t }) {
  const n = xe(), r = n.ctx;
  if (!r.renderer) return () => {
    const y = t.default && t.default();
    return y && y.length === 1 ? y[0] : y;
  };
  const l = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
  let o = null;
  const i = n.suspense, { renderer: { p: s, m: d, um: c, o: { createElement: v } } } = r, u = v("div");
  r.activate = (y, p, b, S, P) => {
    const F = y.component;
    d(y, p, b, 0, i), s(F.vnode, y, p, b, F, i, S, y.slotScopeIds, P), Ot(() => {
      F.isDeactivated = false, F.a && ra(F.a);
      const z = y.props && y.props.onVnodeMounted;
      z && hn(z, F.parent, y);
    }, i);
  }, r.deactivate = (y) => {
    const p = y.component;
    Mo(p.m), Mo(p.a), d(y, u, null, 1, i), Ot(() => {
      p.da && ra(p.da);
      const b = y.props && y.props.onVnodeUnmounted;
      b && hn(b, p.parent, y), p.isDeactivated = true;
    }, i);
  };
  function h(y) {
    Bi(y), c(y, n, i, true);
  }
  function g(y) {
    l.forEach((p, b) => {
      const S = Fu(p.type);
      S && !y(S) && _(b);
    });
  }
  function _(y) {
    const p = l.get(y);
    p && (!o || !gl(p, o)) ? h(p) : o && Bi(o), l.delete(y), a.delete(y);
  }
  he(() => [e.include, e.exclude], ([y, p]) => {
    y && g((b) => Yr(y, b)), p && g((b) => !Yr(p, b));
  }, { flush: "post", deep: true });
  let w = null;
  const k = () => {
    w != null && (Ro(n.subTree.type) ? Ot(() => {
      l.set(w, Ka(n.subTree));
    }, n.subTree.suspense) : l.set(w, Ka(n.subTree)));
  };
  return ft(k), ii(k), Xe(() => {
    l.forEach((y) => {
      const { subTree: p, suspense: b } = n, S = Ka(p);
      if (y.type === S.type && y.key === S.key) {
        Bi(S);
        const P = S.component.da;
        P && Ot(P, b);
        return;
      }
      h(y);
    });
  }), () => {
    if (w = null, !t.default) return o = null;
    const y = t.default(), p = y[0];
    if (y.length > 1) return o = null, y;
    if (!Ca(p) || !(p.shapeFlag & 4) && !(p.shapeFlag & 128)) return o = null, p;
    let b = Ka(p);
    if (b.type === tn) return o = null, b;
    const S = b.type, P = Fu(pr(b) ? b.type.__asyncResolved || {} : S), { include: F, exclude: z, max: L } = e;
    if (F && (!P || !Yr(F, P)) || z && P && Yr(z, P)) return b.shapeFlag &= -257, o = b, p;
    const B = b.key == null ? S : b.key, D = l.get(B);
    return b.el && (b = Jn(b), p.shapeFlag & 128 && (p.ssContent = b)), w = B, D ? (b.el = D.el, b.component = D.component, b.transition && xl(b, b.transition), b.shapeFlag |= 512, a.delete(B), a.add(B)) : (a.add(B), L && a.size > parseInt(L, 10) && _(a.values().next().value)), b.shapeFlag |= 256, o = b, Ro(p.type) ? p : b;
  };
} }, Mv = I0;
function Yr(e, t) {
  return He(e) ? e.some((n) => Yr(n, t)) : Pt(e) ? e.split(",").includes(t) : Wg(e) ? (e.lastIndex = 0, e.test(t)) : false;
}
function ql(e, t) {
  Rv(e, "a", t);
}
function In(e, t) {
  Rv(e, "da", t);
}
function Rv(e, t, n = Ut) {
  const r = e.__wdc || (e.__wdc = () => {
    let l = n;
    for (; l; ) {
      if (l.isDeactivated) return;
      l = l.parent;
    }
    return e();
  });
  if (ai(t, r, n), n) {
    let l = n.parent;
    for (; l && l.parent; ) ri(l.parent.vnode) && z0(r, t, n, l), l = l.parent;
  }
}
function z0(e, t, n, r) {
  const l = ai(t, e, r, true);
  ui(() => {
    ds(r[t], l);
  }, n);
}
function Bi(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function Ka(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function ai(e, t, n = Ut, r = false) {
  if (n) {
    const l = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...o) => {
      Cl();
      const i = Fa(n), s = $n(t, n, e, o);
      return i(), kl(), s;
    });
    return r ? l.unshift(a) : l.push(a), a;
  }
}
const tl = (e) => (t, n = Ut) => {
  (!ka || e === "sp") && ai(e, (...r) => t(...r), n);
}, oi = tl("bm"), ft = tl("m"), $r = tl("bu"), ii = tl("u"), Xe = tl("bum"), ui = tl("um"), N0 = tl("sp"), H0 = tl("rtg"), j0 = tl("rtc");
function U0(e, t = Ut) {
  ai("ec", e, t);
}
const Av = "components", Q0 = "directives";
function ks(e, t) {
  return $v(Av, e, true, t) || e;
}
const K0 = Symbol.for("v-ndc");
function W0(e) {
  return $v(Q0, e);
}
function $v(e, t, n = true, r = false) {
  const l = rn || Ut;
  if (l) {
    const a = l.type;
    if (e === Av) {
      const i = Fu(a, false);
      if (i && (i === t || i === _n(t) || i === ei(_n(t)))) return a;
    }
    const o = Sc(l[e] || a[e], t) || Sc(l.appContext[e], t);
    return !o && r ? a : o;
  }
}
function Sc(e, t) {
  return e && (e[t] || e[_n(t)] || e[ei(_n(t))]);
}
const Ru = (e) => e ? Gv(e) ? di(e) : Ru(e.parent) : null, sa = zt(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => Ru(e.parent), $root: (e) => Ru(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => Lv(e), $forceUpdate: (e) => e.f || (e.f = () => {
  Ss(e.update);
}), $nextTick: (e) => e.n || (e.n = We.bind(e.proxy)), $watch: (e) => bb.bind(e) }), Fi = (e, t) => e !== gt && !e.__isScriptSetup && dt(e, t), Y0 = { get({ _: e }, t) {
  if (t === "__v_skip") return true;
  const { ctx: n, setupState: r, data: l, props: a, accessCache: o, type: i, appContext: s } = e;
  let d;
  if (t[0] !== "$") {
    const h = o[t];
    if (h !== void 0) switch (h) {
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
      if (Fi(r, t)) return o[t] = 1, r[t];
      if (l !== gt && dt(l, t)) return o[t] = 2, l[t];
      if ((d = e.propsOptions[0]) && dt(d, t)) return o[t] = 3, a[t];
      if (n !== gt && dt(n, t)) return o[t] = 4, n[t];
      Au && (o[t] = 0);
    }
  }
  const c = sa[t];
  let v, u;
  if (c) return t === "$attrs" && Xt(e.attrs, "get", ""), c(e);
  if ((v = i.__cssModules) && (v = v[t])) return v;
  if (n !== gt && dt(n, t)) return o[t] = 4, n[t];
  if (u = s.config.globalProperties, dt(u, t)) return u[t];
}, set({ _: e }, t, n) {
  const { data: r, setupState: l, ctx: a } = e;
  return Fi(l, t) ? (l[t] = n, true) : r !== gt && dt(r, t) ? (r[t] = n, true) : dt(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (a[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: l, propsOptions: a } }, o) {
  let i;
  return !!n[o] || e !== gt && dt(e, o) || Fi(t, o) || (i = a[0]) && dt(i, o) || dt(r, o) || dt(sa, o) || dt(l.config.globalProperties, o);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : dt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function Cc(e) {
  return He(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let Au = true;
function X0(e) {
  const t = Lv(e), n = e.proxy, r = e.ctx;
  Au = false, t.beforeCreate && kc(t.beforeCreate, e, "bc");
  const { data: l, computed: a, methods: o, watch: i, provide: s, inject: d, created: c, beforeMount: v, mounted: u, beforeUpdate: h, updated: g, activated: _, deactivated: w, beforeDestroy: k, beforeUnmount: y, destroyed: p, unmounted: b, render: S, renderTracked: P, renderTriggered: F, errorCaptured: z, serverPrefetch: L, expose: B, inheritAttrs: D, components: q, directives: R, filters: C } = t;
  if (d && G0(d, r, null), o) for (const K in o) {
    const G = o[K];
    Ye(G) && (r[K] = G.bind(n));
  }
  if (l) {
    const K = l.call(n, n);
    kt(K) && (e.data = Vn(K));
  }
  if (Au = true, a) for (const K in a) {
    const G = a[K], re = Ye(G) ? G.bind(n, n) : Ye(G.get) ? G.get.bind(n, n) : Dn, pe = !Ye(G) && Ye(G.set) ? G.set.bind(n) : Dn, Y = m({ get: re, set: pe });
    Object.defineProperty(r, K, { enumerable: true, configurable: true, get: () => Y.value, set: (M) => Y.value = M });
  }
  if (i) for (const K in i) Pv(i[K], r, n, K);
  if (s) {
    const K = Ye(s) ? s.call(n) : s;
    Reflect.ownKeys(K).forEach((G) => {
      pn(G, K[G]);
    });
  }
  c && kc(c, e, "c");
  function Q(K, G) {
    He(G) ? G.forEach((re) => K(re.bind(n))) : G && K(G.bind(n));
  }
  if (Q(oi, v), Q(ft, u), Q($r, h), Q(ii, g), Q(ql, _), Q(In, w), Q(U0, z), Q(j0, P), Q(H0, F), Q(Xe, y), Q(ui, b), Q(N0, L), He(B)) if (B.length) {
    const K = e.exposed || (e.exposed = {});
    B.forEach((G) => {
      Object.defineProperty(K, G, { get: () => n[G], set: (re) => n[G] = re });
    });
  } else e.exposed || (e.exposed = {});
  S && e.render === Dn && (e.render = S), D != null && (e.inheritAttrs = D), q && (e.components = q), R && (e.directives = R), L && Ev(e);
}
function G0(e, t, n = Dn) {
  He(e) && (e = $u(e));
  for (const r in e) {
    const l = e[r];
    let a;
    kt(l) ? "default" in l ? a = Rt(l.from || r, l.default, true) : a = Rt(l.from || r) : a = Rt(l), wt(a) ? Object.defineProperty(t, r, { enumerable: true, configurable: true, get: () => a.value, set: (o) => a.value = o }) : t[r] = a;
  }
}
function kc(e, t, n) {
  $n(He(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Pv(e, t, n, r) {
  let l = r.includes(".") ? Kv(n, r) : () => n[r];
  if (Pt(e)) {
    const a = t[e];
    Ye(a) && he(l, a);
  } else if (Ye(e)) he(l, e.bind(n));
  else if (kt(e)) if (He(e)) e.forEach((a) => Pv(a, t, n, r));
  else {
    const a = Ye(e.handler) ? e.handler.bind(n) : t[e.handler];
    Ye(a) && he(l, a, e);
  }
}
function Lv(e) {
  const t = e.type, { mixins: n, extends: r } = t, { mixins: l, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, i = a.get(t);
  let s;
  return i ? s = i : !l.length && !n && !r ? s = t : (s = {}, l.length && l.forEach((d) => Eo(s, d, o, true)), Eo(s, t, o)), kt(t) && a.set(t, s), s;
}
function Eo(e, t, n, r = false) {
  const { mixins: l, extends: a } = t;
  a && Eo(e, a, n, true), l && l.forEach((o) => Eo(e, o, n, true));
  for (const o in t) if (!(r && o === "expose")) {
    const i = Z0[o] || n && n[o];
    e[o] = i ? i(e[o], t[o]) : t[o];
  }
  return e;
}
const Z0 = { data: Tc, props: qc, emits: qc, methods: Xr, computed: Xr, beforeCreate: Zt, created: Zt, beforeMount: Zt, mounted: Zt, beforeUpdate: Zt, updated: Zt, beforeDestroy: Zt, beforeUnmount: Zt, destroyed: Zt, unmounted: Zt, activated: Zt, deactivated: Zt, errorCaptured: Zt, serverPrefetch: Zt, components: Xr, directives: Xr, watch: eb, provide: Tc, inject: J0 };
function Tc(e, t) {
  return t ? e ? function() {
    return zt(Ye(e) ? e.call(this, this) : e, Ye(t) ? t.call(this, this) : t);
  } : t : e;
}
function J0(e, t) {
  return Xr($u(e), $u(t));
}
function $u(e) {
  if (He(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Zt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Xr(e, t) {
  return e ? zt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function qc(e, t) {
  return e ? He(e) && He(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : zt(/* @__PURE__ */ Object.create(null), Cc(e), Cc(t ?? {})) : t;
}
function eb(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = zt(/* @__PURE__ */ Object.create(null), e);
  for (const r in t) n[r] = Zt(e[r], t[r]);
  return n;
}
function Bv() {
  return { app: null, config: { isNativeTag: Qg, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let tb = 0;
function nb(e, t) {
  return function(r, l = null) {
    Ye(r) || (r = zt({}, r)), l != null && !kt(l) && (l = null);
    const a = Bv(), o = /* @__PURE__ */ new WeakSet(), i = [];
    let s = false;
    const d = a.app = { _uid: tb++, _component: r, _props: l, _container: null, _context: a, _instance: null, version: Ob, get config() {
      return a.config;
    }, set config(c) {
    }, use(c, ...v) {
      return o.has(c) || (c && Ye(c.install) ? (o.add(c), c.install(d, ...v)) : Ye(c) && (o.add(c), c(d, ...v))), d;
    }, mixin(c) {
      return a.mixins.includes(c) || a.mixins.push(c), d;
    }, component(c, v) {
      return v ? (a.components[c] = v, d) : a.components[c];
    }, directive(c, v) {
      return v ? (a.directives[c] = v, d) : a.directives[c];
    }, mount(c, v, u) {
      if (!s) {
        const h = d._ceVNode || Ke(r, l);
        return h.appContext = a, u === true ? u = "svg" : u === false && (u = void 0), e(h, c, u), s = true, d._container = c, c.__vue_app__ = d, di(h.component);
      }
    }, onUnmount(c) {
      i.push(c);
    }, unmount() {
      s && ($n(i, d._instance, 16), e(null, d._container), delete d._container.__vue_app__);
    }, provide(c, v) {
      return a.provides[c] = v, d;
    }, runWithContext(c) {
      const v = yr;
      yr = d;
      try {
        return c();
      } finally {
        yr = v;
      }
    } };
    return d;
  };
}
let yr = null;
function pn(e, t) {
  if (Ut) {
    let n = Ut.provides;
    const r = Ut.parent && Ut.parent.provides;
    r === n && (n = Ut.provides = Object.create(r)), n[e] = t;
  }
}
function Rt(e, t, n = false) {
  const r = Ut || rn;
  if (r || yr) {
    const l = yr ? yr._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (l && e in l) return l[e];
    if (arguments.length > 1) return n && Ye(t) ? t.call(r && r.proxy) : t;
  }
}
const Fv = {}, Ov = () => Object.create(Fv), Vv = (e) => Object.getPrototypeOf(e) === Fv;
function lb(e, t, n, r = false) {
  const l = {}, a = Ov();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Dv(e, t, l, a);
  for (const o in e.propsOptions[0]) o in l || (l[o] = void 0);
  n ? e.props = r ? l : _s(l) : e.type.props ? e.props = l : e.props = a, e.attrs = a;
}
function rb(e, t, n, r) {
  const { props: l, attrs: a, vnode: { patchFlag: o } } = e, i = Ze(l), [s] = e.propsOptions;
  let d = false;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let v = 0; v < c.length; v++) {
        let u = c[v];
        if (si(e.emitsOptions, u)) continue;
        const h = t[u];
        if (s) if (dt(a, u)) h !== a[u] && (a[u] = h, d = true);
        else {
          const g = _n(u);
          l[g] = Pu(s, i, g, h, e, false);
        }
        else h !== a[u] && (a[u] = h, d = true);
      }
    }
  } else {
    Dv(e, t, l, a) && (d = true);
    let c;
    for (const v in i) (!t || !dt(t, v) && ((c = Jl(v)) === v || !dt(t, c))) && (s ? n && (n[v] !== void 0 || n[c] !== void 0) && (l[v] = Pu(s, i, v, void 0, e, true)) : delete l[v]);
    if (a !== i) for (const v in a) (!t || !dt(t, v)) && (delete a[v], d = true);
  }
  d && Gn(e.attrs, "set", "");
}
function Dv(e, t, n, r) {
  const [l, a] = e.propsOptions;
  let o = false, i;
  if (t) for (let s in t) {
    if (la(s)) continue;
    const d = t[s];
    let c;
    l && dt(l, c = _n(s)) ? !a || !a.includes(c) ? n[c] = d : (i || (i = {}))[c] = d : si(e.emitsOptions, s) || (!(s in r) || d !== r[s]) && (r[s] = d, o = true);
  }
  if (a) {
    const s = Ze(n), d = i || gt;
    for (let c = 0; c < a.length; c++) {
      const v = a[c];
      n[v] = Pu(l, s, v, d[v], e, !dt(d, v));
    }
  }
  return o;
}
function Pu(e, t, n, r, l, a) {
  const o = e[n];
  if (o != null) {
    const i = dt(o, "default");
    if (i && r === void 0) {
      const s = o.default;
      if (o.type !== Function && !o.skipFactory && Ye(s)) {
        const { propsDefaults: d } = l;
        if (n in d) r = d[n];
        else {
          const c = Fa(l);
          r = d[n] = s.call(null, t), c();
        }
      } else r = s;
      l.ce && l.ce._setProp(n, r);
    }
    o[0] && (a && !i ? r = false : o[1] && (r === "" || r === Jl(n)) && (r = true));
  }
  return r;
}
const ab = /* @__PURE__ */ new WeakMap();
function Iv(e, t, n = false) {
  const r = n ? ab : t.propsCache, l = r.get(e);
  if (l) return l;
  const a = e.props, o = {}, i = [];
  let s = false;
  if (!Ye(e)) {
    const c = (v) => {
      s = true;
      const [u, h] = Iv(v, t, true);
      zt(o, u), h && i.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!a && !s) return kt(e) && r.set(e, hr), hr;
  if (He(a)) for (let c = 0; c < a.length; c++) {
    const v = _n(a[c]);
    Ec(v) && (o[v] = gt);
  }
  else if (a) for (const c in a) {
    const v = _n(c);
    if (Ec(v)) {
      const u = a[c], h = o[v] = He(u) || Ye(u) ? { type: u } : zt({}, u), g = h.type;
      let _ = false, w = true;
      if (He(g)) for (let k = 0; k < g.length; ++k) {
        const y = g[k], p = Ye(y) && y.name;
        if (p === "Boolean") {
          _ = true;
          break;
        } else p === "String" && (w = false);
      }
      else _ = Ye(g) && g.name === "Boolean";
      h[0] = _, h[1] = w, (_ || dt(h, "default")) && i.push(v);
    }
  }
  const d = [o, i];
  return kt(e) && r.set(e, d), d;
}
function Ec(e) {
  return e[0] !== "$" && !la(e);
}
const zv = (e) => e[0] === "_" || e === "$stable", Ts = (e) => He(e) ? e.map(On) : [On(e)], ob = (e, t, n) => {
  if (t._n) return t;
  const r = qt((...l) => Ts(t(...l)), n);
  return r._c = false, r;
}, Nv = (e, t, n) => {
  const r = e._ctx;
  for (const l in e) {
    if (zv(l)) continue;
    const a = e[l];
    if (Ye(a)) t[l] = ob(l, a, r);
    else if (a != null) {
      const o = Ts(a);
      t[l] = () => o;
    }
  }
}, Hv = (e, t) => {
  const n = Ts(t);
  e.slots.default = () => n;
}, jv = (e, t, n) => {
  for (const r in t) (n || r !== "_") && (e[r] = t[r]);
}, ib = (e, t, n) => {
  const r = e.slots = Ov();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (jv(r, t, n), n && Kf(r, "_", l, true)) : Nv(t, r);
  } else t && Hv(e, t);
}, ub = (e, t, n) => {
  const { vnode: r, slots: l } = e;
  let a = true, o = gt;
  if (r.shapeFlag & 32) {
    const i = t._;
    i ? n && i === 1 ? a = false : jv(l, t, n) : (a = !t.$stable, Nv(t, l)), o = t;
  } else t && (Hv(e, t), o = { default: 1 });
  if (a) for (const i in l) !zv(i) && o[i] == null && delete l[i];
};
function sb() {
  typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && (La().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false);
}
const Ot = Cb;
function db(e) {
  return fb(e);
}
function fb(e, t) {
  sb();
  const n = La();
  n.__VUE__ = true;
  const { insert: r, remove: l, patchProp: a, createElement: o, createText: i, createComment: s, setText: d, setElementText: c, parentNode: v, nextSibling: u, setScopeId: h = Dn, insertStaticContent: g } = e, _ = (x, E, I, te = null, ne = null, W = null, ue = void 0, de = null, fe = !!E.dynamicChildren) => {
    if (x === E) return;
    x && !gl(x, E) && (te = A(x), M(x, ne, W, true), x = null), E.patchFlag === -2 && (fe = false, E.dynamicChildren = null);
    const { type: se, ref: le, shapeFlag: j } = E;
    switch (se) {
      case ci:
        w(x, E, I, te);
        break;
      case tn:
        k(x, E, I, te);
        break;
      case Vi:
        x == null && y(E, I, te, ue);
        break;
      case ln:
        q(x, E, I, te, ne, W, ue, de, fe);
        break;
      default:
        j & 1 ? S(x, E, I, te, ne, W, ue, de, fe) : j & 6 ? R(x, E, I, te, ne, W, ue, de, fe) : (j & 64 || j & 128) && se.process(x, E, I, te, ne, W, ue, de, fe, N);
    }
    le != null && ne && qo(le, x && x.ref, W, E || x, !E);
  }, w = (x, E, I, te) => {
    if (x == null) r(E.el = i(E.children), I, te);
    else {
      const ne = E.el = x.el;
      E.children !== x.children && d(ne, E.children);
    }
  }, k = (x, E, I, te) => {
    x == null ? r(E.el = s(E.children || ""), I, te) : E.el = x.el;
  }, y = (x, E, I, te) => {
    [x.el, x.anchor] = g(x.children, E, I, te, x.el, x.anchor);
  }, p = ({ el: x, anchor: E }, I, te) => {
    let ne;
    for (; x && x !== E; ) ne = u(x), r(x, I, te), x = ne;
    r(E, I, te);
  }, b = ({ el: x, anchor: E }) => {
    let I;
    for (; x && x !== E; ) I = u(x), l(x), x = I;
    l(E);
  }, S = (x, E, I, te, ne, W, ue, de, fe) => {
    E.type === "svg" ? ue = "svg" : E.type === "math" && (ue = "mathml"), x == null ? P(E, I, te, ne, W, ue, de, fe) : L(x, E, ne, W, ue, de, fe);
  }, P = (x, E, I, te, ne, W, ue, de) => {
    let fe, se;
    const { props: le, shapeFlag: j, transition: oe, dirs: we } = x;
    if (fe = x.el = o(x.type, W, le && le.is, le), j & 8 ? c(fe, x.children) : j & 16 && z(x.children, fe, null, te, ne, Oi(x, W), ue, de), we && Rl(x, null, te, "created"), F(fe, x, x.scopeId, ue, te), le) {
      for (const Se in le) Se !== "value" && !la(Se) && a(fe, Se, null, le[Se], W, te);
      "value" in le && a(fe, "value", null, le.value, W), (se = le.onVnodeBeforeMount) && hn(se, te, x);
    }
    we && Rl(x, null, te, "beforeMount");
    const ke = vb(ne, oe);
    ke && oe.beforeEnter(fe), r(fe, E, I), ((se = le && le.onVnodeMounted) || ke || we) && Ot(() => {
      se && hn(se, te, x), ke && oe.enter(fe), we && Rl(x, null, te, "mounted");
    }, ne);
  }, F = (x, E, I, te, ne) => {
    if (I && h(x, I), te) for (let W = 0; W < te.length; W++) h(x, te[W]);
    if (ne) {
      let W = ne.subTree;
      if (E === W || Ro(W.type) && (W.ssContent === E || W.ssFallback === E)) {
        const ue = ne.vnode;
        F(x, ue, ue.scopeId, ue.slotScopeIds, ne.parent);
      }
    }
  }, z = (x, E, I, te, ne, W, ue, de, fe = 0) => {
    for (let se = fe; se < x.length; se++) {
      const le = x[se] = de ? ml(x[se]) : On(x[se]);
      _(null, le, E, I, te, ne, W, ue, de);
    }
  }, L = (x, E, I, te, ne, W, ue) => {
    const de = E.el = x.el;
    let { patchFlag: fe, dynamicChildren: se, dirs: le } = E;
    fe |= x.patchFlag & 16;
    const j = x.props || gt, oe = E.props || gt;
    let we;
    if (I && Al(I, false), (we = oe.onVnodeBeforeUpdate) && hn(we, I, E, x), le && Rl(E, x, I, "beforeUpdate"), I && Al(I, true), (j.innerHTML && oe.innerHTML == null || j.textContent && oe.textContent == null) && c(de, ""), se ? B(x.dynamicChildren, se, de, I, te, Oi(E, ne), W) : ue || G(x, E, de, null, I, te, Oi(E, ne), W, false), fe > 0) {
      if (fe & 16) D(de, j, oe, I, ne);
      else if (fe & 2 && j.class !== oe.class && a(de, "class", null, oe.class, ne), fe & 4 && a(de, "style", j.style, oe.style, ne), fe & 8) {
        const ke = E.dynamicProps;
        for (let Se = 0; Se < ke.length; Se++) {
          const qe = ke[Se], je = j[qe], De = oe[qe];
          (De !== je || qe === "value") && a(de, qe, je, De, ne, I);
        }
      }
      fe & 1 && x.children !== E.children && c(de, E.children);
    } else !ue && se == null && D(de, j, oe, I, ne);
    ((we = oe.onVnodeUpdated) || le) && Ot(() => {
      we && hn(we, I, E, x), le && Rl(E, x, I, "updated");
    }, te);
  }, B = (x, E, I, te, ne, W, ue) => {
    for (let de = 0; de < E.length; de++) {
      const fe = x[de], se = E[de], le = fe.el && (fe.type === ln || !gl(fe, se) || fe.shapeFlag & 70) ? v(fe.el) : I;
      _(fe, se, le, null, te, ne, W, ue, true);
    }
  }, D = (x, E, I, te, ne) => {
    if (E !== I) {
      if (E !== gt) for (const W in E) !la(W) && !(W in I) && a(x, W, E[W], null, ne, te);
      for (const W in I) {
        if (la(W)) continue;
        const ue = I[W], de = E[W];
        ue !== de && W !== "value" && a(x, W, de, ue, ne, te);
      }
      "value" in I && a(x, "value", E.value, I.value, ne);
    }
  }, q = (x, E, I, te, ne, W, ue, de, fe) => {
    const se = E.el = x ? x.el : i(""), le = E.anchor = x ? x.anchor : i("");
    let { patchFlag: j, dynamicChildren: oe, slotScopeIds: we } = E;
    we && (de = de ? de.concat(we) : we), x == null ? (r(se, I, te), r(le, I, te), z(E.children || [], I, le, ne, W, ue, de, fe)) : j > 0 && j & 64 && oe && x.dynamicChildren ? (B(x.dynamicChildren, oe, I, ne, W, ue, de), (E.key != null || ne && E === ne.subTree) && qs(x, E, true)) : G(x, E, I, le, ne, W, ue, de, fe);
  }, R = (x, E, I, te, ne, W, ue, de, fe) => {
    E.slotScopeIds = de, x == null ? E.shapeFlag & 512 ? ne.ctx.activate(E, I, te, ue, fe) : C(E, I, te, ne, W, ue, fe) : H(x, E, fe);
  }, C = (x, E, I, te, ne, W, ue) => {
    const de = x.component = Ab(x, te, ne);
    if (ri(x) && (de.ctx.renderer = N), $b(de, false, ue), de.asyncDep) {
      if (ne && ne.registerDep(de, Q, ue), !x.el) {
        const fe = de.subTree = Ke(tn);
        k(null, fe, E, I);
      }
    } else Q(de, x, E, I, ne, W, ue);
  }, H = (x, E, I) => {
    const te = E.component = x.component;
    if (xb(x, E, I)) if (te.asyncDep && !te.asyncResolved) {
      K(te, E, I);
      return;
    } else te.next = E, te.update();
    else E.el = x.el, te.vnode = E;
  }, Q = (x, E, I, te, ne, W, ue) => {
    const de = () => {
      if (x.isMounted) {
        let { next: j, bu: oe, u: we, parent: ke, vnode: Se } = x;
        {
          const be = Uv(x);
          if (be) {
            j && (j.el = Se.el, K(x, j, ue)), be.asyncDep.then(() => {
              x.isUnmounted || de();
            });
            return;
          }
        }
        let qe = j, je;
        Al(x, false), j ? (j.el = Se.el, K(x, j, ue)) : j = Se, oe && ra(oe), (je = j.props && j.props.onVnodeBeforeUpdate) && hn(je, ke, j, Se), Al(x, true);
        const De = Mc(x), ie = x.subTree;
        x.subTree = De, _(ie, De, v(ie.el), A(ie), x, ne, W), j.el = De.el, qe === null && Sb(x, De.el), we && Ot(we, ne), (je = j.props && j.props.onVnodeUpdated) && Ot(() => hn(je, ke, j, Se), ne);
      } else {
        let j;
        const { el: oe, props: we } = E, { bm: ke, m: Se, parent: qe, root: je, type: De } = x, ie = pr(E);
        Al(x, false), ke && ra(ke), !ie && (j = we && we.onVnodeBeforeMount) && hn(j, qe, E), Al(x, true);
        {
          je.ce && je.ce._injectChildStyle(De);
          const be = x.subTree = Mc(x);
          _(null, be, I, te, x, ne, W), E.el = be.el;
        }
        if (Se && Ot(Se, ne), !ie && (j = we && we.onVnodeMounted)) {
          const be = E;
          Ot(() => hn(j, qe, be), ne);
        }
        (E.shapeFlag & 256 || qe && pr(qe.vnode) && qe.vnode.shapeFlag & 256) && x.a && Ot(x.a, ne), x.isMounted = true, E = I = te = null;
      }
    };
    x.scope.on();
    const fe = x.effect = new Gf(de);
    x.scope.off();
    const se = x.update = fe.run.bind(fe), le = x.job = fe.runIfDirty.bind(fe);
    le.i = x, le.id = x.uid, fe.scheduler = () => Ss(le), Al(x, true), se();
  }, K = (x, E, I) => {
    E.component = x;
    const te = x.vnode.props;
    x.vnode = E, x.next = null, rb(x, E.props, te, I), ub(x, E.children, I), Cl(), pc(x), kl();
  }, G = (x, E, I, te, ne, W, ue, de, fe = false) => {
    const se = x && x.children, le = x ? x.shapeFlag : 0, j = E.children, { patchFlag: oe, shapeFlag: we } = E;
    if (oe > 0) {
      if (oe & 128) {
        pe(se, j, I, te, ne, W, ue, de, fe);
        return;
      } else if (oe & 256) {
        re(se, j, I, te, ne, W, ue, de, fe);
        return;
      }
    }
    we & 8 ? (le & 16 && O(se, ne, W), j !== se && c(I, j)) : le & 16 ? we & 16 ? pe(se, j, I, te, ne, W, ue, de, fe) : O(se, ne, W, true) : (le & 8 && c(I, ""), we & 16 && z(j, I, te, ne, W, ue, de, fe));
  }, re = (x, E, I, te, ne, W, ue, de, fe) => {
    x = x || hr, E = E || hr;
    const se = x.length, le = E.length, j = Math.min(se, le);
    let oe;
    for (oe = 0; oe < j; oe++) {
      const we = E[oe] = fe ? ml(E[oe]) : On(E[oe]);
      _(x[oe], we, I, null, ne, W, ue, de, fe);
    }
    se > le ? O(x, ne, W, true, false, j) : z(E, I, te, ne, W, ue, de, fe, j);
  }, pe = (x, E, I, te, ne, W, ue, de, fe) => {
    let se = 0;
    const le = E.length;
    let j = x.length - 1, oe = le - 1;
    for (; se <= j && se <= oe; ) {
      const we = x[se], ke = E[se] = fe ? ml(E[se]) : On(E[se]);
      if (gl(we, ke)) _(we, ke, I, null, ne, W, ue, de, fe);
      else break;
      se++;
    }
    for (; se <= j && se <= oe; ) {
      const we = x[j], ke = E[oe] = fe ? ml(E[oe]) : On(E[oe]);
      if (gl(we, ke)) _(we, ke, I, null, ne, W, ue, de, fe);
      else break;
      j--, oe--;
    }
    if (se > j) {
      if (se <= oe) {
        const we = oe + 1, ke = we < le ? E[we].el : te;
        for (; se <= oe; ) _(null, E[se] = fe ? ml(E[se]) : On(E[se]), I, ke, ne, W, ue, de, fe), se++;
      }
    } else if (se > oe) for (; se <= j; ) M(x[se], ne, W, true), se++;
    else {
      const we = se, ke = se, Se = /* @__PURE__ */ new Map();
      for (se = ke; se <= oe; se++) {
        const Te = E[se] = fe ? ml(E[se]) : On(E[se]);
        Te.key != null && Se.set(Te.key, se);
      }
      let qe, je = 0;
      const De = oe - ke + 1;
      let ie = false, be = 0;
      const ae = new Array(De);
      for (se = 0; se < De; se++) ae[se] = 0;
      for (se = we; se <= j; se++) {
        const Te = x[se];
        if (je >= De) {
          M(Te, ne, W, true);
          continue;
        }
        let Oe;
        if (Te.key != null) Oe = Se.get(Te.key);
        else for (qe = ke; qe <= oe; qe++) if (ae[qe - ke] === 0 && gl(Te, E[qe])) {
          Oe = qe;
          break;
        }
        Oe === void 0 ? M(Te, ne, W, true) : (ae[Oe - ke] = se + 1, Oe >= be ? be = Oe : ie = true, _(Te, E[Oe], I, null, ne, W, ue, de, fe), je++);
      }
      const ye = ie ? mb(ae) : hr;
      for (qe = ye.length - 1, se = De - 1; se >= 0; se--) {
        const Te = ke + se, Oe = E[Te], Re = Te + 1 < le ? E[Te + 1].el : te;
        ae[se] === 0 ? _(null, Oe, I, Re, ne, W, ue, de, fe) : ie && (qe < 0 || se !== ye[qe] ? Y(Oe, I, Re, 2) : qe--);
      }
    }
  }, Y = (x, E, I, te, ne = null) => {
    const { el: W, type: ue, transition: de, children: fe, shapeFlag: se } = x;
    if (se & 6) {
      Y(x.component.subTree, E, I, te);
      return;
    }
    if (se & 128) {
      x.suspense.move(E, I, te);
      return;
    }
    if (se & 64) {
      ue.move(x, E, I, N);
      return;
    }
    if (ue === ln) {
      r(W, E, I);
      for (let j = 0; j < fe.length; j++) Y(fe[j], E, I, te);
      r(x.anchor, E, I);
      return;
    }
    if (ue === Vi) {
      p(x, E, I);
      return;
    }
    if (te !== 2 && se & 1 && de) if (te === 0) de.beforeEnter(W), r(W, E, I), Ot(() => de.enter(W), ne);
    else {
      const { leave: j, delayLeave: oe, afterLeave: we } = de, ke = () => r(W, E, I), Se = () => {
        j(W, () => {
          ke(), we && we();
        });
      };
      oe ? oe(W, ke, Se) : Se();
    }
    else r(W, E, I);
  }, M = (x, E, I, te = false, ne = false) => {
    const { type: W, props: ue, ref: de, children: fe, dynamicChildren: se, shapeFlag: le, patchFlag: j, dirs: oe, cacheIndex: we } = x;
    if (j === -2 && (ne = false), de != null && qo(de, null, I, x, true), we != null && (E.renderCache[we] = void 0), le & 256) {
      E.ctx.deactivate(x);
      return;
    }
    const ke = le & 1 && oe, Se = !pr(x);
    let qe;
    if (Se && (qe = ue && ue.onVnodeBeforeUnmount) && hn(qe, E, x), le & 6) ge(x.component, I, te);
    else {
      if (le & 128) {
        x.suspense.unmount(I, te);
        return;
      }
      ke && Rl(x, null, E, "beforeUnmount"), le & 64 ? x.type.remove(x, E, I, N, te) : se && !se.hasOnce && (W !== ln || j > 0 && j & 64) ? O(se, E, I, false, true) : (W === ln && j & 384 || !ne && le & 16) && O(fe, E, I), te && J(x);
    }
    (Se && (qe = ue && ue.onVnodeUnmounted) || ke) && Ot(() => {
      qe && hn(qe, E, x), ke && Rl(x, null, E, "unmounted");
    }, I);
  }, J = (x) => {
    const { type: E, el: I, anchor: te, transition: ne } = x;
    if (E === ln) {
      ee(I, te);
      return;
    }
    if (E === Vi) {
      b(x);
      return;
    }
    const W = () => {
      l(I), ne && !ne.persisted && ne.afterLeave && ne.afterLeave();
    };
    if (x.shapeFlag & 1 && ne && !ne.persisted) {
      const { leave: ue, delayLeave: de } = ne, fe = () => ue(I, W);
      de ? de(x.el, W, fe) : fe();
    } else W();
  }, ee = (x, E) => {
    let I;
    for (; x !== E; ) I = u(x), l(x), x = I;
    l(E);
  }, ge = (x, E, I) => {
    const { bum: te, scope: ne, job: W, subTree: ue, um: de, m: fe, a: se } = x;
    Mo(fe), Mo(se), te && ra(te), ne.stop(), W && (W.flags |= 8, M(ue, x, E, I)), de && Ot(de, E), Ot(() => {
      x.isUnmounted = true;
    }, E), E && E.pendingBranch && !E.isUnmounted && x.asyncDep && !x.asyncResolved && x.suspenseId === E.pendingId && (E.deps--, E.deps === 0 && E.resolve());
  }, O = (x, E, I, te = false, ne = false, W = 0) => {
    for (let ue = W; ue < x.length; ue++) M(x[ue], E, I, te, ne);
  }, A = (x) => {
    if (x.shapeFlag & 6) return A(x.component.subTree);
    if (x.shapeFlag & 128) return x.suspense.next();
    const E = u(x.anchor || x.el), I = E && E[yv];
    return I ? u(I) : E;
  };
  let $ = false;
  const T = (x, E, I) => {
    x == null ? E._vnode && M(E._vnode, null, null, true) : _(E._vnode || null, x, E, null, null, null, I), E._vnode = x, $ || ($ = true, pc(), gv(), $ = false);
  }, N = { p: _, um: M, m: Y, r: J, mt: C, mc: z, pc: G, pbc: B, n: A, o: e };
  return { render: T, hydrate: void 0, createApp: nb(T) };
}
function Oi({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Al({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function vb(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function qs(e, t, n = false) {
  const r = e.children, l = t.children;
  if (He(r) && He(l)) for (let a = 0; a < r.length; a++) {
    const o = r[a];
    let i = l[a];
    i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = l[a] = ml(l[a]), i.el = o.el), !n && i.patchFlag !== -2 && qs(o, i)), i.type === ci && (i.el = o.el);
  }
}
function mb(e) {
  const t = e.slice(), n = [0];
  let r, l, a, o, i;
  const s = e.length;
  for (r = 0; r < s; r++) {
    const d = e[r];
    if (d !== 0) {
      if (l = n[n.length - 1], e[l] < d) {
        t[r] = l, n.push(r);
        continue;
      }
      for (a = 0, o = n.length - 1; a < o; ) i = a + o >> 1, e[n[i]] < d ? a = i + 1 : o = i;
      d < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
    }
  }
  for (a = n.length, o = n[a - 1]; a-- > 0; ) n[a] = o, o = t[o];
  return n;
}
function Uv(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Uv(t);
}
function Mo(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const hb = Symbol.for("v-scx"), gb = () => Rt(hb);
function he(e, t, n) {
  return Qv(e, t, n);
}
function Qv(e, t, n = gt) {
  const { immediate: r, deep: l, flush: a, once: o } = n, i = zt({}, n), s = t && r || !t && a !== "post";
  let d;
  if (ka) {
    if (a === "sync") {
      const h = gb();
      d = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!s) {
      const h = () => {
      };
      return h.stop = Dn, h.resume = Dn, h.pause = Dn, h;
    }
  }
  const c = Ut;
  i.call = (h, g, _) => $n(h, c, g, _);
  let v = false;
  a === "post" ? i.scheduler = (h) => {
    Ot(h, c && c.suspense);
  } : a !== "sync" && (v = true, i.scheduler = (h, g) => {
    g ? h() : Ss(h);
  }), i.augmentJob = (h) => {
    t && (h.flags |= 4), v && (h.flags |= 2, c && (h.id = c.uid, h.i = c));
  };
  const u = $0(e, t, i);
  return ka && (d ? d.push(u) : s && u()), u;
}
function bb(e, t, n) {
  const r = this.proxy, l = Pt(e) ? e.includes(".") ? Kv(r, e) : () => r[e] : e.bind(r, r);
  let a;
  Ye(t) ? a = t : (a = t.handler, n = t);
  const o = Fa(this), i = Qv(l, a.bind(r), n);
  return o(), i;
}
function Kv(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let l = 0; l < n.length && r; l++) r = r[n[l]];
    return r;
  };
}
const pb = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_n(t)}Modifiers`] || e[`${Jl(t)}Modifiers`];
function yb(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || gt;
  let l = n;
  const a = t.startsWith("update:"), o = a && pb(r, t.slice(7));
  o && (o.trim && (l = n.map((c) => Pt(c) ? c.trim() : c)), o.number && (l = n.map(Zg)));
  let i, s = r[i = Mi(t)] || r[i = Mi(_n(t))];
  !s && a && (s = r[i = Mi(Jl(t))]), s && $n(s, e, 6, l);
  const d = r[i + "Once"];
  if (d) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[i]) return;
    e.emitted[i] = true, $n(d, e, 6, l);
  }
}
function Wv(e, t, n = false) {
  const r = t.emitsCache, l = r.get(e);
  if (l !== void 0) return l;
  const a = e.emits;
  let o = {}, i = false;
  if (!Ye(e)) {
    const s = (d) => {
      const c = Wv(d, t, true);
      c && (i = true, zt(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !a && !i ? (kt(e) && r.set(e, null), null) : (He(a) ? a.forEach((s) => o[s] = null) : zt(o, a), kt(e) && r.set(e, o), o);
}
function si(e, t) {
  return !e || !Zo(t) ? false : (t = t.slice(2).replace(/Once$/, ""), dt(e, t[0].toLowerCase() + t.slice(1)) || dt(e, Jl(t)) || dt(e, t));
}
function Mc(e) {
  const { type: t, vnode: n, proxy: r, withProxy: l, propsOptions: [a], slots: o, attrs: i, emit: s, render: d, renderCache: c, props: v, data: u, setupState: h, ctx: g, inheritAttrs: _ } = e, w = To(e);
  let k, y;
  try {
    if (n.shapeFlag & 4) {
      const b = l || r, S = b;
      k = On(d.call(S, b, c, v, h, u, g)), y = i;
    } else {
      const b = t;
      k = On(b.length > 1 ? b(v, { attrs: i, slots: o, emit: s }) : b(v, null)), y = t.props ? i : _b(i);
    }
  } catch (b) {
    ca.length = 0, li(b, e, 1), k = Ke(tn);
  }
  let p = k;
  if (y && _ !== false) {
    const b = Object.keys(y), { shapeFlag: S } = p;
    b.length && S & 7 && (a && b.some(cs) && (y = wb(y, a)), p = Jn(p, y, false, true));
  }
  return n.dirs && (p = Jn(p, null, false, true), p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs), n.transition && xl(p, n.transition), k = p, To(w), k;
}
const _b = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || Zo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, wb = (e, t) => {
  const n = {};
  for (const r in e) (!cs(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function xb(e, t, n) {
  const { props: r, children: l, component: a } = e, { props: o, children: i, patchFlag: s } = t, d = a.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && s >= 0) {
    if (s & 1024) return true;
    if (s & 16) return r ? Rc(r, o, d) : !!o;
    if (s & 8) {
      const c = t.dynamicProps;
      for (let v = 0; v < c.length; v++) {
        const u = c[v];
        if (o[u] !== r[u] && !si(d, u)) return true;
      }
    }
  } else return (l || i) && (!i || !i.$stable) ? true : r === o ? false : r ? o ? Rc(r, o, d) : true : !!o;
  return false;
}
function Rc(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return true;
  for (let l = 0; l < r.length; l++) {
    const a = r[l];
    if (t[a] !== e[a] && !si(n, a)) return true;
  }
  return false;
}
function Sb({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const Ro = (e) => e.__isSuspense;
function Cb(e, t) {
  t && t.pendingBranch ? He(e) ? t.effects.push(...e) : t.effects.push(e) : B0(e);
}
const ln = Symbol.for("v-fgt"), ci = Symbol.for("v-txt"), tn = Symbol.for("v-cmt"), Vi = Symbol.for("v-stc"), ca = [];
let cn = null;
function gn(e = false) {
  ca.push(cn = e ? null : []);
}
function kb() {
  ca.pop(), cn = ca[ca.length - 1] || null;
}
let xa = 1;
function Ac(e, t = false) {
  xa += e, e < 0 && cn && t && (cn.hasOnce = true);
}
function Yv(e) {
  return e.dynamicChildren = xa > 0 ? cn || hr : null, kb(), xa > 0 && cn && cn.push(e), e;
}
function Sa(e, t, n, r, l, a) {
  return Yv(Ie(e, t, n, r, l, a, true));
}
function Il(e, t, n, r, l) {
  return Yv(Ke(e, t, n, r, l, true));
}
function Ca(e) {
  return e ? e.__v_isVNode === true : false;
}
function gl(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Xv = ({ key: e }) => e ?? null, vo = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? Pt(e) || wt(e) || Ye(e) ? { i: rn, r: e, k: t, f: !!n } : e : null);
function Ie(e, t = null, n = null, r = 0, l = null, a = e === ln ? 0 : 1, o = false, i = false) {
  const s = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && Xv(t), ref: t && vo(t), scopeId: pv, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: a, patchFlag: r, dynamicProps: l, dynamicChildren: null, appContext: null, ctx: rn };
  return i ? (Es(s, n), a & 128 && e.normalize(s)) : n && (s.shapeFlag |= Pt(n) ? 8 : 16), xa > 0 && !o && cn && (s.patchFlag > 0 || a & 6) && s.patchFlag !== 32 && cn.push(s), s;
}
const Ke = Tb;
function Tb(e, t = null, n = null, r = 0, l = null, a = false) {
  if ((!e || e === K0) && (e = tn), Ca(e)) {
    const i = Jn(e, t, true);
    return n && Es(i, n), xa > 0 && !a && cn && (i.shapeFlag & 6 ? cn[cn.indexOf(e)] = i : cn.push(i)), i.patchFlag = -2, i;
  }
  if (Fb(e) && (e = e.__vccOpts), t) {
    t = qb(t);
    let { class: i, style: s } = t;
    i && !Pt(i) && (t.class = vs(i)), kt(s) && (xs(s) && !He(s) && (s = zt({}, s)), t.style = ti(s));
  }
  const o = Pt(e) ? 1 : Ro(e) ? 128 : _v(e) ? 64 : kt(e) ? 4 : Ye(e) ? 2 : 0;
  return Ie(e, t, n, r, l, o, a, true);
}
function qb(e) {
  return e ? xs(e) || Vv(e) ? zt({}, e) : e : null;
}
function Jn(e, t, n = false, r = false) {
  const { props: l, ref: a, patchFlag: o, children: i, transition: s } = e, d = t ? Eb(l || {}, t) : l, c = { __v_isVNode: true, __v_skip: true, type: e.type, props: d, key: d && Xv(d), ref: t && t.ref ? n && a ? He(a) ? a.concat(vo(t)) : [a, vo(t)] : vo(t) : a, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: i, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== ln ? o === -1 ? 16 : o | 16 : o, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: s, component: e.component, suspense: e.suspense, ssContent: e.ssContent && Jn(e.ssContent), ssFallback: e.ssFallback && Jn(e.ssFallback), el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return s && r && xl(c, s.clone(c)), c;
}
function bl(e = " ", t = 0) {
  return Ke(ci, null, e, t);
}
function Lu(e = "", t = false) {
  return t ? (gn(), Il(tn, null, e)) : Ke(tn, null, e);
}
function On(e) {
  return e == null || typeof e == "boolean" ? Ke(tn) : He(e) ? Ke(ln, null, e.slice()) : Ca(e) ? ml(e) : Ke(ci, null, String(e));
}
function ml(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Jn(e);
}
function Es(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (He(t)) n = 16;
  else if (typeof t == "object") if (r & 65) {
    const l = t.default;
    l && (l._c && (l._d = false), Es(e, l()), l._c && (l._d = true));
    return;
  } else {
    n = 32;
    const l = t._;
    !l && !Vv(t) ? t._ctx = rn : l === 3 && rn && (rn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else Ye(t) ? (t = { default: t, _ctx: rn }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [bl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Eb(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const l in r) if (l === "class") t.class !== r.class && (t.class = vs([t.class, r.class]));
    else if (l === "style") t.style = ti([t.style, r.style]);
    else if (Zo(l)) {
      const a = t[l], o = r[l];
      o && a !== o && !(He(a) && a.includes(o)) && (t[l] = a ? [].concat(a, o) : o);
    } else l !== "" && (t[l] = r[l]);
  }
  return t;
}
function hn(e, t, n, r = null) {
  $n(e, t, 7, [n, r]);
}
const Mb = Bv();
let Rb = 0;
function Ab(e, t, n) {
  const r = e.type, l = (t ? t.appContext : e.appContext) || Mb, a = { uid: Rb++, vnode: e, type: r, parent: t, appContext: l, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new o0(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(l.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: Iv(r, l), emitsOptions: Wv(r, l), emit: null, emitted: null, propsDefaults: gt, inheritAttrs: r.inheritAttrs, ctx: gt, data: gt, props: gt, attrs: gt, slots: gt, refs: gt, setupState: gt, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = yb.bind(null, a), e.ce && e.ce(a), a;
}
let Ut = null;
const xe = () => Ut || rn;
let Ao, Bu;
{
  const e = La(), t = (n, r) => {
    let l;
    return (l = e[n]) || (l = e[n] = []), l.push(r), (a) => {
      l.length > 1 ? l.forEach((o) => o(a)) : l[0](a);
    };
  };
  Ao = t("__VUE_INSTANCE_SETTERS__", (n) => Ut = n), Bu = t("__VUE_SSR_SETTERS__", (n) => ka = n);
}
const Fa = (e) => {
  const t = Ut;
  return Ao(e), e.scope.on(), () => {
    e.scope.off(), Ao(t);
  };
}, $c = () => {
  Ut && Ut.scope.off(), Ao(null);
};
function Gv(e) {
  return e.vnode.shapeFlag & 4;
}
let ka = false;
function $b(e, t = false, n = false) {
  t && Bu(t);
  const { props: r, children: l } = e.vnode, a = Gv(e);
  lb(e, r, a, t), ib(e, l, n);
  const o = a ? Pb(e, t) : void 0;
  return t && Bu(false), o;
}
function Pb(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Y0);
  const { setup: r } = n;
  if (r) {
    Cl();
    const l = e.setupContext = r.length > 1 ? Bb(e) : null, a = Fa(e), o = Ba(r, e, 0, [e.props, l]), i = jf(o);
    if (kl(), a(), (i || e.sp) && !pr(e) && Ev(e), i) {
      if (o.then($c, $c), t) return o.then((s) => {
        Pc(e, s);
      }).catch((s) => {
        li(s, e, 0);
      });
      e.asyncDep = o;
    } else Pc(e, o);
  } else Zv(e);
}
function Pc(e, t, n) {
  Ye(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : kt(t) && (e.setupState = vv(t)), Zv(e);
}
function Zv(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Dn);
  {
    const l = Fa(e);
    Cl();
    try {
      X0(e);
    } finally {
      kl(), l();
    }
  }
}
const Lb = { get(e, t) {
  return Xt(e, "get", ""), e[t];
} };
function Bb(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, Lb), slots: e.slots, emit: e.emit, expose: t };
}
function di(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(vv(ni(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in sa) return sa[n](e);
  }, has(t, n) {
    return n in t || n in sa;
  } })) : e.proxy;
}
function Fu(e, t = true) {
  return Ye(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Fb(e) {
  return Ye(e) && "__vccOpts" in e;
}
const m = (e, t) => R0(e, t, ka);
function f(e, t, n) {
  const r = arguments.length;
  return r === 2 ? kt(t) && !He(t) ? Ca(t) ? Ke(e, null, [t]) : Ke(e, t) : Ke(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Ca(n) && (n = [n]), Ke(e, t, n));
}
const Ob = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ou;
const Lc = typeof window < "u" && window.trustedTypes;
if (Lc) try {
  Ou = Lc.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const Jv = Ou ? (e) => Ou.createHTML(e) : (e) => e, Vb = "http://www.w3.org/2000/svg", Db = "http://www.w3.org/1998/Math/MathML", Yn = typeof document < "u" ? document : null, Bc = Yn && Yn.createElement("template"), Ib = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, r) => {
  const l = t === "svg" ? Yn.createElementNS(Vb, e) : t === "mathml" ? Yn.createElementNS(Db, e) : n ? Yn.createElement(e, { is: n }) : Yn.createElement(e);
  return e === "select" && r && r.multiple != null && l.setAttribute("multiple", r.multiple), l;
}, createText: (e) => Yn.createTextNode(e), createComment: (e) => Yn.createComment(e), setText: (e, t) => {
  e.nodeValue = t;
}, setElementText: (e, t) => {
  e.textContent = t;
}, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => Yn.querySelector(e), setScopeId(e, t) {
  e.setAttribute(t, "");
}, insertStaticContent(e, t, n, r, l, a) {
  const o = n ? n.previousSibling : t.lastChild;
  if (l && (l === a || l.nextSibling)) for (; t.insertBefore(l.cloneNode(true), n), !(l === a || !(l = l.nextSibling)); ) ;
  else {
    Bc.innerHTML = Jv(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
    const i = Bc.content;
    if (r === "svg" || r === "mathml") {
      const s = i.firstChild;
      for (; s.firstChild; ) i.appendChild(s.firstChild);
      i.removeChild(s);
    }
    t.insertBefore(i, n);
  }
  return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, al = "transition", Dr = "animation", Tr = Symbol("_vtc"), em = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, tm = zt({}, Cv, em), zb = (e) => (e.displayName = "Transition", e.props = tm, e), Vt = zb((e, { slots: t }) => f(D0, nm(e), t)), $l = (e, t = []) => {
  He(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Fc = (e) => e ? He(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function nm(e) {
  const t = {};
  for (const q in e) q in em || (t[q] = e[q]);
  if (e.css === false) return t;
  const { name: n = "v", type: r, duration: l, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: i = `${n}-enter-to`, appearFromClass: s = a, appearActiveClass: d = o, appearToClass: c = i, leaveFromClass: v = `${n}-leave-from`, leaveActiveClass: u = `${n}-leave-active`, leaveToClass: h = `${n}-leave-to` } = e, g = Nb(l), _ = g && g[0], w = g && g[1], { onBeforeEnter: k, onEnter: y, onEnterCancelled: p, onLeave: b, onLeaveCancelled: S, onBeforeAppear: P = k, onAppear: F = y, onAppearCancelled: z = p } = t, L = (q, R, C, H) => {
    q._enterCancelled = H, cl(q, R ? c : i), cl(q, R ? d : o), C && C();
  }, B = (q, R) => {
    q._isLeaving = false, cl(q, v), cl(q, h), cl(q, u), R && R();
  }, D = (q) => (R, C) => {
    const H = q ? F : y, Q = () => L(R, q, C);
    $l(H, [R, Q]), Oc(() => {
      cl(R, q ? s : a), Bn(R, q ? c : i), Fc(H) || Vc(R, r, _, Q);
    });
  };
  return zt(t, { onBeforeEnter(q) {
    $l(k, [q]), Bn(q, a), Bn(q, o);
  }, onBeforeAppear(q) {
    $l(P, [q]), Bn(q, s), Bn(q, d);
  }, onEnter: D(false), onAppear: D(true), onLeave(q, R) {
    q._isLeaving = true;
    const C = () => B(q, R);
    Bn(q, v), q._enterCancelled ? (Bn(q, u), Vu()) : (Vu(), Bn(q, u)), Oc(() => {
      q._isLeaving && (cl(q, v), Bn(q, h), Fc(b) || Vc(q, r, w, C));
    }), $l(b, [q, C]);
  }, onEnterCancelled(q) {
    L(q, false, void 0, true), $l(p, [q]);
  }, onAppearCancelled(q) {
    L(q, true, void 0, true), $l(z, [q]);
  }, onLeaveCancelled(q) {
    B(q), $l(S, [q]);
  } });
}
function Nb(e) {
  if (e == null) return null;
  if (kt(e)) return [Di(e.enter), Di(e.leave)];
  {
    const t = Di(e);
    return [t, t];
  }
}
function Di(e) {
  return Jg(e);
}
function Bn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Tr] || (e[Tr] = /* @__PURE__ */ new Set())).add(t);
}
function cl(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Tr];
  n && (n.delete(t), n.size || (e[Tr] = void 0));
}
function Oc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Hb = 0;
function Vc(e, t, n, r) {
  const l = e._endId = ++Hb, a = () => {
    l === e._endId && r();
  };
  if (n != null) return setTimeout(a, n);
  const { type: o, timeout: i, propCount: s } = lm(e, t);
  if (!o) return r();
  const d = o + "end";
  let c = 0;
  const v = () => {
    e.removeEventListener(d, u), a();
  }, u = (h) => {
    h.target === e && ++c >= s && v();
  };
  setTimeout(() => {
    c < s && v();
  }, i + 1), e.addEventListener(d, u);
}
function lm(e, t) {
  const n = window.getComputedStyle(e), r = (g) => (n[g] || "").split(", "), l = r(`${al}Delay`), a = r(`${al}Duration`), o = Dc(l, a), i = r(`${Dr}Delay`), s = r(`${Dr}Duration`), d = Dc(i, s);
  let c = null, v = 0, u = 0;
  t === al ? o > 0 && (c = al, v = o, u = a.length) : t === Dr ? d > 0 && (c = Dr, v = d, u = s.length) : (v = Math.max(o, d), c = v > 0 ? o > d ? al : Dr : null, u = c ? c === al ? a.length : s.length : 0);
  const h = c === al && /\b(transform|all)(,|$)/.test(r(`${al}Property`).toString());
  return { type: c, timeout: v, propCount: u, hasTransform: h };
}
function Dc(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => Ic(n) + Ic(e[r])));
}
function Ic(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Vu() {
  return document.body.offsetHeight;
}
function jb(e, t, n) {
  const r = e[Tr];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const $o = Symbol("_vod"), rm = Symbol("_vsh"), am = { beforeMount(e, { value: t }, { transition: n }) {
  e[$o] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ir(e, t);
}, mounted(e, { value: t }, { transition: n }) {
  n && t && n.enter(e);
}, updated(e, { value: t, oldValue: n }, { transition: r }) {
  !t != !n && (r ? t ? (r.beforeEnter(e), Ir(e, true), r.enter(e)) : r.leave(e, () => {
    Ir(e, false);
  }) : Ir(e, t));
}, beforeUnmount(e, { value: t }) {
  Ir(e, t);
} };
function Ir(e, t) {
  e.style.display = t ? e[$o] : "none", e[rm] = !t;
}
const Ub = Symbol(""), Qb = /(^|;)\s*display\s*:/;
function Kb(e, t, n) {
  const r = e.style, l = Pt(n);
  let a = false;
  if (n && !l) {
    if (t) if (Pt(t)) for (const o of t.split(";")) {
      const i = o.slice(0, o.indexOf(":")).trim();
      n[i] == null && mo(r, i, "");
    }
    else for (const o in t) n[o] == null && mo(r, o, "");
    for (const o in n) o === "display" && (a = true), mo(r, o, n[o]);
  } else if (l) {
    if (t !== n) {
      const o = r[Ub];
      o && (n += ";" + o), r.cssText = n, a = Qb.test(n);
    }
  } else t && e.removeAttribute("style");
  $o in e && (e[$o] = a ? r.display : "", e[rm] && (r.display = "none"));
}
const zc = /\s*!important$/;
function mo(e, t, n) {
  if (He(n)) n.forEach((r) => mo(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const r = Wb(e, t);
    zc.test(n) ? e.setProperty(Jl(r), n.replace(zc, ""), "important") : e[r] = n;
  }
}
const Nc = ["Webkit", "Moz", "ms"], Ii = {};
function Wb(e, t) {
  const n = Ii[t];
  if (n) return n;
  let r = _n(t);
  if (r !== "filter" && r in e) return Ii[t] = r;
  r = ei(r);
  for (let l = 0; l < Nc.length; l++) {
    const a = Nc[l] + r;
    if (a in e) return Ii[t] = a;
  }
  return t;
}
const Hc = "http://www.w3.org/1999/xlink";
function jc(e, t, n, r, l, a = a0(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Hc, t.slice(6, t.length)) : e.setAttributeNS(Hc, t, n) : n == null || a && !Wf(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : Sl(n) ? String(n) : n);
}
function Uc(e, t, n, r, l) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Jv(n) : n);
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
    const i = a === "OPTION" ? e.getAttribute("value") || "" : e.value, s = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
    (i !== s || !("_value" in e)) && (e.value = s), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = false;
  if (n === "" || n == null) {
    const i = typeof e[t];
    i === "boolean" ? n = Wf(n) : n == null && i === "string" ? (n = "", o = true) : i === "number" && (n = 0, o = true);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(l || t);
}
function Yb(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Xb(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Qc = Symbol("_vei");
function Gb(e, t, n, r, l = null) {
  const a = e[Qc] || (e[Qc] = {}), o = a[t];
  if (r && o) o.value = r;
  else {
    const [i, s] = Zb(t);
    if (r) {
      const d = a[t] = tp(r, l);
      Yb(e, i, d, s);
    } else o && (Xb(e, i, o, s), a[t] = void 0);
  }
}
const Kc = /(?:Once|Passive|Capture)$/;
function Zb(e) {
  let t;
  if (Kc.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Kc); ) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : Jl(e.slice(2)), t];
}
let zi = 0;
const Jb = Promise.resolve(), ep = () => zi || (Jb.then(() => zi = 0), zi = Date.now());
function tp(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    $n(np(r, n.value), t, 5, [r]);
  };
  return n.value = e, n.attached = ep(), n;
}
function np(e, t) {
  if (He(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((r) => (l) => !l._stopped && r && r(l));
  } else return t;
}
const Wc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, lp = (e, t, n, r, l, a) => {
  const o = l === "svg";
  t === "class" ? jb(e, r, o) : t === "style" ? Kb(e, n, r) : Zo(t) ? cs(t) || Gb(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : rp(e, t, r, o)) ? (Uc(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && jc(e, t, r, o, a, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !Pt(r)) ? Uc(e, _n(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), jc(e, t, r, o));
};
function rp(e, t, n, r) {
  if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Wc(t) && Ye(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE") return false;
  }
  return Wc(t) && Pt(n) ? false : t in e;
}
const om = /* @__PURE__ */ new WeakMap(), im = /* @__PURE__ */ new WeakMap(), Po = Symbol("_moveCb"), Yc = Symbol("_enterCb"), ap = (e) => (delete e.props.mode, e), op = ap({ name: "TransitionGroup", props: zt({}, tm, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = xe(), r = Sv();
  let l, a;
  return ii(() => {
    if (!l.length) return;
    const o = e.moveClass || `${e.name || "v"}-move`;
    if (!dp(l[0].el, n.vnode.el, o)) return;
    l.forEach(up), l.forEach(sp);
    const i = l.filter(cp);
    Vu(), i.forEach((s) => {
      const d = s.el, c = d.style;
      Bn(d, o), c.transform = c.webkitTransform = c.transitionDuration = "";
      const v = d[Po] = (u) => {
        u && u.target !== d || (!u || /transform$/.test(u.propertyName)) && (d.removeEventListener("transitionend", v), d[Po] = null, cl(d, o));
      };
      d.addEventListener("transitionend", v);
    });
  }), () => {
    const o = Ze(e), i = nm(o);
    let s = o.tag || ln;
    if (l = [], a) for (let d = 0; d < a.length; d++) {
      const c = a[d];
      c.el && c.el instanceof Element && (l.push(c), xl(c, wa(c, i, r, n)), om.set(c, c.el.getBoundingClientRect()));
    }
    a = t.default ? Cs(t.default()) : [];
    for (let d = 0; d < a.length; d++) {
      const c = a[d];
      c.key != null && xl(c, wa(c, i, r, n));
    }
    return Ke(s, null, a);
  };
} }), ip = op;
function up(e) {
  const t = e.el;
  t[Po] && t[Po](), t[Yc] && t[Yc]();
}
function sp(e) {
  im.set(e, e.el.getBoundingClientRect());
}
function cp(e) {
  const t = om.get(e), n = im.get(e), r = t.left - n.left, l = t.top - n.top;
  if (r || l) {
    const a = e.el.style;
    return a.transform = a.webkitTransform = `translate(${r}px,${l}px)`, a.transitionDuration = "0s", e;
  }
}
function dp(e, t, n) {
  const r = e.cloneNode(), l = e[Tr];
  l && l.forEach((i) => {
    i.split(/\s+/).forEach((s) => s && r.classList.remove(s));
  }), n.split(/\s+/).forEach((i) => i && r.classList.add(i)), r.style.display = "none";
  const a = t.nodeType === 1 ? t : t.parentNode;
  a.appendChild(r);
  const { hasTransform: o } = lm(r);
  return a.removeChild(r), o;
}
const fp = zt({ patchProp: lp }, Ib);
let Xc;
function vp() {
  return Xc || (Xc = db(fp));
}
const um = (...e) => {
  const t = vp().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const l = hp(r);
    if (!l) return;
    const a = t._component;
    !Ye(a) && !a.render && !a.template && (a.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const o = n(l, false, mp(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), o;
  }, t;
};
function mp(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function hp(e) {
  return Pt(e) ? document.querySelector(e) : e;
}
/*!
* Quasar Framework v2.18.1
* (c) 2015-present Razvan Stoenescu
* Released under the MIT License.
*/
var Ni = null;
function Ms() {
  return Ni !== null ? Ni : Ni = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
typeof __QUASAR_SSR__ != "boolean" && (Ms().__QUASAR_SSR__ = false);
typeof __QUASAR_SSR_CLIENT__ != "boolean" && (Ms().__QUASAR_SSR_CLIENT__ = false);
typeof __QUASAR_SSR_PWA__ != "boolean" && (Ms().__QUASAR_SSR_PWA__ = false);
function Dt(e, t, n, r) {
  return Object.defineProperty(e, t, { get: n, set: r, enumerable: true }), e;
}
function sm(e, t) {
  for (const n in t) Dt(e, n, t[n]);
  return e;
}
var an = U(__QUASAR_SSR_CLIENT__ && (__QUASAR_SSR_PWA__ ? document.body.getAttribute("data-server-rendered") !== null : true)), Du;
function gp(e, t) {
  const n = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
  return { browser: n[5] || n[3] || n[1] || "", version: n[4] || n[2] || "0", platform: t[0] || "" };
}
function bp(e) {
  return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
}
var cm = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function pp(e) {
  const t = e.toLowerCase(), n = bp(t), r = gp(t, n), l = { mobile: false, desktop: false, cordova: false, capacitor: false, nativeMobile: false, electron: false, bex: false, linux: false, mac: false, win: false, cros: false, chrome: false, firefox: false, opera: false, safari: false, vivaldi: false, edge: false, edgeChromium: false, ie: false, webkit: false, android: false, ios: false, ipad: false, iphone: false, ipod: false, kindle: false, winphone: false, blackberry: false, playbook: false, silk: false };
  r.browser && (l[r.browser] = true, l.version = r.version, l.versionNumber = parseInt(r.version, 10)), r.platform && (l[r.platform] = true);
  const a = l.android || l.ios || l.bb || l.blackberry || l.ipad || l.iphone || l.ipod || l.kindle || l.playbook || l.silk || l["windows phone"];
  if (a === true || t.indexOf("mobile") !== -1 ? l.mobile = true : l.desktop = true, l["windows phone"] && (l.winphone = true, delete l["windows phone"]), l.edga || l.edgios || l.edg ? (l.edge = true, r.browser = "edge") : l.crios ? (l.chrome = true, r.browser = "chrome") : l.fxios && (l.firefox = true, r.browser = "firefox"), (l.ipod || l.ipad || l.iphone) && (l.ios = true), l.vivaldi && (r.browser = "vivaldi", l.vivaldi = true), (l.chrome || l.opr || l.safari || l.vivaldi || l.mobile === true && l.ios !== true && a !== true) && (l.webkit = true), l.opr && (r.browser = "opera", l.opera = true), l.safari && (l.blackberry || l.bb ? (r.browser = "blackberry", l.blackberry = true) : l.playbook ? (r.browser = "playbook", l.playbook = true) : l.android ? (r.browser = "android", l.android = true) : l.kindle ? (r.browser = "kindle", l.kindle = true) : l.silk && (r.browser = "silk", l.silk = true)), l.name = r.browser, l.platform = r.platform, t.indexOf("electron") !== -1) l.electron = true;
  else if (document.location.href.indexOf("-extension://") !== -1) l.bex = true;
  else {
    if (window.Capacitor !== void 0 ? (l.capacitor = true, l.nativeMobile = true, l.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (l.cordova = true, l.nativeMobile = true, l.nativeMobileWrapper = "cordova"), an.value === true && (Du = { is: { ...l } }), cm === true && l.mac === true && (l.desktop === true && l.safari === true || l.nativeMobile === true && l.android !== true && l.ios !== true && l.ipad !== true)) {
      delete l.mac, delete l.desktop;
      const o = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
      Object.assign(l, { mobile: true, ios: true, platform: o, [o]: true });
    }
    l.mobile !== true && window.navigator.userAgentData && window.navigator.userAgentData.mobile && (delete l.desktop, l.mobile = true);
  }
  return l;
}
var Gc = navigator.userAgent || navigator.vendor || window.opera, yp = { has: { touch: false, webStorage: false }, within: { iframe: false } }, ze = { userAgent: Gc, is: pp(Gc), has: { touch: cm }, within: { iframe: window.self !== window.top } }, Iu = { install(e) {
  const { $q: t } = e;
  an.value === true ? (e.onSSRHydrated.push(() => {
    Object.assign(t.platform, ze), an.value = false;
  }), t.platform = Vn(this)) : t.platform = this;
} };
{
  let e;
  Dt(ze.has, "webStorage", () => {
    if (e !== void 0) return e;
    try {
      if (window.localStorage) return e = true, true;
    } catch {
    }
    return e = false, false;
  }), Object.assign(Iu, ze), an.value === true && (Object.assign(Iu, Du, yp), Du = null);
}
var dm = Iu;
function me(e) {
  return ni(/* @__PURE__ */ Tl(e));
}
function Ln(e) {
  return ni(e);
}
var El = (e, t) => {
  const n = Vn(e);
  for (const r in e) Dt(t, r, () => n[r], (l) => {
    n[r] = l;
  });
  return t;
}, mt = { hasPassive: false, passiveCapture: true, notPassiveCapture: true };
try {
  const e = Object.defineProperty({}, "passive", { get() {
    Object.assign(mt, { hasPassive: true, passive: { passive: true }, notPassive: { passive: false }, passiveCapture: { passive: true, capture: true }, notPassiveCapture: { passive: false, capture: true } });
  } });
  window.addEventListener("qtest", null, e), window.removeEventListener("qtest", null, e);
} catch {
}
function Ct() {
}
function fi(e) {
  return e.button === 0;
}
function nn(e) {
  return e.touches && e.touches[0] ? e = e.touches[0] : e.changedTouches && e.changedTouches[0] ? e = e.changedTouches[0] : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]), { top: e.clientY, left: e.clientX };
}
function _p(e) {
  if (e.path) return e.path;
  if (e.composedPath) return e.composedPath();
  const t = [];
  let n = e.target;
  for (; n; ) {
    if (t.push(n), n.tagName === "HTML") return t.push(document), t.push(window), t;
    n = n.parentElement;
  }
}
function St(e) {
  e.stopPropagation();
}
function It(e) {
  e.cancelable !== false && e.preventDefault();
}
function Ue(e) {
  e.cancelable !== false && e.preventDefault(), e.stopPropagation();
}
function _r(e, t) {
  if (e === void 0 || t === true && e.__dragPrevented === true) return;
  const n = t === true ? (r) => {
    r.__dragPrevented = true, r.addEventListener("dragstart", It, mt.notPassiveCapture);
  } : (r) => {
    delete r.__dragPrevented, r.removeEventListener("dragstart", It, mt.notPassiveCapture);
  };
  e.querySelectorAll("a, img").forEach(n);
}
function Et(e, t, n) {
  const r = `__q_${t}_evt`;
  e[r] = e[r] !== void 0 ? e[r].concat(n) : n, n.forEach((l) => {
    l[0].addEventListener(l[1], e[l[2]], mt[l[3]]);
  });
}
function Gt(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 && (e[n].forEach((r) => {
    r[0].removeEventListener(r[1], e[r[2]], mt[r[3]]);
  }), e[n] = void 0);
}
function Pr(e, t = 250, n) {
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
var Hi = ["sm", "md", "lg", "xl"], { passive: Zc } = mt, wp = El({ width: 0, height: 0, name: "xs", sizes: { sm: 600, md: 1024, lg: 1440, xl: 1920 }, lt: { sm: true, md: true, lg: true, xl: true }, gt: { xs: false, sm: false, md: false, lg: false }, xs: true, sm: false, md: false, lg: false, xl: false }, { setSizes: Ct, setDebounce: Ct, install({ $q: e, onSSRHydrated: t }) {
  var _a3;
  if (e.screen = this, this.__installed === true) {
    e.config.screen !== void 0 && (e.config.screen.bodyClasses === false ? document.body.classList.remove(`screen--${this.name}`) : this.__update(true));
    return;
  }
  const { visualViewport: n } = window, r = n || window, l = document.scrollingElement || document.documentElement, a = n === void 0 || ze.is.mobile === true ? () => [Math.max(window.innerWidth, l.clientWidth), Math.max(window.innerHeight, l.clientHeight)] : () => [n.width * n.scale + window.innerWidth - l.clientWidth, n.height * n.scale + window.innerHeight - l.clientHeight], o = ((_a3 = e.config.screen) == null ? void 0 : _a3.bodyClasses) === true;
  this.__update = (v) => {
    const [u, h] = a();
    if (h !== this.height && (this.height = h), u !== this.width) this.width = u;
    else if (v !== true) return;
    let g = this.sizes;
    this.gt.xs = u >= g.sm, this.gt.sm = u >= g.md, this.gt.md = u >= g.lg, this.gt.lg = u >= g.xl, this.lt.sm = u < g.sm, this.lt.md = u < g.md, this.lt.lg = u < g.lg, this.lt.xl = u < g.xl, this.xs = this.lt.sm, this.sm = this.gt.xs === true && this.lt.md === true, this.md = this.gt.sm === true && this.lt.lg === true, this.lg = this.gt.md === true && this.lt.xl === true, this.xl = this.gt.lg, g = this.xs === true && "xs" || this.sm === true && "sm" || this.md === true && "md" || this.lg === true && "lg" || "xl", g !== this.name && (o === true && (document.body.classList.remove(`screen--${this.name}`), document.body.classList.add(`screen--${g}`)), this.name = g);
  };
  let i, s = {}, d = 16;
  this.setSizes = (v) => {
    Hi.forEach((u) => {
      v[u] !== void 0 && (s[u] = v[u]);
    });
  }, this.setDebounce = (v) => {
    d = v;
  };
  const c = () => {
    const v = getComputedStyle(document.body);
    v.getPropertyValue("--q-size-sm") && Hi.forEach((u) => {
      this.sizes[u] = parseInt(v.getPropertyValue(`--q-size-${u}`), 10);
    }), this.setSizes = (u) => {
      Hi.forEach((h) => {
        u[h] && (this.sizes[h] = u[h]);
      }), this.__update(true);
    }, this.setDebounce = (u) => {
      i !== void 0 && r.removeEventListener("resize", i, Zc), i = u > 0 ? Pr(this.__update, u) : this.__update, r.addEventListener("resize", i, Zc);
    }, this.setDebounce(d), Object.keys(s).length !== 0 ? (this.setSizes(s), s = void 0) : this.__update(), o === true && this.name === "xs" && document.body.classList.add("screen--xs");
  };
  an.value === true ? t.push(c) : c();
} }), Kt = El({ isActive: false, mode: false }, { __media: void 0, set(e) {
  Kt.mode = e, e === "auto" ? (Kt.__media === void 0 && (Kt.__media = window.matchMedia("(prefers-color-scheme: dark)"), Kt.__updateMedia = () => {
    Kt.set("auto");
  }, Kt.__media.addListener(Kt.__updateMedia)), e = Kt.__media.matches) : Kt.__media !== void 0 && (Kt.__media.removeListener(Kt.__updateMedia), Kt.__media = void 0), Kt.isActive = e === true, document.body.classList.remove(`body--${e === true ? "light" : "dark"}`), document.body.classList.add(`body--${e === true ? "dark" : "light"}`);
}, toggle() {
  Kt.set(Kt.isActive === false);
}, install({ $q: e, ssrContext: t }) {
  const { dark: n } = e.config;
  e.dark = this, this.__installed !== true && this.set(n !== void 0 ? n : false);
} }), fm = Kt;
function xp(e, t, n = document.body) {
  if (typeof e != "string") throw new TypeError("Expected a string as propName");
  if (typeof t != "string") throw new TypeError("Expected a string as value");
  if (!(n instanceof Element)) throw new TypeError("Expected a DOM element");
  n.style.setProperty(`--q-${e}`, t);
}
var vm = false;
function Sp(e) {
  vm = e.isComposing === true;
}
function er(e) {
  return vm === true || e !== Object(e) || e.isComposing === true || e.qKeyEvent === true;
}
function wn(e, t) {
  return er(e) === true ? false : [].concat(t).includes(e.keyCode);
}
function mm(e) {
  if (e.ios === true) return "ios";
  if (e.android === true) return "android";
}
function Cp({ is: e, has: t, within: n }, r) {
  const l = [e.desktop === true ? "desktop" : "mobile", `${t.touch === false ? "no-" : ""}touch`];
  if (e.mobile === true) {
    const a = mm(e);
    a !== void 0 && l.push("platform-" + a);
  }
  if (e.nativeMobile === true) {
    const a = e.nativeMobileWrapper;
    l.push(a), l.push("native-mobile"), e.ios === true && (r[a] === void 0 || r[a].iosStatusBarPadding !== false) && l.push("q-ios-padding");
  } else e.electron === true ? l.push("electron") : e.bex === true && l.push("bex");
  return n.iframe === true && l.push("within-iframe"), l;
}
function kp() {
  const { is: e } = ze, t = document.body.className, n = new Set(t.replace(/ {2}/g, " ").split(" "));
  if (e.nativeMobile !== true && e.electron !== true && e.bex !== true) {
    if (e.desktop === true) n.delete("mobile"), n.delete("platform-ios"), n.delete("platform-android"), n.add("desktop");
    else if (e.mobile === true) {
      n.delete("desktop"), n.add("mobile"), n.delete("platform-ios"), n.delete("platform-android");
      const l = mm(e);
      l !== void 0 && n.add(`platform-${l}`);
    }
  }
  ze.has.touch === true && (n.delete("no-touch"), n.add("touch")), ze.within.iframe === true && n.add("within-iframe");
  const r = Array.from(n).join(" ");
  t !== r && (document.body.className = r);
}
function Tp(e) {
  for (const t in e) xp(t, e[t]);
}
var qp = { install(e) {
  if (this.__installed !== true) {
    if (an.value === true) kp();
    else {
      const { $q: t } = e;
      t.config.brand !== void 0 && Tp(t.config.brand);
      const n = Cp(ze, t.config);
      document.body.classList.add.apply(document.body.classList, n);
    }
    ze.is.ios === true && document.body.addEventListener("touchstart", Ct), window.addEventListener("keydown", Sp, true);
  }
} }, hm = () => true;
function Ep(e) {
  return typeof e == "string" && e !== "" && e !== "/" && e !== "#/";
}
function Mp(e) {
  return e.startsWith("#") === true && (e = e.substring(1)), e.startsWith("/") === false && (e = "/" + e), e.endsWith("/") === true && (e = e.substring(0, e.length - 1)), "#" + e;
}
function Rp(e) {
  if (e.backButtonExit === false) return () => false;
  if (e.backButtonExit === "*") return hm;
  const t = ["#/"];
  return Array.isArray(e.backButtonExit) === true && t.push(...e.backButtonExit.filter(Ep).map(Mp)), () => t.includes(window.location.hash);
}
var Ta = { __history: [], add: Ct, remove: Ct, install({ $q: e }) {
  if (this.__installed === true) return;
  const { cordova: t, capacitor: n } = ze.is;
  if (t !== true && n !== true) return;
  const r = e.config[t === true ? "cordova" : "capacitor"];
  if ((r == null ? void 0 : r.backButton) === false || n === true && (window.Capacitor === void 0 || window.Capacitor.Plugins.App === void 0)) return;
  this.add = (o) => {
    o.condition === void 0 && (o.condition = hm), this.__history.push(o);
  }, this.remove = (o) => {
    const i = this.__history.indexOf(o);
    i >= 0 && this.__history.splice(i, 1);
  };
  const l = Rp(Object.assign({ backButtonExit: true }, r)), a = () => {
    if (this.__history.length) {
      const o = this.__history[this.__history.length - 1];
      o.condition() === true && (this.__history.pop(), o.handler());
    } else l() === true ? navigator.app.exitApp() : window.history.back();
  };
  t === true ? document.addEventListener("deviceready", () => {
    document.addEventListener("backbutton", a, false);
  }) : window.Capacitor.Plugins.App.addListener("backButton", a);
} }, zu = { isoName: "en-US", nativeName: "English (US)", label: { clear: "Clear", ok: "OK", cancel: "Cancel", close: "Close", set: "Set", select: "Select", reset: "Reset", remove: "Remove", update: "Update", create: "Create", search: "Search", filter: "Filter", refresh: "Refresh", expand: (e) => e ? `Expand "${e}"` : "Expand", collapse: (e) => e ? `Collapse "${e}"` : "Collapse" }, date: { days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), firstDayOfWeek: 0, format24h: false, pluralDay: "days", prevMonth: "Previous month", nextMonth: "Next month", prevYear: "Previous year", nextYear: "Next year", today: "Today", prevRangeYears: (e) => `Previous ${e} years`, nextRangeYears: (e) => `Next ${e} years` }, table: { noData: "No data available", noResults: "No matching records found", loading: "Loading...", selectedRecords: (e) => e === 1 ? "1 record selected." : (e === 0 ? "No" : e) + " records selected.", recordsPerPage: "Records per page:", allRows: "All", pagination: (e, t, n) => e + "-" + t + " of " + n, columns: "Columns" }, pagination: { first: "First page", prev: "Previous page", next: "Next page", last: "Last page" }, editor: { url: "URL", bold: "Bold", italic: "Italic", strikethrough: "Strikethrough", underline: "Underline", unorderedList: "Unordered List", orderedList: "Ordered List", subscript: "Subscript", superscript: "Superscript", hyperlink: "Hyperlink", toggleFullscreen: "Toggle Fullscreen", quote: "Quote", left: "Left align", center: "Center align", right: "Right align", justify: "Justify align", print: "Print", outdent: "Decrease indentation", indent: "Increase indentation", removeFormat: "Remove formatting", formatting: "Formatting", fontSize: "Font Size", align: "Align", hr: "Insert Horizontal Rule", undo: "Undo", redo: "Redo", heading1: "Heading 1", heading2: "Heading 2", heading3: "Heading 3", heading4: "Heading 4", heading5: "Heading 5", heading6: "Heading 6", paragraph: "Paragraph", code: "Code", size1: "Very small", size2: "A bit small", size3: "Normal", size4: "Medium-large", size5: "Big", size6: "Very big", size7: "Maximum", defaultFont: "Default Font", viewSource: "View Source" }, tree: { noNodes: "No nodes available", noResults: "No matching nodes found" } };
function Jc() {
  const e = Array.isArray(navigator.languages) === true && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
  if (typeof e == "string") return e.split(/[-_]/).map((t, n) => n === 0 ? t.toLowerCase() : n > 1 || t.length < 4 ? t.toUpperCase() : t[0].toUpperCase() + t.slice(1).toLowerCase()).join("-");
}
var Dl = El({ __qLang: {} }, { getLocale: Jc, set(e = zu, t) {
  const n = { ...e, rtl: e.rtl === true, getLocale: Jc };
  {
    if (n.set = Dl.set, Dl.__langConfig === void 0 || Dl.__langConfig.noHtmlAttrs !== true) {
      const r = document.documentElement;
      r.setAttribute("dir", n.rtl === true ? "rtl" : "ltr"), r.setAttribute("lang", n.isoName);
    }
    Object.assign(Dl.__qLang, n);
  }
}, install({ $q: e, lang: t, ssrContext: n }) {
  e.lang = Dl.__qLang, Dl.__langConfig = e.config.lang, this.__installed === true ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qLang, { get() {
    return Reflect.get(...arguments);
  }, ownKeys(r) {
    return Reflect.ownKeys(r).filter((l) => l !== "set" && l !== "getLocale");
  } }), this.set(t || zu));
} }), vi = Dl, Ap = { name: "material-icons", type: { positive: "check_circle", negative: "warning", info: "info", warning: "priority_high" }, arrow: { up: "arrow_upward", right: "arrow_forward", down: "arrow_downward", left: "arrow_back", dropdown: "arrow_drop_down" }, chevron: { left: "chevron_left", right: "chevron_right" }, colorPicker: { spectrum: "gradient", tune: "tune", palette: "style" }, pullToRefresh: { icon: "refresh" }, carousel: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down", navigationIcon: "lens" }, chip: { remove: "cancel", selected: "check" }, datetime: { arrowLeft: "chevron_left", arrowRight: "chevron_right", now: "access_time", today: "today" }, editor: { bold: "format_bold", italic: "format_italic", strikethrough: "strikethrough_s", underline: "format_underlined", unorderedList: "format_list_bulleted", orderedList: "format_list_numbered", subscript: "vertical_align_bottom", superscript: "vertical_align_top", hyperlink: "link", toggleFullscreen: "fullscreen", quote: "format_quote", left: "format_align_left", center: "format_align_center", right: "format_align_right", justify: "format_align_justify", print: "print", outdent: "format_indent_decrease", indent: "format_indent_increase", removeFormat: "format_clear", formatting: "text_format", fontSize: "format_size", align: "format_align_left", hr: "remove", undo: "undo", redo: "redo", heading: "format_size", code: "code", size: "format_size", font: "font_download", viewSource: "code" }, expansionItem: { icon: "keyboard_arrow_down", denseIcon: "arrow_drop_down" }, fab: { icon: "add", activeIcon: "close" }, field: { clear: "cancel", error: "error" }, pagination: { first: "first_page", prev: "keyboard_arrow_left", next: "keyboard_arrow_right", last: "last_page" }, rating: { icon: "grade" }, stepper: { done: "check", active: "edit", error: "warning" }, tabs: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down" }, table: { arrowUp: "arrow_upward", warning: "warning", firstPage: "first_page", prevPage: "chevron_left", nextPage: "chevron_right", lastPage: "last_page" }, tree: { icon: "play_arrow" }, uploader: { done: "done", clear: "clear", add: "add_box", upload: "cloud_upload", removeQueue: "clear_all", removeUploaded: "done_all" } }, Nu = El({ iconMapFn: null, __qIconSet: {} }, { set(e, t) {
  const n = { ...e };
  n.set = Nu.set, Object.assign(Nu.__qIconSet, n);
}, install({ $q: e, iconSet: t, ssrContext: n }) {
  e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn), e.iconSet = this.__qIconSet, Dt(e, "iconMapFn", () => this.iconMapFn, (r) => {
    this.iconMapFn = r;
  }), this.__installed === true ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qIconSet, { get() {
    return Reflect.get(...arguments);
  }, ownKeys(r) {
    return Reflect.ownKeys(r).filter((l) => l !== "set");
  } }), this.set(t || Ap));
} }), gm = Nu, bm = "_q_", pm = "_q_t_", ym = "_q_s_", tr = "_q_l_", _m = "_q_pc_", wm = "_q_f_", xm = "_q_fo_", Sm = "_q_tabs_", Cm = "_q_u_";
function ut() {
}
var Lo = {}, km = false;
function $p() {
  km = true;
}
function En(e, t) {
  if (e === t) return true;
  if (e !== null && t !== null && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return false;
    let n, r;
    if (e.constructor === Array) {
      if (n = e.length, n !== t.length) return false;
      for (r = n; r-- !== 0; ) if (En(e[r], t[r]) !== true) return false;
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
        if (En(r.value[1], t.get(r.value[0])) !== true) return false;
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
      if (En(e[a], t[a]) !== true) return false;
    }
    return true;
  }
  return e !== e && t !== t;
}
function Bt(e) {
  return e !== null && typeof e == "object" && Array.isArray(e) !== true;
}
function Hu(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Pp(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function qa(e) {
  return typeof e == "number" && isFinite(e);
}
var ed = [dm, qp, fm, wp, Ta, vi, gm];
function mi(e, t) {
  const n = um(e);
  n.config.globalProperties = t.config.globalProperties;
  const { reload: r, ...l } = t._context;
  return Object.assign(n._context, l), n;
}
function td(e, t) {
  t.forEach((n) => {
    n.install(e), n.__installed = true;
  });
}
function Lp(e, t, n) {
  e.config.globalProperties.$q = n.$q, e.provide(bm, n.$q), td(n, ed), t.components !== void 0 && Object.values(t.components).forEach((r) => {
    Bt(r) === true && r.name !== void 0 && e.component(r.name, r);
  }), t.directives !== void 0 && Object.values(t.directives).forEach((r) => {
    Bt(r) === true && r.name !== void 0 && e.directive(r.name, r);
  }), t.plugins !== void 0 && td(n, Object.values(t.plugins).filter((r) => typeof r.install == "function" && ed.includes(r) === false)), an.value === true && (n.$q.onSSRHydrated = () => {
    n.onSSRHydrated.forEach((r) => {
      r();
    }), n.$q.onSSRHydrated = () => {
    };
  });
}
var Bp = function(e, t = {}) {
  const n = { version: "2.18.1" };
  km === false ? (t.config !== void 0 && Object.assign(Lo, t.config), n.config = { ...Lo }, $p()) : n.config = t.config || {}, Lp(e, t, { parentApp: e, $q: n, lang: t.lang, iconSet: t.iconSet, onSSRHydrated: [] });
}, nd = ["B", "KB", "MB", "GB", "TB", "PB"];
function ju(e, t = 1) {
  let n = 0;
  for (; parseInt(e, 10) >= 1024 && n < nd.length - 1; ) e /= 1024, ++n;
  return `${e.toFixed(t)}${nd[n]}`;
}
function vt(e, t, n) {
  return n <= t ? t : Math.min(n, Math.max(t, e));
}
function Bo(e, t, n) {
  if (n <= t) return t;
  const r = n - t + 1;
  let l = t + (e - t) % r;
  return l < t && (l = r + l), l === 0 ? 0 : l;
}
function it(e, t = 2, n = "0") {
  if (e == null) return e;
  const r = "" + e;
  return r.length >= t ? r : new Array(t - r.length + 1).join(n) + r;
}
var Rs = XMLHttpRequest, Tm = Rs.prototype.open, Fp = ["top", "right", "bottom", "left"], Fo = [], da = 0;
function Op({ p: e, pos: t, active: n, horiz: r, reverse: l, dir: a }) {
  let o = 1, i = 1;
  return r === true ? (l === true && (o = -1), t === "bottom" && (i = -1), { transform: `translate3d(${o * (e - 100)}%,${n ? 0 : i * -200}%,0)` }) : (l === true && (i = -1), t === "right" && (o = -1), { transform: `translate3d(${n ? 0 : a * o * -200}%,${i * (e - 100)}%,0)` });
}
function Vp(e, t) {
  return typeof t != "number" && (e < 25 ? t = Math.random() * 3 + 3 : e < 65 ? t = Math.random() * 3 : e < 85 ? t = Math.random() * 2 : e < 99 ? t = 0.6 : t = 0), vt(e + t, 0, 100);
}
function Dp(e) {
  da++, Fo.push(e), !(da > 1) && (Rs.prototype.open = function(t, n) {
    const r = [], l = () => {
      Fo.forEach((o) => {
        (o.hijackFilter.value === null || o.hijackFilter.value(n) === true) && (o.start(), r.push(o.stop));
      });
    }, a = () => {
      r.forEach((o) => {
        o();
      });
    };
    this.addEventListener("loadstart", l, { once: true }), this.addEventListener("loadend", a, { once: true }), Tm.apply(this, arguments);
  });
}
function Ip(e) {
  Fo = Fo.filter((t) => t.start !== e), da = Math.max(0, da - 1), da === 0 && (Rs.prototype.open = Tm);
}
var zp = me({ name: "QAjaxBar", props: { position: { type: String, default: "top", validator: (e) => Fp.includes(e) }, size: { type: String, default: "2px" }, color: String, skipHijack: Boolean, reverse: Boolean, hijackFilter: Function }, emits: ["start", "stop"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), r = U(0), l = U(false), a = U(true);
  let o = 0, i = null, s;
  const d = m(() => `q-loading-bar q-loading-bar--${e.position}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (a.value === true ? "" : " no-transition")), c = m(() => e.position === "top" || e.position === "bottom"), v = m(() => c.value === true ? "height" : "width"), u = m(() => {
    const p = l.value, b = Op({ p: r.value, pos: e.position, active: p, horiz: c.value, reverse: n.$q.lang.rtl === true && ["top", "bottom"].includes(e.position) ? e.reverse === false : e.reverse, dir: n.$q.lang.rtl === true ? -1 : 1 });
    return b[v.value] = e.size, b.opacity = p ? 1 : 0, b;
  }), h = m(() => l.value === true ? { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": r.value } : { "aria-hidden": "true" });
  function g(p = 300) {
    const b = s;
    return s = Math.max(0, p) || 0, o++, o > 1 ? (b === 0 && p > 0 ? k() : i !== null && b > 0 && p <= 0 && (clearTimeout(i), i = null), o) : (i !== null && clearTimeout(i), t("start"), r.value = 0, i = setTimeout(() => {
      i = null, a.value = true, p > 0 && k();
    }, l._value === true ? 500 : 1), l._value !== true && (l.value = true, a.value = false), o);
  }
  function _(p) {
    return o > 0 && (r.value = Vp(r.value, p)), o;
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
  function k() {
    r.value < 100 && (i = setTimeout(() => {
      i = null, _(), k();
    }, s));
  }
  let y;
  return ft(() => {
    e.skipHijack !== true && (y = true, Dp({ start: g, stop: w, hijackFilter: m(() => e.hijackFilter || null) }));
  }), Xe(() => {
    i !== null && clearTimeout(i), y === true && Ip(g);
  }), Object.assign(n, { start: g, stop: w, increment: _ }), () => f("div", { class: d.value, style: u.value, ...h.value });
} }), Uu = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 }, nl = { size: String };
function ll(e, t = Uu) {
  return m(() => e.size !== void 0 ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size } : null);
}
function Pe(e, t) {
  return e !== void 0 && e() || t;
}
function Oa(e, t) {
  if (e !== void 0) {
    const n = e();
    if (n != null) return n.slice();
  }
  return t;
}
function Mt(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function As(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function xn(e, t, n, r, l, a) {
  t.key = r + l;
  const o = f(e, t, n);
  return l === true ? dn(o, a()) : o;
}
var ld = "0 0 24 24", ji = (e) => e, Ui = (e) => `ionicons ${e}`, qm = { "mdi-": (e) => `mdi ${e}`, "icon-": ji, "bt-": (e) => `bt ${e}`, "eva-": (e) => `eva ${e}`, "ion-md": Ui, "ion-ios": Ui, "ion-logo": Ui, "iconfont ": ji, "ti-": (e) => `themify-icon ${e}`, "bi-": (e) => `bootstrap-icons ${e}`, "i-": ji }, Em = { o_: "-outlined", r_: "-round", s_: "-sharp" }, Mm = { sym_o_: "-outlined", sym_r_: "-rounded", sym_s_: "-sharp" }, Np = new RegExp("^(" + Object.keys(qm).join("|") + ")"), Hp = new RegExp("^(" + Object.keys(Em).join("|") + ")"), rd = new RegExp("^(" + Object.keys(Mm).join("|") + ")"), jp = /^[Mm]\s?[-+]?\.?\d/, Up = /^img:/, Qp = /^svguse:/, Kp = /^ion-/, Wp = /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, tt = me({ name: "QIcon", props: { ...nl, tag: { type: String, default: "i" }, name: String, color: String, left: Boolean, right: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = ll(e), l = m(() => "q-icon" + (e.left === true ? " on-left" : "") + (e.right === true ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), a = m(() => {
    let o, i = e.name;
    if (i === "none" || !i) return { none: true };
    if (n.iconMapFn !== null) {
      const c = n.iconMapFn(i);
      if (c !== void 0) if (c.icon !== void 0) {
        if (i = c.icon, i === "none" || !i) return { none: true };
      } else return { cls: c.cls, content: c.content !== void 0 ? c.content : " " };
    }
    if (jp.test(i) === true) {
      const [c, v = ld] = i.split("|");
      return { svg: true, viewBox: v, nodes: c.split("&&").map((u) => {
        const [h, g, _] = u.split("@@");
        return f("path", { style: g, d: h, transform: _ });
      }) };
    }
    if (Up.test(i) === true) return { img: true, src: i.substring(4) };
    if (Qp.test(i) === true) {
      const [c, v = ld] = i.split("|");
      return { svguse: true, src: c.substring(7), viewBox: v };
    }
    let s = " ";
    const d = i.match(Np);
    if (d !== null) o = qm[d[1]](i);
    else if (Wp.test(i) === true) o = i;
    else if (Kp.test(i) === true) o = `ionicons ion-${n.platform.is.ios === true ? "ios" : "md"}${i.substring(3)}`;
    else if (rd.test(i) === true) {
      o = "notranslate material-symbols";
      const c = i.match(rd);
      c !== null && (i = i.substring(6), o += Mm[c[1]]), s = i;
    } else {
      o = "notranslate material-icons";
      const c = i.match(Hp);
      c !== null && (i = i.substring(2), o += Em[c[1]]), s = i;
    }
    return { cls: o, content: s };
  });
  return () => {
    const o = { class: l.value, style: r.value, "aria-hidden": "true" };
    return a.value.none === true ? f(e.tag, o, Pe(t.default)) : a.value.img === true ? f(e.tag, o, Mt(t.default, [f("img", { src: a.value.src })])) : a.value.svg === true ? f(e.tag, o, Mt(t.default, [f("svg", { viewBox: a.value.viewBox || "0 0 24 24" }, a.value.nodes)])) : a.value.svguse === true ? f(e.tag, o, Mt(t.default, [f("svg", { viewBox: a.value.viewBox }, [f("use", { "xlink:href": a.value.src })])])) : (a.value.cls !== void 0 && (o.class += " " + a.value.cls), f(e.tag, o, Mt(t.default, [a.value.content])));
  };
} }), Qu = me({ name: "QAvatar", props: { ...nl, fontSize: String, color: String, textColor: String, icon: String, square: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  const n = ll(e), r = m(() => "q-avatar" + (e.color ? ` bg-${e.color}` : "") + (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") + (e.square === true ? " q-avatar--square" : e.rounded === true ? " rounded-borders" : "")), l = m(() => e.fontSize ? { fontSize: e.fontSize } : null);
  return () => {
    const a = e.icon !== void 0 ? [f(tt, { name: e.icon })] : void 0;
    return f("div", { class: r.value, style: n.value }, [f("div", { class: "q-avatar__content row flex-center overflow-hidden", style: l.value }, As(t.default, a))]);
  };
} }), Yp = ["top", "middle", "bottom"];
me({ name: "QBadge", props: { color: String, textColor: String, floating: Boolean, transparent: Boolean, multiLine: Boolean, outline: Boolean, rounded: Boolean, label: [Number, String], align: { type: String, validator: (e) => Yp.includes(e) } }, setup(e, { slots: t }) {
  const n = m(() => e.align !== void 0 ? { verticalAlign: e.align } : null), r = m(() => {
    const l = e.outline === true && e.color || e.textColor;
    return `q-badge flex inline items-center no-wrap q-badge--${e.multiLine === true ? "multi" : "single"}-line` + (e.outline === true ? " q-badge--outline" : e.color !== void 0 ? ` bg-${e.color}` : "") + (l !== void 0 ? ` text-${l}` : "") + (e.floating === true ? " q-badge--floating" : "") + (e.rounded === true ? " q-badge--rounded" : "") + (e.transparent === true ? " q-badge--transparent" : "");
  });
  return () => f("div", { class: r.value, style: n.value, role: "status", "aria-label": e.label }, Mt(t.default, e.label !== void 0 ? [e.label] : []));
} });
var lt = { dark: { type: Boolean, default: null } };
function rt(e, t) {
  return m(() => e.dark === null ? t.dark.isActive : e.dark);
}
me({ name: "QBanner", props: { ...lt, inlineActions: Boolean, dense: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = rt(e, n), l = m(() => "q-banner row items-center" + (e.dense === true ? " q-banner--dense" : "") + (r.value === true ? " q-banner--dark q-dark" : "") + (e.rounded === true ? " rounded-borders" : "")), a = m(() => `q-banner__actions row items-center justify-end col-${e.inlineActions === true ? "auto" : "all"}`);
  return () => {
    const o = [f("div", { class: "q-banner__avatar col-auto row items-center self-start" }, Pe(t.avatar)), f("div", { class: "q-banner__content col text-body2" }, Pe(t.default))], i = Pe(t.action);
    return i !== void 0 && o.push(f("div", { class: a.value }, i)), f("div", { class: l.value + (e.inlineActions === false && i !== void 0 ? " q-banner--top-padding" : ""), role: "alert" }, o);
  };
} });
me({ name: "QBar", props: { ...lt, dense: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = rt(e, n), l = m(() => `q-bar row no-wrap items-center q-bar--${e.dense === true ? "dense" : "standard"}  q-bar--${r.value === true ? "dark" : "light"}`);
  return () => f("div", { class: l.value, role: "toolbar" }, Pe(t.default));
} });
var Rm = { left: "start", center: "center", right: "end", between: "between", around: "around", evenly: "evenly", stretch: "stretch" }, Xp = Object.keys(Rm), $s = { align: { type: String, validator: (e) => Xp.includes(e) } };
function Ps(e) {
  return m(() => {
    const t = e.align === void 0 ? e.vertical === true ? "stretch" : "left" : e.align;
    return `${e.vertical === true ? "items" : "justify"}-${Rm[t]}`;
  });
}
function ho(e) {
  if (Object(e.$parent) === e.$parent) return e.$parent;
  let { parent: t } = e.$;
  for (; Object(t) === t; ) {
    if (Object(t.proxy) === t.proxy) return t.proxy;
    t = t.parent;
  }
}
function Am(e, t) {
  typeof t.type == "symbol" ? Array.isArray(t.children) === true && t.children.forEach((n) => {
    Am(e, n);
  }) : e.add(t);
}
function Ls(e) {
  const t = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    Am(t, n);
  }), Array.from(t);
}
function Bs(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function _l(e) {
  return e.isUnmounted === true || e.isDeactivated === true;
}
var Gp = ["", true];
me({ name: "QBreadcrumbs", props: { ...$s, separator: { type: String, default: "/" }, separatorColor: String, activeColor: { type: String, default: "primary" }, gutter: { type: String, validator: (e) => ["none", "xs", "sm", "md", "lg", "xl"].includes(e), default: "sm" } }, setup(e, { slots: t }) {
  const n = Ps(e), r = m(() => `flex items-center ${n.value}${e.gutter === "none" ? "" : ` q-gutter-${e.gutter}`}`), l = m(() => e.separatorColor ? ` text-${e.separatorColor}` : ""), a = m(() => ` text-${e.activeColor}`);
  return () => {
    if (t.default === void 0) return;
    const o = Ls(Pe(t.default));
    if (o.length === 0) return;
    let i = 1;
    const s = [], d = o.filter((v) => {
      var _a3;
      return ((_a3 = v.type) == null ? void 0 : _a3.name) === "QBreadcrumbsEl";
    }).length, c = t.separator !== void 0 ? t.separator : () => e.separator;
    return o.forEach((v) => {
      var _a3;
      if (((_a3 = v.type) == null ? void 0 : _a3.name) === "QBreadcrumbsEl") {
        const u = i < d, h = v.props !== null && Gp.includes(v.props.disable), g = (u === true ? "" : " q-breadcrumbs--last") + (h !== true && u === true ? a.value : "");
        i++, s.push(f("div", { class: `flex items-center${g}` }, [v])), u === true && s.push(f("div", { class: "q-breadcrumbs__separator" + l.value }, c()));
      } else s.push(v);
    }), f("div", { class: "q-breadcrumbs" }, [f("div", { class: r.value }, s)]);
  };
} });
function ad(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
function od(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Zp(e, t) {
  for (const n in t) {
    const r = t[n], l = e[n];
    if (typeof r == "string") {
      if (r !== l) return false;
    } else if (Array.isArray(l) === false || l.length !== r.length || r.some((a, o) => a !== l[o])) return false;
  }
  return true;
}
function id(e, t) {
  return Array.isArray(t) === true ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function Jp(e, t) {
  return Array.isArray(e) === true ? id(e, t) : Array.isArray(t) === true ? id(t, e) : e === t;
}
function ey(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (const n in e) if (Jp(e[n], t[n]) === false) return false;
  return true;
}
var $m = { to: [String, Object], replace: Boolean, href: String, target: String, disable: Boolean }, Va = { ...$m, exact: Boolean, activeClass: { type: String, default: "q-router-link--active" }, exactActiveClass: { type: String, default: "q-router-link--exact-active" } };
function hi({ fallbackTag: e, useDisableForRouterLinkProps: t = true } = {}) {
  const n = xe(), { props: r, proxy: l, emit: a } = n, o = Bs(n), i = m(() => r.disable !== true && r.href !== void 0), s = m(t === true ? () => o === true && r.disable !== true && i.value !== true && r.to !== void 0 && r.to !== null && r.to !== "" : () => o === true && i.value !== true && r.to !== void 0 && r.to !== null && r.to !== ""), d = m(() => s.value === true ? y(r.to) : null), c = m(() => d.value !== null), v = m(() => i.value === true || c.value === true), u = m(() => r.type === "a" || v.value === true ? "a" : r.tag || e || "div"), h = m(() => i.value === true ? { href: r.href, target: r.target } : c.value === true ? { href: d.value.href, target: r.target } : {}), g = m(() => {
    if (c.value === false) return -1;
    const { matched: S } = d.value, { length: P } = S, F = S[P - 1];
    if (F === void 0) return -1;
    const z = l.$route.matched;
    if (z.length === 0) return -1;
    const L = z.findIndex(od.bind(null, F));
    if (L !== -1) return L;
    const B = ad(S[P - 2]);
    return P > 1 && ad(F) === B && z[z.length - 1].path !== B ? z.findIndex(od.bind(null, S[P - 2])) : L;
  }), _ = m(() => c.value === true && g.value !== -1 && Zp(l.$route.params, d.value.params)), w = m(() => _.value === true && g.value === l.$route.matched.length - 1 && ey(l.$route.params, d.value.params)), k = m(() => c.value === true ? w.value === true ? ` ${r.exactActiveClass} ${r.activeClass}` : r.exact === true ? "" : _.value === true ? ` ${r.activeClass}` : "" : "");
  function y(S) {
    try {
      return l.$router.resolve(S);
    } catch {
    }
    return null;
  }
  function p(S, { returnRouterError: P, to: F = r.to, replace: z = r.replace } = {}) {
    if (r.disable === true) return S.preventDefault(), Promise.resolve(false);
    if (S.metaKey || S.altKey || S.ctrlKey || S.shiftKey || S.button !== void 0 && S.button !== 0 || r.target === "_blank") return Promise.resolve(false);
    S.preventDefault();
    const L = l.$router[z === true ? "replace" : "push"](F);
    return P === true ? L : L.then(() => {
    }).catch(() => {
    });
  }
  function b(S) {
    if (c.value === true) {
      const P = (F) => p(S, F);
      a("click", S, P), S.defaultPrevented !== true && P();
    } else a("click", S);
  }
  return { hasRouterLink: c, hasHrefLink: i, hasLink: v, linkTag: u, resolvedLink: d, linkIsActive: _, linkIsExactActive: w, linkClass: k, linkAttrs: h, getLink: y, navigateToRouterLink: p, navigateOnClick: b };
}
me({ name: "QBreadcrumbsEl", props: { ...Va, label: String, icon: String, tag: { type: String, default: "span" } }, emits: ["click"], setup(e, { slots: t }) {
  const { linkTag: n, linkAttrs: r, linkClass: l, navigateOnClick: a } = hi(), o = m(() => ({ class: "q-breadcrumbs__el q-link flex inline items-center relative-position " + (e.disable !== true ? "q-link--focusable" + l.value : "q-breadcrumbs__el--disable"), ...r.value, onClick: a })), i = m(() => "q-breadcrumbs__el-icon" + (e.label !== void 0 ? " q-breadcrumbs__el-icon--with-label" : ""));
  return () => {
    const s = [];
    return e.icon !== void 0 && s.push(f(tt, { class: i.value, name: e.icon })), e.label !== void 0 && s.push(e.label), f(n.value, { ...o.value }, Mt(t.default, s));
  };
} });
var At = { size: { type: [String, Number], default: "1em" }, color: String };
function $t(e) {
  return { cSize: m(() => e.size in Uu ? `${Uu[e.size]}px` : e.size), classes: m(() => "q-spinner" + (e.color ? ` text-${e.color}` : "")) };
}
var Sn = me({ name: "QSpinner", props: { ...At, thickness: { type: Number, default: 5 } }, setup(e) {
  const { cSize: t, classes: n } = $t(e);
  return () => f("svg", { class: n.value + " q-spinner-mat", width: t.value, height: t.value, viewBox: "25 25 50 50" }, [f("circle", { class: "path", cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": e.thickness, "stroke-miterlimit": "10" })]);
} });
function Oo(e) {
  if (e === window) return { top: 0, left: 0 };
  const { top: t, left: n } = e.getBoundingClientRect();
  return { top: t, left: n };
}
function qr(e) {
  return e === window ? window.innerHeight : e.getBoundingClientRect().height;
}
function Ku(e, t) {
  const n = e.style;
  for (const r in t) n[r] = t[r];
}
function ty(e) {
  if (e == null) return;
  if (typeof e == "string") try {
    return document.querySelector(e) || void 0;
  } catch {
    return;
  }
  const t = Ve(e);
  if (t) return t.$el || t;
}
function Pm(e, t) {
  if (e == null || e.contains(t) === true) return true;
  for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling) if (n.contains(t)) return true;
  return false;
}
function Lm(e, t = 250) {
  let n = false, r;
  return function() {
    return n === false && (n = true, setTimeout(() => {
      n = false;
    }, t), r = e.apply(this, arguments)), r;
  };
}
function ud(e, t, n, r) {
  n.modifiers.stop === true && St(e);
  const l = n.modifiers.color;
  let a = n.modifiers.center;
  a = a === true || r === true;
  const o = document.createElement("span"), i = document.createElement("span"), s = nn(e), { left: d, top: c, width: v, height: u } = t.getBoundingClientRect(), h = Math.sqrt(v * v + u * u), g = h / 2, _ = `${(v - h) / 2}px`, w = a ? _ : `${s.left - d - g}px`, k = `${(u - h) / 2}px`, y = a ? k : `${s.top - c - g}px`;
  i.className = "q-ripple__inner", Ku(i, { height: `${h}px`, width: `${h}px`, transform: `translate3d(${w},${y},0) scale3d(.2,.2,1)`, opacity: 0 }), o.className = `q-ripple${l ? " text-" + l : ""}`, o.setAttribute("dir", "ltr"), o.appendChild(i), t.appendChild(o);
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
function sd(e, { modifiers: t, value: n, arg: r }) {
  const l = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = { early: l.early === true, stop: l.stop === true, center: l.center === true, color: l.color || r, keyCodes: [].concat(l.keyCodes || 13) };
}
var gi = Ln({ name: "ripple", beforeMount(e, t) {
  const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
  if (n.ripple === false) return;
  const r = { cfg: n, enabled: t.value !== false, modifiers: {}, abort: [], start(l) {
    r.enabled === true && l.qSkipRipple !== true && l.type === (r.modifiers.early === true ? "pointerdown" : "click") && ud(l, e, r, l.qKeyEvent === true);
  }, keystart: Lm((l) => {
    r.enabled === true && l.qSkipRipple !== true && wn(l, r.modifiers.keyCodes) === true && l.type === `key${r.modifiers.early === true ? "down" : "up"}` && ud(l, e, r, true);
  }, 300) };
  sd(r, t), e.__qripple = r, Et(r, "main", [[e, "pointerdown", "start", "passive"], [e, "click", "start", "passive"], [e, "keydown", "keystart", "passive"], [e, "keyup", "keystart", "passive"]]);
}, updated(e, t) {
  if (t.oldValue !== t.value) {
    const n = e.__qripple;
    n !== void 0 && (n.enabled = t.value !== false, n.enabled === true && Object(t.value) === t.value && sd(n, t));
  }
}, beforeUnmount(e) {
  const t = e.__qripple;
  t !== void 0 && (t.abort.forEach((n) => {
    n();
  }), Gt(t, "main"), delete e._qripple);
} }), Vo = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 }, ny = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, ly = ["button", "submit", "reset"], ry = /[^\s]\/[^\s]/, Bm = ["flat", "outline", "push", "unelevated"];
function Fs(e, t) {
  return e.flat === true ? "flat" : e.outline === true ? "outline" : e.push === true ? "push" : e.unelevated === true ? "unelevated" : t;
}
function Fm(e) {
  const t = Fs(e);
  return t !== void 0 ? { [t]: true } : {};
}
var Os = { ...nl, ...$m, type: { type: String, default: "button" }, label: [Number, String], icon: String, iconRight: String, ...Bm.reduce((e, t) => (e[t] = Boolean) && e, {}), square: Boolean, rounded: Boolean, glossy: Boolean, size: String, fab: Boolean, fabMini: Boolean, padding: String, color: String, textColor: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, tabindex: [Number, String], ripple: { type: [Boolean, Object], default: true }, align: { ...$s.align, default: "center" }, stack: Boolean, stretch: Boolean, loading: { type: Boolean, default: null }, disable: Boolean }, ay = { ...Os, round: Boolean };
function oy(e) {
  const t = ll(e, ny), n = Ps(e), { hasRouterLink: r, hasLink: l, linkTag: a, linkAttrs: o, navigateOnClick: i } = hi({ fallbackTag: "button" }), s = m(() => {
    const w = e.fab === false && e.fabMini === false ? t.value : {};
    return e.padding !== void 0 ? Object.assign({}, w, { padding: e.padding.split(/\s+/).map((k) => k in Vo ? Vo[k] + "px" : k).join(" "), minWidth: "0", minHeight: "0" }) : w;
  }), d = m(() => e.rounded === true || e.fab === true || e.fabMini === true), c = m(() => e.disable !== true && e.loading !== true), v = m(() => c.value === true ? e.tabindex || 0 : -1), u = m(() => Fs(e, "standard")), h = m(() => {
    const w = { tabindex: v.value };
    return l.value === true ? Object.assign(w, o.value) : ly.includes(e.type) === true && (w.type = e.type), a.value === "a" ? (e.disable === true ? w["aria-disabled"] = "true" : w.href === void 0 && (w.role = "button"), r.value !== true && ry.test(e.type) === true && (w.type = e.type)) : e.disable === true && (w.disabled = "", w["aria-disabled"] = "true"), e.loading === true && e.percentage !== void 0 && Object.assign(w, { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": e.percentage }), w;
  }), g = m(() => {
    let w;
    e.color !== void 0 ? e.flat === true || e.outline === true ? w = `text-${e.textColor || e.color}` : w = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (w = `text-${e.textColor}`);
    const k = e.round === true ? "round" : `rectangle${d.value === true ? " q-btn--rounded" : e.square === true ? " q-btn--square" : ""}`;
    return `q-btn--${u.value} q-btn--${k}` + (w !== void 0 ? " " + w : "") + (c.value === true ? " q-btn--actionable q-focusable q-hoverable" : e.disable === true ? " disabled" : "") + (e.fab === true ? " q-btn--fab" : e.fabMini === true ? " q-btn--fab-mini" : "") + (e.noCaps === true ? " q-btn--no-uppercase" : "") + (e.dense === true ? " q-btn--dense" : "") + (e.stretch === true ? " no-border-radius self-stretch" : "") + (e.glossy === true ? " glossy" : "") + (e.square ? " q-btn--square" : "");
  }), _ = m(() => n.value + (e.stack === true ? " column" : " row") + (e.noWrap === true ? " no-wrap text-no-wrap" : "") + (e.loading === true ? " q-btn__content--hidden" : ""));
  return { classes: g, style: s, innerClasses: _, attributes: h, hasLink: l, linkTag: a, navigateOnClick: i, isActionable: c };
}
var { passiveCapture: mn } = mt, rr = null, ar = null, or = null, et = me({ name: "QBtn", props: { ...ay, percentage: Number, darkPercentage: Boolean, onTouchstart: [Function, Array] }, emits: ["click", "keydown", "mousedown", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { classes: l, style: a, innerClasses: o, attributes: i, hasLink: s, linkTag: d, navigateOnClick: c, isActionable: v } = oy(e), u = U(null), h = U(null);
  let g = null, _, w = null;
  const k = m(() => e.label !== void 0 && e.label !== null && e.label !== ""), y = m(() => e.disable === true || e.ripple === false ? false : { keyCodes: s.value === true ? [13, 32] : [13], ...e.ripple === true ? {} : e.ripple }), p = m(() => ({ center: e.round })), b = m(() => {
    const C = Math.max(0, Math.min(100, e.percentage));
    return C > 0 ? { transition: "transform 0.6s", transform: `translateX(${C - 100}%)` } : {};
  }), S = m(() => {
    if (e.loading === true) return { onMousedown: R, onTouchstart: R, onClick: R, onKeydown: R, onKeyup: R };
    if (v.value === true) {
      const C = { onClick: F, onKeydown: z, onMousedown: B };
      if (r.$q.platform.has.touch === true) {
        const H = e.onTouchstart !== void 0 ? "" : "Passive";
        C[`onTouchstart${H}`] = L;
      }
      return C;
    }
    return { onClick: Ue };
  }), P = m(() => ({ ref: u, class: "q-btn q-btn-item non-selectable no-outline " + l.value, style: a.value, ...i.value, ...S.value }));
  function F(C) {
    if (u.value !== null) {
      if (C !== void 0) {
        if (C.defaultPrevented === true) return;
        const H = document.activeElement;
        if (e.type === "submit" && H !== document.body && u.value.contains(H) === false && H.contains(u.value) === false) {
          C.qAvoidFocus !== true && u.value.focus();
          const Q = () => {
            var _a3;
            document.removeEventListener("keydown", Ue, true), document.removeEventListener("keyup", Q, mn), (_a3 = u.value) == null ? void 0 : _a3.removeEventListener("blur", Q, mn);
          };
          document.addEventListener("keydown", Ue, true), document.addEventListener("keyup", Q, mn), u.value.addEventListener("blur", Q, mn);
        }
      }
      c(C);
    }
  }
  function z(C) {
    u.value !== null && (n("keydown", C), wn(C, [13, 32]) === true && ar !== u.value && (ar !== null && q(), C.defaultPrevented !== true && (C.qAvoidFocus !== true && u.value.focus(), ar = u.value, u.value.classList.add("q-btn--active"), document.addEventListener("keyup", D, true), u.value.addEventListener("blur", D, mn)), Ue(C)));
  }
  function L(C) {
    u.value !== null && (n("touchstart", C), C.defaultPrevented !== true && (rr !== u.value && (rr !== null && q(), rr = u.value, g = C.target, g.addEventListener("touchcancel", D, mn), g.addEventListener("touchend", D, mn)), _ = true, w !== null && clearTimeout(w), w = setTimeout(() => {
      w = null, _ = false;
    }, 200)));
  }
  function B(C) {
    u.value !== null && (C.qSkipRipple = _ === true, n("mousedown", C), C.defaultPrevented !== true && or !== u.value && (or !== null && q(), or = u.value, u.value.classList.add("q-btn--active"), document.addEventListener("mouseup", D, mn)));
  }
  function D(C) {
    if (u.value !== null && !((C == null ? void 0 : C.type) === "blur" && document.activeElement === u.value)) {
      if ((C == null ? void 0 : C.type) === "keyup") {
        if (ar === u.value && wn(C, [13, 32]) === true) {
          const H = new MouseEvent("click", C);
          H.qKeyEvent = true, C.defaultPrevented === true && It(H), C.cancelBubble === true && St(H), u.value.dispatchEvent(H), Ue(C), C.qKeyEvent = true;
        }
        n("keyup", C);
      }
      q();
    }
  }
  function q(C) {
    var _a3, _b2;
    const H = h.value;
    C !== true && (rr === u.value || or === u.value) && H !== null && H !== document.activeElement && (H.setAttribute("tabindex", -1), H.focus()), rr === u.value && (g !== null && (g.removeEventListener("touchcancel", D, mn), g.removeEventListener("touchend", D, mn)), rr = g = null), or === u.value && (document.removeEventListener("mouseup", D, mn), or = null), ar === u.value && (document.removeEventListener("keyup", D, true), (_a3 = u.value) == null ? void 0 : _a3.removeEventListener("blur", D, mn), ar = null), (_b2 = u.value) == null ? void 0 : _b2.classList.remove("q-btn--active");
  }
  function R(C) {
    Ue(C), C.qSkipRipple = true;
  }
  return Xe(() => {
    q(true);
  }), Object.assign(r, { click: (C) => {
    v.value === true && F(C);
  } }), () => {
    let C = [];
    e.icon !== void 0 && C.push(f(tt, { name: e.icon, left: e.stack !== true && k.value === true, role: "img" })), k.value === true && C.push(f("span", { class: "block" }, [e.label])), C = Mt(t.default, C), e.iconRight !== void 0 && e.round === false && C.push(f(tt, { name: e.iconRight, right: e.stack !== true && k.value === true, role: "img" }));
    const H = [f("span", { class: "q-focus-helper", ref: h })];
    return e.loading === true && e.percentage !== void 0 && H.push(f("span", { class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === true ? " q-btn__progress--dark" : "") }, [f("span", { class: "q-btn__progress-indicator fit block", style: b.value })])), H.push(f("span", { class: "q-btn__content text-center col items-center q-anchor--skip " + o.value }, C)), e.loading !== null && H.push(f(Vt, { name: "q-transition--fade" }, () => e.loading === true ? [f("span", { key: "loading", class: "absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : [f(Sn)])] : null)), dn(f(d.value, P.value, H), [[gi, y.value, void 0, p.value]]);
  };
} }), Om = me({ name: "QBtnGroup", props: { unelevated: Boolean, outline: Boolean, flat: Boolean, rounded: Boolean, square: Boolean, push: Boolean, stretch: Boolean, glossy: Boolean, spread: Boolean }, setup(e, { slots: t }) {
  const n = m(() => {
    const r = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter((l) => e[l] === true).map((l) => `q-btn-group--${l}`).join(" ");
    return `q-btn-group row no-wrap${r.length !== 0 ? " " + r : ""}` + (e.spread === true ? " q-btn-group--spread" : " inline");
  });
  return () => f("div", { class: n.value }, Pe(t.default));
} });
function An() {
  if (window.getSelection !== void 0) {
    const e = window.getSelection();
    e.empty !== void 0 ? e.empty() : e.removeAllRanges !== void 0 && (e.removeAllRanges(), dm.is.mobile !== true && e.addRange(document.createRange()));
  } else document.selection !== void 0 && document.selection.empty();
}
var Vm = { target: { type: [Boolean, String, Element], default: true }, noParentEvent: Boolean }, Dm = { ...Vm, contextMenu: Boolean };
function Vs({ showing: e, avoidEmit: t, configureAnchorEl: n }) {
  const { props: r, proxy: l, emit: a } = xe(), o = U(null);
  let i = null;
  function s(h) {
    return o.value === null ? false : h === void 0 || h.touches === void 0 || h.touches.length <= 1;
  }
  const d = {};
  n === void 0 && (Object.assign(d, { hide(h) {
    l.hide(h);
  }, toggle(h) {
    l.toggle(h), h.qAnchorHandled = true;
  }, toggleKey(h) {
    wn(h, 13) === true && d.toggle(h);
  }, contextClick(h) {
    l.hide(h), It(h), We(() => {
      l.show(h), h.qAnchorHandled = true;
    });
  }, prevent: It, mobileTouch(h) {
    if (d.mobileCleanup(h), s(h) !== true) return;
    l.hide(h), o.value.classList.add("non-selectable");
    const g = h.target;
    Et(d, "anchor", [[g, "touchmove", "mobileCleanup", "passive"], [g, "touchend", "mobileCleanup", "passive"], [g, "touchcancel", "mobileCleanup", "passive"], [o.value, "contextmenu", "prevent", "notPassive"]]), i = setTimeout(() => {
      i = null, l.show(h), h.qAnchorHandled = true;
    }, 300);
  }, mobileCleanup(h) {
    o.value.classList.remove("non-selectable"), i !== null && (clearTimeout(i), i = null), e.value === true && h !== void 0 && An();
  } }), n = function(h = r.contextMenu) {
    if (r.noParentEvent === true || o.value === null) return;
    let g;
    h === true ? l.$q.platform.is.mobile === true ? g = [[o.value, "touchstart", "mobileTouch", "passive"]] : g = [[o.value, "mousedown", "hide", "passive"], [o.value, "contextmenu", "contextClick", "notPassive"]] : g = [[o.value, "click", "toggle", "passive"], [o.value, "keyup", "toggleKey", "passive"]], Et(d, "anchor", g);
  });
  function c() {
    Gt(d, "anchor");
  }
  function v(h) {
    for (o.value = h; o.value.classList.contains("q-anchor--skip"); ) o.value = o.value.parentNode;
    n();
  }
  function u() {
    if (r.target === false || r.target === "" || l.$el.parentNode === null) o.value = null;
    else if (r.target === true) v(l.$el.parentNode);
    else {
      let h = r.target;
      if (typeof r.target == "string") try {
        h = document.querySelector(r.target);
      } catch {
        h = void 0;
      }
      h != null ? (o.value = h.$el || h, n()) : (o.value = null, console.error(`Anchor: target "${r.target}" not found`));
    }
  }
  return he(() => r.contextMenu, (h) => {
    o.value !== null && (c(), n(h));
  }), he(() => r.target, () => {
    o.value !== null && c(), u();
  }), he(() => r.noParentEvent, (h) => {
    o.value !== null && (h === true ? c() : n());
  }), ft(() => {
    u(), t !== true && r.modelValue === true && o.value === null && a("update:modelValue", false);
  }), Xe(() => {
    i !== null && clearTimeout(i), c();
  }), { anchorEl: o, canShow: s, anchorEvents: d };
}
function Im(e, t) {
  const n = U(null);
  let r;
  function l(i, s) {
    const d = `${s !== void 0 ? "add" : "remove"}EventListener`, c = s !== void 0 ? s : r;
    i !== window && i[d]("scroll", c, mt.passive), window[d]("scroll", c, mt.passive), r = s;
  }
  function a() {
    n.value !== null && (l(n.value), n.value = null);
  }
  const o = he(() => e.noParentEvent, () => {
    n.value !== null && (a(), t());
  });
  return Xe(o), { localScrollTarget: n, unconfigureScrollTarget: a, changeScrollEvent: l };
}
var Lr = { modelValue: { type: Boolean, default: null }, "onUpdate:modelValue": [Function, Array] }, Br = ["beforeShow", "show", "beforeHide", "hide"];
function Fr({ showing: e, canShow: t, hideOnRouteChange: n, handleShow: r, handleHide: l, processOnMount: a }) {
  const o = xe(), { props: i, emit: s, proxy: d } = o;
  let c;
  function v(y) {
    e.value === true ? g(y) : u(y);
  }
  function u(y) {
    if (i.disable === true || (y == null ? void 0 : y.qAnchorHandled) === true || t !== void 0 && t(y) !== true) return;
    const p = i["onUpdate:modelValue"] !== void 0;
    p === true && (s("update:modelValue", true), c = y, We(() => {
      c === y && (c = void 0);
    })), (i.modelValue === null || p === false) && h(y);
  }
  function h(y) {
    e.value !== true && (e.value = true, s("beforeShow", y), r !== void 0 ? r(y) : s("show", y));
  }
  function g(y) {
    if (i.disable === true) return;
    const p = i["onUpdate:modelValue"] !== void 0;
    p === true && (s("update:modelValue", false), c = y, We(() => {
      c === y && (c = void 0);
    })), (i.modelValue === null || p === false) && _(y);
  }
  function _(y) {
    e.value !== false && (e.value = false, s("beforeHide", y), l !== void 0 ? l(y) : s("hide", y));
  }
  function w(y) {
    i.disable === true && y === true ? i["onUpdate:modelValue"] !== void 0 && s("update:modelValue", false) : y === true !== e.value && (y === true ? h : _)(c);
  }
  he(() => i.modelValue, w), n !== void 0 && Bs(o) === true && he(() => d.$route.fullPath, () => {
    n.value === true && e.value === true && g();
  }), a === true && ft(() => {
    w(i.modelValue);
  });
  const k = { show: u, hide: g, toggle: v };
  return Object.assign(d, k), k;
}
var Nl = [], Ea = [];
function zm(e) {
  Ea = Ea.filter((t) => t !== e);
}
function iy(e) {
  zm(e), Ea.push(e);
}
function cd(e) {
  zm(e), Ea.length === 0 && Nl.length !== 0 && (Nl[Nl.length - 1](), Nl = []);
}
function Or(e) {
  Ea.length === 0 ? e() : Nl.push(e);
}
function uy(e) {
  Nl = Nl.filter((t) => t !== e);
}
var wr = [], fa = [], sy = 1, dl = document.body;
function Da(e, t) {
  const n = document.createElement("div");
  if (n.id = t !== void 0 ? `q-portal--${t}--${sy++}` : e, Lo.globalNodes !== void 0) {
    const r = Lo.globalNodes.class;
    r !== void 0 && (n.className = r);
  }
  return dl.appendChild(n), wr.push(n), fa.push(t), n;
}
function Ds(e) {
  const t = wr.indexOf(e);
  wr.splice(t, 1), fa.splice(t, 1), e.remove();
}
function cy(e) {
  if (e === dl) return;
  if (dl = e, dl === document.body || fa.reduce((n, r) => r === "dialog" ? n + 1 : n, 0) < 2) {
    wr.forEach((n) => {
      n.contains(dl) === false && dl.appendChild(n);
    });
    return;
  }
  const t = fa.lastIndexOf("dialog");
  for (let n = 0; n < wr.length; n++) {
    const r = wr[n];
    (n === t || fa[n] !== "dialog") && r.contains(dl) === false && dl.appendChild(r);
  }
}
var xr = [];
function dy(e) {
  return xr.find((t) => t.contentEl !== null && t.contentEl.contains(e));
}
function Nm(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      if (e.hide(t), e.$props.separateClosePopup === true) return ho(e);
    } else if (e.__qPortal === true) {
      const n = ho(e);
      return (n == null ? void 0 : n.$options.name) === "QPopupProxy" ? (e.hide(t), n) : e;
    }
    e = ho(e);
  } while (e != null);
}
function fy(e, t, n) {
  for (; n !== 0 && e !== void 0 && e !== null; ) {
    if (e.__qPortal === true) {
      if (n--, e.$options.name === "QMenu") {
        e = Nm(e, t);
        continue;
      }
      e.hide(t);
    }
    e = ho(e);
  }
}
var vy = me({ name: "QPortal", setup(e, { slots: t }) {
  return () => t.default();
} });
function my(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog") return true;
    if (e.type.name === "QDialog" || e.type.name === "QMenu") return false;
    e = e.parent;
  }
  return false;
}
function Is(e, t, n, r) {
  const l = U(false), a = U(false);
  let o = null;
  const i = {}, s = r === "dialog" && my(e);
  function d(v) {
    if (v === true) {
      cd(i), a.value = true;
      return;
    }
    a.value = false, l.value === false && (s === false && o === null && (o = Da(false, r)), l.value = true, xr.push(e.proxy), iy(i));
  }
  function c(v) {
    if (a.value = false, v !== true) return;
    cd(i), l.value = false;
    const u = xr.indexOf(e.proxy);
    u !== -1 && xr.splice(u, 1), o !== null && (Ds(o), o = null);
  }
  return ui(() => {
    c(true);
  }), e.proxy.__qPortal = true, Dt(e.proxy, "contentEl", () => t.value), { showPortal: d, hidePortal: c, portalIsActive: l, portalIsAccessible: a, renderPortal: () => s === true ? n() : l.value === true ? [f(O0, { to: o }, f(vy, n))] : void 0 };
}
var Ul = { transitionShow: { type: String, default: "fade" }, transitionHide: { type: String, default: "fade" }, transitionDuration: { type: [String, Number], default: 300 } };
function bi(e, t = () => {
}, n = () => {
}) {
  return { transitionProps: m(() => {
    const r = `q-transition--${e.transitionShow || t()}`, l = `q-transition--${e.transitionHide || n()}`;
    return { appear: true, enterFromClass: `${r}-enter-from`, enterActiveClass: `${r}-enter-active`, enterToClass: `${r}-enter-to`, leaveFromClass: `${l}-leave-from`, leaveActiveClass: `${l}-leave-active`, leaveToClass: `${l}-leave-to` };
  }), transitionStyle: m(() => `--q-transition-duration: ${e.transitionDuration}ms`) };
}
function Sr() {
  let e;
  const t = xe();
  function n() {
    e = void 0;
  }
  return In(n), Xe(n), { removeTick: n, registerTick(r) {
    e = r, We(() => {
      e === r && (_l(t) === false && e(), e = void 0);
    });
  } };
}
function el() {
  let e = null;
  const t = xe();
  function n() {
    e !== null && (clearTimeout(e), e = null);
  }
  return In(n), Xe(n), { removeTimeout: n, registerTimeout(r, l) {
    n(), _l(t) === false && (e = setTimeout(() => {
      e = null, r();
    }, l));
  } };
}
var nr = [Element, String], hy = [null, document, document.body, document.scrollingElement, document.documentElement];
function zn(e, t) {
  let n = ty(t);
  if (n === void 0) {
    if (e == null) return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return hy.includes(n) ? window : n;
}
function Wa(e) {
  return (e === window ? document.body : e).scrollHeight;
}
function wl(e) {
  return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop;
}
function pi(e) {
  return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft;
}
function Hm(e, t, n = 0) {
  const r = arguments[3] === void 0 ? performance.now() : arguments[3], l = wl(e);
  if (n <= 0) {
    l !== t && Wu(e, t);
    return;
  }
  requestAnimationFrame((a) => {
    const o = a - r, i = l + (t - l) / Math.max(o, n) * o;
    Wu(e, i), i !== t && Hm(e, t, n - o, a);
  });
}
function jm(e, t, n = 0) {
  const r = arguments[3] === void 0 ? performance.now() : arguments[3], l = pi(e);
  if (n <= 0) {
    l !== t && Yu(e, t);
    return;
  }
  requestAnimationFrame((a) => {
    const o = a - r, i = l + (t - l) / Math.max(o, n) * o;
    Yu(e, i), i !== t && jm(e, t, n - o, a);
  });
}
function Wu(e, t) {
  if (e === window) {
    window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t);
    return;
  }
  e.scrollTop = t;
}
function Yu(e, t) {
  if (e === window) {
    window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0);
    return;
  }
  e.scrollLeft = t;
}
function Cr(e, t, n) {
  if (n) {
    Hm(e, t, n);
    return;
  }
  Wu(e, t);
}
function Qi(e, t, n) {
  if (n) {
    jm(e, t, n);
    return;
  }
  Yu(e, t);
}
var Ya;
function go() {
  if (Ya !== void 0) return Ya;
  const e = document.createElement("p"), t = document.createElement("div");
  Ku(e, { width: "100%", height: "200px" }), Ku(t, { position: "absolute", top: "0px", left: "0px", visibility: "hidden", width: "200px", height: "150px", overflow: "hidden" }), t.appendChild(e), document.body.appendChild(t);
  const n = e.offsetWidth;
  t.style.overflow = "scroll";
  let r = e.offsetWidth;
  return n === r && (r = t.clientWidth), t.remove(), Ya = n - r, Ya;
}
function gy(e, t = true) {
  return !e || e.nodeType !== Node.ELEMENT_NODE ? false : t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]));
}
var Ql = [], Er;
function by(e) {
  Er = e.keyCode === 27;
}
function py() {
  Er === true && (Er = false);
}
function yy(e) {
  Er === true && (Er = false, wn(e, 27) === true && Ql[Ql.length - 1](e));
}
function Um(e) {
  window[e]("keydown", by), window[e]("blur", py), window[e]("keyup", yy), Er = false;
}
function Qm(e) {
  ze.is.desktop === true && (Ql.push(e), Ql.length === 1 && Um("addEventListener"));
}
function Do(e) {
  const t = Ql.indexOf(e);
  t !== -1 && (Ql.splice(t, 1), Ql.length === 0 && Um("removeEventListener"));
}
var Kl = [];
function Km(e) {
  Kl[Kl.length - 1](e);
}
function Wm(e) {
  ze.is.desktop === true && (Kl.push(e), Kl.length === 1 && document.body.addEventListener("focusin", Km));
}
function Xu(e) {
  const t = Kl.indexOf(e);
  t !== -1 && (Kl.splice(t, 1), Kl.length === 0 && document.body.removeEventListener("focusin", Km));
}
var { notPassiveCapture: Io } = mt, Wl = [];
function zo(e) {
  const t = e.target;
  if (t === void 0 || t.nodeType === 8 || t.classList.contains("no-pointer-events") === true) return;
  let n = xr.length - 1;
  for (; n >= 0; ) {
    const r = xr[n].$;
    if (r.type.name === "QTooltip") {
      n--;
      continue;
    }
    if (r.type.name !== "QDialog") break;
    if (r.props.seamless !== true) return;
    n--;
  }
  for (let r = Wl.length - 1; r >= 0; r--) {
    const l = Wl[r];
    if ((l.anchorEl.value === null || l.anchorEl.value.contains(t) === false) && (t === document.body || l.innerRef.value !== null && l.innerRef.value.contains(t) === false)) e.qClickOutside = true, l.onClickOutside(e);
    else return;
  }
}
function Ym(e) {
  Wl.push(e), Wl.length === 1 && (document.addEventListener("mousedown", zo, Io), document.addEventListener("touchstart", zo, Io));
}
function No(e) {
  const t = Wl.findIndex((n) => n === e);
  t !== -1 && (Wl.splice(t, 1), Wl.length === 0 && (document.removeEventListener("mousedown", zo, Io), document.removeEventListener("touchstart", zo, Io)));
}
var dd, fd;
function Ho(e) {
  const t = e.split(" ");
  return t.length !== 2 ? false : ["top", "center", "bottom"].includes(t[0]) !== true ? (console.error("Anchor/Self position must start with one of top/center/bottom"), false) : ["left", "middle", "right", "start", "end"].includes(t[1]) !== true ? (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), false) : true;
}
function Xm(e) {
  return e ? !(e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number") : true;
}
var Gu = { "start#ltr": "left", "start#rtl": "right", "end#ltr": "right", "end#rtl": "left" };
["left", "middle", "right"].forEach((e) => {
  Gu[`${e}#ltr`] = e, Gu[`${e}#rtl`] = e;
});
function jo(e, t) {
  const n = e.split(" ");
  return { vertical: n[0], horizontal: Gu[`${n[1]}#${t === true ? "rtl" : "ltr"}`] };
}
function _y(e, t) {
  let { top: n, left: r, right: l, bottom: a, width: o, height: i } = e.getBoundingClientRect();
  return t !== void 0 && (n -= t[1], r -= t[0], a += t[1], l += t[0], o += t[0], i += t[1]), { top: n, bottom: a, height: i, left: r, right: l, width: o, middle: r + (l - r) / 2, center: n + (a - n) / 2 };
}
function wy(e, t, n) {
  let { top: r, left: l } = e.getBoundingClientRect();
  return r += t.top, l += t.left, n !== void 0 && (r += n[1], l += n[0]), { top: r, bottom: r + 1, height: 1, left: l, right: l + 1, width: 1, middle: l, center: r };
}
function xy(e, t) {
  return { top: 0, center: t / 2, bottom: t, left: 0, middle: e / 2, right: e };
}
function vd(e, t, n, r) {
  return { top: e[n.vertical] - t[r.vertical], left: e[n.horizontal] - t[r.horizontal] };
}
function zs(e, t = 0) {
  if (e.targetEl === null || e.anchorEl === null || t > 5) return;
  if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      zs(e, t + 1);
    }, 10);
    return;
  }
  const { targetEl: n, offset: r, anchorEl: l, anchorOrigin: a, selfOrigin: o, absoluteOffset: i, fit: s, cover: d, maxHeight: c, maxWidth: v } = e;
  if (ze.is.ios === true && window.visualViewport !== void 0) {
    const P = document.body.style, { offsetLeft: F, offsetTop: z } = window.visualViewport;
    F !== dd && (P.setProperty("--q-pe-left", F + "px"), dd = F), z !== fd && (P.setProperty("--q-pe-top", z + "px"), fd = z);
  }
  const { scrollLeft: u, scrollTop: h } = n, g = i === void 0 ? _y(l, d === true ? [0, 0] : r) : wy(l, i, r);
  Object.assign(n.style, { top: 0, left: 0, minWidth: null, minHeight: null, maxWidth: v, maxHeight: c, visibility: "visible" });
  const { offsetWidth: _, offsetHeight: w } = n, { elWidth: k, elHeight: y } = s === true || d === true ? { elWidth: Math.max(g.width, _), elHeight: d === true ? Math.max(g.height, w) : w } : { elWidth: _, elHeight: w };
  let p = { maxWidth: v, maxHeight: c };
  (s === true || d === true) && (p.minWidth = g.width + "px", d === true && (p.minHeight = g.height + "px")), Object.assign(n.style, p);
  const b = xy(k, y);
  let S = vd(g, b, a, o);
  if (i === void 0 || r === void 0) Ki(S, g, b, a, o);
  else {
    const { top: P, left: F } = S;
    Ki(S, g, b, a, o);
    let z = false;
    if (S.top !== P) {
      z = true;
      const L = 2 * r[1];
      g.center = g.top -= L, g.bottom -= L + 2;
    }
    if (S.left !== F) {
      z = true;
      const L = 2 * r[0];
      g.middle = g.left -= L, g.right -= L + 2;
    }
    z === true && (S = vd(g, b, a, o), Ki(S, g, b, a, o));
  }
  p = { top: S.top + "px", left: S.left + "px" }, S.maxHeight !== void 0 && (p.maxHeight = S.maxHeight + "px", g.height > S.maxHeight && (p.minHeight = p.maxHeight)), S.maxWidth !== void 0 && (p.maxWidth = S.maxWidth + "px", g.width > S.maxWidth && (p.minWidth = p.maxWidth)), Object.assign(n.style, p), n.scrollTop !== h && (n.scrollTop = h), n.scrollLeft !== u && (n.scrollLeft = u);
}
function Ki(e, t, n, r, l) {
  const a = n.bottom, o = n.right, i = go(), s = window.innerHeight - i, d = document.body.clientWidth;
  if (e.top < 0 || e.top + a > s) if (l.vertical === "center") e.top = t[r.vertical] > s / 2 ? Math.max(0, s - a) : 0, e.maxHeight = Math.min(a, s);
  else if (t[r.vertical] > s / 2) {
    const c = Math.min(s, r.vertical === "center" ? t.center : r.vertical === l.vertical ? t.bottom : t.top);
    e.maxHeight = Math.min(a, c), e.top = Math.max(0, c - a);
  } else e.top = Math.max(0, r.vertical === "center" ? t.center : r.vertical === l.vertical ? t.top : t.bottom), e.maxHeight = Math.min(a, s - e.top);
  if (e.left < 0 || e.left + o > d) if (e.maxWidth = Math.min(o, d), l.horizontal === "middle") e.left = t[r.horizontal] > d / 2 ? Math.max(0, d - o) : 0;
  else if (t[r.horizontal] > d / 2) {
    const c = Math.min(d, r.horizontal === "middle" ? t.middle : r.horizontal === l.horizontal ? t.right : t.left);
    e.maxWidth = Math.min(o, c), e.left = Math.max(0, c - e.maxWidth);
  } else e.left = Math.max(0, r.horizontal === "middle" ? t.middle : r.horizontal === l.horizontal ? t.left : t.right), e.maxWidth = Math.min(o, d - e.left);
}
var yi = me({ name: "QMenu", inheritAttrs: false, props: { ...Dm, ...Lr, ...lt, ...Ul, persistent: Boolean, autoClose: Boolean, separateClosePopup: Boolean, noEscDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, fit: Boolean, cover: Boolean, square: Boolean, anchor: { type: String, validator: Ho }, self: { type: String, validator: Ho }, offset: { type: Array, validator: Xm }, scrollTarget: nr, touchPosition: Boolean, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null } }, emits: [...Br, "click", "escapeKey"], setup(e, { slots: t, emit: n, attrs: r }) {
  let l = null, a, o, i;
  const s = xe(), { proxy: d } = s, { $q: c } = d, v = U(null), u = U(false), h = m(() => e.persistent !== true && e.noRouteDismiss !== true), g = rt(e, c), { registerTick: _, removeTick: w } = Sr(), { registerTimeout: k } = el(), { transitionProps: y, transitionStyle: p } = bi(e), { localScrollTarget: b, changeScrollEvent: S, unconfigureScrollTarget: P } = Im(e, J), { anchorEl: F, canShow: z } = Vs({ showing: u }), { hide: L } = Fr({ showing: u, canShow: z, handleShow: pe, handleHide: Y, hideOnRouteChange: h, processOnMount: true }), { showPortal: B, hidePortal: D, renderPortal: q } = Is(s, v, $, "menu"), R = { anchorEl: F, innerRef: v, onClickOutside(T) {
    if (e.persistent !== true && u.value === true) return L(T), (T.type === "touchstart" || T.target.classList.contains("q-dialog__backdrop")) && Ue(T), true;
  } }, C = m(() => jo(e.anchor || (e.cover === true ? "center middle" : "bottom start"), c.lang.rtl)), H = m(() => e.cover === true ? C.value : jo(e.self || "top start", c.lang.rtl)), Q = m(() => (e.square === true ? " q-menu--square" : "") + (g.value === true ? " q-menu--dark q-dark" : "")), K = m(() => e.autoClose === true ? { onClick: ee } : {}), G = m(() => u.value === true && e.persistent !== true);
  he(G, (T) => {
    T === true ? (Qm(O), Ym(R)) : (Do(O), No(R));
  });
  function re() {
    Or(() => {
      let T = v.value;
      T && T.contains(document.activeElement) !== true && (T = T.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || T.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || T.querySelector("[autofocus], [data-autofocus]") || T, T.focus({ preventScroll: true }));
    });
  }
  function pe(T) {
    if (l = e.noRefocus === false ? document.activeElement : null, Wm(ge), B(), J(), a = void 0, T !== void 0 && (e.touchPosition || e.contextMenu)) {
      const N = nn(T);
      if (N.left !== void 0) {
        const { top: _e2, left: x } = F.value.getBoundingClientRect();
        a = { left: N.left - x, top: N.top - _e2 };
      }
    }
    o === void 0 && (o = he(() => c.screen.width + "|" + c.screen.height + "|" + e.self + "|" + e.anchor + "|" + c.lang.rtl, A)), e.noFocus !== true && document.activeElement.blur(), _(() => {
      A(), e.noFocus !== true && re();
    }), k(() => {
      c.platform.is.ios === true && (i = e.autoClose, v.value.click()), A(), B(true), n("show", T);
    }, e.transitionDuration);
  }
  function Y(T) {
    w(), D(), M(true), l !== null && (T === void 0 || T.qClickOutside !== true) && ((((T == null ? void 0 : T.type.indexOf("key")) === 0 ? l.closest('[tabindex]:not([tabindex^="-"])') : void 0) || l).focus(), l = null), k(() => {
      D(true), n("hide", T);
    }, e.transitionDuration);
  }
  function M(T) {
    a = void 0, o !== void 0 && (o(), o = void 0), (T === true || u.value === true) && (Xu(ge), P(), No(R), Do(O)), T !== true && (l = null);
  }
  function J() {
    (F.value !== null || e.scrollTarget !== void 0) && (b.value = zn(F.value, e.scrollTarget), S(b.value, A));
  }
  function ee(T) {
    i !== true ? (Nm(d, T), n("click", T)) : i = false;
  }
  function ge(T) {
    G.value === true && e.noFocus !== true && Pm(v.value, T.target) !== true && re();
  }
  function O(T) {
    e.noEscDismiss !== true && (n("escapeKey"), L(T));
  }
  function A() {
    zs({ targetEl: v.value, offset: e.offset, anchorEl: F.value, anchorOrigin: C.value, selfOrigin: H.value, absoluteOffset: a, fit: e.fit, cover: e.cover, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function $() {
    return f(Vt, y.value, () => u.value === true ? f("div", { role: "menu", ...r, ref: v, tabindex: -1, class: ["q-menu q-position-engine scroll" + Q.value, r.class], style: [r.style, p.value], ...K.value }, Pe(t.default)) : null);
  }
  return Xe(M), Object.assign(d, { focus: re, updatePosition: A }), q;
} }), Wi, Xa = 0, jt = new Array(256);
for (let e = 0; e < 256; e++) jt[e] = (e + 256).toString(16).substring(1);
var Sy = (() => {
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
})(), md = 4096;
function Ma() {
  (Wi === void 0 || Xa + 16 > md) && (Xa = 0, Wi = Sy(md));
  const e = Array.prototype.slice.call(Wi, Xa, Xa += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, jt[e[0]] + jt[e[1]] + jt[e[2]] + jt[e[3]] + "-" + jt[e[4]] + jt[e[5]] + "-" + jt[e[6]] + jt[e[7]] + "-" + jt[e[8]] + jt[e[9]] + "-" + jt[e[10]] + jt[e[11]] + jt[e[12]] + jt[e[13]] + jt[e[14]] + jt[e[15]];
}
function Cy(e) {
  return e ?? null;
}
function hd(e, t) {
  return e ?? (t === true ? `f_${Ma()}` : null);
}
function _i({ getValue: e, required: t = true } = {}) {
  if (an.value === true) {
    const n = U(e !== void 0 ? Cy(e()) : null);
    return t === true && n.value === null && ft(() => {
      n.value = `f_${Ma()}`;
    }), e !== void 0 && he(e, (r) => {
      n.value = hd(r, t);
    }), n;
  }
  return e !== void 0 ? m(() => hd(e(), t)) : U(`f_${Ma()}`);
}
var ky = Object.keys(Os);
function Ty(e) {
  return ky.reduce((t, n) => {
    const r = e[n];
    return r !== void 0 && (t[n] = r), t;
  }, {});
}
var qy = me({ name: "QBtnDropdown", props: { ...Os, ...Ul, modelValue: Boolean, split: Boolean, dropdownIcon: String, contentClass: [Array, String, Object], contentStyle: [Array, String, Object], cover: Boolean, persistent: Boolean, noEscDismiss: Boolean, noRouteDismiss: Boolean, autoClose: Boolean, noRefocus: Boolean, noFocus: Boolean, menuAnchor: { type: String, default: "bottom end" }, menuSelf: { type: String, default: "top end" }, menuOffset: Array, disableMainBtn: Boolean, disableDropdown: Boolean, noIconAnimation: Boolean, toggleAriaLabel: String }, emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), l = U(e.modelValue), a = U(null), o = _i(), i = m(() => {
    const b = { "aria-expanded": l.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": o.value, "aria-label": e.toggleAriaLabel || r.$q.lang.label[l.value === true ? "collapse" : "expand"](e.label) };
    return (e.disable === true || e.split === false && e.disableMainBtn === true || e.disableDropdown === true) && (b["aria-disabled"] = "true"), b;
  }), s = m(() => "q-btn-dropdown__arrow" + (l.value === true && e.noIconAnimation === false ? " rotate-180" : "") + (e.split === false ? " q-btn-dropdown__arrow-container" : "")), d = m(() => Fm(e)), c = m(() => Ty(e));
  he(() => e.modelValue, (b) => {
    var _a3;
    (_a3 = a.value) == null ? void 0 : _a3[b ? "show" : "hide"]();
  }), he(() => e.split, p);
  function v(b) {
    l.value = true, n("beforeShow", b);
  }
  function u(b) {
    n("show", b), n("update:modelValue", true);
  }
  function h(b) {
    l.value = false, n("beforeHide", b);
  }
  function g(b) {
    n("hide", b), n("update:modelValue", false);
  }
  function _(b) {
    n("click", b);
  }
  function w(b) {
    St(b), p(), n("click", b);
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
  return Object.assign(r, { show: y, hide: p, toggle: k }), ft(() => {
    e.modelValue === true && y();
  }), () => {
    const b = [f(tt, { class: s.value, name: e.dropdownIcon || r.$q.iconSet.arrow.dropdown })];
    return e.disableDropdown !== true && b.push(f(yi, { ref: a, id: o.value, class: e.contentClass, style: e.contentStyle, cover: e.cover, fit: true, persistent: e.persistent, noEscDismiss: e.noEscDismiss, noRouteDismiss: e.noRouteDismiss, autoClose: e.autoClose, noFocus: e.noFocus, noRefocus: e.noRefocus, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, separateClosePopup: true, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, onBeforeShow: v, onShow: u, onBeforeHide: h, onHide: g }, t.default)), e.split === false ? f(et, { class: "q-btn-dropdown q-btn-dropdown--simple", ...c.value, ...i.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: _ }, { default: () => Pe(t.label, []).concat(b), loading: t.loading }) : f(Om, { class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item", rounded: e.rounded, square: e.square, ...d.value, glossy: e.glossy, stretch: e.stretch }, () => [f(et, { class: "q-btn-dropdown--current", ...c.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: w }, { default: t.label, loading: t.loading }), f(et, { class: "q-btn-dropdown__arrow-container q-anchor--skip", ...i.value, ...d.value, disable: e.disable === true || e.disableDropdown === true, rounded: e.rounded, color: e.color, textColor: e.textColor, dense: e.dense, size: e.size, padding: e.padding, ripple: e.ripple }, () => b)]);
  };
} }), Cn = { name: String };
function Ia(e) {
  return m(() => ({ type: "hidden", name: e.name, value: e.modelValue }));
}
function Ml(e = {}) {
  return (t, n, r) => {
    t[n](f("input", { class: "hidden" + (r || ""), ...e.value }));
  };
}
function Ns(e) {
  return m(() => e.name || e.for);
}
me({ name: "QBtnToggle", props: { ...Cn, modelValue: { required: true }, options: { type: Array, required: true, validator: (e) => e.every((t) => ("label" in t || "icon" in t || "slot" in t) && "value" in t) }, color: String, textColor: String, toggleColor: { type: String, default: "primary" }, toggleTextColor: String, outline: Boolean, flat: Boolean, unelevated: Boolean, rounded: Boolean, push: Boolean, glossy: Boolean, size: String, padding: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, readonly: Boolean, disable: Boolean, stack: Boolean, stretch: Boolean, spread: Boolean, clearable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "clear", "click"], setup(e, { slots: t, emit: n }) {
  const r = m(() => e.options.find((u) => u.value === e.modelValue) !== void 0), l = m(() => ({ type: "hidden", name: e.name, value: e.modelValue })), a = Ml(l), o = m(() => Fm(e)), i = m(() => ({ rounded: e.rounded, dense: e.dense, ...o.value })), s = m(() => e.options.map((u, h) => {
    const { attrs: g, value: _, slot: w, ...k } = u;
    return { slot: w, props: { key: h, "aria-pressed": _ === e.modelValue ? "true" : "false", ...g, ...k, ...i.value, disable: e.disable === true || k.disable === true, color: _ === e.modelValue ? c(k, "toggleColor") : c(k, "color"), textColor: _ === e.modelValue ? c(k, "toggleTextColor") : c(k, "textColor"), noCaps: c(k, "noCaps") === true, noWrap: c(k, "noWrap") === true, size: c(k, "size"), padding: c(k, "padding"), ripple: c(k, "ripple"), stack: c(k, "stack") === true, stretch: c(k, "stretch") === true, onClick(y) {
      d(_, u, y);
    } } };
  }));
  function d(u, h, g) {
    e.readonly !== true && (e.modelValue === u ? e.clearable === true && (n("update:modelValue", null, null), n("clear")) : n("update:modelValue", u, h), n("click", g));
  }
  function c(u, h) {
    return u[h] === void 0 ? e[h] : u[h];
  }
  function v() {
    const u = s.value.map((h) => f(et, h.props, h.slot !== void 0 ? t[h.slot] : void 0));
    return e.name !== void 0 && e.disable !== true && r.value === true && a(u, "push"), Mt(t.default, u);
  }
  return () => f(Om, { class: "q-btn-toggle", ...o.value, rounded: e.rounded, stretch: e.stretch, glossy: e.glossy, spread: e.spread }, v);
} });
var Gm = me({ name: "QCard", props: { ...lt, tag: { type: String, default: "div" }, square: Boolean, flat: Boolean, bordered: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = rt(e, n), l = m(() => "q-card" + (r.value === true ? " q-card--dark q-dark" : "") + (e.bordered === true ? " q-card--bordered" : "") + (e.square === true ? " q-card--square no-border-radius" : "") + (e.flat === true ? " q-card--flat no-shadow" : ""));
  return () => f(e.tag, { class: l.value }, Pe(t.default));
} }), zl = me({ name: "QCardSection", props: { tag: { type: String, default: "div" }, horizontal: Boolean }, setup(e, { slots: t }) {
  const n = m(() => `q-card__section q-card__section--${e.horizontal === true ? "horiz row no-wrap" : "vert"}`);
  return () => f(e.tag, { class: n.value }, Pe(t.default));
} }), Ey = me({ name: "QCardActions", props: { ...$s, vertical: Boolean }, setup(e, { slots: t }) {
  const n = Ps(e), r = m(() => `q-card__actions ${n.value} q-card__actions--${e.vertical === true ? "vert column" : "horiz row"}`);
  return () => f("div", { class: r.value }, Pe(t.default));
} }), Hs = { left: true, right: true, up: true, down: true, horizontal: true, vertical: true }, My = Object.keys(Hs);
Hs.all = true;
function Uo(e) {
  const t = {};
  for (const n of My) e[n] === true && (t[n] = true);
  return Object.keys(t).length === 0 ? Hs : (t.horizontal === true ? t.left = t.right = true : t.left === true && t.right === true && (t.horizontal = true), t.vertical === true ? t.up = t.down = true : t.up === true && t.down === true && (t.vertical = true), t.horizontal === true && t.vertical === true && (t.all = true), t);
}
var Ry = ["INPUT", "TEXTAREA"];
function Qo(e, t) {
  return t.event === void 0 && e.target !== void 0 && e.target.draggable !== true && typeof t.handler == "function" && Ry.includes(e.target.nodeName.toUpperCase()) === false && (e.qClonedBy === void 0 || e.qClonedBy.indexOf(t.uid) === -1);
}
function Ay(e) {
  const t = [0.06, 6, 50];
  return typeof e == "string" && e.length && e.split(":").forEach((n, r) => {
    const l = parseFloat(n);
    l && (t[r] = l);
  }), t;
}
var $y = Ln({ name: "touch-swipe", beforeMount(e, { value: t, arg: n, modifiers: r }) {
  if (r.mouse !== true && ze.has.touch !== true) return;
  const l = r.mouseCapture === true ? "Capture" : "", a = { handler: t, sensitivity: Ay(n), direction: Uo(r), noop: Ct, mouseStart(o) {
    Qo(o, a) && fi(o) && (Et(a, "temp", [[document, "mousemove", "move", `notPassive${l}`], [document, "mouseup", "end", "notPassiveCapture"]]), a.start(o, true));
  }, touchStart(o) {
    if (Qo(o, a)) {
      const i = o.target;
      Et(a, "temp", [[i, "touchmove", "move", "notPassiveCapture"], [i, "touchcancel", "end", "notPassiveCapture"], [i, "touchend", "end", "notPassiveCapture"]]), a.start(o);
    }
  }, start(o, i) {
    ze.is.firefox === true && _r(e, true);
    const s = nn(o);
    a.event = { x: s.left, y: s.top, time: Date.now(), mouse: i === true, dir: false };
  }, move(o) {
    if (a.event === void 0) return;
    if (a.event.dir !== false) {
      Ue(o);
      return;
    }
    const i = Date.now() - a.event.time;
    if (i === 0) return;
    const s = nn(o), d = s.left - a.event.x, c = Math.abs(d), v = s.top - a.event.y, u = Math.abs(v);
    if (a.event.mouse !== true) {
      if (c < a.sensitivity[1] && u < a.sensitivity[1]) {
        a.end(o);
        return;
      }
    } else if (window.getSelection().toString() !== "") {
      a.end(o);
      return;
    } else if (c < a.sensitivity[2] && u < a.sensitivity[2]) return;
    const h = c / i, g = u / i;
    a.direction.vertical === true && c < u && c < 100 && g > a.sensitivity[0] && (a.event.dir = v < 0 ? "up" : "down"), a.direction.horizontal === true && c > u && u < 100 && h > a.sensitivity[0] && (a.event.dir = d < 0 ? "left" : "right"), a.direction.up === true && c < u && v < 0 && c < 100 && g > a.sensitivity[0] && (a.event.dir = "up"), a.direction.down === true && c < u && v > 0 && c < 100 && g > a.sensitivity[0] && (a.event.dir = "down"), a.direction.left === true && c > u && d < 0 && u < 100 && h > a.sensitivity[0] && (a.event.dir = "left"), a.direction.right === true && c > u && d > 0 && u < 100 && h > a.sensitivity[0] && (a.event.dir = "right"), a.event.dir !== false ? (Ue(o), a.event.mouse === true && (document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), An(), a.styleCleanup = (_) => {
      a.styleCleanup = void 0, document.body.classList.remove("non-selectable");
      const w = () => {
        document.body.classList.remove("no-pointer-events--children");
      };
      _ === true ? setTimeout(w, 50) : w();
    }), a.handler({ evt: o, touch: a.event.mouse !== true, mouse: a.event.mouse, direction: a.event.dir, duration: i, distance: { x: c, y: u } })) : a.end(o);
  }, end(o) {
    var _a3;
    a.event !== void 0 && (Gt(a, "temp"), ze.is.firefox === true && _r(e, false), (_a3 = a.styleCleanup) == null ? void 0 : _a3.call(a, true), o !== void 0 && a.event.dir !== false && Ue(o), a.event = void 0);
  } };
  if (e.__qtouchswipe = a, r.mouse === true) {
    const o = r.mouseCapture === true || r.mousecapture === true ? "Capture" : "";
    Et(a, "main", [[e, "mousedown", "mouseStart", `passive${o}`]]);
  }
  ze.has.touch === true && Et(a, "main", [[e, "touchstart", "touchStart", `passive${r.capture === true ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const n = e.__qtouchswipe;
  n !== void 0 && (t.oldValue !== t.value && (typeof t.value != "function" && n.end(), n.handler = t.value), n.direction = Uo(t.modifiers));
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qtouchswipe;
  t !== void 0 && (Gt(t, "main"), Gt(t, "temp"), ze.is.firefox === true && _r(e, false), (_a3 = t.styleCleanup) == null ? void 0 : _a3.call(t), delete e.__qtouchswipe);
} });
function za() {
  let e = /* @__PURE__ */ Object.create(null);
  return { getCache: (t, n) => e[t] === void 0 ? e[t] = typeof n == "function" ? n() : n : e[t], setCache(t, n) {
    e[t] = n;
  }, hasCache(t) {
    return Object.hasOwnProperty.call(e, t);
  }, clearCache(t) {
    t !== void 0 ? delete e[t] : e = /* @__PURE__ */ Object.create(null);
  } };
}
var js = { name: { required: true }, disable: Boolean }, gd = { setup(e, { slots: t }) {
  return () => f("div", { class: "q-panel scroll", role: "tabpanel" }, Pe(t.default));
} }, Us = { modelValue: { required: true }, animated: Boolean, infinite: Boolean, swipeable: Boolean, vertical: Boolean, transitionPrev: String, transitionNext: String, transitionDuration: { type: [String, Number], default: 300 }, keepAlive: Boolean, keepAliveInclude: [String, Array, RegExp], keepAliveExclude: [String, Array, RegExp], keepAliveMax: Number }, Qs = ["update:modelValue", "beforeTransition", "transition"];
function Ks() {
  const { props: e, emit: t, proxy: n } = xe(), { getCache: r } = za(), { registerTimeout: l } = el();
  let a, o;
  const i = U(null), s = { value: null };
  function d(C) {
    const H = e.vertical === true ? "up" : "left";
    z((n.$q.lang.rtl === true ? -1 : 1) * (C.direction === H ? 1 : -1));
  }
  const c = m(() => [[$y, d, void 0, { horizontal: e.vertical !== true, vertical: e.vertical, mouse: true }]]), v = m(() => e.transitionPrev || `slide-${e.vertical === true ? "down" : "right"}`), u = m(() => e.transitionNext || `slide-${e.vertical === true ? "up" : "left"}`), h = m(() => `--q-transition-duration: ${e.transitionDuration}ms`), g = m(() => typeof e.modelValue == "string" || typeof e.modelValue == "number" ? e.modelValue : String(e.modelValue)), _ = m(() => ({ include: e.keepAliveInclude, exclude: e.keepAliveExclude, max: e.keepAliveMax })), w = m(() => e.keepAliveInclude !== void 0 || e.keepAliveExclude !== void 0);
  he(() => e.modelValue, (C, H) => {
    const Q = b(C) === true ? S(C) : -1;
    o !== true && F(Q === -1 ? 0 : Q < S(H) ? -1 : 1), s.value !== Q && (s.value = Q, t("beforeTransition", C, H), l(() => {
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
  function P() {
    return a.filter((C) => C.props.disable !== "" && C.props.disable !== true);
  }
  function F(C) {
    const H = C !== 0 && e.animated === true && s.value !== -1 ? "q-transition--" + (C === -1 ? v.value : u.value) : null;
    i.value !== H && (i.value = H);
  }
  function z(C, H = s.value) {
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
  function L() {
    const C = S(e.modelValue);
    return s.value !== C && (s.value = C), true;
  }
  function B() {
    const C = b(e.modelValue) === true && L() && a[s.value];
    return e.keepAlive === true ? [f(Mv, _.value, [f(w.value === true ? r(g.value, () => ({ ...gd, name: g.value })) : gd, { key: g.value, style: h.value }, () => C)])] : [f("div", { class: "q-panel scroll", style: h.value, key: g.value, role: "tabpanel" }, [C])];
  }
  function D() {
    if (a.length !== 0) return e.animated === true ? [f(Vt, { name: i.value }, B)] : B();
  }
  function q(C) {
    return a = Ls(Pe(C.default, [])).filter((H) => H.props !== null && H.props.slot === void 0 && b(H.props.name) === true), a.length;
  }
  function R() {
    return a;
  }
  return Object.assign(n, { next: k, previous: y, goTo: p }), { panelIndex: s, panelDirectives: c, updatePanelsList: q, updatePanelIndex: L, getPanelContent: D, getEnabledPanels: P, getPanels: R, isValidPanelName: b, keepAliveProps: _, needsUniqueKeepAliveWrapper: w, goToPanelByOffset: z, goToPanel: p, nextPanel: k, previousPanel: y };
}
var zr = 0, Ws = { fullscreen: Boolean, noRouteFullscreenExit: Boolean }, Ys = ["update:fullscreen", "fullscreen"];
function Xs() {
  const e = xe(), { props: t, emit: n, proxy: r } = e;
  let l, a, o;
  const i = U(false);
  Bs(e) === true && he(() => r.$route.fullPath, () => {
    t.noRouteFullscreenExit !== true && c();
  }), he(() => t.fullscreen, (v) => {
    i.value !== v && s();
  }), he(i, (v) => {
    n("update:fullscreen", v), n("fullscreen", v);
  });
  function s() {
    i.value === true ? c() : d();
  }
  function d() {
    i.value !== true && (i.value = true, o = r.$el.parentNode, o.replaceChild(a, r.$el), document.body.appendChild(r.$el), zr++, zr === 1 && document.body.classList.add("q-body--fullscreen-mixin"), l = { handler: c }, Ta.add(l));
  }
  function c() {
    i.value === true && (l !== void 0 && (Ta.remove(l), l = void 0), o.replaceChild(r.$el, a), i.value = false, zr = Math.max(0, zr - 1), zr === 0 && (document.body.classList.remove("q-body--fullscreen-mixin"), r.$el.scrollIntoView !== void 0 && setTimeout(() => {
      r.$el.scrollIntoView();
    })));
  }
  return oi(() => {
    a = document.createElement("span");
  }), ft(() => {
    t.fullscreen === true && d();
  }), Xe(c), Object.assign(r, { toggleFullscreen: s, setFullscreen: d, exitFullscreen: c }), { inFullscreen: i, toggleFullscreen: s };
}
var Py = ["top", "right", "bottom", "left"], Ly = ["regular", "flat", "outline", "push", "unelevated"];
me({ name: "QCarousel", props: { ...lt, ...Us, ...Ws, transitionPrev: { type: String, default: "fade" }, transitionNext: { type: String, default: "fade" }, height: String, padding: Boolean, controlColor: String, controlTextColor: String, controlType: { type: String, validator: (e) => Ly.includes(e), default: "flat" }, autoplay: [Number, Boolean], arrows: Boolean, prevIcon: String, nextIcon: String, navigation: Boolean, navigationPosition: { type: String, validator: (e) => Py.includes(e) }, navigationIcon: String, navigationActiveIcon: String, thumbnails: Boolean }, emits: [...Ys, ...Qs], setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = rt(e, n);
  let l = null, a;
  const { updatePanelsList: o, getPanelContent: i, panelDirectives: s, goToPanel: d, previousPanel: c, nextPanel: v, getEnabledPanels: u, panelIndex: h } = Ks(), { inFullscreen: g } = Xs(), _ = m(() => g.value !== true && e.height !== void 0 ? { height: e.height } : {}), w = m(() => e.vertical === true ? "vertical" : "horizontal"), k = m(() => e.navigationPosition || (e.vertical === true ? "right" : "bottom")), y = m(() => `q-carousel q-panel-parent q-carousel--with${e.padding === true ? "" : "out"}-padding` + (g.value === true ? " fullscreen" : "") + (r.value === true ? " q-carousel--dark q-dark" : "") + (e.arrows === true ? ` q-carousel--arrows-${w.value}` : "") + (e.navigation === true ? ` q-carousel--navigation-${k.value}` : "")), p = m(() => {
    const B = [e.prevIcon || n.iconSet.carousel[e.vertical === true ? "up" : "left"], e.nextIcon || n.iconSet.carousel[e.vertical === true ? "down" : "right"]];
    return e.vertical === false && n.lang.rtl === true ? B.reverse() : B;
  }), b = m(() => e.navigationIcon || n.iconSet.carousel.navigationIcon), S = m(() => e.navigationActiveIcon || b.value), P = m(() => ({ color: e.controlColor, textColor: e.controlTextColor, round: true, [e.controlType]: true, dense: true }));
  he(() => e.modelValue, () => {
    e.autoplay && F();
  }), he(() => e.autoplay, (B) => {
    B ? F() : l !== null && (clearTimeout(l), l = null);
  });
  function F() {
    const B = qa(e.autoplay) === true ? Math.abs(e.autoplay) : 5e3;
    l !== null && clearTimeout(l), l = setTimeout(() => {
      l = null, B >= 0 ? v() : c();
    }, B);
  }
  ft(() => {
    e.autoplay && F();
  }), Xe(() => {
    l !== null && clearTimeout(l);
  });
  function z(B, D) {
    return f("div", { class: `q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${B} q-carousel__navigation--${k.value}` + (e.controlColor !== void 0 ? ` text-${e.controlColor}` : "") }, [f("div", { class: "q-carousel__navigation-inner flex flex-center no-wrap" }, u().map(D))]);
  }
  function L() {
    const B = [];
    if (e.navigation === true) {
      const D = t["navigation-icon"] !== void 0 ? t["navigation-icon"] : (R) => f(et, { key: "nav" + R.name, class: `q-carousel__navigation-icon q-carousel__navigation-icon--${R.active === true ? "" : "in"}active`, ...R.btnProps, onClick: R.onClick }), q = a - 1;
      B.push(z("buttons", (R, C) => {
        const H = R.props.name, Q = h.value === C;
        return D({ index: C, maxIndex: q, name: H, active: Q, btnProps: { icon: Q === true ? S.value : b.value, size: "sm", ...P.value }, onClick: () => {
          d(H);
        } });
      }));
    } else if (e.thumbnails === true) {
      const D = e.controlColor !== void 0 ? ` text-${e.controlColor}` : "";
      B.push(z("thumbnails", (q) => {
        const R = q.props;
        return f("img", { key: "tmb#" + R.name, class: `q-carousel__thumbnail q-carousel__thumbnail--${R.name === e.modelValue ? "" : "in"}active` + D, src: R.imgSrc || R["img-src"], onClick: () => {
          d(R.name);
        } });
      }));
    }
    return e.arrows === true && h.value >= 0 && ((e.infinite === true || h.value > 0) && B.push(f("div", { key: "prev", class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${w.value} absolute flex flex-center` }, [f(et, { icon: p.value[0], ...P.value, onClick: c })])), (e.infinite === true || h.value < a - 1) && B.push(f("div", { key: "next", class: `q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${w.value} absolute flex flex-center` }, [f(et, { icon: p.value[1], ...P.value, onClick: v })]))), Mt(t.control, B);
  }
  return () => (a = o(t), f("div", { class: y.value, style: _.value }, [xn("div", { class: "q-carousel__slides-container" }, i(), "sl-cont", e.swipeable, () => s.value)].concat(L())));
} });
me({ name: "QCarouselSlide", props: { ...js, imgSrc: String }, setup(e, { slots: t }) {
  const n = m(() => e.imgSrc ? { backgroundImage: `url("${e.imgSrc}")` } : {});
  return () => f("div", { class: "q-carousel__slide", style: n.value }, Pe(t.default));
} });
me({ name: "QCarouselControl", props: { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, default: () => [18, 18], validator: (e) => e.length === 2 } }, setup(e, { slots: t }) {
  const n = m(() => `q-carousel__control absolute absolute-${e.position}`), r = m(() => ({ margin: `${e.offset[1]}px ${e.offset[0]}px` }));
  return () => f("div", { class: n.value, style: r.value }, Pe(t.default));
} });
me({ name: "QChatMessage", props: { sent: Boolean, label: String, bgColor: String, textColor: String, name: String, avatar: String, text: Array, stamp: String, size: String, labelHtml: Boolean, nameHtml: Boolean, textHtml: Boolean, stampHtml: Boolean }, setup(e, { slots: t }) {
  const n = m(() => e.sent === true ? "sent" : "received"), r = m(() => `q-message-text-content q-message-text-content--${n.value}` + (e.textColor !== void 0 ? ` text-${e.textColor}` : "")), l = m(() => `q-message-text q-message-text--${n.value}` + (e.bgColor !== void 0 ? ` text-${e.bgColor}` : "")), a = m(() => "q-message-container row items-end no-wrap" + (e.sent === true ? " reverse" : "")), o = m(() => e.size !== void 0 ? `col-${e.size}` : ""), i = m(() => ({ msg: e.textHtml === true ? "innerHTML" : "textContent", stamp: e.stampHtml === true ? "innerHTML" : "textContent", name: e.nameHtml === true ? "innerHTML" : "textContent", label: e.labelHtml === true ? "innerHTML" : "textContent" }));
  function s(c) {
    return t.stamp !== void 0 ? [c, f("div", { class: "q-message-stamp" }, t.stamp())] : e.stamp ? [c, f("div", { class: "q-message-stamp", [i.value.stamp]: e.stamp })] : [c];
  }
  function d(c, v) {
    const u = v === true ? c.length > 1 ? (h) => h : (h) => f("div", [h]) : (h) => f("div", { [i.value.msg]: h });
    return c.map((h, g) => f("div", { key: g, class: l.value }, [f("div", { class: r.value }, s(u(h)))]));
  }
  return () => {
    const c = [];
    t.avatar !== void 0 ? c.push(t.avatar()) : e.avatar !== void 0 && c.push(f("img", { class: `q-message-avatar q-message-avatar--${n.value}`, src: e.avatar, "aria-hidden": "true" }));
    const v = [];
    t.name !== void 0 ? v.push(f("div", { class: `q-message-name q-message-name--${n.value}` }, t.name())) : e.name !== void 0 && v.push(f("div", { class: `q-message-name q-message-name--${n.value}`, [i.value.name]: e.name })), t.default !== void 0 ? v.push(d(Ls(t.default()), true)) : e.text !== void 0 && v.push(d(e.text)), c.push(f("div", { class: o.value }, v));
    const u = [];
    return t.label !== void 0 ? u.push(f("div", { class: "q-message-label" }, t.label())) : e.label !== void 0 && u.push(f("div", { class: "q-message-label", [i.value.label]: e.label })), u.push(f("div", { class: a.value }, c)), f("div", { class: `q-message q-message-${n.value}` }, u);
  };
} });
function Zm(e, t) {
  const n = U(null), r = m(() => e.disable === true ? null : f("span", { ref: n, class: "no-outline", tabindex: -1 }));
  function l(a) {
    const o = t.value;
    (a == null ? void 0 : a.qAvoidFocus) !== true && ((a == null ? void 0 : a.type.indexOf("key")) === 0 ? document.activeElement !== o && (o == null ? void 0 : o.contains(document.activeElement)) === true && o.focus() : n.value !== null && (a === void 0 || (o == null ? void 0 : o.contains(a.target)) === true) && n.value.focus());
  }
  return { refocusTargetEl: r, refocusTarget: l };
}
var Jm = { xs: 30, sm: 35, md: 40, lg: 50, xl: 60 }, eh = { ...lt, ...nl, ...Cn, modelValue: { required: true, default: null }, val: {}, trueValue: { default: true }, falseValue: { default: false }, indeterminateValue: { default: null }, checkedIcon: String, uncheckedIcon: String, indeterminateIcon: String, toggleOrder: { type: String, validator: (e) => e === "tf" || e === "ft" }, toggleIndeterminate: Boolean, label: String, leftLabel: Boolean, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, th = ["update:modelValue"];
function nh(e, t) {
  const { props: n, slots: r, emit: l, proxy: a } = xe(), { $q: o } = a, i = rt(n, o), s = U(null), { refocusTargetEl: d, refocusTarget: c } = Zm(n, s), v = ll(n, Jm), u = m(() => n.val !== void 0 && Array.isArray(n.modelValue)), h = m(() => {
    const q = Ze(n.val);
    return u.value === true ? n.modelValue.findIndex((R) => Ze(R) === q) : -1;
  }), g = m(() => u.value === true ? h.value !== -1 : Ze(n.modelValue) === Ze(n.trueValue)), _ = m(() => u.value === true ? h.value === -1 : Ze(n.modelValue) === Ze(n.falseValue)), w = m(() => g.value === false && _.value === false), k = m(() => n.disable === true ? -1 : n.tabindex || 0), y = m(() => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (n.disable === true ? " disabled" : "") + (i.value === true ? ` q-${e}--dark` : "") + (n.dense === true ? ` q-${e}--dense` : "") + (n.leftLabel === true ? " reverse" : "")), p = m(() => {
    const q = g.value === true ? "truthy" : _.value === true ? "falsy" : "indet", R = n.color !== void 0 && (n.keepColor === true || (e === "toggle" ? g.value === true : _.value !== true)) ? ` text-${n.color}` : "";
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${q}${R}`;
  }), b = m(() => {
    const q = { type: "checkbox" };
    return n.name !== void 0 && Object.assign(q, { ".checked": g.value, "^checked": g.value === true ? "checked" : void 0, name: n.name, value: u.value === true ? n.val : n.trueValue }), q;
  }), S = Ml(b), P = m(() => {
    const q = { tabindex: k.value, role: e === "toggle" ? "switch" : "checkbox", "aria-label": n.label, "aria-checked": w.value === true ? "mixed" : g.value === true ? "true" : "false" };
    return n.disable === true && (q["aria-disabled"] = "true"), q;
  });
  function F(q) {
    q !== void 0 && (Ue(q), c(q)), n.disable !== true && l("update:modelValue", z(), q);
  }
  function z() {
    if (u.value === true) {
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
  function L(q) {
    (q.keyCode === 13 || q.keyCode === 32) && Ue(q);
  }
  function B(q) {
    (q.keyCode === 13 || q.keyCode === 32) && F(q);
  }
  const D = t(g, w);
  return Object.assign(a, { toggle: F }), () => {
    const q = D();
    n.disable !== true && S(q, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
    const R = [f("div", { class: p.value, style: v.value, "aria-hidden": "true" }, q)];
    d.value !== null && R.push(d.value);
    const C = n.label !== void 0 ? Mt(r.default, [n.label]) : Pe(r.default);
    return C !== void 0 && R.push(f("div", { class: `q-${e}__label q-anchor--skip` }, C)), f("div", { ref: s, class: y.value, ...P.value, onClick: F, onKeydown: L, onKeyup: B }, R);
  };
}
var By = () => f("div", { key: "svg", class: "q-checkbox__bg absolute" }, [f("svg", { class: "q-checkbox__svg fit absolute-full", viewBox: "0 0 24 24" }, [f("path", { class: "q-checkbox__truthy", fill: "none", d: "M1.73,12.91 8.1,19.28 22.79,4.59" }), f("path", { class: "q-checkbox__indet", d: "M4,14H20V10H4" })])]), va = me({ name: "QCheckbox", props: eh, emits: th, setup(e) {
  const t = By();
  function n(r, l) {
    const a = m(() => (r.value === true ? e.checkedIcon : l.value === true ? e.indeterminateIcon : e.uncheckedIcon) || null);
    return () => a.value !== null ? [f("div", { key: "icon", class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap" }, [f(tt, { class: "q-checkbox__icon", name: a.value })])] : [t];
  }
  return nh("checkbox", n);
} }), Fy = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, lh = me({ name: "QChip", props: { ...lt, ...nl, dense: Boolean, icon: String, iconRight: String, iconRemove: String, iconSelected: String, label: [String, Number], color: String, textColor: String, modelValue: { type: Boolean, default: true }, selected: { type: Boolean, default: null }, square: Boolean, outline: Boolean, clickable: Boolean, removable: Boolean, removeAriaLabel: String, tabindex: [String, Number], disable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "update:selected", "remove", "click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = rt(e, r), a = ll(e, Fy), o = m(() => e.selected === true || e.icon !== void 0), i = m(() => e.selected === true ? e.iconSelected || r.iconSet.chip.selected : e.icon), s = m(() => e.iconRemove || r.iconSet.chip.remove), d = m(() => e.disable === false && (e.clickable === true || e.selected !== null)), c = m(() => {
    const w = e.outline === true && e.color || e.textColor;
    return "q-chip row inline no-wrap items-center" + (e.outline === false && e.color !== void 0 ? ` bg-${e.color}` : "") + (w ? ` text-${w} q-chip--colored` : "") + (e.disable === true ? " disabled" : "") + (e.dense === true ? " q-chip--dense" : "") + (e.outline === true ? " q-chip--outline" : "") + (e.selected === true ? " q-chip--selected" : "") + (d.value === true ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (e.square === true ? " q-chip--square" : "") + (l.value === true ? " q-chip--dark q-dark" : "");
  }), v = m(() => {
    const w = e.disable === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: e.tabindex || 0 }, k = { ...w, role: "button", "aria-hidden": "false", "aria-label": e.removeAriaLabel || r.lang.label.remove };
    return { chip: w, remove: k };
  });
  function u(w) {
    w.keyCode === 13 && h(w);
  }
  function h(w) {
    e.disable || (n("update:selected", !e.selected), n("click", w));
  }
  function g(w) {
    (w.keyCode === void 0 || w.keyCode === 13) && (Ue(w), e.disable === false && (n("update:modelValue", false), n("remove")));
  }
  function _() {
    const w = [];
    d.value === true && w.push(f("div", { class: "q-focus-helper" })), o.value === true && w.push(f(tt, { class: "q-chip__icon q-chip__icon--left", name: i.value }));
    const k = e.label !== void 0 ? [f("div", { class: "ellipsis" }, [e.label])] : void 0;
    return w.push(f("div", { class: "q-chip__content col row no-wrap items-center q-anchor--skip" }, As(t.default, k))), e.iconRight && w.push(f(tt, { class: "q-chip__icon q-chip__icon--right", name: e.iconRight })), e.removable === true && w.push(f(tt, { class: "q-chip__icon q-chip__icon--remove cursor-pointer", name: s.value, ...v.value.remove, onClick: g, onKeyup: g })), w;
  }
  return () => {
    if (e.modelValue === false) return;
    const w = { class: c.value, style: a.value };
    return d.value === true && Object.assign(w, v.value.chip, { onClick: h, onKeyup: u }), xn("div", w, _(), "ripple", e.ripple !== false && e.disable !== true, () => [[gi, e.ripple]]);
  };
} }), Gs = { ...nl, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, color: String, centerColor: String, trackColor: String, fontSize: String, rounded: Boolean, thickness: { type: Number, default: 0.2, validator: (e) => e >= 0 && e <= 1 }, angle: { type: Number, default: 0 }, showValue: Boolean, reverse: Boolean, instantFeedback: Boolean }, Zu = 50, rh = 2 * Zu, ah = rh * Math.PI, Oy = Math.round(ah * 1e3) / 1e3, oh = me({ name: "QCircularProgress", props: { ...Gs, value: { type: Number, default: 0 }, animationSpeed: { type: [String, Number], default: 600 }, indeterminate: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = ll(e), l = m(() => {
    const h = (n.lang.rtl === true ? -1 : 1) * e.angle;
    return { transform: e.reverse !== (n.lang.rtl === true) ? `scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90 - h}deg)` : `rotate3d(0, 0, 1, ${h - 90}deg)` };
  }), a = m(() => e.instantFeedback !== true && e.indeterminate !== true ? { transition: `stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease` } : ""), o = m(() => rh / (1 - e.thickness / 2)), i = m(() => `${o.value / 2} ${o.value / 2} ${o.value} ${o.value}`), s = m(() => vt(e.value, e.min, e.max)), d = m(() => e.max - e.min), c = m(() => e.thickness / 2 * o.value), v = m(() => {
    const h = (e.max - s.value) / d.value, g = e.rounded === true && s.value < e.max && h < 0.25 ? c.value / 2 * (1 - h / 0.25) : 0;
    return ah * h + g;
  });
  function u({ thickness: h, offset: g, color: _, cls: w, rounded: k }) {
    return f("circle", { class: "q-circular-progress__" + w + (_ !== void 0 ? ` text-${_}` : ""), style: a.value, fill: "transparent", stroke: "currentColor", "stroke-width": h, "stroke-dasharray": Oy, "stroke-dashoffset": g, "stroke-linecap": k, cx: o.value, cy: o.value, r: Zu });
  }
  return () => {
    const h = [];
    e.centerColor !== void 0 && e.centerColor !== "transparent" && h.push(f("circle", { class: `q-circular-progress__center text-${e.centerColor}`, fill: "currentColor", r: Zu - c.value / 2, cx: o.value, cy: o.value })), e.trackColor !== void 0 && e.trackColor !== "transparent" && h.push(u({ cls: "track", thickness: c.value, offset: 0, color: e.trackColor })), h.push(u({ cls: "circle", thickness: c.value, offset: v.value, color: e.color, rounded: e.rounded === true ? "round" : void 0 }));
    const g = [f("svg", { class: "q-circular-progress__svg", style: l.value, viewBox: i.value, "aria-hidden": "true" }, h)];
    return e.showValue === true && g.push(f("div", { class: "q-circular-progress__text absolute-full row flex-center content-center", style: { fontSize: e.fontSize } }, t.default !== void 0 ? t.default() : [f("div", s.value)])), f("div", { class: `q-circular-progress q-circular-progress--${e.indeterminate === true ? "in" : ""}determinate`, style: r.value, role: "progressbar", "aria-valuemin": e.min, "aria-valuemax": e.max, "aria-valuenow": e.indeterminate === true ? void 0 : s.value }, As(t.internal, g));
  };
} });
function Yi(e, t, n) {
  const r = nn(e);
  let l, a = r.left - t.event.x, o = r.top - t.event.y, i = Math.abs(a), s = Math.abs(o);
  const d = t.direction;
  d.horizontal === true && d.vertical !== true ? l = a < 0 ? "left" : "right" : d.horizontal !== true && d.vertical === true ? l = o < 0 ? "up" : "down" : d.up === true && o < 0 ? (l = "up", i > s && (d.left === true && a < 0 ? l = "left" : d.right === true && a > 0 && (l = "right"))) : d.down === true && o > 0 ? (l = "down", i > s && (d.left === true && a < 0 ? l = "left" : d.right === true && a > 0 && (l = "right"))) : d.left === true && a < 0 ? (l = "left", i < s && (d.up === true && o < 0 ? l = "up" : d.down === true && o > 0 && (l = "down"))) : d.right === true && a > 0 && (l = "right", i < s && (d.up === true && o < 0 ? l = "up" : d.down === true && o > 0 && (l = "down")));
  let c = false;
  if (l === void 0 && n === false) {
    if (t.event.isFirst === true || t.event.lastDir === void 0) return {};
    l = t.event.lastDir, c = true, l === "left" || l === "right" ? (r.left -= a, i = 0, a = 0) : (r.top -= o, s = 0, o = 0);
  }
  return { synthetic: c, payload: { evt: e, touch: t.event.mouse !== true, mouse: t.event.mouse === true, position: r, direction: l, isFirst: t.event.isFirst, isFinal: n === true, duration: Date.now() - t.event.time, distance: { x: i, y: s }, offset: { x: a, y: o }, delta: { x: r.left - t.event.lastX, y: r.top - t.event.lastY } } };
}
var Vy = 0, yn = Ln({ name: "touch-pan", beforeMount(e, { value: t, modifiers: n }) {
  if (n.mouse !== true && ze.has.touch !== true) return;
  function r(a, o) {
    n.mouse === true && o === true ? Ue(a) : (n.stop === true && St(a), n.prevent === true && It(a));
  }
  const l = { uid: "qvtp_" + Vy++, handler: t, modifiers: n, direction: Uo(n), noop: Ct, mouseStart(a) {
    Qo(a, l) && fi(a) && (Et(l, "temp", [[document, "mousemove", "move", "notPassiveCapture"], [document, "mouseup", "end", "passiveCapture"]]), l.start(a, true));
  }, touchStart(a) {
    if (Qo(a, l)) {
      const o = a.target;
      Et(l, "temp", [[o, "touchmove", "move", "notPassiveCapture"], [o, "touchcancel", "end", "passiveCapture"], [o, "touchend", "end", "passiveCapture"]]), l.start(a);
    }
  }, start(a, o) {
    if (ze.is.firefox === true && _r(e, true), l.lastEvt = a, o === true || n.stop === true) {
      if (l.direction.all !== true && (o !== true || l.modifiers.mouseAllDir !== true && l.modifiers.mousealldir !== true)) {
        const d = a.type.indexOf("mouse") !== -1 ? new MouseEvent(a.type, a) : new TouchEvent(a.type, a);
        a.defaultPrevented === true && It(d), a.cancelBubble === true && St(d), Object.assign(d, { qKeyEvent: a.qKeyEvent, qClickOutside: a.qClickOutside, qAnchorHandled: a.qAnchorHandled, qClonedBy: a.qClonedBy === void 0 ? [l.uid] : a.qClonedBy.concat(l.uid) }), l.initialEvent = { target: a.target, event: d };
      }
      St(a);
    }
    const { left: i, top: s } = nn(a);
    l.event = { x: i, y: s, time: Date.now(), mouse: o === true, detected: false, isFirst: true, isFinal: false, lastX: i, lastY: s };
  }, move(a) {
    if (l.event === void 0) return;
    const o = nn(a), i = o.left - l.event.x, s = o.top - l.event.y;
    if (i === 0 && s === 0) return;
    l.lastEvt = a;
    const d = l.event.mouse === true, c = () => {
      r(a, d);
      let h;
      n.preserveCursor !== true && n.preservecursor !== true && (h = document.documentElement.style.cursor || "", document.documentElement.style.cursor = "grabbing"), d === true && document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), An(), l.styleCleanup = (g) => {
        if (l.styleCleanup = void 0, h !== void 0 && (document.documentElement.style.cursor = h), document.body.classList.remove("non-selectable"), d === true) {
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
      const { payload: h, synthetic: g } = Yi(a, l, false);
      h !== void 0 && (l.handler(h) === false ? l.end(a) : (l.styleCleanup === void 0 && l.event.isFirst === true && c(), l.event.lastX = h.position.left, l.event.lastY = h.position.top, l.event.lastDir = g === true ? void 0 : h.direction, l.event.isFirst = false));
      return;
    }
    if (l.direction.all === true || d === true && (l.modifiers.mouseAllDir === true || l.modifiers.mousealldir === true)) {
      c(), l.event.detected = true, l.move(a);
      return;
    }
    const v = Math.abs(i), u = Math.abs(s);
    v !== u && (l.direction.horizontal === true && v > u || l.direction.vertical === true && v < u || l.direction.up === true && v < u && s < 0 || l.direction.down === true && v < u && s > 0 || l.direction.left === true && v > u && i < 0 || l.direction.right === true && v > u && i > 0 ? (l.event.detected = true, l.move(a)) : l.end(a, true));
  }, end(a, o) {
    var _a3;
    if (l.event !== void 0) {
      if (Gt(l, "temp"), ze.is.firefox === true && _r(e, false), o === true) (_a3 = l.styleCleanup) == null ? void 0 : _a3.call(l), l.event.detected !== true && l.initialEvent !== void 0 && l.initialEvent.target.dispatchEvent(l.initialEvent.event);
      else if (l.event.detected === true) {
        l.event.isFirst === true && l.handler(Yi(a === void 0 ? l.lastEvt : a, l).payload);
        const { payload: i } = Yi(a === void 0 ? l.lastEvt : a, l, true), s = () => {
          l.handler(i);
        };
        l.styleCleanup !== void 0 ? l.styleCleanup(s) : s();
      }
      l.event = void 0, l.initialEvent = void 0, l.lastEvt = void 0;
    }
  } };
  if (e.__qtouchpan = l, n.mouse === true) {
    const a = n.mouseCapture === true || n.mousecapture === true ? "Capture" : "";
    Et(l, "main", [[e, "mousedown", "mouseStart", `passive${a}`]]);
  }
  ze.has.touch === true && Et(l, "main", [[e, "touchstart", "touchStart", `passive${n.capture === true ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const n = e.__qtouchpan;
  n !== void 0 && (t.oldValue !== t.value && (typeof value != "function" && n.end(), n.handler = t.value), n.direction = Uo(t.modifiers));
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qtouchpan;
  t !== void 0 && (t.event !== void 0 && t.end(), Gt(t, "main"), Gt(t, "temp"), ze.is.firefox === true && _r(e, false), (_a3 = t.styleCleanup) == null ? void 0 : _a3.call(t), delete e.__qtouchpan);
} }), bd = "q-slider__marker-labels", Dy = (e) => ({ value: e }), Iy = ({ marker: e }) => f("div", { key: e.value, style: e.style, class: e.classes }, e.label), Zs = [34, 37, 40, 33, 39, 38], ih = { ...lt, ...Cn, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, snap: Boolean, vertical: Boolean, reverse: Boolean, color: String, markerLabelsClass: String, label: Boolean, labelColor: String, labelTextColor: String, labelAlways: Boolean, switchLabelSide: Boolean, markers: [Boolean, Number], markerLabels: [Boolean, Array, Object, Function], switchMarkerLabelsSide: Boolean, trackImg: String, trackColor: String, innerTrackImg: String, innerTrackColor: String, selectionColor: String, selectionImg: String, thumbSize: { type: String, default: "20px" }, trackSize: { type: String, default: "4px" }, disable: Boolean, readonly: Boolean, dense: Boolean, tabindex: [String, Number], thumbColor: String, thumbPath: { type: String, default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0" } }, uh = ["pan", "update:modelValue", "change"];
function sh({ updateValue: e, updatePosition: t, getDragging: n, formAttrs: r }) {
  const { props: l, emit: a, slots: o, proxy: { $q: i } } = xe(), s = rt(l, i), d = Ml(r), c = U(false), v = U(false), u = U(false), h = U(false), g = m(() => l.vertical === true ? "--v" : "--h"), _ = m(() => "-" + (l.switchLabelSide === true ? "switched" : "standard")), w = m(() => l.vertical === true ? l.reverse === true : l.reverse !== (i.lang.rtl === true)), k = m(() => isNaN(l.innerMin) === true || l.innerMin < l.min ? l.min : l.innerMin), y = m(() => isNaN(l.innerMax) === true || l.innerMax > l.max ? l.max : l.innerMax), p = m(() => l.disable !== true && l.readonly !== true && k.value < y.value), b = m(() => {
    if (l.step === 0) return (ye) => ye;
    const ae = (String(l.step).trim().split(".")[1] || "").length;
    return (ye) => parseFloat(ye.toFixed(ae));
  }), S = m(() => l.step === 0 ? 1 : l.step), P = m(() => p.value === true ? l.tabindex || 0 : -1), F = m(() => l.max - l.min), z = m(() => y.value - k.value), L = m(() => _e2(k.value)), B = m(() => _e2(y.value)), D = m(() => l.vertical === true ? w.value === true ? "bottom" : "top" : w.value === true ? "right" : "left"), q = m(() => l.vertical === true ? "height" : "width"), R = m(() => l.vertical === true ? "width" : "height"), C = m(() => l.vertical === true ? "vertical" : "horizontal"), H = m(() => {
    const ae = { role: "slider", "aria-valuemin": k.value, "aria-valuemax": y.value, "aria-orientation": C.value, "data-step": l.step };
    return l.disable === true ? ae["aria-disabled"] = "true" : l.readonly === true && (ae["aria-readonly"] = "true"), ae;
  }), Q = m(() => `q-slider q-slider${g.value} q-slider--${c.value === true ? "" : "in"}active inline no-wrap ` + (l.vertical === true ? "row" : "column") + (l.disable === true ? " disabled" : " q-slider--enabled" + (p.value === true ? " q-slider--editable" : "")) + (u.value === "both" ? " q-slider--focus" : "") + (l.label || l.labelAlways === true ? " q-slider--label" : "") + (l.labelAlways === true ? " q-slider--label-always" : "") + (s.value === true ? " q-slider--dark" : "") + (l.dense === true ? " q-slider--dense q-slider--dense" + g.value : ""));
  function K(ae) {
    const ye = "q-slider__" + ae;
    return `${ye} ${ye}${g.value} ${ye}${g.value}${_.value}`;
  }
  function G(ae) {
    const ye = "q-slider__" + ae;
    return `${ye} ${ye}${g.value}`;
  }
  const re = m(() => {
    const ae = l.selectionColor || l.color;
    return "q-slider__selection absolute" + (ae !== void 0 ? ` text-${ae}` : "");
  }), pe = m(() => G("markers") + " absolute overflow-hidden"), Y = m(() => G("track-container")), M = m(() => K("pin")), J = m(() => K("label")), ee = m(() => K("text-container")), ge = m(() => K("marker-labels-container") + (l.markerLabelsClass !== void 0 ? ` ${l.markerLabelsClass}` : "")), O = m(() => "q-slider__track relative-position no-outline" + (l.trackColor !== void 0 ? ` bg-${l.trackColor}` : "")), A = m(() => {
    const ae = { [R.value]: l.trackSize };
    return l.trackImg !== void 0 && (ae.backgroundImage = `url(${l.trackImg}) !important`), ae;
  }), $ = m(() => "q-slider__inner absolute" + (l.innerTrackColor !== void 0 ? ` bg-${l.innerTrackColor}` : "")), T = m(() => {
    const ae = B.value - L.value, ye = { [D.value]: `${100 * L.value}%`, [q.value]: ae === 0 ? "2px" : `${100 * ae}%` };
    return l.innerTrackImg !== void 0 && (ye.backgroundImage = `url(${l.innerTrackImg}) !important`), ye;
  });
  function N(ae) {
    const { min: ye, max: Te, step: Oe } = l;
    let Re = ye + ae * (Te - ye);
    if (Oe > 0) {
      const Ge = (Re - k.value) % Oe;
      Re += (Math.abs(Ge) >= Oe / 2 ? (Ge < 0 ? -1 : 1) * Oe : 0) - Ge;
    }
    return Re = b.value(Re), vt(Re, k.value, y.value);
  }
  function _e2(ae) {
    return F.value === 0 ? 0 : (ae - l.min) / F.value;
  }
  function x(ae, ye) {
    const Te = nn(ae), Oe = l.vertical === true ? vt((Te.top - ye.top) / ye.height, 0, 1) : vt((Te.left - ye.left) / ye.width, 0, 1);
    return vt(w.value === true ? 1 - Oe : Oe, L.value, B.value);
  }
  const E = m(() => qa(l.markers) === true ? l.markers : S.value), I = m(() => {
    const ae = [], ye = E.value, Te = l.max;
    let Oe = l.min;
    do
      ae.push(Oe), Oe += ye;
    while (Oe < Te);
    return ae.push(Te), ae;
  }), te = m(() => {
    const ae = ` ${bd}${g.value}-`;
    return bd + `${ae}${l.switchMarkerLabelsSide === true ? "switched" : "standard"}${ae}${w.value === true ? "rtl" : "ltr"}`;
  }), ne = m(() => l.markerLabels === false ? null : de(l.markerLabels).map((ae, ye) => ({ index: ye, value: ae.value, label: ae.label || ae.value, classes: te.value + (ae.classes !== void 0 ? " " + ae.classes : ""), style: { ...fe(ae.value), ...ae.style || {} } }))), W = m(() => ({ markerList: ne.value, markerMap: se.value, classes: te.value, getStyle: fe })), ue = m(() => {
    const ae = z.value === 0 ? "2px" : 100 * E.value / z.value;
    return { ...T.value, backgroundSize: l.vertical === true ? `2px ${ae}%` : `${ae}% 2px` };
  });
  function de(ae) {
    if (ae === false) return null;
    if (ae === true) return I.value.map(Dy);
    if (typeof ae == "function") return I.value.map((Te) => {
      const Oe = ae(Te);
      return Bt(Oe) === true ? { ...Oe, value: Te } : { value: Te, label: Oe };
    });
    const ye = ({ value: Te }) => Te >= l.min && Te <= l.max;
    return Array.isArray(ae) === true ? ae.map((Te) => Bt(Te) === true ? Te : { value: Te }).filter(ye) : Object.keys(ae).map((Te) => {
      const Oe = ae[Te], Re = Number(Te);
      return Bt(Oe) === true ? { ...Oe, value: Re } : { value: Re, label: Oe };
    }).filter(ye);
  }
  function fe(ae) {
    return { [D.value]: `${100 * (ae - l.min) / F.value}%` };
  }
  const se = m(() => {
    if (l.markerLabels === false) return null;
    const ae = {};
    return ne.value.forEach((ye) => {
      ae[ye.value] = ye;
    }), ae;
  });
  function le() {
    if (o["marker-label-group"] !== void 0) return o["marker-label-group"](W.value);
    const ae = o["marker-label"] || Iy;
    return ne.value.map((ye) => ae({ marker: ye, ...W.value }));
  }
  const j = m(() => [[yn, oe, void 0, { [C.value]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
  function oe(ae) {
    ae.isFinal === true ? (h.value !== void 0 && (t(ae.evt), ae.touch === true && e(true), h.value = void 0, a("pan", "end")), c.value = false, u.value = false) : ae.isFirst === true ? (h.value = n(ae.evt), t(ae.evt), e(), c.value = true, a("pan", "start")) : (t(ae.evt), e());
  }
  function we() {
    u.value = false;
  }
  function ke(ae) {
    t(ae, n(ae)), e(), v.value = true, c.value = true, document.addEventListener("mouseup", Se, true);
  }
  function Se() {
    v.value = false, c.value = false, e(true), we(), document.removeEventListener("mouseup", Se, true);
  }
  function qe(ae) {
    t(ae, n(ae)), e(true);
  }
  function je(ae) {
    Zs.includes(ae.keyCode) && e(true);
  }
  function De(ae) {
    if (l.vertical === true) return null;
    const ye = i.lang.rtl !== l.reverse ? 1 - ae : ae;
    return { transform: `translateX(calc(${2 * ye - 1} * ${l.thumbSize} / 2 + ${50 - 100 * ye}%))` };
  }
  function ie(ae) {
    const ye = m(() => v.value === false && (u.value === ae.focusValue || u.value === "both") ? " q-slider--focus" : ""), Te = m(() => `q-slider__thumb q-slider__thumb${g.value} q-slider__thumb${g.value}-${w.value === true ? "rtl" : "ltr"} absolute non-selectable` + ye.value + (ae.thumbColor.value !== void 0 ? ` text-${ae.thumbColor.value}` : "")), Oe = m(() => ({ width: l.thumbSize, height: l.thumbSize, [D.value]: `${100 * ae.ratio.value}%`, zIndex: u.value === ae.focusValue ? 2 : void 0 })), Re = m(() => ae.labelColor.value !== void 0 ? ` text-${ae.labelColor.value}` : ""), Ge = m(() => De(ae.ratio.value)), st = m(() => "q-slider__text" + (ae.labelTextColor.value !== void 0 ? ` text-${ae.labelTextColor.value}` : ""));
    return () => {
      const Tt = [f("svg", { class: "q-slider__thumb-shape absolute-full", viewBox: "0 0 20 20", "aria-hidden": "true" }, [f("path", { d: l.thumbPath })]), f("div", { class: "q-slider__focus-ring fit" })];
      return (l.label === true || l.labelAlways === true) && (Tt.push(f("div", { class: M.value + " absolute fit no-pointer-events" + Re.value }, [f("div", { class: J.value, style: { minWidth: l.thumbSize } }, [f("div", { class: ee.value, style: Ge.value }, [f("span", { class: st.value }, ae.label.value)])])])), l.name !== void 0 && l.disable !== true && d(Tt, "push")), f("div", { class: Te.value, style: Oe.value, ...ae.getNodeData() }, Tt);
    };
  }
  function be(ae, ye, Te, Oe) {
    const Re = [];
    l.innerTrackColor !== "transparent" && Re.push(f("div", { key: "inner", class: $.value, style: T.value })), l.selectionColor !== "transparent" && Re.push(f("div", { key: "selection", class: re.value, style: ae.value })), l.markers !== false && Re.push(f("div", { key: "marker", class: pe.value, style: ue.value })), Oe(Re);
    const Ge = [xn("div", { key: "trackC", class: Y.value, tabindex: ye.value, ...Te.value }, [f("div", { class: O.value, style: A.value }, Re)], "slide", p.value, () => j.value)];
    if (l.markerLabels !== false) {
      const st = l.switchMarkerLabelsSide === true ? "unshift" : "push";
      Ge[st](f("div", { key: "markerL", class: ge.value }, le()));
    }
    return Ge;
  }
  return Xe(() => {
    document.removeEventListener("mouseup", Se, true);
  }), { state: { active: c, focus: u, preventFocus: v, dragging: h, editable: p, classes: Q, tabindex: P, attributes: H, roundValueFn: b, keyStep: S, trackLen: F, innerMin: k, innerMinRatio: L, innerMax: y, innerMaxRatio: B, positionProp: D, sizeProp: q, isReversed: w }, methods: { onActivate: ke, onMobileClick: qe, onBlur: we, onKeyup: je, getContent: be, getThumbRenderFn: ie, convertRatioToModel: N, convertModelToRatio: _e2, getDraggingRatio: x } };
}
var zy = () => ({}), Xn = me({ name: "QSlider", props: { ...ih, modelValue: { required: true, default: null, validator: (e) => typeof e == "number" || e === null }, labelValue: [String, Number] }, emits: uh, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = xe(), { state: r, methods: l } = sh({ updateValue: g, updatePosition: w, getDragging: _, formAttrs: Ia(e) }), a = U(null), o = U(0), i = U(0);
  function s() {
    i.value = e.modelValue === null ? r.innerMin.value : vt(e.modelValue, r.innerMin.value, r.innerMax.value);
  }
  he(() => `${e.modelValue}|${r.innerMin.value}|${r.innerMax.value}`, s), s();
  const d = m(() => l.convertModelToRatio(i.value)), c = m(() => r.active.value === true ? o.value : d.value), v = m(() => {
    const p = { [r.positionProp.value]: `${100 * r.innerMinRatio.value}%`, [r.sizeProp.value]: `${100 * (c.value - r.innerMinRatio.value)}%` };
    return e.selectionImg !== void 0 && (p.backgroundImage = `url(${e.selectionImg}) !important`), p;
  }), u = l.getThumbRenderFn({ focusValue: true, getNodeData: zy, ratio: c, label: m(() => e.labelValue !== void 0 ? e.labelValue : i.value), thumbColor: m(() => e.thumbColor || e.color), labelColor: m(() => e.labelColor), labelTextColor: m(() => e.labelTextColor) }), h = m(() => r.editable.value !== true ? {} : n.platform.is.mobile === true ? { onClick: l.onMobileClick } : { onMousedown: l.onActivate, onFocus: k, onBlur: l.onBlur, onKeydown: y, onKeyup: l.onKeyup });
  function g(p) {
    i.value !== e.modelValue && t("update:modelValue", i.value), p === true && t("change", i.value);
  }
  function _() {
    return a.value.getBoundingClientRect();
  }
  function w(p, b = r.dragging.value) {
    const S = l.getDraggingRatio(p, b);
    i.value = l.convertRatioToModel(S), o.value = e.snap !== true || e.step === 0 ? S : l.convertModelToRatio(i.value);
  }
  function k() {
    r.focus.value = true;
  }
  function y(p) {
    if (Zs.includes(p.keyCode) === false) return;
    Ue(p);
    const b = ([34, 33].includes(p.keyCode) ? 10 : 1) * r.keyStep.value, S = ([34, 37, 40].includes(p.keyCode) ? -1 : 1) * (r.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * b;
    i.value = vt(r.roundValueFn.value(i.value + S), r.innerMin.value, r.innerMax.value), g();
  }
  return () => {
    const p = l.getContent(v, r.tabindex, h, (b) => {
      b.push(u());
    });
    return f("div", { ref: a, class: r.classes.value + (e.modelValue === null ? " q-slider--no-value" : ""), ...r.attributes.value, "aria-valuenow": e.modelValue }, p);
  };
} });
function ch() {
  const e = U(!an.value);
  return e.value === false && ft(() => {
    e.value = true;
  }), { isHydrated: e };
}
var dh = typeof ResizeObserver < "u", pd = dh === true ? {} : { style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;", url: "about:blank" }, Xl = me({ name: "QResizeObserver", props: { debounce: { type: [String, Number], default: 100 } }, emits: ["resize"], setup(e, { emit: t }) {
  let n = null, r, l = { width: -1, height: -1 };
  function a(s) {
    s === true || e.debounce === 0 || e.debounce === "0" ? o() : n === null && (n = setTimeout(o, e.debounce));
  }
  function o() {
    if (n !== null && (clearTimeout(n), n = null), r) {
      const { offsetWidth: s, offsetHeight: d } = r;
      (s !== l.width || d !== l.height) && (l = { width: s, height: d }, t("resize", l));
    }
  }
  const { proxy: i } = xe();
  if (i.trigger = a, dh === true) {
    let s;
    const d = (c) => {
      r = i.$el.parentNode, r ? (s = new ResizeObserver(a), s.observe(r), o()) : c !== true && We(() => {
        d(true);
      });
    };
    return ft(() => {
      d();
    }), Xe(() => {
      n !== null && clearTimeout(n), s !== void 0 && (s.disconnect !== void 0 ? s.disconnect() : r && s.unobserve(r));
    }), Ct;
  } else {
    let s = function() {
      n !== null && (clearTimeout(n), n = null), v !== void 0 && (v.removeEventListener !== void 0 && v.removeEventListener("resize", a, mt.passive), v = void 0);
    }, d = function() {
      s(), (r == null ? void 0 : r.contentDocument) && (v = r.contentDocument.defaultView, v.addEventListener("resize", a, mt.passive), o());
    };
    const { isHydrated: c } = ch();
    let v;
    return ft(() => {
      We(() => {
        r = i.$el, r && d();
      });
    }), Xe(s), () => {
      if (c.value === true) return f("object", { class: "q--avoid-card-border", style: pd.style, tabindex: -1, type: "text/html", data: pd.url, "aria-hidden": "true", onLoad: d });
    };
  }
} }), Ra = false;
if (!__QUASAR_SSR__) {
  const e = document.createElement("div");
  e.setAttribute("dir", "rtl"), Object.assign(e.style, { width: "1px", height: "1px", overflow: "auto" });
  const t = document.createElement("div");
  Object.assign(t.style, { width: "1000px", height: "1px" }), document.body.appendChild(e), e.appendChild(t), e.scrollLeft = -1e3, Ra = e.scrollLeft >= 0, e.remove();
}
function Ny(e, t, n) {
  const r = n === true ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${t === true ? r[0] : r[1]}${e ? ` text-${e}` : ""}`;
}
var Hy = ["left", "center", "right", "justify"], yd = me({ name: "QTabs", props: { modelValue: [Number, String], align: { type: String, default: "center", validator: (e) => Hy.includes(e) }, breakpoint: { type: [String, Number], default: 600 }, vertical: Boolean, shrink: Boolean, stretch: Boolean, activeClass: String, activeColor: String, activeBgColor: String, indicatorColor: String, leftIcon: String, rightIcon: String, outsideArrows: Boolean, mobileArrows: Boolean, switchIndicator: Boolean, narrowIndicator: Boolean, inlineLabel: Boolean, noCaps: Boolean, dense: Boolean, contentClass: String, "onUpdate:modelValue": [Function, Array] }, setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, { registerTick: a } = Sr(), { registerTick: o } = Sr(), { registerTick: i } = Sr(), { registerTimeout: s, removeTimeout: d } = el(), { registerTimeout: c, removeTimeout: v } = el(), u = U(null), h = U(null), g = U(e.modelValue), _ = U(false), w = U(true), k = U(false), y = U(false), p = [], b = U(0), S = U(false);
  let P = null, F = null, z;
  const L = m(() => ({ activeClass: e.activeClass, activeColor: e.activeColor, activeBgColor: e.activeBgColor, indicatorClass: Ny(e.indicatorColor, e.switchIndicator, e.vertical), narrowIndicator: e.narrowIndicator, inlineLabel: e.inlineLabel, noCaps: e.noCaps })), B = m(() => {
    const le = b.value, j = g.value;
    for (let oe = 0; oe < le; oe++) if (p[oe].name.value === j) return true;
    return false;
  }), D = m(() => `q-tabs__content--align-${_.value === true ? "left" : y.value === true ? "justify" : e.align}`), q = m(() => `q-tabs row no-wrap items-center q-tabs--${_.value === true ? "" : "not-"}scrollable q-tabs--${e.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${e.outsideArrows === true ? "outside" : "inside"} q-tabs--mobile-with${e.mobileArrows === true ? "" : "out"}-arrows` + (e.dense === true ? " q-tabs--dense" : "") + (e.shrink === true ? " col-shrink" : "") + (e.stretch === true ? " self-stretch" : "")), R = m(() => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + D.value + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), C = m(() => e.vertical === true ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" }), H = m(() => e.vertical !== true && l.lang.rtl === true), Q = m(() => Ra === false && H.value === true);
  he(H, M), he(() => e.modelValue, (le) => {
    K({ name: le, setCurrent: true, skipEmit: true });
  }), he(() => e.outsideArrows, G);
  function K({ name: le, setCurrent: j, skipEmit: oe }) {
    g.value !== le && (oe !== true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", le), (j === true || e["onUpdate:modelValue"] === void 0) && (pe(g.value, le), g.value = le));
  }
  function G() {
    a(() => {
      u.value && re({ width: u.value.offsetWidth, height: u.value.offsetHeight });
    });
  }
  function re(le) {
    if (C.value === void 0 || h.value === null) return;
    const j = le[C.value.container], oe = Math.min(h.value[C.value.scroll], Array.prototype.reduce.call(h.value.children, (ke, Se) => ke + (Se[C.value.content] || 0), 0)), we = j > 0 && oe > j;
    _.value = we, we === true && o(M), y.value = j < parseInt(e.breakpoint, 10);
  }
  function pe(le, j) {
    const oe = le != null && le !== "" ? p.find((ke) => ke.name.value === le) : null, we = j != null && j !== "" ? p.find((ke) => ke.name.value === j) : null;
    if (se === true) se = false;
    else if (oe && we) {
      const ke = oe.tabIndicatorRef.value, Se = we.tabIndicatorRef.value;
      P !== null && (clearTimeout(P), P = null), ke.style.transition = "none", ke.style.transform = "none", Se.style.transition = "none", Se.style.transform = "none";
      const qe = ke.getBoundingClientRect(), je = Se.getBoundingClientRect();
      Se.style.transform = e.vertical === true ? `translate3d(0,${qe.top - je.top}px,0) scale3d(1,${je.height ? qe.height / je.height : 1},1)` : `translate3d(${qe.left - je.left}px,0,0) scale3d(${je.width ? qe.width / je.width : 1},1,1)`, i(() => {
        P = setTimeout(() => {
          P = null, Se.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)", Se.style.transform = "none";
        }, 70);
      });
    }
    we && _.value === true && Y(we.rootRef.value);
  }
  function Y(le) {
    const { left: j, width: oe, top: we, height: ke } = h.value.getBoundingClientRect(), Se = le.getBoundingClientRect();
    let qe = e.vertical === true ? Se.top - we : Se.left - j;
    if (qe < 0) {
      h.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.floor(qe), M();
      return;
    }
    qe += e.vertical === true ? Se.height - ke : Se.width - oe, qe > 0 && (h.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.ceil(qe), M());
  }
  function M() {
    const le = h.value;
    if (le === null) return;
    const j = le.getBoundingClientRect(), oe = e.vertical === true ? le.scrollTop : Math.abs(le.scrollLeft);
    H.value === true ? (w.value = Math.ceil(oe + j.width) < le.scrollWidth - 1, k.value = oe > 0) : (w.value = oe > 0, k.value = e.vertical === true ? Math.ceil(oe + j.height) < le.scrollHeight : Math.ceil(oe + j.width) < le.scrollWidth);
  }
  function J(le) {
    F !== null && clearInterval(F), F = setInterval(() => {
      T(le) === true && O();
    }, 5);
  }
  function ee() {
    J(Q.value === true ? Number.MAX_SAFE_INTEGER : 0);
  }
  function ge() {
    J(Q.value === true ? 0 : Number.MAX_SAFE_INTEGER);
  }
  function O() {
    F !== null && (clearInterval(F), F = null);
  }
  function A(le, j) {
    const oe = Array.prototype.filter.call(h.value.children, (je) => je === j || je.matches && je.matches(".q-tab.q-focusable") === true), we = oe.length;
    if (we === 0) return;
    if (le === 36) return Y(oe[0]), oe[0].focus(), true;
    if (le === 35) return Y(oe[we - 1]), oe[we - 1].focus(), true;
    const ke = le === (e.vertical === true ? 38 : 37), Se = le === (e.vertical === true ? 40 : 39), qe = ke === true ? -1 : Se === true ? 1 : void 0;
    if (qe !== void 0) {
      const je = H.value === true ? -1 : 1, De = oe.indexOf(j) + qe * je;
      return De >= 0 && De < we && (Y(oe[De]), oe[De].focus({ preventScroll: true })), true;
    }
  }
  const $ = m(() => Q.value === true ? { get: (le) => Math.abs(le.scrollLeft), set: (le, j) => {
    le.scrollLeft = -j;
  } } : e.vertical === true ? { get: (le) => le.scrollTop, set: (le, j) => {
    le.scrollTop = j;
  } } : { get: (le) => le.scrollLeft, set: (le, j) => {
    le.scrollLeft = j;
  } });
  function T(le) {
    const j = h.value, { get: oe, set: we } = $.value;
    let ke = false, Se = oe(j);
    const qe = le < Se ? -1 : 1;
    return Se += qe * 5, Se < 0 ? (ke = true, Se = 0) : (qe === -1 && Se <= le || qe === 1 && Se >= le) && (ke = true, Se = le), we(j, Se), M(), ke;
  }
  function N(le, j) {
    for (const oe in le) if (le[oe] !== j[oe]) return false;
    return true;
  }
  function _e2() {
    let le = null, j = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
    const oe = p.filter((qe) => {
      var _a3;
      return ((_a3 = qe.routeData) == null ? void 0 : _a3.hasRouterLink.value) === true;
    }), { hash: we, query: ke } = r.$route, Se = Object.keys(ke).length;
    for (const qe of oe) {
      const je = qe.routeData.exact.value === true;
      if (qe.routeData[je === true ? "linkIsExactActive" : "linkIsActive"].value !== true) continue;
      const { hash: De, query: ie, matched: be, href: ae } = qe.routeData.resolvedLink.value, ye = Object.keys(ie).length;
      if (je === true) {
        if (De !== we || ye !== Se || N(ke, ie) === false) continue;
        le = qe.name.value;
        break;
      }
      if (De !== "" && De !== we || ye !== 0 && N(ie, ke) === false) continue;
      const Te = { matchedLen: be.length, queryDiff: Se - ye, hrefLen: ae.length - De.length };
      if (Te.matchedLen > j.matchedLen) {
        le = qe.name.value, j = Te;
        continue;
      } else if (Te.matchedLen !== j.matchedLen) continue;
      if (Te.queryDiff < j.queryDiff) le = qe.name.value, j = Te;
      else if (Te.queryDiff !== j.queryDiff) continue;
      Te.hrefLen > j.hrefLen && (le = qe.name.value, j = Te);
    }
    if (le === null && p.some((qe) => qe.routeData === void 0 && qe.name.value === g.value) === true) {
      se = false;
      return;
    }
    K({ name: le, setCurrent: true });
  }
  function x(le) {
    if (d(), S.value !== true && u.value !== null && le.target && typeof le.target.closest == "function") {
      const j = le.target.closest(".q-tab");
      j && u.value.contains(j) === true && (S.value = true, _.value === true && Y(j));
    }
  }
  function E() {
    s(() => {
      S.value = false;
    }, 30);
  }
  function I() {
    ue.avoidRouteWatcher === false ? c(_e2) : v();
  }
  function te() {
    if (z === void 0) {
      const le = he(() => r.$route.fullPath, I);
      z = () => {
        le(), z = void 0;
      };
    }
  }
  function ne(le) {
    p.push(le), b.value++, G(), le.routeData === void 0 || r.$route === void 0 ? c(() => {
      if (_.value === true) {
        const j = g.value, oe = j != null && j !== "" ? p.find((we) => we.name.value === j) : null;
        oe && Y(oe.rootRef.value);
      }
    }) : (te(), le.routeData.hasRouterLink.value === true && I());
  }
  function W(le) {
    p.splice(p.indexOf(le), 1), b.value--, G(), z !== void 0 && le.routeData !== void 0 && (p.every((j) => j.routeData === void 0) === true && z(), I());
  }
  const ue = { currentModel: g, tabProps: L, hasFocus: S, hasActiveTab: B, registerTab: ne, unregisterTab: W, verifyRouteModel: I, updateModel: K, onKbdNavigate: A, avoidRouteWatcher: false };
  pn(Sm, ue);
  function de() {
    P !== null && clearTimeout(P), O(), z == null ? void 0 : z();
  }
  let fe, se;
  return Xe(de), In(() => {
    fe = z !== void 0, de();
  }), ql(() => {
    fe === true && (te(), se = true, I()), G();
  }), () => f("div", { ref: u, class: q.value, role: "tablist", onFocusin: x, onFocusout: E }, [f(Xl, { onResize: re }), f("div", { ref: h, class: R.value, onScroll: M }, Pe(t.default)), f(tt, { class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (w.value === true ? "" : " q-tabs__arrow--faded"), name: e.leftIcon || l.iconSet.tabs[e.vertical === true ? "up" : "left"], onMousedownPassive: ee, onTouchstartPassive: ee, onMouseupPassive: O, onMouseleavePassive: O, onTouchendPassive: O }), f(tt, { class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (k.value === true ? "" : " q-tabs__arrow--faded"), name: e.rightIcon || l.iconSet.tabs[e.vertical === true ? "down" : "right"], onMousedownPassive: ge, onTouchstartPassive: ge, onMouseupPassive: O, onMouseleavePassive: O, onTouchendPassive: O })]);
} }), jy = 0, fh = ["click", "keydown"], vh = { icon: String, label: [Number, String], alert: [Boolean, String], alertIcon: String, name: { type: [Number, String], default: () => `t_${jy++}` }, noCaps: Boolean, tabindex: [String, Number], disable: Boolean, contentClass: String, ripple: { type: [Boolean, Object], default: true } };
function mh(e, t, n, r) {
  const l = Rt(Sm, ut);
  if (l === ut) return console.error("QTab/QRouteTab component needs to be child of QTabs"), ut;
  const { proxy: a } = xe(), o = U(null), i = U(null), s = U(null), d = m(() => e.disable === true || e.ripple === false ? false : Object.assign({ keyCodes: [13, 32], early: true }, e.ripple === true ? {} : e.ripple)), c = m(() => l.currentModel.value === e.name), v = m(() => "q-tab relative-position self-stretch flex flex-center text-center" + (c.value === true ? " q-tab--active" + (l.tabProps.value.activeClass ? " " + l.tabProps.value.activeClass : "") + (l.tabProps.value.activeColor ? ` text-${l.tabProps.value.activeColor}` : "") + (l.tabProps.value.activeBgColor ? ` bg-${l.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (e.icon && e.label && l.tabProps.value.inlineLabel === false ? " q-tab--full" : "") + (e.noCaps === true || l.tabProps.value.noCaps === true ? " q-tab--no-caps" : "") + (e.disable === true ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (r !== void 0 ? r.linkClass.value : "")), u = m(() => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + (l.tabProps.value.inlineLabel === true ? "row no-wrap q-tab__content--inline" : "column") + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), h = m(() => e.disable === true || l.hasFocus.value === true || c.value === false && l.hasActiveTab.value === true ? -1 : e.tabindex || 0);
  function g(p, b) {
    var _a3;
    if (b !== true && (p == null ? void 0 : p.qAvoidFocus) !== true && ((_a3 = o.value) == null ? void 0 : _a3.focus()), e.disable === true) {
      (r == null ? void 0 : r.hasRouterLink.value) === true && Ue(p);
      return;
    }
    if (r === void 0) {
      l.updateModel({ name: e.name }), n("click", p);
      return;
    }
    if (r.hasRouterLink.value === true) {
      const S = (P = {}) => {
        let F;
        const z = P.to === void 0 || En(P.to, e.to) === true ? l.avoidRouteWatcher = Ma() : null;
        return r.navigateToRouterLink(p, { ...P, returnRouterError: true }).catch((L) => {
          F = L;
        }).then((L) => {
          var _a4;
          if (z === l.avoidRouteWatcher && (l.avoidRouteWatcher = false, F === void 0 && (L === void 0 || ((_a4 = L.message) == null ? void 0 : _a4.startsWith("Avoided redundant navigation")) === true) && l.updateModel({ name: e.name })), P.returnRouterError === true) return F !== void 0 ? Promise.reject(F) : L;
        });
      };
      n("click", p, S), p.defaultPrevented !== true && S();
      return;
    }
    n("click", p);
  }
  function _(p) {
    wn(p, [13, 32]) ? g(p, true) : er(p) !== true && p.keyCode >= 35 && p.keyCode <= 40 && p.altKey !== true && p.metaKey !== true && l.onKbdNavigate(p.keyCode, a.$el) === true && Ue(p), n("keydown", p);
  }
  function w() {
    const p = l.tabProps.value.narrowIndicator, b = [], S = f("div", { ref: s, class: ["q-tab__indicator", l.tabProps.value.indicatorClass] });
    e.icon !== void 0 && b.push(f(tt, { class: "q-tab__icon", name: e.icon })), e.label !== void 0 && b.push(f("div", { class: "q-tab__label" }, e.label)), e.alert !== false && b.push(e.alertIcon !== void 0 ? f(tt, { class: "q-tab__alert-icon", color: e.alert !== true ? e.alert : void 0, name: e.alertIcon }) : f("div", { class: "q-tab__alert" + (e.alert !== true ? ` text-${e.alert}` : "") })), p === true && b.push(S);
    const P = [f("div", { class: "q-focus-helper", tabindex: -1, ref: o }), f("div", { class: u.value }, Mt(t.default, b))];
    return p === false && P.push(S), P;
  }
  const k = { name: m(() => e.name), rootRef: i, tabIndicatorRef: s, routeData: r };
  Xe(() => {
    l.unregisterTab(k);
  }), ft(() => {
    l.registerTab(k);
  });
  function y(p, b) {
    const S = { ref: i, class: v.value, tabindex: h.value, role: "tab", "aria-selected": c.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: g, onKeydown: _, ...b };
    return dn(f(p, S, w()), [[gi, d.value]]);
  }
  return { renderTab: y, $tabs: l };
}
var Nr = me({ name: "QTab", props: vh, emits: fh, setup(e, { slots: t, emit: n }) {
  const { renderTab: r } = mh(e, t, n);
  return () => r("div");
} }), Uy = me({ name: "QTabPanels", props: { ...Us, ...lt }, emits: Qs, setup(e, { slots: t }) {
  const n = xe(), r = rt(e, n.proxy.$q), { updatePanelsList: l, getPanelContent: a, panelDirectives: o } = Ks(), i = m(() => "q-tab-panels q-panel-parent" + (r.value === true ? " q-tab-panels--dark q-dark" : ""));
  return () => (l(t), xn("div", { class: i.value }, a(), "pan", e.swipeable, () => o.value));
} }), Xi = me({ name: "QTabPanel", props: js, setup(e, { slots: t }) {
  return () => f("div", { class: "q-tab-panel", role: "tabpanel" }, Pe(t.default));
} }), _d = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, wd = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, xd = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, Ga = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, Za = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, bo = { date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e), time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e), fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e), timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e), email: (e) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e), hexColor: (e) => _d.test(e), hexaColor: (e) => wd.test(e), hexOrHexaColor: (e) => xd.test(e), rgbColor: (e) => Ga.test(e), rgbaColor: (e) => Za.test(e), rgbOrRgbaColor: (e) => Ga.test(e) || Za.test(e), hexOrRgbColor: (e) => _d.test(e) || Ga.test(e), hexaOrRgbaColor: (e) => wd.test(e) || Za.test(e), anyColor: (e) => xd.test(e) || Ga.test(e) || Za.test(e) }, Qy = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;
function Sd({ r: e, g: t, b: n, a: r }) {
  const l = r !== void 0;
  if (e = Math.round(e), t = Math.round(t), n = Math.round(n), e > 255 || t > 255 || n > 255 || l && r > 100) throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");
  return r = l ? (Math.round(255 * r / 100) | 256).toString(16).slice(1) : "", "#" + (n | t << 8 | e << 16 | 1 << 24).toString(16).slice(1) + r;
}
function Cd({ r: e, g: t, b: n, a: r }) {
  return `rgb${r !== void 0 ? "a" : ""}(${e},${t},${n}${r !== void 0 ? "," + r / 100 : ""})`;
}
function hh(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  e = e.replace(/^#/, ""), e.length === 3 ? e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] : e.length === 4 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
  const t = parseInt(e, 16);
  return e.length > 6 ? { r: t >> 24 & 255, g: t >> 16 & 255, b: t >> 8 & 255, a: Math.round((t & 255) / 2.55) } : { r: t >> 16, g: t >> 8 & 255, b: t & 255 };
}
function kd({ h: e, s: t, v: n, a: r }) {
  let l, a, o;
  t = t / 100, n = n / 100, e = e / 360;
  const i = Math.floor(e * 6), s = e * 6 - i, d = n * (1 - t), c = n * (1 - s * t), v = n * (1 - (1 - s) * t);
  switch (i % 6) {
    case 0:
      l = n, a = v, o = d;
      break;
    case 1:
      l = c, a = n, o = d;
      break;
    case 2:
      l = d, a = n, o = v;
      break;
    case 3:
      l = d, a = c, o = n;
      break;
    case 4:
      l = v, a = d, o = n;
      break;
    case 5:
      l = n, a = d, o = c;
      break;
  }
  return { r: Math.round(l * 255), g: Math.round(a * 255), b: Math.round(o * 255), a: r };
}
function Gi({ r: e, g: t, b: n, a: r }) {
  const l = Math.max(e, t, n), a = Math.min(e, t, n), o = l - a, i = l === 0 ? 0 : o / l, s = l / 255;
  let d;
  switch (l) {
    case a:
      d = 0;
      break;
    case e:
      d = t - n + o * (t < n ? 6 : 0), d /= 6 * o;
      break;
    case t:
      d = n - e + o * 2, d /= 6 * o;
      break;
    case n:
      d = e - t + o * 4, d /= 6 * o;
      break;
  }
  return { h: Math.round(d * 360), s: Math.round(i * 100), v: Math.round(s * 100), a: r };
}
function gh(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  const t = e.replace(/ /g, ""), n = Qy.exec(t);
  if (n === null) return hh(t);
  const r = { r: Math.min(255, parseInt(n[2], 10)), g: Math.min(255, parseInt(n[3], 10)), b: Math.min(255, parseInt(n[4], 10)) };
  if (n[1]) {
    const l = parseFloat(n[5]);
    r.a = Math.min(1, isNaN(l) === true ? 1 : l) * 100;
  }
  return r;
}
function Ky(e) {
  if (typeof e != "string" && (!e || e.r === void 0)) throw new TypeError("Expected a string or a {r, g, b} object as color");
  const t = typeof e == "string" ? gh(e) : e, n = t.r / 255, r = t.g / 255, l = t.b / 255, a = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4), o = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4), i = l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4);
  return 0.2126 * a + 0.7152 * o + 0.0722 * i;
}
var Wy = ["rgb(255,204,204)", "rgb(255,230,204)", "rgb(255,255,204)", "rgb(204,255,204)", "rgb(204,255,230)", "rgb(204,255,255)", "rgb(204,230,255)", "rgb(204,204,255)", "rgb(230,204,255)", "rgb(255,204,255)", "rgb(255,153,153)", "rgb(255,204,153)", "rgb(255,255,153)", "rgb(153,255,153)", "rgb(153,255,204)", "rgb(153,255,255)", "rgb(153,204,255)", "rgb(153,153,255)", "rgb(204,153,255)", "rgb(255,153,255)", "rgb(255,102,102)", "rgb(255,179,102)", "rgb(255,255,102)", "rgb(102,255,102)", "rgb(102,255,179)", "rgb(102,255,255)", "rgb(102,179,255)", "rgb(102,102,255)", "rgb(179,102,255)", "rgb(255,102,255)", "rgb(255,51,51)", "rgb(255,153,51)", "rgb(255,255,51)", "rgb(51,255,51)", "rgb(51,255,153)", "rgb(51,255,255)", "rgb(51,153,255)", "rgb(51,51,255)", "rgb(153,51,255)", "rgb(255,51,255)", "rgb(255,0,0)", "rgb(255,128,0)", "rgb(255,255,0)", "rgb(0,255,0)", "rgb(0,255,128)", "rgb(0,255,255)", "rgb(0,128,255)", "rgb(0,0,255)", "rgb(128,0,255)", "rgb(255,0,255)", "rgb(245,0,0)", "rgb(245,123,0)", "rgb(245,245,0)", "rgb(0,245,0)", "rgb(0,245,123)", "rgb(0,245,245)", "rgb(0,123,245)", "rgb(0,0,245)", "rgb(123,0,245)", "rgb(245,0,245)", "rgb(214,0,0)", "rgb(214,108,0)", "rgb(214,214,0)", "rgb(0,214,0)", "rgb(0,214,108)", "rgb(0,214,214)", "rgb(0,108,214)", "rgb(0,0,214)", "rgb(108,0,214)", "rgb(214,0,214)", "rgb(163,0,0)", "rgb(163,82,0)", "rgb(163,163,0)", "rgb(0,163,0)", "rgb(0,163,82)", "rgb(0,163,163)", "rgb(0,82,163)", "rgb(0,0,163)", "rgb(82,0,163)", "rgb(163,0,163)", "rgb(92,0,0)", "rgb(92,46,0)", "rgb(92,92,0)", "rgb(0,92,0)", "rgb(0,92,46)", "rgb(0,92,92)", "rgb(0,46,92)", "rgb(0,0,92)", "rgb(46,0,92)", "rgb(92,0,92)", "rgb(255,255,255)", "rgb(205,205,205)", "rgb(178,178,178)", "rgb(153,153,153)", "rgb(127,127,127)", "rgb(102,102,102)", "rgb(76,76,76)", "rgb(51,51,51)", "rgb(25,25,25)", "rgb(0,0,0)"], Td = "M5 5 h10 v10 h-10 v-10 z", Yy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==";
me({ name: "QColor", props: { ...lt, ...Cn, modelValue: String, defaultValue: String, defaultView: { type: String, default: "spectrum", validator: (e) => ["spectrum", "tune", "palette"].includes(e) }, formatModel: { type: String, default: "auto", validator: (e) => ["auto", "hex", "rgb", "hexa", "rgba"].includes(e) }, palette: Array, noHeader: Boolean, noHeaderTabs: Boolean, noFooter: Boolean, square: Boolean, flat: Boolean, bordered: Boolean, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), { $q: r } = n, l = rt(e, r), { getCache: a } = za(), o = U(null), i = U(null), s = m(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("hex") !== -1), d = m(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1), c = U(e.formatModel === "auto" ? e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#") ? "hex" : "rgb" : e.formatModel.startsWith("hex") ? "hex" : "rgb"), v = U(e.defaultView), u = U(q(e.modelValue || e.defaultValue)), h = m(() => e.disable !== true && e.readonly !== true), g = m(() => e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#")), _ = m(() => s.value !== null ? s.value : g.value), w = m(() => ({ type: "hidden", name: e.name, value: u.value[_.value === true ? "hex" : "rgb"] })), k = Ml(w), y = m(() => d.value !== null ? d.value : u.value.a !== void 0), p = m(() => ({ backgroundColor: u.value.rgb || "#000" })), b = m(() => `q-color-picker__header-content q-color-picker__header-content--${(u.value.a !== void 0 && u.value.a < 65 ? true : Ky(u.value) > 0.4) ? "light" : "dark"}`), S = m(() => ({ background: `hsl(${u.value.h},100%,50%)` })), P = m(() => ({ top: `${100 - u.value.v}%`, [r.lang.rtl === true ? "right" : "left"]: `${u.value.s}%` })), F = m(() => e.palette !== void 0 && e.palette.length !== 0 ? e.palette : Wy), z = m(() => "q-color-picker" + (e.bordered === true ? " q-color-picker--bordered" : "") + (e.square === true ? " q-color-picker--square no-border-radius" : "") + (e.flat === true ? " q-color-picker--flat no-shadow" : "") + (e.disable === true ? " disabled" : "") + (l.value === true ? " q-color-picker--dark q-dark" : "")), L = m(() => e.disable === true ? { "aria-disabled": "true" } : {}), B = m(() => [[yn, re, void 0, { prevent: true, stop: true, mouse: true }]]);
  he(() => e.modelValue, (x) => {
    const E = q(x || e.defaultValue);
    E.hex !== u.value.hex && (u.value = E);
  }), he(() => e.defaultValue, (x) => {
    if (!e.modelValue && x) {
      const E = q(x);
      E.hex !== u.value.hex && (u.value = E);
    }
  });
  function D(x, E) {
    u.value.hex = Sd(x), u.value.rgb = Cd(x), u.value.r = x.r, u.value.g = x.g, u.value.b = x.b, u.value.a = x.a;
    const I = u.value[_.value === true ? "hex" : "rgb"];
    t("update:modelValue", I), E === true && t("change", I);
  }
  function q(x) {
    const E = d.value !== void 0 ? d.value : e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1;
    if (typeof x != "string" || x.length === 0 || bo.anyColor(x.replace(/ /g, "")) !== true) return { h: 0, s: 0, v: 0, r: 0, g: 0, b: 0, a: E === true ? 100 : void 0, hex: void 0, rgb: void 0 };
    const I = gh(x);
    return E === true && I.a === void 0 && (I.a = 100), I.hex = Sd(I), I.rgb = Cd(I), Object.assign(I, Gi(I));
  }
  function R(x, E, I) {
    const te = o.value;
    if (te === null) return;
    const ne = te.clientWidth, W = te.clientHeight, ue = te.getBoundingClientRect();
    let de = Math.min(ne, Math.max(0, x - ue.left));
    r.lang.rtl === true && (de = ne - de);
    const fe = Math.min(W, Math.max(0, E - ue.top)), se = Math.round(100 * de / ne), le = Math.round(100 * Math.max(0, Math.min(1, -(fe / W) + 1))), j = kd({ h: u.value.h, s: se, v: le, a: y.value === true ? u.value.a : void 0 });
    u.value.s = se, u.value.v = le, D(j, I);
  }
  function C(x, E) {
    const I = Math.round(x), te = kd({ h: I, s: u.value.s, v: u.value.v, a: y.value === true ? u.value.a : void 0 });
    u.value.h = I, D(te, E);
  }
  function H(x) {
    C(x, true);
  }
  function Q(x, E, I, te, ne) {
    if (te !== void 0 && St(te), !/^[0-9]+$/.test(x)) {
      ne === true && n.$forceUpdate();
      return;
    }
    const W = Math.floor(Number(x));
    if (W < 0 || W > I) {
      ne === true && n.$forceUpdate();
      return;
    }
    const ue = { r: E === "r" ? W : u.value.r, g: E === "g" ? W : u.value.g, b: E === "b" ? W : u.value.b, a: y.value === true ? E === "a" ? W : u.value.a : void 0 };
    if (E !== "a") {
      const de = Gi(ue);
      u.value.h = de.h, u.value.s = de.s, u.value.v = de.v;
    }
    if (D(ue, ne), ne !== true && (te == null ? void 0 : te.target.selectionEnd) !== void 0) {
      const de = te.target.selectionEnd;
      We(() => {
        te.target.setSelectionRange(de, de);
      });
    }
  }
  function K(x, E) {
    let I;
    const te = x.target.value;
    if (St(x), c.value === "hex") {
      if (te.length !== (y.value === true ? 9 : 7) || !/^#[0-9A-Fa-f]+$/.test(te)) return true;
      I = hh(te);
    } else {
      let W;
      if (te.endsWith(")")) if (y.value !== true && te.startsWith("rgb(")) {
        if (W = te.substring(4, te.length - 1).split(",").map((ue) => parseInt(ue, 10)), W.length !== 3 || !/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(te)) return true;
      } else if (y.value === true && te.startsWith("rgba(")) {
        if (W = te.substring(5, te.length - 1).split(","), W.length !== 4 || !/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(te)) return true;
        for (let de = 0; de < 3; de++) {
          const fe = parseInt(W[de], 10);
          if (fe < 0 || fe > 255) return true;
          W[de] = fe;
        }
        const ue = parseFloat(W[3]);
        if (ue < 0 || ue > 1) return true;
        W[3] = ue;
      } else return true;
      else return true;
      if (W[0] < 0 || W[0] > 255 || W[1] < 0 || W[1] > 255 || W[2] < 0 || W[2] > 255 || y.value === true && (W[3] < 0 || W[3] > 1)) return true;
      I = { r: W[0], g: W[1], b: W[2], a: y.value === true ? W[3] * 100 : void 0 };
    }
    const ne = Gi(I);
    if (u.value.h = ne.h, u.value.s = ne.s, u.value.v = ne.v, D(I, E), E !== true) {
      const W = x.target.selectionEnd;
      We(() => {
        x.target.setSelectionRange(W, W);
      });
    }
  }
  function G(x) {
    const E = q(x), I = { r: E.r, g: E.g, b: E.b, a: E.a };
    I.a === void 0 && (I.a = u.value.a), u.value.h = E.h, u.value.s = E.s, u.value.v = E.v, D(I, true);
  }
  function re(x) {
    x.isFinal ? R(x.position.left, x.position.top, true) : pe(x);
  }
  const pe = Lm((x) => {
    R(x.position.left, x.position.top);
  }, 20);
  function Y(x) {
    R(x.pageX - window.pageXOffset, x.pageY - window.pageYOffset, true);
  }
  function M(x) {
    R(x.pageX - window.pageXOffset, x.pageY - window.pageYOffset);
  }
  function J(x) {
    i.value !== null && (i.value.$el.style.opacity = x ? 1 : 0);
  }
  function ee(x) {
    c.value = x;
  }
  function ge() {
    const x = [];
    return e.noHeaderTabs !== true && x.push(f(yd, { class: "q-color-picker__header-tabs", modelValue: c.value, dense: true, align: "justify", "onUpdate:modelValue": ee }, () => [f(Nr, { label: "HEX" + (y.value === true ? "A" : ""), name: "hex", ripple: false }), f(Nr, { label: "RGB" + (y.value === true ? "A" : ""), name: "rgb", ripple: false })])), x.push(f("div", { class: "q-color-picker__header-banner row flex-center no-wrap" }, [f("input", { class: "fit", value: u.value[c.value], ...h.value !== true ? { readonly: true } : {}, ...a("topIn", { onInput: (E) => {
      J(K(E) === true);
    }, onChange: St, onBlur: (E) => {
      K(E, true) === true && n.$forceUpdate(), J(false);
    } }) }), f(tt, { ref: i, class: "q-color-picker__error-icon absolute no-pointer-events", name: r.iconSet.type.negative })])), f("div", { class: "q-color-picker__header relative-position overflow-hidden" }, [f("div", { class: "q-color-picker__header-bg absolute-full" }), f("div", { class: b.value, style: p.value }, x)]);
  }
  function O() {
    return f(Uy, { modelValue: v.value, animated: true }, () => [f(Xi, { class: "q-color-picker__spectrum-tab overflow-hidden", name: "spectrum" }, T), f(Xi, { class: "q-pa-md q-color-picker__tune-tab", name: "tune" }, N), f(Xi, { class: "q-color-picker__palette-tab", name: "palette" }, _e2)]);
  }
  function A(x) {
    v.value = x;
  }
  function $() {
    return f("div", { class: "q-color-picker__footer relative-position overflow-hidden" }, [f(yd, { class: "absolute-full", modelValue: v.value, dense: true, align: "justify", "onUpdate:modelValue": A }, () => [f(Nr, { icon: r.iconSet.colorPicker.spectrum, name: "spectrum", ripple: false }), f(Nr, { icon: r.iconSet.colorPicker.tune, name: "tune", ripple: false }), f(Nr, { icon: r.iconSet.colorPicker.palette, name: "palette", ripple: false })])]);
  }
  function T() {
    const x = { ref: o, class: "q-color-picker__spectrum non-selectable relative-position cursor-pointer" + (h.value !== true ? " readonly" : ""), style: S.value, ...h.value === true ? { onClick: Y, onMousedown: M } : {} }, E = [f("div", { style: { paddingBottom: "100%" } }), f("div", { class: "q-color-picker__spectrum-white absolute-full" }), f("div", { class: "q-color-picker__spectrum-black absolute-full" }), f("div", { class: "absolute", style: P.value }, [u.value.hex !== void 0 ? f("div", { class: "q-color-picker__spectrum-circle" }) : null])], I = [f(Xn, { class: "q-color-picker__hue non-selectable", modelValue: u.value.h, min: 0, max: 360, trackSize: "8px", innerTrackColor: "transparent", selectionColor: "transparent", readonly: h.value !== true, thumbPath: Td, "onUpdate:modelValue": C, onChange: H })];
    return y.value === true && I.push(f(Xn, { class: "q-color-picker__alpha non-selectable", modelValue: u.value.a, min: 0, max: 100, trackSize: "8px", trackColor: "white", innerTrackColor: "transparent", selectionColor: "transparent", trackImg: Yy, readonly: h.value !== true, hideSelection: true, thumbPath: Td, ...a("alphaSlide", { "onUpdate:modelValue": (te) => Q(te, "a", 100), onChange: (te) => Q(te, "a", 100, void 0, true) }) })), [xn("div", x, E, "spec", h.value, () => B.value), f("div", { class: "q-color-picker__sliders" }, I)];
  }
  function N() {
    return [f("div", { class: "row items-center no-wrap" }, [f("div", "R"), f(Xn, { modelValue: u.value.r, min: 0, max: 255, color: "red", dark: l.value, readonly: h.value !== true, ...a("rSlide", { "onUpdate:modelValue": (x) => Q(x, "r", 255), onChange: (x) => Q(x, "r", 255, void 0, true) }) }), f("input", { value: u.value.r, maxlength: 3, readonly: h.value !== true, onChange: St, ...a("rIn", { onInput: (x) => Q(x.target.value, "r", 255, x), onBlur: (x) => Q(x.target.value, "r", 255, x, true) }) })]), f("div", { class: "row items-center no-wrap" }, [f("div", "G"), f(Xn, { modelValue: u.value.g, min: 0, max: 255, color: "green", dark: l.value, readonly: h.value !== true, ...a("gSlide", { "onUpdate:modelValue": (x) => Q(x, "g", 255), onChange: (x) => Q(x, "g", 255, void 0, true) }) }), f("input", { value: u.value.g, maxlength: 3, readonly: h.value !== true, onChange: St, ...a("gIn", { onInput: (x) => Q(x.target.value, "g", 255, x), onBlur: (x) => Q(x.target.value, "g", 255, x, true) }) })]), f("div", { class: "row items-center no-wrap" }, [f("div", "B"), f(Xn, { modelValue: u.value.b, min: 0, max: 255, color: "blue", readonly: h.value !== true, dark: l.value, ...a("bSlide", { "onUpdate:modelValue": (x) => Q(x, "b", 255), onChange: (x) => Q(x, "b", 255, void 0, true) }) }), f("input", { value: u.value.b, maxlength: 3, readonly: h.value !== true, onChange: St, ...a("bIn", { onInput: (x) => Q(x.target.value, "b", 255, x), onBlur: (x) => Q(x.target.value, "b", 255, x, true) }) })]), y.value === true ? f("div", { class: "row items-center no-wrap" }, [f("div", "A"), f(Xn, { modelValue: u.value.a, color: "grey", readonly: h.value !== true, dark: l.value, ...a("aSlide", { "onUpdate:modelValue": (x) => Q(x, "a", 100), onChange: (x) => Q(x, "a", 100, void 0, true) }) }), f("input", { value: u.value.a, maxlength: 3, readonly: h.value !== true, onChange: St, ...a("aIn", { onInput: (x) => Q(x.target.value, "a", 100, x), onBlur: (x) => Q(x.target.value, "a", 100, x, true) }) })]) : null];
  }
  function _e2() {
    const x = (E) => f("div", { class: "q-color-picker__cube col-auto", style: { backgroundColor: E }, ...h.value === true ? a("palette#" + E, { onClick: () => {
      G(E);
    } }) : {} });
    return [f("div", { class: "row items-center q-color-picker__palette-rows" + (h.value === true ? " q-color-picker__palette-rows--editable" : "") }, F.value.map(x))];
  }
  return () => {
    const x = [O()];
    return e.name !== void 0 && e.disable !== true && k(x, "push"), e.noHeader !== true && x.unshift(ge()), e.noFooter !== true && x.push($()), f("div", { class: z.value, ...L.value }, x);
  };
} });
var pl = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
function Xy(e, t, n) {
  return Object.prototype.toString.call(e) === "[object Date]" && (n = e.getDate(), t = e.getMonth() + 1, e = e.getFullYear()), e1(Js(e, t, n));
}
function qd(e, t, n) {
  return ph(Jy(e, t, n));
}
function Gy(e) {
  return Zy(e) === 0;
}
function po(e, t) {
  return t <= 6 ? 31 : t <= 11 || Gy(e) ? 30 : 29;
}
function Zy(e) {
  const t = pl.length;
  let n = pl[0], r, l, a, o, i;
  if (e < n || e >= pl[t - 1]) throw new Error("Invalid Jalaali year " + e);
  for (i = 1; i < t && (r = pl[i], l = r - n, !(e < r)); i += 1) n = r;
  return o = e - n, l - o < 6 && (o = o - l + xt(l + 4, 33) * 33), a = sn(sn(o + 1, 33) - 1, 4), a === -1 && (a = 4), a;
}
function bh(e, t) {
  const n = pl.length, r = e + 621;
  let l = -14, a = pl[0], o, i, s, d, c;
  if (e < a || e >= pl[n - 1]) throw new Error("Invalid Jalaali year " + e);
  for (c = 1; c < n && (o = pl[c], i = o - a, !(e < o)); c += 1) l = l + xt(i, 33) * 8 + xt(sn(i, 33), 4), a = o;
  d = e - a, l = l + xt(d, 33) * 8 + xt(sn(d, 33) + 3, 4), sn(i, 33) === 4 && i - d === 4 && (l += 1);
  const v = xt(r, 4) - xt((xt(r, 100) + 1) * 3, 4) - 150, u = 20 + l - v;
  return t || (i - d < 6 && (d = d - i + xt(i + 4, 33) * 33), s = sn(sn(d + 1, 33) - 1, 4), s === -1 && (s = 4)), { leap: s, gy: r, march: u };
}
function Jy(e, t, n) {
  const r = bh(e, true);
  return Js(r.gy, 3, r.march) + (t - 1) * 31 - xt(t, 7) * (t - 7) + n - 1;
}
function e1(e) {
  const t = ph(e).gy;
  let n = t - 621, r, l, a;
  const o = bh(n, false), i = Js(t, 3, o.march);
  if (a = e - i, a >= 0) {
    if (a <= 185) return l = 1 + xt(a, 31), r = sn(a, 31) + 1, { jy: n, jm: l, jd: r };
    a -= 186;
  } else n -= 1, a += 179, o.leap === 1 && (a += 1);
  return l = 7 + xt(a, 30), r = sn(a, 30) + 1, { jy: n, jm: l, jd: r };
}
function Js(e, t, n) {
  let r = xt((e + xt(t - 8, 6) + 100100) * 1461, 4) + xt(153 * sn(t + 9, 12) + 2, 5) + n - 34840408;
  return r = r - xt(xt(e + 100100 + xt(t - 8, 6), 100) * 3, 4) + 752, r;
}
function ph(e) {
  let t = 4 * e + 139361631;
  t = t + xt(xt(4 * e + 183187720, 146097) * 3, 4) * 4 - 3908;
  const n = xt(sn(t, 1461), 4) * 5 + 308, r = xt(sn(n, 153), 5) + 1, l = sn(xt(n, 153), 12) + 1;
  return { gy: xt(t, 1461) - 100100 + xt(8 - l, 6), gm: l, gd: r };
}
function xt(e, t) {
  return ~~(e / t);
}
function sn(e, t) {
  return e - ~~(e / t) * t;
}
var t1 = ["gregorian", "persian"], Ko = { mask: { type: String }, locale: Object, calendar: { type: String, validator: (e) => t1.includes(e), default: "gregorian" }, landscape: Boolean, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, readonly: Boolean, disable: Boolean }, yh = ["update:modelValue"];
function Kn(e) {
  return e.year + "/" + it(e.month) + "/" + it(e.day);
}
function _h(e, t) {
  const n = m(() => e.disable !== true && e.readonly !== true), r = m(() => n.value === true ? 0 : -1), l = m(() => {
    const i = [];
    return e.color !== void 0 && i.push(`bg-${e.color}`), e.textColor !== void 0 && i.push(`text-${e.textColor}`), i.join(" ");
  });
  function a() {
    return e.locale !== void 0 ? { ...t.lang.date, ...e.locale } : t.lang.date;
  }
  function o(i) {
    const s = /* @__PURE__ */ new Date(), d = i === true ? null : 0;
    if (e.calendar === "persian") {
      const c = Xy(s);
      return { year: c.jy, month: c.jm, day: c.jd };
    }
    return { year: s.getFullYear(), month: s.getMonth() + 1, day: s.getDate(), hour: d, minute: d, second: d, millisecond: d };
  }
  return { editable: n, tabindex: r, headerClass: l, getLocale: a, getCurrentDate: o };
}
var wh = 864e5, n1 = 36e5, Ju = 6e4, xh = "YYYY-MM-DDTHH:mm:ss.SSSZ", l1 = /\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g, r1 = /(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g, Zi = {};
function a1(e, t) {
  const n = "(" + t.days.join("|") + ")", r = e + n;
  if (Zi[r] !== void 0) return Zi[r];
  const l = "(" + t.daysShort.join("|") + ")", a = "(" + t.months.join("|") + ")", o = "(" + t.monthsShort.join("|") + ")", i = {};
  let s = 0;
  const d = e.replace(r1, (v) => {
    switch (s++, v) {
      case "YY":
        return i.YY = s, "(-?\\d{1,2})";
      case "YYYY":
        return i.YYYY = s, "(-?\\d{1,4})";
      case "M":
        return i.M = s, "(\\d{1,2})";
      case "Mo":
        return i.M = s++, "(\\d{1,2}(st|nd|rd|th))";
      case "MM":
        return i.M = s, "(\\d{2})";
      case "MMM":
        return i.MMM = s, o;
      case "MMMM":
        return i.MMMM = s, a;
      case "D":
        return i.D = s, "(\\d{1,2})";
      case "Do":
        return i.D = s++, "(\\d{1,2}(st|nd|rd|th))";
      case "DD":
        return i.D = s, "(\\d{2})";
      case "H":
        return i.H = s, "(\\d{1,2})";
      case "HH":
        return i.H = s, "(\\d{2})";
      case "h":
        return i.h = s, "(\\d{1,2})";
      case "hh":
        return i.h = s, "(\\d{2})";
      case "m":
        return i.m = s, "(\\d{1,2})";
      case "mm":
        return i.m = s, "(\\d{2})";
      case "s":
        return i.s = s, "(\\d{1,2})";
      case "ss":
        return i.s = s, "(\\d{2})";
      case "S":
        return i.S = s, "(\\d{1})";
      case "SS":
        return i.S = s, "(\\d{2})";
      case "SSS":
        return i.S = s, "(\\d{3})";
      case "A":
        return i.A = s, "(AM|PM)";
      case "a":
        return i.a = s, "(am|pm)";
      case "aa":
        return i.aa = s, "(a\\.m\\.|p\\.m\\.)";
      case "ddd":
        return l;
      case "dddd":
        return n;
      case "Q":
      case "d":
      case "E":
        return "(\\d{1})";
      case "do":
        return s++, "(\\d{1}(st|nd|rd|th))";
      case "Qo":
        return "(1st|2nd|3rd|4th)";
      case "DDD":
      case "DDDD":
        return "(\\d{1,3})";
      case "DDDo":
        return s++, "(\\d{1,3}(st|nd|rd|th))";
      case "w":
        return "(\\d{1,2})";
      case "wo":
        return s++, "(\\d{1,2}(st|nd|rd|th))";
      case "ww":
        return "(\\d{2})";
      case "Z":
        return i.Z = s, "(Z|[+-]\\d{2}:\\d{2})";
      case "ZZ":
        return i.ZZ = s, "(Z|[+-]\\d{2}\\d{2})";
      case "X":
        return i.X = s, "(-?\\d+)";
      case "x":
        return i.x = s, "(-?\\d{4,})";
      default:
        return s--, v[0] === "[" && (v = v.substring(1, v.length - 1)), v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
  }), c = { map: i, regex: new RegExp("^" + d) };
  return Zi[r] = c, c;
}
function Sh(e, t) {
  return e !== void 0 ? e : t !== void 0 ? t.date : zu.date;
}
function Ed(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), l = Math.floor(r / 60), a = r % 60;
  return n + it(l) + t + it(a);
}
function Gr(e, t, n, r, l) {
  const a = { year: null, month: null, day: null, hour: null, minute: null, second: null, millisecond: null, timezoneOffset: null, dateHash: null, timeHash: null };
  if (l !== void 0 && Object.assign(a, l), e == null || e === "" || typeof e != "string") return a;
  t === void 0 && (t = xh);
  const o = Sh(n, vi.props), i = o.months, s = o.monthsShort, { regex: d, map: c } = a1(t, o), v = e.match(d);
  if (v === null) return a;
  let u = "";
  if (c.X !== void 0 || c.x !== void 0) {
    const h = parseInt(v[c.X !== void 0 ? c.X : c.x], 10);
    if (isNaN(h) === true || h < 0) return a;
    const g = new Date(h * (c.X !== void 0 ? 1e3 : 1));
    a.year = g.getFullYear(), a.month = g.getMonth() + 1, a.day = g.getDate(), a.hour = g.getHours(), a.minute = g.getMinutes(), a.second = g.getSeconds(), a.millisecond = g.getMilliseconds();
  } else {
    if (c.YYYY !== void 0) a.year = parseInt(v[c.YYYY], 10);
    else if (c.YY !== void 0) {
      const h = parseInt(v[c.YY], 10);
      a.year = h < 0 ? h : 2e3 + h;
    }
    if (c.M !== void 0) {
      if (a.month = parseInt(v[c.M], 10), a.month < 1 || a.month > 12) return a;
    } else c.MMM !== void 0 ? a.month = s.indexOf(v[c.MMM]) + 1 : c.MMMM !== void 0 && (a.month = i.indexOf(v[c.MMMM]) + 1);
    if (c.D !== void 0) {
      if (a.day = parseInt(v[c.D], 10), a.year === null || a.month === null || a.day < 1) return a;
      const h = r !== "persian" ? new Date(a.year, a.month, 0).getDate() : po(a.year, a.month);
      if (a.day > h) return a;
    }
    c.H !== void 0 ? a.hour = parseInt(v[c.H], 10) % 24 : c.h !== void 0 && (a.hour = parseInt(v[c.h], 10) % 12, (c.A && v[c.A] === "PM" || c.a && v[c.a] === "pm" || c.aa && v[c.aa] === "p.m.") && (a.hour += 12), a.hour = a.hour % 24), c.m !== void 0 && (a.minute = parseInt(v[c.m], 10) % 60), c.s !== void 0 && (a.second = parseInt(v[c.s], 10) % 60), c.S !== void 0 && (a.millisecond = parseInt(v[c.S], 10) * 10 ** (3 - v[c.S].length)), (c.Z !== void 0 || c.ZZ !== void 0) && (u = c.Z !== void 0 ? v[c.Z].replace(":", "") : v[c.ZZ], a.timezoneOffset = (u[0] === "+" ? -1 : 1) * (60 * u.slice(1, 3) + 1 * u.slice(3, 5)));
  }
  return a.dateHash = it(a.year, 6) + "/" + it(a.month) + "/" + it(a.day), a.timeHash = it(a.hour) + ":" + it(a.minute) + ":" + it(a.second) + u, a;
}
function Ji(e) {
  const t = new Date(e.getFullYear(), e.getMonth(), e.getDate());
  t.setDate(t.getDate() - (t.getDay() + 6) % 7 + 3);
  const n = new Date(t.getFullYear(), 0, 4);
  n.setDate(n.getDate() - (n.getDay() + 6) % 7 + 3);
  const r = t.getTimezoneOffset() - n.getTimezoneOffset();
  t.setHours(t.getHours() - r);
  const l = (t - n) / (wh * 7);
  return 1 + Math.floor(l);
}
function Wn(e, t, n) {
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
function Ja(e, t, n) {
  return (e.getTime() - e.getTimezoneOffset() * Ju - (t.getTime() - t.getTimezoneOffset() * Ju)) / n;
}
function Ch(e, t, n = "days") {
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
      return Ja(Wn(r, "day"), Wn(l, "day"), wh);
    case "hours":
    case "hour":
      return Ja(Wn(r, "hour"), Wn(l, "hour"), n1);
    case "minutes":
    case "minute":
      return Ja(Wn(r, "minute"), Wn(l, "minute"), Ju);
    case "seconds":
    case "second":
      return Ja(Wn(r, "second"), Wn(l, "second"), 1e3);
  }
}
function eu(e) {
  return Ch(e, Wn(e, "year"), "days") + 1;
}
function ir(e) {
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
var Md = { YY(e, t, n) {
  const r = this.YYYY(e, t, n) % 100;
  return r >= 0 ? it(r) : "-" + it(Math.abs(r));
}, YYYY(e, t, n) {
  return n ?? e.getFullYear();
}, M(e) {
  return e.getMonth() + 1;
}, Mo(e) {
  return ir(e.getMonth() + 1);
}, MM(e) {
  return it(e.getMonth() + 1);
}, MMM(e, t) {
  return t.monthsShort[e.getMonth()];
}, MMMM(e, t) {
  return t.months[e.getMonth()];
}, Q(e) {
  return Math.ceil((e.getMonth() + 1) / 3);
}, Qo(e) {
  return ir(this.Q(e));
}, D(e) {
  return e.getDate();
}, Do(e) {
  return ir(e.getDate());
}, DD(e) {
  return it(e.getDate());
}, DDD(e) {
  return eu(e);
}, DDDo(e) {
  return ir(eu(e));
}, DDDD(e) {
  return it(eu(e), 3);
}, d(e) {
  return e.getDay();
}, do(e) {
  return ir(e.getDay());
}, dd(e, t) {
  return t.days[e.getDay()].slice(0, 2);
}, ddd(e, t) {
  return t.daysShort[e.getDay()];
}, dddd(e, t) {
  return t.days[e.getDay()];
}, E(e) {
  return e.getDay() || 7;
}, w(e) {
  return Ji(e);
}, wo(e) {
  return ir(Ji(e));
}, ww(e) {
  return it(Ji(e));
}, H(e) {
  return e.getHours();
}, HH(e) {
  return it(e.getHours());
}, h(e) {
  const t = e.getHours();
  return t === 0 ? 12 : t > 12 ? t % 12 : t;
}, hh(e) {
  return it(this.h(e));
}, m(e) {
  return e.getMinutes();
}, mm(e) {
  return it(e.getMinutes());
}, s(e) {
  return e.getSeconds();
}, ss(e) {
  return it(e.getSeconds());
}, S(e) {
  return Math.floor(e.getMilliseconds() / 100);
}, SS(e) {
  return it(Math.floor(e.getMilliseconds() / 10));
}, SSS(e) {
  return it(e.getMilliseconds(), 3);
}, A(e) {
  return e.getHours() < 12 ? "AM" : "PM";
}, a(e) {
  return e.getHours() < 12 ? "am" : "pm";
}, aa(e) {
  return e.getHours() < 12 ? "a.m." : "p.m.";
}, Z(e, t, n, r) {
  const l = r ?? e.getTimezoneOffset();
  return Ed(l, ":");
}, ZZ(e, t, n, r) {
  const l = r ?? e.getTimezoneOffset();
  return Ed(l);
}, X(e) {
  return Math.floor(e.getTime() / 1e3);
}, x(e) {
  return e.getTime();
} };
function kh(e, t, n, r, l) {
  if (e !== 0 && !e || e === 1 / 0 || e === -1 / 0) return;
  const a = new Date(e);
  if (isNaN(a)) return;
  t === void 0 && (t = xh);
  const o = Sh(n, vi.props);
  return t.replace(l1, (i, s) => i in Md ? Md[i](a, o, r, l) : s === void 0 ? i : s.split("\\]").join("]"));
}
var jn = 20, o1 = ["Calendar", "Years", "Months"], Rd = (e) => o1.includes(e), tu = (e) => /^-?[\d]+\/[0-1]\d$/.test(e), ur = " \u2014 ";
function ol(e) {
  return e.year + "/" + it(e.month);
}
me({ name: "QDate", props: { ...Ko, ...Cn, ...lt, modelValue: { required: true, validator: (e) => typeof e == "string" || Array.isArray(e) === true || Object(e) === e || e === null }, multiple: Boolean, range: Boolean, title: String, subtitle: String, mask: { ...Ko.mask, default: "YYYY/MM/DD" }, defaultYearMonth: { type: String, validator: tu }, yearsInMonthView: Boolean, events: [Array, Function], eventColor: [String, Function], emitImmediately: Boolean, options: [Array, Function], navigationMinYearMonth: { type: String, validator: tu }, navigationMaxYearMonth: { type: String, validator: tu }, noUnset: Boolean, firstDayOfWeek: [String, Number], todayBtn: Boolean, minimal: Boolean, defaultView: { type: String, default: "Calendar", validator: Rd } }, emits: [...yh, "rangeStart", "rangeEnd", "navigation"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = rt(e, l), { getCache: o } = za(), { tabindex: i, headerClass: s, getLocale: d, getCurrentDate: c } = _h(e, l);
  let v;
  const u = Ia(e), h = Ml(u), g = U(null), _ = U(je()), w = U(d()), k = m(() => je()), y = m(() => d()), p = m(() => c()), b = U(ie(_.value, w.value)), S = U(e.defaultView), P = m(() => l.lang.rtl === true ? "right" : "left"), F = U(P.value), z = U(P.value), L = b.value.year, B = U(L - L % jn - (L < 0 ? jn : 0)), D = U(null), q = m(() => {
    const V = e.landscape === true ? "landscape" : "portrait";
    return `q-date q-date--${V} q-date--${V}-${e.minimal === true ? "minimal" : "standard"}` + (a.value === true ? " q-date--dark q-dark" : "") + (e.bordered === true ? " q-date--bordered" : "") + (e.square === true ? " q-date--square no-border-radius" : "") + (e.flat === true ? " q-date--flat no-shadow" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-date--readonly" : "");
  }), R = m(() => e.color || "primary"), C = m(() => e.textColor || "white"), H = m(() => e.emitImmediately === true && e.multiple !== true && e.range !== true), Q = m(() => Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue !== null && e.modelValue !== void 0 ? [e.modelValue] : []), K = m(() => Q.value.filter((V) => typeof V == "string").map((V) => De(V, _.value, w.value)).filter((V) => V.dateHash !== null && V.day !== null && V.month !== null && V.year !== null)), G = m(() => {
    const V = (X) => De(X, _.value, w.value);
    return Q.value.filter((X) => Bt(X) === true && X.from !== void 0 && X.to !== void 0).map((X) => ({ from: V(X.from), to: V(X.to) })).filter((X) => X.from.dateHash !== null && X.to.dateHash !== null && X.from.dateHash < X.to.dateHash);
  }), re = m(() => e.calendar !== "persian" ? (V) => new Date(V.year, V.month - 1, V.day) : (V) => {
    const X = qd(V.year, V.month, V.day);
    return new Date(X.gy, X.gm - 1, X.gd);
  }), pe = m(() => e.calendar === "persian" ? Kn : (V, X, ve) => kh(new Date(V.year, V.month - 1, V.day, V.hour, V.minute, V.second, V.millisecond), X === void 0 ? _.value : X, ve === void 0 ? w.value : ve, V.year, V.timezoneOffset)), Y = m(() => K.value.length + G.value.reduce((V, X) => V + 1 + Ch(re.value(X.to), re.value(X.from)), 0)), M = m(() => {
    if (e.title !== void 0 && e.title !== null && e.title.length !== 0) return e.title;
    if (D.value !== null) {
      const ve = D.value.init, Ee = re.value(ve);
      return w.value.daysShort[Ee.getDay()] + ", " + w.value.monthsShort[ve.month - 1] + " " + ve.day + ur + "?";
    }
    if (Y.value === 0) return ur;
    if (Y.value > 1) return `${Y.value} ${w.value.pluralDay}`;
    const V = K.value[0], X = re.value(V);
    return isNaN(X.valueOf()) === true ? ur : w.value.headerTitle !== void 0 ? w.value.headerTitle(X, V) : w.value.daysShort[X.getDay()] + ", " + w.value.monthsShort[V.month - 1] + " " + V.day;
  }), J = m(() => K.value.concat(G.value.map((X) => X.from)).sort((X, ve) => X.year - ve.year || X.month - ve.month)[0]), ee = m(() => K.value.concat(G.value.map((X) => X.to)).sort((X, ve) => ve.year - X.year || ve.month - X.month)[0]), ge = m(() => {
    if (e.subtitle !== void 0 && e.subtitle !== null && e.subtitle.length !== 0) return e.subtitle;
    if (Y.value === 0) return ur;
    if (Y.value > 1) {
      const V = J.value, X = ee.value, ve = w.value.monthsShort;
      return ve[V.month - 1] + (V.year !== X.year ? " " + V.year + ur + ve[X.month - 1] + " " : V.month !== X.month ? ur + ve[X.month - 1] : "") + " " + X.year;
    }
    return K.value[0].year;
  }), O = m(() => {
    const V = [l.iconSet.datetime.arrowLeft, l.iconSet.datetime.arrowRight];
    return l.lang.rtl === true ? V.reverse() : V;
  }), A = m(() => e.firstDayOfWeek !== void 0 ? Number(e.firstDayOfWeek) : w.value.firstDayOfWeek), $ = m(() => {
    const V = w.value.daysShort, X = A.value;
    return X > 0 ? V.slice(X, 7).concat(V.slice(0, X)) : V;
  }), T = m(() => {
    const V = b.value;
    return e.calendar !== "persian" ? new Date(V.year, V.month, 0).getDate() : po(V.year, V.month);
  }), N = m(() => typeof e.eventColor == "function" ? e.eventColor : () => e.eventColor), _e2 = m(() => {
    if (e.navigationMinYearMonth === void 0) return null;
    const V = e.navigationMinYearMonth.split("/");
    return { year: parseInt(V[0], 10), month: parseInt(V[1], 10) };
  }), x = m(() => {
    if (e.navigationMaxYearMonth === void 0) return null;
    const V = e.navigationMaxYearMonth.split("/");
    return { year: parseInt(V[0], 10), month: parseInt(V[1], 10) };
  }), E = m(() => {
    const V = { month: { prev: true, next: true }, year: { prev: true, next: true } };
    return _e2.value !== null && _e2.value.year >= b.value.year && (V.year.prev = false, _e2.value.year === b.value.year && _e2.value.month >= b.value.month && (V.month.prev = false)), x.value !== null && x.value.year <= b.value.year && (V.year.next = false, x.value.year === b.value.year && x.value.month <= b.value.month && (V.month.next = false)), V;
  }), I = m(() => {
    const V = {};
    return K.value.forEach((X) => {
      const ve = ol(X);
      V[ve] === void 0 && (V[ve] = []), V[ve].push(X.day);
    }), V;
  }), te = m(() => {
    const V = {};
    return G.value.forEach((X) => {
      const ve = ol(X.from), Ee = ol(X.to);
      if (V[ve] === void 0 && (V[ve] = []), V[ve].push({ from: X.from.day, to: ve === Ee ? X.to.day : void 0, range: X }), ve < Ee) {
        let Me;
        const { year: Je, month: Le } = X.from, Ne = Le < 12 ? { year: Je, month: Le + 1 } : { year: Je + 1, month: 1 };
        for (; (Me = ol(Ne)) <= Ee; ) V[Me] === void 0 && (V[Me] = []), V[Me].push({ from: void 0, to: Me === Ee ? X.to.day : void 0, range: X }), Ne.month++, Ne.month > 12 && (Ne.year++, Ne.month = 1);
      }
    }), V;
  }), ne = m(() => {
    if (D.value === null) return;
    const { init: V, initHash: X, final: ve, finalHash: Ee } = D.value, [Me, Je] = X <= Ee ? [V, ve] : [ve, V], Le = ol(Me), Ne = ol(Je);
    if (Le !== W.value && Ne !== W.value) return;
    const ot = {};
    return Le === W.value ? (ot.from = Me.day, ot.includeFrom = true) : ot.from = 1, Ne === W.value ? (ot.to = Je.day, ot.includeTo = true) : ot.to = T.value, ot;
  }), W = m(() => ol(b.value)), ue = m(() => {
    const V = {};
    if (e.options === void 0) {
      for (let ve = 1; ve <= T.value; ve++) V[ve] = true;
      return V;
    }
    const X = typeof e.options == "function" ? e.options : (ve) => e.options.includes(ve);
    for (let ve = 1; ve <= T.value; ve++) {
      const Ee = W.value + "/" + it(ve);
      V[ve] = X(Ee);
    }
    return V;
  }), de = m(() => {
    const V = {};
    if (e.events === void 0) for (let X = 1; X <= T.value; X++) V[X] = false;
    else {
      const X = typeof e.events == "function" ? e.events : (ve) => e.events.includes(ve);
      for (let ve = 1; ve <= T.value; ve++) {
        const Ee = W.value + "/" + it(ve);
        V[ve] = X(Ee) === true && N.value(Ee);
      }
    }
    return V;
  }), fe = m(() => {
    let V, X;
    const { year: ve, month: Ee } = b.value;
    if (e.calendar !== "persian") V = new Date(ve, Ee - 1, 1), X = new Date(ve, Ee - 1, 0).getDate();
    else {
      const Me = qd(ve, Ee, 1);
      V = new Date(Me.gy, Me.gm - 1, Me.gd);
      let Je = Ee - 1, Le = ve;
      Je === 0 && (Je = 12, Le--), X = po(Le, Je);
    }
    return { days: V.getDay() - A.value - 1, endDay: X };
  }), se = m(() => {
    const V = [], { days: X, endDay: ve } = fe.value, Ee = X < 0 ? X + 7 : X;
    if (Ee < 6) for (let Le = ve - Ee; Le <= ve; Le++) V.push({ i: Le, fill: true });
    const Me = V.length;
    for (let Le = 1; Le <= T.value; Le++) {
      const Ne = { i: Le, event: de.value[Le], classes: [] };
      ue.value[Le] === true && (Ne.in = true, Ne.flat = true), V.push(Ne);
    }
    if (I.value[W.value] !== void 0 && I.value[W.value].forEach((Le) => {
      const Ne = Me + Le - 1;
      Object.assign(V[Ne], { selected: true, unelevated: true, flat: false, color: R.value, textColor: C.value });
    }), te.value[W.value] !== void 0 && te.value[W.value].forEach((Le) => {
      if (Le.from !== void 0) {
        const Ne = Me + Le.from - 1, ot = Me + (Le.to || T.value) - 1;
        for (let fn = Ne; fn <= ot; fn++) Object.assign(V[fn], { range: Le.range, unelevated: true, color: R.value, textColor: C.value });
        Object.assign(V[Ne], { rangeFrom: true, flat: false }), Le.to !== void 0 && Object.assign(V[ot], { rangeTo: true, flat: false });
      } else if (Le.to !== void 0) {
        const Ne = Me + Le.to - 1;
        for (let ot = Me; ot <= Ne; ot++) Object.assign(V[ot], { range: Le.range, unelevated: true, color: R.value, textColor: C.value });
        Object.assign(V[Ne], { flat: false, rangeTo: true });
      } else {
        const Ne = Me + T.value - 1;
        for (let ot = Me; ot <= Ne; ot++) Object.assign(V[ot], { range: Le.range, unelevated: true, color: R.value, textColor: C.value });
      }
    }), ne.value !== void 0) {
      const Le = Me + ne.value.from - 1, Ne = Me + ne.value.to - 1;
      for (let ot = Le; ot <= Ne; ot++) V[ot].color = R.value, V[ot].editRange = true;
      ne.value.includeFrom === true && (V[Le].editRangeFrom = true), ne.value.includeTo === true && (V[Ne].editRangeTo = true);
    }
    b.value.year === p.value.year && b.value.month === p.value.month && (V[Me + p.value.day - 1].today = true);
    const Je = V.length % 7;
    if (Je > 0) {
      const Le = 7 - Je;
      for (let Ne = 1; Ne <= Le; Ne++) V.push({ i: Ne, fill: true });
    }
    return V.forEach((Le) => {
      let Ne = "q-date__calendar-item ";
      Le.fill === true ? Ne += "q-date__calendar-item--fill" : (Ne += `q-date__calendar-item--${Le.in === true ? "in" : "out"}`, Le.range !== void 0 && (Ne += ` q-date__range${Le.rangeTo === true ? "-to" : Le.rangeFrom === true ? "-from" : ""}`), Le.editRange === true && (Ne += ` q-date__edit-range${Le.editRangeFrom === true ? "-from" : ""}${Le.editRangeTo === true ? "-to" : ""}`), (Le.range !== void 0 || Le.editRange === true) && (Ne += ` text-${Le.color}`)), Le.classes = Ne;
    }), V;
  }), le = m(() => e.disable === true ? { "aria-disabled": "true" } : {});
  he(() => e.modelValue, (V) => {
    if (v === JSON.stringify(V)) v = 0;
    else {
      const X = ie(_.value, w.value);
      st(X.year, X.month, X);
    }
  }), he(S, () => {
    g.value !== null && r.$el.contains(document.activeElement) === true && g.value.focus();
  }), he(() => b.value.year + "|" + b.value.month, () => {
    n("navigation", { year: b.value.year, month: b.value.month });
  }), he(k, (V) => {
    Ce(V, w.value, "mask"), _.value = V;
  }), he(y, (V) => {
    Ce(_.value, V, "locale"), w.value = V;
  });
  function j(V) {
    v = JSON.stringify(V);
  }
  function oe() {
    const { year: V, month: X, day: ve } = p.value, Ee = { ...b.value, year: V, month: X, day: ve }, Me = I.value[ol(Ee)];
    (Me === void 0 || Me.includes(Ee.day) === false) && Nn(Ee), Se(Ee.year, Ee.month);
  }
  function we(V) {
    Rd(V) === true && (S.value = V);
  }
  function ke(V, X) {
    ["month", "year"].includes(V) && (V === "month" ? ae : ye)(X === true ? -1 : 1);
  }
  function Se(V, X) {
    S.value = "Calendar", st(V, X);
  }
  function qe(V, X) {
    if (e.range === false || !V) {
      D.value = null;
      return;
    }
    const ve = Object.assign({ ...b.value }, V), Ee = X !== void 0 ? Object.assign({ ...b.value }, X) : ve;
    D.value = { init: ve, initHash: Kn(ve), final: Ee, finalHash: Kn(Ee) }, Se(ve.year, ve.month);
  }
  function je() {
    return e.calendar === "persian" ? "YYYY/MM/DD" : e.mask;
  }
  function De(V, X, ve) {
    return Gr(V, X, ve, e.calendar, { hour: 0, minute: 0, second: 0, millisecond: 0 });
  }
  function ie(V, X) {
    const ve = Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue ? [e.modelValue] : [];
    if (ve.length === 0) return be();
    const Ee = ve[ve.length - 1], Me = De(Ee.from !== void 0 ? Ee.from : Ee, V, X);
    return Me.dateHash === null ? be() : Me;
  }
  function be() {
    let V, X;
    if (e.defaultYearMonth !== void 0) {
      const ve = e.defaultYearMonth.split("/");
      V = parseInt(ve[0], 10), X = parseInt(ve[1], 10);
    } else {
      const ve = p.value !== void 0 ? p.value : c();
      V = ve.year, X = ve.month;
    }
    return { year: V, month: X, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0, dateHash: V + "/" + it(X) + "/01" };
  }
  function ae(V) {
    let X = b.value.year, ve = Number(b.value.month) + V;
    ve === 13 ? (ve = 1, X++) : ve === 0 && (ve = 12, X--), st(X, ve), H.value === true && Qt("month");
  }
  function ye(V) {
    const X = Number(b.value.year) + V;
    st(X, b.value.month), H.value === true && Qt("year");
  }
  function Te(V) {
    st(V, b.value.month), S.value = e.defaultView === "Years" ? "Months" : "Calendar", H.value === true && Qt("year");
  }
  function Oe(V) {
    st(b.value.year, V), S.value = "Calendar", H.value === true && Qt("month");
  }
  function Re(V, X) {
    var _a3;
    (((_a3 = I.value[X]) == null ? void 0 : _a3.includes(V.day)) === true ? ce : Nn)(V);
  }
  function Ge(V) {
    return { year: V.year, month: V.month, day: V.day };
  }
  function st(V, X, ve) {
    if (_e2.value !== null && V <= _e2.value.year && ((X < _e2.value.month || V < _e2.value.year) && (X = _e2.value.month), V = _e2.value.year), x.value !== null && V >= x.value.year && ((X > x.value.month || V > x.value.year) && (X = x.value.month), V = x.value.year), ve !== void 0) {
      const { hour: Me, minute: Je, second: Le, millisecond: Ne, timezoneOffset: ot, timeHash: fn } = ve;
      Object.assign(b.value, { hour: Me, minute: Je, second: Le, millisecond: Ne, timezoneOffset: ot, timeHash: fn });
    }
    const Ee = V + "/" + it(X) + "/01";
    Ee !== b.value.dateHash && (F.value = b.value.dateHash < Ee == (l.lang.rtl !== true) ? "left" : "right", V !== b.value.year && (z.value = F.value), We(() => {
      B.value = V - V % jn - (V < 0 ? jn : 0), Object.assign(b.value, { year: V, month: X, day: 1, dateHash: Ee });
    }));
  }
  function Tt(V, X, ve) {
    const Ee = V !== null && V.length === 1 && e.multiple === false ? V[0] : V, { reason: Me, details: Je } = rl(X, ve);
    j(Ee), n("update:modelValue", Ee, Me, Je);
  }
  function Qt(V) {
    const X = K.value[0] !== void 0 && K.value[0].dateHash !== null ? { ...K.value[0] } : { ...b.value };
    We(() => {
      X.year = b.value.year, X.month = b.value.month;
      const ve = e.calendar !== "persian" ? new Date(X.year, X.month, 0).getDate() : po(X.year, X.month);
      X.day = Math.min(Math.max(1, X.day), ve);
      const Ee = on(X), { details: Me } = rl("", X);
      j(Ee), n("update:modelValue", Ee, V, Me);
    });
  }
  function rl(V, X) {
    return X.from !== void 0 ? { reason: `${V}-range`, details: { ...Ge(X.target), from: Ge(X.from), to: Ge(X.to) } } : { reason: `${V}-day`, details: Ge(X) };
  }
  function on(V, X, ve) {
    return V.from !== void 0 ? { from: pe.value(V.from, X, ve), to: pe.value(V.to, X, ve) } : pe.value(V, X, ve);
  }
  function Nn(V) {
    let X;
    if (e.multiple === true) if (V.from !== void 0) {
      const ve = Kn(V.from), Ee = Kn(V.to), Me = K.value.filter((Le) => Le.dateHash < ve || Le.dateHash > Ee), Je = G.value.filter(({ from: Le, to: Ne }) => Ne.dateHash < ve || Le.dateHash > Ee);
      X = Me.concat(Je).concat(V).map((Le) => on(Le));
    } else {
      const ve = Q.value.slice();
      ve.push(on(V)), X = ve;
    }
    else X = on(V);
    Tt(X, "add", V);
  }
  function ce(V) {
    if (e.noUnset === true) return;
    let X = null;
    if (e.multiple === true && Array.isArray(e.modelValue) === true) {
      const ve = on(V);
      V.from !== void 0 ? X = e.modelValue.filter((Ee) => Ee.from !== void 0 ? Ee.from !== ve.from && Ee.to !== ve.to : true) : X = e.modelValue.filter((Ee) => Ee !== ve), X.length === 0 && (X = null);
    }
    Tt(X, "remove", V);
  }
  function Ce(V, X, ve) {
    const Ee = K.value.concat(G.value).map((Je) => on(Je, V, X)).filter((Je) => Je.from !== void 0 ? Je.from.dateHash !== null && Je.to.dateHash !== null : Je.dateHash !== null), Me = (e.multiple === true ? Ee : Ee[0]) || null;
    j(Me), n("update:modelValue", Me, ve);
  }
  function Fe() {
    if (e.minimal !== true) return f("div", { class: "q-date__header " + s.value }, [f("div", { class: "relative-position" }, [f(Vt, { name: "q-transition--fade" }, () => f("div", { key: "h-yr-" + ge.value, class: "q-date__header-subtitle q-date__header-link " + (S.value === "Years" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: i.value, ...o("vY", { onClick() {
      S.value = "Years";
    }, onKeyup(V) {
      V.keyCode === 13 && (S.value = "Years");
    } }) }, [ge.value]))]), f("div", { class: "q-date__header-title relative-position flex no-wrap" }, [f("div", { class: "relative-position col" }, [f(Vt, { name: "q-transition--fade" }, () => f("div", { key: "h-sub" + M.value, class: "q-date__header-title-label q-date__header-link " + (S.value === "Calendar" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: i.value, ...o("vC", { onClick() {
      S.value = "Calendar";
    }, onKeyup(V) {
      V.keyCode === 13 && (S.value = "Calendar");
    } }) }, [M.value]))]), e.todayBtn === true ? f(et, { class: "q-date__header-today self-start", icon: l.iconSet.datetime.today, ariaLabel: l.lang.date.today, flat: true, size: "sm", round: true, tabindex: i.value, onClick: oe }) : null])]);
  }
  function Be({ label: V, type: X, key: ve, dir: Ee, goTo: Me, boundaries: Je, cls: Le }) {
    return [f("div", { class: "row items-center q-date__arrow" }, [f(et, { round: true, dense: true, size: "sm", flat: true, icon: O.value[0], ariaLabel: X === "Years" ? l.lang.date.prevYear : l.lang.date.prevMonth, tabindex: i.value, disable: Je.prev === false, ...o("go-#" + X, { onClick() {
      Me(-1);
    } }) })]), f("div", { class: "relative-position overflow-hidden flex flex-center" + Le }, [f(Vt, { name: "q-transition--jump-" + Ee }, () => f("div", { key: ve }, [f(et, { flat: true, dense: true, noCaps: true, label: V, tabindex: i.value, ...o("view#" + X, { onClick: () => {
      S.value = X;
    } }) })]))]), f("div", { class: "row items-center q-date__arrow" }, [f(et, { round: true, dense: true, size: "sm", flat: true, icon: O.value[1], ariaLabel: X === "Years" ? l.lang.date.nextYear : l.lang.date.nextMonth, tabindex: i.value, disable: Je.next === false, ...o("go+#" + X, { onClick() {
      Me(1);
    } }) })])];
  }
  const Qe = { Calendar: () => [f("div", { key: "calendar-view", class: "q-date__view q-date__calendar" }, [f("div", { class: "q-date__navigation row items-center no-wrap" }, Be({ label: w.value.months[b.value.month - 1], type: "Months", key: b.value.month, dir: F.value, goTo: ae, boundaries: E.value.month, cls: " col" }).concat(Be({ label: b.value.year, type: "Years", key: b.value.year, dir: z.value, goTo: ye, boundaries: E.value.year, cls: "" }))), f("div", { class: "q-date__calendar-weekdays row items-center no-wrap" }, $.value.map((V) => f("div", { class: "q-date__calendar-item" }, [f("div", V)]))), f("div", { class: "q-date__calendar-days-container relative-position overflow-hidden" }, [f(Vt, { name: "q-transition--slide-" + F.value }, () => f("div", { key: W.value, class: "q-date__calendar-days fit" }, se.value.map((V) => f("div", { class: V.classes }, [V.in === true ? f(et, { class: V.today === true ? "q-date__today" : "", dense: true, flat: V.flat, unelevated: V.unelevated, color: V.color, textColor: V.textColor, label: V.i, tabindex: i.value, ...o("day#" + V.i, { onClick: () => {
    _t2(V.i);
  }, onMouseover: () => {
    bt(V.i);
  } }) }, V.event !== false ? () => f("div", { class: "q-date__event bg-" + V.event }) : null) : f("div", "" + V.i)]))))])])], Months() {
    const V = b.value.year === p.value.year, X = (Ee) => _e2.value !== null && b.value.year === _e2.value.year && _e2.value.month > Ee || x.value !== null && b.value.year === x.value.year && x.value.month < Ee, ve = w.value.monthsShort.map((Ee, Me) => {
      const Je = b.value.month === Me + 1;
      return f("div", { class: "q-date__months-item flex flex-center" }, [f(et, { class: V === true && p.value.month === Me + 1 ? "q-date__today" : null, flat: Je !== true, label: Ee, unelevated: Je, color: Je === true ? R.value : null, textColor: Je === true ? C.value : null, tabindex: i.value, disable: X(Me + 1), ...o("month#" + Me, { onClick: () => {
        Oe(Me + 1);
      } }) })]);
    });
    return e.yearsInMonthView === true && ve.unshift(f("div", { class: "row no-wrap full-width" }, [Be({ label: b.value.year, type: "Years", key: b.value.year, dir: z.value, goTo: ye, boundaries: E.value.year, cls: " col" })])), f("div", { key: "months-view", class: "q-date__view q-date__months flex flex-center" }, ve);
  }, Years() {
    const V = B.value, X = V + jn, ve = [], Ee = (Me) => _e2.value !== null && _e2.value.year > Me || x.value !== null && x.value.year < Me;
    for (let Me = V; Me <= X; Me++) {
      const Je = b.value.year === Me;
      ve.push(f("div", { class: "q-date__years-item flex flex-center" }, [f(et, { key: "yr" + Me, class: p.value.year === Me ? "q-date__today" : null, flat: !Je, label: Me, dense: true, unelevated: Je, color: Je === true ? R.value : null, textColor: Je === true ? C.value : null, tabindex: i.value, disable: Ee(Me), ...o("yr#" + Me, { onClick: () => {
        Te(Me);
      } }) })]));
    }
    return f("div", { class: "q-date__view q-date__years flex flex-center" }, [f("div", { class: "col-auto" }, [f(et, { round: true, dense: true, flat: true, icon: O.value[0], ariaLabel: l.lang.date.prevRangeYears(jn), tabindex: i.value, disable: Ee(V), ...o("y-", { onClick: () => {
      B.value -= jn;
    } }) })]), f("div", { class: "q-date__years-content col self-stretch row items-center" }, ve), f("div", { class: "col-auto" }, [f(et, { round: true, dense: true, flat: true, icon: O.value[1], ariaLabel: l.lang.date.nextRangeYears(jn), tabindex: i.value, disable: Ee(X), ...o("y+", { onClick: () => {
      B.value += jn;
    } }) })])]);
  } };
  function _t2(V) {
    const X = { ...b.value, day: V };
    if (e.range === false) {
      Re(X, W.value);
      return;
    }
    if (D.value === null) {
      const ve = se.value.find((Me) => Me.fill !== true && Me.i === V);
      if (e.noUnset !== true && ve.range !== void 0) {
        ce({ target: X, from: ve.range.from, to: ve.range.to });
        return;
      }
      if (ve.selected === true) {
        ce(X);
        return;
      }
      const Ee = Kn(X);
      D.value = { init: X, initHash: Ee, final: X, finalHash: Ee }, n("rangeStart", Ge(X));
    } else {
      const ve = D.value.initHash, Ee = Kn(X), Me = ve <= Ee ? { from: D.value.init, to: X } : { from: X, to: D.value.init };
      D.value = null, Nn(ve === Ee ? X : { target: X, ...Me }), n("rangeEnd", { from: Ge(Me.from), to: Ge(Me.to) });
    }
  }
  function bt(V) {
    if (D.value !== null) {
      const X = { ...b.value, day: V };
      Object.assign(D.value, { final: X, finalHash: Kn(X) });
    }
  }
  return Object.assign(r, { setToday: oe, setView: we, offsetCalendar: ke, setCalendarTo: Se, setEditingRange: qe }), () => {
    const V = [f("div", { class: "q-date__content col relative-position" }, [f(Vt, { name: "q-transition--fade" }, Qe[S.value])])], X = Pe(t.default);
    return X !== void 0 && V.push(f("div", { class: "q-date__actions" }, X)), e.name !== void 0 && e.disable !== true && h(V, "push"), f("div", { class: q.value, ...le.value }, [Fe(), f("div", { ref: g, class: "q-date__main col column", tabindex: -1 }, V)]);
  };
} });
function Th(e, t, n) {
  let r;
  function l() {
    r !== void 0 && (Ta.remove(r), r = void 0);
  }
  return Xe(() => {
    e.value === true && l();
  }), { removeFromHistory: l, addToHistory() {
    r = { condition: () => n.value === true, handler: t }, Ta.add(r);
  } };
}
var Hr = 0, nu, lu, Zr, ru = false, Ad, $d, Pd, Pl = null;
function i1(e) {
  u1(e) && Ue(e);
}
function u1(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop")) return true;
  const t = _p(e), n = e.shiftKey && !e.deltaX, r = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY), l = n || r ? e.deltaY : e.deltaX;
  for (let a = 0; a < t.length; a++) {
    const o = t[a];
    if (gy(o, r)) return r ? l < 0 && o.scrollTop === 0 ? true : l > 0 && o.scrollTop + o.clientHeight === o.scrollHeight : l < 0 && o.scrollLeft === 0 ? true : l > 0 && o.scrollLeft + o.clientWidth === o.scrollWidth;
  }
  return true;
}
function Ld(e) {
  e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function eo(e) {
  ru !== true && (ru = true, requestAnimationFrame(() => {
    ru = false;
    const { height: t } = e.target, { clientHeight: n, scrollTop: r } = document.scrollingElement;
    (Zr === void 0 || t !== window.innerHeight) && (Zr = n - t, document.scrollingElement.scrollTop = r), r > Zr && (document.scrollingElement.scrollTop -= Math.ceil((r - Zr) / 8));
  }));
}
function Bd(e) {
  const t = document.body, n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: r, overflowX: l } = window.getComputedStyle(t);
    nu = pi(window), lu = wl(window), Ad = t.style.left, $d = t.style.top, Pd = window.location.href, t.style.left = `-${nu}px`, t.style.top = `-${lu}px`, l !== "hidden" && (l === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), r !== "hidden" && (r === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = true, ze.is.ios === true && (n === true ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", eo, mt.passiveCapture), window.visualViewport.addEventListener("scroll", eo, mt.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", Ld, mt.passiveCapture));
  }
  ze.is.desktop === true && ze.is.mac === true && window[`${e}EventListener`]("wheel", i1, mt.notPassive), e === "remove" && (ze.is.ios === true && (n === true ? (window.visualViewport.removeEventListener("resize", eo, mt.passiveCapture), window.visualViewport.removeEventListener("scroll", eo, mt.passiveCapture)) : window.removeEventListener("scroll", Ld, mt.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = false, t.style.left = Ad, t.style.top = $d, window.location.href === Pd && window.scrollTo(nu, lu), Zr = void 0);
}
function es(e) {
  let t = "add";
  if (e === true) {
    if (Hr++, Pl !== null) {
      clearTimeout(Pl), Pl = null;
      return;
    }
    if (Hr > 1) return;
  } else {
    if (Hr === 0 || (Hr--, Hr > 0)) return;
    if (t = "remove", ze.is.ios === true && ze.is.nativeMobile === true) {
      Pl !== null && clearTimeout(Pl), Pl = setTimeout(() => {
        Bd(t), Pl = null;
      }, 100);
      return;
    }
  }
  Bd(t);
}
function qh() {
  let e;
  return { preventBodyScroll(t) {
    t !== e && (e !== void 0 || t === true) && (e = t, es(t));
  } };
}
var to = 0, s1 = { standard: "fixed-full flex-center", top: "fixed-top justify-center", bottom: "fixed-bottom justify-center", right: "fixed-right items-center", left: "fixed-left items-center" }, Fd = { standard: ["scale", "scale"], top: ["slide-down", "slide-up"], bottom: ["slide-up", "slide-down"], right: ["slide-left", "slide-right"], left: ["slide-right", "slide-left"] }, wi = me({ name: "QDialog", inheritAttrs: false, props: { ...Lr, ...Ul, transitionShow: String, transitionHide: String, persistent: Boolean, autoClose: Boolean, allowFocusOutside: Boolean, noEscDismiss: Boolean, noBackdropDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, noShake: Boolean, seamless: Boolean, maximized: Boolean, fullWidth: Boolean, fullHeight: Boolean, square: Boolean, backdropFilter: String, position: { type: String, default: "standard", validator: (e) => ["standard", "top", "bottom", "left", "right"].includes(e) } }, emits: [...Br, "shake", "click", "escapeKey"], setup(e, { slots: t, emit: n, attrs: r }) {
  const l = xe(), a = U(null), o = U(false), i = U(false);
  let s = null, d = null, c, v;
  const u = m(() => e.persistent !== true && e.noRouteDismiss !== true && e.seamless !== true), { preventBodyScroll: h } = qh(), { registerTimeout: g } = el(), { registerTick: _, removeTick: w } = Sr(), { transitionProps: k, transitionStyle: y } = bi(e, () => Fd[e.position][0], () => Fd[e.position][1]), p = m(() => y.value + (e.backdropFilter !== void 0 ? `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}` : "")), { showPortal: b, hidePortal: S, portalIsAccessible: P, renderPortal: F } = Is(l, a, ge, "dialog"), { hide: z } = Fr({ showing: o, hideOnRouteChange: u, handleShow: H, handleHide: Q, processOnMount: true }), { addToHistory: L, removeFromHistory: B } = Th(o, z, u), D = m(() => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === true ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${s1[e.position]}` + (i.value === true ? " q-dialog__inner--animating" : "") + (e.fullWidth === true ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === true ? " q-dialog__inner--fullheight" : "") + (e.square === true ? " q-dialog__inner--square" : "")), q = m(() => o.value === true && e.seamless !== true), R = m(() => e.autoClose === true ? { onClick: M } : {}), C = m(() => [`q-dialog fullscreen no-pointer-events q-dialog--${q.value === true ? "modal" : "seamless"}`, r.class]);
  he(() => e.maximized, (O) => {
    o.value === true && Y(O);
  }), he(q, (O) => {
    h(O), O === true ? (Wm(ee), Qm(re)) : (Xu(ee), Do(re));
  });
  function H(O) {
    var _a3;
    L(), d = e.noRefocus === false && document.activeElement !== null ? document.activeElement : null, Y(e.maximized), b(), i.value = true, e.noFocus !== true ? ((_a3 = document.activeElement) == null ? void 0 : _a3.blur(), _(K)) : w(), g(() => {
      if (l.proxy.$q.platform.is.ios === true) {
        if (e.seamless !== true && document.activeElement) {
          const { top: A, bottom: $ } = document.activeElement.getBoundingClientRect(), { innerHeight: T } = window, N = window.visualViewport !== void 0 ? window.visualViewport.height : T;
          A > 0 && $ > N / 2 && (document.scrollingElement.scrollTop = Math.min(document.scrollingElement.scrollHeight - N, $ >= T ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + $ - N / 2))), document.activeElement.scrollIntoView();
        }
        v = true, a.value.click(), v = false;
      }
      b(true), i.value = false, n("show", O);
    }, e.transitionDuration);
  }
  function Q(O) {
    w(), B(), pe(true), i.value = true, S(), d !== null && ((((O == null ? void 0 : O.type.indexOf("key")) === 0 ? d.closest('[tabindex]:not([tabindex^="-"])') : void 0) || d).focus(), d = null), g(() => {
      S(true), i.value = false, n("hide", O);
    }, e.transitionDuration);
  }
  function K(O) {
    Or(() => {
      let A = a.value;
      if (A !== null) {
        if (O !== void 0) {
          const $ = A.querySelector(O);
          if ($ !== null) {
            $.focus({ preventScroll: true });
            return;
          }
        }
        A.contains(document.activeElement) !== true && (A = A.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || A.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || A.querySelector("[autofocus], [data-autofocus]") || A, A.focus({ preventScroll: true }));
      }
    });
  }
  function G(O) {
    O && typeof O.focus == "function" ? O.focus({ preventScroll: true }) : K(), n("shake");
    const A = a.value;
    A !== null && (A.classList.remove("q-animate--scale"), A.classList.add("q-animate--scale"), s !== null && clearTimeout(s), s = setTimeout(() => {
      s = null, a.value !== null && (A.classList.remove("q-animate--scale"), K());
    }, 170));
  }
  function re() {
    e.seamless !== true && (e.persistent === true || e.noEscDismiss === true ? e.maximized !== true && e.noShake !== true && G() : (n("escapeKey"), z()));
  }
  function pe(O) {
    s !== null && (clearTimeout(s), s = null), (O === true || o.value === true) && (Y(false), e.seamless !== true && (h(false), Xu(ee), Do(re))), O !== true && (d = null);
  }
  function Y(O) {
    O === true ? c !== true && (to < 1 && document.body.classList.add("q-body--dialog"), to++, c = true) : c === true && (to < 2 && document.body.classList.remove("q-body--dialog"), to--, c = false);
  }
  function M(O) {
    v !== true && (z(O), n("click", O));
  }
  function J(O) {
    e.persistent !== true && e.noBackdropDismiss !== true ? z(O) : e.noShake !== true && G();
  }
  function ee(O) {
    e.allowFocusOutside !== true && P.value === true && Pm(a.value, O.target) !== true && K('[tabindex]:not([tabindex="-1"])');
  }
  Object.assign(l.proxy, { focus: K, shake: G, __updateRefocusTarget(O) {
    d = O || null;
  } }), Xe(pe);
  function ge() {
    return f("div", { role: "dialog", "aria-modal": q.value === true ? "true" : "false", ...r, class: C.value }, [f(Vt, { name: "q-transition--fade", appear: true }, () => q.value === true ? f("div", { class: "q-dialog__backdrop fixed-full", style: p.value, "aria-hidden": "true", tabindex: -1, onClick: J }) : null), f(Vt, k.value, () => o.value === true ? f("div", { ref: a, class: D.value, style: y.value, tabindex: -1, ...R.value }, Pe(t.default)) : null)]);
  }
  return F;
} }), Od = 150, Vd = me({ name: "QDrawer", inheritAttrs: false, props: { ...Lr, ...lt, side: { type: String, default: "left", validator: (e) => ["left", "right"].includes(e) }, width: { type: Number, default: 300 }, mini: Boolean, miniToOverlay: Boolean, miniWidth: { type: Number, default: 57 }, noMiniAnimation: Boolean, breakpoint: { type: Number, default: 1023 }, showIfAbove: Boolean, behavior: { type: String, validator: (e) => ["default", "desktop", "mobile"].includes(e), default: "default" }, bordered: Boolean, elevated: Boolean, overlay: Boolean, persistent: Boolean, noSwipeOpen: Boolean, noSwipeClose: Boolean, noSwipeBackdrop: Boolean }, emits: [...Br, "onLayout", "miniState"], setup(e, { slots: t, emit: n, attrs: r }) {
  const l = xe(), { proxy: { $q: a } } = l, o = rt(e, a), { preventBodyScroll: i } = qh(), { registerTimeout: s, removeTimeout: d } = el(), c = Rt(tr, ut);
  if (c === ut) return console.error("QDrawer needs to be child of QLayout"), ut;
  let v, u = null, h;
  const g = U(e.behavior === "mobile" || e.behavior !== "desktop" && c.totalWidth.value <= e.breakpoint), _ = m(() => e.mini === true && g.value !== true), w = m(() => _.value === true ? e.miniWidth : e.width), k = U(e.showIfAbove === true && g.value === false ? true : e.modelValue === true), y = m(() => e.persistent !== true && (g.value === true || pe.value === true));
  function p(j, oe) {
    if (F(), j !== false && c.animate(), E(0), g.value === true) {
      const we = c.instances[Q.value];
      (we == null ? void 0 : we.belowBreakpoint) === true && we.hide(false), I(1), c.isContainer.value !== true && i(true);
    } else I(0), j !== false && te(false);
    s(() => {
      j !== false && te(true), oe !== true && n("show", j);
    }, Od);
  }
  function b(j, oe) {
    z(), j !== false && c.animate(), I(0), E(D.value * w.value), de(), oe !== true ? s(() => {
      n("hide", j);
    }, Od) : d();
  }
  const { show: S, hide: P } = Fr({ showing: k, hideOnRouteChange: y, handleShow: p, handleHide: b }), { addToHistory: F, removeFromHistory: z } = Th(k, P, y), L = { belowBreakpoint: g, hide: P }, B = m(() => e.side === "right"), D = m(() => (a.lang.rtl === true ? -1 : 1) * (B.value === true ? 1 : -1)), q = U(0), R = U(false), C = U(false), H = U(w.value * D.value), Q = m(() => B.value === true ? "left" : "right"), K = m(() => k.value === true && g.value === false && e.overlay === false ? e.miniToOverlay === true ? e.miniWidth : w.value : 0), G = m(() => e.overlay === true || e.miniToOverlay === true || c.view.value.indexOf(B.value ? "R" : "L") !== -1 || a.platform.is.ios === true && c.isContainer.value === true), re = m(() => e.overlay === false && k.value === true && g.value === false), pe = m(() => e.overlay === true && k.value === true && g.value === false), Y = m(() => "fullscreen q-drawer__backdrop" + (k.value === false && R.value === false ? " hidden" : "")), M = m(() => ({ backgroundColor: `rgba(0,0,0,${q.value * 0.4})` })), J = m(() => B.value === true ? c.rows.value.top[2] === "r" : c.rows.value.top[0] === "l"), ee = m(() => B.value === true ? c.rows.value.bottom[2] === "r" : c.rows.value.bottom[0] === "l"), ge = m(() => {
    const j = {};
    return c.header.space === true && J.value === false && (G.value === true ? j.top = `${c.header.offset}px` : c.header.space === true && (j.top = `${c.header.size}px`)), c.footer.space === true && ee.value === false && (G.value === true ? j.bottom = `${c.footer.offset}px` : c.footer.space === true && (j.bottom = `${c.footer.size}px`)), j;
  }), O = m(() => {
    const j = { width: `${w.value}px`, transform: `translateX(${H.value}px)` };
    return g.value === true ? j : Object.assign(j, ge.value);
  }), A = m(() => "q-drawer__content fit " + (c.isContainer.value !== true ? "scroll" : "overflow-auto")), $ = m(() => `q-drawer q-drawer--${e.side}` + (C.value === true ? " q-drawer--mini-animate" : "") + (e.bordered === true ? " q-drawer--bordered" : "") + (o.value === true ? " q-drawer--dark q-dark" : "") + (R.value === true ? " no-transition" : k.value === true ? "" : " q-layout--prevent-focus") + (g.value === true ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${_.value === true ? "mini" : "standard"}` + (G.value === true || re.value !== true ? " fixed" : "") + (e.overlay === true || e.miniToOverlay === true ? " q-drawer--on-top" : "") + (J.value === true ? " q-drawer--top-padding" : ""))), T = m(() => {
    const j = a.lang.rtl === true ? e.side : Q.value;
    return [[yn, W, void 0, { [j]: true, mouse: true }]];
  }), N = m(() => {
    const j = a.lang.rtl === true ? Q.value : e.side;
    return [[yn, ue, void 0, { [j]: true, mouse: true }]];
  }), _e2 = m(() => {
    const j = a.lang.rtl === true ? Q.value : e.side;
    return [[yn, ue, void 0, { [j]: true, mouse: true, mouseAllDir: true }]];
  });
  function x() {
    se(g, e.behavior === "mobile" || e.behavior !== "desktop" && c.totalWidth.value <= e.breakpoint);
  }
  he(g, (j) => {
    j === true ? (v = k.value, k.value === true && P(false)) : e.overlay === false && e.behavior !== "mobile" && v !== false && (k.value === true ? (E(0), I(0), de()) : S(false));
  }), he(() => e.side, (j, oe) => {
    c.instances[oe] === L && (c.instances[oe] = void 0, c[oe].space = false, c[oe].offset = 0), c.instances[j] = L, c[j].size = w.value, c[j].space = re.value, c[j].offset = K.value;
  }), he(c.totalWidth, () => {
    (c.isContainer.value === true || document.qScrollPrevented !== true) && x();
  }), he(() => e.behavior + e.breakpoint, x), he(c.isContainer, (j) => {
    k.value === true && i(j !== true), j === true && x();
  }), he(c.scrollbarWidth, () => {
    E(k.value === true ? 0 : void 0);
  }), he(K, (j) => {
    fe("offset", j);
  }), he(re, (j) => {
    n("onLayout", j), fe("space", j);
  }), he(B, () => {
    E();
  }), he(w, (j) => {
    E(), le(e.miniToOverlay, j);
  }), he(() => e.miniToOverlay, (j) => {
    le(j, w.value);
  }), he(() => a.lang.rtl, () => {
    E();
  }), he(() => e.mini, () => {
    e.noMiniAnimation || e.modelValue === true && (ne(), c.animate());
  }), he(_, (j) => {
    n("miniState", j);
  });
  function E(j) {
    j === void 0 ? We(() => {
      j = k.value === true ? 0 : w.value, E(D.value * j);
    }) : (c.isContainer.value === true && B.value === true && (g.value === true || Math.abs(j) === w.value) && (j += D.value * c.scrollbarWidth.value), H.value = j);
  }
  function I(j) {
    q.value = j;
  }
  function te(j) {
    const oe = j === true ? "remove" : c.isContainer.value !== true ? "add" : "";
    oe !== "" && document.body.classList[oe]("q-body--drawer-toggle");
  }
  function ne() {
    u !== null && clearTimeout(u), l.proxy && l.proxy.$el && l.proxy.$el.classList.add("q-drawer--mini-animate"), C.value = true, u = setTimeout(() => {
      var _a3, _b2;
      u = null, C.value = false, (_b2 = (_a3 = l == null ? void 0 : l.proxy) == null ? void 0 : _a3.$el) == null ? void 0 : _b2.classList.remove("q-drawer--mini-animate");
    }, 150);
  }
  function W(j) {
    if (k.value !== false) return;
    const oe = w.value, we = vt(j.distance.x, 0, oe);
    if (j.isFinal === true) {
      we >= Math.min(75, oe) === true ? S() : (c.animate(), I(0), E(D.value * oe)), R.value = false;
      return;
    }
    E((a.lang.rtl === true ? B.value !== true : B.value) ? Math.max(oe - we, 0) : Math.min(0, we - oe)), I(vt(we / oe, 0, 1)), j.isFirst === true && (R.value = true);
  }
  function ue(j) {
    if (k.value !== true) return;
    const oe = w.value, we = j.direction === e.side, ke = (a.lang.rtl === true ? we !== true : we) ? vt(j.distance.x, 0, oe) : 0;
    if (j.isFinal === true) {
      Math.abs(ke) < Math.min(75, oe) === true ? (c.animate(), I(1), E(0)) : P(), R.value = false;
      return;
    }
    E(D.value * ke), I(vt(1 - ke / oe, 0, 1)), j.isFirst === true && (R.value = true);
  }
  function de() {
    i(false), te(true);
  }
  function fe(j, oe) {
    c.update(e.side, j, oe);
  }
  function se(j, oe) {
    j.value !== oe && (j.value = oe);
  }
  function le(j, oe) {
    fe("size", j === true ? e.miniWidth : oe);
  }
  return c.instances[e.side] = L, le(e.miniToOverlay, w.value), fe("space", re.value), fe("offset", K.value), e.showIfAbove === true && e.modelValue !== true && k.value === true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", true), ft(() => {
    n("onLayout", re.value), n("miniState", _.value), v = e.showIfAbove === true;
    const j = () => {
      (k.value === true ? p : b)(false, true);
    };
    if (c.totalWidth.value !== 0) {
      We(j);
      return;
    }
    h = he(c.totalWidth, () => {
      h(), h = void 0, k.value === false && e.showIfAbove === true && g.value === false ? S(false) : j();
    });
  }), Xe(() => {
    h == null ? void 0 : h(), u !== null && (clearTimeout(u), u = null), k.value === true && de(), c.instances[e.side] === L && (c.instances[e.side] = void 0, fe("size", 0), fe("offset", 0), fe("space", false));
  }), () => {
    const j = [];
    g.value === true && (e.noSwipeOpen === false && j.push(dn(f("div", { key: "open", class: `q-drawer__opener fixed-${e.side}`, "aria-hidden": "true" }), T.value)), j.push(xn("div", { ref: "backdrop", class: Y.value, style: M.value, "aria-hidden": "true", onClick: P }, void 0, "backdrop", e.noSwipeBackdrop !== true && k.value === true, () => _e2.value)));
    const oe = _.value === true && t.mini !== void 0, we = [f("div", { ...r, key: "" + oe, class: [A.value, r.class] }, oe === true ? t.mini() : Pe(t.default))];
    return e.elevated === true && k.value === true && we.push(f("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), j.push(xn("aside", { ref: "content", class: $.value, style: O.value }, we, "contentclose", e.noSwipeClose !== true && g.value === true, () => N.value)), f("div", { class: "q-drawer-container" }, j);
  };
} });
function Eh(e, t) {
  if (t && e === t) return null;
  const n = e.nodeName.toLowerCase();
  if (["div", "li", "ul", "ol", "blockquote"].includes(n) === true) return e;
  const r = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle, l = r.display;
  return l === "block" || l === "table" ? e : Eh(e.parentNode);
}
function au(e, t, n) {
  return !e || e === document.body ? false : n === true && e === t || (t === document ? document.body : t).contains(e.parentNode);
}
function Mh(e, t, n) {
  if (n || (n = document.createRange(), n.selectNode(e), n.setStart(e, 0)), t.count === 0) n.setEnd(e, t.count);
  else if (t.count > 0) if (e.nodeType === Node.TEXT_NODE) e.textContent.length < t.count ? t.count -= e.textContent.length : (n.setEnd(e, t.count), t.count = 0);
  else for (let r = 0; t.count !== 0 && r < e.childNodes.length; r++) n = Mh(e.childNodes[r], t, n);
  return n;
}
var c1 = /^https?:\/\//, d1 = class {
  constructor(e, t) {
    this.el = e, this.eVm = t, this._range = null;
  }
  get selection() {
    if (this.el) {
      const e = document.getSelection();
      if (au(e.anchorNode, this.el, true) && au(e.focusNode, this.el, true)) return e;
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
    return e !== null ? Eh(e, this.el) : null;
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
    if (n.focusNode && au(n.focusNode, r)) for (t = n.focusNode, e = n.focusOffset; t && t !== r; ) t !== this.el && t.previousSibling ? (t = t.previousSibling, e += t.textContent.length) : t = t.parentNode;
    this.savedPos = e;
  }
  restorePosition(e = 0) {
    if (this.savedPos > 0 && this.savedPos < e) {
      const t = window.getSelection(), n = Mh(this.el, { count: this.savedPos });
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
  apply(e, t, n = Ct) {
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
        this.eVm.editLinkUrl.value = c1.test(a) ? a : "https://", document.execCommand("createLink", false, this.eVm.editLinkUrl.value), this.save(l.getRangeAt(0));
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
}, f1 = me({ name: "QTooltip", inheritAttrs: false, props: { ...Vm, ...Lr, ...Ul, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null }, transitionShow: { ...Ul.transitionShow, default: "jump-down" }, transitionHide: { ...Ul.transitionHide, default: "jump-up" }, anchor: { type: String, default: "bottom middle", validator: Ho }, self: { type: String, default: "top middle", validator: Ho }, offset: { type: Array, default: () => [14, 14], validator: Xm }, scrollTarget: nr, delay: { type: Number, default: 0 }, hideDelay: { type: Number, default: 0 }, persistent: Boolean }, emits: [...Br], setup(e, { slots: t, emit: n, attrs: r }) {
  let l, a;
  const o = xe(), { proxy: { $q: i } } = o, s = U(null), d = U(false), c = m(() => jo(e.anchor, i.lang.rtl)), v = m(() => jo(e.self, i.lang.rtl)), u = m(() => e.persistent !== true), { registerTick: h, removeTick: g } = Sr(), { registerTimeout: _ } = el(), { transitionProps: w, transitionStyle: k } = bi(e), { localScrollTarget: y, changeScrollEvent: p, unconfigureScrollTarget: b } = Im(e, pe), { anchorEl: S, canShow: P, anchorEvents: F } = Vs({ showing: d, configureAnchorEl: re }), { show: z, hide: L } = Fr({ showing: d, canShow: P, handleShow: R, handleHide: C, hideOnRouteChange: u, processOnMount: true });
  Object.assign(F, { delayShow: K, delayHide: G });
  const { showPortal: B, hidePortal: D, renderPortal: q } = Is(o, s, M, "tooltip");
  if (i.platform.is.mobile === true) {
    const J = { anchorEl: S, innerRef: s, onClickOutside(ge) {
      return L(ge), ge.target.classList.contains("q-dialog__backdrop") && Ue(ge), true;
    } }, ee = m(() => e.modelValue === null && e.persistent !== true && d.value === true);
    he(ee, (ge) => {
      (ge === true ? Ym : No)(J);
    }), Xe(() => {
      No(J);
    });
  }
  function R(J) {
    B(), h(() => {
      a = new MutationObserver(() => Q()), a.observe(s.value, { attributes: false, childList: true, characterData: true, subtree: true }), Q(), pe();
    }), l === void 0 && (l = he(() => i.screen.width + "|" + i.screen.height + "|" + e.self + "|" + e.anchor + "|" + i.lang.rtl, Q)), _(() => {
      B(true), n("show", J);
    }, e.transitionDuration);
  }
  function C(J) {
    g(), D(), H(), _(() => {
      D(true), n("hide", J);
    }, e.transitionDuration);
  }
  function H() {
    a !== void 0 && (a.disconnect(), a = void 0), l !== void 0 && (l(), l = void 0), b(), Gt(F, "tooltipTemp");
  }
  function Q() {
    zs({ targetEl: s.value, offset: e.offset, anchorEl: S.value, anchorOrigin: c.value, selfOrigin: v.value, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function K(J) {
    if (i.platform.is.mobile === true) {
      An(), document.body.classList.add("non-selectable");
      const ee = S.value, ge = ["touchmove", "touchcancel", "touchend", "click"].map((O) => [ee, O, "delayHide", "passiveCapture"]);
      Et(F, "tooltipTemp", ge);
    }
    _(() => {
      z(J);
    }, e.delay);
  }
  function G(J) {
    i.platform.is.mobile === true && (Gt(F, "tooltipTemp"), An(), setTimeout(() => {
      document.body.classList.remove("non-selectable");
    }, 10)), _(() => {
      L(J);
    }, e.hideDelay);
  }
  function re() {
    if (e.noParentEvent === true || S.value === null) return;
    const J = i.platform.is.mobile === true ? [[S.value, "touchstart", "delayShow", "passive"]] : [[S.value, "mouseenter", "delayShow", "passive"], [S.value, "mouseleave", "delayHide", "passive"]];
    Et(F, "anchor", J);
  }
  function pe() {
    if (S.value !== null || e.scrollTarget !== void 0) {
      y.value = zn(S.value, e.scrollTarget);
      const J = e.noParentEvent === true ? Q : L;
      p(y.value, J);
    }
  }
  function Y() {
    return d.value === true ? f("div", { ...r, ref: s, class: ["q-tooltip q-tooltip--style q-position-engine no-pointer-events", r.class], style: [r.style, k.value], role: "tooltip" }, Pe(t.default)) : null;
  }
  function M() {
    return f(Vt, w.value, Y);
  }
  return Xe(H), Object.assign(o.proxy, { updatePosition: Q }), q;
} }), Mr = me({ name: "QItem", props: { ...lt, ...Va, tag: { type: String, default: "div" }, active: { type: Boolean, default: null }, clickable: Boolean, dense: Boolean, insetLevel: Number, tabindex: [String, Number], focused: Boolean, manualFocus: Boolean }, emits: ["click", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = rt(e, r), { hasLink: a, linkAttrs: o, linkClass: i, linkTag: s, navigateOnClick: d } = hi(), c = U(null), v = U(null), u = m(() => e.clickable === true || a.value === true || e.tag === "label"), h = m(() => e.disable !== true && u.value === true), g = m(() => "q-item q-item-type row no-wrap" + (e.dense === true ? " q-item--dense" : "") + (l.value === true ? " q-item--dark" : "") + (a.value === true && e.active === null ? i.value : e.active === true ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === true ? " disabled" : "") + (h.value === true ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === true ? " q-manual-focusable--focused" : "") : "")), _ = m(() => e.insetLevel === void 0 ? null : { ["padding" + (r.lang.rtl === true ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px" });
  function w(p) {
    h.value === true && (v.value !== null && p.qAvoidFocus !== true && (p.qKeyEvent !== true && document.activeElement === c.value ? v.value.focus() : document.activeElement === v.value && c.value.focus()), d(p));
  }
  function k(p) {
    if (h.value === true && wn(p, [13, 32]) === true) {
      Ue(p), p.qKeyEvent = true;
      const b = new MouseEvent("click", p);
      b.qKeyEvent = true, c.value.dispatchEvent(b);
    }
    n("keyup", p);
  }
  function y() {
    const p = Oa(t.default, []);
    return h.value === true && p.unshift(f("div", { class: "q-focus-helper", tabindex: -1, ref: v })), p;
  }
  return () => {
    const p = { ref: c, class: g.value, style: _.value, role: "listitem", onClick: w, onKeyup: k };
    return h.value === true ? (p.tabindex = e.tabindex || "0", Object.assign(p, o.value)) : u.value === true && (p["aria-disabled"] = "true"), f(s.value, p, y());
  };
} }), bn = me({ name: "QItemSection", props: { avatar: Boolean, thumbnail: Boolean, side: Boolean, top: Boolean, noWrap: Boolean }, setup(e, { slots: t }) {
  const n = m(() => `q-item__section column q-item__section--${e.avatar === true || e.side === true || e.thumbnail === true ? "side" : "main"}` + (e.top === true ? " q-item__section--top justify-start" : " justify-center") + (e.avatar === true ? " q-item__section--avatar" : "") + (e.thumbnail === true ? " q-item__section--thumbnail" : "") + (e.noWrap === true ? " q-item__section--nowrap" : ""));
  return () => f("div", { class: n.value }, Pe(t.default));
} });
function Rh(e, t, n) {
  t.handler ? t.handler(e, n, n.caret) : n.runCmd(t.cmd, t.param);
}
function ec(e) {
  return f("div", { class: "q-editor__toolbar-group" }, e);
}
function Ah(e, t, n, r = false) {
  const l = r || (t.type === "toggle" ? t.toggled ? t.toggled(e) : t.cmd && e.caret.is(t.cmd, t.param) : false), a = [];
  if (t.tip && e.$q.platform.is.desktop) {
    const o = t.key ? f("div", [f("small", `(CTRL + ${String.fromCharCode(t.key)})`)]) : null;
    a.push(f(f1, { delay: 1e3 }, () => [f("div", { innerHTML: t.tip }), o]));
  }
  return f(et, { ...e.buttonProps.value, icon: t.icon !== null ? t.icon : void 0, color: l ? t.toggleColor || e.props.toolbarToggleColor : t.color || e.props.toolbarColor, textColor: l && !e.props.toolbarPush ? null : t.textColor || e.props.toolbarTextColor, label: t.label, disable: t.disable ? typeof t.disable == "function" ? t.disable(e) : true : false, size: "sm", onClick(o) {
    n == null ? void 0 : n(), Rh(o, t, e);
  } }, () => a);
}
function v1(e, t) {
  const n = t.list === "only-icons";
  let r = t.label, l = t.icon !== null ? t.icon : void 0, a, o;
  function i() {
    d.component.proxy.hide();
  }
  if (n) o = t.options.map((c) => {
    const v = c.type === void 0 ? e.caret.is(c.cmd, c.param) : false;
    return v && (r = c.tip, l = c.icon !== null ? c.icon : void 0), Ah(e, c, i, v);
  }), a = e.toolbarBackgroundClass.value, o = [ec(o)];
  else {
    const c = e.props.toolbarToggleColor !== void 0 ? `text-${e.props.toolbarToggleColor}` : null, v = e.props.toolbarTextColor !== void 0 ? `text-${e.props.toolbarTextColor}` : null, u = t.list === "no-icons";
    o = t.options.map((h) => {
      const g = h.disable ? h.disable(e) : false, _ = h.type === void 0 ? e.caret.is(h.cmd, h.param) : false;
      _ && (r = h.tip, l = h.icon !== null ? h.icon : void 0);
      const w = h.htmlTip;
      return f(Mr, { active: _, activeClass: c, clickable: true, disable: g, dense: true, onClick(k) {
        var _a3;
        i(), (k == null ? void 0 : k.qAvoidFocus) !== true && ((_a3 = e.contentRef.value) == null ? void 0 : _a3.focus()), e.caret.restore(), Rh(k, h, e);
      } }, () => [u === true ? null : f(bn, { class: _ ? c : v, side: true }, () => f(tt, { name: h.icon !== null ? h.icon : void 0 })), f(bn, w ? () => f("div", { class: "text-no-wrap", innerHTML: h.htmlTip }) : h.tip ? () => f("div", { class: "text-no-wrap" }, h.tip) : void 0)]);
    }), a = [e.toolbarBackgroundClass.value, v];
  }
  const s = t.highlight && r !== t.label, d = f(qy, { ...e.buttonProps.value, noCaps: true, noWrap: true, color: s ? e.props.toolbarToggleColor : e.props.toolbarColor, textColor: s && !e.props.toolbarPush ? null : e.props.toolbarTextColor, label: t.fixedLabel ? t.label : r, icon: t.fixedIcon ? t.icon !== null ? t.icon : void 0 : l, contentClass: a, onShow: (c) => e.emit("dropdownShow", c), onHide: (c) => e.emit("dropdownHide", c), onBeforeShow: (c) => e.emit("dropdownBeforeShow", c), onBeforeHide: (c) => e.emit("dropdownBeforeHide", c) }, () => o);
  return d;
}
function m1(e) {
  if (e.caret) return e.buttons.value.filter((t) => !e.isViewingSource.value || t.find((n) => n.cmd === "viewsource")).map((t) => ec(t.map((n) => e.isViewingSource.value && n.cmd !== "viewsource" ? false : n.type === "slot" ? Pe(e.slots[n.slot]) : n.type === "dropdown" ? v1(e, n) : Ah(e, n))));
}
function h1(e, t, n, r = {}) {
  const l = Object.keys(r);
  if (l.length === 0) return {};
  const a = { default_font: { cmd: "fontName", param: e, icon: n, tip: t } };
  return l.forEach((o) => {
    const i = r[o];
    a[o] = { cmd: "fontName", param: i, icon: n, tip: i, htmlTip: `<font face="${i}">${i}</font>` };
  }), a;
}
function g1(e) {
  if (e.caret) {
    const t = e.props.toolbarColor || e.props.toolbarTextColor;
    let n = e.editLinkUrl.value;
    const r = () => {
      e.caret.restore(), n !== e.editLinkUrl.value && document.execCommand("createLink", false, n === "" ? " " : n), e.editLinkUrl.value = null;
    };
    return [f("div", { class: `q-mx-xs text-${t}` }, `${e.$q.lang.editor.url}: `), f("input", { key: "qedt_btm_input", class: "col q-editor__link-input", value: n, onInput: (l) => {
      St(l), n = l.target.value;
    }, onKeydown: (l) => {
      if (er(l) !== true) switch (l.keyCode) {
        case 13:
          return It(l), r();
        case 27:
          It(l), e.caret.restore(), (!e.editLinkUrl.value || e.editLinkUrl.value === "https://") && document.execCommand("unlink"), e.editLinkUrl.value = null;
          break;
      }
    } }), ec([f(et, { key: "qedt_btm_rem", tabindex: -1, ...e.buttonProps.value, label: e.$q.lang.label.remove, noCaps: true, onClick: () => {
      e.caret.restore(), document.execCommand("unlink"), e.editLinkUrl.value = null;
    } }), f(et, { key: "qedt_btm_upd", ...e.buttonProps.value, label: e.$q.lang.label.update, noCaps: true, onClick: r })])];
  }
}
var Dd = /^on[A-Z]/;
function $h() {
  const { attrs: e, vnode: t } = xe(), n = { listeners: U({}), attributes: U({}) };
  function r() {
    const l = {}, a = {};
    for (const o in e) o !== "class" && o !== "style" && Dd.test(o) === false && (l[o] = e[o]);
    for (const o in t.props) Dd.test(o) === true && (a[o] = t.props[o]);
    n.attributes.value = l, n.listeners.value = a;
  }
  return $r(r), r(), n;
}
var b1 = Object.prototype.toString, ou = Object.prototype.hasOwnProperty, p1 = new Set(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp"].map((e) => "[object " + e + "]"));
function Id(e) {
  if (e !== Object(e) || p1.has(b1.call(e)) === true || e.constructor && ou.call(e, "constructor") === false && ou.call(e.constructor.prototype, "isPrototypeOf") === false) return false;
  let t;
  for (t in e) ;
  return t === void 0 || ou.call(e, t);
}
function Ph() {
  let e, t, n, r, l, a, o = arguments[0] || {}, i = 1, s = false;
  const d = arguments.length;
  for (typeof o == "boolean" && (s = o, o = arguments[1] || {}, i = 2), Object(o) !== o && typeof o != "function" && (o = {}), d === i && (o = this, i--); i < d; i++) if ((e = arguments[i]) !== null) for (t in e) n = o[t], r = e[t], o !== r && (s === true && r && ((l = Array.isArray(r)) || Id(r) === true) ? (l === true ? a = Array.isArray(n) === true ? n : [] : a = Id(n) === true ? n : {}, o[t] = Ph(s, a, r)) : r !== void 0 && (o[t] = r));
  return o;
}
me({ name: "QEditor", props: { ...lt, ...Ws, modelValue: { type: String, required: true }, readonly: Boolean, disable: Boolean, minHeight: { type: String, default: "10rem" }, maxHeight: String, height: String, definitions: Object, fonts: Object, placeholder: String, toolbar: { type: Array, validator: (e) => e.length === 0 || e.every((t) => t.length), default: () => [["left", "center", "right", "justify"], ["bold", "italic", "underline", "strike"], ["undo", "redo"]] }, toolbarColor: String, toolbarBg: String, toolbarTextColor: String, toolbarToggleColor: { type: String, default: "primary" }, toolbarOutline: Boolean, toolbarPush: Boolean, toolbarRounded: Boolean, paragraphTag: { type: String, validator: (e) => ["div", "p"].includes(e), default: "div" }, contentStyle: Object, contentClass: [Object, Array, String], square: Boolean, flat: Boolean, dense: Boolean }, emits: [...Ys, "update:modelValue", "keydown", "click", "focus", "blur", "dropdownShow", "dropdownHide", "dropdownBeforeShow", "dropdownBeforeHide", "linkShow", "linkHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = rt(e, l), { inFullscreen: o, toggleFullscreen: i } = Xs(), s = $h(), d = U(null), c = U(null), v = U(null), u = U(false), h = m(() => !e.readonly && !e.disable);
  let g, _, w = e.modelValue;
  document.execCommand("defaultParagraphSeparator", false, e.paragraphTag), g = window.getComputedStyle(document.body).fontFamily;
  const k = m(() => e.toolbarBg ? ` bg-${e.toolbarBg}` : ""), y = m(() => ({ type: "a", flat: e.toolbarOutline !== true && e.toolbarPush !== true, noWrap: true, outline: e.toolbarOutline, push: e.toolbarPush, rounded: e.toolbarRounded, dense: true, color: e.toolbarColor, disable: !h.value, size: "sm" })), p = m(() => {
    const O = l.lang.editor, A = l.iconSet.editor;
    return { bold: { cmd: "bold", icon: A.bold, tip: O.bold, key: 66 }, italic: { cmd: "italic", icon: A.italic, tip: O.italic, key: 73 }, strike: { cmd: "strikeThrough", icon: A.strikethrough, tip: O.strikethrough, key: 83 }, underline: { cmd: "underline", icon: A.underline, tip: O.underline, key: 85 }, unordered: { cmd: "insertUnorderedList", icon: A.unorderedList, tip: O.unorderedList }, ordered: { cmd: "insertOrderedList", icon: A.orderedList, tip: O.orderedList }, subscript: { cmd: "subscript", icon: A.subscript, tip: O.subscript, htmlTip: "x<subscript>2</subscript>" }, superscript: { cmd: "superscript", icon: A.superscript, tip: O.superscript, htmlTip: "x<superscript>2</superscript>" }, link: { cmd: "link", disable: ($) => $.caret && !$.caret.can("link"), icon: A.hyperlink, tip: O.hyperlink, key: 76 }, fullscreen: { cmd: "fullscreen", icon: A.toggleFullscreen, tip: O.toggleFullscreen, key: 70 }, viewsource: { cmd: "viewsource", icon: A.viewSource, tip: O.viewSource }, quote: { cmd: "formatBlock", param: "BLOCKQUOTE", icon: A.quote, tip: O.quote, key: 81 }, left: { cmd: "justifyLeft", icon: A.left, tip: O.left }, center: { cmd: "justifyCenter", icon: A.center, tip: O.center }, right: { cmd: "justifyRight", icon: A.right, tip: O.right }, justify: { cmd: "justifyFull", icon: A.justify, tip: O.justify }, print: { type: "no-state", cmd: "print", icon: A.print, tip: O.print, key: 80 }, outdent: { type: "no-state", disable: ($) => $.caret && !$.caret.can("outdent"), cmd: "outdent", icon: A.outdent, tip: O.outdent }, indent: { type: "no-state", disable: ($) => $.caret && !$.caret.can("indent"), cmd: "indent", icon: A.indent, tip: O.indent }, removeFormat: { type: "no-state", cmd: "removeFormat", icon: A.removeFormat, tip: O.removeFormat }, hr: { type: "no-state", cmd: "insertHorizontalRule", icon: A.hr, tip: O.hr }, undo: { type: "no-state", cmd: "undo", icon: A.undo, tip: O.undo, key: 90 }, redo: { type: "no-state", cmd: "redo", icon: A.redo, tip: O.redo, key: 89 }, h1: { cmd: "formatBlock", param: "H1", icon: A.heading1 || A.heading, tip: O.heading1, htmlTip: `<h1 class="q-ma-none">${O.heading1}</h1>` }, h2: { cmd: "formatBlock", param: "H2", icon: A.heading2 || A.heading, tip: O.heading2, htmlTip: `<h2 class="q-ma-none">${O.heading2}</h2>` }, h3: { cmd: "formatBlock", param: "H3", icon: A.heading3 || A.heading, tip: O.heading3, htmlTip: `<h3 class="q-ma-none">${O.heading3}</h3>` }, h4: { cmd: "formatBlock", param: "H4", icon: A.heading4 || A.heading, tip: O.heading4, htmlTip: `<h4 class="q-ma-none">${O.heading4}</h4>` }, h5: { cmd: "formatBlock", param: "H5", icon: A.heading5 || A.heading, tip: O.heading5, htmlTip: `<h5 class="q-ma-none">${O.heading5}</h5>` }, h6: { cmd: "formatBlock", param: "H6", icon: A.heading6 || A.heading, tip: O.heading6, htmlTip: `<h6 class="q-ma-none">${O.heading6}</h6>` }, p: { cmd: "formatBlock", param: e.paragraphTag, icon: A.heading, tip: O.paragraph }, code: { cmd: "formatBlock", param: "PRE", icon: A.code, htmlTip: `<code>${O.code}</code>` }, "size-1": { cmd: "fontSize", param: "1", icon: A.size1 || A.size, tip: O.size1, htmlTip: `<font size="1">${O.size1}</font>` }, "size-2": { cmd: "fontSize", param: "2", icon: A.size2 || A.size, tip: O.size2, htmlTip: `<font size="2">${O.size2}</font>` }, "size-3": { cmd: "fontSize", param: "3", icon: A.size3 || A.size, tip: O.size3, htmlTip: `<font size="3">${O.size3}</font>` }, "size-4": { cmd: "fontSize", param: "4", icon: A.size4 || A.size, tip: O.size4, htmlTip: `<font size="4">${O.size4}</font>` }, "size-5": { cmd: "fontSize", param: "5", icon: A.size5 || A.size, tip: O.size5, htmlTip: `<font size="5">${O.size5}</font>` }, "size-6": { cmd: "fontSize", param: "6", icon: A.size6 || A.size, tip: O.size6, htmlTip: `<font size="6">${O.size6}</font>` }, "size-7": { cmd: "fontSize", param: "7", icon: A.size7 || A.size, tip: O.size7, htmlTip: `<font size="7">${O.size7}</font>` } };
  }), b = m(() => {
    const O = e.definitions || {}, A = e.definitions || e.fonts ? Ph(true, {}, p.value, O, h1(g, l.lang.editor.defaultFont, l.iconSet.editor.font, e.fonts)) : p.value;
    return e.toolbar.map(($) => $.map((T) => {
      if (T.options) return { type: "dropdown", icon: T.icon, label: T.label, size: "sm", dense: true, fixedLabel: T.fixedLabel, fixedIcon: T.fixedIcon, highlight: T.highlight, list: T.list, options: T.options.map((_e2) => A[_e2]) };
      const N = A[T];
      return N ? N.type === "no-state" || O[T] && (N.cmd === void 0 || p.value[N.cmd] && p.value[N.cmd].type === "no-state") ? N : Object.assign({ type: "toggle" }, N) : { type: "slot", slot: T };
    }));
  }), S = { $q: l, props: e, slots: t, emit: n, inFullscreen: o, toggleFullscreen: i, runCmd: M, isViewingSource: u, editLinkUrl: v, toolbarBackgroundClass: k, buttonProps: y, contentRef: c, buttons: b, setContent: Y };
  he(() => e.modelValue, (O) => {
    w !== O && (w = O, Y(O, true));
  }), he(v, (O) => {
    n(`link${O ? "Show" : "Hide"}`);
  });
  const P = m(() => e.toolbar && e.toolbar.length !== 0), F = m(() => {
    const O = {}, A = ($) => {
      $.key && (O[$.key] = { cmd: $.cmd, param: $.param });
    };
    return b.value.forEach(($) => {
      $.forEach((T) => {
        T.options ? T.options.forEach(A) : A(T);
      });
    }), O;
  }), z = m(() => o.value ? e.contentStyle : [{ minHeight: e.minHeight, height: e.height, maxHeight: e.maxHeight }, e.contentStyle]), L = m(() => `q-editor q-editor--${u.value === true ? "source" : "default"}` + (e.disable === true ? " disabled" : "") + (o.value === true ? " fullscreen column" : "") + (e.square === true ? " q-editor--square no-border-radius" : "") + (e.flat === true ? " q-editor--flat" : "") + (e.dense === true ? " q-editor--dense" : "") + (a.value === true ? " q-editor--dark q-dark" : "")), B = m(() => [e.contentClass, "q-editor__content", { col: o.value, "overflow-auto": o.value || e.maxHeight }]), D = m(() => e.disable === true ? { "aria-disabled": "true" } : {});
  function q() {
    if (c.value !== null) {
      const O = `inner${u.value === true ? "Text" : "HTML"}`, A = c.value[O];
      A !== e.modelValue && (w = A, n("update:modelValue", A));
    }
  }
  function R(O) {
    if (n("keydown", O), O.ctrlKey !== true || er(O) === true) {
      J();
      return;
    }
    const A = O.keyCode, $ = F.value[A];
    if ($ !== void 0) {
      const { cmd: T, param: N } = $;
      Ue(O), M(T, N, false);
    }
  }
  function C(O) {
    J(), n("click", O);
  }
  function H(O) {
    if (c.value !== null) {
      const { scrollTop: A, scrollHeight: $ } = c.value;
      _ = $ - A;
    }
    S.caret.save(), n("blur", O);
  }
  function Q(O) {
    We(() => {
      c.value !== null && _ !== void 0 && (c.value.scrollTop = c.value.scrollHeight - _);
    }), n("focus", O);
  }
  function K(O) {
    const A = d.value;
    if (A !== null && A.contains(O.target) === true && (O.relatedTarget === null || A.contains(O.relatedTarget) !== true)) {
      const $ = `inner${u.value === true ? "Text" : "HTML"}`;
      S.caret.restorePosition(c.value[$].length), J();
    }
  }
  function G(O) {
    const A = d.value;
    A !== null && A.contains(O.target) === true && (O.relatedTarget === null || A.contains(O.relatedTarget) !== true) && (S.caret.savePosition(), J());
  }
  function re() {
    _ = void 0;
  }
  function pe(O) {
    S.caret.save();
  }
  function Y(O, A) {
    if (c.value !== null) {
      A === true && S.caret.savePosition();
      const $ = `inner${u.value === true ? "Text" : "HTML"}`;
      c.value[$] = O, A === true && (S.caret.restorePosition(c.value[$].length), J());
    }
  }
  function M(O, A, $ = true) {
    ee(), S.caret.restore(), S.caret.apply(O, A, () => {
      ee(), S.caret.save(), $ && J();
    });
  }
  function J() {
    setTimeout(() => {
      v.value = null, r.$forceUpdate();
    }, 1);
  }
  function ee() {
    Or(() => {
      var _a3;
      (_a3 = c.value) == null ? void 0 : _a3.focus({ preventScroll: true });
    });
  }
  function ge() {
    return c.value;
  }
  return ft(() => {
    S.caret = r.caret = new d1(c.value, S), Y(e.modelValue), J(), document.addEventListener("selectionchange", pe);
  }), Xe(() => {
    document.removeEventListener("selectionchange", pe);
  }), Object.assign(r, { runCmd: M, refreshToolbar: J, focus: ee, getContentEl: ge }), () => {
    let O;
    if (P.value) {
      const A = [f("div", { key: "qedt_top", class: "q-editor__toolbar row no-wrap scroll-x" + k.value }, m1(S))];
      v.value !== null && A.push(f("div", { key: "qedt_btm", class: "q-editor__toolbar row no-wrap items-center scroll-x" + k.value }, g1(S))), O = f("div", { key: "toolbar_ctainer", class: "q-editor__toolbars-container" }, A);
    }
    return f("div", { ref: d, class: L.value, style: { height: o.value === true ? "100%" : null }, ...D.value, onFocusin: K, onFocusout: G }, [O, f("div", { ref: c, style: z.value, class: B.value, contenteditable: h.value, placeholder: e.placeholder, ...s.listeners.value, onInput: q, onKeydown: R, onClick: C, onBlur: H, onFocus: Q, onMousedown: re, onTouchstartPassive: re })]);
  };
} });
var ts = me({ name: "QItemLabel", props: { overline: Boolean, caption: Boolean, header: Boolean, lines: [Number, String] }, setup(e, { slots: t }) {
  const n = m(() => parseInt(e.lines, 10)), r = m(() => "q-item__label" + (e.overline === true ? " q-item__label--overline text-overline" : "") + (e.caption === true ? " q-item__label--caption text-caption" : "") + (e.header === true ? " q-item__label--header" : "") + (n.value === 1 ? " ellipsis" : "")), l = m(() => e.lines !== void 0 && n.value > 1 ? { overflow: "hidden", display: "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": n.value } : null);
  return () => f("div", { style: l.value, class: r.value }, Pe(t.default));
} }), tc = me({ name: "QSlideTransition", props: { appear: Boolean, duration: { type: Number, default: 300 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: n }) {
  let r = false, l, a, o = null, i = null, s, d;
  function c() {
    l == null ? void 0 : l(), l = null, r = false, o !== null && (clearTimeout(o), o = null), i !== null && (clearTimeout(i), i = null), a == null ? void 0 : a.removeEventListener("transitionend", s), s = null;
  }
  function v(_, w, k) {
    w !== void 0 && (_.style.height = `${w}px`), _.style.transition = `height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`, r = true, l = k;
  }
  function u(_, w) {
    _.style.overflowY = null, _.style.height = null, _.style.transition = null, c(), w !== d && n(w);
  }
  function h(_, w) {
    let k = 0;
    a = _, r === true ? (c(), k = _.offsetHeight === _.scrollHeight ? 0 : void 0) : (d = "hide", _.style.overflowY = "hidden"), v(_, k, w), o = setTimeout(() => {
      o = null, _.style.height = `${_.scrollHeight}px`, s = (y) => {
        i = null, (Object(y) !== y || y.target === _) && u(_, "show");
      }, _.addEventListener("transitionend", s), i = setTimeout(s, e.duration * 1.1);
    }, 100);
  }
  function g(_, w) {
    let k;
    a = _, r === true ? c() : (d = "show", _.style.overflowY = "hidden", k = _.scrollHeight), v(_, k, w), o = setTimeout(() => {
      o = null, _.style.height = 0, s = (y) => {
        i = null, (Object(y) !== y || y.target === _) && u(_, "hide");
      }, _.addEventListener("transitionend", s), i = setTimeout(s, e.duration * 1.1);
    }, 100);
  }
  return Xe(() => {
    r === true && c();
  }), () => f(Vt, { css: false, appear: e.appear, onEnter: h, onLeave: g }, t.default);
} }), y1 = { true: "inset", item: "item-inset", "item-thumbnail": "item-thumbnail-inset" }, iu = { xs: 2, sm: 4, md: 8, lg: 16, xl: 24 }, Gl = me({ name: "QSeparator", props: { ...lt, spaced: [Boolean, String], inset: [Boolean, String], vertical: Boolean, color: String, size: String }, setup(e) {
  const t = xe(), n = rt(e, t.proxy.$q), r = m(() => e.vertical === true ? "vertical" : "horizontal"), l = m(() => ` q-separator--${r.value}`), a = m(() => e.inset !== false ? `${l.value}-${y1[e.inset]}` : ""), o = m(() => `q-separator${l.value}${a.value}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (n.value === true ? " q-separator--dark" : "")), i = m(() => {
    const s = {};
    if (e.size !== void 0 && (s[e.vertical === true ? "width" : "height"] = e.size), e.spaced !== false) {
      const d = e.spaced === true ? `${iu.md}px` : e.spaced in iu ? `${iu[e.spaced]}px` : e.spaced, c = e.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
      s[`margin${c[0]}`] = s[`margin${c[1]}`] = d;
    }
    return s;
  });
  return () => f("hr", { class: o.value, style: i.value, "aria-orientation": r.value });
} }), Ll = _s({}), _1 = Object.keys(Va);
me({ name: "QExpansionItem", props: { ...Va, ...Lr, ...lt, icon: String, label: String, labelLines: [Number, String], caption: String, captionLines: [Number, String], dense: Boolean, toggleAriaLabel: String, expandIcon: String, expandedIcon: String, expandIconClass: [Array, String, Object], duration: {}, headerInsetLevel: Number, contentInsetLevel: Number, expandSeparator: Boolean, defaultOpened: Boolean, hideExpandIcon: Boolean, expandIconToggle: Boolean, switchToggleSide: Boolean, denseToggle: Boolean, group: String, popup: Boolean, headerStyle: [Array, String, Object], headerClass: [Array, String, Object] }, emits: [...Br, "click", "afterShow", "afterHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = rt(e, r), a = U(e.modelValue !== null ? e.modelValue : e.defaultOpened), o = U(null), i = _i(), { show: s, hide: d, toggle: c } = Fr({ showing: a });
  let v, u;
  const h = m(() => `q-expansion-item q-item-type q-expansion-item--${a.value === true ? "expanded" : "collapsed"} q-expansion-item--${e.popup === true ? "popup" : "standard"}`), g = m(() => e.contentInsetLevel === void 0 ? null : { ["padding" + (r.lang.rtl === true ? "Right" : "Left")]: e.contentInsetLevel * 56 + "px" }), _ = m(() => e.disable !== true && (e.href !== void 0 || e.to !== void 0 && e.to !== null && e.to !== "")), w = m(() => {
    const K = {};
    return _1.forEach((G) => {
      K[G] = e[G];
    }), K;
  }), k = m(() => _.value === true || e.expandIconToggle !== true), y = m(() => e.expandedIcon !== void 0 && a.value === true ? e.expandedIcon : e.expandIcon || r.iconSet.expansionItem[e.denseToggle === true ? "denseIcon" : "icon"]), p = m(() => e.disable !== true && (_.value === true || e.expandIconToggle === true)), b = m(() => ({ expanded: a.value === true, detailsId: i.value, toggle: c, show: s, hide: d })), S = m(() => {
    const K = e.toggleAriaLabel !== void 0 ? e.toggleAriaLabel : r.lang.label[a.value === true ? "collapse" : "expand"](e.label);
    return { role: "button", "aria-expanded": a.value === true ? "true" : "false", "aria-controls": i.value, "aria-label": K };
  });
  he(() => e.group, (K) => {
    u == null ? void 0 : u(), K !== void 0 && D();
  });
  function P(K) {
    _.value !== true && c(K), n("click", K);
  }
  function F(K) {
    K.keyCode === 13 && z(K, true);
  }
  function z(K, G) {
    var _a3;
    G !== true && K.qAvoidFocus !== true && ((_a3 = o.value) == null ? void 0 : _a3.focus()), c(K), Ue(K);
  }
  function L() {
    n("afterShow");
  }
  function B() {
    n("afterHide");
  }
  function D() {
    v === void 0 && (v = Ma()), a.value === true && (Ll[e.group] = v);
    const K = he(a, (re) => {
      re === true ? Ll[e.group] = v : Ll[e.group] === v && delete Ll[e.group];
    }), G = he(() => Ll[e.group], (re, pe) => {
      pe === v && re !== void 0 && re !== v && d();
    });
    u = () => {
      K(), G(), Ll[e.group] === v && delete Ll[e.group], u = void 0;
    };
  }
  function q() {
    const K = { class: [`q-focusable relative-position cursor-pointer${e.denseToggle === true && e.switchToggleSide === true ? " items-end" : ""}`, e.expandIconClass], side: e.switchToggleSide !== true, avatar: e.switchToggleSide }, G = [f(tt, { class: "q-expansion-item__toggle-icon" + (e.expandedIcon === void 0 && a.value === true ? " q-expansion-item__toggle-icon--rotated" : ""), name: y.value })];
    return p.value === true && (Object.assign(K, { tabindex: 0, ...S.value, onClick: z, onKeyup: F }), G.unshift(f("div", { ref: o, class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded", tabindex: -1 }))), f(bn, K, () => G);
  }
  function R() {
    let K;
    return t.header !== void 0 ? K = [].concat(t.header(b.value)) : (K = [f(bn, () => [f(ts, { lines: e.labelLines }, () => e.label || ""), e.caption ? f(ts, { lines: e.captionLines, caption: true }, () => e.caption) : null])], e.icon && K[e.switchToggleSide === true ? "push" : "unshift"](f(bn, { side: e.switchToggleSide === true, avatar: e.switchToggleSide !== true }, () => f(tt, { name: e.icon })))), e.disable !== true && e.hideExpandIcon !== true && K[e.switchToggleSide === true ? "unshift" : "push"](q()), K;
  }
  function C() {
    const K = { ref: "item", style: e.headerStyle, class: e.headerClass, dark: l.value, disable: e.disable, dense: e.dense, insetLevel: e.headerInsetLevel };
    return k.value === true && (K.clickable = true, K.onClick = P, Object.assign(K, _.value === true ? w.value : S.value)), f(Mr, K, R);
  }
  function H() {
    return dn(f("div", { key: "e-content", class: "q-expansion-item__content relative-position", style: g.value, id: i.value }, Pe(t.default)), [[am, a.value]]);
  }
  function Q() {
    const K = [C(), f(tc, { duration: e.duration, onShow: L, onHide: B }, H)];
    return e.expandSeparator === true && K.push(f(Gl, { class: "q-expansion-item__border q-expansion-item__border--top absolute-top", dark: l.value }), f(Gl, { class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom", dark: l.value })), K;
  }
  return e.group !== void 0 && D(), Xe(() => {
    u == null ? void 0 : u();
  }), () => f("div", { class: h.value }, [f("div", { class: "q-expansion-item__container relative-position" }, Q())]);
} });
var w1 = ["top", "right", "bottom", "left"], ns = { type: { type: String, default: "a" }, outline: Boolean, push: Boolean, flat: Boolean, unelevated: Boolean, color: String, textColor: String, glossy: Boolean, square: Boolean, padding: String, label: { type: [String, Number], default: "" }, labelPosition: { type: String, default: "right", validator: (e) => w1.includes(e) }, externalLabel: Boolean, hideLabel: { type: Boolean }, labelClass: [Array, String, Object], labelStyle: [Array, String, Object], disable: Boolean, tabindex: [Number, String] };
function Lh(e, t) {
  return { formClass: m(() => `q-fab--form-${e.square === true ? "square" : "rounded"}`), stacked: m(() => e.externalLabel === false && ["top", "bottom"].includes(e.labelPosition)), labelProps: m(() => {
    if (e.externalLabel === true) {
      const n = e.hideLabel === null ? t.value === false : e.hideLabel;
      return { action: "push", data: { class: [e.labelClass, `q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}` + (n === true ? " q-fab__label--external-hidden" : "")], style: e.labelStyle } };
    }
    return { action: ["left", "top"].includes(e.labelPosition) ? "unshift" : "push", data: { class: [e.labelClass, `q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}` + (e.hideLabel === true ? " q-fab__label--internal-hidden" : "")], style: e.labelStyle } };
  }) };
}
var x1 = ["up", "right", "down", "left"], S1 = ["left", "center", "right"];
me({ name: "QFab", props: { ...ns, ...Lr, icon: String, activeIcon: String, hideIcon: Boolean, hideLabel: { ...ns.hideLabel, default: null }, direction: { type: String, default: "right", validator: (e) => x1.includes(e) }, persistent: Boolean, verticalActionsAlign: { type: String, default: "center", validator: (e) => S1.includes(e) } }, emits: Br, setup(e, { slots: t }) {
  const n = U(null), r = U(e.modelValue === true), l = _i(), { proxy: { $q: a } } = xe(), { formClass: o, labelProps: i } = Lh(e, r), s = m(() => e.persistent !== true), { hide: d, toggle: c } = Fr({ showing: r, hideOnRouteChange: s }), v = m(() => ({ opened: r.value })), u = m(() => `q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${o.value}` + (r.value === true ? " q-fab--opened" : " q-fab--closed")), h = m(() => `q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${r.value === true ? "opened" : "closed"}`), g = m(() => {
    const y = { id: l.value, role: "menu" };
    return r.value !== true && (y["aria-hidden"] = "true"), y;
  }), _ = m(() => `q-fab__icon-holder  q-fab__icon-holder--${r.value === true ? "opened" : "closed"}`);
  function w(y, p) {
    const b = t[y], S = `q-fab__${y} absolute-full`;
    return b === void 0 ? f(tt, { class: S, name: e[p] || a.iconSet.fab[p] }) : f("div", { class: S }, b(v.value));
  }
  function k() {
    const y = [];
    return e.hideIcon !== true && y.push(f("div", { class: _.value }, [w("icon", "icon"), w("active-icon", "activeIcon")])), (e.label !== "" || t.label !== void 0) && y[i.value.action](f("div", i.value.data, t.label !== void 0 ? t.label(v.value) : [e.label])), Mt(t.tooltip, y);
  }
  return pn(wm, { showing: r, onChildClick(y) {
    var _a3;
    d(y), (y == null ? void 0 : y.qAvoidFocus) !== true && ((_a3 = n.value) == null ? void 0 : _a3.$el.focus());
  } }), () => f("div", { class: u.value }, [f(et, { ref: n, class: o.value, ...e, noWrap: true, stack: e.stacked, align: void 0, icon: void 0, label: void 0, noCaps: true, fab: true, "aria-expanded": r.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": l.value, onClick: c }, k), f("div", { class: h.value, ...g.value }, Pe(t.default))]);
} });
var Bh = { start: "self-end", center: "self-center", end: "self-start" }, C1 = Object.keys(Bh);
me({ name: "QFabAction", props: { ...ns, icon: { type: String, default: "" }, anchor: { type: String, validator: (e) => C1.includes(e) }, to: [String, Object], replace: Boolean }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const r = Rt(wm, () => ({ showing: { value: true }, onChildClick: Ct })), { formClass: l, labelProps: a } = Lh(e, r.showing), o = m(() => {
    const v = Bh[e.anchor];
    return l.value + (v !== void 0 ? ` ${v}` : "");
  }), i = m(() => e.disable === true || r.showing.value !== true);
  function s(v) {
    r.onChildClick(v), n("click", v);
  }
  function d() {
    const v = [];
    return t.icon !== void 0 ? v.push(t.icon()) : e.icon !== "" && v.push(f(tt, { name: e.icon })), (e.label !== "" || t.label !== void 0) && v[a.value.action](f("div", a.value.data, t.label !== void 0 ? t.label() : [e.label])), Mt(t.default, v);
  }
  const c = xe();
  return Object.assign(c.proxy, { click: s }), () => f(et, { class: o.value, ...e, noWrap: true, stack: e.stacked, icon: void 0, label: void 0, noCaps: true, fabMini: true, disable: i.value, onClick: s }, d);
} });
function k1({ validate: e, resetValidation: t, requiresQForm: n }) {
  const r = Rt(xm, false);
  if (r !== false) {
    const { props: l, proxy: a } = xe();
    Object.assign(a, { validate: e, resetValidation: t }), he(() => l.disable, (o) => {
      o === true ? (typeof t == "function" && t(), r.unbindComponent(a)) : r.bindComponent(a);
    }), ft(() => {
      l.disable !== true && r.bindComponent(a);
    }), Xe(() => {
      l.disable !== true && r.unbindComponent(a);
    });
  } else n === true && console.error("Parent QForm not found on useFormChild()!");
}
var T1 = [true, false, "ondemand"], q1 = { modelValue: {}, error: { type: Boolean, default: null }, errorMessage: String, noErrorIcon: Boolean, rules: Array, reactiveRules: Boolean, lazyRules: { type: [Boolean, String], default: false, validator: (e) => T1.includes(e) } };
function E1(e, t) {
  const { props: n, proxy: r } = xe(), l = U(false), a = U(null), o = U(false);
  k1({ validate: _, resetValidation: g });
  let i = 0, s;
  const d = m(() => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0), c = m(() => n.disable !== true && d.value === true && t.value === false), v = m(() => n.error === true || l.value === true), u = m(() => typeof n.errorMessage == "string" && n.errorMessage.length !== 0 ? n.errorMessage : a.value);
  he(() => n.modelValue, () => {
    o.value = true, c.value === true && n.lazyRules === false && w();
  });
  function h() {
    n.lazyRules !== "ondemand" && c.value === true && o.value === true && w();
  }
  he(() => n.reactiveRules, (k) => {
    k === true ? s === void 0 && (s = he(() => n.rules, h, { immediate: true, deep: true })) : s !== void 0 && (s(), s = void 0);
  }, { immediate: true }), he(() => n.lazyRules, h), he(e, (k) => {
    k === true ? o.value = true : c.value === true && n.lazyRules !== "ondemand" && w();
  });
  function g() {
    i++, t.value = false, o.value = false, l.value = false, a.value = null, w.cancel();
  }
  function _(k = n.modelValue) {
    if (n.disable === true || d.value === false) return true;
    const y = ++i, p = t.value !== true ? () => {
      o.value = true;
    } : () => {
    }, b = (P, F) => {
      P === true && p(), l.value = P, a.value = F || null, t.value = false;
    }, S = [];
    for (let P = 0; P < n.rules.length; P++) {
      const F = n.rules[P];
      let z;
      if (typeof F == "function" ? z = F(k, bo) : typeof F == "string" && bo[F] !== void 0 && (z = bo[F](k)), z === false || typeof z == "string") return b(true, z), false;
      z !== true && z !== void 0 && S.push(z);
    }
    return S.length === 0 ? (b(false), true) : (t.value = true, Promise.all(S).then((P) => {
      if (P === void 0 || Array.isArray(P) === false || P.length === 0) return y === i && b(false), true;
      const F = P.find((z) => z === false || typeof z == "string");
      return y === i && b(F !== void 0, F), F === void 0;
    }, (P) => (y === i && (console.error(P), b(true)), false)));
  }
  const w = Pr(_, 0);
  return Xe(() => {
    s == null ? void 0 : s(), w.cancel();
  }), Object.assign(r, { resetValidation: g, validate: _ }), Dt(r, "hasError", () => v.value), { isDirtyModel: o, hasRules: d, hasError: v, errorMessage: u, validate: _, resetValidation: g };
}
function Zl(e) {
  return e != null && ("" + e).length !== 0;
}
var Fh = { ...lt, ...q1, label: String, stackLabel: Boolean, hint: String, hideHint: Boolean, prefix: String, suffix: String, labelColor: String, color: String, bgColor: String, filled: Boolean, outlined: Boolean, borderless: Boolean, standout: [Boolean, String], square: Boolean, loading: Boolean, labelSlot: Boolean, bottomSlots: Boolean, hideBottomSpace: Boolean, rounded: Boolean, dense: Boolean, itemAligned: Boolean, counter: Boolean, clearable: Boolean, clearIcon: String, disable: Boolean, readonly: Boolean, autofocus: Boolean, for: String }, xi = { ...Fh, maxlength: [Number, String] }, Si = ["update:modelValue", "clear", "focus", "blur"];
function Ci({ requiredForAttr: e = true, tagProp: t, changeEvent: n = false } = {}) {
  const { props: r, proxy: l } = xe(), a = rt(r, l.$q), o = _i({ required: e, getValue: () => r.for });
  return { requiredForAttr: e, changeEvent: n, tag: t === true ? m(() => r.tag) : { value: "label" }, isDark: a, editable: m(() => r.disable !== true && r.readonly !== true), innerLoading: U(false), focused: U(false), hasPopupOpen: false, splitAttrs: $h(), targetUid: o, rootRef: U(null), targetRef: U(null), controlRef: U(null) };
}
function ki(e) {
  const { props: t, emit: n, slots: r, attrs: l, proxy: a } = xe(), { $q: o } = a;
  let i = null;
  e.hasValue === void 0 && (e.hasValue = m(() => Zl(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (G) => {
    n("update:modelValue", G);
  }), e.controlEvents === void 0 && (e.controlEvents = { onFocusin: L, onFocusout: B }), Object.assign(e, { clearValue: D, onControlFocusin: L, onControlFocusout: B, focus: F }), e.computedCounter === void 0 && (e.computedCounter = m(() => {
    if (t.counter !== false) {
      const G = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === true ? t.modelValue.length : 0, re = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
      return G + (re !== void 0 ? " / " + re : "");
    }
  }));
  const { isDirtyModel: s, hasRules: d, hasError: c, errorMessage: v, resetValidation: u } = E1(e.focused, e.innerLoading), h = e.floatingLabel !== void 0 ? m(() => t.stackLabel === true || e.focused.value === true || e.floatingLabel.value === true) : m(() => t.stackLabel === true || e.focused.value === true || e.hasValue.value === true), g = m(() => t.bottomSlots === true || t.hint !== void 0 || d.value === true || t.counter === true || t.error !== null), _ = m(() => t.filled === true ? "filled" : t.outlined === true ? "outlined" : t.borderless === true ? "borderless" : t.standout ? "standout" : "standard"), w = m(() => `q-field row no-wrap items-start q-field--${_.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === true ? " q-field--rounded" : "") + (t.square === true ? " q-field--square" : "") + (h.value === true ? " q-field--float" : "") + (y.value === true ? " q-field--labeled" : "") + (t.dense === true ? " q-field--dense" : "") + (t.itemAligned === true ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === true ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === true ? " q-field--focused" : "") + (c.value === true ? " q-field--error" : "") + (c.value === true || e.focused.value === true ? " q-field--highlighted" : "") + (t.hideBottomSpace !== true && g.value === true ? " q-field--with-bottom" : "") + (t.disable === true ? " q-field--disabled" : t.readonly === true ? " q-field--readonly" : "")), k = m(() => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (c.value === true ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === true ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")), y = m(() => t.labelSlot === true || t.label !== void 0), p = m(() => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && c.value !== true ? ` text-${t.labelColor}` : "")), b = m(() => ({ id: e.targetUid.value, editable: e.editable.value, focused: e.focused.value, floatingLabel: h.value, modelValue: t.modelValue, emitValue: e.emitValue })), S = m(() => {
    const G = {};
    return e.targetUid.value && (G.for = e.targetUid.value), t.disable === true && (G["aria-disabled"] = "true"), G;
  });
  function P() {
    var _a3;
    const G = document.activeElement;
    let re = (_a3 = e.targetRef) == null ? void 0 : _a3.value;
    re && (G === null || G.id !== e.targetUid.value) && (re.hasAttribute("tabindex") === true || (re = re.querySelector("[tabindex]")), re !== G && (re == null ? void 0 : re.focus({ preventScroll: true })));
  }
  function F() {
    Or(P);
  }
  function z() {
    uy(P);
    const G = document.activeElement;
    G !== null && e.rootRef.value.contains(G) && G.blur();
  }
  function L(G) {
    i !== null && (clearTimeout(i), i = null), e.editable.value === true && e.focused.value === false && (e.focused.value = true, n("focus", G));
  }
  function B(G, re) {
    i !== null && clearTimeout(i), i = setTimeout(() => {
      i = null, !(document.hasFocus() === true && (e.hasPopupOpen === true || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement) !== false)) && (e.focused.value === true && (e.focused.value = false, n("blur", G)), re == null ? void 0 : re());
    });
  }
  function D(G) {
    var _a3;
    Ue(G), o.platform.is.mobile !== true ? (((_a3 = e.targetRef) == null ? void 0 : _a3.value) || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === true && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), n("update:modelValue", null), e.changeEvent === true && n("change", null), n("clear", t.modelValue), We(() => {
      const re = s.value;
      u(), s.value = re;
    });
  }
  function q(G) {
    [13, 32].includes(G.keyCode) && D(G);
  }
  function R() {
    const G = [];
    return r.prepend !== void 0 && G.push(f("div", { class: "q-field__prepend q-field__marginal row no-wrap items-center", key: "prepend", onClick: It }, r.prepend())), G.push(f("div", { class: "q-field__control-container col relative-position row no-wrap q-anchor--skip" }, C())), c.value === true && t.noErrorIcon === false && G.push(Q("error", [f(tt, { name: o.iconSet.field.error, color: "negative" })])), t.loading === true || e.innerLoading.value === true ? G.push(Q("inner-loading-append", r.loading !== void 0 ? r.loading() : [f(Sn, { color: t.color })])) : t.clearable === true && e.hasValue.value === true && e.editable.value === true && G.push(Q("inner-clearable-append", [f(tt, { class: "q-field__focusable-action", name: t.clearIcon || o.iconSet.field.clear, tabindex: 0, role: "button", "aria-hidden": "false", "aria-label": o.lang.label.clear, onKeyup: q, onClick: D })])), r.append !== void 0 && G.push(f("div", { class: "q-field__append q-field__marginal row no-wrap items-center", key: "append", onClick: It }, r.append())), e.getInnerAppend !== void 0 && G.push(Q("inner-append", e.getInnerAppend())), e.getControlChild !== void 0 && G.push(e.getControlChild()), G;
  }
  function C() {
    const G = [];
    return t.prefix !== void 0 && t.prefix !== null && G.push(f("div", { class: "q-field__prefix no-pointer-events row items-center" }, t.prefix)), e.getShadowControl !== void 0 && e.hasShadow.value === true && G.push(e.getShadowControl()), e.getControl !== void 0 ? G.push(e.getControl()) : r.rawControl !== void 0 ? G.push(r.rawControl()) : r.control !== void 0 && G.push(f("div", { ref: e.targetRef, class: "q-field__native row", tabindex: -1, ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0 }, r.control(b.value))), y.value === true && G.push(f("div", { class: p.value }, Pe(r.label, t.label))), t.suffix !== void 0 && t.suffix !== null && G.push(f("div", { class: "q-field__suffix no-pointer-events row items-center" }, t.suffix)), G.concat(Pe(r.default));
  }
  function H() {
    let G, re;
    c.value === true ? v.value !== null ? (G = [f("div", { role: "alert" }, v.value)], re = `q--slot-error-${v.value}`) : (G = Pe(r.error), re = "q--slot-error") : (t.hideHint !== true || e.focused.value === true) && (t.hint !== void 0 ? (G = [f("div", t.hint)], re = `q--slot-hint-${t.hint}`) : (G = Pe(r.hint), re = "q--slot-hint"));
    const pe = t.counter === true || r.counter !== void 0;
    if (t.hideBottomSpace === true && pe === false && G === void 0) return;
    const Y = f("div", { key: re, class: "q-field__messages col" }, G);
    return f("div", { class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== true ? "animated" : "stale"), onClick: It }, [t.hideBottomSpace === true ? Y : f(Vt, { name: "q-transition--field-message" }, () => Y), pe === true ? f("div", { class: "q-field__counter" }, r.counter !== void 0 ? r.counter() : e.computedCounter.value) : null]);
  }
  function Q(G, re) {
    return re === null ? null : f("div", { key: G, class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip" }, re);
  }
  let K = false;
  return In(() => {
    K = true;
  }), ql(() => {
    K === true && t.autofocus === true && a.focus();
  }), t.autofocus === true && ft(() => {
    a.focus();
  }), Xe(() => {
    i !== null && clearTimeout(i);
  }), Object.assign(a, { focus: F, blur: z }), function() {
    const re = e.getControl === void 0 && r.control === void 0 ? { ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0, ...S.value } : S.value;
    return f(e.tag.value, { ref: e.rootRef, class: [w.value, l.class], style: l.style, ...re }, [r.before !== void 0 ? f("div", { class: "q-field__before q-field__marginal row no-wrap items-center", onClick: It }, r.before()) : null, f("div", { class: "q-field__inner relative-position col self-stretch" }, [f("div", { ref: e.controlRef, class: k.value, tabindex: -1, ...e.controlEvents }, R()), g.value === true ? H() : null]), r.after !== void 0 ? f("div", { class: "q-field__after q-field__marginal row no-wrap items-center", onClick: It }, r.after()) : null]);
  };
}
var M1 = me({ name: "QField", inheritAttrs: false, props: { ...xi, tag: { type: String, default: "label" } }, emits: Si, setup() {
  return ki(Ci({ tagProp: true }));
} });
function sr(e, t, n, r) {
  const l = [];
  return e.forEach((a) => {
    r(a) === true ? l.push(a) : t.push({ failedPropValidation: n, file: a });
  }), l;
}
function no(e) {
  (e == null ? void 0 : e.dataTransfer) && (e.dataTransfer.dropEffect = "copy"), Ue(e);
}
var Oh = { multiple: Boolean, accept: String, capture: String, maxFileSize: [Number, String], maxTotalSize: [Number, String], maxFiles: [Number, String], filter: Function }, Vh = ["rejected"];
function Dh({ editable: e, dnd: t, getFileInput: n, addFilesToQueue: r }) {
  const { props: l, emit: a, proxy: o } = xe(), i = U(null), s = m(() => l.accept !== void 0 ? l.accept.split(",").map((y) => (y = y.trim(), y === "*" ? "*/" : (y.endsWith("/*") && (y = y.slice(0, y.length - 1)), y.toUpperCase()))) : null), d = m(() => parseInt(l.maxFiles, 10)), c = m(() => parseInt(l.maxTotalSize, 10));
  function v(y) {
    var _a3;
    if (e.value) if (y !== Object(y) && (y = { target: null }), ((_a3 = y.target) == null ? void 0 : _a3.matches('input[type="file"]')) === true) y.clientX === 0 && y.clientY === 0 && St(y);
    else {
      const p = n();
      p !== y.target && (p == null ? void 0 : p.click(y));
    }
  }
  function u(y) {
    e.value && y && r(null, y);
  }
  function h(y, p, b, S) {
    let P = Array.from(p || y.target.files);
    const F = [], z = () => {
      F.length !== 0 && a("rejected", F);
    };
    if (l.accept !== void 0 && s.value.indexOf("*/") === -1 && (P = sr(P, F, "accept", (L) => s.value.some((B) => L.type.toUpperCase().startsWith(B) || L.name.toUpperCase().endsWith(B))), P.length === 0)) return z();
    if (l.maxFileSize !== void 0) {
      const L = parseInt(l.maxFileSize, 10);
      if (P = sr(P, F, "max-file-size", (B) => B.size <= L), P.length === 0) return z();
    }
    if (l.multiple !== true && P.length !== 0 && (P = [P[0]]), P.forEach((L) => {
      L.__key = L.webkitRelativePath + L.lastModified + L.name + L.size;
    }), S === true) {
      const L = b.map((B) => B.__key);
      P = sr(P, F, "duplicate", (B) => L.includes(B.__key) === false);
    }
    if (P.length === 0) return z();
    if (l.maxTotalSize !== void 0) {
      let L = S === true ? b.reduce((B, D) => B + D.size, 0) : 0;
      if (P = sr(P, F, "max-total-size", (B) => (L += B.size, L <= c.value)), P.length === 0) return z();
    }
    if (typeof l.filter == "function") {
      const L = l.filter(P);
      P = sr(P, F, "filter", (B) => L.includes(B));
    }
    if (l.maxFiles !== void 0) {
      let L = S === true ? b.length : 0;
      if (P = sr(P, F, "max-files", () => (L++, L <= d.value)), P.length === 0) return z();
    }
    if (z(), P.length !== 0) return P;
  }
  function g(y) {
    no(y), t.value !== true && (t.value = true);
  }
  function _(y) {
    Ue(y), (y.relatedTarget !== null || ze.is.safari !== true ? y.relatedTarget !== i.value : document.elementsFromPoint(y.clientX, y.clientY).includes(i.value) === false) === true && (t.value = false);
  }
  function w(y) {
    no(y);
    const p = y.dataTransfer.files;
    p.length !== 0 && r(null, p), t.value = false;
  }
  function k(y) {
    if (t.value === true) return f("div", { ref: i, class: `q-${y}__dnd absolute-full`, onDragenter: no, onDragover: no, onDragleave: _, onDrop: w });
  }
  return Object.assign(o, { pickFiles: v, addFiles: u }), { pickFiles: v, addFiles: u, onDragover: g, onDragleave: _, processFiles: h, getDndNode: k, maxFilesNumber: d, maxTotalSizeNumber: c };
}
function Ih(e, t) {
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
  return m(t === true ? () => {
    if (e.type === "file") return n();
  } : n);
}
me({ name: "QFile", inheritAttrs: false, props: { ...Fh, ...Cn, ...Oh, modelValue: [File, FileList, Array], append: Boolean, useChips: Boolean, displayValue: [String, Number], tabindex: { type: [String, Number], default: 0 }, counterLabel: Function, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...Si, ...Vh], setup(e, { slots: t, emit: n, attrs: r }) {
  const { proxy: l } = xe(), a = Ci(), o = U(null), i = U(false), s = Ns(e), { pickFiles: d, onDragover: c, onDragleave: v, processFiles: u, getDndNode: h } = Dh({ editable: a.editable, dnd: i, getFileInput: q, addFilesToQueue: R }), g = Ih(e), _ = m(() => Object(e.modelValue) === e.modelValue ? "length" in e.modelValue ? Array.from(e.modelValue) : [e.modelValue] : []), w = m(() => Zl(_.value)), k = m(() => _.value.map((K) => K.name).join(", ")), y = m(() => ju(_.value.reduce((K, G) => K + G.size, 0))), p = m(() => ({ totalSize: y.value, filesNumber: _.value.length, maxFiles: e.maxFiles })), b = m(() => ({ tabindex: -1, type: "file", title: "", accept: e.accept, capture: e.capture, name: s.value, ...r, id: a.targetUid.value, disabled: a.editable.value !== true })), S = m(() => "q-file q-field--auto-height" + (i.value === true ? " q-file--dnd" : "")), P = m(() => e.multiple === true && e.append === true);
  function F(K) {
    const G = _.value.slice();
    G.splice(K, 1), L(G);
  }
  function z(K) {
    const G = _.value.indexOf(K);
    G !== -1 && F(G);
  }
  function L(K) {
    n("update:modelValue", e.multiple === true ? K : K[0]);
  }
  function B(K) {
    K.keyCode === 13 && It(K);
  }
  function D(K) {
    (K.keyCode === 13 || K.keyCode === 32) && d(K);
  }
  function q() {
    return o.value;
  }
  function R(K, G) {
    const re = u(K, G, _.value, P.value), pe = q();
    pe != null && (pe.value = ""), re !== void 0 && ((e.multiple === true ? e.modelValue && re.every((Y) => _.value.includes(Y)) : e.modelValue === re[0]) || L(P.value === true ? _.value.concat(re) : re));
  }
  function C() {
    return [f("input", { class: [e.inputClass, "q-file__filler"], style: e.inputStyle })];
  }
  function H() {
    if (t.file !== void 0) return _.value.length === 0 ? C() : _.value.map((G, re) => t.file({ index: re, file: G, ref: this }));
    if (t.selected !== void 0) return _.value.length === 0 ? C() : t.selected({ files: _.value, ref: this });
    if (e.useChips === true) return _.value.length === 0 ? C() : _.value.map((G, re) => f(lh, { key: "file-" + re, removable: a.editable.value, dense: true, textColor: e.color, tabindex: e.tabindex, onRemove: () => {
      F(re);
    } }, () => f("span", { class: "ellipsis", textContent: G.name })));
    const K = e.displayValue !== void 0 ? e.displayValue : k.value;
    return K.length !== 0 ? [f("div", { class: e.inputClass, style: e.inputStyle, textContent: K })] : C();
  }
  function Q() {
    const K = { ref: o, ...b.value, ...g.value, class: "q-field__input fit absolute-full cursor-pointer", onChange: R };
    return e.multiple === true && (K.multiple = true), f("input", K);
  }
  return Object.assign(a, { fieldClass: S, emitValue: L, hasValue: w, inputRef: o, innerValue: _, floatingLabel: m(() => w.value === true || Zl(e.displayValue)), computedCounter: m(() => {
    if (e.counterLabel !== void 0) return e.counterLabel(p.value);
    const K = e.maxFiles;
    return `${_.value.length}${K !== void 0 ? " / " + K : ""} (${y.value})`;
  }), getControlChild: () => h("file"), getControl: () => {
    const K = { ref: a.targetRef, class: "q-field__native row items-center cursor-pointer", tabindex: e.tabindex };
    return a.editable.value === true && Object.assign(K, { onDragover: c, onDragleave: v, onKeydown: B, onKeyup: D }), f("div", K, [Q()].concat(H()));
  } }), Object.assign(l, { removeAtIndex: F, removeFile: z, getNativeElement: () => o.value }), Dt(l, "nativeEl", () => o.value), ki(a);
} });
var R1 = me({ name: "QFooter", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = Rt(tr, ut);
  if (l === ut) return console.error("QFooter needs to be child of QLayout"), ut;
  const a = U(parseInt(e.heightHint, 10)), o = U(true), i = U(an.value === true || l.isContainer.value === true ? 0 : window.innerHeight), s = m(() => e.reveal === true || l.view.value.indexOf("F") !== -1 || r.platform.is.ios && l.isContainer.value === true), d = m(() => l.isContainer.value === true ? l.containerHeight.value : i.value), c = m(() => {
    if (e.modelValue !== true) return 0;
    if (s.value === true) return o.value === true ? a.value : 0;
    const S = l.scroll.value.position + d.value + a.value - l.height.value;
    return S > 0 ? S : 0;
  }), v = m(() => e.modelValue !== true || s.value === true && o.value !== true), u = m(() => e.modelValue === true && v.value === true && e.reveal === true), h = m(() => "q-footer q-layout__section--marginal " + (s.value === true ? "fixed" : "absolute") + "-bottom" + (e.bordered === true ? " q-footer--bordered" : "") + (v.value === true ? " q-footer--hidden" : "") + (e.modelValue !== true ? " q-layout--prevent-focus" + (s.value !== true ? " hidden" : "") : "")), g = m(() => {
    const S = l.rows.value.bottom, P = {};
    return S[0] === "l" && l.left.space === true && (P[r.lang.rtl === true ? "right" : "left"] = `${l.left.size}px`), S[2] === "r" && l.right.space === true && (P[r.lang.rtl === true ? "left" : "right"] = `${l.right.size}px`), P;
  });
  function _(S, P) {
    l.update("footer", S, P);
  }
  function w(S, P) {
    S.value !== P && (S.value = P);
  }
  function k({ height: S }) {
    w(a, S), _("size", S);
  }
  function y() {
    if (e.reveal !== true) return;
    const { direction: S, position: P, inflectionPoint: F } = l.scroll.value;
    w(o, S === "up" || P - F < 100 || l.height.value - d.value - P - a.value < 300);
  }
  function p(S) {
    u.value === true && w(o, true), n("focusin", S);
  }
  he(() => e.modelValue, (S) => {
    _("space", S), w(o, true), l.animate();
  }), he(c, (S) => {
    _("offset", S);
  }), he(() => e.reveal, (S) => {
    S === false && w(o, e.modelValue);
  }), he(o, (S) => {
    l.animate(), n("reveal", S);
  }), he([a, l.scroll, l.height], y), he(() => r.screen.height, (S) => {
    l.isContainer.value !== true && w(i, S);
  });
  const b = {};
  return l.instances.footer = b, e.modelValue === true && _("size", a.value), _("space", e.modelValue), _("offset", c.value), Xe(() => {
    l.instances.footer === b && (l.instances.footer = void 0, _("size", 0), _("offset", 0), _("space", false));
  }), () => {
    const S = Mt(t.default, [f(Xl, { debounce: 0, onResize: k })]);
    return e.elevated === true && S.push(f("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), f("footer", { class: h.value, style: g.value, onFocusin: p }, S);
  };
} });
me({ name: "QForm", props: { autofocus: Boolean, noErrorFocus: Boolean, noResetFocus: Boolean, greedy: Boolean, onSubmit: Function }, emits: ["reset", "validationSuccess", "validationError"], setup(e, { slots: t, emit: n }) {
  const r = xe(), l = U(null);
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
          const P = p.find(({ comp: F }) => typeof F.focus == "function" && _l(F.$) === false);
          P !== void 0 && P.comp.focus();
        }
      }
      return false;
    });
  }
  function s() {
    a++, o.forEach((h) => {
      typeof h.resetValidation == "function" && h.resetValidation();
    });
  }
  function d(h) {
    h !== void 0 && Ue(h);
    const g = a + 1;
    i().then((_) => {
      g === a && _ === true && (e.onSubmit !== void 0 ? n("submit", h) : (h == null ? void 0 : h.target) !== void 0 && typeof h.target.submit == "function" && h.target.submit());
    });
  }
  function c(h) {
    h !== void 0 && Ue(h), n("reset"), We(() => {
      s(), e.autofocus === true && e.noResetFocus !== true && v();
    });
  }
  function v() {
    Or(() => {
      var _a3;
      if (l.value === null) return;
      (_a3 = l.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || l.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || l.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(l.value.querySelectorAll("[tabindex]"), (g) => g.tabIndex !== -1)) == null ? void 0 : _a3.focus({ preventScroll: true });
    });
  }
  pn(xm, { bindComponent(h) {
    o.push(h);
  }, unbindComponent(h) {
    const g = o.indexOf(h);
    g !== -1 && o.splice(g, 1);
  } });
  let u = false;
  return In(() => {
    u = true;
  }), ql(() => {
    u === true && e.autofocus === true && v();
  }), ft(() => {
    e.autofocus === true && v();
  }), Object.assign(r.proxy, { validate: i, resetValidation: s, submit: d, reset: c, focus: v, getValidationComponents: () => o }), () => f("form", { class: "q-form", ref: l, onSubmit: d, onReset: c }, Pe(t.default));
} });
var A1 = me({ name: "QHeader", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, revealOffset: { type: Number, default: 250 }, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = Rt(tr, ut);
  if (l === ut) return console.error("QHeader needs to be child of QLayout"), ut;
  const a = U(parseInt(e.heightHint, 10)), o = U(true), i = m(() => e.reveal === true || l.view.value.indexOf("H") !== -1 || r.platform.is.ios && l.isContainer.value === true), s = m(() => {
    if (e.modelValue !== true) return 0;
    if (i.value === true) return o.value === true ? a.value : 0;
    const y = a.value - l.scroll.value.position;
    return y > 0 ? y : 0;
  }), d = m(() => e.modelValue !== true || i.value === true && o.value !== true), c = m(() => e.modelValue === true && d.value === true && e.reveal === true), v = m(() => "q-header q-layout__section--marginal " + (i.value === true ? "fixed" : "absolute") + "-top" + (e.bordered === true ? " q-header--bordered" : "") + (d.value === true ? " q-header--hidden" : "") + (e.modelValue !== true ? " q-layout--prevent-focus" : "")), u = m(() => {
    const y = l.rows.value.top, p = {};
    return y[0] === "l" && l.left.space === true && (p[r.lang.rtl === true ? "right" : "left"] = `${l.left.size}px`), y[2] === "r" && l.right.space === true && (p[r.lang.rtl === true ? "left" : "right"] = `${l.right.size}px`), p;
  });
  function h(y, p) {
    l.update("header", y, p);
  }
  function g(y, p) {
    y.value !== p && (y.value = p);
  }
  function _({ height: y }) {
    g(a, y), h("size", y);
  }
  function w(y) {
    c.value === true && g(o, true), n("focusin", y);
  }
  he(() => e.modelValue, (y) => {
    h("space", y), g(o, true), l.animate();
  }), he(s, (y) => {
    h("offset", y);
  }), he(() => e.reveal, (y) => {
    y === false && g(o, e.modelValue);
  }), he(o, (y) => {
    l.animate(), n("reveal", y);
  }), he(l.scroll, (y) => {
    e.reveal === true && g(o, y.direction === "up" || y.position <= e.revealOffset || y.position - y.inflectionPoint < 100);
  });
  const k = {};
  return l.instances.header = k, e.modelValue === true && h("size", a.value), h("space", e.modelValue), h("offset", s.value), Xe(() => {
    l.instances.header === k && (l.instances.header = void 0, h("size", 0), h("offset", 0), h("space", false));
  }), () => {
    const y = Oa(t.default, []);
    return e.elevated === true && y.push(f("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), y.push(f(Xl, { debounce: 0, onResize: _ })), f("header", { class: v.value, style: u.value, onFocusin: w }, y);
  };
} }), nc = { ratio: [String, Number] };
function lc(e, t) {
  return m(() => {
    const n = Number(e.ratio || (t !== void 0 ? t.value : void 0));
    return isNaN(n) !== true && n > 0 ? { paddingBottom: `${100 / n}%` } : null;
  });
}
var $1 = 1.7778;
me({ name: "QImg", props: { ...nc, src: String, srcset: String, sizes: String, alt: String, crossorigin: String, decoding: String, referrerpolicy: String, draggable: Boolean, loading: { type: String, default: "lazy" }, loadingShowDelay: { type: [Number, String], default: 0 }, fetchpriority: { type: String, default: "auto" }, width: String, height: String, initialRatio: { type: [Number, String], default: $1 }, placeholderSrc: String, errorSrc: String, fit: { type: String, default: "cover" }, position: { type: String, default: "50% 50%" }, imgClass: String, imgStyle: Object, noSpinner: Boolean, noNativeMenu: Boolean, noTransition: Boolean, spinnerColor: String, spinnerSize: String }, emits: ["load", "error"], setup(e, { slots: t, emit: n }) {
  const r = U(e.initialRatio), l = lc(e, r), a = xe(), { registerTimeout: o, removeTimeout: i } = el(), { registerTimeout: s, removeTimeout: d } = el(), c = m(() => e.placeholderSrc !== void 0 ? { src: e.placeholderSrc } : null), v = m(() => e.errorSrc !== void 0 ? { src: e.errorSrc, __qerror: true } : null), u = [U(null), U(c.value)], h = U(0), g = U(false), _ = U(false), w = m(() => `q-img q-img--${e.noNativeMenu === true ? "no-" : ""}menu`), k = m(() => ({ width: e.width, height: e.height })), y = m(() => `q-img__image ${e.imgClass !== void 0 ? e.imgClass + " " : ""}q-img__image--with${e.noTransition === true ? "out" : ""}-transition q-img__image--`), p = m(() => ({ ...e.imgStyle, objectFit: e.fit, objectPosition: e.position }));
  function b() {
    if (d(), e.loadingShowDelay === 0) {
      g.value = true;
      return;
    }
    s(() => {
      g.value = true;
    }, e.loadingShowDelay);
  }
  function S() {
    d(), g.value = false;
  }
  function P({ target: q }) {
    _l(a) === false && (i(), r.value = q.naturalHeight === 0 ? 0.5 : q.naturalWidth / q.naturalHeight, F(q, 1));
  }
  function F(q, R) {
    R === 1e3 || _l(a) === true || (q.complete === true ? z(q) : o(() => {
      F(q, R + 1);
    }, 50));
  }
  function z(q) {
    _l(a) !== true && (h.value = h.value ^ 1, u[h.value].value = null, S(), q.getAttribute("__qerror") !== "true" && (_.value = false), n("load", q.currentSrc || q.src));
  }
  function L(q) {
    i(), S(), _.value = true, u[h.value].value = v.value, u[h.value ^ 1].value = c.value, n("error", q);
  }
  function B(q) {
    const R = u[q].value, C = { key: "img_" + q, class: y.value, style: p.value, alt: e.alt, crossorigin: e.crossorigin, decoding: e.decoding, referrerpolicy: e.referrerpolicy, height: e.height, width: e.width, loading: e.loading, fetchpriority: e.fetchpriority, "aria-hidden": "true", draggable: e.draggable, ...R };
    return h.value === q ? Object.assign(C, { class: C.class + "current", onLoad: P, onError: L }) : C.class += "loaded", f("div", { class: "q-img__container absolute-full", key: "img" + q }, f("img", C));
  }
  function D() {
    return g.value === false ? f("div", { key: "content", class: "q-img__content absolute-full q-anchor--skip" }, Pe(t[_.value === true ? "error" : "default"])) : f("div", { key: "loading", class: "q-img__loading absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : e.noSpinner === true ? void 0 : [f(Sn, { color: e.spinnerColor, size: e.spinnerSize })]);
  }
  {
    let q = function() {
      he(() => e.src || e.srcset || e.sizes ? { src: e.src, srcset: e.srcset, sizes: e.sizes } : null, (R) => {
        i(), _.value = false, R === null ? (S(), u[h.value ^ 1].value = c.value) : b(), u[h.value].value = R;
      }, { immediate: true });
    };
    an.value === true ? ft(q) : q();
  }
  return () => {
    const q = [];
    return l.value !== null && q.push(f("div", { key: "filler", style: l.value })), u[0].value !== null && q.push(B(0)), u[1].value !== null && q.push(B(1)), q.push(f(Vt, { name: "q-transition--fade" }, D)), f("div", { key: "main", class: w.value, style: k.value, role: "img", "aria-label": e.alt }, q);
  };
} });
var { passive: Bl } = mt;
me({ name: "QInfiniteScroll", props: { offset: { type: Number, default: 500 }, debounce: { type: [String, Number], default: 100 }, scrollTarget: nr, initialIndex: { type: Number, default: 0 }, disable: Boolean, reverse: Boolean }, emits: ["load"], setup(e, { slots: t, emit: n }) {
  const r = U(false), l = U(true), a = U(null), o = U(null);
  let i = e.initialIndex, s, d;
  const c = m(() => "q-infinite-scroll__loading" + (r.value === true ? "" : " invisible"));
  function v() {
    if (e.disable === true || r.value === true || l.value === false) return;
    const F = Wa(s), z = wl(s), L = qr(s);
    e.reverse === false ? Math.round(z + L + e.offset) >= Math.round(F) && u() : Math.round(z) <= e.offset && u();
  }
  function u() {
    if (e.disable === true || r.value === true || l.value === false) return;
    i++, r.value = true;
    const F = Wa(s);
    n("load", i, (z) => {
      l.value === true && (r.value = false, We(() => {
        if (e.reverse === true) {
          const L = Wa(s), B = wl(s), D = L - F;
          Cr(s, B + D);
        }
        z === true ? _() : a.value && a.value.closest("body") && d();
      }));
    });
  }
  function h() {
    i = 0;
  }
  function g() {
    l.value === false && (l.value = true, s.addEventListener("scroll", d, Bl)), v();
  }
  function _() {
    var _a3;
    l.value === true && (l.value = false, r.value = false, s.removeEventListener("scroll", d, Bl), (_a3 = d == null ? void 0 : d.cancel) == null ? void 0 : _a3.call(d));
  }
  function w() {
    if (s && l.value === true && s.removeEventListener("scroll", d, Bl), s = zn(a.value, e.scrollTarget), l.value === true) {
      if (s.addEventListener("scroll", d, Bl), e.reverse === true) {
        const F = Wa(s), z = qr(s);
        Cr(s, F - z);
      }
      v();
    }
  }
  function k(F) {
    i = F;
  }
  function y(F) {
    F = parseInt(F, 10);
    const z = d;
    d = F <= 0 ? v : Pr(v, isNaN(F) === true ? 100 : F), s && l.value === true && (z !== void 0 && s.removeEventListener("scroll", z, Bl), s.addEventListener("scroll", d, Bl));
  }
  function p(F) {
    if (b.value === true) {
      if (o.value === null) {
        F !== true && We(() => {
          p(true);
        });
        return;
      }
      const z = `${r.value === true ? "un" : ""}pauseAnimations`;
      Array.from(o.value.getElementsByTagName("svg")).forEach((L) => {
        L[z]();
      });
    }
  }
  const b = m(() => e.disable !== true && l.value === true);
  he([r, b], () => {
    p();
  }), he(() => e.disable, (F) => {
    F === true ? _() : g();
  }), he(() => e.reverse, () => {
    r.value === false && l.value === true && v();
  }), he(() => e.scrollTarget, w), he(() => e.debounce, y);
  let S = false;
  ql(() => {
    S !== false && s && Cr(s, S);
  }), In(() => {
    S = s ? wl(s) : false;
  }), Xe(() => {
    l.value === true && s.removeEventListener("scroll", d, Bl);
  }), ft(() => {
    y(e.debounce), w(), r.value === false && p();
  });
  const P = xe();
  return Object.assign(P.proxy, { poll: () => {
    d == null ? void 0 : d();
  }, trigger: u, stop: _, reset: h, resume: g, setIndex: k, updateScrollTarget: w }), () => {
    const F = Oa(t.default, []);
    return b.value === true && F[e.reverse === false ? "push" : "unshift"](f("div", { ref: o, class: c.value }, Pe(t.loading))), f("div", { class: "q-infinite-scroll", ref: a }, F);
  };
} });
me({ name: "QInnerLoading", props: { ...lt, ...Ul, showing: Boolean, color: String, size: { type: [String, Number], default: "42px" }, label: String, labelClass: String, labelStyle: [String, Array, Object] }, setup(e, { slots: t }) {
  const n = xe(), r = rt(e, n.proxy.$q), { transitionProps: l, transitionStyle: a } = bi(e), o = m(() => "q-inner-loading q--avoid-card-border absolute-full column flex-center" + (r.value === true ? " q-inner-loading--dark" : "")), i = m(() => "q-inner-loading__label" + (e.labelClass !== void 0 ? ` ${e.labelClass}` : ""));
  function s() {
    const c = [f(Sn, { size: e.size, color: e.color })];
    return e.label !== void 0 && c.push(f("div", { class: i.value, style: e.labelStyle }, [e.label])), c;
  }
  function d() {
    return e.showing === true ? f("div", { class: o.value, style: a.value }, t.default !== void 0 ? t.default() : s()) : null;
  }
  return () => f(Vt, l.value, d);
} });
var zd = { date: "####/##/##", datetime: "####/##/## ##:##", time: "##:##", fulltime: "##:##:##", phone: "(###) ### - ####", card: "#### #### #### ####" }, Wo = { "#": { pattern: "[\\d]", negate: "[^\\d]" }, S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" }, N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" }, A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleLowerCase() }, X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleLowerCase() } }, zh = Object.keys(Wo);
zh.forEach((e) => {
  Wo[e].regex = new RegExp(Wo[e].pattern);
});
var P1 = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + zh.join("") + "])|(.)", "g"), Nd = /[.*+?^${}()|[\]\\]/g, Ft = "", L1 = { mask: String, reverseFillMask: Boolean, fillMask: [Boolean, String], unmaskedValue: Boolean };
function B1(e, t, n, r) {
  let l, a, o, i, s, d;
  const c = U(null), v = U(h());
  function u() {
    return e.autogrow === true || ["textarea", "text", "search", "url", "tel", "password"].includes(e.type);
  }
  he(() => e.type + e.autogrow, _), he(() => e.mask, (L) => {
    if (L !== void 0) w(v.value, true);
    else {
      const B = F(v.value);
      _(), e.modelValue !== B && t("update:modelValue", B);
    }
  }), he(() => e.fillMask + e.reverseFillMask, () => {
    c.value === true && w(v.value, true);
  }), he(() => e.unmaskedValue, () => {
    c.value === true && w(v.value);
  });
  function h() {
    if (_(), c.value === true) {
      const L = S(F(e.modelValue));
      return e.fillMask !== false ? z(L) : L;
    }
    return e.modelValue;
  }
  function g(L) {
    if (L < l.length) return l.slice(-L);
    let B = "", D = l;
    const q = D.indexOf(Ft);
    if (q !== -1) {
      for (let R = L - D.length; R > 0; R--) B += Ft;
      D = D.slice(0, q) + B + D.slice(q);
    }
    return D;
  }
  function _() {
    if (c.value = e.mask !== void 0 && e.mask.length !== 0 && u(), c.value === false) {
      i = void 0, l = "", a = "";
      return;
    }
    const L = zd[e.mask] === void 0 ? e.mask : zd[e.mask], B = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_", D = B.replace(Nd, "\\$&"), q = [], R = [], C = [];
    let H = e.reverseFillMask === true, Q = "", K = "";
    L.replace(P1, (Y, M, J, ee, ge) => {
      if (ee !== void 0) {
        const O = Wo[ee];
        C.push(O), K = O.negate, H === true && (R.push("(?:" + K + "+)?(" + O.pattern + "+)?(?:" + K + "+)?(" + O.pattern + "+)?"), H = false), R.push("(?:" + K + "+)?(" + O.pattern + ")?");
      } else if (J !== void 0) Q = "\\" + (J === "\\" ? "" : J), C.push(J), q.push("([^" + Q + "]+)?" + Q + "?");
      else {
        const O = M !== void 0 ? M : ge;
        Q = O === "\\" ? "\\\\\\\\" : O.replace(Nd, "\\\\$&"), C.push(O), q.push("([^" + Q + "]+)?" + Q + "?");
      }
    });
    const G = new RegExp("^" + q.join("") + "(" + (Q === "" ? "." : "[^" + Q + "]") + "+)?" + (Q === "" ? "" : "[" + Q + "]*") + "$"), re = R.length - 1, pe = R.map((Y, M) => M === 0 && e.reverseFillMask === true ? new RegExp("^" + D + "*" + Y) : M === re ? new RegExp("^" + Y + "(" + (K === "" ? "." : K) + "+)?" + (e.reverseFillMask === true ? "$" : D + "*")) : new RegExp("^" + Y));
    o = C, i = (Y) => {
      const M = G.exec(e.reverseFillMask === true ? Y : Y.slice(0, C.length + 1));
      M !== null && (Y = M.slice(1).join(""));
      const J = [], ee = pe.length;
      for (let ge = 0, O = Y; ge < ee; ge++) {
        const A = pe[ge].exec(O);
        if (A === null) break;
        O = O.slice(A.shift().length), J.push(...A);
      }
      return J.length !== 0 ? J.join("") : Y;
    }, l = C.map((Y) => typeof Y == "string" ? Y : Ft).join(""), a = l.split(Ft).join(B);
  }
  function w(L, B, D) {
    const q = r.value, R = q.selectionEnd, C = q.value.length - R, H = F(L);
    B === true && _();
    const Q = S(H), K = e.fillMask !== false ? z(Q) : Q, G = v.value !== K;
    q.value !== K && (q.value = K), G === true && (v.value = K), document.activeElement === q && We(() => {
      if (K === a) {
        const pe = e.reverseFillMask === true ? a.length : 0;
        q.setSelectionRange(pe, pe, "forward");
        return;
      }
      if (D === "insertFromPaste" && e.reverseFillMask !== true) {
        const pe = q.selectionEnd;
        let Y = R - 1;
        for (let M = s; M <= Y && M < pe; M++) l[M] !== Ft && Y++;
        y.right(q, Y);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(D) !== -1) {
        const pe = e.reverseFillMask === true ? R === 0 ? K.length > Q.length ? 1 : 0 : Math.max(0, K.length - (K === a ? 0 : Math.min(Q.length, C) + 1)) + 1 : R;
        q.setSelectionRange(pe, pe, "forward");
        return;
      }
      if (e.reverseFillMask === true) if (G === true) {
        const pe = Math.max(0, K.length - (K === a ? 0 : Math.min(Q.length, C + 1)));
        pe === 1 && R === 1 ? q.setSelectionRange(pe, pe, "forward") : y.rightReverse(q, pe);
      } else {
        const pe = K.length - C;
        q.setSelectionRange(pe, pe, "backward");
      }
      else if (G === true) {
        const pe = Math.max(0, l.indexOf(Ft), Math.min(Q.length, R) - 1);
        y.right(q, pe);
      } else {
        const pe = R - 1;
        y.right(q, pe);
      }
    });
    const re = e.unmaskedValue === true ? F(K) : K;
    String(e.modelValue) !== re && (e.modelValue !== null || re !== "") && n(re, true);
  }
  function k(L, B, D) {
    const q = S(F(L.value));
    B = Math.max(0, l.indexOf(Ft), Math.min(q.length, B)), s = B, L.setSelectionRange(B, D, "forward");
  }
  const y = { left(L, B) {
    const D = l.slice(B - 1).indexOf(Ft) === -1;
    let q = Math.max(0, B - 1);
    for (; q >= 0; q--) if (l[q] === Ft) {
      B = q, D === true && B++;
      break;
    }
    if (q < 0 && l[B] !== void 0 && l[B] !== Ft) return y.right(L, 0);
    B >= 0 && L.setSelectionRange(B, B, "backward");
  }, right(L, B) {
    const D = L.value.length;
    let q = Math.min(D, B + 1);
    for (; q <= D; q++) if (l[q] === Ft) {
      B = q;
      break;
    } else l[q - 1] === Ft && (B = q);
    if (q > D && l[B - 1] !== void 0 && l[B - 1] !== Ft) return y.left(L, D);
    L.setSelectionRange(B, B, "forward");
  }, leftReverse(L, B) {
    const D = g(L.value.length);
    let q = Math.max(0, B - 1);
    for (; q >= 0; q--) if (D[q - 1] === Ft) {
      B = q;
      break;
    } else if (D[q] === Ft && (B = q, q === 0)) break;
    if (q < 0 && D[B] !== void 0 && D[B] !== Ft) return y.rightReverse(L, 0);
    B >= 0 && L.setSelectionRange(B, B, "backward");
  }, rightReverse(L, B) {
    const D = L.value.length, q = g(D), R = q.slice(0, B + 1).indexOf(Ft) === -1;
    let C = Math.min(D, B + 1);
    for (; C <= D; C++) if (q[C - 1] === Ft) {
      B = C, B > 0 && R === true && B--;
      break;
    }
    if (C > D && q[B - 1] !== void 0 && q[B - 1] !== Ft) return y.leftReverse(L, D);
    L.setSelectionRange(B, B, "forward");
  } };
  function p(L) {
    t("click", L), d = void 0;
  }
  function b(L) {
    if (t("keydown", L), er(L) === true || L.altKey === true) return;
    const B = r.value, D = B.selectionStart, q = B.selectionEnd;
    if (L.shiftKey || (d = void 0), L.keyCode === 37 || L.keyCode === 39) {
      L.shiftKey && d === void 0 && (d = B.selectionDirection === "forward" ? D : q);
      const R = y[(L.keyCode === 39 ? "right" : "left") + (e.reverseFillMask === true ? "Reverse" : "")];
      if (L.preventDefault(), R(B, d === D ? q : D), L.shiftKey) {
        const C = B.selectionStart;
        B.setSelectionRange(Math.min(d, C), Math.max(d, C), "forward");
      }
    } else L.keyCode === 8 && e.reverseFillMask !== true && D === q ? (y.left(B, D), B.setSelectionRange(B.selectionStart, q, "backward")) : L.keyCode === 46 && e.reverseFillMask === true && D === q && (y.rightReverse(B, q), B.setSelectionRange(D, B.selectionEnd, "forward"));
  }
  function S(L) {
    if (L == null || L === "") return "";
    if (e.reverseFillMask === true) return P(L);
    const B = o;
    let D = 0, q = "";
    for (let R = 0; R < B.length; R++) {
      const C = L[D], H = B[R];
      if (typeof H == "string") q += H, C === H && D++;
      else if (C !== void 0 && H.regex.test(C)) q += H.transform !== void 0 ? H.transform(C) : C, D++;
      else return q;
    }
    return q;
  }
  function P(L) {
    const B = o, D = l.indexOf(Ft);
    let q = L.length - 1, R = "";
    for (let C = B.length - 1; C >= 0 && q !== -1; C--) {
      const H = B[C];
      let Q = L[q];
      if (typeof H == "string") R = H + R, Q === H && q--;
      else if (Q !== void 0 && H.regex.test(Q)) do
        R = (H.transform !== void 0 ? H.transform(Q) : Q) + R, q--, Q = L[q];
      while (D === C && Q !== void 0 && H.regex.test(Q));
      else return R;
    }
    return R;
  }
  function F(L) {
    return typeof L != "string" || i === void 0 ? typeof L == "number" ? i("" + L) : L : i(L);
  }
  function z(L) {
    return a.length - L.length <= 0 ? L : e.reverseFillMask === true && L.length !== 0 ? a.slice(0, -L.length) + L : L + a.slice(L.length);
  }
  return { innerValue: v, hasMask: c, moveCursorForPaste: k, updateMaskValue: w, onMaskedKeydown: b, onMaskedClick: p };
}
var F1 = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/, O1 = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u, V1 = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/, D1 = /[a-z0-9_ -]$/i;
function Nh(e) {
  return function(n) {
    if (n.type === "compositionend" || n.type === "change") {
      if (n.target.qComposing !== true) return;
      n.target.qComposing = false, e(n);
    } else n.type === "compositionupdate" && n.target.qComposing !== true && typeof n.data == "string" && (ze.is.firefox === true ? D1.test(n.data) === false : F1.test(n.data) === true || O1.test(n.data) === true || V1.test(n.data) === true) === true && (n.target.qComposing = true);
  };
}
var Hh = me({ name: "QInput", inheritAttrs: false, props: { ...xi, ...L1, ...Cn, modelValue: [String, Number, FileList], shadowText: String, type: { type: String, default: "text" }, debounce: [String, Number], autogrow: Boolean, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...Si, "paste", "change", "keydown", "click", "animationend"], setup(e, { emit: t, attrs: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = {};
  let o = NaN, i, s, d = null, c;
  const v = U(null), u = Ns(e), { innerValue: h, hasMask: g, moveCursorForPaste: _, updateMaskValue: w, onMaskedKeydown: k, onMaskedClick: y } = B1(e, t, Q, v), p = Ih(e, true), b = m(() => Zl(h.value)), S = Nh(C), P = Ci({ changeEvent: true }), F = m(() => e.type === "textarea" || e.autogrow === true), z = m(() => F.value === true || ["text", "search", "url", "tel", "password"].includes(e.type)), L = m(() => {
    const M = { ...P.splitAttrs.listeners.value, onInput: C, onPaste: R, onChange: G, onBlur: re, onFocus: St };
    return M.onCompositionstart = M.onCompositionupdate = M.onCompositionend = S, g.value === true && (M.onKeydown = k, M.onClick = y), e.autogrow === true && (M.onAnimationend = H), M;
  }), B = m(() => {
    const M = { tabindex: 0, "data-autofocus": e.autofocus === true || void 0, rows: e.type === "textarea" ? 6 : void 0, "aria-label": e.label, name: u.value, ...P.splitAttrs.attributes.value, id: P.targetUid.value, maxlength: e.maxlength, disabled: e.disable === true, readonly: e.readonly === true };
    return F.value === false && (M.type = e.type), e.autogrow === true && (M.rows = 1), M;
  });
  he(() => e.type, () => {
    v.value && (v.value.value = e.modelValue);
  }), he(() => e.modelValue, (M) => {
    if (g.value === true) {
      if (s === true && (s = false, String(M) === o)) return;
      w(M);
    } else h.value !== M && (h.value = M, e.type === "number" && a.hasOwnProperty("value") === true && (i === true ? i = false : delete a.value));
    e.autogrow === true && We(K);
  }), he(() => e.autogrow, (M) => {
    M === true ? We(K) : v.value !== null && n.rows > 0 && (v.value.style.height = "auto");
  }), he(() => e.dense, () => {
    e.autogrow === true && We(K);
  });
  function D() {
    Or(() => {
      const M = document.activeElement;
      v.value !== null && v.value !== M && (M === null || M.id !== P.targetUid.value) && v.value.focus({ preventScroll: true });
    });
  }
  function q() {
    var _a3;
    (_a3 = v.value) == null ? void 0 : _a3.select();
  }
  function R(M) {
    if (g.value === true && e.reverseFillMask !== true) {
      const J = M.target;
      _(J, J.selectionStart, J.selectionEnd);
    }
    t("paste", M);
  }
  function C(M) {
    if (!M || !M.target) return;
    if (e.type === "file") {
      t("update:modelValue", M.target.files);
      return;
    }
    const J = M.target.value;
    if (M.target.qComposing === true) {
      a.value = J;
      return;
    }
    if (g.value === true) w(J, false, M.inputType);
    else if (Q(J), z.value === true && M.target === document.activeElement) {
      const { selectionStart: ee, selectionEnd: ge } = M.target;
      ee !== void 0 && ge !== void 0 && We(() => {
        M.target === document.activeElement && J.indexOf(M.target.value) === 0 && M.target.setSelectionRange(ee, ge);
      });
    }
    e.autogrow === true && K();
  }
  function H(M) {
    t("animationend", M), K();
  }
  function Q(M, J) {
    c = () => {
      d = null, e.type !== "number" && a.hasOwnProperty("value") === true && delete a.value, e.modelValue !== M && o !== M && (o = M, J === true && (s = true), t("update:modelValue", M), We(() => {
        o === M && (o = NaN);
      })), c = void 0;
    }, e.type === "number" && (i = true, a.value = M), e.debounce !== void 0 ? (d !== null && clearTimeout(d), a.value = M, d = setTimeout(c, e.debounce)) : c();
  }
  function K() {
    requestAnimationFrame(() => {
      const M = v.value;
      if (M !== null) {
        const J = M.parentNode.style, { scrollTop: ee } = M, { overflowY: ge, maxHeight: O } = l.platform.is.firefox === true ? {} : window.getComputedStyle(M), A = ge !== void 0 && ge !== "scroll";
        A === true && (M.style.overflowY = "hidden"), J.marginBottom = M.scrollHeight - 1 + "px", M.style.height = "1px", M.style.height = M.scrollHeight + "px", A === true && (M.style.overflowY = parseInt(O, 10) < M.scrollHeight ? "auto" : "hidden"), J.marginBottom = "", M.scrollTop = ee;
      }
    });
  }
  function G(M) {
    S(M), d !== null && (clearTimeout(d), d = null), c == null ? void 0 : c(), t("change", M.target.value);
  }
  function re(M) {
    M !== void 0 && St(M), d !== null && (clearTimeout(d), d = null), c == null ? void 0 : c(), i = false, s = false, delete a.value, e.type !== "file" && setTimeout(() => {
      v.value !== null && (v.value.value = h.value !== void 0 ? h.value : "");
    });
  }
  function pe() {
    return a.hasOwnProperty("value") === true ? a.value : h.value !== void 0 ? h.value : "";
  }
  Xe(() => {
    re();
  }), ft(() => {
    e.autogrow === true && K();
  }), Object.assign(P, { innerValue: h, fieldClass: m(() => `q-${F.value === true ? "textarea" : "input"}` + (e.autogrow === true ? " q-textarea--autogrow" : "")), hasShadow: m(() => e.type !== "file" && typeof e.shadowText == "string" && e.shadowText.length !== 0), inputRef: v, emitValue: Q, hasValue: b, floatingLabel: m(() => b.value === true && (e.type !== "number" || isNaN(h.value) === false) || Zl(e.displayValue)), getControl: () => f(F.value === true ? "textarea" : "input", { ref: v, class: ["q-field__native q-placeholder", e.inputClass], style: e.inputStyle, ...B.value, ...L.value, ...e.type !== "file" ? { value: pe() } : p.value }), getShadowControl: () => f("div", { class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (F.value === true ? "" : " text-no-wrap") }, [f("span", { class: "invisible" }, pe()), f("span", e.shadowText)]) });
  const Y = ki(P);
  return Object.assign(r, { focus: D, select: q, getNativeElement: () => v.value }), Dt(r, "nativeEl", () => v.value), Y;
} }), Hd = { threshold: 0, root: null, rootMargin: "0px" };
function jd(e, t, n) {
  var _a3;
  let r, l, a;
  typeof n == "function" ? (r = n, l = Hd, a = t.cfg === void 0) : (r = n.handler, l = Object.assign({}, Hd, n.cfg), a = t.cfg === void 0 || En(t.cfg, l) === false), t.handler !== r && (t.handler = r), a === true && (t.cfg = l, (_a3 = t.observer) == null ? void 0 : _a3.unobserve(e), t.observer = new IntersectionObserver(([o]) => {
    if (typeof t.handler == "function") {
      if (o.rootBounds === null && document.body.contains(e) === true) {
        t.observer.unobserve(e), t.observer.observe(e);
        return;
      }
      (t.handler(o, t.observer) === false || t.once === true && o.isIntersecting === true) && jh(e);
    }
  }, l), t.observer.observe(e));
}
function jh(e) {
  var _a3;
  const t = e.__qvisible;
  t !== void 0 && ((_a3 = t.observer) == null ? void 0 : _a3.unobserve(e), delete e.__qvisible);
}
var I1 = Ln({ name: "intersection", mounted(e, { modifiers: t, value: n }) {
  const r = { once: t.once === true };
  jd(e, r, n), e.__qvisible = r;
}, updated(e, t) {
  const n = e.__qvisible;
  n !== void 0 && jd(e, n, t.value);
}, beforeUnmount: jh });
me({ name: "QIntersection", props: { tag: { type: String, default: "div" }, once: Boolean, transition: String, transitionDuration: { type: [String, Number], default: 300 }, ssrPrerender: Boolean, margin: String, threshold: [Number, Array], root: { default: null }, disable: Boolean, onVisibility: Function }, setup(e, { slots: t, emit: n }) {
  const r = U(an.value === true ? e.ssrPrerender : false), l = m(() => e.root !== void 0 || e.margin !== void 0 || e.threshold !== void 0 ? { handler: s, cfg: { root: e.root, rootMargin: e.margin, threshold: e.threshold } } : s), a = m(() => e.disable !== true && (an.value !== true || e.once !== true || e.ssrPrerender !== true)), o = m(() => [[I1, l.value, void 0, { once: e.once }]]), i = m(() => `--q-transition-duration: ${e.transitionDuration}ms`);
  function s(c) {
    r.value !== c.isIntersecting && (r.value = c.isIntersecting, e.onVisibility !== void 0 && n("visibility", r.value));
  }
  function d() {
    if (r.value === true) return [f("div", { key: "content", style: i.value }, Pe(t.default))];
    if (t.hidden !== void 0) return [f("div", { key: "hidden", style: i.value }, t.hidden())];
  }
  return () => {
    const c = e.transition ? [f(Vt, { name: "q-transition--" + e.transition }, d)] : d();
    return xn(e.tag, { class: "q-intersection" }, c, "main", a.value, () => o.value);
  };
} });
var z1 = ["ul", "ol"], Uh = me({ name: "QList", props: { ...lt, bordered: Boolean, dense: Boolean, separator: Boolean, padding: Boolean, tag: { type: String, default: "div" } }, setup(e, { slots: t }) {
  const n = xe(), r = rt(e, n.proxy.$q), l = m(() => z1.includes(e.tag) ? null : "list"), a = m(() => "q-list" + (e.bordered === true ? " q-list--bordered" : "") + (e.dense === true ? " q-list--dense" : "") + (e.separator === true ? " q-list--separator" : "") + (r.value === true ? " q-list--dark" : "") + (e.padding === true ? " q-list--padding" : ""));
  return () => f(e.tag, { class: a.value, role: l.value }, Pe(t.default));
} }), Ud = [34, 37, 40, 33, 39, 38], N1 = Object.keys(Gs);
me({ name: "QKnob", props: { ...Cn, ...Gs, modelValue: { type: Number, required: true }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, tabindex: { type: [Number, String], default: 0 }, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change", "dragValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = U(e.modelValue), o = U(false), i = m(() => isNaN(e.innerMin) === true || e.innerMin < e.min ? e.min : e.innerMin), s = m(() => isNaN(e.innerMax) === true || e.innerMax > e.max ? e.max : e.innerMax);
  let d;
  function c() {
    a.value = e.modelValue === null ? i.value : vt(e.modelValue, i.value, s.value), D(true);
  }
  he(() => `${e.modelValue}|${i.value}|${s.value}`, c), c();
  const v = m(() => e.disable === false && e.readonly === false), u = m(() => "q-knob non-selectable" + (v.value === true ? " q-knob--editable" : e.disable === true ? " disabled" : "")), h = m(() => (String(e.step).trim().split(".")[1] || "").length), g = m(() => e.step === 0 ? 1 : e.step), _ = m(() => e.instantFeedback === true || o.value === true), w = l.platform.is.mobile === true ? m(() => v.value === true ? { onClick: F } : {}) : m(() => v.value === true ? { onMousedown: P, onClick: F, onKeydown: z, onKeyup: B } : {}), k = m(() => v.value === true ? { tabindex: e.tabindex } : { [`aria-${e.disable === true ? "disabled" : "readonly"}`]: "true" }), y = m(() => {
    const C = {};
    return N1.forEach((H) => {
      C[H] = e[H];
    }), C;
  });
  function p(C) {
    C.isFinal ? (L(C.evt, true), o.value = false) : (C.isFirst && (S(), o.value = true), L(C.evt));
  }
  const b = m(() => [[yn, p, void 0, { prevent: true, stop: true, mouse: true }]]);
  function S() {
    const { top: C, left: H, width: Q, height: K } = r.$el.getBoundingClientRect();
    d = { top: C + K / 2, left: H + Q / 2 };
  }
  function P(C) {
    S(), L(C);
  }
  function F(C) {
    S(), L(C, true);
  }
  function z(C) {
    if (Ud.includes(C.keyCode) === false) return;
    Ue(C);
    const H = ([34, 33].includes(C.keyCode) ? 10 : 1) * g.value, Q = [34, 37, 40].includes(C.keyCode) ? -H : H;
    a.value = vt(parseFloat((a.value + Q).toFixed(h.value)), i.value, s.value), D();
  }
  function L(C, H) {
    const Q = nn(C), K = Math.abs(Q.top - d.top), G = Math.sqrt(K ** 2 + Math.abs(Q.left - d.left) ** 2);
    let re = Math.asin(K / G) * (180 / Math.PI);
    Q.top < d.top ? re = d.left < Q.left ? 90 - re : 270 + re : re = d.left < Q.left ? re + 90 : 270 - re, l.lang.rtl === true ? re = Bo(-re - e.angle, 0, 360) : e.angle && (re = Bo(re - e.angle, 0, 360)), e.reverse === true && (re = 360 - re);
    let pe = e.min + re / 360 * (e.max - e.min);
    if (g.value !== 0) {
      const Y = pe % g.value;
      pe = pe - Y + (Math.abs(Y) >= g.value / 2 ? (Y < 0 ? -1 : 1) * g.value : 0), pe = parseFloat(pe.toFixed(h.value));
    }
    pe = vt(pe, i.value, s.value), n("dragValue", pe), a.value !== pe && (a.value = pe), D(H);
  }
  function B(C) {
    Ud.includes(C.keyCode) && D(true);
  }
  function D(C) {
    e.modelValue !== a.value && n("update:modelValue", a.value), C === true && n("change", a.value);
  }
  const q = Ia(e);
  function R() {
    return f("input", q.value);
  }
  return () => {
    const C = { class: u.value, role: "slider", "aria-valuemin": i.value, "aria-valuemax": s.value, "aria-valuenow": e.modelValue, ...k.value, ...y.value, value: a.value, instantFeedback: _.value, ...w.value }, H = { default: t.default };
    return v.value === true && e.name !== void 0 && (H.internal = R), xn(oh, C, H, "knob", v.value, () => b.value);
  };
} });
var { passive: Qd } = mt, H1 = ["both", "horizontal", "vertical"], Qh = me({ name: "QScrollObserver", props: { axis: { type: String, validator: (e) => H1.includes(e), default: "vertical" }, debounce: [String, Number], scrollTarget: nr }, emits: ["scroll"], setup(e, { emit: t }) {
  const n = { position: { top: 0, left: 0 }, direction: "down", directionChanged: false, delta: { top: 0, left: 0 }, inflectionPoint: { top: 0, left: 0 } };
  let r = null, l, a;
  he(() => e.scrollTarget, () => {
    s(), i();
  });
  function o() {
    r == null ? void 0 : r();
    const v = Math.max(0, wl(l)), u = pi(l), h = { top: v - n.position.top, left: u - n.position.left };
    if (e.axis === "vertical" && h.top === 0 || e.axis === "horizontal" && h.left === 0) return;
    const g = Math.abs(h.top) >= Math.abs(h.left) ? h.top < 0 ? "up" : "down" : h.left < 0 ? "left" : "right";
    n.position = { top: v, left: u }, n.directionChanged = n.direction !== g, n.delta = h, n.directionChanged === true && (n.direction = g, n.inflectionPoint = n.position), t("scroll", { ...n });
  }
  function i() {
    l = zn(a, e.scrollTarget), l.addEventListener("scroll", d, Qd), d(true);
  }
  function s() {
    l !== void 0 && (l.removeEventListener("scroll", d, Qd), l = void 0);
  }
  function d(v) {
    if (v === true || e.debounce === 0 || e.debounce === "0") o();
    else if (r === null) {
      const [u, h] = e.debounce ? [setTimeout(o, e.debounce), clearTimeout] : [requestAnimationFrame(o), cancelAnimationFrame];
      r = () => {
        h(u), r = null;
      };
    }
  }
  const { proxy: c } = xe();
  return he(() => c.$q.lang.rtl, o), ft(() => {
    a = c.$el.parentNode, i();
  }), Xe(() => {
    r == null ? void 0 : r(), s();
  }), Object.assign(c, { trigger: d, getPosition: () => n }), Ct;
} }), j1 = me({ name: "QLayout", props: { container: Boolean, view: { type: String, default: "hhh lpr fff", validator: (e) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase()) }, onScroll: Function, onScrollHeight: Function, onResize: Function }, setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = U(null), a = U(r.screen.height), o = U(e.container === true ? 0 : r.screen.width), i = U({ position: 0, direction: "down", inflectionPoint: 0 }), s = U(0), d = U(an.value === true ? 0 : go()), c = m(() => "q-layout q-layout--" + (e.container === true ? "containerized" : "standard")), v = m(() => e.container === false ? { minHeight: r.screen.height + "px" } : null), u = m(() => d.value !== 0 ? { [r.lang.rtl === true ? "left" : "right"]: `${d.value}px` } : null), h = m(() => d.value !== 0 ? { [r.lang.rtl === true ? "right" : "left"]: 0, [r.lang.rtl === true ? "left" : "right"]: `-${d.value}px`, width: `calc(100% + ${d.value}px)` } : null);
  function g(b) {
    if (e.container === true || document.qScrollPrevented !== true) {
      const S = { position: b.position.top, direction: b.direction, directionChanged: b.directionChanged, inflectionPoint: b.inflectionPoint.top, delta: b.delta.top };
      i.value = S, e.onScroll !== void 0 && n("scroll", S);
    }
  }
  function _(b) {
    const { height: S, width: P } = b;
    let F = false;
    a.value !== S && (F = true, a.value = S, e.onScrollHeight !== void 0 && n("scrollHeight", S), k()), o.value !== P && (F = true, o.value = P), F === true && e.onResize !== void 0 && n("resize", b);
  }
  function w({ height: b }) {
    s.value !== b && (s.value = b, k());
  }
  function k() {
    if (e.container === true) {
      const b = a.value > s.value ? go() : 0;
      d.value !== b && (d.value = b);
    }
  }
  let y = null;
  const p = { instances: {}, view: m(() => e.view), isContainer: m(() => e.container), rootRef: l, height: a, containerHeight: s, scrollbarWidth: d, totalWidth: m(() => o.value + d.value), rows: m(() => {
    const b = e.view.toLowerCase().split(" ");
    return { top: b[0].split(""), middle: b[1].split(""), bottom: b[2].split("") };
  }), header: Vn({ size: 0, offset: 0, space: false }), right: Vn({ size: 300, offset: 0, space: false }), footer: Vn({ size: 0, offset: 0, space: false }), left: Vn({ size: 300, offset: 0, space: false }), scroll: i, animate() {
    y !== null ? clearTimeout(y) : document.body.classList.add("q-body--layout-animate"), y = setTimeout(() => {
      y = null, document.body.classList.remove("q-body--layout-animate");
    }, 155);
  }, update(b, S, P) {
    p[b][S] = P;
  } };
  if (pn(tr, p), go() > 0) {
    let b = function() {
      F = null, z.classList.remove("hide-scrollbar");
    }, S = function() {
      if (F === null) {
        if (z.scrollHeight > r.screen.height) return;
        z.classList.add("hide-scrollbar");
      } else clearTimeout(F);
      F = setTimeout(b, 300);
    }, P = function(L) {
      F !== null && L === "remove" && (clearTimeout(F), b()), window[`${L}EventListener`]("resize", S);
    }, F = null;
    const z = document.body;
    he(() => e.container !== true ? "add" : "remove", P), e.container !== true && P("add"), ui(() => {
      P("remove");
    });
  }
  return () => {
    const b = Mt(t.default, [f(Qh, { onScroll: g }), f(Xl, { onResize: _ })]), S = f("div", { class: c.value, style: v.value, ref: e.container === true ? void 0 : l, tabindex: -1 }, b);
    return e.container === true ? f("div", { class: "q-layout-container overflow-hidden", ref: l }, [f(Xl, { onResize: w }), f("div", { class: "absolute-full", style: u.value }, [f("div", { class: "scroll", style: h.value }, [S])])]) : S;
  };
} }), U1 = ["horizontal", "vertical", "cell", "none"], Q1 = me({ name: "QMarkupTable", props: { ...lt, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, wrapCells: Boolean, separator: { type: String, default: "horizontal", validator: (e) => U1.includes(e) } }, setup(e, { slots: t }) {
  const n = xe(), r = rt(e, n.proxy.$q), l = m(() => `q-markup-table q-table__container q-table__card q-table--${e.separator}-separator` + (r.value === true ? " q-table--dark q-table__card--dark q-dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "") + (e.square === true ? " q-table--square" : "") + (e.wrapCells === false ? " q-table--no-wrap" : ""));
  return () => f("div", { class: l.value }, [f("table", { class: "q-table" }, Pe(t.default))]);
} });
me({ name: "QNoSsr", props: { tag: { type: String, default: "div" }, placeholder: String }, setup(e, { slots: t }) {
  const { isHydrated: n } = ch();
  return () => {
    if (n.value === true) {
      const a = Pe(t.default);
      return a === void 0 ? a : a.length > 1 ? f(e.tag, {}, a) : a[0];
    }
    const r = { class: "q-no-ssr-placeholder" }, l = Pe(t.placeholder);
    if (l !== void 0) return l.length > 1 ? f(e.tag, r, l) : l[0];
    if (e.placeholder !== void 0) return f(e.tag, r, e.placeholder);
  };
} });
var K1 = () => f("svg", { key: "svg", class: "q-radio__bg absolute non-selectable", viewBox: "0 0 24 24" }, [f("path", { d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12" }), f("path", { class: "q-radio__check", d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6" })]), W1 = me({ name: "QRadio", props: { ...lt, ...nl, ...Cn, modelValue: { required: true }, val: { required: true }, label: String, leftLabel: Boolean, checkedIcon: String, uncheckedIcon: String, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), l = rt(e, r.$q), a = ll(e, Jm), o = U(null), { refocusTargetEl: i, refocusTarget: s } = Zm(e, o), d = m(() => Ze(e.modelValue) === Ze(e.val)), c = m(() => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (e.disable === true ? " disabled" : "") + (l.value === true ? " q-radio--dark" : "") + (e.dense === true ? " q-radio--dense" : "") + (e.leftLabel === true ? " reverse" : "")), v = m(() => {
    const b = e.color !== void 0 && (e.keepColor === true || d.value === true) ? ` text-${e.color}` : "";
    return `q-radio__inner relative-position q-radio__inner--${d.value === true ? "truthy" : "falsy"}${b}`;
  }), u = m(() => (d.value === true ? e.checkedIcon : e.uncheckedIcon) || null), h = m(() => e.disable === true ? -1 : e.tabindex || 0), g = m(() => {
    const b = { type: "radio" };
    return e.name !== void 0 && Object.assign(b, { ".checked": d.value === true, "^checked": d.value === true ? "checked" : void 0, name: e.name, value: e.val }), b;
  }), _ = Ml(g);
  function w(b) {
    b !== void 0 && (Ue(b), s(b)), e.disable !== true && d.value !== true && n("update:modelValue", e.val, b);
  }
  function k(b) {
    (b.keyCode === 13 || b.keyCode === 32) && Ue(b);
  }
  function y(b) {
    (b.keyCode === 13 || b.keyCode === 32) && w(b);
  }
  Object.assign(r, { set: w });
  const p = K1();
  return () => {
    const b = u.value !== null ? [f("div", { key: "icon", class: "q-radio__icon-container absolute-full flex flex-center no-wrap" }, [f(tt, { class: "q-radio__icon", name: u.value })])] : [p];
    e.disable !== true && _(b, "unshift", " q-radio__native q-ma-none q-pa-none");
    const S = [f("div", { class: v.value, style: a.value, "aria-hidden": "true" }, b)];
    i.value !== null && S.push(i.value);
    const P = e.label !== void 0 ? Mt(t.default, [e.label]) : Pe(t.default);
    return P !== void 0 && S.push(f("div", { class: "q-radio__label q-anchor--skip" }, P)), f("div", { ref: o, class: c.value, tabindex: h.value, role: "radio", "aria-label": e.label, "aria-checked": d.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: w, onKeydown: k, onKeyup: y }, S);
  };
} }), Y1 = me({ name: "QToggle", props: { ...eh, icon: String, iconColor: String }, emits: th, setup(e) {
  function t(n, r) {
    const l = m(() => (n.value === true ? e.checkedIcon : r.value === true ? e.indeterminateIcon : e.uncheckedIcon) || e.icon), a = m(() => n.value === true ? e.iconColor : null);
    return () => [f("div", { class: "q-toggle__track" }), f("div", { class: "q-toggle__thumb absolute flex flex-center no-wrap" }, l.value !== void 0 ? [f(tt, { name: l.value, color: a.value })] : void 0)];
  }
  return nh("toggle", t);
} }), Kh = { radio: W1, checkbox: va, toggle: Y1 }, X1 = Object.keys(Kh);
function uu(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (r) => r[n];
}
var G1 = me({ name: "QOptionGroup", props: { ...lt, modelValue: { required: true }, options: { type: Array, validator: (e) => e.every(Bt), default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], name: String, type: { type: String, default: "radio", validator: (e) => X1.includes(e) }, color: String, keepColor: Boolean, dense: Boolean, size: String, leftLabel: Boolean, inline: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { emit: t, slots: n }) {
  const { proxy: { $q: r } } = xe(), l = Array.isArray(e.modelValue);
  e.type === "radio" ? l === true && console.error("q-option-group: model should not be array") : l === false && console.error("q-option-group: model should be array in your case");
  const a = rt(e, r), o = m(() => Kh[e.type]), i = m(() => uu(e.optionValue, "value")), s = m(() => uu(e.optionLabel, "label")), d = m(() => uu(e.optionDisable, "disable")), c = m(() => e.options.map((g) => ({ val: i.value(g), name: g.name === void 0 ? e.name : g.name, disable: e.disable || d.value(g), leftLabel: g.leftLabel === void 0 ? e.leftLabel : g.leftLabel, color: g.color === void 0 ? e.color : g.color, checkedIcon: g.checkedIcon, uncheckedIcon: g.uncheckedIcon, dark: g.dark === void 0 ? a.value : g.dark, size: g.size === void 0 ? e.size : g.size, dense: e.dense, keepColor: g.keepColor === void 0 ? e.keepColor : g.keepColor }))), v = m(() => "q-option-group q-gutter-x-sm" + (e.inline === true ? " q-option-group--inline" : "")), u = m(() => {
    const g = { role: "group" };
    return e.type === "radio" && (g.role = "radiogroup", e.disable === true && (g["aria-disabled"] = "true")), g;
  });
  function h(g) {
    t("update:modelValue", g);
  }
  return () => f("div", { class: v.value, ...u.value }, e.options.map((g, _) => {
    const w = n["label-" + _] !== void 0 ? () => n["label-" + _](g) : n.label !== void 0 ? () => n.label(g) : void 0;
    return f("div", [f(o.value, { label: w === void 0 ? s.value(g) : null, modelValue: e.modelValue, "onUpdate:modelValue": h, ...c.value[_] }, w)]);
  }));
} });
me({ name: "QPage", props: { padding: Boolean, styleFn: Function }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = Rt(tr, ut);
  if (r === ut) return console.error("QPage needs to be a deep child of QLayout"), ut;
  if (Rt(_m, ut) === ut) return console.error("QPage needs to be child of QPageContainer"), ut;
  const a = m(() => {
    const i = (r.header.space === true ? r.header.size : 0) + (r.footer.space === true ? r.footer.size : 0);
    if (typeof e.styleFn == "function") {
      const s = r.isContainer.value === true ? r.containerHeight.value : n.screen.height;
      return e.styleFn(i, s);
    }
    return { minHeight: r.isContainer.value === true ? r.containerHeight.value - i + "px" : n.screen.height === 0 ? i !== 0 ? `calc(100vh - ${i}px)` : "100vh" : n.screen.height - i + "px" };
  }), o = m(() => `q-page${e.padding === true ? " q-layout-padding" : ""}`);
  return () => f("main", { class: o.value, style: a.value }, Pe(t.default));
} });
var Z1 = me({ name: "QPageContainer", setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = Rt(tr, ut);
  if (r === ut) return console.error("QPageContainer needs to be child of QLayout"), ut;
  pn(_m, true);
  const l = m(() => {
    const a = {};
    return r.header.space === true && (a.paddingTop = `${r.header.size}px`), r.right.space === true && (a[`padding${n.lang.rtl === true ? "Left" : "Right"}`] = `${r.right.size}px`), r.footer.space === true && (a.paddingBottom = `${r.footer.size}px`), r.left.space === true && (a[`padding${n.lang.rtl === true ? "Right" : "Left"}`] = `${r.left.size}px`), a;
  });
  return () => f("div", { class: "q-page-container", style: l.value }, Pe(t.default));
} }), ls = { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, validator: (e) => e.length === 2 }, expand: Boolean };
function Wh() {
  const { props: e, proxy: { $q: t } } = xe(), n = Rt(tr, ut);
  if (n === ut) return console.error("QPageSticky needs to be child of QLayout"), ut;
  const r = m(() => {
    const v = e.position;
    return { top: v.indexOf("top") !== -1, right: v.indexOf("right") !== -1, bottom: v.indexOf("bottom") !== -1, left: v.indexOf("left") !== -1, vertical: v === "top" || v === "bottom", horizontal: v === "left" || v === "right" };
  }), l = m(() => n.header.offset), a = m(() => n.right.offset), o = m(() => n.footer.offset), i = m(() => n.left.offset), s = m(() => {
    let v = 0, u = 0;
    const h = r.value, g = t.lang.rtl === true ? -1 : 1;
    h.top === true && l.value !== 0 ? u = `${l.value}px` : h.bottom === true && o.value !== 0 && (u = `${-o.value}px`), h.left === true && i.value !== 0 ? v = `${g * i.value}px` : h.right === true && a.value !== 0 && (v = `${-g * a.value}px`);
    const _ = { transform: `translate(${v}, ${u})` };
    return e.offset && (_.margin = `${e.offset[1]}px ${e.offset[0]}px`), h.vertical === true ? (i.value !== 0 && (_[t.lang.rtl === true ? "right" : "left"] = `${i.value}px`), a.value !== 0 && (_[t.lang.rtl === true ? "left" : "right"] = `${a.value}px`)) : h.horizontal === true && (l.value !== 0 && (_.top = `${l.value}px`), o.value !== 0 && (_.bottom = `${o.value}px`)), _;
  }), d = m(() => `q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand === true ? "expand" : "shrink"}`);
  function c(v) {
    const u = Pe(v.default);
    return f("div", { class: d.value, style: s.value }, e.expand === true ? u : [f("div", u)]);
  }
  return { $layout: n, getStickyContent: c };
}
me({ name: "QPageScroller", props: { ...ls, scrollOffset: { type: Number, default: 1e3 }, reverse: Boolean, duration: { type: Number, default: 300 }, offset: { ...ls.offset, default: () => [18, 18] } }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), { $layout: l, getStickyContent: a } = Wh(), o = U(null);
  let i;
  const s = m(() => l.height.value - (l.isContainer.value === true ? l.containerHeight.value : r.screen.height));
  function d() {
    return e.reverse === true ? s.value - l.scroll.value.position > e.scrollOffset : l.scroll.value.position > e.scrollOffset;
  }
  const c = U(d());
  function v() {
    const w = d();
    c.value !== w && (c.value = w);
  }
  function u() {
    e.reverse === true ? i === void 0 && (i = he(s, v)) : h();
  }
  he(l.scroll, v), he(() => e.reverse, u);
  function h() {
    i !== void 0 && (i(), i = void 0);
  }
  function g(w) {
    const k = zn(l.isContainer.value === true ? o.value : l.rootRef.value);
    Cr(k, e.reverse === true ? l.height.value : 0, e.duration), n("click", w);
  }
  function _() {
    return c.value === true ? f("div", { ref: o, class: "q-page-scroller", onClick: g }, a(t)) : null;
  }
  return u(), Xe(h), () => f(Vt, { name: "q-transition--fade" }, _);
} });
me({ name: "QPageSticky", props: ls, setup(e, { slots: t }) {
  const { getStickyContent: n } = Wh();
  return () => n(t);
} });
function lo(e, t) {
  return [true, false].includes(e) ? e : t;
}
me({ name: "QPagination", props: { ...lt, modelValue: { type: Number, required: true }, min: { type: [Number, String], default: 1 }, max: { type: [Number, String], required: true }, maxPages: { type: [Number, String], default: 0, validator: (e) => (typeof e == "string" ? parseInt(e, 10) : e) >= 0 }, inputStyle: [Array, String, Object], inputClass: [Array, String, Object], size: String, disable: Boolean, input: Boolean, iconPrev: String, iconNext: String, iconFirst: String, iconLast: String, toFn: Function, boundaryLinks: { type: Boolean, default: null }, boundaryNumbers: { type: Boolean, default: null }, directionLinks: { type: Boolean, default: null }, ellipses: { type: Boolean, default: null }, ripple: { type: [Boolean, Object], default: null }, round: Boolean, rounded: Boolean, flat: Boolean, outline: Boolean, unelevated: Boolean, push: Boolean, glossy: Boolean, color: { type: String, default: "primary" }, textColor: String, activeDesign: { type: String, default: "", values: (e) => e === "" || Bm.includes(e) }, activeColor: String, activeTextColor: String, gutter: String, padding: { type: String, default: "3px 2px" } }, emits: ["update:modelValue"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), { $q: r } = n, l = rt(e, r), a = m(() => parseInt(e.min, 10)), o = m(() => parseInt(e.max, 10)), i = m(() => parseInt(e.maxPages, 10)), s = m(() => g.value + " / " + o.value), d = m(() => lo(e.boundaryLinks, e.input)), c = m(() => lo(e.boundaryNumbers, !e.input)), v = m(() => lo(e.directionLinks, e.input)), u = m(() => lo(e.ellipses, !e.input)), h = U(null), g = m({ get: () => e.modelValue, set: (R) => {
    if (R = parseInt(R, 10), e.disable || isNaN(R)) return;
    const C = vt(R, a.value, o.value);
    e.modelValue !== C && t("update:modelValue", C);
  } });
  he(() => `${a.value}|${o.value}`, () => {
    g.value = e.modelValue;
  });
  const _ = m(() => "q-pagination row no-wrap items-center" + (e.disable === true ? " disabled" : "")), w = m(() => e.gutter in Vo ? `${Vo[e.gutter]}px` : e.gutter || null), k = m(() => w.value !== null ? `--q-pagination-gutter-parent:-${w.value};--q-pagination-gutter-child:${w.value}` : null), y = m(() => {
    const R = [e.iconFirst || r.iconSet.pagination.first, e.iconPrev || r.iconSet.pagination.prev, e.iconNext || r.iconSet.pagination.next, e.iconLast || r.iconSet.pagination.last];
    return r.lang.rtl === true ? R.reverse() : R;
  }), p = m(() => ({ "aria-disabled": e.disable === true ? "true" : "false", role: "navigation" })), b = m(() => Fs(e, "flat")), S = m(() => ({ [b.value]: true, round: e.round, rounded: e.rounded, padding: e.padding, color: e.color, textColor: e.textColor, size: e.size, ripple: e.ripple !== null ? e.ripple : true })), P = m(() => {
    const R = { [b.value]: false };
    return e.activeDesign !== "" && (R[e.activeDesign] = true), R;
  }), F = m(() => ({ ...P.value, color: e.activeColor || e.color, textColor: e.activeTextColor || e.textColor })), z = m(() => {
    let R = Math.max(i.value, 1 + (u.value ? 2 : 0) + (c.value ? 2 : 0));
    const C = { pgFrom: a.value, pgTo: o.value, ellipsesStart: false, ellipsesEnd: false, boundaryStart: false, boundaryEnd: false, marginalStyle: { minWidth: `${Math.max(2, String(o.value).length)}em` } };
    return i.value && R < o.value - a.value + 1 && (R = 1 + Math.floor(R / 2) * 2, C.pgFrom = Math.max(a.value, Math.min(o.value - R + 1, e.modelValue - Math.floor(R / 2))), C.pgTo = Math.min(o.value, C.pgFrom + R - 1), c.value && (C.boundaryStart = true, C.pgFrom++), u.value && C.pgFrom > a.value + (c.value ? 1 : 0) && (C.ellipsesStart = true, C.pgFrom++), c.value && (C.boundaryEnd = true, C.pgTo--), u.value && C.pgTo < o.value - (c.value ? 1 : 0) && (C.ellipsesEnd = true, C.pgTo--)), C;
  });
  function L(R) {
    g.value = R;
  }
  function B(R) {
    g.value = g.value + R;
  }
  const D = m(() => {
    function R() {
      g.value = h.value, h.value = null;
    }
    return { "onUpdate:modelValue": (C) => {
      h.value = C;
    }, onKeyup: (C) => {
      wn(C, 13) === true && R();
    }, onBlur: R };
  });
  function q(R, C, H) {
    const Q = { "aria-label": C, "aria-current": "false", ...S.value, ...R };
    return H === true && Object.assign(Q, { "aria-current": "true", ...F.value }), C !== void 0 && (e.toFn !== void 0 ? Q.to = e.toFn(C) : Q.onClick = () => {
      L(C);
    }), f(et, Q);
  }
  return Object.assign(n, { set: L, setByOffset: B }), () => {
    const R = [], C = [];
    let H;
    if (d.value === true && (R.push(q({ key: "bls", disable: e.disable || e.modelValue <= a.value, icon: y.value[0], "aria-label": r.lang.pagination.first }, a.value)), C.unshift(q({ key: "ble", disable: e.disable || e.modelValue >= o.value, icon: y.value[3], "aria-label": r.lang.pagination.last }, o.value))), v.value === true && (R.push(q({ key: "bdp", disable: e.disable || e.modelValue <= a.value, icon: y.value[1], "aria-label": r.lang.pagination.prev }, e.modelValue - 1)), C.unshift(q({ key: "bdn", disable: e.disable || e.modelValue >= o.value, icon: y.value[2], "aria-label": r.lang.pagination.next }, e.modelValue + 1))), e.input !== true) {
      H = [];
      const { pgFrom: Q, pgTo: K, marginalStyle: G } = z.value;
      if (z.value.boundaryStart === true) {
        const re = a.value === e.modelValue;
        R.push(q({ key: "bns", style: G, disable: e.disable, label: a.value }, a.value, re));
      }
      if (z.value.boundaryEnd === true) {
        const re = o.value === e.modelValue;
        C.unshift(q({ key: "bne", style: G, disable: e.disable, label: o.value }, o.value, re));
      }
      z.value.ellipsesStart === true && R.push(q({ key: "bes", style: G, disable: e.disable, label: "\u2026", ripple: false }, Q - 1)), z.value.ellipsesEnd === true && C.unshift(q({ key: "bee", style: G, disable: e.disable, label: "\u2026", ripple: false }, K + 1));
      for (let re = Q; re <= K; re++) H.push(q({ key: `bpg${re}`, style: G, disable: e.disable, label: re }, re, re === e.modelValue));
    }
    return f("div", { class: _.value, ...p.value }, [f("div", { class: "q-pagination__content row no-wrap items-center", style: k.value }, [...R, e.input === true ? f(Hh, { class: "inline", style: { width: `${s.value.length / 1.5}em` }, type: "number", dense: true, value: h.value, disable: e.disable, dark: l.value, borderless: true, inputClass: e.inputClass, inputStyle: e.inputStyle, placeholder: s.value, min: a.value, max: o.value, ...D.value }) : f("div", { class: "q-pagination__middle row justify-center" }, H), ...C])]);
  };
} });
function su(e) {
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
var { passive: ro } = mt;
me({ name: "QParallax", props: { src: String, height: { type: Number, default: 500 }, speed: { type: Number, default: 1, validator: (e) => e >= 0 && e <= 1 }, scrollTarget: nr, onScroll: Function }, setup(e, { slots: t, emit: n }) {
  const r = U(0), l = U(null), a = U(null), o = U(null);
  let i, s, d, c, v, u;
  he(() => e.height, () => {
    i === true && g();
  }), he(() => e.scrollTarget, () => {
    i === true && (y(), k());
  });
  let h = (p) => {
    r.value = p, e.onScroll !== void 0 && n("scroll", p);
  };
  function g() {
    let p, b, S;
    u === window ? (p = 0, S = b = window.innerHeight) : (p = Oo(u).top, b = qr(u), S = p + b);
    const P = Oo(l.value).top, F = P + e.height;
    if (v !== void 0 || F > p && P < S) {
      const z = (S - P) / (e.height + b);
      _((d - e.height) * z * e.speed), h(z);
    }
  }
  let _ = (p) => {
    s.style.transform = `translate3d(-50%,${Math.round(p)}px,0)`;
  };
  function w() {
    d = s.naturalHeight || s.videoHeight || qr(s), i === true && g();
  }
  function k() {
    i = true, u = zn(l.value, e.scrollTarget), u.addEventListener("scroll", g, ro), window.addEventListener("resize", c, ro), g();
  }
  function y() {
    i === true && (i = false, u.removeEventListener("scroll", g, ro), window.removeEventListener("resize", c, ro), u = void 0, _.cancel(), h.cancel(), c.cancel());
  }
  return ft(() => {
    _ = su(_), h = su(h), c = su(w), s = t.media !== void 0 ? a.value.children[0] : o.value, s.onload = s.onloadstart = s.loadedmetadata = w, w(), s.style.display = "initial", window.IntersectionObserver !== void 0 ? (v = new IntersectionObserver((p) => {
      (p[0].isIntersecting === true ? k : y)();
    }), v.observe(l.value)) : k();
  }), Xe(() => {
    y(), v == null ? void 0 : v.disconnect(), s.onload = s.onloadstart = s.loadedmetadata = null;
  }), () => f("div", { ref: l, class: "q-parallax", style: { height: `${e.height}px` } }, [f("div", { ref: a, class: "q-parallax__media absolute-full" }, t.media !== void 0 ? t.media() : [f("img", { ref: o, src: e.src })]), f("div", { class: "q-parallax__content absolute-full column flex-center" }, t.content !== void 0 ? t.content({ percentScrolled: r.value }) : Pe(t.default))]);
} });
function ma(e, t = /* @__PURE__ */ new WeakMap()) {
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
    n.add(ma(r, t));
  }) : e instanceof Map && e.forEach((r, l) => {
    n.set(l, ma(r, t));
  }), Object.assign(n, ...Object.keys(e).map((r) => ({ [r]: ma(e[r], t) })));
}
me({ name: "QPopupEdit", props: { modelValue: { required: true }, title: String, buttons: Boolean, labelSet: String, labelCancel: String, color: { type: String, default: "primary" }, validate: { type: Function, default: () => true }, autoSave: Boolean, cover: { type: Boolean, default: true }, disable: Boolean }, emits: ["update:modelValue", "save", "cancel", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = U(null), o = U(""), i = U("");
  let s = false;
  const d = m(() => Dt({ initialValue: o.value, validate: e.validate, set: c, cancel: v, updatePosition: u }, "value", () => i.value, (b) => {
    i.value = b;
  }));
  function c() {
    e.validate(i.value) !== false && (h() === true && (n("save", i.value, o.value), n("update:modelValue", i.value)), g());
  }
  function v() {
    h() === true && n("cancel", i.value, o.value), g();
  }
  function u() {
    We(() => {
      a.value.updatePosition();
    });
  }
  function h() {
    return En(i.value, o.value) === false;
  }
  function g() {
    s = true, a.value.hide();
  }
  function _() {
    s = false, o.value = ma(e.modelValue), i.value = ma(e.modelValue), n("beforeShow");
  }
  function w() {
    n("show");
  }
  function k() {
    s === false && h() === true && (e.autoSave === true && e.validate(i.value) === true ? (n("save", i.value, o.value), n("update:modelValue", i.value)) : n("cancel", i.value, o.value)), n("beforeHide");
  }
  function y() {
    n("hide");
  }
  function p() {
    const b = t.default !== void 0 ? [].concat(t.default(d.value)) : [];
    return e.title && b.unshift(f("div", { class: "q-dialog__title q-mt-sm q-mb-sm" }, e.title)), e.buttons === true && b.push(f("div", { class: "q-popup-edit__buttons row justify-center no-wrap" }, [f(et, { flat: true, color: e.color, label: e.labelCancel || l.lang.label.cancel, onClick: v }), f(et, { flat: true, color: e.color, label: e.labelSet || l.lang.label.set, onClick: c })])), b;
  }
  return Object.assign(r, { set: c, cancel: v, show(b) {
    var _a3;
    (_a3 = a.value) == null ? void 0 : _a3.show(b);
  }, hide(b) {
    var _a3;
    (_a3 = a.value) == null ? void 0 : _a3.hide(b);
  }, updatePosition: u }), () => {
    if (e.disable !== true) return f(yi, { ref: a, class: "q-popup-edit", cover: e.cover, onBeforeShow: _, onShow: w, onBeforeHide: k, onHide: y, onEscapeKey: v }, p);
  };
} });
me({ name: "QPopupProxy", props: { ...Dm, breakpoint: { type: [String, Number], default: 450 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: n, attrs: r }) {
  const { proxy: l } = xe(), { $q: a } = l, o = U(false), i = U(null), s = m(() => parseInt(e.breakpoint, 10)), { canShow: d } = Vs({ showing: o });
  function c() {
    return a.screen.width < s.value || a.screen.height < s.value ? "dialog" : "menu";
  }
  const v = U(c()), u = m(() => v.value === "menu" ? { maxHeight: "99vh" } : {});
  he(() => c(), (_) => {
    o.value !== true && (v.value = _);
  });
  function h(_) {
    o.value = true, n("show", _);
  }
  function g(_) {
    o.value = false, v.value = c(), n("hide", _);
  }
  return Object.assign(l, { show(_) {
    d(_) === true && i.value.show(_);
  }, hide(_) {
    i.value.hide(_);
  }, toggle(_) {
    i.value.toggle(_);
  } }), Dt(l, "currentComponent", () => ({ type: v.value, ref: i.value })), () => {
    const _ = { ref: i, ...u.value, ...r, onShow: h, onHide: g };
    let w;
    return v.value === "dialog" ? w = wi : (w = yi, Object.assign(_, { target: e.target, contextMenu: e.contextMenu, noParentEvent: true, separateClosePopup: true })), f(w, _, t.default);
  };
} });
var J1 = { xs: 2, sm: 4, md: 6, lg: 10, xl: 14 };
function Kd(e, t, n) {
  return { transform: t === true ? `translateX(${n.lang.rtl === true ? "-" : ""}100%) scale3d(${-e},1,1)` : `scale3d(${e},1,1)` };
}
var e_ = me({ name: "QLinearProgress", props: { ...lt, ...nl, value: { type: Number, default: 0 }, buffer: Number, color: String, trackColor: String, reverse: Boolean, stripe: Boolean, indeterminate: Boolean, query: Boolean, rounded: Boolean, animationSpeed: { type: [String, Number], default: 2100 }, instantFeedback: Boolean }, setup(e, { slots: t }) {
  const { proxy: n } = xe(), r = rt(e, n.$q), l = ll(e, J1), a = m(() => e.indeterminate === true || e.query === true), o = m(() => e.reverse !== e.query), i = m(() => ({ ...l.value !== null ? l.value : {}, "--q-linear-progress-speed": `${e.animationSpeed}ms` })), s = m(() => "q-linear-progress" + (e.color !== void 0 ? ` text-${e.color}` : "") + (e.reverse === true || e.query === true ? " q-linear-progress--reverse" : "") + (e.rounded === true ? " rounded-borders" : "")), d = m(() => Kd(e.buffer !== void 0 ? e.buffer : 1, o.value, n.$q)), c = m(() => `with${e.instantFeedback === true ? "out" : ""}-transition`), v = m(() => `q-linear-progress__track absolute-full q-linear-progress__track--${c.value} q-linear-progress__track--${r.value === true ? "dark" : "light"}` + (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")), u = m(() => Kd(a.value === true ? 1 : e.value, o.value, n.$q)), h = m(() => `q-linear-progress__model absolute-full q-linear-progress__model--${c.value} q-linear-progress__model--${a.value === true ? "in" : ""}determinate`), g = m(() => ({ width: `${e.value * 100}%` })), _ = m(() => `q-linear-progress__stripe absolute-${e.reverse === true ? "right" : "left"} q-linear-progress__stripe--${c.value}`);
  return () => {
    const w = [f("div", { class: v.value, style: d.value }), f("div", { class: h.value, style: u.value })];
    return e.stripe === true && a.value === false && w.push(f("div", { class: _.value, style: g.value })), f("div", { class: s.value, style: i.value, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuenow": e.indeterminate === true ? void 0 : e.value }, Mt(t.default, w));
  };
} }), Wd = 40, cu = 20;
me({ name: "QPullToRefresh", props: { color: String, bgColor: String, icon: String, noMouse: Boolean, disable: Boolean, scrollTarget: nr }, emits: ["refresh"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = U("pull"), o = U(0), i = U(false), s = U(-40), d = U(false), c = U({}), v = m(() => ({ opacity: o.value, transform: `translateY(${s.value}px) rotate(${o.value * 360}deg)` })), u = m(() => "q-pull-to-refresh__puller row flex-center" + (d.value === true ? " q-pull-to-refresh__puller--animating" : "") + (e.bgColor !== void 0 ? ` bg-${e.bgColor}` : ""));
  function h(S) {
    if (S.isFinal === true) {
      i.value === true && (i.value = false, a.value === "pulled" ? (a.value = "refreshing", p({ pos: cu }), w()) : a.value === "pull" && p({ pos: -40, ratio: 0 }));
      return;
    }
    if (d.value === true || a.value === "refreshing") return false;
    if (S.isFirst === true) {
      if (wl(k) !== 0 || S.direction !== "down") return i.value === true && (i.value = false, a.value = "pull", p({ pos: -40, ratio: 0 })), false;
      i.value = true;
      const { top: z, left: L } = r.$el.getBoundingClientRect();
      c.value = { top: z + "px", left: L + "px", width: window.getComputedStyle(r.$el).getPropertyValue("width") };
    }
    It(S.evt);
    const P = Math.min(140, Math.max(0, S.distance.y));
    s.value = P - Wd, o.value = vt(P / (cu + Wd), 0, 1);
    const F = s.value > cu ? "pulled" : "pull";
    a.value !== F && (a.value = F);
  }
  const g = m(() => {
    const S = { down: true };
    return e.noMouse !== true && (S.mouse = true), [[yn, h, void 0, S]];
  }), _ = m(() => `q-pull-to-refresh__content${i.value === true ? " no-pointer-events" : ""}`);
  function w() {
    n("refresh", () => {
      p({ pos: -40, ratio: 0 }, () => {
        a.value = "pull";
      });
    });
  }
  let k, y = null;
  function p({ pos: S, ratio: P }, F) {
    d.value = true, s.value = S, P !== void 0 && (o.value = P), y !== null && clearTimeout(y), y = setTimeout(() => {
      y = null, d.value = false, F == null ? void 0 : F();
    }, 300);
  }
  function b() {
    k = zn(r.$el, e.scrollTarget);
  }
  return he(() => e.scrollTarget, b), ft(b), Xe(() => {
    y !== null && clearTimeout(y);
  }), Object.assign(r, { trigger: w, updateScrollTarget: b }), () => {
    const S = [f("div", { class: _.value }, Pe(t.default)), f("div", { class: "q-pull-to-refresh__puller-container fixed row flex-center no-pointer-events z-top", style: c.value }, [f("div", { class: u.value, style: v.value }, [a.value !== "refreshing" ? f(tt, { name: e.icon || l.iconSet.pullToRefresh.icon, color: e.color, size: "32px" }) : f(Sn, { size: "24px", color: e.color })])])];
    return xn("div", { class: "q-pull-to-refresh" }, S, "main", e.disable === false, () => g.value);
  };
} });
var il = { MIN: 0, RANGE: 1, MAX: 2 };
me({ name: "QRange", props: { ...ih, modelValue: { type: Object, default: () => ({ min: null, max: null }), validator: (e) => "min" in e && "max" in e }, dragRange: Boolean, dragOnlyRange: Boolean, leftLabelColor: String, leftLabelTextColor: String, rightLabelColor: String, rightLabelTextColor: String, leftLabelValue: [String, Number], rightLabelValue: [String, Number], leftThumbColor: String, rightThumbColor: String }, emits: uh, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = xe(), { state: r, methods: l } = sh({ updateValue: z, updatePosition: B, getDragging: L, formAttrs: m(() => ({ type: "hidden", name: e.name, value: `${e.modelValue.min}|${e.modelValue.max}` })) }), a = U(null), o = U(0), i = U(0), s = U({ min: 0, max: 0 });
  function d() {
    s.value.min = e.modelValue.min === null ? r.innerMin.value : vt(e.modelValue.min, r.innerMin.value, r.innerMax.value), s.value.max = e.modelValue.max === null ? r.innerMax.value : vt(e.modelValue.max, r.innerMin.value, r.innerMax.value);
  }
  he(() => `${e.modelValue.min}|${e.modelValue.max}|${r.innerMin.value}|${r.innerMax.value}`, d), d();
  const c = m(() => l.convertModelToRatio(s.value.min)), v = m(() => l.convertModelToRatio(s.value.max)), u = m(() => r.active.value === true ? o.value : c.value), h = m(() => r.active.value === true ? i.value : v.value), g = m(() => {
    const q = { [r.positionProp.value]: `${100 * u.value}%`, [r.sizeProp.value]: `${100 * (h.value - u.value)}%` };
    return e.selectionImg !== void 0 && (q.backgroundImage = `url(${e.selectionImg}) !important`), q;
  }), _ = m(() => {
    if (r.editable.value !== true) return {};
    if (n.platform.is.mobile === true) return { onClick: l.onMobileClick };
    const q = { onMousedown: l.onActivate };
    return (e.dragRange === true || e.dragOnlyRange === true) && Object.assign(q, { onFocus: () => {
      r.focus.value = "both";
    }, onBlur: l.onBlur, onKeydown: D, onKeyup: l.onKeyup }), q;
  });
  function w(q) {
    return n.platform.is.mobile !== true && r.editable.value === true && e.dragOnlyRange !== true ? { onFocus: () => {
      r.focus.value = q;
    }, onBlur: l.onBlur, onKeydown: D, onKeyup: l.onKeyup } : {};
  }
  const k = m(() => e.dragOnlyRange !== true ? r.tabindex.value : null), y = m(() => n.platform.is.mobile !== true && (e.dragRange || e.dragOnlyRange === true) ? r.tabindex.value : null), p = U(null), b = m(() => w("min")), S = l.getThumbRenderFn({ focusValue: "min", getNodeData: () => ({ ref: p, key: "tmin", ...b.value, tabindex: k.value }), ratio: u, label: m(() => e.leftLabelValue !== void 0 ? e.leftLabelValue : s.value.min), thumbColor: m(() => e.leftThumbColor || e.thumbColor || e.color), labelColor: m(() => e.leftLabelColor || e.labelColor), labelTextColor: m(() => e.leftLabelTextColor || e.labelTextColor) }), P = m(() => w("max")), F = l.getThumbRenderFn({ focusValue: "max", getNodeData: () => ({ ...P.value, key: "tmax", tabindex: k.value }), ratio: h, label: m(() => e.rightLabelValue !== void 0 ? e.rightLabelValue : s.value.max), thumbColor: m(() => e.rightThumbColor || e.thumbColor || e.color), labelColor: m(() => e.rightLabelColor || e.labelColor), labelTextColor: m(() => e.rightLabelTextColor || e.labelTextColor) });
  function z(q) {
    (s.value.min !== e.modelValue.min || s.value.max !== e.modelValue.max) && t("update:modelValue", { ...s.value }), q === true && t("change", { ...s.value });
  }
  function L(q) {
    const { left: R, top: C, width: H, height: Q } = a.value.getBoundingClientRect(), K = e.dragOnlyRange === true ? 0 : e.vertical === true ? p.value.offsetHeight / (2 * Q) : p.value.offsetWidth / (2 * H), G = { left: R, top: C, width: H, height: Q, valueMin: s.value.min, valueMax: s.value.max, ratioMin: c.value, ratioMax: v.value }, re = l.getDraggingRatio(q, G);
    return e.dragOnlyRange !== true && re < G.ratioMin + K ? G.type = il.MIN : e.dragOnlyRange === true || re < G.ratioMax - K ? e.dragRange === true || e.dragOnlyRange === true ? (G.type = il.RANGE, Object.assign(G, { offsetRatio: re, offsetModel: l.convertRatioToModel(re), rangeValue: G.valueMax - G.valueMin, rangeRatio: G.ratioMax - G.ratioMin })) : G.type = G.ratioMax - re < re - G.ratioMin ? il.MAX : il.MIN : G.type = il.MAX, G;
  }
  function B(q, R = r.dragging.value) {
    let C;
    const H = l.getDraggingRatio(q, R), Q = l.convertRatioToModel(H);
    switch (R.type) {
      case il.MIN:
        H <= R.ratioMax ? (C = { minR: H, maxR: R.ratioMax, min: Q, max: R.valueMax }, r.focus.value = "min") : (C = { minR: R.ratioMax, maxR: H, min: R.valueMax, max: Q }, r.focus.value = "max");
        break;
      case il.MAX:
        H >= R.ratioMin ? (C = { minR: R.ratioMin, maxR: H, min: R.valueMin, max: Q }, r.focus.value = "max") : (C = { minR: H, maxR: R.ratioMin, min: Q, max: R.valueMin }, r.focus.value = "min");
        break;
      case il.RANGE:
        const K = H - R.offsetRatio, G = vt(R.ratioMin + K, r.innerMinRatio.value, r.innerMaxRatio.value - R.rangeRatio), re = Q - R.offsetModel, pe = vt(R.valueMin + re, r.innerMin.value, r.innerMax.value - R.rangeValue);
        C = { minR: G, maxR: G + R.rangeRatio, min: r.roundValueFn.value(pe), max: r.roundValueFn.value(pe + R.rangeValue) }, r.focus.value = "both";
        break;
    }
    s.value = s.value.min === null || s.value.max === null ? { min: C.min || e.min, max: C.max || e.max } : { min: C.min, max: C.max }, e.snap !== true || e.step === 0 ? (o.value = C.minR, i.value = C.maxR) : (o.value = l.convertModelToRatio(s.value.min), i.value = l.convertModelToRatio(s.value.max));
  }
  function D(q) {
    if (Zs.includes(q.keyCode) === false) return;
    Ue(q);
    const R = ([34, 33].includes(q.keyCode) ? 10 : 1) * r.keyStep.value, C = ([34, 37, 40].includes(q.keyCode) ? -1 : 1) * (r.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * R;
    if (r.focus.value === "both") {
      const H = s.value.max - s.value.min, Q = vt(r.roundValueFn.value(s.value.min + C), r.innerMin.value, r.innerMax.value - H);
      s.value = { min: Q, max: r.roundValueFn.value(Q + H) };
    } else {
      if (r.focus.value === false) return;
      {
        const H = r.focus.value;
        s.value = { ...s.value, [H]: vt(r.roundValueFn.value(s.value[H] + C), H === "min" ? r.innerMin.value : s.value.min, H === "max" ? r.innerMax.value : s.value.max) };
      }
    }
    z();
  }
  return () => {
    const q = l.getContent(g, y, _, (R) => {
      R.push(S(), F());
    });
    return f("div", { ref: a, class: "q-range " + r.classes.value + (e.modelValue.min === null || e.modelValue.max === null ? " q-slider--no-value" : ""), ...r.attributes.value, "aria-valuenow": e.modelValue.min + "|" + e.modelValue.max }, q);
  };
} });
me({ name: "QRating", props: { ...nl, ...Cn, modelValue: { type: Number, required: true }, max: { type: [String, Number], default: 5 }, icon: [String, Array], iconHalf: [String, Array], iconSelected: [String, Array], iconAriaLabel: [String, Array], color: [String, Array], colorHalf: [String, Array], colorSelected: [String, Array], noReset: Boolean, noDimming: Boolean, readonly: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = ll(e), a = Ia(e), o = Ml(a), i = U(0);
  let s = {};
  const d = m(() => e.readonly !== true && e.disable !== true), c = m(() => `q-rating row inline items-center q-rating--${d.value === true ? "" : "non-"}editable` + (e.noDimming === true ? " q-rating--no-dimming" : "") + (e.disable === true ? " disabled" : "") + (e.color !== void 0 && Array.isArray(e.color) === false ? ` text-${e.color}` : "")), v = m(() => {
    const p = Array.isArray(e.icon) === true ? e.icon.length : 0, b = Array.isArray(e.iconSelected) === true ? e.iconSelected.length : 0, S = Array.isArray(e.iconHalf) === true ? e.iconHalf.length : 0, P = Array.isArray(e.color) === true ? e.color.length : 0, F = Array.isArray(e.colorSelected) === true ? e.colorSelected.length : 0, z = Array.isArray(e.colorHalf) === true ? e.colorHalf.length : 0;
    return { iconLen: p, icon: p > 0 ? e.icon[p - 1] : e.icon, selIconLen: b, selIcon: b > 0 ? e.iconSelected[b - 1] : e.iconSelected, halfIconLen: S, halfIcon: S > 0 ? e.iconHalf[b - 1] : e.iconHalf, colorLen: P, color: P > 0 ? e.color[P - 1] : e.color, selColorLen: F, selColor: F > 0 ? e.colorSelected[F - 1] : e.colorSelected, halfColorLen: z, halfColor: z > 0 ? e.colorHalf[z - 1] : e.colorHalf };
  }), u = m(() => {
    if (typeof e.iconAriaLabel == "string") {
      const p = e.iconAriaLabel.length !== 0 ? `${e.iconAriaLabel} ` : "";
      return (b) => `${p}${b}`;
    }
    if (Array.isArray(e.iconAriaLabel) === true) {
      const p = e.iconAriaLabel.length;
      if (p > 0) return (b) => e.iconAriaLabel[Math.min(b, p) - 1];
    }
    return (p, b) => `${b} ${p}`;
  }), h = m(() => {
    const p = [], b = v.value, S = Math.ceil(e.modelValue), P = d.value === true ? 0 : null, F = e.iconHalf === void 0 || S === e.modelValue ? -1 : S;
    for (let z = 1; z <= e.max; z++) {
      const L = i.value === 0 && e.modelValue >= z || i.value > 0 && i.value >= z, B = F === z && i.value < z, D = i.value > 0 && (B === true ? S : e.modelValue) >= z && i.value < z, q = B === true ? z <= b.halfColorLen ? e.colorHalf[z - 1] : b.halfColor : b.selColor !== void 0 && L === true ? z <= b.selColorLen ? e.colorSelected[z - 1] : b.selColor : z <= b.colorLen ? e.color[z - 1] : b.color, R = (B === true ? z <= b.halfIconLen ? e.iconHalf[z - 1] : b.halfIcon : b.selIcon !== void 0 && (L === true || D === true) ? z <= b.selIconLen ? e.iconSelected[z - 1] : b.selIcon : z <= b.iconLen ? e.icon[z - 1] : b.icon) || r.iconSet.rating.icon;
      p.push({ name: (B === true ? z <= b.halfIconLen ? e.iconHalf[z - 1] : b.halfIcon : b.selIcon !== void 0 && (L === true || D === true) ? z <= b.selIconLen ? e.iconSelected[z - 1] : b.selIcon : z <= b.iconLen ? e.icon[z - 1] : b.icon) || r.iconSet.rating.icon, attrs: { tabindex: P, role: "radio", "aria-checked": e.modelValue === z ? "true" : "false", "aria-label": u.value(z, R) }, iconClass: "q-rating__icon" + (L === true || B === true ? " q-rating__icon--active" : "") + (D === true ? " q-rating__icon--exselected" : "") + (i.value === z ? " q-rating__icon--hovered" : "") + (q !== void 0 ? ` text-${q}` : "") });
    }
    return p;
  }), g = m(() => {
    const p = { role: "radiogroup" };
    return e.disable === true && (p["aria-disabled"] = "true"), e.readonly === true && (p["aria-readonly"] = "true"), p;
  });
  function _(p) {
    if (d.value === true) {
      const b = vt(parseInt(p, 10), 1, parseInt(e.max, 10)), S = e.noReset !== true && e.modelValue === b ? 0 : b;
      S !== e.modelValue && n("update:modelValue", S), i.value = 0;
    }
  }
  function w(p) {
    d.value === true && (i.value = p);
  }
  function k(p, b) {
    switch (p.keyCode) {
      case 13:
      case 32:
        return _(b), Ue(p);
      case 37:
      case 40:
        return s[`rt${b - 1}`] && s[`rt${b - 1}`].focus(), Ue(p);
      case 39:
      case 38:
        return s[`rt${b + 1}`] && s[`rt${b + 1}`].focus(), Ue(p);
    }
  }
  function y() {
    i.value = 0;
  }
  return $r(() => {
    s = {};
  }), () => {
    const p = [];
    return h.value.forEach(({ iconClass: b, name: S, attrs: P }, F) => {
      const z = F + 1;
      p.push(f("div", { key: z, ref: (L) => {
        s[`rt${z}`] = L;
      }, class: "q-rating__icon-container flex flex-center", ...P, onClick() {
        _(z);
      }, onMouseover() {
        w(z);
      }, onMouseout: y, onFocus() {
        w(z);
      }, onBlur: y, onKeyup(L) {
        k(L, z);
      } }, Mt(t[`tip-${z}`], [f(tt, { class: b, name: S })])));
    }), e.name !== void 0 && e.disable !== true && o(p, "push"), f("div", { class: c.value, style: l.value, ...g.value }, p);
  };
} });
me({ name: "QResponsive", props: nc, setup(e, { slots: t }) {
  const n = lc(e);
  return () => f("div", { class: "q-responsive" }, [f("div", { class: "q-responsive__filler overflow-hidden" }, [f("div", { style: n.value })]), f("div", { class: "q-responsive__content absolute-full fit" }, Pe(t.default))]);
} });
var t_ = me({ props: ["store", "barStyle", "verticalBarStyle", "horizontalBarStyle"], setup(e) {
  return () => [f("div", { class: e.store.scroll.vertical.barClass.value, style: [e.barStyle, e.verticalBarStyle], "aria-hidden": "true", onMousedown: e.store.onVerticalMousedown }), f("div", { class: e.store.scroll.horizontal.barClass.value, style: [e.barStyle, e.horizontalBarStyle], "aria-hidden": "true", onMousedown: e.store.onHorizontalMousedown }), dn(f("div", { ref: e.store.scroll.vertical.ref, class: e.store.scroll.vertical.thumbClass.value, style: e.store.scroll.vertical.style.value, "aria-hidden": "true" }), e.store.thumbVertDir), dn(f("div", { ref: e.store.scroll.horizontal.ref, class: e.store.scroll.horizontal.thumbClass.value, style: e.store.scroll.horizontal.style.value, "aria-hidden": "true" }), e.store.thumbHorizDir)];
} }), Yd = ["vertical", "horizontal"], du = { vertical: { offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y" }, horizontal: { offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x" } }, Xd = { prevent: true, mouse: true, mouseAllDir: true }, Gd = (e) => e >= 250 ? 50 : Math.ceil(e / 5), n_ = me({ name: "QScrollArea", props: { ...lt, thumbStyle: Object, verticalThumbStyle: Object, horizontalThumbStyle: Object, barStyle: [Array, String, Object], verticalBarStyle: [Array, String, Object], horizontalBarStyle: [Array, String, Object], verticalOffset: { type: Array, default: [0, 0] }, horizontalOffset: { type: Array, default: [0, 0] }, contentStyle: [Array, String, Object], contentActiveStyle: [Array, String, Object], delay: { type: [String, Number], default: 1e3 }, visible: { type: Boolean, default: null }, tabindex: [String, Number], onScroll: Function }, setup(e, { slots: t, emit: n }) {
  const r = U(false), l = U(false), a = U(false), o = { vertical: U(0), horizontal: U(0) }, i = { vertical: { ref: U(null), position: U(0), size: U(0) }, horizontal: { ref: U(null), position: U(0), size: U(0) } }, { proxy: s } = xe(), d = rt(e, s.$q);
  let c = null, v;
  const u = U(null), h = m(() => "q-scrollarea" + (d.value === true ? " q-scrollarea--dark" : ""));
  Object.assign(o, { verticalInner: m(() => o.vertical.value - e.verticalOffset[0] - e.verticalOffset[1]), horizontalInner: m(() => o.horizontal.value - e.horizontalOffset[0] - e.horizontalOffset[1]) }), i.vertical.percentage = m(() => {
    const C = i.vertical.size.value - o.vertical.value;
    if (C <= 0) return 0;
    const H = vt(i.vertical.position.value / C, 0, 1);
    return Math.round(H * 1e4) / 1e4;
  }), i.vertical.thumbHidden = m(() => (e.visible === null ? a.value : e.visible) !== true && r.value === false && l.value === false || i.vertical.size.value <= o.vertical.value + 1), i.vertical.thumbStart = m(() => e.verticalOffset[0] + i.vertical.percentage.value * (o.verticalInner.value - i.vertical.thumbSize.value)), i.vertical.thumbSize = m(() => Math.round(vt(o.verticalInner.value * o.verticalInner.value / i.vertical.size.value, Gd(o.verticalInner.value), o.verticalInner.value))), i.vertical.style = m(() => ({ ...e.thumbStyle, ...e.verticalThumbStyle, top: `${i.vertical.thumbStart.value}px`, height: `${i.vertical.thumbSize.value}px`, right: `${e.horizontalOffset[1]}px` })), i.vertical.thumbClass = m(() => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (i.vertical.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), i.vertical.barClass = m(() => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (i.vertical.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : "")), i.horizontal.percentage = m(() => {
    const C = i.horizontal.size.value - o.horizontal.value;
    if (C <= 0) return 0;
    const H = vt(Math.abs(i.horizontal.position.value) / C, 0, 1);
    return Math.round(H * 1e4) / 1e4;
  }), i.horizontal.thumbHidden = m(() => (e.visible === null ? a.value : e.visible) !== true && r.value === false && l.value === false || i.horizontal.size.value <= o.horizontal.value + 1), i.horizontal.thumbStart = m(() => e.horizontalOffset[0] + i.horizontal.percentage.value * (o.horizontalInner.value - i.horizontal.thumbSize.value)), i.horizontal.thumbSize = m(() => Math.round(vt(o.horizontalInner.value * o.horizontalInner.value / i.horizontal.size.value, Gd(o.horizontalInner.value), o.horizontalInner.value))), i.horizontal.style = m(() => ({ ...e.thumbStyle, ...e.horizontalThumbStyle, [s.$q.lang.rtl === true ? "right" : "left"]: `${i.horizontal.thumbStart.value}px`, width: `${i.horizontal.thumbSize.value}px`, bottom: `${e.verticalOffset[1]}px` })), i.horizontal.thumbClass = m(() => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (i.horizontal.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), i.horizontal.barClass = m(() => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (i.horizontal.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : ""));
  const g = m(() => i.vertical.thumbHidden.value === true && i.horizontal.thumbHidden.value === true ? e.contentStyle : e.contentActiveStyle);
  function _() {
    const C = {};
    return Yd.forEach((H) => {
      const Q = i[H];
      Object.assign(C, { [H + "Position"]: Q.position.value, [H + "Percentage"]: Q.percentage.value, [H + "Size"]: Q.size.value, [H + "ContainerSize"]: o[H].value, [H + "ContainerInnerSize"]: o[H + "Inner"].value });
    }), C;
  }
  const w = Pr(() => {
    const C = _();
    C.ref = s, n("scroll", C);
  }, 0);
  function k(C, H, Q) {
    if (Yd.includes(C) === false) {
      console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
      return;
    }
    (C === "vertical" ? Cr : Qi)(u.value, H, Q);
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
      v = Q.position.value, l.value = true;
    } else if (l.value !== true) return;
    C.isFinal === true && (l.value = false);
    const K = du[H], G = (Q.size.value - o[H].value) / (o[H + "Inner"].value - Q.thumbSize.value), re = C.distance[K.dist], pe = v + (C.direction === K.dir ? 1 : -1) * re * G;
    z(pe, H);
  }
  function P(C, H) {
    const Q = i[H];
    if (Q.thumbHidden.value !== true) {
      const K = H === "vertical" ? e.verticalOffset[0] : e.horizontalOffset[0], G = C[du[H].offset] - K, re = Q.thumbStart.value - K;
      if (G < re || G > re + Q.thumbSize.value) {
        const pe = G - Q.thumbSize.value / 2, Y = vt(pe / (o[H + "Inner"].value - Q.thumbSize.value), 0, 1);
        z(Y * Math.max(0, Q.size.value - o[H].value), H);
      }
      Q.ref.value !== null && Q.ref.value.dispatchEvent(new MouseEvent(C.type, C));
    }
  }
  function F() {
    r.value = true, c !== null && clearTimeout(c), c = setTimeout(() => {
      c = null, r.value = false;
    }, e.delay), e.onScroll !== void 0 && w();
  }
  function z(C, H) {
    u.value[du[H].scroll] = C;
  }
  let L = null;
  function B() {
    L !== null && clearTimeout(L), L = setTimeout(() => {
      L = null, a.value = true;
    }, s.$q.platform.is.ios ? 50 : 0);
  }
  function D() {
    L !== null && (clearTimeout(L), L = null), a.value = false;
  }
  let q = null;
  he(() => s.$q.lang.rtl, (C) => {
    u.value !== null && Qi(u.value, Math.abs(i.horizontal.position.value) * (C === true ? -1 : 1));
  }), In(() => {
    q = { top: i.vertical.position.value, left: i.horizontal.position.value };
  }), ql(() => {
    if (q === null) return;
    const C = u.value;
    C !== null && (Qi(C, q.left), Cr(C, q.top));
  }), Xe(w.cancel), Object.assign(s, { getScrollTarget: () => u.value, getScroll: _, getScrollPosition: () => ({ top: i.vertical.position.value, left: i.horizontal.position.value }), getScrollPercentage: () => ({ top: i.vertical.percentage.value, left: i.horizontal.percentage.value }), setScrollPosition: k, setScrollPercentage(C, H, Q) {
    k(C, H * (i[C].size.value - o[C].value) * (C === "horizontal" && s.$q.lang.rtl === true ? -1 : 1), Q);
  } });
  const R = { scroll: i, thumbVertDir: [[yn, (C) => {
    S(C, "vertical");
  }, void 0, { vertical: true, ...Xd }]], thumbHorizDir: [[yn, (C) => {
    S(C, "horizontal");
  }, void 0, { horizontal: true, ...Xd }]], onVerticalMousedown(C) {
    P(C, "vertical");
  }, onHorizontalMousedown(C) {
    P(C, "horizontal");
  } };
  return () => f("div", { class: h.value, onMouseenter: B, onMouseleave: D }, [f("div", { ref: u, class: "q-scrollarea__container scroll relative-position fit hide-scrollbar", tabindex: e.tabindex !== void 0 ? e.tabindex : void 0 }, [f("div", { class: "q-scrollarea__content absolute", style: g.value }, Mt(t.default, [f(Xl, { debounce: 0, onResize: b })])), f(Qh, { axis: "both", onScroll: p })]), f(Xl, { debounce: 0, onResize: y }), f(t_, { store: R, barStyle: e.barStyle, verticalBarStyle: e.verticalBarStyle, horizontalBarStyle: e.horizontalBarStyle })]);
} }), qn = 1e3, l_ = ["start", "center", "end", "start-force", "center-force", "end-force"], Yh = Array.prototype.filter, r_ = __QUASAR_SSR__ || window.getComputedStyle(document.body).overflowAnchor === void 0 ? Ct : function(e, t) {
  e !== null && (e._qOverflowAnimationFrame !== void 0 && cancelAnimationFrame(e._qOverflowAnimationFrame), e._qOverflowAnimationFrame = requestAnimationFrame(() => {
    if (e === null) return;
    e._qOverflowAnimationFrame = void 0;
    const n = e.children || [];
    Yh.call(n, (l) => l.dataset && l.dataset.qVsAnchor !== void 0).forEach((l) => {
      delete l.dataset.qVsAnchor;
    });
    const r = n[t];
    (r == null ? void 0 : r.dataset) && (r.dataset.qVsAnchor = "");
  }));
};
function kr(e, t) {
  return e + t;
}
function fu(e, t, n, r, l, a, o, i) {
  const s = e === window ? document.scrollingElement || document.documentElement : e, d = l === true ? "offsetWidth" : "offsetHeight", c = { scrollStart: 0, scrollViewSize: -o - i, scrollMaxSize: 0, offsetStart: -o, offsetEnd: -i };
  if (l === true ? (e === window ? (c.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, c.scrollViewSize += document.documentElement.clientWidth) : (c.scrollStart = s.scrollLeft, c.scrollViewSize += s.clientWidth), c.scrollMaxSize = s.scrollWidth, a === true && (c.scrollStart = (Ra === true ? c.scrollMaxSize - c.scrollViewSize : 0) - c.scrollStart)) : (e === window ? (c.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0, c.scrollViewSize += document.documentElement.clientHeight) : (c.scrollStart = s.scrollTop, c.scrollViewSize += s.clientHeight), c.scrollMaxSize = s.scrollHeight), n !== null) for (let v = n.previousElementSibling; v !== null; v = v.previousElementSibling) v.classList.contains("q-virtual-scroll--skip") === false && (c.offsetStart += v[d]);
  if (r !== null) for (let v = r.nextElementSibling; v !== null; v = v.nextElementSibling) v.classList.contains("q-virtual-scroll--skip") === false && (c.offsetEnd += v[d]);
  if (t !== e) {
    const v = s.getBoundingClientRect(), u = t.getBoundingClientRect();
    l === true ? (c.offsetStart += u.left - v.left, c.offsetEnd -= u.width) : (c.offsetStart += u.top - v.top, c.offsetEnd -= u.height), e !== window && (c.offsetStart += c.scrollStart), c.offsetEnd += c.scrollMaxSize - c.offsetStart;
  }
  return c;
}
function Zd(e, t, n, r) {
  t === "end" && (t = (e === window ? document.body : e)[n === true ? "scrollWidth" : "scrollHeight"]), e === window ? n === true ? (r === true && (t = (Ra === true ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - t), window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t) : n === true ? (r === true && (t = (Ra === true ? e.scrollWidth - e.offsetWidth : 0) - t), e.scrollLeft = t) : e.scrollTop = t;
}
function jr(e, t, n, r) {
  if (n >= r) return 0;
  const l = t.length, a = Math.floor(n / qn), o = Math.floor((r - 1) / qn) + 1;
  let i = e.slice(a, o).reduce(kr, 0);
  return n % qn !== 0 && (i -= t.slice(a * qn, n).reduce(kr, 0)), r % qn !== 0 && r !== l && (i -= t.slice(r, o * qn).reduce(kr, 0)), i;
}
var Xh = { virtualScrollSliceSize: { type: [Number, String], default: 10 }, virtualScrollSliceRatioBefore: { type: [Number, String], default: 1 }, virtualScrollSliceRatioAfter: { type: [Number, String], default: 1 }, virtualScrollItemSize: { type: [Number, String], default: 24 }, virtualScrollStickySizeStart: { type: [Number, String], default: 0 }, virtualScrollStickySizeEnd: { type: [Number, String], default: 0 }, tableColspan: [Number, String] }, Gh = Object.keys(Xh), rs = { virtualScrollHorizontal: Boolean, onVirtualScroll: Function, ...Xh };
function Zh({ virtualScrollLength: e, getVirtualScrollTarget: t, getVirtualScrollEl: n, virtualScrollItemSizeComputed: r }) {
  const l = xe(), { props: a, emit: o, proxy: i } = l, { $q: s } = i;
  let d, c, v, u = [], h;
  const g = U(0), _ = U(0), w = U({}), k = U(null), y = U(null), p = U(null), b = U({ from: 0, to: 0 }), S = m(() => a.tableColspan !== void 0 ? a.tableColspan : 100);
  r === void 0 && (r = m(() => a.virtualScrollItemSize));
  const P = m(() => r.value + ";" + a.virtualScrollHorizontal), F = m(() => P.value + ";" + a.virtualScrollSliceRatioBefore + ";" + a.virtualScrollSliceRatioAfter);
  he(F, () => {
    Q();
  }), he(P, z);
  function z() {
    H(c, true);
  }
  function L(Y) {
    H(Y === void 0 ? c : Y);
  }
  function B(Y, M) {
    const J = t();
    if (J == null || J.nodeType === 8) return;
    const ee = fu(J, n(), k.value, y.value, a.virtualScrollHorizontal, s.lang.rtl, a.virtualScrollStickySizeStart, a.virtualScrollStickySizeEnd);
    v !== ee.scrollViewSize && Q(ee.scrollViewSize), q(J, ee, Math.min(e.value - 1, Math.max(0, parseInt(Y, 10) || 0)), 0, l_.indexOf(M) !== -1 ? M : c !== -1 && Y > c ? "end" : "start");
  }
  function D() {
    const Y = t();
    if (Y == null || Y.nodeType === 8) return;
    const M = fu(Y, n(), k.value, y.value, a.virtualScrollHorizontal, s.lang.rtl, a.virtualScrollStickySizeStart, a.virtualScrollStickySizeEnd), J = e.value - 1, ee = M.scrollMaxSize - M.offsetStart - M.offsetEnd - _.value;
    if (d === M.scrollStart) return;
    if (M.scrollMaxSize <= 0) {
      q(Y, M, 0, 0);
      return;
    }
    v !== M.scrollViewSize && Q(M.scrollViewSize), R(b.value.from);
    const ge = Math.floor(M.scrollMaxSize - Math.max(M.scrollViewSize, M.offsetEnd) - Math.min(h[J], M.scrollViewSize / 2));
    if (ge > 0 && Math.ceil(M.scrollStart) >= ge) {
      q(Y, M, J, M.scrollMaxSize - M.offsetEnd - u.reduce(kr, 0));
      return;
    }
    let O = 0, A = M.scrollStart - M.offsetStart, $ = A;
    if (A <= ee && A + M.scrollViewSize >= g.value) A -= g.value, O = b.value.from, $ = A;
    else for (let T = 0; A >= u[T] && O < J; T++) A -= u[T], O += qn;
    for (; A > 0 && O < J; ) A -= h[O], A > -M.scrollViewSize ? (O++, $ = A) : $ = h[O] + A;
    q(Y, M, O, $);
  }
  function q(Y, M, J, ee, ge) {
    const O = typeof ge == "string" && ge.indexOf("-force") !== -1, A = O === true ? ge.replace("-force", "") : ge, $ = A !== void 0 ? A : "start";
    let T = Math.max(0, J - w.value[$]), N = T + w.value.total;
    N > e.value && (N = e.value, T = Math.max(0, N - w.value.total)), d = M.scrollStart;
    const _e2 = T !== b.value.from || N !== b.value.to;
    if (_e2 === false && A === void 0) {
      G(J);
      return;
    }
    const { activeElement: x } = document, E = p.value;
    _e2 === true && E !== null && E !== x && E.contains(x) === true && (E.addEventListener("focusout", C), setTimeout(() => {
      E == null ? void 0 : E.removeEventListener("focusout", C);
    })), r_(E, J - T);
    const I = A !== void 0 ? h.slice(T, J).reduce(kr, 0) : 0;
    if (_e2 === true) {
      const te = N >= b.value.from && T <= b.value.to ? b.value.to : N;
      b.value = { from: T, to: te }, g.value = jr(u, h, 0, T), _.value = jr(u, h, N, e.value), requestAnimationFrame(() => {
        b.value.to !== N && d === M.scrollStart && (b.value = { from: b.value.from, to: N }, _.value = jr(u, h, N, e.value));
      });
    }
    requestAnimationFrame(() => {
      if (d !== M.scrollStart) return;
      _e2 === true && R(T);
      const te = h.slice(T, J).reduce(kr, 0), ne = te + M.offsetStart + g.value, W = ne + h[J];
      let ue = ne + ee;
      if (A !== void 0) {
        const de = te - I, fe = M.scrollStart + de;
        ue = O !== true && fe < ne && W < fe + M.scrollViewSize ? fe : A === "end" ? W - M.scrollViewSize : ne - (A === "start" ? 0 : Math.round((M.scrollViewSize - h[J]) / 2));
      }
      d = ue, Zd(Y, ue, a.virtualScrollHorizontal, s.lang.rtl), G(J);
    });
  }
  function R(Y) {
    const M = p.value;
    if (M) {
      const J = Yh.call(M.children, (T) => T.classList && T.classList.contains("q-virtual-scroll--skip") === false), ee = J.length, ge = a.virtualScrollHorizontal === true ? (T) => T.getBoundingClientRect().width : (T) => T.offsetHeight;
      let O = Y, A, $;
      for (let T = 0; T < ee; ) {
        for (A = ge(J[T]), T++; T < ee && J[T].classList.contains("q-virtual-scroll--with-prev") === true; ) A += ge(J[T]), T++;
        $ = A - h[O], $ !== 0 && (h[O] += $, u[Math.floor(O / qn)] += $), O++;
      }
    }
  }
  function C() {
    var _a3;
    (_a3 = p.value) == null ? void 0 : _a3.focus();
  }
  function H(Y, M) {
    const J = 1 * r.value;
    (M === true || Array.isArray(h) === false) && (h = []);
    const ee = h.length;
    h.length = e.value;
    for (let O = e.value - 1; O >= ee; O--) h[O] = J;
    const ge = Math.floor((e.value - 1) / qn);
    u = [];
    for (let O = 0; O <= ge; O++) {
      let A = 0;
      const $ = Math.min((O + 1) * qn, e.value);
      for (let T = O * qn; T < $; T++) A += h[T];
      u.push(A);
    }
    c = -1, d = void 0, g.value = jr(u, h, 0, b.value.from), _.value = jr(u, h, b.value.to, e.value), Y >= 0 ? (R(b.value.from), We(() => {
      B(Y);
    })) : re();
  }
  function Q(Y) {
    if (Y === void 0 && typeof window < "u") {
      const A = t();
      A != null && A.nodeType !== 8 && (Y = fu(A, n(), k.value, y.value, a.virtualScrollHorizontal, s.lang.rtl, a.virtualScrollStickySizeStart, a.virtualScrollStickySizeEnd).scrollViewSize);
    }
    v = Y;
    const M = parseFloat(a.virtualScrollSliceRatioBefore) || 0, J = parseFloat(a.virtualScrollSliceRatioAfter) || 0, ee = 1 + M + J, ge = Y === void 0 || Y <= 0 ? 1 : Math.ceil(Y / r.value), O = Math.max(1, ge, Math.ceil((a.virtualScrollSliceSize > 0 ? a.virtualScrollSliceSize : 10) / ee));
    w.value = { total: Math.ceil(O * ee), start: Math.ceil(O * M), center: Math.ceil(O * (0.5 + M)), end: Math.ceil(O * (1 + M)), view: ge };
  }
  function K(Y, M) {
    const J = a.virtualScrollHorizontal === true ? "width" : "height", ee = { ["--q-virtual-scroll-item-" + J]: r.value + "px" };
    return [Y === "tbody" ? f(Y, { class: "q-virtual-scroll__padding", key: "before", ref: k }, [f("tr", [f("td", { style: { [J]: `${g.value}px`, ...ee }, colspan: S.value })])]) : f(Y, { class: "q-virtual-scroll__padding", key: "before", ref: k, style: { [J]: `${g.value}px`, ...ee } }), f(Y, { class: "q-virtual-scroll__content", key: "content", ref: p, tabindex: -1 }, M.flat()), Y === "tbody" ? f(Y, { class: "q-virtual-scroll__padding", key: "after", ref: y }, [f("tr", [f("td", { style: { [J]: `${_.value}px`, ...ee }, colspan: S.value })])]) : f(Y, { class: "q-virtual-scroll__padding", key: "after", ref: y, style: { [J]: `${_.value}px`, ...ee } })];
  }
  function G(Y) {
    c !== Y && (a.onVirtualScroll !== void 0 && o("virtualScroll", { index: Y, from: b.value.from, to: b.value.to - 1, direction: Y < c ? "decrease" : "increase", ref: i }), c = Y);
  }
  Q();
  const re = Pr(D, s.platform.is.ios === true ? 120 : 35);
  oi(() => {
    Q();
  });
  let pe = false;
  return In(() => {
    pe = true;
  }), ql(() => {
    if (pe !== true) return;
    const Y = t();
    d !== void 0 && Y !== void 0 && Y !== null && Y.nodeType !== 8 ? Zd(Y, d, a.virtualScrollHorizontal, s.lang.rtl) : B(c);
  }), __QUASAR_SSR__ || Xe(() => {
    re.cancel();
  }), Object.assign(i, { scrollTo: B, reset: z, refresh: L }), { virtualScrollSliceRange: b, virtualScrollSliceSizeComputed: w, setVirtualScrollSize: Q, onVirtualScrollEvt: re, localResetVirtualScroll: H, padVirtualScroll: K, scrollTo: B, reset: z, refresh: L };
}
var Jd = (e) => ["add", "add-unique", "toggle"].includes(e), a_ = ".*+?^${}()|[]\\", o_ = Object.keys(xi);
function vu(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (r) => r !== null && typeof r == "object" && n in r ? r[n] : r;
}
var i_ = me({ name: "QSelect", inheritAttrs: false, props: { ...rs, ...Cn, ...xi, modelValue: { required: true }, multiple: Boolean, displayValue: [String, Number], displayValueHtml: Boolean, dropdownIcon: String, options: { type: Array, default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], hideSelected: Boolean, hideDropdownIcon: Boolean, fillInput: Boolean, maxValues: [Number, String], optionsDense: Boolean, optionsDark: { type: Boolean, default: null }, optionsSelectedClass: String, optionsHtml: Boolean, optionsCover: Boolean, menuShrink: Boolean, menuAnchor: String, menuSelf: String, menuOffset: Array, popupContentClass: String, popupContentStyle: [String, Array, Object], popupNoRouteDismiss: Boolean, useInput: Boolean, useChips: Boolean, newValueMode: { type: String, validator: Jd }, mapOptions: Boolean, emitValue: Boolean, disableTabSelection: Boolean, inputDebounce: { type: [Number, String], default: 500 }, inputClass: [Array, String, Object], inputStyle: [Array, String, Object], tabindex: { type: [String, Number], default: 0 }, autocomplete: String, transitionShow: {}, transitionHide: {}, transitionDuration: {}, behavior: { type: String, validator: (e) => ["default", "menu", "dialog"].includes(e), default: "default" }, virtualScrollItemSize: rs.virtualScrollItemSize.type, onNewValue: Function, onFilter: Function }, emits: [...Si, "add", "remove", "inputValue", "keyup", "keypress", "keydown", "popupShow", "popupHide", "filterAbort"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = U(false), o = U(false), i = U(-1), s = U(""), d = U(false), c = U(false);
  let v = null, u = null, h, g, _, w = null, k, y, p, b;
  const S = U(null), P = U(null), F = U(null), z = U(null), L = U(null), B = Ns(e), D = Nh(ce), q = m(() => Array.isArray(e.options) ? e.options.length : 0), R = m(() => e.virtualScrollItemSize === void 0 ? e.optionsDense === true ? 24 : 48 : e.virtualScrollItemSize), { virtualScrollSliceRange: C, virtualScrollSliceSizeComputed: H, localResetVirtualScroll: Q, padVirtualScroll: K, onVirtualScrollEvt: G, scrollTo: re, setVirtualScrollSize: pe } = Zh({ virtualScrollLength: q, getVirtualScrollTarget: Qt, getVirtualScrollEl: Tt, virtualScrollItemSizeComputed: R }), Y = Ci(), M = m(() => {
    const Z = e.mapOptions === true && e.multiple !== true, Ae = e.modelValue !== void 0 && (e.modelValue !== null || Z === true) ? e.multiple === true && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
    if (e.mapOptions === true && Array.isArray(e.options) === true) {
      const $e = e.mapOptions === true && h !== void 0 ? h : [], nt = Ae.map((pt) => ae(pt, $e));
      return e.modelValue === null && Z === true ? nt.filter((pt) => pt !== null) : nt;
    }
    return Ae;
  }), J = m(() => {
    const Z = {};
    return o_.forEach((Ae) => {
      const $e = e[Ae];
      $e !== void 0 && (Z[Ae] = $e);
    }), Z;
  }), ee = m(() => e.optionsDark === null ? Y.isDark.value : e.optionsDark), ge = m(() => Zl(M.value)), O = m(() => {
    let Z = "q-field__input q-placeholder col";
    return e.hideSelected === true || M.value.length === 0 ? [Z, e.inputClass] : (Z += " q-field__input--padding", e.inputClass === void 0 ? Z : [Z, e.inputClass]);
  }), A = m(() => (e.virtualScrollHorizontal === true ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")), $ = m(() => q.value === 0), T = m(() => M.value.map((Z) => le.value(Z)).join(", ")), N = m(() => e.displayValue !== void 0 ? e.displayValue : T.value), _e2 = m(() => e.optionsHtml === true ? () => true : (Z) => (Z == null ? void 0 : Z.html) === true), x = m(() => e.displayValueHtml === true || e.displayValue === void 0 && (e.optionsHtml === true || M.value.some(_e2.value))), E = m(() => Y.focused.value === true ? e.tabindex : -1), I = m(() => {
    const Z = { tabindex: e.tabindex, role: "combobox", "aria-label": e.label, "aria-readonly": e.readonly === true ? "true" : "false", "aria-autocomplete": e.useInput === true ? "list" : "none", "aria-expanded": a.value === true ? "true" : "false", "aria-controls": `${Y.targetUid.value}_lb` };
    return i.value >= 0 && (Z["aria-activedescendant"] = `${Y.targetUid.value}_${i.value}`), Z;
  }), te = m(() => ({ id: `${Y.targetUid.value}_lb`, role: "listbox", "aria-multiselectable": e.multiple === true ? "true" : "false" })), ne = m(() => M.value.map((Z, Ae) => ({ index: Ae, opt: Z, html: _e2.value(Z), selected: true, removeAtIndex: qe, toggleOption: De, tabindex: E.value }))), W = m(() => {
    if (q.value === 0) return [];
    const { from: Z, to: Ae } = C.value;
    return e.options.slice(Z, Ae).map(($e, nt) => {
      const pt = j.value($e) === true, ht = ye($e) === true, Ht = Z + nt, Lt = { clickable: true, active: ht, activeClass: fe.value, manualFocus: true, focused: false, disable: pt, tabindex: -1, dense: e.optionsDense, dark: ee.value, role: "option", "aria-selected": ht === true ? "true" : "false", id: `${Y.targetUid.value}_${Ht}`, onClick: () => {
        De($e);
      } };
      return pt !== true && (i.value === Ht && (Lt.focused = true), l.platform.is.desktop === true && (Lt.onMousemove = () => {
        a.value === true && ie(Ht);
      })), { index: Ht, opt: $e, html: _e2.value($e), label: le.value($e), selected: Lt.active, focused: Lt.focused, toggleOption: De, setOptionIndex: ie, itemProps: Lt };
    });
  }), ue = m(() => e.dropdownIcon !== void 0 ? e.dropdownIcon : l.iconSet.arrow.dropdown), de = m(() => e.optionsCover === false && e.outlined !== true && e.standout !== true && e.borderless !== true && e.rounded !== true), fe = m(() => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : ""), se = m(() => vu(e.optionValue, "value")), le = m(() => vu(e.optionLabel, "label")), j = m(() => vu(e.optionDisable, "disable")), oe = m(() => M.value.map(se.value)), we = m(() => {
    const Z = { onInput: ce, onChange: D, onKeydown: st, onKeyup: Re, onKeypress: Ge, onFocus: Te, onClick(Ae) {
      g === true && St(Ae);
    } };
    return Z.onCompositionstart = Z.onCompositionupdate = Z.onCompositionend = D, Z;
  });
  he(M, (Z) => {
    h = Z, e.useInput === true && e.fillInput === true && e.multiple !== true && Y.innerLoading.value !== true && (o.value !== true && a.value !== true || ge.value !== true) && (_ !== true && fn(), (o.value === true || a.value === true) && Be(""));
  }, { immediate: true }), he(() => e.fillInput, fn), he(a, qi), he(q, Ug);
  function ke(Z) {
    return e.emitValue === true ? se.value(Z) : Z;
  }
  function Se(Z) {
    if (Z !== -1 && Z < M.value.length) if (e.multiple === true) {
      const Ae = e.modelValue.slice();
      n("remove", { index: Z, value: Ae.splice(Z, 1)[0] }), n("update:modelValue", Ae);
    } else n("update:modelValue", null);
  }
  function qe(Z) {
    Se(Z), Y.focus();
  }
  function je(Z, Ae) {
    const $e = ke(Z);
    if (e.multiple !== true) {
      e.fillInput === true && Fe(le.value(Z), true, true), n("update:modelValue", $e);
      return;
    }
    if (M.value.length === 0) {
      n("add", { index: 0, value: $e }), n("update:modelValue", e.multiple === true ? [$e] : $e);
      return;
    }
    if (Ae === true && ye(Z) === true || e.maxValues !== void 0 && e.modelValue.length >= e.maxValues) return;
    const nt = e.modelValue.slice();
    n("add", { index: nt.length, value: $e }), nt.push($e), n("update:modelValue", nt);
  }
  function De(Z, Ae) {
    var _a3;
    if (Y.editable.value !== true || Z === void 0 || j.value(Z) === true) return;
    const $e = se.value(Z);
    if (e.multiple !== true) {
      Ae !== true && (Fe(e.fillInput === true ? le.value(Z) : "", true, true), ot()), (_a3 = P.value) == null ? void 0 : _a3.focus(), (M.value.length === 0 || En(se.value(M.value[0]), $e) !== true) && n("update:modelValue", e.emitValue === true ? $e : Z);
      return;
    }
    if ((g !== true || d.value === true) && Y.focus(), Te(), M.value.length === 0) {
      const ht = e.emitValue === true ? $e : Z;
      n("add", { index: 0, value: ht }), n("update:modelValue", e.multiple === true ? [ht] : ht);
      return;
    }
    const nt = e.modelValue.slice(), pt = oe.value.findIndex((ht) => En(ht, $e));
    if (pt !== -1) n("remove", { index: pt, value: nt.splice(pt, 1)[0] });
    else {
      if (e.maxValues !== void 0 && nt.length >= e.maxValues) return;
      const ht = e.emitValue === true ? $e : Z;
      n("add", { index: nt.length, value: ht }), nt.push(ht);
    }
    n("update:modelValue", nt);
  }
  function ie(Z) {
    if (l.platform.is.desktop !== true) return;
    const Ae = Z !== -1 && Z < q.value ? Z : -1;
    i.value !== Ae && (i.value = Ae);
  }
  function be(Z = 1, Ae) {
    if (a.value === true) {
      let $e = i.value;
      do
        $e = Bo($e + Z, -1, q.value - 1);
      while ($e !== -1 && $e !== i.value && j.value(e.options[$e]) === true);
      i.value !== $e && (ie($e), re($e), Ae !== true && e.useInput === true && e.fillInput === true && Ce($e >= 0 ? le.value(e.options[$e]) : k, true));
    }
  }
  function ae(Z, Ae) {
    const $e = (nt) => En(se.value(nt), Z);
    return e.options.find($e) || Ae.find($e) || Z;
  }
  function ye(Z) {
    const Ae = se.value(Z);
    return oe.value.find(($e) => En($e, Ae)) !== void 0;
  }
  function Te(Z) {
    e.useInput === true && P.value !== null && (Z === void 0 || P.value === Z.target && Z.target.value === T.value) && P.value.select();
  }
  function Oe(Z) {
    wn(Z, 27) === true && a.value === true && (St(Z), ot(), fn()), n("keyup", Z);
  }
  function Re(Z) {
    const { value: Ae } = Z.target;
    if (Z.keyCode !== void 0) {
      Oe(Z);
      return;
    }
    if (Z.target.value = "", v !== null && (clearTimeout(v), v = null), u !== null && (clearTimeout(u), u = null), fn(), typeof Ae == "string" && Ae.length !== 0) {
      const $e = Ae.toLocaleLowerCase(), nt = (ht) => {
        const Ht = e.options.find((Lt) => String(ht.value(Lt)).toLocaleLowerCase() === $e);
        return Ht === void 0 ? false : (M.value.indexOf(Ht) === -1 ? De(Ht) : ot(), true);
      }, pt = (ht) => {
        nt(se) !== true && ht !== true && nt(le) !== true && Be(Ae, true, () => pt(true));
      };
      pt();
    } else Y.clearValue(Z);
  }
  function Ge(Z) {
    n("keypress", Z);
  }
  function st(Z) {
    if (n("keydown", Z), er(Z) === true) return;
    const Ae = s.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0), $e = Z.shiftKey !== true && e.disableTabSelection !== true && e.multiple !== true && (i.value !== -1 || Ae === true);
    if (Z.keyCode === 27) {
      It(Z);
      return;
    }
    if (Z.keyCode === 9 && $e === false) {
      Le();
      return;
    }
    if (Z.target === void 0 || Z.target.id !== Y.targetUid.value || Y.editable.value !== true) return;
    if (Z.keyCode === 40 && Y.innerLoading.value !== true && a.value === false) {
      Ue(Z), Ne();
      return;
    }
    if (Z.keyCode === 8 && (e.useChips === true || e.clearable === true) && e.hideSelected !== true && s.value.length === 0) {
      e.multiple === true && Array.isArray(e.modelValue) === true ? Se(e.modelValue.length - 1) : e.multiple !== true && e.modelValue !== null && n("update:modelValue", null);
      return;
    }
    (Z.keyCode === 35 || Z.keyCode === 36) && (typeof s.value != "string" || s.value.length === 0) && (Ue(Z), i.value = -1, be(Z.keyCode === 36 ? 1 : -1, e.multiple)), (Z.keyCode === 33 || Z.keyCode === 34) && H.value !== void 0 && (Ue(Z), i.value = Math.max(-1, Math.min(q.value, i.value + (Z.keyCode === 33 ? -1 : 1) * H.value.view)), be(Z.keyCode === 33 ? 1 : -1, e.multiple)), (Z.keyCode === 38 || Z.keyCode === 40) && (Ue(Z), be(Z.keyCode === 38 ? -1 : 1, e.multiple));
    const nt = q.value;
    if ((p === void 0 || b < Date.now()) && (p = ""), nt > 0 && e.useInput !== true && Z.key !== void 0 && Z.key.length === 1 && Z.altKey === false && Z.ctrlKey === false && Z.metaKey === false && (Z.keyCode !== 32 || p.length !== 0)) {
      a.value !== true && Ne(Z);
      const pt = Z.key.toLocaleLowerCase(), ht = p.length === 1 && p[0] === pt;
      b = Date.now() + 1500, ht === false && (Ue(Z), p += pt);
      const Ht = new RegExp("^" + p.split("").map((Ei) => a_.indexOf(Ei) !== -1 ? "\\" + Ei : Ei).join(".*"), "i");
      let Lt = i.value;
      if (ht === true || Lt < 0 || Ht.test(le.value(e.options[Lt])) !== true) do
        Lt = Bo(Lt + 1, -1, nt - 1);
      while (Lt !== i.value && (j.value(e.options[Lt]) === true || Ht.test(le.value(e.options[Lt])) !== true));
      i.value !== Lt && We(() => {
        ie(Lt), re(Lt), Lt >= 0 && e.useInput === true && e.fillInput === true && Ce(le.value(e.options[Lt]), true);
      });
      return;
    }
    if (!(Z.keyCode !== 13 && (Z.keyCode !== 32 || e.useInput === true || p !== "") && (Z.keyCode !== 9 || $e === false))) {
      if (Z.keyCode !== 9 && Ue(Z), i.value !== -1 && i.value < nt) {
        De(e.options[i.value]);
        return;
      }
      if (Ae === true) {
        const pt = (ht, Ht) => {
          var _a3;
          if (Ht) {
            if (Jd(Ht) !== true) return;
          } else Ht = e.newValueMode;
          if (Fe("", e.multiple !== true, true), ht == null) return;
          (Ht === "toggle" ? De : je)(ht, Ht === "add-unique"), e.multiple !== true && ((_a3 = P.value) == null ? void 0 : _a3.focus(), ot());
        };
        if (e.onNewValue !== void 0 ? n("newValue", s.value, pt) : pt(s.value), e.multiple !== true) return;
      }
      a.value === true ? Le() : Y.innerLoading.value !== true && Ne();
    }
  }
  function Tt() {
    return g === true ? L.value : F.value !== null && F.value.contentEl !== null ? F.value.contentEl : void 0;
  }
  function Qt() {
    return Tt();
  }
  function rl() {
    return e.hideSelected === true ? [] : t["selected-item"] !== void 0 ? ne.value.map((Z) => t["selected-item"](Z)).slice() : t.selected !== void 0 ? [].concat(t.selected()) : e.useChips === true ? ne.value.map((Z, Ae) => f(lh, { key: "option-" + Ae, removable: Y.editable.value === true && j.value(Z.opt) !== true, dense: true, textColor: e.color, tabindex: E.value, onRemove() {
      Z.removeAtIndex(Ae);
    } }, () => f("span", { class: "ellipsis", [Z.html === true ? "innerHTML" : "textContent"]: le.value(Z.opt) }))) : [f("span", { class: "ellipsis", [x.value === true ? "innerHTML" : "textContent"]: N.value })];
  }
  function on() {
    if ($.value === true) return t["no-option"] !== void 0 ? t["no-option"]({ inputValue: s.value }) : void 0;
    const Z = t.option !== void 0 ? t.option : ($e) => f(Mr, { key: $e.index, ...$e.itemProps }, () => f(bn, () => f(ts, () => f("span", { [$e.html === true ? "innerHTML" : "textContent"]: $e.label }))));
    let Ae = K("div", W.value.map(Z));
    return t["before-options"] !== void 0 && (Ae = t["before-options"]().concat(Ae)), Mt(t["after-options"], Ae);
  }
  function Nn(Z, Ae) {
    const $e = Ae === true ? { ...I.value, ...Y.splitAttrs.attributes.value } : void 0, nt = { ref: Ae === true ? P : void 0, key: "i_t", class: O.value, style: e.inputStyle, value: s.value !== void 0 ? s.value : "", type: "search", ...$e, id: Ae === true ? Y.targetUid.value : void 0, maxlength: e.maxlength, autocomplete: e.autocomplete, "data-autofocus": Z === true || e.autofocus === true || void 0, disabled: e.disable === true, readonly: e.readonly === true, ...we.value };
    return Z !== true && g === true && (Array.isArray(nt.class) === true ? nt.class = [...nt.class, "no-pointer-events"] : nt.class += " no-pointer-events"), f("input", nt);
  }
  function ce(Z) {
    v !== null && (clearTimeout(v), v = null), u !== null && (clearTimeout(u), u = null), !(Z && Z.target && Z.target.qComposing === true) && (Ce(Z.target.value || ""), _ = true, k = s.value, Y.focused.value !== true && (g !== true || d.value === true) && Y.focus(), e.onFilter !== void 0 && (v = setTimeout(() => {
      v = null, Be(s.value);
    }, e.inputDebounce)));
  }
  function Ce(Z, Ae) {
    s.value !== Z && (s.value = Z, Ae === true || e.inputDebounce === 0 || e.inputDebounce === "0" ? n("inputValue", Z) : u = setTimeout(() => {
      u = null, n("inputValue", Z);
    }, e.inputDebounce));
  }
  function Fe(Z, Ae, $e) {
    _ = $e !== true, e.useInput === true && (Ce(Z, true), (Ae === true || $e !== true) && (k = Z), Ae !== true && Be(Z));
  }
  function Be(Z, Ae, $e) {
    if (e.onFilter === void 0 || Ae !== true && Y.focused.value !== true) return;
    Y.innerLoading.value === true ? n("filterAbort") : (Y.innerLoading.value = true, c.value = true), Z !== "" && e.multiple !== true && M.value.length !== 0 && _ !== true && Z === le.value(M.value[0]) && (Z = "");
    const nt = setTimeout(() => {
      a.value === true && (a.value = false);
    }, 10);
    w !== null && clearTimeout(w), w = nt, n("filter", Z, (pt, ht) => {
      (Ae === true || Y.focused.value === true) && w === nt && (clearTimeout(w), typeof pt == "function" && pt(), c.value = false, We(() => {
        Y.innerLoading.value = false, Y.editable.value === true && (Ae === true ? a.value === true && ot() : a.value === true ? qi(true) : a.value = true), typeof ht == "function" && We(() => {
          ht(r);
        }), typeof $e == "function" && We(() => {
          $e(r);
        });
      }));
    }, () => {
      Y.focused.value === true && w === nt && (clearTimeout(w), Y.innerLoading.value = false, c.value = false), a.value === true && (a.value = false);
    });
  }
  function Qe() {
    return f(yi, { ref: F, class: A.value, style: e.popupContentStyle, modelValue: a.value, fit: e.menuShrink !== true, cover: e.optionsCover === true && $.value !== true && e.useInput !== true, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, dark: ee.value, noParentEvent: true, noRefocus: true, noFocus: true, noRouteDismiss: e.popupNoRouteDismiss, square: de.value, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, separateClosePopup: true, ...te.value, onScrollPassive: G, onBeforeShow: fc, onBeforeHide: _t2, onShow: bt }, on);
  }
  function _t2(Z) {
    vc(Z), Le();
  }
  function bt() {
    pe();
  }
  function V(Z) {
    var _a3;
    St(Z), (_a3 = P.value) == null ? void 0 : _a3.focus(), d.value = true, window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
  }
  function X(Z) {
    St(Z), We(() => {
      d.value = false;
    });
  }
  function ve() {
    const Z = [f(M1, { class: `col-auto ${Y.fieldClass.value}`, ...J.value, for: Y.targetUid.value, dark: ee.value, square: true, loading: c.value, itemAligned: false, filled: true, stackLabel: s.value.length !== 0, ...Y.splitAttrs.listeners.value, onFocus: V, onBlur: X }, { ...t, rawControl: () => Y.getControl(true), before: void 0, after: void 0 })];
    return a.value === true && Z.push(f("div", { ref: L, class: A.value + " scroll", style: e.popupContentStyle, ...te.value, onClick: It, onScrollPassive: G }, on())), f(wi, { ref: z, modelValue: o.value, position: e.useInput === true ? "top" : void 0, transitionShow: y, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, noRouteDismiss: e.popupNoRouteDismiss, onBeforeShow: fc, onBeforeHide: Ee, onHide: Me, onShow: Je }, () => f("div", { class: "q-select__dialog" + (ee.value === true ? " q-select__dialog--dark q-dark" : "") + (d.value === true ? " q-select__dialog--focused" : "") }, Z));
  }
  function Ee(Z) {
    vc(Z), z.value !== null && z.value.__updateRefocusTarget(Y.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")), Y.focused.value = false;
  }
  function Me(Z) {
    ot(), Y.focused.value === false && n("blur", Z), fn();
  }
  function Je() {
    const Z = document.activeElement;
    (Z === null || Z.id !== Y.targetUid.value) && P.value !== null && P.value !== Z && P.value.focus(), pe();
  }
  function Le() {
    o.value !== true && (i.value = -1, a.value === true && (a.value = false), Y.focused.value === false && (w !== null && (clearTimeout(w), w = null), Y.innerLoading.value === true && (n("filterAbort"), Y.innerLoading.value = false, c.value = false)));
  }
  function Ne(Z) {
    Y.editable.value === true && (g === true ? (Y.onControlFocusin(Z), o.value = true, We(() => {
      Y.focus();
    })) : Y.focus(), e.onFilter !== void 0 ? Be(s.value) : ($.value !== true || t["no-option"] !== void 0) && (a.value = true));
  }
  function ot() {
    o.value = false, Le();
  }
  function fn() {
    e.useInput === true && Fe(e.multiple !== true && e.fillInput === true && M.value.length !== 0 && le.value(M.value[0]) || "", true, true);
  }
  function qi(Z) {
    let Ae = -1;
    if (Z === true) {
      if (M.value.length !== 0) {
        const $e = se.value(M.value[0]);
        Ae = e.options.findIndex((nt) => En(se.value(nt), $e));
      }
      Q(Ae);
    }
    ie(Ae);
  }
  function Ug(Z, Ae) {
    a.value === true && Y.innerLoading.value === false && (Q(-1, true), We(() => {
      a.value === true && Y.innerLoading.value === false && (Z > Ae ? Q() : qi(true));
    }));
  }
  function dc() {
    o.value === false && F.value !== null && F.value.updatePosition();
  }
  function fc(Z) {
    Z !== void 0 && St(Z), n("popupShow", Z), Y.hasPopupOpen = true, Y.onControlFocusin(Z);
  }
  function vc(Z) {
    Z !== void 0 && St(Z), n("popupHide", Z), Y.hasPopupOpen = false, Y.onControlFocusout(Z);
  }
  function mc() {
    g = l.platform.is.mobile !== true && e.behavior !== "dialog" ? false : e.behavior !== "menu" && (e.useInput === true ? t["no-option"] !== void 0 || e.onFilter !== void 0 || $.value === false : true), y = l.platform.is.ios === true && g === true && e.useInput === true ? "fade" : e.transitionShow;
  }
  return $r(mc), ii(dc), mc(), Xe(() => {
    v !== null && clearTimeout(v), u !== null && clearTimeout(u);
  }), Object.assign(r, { showPopup: Ne, hidePopup: ot, removeAtIndex: Se, add: je, toggleOption: De, getOptionIndex: () => i.value, setOptionIndex: ie, moveOptionSelection: be, filter: Be, updateMenuPosition: dc, updateInputValue: Fe, isOptionSelected: ye, getEmittingOptionValue: ke, isOptionDisabled: (...Z) => j.value.apply(null, Z) === true, getOptionValue: (...Z) => se.value.apply(null, Z), getOptionLabel: (...Z) => le.value.apply(null, Z) }), Object.assign(Y, { innerValue: M, fieldClass: m(() => `q-select q-field--auto-height q-select--with${e.useInput !== true ? "out" : ""}-input q-select--with${e.useChips !== true ? "out" : ""}-chips q-select--${e.multiple === true ? "multiple" : "single"}`), inputRef: S, targetRef: P, hasValue: ge, showPopup: Ne, floatingLabel: m(() => e.hideSelected !== true && ge.value === true || typeof s.value == "number" || s.value.length !== 0 || Zl(e.displayValue)), getControlChild: () => {
    if (Y.editable.value !== false && (o.value === true || $.value !== true || t["no-option"] !== void 0)) return g === true ? ve() : Qe();
    Y.hasPopupOpen === true && (Y.hasPopupOpen = false);
  }, controlEvents: { onFocusin(Z) {
    Y.onControlFocusin(Z);
  }, onFocusout(Z) {
    Y.onControlFocusout(Z, () => {
      fn(), Le();
    });
  }, onClick(Z) {
    var _a3;
    if (It(Z), g !== true && a.value === true) {
      Le(), (_a3 = P.value) == null ? void 0 : _a3.focus();
      return;
    }
    Ne(Z);
  } }, getControl: (Z) => {
    const Ae = rl(), $e = Z === true || o.value !== true || g !== true;
    if (e.useInput === true) Ae.push(Nn(Z, $e));
    else if (Y.editable.value === true) {
      const pt = $e === true ? I.value : void 0;
      Ae.push(f("input", { ref: $e === true ? P : void 0, key: "d_t", class: "q-select__focus-target", id: $e === true ? Y.targetUid.value : void 0, value: N.value, readonly: true, "data-autofocus": Z === true || e.autofocus === true || void 0, ...pt, onKeydown: st, onKeyup: Oe, onKeypress: Ge })), $e === true && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && Ae.push(f("input", { class: "q-select__autocomplete-input", autocomplete: e.autocomplete, tabindex: -1, onKeyup: Re }));
    }
    if (B.value !== void 0 && e.disable !== true && oe.value.length !== 0) {
      const pt = oe.value.map((ht) => f("option", { value: ht, selected: true }));
      Ae.push(f("select", { class: "hidden", name: B.value, multiple: e.multiple }, pt));
    }
    const nt = e.useInput === true || $e !== true ? void 0 : Y.splitAttrs.attributes.value;
    return f("div", { class: "q-field__native row items-center", ...nt, ...Y.splitAttrs.listeners.value }, Ae);
  }, getInnerAppend: () => e.loading !== true && c.value !== true && e.hideDropdownIcon !== true ? [f(tt, { class: "q-select__dropdown-icon" + (a.value === true ? " rotate-180" : ""), name: ue.value })] : null }), ki(Y);
} }), u_ = ["text", "rect", "circle", "QBtn", "QBadge", "QChip", "QToolbar", "QCheckbox", "QRadio", "QToggle", "QSlider", "QRange", "QInput", "QAvatar"], s_ = ["wave", "pulse", "pulse-x", "pulse-y", "fade", "blink", "none"];
me({ name: "QSkeleton", props: { ...lt, tag: { type: String, default: "div" }, type: { type: String, validator: (e) => u_.includes(e), default: "rect" }, animation: { type: String, validator: (e) => s_.includes(e), default: "wave" }, animationSpeed: { type: [String, Number], default: 1500 }, square: Boolean, bordered: Boolean, size: String, width: String, height: String }, setup(e, { slots: t }) {
  const n = xe(), r = rt(e, n.proxy.$q), l = m(() => {
    const o = e.size !== void 0 ? [e.size, e.size] : [e.width, e.height];
    return { "--q-skeleton-speed": `${e.animationSpeed}ms`, width: o[0], height: o[1] };
  }), a = m(() => `q-skeleton q-skeleton--${r.value === true ? "dark" : "light"} q-skeleton--type-${e.type}` + (e.animation !== "none" ? ` q-skeleton--anim q-skeleton--anim-${e.animation}` : "") + (e.square === true ? " q-skeleton--square" : "") + (e.bordered === true ? " q-skeleton--bordered" : ""));
  return () => f(e.tag, { class: a.value, style: l.value }, Pe(t.default));
} });
var ef = [["left", "center", "start", "width"], ["right", "center", "end", "width"], ["top", "start", "center", "height"], ["bottom", "end", "center", "height"]];
me({ name: "QSlideItem", props: { ...lt, leftColor: String, rightColor: String, topColor: String, bottomColor: String, onSlide: Function }, emits: ["action", "top", "right", "bottom", "left"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = rt(e, l), { getCache: o } = za(), i = U(null);
  let s = null, d = {}, c = {}, v = {};
  const u = m(() => l.lang.rtl === true ? { left: "right", right: "left" } : { left: "left", right: "right" }), h = m(() => "q-slide-item q-item-type overflow-hidden" + (a.value === true ? " q-slide-item--dark q-dark" : ""));
  function g() {
    i.value.style.transform = "translate(0,0)";
  }
  function _(k, y, p) {
    e.onSlide !== void 0 && n("slide", { side: k, ratio: y, isReset: p });
  }
  function w(k) {
    const y = i.value;
    if (k.isFirst) d = { dir: null, size: { left: 0, right: 0, top: 0, bottom: 0 }, scale: 0 }, y.classList.add("no-transition"), ef.forEach((P) => {
      if (t[P[0]] !== void 0) {
        const F = v[P[0]];
        F.style.transform = "scale(1)", d.size[P[0]] = F.getBoundingClientRect()[P[3]];
      }
    }), d.axis = k.direction === "up" || k.direction === "down" ? "Y" : "X";
    else if (k.isFinal) {
      y.classList.remove("no-transition"), d.scale === 1 ? (y.style.transform = `translate${d.axis}(${d.dir * 100}%)`, s !== null && clearTimeout(s), s = setTimeout(() => {
        s = null, n(d.showing, { reset: g }), n("action", { side: d.showing, reset: g });
      }, 230)) : (y.style.transform = "translate(0,0)", _(d.showing, 0, true));
      return;
    } else k.direction = d.axis === "X" ? k.offset.x < 0 ? "left" : "right" : k.offset.y < 0 ? "up" : "down";
    if (t.left === void 0 && k.direction === u.value.right || t.right === void 0 && k.direction === u.value.left || t.top === void 0 && k.direction === "down" || t.bottom === void 0 && k.direction === "up") {
      y.style.transform = "translate(0,0)";
      return;
    }
    let p, b, S;
    d.axis === "X" ? (b = k.direction === "left" ? -1 : 1, p = b === 1 ? u.value.left : u.value.right, S = k.distance.x) : (b = k.direction === "up" ? -2 : 2, p = b === 2 ? "top" : "bottom", S = k.distance.y), !(d.dir !== null && Math.abs(b) !== Math.abs(d.dir)) && (d.dir !== b && (["left", "right", "top", "bottom"].forEach((P) => {
      c[P] && (c[P].style.visibility = p === P ? "visible" : "hidden");
    }), d.showing = p, d.dir = b), d.scale = Math.max(0, Math.min(1, (S - 40) / d.size[p])), y.style.transform = `translate${d.axis}(${S * b / Math.abs(b)}px)`, v[p].style.transform = `scale(${d.scale})`, _(p, d.scale, false));
  }
  return $r(() => {
    c = {}, v = {};
  }), Xe(() => {
    s !== null && clearTimeout(s);
  }), Object.assign(r, { reset: g }), () => {
    const k = [], y = { left: t[u.value.right] !== void 0, right: t[u.value.left] !== void 0, up: t.bottom !== void 0, down: t.top !== void 0 }, p = Object.keys(y).filter((S) => y[S] === true);
    ef.forEach((S) => {
      const P = S[0];
      t[P] !== void 0 && k.push(f("div", { key: P, ref: (F) => {
        c[P] = F;
      }, class: `q-slide-item__${P} absolute-full row no-wrap items-${S[1]} justify-${S[2]}` + (e[P + "Color"] !== void 0 ? ` bg-${e[P + "Color"]}` : "") }, [f("div", { ref: (F) => {
        v[P] = F;
      } }, t[P]())]));
    });
    const b = f("div", { key: `${p.length === 0 ? "only-" : ""} content`, ref: i, class: "q-slide-item__content" }, Pe(t.default));
    return p.length === 0 ? k.push(b) : k.push(dn(b, o("dir#" + p.join(""), () => {
      const S = { prevent: true, stop: true, mouse: true };
      return p.forEach((P) => {
        S[P] = true;
      }), [[yn, w, void 0, S]];
    }))), f("div", { class: h.value }, k);
  };
} });
me({ name: "QSpace", setup() {
  const e = f("div", { class: "q-space" });
  return () => e;
} });
var c_ = '<g transform="matrix(1 0 0 -1 0 80)"><rect width="10" height="20" rx="3"><animate attributeName="height" begin="0s" dur="4.3s" values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="15" width="10" height="80" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" width="10" height="50" rx="3"><animate attributeName="height" begin="0s" dur="1.4s" values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="45" width="10" height="30" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear" repeatCount="indefinite"></animate></rect></g>';
me({ name: "QSpinnerAudio", props: At, setup(e) {
  const { cSize: t, classes: n } = $t(e);
  return () => f("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 55 80", xmlns: "http://www.w3.org/2000/svg", innerHTML: c_ });
} });
var d_ = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"></animate></circle></g>';
me({ name: "QSpinnerBall", props: At, setup(e) {
  const { cSize: t, classes: n } = $t(e);
  return () => f("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 57 57", xmlns: "http://www.w3.org/2000/svg", innerHTML: d_ });
} });
var f_ = '<rect y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="60" width="15" height="140" rx="6"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="90" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="120" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect>';
me({ name: "QSpinnerBars", props: At, setup(e) {
  const { cSize: t, classes: n } = $t(e);
  return () => f("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 135 140", xmlns: "http://www.w3.org/2000/svg", innerHTML: f_ });
} });
var v_ = '<rect x="25" y="25" width="50" height="50" fill="none" stroke-width="4" stroke="currentColor"><animateTransform id="spinnerBox" attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" dur="0.5s" begin="rectBox.end"></animateTransform></rect><rect x="27" y="27" width="46" height="50" fill="currentColor"><animate id="rectBox" attributeName="height" begin="0s;spinnerBox.end" dur="1.3s" from="50" to="0" fill="freeze"></animate></rect>';
me({ name: "QSpinnerBox", props: At, setup(e) {
  const { cSize: t, classes: n } = $t(e);
  return () => f("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: v_ });
} });
var m_ = '<circle cx="50" cy="50" r="48" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="currentColor"></circle><line stroke-linecap="round" stroke-width="4" stroke-miterlimit="10" stroke="currentColor" x1="50" y1="50" x2="85" y2="50.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2s" repeatCount="indefinite"></animateTransform></line><line stroke-linecap="round" stroke-width="4" stroke-miterlimit="10" stroke="currentColor" x1="50" y1="50" x2="49.5" y2="74"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="15s" repeatCount="indefinite"></animateTransform></line>';
me({ name: "QSpinnerClock", props: At, setup(e) {
  const { cSize: t, classes: n } = $t(e);
  return () => f("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: m_ });
} });
var h_ = '<rect x="0" y="0" width="100" height="100" fill="none"></rect><path d="M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z" fill="currentColor"></path><circle cx="30" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;1;1" keyTimes="0;0.2;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="50" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.2;0.4;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="70" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.4;0.6;1" dur="1s" repeatCount="indefinite"></animate></circle>';
me({ name: "QSpinnerComment", props: At, setup(e) {
  const { cSize: t, classes: n } = $t(e);
  return () => f("svg", { class: n.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: h_ });
} });
var g_ = '<rect x="0" y="0" width="100" height="100" fill="none"></rect><g transform="translate(25 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.1s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(25 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.7"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.3s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.2s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g>';
me({ name: "QSpinnerCube", props: At, setup(e) {
  const { cSize: t, classes: n } = $t(e);
  return () => f("svg", { class: n.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: g_ });
} });
var b_ = '<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from=".5" to=".5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';
me({ name: "QSpinnerDots", props: At, setup(e) {
  const { cSize: t, classes: n } = $t(e);
  return () => f("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg", innerHTML: b_ });
} });
var p_ = '<g transform="translate(20 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(50 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.1s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(80 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.2s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g>';
me({ name: "QSpinnerFacebook", props: At, setup(e) {
  const { cSize: t, classes: n } = $t(e);
  return () => f("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid", innerHTML: p_ });
} });
var y_ = '<g transform="translate(-20,-20)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="90 50 50" to="0 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g><g transform="translate(20,20) rotate(15 50 50)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="90 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g>';
me({ name: "QSpinnerGears", props: At, setup(e) {
  const { cSize: t, classes: n } = $t(e);
  return () => f("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: y_ });
} });
var __ = '<circle cx="12.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="0s" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5"><animate attributeName="fill-opacity" begin="100ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="300ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="600ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="800ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="400ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="700ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="500ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="200ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';
me({ name: "QSpinnerGrid", props: At, setup(e) {
  const { cSize: t, classes: n } = $t(e);
  return () => f("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 105 105", xmlns: "http://www.w3.org/2000/svg", innerHTML: __ });
} });
var w_ = '<path d="M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.716-6.002 11.47-7.65 17.304-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.593-2.32 17.308 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0.7s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"></path>';
me({ name: "QSpinnerHearts", props: At, setup(e) {
  const { cSize: t, classes: n } = $t(e);
  return () => f("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 140 64", xmlns: "http://www.w3.org/2000/svg", innerHTML: w_ });
} });
var x_ = '<g><path fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10" d="M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"></path><clipPath id="uil-hourglass-clip1"><rect x="15" y="20" width="70" height="25"><animate attributeName="height" from="25" to="0" dur="1s" repeatCount="indefinite" values="25;0;0" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="20" to="45" dur="1s" repeatCount="indefinite" values="20;45;45" keyTimes="0;0.5;1"></animate></rect></clipPath><clipPath id="uil-hourglass-clip2"><rect x="15" y="55" width="70" height="25"><animate attributeName="height" from="0" to="25" dur="1s" repeatCount="indefinite" values="0;25;25" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="80" to="55" dur="1s" repeatCount="indefinite" values="80;55;55" keyTimes="0;0.5;1"></animate></rect></clipPath><path d="M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z" clip-path="url(#uil-hourglass-clip1)" fill="currentColor"></path><path d="M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z" clip-path="url(#uil-hourglass-clip2)" fill="currentColor"></path><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" repeatCount="indefinite" dur="1s" values="0 50 50;0 50 50;180 50 50" keyTimes="0;0.7;1"></animateTransform></g>';
me({ name: "QSpinnerHourglass", props: At, setup(e) {
  const { cSize: t, classes: n } = $t(e);
  return () => f("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: x_ });
} });
var S_ = '<path d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z" fill="none" stroke="currentColor" stroke-width="8" stroke-dasharray="10.691205342610678 10.691205342610678" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" from="0" to="21.382410685221355" begin="0" dur="2s" repeatCount="indefinite" fill="freeze"></animate></path>';
me({ name: "QSpinnerInfinity", props: At, setup(e) {
  const { cSize: t, classes: n } = $t(e);
  return () => f("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: S_ });
} });
var C_ = '<g stroke-width="4" stroke-linecap="round"><line y1="17" y2="29" transform="translate(32,32) rotate(180)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(210)"><animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(240)"><animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(270)"><animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(300)"><animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(330)"><animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(0)"><animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(30)"><animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(60)"><animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(90)"><animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(120)"><animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(150)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line></g>';
me({ name: "QSpinnerIos", props: At, setup(e) {
  const { cSize: t, classes: n } = $t(e);
  return () => f("svg", { class: n.value, width: t.value, height: t.value, stroke: "currentColor", fill: "currentColor", viewBox: "0 0 64 64", innerHTML: C_ });
} });
var k_ = '<circle cx="50" cy="50" r="44" fill="none" stroke-width="4" stroke-opacity=".5" stroke="currentColor"></circle><circle cx="8" cy="54" r="6" fill="currentColor" stroke-width="3" stroke="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 48" to="360 50 52" dur="2s" repeatCount="indefinite"></animateTransform></circle>';
me({ name: "QSpinnerOrbit", props: At, setup(e) {
  const { cSize: t, classes: n } = $t(e);
  return () => f("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: k_ });
} });
var T_ = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g>';
me({ name: "QSpinnerOval", props: At, setup(e) {
  const { cSize: t, classes: n } = $t(e);
  return () => f("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", innerHTML: T_ });
} });
var q_ = '<path d="M0 50A50 50 0 0 1 50 0L50 50L0 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="0.8s" repeatCount="indefinite"></animateTransform></path><path d="M50 0A50 50 0 0 1 100 50L50 50L50 0" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1.6s" repeatCount="indefinite"></animateTransform></path><path d="M100 50A50 50 0 0 1 50 100L50 50L100 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2.4s" repeatCount="indefinite"></animateTransform></path><path d="M50 100A50 50 0 0 1 0 50L50 50L50 100" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="3.2s" repeatCount="indefinite"></animateTransform></path>';
me({ name: "QSpinnerPie", props: At, setup(e) {
  const { cSize: t, classes: n } = $t(e);
  return () => f("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: q_ });
} });
var E_ = '<g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g>';
me({ name: "QSpinnerPuff", props: At, setup(e) {
  const { cSize: t, classes: n } = $t(e);
  return () => f("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 44 44", xmlns: "http://www.w3.org/2000/svg", innerHTML: E_ });
} });
var M_ = '<g transform="scale(0.55)"><circle cx="30" cy="150" r="30" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></circle><path d="M90,150h30c0-49.7-40.3-90-90-90v30C63.1,90,90,116.9,90,150z" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.1" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></path><path d="M150,150h30C180,67.2,112.8,0,30,0v30C96.3,30,150,83.7,150,150z" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.2" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></path></g>';
me({ name: "QSpinnerRadio", props: At, setup(e) {
  const { cSize: t, classes: n } = $t(e);
  return () => f("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: M_ });
} });
var R_ = '<g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2"><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="8"><animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"></animate></circle></g>';
me({ name: "QSpinnerRings", props: At, setup(e) {
  const { cSize: t, classes: n } = $t(e);
  return () => f("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 45 45", xmlns: "http://www.w3.org/2000/svg", innerHTML: R_ });
} });
var A_ = '<defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-color="currentColor" stop-opacity="0" offset="0%"></stop><stop stop-color="currentColor" stop-opacity=".631" offset="63.146%"></stop><stop stop-color="currentColor" offset="100%"></stop></linearGradient></defs><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></path><circle fill="currentColor" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></circle></g>';
me({ name: "QSpinnerTail", props: At, setup(e) {
  const { cSize: t, classes: n } = $t(e);
  return () => f("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", innerHTML: A_ });
} });
me({ name: "QSplitter", props: { ...lt, modelValue: { type: Number, required: true }, reverse: Boolean, unit: { type: String, default: "%", validator: (e) => ["%", "px"].includes(e) }, limits: { type: Array, validator: (e) => e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number" ? false : e[0] >= 0 && e[0] <= e[1] }, emitImmediately: Boolean, horizontal: Boolean, disable: Boolean, beforeClass: [Array, String, Object], afterClass: [Array, String, Object], separatorClass: [Array, String, Object], separatorStyle: [Array, String, Object] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = rt(e, r), a = U(null), o = { before: U(null), after: U(null) }, i = m(() => `q-splitter no-wrap ${e.horizontal === true ? "q-splitter--horizontal column" : "q-splitter--vertical row"} q-splitter--${e.disable === true ? "disabled" : "workable"}` + (l.value === true ? " q-splitter--dark" : "")), s = m(() => e.horizontal === true ? "height" : "width"), d = m(() => e.reverse !== true ? "before" : "after"), c = m(() => e.limits !== void 0 ? e.limits : e.unit === "%" ? [10, 90] : [50, 1 / 0]);
  function v(S) {
    return (e.unit === "%" ? S : Math.round(S)) + e.unit;
  }
  const u = m(() => ({ [d.value]: { [s.value]: v(e.modelValue) } }));
  let h, g, _, w, k;
  function y(S) {
    if (S.isFirst === true) {
      const F = a.value.getBoundingClientRect()[s.value];
      h = e.horizontal === true ? "up" : "left", g = e.unit === "%" ? 100 : F, _ = Math.min(g, c.value[1], Math.max(c.value[0], e.modelValue)), w = (e.reverse !== true ? 1 : -1) * (e.horizontal === true ? 1 : r.lang.rtl === true ? -1 : 1) * (e.unit === "%" ? F === 0 ? 0 : 100 / F : 1), a.value.classList.add("q-splitter--active");
      return;
    }
    if (S.isFinal === true) {
      k !== e.modelValue && n("update:modelValue", k), a.value.classList.remove("q-splitter--active");
      return;
    }
    const P = _ + w * (S.direction === h ? -1 : 1) * S.distance[e.horizontal === true ? "y" : "x"];
    k = Math.min(g, c.value[1], Math.max(c.value[0], P)), o[d.value].value.style[s.value] = v(k), e.emitImmediately === true && e.modelValue !== k && n("update:modelValue", k);
  }
  const p = m(() => [[yn, y, void 0, { [e.horizontal === true ? "vertical" : "horizontal"]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
  function b(S, P) {
    S < P[0] ? n("update:modelValue", P[0]) : S > P[1] && n("update:modelValue", P[1]);
  }
  return he(() => e.modelValue, (S) => {
    b(S, c.value);
  }), he(() => e.limits, () => {
    We(() => {
      b(e.modelValue, c.value);
    });
  }), () => {
    const S = [f("div", { ref: o.before, class: ["q-splitter__panel q-splitter__before" + (e.reverse === true ? " col" : ""), e.beforeClass], style: u.value.before }, Pe(t.before)), f("div", { class: ["q-splitter__separator", e.separatorClass], style: e.separatorStyle, "aria-disabled": e.disable === true ? "true" : void 0 }, [xn("div", { class: "q-splitter__separator-area absolute-full" }, Pe(t.separator), "sep", e.disable !== true, () => p.value)]), f("div", { ref: o.after, class: ["q-splitter__panel q-splitter__after" + (e.reverse === true ? "" : " col"), e.afterClass], style: u.value.after }, Pe(t.after))];
    return f("div", { class: i.value, ref: a }, Mt(t.default, S));
  };
} });
var Jh = me({ name: "StepHeader", props: { stepper: {}, step: {}, goToPanel: Function }, setup(e, { attrs: t }) {
  const { proxy: { $q: n } } = xe(), r = U(null), l = m(() => e.stepper.modelValue === e.step.name), a = m(() => {
    const w = e.step.disable;
    return w === true || w === "";
  }), o = m(() => {
    const w = e.step.error;
    return w === true || w === "";
  }), i = m(() => {
    const w = e.step.done;
    return a.value === false && (w === true || w === "");
  }), s = m(() => {
    const w = e.step.headerNav, k = w === true || w === "" || w === void 0;
    return a.value === false && e.stepper.headerNav && k;
  }), d = m(() => e.step.prefix && (l.value === false || e.stepper.activeIcon === "none") && (o.value === false || e.stepper.errorIcon === "none") && (i.value === false || e.stepper.doneIcon === "none")), c = m(() => {
    const w = e.step.icon || e.stepper.inactiveIcon;
    if (l.value === true) {
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
  }), v = m(() => {
    const w = o.value === true ? e.step.errorColor || e.stepper.errorColor : void 0;
    if (l.value === true) {
      const k = e.step.activeColor || e.stepper.activeColor || e.step.color;
      return k !== void 0 ? k : w;
    }
    return w !== void 0 ? w : a.value === false && i.value === true ? e.step.doneColor || e.stepper.doneColor || e.step.color || e.stepper.inactiveColor : e.step.color || e.stepper.inactiveColor;
  }), u = m(() => "q-stepper__tab col-grow flex items-center no-wrap relative-position" + (v.value !== void 0 ? ` text-${v.value}` : "") + (o.value === true ? " q-stepper__tab--error q-stepper__tab--error-with-" + (d.value === true ? "prefix" : "icon") : "") + (l.value === true ? " q-stepper__tab--active" : "") + (i.value === true ? " q-stepper__tab--done" : "") + (s.value === true ? " q-stepper__tab--navigation q-focusable q-hoverable" : "") + (a.value === true ? " q-stepper__tab--disabled" : "")), h = m(() => e.stepper.headerNav !== true ? false : s.value);
  function g() {
    var _a3;
    (_a3 = r.value) == null ? void 0 : _a3.focus(), l.value === false && e.goToPanel(e.step.name);
  }
  function _(w) {
    w.keyCode === 13 && l.value === false && e.goToPanel(e.step.name);
  }
  return () => {
    const w = { class: u.value };
    s.value === true && (w.onClick = g, w.onKeyup = _, Object.assign(w, a.value === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: t.tabindex || 0 }));
    const k = [f("div", { class: "q-focus-helper", tabindex: -1, ref: r }), f("div", { class: "q-stepper__dot row flex-center q-stepper__line relative-position" }, [f("span", { class: "row flex-center" }, [d.value === true ? e.step.prefix : f(tt, { name: c.value })])])];
    if (e.step.title !== void 0 && e.step.title !== null) {
      const y = [f("div", { class: "q-stepper__title" }, e.step.title)];
      e.step.caption !== void 0 && e.step.caption !== null && y.push(f("div", { class: "q-stepper__caption" }, e.step.caption)), k.push(f("div", { class: "q-stepper__label q-stepper__line relative-position" }, y));
    }
    return dn(f("div", w, k), [[gi, h.value]]);
  };
} });
function eg(e) {
  return f("div", { class: "q-stepper__step-content" }, [f("div", { class: "q-stepper__step-inner" }, Pe(e.default))]);
}
var tf = { setup(e, { slots: t }) {
  return () => eg(t);
} };
me({ name: "QStep", props: { ...js, icon: String, color: String, title: { type: String, required: true }, caption: String, prefix: [String, Number], doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String, headerNav: { type: Boolean, default: true }, done: Boolean, error: Boolean, onScroll: [Function, Array] }, setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), l = Rt(ym, ut);
  if (l === ut) return console.error("QStep needs to be a child of QStepper"), ut;
  const { getCache: a } = za(), o = U(null), i = m(() => l.value.modelValue === e.name), s = m(() => r.platform.is.ios !== true && r.platform.is.chrome === true || i.value !== true || l.value.vertical !== true ? {} : { onScroll(v) {
    const { target: u } = v;
    u.scrollTop > 0 && (u.scrollTop = 0), e.onScroll !== void 0 && n("scroll", v);
  } }), d = m(() => typeof e.name == "string" || typeof e.name == "number" ? e.name : String(e.name));
  function c() {
    const v = l.value.vertical;
    return v === true && l.value.keepAlive === true ? f(Mv, l.value.keepAliveProps.value, i.value === true ? [f(l.value.needsUniqueKeepAliveWrapper.value === true ? a(d.value, () => ({ ...tf, name: d.value })) : tf, { key: d.value }, t.default)] : void 0) : v !== true || i.value === true ? eg(t) : void 0;
  }
  return () => f("div", { ref: o, class: "q-stepper__step", role: "tabpanel", ...s.value }, l.value.vertical === true ? [f(Jh, { stepper: l.value, step: e, goToPanel: l.value.goToPanel }), l.value.animated === true ? f(tc, c) : c()] : [c()]);
} });
var $_ = /(-\w)/g;
function P_(e) {
  const t = {};
  for (const n in e) {
    const r = n.replace($_, (l) => l[1].toUpperCase());
    t[r] = e[n];
  }
  return t;
}
me({ name: "QStepper", props: { ...lt, ...Us, flat: Boolean, bordered: Boolean, alternativeLabels: Boolean, headerNav: Boolean, contracted: Boolean, headerClass: String, inactiveColor: String, inactiveIcon: String, doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String }, emits: Qs, setup(e, { slots: t }) {
  const n = xe(), r = rt(e, n.proxy.$q), { updatePanelsList: l, isValidPanelName: a, updatePanelIndex: o, getPanelContent: i, getPanels: s, panelDirectives: d, goToPanel: c, keepAliveProps: v, needsUniqueKeepAliveWrapper: u } = Ks();
  pn(ym, m(() => ({ goToPanel: c, keepAliveProps: v, needsUniqueKeepAliveWrapper: u, ...e })));
  const h = m(() => `q-stepper q-stepper--${e.vertical === true ? "vertical" : "horizontal"}` + (e.flat === true ? " q-stepper--flat" : "") + (e.bordered === true ? " q-stepper--bordered" : "") + (r.value === true ? " q-stepper--dark q-dark" : "")), g = m(() => `q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels === true ? "alternative" : "standard"}-labels` + (e.flat === false || e.bordered === true ? " q-stepper__header--border" : "") + (e.contracted === true ? " q-stepper__header--contracted" : "") + (e.headerClass !== void 0 ? ` ${e.headerClass}` : ""));
  function _() {
    const w = Pe(t.message, []);
    if (e.vertical === true) {
      a(e.modelValue) && o();
      const k = f("div", { class: "q-stepper__content" }, Pe(t.default));
      return w === void 0 ? [k] : w.concat(k);
    }
    return [f("div", { class: g.value }, s().map((k) => {
      const y = P_(k.props);
      return f(Jh, { key: y.name, stepper: e, step: y, goToPanel: c });
    })), w, xn("div", { class: "q-stepper__content q-panel-parent" }, i(), "cont", e.swipeable, () => d.value)];
  }
  return () => (l(t), f("div", { class: h.value }, Mt(t.navigation, _())));
} });
me({ name: "QStepperNavigation", setup(e, { slots: t }) {
  return () => f("div", { class: "q-stepper__nav" }, Pe(t.default));
} });
var L_ = me({ name: "QTh", props: { props: Object, autoWidth: Boolean }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const r = xe(), { proxy: { $q: l } } = r, a = (o) => {
    n("click", o);
  };
  return () => {
    if (e.props === void 0) return f("th", { class: e.autoWidth === true ? "q-table--col-auto-width" : "", onClick: a }, Pe(t.default));
    let o, i;
    const s = r.vnode.key;
    if (s) {
      if (o = e.props.colsMap[s], o === void 0) return;
    } else o = e.props.col;
    if (o.sortable === true) {
      const c = o.align === "right" ? "unshift" : "push";
      i = Oa(t.default, []), i[c](f(tt, { class: o.__iconClass, name: l.iconSet.table.arrowUp }));
    } else i = Pe(t.default);
    const d = { class: o.__thClass + (e.autoWidth === true ? " q-table--col-auto-width" : ""), style: o.headerStyle, onClick: (c) => {
      o.sortable === true && e.props.sort(o), a(c);
    } };
    return f("th", d, i);
  };
} });
function tg(e, t) {
  return f("div", e, [f("table", { class: "q-table" }, t)]);
}
var B_ = { list: Uh, table: Q1 }, F_ = ["list", "table", "__qtable"], O_ = me({ name: "QVirtualScroll", props: { ...rs, type: { type: String, default: "list", validator: (e) => F_.includes(e) }, items: { type: Array, default: () => [] }, itemsFn: Function, itemsSize: Number, scrollTarget: nr }, setup(e, { slots: t, attrs: n }) {
  let r;
  const l = U(null), a = m(() => e.itemsSize >= 0 && e.itemsFn !== void 0 ? parseInt(e.itemsSize, 10) : Array.isArray(e.items) ? e.items.length : 0), { virtualScrollSliceRange: o, localResetVirtualScroll: i, padVirtualScroll: s, onVirtualScrollEvt: d } = Zh({ virtualScrollLength: a, getVirtualScrollTarget: g, getVirtualScrollEl: h }), c = m(() => {
    if (a.value === 0) return [];
    const y = (p, b) => ({ index: o.value.from + b, item: p });
    return e.itemsFn === void 0 ? e.items.slice(o.value.from, o.value.to).map(y) : e.itemsFn(o.value.from, o.value.to - o.value.from).map(y);
  }), v = m(() => "q-virtual-scroll q-virtual-scroll" + (e.virtualScrollHorizontal === true ? "--horizontal" : "--vertical") + (e.scrollTarget !== void 0 ? "" : " scroll")), u = m(() => e.scrollTarget !== void 0 ? {} : { tabindex: 0 });
  he(a, () => {
    i();
  }), he(() => e.scrollTarget, () => {
    w(), _();
  });
  function h() {
    return l.value.$el || l.value;
  }
  function g() {
    return r;
  }
  function _() {
    r = zn(h(), e.scrollTarget), r.addEventListener("scroll", d, mt.passive);
  }
  function w() {
    r !== void 0 && (r.removeEventListener("scroll", d, mt.passive), r = void 0);
  }
  function k() {
    let y = s(e.type === "list" ? "div" : "tbody", c.value.map(t.default));
    return t.before !== void 0 && (y = t.before().concat(y)), Mt(t.after, y);
  }
  return oi(() => {
    i();
  }), ft(() => {
    _();
  }), ql(() => {
    _();
  }), In(() => {
    w();
  }), Xe(() => {
    w();
  }), () => {
    if (t.default === void 0) {
      console.error("QVirtualScroll: default scoped slot is required for rendering");
      return;
    }
    return e.type === "__qtable" ? tg({ ref: l, class: "q-table__middle " + v.value }, k()) : f(B_[e.type], { ...n, ref: l, class: [n.class, v.value], ...u.value }, k);
  };
} });
function V_(e, t) {
  return new Date(e) - new Date(t);
}
var D_ = { sortMethod: Function, binaryStateSort: Boolean, columnSortOrder: { type: String, validator: (e) => e === "ad" || e === "da", default: "ad" } };
function I_(e, t, n, r) {
  const l = m(() => {
    const { sortBy: i } = t.value;
    return i && n.value.find((s) => s.name === i) || null;
  }), a = m(() => e.sortMethod !== void 0 ? e.sortMethod : (i, s, d) => {
    const c = n.value.find((h) => h.name === s);
    if (c === void 0 || c.field === void 0) return i;
    const v = d === true ? -1 : 1, u = typeof c.field == "function" ? (h) => c.field(h) : (h) => h[c.field];
    return i.sort((h, g) => {
      let _ = u(h), w = u(g);
      return c.rawSort !== void 0 ? c.rawSort(_, w, h, g) * v : _ == null ? -1 * v : w == null ? 1 * v : c.sort !== void 0 ? c.sort(_, w, h, g) * v : qa(_) === true && qa(w) === true ? (_ - w) * v : Hu(_) === true && Hu(w) === true ? V_(_, w) * v : typeof _ == "boolean" && typeof w == "boolean" ? (_ - w) * v : ([_, w] = [_, w].map((k) => (k + "").toLocaleString().toLowerCase()), _ < w ? -1 * v : _ === w ? 0 : v);
    });
  });
  function o(i) {
    let s = e.columnSortOrder;
    if (Bt(i) === true) i.sortOrder && (s = i.sortOrder), i = i.name;
    else {
      const v = n.value.find((u) => u.name === i);
      (v == null ? void 0 : v.sortOrder) && (s = v.sortOrder);
    }
    let { sortBy: d, descending: c } = t.value;
    d !== i ? (d = i, c = s === "da") : e.binaryStateSort === true ? c = !c : c === true ? s === "ad" ? d = null : c = false : s === "ad" ? c = true : d = null, r({ sortBy: d, descending: c, page: 1 });
  }
  return { columnToSort: l, computedSortMethod: a, sort: o };
}
var z_ = { filter: [String, Object], filterMethod: Function };
function N_(e, t) {
  const n = m(() => e.filterMethod !== void 0 ? e.filterMethod : (r, l, a, o) => {
    const i = l ? l.toLowerCase() : "";
    return r.filter((s) => a.some((d) => {
      const c = o(d, s) + "";
      return (c === "undefined" || c === "null" ? "" : c.toLowerCase()).indexOf(i) !== -1;
    }));
  });
  return he(() => e.filter, () => {
    We(() => {
      t({ page: 1 }, true);
    });
  }, { deep: true }), { computedFilterMethod: n };
}
function H_(e, t) {
  for (const n in t) if (t[n] !== e[n]) return false;
  return true;
}
function nf(e) {
  return e.page < 1 && (e.page = 1), e.rowsPerPage !== void 0 && e.rowsPerPage < 1 && (e.rowsPerPage = 0), e;
}
var j_ = { pagination: Object, rowsPerPageOptions: { type: Array, default: () => [5, 7, 10, 15, 20, 25, 50, 0] }, "onUpdate:pagination": [Function, Array] };
function U_(e, t) {
  const { props: n, emit: r } = e, l = U(Object.assign({ sortBy: null, descending: false, page: 1, rowsPerPage: n.rowsPerPageOptions.length !== 0 ? n.rowsPerPageOptions[0] : 5 }, n.pagination)), a = m(() => {
    const c = n["onUpdate:pagination"] !== void 0 ? { ...l.value, ...n.pagination } : l.value;
    return nf(c);
  }), o = m(() => a.value.rowsNumber !== void 0);
  function i(c) {
    s({ pagination: c, filter: n.filter });
  }
  function s(c = {}) {
    We(() => {
      r("request", { pagination: c.pagination || a.value, filter: c.filter || n.filter, getCellValue: t });
    });
  }
  function d(c, v) {
    const u = nf({ ...a.value, ...c });
    if (H_(a.value, u) === true) {
      o.value === true && v === true && i(u);
      return;
    }
    if (o.value === true) {
      i(u);
      return;
    }
    n.pagination !== void 0 && n["onUpdate:pagination"] !== void 0 ? r("update:pagination", u) : l.value = u;
  }
  return { innerPagination: l, computedPagination: a, isServerSide: o, requestServerInteraction: s, setPagination: d };
}
function Q_(e, t, n, r, l, a) {
  const { props: o, emit: i, proxy: { $q: s } } = e, d = m(() => r.value === true ? n.value.rowsNumber || 0 : a.value), c = m(() => {
    const { page: b, rowsPerPage: S } = n.value;
    return (b - 1) * S;
  }), v = m(() => {
    const { page: b, rowsPerPage: S } = n.value;
    return b * S;
  }), u = m(() => n.value.page === 1), h = m(() => n.value.rowsPerPage === 0 ? 1 : Math.max(1, Math.ceil(d.value / n.value.rowsPerPage))), g = m(() => v.value === 0 ? true : n.value.page >= h.value), _ = m(() => (o.rowsPerPageOptions.includes(t.value.rowsPerPage) ? o.rowsPerPageOptions : [t.value.rowsPerPage].concat(o.rowsPerPageOptions)).map((S) => ({ label: S === 0 ? s.lang.table.allRows : "" + S, value: S })));
  he(h, (b, S) => {
    if (b === S) return;
    const P = n.value.page;
    b && !P ? l({ page: 1 }) : b < P && l({ page: b });
  });
  function w() {
    l({ page: 1 });
  }
  function k() {
    const { page: b } = n.value;
    b > 1 && l({ page: b - 1 });
  }
  function y() {
    const { page: b, rowsPerPage: S } = n.value;
    v.value > 0 && b * S < d.value && l({ page: b + 1 });
  }
  function p() {
    l({ page: h.value });
  }
  return o["onUpdate:pagination"] !== void 0 && i("update:pagination", { ...n.value }), { firstRowIndex: c, lastRowIndex: v, isFirstPage: u, isLastPage: g, pagesNumber: h, computedRowsPerPageOptions: _, computedRowsNumber: d, firstPage: w, prevPage: k, nextPage: y, lastPage: p };
}
var K_ = { selection: { type: String, default: "none", validator: (e) => ["single", "multiple", "none"].includes(e) }, selected: { type: Array, default: () => [] } }, W_ = ["update:selected", "selection"];
function Y_(e, t, n, r) {
  const l = m(() => {
    const g = {};
    return e.selected.map(r.value).forEach((_) => {
      g[_] = true;
    }), g;
  }), a = m(() => e.selection !== "none"), o = m(() => e.selection === "single"), i = m(() => e.selection === "multiple"), s = m(() => n.value.length !== 0 && n.value.every((g) => l.value[r.value(g)] === true)), d = m(() => s.value !== true && n.value.some((g) => l.value[r.value(g)] === true)), c = m(() => e.selected.length);
  function v(g) {
    return l.value[g] === true;
  }
  function u() {
    t("update:selected", []);
  }
  function h(g, _, w, k) {
    t("selection", { rows: _, added: w, keys: g, evt: k });
    const y = o.value === true ? w === true ? _ : [] : w === true ? e.selected.concat(_) : e.selected.filter((p) => g.includes(r.value(p)) === false);
    t("update:selected", y);
  }
  return { hasSelectionMode: a, singleSelection: o, multipleSelection: i, allRowsSelected: s, someRowsSelected: d, rowsSelectedNumber: c, isRowSelected: v, clearSelection: u, updateSelection: h };
}
function lf(e) {
  return Array.isArray(e) ? e.slice() : [];
}
var X_ = { expanded: Array }, G_ = ["update:expanded"];
function Z_(e, t) {
  const n = U(lf(e.expanded));
  he(() => e.expanded, (o) => {
    n.value = lf(o);
  });
  function r(o) {
    return n.value.includes(o);
  }
  function l(o) {
    e.expanded !== void 0 ? t("update:expanded", o) : n.value = o;
  }
  function a(o, i) {
    const s = n.value.slice(), d = s.indexOf(o);
    i === true ? d === -1 && (s.push(o), l(s)) : d !== -1 && (s.splice(d, 1), l(s));
  }
  return { isRowExpanded: r, setExpanded: l, updateExpanded: a };
}
var J_ = { visibleColumns: Array };
function ew(e, t, n) {
  const r = m(() => {
    if (e.columns !== void 0) return e.columns;
    const i = e.rows[0];
    return i !== void 0 ? Object.keys(i).map((s) => ({ name: s, label: s.toUpperCase(), field: s, align: qa(i[s]) ? "right" : "left", sortable: true })) : [];
  }), l = m(() => {
    const { sortBy: i, descending: s } = t.value;
    return (e.visibleColumns !== void 0 ? r.value.filter((c) => c.required === true || e.visibleColumns.includes(c.name) === true) : r.value).map((c) => {
      const v = c.align || "right", u = `text-${v}`;
      return { ...c, align: v, __iconClass: `q-table__sort-icon q-table__sort-icon--${v}`, __thClass: u + (c.headerClasses !== void 0 ? " " + c.headerClasses : "") + (c.sortable === true ? " sortable" : "") + (c.name === i ? ` sorted ${s === true ? "sort-desc" : ""}` : ""), __tdStyle: c.style !== void 0 ? typeof c.style != "function" ? () => c.style : c.style : () => null, __tdClass: c.classes !== void 0 ? typeof c.classes != "function" ? () => u + " " + c.classes : (h) => u + " " + c.classes(h) : () => u };
    });
  }), a = m(() => {
    const i = {};
    return l.value.forEach((s) => {
      i[s.name] = s;
    }), i;
  }), o = m(() => e.tableColspan !== void 0 ? e.tableColspan : l.value.length + (n.value === true ? 1 : 0));
  return { colList: r, computedCols: l, computedColsMap: a, computedColspan: o };
}
var ao = "q-table__bottom row items-center", ng = {};
Gh.forEach((e) => {
  ng[e] = {};
});
me({ name: "QTable", props: { rows: { type: Array, required: true }, rowKey: { type: [String, Function], default: "id" }, columns: Array, loading: Boolean, iconFirstPage: String, iconPrevPage: String, iconNextPage: String, iconLastPage: String, title: String, hideHeader: Boolean, grid: Boolean, gridHeader: Boolean, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, separator: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical", "cell", "none"].includes(e) }, wrapCells: Boolean, virtualScroll: Boolean, virtualScrollTarget: {}, ...ng, noDataLabel: String, noResultsLabel: String, loadingLabel: String, selectedRowsLabel: Function, rowsPerPageLabel: String, paginationLabel: Function, color: { type: String, default: "grey-8" }, titleClass: [String, Array, Object], tableStyle: [String, Array, Object], tableClass: [String, Array, Object], tableHeaderStyle: [String, Array, Object], tableHeaderClass: [String, Array, Object], tableRowStyleFn: Function, tableRowClassFn: Function, cardContainerClass: [String, Array, Object], cardContainerStyle: [String, Array, Object], cardStyle: [String, Array, Object], cardClass: [String, Array, Object], cardStyleFn: Function, cardClassFn: Function, hideBottom: Boolean, hideSelectedBanner: Boolean, hideNoData: Boolean, hidePagination: Boolean, onRowClick: Function, onRowDblclick: Function, onRowContextmenu: Function, ...lt, ...Ws, ...J_, ...z_, ...j_, ...X_, ...K_, ...D_ }, emits: ["request", "virtualScroll", ...Ys, ...G_, ...W_], setup(e, { slots: t, emit: n }) {
  const r = xe(), { proxy: { $q: l } } = r, a = rt(e, l), { inFullscreen: o, toggleFullscreen: i } = Xs(), s = m(() => typeof e.rowKey == "function" ? e.rowKey : (ce) => ce[e.rowKey]), d = U(null), c = U(null), v = m(() => e.grid !== true && e.virtualScroll === true), u = m(() => " q-table__card" + (a.value === true ? " q-table__card--dark q-dark" : "") + (e.square === true ? " q-table--square" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "")), h = m(() => `q-table__container q-table--${e.separator}-separator column no-wrap` + (e.grid === true ? " q-table--grid" : u.value) + (a.value === true ? " q-table--dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.wrapCells === false ? " q-table--no-wrap" : "") + (o.value === true ? " fullscreen scroll" : "")), g = m(() => h.value + (e.loading === true ? " q-table--loading" : ""));
  he(() => e.tableStyle + e.tableClass + e.tableHeaderStyle + e.tableHeaderClass + h.value, () => {
    var _a3;
    v.value === true && ((_a3 = c.value) == null ? void 0 : _a3.reset());
  });
  const { innerPagination: _, computedPagination: w, isServerSide: k, requestServerInteraction: y, setPagination: p } = U_(r, ie), { computedFilterMethod: b } = N_(e, p), { isRowExpanded: S, setExpanded: P, updateExpanded: F } = Z_(e, n), z = m(() => {
    let ce = e.rows;
    if (k.value === true || ce.length === 0) return ce;
    const { sortBy: Ce, descending: Fe } = w.value;
    return e.filter && (ce = b.value(ce, e.filter, Y.value, ie)), ee.value !== null && (ce = ge.value(e.rows === ce ? ce.slice() : ce, Ce, Fe)), ce;
  }), L = m(() => z.value.length), B = m(() => {
    let ce = z.value;
    if (k.value === true) return ce;
    const { rowsPerPage: Ce } = w.value;
    return Ce !== 0 && (A.value === 0 && e.rows !== ce ? ce.length > $.value && (ce = ce.slice(0, $.value)) : ce = ce.slice(A.value, $.value)), ce;
  }), { hasSelectionMode: D, singleSelection: q, multipleSelection: R, allRowsSelected: C, someRowsSelected: H, rowsSelectedNumber: Q, isRowSelected: K, clearSelection: G, updateSelection: re } = Y_(e, n, B, s), { colList: pe, computedCols: Y, computedColsMap: M, computedColspan: J } = ew(e, w, D), { columnToSort: ee, computedSortMethod: ge, sort: O } = I_(e, w, pe, p), { firstRowIndex: A, lastRowIndex: $, isFirstPage: T, isLastPage: N, pagesNumber: _e2, computedRowsPerPageOptions: x, computedRowsNumber: E, firstPage: I, prevPage: te, nextPage: ne, lastPage: W } = Q_(r, _, w, k, p, L), ue = m(() => B.value.length === 0), de = m(() => {
    const ce = {};
    return Gh.forEach((Ce) => {
      ce[Ce] = e[Ce];
    }), ce.virtualScrollItemSize === void 0 && (ce.virtualScrollItemSize = e.dense === true ? 28 : 48), ce;
  });
  function fe() {
    v.value === true && c.value.reset();
  }
  function se() {
    if (e.grid === true) return Nn();
    const ce = e.hideHeader !== true ? Te : null;
    if (v.value === true) {
      const Fe = t["top-row"], Be = t["bottom-row"], Qe = { default: (_t2) => we(_t2.item, t.body, _t2.index) };
      if (Fe !== void 0) {
        const _t2 = f("tbody", Fe({ cols: Y.value }));
        Qe.before = ce === null ? () => _t2 : () => [ce()].concat(_t2);
      } else ce !== null && (Qe.before = ce);
      return Be !== void 0 && (Qe.after = () => f("tbody", Be({ cols: Y.value }))), f(O_, { ref: c, class: e.tableClass, style: e.tableStyle, ...de.value, scrollTarget: e.virtualScrollTarget, items: B.value, type: "__qtable", tableColspan: J.value, onVirtualScroll: j }, Qe);
    }
    const Ce = [ke()];
    return ce !== null && Ce.unshift(ce()), tg({ class: ["q-table__middle scroll", e.tableClass], style: e.tableStyle }, Ce);
  }
  function le(ce, Ce) {
    if (c.value !== null) {
      c.value.scrollTo(ce, Ce);
      return;
    }
    ce = parseInt(ce, 10);
    const Fe = d.value.querySelector(`tbody tr:nth-of-type(${ce + 1})`);
    if (Fe !== null) {
      const Be = d.value.querySelector(".q-table__middle.scroll"), Qe = Fe.offsetTop - e.virtualScrollStickySizeStart, _t2 = Qe < Be.scrollTop ? "decrease" : "increase";
      Be.scrollTop = Qe, n("virtualScroll", { index: ce, from: 0, to: _.value.rowsPerPage - 1, direction: _t2 });
    }
  }
  function j(ce) {
    n("virtualScroll", ce);
  }
  function oe() {
    return [f(e_, { class: "q-table__linear-progress", color: e.color, dark: a.value, indeterminate: true, trackColor: "transparent" })];
  }
  function we(ce, Ce, Fe) {
    const Be = s.value(ce), Qe = K(Be);
    if (Ce !== void 0) {
      const X = { key: Be, row: ce, pageIndex: Fe, __trClass: Qe ? "selected" : "" };
      if (e.tableRowStyleFn !== void 0 && (X.__trStyle = e.tableRowStyleFn(ce)), e.tableRowClassFn !== void 0) {
        const ve = e.tableRowClassFn(ce);
        ve && (X.__trClass = `${ve} ${X.__trClass}`);
      }
      return Ce(Se(X));
    }
    const _t2 = t["body-cell"], bt = Y.value.map((X) => {
      const ve = t[`body-cell-${X.name}`], Ee = ve !== void 0 ? ve : _t2;
      return Ee !== void 0 ? Ee(qe({ key: Be, row: ce, pageIndex: Fe, col: X })) : f("td", { class: X.__tdClass(ce), style: X.__tdStyle(ce) }, ie(X, ce));
    });
    if (D.value === true) {
      const X = t["body-selection"], ve = X !== void 0 ? X(je({ key: Be, row: ce, pageIndex: Fe })) : [f(va, { modelValue: Qe, color: e.color, dark: a.value, dense: e.dense, "onUpdate:modelValue": (Ee, Me) => {
        re([Be], [ce], Ee, Me);
      } })];
      bt.unshift(f("td", { class: "q-table--col-auto-width" }, ve));
    }
    const V = { key: Be, class: { selected: Qe } };
    if (e.onRowClick !== void 0 && (V.class["cursor-pointer"] = true, V.onClick = (X) => {
      n("rowClick", X, ce, Fe);
    }), e.onRowDblclick !== void 0 && (V.class["cursor-pointer"] = true, V.onDblclick = (X) => {
      n("rowDblclick", X, ce, Fe);
    }), e.onRowContextmenu !== void 0 && (V.class["cursor-pointer"] = true, V.onContextmenu = (X) => {
      n("rowContextmenu", X, ce, Fe);
    }), e.tableRowStyleFn !== void 0 && (V.style = e.tableRowStyleFn(ce)), e.tableRowClassFn !== void 0) {
      const X = e.tableRowClassFn(ce);
      X && (V.class[X] = true);
    }
    return f("tr", V, bt);
  }
  function ke() {
    const ce = t.body, Ce = t["top-row"], Fe = t["bottom-row"];
    let Be = B.value.map((Qe, _t2) => we(Qe, ce, _t2));
    return Ce !== void 0 && (Be = Ce({ cols: Y.value }).concat(Be)), Fe !== void 0 && (Be = Be.concat(Fe({ cols: Y.value }))), f("tbody", Be);
  }
  function Se(ce) {
    return De(ce), ce.cols = ce.cols.map((Ce) => Dt({ ...Ce }, "value", () => ie(Ce, ce.row))), ce;
  }
  function qe(ce) {
    return De(ce), Dt(ce, "value", () => ie(ce.col, ce.row)), ce;
  }
  function je(ce) {
    return De(ce), ce;
  }
  function De(ce) {
    Object.assign(ce, { cols: Y.value, colsMap: M.value, sort: O, rowIndex: A.value + ce.pageIndex, color: e.color, dark: a.value, dense: e.dense }), D.value === true && Dt(ce, "selected", () => K(ce.key), (Ce, Fe) => {
      re([ce.key], [ce.row], Ce, Fe);
    }), Dt(ce, "expand", () => S(ce.key), (Ce) => {
      F(ce.key, Ce);
    });
  }
  function ie(ce, Ce) {
    const Fe = typeof ce.field == "function" ? ce.field(Ce) : Ce[ce.field];
    return ce.format !== void 0 ? ce.format(Fe, Ce) : Fe;
  }
  const be = m(() => ({ pagination: w.value, pagesNumber: _e2.value, isFirstPage: T.value, isLastPage: N.value, firstPage: I, prevPage: te, nextPage: ne, lastPage: W, inFullscreen: o.value, toggleFullscreen: i }));
  function ae() {
    const ce = t.top, Ce = t["top-left"], Fe = t["top-right"], Be = t["top-selection"], Qe = D.value === true && Be !== void 0 && Q.value > 0, _t2 = "q-table__top relative-position row items-center";
    if (ce !== void 0) return f("div", { class: _t2 }, [ce(be.value)]);
    let bt;
    if (Qe === true ? bt = Be(be.value).slice() : (bt = [], Ce !== void 0 ? bt.push(f("div", { class: "q-table__control" }, [Ce(be.value)])) : e.title && bt.push(f("div", { class: "q-table__control" }, [f("div", { class: ["q-table__title", e.titleClass] }, e.title)]))), Fe !== void 0 && (bt.push(f("div", { class: "q-table__separator col" })), bt.push(f("div", { class: "q-table__control" }, [Fe(be.value)]))), bt.length !== 0) return f("div", { class: _t2 }, bt);
  }
  const ye = m(() => H.value === true ? null : C.value);
  function Te() {
    const ce = Oe();
    return e.loading === true && t.loading === void 0 && ce.push(f("tr", { class: "q-table__progress" }, [f("th", { class: "relative-position", colspan: J.value }, oe())])), f("thead", ce);
  }
  function Oe() {
    const ce = t.header, Ce = t["header-cell"];
    if (ce !== void 0) return ce(Re({ header: true })).slice();
    const Fe = Y.value.map((Be) => {
      const Qe = t[`header-cell-${Be.name}`], _t2 = Qe !== void 0 ? Qe : Ce, bt = Re({ col: Be });
      return _t2 !== void 0 ? _t2(bt) : f(L_, { key: Be.name, props: bt }, () => Be.label);
    });
    if (q.value === true && e.grid !== true) Fe.unshift(f("th", { class: "q-table--col-auto-width" }, " "));
    else if (R.value === true) {
      const Be = t["header-selection"], Qe = Be !== void 0 ? Be(Re({})) : [f(va, { color: e.color, modelValue: ye.value, dark: a.value, dense: e.dense, "onUpdate:modelValue": Ge })];
      Fe.unshift(f("th", { class: "q-table--col-auto-width" }, Qe));
    }
    return [f("tr", { class: e.tableHeaderClass, style: e.tableHeaderStyle }, Fe)];
  }
  function Re(ce) {
    return Object.assign(ce, { cols: Y.value, sort: O, colsMap: M.value, color: e.color, dark: a.value, dense: e.dense }), R.value === true && Dt(ce, "selected", () => ye.value, Ge), ce;
  }
  function Ge(ce) {
    H.value === true && (ce = false), re(B.value.map(s.value), B.value, ce);
  }
  const st = m(() => {
    const ce = [e.iconFirstPage || l.iconSet.table.firstPage, e.iconPrevPage || l.iconSet.table.prevPage, e.iconNextPage || l.iconSet.table.nextPage, e.iconLastPage || l.iconSet.table.lastPage];
    return l.lang.rtl === true ? ce.reverse() : ce;
  });
  function Tt() {
    if (e.hideBottom === true) return;
    if (ue.value === true) {
      if (e.hideNoData === true) return;
      const Fe = e.loading === true ? e.loadingLabel || l.lang.table.loading : e.filter ? e.noResultsLabel || l.lang.table.noResults : e.noDataLabel || l.lang.table.noData, Be = t["no-data"], Qe = Be !== void 0 ? [Be({ message: Fe, icon: l.iconSet.table.warning, filter: e.filter })] : [f(tt, { class: "q-table__bottom-nodata-icon", name: l.iconSet.table.warning }), Fe];
      return f("div", { class: ao + " q-table__bottom--nodata" }, Qe);
    }
    const ce = t.bottom;
    if (ce !== void 0) return f("div", { class: ao }, [ce(be.value)]);
    const Ce = e.hideSelectedBanner !== true && D.value === true && Q.value > 0 ? [f("div", { class: "q-table__control" }, [f("div", [(e.selectedRowsLabel || l.lang.table.selectedRecords)(Q.value)])])] : [];
    if (e.hidePagination !== true) return f("div", { class: ao + " justify-end" }, rl(Ce));
    if (Ce.length !== 0) return f("div", { class: ao }, Ce);
  }
  function Qt(ce) {
    p({ page: 1, rowsPerPage: ce.value });
  }
  function rl(ce) {
    let Ce;
    const { rowsPerPage: Fe } = w.value, Be = e.paginationLabel || l.lang.table.pagination, Qe = t.pagination, _t2 = e.rowsPerPageOptions.length > 1;
    if (ce.push(f("div", { class: "q-table__separator col" })), _t2 === true && ce.push(f("div", { class: "q-table__control" }, [f("span", { class: "q-table__bottom-item" }, [e.rowsPerPageLabel || l.lang.table.recordsPerPage]), f(i_, { class: "q-table__select inline q-table__bottom-item", color: e.color, modelValue: Fe, options: x.value, displayValue: Fe === 0 ? l.lang.table.allRows : Fe, dark: a.value, borderless: true, dense: true, optionsDense: true, optionsCover: true, "onUpdate:modelValue": Qt })])), Qe !== void 0) Ce = Qe(be.value);
    else if (Ce = [f("span", Fe !== 0 ? { class: "q-table__bottom-item" } : {}, [Fe ? Be(A.value + 1, Math.min($.value, E.value), E.value) : Be(1, L.value, E.value)])], Fe !== 0 && _e2.value > 1) {
      const bt = { color: e.color, round: true, dense: true, flat: true };
      e.dense === true && (bt.size = "sm"), _e2.value > 2 && Ce.push(f(et, { key: "pgFirst", ...bt, icon: st.value[0], disable: T.value, ariaLabel: l.lang.pagination.first, onClick: I })), Ce.push(f(et, { key: "pgPrev", ...bt, icon: st.value[1], disable: T.value, ariaLabel: l.lang.pagination.prev, onClick: te }), f(et, { key: "pgNext", ...bt, icon: st.value[2], disable: N.value, ariaLabel: l.lang.pagination.next, onClick: ne })), _e2.value > 2 && Ce.push(f(et, { key: "pgLast", ...bt, icon: st.value[3], disable: N.value, ariaLabel: l.lang.pagination.last, onClick: W }));
    }
    return ce.push(f("div", { class: "q-table__control" }, Ce)), ce;
  }
  function on() {
    const ce = e.gridHeader === true ? [f("table", { class: "q-table" }, [Te()])] : e.loading === true && t.loading === void 0 ? oe() : void 0;
    return f("div", { class: "q-table__middle" }, ce);
  }
  function Nn() {
    const ce = t.item !== void 0 ? t.item : (Ce) => {
      const Fe = Ce.cols.map((Qe) => f("div", { class: "q-table__grid-item-row" }, [f("div", { class: "q-table__grid-item-title" }, [Qe.label]), f("div", { class: "q-table__grid-item-value" }, [Qe.value])]));
      if (D.value === true) {
        const Qe = t["body-selection"], _t2 = Qe !== void 0 ? Qe(Ce) : [f(va, { modelValue: Ce.selected, color: e.color, dark: a.value, dense: e.dense, "onUpdate:modelValue": (bt, V) => {
          re([Ce.key], [Ce.row], bt, V);
        } })];
        Fe.unshift(f("div", { class: "q-table__grid-item-row" }, _t2), f(Gl, { dark: a.value }));
      }
      const Be = { class: ["q-table__grid-item-card" + u.value, e.cardClass], style: e.cardStyle };
      if (e.cardStyleFn !== void 0 && (Be.style = [Be.style, e.cardStyleFn(Ce.row)]), e.cardClassFn !== void 0) {
        const Qe = e.cardClassFn(Ce.row);
        Qe && (Be.class[0] += ` ${Qe}`);
      }
      return (e.onRowClick !== void 0 || e.onRowDblclick !== void 0 || e.onRowContextmenu !== void 0) && (Be.class[0] += " cursor-pointer", e.onRowClick !== void 0 && (Be.onClick = (Qe) => {
        n("RowClick", Qe, Ce.row, Ce.pageIndex);
      }), e.onRowDblclick !== void 0 && (Be.onDblclick = (Qe) => {
        n("RowDblclick", Qe, Ce.row, Ce.pageIndex);
      }), e.onRowContextmenu !== void 0 && (Be.onContextmenu = (Qe) => {
        n("rowContextmenu", Qe, Ce.row, Ce.pageIndex);
      })), f("div", { class: "q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3" + (Ce.selected === true ? " q-table__grid-item--selected" : "") }, [f("div", Be, Fe)]);
    };
    return f("div", { class: ["q-table__grid-content row", e.cardContainerClass], style: e.cardContainerStyle }, B.value.map((Ce, Fe) => ce(Se({ key: s.value(Ce), row: Ce, pageIndex: Fe }))));
  }
  return Object.assign(r.proxy, { requestServerInteraction: y, setPagination: p, firstPage: I, prevPage: te, nextPage: ne, lastPage: W, isRowSelected: K, clearSelection: G, isRowExpanded: S, setExpanded: P, sort: O, resetVirtualScroll: fe, scrollTo: le, getCellValue: ie }), sm(r.proxy, { filteredSortedRows: () => z.value, computedRows: () => B.value, computedRowsNumber: () => E.value }), () => {
    const ce = [ae()], Ce = { ref: d, class: g.value };
    return e.grid === true ? ce.push(on()) : Object.assign(Ce, { class: [Ce.class, e.cardClass], style: e.cardStyle }), ce.push(se(), Tt()), e.loading === true && t.loading !== void 0 && ce.push(t.loading()), f("div", Ce, ce);
  };
} });
me({ name: "QTr", props: { props: Object, noHover: Boolean }, setup(e, { slots: t }) {
  const n = m(() => "q-tr" + (e.props === void 0 || e.props.header === true ? "" : " " + e.props.__trClass) + (e.noHover === true ? " q-tr--no-hover" : ""));
  return () => {
    var _a3;
    return f("tr", { style: (_a3 = e.props) == null ? void 0 : _a3.__trStyle, class: n.value }, Pe(t.default));
  };
} });
me({ name: "QTd", props: { props: Object, autoWidth: Boolean, noHover: Boolean }, setup(e, { slots: t }) {
  const n = xe(), r = m(() => "q-td" + (e.autoWidth === true ? " q-table--col-auto-width" : "") + (e.noHover === true ? " q-td--no-hover" : "") + " ");
  return () => {
    if (e.props === void 0) return f("td", { class: r.value }, Pe(t.default));
    const l = n.vnode.key, a = (e.props.colsMap !== void 0 ? e.props.colsMap[l] : null) || e.props.col;
    if (a === void 0) return;
    const { row: o } = e.props;
    return f("td", { class: r.value + a.__tdClass(o), style: a.__tdStyle(o) }, Pe(t.default));
  };
} });
me({ name: "QRouteTab", props: { ...Va, ...vh }, emits: fh, setup(e, { slots: t, emit: n }) {
  const r = hi({ useDisableForRouterLinkProps: false }), { renderTab: l, $tabs: a } = mh(e, t, n, { exact: m(() => e.exact), ...r });
  return he(() => `${e.name} | ${e.exact} | ${(r.resolvedLink.value || {}).href}`, a.verifyRouteModel), () => l(r.linkTag.value, r.linkAttrs.value);
} });
function tw(e, t) {
  return e.hour !== null && e.minute === null ? "minute" : "hour";
}
function nw() {
  const e = /* @__PURE__ */ new Date();
  return { hour: e.getHours(), minute: e.getMinutes(), second: e.getSeconds(), millisecond: e.getMilliseconds() };
}
me({ name: "QTime", props: { ...lt, ...Cn, ...Ko, modelValue: { required: true, validator: (e) => typeof e == "string" || e === null }, mask: { ...Ko.mask, default: null }, format24h: { type: Boolean, default: null }, defaultDate: { type: String, validator: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e) }, options: Function, hourOptions: Array, minuteOptions: Array, secondOptions: Array, withSeconds: Boolean, nowBtn: Boolean }, emits: yh, setup(e, { slots: t, emit: n }) {
  const r = xe(), { $q: l } = r.proxy, a = rt(e, l), { tabindex: o, headerClass: i, getLocale: s, getCurrentDate: d } = _h(e, l), c = Ia(e), v = Ml(c);
  let u, h;
  const g = U(null), _ = m(() => ge()), w = m(() => s()), k = m(() => O()), y = Gr(e.modelValue, _.value, w.value, e.calendar, k.value), p = U(tw(y)), b = U(y), S = U(y.hour === null || y.hour < 12), P = m(() => `q-time q-time--${e.landscape === true ? "landscape" : "portrait"}` + (a.value === true ? " q-time--dark q-dark" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-time--readonly" : "") + (e.bordered === true ? " q-time--bordered" : "") + (e.square === true ? " q-time--square no-border-radius" : "") + (e.flat === true ? " q-time--flat no-shadow" : "")), F = m(() => {
    const ie = b.value;
    return { hour: ie.hour === null ? "--" : z.value === true ? it(ie.hour) : String(S.value === true ? ie.hour === 0 ? 12 : ie.hour : ie.hour > 12 ? ie.hour - 12 : ie.hour), minute: ie.minute === null ? "--" : it(ie.minute), second: ie.second === null ? "--" : it(ie.second) };
  }), z = m(() => e.format24h !== null ? e.format24h : l.lang.date.format24h), L = m(() => {
    const ie = p.value === "hour", be = ie === true ? 12 : 60, ae = b.value[p.value];
    let Te = `rotate(${Math.round(ae * (360 / be)) - 180}deg) translateX(-50%)`;
    return ie === true && z.value === true && b.value.hour >= 12 && (Te += " scale(.7)"), { transform: Te };
  }), B = m(() => b.value.hour !== null), D = m(() => B.value === true && b.value.minute !== null), q = m(() => e.hourOptions !== void 0 ? (ie) => e.hourOptions.includes(ie) : e.options !== void 0 ? (ie) => e.options(ie, null, null) : null), R = m(() => e.minuteOptions !== void 0 ? (ie) => e.minuteOptions.includes(ie) : e.options !== void 0 ? (ie) => e.options(b.value.hour, ie, null) : null), C = m(() => e.secondOptions !== void 0 ? (ie) => e.secondOptions.includes(ie) : e.options !== void 0 ? (ie) => e.options(b.value.hour, b.value.minute, ie) : null), H = m(() => {
    if (q.value === null) return null;
    const ie = M(0, 11, q.value), be = M(12, 11, q.value);
    return { am: ie, pm: be, values: ie.values.concat(be.values) };
  }), Q = m(() => R.value !== null ? M(0, 59, R.value) : null), K = m(() => C.value !== null ? M(0, 59, C.value) : null), G = m(() => {
    switch (p.value) {
      case "hour":
        return H.value;
      case "minute":
        return Q.value;
      case "second":
        return K.value;
    }
  }), re = m(() => {
    let ie, be, ae = 0, ye = 1;
    const Te = G.value !== null ? G.value.values : void 0;
    p.value === "hour" ? z.value === true ? (ie = 0, be = 23) : (ie = 0, be = 11, S.value === false && (ae = 12)) : (ie = 0, be = 55, ye = 5);
    const Oe = [];
    for (let Re = ie, Ge = ie; Re <= be; Re += ye, Ge++) {
      const st = Re + ae, Tt = (Te == null ? void 0 : Te.includes(st)) === false, Qt = p.value === "hour" && Re === 0 ? z.value === true ? "00" : "12" : Re;
      Oe.push({ val: st, index: Ge, disable: Tt, label: Qt });
    }
    return Oe;
  }), pe = m(() => [[yn, T, void 0, { stop: true, prevent: true, mouse: true }]]);
  he(() => e.modelValue, (ie) => {
    const be = Gr(ie, _.value, w.value, e.calendar, k.value);
    (be.dateHash !== b.value.dateHash || be.timeHash !== b.value.timeHash) && (b.value = be, be.hour === null ? p.value = "hour" : S.value = be.hour < 12);
  }), he([_, w], () => {
    We(() => {
      qe();
    });
  });
  function Y() {
    const ie = { ...d(), ...nw() };
    qe(ie), Object.assign(b.value, ie), p.value = "hour";
  }
  function M(ie, be, ae) {
    const ye = Array.apply(null, { length: be + 1 }).map((Te, Oe) => {
      const Re = Oe + ie;
      return { index: Re, val: ae(Re) === true };
    }).filter((Te) => Te.val === true).map((Te) => Te.index);
    return { min: ye[0], max: ye[ye.length - 1], values: ye, threshold: be + 1 };
  }
  function J(ie, be, ae) {
    const ye = Math.abs(ie - be);
    return Math.min(ye, ae - ye);
  }
  function ee(ie, { min: be, max: ae, values: ye, threshold: Te }) {
    if (ie === be) return be;
    if (ie < be || ie > ae) return J(ie, be, Te) <= J(ie, ae, Te) ? be : ae;
    const Oe = ye.findIndex((st) => ie <= st), Re = ye[Oe - 1], Ge = ye[Oe];
    return ie - Re <= Ge - ie ? Re : Ge;
  }
  function ge() {
    return e.calendar !== "persian" && e.mask !== null ? e.mask : `HH:mm${e.withSeconds === true ? ":ss" : ""}`;
  }
  function O() {
    if (typeof e.defaultDate != "string") {
      const ie = d(true);
      return ie.dateHash = Kn(ie), ie;
    }
    return Gr(e.defaultDate, "YYYY/MM/DD", void 0, e.calendar);
  }
  function A() {
    return _l(r) === true || G.value !== null && (G.value.values.length === 0 || p.value === "hour" && z.value !== true && H.value[S.value === true ? "am" : "pm"].values.length === 0);
  }
  function $() {
    const ie = g.value, { top: be, left: ae, width: ye } = ie.getBoundingClientRect(), Te = ye / 2;
    return { top: be + Te, left: ae + Te, dist: Te * 0.7 };
  }
  function T(ie) {
    if (A() !== true) {
      if (ie.isFirst === true) {
        u = $(), h = _e2(ie.evt, u);
        return;
      }
      h = _e2(ie.evt, u, h), ie.isFinal === true && (u = false, h = null, N());
    }
  }
  function N() {
    p.value === "hour" ? p.value = "minute" : e.withSeconds && p.value === "minute" && (p.value = "second");
  }
  function _e2(ie, be, ae) {
    const ye = nn(ie), Te = Math.abs(ye.top - be.top), Oe = Math.sqrt(Math.pow(Math.abs(ye.top - be.top), 2) + Math.pow(Math.abs(ye.left - be.left), 2));
    let Re, Ge = Math.asin(Te / Oe) * (180 / Math.PI);
    if (ye.top < be.top ? Ge = be.left < ye.left ? 90 - Ge : 270 + Ge : Ge = be.left < ye.left ? Ge + 90 : 270 - Ge, p.value === "hour") {
      if (Re = Ge / 30, H.value !== null) {
        const st = z.value !== true ? S.value === true : H.value.am.values.length !== 0 && H.value.pm.values.length !== 0 ? Oe >= be.dist : H.value.am.values.length !== 0;
        Re = ee(Re + (st === true ? 0 : 12), H.value[st === true ? "am" : "pm"]);
      } else Re = Math.round(Re), z.value === true ? Oe < be.dist ? Re < 12 && (Re += 12) : Re === 12 && (Re = 0) : S.value === true && Re === 12 ? Re = 0 : S.value === false && Re !== 12 && (Re += 12);
      z.value === true && (S.value = Re < 12);
    } else Re = Math.round(Ge / 6) % 60, p.value === "minute" && Q.value !== null ? Re = ee(Re, Q.value) : p.value === "second" && K.value !== null && (Re = ee(Re, K.value));
    return ae !== Re && j[p.value](Re), Re;
  }
  const x = { hour() {
    p.value = "hour";
  }, minute() {
    p.value = "minute";
  }, second() {
    p.value = "second";
  } };
  function E(ie) {
    ie.keyCode === 13 && oe();
  }
  function I(ie) {
    ie.keyCode === 13 && we();
  }
  function te(ie) {
    A() !== true && (l.platform.is.desktop !== true && _e2(ie, $()), N());
  }
  function ne(ie) {
    A() !== true && _e2(ie, $());
  }
  function W(ie) {
    if (ie.keyCode === 13) p.value = "hour";
    else if ([37, 39].includes(ie.keyCode)) {
      const be = ie.keyCode === 37 ? -1 : 1;
      if (H.value !== null) {
        const ae = z.value === true ? H.value.values : H.value[S.value === true ? "am" : "pm"].values;
        if (ae.length === 0) return;
        if (b.value.hour === null) fe(ae[0]);
        else {
          const ye = (ae.length + ae.indexOf(b.value.hour) + be) % ae.length;
          fe(ae[ye]);
        }
      } else {
        const ae = z.value === true ? 24 : 12, ye = z.value !== true && S.value === false ? 12 : 0, Te = b.value.hour === null ? -be : b.value.hour;
        fe(ye + (24 + Te + be) % ae);
      }
    }
  }
  function ue(ie) {
    if (ie.keyCode === 13) p.value = "minute";
    else if ([37, 39].includes(ie.keyCode)) {
      const be = ie.keyCode === 37 ? -1 : 1;
      if (Q.value !== null) {
        const ae = Q.value.values;
        if (ae.length === 0) return;
        if (b.value.minute === null) se(ae[0]);
        else {
          const ye = (ae.length + ae.indexOf(b.value.minute) + be) % ae.length;
          se(ae[ye]);
        }
      } else {
        const ae = b.value.minute === null ? -be : b.value.minute;
        se((60 + ae + be) % 60);
      }
    }
  }
  function de(ie) {
    if (ie.keyCode === 13) p.value = "second";
    else if ([37, 39].includes(ie.keyCode)) {
      const be = ie.keyCode === 37 ? -1 : 1;
      if (K.value !== null) {
        const ae = K.value.values;
        if (ae.length === 0) return;
        if (b.value.seconds === null) le(ae[0]);
        else {
          const ye = (ae.length + ae.indexOf(b.value.second) + be) % ae.length;
          le(ae[ye]);
        }
      } else {
        const ae = b.value.second === null ? -be : b.value.second;
        le((60 + ae + be) % 60);
      }
    }
  }
  function fe(ie) {
    b.value.hour !== ie && (b.value.hour = ie, Se());
  }
  function se(ie) {
    b.value.minute !== ie && (b.value.minute = ie, Se());
  }
  function le(ie) {
    b.value.second !== ie && (b.value.second = ie, Se());
  }
  const j = { hour: fe, minute: se, second: le };
  function oe() {
    S.value === false && (S.value = true, b.value.hour !== null && (b.value.hour -= 12, Se()));
  }
  function we() {
    S.value === true && (S.value = false, b.value.hour !== null && (b.value.hour += 12, Se()));
  }
  function ke(ie) {
    const be = e.modelValue;
    p.value !== ie && be !== void 0 && be !== null && be !== "" && typeof be != "string" && (p.value = ie);
  }
  function Se() {
    if (q.value !== null && q.value(b.value.hour) !== true) {
      b.value = Gr(), ke("hour");
      return;
    }
    if (R.value !== null && R.value(b.value.minute) !== true) {
      b.value.minute = null, b.value.second = null, ke("minute");
      return;
    }
    if (e.withSeconds === true && C.value !== null && C.value(b.value.second) !== true) {
      b.value.second = null, ke("second");
      return;
    }
    b.value.hour === null || b.value.minute === null || e.withSeconds === true && b.value.second === null || qe();
  }
  function qe(ie) {
    const be = Object.assign({ ...b.value }, ie), ae = e.calendar === "persian" ? it(be.hour) + ":" + it(be.minute) + (e.withSeconds === true ? ":" + it(be.second) : "") : kh(new Date(be.year, be.month === null ? null : be.month - 1, be.day, be.hour, be.minute, be.second, be.millisecond), _.value, w.value, be.year, be.timezoneOffset);
    be.changed = ae !== e.modelValue, n("update:modelValue", ae, be);
  }
  function je() {
    const ie = [f("div", { class: "q-time__link " + (p.value === "hour" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: x.hour, onKeyup: W }, F.value.hour), f("div", ":"), f("div", B.value === true ? { class: "q-time__link " + (p.value === "minute" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onKeyup: ue, onClick: x.minute } : { class: "q-time__link" }, F.value.minute)];
    e.withSeconds === true && ie.push(f("div", ":"), f("div", D.value === true ? { class: "q-time__link " + (p.value === "second" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onKeyup: de, onClick: x.second } : { class: "q-time__link" }, F.value.second));
    const be = [f("div", { class: "q-time__header-label row items-center no-wrap", dir: "ltr" }, ie)];
    return z.value === false && be.push(f("div", { class: "q-time__header-ampm column items-between no-wrap" }, [f("div", { class: "q-time__link " + (S.value === true ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: oe, onKeyup: E }, "AM"), f("div", { class: "q-time__link " + (S.value !== true ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: we, onKeyup: I }, "PM")])), f("div", { class: "q-time__header flex flex-center no-wrap " + i.value }, be);
  }
  function De() {
    const ie = b.value[p.value];
    return f("div", { class: "q-time__content col relative-position" }, [f(Vt, { name: "q-transition--scale" }, () => f("div", { key: "clock" + p.value, class: "q-time__container-parent absolute-full" }, [f("div", { ref: g, class: "q-time__container-child fit overflow-hidden" }, [dn(f("div", { class: "q-time__clock cursor-pointer non-selectable", onClick: te, onMousedown: ne }, [f("div", { class: "q-time__clock-circle fit" }, [f("div", { class: "q-time__clock-pointer" + (b.value[p.value] === null ? " hidden" : e.color !== void 0 ? ` text-${e.color}` : ""), style: L.value }), re.value.map((be) => f("div", { class: `q-time__clock-position row flex-center q-time__clock-pos-${be.index}` + (be.val === ie ? " q-time__clock-position--active " + i.value : be.disable === true ? " q-time__clock-position--disable" : "") }, [f("span", be.label)]))])]), pe.value)])])), e.nowBtn === true ? f(et, { class: "q-time__now-button absolute", icon: l.iconSet.datetime.now, unelevated: true, size: "sm", round: true, color: e.color, textColor: e.textColor, tabindex: o.value, onClick: Y }) : null]);
  }
  return r.proxy.setNow = Y, () => {
    const ie = [De()], be = Pe(t.default);
    return be !== void 0 && ie.push(f("div", { class: "q-time__actions" }, be)), e.name !== void 0 && e.disable !== true && v(ie, "push"), f("div", { class: P.value, tabindex: -1 }, [je(), f("div", { class: "q-time__main col overflow-auto" }, ie)]);
  };
} });
me({ name: "QTimeline", props: { ...lt, color: { type: String, default: "primary" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, layout: { type: String, default: "dense", validator: (e) => ["dense", "comfortable", "loose"].includes(e) } }, setup(e, { slots: t }) {
  const n = xe(), r = rt(e, n.proxy.$q);
  pn(pm, e);
  const l = m(() => `q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}` + (r.value === true ? " q-timeline--dark" : ""));
  return () => f("ul", { class: l.value }, Pe(t.default));
} });
me({ name: "QTimelineEntry", props: { heading: Boolean, tag: { type: String, default: "h3" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, icon: String, avatar: String, color: String, title: String, subtitle: String, body: String }, setup(e, { slots: t }) {
  const n = Rt(pm, ut);
  if (n === ut) return console.error("QTimelineEntry needs to be child of QTimeline"), ut;
  const r = m(() => `q-timeline__entry q-timeline__entry--${e.side}` + (e.icon !== void 0 || e.avatar !== void 0 ? " q-timeline__entry--icon" : "")), l = m(() => `q-timeline__dot text-${e.color || n.color}`), a = m(() => n.layout === "comfortable" && n.side === "left");
  return () => {
    const o = Oa(t.default, []);
    if (e.body !== void 0 && o.unshift(e.body), e.heading === true) {
      const d = [f("div"), f("div"), f(e.tag, { class: "q-timeline__heading-title" }, o)];
      return f("div", { class: "q-timeline__heading" }, a.value === true ? d.reverse() : d);
    }
    let i;
    e.icon !== void 0 ? i = [f(tt, { class: "row items-center justify-center", name: e.icon })] : e.avatar !== void 0 && (i = [f("img", { class: "q-timeline__dot-img", src: e.avatar })]);
    const s = [f("div", { class: "q-timeline__subtitle" }, [f("span", {}, Pe(t.subtitle, [e.subtitle]))]), f("div", { class: l.value }, i), f("div", { class: "q-timeline__content" }, [f("h6", { class: "q-timeline__title" }, Pe(t.title, [e.title]))].concat(o))];
    return f("li", { class: r.value }, a.value === true ? s.reverse() : s);
  };
} });
var rf = me({ name: "QToolbar", props: { inset: Boolean }, setup(e, { slots: t }) {
  const n = m(() => "q-toolbar row no-wrap items-center" + (e.inset === true ? " q-toolbar--inset" : ""));
  return () => f("div", { class: n.value, role: "toolbar" }, Pe(t.default));
} }), af = me({ name: "QToolbarTitle", props: { shrink: Boolean }, setup(e, { slots: t }) {
  const n = m(() => "q-toolbar__title ellipsis" + (e.shrink === true ? " col-shrink" : ""));
  return () => f("div", { class: n.value }, Pe(t.default));
} }), lw = ["none", "strict", "leaf", "leaf-filtered"];
me({ name: "QTree", props: { ...lt, nodes: { type: Array, required: true }, nodeKey: { type: String, required: true }, labelKey: { type: String, default: "label" }, childrenKey: { type: String, default: "children" }, dense: Boolean, color: String, controlColor: String, textColor: String, selectedColor: String, icon: String, tickStrategy: { type: String, default: "none", validator: (e) => lw.includes(e) }, ticked: Array, expanded: Array, selected: {}, noSelectionUnset: Boolean, defaultExpandAll: Boolean, accordion: Boolean, filter: String, filterMethod: Function, duration: {}, noConnectors: Boolean, noTransition: Boolean, noNodesLabel: String, noResultsLabel: String }, emits: ["update:expanded", "update:ticked", "update:selected", "lazyLoad", "afterShow", "afterHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: l } = r, a = rt(e, l), o = U({}), i = U(e.ticked || []), s = U(e.expanded || []);
  let d = {};
  $r(() => {
    d = {};
  });
  const c = m(() => `q-tree q-tree--${e.dense === true ? "dense" : "standard"}` + (e.noConnectors === true ? " q-tree--no-connectors" : "") + (a.value === true ? " q-tree--dark" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), v = m(() => e.selected !== void 0), u = m(() => e.icon || l.iconSet.tree.icon), h = m(() => e.controlColor || e.color), g = m(() => e.textColor !== void 0 ? ` text-${e.textColor}` : ""), _ = m(() => {
    const M = e.selectedColor || e.color;
    return M ? ` text-${M}` : "";
  }), w = m(() => e.filterMethod !== void 0 ? e.filterMethod : (M, J) => {
    const ee = J.toLowerCase();
    return M[e.labelKey] && M[e.labelKey].toLowerCase().indexOf(ee) !== -1;
  }), k = m(() => {
    const M = {}, J = (ee, ge) => {
      const O = ee.tickStrategy || (ge ? ge.tickStrategy : e.tickStrategy), A = ee[e.nodeKey], $ = ee[e.childrenKey] && Array.isArray(ee[e.childrenKey]) && ee[e.childrenKey].length !== 0, T = ee.disabled !== true && v.value === true && ee.selectable !== false, N = ee.disabled !== true && ee.expandable !== false, _e2 = O !== "none", x = O === "strict", E = O === "leaf-filtered", I = O === "leaf" || O === "leaf-filtered";
      let te = ee.disabled !== true && ee.tickable !== false;
      I === true && te === true && ge && ge.tickable !== true && (te = false);
      let ne = ee.lazy;
      ne === true && o.value[A] !== void 0 && Array.isArray(ee[e.childrenKey]) === true && (ne = o.value[A]);
      const W = { key: A, parent: ge, isParent: $, lazy: ne, disabled: ee.disabled, link: ee.disabled !== true && (T === true || N === true && ($ === true || ne === true)), children: [], matchesFilter: e.filter ? w.value(ee, e.filter) : true, selected: A === e.selected && T === true, selectable: T, expanded: $ === true ? s.value.includes(A) : false, expandable: N, noTick: ee.noTick === true || x !== true && ne && ne !== "loaded", tickable: te, tickStrategy: O, hasTicking: _e2, strictTicking: x, leafFilteredTicking: E, leafTicking: I, ticked: x === true ? i.value.includes(A) : $ === true ? false : i.value.includes(A) };
      if (M[A] = W, $ === true && (W.children = ee[e.childrenKey].map((ue) => J(ue, W)), e.filter && (W.matchesFilter !== true ? W.matchesFilter = W.children.some((ue) => ue.matchesFilter) : W.noTick !== true && W.disabled !== true && W.tickable === true && E === true && W.children.every((ue) => ue.matchesFilter !== true || ue.noTick === true || ue.tickable !== true) === true && (W.tickable = false)), W.matchesFilter === true && (W.noTick !== true && x !== true && W.children.every((ue) => ue.noTick) === true && (W.noTick = true), I))) {
        if (W.ticked = false, W.indeterminate = W.children.some((ue) => ue.indeterminate === true), W.tickable = W.tickable === true && W.children.some((ue) => ue.tickable), W.indeterminate !== true) {
          const ue = W.children.reduce((de, fe) => fe.ticked === true ? de + 1 : de, 0);
          ue === W.children.length ? W.ticked = true : ue > 0 && (W.indeterminate = true);
        }
        W.indeterminate === true && (W.indeterminateNextState = W.children.every((ue) => ue.tickable !== true || ue.ticked !== true));
      }
      return W;
    };
    return e.nodes.forEach((ee) => J(ee, null)), M;
  });
  he(() => e.ticked, (M) => {
    i.value = M;
  }), he(() => e.expanded, (M) => {
    s.value = M;
  });
  function y(M) {
    const J = [].reduce, ee = (ge, O) => {
      if (ge || !O) return ge;
      if (Array.isArray(O) === true) return J.call(Object(O), ee, ge);
      if (O[e.nodeKey] === M) return O;
      if (O[e.childrenKey]) return ee(null, O[e.childrenKey]);
    };
    return ee(null, e.nodes);
  }
  function p() {
    return i.value.map((M) => y(M));
  }
  function b() {
    return s.value.map((M) => y(M));
  }
  function S(M) {
    return M && k.value[M] ? k.value[M].expanded : false;
  }
  function P() {
    e.expanded !== void 0 ? n("update:expanded", []) : s.value = [];
  }
  function F() {
    const M = [], J = (ee) => {
      ee[e.childrenKey] && ee[e.childrenKey].length !== 0 && ee.expandable !== false && ee.disabled !== true && (M.push(ee[e.nodeKey]), ee[e.childrenKey].forEach(J));
    };
    e.nodes.forEach(J), e.expanded !== void 0 ? n("update:expanded", M) : s.value = M;
  }
  function z(M, J, ee = y(M), ge = k.value[M]) {
    if (ge.lazy && ge.lazy !== "loaded") {
      if (ge.lazy === "loading") return;
      o.value[M] = "loading", Array.isArray(ee[e.childrenKey]) !== true && (ee[e.childrenKey] = []), n("lazyLoad", { node: ee, key: M, done: (O) => {
        o.value[M] = "loaded", ee[e.childrenKey] = Array.isArray(O) === true ? O : [], We(() => {
          var _a3;
          ((_a3 = k.value[M]) == null ? void 0 : _a3.isParent) === true && L(M, true);
        });
      }, fail: () => {
        delete o.value[M], ee[e.childrenKey].length === 0 && delete ee[e.childrenKey];
      } });
    } else ge.isParent === true && ge.expandable === true && L(M, J);
  }
  function L(M, J) {
    let ee = s.value;
    const ge = e.expanded !== void 0;
    if (ge === true && (ee = ee.slice()), J) {
      if (e.accordion && k.value[M]) {
        const O = [];
        k.value[M].parent ? k.value[M].parent.children.forEach((A) => {
          A.key !== M && A.expandable === true && O.push(A.key);
        }) : e.nodes.forEach((A) => {
          const $ = A[e.nodeKey];
          $ !== M && O.push($);
        }), O.length !== 0 && (ee = ee.filter((A) => O.includes(A) === false));
      }
      ee = ee.concat([M]).filter((O, A, $) => $.indexOf(O) === A);
    } else ee = ee.filter((O) => O !== M);
    ge === true ? n("update:expanded", ee) : s.value = ee;
  }
  function B(M) {
    return M && k.value[M] ? k.value[M].ticked : false;
  }
  function D(M, J) {
    let ee = i.value;
    const ge = e.ticked !== void 0;
    ge === true && (ee = ee.slice()), J ? ee = ee.concat(M).filter((O, A, $) => $.indexOf(O) === A) : ee = ee.filter((O) => M.includes(O) === false), ge === true && n("update:ticked", ee);
  }
  function q(M, J, ee) {
    const ge = { tree: r, node: M, key: ee, color: e.color, dark: a.value };
    return Dt(ge, "expanded", () => J.expanded, (O) => {
      O !== J.expanded && z(ee, O);
    }), Dt(ge, "ticked", () => J.ticked, (O) => {
      O !== J.ticked && D([ee], O);
    }), ge;
  }
  function R(M) {
    return (e.filter ? M.filter((J) => k.value[J[e.nodeKey]].matchesFilter) : M).map((J) => K(J));
  }
  function C(M) {
    if (M.icon !== void 0) return f(tt, { class: "q-tree__icon q-mr-sm", name: M.icon, color: M.iconColor });
    const J = M.img || M.avatar;
    if (J) return f("img", { class: `q-tree__${M.img ? "img" : "avatar"} q-mr-sm`, src: J });
  }
  function H() {
    n("afterShow");
  }
  function Q() {
    n("afterHide");
  }
  function K(M) {
    const J = M[e.nodeKey], ee = k.value[J], ge = M.header && t[`header-${M.header}`] || t["default-header"], O = ee.isParent === true ? R(M[e.childrenKey]) : [], A = O.length !== 0 || ee.lazy && ee.lazy !== "loaded";
    let $ = M.body && t[`body-${M.body}`] || t["default-body"];
    const T = ge !== void 0 || $ !== void 0 ? q(M, ee, J) : null;
    return $ !== void 0 && ($ = f("div", { class: "q-tree__node-body relative-position" }, [f("div", { class: g.value }, [$(T)])])), f("div", { key: J, class: `q-tree__node relative-position q-tree__node--${A === true ? "parent" : "child"}` }, [f("div", { class: "q-tree__node-header relative-position row no-wrap items-center" + (ee.link === true ? " q-tree__node--link q-hoverable q-focusable" : "") + (ee.selected === true ? " q-tree__node--selected" : "") + (ee.disabled === true ? " q-tree__node--disabled" : ""), tabindex: ee.link === true ? 0 : -1, ariaExpanded: O.length > 0 ? ee.expanded : null, role: "treeitem", onClick: (N) => {
      re(M, ee, N);
    }, onKeypress(N) {
      er(N) !== true && (N.keyCode === 13 ? re(M, ee, N, true) : N.keyCode === 32 && pe(M, ee, N, true));
    } }, [f("div", { class: "q-focus-helper", tabindex: -1, ref: (N) => {
      d[ee.key] = N;
    } }), ee.lazy === "loading" ? f(Sn, { class: "q-tree__spinner", color: h.value }) : A === true ? f(tt, { class: "q-tree__arrow" + (ee.expanded === true ? " q-tree__arrow--rotate" : ""), name: u.value, onClick(N) {
      pe(M, ee, N);
    } }) : null, ee.hasTicking === true && ee.noTick !== true ? f(va, { class: "q-tree__tickbox", modelValue: ee.indeterminate === true ? null : ee.ticked, color: h.value, dark: a.value, dense: true, keepColor: true, disable: ee.tickable !== true, onKeydown: Ue, "onUpdate:modelValue": (N) => {
      Y(ee, N);
    } }) : null, f("div", { class: "q-tree__node-header-content col row no-wrap items-center" + (ee.selected === true ? _.value : g.value) }, [ge ? ge(T) : [C(M), f("div", M[e.labelKey])]])]), A === true ? e.noTransition === true ? ee.expanded === true ? f("div", { class: "q-tree__node-collapsible" + g.value, key: `${J}__q` }, [$, f("div", { class: "q-tree__children" + (ee.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, O)]) : null : f(tc, { duration: e.duration, onShow: H, onHide: Q }, () => dn(f("div", { class: "q-tree__node-collapsible" + g.value, key: `${J}__q` }, [$, f("div", { class: "q-tree__children" + (ee.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, O)]), [[am, ee.expanded]])) : $]);
  }
  function G(M) {
    var _a3;
    (_a3 = d[M]) == null ? void 0 : _a3.focus();
  }
  function re(M, J, ee, ge) {
    ge !== true && J.selectable !== false && G(J.key), v.value && J.selectable ? e.noSelectionUnset === false ? n("update:selected", J.key !== e.selected ? J.key : null) : J.key !== e.selected && n("update:selected", J.key === void 0 ? null : J.key) : pe(M, J, ee, ge), typeof M.handler == "function" && M.handler(M);
  }
  function pe(M, J, ee, ge) {
    ee !== void 0 && Ue(ee), ge !== true && J.selectable !== false && G(J.key), z(J.key, !J.expanded, M, J);
  }
  function Y(M, J) {
    if (M.indeterminate === true && (J = M.indeterminateNextState), M.strictTicking) D([M.key], J);
    else if (M.leafTicking) {
      const ee = [], ge = (O) => {
        O.isParent ? (J !== true && O.noTick !== true && O.tickable === true && ee.push(O.key), O.leafTicking === true && O.children.forEach(ge)) : O.noTick !== true && O.tickable === true && (O.leafFilteredTicking !== true || O.matchesFilter === true) && ee.push(O.key);
      };
      ge(M), D(ee, J);
    }
  }
  return e.defaultExpandAll === true && F(), Object.assign(r, { getNodeByKey: y, getTickedNodes: p, getExpandedNodes: b, isExpanded: S, collapseAll: P, expandAll: F, setExpanded: z, isTicked: B, setTicked: D }), () => {
    const M = R(e.nodes);
    return f("div", { class: c.value, role: "tree" }, M.length === 0 ? e.filter ? e.noResultsLabel || l.lang.tree.noResults : e.noNodesLabel || l.lang.tree.noNodes : M);
  };
} });
function of(e) {
  return (e * 100).toFixed(2) + "%";
}
var rw = { ...lt, ...Oh, label: String, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, noThumbnails: Boolean, thumbnailFit: { type: String, default: "cover" }, autoUpload: Boolean, hideUploadBtn: Boolean, disable: Boolean, readonly: Boolean }, lg = [...Vh, "start", "finish", "added", "removed"];
function aw(e, t) {
  const n = xe(), { props: r, slots: l, emit: a, proxy: o } = n, { $q: i } = o, s = rt(r, i);
  function d(T, N, _e2) {
    if (T.__status = N, N === "idle") {
      T.__uploaded = 0, T.__progress = 0, T.__sizeLabel = ju(T.size), T.__progressLabel = "0.00%";
      return;
    }
    if (N === "failed") {
      o.$forceUpdate();
      return;
    }
    T.__uploaded = N === "uploaded" ? T.size : _e2, T.__progress = N === "uploaded" ? 1 : Math.min(0.9999, T.__uploaded / T.size), T.__progressLabel = of(T.__progress), o.$forceUpdate();
  }
  const c = m(() => r.disable !== true && r.readonly !== true), v = U(false), u = U(null), h = U(null), g = { files: U([]), queuedFiles: U([]), uploadedFiles: U([]), uploadedSize: U(0), updateFileStatus: d, isAlive: () => _l(n) === false }, { pickFiles: _, addFiles: w, onDragover: k, onDragleave: y, processFiles: p, getDndNode: b, maxFilesNumber: S, maxTotalSizeNumber: P } = Dh({ editable: c, dnd: v, getFileInput: Y, addFilesToQueue: M });
  Object.assign(g, e({ props: r, slots: l, emit: a, helpers: g, exposeApi: (T) => {
    Object.assign(g, T);
  } })), g.isBusy === void 0 && (g.isBusy = U(false));
  const F = U(0), z = m(() => F.value === 0 ? 0 : g.uploadedSize.value / F.value), L = m(() => of(z.value)), B = m(() => ju(F.value)), D = m(() => c.value === true && g.isUploading.value !== true && (r.multiple === true || g.queuedFiles.value.length === 0) && (r.maxFiles === void 0 || g.files.value.length < S.value) && (r.maxTotalSize === void 0 || F.value < P.value)), q = m(() => c.value === true && g.isBusy.value !== true && g.isUploading.value !== true && g.queuedFiles.value.length !== 0);
  pn(Cm, ge);
  const R = m(() => "q-uploader column no-wrap" + (s.value === true ? " q-uploader--dark q-dark" : "") + (r.bordered === true ? " q-uploader--bordered" : "") + (r.square === true ? " q-uploader--square no-border-radius" : "") + (r.flat === true ? " q-uploader--flat no-shadow" : "") + (r.disable === true ? " disabled q-uploader--disable" : "") + (v.value === true ? " q-uploader--dnd" : "")), C = m(() => "q-uploader__header" + (r.color !== void 0 ? ` bg-${r.color}` : "") + (r.textColor !== void 0 ? ` text-${r.textColor}` : ""));
  he(g.isUploading, (T, N) => {
    N === false && T === true ? a("start") : N === true && T === false && a("finish");
  });
  function H() {
    r.disable === false && (g.abort(), g.uploadedSize.value = 0, F.value = 0, pe(), g.files.value = [], g.queuedFiles.value = [], g.uploadedFiles.value = []);
  }
  function Q() {
    r.disable === false && G(["uploaded"], () => {
      g.uploadedFiles.value = [];
    });
  }
  function K() {
    G(["idle", "failed"], ({ size: T }) => {
      F.value -= T, g.queuedFiles.value = [];
    });
  }
  function G(T, N) {
    if (r.disable === true) return;
    const _e2 = { files: [], size: 0 }, x = g.files.value.filter((E) => T.indexOf(E.__status) === -1 ? true : (_e2.size += E.size, _e2.files.push(E), E.__img !== void 0 && window.URL.revokeObjectURL(E.__img.src), false));
    _e2.files.length !== 0 && (g.files.value = x, N(_e2), a("removed", _e2.files));
  }
  function re(T) {
    r.disable || (T.__status === "uploaded" ? g.uploadedFiles.value = g.uploadedFiles.value.filter((N) => N.__key !== T.__key) : T.__status === "uploading" ? T.__abort() : F.value -= T.size, g.files.value = g.files.value.filter((N) => N.__key !== T.__key ? true : (N.__img !== void 0 && window.URL.revokeObjectURL(N.__img.src), false)), g.queuedFiles.value = g.queuedFiles.value.filter((N) => N.__key !== T.__key), a("removed", [T]));
  }
  function pe() {
    g.files.value.forEach((T) => {
      T.__img !== void 0 && window.URL.revokeObjectURL(T.__img.src);
    });
  }
  function Y() {
    return h.value || u.value.getElementsByClassName("q-uploader__input")[0];
  }
  function M(T, N) {
    const _e2 = p(T, N, g.files.value, true), x = Y();
    x != null && (x.value = ""), _e2 !== void 0 && (_e2.forEach((E) => {
      if (g.updateFileStatus(E, "idle"), F.value += E.size, r.noThumbnails !== true && E.type.toUpperCase().startsWith("IMAGE")) {
        const I = new Image();
        I.src = window.URL.createObjectURL(E), E.__img = I;
      }
    }), g.files.value = g.files.value.concat(_e2), g.queuedFiles.value = g.queuedFiles.value.concat(_e2), a("added", _e2), r.autoUpload === true && g.upload());
  }
  function J() {
    q.value === true && g.upload();
  }
  function ee(T, N, _e2) {
    if (T === true) {
      const x = { type: "a", key: N, icon: i.iconSet.uploader[N], flat: true, dense: true };
      let E;
      return N === "add" ? (x.onClick = _, E = ge) : x.onClick = _e2, f(et, x, E);
    }
  }
  function ge() {
    return f("input", { ref: h, class: "q-uploader__input overflow-hidden absolute-full", tabindex: -1, type: "file", title: "", accept: r.accept, multiple: r.multiple === true ? "multiple" : void 0, capture: r.capture, onMousedown: St, onClick: _, onChange: M });
  }
  function O() {
    return l.header !== void 0 ? l.header($) : [f("div", { class: "q-uploader__header-content column" }, [f("div", { class: "flex flex-center no-wrap q-gutter-xs" }, [ee(g.queuedFiles.value.length !== 0, "removeQueue", K), ee(g.uploadedFiles.value.length !== 0, "removeUploaded", Q), g.isUploading.value === true ? f(Sn, { class: "q-uploader__spinner" }) : null, f("div", { class: "col column justify-center" }, [r.label !== void 0 ? f("div", { class: "q-uploader__title" }, [r.label]) : null, f("div", { class: "q-uploader__subtitle" }, [B.value + " / " + L.value])]), ee(D.value, "add"), ee(r.hideUploadBtn === false && q.value === true, "upload", g.upload), ee(g.isUploading.value, "clear", g.abort)])])];
  }
  function A() {
    return l.list !== void 0 ? l.list($) : g.files.value.map((T) => f("div", { key: T.__key, class: "q-uploader__file relative-position" + (r.noThumbnails !== true && T.__img !== void 0 ? " q-uploader__file--img" : "") + (T.__status === "failed" ? " q-uploader__file--failed" : T.__status === "uploaded" ? " q-uploader__file--uploaded" : ""), style: r.noThumbnails !== true && T.__img !== void 0 ? { backgroundImage: 'url("' + T.__img.src + '")', backgroundSize: r.thumbnailFit } : null }, [f("div", { class: "q-uploader__file-header row flex-center no-wrap" }, [T.__status === "failed" ? f(tt, { class: "q-uploader__file-status", name: i.iconSet.type.negative, color: "negative" }) : null, f("div", { class: "q-uploader__file-header-content col" }, [f("div", { class: "q-uploader__title" }, [T.name]), f("div", { class: "q-uploader__subtitle row items-center no-wrap" }, [T.__sizeLabel + " / " + T.__progressLabel])]), T.__status === "uploading" ? f(oh, { value: T.__progress, min: 0, max: 1, indeterminate: T.__progress === 0 }) : f(et, { round: true, dense: true, flat: true, icon: i.iconSet.uploader[T.__status === "uploaded" ? "done" : "clear"], onClick: () => {
      re(T);
    } })])]));
  }
  Xe(() => {
    g.isUploading.value === true && g.abort(), g.files.value.length !== 0 && pe();
  });
  const $ = {};
  for (const T in g) wt(g[T]) === true ? Dt($, T, () => g[T].value) : $[T] = g[T];
  return Object.assign($, { upload: J, reset: H, removeUploadedFiles: Q, removeQueuedFiles: K, removeFile: re, pickFiles: _, addFiles: w }), sm($, { canAddFiles: () => D.value, canUpload: () => q.value, uploadSizeLabel: () => B.value, uploadProgressLabel: () => L.value }), t({ ...g, upload: J, reset: H, removeUploadedFiles: Q, removeQueuedFiles: K, removeFile: re, pickFiles: _, addFiles: w, canAddFiles: D, canUpload: q, uploadSizeLabel: B, uploadProgressLabel: L }), () => {
    const T = [f("div", { class: C.value }, O()), f("div", { class: "q-uploader__list scroll" }, A()), b("uploader")];
    g.isBusy.value === true && T.push(f("div", { class: "q-uploader__overlay absolute-full flex flex-center" }, [f(Sn)]));
    const N = { ref: u, class: R.value };
    return D.value === true && Object.assign(N, { onDragover: k, onDragleave: y }), f("div", N, T);
  };
}
var ow = () => true;
function rg(e) {
  const t = {};
  return e.forEach((n) => {
    t[n] = ow;
  }), t;
}
var iw = rg(lg), uw = ({ name: e, props: t, emits: n, injectPlugin: r }) => me({ name: e, props: { ...rw, ...t }, emits: Bt(n) === true ? { ...iw, ...n } : [...lg, ...n], setup(l, { expose: a }) {
  return aw(r, a);
} });
function Un(e) {
  return typeof e == "function" ? e : () => e;
}
var sw = "QUploader", cw = { url: [Function, String], method: { type: [Function, String], default: "POST" }, fieldName: { type: [Function, String], default: () => (e) => e.name }, headers: [Function, Array], formFields: [Function, Array], withCredentials: [Function, Boolean], sendRaw: [Function, Boolean], batch: [Function, Boolean], factory: Function }, dw = ["factoryFailed", "uploaded", "failed", "uploading"];
function fw({ props: e, emit: t, helpers: n }) {
  const r = U([]), l = U([]), a = U(0), o = m(() => ({ url: Un(e.url), method: Un(e.method), headers: Un(e.headers), formFields: Un(e.formFields), fieldName: Un(e.fieldName), withCredentials: Un(e.withCredentials), sendRaw: Un(e.sendRaw), batch: Un(e.batch) })), i = m(() => a.value > 0), s = m(() => l.value.length !== 0);
  let d;
  function c() {
    r.value.forEach((g) => {
      g.abort();
    }), l.value.length !== 0 && (d = true);
  }
  function v() {
    const g = n.queuedFiles.value.slice(0);
    n.queuedFiles.value = [], o.value.batch(g) ? u(g) : g.forEach((_) => {
      u([_]);
    });
  }
  function u(g) {
    if (a.value++, typeof e.factory != "function") {
      h(g, {});
      return;
    }
    const _ = e.factory(g);
    if (!_) t("factoryFailed", new Error("QUploader: factory() does not return properly"), g), a.value--;
    else if (typeof _.catch == "function" && typeof _.then == "function") {
      l.value.push(_);
      const w = (k) => {
        n.isAlive() === true && (l.value = l.value.filter((y) => y !== _), l.value.length === 0 && (d = false), n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach((y) => {
          n.updateFileStatus(y, "failed");
        }), t("factoryFailed", k, g), a.value--);
      };
      _.then((k) => {
        d === true ? w(new Error("Aborted")) : n.isAlive() === true && (l.value = l.value.filter((y) => y !== _), h(g, k));
      }).catch(w);
    } else h(g, _ || {});
  }
  function h(g, _) {
    const w = new FormData(), k = new XMLHttpRequest(), y = (q, R) => _[q] !== void 0 ? Un(_[q])(R) : o.value[q](R), p = y("url", g);
    if (!p) {
      console.error("q-uploader: invalid or no URL specified"), a.value--;
      return;
    }
    const b = y("formFields", g);
    b !== void 0 && b.forEach((q) => {
      w.append(q.name, q.value);
    });
    let S = 0, P = 0, F = 0, z = 0, L;
    k.upload.addEventListener("progress", (q) => {
      if (L === true) return;
      const R = Math.min(z, q.loaded);
      n.uploadedSize.value += R - F, F = R;
      let C = F - P;
      for (let H = S; C > 0 && H < g.length; H++) {
        const Q = g[H];
        if (C > Q.size) C -= Q.size, S++, P += Q.size, n.updateFileStatus(Q, "uploading", Q.size);
        else {
          n.updateFileStatus(Q, "uploading", C);
          return;
        }
      }
    }, false), k.onreadystatechange = () => {
      k.readyState < 4 || (k.status && k.status < 400 ? (n.uploadedFiles.value = n.uploadedFiles.value.concat(g), g.forEach((q) => {
        n.updateFileStatus(q, "uploaded");
      }), t("uploaded", { files: g, xhr: k })) : (L = true, n.uploadedSize.value -= F, n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach((q) => {
        n.updateFileStatus(q, "failed");
      }), t("failed", { files: g, xhr: k })), a.value--, r.value = r.value.filter((q) => q !== k));
    }, k.open(y("method", g), p), y("withCredentials", g) === true && (k.withCredentials = true);
    const B = y("headers", g);
    B !== void 0 && B.forEach((q) => {
      k.setRequestHeader(q.name, q.value);
    });
    const D = y("sendRaw", g);
    g.forEach((q) => {
      n.updateFileStatus(q, "uploading", 0), D !== true && w.append(y("fieldName", q), q, q.name), q.xhr = k, q.__abort = () => {
        k.abort();
      }, z += q.size;
    }), t("uploading", { files: g, xhr: k }), r.value.push(k), D === true ? k.send(new Blob(g)) : k.send(w);
  }
  return { isUploading: i, isBusy: s, abort: c, upload: v };
}
var vw = { name: sw, props: cw, emits: dw, injectPlugin: fw };
uw(vw);
me({ name: "QUploaderAddTrigger", setup() {
  const e = Rt(Cm, ut);
  return e === ut && console.error("QUploaderAddTrigger needs to be child of QUploader"), e;
} });
me({ name: "QVideo", props: { ...nc, src: { type: String, required: true }, title: String, fetchpriority: { type: String, default: "auto" }, loading: { type: String, default: "eager" }, referrerpolicy: { type: String, default: "strict-origin-when-cross-origin" } }, setup(e) {
  const t = lc(e), n = m(() => "q-video" + (e.ratio !== void 0 ? " q-video--responsive" : ""));
  return () => f("div", { class: n.value, style: t.value }, [f("iframe", { src: e.src, title: e.title, fetchpriority: e.fetchpriority, loading: e.loading, referrerpolicy: e.referrerpolicy, frameborder: "0", allowfullscreen: true })]);
} });
function uf(e) {
  if (e === false) return 0;
  if (e === true || e === void 0) return 1;
  const t = parseInt(e, 10);
  return isNaN(t) ? 0 : t;
}
Ln({ name: "close-popup", beforeMount(e, { value: t }) {
  const n = { depth: uf(t), handler(r) {
    n.depth !== 0 && setTimeout(() => {
      const l = dy(e);
      l !== void 0 && fy(l, r, n.depth);
    });
  }, handlerKey(r) {
    wn(r, 13) === true && n.handler(r);
  } };
  e.__qclosepopup = n, e.addEventListener("click", n.handler), e.addEventListener("keyup", n.handlerKey);
}, updated(e, { value: t, oldValue: n }) {
  t !== n && (e.__qclosepopup.depth = uf(t));
}, beforeUnmount(e) {
  const t = e.__qclosepopup;
  e.removeEventListener("click", t.handler), e.removeEventListener("keyup", t.handlerKey), delete e.__qclosepopup;
} });
var mw = 0, Ur = void 0;
function sf(e, t) {
  Ur === void 0 && (Ur = document.createElement("div"), Ur.style.cssText = "position: absolute; left: 0; top: 0", document.body.appendChild(Ur));
  const n = e.getBoundingClientRect(), r = Ur.getBoundingClientRect(), { marginLeft: l, marginRight: a, marginTop: o, marginBottom: i } = window.getComputedStyle(e), s = parseInt(l, 10) + parseInt(a, 10), d = parseInt(o, 10) + parseInt(i, 10);
  return { left: n.left - r.left, top: n.top - r.top, width: n.right - n.left, height: n.bottom - n.top, widthM: n.right - n.left + (t === true ? 0 : s), heightM: n.bottom - n.top + (t === true ? 0 : d), marginH: t === true ? s : 0, marginV: t === true ? d : 0 };
}
function oo(e) {
  return { width: e.scrollWidth, height: e.scrollHeight };
}
var cf = ["Top", "Right", "Bottom", "Left"], df = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], hw = /-block|-inline|block-|inline-/, gw = /(-block|-inline|block-|inline-).*:/;
function ff(e, t) {
  const n = window.getComputedStyle(e), r = {};
  for (let l = 0; l < t.length; l++) {
    const a = t[l];
    if (n[a] === "") if (a === "cssText") {
      const o = n.length;
      let i = "";
      for (let s = 0; s < o; s++) hw.test(n[s]) !== true && (i += n[s] + ": " + n[n[s]] + "; ");
      r[a] = i;
    } else if (["borderWidth", "borderStyle", "borderColor"].indexOf(a) !== -1) {
      const o = a.replace("border", "");
      let i = "";
      for (let s = 0; s < cf.length; s++) {
        const d = "border" + cf[s] + o;
        i += n[d] + " ";
      }
      r[a] = i;
    } else if (a === "borderRadius") {
      let o = "", i = "";
      for (let s = 0; s < df.length; s++) {
        const d = n[df[s]].split(" ");
        o += d[0] + " ", i += (d[1] === void 0 ? d[0] : d[1]) + " ";
      }
      r[a] = o + "/ " + i;
    } else r[a] = n[a];
    else a === "cssText" ? r[a] = n[a].split(";").filter((o) => gw.test(o) !== true).join(";") : r[a] = n[a];
  }
  return r;
}
var bw = ["absolute", "fixed", "relative", "sticky"];
function vf(e) {
  let t = e, n = 0;
  for (; t !== null && t !== document; ) {
    const { position: r, zIndex: l } = window.getComputedStyle(t), a = Number(l);
    a > n && (t === e || bw.includes(r) === true) && (n = a), t = t.parentNode;
  }
  return n;
}
function pw(e) {
  return { from: e.from, to: e.to !== void 0 ? e.to : e.from };
}
function yw(e) {
  return typeof e == "number" ? e = { duration: e } : typeof e == "function" && (e = { onEnd: e }), { ...e, waitFor: e.waitFor === void 0 ? 0 : e.waitFor, duration: isNaN(e.duration) === true ? 300 : parseInt(e.duration, 10), easing: typeof e.easing == "string" && e.easing.length !== 0 ? e.easing : "ease-in-out", delay: isNaN(e.delay) === true ? 0 : parseInt(e.delay, 10), fill: typeof e.fill == "string" && e.fill.length !== 0 ? e.fill : "none", resize: e.resize === true, useCSS: e.useCSS === true || e.usecss === true, hideFromClone: e.hideFromClone === true || e.hidefromclone === true, keepToClone: e.keepToClone === true || e.keeptoclone === true, tween: e.tween === true, tweenFromOpacity: isNaN(e.tweenFromOpacity) === true ? 0.6 : parseFloat(e.tweenFromOpacity), tweenToOpacity: isNaN(e.tweenToOpacity) === true ? 0.5 : parseFloat(e.tweenToOpacity) };
}
function mf(e) {
  const t = typeof e;
  return t === "function" ? e() : t === "string" ? document.querySelector(e) : e;
}
function hf(e) {
  return e && e.ownerDocument === document && e.parentNode !== null;
}
function _w(e) {
  let t = () => false, n = false, r = true;
  const l = pw(e), a = yw(e), o = mf(l.from);
  if (hf(o) !== true) return t;
  typeof o.qMorphCancel == "function" && o.qMorphCancel();
  let i, s, d, c;
  const v = o.parentNode, u = o.nextElementSibling, h = sf(o, a.resize), { width: g, height: _ } = oo(v), { borderWidth: w, borderStyle: k, borderColor: y, borderRadius: p, backgroundColor: b, transform: S, position: P, cssText: F } = ff(o, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), z = o.classList.toString(), L = o.style.cssText, B = o.cloneNode(true), D = a.tween === true ? o.cloneNode(true) : void 0;
  D !== void 0 && (D.className = D.classList.toString().split(" ").filter((R) => /^bg-/.test(R) === false).join(" ")), a.hideFromClone === true && B.classList.add("q-morph--internal"), B.setAttribute("aria-hidden", "true"), B.style.transition = "none", B.style.animation = "none", B.style.pointerEvents = "none", v.insertBefore(B, u), o.qMorphCancel = () => {
    n = true, B.remove(), D == null ? void 0 : D.remove(), a.hideFromClone === true && B.classList.remove("q-morph--internal"), o.qMorphCancel = void 0;
  };
  const q = () => {
    const R = mf(l.to);
    if (n === true || hf(R) !== true) {
      typeof o.qMorphCancel == "function" && o.qMorphCancel();
      return;
    }
    o !== R && typeof R.qMorphCancel == "function" && R.qMorphCancel(), a.keepToClone !== true && R.classList.add("q-morph--internal"), B.classList.add("q-morph--internal");
    const { width: C, height: H } = oo(v), { width: Q, height: K } = oo(R.parentNode);
    a.hideFromClone !== true && B.classList.remove("q-morph--internal"), R.qMorphCancel = () => {
      n = true, B.remove(), D == null ? void 0 : D.remove(), a.hideFromClone === true && B.classList.remove("q-morph--internal"), a.keepToClone !== true && R.classList.remove("q-morph--internal"), o.qMorphCancel = void 0, R.qMorphCancel = void 0;
    };
    const G = () => {
      if (n === true) {
        typeof R.qMorphCancel == "function" && R.qMorphCancel();
        return;
      }
      a.hideFromClone !== true && (B.classList.add("q-morph--internal"), B.innerHTML = "", B.style.left = 0, B.style.right = "unset", B.style.top = 0, B.style.bottom = "unset", B.style.transform = "none"), a.keepToClone !== true && R.classList.remove("q-morph--internal");
      const re = R.parentNode, { width: pe, height: Y } = oo(re), M = R.cloneNode(a.keepToClone);
      M.setAttribute("aria-hidden", "true"), a.keepToClone !== true && (M.style.left = 0, M.style.right = "unset", M.style.top = 0, M.style.bottom = "unset", M.style.transform = "none", M.style.pointerEvents = "none"), M.classList.add("q-morph--internal");
      const J = R === o && v === re ? B : R.nextElementSibling;
      re.insertBefore(M, J);
      const { borderWidth: ee, borderStyle: ge, borderColor: O, borderRadius: A, backgroundColor: $, transform: T, position: N, cssText: _e2 } = ff(R, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), x = R.classList.toString(), E = R.style.cssText;
      R.style.cssText = _e2, R.style.transform = "none", R.style.animation = "none", R.style.transition = "none", R.className = x.split(" ").filter((ye) => /^bg-/.test(ye) === false).join(" ");
      const I = sf(R, a.resize), te = h.left - I.left, ne = h.top - I.top, W = h.width / (I.width > 0 ? I.width : 10), ue = h.height / (I.height > 0 ? I.height : 100), de = g - C, fe = _ - H, se = pe - Q, le = Y - K, j = Math.max(h.widthM, de), oe = Math.max(h.heightM, fe), we = Math.max(I.widthM, se), ke = Math.max(I.heightM, le), Se = o === R && ["absolute", "fixed"].includes(N) === false && ["absolute", "fixed"].includes(P) === false;
      let qe = N === "fixed", je = re;
      for (; qe !== true && je !== document; ) qe = window.getComputedStyle(je).position === "fixed", je = je.parentNode;
      if (a.hideFromClone !== true && (B.style.display = "block", B.style.flex = "0 0 auto", B.style.opacity = 0, B.style.minWidth = "unset", B.style.maxWidth = "unset", B.style.minHeight = "unset", B.style.maxHeight = "unset", B.classList.remove("q-morph--internal")), a.keepToClone !== true && (M.style.display = "block", M.style.flex = "0 0 auto", M.style.opacity = 0, M.style.minWidth = "unset", M.style.maxWidth = "unset", M.style.minHeight = "unset", M.style.maxHeight = "unset"), M.classList.remove("q-morph--internal"), typeof a.classes == "string" && (R.className += " " + a.classes), typeof a.style == "string") R.style.cssText += " " + a.style;
      else if (Bt(a.style) === true) for (const ye in a.style) R.style[ye] = a.style[ye];
      const De = vf(B), ie = vf(R), be = qe === true ? document.documentElement : { scrollLeft: 0, scrollTop: 0 };
      R.style.position = qe === true ? "fixed" : "absolute", R.style.left = `${I.left - be.scrollLeft}px`, R.style.right = "unset", R.style.top = `${I.top - be.scrollTop}px`, R.style.margin = 0, a.resize === true && (R.style.minWidth = "unset", R.style.maxWidth = "unset", R.style.minHeight = "unset", R.style.maxHeight = "unset", R.style.overflow = "hidden", R.style.overflowX = "hidden", R.style.overflowY = "hidden"), document.body.appendChild(R), D !== void 0 && (D.style.cssText = F, D.style.transform = "none", D.style.animation = "none", D.style.transition = "none", D.style.position = R.style.position, D.style.left = `${h.left - be.scrollLeft}px`, D.style.right = "unset", D.style.top = `${h.top - be.scrollTop}px`, D.style.margin = 0, D.style.pointerEvents = "none", a.resize === true && (D.style.minWidth = "unset", D.style.maxWidth = "unset", D.style.minHeight = "unset", D.style.maxHeight = "unset", D.style.overflow = "hidden", D.style.overflowX = "hidden", D.style.overflowY = "hidden"), document.body.appendChild(D));
      const ae = (ye) => {
        o === R && r !== true ? (R.style.cssText = L, R.className = z) : (R.style.cssText = E, R.className = x), M.parentNode === re && re.insertBefore(R, M), B.remove(), M.remove(), D == null ? void 0 : D.remove(), t = () => false, o.qMorphCancel = void 0, R.qMorphCancel = void 0, typeof a.onEnd == "function" && a.onEnd(r === true ? "to" : "from", ye === true);
      };
      if (a.useCSS !== true && typeof R.animate == "function") {
        const ye = a.resize === true ? { transform: `translate(${te}px, ${ne}px)`, width: `${j}px`, height: `${oe}px` } : { transform: `translate(${te}px, ${ne}px) scale(${W}, ${ue})` }, Te = a.resize === true ? { width: `${we}px`, height: `${ke}px` } : {}, Oe = a.resize === true ? { width: `${j}px`, height: `${oe}px` } : {}, Re = a.resize === true ? { transform: `translate(${-1 * te}px, ${-1 * ne}px)`, width: `${we}px`, height: `${ke}px` } : { transform: `translate(${-1 * te}px, ${-1 * ne}px) scale(${1 / W}, ${1 / ue})` }, Ge = D !== void 0 ? { opacity: a.tweenToOpacity } : { backgroundColor: b }, st = D !== void 0 ? { opacity: 1 } : { backgroundColor: $ };
        c = R.animate([{ margin: 0, borderWidth: w, borderStyle: k, borderColor: y, borderRadius: p, zIndex: De, transformOrigin: "0 0", ...ye, ...Ge }, { margin: 0, borderWidth: ee, borderStyle: ge, borderColor: O, borderRadius: A, zIndex: ie, transformOrigin: "0 0", transform: T, ...Te, ...st }], { duration: a.duration, easing: a.easing, fill: a.fill, delay: a.delay }), s = D === void 0 ? void 0 : D.animate([{ opacity: a.tweenFromOpacity, margin: 0, borderWidth: w, borderStyle: k, borderColor: y, borderRadius: p, zIndex: De, transformOrigin: "0 0", transform: S, ...Oe }, { opacity: 0, margin: 0, borderWidth: ee, borderStyle: ge, borderColor: O, borderRadius: A, zIndex: ie, transformOrigin: "0 0", ...Re }], { duration: a.duration, easing: a.easing, fill: a.fill, delay: a.delay }), i = a.hideFromClone === true || Se === true ? void 0 : B.animate([{ margin: `${fe < 0 ? fe / 2 : 0}px ${de < 0 ? de / 2 : 0}px`, width: `${j + h.marginH}px`, height: `${oe + h.marginV}px` }, { margin: 0, width: 0, height: 0 }], { duration: a.duration, easing: a.easing, fill: a.fill, delay: a.delay }), d = a.keepToClone === true ? void 0 : M.animate([Se === true ? { margin: `${fe < 0 ? fe / 2 : 0}px ${de < 0 ? de / 2 : 0}px`, width: `${j + h.marginH}px`, height: `${oe + h.marginV}px` } : { margin: 0, width: 0, height: 0 }, { margin: `${le < 0 ? le / 2 : 0}px ${se < 0 ? se / 2 : 0}px`, width: `${we + I.marginH}px`, height: `${ke + I.marginV}px` }], { duration: a.duration, easing: a.easing, fill: a.fill, delay: a.delay });
        const Tt = (Qt) => {
          i == null ? void 0 : i.cancel(), s == null ? void 0 : s.cancel(), d == null ? void 0 : d.cancel(), c.cancel(), c.removeEventListener("finish", Tt), c.removeEventListener("cancel", Tt), ae(Qt), i = void 0, s = void 0, d = void 0, c = void 0;
        };
        o.qMorphCancel = () => {
          o.qMorphCancel = void 0, n = true, Tt();
        }, R.qMorphCancel = () => {
          R.qMorphCancel = void 0, n = true, Tt();
        }, c.addEventListener("finish", Tt), c.addEventListener("cancel", Tt), t = (Qt) => n === true || c === void 0 ? false : Qt === true ? (Tt(true), true) : (r = r !== true, i == null ? void 0 : i.reverse(), s == null ? void 0 : s.reverse(), d == null ? void 0 : d.reverse(), c.reverse(), true);
      } else {
        const ye = `q-morph-anim-${++mw}`, Te = document.createElement("style"), Oe = a.resize === true ? `
            transform: translate(${te}px, ${ne}px);
            width: ${j}px;
            height: ${oe}px;
          ` : `transform: translate(${te}px, ${ne}px) scale(${W}, ${ue});`, Re = a.resize === true ? `
            width: ${we}px;
            height: ${ke}px;
          ` : "", Ge = a.resize === true ? `
            width: ${j}px;
            height: ${oe}px;
          ` : "", st = a.resize === true ? `
            transform: translate(${-1 * te}px, ${-1 * ne}px);
            width: ${we}px;
            height: ${ke}px;
          ` : `transform: translate(${-1 * te}px, ${-1 * ne}px) scale(${1 / W}, ${1 / ue});`, Tt = D !== void 0 ? `opacity: ${a.tweenToOpacity};` : `background-color: ${b};`, Qt = D !== void 0 ? "opacity: 1;" : `background-color: ${$};`, rl = D === void 0 ? "" : `
            @keyframes ${ye}-from-tween {
              0% {
                opacity: ${a.tweenFromOpacity};
                margin: 0;
                border-width: ${w};
                border-style: ${k};
                border-color: ${y};
                border-radius: ${p};
                z-index: ${De};
                transform-origin: 0 0;
                transform: ${S};
                ${Ge}
              }

              100% {
                opacity: 0;
                margin: 0;
                border-width: ${ee};
                border-style: ${ge};
                border-color: ${O};
                border-radius: ${A};
                z-index: ${ie};
                transform-origin: 0 0;
                ${st}
              }
            }
          `, on = a.hideFromClone === true || Se === true ? "" : `
            @keyframes ${ye}-from {
              0% {
                margin: ${fe < 0 ? fe / 2 : 0}px ${de < 0 ? de / 2 : 0}px;
                width: ${j + h.marginH}px;
                height: ${oe + h.marginV}px;
              }

              100% {
                margin: 0;
                width: 0;
                height: 0;
              }
            }
          `, Nn = Se === true ? `
            margin: ${fe < 0 ? fe / 2 : 0}px ${de < 0 ? de / 2 : 0}px;
            width: ${j + h.marginH}px;
            height: ${oe + h.marginV}px;
          ` : `
            margin: 0;
            width: 0;
            height: 0;
          `, ce = a.keepToClone === true ? "" : `
            @keyframes ${ye}-to {
              0% {
                ${Nn}
              }

              100% {
                margin: ${le < 0 ? le / 2 : 0}px ${se < 0 ? se / 2 : 0}px;
                width: ${we + I.marginH}px;
                height: ${ke + I.marginV}px;
              }
            }
          `;
        Te.innerHTML = `
          @keyframes ${ye} {
            0% {
              margin: 0;
              border-width: ${w};
              border-style: ${k};
              border-color: ${y};
              border-radius: ${p};
              background-color: ${b};
              z-index: ${De};
              transform-origin: 0 0;
              ${Oe}
              ${Tt}
            }

            100% {
              margin: 0;
              border-width: ${ee};
              border-style: ${ge};
              border-color: ${O};
              border-radius: ${A};
              background-color: ${$};
              z-index: ${ie};
              transform-origin: 0 0;
              transform: ${T};
              ${Re}
              ${Qt}
            }
          }

          ${on}

          ${rl}

          ${ce}
        `, document.head.appendChild(Te);
        let Ce = "normal";
        B.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${Ce} ${a.fill} ${ye}-from`, D !== void 0 && (D.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${Ce} ${a.fill} ${ye}-from-tween`), M.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${Ce} ${a.fill} ${ye}-to`, R.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${Ce} ${a.fill} ${ye}`;
        const Fe = (Be) => {
          Be === Object(Be) && Be.animationName !== ye || (R.removeEventListener("animationend", Fe), R.removeEventListener("animationcancel", Fe), ae(), Te.remove());
        };
        o.qMorphCancel = () => {
          o.qMorphCancel = void 0, n = true, Fe();
        }, R.qMorphCancel = () => {
          R.qMorphCancel = void 0, n = true, Fe();
        }, R.addEventListener("animationend", Fe), R.addEventListener("animationcancel", Fe), t = (Be) => n === true || !R || !B || !M ? false : Be === true ? (Fe(), true) : (r = r !== true, Ce = Ce === "normal" ? "reverse" : "normal", B.style.animationDirection = Ce, D.style.animationDirection = Ce, M.style.animationDirection = Ce, R.style.animationDirection = Ce, true);
      }
    };
    a.waitFor > 0 || a.waitFor === "transitionend" || a.waitFor === Object(a.waitFor) && typeof a.waitFor.then == "function" ? (a.waitFor > 0 ? new Promise((pe) => setTimeout(pe, a.waitFor)) : a.waitFor === "transitionend" ? new Promise((pe) => {
      const Y = () => {
        M !== null && (clearTimeout(M), M = null), R && (R.removeEventListener("transitionend", Y), R.removeEventListener("transitioncancel", Y)), pe();
      };
      let M = setTimeout(Y, 400);
      R.addEventListener("transitionend", Y), R.addEventListener("transitioncancel", Y);
    }) : a.waitFor).then(G).catch(() => {
      typeof R.qMorphCancel == "function" && R.qMorphCancel();
    }) : G();
  };
  return typeof e.onToggle == "function" && e.onToggle(), requestAnimationFrame(q), (R) => t(R);
}
var Yo = {}, ww = ["duration", "delay", "easing", "fill", "classes", "style", "duration", "resize", "useCSS", "hideFromClone", "keepToClone", "tween", "tweenFromOpacity", "tweenToOpacity", "waitFor", "onEnd"], xw = ["resize", "useCSS", "hideFromClone", "keepToClone", "tween"];
function mr(e, t) {
  e.clsAction !== t && (e.clsAction = t, e.el.classList[t]("q-morph--invisible"));
}
function ag(e) {
  if (e.animating === true || e.queue.length < 2) return;
  const [t, n] = e.queue;
  e.animating = true, t.animating = true, n.animating = true, mr(t, "remove"), mr(n, "remove");
  const r = _w({ from: t.el, to: n.el, onToggle() {
    mr(t, "add"), mr(n, "remove");
  }, ...n.opts, onEnd(l, a) {
    var _a3, _b2;
    (_b2 = (_a3 = n.opts).onEnd) == null ? void 0 : _b2.call(_a3, l, a), a !== true && (t.animating = false, n.animating = false, e.animating = false, e.cancel = void 0, e.queue.shift(), ag(e));
  } });
  e.cancel = () => {
    r(true), e.cancel = void 0;
  };
}
function og(e, t) {
  const n = t.opts;
  xw.forEach((r) => {
    n[r] = e[r] === true;
  });
}
function Sw(e, t) {
  const n = typeof e == "string" && e.length !== 0 ? e.split(":") : [];
  t.name = n[0], t.group = n[1], Object.assign(t.opts, { duration: isNaN(n[2]) === true ? 300 : parseFloat(n[2]), waitFor: n[3] });
}
function Cw(e, t) {
  e.group !== void 0 && (t.group = e.group), e.name !== void 0 && (t.name = e.name);
  const n = t.opts;
  ww.forEach((r) => {
    e[r] !== void 0 && (n[r] = e[r]);
  });
}
function kw(e, t) {
  if (t.name === e) {
    const n = Yo[t.group];
    n === void 0 ? (Yo[t.group] = { name: t.group, model: e, queue: [t], animating: false }, mr(t, "remove")) : n.model !== e && (n.model = e, n.queue.push(t), n.animating === false && n.queue.length === 2 && ag(n));
    return;
  }
  t.animating === false && mr(t, "add");
}
function gf(e, t) {
  let n;
  Object(t) === t ? (n = "" + t.model, Cw(t, e), og(t, e)) : n = "" + t, n !== e.model ? (e.model = n, kw(n, e)) : e.animating === false && e.clsAction !== void 0 && e.el.classList[e.clsAction]("q-morph--invisible");
}
Ln({ name: "morph", mounted(e, t) {
  const n = { el: e, animating: false, opts: {} };
  og(t.modifiers, n), Sw(t.arg, n), gf(n, t.value), e.__qmorph = n;
}, updated(e, t) {
  gf(e.__qmorph, t.value);
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qmorph, n = Yo[t.group];
  n !== void 0 && n.queue.indexOf(t) !== -1 && (n.queue = n.queue.filter((l) => l !== t), n.queue.length === 0 && ((_a3 = n.cancel) == null ? void 0 : _a3.call(n), delete Yo[t.group])), t.clsAction === "add" && e.classList.remove("q-morph--invisible"), delete e.__qmorph;
} });
var Tw = { childList: true, subtree: true, attributes: true, characterData: true, attributeOldValue: true, characterDataOldValue: true };
function bf(e, t, n) {
  var _a3;
  t.handler = n, (_a3 = t.observer) == null ? void 0 : _a3.disconnect(), t.observer = new MutationObserver((r) => {
    typeof t.handler == "function" && (t.handler(r) === false || t.once === true) && ig(e);
  }), t.observer.observe(e, t.opts);
}
function ig(e) {
  var _a3;
  const t = e.__qmutation;
  t !== void 0 && ((_a3 = t.observer) == null ? void 0 : _a3.disconnect(), delete e.__qmutation);
}
Ln({ name: "mutation", mounted(e, { modifiers: { once: t, ...n }, value: r }) {
  const l = { once: t, opts: Object.keys(n).length === 0 ? Tw : n };
  bf(e, l, r), e.__qmutation = l;
}, updated(e, { oldValue: t, value: n }) {
  const r = e.__qmutation;
  r !== void 0 && t !== n && bf(e, r, n);
}, beforeUnmount: ig });
var { passive: Xo } = mt;
function pf(e, { value: t, oldValue: n }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, Xo);
    return;
  }
  e.handler = t, typeof n != "function" && (e.scrollTarget.addEventListener("scroll", e.scroll, Xo), e.scroll());
}
Ln({ name: "scroll-fire", mounted(e, t) {
  const n = { scrollTarget: zn(e), scroll: Pr(() => {
    let r, l;
    n.scrollTarget === window ? (l = e.getBoundingClientRect().bottom, r = window.innerHeight) : (l = Oo(e).top + qr(e), r = Oo(n.scrollTarget).top + qr(n.scrollTarget)), l > 0 && l < r && (n.scrollTarget.removeEventListener("scroll", n.scroll, Xo), n.handler(e));
  }, 25) };
  pf(n, t), e.__qscrollfire = n;
}, updated(e, t) {
  t.value !== t.oldValue && pf(e.__qscrollfire, t);
}, beforeUnmount(e) {
  const t = e.__qscrollfire;
  t.scrollTarget.removeEventListener("scroll", t.scroll, Xo), t.scroll.cancel(), delete e.__qscrollfire;
} });
function yf(e, { value: t, oldValue: n }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, mt.passive);
    return;
  }
  e.handler = t, typeof n != "function" && e.scrollTarget.addEventListener("scroll", e.scroll, mt.passive);
}
Ln({ name: "scroll", mounted(e, t) {
  const n = { scrollTarget: zn(e), scroll() {
    n.handler(wl(n.scrollTarget), pi(n.scrollTarget));
  } };
  yf(n, t), e.__qscroll = n;
}, updated(e, t) {
  e.__qscroll !== void 0 && t.oldValue !== t.value && yf(e.__qscroll, t);
}, beforeUnmount(e) {
  const t = e.__qscroll;
  t.scrollTarget.removeEventListener("scroll", t.scroll, mt.passive), delete e.__qscroll;
} });
Ln({ name: "touch-hold", beforeMount(e, t) {
  const { modifiers: n } = t;
  if (n.mouse !== true && ze.has.touch !== true) return;
  const r = { handler: t.value, noop: Ct, mouseStart(a) {
    typeof r.handler == "function" && fi(a) === true && (Et(r, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]), r.start(a, true));
  }, touchStart(a) {
    if (a.target !== void 0 && typeof r.handler == "function") {
      const o = a.target;
      Et(r, "temp", [[o, "touchmove", "move", "passiveCapture"], [o, "touchcancel", "end", "notPassiveCapture"], [o, "touchend", "end", "notPassiveCapture"]]), r.start(a);
    }
  }, start(a, o) {
    r.origin = nn(a);
    const i = Date.now();
    ze.is.mobile === true && (document.body.classList.add("non-selectable"), An(), r.styleCleanup = (s) => {
      r.styleCleanup = void 0;
      const d = () => {
        document.body.classList.remove("non-selectable");
      };
      s === true ? (An(), setTimeout(d, 10)) : d();
    }), r.triggered = false, r.sensitivity = o === true ? r.mouseSensitivity : r.touchSensitivity, r.timer = setTimeout(() => {
      r.timer = void 0, An(), r.triggered = true, r.handler({ evt: a, touch: o !== true, mouse: o === true, position: r.origin, duration: Date.now() - i });
    }, r.duration);
  }, move(a) {
    const { top: o, left: i } = nn(a);
    r.timer !== void 0 && (Math.abs(i - r.origin.left) >= r.sensitivity || Math.abs(o - r.origin.top) >= r.sensitivity) && (clearTimeout(r.timer), r.timer = void 0);
  }, end(a) {
    var _a3;
    Gt(r, "temp"), (_a3 = r.styleCleanup) == null ? void 0 : _a3.call(r, r.triggered), r.triggered === true ? a !== void 0 && Ue(a) : r.timer !== void 0 && (clearTimeout(r.timer), r.timer = void 0);
  } }, l = [600, 5, 7];
  if (typeof t.arg == "string" && t.arg.length !== 0 && t.arg.split(":").forEach((a, o) => {
    const i = parseInt(a, 10);
    i && (l[o] = i);
  }), [r.duration, r.touchSensitivity, r.mouseSensitivity] = l, e.__qtouchhold = r, n.mouse === true) {
    const a = n.mouseCapture === true || n.mousecapture === true ? "Capture" : "";
    Et(r, "main", [[e, "mousedown", "mouseStart", `passive${a}`]]);
  }
  ze.has.touch === true && Et(r, "main", [[e, "touchstart", "touchStart", `passive${n.capture === true ? "Capture" : ""}`], [e, "touchend", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const n = e.__qtouchhold;
  n !== void 0 && t.oldValue !== t.value && (typeof t.value != "function" && n.end(), n.handler = t.value);
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qtouchhold;
  t !== void 0 && (Gt(t, "main"), Gt(t, "temp"), t.timer !== void 0 && clearTimeout(t.timer), (_a3 = t.styleCleanup) == null ? void 0 : _a3.call(t), delete e.__qtouchhold);
} });
var ug = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] }, qw = new RegExp(`^([\\d+]+|${Object.keys(ug).join("|")})$`, "i");
function Ew(e, t) {
  const { top: n, left: r } = nn(e);
  return Math.abs(r - t.left) >= 7 || Math.abs(n - t.top) >= 7;
}
Ln({ name: "touch-repeat", beforeMount(e, { modifiers: t, value: n, arg: r }) {
  const l = Object.keys(t).reduce((s, d) => {
    if (qw.test(d) === true) {
      const c = isNaN(parseInt(d, 10)) ? ug[d.toLowerCase()] : parseInt(d, 10);
      c >= 0 && s.push(c);
    }
    return s;
  }, []);
  if (t.mouse !== true && ze.has.touch !== true && l.length === 0) return;
  const a = typeof r == "string" && r.length !== 0 ? r.split(":").map((s) => parseInt(s, 10)) : [0, 600, 300], o = a.length - 1, i = { keyboard: l, handler: n, noop: Ct, mouseStart(s) {
    i.event === void 0 && typeof i.handler == "function" && fi(s) === true && (Et(i, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]), i.start(s, true));
  }, keyboardStart(s) {
    if (typeof i.handler == "function" && wn(s, l) === true) {
      if ((a[0] === 0 || i.event !== void 0) && (Ue(s), e.focus(), i.event !== void 0)) return;
      Et(i, "temp", [[document, "keyup", "end", "notPassiveCapture"], [document, "click", "end", "notPassiveCapture"]]), i.start(s, false, true);
    }
  }, touchStart(s) {
    if (s.target !== void 0 && typeof i.handler == "function") {
      const d = s.target;
      Et(i, "temp", [[d, "touchmove", "move", "passiveCapture"], [d, "touchcancel", "end", "notPassiveCapture"], [d, "touchend", "end", "notPassiveCapture"]]), i.start(s);
    }
  }, start(s, d, c) {
    c !== true && (i.origin = nn(s));
    function v(h) {
      i.styleCleanup = void 0, document.documentElement.style.cursor = "";
      const g = () => {
        document.body.classList.remove("non-selectable");
      };
      h === true ? (An(), setTimeout(g, 10)) : g();
    }
    ze.is.mobile === true && (document.body.classList.add("non-selectable"), An(), i.styleCleanup = v), i.event = { touch: d !== true && c !== true, mouse: d === true, keyboard: c === true, startTime: Date.now(), repeatCount: 0 };
    const u = () => {
      if (i.timer = void 0, i.event === void 0) return;
      i.event.repeatCount === 0 && (i.event.evt = s, c === true ? i.event.keyCode = s.keyCode : i.event.position = nn(s), ze.is.mobile !== true && (document.documentElement.style.cursor = "pointer", document.body.classList.add("non-selectable"), An(), i.styleCleanup = v)), i.event.duration = Date.now() - i.event.startTime, i.event.repeatCount += 1, i.handler(i.event);
      const h = o < i.event.repeatCount ? o : i.event.repeatCount;
      i.timer = setTimeout(u, a[h]);
    };
    a[0] === 0 ? u() : i.timer = setTimeout(u, a[0]);
  }, move(s) {
    i.event !== void 0 && i.timer !== void 0 && Ew(s, i.origin) === true && (clearTimeout(i.timer), i.timer = void 0);
  }, end(s) {
    var _a3;
    i.event !== void 0 && ((_a3 = i.styleCleanup) == null ? void 0 : _a3.call(i, true), s !== void 0 && i.event.repeatCount > 0 && Ue(s), Gt(i, "temp"), i.timer !== void 0 && (clearTimeout(i.timer), i.timer = void 0), i.event = void 0);
  } };
  if (e.__qtouchrepeat = i, t.mouse === true) {
    const s = t.mouseCapture === true || t.mousecapture === true ? "Capture" : "";
    Et(i, "main", [[e, "mousedown", "mouseStart", `passive${s}`]]);
  }
  if (ze.has.touch === true && Et(i, "main", [[e, "touchstart", "touchStart", `passive${t.capture === true ? "Capture" : ""}`], [e, "touchend", "noop", "passiveCapture"]]), l.length !== 0) {
    const s = t.keyCapture === true || t.keycapture === true ? "Capture" : "";
    Et(i, "main", [[e, "keydown", "keyboardStart", `notPassive${s}`]]);
  }
}, updated(e, { oldValue: t, value: n }) {
  const r = e.__qtouchrepeat;
  r !== void 0 && t !== n && (typeof n != "function" && r.end(), r.handler = n);
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qtouchrepeat;
  t !== void 0 && (t.timer !== void 0 && clearTimeout(t.timer), Gt(t, "main"), Gt(t, "temp"), (_a3 = t.styleCleanup) == null ? void 0 : _a3.call(t), delete e.__qtouchrepeat);
} });
function Mw(e, t = document.body) {
  if (!(t instanceof Element)) throw new TypeError("Expected a DOM element");
  return getComputedStyle(t).getPropertyValue(`--q-${e}`).trim() || null;
}
var io;
function Rw() {
  return ze.is.winphone ? "msapplication-navbutton-color" : ze.is.safari ? "apple-mobile-web-app-status-bar-style" : "theme-color";
}
function Aw(e) {
  const t = document.getElementsByTagName("META");
  for (const n in t) if (t[n].name === e) return t[n];
}
function $w(e) {
  io === void 0 && (io = Rw());
  let t = Aw(io);
  const n = t === void 0;
  n && (t = document.createElement("meta"), t.setAttribute("name", io)), t.setAttribute("content", e), n && document.head.appendChild(t);
}
ze.is.mobile === true && (ze.is.nativeMobile === true || ze.is.winphone === true || ze.is.safari === true || ze.is.webkit === true || ze.is.vivaldi);
var Qr = {};
function Pw(e) {
  Object.assign(Wt, { request: e, exit: e, toggle: e });
}
function sg() {
  return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || null;
}
function cg() {
  const e = Wt.activeEl = Wt.isActive === false ? null : sg();
  cy(e === null || e === document.documentElement ? document.body : e);
}
function Lw() {
  Wt.isActive = Wt.isActive === false, cg();
}
function _f(e, t) {
  try {
    const n = e[t]();
    return n === void 0 ? Promise.resolve() : n;
  } catch (n) {
    return Promise.reject(n);
  }
}
var Wt = El({ isActive: false, activeEl: null }, { isCapable: false, install({ $q: e }) {
  e.fullscreen = this;
} });
Qr.request = ["requestFullscreen", "msRequestFullscreen", "mozRequestFullScreen", "webkitRequestFullscreen"].find((e) => document.documentElement[e] !== void 0), Wt.isCapable = Qr.request !== void 0, Wt.isCapable === false ? Pw(() => Promise.reject("Not capable")) : (Object.assign(Wt, { request(e) {
  const t = e || document.documentElement, { activeEl: n } = Wt;
  return t === n ? Promise.resolve() : (n !== null && t.contains(n) === true ? Wt.exit() : Promise.resolve()).finally(() => _f(t, Qr.request));
}, exit() {
  return Wt.isActive === true ? _f(document, Qr.exit) : Promise.resolve();
}, toggle(e) {
  return Wt.isActive === true ? Wt.exit() : Wt.request(e);
} }), Qr.exit = ["exitFullscreen", "msExitFullscreen", "mozCancelFullScreen", "webkitExitFullscreen"].find((e) => document[e]), Wt.isActive = !!sg(), Wt.isActive === true && cg(), ["onfullscreenchange", "onmsfullscreenchange", "onwebkitfullscreenchange"].forEach((e) => {
  document[e] = Lw;
}));
var Bw = El({ appVisible: true }, { install({ $q: e }) {
  Dt(e, "appVisible", () => this.appVisible);
} });
{
  let e, t;
  if (typeof document.hidden < "u" ? (e = "hidden", t = "visibilitychange") : typeof document.msHidden < "u" ? (e = "msHidden", t = "msvisibilitychange") : typeof document.webkitHidden < "u" && (e = "webkitHidden", t = "webkitvisibilitychange"), t && typeof document[e] < "u") {
    const n = () => {
      Bw.appVisible = !document[e];
    };
    document.addEventListener(t, n, false);
  }
}
me({ name: "BottomSheetComponent", props: { ...lt, title: String, message: String, actions: Array, grid: Boolean, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), r = rt(e, n.$q), l = U(null);
  function a() {
    l.value.show();
  }
  function o() {
    l.value.hide();
  }
  function i(h) {
    t("ok", h), o();
  }
  function s() {
    t("hide");
  }
  function d() {
    return e.actions.map((h) => {
      const g = h.avatar || h.img;
      return h.label === void 0 ? f(Gl, { class: "col-all", dark: r.value }) : f("div", { class: ["q-bottom-sheet__item q-hoverable q-focusable cursor-pointer relative-position", h.class], style: h.style, tabindex: 0, role: "listitem", onClick() {
        i(h);
      }, onKeyup(_) {
        _.keyCode === 13 && i(h);
      } }, [f("div", { class: "q-focus-helper" }), h.icon ? f(tt, { name: h.icon, color: h.color }) : g ? f("img", { class: h.avatar ? "q-bottom-sheet__avatar" : "", src: g }) : f("div", { class: "q-bottom-sheet__empty-icon" }), f("div", h.label)]);
    });
  }
  function c() {
    return e.actions.map((h) => {
      const g = h.avatar || h.img;
      return h.label === void 0 ? f(Gl, { spaced: true, dark: r.value }) : f(Mr, { class: ["q-bottom-sheet__item", h.classes], style: h.style, tabindex: 0, clickable: true, dark: r.value, onClick() {
        i(h);
      } }, () => [f(bn, { avatar: true }, () => h.icon ? f(tt, { name: h.icon, color: h.color }) : g ? f("img", { class: h.avatar ? "q-bottom-sheet__avatar" : "", src: g }) : null), f(bn, () => h.label)]);
    });
  }
  function v() {
    const h = [];
    return e.title && h.push(f(zl, { class: "q-dialog__title" }, () => e.title)), e.message && h.push(f(zl, { class: "q-dialog__message" }, () => e.message)), h.push(e.grid === true ? f("div", { class: "row items-stretch justify-start", role: "list" }, d()) : f("div", { role: "list" }, c())), h;
  }
  function u() {
    return [f(Gm, { class: [`q-bottom-sheet q-bottom-sheet--${e.grid === true ? "grid" : "list"}` + (r.value === true ? " q-bottom-sheet--dark q-dark" : ""), e.cardClass], style: e.cardStyle }, v)];
  }
  return Object.assign(n, { show: a, hide: o }), () => f(wi, { ref: l, position: "bottom", onHide: s }, u);
} });
function dg(e, t) {
  for (const n in t) n !== "spinner" && Object(t[n]) === t[n] ? (e[n] = Object(e[n]) !== e[n] ? {} : { ...e[n] }, dg(e[n], t[n])) : e[n] = t[n];
}
function Fw(e, t, n) {
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
    let i, s = false;
    const d = U(null), c = Da(false, "dialog"), v = (y) => {
      var _a3;
      if (((_a3 = d.value) == null ? void 0 : _a3[y]) !== void 0) {
        d.value[y]();
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
    }, u = [], h = [], g = { onOk(y) {
      return u.push(y), g;
    }, onCancel(y) {
      return h.push(y), g;
    }, onDismiss(y) {
      return u.push(y), h.push(y), g;
    }, hide() {
      return v("hide"), g;
    }, update(y) {
      if (i !== null) {
        if (o === true) Object.assign(a, y);
        else {
          const { class: p, style: b, ...S } = y;
          p !== void 0 && (S.cardClass = p), b !== void 0 && (S.cardStyle = b), dg(a, S);
        }
        i.$forceUpdate();
      }
      return g;
    } }, _ = (y) => {
      s = true, u.forEach((p) => {
        p(y);
      });
    }, w = () => {
      k.unmount(c), Ds(c), k = null, i = null, s !== true && h.forEach((y) => {
        y();
      });
    };
    let k = mi({ name: "QGlobalDialog", setup: () => () => f(l, { ...a, ref: d, onOk: _, onHide: w, onVnodeMounted(...y) {
      typeof a.onVnodeMounted == "function" && a.onVnodeMounted(...y), We(() => v("show"));
    } }) }, n);
    return i = k.mount(c), g;
  };
}
function fg(e) {
  return encodeURIComponent(e);
}
function vg(e) {
  return decodeURIComponent(e);
}
function Ow(e) {
  return fg(e === Object(e) ? JSON.stringify(e) : "" + e);
}
function Vw(e) {
  if (e === "") return e;
  e.indexOf('"') === 0 && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), e = vg(e.replace(/\+/g, " "));
  try {
    const t = JSON.parse(e);
    (t === Object(t) || Array.isArray(t) === true) && (e = t);
  } catch {
  }
  return e;
}
function mg(e) {
  const t = /* @__PURE__ */ new Date();
  return t.setMilliseconds(t.getMilliseconds() + e), t.toUTCString();
}
function Dw(e) {
  let t = 0;
  const n = e.match(/(\d+)d/), r = e.match(/(\d+)h/), l = e.match(/(\d+)m/), a = e.match(/(\d+)s/);
  return n && (t += n[1] * 864e5), r && (t += r[1] * 36e5), l && (t += l[1] * 6e4), a && (t += a[1] * 1e3), t === 0 ? e : mg(t);
}
function hg(e, t, n = {}, r) {
  let l, a;
  n.expires !== void 0 && (Object.prototype.toString.call(n.expires) === "[object Date]" ? l = n.expires.toUTCString() : typeof n.expires == "string" ? l = Dw(n.expires) : (a = parseFloat(n.expires), l = isNaN(a) === false ? mg(a * 864e5) : n.expires));
  const o = `${fg(e)}=${Ow(t)}`, i = [o, l !== void 0 ? "; Expires=" + l : "", n.path ? "; Path=" + n.path : "", n.domain ? "; Domain=" + n.domain : "", n.sameSite ? "; SameSite=" + n.sameSite : "", n.httpOnly ? "; HttpOnly" : "", n.secure ? "; Secure" : "", n.other ? "; " + n.other : ""].join("");
  if (r) {
    r.req.qCookies ? r.req.qCookies.push(i) : r.req.qCookies = [i], r.res.setHeader("Set-Cookie", r.req.qCookies);
    let s = r.req.headers.cookie || "";
    if (l !== void 0 && a < 0) {
      const d = Go(e, r);
      d !== void 0 && (s = s.replace(`${e}=${d}; `, "").replace(`; ${e}=${d}`, "").replace(`${e}=${d}`, ""));
    } else s = s ? `${o}; ${s}` : i;
    r.req.headers.cookie = s;
  } else document.cookie = i;
}
function Go(e, t) {
  const n = t ? t.req.headers : document, r = n.cookie ? n.cookie.split("; ") : [], l = r.length;
  let a = e ? null : {}, o = 0, i, s, d;
  for (; o < l; o++) if (i = r[o].split("="), s = vg(i.shift()), d = i.join("="), !e) a[s] = d;
  else if (e === s) {
    a = Vw(d);
    break;
  }
  return a;
}
function Iw(e, t, n) {
  hg(e, "", { expires: -1, ...t }, n);
}
function zw(e, t) {
  return Go(e, t) !== null;
}
function gg(e) {
  return { get: (t) => Go(t, e), set: (t, n, r) => hg(t, n, r, e), has: (t) => zw(t, e), remove: (t, n) => Iw(t, n, e), getAll: () => Go(null, e) };
}
var rc = { install({ $q: e, ssrContext: t }) {
  e.cookies = this;
} };
__QUASAR_SSR__ && (rc.parseSSR = (e) => {
  if (e !== void 0) return gg(e);
});
Object.assign(rc, gg());
var Nw = rc, Hw = me({ name: "DialogPluginComponent", props: { ...lt, title: String, message: String, prompt: Object, options: Object, progress: [Boolean, Object], html: Boolean, ok: { type: [String, Object, Boolean], default: true }, cancel: [String, Object, Boolean], focus: { type: String, default: "ok", validator: (e) => ["ok", "cancel", "none"].includes(e) }, stackButtons: Boolean, color: String, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), { $q: r } = n, l = rt(e, r), a = U(null), o = U(e.prompt !== void 0 ? e.prompt.model : e.options !== void 0 ? e.options.model : void 0), i = m(() => "q-dialog-plugin" + (l.value === true ? " q-dialog-plugin--dark q-dark" : "") + (e.progress !== false ? " q-dialog-plugin--progress" : "")), s = m(() => e.color || (l.value === true ? "amber" : "primary")), d = m(() => e.progress === false ? null : Bt(e.progress) === true ? { component: e.progress.spinner || Sn, props: { color: e.progress.color || s.value } } : { component: Sn, props: { color: s.value } }), c = m(() => e.prompt !== void 0 || e.options !== void 0), v = m(() => {
    if (c.value !== true) return {};
    const { model: C, isValid: H, items: Q, ...K } = e.prompt !== void 0 ? e.prompt : e.options;
    return K;
  }), u = m(() => Bt(e.ok) === true || e.ok === true ? r.lang.label.ok : e.ok), h = m(() => Bt(e.cancel) === true || e.cancel === true ? r.lang.label.cancel : e.cancel), g = m(() => e.prompt !== void 0 ? e.prompt.isValid !== void 0 && e.prompt.isValid(o.value) !== true : e.options !== void 0 ? e.options.isValid !== void 0 && e.options.isValid(o.value) !== true : false), _ = m(() => ({ color: s.value, label: u.value, ripple: false, disable: g.value, ...Bt(e.ok) === true ? e.ok : { flat: true }, "data-autofocus": e.focus === "ok" && c.value !== true || void 0, onClick: p })), w = m(() => ({ color: s.value, label: h.value, ripple: false, ...Bt(e.cancel) === true ? e.cancel : { flat: true }, "data-autofocus": e.focus === "cancel" && c.value !== true || void 0, onClick: b }));
  he(() => e.prompt && e.prompt.model, P), he(() => e.options && e.options.model, P);
  function k() {
    a.value.show();
  }
  function y() {
    a.value.hide();
  }
  function p() {
    t("ok", Ze(o.value)), y();
  }
  function b() {
    y();
  }
  function S() {
    t("hide");
  }
  function P(C) {
    o.value = C;
  }
  function F(C) {
    g.value !== true && e.prompt.type !== "textarea" && wn(C, 13) === true && p();
  }
  function z(C, H) {
    return e.html === true ? f(zl, { class: C, innerHTML: H }) : f(zl, { class: C }, () => H);
  }
  function L() {
    return [f(Hh, { color: s.value, dense: true, autofocus: true, dark: l.value, ...v.value, modelValue: o.value, "onUpdate:modelValue": P, onKeyup: F })];
  }
  function B() {
    return [f(G1, { color: s.value, options: e.options.items, dark: l.value, ...v.value, modelValue: o.value, "onUpdate:modelValue": P })];
  }
  function D() {
    const C = [];
    return e.cancel && C.push(f(et, w.value)), e.ok && C.push(f(et, _.value)), f(Ey, { class: e.stackButtons === true ? "items-end" : "", vertical: e.stackButtons, align: "right" }, () => C);
  }
  function q() {
    const C = [];
    return e.title && C.push(z("q-dialog__title", e.title)), e.progress !== false && C.push(f(zl, { class: "q-dialog__progress" }, () => f(d.value.component, d.value.props))), e.message && C.push(z("q-dialog__message", e.message)), e.prompt !== void 0 ? C.push(f(zl, { class: "scroll q-dialog-plugin__form" }, L)) : e.options !== void 0 && C.push(f(Gl, { dark: l.value }), f(zl, { class: "scroll q-dialog-plugin__form" }, B), f(Gl, { dark: l.value })), (e.ok || e.cancel) && C.push(D()), C;
  }
  function R() {
    return [f(Gm, { class: [i.value, e.cardClass], style: e.cardStyle, dark: l.value }, q)];
  }
  return Object.assign(n, { show: k, hide: y }), () => f(wi, { ref: a, onHide: S }, R);
} }), jw = { install({ $q: e, parentApp: t }) {
  e.dialog = this.create = Fw(Hw, true, t);
} }, cr, mu, wf = 0, Fl = null, Nt = {}, Hl = {}, bg = { group: "__default_quasar_group__", delay: 0, message: false, html: false, spinnerSize: 80, spinnerColor: "", messageColor: "", backgroundColor: "", boxClass: "", spinner: Sn, customClass: "" }, pg = { ...bg };
function Uw(e) {
  if ((e == null ? void 0 : e.group) !== void 0 && Hl[e.group] !== void 0) return Object.assign(Hl[e.group], e);
  const t = Bt(e) === true && e.ignoreDefaults === true ? { ...bg, ...e } : { ...pg, ...e };
  return Hl[t.group] = t, t;
}
var kn = El({ isActive: false }, { show(e) {
  Nt = Uw(e);
  const { group: t } = Nt;
  return kn.isActive = true, cr !== void 0 ? (Nt.uid = wf, mu.$forceUpdate()) : (Nt.uid = ++wf, Fl !== null && clearTimeout(Fl), Fl = setTimeout(() => {
    Fl = null;
    const n = Da("q-loading");
    cr = mi({ name: "QLoading", setup() {
      ft(() => {
        es(true);
      });
      function r() {
        kn.isActive !== true && cr !== void 0 && (es(false), cr.unmount(n), Ds(n), cr = void 0, mu = void 0);
      }
      function l() {
        if (kn.isActive !== true) return null;
        const a = [f(Nt.spinner, { class: "q-loading__spinner", color: Nt.spinnerColor, size: Nt.spinnerSize })];
        return Nt.message && a.push(f("div", { class: "q-loading__message" + (Nt.messageColor ? ` text-${Nt.messageColor}` : ""), [Nt.html === true ? "innerHTML" : "textContent"]: Nt.message })), f("div", { class: "q-loading fullscreen flex flex-center z-max " + Nt.customClass.trim(), key: Nt.uid }, [f("div", { class: "q-loading__backdrop" + (Nt.backgroundColor ? ` bg-${Nt.backgroundColor}` : "") }), f("div", { class: "q-loading__box column items-center " + Nt.boxClass }, a)]);
      }
      return () => f(Vt, { name: "q-transition--fade", appear: true, onAfterLeave: r }, l);
    } }, kn.__parentApp), mu = cr.mount(n);
  }, Nt.delay)), (n) => {
    if (n === void 0 || Object(n) !== n) {
      kn.hide(t);
      return;
    }
    kn.show({ ...n, group: t });
  };
}, hide(e) {
  if (kn.isActive === true) {
    if (e === void 0) Hl = {};
    else {
      if (Hl[e] === void 0) return;
      {
        delete Hl[e];
        const t = Object.keys(Hl);
        if (t.length !== 0) {
          const n = t[t.length - 1];
          kn.show({ group: n });
          return;
        }
      }
    }
    Fl !== null && (clearTimeout(Fl), Fl = null), kn.isActive = false;
  }
}, setDefaults(e) {
  Bt(e) === true && Object.assign(pg, e);
}, install({ $q: e, parentApp: t }) {
  e.loading = this, kn.__parentApp = t, e.config.loading !== void 0 && this.setDefaults(e.config.loading);
} }), Qw = kn, uo = U(null), xf = El({ isActive: false }, { start: Ct, stop: Ct, increment: Ct, setDefaults: Ct, install({ $q: e, parentApp: t }) {
  if (e.loadingBar = this, this.__installed === true) {
    e.config.loadingBar !== void 0 && this.setDefaults(e.config.loadingBar);
    return;
  }
  const n = U(e.config.loadingBar !== void 0 ? { ...e.config.loadingBar } : {});
  function r() {
    xf.isActive = true;
  }
  function l() {
    xf.isActive = false;
  }
  const a = Da("q-loading-bar");
  mi({ name: "LoadingBar", devtools: { hide: true }, setup: () => () => f(zp, { ...n.value, onStart: r, onStop: l, ref: uo }) }, t).mount(a), Object.assign(this, { start(o) {
    uo.value.start(o);
  }, stop() {
    uo.value.stop();
  }, increment() {
    uo.value.increment.apply(null, arguments);
  }, setDefaults(o) {
    Bt(o) === true && Object.assign(n.value, o);
  } });
} }), Kw = 0, yo = {}, _o = {}, Tn = {}, yg = {}, Ww = /^\s*$/, _g = [], Yw = [void 0, null, true, false, ""], ac = ["top-left", "top-right", "bottom-left", "bottom-right", "top", "bottom", "left", "right", "center"], Xw = ["top-left", "top-right", "bottom-left", "bottom-right"], Jr = { positive: { icon: (e) => e.iconSet.type.positive, color: "positive" }, negative: { icon: (e) => e.iconSet.type.negative, color: "negative" }, warning: { icon: (e) => e.iconSet.type.warning, color: "warning", textColor: "dark" }, info: { icon: (e) => e.iconSet.type.info, color: "info" }, ongoing: { group: false, timeout: 0, spinner: true, color: "grey-8" } };
function wg(e, t, n) {
  var _a3;
  if (!e) return Kr("parameter required");
  let r;
  const l = { textColor: "white" };
  if (e.ignoreDefaults !== true && Object.assign(l, yo), Bt(e) === false && (l.type && Object.assign(l, Jr[l.type]), e = { message: e }), Object.assign(l, Jr[e.type || l.type], e), typeof l.icon == "function" && (l.icon = l.icon(t)), l.spinner ? (l.spinner === true && (l.spinner = Sn), l.spinner = ni(l.spinner)) : l.spinner = false, l.meta = { hasMedia: !!(l.spinner !== false || l.icon || l.avatar), hasText: Sf(l.message) || Sf(l.caption) }, l.position) {
    if (ac.includes(l.position) === false) return Kr("wrong position", e);
  } else l.position = "bottom";
  if (Yw.includes(l.timeout) === true) l.timeout = 5e3;
  else {
    const s = Number(l.timeout);
    if (isNaN(s) || s < 0) return Kr("wrong timeout", e);
    l.timeout = Number.isFinite(s) ? s : 0;
  }
  l.timeout === 0 ? l.progress = false : l.progress === true && (l.meta.progressClass = "q-notification__progress" + (l.progressClass ? ` ${l.progressClass}` : ""), l.meta.progressStyle = { animationDuration: `${l.timeout + 1e3}ms` });
  const a = (Array.isArray(e.actions) === true ? e.actions : []).concat(e.ignoreDefaults !== true && Array.isArray(yo.actions) === true ? yo.actions : []).concat(Array.isArray((_a3 = Jr[e.type]) == null ? void 0 : _a3.actions) === true ? Jr[e.type].actions : []), { closeBtn: o } = l;
  if (o && a.push({ label: typeof o == "string" ? o : t.lang.label.close }), l.actions = a.map(({ handler: s, noDismiss: d, ...c }) => ({ flat: true, ...c, onClick: typeof s == "function" ? () => {
    s(), d !== true && i();
  } : () => {
    i();
  } })), l.multiLine === void 0 && (l.multiLine = l.actions.length > 1), Object.assign(l.meta, { class: `q-notification row items-stretch q-notification--${l.multiLine === true ? "multi-line" : "standard"}` + (l.color !== void 0 ? ` bg-${l.color}` : "") + (l.textColor !== void 0 ? ` text-${l.textColor}` : "") + (l.classes !== void 0 ? ` ${l.classes}` : ""), wrapperClass: "q-notification__wrapper col relative-position border-radius-inherit " + (l.multiLine === true ? "column no-wrap justify-center" : "row items-center"), contentClass: "q-notification__content row items-center" + (l.multiLine === true ? "" : " col"), leftClass: l.meta.hasText === true ? "additional" : "single", attrs: { role: "alert", ...l.attrs } }), l.group === false ? (l.group = void 0, l.meta.group = void 0) : ((l.group === void 0 || l.group === true) && (l.group = [l.message, l.caption, l.multiline].concat(l.actions.map((s) => `${s.label}*${s.icon}`)).join("|")), l.meta.group = l.group + "|" + l.position), l.actions.length === 0 ? l.actions = void 0 : l.meta.actionsClass = "q-notification__actions row items-center " + (l.multiLine === true ? "justify-end" : "col-auto") + (l.meta.hasMedia === true ? " q-notification__actions--with-media" : ""), n !== void 0) {
    n.notif.meta.timer && (clearTimeout(n.notif.meta.timer), n.notif.meta.timer = void 0), l.meta.uid = n.notif.meta.uid;
    const s = Tn[l.position].value.indexOf(n.notif);
    Tn[l.position].value[s] = l;
  } else {
    const s = _o[l.meta.group];
    if (s === void 0) {
      if (l.meta.uid = Kw++, l.meta.badge = 1, ["left", "right", "center"].indexOf(l.position) !== -1) Tn[l.position].value.splice(Math.floor(Tn[l.position].value.length / 2), 0, l);
      else {
        const d = l.position.indexOf("top") !== -1 ? "unshift" : "push";
        Tn[l.position].value[d](l);
      }
      l.group !== void 0 && (_o[l.meta.group] = l);
    } else {
      if (s.meta.timer && (clearTimeout(s.meta.timer), s.meta.timer = void 0), l.badgePosition !== void 0) {
        if (Xw.includes(l.badgePosition) === false) return Kr("wrong badgePosition", e);
      } else l.badgePosition = `top-${l.position.indexOf("left") !== -1 ? "right" : "left"}`;
      l.meta.uid = s.meta.uid, l.meta.badge = s.meta.badge + 1, l.meta.badgeClass = `q-notification__badge q-notification__badge--${l.badgePosition}` + (l.badgeColor !== void 0 ? ` bg-${l.badgeColor}` : "") + (l.badgeTextColor !== void 0 ? ` text-${l.badgeTextColor}` : "") + (l.badgeClass ? ` ${l.badgeClass}` : "");
      const d = Tn[l.position].value.indexOf(s);
      Tn[l.position].value[d] = _o[l.meta.group] = l;
    }
  }
  const i = () => {
    Gw(l), r = void 0;
  };
  if (l.timeout > 0 && (l.meta.timer = setTimeout(() => {
    l.meta.timer = void 0, i();
  }, l.timeout + 1e3)), l.group !== void 0) return (s) => {
    s !== void 0 ? Kr("trying to update a grouped one which is forbidden", e) : i();
  };
  if (r = { dismiss: i, config: e, notif: l }, n !== void 0) {
    Object.assign(n, r);
    return;
  }
  return (s) => {
    if (r !== void 0) if (s === void 0) r.dismiss();
    else {
      const d = Object.assign({}, r.config, s, { group: false, position: l.position });
      wg(d, t, r);
    }
  };
}
function Gw(e) {
  e.meta.timer && (clearTimeout(e.meta.timer), e.meta.timer = void 0);
  const t = Tn[e.position].value.indexOf(e);
  if (t !== -1) {
    e.group !== void 0 && delete _o[e.meta.group];
    const n = _g["" + e.meta.uid];
    if (n) {
      const { width: r, height: l } = getComputedStyle(n);
      n.style.left = `${n.offsetLeft}px`, n.style.width = r, n.style.height = l;
    }
    Tn[e.position].value.splice(t, 1), typeof e.onDismiss == "function" && e.onDismiss();
  }
}
function Sf(e) {
  return e != null && Ww.test(e) !== true;
}
function Kr(e, t) {
  return console.error(`Notify: ${e}`, t), false;
}
function Zw() {
  return me({ name: "QNotifications", devtools: { hide: true }, setup() {
    return () => f("div", { class: "q-notifications" }, ac.map((e) => f(ip, { key: e, class: yg[e], tag: "div", name: `q-notification--${e}` }, () => Tn[e].value.map((t) => {
      const n = t.meta, r = [];
      if (n.hasMedia === true && (t.spinner !== false ? r.push(f(t.spinner, { class: "q-notification__spinner q-notification__spinner--" + n.leftClass, color: t.spinnerColor, size: t.spinnerSize })) : t.icon ? r.push(f(tt, { class: "q-notification__icon q-notification__icon--" + n.leftClass, name: t.icon, color: t.iconColor, size: t.iconSize, role: "img" })) : t.avatar && r.push(f(Qu, { class: "q-notification__avatar q-notification__avatar--" + n.leftClass }, () => f("img", { src: t.avatar, "aria-hidden": "true" })))), n.hasText === true) {
        let a;
        const o = { class: "q-notification__message col" };
        if (t.html === true) o.innerHTML = t.caption ? `<div>${t.message}</div><div class="q-notification__caption">${t.caption}</div>` : t.message;
        else {
          const i = [t.message];
          a = t.caption ? [f("div", i), f("div", { class: "q-notification__caption" }, [t.caption])] : i;
        }
        r.push(f("div", o, a));
      }
      const l = [f("div", { class: n.contentClass }, r)];
      return t.progress === true && l.push(f("div", { key: `${n.uid}|p|${n.badge}`, class: n.progressClass, style: n.progressStyle })), t.actions !== void 0 && l.push(f("div", { class: n.actionsClass }, t.actions.map((a) => f(et, a)))), n.badge > 1 && l.push(f("div", { key: `${n.uid}|${n.badge}`, class: t.meta.badgeClass, style: t.badgeStyle }, [n.badge])), f("div", { ref: (a) => {
        _g["" + n.uid] = a;
      }, key: n.uid, class: n.class, ...n.attrs }, [f("div", { class: n.wrapperClass }, l)]);
    }))));
  } });
}
var Jw = { setDefaults(e) {
  Bt(e) === true && Object.assign(yo, e);
}, registerType(e, t) {
  Bt(t) === true && (Jr[e] = t);
}, install({ $q: e, parentApp: t }) {
  if (e.notify = this.create = (n) => wg(n, e), e.notify.setDefaults = this.setDefaults, e.notify.registerType = this.registerType, e.config.notify !== void 0 && this.setDefaults(e.config.notify), this.__installed !== true) {
    ac.forEach((r) => {
      Tn[r] = U([]);
      const l = ["left", "center", "right"].includes(r) === true ? "center" : r.indexOf("top") !== -1 ? "top" : "bottom", a = r.indexOf("left") !== -1 ? "start" : r.indexOf("right") !== -1 ? "end" : "center", o = ["left", "right"].includes(r) ? `items-${r === "left" ? "start" : "end"} justify-center` : r === "center" ? "flex-center" : `items-${a}`;
      yg[r] = `q-notifications__list q-notifications__list--${l} fixed column no-wrap ${o}`;
    });
    const n = Da("q-notify");
    mi(Zw(), t).mount(n);
  }
} };
function ex(e) {
  return Hu(e) === true ? "__q_date|" + e.getTime() : Pp(e) === true ? "__q_expr|" + e.source : typeof e == "number" ? "__q_numb|" + e : typeof e == "boolean" ? "__q_bool|" + (e ? "1" : "0") : typeof e == "string" ? "__q_strn|" + e : typeof e == "function" ? "__q_strn|" + e.toString() : e === Object(e) ? "__q_objt|" + JSON.stringify(e) : e;
}
function tx(e) {
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
function xg() {
  const e = () => null;
  return { has: () => false, hasItem: () => false, getLength: () => 0, getItem: e, getIndex: e, getKey: e, getAll: () => {
  }, getAllKeys: () => [], set: Ct, setItem: Ct, remove: Ct, removeItem: Ct, clear: Ct, isEmpty: () => true };
}
function Sg(e) {
  const t = window[e + "Storage"], n = (o) => {
    const i = t.getItem(o);
    return i ? tx(i) : null;
  }, r = (o) => t.getItem(o) !== null, l = (o, i) => {
    t.setItem(o, ex(i));
  }, a = (o) => {
    t.removeItem(o);
  };
  return { has: r, hasItem: r, getLength: () => t.length, getItem: n, getIndex: (o) => o < t.length ? n(t.key(o)) : null, getKey: (o) => o < t.length ? t.key(o) : null, getAll: () => {
    let o;
    const i = {}, s = t.length;
    for (let d = 0; d < s; d++) o = t.key(d), i[o] = n(o);
    return i;
  }, getAllKeys: () => {
    const o = [], i = t.length;
    for (let s = 0; s < i; s++) o.push(t.key(s));
    return o;
  }, set: l, setItem: l, remove: a, removeItem: a, clear: () => {
    t.clear();
  }, isEmpty: () => t.length === 0 };
}
var Cg = ze.has.webStorage === false ? xg() : Sg("local"), nx = { install({ $q: e }) {
  e.localStorage = Cg;
} };
Object.assign(nx, Cg);
var kg = ze.has.webStorage === false ? xg() : Sg("session"), lx = { install({ $q: e }) {
  e.sessionStorage = kg;
} };
Object.assign(lx, kg);
var rx = ["ok", "hide"];
rg(rx);
function oc() {
  return Rt(bm);
}
var ax = { version: "2.18.1", install: Bp, lang: vi, iconSet: gm };
function ox(e, t) {
  const n = ks("router-view");
  return gn(), Il(n, { class: "view" });
}
const Tg = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, l] of t) n[r] = l;
  return n;
}, ix = {}, ux = Tg(ix, [["render", ox]]), sx = "M10,2C8.18,2 6.47,2.5 5,3.35C8,5.08 10,8.3 10,12C10,15.7 8,18.92 5,20.65C6.47,21.5 8.18,22 10,22A10,10 0 0,0 20,12A10,10 0 0,0 10,2Z", cx = "M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z", dx = /* @__PURE__ */ Tl({ __name: "Quasar", setup(e) {
  const t = oc();
  let n = U(false), r = U(false), l = U(true);
  const a = "production";
  return (o, i) => {
    const s = ks("router-view"), d = W0("ripple");
    return gn(), Il(Ve(j1), { view: "hHh LpR fFf" }, { default: qt(() => [Ke(Ve(A1), { class: "bg-primary text-white", elevated: "", id: "header" }, { default: qt(() => [Ke(Ve(rf), null, { default: qt(() => [Ke(Ve(et), { dense: "", flat: "", round: "", icon: "menu", onClick: i[0] || (i[0] = (c) => wt(n) ? n.value = !Ve(n) : n = !Ve(n)) }), Ke(Ve(af), null, { default: qt(() => [Ke(Ve(Qu), null, { default: qt(() => i[10] || (i[10] = [Ie("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" }, null, -1)])), _: 1 }), i[11] || (i[11] = bl("\xA0WebGL mtg"))]), _: 1 }), Ve(t).dark.isActive ? (gn(), Il(Ve(et), { key: 0, dense: "", flat: "", round: "", icon: Ve(cx), onClick: i[1] || (i[1] = (c) => Ve(t).dark.set(false)) }, null, 8, ["icon"])) : Lu("", true), Ve(t).dark.isActive ? Lu("", true) : (gn(), Il(Ve(et), { key: 1, dense: "", flat: "", round: "", icon: Ve(sx), onClick: i[2] || (i[2] = (c) => Ve(t).dark.set(true)) }, null, 8, ["icon"])), Ke(Ve(et), { dense: "", flat: "", round: "", icon: "menu", onClick: i[3] || (i[3] = (c) => wt(r) ? r.value = !Ve(r) : r = !Ve(r)) })]), _: 1 })]), _: 1 }), Ke(Ve(Vd), { modelValue: Ve(n), "onUpdate:modelValue": i[8] || (i[8] = (c) => wt(n) ? n.value = c : n = c), side: "left", bordered: "", mini: Ve(l), overlay: "" }, { default: qt(() => [Ke(Ve(n_), { class: "fit" }, { default: qt(() => [Ke(Ve(Uh), { class: "menu-list padding" }, { default: qt(() => [dn((gn(), Il(Ve(Mr), { clickable: "", onMouseover: i[4] || (i[4] = (c) => wt(l) ? l.value = false : l = false), onMouseout: i[5] || (i[5] = (c) => wt(l) ? l.value = true : l = true) }, { default: qt(() => [Ke(Ve(bn), { avatar: "" }, { default: qt(() => [Ke(Ve(tt), { name: "inbox" })]), _: 1 }), Ke(Ve(bn), null, { default: qt(() => i[12] || (i[12] = [bl("inbox")])), _: 1 })]), _: 1 })), [[d]]), dn((gn(), Il(Ve(Mr), { clickable: "", onMouseover: i[6] || (i[6] = (c) => wt(l) ? l.value = false : l = false), onMouseout: i[7] || (i[7] = (c) => wt(l) ? l.value = true : l = true) }, { default: qt(() => [Ke(Ve(bn), { avatar: "" }, { default: qt(() => [Ke(Ve(tt), { name: "login" })]), _: 1 }), Ke(Ve(bn), null, { default: qt(() => i[13] || (i[13] = [bl("login")])), _: 1 })]), _: 1 })), [[d]])]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["modelValue", "mini"]), Ke(Ve(Vd), { modelValue: Ve(r), "onUpdate:modelValue": i[9] || (i[9] = (c) => wt(r) ? r.value = c : r = c), side: "right", bordered: "", overlay: "" }, { default: qt(() => i[14] || (i[14] = [bl("right")])), _: 1 }, 8, ["modelValue"]), Ke(Ve(Z1), null, { default: qt(() => [Ke(s)]), _: 1 }), Ke(Ve(R1), { class: "bg-grey-8 text-orange", elevated: "", id: "footer" }, { default: qt(() => [Ke(Ve(rf), null, { default: qt(() => [Ke(Ve(af), { style: { "font-size": "1.0em" } }, { default: qt(() => [Ke(Ve(Qu), { class: "q-mr-sm", size: "sm" }, { default: qt(() => i[15] || (i[15] = [Ie("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" }, null, -1)])), _: 1 }), bl("\xA0vite / vue / quasar / wasm / webgl mtg \xA0mode: " + Yt(Ve(a)), 1)]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 });
  };
} });
/*!
* vue-router v4.5.0
* (c) 2024 Eduardo San Martin Morote
* @license MIT
*/
const fr = typeof document < "u";
function qg(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function fx(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && qg(e.default);
}
const ct = Object.assign;
function hu(e, t) {
  const n = {};
  for (const r in t) {
    const l = t[r];
    n[r] = Pn(l) ? l.map(e) : e(l);
  }
  return n;
}
const ha = () => {
}, Pn = Array.isArray, Eg = /#/g, vx = /&/g, mx = /\//g, hx = /=/g, gx = /\?/g, Mg = /\+/g, bx = /%5B/g, px = /%5D/g, Rg = /%5E/g, yx = /%60/g, Ag = /%7B/g, _x = /%7C/g, $g = /%7D/g, wx = /%20/g;
function ic(e) {
  return encodeURI("" + e).replace(_x, "|").replace(bx, "[").replace(px, "]");
}
function xx(e) {
  return ic(e).replace(Ag, "{").replace($g, "}").replace(Rg, "^");
}
function as(e) {
  return ic(e).replace(Mg, "%2B").replace(wx, "+").replace(Eg, "%23").replace(vx, "%26").replace(yx, "`").replace(Ag, "{").replace($g, "}").replace(Rg, "^");
}
function Sx(e) {
  return as(e).replace(hx, "%3D");
}
function Cx(e) {
  return ic(e).replace(Eg, "%23").replace(gx, "%3F");
}
function kx(e) {
  return e == null ? "" : Cx(e).replace(mx, "%2F");
}
function Aa(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const Tx = /\/$/, qx = (e) => e.replace(Tx, "");
function gu(e, t, n = "/") {
  let r, l = {}, a = "", o = "";
  const i = t.indexOf("#");
  let s = t.indexOf("?");
  return i < s && i >= 0 && (s = -1), s > -1 && (r = t.slice(0, s), a = t.slice(s + 1, i > -1 ? i : t.length), l = e(a)), i > -1 && (r = r || t.slice(0, i), o = t.slice(i, t.length)), r = Ax(r ?? t, n), { fullPath: r + (a && "?") + a + o, path: r, query: l, hash: Aa(o) };
}
function Ex(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Cf(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Mx(e, t, n) {
  const r = t.matched.length - 1, l = n.matched.length - 1;
  return r > -1 && r === l && Rr(t.matched[r], n.matched[l]) && Pg(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Rr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Pg(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (const n in e) if (!Rx(e[n], t[n])) return false;
  return true;
}
function Rx(e, t) {
  return Pn(e) ? kf(e, t) : Pn(t) ? kf(t, e) : e === t;
}
function kf(e, t) {
  return Pn(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function Ax(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"), r = e.split("/"), l = r[r.length - 1];
  (l === ".." || l === ".") && r.push("");
  let a = n.length - 1, o, i;
  for (o = 0; o < r.length; o++) if (i = r[o], i !== ".") if (i === "..") a > 1 && a--;
  else break;
  return n.slice(0, a).join("/") + "/" + r.slice(o).join("/");
}
const ul = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
var $a;
(function(e) {
  e.pop = "pop", e.push = "push";
})($a || ($a = {}));
var ga;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(ga || (ga = {}));
function $x(e) {
  if (!e) if (fr) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), qx(e);
}
const Px = /^[^#]+#/;
function Lx(e, t) {
  return e.replace(Px, "#") + t;
}
function Bx(e, t) {
  const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return { behavior: t.behavior, left: r.left - n.left - (t.left || 0), top: r.top - n.top - (t.top || 0) };
}
const Ti = () => ({ left: window.scrollX, top: window.scrollY });
function Fx(e) {
  let t;
  if ("el" in e) {
    const n = e.el, r = typeof n == "string" && n.startsWith("#"), l = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!l) return;
    t = Bx(l, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Tf(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const os = /* @__PURE__ */ new Map();
function Ox(e, t) {
  os.set(e, t);
}
function Vx(e) {
  const t = os.get(e);
  return os.delete(e), t;
}
let Dx = () => location.protocol + "//" + location.host;
function Lg(e, t) {
  const { pathname: n, search: r, hash: l } = t, a = e.indexOf("#");
  if (a > -1) {
    let i = l.includes(e.slice(a)) ? e.slice(a).length : 1, s = l.slice(i);
    return s[0] !== "/" && (s = "/" + s), Cf(s, "");
  }
  return Cf(n, e) + r + l;
}
function Ix(e, t, n, r) {
  let l = [], a = [], o = null;
  const i = ({ state: u }) => {
    const h = Lg(e, location), g = n.value, _ = t.value;
    let w = 0;
    if (u) {
      if (n.value = h, t.value = u, o && o === g) {
        o = null;
        return;
      }
      w = _ ? u.position - _.position : 0;
    } else r(h);
    l.forEach((k) => {
      k(n.value, g, { delta: w, type: $a.pop, direction: w ? w > 0 ? ga.forward : ga.back : ga.unknown });
    });
  };
  function s() {
    o = n.value;
  }
  function d(u) {
    l.push(u);
    const h = () => {
      const g = l.indexOf(u);
      g > -1 && l.splice(g, 1);
    };
    return a.push(h), h;
  }
  function c() {
    const { history: u } = window;
    u.state && u.replaceState(ct({}, u.state, { scroll: Ti() }), "");
  }
  function v() {
    for (const u of a) u();
    a = [], window.removeEventListener("popstate", i), window.removeEventListener("beforeunload", c);
  }
  return window.addEventListener("popstate", i), window.addEventListener("beforeunload", c, { passive: true }), { pauseListeners: s, listen: d, destroy: v };
}
function qf(e, t, n, r = false, l = false) {
  return { back: e, current: t, forward: n, replaced: r, position: window.history.length, scroll: l ? Ti() : null };
}
function zx(e) {
  const { history: t, location: n } = window, r = { value: Lg(e, n) }, l = { value: t.state };
  l.value || a(r.value, { back: null, current: r.value, forward: null, position: t.length - 1, replaced: true, scroll: null }, true);
  function a(s, d, c) {
    const v = e.indexOf("#"), u = v > -1 ? (n.host && document.querySelector("base") ? e : e.slice(v)) + s : Dx() + e + s;
    try {
      t[c ? "replaceState" : "pushState"](d, "", u), l.value = d;
    } catch (h) {
      console.error(h), n[c ? "replace" : "assign"](u);
    }
  }
  function o(s, d) {
    const c = ct({}, t.state, qf(l.value.back, s, l.value.forward, true), d, { position: l.value.position });
    a(s, c, true), r.value = s;
  }
  function i(s, d) {
    const c = ct({}, l.value, t.state, { forward: s, scroll: Ti() });
    a(c.current, c, true);
    const v = ct({}, qf(r.value, s, null), { position: c.position + 1 }, d);
    a(s, v, false), r.value = s;
  }
  return { location: r, state: l, push: i, replace: o };
}
function Nx(e) {
  e = $x(e);
  const t = zx(e), n = Ix(e, t.state, t.location, t.replace);
  function r(a, o = true) {
    o || n.pauseListeners(), history.go(a);
  }
  const l = ct({ location: "", base: e, go: r, createHref: Lx.bind(null, e) }, t, n);
  return Object.defineProperty(l, "location", { enumerable: true, get: () => t.location.value }), Object.defineProperty(l, "state", { enumerable: true, get: () => t.state.value }), l;
}
function Hx(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), Nx(e);
}
function jx(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Bg(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Fg = Symbol("");
var Ef;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Ef || (Ef = {}));
function Ar(e, t) {
  return ct(new Error(), { type: e, [Fg]: true }, t);
}
function Qn(e, t) {
  return e instanceof Error && Fg in e && (t == null || !!(e.type & t));
}
const Mf = "[^/]+?", Ux = { sensitive: false, strict: false, start: true, end: true }, Qx = /[.+*?^${}()[\]/\\]/g;
function Kx(e, t) {
  const n = ct({}, Ux, t), r = [];
  let l = n.start ? "^" : "";
  const a = [];
  for (const d of e) {
    const c = d.length ? [] : [90];
    n.strict && !d.length && (l += "/");
    for (let v = 0; v < d.length; v++) {
      const u = d[v];
      let h = 40 + (n.sensitive ? 0.25 : 0);
      if (u.type === 0) v || (l += "/"), l += u.value.replace(Qx, "\\$&"), h += 40;
      else if (u.type === 1) {
        const { value: g, repeatable: _, optional: w, regexp: k } = u;
        a.push({ name: g, repeatable: _, optional: w });
        const y = k || Mf;
        if (y !== Mf) {
          h += 10;
          try {
            new RegExp(`(${y})`);
          } catch (b) {
            throw new Error(`Invalid custom RegExp for param "${g}" (${y}): ` + b.message);
          }
        }
        let p = _ ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`;
        v || (p = w && d.length < 2 ? `(?:/${p})` : "/" + p), w && (p += "?"), l += p, h += 20, w && (h += -8), _ && (h += -20), y === ".*" && (h += -50);
      }
      c.push(h);
    }
    r.push(c);
  }
  if (n.strict && n.end) {
    const d = r.length - 1;
    r[d][r[d].length - 1] += 0.7000000000000001;
  }
  n.strict || (l += "/?"), n.end ? l += "$" : n.strict && !l.endsWith("/") && (l += "(?:/|$)");
  const o = new RegExp(l, n.sensitive ? "" : "i");
  function i(d) {
    const c = d.match(o), v = {};
    if (!c) return null;
    for (let u = 1; u < c.length; u++) {
      const h = c[u] || "", g = a[u - 1];
      v[g.name] = h && g.repeatable ? h.split("/") : h;
    }
    return v;
  }
  function s(d) {
    let c = "", v = false;
    for (const u of e) {
      (!v || !c.endsWith("/")) && (c += "/"), v = false;
      for (const h of u) if (h.type === 0) c += h.value;
      else if (h.type === 1) {
        const { value: g, repeatable: _, optional: w } = h, k = g in d ? d[g] : "";
        if (Pn(k) && !_) throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
        const y = Pn(k) ? k.join("/") : k;
        if (!y) if (w) u.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : v = true);
        else throw new Error(`Missing required param "${g}"`);
        c += y;
      }
    }
    return c || "/";
  }
  return { re: o, score: r, keys: a, parse: i, stringify: s };
}
function Wx(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function Og(e, t) {
  let n = 0;
  const r = e.score, l = t.score;
  for (; n < r.length && n < l.length; ) {
    const a = Wx(r[n], l[n]);
    if (a) return a;
    n++;
  }
  if (Math.abs(l.length - r.length) === 1) {
    if (Rf(r)) return 1;
    if (Rf(l)) return -1;
  }
  return l.length - r.length;
}
function Rf(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Yx = { type: 0, value: "" }, Xx = /[a-zA-Z0-9_]/;
function Gx(e) {
  if (!e) return [[]];
  if (e === "/") return [[Yx]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${n})/"${d}": ${h}`);
  }
  let n = 0, r = n;
  const l = [];
  let a;
  function o() {
    a && l.push(a), a = [];
  }
  let i = 0, s, d = "", c = "";
  function v() {
    d && (n === 0 ? a.push({ type: 0, value: d }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (s === "*" || s === "+") && t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`), a.push({ type: 1, value: d, regexp: c, repeatable: s === "*" || s === "+", optional: s === "*" || s === "?" })) : t("Invalid state to consume buffer"), d = "");
  }
  function u() {
    d += s;
  }
  for (; i < e.length; ) {
    if (s = e[i++], s === "\\" && n !== 2) {
      r = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        s === "/" ? (d && v(), o()) : s === ":" ? (v(), n = 1) : u();
        break;
      case 4:
        u(), n = r;
        break;
      case 1:
        s === "(" ? n = 2 : Xx.test(s) ? u() : (v(), n = 0, s !== "*" && s !== "?" && s !== "+" && i--);
        break;
      case 2:
        s === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + s : n = 3 : c += s;
        break;
      case 3:
        v(), n = 0, s !== "*" && s !== "?" && s !== "+" && i--, c = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), v(), o(), l;
}
function Zx(e, t, n) {
  const r = Kx(Gx(e.path), n), l = ct(r, { record: e, parent: t, children: [], alias: [] });
  return t && !l.record.aliasOf == !t.record.aliasOf && t.children.push(l), l;
}
function Jx(e, t) {
  const n = [], r = /* @__PURE__ */ new Map();
  t = Lf({ strict: false, end: true, sensitive: false }, t);
  function l(v) {
    return r.get(v);
  }
  function a(v, u, h) {
    const g = !h, _ = $f(v);
    _.aliasOf = h && h.record;
    const w = Lf(t, v), k = [_];
    if ("alias" in v) {
      const b = typeof v.alias == "string" ? [v.alias] : v.alias;
      for (const S of b) k.push($f(ct({}, _, { components: h ? h.record.components : _.components, path: S, aliasOf: h ? h.record : _ })));
    }
    let y, p;
    for (const b of k) {
      const { path: S } = b;
      if (u && S[0] !== "/") {
        const P = u.record.path, F = P[P.length - 1] === "/" ? "" : "/";
        b.path = u.record.path + (S && F + S);
      }
      if (y = Zx(b, u, w), h ? h.alias.push(y) : (p = p || y, p !== y && p.alias.push(y), g && v.name && !Pf(y) && o(v.name)), Vg(y) && s(y), _.children) {
        const P = _.children;
        for (let F = 0; F < P.length; F++) a(P[F], y, h && h.children[F]);
      }
      h = h || y;
    }
    return p ? () => {
      o(p);
    } : ha;
  }
  function o(v) {
    if (Bg(v)) {
      const u = r.get(v);
      u && (r.delete(v), n.splice(n.indexOf(u), 1), u.children.forEach(o), u.alias.forEach(o));
    } else {
      const u = n.indexOf(v);
      u > -1 && (n.splice(u, 1), v.record.name && r.delete(v.record.name), v.children.forEach(o), v.alias.forEach(o));
    }
  }
  function i() {
    return n;
  }
  function s(v) {
    const u = nS(v, n);
    n.splice(u, 0, v), v.record.name && !Pf(v) && r.set(v.record.name, v);
  }
  function d(v, u) {
    let h, g = {}, _, w;
    if ("name" in v && v.name) {
      if (h = r.get(v.name), !h) throw Ar(1, { location: v });
      w = h.record.name, g = ct(Af(u.params, h.keys.filter((p) => !p.optional).concat(h.parent ? h.parent.keys.filter((p) => p.optional) : []).map((p) => p.name)), v.params && Af(v.params, h.keys.map((p) => p.name))), _ = h.stringify(g);
    } else if (v.path != null) _ = v.path, h = n.find((p) => p.re.test(_)), h && (g = h.parse(_), w = h.record.name);
    else {
      if (h = u.name ? r.get(u.name) : n.find((p) => p.re.test(u.path)), !h) throw Ar(1, { location: v, currentLocation: u });
      w = h.record.name, g = ct({}, u.params, v.params), _ = h.stringify(g);
    }
    const k = [];
    let y = h;
    for (; y; ) k.unshift(y.record), y = y.parent;
    return { name: w, path: _, params: g, matched: k, meta: tS(k) };
  }
  e.forEach((v) => a(v));
  function c() {
    n.length = 0, r.clear();
  }
  return { addRoute: a, resolve: d, removeRoute: o, clearRoutes: c, getRoutes: i, getRecordMatcher: l };
}
function Af(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function $f(e) {
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: eS(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function eS(e) {
  const t = {}, n = e.props || false;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function Pf(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function tS(e) {
  return e.reduce((t, n) => ct(t, n.meta), {});
}
function Lf(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function nS(e, t) {
  let n = 0, r = t.length;
  for (; n !== r; ) {
    const a = n + r >> 1;
    Og(e, t[a]) < 0 ? r = a : n = a + 1;
  }
  const l = lS(e);
  return l && (r = t.lastIndexOf(l, r - 1)), r;
}
function lS(e) {
  let t = e;
  for (; t = t.parent; ) if (Vg(t) && Og(e, t) === 0) return t;
}
function Vg({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function rS(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let l = 0; l < r.length; ++l) {
    const a = r[l].replace(Mg, " "), o = a.indexOf("="), i = Aa(o < 0 ? a : a.slice(0, o)), s = o < 0 ? null : Aa(a.slice(o + 1));
    if (i in t) {
      let d = t[i];
      Pn(d) || (d = t[i] = [d]), d.push(s);
    } else t[i] = s;
  }
  return t;
}
function Bf(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (n = Sx(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Pn(r) ? r.map((a) => a && as(a)) : [r && as(r)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function aS(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = Pn(r) ? r.map((l) => l == null ? null : "" + l) : r == null ? r : "" + r);
  }
  return t;
}
const oS = Symbol(""), Ff = Symbol(""), uc = Symbol(""), Dg = Symbol(""), is = Symbol("");
function Wr() {
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
function hl(e, t, n, r, l, a = (o) => o()) {
  const o = r && (r.enterCallbacks[l] = r.enterCallbacks[l] || []);
  return () => new Promise((i, s) => {
    const d = (u) => {
      u === false ? s(Ar(4, { from: n, to: t })) : u instanceof Error ? s(u) : jx(u) ? s(Ar(2, { from: t, to: u })) : (o && r.enterCallbacks[l] === o && typeof u == "function" && o.push(u), i());
    }, c = a(() => e.call(r && r.instances[l], t, n, d));
    let v = Promise.resolve(c);
    e.length < 3 && (v = v.then(d)), v.catch((u) => s(u));
  });
}
function bu(e, t, n, r, l = (a) => a()) {
  const a = [];
  for (const o of e) for (const i in o.components) {
    let s = o.components[i];
    if (!(t !== "beforeRouteEnter" && !o.instances[i])) if (qg(s)) {
      const c = (s.__vccOpts || s)[t];
      c && a.push(hl(c, n, r, o, i, l));
    } else {
      let d = s();
      a.push(() => d.then((c) => {
        if (!c) throw new Error(`Couldn't resolve component "${i}" at "${o.path}"`);
        const v = fx(c) ? c.default : c;
        o.mods[i] = c, o.components[i] = v;
        const h = (v.__vccOpts || v)[t];
        return h && hl(h, n, r, o, i, l)();
      }));
    }
  }
  return a;
}
function Of(e) {
  const t = Rt(uc), n = Rt(Dg), r = m(() => {
    const s = Ve(e.to);
    return t.resolve(s);
  }), l = m(() => {
    const { matched: s } = r.value, { length: d } = s, c = s[d - 1], v = n.matched;
    if (!c || !v.length) return -1;
    const u = v.findIndex(Rr.bind(null, c));
    if (u > -1) return u;
    const h = Vf(s[d - 2]);
    return d > 1 && Vf(c) === h && v[v.length - 1].path !== h ? v.findIndex(Rr.bind(null, s[d - 2])) : u;
  }), a = m(() => l.value > -1 && dS(n.params, r.value.params)), o = m(() => l.value > -1 && l.value === n.matched.length - 1 && Pg(n.params, r.value.params));
  function i(s = {}) {
    if (cS(s)) {
      const d = t[Ve(e.replace) ? "replace" : "push"](Ve(e.to)).catch(ha);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => d), d;
    }
    return Promise.resolve();
  }
  return { route: r, href: m(() => r.value.href), isActive: a, isExactActive: o, navigate: i };
}
function iS(e) {
  return e.length === 1 ? e[0] : e;
}
const uS = /* @__PURE__ */ Tl({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" } }, useLink: Of, setup(e, { slots: t }) {
  const n = Vn(Of(e)), { options: r } = Rt(uc), l = m(() => ({ [Df(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive, [Df(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive }));
  return () => {
    const a = t.default && iS(t.default(n));
    return e.custom ? a : f("a", { "aria-current": n.isExactActive ? e.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: l.value }, a);
  };
} }), sS = uS;
function cS(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), true;
  }
}
function dS(e, t) {
  for (const n in t) {
    const r = t[n], l = e[n];
    if (typeof r == "string") {
      if (r !== l) return false;
    } else if (!Pn(l) || l.length !== r.length || r.some((a, o) => a !== l[o])) return false;
  }
  return true;
}
function Vf(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Df = (e, t, n) => e ?? t ?? n, fS = /* @__PURE__ */ Tl({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: n }) {
  const r = Rt(is), l = m(() => e.route || r.value), a = Rt(Ff, 0), o = m(() => {
    let d = Ve(a);
    const { matched: c } = l.value;
    let v;
    for (; (v = c[d]) && !v.components; ) d++;
    return d;
  }), i = m(() => l.value.matched[o.value]);
  pn(Ff, m(() => o.value + 1)), pn(oS, i), pn(is, l);
  const s = U();
  return he(() => [s.value, i.value, e.name], ([d, c, v], [u, h, g]) => {
    c && (c.instances[v] = d, h && h !== c && d && d === u && (c.leaveGuards.size || (c.leaveGuards = h.leaveGuards), c.updateGuards.size || (c.updateGuards = h.updateGuards))), d && c && (!h || !Rr(c, h) || !u) && (c.enterCallbacks[v] || []).forEach((_) => _(d));
  }, { flush: "post" }), () => {
    const d = l.value, c = e.name, v = i.value, u = v && v.components[c];
    if (!u) return If(n.default, { Component: u, route: d });
    const h = v.props[c], g = h ? h === true ? d.params : typeof h == "function" ? h(d) : h : null, w = f(u, ct({}, g, t, { onVnodeUnmounted: (k) => {
      k.component.isUnmounted && (v.instances[c] = null);
    }, ref: s }));
    return If(n.default, { Component: w, route: d }) || w;
  };
} });
function If(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const vS = fS;
function mS(e) {
  const t = Jx(e.routes, e), n = e.parseQuery || rS, r = e.stringifyQuery || Bf, l = e.history, a = Wr(), o = Wr(), i = Wr(), s = T0(ul);
  let d = ul;
  fr && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const c = hu.bind(null, (A) => "" + A), v = hu.bind(null, kx), u = hu.bind(null, Aa);
  function h(A, $) {
    let T, N;
    return Bg(A) ? (T = t.getRecordMatcher(A), N = $) : N = A, t.addRoute(N, T);
  }
  function g(A) {
    const $ = t.getRecordMatcher(A);
    $ && t.removeRoute($);
  }
  function _() {
    return t.getRoutes().map((A) => A.record);
  }
  function w(A) {
    return !!t.getRecordMatcher(A);
  }
  function k(A, $) {
    if ($ = ct({}, $ || s.value), typeof A == "string") {
      const I = gu(n, A, $.path), te = t.resolve({ path: I.path }, $), ne = l.createHref(I.fullPath);
      return ct(I, te, { params: u(te.params), hash: Aa(I.hash), redirectedFrom: void 0, href: ne });
    }
    let T;
    if (A.path != null) T = ct({}, A, { path: gu(n, A.path, $.path).path });
    else {
      const I = ct({}, A.params);
      for (const te in I) I[te] == null && delete I[te];
      T = ct({}, A, { params: v(I) }), $.params = v($.params);
    }
    const N = t.resolve(T, $), _e2 = A.hash || "";
    N.params = c(u(N.params));
    const x = Ex(r, ct({}, A, { hash: xx(_e2), path: N.path })), E = l.createHref(x);
    return ct({ fullPath: x, hash: _e2, query: r === Bf ? aS(A.query) : A.query || {} }, N, { redirectedFrom: void 0, href: E });
  }
  function y(A) {
    return typeof A == "string" ? gu(n, A, s.value.path) : ct({}, A);
  }
  function p(A, $) {
    if (d !== A) return Ar(8, { from: $, to: A });
  }
  function b(A) {
    return F(A);
  }
  function S(A) {
    return b(ct(y(A), { replace: true }));
  }
  function P(A) {
    const $ = A.matched[A.matched.length - 1];
    if ($ && $.redirect) {
      const { redirect: T } = $;
      let N = typeof T == "function" ? T(A) : T;
      return typeof N == "string" && (N = N.includes("?") || N.includes("#") ? N = y(N) : { path: N }, N.params = {}), ct({ query: A.query, hash: A.hash, params: N.path != null ? {} : A.params }, N);
    }
  }
  function F(A, $) {
    const T = d = k(A), N = s.value, _e2 = A.state, x = A.force, E = A.replace === true, I = P(T);
    if (I) return F(ct(y(I), { state: typeof I == "object" ? ct({}, _e2, I.state) : _e2, force: x, replace: E }), $ || T);
    const te = T;
    te.redirectedFrom = $;
    let ne;
    return !x && Mx(r, N, T) && (ne = Ar(16, { to: te, from: N }), Y(N, N, true, false)), (ne ? Promise.resolve(ne) : B(te, N)).catch((W) => Qn(W) ? Qn(W, 2) ? W : pe(W) : G(W, te, N)).then((W) => {
      if (W) {
        if (Qn(W, 2)) return F(ct({ replace: E }, y(W.to), { state: typeof W.to == "object" ? ct({}, _e2, W.to.state) : _e2, force: x }), $ || te);
      } else W = q(te, N, true, E, _e2);
      return D(te, N, W), W;
    });
  }
  function z(A, $) {
    const T = p(A, $);
    return T ? Promise.reject(T) : Promise.resolve();
  }
  function L(A) {
    const $ = ee.values().next().value;
    return $ && typeof $.runWithContext == "function" ? $.runWithContext(A) : A();
  }
  function B(A, $) {
    let T;
    const [N, _e2, x] = hS(A, $);
    T = bu(N.reverse(), "beforeRouteLeave", A, $);
    for (const I of N) I.leaveGuards.forEach((te) => {
      T.push(hl(te, A, $));
    });
    const E = z.bind(null, A, $);
    return T.push(E), O(T).then(() => {
      T = [];
      for (const I of a.list()) T.push(hl(I, A, $));
      return T.push(E), O(T);
    }).then(() => {
      T = bu(_e2, "beforeRouteUpdate", A, $);
      for (const I of _e2) I.updateGuards.forEach((te) => {
        T.push(hl(te, A, $));
      });
      return T.push(E), O(T);
    }).then(() => {
      T = [];
      for (const I of x) if (I.beforeEnter) if (Pn(I.beforeEnter)) for (const te of I.beforeEnter) T.push(hl(te, A, $));
      else T.push(hl(I.beforeEnter, A, $));
      return T.push(E), O(T);
    }).then(() => (A.matched.forEach((I) => I.enterCallbacks = {}), T = bu(x, "beforeRouteEnter", A, $, L), T.push(E), O(T))).then(() => {
      T = [];
      for (const I of o.list()) T.push(hl(I, A, $));
      return T.push(E), O(T);
    }).catch((I) => Qn(I, 8) ? I : Promise.reject(I));
  }
  function D(A, $, T) {
    i.list().forEach((N) => L(() => N(A, $, T)));
  }
  function q(A, $, T, N, _e2) {
    const x = p(A, $);
    if (x) return x;
    const E = $ === ul, I = fr ? history.state : {};
    T && (N || E ? l.replace(A.fullPath, ct({ scroll: E && I && I.scroll }, _e2)) : l.push(A.fullPath, _e2)), s.value = A, Y(A, $, T, E), pe();
  }
  let R;
  function C() {
    R || (R = l.listen((A, $, T) => {
      if (!ge.listening) return;
      const N = k(A), _e2 = P(N);
      if (_e2) {
        F(ct(_e2, { replace: true, force: true }), N).catch(ha);
        return;
      }
      d = N;
      const x = s.value;
      fr && Ox(Tf(x.fullPath, T.delta), Ti()), B(N, x).catch((E) => Qn(E, 12) ? E : Qn(E, 2) ? (F(ct(y(E.to), { force: true }), N).then((I) => {
        Qn(I, 20) && !T.delta && T.type === $a.pop && l.go(-1, false);
      }).catch(ha), Promise.reject()) : (T.delta && l.go(-T.delta, false), G(E, N, x))).then((E) => {
        E = E || q(N, x, false), E && (T.delta && !Qn(E, 8) ? l.go(-T.delta, false) : T.type === $a.pop && Qn(E, 20) && l.go(-1, false)), D(N, x, E);
      }).catch(ha);
    }));
  }
  let H = Wr(), Q = Wr(), K;
  function G(A, $, T) {
    pe(A);
    const N = Q.list();
    return N.length ? N.forEach((_e2) => _e2(A, $, T)) : console.error(A), Promise.reject(A);
  }
  function re() {
    return K && s.value !== ul ? Promise.resolve() : new Promise((A, $) => {
      H.add([A, $]);
    });
  }
  function pe(A) {
    return K || (K = !A, C(), H.list().forEach(([$, T]) => A ? T(A) : $()), H.reset()), A;
  }
  function Y(A, $, T, N) {
    const { scrollBehavior: _e2 } = e;
    if (!fr || !_e2) return Promise.resolve();
    const x = !T && Vx(Tf(A.fullPath, 0)) || (N || !T) && history.state && history.state.scroll || null;
    return We().then(() => _e2(A, $, x)).then((E) => E && Fx(E)).catch((E) => G(E, A, $));
  }
  const M = (A) => l.go(A);
  let J;
  const ee = /* @__PURE__ */ new Set(), ge = { currentRoute: s, listening: true, addRoute: h, removeRoute: g, clearRoutes: t.clearRoutes, hasRoute: w, getRoutes: _, resolve: k, options: e, push: b, replace: S, go: M, back: () => M(-1), forward: () => M(1), beforeEach: a.add, beforeResolve: o.add, afterEach: i.add, onError: Q.add, isReady: re, install(A) {
    const $ = this;
    A.component("RouterLink", sS), A.component("RouterView", vS), A.config.globalProperties.$router = $, Object.defineProperty(A.config.globalProperties, "$route", { enumerable: true, get: () => Ve(s) }), fr && !J && s.value === ul && (J = true, b(l.location).catch((_e2) => {
    }));
    const T = {};
    for (const _e2 in ul) Object.defineProperty(T, _e2, { get: () => s.value[_e2], enumerable: true });
    A.provide(uc, $), A.provide(Dg, _s(T)), A.provide(is, s);
    const N = A.unmount;
    ee.add(A), A.unmount = function() {
      ee.delete(A), ee.size < 1 && (d = ul, R && R(), R = null, s.value = ul, J = false, K = false), N();
    };
  } };
  function O(A) {
    return A.reduce(($, T) => $.then(() => L(T)), Promise.resolve());
  }
  return ge;
}
function hS(e, t) {
  const n = [], r = [], l = [], a = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < a; o++) {
    const i = t.matched[o];
    i && (e.matched.find((d) => Rr(d, i)) ? r.push(i) : n.push(i));
    const s = e.matched[o];
    s && (t.matched.find((d) => Rr(d, s)) || l.push(s));
  }
  return [n, r, l];
}
let at;
const Ig = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Ig.decode();
let ea = null;
function wo() {
  return (ea === null || ea.byteLength === 0) && (ea = new Uint8Array(at.memory.buffer)), ea;
}
function pu(e, t) {
  return e = e >>> 0, Ig.decode(wo().subarray(e, e + t));
}
function gS(e) {
  const t = at.__externref_table_alloc();
  return at.__wbindgen_export_2.set(t, e), t;
}
function bS(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    const r = gS(n);
    at.__wbindgen_exn_store(r);
  }
}
function pS(e, t) {
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
function Ol(e) {
  if (typeof e != "number") throw new Error(`expected a number argument, found ${typeof e}`);
}
let ta = null;
function yS() {
  return (ta === null || ta.byteLength === 0) && (ta = new Float32Array(at.memory.buffer)), ta;
}
function so(e, t) {
  return e = e >>> 0, yS().subarray(e / 4, e / 4 + t);
}
let na = null;
function _S() {
  return (na === null || na.byteLength === 0) && (na = new Uint32Array(at.memory.buffer)), na;
}
function yu(e, t) {
  return e = e >>> 0, _S().subarray(e / 4, e / 4 + t);
}
let us = 0;
const xo = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, wS = typeof xo.encodeInto == "function" ? function(e, t) {
  return xo.encodeInto(e, t);
} : function(e, t) {
  const n = xo.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function xS(e, t, n) {
  if (typeof e != "string") throw new Error(`expected a string argument, found ${typeof e}`);
  if (n === void 0) {
    const i = xo.encode(e), s = t(i.length, 1) >>> 0;
    return wo().subarray(s, s + i.length).set(i), us = i.length, s;
  }
  let r = e.length, l = t(r, 1) >>> 0;
  const a = wo();
  let o = 0;
  for (; o < r; o++) {
    const i = e.charCodeAt(o);
    if (i > 127) break;
    a[l + o] = i;
  }
  if (o !== r) {
    o !== 0 && (e = e.slice(o)), l = n(l, r, r = o + e.length * 3, 1) >>> 0;
    const i = wo().subarray(l + o, l + r), s = wS(e, i);
    if (s.read !== e.length) throw new Error("failed to pass whole string");
    o += s.written, l = n(l, r, o, 1) >>> 0;
  }
  return us = o, l;
}
function SS(e) {
  const t = at.__wbindgen_export_2.get(e);
  return at.__externref_table_dealloc(e), t;
}
function CS(e) {
  const t = xS(e, at.__wbindgen_malloc, at.__wbindgen_realloc), n = us, r = at.mtg(t, n);
  if (r[1]) throw SS(r[0]);
}
function kS() {
  const e = at.hex_mesh();
  return sc.__wrap(e);
}
const zf = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e) => at.__wbg_meshobj_free(e >>> 0, 1));
class sc {
  constructor() {
    throw new Error("cannot invoke `new` directly");
  }
  static __wrap(t) {
    t = t >>> 0;
    const n = Object.create(sc.prototype);
    return n.__wbg_ptr = t, zf.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, zf.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    at.__wbg_meshobj_free(t, 0);
  }
  get_pos() {
    if (this.__wbg_ptr == 0) throw new Error("Attempt to use a moved value");
    Ol(this.__wbg_ptr);
    const t = at.meshobj_get_pos(this.__wbg_ptr);
    var n = so(t[0], t[1]).slice();
    return at.__wbindgen_free(t[0], t[1] * 4, 4), n;
  }
  get_color() {
    if (this.__wbg_ptr == 0) throw new Error("Attempt to use a moved value");
    Ol(this.__wbg_ptr);
    const t = at.meshobj_get_color(this.__wbg_ptr);
    var n = so(t[0], t[1]).slice();
    return at.__wbindgen_free(t[0], t[1] * 4, 4), n;
  }
  get_tex() {
    if (this.__wbg_ptr == 0) throw new Error("Attempt to use a moved value");
    Ol(this.__wbg_ptr);
    const t = at.meshobj_get_tex(this.__wbg_ptr);
    var n = so(t[0], t[1]).slice();
    return at.__wbindgen_free(t[0], t[1] * 4, 4), n;
  }
  get_norm() {
    if (this.__wbg_ptr == 0) throw new Error("Attempt to use a moved value");
    Ol(this.__wbg_ptr);
    const t = at.meshobj_get_norm(this.__wbg_ptr);
    var n = so(t[0], t[1]).slice();
    return at.__wbindgen_free(t[0], t[1] * 4, 4), n;
  }
  get_ndx() {
    if (this.__wbg_ptr == 0) throw new Error("Attempt to use a moved value");
    Ol(this.__wbg_ptr);
    const t = at.meshobj_get_ndx(this.__wbg_ptr);
    var n = yu(t[0], t[1]).slice();
    return at.__wbindgen_free(t[0], t[1] * 4, 4), n;
  }
  get_offset() {
    if (this.__wbg_ptr == 0) throw new Error("Attempt to use a moved value");
    Ol(this.__wbg_ptr);
    const t = at.meshobj_get_offset(this.__wbg_ptr);
    var n = yu(t[0], t[1]).slice();
    return at.__wbindgen_free(t[0], t[1] * 4, 4), n;
  }
  get_len() {
    if (this.__wbg_ptr == 0) throw new Error("Attempt to use a moved value");
    Ol(this.__wbg_ptr);
    const t = at.meshobj_get_len(this.__wbg_ptr);
    var n = yu(t[0], t[1]).slice();
    return at.__wbindgen_free(t[0], t[1] * 4, 4), n;
  }
}
async function TS(e, t) {
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
function qS() {
  const e = {};
  return e.wbg = {}, e.wbg.__wbg_cb_d0b9dcdfbbb21123 = function() {
    return bS(function(t, n) {
      cb(pu(t, n));
    }, arguments);
  }, e.wbg.__wbg_log_6eff8ac810e5dae1 = function() {
    return pS(function(t, n) {
      log(pu(t, n));
    }, arguments);
  }, e.wbg.__wbindgen_init_externref_table = function() {
    const t = at.__wbindgen_export_2, n = t.grow(4);
    t.set(0, void 0), t.set(n + 0, void 0), t.set(n + 1, null), t.set(n + 2, true), t.set(n + 3, false);
  }, e.wbg.__wbindgen_throw = function(t, n) {
    throw new Error(pu(t, n));
  }, e;
}
function ES(e, t) {
  return at = e.exports, zg.__wbindgen_wasm_module = t, ta = null, na = null, ea = null, at.__wbindgen_start(), at;
}
async function zg(e) {
  if (at !== void 0) return at;
  typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("" + new URL("wasm_rust_mtg_bg-BvPRyJ6K.wasm", import.meta.url).href, import.meta.url));
  const t = qS();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: r } = await TS(await e, t);
  return ES(n, r);
}
const MS = /* @__PURE__ */ Tl({ __name: "HelloWorld", setup(e) {
  const t = () => {
    CS("test");
  };
  return (n, r) => {
    const l = ks("router-view");
    return gn(), Sa(ln, null, [Ke(Ve(et), { class: "q-ma-lg", color: "primary", onClick: t }, { default: qt(() => r[0] || (r[0] = [bl("test")])), _: 1 }), Ke(l)], 64);
  };
} }), RS = Tg(MS, [["__scopeId", "data-v-17fee452"]]);
var AS = 1e-6, Nf = typeof Float32Array < "u" ? Float32Array : Array;
Math.hypot || (Math.hypot = function() {
  for (var e = 0, t = arguments.length; t--; ) e += arguments[t] * arguments[t];
  return Math.sqrt(e);
});
function _u() {
  var e = new Nf(16);
  return Nf != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e;
}
function $S(e, t) {
  if (e === t) {
    var n = t[1], r = t[2], l = t[3], a = t[6], o = t[7], i = t[11];
    e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = n, e[6] = t[9], e[7] = t[13], e[8] = r, e[9] = a, e[11] = t[14], e[12] = l, e[13] = o, e[14] = i;
  } else e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15];
  return e;
}
function PS(e, t) {
  var n = t[0], r = t[1], l = t[2], a = t[3], o = t[4], i = t[5], s = t[6], d = t[7], c = t[8], v = t[9], u = t[10], h = t[11], g = t[12], _ = t[13], w = t[14], k = t[15], y = n * i - r * o, p = n * s - l * o, b = n * d - a * o, S = r * s - l * i, P = r * d - a * i, F = l * d - a * s, z = c * _ - v * g, L = c * w - u * g, B = c * k - h * g, D = v * w - u * _, q = v * k - h * _, R = u * k - h * w, C = y * R - p * q + b * D + S * B - P * L + F * z;
  return C ? (C = 1 / C, e[0] = (i * R - s * q + d * D) * C, e[1] = (l * q - r * R - a * D) * C, e[2] = (_ * F - w * P + k * S) * C, e[3] = (u * P - v * F - h * S) * C, e[4] = (s * B - o * R - d * L) * C, e[5] = (n * R - l * B + a * L) * C, e[6] = (w * b - g * F - k * p) * C, e[7] = (c * F - u * b + h * p) * C, e[8] = (o * q - i * B + d * z) * C, e[9] = (r * B - n * q - a * z) * C, e[10] = (g * P - _ * b + k * y) * C, e[11] = (v * b - c * P - h * y) * C, e[12] = (i * L - o * D - s * z) * C, e[13] = (n * D - r * L + l * z) * C, e[14] = (_ * p - g * S - w * y) * C, e[15] = (c * S - v * p + u * y) * C, e) : null;
}
function wu(e, t, n) {
  var r = n[0], l = n[1], a = n[2], o, i, s, d, c, v, u, h, g, _, w, k;
  return t === e ? (e[12] = t[0] * r + t[4] * l + t[8] * a + t[12], e[13] = t[1] * r + t[5] * l + t[9] * a + t[13], e[14] = t[2] * r + t[6] * l + t[10] * a + t[14], e[15] = t[3] * r + t[7] * l + t[11] * a + t[15]) : (o = t[0], i = t[1], s = t[2], d = t[3], c = t[4], v = t[5], u = t[6], h = t[7], g = t[8], _ = t[9], w = t[10], k = t[11], e[0] = o, e[1] = i, e[2] = s, e[3] = d, e[4] = c, e[5] = v, e[6] = u, e[7] = h, e[8] = g, e[9] = _, e[10] = w, e[11] = k, e[12] = o * r + c * l + g * a + t[12], e[13] = i * r + v * l + _ * a + t[13], e[14] = s * r + u * l + w * a + t[14], e[15] = d * r + h * l + k * a + t[15]), e;
}
function xu(e, t, n, r) {
  var l = r[0], a = r[1], o = r[2], i = Math.hypot(l, a, o), s, d, c, v, u, h, g, _, w, k, y, p, b, S, P, F, z, L, B, D, q, R, C, H;
  return i < AS ? null : (i = 1 / i, l *= i, a *= i, o *= i, s = Math.sin(n), d = Math.cos(n), c = 1 - d, v = t[0], u = t[1], h = t[2], g = t[3], _ = t[4], w = t[5], k = t[6], y = t[7], p = t[8], b = t[9], S = t[10], P = t[11], F = l * l * c + d, z = a * l * c + o * s, L = o * l * c - a * s, B = l * a * c - o * s, D = a * a * c + d, q = o * a * c + l * s, R = l * o * c + a * s, C = a * o * c - l * s, H = o * o * c + d, e[0] = v * F + _ * z + p * L, e[1] = u * F + w * z + b * L, e[2] = h * F + k * z + S * L, e[3] = g * F + y * z + P * L, e[4] = v * B + _ * D + p * q, e[5] = u * B + w * D + b * q, e[6] = h * B + k * D + S * q, e[7] = g * B + y * D + P * q, e[8] = v * R + _ * C + p * H, e[9] = u * R + w * C + b * H, e[10] = h * R + k * C + S * H, e[11] = g * R + y * C + P * H, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e);
}
function LS(e, t, n, r, l) {
  var a = 1 / Math.tan(t / 2), o;
  return e[0] = a / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, l != null && l !== 1 / 0 ? (o = 1 / (r - l), e[10] = (l + r) * o, e[14] = 2 * l * r * o) : (e[10] = -1, e[14] = -2 * r), e;
}
var BS = LS;
function vr(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === true;
}
function ba(e) {
  return function t(n) {
    return arguments.length === 0 || vr(n) ? t : e.apply(this, arguments);
  };
}
function FS(e) {
  return function t(n, r) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return vr(n) ? t : ba(function(l) {
          return e(n, l);
        });
      default:
        return vr(n) && vr(r) ? t : vr(n) ? ba(function(l) {
          return e(l, r);
        }) : vr(r) ? ba(function(l) {
          return e(n, l);
        }) : e(n, r);
    }
  };
}
const OS = Array.isArray || function(t) {
  return t != null && t.length >= 0 && Object.prototype.toString.call(t) === "[object Array]";
};
var VS = ba(function(t) {
  return t === null ? "Null" : t === void 0 ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1);
});
function DS(e) {
  return new RegExp(e.source, e.flags ? e.flags : (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.sticky ? "y" : "") + (e.unicode ? "u" : "") + (e.dotAll ? "s" : ""));
}
function Ng(e, t, n) {
  if (n || (n = new zS()), IS(e)) return e;
  var r = function(a) {
    var o = n.get(e);
    if (o) return o;
    n.set(e, a);
    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (a[i] = Ng(e[i], true, n));
    return a;
  };
  switch (VS(e)) {
    case "Object":
      return r(Object.create(Object.getPrototypeOf(e)));
    case "Array":
      return r(Array(e.length));
    case "Date":
      return new Date(e.valueOf());
    case "RegExp":
      return DS(e);
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
function IS(e) {
  var t = typeof e;
  return e == null || t != "object" && t != "function";
}
var zS = function() {
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
}(), co = ba(function(t) {
  return t != null && typeof t.clone == "function" ? t.clone() : Ng(t);
});
function NS(e, t) {
  return function() {
    var n = arguments.length;
    if (n === 0) return t();
    var r = arguments[n - 1];
    return OS(r) || typeof r[e] != "function" ? t.apply(this, arguments) : r[e].apply(r, Array.prototype.slice.call(arguments, 0, n - 1));
  };
}
var Su = FS(NS("forEach", function(t, n) {
  for (var r = n.length, l = 0; l < r; ) t(n[l]), l += 1;
  return n;
}));
function sl(e, t, n, r) {
  e /= 360, t /= 100, n /= 100;
  let l = (1 - Math.abs(2 * n - 1)) * t, a = l * (1 - Math.abs(e * 6 % 2 - 1)), o = n - l / 2, i, s, d;
  0 <= e && e < 1 / 6 ? (i = l, s = a, d = 0) : 1 / 6 <= e && e < 2 / 6 ? (i = a, s = l, d = 0) : 2 / 6 <= e && e < 3 / 6 ? (i = 0, s = l, d = a) : 3 / 6 <= e && e < 4 / 6 ? (i = 0, s = a, d = l) : 4 / 6 <= e && e < 5 / 6 ? (i = a, s = 0, d = l) : 5 / 6 <= e && e < 1 && (i = l, s = 0, d = a);
  let c = i + o, v = s + o, u = d + o;
  return [c, v, u, r];
}
const Hg = { zero: [{ pos: [0, 0], color: [0.35, 0.35, 0.35, 1], tex: "home", hover: 0, hot: 1, action: { kind: "home" }, no_fade: true, disb: true }, { pos: [0, -1], color: sl(30, 100, 50, 1), tex: "game", hover: 0, hot: 2, action: { kind: "show", page: "page beta" }, hint: "hint for beta" }, { pos: [0, 1], color: sl(90, 100, 50, 1), tex: "numbers", hover: 0, hot: 3, action: { kind: "show", page: "page gamma" }, hint: "hint for gamma" }, { pos: [1, -0.5], color: sl(150, 100, 50, 1), tex: "quote", hover: 0, hot: 4, action: { kind: "sub", hexes: "s1" }, hint: "call submenu" }, { pos: [-1, 0.5], color: sl(210, 100, 50, 1), tex: "cards", hover: 0, hot: 5, action: { kind: "sub", hexes: "s1" }, hint: "call submenu" }], s1: [{ pos: [0, 0], color: [0, 1, 0, 1], tex: "home", hover: 0, hot: 1, no_fade: true, action: { kind: "home" }, hint: "go home" }, { pos: [0, 1], color: sl(0, 100, 50, 1), tex: "italic", hover: 0, hot: 2, action: { kind: "show", page: "one" }, hint: "hint for one" }, { pos: [0, -1], color: sl(180, 100, 50, 1), tex: "happy", hover: 0, hot: 3, action: { kind: "sub", hexes: "s2" }, hint: "launch sub-sub menu" }], s2: [{ pos: [0, 0], color: sl(90, 100, 50, 1), tex: "home", hover: 0, hot: 1, no_fade: true, action: { kind: "sub", hexes: "s1" }, hint: "go home" }, { pos: [-1, 0.5], color: sl(270, 100, 50, 1), tex: "one", hover: 0, hot: 2, action: { kind: "show", page: "gamma" }, hint: "hint for gamma" }, { pos: [1, -0.5], color: [1, 1, 1, 1], tex: "two", hover: 0, hot: 3, action: { kind: "show", page: "delta" }, hint: "hint for delta" }] }, So = Hg.zero;
class HS {
  constructor(t, n) {
    __privateAdd(this, _HS_instances);
    __privateAdd(this, _n2, co(So));
    __privateAdd(this, _a2, null);
    __privateAdd(this, _e, 1);
    __privateAdd(this, _l2, co(So));
    __privateAdd(this, _t, "in");
    __privateAdd(this, _o2);
    __privateAdd(this, _r2);
    __privateSet(this, _o2, t), __privateSet(this, _r2, n);
  }
  draw(t) {
    Su((n) => t(n.pos, n.color, n.tex, n.hot, n.no_fade ? 0 : __privateGet(this, _e), n.hover))(__privateGet(this, _n2));
  }
  step(t) {
    if (__privateGet(this, _t) == "in") __privateGet(this, _e) > 0 && (__privateSet(this, _e, __privateGet(this, _e) - t / 750), __privateSet(this, _e, Math.max(__privateGet(this, _e), 0))), __privateGet(this, _e) == 0 && __privateSet(this, _t, "idle");
    else if (__privateGet(this, _t) == "out") __privateGet(this, _e) < 1 && (__privateSet(this, _e, __privateGet(this, _e) + t / 750), __privateSet(this, _e, Math.min(__privateGet(this, _e), 1))), __privateGet(this, _e) == 1 && (__privateSet(this, _n2, __privateGet(this, _l2)), __privateSet(this, _t, "in"));
    else for (const n of __privateGet(this, _n2)) n.hot == __privateGet(this, _a2) && !n.disb ? n.hover < 1 ? n.hover += 0.1 * t / 30 : n.hover = Math.min(n.hover, 1) : n.hover > 0 ? n.hover -= 0.1 * t / 30 : n.hover = Math.max(n.hover, 0);
  }
  hover(t) {
    __privateSet(this, _a2, t), t == 0 ? __privateGet(this, _r2).call(this, null) : Su((n) => {
      n.hot == t && __privateGet(this, _r2).call(this, n.hint || null);
    })(__privateGet(this, _n2));
  }
  activate(t) {
    __privateGet(this, _t) == "idle" && Su((n) => {
      n.hot == t && __privateMethod(this, _HS_instances, i_fn).call(this, n);
    })(__privateGet(this, _n2));
  }
}
_n2 = new WeakMap();
_a2 = new WeakMap();
_e = new WeakMap();
_l2 = new WeakMap();
_t = new WeakMap();
_o2 = new WeakMap();
_r2 = new WeakMap();
_HS_instances = new WeakSet();
i_fn = function(t) {
  if (!t.disb && t.action) switch (t.action.kind) {
    case "show":
      __privateGet(this, _o2).call(this, t.action.page);
      break;
    case "home":
      __privateSet(this, _l2, co(So)), __privateSet(this, _t, "out");
      break;
    case "sub":
      __privateSet(this, _l2, co(Hg[t.action.hexes])), __privateSet(this, _t, "out");
      break;
  }
};
console.log(So);
const jS = ["width", "height"], US = { key: 0, class: "q-mb-xl", style: { clear: "both", height: "100%" } }, QS = { class: "insp q-mt-md" }, jg = /* @__PURE__ */ Tl({ __name: "WebGLMenu", props: { width: {}, height: {} }, emits: ["hover", "activate", "updateTime", "fps"], setup(e, { emit: t }) {
  oc();
  const n = t, r = U(), l = e, a = U(false);
  let o = 0, i = Date.now();
  const s = U(false);
  let d = [0.1, 0.2, 0.5, 1, 2, 5, 10], c = 3;
  const v = U(d[c]);
  let u = null;
  const h = { front_0: null, front_1: null, front_2: null, front_3: null, game: null, home: null, numbers: null, quote: null, cards: null, happy: null, italic: null, one: null, two: null, three: null, body: null };
  let g = null;
  const _ = new HS(($) => n("activate", $), ($) => n("hover", $)), w = U([0, 0]), k = U(""), y = U(0), p = U(0), b = U(null), S = U(1), P = U(-1), F = () => {
    if (u === null) throw new Error("initBufs no WebGL context");
    if (g === null) throw new Error("initBufs no prog");
    const $ = kS(), T = (_e2) => {
      const x = u.createBuffer();
      return u.bindBuffer(u.ARRAY_BUFFER, x), u.bufferData(u.ARRAY_BUFFER, _e2, u.STATIC_DRAW), u.bindBuffer(u.ARRAY_BUFFER, null), x;
    }, N = u.createBuffer();
    u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, N), u.bufferData(u.ELEMENT_ARRAY_BUFFER, $.get_ndx(), u.STATIC_DRAW), console.log("faces per object", $.get_ndx().length), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, null), g.model = { pos: T($.get_pos()), color: T($.get_color()), tex: T($.get_tex()), norm: T($.get_norm()), index: N, offset: $.get_offset(), len: $.get_len() }, $.free();
  }, z = () => {
    if (u === null) throw new Error("initCopyBuf no ctx");
    const $ = u.createBuffer();
    return u.bindBuffer(u.ARRAY_BUFFER, $), u.bufferData(u.ARRAY_BUFFER, new Float32Array([-1, -1, 0.1, 1, -1, -0.1, 1, 1, 0.1, -1, 1, -0.1]), u.STATIC_DRAW), $;
  }, L = ($, T) => {
    const N = _u();
    return wu(N, N, [0, 0, -6]), xu(N, N, 1.3 * Math.sin(T) * 3.141 / 6 / 3, [0, 1, 0]), xu(N, N, 1.2 * Math.sin(T * 1.15 + 1) * 3.141 / 4 / 3, [1, 0, 0]), xu(N, N, 1.1 * Math.sin(T * 1.33 + 2) * 3.141 / 5 / 3, [0, 0, 1]), wu(N, N, [$[0], $[1], $[2]]), N;
  }, B = ($) => {
    u === null || $.model === null || (u.uniform1i($.unif.sampler, 1), u.uniform1i($.unif.mode_int, 0), u.drawElements(u.TRIANGLES, $.model.len[1], u.UNSIGNED_INT, 4 * $.model.offset[1]), u.uniform1i($.unif.sampler, 0), u.uniform1i($.unif.mode_int, 1), u.drawElements(u.TRIANGLES, $.model.len[0], u.UNSIGNED_INT, $.model.offset[0]));
  }, D = ($, T) => {
    if (u === null || r.value === void 0) throw new Error("no WebGL context");
    if ($.model === null) return;
    u.viewport(0, 0, l.width, l.height), u.enable(u.BLEND), u.blendFunc(u.SRC_ALPHA, u.ONE_MINUS_SRC_ALPHA), u.enable(u.DEPTH_TEST), u.depthFunc(u.LEQUAL), u.bindRenderbuffer(u.RENDERBUFFER, null), u.bindFramebuffer(u.FRAMEBUFFER, null), u.bindTexture(u.TEXTURE_2D, $.bufs.double), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, u.LINEAR), u.bindRenderbuffer(u.RENDERBUFFER, $.bufs.depth), u.renderbufferStorage(u.RENDERBUFFER, u.DEPTH_COMPONENT16, l.width, l.height), u.bindFramebuffer(u.FRAMEBUFFER, $.bufs.frame), u.framebufferRenderbuffer(u.FRAMEBUFFER, u.DEPTH_ATTACHMENT, u.RENDERBUFFER, $.bufs.depth), u.texImage2D(u.TEXTURE_2D, 0, u.RGBA, l.width, l.height, 0, u.RGBA, u.UNSIGNED_BYTE, null), u.framebufferTexture2D(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, $.bufs.double, 0), u.bindFramebuffer(u.FRAMEBUFFER, $.bufs.frame), u.framebufferTexture2D(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, $.bufs.double, 0), u.framebufferRenderbuffer(u.FRAMEBUFFER, u.DEPTH_ATTACHMENT, u.RENDERBUFFER, $.bufs.depth), u.clear(u.COLOR_BUFFER_BIT | u.DEPTH_BUFFER_BIT);
    const N = 45 * Math.PI / 180, _e2 = l.width / l.height, x = 0.1, E = 100, I = _u();
    BS(I, N, _e2, x, E);
    const te = T;
    wu(I, I, [Math.sin(te * 0.3) * 1, Math.cos(te * 0.4) * 1, Math.cos(0.6 * te) * 1]), u.useProgram($.prog_draw), q($, false), R($), C($), H($), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, $.model.index), u.uniform1f($.unif.time, T), u.uniform2f($.unif.viewport, l.width, l.height), u.uniformMatrix4fv($.unif.proj, false, I), u.activeTexture(u.TEXTURE0 + 1), u.bindTexture(u.TEXTURE_2D, h.body), u.activeTexture(u.TEXTURE0);
    const ne = (de, fe, se, le, j, oe) => {
      if (u === null) return;
      const we = [de[0] * 2, de[1] * 2.2, oe * 0.5 + Math.pow(j, 1.5) * 5], ke = L(we, T);
      switch (u.uniformMatrix4fv($.unif.model, false, ke), u.uniform1f($.unif.hover, oe), u.uniform1f($.unif.alpha, Math.pow(1 - j, 0.1)), u.activeTexture(u.TEXTURE0), se) {
        case "clock":
          u.bindTexture(u.TEXTURE_2D, h.front_1);
          break;
        case "tv":
          u.bindTexture(u.TEXTURE_2D, h.front_2);
          break;
        case "phone":
          u.bindTexture(u.TEXTURE_2D, h.front_3);
          break;
        default:
          const qe = h[se];
          qe != null ? u.bindTexture(u.TEXTURE_2D, qe) : u.bindTexture(u.TEXTURE_2D, h.front_0);
          break;
      }
      u.activeTexture(u.TEXTURE0);
      const Se = _u();
      PS(Se, ke), $S(Se, Se), u.uniformMatrix4fv($.unif.normal, false, Se), u.uniform4fv($.unif.front_color, fe), B($);
    };
    _.draw(ne), u.framebufferTexture2D(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, null, 0), u.framebufferRenderbuffer(u.FRAMEBUFFER, u.DEPTH_ATTACHMENT, u.RENDERBUFFER, null), u.flush(), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, null), u.disableVertexAttribArray($.attr.pos_model), u.bindFramebuffer(u.FRAMEBUFFER, null), u.bindRenderbuffer(u.RENDERBUFFER, null), u.disable(u.BLEND), u.useProgram($.prog_copy), u.disable(u.DEPTH_TEST), u.uniform1i($.unif.copy_tex, 0), u.bindTexture(u.TEXTURE_2D, $.bufs.double), u.bindBuffer(u.ARRAY_BUFFER, $.bufs.copy_pos), b.value != null ? (u.uniform2fv($.unif.ripple_pos, b.value), u.uniform1f($.unif.ripple_time, S.value), u.uniform1f($.unif.aspect, l.width / l.height)) : u.uniform1f($.unif.ripple_time, 1), u.vertexAttribPointer($.attr.pos_copy, 3, u.FLOAT, false, 0, 0), u.enableVertexAttribArray($.attr.pos_copy), u.drawArrays(u.TRIANGLE_FAN, 0, 4), u.disableVertexAttribArray($.attr.pos_copy), u.useProgram($.prog_pick), u.enable(u.DEPTH_TEST), u.bindTexture(u.TEXTURE_2D, $.pick.tex), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, u.NEAREST), u.bindRenderbuffer(u.RENDERBUFFER, $.pick.rb), u.renderbufferStorage(u.RENDERBUFFER, u.DEPTH_COMPONENT16, l.width, l.height), u.bindFramebuffer(u.FRAMEBUFFER, $.pick.fb), u.framebufferRenderbuffer(u.FRAMEBUFFER, u.DEPTH_ATTACHMENT, u.RENDERBUFFER, $.pick.rb), u.texImage2D(u.TEXTURE_2D, 0, u.RGBA, l.width, l.height, 0, u.RGBA, u.UNSIGNED_BYTE, null), u.framebufferTexture2D(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, $.pick.tex, 0), u.uniformMatrix4fv($.unif.proj_pick, false, I), u.clear(u.COLOR_BUFFER_BIT | u.DEPTH_BUFFER_BIT), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, $.model.index), u.enableVertexAttribArray($.attr.pos_pick), q($, true);
    const W = (de, fe, se, le, j, oe) => {
      if (u === null || $.model === null) return;
      const we = [de[0] * 2, de[1] * 2.2, oe * 0.5 + 10 * j];
      L(we, T), u.uniformMatrix4fv($.unif.model_pick, false, L(we, T)), u.uniform4f($.unif.id_pick, le / 255, 0, 0, 0), u.drawElements(u.TRIANGLES, $.model.len[0], u.UNSIGNED_INT, $.model.offset[0]);
    };
    _.draw(W), u.flush(), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, null), u.disableVertexAttribArray($.attr.pos_pick);
    let ue = new Uint8Array(4);
    u.readPixels(w.value[0], l.height - w.value[1], 1, 1, u.RGBA, u.UNSIGNED_BYTE, ue), ue.length && (k.value = ue.toString(), _.hover(ue[0]), y.value = ue[0]);
  }, q = ($, T) => {
    if (u === null) throw new Error("setPos - no ctx");
    if ($.model === null) throw new Error("setPos - no buf");
    u.bindBuffer(u.ARRAY_BUFFER, $.model.pos), u.vertexAttribPointer(T ? $.attr.pos_pick : $.attr.pos_model, 3, u.FLOAT, false, 0, 0), u.enableVertexAttribArray(T ? $.attr.pos_pick : $.attr.pos_model);
  }, R = ($) => {
    if (u === null) throw new Error("setColor - no ctx");
    if ($.model === null) throw new Error("setPos - no buf");
    u.bindBuffer(u.ARRAY_BUFFER, $.model.color), u.vertexAttribPointer($.attr.color, 4, u.FLOAT, false, 0, 0), u.enableVertexAttribArray($.attr.color);
  }, C = ($) => {
    if (u === null) throw new Error("setTex crash");
    if ($.model === null) throw new Error("setPos - no buf");
    u.bindBuffer(u.ARRAY_BUFFER, $.model.tex), u.vertexAttribPointer($.attr.texture, 2, u.FLOAT, false, 0, 0), u.enableVertexAttribArray($.attr.texture);
  }, H = ($) => {
    if (u === null) throw new Error("setNorm crash");
    if ($.model === null) throw new Error("setPos - no buf");
    u.bindBuffer(u.ARRAY_BUFFER, $.model.norm), u.vertexAttribPointer($.attr.norm, 3, u.FLOAT, false, 0, 0), u.enableVertexAttribArray($.attr.norm);
  };
  let Q = 0, K = 0;
  const G = () => {
    if (u === null) return;
    const N = pe(`
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
    `), E = pe(`
        attribute vec4 aVertexPosition;

        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;

        void main() {
            vec4 b = aVertexPosition;
            gl_Position = uProjectionMatrix * uModelViewMatrix * b;
        }
    `, `
        precision mediump float;
        
        uniform vec4 uId;
        
        void main() {
            gl_FragColor = uId;
        }
    `), ne = pe(`
        attribute vec3 aVertexPosition;

        varying mediump vec2 vTexCoord;

        void main() {
            gl_Position = vec4(aVertexPosition, 1.0);
            vTexCoord = vec2(0.5 + aVertexPosition.x / 2.0, 0.5 + aVertexPosition.y / 2.0);
        }
    `, `
        varying mediump vec2 vTexCoord;

        uniform sampler2D uTexture;

        uniform mediump vec2 uRipplePos;
        uniform mediump float uRippleTime;
        uniform mediump float uAspect;

        void main() {
            if(uRippleTime >= 0.999) {
                gl_FragColor = texture2D(uTexture, vTexCoord);
                return;
            }

            mediump vec2 shifted = vTexCoord - uRipplePos;

            mediump float dist = length(vec2(shifted.x, shifted.y / uAspect));
            mediump vec2 srce = vTexCoord;

            mediump float angle = 0.0;

            if(dist > 0.0)
                angle = atan(shifted.y / uAspect, shifted.x);

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

            // if(dist < 0.2)
                // gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
        }
    `), W = u.createTexture();
    u.bindTexture(u.TEXTURE_2D, W), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MAG_FILTER, u.NEAREST), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, u.NEAREST), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_S, u.CLAMP_TO_EDGE), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_T, u.CLAMP_TO_EDGE), u.bindTexture(u.TEXTURE_2D, null);
    const ue = u.createRenderbuffer(), de = u.createFramebuffer(), fe = z(), se = { prog_draw: N, prog_pick: E, prog_copy: ne, attr: { pos_model: u.getAttribLocation(N, "aVertexPosition"), norm: u.getAttribLocation(N, "aVertexNormal"), color: u.getAttribLocation(N, "aVertexColor"), texture: u.getAttribLocation(N, "aTextureCoord"), pos_pick: u.getAttribLocation(E, "aVertexPosition"), pos_copy: u.getAttribLocation(ne, "aVertexPosition") }, unif: { proj: u.getUniformLocation(N, "uProjectionMatrix"), model: u.getUniformLocation(N, "uModelViewMatrix"), sampler: u.getUniformLocation(N, "uSampler"), normal: u.getUniformLocation(N, "uNormalMatrix"), time: u.getUniformLocation(N, "uTime"), alpha: u.getUniformLocation(N, "uAlpha"), hover: u.getUniformLocation(N, "uFade"), mode_int: u.getUniformLocation(N, "uMode"), front_color: u.getUniformLocation(N, "uFrontColor"), proj_pick: u.getUniformLocation(E, "uProjectionMatrix"), model_pick: u.getUniformLocation(E, "uModelViewMatrix"), id_pick: u.getUniformLocation(E, "uId"), viewport: u.getUniformLocation(N, "uViewPort"), copy_tex: u.getUniformLocation(ne, "uTexture"), ripple_time: u.getUniformLocation(ne, "uRippleTime"), ripple_pos: u.getUniformLocation(ne, "uRipplePos"), aspect: u.getUniformLocation(ne, "uAspect") }, bufs: { frame: de, depth: ue, double: W, copy_pos: fe }, model: null, pick: { fb: u.createFramebuffer(), rb: u.createRenderbuffer(), tex: u.createTexture() } };
    for (const le in h) h[le] = M();
    u.pixelStorei(u.UNPACK_FLIP_Y_WEBGL, true), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, u.LINEAR), g = se, F();
  }, re = () => {
    if (r.value === void 0 || (u === null && (u = r.value.getContext("webgl2", {})), u === null)) return;
    g === null && G(), u.bindRenderbuffer(u.RENDERBUFFER, g.bufs.depth), u.renderbufferStorage(u.RENDERBUFFER, u.DEPTH_COMPONENT16, l.width, l.height), u.bindRenderbuffer(u.RENDERBUFFER, null);
    const $ = u.createTexture();
    u.bindTexture(u.TEXTURE_2D, $), u.texImage2D(u.TEXTURE_2D, 0, u.RGBA, l.width, l.height, 0, u.RGBA, u.UNSIGNED_BYTE, null), g.bufs.double = $, u.bindTexture(u.TEXTURE_2D, null), u.viewport(0, 0, l.width, l.height);
    let T = 0, N = false, _e2 = Date.now();
    K = setInterval(() => {
      const x = Date.now();
      n("fps", o * 1e3 / (x - i)), o = 0, i = x;
    }, 1e3), Q = setInterval(() => {
      const x = Date.now(), E = (x - _e2) / 750;
      o += 1, a.value || (N ? (T -= E * d[c], T < 0 && (T = 0, N = false)) : (T += E * d[c], T > 7.5 && (T = 7.5, N = true))), n("updateTime", T / 7.5), a.value || _.step((x - _e2) * d[c]), p.value > 0 && (_.activate(p.value), p.value = 0), _e2 = x, g !== null && D(g, T), u !== null && g !== null && b.value != null && (a.value || S.value < 1 && (S.value += 0.1 * d[c]), S.value = Math.min(S.value, 1));
    }, 25);
  }, pe = ($, T) => {
    if (u === null) throw new Error("no webgl");
    const N = Y(u.VERTEX_SHADER, $), _e2 = Y(u.FRAGMENT_SHADER, T), x = u.createProgram();
    return u.attachShader(x, N), u.attachShader(x, _e2), u.linkProgram(x), x;
  }, Y = ($, T) => {
    if (u === null) throw new Error("no webgl");
    const N = u.createShader($);
    if (N === null) throw new Error("bad shader");
    return u.shaderSource(N, T), u.compileShader(N), N;
  }, M = () => {
    if (u === null) return null;
    const $ = u.createTexture();
    return u.bindTexture(u.TEXTURE_2D, $), u.texImage2D(u.TEXTURE_2D, 0, u.RGBA, 1, 1, 0, u.RGBA, u.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0])), $;
  }, J = ($, T) => {
    We(() => {
      if (u === null) return;
      const N = T.target;
      u.bindTexture(u.TEXTURE_2D, h[$]), u.texImage2D(u.TEXTURE_2D, 0, u.RGBA, u.RGBA, u.UNSIGNED_BYTE, N), u.hint(u.GENERATE_MIPMAP_HINT, u.NICEST), u.generateMipmap(u.TEXTURE_2D);
    });
  }, ee = ($) => {
    if (u === null || r.value === void 0) return;
    const T = $, N = T.offsetX, _e2 = T.offsetY;
    w.value = [N, _e2];
  }, ge = ($) => {
    var _a3;
    const T = $, N = (_a3 = r.value) == null ? void 0 : _a3.getBoundingClientRect();
    N !== void 0 && (w.value = [T.touches.item(0).clientX - N.x, T.touches.item(0).clientY - N.y], $.stopPropagation(), $.preventDefault());
  }, O = () => {
    Q != 0 && clearInterval(Q), K != 0 && clearInterval(K), console.log("resize", l.width, l.height), We(() => {
      re();
    });
  }, A = ($) => {
    p.value = y.value, b.value = [w.value[0] / l.width, 1 - w.value[1] / l.height], S.value = 0;
  };
  return ft(() => {
    O(), he(() => [l.width, l.height], ($, T) => We(O));
  }), Xe(() => {
    clearInterval(Q);
  }), ($, T) => (gn(), Sa(ln, null, [Ie("canvas", { ref_key: "canvas", ref: r, onMousemove: T[0] || (T[0] = (N) => ee(N)), onTouchstart: T[1] || (T[1] = (N) => ge(N)), onTouchmove: T[2] || (T[2] = (N) => ge(N)), onTouchend: T[3] || (T[3] = (N) => A()), onMouseup: T[4] || (T[4] = (N) => A()), width: l.width, height: l.height }, null, 40, jS), Ie("img", { src: "img/wood.jpg", onLoad: T[5] || (T[5] = (N) => J("body", N)), style: { display: "none" } }, null, 32), Ie("img", { src: "img/tex.jpg", onLoad: T[6] || (T[6] = (N) => J("front_0", N)), style: { display: "none" } }, null, 32), Ie("img", { src: "img/clock.jpg", onLoad: T[7] || (T[7] = (N) => J("front_1", N)), style: { display: "none" } }, null, 32), Ie("img", { src: "img/tv.jpg", onLoad: T[8] || (T[8] = (N) => J("front_2", N)), style: { display: "none" } }, null, 32), Ie("img", { src: "img/phone.jpg", onLoad: T[9] || (T[9] = (N) => J("front_3", N)), style: { display: "none" } }, null, 32), Ie("img", { src: "img/home-outline.svg", onLoad: T[10] || (T[10] = (N) => J("home", N)), style: { display: "none" }, width: "1024", height: "1024" }, null, 32), Ie("img", { src: "img/format-quote-close.svg", onLoad: T[11] || (T[11] = (N) => J("quote", N)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), Ie("img", { src: "img/gamepad-variant-outline.svg", onLoad: T[12] || (T[12] = (N) => J("game", N)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), Ie("img", { src: "img/numeric.svg", onLoad: T[13] || (T[13] = (N) => J("numbers", N)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), Ie("img", { src: "img/cards-outline.svg", onLoad: T[14] || (T[14] = (N) => J("cards", N)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), Ie("img", { src: "img/emoticon-happy-outline.svg", onLoad: T[15] || (T[15] = (N) => J("happy", N)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), Ie("img", { src: "img/format-italic.svg", onLoad: T[16] || (T[16] = (N) => J("italic", N)), style: { display: "none" }, width: "2048", height: "2048" }, null, 32), Ie("img", { src: "img/numeric-1.svg", onLoad: T[17] || (T[17] = (N) => J("one", N)), style: { display: "none" } }, null, 32), Ie("img", { src: "img/numeric-2.svg", onLoad: T[18] || (T[18] = (N) => J("two", N)), style: { display: "none" } }, null, 32), Ie("img", { src: "img/numeric-3.svg", onLoad: T[19] || (T[19] = (N) => J("three", N)), style: { display: "none" } }, null, 32), s.value ? (gn(), Sa("div", US, [Ke(Ve(et), { onClick: T[20] || (T[20] = (N) => s.value = false) }, { default: qt(() => T[21] || (T[21] = [bl("close")])), _: 1 }), Ie("table", QS, [Ie("tr", null, [T[22] || (T[22] = Ie("th", null, "cur_step", -1)), Ie("td", null, Yt(v.value), 1)]), Ie("tr", null, [T[23] || (T[23] = Ie("th", null, "hot", -1)), Ie("td", null, Yt(w.value), 1)]), Ie("tr", null, [T[24] || (T[24] = Ie("th", null, "active", -1)), Ie("td", null, Yt(k.value), 1)]), Ie("tr", null, [T[25] || (T[25] = Ie("th", null, "click", -1)), Ie("td", null, Yt(y.value), 1)]), Ie("tr", null, [T[26] || (T[26] = Ie("th", null, "shadow_click", -1)), Ie("td", null, Yt(p.value), 1)]), Ie("tr", null, [T[27] || (T[27] = Ie("th", null, "ripple", -1)), Ie("td", null, Yt(b.value), 1)]), Ie("tr", null, [T[28] || (T[28] = Ie("th", null, "ripple_time", -1)), Ie("td", null, Yt(S.value), 1)]), Ie("tr", null, [T[29] || (T[29] = Ie("th", null, "hover", -1)), Ie("td", null, Yt(P.value), 1)])])])) : Lu("", true)], 64));
} }), KS = { class: "sliders q-ma-lg" }, WS = { class: "feedback" }, YS = /* @__PURE__ */ Tl({ __name: "Sized", setup(e) {
  const t = U(320), n = U(240), r = U(0), l = U(0), a = U("no events yet ...");
  return ft(() => {
    t.value = document.body.getBoundingClientRect().width;
    const o = document.getElementById("footer");
    let i = 100;
    o && (i = o.getBoundingClientRect().y);
    const s = document.getElementById("wgl-menu");
    let d = 200;
    s && (d = s.getBoundingClientRect().y), n.value = i - d;
  }), (o, i) => (gn(), Sa(ln, null, [Ie("div", KS, [Ie("b", null, Yt(t.value) + " x " + Yt(n.value) + " @ " + Yt(l.value.toFixed(2)) + " / " + Yt((r.value * 100).toFixed(1)) + "% / " + Yt((r.value * 7.5).toFixed(2)) + "s", 1), Ke(Ve(Xn), { modelValue: t.value, "onUpdate:modelValue": i[0] || (i[0] = (s) => t.value = s), min: 1, max: 1920 }, null, 8, ["modelValue"]), Ke(Ve(Xn), { modelValue: n.value, "onUpdate:modelValue": i[1] || (i[1] = (s) => n.value = s), min: 1, max: 1920 }, null, 8, ["modelValue"]), Ke(Ve(Xn), { "model-value": r.value, min: 0, max: 1, color: "green", readonly: "" }, null, 8, ["model-value"]), Ie("div", WS, Yt(a.value), 1)]), Ie("div", { class: "menu", id: "wgl-menu", style: ti({ width: t.value + "px", height: n.value + "px" }) }, [Ke(jg, { width: t.value, height: n.value, onActivate: i[2] || (i[2] = (s) => o.$q.notify({ message: s })), onHover: i[3] || (i[3] = (s) => a.value = "hover: " + s), onUpdateTime: i[4] || (i[4] = (s) => r.value = s), onFps: i[5] || (i[5] = (s) => l.value = s) }, null, 8, ["width", "height"])], 4)], 64));
} }), XS = { id: "menu" }, GS = /* @__PURE__ */ Tl({ __name: "MaxSized", setup(e) {
  oc();
  const t = U(256), n = U(192), r = U(100), l = () => {
    const a = document.getElementById("header");
    a !== null && (r.value = a.getBoundingClientRect().bottom);
    let o = 0;
    document.getElementById("footer"), a !== null && (o = a.getBoundingClientRect().height), We(() => {
      t.value = window.innerWidth, n.value = window.innerHeight - r.value - o;
    });
  };
  return ft(() => {
    window.addEventListener("resize", l), l();
  }), Xe(() => {
    window.removeEventListener("resize", l);
  }), (a, o) => (gn(), Sa("div", XS, [Ke(jg, { width: t.value, height: n.value }, null, 8, ["width", "height"])]));
} }), ZS = { BASE_URL: "./", DEV: false, MODE: "production", PROD: true, SSR: false, VITE_APP_NAME: "vite mtg", VITE_client_id: "quasar-2fa", VITE_client_secret: "spoon" }, cc = um(ux);
console.log(ZS);
const JS = [{ name: "layout", path: "/", component: dx, children: [{ name: "root", path: "", component: RS }, { name: "webgl", path: "webgl", component: GS }, { name: "sized", path: "sized", component: YS }] }], eC = mS({ history: Hx(), routes: JS });
cc.use(eC);
cc.use(ax, { plugins: { Dialog: jw, Dark: fm, Loading: Qw, Cookies: Nw, Notify: Jw }, config: { dark: "auto" } });
window.cb = (e) => {
  alert(e);
};
window.log = (e) => {
  console.log("%cwasm>%c %s", "background-color: blue; color: cyan; border: 2px solid blue;", "", e);
};
zg({}).then(() => {
  cc.mount("#q-app");
});
